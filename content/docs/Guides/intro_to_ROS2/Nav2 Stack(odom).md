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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2AF3VI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEn%2FLk%2Bkk0eRvY8NOZEW%2FlV4EzCqJRflPxkU4Rsh5TVLAiAnAOdO5z%2Fg%2BglmiBfldbs%2BfIOjBQpPFs6vltF4ILgZOCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQM3W%2BNAVtk9bBJWzKtwDIfh2sgB7Z9OScmpVDla%2B1tklqtm0KPggACxIXhmYihEkSupg%2FR1kJS7n4XSVXoetzQvJLve7QXZggEq9E0f6LikbrNO7utJ22zKGR4XrGSAPTejuLm7zNp9V2RotHdas1x3oDv%2Btc8XlbY89%2FH7jX%2FxhjlEmqqsX7pTLTOYPhpXGy%2FAr1nVPuaUnc%2BVcegm3fftjITgz6weUbqDm8pks5oRsHmAnLYP3KU2lqx0IXD9zFuNrGdaY2P68lSwb5j03UU%2B%2FW85KjBJ6Sc9pHBo2ClhV%2BlqDU58P4vI60FtnssCy9MVfncDUsaYpmhITfgYTTjK54BIORNbC66UqfzArEQ0uvm%2FvO2R1ct7QM2%2F%2F3lLwk5bvw55QYuT7c7S9vXFzSy6iB%2BDrq7%2FD9h4%2Bl5TEymdazvn6CvKRQiDAN3W0EuocbsacLJT%2FLHoSvVFYmaCagVqE43%2FOLEp9yzy8Tp02NO5ZdW3y3gjZO8%2FcndM6T9aVzKUrhnMxKQXOwo1guA%2BsAR2fgLbCFUVtocni87FqCdMTBUKu7p%2FZsR3deq%2BQKtOGUFRVPj3FD7ztnf%2FPy0FpNB3r8hZOAZ6DdZalX1ooJz8IEeaPP2y8v5GKOeDKg0esXB0vXNoS65RLX5EwxOKuwwY6pgGLWVUd5%2BWEjNR5XTqY7HWbBWBw1%2FdWQM9%2FT5een4PHoDayy8DvRR7dq%2Bhq7dAkuwx2xRkmGtXC%2FX4Kl9eeaTAo1eXln2saC%2B7zCv%2FhHrtNMj4mBo6j9EVtdM2Fkr4ye9UD92gHxCxqqP%2F2K5D7LpnPX0ENzVGQ45%2FmAbg7n8dCVz4zdd00lrBH8hjgnaPSFuGwD7%2BMTN4bn%2Fbe59eFPyMCW6tbZEnQ&X-Amz-Signature=dbb6ff7c4f268be9fa688086160c468f0519d61ed2919a8a5e7b4f0a34674b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2AF3VI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEn%2FLk%2Bkk0eRvY8NOZEW%2FlV4EzCqJRflPxkU4Rsh5TVLAiAnAOdO5z%2Fg%2BglmiBfldbs%2BfIOjBQpPFs6vltF4ILgZOCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQM3W%2BNAVtk9bBJWzKtwDIfh2sgB7Z9OScmpVDla%2B1tklqtm0KPggACxIXhmYihEkSupg%2FR1kJS7n4XSVXoetzQvJLve7QXZggEq9E0f6LikbrNO7utJ22zKGR4XrGSAPTejuLm7zNp9V2RotHdas1x3oDv%2Btc8XlbY89%2FH7jX%2FxhjlEmqqsX7pTLTOYPhpXGy%2FAr1nVPuaUnc%2BVcegm3fftjITgz6weUbqDm8pks5oRsHmAnLYP3KU2lqx0IXD9zFuNrGdaY2P68lSwb5j03UU%2B%2FW85KjBJ6Sc9pHBo2ClhV%2BlqDU58P4vI60FtnssCy9MVfncDUsaYpmhITfgYTTjK54BIORNbC66UqfzArEQ0uvm%2FvO2R1ct7QM2%2F%2F3lLwk5bvw55QYuT7c7S9vXFzSy6iB%2BDrq7%2FD9h4%2Bl5TEymdazvn6CvKRQiDAN3W0EuocbsacLJT%2FLHoSvVFYmaCagVqE43%2FOLEp9yzy8Tp02NO5ZdW3y3gjZO8%2FcndM6T9aVzKUrhnMxKQXOwo1guA%2BsAR2fgLbCFUVtocni87FqCdMTBUKu7p%2FZsR3deq%2BQKtOGUFRVPj3FD7ztnf%2FPy0FpNB3r8hZOAZ6DdZalX1ooJz8IEeaPP2y8v5GKOeDKg0esXB0vXNoS65RLX5EwxOKuwwY6pgGLWVUd5%2BWEjNR5XTqY7HWbBWBw1%2FdWQM9%2FT5een4PHoDayy8DvRR7dq%2Bhq7dAkuwx2xRkmGtXC%2FX4Kl9eeaTAo1eXln2saC%2B7zCv%2FhHrtNMj4mBo6j9EVtdM2Fkr4ye9UD92gHxCxqqP%2F2K5D7LpnPX0ENzVGQ45%2FmAbg7n8dCVz4zdd00lrBH8hjgnaPSFuGwD7%2BMTN4bn%2Fbe59eFPyMCW6tbZEnQ&X-Amz-Signature=f32718a68701aaebe7bfc13df9052b3b54ec3d3233fe150ea6c5214aa4b8cd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2AF3VI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEn%2FLk%2Bkk0eRvY8NOZEW%2FlV4EzCqJRflPxkU4Rsh5TVLAiAnAOdO5z%2Fg%2BglmiBfldbs%2BfIOjBQpPFs6vltF4ILgZOCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQM3W%2BNAVtk9bBJWzKtwDIfh2sgB7Z9OScmpVDla%2B1tklqtm0KPggACxIXhmYihEkSupg%2FR1kJS7n4XSVXoetzQvJLve7QXZggEq9E0f6LikbrNO7utJ22zKGR4XrGSAPTejuLm7zNp9V2RotHdas1x3oDv%2Btc8XlbY89%2FH7jX%2FxhjlEmqqsX7pTLTOYPhpXGy%2FAr1nVPuaUnc%2BVcegm3fftjITgz6weUbqDm8pks5oRsHmAnLYP3KU2lqx0IXD9zFuNrGdaY2P68lSwb5j03UU%2B%2FW85KjBJ6Sc9pHBo2ClhV%2BlqDU58P4vI60FtnssCy9MVfncDUsaYpmhITfgYTTjK54BIORNbC66UqfzArEQ0uvm%2FvO2R1ct7QM2%2F%2F3lLwk5bvw55QYuT7c7S9vXFzSy6iB%2BDrq7%2FD9h4%2Bl5TEymdazvn6CvKRQiDAN3W0EuocbsacLJT%2FLHoSvVFYmaCagVqE43%2FOLEp9yzy8Tp02NO5ZdW3y3gjZO8%2FcndM6T9aVzKUrhnMxKQXOwo1guA%2BsAR2fgLbCFUVtocni87FqCdMTBUKu7p%2FZsR3deq%2BQKtOGUFRVPj3FD7ztnf%2FPy0FpNB3r8hZOAZ6DdZalX1ooJz8IEeaPP2y8v5GKOeDKg0esXB0vXNoS65RLX5EwxOKuwwY6pgGLWVUd5%2BWEjNR5XTqY7HWbBWBw1%2FdWQM9%2FT5een4PHoDayy8DvRR7dq%2Bhq7dAkuwx2xRkmGtXC%2FX4Kl9eeaTAo1eXln2saC%2B7zCv%2FhHrtNMj4mBo6j9EVtdM2Fkr4ye9UD92gHxCxqqP%2F2K5D7LpnPX0ENzVGQ45%2FmAbg7n8dCVz4zdd00lrBH8hjgnaPSFuGwD7%2BMTN4bn%2Fbe59eFPyMCW6tbZEnQ&X-Amz-Signature=2cb05a748113108e25ed1d695db92f7337ce5440055deb9d0e0b2a4d14eb647a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2AF3VI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEn%2FLk%2Bkk0eRvY8NOZEW%2FlV4EzCqJRflPxkU4Rsh5TVLAiAnAOdO5z%2Fg%2BglmiBfldbs%2BfIOjBQpPFs6vltF4ILgZOCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQM3W%2BNAVtk9bBJWzKtwDIfh2sgB7Z9OScmpVDla%2B1tklqtm0KPggACxIXhmYihEkSupg%2FR1kJS7n4XSVXoetzQvJLve7QXZggEq9E0f6LikbrNO7utJ22zKGR4XrGSAPTejuLm7zNp9V2RotHdas1x3oDv%2Btc8XlbY89%2FH7jX%2FxhjlEmqqsX7pTLTOYPhpXGy%2FAr1nVPuaUnc%2BVcegm3fftjITgz6weUbqDm8pks5oRsHmAnLYP3KU2lqx0IXD9zFuNrGdaY2P68lSwb5j03UU%2B%2FW85KjBJ6Sc9pHBo2ClhV%2BlqDU58P4vI60FtnssCy9MVfncDUsaYpmhITfgYTTjK54BIORNbC66UqfzArEQ0uvm%2FvO2R1ct7QM2%2F%2F3lLwk5bvw55QYuT7c7S9vXFzSy6iB%2BDrq7%2FD9h4%2Bl5TEymdazvn6CvKRQiDAN3W0EuocbsacLJT%2FLHoSvVFYmaCagVqE43%2FOLEp9yzy8Tp02NO5ZdW3y3gjZO8%2FcndM6T9aVzKUrhnMxKQXOwo1guA%2BsAR2fgLbCFUVtocni87FqCdMTBUKu7p%2FZsR3deq%2BQKtOGUFRVPj3FD7ztnf%2FPy0FpNB3r8hZOAZ6DdZalX1ooJz8IEeaPP2y8v5GKOeDKg0esXB0vXNoS65RLX5EwxOKuwwY6pgGLWVUd5%2BWEjNR5XTqY7HWbBWBw1%2FdWQM9%2FT5een4PHoDayy8DvRR7dq%2Bhq7dAkuwx2xRkmGtXC%2FX4Kl9eeaTAo1eXln2saC%2B7zCv%2FhHrtNMj4mBo6j9EVtdM2Fkr4ye9UD92gHxCxqqP%2F2K5D7LpnPX0ENzVGQ45%2FmAbg7n8dCVz4zdd00lrBH8hjgnaPSFuGwD7%2BMTN4bn%2Fbe59eFPyMCW6tbZEnQ&X-Amz-Signature=e8dd768fb8526ff396dec161d1e7b23d3af0055778f6ae2534ed5d724d092a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2AF3VI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEn%2FLk%2Bkk0eRvY8NOZEW%2FlV4EzCqJRflPxkU4Rsh5TVLAiAnAOdO5z%2Fg%2BglmiBfldbs%2BfIOjBQpPFs6vltF4ILgZOCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQM3W%2BNAVtk9bBJWzKtwDIfh2sgB7Z9OScmpVDla%2B1tklqtm0KPggACxIXhmYihEkSupg%2FR1kJS7n4XSVXoetzQvJLve7QXZggEq9E0f6LikbrNO7utJ22zKGR4XrGSAPTejuLm7zNp9V2RotHdas1x3oDv%2Btc8XlbY89%2FH7jX%2FxhjlEmqqsX7pTLTOYPhpXGy%2FAr1nVPuaUnc%2BVcegm3fftjITgz6weUbqDm8pks5oRsHmAnLYP3KU2lqx0IXD9zFuNrGdaY2P68lSwb5j03UU%2B%2FW85KjBJ6Sc9pHBo2ClhV%2BlqDU58P4vI60FtnssCy9MVfncDUsaYpmhITfgYTTjK54BIORNbC66UqfzArEQ0uvm%2FvO2R1ct7QM2%2F%2F3lLwk5bvw55QYuT7c7S9vXFzSy6iB%2BDrq7%2FD9h4%2Bl5TEymdazvn6CvKRQiDAN3W0EuocbsacLJT%2FLHoSvVFYmaCagVqE43%2FOLEp9yzy8Tp02NO5ZdW3y3gjZO8%2FcndM6T9aVzKUrhnMxKQXOwo1guA%2BsAR2fgLbCFUVtocni87FqCdMTBUKu7p%2FZsR3deq%2BQKtOGUFRVPj3FD7ztnf%2FPy0FpNB3r8hZOAZ6DdZalX1ooJz8IEeaPP2y8v5GKOeDKg0esXB0vXNoS65RLX5EwxOKuwwY6pgGLWVUd5%2BWEjNR5XTqY7HWbBWBw1%2FdWQM9%2FT5een4PHoDayy8DvRR7dq%2Bhq7dAkuwx2xRkmGtXC%2FX4Kl9eeaTAo1eXln2saC%2B7zCv%2FhHrtNMj4mBo6j9EVtdM2Fkr4ye9UD92gHxCxqqP%2F2K5D7LpnPX0ENzVGQ45%2FmAbg7n8dCVz4zdd00lrBH8hjgnaPSFuGwD7%2BMTN4bn%2Fbe59eFPyMCW6tbZEnQ&X-Amz-Signature=a2de397e212ed59c71b7fe5f6012d70727e457ee1aad3f3a2f9c34abf7cf637a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
