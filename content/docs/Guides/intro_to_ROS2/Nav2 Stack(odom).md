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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633RTXHIG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCxyCwZ1wZe9fkwWGqkhIPLcNb8%2BOVVgwcQld86iE0XoAIhAJFEQGOtS7VWFLABOptzfIqWh%2BcCDupDN4RtwjLqqUFMKv8DCFQQABoMNjM3NDIzMTgzODA1IgzQsROjAMSNtFes2Zcq3AM%2B9o6wRDtkGPIDgnj3k3ypF8cH9pJS57M0vdyrgYax99OUCCaSAPUAqB7sg4uSVDqdVXPQd4ANMu0GIPs%2FPNuXg5bLcR4E6%2Fj5Jqj9%2FgDa5UrPCYwZ%2FqZ2XdFzqt1NL1j0pHOraxdIID2rheUVqOE7sIJHzU4FCQBr57s8oV7%2BK6%2F3GncD%2Bft0r74JPu4n3xp0ho8stXfKsh6F48zkumUb8lbfUx2nkAglEgQg1ufMVkkz%2BavTxsLnqeX5itJdFhrElazGk%2FjK6Oe5kCY2V1f9AEX93c5d41%2FtvTVfXGrnGxvaSZRP904b4UXLIeydvpQjXObICHQ21cv09p%2Bi0na%2FTxnmrG%2FrOCzl%2FQZPevY9yEszGr34cIw2IYv8wM3J4bqA1FD4fHTQ8OkXuuoM2ROcEf8NqoUlCxmdIr%2BFj4NDS0f4wt9mS8pHG2mkVu6KBah5YEhBFQYXS4Xwz8g1imp8tYUxavyU09zGrMKyxS7CWwQjmdLeuk8UdPfO3pza6X7R63r2hqi2XGqbFVeHMqEIny3fKrw%2F962lNz8ypJu%2Bb6PPxWuuYB7eGZEp6YjQDa3YY1ZCQVgT9GTIa7z1nEY%2FbqQzUcAABmoXeAvaxGP0DOkg51NTMSJxIj%2BLxjChrtzDBjqkAZjExikrGHe8TI15pCYV93nLC3HMhmL9w%2BC6cZalK2ecK9r7NvMUrlr71rI3dZts8VAt5e8Drn6elE8W2PwwhwsooEogsTvZNKOFqq8%2F3SKwjkQqJPdml8vnw9bPkY7oBFT4YS0PQ%2BqMWCJUkMwebBp5vaj3FPVUonB1ihLgcTuleZBtz33T7dcKH5f5eI3Aml9645kzBgVB22Ee86Txiuwrj1gG&X-Amz-Signature=7b8122a804fe659d67d94e4be46a8742513a1532ff967dbdc35a16c2cc47232b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633RTXHIG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCxyCwZ1wZe9fkwWGqkhIPLcNb8%2BOVVgwcQld86iE0XoAIhAJFEQGOtS7VWFLABOptzfIqWh%2BcCDupDN4RtwjLqqUFMKv8DCFQQABoMNjM3NDIzMTgzODA1IgzQsROjAMSNtFes2Zcq3AM%2B9o6wRDtkGPIDgnj3k3ypF8cH9pJS57M0vdyrgYax99OUCCaSAPUAqB7sg4uSVDqdVXPQd4ANMu0GIPs%2FPNuXg5bLcR4E6%2Fj5Jqj9%2FgDa5UrPCYwZ%2FqZ2XdFzqt1NL1j0pHOraxdIID2rheUVqOE7sIJHzU4FCQBr57s8oV7%2BK6%2F3GncD%2Bft0r74JPu4n3xp0ho8stXfKsh6F48zkumUb8lbfUx2nkAglEgQg1ufMVkkz%2BavTxsLnqeX5itJdFhrElazGk%2FjK6Oe5kCY2V1f9AEX93c5d41%2FtvTVfXGrnGxvaSZRP904b4UXLIeydvpQjXObICHQ21cv09p%2Bi0na%2FTxnmrG%2FrOCzl%2FQZPevY9yEszGr34cIw2IYv8wM3J4bqA1FD4fHTQ8OkXuuoM2ROcEf8NqoUlCxmdIr%2BFj4NDS0f4wt9mS8pHG2mkVu6KBah5YEhBFQYXS4Xwz8g1imp8tYUxavyU09zGrMKyxS7CWwQjmdLeuk8UdPfO3pza6X7R63r2hqi2XGqbFVeHMqEIny3fKrw%2F962lNz8ypJu%2Bb6PPxWuuYB7eGZEp6YjQDa3YY1ZCQVgT9GTIa7z1nEY%2FbqQzUcAABmoXeAvaxGP0DOkg51NTMSJxIj%2BLxjChrtzDBjqkAZjExikrGHe8TI15pCYV93nLC3HMhmL9w%2BC6cZalK2ecK9r7NvMUrlr71rI3dZts8VAt5e8Drn6elE8W2PwwhwsooEogsTvZNKOFqq8%2F3SKwjkQqJPdml8vnw9bPkY7oBFT4YS0PQ%2BqMWCJUkMwebBp5vaj3FPVUonB1ihLgcTuleZBtz33T7dcKH5f5eI3Aml9645kzBgVB22Ee86Txiuwrj1gG&X-Amz-Signature=819901e65d0f5fdaefb0ee3d783ed13a6e9536c7ad29e5dfe9a8568715469a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633RTXHIG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCxyCwZ1wZe9fkwWGqkhIPLcNb8%2BOVVgwcQld86iE0XoAIhAJFEQGOtS7VWFLABOptzfIqWh%2BcCDupDN4RtwjLqqUFMKv8DCFQQABoMNjM3NDIzMTgzODA1IgzQsROjAMSNtFes2Zcq3AM%2B9o6wRDtkGPIDgnj3k3ypF8cH9pJS57M0vdyrgYax99OUCCaSAPUAqB7sg4uSVDqdVXPQd4ANMu0GIPs%2FPNuXg5bLcR4E6%2Fj5Jqj9%2FgDa5UrPCYwZ%2FqZ2XdFzqt1NL1j0pHOraxdIID2rheUVqOE7sIJHzU4FCQBr57s8oV7%2BK6%2F3GncD%2Bft0r74JPu4n3xp0ho8stXfKsh6F48zkumUb8lbfUx2nkAglEgQg1ufMVkkz%2BavTxsLnqeX5itJdFhrElazGk%2FjK6Oe5kCY2V1f9AEX93c5d41%2FtvTVfXGrnGxvaSZRP904b4UXLIeydvpQjXObICHQ21cv09p%2Bi0na%2FTxnmrG%2FrOCzl%2FQZPevY9yEszGr34cIw2IYv8wM3J4bqA1FD4fHTQ8OkXuuoM2ROcEf8NqoUlCxmdIr%2BFj4NDS0f4wt9mS8pHG2mkVu6KBah5YEhBFQYXS4Xwz8g1imp8tYUxavyU09zGrMKyxS7CWwQjmdLeuk8UdPfO3pza6X7R63r2hqi2XGqbFVeHMqEIny3fKrw%2F962lNz8ypJu%2Bb6PPxWuuYB7eGZEp6YjQDa3YY1ZCQVgT9GTIa7z1nEY%2FbqQzUcAABmoXeAvaxGP0DOkg51NTMSJxIj%2BLxjChrtzDBjqkAZjExikrGHe8TI15pCYV93nLC3HMhmL9w%2BC6cZalK2ecK9r7NvMUrlr71rI3dZts8VAt5e8Drn6elE8W2PwwhwsooEogsTvZNKOFqq8%2F3SKwjkQqJPdml8vnw9bPkY7oBFT4YS0PQ%2BqMWCJUkMwebBp5vaj3FPVUonB1ihLgcTuleZBtz33T7dcKH5f5eI3Aml9645kzBgVB22Ee86Txiuwrj1gG&X-Amz-Signature=c45e3dd2800283864ca70e736d30f3319c45323c1aee89d3975071a7f031c286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633RTXHIG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCxyCwZ1wZe9fkwWGqkhIPLcNb8%2BOVVgwcQld86iE0XoAIhAJFEQGOtS7VWFLABOptzfIqWh%2BcCDupDN4RtwjLqqUFMKv8DCFQQABoMNjM3NDIzMTgzODA1IgzQsROjAMSNtFes2Zcq3AM%2B9o6wRDtkGPIDgnj3k3ypF8cH9pJS57M0vdyrgYax99OUCCaSAPUAqB7sg4uSVDqdVXPQd4ANMu0GIPs%2FPNuXg5bLcR4E6%2Fj5Jqj9%2FgDa5UrPCYwZ%2FqZ2XdFzqt1NL1j0pHOraxdIID2rheUVqOE7sIJHzU4FCQBr57s8oV7%2BK6%2F3GncD%2Bft0r74JPu4n3xp0ho8stXfKsh6F48zkumUb8lbfUx2nkAglEgQg1ufMVkkz%2BavTxsLnqeX5itJdFhrElazGk%2FjK6Oe5kCY2V1f9AEX93c5d41%2FtvTVfXGrnGxvaSZRP904b4UXLIeydvpQjXObICHQ21cv09p%2Bi0na%2FTxnmrG%2FrOCzl%2FQZPevY9yEszGr34cIw2IYv8wM3J4bqA1FD4fHTQ8OkXuuoM2ROcEf8NqoUlCxmdIr%2BFj4NDS0f4wt9mS8pHG2mkVu6KBah5YEhBFQYXS4Xwz8g1imp8tYUxavyU09zGrMKyxS7CWwQjmdLeuk8UdPfO3pza6X7R63r2hqi2XGqbFVeHMqEIny3fKrw%2F962lNz8ypJu%2Bb6PPxWuuYB7eGZEp6YjQDa3YY1ZCQVgT9GTIa7z1nEY%2FbqQzUcAABmoXeAvaxGP0DOkg51NTMSJxIj%2BLxjChrtzDBjqkAZjExikrGHe8TI15pCYV93nLC3HMhmL9w%2BC6cZalK2ecK9r7NvMUrlr71rI3dZts8VAt5e8Drn6elE8W2PwwhwsooEogsTvZNKOFqq8%2F3SKwjkQqJPdml8vnw9bPkY7oBFT4YS0PQ%2BqMWCJUkMwebBp5vaj3FPVUonB1ihLgcTuleZBtz33T7dcKH5f5eI3Aml9645kzBgVB22Ee86Txiuwrj1gG&X-Amz-Signature=e130bba091ed6c136bb19e0003a5a45bfed150273bb99639928a573b8fbc541d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633RTXHIG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCxyCwZ1wZe9fkwWGqkhIPLcNb8%2BOVVgwcQld86iE0XoAIhAJFEQGOtS7VWFLABOptzfIqWh%2BcCDupDN4RtwjLqqUFMKv8DCFQQABoMNjM3NDIzMTgzODA1IgzQsROjAMSNtFes2Zcq3AM%2B9o6wRDtkGPIDgnj3k3ypF8cH9pJS57M0vdyrgYax99OUCCaSAPUAqB7sg4uSVDqdVXPQd4ANMu0GIPs%2FPNuXg5bLcR4E6%2Fj5Jqj9%2FgDa5UrPCYwZ%2FqZ2XdFzqt1NL1j0pHOraxdIID2rheUVqOE7sIJHzU4FCQBr57s8oV7%2BK6%2F3GncD%2Bft0r74JPu4n3xp0ho8stXfKsh6F48zkumUb8lbfUx2nkAglEgQg1ufMVkkz%2BavTxsLnqeX5itJdFhrElazGk%2FjK6Oe5kCY2V1f9AEX93c5d41%2FtvTVfXGrnGxvaSZRP904b4UXLIeydvpQjXObICHQ21cv09p%2Bi0na%2FTxnmrG%2FrOCzl%2FQZPevY9yEszGr34cIw2IYv8wM3J4bqA1FD4fHTQ8OkXuuoM2ROcEf8NqoUlCxmdIr%2BFj4NDS0f4wt9mS8pHG2mkVu6KBah5YEhBFQYXS4Xwz8g1imp8tYUxavyU09zGrMKyxS7CWwQjmdLeuk8UdPfO3pza6X7R63r2hqi2XGqbFVeHMqEIny3fKrw%2F962lNz8ypJu%2Bb6PPxWuuYB7eGZEp6YjQDa3YY1ZCQVgT9GTIa7z1nEY%2FbqQzUcAABmoXeAvaxGP0DOkg51NTMSJxIj%2BLxjChrtzDBjqkAZjExikrGHe8TI15pCYV93nLC3HMhmL9w%2BC6cZalK2ecK9r7NvMUrlr71rI3dZts8VAt5e8Drn6elE8W2PwwhwsooEogsTvZNKOFqq8%2F3SKwjkQqJPdml8vnw9bPkY7oBFT4YS0PQ%2BqMWCJUkMwebBp5vaj3FPVUonB1ihLgcTuleZBtz33T7dcKH5f5eI3Aml9645kzBgVB22Ee86Txiuwrj1gG&X-Amz-Signature=578b3060e3db2ed42a36700ea1f23c563a866a5c4a5867d7f4c836066f2de73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
