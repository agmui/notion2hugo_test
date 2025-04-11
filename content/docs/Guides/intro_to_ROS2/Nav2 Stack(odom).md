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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOA7IG5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGXWGjzR%2B%2FrbyY4BHaEO1fQXvI5%2B39H1s3nf6k7PM8ByAiEAhfIv7%2BrHJwBHtktMHBIVEnVV9Yku97pSNF2Co7To%2BAwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAjULWTAmGny0XRRCrcA9xvomiB4KBUvGw%2FxkqSiPRrTfGiotVKmhy91RcBsgHI%2ByyTR7IreIZAF%2BFZfQviUdWeU3j9Jtl4OjFzH7M%2F7Z%2F1whu9CNvatcdiMphpuQVU%2F1C4z7Yyt0LqYs4pVK9OX5otn5%2BahB5dUfkr8up%2BRRyz77%2BJ3CmrLd%2BPN%2Bk4pVqH8jqbLXEJ9FRyaz0VT0b0eieSDnuIkXuhYuirhO1ayGoXHG5j3wKm6%2FxkHjFsJAyhO6j3fjWE3iC5fmRXtwepZRzup0tFwhfcJ%2FdZpWwm43dH73GG%2BoSVJ76zYE8AqA%2FAwghJtb%2Buo4AhrZuy3TOu%2F%2BlVandJpPlDxuvIW0zUj8h1%2BxOj1ZQ2D2jrFmpHqoaz30fb5fyS3QGvcfPBGZgtxTGj8pHzCn%2FisplUFFxGnAbZNEtWWxlmroryYbMtXr2YRj4mpaj7XKlWyKvgUkfcjkmNahGWB8DfiAxllv4lzvaQdvzgiDtUtVQGcb65c%2Ben0jO9QSXhM2xV6sGH7MZekGAerGLaE45JnA9%2FTbp84Yx9bX2jTBqycVbU8t%2Blvb6Tyg61nKxclqRYSEUYZkhLt%2FXDbC7a68uvE%2FTk0EGCuzbPww0JWGOz8Yc1vSyqA79qrfP5iuGWihRksI2AMO%2BY478GOqUBYMKAo815IdtVRiEpEMMgKwcsLg5CTYhHC%2F9BH%2B7BQX5oOodB8dK4kGjDUWDv4sQhnrxto90wjH%2FpzDduqcpwSMBy5wp0Pj%2BYTvIL%2Bm4O8Zn8P%2BC6Qlq4CBo2ESfgtYM8isDSVt40U6r2MFfuh%2FFWr0ziiNOXKbb8Gp%2B%2FKL6A1wRNiNIT5nlLPigAzAbAxjnC4TyJxTDeO0YpD%2FwrrW0GKOOC%2F3Z7&X-Amz-Signature=32764c56fb19fd91fd548c56b57b9100c6d6b1a31ed612cbac304d5d85703e59&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOA7IG5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGXWGjzR%2B%2FrbyY4BHaEO1fQXvI5%2B39H1s3nf6k7PM8ByAiEAhfIv7%2BrHJwBHtktMHBIVEnVV9Yku97pSNF2Co7To%2BAwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAjULWTAmGny0XRRCrcA9xvomiB4KBUvGw%2FxkqSiPRrTfGiotVKmhy91RcBsgHI%2ByyTR7IreIZAF%2BFZfQviUdWeU3j9Jtl4OjFzH7M%2F7Z%2F1whu9CNvatcdiMphpuQVU%2F1C4z7Yyt0LqYs4pVK9OX5otn5%2BahB5dUfkr8up%2BRRyz77%2BJ3CmrLd%2BPN%2Bk4pVqH8jqbLXEJ9FRyaz0VT0b0eieSDnuIkXuhYuirhO1ayGoXHG5j3wKm6%2FxkHjFsJAyhO6j3fjWE3iC5fmRXtwepZRzup0tFwhfcJ%2FdZpWwm43dH73GG%2BoSVJ76zYE8AqA%2FAwghJtb%2Buo4AhrZuy3TOu%2F%2BlVandJpPlDxuvIW0zUj8h1%2BxOj1ZQ2D2jrFmpHqoaz30fb5fyS3QGvcfPBGZgtxTGj8pHzCn%2FisplUFFxGnAbZNEtWWxlmroryYbMtXr2YRj4mpaj7XKlWyKvgUkfcjkmNahGWB8DfiAxllv4lzvaQdvzgiDtUtVQGcb65c%2Ben0jO9QSXhM2xV6sGH7MZekGAerGLaE45JnA9%2FTbp84Yx9bX2jTBqycVbU8t%2Blvb6Tyg61nKxclqRYSEUYZkhLt%2FXDbC7a68uvE%2FTk0EGCuzbPww0JWGOz8Yc1vSyqA79qrfP5iuGWihRksI2AMO%2BY478GOqUBYMKAo815IdtVRiEpEMMgKwcsLg5CTYhHC%2F9BH%2B7BQX5oOodB8dK4kGjDUWDv4sQhnrxto90wjH%2FpzDduqcpwSMBy5wp0Pj%2BYTvIL%2Bm4O8Zn8P%2BC6Qlq4CBo2ESfgtYM8isDSVt40U6r2MFfuh%2FFWr0ziiNOXKbb8Gp%2B%2FKL6A1wRNiNIT5nlLPigAzAbAxjnC4TyJxTDeO0YpD%2FwrrW0GKOOC%2F3Z7&X-Amz-Signature=c39128a48355aa586d68cfb9e64acca8d16392680d2d781e9a19f4561fb52ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOA7IG5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGXWGjzR%2B%2FrbyY4BHaEO1fQXvI5%2B39H1s3nf6k7PM8ByAiEAhfIv7%2BrHJwBHtktMHBIVEnVV9Yku97pSNF2Co7To%2BAwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAjULWTAmGny0XRRCrcA9xvomiB4KBUvGw%2FxkqSiPRrTfGiotVKmhy91RcBsgHI%2ByyTR7IreIZAF%2BFZfQviUdWeU3j9Jtl4OjFzH7M%2F7Z%2F1whu9CNvatcdiMphpuQVU%2F1C4z7Yyt0LqYs4pVK9OX5otn5%2BahB5dUfkr8up%2BRRyz77%2BJ3CmrLd%2BPN%2Bk4pVqH8jqbLXEJ9FRyaz0VT0b0eieSDnuIkXuhYuirhO1ayGoXHG5j3wKm6%2FxkHjFsJAyhO6j3fjWE3iC5fmRXtwepZRzup0tFwhfcJ%2FdZpWwm43dH73GG%2BoSVJ76zYE8AqA%2FAwghJtb%2Buo4AhrZuy3TOu%2F%2BlVandJpPlDxuvIW0zUj8h1%2BxOj1ZQ2D2jrFmpHqoaz30fb5fyS3QGvcfPBGZgtxTGj8pHzCn%2FisplUFFxGnAbZNEtWWxlmroryYbMtXr2YRj4mpaj7XKlWyKvgUkfcjkmNahGWB8DfiAxllv4lzvaQdvzgiDtUtVQGcb65c%2Ben0jO9QSXhM2xV6sGH7MZekGAerGLaE45JnA9%2FTbp84Yx9bX2jTBqycVbU8t%2Blvb6Tyg61nKxclqRYSEUYZkhLt%2FXDbC7a68uvE%2FTk0EGCuzbPww0JWGOz8Yc1vSyqA79qrfP5iuGWihRksI2AMO%2BY478GOqUBYMKAo815IdtVRiEpEMMgKwcsLg5CTYhHC%2F9BH%2B7BQX5oOodB8dK4kGjDUWDv4sQhnrxto90wjH%2FpzDduqcpwSMBy5wp0Pj%2BYTvIL%2Bm4O8Zn8P%2BC6Qlq4CBo2ESfgtYM8isDSVt40U6r2MFfuh%2FFWr0ziiNOXKbb8Gp%2B%2FKL6A1wRNiNIT5nlLPigAzAbAxjnC4TyJxTDeO0YpD%2FwrrW0GKOOC%2F3Z7&X-Amz-Signature=21173e39c7da024775d50e965418dc721696230e2b20219d7791e4e846c8fd3d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOA7IG5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGXWGjzR%2B%2FrbyY4BHaEO1fQXvI5%2B39H1s3nf6k7PM8ByAiEAhfIv7%2BrHJwBHtktMHBIVEnVV9Yku97pSNF2Co7To%2BAwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAjULWTAmGny0XRRCrcA9xvomiB4KBUvGw%2FxkqSiPRrTfGiotVKmhy91RcBsgHI%2ByyTR7IreIZAF%2BFZfQviUdWeU3j9Jtl4OjFzH7M%2F7Z%2F1whu9CNvatcdiMphpuQVU%2F1C4z7Yyt0LqYs4pVK9OX5otn5%2BahB5dUfkr8up%2BRRyz77%2BJ3CmrLd%2BPN%2Bk4pVqH8jqbLXEJ9FRyaz0VT0b0eieSDnuIkXuhYuirhO1ayGoXHG5j3wKm6%2FxkHjFsJAyhO6j3fjWE3iC5fmRXtwepZRzup0tFwhfcJ%2FdZpWwm43dH73GG%2BoSVJ76zYE8AqA%2FAwghJtb%2Buo4AhrZuy3TOu%2F%2BlVandJpPlDxuvIW0zUj8h1%2BxOj1ZQ2D2jrFmpHqoaz30fb5fyS3QGvcfPBGZgtxTGj8pHzCn%2FisplUFFxGnAbZNEtWWxlmroryYbMtXr2YRj4mpaj7XKlWyKvgUkfcjkmNahGWB8DfiAxllv4lzvaQdvzgiDtUtVQGcb65c%2Ben0jO9QSXhM2xV6sGH7MZekGAerGLaE45JnA9%2FTbp84Yx9bX2jTBqycVbU8t%2Blvb6Tyg61nKxclqRYSEUYZkhLt%2FXDbC7a68uvE%2FTk0EGCuzbPww0JWGOz8Yc1vSyqA79qrfP5iuGWihRksI2AMO%2BY478GOqUBYMKAo815IdtVRiEpEMMgKwcsLg5CTYhHC%2F9BH%2B7BQX5oOodB8dK4kGjDUWDv4sQhnrxto90wjH%2FpzDduqcpwSMBy5wp0Pj%2BYTvIL%2Bm4O8Zn8P%2BC6Qlq4CBo2ESfgtYM8isDSVt40U6r2MFfuh%2FFWr0ziiNOXKbb8Gp%2B%2FKL6A1wRNiNIT5nlLPigAzAbAxjnC4TyJxTDeO0YpD%2FwrrW0GKOOC%2F3Z7&X-Amz-Signature=86016100e057e2c8843a14a827128dcaa01a07dd1744701722772c8fb3fa5a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOA7IG5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGXWGjzR%2B%2FrbyY4BHaEO1fQXvI5%2B39H1s3nf6k7PM8ByAiEAhfIv7%2BrHJwBHtktMHBIVEnVV9Yku97pSNF2Co7To%2BAwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAjULWTAmGny0XRRCrcA9xvomiB4KBUvGw%2FxkqSiPRrTfGiotVKmhy91RcBsgHI%2ByyTR7IreIZAF%2BFZfQviUdWeU3j9Jtl4OjFzH7M%2F7Z%2F1whu9CNvatcdiMphpuQVU%2F1C4z7Yyt0LqYs4pVK9OX5otn5%2BahB5dUfkr8up%2BRRyz77%2BJ3CmrLd%2BPN%2Bk4pVqH8jqbLXEJ9FRyaz0VT0b0eieSDnuIkXuhYuirhO1ayGoXHG5j3wKm6%2FxkHjFsJAyhO6j3fjWE3iC5fmRXtwepZRzup0tFwhfcJ%2FdZpWwm43dH73GG%2BoSVJ76zYE8AqA%2FAwghJtb%2Buo4AhrZuy3TOu%2F%2BlVandJpPlDxuvIW0zUj8h1%2BxOj1ZQ2D2jrFmpHqoaz30fb5fyS3QGvcfPBGZgtxTGj8pHzCn%2FisplUFFxGnAbZNEtWWxlmroryYbMtXr2YRj4mpaj7XKlWyKvgUkfcjkmNahGWB8DfiAxllv4lzvaQdvzgiDtUtVQGcb65c%2Ben0jO9QSXhM2xV6sGH7MZekGAerGLaE45JnA9%2FTbp84Yx9bX2jTBqycVbU8t%2Blvb6Tyg61nKxclqRYSEUYZkhLt%2FXDbC7a68uvE%2FTk0EGCuzbPww0JWGOz8Yc1vSyqA79qrfP5iuGWihRksI2AMO%2BY478GOqUBYMKAo815IdtVRiEpEMMgKwcsLg5CTYhHC%2F9BH%2B7BQX5oOodB8dK4kGjDUWDv4sQhnrxto90wjH%2FpzDduqcpwSMBy5wp0Pj%2BYTvIL%2Bm4O8Zn8P%2BC6Qlq4CBo2ESfgtYM8isDSVt40U6r2MFfuh%2FFWr0ziiNOXKbb8Gp%2B%2FKL6A1wRNiNIT5nlLPigAzAbAxjnC4TyJxTDeO0YpD%2FwrrW0GKOOC%2F3Z7&X-Amz-Signature=368087e8aad5e9be7293ef6cdab57bc14368c1679a8a284a339d18e77e5718f0&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
