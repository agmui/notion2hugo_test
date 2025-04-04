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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWWS2AT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxoySHbz%2FRu0hW3dR8oQLi34nZbH%2BaJ%2BZqxmJD6ie6tQIhAPwXOUiCMg2t0WOegGeX%2BTjOqyAZW6XogUWsLtNQH5BlKv8DCBsQABoMNjM3NDIzMTgzODA1IgxQLChblbD5rhfiGcwq3AMydDQ46Win3FUos%2Bb85xwq1L29X5%2Fm9XbvJ9zN%2B9HR5ASfl87OPVa3LT%2B0dtJRTCwUAkCnlU7ovd4NbXVHn2RhXv0diUwHqRPHykYuyF9MFiYZM9RhSjBGieswgLZLR%2Fpes%2BzkLjaY%2FgvuLZ62ssiRyJsbeEz0NAx1jgT7OZFo%2BalcNIVnf9BLzjkbKpWUQ%2B9AxbbH3b7EpqX4BpOCYsHNWopCFvS4EqqDg%2BAVgsO25A4HatyXgLO5N76In9cM%2Bx5qn9QOPC%2BOwjREp%2B9nD3HfXjAJ9rlxqls70vrXpv%2BEVKFmM8843Z%2BOQVOQkdg0KZmNfwP6eks9cm%2BScbup6OM9N2b6fn2JtfBc0nJRJejPmQTRmzKfGBj0cGS7qTJPucjULQ6M0acgdgOcH9Si2PKnw0qdtHTlLd4QWKGyKB8ESZCFx2yCF9IKZBAlt%2B2HcQOphBTJ4YVJ4iyFvju%2B49eNh4umAme6Q1NU8EcRVvtJAj50%2B7xwqxH0c3oiq%2B%2BcUi%2BrN8nSaeb16dXfOlX%2FEZg8sCfaKu0csvgEUTWGF5Kjrzow1ry7Mq%2Bb9n%2FmVhpQoAwQRANODnbk3zwXlPeMR4reEjTi6O76QkEb7t1zHMPJP6hTMDX%2FATp3b03BpzCyuMC%2FBjqkAYvxXqaqvQ%2BxU%2FCvzNAtmWrW%2BGLKWEB3BDlzdp0nV2lUJ1JG%2BSkvvRgDt%2B8Cf4cHixhA4JALbzOJW2dtllUyyWtLoZuK5XgvsipS5R%2FRXqgvo04ciiqcNeG8IRgRpW9dI2j8lIFThtXv2qeTrQXqXUnGRllZ4ITbUiCsFH1u3L1vSZPDQTVx9rGhgXP%2FCA5jnzRfeuu4UBmXUAkz9vcMDIbFttUl&X-Amz-Signature=56058a2ba99cabadd36d7d0b76be1b50774f757467be1cf8237b82be57baef24&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWWS2AT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxoySHbz%2FRu0hW3dR8oQLi34nZbH%2BaJ%2BZqxmJD6ie6tQIhAPwXOUiCMg2t0WOegGeX%2BTjOqyAZW6XogUWsLtNQH5BlKv8DCBsQABoMNjM3NDIzMTgzODA1IgxQLChblbD5rhfiGcwq3AMydDQ46Win3FUos%2Bb85xwq1L29X5%2Fm9XbvJ9zN%2B9HR5ASfl87OPVa3LT%2B0dtJRTCwUAkCnlU7ovd4NbXVHn2RhXv0diUwHqRPHykYuyF9MFiYZM9RhSjBGieswgLZLR%2Fpes%2BzkLjaY%2FgvuLZ62ssiRyJsbeEz0NAx1jgT7OZFo%2BalcNIVnf9BLzjkbKpWUQ%2B9AxbbH3b7EpqX4BpOCYsHNWopCFvS4EqqDg%2BAVgsO25A4HatyXgLO5N76In9cM%2Bx5qn9QOPC%2BOwjREp%2B9nD3HfXjAJ9rlxqls70vrXpv%2BEVKFmM8843Z%2BOQVOQkdg0KZmNfwP6eks9cm%2BScbup6OM9N2b6fn2JtfBc0nJRJejPmQTRmzKfGBj0cGS7qTJPucjULQ6M0acgdgOcH9Si2PKnw0qdtHTlLd4QWKGyKB8ESZCFx2yCF9IKZBAlt%2B2HcQOphBTJ4YVJ4iyFvju%2B49eNh4umAme6Q1NU8EcRVvtJAj50%2B7xwqxH0c3oiq%2B%2BcUi%2BrN8nSaeb16dXfOlX%2FEZg8sCfaKu0csvgEUTWGF5Kjrzow1ry7Mq%2Bb9n%2FmVhpQoAwQRANODnbk3zwXlPeMR4reEjTi6O76QkEb7t1zHMPJP6hTMDX%2FATp3b03BpzCyuMC%2FBjqkAYvxXqaqvQ%2BxU%2FCvzNAtmWrW%2BGLKWEB3BDlzdp0nV2lUJ1JG%2BSkvvRgDt%2B8Cf4cHixhA4JALbzOJW2dtllUyyWtLoZuK5XgvsipS5R%2FRXqgvo04ciiqcNeG8IRgRpW9dI2j8lIFThtXv2qeTrQXqXUnGRllZ4ITbUiCsFH1u3L1vSZPDQTVx9rGhgXP%2FCA5jnzRfeuu4UBmXUAkz9vcMDIbFttUl&X-Amz-Signature=ef1b3e7c1f319e3db8184ab3551806d6d047a44cba2a2f67957de353e9b11664&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWWS2AT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxoySHbz%2FRu0hW3dR8oQLi34nZbH%2BaJ%2BZqxmJD6ie6tQIhAPwXOUiCMg2t0WOegGeX%2BTjOqyAZW6XogUWsLtNQH5BlKv8DCBsQABoMNjM3NDIzMTgzODA1IgxQLChblbD5rhfiGcwq3AMydDQ46Win3FUos%2Bb85xwq1L29X5%2Fm9XbvJ9zN%2B9HR5ASfl87OPVa3LT%2B0dtJRTCwUAkCnlU7ovd4NbXVHn2RhXv0diUwHqRPHykYuyF9MFiYZM9RhSjBGieswgLZLR%2Fpes%2BzkLjaY%2FgvuLZ62ssiRyJsbeEz0NAx1jgT7OZFo%2BalcNIVnf9BLzjkbKpWUQ%2B9AxbbH3b7EpqX4BpOCYsHNWopCFvS4EqqDg%2BAVgsO25A4HatyXgLO5N76In9cM%2Bx5qn9QOPC%2BOwjREp%2B9nD3HfXjAJ9rlxqls70vrXpv%2BEVKFmM8843Z%2BOQVOQkdg0KZmNfwP6eks9cm%2BScbup6OM9N2b6fn2JtfBc0nJRJejPmQTRmzKfGBj0cGS7qTJPucjULQ6M0acgdgOcH9Si2PKnw0qdtHTlLd4QWKGyKB8ESZCFx2yCF9IKZBAlt%2B2HcQOphBTJ4YVJ4iyFvju%2B49eNh4umAme6Q1NU8EcRVvtJAj50%2B7xwqxH0c3oiq%2B%2BcUi%2BrN8nSaeb16dXfOlX%2FEZg8sCfaKu0csvgEUTWGF5Kjrzow1ry7Mq%2Bb9n%2FmVhpQoAwQRANODnbk3zwXlPeMR4reEjTi6O76QkEb7t1zHMPJP6hTMDX%2FATp3b03BpzCyuMC%2FBjqkAYvxXqaqvQ%2BxU%2FCvzNAtmWrW%2BGLKWEB3BDlzdp0nV2lUJ1JG%2BSkvvRgDt%2B8Cf4cHixhA4JALbzOJW2dtllUyyWtLoZuK5XgvsipS5R%2FRXqgvo04ciiqcNeG8IRgRpW9dI2j8lIFThtXv2qeTrQXqXUnGRllZ4ITbUiCsFH1u3L1vSZPDQTVx9rGhgXP%2FCA5jnzRfeuu4UBmXUAkz9vcMDIbFttUl&X-Amz-Signature=92adb7d3c680897f79370cc880ab2dae833b296ac63d25e91b1779e88ef04fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWWS2AT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxoySHbz%2FRu0hW3dR8oQLi34nZbH%2BaJ%2BZqxmJD6ie6tQIhAPwXOUiCMg2t0WOegGeX%2BTjOqyAZW6XogUWsLtNQH5BlKv8DCBsQABoMNjM3NDIzMTgzODA1IgxQLChblbD5rhfiGcwq3AMydDQ46Win3FUos%2Bb85xwq1L29X5%2Fm9XbvJ9zN%2B9HR5ASfl87OPVa3LT%2B0dtJRTCwUAkCnlU7ovd4NbXVHn2RhXv0diUwHqRPHykYuyF9MFiYZM9RhSjBGieswgLZLR%2Fpes%2BzkLjaY%2FgvuLZ62ssiRyJsbeEz0NAx1jgT7OZFo%2BalcNIVnf9BLzjkbKpWUQ%2B9AxbbH3b7EpqX4BpOCYsHNWopCFvS4EqqDg%2BAVgsO25A4HatyXgLO5N76In9cM%2Bx5qn9QOPC%2BOwjREp%2B9nD3HfXjAJ9rlxqls70vrXpv%2BEVKFmM8843Z%2BOQVOQkdg0KZmNfwP6eks9cm%2BScbup6OM9N2b6fn2JtfBc0nJRJejPmQTRmzKfGBj0cGS7qTJPucjULQ6M0acgdgOcH9Si2PKnw0qdtHTlLd4QWKGyKB8ESZCFx2yCF9IKZBAlt%2B2HcQOphBTJ4YVJ4iyFvju%2B49eNh4umAme6Q1NU8EcRVvtJAj50%2B7xwqxH0c3oiq%2B%2BcUi%2BrN8nSaeb16dXfOlX%2FEZg8sCfaKu0csvgEUTWGF5Kjrzow1ry7Mq%2Bb9n%2FmVhpQoAwQRANODnbk3zwXlPeMR4reEjTi6O76QkEb7t1zHMPJP6hTMDX%2FATp3b03BpzCyuMC%2FBjqkAYvxXqaqvQ%2BxU%2FCvzNAtmWrW%2BGLKWEB3BDlzdp0nV2lUJ1JG%2BSkvvRgDt%2B8Cf4cHixhA4JALbzOJW2dtllUyyWtLoZuK5XgvsipS5R%2FRXqgvo04ciiqcNeG8IRgRpW9dI2j8lIFThtXv2qeTrQXqXUnGRllZ4ITbUiCsFH1u3L1vSZPDQTVx9rGhgXP%2FCA5jnzRfeuu4UBmXUAkz9vcMDIbFttUl&X-Amz-Signature=02302a01561ab0b01b659060a667e0b015f996d9cb1f13c32c123b93344f05f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWWS2AT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxoySHbz%2FRu0hW3dR8oQLi34nZbH%2BaJ%2BZqxmJD6ie6tQIhAPwXOUiCMg2t0WOegGeX%2BTjOqyAZW6XogUWsLtNQH5BlKv8DCBsQABoMNjM3NDIzMTgzODA1IgxQLChblbD5rhfiGcwq3AMydDQ46Win3FUos%2Bb85xwq1L29X5%2Fm9XbvJ9zN%2B9HR5ASfl87OPVa3LT%2B0dtJRTCwUAkCnlU7ovd4NbXVHn2RhXv0diUwHqRPHykYuyF9MFiYZM9RhSjBGieswgLZLR%2Fpes%2BzkLjaY%2FgvuLZ62ssiRyJsbeEz0NAx1jgT7OZFo%2BalcNIVnf9BLzjkbKpWUQ%2B9AxbbH3b7EpqX4BpOCYsHNWopCFvS4EqqDg%2BAVgsO25A4HatyXgLO5N76In9cM%2Bx5qn9QOPC%2BOwjREp%2B9nD3HfXjAJ9rlxqls70vrXpv%2BEVKFmM8843Z%2BOQVOQkdg0KZmNfwP6eks9cm%2BScbup6OM9N2b6fn2JtfBc0nJRJejPmQTRmzKfGBj0cGS7qTJPucjULQ6M0acgdgOcH9Si2PKnw0qdtHTlLd4QWKGyKB8ESZCFx2yCF9IKZBAlt%2B2HcQOphBTJ4YVJ4iyFvju%2B49eNh4umAme6Q1NU8EcRVvtJAj50%2B7xwqxH0c3oiq%2B%2BcUi%2BrN8nSaeb16dXfOlX%2FEZg8sCfaKu0csvgEUTWGF5Kjrzow1ry7Mq%2Bb9n%2FmVhpQoAwQRANODnbk3zwXlPeMR4reEjTi6O76QkEb7t1zHMPJP6hTMDX%2FATp3b03BpzCyuMC%2FBjqkAYvxXqaqvQ%2BxU%2FCvzNAtmWrW%2BGLKWEB3BDlzdp0nV2lUJ1JG%2BSkvvRgDt%2B8Cf4cHixhA4JALbzOJW2dtllUyyWtLoZuK5XgvsipS5R%2FRXqgvo04ciiqcNeG8IRgRpW9dI2j8lIFThtXv2qeTrQXqXUnGRllZ4ITbUiCsFH1u3L1vSZPDQTVx9rGhgXP%2FCA5jnzRfeuu4UBmXUAkz9vcMDIbFttUl&X-Amz-Signature=fff3f8af77ef567907eca72623b88e14f8894afc77e6140b687a3ced8d9c0bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
