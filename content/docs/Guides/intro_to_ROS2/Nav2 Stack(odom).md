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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBH2R4GF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGOUlvGbz7tu%2FaX%2BnSC%2FISmWc7xg3v%2Fe2xAz1d%2BN3nqXAiBDJGaMnaHOHU7qhxM4UmQAlcqGvJgvLMYF8RzaTV%2BGAyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKIhmypcHUBBsJV0eKtwDAeDFk6v0baNPVrccuze5ZXM0ZFZ1RGdkh69HvYLRmCcsVt9xZWlOcSrQ%2FenN4uE5i08YU0BkEO3SAt%2FxB1FK2%2BSyrRAorAGj%2Bci1YOn7iv41ERel%2BbltOLu83KXPHCMmHwRs5cI3M3VSnxyt5qIr2o0jvrAYFGgqi8b6X9UlWrul9x6KqnCqADFrRMQ3u%2FkZBP523Uwv42nA4SUm80tKMoNNdx9kViERPApMTDsH5R2I%2BXrFe4xqHOI10aKdi8u51QSoRBkrwRDa6TT2IlW6LHskqMtIwxJNMbQpwy1DUJVAAjODAD00pd%2BrMqeVEpaYHe%2Fg4J7Xf2ImLkziOwBWAi3pz9LZztGfoOo4TfJPkgBRNEha0EHtsVf4SsOoXG4N%2BUSmGD21uY4rMhdO0Nzxhh%2BAfNCDxE9RsHI7H5A%2FTlGremf2qNW37D%2BCM5tX8hYD%2BCmGHO%2B8eaJbH4MdGxnRTe0T0kyN%2F9kqQp49ZQggYvn8PpepJLdTA8r4bdWyvnXDvjzc8lylENY2CeCCD6qs1aV5KfNYbVgNIiBbWdSnUky23dGwJGqjvPE%2BawNOWtUAghYRf5%2FQ2AFPYJB%2BHv87j%2FiBJIjKQTnl7s%2BhvaNFuow%2F1WOU67IgtKC1Vncw27HYwwY6pgFP1g5HLZSXLJvBhHEV1PdDWGtm0m0BR7MYsR5L%2FQohmRt2P7XktzFzbuEBWfiOF0uq%2B0w8pHY5MP4Zb8IGOAOdo8hiogqtSJrKEUfzYg3R%2FehAwE6oFsMz8hOwkMzxOOBnCNcZCFRuhTQCJ5fCAUbHiIV4Z74eN9cPThAfqY4gr0mI6YJuCvsnx3%2FLlWiSI6%2BEyr5ZKSkUSWRFWVnAE0TAUehuzFBf&X-Amz-Signature=c3f06bf75fdb62630e95e530cbc81b4dd1655fc2819e8823fa3ad4d6aabbb4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBH2R4GF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGOUlvGbz7tu%2FaX%2BnSC%2FISmWc7xg3v%2Fe2xAz1d%2BN3nqXAiBDJGaMnaHOHU7qhxM4UmQAlcqGvJgvLMYF8RzaTV%2BGAyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKIhmypcHUBBsJV0eKtwDAeDFk6v0baNPVrccuze5ZXM0ZFZ1RGdkh69HvYLRmCcsVt9xZWlOcSrQ%2FenN4uE5i08YU0BkEO3SAt%2FxB1FK2%2BSyrRAorAGj%2Bci1YOn7iv41ERel%2BbltOLu83KXPHCMmHwRs5cI3M3VSnxyt5qIr2o0jvrAYFGgqi8b6X9UlWrul9x6KqnCqADFrRMQ3u%2FkZBP523Uwv42nA4SUm80tKMoNNdx9kViERPApMTDsH5R2I%2BXrFe4xqHOI10aKdi8u51QSoRBkrwRDa6TT2IlW6LHskqMtIwxJNMbQpwy1DUJVAAjODAD00pd%2BrMqeVEpaYHe%2Fg4J7Xf2ImLkziOwBWAi3pz9LZztGfoOo4TfJPkgBRNEha0EHtsVf4SsOoXG4N%2BUSmGD21uY4rMhdO0Nzxhh%2BAfNCDxE9RsHI7H5A%2FTlGremf2qNW37D%2BCM5tX8hYD%2BCmGHO%2B8eaJbH4MdGxnRTe0T0kyN%2F9kqQp49ZQggYvn8PpepJLdTA8r4bdWyvnXDvjzc8lylENY2CeCCD6qs1aV5KfNYbVgNIiBbWdSnUky23dGwJGqjvPE%2BawNOWtUAghYRf5%2FQ2AFPYJB%2BHv87j%2FiBJIjKQTnl7s%2BhvaNFuow%2F1WOU67IgtKC1Vncw27HYwwY6pgFP1g5HLZSXLJvBhHEV1PdDWGtm0m0BR7MYsR5L%2FQohmRt2P7XktzFzbuEBWfiOF0uq%2B0w8pHY5MP4Zb8IGOAOdo8hiogqtSJrKEUfzYg3R%2FehAwE6oFsMz8hOwkMzxOOBnCNcZCFRuhTQCJ5fCAUbHiIV4Z74eN9cPThAfqY4gr0mI6YJuCvsnx3%2FLlWiSI6%2BEyr5ZKSkUSWRFWVnAE0TAUehuzFBf&X-Amz-Signature=ed82a1360321bb1f067571ea2db71a79c3636e0e7c17f5520aebecaebec4a62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBH2R4GF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGOUlvGbz7tu%2FaX%2BnSC%2FISmWc7xg3v%2Fe2xAz1d%2BN3nqXAiBDJGaMnaHOHU7qhxM4UmQAlcqGvJgvLMYF8RzaTV%2BGAyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKIhmypcHUBBsJV0eKtwDAeDFk6v0baNPVrccuze5ZXM0ZFZ1RGdkh69HvYLRmCcsVt9xZWlOcSrQ%2FenN4uE5i08YU0BkEO3SAt%2FxB1FK2%2BSyrRAorAGj%2Bci1YOn7iv41ERel%2BbltOLu83KXPHCMmHwRs5cI3M3VSnxyt5qIr2o0jvrAYFGgqi8b6X9UlWrul9x6KqnCqADFrRMQ3u%2FkZBP523Uwv42nA4SUm80tKMoNNdx9kViERPApMTDsH5R2I%2BXrFe4xqHOI10aKdi8u51QSoRBkrwRDa6TT2IlW6LHskqMtIwxJNMbQpwy1DUJVAAjODAD00pd%2BrMqeVEpaYHe%2Fg4J7Xf2ImLkziOwBWAi3pz9LZztGfoOo4TfJPkgBRNEha0EHtsVf4SsOoXG4N%2BUSmGD21uY4rMhdO0Nzxhh%2BAfNCDxE9RsHI7H5A%2FTlGremf2qNW37D%2BCM5tX8hYD%2BCmGHO%2B8eaJbH4MdGxnRTe0T0kyN%2F9kqQp49ZQggYvn8PpepJLdTA8r4bdWyvnXDvjzc8lylENY2CeCCD6qs1aV5KfNYbVgNIiBbWdSnUky23dGwJGqjvPE%2BawNOWtUAghYRf5%2FQ2AFPYJB%2BHv87j%2FiBJIjKQTnl7s%2BhvaNFuow%2F1WOU67IgtKC1Vncw27HYwwY6pgFP1g5HLZSXLJvBhHEV1PdDWGtm0m0BR7MYsR5L%2FQohmRt2P7XktzFzbuEBWfiOF0uq%2B0w8pHY5MP4Zb8IGOAOdo8hiogqtSJrKEUfzYg3R%2FehAwE6oFsMz8hOwkMzxOOBnCNcZCFRuhTQCJ5fCAUbHiIV4Z74eN9cPThAfqY4gr0mI6YJuCvsnx3%2FLlWiSI6%2BEyr5ZKSkUSWRFWVnAE0TAUehuzFBf&X-Amz-Signature=747532b1c51f4abb0cd90430ed80ffb1a4ab0db8250ff2186240cb5203cd8e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBH2R4GF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGOUlvGbz7tu%2FaX%2BnSC%2FISmWc7xg3v%2Fe2xAz1d%2BN3nqXAiBDJGaMnaHOHU7qhxM4UmQAlcqGvJgvLMYF8RzaTV%2BGAyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKIhmypcHUBBsJV0eKtwDAeDFk6v0baNPVrccuze5ZXM0ZFZ1RGdkh69HvYLRmCcsVt9xZWlOcSrQ%2FenN4uE5i08YU0BkEO3SAt%2FxB1FK2%2BSyrRAorAGj%2Bci1YOn7iv41ERel%2BbltOLu83KXPHCMmHwRs5cI3M3VSnxyt5qIr2o0jvrAYFGgqi8b6X9UlWrul9x6KqnCqADFrRMQ3u%2FkZBP523Uwv42nA4SUm80tKMoNNdx9kViERPApMTDsH5R2I%2BXrFe4xqHOI10aKdi8u51QSoRBkrwRDa6TT2IlW6LHskqMtIwxJNMbQpwy1DUJVAAjODAD00pd%2BrMqeVEpaYHe%2Fg4J7Xf2ImLkziOwBWAi3pz9LZztGfoOo4TfJPkgBRNEha0EHtsVf4SsOoXG4N%2BUSmGD21uY4rMhdO0Nzxhh%2BAfNCDxE9RsHI7H5A%2FTlGremf2qNW37D%2BCM5tX8hYD%2BCmGHO%2B8eaJbH4MdGxnRTe0T0kyN%2F9kqQp49ZQggYvn8PpepJLdTA8r4bdWyvnXDvjzc8lylENY2CeCCD6qs1aV5KfNYbVgNIiBbWdSnUky23dGwJGqjvPE%2BawNOWtUAghYRf5%2FQ2AFPYJB%2BHv87j%2FiBJIjKQTnl7s%2BhvaNFuow%2F1WOU67IgtKC1Vncw27HYwwY6pgFP1g5HLZSXLJvBhHEV1PdDWGtm0m0BR7MYsR5L%2FQohmRt2P7XktzFzbuEBWfiOF0uq%2B0w8pHY5MP4Zb8IGOAOdo8hiogqtSJrKEUfzYg3R%2FehAwE6oFsMz8hOwkMzxOOBnCNcZCFRuhTQCJ5fCAUbHiIV4Z74eN9cPThAfqY4gr0mI6YJuCvsnx3%2FLlWiSI6%2BEyr5ZKSkUSWRFWVnAE0TAUehuzFBf&X-Amz-Signature=c201e11e3b246c8f94f30d67e328a1f37c64997628e8526dff84fd5c867dcf79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBH2R4GF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGOUlvGbz7tu%2FaX%2BnSC%2FISmWc7xg3v%2Fe2xAz1d%2BN3nqXAiBDJGaMnaHOHU7qhxM4UmQAlcqGvJgvLMYF8RzaTV%2BGAyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKIhmypcHUBBsJV0eKtwDAeDFk6v0baNPVrccuze5ZXM0ZFZ1RGdkh69HvYLRmCcsVt9xZWlOcSrQ%2FenN4uE5i08YU0BkEO3SAt%2FxB1FK2%2BSyrRAorAGj%2Bci1YOn7iv41ERel%2BbltOLu83KXPHCMmHwRs5cI3M3VSnxyt5qIr2o0jvrAYFGgqi8b6X9UlWrul9x6KqnCqADFrRMQ3u%2FkZBP523Uwv42nA4SUm80tKMoNNdx9kViERPApMTDsH5R2I%2BXrFe4xqHOI10aKdi8u51QSoRBkrwRDa6TT2IlW6LHskqMtIwxJNMbQpwy1DUJVAAjODAD00pd%2BrMqeVEpaYHe%2Fg4J7Xf2ImLkziOwBWAi3pz9LZztGfoOo4TfJPkgBRNEha0EHtsVf4SsOoXG4N%2BUSmGD21uY4rMhdO0Nzxhh%2BAfNCDxE9RsHI7H5A%2FTlGremf2qNW37D%2BCM5tX8hYD%2BCmGHO%2B8eaJbH4MdGxnRTe0T0kyN%2F9kqQp49ZQggYvn8PpepJLdTA8r4bdWyvnXDvjzc8lylENY2CeCCD6qs1aV5KfNYbVgNIiBbWdSnUky23dGwJGqjvPE%2BawNOWtUAghYRf5%2FQ2AFPYJB%2BHv87j%2FiBJIjKQTnl7s%2BhvaNFuow%2F1WOU67IgtKC1Vncw27HYwwY6pgFP1g5HLZSXLJvBhHEV1PdDWGtm0m0BR7MYsR5L%2FQohmRt2P7XktzFzbuEBWfiOF0uq%2B0w8pHY5MP4Zb8IGOAOdo8hiogqtSJrKEUfzYg3R%2FehAwE6oFsMz8hOwkMzxOOBnCNcZCFRuhTQCJ5fCAUbHiIV4Z74eN9cPThAfqY4gr0mI6YJuCvsnx3%2FLlWiSI6%2BEyr5ZKSkUSWRFWVnAE0TAUehuzFBf&X-Amz-Signature=86350d87cae7ab5fef77ba51b43614b3cc5101fd4704edac3fc3bce7989e4e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
