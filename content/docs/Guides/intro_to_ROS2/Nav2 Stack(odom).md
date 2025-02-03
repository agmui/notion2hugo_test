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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674P5KLBO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FBOV7jj943L%2FGtYj1WjvRWfI4UbS%2FyTTJqrhFD1JiwIhAMA6abpfRsgmyZEdBPm0KMzpw2SGdcqVqbT2iN1YjHd8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTWdkeeUXUjuas8r4q3AO6jnoBRqISnr5Y%2BLhTl7oQvdFd6FV6D%2FrOI5slu074RULq770kULAyZXrQjHIG8DWLVGKq4zryPmXhXw9fZ37zTZ%2FtfyB5iq2ooeyqLfYJCXAMDpsMEuG2%2Fv3Aa8TCjCZTITKRY9g2GDRcOq9QAFvgJwnA6WZTfdx2hkdqcLvAikOUa6GPqy0MIXSGRmk2s2QmKwmzI2W8HKr1Nfhl%2Bz0AnNb2C0TujWkgaC4NSSq7OQk1vNn%2Fc9lS39EfduWDe45JXIz5abwOuM1Bly6WOVrGu0KpgCbpeeeH9deEFCPkTbSSrUVbcs%2BUSMHJKLDxnEbKOvzCs29KQ5sX8gatHNvc9w%2BgHYhl9EP7CIK69dMQDjq5QhRW3%2F3z%2FZHvTF2NnPTl9XwOY1j%2F1i2OlFFKN%2FurdYgBTzSnORShmOlanhAMVJyVyc3dQok0o5lvadBKh1CKDYRuEvGQu9GkLx%2B%2Fm1wbL1fEkX%2Fvj%2B2lWs0YOpgblNOtWYCsNTz%2BsurMbBYVTql%2FxvN%2Bil1KmX0sTubNMnG5bRvhnd2UR4v6FfUG305jvHCMPgFIPpZXVoHIZjXFVyMUoCrB28x728EBvLYOrP5LHfgOX3v%2F%2FA00pmxVVnzBzA%2FBXNYgPCoZLUrSVTCGwYC9BjqkAUSpC7xyp2nXT7a17diyTPmEfkS68J7lpFIg40jJIDDGJQ8COYa4cvobZj0rXwPhniQfreKs%2FzxaySaGQGvjQLoAJOT%2BZ4uUqNzd0IRedDrrnDQ9oPsqDOHh1XcVVV%2BOEjr9lxsFo38%2Fei%2FW6XYk7F8R%2Fgpa1TWT%2FmhWGR%2BycrAt2hiJc9V4k%2BV2dNFL2lup5Txd8b0haCXvPpzwPAV5NdyeUPp%2B&X-Amz-Signature=cf47deb85376c9ffa6673f89b5bcc7deb8b0c9dd367c174de379417bda97ce4e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674P5KLBO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FBOV7jj943L%2FGtYj1WjvRWfI4UbS%2FyTTJqrhFD1JiwIhAMA6abpfRsgmyZEdBPm0KMzpw2SGdcqVqbT2iN1YjHd8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTWdkeeUXUjuas8r4q3AO6jnoBRqISnr5Y%2BLhTl7oQvdFd6FV6D%2FrOI5slu074RULq770kULAyZXrQjHIG8DWLVGKq4zryPmXhXw9fZ37zTZ%2FtfyB5iq2ooeyqLfYJCXAMDpsMEuG2%2Fv3Aa8TCjCZTITKRY9g2GDRcOq9QAFvgJwnA6WZTfdx2hkdqcLvAikOUa6GPqy0MIXSGRmk2s2QmKwmzI2W8HKr1Nfhl%2Bz0AnNb2C0TujWkgaC4NSSq7OQk1vNn%2Fc9lS39EfduWDe45JXIz5abwOuM1Bly6WOVrGu0KpgCbpeeeH9deEFCPkTbSSrUVbcs%2BUSMHJKLDxnEbKOvzCs29KQ5sX8gatHNvc9w%2BgHYhl9EP7CIK69dMQDjq5QhRW3%2F3z%2FZHvTF2NnPTl9XwOY1j%2F1i2OlFFKN%2FurdYgBTzSnORShmOlanhAMVJyVyc3dQok0o5lvadBKh1CKDYRuEvGQu9GkLx%2B%2Fm1wbL1fEkX%2Fvj%2B2lWs0YOpgblNOtWYCsNTz%2BsurMbBYVTql%2FxvN%2Bil1KmX0sTubNMnG5bRvhnd2UR4v6FfUG305jvHCMPgFIPpZXVoHIZjXFVyMUoCrB28x728EBvLYOrP5LHfgOX3v%2F%2FA00pmxVVnzBzA%2FBXNYgPCoZLUrSVTCGwYC9BjqkAUSpC7xyp2nXT7a17diyTPmEfkS68J7lpFIg40jJIDDGJQ8COYa4cvobZj0rXwPhniQfreKs%2FzxaySaGQGvjQLoAJOT%2BZ4uUqNzd0IRedDrrnDQ9oPsqDOHh1XcVVV%2BOEjr9lxsFo38%2Fei%2FW6XYk7F8R%2Fgpa1TWT%2FmhWGR%2BycrAt2hiJc9V4k%2BV2dNFL2lup5Txd8b0haCXvPpzwPAV5NdyeUPp%2B&X-Amz-Signature=8e280b17681ca7996366b7935ae8d31498ec95e1527c82263f03d7abb0e9db0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674P5KLBO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FBOV7jj943L%2FGtYj1WjvRWfI4UbS%2FyTTJqrhFD1JiwIhAMA6abpfRsgmyZEdBPm0KMzpw2SGdcqVqbT2iN1YjHd8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTWdkeeUXUjuas8r4q3AO6jnoBRqISnr5Y%2BLhTl7oQvdFd6FV6D%2FrOI5slu074RULq770kULAyZXrQjHIG8DWLVGKq4zryPmXhXw9fZ37zTZ%2FtfyB5iq2ooeyqLfYJCXAMDpsMEuG2%2Fv3Aa8TCjCZTITKRY9g2GDRcOq9QAFvgJwnA6WZTfdx2hkdqcLvAikOUa6GPqy0MIXSGRmk2s2QmKwmzI2W8HKr1Nfhl%2Bz0AnNb2C0TujWkgaC4NSSq7OQk1vNn%2Fc9lS39EfduWDe45JXIz5abwOuM1Bly6WOVrGu0KpgCbpeeeH9deEFCPkTbSSrUVbcs%2BUSMHJKLDxnEbKOvzCs29KQ5sX8gatHNvc9w%2BgHYhl9EP7CIK69dMQDjq5QhRW3%2F3z%2FZHvTF2NnPTl9XwOY1j%2F1i2OlFFKN%2FurdYgBTzSnORShmOlanhAMVJyVyc3dQok0o5lvadBKh1CKDYRuEvGQu9GkLx%2B%2Fm1wbL1fEkX%2Fvj%2B2lWs0YOpgblNOtWYCsNTz%2BsurMbBYVTql%2FxvN%2Bil1KmX0sTubNMnG5bRvhnd2UR4v6FfUG305jvHCMPgFIPpZXVoHIZjXFVyMUoCrB28x728EBvLYOrP5LHfgOX3v%2F%2FA00pmxVVnzBzA%2FBXNYgPCoZLUrSVTCGwYC9BjqkAUSpC7xyp2nXT7a17diyTPmEfkS68J7lpFIg40jJIDDGJQ8COYa4cvobZj0rXwPhniQfreKs%2FzxaySaGQGvjQLoAJOT%2BZ4uUqNzd0IRedDrrnDQ9oPsqDOHh1XcVVV%2BOEjr9lxsFo38%2Fei%2FW6XYk7F8R%2Fgpa1TWT%2FmhWGR%2BycrAt2hiJc9V4k%2BV2dNFL2lup5Txd8b0haCXvPpzwPAV5NdyeUPp%2B&X-Amz-Signature=b8a60a37f78b70970460028348a436f1d96f4d31c9d49583fb507664d87f38fc&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674P5KLBO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FBOV7jj943L%2FGtYj1WjvRWfI4UbS%2FyTTJqrhFD1JiwIhAMA6abpfRsgmyZEdBPm0KMzpw2SGdcqVqbT2iN1YjHd8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTWdkeeUXUjuas8r4q3AO6jnoBRqISnr5Y%2BLhTl7oQvdFd6FV6D%2FrOI5slu074RULq770kULAyZXrQjHIG8DWLVGKq4zryPmXhXw9fZ37zTZ%2FtfyB5iq2ooeyqLfYJCXAMDpsMEuG2%2Fv3Aa8TCjCZTITKRY9g2GDRcOq9QAFvgJwnA6WZTfdx2hkdqcLvAikOUa6GPqy0MIXSGRmk2s2QmKwmzI2W8HKr1Nfhl%2Bz0AnNb2C0TujWkgaC4NSSq7OQk1vNn%2Fc9lS39EfduWDe45JXIz5abwOuM1Bly6WOVrGu0KpgCbpeeeH9deEFCPkTbSSrUVbcs%2BUSMHJKLDxnEbKOvzCs29KQ5sX8gatHNvc9w%2BgHYhl9EP7CIK69dMQDjq5QhRW3%2F3z%2FZHvTF2NnPTl9XwOY1j%2F1i2OlFFKN%2FurdYgBTzSnORShmOlanhAMVJyVyc3dQok0o5lvadBKh1CKDYRuEvGQu9GkLx%2B%2Fm1wbL1fEkX%2Fvj%2B2lWs0YOpgblNOtWYCsNTz%2BsurMbBYVTql%2FxvN%2Bil1KmX0sTubNMnG5bRvhnd2UR4v6FfUG305jvHCMPgFIPpZXVoHIZjXFVyMUoCrB28x728EBvLYOrP5LHfgOX3v%2F%2FA00pmxVVnzBzA%2FBXNYgPCoZLUrSVTCGwYC9BjqkAUSpC7xyp2nXT7a17diyTPmEfkS68J7lpFIg40jJIDDGJQ8COYa4cvobZj0rXwPhniQfreKs%2FzxaySaGQGvjQLoAJOT%2BZ4uUqNzd0IRedDrrnDQ9oPsqDOHh1XcVVV%2BOEjr9lxsFo38%2Fei%2FW6XYk7F8R%2Fgpa1TWT%2FmhWGR%2BycrAt2hiJc9V4k%2BV2dNFL2lup5Txd8b0haCXvPpzwPAV5NdyeUPp%2B&X-Amz-Signature=5d8690f7b6f0064cedbdf28edfdc3bd3ab31f72f06c6185f1f703d5fe45b6391&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674P5KLBO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FBOV7jj943L%2FGtYj1WjvRWfI4UbS%2FyTTJqrhFD1JiwIhAMA6abpfRsgmyZEdBPm0KMzpw2SGdcqVqbT2iN1YjHd8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTWdkeeUXUjuas8r4q3AO6jnoBRqISnr5Y%2BLhTl7oQvdFd6FV6D%2FrOI5slu074RULq770kULAyZXrQjHIG8DWLVGKq4zryPmXhXw9fZ37zTZ%2FtfyB5iq2ooeyqLfYJCXAMDpsMEuG2%2Fv3Aa8TCjCZTITKRY9g2GDRcOq9QAFvgJwnA6WZTfdx2hkdqcLvAikOUa6GPqy0MIXSGRmk2s2QmKwmzI2W8HKr1Nfhl%2Bz0AnNb2C0TujWkgaC4NSSq7OQk1vNn%2Fc9lS39EfduWDe45JXIz5abwOuM1Bly6WOVrGu0KpgCbpeeeH9deEFCPkTbSSrUVbcs%2BUSMHJKLDxnEbKOvzCs29KQ5sX8gatHNvc9w%2BgHYhl9EP7CIK69dMQDjq5QhRW3%2F3z%2FZHvTF2NnPTl9XwOY1j%2F1i2OlFFKN%2FurdYgBTzSnORShmOlanhAMVJyVyc3dQok0o5lvadBKh1CKDYRuEvGQu9GkLx%2B%2Fm1wbL1fEkX%2Fvj%2B2lWs0YOpgblNOtWYCsNTz%2BsurMbBYVTql%2FxvN%2Bil1KmX0sTubNMnG5bRvhnd2UR4v6FfUG305jvHCMPgFIPpZXVoHIZjXFVyMUoCrB28x728EBvLYOrP5LHfgOX3v%2F%2FA00pmxVVnzBzA%2FBXNYgPCoZLUrSVTCGwYC9BjqkAUSpC7xyp2nXT7a17diyTPmEfkS68J7lpFIg40jJIDDGJQ8COYa4cvobZj0rXwPhniQfreKs%2FzxaySaGQGvjQLoAJOT%2BZ4uUqNzd0IRedDrrnDQ9oPsqDOHh1XcVVV%2BOEjr9lxsFo38%2Fei%2FW6XYk7F8R%2Fgpa1TWT%2FmhWGR%2BycrAt2hiJc9V4k%2BV2dNFL2lup5Txd8b0haCXvPpzwPAV5NdyeUPp%2B&X-Amz-Signature=a4f627ecc4891f9dd6766f26d97716f0edd62a2fc0b82426120f3ab160a8dcdb&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
