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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LRI4GY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6m6fQKxFrrk3Mi429UMxlpPQB3MH9zl3bKMtLxyJRZgIhAJZcQFYRfS79Hh2qUCjJHygxbMNJjQQ90NT41d1AZE%2FtKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmLGQPWL8GzAsSBpsq3APgHcKhfRGwYBBCTpmRr6%2BbDhNArjWSGSKVMoXL8Q16lyaB42g8x0QTgpyxGi13%2FTXpOtrN4%2F2hskeEy%2FFUnEdA6xFb0leVARrMgPCnOSv9xr9J2b3FSEeI3AOMftN4hORoMqK0Fv7I9f5oyBzYT2rAn1QM1hZ2GYiEXznot4zQ80KZ7roRrTsuNO%2Bz6pD%2BMiW%2B4xfACGZjeydSF6NnRR7K%2FubzyIicpQt9JqABC%2FmcT2S0JEhdb1Czm%2BqK4A8D2vcG1PaIMj0vO13CHMPi3C5lbhBpISPtCsJJJxE%2BNdXO2KoWPRXX2ctIduSwN2UOVABSae34XFqB0nAD6cwVulwx1f02mCgQXVfzQ8r%2FMvM7VvnIVnPhZR7eQgLac2CkkfSAB8s%2FHa0OALHWmm064OjbM4hNkBmXcJrw7yLhjzevtmLtb7yGbwYQZPtdtnPfADmpCoU2Mw7o9D%2BZbIMcZ6ItAV4c2jM%2F1yULmKA5rfTDG2Vuaxwct9kKCQwE%2FB8vO1mFJU%2B4tKAM2cURlh4LqfIgbDyxQCExPKSnk0ffOk0KhzF6zhTuivdTr2hqwuMd7tpnn8ovWVg%2FimMlw7nzifJxgvVfZa8EYme4rR1kkmumRhgFbZ4FBbENIMQm7zDF%2Bb%2FDBjqkAUGfHX6TmNcAzyznPYgPbkfCzLiWz3s8i0V8Obk%2FftvIgJNclW3CK0hK7R6roB6B5iYN6HzsEL7Fcxkd72JAoMeE7dLh18ZQutIWRc%2BvZ%2B1GtBirEi4%2F6DQRPZUzMF14DQh9iHR1RjUAMJJLmq1SEPNbAFjm71Zg%2BCpLOM5TRt21lh%2FXoYL0AiixCLM5EOi2aZEsjllK0VNlWnEKdY5aRymB4lOv&X-Amz-Signature=72c8b0e3038c5306b6d8e43b8b0e3a0c70d555645854cd8cb9aa65919b9d45f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LRI4GY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6m6fQKxFrrk3Mi429UMxlpPQB3MH9zl3bKMtLxyJRZgIhAJZcQFYRfS79Hh2qUCjJHygxbMNJjQQ90NT41d1AZE%2FtKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmLGQPWL8GzAsSBpsq3APgHcKhfRGwYBBCTpmRr6%2BbDhNArjWSGSKVMoXL8Q16lyaB42g8x0QTgpyxGi13%2FTXpOtrN4%2F2hskeEy%2FFUnEdA6xFb0leVARrMgPCnOSv9xr9J2b3FSEeI3AOMftN4hORoMqK0Fv7I9f5oyBzYT2rAn1QM1hZ2GYiEXznot4zQ80KZ7roRrTsuNO%2Bz6pD%2BMiW%2B4xfACGZjeydSF6NnRR7K%2FubzyIicpQt9JqABC%2FmcT2S0JEhdb1Czm%2BqK4A8D2vcG1PaIMj0vO13CHMPi3C5lbhBpISPtCsJJJxE%2BNdXO2KoWPRXX2ctIduSwN2UOVABSae34XFqB0nAD6cwVulwx1f02mCgQXVfzQ8r%2FMvM7VvnIVnPhZR7eQgLac2CkkfSAB8s%2FHa0OALHWmm064OjbM4hNkBmXcJrw7yLhjzevtmLtb7yGbwYQZPtdtnPfADmpCoU2Mw7o9D%2BZbIMcZ6ItAV4c2jM%2F1yULmKA5rfTDG2Vuaxwct9kKCQwE%2FB8vO1mFJU%2B4tKAM2cURlh4LqfIgbDyxQCExPKSnk0ffOk0KhzF6zhTuivdTr2hqwuMd7tpnn8ovWVg%2FimMlw7nzifJxgvVfZa8EYme4rR1kkmumRhgFbZ4FBbENIMQm7zDF%2Bb%2FDBjqkAUGfHX6TmNcAzyznPYgPbkfCzLiWz3s8i0V8Obk%2FftvIgJNclW3CK0hK7R6roB6B5iYN6HzsEL7Fcxkd72JAoMeE7dLh18ZQutIWRc%2BvZ%2B1GtBirEi4%2F6DQRPZUzMF14DQh9iHR1RjUAMJJLmq1SEPNbAFjm71Zg%2BCpLOM5TRt21lh%2FXoYL0AiixCLM5EOi2aZEsjllK0VNlWnEKdY5aRymB4lOv&X-Amz-Signature=7a39fbccaa13d8c0b80423b4d4ef141d67df0ae492f2cdfc12eb3fb4b988f385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LRI4GY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6m6fQKxFrrk3Mi429UMxlpPQB3MH9zl3bKMtLxyJRZgIhAJZcQFYRfS79Hh2qUCjJHygxbMNJjQQ90NT41d1AZE%2FtKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmLGQPWL8GzAsSBpsq3APgHcKhfRGwYBBCTpmRr6%2BbDhNArjWSGSKVMoXL8Q16lyaB42g8x0QTgpyxGi13%2FTXpOtrN4%2F2hskeEy%2FFUnEdA6xFb0leVARrMgPCnOSv9xr9J2b3FSEeI3AOMftN4hORoMqK0Fv7I9f5oyBzYT2rAn1QM1hZ2GYiEXznot4zQ80KZ7roRrTsuNO%2Bz6pD%2BMiW%2B4xfACGZjeydSF6NnRR7K%2FubzyIicpQt9JqABC%2FmcT2S0JEhdb1Czm%2BqK4A8D2vcG1PaIMj0vO13CHMPi3C5lbhBpISPtCsJJJxE%2BNdXO2KoWPRXX2ctIduSwN2UOVABSae34XFqB0nAD6cwVulwx1f02mCgQXVfzQ8r%2FMvM7VvnIVnPhZR7eQgLac2CkkfSAB8s%2FHa0OALHWmm064OjbM4hNkBmXcJrw7yLhjzevtmLtb7yGbwYQZPtdtnPfADmpCoU2Mw7o9D%2BZbIMcZ6ItAV4c2jM%2F1yULmKA5rfTDG2Vuaxwct9kKCQwE%2FB8vO1mFJU%2B4tKAM2cURlh4LqfIgbDyxQCExPKSnk0ffOk0KhzF6zhTuivdTr2hqwuMd7tpnn8ovWVg%2FimMlw7nzifJxgvVfZa8EYme4rR1kkmumRhgFbZ4FBbENIMQm7zDF%2Bb%2FDBjqkAUGfHX6TmNcAzyznPYgPbkfCzLiWz3s8i0V8Obk%2FftvIgJNclW3CK0hK7R6roB6B5iYN6HzsEL7Fcxkd72JAoMeE7dLh18ZQutIWRc%2BvZ%2B1GtBirEi4%2F6DQRPZUzMF14DQh9iHR1RjUAMJJLmq1SEPNbAFjm71Zg%2BCpLOM5TRt21lh%2FXoYL0AiixCLM5EOi2aZEsjllK0VNlWnEKdY5aRymB4lOv&X-Amz-Signature=63be06f3b90c9adbeff79fc76a2b0109b604bf73268bc408483717f328274865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LRI4GY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6m6fQKxFrrk3Mi429UMxlpPQB3MH9zl3bKMtLxyJRZgIhAJZcQFYRfS79Hh2qUCjJHygxbMNJjQQ90NT41d1AZE%2FtKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmLGQPWL8GzAsSBpsq3APgHcKhfRGwYBBCTpmRr6%2BbDhNArjWSGSKVMoXL8Q16lyaB42g8x0QTgpyxGi13%2FTXpOtrN4%2F2hskeEy%2FFUnEdA6xFb0leVARrMgPCnOSv9xr9J2b3FSEeI3AOMftN4hORoMqK0Fv7I9f5oyBzYT2rAn1QM1hZ2GYiEXznot4zQ80KZ7roRrTsuNO%2Bz6pD%2BMiW%2B4xfACGZjeydSF6NnRR7K%2FubzyIicpQt9JqABC%2FmcT2S0JEhdb1Czm%2BqK4A8D2vcG1PaIMj0vO13CHMPi3C5lbhBpISPtCsJJJxE%2BNdXO2KoWPRXX2ctIduSwN2UOVABSae34XFqB0nAD6cwVulwx1f02mCgQXVfzQ8r%2FMvM7VvnIVnPhZR7eQgLac2CkkfSAB8s%2FHa0OALHWmm064OjbM4hNkBmXcJrw7yLhjzevtmLtb7yGbwYQZPtdtnPfADmpCoU2Mw7o9D%2BZbIMcZ6ItAV4c2jM%2F1yULmKA5rfTDG2Vuaxwct9kKCQwE%2FB8vO1mFJU%2B4tKAM2cURlh4LqfIgbDyxQCExPKSnk0ffOk0KhzF6zhTuivdTr2hqwuMd7tpnn8ovWVg%2FimMlw7nzifJxgvVfZa8EYme4rR1kkmumRhgFbZ4FBbENIMQm7zDF%2Bb%2FDBjqkAUGfHX6TmNcAzyznPYgPbkfCzLiWz3s8i0V8Obk%2FftvIgJNclW3CK0hK7R6roB6B5iYN6HzsEL7Fcxkd72JAoMeE7dLh18ZQutIWRc%2BvZ%2B1GtBirEi4%2F6DQRPZUzMF14DQh9iHR1RjUAMJJLmq1SEPNbAFjm71Zg%2BCpLOM5TRt21lh%2FXoYL0AiixCLM5EOi2aZEsjllK0VNlWnEKdY5aRymB4lOv&X-Amz-Signature=9850345cf2a07b13ca884f69e47154dfc7a57e9406198c547b1bdcc8a7a5bb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LRI4GY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6m6fQKxFrrk3Mi429UMxlpPQB3MH9zl3bKMtLxyJRZgIhAJZcQFYRfS79Hh2qUCjJHygxbMNJjQQ90NT41d1AZE%2FtKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmLGQPWL8GzAsSBpsq3APgHcKhfRGwYBBCTpmRr6%2BbDhNArjWSGSKVMoXL8Q16lyaB42g8x0QTgpyxGi13%2FTXpOtrN4%2F2hskeEy%2FFUnEdA6xFb0leVARrMgPCnOSv9xr9J2b3FSEeI3AOMftN4hORoMqK0Fv7I9f5oyBzYT2rAn1QM1hZ2GYiEXznot4zQ80KZ7roRrTsuNO%2Bz6pD%2BMiW%2B4xfACGZjeydSF6NnRR7K%2FubzyIicpQt9JqABC%2FmcT2S0JEhdb1Czm%2BqK4A8D2vcG1PaIMj0vO13CHMPi3C5lbhBpISPtCsJJJxE%2BNdXO2KoWPRXX2ctIduSwN2UOVABSae34XFqB0nAD6cwVulwx1f02mCgQXVfzQ8r%2FMvM7VvnIVnPhZR7eQgLac2CkkfSAB8s%2FHa0OALHWmm064OjbM4hNkBmXcJrw7yLhjzevtmLtb7yGbwYQZPtdtnPfADmpCoU2Mw7o9D%2BZbIMcZ6ItAV4c2jM%2F1yULmKA5rfTDG2Vuaxwct9kKCQwE%2FB8vO1mFJU%2B4tKAM2cURlh4LqfIgbDyxQCExPKSnk0ffOk0KhzF6zhTuivdTr2hqwuMd7tpnn8ovWVg%2FimMlw7nzifJxgvVfZa8EYme4rR1kkmumRhgFbZ4FBbENIMQm7zDF%2Bb%2FDBjqkAUGfHX6TmNcAzyznPYgPbkfCzLiWz3s8i0V8Obk%2FftvIgJNclW3CK0hK7R6roB6B5iYN6HzsEL7Fcxkd72JAoMeE7dLh18ZQutIWRc%2BvZ%2B1GtBirEi4%2F6DQRPZUzMF14DQh9iHR1RjUAMJJLmq1SEPNbAFjm71Zg%2BCpLOM5TRt21lh%2FXoYL0AiixCLM5EOi2aZEsjllK0VNlWnEKdY5aRymB4lOv&X-Amz-Signature=be9d393aa5bde73fcd18fc25704a08c8b43c6a098a4a0b7e11a8f5c9442b1220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
