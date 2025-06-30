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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BZGDF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8gIxZOiAZ3mWvtFUlAuyk%2F%2FuDRLsfdvLVRcSQp%2BcxwIhAO8Iof5sUimd7QgY%2B7mmQXcvxLGWa3iFuRHWjbXJuin0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF2EuAQxrgQtBPQ5cq3AOPrW64pbpI7YW3BXkvQBysZkjYFO1E63CJd6M4WegjMyyL6b34Ryg86OC%2FKmFEJAespN9cxQmA42t6eYEFHpFKdsFw3DUwG2FFnSddGWTjNMohFZAivx0ivCwAVdWQLP82ti%2B0W8omhXbaMfVEhh%2Bu4HnuPEuEz1WLbdK9tbt4%2FuSZ8HS%2BvwBDOWssibdsLhiMYCOJCRtOryA%2FG28PdPt4uEKKv6Q7rnAbo9eAI%2FFoU7ehnTWMMqau2ncF1PseDrN%2BSVV0BMR9SPlY9sk2F8EPTZKIaELLrsOZJWPKbzPqO%2FiC1vL13PNx%2BPJVyqJlAtkXlhc316qaEMItbYQ8DiRM6cK%2Bido72NfvHWdT9YpLrCWboXfoXMeWeY13ioqYBG2H9cZxNcTV%2B9YKv2Ef0%2BRi9GP8SKpj7UJ0QObgwu7AvgNEDf2h8%2FVFFEv6oTFEgJBu0gV7jFjYxNiWGdTia4C%2Bh5EGWVRwNnJctMFhMSvnhBJTDO2nQeCiqMfiW9VH0x82ca8y0CR3ShP7jqO8iEl8oyfqfq%2BytyutV8v2qYlgNVv1GLLOsYczVJ7BPNLEEPkLADFG2d3IpJbnH3fR9LGGiqm7t%2FgoND2jWxhPg99e2cdsaF5NIAD8Py6gxzDh%2BIvDBjqkAcLg%2FrfN5Le%2BsoXg6ktf1UaIZkgaOBdvGipdoieW3JdcFAef7ty2GVOy54OyK%2BdKyk2QINm0doUw8EC%2Bw9IawV8eUKH3qZNalKyuLbyYOmm50d3mdgh8fn3vjKuvuhgYZOqXDDQAGiZFP%2F3gl3I4CqNptGWtJmIpul6NTFkjoXhvyLUmKjTGEypjOXc6R1r6XgOU5WuMAyP59EtX8fzJHOjGKetK&X-Amz-Signature=f0bc8fd3d6bcf29fd4350e4df63a01ef8f313fc9fcf33b87e33e20dc65662d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BZGDF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8gIxZOiAZ3mWvtFUlAuyk%2F%2FuDRLsfdvLVRcSQp%2BcxwIhAO8Iof5sUimd7QgY%2B7mmQXcvxLGWa3iFuRHWjbXJuin0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF2EuAQxrgQtBPQ5cq3AOPrW64pbpI7YW3BXkvQBysZkjYFO1E63CJd6M4WegjMyyL6b34Ryg86OC%2FKmFEJAespN9cxQmA42t6eYEFHpFKdsFw3DUwG2FFnSddGWTjNMohFZAivx0ivCwAVdWQLP82ti%2B0W8omhXbaMfVEhh%2Bu4HnuPEuEz1WLbdK9tbt4%2FuSZ8HS%2BvwBDOWssibdsLhiMYCOJCRtOryA%2FG28PdPt4uEKKv6Q7rnAbo9eAI%2FFoU7ehnTWMMqau2ncF1PseDrN%2BSVV0BMR9SPlY9sk2F8EPTZKIaELLrsOZJWPKbzPqO%2FiC1vL13PNx%2BPJVyqJlAtkXlhc316qaEMItbYQ8DiRM6cK%2Bido72NfvHWdT9YpLrCWboXfoXMeWeY13ioqYBG2H9cZxNcTV%2B9YKv2Ef0%2BRi9GP8SKpj7UJ0QObgwu7AvgNEDf2h8%2FVFFEv6oTFEgJBu0gV7jFjYxNiWGdTia4C%2Bh5EGWVRwNnJctMFhMSvnhBJTDO2nQeCiqMfiW9VH0x82ca8y0CR3ShP7jqO8iEl8oyfqfq%2BytyutV8v2qYlgNVv1GLLOsYczVJ7BPNLEEPkLADFG2d3IpJbnH3fR9LGGiqm7t%2FgoND2jWxhPg99e2cdsaF5NIAD8Py6gxzDh%2BIvDBjqkAcLg%2FrfN5Le%2BsoXg6ktf1UaIZkgaOBdvGipdoieW3JdcFAef7ty2GVOy54OyK%2BdKyk2QINm0doUw8EC%2Bw9IawV8eUKH3qZNalKyuLbyYOmm50d3mdgh8fn3vjKuvuhgYZOqXDDQAGiZFP%2F3gl3I4CqNptGWtJmIpul6NTFkjoXhvyLUmKjTGEypjOXc6R1r6XgOU5WuMAyP59EtX8fzJHOjGKetK&X-Amz-Signature=a05740481921cd23219c11cca538771a7386558c8033b58d5a0a5a18a1f92b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BZGDF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8gIxZOiAZ3mWvtFUlAuyk%2F%2FuDRLsfdvLVRcSQp%2BcxwIhAO8Iof5sUimd7QgY%2B7mmQXcvxLGWa3iFuRHWjbXJuin0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF2EuAQxrgQtBPQ5cq3AOPrW64pbpI7YW3BXkvQBysZkjYFO1E63CJd6M4WegjMyyL6b34Ryg86OC%2FKmFEJAespN9cxQmA42t6eYEFHpFKdsFw3DUwG2FFnSddGWTjNMohFZAivx0ivCwAVdWQLP82ti%2B0W8omhXbaMfVEhh%2Bu4HnuPEuEz1WLbdK9tbt4%2FuSZ8HS%2BvwBDOWssibdsLhiMYCOJCRtOryA%2FG28PdPt4uEKKv6Q7rnAbo9eAI%2FFoU7ehnTWMMqau2ncF1PseDrN%2BSVV0BMR9SPlY9sk2F8EPTZKIaELLrsOZJWPKbzPqO%2FiC1vL13PNx%2BPJVyqJlAtkXlhc316qaEMItbYQ8DiRM6cK%2Bido72NfvHWdT9YpLrCWboXfoXMeWeY13ioqYBG2H9cZxNcTV%2B9YKv2Ef0%2BRi9GP8SKpj7UJ0QObgwu7AvgNEDf2h8%2FVFFEv6oTFEgJBu0gV7jFjYxNiWGdTia4C%2Bh5EGWVRwNnJctMFhMSvnhBJTDO2nQeCiqMfiW9VH0x82ca8y0CR3ShP7jqO8iEl8oyfqfq%2BytyutV8v2qYlgNVv1GLLOsYczVJ7BPNLEEPkLADFG2d3IpJbnH3fR9LGGiqm7t%2FgoND2jWxhPg99e2cdsaF5NIAD8Py6gxzDh%2BIvDBjqkAcLg%2FrfN5Le%2BsoXg6ktf1UaIZkgaOBdvGipdoieW3JdcFAef7ty2GVOy54OyK%2BdKyk2QINm0doUw8EC%2Bw9IawV8eUKH3qZNalKyuLbyYOmm50d3mdgh8fn3vjKuvuhgYZOqXDDQAGiZFP%2F3gl3I4CqNptGWtJmIpul6NTFkjoXhvyLUmKjTGEypjOXc6R1r6XgOU5WuMAyP59EtX8fzJHOjGKetK&X-Amz-Signature=057453094b852a2af300b5c111b93e5326ad596724aa68612034a870bb456205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BZGDF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8gIxZOiAZ3mWvtFUlAuyk%2F%2FuDRLsfdvLVRcSQp%2BcxwIhAO8Iof5sUimd7QgY%2B7mmQXcvxLGWa3iFuRHWjbXJuin0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF2EuAQxrgQtBPQ5cq3AOPrW64pbpI7YW3BXkvQBysZkjYFO1E63CJd6M4WegjMyyL6b34Ryg86OC%2FKmFEJAespN9cxQmA42t6eYEFHpFKdsFw3DUwG2FFnSddGWTjNMohFZAivx0ivCwAVdWQLP82ti%2B0W8omhXbaMfVEhh%2Bu4HnuPEuEz1WLbdK9tbt4%2FuSZ8HS%2BvwBDOWssibdsLhiMYCOJCRtOryA%2FG28PdPt4uEKKv6Q7rnAbo9eAI%2FFoU7ehnTWMMqau2ncF1PseDrN%2BSVV0BMR9SPlY9sk2F8EPTZKIaELLrsOZJWPKbzPqO%2FiC1vL13PNx%2BPJVyqJlAtkXlhc316qaEMItbYQ8DiRM6cK%2Bido72NfvHWdT9YpLrCWboXfoXMeWeY13ioqYBG2H9cZxNcTV%2B9YKv2Ef0%2BRi9GP8SKpj7UJ0QObgwu7AvgNEDf2h8%2FVFFEv6oTFEgJBu0gV7jFjYxNiWGdTia4C%2Bh5EGWVRwNnJctMFhMSvnhBJTDO2nQeCiqMfiW9VH0x82ca8y0CR3ShP7jqO8iEl8oyfqfq%2BytyutV8v2qYlgNVv1GLLOsYczVJ7BPNLEEPkLADFG2d3IpJbnH3fR9LGGiqm7t%2FgoND2jWxhPg99e2cdsaF5NIAD8Py6gxzDh%2BIvDBjqkAcLg%2FrfN5Le%2BsoXg6ktf1UaIZkgaOBdvGipdoieW3JdcFAef7ty2GVOy54OyK%2BdKyk2QINm0doUw8EC%2Bw9IawV8eUKH3qZNalKyuLbyYOmm50d3mdgh8fn3vjKuvuhgYZOqXDDQAGiZFP%2F3gl3I4CqNptGWtJmIpul6NTFkjoXhvyLUmKjTGEypjOXc6R1r6XgOU5WuMAyP59EtX8fzJHOjGKetK&X-Amz-Signature=dbe9d272adce4b6b2aad6c809bcc90d3603d1164944ae8538c2de09a06dd93a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T67BZGDF%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr8gIxZOiAZ3mWvtFUlAuyk%2F%2FuDRLsfdvLVRcSQp%2BcxwIhAO8Iof5sUimd7QgY%2B7mmQXcvxLGWa3iFuRHWjbXJuin0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF2EuAQxrgQtBPQ5cq3AOPrW64pbpI7YW3BXkvQBysZkjYFO1E63CJd6M4WegjMyyL6b34Ryg86OC%2FKmFEJAespN9cxQmA42t6eYEFHpFKdsFw3DUwG2FFnSddGWTjNMohFZAivx0ivCwAVdWQLP82ti%2B0W8omhXbaMfVEhh%2Bu4HnuPEuEz1WLbdK9tbt4%2FuSZ8HS%2BvwBDOWssibdsLhiMYCOJCRtOryA%2FG28PdPt4uEKKv6Q7rnAbo9eAI%2FFoU7ehnTWMMqau2ncF1PseDrN%2BSVV0BMR9SPlY9sk2F8EPTZKIaELLrsOZJWPKbzPqO%2FiC1vL13PNx%2BPJVyqJlAtkXlhc316qaEMItbYQ8DiRM6cK%2Bido72NfvHWdT9YpLrCWboXfoXMeWeY13ioqYBG2H9cZxNcTV%2B9YKv2Ef0%2BRi9GP8SKpj7UJ0QObgwu7AvgNEDf2h8%2FVFFEv6oTFEgJBu0gV7jFjYxNiWGdTia4C%2Bh5EGWVRwNnJctMFhMSvnhBJTDO2nQeCiqMfiW9VH0x82ca8y0CR3ShP7jqO8iEl8oyfqfq%2BytyutV8v2qYlgNVv1GLLOsYczVJ7BPNLEEPkLADFG2d3IpJbnH3fR9LGGiqm7t%2FgoND2jWxhPg99e2cdsaF5NIAD8Py6gxzDh%2BIvDBjqkAcLg%2FrfN5Le%2BsoXg6ktf1UaIZkgaOBdvGipdoieW3JdcFAef7ty2GVOy54OyK%2BdKyk2QINm0doUw8EC%2Bw9IawV8eUKH3qZNalKyuLbyYOmm50d3mdgh8fn3vjKuvuhgYZOqXDDQAGiZFP%2F3gl3I4CqNptGWtJmIpul6NTFkjoXhvyLUmKjTGEypjOXc6R1r6XgOU5WuMAyP59EtX8fzJHOjGKetK&X-Amz-Signature=cf6ef839292fcb1d84d242e5c556d11885b63392e056f4dda24c910898edfba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
