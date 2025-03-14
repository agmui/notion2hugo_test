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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=ae3617682cff9a77b08dc1bc31ce69fa3b88486b7202e0d67920672b8978ba54&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=a8a578f571b47b47343ace99e0ffc3fa46108944224870993c982c180cb9b59c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=45b29c131b423fb03982ce0c601f8a59abf9cfbb148476b884485225adc070b6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=bdd68e4e455670ea8f383cec323c9591f71224d0c3e264cbd0f7a9c0788a9106&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXJECIA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMHDuiK3y8ETK%2BvKrlcSJOIx4e58GRoFOJk3VSjwsLiAiBy7kOeA1xVjzooBYpFwgTDbiy%2BYfeVbNKHe08CDbfU2CqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuW3n5gS5TRtGpjW4KtwDpJGCY9qfTO9HKObayJHlesCoN5q%2B8EkUbVoOsSz32aYJw6GSI4VkPoPDe%2BcNTxMdyiG1F6txMJjuKV%2FzLpLd%2Br%2F6qEw1FQoWX1fMlfNmrrzgqgWPSH8g%2F7T%2BCXDBHPVnkmXxAsJ3M%2FlzXgxqs4YzNhajDn3tRL%2FvJRJsNDQI8zhgkGQzz6oUR9mdr09DD4vMEzaQY8%2BzKuoEkoS7JAx6ALdFsO9vKfUuwhVw01JizW0hgjTYFNO3sNsQTvCw7vKyBi%2FoK3xAr5Zy40mx5vg6ARvIMgjV3QwqFEC5f0%2FGQFuwo%2B%2BzWv10dvxlEXx0VukRaSRPCJShBQnC9dOayBws9L%2FMuNBrMXrcFr6T%2Bnt172SMSL0PBxEpmU6ZrGencAQR%2FExzrPtLiq10F7gQBlr1LYO7OB9QnZvy2YqAInv5jZdB1OnlaGMjKRn0fnp%2BsLuKLepj4Vq8VOxDww3sbRhi7%2FGMw71r6tbPWLljYsGZlIR%2FZ%2BtI0tszfUmaH9S22oud5doaKSIYSZcgP1gGLvR65ZMQD8Z0e6xF6syQh2MotW6riqUWG3zX4gbl1r7V6IOMDTpR%2FgLH0YRgAdbt5n00AKukq4xm%2F4NIsKzepF7wQoyD1lf7%2BtBGsI%2FrkU0wkIbQvgY6pgG8WZzbllyiHRxE1D4M%2BIRB4Ud8M8NSNhzszlttsluSU3gf7Kzrr7jTF%2BoxzT7J91528SCrfpZqL6e84Qth9hJpg%2FrDUamTn5R06lyk4LZmTKffNeK%2FKOLWmZlCgHC1HbTQYNIHa8IEAV%2F4Ay3W4ZVPKni70j26YQFwWHO0e7lA0KaTVZfSz0fB%2FV3PkkTcScjkCjeMC2Cw6h%2F82kl6Jutn0w15b1n1&X-Amz-Signature=921d0af1cde7f2601cb454818f944020c421512a2ce015ca7fbb9020b687a336&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
