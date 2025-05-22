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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRDSDOB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICKo0NXVTetALGZl4GfWRibRTASwpjDwMD%2BAiOOq6jdsAiA4FZpvEAODJvJX7n3JoGWhWqbZLVKuWYpoX4GFluLd0CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJWGSNhG6qod4mNiKtwDjijH13DnC2h4rPvkbNMsbuwsmlpXhs0wQSP2pixhbirO%2BO9tB%2FBKaHNOQcWGRwhzCvMYGHO20pK%2BFy4J4vSq7WGfR0Pg%2BtGSwVZV6PVrcz2ER6zPNv%2B1jNMTX3%2FKbm7c7sqbUgCHJeUzMKaez2f%2Bu9vdkZyc7NGMh8BgVMGanMW5%2BSCynDW08i0wDmvZEK4dCry306GpeJV4cZil98%2BLoBnF6pppCXHIq4sO1ep8qOt7Kw3fBK8st0Hz8YhuCwlVlwC0kBSLfxSZ8L%2B6g1cOffMjaxq7J91lXYU12SkbVvjuiByH%2FMNY9JlF%2Bnae4qtOzkp%2BJLycegxPsESVRzzzpQQw3SH1lClb4NidFEI8jb9weHuQmgp11%2Bfs9YBw7wYSO%2F4cRgV8hOYEWN4ugAJ6SVIS7sO7IMi4hGXiniR5VqLH3IvkDpzSCwyUzn2vChYCMTXpaZBfrtfrr62mlsKrbw1qbCuRx%2FSrDwpR1mCbvnsjN4Fxvjqpe5y40UCRpB9aqk5EwT3W%2BuW8Vt8CyAIacaTBhUf5f5OJy%2BwGtsMyqcJpWCTE4Hr9yQ1fcwo0Sw9P7ivRcdik3fO86NH3xslU73d%2FzNm7fhFZ0DA%2F8ZJQoek8Wb%2BYl3YG6FP9uaEw%2BPa6wQY6pgGs69e1Rd1IpGfM2UCDfiOsd7uRxDTPbgNk09gYlWYhsZ5QIDqCGHB%2B75c4j6RlGQmGTSbnp9%2BOHZm1z%2Buczrtx5c9R18WDT%2BRWgVrOwi804%2BKO%2B3vFcB9%2BFgv%2BNA%2Fsmu55mOVvHSkDtgFJbOg%2FWuNmP6sM%2BvhlLhM2bwGnBxZVPpxQ%2FhBkkJxudnuxwY2sQnCEVivn%2FLFv7Okv8qeijmI60ESIVgEA&X-Amz-Signature=652d39980ecfb24ab64c6cd4475b062b5c337e53646182b5a5f1463ff64b332d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRDSDOB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICKo0NXVTetALGZl4GfWRibRTASwpjDwMD%2BAiOOq6jdsAiA4FZpvEAODJvJX7n3JoGWhWqbZLVKuWYpoX4GFluLd0CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJWGSNhG6qod4mNiKtwDjijH13DnC2h4rPvkbNMsbuwsmlpXhs0wQSP2pixhbirO%2BO9tB%2FBKaHNOQcWGRwhzCvMYGHO20pK%2BFy4J4vSq7WGfR0Pg%2BtGSwVZV6PVrcz2ER6zPNv%2B1jNMTX3%2FKbm7c7sqbUgCHJeUzMKaez2f%2Bu9vdkZyc7NGMh8BgVMGanMW5%2BSCynDW08i0wDmvZEK4dCry306GpeJV4cZil98%2BLoBnF6pppCXHIq4sO1ep8qOt7Kw3fBK8st0Hz8YhuCwlVlwC0kBSLfxSZ8L%2B6g1cOffMjaxq7J91lXYU12SkbVvjuiByH%2FMNY9JlF%2Bnae4qtOzkp%2BJLycegxPsESVRzzzpQQw3SH1lClb4NidFEI8jb9weHuQmgp11%2Bfs9YBw7wYSO%2F4cRgV8hOYEWN4ugAJ6SVIS7sO7IMi4hGXiniR5VqLH3IvkDpzSCwyUzn2vChYCMTXpaZBfrtfrr62mlsKrbw1qbCuRx%2FSrDwpR1mCbvnsjN4Fxvjqpe5y40UCRpB9aqk5EwT3W%2BuW8Vt8CyAIacaTBhUf5f5OJy%2BwGtsMyqcJpWCTE4Hr9yQ1fcwo0Sw9P7ivRcdik3fO86NH3xslU73d%2FzNm7fhFZ0DA%2F8ZJQoek8Wb%2BYl3YG6FP9uaEw%2BPa6wQY6pgGs69e1Rd1IpGfM2UCDfiOsd7uRxDTPbgNk09gYlWYhsZ5QIDqCGHB%2B75c4j6RlGQmGTSbnp9%2BOHZm1z%2Buczrtx5c9R18WDT%2BRWgVrOwi804%2BKO%2B3vFcB9%2BFgv%2BNA%2Fsmu55mOVvHSkDtgFJbOg%2FWuNmP6sM%2BvhlLhM2bwGnBxZVPpxQ%2FhBkkJxudnuxwY2sQnCEVivn%2FLFv7Okv8qeijmI60ESIVgEA&X-Amz-Signature=79c8311393b5c558dd6ca87635862f2930ff1d0f5cadcbc93d17d9fceb8af656&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRDSDOB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICKo0NXVTetALGZl4GfWRibRTASwpjDwMD%2BAiOOq6jdsAiA4FZpvEAODJvJX7n3JoGWhWqbZLVKuWYpoX4GFluLd0CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJWGSNhG6qod4mNiKtwDjijH13DnC2h4rPvkbNMsbuwsmlpXhs0wQSP2pixhbirO%2BO9tB%2FBKaHNOQcWGRwhzCvMYGHO20pK%2BFy4J4vSq7WGfR0Pg%2BtGSwVZV6PVrcz2ER6zPNv%2B1jNMTX3%2FKbm7c7sqbUgCHJeUzMKaez2f%2Bu9vdkZyc7NGMh8BgVMGanMW5%2BSCynDW08i0wDmvZEK4dCry306GpeJV4cZil98%2BLoBnF6pppCXHIq4sO1ep8qOt7Kw3fBK8st0Hz8YhuCwlVlwC0kBSLfxSZ8L%2B6g1cOffMjaxq7J91lXYU12SkbVvjuiByH%2FMNY9JlF%2Bnae4qtOzkp%2BJLycegxPsESVRzzzpQQw3SH1lClb4NidFEI8jb9weHuQmgp11%2Bfs9YBw7wYSO%2F4cRgV8hOYEWN4ugAJ6SVIS7sO7IMi4hGXiniR5VqLH3IvkDpzSCwyUzn2vChYCMTXpaZBfrtfrr62mlsKrbw1qbCuRx%2FSrDwpR1mCbvnsjN4Fxvjqpe5y40UCRpB9aqk5EwT3W%2BuW8Vt8CyAIacaTBhUf5f5OJy%2BwGtsMyqcJpWCTE4Hr9yQ1fcwo0Sw9P7ivRcdik3fO86NH3xslU73d%2FzNm7fhFZ0DA%2F8ZJQoek8Wb%2BYl3YG6FP9uaEw%2BPa6wQY6pgGs69e1Rd1IpGfM2UCDfiOsd7uRxDTPbgNk09gYlWYhsZ5QIDqCGHB%2B75c4j6RlGQmGTSbnp9%2BOHZm1z%2Buczrtx5c9R18WDT%2BRWgVrOwi804%2BKO%2B3vFcB9%2BFgv%2BNA%2Fsmu55mOVvHSkDtgFJbOg%2FWuNmP6sM%2BvhlLhM2bwGnBxZVPpxQ%2FhBkkJxudnuxwY2sQnCEVivn%2FLFv7Okv8qeijmI60ESIVgEA&X-Amz-Signature=7415f8cdc706aff2845ebf65b711c5098cd72e4652a9c43633499a037527e64e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRDSDOB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICKo0NXVTetALGZl4GfWRibRTASwpjDwMD%2BAiOOq6jdsAiA4FZpvEAODJvJX7n3JoGWhWqbZLVKuWYpoX4GFluLd0CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJWGSNhG6qod4mNiKtwDjijH13DnC2h4rPvkbNMsbuwsmlpXhs0wQSP2pixhbirO%2BO9tB%2FBKaHNOQcWGRwhzCvMYGHO20pK%2BFy4J4vSq7WGfR0Pg%2BtGSwVZV6PVrcz2ER6zPNv%2B1jNMTX3%2FKbm7c7sqbUgCHJeUzMKaez2f%2Bu9vdkZyc7NGMh8BgVMGanMW5%2BSCynDW08i0wDmvZEK4dCry306GpeJV4cZil98%2BLoBnF6pppCXHIq4sO1ep8qOt7Kw3fBK8st0Hz8YhuCwlVlwC0kBSLfxSZ8L%2B6g1cOffMjaxq7J91lXYU12SkbVvjuiByH%2FMNY9JlF%2Bnae4qtOzkp%2BJLycegxPsESVRzzzpQQw3SH1lClb4NidFEI8jb9weHuQmgp11%2Bfs9YBw7wYSO%2F4cRgV8hOYEWN4ugAJ6SVIS7sO7IMi4hGXiniR5VqLH3IvkDpzSCwyUzn2vChYCMTXpaZBfrtfrr62mlsKrbw1qbCuRx%2FSrDwpR1mCbvnsjN4Fxvjqpe5y40UCRpB9aqk5EwT3W%2BuW8Vt8CyAIacaTBhUf5f5OJy%2BwGtsMyqcJpWCTE4Hr9yQ1fcwo0Sw9P7ivRcdik3fO86NH3xslU73d%2FzNm7fhFZ0DA%2F8ZJQoek8Wb%2BYl3YG6FP9uaEw%2BPa6wQY6pgGs69e1Rd1IpGfM2UCDfiOsd7uRxDTPbgNk09gYlWYhsZ5QIDqCGHB%2B75c4j6RlGQmGTSbnp9%2BOHZm1z%2Buczrtx5c9R18WDT%2BRWgVrOwi804%2BKO%2B3vFcB9%2BFgv%2BNA%2Fsmu55mOVvHSkDtgFJbOg%2FWuNmP6sM%2BvhlLhM2bwGnBxZVPpxQ%2FhBkkJxudnuxwY2sQnCEVivn%2FLFv7Okv8qeijmI60ESIVgEA&X-Amz-Signature=7eb543c774ca21cf53f692639f920e55d835ab286b1bf39a78c959b6962c57a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZRDSDOB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICKo0NXVTetALGZl4GfWRibRTASwpjDwMD%2BAiOOq6jdsAiA4FZpvEAODJvJX7n3JoGWhWqbZLVKuWYpoX4GFluLd0CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FJWGSNhG6qod4mNiKtwDjijH13DnC2h4rPvkbNMsbuwsmlpXhs0wQSP2pixhbirO%2BO9tB%2FBKaHNOQcWGRwhzCvMYGHO20pK%2BFy4J4vSq7WGfR0Pg%2BtGSwVZV6PVrcz2ER6zPNv%2B1jNMTX3%2FKbm7c7sqbUgCHJeUzMKaez2f%2Bu9vdkZyc7NGMh8BgVMGanMW5%2BSCynDW08i0wDmvZEK4dCry306GpeJV4cZil98%2BLoBnF6pppCXHIq4sO1ep8qOt7Kw3fBK8st0Hz8YhuCwlVlwC0kBSLfxSZ8L%2B6g1cOffMjaxq7J91lXYU12SkbVvjuiByH%2FMNY9JlF%2Bnae4qtOzkp%2BJLycegxPsESVRzzzpQQw3SH1lClb4NidFEI8jb9weHuQmgp11%2Bfs9YBw7wYSO%2F4cRgV8hOYEWN4ugAJ6SVIS7sO7IMi4hGXiniR5VqLH3IvkDpzSCwyUzn2vChYCMTXpaZBfrtfrr62mlsKrbw1qbCuRx%2FSrDwpR1mCbvnsjN4Fxvjqpe5y40UCRpB9aqk5EwT3W%2BuW8Vt8CyAIacaTBhUf5f5OJy%2BwGtsMyqcJpWCTE4Hr9yQ1fcwo0Sw9P7ivRcdik3fO86NH3xslU73d%2FzNm7fhFZ0DA%2F8ZJQoek8Wb%2BYl3YG6FP9uaEw%2BPa6wQY6pgGs69e1Rd1IpGfM2UCDfiOsd7uRxDTPbgNk09gYlWYhsZ5QIDqCGHB%2B75c4j6RlGQmGTSbnp9%2BOHZm1z%2Buczrtx5c9R18WDT%2BRWgVrOwi804%2BKO%2B3vFcB9%2BFgv%2BNA%2Fsmu55mOVvHSkDtgFJbOg%2FWuNmP6sM%2BvhlLhM2bwGnBxZVPpxQ%2FhBkkJxudnuxwY2sQnCEVivn%2FLFv7Okv8qeijmI60ESIVgEA&X-Amz-Signature=27c15607ab93360ce75f9ccc3396daef22c7f4865a799659c17b65c033bf0c74&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
