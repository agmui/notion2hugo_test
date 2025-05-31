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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIGI7LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyEV27MRel1L7kMW4e9bcjkA%2FL03sWvHHQ4u3nPF7urAiEArlm2cuUZ76FfKV47mX34FuBOWw4PnJR6OKpfMIgeB7gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtGxAL7FQfKmm%2BdAircA1DveAw8lfRNAj%2Ft7lqqPvBmVbSsCfPMLre%2BxlBCirfhGwZANrpNjIdftgMAb6mbW9zvHgXZ2M52L%2FCA%2BNmU1dIaNi1hQ9d8DYsUXfimoK1CX%2BRarx%2FFi28b4YxqXWOsxSzfb67ys1djz06vvCby5imiJx6ieCE6PrRdg3euUspKrpm%2BAJoQwpptQDPheTRjORSwLzjkKMBs2QnBxAR9TNypSuh%2BKWPLy2OuO1pK4UixsR7foOQI3OH9jjQu0HzOGDmX%2BDWyIeZk5aFPHdZruuhmx7SOai2ho%2Bs5gt1LME8yyXgUfTeIjfWMxwD%2FpQNec3hX4LDrtep7aD6EM1fnzHShFR94TQCvOZ2kmuvcvdNVLO5U4zsFDzfZN9TGPb3wdWb%2FeWncEN1gdvaO%2B6%2FeJjiqwRqxGRbxO0holr9XycbowUKSqn4hb%2FnPvgMKGezDP%2FXNGXKm1kyNIAn2gd4p%2Bw7jLbll72T3VFac0KCUgAh2xmaHZVd5%2FRrDVWv3PWNftLicviRrS2nECrbrn4df3%2FGJHVGWlJPrmuFOuaIAAhRrnUNgAKyxTPOXGC0wrFXVB6oepG4gqwRFRoHnatBljOm54iW7hA9kvGx1%2BcXs8Ssp%2FR8pzU6UfSt2LJ65MKHv7MEGOqUB1sl%2Fp0g4FFUJGhSycNJncqPm%2FU7FTsOthURrj6mQctW7gzxfn4s85kHXPQc7q6oayBLXpD8m3aNiLuYzlyvKW5S%2B63JkWwOkB1ANN7UFzVCb%2BdE7yrm1BqzGB3gs3kGzm8TnYZm3Fbn6SadnZq3CDYnCGuoeV51MlsSdum%2Be%2BPNPnT26bdqE7QpD%2FZFZgl7G2WJiz280FHfa94mQEiqpdel2p5Aa&X-Amz-Signature=3ac9c956a1fd3933811af28f8aada3323f6a3a15cc8e3575c8d9c74bb6064758&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIGI7LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyEV27MRel1L7kMW4e9bcjkA%2FL03sWvHHQ4u3nPF7urAiEArlm2cuUZ76FfKV47mX34FuBOWw4PnJR6OKpfMIgeB7gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtGxAL7FQfKmm%2BdAircA1DveAw8lfRNAj%2Ft7lqqPvBmVbSsCfPMLre%2BxlBCirfhGwZANrpNjIdftgMAb6mbW9zvHgXZ2M52L%2FCA%2BNmU1dIaNi1hQ9d8DYsUXfimoK1CX%2BRarx%2FFi28b4YxqXWOsxSzfb67ys1djz06vvCby5imiJx6ieCE6PrRdg3euUspKrpm%2BAJoQwpptQDPheTRjORSwLzjkKMBs2QnBxAR9TNypSuh%2BKWPLy2OuO1pK4UixsR7foOQI3OH9jjQu0HzOGDmX%2BDWyIeZk5aFPHdZruuhmx7SOai2ho%2Bs5gt1LME8yyXgUfTeIjfWMxwD%2FpQNec3hX4LDrtep7aD6EM1fnzHShFR94TQCvOZ2kmuvcvdNVLO5U4zsFDzfZN9TGPb3wdWb%2FeWncEN1gdvaO%2B6%2FeJjiqwRqxGRbxO0holr9XycbowUKSqn4hb%2FnPvgMKGezDP%2FXNGXKm1kyNIAn2gd4p%2Bw7jLbll72T3VFac0KCUgAh2xmaHZVd5%2FRrDVWv3PWNftLicviRrS2nECrbrn4df3%2FGJHVGWlJPrmuFOuaIAAhRrnUNgAKyxTPOXGC0wrFXVB6oepG4gqwRFRoHnatBljOm54iW7hA9kvGx1%2BcXs8Ssp%2FR8pzU6UfSt2LJ65MKHv7MEGOqUB1sl%2Fp0g4FFUJGhSycNJncqPm%2FU7FTsOthURrj6mQctW7gzxfn4s85kHXPQc7q6oayBLXpD8m3aNiLuYzlyvKW5S%2B63JkWwOkB1ANN7UFzVCb%2BdE7yrm1BqzGB3gs3kGzm8TnYZm3Fbn6SadnZq3CDYnCGuoeV51MlsSdum%2Be%2BPNPnT26bdqE7QpD%2FZFZgl7G2WJiz280FHfa94mQEiqpdel2p5Aa&X-Amz-Signature=cf85251fc848500ca24bf7bdb35bdd91d44d22dcedbadec30a26144c48177b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIGI7LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyEV27MRel1L7kMW4e9bcjkA%2FL03sWvHHQ4u3nPF7urAiEArlm2cuUZ76FfKV47mX34FuBOWw4PnJR6OKpfMIgeB7gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtGxAL7FQfKmm%2BdAircA1DveAw8lfRNAj%2Ft7lqqPvBmVbSsCfPMLre%2BxlBCirfhGwZANrpNjIdftgMAb6mbW9zvHgXZ2M52L%2FCA%2BNmU1dIaNi1hQ9d8DYsUXfimoK1CX%2BRarx%2FFi28b4YxqXWOsxSzfb67ys1djz06vvCby5imiJx6ieCE6PrRdg3euUspKrpm%2BAJoQwpptQDPheTRjORSwLzjkKMBs2QnBxAR9TNypSuh%2BKWPLy2OuO1pK4UixsR7foOQI3OH9jjQu0HzOGDmX%2BDWyIeZk5aFPHdZruuhmx7SOai2ho%2Bs5gt1LME8yyXgUfTeIjfWMxwD%2FpQNec3hX4LDrtep7aD6EM1fnzHShFR94TQCvOZ2kmuvcvdNVLO5U4zsFDzfZN9TGPb3wdWb%2FeWncEN1gdvaO%2B6%2FeJjiqwRqxGRbxO0holr9XycbowUKSqn4hb%2FnPvgMKGezDP%2FXNGXKm1kyNIAn2gd4p%2Bw7jLbll72T3VFac0KCUgAh2xmaHZVd5%2FRrDVWv3PWNftLicviRrS2nECrbrn4df3%2FGJHVGWlJPrmuFOuaIAAhRrnUNgAKyxTPOXGC0wrFXVB6oepG4gqwRFRoHnatBljOm54iW7hA9kvGx1%2BcXs8Ssp%2FR8pzU6UfSt2LJ65MKHv7MEGOqUB1sl%2Fp0g4FFUJGhSycNJncqPm%2FU7FTsOthURrj6mQctW7gzxfn4s85kHXPQc7q6oayBLXpD8m3aNiLuYzlyvKW5S%2B63JkWwOkB1ANN7UFzVCb%2BdE7yrm1BqzGB3gs3kGzm8TnYZm3Fbn6SadnZq3CDYnCGuoeV51MlsSdum%2Be%2BPNPnT26bdqE7QpD%2FZFZgl7G2WJiz280FHfa94mQEiqpdel2p5Aa&X-Amz-Signature=efc504b1af7afdb7c43af768dc6522a464552694599e60c4d9a0be7cf2f57c24&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIGI7LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyEV27MRel1L7kMW4e9bcjkA%2FL03sWvHHQ4u3nPF7urAiEArlm2cuUZ76FfKV47mX34FuBOWw4PnJR6OKpfMIgeB7gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtGxAL7FQfKmm%2BdAircA1DveAw8lfRNAj%2Ft7lqqPvBmVbSsCfPMLre%2BxlBCirfhGwZANrpNjIdftgMAb6mbW9zvHgXZ2M52L%2FCA%2BNmU1dIaNi1hQ9d8DYsUXfimoK1CX%2BRarx%2FFi28b4YxqXWOsxSzfb67ys1djz06vvCby5imiJx6ieCE6PrRdg3euUspKrpm%2BAJoQwpptQDPheTRjORSwLzjkKMBs2QnBxAR9TNypSuh%2BKWPLy2OuO1pK4UixsR7foOQI3OH9jjQu0HzOGDmX%2BDWyIeZk5aFPHdZruuhmx7SOai2ho%2Bs5gt1LME8yyXgUfTeIjfWMxwD%2FpQNec3hX4LDrtep7aD6EM1fnzHShFR94TQCvOZ2kmuvcvdNVLO5U4zsFDzfZN9TGPb3wdWb%2FeWncEN1gdvaO%2B6%2FeJjiqwRqxGRbxO0holr9XycbowUKSqn4hb%2FnPvgMKGezDP%2FXNGXKm1kyNIAn2gd4p%2Bw7jLbll72T3VFac0KCUgAh2xmaHZVd5%2FRrDVWv3PWNftLicviRrS2nECrbrn4df3%2FGJHVGWlJPrmuFOuaIAAhRrnUNgAKyxTPOXGC0wrFXVB6oepG4gqwRFRoHnatBljOm54iW7hA9kvGx1%2BcXs8Ssp%2FR8pzU6UfSt2LJ65MKHv7MEGOqUB1sl%2Fp0g4FFUJGhSycNJncqPm%2FU7FTsOthURrj6mQctW7gzxfn4s85kHXPQc7q6oayBLXpD8m3aNiLuYzlyvKW5S%2B63JkWwOkB1ANN7UFzVCb%2BdE7yrm1BqzGB3gs3kGzm8TnYZm3Fbn6SadnZq3CDYnCGuoeV51MlsSdum%2Be%2BPNPnT26bdqE7QpD%2FZFZgl7G2WJiz280FHfa94mQEiqpdel2p5Aa&X-Amz-Signature=97c20114297735dc3a3e71d6beea8bef3a664b8df80d3f25f97b7967f1f39907&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIGI7LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyEV27MRel1L7kMW4e9bcjkA%2FL03sWvHHQ4u3nPF7urAiEArlm2cuUZ76FfKV47mX34FuBOWw4PnJR6OKpfMIgeB7gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtGxAL7FQfKmm%2BdAircA1DveAw8lfRNAj%2Ft7lqqPvBmVbSsCfPMLre%2BxlBCirfhGwZANrpNjIdftgMAb6mbW9zvHgXZ2M52L%2FCA%2BNmU1dIaNi1hQ9d8DYsUXfimoK1CX%2BRarx%2FFi28b4YxqXWOsxSzfb67ys1djz06vvCby5imiJx6ieCE6PrRdg3euUspKrpm%2BAJoQwpptQDPheTRjORSwLzjkKMBs2QnBxAR9TNypSuh%2BKWPLy2OuO1pK4UixsR7foOQI3OH9jjQu0HzOGDmX%2BDWyIeZk5aFPHdZruuhmx7SOai2ho%2Bs5gt1LME8yyXgUfTeIjfWMxwD%2FpQNec3hX4LDrtep7aD6EM1fnzHShFR94TQCvOZ2kmuvcvdNVLO5U4zsFDzfZN9TGPb3wdWb%2FeWncEN1gdvaO%2B6%2FeJjiqwRqxGRbxO0holr9XycbowUKSqn4hb%2FnPvgMKGezDP%2FXNGXKm1kyNIAn2gd4p%2Bw7jLbll72T3VFac0KCUgAh2xmaHZVd5%2FRrDVWv3PWNftLicviRrS2nECrbrn4df3%2FGJHVGWlJPrmuFOuaIAAhRrnUNgAKyxTPOXGC0wrFXVB6oepG4gqwRFRoHnatBljOm54iW7hA9kvGx1%2BcXs8Ssp%2FR8pzU6UfSt2LJ65MKHv7MEGOqUB1sl%2Fp0g4FFUJGhSycNJncqPm%2FU7FTsOthURrj6mQctW7gzxfn4s85kHXPQc7q6oayBLXpD8m3aNiLuYzlyvKW5S%2B63JkWwOkB1ANN7UFzVCb%2BdE7yrm1BqzGB3gs3kGzm8TnYZm3Fbn6SadnZq3CDYnCGuoeV51MlsSdum%2Be%2BPNPnT26bdqE7QpD%2FZFZgl7G2WJiz280FHfa94mQEiqpdel2p5Aa&X-Amz-Signature=9fa3d650be9e62f0d8403f94a558b03a264b0bf41cb109f86192749b042babb6&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
