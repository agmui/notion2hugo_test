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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPW6S3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCifUhzEn78oAmpWLRgEPuuCcIQQXJ41bL3Z163B8YmMwIgdYj5STSYRlEvUO9EIqmCiTsYNl9nbZ39fZ4smvIs4pQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzUzCvnpxERBHECsyrcA6kBuRfAFAKY95rrMvwlzMirNVETg5Wz3CXLDlH3KAhNPTAOPK5XGcFm0wnjsHrwfWhRar6ZXA%2FNrJAOWEp49p4dedQpZQ0U6A9kkg5zHeJwTOFw3VfAjIN%2BiE09F2aLy1XEBg3t2%2Bni20bP0d5Oq%2F3tqyfDH9sPPN0w%2B9gbvqcGxjSWvwv2ak5o8bJVt%2B6jwGWda5jkQLOHwB514pARDjzFKoGhC5Ilad35wDs3JHTh5GjvO9YB0wMVxSWxNQiWRrDMN6cvz%2Fd7OB4z2QQJYxS1FPUoN0a8QrPzQcf950QtNdKryhDFPOFmiVF2YyJXxJx%2FRMrDj6Ww0u47dsuH283Tp3yKo8Q7auEKAtFgpNX8jxMg62nEzA7U4Qq8DVIAxG8x9nZO4Sm7LCYnOtBc41BExpLf76PLgt6pbYREVl0rcWl7waQAh9F%2FrbQChqFwaPTLFfMPb0%2FMMKLnbHXlwm%2B1iP5UY2c7jD1DUtnZ%2BSgbsVUr429ezDM1SNpsLInbaVQ84Ka5r8zWXNFuF8YrobGLxn7Hs88g%2FmHp8bhSD1%2BngpCY8EIsdNsshnzoFC09ssP%2B2qavubYo5ZsZ75PjgCmghhpMfD3G5zCZ%2FY6kQHI90ksJqF%2F%2BGXICH12GMOXM1L0GOqUBibNdLVnNFw2Gp9fPpzMbvjSgg0gw4lK7K%2FFtW4uHI0wtBn3GowjrJubjD5PY3K5pFpy2vG2MccB%2FQECzjy7H2L3OpEV3Bv0quusAVXG6jWrHnYnI%2BWpEkPaDz28a83wjXcUq%2Fs0Silan8QEOrtbYiHKIt%2BTzA3qgxJYFr6SUjyUlCHdcoJ3Lz%2BrlYQC7YPl9Nt%2FNt0tnZaXFnPgCW0jdHVtk0Uxn&X-Amz-Signature=42c901773c5f915c39f6567b6d3b4bfd4e8877b92d68df5d937b3a32c5d01d10&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPW6S3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCifUhzEn78oAmpWLRgEPuuCcIQQXJ41bL3Z163B8YmMwIgdYj5STSYRlEvUO9EIqmCiTsYNl9nbZ39fZ4smvIs4pQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzUzCvnpxERBHECsyrcA6kBuRfAFAKY95rrMvwlzMirNVETg5Wz3CXLDlH3KAhNPTAOPK5XGcFm0wnjsHrwfWhRar6ZXA%2FNrJAOWEp49p4dedQpZQ0U6A9kkg5zHeJwTOFw3VfAjIN%2BiE09F2aLy1XEBg3t2%2Bni20bP0d5Oq%2F3tqyfDH9sPPN0w%2B9gbvqcGxjSWvwv2ak5o8bJVt%2B6jwGWda5jkQLOHwB514pARDjzFKoGhC5Ilad35wDs3JHTh5GjvO9YB0wMVxSWxNQiWRrDMN6cvz%2Fd7OB4z2QQJYxS1FPUoN0a8QrPzQcf950QtNdKryhDFPOFmiVF2YyJXxJx%2FRMrDj6Ww0u47dsuH283Tp3yKo8Q7auEKAtFgpNX8jxMg62nEzA7U4Qq8DVIAxG8x9nZO4Sm7LCYnOtBc41BExpLf76PLgt6pbYREVl0rcWl7waQAh9F%2FrbQChqFwaPTLFfMPb0%2FMMKLnbHXlwm%2B1iP5UY2c7jD1DUtnZ%2BSgbsVUr429ezDM1SNpsLInbaVQ84Ka5r8zWXNFuF8YrobGLxn7Hs88g%2FmHp8bhSD1%2BngpCY8EIsdNsshnzoFC09ssP%2B2qavubYo5ZsZ75PjgCmghhpMfD3G5zCZ%2FY6kQHI90ksJqF%2F%2BGXICH12GMOXM1L0GOqUBibNdLVnNFw2Gp9fPpzMbvjSgg0gw4lK7K%2FFtW4uHI0wtBn3GowjrJubjD5PY3K5pFpy2vG2MccB%2FQECzjy7H2L3OpEV3Bv0quusAVXG6jWrHnYnI%2BWpEkPaDz28a83wjXcUq%2Fs0Silan8QEOrtbYiHKIt%2BTzA3qgxJYFr6SUjyUlCHdcoJ3Lz%2BrlYQC7YPl9Nt%2FNt0tnZaXFnPgCW0jdHVtk0Uxn&X-Amz-Signature=4d452c67c7e8e0c88d755c9887a0a77c786b213456e7a8eb9ffd976ec54672fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPW6S3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCifUhzEn78oAmpWLRgEPuuCcIQQXJ41bL3Z163B8YmMwIgdYj5STSYRlEvUO9EIqmCiTsYNl9nbZ39fZ4smvIs4pQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzUzCvnpxERBHECsyrcA6kBuRfAFAKY95rrMvwlzMirNVETg5Wz3CXLDlH3KAhNPTAOPK5XGcFm0wnjsHrwfWhRar6ZXA%2FNrJAOWEp49p4dedQpZQ0U6A9kkg5zHeJwTOFw3VfAjIN%2BiE09F2aLy1XEBg3t2%2Bni20bP0d5Oq%2F3tqyfDH9sPPN0w%2B9gbvqcGxjSWvwv2ak5o8bJVt%2B6jwGWda5jkQLOHwB514pARDjzFKoGhC5Ilad35wDs3JHTh5GjvO9YB0wMVxSWxNQiWRrDMN6cvz%2Fd7OB4z2QQJYxS1FPUoN0a8QrPzQcf950QtNdKryhDFPOFmiVF2YyJXxJx%2FRMrDj6Ww0u47dsuH283Tp3yKo8Q7auEKAtFgpNX8jxMg62nEzA7U4Qq8DVIAxG8x9nZO4Sm7LCYnOtBc41BExpLf76PLgt6pbYREVl0rcWl7waQAh9F%2FrbQChqFwaPTLFfMPb0%2FMMKLnbHXlwm%2B1iP5UY2c7jD1DUtnZ%2BSgbsVUr429ezDM1SNpsLInbaVQ84Ka5r8zWXNFuF8YrobGLxn7Hs88g%2FmHp8bhSD1%2BngpCY8EIsdNsshnzoFC09ssP%2B2qavubYo5ZsZ75PjgCmghhpMfD3G5zCZ%2FY6kQHI90ksJqF%2F%2BGXICH12GMOXM1L0GOqUBibNdLVnNFw2Gp9fPpzMbvjSgg0gw4lK7K%2FFtW4uHI0wtBn3GowjrJubjD5PY3K5pFpy2vG2MccB%2FQECzjy7H2L3OpEV3Bv0quusAVXG6jWrHnYnI%2BWpEkPaDz28a83wjXcUq%2Fs0Silan8QEOrtbYiHKIt%2BTzA3qgxJYFr6SUjyUlCHdcoJ3Lz%2BrlYQC7YPl9Nt%2FNt0tnZaXFnPgCW0jdHVtk0Uxn&X-Amz-Signature=39b865a192674359b5a4809a935f74c74b8fe63dfc3c1d26b92a2f5e2e23cd8e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPW6S3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCifUhzEn78oAmpWLRgEPuuCcIQQXJ41bL3Z163B8YmMwIgdYj5STSYRlEvUO9EIqmCiTsYNl9nbZ39fZ4smvIs4pQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzUzCvnpxERBHECsyrcA6kBuRfAFAKY95rrMvwlzMirNVETg5Wz3CXLDlH3KAhNPTAOPK5XGcFm0wnjsHrwfWhRar6ZXA%2FNrJAOWEp49p4dedQpZQ0U6A9kkg5zHeJwTOFw3VfAjIN%2BiE09F2aLy1XEBg3t2%2Bni20bP0d5Oq%2F3tqyfDH9sPPN0w%2B9gbvqcGxjSWvwv2ak5o8bJVt%2B6jwGWda5jkQLOHwB514pARDjzFKoGhC5Ilad35wDs3JHTh5GjvO9YB0wMVxSWxNQiWRrDMN6cvz%2Fd7OB4z2QQJYxS1FPUoN0a8QrPzQcf950QtNdKryhDFPOFmiVF2YyJXxJx%2FRMrDj6Ww0u47dsuH283Tp3yKo8Q7auEKAtFgpNX8jxMg62nEzA7U4Qq8DVIAxG8x9nZO4Sm7LCYnOtBc41BExpLf76PLgt6pbYREVl0rcWl7waQAh9F%2FrbQChqFwaPTLFfMPb0%2FMMKLnbHXlwm%2B1iP5UY2c7jD1DUtnZ%2BSgbsVUr429ezDM1SNpsLInbaVQ84Ka5r8zWXNFuF8YrobGLxn7Hs88g%2FmHp8bhSD1%2BngpCY8EIsdNsshnzoFC09ssP%2B2qavubYo5ZsZ75PjgCmghhpMfD3G5zCZ%2FY6kQHI90ksJqF%2F%2BGXICH12GMOXM1L0GOqUBibNdLVnNFw2Gp9fPpzMbvjSgg0gw4lK7K%2FFtW4uHI0wtBn3GowjrJubjD5PY3K5pFpy2vG2MccB%2FQECzjy7H2L3OpEV3Bv0quusAVXG6jWrHnYnI%2BWpEkPaDz28a83wjXcUq%2Fs0Silan8QEOrtbYiHKIt%2BTzA3qgxJYFr6SUjyUlCHdcoJ3Lz%2BrlYQC7YPl9Nt%2FNt0tnZaXFnPgCW0jdHVtk0Uxn&X-Amz-Signature=88903191673b6ddd1bf2e5ecbb655bf3b3814141778f817470482ab918ae8c30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPW6S3E%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCifUhzEn78oAmpWLRgEPuuCcIQQXJ41bL3Z163B8YmMwIgdYj5STSYRlEvUO9EIqmCiTsYNl9nbZ39fZ4smvIs4pQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzUzCvnpxERBHECsyrcA6kBuRfAFAKY95rrMvwlzMirNVETg5Wz3CXLDlH3KAhNPTAOPK5XGcFm0wnjsHrwfWhRar6ZXA%2FNrJAOWEp49p4dedQpZQ0U6A9kkg5zHeJwTOFw3VfAjIN%2BiE09F2aLy1XEBg3t2%2Bni20bP0d5Oq%2F3tqyfDH9sPPN0w%2B9gbvqcGxjSWvwv2ak5o8bJVt%2B6jwGWda5jkQLOHwB514pARDjzFKoGhC5Ilad35wDs3JHTh5GjvO9YB0wMVxSWxNQiWRrDMN6cvz%2Fd7OB4z2QQJYxS1FPUoN0a8QrPzQcf950QtNdKryhDFPOFmiVF2YyJXxJx%2FRMrDj6Ww0u47dsuH283Tp3yKo8Q7auEKAtFgpNX8jxMg62nEzA7U4Qq8DVIAxG8x9nZO4Sm7LCYnOtBc41BExpLf76PLgt6pbYREVl0rcWl7waQAh9F%2FrbQChqFwaPTLFfMPb0%2FMMKLnbHXlwm%2B1iP5UY2c7jD1DUtnZ%2BSgbsVUr429ezDM1SNpsLInbaVQ84Ka5r8zWXNFuF8YrobGLxn7Hs88g%2FmHp8bhSD1%2BngpCY8EIsdNsshnzoFC09ssP%2B2qavubYo5ZsZ75PjgCmghhpMfD3G5zCZ%2FY6kQHI90ksJqF%2F%2BGXICH12GMOXM1L0GOqUBibNdLVnNFw2Gp9fPpzMbvjSgg0gw4lK7K%2FFtW4uHI0wtBn3GowjrJubjD5PY3K5pFpy2vG2MccB%2FQECzjy7H2L3OpEV3Bv0quusAVXG6jWrHnYnI%2BWpEkPaDz28a83wjXcUq%2Fs0Silan8QEOrtbYiHKIt%2BTzA3qgxJYFr6SUjyUlCHdcoJ3Lz%2BrlYQC7YPl9Nt%2FNt0tnZaXFnPgCW0jdHVtk0Uxn&X-Amz-Signature=67b3f13d95bc89efc396c1a1d5149f06af3b613ca17a394fd33b33eb05d6c707&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
