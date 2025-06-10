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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVHAOT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5sGh1hMYvMcDBN%2B0hDS5A%2F6Aa77KWkQJeK9mvt5WSAiEAkp1zvcorLo%2BwJmyaNuAlP3Uog6NmFmURcX5Sh4NDaekqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKadLR%2F1mbE4D6JVAyrcAz%2BHcxkxEfvWdtn3c8mx7Yl2j%2BynAK3ryn9xMAlx%2Bo5LdGLhYEhBBR2JRFtVrxNuJkyz3iNBfWPUN3T76WUkHlvjsNIwiW75vMMk2Iy2kQ2OSRndVrw94ar8iRMOD1Kb%2BvvhJF%2F5SoqtyR6Z0wUliACSYqDYVorQQ3svLWAYQpzbSzQGHT6Cpw6mY45WFp3YAfbce5BiWcSTAJhA5RsGxwti3bcbKj3Z1T8q3y0NrfFLIW%2BDfPU5wEbqm3tiLgFIFifSkTbXd0xEqLw31cCgALQBH9pk%2BqR7H2ruX31fznMIY817yLP2%2FJEWfOdlxx8YkhnqDbbSF5lwOrqlXAMpInvN7IKjTzR5cq88EJmENB0939st9Tt6nCh3aa8GXd%2FJlGn8uuRKhQHzmZYfpmD%2BVS7OHh1V4KSXPXRy6KEBChfP4lLUy7NgC5lxg02phG6cK8RWg1wHNraz4UhfnEcaBuobzQaw89bVGWgKyL9Wof6JWzL%2F%2F%2B9dvcL%2F%2B%2BDiKhr4DteAyg8ojqnAqPbUoocpZN%2BTmlnQUOy6u9Z8YuIA4eieOAuEspIUPpAdUxX%2FCGjpujDWV1t7%2BqoxDNT1G7yWcEoqWppclSrLSjFha1OGEFYGizxlmt5cWGcvpWkOMO%2Fen8IGOqUBPKKCPlgm8Hoq5OvVwx4nAJwCZAi8iVAWTaAXRffQ7uDkAtCZnsaSBHt%2BXekf9NMwoNPnOD8V090e5FOdxiIKRva7W3DsOe44TvrzbS9C3wEb4x72R%2FQgfNX2XbVncRKYU5JHpXT91H06OSkNv3YhVSMhVrtG86TPWKsKDw%2B6bll0q9xZF%2BGHnR9I5wGP%2Bo1u6chE%2Bg8pki%2FImFQE13o6zPtw9c%2Bq&X-Amz-Signature=5d418adaa7f5b521d17817c6c2cfc6475f7b3755d7e7b0962b1209487cce193a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVHAOT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5sGh1hMYvMcDBN%2B0hDS5A%2F6Aa77KWkQJeK9mvt5WSAiEAkp1zvcorLo%2BwJmyaNuAlP3Uog6NmFmURcX5Sh4NDaekqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKadLR%2F1mbE4D6JVAyrcAz%2BHcxkxEfvWdtn3c8mx7Yl2j%2BynAK3ryn9xMAlx%2Bo5LdGLhYEhBBR2JRFtVrxNuJkyz3iNBfWPUN3T76WUkHlvjsNIwiW75vMMk2Iy2kQ2OSRndVrw94ar8iRMOD1Kb%2BvvhJF%2F5SoqtyR6Z0wUliACSYqDYVorQQ3svLWAYQpzbSzQGHT6Cpw6mY45WFp3YAfbce5BiWcSTAJhA5RsGxwti3bcbKj3Z1T8q3y0NrfFLIW%2BDfPU5wEbqm3tiLgFIFifSkTbXd0xEqLw31cCgALQBH9pk%2BqR7H2ruX31fznMIY817yLP2%2FJEWfOdlxx8YkhnqDbbSF5lwOrqlXAMpInvN7IKjTzR5cq88EJmENB0939st9Tt6nCh3aa8GXd%2FJlGn8uuRKhQHzmZYfpmD%2BVS7OHh1V4KSXPXRy6KEBChfP4lLUy7NgC5lxg02phG6cK8RWg1wHNraz4UhfnEcaBuobzQaw89bVGWgKyL9Wof6JWzL%2F%2F%2B9dvcL%2F%2B%2BDiKhr4DteAyg8ojqnAqPbUoocpZN%2BTmlnQUOy6u9Z8YuIA4eieOAuEspIUPpAdUxX%2FCGjpujDWV1t7%2BqoxDNT1G7yWcEoqWppclSrLSjFha1OGEFYGizxlmt5cWGcvpWkOMO%2Fen8IGOqUBPKKCPlgm8Hoq5OvVwx4nAJwCZAi8iVAWTaAXRffQ7uDkAtCZnsaSBHt%2BXekf9NMwoNPnOD8V090e5FOdxiIKRva7W3DsOe44TvrzbS9C3wEb4x72R%2FQgfNX2XbVncRKYU5JHpXT91H06OSkNv3YhVSMhVrtG86TPWKsKDw%2B6bll0q9xZF%2BGHnR9I5wGP%2Bo1u6chE%2Bg8pki%2FImFQE13o6zPtw9c%2Bq&X-Amz-Signature=28b718b9440847b366cc649971f1e699d8873731c4344617b541a0e0c3c4b372&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVHAOT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5sGh1hMYvMcDBN%2B0hDS5A%2F6Aa77KWkQJeK9mvt5WSAiEAkp1zvcorLo%2BwJmyaNuAlP3Uog6NmFmURcX5Sh4NDaekqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKadLR%2F1mbE4D6JVAyrcAz%2BHcxkxEfvWdtn3c8mx7Yl2j%2BynAK3ryn9xMAlx%2Bo5LdGLhYEhBBR2JRFtVrxNuJkyz3iNBfWPUN3T76WUkHlvjsNIwiW75vMMk2Iy2kQ2OSRndVrw94ar8iRMOD1Kb%2BvvhJF%2F5SoqtyR6Z0wUliACSYqDYVorQQ3svLWAYQpzbSzQGHT6Cpw6mY45WFp3YAfbce5BiWcSTAJhA5RsGxwti3bcbKj3Z1T8q3y0NrfFLIW%2BDfPU5wEbqm3tiLgFIFifSkTbXd0xEqLw31cCgALQBH9pk%2BqR7H2ruX31fznMIY817yLP2%2FJEWfOdlxx8YkhnqDbbSF5lwOrqlXAMpInvN7IKjTzR5cq88EJmENB0939st9Tt6nCh3aa8GXd%2FJlGn8uuRKhQHzmZYfpmD%2BVS7OHh1V4KSXPXRy6KEBChfP4lLUy7NgC5lxg02phG6cK8RWg1wHNraz4UhfnEcaBuobzQaw89bVGWgKyL9Wof6JWzL%2F%2F%2B9dvcL%2F%2B%2BDiKhr4DteAyg8ojqnAqPbUoocpZN%2BTmlnQUOy6u9Z8YuIA4eieOAuEspIUPpAdUxX%2FCGjpujDWV1t7%2BqoxDNT1G7yWcEoqWppclSrLSjFha1OGEFYGizxlmt5cWGcvpWkOMO%2Fen8IGOqUBPKKCPlgm8Hoq5OvVwx4nAJwCZAi8iVAWTaAXRffQ7uDkAtCZnsaSBHt%2BXekf9NMwoNPnOD8V090e5FOdxiIKRva7W3DsOe44TvrzbS9C3wEb4x72R%2FQgfNX2XbVncRKYU5JHpXT91H06OSkNv3YhVSMhVrtG86TPWKsKDw%2B6bll0q9xZF%2BGHnR9I5wGP%2Bo1u6chE%2Bg8pki%2FImFQE13o6zPtw9c%2Bq&X-Amz-Signature=72a41c8d32ec906b1ef48fd577a677583c8a763c9f257d4ecbbdce6febaee8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVHAOT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5sGh1hMYvMcDBN%2B0hDS5A%2F6Aa77KWkQJeK9mvt5WSAiEAkp1zvcorLo%2BwJmyaNuAlP3Uog6NmFmURcX5Sh4NDaekqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKadLR%2F1mbE4D6JVAyrcAz%2BHcxkxEfvWdtn3c8mx7Yl2j%2BynAK3ryn9xMAlx%2Bo5LdGLhYEhBBR2JRFtVrxNuJkyz3iNBfWPUN3T76WUkHlvjsNIwiW75vMMk2Iy2kQ2OSRndVrw94ar8iRMOD1Kb%2BvvhJF%2F5SoqtyR6Z0wUliACSYqDYVorQQ3svLWAYQpzbSzQGHT6Cpw6mY45WFp3YAfbce5BiWcSTAJhA5RsGxwti3bcbKj3Z1T8q3y0NrfFLIW%2BDfPU5wEbqm3tiLgFIFifSkTbXd0xEqLw31cCgALQBH9pk%2BqR7H2ruX31fznMIY817yLP2%2FJEWfOdlxx8YkhnqDbbSF5lwOrqlXAMpInvN7IKjTzR5cq88EJmENB0939st9Tt6nCh3aa8GXd%2FJlGn8uuRKhQHzmZYfpmD%2BVS7OHh1V4KSXPXRy6KEBChfP4lLUy7NgC5lxg02phG6cK8RWg1wHNraz4UhfnEcaBuobzQaw89bVGWgKyL9Wof6JWzL%2F%2F%2B9dvcL%2F%2B%2BDiKhr4DteAyg8ojqnAqPbUoocpZN%2BTmlnQUOy6u9Z8YuIA4eieOAuEspIUPpAdUxX%2FCGjpujDWV1t7%2BqoxDNT1G7yWcEoqWppclSrLSjFha1OGEFYGizxlmt5cWGcvpWkOMO%2Fen8IGOqUBPKKCPlgm8Hoq5OvVwx4nAJwCZAi8iVAWTaAXRffQ7uDkAtCZnsaSBHt%2BXekf9NMwoNPnOD8V090e5FOdxiIKRva7W3DsOe44TvrzbS9C3wEb4x72R%2FQgfNX2XbVncRKYU5JHpXT91H06OSkNv3YhVSMhVrtG86TPWKsKDw%2B6bll0q9xZF%2BGHnR9I5wGP%2Bo1u6chE%2Bg8pki%2FImFQE13o6zPtw9c%2Bq&X-Amz-Signature=b4bf59177a26ddbc5f45eae993119d7101d3f53c62701eb7318366a1b417499e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVHAOT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5sGh1hMYvMcDBN%2B0hDS5A%2F6Aa77KWkQJeK9mvt5WSAiEAkp1zvcorLo%2BwJmyaNuAlP3Uog6NmFmURcX5Sh4NDaekqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKadLR%2F1mbE4D6JVAyrcAz%2BHcxkxEfvWdtn3c8mx7Yl2j%2BynAK3ryn9xMAlx%2Bo5LdGLhYEhBBR2JRFtVrxNuJkyz3iNBfWPUN3T76WUkHlvjsNIwiW75vMMk2Iy2kQ2OSRndVrw94ar8iRMOD1Kb%2BvvhJF%2F5SoqtyR6Z0wUliACSYqDYVorQQ3svLWAYQpzbSzQGHT6Cpw6mY45WFp3YAfbce5BiWcSTAJhA5RsGxwti3bcbKj3Z1T8q3y0NrfFLIW%2BDfPU5wEbqm3tiLgFIFifSkTbXd0xEqLw31cCgALQBH9pk%2BqR7H2ruX31fznMIY817yLP2%2FJEWfOdlxx8YkhnqDbbSF5lwOrqlXAMpInvN7IKjTzR5cq88EJmENB0939st9Tt6nCh3aa8GXd%2FJlGn8uuRKhQHzmZYfpmD%2BVS7OHh1V4KSXPXRy6KEBChfP4lLUy7NgC5lxg02phG6cK8RWg1wHNraz4UhfnEcaBuobzQaw89bVGWgKyL9Wof6JWzL%2F%2F%2B9dvcL%2F%2B%2BDiKhr4DteAyg8ojqnAqPbUoocpZN%2BTmlnQUOy6u9Z8YuIA4eieOAuEspIUPpAdUxX%2FCGjpujDWV1t7%2BqoxDNT1G7yWcEoqWppclSrLSjFha1OGEFYGizxlmt5cWGcvpWkOMO%2Fen8IGOqUBPKKCPlgm8Hoq5OvVwx4nAJwCZAi8iVAWTaAXRffQ7uDkAtCZnsaSBHt%2BXekf9NMwoNPnOD8V090e5FOdxiIKRva7W3DsOe44TvrzbS9C3wEb4x72R%2FQgfNX2XbVncRKYU5JHpXT91H06OSkNv3YhVSMhVrtG86TPWKsKDw%2B6bll0q9xZF%2BGHnR9I5wGP%2Bo1u6chE%2Bg8pki%2FImFQE13o6zPtw9c%2Bq&X-Amz-Signature=967024229b7a7f8c6e8021bd054b7c2ae16dab7cad4a9a277be63bfc2b35ac65&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
