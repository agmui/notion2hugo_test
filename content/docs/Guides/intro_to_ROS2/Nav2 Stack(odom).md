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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPCXPGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxKdXZAJzcWDM0tPUjvXYtnxKc1qlRfnt8i30UY7D2wIgUaZbnuhpk0Ae6Im8%2Fb6MU4Sd49at4YQzrSNI%2BSf8BZEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrdiml7wUfYiJYc7CrcA1KnkEFR1tyBoNlyjLOs2fzbK1jM4B1BX6Gc%2BOVIqo56UK2uz2EzqeX7VY4DZS9Y3TIvmbXvM08NEk8Vd51vtFD4iiErtfzA%2FLVH%2BDyk%2FGVjiSzUc%2FshlGvAObiUHJfiXwILXxq6BV6TL4cvY6eu6gEdPyIDYBqZXPG0YaUkvrow7AQyeiRktTKWc2KkbMnjCjaVIQKFUeVhXQWO%2BeZ%2BaQyicE%2BAcOBtIria6CCWIMWyDfrot9V2Es1iuw%2F0jArGlh95uhSBeeeOZIPZ80KblwcqXX%2FbznrAQjcz0kcUWkqCBjRJzuTij4Ka0pbyRQ2Lx4s6%2FcFmk5CvzBXnc6JC8%2BHFyBCFKjZhfYZJ9JhkYy8JuajAfSSv4XTTJDlde1hEoUdTt4RKboVwZNvexlZelQllNheq1d8MSSiENHD0LHMbo6l1ouutypJlMafmNg4OE2CE%2FhBxQODbA9uYn5zFjX4I4%2BN%2B55MdcQp79QXMZ0VKhVK%2FAekenvdS79osJVq0fPlLrJ%2BBO4IWbgR%2BuXFjSnbvJ4O4RSMqJzoRF15vgk%2BoBEwKThz2XrZRARyvXCOtafHIeZQiayeLd%2B6aJNoot2w%2Fuzoc6s%2BozM2KltlU%2FzB7GmzhELwwm5NPITg3MMfGsMEGOqUBApcdTlogLIzISvTHIP4I6A%2BG3C%2B%2B2aXMXXyDhevbyj%2B2m8OIOKVXG3aPCFDjGkHi1LSB1czseOSXU122dr%2BMrxN0gw6vhYUw7j1q%2BRcgs5x%2BMwztPF5ZQf8mligg8uSbno4%2FKlxGA7NHN16eeM1IZHsIPxM927ljDw5gyPknrtOsAw76NqQbHNDfoyklCAvTrGMeNJ%2BVvc7m%2BQ4r7D%2Fn7m%2F5wcjl&X-Amz-Signature=23c70a61c23fa372f81e14cb5c99fcaae4b7f8941e92136a73a47386013d30b3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPCXPGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxKdXZAJzcWDM0tPUjvXYtnxKc1qlRfnt8i30UY7D2wIgUaZbnuhpk0Ae6Im8%2Fb6MU4Sd49at4YQzrSNI%2BSf8BZEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrdiml7wUfYiJYc7CrcA1KnkEFR1tyBoNlyjLOs2fzbK1jM4B1BX6Gc%2BOVIqo56UK2uz2EzqeX7VY4DZS9Y3TIvmbXvM08NEk8Vd51vtFD4iiErtfzA%2FLVH%2BDyk%2FGVjiSzUc%2FshlGvAObiUHJfiXwILXxq6BV6TL4cvY6eu6gEdPyIDYBqZXPG0YaUkvrow7AQyeiRktTKWc2KkbMnjCjaVIQKFUeVhXQWO%2BeZ%2BaQyicE%2BAcOBtIria6CCWIMWyDfrot9V2Es1iuw%2F0jArGlh95uhSBeeeOZIPZ80KblwcqXX%2FbznrAQjcz0kcUWkqCBjRJzuTij4Ka0pbyRQ2Lx4s6%2FcFmk5CvzBXnc6JC8%2BHFyBCFKjZhfYZJ9JhkYy8JuajAfSSv4XTTJDlde1hEoUdTt4RKboVwZNvexlZelQllNheq1d8MSSiENHD0LHMbo6l1ouutypJlMafmNg4OE2CE%2FhBxQODbA9uYn5zFjX4I4%2BN%2B55MdcQp79QXMZ0VKhVK%2FAekenvdS79osJVq0fPlLrJ%2BBO4IWbgR%2BuXFjSnbvJ4O4RSMqJzoRF15vgk%2BoBEwKThz2XrZRARyvXCOtafHIeZQiayeLd%2B6aJNoot2w%2Fuzoc6s%2BozM2KltlU%2FzB7GmzhELwwm5NPITg3MMfGsMEGOqUBApcdTlogLIzISvTHIP4I6A%2BG3C%2B%2B2aXMXXyDhevbyj%2B2m8OIOKVXG3aPCFDjGkHi1LSB1czseOSXU122dr%2BMrxN0gw6vhYUw7j1q%2BRcgs5x%2BMwztPF5ZQf8mligg8uSbno4%2FKlxGA7NHN16eeM1IZHsIPxM927ljDw5gyPknrtOsAw76NqQbHNDfoyklCAvTrGMeNJ%2BVvc7m%2BQ4r7D%2Fn7m%2F5wcjl&X-Amz-Signature=311a0326ddd29542dc336f1498e6fe76d2384decb796c2d3bbe8ed5dbf0e50bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPCXPGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxKdXZAJzcWDM0tPUjvXYtnxKc1qlRfnt8i30UY7D2wIgUaZbnuhpk0Ae6Im8%2Fb6MU4Sd49at4YQzrSNI%2BSf8BZEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrdiml7wUfYiJYc7CrcA1KnkEFR1tyBoNlyjLOs2fzbK1jM4B1BX6Gc%2BOVIqo56UK2uz2EzqeX7VY4DZS9Y3TIvmbXvM08NEk8Vd51vtFD4iiErtfzA%2FLVH%2BDyk%2FGVjiSzUc%2FshlGvAObiUHJfiXwILXxq6BV6TL4cvY6eu6gEdPyIDYBqZXPG0YaUkvrow7AQyeiRktTKWc2KkbMnjCjaVIQKFUeVhXQWO%2BeZ%2BaQyicE%2BAcOBtIria6CCWIMWyDfrot9V2Es1iuw%2F0jArGlh95uhSBeeeOZIPZ80KblwcqXX%2FbznrAQjcz0kcUWkqCBjRJzuTij4Ka0pbyRQ2Lx4s6%2FcFmk5CvzBXnc6JC8%2BHFyBCFKjZhfYZJ9JhkYy8JuajAfSSv4XTTJDlde1hEoUdTt4RKboVwZNvexlZelQllNheq1d8MSSiENHD0LHMbo6l1ouutypJlMafmNg4OE2CE%2FhBxQODbA9uYn5zFjX4I4%2BN%2B55MdcQp79QXMZ0VKhVK%2FAekenvdS79osJVq0fPlLrJ%2BBO4IWbgR%2BuXFjSnbvJ4O4RSMqJzoRF15vgk%2BoBEwKThz2XrZRARyvXCOtafHIeZQiayeLd%2B6aJNoot2w%2Fuzoc6s%2BozM2KltlU%2FzB7GmzhELwwm5NPITg3MMfGsMEGOqUBApcdTlogLIzISvTHIP4I6A%2BG3C%2B%2B2aXMXXyDhevbyj%2B2m8OIOKVXG3aPCFDjGkHi1LSB1czseOSXU122dr%2BMrxN0gw6vhYUw7j1q%2BRcgs5x%2BMwztPF5ZQf8mligg8uSbno4%2FKlxGA7NHN16eeM1IZHsIPxM927ljDw5gyPknrtOsAw76NqQbHNDfoyklCAvTrGMeNJ%2BVvc7m%2BQ4r7D%2Fn7m%2F5wcjl&X-Amz-Signature=7decf068bde9a0743bceb8d524d4eb910a8f04fa4b8dd57c1437588fe78eaa18&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPCXPGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxKdXZAJzcWDM0tPUjvXYtnxKc1qlRfnt8i30UY7D2wIgUaZbnuhpk0Ae6Im8%2Fb6MU4Sd49at4YQzrSNI%2BSf8BZEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrdiml7wUfYiJYc7CrcA1KnkEFR1tyBoNlyjLOs2fzbK1jM4B1BX6Gc%2BOVIqo56UK2uz2EzqeX7VY4DZS9Y3TIvmbXvM08NEk8Vd51vtFD4iiErtfzA%2FLVH%2BDyk%2FGVjiSzUc%2FshlGvAObiUHJfiXwILXxq6BV6TL4cvY6eu6gEdPyIDYBqZXPG0YaUkvrow7AQyeiRktTKWc2KkbMnjCjaVIQKFUeVhXQWO%2BeZ%2BaQyicE%2BAcOBtIria6CCWIMWyDfrot9V2Es1iuw%2F0jArGlh95uhSBeeeOZIPZ80KblwcqXX%2FbznrAQjcz0kcUWkqCBjRJzuTij4Ka0pbyRQ2Lx4s6%2FcFmk5CvzBXnc6JC8%2BHFyBCFKjZhfYZJ9JhkYy8JuajAfSSv4XTTJDlde1hEoUdTt4RKboVwZNvexlZelQllNheq1d8MSSiENHD0LHMbo6l1ouutypJlMafmNg4OE2CE%2FhBxQODbA9uYn5zFjX4I4%2BN%2B55MdcQp79QXMZ0VKhVK%2FAekenvdS79osJVq0fPlLrJ%2BBO4IWbgR%2BuXFjSnbvJ4O4RSMqJzoRF15vgk%2BoBEwKThz2XrZRARyvXCOtafHIeZQiayeLd%2B6aJNoot2w%2Fuzoc6s%2BozM2KltlU%2FzB7GmzhELwwm5NPITg3MMfGsMEGOqUBApcdTlogLIzISvTHIP4I6A%2BG3C%2B%2B2aXMXXyDhevbyj%2B2m8OIOKVXG3aPCFDjGkHi1LSB1czseOSXU122dr%2BMrxN0gw6vhYUw7j1q%2BRcgs5x%2BMwztPF5ZQf8mligg8uSbno4%2FKlxGA7NHN16eeM1IZHsIPxM927ljDw5gyPknrtOsAw76NqQbHNDfoyklCAvTrGMeNJ%2BVvc7m%2BQ4r7D%2Fn7m%2F5wcjl&X-Amz-Signature=652e969cdae8e90a59e03dec57b7bf00e26da330ee3d0f2f640e8df43034e877&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPCXPGN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfxKdXZAJzcWDM0tPUjvXYtnxKc1qlRfnt8i30UY7D2wIgUaZbnuhpk0Ae6Im8%2Fb6MU4Sd49at4YQzrSNI%2BSf8BZEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrdiml7wUfYiJYc7CrcA1KnkEFR1tyBoNlyjLOs2fzbK1jM4B1BX6Gc%2BOVIqo56UK2uz2EzqeX7VY4DZS9Y3TIvmbXvM08NEk8Vd51vtFD4iiErtfzA%2FLVH%2BDyk%2FGVjiSzUc%2FshlGvAObiUHJfiXwILXxq6BV6TL4cvY6eu6gEdPyIDYBqZXPG0YaUkvrow7AQyeiRktTKWc2KkbMnjCjaVIQKFUeVhXQWO%2BeZ%2BaQyicE%2BAcOBtIria6CCWIMWyDfrot9V2Es1iuw%2F0jArGlh95uhSBeeeOZIPZ80KblwcqXX%2FbznrAQjcz0kcUWkqCBjRJzuTij4Ka0pbyRQ2Lx4s6%2FcFmk5CvzBXnc6JC8%2BHFyBCFKjZhfYZJ9JhkYy8JuajAfSSv4XTTJDlde1hEoUdTt4RKboVwZNvexlZelQllNheq1d8MSSiENHD0LHMbo6l1ouutypJlMafmNg4OE2CE%2FhBxQODbA9uYn5zFjX4I4%2BN%2B55MdcQp79QXMZ0VKhVK%2FAekenvdS79osJVq0fPlLrJ%2BBO4IWbgR%2BuXFjSnbvJ4O4RSMqJzoRF15vgk%2BoBEwKThz2XrZRARyvXCOtafHIeZQiayeLd%2B6aJNoot2w%2Fuzoc6s%2BozM2KltlU%2FzB7GmzhELwwm5NPITg3MMfGsMEGOqUBApcdTlogLIzISvTHIP4I6A%2BG3C%2B%2B2aXMXXyDhevbyj%2B2m8OIOKVXG3aPCFDjGkHi1LSB1czseOSXU122dr%2BMrxN0gw6vhYUw7j1q%2BRcgs5x%2BMwztPF5ZQf8mligg8uSbno4%2FKlxGA7NHN16eeM1IZHsIPxM927ljDw5gyPknrtOsAw76NqQbHNDfoyklCAvTrGMeNJ%2BVvc7m%2BQ4r7D%2Fn7m%2F5wcjl&X-Amz-Signature=a52cea94788a0e3dd072964f920d3e4635c3ae03a5d96b806f99bd8f46327c00&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
