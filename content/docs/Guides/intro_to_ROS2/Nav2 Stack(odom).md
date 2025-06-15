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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=f9088c65d3b685ddacdbe6b3bd9038d04f756b208b37ea088705a448282d0ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=8b0de0f1e004fd2b9dea761c553a99e12dbc5ec0fce4a4e6c369d115407cfbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=85cfa3236c38a7a885979de5379ddf1cb4c3442a3d54330202438dfdab02d423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=b0ee90e979679f21bc6317fcec8cd88949082b5899765f0f7a63f6ce8341e7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=8d7e7596eb66fe630dcaa6e1ad5c690bf79266aac74c9b68666852f6c2e40924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
