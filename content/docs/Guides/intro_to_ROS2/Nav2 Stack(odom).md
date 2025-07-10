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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMCRH6W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENmd7S6oa03jAvBNWjrZpZgLYZJGtnq3djq1uj4a4pHAiB70EDsJ55QAH6IFxPtW3oggVIK5O%2BCq5MpXehZBtG90yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwJEN8yM9NF7y90fKtwDmMDlYwI4MfIz6ZYYZ5ELzEOyPBzVjbsx0ja2QTGEsUw%2F8lO22pyJKZjKM2pbImE3InfgHMMJ8ecX1pc8LzE0IEdGi9tDX9KWN0CmTe2b7AxmElfyRw54Fk3e3FcABPCwC75cs45HLlzaHErRvWpSslrc1F%2BTcnd0sqPHlp4%2BSC5MPmzKzU%2FLXka%2BhvhLpDKomKtDbeLVZdr9WpKOSJ0ynF621EJcFdMLDvcMN8YRw1s1M7JInNNkNHlQDdTHsSZPqjKRKKgwap%2Boef8uCsFvsFriTN6hvfnNkF%2F9SZhXI0HgU78hl38LnETw1rgcE5aCo99vEF2M%2B%2FcSg0c2ksghT7BruVRt3sqCvxmsASQbWS1nPWHQ8FBkoB1%2BTKtO%2BEEWtTQvSe%2FGNAezz%2FFWwf03MPZKCHA%2FUBuGRKBUyN%2FvJnzUe5knNMw4qJ5HBl1j2hI6uB4T0M3FpSa5QwLFo9R3NxMwpl4pj9IeMzmLwYsiQhSaHYeLbX4I51s5OxuxMIfcP9XkAqe7mCcWhJW28nQVto0l%2FplQ%2BzVKYxv2h3jDRtAWTvFjjN90d1rK7XZN1eg0QP1DzFGg8%2BMNPcekg1mI8O4GUB9EpLiz8UDKbetwWllaWjwV3%2FhPfSK3TRIw0Pm%2FwwY6pgGnR5nEQmriIqMmwOmOwxMtIGCxiXuIGOqgZInAv1G9frGsFb0PF0y3%2Bh7fL3wld6JBlsp2xvHsatjy6RsXNxysuvyb00jU%2BtFyKCtWiSSk%2B4IkYITtJepJOQx%2FG3PtTidSwTXzV0gh02N46LQlHBFaOJp8FvMtRM2IH1umPWfZTt9uUSDbHCJvuyIHvHJ7w9OTm1ny6fFGFauR3%2B9LkVIHHYc8BXbO&X-Amz-Signature=13aa70a52476d8ad86f0f6540dfc4fbe355352a5f73e948939fd80f1d261bb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMCRH6W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENmd7S6oa03jAvBNWjrZpZgLYZJGtnq3djq1uj4a4pHAiB70EDsJ55QAH6IFxPtW3oggVIK5O%2BCq5MpXehZBtG90yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwJEN8yM9NF7y90fKtwDmMDlYwI4MfIz6ZYYZ5ELzEOyPBzVjbsx0ja2QTGEsUw%2F8lO22pyJKZjKM2pbImE3InfgHMMJ8ecX1pc8LzE0IEdGi9tDX9KWN0CmTe2b7AxmElfyRw54Fk3e3FcABPCwC75cs45HLlzaHErRvWpSslrc1F%2BTcnd0sqPHlp4%2BSC5MPmzKzU%2FLXka%2BhvhLpDKomKtDbeLVZdr9WpKOSJ0ynF621EJcFdMLDvcMN8YRw1s1M7JInNNkNHlQDdTHsSZPqjKRKKgwap%2Boef8uCsFvsFriTN6hvfnNkF%2F9SZhXI0HgU78hl38LnETw1rgcE5aCo99vEF2M%2B%2FcSg0c2ksghT7BruVRt3sqCvxmsASQbWS1nPWHQ8FBkoB1%2BTKtO%2BEEWtTQvSe%2FGNAezz%2FFWwf03MPZKCHA%2FUBuGRKBUyN%2FvJnzUe5knNMw4qJ5HBl1j2hI6uB4T0M3FpSa5QwLFo9R3NxMwpl4pj9IeMzmLwYsiQhSaHYeLbX4I51s5OxuxMIfcP9XkAqe7mCcWhJW28nQVto0l%2FplQ%2BzVKYxv2h3jDRtAWTvFjjN90d1rK7XZN1eg0QP1DzFGg8%2BMNPcekg1mI8O4GUB9EpLiz8UDKbetwWllaWjwV3%2FhPfSK3TRIw0Pm%2FwwY6pgGnR5nEQmriIqMmwOmOwxMtIGCxiXuIGOqgZInAv1G9frGsFb0PF0y3%2Bh7fL3wld6JBlsp2xvHsatjy6RsXNxysuvyb00jU%2BtFyKCtWiSSk%2B4IkYITtJepJOQx%2FG3PtTidSwTXzV0gh02N46LQlHBFaOJp8FvMtRM2IH1umPWfZTt9uUSDbHCJvuyIHvHJ7w9OTm1ny6fFGFauR3%2B9LkVIHHYc8BXbO&X-Amz-Signature=ccc664cfdc14378c2b2c3bd4ba159a723dbe7f79fd9c00fa655a22900c3c4cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMCRH6W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENmd7S6oa03jAvBNWjrZpZgLYZJGtnq3djq1uj4a4pHAiB70EDsJ55QAH6IFxPtW3oggVIK5O%2BCq5MpXehZBtG90yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwJEN8yM9NF7y90fKtwDmMDlYwI4MfIz6ZYYZ5ELzEOyPBzVjbsx0ja2QTGEsUw%2F8lO22pyJKZjKM2pbImE3InfgHMMJ8ecX1pc8LzE0IEdGi9tDX9KWN0CmTe2b7AxmElfyRw54Fk3e3FcABPCwC75cs45HLlzaHErRvWpSslrc1F%2BTcnd0sqPHlp4%2BSC5MPmzKzU%2FLXka%2BhvhLpDKomKtDbeLVZdr9WpKOSJ0ynF621EJcFdMLDvcMN8YRw1s1M7JInNNkNHlQDdTHsSZPqjKRKKgwap%2Boef8uCsFvsFriTN6hvfnNkF%2F9SZhXI0HgU78hl38LnETw1rgcE5aCo99vEF2M%2B%2FcSg0c2ksghT7BruVRt3sqCvxmsASQbWS1nPWHQ8FBkoB1%2BTKtO%2BEEWtTQvSe%2FGNAezz%2FFWwf03MPZKCHA%2FUBuGRKBUyN%2FvJnzUe5knNMw4qJ5HBl1j2hI6uB4T0M3FpSa5QwLFo9R3NxMwpl4pj9IeMzmLwYsiQhSaHYeLbX4I51s5OxuxMIfcP9XkAqe7mCcWhJW28nQVto0l%2FplQ%2BzVKYxv2h3jDRtAWTvFjjN90d1rK7XZN1eg0QP1DzFGg8%2BMNPcekg1mI8O4GUB9EpLiz8UDKbetwWllaWjwV3%2FhPfSK3TRIw0Pm%2FwwY6pgGnR5nEQmriIqMmwOmOwxMtIGCxiXuIGOqgZInAv1G9frGsFb0PF0y3%2Bh7fL3wld6JBlsp2xvHsatjy6RsXNxysuvyb00jU%2BtFyKCtWiSSk%2B4IkYITtJepJOQx%2FG3PtTidSwTXzV0gh02N46LQlHBFaOJp8FvMtRM2IH1umPWfZTt9uUSDbHCJvuyIHvHJ7w9OTm1ny6fFGFauR3%2B9LkVIHHYc8BXbO&X-Amz-Signature=ab568bcf457bbabeced5d6ab160b7ffebf2e38a20435bcfb385701d83bc18391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMCRH6W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENmd7S6oa03jAvBNWjrZpZgLYZJGtnq3djq1uj4a4pHAiB70EDsJ55QAH6IFxPtW3oggVIK5O%2BCq5MpXehZBtG90yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwJEN8yM9NF7y90fKtwDmMDlYwI4MfIz6ZYYZ5ELzEOyPBzVjbsx0ja2QTGEsUw%2F8lO22pyJKZjKM2pbImE3InfgHMMJ8ecX1pc8LzE0IEdGi9tDX9KWN0CmTe2b7AxmElfyRw54Fk3e3FcABPCwC75cs45HLlzaHErRvWpSslrc1F%2BTcnd0sqPHlp4%2BSC5MPmzKzU%2FLXka%2BhvhLpDKomKtDbeLVZdr9WpKOSJ0ynF621EJcFdMLDvcMN8YRw1s1M7JInNNkNHlQDdTHsSZPqjKRKKgwap%2Boef8uCsFvsFriTN6hvfnNkF%2F9SZhXI0HgU78hl38LnETw1rgcE5aCo99vEF2M%2B%2FcSg0c2ksghT7BruVRt3sqCvxmsASQbWS1nPWHQ8FBkoB1%2BTKtO%2BEEWtTQvSe%2FGNAezz%2FFWwf03MPZKCHA%2FUBuGRKBUyN%2FvJnzUe5knNMw4qJ5HBl1j2hI6uB4T0M3FpSa5QwLFo9R3NxMwpl4pj9IeMzmLwYsiQhSaHYeLbX4I51s5OxuxMIfcP9XkAqe7mCcWhJW28nQVto0l%2FplQ%2BzVKYxv2h3jDRtAWTvFjjN90d1rK7XZN1eg0QP1DzFGg8%2BMNPcekg1mI8O4GUB9EpLiz8UDKbetwWllaWjwV3%2FhPfSK3TRIw0Pm%2FwwY6pgGnR5nEQmriIqMmwOmOwxMtIGCxiXuIGOqgZInAv1G9frGsFb0PF0y3%2Bh7fL3wld6JBlsp2xvHsatjy6RsXNxysuvyb00jU%2BtFyKCtWiSSk%2B4IkYITtJepJOQx%2FG3PtTidSwTXzV0gh02N46LQlHBFaOJp8FvMtRM2IH1umPWfZTt9uUSDbHCJvuyIHvHJ7w9OTm1ny6fFGFauR3%2B9LkVIHHYc8BXbO&X-Amz-Signature=9d3a14b6db442071a886c82e4c22a545d36b42cda6bd84e83a93aab0a396fef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMCRH6W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENmd7S6oa03jAvBNWjrZpZgLYZJGtnq3djq1uj4a4pHAiB70EDsJ55QAH6IFxPtW3oggVIK5O%2BCq5MpXehZBtG90yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwJEN8yM9NF7y90fKtwDmMDlYwI4MfIz6ZYYZ5ELzEOyPBzVjbsx0ja2QTGEsUw%2F8lO22pyJKZjKM2pbImE3InfgHMMJ8ecX1pc8LzE0IEdGi9tDX9KWN0CmTe2b7AxmElfyRw54Fk3e3FcABPCwC75cs45HLlzaHErRvWpSslrc1F%2BTcnd0sqPHlp4%2BSC5MPmzKzU%2FLXka%2BhvhLpDKomKtDbeLVZdr9WpKOSJ0ynF621EJcFdMLDvcMN8YRw1s1M7JInNNkNHlQDdTHsSZPqjKRKKgwap%2Boef8uCsFvsFriTN6hvfnNkF%2F9SZhXI0HgU78hl38LnETw1rgcE5aCo99vEF2M%2B%2FcSg0c2ksghT7BruVRt3sqCvxmsASQbWS1nPWHQ8FBkoB1%2BTKtO%2BEEWtTQvSe%2FGNAezz%2FFWwf03MPZKCHA%2FUBuGRKBUyN%2FvJnzUe5knNMw4qJ5HBl1j2hI6uB4T0M3FpSa5QwLFo9R3NxMwpl4pj9IeMzmLwYsiQhSaHYeLbX4I51s5OxuxMIfcP9XkAqe7mCcWhJW28nQVto0l%2FplQ%2BzVKYxv2h3jDRtAWTvFjjN90d1rK7XZN1eg0QP1DzFGg8%2BMNPcekg1mI8O4GUB9EpLiz8UDKbetwWllaWjwV3%2FhPfSK3TRIw0Pm%2FwwY6pgGnR5nEQmriIqMmwOmOwxMtIGCxiXuIGOqgZInAv1G9frGsFb0PF0y3%2Bh7fL3wld6JBlsp2xvHsatjy6RsXNxysuvyb00jU%2BtFyKCtWiSSk%2B4IkYITtJepJOQx%2FG3PtTidSwTXzV0gh02N46LQlHBFaOJp8FvMtRM2IH1umPWfZTt9uUSDbHCJvuyIHvHJ7w9OTm1ny6fFGFauR3%2B9LkVIHHYc8BXbO&X-Amz-Signature=35d025aa05f33c08071467c48433d4da103204b111aca1d5559f1a0f2ce0086b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
