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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDPNK3C%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD610N6CmN74vihIe1LBiGB7kyvl61NUrV9bNoSCZVkMwIgfjm2p0yHUCyjqX1JqrWeehczs%2BthAxn8etDKvMxV5YQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOzgHA78Bq4d9eU5ircAwFLdneHTD43gtfIDHw3kPzpdEF02yqqKiG6ToJQGsib2TdsBWnSc0E6GiR8N%2Brf85hPd7C0UphMqnTUn5ENv%2FNYNykevZq6bna1yPedR80CKNO4M7%2FAq%2FI0Ap%2BR2gQ2YxKBjXZeZgRcWWAl1ZdNckEc52ecw%2Fa0V2LcA2YK9lonXkaF9Ka8jIAftq%2BoxnpkurO%2Fa8MMQ%2FPlMapnsid%2F7l%2FyfXNRyEWYP5hLJp90uaaMKr6cvO56cdNAKzIPYOTCoq9wnSaJWqiUnggbrUTupLSBalozdyvD%2Bl0AEvXT1rgBMQUMO7yMXqNo3PKUPiqvWTH8vJE8n8IboHAx8aRH%2Bx%2B9i3CZDicFbwPVPc9cN0dBvZfTEJ15P23oBVPx2%2B2Bhrx9jwKXeOOfu0pYEDRn2w13aP96E%2B2rThFv9OI8JF%2FzYypZCUgh%2B2hRs5NrbLYxxJt24S4Gm%2FU6oF8LKiKA7PWRHvU%2B8tZ2tBHH5q3rlgGRSwir1Nr5D%2FmibojfgLp5hGfR10hnN7bIcLEviYpA1IE2zKfBT%2Fkm7308egsAxh%2BP%2B%2BT53oyX0U10JmRq6iQkHeNVSE5RTj191aETcx8hC4JQpDnyfU340IZoG2xsrfob2%2BqqM%2BAJogaNX491MKbivMEGOqUBSv8SOAHteoP41VzguVULxPBZhufSM3NzAY6C0oJ90%2Be4P7BUDtqiGJQN%2FdvOKvxwMJjV4NvIzz7KSZUWcn1YGXDdNFC6ri%2FaXwQsB3lC2gIsHMflqqk3iLF8c3zniv6iTYyk%2FYTIg1Qnaw5n4kc9NNLqVsptfwA%2F6LNIJA1jvidJW699CrE3gcPg7ooIzmvEIsB%2BVo2WceF%2B8bkLkHmJBfarVJkX&X-Amz-Signature=97eb189415d5330c081c422a44157faa24bef6624d796822d50862b7374b9b04&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDPNK3C%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD610N6CmN74vihIe1LBiGB7kyvl61NUrV9bNoSCZVkMwIgfjm2p0yHUCyjqX1JqrWeehczs%2BthAxn8etDKvMxV5YQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOzgHA78Bq4d9eU5ircAwFLdneHTD43gtfIDHw3kPzpdEF02yqqKiG6ToJQGsib2TdsBWnSc0E6GiR8N%2Brf85hPd7C0UphMqnTUn5ENv%2FNYNykevZq6bna1yPedR80CKNO4M7%2FAq%2FI0Ap%2BR2gQ2YxKBjXZeZgRcWWAl1ZdNckEc52ecw%2Fa0V2LcA2YK9lonXkaF9Ka8jIAftq%2BoxnpkurO%2Fa8MMQ%2FPlMapnsid%2F7l%2FyfXNRyEWYP5hLJp90uaaMKr6cvO56cdNAKzIPYOTCoq9wnSaJWqiUnggbrUTupLSBalozdyvD%2Bl0AEvXT1rgBMQUMO7yMXqNo3PKUPiqvWTH8vJE8n8IboHAx8aRH%2Bx%2B9i3CZDicFbwPVPc9cN0dBvZfTEJ15P23oBVPx2%2B2Bhrx9jwKXeOOfu0pYEDRn2w13aP96E%2B2rThFv9OI8JF%2FzYypZCUgh%2B2hRs5NrbLYxxJt24S4Gm%2FU6oF8LKiKA7PWRHvU%2B8tZ2tBHH5q3rlgGRSwir1Nr5D%2FmibojfgLp5hGfR10hnN7bIcLEviYpA1IE2zKfBT%2Fkm7308egsAxh%2BP%2B%2BT53oyX0U10JmRq6iQkHeNVSE5RTj191aETcx8hC4JQpDnyfU340IZoG2xsrfob2%2BqqM%2BAJogaNX491MKbivMEGOqUBSv8SOAHteoP41VzguVULxPBZhufSM3NzAY6C0oJ90%2Be4P7BUDtqiGJQN%2FdvOKvxwMJjV4NvIzz7KSZUWcn1YGXDdNFC6ri%2FaXwQsB3lC2gIsHMflqqk3iLF8c3zniv6iTYyk%2FYTIg1Qnaw5n4kc9NNLqVsptfwA%2F6LNIJA1jvidJW699CrE3gcPg7ooIzmvEIsB%2BVo2WceF%2B8bkLkHmJBfarVJkX&X-Amz-Signature=c435eb68efe9547fb234231707792db6b52082e004ae780a05b7d355cfd418d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDPNK3C%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD610N6CmN74vihIe1LBiGB7kyvl61NUrV9bNoSCZVkMwIgfjm2p0yHUCyjqX1JqrWeehczs%2BthAxn8etDKvMxV5YQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOzgHA78Bq4d9eU5ircAwFLdneHTD43gtfIDHw3kPzpdEF02yqqKiG6ToJQGsib2TdsBWnSc0E6GiR8N%2Brf85hPd7C0UphMqnTUn5ENv%2FNYNykevZq6bna1yPedR80CKNO4M7%2FAq%2FI0Ap%2BR2gQ2YxKBjXZeZgRcWWAl1ZdNckEc52ecw%2Fa0V2LcA2YK9lonXkaF9Ka8jIAftq%2BoxnpkurO%2Fa8MMQ%2FPlMapnsid%2F7l%2FyfXNRyEWYP5hLJp90uaaMKr6cvO56cdNAKzIPYOTCoq9wnSaJWqiUnggbrUTupLSBalozdyvD%2Bl0AEvXT1rgBMQUMO7yMXqNo3PKUPiqvWTH8vJE8n8IboHAx8aRH%2Bx%2B9i3CZDicFbwPVPc9cN0dBvZfTEJ15P23oBVPx2%2B2Bhrx9jwKXeOOfu0pYEDRn2w13aP96E%2B2rThFv9OI8JF%2FzYypZCUgh%2B2hRs5NrbLYxxJt24S4Gm%2FU6oF8LKiKA7PWRHvU%2B8tZ2tBHH5q3rlgGRSwir1Nr5D%2FmibojfgLp5hGfR10hnN7bIcLEviYpA1IE2zKfBT%2Fkm7308egsAxh%2BP%2B%2BT53oyX0U10JmRq6iQkHeNVSE5RTj191aETcx8hC4JQpDnyfU340IZoG2xsrfob2%2BqqM%2BAJogaNX491MKbivMEGOqUBSv8SOAHteoP41VzguVULxPBZhufSM3NzAY6C0oJ90%2Be4P7BUDtqiGJQN%2FdvOKvxwMJjV4NvIzz7KSZUWcn1YGXDdNFC6ri%2FaXwQsB3lC2gIsHMflqqk3iLF8c3zniv6iTYyk%2FYTIg1Qnaw5n4kc9NNLqVsptfwA%2F6LNIJA1jvidJW699CrE3gcPg7ooIzmvEIsB%2BVo2WceF%2B8bkLkHmJBfarVJkX&X-Amz-Signature=4b0df58234247c8db08848d5e862b17587461d89e59d2e60656cc226f8e663f8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDPNK3C%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD610N6CmN74vihIe1LBiGB7kyvl61NUrV9bNoSCZVkMwIgfjm2p0yHUCyjqX1JqrWeehczs%2BthAxn8etDKvMxV5YQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOzgHA78Bq4d9eU5ircAwFLdneHTD43gtfIDHw3kPzpdEF02yqqKiG6ToJQGsib2TdsBWnSc0E6GiR8N%2Brf85hPd7C0UphMqnTUn5ENv%2FNYNykevZq6bna1yPedR80CKNO4M7%2FAq%2FI0Ap%2BR2gQ2YxKBjXZeZgRcWWAl1ZdNckEc52ecw%2Fa0V2LcA2YK9lonXkaF9Ka8jIAftq%2BoxnpkurO%2Fa8MMQ%2FPlMapnsid%2F7l%2FyfXNRyEWYP5hLJp90uaaMKr6cvO56cdNAKzIPYOTCoq9wnSaJWqiUnggbrUTupLSBalozdyvD%2Bl0AEvXT1rgBMQUMO7yMXqNo3PKUPiqvWTH8vJE8n8IboHAx8aRH%2Bx%2B9i3CZDicFbwPVPc9cN0dBvZfTEJ15P23oBVPx2%2B2Bhrx9jwKXeOOfu0pYEDRn2w13aP96E%2B2rThFv9OI8JF%2FzYypZCUgh%2B2hRs5NrbLYxxJt24S4Gm%2FU6oF8LKiKA7PWRHvU%2B8tZ2tBHH5q3rlgGRSwir1Nr5D%2FmibojfgLp5hGfR10hnN7bIcLEviYpA1IE2zKfBT%2Fkm7308egsAxh%2BP%2B%2BT53oyX0U10JmRq6iQkHeNVSE5RTj191aETcx8hC4JQpDnyfU340IZoG2xsrfob2%2BqqM%2BAJogaNX491MKbivMEGOqUBSv8SOAHteoP41VzguVULxPBZhufSM3NzAY6C0oJ90%2Be4P7BUDtqiGJQN%2FdvOKvxwMJjV4NvIzz7KSZUWcn1YGXDdNFC6ri%2FaXwQsB3lC2gIsHMflqqk3iLF8c3zniv6iTYyk%2FYTIg1Qnaw5n4kc9NNLqVsptfwA%2F6LNIJA1jvidJW699CrE3gcPg7ooIzmvEIsB%2BVo2WceF%2B8bkLkHmJBfarVJkX&X-Amz-Signature=8cc7065a13587a03568a72c4c816f71beab2d4ba2bd4d537b83631a9bbb5c72d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDPNK3C%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD610N6CmN74vihIe1LBiGB7kyvl61NUrV9bNoSCZVkMwIgfjm2p0yHUCyjqX1JqrWeehczs%2BthAxn8etDKvMxV5YQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOzgHA78Bq4d9eU5ircAwFLdneHTD43gtfIDHw3kPzpdEF02yqqKiG6ToJQGsib2TdsBWnSc0E6GiR8N%2Brf85hPd7C0UphMqnTUn5ENv%2FNYNykevZq6bna1yPedR80CKNO4M7%2FAq%2FI0Ap%2BR2gQ2YxKBjXZeZgRcWWAl1ZdNckEc52ecw%2Fa0V2LcA2YK9lonXkaF9Ka8jIAftq%2BoxnpkurO%2Fa8MMQ%2FPlMapnsid%2F7l%2FyfXNRyEWYP5hLJp90uaaMKr6cvO56cdNAKzIPYOTCoq9wnSaJWqiUnggbrUTupLSBalozdyvD%2Bl0AEvXT1rgBMQUMO7yMXqNo3PKUPiqvWTH8vJE8n8IboHAx8aRH%2Bx%2B9i3CZDicFbwPVPc9cN0dBvZfTEJ15P23oBVPx2%2B2Bhrx9jwKXeOOfu0pYEDRn2w13aP96E%2B2rThFv9OI8JF%2FzYypZCUgh%2B2hRs5NrbLYxxJt24S4Gm%2FU6oF8LKiKA7PWRHvU%2B8tZ2tBHH5q3rlgGRSwir1Nr5D%2FmibojfgLp5hGfR10hnN7bIcLEviYpA1IE2zKfBT%2Fkm7308egsAxh%2BP%2B%2BT53oyX0U10JmRq6iQkHeNVSE5RTj191aETcx8hC4JQpDnyfU340IZoG2xsrfob2%2BqqM%2BAJogaNX491MKbivMEGOqUBSv8SOAHteoP41VzguVULxPBZhufSM3NzAY6C0oJ90%2Be4P7BUDtqiGJQN%2FdvOKvxwMJjV4NvIzz7KSZUWcn1YGXDdNFC6ri%2FaXwQsB3lC2gIsHMflqqk3iLF8c3zniv6iTYyk%2FYTIg1Qnaw5n4kc9NNLqVsptfwA%2F6LNIJA1jvidJW699CrE3gcPg7ooIzmvEIsB%2BVo2WceF%2B8bkLkHmJBfarVJkX&X-Amz-Signature=83955b95c4b5f75749eff3484a0013c9c1b12ba16245d76ed19a2cabf2d77324&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
