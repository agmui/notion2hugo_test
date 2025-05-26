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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBM5SKZZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAYiM6Sl5vzMtFtgLZJzSQIUuYrIihGIj0FrycmiGthoAiATYwgKYskIGqijgc%2FsxOkMgWfCiEQbVojngi6aD72eqCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2F99FrTEBexfhGLePKtwD0flSLxwUJoDUMBz1b4h69kFtgzPRuThwb8STKR37hbOYMygJvof8zMZuoJasL7IHaW1gQg1epQAL%2BlyIEG%2Bs15dz8sYa2MSFfUYFBQhWz4%2FPrytsqe7exrni0VjYUl%2FEGUUbUpT7s9RRIxAG%2FO4LvqvX%2Bf4vAk30of%2Ft29P9XdBU4%2BaUGLgi5t9NuRHitm4RxffMIPvEJhtmTYyeevyIWA5Vw3nQpXZfZjW0CxoifLzRjZqeu5%2BaoYUPvDDg7q6aUtnQrU8avAyrNIAQBqIw4kokBa3AMhNFHlJyPoIhB%2BEVhK5AFtox4KxrbCYjNyH86BeRbnFWg7EgcdANOikkjLaHd%2BN2Pi3LlAX%2Fh4MsVzLjINBk4ZwymTN4AX3z5Zp56e0WXZX7mIwA6o%2F10QEhb0ptuK9OBF%2FVJpxhW%2BARAcikQFjHZJrVDGtBTRO09YEi1U0yOnVzm9ifEh9YHfjh97t78ZqM1H9llCTvM0u0LcXX25AsBEsBnPp1hMLju8awF32rMuBZ6BJDAjEGtruzEi4j8Cu85VChXLmsy1P%2BfKGH1QE5Gya1%2FRlx7eozeubh7N3aMyRcytG9oyoM%2FoUb9KEviOZtWq66ATTM8dJdFGwUUsB43Dnpv320EMIw9KrRwQY6pgGaWTajqc2O3bbSoiQ%2FdbCuRX7Juml6gl%2FkWcaMF6DBokJgJYlen3JXKmWbuvCYAF1z9IjfT%2BbDPAPL6ELaPXsi8rq3OTvR2ZcAtj1Ebvuxcbe2onuoWo%2BEcYpk%2Fo5zjy2h%2FoX5U1PeIJZEGGSwnxfHIvaE%2FIS7%2B6Q5WBVm5nox1KLCFJxEp8py67DqT1BD6Hrum20c4Sx%2F3Mf6RXHHeup0BalPEDfN&X-Amz-Signature=f4ee17e7c18532ad9fb2e1b840ff28262fa6d5338d4ff44523cd23dffcbb235b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBM5SKZZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAYiM6Sl5vzMtFtgLZJzSQIUuYrIihGIj0FrycmiGthoAiATYwgKYskIGqijgc%2FsxOkMgWfCiEQbVojngi6aD72eqCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2F99FrTEBexfhGLePKtwD0flSLxwUJoDUMBz1b4h69kFtgzPRuThwb8STKR37hbOYMygJvof8zMZuoJasL7IHaW1gQg1epQAL%2BlyIEG%2Bs15dz8sYa2MSFfUYFBQhWz4%2FPrytsqe7exrni0VjYUl%2FEGUUbUpT7s9RRIxAG%2FO4LvqvX%2Bf4vAk30of%2Ft29P9XdBU4%2BaUGLgi5t9NuRHitm4RxffMIPvEJhtmTYyeevyIWA5Vw3nQpXZfZjW0CxoifLzRjZqeu5%2BaoYUPvDDg7q6aUtnQrU8avAyrNIAQBqIw4kokBa3AMhNFHlJyPoIhB%2BEVhK5AFtox4KxrbCYjNyH86BeRbnFWg7EgcdANOikkjLaHd%2BN2Pi3LlAX%2Fh4MsVzLjINBk4ZwymTN4AX3z5Zp56e0WXZX7mIwA6o%2F10QEhb0ptuK9OBF%2FVJpxhW%2BARAcikQFjHZJrVDGtBTRO09YEi1U0yOnVzm9ifEh9YHfjh97t78ZqM1H9llCTvM0u0LcXX25AsBEsBnPp1hMLju8awF32rMuBZ6BJDAjEGtruzEi4j8Cu85VChXLmsy1P%2BfKGH1QE5Gya1%2FRlx7eozeubh7N3aMyRcytG9oyoM%2FoUb9KEviOZtWq66ATTM8dJdFGwUUsB43Dnpv320EMIw9KrRwQY6pgGaWTajqc2O3bbSoiQ%2FdbCuRX7Juml6gl%2FkWcaMF6DBokJgJYlen3JXKmWbuvCYAF1z9IjfT%2BbDPAPL6ELaPXsi8rq3OTvR2ZcAtj1Ebvuxcbe2onuoWo%2BEcYpk%2Fo5zjy2h%2FoX5U1PeIJZEGGSwnxfHIvaE%2FIS7%2B6Q5WBVm5nox1KLCFJxEp8py67DqT1BD6Hrum20c4Sx%2F3Mf6RXHHeup0BalPEDfN&X-Amz-Signature=66c1f7b1007e65fc5ecd218af167d77f0d66feebeeca7dc165facf4d5822ccd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBM5SKZZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAYiM6Sl5vzMtFtgLZJzSQIUuYrIihGIj0FrycmiGthoAiATYwgKYskIGqijgc%2FsxOkMgWfCiEQbVojngi6aD72eqCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2F99FrTEBexfhGLePKtwD0flSLxwUJoDUMBz1b4h69kFtgzPRuThwb8STKR37hbOYMygJvof8zMZuoJasL7IHaW1gQg1epQAL%2BlyIEG%2Bs15dz8sYa2MSFfUYFBQhWz4%2FPrytsqe7exrni0VjYUl%2FEGUUbUpT7s9RRIxAG%2FO4LvqvX%2Bf4vAk30of%2Ft29P9XdBU4%2BaUGLgi5t9NuRHitm4RxffMIPvEJhtmTYyeevyIWA5Vw3nQpXZfZjW0CxoifLzRjZqeu5%2BaoYUPvDDg7q6aUtnQrU8avAyrNIAQBqIw4kokBa3AMhNFHlJyPoIhB%2BEVhK5AFtox4KxrbCYjNyH86BeRbnFWg7EgcdANOikkjLaHd%2BN2Pi3LlAX%2Fh4MsVzLjINBk4ZwymTN4AX3z5Zp56e0WXZX7mIwA6o%2F10QEhb0ptuK9OBF%2FVJpxhW%2BARAcikQFjHZJrVDGtBTRO09YEi1U0yOnVzm9ifEh9YHfjh97t78ZqM1H9llCTvM0u0LcXX25AsBEsBnPp1hMLju8awF32rMuBZ6BJDAjEGtruzEi4j8Cu85VChXLmsy1P%2BfKGH1QE5Gya1%2FRlx7eozeubh7N3aMyRcytG9oyoM%2FoUb9KEviOZtWq66ATTM8dJdFGwUUsB43Dnpv320EMIw9KrRwQY6pgGaWTajqc2O3bbSoiQ%2FdbCuRX7Juml6gl%2FkWcaMF6DBokJgJYlen3JXKmWbuvCYAF1z9IjfT%2BbDPAPL6ELaPXsi8rq3OTvR2ZcAtj1Ebvuxcbe2onuoWo%2BEcYpk%2Fo5zjy2h%2FoX5U1PeIJZEGGSwnxfHIvaE%2FIS7%2B6Q5WBVm5nox1KLCFJxEp8py67DqT1BD6Hrum20c4Sx%2F3Mf6RXHHeup0BalPEDfN&X-Amz-Signature=5d9a44b1e3f7d46da11a295162e8d0a1cbc7d0bc93aef9b88b6153af926f6d65&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBM5SKZZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAYiM6Sl5vzMtFtgLZJzSQIUuYrIihGIj0FrycmiGthoAiATYwgKYskIGqijgc%2FsxOkMgWfCiEQbVojngi6aD72eqCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2F99FrTEBexfhGLePKtwD0flSLxwUJoDUMBz1b4h69kFtgzPRuThwb8STKR37hbOYMygJvof8zMZuoJasL7IHaW1gQg1epQAL%2BlyIEG%2Bs15dz8sYa2MSFfUYFBQhWz4%2FPrytsqe7exrni0VjYUl%2FEGUUbUpT7s9RRIxAG%2FO4LvqvX%2Bf4vAk30of%2Ft29P9XdBU4%2BaUGLgi5t9NuRHitm4RxffMIPvEJhtmTYyeevyIWA5Vw3nQpXZfZjW0CxoifLzRjZqeu5%2BaoYUPvDDg7q6aUtnQrU8avAyrNIAQBqIw4kokBa3AMhNFHlJyPoIhB%2BEVhK5AFtox4KxrbCYjNyH86BeRbnFWg7EgcdANOikkjLaHd%2BN2Pi3LlAX%2Fh4MsVzLjINBk4ZwymTN4AX3z5Zp56e0WXZX7mIwA6o%2F10QEhb0ptuK9OBF%2FVJpxhW%2BARAcikQFjHZJrVDGtBTRO09YEi1U0yOnVzm9ifEh9YHfjh97t78ZqM1H9llCTvM0u0LcXX25AsBEsBnPp1hMLju8awF32rMuBZ6BJDAjEGtruzEi4j8Cu85VChXLmsy1P%2BfKGH1QE5Gya1%2FRlx7eozeubh7N3aMyRcytG9oyoM%2FoUb9KEviOZtWq66ATTM8dJdFGwUUsB43Dnpv320EMIw9KrRwQY6pgGaWTajqc2O3bbSoiQ%2FdbCuRX7Juml6gl%2FkWcaMF6DBokJgJYlen3JXKmWbuvCYAF1z9IjfT%2BbDPAPL6ELaPXsi8rq3OTvR2ZcAtj1Ebvuxcbe2onuoWo%2BEcYpk%2Fo5zjy2h%2FoX5U1PeIJZEGGSwnxfHIvaE%2FIS7%2B6Q5WBVm5nox1KLCFJxEp8py67DqT1BD6Hrum20c4Sx%2F3Mf6RXHHeup0BalPEDfN&X-Amz-Signature=817f370faabde158e45f618dc966383ed3f55ddf34f00144bae98d183bdfed70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBM5SKZZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAYiM6Sl5vzMtFtgLZJzSQIUuYrIihGIj0FrycmiGthoAiATYwgKYskIGqijgc%2FsxOkMgWfCiEQbVojngi6aD72eqCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2F99FrTEBexfhGLePKtwD0flSLxwUJoDUMBz1b4h69kFtgzPRuThwb8STKR37hbOYMygJvof8zMZuoJasL7IHaW1gQg1epQAL%2BlyIEG%2Bs15dz8sYa2MSFfUYFBQhWz4%2FPrytsqe7exrni0VjYUl%2FEGUUbUpT7s9RRIxAG%2FO4LvqvX%2Bf4vAk30of%2Ft29P9XdBU4%2BaUGLgi5t9NuRHitm4RxffMIPvEJhtmTYyeevyIWA5Vw3nQpXZfZjW0CxoifLzRjZqeu5%2BaoYUPvDDg7q6aUtnQrU8avAyrNIAQBqIw4kokBa3AMhNFHlJyPoIhB%2BEVhK5AFtox4KxrbCYjNyH86BeRbnFWg7EgcdANOikkjLaHd%2BN2Pi3LlAX%2Fh4MsVzLjINBk4ZwymTN4AX3z5Zp56e0WXZX7mIwA6o%2F10QEhb0ptuK9OBF%2FVJpxhW%2BARAcikQFjHZJrVDGtBTRO09YEi1U0yOnVzm9ifEh9YHfjh97t78ZqM1H9llCTvM0u0LcXX25AsBEsBnPp1hMLju8awF32rMuBZ6BJDAjEGtruzEi4j8Cu85VChXLmsy1P%2BfKGH1QE5Gya1%2FRlx7eozeubh7N3aMyRcytG9oyoM%2FoUb9KEviOZtWq66ATTM8dJdFGwUUsB43Dnpv320EMIw9KrRwQY6pgGaWTajqc2O3bbSoiQ%2FdbCuRX7Juml6gl%2FkWcaMF6DBokJgJYlen3JXKmWbuvCYAF1z9IjfT%2BbDPAPL6ELaPXsi8rq3OTvR2ZcAtj1Ebvuxcbe2onuoWo%2BEcYpk%2Fo5zjy2h%2FoX5U1PeIJZEGGSwnxfHIvaE%2FIS7%2B6Q5WBVm5nox1KLCFJxEp8py67DqT1BD6Hrum20c4Sx%2F3Mf6RXHHeup0BalPEDfN&X-Amz-Signature=70bccb0d8adad3265aece521562271bc28781a1c94f1f29ce6f6dae7282ed268&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
