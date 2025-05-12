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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR44O7R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAwiTHhrhcP1Vf0F0rzZG3lNN8GPAdQCTs%2Bm1J1VaVOmAiARqs7UB%2BGB72k4cd%2BFMkdKGaK1FmgiMiWAHOvJHgXh2SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOBAe0oawnz9Xtv0KtwDDrYt2IgDqTfpXnnofTTGFLzUQUfA%2FGQ4NxOIEUa7%2Fvf15owVN811EK%2F8wFUjzhca7fGYCnk0ZJ2cEplYryKAxno2npGnCnP3lVORklqdDPWInJCOnPoBAFAToNaQJb%2FqekgfljPJUL4E9EMfh5eolhHf567pm2zbYFvcWIQRrpPYkWS6lqaZDPJZAtUp4AuZbWjoL8W32f3xdFPkrFbic7%2B%2FGR3qsZD5LkERk1SXZ2d5nlx5a1m7pzISglufFW1%2FAqc0mfszr1Y45rzngWxyHqIwcvaiPn81pEUCS7TO7w3Fi%2FfjsYSGlRVFKxMMvHi02n5dNKadmGOZKoRIPV3ZgtkZ9SVZrSiYg%2BSeT2WEuHzTZvJhZ%2BnlDaLCyahJK0dq0Bx1gm0CNFSmxdfM1PQwSQ15ILAssr0aHISbfXZq5TKNO2NGinwmNZco0j7HnQaLy%2B8w5WxBwveQeyocH49URGkOPgrXUKa38Clz7SkMeZZfIBBV8DPtDAqHrKgbMjJ9fpy%2BThSXeb25L0APkh%2BILSeXqcWhMFDAvk55FDudyg3JeF7H5SY2Lgf5R9p%2B3zwuzWuL7kvj5Oi%2FH3FQnORoZM5hy%2BkJW284EB6L3yvflE%2BOvvH8r67psJgfPdwwt%2ByHwQY6pgFZsTdQ7j0Yh8%2B%2BMVRscWZLLVH9ZvQLrxBYeFQ2mmUBvExoa6CLbuO%2FBaT8A8EUXBrj6jZtNdMa0oBSWedW7korKQZjreqFsWX4dzELmKQQmthnFCninji%2BdiiJAXwwzHxo%2FRPL01Q7gIQmQy9ZdTJovnKS7vLA5BSsTwdao0IQjJ%2BHzymfOgkI9fe04ZZLxrumCPtnSmzhyBjJ87veb99nRsTfVYqx&X-Amz-Signature=9ef740830037af6d02d33461437638b5e73b50cd815dac2d72a9efca1b98a484&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR44O7R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAwiTHhrhcP1Vf0F0rzZG3lNN8GPAdQCTs%2Bm1J1VaVOmAiARqs7UB%2BGB72k4cd%2BFMkdKGaK1FmgiMiWAHOvJHgXh2SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOBAe0oawnz9Xtv0KtwDDrYt2IgDqTfpXnnofTTGFLzUQUfA%2FGQ4NxOIEUa7%2Fvf15owVN811EK%2F8wFUjzhca7fGYCnk0ZJ2cEplYryKAxno2npGnCnP3lVORklqdDPWInJCOnPoBAFAToNaQJb%2FqekgfljPJUL4E9EMfh5eolhHf567pm2zbYFvcWIQRrpPYkWS6lqaZDPJZAtUp4AuZbWjoL8W32f3xdFPkrFbic7%2B%2FGR3qsZD5LkERk1SXZ2d5nlx5a1m7pzISglufFW1%2FAqc0mfszr1Y45rzngWxyHqIwcvaiPn81pEUCS7TO7w3Fi%2FfjsYSGlRVFKxMMvHi02n5dNKadmGOZKoRIPV3ZgtkZ9SVZrSiYg%2BSeT2WEuHzTZvJhZ%2BnlDaLCyahJK0dq0Bx1gm0CNFSmxdfM1PQwSQ15ILAssr0aHISbfXZq5TKNO2NGinwmNZco0j7HnQaLy%2B8w5WxBwveQeyocH49URGkOPgrXUKa38Clz7SkMeZZfIBBV8DPtDAqHrKgbMjJ9fpy%2BThSXeb25L0APkh%2BILSeXqcWhMFDAvk55FDudyg3JeF7H5SY2Lgf5R9p%2B3zwuzWuL7kvj5Oi%2FH3FQnORoZM5hy%2BkJW284EB6L3yvflE%2BOvvH8r67psJgfPdwwt%2ByHwQY6pgFZsTdQ7j0Yh8%2B%2BMVRscWZLLVH9ZvQLrxBYeFQ2mmUBvExoa6CLbuO%2FBaT8A8EUXBrj6jZtNdMa0oBSWedW7korKQZjreqFsWX4dzELmKQQmthnFCninji%2BdiiJAXwwzHxo%2FRPL01Q7gIQmQy9ZdTJovnKS7vLA5BSsTwdao0IQjJ%2BHzymfOgkI9fe04ZZLxrumCPtnSmzhyBjJ87veb99nRsTfVYqx&X-Amz-Signature=fd450b1efd3bc73abdbc21eb141d91110445aa768b27adf0afb6b8af1fccdfed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR44O7R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAwiTHhrhcP1Vf0F0rzZG3lNN8GPAdQCTs%2Bm1J1VaVOmAiARqs7UB%2BGB72k4cd%2BFMkdKGaK1FmgiMiWAHOvJHgXh2SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOBAe0oawnz9Xtv0KtwDDrYt2IgDqTfpXnnofTTGFLzUQUfA%2FGQ4NxOIEUa7%2Fvf15owVN811EK%2F8wFUjzhca7fGYCnk0ZJ2cEplYryKAxno2npGnCnP3lVORklqdDPWInJCOnPoBAFAToNaQJb%2FqekgfljPJUL4E9EMfh5eolhHf567pm2zbYFvcWIQRrpPYkWS6lqaZDPJZAtUp4AuZbWjoL8W32f3xdFPkrFbic7%2B%2FGR3qsZD5LkERk1SXZ2d5nlx5a1m7pzISglufFW1%2FAqc0mfszr1Y45rzngWxyHqIwcvaiPn81pEUCS7TO7w3Fi%2FfjsYSGlRVFKxMMvHi02n5dNKadmGOZKoRIPV3ZgtkZ9SVZrSiYg%2BSeT2WEuHzTZvJhZ%2BnlDaLCyahJK0dq0Bx1gm0CNFSmxdfM1PQwSQ15ILAssr0aHISbfXZq5TKNO2NGinwmNZco0j7HnQaLy%2B8w5WxBwveQeyocH49URGkOPgrXUKa38Clz7SkMeZZfIBBV8DPtDAqHrKgbMjJ9fpy%2BThSXeb25L0APkh%2BILSeXqcWhMFDAvk55FDudyg3JeF7H5SY2Lgf5R9p%2B3zwuzWuL7kvj5Oi%2FH3FQnORoZM5hy%2BkJW284EB6L3yvflE%2BOvvH8r67psJgfPdwwt%2ByHwQY6pgFZsTdQ7j0Yh8%2B%2BMVRscWZLLVH9ZvQLrxBYeFQ2mmUBvExoa6CLbuO%2FBaT8A8EUXBrj6jZtNdMa0oBSWedW7korKQZjreqFsWX4dzELmKQQmthnFCninji%2BdiiJAXwwzHxo%2FRPL01Q7gIQmQy9ZdTJovnKS7vLA5BSsTwdao0IQjJ%2BHzymfOgkI9fe04ZZLxrumCPtnSmzhyBjJ87veb99nRsTfVYqx&X-Amz-Signature=d182e1e5f9edaaa0f531a5c76f8a0987cd7a35cecb20a618a45f8ec041fc77f6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR44O7R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAwiTHhrhcP1Vf0F0rzZG3lNN8GPAdQCTs%2Bm1J1VaVOmAiARqs7UB%2BGB72k4cd%2BFMkdKGaK1FmgiMiWAHOvJHgXh2SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOBAe0oawnz9Xtv0KtwDDrYt2IgDqTfpXnnofTTGFLzUQUfA%2FGQ4NxOIEUa7%2Fvf15owVN811EK%2F8wFUjzhca7fGYCnk0ZJ2cEplYryKAxno2npGnCnP3lVORklqdDPWInJCOnPoBAFAToNaQJb%2FqekgfljPJUL4E9EMfh5eolhHf567pm2zbYFvcWIQRrpPYkWS6lqaZDPJZAtUp4AuZbWjoL8W32f3xdFPkrFbic7%2B%2FGR3qsZD5LkERk1SXZ2d5nlx5a1m7pzISglufFW1%2FAqc0mfszr1Y45rzngWxyHqIwcvaiPn81pEUCS7TO7w3Fi%2FfjsYSGlRVFKxMMvHi02n5dNKadmGOZKoRIPV3ZgtkZ9SVZrSiYg%2BSeT2WEuHzTZvJhZ%2BnlDaLCyahJK0dq0Bx1gm0CNFSmxdfM1PQwSQ15ILAssr0aHISbfXZq5TKNO2NGinwmNZco0j7HnQaLy%2B8w5WxBwveQeyocH49URGkOPgrXUKa38Clz7SkMeZZfIBBV8DPtDAqHrKgbMjJ9fpy%2BThSXeb25L0APkh%2BILSeXqcWhMFDAvk55FDudyg3JeF7H5SY2Lgf5R9p%2B3zwuzWuL7kvj5Oi%2FH3FQnORoZM5hy%2BkJW284EB6L3yvflE%2BOvvH8r67psJgfPdwwt%2ByHwQY6pgFZsTdQ7j0Yh8%2B%2BMVRscWZLLVH9ZvQLrxBYeFQ2mmUBvExoa6CLbuO%2FBaT8A8EUXBrj6jZtNdMa0oBSWedW7korKQZjreqFsWX4dzELmKQQmthnFCninji%2BdiiJAXwwzHxo%2FRPL01Q7gIQmQy9ZdTJovnKS7vLA5BSsTwdao0IQjJ%2BHzymfOgkI9fe04ZZLxrumCPtnSmzhyBjJ87veb99nRsTfVYqx&X-Amz-Signature=7b0fc7e7f413a2bdda0ba23ed6c2cee64a837a1cb2f94d427937a2078e530f92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR44O7R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAwiTHhrhcP1Vf0F0rzZG3lNN8GPAdQCTs%2Bm1J1VaVOmAiARqs7UB%2BGB72k4cd%2BFMkdKGaK1FmgiMiWAHOvJHgXh2SqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOBAe0oawnz9Xtv0KtwDDrYt2IgDqTfpXnnofTTGFLzUQUfA%2FGQ4NxOIEUa7%2Fvf15owVN811EK%2F8wFUjzhca7fGYCnk0ZJ2cEplYryKAxno2npGnCnP3lVORklqdDPWInJCOnPoBAFAToNaQJb%2FqekgfljPJUL4E9EMfh5eolhHf567pm2zbYFvcWIQRrpPYkWS6lqaZDPJZAtUp4AuZbWjoL8W32f3xdFPkrFbic7%2B%2FGR3qsZD5LkERk1SXZ2d5nlx5a1m7pzISglufFW1%2FAqc0mfszr1Y45rzngWxyHqIwcvaiPn81pEUCS7TO7w3Fi%2FfjsYSGlRVFKxMMvHi02n5dNKadmGOZKoRIPV3ZgtkZ9SVZrSiYg%2BSeT2WEuHzTZvJhZ%2BnlDaLCyahJK0dq0Bx1gm0CNFSmxdfM1PQwSQ15ILAssr0aHISbfXZq5TKNO2NGinwmNZco0j7HnQaLy%2B8w5WxBwveQeyocH49URGkOPgrXUKa38Clz7SkMeZZfIBBV8DPtDAqHrKgbMjJ9fpy%2BThSXeb25L0APkh%2BILSeXqcWhMFDAvk55FDudyg3JeF7H5SY2Lgf5R9p%2B3zwuzWuL7kvj5Oi%2FH3FQnORoZM5hy%2BkJW284EB6L3yvflE%2BOvvH8r67psJgfPdwwt%2ByHwQY6pgFZsTdQ7j0Yh8%2B%2BMVRscWZLLVH9ZvQLrxBYeFQ2mmUBvExoa6CLbuO%2FBaT8A8EUXBrj6jZtNdMa0oBSWedW7korKQZjreqFsWX4dzELmKQQmthnFCninji%2BdiiJAXwwzHxo%2FRPL01Q7gIQmQy9ZdTJovnKS7vLA5BSsTwdao0IQjJ%2BHzymfOgkI9fe04ZZLxrumCPtnSmzhyBjJ87veb99nRsTfVYqx&X-Amz-Signature=a3ea041e7ba86281e9c4d1329aa1d9ae5a8d3ea0258ce66f017437da805c495f&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
