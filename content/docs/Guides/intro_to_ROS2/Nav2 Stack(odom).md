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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQQWL3G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBu8VIZ3gAKZOC4%2BSy3NZHYztpSojMK%2FXg49loJN6nvmAiAXUCxe9vuorUHS9EwP1Y%2BU7azkqhtKSWXqHghSCh02oir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM%2FL%2BoCFqBHzw081oEKtwDbzlX59sLf0Hj8S1TqLbLQmhZ3xDF8zggcBzhiiLQ3Zx4UiN%2FWHXi5WtJ5WIc0G8U5rPm52KR%2BOf30DHfMF5b9OBNBGkgqdFr5Nj6LP56pkzv7eRDOw8WVyrdq5Ks4Hj44EqMMsXyHorZleeDX7Bk7txtiAjOC1px%2BdP%2F7PMC39Qx4%2B5en4zw7urQrZ%2F4iPjv3mw0yKRIW3aMzm37%2BdZR1j0wbpNswMExIanUxmuzyb6qvqdLIXEZZn5Pf1gbW5yOwQg6xlbP8oidITJgCTI%2BFbWm4V35jAetaF2Fo1NniVzLIxHHYpreKAN4m0djAGwH6xXnb1%2Fee40kk82ndEhTXkR8HjWjiOz5OGC1U%2BSXKkdU6WRBpAedVfP%2FXfV1efGXs%2FpX2pO3cuc1sx6Iabq58rW%2Fhzz6JQh88KHu5uAZv%2F0sV8CbXfv1O8k8nicoXj2Z5XxZALrktCCNuzQc4SwDSxozBRU5Jd8m7bq7HZ%2B7gULvPlZwPTj8Y8oB2%2BrSVK44Uua1jorOkvFGKitBcHUSgOI%2BTywM7CyFDOTPCz3LOncb18DxLcanzpVABBVq3chEQ%2BkItsfWB42cdDapsWVFl0jybtpxl7A%2BEKXapFUfOa1D93XwL9O3JnYvwlAw2eaawwY6pgFXmw5QfvpKQdWR1in2UucaYYNY1ei8YMylUzBk5dvJxyDPmwYX34TDrwAwttW5ARBiI5jP6x%2BweB2xEsEZbDDoLhrvVZgId%2FdDHmEBI6q7dfFVKlpZmfg2h0bGFZFuDreQZc6%2BwiOlDmpEKCB57LpZMI3496GV5gnNsb96O1GceaCg8pjISfWhARyErSBraW0cyNuXBnzdVJ5mv9fYlzA%2FA94sAXwi&X-Amz-Signature=9eea24d18ec29f82121250ebb20b9caa8fe2f67401d6fc3de18f68fc820284ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQQWL3G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBu8VIZ3gAKZOC4%2BSy3NZHYztpSojMK%2FXg49loJN6nvmAiAXUCxe9vuorUHS9EwP1Y%2BU7azkqhtKSWXqHghSCh02oir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM%2FL%2BoCFqBHzw081oEKtwDbzlX59sLf0Hj8S1TqLbLQmhZ3xDF8zggcBzhiiLQ3Zx4UiN%2FWHXi5WtJ5WIc0G8U5rPm52KR%2BOf30DHfMF5b9OBNBGkgqdFr5Nj6LP56pkzv7eRDOw8WVyrdq5Ks4Hj44EqMMsXyHorZleeDX7Bk7txtiAjOC1px%2BdP%2F7PMC39Qx4%2B5en4zw7urQrZ%2F4iPjv3mw0yKRIW3aMzm37%2BdZR1j0wbpNswMExIanUxmuzyb6qvqdLIXEZZn5Pf1gbW5yOwQg6xlbP8oidITJgCTI%2BFbWm4V35jAetaF2Fo1NniVzLIxHHYpreKAN4m0djAGwH6xXnb1%2Fee40kk82ndEhTXkR8HjWjiOz5OGC1U%2BSXKkdU6WRBpAedVfP%2FXfV1efGXs%2FpX2pO3cuc1sx6Iabq58rW%2Fhzz6JQh88KHu5uAZv%2F0sV8CbXfv1O8k8nicoXj2Z5XxZALrktCCNuzQc4SwDSxozBRU5Jd8m7bq7HZ%2B7gULvPlZwPTj8Y8oB2%2BrSVK44Uua1jorOkvFGKitBcHUSgOI%2BTywM7CyFDOTPCz3LOncb18DxLcanzpVABBVq3chEQ%2BkItsfWB42cdDapsWVFl0jybtpxl7A%2BEKXapFUfOa1D93XwL9O3JnYvwlAw2eaawwY6pgFXmw5QfvpKQdWR1in2UucaYYNY1ei8YMylUzBk5dvJxyDPmwYX34TDrwAwttW5ARBiI5jP6x%2BweB2xEsEZbDDoLhrvVZgId%2FdDHmEBI6q7dfFVKlpZmfg2h0bGFZFuDreQZc6%2BwiOlDmpEKCB57LpZMI3496GV5gnNsb96O1GceaCg8pjISfWhARyErSBraW0cyNuXBnzdVJ5mv9fYlzA%2FA94sAXwi&X-Amz-Signature=e3cc43eec276c3cd649e18ad5b6520c3522fb91c53d10713bb5f09cb601ae708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQQWL3G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBu8VIZ3gAKZOC4%2BSy3NZHYztpSojMK%2FXg49loJN6nvmAiAXUCxe9vuorUHS9EwP1Y%2BU7azkqhtKSWXqHghSCh02oir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM%2FL%2BoCFqBHzw081oEKtwDbzlX59sLf0Hj8S1TqLbLQmhZ3xDF8zggcBzhiiLQ3Zx4UiN%2FWHXi5WtJ5WIc0G8U5rPm52KR%2BOf30DHfMF5b9OBNBGkgqdFr5Nj6LP56pkzv7eRDOw8WVyrdq5Ks4Hj44EqMMsXyHorZleeDX7Bk7txtiAjOC1px%2BdP%2F7PMC39Qx4%2B5en4zw7urQrZ%2F4iPjv3mw0yKRIW3aMzm37%2BdZR1j0wbpNswMExIanUxmuzyb6qvqdLIXEZZn5Pf1gbW5yOwQg6xlbP8oidITJgCTI%2BFbWm4V35jAetaF2Fo1NniVzLIxHHYpreKAN4m0djAGwH6xXnb1%2Fee40kk82ndEhTXkR8HjWjiOz5OGC1U%2BSXKkdU6WRBpAedVfP%2FXfV1efGXs%2FpX2pO3cuc1sx6Iabq58rW%2Fhzz6JQh88KHu5uAZv%2F0sV8CbXfv1O8k8nicoXj2Z5XxZALrktCCNuzQc4SwDSxozBRU5Jd8m7bq7HZ%2B7gULvPlZwPTj8Y8oB2%2BrSVK44Uua1jorOkvFGKitBcHUSgOI%2BTywM7CyFDOTPCz3LOncb18DxLcanzpVABBVq3chEQ%2BkItsfWB42cdDapsWVFl0jybtpxl7A%2BEKXapFUfOa1D93XwL9O3JnYvwlAw2eaawwY6pgFXmw5QfvpKQdWR1in2UucaYYNY1ei8YMylUzBk5dvJxyDPmwYX34TDrwAwttW5ARBiI5jP6x%2BweB2xEsEZbDDoLhrvVZgId%2FdDHmEBI6q7dfFVKlpZmfg2h0bGFZFuDreQZc6%2BwiOlDmpEKCB57LpZMI3496GV5gnNsb96O1GceaCg8pjISfWhARyErSBraW0cyNuXBnzdVJ5mv9fYlzA%2FA94sAXwi&X-Amz-Signature=b7540200be3cb87c7f7730e4d2aecd594bb0d6cf6fa4bbd10b2f1088b6a6bc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQQWL3G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBu8VIZ3gAKZOC4%2BSy3NZHYztpSojMK%2FXg49loJN6nvmAiAXUCxe9vuorUHS9EwP1Y%2BU7azkqhtKSWXqHghSCh02oir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM%2FL%2BoCFqBHzw081oEKtwDbzlX59sLf0Hj8S1TqLbLQmhZ3xDF8zggcBzhiiLQ3Zx4UiN%2FWHXi5WtJ5WIc0G8U5rPm52KR%2BOf30DHfMF5b9OBNBGkgqdFr5Nj6LP56pkzv7eRDOw8WVyrdq5Ks4Hj44EqMMsXyHorZleeDX7Bk7txtiAjOC1px%2BdP%2F7PMC39Qx4%2B5en4zw7urQrZ%2F4iPjv3mw0yKRIW3aMzm37%2BdZR1j0wbpNswMExIanUxmuzyb6qvqdLIXEZZn5Pf1gbW5yOwQg6xlbP8oidITJgCTI%2BFbWm4V35jAetaF2Fo1NniVzLIxHHYpreKAN4m0djAGwH6xXnb1%2Fee40kk82ndEhTXkR8HjWjiOz5OGC1U%2BSXKkdU6WRBpAedVfP%2FXfV1efGXs%2FpX2pO3cuc1sx6Iabq58rW%2Fhzz6JQh88KHu5uAZv%2F0sV8CbXfv1O8k8nicoXj2Z5XxZALrktCCNuzQc4SwDSxozBRU5Jd8m7bq7HZ%2B7gULvPlZwPTj8Y8oB2%2BrSVK44Uua1jorOkvFGKitBcHUSgOI%2BTywM7CyFDOTPCz3LOncb18DxLcanzpVABBVq3chEQ%2BkItsfWB42cdDapsWVFl0jybtpxl7A%2BEKXapFUfOa1D93XwL9O3JnYvwlAw2eaawwY6pgFXmw5QfvpKQdWR1in2UucaYYNY1ei8YMylUzBk5dvJxyDPmwYX34TDrwAwttW5ARBiI5jP6x%2BweB2xEsEZbDDoLhrvVZgId%2FdDHmEBI6q7dfFVKlpZmfg2h0bGFZFuDreQZc6%2BwiOlDmpEKCB57LpZMI3496GV5gnNsb96O1GceaCg8pjISfWhARyErSBraW0cyNuXBnzdVJ5mv9fYlzA%2FA94sAXwi&X-Amz-Signature=22801ef7f802baebb64fcc1d99bfe644bf9de9789f04575791828caeb069956f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQQWL3G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBu8VIZ3gAKZOC4%2BSy3NZHYztpSojMK%2FXg49loJN6nvmAiAXUCxe9vuorUHS9EwP1Y%2BU7azkqhtKSWXqHghSCh02oir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM%2FL%2BoCFqBHzw081oEKtwDbzlX59sLf0Hj8S1TqLbLQmhZ3xDF8zggcBzhiiLQ3Zx4UiN%2FWHXi5WtJ5WIc0G8U5rPm52KR%2BOf30DHfMF5b9OBNBGkgqdFr5Nj6LP56pkzv7eRDOw8WVyrdq5Ks4Hj44EqMMsXyHorZleeDX7Bk7txtiAjOC1px%2BdP%2F7PMC39Qx4%2B5en4zw7urQrZ%2F4iPjv3mw0yKRIW3aMzm37%2BdZR1j0wbpNswMExIanUxmuzyb6qvqdLIXEZZn5Pf1gbW5yOwQg6xlbP8oidITJgCTI%2BFbWm4V35jAetaF2Fo1NniVzLIxHHYpreKAN4m0djAGwH6xXnb1%2Fee40kk82ndEhTXkR8HjWjiOz5OGC1U%2BSXKkdU6WRBpAedVfP%2FXfV1efGXs%2FpX2pO3cuc1sx6Iabq58rW%2Fhzz6JQh88KHu5uAZv%2F0sV8CbXfv1O8k8nicoXj2Z5XxZALrktCCNuzQc4SwDSxozBRU5Jd8m7bq7HZ%2B7gULvPlZwPTj8Y8oB2%2BrSVK44Uua1jorOkvFGKitBcHUSgOI%2BTywM7CyFDOTPCz3LOncb18DxLcanzpVABBVq3chEQ%2BkItsfWB42cdDapsWVFl0jybtpxl7A%2BEKXapFUfOa1D93XwL9O3JnYvwlAw2eaawwY6pgFXmw5QfvpKQdWR1in2UucaYYNY1ei8YMylUzBk5dvJxyDPmwYX34TDrwAwttW5ARBiI5jP6x%2BweB2xEsEZbDDoLhrvVZgId%2FdDHmEBI6q7dfFVKlpZmfg2h0bGFZFuDreQZc6%2BwiOlDmpEKCB57LpZMI3496GV5gnNsb96O1GceaCg8pjISfWhARyErSBraW0cyNuXBnzdVJ5mv9fYlzA%2FA94sAXwi&X-Amz-Signature=58a81eb7bd97c029fe2dec0b7b486d7325cd2de7158d7e50e805cd22dd304fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
