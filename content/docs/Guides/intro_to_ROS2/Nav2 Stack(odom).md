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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZ5YAZP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzTZYi4dhV%2FRnWXgx7Ic%2FtCdOVLRHYJJnvNnHG9xGJAIhAIK2dyCjUcxKPywjtay6iGQqfmd8eksfaLwtLNJf2SK1Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx9DxfttLG3nEqpSaoq3APjMNbh6rv%2BVg1KVn8oQqnupiQoFkvSRbWBm%2BIakjP5AJSJ%2BV5cdfQ9wzdY5Gk1IaXgRW3Hw%2BCUTCQrAClLZp56cxhFHUCemDOFJBqaPRI2E%2FhJHAZSLnMZB%2B3wD%2BRR4aIy37lf671gjdBniX8ettQa54MAXbuKQUiScL04iFzorRqfctaZ6yhrYVt43lrVZvEFGpOotQGKC0kLDrXKCFhCr5kizaQWdCSy%2FU60nzgakVaWJ1tPEcZYAFjSRlRLM8jzmk4yxrNw3MV2dNkA7%2BvqctEODXL9yOX1CFCukvtV%2BR0IHZOTzf7s%2BolTKKurelgEF0W7%2FJfE%2Ff8UVMu7%2BXxVHO4ML16GjJKf017wfGTKN%2B4UsNbmfrjYpYobe6LQJIxcKSenkyNhSqucBHztPJ3YrznbpqGhB%2BFLZNYU%2Fj27XlJKgAENOHgm%2FcD%2BzOWgYJjK%2BsF3AI%2FX8o5Kxk8HuRd1YtZcksQwzScey89dm0TR0qDEFf0tzW8%2B2pbi4GPMDNbPMj5YCNboE2jYdmQ3SIgx%2F8nkIAMAK3yVJ2OVDgVryX%2Fc9RBPjj170H3Htf9NnrP4uIJ%2F2GjcshVQ1lHFcyCVucUrnduerSqbDv9P5lOxdWmlI0%2BdWOwCUa2msDCo%2FuXABjqkAUUa9jf%2B%2Bfv6FkmJ9opuxcRp04g5pThKW4qMibyWdfE7nT6a9tBSOMCGSb9vhumEL8nymw4Pw3ZKa6fmhEJx%2Foc5FMwk2omuT0fPkN0LnpH4pA%2FftHe%2BbhRe0GdWAHo%2FmNeI%2BQUgFJk2D5D1XB%2BJRTB%2BSe3%2ByFa%2BfQ5VulflCWM3TDb1VZonrkuatUr98X42la3UwueRBNM%2Fh%2Fparu%2FvlRfai3Rh&X-Amz-Signature=ab0f7b54aba228cc137686033fa4deb7df6a6189469cd3e6c23ff5da2b3c582e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZ5YAZP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzTZYi4dhV%2FRnWXgx7Ic%2FtCdOVLRHYJJnvNnHG9xGJAIhAIK2dyCjUcxKPywjtay6iGQqfmd8eksfaLwtLNJf2SK1Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx9DxfttLG3nEqpSaoq3APjMNbh6rv%2BVg1KVn8oQqnupiQoFkvSRbWBm%2BIakjP5AJSJ%2BV5cdfQ9wzdY5Gk1IaXgRW3Hw%2BCUTCQrAClLZp56cxhFHUCemDOFJBqaPRI2E%2FhJHAZSLnMZB%2B3wD%2BRR4aIy37lf671gjdBniX8ettQa54MAXbuKQUiScL04iFzorRqfctaZ6yhrYVt43lrVZvEFGpOotQGKC0kLDrXKCFhCr5kizaQWdCSy%2FU60nzgakVaWJ1tPEcZYAFjSRlRLM8jzmk4yxrNw3MV2dNkA7%2BvqctEODXL9yOX1CFCukvtV%2BR0IHZOTzf7s%2BolTKKurelgEF0W7%2FJfE%2Ff8UVMu7%2BXxVHO4ML16GjJKf017wfGTKN%2B4UsNbmfrjYpYobe6LQJIxcKSenkyNhSqucBHztPJ3YrznbpqGhB%2BFLZNYU%2Fj27XlJKgAENOHgm%2FcD%2BzOWgYJjK%2BsF3AI%2FX8o5Kxk8HuRd1YtZcksQwzScey89dm0TR0qDEFf0tzW8%2B2pbi4GPMDNbPMj5YCNboE2jYdmQ3SIgx%2F8nkIAMAK3yVJ2OVDgVryX%2Fc9RBPjj170H3Htf9NnrP4uIJ%2F2GjcshVQ1lHFcyCVucUrnduerSqbDv9P5lOxdWmlI0%2BdWOwCUa2msDCo%2FuXABjqkAUUa9jf%2B%2Bfv6FkmJ9opuxcRp04g5pThKW4qMibyWdfE7nT6a9tBSOMCGSb9vhumEL8nymw4Pw3ZKa6fmhEJx%2Foc5FMwk2omuT0fPkN0LnpH4pA%2FftHe%2BbhRe0GdWAHo%2FmNeI%2BQUgFJk2D5D1XB%2BJRTB%2BSe3%2ByFa%2BfQ5VulflCWM3TDb1VZonrkuatUr98X42la3UwueRBNM%2Fh%2Fparu%2FvlRfai3Rh&X-Amz-Signature=e15da11950cd336d7fbcc9805c16bfc88b09276cb5c07f21fd318e5f85b238ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZ5YAZP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzTZYi4dhV%2FRnWXgx7Ic%2FtCdOVLRHYJJnvNnHG9xGJAIhAIK2dyCjUcxKPywjtay6iGQqfmd8eksfaLwtLNJf2SK1Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx9DxfttLG3nEqpSaoq3APjMNbh6rv%2BVg1KVn8oQqnupiQoFkvSRbWBm%2BIakjP5AJSJ%2BV5cdfQ9wzdY5Gk1IaXgRW3Hw%2BCUTCQrAClLZp56cxhFHUCemDOFJBqaPRI2E%2FhJHAZSLnMZB%2B3wD%2BRR4aIy37lf671gjdBniX8ettQa54MAXbuKQUiScL04iFzorRqfctaZ6yhrYVt43lrVZvEFGpOotQGKC0kLDrXKCFhCr5kizaQWdCSy%2FU60nzgakVaWJ1tPEcZYAFjSRlRLM8jzmk4yxrNw3MV2dNkA7%2BvqctEODXL9yOX1CFCukvtV%2BR0IHZOTzf7s%2BolTKKurelgEF0W7%2FJfE%2Ff8UVMu7%2BXxVHO4ML16GjJKf017wfGTKN%2B4UsNbmfrjYpYobe6LQJIxcKSenkyNhSqucBHztPJ3YrznbpqGhB%2BFLZNYU%2Fj27XlJKgAENOHgm%2FcD%2BzOWgYJjK%2BsF3AI%2FX8o5Kxk8HuRd1YtZcksQwzScey89dm0TR0qDEFf0tzW8%2B2pbi4GPMDNbPMj5YCNboE2jYdmQ3SIgx%2F8nkIAMAK3yVJ2OVDgVryX%2Fc9RBPjj170H3Htf9NnrP4uIJ%2F2GjcshVQ1lHFcyCVucUrnduerSqbDv9P5lOxdWmlI0%2BdWOwCUa2msDCo%2FuXABjqkAUUa9jf%2B%2Bfv6FkmJ9opuxcRp04g5pThKW4qMibyWdfE7nT6a9tBSOMCGSb9vhumEL8nymw4Pw3ZKa6fmhEJx%2Foc5FMwk2omuT0fPkN0LnpH4pA%2FftHe%2BbhRe0GdWAHo%2FmNeI%2BQUgFJk2D5D1XB%2BJRTB%2BSe3%2ByFa%2BfQ5VulflCWM3TDb1VZonrkuatUr98X42la3UwueRBNM%2Fh%2Fparu%2FvlRfai3Rh&X-Amz-Signature=2599f93d5717bab5dc82050b57e2a0daa45ae5dfe16b0c2b3f5d3421e2001b99&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZ5YAZP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzTZYi4dhV%2FRnWXgx7Ic%2FtCdOVLRHYJJnvNnHG9xGJAIhAIK2dyCjUcxKPywjtay6iGQqfmd8eksfaLwtLNJf2SK1Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx9DxfttLG3nEqpSaoq3APjMNbh6rv%2BVg1KVn8oQqnupiQoFkvSRbWBm%2BIakjP5AJSJ%2BV5cdfQ9wzdY5Gk1IaXgRW3Hw%2BCUTCQrAClLZp56cxhFHUCemDOFJBqaPRI2E%2FhJHAZSLnMZB%2B3wD%2BRR4aIy37lf671gjdBniX8ettQa54MAXbuKQUiScL04iFzorRqfctaZ6yhrYVt43lrVZvEFGpOotQGKC0kLDrXKCFhCr5kizaQWdCSy%2FU60nzgakVaWJ1tPEcZYAFjSRlRLM8jzmk4yxrNw3MV2dNkA7%2BvqctEODXL9yOX1CFCukvtV%2BR0IHZOTzf7s%2BolTKKurelgEF0W7%2FJfE%2Ff8UVMu7%2BXxVHO4ML16GjJKf017wfGTKN%2B4UsNbmfrjYpYobe6LQJIxcKSenkyNhSqucBHztPJ3YrznbpqGhB%2BFLZNYU%2Fj27XlJKgAENOHgm%2FcD%2BzOWgYJjK%2BsF3AI%2FX8o5Kxk8HuRd1YtZcksQwzScey89dm0TR0qDEFf0tzW8%2B2pbi4GPMDNbPMj5YCNboE2jYdmQ3SIgx%2F8nkIAMAK3yVJ2OVDgVryX%2Fc9RBPjj170H3Htf9NnrP4uIJ%2F2GjcshVQ1lHFcyCVucUrnduerSqbDv9P5lOxdWmlI0%2BdWOwCUa2msDCo%2FuXABjqkAUUa9jf%2B%2Bfv6FkmJ9opuxcRp04g5pThKW4qMibyWdfE7nT6a9tBSOMCGSb9vhumEL8nymw4Pw3ZKa6fmhEJx%2Foc5FMwk2omuT0fPkN0LnpH4pA%2FftHe%2BbhRe0GdWAHo%2FmNeI%2BQUgFJk2D5D1XB%2BJRTB%2BSe3%2ByFa%2BfQ5VulflCWM3TDb1VZonrkuatUr98X42la3UwueRBNM%2Fh%2Fparu%2FvlRfai3Rh&X-Amz-Signature=7b7c9e7d095fefd93f66a5e47b0d27d3350c98596616b2783cab3a4488d9da4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZ5YAZP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzTZYi4dhV%2FRnWXgx7Ic%2FtCdOVLRHYJJnvNnHG9xGJAIhAIK2dyCjUcxKPywjtay6iGQqfmd8eksfaLwtLNJf2SK1Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx9DxfttLG3nEqpSaoq3APjMNbh6rv%2BVg1KVn8oQqnupiQoFkvSRbWBm%2BIakjP5AJSJ%2BV5cdfQ9wzdY5Gk1IaXgRW3Hw%2BCUTCQrAClLZp56cxhFHUCemDOFJBqaPRI2E%2FhJHAZSLnMZB%2B3wD%2BRR4aIy37lf671gjdBniX8ettQa54MAXbuKQUiScL04iFzorRqfctaZ6yhrYVt43lrVZvEFGpOotQGKC0kLDrXKCFhCr5kizaQWdCSy%2FU60nzgakVaWJ1tPEcZYAFjSRlRLM8jzmk4yxrNw3MV2dNkA7%2BvqctEODXL9yOX1CFCukvtV%2BR0IHZOTzf7s%2BolTKKurelgEF0W7%2FJfE%2Ff8UVMu7%2BXxVHO4ML16GjJKf017wfGTKN%2B4UsNbmfrjYpYobe6LQJIxcKSenkyNhSqucBHztPJ3YrznbpqGhB%2BFLZNYU%2Fj27XlJKgAENOHgm%2FcD%2BzOWgYJjK%2BsF3AI%2FX8o5Kxk8HuRd1YtZcksQwzScey89dm0TR0qDEFf0tzW8%2B2pbi4GPMDNbPMj5YCNboE2jYdmQ3SIgx%2F8nkIAMAK3yVJ2OVDgVryX%2Fc9RBPjj170H3Htf9NnrP4uIJ%2F2GjcshVQ1lHFcyCVucUrnduerSqbDv9P5lOxdWmlI0%2BdWOwCUa2msDCo%2FuXABjqkAUUa9jf%2B%2Bfv6FkmJ9opuxcRp04g5pThKW4qMibyWdfE7nT6a9tBSOMCGSb9vhumEL8nymw4Pw3ZKa6fmhEJx%2Foc5FMwk2omuT0fPkN0LnpH4pA%2FftHe%2BbhRe0GdWAHo%2FmNeI%2BQUgFJk2D5D1XB%2BJRTB%2BSe3%2ByFa%2BfQ5VulflCWM3TDb1VZonrkuatUr98X42la3UwueRBNM%2Fh%2Fparu%2FvlRfai3Rh&X-Amz-Signature=b9f7456de85d223fca60fb401dce365054f76fd9a7c85aad5b5014ca694af206&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
