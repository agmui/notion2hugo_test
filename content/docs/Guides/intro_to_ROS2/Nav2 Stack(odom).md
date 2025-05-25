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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W2O4XD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBhMkxMYQmXVAwFNiyxDOpHcIY1uDy3J604BTClFrVthAiEA2G2a3frUxXOorM1TP8%2BTIm8pPD%2BxS8R4uL5pevr41Hkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCkOMZQ6uB%2Fo79ZjpircA020ArhfjqMOrV7CVBjrR0wXC%2FsBO1vnoZoqq8HgoCUZO2X4d7M%2BqtCKDFyU94HEmKvmdpq9phRLJoMKp9%2F4fVCqaQjOmLar5kWlNzKbo9brGdWClMgNEQ2T409pbphfvbb39EetifUfWLuMdnlgsYvpKYDEyk175CYeangcnqT9uc0krOwvWVTRuftg7a2xIguIrdNYiDbUcH3N5lfgzyM64tvs4s3N3BHKXchJAKMx4m%2B010WA6d%2BeCkWDz7CjFpadWPwsLthOk1jalT%2FegkscAAWAWqA%2FFisHynyjVP55OW%2BeoOpqjMwzUZr%2B0MCqrsp8CK7CDwTmYca0mwXE8EUjz4sVQd%2FMBwOOE%2BA7qF%2BbvNkwCr6h%2BqjMEPA6b3ZhQM9myK%2B565egAKjYtxMYUnjB6LNKeiwctwTRx80dTdLDgnEf3S6B5SblfV8BthAnz7WA5schGXs16uuNQwaMsz8HZImcVKp2jkpjuq4uJN19aRxarFPoqhYaPF6rDjgF%2Ff%2BSjF27xCGbN96TdDnMJrZG035VlneMEQPvQ2MdRcwAEoosUBKxWVyepidfFR%2BpPtRbPh6Vk91FTqOMpNO9nyHPprc3WeRTRYMdVzjHopiBn0zmL69aIXwP3xhlMKLFzcEGOqUB0Bz3OSCwtlVVArhddHijJw%2FsrEOOhhgnYx25knzKRG2qkmnYEHlBrFNKSWGHnTXv3qKkSQhxFzs3Iahry0IK%2BEI6uXGjBJCnDbGkEBp7K71ep6sg9SW8LyKwPkzOp0FXyAR1jMketIME%2FOmPYeOQZ7Q%2BrFbrDYudFpKoPAY%2Bqw1ujLkQC%2B7%2F6RwG5v%2Bi8Hk%2F6tpi3KdUakSlbGlF0bZLI0docro6&X-Amz-Signature=9785ac0d918318d8fc944c2d1dd67f0d001d244954422fedd5c84d7277859bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W2O4XD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBhMkxMYQmXVAwFNiyxDOpHcIY1uDy3J604BTClFrVthAiEA2G2a3frUxXOorM1TP8%2BTIm8pPD%2BxS8R4uL5pevr41Hkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCkOMZQ6uB%2Fo79ZjpircA020ArhfjqMOrV7CVBjrR0wXC%2FsBO1vnoZoqq8HgoCUZO2X4d7M%2BqtCKDFyU94HEmKvmdpq9phRLJoMKp9%2F4fVCqaQjOmLar5kWlNzKbo9brGdWClMgNEQ2T409pbphfvbb39EetifUfWLuMdnlgsYvpKYDEyk175CYeangcnqT9uc0krOwvWVTRuftg7a2xIguIrdNYiDbUcH3N5lfgzyM64tvs4s3N3BHKXchJAKMx4m%2B010WA6d%2BeCkWDz7CjFpadWPwsLthOk1jalT%2FegkscAAWAWqA%2FFisHynyjVP55OW%2BeoOpqjMwzUZr%2B0MCqrsp8CK7CDwTmYca0mwXE8EUjz4sVQd%2FMBwOOE%2BA7qF%2BbvNkwCr6h%2BqjMEPA6b3ZhQM9myK%2B565egAKjYtxMYUnjB6LNKeiwctwTRx80dTdLDgnEf3S6B5SblfV8BthAnz7WA5schGXs16uuNQwaMsz8HZImcVKp2jkpjuq4uJN19aRxarFPoqhYaPF6rDjgF%2Ff%2BSjF27xCGbN96TdDnMJrZG035VlneMEQPvQ2MdRcwAEoosUBKxWVyepidfFR%2BpPtRbPh6Vk91FTqOMpNO9nyHPprc3WeRTRYMdVzjHopiBn0zmL69aIXwP3xhlMKLFzcEGOqUB0Bz3OSCwtlVVArhddHijJw%2FsrEOOhhgnYx25knzKRG2qkmnYEHlBrFNKSWGHnTXv3qKkSQhxFzs3Iahry0IK%2BEI6uXGjBJCnDbGkEBp7K71ep6sg9SW8LyKwPkzOp0FXyAR1jMketIME%2FOmPYeOQZ7Q%2BrFbrDYudFpKoPAY%2Bqw1ujLkQC%2B7%2F6RwG5v%2Bi8Hk%2F6tpi3KdUakSlbGlF0bZLI0docro6&X-Amz-Signature=a4a6d5bf92a1e9e4830cda6ec0971a386d7a4b222bd6567c8509ba43fe18d010&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W2O4XD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBhMkxMYQmXVAwFNiyxDOpHcIY1uDy3J604BTClFrVthAiEA2G2a3frUxXOorM1TP8%2BTIm8pPD%2BxS8R4uL5pevr41Hkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCkOMZQ6uB%2Fo79ZjpircA020ArhfjqMOrV7CVBjrR0wXC%2FsBO1vnoZoqq8HgoCUZO2X4d7M%2BqtCKDFyU94HEmKvmdpq9phRLJoMKp9%2F4fVCqaQjOmLar5kWlNzKbo9brGdWClMgNEQ2T409pbphfvbb39EetifUfWLuMdnlgsYvpKYDEyk175CYeangcnqT9uc0krOwvWVTRuftg7a2xIguIrdNYiDbUcH3N5lfgzyM64tvs4s3N3BHKXchJAKMx4m%2B010WA6d%2BeCkWDz7CjFpadWPwsLthOk1jalT%2FegkscAAWAWqA%2FFisHynyjVP55OW%2BeoOpqjMwzUZr%2B0MCqrsp8CK7CDwTmYca0mwXE8EUjz4sVQd%2FMBwOOE%2BA7qF%2BbvNkwCr6h%2BqjMEPA6b3ZhQM9myK%2B565egAKjYtxMYUnjB6LNKeiwctwTRx80dTdLDgnEf3S6B5SblfV8BthAnz7WA5schGXs16uuNQwaMsz8HZImcVKp2jkpjuq4uJN19aRxarFPoqhYaPF6rDjgF%2Ff%2BSjF27xCGbN96TdDnMJrZG035VlneMEQPvQ2MdRcwAEoosUBKxWVyepidfFR%2BpPtRbPh6Vk91FTqOMpNO9nyHPprc3WeRTRYMdVzjHopiBn0zmL69aIXwP3xhlMKLFzcEGOqUB0Bz3OSCwtlVVArhddHijJw%2FsrEOOhhgnYx25knzKRG2qkmnYEHlBrFNKSWGHnTXv3qKkSQhxFzs3Iahry0IK%2BEI6uXGjBJCnDbGkEBp7K71ep6sg9SW8LyKwPkzOp0FXyAR1jMketIME%2FOmPYeOQZ7Q%2BrFbrDYudFpKoPAY%2Bqw1ujLkQC%2B7%2F6RwG5v%2Bi8Hk%2F6tpi3KdUakSlbGlF0bZLI0docro6&X-Amz-Signature=849a2f847fcb4aae3d75ce2642008511ef5c4f7fe0abacb85506c50f32ebbd30&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W2O4XD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBhMkxMYQmXVAwFNiyxDOpHcIY1uDy3J604BTClFrVthAiEA2G2a3frUxXOorM1TP8%2BTIm8pPD%2BxS8R4uL5pevr41Hkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCkOMZQ6uB%2Fo79ZjpircA020ArhfjqMOrV7CVBjrR0wXC%2FsBO1vnoZoqq8HgoCUZO2X4d7M%2BqtCKDFyU94HEmKvmdpq9phRLJoMKp9%2F4fVCqaQjOmLar5kWlNzKbo9brGdWClMgNEQ2T409pbphfvbb39EetifUfWLuMdnlgsYvpKYDEyk175CYeangcnqT9uc0krOwvWVTRuftg7a2xIguIrdNYiDbUcH3N5lfgzyM64tvs4s3N3BHKXchJAKMx4m%2B010WA6d%2BeCkWDz7CjFpadWPwsLthOk1jalT%2FegkscAAWAWqA%2FFisHynyjVP55OW%2BeoOpqjMwzUZr%2B0MCqrsp8CK7CDwTmYca0mwXE8EUjz4sVQd%2FMBwOOE%2BA7qF%2BbvNkwCr6h%2BqjMEPA6b3ZhQM9myK%2B565egAKjYtxMYUnjB6LNKeiwctwTRx80dTdLDgnEf3S6B5SblfV8BthAnz7WA5schGXs16uuNQwaMsz8HZImcVKp2jkpjuq4uJN19aRxarFPoqhYaPF6rDjgF%2Ff%2BSjF27xCGbN96TdDnMJrZG035VlneMEQPvQ2MdRcwAEoosUBKxWVyepidfFR%2BpPtRbPh6Vk91FTqOMpNO9nyHPprc3WeRTRYMdVzjHopiBn0zmL69aIXwP3xhlMKLFzcEGOqUB0Bz3OSCwtlVVArhddHijJw%2FsrEOOhhgnYx25knzKRG2qkmnYEHlBrFNKSWGHnTXv3qKkSQhxFzs3Iahry0IK%2BEI6uXGjBJCnDbGkEBp7K71ep6sg9SW8LyKwPkzOp0FXyAR1jMketIME%2FOmPYeOQZ7Q%2BrFbrDYudFpKoPAY%2Bqw1ujLkQC%2B7%2F6RwG5v%2Bi8Hk%2F6tpi3KdUakSlbGlF0bZLI0docro6&X-Amz-Signature=00aac0c98e35a07a654433719cf62ef64729c5fd9ed97b6bdec7445fef31e471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5W2O4XD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBhMkxMYQmXVAwFNiyxDOpHcIY1uDy3J604BTClFrVthAiEA2G2a3frUxXOorM1TP8%2BTIm8pPD%2BxS8R4uL5pevr41Hkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCkOMZQ6uB%2Fo79ZjpircA020ArhfjqMOrV7CVBjrR0wXC%2FsBO1vnoZoqq8HgoCUZO2X4d7M%2BqtCKDFyU94HEmKvmdpq9phRLJoMKp9%2F4fVCqaQjOmLar5kWlNzKbo9brGdWClMgNEQ2T409pbphfvbb39EetifUfWLuMdnlgsYvpKYDEyk175CYeangcnqT9uc0krOwvWVTRuftg7a2xIguIrdNYiDbUcH3N5lfgzyM64tvs4s3N3BHKXchJAKMx4m%2B010WA6d%2BeCkWDz7CjFpadWPwsLthOk1jalT%2FegkscAAWAWqA%2FFisHynyjVP55OW%2BeoOpqjMwzUZr%2B0MCqrsp8CK7CDwTmYca0mwXE8EUjz4sVQd%2FMBwOOE%2BA7qF%2BbvNkwCr6h%2BqjMEPA6b3ZhQM9myK%2B565egAKjYtxMYUnjB6LNKeiwctwTRx80dTdLDgnEf3S6B5SblfV8BthAnz7WA5schGXs16uuNQwaMsz8HZImcVKp2jkpjuq4uJN19aRxarFPoqhYaPF6rDjgF%2Ff%2BSjF27xCGbN96TdDnMJrZG035VlneMEQPvQ2MdRcwAEoosUBKxWVyepidfFR%2BpPtRbPh6Vk91FTqOMpNO9nyHPprc3WeRTRYMdVzjHopiBn0zmL69aIXwP3xhlMKLFzcEGOqUB0Bz3OSCwtlVVArhddHijJw%2FsrEOOhhgnYx25knzKRG2qkmnYEHlBrFNKSWGHnTXv3qKkSQhxFzs3Iahry0IK%2BEI6uXGjBJCnDbGkEBp7K71ep6sg9SW8LyKwPkzOp0FXyAR1jMketIME%2FOmPYeOQZ7Q%2BrFbrDYudFpKoPAY%2Bqw1ujLkQC%2B7%2F6RwG5v%2Bi8Hk%2F6tpi3KdUakSlbGlF0bZLI0docro6&X-Amz-Signature=dc6a576b77fed1474c8a04a7f93adb10bd264dda170545c510ca1a39fab9da2d&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
