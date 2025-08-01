---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=d79fad37034591bd44808137017b162140667ec09432f1094eb584415a56bff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=760b0d3ae02a1a7a6a4a184225300fbb6cccb63684fff953cf7bd3c7f9015ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=e3205baaa553e5801b56a997a03f3768bbf80db3127578e48d7a7525c517175c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=f86acbc06b4a9a2fa30ea8624996e1a40cb899a83d2b0446cbc5939c2fd96ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=d4e110703692a12bcb4a04fea89ced9b22b62b3d6fb3953ca307948716e28bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=ecaa2d16295526a4afd497df66a297f1670fbd0c08eb5b821949db4467d7e9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=dbbcbe071c7496fc72617ba85640af153d44b1d5541cf9682ef71d72f95546ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=21653f7f081f61e25a184acffd0e3f37aff6150353e3e2ec7db8d46ca9d9a0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=f87e70145eecfa85d36bf44ce2f4851578d4890e2c2d308a2b834ad2c8c1945c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQAB3V6O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyFgo8lsmSe%2BmGeSp82AOMHuIAbjZrhbkz%2BCnlQ95iCAiEA%2Ffw5HQvwlE%2B0D7lBTIkSQ%2BGnauO3u71DmFMjrnEJL14qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKbHVjPre%2BskKqh0CrcA4luF20jLyWERjAJYRWs1KlcIiLRc%2FJ3ETFNEpUW1qqqhQmxMZwfYtjXOX85Mv2eormU8eVnE3wV5kbov3j2swrfNLp8YGFvQBjLlr6Frzx2FDY1nwSpwIT2xsawMBeRxjkb%2BilR4g%2FBlrJU%2FJfQnMVCjBEKFgfywX29pXDOk6yjghBynA%2Bn9tTkzj%2FfuBi%2F%2BT1GILRrQ%2FXAihnk3Hr99sB6HEA%2B%2FSxNydjpxAP5kL3T%2FeRDJJVY3uLZCJJFSbKmNGTtcHHQLJ2TRyqv%2BopoYFEc0F1dJvqaajMfrJddpKhEngiv3gHE4HtRL%2BF3DO2%2BxDEod4DDT5HJphsNU0Xpxmrphjq%2BzTLP2hZD4xmgR%2F2uzO%2FDVBDu%2BmSO3WT8Fwr3BAZM%2BoT4M4xrLelyyZ8JHADAR93ND7cZzvgzx9FBBSo3RjngTLKKr9GXhWVo7bKu3AfT4My7t1PxMlBwzMUr7HCSk4Pjk0dJIy03zau8%2F9scONBBTqc%2Ba2oLNtPLYCEELu6Ne7P0TNokigmU24rXb%2ByLAgXGBUqV1Q762hxvnhEjlEhSbvGAZigScHqL%2BGzZqvRZkru%2B4B1rXfrV1Jp5Kr%2Fu6fb40R6wcVXVOj9ARf2K7u%2B1v4uy4DyAp81aMLuhtMQGOqUBoVk0GQfi0lgJdR4wEpNaxK9u5n9JH9qtK91BhBlGzI19FiONTMSGlJU9IbQfU9MntyQcJrv1A8xBTRnU0kIGSEnsdxZt3Rl8aNZY%2FYqS9i7a%2Bgf6iziGoL5jfR%2F6%2FGETH8Z5uoshinV9Fh2gVM1Fkzpyf1ZZjepWlvaxAQJB80MQqktSG%2F%2F1ybgQaSLkT%2BGyPLw3Q2YEA5%2FP1JQERrIFJd%2FznoUr&X-Amz-Signature=861bee8aac6d36856f8d9341514d54926bdd8bed3bbdbe23aa22d62ccf2b84c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
