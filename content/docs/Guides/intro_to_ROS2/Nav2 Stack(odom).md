---
sys:
  pageId: "107da3bc-6297-80e7-8a39-c258b8d1dbf6"
  createdTime: "2024-09-20T17:54:00.000Z"
  lastEditedTime: "2025-01-26T18:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(odom).md"
title: "Nav2 Stack(odom)"
date: "2025-01-26T18:37:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

**official guide:** [https://docs.nav2.org/setup_guides/odom/setup_odom.html](https://docs.nav2.org/setup_guides/odom/setup_odom.html)

# TODO: add gazebo portion

# ROS2 control

```bash
sudo apt install ros-humble-ros2-control ros-humble-ros2-controllers ros-foxy-humble-ros2-control
sudo apt-get install libserialport-dev
```

Good resource that explains ROS2 control: [https://articulaandtedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

| control_node             |   |
| ------------------------ | - |
| robot_controller_spawner |   |
| joint_state_broadcaster  |   |

{{< /table >}}

# add to ros2 control to urdf 

# Add control setting file in config folder

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCGU2TB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1wp8N%2Bk8uhFtdl6UIfqGrxs8Yu42AEzjKx0s7n8ePgIhAL99UN5r0%2BOTCZXBvBq4wRpL2RqDvCxMfdRgpQlxjx5XKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf%2BF4L1uZHH2Bgj%2Bwq3AOKokDcglvQCdyK3%2BSLP50KpAWgDxAZ0LxXJ%2F6VPOPO5NU2a%2B%2FSyQ6uZjYsj2Azudl1PJUpos1NWY0s4MLN888sFTYTbfN7ws%2FO6JaYy71T%2BytEsUeXGlQL72c8mcZayIa8WWHaBrki2iD2%2Ba98FBF5TcvJn24kH268tTy31FqKierZeYyDAjrvFurfYbjaSxxP87JQxL3A2CKGcBgSP7Z535CvoRNXDnC7mtitKjJRnH%2FRAJVhyXNfSVrnXNmgFjVTRzfUt1n3KdHptxn62CpavSEHHtixlsn%2B9se33PlXrCpeYysJaC4GE%2FJ%2BybGCeKkqOMfIFtVQ1aXHOwJmMqsn8AnOfMOoKBQemCVEln1Hur0Xwr58VbkYCvLcijliJxL8vuS0xhGQLvA6cndpak7I9RHArdg%2FFgZrn6AT6d%2FI4zHWCsHCaV3kD2uMOzlsizAlWC7b9bbNn8YRYYyO0kVrnHKUAg%2FcD2mUhoLq7Sh4UQ6uT%2FGaJdb9rAVxq6xlDXvj%2FV%2FGkQJdScvcKCwX6bkWqpZ8iT78cHVyP5f8fGaOaw1igdprZU4oKPdyhWjwT2kBVFjolJpRQNAJ79jQ4zg9Z8XnjIOSz4MWeJ4JivTCNt2fpMXsjbinOpSD5DCkvKi9BjqkAWe5Nn4xr3uY%2Fyy%2BKXnjs3J7patHIiVxkPOEhhy4Zdtq5bU5y69ulL9b9PdIAUj1oPTpLMUENTEOMK7sCVNmseQ%2BGXe0d5R1576EYGnITGmb9ChsQF0diP7oFJbrro2C4PpBVe9jqTNcddvjpaApni0e50Px592UdprrNeTM4hIbvPdRjkZzhMTGAUBCtYLFc4VS2ZORD5KUJtrcRJiCXa1zDHxo&X-Amz-Signature=409c1b324149c89e69a057ffdc73b5f8388df860208e515501bc4b7e1e2c9eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCGU2TB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1wp8N%2Bk8uhFtdl6UIfqGrxs8Yu42AEzjKx0s7n8ePgIhAL99UN5r0%2BOTCZXBvBq4wRpL2RqDvCxMfdRgpQlxjx5XKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf%2BF4L1uZHH2Bgj%2Bwq3AOKokDcglvQCdyK3%2BSLP50KpAWgDxAZ0LxXJ%2F6VPOPO5NU2a%2B%2FSyQ6uZjYsj2Azudl1PJUpos1NWY0s4MLN888sFTYTbfN7ws%2FO6JaYy71T%2BytEsUeXGlQL72c8mcZayIa8WWHaBrki2iD2%2Ba98FBF5TcvJn24kH268tTy31FqKierZeYyDAjrvFurfYbjaSxxP87JQxL3A2CKGcBgSP7Z535CvoRNXDnC7mtitKjJRnH%2FRAJVhyXNfSVrnXNmgFjVTRzfUt1n3KdHptxn62CpavSEHHtixlsn%2B9se33PlXrCpeYysJaC4GE%2FJ%2BybGCeKkqOMfIFtVQ1aXHOwJmMqsn8AnOfMOoKBQemCVEln1Hur0Xwr58VbkYCvLcijliJxL8vuS0xhGQLvA6cndpak7I9RHArdg%2FFgZrn6AT6d%2FI4zHWCsHCaV3kD2uMOzlsizAlWC7b9bbNn8YRYYyO0kVrnHKUAg%2FcD2mUhoLq7Sh4UQ6uT%2FGaJdb9rAVxq6xlDXvj%2FV%2FGkQJdScvcKCwX6bkWqpZ8iT78cHVyP5f8fGaOaw1igdprZU4oKPdyhWjwT2kBVFjolJpRQNAJ79jQ4zg9Z8XnjIOSz4MWeJ4JivTCNt2fpMXsjbinOpSD5DCkvKi9BjqkAWe5Nn4xr3uY%2Fyy%2BKXnjs3J7patHIiVxkPOEhhy4Zdtq5bU5y69ulL9b9PdIAUj1oPTpLMUENTEOMK7sCVNmseQ%2BGXe0d5R1576EYGnITGmb9ChsQF0diP7oFJbrro2C4PpBVe9jqTNcddvjpaApni0e50Px592UdprrNeTM4hIbvPdRjkZzhMTGAUBCtYLFc4VS2ZORD5KUJtrcRJiCXa1zDHxo&X-Amz-Signature=d08c7b53886cbc2f3082e7420fd692c146f54436b4d8ef15e58cf4554a6fce70&X-Amz-SignedHeaders=host&x-id=GetObject)

# update setup.py and run

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_pkg'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
        (os.path.join('share', package_name, 'config'), glob('config/*.yaml*')),
    ],
