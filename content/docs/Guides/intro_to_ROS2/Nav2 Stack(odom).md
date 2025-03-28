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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3FW6WL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2FhoD6k4JZtx%2BJfnnpKLzc8msEp804Pm6Bwg9jzBBGwIhANYhjX%2B4ezJrHNtB8y5geB8t%2Bgq%2Fs4xGk%2BOjxEcx%2B2aZKv8DCFgQABoMNjM3NDIzMTgzODA1IgwG%2FHjEc0AMB7yuy5Eq3ANupIOChbflW7MiErs6%2BSH9HjNynYI2IVOXy3rYRLhli%2FEbBlVjfO9UmNEBUchtbfi%2BIEVEw%2FLOSTQ%2Fb6%2FmztTVSVn0ixKBuzkz1i3vhJKrAshRvUwCRqlFKnn%2Bo5jTeqYPMWXfkyygTbf3qdOhket88t2pVj9bydZfhb%2F5KTrI90GfCXcSHk%2FVu3zyIMiZH2RmajmBhARWBFGGw4ftD6BAwR4GujxlyY4WVcBLRoM4tiIlH%2BK9Iom2Wfp2KoDYoYSEl2QDBcbC1T4M%2Bxlr1%2B7KplCaTYOp9LVVhOrmh846Vxcca4KrYsd9Pz08X6o6tjrnonPEp2Qib%2FZv8OMk7HqMZCX%2Br7QNt9cbERh6%2BgqG5apZRoUQphQrc4TIjoNC4UDtekPmczIyKW1sGYfcMN5GMQRvrVxOuqoXWIvXeD4UULBj7qMpTPG8Cl%2BB9gmkNQHFu%2FfJNu0yxmMxCfsgJfM70rTYds8SVBd7R4V7HPszT43mjfoNiCnHtDMYDxsx1VqGeCE6qMc3YlFFZGabu1NMrt2%2BLXNkVv3PMBUDxLAxkRGUMmFRY84AQELu%2Bx99WEOHiSWq6E%2BMj63sOujUNX5Vb5St1Vb%2BJhwGnq9R2AZA%2BoEeFuBbaqIpn4VAWDCEh5m%2FBjqkAa%2B5loKeUz%2BCjgKis6OlLN6Q%2BzXlu%2Bkzu%2BdhhcyarShYReLN3BcDDlEWsLESDwaylUzJcAOpff5Vc25I5n9LdJE6IoI7rCAPCD6q%2FsC8JR54cs1w5oOGv6lik9YM6aMcNuPx0rdg8Sl%2BDkbQvzO8ugYPm0LYggLA%2FXNXWhQmiSm2%2Fm9GXVxSR%2FAwY%2F9xQG1G1yRA8YtU7dAsjmlE5EAwnmHN1v%2Bd&X-Amz-Signature=082b68e68263ae11a51959fed4739294d0c3daca8659fa3d1adda67a39cf8cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3FW6WL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2FhoD6k4JZtx%2BJfnnpKLzc8msEp804Pm6Bwg9jzBBGwIhANYhjX%2B4ezJrHNtB8y5geB8t%2Bgq%2Fs4xGk%2BOjxEcx%2B2aZKv8DCFgQABoMNjM3NDIzMTgzODA1IgwG%2FHjEc0AMB7yuy5Eq3ANupIOChbflW7MiErs6%2BSH9HjNynYI2IVOXy3rYRLhli%2FEbBlVjfO9UmNEBUchtbfi%2BIEVEw%2FLOSTQ%2Fb6%2FmztTVSVn0ixKBuzkz1i3vhJKrAshRvUwCRqlFKnn%2Bo5jTeqYPMWXfkyygTbf3qdOhket88t2pVj9bydZfhb%2F5KTrI90GfCXcSHk%2FVu3zyIMiZH2RmajmBhARWBFGGw4ftD6BAwR4GujxlyY4WVcBLRoM4tiIlH%2BK9Iom2Wfp2KoDYoYSEl2QDBcbC1T4M%2Bxlr1%2B7KplCaTYOp9LVVhOrmh846Vxcca4KrYsd9Pz08X6o6tjrnonPEp2Qib%2FZv8OMk7HqMZCX%2Br7QNt9cbERh6%2BgqG5apZRoUQphQrc4TIjoNC4UDtekPmczIyKW1sGYfcMN5GMQRvrVxOuqoXWIvXeD4UULBj7qMpTPG8Cl%2BB9gmkNQHFu%2FfJNu0yxmMxCfsgJfM70rTYds8SVBd7R4V7HPszT43mjfoNiCnHtDMYDxsx1VqGeCE6qMc3YlFFZGabu1NMrt2%2BLXNkVv3PMBUDxLAxkRGUMmFRY84AQELu%2Bx99WEOHiSWq6E%2BMj63sOujUNX5Vb5St1Vb%2BJhwGnq9R2AZA%2BoEeFuBbaqIpn4VAWDCEh5m%2FBjqkAa%2B5loKeUz%2BCjgKis6OlLN6Q%2BzXlu%2Bkzu%2BdhhcyarShYReLN3BcDDlEWsLESDwaylUzJcAOpff5Vc25I5n9LdJE6IoI7rCAPCD6q%2FsC8JR54cs1w5oOGv6lik9YM6aMcNuPx0rdg8Sl%2BDkbQvzO8ugYPm0LYggLA%2FXNXWhQmiSm2%2Fm9GXVxSR%2FAwY%2F9xQG1G1yRA8YtU7dAsjmlE5EAwnmHN1v%2Bd&X-Amz-Signature=f286db93c18552292fc7c98bedc75f6f50d383ad00c568d9b4879db853402724&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3FW6WL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2FhoD6k4JZtx%2BJfnnpKLzc8msEp804Pm6Bwg9jzBBGwIhANYhjX%2B4ezJrHNtB8y5geB8t%2Bgq%2Fs4xGk%2BOjxEcx%2B2aZKv8DCFgQABoMNjM3NDIzMTgzODA1IgwG%2FHjEc0AMB7yuy5Eq3ANupIOChbflW7MiErs6%2BSH9HjNynYI2IVOXy3rYRLhli%2FEbBlVjfO9UmNEBUchtbfi%2BIEVEw%2FLOSTQ%2Fb6%2FmztTVSVn0ixKBuzkz1i3vhJKrAshRvUwCRqlFKnn%2Bo5jTeqYPMWXfkyygTbf3qdOhket88t2pVj9bydZfhb%2F5KTrI90GfCXcSHk%2FVu3zyIMiZH2RmajmBhARWBFGGw4ftD6BAwR4GujxlyY4WVcBLRoM4tiIlH%2BK9Iom2Wfp2KoDYoYSEl2QDBcbC1T4M%2Bxlr1%2B7KplCaTYOp9LVVhOrmh846Vxcca4KrYsd9Pz08X6o6tjrnonPEp2Qib%2FZv8OMk7HqMZCX%2Br7QNt9cbERh6%2BgqG5apZRoUQphQrc4TIjoNC4UDtekPmczIyKW1sGYfcMN5GMQRvrVxOuqoXWIvXeD4UULBj7qMpTPG8Cl%2BB9gmkNQHFu%2FfJNu0yxmMxCfsgJfM70rTYds8SVBd7R4V7HPszT43mjfoNiCnHtDMYDxsx1VqGeCE6qMc3YlFFZGabu1NMrt2%2BLXNkVv3PMBUDxLAxkRGUMmFRY84AQELu%2Bx99WEOHiSWq6E%2BMj63sOujUNX5Vb5St1Vb%2BJhwGnq9R2AZA%2BoEeFuBbaqIpn4VAWDCEh5m%2FBjqkAa%2B5loKeUz%2BCjgKis6OlLN6Q%2BzXlu%2Bkzu%2BdhhcyarShYReLN3BcDDlEWsLESDwaylUzJcAOpff5Vc25I5n9LdJE6IoI7rCAPCD6q%2FsC8JR54cs1w5oOGv6lik9YM6aMcNuPx0rdg8Sl%2BDkbQvzO8ugYPm0LYggLA%2FXNXWhQmiSm2%2Fm9GXVxSR%2FAwY%2F9xQG1G1yRA8YtU7dAsjmlE5EAwnmHN1v%2Bd&X-Amz-Signature=e5d1a2342b2e0cc3c7b6a476a81d7b9cd8f1ea1d08c97465b7d3b25786c91ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3FW6WL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2FhoD6k4JZtx%2BJfnnpKLzc8msEp804Pm6Bwg9jzBBGwIhANYhjX%2B4ezJrHNtB8y5geB8t%2Bgq%2Fs4xGk%2BOjxEcx%2B2aZKv8DCFgQABoMNjM3NDIzMTgzODA1IgwG%2FHjEc0AMB7yuy5Eq3ANupIOChbflW7MiErs6%2BSH9HjNynYI2IVOXy3rYRLhli%2FEbBlVjfO9UmNEBUchtbfi%2BIEVEw%2FLOSTQ%2Fb6%2FmztTVSVn0ixKBuzkz1i3vhJKrAshRvUwCRqlFKnn%2Bo5jTeqYPMWXfkyygTbf3qdOhket88t2pVj9bydZfhb%2F5KTrI90GfCXcSHk%2FVu3zyIMiZH2RmajmBhARWBFGGw4ftD6BAwR4GujxlyY4WVcBLRoM4tiIlH%2BK9Iom2Wfp2KoDYoYSEl2QDBcbC1T4M%2Bxlr1%2B7KplCaTYOp9LVVhOrmh846Vxcca4KrYsd9Pz08X6o6tjrnonPEp2Qib%2FZv8OMk7HqMZCX%2Br7QNt9cbERh6%2BgqG5apZRoUQphQrc4TIjoNC4UDtekPmczIyKW1sGYfcMN5GMQRvrVxOuqoXWIvXeD4UULBj7qMpTPG8Cl%2BB9gmkNQHFu%2FfJNu0yxmMxCfsgJfM70rTYds8SVBd7R4V7HPszT43mjfoNiCnHtDMYDxsx1VqGeCE6qMc3YlFFZGabu1NMrt2%2BLXNkVv3PMBUDxLAxkRGUMmFRY84AQELu%2Bx99WEOHiSWq6E%2BMj63sOujUNX5Vb5St1Vb%2BJhwGnq9R2AZA%2BoEeFuBbaqIpn4VAWDCEh5m%2FBjqkAa%2B5loKeUz%2BCjgKis6OlLN6Q%2BzXlu%2Bkzu%2BdhhcyarShYReLN3BcDDlEWsLESDwaylUzJcAOpff5Vc25I5n9LdJE6IoI7rCAPCD6q%2FsC8JR54cs1w5oOGv6lik9YM6aMcNuPx0rdg8Sl%2BDkbQvzO8ugYPm0LYggLA%2FXNXWhQmiSm2%2Fm9GXVxSR%2FAwY%2F9xQG1G1yRA8YtU7dAsjmlE5EAwnmHN1v%2Bd&X-Amz-Signature=c5e8ddfd0655384ea7be285f63e37175eb1fccced0a95344365755b43f25f70c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3FW6WL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC%2FhoD6k4JZtx%2BJfnnpKLzc8msEp804Pm6Bwg9jzBBGwIhANYhjX%2B4ezJrHNtB8y5geB8t%2Bgq%2Fs4xGk%2BOjxEcx%2B2aZKv8DCFgQABoMNjM3NDIzMTgzODA1IgwG%2FHjEc0AMB7yuy5Eq3ANupIOChbflW7MiErs6%2BSH9HjNynYI2IVOXy3rYRLhli%2FEbBlVjfO9UmNEBUchtbfi%2BIEVEw%2FLOSTQ%2Fb6%2FmztTVSVn0ixKBuzkz1i3vhJKrAshRvUwCRqlFKnn%2Bo5jTeqYPMWXfkyygTbf3qdOhket88t2pVj9bydZfhb%2F5KTrI90GfCXcSHk%2FVu3zyIMiZH2RmajmBhARWBFGGw4ftD6BAwR4GujxlyY4WVcBLRoM4tiIlH%2BK9Iom2Wfp2KoDYoYSEl2QDBcbC1T4M%2Bxlr1%2B7KplCaTYOp9LVVhOrmh846Vxcca4KrYsd9Pz08X6o6tjrnonPEp2Qib%2FZv8OMk7HqMZCX%2Br7QNt9cbERh6%2BgqG5apZRoUQphQrc4TIjoNC4UDtekPmczIyKW1sGYfcMN5GMQRvrVxOuqoXWIvXeD4UULBj7qMpTPG8Cl%2BB9gmkNQHFu%2FfJNu0yxmMxCfsgJfM70rTYds8SVBd7R4V7HPszT43mjfoNiCnHtDMYDxsx1VqGeCE6qMc3YlFFZGabu1NMrt2%2BLXNkVv3PMBUDxLAxkRGUMmFRY84AQELu%2Bx99WEOHiSWq6E%2BMj63sOujUNX5Vb5St1Vb%2BJhwGnq9R2AZA%2BoEeFuBbaqIpn4VAWDCEh5m%2FBjqkAa%2B5loKeUz%2BCjgKis6OlLN6Q%2BzXlu%2Bkzu%2BdhhcyarShYReLN3BcDDlEWsLESDwaylUzJcAOpff5Vc25I5n9LdJE6IoI7rCAPCD6q%2FsC8JR54cs1w5oOGv6lik9YM6aMcNuPx0rdg8Sl%2BDkbQvzO8ugYPm0LYggLA%2FXNXWhQmiSm2%2Fm9GXVxSR%2FAwY%2F9xQG1G1yRA8YtU7dAsjmlE5EAwnmHN1v%2Bd&X-Amz-Signature=158194b09d916062758e54a75d6c63cba261dbb8b1c46eb8c2e5bb38665373be&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
