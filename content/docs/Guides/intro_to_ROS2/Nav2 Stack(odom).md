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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJL3Y75%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE1NHcH1vczAXb6g0ZIR0GtIvUsffrYaGDhIiPhranXAiB7kzK9chBC4x%2FDxdawqhPRsKgrJueHIO5C88nP5bo7bSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5vfXmddZCB%2FciroKtwDDSJd6pu8iXc4k6P8QyCeIXum01S7r5B6ENFUN0WFd8S7DcqMwqSRU3YRN6Uxq01%2FHciKP8hXAVS4K8ylq5I8KbET%2F1F6KCBzcn5ZcPVXeJFESR2RJ92lEuCOxkdpc0RT0Ck6TYQxzvHZjDAI9OZFpp6V8leyXntZgSbj1brN6AXe5OkmUASNEGRqK6gofw%2FYsd3HQjTQvLFJoFHQzAi0TUB0%2FBd5VPz25JIk%2Buak1gKv7s%2BLySvDX3p106E7pAMU1fQheAzKCRQz50XsZECJy84uwgNd8gYtXYMplrWIy1S8Ny%2F%2Fc11NGc7VqVc21dLplPQ86WO%2Fl9sqmqEE04g3ky3lOwD8HhNbQeIVDsPzfpD%2Fp0rUUnDeGk4A48BNCTTTyL7Cxgxs%2FA4ZkD8xwp8A7HAhHVyEn8e2v3H8BGRwpm3tjOjXLI5Kw05WAhjDo1HCb9bhT4vaq%2BSYnlSqPFZQJvF8pkcApH6fRlTuAkkw9mSZwkBFcgYnesNHGUY9dA6%2FBbIzSXdktb8o6vLukQGHzOSKsEtaBfQKtfPGQz2%2BNHFyA9D3vZ4VpC%2Bk3K%2FwRxTQrNR0MciDPIz8yRRr%2Fs9Smn7JNDyUa8hkzVuuRxbx8ns3pBHu6%2FxLpGJelxQwp538vAY6pgGqGmy17jmlBXhk9mc5EPzPy56%2BAsxcxr78QcuRZvq6bWXKcFVemRVF7GtMhJaMBjt0jIiObBmZwMkw9XGmBGjFF3f3s2tH%2Fwd9ayNJugIGtnc48jUqrLKiafrPOTj%2FsTLVyaD%2FMqV81x6tO2I%2Fppzz2UMXBIW4sY%2FUbIbT7gfxX3C46hyxKXH9HQ5QMch5GsSeCa6xm1x9xtLtwcynx3vr1r9IGiGY&X-Amz-Signature=fbde9640dba512ef5ce3508dd45fcc06337242e390379e872d87c6d631b5615f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJL3Y75%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE1NHcH1vczAXb6g0ZIR0GtIvUsffrYaGDhIiPhranXAiB7kzK9chBC4x%2FDxdawqhPRsKgrJueHIO5C88nP5bo7bSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5vfXmddZCB%2FciroKtwDDSJd6pu8iXc4k6P8QyCeIXum01S7r5B6ENFUN0WFd8S7DcqMwqSRU3YRN6Uxq01%2FHciKP8hXAVS4K8ylq5I8KbET%2F1F6KCBzcn5ZcPVXeJFESR2RJ92lEuCOxkdpc0RT0Ck6TYQxzvHZjDAI9OZFpp6V8leyXntZgSbj1brN6AXe5OkmUASNEGRqK6gofw%2FYsd3HQjTQvLFJoFHQzAi0TUB0%2FBd5VPz25JIk%2Buak1gKv7s%2BLySvDX3p106E7pAMU1fQheAzKCRQz50XsZECJy84uwgNd8gYtXYMplrWIy1S8Ny%2F%2Fc11NGc7VqVc21dLplPQ86WO%2Fl9sqmqEE04g3ky3lOwD8HhNbQeIVDsPzfpD%2Fp0rUUnDeGk4A48BNCTTTyL7Cxgxs%2FA4ZkD8xwp8A7HAhHVyEn8e2v3H8BGRwpm3tjOjXLI5Kw05WAhjDo1HCb9bhT4vaq%2BSYnlSqPFZQJvF8pkcApH6fRlTuAkkw9mSZwkBFcgYnesNHGUY9dA6%2FBbIzSXdktb8o6vLukQGHzOSKsEtaBfQKtfPGQz2%2BNHFyA9D3vZ4VpC%2Bk3K%2FwRxTQrNR0MciDPIz8yRRr%2Fs9Smn7JNDyUa8hkzVuuRxbx8ns3pBHu6%2FxLpGJelxQwp538vAY6pgGqGmy17jmlBXhk9mc5EPzPy56%2BAsxcxr78QcuRZvq6bWXKcFVemRVF7GtMhJaMBjt0jIiObBmZwMkw9XGmBGjFF3f3s2tH%2Fwd9ayNJugIGtnc48jUqrLKiafrPOTj%2FsTLVyaD%2FMqV81x6tO2I%2Fppzz2UMXBIW4sY%2FUbIbT7gfxX3C46hyxKXH9HQ5QMch5GsSeCa6xm1x9xtLtwcynx3vr1r9IGiGY&X-Amz-Signature=7f4e5d8cdcbcf55840f6b3454385d9892463b6fdc21f63c215f1892f48f91af1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJL3Y75%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE1NHcH1vczAXb6g0ZIR0GtIvUsffrYaGDhIiPhranXAiB7kzK9chBC4x%2FDxdawqhPRsKgrJueHIO5C88nP5bo7bSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5vfXmddZCB%2FciroKtwDDSJd6pu8iXc4k6P8QyCeIXum01S7r5B6ENFUN0WFd8S7DcqMwqSRU3YRN6Uxq01%2FHciKP8hXAVS4K8ylq5I8KbET%2F1F6KCBzcn5ZcPVXeJFESR2RJ92lEuCOxkdpc0RT0Ck6TYQxzvHZjDAI9OZFpp6V8leyXntZgSbj1brN6AXe5OkmUASNEGRqK6gofw%2FYsd3HQjTQvLFJoFHQzAi0TUB0%2FBd5VPz25JIk%2Buak1gKv7s%2BLySvDX3p106E7pAMU1fQheAzKCRQz50XsZECJy84uwgNd8gYtXYMplrWIy1S8Ny%2F%2Fc11NGc7VqVc21dLplPQ86WO%2Fl9sqmqEE04g3ky3lOwD8HhNbQeIVDsPzfpD%2Fp0rUUnDeGk4A48BNCTTTyL7Cxgxs%2FA4ZkD8xwp8A7HAhHVyEn8e2v3H8BGRwpm3tjOjXLI5Kw05WAhjDo1HCb9bhT4vaq%2BSYnlSqPFZQJvF8pkcApH6fRlTuAkkw9mSZwkBFcgYnesNHGUY9dA6%2FBbIzSXdktb8o6vLukQGHzOSKsEtaBfQKtfPGQz2%2BNHFyA9D3vZ4VpC%2Bk3K%2FwRxTQrNR0MciDPIz8yRRr%2Fs9Smn7JNDyUa8hkzVuuRxbx8ns3pBHu6%2FxLpGJelxQwp538vAY6pgGqGmy17jmlBXhk9mc5EPzPy56%2BAsxcxr78QcuRZvq6bWXKcFVemRVF7GtMhJaMBjt0jIiObBmZwMkw9XGmBGjFF3f3s2tH%2Fwd9ayNJugIGtnc48jUqrLKiafrPOTj%2FsTLVyaD%2FMqV81x6tO2I%2Fppzz2UMXBIW4sY%2FUbIbT7gfxX3C46hyxKXH9HQ5QMch5GsSeCa6xm1x9xtLtwcynx3vr1r9IGiGY&X-Amz-Signature=6aa3018c5aa66f877deaa15143371e6b1d9ee7d75e0f55212460b89aa4713440&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJL3Y75%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE1NHcH1vczAXb6g0ZIR0GtIvUsffrYaGDhIiPhranXAiB7kzK9chBC4x%2FDxdawqhPRsKgrJueHIO5C88nP5bo7bSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5vfXmddZCB%2FciroKtwDDSJd6pu8iXc4k6P8QyCeIXum01S7r5B6ENFUN0WFd8S7DcqMwqSRU3YRN6Uxq01%2FHciKP8hXAVS4K8ylq5I8KbET%2F1F6KCBzcn5ZcPVXeJFESR2RJ92lEuCOxkdpc0RT0Ck6TYQxzvHZjDAI9OZFpp6V8leyXntZgSbj1brN6AXe5OkmUASNEGRqK6gofw%2FYsd3HQjTQvLFJoFHQzAi0TUB0%2FBd5VPz25JIk%2Buak1gKv7s%2BLySvDX3p106E7pAMU1fQheAzKCRQz50XsZECJy84uwgNd8gYtXYMplrWIy1S8Ny%2F%2Fc11NGc7VqVc21dLplPQ86WO%2Fl9sqmqEE04g3ky3lOwD8HhNbQeIVDsPzfpD%2Fp0rUUnDeGk4A48BNCTTTyL7Cxgxs%2FA4ZkD8xwp8A7HAhHVyEn8e2v3H8BGRwpm3tjOjXLI5Kw05WAhjDo1HCb9bhT4vaq%2BSYnlSqPFZQJvF8pkcApH6fRlTuAkkw9mSZwkBFcgYnesNHGUY9dA6%2FBbIzSXdktb8o6vLukQGHzOSKsEtaBfQKtfPGQz2%2BNHFyA9D3vZ4VpC%2Bk3K%2FwRxTQrNR0MciDPIz8yRRr%2Fs9Smn7JNDyUa8hkzVuuRxbx8ns3pBHu6%2FxLpGJelxQwp538vAY6pgGqGmy17jmlBXhk9mc5EPzPy56%2BAsxcxr78QcuRZvq6bWXKcFVemRVF7GtMhJaMBjt0jIiObBmZwMkw9XGmBGjFF3f3s2tH%2Fwd9ayNJugIGtnc48jUqrLKiafrPOTj%2FsTLVyaD%2FMqV81x6tO2I%2Fppzz2UMXBIW4sY%2FUbIbT7gfxX3C46hyxKXH9HQ5QMch5GsSeCa6xm1x9xtLtwcynx3vr1r9IGiGY&X-Amz-Signature=0f00e51fe9d20e4902a71b39cac5e2b02022ee206773d9b6cdce3ad916fb2a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJL3Y75%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEE1NHcH1vczAXb6g0ZIR0GtIvUsffrYaGDhIiPhranXAiB7kzK9chBC4x%2FDxdawqhPRsKgrJueHIO5C88nP5bo7bSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5vfXmddZCB%2FciroKtwDDSJd6pu8iXc4k6P8QyCeIXum01S7r5B6ENFUN0WFd8S7DcqMwqSRU3YRN6Uxq01%2FHciKP8hXAVS4K8ylq5I8KbET%2F1F6KCBzcn5ZcPVXeJFESR2RJ92lEuCOxkdpc0RT0Ck6TYQxzvHZjDAI9OZFpp6V8leyXntZgSbj1brN6AXe5OkmUASNEGRqK6gofw%2FYsd3HQjTQvLFJoFHQzAi0TUB0%2FBd5VPz25JIk%2Buak1gKv7s%2BLySvDX3p106E7pAMU1fQheAzKCRQz50XsZECJy84uwgNd8gYtXYMplrWIy1S8Ny%2F%2Fc11NGc7VqVc21dLplPQ86WO%2Fl9sqmqEE04g3ky3lOwD8HhNbQeIVDsPzfpD%2Fp0rUUnDeGk4A48BNCTTTyL7Cxgxs%2FA4ZkD8xwp8A7HAhHVyEn8e2v3H8BGRwpm3tjOjXLI5Kw05WAhjDo1HCb9bhT4vaq%2BSYnlSqPFZQJvF8pkcApH6fRlTuAkkw9mSZwkBFcgYnesNHGUY9dA6%2FBbIzSXdktb8o6vLukQGHzOSKsEtaBfQKtfPGQz2%2BNHFyA9D3vZ4VpC%2Bk3K%2FwRxTQrNR0MciDPIz8yRRr%2Fs9Smn7JNDyUa8hkzVuuRxbx8ns3pBHu6%2FxLpGJelxQwp538vAY6pgGqGmy17jmlBXhk9mc5EPzPy56%2BAsxcxr78QcuRZvq6bWXKcFVemRVF7GtMhJaMBjt0jIiObBmZwMkw9XGmBGjFF3f3s2tH%2Fwd9ayNJugIGtnc48jUqrLKiafrPOTj%2FsTLVyaD%2FMqV81x6tO2I%2Fppzz2UMXBIW4sY%2FUbIbT7gfxX3C46hyxKXH9HQ5QMch5GsSeCa6xm1x9xtLtwcynx3vr1r9IGiGY&X-Amz-Signature=a1eae2e994d81d614ec1993777b4f08dd2a6e2c9341ea8f18ae0c1af7c3dea09&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
