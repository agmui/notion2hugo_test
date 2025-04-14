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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPXKQEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwxhj22SC6AiH6Zg3IcWOv666C0OGcQJuKAPedyiiKggIgOkQStbW8lKtcmEQpfnTKWHyLtGfrkYVGpy4i6aR3X3oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkKLqP8UIPn6tavFircAyDUDUl50kfjmAwPtLzWCBahCEfy91zyTKvQdOdzYGeRTUV68RMEIuW7peqzYeC1RzlRpL6YIxTDpDy2ki0RCMNTfz4YW1ViemviJmG6hXEDuL0MHZApcAigvxw137H6fb2FPQOlph4UyYqP%2BnmAGia1ow0AomT%2B44utT6y6%2B%2FR%2F0ieT2J2O589Mnjx3EJ8PFK%2Fpb8djMKk%2BRwAIPlCupf5Ze9Mzou%2F6%2FAYh4swFToKJhl8Drf0Kldqx5nfIRZsQhGutoIwgzV4p4ru2SK%2FE585abxkKn%2BKUO2U8BqQm7VxVvDnzhKARKlYRzf5Jl40Q8XCK9VX9oYd2XpL8wW%2BSVLlGA%2BuxMHZc1WB%2B1HbndzhaPRk0Pbv%2BxUDb7zJ%2FIPo9rUzxYRccncSkhPSw6RChbHEUQoEcArtDqT7X8X9AovJXA8oPn95c2xusfmcbCSFd%2ByIUzcsdhGRKqQvz13C462iMhP1aCyl7CWQ9zmf8zVcbor0ftNCT8CSODAPz8iLVGPdGJn6f%2F5Rj83fu%2F2g57wlKQZEVTMiLxgYlQ4Azj0idHnqHI8cELR9AGJ7VMyhxqrxEd6MDEKeycw8Oc25vjwUgbsmR808k8bIR4xSV4kRTkpxrIGxj%2BEB1s%2F9HMMO78b8GOqUBWq%2BvnLuto5abcXJ0YkBVMBk4Mz3YBCnf3hFLWX7s4GiRedIraYUl75uXb2qJDOL%2Fz2xAMq4ga6yJBjQQJlpQyFKNaf8yC7bHVAXiCoe1McHX6LqPdaLvEAU3UPqBg1mpsT9eY%2FpzS1a3u%2F5QaVhBLF7cuEZF8PcUCVR3UCdU%2F3IS%2BheHqnVZDDKzp1mTfs2sjkI2tqPqG656VVR5j67dY5tqTitH&X-Amz-Signature=9afab36d47e1349b6d23bc66c1b687e48535439337f030d5dd67e4f1322efcdd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPXKQEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwxhj22SC6AiH6Zg3IcWOv666C0OGcQJuKAPedyiiKggIgOkQStbW8lKtcmEQpfnTKWHyLtGfrkYVGpy4i6aR3X3oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkKLqP8UIPn6tavFircAyDUDUl50kfjmAwPtLzWCBahCEfy91zyTKvQdOdzYGeRTUV68RMEIuW7peqzYeC1RzlRpL6YIxTDpDy2ki0RCMNTfz4YW1ViemviJmG6hXEDuL0MHZApcAigvxw137H6fb2FPQOlph4UyYqP%2BnmAGia1ow0AomT%2B44utT6y6%2B%2FR%2F0ieT2J2O589Mnjx3EJ8PFK%2Fpb8djMKk%2BRwAIPlCupf5Ze9Mzou%2F6%2FAYh4swFToKJhl8Drf0Kldqx5nfIRZsQhGutoIwgzV4p4ru2SK%2FE585abxkKn%2BKUO2U8BqQm7VxVvDnzhKARKlYRzf5Jl40Q8XCK9VX9oYd2XpL8wW%2BSVLlGA%2BuxMHZc1WB%2B1HbndzhaPRk0Pbv%2BxUDb7zJ%2FIPo9rUzxYRccncSkhPSw6RChbHEUQoEcArtDqT7X8X9AovJXA8oPn95c2xusfmcbCSFd%2ByIUzcsdhGRKqQvz13C462iMhP1aCyl7CWQ9zmf8zVcbor0ftNCT8CSODAPz8iLVGPdGJn6f%2F5Rj83fu%2F2g57wlKQZEVTMiLxgYlQ4Azj0idHnqHI8cELR9AGJ7VMyhxqrxEd6MDEKeycw8Oc25vjwUgbsmR808k8bIR4xSV4kRTkpxrIGxj%2BEB1s%2F9HMMO78b8GOqUBWq%2BvnLuto5abcXJ0YkBVMBk4Mz3YBCnf3hFLWX7s4GiRedIraYUl75uXb2qJDOL%2Fz2xAMq4ga6yJBjQQJlpQyFKNaf8yC7bHVAXiCoe1McHX6LqPdaLvEAU3UPqBg1mpsT9eY%2FpzS1a3u%2F5QaVhBLF7cuEZF8PcUCVR3UCdU%2F3IS%2BheHqnVZDDKzp1mTfs2sjkI2tqPqG656VVR5j67dY5tqTitH&X-Amz-Signature=85c700560f8cdaf671ee8c4c3385fe821f620d5fb0d0d710e8f198b4e47e48dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPXKQEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwxhj22SC6AiH6Zg3IcWOv666C0OGcQJuKAPedyiiKggIgOkQStbW8lKtcmEQpfnTKWHyLtGfrkYVGpy4i6aR3X3oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkKLqP8UIPn6tavFircAyDUDUl50kfjmAwPtLzWCBahCEfy91zyTKvQdOdzYGeRTUV68RMEIuW7peqzYeC1RzlRpL6YIxTDpDy2ki0RCMNTfz4YW1ViemviJmG6hXEDuL0MHZApcAigvxw137H6fb2FPQOlph4UyYqP%2BnmAGia1ow0AomT%2B44utT6y6%2B%2FR%2F0ieT2J2O589Mnjx3EJ8PFK%2Fpb8djMKk%2BRwAIPlCupf5Ze9Mzou%2F6%2FAYh4swFToKJhl8Drf0Kldqx5nfIRZsQhGutoIwgzV4p4ru2SK%2FE585abxkKn%2BKUO2U8BqQm7VxVvDnzhKARKlYRzf5Jl40Q8XCK9VX9oYd2XpL8wW%2BSVLlGA%2BuxMHZc1WB%2B1HbndzhaPRk0Pbv%2BxUDb7zJ%2FIPo9rUzxYRccncSkhPSw6RChbHEUQoEcArtDqT7X8X9AovJXA8oPn95c2xusfmcbCSFd%2ByIUzcsdhGRKqQvz13C462iMhP1aCyl7CWQ9zmf8zVcbor0ftNCT8CSODAPz8iLVGPdGJn6f%2F5Rj83fu%2F2g57wlKQZEVTMiLxgYlQ4Azj0idHnqHI8cELR9AGJ7VMyhxqrxEd6MDEKeycw8Oc25vjwUgbsmR808k8bIR4xSV4kRTkpxrIGxj%2BEB1s%2F9HMMO78b8GOqUBWq%2BvnLuto5abcXJ0YkBVMBk4Mz3YBCnf3hFLWX7s4GiRedIraYUl75uXb2qJDOL%2Fz2xAMq4ga6yJBjQQJlpQyFKNaf8yC7bHVAXiCoe1McHX6LqPdaLvEAU3UPqBg1mpsT9eY%2FpzS1a3u%2F5QaVhBLF7cuEZF8PcUCVR3UCdU%2F3IS%2BheHqnVZDDKzp1mTfs2sjkI2tqPqG656VVR5j67dY5tqTitH&X-Amz-Signature=131721309bc2cb4ad7aaeb76e85bf35371dfa2709c1e918aea1a23c1aa69e216&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPXKQEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwxhj22SC6AiH6Zg3IcWOv666C0OGcQJuKAPedyiiKggIgOkQStbW8lKtcmEQpfnTKWHyLtGfrkYVGpy4i6aR3X3oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkKLqP8UIPn6tavFircAyDUDUl50kfjmAwPtLzWCBahCEfy91zyTKvQdOdzYGeRTUV68RMEIuW7peqzYeC1RzlRpL6YIxTDpDy2ki0RCMNTfz4YW1ViemviJmG6hXEDuL0MHZApcAigvxw137H6fb2FPQOlph4UyYqP%2BnmAGia1ow0AomT%2B44utT6y6%2B%2FR%2F0ieT2J2O589Mnjx3EJ8PFK%2Fpb8djMKk%2BRwAIPlCupf5Ze9Mzou%2F6%2FAYh4swFToKJhl8Drf0Kldqx5nfIRZsQhGutoIwgzV4p4ru2SK%2FE585abxkKn%2BKUO2U8BqQm7VxVvDnzhKARKlYRzf5Jl40Q8XCK9VX9oYd2XpL8wW%2BSVLlGA%2BuxMHZc1WB%2B1HbndzhaPRk0Pbv%2BxUDb7zJ%2FIPo9rUzxYRccncSkhPSw6RChbHEUQoEcArtDqT7X8X9AovJXA8oPn95c2xusfmcbCSFd%2ByIUzcsdhGRKqQvz13C462iMhP1aCyl7CWQ9zmf8zVcbor0ftNCT8CSODAPz8iLVGPdGJn6f%2F5Rj83fu%2F2g57wlKQZEVTMiLxgYlQ4Azj0idHnqHI8cELR9AGJ7VMyhxqrxEd6MDEKeycw8Oc25vjwUgbsmR808k8bIR4xSV4kRTkpxrIGxj%2BEB1s%2F9HMMO78b8GOqUBWq%2BvnLuto5abcXJ0YkBVMBk4Mz3YBCnf3hFLWX7s4GiRedIraYUl75uXb2qJDOL%2Fz2xAMq4ga6yJBjQQJlpQyFKNaf8yC7bHVAXiCoe1McHX6LqPdaLvEAU3UPqBg1mpsT9eY%2FpzS1a3u%2F5QaVhBLF7cuEZF8PcUCVR3UCdU%2F3IS%2BheHqnVZDDKzp1mTfs2sjkI2tqPqG656VVR5j67dY5tqTitH&X-Amz-Signature=7a52259cc2c2fdad439e2526ee62df87627ea9182ea94800eba4f6bac05ec61f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPXKQEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwxhj22SC6AiH6Zg3IcWOv666C0OGcQJuKAPedyiiKggIgOkQStbW8lKtcmEQpfnTKWHyLtGfrkYVGpy4i6aR3X3oqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkKLqP8UIPn6tavFircAyDUDUl50kfjmAwPtLzWCBahCEfy91zyTKvQdOdzYGeRTUV68RMEIuW7peqzYeC1RzlRpL6YIxTDpDy2ki0RCMNTfz4YW1ViemviJmG6hXEDuL0MHZApcAigvxw137H6fb2FPQOlph4UyYqP%2BnmAGia1ow0AomT%2B44utT6y6%2B%2FR%2F0ieT2J2O589Mnjx3EJ8PFK%2Fpb8djMKk%2BRwAIPlCupf5Ze9Mzou%2F6%2FAYh4swFToKJhl8Drf0Kldqx5nfIRZsQhGutoIwgzV4p4ru2SK%2FE585abxkKn%2BKUO2U8BqQm7VxVvDnzhKARKlYRzf5Jl40Q8XCK9VX9oYd2XpL8wW%2BSVLlGA%2BuxMHZc1WB%2B1HbndzhaPRk0Pbv%2BxUDb7zJ%2FIPo9rUzxYRccncSkhPSw6RChbHEUQoEcArtDqT7X8X9AovJXA8oPn95c2xusfmcbCSFd%2ByIUzcsdhGRKqQvz13C462iMhP1aCyl7CWQ9zmf8zVcbor0ftNCT8CSODAPz8iLVGPdGJn6f%2F5Rj83fu%2F2g57wlKQZEVTMiLxgYlQ4Azj0idHnqHI8cELR9AGJ7VMyhxqrxEd6MDEKeycw8Oc25vjwUgbsmR808k8bIR4xSV4kRTkpxrIGxj%2BEB1s%2F9HMMO78b8GOqUBWq%2BvnLuto5abcXJ0YkBVMBk4Mz3YBCnf3hFLWX7s4GiRedIraYUl75uXb2qJDOL%2Fz2xAMq4ga6yJBjQQJlpQyFKNaf8yC7bHVAXiCoe1McHX6LqPdaLvEAU3UPqBg1mpsT9eY%2FpzS1a3u%2F5QaVhBLF7cuEZF8PcUCVR3UCdU%2F3IS%2BheHqnVZDDKzp1mTfs2sjkI2tqPqG656VVR5j67dY5tqTitH&X-Amz-Signature=038dc18364268903f6c633f4a084c94d26953611efb2239ed06d1d14686ab289&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
