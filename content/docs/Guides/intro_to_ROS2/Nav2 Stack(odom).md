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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGLNW22%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDC4A3VS%2B7bpa%2BnYofxHadE895a9pd4WooVqrOKWGBAeAIgQ5%2BruRSLObAEx4qf9PctNop3ApTQ80C6gRCti6lGSiAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLkAQwcmE99T7kCtqSrcAzD4Kon%2BeVvRYMCLHOa22xH1KrFoFxJ8ncL2nQQCvzeogG9s6RIm9vsLD3cO8XBi6TxEe72SfD9JnuqNdFHAGKr3ihfsFxdedByYLA8ll1PibayzaBFjBOw0sK12uk8emTABFWZL5h7g2wyYW9oqPgxqAfjXEfuIjnT2LgFBEiAyiS%2BOMpg915vlYML%2BGXNa3%2FjCGLdbPvSg7OkZzQjAejnNP9FMLpZHuma%2FIVK0VsSnT7TdU6RzYD4hFpI%2B4yXOt%2BUoiXl3wLebiga0lcmYV2bti1IPJ3VGgp%2BEBhktqTc88ZqbIQyhF4nWnU9CTMA1amDqiUPzNveGDMVXdDFIa5S3t5HDtzRaW3YR9o4YgMHVX79cn5EU2sDCZebWIKZSCaMaJwDgne5008Q%2B69CWAeRSunWNyXmbqao%2BveAG%2BnEzeagfpN%2Bsgywj9zAEnB%2BI97PjJ5HP26GrsaHFvK%2BmAqbYstWetWOAZiFK5PrbCUFpR0Ck90JhVvaGE1%2FyHSiRa4ioFV2ejwqxo%2B57j6jNdJ8g9Qe%2BcggzzgQc48HZXTsMg%2Fg3ZbQReZ9qD59gQnve4DlGfpqG5uMcfYAP54ti48eqokH1BKjeM2ycxAZY6yLukwCQbtADXQBHJZw2MLbrtL4GOqUBzq1PS43BWGt7aiu4Hx8GIOPfdPkbhHuVA%2FOSsn4lpYt3ZMCNmsk85rKpa5NXoXAxW%2F6oa5KLRVxx5k%2FFgzX8TiZEdKFTBcFKPC%2BhoXsM%2F42q3OB0qkPtSCT1XF7fO8H5LuTuczCnl4j5H77jjAysuFrMfan8ZiS97%2FdWo9e6XDQ%2FvsLJi69f%2FeOrlEBw2fxMru7bTl3ZabWuGJiLXDYJdRSqc7oY&X-Amz-Signature=3731210150c0933c1c873572cfd78f54612e928049c600d44f3e27b19f6bba62&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGLNW22%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDC4A3VS%2B7bpa%2BnYofxHadE895a9pd4WooVqrOKWGBAeAIgQ5%2BruRSLObAEx4qf9PctNop3ApTQ80C6gRCti6lGSiAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLkAQwcmE99T7kCtqSrcAzD4Kon%2BeVvRYMCLHOa22xH1KrFoFxJ8ncL2nQQCvzeogG9s6RIm9vsLD3cO8XBi6TxEe72SfD9JnuqNdFHAGKr3ihfsFxdedByYLA8ll1PibayzaBFjBOw0sK12uk8emTABFWZL5h7g2wyYW9oqPgxqAfjXEfuIjnT2LgFBEiAyiS%2BOMpg915vlYML%2BGXNa3%2FjCGLdbPvSg7OkZzQjAejnNP9FMLpZHuma%2FIVK0VsSnT7TdU6RzYD4hFpI%2B4yXOt%2BUoiXl3wLebiga0lcmYV2bti1IPJ3VGgp%2BEBhktqTc88ZqbIQyhF4nWnU9CTMA1amDqiUPzNveGDMVXdDFIa5S3t5HDtzRaW3YR9o4YgMHVX79cn5EU2sDCZebWIKZSCaMaJwDgne5008Q%2B69CWAeRSunWNyXmbqao%2BveAG%2BnEzeagfpN%2Bsgywj9zAEnB%2BI97PjJ5HP26GrsaHFvK%2BmAqbYstWetWOAZiFK5PrbCUFpR0Ck90JhVvaGE1%2FyHSiRa4ioFV2ejwqxo%2B57j6jNdJ8g9Qe%2BcggzzgQc48HZXTsMg%2Fg3ZbQReZ9qD59gQnve4DlGfpqG5uMcfYAP54ti48eqokH1BKjeM2ycxAZY6yLukwCQbtADXQBHJZw2MLbrtL4GOqUBzq1PS43BWGt7aiu4Hx8GIOPfdPkbhHuVA%2FOSsn4lpYt3ZMCNmsk85rKpa5NXoXAxW%2F6oa5KLRVxx5k%2FFgzX8TiZEdKFTBcFKPC%2BhoXsM%2F42q3OB0qkPtSCT1XF7fO8H5LuTuczCnl4j5H77jjAysuFrMfan8ZiS97%2FdWo9e6XDQ%2FvsLJi69f%2FeOrlEBw2fxMru7bTl3ZabWuGJiLXDYJdRSqc7oY&X-Amz-Signature=fa60baec7b6cf34161eeff1d5aab1d400dd31ab25e329775502e1e40d08991fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGLNW22%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDC4A3VS%2B7bpa%2BnYofxHadE895a9pd4WooVqrOKWGBAeAIgQ5%2BruRSLObAEx4qf9PctNop3ApTQ80C6gRCti6lGSiAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLkAQwcmE99T7kCtqSrcAzD4Kon%2BeVvRYMCLHOa22xH1KrFoFxJ8ncL2nQQCvzeogG9s6RIm9vsLD3cO8XBi6TxEe72SfD9JnuqNdFHAGKr3ihfsFxdedByYLA8ll1PibayzaBFjBOw0sK12uk8emTABFWZL5h7g2wyYW9oqPgxqAfjXEfuIjnT2LgFBEiAyiS%2BOMpg915vlYML%2BGXNa3%2FjCGLdbPvSg7OkZzQjAejnNP9FMLpZHuma%2FIVK0VsSnT7TdU6RzYD4hFpI%2B4yXOt%2BUoiXl3wLebiga0lcmYV2bti1IPJ3VGgp%2BEBhktqTc88ZqbIQyhF4nWnU9CTMA1amDqiUPzNveGDMVXdDFIa5S3t5HDtzRaW3YR9o4YgMHVX79cn5EU2sDCZebWIKZSCaMaJwDgne5008Q%2B69CWAeRSunWNyXmbqao%2BveAG%2BnEzeagfpN%2Bsgywj9zAEnB%2BI97PjJ5HP26GrsaHFvK%2BmAqbYstWetWOAZiFK5PrbCUFpR0Ck90JhVvaGE1%2FyHSiRa4ioFV2ejwqxo%2B57j6jNdJ8g9Qe%2BcggzzgQc48HZXTsMg%2Fg3ZbQReZ9qD59gQnve4DlGfpqG5uMcfYAP54ti48eqokH1BKjeM2ycxAZY6yLukwCQbtADXQBHJZw2MLbrtL4GOqUBzq1PS43BWGt7aiu4Hx8GIOPfdPkbhHuVA%2FOSsn4lpYt3ZMCNmsk85rKpa5NXoXAxW%2F6oa5KLRVxx5k%2FFgzX8TiZEdKFTBcFKPC%2BhoXsM%2F42q3OB0qkPtSCT1XF7fO8H5LuTuczCnl4j5H77jjAysuFrMfan8ZiS97%2FdWo9e6XDQ%2FvsLJi69f%2FeOrlEBw2fxMru7bTl3ZabWuGJiLXDYJdRSqc7oY&X-Amz-Signature=d1547ae69f1ff5d5645e2ca78bb935acc0206881bba63696901b0752521c72bd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGLNW22%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDC4A3VS%2B7bpa%2BnYofxHadE895a9pd4WooVqrOKWGBAeAIgQ5%2BruRSLObAEx4qf9PctNop3ApTQ80C6gRCti6lGSiAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLkAQwcmE99T7kCtqSrcAzD4Kon%2BeVvRYMCLHOa22xH1KrFoFxJ8ncL2nQQCvzeogG9s6RIm9vsLD3cO8XBi6TxEe72SfD9JnuqNdFHAGKr3ihfsFxdedByYLA8ll1PibayzaBFjBOw0sK12uk8emTABFWZL5h7g2wyYW9oqPgxqAfjXEfuIjnT2LgFBEiAyiS%2BOMpg915vlYML%2BGXNa3%2FjCGLdbPvSg7OkZzQjAejnNP9FMLpZHuma%2FIVK0VsSnT7TdU6RzYD4hFpI%2B4yXOt%2BUoiXl3wLebiga0lcmYV2bti1IPJ3VGgp%2BEBhktqTc88ZqbIQyhF4nWnU9CTMA1amDqiUPzNveGDMVXdDFIa5S3t5HDtzRaW3YR9o4YgMHVX79cn5EU2sDCZebWIKZSCaMaJwDgne5008Q%2B69CWAeRSunWNyXmbqao%2BveAG%2BnEzeagfpN%2Bsgywj9zAEnB%2BI97PjJ5HP26GrsaHFvK%2BmAqbYstWetWOAZiFK5PrbCUFpR0Ck90JhVvaGE1%2FyHSiRa4ioFV2ejwqxo%2B57j6jNdJ8g9Qe%2BcggzzgQc48HZXTsMg%2Fg3ZbQReZ9qD59gQnve4DlGfpqG5uMcfYAP54ti48eqokH1BKjeM2ycxAZY6yLukwCQbtADXQBHJZw2MLbrtL4GOqUBzq1PS43BWGt7aiu4Hx8GIOPfdPkbhHuVA%2FOSsn4lpYt3ZMCNmsk85rKpa5NXoXAxW%2F6oa5KLRVxx5k%2FFgzX8TiZEdKFTBcFKPC%2BhoXsM%2F42q3OB0qkPtSCT1XF7fO8H5LuTuczCnl4j5H77jjAysuFrMfan8ZiS97%2FdWo9e6XDQ%2FvsLJi69f%2FeOrlEBw2fxMru7bTl3ZabWuGJiLXDYJdRSqc7oY&X-Amz-Signature=9fecfb16c725d5d6254874d9c30f56002bda751543b7388411b371448d8d7112&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGLNW22%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDC4A3VS%2B7bpa%2BnYofxHadE895a9pd4WooVqrOKWGBAeAIgQ5%2BruRSLObAEx4qf9PctNop3ApTQ80C6gRCti6lGSiAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLkAQwcmE99T7kCtqSrcAzD4Kon%2BeVvRYMCLHOa22xH1KrFoFxJ8ncL2nQQCvzeogG9s6RIm9vsLD3cO8XBi6TxEe72SfD9JnuqNdFHAGKr3ihfsFxdedByYLA8ll1PibayzaBFjBOw0sK12uk8emTABFWZL5h7g2wyYW9oqPgxqAfjXEfuIjnT2LgFBEiAyiS%2BOMpg915vlYML%2BGXNa3%2FjCGLdbPvSg7OkZzQjAejnNP9FMLpZHuma%2FIVK0VsSnT7TdU6RzYD4hFpI%2B4yXOt%2BUoiXl3wLebiga0lcmYV2bti1IPJ3VGgp%2BEBhktqTc88ZqbIQyhF4nWnU9CTMA1amDqiUPzNveGDMVXdDFIa5S3t5HDtzRaW3YR9o4YgMHVX79cn5EU2sDCZebWIKZSCaMaJwDgne5008Q%2B69CWAeRSunWNyXmbqao%2BveAG%2BnEzeagfpN%2Bsgywj9zAEnB%2BI97PjJ5HP26GrsaHFvK%2BmAqbYstWetWOAZiFK5PrbCUFpR0Ck90JhVvaGE1%2FyHSiRa4ioFV2ejwqxo%2B57j6jNdJ8g9Qe%2BcggzzgQc48HZXTsMg%2Fg3ZbQReZ9qD59gQnve4DlGfpqG5uMcfYAP54ti48eqokH1BKjeM2ycxAZY6yLukwCQbtADXQBHJZw2MLbrtL4GOqUBzq1PS43BWGt7aiu4Hx8GIOPfdPkbhHuVA%2FOSsn4lpYt3ZMCNmsk85rKpa5NXoXAxW%2F6oa5KLRVxx5k%2FFgzX8TiZEdKFTBcFKPC%2BhoXsM%2F42q3OB0qkPtSCT1XF7fO8H5LuTuczCnl4j5H77jjAysuFrMfan8ZiS97%2FdWo9e6XDQ%2FvsLJi69f%2FeOrlEBw2fxMru7bTl3ZabWuGJiLXDYJdRSqc7oY&X-Amz-Signature=18748f3a63708b8db6aeff2c0554a579827ce9cb3380db1164e80034debe978c&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
