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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ6SDNO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCCW3fQXywHT7X1M7BJQIBWeUynADleUEZHEY8ky8DmTQIhAI0QuMebKrIj%2FhKDFRtcVEXF0%2Bdw%2Fhn1CC4vEtbstlpGKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4yPt4hBYmyRe11S4q3AOVe4k0GdzNgNW6KOFkGX6WdI%2BfXT6Fk%2B0B8mj3wuv30p6sGRih8diPnL6yrI3Cq9d%2BTTlL8UeLp7%2BIM%2F%2B6jh2%2BOgMFjzcWZ%2Fv9%2FIZAKMbg68tzmJ6mkyKecz%2BRIcuDem9TxGPN1M1FtFGxXycJZqhoSm7vd8GpQSCQas569IVrVlMgsgGNGQAwkjKRLnE9ckIhbtOsmJ9qUI3hkZlsURKtej6IL8C1eGIPMOmnY8qvHNO7yn4OAPdtdPbySpbtTgZuqiwkTWgJVLm5uPxfi9iB7VCZK575irCFmwgYeRijtUo9wdoFMeG7BUOvleYr7zS09%2Bys8S%2F6J3R4u%2FUAVb%2FcZWa%2FJK5jvmxZOo3t0JFaQtBqzAC%2FUfrH1Z%2BMlu0UnjZ9vFo6QlVr2R%2F%2F2nMma0EKf0sPYNYMbbLwSkOO1nc2nbbm0X4TTo8Q68Er25YR42cg3kCVPIK36R%2FGxcSaQ6PraYH%2FFwQYLRrWzxsmKWkGuD%2FSep2ke%2F62%2FKcDoCmO%2F4AJ2aIT9BPVAAIbQgmT%2BmrHFPvDanOwcI9z5mVj%2BUzDco5ZWcb4d4dP0H%2BkymyagXnRL%2FoY4hqtgTpWRrL7%2FEYhATUEK21aOj0Mv7H%2FB15Ed1PFQJN3smWjQb3qaDC7gP69BjqkAVysiTT0eppUBE%2F1qXcHok%2B5ShdSPzNAZd0717Ko2slacuivYaBmdMA3EHLrW1Nr47KWJsuJIlvxH26ylYbTYVQ2HsX6Bt93Ao8ksaiijKJZB6UBE9nDhI8maEtLHHZ3OA5uTpVnptXMz6fYlGyHXkN7lnzMj7D47BP9PG80siVWG%2Fd%2BLkPLyYTtTs2rjMUZnvswZv07zRjTVGKk6uSRvYVlPTt9&X-Amz-Signature=e21d550088f1dda4757b43e711926b45edbb6fec6438e4ddc7fc1c557470824a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ6SDNO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCCW3fQXywHT7X1M7BJQIBWeUynADleUEZHEY8ky8DmTQIhAI0QuMebKrIj%2FhKDFRtcVEXF0%2Bdw%2Fhn1CC4vEtbstlpGKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4yPt4hBYmyRe11S4q3AOVe4k0GdzNgNW6KOFkGX6WdI%2BfXT6Fk%2B0B8mj3wuv30p6sGRih8diPnL6yrI3Cq9d%2BTTlL8UeLp7%2BIM%2F%2B6jh2%2BOgMFjzcWZ%2Fv9%2FIZAKMbg68tzmJ6mkyKecz%2BRIcuDem9TxGPN1M1FtFGxXycJZqhoSm7vd8GpQSCQas569IVrVlMgsgGNGQAwkjKRLnE9ckIhbtOsmJ9qUI3hkZlsURKtej6IL8C1eGIPMOmnY8qvHNO7yn4OAPdtdPbySpbtTgZuqiwkTWgJVLm5uPxfi9iB7VCZK575irCFmwgYeRijtUo9wdoFMeG7BUOvleYr7zS09%2Bys8S%2F6J3R4u%2FUAVb%2FcZWa%2FJK5jvmxZOo3t0JFaQtBqzAC%2FUfrH1Z%2BMlu0UnjZ9vFo6QlVr2R%2F%2F2nMma0EKf0sPYNYMbbLwSkOO1nc2nbbm0X4TTo8Q68Er25YR42cg3kCVPIK36R%2FGxcSaQ6PraYH%2FFwQYLRrWzxsmKWkGuD%2FSep2ke%2F62%2FKcDoCmO%2F4AJ2aIT9BPVAAIbQgmT%2BmrHFPvDanOwcI9z5mVj%2BUzDco5ZWcb4d4dP0H%2BkymyagXnRL%2FoY4hqtgTpWRrL7%2FEYhATUEK21aOj0Mv7H%2FB15Ed1PFQJN3smWjQb3qaDC7gP69BjqkAVysiTT0eppUBE%2F1qXcHok%2B5ShdSPzNAZd0717Ko2slacuivYaBmdMA3EHLrW1Nr47KWJsuJIlvxH26ylYbTYVQ2HsX6Bt93Ao8ksaiijKJZB6UBE9nDhI8maEtLHHZ3OA5uTpVnptXMz6fYlGyHXkN7lnzMj7D47BP9PG80siVWG%2Fd%2BLkPLyYTtTs2rjMUZnvswZv07zRjTVGKk6uSRvYVlPTt9&X-Amz-Signature=806030e502fd34dd267540c7e995751b16a0b4da60abbf784b11e9501e446e77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ6SDNO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCCW3fQXywHT7X1M7BJQIBWeUynADleUEZHEY8ky8DmTQIhAI0QuMebKrIj%2FhKDFRtcVEXF0%2Bdw%2Fhn1CC4vEtbstlpGKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4yPt4hBYmyRe11S4q3AOVe4k0GdzNgNW6KOFkGX6WdI%2BfXT6Fk%2B0B8mj3wuv30p6sGRih8diPnL6yrI3Cq9d%2BTTlL8UeLp7%2BIM%2F%2B6jh2%2BOgMFjzcWZ%2Fv9%2FIZAKMbg68tzmJ6mkyKecz%2BRIcuDem9TxGPN1M1FtFGxXycJZqhoSm7vd8GpQSCQas569IVrVlMgsgGNGQAwkjKRLnE9ckIhbtOsmJ9qUI3hkZlsURKtej6IL8C1eGIPMOmnY8qvHNO7yn4OAPdtdPbySpbtTgZuqiwkTWgJVLm5uPxfi9iB7VCZK575irCFmwgYeRijtUo9wdoFMeG7BUOvleYr7zS09%2Bys8S%2F6J3R4u%2FUAVb%2FcZWa%2FJK5jvmxZOo3t0JFaQtBqzAC%2FUfrH1Z%2BMlu0UnjZ9vFo6QlVr2R%2F%2F2nMma0EKf0sPYNYMbbLwSkOO1nc2nbbm0X4TTo8Q68Er25YR42cg3kCVPIK36R%2FGxcSaQ6PraYH%2FFwQYLRrWzxsmKWkGuD%2FSep2ke%2F62%2FKcDoCmO%2F4AJ2aIT9BPVAAIbQgmT%2BmrHFPvDanOwcI9z5mVj%2BUzDco5ZWcb4d4dP0H%2BkymyagXnRL%2FoY4hqtgTpWRrL7%2FEYhATUEK21aOj0Mv7H%2FB15Ed1PFQJN3smWjQb3qaDC7gP69BjqkAVysiTT0eppUBE%2F1qXcHok%2B5ShdSPzNAZd0717Ko2slacuivYaBmdMA3EHLrW1Nr47KWJsuJIlvxH26ylYbTYVQ2HsX6Bt93Ao8ksaiijKJZB6UBE9nDhI8maEtLHHZ3OA5uTpVnptXMz6fYlGyHXkN7lnzMj7D47BP9PG80siVWG%2Fd%2BLkPLyYTtTs2rjMUZnvswZv07zRjTVGKk6uSRvYVlPTt9&X-Amz-Signature=464e5be47160af856242bb0a2a9f483a6cb9b894696758f310dc6ab78950f4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ6SDNO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCCW3fQXywHT7X1M7BJQIBWeUynADleUEZHEY8ky8DmTQIhAI0QuMebKrIj%2FhKDFRtcVEXF0%2Bdw%2Fhn1CC4vEtbstlpGKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4yPt4hBYmyRe11S4q3AOVe4k0GdzNgNW6KOFkGX6WdI%2BfXT6Fk%2B0B8mj3wuv30p6sGRih8diPnL6yrI3Cq9d%2BTTlL8UeLp7%2BIM%2F%2B6jh2%2BOgMFjzcWZ%2Fv9%2FIZAKMbg68tzmJ6mkyKecz%2BRIcuDem9TxGPN1M1FtFGxXycJZqhoSm7vd8GpQSCQas569IVrVlMgsgGNGQAwkjKRLnE9ckIhbtOsmJ9qUI3hkZlsURKtej6IL8C1eGIPMOmnY8qvHNO7yn4OAPdtdPbySpbtTgZuqiwkTWgJVLm5uPxfi9iB7VCZK575irCFmwgYeRijtUo9wdoFMeG7BUOvleYr7zS09%2Bys8S%2F6J3R4u%2FUAVb%2FcZWa%2FJK5jvmxZOo3t0JFaQtBqzAC%2FUfrH1Z%2BMlu0UnjZ9vFo6QlVr2R%2F%2F2nMma0EKf0sPYNYMbbLwSkOO1nc2nbbm0X4TTo8Q68Er25YR42cg3kCVPIK36R%2FGxcSaQ6PraYH%2FFwQYLRrWzxsmKWkGuD%2FSep2ke%2F62%2FKcDoCmO%2F4AJ2aIT9BPVAAIbQgmT%2BmrHFPvDanOwcI9z5mVj%2BUzDco5ZWcb4d4dP0H%2BkymyagXnRL%2FoY4hqtgTpWRrL7%2FEYhATUEK21aOj0Mv7H%2FB15Ed1PFQJN3smWjQb3qaDC7gP69BjqkAVysiTT0eppUBE%2F1qXcHok%2B5ShdSPzNAZd0717Ko2slacuivYaBmdMA3EHLrW1Nr47KWJsuJIlvxH26ylYbTYVQ2HsX6Bt93Ao8ksaiijKJZB6UBE9nDhI8maEtLHHZ3OA5uTpVnptXMz6fYlGyHXkN7lnzMj7D47BP9PG80siVWG%2Fd%2BLkPLyYTtTs2rjMUZnvswZv07zRjTVGKk6uSRvYVlPTt9&X-Amz-Signature=b51983a354ade569e3651f0d4d484595f94f487f4844809f688c7fd9da47dd00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ6SDNO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCCW3fQXywHT7X1M7BJQIBWeUynADleUEZHEY8ky8DmTQIhAI0QuMebKrIj%2FhKDFRtcVEXF0%2Bdw%2Fhn1CC4vEtbstlpGKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4yPt4hBYmyRe11S4q3AOVe4k0GdzNgNW6KOFkGX6WdI%2BfXT6Fk%2B0B8mj3wuv30p6sGRih8diPnL6yrI3Cq9d%2BTTlL8UeLp7%2BIM%2F%2B6jh2%2BOgMFjzcWZ%2Fv9%2FIZAKMbg68tzmJ6mkyKecz%2BRIcuDem9TxGPN1M1FtFGxXycJZqhoSm7vd8GpQSCQas569IVrVlMgsgGNGQAwkjKRLnE9ckIhbtOsmJ9qUI3hkZlsURKtej6IL8C1eGIPMOmnY8qvHNO7yn4OAPdtdPbySpbtTgZuqiwkTWgJVLm5uPxfi9iB7VCZK575irCFmwgYeRijtUo9wdoFMeG7BUOvleYr7zS09%2Bys8S%2F6J3R4u%2FUAVb%2FcZWa%2FJK5jvmxZOo3t0JFaQtBqzAC%2FUfrH1Z%2BMlu0UnjZ9vFo6QlVr2R%2F%2F2nMma0EKf0sPYNYMbbLwSkOO1nc2nbbm0X4TTo8Q68Er25YR42cg3kCVPIK36R%2FGxcSaQ6PraYH%2FFwQYLRrWzxsmKWkGuD%2FSep2ke%2F62%2FKcDoCmO%2F4AJ2aIT9BPVAAIbQgmT%2BmrHFPvDanOwcI9z5mVj%2BUzDco5ZWcb4d4dP0H%2BkymyagXnRL%2FoY4hqtgTpWRrL7%2FEYhATUEK21aOj0Mv7H%2FB15Ed1PFQJN3smWjQb3qaDC7gP69BjqkAVysiTT0eppUBE%2F1qXcHok%2B5ShdSPzNAZd0717Ko2slacuivYaBmdMA3EHLrW1Nr47KWJsuJIlvxH26ylYbTYVQ2HsX6Bt93Ao8ksaiijKJZB6UBE9nDhI8maEtLHHZ3OA5uTpVnptXMz6fYlGyHXkN7lnzMj7D47BP9PG80siVWG%2Fd%2BLkPLyYTtTs2rjMUZnvswZv07zRjTVGKk6uSRvYVlPTt9&X-Amz-Signature=fef6727ede6b7463d01ff3b1fb5f52e07677058933323c69e99eacf46479dd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
