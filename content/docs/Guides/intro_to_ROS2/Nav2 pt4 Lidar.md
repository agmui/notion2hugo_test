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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=50946a6549de107ade68c1a337561fd75cc0b8c0376a0dca371caa3eb8b00840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=1b115f82fe1f4c831770e9b4c6d1dcc9d5b44c779cf6bcc3181308be7569cfb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=fe99e148a5a92081d65e7ee65209b570fa27a591467732b9d382ad3744f284ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=bf4c6eb818475b72d9f8ad264e3ef9ef6989588fa34dc4d1d6f49ed30204b36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=d27dbc0e071b03d5648c6faf47bf9d4244a5d6f709cbe14c45417e33da6ce7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=620d70a573d6b87d485735e42a2a06700345e1c2a277742e4d6729ebc5accc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=5c3fc88f15a30b07075fde17b09e24511e23e8a65274043056f7f569720a06f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=8e86e5e39e2400dc36d5add8c8223917560585c0fea18fa3bd6ca55ebb2b95f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=959d1ec219ec2bff2803d8ec57924146b2e9208dc529ebd3c9bfb8bfa1738e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYWBZ3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4gPJgxzFDPYEZyLKHYk8kHfQed544zJTX%2F9IeNNwMuAiB7yhHHY0wFTMVynM5BLnyE0Uy7JF8MmrejOeb15A4eXiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4K0E3%2BlcMQKklBXDKtwDc2GymJ3cFlYmILtC6CFFQodh3sl2RtOmx5chX0Ddg71GaoIcq92mMDlZ2Z9Y2KuSYqvz2jlduAgUbNRRCNNgt0dGp9CTLKZfxecMsJ2MVFfDmnZmjbnO0xGUDjxBYE0UruMflOc86ap9vrP7J%2FIrqHLJZYGbu9rYIbZPb9GNp6XAF9kE%2BQjzvgYd8t328sJ5FdxSquEdHZ6KDSOF4Cx6fhIL5FIIJjGG%2FwweNEUlNIEaXqpheRPOQLy4oY1Xz8YwIF97D1f5EFdhD51KBhLntiIxzcWg8pXrF8JgUUKMDPXOLGAzRRpv25JAaVOy5Br1r1iTP9bFfOvE3XAKlkQpg70F1U40z8O5u3z6mC%2FtnxbW8YMKXr4hJIiQTmFPY4rGlw7ninG%2FGlDaWK%2FLOXoKpdn8cRnbHi3rBRd1JpBwict6qq4XIPFz5Pl%2BxAZxiYXkFIkWLNZAIEtL9d3l3dZJeb1QL3q9apFuJLLJn4DFYbv2Sc1UZZ8s4aoeXFB4g7SlgzJ%2FMNR4wvuZe28u5qtRTvDOX0gmW4PIj5pGmCb%2FpRssPG54nR2J5G9ZLhgoKIY497TopKhmvMF7KHlTftAry0zRmRVsH6dFepj8qkZ4UgQx1aUo45YrkHLE6KEw24epxAY6pgE27EQXSZIJhd0XEDwcFV21EPpoZj6WMfBBfLszgFqjm0iJcpSJS5JzMtM%2FO2cx2ogJYHR1fU3yNMrkyTY2PFQv23sY7U1vwSvwWrrRyH0MOq8o6ELKK5q4yRMwgbxYJhtthua4DD6b3bRhelJ0E5%2BhnEWiffMOzO61WBmn8j0E%2F9twDCiWymPRO3uSjlrAsIXHDffA5sGUoG2ASVlSCloRkaI6d0Jl&X-Amz-Signature=24068ab6f61aea1b669629f0db7cd297c8468eb045cef6a76e73cddc59586705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
