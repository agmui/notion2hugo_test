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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HGL636%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQClXsQhlhQ1ArPfq7xxLJUdfUq1WpIQYw0ddjHdh50bVAIhAIIsYFp7VHqTkpj658NTr%2BOyVnGLGhdBv4uy9TsJP6AKKv8DCF8QABoMNjM3NDIzMTgzODA1Igxjkpe4DeaWF8xLmlQq3AOdqQSo10UY5OErlRTFgPArsdBhyaSqvk2LgbCo%2BghYW2PkFm19U0Qz2gQeM9zi8i44OM0j5BRuWNeLHtMpEG8ybqIKvJ%2BIJHIz51n89rGeqRlB%2Fwy00XrkxatZuYa1pLPz0XDkVvw0ZVxB158tocYLUn%2B8oqVqCSgX3AOL8NOCyHEJujVkllUjTojvp0r9LnTN1lYdsRysgwPvIqCpNpvtgzBenW%2B3MJdNAcWDII8QZL7etNg8m8c%2B8A1r8gw1eOi9ps1FBsTjdxH6WM8CXCBKPm3rXmK8pntRl4s8ztpvSuyBegf%2BEjMZrsFWd%2BK0TKq8%2B4iZEqnr2inrK%2Fp1hi82oovs7GIpBjHb7w6aNEC0KwjHVwxhY%2F5i9%2BudTO%2FUHfYxhRy6PPpguYPJsrWY8D3clO1U97zqaNjMBGErtUxN5rQt%2FUrRZdwv9pxt5SPsRdVt%2BBve100KBrIsIx3ts809EtZLqhybt47rtur7e8wNiVlk4qJiP1JaI8pXAy2CUQ1samTsrIoxxS5T9QRDhhcfbU8%2Fhfok36ZdaC6FMjzDkaqV%2FaMXbNQd%2BFGor3%2FhJLc05SV2z0sDgWB6fANSa7NebUONcSAORTRmzxv02fmS1VYlBPFp3le47VhqoDDRycDCBjqkAfP%2Bky%2FNaECU6OW0Hoj03U50B2iiiBkPZVoyMovtAEts%2BMbFS3%2BCPiRbu85dGvu%2BtAFHJ2TdwuA9UeUUMbLroCowzCj7toxDNBkHAIf3huUOgJFPA6El7%2FNQJc1xuku5tvnTE4FbY7OejdtUtfsHGvUE72ocyQShAnX0fByrAJI5zbUo9Q90ompejXtI0X8rqeOiD%2BSBU%2BYOQoZE99LXv10bP%2F8U&X-Amz-Signature=954a4ddca887b7d3bf27d55484730089447f1df234c13d8e45d09987adc38601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HGL636%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQClXsQhlhQ1ArPfq7xxLJUdfUq1WpIQYw0ddjHdh50bVAIhAIIsYFp7VHqTkpj658NTr%2BOyVnGLGhdBv4uy9TsJP6AKKv8DCF8QABoMNjM3NDIzMTgzODA1Igxjkpe4DeaWF8xLmlQq3AOdqQSo10UY5OErlRTFgPArsdBhyaSqvk2LgbCo%2BghYW2PkFm19U0Qz2gQeM9zi8i44OM0j5BRuWNeLHtMpEG8ybqIKvJ%2BIJHIz51n89rGeqRlB%2Fwy00XrkxatZuYa1pLPz0XDkVvw0ZVxB158tocYLUn%2B8oqVqCSgX3AOL8NOCyHEJujVkllUjTojvp0r9LnTN1lYdsRysgwPvIqCpNpvtgzBenW%2B3MJdNAcWDII8QZL7etNg8m8c%2B8A1r8gw1eOi9ps1FBsTjdxH6WM8CXCBKPm3rXmK8pntRl4s8ztpvSuyBegf%2BEjMZrsFWd%2BK0TKq8%2B4iZEqnr2inrK%2Fp1hi82oovs7GIpBjHb7w6aNEC0KwjHVwxhY%2F5i9%2BudTO%2FUHfYxhRy6PPpguYPJsrWY8D3clO1U97zqaNjMBGErtUxN5rQt%2FUrRZdwv9pxt5SPsRdVt%2BBve100KBrIsIx3ts809EtZLqhybt47rtur7e8wNiVlk4qJiP1JaI8pXAy2CUQ1samTsrIoxxS5T9QRDhhcfbU8%2Fhfok36ZdaC6FMjzDkaqV%2FaMXbNQd%2BFGor3%2FhJLc05SV2z0sDgWB6fANSa7NebUONcSAORTRmzxv02fmS1VYlBPFp3le47VhqoDDRycDCBjqkAfP%2Bky%2FNaECU6OW0Hoj03U50B2iiiBkPZVoyMovtAEts%2BMbFS3%2BCPiRbu85dGvu%2BtAFHJ2TdwuA9UeUUMbLroCowzCj7toxDNBkHAIf3huUOgJFPA6El7%2FNQJc1xuku5tvnTE4FbY7OejdtUtfsHGvUE72ocyQShAnX0fByrAJI5zbUo9Q90ompejXtI0X8rqeOiD%2BSBU%2BYOQoZE99LXv10bP%2F8U&X-Amz-Signature=dea9bc841bec54d358df2ff939df6d7a440b5c866b49d72fea45e0227a6c1d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HGL636%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQClXsQhlhQ1ArPfq7xxLJUdfUq1WpIQYw0ddjHdh50bVAIhAIIsYFp7VHqTkpj658NTr%2BOyVnGLGhdBv4uy9TsJP6AKKv8DCF8QABoMNjM3NDIzMTgzODA1Igxjkpe4DeaWF8xLmlQq3AOdqQSo10UY5OErlRTFgPArsdBhyaSqvk2LgbCo%2BghYW2PkFm19U0Qz2gQeM9zi8i44OM0j5BRuWNeLHtMpEG8ybqIKvJ%2BIJHIz51n89rGeqRlB%2Fwy00XrkxatZuYa1pLPz0XDkVvw0ZVxB158tocYLUn%2B8oqVqCSgX3AOL8NOCyHEJujVkllUjTojvp0r9LnTN1lYdsRysgwPvIqCpNpvtgzBenW%2B3MJdNAcWDII8QZL7etNg8m8c%2B8A1r8gw1eOi9ps1FBsTjdxH6WM8CXCBKPm3rXmK8pntRl4s8ztpvSuyBegf%2BEjMZrsFWd%2BK0TKq8%2B4iZEqnr2inrK%2Fp1hi82oovs7GIpBjHb7w6aNEC0KwjHVwxhY%2F5i9%2BudTO%2FUHfYxhRy6PPpguYPJsrWY8D3clO1U97zqaNjMBGErtUxN5rQt%2FUrRZdwv9pxt5SPsRdVt%2BBve100KBrIsIx3ts809EtZLqhybt47rtur7e8wNiVlk4qJiP1JaI8pXAy2CUQ1samTsrIoxxS5T9QRDhhcfbU8%2Fhfok36ZdaC6FMjzDkaqV%2FaMXbNQd%2BFGor3%2FhJLc05SV2z0sDgWB6fANSa7NebUONcSAORTRmzxv02fmS1VYlBPFp3le47VhqoDDRycDCBjqkAfP%2Bky%2FNaECU6OW0Hoj03U50B2iiiBkPZVoyMovtAEts%2BMbFS3%2BCPiRbu85dGvu%2BtAFHJ2TdwuA9UeUUMbLroCowzCj7toxDNBkHAIf3huUOgJFPA6El7%2FNQJc1xuku5tvnTE4FbY7OejdtUtfsHGvUE72ocyQShAnX0fByrAJI5zbUo9Q90ompejXtI0X8rqeOiD%2BSBU%2BYOQoZE99LXv10bP%2F8U&X-Amz-Signature=4fba47ee39af74cb2a3ac5c79eb14fd6b599269a85af6da8515285bf9cdbff93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HGL636%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQClXsQhlhQ1ArPfq7xxLJUdfUq1WpIQYw0ddjHdh50bVAIhAIIsYFp7VHqTkpj658NTr%2BOyVnGLGhdBv4uy9TsJP6AKKv8DCF8QABoMNjM3NDIzMTgzODA1Igxjkpe4DeaWF8xLmlQq3AOdqQSo10UY5OErlRTFgPArsdBhyaSqvk2LgbCo%2BghYW2PkFm19U0Qz2gQeM9zi8i44OM0j5BRuWNeLHtMpEG8ybqIKvJ%2BIJHIz51n89rGeqRlB%2Fwy00XrkxatZuYa1pLPz0XDkVvw0ZVxB158tocYLUn%2B8oqVqCSgX3AOL8NOCyHEJujVkllUjTojvp0r9LnTN1lYdsRysgwPvIqCpNpvtgzBenW%2B3MJdNAcWDII8QZL7etNg8m8c%2B8A1r8gw1eOi9ps1FBsTjdxH6WM8CXCBKPm3rXmK8pntRl4s8ztpvSuyBegf%2BEjMZrsFWd%2BK0TKq8%2B4iZEqnr2inrK%2Fp1hi82oovs7GIpBjHb7w6aNEC0KwjHVwxhY%2F5i9%2BudTO%2FUHfYxhRy6PPpguYPJsrWY8D3clO1U97zqaNjMBGErtUxN5rQt%2FUrRZdwv9pxt5SPsRdVt%2BBve100KBrIsIx3ts809EtZLqhybt47rtur7e8wNiVlk4qJiP1JaI8pXAy2CUQ1samTsrIoxxS5T9QRDhhcfbU8%2Fhfok36ZdaC6FMjzDkaqV%2FaMXbNQd%2BFGor3%2FhJLc05SV2z0sDgWB6fANSa7NebUONcSAORTRmzxv02fmS1VYlBPFp3le47VhqoDDRycDCBjqkAfP%2Bky%2FNaECU6OW0Hoj03U50B2iiiBkPZVoyMovtAEts%2BMbFS3%2BCPiRbu85dGvu%2BtAFHJ2TdwuA9UeUUMbLroCowzCj7toxDNBkHAIf3huUOgJFPA6El7%2FNQJc1xuku5tvnTE4FbY7OejdtUtfsHGvUE72ocyQShAnX0fByrAJI5zbUo9Q90ompejXtI0X8rqeOiD%2BSBU%2BYOQoZE99LXv10bP%2F8U&X-Amz-Signature=c3f8761cd79bf9ebf70fad0d8951d156e40fd651cc6b45b134b313b4582a72ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HGL636%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQClXsQhlhQ1ArPfq7xxLJUdfUq1WpIQYw0ddjHdh50bVAIhAIIsYFp7VHqTkpj658NTr%2BOyVnGLGhdBv4uy9TsJP6AKKv8DCF8QABoMNjM3NDIzMTgzODA1Igxjkpe4DeaWF8xLmlQq3AOdqQSo10UY5OErlRTFgPArsdBhyaSqvk2LgbCo%2BghYW2PkFm19U0Qz2gQeM9zi8i44OM0j5BRuWNeLHtMpEG8ybqIKvJ%2BIJHIz51n89rGeqRlB%2Fwy00XrkxatZuYa1pLPz0XDkVvw0ZVxB158tocYLUn%2B8oqVqCSgX3AOL8NOCyHEJujVkllUjTojvp0r9LnTN1lYdsRysgwPvIqCpNpvtgzBenW%2B3MJdNAcWDII8QZL7etNg8m8c%2B8A1r8gw1eOi9ps1FBsTjdxH6WM8CXCBKPm3rXmK8pntRl4s8ztpvSuyBegf%2BEjMZrsFWd%2BK0TKq8%2B4iZEqnr2inrK%2Fp1hi82oovs7GIpBjHb7w6aNEC0KwjHVwxhY%2F5i9%2BudTO%2FUHfYxhRy6PPpguYPJsrWY8D3clO1U97zqaNjMBGErtUxN5rQt%2FUrRZdwv9pxt5SPsRdVt%2BBve100KBrIsIx3ts809EtZLqhybt47rtur7e8wNiVlk4qJiP1JaI8pXAy2CUQ1samTsrIoxxS5T9QRDhhcfbU8%2Fhfok36ZdaC6FMjzDkaqV%2FaMXbNQd%2BFGor3%2FhJLc05SV2z0sDgWB6fANSa7NebUONcSAORTRmzxv02fmS1VYlBPFp3le47VhqoDDRycDCBjqkAfP%2Bky%2FNaECU6OW0Hoj03U50B2iiiBkPZVoyMovtAEts%2BMbFS3%2BCPiRbu85dGvu%2BtAFHJ2TdwuA9UeUUMbLroCowzCj7toxDNBkHAIf3huUOgJFPA6El7%2FNQJc1xuku5tvnTE4FbY7OejdtUtfsHGvUE72ocyQShAnX0fByrAJI5zbUo9Q90ompejXtI0X8rqeOiD%2BSBU%2BYOQoZE99LXv10bP%2F8U&X-Amz-Signature=efc6e38ae3d1d76a731426ee155d04e789c146378bf74d2d692e7b8a6aa86ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
