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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJBDJX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDFY%2F1qibjRsI6C%2B6eKGe0ODEjHe3KlcgFaDEXOP9IWuAIhAMQ2pO9hDMp8bzBY0SkZBv%2BrIDXT8eeWpE8xf%2B3dIDeOKv8DCFcQABoMNjM3NDIzMTgzODA1Igzwy%2FiGfiQkTTt8i2sq3ANG3%2F4tWIAJxpP3%2BP0uS2ljsAkkJ0XLqzhDR%2FiI0%2BwCElyoYLvAugQSVcM0PAgexRCWIvcK6TMvUcaUUoDH1SYmVqvj7i%2Bp222is1QUlPe6Z5HbgyihkJtPbUhYJy66qdWQRh%2FskmTQYQRv4HSQwzY3jCIpL%2FvPzSLR1zsm8IucsY9aW5eA5LY6bqqMBeJ9InntKrUd20Fi3gK7Sg944VT%2FxFrJV%2BOX%2B3mOCTKHvusgW%2BjKmPA8kFzt%2F4DRy3r8XlUAGaO61tiwG%2FSz9FR7Xd4ycsdfD1rBnCoGSac0FOfm3R5LfIk6nbEQWTMuda94ct3i5M7CWg5Mol3akkCUKIWBahIXmqD9NG5kIsb9Rpt5cdkVWp353JvpRyTO4dcO37%2FzoXXoPF6FfclAMHZaTGk3QYcQYXdF0hUbq%2BDECvU3OdjrKukdDyOMLVm9UBf%2FvOq9qwLAv44kvr1QzdrevZhD%2B7%2B2cr28mE7XzG1ej8BGJK1ueyHvKWabmvP3Gk8ZqiUIx0mGkiuCA3ntGBLOiuqj9QrU%2FXzIzs%2Bdfpo5sJ9XmmiP0ygKqO5799VuEuybDzzfM4zvRi6YyYKrUoe1t2lpL5laowggDwYzt10mSSjenK0t8XQoxYO8uStvSTCL4pHEBjqkAVA76EuFrJ%2FCXDmRzEFzWueWbzQK8PWwwV2vETjmj49cOk91FCkiF%2BbyqHRMyrIvdw1Vy3q%2B6x%2BGGm45ZBhK%2BPVVtSgEoCotKOeTu4vtHCmQSge1dR%2B5pX65GqwH5Z%2FcIq8yTFz27VuUfl%2B0hge0Zx%2BAsaPx2xvUxNmJ08lrnoHoddtwJczMSyToeiRUZ3Ek0PNQy4Lg4U%2BrPu2yKvbgfzFS38pu&X-Amz-Signature=a8d736be3bf5a94a2c2cc53af82a9904b5fc6413149f98f0579f9143d263b0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJBDJX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDFY%2F1qibjRsI6C%2B6eKGe0ODEjHe3KlcgFaDEXOP9IWuAIhAMQ2pO9hDMp8bzBY0SkZBv%2BrIDXT8eeWpE8xf%2B3dIDeOKv8DCFcQABoMNjM3NDIzMTgzODA1Igzwy%2FiGfiQkTTt8i2sq3ANG3%2F4tWIAJxpP3%2BP0uS2ljsAkkJ0XLqzhDR%2FiI0%2BwCElyoYLvAugQSVcM0PAgexRCWIvcK6TMvUcaUUoDH1SYmVqvj7i%2Bp222is1QUlPe6Z5HbgyihkJtPbUhYJy66qdWQRh%2FskmTQYQRv4HSQwzY3jCIpL%2FvPzSLR1zsm8IucsY9aW5eA5LY6bqqMBeJ9InntKrUd20Fi3gK7Sg944VT%2FxFrJV%2BOX%2B3mOCTKHvusgW%2BjKmPA8kFzt%2F4DRy3r8XlUAGaO61tiwG%2FSz9FR7Xd4ycsdfD1rBnCoGSac0FOfm3R5LfIk6nbEQWTMuda94ct3i5M7CWg5Mol3akkCUKIWBahIXmqD9NG5kIsb9Rpt5cdkVWp353JvpRyTO4dcO37%2FzoXXoPF6FfclAMHZaTGk3QYcQYXdF0hUbq%2BDECvU3OdjrKukdDyOMLVm9UBf%2FvOq9qwLAv44kvr1QzdrevZhD%2B7%2B2cr28mE7XzG1ej8BGJK1ueyHvKWabmvP3Gk8ZqiUIx0mGkiuCA3ntGBLOiuqj9QrU%2FXzIzs%2Bdfpo5sJ9XmmiP0ygKqO5799VuEuybDzzfM4zvRi6YyYKrUoe1t2lpL5laowggDwYzt10mSSjenK0t8XQoxYO8uStvSTCL4pHEBjqkAVA76EuFrJ%2FCXDmRzEFzWueWbzQK8PWwwV2vETjmj49cOk91FCkiF%2BbyqHRMyrIvdw1Vy3q%2B6x%2BGGm45ZBhK%2BPVVtSgEoCotKOeTu4vtHCmQSge1dR%2B5pX65GqwH5Z%2FcIq8yTFz27VuUfl%2B0hge0Zx%2BAsaPx2xvUxNmJ08lrnoHoddtwJczMSyToeiRUZ3Ek0PNQy4Lg4U%2BrPu2yKvbgfzFS38pu&X-Amz-Signature=0dd51f2e882e426636d5039666eb94a48870b2993d33c2f51d5a22954d5cc149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEJBDJX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDFY%2F1qibjRsI6C%2B6eKGe0ODEjHe3KlcgFaDEXOP9IWuAIhAMQ2pO9hDMp8bzBY0SkZBv%2BrIDXT8eeWpE8xf%2B3dIDeOKv8DCFcQABoMNjM3NDIzMTgzODA1Igzwy%2FiGfiQkTTt8i2sq3ANG3%2F4tWIAJxpP3%2BP0uS2ljsAkkJ0XLqzhDR%2FiI0%2BwCElyoYLvAugQSVcM0PAgexRCWIvcK6TMvUcaUUoDH1SYmVqvj7i%2Bp222is1QUlPe6Z5HbgyihkJtPbUhYJy66qdWQRh%2FskmTQYQRv4HSQwzY3jCIpL%2FvPzSLR1zsm8IucsY9aW5eA5LY6bqqMBeJ9InntKrUd20Fi3gK7Sg944VT%2FxFrJV%2BOX%2B3mOCTKHvusgW%2BjKmPA8kFzt%2F4DRy3r8XlUAGaO61tiwG%2FSz9FR7Xd4ycsdfD1rBnCoGSac0FOfm3R5LfIk6nbEQWTMuda94ct3i5M7CWg5Mol3akkCUKIWBahIXmqD9NG5kIsb9Rpt5cdkVWp353JvpRyTO4dcO37%2FzoXXoPF6FfclAMHZaTGk3QYcQYXdF0hUbq%2BDECvU3OdjrKukdDyOMLVm9UBf%2FvOq9qwLAv44kvr1QzdrevZhD%2B7%2B2cr28mE7XzG1ej8BGJK1ueyHvKWabmvP3Gk8ZqiUIx0mGkiuCA3ntGBLOiuqj9QrU%2FXzIzs%2Bdfpo5sJ9XmmiP0ygKqO5799VuEuybDzzfM4zvRi6YyYKrUoe1t2lpL5laowggDwYzt10mSSjenK0t8XQoxYO8uStvSTCL4pHEBjqkAVA76EuFrJ%2FCXDmRzEFzWueWbzQK8PWwwV2vETjmj49cOk91FCkiF%2BbyqHRMyrIvdw1Vy3q%2B6x%2BGGm45ZBhK%2BPVVtSgEoCotKOeTu4vtHCmQSge1dR%2B5pX65GqwH5Z%2FcIq8yTFz27VuUfl%2B0hge0Zx%2BAsaPx2xvUxNmJ08lrnoHoddtwJczMSyToeiRUZ3Ek0PNQy4Lg4U%2BrPu2yKvbgfzFS38pu&X-Amz-Signature=e61bfdfaa3657dc7041917c15dc57dfb81a482ce6c7e1df8f5e9210492341244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
