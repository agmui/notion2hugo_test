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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=5a69fe53557cd192b5b5d415b14baa0dad14d9bb9c58f2079354ec3a16a4f04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=b9b9bd07f2d7e5e3697e9536cacb621166d7aa4cc19326644679a4a2170480ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=fc4ffd92d436e08db9aabf2b6331f5cc8890445ac51fabe50d871ebfd7167a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=278c644a3e063b5cea350297d2602800c4f6b969bba0eb1da9187f7fac8da211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7DE3WY%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDM%2FB34%2BCw4MFmaFJhGJokce5kpDgOsw9kKtEFt4DPWvQIgVpSJRqyY4YiynWsxos7NoruWsgWkcW9NULR1gwqXfvcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEE0bAcrpmuJCuj0VircA5KnaQT6ol5X4BDP8dFoe8US7g%2B4Oen%2Bs1YQKPhB4B6QeyZuhAcQbTk3y%2FX%2BpCztytdiiFpoj5S8wm0%2FYpXCc4mbwGhSuJAfGE1ggEt4NilOHg0SiHA7iVRllqCYZ%2FO%2Fq%2BZ6jtk8mEb4KRJhGzUt38kuGrRtDgh9pFLerrQcTIwjV0ZyWtSudUagaJL7j229oIZAIldGCdOY9eKQVZd7y7js6p4irY5KSz0K%2F%2BdmF9F1el0qfzXucqb2FRhLW77%2BS5QIOUDSZfD1XiVT8g4F5mmevEiQidvkamcvrfNsM1unW8WgMg0AauYWA8JVnQaNCCv%2BnWdWMMy2E8654jRq3sXCdV%2BafQpAcAeyHNjWzQg0MXYaKmBOf%2FS5tgcgCTCFjxIYw2zGLcMOkRjqRBvW7AESv9x4Elw7HqCwRooF%2BFen%2FEn4JKnT%2F0NTKMa28sKbr7vBgJS8QJOCz1YIK5mhfVoys%2BrU%2FsUK7WCMLHybXY46ZGf%2BFJ94hpEEis9Pyqt064vncELM%2BKvg%2FsLi7t29lpqMLnSpDDkpES2gti%2BYOLkXJK9jxS8Q5Lp8k2FEeCSWdD2F6nsWMp0eSJtglJZU2PvoKNhkjpm%2FDCVCTinwq%2F%2BQrxMf%2BuWTooyNZ7MsMJ7k88IGOqUBU8oeSdItqO7aSQdOvFQ4B9H%2BDk9fNyczmYcgqKR5mlDP8Wq6WO1k2QplqP6dpK3nZoG6hWIFXtPe5kK1mKOFp9X9olyYlmaPoTNOpuy1RcT6tApYqNeKufidiXf%2Fl1WOYLR7YvYc05CoxlEUoJwqeWC6zhtZMxTmxbq86ypUpiDVtduS3l9ZmFAfGBIRKqPyAm5K%2BZ3bkl4H2rsGb9nr9mAH6lOA&X-Amz-Signature=b9569f1f594f3e5970d5f6f4007c92a939fdc9d2bddc74e94bbce78298f8ebba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
