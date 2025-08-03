---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDFS5QX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKU1Ro03wcgd%2BeK22N0BCoXI3PQDFnM3PtNgI28h1lQAIhAOiP%2F32CVsqT4j71mh044EB1mJqpt1TegU5aLRkm%2FBdGKv8DCDIQABoMNjM3NDIzMTgzODA1IgypttOYTAT7y%2BpU4xgq3AMXJxkhTYKmCyTsyjYet2vkMhN3rFs8MJ2q8jzEy8DECIPmXdn817HeI7o4FEeCS1Y6SdhWSBPFFHgHc9WxQ%2B9SRCC5vhO9dQm9RBa8Q18lBFadKJPr%2Bgj%2BFBZBaNIk%2BAUY%2FI2u4hZWzMugtmiSKotzbQIEGS1gh6dQyuO%2BE2pxCiRhJQ3jJvzjrwIiy2afUXrdiB3xxgAOqfMEPqAcrQ%2BOvX%2FaEqYU9zfy9sFeoKumWYmSulbSauNUSSXQbCYFWAE9Jco105rR%2Bit3Rc%2BnRVNzdHiogww3U8%2BykFFG3BtmMynX%2F5trtiDQaobup2tZdE7basrQcX6g0%2FqJtrSunqrFmgnc6GonM2Y%2BdylzyiNTfFIDeLg3JxB6rsMRBHxTzh%2F2CbB9XpMZex%2FC%2BVZ03yuIlrnDUgB0IJ819V%2F0m9fCCGblma9sE8svnV0Z80LR5GcSaDrDwfcJUBqXOw6f%2BIFr%2BN14Pncc6%2BwYc86TCRUt8vhQ4D2psgR2GW%2FPxZOqu2FdRztnw%2F99rwEtEaEM1Wgkz1j2RlrgYviKF%2BCpw3Lmpa9ty2KcfhEpfK%2FTnE4empMErZk%2Fsmp%2FylwNW4mXRNo9GfBZPDD%2FcPK4BERca7u32xtIipV9IhnUPi5ifDDsqr7EBjqkAU3rTPMeIoMCiaow5LegzOPA4tQwFWG4PnhYka2pDYd5vt1Ut9C5U1tqJ3mgyKOQCGxkDXImksp8B5BWr00vL1Nj3hKL3T%2BblsVcGWRpq79kK2qitClK7mXeXp3asgGQQJ2ZWOGZ2JRxmtguknddvm%2Ff3PFmisrd0ougww%2FRoPyLO5MDiAtdeaHKtuJLkT5oEppyim3k2%2BZ9C8rzglIjQCyyD1eB&X-Amz-Signature=98b291598f82c0f6b9787843dfc341436e0cb92bf62b37c684373ca84be44ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=117949309d2861175d159cbd2f4593dd0625dfa8cc4270e738d90dea3678b688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=98e2042e4a1eccc0235c94558c731d3a4a629632139b9e67eeec09740686d624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=c2badd21f5e68cda6f0b35dc21372e82f8a9ab6e2f31a9f8dba75170e80476cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=d4ed79027a3f18c7b3dc11df52505eb6c396eea92a92b21d1fdda2c2fc16f62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=63da65368a069317b1217c9c7559d0241624e0d3084a09f9f36f1f328ebf8cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=b8af3461f6143a902bc38214b1c2445465f8c3d49684df07528832fcba260e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=d075475a3fa5d66057c3915e6ce863deb0c945490dfa7316b594bb56243f7e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=0f6077681ebb156f025b623231e7c1101b1b8bc5f0a6f4a0d035c59cf8eb02a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=20c788f95dfad2030431ce3772b208613ebdb2cb69f8e6ef0006aa40f045e1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSS5KKA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZCySSTUOUTeoqz2AflPzrWlMMtwYDD6EfKPSHsLa6jAiEAoNVjK6wSDlyLvccVxOYD4%2Fm0V9iSX4LwbiQIXcGTL90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOAY7CRmCkO5a%2BuC%2FyrcA1JeJ3L5p2WGj2QcCRcgR0jEOadwbj9TOP%2BhiQhvbnvjf%2BhyZKHGnGeY8B1Y3OGlBopn4z%2FXY5o%2B%2FwToCHM71AdhOg367RRz2tzNOqmloITJEWt6IJi7ks0aUadhGpNWoqFeNUwRnjF7wJletVZNrr5bgTg%2BZ%2FrhY5P3p0udSI89fCfuhaYv4z5Lu1LuVPjqI3kJLsDqR15mMaKMImnGiyutCAPTCyz5TgqLlAhbuCgHSlAIIBVQWzbPFBZXs1NidG5ZCwy0ZXEBKeHfSSymDGCkNJs4xJsLemPmKZaj0rYsVwybBOxCgMZNoQ9irSNSGV778NNx3NZbSBvraz%2Bd4n2Pojw6qAHFmWl8sMXs3zK%2BG8AWD8JIy0KNSJFryyNdsoFY41XxFZ6PUzwfDgs64WKc%2BCRQeTr1wubfWW5%2BVC8xQ4IAIQSHt%2BDfo1UKlXJE4XcbhrB0p6YJtOlh4By83EuGDIT5SQJAyC556YRZEdUwq8V7pwretb6YqgESEQCn7O%2BX5llubu%2F0JchGbJAtM9vnEf%2FtqzvBNE2KYcHDKb2gXTSkmaZ1scWEnOkJ0mYai3tcZaxqDEbgciSpIftWSbzGwlScrzBpVsymvD8PWp2Z%2F305BLEEPE2NA2MyMIervsQGOqUBWiVGhkH8h4pElVGGYeTfFrbPZmLovz4mQeSyWYXQbEcXqJS%2B%2B429a%2Fk4yhwd%2B%2FdTH6kHufPKkrsDtWgBY4TWj7ypBGklYmD%2FdLSQZpcxHwa5BMh3lRes8aUTv%2FArPOv5QFbCpkIq9lHHyo4KiszdQ0B7TS6R5o2DmudtKcAJkVsitqJ06HOYDbdU9coh%2FS8Q1iizI4JRGzhXUCTvzcjzPMT55fl9&X-Amz-Signature=d4ed79027a3f18c7b3dc11df52505eb6c396eea92a92b21d1fdda2c2fc16f62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
