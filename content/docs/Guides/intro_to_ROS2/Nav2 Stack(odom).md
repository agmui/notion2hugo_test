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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBF2TKI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB51Rez%2BLw2q%2B6eBDe2Ta%2FjL4kJjvjwHxCkZmtMPUTdvAiAh%2BxIZnA0gl0DqIr6NmeYw7nUThqKSFh0QVdrjqLAb0SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17%2FdqhQeaGBh7FthKtwDmWN9NwQYdxdrxHe32PPCmc407A48OFKHgwpF3mGwEGU9rsW9WqG2sYfj9uQ%2BxmdKiZZDanHId6Iqu%2F2UOQLR6oai%2FkkosBdlneqmZkXg4%2FixHId91PZq8qpe9beekkv34d8%2Bmo143U%2FUvCP8LX6oiR%2BmBvH5sXyRKCoueXXomTqQ21LoOQ8Xo8v8vtuTKMG%2Bmd7FPQ6abnfDm6w%2FOLxaM%2BIMJhRjm%2B%2BpregORKkLSMccLofoKM48%2BajuI2E6a09urT9bX3C9ARDBNCBatP5xW%2Bn1zAs8i1A%2BcDStfi7MYZBS0Q%2F5DMMsd6PUk22w816TwqEK5OxgDOPmzd720bVTxjgIF%2Fo95DqYJ9imN43p0NDUAcPYaDMVs%2FJ%2FAQqRlHg1xtgXVYNzmva0XqVqf0F0dde566VES4qGl1GNWAkwLvYyDBy4fgOi%2FKdO%2Bu4N3qLpjeiw7yqH48a4%2F%2B9UYahyVCg%2BQJIEsagjC4jevvIS5xlaFiT4Y3jxAfzcpIB264SQ8O8T%2B4lR%2B%2F6TF9%2B2c9ZB4t6WsxxHCJL3pF62b8bwr60cCSYnxlbpjjHtRCBsiT%2FUvejR%2FlPU64l1v2Edy%2F6VkRm2qp1cnbPXzzDBrGyv8asl5jTiy7G8O7fISjkwvcGtvQY6pgHdpfHWx%2FjF%2F4JBC9dtpQwZ7KdrtzR8eIbA3nNB6qlFSRPZPRNNpYg0JUU9yvwa0dOltZowgp7aheBEMfN4pSeqXLrENPnTuIr4ahebwLjMwqhwvSI4jMlqcRtJD2I5YqlgJGXCZfj8mZIi7WewcLlkLU%2FON%2BkqcN3q7CTkgZgDvpBpmU5lYIoLs3uCpKZ7ZFrOnyhGM%2F0ScR0HCJyvUEJl2W4zgBHT&X-Amz-Signature=c3e0048104bee54ea7fd65358e720945af8e6f0ffa6e007f0c3259523a0bf751&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBF2TKI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB51Rez%2BLw2q%2B6eBDe2Ta%2FjL4kJjvjwHxCkZmtMPUTdvAiAh%2BxIZnA0gl0DqIr6NmeYw7nUThqKSFh0QVdrjqLAb0SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17%2FdqhQeaGBh7FthKtwDmWN9NwQYdxdrxHe32PPCmc407A48OFKHgwpF3mGwEGU9rsW9WqG2sYfj9uQ%2BxmdKiZZDanHId6Iqu%2F2UOQLR6oai%2FkkosBdlneqmZkXg4%2FixHId91PZq8qpe9beekkv34d8%2Bmo143U%2FUvCP8LX6oiR%2BmBvH5sXyRKCoueXXomTqQ21LoOQ8Xo8v8vtuTKMG%2Bmd7FPQ6abnfDm6w%2FOLxaM%2BIMJhRjm%2B%2BpregORKkLSMccLofoKM48%2BajuI2E6a09urT9bX3C9ARDBNCBatP5xW%2Bn1zAs8i1A%2BcDStfi7MYZBS0Q%2F5DMMsd6PUk22w816TwqEK5OxgDOPmzd720bVTxjgIF%2Fo95DqYJ9imN43p0NDUAcPYaDMVs%2FJ%2FAQqRlHg1xtgXVYNzmva0XqVqf0F0dde566VES4qGl1GNWAkwLvYyDBy4fgOi%2FKdO%2Bu4N3qLpjeiw7yqH48a4%2F%2B9UYahyVCg%2BQJIEsagjC4jevvIS5xlaFiT4Y3jxAfzcpIB264SQ8O8T%2B4lR%2B%2F6TF9%2B2c9ZB4t6WsxxHCJL3pF62b8bwr60cCSYnxlbpjjHtRCBsiT%2FUvejR%2FlPU64l1v2Edy%2F6VkRm2qp1cnbPXzzDBrGyv8asl5jTiy7G8O7fISjkwvcGtvQY6pgHdpfHWx%2FjF%2F4JBC9dtpQwZ7KdrtzR8eIbA3nNB6qlFSRPZPRNNpYg0JUU9yvwa0dOltZowgp7aheBEMfN4pSeqXLrENPnTuIr4ahebwLjMwqhwvSI4jMlqcRtJD2I5YqlgJGXCZfj8mZIi7WewcLlkLU%2FON%2BkqcN3q7CTkgZgDvpBpmU5lYIoLs3uCpKZ7ZFrOnyhGM%2F0ScR0HCJyvUEJl2W4zgBHT&X-Amz-Signature=6ea01a81100cf7ae5c3a15524cebe0dedbb998c7d431c75580ccbb5c50a8cdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBF2TKI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB51Rez%2BLw2q%2B6eBDe2Ta%2FjL4kJjvjwHxCkZmtMPUTdvAiAh%2BxIZnA0gl0DqIr6NmeYw7nUThqKSFh0QVdrjqLAb0SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17%2FdqhQeaGBh7FthKtwDmWN9NwQYdxdrxHe32PPCmc407A48OFKHgwpF3mGwEGU9rsW9WqG2sYfj9uQ%2BxmdKiZZDanHId6Iqu%2F2UOQLR6oai%2FkkosBdlneqmZkXg4%2FixHId91PZq8qpe9beekkv34d8%2Bmo143U%2FUvCP8LX6oiR%2BmBvH5sXyRKCoueXXomTqQ21LoOQ8Xo8v8vtuTKMG%2Bmd7FPQ6abnfDm6w%2FOLxaM%2BIMJhRjm%2B%2BpregORKkLSMccLofoKM48%2BajuI2E6a09urT9bX3C9ARDBNCBatP5xW%2Bn1zAs8i1A%2BcDStfi7MYZBS0Q%2F5DMMsd6PUk22w816TwqEK5OxgDOPmzd720bVTxjgIF%2Fo95DqYJ9imN43p0NDUAcPYaDMVs%2FJ%2FAQqRlHg1xtgXVYNzmva0XqVqf0F0dde566VES4qGl1GNWAkwLvYyDBy4fgOi%2FKdO%2Bu4N3qLpjeiw7yqH48a4%2F%2B9UYahyVCg%2BQJIEsagjC4jevvIS5xlaFiT4Y3jxAfzcpIB264SQ8O8T%2B4lR%2B%2F6TF9%2B2c9ZB4t6WsxxHCJL3pF62b8bwr60cCSYnxlbpjjHtRCBsiT%2FUvejR%2FlPU64l1v2Edy%2F6VkRm2qp1cnbPXzzDBrGyv8asl5jTiy7G8O7fISjkwvcGtvQY6pgHdpfHWx%2FjF%2F4JBC9dtpQwZ7KdrtzR8eIbA3nNB6qlFSRPZPRNNpYg0JUU9yvwa0dOltZowgp7aheBEMfN4pSeqXLrENPnTuIr4ahebwLjMwqhwvSI4jMlqcRtJD2I5YqlgJGXCZfj8mZIi7WewcLlkLU%2FON%2BkqcN3q7CTkgZgDvpBpmU5lYIoLs3uCpKZ7ZFrOnyhGM%2F0ScR0HCJyvUEJl2W4zgBHT&X-Amz-Signature=a9271d38487541735a422ebc004f86d19b696469b786114fa8367637a0561c17&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBF2TKI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB51Rez%2BLw2q%2B6eBDe2Ta%2FjL4kJjvjwHxCkZmtMPUTdvAiAh%2BxIZnA0gl0DqIr6NmeYw7nUThqKSFh0QVdrjqLAb0SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17%2FdqhQeaGBh7FthKtwDmWN9NwQYdxdrxHe32PPCmc407A48OFKHgwpF3mGwEGU9rsW9WqG2sYfj9uQ%2BxmdKiZZDanHId6Iqu%2F2UOQLR6oai%2FkkosBdlneqmZkXg4%2FixHId91PZq8qpe9beekkv34d8%2Bmo143U%2FUvCP8LX6oiR%2BmBvH5sXyRKCoueXXomTqQ21LoOQ8Xo8v8vtuTKMG%2Bmd7FPQ6abnfDm6w%2FOLxaM%2BIMJhRjm%2B%2BpregORKkLSMccLofoKM48%2BajuI2E6a09urT9bX3C9ARDBNCBatP5xW%2Bn1zAs8i1A%2BcDStfi7MYZBS0Q%2F5DMMsd6PUk22w816TwqEK5OxgDOPmzd720bVTxjgIF%2Fo95DqYJ9imN43p0NDUAcPYaDMVs%2FJ%2FAQqRlHg1xtgXVYNzmva0XqVqf0F0dde566VES4qGl1GNWAkwLvYyDBy4fgOi%2FKdO%2Bu4N3qLpjeiw7yqH48a4%2F%2B9UYahyVCg%2BQJIEsagjC4jevvIS5xlaFiT4Y3jxAfzcpIB264SQ8O8T%2B4lR%2B%2F6TF9%2B2c9ZB4t6WsxxHCJL3pF62b8bwr60cCSYnxlbpjjHtRCBsiT%2FUvejR%2FlPU64l1v2Edy%2F6VkRm2qp1cnbPXzzDBrGyv8asl5jTiy7G8O7fISjkwvcGtvQY6pgHdpfHWx%2FjF%2F4JBC9dtpQwZ7KdrtzR8eIbA3nNB6qlFSRPZPRNNpYg0JUU9yvwa0dOltZowgp7aheBEMfN4pSeqXLrENPnTuIr4ahebwLjMwqhwvSI4jMlqcRtJD2I5YqlgJGXCZfj8mZIi7WewcLlkLU%2FON%2BkqcN3q7CTkgZgDvpBpmU5lYIoLs3uCpKZ7ZFrOnyhGM%2F0ScR0HCJyvUEJl2W4zgBHT&X-Amz-Signature=78420b16ca943ae4e62bfbeafc7636218c527ac6599c2c2f3cfa51dbcf5cc40b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBF2TKI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB51Rez%2BLw2q%2B6eBDe2Ta%2FjL4kJjvjwHxCkZmtMPUTdvAiAh%2BxIZnA0gl0DqIr6NmeYw7nUThqKSFh0QVdrjqLAb0SqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17%2FdqhQeaGBh7FthKtwDmWN9NwQYdxdrxHe32PPCmc407A48OFKHgwpF3mGwEGU9rsW9WqG2sYfj9uQ%2BxmdKiZZDanHId6Iqu%2F2UOQLR6oai%2FkkosBdlneqmZkXg4%2FixHId91PZq8qpe9beekkv34d8%2Bmo143U%2FUvCP8LX6oiR%2BmBvH5sXyRKCoueXXomTqQ21LoOQ8Xo8v8vtuTKMG%2Bmd7FPQ6abnfDm6w%2FOLxaM%2BIMJhRjm%2B%2BpregORKkLSMccLofoKM48%2BajuI2E6a09urT9bX3C9ARDBNCBatP5xW%2Bn1zAs8i1A%2BcDStfi7MYZBS0Q%2F5DMMsd6PUk22w816TwqEK5OxgDOPmzd720bVTxjgIF%2Fo95DqYJ9imN43p0NDUAcPYaDMVs%2FJ%2FAQqRlHg1xtgXVYNzmva0XqVqf0F0dde566VES4qGl1GNWAkwLvYyDBy4fgOi%2FKdO%2Bu4N3qLpjeiw7yqH48a4%2F%2B9UYahyVCg%2BQJIEsagjC4jevvIS5xlaFiT4Y3jxAfzcpIB264SQ8O8T%2B4lR%2B%2F6TF9%2B2c9ZB4t6WsxxHCJL3pF62b8bwr60cCSYnxlbpjjHtRCBsiT%2FUvejR%2FlPU64l1v2Edy%2F6VkRm2qp1cnbPXzzDBrGyv8asl5jTiy7G8O7fISjkwvcGtvQY6pgHdpfHWx%2FjF%2F4JBC9dtpQwZ7KdrtzR8eIbA3nNB6qlFSRPZPRNNpYg0JUU9yvwa0dOltZowgp7aheBEMfN4pSeqXLrENPnTuIr4ahebwLjMwqhwvSI4jMlqcRtJD2I5YqlgJGXCZfj8mZIi7WewcLlkLU%2FON%2BkqcN3q7CTkgZgDvpBpmU5lYIoLs3uCpKZ7ZFrOnyhGM%2F0ScR0HCJyvUEJl2W4zgBHT&X-Amz-Signature=c3e4be479cd4db8abc9d4207188dd724a4f63a034af2c4468d8fc973d3ce94da&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
