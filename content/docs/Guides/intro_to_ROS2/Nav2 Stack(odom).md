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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDROTWO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBUN6%2F1FHZRjOqE6bSTq1JPOpfGSYIAjkQMHSm86IKwIgDizrB%2BuSs96Rt6lHBp9hG5KOoJfCNtL2RWgmaJobHj0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtT8%2FP7arV%2FwyE1QSrcAwBrjKwz2vlmbBCk5a%2FBoaIoP54xpvffEH%2FWvUBsNihtiW0JlYwQFWCkeWXKesA8ZiLYzPwt09p5xnUlwLiD3IGIy2xqC%2B7NsDg%2BBLz7x%2Ba5bVHO%2FgYur76VjAi7GdW4UAZP4Wrnzlr5ugWc5c3yKvarKOvwdw%2FiHzSlvzyltvpOVCjtIEqzzeDxpKmpXDXcHde1GxqZvRO%2FflQbptMRiN1D4nIMnPnqhJYSXqgWtHVfEJoxGJHapEaR%2B%2BdNZS4JZzD3CAdZq9wjI476KxvuWXT1TclCr%2BkpvmMWYbUbX3B8xYU3AoAtqMLouV%2FLxkI4uC%2F9iQViPgmOTaOBvcC0D2Te8ePigcyu6XPOPEzEW5XSQRJcfBdTHDtT0jxwz%2F3XryZW%2BgeRfLKoHnUgAiJBxDLd8Ypx6VWTw2xCHLhkexWrfPOEoyFEQJgLhRxD3RAQoOAjPn9%2BoBS%2BywwwxYl93oOjMRlivv3qJ3nOhty0B5oyUcE5PZwa6T%2BkyAwALNtZfNlUz9VgD2rCRM1HU%2BCUeiBoVi1FvkCiCVGOIbAFiAztWmu5O69T9NysemBnExwPhYmYnjB9VLixvAs14D%2BHGEs3HH3w1CYusVnKfs6lRpFzJMZrybuXSuMgPmwUMMT0iMMGOqUB58rNXxaU%2Fc9XYoNpYEelcI2DU3AQdLcuaxMtdo3jcuzT7eE3BeU9R7trPblKOae5zUhH8slTHBBMt4en%2BeaeQJjovTDV8nQ8CpaFwA%2FVV2sbjkD6WfchdzMc1gwDcDZ%2F7nnKhoziDbRqwAsa9A8M7AbHcyulYyVQzg1J7FY%2BTj1r4zglDIbf1IoxnXjks3bmp4d2p52zvkC8pT%2BP2i6rMDU%2B7yOh&X-Amz-Signature=725ee10dea31e52beb62f7a31ab6d0fc621307d54c9352255abe936ffcf71c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDROTWO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBUN6%2F1FHZRjOqE6bSTq1JPOpfGSYIAjkQMHSm86IKwIgDizrB%2BuSs96Rt6lHBp9hG5KOoJfCNtL2RWgmaJobHj0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtT8%2FP7arV%2FwyE1QSrcAwBrjKwz2vlmbBCk5a%2FBoaIoP54xpvffEH%2FWvUBsNihtiW0JlYwQFWCkeWXKesA8ZiLYzPwt09p5xnUlwLiD3IGIy2xqC%2B7NsDg%2BBLz7x%2Ba5bVHO%2FgYur76VjAi7GdW4UAZP4Wrnzlr5ugWc5c3yKvarKOvwdw%2FiHzSlvzyltvpOVCjtIEqzzeDxpKmpXDXcHde1GxqZvRO%2FflQbptMRiN1D4nIMnPnqhJYSXqgWtHVfEJoxGJHapEaR%2B%2BdNZS4JZzD3CAdZq9wjI476KxvuWXT1TclCr%2BkpvmMWYbUbX3B8xYU3AoAtqMLouV%2FLxkI4uC%2F9iQViPgmOTaOBvcC0D2Te8ePigcyu6XPOPEzEW5XSQRJcfBdTHDtT0jxwz%2F3XryZW%2BgeRfLKoHnUgAiJBxDLd8Ypx6VWTw2xCHLhkexWrfPOEoyFEQJgLhRxD3RAQoOAjPn9%2BoBS%2BywwwxYl93oOjMRlivv3qJ3nOhty0B5oyUcE5PZwa6T%2BkyAwALNtZfNlUz9VgD2rCRM1HU%2BCUeiBoVi1FvkCiCVGOIbAFiAztWmu5O69T9NysemBnExwPhYmYnjB9VLixvAs14D%2BHGEs3HH3w1CYusVnKfs6lRpFzJMZrybuXSuMgPmwUMMT0iMMGOqUB58rNXxaU%2Fc9XYoNpYEelcI2DU3AQdLcuaxMtdo3jcuzT7eE3BeU9R7trPblKOae5zUhH8slTHBBMt4en%2BeaeQJjovTDV8nQ8CpaFwA%2FVV2sbjkD6WfchdzMc1gwDcDZ%2F7nnKhoziDbRqwAsa9A8M7AbHcyulYyVQzg1J7FY%2BTj1r4zglDIbf1IoxnXjks3bmp4d2p52zvkC8pT%2BP2i6rMDU%2B7yOh&X-Amz-Signature=891cd4481ad5879b1857e5b0291e2f795c3a4cceae973c6d98f4f1e320bfef7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDROTWO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBUN6%2F1FHZRjOqE6bSTq1JPOpfGSYIAjkQMHSm86IKwIgDizrB%2BuSs96Rt6lHBp9hG5KOoJfCNtL2RWgmaJobHj0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtT8%2FP7arV%2FwyE1QSrcAwBrjKwz2vlmbBCk5a%2FBoaIoP54xpvffEH%2FWvUBsNihtiW0JlYwQFWCkeWXKesA8ZiLYzPwt09p5xnUlwLiD3IGIy2xqC%2B7NsDg%2BBLz7x%2Ba5bVHO%2FgYur76VjAi7GdW4UAZP4Wrnzlr5ugWc5c3yKvarKOvwdw%2FiHzSlvzyltvpOVCjtIEqzzeDxpKmpXDXcHde1GxqZvRO%2FflQbptMRiN1D4nIMnPnqhJYSXqgWtHVfEJoxGJHapEaR%2B%2BdNZS4JZzD3CAdZq9wjI476KxvuWXT1TclCr%2BkpvmMWYbUbX3B8xYU3AoAtqMLouV%2FLxkI4uC%2F9iQViPgmOTaOBvcC0D2Te8ePigcyu6XPOPEzEW5XSQRJcfBdTHDtT0jxwz%2F3XryZW%2BgeRfLKoHnUgAiJBxDLd8Ypx6VWTw2xCHLhkexWrfPOEoyFEQJgLhRxD3RAQoOAjPn9%2BoBS%2BywwwxYl93oOjMRlivv3qJ3nOhty0B5oyUcE5PZwa6T%2BkyAwALNtZfNlUz9VgD2rCRM1HU%2BCUeiBoVi1FvkCiCVGOIbAFiAztWmu5O69T9NysemBnExwPhYmYnjB9VLixvAs14D%2BHGEs3HH3w1CYusVnKfs6lRpFzJMZrybuXSuMgPmwUMMT0iMMGOqUB58rNXxaU%2Fc9XYoNpYEelcI2DU3AQdLcuaxMtdo3jcuzT7eE3BeU9R7trPblKOae5zUhH8slTHBBMt4en%2BeaeQJjovTDV8nQ8CpaFwA%2FVV2sbjkD6WfchdzMc1gwDcDZ%2F7nnKhoziDbRqwAsa9A8M7AbHcyulYyVQzg1J7FY%2BTj1r4zglDIbf1IoxnXjks3bmp4d2p52zvkC8pT%2BP2i6rMDU%2B7yOh&X-Amz-Signature=72af921b7985d72458b06cab7cf8d8fa470f4e54bd480a9ff74fff7d6d527e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDROTWO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBUN6%2F1FHZRjOqE6bSTq1JPOpfGSYIAjkQMHSm86IKwIgDizrB%2BuSs96Rt6lHBp9hG5KOoJfCNtL2RWgmaJobHj0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtT8%2FP7arV%2FwyE1QSrcAwBrjKwz2vlmbBCk5a%2FBoaIoP54xpvffEH%2FWvUBsNihtiW0JlYwQFWCkeWXKesA8ZiLYzPwt09p5xnUlwLiD3IGIy2xqC%2B7NsDg%2BBLz7x%2Ba5bVHO%2FgYur76VjAi7GdW4UAZP4Wrnzlr5ugWc5c3yKvarKOvwdw%2FiHzSlvzyltvpOVCjtIEqzzeDxpKmpXDXcHde1GxqZvRO%2FflQbptMRiN1D4nIMnPnqhJYSXqgWtHVfEJoxGJHapEaR%2B%2BdNZS4JZzD3CAdZq9wjI476KxvuWXT1TclCr%2BkpvmMWYbUbX3B8xYU3AoAtqMLouV%2FLxkI4uC%2F9iQViPgmOTaOBvcC0D2Te8ePigcyu6XPOPEzEW5XSQRJcfBdTHDtT0jxwz%2F3XryZW%2BgeRfLKoHnUgAiJBxDLd8Ypx6VWTw2xCHLhkexWrfPOEoyFEQJgLhRxD3RAQoOAjPn9%2BoBS%2BywwwxYl93oOjMRlivv3qJ3nOhty0B5oyUcE5PZwa6T%2BkyAwALNtZfNlUz9VgD2rCRM1HU%2BCUeiBoVi1FvkCiCVGOIbAFiAztWmu5O69T9NysemBnExwPhYmYnjB9VLixvAs14D%2BHGEs3HH3w1CYusVnKfs6lRpFzJMZrybuXSuMgPmwUMMT0iMMGOqUB58rNXxaU%2Fc9XYoNpYEelcI2DU3AQdLcuaxMtdo3jcuzT7eE3BeU9R7trPblKOae5zUhH8slTHBBMt4en%2BeaeQJjovTDV8nQ8CpaFwA%2FVV2sbjkD6WfchdzMc1gwDcDZ%2F7nnKhoziDbRqwAsa9A8M7AbHcyulYyVQzg1J7FY%2BTj1r4zglDIbf1IoxnXjks3bmp4d2p52zvkC8pT%2BP2i6rMDU%2B7yOh&X-Amz-Signature=1c7d267b908b88f12c85a627d9054705f1a8e8633e95ad8f36311175d1b188ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDROTWO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBUN6%2F1FHZRjOqE6bSTq1JPOpfGSYIAjkQMHSm86IKwIgDizrB%2BuSs96Rt6lHBp9hG5KOoJfCNtL2RWgmaJobHj0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtT8%2FP7arV%2FwyE1QSrcAwBrjKwz2vlmbBCk5a%2FBoaIoP54xpvffEH%2FWvUBsNihtiW0JlYwQFWCkeWXKesA8ZiLYzPwt09p5xnUlwLiD3IGIy2xqC%2B7NsDg%2BBLz7x%2Ba5bVHO%2FgYur76VjAi7GdW4UAZP4Wrnzlr5ugWc5c3yKvarKOvwdw%2FiHzSlvzyltvpOVCjtIEqzzeDxpKmpXDXcHde1GxqZvRO%2FflQbptMRiN1D4nIMnPnqhJYSXqgWtHVfEJoxGJHapEaR%2B%2BdNZS4JZzD3CAdZq9wjI476KxvuWXT1TclCr%2BkpvmMWYbUbX3B8xYU3AoAtqMLouV%2FLxkI4uC%2F9iQViPgmOTaOBvcC0D2Te8ePigcyu6XPOPEzEW5XSQRJcfBdTHDtT0jxwz%2F3XryZW%2BgeRfLKoHnUgAiJBxDLd8Ypx6VWTw2xCHLhkexWrfPOEoyFEQJgLhRxD3RAQoOAjPn9%2BoBS%2BywwwxYl93oOjMRlivv3qJ3nOhty0B5oyUcE5PZwa6T%2BkyAwALNtZfNlUz9VgD2rCRM1HU%2BCUeiBoVi1FvkCiCVGOIbAFiAztWmu5O69T9NysemBnExwPhYmYnjB9VLixvAs14D%2BHGEs3HH3w1CYusVnKfs6lRpFzJMZrybuXSuMgPmwUMMT0iMMGOqUB58rNXxaU%2Fc9XYoNpYEelcI2DU3AQdLcuaxMtdo3jcuzT7eE3BeU9R7trPblKOae5zUhH8slTHBBMt4en%2BeaeQJjovTDV8nQ8CpaFwA%2FVV2sbjkD6WfchdzMc1gwDcDZ%2F7nnKhoziDbRqwAsa9A8M7AbHcyulYyVQzg1J7FY%2BTj1r4zglDIbf1IoxnXjks3bmp4d2p52zvkC8pT%2BP2i6rMDU%2B7yOh&X-Amz-Signature=62498c9c1c11d84e9910c7bca1fb6b566b4d6acc46dad0a16a58c1c696e9c87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
