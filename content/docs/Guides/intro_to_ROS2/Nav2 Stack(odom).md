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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZT6YT5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5KrbPQqtYV7yqNVazu5MLEv1HcTJM%2BLf0luMJCsUxgIhANgep%2Fqxtg7EUr%2BJJ%2BQ7al4PE%2F1mh2rjUB5fPwjfDePiKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrUwEPlxzvOBWBlPoq3ANnr2UGDdXWJA7bJzkxZUD6qod%2BBolKrWqSovcmLvaD9CHPhYRDwzN8rG%2Bg1poLNxZwLjxUVzgGoWBlNW4aZLNsEGx1tOMxsAXBLGyXSdwpEckALsTMdMepE3aQ8tnl86psm9QoqHvyGaiKZk46Dkw4ah94y5NJCyopjwKEStBbQNdd9fIZk5ma1Y598q5%2BuZH5kqXYrmrTQ%2FDz%2BtwE%2FLSGYy7kT9e82ZCWJd7LbIFWhb2oT74%2B65L2FsbRKWx7NC0NjGuIUULhpUoWMVIPUy9G2M1AfHW1Wo4B%2BMl2bX9RY%2BAACcClWpacbypTat2tpOp9ORrITLcGWQK02LM1XdbyJOunJRIk0skZetZjF%2FVdbjeez3Dy2CPLg%2BgmvDC4t59VfKBqJbrDA%2B0NGoMt7tF%2FZd%2F8lJRP1Q%2B9Z4ZK9uf9P7%2FrtW3x%2FAf5hNxFji3GrYXRnQS15ib4NIkeBvQie1srv6dsbVSMBfeutpQVJ6%2FENmgg4gujtMrEXhAqU71syEHqAUDQbbXaMEbPlu0q19sGZbQewRGPAeWgoGl%2FdEOyvbQV4GsZezo7z6F0hAW33ohJ2bpCXtdac9xVdrielOjy9sOCN%2Fmxd599udxhzJHH64UZZcLRVN4zXiuM%2BTCwrbHBBjqkAZeBeSlmCXPim8jM47xTPrKvemHFyNZZlvsIC8IKQ4JPr802G0IBKpiHTF3Is4ePbu%2F%2B1H60f439YDMM49L7tdygjPEpIf3lFPuhaBf0A8i8bRF76RU05Up9QTBWYrc8enkusQCaIfALfxwXP7QPeP2%2B%2FLxIKqtRj3M%2Fpnk0ZAj%2BWP6EnNabxbWL9RHLv6s7nLHRNSjPfRf5wvkiEVmTJWXs64Vy&X-Amz-Signature=0acc326a63277d9b1dcdec8f148fd995d25dc7d6aadb9c676308bb35853e765e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZT6YT5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5KrbPQqtYV7yqNVazu5MLEv1HcTJM%2BLf0luMJCsUxgIhANgep%2Fqxtg7EUr%2BJJ%2BQ7al4PE%2F1mh2rjUB5fPwjfDePiKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrUwEPlxzvOBWBlPoq3ANnr2UGDdXWJA7bJzkxZUD6qod%2BBolKrWqSovcmLvaD9CHPhYRDwzN8rG%2Bg1poLNxZwLjxUVzgGoWBlNW4aZLNsEGx1tOMxsAXBLGyXSdwpEckALsTMdMepE3aQ8tnl86psm9QoqHvyGaiKZk46Dkw4ah94y5NJCyopjwKEStBbQNdd9fIZk5ma1Y598q5%2BuZH5kqXYrmrTQ%2FDz%2BtwE%2FLSGYy7kT9e82ZCWJd7LbIFWhb2oT74%2B65L2FsbRKWx7NC0NjGuIUULhpUoWMVIPUy9G2M1AfHW1Wo4B%2BMl2bX9RY%2BAACcClWpacbypTat2tpOp9ORrITLcGWQK02LM1XdbyJOunJRIk0skZetZjF%2FVdbjeez3Dy2CPLg%2BgmvDC4t59VfKBqJbrDA%2B0NGoMt7tF%2FZd%2F8lJRP1Q%2B9Z4ZK9uf9P7%2FrtW3x%2FAf5hNxFji3GrYXRnQS15ib4NIkeBvQie1srv6dsbVSMBfeutpQVJ6%2FENmgg4gujtMrEXhAqU71syEHqAUDQbbXaMEbPlu0q19sGZbQewRGPAeWgoGl%2FdEOyvbQV4GsZezo7z6F0hAW33ohJ2bpCXtdac9xVdrielOjy9sOCN%2Fmxd599udxhzJHH64UZZcLRVN4zXiuM%2BTCwrbHBBjqkAZeBeSlmCXPim8jM47xTPrKvemHFyNZZlvsIC8IKQ4JPr802G0IBKpiHTF3Is4ePbu%2F%2B1H60f439YDMM49L7tdygjPEpIf3lFPuhaBf0A8i8bRF76RU05Up9QTBWYrc8enkusQCaIfALfxwXP7QPeP2%2B%2FLxIKqtRj3M%2Fpnk0ZAj%2BWP6EnNabxbWL9RHLv6s7nLHRNSjPfRf5wvkiEVmTJWXs64Vy&X-Amz-Signature=5e1a8b1fdbe83c2dee241c7f2e8a25f04d07383cb060231c0beb5796a71b62f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZT6YT5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5KrbPQqtYV7yqNVazu5MLEv1HcTJM%2BLf0luMJCsUxgIhANgep%2Fqxtg7EUr%2BJJ%2BQ7al4PE%2F1mh2rjUB5fPwjfDePiKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrUwEPlxzvOBWBlPoq3ANnr2UGDdXWJA7bJzkxZUD6qod%2BBolKrWqSovcmLvaD9CHPhYRDwzN8rG%2Bg1poLNxZwLjxUVzgGoWBlNW4aZLNsEGx1tOMxsAXBLGyXSdwpEckALsTMdMepE3aQ8tnl86psm9QoqHvyGaiKZk46Dkw4ah94y5NJCyopjwKEStBbQNdd9fIZk5ma1Y598q5%2BuZH5kqXYrmrTQ%2FDz%2BtwE%2FLSGYy7kT9e82ZCWJd7LbIFWhb2oT74%2B65L2FsbRKWx7NC0NjGuIUULhpUoWMVIPUy9G2M1AfHW1Wo4B%2BMl2bX9RY%2BAACcClWpacbypTat2tpOp9ORrITLcGWQK02LM1XdbyJOunJRIk0skZetZjF%2FVdbjeez3Dy2CPLg%2BgmvDC4t59VfKBqJbrDA%2B0NGoMt7tF%2FZd%2F8lJRP1Q%2B9Z4ZK9uf9P7%2FrtW3x%2FAf5hNxFji3GrYXRnQS15ib4NIkeBvQie1srv6dsbVSMBfeutpQVJ6%2FENmgg4gujtMrEXhAqU71syEHqAUDQbbXaMEbPlu0q19sGZbQewRGPAeWgoGl%2FdEOyvbQV4GsZezo7z6F0hAW33ohJ2bpCXtdac9xVdrielOjy9sOCN%2Fmxd599udxhzJHH64UZZcLRVN4zXiuM%2BTCwrbHBBjqkAZeBeSlmCXPim8jM47xTPrKvemHFyNZZlvsIC8IKQ4JPr802G0IBKpiHTF3Is4ePbu%2F%2B1H60f439YDMM49L7tdygjPEpIf3lFPuhaBf0A8i8bRF76RU05Up9QTBWYrc8enkusQCaIfALfxwXP7QPeP2%2B%2FLxIKqtRj3M%2Fpnk0ZAj%2BWP6EnNabxbWL9RHLv6s7nLHRNSjPfRf5wvkiEVmTJWXs64Vy&X-Amz-Signature=7f8820cfd60362262cc442f14ce474a4a22b247d086489f0031e5438c02affdf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZT6YT5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5KrbPQqtYV7yqNVazu5MLEv1HcTJM%2BLf0luMJCsUxgIhANgep%2Fqxtg7EUr%2BJJ%2BQ7al4PE%2F1mh2rjUB5fPwjfDePiKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrUwEPlxzvOBWBlPoq3ANnr2UGDdXWJA7bJzkxZUD6qod%2BBolKrWqSovcmLvaD9CHPhYRDwzN8rG%2Bg1poLNxZwLjxUVzgGoWBlNW4aZLNsEGx1tOMxsAXBLGyXSdwpEckALsTMdMepE3aQ8tnl86psm9QoqHvyGaiKZk46Dkw4ah94y5NJCyopjwKEStBbQNdd9fIZk5ma1Y598q5%2BuZH5kqXYrmrTQ%2FDz%2BtwE%2FLSGYy7kT9e82ZCWJd7LbIFWhb2oT74%2B65L2FsbRKWx7NC0NjGuIUULhpUoWMVIPUy9G2M1AfHW1Wo4B%2BMl2bX9RY%2BAACcClWpacbypTat2tpOp9ORrITLcGWQK02LM1XdbyJOunJRIk0skZetZjF%2FVdbjeez3Dy2CPLg%2BgmvDC4t59VfKBqJbrDA%2B0NGoMt7tF%2FZd%2F8lJRP1Q%2B9Z4ZK9uf9P7%2FrtW3x%2FAf5hNxFji3GrYXRnQS15ib4NIkeBvQie1srv6dsbVSMBfeutpQVJ6%2FENmgg4gujtMrEXhAqU71syEHqAUDQbbXaMEbPlu0q19sGZbQewRGPAeWgoGl%2FdEOyvbQV4GsZezo7z6F0hAW33ohJ2bpCXtdac9xVdrielOjy9sOCN%2Fmxd599udxhzJHH64UZZcLRVN4zXiuM%2BTCwrbHBBjqkAZeBeSlmCXPim8jM47xTPrKvemHFyNZZlvsIC8IKQ4JPr802G0IBKpiHTF3Is4ePbu%2F%2B1H60f439YDMM49L7tdygjPEpIf3lFPuhaBf0A8i8bRF76RU05Up9QTBWYrc8enkusQCaIfALfxwXP7QPeP2%2B%2FLxIKqtRj3M%2Fpnk0ZAj%2BWP6EnNabxbWL9RHLv6s7nLHRNSjPfRf5wvkiEVmTJWXs64Vy&X-Amz-Signature=590dfb42d3a55c73a90ea18fdb7a79ffd0d7c19c790874c0056f2a625f53b163&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZT6YT5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5KrbPQqtYV7yqNVazu5MLEv1HcTJM%2BLf0luMJCsUxgIhANgep%2Fqxtg7EUr%2BJJ%2BQ7al4PE%2F1mh2rjUB5fPwjfDePiKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrUwEPlxzvOBWBlPoq3ANnr2UGDdXWJA7bJzkxZUD6qod%2BBolKrWqSovcmLvaD9CHPhYRDwzN8rG%2Bg1poLNxZwLjxUVzgGoWBlNW4aZLNsEGx1tOMxsAXBLGyXSdwpEckALsTMdMepE3aQ8tnl86psm9QoqHvyGaiKZk46Dkw4ah94y5NJCyopjwKEStBbQNdd9fIZk5ma1Y598q5%2BuZH5kqXYrmrTQ%2FDz%2BtwE%2FLSGYy7kT9e82ZCWJd7LbIFWhb2oT74%2B65L2FsbRKWx7NC0NjGuIUULhpUoWMVIPUy9G2M1AfHW1Wo4B%2BMl2bX9RY%2BAACcClWpacbypTat2tpOp9ORrITLcGWQK02LM1XdbyJOunJRIk0skZetZjF%2FVdbjeez3Dy2CPLg%2BgmvDC4t59VfKBqJbrDA%2B0NGoMt7tF%2FZd%2F8lJRP1Q%2B9Z4ZK9uf9P7%2FrtW3x%2FAf5hNxFji3GrYXRnQS15ib4NIkeBvQie1srv6dsbVSMBfeutpQVJ6%2FENmgg4gujtMrEXhAqU71syEHqAUDQbbXaMEbPlu0q19sGZbQewRGPAeWgoGl%2FdEOyvbQV4GsZezo7z6F0hAW33ohJ2bpCXtdac9xVdrielOjy9sOCN%2Fmxd599udxhzJHH64UZZcLRVN4zXiuM%2BTCwrbHBBjqkAZeBeSlmCXPim8jM47xTPrKvemHFyNZZlvsIC8IKQ4JPr802G0IBKpiHTF3Is4ePbu%2F%2B1H60f439YDMM49L7tdygjPEpIf3lFPuhaBf0A8i8bRF76RU05Up9QTBWYrc8enkusQCaIfALfxwXP7QPeP2%2B%2FLxIKqtRj3M%2Fpnk0ZAj%2BWP6EnNabxbWL9RHLv6s7nLHRNSjPfRf5wvkiEVmTJWXs64Vy&X-Amz-Signature=3712f0f3c5b19075ccfb183af92d71007d5f1aec22235f866879266b48594e52&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
