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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IB2XR7T%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHW0bi1iwAQ%2Bm8UfrSPPG8QtHOIBrkipKrcXysoNa0irAiAvoA8jqCt%2B7wsa4emHEX49k2iOqsygswv7aKndSY4RUyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM4G8ZdkJv2T7cpOtTKtwDAhpy5hkCttXNFB5REYn0j3vUiujZ5OPn6KiniNnZn1Md5z9ahI%2F%2FqFAxPO5Er6PbJjPBtbahsQiZyMk60VcAWPxCWjq5JgP%2Fwy9FRf%2B%2FRhBsWP%2B8IePSwW%2BTfMHZTI8DfL%2B%2B2PSmxzHn3BSL44%2FSWL2D5ueVBXzkp%2FmUIsg7XQMXrjQ%2FLaXYhPB5qKoUBzthbh9eZAFKIUC3OSSCV05KoBzTbnoGoLaxvIBOGKRDlNwDEjZigQ2vjZAJU2iP8RwbEI79UbcXT3ZgpF1ZV2luzbM%2FmVDkQGdeconSGx0aZD3ufm%2Bi%2FyWCueXmIS6MY4dsjSUMb1mJ3LTKuPCIdqbFKpylqVNURCaYPibFVG%2BsKVNqRn3kltDXa2RAdbmsRRgEeyWRlzh05ywjclajPeV71SmS787U9YDW58vWDcNtxalR9yR%2BA0EjmrZV0pFLVwxhd6atEE3Yo8s8xihem%2FgoxMx76dg9mZVPSGV79W28fgxDb65sXCYdSy3ghqj3wMdrxq5FOVTlT9gZD%2FlxDPQ6dqMKtCdftvjDmV7vODfSCmg8ANUZy6IB5JWsgbpGJHAYexGMM59lbN4dHadUJS33zWESauW8go0Uz7iXmtWw7lV57zBO201S72cSQo8wlea2vQY6pgGsnoapCCR%2FWrXUzcS8bIZfN2kTwtBp1uHlVkvhkzE%2BcrbSpnQFv9ya8du%2FPSekWHkhOmDKNSyccX11mVHU1PsBU8teJ6vWYy8BgGGArZW6cc2CE0PKME7Em2Ru5a%2FZhszwjPUl1OlEr%2BdCmMBT1I%2FQCAyZTujKq1CbVbmgyICCrTMxZLjDUSqSmEL6pdMkHV1qfmFMhUDX7wncdnhCJWrVPl7Pdd%2F%2F&X-Amz-Signature=1f6b513c6f3e9208b5b946ebc4a9b0f4fe778e207e2ebba17d843494a7a04d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IB2XR7T%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHW0bi1iwAQ%2Bm8UfrSPPG8QtHOIBrkipKrcXysoNa0irAiAvoA8jqCt%2B7wsa4emHEX49k2iOqsygswv7aKndSY4RUyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM4G8ZdkJv2T7cpOtTKtwDAhpy5hkCttXNFB5REYn0j3vUiujZ5OPn6KiniNnZn1Md5z9ahI%2F%2FqFAxPO5Er6PbJjPBtbahsQiZyMk60VcAWPxCWjq5JgP%2Fwy9FRf%2B%2FRhBsWP%2B8IePSwW%2BTfMHZTI8DfL%2B%2B2PSmxzHn3BSL44%2FSWL2D5ueVBXzkp%2FmUIsg7XQMXrjQ%2FLaXYhPB5qKoUBzthbh9eZAFKIUC3OSSCV05KoBzTbnoGoLaxvIBOGKRDlNwDEjZigQ2vjZAJU2iP8RwbEI79UbcXT3ZgpF1ZV2luzbM%2FmVDkQGdeconSGx0aZD3ufm%2Bi%2FyWCueXmIS6MY4dsjSUMb1mJ3LTKuPCIdqbFKpylqVNURCaYPibFVG%2BsKVNqRn3kltDXa2RAdbmsRRgEeyWRlzh05ywjclajPeV71SmS787U9YDW58vWDcNtxalR9yR%2BA0EjmrZV0pFLVwxhd6atEE3Yo8s8xihem%2FgoxMx76dg9mZVPSGV79W28fgxDb65sXCYdSy3ghqj3wMdrxq5FOVTlT9gZD%2FlxDPQ6dqMKtCdftvjDmV7vODfSCmg8ANUZy6IB5JWsgbpGJHAYexGMM59lbN4dHadUJS33zWESauW8go0Uz7iXmtWw7lV57zBO201S72cSQo8wlea2vQY6pgGsnoapCCR%2FWrXUzcS8bIZfN2kTwtBp1uHlVkvhkzE%2BcrbSpnQFv9ya8du%2FPSekWHkhOmDKNSyccX11mVHU1PsBU8teJ6vWYy8BgGGArZW6cc2CE0PKME7Em2Ru5a%2FZhszwjPUl1OlEr%2BdCmMBT1I%2FQCAyZTujKq1CbVbmgyICCrTMxZLjDUSqSmEL6pdMkHV1qfmFMhUDX7wncdnhCJWrVPl7Pdd%2F%2F&X-Amz-Signature=d34911b28553f7e9cf05c3ff7be944365290e145734552cc7ba24acc167200f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IB2XR7T%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHW0bi1iwAQ%2Bm8UfrSPPG8QtHOIBrkipKrcXysoNa0irAiAvoA8jqCt%2B7wsa4emHEX49k2iOqsygswv7aKndSY4RUyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM4G8ZdkJv2T7cpOtTKtwDAhpy5hkCttXNFB5REYn0j3vUiujZ5OPn6KiniNnZn1Md5z9ahI%2F%2FqFAxPO5Er6PbJjPBtbahsQiZyMk60VcAWPxCWjq5JgP%2Fwy9FRf%2B%2FRhBsWP%2B8IePSwW%2BTfMHZTI8DfL%2B%2B2PSmxzHn3BSL44%2FSWL2D5ueVBXzkp%2FmUIsg7XQMXrjQ%2FLaXYhPB5qKoUBzthbh9eZAFKIUC3OSSCV05KoBzTbnoGoLaxvIBOGKRDlNwDEjZigQ2vjZAJU2iP8RwbEI79UbcXT3ZgpF1ZV2luzbM%2FmVDkQGdeconSGx0aZD3ufm%2Bi%2FyWCueXmIS6MY4dsjSUMb1mJ3LTKuPCIdqbFKpylqVNURCaYPibFVG%2BsKVNqRn3kltDXa2RAdbmsRRgEeyWRlzh05ywjclajPeV71SmS787U9YDW58vWDcNtxalR9yR%2BA0EjmrZV0pFLVwxhd6atEE3Yo8s8xihem%2FgoxMx76dg9mZVPSGV79W28fgxDb65sXCYdSy3ghqj3wMdrxq5FOVTlT9gZD%2FlxDPQ6dqMKtCdftvjDmV7vODfSCmg8ANUZy6IB5JWsgbpGJHAYexGMM59lbN4dHadUJS33zWESauW8go0Uz7iXmtWw7lV57zBO201S72cSQo8wlea2vQY6pgGsnoapCCR%2FWrXUzcS8bIZfN2kTwtBp1uHlVkvhkzE%2BcrbSpnQFv9ya8du%2FPSekWHkhOmDKNSyccX11mVHU1PsBU8teJ6vWYy8BgGGArZW6cc2CE0PKME7Em2Ru5a%2FZhszwjPUl1OlEr%2BdCmMBT1I%2FQCAyZTujKq1CbVbmgyICCrTMxZLjDUSqSmEL6pdMkHV1qfmFMhUDX7wncdnhCJWrVPl7Pdd%2F%2F&X-Amz-Signature=467fed7ed2db55c6c8bfb9c45c18a298f47a072f37b0a1276d195aba0ffb267c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IB2XR7T%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHW0bi1iwAQ%2Bm8UfrSPPG8QtHOIBrkipKrcXysoNa0irAiAvoA8jqCt%2B7wsa4emHEX49k2iOqsygswv7aKndSY4RUyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM4G8ZdkJv2T7cpOtTKtwDAhpy5hkCttXNFB5REYn0j3vUiujZ5OPn6KiniNnZn1Md5z9ahI%2F%2FqFAxPO5Er6PbJjPBtbahsQiZyMk60VcAWPxCWjq5JgP%2Fwy9FRf%2B%2FRhBsWP%2B8IePSwW%2BTfMHZTI8DfL%2B%2B2PSmxzHn3BSL44%2FSWL2D5ueVBXzkp%2FmUIsg7XQMXrjQ%2FLaXYhPB5qKoUBzthbh9eZAFKIUC3OSSCV05KoBzTbnoGoLaxvIBOGKRDlNwDEjZigQ2vjZAJU2iP8RwbEI79UbcXT3ZgpF1ZV2luzbM%2FmVDkQGdeconSGx0aZD3ufm%2Bi%2FyWCueXmIS6MY4dsjSUMb1mJ3LTKuPCIdqbFKpylqVNURCaYPibFVG%2BsKVNqRn3kltDXa2RAdbmsRRgEeyWRlzh05ywjclajPeV71SmS787U9YDW58vWDcNtxalR9yR%2BA0EjmrZV0pFLVwxhd6atEE3Yo8s8xihem%2FgoxMx76dg9mZVPSGV79W28fgxDb65sXCYdSy3ghqj3wMdrxq5FOVTlT9gZD%2FlxDPQ6dqMKtCdftvjDmV7vODfSCmg8ANUZy6IB5JWsgbpGJHAYexGMM59lbN4dHadUJS33zWESauW8go0Uz7iXmtWw7lV57zBO201S72cSQo8wlea2vQY6pgGsnoapCCR%2FWrXUzcS8bIZfN2kTwtBp1uHlVkvhkzE%2BcrbSpnQFv9ya8du%2FPSekWHkhOmDKNSyccX11mVHU1PsBU8teJ6vWYy8BgGGArZW6cc2CE0PKME7Em2Ru5a%2FZhszwjPUl1OlEr%2BdCmMBT1I%2FQCAyZTujKq1CbVbmgyICCrTMxZLjDUSqSmEL6pdMkHV1qfmFMhUDX7wncdnhCJWrVPl7Pdd%2F%2F&X-Amz-Signature=abd82f3079b6b74e51ac01570bef1d6a5468c13773ca1e7122af5adc69da0060&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IB2XR7T%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHW0bi1iwAQ%2Bm8UfrSPPG8QtHOIBrkipKrcXysoNa0irAiAvoA8jqCt%2B7wsa4emHEX49k2iOqsygswv7aKndSY4RUyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM4G8ZdkJv2T7cpOtTKtwDAhpy5hkCttXNFB5REYn0j3vUiujZ5OPn6KiniNnZn1Md5z9ahI%2F%2FqFAxPO5Er6PbJjPBtbahsQiZyMk60VcAWPxCWjq5JgP%2Fwy9FRf%2B%2FRhBsWP%2B8IePSwW%2BTfMHZTI8DfL%2B%2B2PSmxzHn3BSL44%2FSWL2D5ueVBXzkp%2FmUIsg7XQMXrjQ%2FLaXYhPB5qKoUBzthbh9eZAFKIUC3OSSCV05KoBzTbnoGoLaxvIBOGKRDlNwDEjZigQ2vjZAJU2iP8RwbEI79UbcXT3ZgpF1ZV2luzbM%2FmVDkQGdeconSGx0aZD3ufm%2Bi%2FyWCueXmIS6MY4dsjSUMb1mJ3LTKuPCIdqbFKpylqVNURCaYPibFVG%2BsKVNqRn3kltDXa2RAdbmsRRgEeyWRlzh05ywjclajPeV71SmS787U9YDW58vWDcNtxalR9yR%2BA0EjmrZV0pFLVwxhd6atEE3Yo8s8xihem%2FgoxMx76dg9mZVPSGV79W28fgxDb65sXCYdSy3ghqj3wMdrxq5FOVTlT9gZD%2FlxDPQ6dqMKtCdftvjDmV7vODfSCmg8ANUZy6IB5JWsgbpGJHAYexGMM59lbN4dHadUJS33zWESauW8go0Uz7iXmtWw7lV57zBO201S72cSQo8wlea2vQY6pgGsnoapCCR%2FWrXUzcS8bIZfN2kTwtBp1uHlVkvhkzE%2BcrbSpnQFv9ya8du%2FPSekWHkhOmDKNSyccX11mVHU1PsBU8teJ6vWYy8BgGGArZW6cc2CE0PKME7Em2Ru5a%2FZhszwjPUl1OlEr%2BdCmMBT1I%2FQCAyZTujKq1CbVbmgyICCrTMxZLjDUSqSmEL6pdMkHV1qfmFMhUDX7wncdnhCJWrVPl7Pdd%2F%2F&X-Amz-Signature=226c746d09f92cee3f937b81b74fc782231c2628c157b4a5f76518ce19d0ba5e&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
