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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUBAJI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGagnJ2m0DEPjf%2B8OXAATbgxeONHL%2FJP8RVeBzJPMfHFAiAT7%2F%2FHJ6BOg6JA3o7P0v1I0w1N2tPURXiqQx1mIjP4lCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXhQWp0I7F%2BTRg1KtwDgds7VWT4HbqRJqI92vRDqJCN6bOgNgfV0DLf5aN17GKt4F8aO7fdIwuBUqszq0VM4EsRpF9wZq5s06gPR1AQ1sE76FRo7WNZc%2BiYk6%2Fx5M8H%2BNnj7mlbVBoGQYrjLQoEWV9SeDXdBRuv1ie%2Bx%2BlA2NkIl4L0qKCdEpdlFRCuyZ%2BRuZpg2gT5wPqAdCIAyquWuS2lSGcluiqKoMgMlzFtGKJtp%2BTpGeo5PXZnzEs%2BV2vTuQSdu1FAoygJSA4ywO2lrayjIwwSPN7InpYZaD%2FGGqHfnHHO%2BdKWmGTX%2BbE%2BxoIZAKm2ywDDamJ9CVIQQt5kcCxTcpyAauFvV6qbyXjVkznrMUFf0T%2BuTcT8oPzCSG4GZ6QpH5RBOkxArvj7Lcm7wCsYUVUjsQ4BRp7r9aGMkLCjuyD8YFns8aP%2Bs%2FCDhTHJUUJedoESDX4J3exWzD1JiDBRis9BwHdD%2BmLxHrMiDOP6NudzRZEBOm5%2BZshX1rrZxhQK5ZxRPl%2FVSSBpDWYJ91jCNlKNFwZi3T42GQNvgQz37FCMNflJUsGpTIrAuMtBUCdpOJYfVoxAD1%2BO5nY3Q3A9AUhXPxXPMz07aw3pqF%2BpC55DM2NuUix4t%2BptFzKtspKA8Ug1%2FyxISQswuMK%2FwQY6pgEiTAJUkw%2FdtEGid24V%2F7Ydkam9FcBOsdadU29wTtDXCZQVuecLNWzAU1AjL3asHTrNnRRqA%2F9Q5HXzAY1CN%2FgS7Pr8%2F7C%2BoVR4Ipy1bFwQNvZwEA2Nc5l4oemqs37A5umshwMTrmA1Z4g50SZ0yPMm%2Fg7v3bV24w%2FBJGZs3RKUh3Per%2B5X%2FiyKXj%2BwFHEcxYCIpmd2OmOwvdy11LM%2FQV08DxUzVvZO&X-Amz-Signature=708dd212b9b7d5a8eb7882fd5ccd74da03e697af416ff786473b35781d3affa7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUBAJI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGagnJ2m0DEPjf%2B8OXAATbgxeONHL%2FJP8RVeBzJPMfHFAiAT7%2F%2FHJ6BOg6JA3o7P0v1I0w1N2tPURXiqQx1mIjP4lCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXhQWp0I7F%2BTRg1KtwDgds7VWT4HbqRJqI92vRDqJCN6bOgNgfV0DLf5aN17GKt4F8aO7fdIwuBUqszq0VM4EsRpF9wZq5s06gPR1AQ1sE76FRo7WNZc%2BiYk6%2Fx5M8H%2BNnj7mlbVBoGQYrjLQoEWV9SeDXdBRuv1ie%2Bx%2BlA2NkIl4L0qKCdEpdlFRCuyZ%2BRuZpg2gT5wPqAdCIAyquWuS2lSGcluiqKoMgMlzFtGKJtp%2BTpGeo5PXZnzEs%2BV2vTuQSdu1FAoygJSA4ywO2lrayjIwwSPN7InpYZaD%2FGGqHfnHHO%2BdKWmGTX%2BbE%2BxoIZAKm2ywDDamJ9CVIQQt5kcCxTcpyAauFvV6qbyXjVkznrMUFf0T%2BuTcT8oPzCSG4GZ6QpH5RBOkxArvj7Lcm7wCsYUVUjsQ4BRp7r9aGMkLCjuyD8YFns8aP%2Bs%2FCDhTHJUUJedoESDX4J3exWzD1JiDBRis9BwHdD%2BmLxHrMiDOP6NudzRZEBOm5%2BZshX1rrZxhQK5ZxRPl%2FVSSBpDWYJ91jCNlKNFwZi3T42GQNvgQz37FCMNflJUsGpTIrAuMtBUCdpOJYfVoxAD1%2BO5nY3Q3A9AUhXPxXPMz07aw3pqF%2BpC55DM2NuUix4t%2BptFzKtspKA8Ug1%2FyxISQswuMK%2FwQY6pgEiTAJUkw%2FdtEGid24V%2F7Ydkam9FcBOsdadU29wTtDXCZQVuecLNWzAU1AjL3asHTrNnRRqA%2F9Q5HXzAY1CN%2FgS7Pr8%2F7C%2BoVR4Ipy1bFwQNvZwEA2Nc5l4oemqs37A5umshwMTrmA1Z4g50SZ0yPMm%2Fg7v3bV24w%2FBJGZs3RKUh3Per%2B5X%2FiyKXj%2BwFHEcxYCIpmd2OmOwvdy11LM%2FQV08DxUzVvZO&X-Amz-Signature=ca8ba8da6a93bf3211443332947970d474c7c8fdda6c9fa3f656ab0303cf0653&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUBAJI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGagnJ2m0DEPjf%2B8OXAATbgxeONHL%2FJP8RVeBzJPMfHFAiAT7%2F%2FHJ6BOg6JA3o7P0v1I0w1N2tPURXiqQx1mIjP4lCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXhQWp0I7F%2BTRg1KtwDgds7VWT4HbqRJqI92vRDqJCN6bOgNgfV0DLf5aN17GKt4F8aO7fdIwuBUqszq0VM4EsRpF9wZq5s06gPR1AQ1sE76FRo7WNZc%2BiYk6%2Fx5M8H%2BNnj7mlbVBoGQYrjLQoEWV9SeDXdBRuv1ie%2Bx%2BlA2NkIl4L0qKCdEpdlFRCuyZ%2BRuZpg2gT5wPqAdCIAyquWuS2lSGcluiqKoMgMlzFtGKJtp%2BTpGeo5PXZnzEs%2BV2vTuQSdu1FAoygJSA4ywO2lrayjIwwSPN7InpYZaD%2FGGqHfnHHO%2BdKWmGTX%2BbE%2BxoIZAKm2ywDDamJ9CVIQQt5kcCxTcpyAauFvV6qbyXjVkznrMUFf0T%2BuTcT8oPzCSG4GZ6QpH5RBOkxArvj7Lcm7wCsYUVUjsQ4BRp7r9aGMkLCjuyD8YFns8aP%2Bs%2FCDhTHJUUJedoESDX4J3exWzD1JiDBRis9BwHdD%2BmLxHrMiDOP6NudzRZEBOm5%2BZshX1rrZxhQK5ZxRPl%2FVSSBpDWYJ91jCNlKNFwZi3T42GQNvgQz37FCMNflJUsGpTIrAuMtBUCdpOJYfVoxAD1%2BO5nY3Q3A9AUhXPxXPMz07aw3pqF%2BpC55DM2NuUix4t%2BptFzKtspKA8Ug1%2FyxISQswuMK%2FwQY6pgEiTAJUkw%2FdtEGid24V%2F7Ydkam9FcBOsdadU29wTtDXCZQVuecLNWzAU1AjL3asHTrNnRRqA%2F9Q5HXzAY1CN%2FgS7Pr8%2F7C%2BoVR4Ipy1bFwQNvZwEA2Nc5l4oemqs37A5umshwMTrmA1Z4g50SZ0yPMm%2Fg7v3bV24w%2FBJGZs3RKUh3Per%2B5X%2FiyKXj%2BwFHEcxYCIpmd2OmOwvdy11LM%2FQV08DxUzVvZO&X-Amz-Signature=f4be16469b0fcfcc90404438e4dee3bc3d384dd40a096e21eb81a1a299e8e254&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUBAJI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGagnJ2m0DEPjf%2B8OXAATbgxeONHL%2FJP8RVeBzJPMfHFAiAT7%2F%2FHJ6BOg6JA3o7P0v1I0w1N2tPURXiqQx1mIjP4lCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXhQWp0I7F%2BTRg1KtwDgds7VWT4HbqRJqI92vRDqJCN6bOgNgfV0DLf5aN17GKt4F8aO7fdIwuBUqszq0VM4EsRpF9wZq5s06gPR1AQ1sE76FRo7WNZc%2BiYk6%2Fx5M8H%2BNnj7mlbVBoGQYrjLQoEWV9SeDXdBRuv1ie%2Bx%2BlA2NkIl4L0qKCdEpdlFRCuyZ%2BRuZpg2gT5wPqAdCIAyquWuS2lSGcluiqKoMgMlzFtGKJtp%2BTpGeo5PXZnzEs%2BV2vTuQSdu1FAoygJSA4ywO2lrayjIwwSPN7InpYZaD%2FGGqHfnHHO%2BdKWmGTX%2BbE%2BxoIZAKm2ywDDamJ9CVIQQt5kcCxTcpyAauFvV6qbyXjVkznrMUFf0T%2BuTcT8oPzCSG4GZ6QpH5RBOkxArvj7Lcm7wCsYUVUjsQ4BRp7r9aGMkLCjuyD8YFns8aP%2Bs%2FCDhTHJUUJedoESDX4J3exWzD1JiDBRis9BwHdD%2BmLxHrMiDOP6NudzRZEBOm5%2BZshX1rrZxhQK5ZxRPl%2FVSSBpDWYJ91jCNlKNFwZi3T42GQNvgQz37FCMNflJUsGpTIrAuMtBUCdpOJYfVoxAD1%2BO5nY3Q3A9AUhXPxXPMz07aw3pqF%2BpC55DM2NuUix4t%2BptFzKtspKA8Ug1%2FyxISQswuMK%2FwQY6pgEiTAJUkw%2FdtEGid24V%2F7Ydkam9FcBOsdadU29wTtDXCZQVuecLNWzAU1AjL3asHTrNnRRqA%2F9Q5HXzAY1CN%2FgS7Pr8%2F7C%2BoVR4Ipy1bFwQNvZwEA2Nc5l4oemqs37A5umshwMTrmA1Z4g50SZ0yPMm%2Fg7v3bV24w%2FBJGZs3RKUh3Per%2B5X%2FiyKXj%2BwFHEcxYCIpmd2OmOwvdy11LM%2FQV08DxUzVvZO&X-Amz-Signature=c602c6fac480f813cc589d11b8a0157738c5e0a16e2cc2126342c5bf5854cc31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUBAJI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGagnJ2m0DEPjf%2B8OXAATbgxeONHL%2FJP8RVeBzJPMfHFAiAT7%2F%2FHJ6BOg6JA3o7P0v1I0w1N2tPURXiqQx1mIjP4lCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJXhQWp0I7F%2BTRg1KtwDgds7VWT4HbqRJqI92vRDqJCN6bOgNgfV0DLf5aN17GKt4F8aO7fdIwuBUqszq0VM4EsRpF9wZq5s06gPR1AQ1sE76FRo7WNZc%2BiYk6%2Fx5M8H%2BNnj7mlbVBoGQYrjLQoEWV9SeDXdBRuv1ie%2Bx%2BlA2NkIl4L0qKCdEpdlFRCuyZ%2BRuZpg2gT5wPqAdCIAyquWuS2lSGcluiqKoMgMlzFtGKJtp%2BTpGeo5PXZnzEs%2BV2vTuQSdu1FAoygJSA4ywO2lrayjIwwSPN7InpYZaD%2FGGqHfnHHO%2BdKWmGTX%2BbE%2BxoIZAKm2ywDDamJ9CVIQQt5kcCxTcpyAauFvV6qbyXjVkznrMUFf0T%2BuTcT8oPzCSG4GZ6QpH5RBOkxArvj7Lcm7wCsYUVUjsQ4BRp7r9aGMkLCjuyD8YFns8aP%2Bs%2FCDhTHJUUJedoESDX4J3exWzD1JiDBRis9BwHdD%2BmLxHrMiDOP6NudzRZEBOm5%2BZshX1rrZxhQK5ZxRPl%2FVSSBpDWYJ91jCNlKNFwZi3T42GQNvgQz37FCMNflJUsGpTIrAuMtBUCdpOJYfVoxAD1%2BO5nY3Q3A9AUhXPxXPMz07aw3pqF%2BpC55DM2NuUix4t%2BptFzKtspKA8Ug1%2FyxISQswuMK%2FwQY6pgEiTAJUkw%2FdtEGid24V%2F7Ydkam9FcBOsdadU29wTtDXCZQVuecLNWzAU1AjL3asHTrNnRRqA%2F9Q5HXzAY1CN%2FgS7Pr8%2F7C%2BoVR4Ipy1bFwQNvZwEA2Nc5l4oemqs37A5umshwMTrmA1Z4g50SZ0yPMm%2Fg7v3bV24w%2FBJGZs3RKUh3Per%2B5X%2FiyKXj%2BwFHEcxYCIpmd2OmOwvdy11LM%2FQV08DxUzVvZO&X-Amz-Signature=47b5e91b316ffbc9e3feb55078f761cca3020c682d8ee11caf54d41e6f29793a&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
