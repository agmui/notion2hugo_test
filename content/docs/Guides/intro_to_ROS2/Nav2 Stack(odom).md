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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGD5C2T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjIUQuSD2T5X171DPD%2Bcsm6p0ESt2lZr4Mxh8ZydmH8AiBNAd%2BtFMIiBDYJLhFdTGkehqlbEWUYpY67W92uQtJw6ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMJ2pryKH9%2F0qv%2F%2FbFKtwDZd8mXsykM%2FWebXyaacy9FNxqIiiU8bqntvzE4rRLPqIx52SM7laiabPp%2BoATTMh6NgevbSdvRF8w1ykgIwaz6mwP%2B9LnERzD0wLd9LPQqH3mEMd%2FQWZFICLsxZNKWmoiaYHqfx9aTgkNHUyxzGX64mQY0SL7sxcNUlMKH92W%2BwAPjlnh3qNN4p%2FhYhDDz8rsjEXjVVQCdzCG2Iy5zmgXaAJAIZVGjCyoh2aEq3C7NlnCj98%2FuWzVERrMML9Y1bEJzxs95SEB9rZ8w2lmRYCkPOh5GVtAWia3vR6JT68VZPIMRxbbO%2BpaG1qtOqvWqhj8%2Fm%2BYl6AXAKj1gzStDuqdhXI%2F5vPjSFXXDDlx6pX5VdQkfKX5etmE2DepTv4t74UvljuSbJQ3o3MRlsmv09S6sKsjoXjxNN2oPeHtynjgAvth969j%2B6dTpvm0qDEXwrpgB5NTzGT89Zy7Rb%2B%2FnTHLHt6NA49d1LtvoAZdciwQj3YMqNTuAGoIQ%2FlOLF0xS2AI8z%2FV23LIs1aYjcpGuhGnt9XCiz%2FwnEImOVjGMBCcKz3Z4RSKaYIouWaDhnkx%2FjKm5AVEzi%2FNQkEPGhSLV4b4B8tZvxCOrXbT2vhAtPhZCZWKOOOvqkVbEBitiC8w%2FZOKwAY6pgGvTZH4EoRjzW%2FOT%2FZSxVJqCBfl3sOtkAFalApHL3grQh%2B9r9RENa5M6wyu1t9gJ30G%2FxxLjtuWNnjvcKNPN3QJ7DzzgjaLZwKeqdAeBkP1TH7naVrhldXqA1MoyL0Zn0GJ31HMypq%2Brpb4LXBl759ukaf24h%2FktlXyQOwwJ%2BuXkApbYxxAJ4P%2B%2FFwX3oVgizLDNj9X64t%2B1RHPFZvVMnLgnDosDo0f&X-Amz-Signature=a1f1204b9bf3e4c963f35eef1633e6a446dc0738bd0a4b25e26c50150e765ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGD5C2T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjIUQuSD2T5X171DPD%2Bcsm6p0ESt2lZr4Mxh8ZydmH8AiBNAd%2BtFMIiBDYJLhFdTGkehqlbEWUYpY67W92uQtJw6ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMJ2pryKH9%2F0qv%2F%2FbFKtwDZd8mXsykM%2FWebXyaacy9FNxqIiiU8bqntvzE4rRLPqIx52SM7laiabPp%2BoATTMh6NgevbSdvRF8w1ykgIwaz6mwP%2B9LnERzD0wLd9LPQqH3mEMd%2FQWZFICLsxZNKWmoiaYHqfx9aTgkNHUyxzGX64mQY0SL7sxcNUlMKH92W%2BwAPjlnh3qNN4p%2FhYhDDz8rsjEXjVVQCdzCG2Iy5zmgXaAJAIZVGjCyoh2aEq3C7NlnCj98%2FuWzVERrMML9Y1bEJzxs95SEB9rZ8w2lmRYCkPOh5GVtAWia3vR6JT68VZPIMRxbbO%2BpaG1qtOqvWqhj8%2Fm%2BYl6AXAKj1gzStDuqdhXI%2F5vPjSFXXDDlx6pX5VdQkfKX5etmE2DepTv4t74UvljuSbJQ3o3MRlsmv09S6sKsjoXjxNN2oPeHtynjgAvth969j%2B6dTpvm0qDEXwrpgB5NTzGT89Zy7Rb%2B%2FnTHLHt6NA49d1LtvoAZdciwQj3YMqNTuAGoIQ%2FlOLF0xS2AI8z%2FV23LIs1aYjcpGuhGnt9XCiz%2FwnEImOVjGMBCcKz3Z4RSKaYIouWaDhnkx%2FjKm5AVEzi%2FNQkEPGhSLV4b4B8tZvxCOrXbT2vhAtPhZCZWKOOOvqkVbEBitiC8w%2FZOKwAY6pgGvTZH4EoRjzW%2FOT%2FZSxVJqCBfl3sOtkAFalApHL3grQh%2B9r9RENa5M6wyu1t9gJ30G%2FxxLjtuWNnjvcKNPN3QJ7DzzgjaLZwKeqdAeBkP1TH7naVrhldXqA1MoyL0Zn0GJ31HMypq%2Brpb4LXBl759ukaf24h%2FktlXyQOwwJ%2BuXkApbYxxAJ4P%2B%2FFwX3oVgizLDNj9X64t%2B1RHPFZvVMnLgnDosDo0f&X-Amz-Signature=b882965d60f59e99a048295b610367cd11b89a06c13c04170fa9065ce0c95961&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGD5C2T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjIUQuSD2T5X171DPD%2Bcsm6p0ESt2lZr4Mxh8ZydmH8AiBNAd%2BtFMIiBDYJLhFdTGkehqlbEWUYpY67W92uQtJw6ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMJ2pryKH9%2F0qv%2F%2FbFKtwDZd8mXsykM%2FWebXyaacy9FNxqIiiU8bqntvzE4rRLPqIx52SM7laiabPp%2BoATTMh6NgevbSdvRF8w1ykgIwaz6mwP%2B9LnERzD0wLd9LPQqH3mEMd%2FQWZFICLsxZNKWmoiaYHqfx9aTgkNHUyxzGX64mQY0SL7sxcNUlMKH92W%2BwAPjlnh3qNN4p%2FhYhDDz8rsjEXjVVQCdzCG2Iy5zmgXaAJAIZVGjCyoh2aEq3C7NlnCj98%2FuWzVERrMML9Y1bEJzxs95SEB9rZ8w2lmRYCkPOh5GVtAWia3vR6JT68VZPIMRxbbO%2BpaG1qtOqvWqhj8%2Fm%2BYl6AXAKj1gzStDuqdhXI%2F5vPjSFXXDDlx6pX5VdQkfKX5etmE2DepTv4t74UvljuSbJQ3o3MRlsmv09S6sKsjoXjxNN2oPeHtynjgAvth969j%2B6dTpvm0qDEXwrpgB5NTzGT89Zy7Rb%2B%2FnTHLHt6NA49d1LtvoAZdciwQj3YMqNTuAGoIQ%2FlOLF0xS2AI8z%2FV23LIs1aYjcpGuhGnt9XCiz%2FwnEImOVjGMBCcKz3Z4RSKaYIouWaDhnkx%2FjKm5AVEzi%2FNQkEPGhSLV4b4B8tZvxCOrXbT2vhAtPhZCZWKOOOvqkVbEBitiC8w%2FZOKwAY6pgGvTZH4EoRjzW%2FOT%2FZSxVJqCBfl3sOtkAFalApHL3grQh%2B9r9RENa5M6wyu1t9gJ30G%2FxxLjtuWNnjvcKNPN3QJ7DzzgjaLZwKeqdAeBkP1TH7naVrhldXqA1MoyL0Zn0GJ31HMypq%2Brpb4LXBl759ukaf24h%2FktlXyQOwwJ%2BuXkApbYxxAJ4P%2B%2FFwX3oVgizLDNj9X64t%2B1RHPFZvVMnLgnDosDo0f&X-Amz-Signature=c7785290aeb4b672529b51c5e2751fba44e3ffd4a38e2b1e496a251972785643&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGD5C2T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjIUQuSD2T5X171DPD%2Bcsm6p0ESt2lZr4Mxh8ZydmH8AiBNAd%2BtFMIiBDYJLhFdTGkehqlbEWUYpY67W92uQtJw6ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMJ2pryKH9%2F0qv%2F%2FbFKtwDZd8mXsykM%2FWebXyaacy9FNxqIiiU8bqntvzE4rRLPqIx52SM7laiabPp%2BoATTMh6NgevbSdvRF8w1ykgIwaz6mwP%2B9LnERzD0wLd9LPQqH3mEMd%2FQWZFICLsxZNKWmoiaYHqfx9aTgkNHUyxzGX64mQY0SL7sxcNUlMKH92W%2BwAPjlnh3qNN4p%2FhYhDDz8rsjEXjVVQCdzCG2Iy5zmgXaAJAIZVGjCyoh2aEq3C7NlnCj98%2FuWzVERrMML9Y1bEJzxs95SEB9rZ8w2lmRYCkPOh5GVtAWia3vR6JT68VZPIMRxbbO%2BpaG1qtOqvWqhj8%2Fm%2BYl6AXAKj1gzStDuqdhXI%2F5vPjSFXXDDlx6pX5VdQkfKX5etmE2DepTv4t74UvljuSbJQ3o3MRlsmv09S6sKsjoXjxNN2oPeHtynjgAvth969j%2B6dTpvm0qDEXwrpgB5NTzGT89Zy7Rb%2B%2FnTHLHt6NA49d1LtvoAZdciwQj3YMqNTuAGoIQ%2FlOLF0xS2AI8z%2FV23LIs1aYjcpGuhGnt9XCiz%2FwnEImOVjGMBCcKz3Z4RSKaYIouWaDhnkx%2FjKm5AVEzi%2FNQkEPGhSLV4b4B8tZvxCOrXbT2vhAtPhZCZWKOOOvqkVbEBitiC8w%2FZOKwAY6pgGvTZH4EoRjzW%2FOT%2FZSxVJqCBfl3sOtkAFalApHL3grQh%2B9r9RENa5M6wyu1t9gJ30G%2FxxLjtuWNnjvcKNPN3QJ7DzzgjaLZwKeqdAeBkP1TH7naVrhldXqA1MoyL0Zn0GJ31HMypq%2Brpb4LXBl759ukaf24h%2FktlXyQOwwJ%2BuXkApbYxxAJ4P%2B%2FFwX3oVgizLDNj9X64t%2B1RHPFZvVMnLgnDosDo0f&X-Amz-Signature=c4dc4703c37d0fae11bf6711020fe660d36cada8a8d1f349401b0490b9836b48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGD5C2T%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjIUQuSD2T5X171DPD%2Bcsm6p0ESt2lZr4Mxh8ZydmH8AiBNAd%2BtFMIiBDYJLhFdTGkehqlbEWUYpY67W92uQtJw6ir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMJ2pryKH9%2F0qv%2F%2FbFKtwDZd8mXsykM%2FWebXyaacy9FNxqIiiU8bqntvzE4rRLPqIx52SM7laiabPp%2BoATTMh6NgevbSdvRF8w1ykgIwaz6mwP%2B9LnERzD0wLd9LPQqH3mEMd%2FQWZFICLsxZNKWmoiaYHqfx9aTgkNHUyxzGX64mQY0SL7sxcNUlMKH92W%2BwAPjlnh3qNN4p%2FhYhDDz8rsjEXjVVQCdzCG2Iy5zmgXaAJAIZVGjCyoh2aEq3C7NlnCj98%2FuWzVERrMML9Y1bEJzxs95SEB9rZ8w2lmRYCkPOh5GVtAWia3vR6JT68VZPIMRxbbO%2BpaG1qtOqvWqhj8%2Fm%2BYl6AXAKj1gzStDuqdhXI%2F5vPjSFXXDDlx6pX5VdQkfKX5etmE2DepTv4t74UvljuSbJQ3o3MRlsmv09S6sKsjoXjxNN2oPeHtynjgAvth969j%2B6dTpvm0qDEXwrpgB5NTzGT89Zy7Rb%2B%2FnTHLHt6NA49d1LtvoAZdciwQj3YMqNTuAGoIQ%2FlOLF0xS2AI8z%2FV23LIs1aYjcpGuhGnt9XCiz%2FwnEImOVjGMBCcKz3Z4RSKaYIouWaDhnkx%2FjKm5AVEzi%2FNQkEPGhSLV4b4B8tZvxCOrXbT2vhAtPhZCZWKOOOvqkVbEBitiC8w%2FZOKwAY6pgGvTZH4EoRjzW%2FOT%2FZSxVJqCBfl3sOtkAFalApHL3grQh%2B9r9RENa5M6wyu1t9gJ30G%2FxxLjtuWNnjvcKNPN3QJ7DzzgjaLZwKeqdAeBkP1TH7naVrhldXqA1MoyL0Zn0GJ31HMypq%2Brpb4LXBl759ukaf24h%2FktlXyQOwwJ%2BuXkApbYxxAJ4P%2B%2FFwX3oVgizLDNj9X64t%2B1RHPFZvVMnLgnDosDo0f&X-Amz-Signature=d4c5c6210060ef61c2b2803228af46998803da802ef3bcad72cb43fcfde99162&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
