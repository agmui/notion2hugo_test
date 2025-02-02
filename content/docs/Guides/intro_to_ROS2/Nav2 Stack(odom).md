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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6FBOQT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr9Zo5xeQhnyd7CQmA6xqGjJiGIXflxjgD7lV1ZNNcYAIhAMSvPKktJxhd%2Fw6KAevtVh6HYlHiTCmsR7BXnUGsfse0KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbk4dzN07X9wicDFwq3AO8NdgipbFakuNqut2Jh9zXUd5B%2BBVBbJGAgYO%2FTVQZv2nn%2BeDKRRdtJEhj%2FJz93%2Fs1LBv735TquYZ4M%2BMJbpDQO79E7vvbWwZtzJfriN4PGeXWXzbQNjJBdNDtA9p3amDipHGinXA%2FakZw7%2FFy0H1labdFBBC7eaH5ejonGY2o6U0IxjWPI8valLHbYk%2BxZN1RNTME%2BBFlCyHRK%2FXmimCrLwgYqiQcwpTnElfxJXYDBnr3TUQVHc7OEq3uz%2BMWBoSgWnZfLQjHkFtMKElQkoCNOiHagve%2BRvm0wDsQFG0ifZQuIQEKm37duUMH8yNPZeIxDNm3SGRPC5HiaC6qC%2B3mIHWHkfD2AZmcBF8v3NRTLpuGV6xQ6eGD8C10%2FV4J8om62wbZJTal1ESwliqV5Epkpudi8VCwXE53iJ7Hh7gzNvIpAlkSr6%2FrUgwdvIoA0zZGynaGL4swaikjB2XncjjrW7OuRA8PEKtF0gj2gIrVCiYCy4o4Ye7WgJkgkPyggIT8VEzYj6DS4IjAW%2Byd%2F2vroIs9dE84RnLu6%2FZYrzIJYzNQAfJ44C6vWT17SpFN28flH4W5svcstimE3G9sdlj0%2B6m%2FRgY0sKCdL8xb45Z2CzBJx4W3QT5qikoqjDCeuv28BjqkAbusZU%2FhHItmi4dGcg1dg9CjDCNC8uWZnR6pZPjMdkqKH31IuvyC2fLJDaONEy6RvJ3ByKrv7K5piNYJ%2FpJplCjxp%2BHrYApP7yIoo7LBqfBJSTygL61WWcTyL68tucnpVXTe8j4xCKJqryAV1y%2BqPa4KUcd%2FkjqTYhaWhscsbM3lCQv1ceZimaNZZjitvyrhSAFgUYtL8OrjD9rSzx3No%2BzcoYxE&X-Amz-Signature=25bf97923d49c35f5ba5383b7fbff35f4d3e9a1b693e6a57b4064d4064dcda0c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6FBOQT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr9Zo5xeQhnyd7CQmA6xqGjJiGIXflxjgD7lV1ZNNcYAIhAMSvPKktJxhd%2Fw6KAevtVh6HYlHiTCmsR7BXnUGsfse0KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbk4dzN07X9wicDFwq3AO8NdgipbFakuNqut2Jh9zXUd5B%2BBVBbJGAgYO%2FTVQZv2nn%2BeDKRRdtJEhj%2FJz93%2Fs1LBv735TquYZ4M%2BMJbpDQO79E7vvbWwZtzJfriN4PGeXWXzbQNjJBdNDtA9p3amDipHGinXA%2FakZw7%2FFy0H1labdFBBC7eaH5ejonGY2o6U0IxjWPI8valLHbYk%2BxZN1RNTME%2BBFlCyHRK%2FXmimCrLwgYqiQcwpTnElfxJXYDBnr3TUQVHc7OEq3uz%2BMWBoSgWnZfLQjHkFtMKElQkoCNOiHagve%2BRvm0wDsQFG0ifZQuIQEKm37duUMH8yNPZeIxDNm3SGRPC5HiaC6qC%2B3mIHWHkfD2AZmcBF8v3NRTLpuGV6xQ6eGD8C10%2FV4J8om62wbZJTal1ESwliqV5Epkpudi8VCwXE53iJ7Hh7gzNvIpAlkSr6%2FrUgwdvIoA0zZGynaGL4swaikjB2XncjjrW7OuRA8PEKtF0gj2gIrVCiYCy4o4Ye7WgJkgkPyggIT8VEzYj6DS4IjAW%2Byd%2F2vroIs9dE84RnLu6%2FZYrzIJYzNQAfJ44C6vWT17SpFN28flH4W5svcstimE3G9sdlj0%2B6m%2FRgY0sKCdL8xb45Z2CzBJx4W3QT5qikoqjDCeuv28BjqkAbusZU%2FhHItmi4dGcg1dg9CjDCNC8uWZnR6pZPjMdkqKH31IuvyC2fLJDaONEy6RvJ3ByKrv7K5piNYJ%2FpJplCjxp%2BHrYApP7yIoo7LBqfBJSTygL61WWcTyL68tucnpVXTe8j4xCKJqryAV1y%2BqPa4KUcd%2FkjqTYhaWhscsbM3lCQv1ceZimaNZZjitvyrhSAFgUYtL8OrjD9rSzx3No%2BzcoYxE&X-Amz-Signature=ba797e36b72aa4da72943d230521f1629f5ab7b7f6fcd08d93c3810cbf8b5b17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6FBOQT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr9Zo5xeQhnyd7CQmA6xqGjJiGIXflxjgD7lV1ZNNcYAIhAMSvPKktJxhd%2Fw6KAevtVh6HYlHiTCmsR7BXnUGsfse0KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbk4dzN07X9wicDFwq3AO8NdgipbFakuNqut2Jh9zXUd5B%2BBVBbJGAgYO%2FTVQZv2nn%2BeDKRRdtJEhj%2FJz93%2Fs1LBv735TquYZ4M%2BMJbpDQO79E7vvbWwZtzJfriN4PGeXWXzbQNjJBdNDtA9p3amDipHGinXA%2FakZw7%2FFy0H1labdFBBC7eaH5ejonGY2o6U0IxjWPI8valLHbYk%2BxZN1RNTME%2BBFlCyHRK%2FXmimCrLwgYqiQcwpTnElfxJXYDBnr3TUQVHc7OEq3uz%2BMWBoSgWnZfLQjHkFtMKElQkoCNOiHagve%2BRvm0wDsQFG0ifZQuIQEKm37duUMH8yNPZeIxDNm3SGRPC5HiaC6qC%2B3mIHWHkfD2AZmcBF8v3NRTLpuGV6xQ6eGD8C10%2FV4J8om62wbZJTal1ESwliqV5Epkpudi8VCwXE53iJ7Hh7gzNvIpAlkSr6%2FrUgwdvIoA0zZGynaGL4swaikjB2XncjjrW7OuRA8PEKtF0gj2gIrVCiYCy4o4Ye7WgJkgkPyggIT8VEzYj6DS4IjAW%2Byd%2F2vroIs9dE84RnLu6%2FZYrzIJYzNQAfJ44C6vWT17SpFN28flH4W5svcstimE3G9sdlj0%2B6m%2FRgY0sKCdL8xb45Z2CzBJx4W3QT5qikoqjDCeuv28BjqkAbusZU%2FhHItmi4dGcg1dg9CjDCNC8uWZnR6pZPjMdkqKH31IuvyC2fLJDaONEy6RvJ3ByKrv7K5piNYJ%2FpJplCjxp%2BHrYApP7yIoo7LBqfBJSTygL61WWcTyL68tucnpVXTe8j4xCKJqryAV1y%2BqPa4KUcd%2FkjqTYhaWhscsbM3lCQv1ceZimaNZZjitvyrhSAFgUYtL8OrjD9rSzx3No%2BzcoYxE&X-Amz-Signature=244488b79316d04179eee5b5aa7bca72e63fbd17db826448f26b96e309d07091&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6FBOQT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr9Zo5xeQhnyd7CQmA6xqGjJiGIXflxjgD7lV1ZNNcYAIhAMSvPKktJxhd%2Fw6KAevtVh6HYlHiTCmsR7BXnUGsfse0KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbk4dzN07X9wicDFwq3AO8NdgipbFakuNqut2Jh9zXUd5B%2BBVBbJGAgYO%2FTVQZv2nn%2BeDKRRdtJEhj%2FJz93%2Fs1LBv735TquYZ4M%2BMJbpDQO79E7vvbWwZtzJfriN4PGeXWXzbQNjJBdNDtA9p3amDipHGinXA%2FakZw7%2FFy0H1labdFBBC7eaH5ejonGY2o6U0IxjWPI8valLHbYk%2BxZN1RNTME%2BBFlCyHRK%2FXmimCrLwgYqiQcwpTnElfxJXYDBnr3TUQVHc7OEq3uz%2BMWBoSgWnZfLQjHkFtMKElQkoCNOiHagve%2BRvm0wDsQFG0ifZQuIQEKm37duUMH8yNPZeIxDNm3SGRPC5HiaC6qC%2B3mIHWHkfD2AZmcBF8v3NRTLpuGV6xQ6eGD8C10%2FV4J8om62wbZJTal1ESwliqV5Epkpudi8VCwXE53iJ7Hh7gzNvIpAlkSr6%2FrUgwdvIoA0zZGynaGL4swaikjB2XncjjrW7OuRA8PEKtF0gj2gIrVCiYCy4o4Ye7WgJkgkPyggIT8VEzYj6DS4IjAW%2Byd%2F2vroIs9dE84RnLu6%2FZYrzIJYzNQAfJ44C6vWT17SpFN28flH4W5svcstimE3G9sdlj0%2B6m%2FRgY0sKCdL8xb45Z2CzBJx4W3QT5qikoqjDCeuv28BjqkAbusZU%2FhHItmi4dGcg1dg9CjDCNC8uWZnR6pZPjMdkqKH31IuvyC2fLJDaONEy6RvJ3ByKrv7K5piNYJ%2FpJplCjxp%2BHrYApP7yIoo7LBqfBJSTygL61WWcTyL68tucnpVXTe8j4xCKJqryAV1y%2BqPa4KUcd%2FkjqTYhaWhscsbM3lCQv1ceZimaNZZjitvyrhSAFgUYtL8OrjD9rSzx3No%2BzcoYxE&X-Amz-Signature=21b4caad8d0282121634dcac554829454c71816c2fc1a5fd494dd76a473ea984&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6FBOQT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr9Zo5xeQhnyd7CQmA6xqGjJiGIXflxjgD7lV1ZNNcYAIhAMSvPKktJxhd%2Fw6KAevtVh6HYlHiTCmsR7BXnUGsfse0KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbk4dzN07X9wicDFwq3AO8NdgipbFakuNqut2Jh9zXUd5B%2BBVBbJGAgYO%2FTVQZv2nn%2BeDKRRdtJEhj%2FJz93%2Fs1LBv735TquYZ4M%2BMJbpDQO79E7vvbWwZtzJfriN4PGeXWXzbQNjJBdNDtA9p3amDipHGinXA%2FakZw7%2FFy0H1labdFBBC7eaH5ejonGY2o6U0IxjWPI8valLHbYk%2BxZN1RNTME%2BBFlCyHRK%2FXmimCrLwgYqiQcwpTnElfxJXYDBnr3TUQVHc7OEq3uz%2BMWBoSgWnZfLQjHkFtMKElQkoCNOiHagve%2BRvm0wDsQFG0ifZQuIQEKm37duUMH8yNPZeIxDNm3SGRPC5HiaC6qC%2B3mIHWHkfD2AZmcBF8v3NRTLpuGV6xQ6eGD8C10%2FV4J8om62wbZJTal1ESwliqV5Epkpudi8VCwXE53iJ7Hh7gzNvIpAlkSr6%2FrUgwdvIoA0zZGynaGL4swaikjB2XncjjrW7OuRA8PEKtF0gj2gIrVCiYCy4o4Ye7WgJkgkPyggIT8VEzYj6DS4IjAW%2Byd%2F2vroIs9dE84RnLu6%2FZYrzIJYzNQAfJ44C6vWT17SpFN28flH4W5svcstimE3G9sdlj0%2B6m%2FRgY0sKCdL8xb45Z2CzBJx4W3QT5qikoqjDCeuv28BjqkAbusZU%2FhHItmi4dGcg1dg9CjDCNC8uWZnR6pZPjMdkqKH31IuvyC2fLJDaONEy6RvJ3ByKrv7K5piNYJ%2FpJplCjxp%2BHrYApP7yIoo7LBqfBJSTygL61WWcTyL68tucnpVXTe8j4xCKJqryAV1y%2BqPa4KUcd%2FkjqTYhaWhscsbM3lCQv1ceZimaNZZjitvyrhSAFgUYtL8OrjD9rSzx3No%2BzcoYxE&X-Amz-Signature=19a6877fbffe8f5de56a735b41b2eb19c824c29f04df65f53167579bd7ebc791&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
