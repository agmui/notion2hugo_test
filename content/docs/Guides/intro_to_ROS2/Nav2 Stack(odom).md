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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DCUASK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBXGa3OSYY6Kmw%2Fz0ei0U0sseFDpwo8HbTOlZzi2kHk2AiAmBEgTdb6LA3PQ4bLQ9v9D9gju7dIQUmhpOLwY2QfLfCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BISNmmlLdg56r93lKtwD8UxQ7dwRYfpo4stV4PFRCcb65mdEzJMqHhmy1arXQiDWjBNEVOPdyGpNixYa7reqQQWeHnDJYCk%2FnFAkkY1Jzv%2Fe9%2FeyYVs9IHdyZR0n2XovGhfPGmf%2FmmrQBac%2FwCnCpbXmJx7zN69QIOsFBDBbWQke77ZQi6AKQxG35PVKND5%2BbP7t5V3r2j0KBTmX4FfWE8L%2B%2BMdLu9El4Ss7Ns5PRfCHdJc4b8t3r%2Fn0GVKymcqs2j4TJpH2YBf65Lq%2FTw%2B0jZfnr0D%2FLk82yF5My2fHvWOLwteTrr2WFuvHuczZAaEU5GUE4VkEPdu96Y9%2FNtDUZS1aMznHpEflZ4JKbTzVkitSc29Bnt6o4TzkdibVhNfHxDat9f%2Bj6ENqyl2iwXy%2F01gt09Pn5f9larRZn5qV058x%2F1lVEGwcI1h51zvrzrZp8IU3%2FxN%2FOeQs63%2FcqWyrrXjQ0jWGTWGbg%2FFev6vFjtSliDVA5lxPpHNXwdVZazoUAtw9LJr1GMZwn8mC1c6TnA4KdluEEdXWLte6Wj3kvX5fwcyEYeNQuLM1Ba9Od4HlKEmqZE27OxNEnEHsZYKUznZALgnikTgBCkhnfOD%2F2d0r%2BjWKJ8CJFeUBgICZqPxCTysSy8DlAJNCxnIw0OvAwQY6pgEUeseVQT4076KnxqeJXr9R7H%2BJcRT%2FOlwF42jHABzQ%2BW97hg2EFUIuTEcviG8mZsp33KrgA93DV7EUjbhUFS6IeNEIM87%2Fvap2DvZkzJyASBnkMySO57%2BmcujN86bZ5c%2BFo5d%2FkbIb70HytwwElLDhqsjgLXULdwkQopkI%2FkiLPZNo7zYFmrgini6VwsIoiu2q7lFqeoCVu5fCFqlw%2BH371Y0zGJPF&X-Amz-Signature=b33b0d0e0305faf0e2c579eca1fc133c269f4b3cce3a1affd61467fb3465ffac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DCUASK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBXGa3OSYY6Kmw%2Fz0ei0U0sseFDpwo8HbTOlZzi2kHk2AiAmBEgTdb6LA3PQ4bLQ9v9D9gju7dIQUmhpOLwY2QfLfCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BISNmmlLdg56r93lKtwD8UxQ7dwRYfpo4stV4PFRCcb65mdEzJMqHhmy1arXQiDWjBNEVOPdyGpNixYa7reqQQWeHnDJYCk%2FnFAkkY1Jzv%2Fe9%2FeyYVs9IHdyZR0n2XovGhfPGmf%2FmmrQBac%2FwCnCpbXmJx7zN69QIOsFBDBbWQke77ZQi6AKQxG35PVKND5%2BbP7t5V3r2j0KBTmX4FfWE8L%2B%2BMdLu9El4Ss7Ns5PRfCHdJc4b8t3r%2Fn0GVKymcqs2j4TJpH2YBf65Lq%2FTw%2B0jZfnr0D%2FLk82yF5My2fHvWOLwteTrr2WFuvHuczZAaEU5GUE4VkEPdu96Y9%2FNtDUZS1aMznHpEflZ4JKbTzVkitSc29Bnt6o4TzkdibVhNfHxDat9f%2Bj6ENqyl2iwXy%2F01gt09Pn5f9larRZn5qV058x%2F1lVEGwcI1h51zvrzrZp8IU3%2FxN%2FOeQs63%2FcqWyrrXjQ0jWGTWGbg%2FFev6vFjtSliDVA5lxPpHNXwdVZazoUAtw9LJr1GMZwn8mC1c6TnA4KdluEEdXWLte6Wj3kvX5fwcyEYeNQuLM1Ba9Od4HlKEmqZE27OxNEnEHsZYKUznZALgnikTgBCkhnfOD%2F2d0r%2BjWKJ8CJFeUBgICZqPxCTysSy8DlAJNCxnIw0OvAwQY6pgEUeseVQT4076KnxqeJXr9R7H%2BJcRT%2FOlwF42jHABzQ%2BW97hg2EFUIuTEcviG8mZsp33KrgA93DV7EUjbhUFS6IeNEIM87%2Fvap2DvZkzJyASBnkMySO57%2BmcujN86bZ5c%2BFo5d%2FkbIb70HytwwElLDhqsjgLXULdwkQopkI%2FkiLPZNo7zYFmrgini6VwsIoiu2q7lFqeoCVu5fCFqlw%2BH371Y0zGJPF&X-Amz-Signature=cbee1ff4abd4ec11a460361958c1f4ba14d106abe055ae0c84d91e48ce311fac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DCUASK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBXGa3OSYY6Kmw%2Fz0ei0U0sseFDpwo8HbTOlZzi2kHk2AiAmBEgTdb6LA3PQ4bLQ9v9D9gju7dIQUmhpOLwY2QfLfCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BISNmmlLdg56r93lKtwD8UxQ7dwRYfpo4stV4PFRCcb65mdEzJMqHhmy1arXQiDWjBNEVOPdyGpNixYa7reqQQWeHnDJYCk%2FnFAkkY1Jzv%2Fe9%2FeyYVs9IHdyZR0n2XovGhfPGmf%2FmmrQBac%2FwCnCpbXmJx7zN69QIOsFBDBbWQke77ZQi6AKQxG35PVKND5%2BbP7t5V3r2j0KBTmX4FfWE8L%2B%2BMdLu9El4Ss7Ns5PRfCHdJc4b8t3r%2Fn0GVKymcqs2j4TJpH2YBf65Lq%2FTw%2B0jZfnr0D%2FLk82yF5My2fHvWOLwteTrr2WFuvHuczZAaEU5GUE4VkEPdu96Y9%2FNtDUZS1aMznHpEflZ4JKbTzVkitSc29Bnt6o4TzkdibVhNfHxDat9f%2Bj6ENqyl2iwXy%2F01gt09Pn5f9larRZn5qV058x%2F1lVEGwcI1h51zvrzrZp8IU3%2FxN%2FOeQs63%2FcqWyrrXjQ0jWGTWGbg%2FFev6vFjtSliDVA5lxPpHNXwdVZazoUAtw9LJr1GMZwn8mC1c6TnA4KdluEEdXWLte6Wj3kvX5fwcyEYeNQuLM1Ba9Od4HlKEmqZE27OxNEnEHsZYKUznZALgnikTgBCkhnfOD%2F2d0r%2BjWKJ8CJFeUBgICZqPxCTysSy8DlAJNCxnIw0OvAwQY6pgEUeseVQT4076KnxqeJXr9R7H%2BJcRT%2FOlwF42jHABzQ%2BW97hg2EFUIuTEcviG8mZsp33KrgA93DV7EUjbhUFS6IeNEIM87%2Fvap2DvZkzJyASBnkMySO57%2BmcujN86bZ5c%2BFo5d%2FkbIb70HytwwElLDhqsjgLXULdwkQopkI%2FkiLPZNo7zYFmrgini6VwsIoiu2q7lFqeoCVu5fCFqlw%2BH371Y0zGJPF&X-Amz-Signature=29ea6d8383fe80c4df027eb0fbbc4a8995b1361f7d5e509fd44a1add0872d70a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DCUASK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBXGa3OSYY6Kmw%2Fz0ei0U0sseFDpwo8HbTOlZzi2kHk2AiAmBEgTdb6LA3PQ4bLQ9v9D9gju7dIQUmhpOLwY2QfLfCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BISNmmlLdg56r93lKtwD8UxQ7dwRYfpo4stV4PFRCcb65mdEzJMqHhmy1arXQiDWjBNEVOPdyGpNixYa7reqQQWeHnDJYCk%2FnFAkkY1Jzv%2Fe9%2FeyYVs9IHdyZR0n2XovGhfPGmf%2FmmrQBac%2FwCnCpbXmJx7zN69QIOsFBDBbWQke77ZQi6AKQxG35PVKND5%2BbP7t5V3r2j0KBTmX4FfWE8L%2B%2BMdLu9El4Ss7Ns5PRfCHdJc4b8t3r%2Fn0GVKymcqs2j4TJpH2YBf65Lq%2FTw%2B0jZfnr0D%2FLk82yF5My2fHvWOLwteTrr2WFuvHuczZAaEU5GUE4VkEPdu96Y9%2FNtDUZS1aMznHpEflZ4JKbTzVkitSc29Bnt6o4TzkdibVhNfHxDat9f%2Bj6ENqyl2iwXy%2F01gt09Pn5f9larRZn5qV058x%2F1lVEGwcI1h51zvrzrZp8IU3%2FxN%2FOeQs63%2FcqWyrrXjQ0jWGTWGbg%2FFev6vFjtSliDVA5lxPpHNXwdVZazoUAtw9LJr1GMZwn8mC1c6TnA4KdluEEdXWLte6Wj3kvX5fwcyEYeNQuLM1Ba9Od4HlKEmqZE27OxNEnEHsZYKUznZALgnikTgBCkhnfOD%2F2d0r%2BjWKJ8CJFeUBgICZqPxCTysSy8DlAJNCxnIw0OvAwQY6pgEUeseVQT4076KnxqeJXr9R7H%2BJcRT%2FOlwF42jHABzQ%2BW97hg2EFUIuTEcviG8mZsp33KrgA93DV7EUjbhUFS6IeNEIM87%2Fvap2DvZkzJyASBnkMySO57%2BmcujN86bZ5c%2BFo5d%2FkbIb70HytwwElLDhqsjgLXULdwkQopkI%2FkiLPZNo7zYFmrgini6VwsIoiu2q7lFqeoCVu5fCFqlw%2BH371Y0zGJPF&X-Amz-Signature=41c09a8eebbb2f6aadf421cbab54c77e1ebb7a4bd6728f7745421bd291e8f500&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675DCUASK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBXGa3OSYY6Kmw%2Fz0ei0U0sseFDpwo8HbTOlZzi2kHk2AiAmBEgTdb6LA3PQ4bLQ9v9D9gju7dIQUmhpOLwY2QfLfCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BISNmmlLdg56r93lKtwD8UxQ7dwRYfpo4stV4PFRCcb65mdEzJMqHhmy1arXQiDWjBNEVOPdyGpNixYa7reqQQWeHnDJYCk%2FnFAkkY1Jzv%2Fe9%2FeyYVs9IHdyZR0n2XovGhfPGmf%2FmmrQBac%2FwCnCpbXmJx7zN69QIOsFBDBbWQke77ZQi6AKQxG35PVKND5%2BbP7t5V3r2j0KBTmX4FfWE8L%2B%2BMdLu9El4Ss7Ns5PRfCHdJc4b8t3r%2Fn0GVKymcqs2j4TJpH2YBf65Lq%2FTw%2B0jZfnr0D%2FLk82yF5My2fHvWOLwteTrr2WFuvHuczZAaEU5GUE4VkEPdu96Y9%2FNtDUZS1aMznHpEflZ4JKbTzVkitSc29Bnt6o4TzkdibVhNfHxDat9f%2Bj6ENqyl2iwXy%2F01gt09Pn5f9larRZn5qV058x%2F1lVEGwcI1h51zvrzrZp8IU3%2FxN%2FOeQs63%2FcqWyrrXjQ0jWGTWGbg%2FFev6vFjtSliDVA5lxPpHNXwdVZazoUAtw9LJr1GMZwn8mC1c6TnA4KdluEEdXWLte6Wj3kvX5fwcyEYeNQuLM1Ba9Od4HlKEmqZE27OxNEnEHsZYKUznZALgnikTgBCkhnfOD%2F2d0r%2BjWKJ8CJFeUBgICZqPxCTysSy8DlAJNCxnIw0OvAwQY6pgEUeseVQT4076KnxqeJXr9R7H%2BJcRT%2FOlwF42jHABzQ%2BW97hg2EFUIuTEcviG8mZsp33KrgA93DV7EUjbhUFS6IeNEIM87%2Fvap2DvZkzJyASBnkMySO57%2BmcujN86bZ5c%2BFo5d%2FkbIb70HytwwElLDhqsjgLXULdwkQopkI%2FkiLPZNo7zYFmrgini6VwsIoiu2q7lFqeoCVu5fCFqlw%2BH371Y0zGJPF&X-Amz-Signature=3d5c097b8ea62134267715f34a91403057468d0eaaf8919f51e1963f4bc776d7&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
