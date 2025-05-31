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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GIMBFM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUI6VuYQ5%2FMs%2FhU1zAWyYo4R2dRbUeYox0Ygtsq5H47AIhAOqEawn4D1rW4LAF6gAYvEazCJj5I2ELPFPVb300Q9QZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv03e7eQi082xiNO4q3AOR%2FLe7fYNnA3bI5m2kSauXgyByQUsYdSbI2uFUJImatcp1sIbJ5oQuyVYHsaNhBC%2BxbLY4W2eycRoe0Gpz%2FiYWiDB8KkKgWfvc8Eocfo%2BmLgGYmqa1qXIYI7G28CxxYY%2BdXFv%2FZ32%2BuVGiOBU351gaYyhWrUTjIhHsFZ%2FID6CbrbDd296%2F3DIKB7SiHx7RvjttFOmP2Y4idjcCPg5Ew2Qoo1rVVgDFfYwr3LeHAj0fDNYOqljNuNT%2Bpq%2B6%2BeQJQtWCNEYzCAhdghhMLBzQ2v4jmSJheFbBIAxTLaoXHoI52HQnO7DYgjQDU%2BYzduaiaxXpH1e9%2BxcJRj3E0LI9MCZd7%2BUQ%2FmhKQBJGNi4AgWk4AfklAlWEeHJhB3zgSngYPX1uZXOY6%2FoP%2BqzA06yEMVALG19LA%2BFYQqnXYsmYnqDi9Dun2aZvN%2FFcezYX4ljgNkxDqRohAG950sh2pDqrri5evofJaHMOWMsLwS%2BY4lpkkx2muuWumTGm5cS7pkQUjLLjSAqb1du%2F%2BjE8vEqzDfq4QpDpS132%2FCBTThMG88RxxDrF8oAiLtsidnHCr41xOM%2F5n0Ag6mxh1DaM%2Fhexixna%2BhHJAM%2FH2GEHuFz9dgbzwdjt29vHYMbtFob0tjD%2Bg%2BvBBjqkAVg4BdzoObtZxGeJ3AdVqHPYdpGVkAwqqWrdoglv%2FvTri1aamFSKCQRmTOuEvIWtZs8drAnUKvb8tyYqsqIdWJvEg0MOusg2eJjDV9ejKQslPkGbY7km59%2BcFIuYMoYgmqZnSiK3A7OHXUgS%2BesHEAjCe78FHJVkFWW3P1iEoDTOUxsnan%2BDnirQhr7743nj1wGAj5C4QZ5ruEF85ddhhQl8l5%2BT&X-Amz-Signature=51bacc9bc5a9f3eb569a044681296cce7bf9a960226e6edeb58e2737f045789f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GIMBFM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUI6VuYQ5%2FMs%2FhU1zAWyYo4R2dRbUeYox0Ygtsq5H47AIhAOqEawn4D1rW4LAF6gAYvEazCJj5I2ELPFPVb300Q9QZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv03e7eQi082xiNO4q3AOR%2FLe7fYNnA3bI5m2kSauXgyByQUsYdSbI2uFUJImatcp1sIbJ5oQuyVYHsaNhBC%2BxbLY4W2eycRoe0Gpz%2FiYWiDB8KkKgWfvc8Eocfo%2BmLgGYmqa1qXIYI7G28CxxYY%2BdXFv%2FZ32%2BuVGiOBU351gaYyhWrUTjIhHsFZ%2FID6CbrbDd296%2F3DIKB7SiHx7RvjttFOmP2Y4idjcCPg5Ew2Qoo1rVVgDFfYwr3LeHAj0fDNYOqljNuNT%2Bpq%2B6%2BeQJQtWCNEYzCAhdghhMLBzQ2v4jmSJheFbBIAxTLaoXHoI52HQnO7DYgjQDU%2BYzduaiaxXpH1e9%2BxcJRj3E0LI9MCZd7%2BUQ%2FmhKQBJGNi4AgWk4AfklAlWEeHJhB3zgSngYPX1uZXOY6%2FoP%2BqzA06yEMVALG19LA%2BFYQqnXYsmYnqDi9Dun2aZvN%2FFcezYX4ljgNkxDqRohAG950sh2pDqrri5evofJaHMOWMsLwS%2BY4lpkkx2muuWumTGm5cS7pkQUjLLjSAqb1du%2F%2BjE8vEqzDfq4QpDpS132%2FCBTThMG88RxxDrF8oAiLtsidnHCr41xOM%2F5n0Ag6mxh1DaM%2Fhexixna%2BhHJAM%2FH2GEHuFz9dgbzwdjt29vHYMbtFob0tjD%2Bg%2BvBBjqkAVg4BdzoObtZxGeJ3AdVqHPYdpGVkAwqqWrdoglv%2FvTri1aamFSKCQRmTOuEvIWtZs8drAnUKvb8tyYqsqIdWJvEg0MOusg2eJjDV9ejKQslPkGbY7km59%2BcFIuYMoYgmqZnSiK3A7OHXUgS%2BesHEAjCe78FHJVkFWW3P1iEoDTOUxsnan%2BDnirQhr7743nj1wGAj5C4QZ5ruEF85ddhhQl8l5%2BT&X-Amz-Signature=096a2c99235578e2afd0ed8a969bcafe904d4b15044b5cc7c3c86c0adc11e9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GIMBFM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUI6VuYQ5%2FMs%2FhU1zAWyYo4R2dRbUeYox0Ygtsq5H47AIhAOqEawn4D1rW4LAF6gAYvEazCJj5I2ELPFPVb300Q9QZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv03e7eQi082xiNO4q3AOR%2FLe7fYNnA3bI5m2kSauXgyByQUsYdSbI2uFUJImatcp1sIbJ5oQuyVYHsaNhBC%2BxbLY4W2eycRoe0Gpz%2FiYWiDB8KkKgWfvc8Eocfo%2BmLgGYmqa1qXIYI7G28CxxYY%2BdXFv%2FZ32%2BuVGiOBU351gaYyhWrUTjIhHsFZ%2FID6CbrbDd296%2F3DIKB7SiHx7RvjttFOmP2Y4idjcCPg5Ew2Qoo1rVVgDFfYwr3LeHAj0fDNYOqljNuNT%2Bpq%2B6%2BeQJQtWCNEYzCAhdghhMLBzQ2v4jmSJheFbBIAxTLaoXHoI52HQnO7DYgjQDU%2BYzduaiaxXpH1e9%2BxcJRj3E0LI9MCZd7%2BUQ%2FmhKQBJGNi4AgWk4AfklAlWEeHJhB3zgSngYPX1uZXOY6%2FoP%2BqzA06yEMVALG19LA%2BFYQqnXYsmYnqDi9Dun2aZvN%2FFcezYX4ljgNkxDqRohAG950sh2pDqrri5evofJaHMOWMsLwS%2BY4lpkkx2muuWumTGm5cS7pkQUjLLjSAqb1du%2F%2BjE8vEqzDfq4QpDpS132%2FCBTThMG88RxxDrF8oAiLtsidnHCr41xOM%2F5n0Ag6mxh1DaM%2Fhexixna%2BhHJAM%2FH2GEHuFz9dgbzwdjt29vHYMbtFob0tjD%2Bg%2BvBBjqkAVg4BdzoObtZxGeJ3AdVqHPYdpGVkAwqqWrdoglv%2FvTri1aamFSKCQRmTOuEvIWtZs8drAnUKvb8tyYqsqIdWJvEg0MOusg2eJjDV9ejKQslPkGbY7km59%2BcFIuYMoYgmqZnSiK3A7OHXUgS%2BesHEAjCe78FHJVkFWW3P1iEoDTOUxsnan%2BDnirQhr7743nj1wGAj5C4QZ5ruEF85ddhhQl8l5%2BT&X-Amz-Signature=d0346452973beb6f951deb9f56b5d552eab7e15d4c6a38f2194c8fdfb0ef653b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GIMBFM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUI6VuYQ5%2FMs%2FhU1zAWyYo4R2dRbUeYox0Ygtsq5H47AIhAOqEawn4D1rW4LAF6gAYvEazCJj5I2ELPFPVb300Q9QZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv03e7eQi082xiNO4q3AOR%2FLe7fYNnA3bI5m2kSauXgyByQUsYdSbI2uFUJImatcp1sIbJ5oQuyVYHsaNhBC%2BxbLY4W2eycRoe0Gpz%2FiYWiDB8KkKgWfvc8Eocfo%2BmLgGYmqa1qXIYI7G28CxxYY%2BdXFv%2FZ32%2BuVGiOBU351gaYyhWrUTjIhHsFZ%2FID6CbrbDd296%2F3DIKB7SiHx7RvjttFOmP2Y4idjcCPg5Ew2Qoo1rVVgDFfYwr3LeHAj0fDNYOqljNuNT%2Bpq%2B6%2BeQJQtWCNEYzCAhdghhMLBzQ2v4jmSJheFbBIAxTLaoXHoI52HQnO7DYgjQDU%2BYzduaiaxXpH1e9%2BxcJRj3E0LI9MCZd7%2BUQ%2FmhKQBJGNi4AgWk4AfklAlWEeHJhB3zgSngYPX1uZXOY6%2FoP%2BqzA06yEMVALG19LA%2BFYQqnXYsmYnqDi9Dun2aZvN%2FFcezYX4ljgNkxDqRohAG950sh2pDqrri5evofJaHMOWMsLwS%2BY4lpkkx2muuWumTGm5cS7pkQUjLLjSAqb1du%2F%2BjE8vEqzDfq4QpDpS132%2FCBTThMG88RxxDrF8oAiLtsidnHCr41xOM%2F5n0Ag6mxh1DaM%2Fhexixna%2BhHJAM%2FH2GEHuFz9dgbzwdjt29vHYMbtFob0tjD%2Bg%2BvBBjqkAVg4BdzoObtZxGeJ3AdVqHPYdpGVkAwqqWrdoglv%2FvTri1aamFSKCQRmTOuEvIWtZs8drAnUKvb8tyYqsqIdWJvEg0MOusg2eJjDV9ejKQslPkGbY7km59%2BcFIuYMoYgmqZnSiK3A7OHXUgS%2BesHEAjCe78FHJVkFWW3P1iEoDTOUxsnan%2BDnirQhr7743nj1wGAj5C4QZ5ruEF85ddhhQl8l5%2BT&X-Amz-Signature=200f59a98dc3b9fac70af5e751e5155d4d0883b27cb7d4ada5cd682dea974362&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3GIMBFM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUI6VuYQ5%2FMs%2FhU1zAWyYo4R2dRbUeYox0Ygtsq5H47AIhAOqEawn4D1rW4LAF6gAYvEazCJj5I2ELPFPVb300Q9QZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv03e7eQi082xiNO4q3AOR%2FLe7fYNnA3bI5m2kSauXgyByQUsYdSbI2uFUJImatcp1sIbJ5oQuyVYHsaNhBC%2BxbLY4W2eycRoe0Gpz%2FiYWiDB8KkKgWfvc8Eocfo%2BmLgGYmqa1qXIYI7G28CxxYY%2BdXFv%2FZ32%2BuVGiOBU351gaYyhWrUTjIhHsFZ%2FID6CbrbDd296%2F3DIKB7SiHx7RvjttFOmP2Y4idjcCPg5Ew2Qoo1rVVgDFfYwr3LeHAj0fDNYOqljNuNT%2Bpq%2B6%2BeQJQtWCNEYzCAhdghhMLBzQ2v4jmSJheFbBIAxTLaoXHoI52HQnO7DYgjQDU%2BYzduaiaxXpH1e9%2BxcJRj3E0LI9MCZd7%2BUQ%2FmhKQBJGNi4AgWk4AfklAlWEeHJhB3zgSngYPX1uZXOY6%2FoP%2BqzA06yEMVALG19LA%2BFYQqnXYsmYnqDi9Dun2aZvN%2FFcezYX4ljgNkxDqRohAG950sh2pDqrri5evofJaHMOWMsLwS%2BY4lpkkx2muuWumTGm5cS7pkQUjLLjSAqb1du%2F%2BjE8vEqzDfq4QpDpS132%2FCBTThMG88RxxDrF8oAiLtsidnHCr41xOM%2F5n0Ag6mxh1DaM%2Fhexixna%2BhHJAM%2FH2GEHuFz9dgbzwdjt29vHYMbtFob0tjD%2Bg%2BvBBjqkAVg4BdzoObtZxGeJ3AdVqHPYdpGVkAwqqWrdoglv%2FvTri1aamFSKCQRmTOuEvIWtZs8drAnUKvb8tyYqsqIdWJvEg0MOusg2eJjDV9ejKQslPkGbY7km59%2BcFIuYMoYgmqZnSiK3A7OHXUgS%2BesHEAjCe78FHJVkFWW3P1iEoDTOUxsnan%2BDnirQhr7743nj1wGAj5C4QZ5ruEF85ddhhQl8l5%2BT&X-Amz-Signature=f31f4509070dd6fb51396a97fb45f2a11dd52fa9bf0420608405aaae4d866a80&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
