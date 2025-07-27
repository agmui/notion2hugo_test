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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=fd27b229b711a8ffcbf41b46698beab751f1f69beacbe3beeb5fe4d4e5eaad76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=d91efee4ab72768b5a97910c0301fa815fdcd238583995592eb7dcb48b594713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=73087a55aa3138044c177f51f303943bbf4975b3bee8e661e28adc18c5aa889c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
