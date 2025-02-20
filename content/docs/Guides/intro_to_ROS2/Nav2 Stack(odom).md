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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPEETTV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdG1WuDAjiVvc2tUVjmaSYCOzDHRUpF8j%2FeatX1wXVsAiEApVhhSWp56vtOlxQcu%2B98EDQHsJDTuNciQ2ovHOPAA8QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1hvCCJj6tf%2FU7uAircAyOGoQARkrg%2BxsqTWkei4YvzrvYUS%2Fm8O98%2FT5Lb3YKaf78pW7%2Fvr%2BICcCFLYQaeTKwKAZzcc9PpcForsB3pMn757CYifOrZckzla1B%2Fk%2FZUBFK2l%2BhYRNu6X3HfEzitUlAtyYzVGQjoU4bUT5elNnZAATzh%2BsuZ8sSrRm7hH3uS%2BDF0g%2FNHqvEBHRQgnnMkDWXosT5GIPGDQTqtyOVfv8pAcaci3%2BKXXs1lew2UZfChIJybvHtLMMdYRhKq6Zy9k739HJUqZVHE8H%2F9T%2BZLkVfBMdLg0eQdbamvfaKRQyCj57Bp992vuvAaqwjypk9mcvTaUgnx0woNpG94xr0pPakzLXMcTcrZCoZGhWEQdF505trw8d7BoY618428IR1bibZe8pUih3ZezdGUeuKRMgBs6h3sRLw1qKKCW%2FnDcK3Ksy3IKA3zC0NXguXeZhT07KSEJ9O4c%2B45tQy8WBoawmwoBKyYx3tB99Fh718uHR5vfW1LvM71KA0UMnLDtU8l1rKZdGa3VmQkQlct9KgsXG2VBa%2B%2BdBa1SSPDv8jgVcZyRFM0x8YNZ%2FJgHIGMK21c7oeMzTsgMeLMLwZPfMjkSPB6Hp4bVqOd5S6YAKSecVP7K01Xwe3Ks35sNLvFMNym2r0GOqUBwOxlJkdPZhRPeLWEU%2Brn2MYO3PAtApyGm7lgamsc6kGfl3CdZrHj7SiAIpELKsyYRn5J%2FoZMhC6w0arT4CuWhPlk7DDoKez47LBzDl5oaGqyQtO56LJJodvnoH%2BXLEtP22esV%2FCFmpJnCocIyKWzaM5sgIcWw4k0xNFIgsWxrCrngbMjQRZluVyT18YyElxJEkZrnKPDTwRAHPTMI7izFB5wXgU7&X-Amz-Signature=ea1a81d6e77419f1c8c773581f035cfd2ed77355c409104be6e3ee5eaf4cfdac&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPEETTV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdG1WuDAjiVvc2tUVjmaSYCOzDHRUpF8j%2FeatX1wXVsAiEApVhhSWp56vtOlxQcu%2B98EDQHsJDTuNciQ2ovHOPAA8QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1hvCCJj6tf%2FU7uAircAyOGoQARkrg%2BxsqTWkei4YvzrvYUS%2Fm8O98%2FT5Lb3YKaf78pW7%2Fvr%2BICcCFLYQaeTKwKAZzcc9PpcForsB3pMn757CYifOrZckzla1B%2Fk%2FZUBFK2l%2BhYRNu6X3HfEzitUlAtyYzVGQjoU4bUT5elNnZAATzh%2BsuZ8sSrRm7hH3uS%2BDF0g%2FNHqvEBHRQgnnMkDWXosT5GIPGDQTqtyOVfv8pAcaci3%2BKXXs1lew2UZfChIJybvHtLMMdYRhKq6Zy9k739HJUqZVHE8H%2F9T%2BZLkVfBMdLg0eQdbamvfaKRQyCj57Bp992vuvAaqwjypk9mcvTaUgnx0woNpG94xr0pPakzLXMcTcrZCoZGhWEQdF505trw8d7BoY618428IR1bibZe8pUih3ZezdGUeuKRMgBs6h3sRLw1qKKCW%2FnDcK3Ksy3IKA3zC0NXguXeZhT07KSEJ9O4c%2B45tQy8WBoawmwoBKyYx3tB99Fh718uHR5vfW1LvM71KA0UMnLDtU8l1rKZdGa3VmQkQlct9KgsXG2VBa%2B%2BdBa1SSPDv8jgVcZyRFM0x8YNZ%2FJgHIGMK21c7oeMzTsgMeLMLwZPfMjkSPB6Hp4bVqOd5S6YAKSecVP7K01Xwe3Ks35sNLvFMNym2r0GOqUBwOxlJkdPZhRPeLWEU%2Brn2MYO3PAtApyGm7lgamsc6kGfl3CdZrHj7SiAIpELKsyYRn5J%2FoZMhC6w0arT4CuWhPlk7DDoKez47LBzDl5oaGqyQtO56LJJodvnoH%2BXLEtP22esV%2FCFmpJnCocIyKWzaM5sgIcWw4k0xNFIgsWxrCrngbMjQRZluVyT18YyElxJEkZrnKPDTwRAHPTMI7izFB5wXgU7&X-Amz-Signature=1a6c5d0194546050e7f37bc9299ca6289d0ad40c9e464bebfc29b33a94656a97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPEETTV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdG1WuDAjiVvc2tUVjmaSYCOzDHRUpF8j%2FeatX1wXVsAiEApVhhSWp56vtOlxQcu%2B98EDQHsJDTuNciQ2ovHOPAA8QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1hvCCJj6tf%2FU7uAircAyOGoQARkrg%2BxsqTWkei4YvzrvYUS%2Fm8O98%2FT5Lb3YKaf78pW7%2Fvr%2BICcCFLYQaeTKwKAZzcc9PpcForsB3pMn757CYifOrZckzla1B%2Fk%2FZUBFK2l%2BhYRNu6X3HfEzitUlAtyYzVGQjoU4bUT5elNnZAATzh%2BsuZ8sSrRm7hH3uS%2BDF0g%2FNHqvEBHRQgnnMkDWXosT5GIPGDQTqtyOVfv8pAcaci3%2BKXXs1lew2UZfChIJybvHtLMMdYRhKq6Zy9k739HJUqZVHE8H%2F9T%2BZLkVfBMdLg0eQdbamvfaKRQyCj57Bp992vuvAaqwjypk9mcvTaUgnx0woNpG94xr0pPakzLXMcTcrZCoZGhWEQdF505trw8d7BoY618428IR1bibZe8pUih3ZezdGUeuKRMgBs6h3sRLw1qKKCW%2FnDcK3Ksy3IKA3zC0NXguXeZhT07KSEJ9O4c%2B45tQy8WBoawmwoBKyYx3tB99Fh718uHR5vfW1LvM71KA0UMnLDtU8l1rKZdGa3VmQkQlct9KgsXG2VBa%2B%2BdBa1SSPDv8jgVcZyRFM0x8YNZ%2FJgHIGMK21c7oeMzTsgMeLMLwZPfMjkSPB6Hp4bVqOd5S6YAKSecVP7K01Xwe3Ks35sNLvFMNym2r0GOqUBwOxlJkdPZhRPeLWEU%2Brn2MYO3PAtApyGm7lgamsc6kGfl3CdZrHj7SiAIpELKsyYRn5J%2FoZMhC6w0arT4CuWhPlk7DDoKez47LBzDl5oaGqyQtO56LJJodvnoH%2BXLEtP22esV%2FCFmpJnCocIyKWzaM5sgIcWw4k0xNFIgsWxrCrngbMjQRZluVyT18YyElxJEkZrnKPDTwRAHPTMI7izFB5wXgU7&X-Amz-Signature=198941495ac82b4bfb2299f0577b91604c8d53f59d9f5730472090f0bcf358cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPEETTV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdG1WuDAjiVvc2tUVjmaSYCOzDHRUpF8j%2FeatX1wXVsAiEApVhhSWp56vtOlxQcu%2B98EDQHsJDTuNciQ2ovHOPAA8QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1hvCCJj6tf%2FU7uAircAyOGoQARkrg%2BxsqTWkei4YvzrvYUS%2Fm8O98%2FT5Lb3YKaf78pW7%2Fvr%2BICcCFLYQaeTKwKAZzcc9PpcForsB3pMn757CYifOrZckzla1B%2Fk%2FZUBFK2l%2BhYRNu6X3HfEzitUlAtyYzVGQjoU4bUT5elNnZAATzh%2BsuZ8sSrRm7hH3uS%2BDF0g%2FNHqvEBHRQgnnMkDWXosT5GIPGDQTqtyOVfv8pAcaci3%2BKXXs1lew2UZfChIJybvHtLMMdYRhKq6Zy9k739HJUqZVHE8H%2F9T%2BZLkVfBMdLg0eQdbamvfaKRQyCj57Bp992vuvAaqwjypk9mcvTaUgnx0woNpG94xr0pPakzLXMcTcrZCoZGhWEQdF505trw8d7BoY618428IR1bibZe8pUih3ZezdGUeuKRMgBs6h3sRLw1qKKCW%2FnDcK3Ksy3IKA3zC0NXguXeZhT07KSEJ9O4c%2B45tQy8WBoawmwoBKyYx3tB99Fh718uHR5vfW1LvM71KA0UMnLDtU8l1rKZdGa3VmQkQlct9KgsXG2VBa%2B%2BdBa1SSPDv8jgVcZyRFM0x8YNZ%2FJgHIGMK21c7oeMzTsgMeLMLwZPfMjkSPB6Hp4bVqOd5S6YAKSecVP7K01Xwe3Ks35sNLvFMNym2r0GOqUBwOxlJkdPZhRPeLWEU%2Brn2MYO3PAtApyGm7lgamsc6kGfl3CdZrHj7SiAIpELKsyYRn5J%2FoZMhC6w0arT4CuWhPlk7DDoKez47LBzDl5oaGqyQtO56LJJodvnoH%2BXLEtP22esV%2FCFmpJnCocIyKWzaM5sgIcWw4k0xNFIgsWxrCrngbMjQRZluVyT18YyElxJEkZrnKPDTwRAHPTMI7izFB5wXgU7&X-Amz-Signature=dfb2692661cf4236464d1797a242ea13d0c939dbc4b52341f554bd710803aa62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPEETTV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdG1WuDAjiVvc2tUVjmaSYCOzDHRUpF8j%2FeatX1wXVsAiEApVhhSWp56vtOlxQcu%2B98EDQHsJDTuNciQ2ovHOPAA8QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1hvCCJj6tf%2FU7uAircAyOGoQARkrg%2BxsqTWkei4YvzrvYUS%2Fm8O98%2FT5Lb3YKaf78pW7%2Fvr%2BICcCFLYQaeTKwKAZzcc9PpcForsB3pMn757CYifOrZckzla1B%2Fk%2FZUBFK2l%2BhYRNu6X3HfEzitUlAtyYzVGQjoU4bUT5elNnZAATzh%2BsuZ8sSrRm7hH3uS%2BDF0g%2FNHqvEBHRQgnnMkDWXosT5GIPGDQTqtyOVfv8pAcaci3%2BKXXs1lew2UZfChIJybvHtLMMdYRhKq6Zy9k739HJUqZVHE8H%2F9T%2BZLkVfBMdLg0eQdbamvfaKRQyCj57Bp992vuvAaqwjypk9mcvTaUgnx0woNpG94xr0pPakzLXMcTcrZCoZGhWEQdF505trw8d7BoY618428IR1bibZe8pUih3ZezdGUeuKRMgBs6h3sRLw1qKKCW%2FnDcK3Ksy3IKA3zC0NXguXeZhT07KSEJ9O4c%2B45tQy8WBoawmwoBKyYx3tB99Fh718uHR5vfW1LvM71KA0UMnLDtU8l1rKZdGa3VmQkQlct9KgsXG2VBa%2B%2BdBa1SSPDv8jgVcZyRFM0x8YNZ%2FJgHIGMK21c7oeMzTsgMeLMLwZPfMjkSPB6Hp4bVqOd5S6YAKSecVP7K01Xwe3Ks35sNLvFMNym2r0GOqUBwOxlJkdPZhRPeLWEU%2Brn2MYO3PAtApyGm7lgamsc6kGfl3CdZrHj7SiAIpELKsyYRn5J%2FoZMhC6w0arT4CuWhPlk7DDoKez47LBzDl5oaGqyQtO56LJJodvnoH%2BXLEtP22esV%2FCFmpJnCocIyKWzaM5sgIcWw4k0xNFIgsWxrCrngbMjQRZluVyT18YyElxJEkZrnKPDTwRAHPTMI7izFB5wXgU7&X-Amz-Signature=53dbfeb627908291ee057514ad74f362a0d6622da3ab2d4502d2af31ee5ca8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
