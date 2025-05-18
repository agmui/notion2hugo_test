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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLRBTP5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFVKWhcLO1hxbSF%2FRkhDMzKxTwJl29PT8vS4aG4j0IwIgD%2Bx2BDocqB0B1MC4Jj1h0ObiIJred%2FPI1m1kew7eqzMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDB2w1dzenItHzVpgVyrcA%2Fq3uHpRDGgm%2FZ11lciVTw8zymmfj5gznQ5u5NEaX19BrYjTDnGjdWKCykGXHgan4s8ZumjfD9OLHnGgkQSgdM3ovovhW2zHpNXfmmzLBz8YPHLNSoC0%2FMQgTC1YeGwH2qms6KDlkwSLqWlRHWKE4waCcUQBlXtjcVwEdhhzNF4Sj6TE7k50SacQgqz79HYgYDZOldIrIoR3GXx8Pc9V3iQZYYdY4obF1Er9CTTe9oefvSHTLkgEuEGchTV0GLmcR94c2U0SeYQaLEG2RhLx99untTfM2FXy0Ayvs1W5woa6aNZ44F0XkVvEDzks%2BPyMVhoY11lD7LUQ%2F%2Fw0RJh%2FsP4W54M1oS1v9Mh42H2HX3jmhQBLt7M42n4mnKbKB5sg148LonzmipT7wspz3GzE570Ar9QkwZQ5FTxVNbTluoEZ7q3MLqEexiBWSRsrGvHVVYxRyj1A45A6xSqGPu7FOc3VwiyyfXND9HJ0V01mpl7gHxWDKgx8z3AdGk5bq1lorFqCXCOAgFmAMg6SSH81M%2F3BwVIf7Vdc78M21%2BbVH7oqqy35UdOFnaApB3rxwq5r1p73u4CUIr2J%2BlSUh7lFV2GKAOJ8vut9zsgtEauaSwuLLBtlH9sRsgszEPV5MOPXpMEGOqUBS1bOu5yqDZDbXDlzOyePM441i4jVOTlVJeY84Ml6JGMXCjGWKiAA6%2BleGCz4THdXx33XlHDP38ntK1%2Ft%2BUa0KM5L0AiR74tofSbGrJU34n5KOxhovsPtd%2BaJDj%2B2Pw8K7PMyg8neQUvY4IQ2zjsniLCDVAjhq7jpha3eNOxVF1Su4BRCidmBCpHek0yZyJWBFfVK2XxPvO0lJgPpVf2Bukqta8Yi&X-Amz-Signature=6829a949357c99037312b0b556f8346556fce859ea0d1dda00c3993ab2272b37&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLRBTP5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFVKWhcLO1hxbSF%2FRkhDMzKxTwJl29PT8vS4aG4j0IwIgD%2Bx2BDocqB0B1MC4Jj1h0ObiIJred%2FPI1m1kew7eqzMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDB2w1dzenItHzVpgVyrcA%2Fq3uHpRDGgm%2FZ11lciVTw8zymmfj5gznQ5u5NEaX19BrYjTDnGjdWKCykGXHgan4s8ZumjfD9OLHnGgkQSgdM3ovovhW2zHpNXfmmzLBz8YPHLNSoC0%2FMQgTC1YeGwH2qms6KDlkwSLqWlRHWKE4waCcUQBlXtjcVwEdhhzNF4Sj6TE7k50SacQgqz79HYgYDZOldIrIoR3GXx8Pc9V3iQZYYdY4obF1Er9CTTe9oefvSHTLkgEuEGchTV0GLmcR94c2U0SeYQaLEG2RhLx99untTfM2FXy0Ayvs1W5woa6aNZ44F0XkVvEDzks%2BPyMVhoY11lD7LUQ%2F%2Fw0RJh%2FsP4W54M1oS1v9Mh42H2HX3jmhQBLt7M42n4mnKbKB5sg148LonzmipT7wspz3GzE570Ar9QkwZQ5FTxVNbTluoEZ7q3MLqEexiBWSRsrGvHVVYxRyj1A45A6xSqGPu7FOc3VwiyyfXND9HJ0V01mpl7gHxWDKgx8z3AdGk5bq1lorFqCXCOAgFmAMg6SSH81M%2F3BwVIf7Vdc78M21%2BbVH7oqqy35UdOFnaApB3rxwq5r1p73u4CUIr2J%2BlSUh7lFV2GKAOJ8vut9zsgtEauaSwuLLBtlH9sRsgszEPV5MOPXpMEGOqUBS1bOu5yqDZDbXDlzOyePM441i4jVOTlVJeY84Ml6JGMXCjGWKiAA6%2BleGCz4THdXx33XlHDP38ntK1%2Ft%2BUa0KM5L0AiR74tofSbGrJU34n5KOxhovsPtd%2BaJDj%2B2Pw8K7PMyg8neQUvY4IQ2zjsniLCDVAjhq7jpha3eNOxVF1Su4BRCidmBCpHek0yZyJWBFfVK2XxPvO0lJgPpVf2Bukqta8Yi&X-Amz-Signature=ca0edd25f1b91e2a10787cf721be8b89610e0d35ab2237bf4ee9d2483cb95d22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLRBTP5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFVKWhcLO1hxbSF%2FRkhDMzKxTwJl29PT8vS4aG4j0IwIgD%2Bx2BDocqB0B1MC4Jj1h0ObiIJred%2FPI1m1kew7eqzMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDB2w1dzenItHzVpgVyrcA%2Fq3uHpRDGgm%2FZ11lciVTw8zymmfj5gznQ5u5NEaX19BrYjTDnGjdWKCykGXHgan4s8ZumjfD9OLHnGgkQSgdM3ovovhW2zHpNXfmmzLBz8YPHLNSoC0%2FMQgTC1YeGwH2qms6KDlkwSLqWlRHWKE4waCcUQBlXtjcVwEdhhzNF4Sj6TE7k50SacQgqz79HYgYDZOldIrIoR3GXx8Pc9V3iQZYYdY4obF1Er9CTTe9oefvSHTLkgEuEGchTV0GLmcR94c2U0SeYQaLEG2RhLx99untTfM2FXy0Ayvs1W5woa6aNZ44F0XkVvEDzks%2BPyMVhoY11lD7LUQ%2F%2Fw0RJh%2FsP4W54M1oS1v9Mh42H2HX3jmhQBLt7M42n4mnKbKB5sg148LonzmipT7wspz3GzE570Ar9QkwZQ5FTxVNbTluoEZ7q3MLqEexiBWSRsrGvHVVYxRyj1A45A6xSqGPu7FOc3VwiyyfXND9HJ0V01mpl7gHxWDKgx8z3AdGk5bq1lorFqCXCOAgFmAMg6SSH81M%2F3BwVIf7Vdc78M21%2BbVH7oqqy35UdOFnaApB3rxwq5r1p73u4CUIr2J%2BlSUh7lFV2GKAOJ8vut9zsgtEauaSwuLLBtlH9sRsgszEPV5MOPXpMEGOqUBS1bOu5yqDZDbXDlzOyePM441i4jVOTlVJeY84Ml6JGMXCjGWKiAA6%2BleGCz4THdXx33XlHDP38ntK1%2Ft%2BUa0KM5L0AiR74tofSbGrJU34n5KOxhovsPtd%2BaJDj%2B2Pw8K7PMyg8neQUvY4IQ2zjsniLCDVAjhq7jpha3eNOxVF1Su4BRCidmBCpHek0yZyJWBFfVK2XxPvO0lJgPpVf2Bukqta8Yi&X-Amz-Signature=07d231cd14e8e77cd3c28f1ae0eb5111fd257044e485e6ad742db7d90bdfc2fe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLRBTP5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFVKWhcLO1hxbSF%2FRkhDMzKxTwJl29PT8vS4aG4j0IwIgD%2Bx2BDocqB0B1MC4Jj1h0ObiIJred%2FPI1m1kew7eqzMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDB2w1dzenItHzVpgVyrcA%2Fq3uHpRDGgm%2FZ11lciVTw8zymmfj5gznQ5u5NEaX19BrYjTDnGjdWKCykGXHgan4s8ZumjfD9OLHnGgkQSgdM3ovovhW2zHpNXfmmzLBz8YPHLNSoC0%2FMQgTC1YeGwH2qms6KDlkwSLqWlRHWKE4waCcUQBlXtjcVwEdhhzNF4Sj6TE7k50SacQgqz79HYgYDZOldIrIoR3GXx8Pc9V3iQZYYdY4obF1Er9CTTe9oefvSHTLkgEuEGchTV0GLmcR94c2U0SeYQaLEG2RhLx99untTfM2FXy0Ayvs1W5woa6aNZ44F0XkVvEDzks%2BPyMVhoY11lD7LUQ%2F%2Fw0RJh%2FsP4W54M1oS1v9Mh42H2HX3jmhQBLt7M42n4mnKbKB5sg148LonzmipT7wspz3GzE570Ar9QkwZQ5FTxVNbTluoEZ7q3MLqEexiBWSRsrGvHVVYxRyj1A45A6xSqGPu7FOc3VwiyyfXND9HJ0V01mpl7gHxWDKgx8z3AdGk5bq1lorFqCXCOAgFmAMg6SSH81M%2F3BwVIf7Vdc78M21%2BbVH7oqqy35UdOFnaApB3rxwq5r1p73u4CUIr2J%2BlSUh7lFV2GKAOJ8vut9zsgtEauaSwuLLBtlH9sRsgszEPV5MOPXpMEGOqUBS1bOu5yqDZDbXDlzOyePM441i4jVOTlVJeY84Ml6JGMXCjGWKiAA6%2BleGCz4THdXx33XlHDP38ntK1%2Ft%2BUa0KM5L0AiR74tofSbGrJU34n5KOxhovsPtd%2BaJDj%2B2Pw8K7PMyg8neQUvY4IQ2zjsniLCDVAjhq7jpha3eNOxVF1Su4BRCidmBCpHek0yZyJWBFfVK2XxPvO0lJgPpVf2Bukqta8Yi&X-Amz-Signature=eeb185a499045e29d71338bc92aff3c4a887bd174b609099bb520f6c6478f314&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLRBTP5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFVKWhcLO1hxbSF%2FRkhDMzKxTwJl29PT8vS4aG4j0IwIgD%2Bx2BDocqB0B1MC4Jj1h0ObiIJred%2FPI1m1kew7eqzMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDB2w1dzenItHzVpgVyrcA%2Fq3uHpRDGgm%2FZ11lciVTw8zymmfj5gznQ5u5NEaX19BrYjTDnGjdWKCykGXHgan4s8ZumjfD9OLHnGgkQSgdM3ovovhW2zHpNXfmmzLBz8YPHLNSoC0%2FMQgTC1YeGwH2qms6KDlkwSLqWlRHWKE4waCcUQBlXtjcVwEdhhzNF4Sj6TE7k50SacQgqz79HYgYDZOldIrIoR3GXx8Pc9V3iQZYYdY4obF1Er9CTTe9oefvSHTLkgEuEGchTV0GLmcR94c2U0SeYQaLEG2RhLx99untTfM2FXy0Ayvs1W5woa6aNZ44F0XkVvEDzks%2BPyMVhoY11lD7LUQ%2F%2Fw0RJh%2FsP4W54M1oS1v9Mh42H2HX3jmhQBLt7M42n4mnKbKB5sg148LonzmipT7wspz3GzE570Ar9QkwZQ5FTxVNbTluoEZ7q3MLqEexiBWSRsrGvHVVYxRyj1A45A6xSqGPu7FOc3VwiyyfXND9HJ0V01mpl7gHxWDKgx8z3AdGk5bq1lorFqCXCOAgFmAMg6SSH81M%2F3BwVIf7Vdc78M21%2BbVH7oqqy35UdOFnaApB3rxwq5r1p73u4CUIr2J%2BlSUh7lFV2GKAOJ8vut9zsgtEauaSwuLLBtlH9sRsgszEPV5MOPXpMEGOqUBS1bOu5yqDZDbXDlzOyePM441i4jVOTlVJeY84Ml6JGMXCjGWKiAA6%2BleGCz4THdXx33XlHDP38ntK1%2Ft%2BUa0KM5L0AiR74tofSbGrJU34n5KOxhovsPtd%2BaJDj%2B2Pw8K7PMyg8neQUvY4IQ2zjsniLCDVAjhq7jpha3eNOxVF1Su4BRCidmBCpHek0yZyJWBFfVK2XxPvO0lJgPpVf2Bukqta8Yi&X-Amz-Signature=96b5495cad9136c1495ee7eb2a2a8baa20bcb91a38feaa9ecd440ae1e6db12c0&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
