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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TT6HWHQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDKg3mbgz3%2Fr7jeDUR0DJvNa9L8WdMDYOemWVabKnBMhAiEAoQj88ag4Bmq2jmfZTTyoJrOV44sUUcNjbxXE%2Be4PGjgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIrgZdsvPn%2FjYzWRHircA03du2kZ4%2Fko1Mhpuc8E0fRPplmML9DgyZ2M8noBi%2BNacBj9YFLleX%2F0g5AYUQK6F1QQOv2LQTOVcayMiK3otzGqtLZvsGDblAsVC2j0Or1EdngBV3bFHE8Z%2FhV5hsc59B8wtxwAgJGg26aPMleX5APBeCI1vpM6F8vwAFFRSVkRp8A8rdXtFe71B0uE0jYVMb1b5xUSReeN0Igp%2BRDOBVhm4KD0md%2Fe55i55T0NYi79TC8fy8UCV6o8NvaE5iXcVr9hoBB%2BXc4RC1UAqWQ38Ndv9zjiJ6A1cHESFQUNSxWSX5hx%2BQgtuq4zyL9Hd3idHyW1PKsdqUyw7V9PKifEGoJ93m98VzgKhMBsFf0U3nLbhTkqJe7LGRq2fesVTw4YrihXSg6cg4xedwZnTndB5Octq%2Bd94z5lg0eAZIxsHYgb7TMlfzrfJ3ROyhBxmhn5bgQXkyW6K4bnBBbo61bw2HdXy388RhCji0Pc1zh5nN4EFEPvgBfm%2BzqptWphw3VJNI9WgqJivTwet3n2FrizGuU1qyr48PNlDRDwq7GCn7NoyJ67iLJfvV6%2FuSaH1dVpXdKe3d5XyP39i4lLXTJ0SqI2NcMHRQOjWU4kR8qgv2R2jBoxgmMD9NyjlSCxMMj6ksQGOqUBfnWr6KUgsiHIOcbPlDq8REMWgZ0kBZQIhfMPsUuPvXcLy4T3ZVDB06e6%2Fff4fs3u5NYhfeNJ%2BR0E0kMjNAbKb3XJD5xTk4FdErnSdRRWsbJMY%2FSAVQQMyUlTYn7j4m%2FM%2FMXuBjYemPVB5pdk88Kcyf2oDVnaOtf1yCvBtmHu2fMhvDEoVDeWJv2nfjgmQRkc2sLtqsHjFncl0FwCYzpQQZk1VBe%2F&X-Amz-Signature=9699a297818c0af695cec1b765423cac6566020f24105e8ca515d9bb761a4c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TT6HWHQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDKg3mbgz3%2Fr7jeDUR0DJvNa9L8WdMDYOemWVabKnBMhAiEAoQj88ag4Bmq2jmfZTTyoJrOV44sUUcNjbxXE%2Be4PGjgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIrgZdsvPn%2FjYzWRHircA03du2kZ4%2Fko1Mhpuc8E0fRPplmML9DgyZ2M8noBi%2BNacBj9YFLleX%2F0g5AYUQK6F1QQOv2LQTOVcayMiK3otzGqtLZvsGDblAsVC2j0Or1EdngBV3bFHE8Z%2FhV5hsc59B8wtxwAgJGg26aPMleX5APBeCI1vpM6F8vwAFFRSVkRp8A8rdXtFe71B0uE0jYVMb1b5xUSReeN0Igp%2BRDOBVhm4KD0md%2Fe55i55T0NYi79TC8fy8UCV6o8NvaE5iXcVr9hoBB%2BXc4RC1UAqWQ38Ndv9zjiJ6A1cHESFQUNSxWSX5hx%2BQgtuq4zyL9Hd3idHyW1PKsdqUyw7V9PKifEGoJ93m98VzgKhMBsFf0U3nLbhTkqJe7LGRq2fesVTw4YrihXSg6cg4xedwZnTndB5Octq%2Bd94z5lg0eAZIxsHYgb7TMlfzrfJ3ROyhBxmhn5bgQXkyW6K4bnBBbo61bw2HdXy388RhCji0Pc1zh5nN4EFEPvgBfm%2BzqptWphw3VJNI9WgqJivTwet3n2FrizGuU1qyr48PNlDRDwq7GCn7NoyJ67iLJfvV6%2FuSaH1dVpXdKe3d5XyP39i4lLXTJ0SqI2NcMHRQOjWU4kR8qgv2R2jBoxgmMD9NyjlSCxMMj6ksQGOqUBfnWr6KUgsiHIOcbPlDq8REMWgZ0kBZQIhfMPsUuPvXcLy4T3ZVDB06e6%2Fff4fs3u5NYhfeNJ%2BR0E0kMjNAbKb3XJD5xTk4FdErnSdRRWsbJMY%2FSAVQQMyUlTYn7j4m%2FM%2FMXuBjYemPVB5pdk88Kcyf2oDVnaOtf1yCvBtmHu2fMhvDEoVDeWJv2nfjgmQRkc2sLtqsHjFncl0FwCYzpQQZk1VBe%2F&X-Amz-Signature=c3ad9d081b9995d578ad8d76b82886e69daedd17ecb8191dfadde5cb5f27885a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TT6HWHQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDKg3mbgz3%2Fr7jeDUR0DJvNa9L8WdMDYOemWVabKnBMhAiEAoQj88ag4Bmq2jmfZTTyoJrOV44sUUcNjbxXE%2Be4PGjgq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIrgZdsvPn%2FjYzWRHircA03du2kZ4%2Fko1Mhpuc8E0fRPplmML9DgyZ2M8noBi%2BNacBj9YFLleX%2F0g5AYUQK6F1QQOv2LQTOVcayMiK3otzGqtLZvsGDblAsVC2j0Or1EdngBV3bFHE8Z%2FhV5hsc59B8wtxwAgJGg26aPMleX5APBeCI1vpM6F8vwAFFRSVkRp8A8rdXtFe71B0uE0jYVMb1b5xUSReeN0Igp%2BRDOBVhm4KD0md%2Fe55i55T0NYi79TC8fy8UCV6o8NvaE5iXcVr9hoBB%2BXc4RC1UAqWQ38Ndv9zjiJ6A1cHESFQUNSxWSX5hx%2BQgtuq4zyL9Hd3idHyW1PKsdqUyw7V9PKifEGoJ93m98VzgKhMBsFf0U3nLbhTkqJe7LGRq2fesVTw4YrihXSg6cg4xedwZnTndB5Octq%2Bd94z5lg0eAZIxsHYgb7TMlfzrfJ3ROyhBxmhn5bgQXkyW6K4bnBBbo61bw2HdXy388RhCji0Pc1zh5nN4EFEPvgBfm%2BzqptWphw3VJNI9WgqJivTwet3n2FrizGuU1qyr48PNlDRDwq7GCn7NoyJ67iLJfvV6%2FuSaH1dVpXdKe3d5XyP39i4lLXTJ0SqI2NcMHRQOjWU4kR8qgv2R2jBoxgmMD9NyjlSCxMMj6ksQGOqUBfnWr6KUgsiHIOcbPlDq8REMWgZ0kBZQIhfMPsUuPvXcLy4T3ZVDB06e6%2Fff4fs3u5NYhfeNJ%2BR0E0kMjNAbKb3XJD5xTk4FdErnSdRRWsbJMY%2FSAVQQMyUlTYn7j4m%2FM%2FMXuBjYemPVB5pdk88Kcyf2oDVnaOtf1yCvBtmHu2fMhvDEoVDeWJv2nfjgmQRkc2sLtqsHjFncl0FwCYzpQQZk1VBe%2F&X-Amz-Signature=51f3460628db13ac482499b19c472f36d2077aed5ba15f4b7a1eb83d184c4cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
