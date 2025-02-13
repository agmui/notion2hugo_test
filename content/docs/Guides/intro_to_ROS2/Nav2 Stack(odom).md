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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMDRTUJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA6kBwH%2BF5yhHfgDo6dZM%2BfpU41jLaxceQFEftNmnCKAiBxdV045zx5HG0fcWbuo0BZBkOHTsK4qXG4jztE6lOxWCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2BWxlDDWXeeX7BaZ1KtwD3ANuimQbkqyvmqQz9LgGcLSKv7cPjrqicTd%2BDKzwd2KK5NLsNW2kiJ0DHZamBkeuCLK8nFUC2VvzhdrTexuexq9m7BlSfIXNDUHINzgKtNJZN0RLIaOYzrATIcdrHnj2HtEfmV26C%2BzqOa%2BZ0t08pHIxLI%2BqxSlGJNvlX95%2FglLl4MMo8aCE7tA%2F7tv7XNg15Ce2DxeL%2Fyi5gk57I1%2BnuQ%2BOlJXyoBrlDHuS0XVoQnPfl%2By0dfAKF%2B3sF19PkTOrr9XCtJOyE01TGk1weLbdwAv5yRuXWj%2BwDMZ3D5Zi6o19Ypzi%2Ba7Du7hK%2B90D6ZIeWKs59GhPWmQ3eoQ4i9Pu2C3FXMwh7hSJJIO%2B9Km80l9KbZDthqxkwzKfBQNvinHKEemfGVN452O2JtGsnpYdcr9pUN7rz9%2BEJOc3tTL0G8%2B8F%2BRy5WHPX4mK%2FkEwJd%2Bflwldd7NliGhw6AVpVRnmrYLqMFCElO3i5EW9KnVv4%2BAIiDkH7OGUH%2BACsM86mZDXQ1shqJwdq7O%2BAuzMooSyJb9XJoY2h%2Bh6kVxa1Xd7bqySjnhuemcHxON6iSSYyCqfnkPUwLr5KhQf3mCntpcEnfQFrH7BKKk%2Fznlk2bXkD9h1lxf%2FTqpL0LmXFX4w%2Bua2vQY6pgFyr%2BNrasK8ePdYmd6gxR88LZqSwBpVAgMi7qEndhwzhX3FuCA0h7zZErWR3NxX3AEpjK7dzkOHKOn9ANhA%2B7i2VeLVfAFquJGxr6S0z1chYxnqozpcwOK3Ydy1lfhjGhOGuDPeLmdTOXaAzwnvlsBOz6Lvgi0kobJS3575GMoEoB9OldZWjlw9R3XLtFtvMAmdeQRUSbyTJqHP%2BHI8BkAfL1kmxhOO&X-Amz-Signature=5d09d9c8cd055cd813a45f33933fd02f308b13d9be53fb4b5b6595ae1364be5c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMDRTUJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA6kBwH%2BF5yhHfgDo6dZM%2BfpU41jLaxceQFEftNmnCKAiBxdV045zx5HG0fcWbuo0BZBkOHTsK4qXG4jztE6lOxWCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2BWxlDDWXeeX7BaZ1KtwD3ANuimQbkqyvmqQz9LgGcLSKv7cPjrqicTd%2BDKzwd2KK5NLsNW2kiJ0DHZamBkeuCLK8nFUC2VvzhdrTexuexq9m7BlSfIXNDUHINzgKtNJZN0RLIaOYzrATIcdrHnj2HtEfmV26C%2BzqOa%2BZ0t08pHIxLI%2BqxSlGJNvlX95%2FglLl4MMo8aCE7tA%2F7tv7XNg15Ce2DxeL%2Fyi5gk57I1%2BnuQ%2BOlJXyoBrlDHuS0XVoQnPfl%2By0dfAKF%2B3sF19PkTOrr9XCtJOyE01TGk1weLbdwAv5yRuXWj%2BwDMZ3D5Zi6o19Ypzi%2Ba7Du7hK%2B90D6ZIeWKs59GhPWmQ3eoQ4i9Pu2C3FXMwh7hSJJIO%2B9Km80l9KbZDthqxkwzKfBQNvinHKEemfGVN452O2JtGsnpYdcr9pUN7rz9%2BEJOc3tTL0G8%2B8F%2BRy5WHPX4mK%2FkEwJd%2Bflwldd7NliGhw6AVpVRnmrYLqMFCElO3i5EW9KnVv4%2BAIiDkH7OGUH%2BACsM86mZDXQ1shqJwdq7O%2BAuzMooSyJb9XJoY2h%2Bh6kVxa1Xd7bqySjnhuemcHxON6iSSYyCqfnkPUwLr5KhQf3mCntpcEnfQFrH7BKKk%2Fznlk2bXkD9h1lxf%2FTqpL0LmXFX4w%2Bua2vQY6pgFyr%2BNrasK8ePdYmd6gxR88LZqSwBpVAgMi7qEndhwzhX3FuCA0h7zZErWR3NxX3AEpjK7dzkOHKOn9ANhA%2B7i2VeLVfAFquJGxr6S0z1chYxnqozpcwOK3Ydy1lfhjGhOGuDPeLmdTOXaAzwnvlsBOz6Lvgi0kobJS3575GMoEoB9OldZWjlw9R3XLtFtvMAmdeQRUSbyTJqHP%2BHI8BkAfL1kmxhOO&X-Amz-Signature=48ac7012ec6c79ea92d219e32c8e5e94ff9c6d7c617eb55d895701abb28143ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMDRTUJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA6kBwH%2BF5yhHfgDo6dZM%2BfpU41jLaxceQFEftNmnCKAiBxdV045zx5HG0fcWbuo0BZBkOHTsK4qXG4jztE6lOxWCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2BWxlDDWXeeX7BaZ1KtwD3ANuimQbkqyvmqQz9LgGcLSKv7cPjrqicTd%2BDKzwd2KK5NLsNW2kiJ0DHZamBkeuCLK8nFUC2VvzhdrTexuexq9m7BlSfIXNDUHINzgKtNJZN0RLIaOYzrATIcdrHnj2HtEfmV26C%2BzqOa%2BZ0t08pHIxLI%2BqxSlGJNvlX95%2FglLl4MMo8aCE7tA%2F7tv7XNg15Ce2DxeL%2Fyi5gk57I1%2BnuQ%2BOlJXyoBrlDHuS0XVoQnPfl%2By0dfAKF%2B3sF19PkTOrr9XCtJOyE01TGk1weLbdwAv5yRuXWj%2BwDMZ3D5Zi6o19Ypzi%2Ba7Du7hK%2B90D6ZIeWKs59GhPWmQ3eoQ4i9Pu2C3FXMwh7hSJJIO%2B9Km80l9KbZDthqxkwzKfBQNvinHKEemfGVN452O2JtGsnpYdcr9pUN7rz9%2BEJOc3tTL0G8%2B8F%2BRy5WHPX4mK%2FkEwJd%2Bflwldd7NliGhw6AVpVRnmrYLqMFCElO3i5EW9KnVv4%2BAIiDkH7OGUH%2BACsM86mZDXQ1shqJwdq7O%2BAuzMooSyJb9XJoY2h%2Bh6kVxa1Xd7bqySjnhuemcHxON6iSSYyCqfnkPUwLr5KhQf3mCntpcEnfQFrH7BKKk%2Fznlk2bXkD9h1lxf%2FTqpL0LmXFX4w%2Bua2vQY6pgFyr%2BNrasK8ePdYmd6gxR88LZqSwBpVAgMi7qEndhwzhX3FuCA0h7zZErWR3NxX3AEpjK7dzkOHKOn9ANhA%2B7i2VeLVfAFquJGxr6S0z1chYxnqozpcwOK3Ydy1lfhjGhOGuDPeLmdTOXaAzwnvlsBOz6Lvgi0kobJS3575GMoEoB9OldZWjlw9R3XLtFtvMAmdeQRUSbyTJqHP%2BHI8BkAfL1kmxhOO&X-Amz-Signature=e430c6aa2d09c1e9461a3c9e14a1e485b7d8990fbe80bb06c859c47d299e5029&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMDRTUJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA6kBwH%2BF5yhHfgDo6dZM%2BfpU41jLaxceQFEftNmnCKAiBxdV045zx5HG0fcWbuo0BZBkOHTsK4qXG4jztE6lOxWCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2BWxlDDWXeeX7BaZ1KtwD3ANuimQbkqyvmqQz9LgGcLSKv7cPjrqicTd%2BDKzwd2KK5NLsNW2kiJ0DHZamBkeuCLK8nFUC2VvzhdrTexuexq9m7BlSfIXNDUHINzgKtNJZN0RLIaOYzrATIcdrHnj2HtEfmV26C%2BzqOa%2BZ0t08pHIxLI%2BqxSlGJNvlX95%2FglLl4MMo8aCE7tA%2F7tv7XNg15Ce2DxeL%2Fyi5gk57I1%2BnuQ%2BOlJXyoBrlDHuS0XVoQnPfl%2By0dfAKF%2B3sF19PkTOrr9XCtJOyE01TGk1weLbdwAv5yRuXWj%2BwDMZ3D5Zi6o19Ypzi%2Ba7Du7hK%2B90D6ZIeWKs59GhPWmQ3eoQ4i9Pu2C3FXMwh7hSJJIO%2B9Km80l9KbZDthqxkwzKfBQNvinHKEemfGVN452O2JtGsnpYdcr9pUN7rz9%2BEJOc3tTL0G8%2B8F%2BRy5WHPX4mK%2FkEwJd%2Bflwldd7NliGhw6AVpVRnmrYLqMFCElO3i5EW9KnVv4%2BAIiDkH7OGUH%2BACsM86mZDXQ1shqJwdq7O%2BAuzMooSyJb9XJoY2h%2Bh6kVxa1Xd7bqySjnhuemcHxON6iSSYyCqfnkPUwLr5KhQf3mCntpcEnfQFrH7BKKk%2Fznlk2bXkD9h1lxf%2FTqpL0LmXFX4w%2Bua2vQY6pgFyr%2BNrasK8ePdYmd6gxR88LZqSwBpVAgMi7qEndhwzhX3FuCA0h7zZErWR3NxX3AEpjK7dzkOHKOn9ANhA%2B7i2VeLVfAFquJGxr6S0z1chYxnqozpcwOK3Ydy1lfhjGhOGuDPeLmdTOXaAzwnvlsBOz6Lvgi0kobJS3575GMoEoB9OldZWjlw9R3XLtFtvMAmdeQRUSbyTJqHP%2BHI8BkAfL1kmxhOO&X-Amz-Signature=c25c3bf1d429800efb0fac2f8cdfb2bb82b163dd78253902826c38aadb79b76d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMDRTUJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA6kBwH%2BF5yhHfgDo6dZM%2BfpU41jLaxceQFEftNmnCKAiBxdV045zx5HG0fcWbuo0BZBkOHTsK4qXG4jztE6lOxWCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2BWxlDDWXeeX7BaZ1KtwD3ANuimQbkqyvmqQz9LgGcLSKv7cPjrqicTd%2BDKzwd2KK5NLsNW2kiJ0DHZamBkeuCLK8nFUC2VvzhdrTexuexq9m7BlSfIXNDUHINzgKtNJZN0RLIaOYzrATIcdrHnj2HtEfmV26C%2BzqOa%2BZ0t08pHIxLI%2BqxSlGJNvlX95%2FglLl4MMo8aCE7tA%2F7tv7XNg15Ce2DxeL%2Fyi5gk57I1%2BnuQ%2BOlJXyoBrlDHuS0XVoQnPfl%2By0dfAKF%2B3sF19PkTOrr9XCtJOyE01TGk1weLbdwAv5yRuXWj%2BwDMZ3D5Zi6o19Ypzi%2Ba7Du7hK%2B90D6ZIeWKs59GhPWmQ3eoQ4i9Pu2C3FXMwh7hSJJIO%2B9Km80l9KbZDthqxkwzKfBQNvinHKEemfGVN452O2JtGsnpYdcr9pUN7rz9%2BEJOc3tTL0G8%2B8F%2BRy5WHPX4mK%2FkEwJd%2Bflwldd7NliGhw6AVpVRnmrYLqMFCElO3i5EW9KnVv4%2BAIiDkH7OGUH%2BACsM86mZDXQ1shqJwdq7O%2BAuzMooSyJb9XJoY2h%2Bh6kVxa1Xd7bqySjnhuemcHxON6iSSYyCqfnkPUwLr5KhQf3mCntpcEnfQFrH7BKKk%2Fznlk2bXkD9h1lxf%2FTqpL0LmXFX4w%2Bua2vQY6pgFyr%2BNrasK8ePdYmd6gxR88LZqSwBpVAgMi7qEndhwzhX3FuCA0h7zZErWR3NxX3AEpjK7dzkOHKOn9ANhA%2B7i2VeLVfAFquJGxr6S0z1chYxnqozpcwOK3Ydy1lfhjGhOGuDPeLmdTOXaAzwnvlsBOz6Lvgi0kobJS3575GMoEoB9OldZWjlw9R3XLtFtvMAmdeQRUSbyTJqHP%2BHI8BkAfL1kmxhOO&X-Amz-Signature=69fc9cf3e2f0991a183d38c87f078a8766be9f6f65c84d9835c9038c7accca1e&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
