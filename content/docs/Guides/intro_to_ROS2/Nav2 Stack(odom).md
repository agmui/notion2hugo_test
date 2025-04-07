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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWPJ6HP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo0dhhaqGyMX1JQRqUXaoq0%2BWBFy17z%2BwoV9sZfm54AiBNnbrIYO3FuOJDkAyYxXUpblK4Z0wfWRG3hGfxl8%2FZ4Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMfhnWbu6Rw4LNuvknKtwD43uPe8E%2F9oCTi172LLt%2Bbn56EbFq%2BSwDiDwy%2Bnkd%2FsbEy%2F5SIce%2F9stIelkFC8OJm5jrqLteg6th3SdYOCcZ79vm%2BWMZjjGuWf%2BSZZxK5RfEE9mgFyPjdUcikhR8O5zfR6Sq4jotZERDGwVJlxyVYA%2FH7ag46%2FzwerbDGDIAKJZ9%2FaRoUor7FbnPeUQnho7n7pl0HgjPmZHgHa31ppOZdcaZKMvW7%2FGdOzmyXwLVEijhsQ2jExXwzlHLymf8giNLTbq6bp8G%2FfoxMqHUcYnxDPZI8iA874mvVOo9AxQuyhcevYCYY2wio3rTeS46bDwB5eaj5PuUNxI4sT1meWFWNuSsjxT76BlAxJWrdY4TgqhcyASjTH2KZuEduytSG8hKPmDXyaefoI%2F9Kh7d%2F9pjMkyILLaK5ox4O5btmQSRADRWCGD0OeDEdEcyXNDGihWtcpEUM1M%2B8HjC3f4aRTMDSARLV3geqabwWr4c8MNx908bOxvZ57X5UoQcGQKZREmGPbF88iLnW%2FI%2FD1c%2FVhzIeC8lg%2F9lFRdGAzKIgYpeqGZQGWRiTchmvF1%2FN8NCRndyNOg%2FW7t9gSNf5kN3jMSzB08Bs1PdGrXvVnFkQYy3G%2BcGgUkm8BE39aAwOosws5%2FRvwY6pgFzKo0ykf%2Fi6JCJx%2FjLVMGUa2EAoYh53WF3fZ259gA9QtJ8C%2BuxurW6B1ub0wwchAg10SrKtBaxIms1oPMm6hgwaRfgR%2F4LUBMmFVdgYE9xeLdyywx2QswjWCmFx8fX3JYxS44R3stIjE3pEoX%2BASuxFJfP%2FYHlek%2Ft1uKhcVRX80eVKBAGS82J5pMRShIRsBRGNBj5w5hwPGvYLDq5PXz84KJZlQ%2FF&X-Amz-Signature=2c5d2f9a99e89e90d7017fff5e29ad720d066d06744145553533b509d0a98241&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWPJ6HP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo0dhhaqGyMX1JQRqUXaoq0%2BWBFy17z%2BwoV9sZfm54AiBNnbrIYO3FuOJDkAyYxXUpblK4Z0wfWRG3hGfxl8%2FZ4Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMfhnWbu6Rw4LNuvknKtwD43uPe8E%2F9oCTi172LLt%2Bbn56EbFq%2BSwDiDwy%2Bnkd%2FsbEy%2F5SIce%2F9stIelkFC8OJm5jrqLteg6th3SdYOCcZ79vm%2BWMZjjGuWf%2BSZZxK5RfEE9mgFyPjdUcikhR8O5zfR6Sq4jotZERDGwVJlxyVYA%2FH7ag46%2FzwerbDGDIAKJZ9%2FaRoUor7FbnPeUQnho7n7pl0HgjPmZHgHa31ppOZdcaZKMvW7%2FGdOzmyXwLVEijhsQ2jExXwzlHLymf8giNLTbq6bp8G%2FfoxMqHUcYnxDPZI8iA874mvVOo9AxQuyhcevYCYY2wio3rTeS46bDwB5eaj5PuUNxI4sT1meWFWNuSsjxT76BlAxJWrdY4TgqhcyASjTH2KZuEduytSG8hKPmDXyaefoI%2F9Kh7d%2F9pjMkyILLaK5ox4O5btmQSRADRWCGD0OeDEdEcyXNDGihWtcpEUM1M%2B8HjC3f4aRTMDSARLV3geqabwWr4c8MNx908bOxvZ57X5UoQcGQKZREmGPbF88iLnW%2FI%2FD1c%2FVhzIeC8lg%2F9lFRdGAzKIgYpeqGZQGWRiTchmvF1%2FN8NCRndyNOg%2FW7t9gSNf5kN3jMSzB08Bs1PdGrXvVnFkQYy3G%2BcGgUkm8BE39aAwOosws5%2FRvwY6pgFzKo0ykf%2Fi6JCJx%2FjLVMGUa2EAoYh53WF3fZ259gA9QtJ8C%2BuxurW6B1ub0wwchAg10SrKtBaxIms1oPMm6hgwaRfgR%2F4LUBMmFVdgYE9xeLdyywx2QswjWCmFx8fX3JYxS44R3stIjE3pEoX%2BASuxFJfP%2FYHlek%2Ft1uKhcVRX80eVKBAGS82J5pMRShIRsBRGNBj5w5hwPGvYLDq5PXz84KJZlQ%2FF&X-Amz-Signature=5e07d090e81fb0fa0be1e35b979597627974795bb0091660ff376bfc85bf4ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWPJ6HP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo0dhhaqGyMX1JQRqUXaoq0%2BWBFy17z%2BwoV9sZfm54AiBNnbrIYO3FuOJDkAyYxXUpblK4Z0wfWRG3hGfxl8%2FZ4Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMfhnWbu6Rw4LNuvknKtwD43uPe8E%2F9oCTi172LLt%2Bbn56EbFq%2BSwDiDwy%2Bnkd%2FsbEy%2F5SIce%2F9stIelkFC8OJm5jrqLteg6th3SdYOCcZ79vm%2BWMZjjGuWf%2BSZZxK5RfEE9mgFyPjdUcikhR8O5zfR6Sq4jotZERDGwVJlxyVYA%2FH7ag46%2FzwerbDGDIAKJZ9%2FaRoUor7FbnPeUQnho7n7pl0HgjPmZHgHa31ppOZdcaZKMvW7%2FGdOzmyXwLVEijhsQ2jExXwzlHLymf8giNLTbq6bp8G%2FfoxMqHUcYnxDPZI8iA874mvVOo9AxQuyhcevYCYY2wio3rTeS46bDwB5eaj5PuUNxI4sT1meWFWNuSsjxT76BlAxJWrdY4TgqhcyASjTH2KZuEduytSG8hKPmDXyaefoI%2F9Kh7d%2F9pjMkyILLaK5ox4O5btmQSRADRWCGD0OeDEdEcyXNDGihWtcpEUM1M%2B8HjC3f4aRTMDSARLV3geqabwWr4c8MNx908bOxvZ57X5UoQcGQKZREmGPbF88iLnW%2FI%2FD1c%2FVhzIeC8lg%2F9lFRdGAzKIgYpeqGZQGWRiTchmvF1%2FN8NCRndyNOg%2FW7t9gSNf5kN3jMSzB08Bs1PdGrXvVnFkQYy3G%2BcGgUkm8BE39aAwOosws5%2FRvwY6pgFzKo0ykf%2Fi6JCJx%2FjLVMGUa2EAoYh53WF3fZ259gA9QtJ8C%2BuxurW6B1ub0wwchAg10SrKtBaxIms1oPMm6hgwaRfgR%2F4LUBMmFVdgYE9xeLdyywx2QswjWCmFx8fX3JYxS44R3stIjE3pEoX%2BASuxFJfP%2FYHlek%2Ft1uKhcVRX80eVKBAGS82J5pMRShIRsBRGNBj5w5hwPGvYLDq5PXz84KJZlQ%2FF&X-Amz-Signature=8873acbcdb300da4eee168cf546cd4b642c540f972e29d73851e2cf26bb054be&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWPJ6HP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo0dhhaqGyMX1JQRqUXaoq0%2BWBFy17z%2BwoV9sZfm54AiBNnbrIYO3FuOJDkAyYxXUpblK4Z0wfWRG3hGfxl8%2FZ4Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMfhnWbu6Rw4LNuvknKtwD43uPe8E%2F9oCTi172LLt%2Bbn56EbFq%2BSwDiDwy%2Bnkd%2FsbEy%2F5SIce%2F9stIelkFC8OJm5jrqLteg6th3SdYOCcZ79vm%2BWMZjjGuWf%2BSZZxK5RfEE9mgFyPjdUcikhR8O5zfR6Sq4jotZERDGwVJlxyVYA%2FH7ag46%2FzwerbDGDIAKJZ9%2FaRoUor7FbnPeUQnho7n7pl0HgjPmZHgHa31ppOZdcaZKMvW7%2FGdOzmyXwLVEijhsQ2jExXwzlHLymf8giNLTbq6bp8G%2FfoxMqHUcYnxDPZI8iA874mvVOo9AxQuyhcevYCYY2wio3rTeS46bDwB5eaj5PuUNxI4sT1meWFWNuSsjxT76BlAxJWrdY4TgqhcyASjTH2KZuEduytSG8hKPmDXyaefoI%2F9Kh7d%2F9pjMkyILLaK5ox4O5btmQSRADRWCGD0OeDEdEcyXNDGihWtcpEUM1M%2B8HjC3f4aRTMDSARLV3geqabwWr4c8MNx908bOxvZ57X5UoQcGQKZREmGPbF88iLnW%2FI%2FD1c%2FVhzIeC8lg%2F9lFRdGAzKIgYpeqGZQGWRiTchmvF1%2FN8NCRndyNOg%2FW7t9gSNf5kN3jMSzB08Bs1PdGrXvVnFkQYy3G%2BcGgUkm8BE39aAwOosws5%2FRvwY6pgFzKo0ykf%2Fi6JCJx%2FjLVMGUa2EAoYh53WF3fZ259gA9QtJ8C%2BuxurW6B1ub0wwchAg10SrKtBaxIms1oPMm6hgwaRfgR%2F4LUBMmFVdgYE9xeLdyywx2QswjWCmFx8fX3JYxS44R3stIjE3pEoX%2BASuxFJfP%2FYHlek%2Ft1uKhcVRX80eVKBAGS82J5pMRShIRsBRGNBj5w5hwPGvYLDq5PXz84KJZlQ%2FF&X-Amz-Signature=f33f0222ee29dd63c757f5355f9f5852fc9d6b1a3b9623e5d39a458b66af66ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWPJ6HP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDo0dhhaqGyMX1JQRqUXaoq0%2BWBFy17z%2BwoV9sZfm54AiBNnbrIYO3FuOJDkAyYxXUpblK4Z0wfWRG3hGfxl8%2FZ4Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMfhnWbu6Rw4LNuvknKtwD43uPe8E%2F9oCTi172LLt%2Bbn56EbFq%2BSwDiDwy%2Bnkd%2FsbEy%2F5SIce%2F9stIelkFC8OJm5jrqLteg6th3SdYOCcZ79vm%2BWMZjjGuWf%2BSZZxK5RfEE9mgFyPjdUcikhR8O5zfR6Sq4jotZERDGwVJlxyVYA%2FH7ag46%2FzwerbDGDIAKJZ9%2FaRoUor7FbnPeUQnho7n7pl0HgjPmZHgHa31ppOZdcaZKMvW7%2FGdOzmyXwLVEijhsQ2jExXwzlHLymf8giNLTbq6bp8G%2FfoxMqHUcYnxDPZI8iA874mvVOo9AxQuyhcevYCYY2wio3rTeS46bDwB5eaj5PuUNxI4sT1meWFWNuSsjxT76BlAxJWrdY4TgqhcyASjTH2KZuEduytSG8hKPmDXyaefoI%2F9Kh7d%2F9pjMkyILLaK5ox4O5btmQSRADRWCGD0OeDEdEcyXNDGihWtcpEUM1M%2B8HjC3f4aRTMDSARLV3geqabwWr4c8MNx908bOxvZ57X5UoQcGQKZREmGPbF88iLnW%2FI%2FD1c%2FVhzIeC8lg%2F9lFRdGAzKIgYpeqGZQGWRiTchmvF1%2FN8NCRndyNOg%2FW7t9gSNf5kN3jMSzB08Bs1PdGrXvVnFkQYy3G%2BcGgUkm8BE39aAwOosws5%2FRvwY6pgFzKo0ykf%2Fi6JCJx%2FjLVMGUa2EAoYh53WF3fZ259gA9QtJ8C%2BuxurW6B1ub0wwchAg10SrKtBaxIms1oPMm6hgwaRfgR%2F4LUBMmFVdgYE9xeLdyywx2QswjWCmFx8fX3JYxS44R3stIjE3pEoX%2BASuxFJfP%2FYHlek%2Ft1uKhcVRX80eVKBAGS82J5pMRShIRsBRGNBj5w5hwPGvYLDq5PXz84KJZlQ%2FF&X-Amz-Signature=aad69f15335fea023e0ce3b2bf13726585edbd1d6cdc4519a5bdb93793fb3dac&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
