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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HU2LVVT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGJiCv0LPVVWOLFep5TJ5P7xC%2FDWVQE%2FBy2MMbgfUXgiAiEAyiTNav7%2BTtU619JVKYgDqZg2k%2FR0WEEs3RJu1xbqZqEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMUb3pp%2BxiCeFDsyPCrcA2Mn7tCNGxGiPA15hCrNzj4p9B6PSP72p96NiRF%2FumTfCjsM09KEBQgw7mZSrdiM5DGLzdaJ39t0SzLv6IyYbifCIH1RkZPMaqbOmiRA0oCKA0cWLsQE4w0Jaosf3M52lQeqvFD2JIm4cYk1XRjrPNZquRRO3nEoA33uMzlgzodcMzcUTODeFxOjdpE4O4NbsZpSi7w7bJVpJ%2Bj6HK7pqDZ1rDE8mbLu8JxNaGiAwsWiTBdhzLioD%2B4fTlIdKvXJrAhK9HT%2BZFn05Wr094c2iy06UyYgdNPqP6ksuh%2Fy66sDduUEVgH9e512Hwe7aCkOU37yx7i9Uf42C4eZEHGcpt8EyHVQ1L7R%2FislwIVxmt2vn4GkDMc5fXv%2Bb2A0CrYs3PHjXIb62wp3%2FZ%2F%2BflBtrItkK7yLiGRK7vlknZzO7rp%2FG7IcEVtvoEl2PUuHCm1Kxk7ochcbaS9ZdYpZZAg4RVvOBIhTlua19vQOp953onezHEbTVWSzpJ1ZH7d%2BSGlG69vhcIsBVMG7SRSAKxVD2mfswJUQnUAgtaX%2FO2g51amT2SP0uetN%2BA4c%2BBN5Mp%2FJ0Hfx24b1awSobip96wnFO8nhy%2BqQfjkEhcy3F7wJnYtVhDzXgXXqBpONU00sMLK8jsQGOqUBgKRpNs56EudNLGy%2BopYYjkZfq6NuKSxW6TmolnJl5FNWvhJ%2BhrDuUTlhI8FYS3y9TBJBUecUl18qfxSQvRZjHyt2%2Ft%2BSzX0minQ2uK9iiyC0t0VOVjXHrIm0tvqdtNDstlHOXUQB8GnOuOZKvqk72FQlGdk1EmI9vodYEFNA0FT2EL9DS1obFtlIWs8FSvkMsqFX478T5VqK8ZHr9yHRFScqHP0z&X-Amz-Signature=fab31164e3c55f6baaed045a095ea2684a2a2fa3231663ad51f5028e95bc7f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HU2LVVT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGJiCv0LPVVWOLFep5TJ5P7xC%2FDWVQE%2FBy2MMbgfUXgiAiEAyiTNav7%2BTtU619JVKYgDqZg2k%2FR0WEEs3RJu1xbqZqEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMUb3pp%2BxiCeFDsyPCrcA2Mn7tCNGxGiPA15hCrNzj4p9B6PSP72p96NiRF%2FumTfCjsM09KEBQgw7mZSrdiM5DGLzdaJ39t0SzLv6IyYbifCIH1RkZPMaqbOmiRA0oCKA0cWLsQE4w0Jaosf3M52lQeqvFD2JIm4cYk1XRjrPNZquRRO3nEoA33uMzlgzodcMzcUTODeFxOjdpE4O4NbsZpSi7w7bJVpJ%2Bj6HK7pqDZ1rDE8mbLu8JxNaGiAwsWiTBdhzLioD%2B4fTlIdKvXJrAhK9HT%2BZFn05Wr094c2iy06UyYgdNPqP6ksuh%2Fy66sDduUEVgH9e512Hwe7aCkOU37yx7i9Uf42C4eZEHGcpt8EyHVQ1L7R%2FislwIVxmt2vn4GkDMc5fXv%2Bb2A0CrYs3PHjXIb62wp3%2FZ%2F%2BflBtrItkK7yLiGRK7vlknZzO7rp%2FG7IcEVtvoEl2PUuHCm1Kxk7ochcbaS9ZdYpZZAg4RVvOBIhTlua19vQOp953onezHEbTVWSzpJ1ZH7d%2BSGlG69vhcIsBVMG7SRSAKxVD2mfswJUQnUAgtaX%2FO2g51amT2SP0uetN%2BA4c%2BBN5Mp%2FJ0Hfx24b1awSobip96wnFO8nhy%2BqQfjkEhcy3F7wJnYtVhDzXgXXqBpONU00sMLK8jsQGOqUBgKRpNs56EudNLGy%2BopYYjkZfq6NuKSxW6TmolnJl5FNWvhJ%2BhrDuUTlhI8FYS3y9TBJBUecUl18qfxSQvRZjHyt2%2Ft%2BSzX0minQ2uK9iiyC0t0VOVjXHrIm0tvqdtNDstlHOXUQB8GnOuOZKvqk72FQlGdk1EmI9vodYEFNA0FT2EL9DS1obFtlIWs8FSvkMsqFX478T5VqK8ZHr9yHRFScqHP0z&X-Amz-Signature=bce382e48e36417275e22376e54d9b5caa7bb49afac24e21f142e0c10311f38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HU2LVVT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGJiCv0LPVVWOLFep5TJ5P7xC%2FDWVQE%2FBy2MMbgfUXgiAiEAyiTNav7%2BTtU619JVKYgDqZg2k%2FR0WEEs3RJu1xbqZqEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMUb3pp%2BxiCeFDsyPCrcA2Mn7tCNGxGiPA15hCrNzj4p9B6PSP72p96NiRF%2FumTfCjsM09KEBQgw7mZSrdiM5DGLzdaJ39t0SzLv6IyYbifCIH1RkZPMaqbOmiRA0oCKA0cWLsQE4w0Jaosf3M52lQeqvFD2JIm4cYk1XRjrPNZquRRO3nEoA33uMzlgzodcMzcUTODeFxOjdpE4O4NbsZpSi7w7bJVpJ%2Bj6HK7pqDZ1rDE8mbLu8JxNaGiAwsWiTBdhzLioD%2B4fTlIdKvXJrAhK9HT%2BZFn05Wr094c2iy06UyYgdNPqP6ksuh%2Fy66sDduUEVgH9e512Hwe7aCkOU37yx7i9Uf42C4eZEHGcpt8EyHVQ1L7R%2FislwIVxmt2vn4GkDMc5fXv%2Bb2A0CrYs3PHjXIb62wp3%2FZ%2F%2BflBtrItkK7yLiGRK7vlknZzO7rp%2FG7IcEVtvoEl2PUuHCm1Kxk7ochcbaS9ZdYpZZAg4RVvOBIhTlua19vQOp953onezHEbTVWSzpJ1ZH7d%2BSGlG69vhcIsBVMG7SRSAKxVD2mfswJUQnUAgtaX%2FO2g51amT2SP0uetN%2BA4c%2BBN5Mp%2FJ0Hfx24b1awSobip96wnFO8nhy%2BqQfjkEhcy3F7wJnYtVhDzXgXXqBpONU00sMLK8jsQGOqUBgKRpNs56EudNLGy%2BopYYjkZfq6NuKSxW6TmolnJl5FNWvhJ%2BhrDuUTlhI8FYS3y9TBJBUecUl18qfxSQvRZjHyt2%2Ft%2BSzX0minQ2uK9iiyC0t0VOVjXHrIm0tvqdtNDstlHOXUQB8GnOuOZKvqk72FQlGdk1EmI9vodYEFNA0FT2EL9DS1obFtlIWs8FSvkMsqFX478T5VqK8ZHr9yHRFScqHP0z&X-Amz-Signature=227080ad1f1ba412544399794d3f434b25cd7621d9e27c099b32aa52fe05f5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
