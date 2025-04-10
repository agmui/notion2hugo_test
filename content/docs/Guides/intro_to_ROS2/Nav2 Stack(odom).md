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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NW4B6CM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE90HWZ7F1n5pciDGdDttoQIozR%2Fd02TTM0IdmH%2Fw%2BHyAiBqEsD89DE9oYlsobbyejS2eHykIMt77o%2Fh6OnjqByFSyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdpn8Hb95DUbA%2FqYKtwDGsDyA6txDTzadKu3AQme3mNluvP89%2BrZeKK%2FC6bEZ%2Fk0SznLjfohavrXx%2B2ptfB7fmP1A0QaV1Iztoaw696%2BJz964o1G2YZ5nHs43n5Kb4mJ5yg%2Bz%2BTGM0zCsylIJntmRlWiLvL%2FSkFudai5hHcW7i3pqy5FP4Q%2BxDrOgEW1qKXn4M%2BE7sB1xFvnLGRJw0iHWmzfugJJ51OXERE0dkK3zFt1B1guz2qEu8zZ%2BPLyAObk%2Bcsc6Wc1pdsL197cI%2FfjQkxXr8g5BXqiZdOlhfmvg3D7q92hIGIFxnbO4BQeODMrec7rLvP0OQyHhFce6EkPtQrTMIUA52Fh6HIPxDO8bpC4REAq7upcOKW%2BZ%2FiPzGQgilSXSYuG8iXdXD7ZwSEAEWIfX%2FbM0CM1qBQ4XXuBS5%2FbMtY4CBGIwDmzKkBJWUWRI%2FQl1PM1IdY659A%2BRwoNevMK7GoL8NaIV%2FhsH8vlZCOWC1K6nt9zJTKcC22p21W84e2mzCx095GmzAFNtUwVjrNsb%2FjLCCyPu6cqkiMF9Wz1TIgNZZLtu%2F2ddoBasUr9bf4ROEWGJu%2BxBDaiMnEkSSJaODPUW9Asp3h8WhjGeHCtQknT8isyY8yYoqqoNn87kXa9CFThFqLz7nwwlpHhvwY6pgHcKfcecLpeUrQpksKBGwMP8COJOOVK459w2C153esvyFRFZ9lJ3kCwSIvRwkYTjeDDtzhKtNWsrY0tqx4YKJpET4vTXZYzFhmGBqJHLcLeEowGGz%2Fejph3dYjX9owC7fMg7Kz2SuW2L74pKFb%2Bfj4VDRZzGU6blc66U%2FGkYRXbWmlhsbslnaR4RHc5PKS5W2ySgDJsGUn0wqJpNlPZ3G397wa9LS9z&X-Amz-Signature=5737b5330f7769e9a7691e1326bf53085b040e9a54eb6314e0321ebd80d3b09c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NW4B6CM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE90HWZ7F1n5pciDGdDttoQIozR%2Fd02TTM0IdmH%2Fw%2BHyAiBqEsD89DE9oYlsobbyejS2eHykIMt77o%2Fh6OnjqByFSyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdpn8Hb95DUbA%2FqYKtwDGsDyA6txDTzadKu3AQme3mNluvP89%2BrZeKK%2FC6bEZ%2Fk0SznLjfohavrXx%2B2ptfB7fmP1A0QaV1Iztoaw696%2BJz964o1G2YZ5nHs43n5Kb4mJ5yg%2Bz%2BTGM0zCsylIJntmRlWiLvL%2FSkFudai5hHcW7i3pqy5FP4Q%2BxDrOgEW1qKXn4M%2BE7sB1xFvnLGRJw0iHWmzfugJJ51OXERE0dkK3zFt1B1guz2qEu8zZ%2BPLyAObk%2Bcsc6Wc1pdsL197cI%2FfjQkxXr8g5BXqiZdOlhfmvg3D7q92hIGIFxnbO4BQeODMrec7rLvP0OQyHhFce6EkPtQrTMIUA52Fh6HIPxDO8bpC4REAq7upcOKW%2BZ%2FiPzGQgilSXSYuG8iXdXD7ZwSEAEWIfX%2FbM0CM1qBQ4XXuBS5%2FbMtY4CBGIwDmzKkBJWUWRI%2FQl1PM1IdY659A%2BRwoNevMK7GoL8NaIV%2FhsH8vlZCOWC1K6nt9zJTKcC22p21W84e2mzCx095GmzAFNtUwVjrNsb%2FjLCCyPu6cqkiMF9Wz1TIgNZZLtu%2F2ddoBasUr9bf4ROEWGJu%2BxBDaiMnEkSSJaODPUW9Asp3h8WhjGeHCtQknT8isyY8yYoqqoNn87kXa9CFThFqLz7nwwlpHhvwY6pgHcKfcecLpeUrQpksKBGwMP8COJOOVK459w2C153esvyFRFZ9lJ3kCwSIvRwkYTjeDDtzhKtNWsrY0tqx4YKJpET4vTXZYzFhmGBqJHLcLeEowGGz%2Fejph3dYjX9owC7fMg7Kz2SuW2L74pKFb%2Bfj4VDRZzGU6blc66U%2FGkYRXbWmlhsbslnaR4RHc5PKS5W2ySgDJsGUn0wqJpNlPZ3G397wa9LS9z&X-Amz-Signature=304674c0ae7a1f80f606dde1f64c2e15cb340b902d26a7b6a95d59081e49edec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NW4B6CM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE90HWZ7F1n5pciDGdDttoQIozR%2Fd02TTM0IdmH%2Fw%2BHyAiBqEsD89DE9oYlsobbyejS2eHykIMt77o%2Fh6OnjqByFSyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdpn8Hb95DUbA%2FqYKtwDGsDyA6txDTzadKu3AQme3mNluvP89%2BrZeKK%2FC6bEZ%2Fk0SznLjfohavrXx%2B2ptfB7fmP1A0QaV1Iztoaw696%2BJz964o1G2YZ5nHs43n5Kb4mJ5yg%2Bz%2BTGM0zCsylIJntmRlWiLvL%2FSkFudai5hHcW7i3pqy5FP4Q%2BxDrOgEW1qKXn4M%2BE7sB1xFvnLGRJw0iHWmzfugJJ51OXERE0dkK3zFt1B1guz2qEu8zZ%2BPLyAObk%2Bcsc6Wc1pdsL197cI%2FfjQkxXr8g5BXqiZdOlhfmvg3D7q92hIGIFxnbO4BQeODMrec7rLvP0OQyHhFce6EkPtQrTMIUA52Fh6HIPxDO8bpC4REAq7upcOKW%2BZ%2FiPzGQgilSXSYuG8iXdXD7ZwSEAEWIfX%2FbM0CM1qBQ4XXuBS5%2FbMtY4CBGIwDmzKkBJWUWRI%2FQl1PM1IdY659A%2BRwoNevMK7GoL8NaIV%2FhsH8vlZCOWC1K6nt9zJTKcC22p21W84e2mzCx095GmzAFNtUwVjrNsb%2FjLCCyPu6cqkiMF9Wz1TIgNZZLtu%2F2ddoBasUr9bf4ROEWGJu%2BxBDaiMnEkSSJaODPUW9Asp3h8WhjGeHCtQknT8isyY8yYoqqoNn87kXa9CFThFqLz7nwwlpHhvwY6pgHcKfcecLpeUrQpksKBGwMP8COJOOVK459w2C153esvyFRFZ9lJ3kCwSIvRwkYTjeDDtzhKtNWsrY0tqx4YKJpET4vTXZYzFhmGBqJHLcLeEowGGz%2Fejph3dYjX9owC7fMg7Kz2SuW2L74pKFb%2Bfj4VDRZzGU6blc66U%2FGkYRXbWmlhsbslnaR4RHc5PKS5W2ySgDJsGUn0wqJpNlPZ3G397wa9LS9z&X-Amz-Signature=c53018b9e351d2afc17098fd15b0126556b56c0b8a997f2d9d365fc98ecca6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NW4B6CM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE90HWZ7F1n5pciDGdDttoQIozR%2Fd02TTM0IdmH%2Fw%2BHyAiBqEsD89DE9oYlsobbyejS2eHykIMt77o%2Fh6OnjqByFSyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdpn8Hb95DUbA%2FqYKtwDGsDyA6txDTzadKu3AQme3mNluvP89%2BrZeKK%2FC6bEZ%2Fk0SznLjfohavrXx%2B2ptfB7fmP1A0QaV1Iztoaw696%2BJz964o1G2YZ5nHs43n5Kb4mJ5yg%2Bz%2BTGM0zCsylIJntmRlWiLvL%2FSkFudai5hHcW7i3pqy5FP4Q%2BxDrOgEW1qKXn4M%2BE7sB1xFvnLGRJw0iHWmzfugJJ51OXERE0dkK3zFt1B1guz2qEu8zZ%2BPLyAObk%2Bcsc6Wc1pdsL197cI%2FfjQkxXr8g5BXqiZdOlhfmvg3D7q92hIGIFxnbO4BQeODMrec7rLvP0OQyHhFce6EkPtQrTMIUA52Fh6HIPxDO8bpC4REAq7upcOKW%2BZ%2FiPzGQgilSXSYuG8iXdXD7ZwSEAEWIfX%2FbM0CM1qBQ4XXuBS5%2FbMtY4CBGIwDmzKkBJWUWRI%2FQl1PM1IdY659A%2BRwoNevMK7GoL8NaIV%2FhsH8vlZCOWC1K6nt9zJTKcC22p21W84e2mzCx095GmzAFNtUwVjrNsb%2FjLCCyPu6cqkiMF9Wz1TIgNZZLtu%2F2ddoBasUr9bf4ROEWGJu%2BxBDaiMnEkSSJaODPUW9Asp3h8WhjGeHCtQknT8isyY8yYoqqoNn87kXa9CFThFqLz7nwwlpHhvwY6pgHcKfcecLpeUrQpksKBGwMP8COJOOVK459w2C153esvyFRFZ9lJ3kCwSIvRwkYTjeDDtzhKtNWsrY0tqx4YKJpET4vTXZYzFhmGBqJHLcLeEowGGz%2Fejph3dYjX9owC7fMg7Kz2SuW2L74pKFb%2Bfj4VDRZzGU6blc66U%2FGkYRXbWmlhsbslnaR4RHc5PKS5W2ySgDJsGUn0wqJpNlPZ3G397wa9LS9z&X-Amz-Signature=14ca3f89128fa12949f2f882ec8bcc688bd37488679791086eaf243fa9fd7331&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NW4B6CM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIE90HWZ7F1n5pciDGdDttoQIozR%2Fd02TTM0IdmH%2Fw%2BHyAiBqEsD89DE9oYlsobbyejS2eHykIMt77o%2Fh6OnjqByFSyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOdpn8Hb95DUbA%2FqYKtwDGsDyA6txDTzadKu3AQme3mNluvP89%2BrZeKK%2FC6bEZ%2Fk0SznLjfohavrXx%2B2ptfB7fmP1A0QaV1Iztoaw696%2BJz964o1G2YZ5nHs43n5Kb4mJ5yg%2Bz%2BTGM0zCsylIJntmRlWiLvL%2FSkFudai5hHcW7i3pqy5FP4Q%2BxDrOgEW1qKXn4M%2BE7sB1xFvnLGRJw0iHWmzfugJJ51OXERE0dkK3zFt1B1guz2qEu8zZ%2BPLyAObk%2Bcsc6Wc1pdsL197cI%2FfjQkxXr8g5BXqiZdOlhfmvg3D7q92hIGIFxnbO4BQeODMrec7rLvP0OQyHhFce6EkPtQrTMIUA52Fh6HIPxDO8bpC4REAq7upcOKW%2BZ%2FiPzGQgilSXSYuG8iXdXD7ZwSEAEWIfX%2FbM0CM1qBQ4XXuBS5%2FbMtY4CBGIwDmzKkBJWUWRI%2FQl1PM1IdY659A%2BRwoNevMK7GoL8NaIV%2FhsH8vlZCOWC1K6nt9zJTKcC22p21W84e2mzCx095GmzAFNtUwVjrNsb%2FjLCCyPu6cqkiMF9Wz1TIgNZZLtu%2F2ddoBasUr9bf4ROEWGJu%2BxBDaiMnEkSSJaODPUW9Asp3h8WhjGeHCtQknT8isyY8yYoqqoNn87kXa9CFThFqLz7nwwlpHhvwY6pgHcKfcecLpeUrQpksKBGwMP8COJOOVK459w2C153esvyFRFZ9lJ3kCwSIvRwkYTjeDDtzhKtNWsrY0tqx4YKJpET4vTXZYzFhmGBqJHLcLeEowGGz%2Fejph3dYjX9owC7fMg7Kz2SuW2L74pKFb%2Bfj4VDRZzGU6blc66U%2FGkYRXbWmlhsbslnaR4RHc5PKS5W2ySgDJsGUn0wqJpNlPZ3G397wa9LS9z&X-Amz-Signature=4348a65abb6019bed33d60a9c3c81cef1533fc2a3502269cb82526614f6cf1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
