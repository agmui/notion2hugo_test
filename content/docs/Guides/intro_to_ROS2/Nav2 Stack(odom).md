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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVYA4NE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC3WB0WnrUnlJeCU4BwLgZlKyqTtjQzwOdDe0hyTxWB%2BwIgfqkM1DE4l3ZG%2BWrYFxuKvKxkJi5eLuI9JSUTconbA3YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCMWgZN%2Bhxv205dCrcA7f%2B7zqnsXlu%2BTqap30rb9WqQhImFaMU3eCR%2BhTZFDst3KEWR8stxoFUdG5GhS9htXjnPDi1lvd7cR6mXJATPw3qKQOWXTtraMhlfDQnBTigvhgUVZCkSakvrrp7ILrCElDSeMd2O41InjN91%2FgDmZsPsK%2B7t8ihfVjz2nj5LQYS45sRGP3uyWPWsN%2B2FxaVJir5XGTNbdpiKIfBKi%2FDzIe5XP6RW4YZS67IY1RXUOWdsr6oVV5NGl%2F4MX%2FNjrCFcVT7hXGnT%2F1ehGuN0bq%2FQ9ar4jEZgAldmORQ6MOF8TA%2Fvd2ZGm%2BPtueFc09zcBs4boBTgf5E4QIw%2B6wAa85wkMajf8bhoHR7pyOqMS5cvZ9NWV1NAkJ3ghJmU7jVig02YOit%2Fms3anW%2FwY3%2FHFm8u8ewycOVVF0mTw51jlqMAPuD%2F6ioxxwOTrlRPp3Mhg%2FXPL%2F3LWs26K%2FU0X0WX16Nm8F9XZNBRDK7nyveQNdiD0MMTqbE%2BcRl9w1XYZzmKiXvD1lP2%2FjzwWAhkqQJ5C0MLOGet1arQDgqT6wGsaHodXvLL59GcHD9%2BQZNOsqcP8S4vA2W9UoJx73FarWab4rVE1XdQiy2PV7bpi7x%2F8bcMXurdDIX1fc4pEQCcAjHMMLr3r8GOqUBVsJriWymf%2BMRjrgKBHWI6tZHaBloIFJNYxNRz%2FJdxgWqB3YC8zyfCm4pP40LKV4gDm8ZyP4zIsB2lWro7SXxzK5Alj2wGReKaA9Cu%2FJZeUHRsWYIkJyeXC%2B4ncMcpTiJdfYjPptm5bEwDeursfBMG4ZlGtUfmW0GQlr3eGVfVCHSwYjXzglhpvEgUOS4e3rMAduGUnBNJ3Ndzegd6O3b86I1U6ro&X-Amz-Signature=00903dcc0d72c9b8886a4c7b2385196b0ca4fb5b2f3b43903a5bf60d4046b669&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVYA4NE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC3WB0WnrUnlJeCU4BwLgZlKyqTtjQzwOdDe0hyTxWB%2BwIgfqkM1DE4l3ZG%2BWrYFxuKvKxkJi5eLuI9JSUTconbA3YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCMWgZN%2Bhxv205dCrcA7f%2B7zqnsXlu%2BTqap30rb9WqQhImFaMU3eCR%2BhTZFDst3KEWR8stxoFUdG5GhS9htXjnPDi1lvd7cR6mXJATPw3qKQOWXTtraMhlfDQnBTigvhgUVZCkSakvrrp7ILrCElDSeMd2O41InjN91%2FgDmZsPsK%2B7t8ihfVjz2nj5LQYS45sRGP3uyWPWsN%2B2FxaVJir5XGTNbdpiKIfBKi%2FDzIe5XP6RW4YZS67IY1RXUOWdsr6oVV5NGl%2F4MX%2FNjrCFcVT7hXGnT%2F1ehGuN0bq%2FQ9ar4jEZgAldmORQ6MOF8TA%2Fvd2ZGm%2BPtueFc09zcBs4boBTgf5E4QIw%2B6wAa85wkMajf8bhoHR7pyOqMS5cvZ9NWV1NAkJ3ghJmU7jVig02YOit%2Fms3anW%2FwY3%2FHFm8u8ewycOVVF0mTw51jlqMAPuD%2F6ioxxwOTrlRPp3Mhg%2FXPL%2F3LWs26K%2FU0X0WX16Nm8F9XZNBRDK7nyveQNdiD0MMTqbE%2BcRl9w1XYZzmKiXvD1lP2%2FjzwWAhkqQJ5C0MLOGet1arQDgqT6wGsaHodXvLL59GcHD9%2BQZNOsqcP8S4vA2W9UoJx73FarWab4rVE1XdQiy2PV7bpi7x%2F8bcMXurdDIX1fc4pEQCcAjHMMLr3r8GOqUBVsJriWymf%2BMRjrgKBHWI6tZHaBloIFJNYxNRz%2FJdxgWqB3YC8zyfCm4pP40LKV4gDm8ZyP4zIsB2lWro7SXxzK5Alj2wGReKaA9Cu%2FJZeUHRsWYIkJyeXC%2B4ncMcpTiJdfYjPptm5bEwDeursfBMG4ZlGtUfmW0GQlr3eGVfVCHSwYjXzglhpvEgUOS4e3rMAduGUnBNJ3Ndzegd6O3b86I1U6ro&X-Amz-Signature=0f38463d226a441fa1a89803d1b8db13590cf2382d737bcf0140083a41f4fb82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVYA4NE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC3WB0WnrUnlJeCU4BwLgZlKyqTtjQzwOdDe0hyTxWB%2BwIgfqkM1DE4l3ZG%2BWrYFxuKvKxkJi5eLuI9JSUTconbA3YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCMWgZN%2Bhxv205dCrcA7f%2B7zqnsXlu%2BTqap30rb9WqQhImFaMU3eCR%2BhTZFDst3KEWR8stxoFUdG5GhS9htXjnPDi1lvd7cR6mXJATPw3qKQOWXTtraMhlfDQnBTigvhgUVZCkSakvrrp7ILrCElDSeMd2O41InjN91%2FgDmZsPsK%2B7t8ihfVjz2nj5LQYS45sRGP3uyWPWsN%2B2FxaVJir5XGTNbdpiKIfBKi%2FDzIe5XP6RW4YZS67IY1RXUOWdsr6oVV5NGl%2F4MX%2FNjrCFcVT7hXGnT%2F1ehGuN0bq%2FQ9ar4jEZgAldmORQ6MOF8TA%2Fvd2ZGm%2BPtueFc09zcBs4boBTgf5E4QIw%2B6wAa85wkMajf8bhoHR7pyOqMS5cvZ9NWV1NAkJ3ghJmU7jVig02YOit%2Fms3anW%2FwY3%2FHFm8u8ewycOVVF0mTw51jlqMAPuD%2F6ioxxwOTrlRPp3Mhg%2FXPL%2F3LWs26K%2FU0X0WX16Nm8F9XZNBRDK7nyveQNdiD0MMTqbE%2BcRl9w1XYZzmKiXvD1lP2%2FjzwWAhkqQJ5C0MLOGet1arQDgqT6wGsaHodXvLL59GcHD9%2BQZNOsqcP8S4vA2W9UoJx73FarWab4rVE1XdQiy2PV7bpi7x%2F8bcMXurdDIX1fc4pEQCcAjHMMLr3r8GOqUBVsJriWymf%2BMRjrgKBHWI6tZHaBloIFJNYxNRz%2FJdxgWqB3YC8zyfCm4pP40LKV4gDm8ZyP4zIsB2lWro7SXxzK5Alj2wGReKaA9Cu%2FJZeUHRsWYIkJyeXC%2B4ncMcpTiJdfYjPptm5bEwDeursfBMG4ZlGtUfmW0GQlr3eGVfVCHSwYjXzglhpvEgUOS4e3rMAduGUnBNJ3Ndzegd6O3b86I1U6ro&X-Amz-Signature=58060e7af856933b8df36d8668f83a1c7511d7b41918a3c5659b305993a365d9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVYA4NE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC3WB0WnrUnlJeCU4BwLgZlKyqTtjQzwOdDe0hyTxWB%2BwIgfqkM1DE4l3ZG%2BWrYFxuKvKxkJi5eLuI9JSUTconbA3YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCMWgZN%2Bhxv205dCrcA7f%2B7zqnsXlu%2BTqap30rb9WqQhImFaMU3eCR%2BhTZFDst3KEWR8stxoFUdG5GhS9htXjnPDi1lvd7cR6mXJATPw3qKQOWXTtraMhlfDQnBTigvhgUVZCkSakvrrp7ILrCElDSeMd2O41InjN91%2FgDmZsPsK%2B7t8ihfVjz2nj5LQYS45sRGP3uyWPWsN%2B2FxaVJir5XGTNbdpiKIfBKi%2FDzIe5XP6RW4YZS67IY1RXUOWdsr6oVV5NGl%2F4MX%2FNjrCFcVT7hXGnT%2F1ehGuN0bq%2FQ9ar4jEZgAldmORQ6MOF8TA%2Fvd2ZGm%2BPtueFc09zcBs4boBTgf5E4QIw%2B6wAa85wkMajf8bhoHR7pyOqMS5cvZ9NWV1NAkJ3ghJmU7jVig02YOit%2Fms3anW%2FwY3%2FHFm8u8ewycOVVF0mTw51jlqMAPuD%2F6ioxxwOTrlRPp3Mhg%2FXPL%2F3LWs26K%2FU0X0WX16Nm8F9XZNBRDK7nyveQNdiD0MMTqbE%2BcRl9w1XYZzmKiXvD1lP2%2FjzwWAhkqQJ5C0MLOGet1arQDgqT6wGsaHodXvLL59GcHD9%2BQZNOsqcP8S4vA2W9UoJx73FarWab4rVE1XdQiy2PV7bpi7x%2F8bcMXurdDIX1fc4pEQCcAjHMMLr3r8GOqUBVsJriWymf%2BMRjrgKBHWI6tZHaBloIFJNYxNRz%2FJdxgWqB3YC8zyfCm4pP40LKV4gDm8ZyP4zIsB2lWro7SXxzK5Alj2wGReKaA9Cu%2FJZeUHRsWYIkJyeXC%2B4ncMcpTiJdfYjPptm5bEwDeursfBMG4ZlGtUfmW0GQlr3eGVfVCHSwYjXzglhpvEgUOS4e3rMAduGUnBNJ3Ndzegd6O3b86I1U6ro&X-Amz-Signature=be1511a950707c0de3fcaacc62d7ecd8e26ff7351e913a2f761011b42306088b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVYA4NE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC3WB0WnrUnlJeCU4BwLgZlKyqTtjQzwOdDe0hyTxWB%2BwIgfqkM1DE4l3ZG%2BWrYFxuKvKxkJi5eLuI9JSUTconbA3YqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCMWgZN%2Bhxv205dCrcA7f%2B7zqnsXlu%2BTqap30rb9WqQhImFaMU3eCR%2BhTZFDst3KEWR8stxoFUdG5GhS9htXjnPDi1lvd7cR6mXJATPw3qKQOWXTtraMhlfDQnBTigvhgUVZCkSakvrrp7ILrCElDSeMd2O41InjN91%2FgDmZsPsK%2B7t8ihfVjz2nj5LQYS45sRGP3uyWPWsN%2B2FxaVJir5XGTNbdpiKIfBKi%2FDzIe5XP6RW4YZS67IY1RXUOWdsr6oVV5NGl%2F4MX%2FNjrCFcVT7hXGnT%2F1ehGuN0bq%2FQ9ar4jEZgAldmORQ6MOF8TA%2Fvd2ZGm%2BPtueFc09zcBs4boBTgf5E4QIw%2B6wAa85wkMajf8bhoHR7pyOqMS5cvZ9NWV1NAkJ3ghJmU7jVig02YOit%2Fms3anW%2FwY3%2FHFm8u8ewycOVVF0mTw51jlqMAPuD%2F6ioxxwOTrlRPp3Mhg%2FXPL%2F3LWs26K%2FU0X0WX16Nm8F9XZNBRDK7nyveQNdiD0MMTqbE%2BcRl9w1XYZzmKiXvD1lP2%2FjzwWAhkqQJ5C0MLOGet1arQDgqT6wGsaHodXvLL59GcHD9%2BQZNOsqcP8S4vA2W9UoJx73FarWab4rVE1XdQiy2PV7bpi7x%2F8bcMXurdDIX1fc4pEQCcAjHMMLr3r8GOqUBVsJriWymf%2BMRjrgKBHWI6tZHaBloIFJNYxNRz%2FJdxgWqB3YC8zyfCm4pP40LKV4gDm8ZyP4zIsB2lWro7SXxzK5Alj2wGReKaA9Cu%2FJZeUHRsWYIkJyeXC%2B4ncMcpTiJdfYjPptm5bEwDeursfBMG4ZlGtUfmW0GQlr3eGVfVCHSwYjXzglhpvEgUOS4e3rMAduGUnBNJ3Ndzegd6O3b86I1U6ro&X-Amz-Signature=fa61b5f171bdba257983b1c92e34075adc663688e8b465fca121ac039c966ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
