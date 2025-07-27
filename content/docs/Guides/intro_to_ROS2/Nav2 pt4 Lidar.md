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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFLFYCT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCMTiXEmsL2%2FH43sOyjG1oPqpbdhe8QrIieyWPqfazVnAIhAJqpJ41ZtUx5%2F7a7rwzjng%2B1HJ728CbkrzQ4945aAg6EKv8DCH4QABoMNjM3NDIzMTgzODA1IgzwG%2BroD3cM%2FeOAi%2BQq3ANIaUaJM8ZJY1dUI6rxUR2RCl0Z0VyKeQln4CAU88gjOpS5Qbgb1XZW9H2gCJ86eITJ%2B%2BeoXOiDsMnLm4XFpJcwJQ%2F4L1peDOwKxhDhR04toB8%2FWcW2vyMCkxArkIAUb7pG54Vc7r6J7Z6bnGbSEYloEUNX7jtzMT0LKZUyL2i95BCMXLw%2FhL6WO0uJmKAxMm2mnr4gQaHCfQzgDy7hPXW6T0Bjm2Cn%2FapuIzDTpedjFQBWmSiV6JUVJUWvPJJWJAzQdZM08krEa6T37MikegNh3cv7XpW5h96unpG5IoJhc16o0ubSA67RbKRrrtF27PrCSTaz3PGzK%2BsohXkMRrkHLJUjGEYqqkgJKG9KAZbnkyzNwZ9V3qBuTqRlBcREdx0ZjfMJ47iPrs9M%2BcvKdB2HAq8FJOYznLQiE8Dl8SepuFCeIDENnkcBPwi0q8AiDZ6YzQjX%2FUj3Xzmkxi%2F1zofJhZUZqOU%2BES%2BbSUEcAex47hmsa%2B72yekRbd%2BR7Vde5rLk2OKgv%2BSpUVQXKpGRtusqxHunGNzZyJLtl6zVyFLjGzBeKunuk3VwYEZiuwWiAuhuY5vj6FfQQ0SJ%2BnaKJd4gFoG2s9n0lPyU8JdM5YR4rcHDgpt8BM0Bb%2Fye3DC%2Fo5rEBjqkAcltVr1%2FOURGt3taY4ZqmEHV2F%2BRvF1t01Qb9rFCMLtf%2FYqnrgnH4HC6E7hUajEcrVeu4kH5zLI7IvcQnTJPPD4wCyBZsvaBwPoz69wyNhtqx3LJOrRktJDfdG3%2FUOPeNXe7SUiaYM9t%2FWtQu1IZSd33Dm7ONHHzjtcNppHHwoW2pyZUbguJc7s2mML970JZzt8hCc1wYnvGjBV3Uc%2FJN6ufZ65Y&X-Amz-Signature=717816ea7d883a6c0589512669215a8b963e812536121cb357fd98ac2e3dd114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFLFYCT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCMTiXEmsL2%2FH43sOyjG1oPqpbdhe8QrIieyWPqfazVnAIhAJqpJ41ZtUx5%2F7a7rwzjng%2B1HJ728CbkrzQ4945aAg6EKv8DCH4QABoMNjM3NDIzMTgzODA1IgzwG%2BroD3cM%2FeOAi%2BQq3ANIaUaJM8ZJY1dUI6rxUR2RCl0Z0VyKeQln4CAU88gjOpS5Qbgb1XZW9H2gCJ86eITJ%2B%2BeoXOiDsMnLm4XFpJcwJQ%2F4L1peDOwKxhDhR04toB8%2FWcW2vyMCkxArkIAUb7pG54Vc7r6J7Z6bnGbSEYloEUNX7jtzMT0LKZUyL2i95BCMXLw%2FhL6WO0uJmKAxMm2mnr4gQaHCfQzgDy7hPXW6T0Bjm2Cn%2FapuIzDTpedjFQBWmSiV6JUVJUWvPJJWJAzQdZM08krEa6T37MikegNh3cv7XpW5h96unpG5IoJhc16o0ubSA67RbKRrrtF27PrCSTaz3PGzK%2BsohXkMRrkHLJUjGEYqqkgJKG9KAZbnkyzNwZ9V3qBuTqRlBcREdx0ZjfMJ47iPrs9M%2BcvKdB2HAq8FJOYznLQiE8Dl8SepuFCeIDENnkcBPwi0q8AiDZ6YzQjX%2FUj3Xzmkxi%2F1zofJhZUZqOU%2BES%2BbSUEcAex47hmsa%2B72yekRbd%2BR7Vde5rLk2OKgv%2BSpUVQXKpGRtusqxHunGNzZyJLtl6zVyFLjGzBeKunuk3VwYEZiuwWiAuhuY5vj6FfQQ0SJ%2BnaKJd4gFoG2s9n0lPyU8JdM5YR4rcHDgpt8BM0Bb%2Fye3DC%2Fo5rEBjqkAcltVr1%2FOURGt3taY4ZqmEHV2F%2BRvF1t01Qb9rFCMLtf%2FYqnrgnH4HC6E7hUajEcrVeu4kH5zLI7IvcQnTJPPD4wCyBZsvaBwPoz69wyNhtqx3LJOrRktJDfdG3%2FUOPeNXe7SUiaYM9t%2FWtQu1IZSd33Dm7ONHHzjtcNppHHwoW2pyZUbguJc7s2mML970JZzt8hCc1wYnvGjBV3Uc%2FJN6ufZ65Y&X-Amz-Signature=68e12fb20e8831477ea5ee1b9a6075d97cacc25dd475f20d912305489fe095d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFLFYCT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCMTiXEmsL2%2FH43sOyjG1oPqpbdhe8QrIieyWPqfazVnAIhAJqpJ41ZtUx5%2F7a7rwzjng%2B1HJ728CbkrzQ4945aAg6EKv8DCH4QABoMNjM3NDIzMTgzODA1IgzwG%2BroD3cM%2FeOAi%2BQq3ANIaUaJM8ZJY1dUI6rxUR2RCl0Z0VyKeQln4CAU88gjOpS5Qbgb1XZW9H2gCJ86eITJ%2B%2BeoXOiDsMnLm4XFpJcwJQ%2F4L1peDOwKxhDhR04toB8%2FWcW2vyMCkxArkIAUb7pG54Vc7r6J7Z6bnGbSEYloEUNX7jtzMT0LKZUyL2i95BCMXLw%2FhL6WO0uJmKAxMm2mnr4gQaHCfQzgDy7hPXW6T0Bjm2Cn%2FapuIzDTpedjFQBWmSiV6JUVJUWvPJJWJAzQdZM08krEa6T37MikegNh3cv7XpW5h96unpG5IoJhc16o0ubSA67RbKRrrtF27PrCSTaz3PGzK%2BsohXkMRrkHLJUjGEYqqkgJKG9KAZbnkyzNwZ9V3qBuTqRlBcREdx0ZjfMJ47iPrs9M%2BcvKdB2HAq8FJOYznLQiE8Dl8SepuFCeIDENnkcBPwi0q8AiDZ6YzQjX%2FUj3Xzmkxi%2F1zofJhZUZqOU%2BES%2BbSUEcAex47hmsa%2B72yekRbd%2BR7Vde5rLk2OKgv%2BSpUVQXKpGRtusqxHunGNzZyJLtl6zVyFLjGzBeKunuk3VwYEZiuwWiAuhuY5vj6FfQQ0SJ%2BnaKJd4gFoG2s9n0lPyU8JdM5YR4rcHDgpt8BM0Bb%2Fye3DC%2Fo5rEBjqkAcltVr1%2FOURGt3taY4ZqmEHV2F%2BRvF1t01Qb9rFCMLtf%2FYqnrgnH4HC6E7hUajEcrVeu4kH5zLI7IvcQnTJPPD4wCyBZsvaBwPoz69wyNhtqx3LJOrRktJDfdG3%2FUOPeNXe7SUiaYM9t%2FWtQu1IZSd33Dm7ONHHzjtcNppHHwoW2pyZUbguJc7s2mML970JZzt8hCc1wYnvGjBV3Uc%2FJN6ufZ65Y&X-Amz-Signature=377fc79d2a0394170a0aa3e49ab6756edd2691638e6e17c455c984c697d54f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
