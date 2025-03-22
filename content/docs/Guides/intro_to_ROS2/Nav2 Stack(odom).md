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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PBMBX3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGiqJ5bguZP4QkzXmvTU97oGjQeM3iuLU%2BoNAgY2JvG9AiAeTKPJQbMPjEOajMeHFPWZ%2FE0BXeD8qfkjbsG%2FBbUqfyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8AGOfx8znbK7JrIKtwDhqG5eCh%2Bo8fHxRAwgutJBQZ2hsjRNkU5s%2FjML%2F%2Bsefr5%2BQ%2Bu4gbOpaUbF00DcSWzyLg2b2kQmdihv5mItzWtl5w08yRfPjg3e89x8N5DvqT49hHR%2F8ioEGKKw%2BpKmhSxwjG99AZ7%2BMLwRMmk6INmVzoSNX4JCpHCnHlk9SUf2oaIGn7wxisHvZPcAy4qcqKETDg1Mf0fgfjFka1LJcd1lyiPqr%2BRIRBoHYnGzt3MyvXjvtmyEyyuMwW%2F0OKy%2BSyKkotFw3Jo31lsD9rjCSb36CZbqNfrkMPHugIl3AYwnt22sxYUNfHZy2z7X20bLD479MYYTMAKqfUccE1gU9Kw1djqmjdSZGfOfqQ0EbRRoiptDt0b%2FlGbkvJQ1bcQkwJkUSGoeZhILM4jKYQpGHwQd%2FxcKzEG5w89D%2FNYtEwGJv%2FN3nHCcZolMU7AeI5si%2BFNz75SsAxm%2FXzRyyVxOiixBCqz2hZzBko43AI5uuXci1BkVmrhWsebIbp%2BRn4GmL7jsoaPiLBYOaf%2Fgxt%2FhkjoptDIGmRLUBPsZ5DWXWUiVDKTTYS6JTjpoWH6hCS2ydHmUqVPI%2FkjjH2lY86HVf6zQCM%2BRL4lTPa6M1Hu5T8SobhO%2FUaBICfo%2Fm4ypkUw7e%2F7vgY6pgFxop5AML8Gn1XF%2BSyTbDJN8fFhgblPgCB01YABdGYpvz14N5Usu37mfOVAcNFBmqz4K8grYa%2F6pyO29V9f8sE2xS6%2FuMy95a7pMdGQoWqiwWi9BEnSZD7rqFrMNf0mAhhky1Cp7O69IW%2BzCmxSI22pCfz%2FG5UnyqXBfzWIS4KEJBG1iAzd%2FvkGN%2FKHJd8oXV03NoyCwpOllRjogq%2Fd%2BnNveBhWZC2v&X-Amz-Signature=db1a3b6a15cb6d1cd669b53529339dbc78a1ba6627cafc674de7472dd9291bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PBMBX3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGiqJ5bguZP4QkzXmvTU97oGjQeM3iuLU%2BoNAgY2JvG9AiAeTKPJQbMPjEOajMeHFPWZ%2FE0BXeD8qfkjbsG%2FBbUqfyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8AGOfx8znbK7JrIKtwDhqG5eCh%2Bo8fHxRAwgutJBQZ2hsjRNkU5s%2FjML%2F%2Bsefr5%2BQ%2Bu4gbOpaUbF00DcSWzyLg2b2kQmdihv5mItzWtl5w08yRfPjg3e89x8N5DvqT49hHR%2F8ioEGKKw%2BpKmhSxwjG99AZ7%2BMLwRMmk6INmVzoSNX4JCpHCnHlk9SUf2oaIGn7wxisHvZPcAy4qcqKETDg1Mf0fgfjFka1LJcd1lyiPqr%2BRIRBoHYnGzt3MyvXjvtmyEyyuMwW%2F0OKy%2BSyKkotFw3Jo31lsD9rjCSb36CZbqNfrkMPHugIl3AYwnt22sxYUNfHZy2z7X20bLD479MYYTMAKqfUccE1gU9Kw1djqmjdSZGfOfqQ0EbRRoiptDt0b%2FlGbkvJQ1bcQkwJkUSGoeZhILM4jKYQpGHwQd%2FxcKzEG5w89D%2FNYtEwGJv%2FN3nHCcZolMU7AeI5si%2BFNz75SsAxm%2FXzRyyVxOiixBCqz2hZzBko43AI5uuXci1BkVmrhWsebIbp%2BRn4GmL7jsoaPiLBYOaf%2Fgxt%2FhkjoptDIGmRLUBPsZ5DWXWUiVDKTTYS6JTjpoWH6hCS2ydHmUqVPI%2FkjjH2lY86HVf6zQCM%2BRL4lTPa6M1Hu5T8SobhO%2FUaBICfo%2Fm4ypkUw7e%2F7vgY6pgFxop5AML8Gn1XF%2BSyTbDJN8fFhgblPgCB01YABdGYpvz14N5Usu37mfOVAcNFBmqz4K8grYa%2F6pyO29V9f8sE2xS6%2FuMy95a7pMdGQoWqiwWi9BEnSZD7rqFrMNf0mAhhky1Cp7O69IW%2BzCmxSI22pCfz%2FG5UnyqXBfzWIS4KEJBG1iAzd%2FvkGN%2FKHJd8oXV03NoyCwpOllRjogq%2Fd%2BnNveBhWZC2v&X-Amz-Signature=26846a48e16e86e68d41d370ab2fc6c7360e88b9af20e16920ffb37795f566d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PBMBX3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGiqJ5bguZP4QkzXmvTU97oGjQeM3iuLU%2BoNAgY2JvG9AiAeTKPJQbMPjEOajMeHFPWZ%2FE0BXeD8qfkjbsG%2FBbUqfyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8AGOfx8znbK7JrIKtwDhqG5eCh%2Bo8fHxRAwgutJBQZ2hsjRNkU5s%2FjML%2F%2Bsefr5%2BQ%2Bu4gbOpaUbF00DcSWzyLg2b2kQmdihv5mItzWtl5w08yRfPjg3e89x8N5DvqT49hHR%2F8ioEGKKw%2BpKmhSxwjG99AZ7%2BMLwRMmk6INmVzoSNX4JCpHCnHlk9SUf2oaIGn7wxisHvZPcAy4qcqKETDg1Mf0fgfjFka1LJcd1lyiPqr%2BRIRBoHYnGzt3MyvXjvtmyEyyuMwW%2F0OKy%2BSyKkotFw3Jo31lsD9rjCSb36CZbqNfrkMPHugIl3AYwnt22sxYUNfHZy2z7X20bLD479MYYTMAKqfUccE1gU9Kw1djqmjdSZGfOfqQ0EbRRoiptDt0b%2FlGbkvJQ1bcQkwJkUSGoeZhILM4jKYQpGHwQd%2FxcKzEG5w89D%2FNYtEwGJv%2FN3nHCcZolMU7AeI5si%2BFNz75SsAxm%2FXzRyyVxOiixBCqz2hZzBko43AI5uuXci1BkVmrhWsebIbp%2BRn4GmL7jsoaPiLBYOaf%2Fgxt%2FhkjoptDIGmRLUBPsZ5DWXWUiVDKTTYS6JTjpoWH6hCS2ydHmUqVPI%2FkjjH2lY86HVf6zQCM%2BRL4lTPa6M1Hu5T8SobhO%2FUaBICfo%2Fm4ypkUw7e%2F7vgY6pgFxop5AML8Gn1XF%2BSyTbDJN8fFhgblPgCB01YABdGYpvz14N5Usu37mfOVAcNFBmqz4K8grYa%2F6pyO29V9f8sE2xS6%2FuMy95a7pMdGQoWqiwWi9BEnSZD7rqFrMNf0mAhhky1Cp7O69IW%2BzCmxSI22pCfz%2FG5UnyqXBfzWIS4KEJBG1iAzd%2FvkGN%2FKHJd8oXV03NoyCwpOllRjogq%2Fd%2BnNveBhWZC2v&X-Amz-Signature=25bb5ff7abc830b80776c8719377a1e2d63b9e412a71fc6be58f47bb37849cde&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PBMBX3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGiqJ5bguZP4QkzXmvTU97oGjQeM3iuLU%2BoNAgY2JvG9AiAeTKPJQbMPjEOajMeHFPWZ%2FE0BXeD8qfkjbsG%2FBbUqfyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8AGOfx8znbK7JrIKtwDhqG5eCh%2Bo8fHxRAwgutJBQZ2hsjRNkU5s%2FjML%2F%2Bsefr5%2BQ%2Bu4gbOpaUbF00DcSWzyLg2b2kQmdihv5mItzWtl5w08yRfPjg3e89x8N5DvqT49hHR%2F8ioEGKKw%2BpKmhSxwjG99AZ7%2BMLwRMmk6INmVzoSNX4JCpHCnHlk9SUf2oaIGn7wxisHvZPcAy4qcqKETDg1Mf0fgfjFka1LJcd1lyiPqr%2BRIRBoHYnGzt3MyvXjvtmyEyyuMwW%2F0OKy%2BSyKkotFw3Jo31lsD9rjCSb36CZbqNfrkMPHugIl3AYwnt22sxYUNfHZy2z7X20bLD479MYYTMAKqfUccE1gU9Kw1djqmjdSZGfOfqQ0EbRRoiptDt0b%2FlGbkvJQ1bcQkwJkUSGoeZhILM4jKYQpGHwQd%2FxcKzEG5w89D%2FNYtEwGJv%2FN3nHCcZolMU7AeI5si%2BFNz75SsAxm%2FXzRyyVxOiixBCqz2hZzBko43AI5uuXci1BkVmrhWsebIbp%2BRn4GmL7jsoaPiLBYOaf%2Fgxt%2FhkjoptDIGmRLUBPsZ5DWXWUiVDKTTYS6JTjpoWH6hCS2ydHmUqVPI%2FkjjH2lY86HVf6zQCM%2BRL4lTPa6M1Hu5T8SobhO%2FUaBICfo%2Fm4ypkUw7e%2F7vgY6pgFxop5AML8Gn1XF%2BSyTbDJN8fFhgblPgCB01YABdGYpvz14N5Usu37mfOVAcNFBmqz4K8grYa%2F6pyO29V9f8sE2xS6%2FuMy95a7pMdGQoWqiwWi9BEnSZD7rqFrMNf0mAhhky1Cp7O69IW%2BzCmxSI22pCfz%2FG5UnyqXBfzWIS4KEJBG1iAzd%2FvkGN%2FKHJd8oXV03NoyCwpOllRjogq%2Fd%2BnNveBhWZC2v&X-Amz-Signature=09476c48367f26ae0cbc0cd8142b95e7ab4969382c971cd6e88449ae4ce8cdba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2PBMBX3%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGiqJ5bguZP4QkzXmvTU97oGjQeM3iuLU%2BoNAgY2JvG9AiAeTKPJQbMPjEOajMeHFPWZ%2FE0BXeD8qfkjbsG%2FBbUqfyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8AGOfx8znbK7JrIKtwDhqG5eCh%2Bo8fHxRAwgutJBQZ2hsjRNkU5s%2FjML%2F%2Bsefr5%2BQ%2Bu4gbOpaUbF00DcSWzyLg2b2kQmdihv5mItzWtl5w08yRfPjg3e89x8N5DvqT49hHR%2F8ioEGKKw%2BpKmhSxwjG99AZ7%2BMLwRMmk6INmVzoSNX4JCpHCnHlk9SUf2oaIGn7wxisHvZPcAy4qcqKETDg1Mf0fgfjFka1LJcd1lyiPqr%2BRIRBoHYnGzt3MyvXjvtmyEyyuMwW%2F0OKy%2BSyKkotFw3Jo31lsD9rjCSb36CZbqNfrkMPHugIl3AYwnt22sxYUNfHZy2z7X20bLD479MYYTMAKqfUccE1gU9Kw1djqmjdSZGfOfqQ0EbRRoiptDt0b%2FlGbkvJQ1bcQkwJkUSGoeZhILM4jKYQpGHwQd%2FxcKzEG5w89D%2FNYtEwGJv%2FN3nHCcZolMU7AeI5si%2BFNz75SsAxm%2FXzRyyVxOiixBCqz2hZzBko43AI5uuXci1BkVmrhWsebIbp%2BRn4GmL7jsoaPiLBYOaf%2Fgxt%2FhkjoptDIGmRLUBPsZ5DWXWUiVDKTTYS6JTjpoWH6hCS2ydHmUqVPI%2FkjjH2lY86HVf6zQCM%2BRL4lTPa6M1Hu5T8SobhO%2FUaBICfo%2Fm4ypkUw7e%2F7vgY6pgFxop5AML8Gn1XF%2BSyTbDJN8fFhgblPgCB01YABdGYpvz14N5Usu37mfOVAcNFBmqz4K8grYa%2F6pyO29V9f8sE2xS6%2FuMy95a7pMdGQoWqiwWi9BEnSZD7rqFrMNf0mAhhky1Cp7O69IW%2BzCmxSI22pCfz%2FG5UnyqXBfzWIS4KEJBG1iAzd%2FvkGN%2FKHJd8oXV03NoyCwpOllRjogq%2Fd%2BnNveBhWZC2v&X-Amz-Signature=a9d586638057365bd99d4a317b1311ef8054a3c982d8a79fe3d77405a6017754&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
