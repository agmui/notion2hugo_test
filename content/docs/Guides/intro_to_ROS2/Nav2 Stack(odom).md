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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=447cf94d4567c2b7427b7d97531807fed45560e34a41b998c43ee793cf5dda99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=0442ba62b81077197e628ec54e24c623e82a87c2bf24eba08835696d759c2636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=0be742ebac07c5769cbe9bc0c9cb8864fe9437c87e30831eae1a226a9f1ebfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=574ec596f71ebc121ff907203740df1313e1a953f44f9f3e2eb1829b235929d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYW7FMZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAo1ykcwVVvc6VFitp4f7dLBmy6u4pGyyTKUvQmDasBsAiEAnGpOELmbBL2Km%2FdnN5HB0fJhVGBRDp5VNvapt%2Fa92V4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKDFAfXVev1yXMIeUircA%2Fc%2B2uH4k1UWhXFT%2FLgEMUxxzR36H37DCSJib8WUnliOaFOF4UYop2Wua1c6mXWTbe%2FDkZVDVZhy7EYO6Sg67VTSiBN%2BB%2BQqukoDdgu9NN1%2Bc8BAFsl3uRZSkSTtnabwF%2FdxTJsd3h%2BINAjf%2BFB3Qg3iZrs9c6L9XZZH7M%2FKrblJeL9TPKzfv0RY2%2B2QL2kZSrNa3IEqpwRytQtwQOn1qM3%2B%2BwBB5eyftCO6uD7BwHtytE7bvMJGSEdmMU62AfNqRI3fAf%2BsTl%2BHnM64yNE%2FHDpJFW%2Bd1Pxou%2F9FOl48DnSn4Y0bwWuu976%2BpqzJ5phL8Tx%2FfADLfUgvQxBFpGJMuacnW4%2BaGSGdaeByQ0ZHO%2BMlRk0eKXKQZSj%2FURb5zBi6cfmw%2Ft3C9%2BS0HLEpneAZurO%2BXK3EoXiYmf7cxXuo5akghmH3dgfMR7rYSgCvM1JFV0hS6MGRN%2Fj6jfoP8KgitlOw1xS0pGkKbGKx7ZtdHCbbSoCsu9Oe1Mlnv%2BsvDV7T0QcjvKiv87E95IMg6QoYJDnTXOacaVJnh5j24LJhtVADkDtxFqFjyEWrJiLM2RDNBAM6CAmJYxXFk2R63UlrZp7wsVWaBkUWRn6lS10%2F%2FTIZ6NokLF0wgdV%2BkS7VMML%2BvcIGOqUBOPHp85jSsWvRI%2FO4KHYQMWg1PjD%2B9qDgpLmHQmjVg%2FuQrRcWJgSVXig6oQlC%2BAPIwO3PchYX0F0e5w8Esm24%2FJDgU2WsHlDQupUXHYAtWCBJvrjNhhuINm5Z8ZFZM1w6tAFtkK%2Fi8YoUVDEelN7%2FOXTf9TwtJ%2BNr4YBiyc1ccl2WC3XAJAekBh%2FPQMCgKqYn3eY%2F%2F8CPbxgFHGRwnLSxwE3DWL7i&X-Amz-Signature=715f357277286834025e0c2d6df3f3d2f7eb696395e571289f1a7541fbbec394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
