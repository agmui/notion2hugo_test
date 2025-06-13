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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65ICVW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCe%2B4s0obZwPGUWwflZTZEfIgky27tIxOwJejIM31i%2BegIhALSNtvdd49kEpKvJu6Hem0Wz6BxFNtH0BgBzIBYKQhKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgxODPofI8oCYGTSK8wq3AM7WeSjOc7khtpq6jtsKpoCCOiX%2F5gFvphTgKGgXs%2BcKV1%2BwGbGSLmoD9T%2FXzGYjau0I%2BvBCyIgfT032VyhzkkAETqxXBBwq086bGtFP1i0afBQwur5MsGSDWmi7%2BXztWmH109XT3slHdKFbcDH0WztODXPHLx%2B1khuM0rWxjQms%2FOeUG7VGws0FzxoomZ4Vy08Nv%2FqldiQqQzzg0%2Bnpdndy%2B8ZcSqDnxFstusmoPBRUckAxCHmRNeAWh8cNKERuLjZdbc0tfgFMkb8Ce4%2F0esQR1sohLzIGiSaHu8rhgTxuB%2Fjyx3J%2FEluYD6BNCUzDAVAHrBxlXz5%2FVHUSm7G98AIOP6yrgxeQC3ASIcxvGxBwaOGo%2BIrYzt10asCsmtRvPU0vStIxNXVRgjqJSRvkOCkLx8zg%2Bi8BisX%2ByHtQ8PloZ%2B67iBz2XnFpv%2FL7TbVRNSS2iV0yAS6h7I5PT56SWNW8DCr%2BHnJ%2B9TCipNjugZtow1kfpnbM5l%2FtX%2FkAYpWLEWlO7Cl4AueMEAlL0ZgihCRwPN5jdhQkcOH6UoCsNJ6EY9c%2FwkZOwfK2kr2adNvCuwrKPmXqT2Vz09V7zeDaYm1P%2FpXsi1wX0613%2F%2BcRPdFBQQwYte04DgvzNEkFjD0krLCBjqkAcmooiXet6fCJkTyjcJSdeJMGFXM4zzPpFactC2aEHLVDLACrbuWI6uQT2xASRl2g40I%2F4P7xjaHvfSRsul%2FtErLLboX%2FPlZYwPkeseGfUrJAJ%2Fox%2Fb9QlwtdsFP86ayEc1ENkQFtT6p3jYdUCrHekXzJFFxC1RJAlWonazZuw5rd1ZygogLsCUZhdMHiL3P4TNqyphMXO5dmb6YTbO6%2FC1SFBT%2B&X-Amz-Signature=17edf4d3e2f4c6bc1399e8577a7742e6f7e066ed48f43cacf2d758d9bd33b317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65ICVW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCe%2B4s0obZwPGUWwflZTZEfIgky27tIxOwJejIM31i%2BegIhALSNtvdd49kEpKvJu6Hem0Wz6BxFNtH0BgBzIBYKQhKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgxODPofI8oCYGTSK8wq3AM7WeSjOc7khtpq6jtsKpoCCOiX%2F5gFvphTgKGgXs%2BcKV1%2BwGbGSLmoD9T%2FXzGYjau0I%2BvBCyIgfT032VyhzkkAETqxXBBwq086bGtFP1i0afBQwur5MsGSDWmi7%2BXztWmH109XT3slHdKFbcDH0WztODXPHLx%2B1khuM0rWxjQms%2FOeUG7VGws0FzxoomZ4Vy08Nv%2FqldiQqQzzg0%2Bnpdndy%2B8ZcSqDnxFstusmoPBRUckAxCHmRNeAWh8cNKERuLjZdbc0tfgFMkb8Ce4%2F0esQR1sohLzIGiSaHu8rhgTxuB%2Fjyx3J%2FEluYD6BNCUzDAVAHrBxlXz5%2FVHUSm7G98AIOP6yrgxeQC3ASIcxvGxBwaOGo%2BIrYzt10asCsmtRvPU0vStIxNXVRgjqJSRvkOCkLx8zg%2Bi8BisX%2ByHtQ8PloZ%2B67iBz2XnFpv%2FL7TbVRNSS2iV0yAS6h7I5PT56SWNW8DCr%2BHnJ%2B9TCipNjugZtow1kfpnbM5l%2FtX%2FkAYpWLEWlO7Cl4AueMEAlL0ZgihCRwPN5jdhQkcOH6UoCsNJ6EY9c%2FwkZOwfK2kr2adNvCuwrKPmXqT2Vz09V7zeDaYm1P%2FpXsi1wX0613%2F%2BcRPdFBQQwYte04DgvzNEkFjD0krLCBjqkAcmooiXet6fCJkTyjcJSdeJMGFXM4zzPpFactC2aEHLVDLACrbuWI6uQT2xASRl2g40I%2F4P7xjaHvfSRsul%2FtErLLboX%2FPlZYwPkeseGfUrJAJ%2Fox%2Fb9QlwtdsFP86ayEc1ENkQFtT6p3jYdUCrHekXzJFFxC1RJAlWonazZuw5rd1ZygogLsCUZhdMHiL3P4TNqyphMXO5dmb6YTbO6%2FC1SFBT%2B&X-Amz-Signature=783ffb6b9d395c01a4c9f05145a6beb99ec0d79383de918c08684d7024f2b16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65ICVW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCe%2B4s0obZwPGUWwflZTZEfIgky27tIxOwJejIM31i%2BegIhALSNtvdd49kEpKvJu6Hem0Wz6BxFNtH0BgBzIBYKQhKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgxODPofI8oCYGTSK8wq3AM7WeSjOc7khtpq6jtsKpoCCOiX%2F5gFvphTgKGgXs%2BcKV1%2BwGbGSLmoD9T%2FXzGYjau0I%2BvBCyIgfT032VyhzkkAETqxXBBwq086bGtFP1i0afBQwur5MsGSDWmi7%2BXztWmH109XT3slHdKFbcDH0WztODXPHLx%2B1khuM0rWxjQms%2FOeUG7VGws0FzxoomZ4Vy08Nv%2FqldiQqQzzg0%2Bnpdndy%2B8ZcSqDnxFstusmoPBRUckAxCHmRNeAWh8cNKERuLjZdbc0tfgFMkb8Ce4%2F0esQR1sohLzIGiSaHu8rhgTxuB%2Fjyx3J%2FEluYD6BNCUzDAVAHrBxlXz5%2FVHUSm7G98AIOP6yrgxeQC3ASIcxvGxBwaOGo%2BIrYzt10asCsmtRvPU0vStIxNXVRgjqJSRvkOCkLx8zg%2Bi8BisX%2ByHtQ8PloZ%2B67iBz2XnFpv%2FL7TbVRNSS2iV0yAS6h7I5PT56SWNW8DCr%2BHnJ%2B9TCipNjugZtow1kfpnbM5l%2FtX%2FkAYpWLEWlO7Cl4AueMEAlL0ZgihCRwPN5jdhQkcOH6UoCsNJ6EY9c%2FwkZOwfK2kr2adNvCuwrKPmXqT2Vz09V7zeDaYm1P%2FpXsi1wX0613%2F%2BcRPdFBQQwYte04DgvzNEkFjD0krLCBjqkAcmooiXet6fCJkTyjcJSdeJMGFXM4zzPpFactC2aEHLVDLACrbuWI6uQT2xASRl2g40I%2F4P7xjaHvfSRsul%2FtErLLboX%2FPlZYwPkeseGfUrJAJ%2Fox%2Fb9QlwtdsFP86ayEc1ENkQFtT6p3jYdUCrHekXzJFFxC1RJAlWonazZuw5rd1ZygogLsCUZhdMHiL3P4TNqyphMXO5dmb6YTbO6%2FC1SFBT%2B&X-Amz-Signature=07e076c60c9bc5a18dbe660f0ee75ce60732f1fc4ac884fd86ef6b341496e0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65ICVW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCe%2B4s0obZwPGUWwflZTZEfIgky27tIxOwJejIM31i%2BegIhALSNtvdd49kEpKvJu6Hem0Wz6BxFNtH0BgBzIBYKQhKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgxODPofI8oCYGTSK8wq3AM7WeSjOc7khtpq6jtsKpoCCOiX%2F5gFvphTgKGgXs%2BcKV1%2BwGbGSLmoD9T%2FXzGYjau0I%2BvBCyIgfT032VyhzkkAETqxXBBwq086bGtFP1i0afBQwur5MsGSDWmi7%2BXztWmH109XT3slHdKFbcDH0WztODXPHLx%2B1khuM0rWxjQms%2FOeUG7VGws0FzxoomZ4Vy08Nv%2FqldiQqQzzg0%2Bnpdndy%2B8ZcSqDnxFstusmoPBRUckAxCHmRNeAWh8cNKERuLjZdbc0tfgFMkb8Ce4%2F0esQR1sohLzIGiSaHu8rhgTxuB%2Fjyx3J%2FEluYD6BNCUzDAVAHrBxlXz5%2FVHUSm7G98AIOP6yrgxeQC3ASIcxvGxBwaOGo%2BIrYzt10asCsmtRvPU0vStIxNXVRgjqJSRvkOCkLx8zg%2Bi8BisX%2ByHtQ8PloZ%2B67iBz2XnFpv%2FL7TbVRNSS2iV0yAS6h7I5PT56SWNW8DCr%2BHnJ%2B9TCipNjugZtow1kfpnbM5l%2FtX%2FkAYpWLEWlO7Cl4AueMEAlL0ZgihCRwPN5jdhQkcOH6UoCsNJ6EY9c%2FwkZOwfK2kr2adNvCuwrKPmXqT2Vz09V7zeDaYm1P%2FpXsi1wX0613%2F%2BcRPdFBQQwYte04DgvzNEkFjD0krLCBjqkAcmooiXet6fCJkTyjcJSdeJMGFXM4zzPpFactC2aEHLVDLACrbuWI6uQT2xASRl2g40I%2F4P7xjaHvfSRsul%2FtErLLboX%2FPlZYwPkeseGfUrJAJ%2Fox%2Fb9QlwtdsFP86ayEc1ENkQFtT6p3jYdUCrHekXzJFFxC1RJAlWonazZuw5rd1ZygogLsCUZhdMHiL3P4TNqyphMXO5dmb6YTbO6%2FC1SFBT%2B&X-Amz-Signature=7c1656a9b37908f48e0b841b6ccaa971d82cba64cb5114bb65497101c358468c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65ICVW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCe%2B4s0obZwPGUWwflZTZEfIgky27tIxOwJejIM31i%2BegIhALSNtvdd49kEpKvJu6Hem0Wz6BxFNtH0BgBzIBYKQhKIKv8DCB4QABoMNjM3NDIzMTgzODA1IgxODPofI8oCYGTSK8wq3AM7WeSjOc7khtpq6jtsKpoCCOiX%2F5gFvphTgKGgXs%2BcKV1%2BwGbGSLmoD9T%2FXzGYjau0I%2BvBCyIgfT032VyhzkkAETqxXBBwq086bGtFP1i0afBQwur5MsGSDWmi7%2BXztWmH109XT3slHdKFbcDH0WztODXPHLx%2B1khuM0rWxjQms%2FOeUG7VGws0FzxoomZ4Vy08Nv%2FqldiQqQzzg0%2Bnpdndy%2B8ZcSqDnxFstusmoPBRUckAxCHmRNeAWh8cNKERuLjZdbc0tfgFMkb8Ce4%2F0esQR1sohLzIGiSaHu8rhgTxuB%2Fjyx3J%2FEluYD6BNCUzDAVAHrBxlXz5%2FVHUSm7G98AIOP6yrgxeQC3ASIcxvGxBwaOGo%2BIrYzt10asCsmtRvPU0vStIxNXVRgjqJSRvkOCkLx8zg%2Bi8BisX%2ByHtQ8PloZ%2B67iBz2XnFpv%2FL7TbVRNSS2iV0yAS6h7I5PT56SWNW8DCr%2BHnJ%2B9TCipNjugZtow1kfpnbM5l%2FtX%2FkAYpWLEWlO7Cl4AueMEAlL0ZgihCRwPN5jdhQkcOH6UoCsNJ6EY9c%2FwkZOwfK2kr2adNvCuwrKPmXqT2Vz09V7zeDaYm1P%2FpXsi1wX0613%2F%2BcRPdFBQQwYte04DgvzNEkFjD0krLCBjqkAcmooiXet6fCJkTyjcJSdeJMGFXM4zzPpFactC2aEHLVDLACrbuWI6uQT2xASRl2g40I%2F4P7xjaHvfSRsul%2FtErLLboX%2FPlZYwPkeseGfUrJAJ%2Fox%2Fb9QlwtdsFP86ayEc1ENkQFtT6p3jYdUCrHekXzJFFxC1RJAlWonazZuw5rd1ZygogLsCUZhdMHiL3P4TNqyphMXO5dmb6YTbO6%2FC1SFBT%2B&X-Amz-Signature=c2a9cb6cb99a2dd5e3d7c152cd38246530c19c57d63260e4aaeb37c67b04bfd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
