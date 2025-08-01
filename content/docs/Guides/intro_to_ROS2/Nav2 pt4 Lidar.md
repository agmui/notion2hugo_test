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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=b00615508b0fec9b4f807a90d8482207040d4b5882e7f7449a8eb995721ff032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=97d05b35c731d0f175804245c0e4083e5ab0c1bd14bb07585239e52ae61ba63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=bea66261a328d7c62637b7c4f2a2ff8fe5eebd2d6f417cd272952c931bd00a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=1371a07bda748ed321517432280ce53f4ce8fc6eca4001562fe3bc04373917d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=2e3239303e06be47e3a97c0ce0057abdef976dd3faaba53bd69c05dda79799f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=7d900fa19901fa40ddcdb33a2f06d278731e7e9fed016faa5e3f82fe87523f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=4f4b003fe1a256157e40c7f55bd532daa1a53a1f8ef2f5e0cb75bf5c820bca03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=891bc0397a36f23380d2f3fc340e344bb05f530a061f683986e66fa67e6fe9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=6949560ee43f5aeafc983df502b7f13bd7dee2c100b810dc814d8be072c04ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZA4ORKN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI1lhK528RT60%2BQ27r4WdHij1TC3AmD3DNEDm21D4C5wIhALc%2FFp8RT447lqlzVIRq7GfDa7FQxb7ZPOxo9e%2FGtJF%2FKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3Zl59W3LaFzrqaYq3AMZWDtd0cFLW5s6QCxp9VfMkiBmSHpW%2BER71DQn8wUZ0DhY7bs7CALXLMTcDB3vdhm66X%2FugIEWA%2B0SX%2Fbu5BM4E9ktaMILgu70lkx%2FaFOPqDkpLIWsJp%2FgqokBHxaKeEbbugAWwJhUMM54yAW6nD5vk006n54nRObR39bBroY615%2FGCWIMnA5NIm%2BMx7DacHlzPSQqUoWnRbau8FF5h00Lpnt3PxGtKVhl0ivRS8WqdOnTfb1oOCsTFNQRjfD%2BLYhMl6WExTG3qmmzeG%2FOJIpWIGd6Wts3G9Q7MwI8I2hIE3wLXetyRu2ZW7FfJnYF2UNIW%2BQkfM%2FH7dO9mryasQeKeCf6Jan3jHg6kXcV2ipE7emObjjJJK5wr7%2BrJ%2B5QLGA0q7f0HBlDhgN1LHzchDs%2BbE7x62QrTKgcRrD5O3eCx4KrK4ZH6fU0MMEt%2FfhtRroxNM48msgbWoCf42W7l%2Fy1vcU8EeafJj0w85seNQsiaCbYX3Zv9NXDBz%2FVQIqt6oE3VDZCwXgyQTScA6wqF5FEgLDqobYdn%2FrWM3Iw7H2g08s9AGJGeW%2FV9%2FC5k2IY94wtVXMEUuprSsnmVBtT%2BRWXC9021wWiIoskDSXxFrk6ucfll7VIQCs2fofGczCBtrLEBjqkAQUQqrHR21WaCLM8xSwEvF2XxRKmrTOjZ3h8SYqrtkh6SlwAFensvHs5NqQo%2FyAjk%2FycazAzE8DeZoIAypvzZaWOhFSg337qZHX2FV6zRcCgVpAWtwOrS3gHy7Q8hKcUdvi8rnfFS6KjjGUJxkXPJFz2WdmoP3wAsXuOX%2FRZCmGjdNBybQIbyVEk%2FAooNFN2vmAAHnAh%2B0LtCYUU8PfZLwt0Ku3v&X-Amz-Signature=2060a345840c3218c799bd316fa665b90708a0944e040c1363747c07abc05452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
