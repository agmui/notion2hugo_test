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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQQTTZV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEIZcRg8I81GM8%2BOO89LUpbbu%2Fqytj5VU6AyTze7lSCgAiEA5mPtqcQ%2BNP7eSK9xdQz41G6rQPBj%2BMtqKMKTGnWT%2FoMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOcNxXUK98JpOPfEyircAxzQDK%2F0g8QkdFN7MMW%2BT5o%2Bru5%2Fphyu2vt49iDH2OQA0P8kYlBRt0XPnl8FUZ3RBHY6gENGlHvTmHv7Miuf%2BHue2I9g%2FHPBtNrpqbw3nP2BF16go0OkLYTlKm%2BEmtqN7KcTPx2d1%2FH0arf2AGxijEjHuHILzJsmxgRH9CT9sPuWY2k89bE7QvyIp4gChwnd6avtOlY7lRYm%2B%2FSYqzMLWbrxMf34OoNYOmSzIOZr%2BW1q2EmLUoWyYhJ4jByWuBU9ajn53YfvzP%2FezfMhHd3%2B%2B3dwailIZj6DxgBAu6Mb5FdexKMj0Desk5nu9etjvrc7K8k6e3Gh%2BvkTGNRT2IfRvfO%2BueMhnuVXegugV8Ll3Azc0ohxvndmPsu%2FBwpIwSDeHlKOhVJKZGBpQrrS%2BmHbfFrLTvupBuLHMlVFFAf2JZ2%2FRd2VDq4bOZpAFQLkmGrRRXlFKhIXTb%2Fmq6G3w5jz6q%2FY9vZouWD8kdCSEva%2BLqp6zUyBBV9UlGdsxfa2GUXGKNq6WhgxyhQAeumMC1zImWdNLZSou%2FwCVb%2B5vff89cPiQ3Xy5Q2qkkdW0NlMTuOlkkzpMf7qofwsxIKzkWs8j9S3wuPI6Suy11t%2FmxYp8hKFk3S7GYJ9bf5YPLOFMO7Fwr0GOqUBuXKg7dOH727mEcZFatFBmfhc9y0IZRKvaFj4Gzoiq%2Fz9884k53MbE1XtX30VCeU36tTxnaODBjwN0z%2FBKJz8fAnynHicl1kJIsLHsazWj1i2cijo4iDFpUxEy11LhW7WIL5NZ%2BrgIgQPN05SD%2FVAyIsi%2BoOYGUvS%2B0U17ECrF7ulzIzy36qWbyhlSNjdFg3MTXHg8scR1umo4SBUULpM%2FxWceOia&X-Amz-Signature=ffab273e5126e71967d90b29a8527a28ccfbbeed260d6705cc19d031fc077850&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQQTTZV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEIZcRg8I81GM8%2BOO89LUpbbu%2Fqytj5VU6AyTze7lSCgAiEA5mPtqcQ%2BNP7eSK9xdQz41G6rQPBj%2BMtqKMKTGnWT%2FoMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOcNxXUK98JpOPfEyircAxzQDK%2F0g8QkdFN7MMW%2BT5o%2Bru5%2Fphyu2vt49iDH2OQA0P8kYlBRt0XPnl8FUZ3RBHY6gENGlHvTmHv7Miuf%2BHue2I9g%2FHPBtNrpqbw3nP2BF16go0OkLYTlKm%2BEmtqN7KcTPx2d1%2FH0arf2AGxijEjHuHILzJsmxgRH9CT9sPuWY2k89bE7QvyIp4gChwnd6avtOlY7lRYm%2B%2FSYqzMLWbrxMf34OoNYOmSzIOZr%2BW1q2EmLUoWyYhJ4jByWuBU9ajn53YfvzP%2FezfMhHd3%2B%2B3dwailIZj6DxgBAu6Mb5FdexKMj0Desk5nu9etjvrc7K8k6e3Gh%2BvkTGNRT2IfRvfO%2BueMhnuVXegugV8Ll3Azc0ohxvndmPsu%2FBwpIwSDeHlKOhVJKZGBpQrrS%2BmHbfFrLTvupBuLHMlVFFAf2JZ2%2FRd2VDq4bOZpAFQLkmGrRRXlFKhIXTb%2Fmq6G3w5jz6q%2FY9vZouWD8kdCSEva%2BLqp6zUyBBV9UlGdsxfa2GUXGKNq6WhgxyhQAeumMC1zImWdNLZSou%2FwCVb%2B5vff89cPiQ3Xy5Q2qkkdW0NlMTuOlkkzpMf7qofwsxIKzkWs8j9S3wuPI6Suy11t%2FmxYp8hKFk3S7GYJ9bf5YPLOFMO7Fwr0GOqUBuXKg7dOH727mEcZFatFBmfhc9y0IZRKvaFj4Gzoiq%2Fz9884k53MbE1XtX30VCeU36tTxnaODBjwN0z%2FBKJz8fAnynHicl1kJIsLHsazWj1i2cijo4iDFpUxEy11LhW7WIL5NZ%2BrgIgQPN05SD%2FVAyIsi%2BoOYGUvS%2B0U17ECrF7ulzIzy36qWbyhlSNjdFg3MTXHg8scR1umo4SBUULpM%2FxWceOia&X-Amz-Signature=c1577f04f3e10eb76bba290bee04d253d4dd2dc3a4012012b4ca778d5b3d55f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQQTTZV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEIZcRg8I81GM8%2BOO89LUpbbu%2Fqytj5VU6AyTze7lSCgAiEA5mPtqcQ%2BNP7eSK9xdQz41G6rQPBj%2BMtqKMKTGnWT%2FoMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOcNxXUK98JpOPfEyircAxzQDK%2F0g8QkdFN7MMW%2BT5o%2Bru5%2Fphyu2vt49iDH2OQA0P8kYlBRt0XPnl8FUZ3RBHY6gENGlHvTmHv7Miuf%2BHue2I9g%2FHPBtNrpqbw3nP2BF16go0OkLYTlKm%2BEmtqN7KcTPx2d1%2FH0arf2AGxijEjHuHILzJsmxgRH9CT9sPuWY2k89bE7QvyIp4gChwnd6avtOlY7lRYm%2B%2FSYqzMLWbrxMf34OoNYOmSzIOZr%2BW1q2EmLUoWyYhJ4jByWuBU9ajn53YfvzP%2FezfMhHd3%2B%2B3dwailIZj6DxgBAu6Mb5FdexKMj0Desk5nu9etjvrc7K8k6e3Gh%2BvkTGNRT2IfRvfO%2BueMhnuVXegugV8Ll3Azc0ohxvndmPsu%2FBwpIwSDeHlKOhVJKZGBpQrrS%2BmHbfFrLTvupBuLHMlVFFAf2JZ2%2FRd2VDq4bOZpAFQLkmGrRRXlFKhIXTb%2Fmq6G3w5jz6q%2FY9vZouWD8kdCSEva%2BLqp6zUyBBV9UlGdsxfa2GUXGKNq6WhgxyhQAeumMC1zImWdNLZSou%2FwCVb%2B5vff89cPiQ3Xy5Q2qkkdW0NlMTuOlkkzpMf7qofwsxIKzkWs8j9S3wuPI6Suy11t%2FmxYp8hKFk3S7GYJ9bf5YPLOFMO7Fwr0GOqUBuXKg7dOH727mEcZFatFBmfhc9y0IZRKvaFj4Gzoiq%2Fz9884k53MbE1XtX30VCeU36tTxnaODBjwN0z%2FBKJz8fAnynHicl1kJIsLHsazWj1i2cijo4iDFpUxEy11LhW7WIL5NZ%2BrgIgQPN05SD%2FVAyIsi%2BoOYGUvS%2B0U17ECrF7ulzIzy36qWbyhlSNjdFg3MTXHg8scR1umo4SBUULpM%2FxWceOia&X-Amz-Signature=79e4e7a57d9c2ca010d44540f781b7c58c51a784bbc2799928c5c1cf9772509a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQQTTZV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEIZcRg8I81GM8%2BOO89LUpbbu%2Fqytj5VU6AyTze7lSCgAiEA5mPtqcQ%2BNP7eSK9xdQz41G6rQPBj%2BMtqKMKTGnWT%2FoMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOcNxXUK98JpOPfEyircAxzQDK%2F0g8QkdFN7MMW%2BT5o%2Bru5%2Fphyu2vt49iDH2OQA0P8kYlBRt0XPnl8FUZ3RBHY6gENGlHvTmHv7Miuf%2BHue2I9g%2FHPBtNrpqbw3nP2BF16go0OkLYTlKm%2BEmtqN7KcTPx2d1%2FH0arf2AGxijEjHuHILzJsmxgRH9CT9sPuWY2k89bE7QvyIp4gChwnd6avtOlY7lRYm%2B%2FSYqzMLWbrxMf34OoNYOmSzIOZr%2BW1q2EmLUoWyYhJ4jByWuBU9ajn53YfvzP%2FezfMhHd3%2B%2B3dwailIZj6DxgBAu6Mb5FdexKMj0Desk5nu9etjvrc7K8k6e3Gh%2BvkTGNRT2IfRvfO%2BueMhnuVXegugV8Ll3Azc0ohxvndmPsu%2FBwpIwSDeHlKOhVJKZGBpQrrS%2BmHbfFrLTvupBuLHMlVFFAf2JZ2%2FRd2VDq4bOZpAFQLkmGrRRXlFKhIXTb%2Fmq6G3w5jz6q%2FY9vZouWD8kdCSEva%2BLqp6zUyBBV9UlGdsxfa2GUXGKNq6WhgxyhQAeumMC1zImWdNLZSou%2FwCVb%2B5vff89cPiQ3Xy5Q2qkkdW0NlMTuOlkkzpMf7qofwsxIKzkWs8j9S3wuPI6Suy11t%2FmxYp8hKFk3S7GYJ9bf5YPLOFMO7Fwr0GOqUBuXKg7dOH727mEcZFatFBmfhc9y0IZRKvaFj4Gzoiq%2Fz9884k53MbE1XtX30VCeU36tTxnaODBjwN0z%2FBKJz8fAnynHicl1kJIsLHsazWj1i2cijo4iDFpUxEy11LhW7WIL5NZ%2BrgIgQPN05SD%2FVAyIsi%2BoOYGUvS%2B0U17ECrF7ulzIzy36qWbyhlSNjdFg3MTXHg8scR1umo4SBUULpM%2FxWceOia&X-Amz-Signature=eaba1df860af61f17cd9c7eeb7f964bf7977a8dc78c207bb1e5c386b21bc69c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQQTTZV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEIZcRg8I81GM8%2BOO89LUpbbu%2Fqytj5VU6AyTze7lSCgAiEA5mPtqcQ%2BNP7eSK9xdQz41G6rQPBj%2BMtqKMKTGnWT%2FoMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOcNxXUK98JpOPfEyircAxzQDK%2F0g8QkdFN7MMW%2BT5o%2Bru5%2Fphyu2vt49iDH2OQA0P8kYlBRt0XPnl8FUZ3RBHY6gENGlHvTmHv7Miuf%2BHue2I9g%2FHPBtNrpqbw3nP2BF16go0OkLYTlKm%2BEmtqN7KcTPx2d1%2FH0arf2AGxijEjHuHILzJsmxgRH9CT9sPuWY2k89bE7QvyIp4gChwnd6avtOlY7lRYm%2B%2FSYqzMLWbrxMf34OoNYOmSzIOZr%2BW1q2EmLUoWyYhJ4jByWuBU9ajn53YfvzP%2FezfMhHd3%2B%2B3dwailIZj6DxgBAu6Mb5FdexKMj0Desk5nu9etjvrc7K8k6e3Gh%2BvkTGNRT2IfRvfO%2BueMhnuVXegugV8Ll3Azc0ohxvndmPsu%2FBwpIwSDeHlKOhVJKZGBpQrrS%2BmHbfFrLTvupBuLHMlVFFAf2JZ2%2FRd2VDq4bOZpAFQLkmGrRRXlFKhIXTb%2Fmq6G3w5jz6q%2FY9vZouWD8kdCSEva%2BLqp6zUyBBV9UlGdsxfa2GUXGKNq6WhgxyhQAeumMC1zImWdNLZSou%2FwCVb%2B5vff89cPiQ3Xy5Q2qkkdW0NlMTuOlkkzpMf7qofwsxIKzkWs8j9S3wuPI6Suy11t%2FmxYp8hKFk3S7GYJ9bf5YPLOFMO7Fwr0GOqUBuXKg7dOH727mEcZFatFBmfhc9y0IZRKvaFj4Gzoiq%2Fz9884k53MbE1XtX30VCeU36tTxnaODBjwN0z%2FBKJz8fAnynHicl1kJIsLHsazWj1i2cijo4iDFpUxEy11LhW7WIL5NZ%2BrgIgQPN05SD%2FVAyIsi%2BoOYGUvS%2B0U17ECrF7ulzIzy36qWbyhlSNjdFg3MTXHg8scR1umo4SBUULpM%2FxWceOia&X-Amz-Signature=38175c77f856fe612d0c50c6fbc0707e5923d4d03afd4bfe830a17a75827f64c&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
