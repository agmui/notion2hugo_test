---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-24T23:11:00.000Z"
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
      Lidar (light detection and ranging) is using lazes to determine how far objects are.
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

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNZQ5GZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDLyP%2FCsSYHU%2FTF81kgvPz0mS5Cq0IwPyTQ6vD3ilLw2AIhAMFIvrGbAXNp90sAbXiYWMuJQlgFmkLV1FFEKV1AXcnGKv8DCHgQABoMNjM3NDIzMTgzODA1Igxxvqb2FqIJtb9mTjoq3ANlvSMsC2XVC3BWVxrHg691wPblGrUwkxi6e%2FdzxXzxXA8kpiVcEi8bmaAw%2FtglWuqljs5YAEtTbtwmV4c%2BZqt5vIIR8b0c89h32cyEEZf3Kt23cYBWiW%2BMZLc9TRObp5JJIg0HDIRnGQwpW%2B3iklRavxBgMli%2B8L2z2n1ia4iM4DHStBaO1VE1Y8WZhsO%2F%2BFPhuOUPVao0Rn%2BFKuat1p4jj1TWXSf2WFnpDsTl3VdJ79W8184W0Ev5AryGMx1tlolFq5UeukIz2kYJ6%2BXHKi4R9ff0FhPIcwYT3F9eARk0%2BzBKFxPQrZgYK43TjsRm84T5Gn5SB3pSc1UznpEq0wBHtGtU8qZZ7z28qtUYjiOxUEzRfJHl%2F%2F2R2jDGyxZxNdOAO6OcvTgieTAC8d8mX%2B34BjLzBWNA2rFt5vBswiH9i2ONrAFD5luCCk%2FrkwjxTOeSTA81tDvYEikGUx52%2FWkK1SKY0GzZIsKz7CUXlYSEzFD%2Bbf58eXXZW2WaCfQpUZ6e7H9JHWJW5wQvr1V%2BDqIsW94gIX1UMXWFQIAZD0TDHQxElV2YR%2BaMxoDmuu0VujihgAWjsAaPBYKdKZqv5JxfpLgFMybwCmZ8Ck2Wo8cOItUJanV3rpJpwaYpeTDC%2BZjEBjqkAXfvTJ%2FrUScVosLsc8p7vodD%2FTJIbxgqm6Ja8%2FfX9xauFJsJNCaeQHnP2y6SfF8E9u7EjzZPhMDah%2BMfoVSUBcBJAElVlergPE%2FuR7ZHxSvclBbJukTWet4BPAbYdFoyZDnmmRmgDU9%2FyY8g9x6azzEYriU%2FUhhOpL4HqXgJeCAv%2BVl3btTKqYmVuPmTE3Giuj8heyLRmZSn1%2BcyOvrxBcwDrMP3&X-Amz-Signature=8ce89c9cce45e8d63a3041b5fc3d911c3039c157803890430dbd2546cbd9693a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rqt_graph pic

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNZQ5GZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDLyP%2FCsSYHU%2FTF81kgvPz0mS5Cq0IwPyTQ6vD3ilLw2AIhAMFIvrGbAXNp90sAbXiYWMuJQlgFmkLV1FFEKV1AXcnGKv8DCHgQABoMNjM3NDIzMTgzODA1Igxxvqb2FqIJtb9mTjoq3ANlvSMsC2XVC3BWVxrHg691wPblGrUwkxi6e%2FdzxXzxXA8kpiVcEi8bmaAw%2FtglWuqljs5YAEtTbtwmV4c%2BZqt5vIIR8b0c89h32cyEEZf3Kt23cYBWiW%2BMZLc9TRObp5JJIg0HDIRnGQwpW%2B3iklRavxBgMli%2B8L2z2n1ia4iM4DHStBaO1VE1Y8WZhsO%2F%2BFPhuOUPVao0Rn%2BFKuat1p4jj1TWXSf2WFnpDsTl3VdJ79W8184W0Ev5AryGMx1tlolFq5UeukIz2kYJ6%2BXHKi4R9ff0FhPIcwYT3F9eARk0%2BzBKFxPQrZgYK43TjsRm84T5Gn5SB3pSc1UznpEq0wBHtGtU8qZZ7z28qtUYjiOxUEzRfJHl%2F%2F2R2jDGyxZxNdOAO6OcvTgieTAC8d8mX%2B34BjLzBWNA2rFt5vBswiH9i2ONrAFD5luCCk%2FrkwjxTOeSTA81tDvYEikGUx52%2FWkK1SKY0GzZIsKz7CUXlYSEzFD%2Bbf58eXXZW2WaCfQpUZ6e7H9JHWJW5wQvr1V%2BDqIsW94gIX1UMXWFQIAZD0TDHQxElV2YR%2BaMxoDmuu0VujihgAWjsAaPBYKdKZqv5JxfpLgFMybwCmZ8Ck2Wo8cOItUJanV3rpJpwaYpeTDC%2BZjEBjqkAXfvTJ%2FrUScVosLsc8p7vodD%2FTJIbxgqm6Ja8%2FfX9xauFJsJNCaeQHnP2y6SfF8E9u7EjzZPhMDah%2BMfoVSUBcBJAElVlergPE%2FuR7ZHxSvclBbJukTWet4BPAbYdFoyZDnmmRmgDU9%2FyY8g9x6azzEYriU%2FUhhOpL4HqXgJeCAv%2BVl3btTKqYmVuPmTE3Giuj8heyLRmZSn1%2BcyOvrxBcwDrMP3&X-Amz-Signature=4bdc17e6606bfa51b7377ff1adf1a771f2f7d815a2cb0df72ab20aeae566bcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNZQ5GZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDLyP%2FCsSYHU%2FTF81kgvPz0mS5Cq0IwPyTQ6vD3ilLw2AIhAMFIvrGbAXNp90sAbXiYWMuJQlgFmkLV1FFEKV1AXcnGKv8DCHgQABoMNjM3NDIzMTgzODA1Igxxvqb2FqIJtb9mTjoq3ANlvSMsC2XVC3BWVxrHg691wPblGrUwkxi6e%2FdzxXzxXA8kpiVcEi8bmaAw%2FtglWuqljs5YAEtTbtwmV4c%2BZqt5vIIR8b0c89h32cyEEZf3Kt23cYBWiW%2BMZLc9TRObp5JJIg0HDIRnGQwpW%2B3iklRavxBgMli%2B8L2z2n1ia4iM4DHStBaO1VE1Y8WZhsO%2F%2BFPhuOUPVao0Rn%2BFKuat1p4jj1TWXSf2WFnpDsTl3VdJ79W8184W0Ev5AryGMx1tlolFq5UeukIz2kYJ6%2BXHKi4R9ff0FhPIcwYT3F9eARk0%2BzBKFxPQrZgYK43TjsRm84T5Gn5SB3pSc1UznpEq0wBHtGtU8qZZ7z28qtUYjiOxUEzRfJHl%2F%2F2R2jDGyxZxNdOAO6OcvTgieTAC8d8mX%2B34BjLzBWNA2rFt5vBswiH9i2ONrAFD5luCCk%2FrkwjxTOeSTA81tDvYEikGUx52%2FWkK1SKY0GzZIsKz7CUXlYSEzFD%2Bbf58eXXZW2WaCfQpUZ6e7H9JHWJW5wQvr1V%2BDqIsW94gIX1UMXWFQIAZD0TDHQxElV2YR%2BaMxoDmuu0VujihgAWjsAaPBYKdKZqv5JxfpLgFMybwCmZ8Ck2Wo8cOItUJanV3rpJpwaYpeTDC%2BZjEBjqkAXfvTJ%2FrUScVosLsc8p7vodD%2FTJIbxgqm6Ja8%2FfX9xauFJsJNCaeQHnP2y6SfF8E9u7EjzZPhMDah%2BMfoVSUBcBJAElVlergPE%2FuR7ZHxSvclBbJukTWet4BPAbYdFoyZDnmmRmgDU9%2FyY8g9x6azzEYriU%2FUhhOpL4HqXgJeCAv%2BVl3btTKqYmVuPmTE3Giuj8heyLRmZSn1%2BcyOvrxBcwDrMP3&X-Amz-Signature=649a1e7f0b9f47296f2b2dea27b18537a7744968daf65a5f87c38d379261eb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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
