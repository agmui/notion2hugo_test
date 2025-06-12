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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKJJTXI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCKVuykpL4bBj6We1LzOzqTaB0NMprBAouz6CGpiwYAjQIhANtt9rLXgevygWpU3DGXAUUjaDAbtISp32Fh%2BZpEjzjvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsSJaFJfWeCS5%2BldQq3AP9SP0lIBSWruLtgE0JTYHviSaOEG65mBS3G%2Btyjz3luW8Rfo7Fp4CMWozQ9KZ75adjZoFHPlyEKuoRFFWw%2Fw1K7a4I%2FT2UKDEEUrF0r6rWPPicNr5c%2FGh4tPm2jLaeuOYSHSZBplWj7YzMiEZ92jWSWkzfHKJVvrjCZCwfoz2kh0mRlzxUwqVRcSEOErdOFFW%2FR3m0ClxgvKBzVxzhuUZibO4Cx8ResShPZwHwIFembUgNZ6mrv0m4IUGFiv0dOO%2BSxJ6BTmy%2BDfXEQvqDZnOIKWPVkhpFVHylh%2F5VtpdMZlhnu61fCAXqwLJevosM9OCUXYaD88re0wc6pnqYXui%2F48PP2Ylp0iemmEFHsP8lHvWhTeCoV0TkdvkOnoVfzRuaG%2FHiW0DngPynUbPd6TdrXzPRg5Ok%2Bt0%2FHIylJocsrq0GPOPcjc9aRGcogacb5UF4AszcZVzHd4b8AjC4H78Nx7btXR6PZ%2BVA06c6RNXVjsYrdONgriANthcKIxBDuIBu%2F%2Fofil1kTZQcVnn8Mw7NnowSqILftaC40KfeLOTQpdSGiEBZ8ccUNC09JJ31k9kyOS05Y41P5cNlKaXfF3taqqJPdFFAS47C%2BBJt1yZhHcXQe4kMNGnx4u%2BhpzC8h6rCBjqkAdH1jW2pCBcPJlo1fs5q3lTN0PhJS%2BUc8dem9Y7iyJbpxtLQ2wiE3EwrAmZ58m99uqe2QSr%2F5MNh3fp3MTFnZH99nf41gWRXKpCEAVKSKfqI3JXOt0oWd%2BdKydVguegmPIKq1Yl%2B5dYFAqEiC3f0vG41Nt%2Bbl18Sguyugu3tNh4dPblru%2FKD3LqLrWZuowxLFrcmrEhm2eCYEfTo2rR0w5F3yZ4V&X-Amz-Signature=8cebf4b289cd5a305a21695ddcf8e0d0922aeb0e7d8c7b896cd02c04220741df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKJJTXI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCKVuykpL4bBj6We1LzOzqTaB0NMprBAouz6CGpiwYAjQIhANtt9rLXgevygWpU3DGXAUUjaDAbtISp32Fh%2BZpEjzjvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsSJaFJfWeCS5%2BldQq3AP9SP0lIBSWruLtgE0JTYHviSaOEG65mBS3G%2Btyjz3luW8Rfo7Fp4CMWozQ9KZ75adjZoFHPlyEKuoRFFWw%2Fw1K7a4I%2FT2UKDEEUrF0r6rWPPicNr5c%2FGh4tPm2jLaeuOYSHSZBplWj7YzMiEZ92jWSWkzfHKJVvrjCZCwfoz2kh0mRlzxUwqVRcSEOErdOFFW%2FR3m0ClxgvKBzVxzhuUZibO4Cx8ResShPZwHwIFembUgNZ6mrv0m4IUGFiv0dOO%2BSxJ6BTmy%2BDfXEQvqDZnOIKWPVkhpFVHylh%2F5VtpdMZlhnu61fCAXqwLJevosM9OCUXYaD88re0wc6pnqYXui%2F48PP2Ylp0iemmEFHsP8lHvWhTeCoV0TkdvkOnoVfzRuaG%2FHiW0DngPynUbPd6TdrXzPRg5Ok%2Bt0%2FHIylJocsrq0GPOPcjc9aRGcogacb5UF4AszcZVzHd4b8AjC4H78Nx7btXR6PZ%2BVA06c6RNXVjsYrdONgriANthcKIxBDuIBu%2F%2Fofil1kTZQcVnn8Mw7NnowSqILftaC40KfeLOTQpdSGiEBZ8ccUNC09JJ31k9kyOS05Y41P5cNlKaXfF3taqqJPdFFAS47C%2BBJt1yZhHcXQe4kMNGnx4u%2BhpzC8h6rCBjqkAdH1jW2pCBcPJlo1fs5q3lTN0PhJS%2BUc8dem9Y7iyJbpxtLQ2wiE3EwrAmZ58m99uqe2QSr%2F5MNh3fp3MTFnZH99nf41gWRXKpCEAVKSKfqI3JXOt0oWd%2BdKydVguegmPIKq1Yl%2B5dYFAqEiC3f0vG41Nt%2Bbl18Sguyugu3tNh4dPblru%2FKD3LqLrWZuowxLFrcmrEhm2eCYEfTo2rR0w5F3yZ4V&X-Amz-Signature=3961a85e5602560e04b8dd8362ab349a84389f6f561dc0bbde398265d9e9b086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKJJTXI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCKVuykpL4bBj6We1LzOzqTaB0NMprBAouz6CGpiwYAjQIhANtt9rLXgevygWpU3DGXAUUjaDAbtISp32Fh%2BZpEjzjvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsSJaFJfWeCS5%2BldQq3AP9SP0lIBSWruLtgE0JTYHviSaOEG65mBS3G%2Btyjz3luW8Rfo7Fp4CMWozQ9KZ75adjZoFHPlyEKuoRFFWw%2Fw1K7a4I%2FT2UKDEEUrF0r6rWPPicNr5c%2FGh4tPm2jLaeuOYSHSZBplWj7YzMiEZ92jWSWkzfHKJVvrjCZCwfoz2kh0mRlzxUwqVRcSEOErdOFFW%2FR3m0ClxgvKBzVxzhuUZibO4Cx8ResShPZwHwIFembUgNZ6mrv0m4IUGFiv0dOO%2BSxJ6BTmy%2BDfXEQvqDZnOIKWPVkhpFVHylh%2F5VtpdMZlhnu61fCAXqwLJevosM9OCUXYaD88re0wc6pnqYXui%2F48PP2Ylp0iemmEFHsP8lHvWhTeCoV0TkdvkOnoVfzRuaG%2FHiW0DngPynUbPd6TdrXzPRg5Ok%2Bt0%2FHIylJocsrq0GPOPcjc9aRGcogacb5UF4AszcZVzHd4b8AjC4H78Nx7btXR6PZ%2BVA06c6RNXVjsYrdONgriANthcKIxBDuIBu%2F%2Fofil1kTZQcVnn8Mw7NnowSqILftaC40KfeLOTQpdSGiEBZ8ccUNC09JJ31k9kyOS05Y41P5cNlKaXfF3taqqJPdFFAS47C%2BBJt1yZhHcXQe4kMNGnx4u%2BhpzC8h6rCBjqkAdH1jW2pCBcPJlo1fs5q3lTN0PhJS%2BUc8dem9Y7iyJbpxtLQ2wiE3EwrAmZ58m99uqe2QSr%2F5MNh3fp3MTFnZH99nf41gWRXKpCEAVKSKfqI3JXOt0oWd%2BdKydVguegmPIKq1Yl%2B5dYFAqEiC3f0vG41Nt%2Bbl18Sguyugu3tNh4dPblru%2FKD3LqLrWZuowxLFrcmrEhm2eCYEfTo2rR0w5F3yZ4V&X-Amz-Signature=83a3d4da8d66e0ac6cd2ad7793e332e77f4470df5edf5dfcf38f7fcc256b9e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKJJTXI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCKVuykpL4bBj6We1LzOzqTaB0NMprBAouz6CGpiwYAjQIhANtt9rLXgevygWpU3DGXAUUjaDAbtISp32Fh%2BZpEjzjvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsSJaFJfWeCS5%2BldQq3AP9SP0lIBSWruLtgE0JTYHviSaOEG65mBS3G%2Btyjz3luW8Rfo7Fp4CMWozQ9KZ75adjZoFHPlyEKuoRFFWw%2Fw1K7a4I%2FT2UKDEEUrF0r6rWPPicNr5c%2FGh4tPm2jLaeuOYSHSZBplWj7YzMiEZ92jWSWkzfHKJVvrjCZCwfoz2kh0mRlzxUwqVRcSEOErdOFFW%2FR3m0ClxgvKBzVxzhuUZibO4Cx8ResShPZwHwIFembUgNZ6mrv0m4IUGFiv0dOO%2BSxJ6BTmy%2BDfXEQvqDZnOIKWPVkhpFVHylh%2F5VtpdMZlhnu61fCAXqwLJevosM9OCUXYaD88re0wc6pnqYXui%2F48PP2Ylp0iemmEFHsP8lHvWhTeCoV0TkdvkOnoVfzRuaG%2FHiW0DngPynUbPd6TdrXzPRg5Ok%2Bt0%2FHIylJocsrq0GPOPcjc9aRGcogacb5UF4AszcZVzHd4b8AjC4H78Nx7btXR6PZ%2BVA06c6RNXVjsYrdONgriANthcKIxBDuIBu%2F%2Fofil1kTZQcVnn8Mw7NnowSqILftaC40KfeLOTQpdSGiEBZ8ccUNC09JJ31k9kyOS05Y41P5cNlKaXfF3taqqJPdFFAS47C%2BBJt1yZhHcXQe4kMNGnx4u%2BhpzC8h6rCBjqkAdH1jW2pCBcPJlo1fs5q3lTN0PhJS%2BUc8dem9Y7iyJbpxtLQ2wiE3EwrAmZ58m99uqe2QSr%2F5MNh3fp3MTFnZH99nf41gWRXKpCEAVKSKfqI3JXOt0oWd%2BdKydVguegmPIKq1Yl%2B5dYFAqEiC3f0vG41Nt%2Bbl18Sguyugu3tNh4dPblru%2FKD3LqLrWZuowxLFrcmrEhm2eCYEfTo2rR0w5F3yZ4V&X-Amz-Signature=3ddda0650b2b09b91af595be78dcf33e6ca64ea674f4f2208df50c16dd9adc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKJJTXI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCKVuykpL4bBj6We1LzOzqTaB0NMprBAouz6CGpiwYAjQIhANtt9rLXgevygWpU3DGXAUUjaDAbtISp32Fh%2BZpEjzjvKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsSJaFJfWeCS5%2BldQq3AP9SP0lIBSWruLtgE0JTYHviSaOEG65mBS3G%2Btyjz3luW8Rfo7Fp4CMWozQ9KZ75adjZoFHPlyEKuoRFFWw%2Fw1K7a4I%2FT2UKDEEUrF0r6rWPPicNr5c%2FGh4tPm2jLaeuOYSHSZBplWj7YzMiEZ92jWSWkzfHKJVvrjCZCwfoz2kh0mRlzxUwqVRcSEOErdOFFW%2FR3m0ClxgvKBzVxzhuUZibO4Cx8ResShPZwHwIFembUgNZ6mrv0m4IUGFiv0dOO%2BSxJ6BTmy%2BDfXEQvqDZnOIKWPVkhpFVHylh%2F5VtpdMZlhnu61fCAXqwLJevosM9OCUXYaD88re0wc6pnqYXui%2F48PP2Ylp0iemmEFHsP8lHvWhTeCoV0TkdvkOnoVfzRuaG%2FHiW0DngPynUbPd6TdrXzPRg5Ok%2Bt0%2FHIylJocsrq0GPOPcjc9aRGcogacb5UF4AszcZVzHd4b8AjC4H78Nx7btXR6PZ%2BVA06c6RNXVjsYrdONgriANthcKIxBDuIBu%2F%2Fofil1kTZQcVnn8Mw7NnowSqILftaC40KfeLOTQpdSGiEBZ8ccUNC09JJ31k9kyOS05Y41P5cNlKaXfF3taqqJPdFFAS47C%2BBJt1yZhHcXQe4kMNGnx4u%2BhpzC8h6rCBjqkAdH1jW2pCBcPJlo1fs5q3lTN0PhJS%2BUc8dem9Y7iyJbpxtLQ2wiE3EwrAmZ58m99uqe2QSr%2F5MNh3fp3MTFnZH99nf41gWRXKpCEAVKSKfqI3JXOt0oWd%2BdKydVguegmPIKq1Yl%2B5dYFAqEiC3f0vG41Nt%2Bbl18Sguyugu3tNh4dPblru%2FKD3LqLrWZuowxLFrcmrEhm2eCYEfTo2rR0w5F3yZ4V&X-Amz-Signature=1ea264ffe38ab13246cf1b777d6043918784ba1a9d812307608e5e146dd93ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
