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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ALNZTM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDev1Pe780RPi0J6kzqn1MevCwEbh8kJR5dnSluxGQyqAIgMO9DC1Qtm3%2FHuN3zJI3iaHPtDP2%2FL%2Bexu2VgCXeesNIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKJgN7Zs4xBnYmN1ESrcA01Wzk8nlucV6CbxQrwuB8ERimG2r5sS20eCfJXoBenKLA5uLYvOeXv2lovopI1OZ9xznE7L2Qpvcu1z3S7fD1p7Y78z7JXOwuWP%2Fl3um%2BA7rFyxcAOjOuuK%2FyuN1%2BeaOOTjgd7enKEu2%2BIbosJQJEQ%2FkuiZmgrvOvTqqdrVZxFnc8d4doGk79owqw5AqqjXvMpA%2F%2BkAuVOBEi6Nt53UaKnfb4%2BXAI7uQD5n%2BLz%2BhqizDng5jKIIv%2Fn4%2FrWSjlz7YzNvRF9BnAJdTitaCKd8FATGeiA3ShP9MMR2aJCb7EVmqjeMK7lZ3PqE8NhCuOkrVsPs4yaRr3kOMtEfAGyrvNI2qZP84bi5imiJdhzEfEuUegZrjv%2Fmv9nC1ZzrqiiqJdcmODju%2FKGbnbQ6gldqSyTFNM8q6OgZZjFj05pAN8P0K8XohzQuj6891%2FjQzjEo1cE4MorBWhTWrGaS03jy9uZKIls%2BR8%2Fxb3%2FGHzl%2F6VfKDG6iSbkD7izVpWGpftyKyRltj5Hb2jGvE%2BjEJ4BU8UdQfaDHc7TFut0e59ZdXEDa0XaU4Cd%2B3qnCL57H6g2H15buwfzdfiH3S9HmyUl0QcMAhQXKQr2IbAd79tnIGND4CPAnE294qAbqjXjOMNzSvcQGOqUBIgNCHKZXcP9Hstq5i9xbglG3zLPiKnDWvFIcbmns96ETflpHsf4nv6Ll2jSzH4rHGcDsaPh1DhusTtQuOPBN93XFF8LYeZcVI8x7QixTgJx8%2Ban7HDPImWFTwb6Eo1Szo0jCGQnUPcPZ%2BAjwR82X0E6gCuOjtTBqijK0mmEXGLXFpqbX7v2r0VGRvHcndHZUlxJY%2FfVKjMvrT8rnT9HjiuSP7B0G&X-Amz-Signature=630f41eb0af0158bdd47d73deb0d49ce2bac930e83cce311a0af003f8a6eac44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=5f7c8d3713bbbd3de5ca288b27799007e662a4847aece66812b95ab253141f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=9883e440dbb3bc87fd9b3f7e56a809d087ab7efb3611a9e744a429ca975f7d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=c53db9a1dc56ac47fadce1b90b99498555ec371d5332c4542711209ca97f5aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=aa11d4330225212a04b4acc4da48765b304ded4a84f35259e31c4d8d7613a18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=a164ddcd4d7018ea3d3c785b6abd54d222d64ccf4e5e65e7086cd8903cb2c52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=4a7c6bdeeb20d63d0b2d60a6c80fe32d16e5ef37f535213337be9e67cbeec347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=ae1c32785a81fa368627e9a031f20105020cbbcfa3dd4d29bca286b0db02a282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=3bb0aad0825f9e4453e930eaf5af5b3c55a1f82292ff90cd7a0de31206e15de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=50bfd232c3346ae1b39d6a944d583787ca8acfbb6cc2194c248a99750aeac786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZR3WER%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrOTV5sHU86xdV9JuzIN5Z9CRYSBZ0K7TK3QRFE1ItFgIgSwFmKr0cFjdBgNgyG%2BtPEbfVFFOH87OjzITVpqDqSV0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHmE6ocHTySlt9lpfyrcA7Td4PyRD4JYMgebu44iCpmwr8C705vDt4vVZcdA1po2MIwHclP3vJLkHy0LYgLsQQ0hgPI79w%2BYYpwAZEzZL1uu41MyPwvOchK%2BKflDyD4qxC9EmJP0QwU3jyJTcuYQm58AJG55jyAWGN%2Fv%2Fo4dqLVEpJebMy4azlq1kh8q44xNcDOSS2w%2BwlT7ipAp4Di9Z%2BsK0%2Bjb5M0jzcbxvoU9T48lmDFmxpIxl04SQQNZXZRk4BqKZ0OhJjBTLabF9iyp%2FVKd6ySUIoVSPDEjh4EMrMUlWm8aisTDr87FROyza0o20phSLCzD3SjeB2PBMyM5SnUdkp547PAw9x5L9qUDovwZlnl%2BqIwIs3fmrVp8V0Zm2PvQqJkjdDeHhDPUhLfXyuACqegrAS778CynsDjhz%2FJJbv%2FdwXYG56PkblsYxVInjAopOyx9OTrGYBGTIo5pac6%2BJNaQCnUN%2B9rjMNp0FOcE%2FE75jIt2ov1%2F1jCP7I79sMK5cMqwGGpxrYc5ujNoozTlyD75vwOhTWsqxs36DfaIKJr%2F4McsihEB3qkHeIwzoNgastvOR12ZIA9e0B4d5zDA9WIotttaGnUxHIPWp400Bgc%2FaCK6ImW%2BizW9fJ04ipL5I4nDuBhenrChMP7RvcQGOqUBaUE2GqVdvGZCQDDZzP9y7EvucT0pQEY2sfd3QkHWL%2F8jKWqYwNtAFKtN97dFvb87uV%2B3AETKGBsHZL1ghGfOTA1XfATSL5tGrGtknAgk9Qy8kbtipVbcf5IBd1PcUEs8DgFGFW0Cn%2FIzl9h9TKXJ73q%2FNyyex3SBhYGsPTg0foBLJCK8K4gaeh6qghmLlchFOgFk1TipcV6kFj4pEWfsOIoE60tw&X-Amz-Signature=aa11d4330225212a04b4acc4da48765b304ded4a84f35259e31c4d8d7613a18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
