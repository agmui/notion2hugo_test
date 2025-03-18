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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BT6227%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwCasMYx5%2FlyUxwJKRTeN7x%2FaR03iUkURByqGcu0%2BhtQIgRFg8QkyIp6bzJ3y4KLF9IT5pP4VLDe6tno6C6Hh5ID0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPxKixD%2ByKDRhhGaVircAzfwDHeILWWQ5gAA%2FN3InA01kj6%2FPK4PWXJqyE0x%2FOE1djCjrzTF9Dfq%2BZQWWRr33%2BECvpHhR%2B%2B5QIb7buyiJBHqs%2Bldbb%2F0w60KxM4TLUiR7dylbKHt6xhDeXCIaOLzX%2FZ%2F2dRhzmFcaClBT%2BA3AL%2FnB9TPV%2F4zBjmfZTBG%2FBCgQtUQAiR75twOUBId40fd4O9s2Obho8l69E%2FAW%2B%2ByysgVuZlLlQzt%2BoU%2BpQ0JAkB%2FQHcDr8gYVNC2UY5%2FVvMliv3LLeVDwAUHl46uAn%2BKN5By16Esmt3XNbYMGmzjzg1ZEWBTQXkMvVSTWk369hBlLxbILnjzEQNBImGoJ77l75Dbw3s6O947wRyI9Cpz%2FwdOlc2TQbg0if%2FsljuKL5NjzS3r5qnv4flglw96uvSD0kghfY%2BOFlU2YjnR6r83KZGxu26lK224zKF%2B56DUin8yjgLTyEqXla2Cj1F%2BSfWWIVo1Kciet2bruLuN3m5ruaKzuI1ncGaLsGPqvfX4Ya8P25kqB7cgRHkpUJjzbnAaYh5oFcxiyaJs6MeiFYPdB1ttDozVUhjSDj1bCtKgmqwmOtyk9uAa8gVz8Ln4WZannjt0RSJuo45mz7wtNoOH%2F8X0yF6My6IJwNih1YXoMJmV5r4GOqUB5c8wjUb%2FvVlKBe%2B7rtO7nVTJUw2XClhY2hV5PLqztm58Wx6VWqpHXORMr0Fp0GSQyXVaOBAt7Zr5gg6qOK5brmd%2BpTGWEESDGIhG7lHeXfaq5YMiR9TY8cQfZnxQrXR%2FHRH%2ByXT1mZFYU52LH0L58qSGEwhwPDvdDRXSJIdSJnTcq1XdZIshFIJ7uybDnwsTzoZQOOweJh%2BTBqsA8ftM%2B3fHI9QU&X-Amz-Signature=945dbcdcfa6992030ae4be13471ce4019468e64a769bfaacca52f61a3e81daa2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BT6227%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwCasMYx5%2FlyUxwJKRTeN7x%2FaR03iUkURByqGcu0%2BhtQIgRFg8QkyIp6bzJ3y4KLF9IT5pP4VLDe6tno6C6Hh5ID0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPxKixD%2ByKDRhhGaVircAzfwDHeILWWQ5gAA%2FN3InA01kj6%2FPK4PWXJqyE0x%2FOE1djCjrzTF9Dfq%2BZQWWRr33%2BECvpHhR%2B%2B5QIb7buyiJBHqs%2Bldbb%2F0w60KxM4TLUiR7dylbKHt6xhDeXCIaOLzX%2FZ%2F2dRhzmFcaClBT%2BA3AL%2FnB9TPV%2F4zBjmfZTBG%2FBCgQtUQAiR75twOUBId40fd4O9s2Obho8l69E%2FAW%2B%2ByysgVuZlLlQzt%2BoU%2BpQ0JAkB%2FQHcDr8gYVNC2UY5%2FVvMliv3LLeVDwAUHl46uAn%2BKN5By16Esmt3XNbYMGmzjzg1ZEWBTQXkMvVSTWk369hBlLxbILnjzEQNBImGoJ77l75Dbw3s6O947wRyI9Cpz%2FwdOlc2TQbg0if%2FsljuKL5NjzS3r5qnv4flglw96uvSD0kghfY%2BOFlU2YjnR6r83KZGxu26lK224zKF%2B56DUin8yjgLTyEqXla2Cj1F%2BSfWWIVo1Kciet2bruLuN3m5ruaKzuI1ncGaLsGPqvfX4Ya8P25kqB7cgRHkpUJjzbnAaYh5oFcxiyaJs6MeiFYPdB1ttDozVUhjSDj1bCtKgmqwmOtyk9uAa8gVz8Ln4WZannjt0RSJuo45mz7wtNoOH%2F8X0yF6My6IJwNih1YXoMJmV5r4GOqUB5c8wjUb%2FvVlKBe%2B7rtO7nVTJUw2XClhY2hV5PLqztm58Wx6VWqpHXORMr0Fp0GSQyXVaOBAt7Zr5gg6qOK5brmd%2BpTGWEESDGIhG7lHeXfaq5YMiR9TY8cQfZnxQrXR%2FHRH%2ByXT1mZFYU52LH0L58qSGEwhwPDvdDRXSJIdSJnTcq1XdZIshFIJ7uybDnwsTzoZQOOweJh%2BTBqsA8ftM%2B3fHI9QU&X-Amz-Signature=6937a7c23f8eb63e309ae103cb3c23848857ff0eba5189b161d455d08b649079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BT6227%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwCasMYx5%2FlyUxwJKRTeN7x%2FaR03iUkURByqGcu0%2BhtQIgRFg8QkyIp6bzJ3y4KLF9IT5pP4VLDe6tno6C6Hh5ID0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPxKixD%2ByKDRhhGaVircAzfwDHeILWWQ5gAA%2FN3InA01kj6%2FPK4PWXJqyE0x%2FOE1djCjrzTF9Dfq%2BZQWWRr33%2BECvpHhR%2B%2B5QIb7buyiJBHqs%2Bldbb%2F0w60KxM4TLUiR7dylbKHt6xhDeXCIaOLzX%2FZ%2F2dRhzmFcaClBT%2BA3AL%2FnB9TPV%2F4zBjmfZTBG%2FBCgQtUQAiR75twOUBId40fd4O9s2Obho8l69E%2FAW%2B%2ByysgVuZlLlQzt%2BoU%2BpQ0JAkB%2FQHcDr8gYVNC2UY5%2FVvMliv3LLeVDwAUHl46uAn%2BKN5By16Esmt3XNbYMGmzjzg1ZEWBTQXkMvVSTWk369hBlLxbILnjzEQNBImGoJ77l75Dbw3s6O947wRyI9Cpz%2FwdOlc2TQbg0if%2FsljuKL5NjzS3r5qnv4flglw96uvSD0kghfY%2BOFlU2YjnR6r83KZGxu26lK224zKF%2B56DUin8yjgLTyEqXla2Cj1F%2BSfWWIVo1Kciet2bruLuN3m5ruaKzuI1ncGaLsGPqvfX4Ya8P25kqB7cgRHkpUJjzbnAaYh5oFcxiyaJs6MeiFYPdB1ttDozVUhjSDj1bCtKgmqwmOtyk9uAa8gVz8Ln4WZannjt0RSJuo45mz7wtNoOH%2F8X0yF6My6IJwNih1YXoMJmV5r4GOqUB5c8wjUb%2FvVlKBe%2B7rtO7nVTJUw2XClhY2hV5PLqztm58Wx6VWqpHXORMr0Fp0GSQyXVaOBAt7Zr5gg6qOK5brmd%2BpTGWEESDGIhG7lHeXfaq5YMiR9TY8cQfZnxQrXR%2FHRH%2ByXT1mZFYU52LH0L58qSGEwhwPDvdDRXSJIdSJnTcq1XdZIshFIJ7uybDnwsTzoZQOOweJh%2BTBqsA8ftM%2B3fHI9QU&X-Amz-Signature=3cd56d32bac100b7821ab1128af82304468a94470729585c381c70b738388c36&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BT6227%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwCasMYx5%2FlyUxwJKRTeN7x%2FaR03iUkURByqGcu0%2BhtQIgRFg8QkyIp6bzJ3y4KLF9IT5pP4VLDe6tno6C6Hh5ID0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPxKixD%2ByKDRhhGaVircAzfwDHeILWWQ5gAA%2FN3InA01kj6%2FPK4PWXJqyE0x%2FOE1djCjrzTF9Dfq%2BZQWWRr33%2BECvpHhR%2B%2B5QIb7buyiJBHqs%2Bldbb%2F0w60KxM4TLUiR7dylbKHt6xhDeXCIaOLzX%2FZ%2F2dRhzmFcaClBT%2BA3AL%2FnB9TPV%2F4zBjmfZTBG%2FBCgQtUQAiR75twOUBId40fd4O9s2Obho8l69E%2FAW%2B%2ByysgVuZlLlQzt%2BoU%2BpQ0JAkB%2FQHcDr8gYVNC2UY5%2FVvMliv3LLeVDwAUHl46uAn%2BKN5By16Esmt3XNbYMGmzjzg1ZEWBTQXkMvVSTWk369hBlLxbILnjzEQNBImGoJ77l75Dbw3s6O947wRyI9Cpz%2FwdOlc2TQbg0if%2FsljuKL5NjzS3r5qnv4flglw96uvSD0kghfY%2BOFlU2YjnR6r83KZGxu26lK224zKF%2B56DUin8yjgLTyEqXla2Cj1F%2BSfWWIVo1Kciet2bruLuN3m5ruaKzuI1ncGaLsGPqvfX4Ya8P25kqB7cgRHkpUJjzbnAaYh5oFcxiyaJs6MeiFYPdB1ttDozVUhjSDj1bCtKgmqwmOtyk9uAa8gVz8Ln4WZannjt0RSJuo45mz7wtNoOH%2F8X0yF6My6IJwNih1YXoMJmV5r4GOqUB5c8wjUb%2FvVlKBe%2B7rtO7nVTJUw2XClhY2hV5PLqztm58Wx6VWqpHXORMr0Fp0GSQyXVaOBAt7Zr5gg6qOK5brmd%2BpTGWEESDGIhG7lHeXfaq5YMiR9TY8cQfZnxQrXR%2FHRH%2ByXT1mZFYU52LH0L58qSGEwhwPDvdDRXSJIdSJnTcq1XdZIshFIJ7uybDnwsTzoZQOOweJh%2BTBqsA8ftM%2B3fHI9QU&X-Amz-Signature=5457514627b2b318384ab6c4def4d0c83642873568b2c6c79bf5fb257a81b058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BT6227%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwCasMYx5%2FlyUxwJKRTeN7x%2FaR03iUkURByqGcu0%2BhtQIgRFg8QkyIp6bzJ3y4KLF9IT5pP4VLDe6tno6C6Hh5ID0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPxKixD%2ByKDRhhGaVircAzfwDHeILWWQ5gAA%2FN3InA01kj6%2FPK4PWXJqyE0x%2FOE1djCjrzTF9Dfq%2BZQWWRr33%2BECvpHhR%2B%2B5QIb7buyiJBHqs%2Bldbb%2F0w60KxM4TLUiR7dylbKHt6xhDeXCIaOLzX%2FZ%2F2dRhzmFcaClBT%2BA3AL%2FnB9TPV%2F4zBjmfZTBG%2FBCgQtUQAiR75twOUBId40fd4O9s2Obho8l69E%2FAW%2B%2ByysgVuZlLlQzt%2BoU%2BpQ0JAkB%2FQHcDr8gYVNC2UY5%2FVvMliv3LLeVDwAUHl46uAn%2BKN5By16Esmt3XNbYMGmzjzg1ZEWBTQXkMvVSTWk369hBlLxbILnjzEQNBImGoJ77l75Dbw3s6O947wRyI9Cpz%2FwdOlc2TQbg0if%2FsljuKL5NjzS3r5qnv4flglw96uvSD0kghfY%2BOFlU2YjnR6r83KZGxu26lK224zKF%2B56DUin8yjgLTyEqXla2Cj1F%2BSfWWIVo1Kciet2bruLuN3m5ruaKzuI1ncGaLsGPqvfX4Ya8P25kqB7cgRHkpUJjzbnAaYh5oFcxiyaJs6MeiFYPdB1ttDozVUhjSDj1bCtKgmqwmOtyk9uAa8gVz8Ln4WZannjt0RSJuo45mz7wtNoOH%2F8X0yF6My6IJwNih1YXoMJmV5r4GOqUB5c8wjUb%2FvVlKBe%2B7rtO7nVTJUw2XClhY2hV5PLqztm58Wx6VWqpHXORMr0Fp0GSQyXVaOBAt7Zr5gg6qOK5brmd%2BpTGWEESDGIhG7lHeXfaq5YMiR9TY8cQfZnxQrXR%2FHRH%2ByXT1mZFYU52LH0L58qSGEwhwPDvdDRXSJIdSJnTcq1XdZIshFIJ7uybDnwsTzoZQOOweJh%2BTBqsA8ftM%2B3fHI9QU&X-Amz-Signature=d7f225c3557b7b31800c71cf9e91290da4a401e0600547a899fd347dbfb5271a&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