```

# update display.launch.py file

TODO:

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')
    robot_controllers = os.path.join(pkg_share, "config/my_controllers.yaml")


    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        arguments=[default_model_path], #Add this line
        #parameters=[{'robot_description': Command(['xacro ', default_model_path])}],  #Remove this line
        #condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))  #Remove this line
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    control_node = launch_ros.actions.Node(
        package="controller_manager",
        executable="ros2_control_node",
        parameters=[
            {'robot_description': Command(['xacro ', default_model_path])}, #FIXME: this should not be here
            robot_controllers],
        output="both",
        remappings=[
            ("/diffbot_base_controller/cmd_vel", "/cmd_vel"),
        ]
    )
    robot_controller_spawner = launch_ros.actions.Node(
        package="controller_manager",
        executable="spawner",
        arguments=["diffbot_base_controller", "--param-file", robot_controllers],
    )

    # Delay start of joint_state_broadcaster after `robot_controller`
    # TODO(anyone): This is a workaround for flaky tests. Remove when fixed.
    delay_joint_state_broadcaster_after_robot_controller_spawner = RegisterEventHandler(
        event_handler=OnProcessExit(
            target_action=robot_controller_spawner,
            on_exit=[joint_state_broadcaster_spawner],
        )
    )
    # Delay rviz start after `joint_state_broadcaster`
    delay_rviz_after_joint_state_broadcaster_spawner = RegisterEventHandler(
        event_handler=OnProcessExit(
            target_action=joint_state_broadcaster_spawner,
            on_exit=[rviz_node],
        )
    )

    return launch.LaunchDescription([
        #launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
        #                                    description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        # joint_state_publisher_gui_node,
        robot_state_publisher_node,
        control_node,
        robot_controller_spawner,
        
                delay_joint_state_broadcaster_after_robot_controller_spawner,
        delay_rviz_after_joint_state_broadcaster_spawner,
        #rviz_node
    ])
```

---

if you have a pi pico and RPLidar then this part applies to you

