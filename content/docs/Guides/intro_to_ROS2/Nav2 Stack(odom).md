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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCWYD2R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRzNvLCG4QmBe43NjoCh4AKdV1vVJkRAADoZF0%2FsSzQwIga%2FOzM1nswFrwGcpQBwO4BE%2B5eeD9c5BFNKY3XVLjZ%2FkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyau1jESaWohgOOrSrcA1LExg1uaOe3NrpcfPF%2FbkitH6stero0Xt8clII3SYH5iKrdRMPm46VoGtxOZoR7%2FEWjGBFZGzx1kBFmDRk8p1GEmjMSpxKEa6UN5uLOw91vLTnqQaLNKlViJLLuabXhYNZy7sIfhuTsbdDPY6w9zDw5cp4r1OUPWnFlttSy0C%2F%2B0Ubka12ul5Wg9z07ccS6vqOp7X9YRrPlcLsUgeno76bYaFP287nANTN%2BKDwOrQUqO%2BBpeIFP9Y3pjQdclHx2H3rKJupGnmFJG2y1p2z1Z%2FknJ34HbFqZ%2BnUmUQnmV4YOu9fYK4X2i%2F%2BBHv6Vo9FIqp7Aj2ZYfoeoe4%2BOdPZX7%2FUjRXqGUWQVY%2B9vHzJQPBNZE%2Bb4ojQJ4jwaU%2BdPbxvj8tL32xuyHaQHn4N40IZkr5OYB6btcXjHULiVlMmuQZXGEl6zIIuFBQgeTJdxcRrGpPO4iqiUhP04vT%2BcZ1mJLRnIPPkDQV%2B3ddnWRIEUngmFq%2BW821i9cil5HwgVU6RsWIG%2BzhNKUozPdM%2FEEPSoT7znEl8Qg0Gi0N9i3lhlJ%2FpfwaBKqocGdCDIbbz%2FCeOQbBEL%2BJy%2B98b%2FTq6GGw%2FMlhonXLiq7biRBY90vJwigoKGrWnSo3bsXpGQy4SIMPCy48EGOqUBEqrrNFAfjWTyPW0a5kumfEhEn63WGiAw4dppdWlcUaNv1ZMbrJeiZ3i%2B5AGSTCiewI214s2Z6PnkOl9vxlfBfJGGIhkmHP7f%2FbDkD6r%2B38QmBdaGiMKHP0al0RgwFQgFVQ%2B0VlwsXT%2BcZg%2FkVmzNxSUgx8XO9pJJ9%2FGSpl7rVJgwGLY%2B4lt9i2uW2Dytp4miER4y7VzSF48IqWkPfpdKpLGVzaRm&X-Amz-Signature=debf1379ca920ff9386ed292b7c383d3ea3575837d78d030813d5b2c7f5dbc59&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCWYD2R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRzNvLCG4QmBe43NjoCh4AKdV1vVJkRAADoZF0%2FsSzQwIga%2FOzM1nswFrwGcpQBwO4BE%2B5eeD9c5BFNKY3XVLjZ%2FkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyau1jESaWohgOOrSrcA1LExg1uaOe3NrpcfPF%2FbkitH6stero0Xt8clII3SYH5iKrdRMPm46VoGtxOZoR7%2FEWjGBFZGzx1kBFmDRk8p1GEmjMSpxKEa6UN5uLOw91vLTnqQaLNKlViJLLuabXhYNZy7sIfhuTsbdDPY6w9zDw5cp4r1OUPWnFlttSy0C%2F%2B0Ubka12ul5Wg9z07ccS6vqOp7X9YRrPlcLsUgeno76bYaFP287nANTN%2BKDwOrQUqO%2BBpeIFP9Y3pjQdclHx2H3rKJupGnmFJG2y1p2z1Z%2FknJ34HbFqZ%2BnUmUQnmV4YOu9fYK4X2i%2F%2BBHv6Vo9FIqp7Aj2ZYfoeoe4%2BOdPZX7%2FUjRXqGUWQVY%2B9vHzJQPBNZE%2Bb4ojQJ4jwaU%2BdPbxvj8tL32xuyHaQHn4N40IZkr5OYB6btcXjHULiVlMmuQZXGEl6zIIuFBQgeTJdxcRrGpPO4iqiUhP04vT%2BcZ1mJLRnIPPkDQV%2B3ddnWRIEUngmFq%2BW821i9cil5HwgVU6RsWIG%2BzhNKUozPdM%2FEEPSoT7znEl8Qg0Gi0N9i3lhlJ%2FpfwaBKqocGdCDIbbz%2FCeOQbBEL%2BJy%2B98b%2FTq6GGw%2FMlhonXLiq7biRBY90vJwigoKGrWnSo3bsXpGQy4SIMPCy48EGOqUBEqrrNFAfjWTyPW0a5kumfEhEn63WGiAw4dppdWlcUaNv1ZMbrJeiZ3i%2B5AGSTCiewI214s2Z6PnkOl9vxlfBfJGGIhkmHP7f%2FbDkD6r%2B38QmBdaGiMKHP0al0RgwFQgFVQ%2B0VlwsXT%2BcZg%2FkVmzNxSUgx8XO9pJJ9%2FGSpl7rVJgwGLY%2B4lt9i2uW2Dytp4miER4y7VzSF48IqWkPfpdKpLGVzaRm&X-Amz-Signature=2cdff05227d93a4f09f09e1a222a4cff00510a65ba086ba839413152196a7135&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCWYD2R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRzNvLCG4QmBe43NjoCh4AKdV1vVJkRAADoZF0%2FsSzQwIga%2FOzM1nswFrwGcpQBwO4BE%2B5eeD9c5BFNKY3XVLjZ%2FkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyau1jESaWohgOOrSrcA1LExg1uaOe3NrpcfPF%2FbkitH6stero0Xt8clII3SYH5iKrdRMPm46VoGtxOZoR7%2FEWjGBFZGzx1kBFmDRk8p1GEmjMSpxKEa6UN5uLOw91vLTnqQaLNKlViJLLuabXhYNZy7sIfhuTsbdDPY6w9zDw5cp4r1OUPWnFlttSy0C%2F%2B0Ubka12ul5Wg9z07ccS6vqOp7X9YRrPlcLsUgeno76bYaFP287nANTN%2BKDwOrQUqO%2BBpeIFP9Y3pjQdclHx2H3rKJupGnmFJG2y1p2z1Z%2FknJ34HbFqZ%2BnUmUQnmV4YOu9fYK4X2i%2F%2BBHv6Vo9FIqp7Aj2ZYfoeoe4%2BOdPZX7%2FUjRXqGUWQVY%2B9vHzJQPBNZE%2Bb4ojQJ4jwaU%2BdPbxvj8tL32xuyHaQHn4N40IZkr5OYB6btcXjHULiVlMmuQZXGEl6zIIuFBQgeTJdxcRrGpPO4iqiUhP04vT%2BcZ1mJLRnIPPkDQV%2B3ddnWRIEUngmFq%2BW821i9cil5HwgVU6RsWIG%2BzhNKUozPdM%2FEEPSoT7znEl8Qg0Gi0N9i3lhlJ%2FpfwaBKqocGdCDIbbz%2FCeOQbBEL%2BJy%2B98b%2FTq6GGw%2FMlhonXLiq7biRBY90vJwigoKGrWnSo3bsXpGQy4SIMPCy48EGOqUBEqrrNFAfjWTyPW0a5kumfEhEn63WGiAw4dppdWlcUaNv1ZMbrJeiZ3i%2B5AGSTCiewI214s2Z6PnkOl9vxlfBfJGGIhkmHP7f%2FbDkD6r%2B38QmBdaGiMKHP0al0RgwFQgFVQ%2B0VlwsXT%2BcZg%2FkVmzNxSUgx8XO9pJJ9%2FGSpl7rVJgwGLY%2B4lt9i2uW2Dytp4miER4y7VzSF48IqWkPfpdKpLGVzaRm&X-Amz-Signature=6baf78fd6cdba1929519616858615e402dba7f6d24e94272ccd7523d72a12a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCWYD2R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRzNvLCG4QmBe43NjoCh4AKdV1vVJkRAADoZF0%2FsSzQwIga%2FOzM1nswFrwGcpQBwO4BE%2B5eeD9c5BFNKY3XVLjZ%2FkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyau1jESaWohgOOrSrcA1LExg1uaOe3NrpcfPF%2FbkitH6stero0Xt8clII3SYH5iKrdRMPm46VoGtxOZoR7%2FEWjGBFZGzx1kBFmDRk8p1GEmjMSpxKEa6UN5uLOw91vLTnqQaLNKlViJLLuabXhYNZy7sIfhuTsbdDPY6w9zDw5cp4r1OUPWnFlttSy0C%2F%2B0Ubka12ul5Wg9z07ccS6vqOp7X9YRrPlcLsUgeno76bYaFP287nANTN%2BKDwOrQUqO%2BBpeIFP9Y3pjQdclHx2H3rKJupGnmFJG2y1p2z1Z%2FknJ34HbFqZ%2BnUmUQnmV4YOu9fYK4X2i%2F%2BBHv6Vo9FIqp7Aj2ZYfoeoe4%2BOdPZX7%2FUjRXqGUWQVY%2B9vHzJQPBNZE%2Bb4ojQJ4jwaU%2BdPbxvj8tL32xuyHaQHn4N40IZkr5OYB6btcXjHULiVlMmuQZXGEl6zIIuFBQgeTJdxcRrGpPO4iqiUhP04vT%2BcZ1mJLRnIPPkDQV%2B3ddnWRIEUngmFq%2BW821i9cil5HwgVU6RsWIG%2BzhNKUozPdM%2FEEPSoT7znEl8Qg0Gi0N9i3lhlJ%2FpfwaBKqocGdCDIbbz%2FCeOQbBEL%2BJy%2B98b%2FTq6GGw%2FMlhonXLiq7biRBY90vJwigoKGrWnSo3bsXpGQy4SIMPCy48EGOqUBEqrrNFAfjWTyPW0a5kumfEhEn63WGiAw4dppdWlcUaNv1ZMbrJeiZ3i%2B5AGSTCiewI214s2Z6PnkOl9vxlfBfJGGIhkmHP7f%2FbDkD6r%2B38QmBdaGiMKHP0al0RgwFQgFVQ%2B0VlwsXT%2BcZg%2FkVmzNxSUgx8XO9pJJ9%2FGSpl7rVJgwGLY%2B4lt9i2uW2Dytp4miER4y7VzSF48IqWkPfpdKpLGVzaRm&X-Amz-Signature=0fd32ea1bd2ab0ad346c33127c2538bc870a294a4026191ae9b72d28ef8a217e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCWYD2R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRzNvLCG4QmBe43NjoCh4AKdV1vVJkRAADoZF0%2FsSzQwIga%2FOzM1nswFrwGcpQBwO4BE%2B5eeD9c5BFNKY3XVLjZ%2FkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyau1jESaWohgOOrSrcA1LExg1uaOe3NrpcfPF%2FbkitH6stero0Xt8clII3SYH5iKrdRMPm46VoGtxOZoR7%2FEWjGBFZGzx1kBFmDRk8p1GEmjMSpxKEa6UN5uLOw91vLTnqQaLNKlViJLLuabXhYNZy7sIfhuTsbdDPY6w9zDw5cp4r1OUPWnFlttSy0C%2F%2B0Ubka12ul5Wg9z07ccS6vqOp7X9YRrPlcLsUgeno76bYaFP287nANTN%2BKDwOrQUqO%2BBpeIFP9Y3pjQdclHx2H3rKJupGnmFJG2y1p2z1Z%2FknJ34HbFqZ%2BnUmUQnmV4YOu9fYK4X2i%2F%2BBHv6Vo9FIqp7Aj2ZYfoeoe4%2BOdPZX7%2FUjRXqGUWQVY%2B9vHzJQPBNZE%2Bb4ojQJ4jwaU%2BdPbxvj8tL32xuyHaQHn4N40IZkr5OYB6btcXjHULiVlMmuQZXGEl6zIIuFBQgeTJdxcRrGpPO4iqiUhP04vT%2BcZ1mJLRnIPPkDQV%2B3ddnWRIEUngmFq%2BW821i9cil5HwgVU6RsWIG%2BzhNKUozPdM%2FEEPSoT7znEl8Qg0Gi0N9i3lhlJ%2FpfwaBKqocGdCDIbbz%2FCeOQbBEL%2BJy%2B98b%2FTq6GGw%2FMlhonXLiq7biRBY90vJwigoKGrWnSo3bsXpGQy4SIMPCy48EGOqUBEqrrNFAfjWTyPW0a5kumfEhEn63WGiAw4dppdWlcUaNv1ZMbrJeiZ3i%2B5AGSTCiewI214s2Z6PnkOl9vxlfBfJGGIhkmHP7f%2FbDkD6r%2B38QmBdaGiMKHP0al0RgwFQgFVQ%2B0VlwsXT%2BcZg%2FkVmzNxSUgx8XO9pJJ9%2FGSpl7rVJgwGLY%2B4lt9i2uW2Dytp4miER4y7VzSF48IqWkPfpdKpLGVzaRm&X-Amz-Signature=03e2057287d6ec76a748be3775c71822cb1a0eb99768bd635b5e286717686058&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
