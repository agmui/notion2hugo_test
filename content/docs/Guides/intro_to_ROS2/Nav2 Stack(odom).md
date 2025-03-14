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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VCXPV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCScdTXqRzXnbD70gQh0VZRZPoolF2PnddKtIcK6GRDIAIgXnieV2V2hbLCsOVFmLGGpme16auUBx6ZW5LBYqskxzkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nyNAiaQtb5pYqDircA05GvVNNK3Mt9fH42Q1ZklmMlzIDpyhruRzuDRYVCzM5ZSM%2Fr0f8HgA81UgwkrSE9ED7kCQzzv8RUad%2BfZalKDUJoWX4Wyqk3OsBnM1ERce0yo2%2BB5uP5lG3UbJ93xnM28g8Lc6GSx4P4NqU6X%2FHAeIAaMD0%2FvRrmzaPjXj62NnBgo0bU5PASOT5tYQFxSGL4uYjZdyg2QGH2EcVHsyN2zqnLh2k2pgLmtD090wl844tQ4zfJgaSQutdfXKe5NMK85mHcAWBSY%2BAKj6yojuf8Dg1CkIlpVoeaQ%2FJc3LrP%2FM%2FpogfbIdqeVLs3BUK%2B%2FwalV7c%2BGKK%2BV7ss81QfTjZXhKqRDcmCgIyeFl1TSHj85Jv5kPddVxJsgXXz9ysQ6p1vO4ba0AGYvw2lI%2F5NF%2BxGA5SBQECCTnF89Cgt%2Fycd4y4PHg%2F6GJn2gumG7R%2Fleq92lbR%2FzasSo19BdfwO3%2FPsdlsGptzLOZOaol5PR%2B6xhMN9EJfWK7BC3eOMEue5q0qSXZdTi5ARIfEUTtwTT%2BDqMESbpvPBswNcwST4MBKB8PdPzg5UAXVuA%2BcqQg6ZGro3A8l0DvkTZF2sOZ3wG%2FFlBOVzCnMrsRvbE2skLxwZ2ReMstYSZZNC2v3JVVyMNOG0L4GOqUBIN3hKAr6nf1T3%2BvgZRutWr%2BAaoxsp5fZ5Jbgds50fvbs1%2BnlD74iqrBktjVMxDmR30dflqU9ReVRsohC0fRWU%2BRQTCFq1Utqw52kxwpmmMzMzKMk5FCrQE3OSDYpVrijfFqKpHhAiXJ%2FCtpV0pjBWI0aGzafC%2FLCYYeNu161SuZNWqP2ew59OfKlcQLnDg3f%2F17zI59jWSgGF66oAI3dpon3V%2B%2FD&X-Amz-Signature=c43a0bdb38a6efa267f1cec07653d160b49523df7c745847e4427502d369d243&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VCXPV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCScdTXqRzXnbD70gQh0VZRZPoolF2PnddKtIcK6GRDIAIgXnieV2V2hbLCsOVFmLGGpme16auUBx6ZW5LBYqskxzkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nyNAiaQtb5pYqDircA05GvVNNK3Mt9fH42Q1ZklmMlzIDpyhruRzuDRYVCzM5ZSM%2Fr0f8HgA81UgwkrSE9ED7kCQzzv8RUad%2BfZalKDUJoWX4Wyqk3OsBnM1ERce0yo2%2BB5uP5lG3UbJ93xnM28g8Lc6GSx4P4NqU6X%2FHAeIAaMD0%2FvRrmzaPjXj62NnBgo0bU5PASOT5tYQFxSGL4uYjZdyg2QGH2EcVHsyN2zqnLh2k2pgLmtD090wl844tQ4zfJgaSQutdfXKe5NMK85mHcAWBSY%2BAKj6yojuf8Dg1CkIlpVoeaQ%2FJc3LrP%2FM%2FpogfbIdqeVLs3BUK%2B%2FwalV7c%2BGKK%2BV7ss81QfTjZXhKqRDcmCgIyeFl1TSHj85Jv5kPddVxJsgXXz9ysQ6p1vO4ba0AGYvw2lI%2F5NF%2BxGA5SBQECCTnF89Cgt%2Fycd4y4PHg%2F6GJn2gumG7R%2Fleq92lbR%2FzasSo19BdfwO3%2FPsdlsGptzLOZOaol5PR%2B6xhMN9EJfWK7BC3eOMEue5q0qSXZdTi5ARIfEUTtwTT%2BDqMESbpvPBswNcwST4MBKB8PdPzg5UAXVuA%2BcqQg6ZGro3A8l0DvkTZF2sOZ3wG%2FFlBOVzCnMrsRvbE2skLxwZ2ReMstYSZZNC2v3JVVyMNOG0L4GOqUBIN3hKAr6nf1T3%2BvgZRutWr%2BAaoxsp5fZ5Jbgds50fvbs1%2BnlD74iqrBktjVMxDmR30dflqU9ReVRsohC0fRWU%2BRQTCFq1Utqw52kxwpmmMzMzKMk5FCrQE3OSDYpVrijfFqKpHhAiXJ%2FCtpV0pjBWI0aGzafC%2FLCYYeNu161SuZNWqP2ew59OfKlcQLnDg3f%2F17zI59jWSgGF66oAI3dpon3V%2B%2FD&X-Amz-Signature=7132dfa9818420e38a8b94e532c44d67446d5576a5d2c7794273357ff5b42f78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VCXPV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCScdTXqRzXnbD70gQh0VZRZPoolF2PnddKtIcK6GRDIAIgXnieV2V2hbLCsOVFmLGGpme16auUBx6ZW5LBYqskxzkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nyNAiaQtb5pYqDircA05GvVNNK3Mt9fH42Q1ZklmMlzIDpyhruRzuDRYVCzM5ZSM%2Fr0f8HgA81UgwkrSE9ED7kCQzzv8RUad%2BfZalKDUJoWX4Wyqk3OsBnM1ERce0yo2%2BB5uP5lG3UbJ93xnM28g8Lc6GSx4P4NqU6X%2FHAeIAaMD0%2FvRrmzaPjXj62NnBgo0bU5PASOT5tYQFxSGL4uYjZdyg2QGH2EcVHsyN2zqnLh2k2pgLmtD090wl844tQ4zfJgaSQutdfXKe5NMK85mHcAWBSY%2BAKj6yojuf8Dg1CkIlpVoeaQ%2FJc3LrP%2FM%2FpogfbIdqeVLs3BUK%2B%2FwalV7c%2BGKK%2BV7ss81QfTjZXhKqRDcmCgIyeFl1TSHj85Jv5kPddVxJsgXXz9ysQ6p1vO4ba0AGYvw2lI%2F5NF%2BxGA5SBQECCTnF89Cgt%2Fycd4y4PHg%2F6GJn2gumG7R%2Fleq92lbR%2FzasSo19BdfwO3%2FPsdlsGptzLOZOaol5PR%2B6xhMN9EJfWK7BC3eOMEue5q0qSXZdTi5ARIfEUTtwTT%2BDqMESbpvPBswNcwST4MBKB8PdPzg5UAXVuA%2BcqQg6ZGro3A8l0DvkTZF2sOZ3wG%2FFlBOVzCnMrsRvbE2skLxwZ2ReMstYSZZNC2v3JVVyMNOG0L4GOqUBIN3hKAr6nf1T3%2BvgZRutWr%2BAaoxsp5fZ5Jbgds50fvbs1%2BnlD74iqrBktjVMxDmR30dflqU9ReVRsohC0fRWU%2BRQTCFq1Utqw52kxwpmmMzMzKMk5FCrQE3OSDYpVrijfFqKpHhAiXJ%2FCtpV0pjBWI0aGzafC%2FLCYYeNu161SuZNWqP2ew59OfKlcQLnDg3f%2F17zI59jWSgGF66oAI3dpon3V%2B%2FD&X-Amz-Signature=100f4cf351235756b8cdcf8e7ef4f1867181425ec01443f6fb8b9910647d8d85&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VCXPV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCScdTXqRzXnbD70gQh0VZRZPoolF2PnddKtIcK6GRDIAIgXnieV2V2hbLCsOVFmLGGpme16auUBx6ZW5LBYqskxzkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nyNAiaQtb5pYqDircA05GvVNNK3Mt9fH42Q1ZklmMlzIDpyhruRzuDRYVCzM5ZSM%2Fr0f8HgA81UgwkrSE9ED7kCQzzv8RUad%2BfZalKDUJoWX4Wyqk3OsBnM1ERce0yo2%2BB5uP5lG3UbJ93xnM28g8Lc6GSx4P4NqU6X%2FHAeIAaMD0%2FvRrmzaPjXj62NnBgo0bU5PASOT5tYQFxSGL4uYjZdyg2QGH2EcVHsyN2zqnLh2k2pgLmtD090wl844tQ4zfJgaSQutdfXKe5NMK85mHcAWBSY%2BAKj6yojuf8Dg1CkIlpVoeaQ%2FJc3LrP%2FM%2FpogfbIdqeVLs3BUK%2B%2FwalV7c%2BGKK%2BV7ss81QfTjZXhKqRDcmCgIyeFl1TSHj85Jv5kPddVxJsgXXz9ysQ6p1vO4ba0AGYvw2lI%2F5NF%2BxGA5SBQECCTnF89Cgt%2Fycd4y4PHg%2F6GJn2gumG7R%2Fleq92lbR%2FzasSo19BdfwO3%2FPsdlsGptzLOZOaol5PR%2B6xhMN9EJfWK7BC3eOMEue5q0qSXZdTi5ARIfEUTtwTT%2BDqMESbpvPBswNcwST4MBKB8PdPzg5UAXVuA%2BcqQg6ZGro3A8l0DvkTZF2sOZ3wG%2FFlBOVzCnMrsRvbE2skLxwZ2ReMstYSZZNC2v3JVVyMNOG0L4GOqUBIN3hKAr6nf1T3%2BvgZRutWr%2BAaoxsp5fZ5Jbgds50fvbs1%2BnlD74iqrBktjVMxDmR30dflqU9ReVRsohC0fRWU%2BRQTCFq1Utqw52kxwpmmMzMzKMk5FCrQE3OSDYpVrijfFqKpHhAiXJ%2FCtpV0pjBWI0aGzafC%2FLCYYeNu161SuZNWqP2ew59OfKlcQLnDg3f%2F17zI59jWSgGF66oAI3dpon3V%2B%2FD&X-Amz-Signature=e99d73e02ef91565c90474ae2080c79c630319b41101322d959a8a87d7e12e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VCXPV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCScdTXqRzXnbD70gQh0VZRZPoolF2PnddKtIcK6GRDIAIgXnieV2V2hbLCsOVFmLGGpme16auUBx6ZW5LBYqskxzkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7nyNAiaQtb5pYqDircA05GvVNNK3Mt9fH42Q1ZklmMlzIDpyhruRzuDRYVCzM5ZSM%2Fr0f8HgA81UgwkrSE9ED7kCQzzv8RUad%2BfZalKDUJoWX4Wyqk3OsBnM1ERce0yo2%2BB5uP5lG3UbJ93xnM28g8Lc6GSx4P4NqU6X%2FHAeIAaMD0%2FvRrmzaPjXj62NnBgo0bU5PASOT5tYQFxSGL4uYjZdyg2QGH2EcVHsyN2zqnLh2k2pgLmtD090wl844tQ4zfJgaSQutdfXKe5NMK85mHcAWBSY%2BAKj6yojuf8Dg1CkIlpVoeaQ%2FJc3LrP%2FM%2FpogfbIdqeVLs3BUK%2B%2FwalV7c%2BGKK%2BV7ss81QfTjZXhKqRDcmCgIyeFl1TSHj85Jv5kPddVxJsgXXz9ysQ6p1vO4ba0AGYvw2lI%2F5NF%2BxGA5SBQECCTnF89Cgt%2Fycd4y4PHg%2F6GJn2gumG7R%2Fleq92lbR%2FzasSo19BdfwO3%2FPsdlsGptzLOZOaol5PR%2B6xhMN9EJfWK7BC3eOMEue5q0qSXZdTi5ARIfEUTtwTT%2BDqMESbpvPBswNcwST4MBKB8PdPzg5UAXVuA%2BcqQg6ZGro3A8l0DvkTZF2sOZ3wG%2FFlBOVzCnMrsRvbE2skLxwZ2ReMstYSZZNC2v3JVVyMNOG0L4GOqUBIN3hKAr6nf1T3%2BvgZRutWr%2BAaoxsp5fZ5Jbgds50fvbs1%2BnlD74iqrBktjVMxDmR30dflqU9ReVRsohC0fRWU%2BRQTCFq1Utqw52kxwpmmMzMzKMk5FCrQE3OSDYpVrijfFqKpHhAiXJ%2FCtpV0pjBWI0aGzafC%2FLCYYeNu161SuZNWqP2ew59OfKlcQLnDg3f%2F17zI59jWSgGF66oAI3dpon3V%2B%2FD&X-Amz-Signature=bf4894333e1f24843eb9e59456b9605abcfe36e72054a50aa50b9495d80147d9&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
