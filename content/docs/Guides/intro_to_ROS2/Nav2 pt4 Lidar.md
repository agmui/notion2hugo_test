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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=a756daecbeb6649e9f9ef562f2a81416110a79adb1bead4b72bf966f428c68a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=5c87339bf2a1601a6d99f5009fe61cf9b1aa963d3d78b0ea004a3792aef41ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=378a14bde622d9778018f2a0d2ce769dffa3e116472773b10ba415b236c81d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=36b2240695b840c6c65f7e3ac60648c478adfb0481aacfed3e549d170e33c9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=3ba433d00a879eb0bed3a22d97f7fd7aea24a779e14ca822886197402e0b1adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=a8b0f3651c58fb0529e1001acbb6984e296ccd94fad500e0bcec89b049796e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=bfe8eb217b3476a9dd86d419192ca5a51c569ed3396ccd6f4315bc778c22f12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=940148f6a853bbbc622ca102e41d990d0a6ca15808b1dc2d83468fcbbc072f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=32024584c05590ebe9a161c8c23bf8066419a576acbff2632a0bfad46d685bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZJ5FBD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RLgFtJwVlZKTJOOtBcyESB61qoeUh0y1h0WeSRPfsgIhANaKhAi7UYne4kbFv0UH3aUEeeZar4KCGrYTv5Fc8DmZKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapqImjFZPFO38YB4q3AN90%2BK%2BMs0Fm%2BUKs0%2FWNBn3afDfkmPS25JVLb00io4li0ca2QjWwV1r4R%2Fbe7fVv80vIXRnzRc%2FUC%2BrCcawFJqbRGUkFxpF9wY0QSDtavTUvObk7QyrMrf3cZE0lOF0e92SXJ1LQs1ZT7%2FR4BjWZtfwRXWaeNN2sAyuk7VQr4HwH8d6eUwLtJ2RCFC7vEdQ9Yj2j%2FIb8hTnI5BSlfmKTv3gwDZbuOl%2B%2Fs9u5hSQDr%2BlBJBw03ZzW3epvB3HY5ny0DLH2YG2N15pXEb5YsXs0a0swfO0UEZDvEo%2BvR8uENF4o61VxmYdn076tJcyCw57h46%2BlD96Xi2zhejAbyNvdQOOS8f5nyMS6LSFgx20M25r1rLCS0WhBhydSpp5g5r5kPTA5%2FhPM%2BFBcOvJYBv8P6%2BA%2BMB3II%2BFZZ5bxQVYvWyOLeqjVRnu95rAELHkDtY5oxF2FD5zogEDlDiSDss3n4If0vecZzxNs39ns7rVUKuk2NOE4dG%2Fgqri8mjVxegFMxCZNA5ulyZ2n3kKbU7j0e7NAZ1oJ%2FoJvenJUuzioS8bQaG2jjPTifmNMjerKVaCkehIST3aUS2TnoBbCNjEZIZcdJL3nBdbU4oe5XalCmkcznMk7FJIPMYyZ7n1QzDvm7HEBjqkAb4Q9Xa4WXCb9uIF%2BzLaQpET4fgsAbweTQAStMneItqTwHc%2Bm1sblZzkyqkD3Oa%2F4ze5aM6Ws7bh1WY%2B9eiUosap3UivqYHFGjVVAR9BUg5o92447KIMq2J3GneZ1V%2F0DSedWBb%2F7lSiXMs9Zz5Y2jys9YdS5ki7c5%2BHhMX0YNGW0Jdk7Q0QYkQ%2F44dUJSz0T9FwOIo3S6r2wvozcBX5fZ96QVuw&X-Amz-Signature=c5b23d9707c8df18d9c9e71af96a64f215bd9ee2bc467efa680560703a86ee40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
