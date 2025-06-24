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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OC7ZAR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDstgLLWzchfkr0gCq%2BYaBVOQCGKlUToOT1yEh9zlsR8gIgHYXQbo0Y%2BcApDmZPY8HITP1W%2BHDw1DoqGnKUneD4ddUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF34ny8yHZzbajVFZyrcA0SYmvi52X%2Bu8MxtUq3Xak5eOUC8UGsS%2B%2FyLJqRClBMVjF7ihXz2%2Bmiz9SMfsBME1I55nBei11TwVf8a680HOwgFl0ilIr%2FCVE67kQz4S%2F10BH4L0PMZajcAONFNJx7R2cIwyOfAtQJgjOc9we7bZDQ9EKR2PZdsD8QmnVywiHM85psWsiowOKAgQbhZAkRqRTicpxxX79kNQv1muoKgPjo6DJCnoY3h4S%2FJoBvrVu%2FkAEn2jneLHrWiYQXpRcPAjHxtFctg6bBjuvZ5ki4fPFJs3RKH4bEU7YWx6riT%2FnhQjTvNIJoEO75I%2BNcwmY8NtFvCxQhLevaO1QB6o9fUVop1jjwDngVKvvcjKrxz0lHLF%2FA7HdvRPvTTKH6oqrP1Ok8mvB%2BJg8odVImGKOPz2zt4jEJyJe8uXEEW7SYYLJgh9kJ5kjMFVJJql3FB7S9Sbz4THWGGHbazEl2AE0PHoP8lXW25TQtky%2BTYi9t%2BVucwW%2FItorGsa6spRlupQFGuxQncpFvmI9E6sWvSviK5LgyiMKX%2BvOp47eQYpSemU5loZLXKjF7i2pfPKagDztOPe69S2bA3Lr8iEqEJC%2Fer1%2F0JFjOM0D6QnZ%2F2IajuXIze2qRJCUHvU2GYS9gbMKqi6sIGOqUBQHVLLwBKyPnLfd2vF9rbrf8s9m1TH6mFjoS0uBR0AQ6YfMwQbxhoeDfoU6nRgA9UYEnqPnlpoWUkUzb1gWwk8gO21M2q7Q4NRxlbki8h%2Fx%2FGd3K6u7HZgqGBScc8cSmGg633HE5YkHusiWtzR95Zde%2FPCt7KBpbxEGYme1n19l4LtvJxHakfjpK7V2mRjvEQ4PflDOT5jG6EBD7%2Bhf3c4%2BJUH4Um&X-Amz-Signature=5a2323919bffd9e6c3d793177c2e2a1fa660cb59c8b4209ba8a52df3b3cb5681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OC7ZAR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDstgLLWzchfkr0gCq%2BYaBVOQCGKlUToOT1yEh9zlsR8gIgHYXQbo0Y%2BcApDmZPY8HITP1W%2BHDw1DoqGnKUneD4ddUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF34ny8yHZzbajVFZyrcA0SYmvi52X%2Bu8MxtUq3Xak5eOUC8UGsS%2B%2FyLJqRClBMVjF7ihXz2%2Bmiz9SMfsBME1I55nBei11TwVf8a680HOwgFl0ilIr%2FCVE67kQz4S%2F10BH4L0PMZajcAONFNJx7R2cIwyOfAtQJgjOc9we7bZDQ9EKR2PZdsD8QmnVywiHM85psWsiowOKAgQbhZAkRqRTicpxxX79kNQv1muoKgPjo6DJCnoY3h4S%2FJoBvrVu%2FkAEn2jneLHrWiYQXpRcPAjHxtFctg6bBjuvZ5ki4fPFJs3RKH4bEU7YWx6riT%2FnhQjTvNIJoEO75I%2BNcwmY8NtFvCxQhLevaO1QB6o9fUVop1jjwDngVKvvcjKrxz0lHLF%2FA7HdvRPvTTKH6oqrP1Ok8mvB%2BJg8odVImGKOPz2zt4jEJyJe8uXEEW7SYYLJgh9kJ5kjMFVJJql3FB7S9Sbz4THWGGHbazEl2AE0PHoP8lXW25TQtky%2BTYi9t%2BVucwW%2FItorGsa6spRlupQFGuxQncpFvmI9E6sWvSviK5LgyiMKX%2BvOp47eQYpSemU5loZLXKjF7i2pfPKagDztOPe69S2bA3Lr8iEqEJC%2Fer1%2F0JFjOM0D6QnZ%2F2IajuXIze2qRJCUHvU2GYS9gbMKqi6sIGOqUBQHVLLwBKyPnLfd2vF9rbrf8s9m1TH6mFjoS0uBR0AQ6YfMwQbxhoeDfoU6nRgA9UYEnqPnlpoWUkUzb1gWwk8gO21M2q7Q4NRxlbki8h%2Fx%2FGd3K6u7HZgqGBScc8cSmGg633HE5YkHusiWtzR95Zde%2FPCt7KBpbxEGYme1n19l4LtvJxHakfjpK7V2mRjvEQ4PflDOT5jG6EBD7%2Bhf3c4%2BJUH4Um&X-Amz-Signature=dd7270c8653f68aa96d882d77699517c5404c6dad1e3dc7ff40e00ee421975ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OC7ZAR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDstgLLWzchfkr0gCq%2BYaBVOQCGKlUToOT1yEh9zlsR8gIgHYXQbo0Y%2BcApDmZPY8HITP1W%2BHDw1DoqGnKUneD4ddUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF34ny8yHZzbajVFZyrcA0SYmvi52X%2Bu8MxtUq3Xak5eOUC8UGsS%2B%2FyLJqRClBMVjF7ihXz2%2Bmiz9SMfsBME1I55nBei11TwVf8a680HOwgFl0ilIr%2FCVE67kQz4S%2F10BH4L0PMZajcAONFNJx7R2cIwyOfAtQJgjOc9we7bZDQ9EKR2PZdsD8QmnVywiHM85psWsiowOKAgQbhZAkRqRTicpxxX79kNQv1muoKgPjo6DJCnoY3h4S%2FJoBvrVu%2FkAEn2jneLHrWiYQXpRcPAjHxtFctg6bBjuvZ5ki4fPFJs3RKH4bEU7YWx6riT%2FnhQjTvNIJoEO75I%2BNcwmY8NtFvCxQhLevaO1QB6o9fUVop1jjwDngVKvvcjKrxz0lHLF%2FA7HdvRPvTTKH6oqrP1Ok8mvB%2BJg8odVImGKOPz2zt4jEJyJe8uXEEW7SYYLJgh9kJ5kjMFVJJql3FB7S9Sbz4THWGGHbazEl2AE0PHoP8lXW25TQtky%2BTYi9t%2BVucwW%2FItorGsa6spRlupQFGuxQncpFvmI9E6sWvSviK5LgyiMKX%2BvOp47eQYpSemU5loZLXKjF7i2pfPKagDztOPe69S2bA3Lr8iEqEJC%2Fer1%2F0JFjOM0D6QnZ%2F2IajuXIze2qRJCUHvU2GYS9gbMKqi6sIGOqUBQHVLLwBKyPnLfd2vF9rbrf8s9m1TH6mFjoS0uBR0AQ6YfMwQbxhoeDfoU6nRgA9UYEnqPnlpoWUkUzb1gWwk8gO21M2q7Q4NRxlbki8h%2Fx%2FGd3K6u7HZgqGBScc8cSmGg633HE5YkHusiWtzR95Zde%2FPCt7KBpbxEGYme1n19l4LtvJxHakfjpK7V2mRjvEQ4PflDOT5jG6EBD7%2Bhf3c4%2BJUH4Um&X-Amz-Signature=202a813d7356b0fbd4e13a03b6c57bf17f95a093bb1be4bcfeb7fd03846c5607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OC7ZAR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDstgLLWzchfkr0gCq%2BYaBVOQCGKlUToOT1yEh9zlsR8gIgHYXQbo0Y%2BcApDmZPY8HITP1W%2BHDw1DoqGnKUneD4ddUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF34ny8yHZzbajVFZyrcA0SYmvi52X%2Bu8MxtUq3Xak5eOUC8UGsS%2B%2FyLJqRClBMVjF7ihXz2%2Bmiz9SMfsBME1I55nBei11TwVf8a680HOwgFl0ilIr%2FCVE67kQz4S%2F10BH4L0PMZajcAONFNJx7R2cIwyOfAtQJgjOc9we7bZDQ9EKR2PZdsD8QmnVywiHM85psWsiowOKAgQbhZAkRqRTicpxxX79kNQv1muoKgPjo6DJCnoY3h4S%2FJoBvrVu%2FkAEn2jneLHrWiYQXpRcPAjHxtFctg6bBjuvZ5ki4fPFJs3RKH4bEU7YWx6riT%2FnhQjTvNIJoEO75I%2BNcwmY8NtFvCxQhLevaO1QB6o9fUVop1jjwDngVKvvcjKrxz0lHLF%2FA7HdvRPvTTKH6oqrP1Ok8mvB%2BJg8odVImGKOPz2zt4jEJyJe8uXEEW7SYYLJgh9kJ5kjMFVJJql3FB7S9Sbz4THWGGHbazEl2AE0PHoP8lXW25TQtky%2BTYi9t%2BVucwW%2FItorGsa6spRlupQFGuxQncpFvmI9E6sWvSviK5LgyiMKX%2BvOp47eQYpSemU5loZLXKjF7i2pfPKagDztOPe69S2bA3Lr8iEqEJC%2Fer1%2F0JFjOM0D6QnZ%2F2IajuXIze2qRJCUHvU2GYS9gbMKqi6sIGOqUBQHVLLwBKyPnLfd2vF9rbrf8s9m1TH6mFjoS0uBR0AQ6YfMwQbxhoeDfoU6nRgA9UYEnqPnlpoWUkUzb1gWwk8gO21M2q7Q4NRxlbki8h%2Fx%2FGd3K6u7HZgqGBScc8cSmGg633HE5YkHusiWtzR95Zde%2FPCt7KBpbxEGYme1n19l4LtvJxHakfjpK7V2mRjvEQ4PflDOT5jG6EBD7%2Bhf3c4%2BJUH4Um&X-Amz-Signature=fde5c03bd0b7f1f93e9cc89e4a020be7b4939902d9489c30967cdfe421987038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OC7ZAR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDstgLLWzchfkr0gCq%2BYaBVOQCGKlUToOT1yEh9zlsR8gIgHYXQbo0Y%2BcApDmZPY8HITP1W%2BHDw1DoqGnKUneD4ddUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF34ny8yHZzbajVFZyrcA0SYmvi52X%2Bu8MxtUq3Xak5eOUC8UGsS%2B%2FyLJqRClBMVjF7ihXz2%2Bmiz9SMfsBME1I55nBei11TwVf8a680HOwgFl0ilIr%2FCVE67kQz4S%2F10BH4L0PMZajcAONFNJx7R2cIwyOfAtQJgjOc9we7bZDQ9EKR2PZdsD8QmnVywiHM85psWsiowOKAgQbhZAkRqRTicpxxX79kNQv1muoKgPjo6DJCnoY3h4S%2FJoBvrVu%2FkAEn2jneLHrWiYQXpRcPAjHxtFctg6bBjuvZ5ki4fPFJs3RKH4bEU7YWx6riT%2FnhQjTvNIJoEO75I%2BNcwmY8NtFvCxQhLevaO1QB6o9fUVop1jjwDngVKvvcjKrxz0lHLF%2FA7HdvRPvTTKH6oqrP1Ok8mvB%2BJg8odVImGKOPz2zt4jEJyJe8uXEEW7SYYLJgh9kJ5kjMFVJJql3FB7S9Sbz4THWGGHbazEl2AE0PHoP8lXW25TQtky%2BTYi9t%2BVucwW%2FItorGsa6spRlupQFGuxQncpFvmI9E6sWvSviK5LgyiMKX%2BvOp47eQYpSemU5loZLXKjF7i2pfPKagDztOPe69S2bA3Lr8iEqEJC%2Fer1%2F0JFjOM0D6QnZ%2F2IajuXIze2qRJCUHvU2GYS9gbMKqi6sIGOqUBQHVLLwBKyPnLfd2vF9rbrf8s9m1TH6mFjoS0uBR0AQ6YfMwQbxhoeDfoU6nRgA9UYEnqPnlpoWUkUzb1gWwk8gO21M2q7Q4NRxlbki8h%2Fx%2FGd3K6u7HZgqGBScc8cSmGg633HE5YkHusiWtzR95Zde%2FPCt7KBpbxEGYme1n19l4LtvJxHakfjpK7V2mRjvEQ4PflDOT5jG6EBD7%2Bhf3c4%2BJUH4Um&X-Amz-Signature=fe28da795a276fcbd74df8c0bf862a5f3e06dcb618ac589a0af434d80763c043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