# pi pico pkg

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCGU2TB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1wp8N%2Bk8uhFtdl6UIfqGrxs8Yu42AEzjKx0s7n8ePgIhAL99UN5r0%2BOTCZXBvBq4wRpL2RqDvCxMfdRgpQlxjx5XKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf%2BF4L1uZHH2Bgj%2Bwq3AOKokDcglvQCdyK3%2BSLP50KpAWgDxAZ0LxXJ%2F6VPOPO5NU2a%2B%2FSyQ6uZjYsj2Azudl1PJUpos1NWY0s4MLN888sFTYTbfN7ws%2FO6JaYy71T%2BytEsUeXGlQL72c8mcZayIa8WWHaBrki2iD2%2Ba98FBF5TcvJn24kH268tTy31FqKierZeYyDAjrvFurfYbjaSxxP87JQxL3A2CKGcBgSP7Z535CvoRNXDnC7mtitKjJRnH%2FRAJVhyXNfSVrnXNmgFjVTRzfUt1n3KdHptxn62CpavSEHHtixlsn%2B9se33PlXrCpeYysJaC4GE%2FJ%2BybGCeKkqOMfIFtVQ1aXHOwJmMqsn8AnOfMOoKBQemCVEln1Hur0Xwr58VbkYCvLcijliJxL8vuS0xhGQLvA6cndpak7I9RHArdg%2FFgZrn6AT6d%2FI4zHWCsHCaV3kD2uMOzlsizAlWC7b9bbNn8YRYYyO0kVrnHKUAg%2FcD2mUhoLq7Sh4UQ6uT%2FGaJdb9rAVxq6xlDXvj%2FV%2FGkQJdScvcKCwX6bkWqpZ8iT78cHVyP5f8fGaOaw1igdprZU4oKPdyhWjwT2kBVFjolJpRQNAJ79jQ4zg9Z8XnjIOSz4MWeJ4JivTCNt2fpMXsjbinOpSD5DCkvKi9BjqkAWe5Nn4xr3uY%2Fyy%2BKXnjs3J7patHIiVxkPOEhhy4Zdtq5bU5y69ulL9b9PdIAUj1oPTpLMUENTEOMK7sCVNmseQ%2BGXe0d5R1576EYGnITGmb9ChsQF0diP7oFJbrro2C4PpBVe9jqTNcddvjpaApni0e50Px592UdprrNeTM4hIbvPdRjkZzhMTGAUBCtYLFc4VS2ZORD5KUJtrcRJiCXa1zDHxo&X-Amz-Signature=f9d1d5a2ca8e01c9f25238270eb325ff5e9bf0cd7d0555d800940de2b3e727c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCGU2TB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1wp8N%2Bk8uhFtdl6UIfqGrxs8Yu42AEzjKx0s7n8ePgIhAL99UN5r0%2BOTCZXBvBq4wRpL2RqDvCxMfdRgpQlxjx5XKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf%2BF4L1uZHH2Bgj%2Bwq3AOKokDcglvQCdyK3%2BSLP50KpAWgDxAZ0LxXJ%2F6VPOPO5NU2a%2B%2FSyQ6uZjYsj2Azudl1PJUpos1NWY0s4MLN888sFTYTbfN7ws%2FO6JaYy71T%2BytEsUeXGlQL72c8mcZayIa8WWHaBrki2iD2%2Ba98FBF5TcvJn24kH268tTy31FqKierZeYyDAjrvFurfYbjaSxxP87JQxL3A2CKGcBgSP7Z535CvoRNXDnC7mtitKjJRnH%2FRAJVhyXNfSVrnXNmgFjVTRzfUt1n3KdHptxn62CpavSEHHtixlsn%2B9se33PlXrCpeYysJaC4GE%2FJ%2BybGCeKkqOMfIFtVQ1aXHOwJmMqsn8AnOfMOoKBQemCVEln1Hur0Xwr58VbkYCvLcijliJxL8vuS0xhGQLvA6cndpak7I9RHArdg%2FFgZrn6AT6d%2FI4zHWCsHCaV3kD2uMOzlsizAlWC7b9bbNn8YRYYyO0kVrnHKUAg%2FcD2mUhoLq7Sh4UQ6uT%2FGaJdb9rAVxq6xlDXvj%2FV%2FGkQJdScvcKCwX6bkWqpZ8iT78cHVyP5f8fGaOaw1igdprZU4oKPdyhWjwT2kBVFjolJpRQNAJ79jQ4zg9Z8XnjIOSz4MWeJ4JivTCNt2fpMXsjbinOpSD5DCkvKi9BjqkAWe5Nn4xr3uY%2Fyy%2BKXnjs3J7patHIiVxkPOEhhy4Zdtq5bU5y69ulL9b9PdIAUj1oPTpLMUENTEOMK7sCVNmseQ%2BGXe0d5R1576EYGnITGmb9ChsQF0diP7oFJbrro2C4PpBVe9jqTNcddvjpaApni0e50Px592UdprrNeTM4hIbvPdRjkZzhMTGAUBCtYLFc4VS2ZORD5KUJtrcRJiCXa1zDHxo&X-Amz-Signature=d97d92c42c67433d97c0a03f3c8ecbb9edaefa79e6a65333d55acd2c10b86a08&X-Amz-SignedHeaders=host&x-id=GetObject)

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

