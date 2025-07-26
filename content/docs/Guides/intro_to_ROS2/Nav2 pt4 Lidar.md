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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAZIGK6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHT0cVulaZCKsJWL%2FVjzw9G3YF9Ay7OBwAaW6F87%2Ft4tAiEA2P6FA1BjB5ImLotJp6Qj8jLANclfZIFG8IRiBkRtM%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMtBdMBzoObiN7WpjircA%2BeS1ejM%2FLmp9Fr5%2F%2FVQ5hBS8JQo0an7k%2BL21%2FDjvSn3ASYsR2cuiOPfY9A86lNLg%2F%2F%2FAyKVKxoEpaaSpf3O6Hk9n5qG1I6GLED%2FVTaDMzxJ%2FupjjpJx4a82AHLnhol3HA%2Br%2Bjsbz6%2FueiQ079KK1THgbdv5ixQ3woPQJqOkmI48JxyxS1fnFR7KW1T9XLG%2FzX00Mn3fr7MwrmQVmYzYOgILymQv02GnljQDXTYAcP3PwIOC0eHEtaKNY2AS6pU8lEIxdp6JFLS2gXPWaBUSQnI41oKBqWTkLM8qgRxg3o6y599hY8GfI1wtv8Ap2pakJZf43rnp7dpL6l%2FgTxBYe8ko0g9%2BPN3FznL9C%2BhmtmUSFQ6dR5sv6AHyDqFScbMEmpIlyhQLL%2FckcNuqAK7hM9KSWieHTRAnigBa2vVhNxMGggwcggKj8JHm7EvF0ojqbws1vSl2E1gTiq3UoBIDfhff5KJccQrWYgRMhb%2FYzEsghWhWEueHFBSaWXGQhVALxAob8pznEX%2B0UYunud4sX3tWAP4utYXnYyiQqLtehowrbUfTKOmUZayPLEbUu17Q%2BlEivCcvclYXmOgh%2B7fQYmlVsJY4tHWes2neghK3xP0RtxZXplrzZZ8euwUnML%2FBk8QGOqUBaPb8IdfzDrF%2FvStHL4ze%2BrDyAuf9dRsyiQ%2BOMaHYz4QPaOfszxeMXCdaX4YlMdvUvTRinNS%2BtFk76FBMWvY6mbi5lnEKX%2BDFiTzn7PMzAxgUw%2F%2FPPIu4SJNh%2FyXI74YG5kioAkWCPuHGv%2Fmnv0bWzvw2NHTF5aAqLNlvTT19%2Fq5R7kt75GqOgughogWAdmDIdLKLDUHTe0kqH4SDSWcNouYHivn9&X-Amz-Signature=24c17bc4c6218f2748915eb58576c3f9f322816e873bfd2dc37d37fb0e0b9960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAZIGK6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHT0cVulaZCKsJWL%2FVjzw9G3YF9Ay7OBwAaW6F87%2Ft4tAiEA2P6FA1BjB5ImLotJp6Qj8jLANclfZIFG8IRiBkRtM%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMtBdMBzoObiN7WpjircA%2BeS1ejM%2FLmp9Fr5%2F%2FVQ5hBS8JQo0an7k%2BL21%2FDjvSn3ASYsR2cuiOPfY9A86lNLg%2F%2F%2FAyKVKxoEpaaSpf3O6Hk9n5qG1I6GLED%2FVTaDMzxJ%2FupjjpJx4a82AHLnhol3HA%2Br%2Bjsbz6%2FueiQ079KK1THgbdv5ixQ3woPQJqOkmI48JxyxS1fnFR7KW1T9XLG%2FzX00Mn3fr7MwrmQVmYzYOgILymQv02GnljQDXTYAcP3PwIOC0eHEtaKNY2AS6pU8lEIxdp6JFLS2gXPWaBUSQnI41oKBqWTkLM8qgRxg3o6y599hY8GfI1wtv8Ap2pakJZf43rnp7dpL6l%2FgTxBYe8ko0g9%2BPN3FznL9C%2BhmtmUSFQ6dR5sv6AHyDqFScbMEmpIlyhQLL%2FckcNuqAK7hM9KSWieHTRAnigBa2vVhNxMGggwcggKj8JHm7EvF0ojqbws1vSl2E1gTiq3UoBIDfhff5KJccQrWYgRMhb%2FYzEsghWhWEueHFBSaWXGQhVALxAob8pznEX%2B0UYunud4sX3tWAP4utYXnYyiQqLtehowrbUfTKOmUZayPLEbUu17Q%2BlEivCcvclYXmOgh%2B7fQYmlVsJY4tHWes2neghK3xP0RtxZXplrzZZ8euwUnML%2FBk8QGOqUBaPb8IdfzDrF%2FvStHL4ze%2BrDyAuf9dRsyiQ%2BOMaHYz4QPaOfszxeMXCdaX4YlMdvUvTRinNS%2BtFk76FBMWvY6mbi5lnEKX%2BDFiTzn7PMzAxgUw%2F%2FPPIu4SJNh%2FyXI74YG5kioAkWCPuHGv%2Fmnv0bWzvw2NHTF5aAqLNlvTT19%2Fq5R7kt75GqOgughogWAdmDIdLKLDUHTe0kqH4SDSWcNouYHivn9&X-Amz-Signature=f05b38c22f568344c4ca9e8a1af8c91bb3701bde97a99a00525e90df8f2aaba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAZIGK6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHT0cVulaZCKsJWL%2FVjzw9G3YF9Ay7OBwAaW6F87%2Ft4tAiEA2P6FA1BjB5ImLotJp6Qj8jLANclfZIFG8IRiBkRtM%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMtBdMBzoObiN7WpjircA%2BeS1ejM%2FLmp9Fr5%2F%2FVQ5hBS8JQo0an7k%2BL21%2FDjvSn3ASYsR2cuiOPfY9A86lNLg%2F%2F%2FAyKVKxoEpaaSpf3O6Hk9n5qG1I6GLED%2FVTaDMzxJ%2FupjjpJx4a82AHLnhol3HA%2Br%2Bjsbz6%2FueiQ079KK1THgbdv5ixQ3woPQJqOkmI48JxyxS1fnFR7KW1T9XLG%2FzX00Mn3fr7MwrmQVmYzYOgILymQv02GnljQDXTYAcP3PwIOC0eHEtaKNY2AS6pU8lEIxdp6JFLS2gXPWaBUSQnI41oKBqWTkLM8qgRxg3o6y599hY8GfI1wtv8Ap2pakJZf43rnp7dpL6l%2FgTxBYe8ko0g9%2BPN3FznL9C%2BhmtmUSFQ6dR5sv6AHyDqFScbMEmpIlyhQLL%2FckcNuqAK7hM9KSWieHTRAnigBa2vVhNxMGggwcggKj8JHm7EvF0ojqbws1vSl2E1gTiq3UoBIDfhff5KJccQrWYgRMhb%2FYzEsghWhWEueHFBSaWXGQhVALxAob8pznEX%2B0UYunud4sX3tWAP4utYXnYyiQqLtehowrbUfTKOmUZayPLEbUu17Q%2BlEivCcvclYXmOgh%2B7fQYmlVsJY4tHWes2neghK3xP0RtxZXplrzZZ8euwUnML%2FBk8QGOqUBaPb8IdfzDrF%2FvStHL4ze%2BrDyAuf9dRsyiQ%2BOMaHYz4QPaOfszxeMXCdaX4YlMdvUvTRinNS%2BtFk76FBMWvY6mbi5lnEKX%2BDFiTzn7PMzAxgUw%2F%2FPPIu4SJNh%2FyXI74YG5kioAkWCPuHGv%2Fmnv0bWzvw2NHTF5aAqLNlvTT19%2Fq5R7kt75GqOgughogWAdmDIdLKLDUHTe0kqH4SDSWcNouYHivn9&X-Amz-Signature=0a7385a7d3a2e331589c98061dc4bea96db58914404fe9722c275da83057bcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
