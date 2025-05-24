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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYAIYPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCeqp%2BMhGGrNP7OUsLJ6qPdg%2BuZpyAzkvWow3v%2Be5aLewIgJ00SGFkrIx%2F4PZlQrN%2F352BKN6QcW%2FBuj98N2w3OkKAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDG6WJ8hpnRXZhR3QHircA9%2BkQtUKUjUtpIAm58PplVXHlrQ6NLXtdXHE0%2FJbF4EU1oB0oEcZkCJq4gAKTqb4EmmlWDyem8NbDTRbHKq7RLW%2BDLlJ9M2lsn27zTcCFkL591gp2J6vk56ycJ%2BhEuZVfMBA7fktzWT9uUz5vYjstfhNVQMlaJ9EQbuBKMrNme84XSrOoCaHmpv1%2FTMLHwB93lQ7QDHukwV9sW8gy%2Fe8jJRlrK63rUdj2tTYXmJxo1yS%2BDJRR%2FUdsXvRekGaF7ABLlGbcvf5oQ3tG8MBa89q7Gj%2Bj%2FcWpAcOHxA0PeKad2GOpehBZWccrIJx%2FwCI9xHyEFr%2B0iztobvckSc49NYi7a%2BIgIHwiEEvatq2hxqCt4neKIgNbvI8qc13XGCK5v69Ep86U%2B1T%2Bw1W5Oja2ATQIlyKlvBFe08clREZ6FbxjfXZcR3%2F0eaWqA2p8qPlKfUK4ZqpvABhte7C81%2B%2BeMxIBEat8Q6rsGShDXBIMijSX8L%2BTU0b8P%2FWlVQQJH5PEKgqUPU55bleeBdqxAj3GknZHIiTE8RMFFrooQ6GnDBJ%2FxWXGsc6jXHdtkwV2D9oecQ4LgPP9TSKA4H5Jj8yv8wIVemvUmp7PWd5%2FAfghfO2EOxMcvZ2Cxb69lJMoz58MJ2wxsEGOqUBIrS3okaGFRSb1TDIFZ4S7DYJxYB75ZY2HxheJ6iylsGMbp3C54ckUBO9bjjMXPFNRwCJbt39bfFq5SpR8zzryyk64ORMQnnMrT4bpvtQ2CbXHxoMfZUj7ic728pseB0GFdvTs%2FnzSQh9Oxn4m6Sm04XwcXD%2BFSPIU9ZYX%2FBfcAHbaxHApLNy0%2FN9qzY6MZFwzwSK9FMmdDRZjhHxd11aja4uiUJl&X-Amz-Signature=152b0dbf8c3035e0a5c36bca93885aadc4f177944ea653b0a279ced2dd61f6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYAIYPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCeqp%2BMhGGrNP7OUsLJ6qPdg%2BuZpyAzkvWow3v%2Be5aLewIgJ00SGFkrIx%2F4PZlQrN%2F352BKN6QcW%2FBuj98N2w3OkKAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDG6WJ8hpnRXZhR3QHircA9%2BkQtUKUjUtpIAm58PplVXHlrQ6NLXtdXHE0%2FJbF4EU1oB0oEcZkCJq4gAKTqb4EmmlWDyem8NbDTRbHKq7RLW%2BDLlJ9M2lsn27zTcCFkL591gp2J6vk56ycJ%2BhEuZVfMBA7fktzWT9uUz5vYjstfhNVQMlaJ9EQbuBKMrNme84XSrOoCaHmpv1%2FTMLHwB93lQ7QDHukwV9sW8gy%2Fe8jJRlrK63rUdj2tTYXmJxo1yS%2BDJRR%2FUdsXvRekGaF7ABLlGbcvf5oQ3tG8MBa89q7Gj%2Bj%2FcWpAcOHxA0PeKad2GOpehBZWccrIJx%2FwCI9xHyEFr%2B0iztobvckSc49NYi7a%2BIgIHwiEEvatq2hxqCt4neKIgNbvI8qc13XGCK5v69Ep86U%2B1T%2Bw1W5Oja2ATQIlyKlvBFe08clREZ6FbxjfXZcR3%2F0eaWqA2p8qPlKfUK4ZqpvABhte7C81%2B%2BeMxIBEat8Q6rsGShDXBIMijSX8L%2BTU0b8P%2FWlVQQJH5PEKgqUPU55bleeBdqxAj3GknZHIiTE8RMFFrooQ6GnDBJ%2FxWXGsc6jXHdtkwV2D9oecQ4LgPP9TSKA4H5Jj8yv8wIVemvUmp7PWd5%2FAfghfO2EOxMcvZ2Cxb69lJMoz58MJ2wxsEGOqUBIrS3okaGFRSb1TDIFZ4S7DYJxYB75ZY2HxheJ6iylsGMbp3C54ckUBO9bjjMXPFNRwCJbt39bfFq5SpR8zzryyk64ORMQnnMrT4bpvtQ2CbXHxoMfZUj7ic728pseB0GFdvTs%2FnzSQh9Oxn4m6Sm04XwcXD%2BFSPIU9ZYX%2FBfcAHbaxHApLNy0%2FN9qzY6MZFwzwSK9FMmdDRZjhHxd11aja4uiUJl&X-Amz-Signature=e087a838c13e067e787c67302cd4b308defe68a1a3ac9bae6f37add5d4b059c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYAIYPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCeqp%2BMhGGrNP7OUsLJ6qPdg%2BuZpyAzkvWow3v%2Be5aLewIgJ00SGFkrIx%2F4PZlQrN%2F352BKN6QcW%2FBuj98N2w3OkKAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDG6WJ8hpnRXZhR3QHircA9%2BkQtUKUjUtpIAm58PplVXHlrQ6NLXtdXHE0%2FJbF4EU1oB0oEcZkCJq4gAKTqb4EmmlWDyem8NbDTRbHKq7RLW%2BDLlJ9M2lsn27zTcCFkL591gp2J6vk56ycJ%2BhEuZVfMBA7fktzWT9uUz5vYjstfhNVQMlaJ9EQbuBKMrNme84XSrOoCaHmpv1%2FTMLHwB93lQ7QDHukwV9sW8gy%2Fe8jJRlrK63rUdj2tTYXmJxo1yS%2BDJRR%2FUdsXvRekGaF7ABLlGbcvf5oQ3tG8MBa89q7Gj%2Bj%2FcWpAcOHxA0PeKad2GOpehBZWccrIJx%2FwCI9xHyEFr%2B0iztobvckSc49NYi7a%2BIgIHwiEEvatq2hxqCt4neKIgNbvI8qc13XGCK5v69Ep86U%2B1T%2Bw1W5Oja2ATQIlyKlvBFe08clREZ6FbxjfXZcR3%2F0eaWqA2p8qPlKfUK4ZqpvABhte7C81%2B%2BeMxIBEat8Q6rsGShDXBIMijSX8L%2BTU0b8P%2FWlVQQJH5PEKgqUPU55bleeBdqxAj3GknZHIiTE8RMFFrooQ6GnDBJ%2FxWXGsc6jXHdtkwV2D9oecQ4LgPP9TSKA4H5Jj8yv8wIVemvUmp7PWd5%2FAfghfO2EOxMcvZ2Cxb69lJMoz58MJ2wxsEGOqUBIrS3okaGFRSb1TDIFZ4S7DYJxYB75ZY2HxheJ6iylsGMbp3C54ckUBO9bjjMXPFNRwCJbt39bfFq5SpR8zzryyk64ORMQnnMrT4bpvtQ2CbXHxoMfZUj7ic728pseB0GFdvTs%2FnzSQh9Oxn4m6Sm04XwcXD%2BFSPIU9ZYX%2FBfcAHbaxHApLNy0%2FN9qzY6MZFwzwSK9FMmdDRZjhHxd11aja4uiUJl&X-Amz-Signature=ba96114cea979cf8037b36c6e2f353d317d9564447bae3b106e67a1120b07e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYAIYPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCeqp%2BMhGGrNP7OUsLJ6qPdg%2BuZpyAzkvWow3v%2Be5aLewIgJ00SGFkrIx%2F4PZlQrN%2F352BKN6QcW%2FBuj98N2w3OkKAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDG6WJ8hpnRXZhR3QHircA9%2BkQtUKUjUtpIAm58PplVXHlrQ6NLXtdXHE0%2FJbF4EU1oB0oEcZkCJq4gAKTqb4EmmlWDyem8NbDTRbHKq7RLW%2BDLlJ9M2lsn27zTcCFkL591gp2J6vk56ycJ%2BhEuZVfMBA7fktzWT9uUz5vYjstfhNVQMlaJ9EQbuBKMrNme84XSrOoCaHmpv1%2FTMLHwB93lQ7QDHukwV9sW8gy%2Fe8jJRlrK63rUdj2tTYXmJxo1yS%2BDJRR%2FUdsXvRekGaF7ABLlGbcvf5oQ3tG8MBa89q7Gj%2Bj%2FcWpAcOHxA0PeKad2GOpehBZWccrIJx%2FwCI9xHyEFr%2B0iztobvckSc49NYi7a%2BIgIHwiEEvatq2hxqCt4neKIgNbvI8qc13XGCK5v69Ep86U%2B1T%2Bw1W5Oja2ATQIlyKlvBFe08clREZ6FbxjfXZcR3%2F0eaWqA2p8qPlKfUK4ZqpvABhte7C81%2B%2BeMxIBEat8Q6rsGShDXBIMijSX8L%2BTU0b8P%2FWlVQQJH5PEKgqUPU55bleeBdqxAj3GknZHIiTE8RMFFrooQ6GnDBJ%2FxWXGsc6jXHdtkwV2D9oecQ4LgPP9TSKA4H5Jj8yv8wIVemvUmp7PWd5%2FAfghfO2EOxMcvZ2Cxb69lJMoz58MJ2wxsEGOqUBIrS3okaGFRSb1TDIFZ4S7DYJxYB75ZY2HxheJ6iylsGMbp3C54ckUBO9bjjMXPFNRwCJbt39bfFq5SpR8zzryyk64ORMQnnMrT4bpvtQ2CbXHxoMfZUj7ic728pseB0GFdvTs%2FnzSQh9Oxn4m6Sm04XwcXD%2BFSPIU9ZYX%2FBfcAHbaxHApLNy0%2FN9qzY6MZFwzwSK9FMmdDRZjhHxd11aja4uiUJl&X-Amz-Signature=8f27604d90994be8ccfdd9f251d3c40b9edcf46b2b921ee6b484f5e9b2c2f7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYAIYPG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCeqp%2BMhGGrNP7OUsLJ6qPdg%2BuZpyAzkvWow3v%2Be5aLewIgJ00SGFkrIx%2F4PZlQrN%2F352BKN6QcW%2FBuj98N2w3OkKAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDG6WJ8hpnRXZhR3QHircA9%2BkQtUKUjUtpIAm58PplVXHlrQ6NLXtdXHE0%2FJbF4EU1oB0oEcZkCJq4gAKTqb4EmmlWDyem8NbDTRbHKq7RLW%2BDLlJ9M2lsn27zTcCFkL591gp2J6vk56ycJ%2BhEuZVfMBA7fktzWT9uUz5vYjstfhNVQMlaJ9EQbuBKMrNme84XSrOoCaHmpv1%2FTMLHwB93lQ7QDHukwV9sW8gy%2Fe8jJRlrK63rUdj2tTYXmJxo1yS%2BDJRR%2FUdsXvRekGaF7ABLlGbcvf5oQ3tG8MBa89q7Gj%2Bj%2FcWpAcOHxA0PeKad2GOpehBZWccrIJx%2FwCI9xHyEFr%2B0iztobvckSc49NYi7a%2BIgIHwiEEvatq2hxqCt4neKIgNbvI8qc13XGCK5v69Ep86U%2B1T%2Bw1W5Oja2ATQIlyKlvBFe08clREZ6FbxjfXZcR3%2F0eaWqA2p8qPlKfUK4ZqpvABhte7C81%2B%2BeMxIBEat8Q6rsGShDXBIMijSX8L%2BTU0b8P%2FWlVQQJH5PEKgqUPU55bleeBdqxAj3GknZHIiTE8RMFFrooQ6GnDBJ%2FxWXGsc6jXHdtkwV2D9oecQ4LgPP9TSKA4H5Jj8yv8wIVemvUmp7PWd5%2FAfghfO2EOxMcvZ2Cxb69lJMoz58MJ2wxsEGOqUBIrS3okaGFRSb1TDIFZ4S7DYJxYB75ZY2HxheJ6iylsGMbp3C54ckUBO9bjjMXPFNRwCJbt39bfFq5SpR8zzryyk64ORMQnnMrT4bpvtQ2CbXHxoMfZUj7ic728pseB0GFdvTs%2FnzSQh9Oxn4m6Sm04XwcXD%2BFSPIU9ZYX%2FBfcAHbaxHApLNy0%2FN9qzY6MZFwzwSK9FMmdDRZjhHxd11aja4uiUJl&X-Amz-Signature=15fef2548537d8243e09246fa599342c47cf5b018baeebb0048e036050c1d6db&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
