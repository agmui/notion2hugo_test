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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635K2HUPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOcAINh%2B29zFq2C8pyH4fbSbv4EcYJjMXX5TI9yE0AAIhANUEFlCSncI6JeERMn3FxUjQ06O2hqLibXDDQ25BFdssKv8DCCgQABoMNjM3NDIzMTgzODA1IgzKAPWPCOY5NoLErzcq3AOFvRXav9OwxQzFayCqyuQaXMN%2FRoTtKh9CfSh055zcw1TFx9ji13kliRUWJXi7il1eJi8D4rDMD0lqdRnEFtPgvo8LUye3LVExsUKyroxl1syYqbZ3R4XUZprf0vXhJfqy5SXOhjOocytmMZYOarhRheB0amBlglU%2FR2bvPHE6bvkTXFviGP5Lfd9VQK2vfzUM4LPE6a5Dsb9b6fMFGQDp0W4xuMVNuT3E6z3B9AeGQWO5440cncdg%2Feq%2FnCn7FvJO%2FPEjpYI4VO2ObTtYXTAVgZWa3VFtV0N4yMEl82QbCBui96atvIjTbyC9hLsX0SPZFZVhL9EllS%2B4IY0COBy4y2S3lkuoFzG41zgliqpWwh7%2FqSW0XdmVawqSC4UPEoxUMQUrpxh0cBoM4OkI%2B0wSd8ne8Uzf13B%2FG0f%2FMscYkYiJVtypbcLTWtt1suf%2BGtwGdSoNGHyJx%2FNhhMheUi6BhjDbUYRuon%2FULR250yswpbTe%2BzzSZ6splfnpdU%2FBiEhF4JO8Vw6b3jcCTkRl4LutW5WGhHfUptNLTat0%2Bs1IlJK9pE0Pl5w4BAq8mIm6iytIUX3xwEE%2BAEWxJES8bG%2F3ZXOxTX%2FQStbYBOR%2FViOMzXEBSBbzIV%2FSPPsqVDCB5azABjqkAVWnj%2FJigceBRg3gvp%2BQKIRjFioq17%2Fc5g%2Bxkp%2Bs6JMf2UNovMnnBcHZ1TX0F76cztN3PdxjFgBOvrtCXMRI%2FpF9HDpkj7SkwsCl4rovzDOVu3fWVJAqmdH20rFP7dl%2BCLjnV4zO54jRYX8qvdM6G4PcPj2d42ItqhUcJjK36YB%2BsRo6VMdJI%2BWyWPLE6a29fYUNCtUkNauE5MBLFZFxptJhkdAs&X-Amz-Signature=8a692e1bcc741bd4072e97b0d05d0d8e50ac79e081a013913d7718db790f1b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635K2HUPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOcAINh%2B29zFq2C8pyH4fbSbv4EcYJjMXX5TI9yE0AAIhANUEFlCSncI6JeERMn3FxUjQ06O2hqLibXDDQ25BFdssKv8DCCgQABoMNjM3NDIzMTgzODA1IgzKAPWPCOY5NoLErzcq3AOFvRXav9OwxQzFayCqyuQaXMN%2FRoTtKh9CfSh055zcw1TFx9ji13kliRUWJXi7il1eJi8D4rDMD0lqdRnEFtPgvo8LUye3LVExsUKyroxl1syYqbZ3R4XUZprf0vXhJfqy5SXOhjOocytmMZYOarhRheB0amBlglU%2FR2bvPHE6bvkTXFviGP5Lfd9VQK2vfzUM4LPE6a5Dsb9b6fMFGQDp0W4xuMVNuT3E6z3B9AeGQWO5440cncdg%2Feq%2FnCn7FvJO%2FPEjpYI4VO2ObTtYXTAVgZWa3VFtV0N4yMEl82QbCBui96atvIjTbyC9hLsX0SPZFZVhL9EllS%2B4IY0COBy4y2S3lkuoFzG41zgliqpWwh7%2FqSW0XdmVawqSC4UPEoxUMQUrpxh0cBoM4OkI%2B0wSd8ne8Uzf13B%2FG0f%2FMscYkYiJVtypbcLTWtt1suf%2BGtwGdSoNGHyJx%2FNhhMheUi6BhjDbUYRuon%2FULR250yswpbTe%2BzzSZ6splfnpdU%2FBiEhF4JO8Vw6b3jcCTkRl4LutW5WGhHfUptNLTat0%2Bs1IlJK9pE0Pl5w4BAq8mIm6iytIUX3xwEE%2BAEWxJES8bG%2F3ZXOxTX%2FQStbYBOR%2FViOMzXEBSBbzIV%2FSPPsqVDCB5azABjqkAVWnj%2FJigceBRg3gvp%2BQKIRjFioq17%2Fc5g%2Bxkp%2Bs6JMf2UNovMnnBcHZ1TX0F76cztN3PdxjFgBOvrtCXMRI%2FpF9HDpkj7SkwsCl4rovzDOVu3fWVJAqmdH20rFP7dl%2BCLjnV4zO54jRYX8qvdM6G4PcPj2d42ItqhUcJjK36YB%2BsRo6VMdJI%2BWyWPLE6a29fYUNCtUkNauE5MBLFZFxptJhkdAs&X-Amz-Signature=f1b4e8990307d0292dda8aeecd8500b69885527c732f0d6b6bc281d7f77f24c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635K2HUPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOcAINh%2B29zFq2C8pyH4fbSbv4EcYJjMXX5TI9yE0AAIhANUEFlCSncI6JeERMn3FxUjQ06O2hqLibXDDQ25BFdssKv8DCCgQABoMNjM3NDIzMTgzODA1IgzKAPWPCOY5NoLErzcq3AOFvRXav9OwxQzFayCqyuQaXMN%2FRoTtKh9CfSh055zcw1TFx9ji13kliRUWJXi7il1eJi8D4rDMD0lqdRnEFtPgvo8LUye3LVExsUKyroxl1syYqbZ3R4XUZprf0vXhJfqy5SXOhjOocytmMZYOarhRheB0amBlglU%2FR2bvPHE6bvkTXFviGP5Lfd9VQK2vfzUM4LPE6a5Dsb9b6fMFGQDp0W4xuMVNuT3E6z3B9AeGQWO5440cncdg%2Feq%2FnCn7FvJO%2FPEjpYI4VO2ObTtYXTAVgZWa3VFtV0N4yMEl82QbCBui96atvIjTbyC9hLsX0SPZFZVhL9EllS%2B4IY0COBy4y2S3lkuoFzG41zgliqpWwh7%2FqSW0XdmVawqSC4UPEoxUMQUrpxh0cBoM4OkI%2B0wSd8ne8Uzf13B%2FG0f%2FMscYkYiJVtypbcLTWtt1suf%2BGtwGdSoNGHyJx%2FNhhMheUi6BhjDbUYRuon%2FULR250yswpbTe%2BzzSZ6splfnpdU%2FBiEhF4JO8Vw6b3jcCTkRl4LutW5WGhHfUptNLTat0%2Bs1IlJK9pE0Pl5w4BAq8mIm6iytIUX3xwEE%2BAEWxJES8bG%2F3ZXOxTX%2FQStbYBOR%2FViOMzXEBSBbzIV%2FSPPsqVDCB5azABjqkAVWnj%2FJigceBRg3gvp%2BQKIRjFioq17%2Fc5g%2Bxkp%2Bs6JMf2UNovMnnBcHZ1TX0F76cztN3PdxjFgBOvrtCXMRI%2FpF9HDpkj7SkwsCl4rovzDOVu3fWVJAqmdH20rFP7dl%2BCLjnV4zO54jRYX8qvdM6G4PcPj2d42ItqhUcJjK36YB%2BsRo6VMdJI%2BWyWPLE6a29fYUNCtUkNauE5MBLFZFxptJhkdAs&X-Amz-Signature=d11bc3f955bed71ee47e9bd88090b3257563a91a6a83576a1ddb02de697945bd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635K2HUPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOcAINh%2B29zFq2C8pyH4fbSbv4EcYJjMXX5TI9yE0AAIhANUEFlCSncI6JeERMn3FxUjQ06O2hqLibXDDQ25BFdssKv8DCCgQABoMNjM3NDIzMTgzODA1IgzKAPWPCOY5NoLErzcq3AOFvRXav9OwxQzFayCqyuQaXMN%2FRoTtKh9CfSh055zcw1TFx9ji13kliRUWJXi7il1eJi8D4rDMD0lqdRnEFtPgvo8LUye3LVExsUKyroxl1syYqbZ3R4XUZprf0vXhJfqy5SXOhjOocytmMZYOarhRheB0amBlglU%2FR2bvPHE6bvkTXFviGP5Lfd9VQK2vfzUM4LPE6a5Dsb9b6fMFGQDp0W4xuMVNuT3E6z3B9AeGQWO5440cncdg%2Feq%2FnCn7FvJO%2FPEjpYI4VO2ObTtYXTAVgZWa3VFtV0N4yMEl82QbCBui96atvIjTbyC9hLsX0SPZFZVhL9EllS%2B4IY0COBy4y2S3lkuoFzG41zgliqpWwh7%2FqSW0XdmVawqSC4UPEoxUMQUrpxh0cBoM4OkI%2B0wSd8ne8Uzf13B%2FG0f%2FMscYkYiJVtypbcLTWtt1suf%2BGtwGdSoNGHyJx%2FNhhMheUi6BhjDbUYRuon%2FULR250yswpbTe%2BzzSZ6splfnpdU%2FBiEhF4JO8Vw6b3jcCTkRl4LutW5WGhHfUptNLTat0%2Bs1IlJK9pE0Pl5w4BAq8mIm6iytIUX3xwEE%2BAEWxJES8bG%2F3ZXOxTX%2FQStbYBOR%2FViOMzXEBSBbzIV%2FSPPsqVDCB5azABjqkAVWnj%2FJigceBRg3gvp%2BQKIRjFioq17%2Fc5g%2Bxkp%2Bs6JMf2UNovMnnBcHZ1TX0F76cztN3PdxjFgBOvrtCXMRI%2FpF9HDpkj7SkwsCl4rovzDOVu3fWVJAqmdH20rFP7dl%2BCLjnV4zO54jRYX8qvdM6G4PcPj2d42ItqhUcJjK36YB%2BsRo6VMdJI%2BWyWPLE6a29fYUNCtUkNauE5MBLFZFxptJhkdAs&X-Amz-Signature=1422723023c9d803d901b27619e1d3ee65e005af7d4dbcbbebc0ca1a4c2a7c13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635K2HUPJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOcAINh%2B29zFq2C8pyH4fbSbv4EcYJjMXX5TI9yE0AAIhANUEFlCSncI6JeERMn3FxUjQ06O2hqLibXDDQ25BFdssKv8DCCgQABoMNjM3NDIzMTgzODA1IgzKAPWPCOY5NoLErzcq3AOFvRXav9OwxQzFayCqyuQaXMN%2FRoTtKh9CfSh055zcw1TFx9ji13kliRUWJXi7il1eJi8D4rDMD0lqdRnEFtPgvo8LUye3LVExsUKyroxl1syYqbZ3R4XUZprf0vXhJfqy5SXOhjOocytmMZYOarhRheB0amBlglU%2FR2bvPHE6bvkTXFviGP5Lfd9VQK2vfzUM4LPE6a5Dsb9b6fMFGQDp0W4xuMVNuT3E6z3B9AeGQWO5440cncdg%2Feq%2FnCn7FvJO%2FPEjpYI4VO2ObTtYXTAVgZWa3VFtV0N4yMEl82QbCBui96atvIjTbyC9hLsX0SPZFZVhL9EllS%2B4IY0COBy4y2S3lkuoFzG41zgliqpWwh7%2FqSW0XdmVawqSC4UPEoxUMQUrpxh0cBoM4OkI%2B0wSd8ne8Uzf13B%2FG0f%2FMscYkYiJVtypbcLTWtt1suf%2BGtwGdSoNGHyJx%2FNhhMheUi6BhjDbUYRuon%2FULR250yswpbTe%2BzzSZ6splfnpdU%2FBiEhF4JO8Vw6b3jcCTkRl4LutW5WGhHfUptNLTat0%2Bs1IlJK9pE0Pl5w4BAq8mIm6iytIUX3xwEE%2BAEWxJES8bG%2F3ZXOxTX%2FQStbYBOR%2FViOMzXEBSBbzIV%2FSPPsqVDCB5azABjqkAVWnj%2FJigceBRg3gvp%2BQKIRjFioq17%2Fc5g%2Bxkp%2Bs6JMf2UNovMnnBcHZ1TX0F76cztN3PdxjFgBOvrtCXMRI%2FpF9HDpkj7SkwsCl4rovzDOVu3fWVJAqmdH20rFP7dl%2BCLjnV4zO54jRYX8qvdM6G4PcPj2d42ItqhUcJjK36YB%2BsRo6VMdJI%2BWyWPLE6a29fYUNCtUkNauE5MBLFZFxptJhkdAs&X-Amz-Signature=f2f3a06f43b3671124a63e6134750960850a5937c06f736d2da5f3d74a226228&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
