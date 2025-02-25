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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJRPK5N%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEqwPo72XK6EvoIMS6gtk%2BETedQpho1fue942E%2BpF0rOAiAuIQQ4LHbx9DhoPb7f7u84c0MlC2hS5rhtgK2a7wedyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBbkbosY4twOuW3pRKtwD%2FRbgYWR6FYj67A6%2FUJ6qKwEaoVy4qQjT5%2FBhTiKDTjL%2FuSKiaBJKZBTez07pQN%2FS4gW2YeWUorfGK3UZN3ygsp7oa%2BzU0Tg7Zv%2FkcpRqnzN0aNRdFP4znvMGbxi%2BhN7gk2mPB3zYfFY5ZdCrQjqSxwp4ymmoXjfAESEzUl4tb%2BugTW1NvQsSTGerYNXNYi3vsgbT9ya438BQPxBXwTPJqQ%2FW27yR0E0s4CDJTYJM%2Flsxs1Ky2TVBt3IA60ePtwlGuaQQiccKUhZVxjJpgCegNs3TYhguq0TOYtcpFmg9F11%2Bs5R6oNSkx4VGqm9nXUR9qmUgKchjQQV%2Fm90Xg0xuYcnby7a302Tj19GQ5RMbSR3qF64UQhno3mAUxVXAUAiwVC8KQ%2FS01MkKNWTlkimlayOduZ5%2BNGCuIWy8%2FsUXPO2Iqxd0Jt1IEuRZiAVPB%2BFjKX1jIb6IBKdRq4Ok%2BhqVGUZU1VnWY0kPiCCxnOUUjzFHy1R%2FTOnJgFciCETKPgO2y1WxxkAxJEbz%2BLSe%2BcIBlgqfLL%2FY10PaNEviXEuMI6F33%2FufQOnxh4JPUyWLmyHHB741mwnCQ%2FF6WodlYaCrosUZPxcc8UPAnbYTRA7WK9UGgcAov%2B5YsIQbkfUw%2B7P3vQY6pgEHEBWQGAsHsGWnP%2BpBFE0%2BgFnBVMf%2BR7eu%2BDOb%2FiY92Mo4Z1SGtejUGHmsU0uenKhqRuoKHCHwSZH6I9VcLUKF6CIaumHqhWvUoTak4BCTFPQzjsDIS5AVrddW3DT7Pd%2FhDdb2DiH9yMUZt97SHNVDnQQbDnNxEIrUswxjGOc8RFUFhXfGs2%2FxViGaiQ0yLyyaiTiOoD27yYO94mtx1LvLxzEN12Ok&X-Amz-Signature=c0591f38dd0cac3704e9dfc16714db25af4bb1f4cc1ec0c59ed8e1be4bd93da3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJRPK5N%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEqwPo72XK6EvoIMS6gtk%2BETedQpho1fue942E%2BpF0rOAiAuIQQ4LHbx9DhoPb7f7u84c0MlC2hS5rhtgK2a7wedyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBbkbosY4twOuW3pRKtwD%2FRbgYWR6FYj67A6%2FUJ6qKwEaoVy4qQjT5%2FBhTiKDTjL%2FuSKiaBJKZBTez07pQN%2FS4gW2YeWUorfGK3UZN3ygsp7oa%2BzU0Tg7Zv%2FkcpRqnzN0aNRdFP4znvMGbxi%2BhN7gk2mPB3zYfFY5ZdCrQjqSxwp4ymmoXjfAESEzUl4tb%2BugTW1NvQsSTGerYNXNYi3vsgbT9ya438BQPxBXwTPJqQ%2FW27yR0E0s4CDJTYJM%2Flsxs1Ky2TVBt3IA60ePtwlGuaQQiccKUhZVxjJpgCegNs3TYhguq0TOYtcpFmg9F11%2Bs5R6oNSkx4VGqm9nXUR9qmUgKchjQQV%2Fm90Xg0xuYcnby7a302Tj19GQ5RMbSR3qF64UQhno3mAUxVXAUAiwVC8KQ%2FS01MkKNWTlkimlayOduZ5%2BNGCuIWy8%2FsUXPO2Iqxd0Jt1IEuRZiAVPB%2BFjKX1jIb6IBKdRq4Ok%2BhqVGUZU1VnWY0kPiCCxnOUUjzFHy1R%2FTOnJgFciCETKPgO2y1WxxkAxJEbz%2BLSe%2BcIBlgqfLL%2FY10PaNEviXEuMI6F33%2FufQOnxh4JPUyWLmyHHB741mwnCQ%2FF6WodlYaCrosUZPxcc8UPAnbYTRA7WK9UGgcAov%2B5YsIQbkfUw%2B7P3vQY6pgEHEBWQGAsHsGWnP%2BpBFE0%2BgFnBVMf%2BR7eu%2BDOb%2FiY92Mo4Z1SGtejUGHmsU0uenKhqRuoKHCHwSZH6I9VcLUKF6CIaumHqhWvUoTak4BCTFPQzjsDIS5AVrddW3DT7Pd%2FhDdb2DiH9yMUZt97SHNVDnQQbDnNxEIrUswxjGOc8RFUFhXfGs2%2FxViGaiQ0yLyyaiTiOoD27yYO94mtx1LvLxzEN12Ok&X-Amz-Signature=168d6c46db97cafd2f800fbd8e9ffc7d0f4016d98869284efd7b5487f8115879&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJRPK5N%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEqwPo72XK6EvoIMS6gtk%2BETedQpho1fue942E%2BpF0rOAiAuIQQ4LHbx9DhoPb7f7u84c0MlC2hS5rhtgK2a7wedyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBbkbosY4twOuW3pRKtwD%2FRbgYWR6FYj67A6%2FUJ6qKwEaoVy4qQjT5%2FBhTiKDTjL%2FuSKiaBJKZBTez07pQN%2FS4gW2YeWUorfGK3UZN3ygsp7oa%2BzU0Tg7Zv%2FkcpRqnzN0aNRdFP4znvMGbxi%2BhN7gk2mPB3zYfFY5ZdCrQjqSxwp4ymmoXjfAESEzUl4tb%2BugTW1NvQsSTGerYNXNYi3vsgbT9ya438BQPxBXwTPJqQ%2FW27yR0E0s4CDJTYJM%2Flsxs1Ky2TVBt3IA60ePtwlGuaQQiccKUhZVxjJpgCegNs3TYhguq0TOYtcpFmg9F11%2Bs5R6oNSkx4VGqm9nXUR9qmUgKchjQQV%2Fm90Xg0xuYcnby7a302Tj19GQ5RMbSR3qF64UQhno3mAUxVXAUAiwVC8KQ%2FS01MkKNWTlkimlayOduZ5%2BNGCuIWy8%2FsUXPO2Iqxd0Jt1IEuRZiAVPB%2BFjKX1jIb6IBKdRq4Ok%2BhqVGUZU1VnWY0kPiCCxnOUUjzFHy1R%2FTOnJgFciCETKPgO2y1WxxkAxJEbz%2BLSe%2BcIBlgqfLL%2FY10PaNEviXEuMI6F33%2FufQOnxh4JPUyWLmyHHB741mwnCQ%2FF6WodlYaCrosUZPxcc8UPAnbYTRA7WK9UGgcAov%2B5YsIQbkfUw%2B7P3vQY6pgEHEBWQGAsHsGWnP%2BpBFE0%2BgFnBVMf%2BR7eu%2BDOb%2FiY92Mo4Z1SGtejUGHmsU0uenKhqRuoKHCHwSZH6I9VcLUKF6CIaumHqhWvUoTak4BCTFPQzjsDIS5AVrddW3DT7Pd%2FhDdb2DiH9yMUZt97SHNVDnQQbDnNxEIrUswxjGOc8RFUFhXfGs2%2FxViGaiQ0yLyyaiTiOoD27yYO94mtx1LvLxzEN12Ok&X-Amz-Signature=a9beedb4268f62a6a7ffe3a4950f38490a0214f3153daf25400bcf51f1f4ffad&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJRPK5N%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEqwPo72XK6EvoIMS6gtk%2BETedQpho1fue942E%2BpF0rOAiAuIQQ4LHbx9DhoPb7f7u84c0MlC2hS5rhtgK2a7wedyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBbkbosY4twOuW3pRKtwD%2FRbgYWR6FYj67A6%2FUJ6qKwEaoVy4qQjT5%2FBhTiKDTjL%2FuSKiaBJKZBTez07pQN%2FS4gW2YeWUorfGK3UZN3ygsp7oa%2BzU0Tg7Zv%2FkcpRqnzN0aNRdFP4znvMGbxi%2BhN7gk2mPB3zYfFY5ZdCrQjqSxwp4ymmoXjfAESEzUl4tb%2BugTW1NvQsSTGerYNXNYi3vsgbT9ya438BQPxBXwTPJqQ%2FW27yR0E0s4CDJTYJM%2Flsxs1Ky2TVBt3IA60ePtwlGuaQQiccKUhZVxjJpgCegNs3TYhguq0TOYtcpFmg9F11%2Bs5R6oNSkx4VGqm9nXUR9qmUgKchjQQV%2Fm90Xg0xuYcnby7a302Tj19GQ5RMbSR3qF64UQhno3mAUxVXAUAiwVC8KQ%2FS01MkKNWTlkimlayOduZ5%2BNGCuIWy8%2FsUXPO2Iqxd0Jt1IEuRZiAVPB%2BFjKX1jIb6IBKdRq4Ok%2BhqVGUZU1VnWY0kPiCCxnOUUjzFHy1R%2FTOnJgFciCETKPgO2y1WxxkAxJEbz%2BLSe%2BcIBlgqfLL%2FY10PaNEviXEuMI6F33%2FufQOnxh4JPUyWLmyHHB741mwnCQ%2FF6WodlYaCrosUZPxcc8UPAnbYTRA7WK9UGgcAov%2B5YsIQbkfUw%2B7P3vQY6pgEHEBWQGAsHsGWnP%2BpBFE0%2BgFnBVMf%2BR7eu%2BDOb%2FiY92Mo4Z1SGtejUGHmsU0uenKhqRuoKHCHwSZH6I9VcLUKF6CIaumHqhWvUoTak4BCTFPQzjsDIS5AVrddW3DT7Pd%2FhDdb2DiH9yMUZt97SHNVDnQQbDnNxEIrUswxjGOc8RFUFhXfGs2%2FxViGaiQ0yLyyaiTiOoD27yYO94mtx1LvLxzEN12Ok&X-Amz-Signature=910d6fc3a343ad61bffc90a89f62d192e17e803f6aca5f24d861ae7afe0fdf14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJRPK5N%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEqwPo72XK6EvoIMS6gtk%2BETedQpho1fue942E%2BpF0rOAiAuIQQ4LHbx9DhoPb7f7u84c0MlC2hS5rhtgK2a7wedyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMBbkbosY4twOuW3pRKtwD%2FRbgYWR6FYj67A6%2FUJ6qKwEaoVy4qQjT5%2FBhTiKDTjL%2FuSKiaBJKZBTez07pQN%2FS4gW2YeWUorfGK3UZN3ygsp7oa%2BzU0Tg7Zv%2FkcpRqnzN0aNRdFP4znvMGbxi%2BhN7gk2mPB3zYfFY5ZdCrQjqSxwp4ymmoXjfAESEzUl4tb%2BugTW1NvQsSTGerYNXNYi3vsgbT9ya438BQPxBXwTPJqQ%2FW27yR0E0s4CDJTYJM%2Flsxs1Ky2TVBt3IA60ePtwlGuaQQiccKUhZVxjJpgCegNs3TYhguq0TOYtcpFmg9F11%2Bs5R6oNSkx4VGqm9nXUR9qmUgKchjQQV%2Fm90Xg0xuYcnby7a302Tj19GQ5RMbSR3qF64UQhno3mAUxVXAUAiwVC8KQ%2FS01MkKNWTlkimlayOduZ5%2BNGCuIWy8%2FsUXPO2Iqxd0Jt1IEuRZiAVPB%2BFjKX1jIb6IBKdRq4Ok%2BhqVGUZU1VnWY0kPiCCxnOUUjzFHy1R%2FTOnJgFciCETKPgO2y1WxxkAxJEbz%2BLSe%2BcIBlgqfLL%2FY10PaNEviXEuMI6F33%2FufQOnxh4JPUyWLmyHHB741mwnCQ%2FF6WodlYaCrosUZPxcc8UPAnbYTRA7WK9UGgcAov%2B5YsIQbkfUw%2B7P3vQY6pgEHEBWQGAsHsGWnP%2BpBFE0%2BgFnBVMf%2BR7eu%2BDOb%2FiY92Mo4Z1SGtejUGHmsU0uenKhqRuoKHCHwSZH6I9VcLUKF6CIaumHqhWvUoTak4BCTFPQzjsDIS5AVrddW3DT7Pd%2FhDdb2DiH9yMUZt97SHNVDnQQbDnNxEIrUswxjGOc8RFUFhXfGs2%2FxViGaiQ0yLyyaiTiOoD27yYO94mtx1LvLxzEN12Ok&X-Amz-Signature=90c725766ca9582fbc2e7ffa1f07d0c56648f2ecd6e905ead114ddfaca7c5488&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
