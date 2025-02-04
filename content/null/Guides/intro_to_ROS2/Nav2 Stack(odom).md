---
sys:
  pageId: "107da3bc-6297-80e7-8a39-c258b8d1dbf6"
  createdTime: "2024-09-20T17:54:00.000Z"
  lastEditedTime: "2025-01-26T18:37:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(odom).md"
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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRV7CND2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCi2GfXDaEDfqlqrdDWN3xT75m8%2BfmrKZFMia6MJJIS3QIgC55VZy0SjmcIRGD%2BxeSuEPksTmYV179jfmLIqGPeGX4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL3TwW4Qe%2BU9pkBkjyrcA8pcCd2KA%2F%2FR4wSbwJ%2BP6jwxxR7lA%2Bee9NQRdhZ8mvZjs%2FDZ7t0gNCFrZ9RUwtgnkB0WaEPanZseI0mUlZhKD1Xt6bvszR3VMNL99kTjba%2FGZA4Q%2FyOmRdCJuRF7NMeQsYVwz5VEgd24LdgJTmlkDivbpAFrTFeaqjZjUg4BALoLLIAUgL3DGcZxqUsjVBWsqnMND7nmcYFCS88kDL1tnRX6BrrrH84CKGmE27LsbdJD8AkEvWZvyBEpJwXjllocuqfRD4TQwW%2B1RbE643IJ4EsEREuiih7sa%2BVlrhLq9wCsIGyjcOLGkzPT%2F1i3PGZazTiDgY8JpMtl9OIBHzZXRcgWIfP2mo6cFYYk3LuHl2EQtUOqXQOjArzLgr%2Fx4ZOafc9379IyQnKPaz5utcx56RpDYGY0H3JbQzGu%2Bse46Byoq%2FRVGyr%2FuHTXd5G%2BN2SD4rqdU3s52NGLqS%2FZUYE9KLuOKH%2BFG96yx8nLIk%2FnF0qowy%2FC5rEDi0AnYDzpElPk6DkdJefKVxNJ0n%2B0jgZ%2F2orGCJ6PQTgryuRUYnGz8c9o3kWUeBTk20%2F%2Bh5VsNLHF385iWvuv%2BGOTM3iMnljBpqb%2FgQTLjZVye%2BnfQE5m%2FBmVIfSxScPXQA5oaY8yMNuVir0GOqUBWnmynHgtKNH4DeQCLP%2BYW7nJ4fjhwjWW5H9prXrh0Umb0InBoRIWarFhrqTvag45vduy15XdbUGlDTpq%2BVVSH%2Bei74fsgz9vfMBNNg2mvjO7IIjvPuEIaYKwF%2Bp0b4ZIPy7USK1ORLlnu%2F4VvN3bseSqq3QI8GDXMMH%2FZ%2Ff74TVI3%2BvQTc%2FhOjwbYEoNOjC3GZbZrIn6xuufLXDPgzuUM1%2Fqrm11&X-Amz-Signature=d7b035eed43df2ae5b56cf9520c4df858e5bcc3b9fa14e39a05f23b170485f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRV7CND2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCi2GfXDaEDfqlqrdDWN3xT75m8%2BfmrKZFMia6MJJIS3QIgC55VZy0SjmcIRGD%2BxeSuEPksTmYV179jfmLIqGPeGX4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL3TwW4Qe%2BU9pkBkjyrcA8pcCd2KA%2F%2FR4wSbwJ%2BP6jwxxR7lA%2Bee9NQRdhZ8mvZjs%2FDZ7t0gNCFrZ9RUwtgnkB0WaEPanZseI0mUlZhKD1Xt6bvszR3VMNL99kTjba%2FGZA4Q%2FyOmRdCJuRF7NMeQsYVwz5VEgd24LdgJTmlkDivbpAFrTFeaqjZjUg4BALoLLIAUgL3DGcZxqUsjVBWsqnMND7nmcYFCS88kDL1tnRX6BrrrH84CKGmE27LsbdJD8AkEvWZvyBEpJwXjllocuqfRD4TQwW%2B1RbE643IJ4EsEREuiih7sa%2BVlrhLq9wCsIGyjcOLGkzPT%2F1i3PGZazTiDgY8JpMtl9OIBHzZXRcgWIfP2mo6cFYYk3LuHl2EQtUOqXQOjArzLgr%2Fx4ZOafc9379IyQnKPaz5utcx56RpDYGY0H3JbQzGu%2Bse46Byoq%2FRVGyr%2FuHTXd5G%2BN2SD4rqdU3s52NGLqS%2FZUYE9KLuOKH%2BFG96yx8nLIk%2FnF0qowy%2FC5rEDi0AnYDzpElPk6DkdJefKVxNJ0n%2B0jgZ%2F2orGCJ6PQTgryuRUYnGz8c9o3kWUeBTk20%2F%2Bh5VsNLHF385iWvuv%2BGOTM3iMnljBpqb%2FgQTLjZVye%2BnfQE5m%2FBmVIfSxScPXQA5oaY8yMNuVir0GOqUBWnmynHgtKNH4DeQCLP%2BYW7nJ4fjhwjWW5H9prXrh0Umb0InBoRIWarFhrqTvag45vduy15XdbUGlDTpq%2BVVSH%2Bei74fsgz9vfMBNNg2mvjO7IIjvPuEIaYKwF%2Bp0b4ZIPy7USK1ORLlnu%2F4VvN3bseSqq3QI8GDXMMH%2FZ%2Ff74TVI3%2BvQTc%2FhOjwbYEoNOjC3GZbZrIn6xuufLXDPgzuUM1%2Fqrm11&X-Amz-Signature=4c360a8d650b457d983c7a5d356a1322375cf50a1b68099d8defff778505c149&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRV7CND2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCi2GfXDaEDfqlqrdDWN3xT75m8%2BfmrKZFMia6MJJIS3QIgC55VZy0SjmcIRGD%2BxeSuEPksTmYV179jfmLIqGPeGX4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL3TwW4Qe%2BU9pkBkjyrcA8pcCd2KA%2F%2FR4wSbwJ%2BP6jwxxR7lA%2Bee9NQRdhZ8mvZjs%2FDZ7t0gNCFrZ9RUwtgnkB0WaEPanZseI0mUlZhKD1Xt6bvszR3VMNL99kTjba%2FGZA4Q%2FyOmRdCJuRF7NMeQsYVwz5VEgd24LdgJTmlkDivbpAFrTFeaqjZjUg4BALoLLIAUgL3DGcZxqUsjVBWsqnMND7nmcYFCS88kDL1tnRX6BrrrH84CKGmE27LsbdJD8AkEvWZvyBEpJwXjllocuqfRD4TQwW%2B1RbE643IJ4EsEREuiih7sa%2BVlrhLq9wCsIGyjcOLGkzPT%2F1i3PGZazTiDgY8JpMtl9OIBHzZXRcgWIfP2mo6cFYYk3LuHl2EQtUOqXQOjArzLgr%2Fx4ZOafc9379IyQnKPaz5utcx56RpDYGY0H3JbQzGu%2Bse46Byoq%2FRVGyr%2FuHTXd5G%2BN2SD4rqdU3s52NGLqS%2FZUYE9KLuOKH%2BFG96yx8nLIk%2FnF0qowy%2FC5rEDi0AnYDzpElPk6DkdJefKVxNJ0n%2B0jgZ%2F2orGCJ6PQTgryuRUYnGz8c9o3kWUeBTk20%2F%2Bh5VsNLHF385iWvuv%2BGOTM3iMnljBpqb%2FgQTLjZVye%2BnfQE5m%2FBmVIfSxScPXQA5oaY8yMNuVir0GOqUBWnmynHgtKNH4DeQCLP%2BYW7nJ4fjhwjWW5H9prXrh0Umb0InBoRIWarFhrqTvag45vduy15XdbUGlDTpq%2BVVSH%2Bei74fsgz9vfMBNNg2mvjO7IIjvPuEIaYKwF%2Bp0b4ZIPy7USK1ORLlnu%2F4VvN3bseSqq3QI8GDXMMH%2FZ%2Ff74TVI3%2BvQTc%2FhOjwbYEoNOjC3GZbZrIn6xuufLXDPgzuUM1%2Fqrm11&X-Amz-Signature=9aca9db9738ba32f316aa7fa4242a0b5772d04d9540d70502b0285fd4a59056b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRV7CND2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCi2GfXDaEDfqlqrdDWN3xT75m8%2BfmrKZFMia6MJJIS3QIgC55VZy0SjmcIRGD%2BxeSuEPksTmYV179jfmLIqGPeGX4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL3TwW4Qe%2BU9pkBkjyrcA8pcCd2KA%2F%2FR4wSbwJ%2BP6jwxxR7lA%2Bee9NQRdhZ8mvZjs%2FDZ7t0gNCFrZ9RUwtgnkB0WaEPanZseI0mUlZhKD1Xt6bvszR3VMNL99kTjba%2FGZA4Q%2FyOmRdCJuRF7NMeQsYVwz5VEgd24LdgJTmlkDivbpAFrTFeaqjZjUg4BALoLLIAUgL3DGcZxqUsjVBWsqnMND7nmcYFCS88kDL1tnRX6BrrrH84CKGmE27LsbdJD8AkEvWZvyBEpJwXjllocuqfRD4TQwW%2B1RbE643IJ4EsEREuiih7sa%2BVlrhLq9wCsIGyjcOLGkzPT%2F1i3PGZazTiDgY8JpMtl9OIBHzZXRcgWIfP2mo6cFYYk3LuHl2EQtUOqXQOjArzLgr%2Fx4ZOafc9379IyQnKPaz5utcx56RpDYGY0H3JbQzGu%2Bse46Byoq%2FRVGyr%2FuHTXd5G%2BN2SD4rqdU3s52NGLqS%2FZUYE9KLuOKH%2BFG96yx8nLIk%2FnF0qowy%2FC5rEDi0AnYDzpElPk6DkdJefKVxNJ0n%2B0jgZ%2F2orGCJ6PQTgryuRUYnGz8c9o3kWUeBTk20%2F%2Bh5VsNLHF385iWvuv%2BGOTM3iMnljBpqb%2FgQTLjZVye%2BnfQE5m%2FBmVIfSxScPXQA5oaY8yMNuVir0GOqUBWnmynHgtKNH4DeQCLP%2BYW7nJ4fjhwjWW5H9prXrh0Umb0InBoRIWarFhrqTvag45vduy15XdbUGlDTpq%2BVVSH%2Bei74fsgz9vfMBNNg2mvjO7IIjvPuEIaYKwF%2Bp0b4ZIPy7USK1ORLlnu%2F4VvN3bseSqq3QI8GDXMMH%2FZ%2Ff74TVI3%2BvQTc%2FhOjwbYEoNOjC3GZbZrIn6xuufLXDPgzuUM1%2Fqrm11&X-Amz-Signature=d59a70a8ee992829e47ec7b889d4bb70d75211ecde30bad6c4736547dbc24174&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRV7CND2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCi2GfXDaEDfqlqrdDWN3xT75m8%2BfmrKZFMia6MJJIS3QIgC55VZy0SjmcIRGD%2BxeSuEPksTmYV179jfmLIqGPeGX4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL3TwW4Qe%2BU9pkBkjyrcA8pcCd2KA%2F%2FR4wSbwJ%2BP6jwxxR7lA%2Bee9NQRdhZ8mvZjs%2FDZ7t0gNCFrZ9RUwtgnkB0WaEPanZseI0mUlZhKD1Xt6bvszR3VMNL99kTjba%2FGZA4Q%2FyOmRdCJuRF7NMeQsYVwz5VEgd24LdgJTmlkDivbpAFrTFeaqjZjUg4BALoLLIAUgL3DGcZxqUsjVBWsqnMND7nmcYFCS88kDL1tnRX6BrrrH84CKGmE27LsbdJD8AkEvWZvyBEpJwXjllocuqfRD4TQwW%2B1RbE643IJ4EsEREuiih7sa%2BVlrhLq9wCsIGyjcOLGkzPT%2F1i3PGZazTiDgY8JpMtl9OIBHzZXRcgWIfP2mo6cFYYk3LuHl2EQtUOqXQOjArzLgr%2Fx4ZOafc9379IyQnKPaz5utcx56RpDYGY0H3JbQzGu%2Bse46Byoq%2FRVGyr%2FuHTXd5G%2BN2SD4rqdU3s52NGLqS%2FZUYE9KLuOKH%2BFG96yx8nLIk%2FnF0qowy%2FC5rEDi0AnYDzpElPk6DkdJefKVxNJ0n%2B0jgZ%2F2orGCJ6PQTgryuRUYnGz8c9o3kWUeBTk20%2F%2Bh5VsNLHF385iWvuv%2BGOTM3iMnljBpqb%2FgQTLjZVye%2BnfQE5m%2FBmVIfSxScPXQA5oaY8yMNuVir0GOqUBWnmynHgtKNH4DeQCLP%2BYW7nJ4fjhwjWW5H9prXrh0Umb0InBoRIWarFhrqTvag45vduy15XdbUGlDTpq%2BVVSH%2Bei74fsgz9vfMBNNg2mvjO7IIjvPuEIaYKwF%2Bp0b4ZIPy7USK1ORLlnu%2F4VvN3bseSqq3QI8GDXMMH%2FZ%2Ff74TVI3%2BvQTc%2FhOjwbYEoNOjC3GZbZrIn6xuufLXDPgzuUM1%2Fqrm11&X-Amz-Signature=cb004191052d01dd8e1511e77815faf6d4ed0c6a50752d0fc77929f8898b8539&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
