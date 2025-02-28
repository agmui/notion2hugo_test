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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGNMAGB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBEOTdxJKYZEq8wcCMt6lks6iBNggVAre%2BTkTTc7wX0QAiAJiSGbhV%2FaqGXAjMyoiHuU%2BO%2F5%2FZKzc4CKgS2dJXVhOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29SRmKtsJ%2FXOz2lpKtwDEmly%2FC748s%2Bu3ImpxPATNBmKdbupkd5z7MEOYrhm7AQ1H1dVMIS%2Flou7pZdHKGe9UMmbNXWX%2BRvysBNB0uoNcRCH%2B2j8B8GpYMCi7Jh83ilWE1lIbyhlv9ue4mq7e1%2FYqn%2FeAvoB2aAmAGPFvJOVE8xHC%2FMpQkXPKu8O%2B3Rz0HsIjEiN1%2BMf%2BP4PBtxsMHvtFvmWy%2FGYLrS5qdHVCDpvhybesGtqKlO2QAkD%2FR1S3ChMQrLGe8vINSsa8JnEwvccZRe88g3xNQ2LEbYDUfyiw9%2FrZKo%2BT3D1JX22Adz%2BFl7j0ODWOfH4dKOhP8GctTfk3%2F8Uv9g0fodF6vHhgEvpm1Diw2g7X%2FBlavnJzlkJk344b2wpZeiCAAwfyvRcyOjnRdTSusXIXLu%2FT1yfW5y22AeDB%2BM%2BXs9RLYrQeUKP8RQTrEJgKKlOAxF%2BoHnrgENetw4fumOefqK8b%2BQ7HADcXuzNVFF%2FvY1k%2FaE%2BNj%2FLobeRSlGWvOkIRUepekg6usAhMliR6Hz5kLYSN5fU6aG4ktLZRnItZOPbkvKu%2FIVc5QSSeP0ekoXClHKApOSAs07h3wK7anwRFFG1sf2DysEkEVMlXXfUXh94fLqrBL5EHMN7DV5l6%2B0Y%2FKYp7P8wloaHvgY6pgHt6hCKmEW4uLnOZ3DMTsfvfytrjBPuIzUPxac8HYEzreizZArNbCOIM41eEfsE40ZNTQB3a4LVHYh5soLKjCHqR%2FeGniDkJ%2F7%2BkezndFDqlByvgCTgAl9TaxDeOCdQ4xKGu2oXgntULW%2FLfW8MCQV3FhlDLwa5GZgZgwwqihwMaR4B1MGYYlusJlSSLkNwyMjlib0EMDnrIa84UGU5usN8K%2BB7bDiR&X-Amz-Signature=d99329f14c204ca2d6cb7166e49e199856923898499f67aee6ab10caa547ff7e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGNMAGB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBEOTdxJKYZEq8wcCMt6lks6iBNggVAre%2BTkTTc7wX0QAiAJiSGbhV%2FaqGXAjMyoiHuU%2BO%2F5%2FZKzc4CKgS2dJXVhOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29SRmKtsJ%2FXOz2lpKtwDEmly%2FC748s%2Bu3ImpxPATNBmKdbupkd5z7MEOYrhm7AQ1H1dVMIS%2Flou7pZdHKGe9UMmbNXWX%2BRvysBNB0uoNcRCH%2B2j8B8GpYMCi7Jh83ilWE1lIbyhlv9ue4mq7e1%2FYqn%2FeAvoB2aAmAGPFvJOVE8xHC%2FMpQkXPKu8O%2B3Rz0HsIjEiN1%2BMf%2BP4PBtxsMHvtFvmWy%2FGYLrS5qdHVCDpvhybesGtqKlO2QAkD%2FR1S3ChMQrLGe8vINSsa8JnEwvccZRe88g3xNQ2LEbYDUfyiw9%2FrZKo%2BT3D1JX22Adz%2BFl7j0ODWOfH4dKOhP8GctTfk3%2F8Uv9g0fodF6vHhgEvpm1Diw2g7X%2FBlavnJzlkJk344b2wpZeiCAAwfyvRcyOjnRdTSusXIXLu%2FT1yfW5y22AeDB%2BM%2BXs9RLYrQeUKP8RQTrEJgKKlOAxF%2BoHnrgENetw4fumOefqK8b%2BQ7HADcXuzNVFF%2FvY1k%2FaE%2BNj%2FLobeRSlGWvOkIRUepekg6usAhMliR6Hz5kLYSN5fU6aG4ktLZRnItZOPbkvKu%2FIVc5QSSeP0ekoXClHKApOSAs07h3wK7anwRFFG1sf2DysEkEVMlXXfUXh94fLqrBL5EHMN7DV5l6%2B0Y%2FKYp7P8wloaHvgY6pgHt6hCKmEW4uLnOZ3DMTsfvfytrjBPuIzUPxac8HYEzreizZArNbCOIM41eEfsE40ZNTQB3a4LVHYh5soLKjCHqR%2FeGniDkJ%2F7%2BkezndFDqlByvgCTgAl9TaxDeOCdQ4xKGu2oXgntULW%2FLfW8MCQV3FhlDLwa5GZgZgwwqihwMaR4B1MGYYlusJlSSLkNwyMjlib0EMDnrIa84UGU5usN8K%2BB7bDiR&X-Amz-Signature=c0230e973f3d0c8a4bedccebe7c6d8ac98de78215f570124565bfd63329a5b91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGNMAGB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBEOTdxJKYZEq8wcCMt6lks6iBNggVAre%2BTkTTc7wX0QAiAJiSGbhV%2FaqGXAjMyoiHuU%2BO%2F5%2FZKzc4CKgS2dJXVhOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29SRmKtsJ%2FXOz2lpKtwDEmly%2FC748s%2Bu3ImpxPATNBmKdbupkd5z7MEOYrhm7AQ1H1dVMIS%2Flou7pZdHKGe9UMmbNXWX%2BRvysBNB0uoNcRCH%2B2j8B8GpYMCi7Jh83ilWE1lIbyhlv9ue4mq7e1%2FYqn%2FeAvoB2aAmAGPFvJOVE8xHC%2FMpQkXPKu8O%2B3Rz0HsIjEiN1%2BMf%2BP4PBtxsMHvtFvmWy%2FGYLrS5qdHVCDpvhybesGtqKlO2QAkD%2FR1S3ChMQrLGe8vINSsa8JnEwvccZRe88g3xNQ2LEbYDUfyiw9%2FrZKo%2BT3D1JX22Adz%2BFl7j0ODWOfH4dKOhP8GctTfk3%2F8Uv9g0fodF6vHhgEvpm1Diw2g7X%2FBlavnJzlkJk344b2wpZeiCAAwfyvRcyOjnRdTSusXIXLu%2FT1yfW5y22AeDB%2BM%2BXs9RLYrQeUKP8RQTrEJgKKlOAxF%2BoHnrgENetw4fumOefqK8b%2BQ7HADcXuzNVFF%2FvY1k%2FaE%2BNj%2FLobeRSlGWvOkIRUepekg6usAhMliR6Hz5kLYSN5fU6aG4ktLZRnItZOPbkvKu%2FIVc5QSSeP0ekoXClHKApOSAs07h3wK7anwRFFG1sf2DysEkEVMlXXfUXh94fLqrBL5EHMN7DV5l6%2B0Y%2FKYp7P8wloaHvgY6pgHt6hCKmEW4uLnOZ3DMTsfvfytrjBPuIzUPxac8HYEzreizZArNbCOIM41eEfsE40ZNTQB3a4LVHYh5soLKjCHqR%2FeGniDkJ%2F7%2BkezndFDqlByvgCTgAl9TaxDeOCdQ4xKGu2oXgntULW%2FLfW8MCQV3FhlDLwa5GZgZgwwqihwMaR4B1MGYYlusJlSSLkNwyMjlib0EMDnrIa84UGU5usN8K%2BB7bDiR&X-Amz-Signature=104e19026818e3e12e1de996251c2378fef349872915270cabcb25e20d71244d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGNMAGB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBEOTdxJKYZEq8wcCMt6lks6iBNggVAre%2BTkTTc7wX0QAiAJiSGbhV%2FaqGXAjMyoiHuU%2BO%2F5%2FZKzc4CKgS2dJXVhOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29SRmKtsJ%2FXOz2lpKtwDEmly%2FC748s%2Bu3ImpxPATNBmKdbupkd5z7MEOYrhm7AQ1H1dVMIS%2Flou7pZdHKGe9UMmbNXWX%2BRvysBNB0uoNcRCH%2B2j8B8GpYMCi7Jh83ilWE1lIbyhlv9ue4mq7e1%2FYqn%2FeAvoB2aAmAGPFvJOVE8xHC%2FMpQkXPKu8O%2B3Rz0HsIjEiN1%2BMf%2BP4PBtxsMHvtFvmWy%2FGYLrS5qdHVCDpvhybesGtqKlO2QAkD%2FR1S3ChMQrLGe8vINSsa8JnEwvccZRe88g3xNQ2LEbYDUfyiw9%2FrZKo%2BT3D1JX22Adz%2BFl7j0ODWOfH4dKOhP8GctTfk3%2F8Uv9g0fodF6vHhgEvpm1Diw2g7X%2FBlavnJzlkJk344b2wpZeiCAAwfyvRcyOjnRdTSusXIXLu%2FT1yfW5y22AeDB%2BM%2BXs9RLYrQeUKP8RQTrEJgKKlOAxF%2BoHnrgENetw4fumOefqK8b%2BQ7HADcXuzNVFF%2FvY1k%2FaE%2BNj%2FLobeRSlGWvOkIRUepekg6usAhMliR6Hz5kLYSN5fU6aG4ktLZRnItZOPbkvKu%2FIVc5QSSeP0ekoXClHKApOSAs07h3wK7anwRFFG1sf2DysEkEVMlXXfUXh94fLqrBL5EHMN7DV5l6%2B0Y%2FKYp7P8wloaHvgY6pgHt6hCKmEW4uLnOZ3DMTsfvfytrjBPuIzUPxac8HYEzreizZArNbCOIM41eEfsE40ZNTQB3a4LVHYh5soLKjCHqR%2FeGniDkJ%2F7%2BkezndFDqlByvgCTgAl9TaxDeOCdQ4xKGu2oXgntULW%2FLfW8MCQV3FhlDLwa5GZgZgwwqihwMaR4B1MGYYlusJlSSLkNwyMjlib0EMDnrIa84UGU5usN8K%2BB7bDiR&X-Amz-Signature=5051035618876f8b27c62c3a5f4bbf203518561a2597b73cdabb87503844384d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGNMAGB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBEOTdxJKYZEq8wcCMt6lks6iBNggVAre%2BTkTTc7wX0QAiAJiSGbhV%2FaqGXAjMyoiHuU%2BO%2F5%2FZKzc4CKgS2dJXVhOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29SRmKtsJ%2FXOz2lpKtwDEmly%2FC748s%2Bu3ImpxPATNBmKdbupkd5z7MEOYrhm7AQ1H1dVMIS%2Flou7pZdHKGe9UMmbNXWX%2BRvysBNB0uoNcRCH%2B2j8B8GpYMCi7Jh83ilWE1lIbyhlv9ue4mq7e1%2FYqn%2FeAvoB2aAmAGPFvJOVE8xHC%2FMpQkXPKu8O%2B3Rz0HsIjEiN1%2BMf%2BP4PBtxsMHvtFvmWy%2FGYLrS5qdHVCDpvhybesGtqKlO2QAkD%2FR1S3ChMQrLGe8vINSsa8JnEwvccZRe88g3xNQ2LEbYDUfyiw9%2FrZKo%2BT3D1JX22Adz%2BFl7j0ODWOfH4dKOhP8GctTfk3%2F8Uv9g0fodF6vHhgEvpm1Diw2g7X%2FBlavnJzlkJk344b2wpZeiCAAwfyvRcyOjnRdTSusXIXLu%2FT1yfW5y22AeDB%2BM%2BXs9RLYrQeUKP8RQTrEJgKKlOAxF%2BoHnrgENetw4fumOefqK8b%2BQ7HADcXuzNVFF%2FvY1k%2FaE%2BNj%2FLobeRSlGWvOkIRUepekg6usAhMliR6Hz5kLYSN5fU6aG4ktLZRnItZOPbkvKu%2FIVc5QSSeP0ekoXClHKApOSAs07h3wK7anwRFFG1sf2DysEkEVMlXXfUXh94fLqrBL5EHMN7DV5l6%2B0Y%2FKYp7P8wloaHvgY6pgHt6hCKmEW4uLnOZ3DMTsfvfytrjBPuIzUPxac8HYEzreizZArNbCOIM41eEfsE40ZNTQB3a4LVHYh5soLKjCHqR%2FeGniDkJ%2F7%2BkezndFDqlByvgCTgAl9TaxDeOCdQ4xKGu2oXgntULW%2FLfW8MCQV3FhlDLwa5GZgZgwwqihwMaR4B1MGYYlusJlSSLkNwyMjlib0EMDnrIa84UGU5usN8K%2BB7bDiR&X-Amz-Signature=db14e9df5992a6634894b33b509f7e5f87884270e4d312a9ecf6ed919bb9afbb&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