Note: if your robot does not connect to your WSL go back to:

[link_to_page](49e52dd2-b25e-4523-b600-0dfc5bc9e9f2)

# lidar

## update the urdf

```xml
  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.125" />
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <cylinder radius="0.0508" length="0.055" />
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <cylinder radius="0.0508" length="0.055" />
      </geometry>
    </visual>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link" />
    <child link="lidar_link" />
    <origin xyz="0.0416 0 0.12" rpy="0 0 ${pi}" />
  </joint>

```

## update launch file

```python
    lidar_node = launch_ros.actions.Node(
        package='sllidar_ros2',
        executable='sllidar_node',
        name='sllidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0',
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',#'laser',
                     'inverted': False,
                     'angle_compensate': True,
                     'scan_mode': 'Boost'}],
        output='screen')

    return launch.LaunchDescription([
        #launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
        #                                    description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        # joint_state_publisher_gui_node,
        robot_state_publisher_node,

        control_node,
        robot_controller_spawner,

        lidar_node,

        delay_joint_state_broadcaster_after_robot_controller_spawner,
        delay_rviz_after_joint_state_broadcaster_spawner,
        # rviz_node
    ])
```

package link: [https://github.com/Slamtec/sllidar_ros2](https://github.com/Slamtec/sllidar_ros2)

run guide: [https://github.com/robopeak/rplidar_ros/wiki](https://github.com/robopeak/rplidar_ros/wiki)

```bash
sudo chmod 777 /dev/ttyUSB0
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCGU2TB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1wp8N%2Bk8uhFtdl6UIfqGrxs8Yu42AEzjKx0s7n8ePgIhAL99UN5r0%2BOTCZXBvBq4wRpL2RqDvCxMfdRgpQlxjx5XKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf%2BF4L1uZHH2Bgj%2Bwq3AOKokDcglvQCdyK3%2BSLP50KpAWgDxAZ0LxXJ%2F6VPOPO5NU2a%2B%2FSyQ6uZjYsj2Azudl1PJUpos1NWY0s4MLN888sFTYTbfN7ws%2FO6JaYy71T%2BytEsUeXGlQL72c8mcZayIa8WWHaBrki2iD2%2Ba98FBF5TcvJn24kH268tTy31FqKierZeYyDAjrvFurfYbjaSxxP87JQxL3A2CKGcBgSP7Z535CvoRNXDnC7mtitKjJRnH%2FRAJVhyXNfSVrnXNmgFjVTRzfUt1n3KdHptxn62CpavSEHHtixlsn%2B9se33PlXrCpeYysJaC4GE%2FJ%2BybGCeKkqOMfIFtVQ1aXHOwJmMqsn8AnOfMOoKBQemCVEln1Hur0Xwr58VbkYCvLcijliJxL8vuS0xhGQLvA6cndpak7I9RHArdg%2FFgZrn6AT6d%2FI4zHWCsHCaV3kD2uMOzlsizAlWC7b9bbNn8YRYYyO0kVrnHKUAg%2FcD2mUhoLq7Sh4UQ6uT%2FGaJdb9rAVxq6xlDXvj%2FV%2FGkQJdScvcKCwX6bkWqpZ8iT78cHVyP5f8fGaOaw1igdprZU4oKPdyhWjwT2kBVFjolJpRQNAJ79jQ4zg9Z8XnjIOSz4MWeJ4JivTCNt2fpMXsjbinOpSD5DCkvKi9BjqkAWe5Nn4xr3uY%2Fyy%2BKXnjs3J7patHIiVxkPOEhhy4Zdtq5bU5y69ulL9b9PdIAUj1oPTpLMUENTEOMK7sCVNmseQ%2BGXe0d5R1576EYGnITGmb9ChsQF0diP7oFJbrro2C4PpBVe9jqTNcddvjpaApni0e50Px592UdprrNeTM4hIbvPdRjkZzhMTGAUBCtYLFc4VS2ZORD5KUJtrcRJiCXa1zDHxo&X-Amz-Signature=03846ab12c23a3ecb8bf396e64f90f0883b4d18c0c5aafbd6afba82a23ffbdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
