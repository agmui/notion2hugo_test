---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOIXBLHV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD9G08c9vq4eCgntPoMz5W0B5PGV2a5eZzDFEJ3uS2kwgIhAJ4L4Wxf6nddqTfqMbvNcipqe5wljwpeG%2BUF71oZjhHHKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydmuT6MRiZj41VtA0q3AOE2Y%2B%2B23oE945kwLNMKALAAqarZ9fG4TF7KTBTXEyJ7Zn8W3y8T6spZxSwYyEUCBY3W4y3V7HfyGTahskXjwaS2S4mgrm%2By2ZITLTSeid67rNT8XXrJb6n4R%2FKJODoiXNDr0Wufq1c6ztHMiqXRAvqjYyuQrkJMFUO5WSDFAYqKwi%2F2hFAjCqaKOloXxbn4mQj8UnxHx8fSIu71Fv2h8LApZpNHsCo9kbna77ao841dkkatuxHd%2FpOlQCZVkj4Mdj04tiPwofkIcuCAxZVFuXJaqXmWgCCO9V4iU3TmtmYZlNQ6x9KuTcH7SK0A69Iska4KR8SBrEmj6%2BDnQeNjHQVVVz6EPd%2Bjc97GqFnj9EUlynBIezcioMWzxSdi9ZYMm%2Baj8GjFsN2Lw5xisaRQimdQ08M7dsDfr%2BRiejpgPz7KR%2B1BEmwygdCmLgDXikGT8mzbiBaMftJt4HMXMFtnBDHL9vRxqPlV340C8mCdxG2frH1dBHmWKMuisb4WLO9AhXXJdByYuWhuX8jkkx9H4xAaL6P0sG8enVV0tDeuP3pS6P8dLOVexSblq9OLn6X2uuqJHIby1X3lYdp5i85SekX%2BCd0YS1YDaIbZw2eyUvo9MXdpw8xlXMf6SUE7zDek9TEBjqkAQ9srLyzfNxVbJScCDtveNkfODqoe93mkOzGWfb6J87LGv%2FIhH4cev53XHVRbCV%2BW065wvGyW9lh8fkoJ7Bnz8XHWgCACW5b7RH91SiZzRe222ZfpWubZsRZLWbsDZxxOZiZrHCUp6%2BMe3sMuDK5K1NKrRuL5kVrQMSOyR1I15k6u%2F%2FK%2Flcr%2Fx7duWc42Z4HEA8Dno%2BxXCOe7a%2BXayKyJFwqjfRO&X-Amz-Signature=d1965f20d8d67829e92c89c2a83c5023fbb5026936c37d55fc9e07dc5361b545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=4750e6790e622dfa7cd5debe039ed38c12fed9864a069d49fd7f7c921ffb8c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=ba12a24c42ac26a0a409935e2a08a70a997a8a37ae8db901c0c7ee2fd239aed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=ccdef678becb634167a3bb52930ed7e845647fdbc0da055e80a945540e16da20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=6fe944193d292c449e1a2b6222ffa384422860bef3b210b8620f7640e2aaa995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=727656a5aa089b074d574a2bba1d20d898de175dfad7378b89ae845d8534a24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=2f865631fa14a808baa68f4b49ca003120fca1403b2e7b1a041bc03410ac5b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=a1deb7345b1dcd2b7ede5afefe3fced2793dafd114eb069f6626d4983009cc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=579b2682fadc8e5a3610721de3df8f6c91a2e8d626fe44fb8559cb6b62ad15ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=b706691cea28101836c6b872965fc5f3f402efb811007288c68e4a15fede2b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LZ5ZKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAnOBq8I3hH2vKu2jGezInq85Hq8HI9t8yn6RstCDIGAAiEAoH1Hb3iCevnER4ymEmUVYqZ%2F74vHzGCjYncklTzol38qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCNBWurm3slsKQzGyrcAzZuAHdBpx4IpSYmoXehYVTGgBOsQFyM2GEa%2B90A82MaH2WDf2%2FF787U9FsXITsVdextTMuv8R%2Br8%2F5SQpyTV23tnnAyntN6n3CgKwnrEFDrQLNxUmTo8q7afVZJO3CcUa0q3K9z4dvdm5pz2BSAwWQ9uqHD30p0SavrX9CHbmRfjq%2BiO3MKJz8ENQxqYSaAEiHsiX9gaC2HyjMMOkrsQd9KGakJteBYNSLR6Zlgheq3LP7sN3kOCt2jPfifxfZhEV%2F9HVU%2BSD5lOKl8p00LwuBA1tfvY%2BhEXzFGSnUqhrl%2BSeTALwrFLPZC95lwSSxPSe%2FpU9%2BJdS2VTINqSiL1d27zFlSOgGbUPr1sjIgUObxuYIEfwloh7ZndbLNWEiwZY605qsCb95%2BU0UWAPrRolTwI33eoN9ftLYnfQQPDquyVUYsK9qlE5jsEWIFsG1gtcHXCqPZIikC2P9w0QjKbsgP%2BRtlA94Pyi%2BK%2FGiiRqwRiYA1gIR5cI4Q%2F6OP0ESXOz%2BVprBBYszXC76PKLFTCte3nZvmJIbri%2B8UowJd%2BAEnO1qe11R4hWOJxhHcBX9HS%2BwD5D7ndfoiTjqw6bc1jsfddzmm8xmlbWATddQl02du4Q89rCjbnmtXXKVVeMLSU1MQGOqUBX1ScwIo77u0u%2BLGF7xTmLRkJCVC%2BkJROskReYfNqEg%2FQs5X229BtYQXE%2FKFqiSbq9JlaJIj0Exc1tm2gcq05AOPIPg8U%2FYwXjTEagNtLFiu2guuH3G4G281zmR7Bt7wcv4FWFdP%2FVgwLibTVVrH0rKDkXUfxqWXHEbVPDQtzcU%2Ffw7rlBoeW%2B%2B5mz8FUpS1j5LvhyfKeou6fsc%2B0Vk87k%2FG5KxLP&X-Amz-Signature=6fe944193d292c449e1a2b6222ffa384422860bef3b210b8620f7640e2aaa995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
