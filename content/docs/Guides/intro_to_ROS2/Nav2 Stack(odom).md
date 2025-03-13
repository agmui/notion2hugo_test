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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC7PPQL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5DGeoqG41Vdy%2B%2FsQWeSafHBId2Bx3QMhTB%2BOX%2B2gDUAiEAklJPStbPziQmY7Bdy7eOGPA6TTdrKfwakYAssLzLQY8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8GidPetgGQ8XUReircA5P8TbsNv%2BL0WMz5W1E7%2FqStqC%2FQfqm4q2XDBfxOiY7wW4WLMQP7iO4FbQviygDetAPTC%2B%2BH6dQ%2F92uZHFBq6C2kMcM5Et%2F4h3ZUVIlD6dQDS3x2PZ3IFcKUvv5elJugGAkJFHPdqWAnhpql%2FogrfmD217JZq%2B07Wjnhet7QuQbC4CBh3aZ6SBcvSDm%2Fa3%2FWhRC6qIEDyALAtILOIaY%2Fz26Prn9npAhovxeneWLeDArr25FkE9pZ4%2BbQSuxv7i01ByRnz0BquhYW3y56FBKbA8oEmv9LX2bXcI5kP6OALw9YqFa2i0GkP%2BT7rRHteEbXl2F2%2B7gQa6JQJiU6Hd0xY%2FGmhg97yQH4FVEapuOtTqDJEICD4X0tQlp1cHd02iDJ5aJo4xK%2Fv9xor%2FVzn7dWj0IEDJRUxh%2FY6vY5j3ypMVJeq9WDajS%2FYoe%2FiBwlggjgKXbBZ0r36uVtvuM9WEidwBViVU7yNzbC%2FPSPQqx6RnnqS8pqZOILTYCbQHlnPaQvvJb9ZfNnf9h%2FdoTdxKxLQXBeRey1RXrh3Rlo8BTdWwsENeHfMSLEhppPTUeVrCiJe3EGI5246zpYZ57HwlD5CLqsQowyr4cOj18vwfP70fEbwVzHwCwB9SFW8LMrMJLByr4GOqUBeMGcHeD4PpNHtaSFKp%2FZDp0NgOcqcLeAJtEUbVHomGSAlcQPZt5gCnPoUwOFuNF9OvSs3fQs1ALJm0Wz40dgXcMtNZUQxO4BSFQya58k%2FyXsf2dKZlOImuNijXwB031UjFpm%2FnamS3bRkhBadjsgsmWqt2hA1uTyepisRNt7%2BX%2F6KF5aSnxk07OeGhpUzCecGEDPg%2BSB4qSnXvkFbCl6Pr%2FZjpRM&X-Amz-Signature=65b69700798dc215b90d7d515910bd3beec485ba237636b559f4880da1c99047&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC7PPQL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5DGeoqG41Vdy%2B%2FsQWeSafHBId2Bx3QMhTB%2BOX%2B2gDUAiEAklJPStbPziQmY7Bdy7eOGPA6TTdrKfwakYAssLzLQY8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8GidPetgGQ8XUReircA5P8TbsNv%2BL0WMz5W1E7%2FqStqC%2FQfqm4q2XDBfxOiY7wW4WLMQP7iO4FbQviygDetAPTC%2B%2BH6dQ%2F92uZHFBq6C2kMcM5Et%2F4h3ZUVIlD6dQDS3x2PZ3IFcKUvv5elJugGAkJFHPdqWAnhpql%2FogrfmD217JZq%2B07Wjnhet7QuQbC4CBh3aZ6SBcvSDm%2Fa3%2FWhRC6qIEDyALAtILOIaY%2Fz26Prn9npAhovxeneWLeDArr25FkE9pZ4%2BbQSuxv7i01ByRnz0BquhYW3y56FBKbA8oEmv9LX2bXcI5kP6OALw9YqFa2i0GkP%2BT7rRHteEbXl2F2%2B7gQa6JQJiU6Hd0xY%2FGmhg97yQH4FVEapuOtTqDJEICD4X0tQlp1cHd02iDJ5aJo4xK%2Fv9xor%2FVzn7dWj0IEDJRUxh%2FY6vY5j3ypMVJeq9WDajS%2FYoe%2FiBwlggjgKXbBZ0r36uVtvuM9WEidwBViVU7yNzbC%2FPSPQqx6RnnqS8pqZOILTYCbQHlnPaQvvJb9ZfNnf9h%2FdoTdxKxLQXBeRey1RXrh3Rlo8BTdWwsENeHfMSLEhppPTUeVrCiJe3EGI5246zpYZ57HwlD5CLqsQowyr4cOj18vwfP70fEbwVzHwCwB9SFW8LMrMJLByr4GOqUBeMGcHeD4PpNHtaSFKp%2FZDp0NgOcqcLeAJtEUbVHomGSAlcQPZt5gCnPoUwOFuNF9OvSs3fQs1ALJm0Wz40dgXcMtNZUQxO4BSFQya58k%2FyXsf2dKZlOImuNijXwB031UjFpm%2FnamS3bRkhBadjsgsmWqt2hA1uTyepisRNt7%2BX%2F6KF5aSnxk07OeGhpUzCecGEDPg%2BSB4qSnXvkFbCl6Pr%2FZjpRM&X-Amz-Signature=3d5c14868f8f94465fca20148e6085623377636a6dc942c2d3131c9e820a1970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC7PPQL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5DGeoqG41Vdy%2B%2FsQWeSafHBId2Bx3QMhTB%2BOX%2B2gDUAiEAklJPStbPziQmY7Bdy7eOGPA6TTdrKfwakYAssLzLQY8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8GidPetgGQ8XUReircA5P8TbsNv%2BL0WMz5W1E7%2FqStqC%2FQfqm4q2XDBfxOiY7wW4WLMQP7iO4FbQviygDetAPTC%2B%2BH6dQ%2F92uZHFBq6C2kMcM5Et%2F4h3ZUVIlD6dQDS3x2PZ3IFcKUvv5elJugGAkJFHPdqWAnhpql%2FogrfmD217JZq%2B07Wjnhet7QuQbC4CBh3aZ6SBcvSDm%2Fa3%2FWhRC6qIEDyALAtILOIaY%2Fz26Prn9npAhovxeneWLeDArr25FkE9pZ4%2BbQSuxv7i01ByRnz0BquhYW3y56FBKbA8oEmv9LX2bXcI5kP6OALw9YqFa2i0GkP%2BT7rRHteEbXl2F2%2B7gQa6JQJiU6Hd0xY%2FGmhg97yQH4FVEapuOtTqDJEICD4X0tQlp1cHd02iDJ5aJo4xK%2Fv9xor%2FVzn7dWj0IEDJRUxh%2FY6vY5j3ypMVJeq9WDajS%2FYoe%2FiBwlggjgKXbBZ0r36uVtvuM9WEidwBViVU7yNzbC%2FPSPQqx6RnnqS8pqZOILTYCbQHlnPaQvvJb9ZfNnf9h%2FdoTdxKxLQXBeRey1RXrh3Rlo8BTdWwsENeHfMSLEhppPTUeVrCiJe3EGI5246zpYZ57HwlD5CLqsQowyr4cOj18vwfP70fEbwVzHwCwB9SFW8LMrMJLByr4GOqUBeMGcHeD4PpNHtaSFKp%2FZDp0NgOcqcLeAJtEUbVHomGSAlcQPZt5gCnPoUwOFuNF9OvSs3fQs1ALJm0Wz40dgXcMtNZUQxO4BSFQya58k%2FyXsf2dKZlOImuNijXwB031UjFpm%2FnamS3bRkhBadjsgsmWqt2hA1uTyepisRNt7%2BX%2F6KF5aSnxk07OeGhpUzCecGEDPg%2BSB4qSnXvkFbCl6Pr%2FZjpRM&X-Amz-Signature=38b21bed96c6258c59d9ac6bcaed507ca1e771d3e0f5902ee589b6029ac7b5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC7PPQL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5DGeoqG41Vdy%2B%2FsQWeSafHBId2Bx3QMhTB%2BOX%2B2gDUAiEAklJPStbPziQmY7Bdy7eOGPA6TTdrKfwakYAssLzLQY8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8GidPetgGQ8XUReircA5P8TbsNv%2BL0WMz5W1E7%2FqStqC%2FQfqm4q2XDBfxOiY7wW4WLMQP7iO4FbQviygDetAPTC%2B%2BH6dQ%2F92uZHFBq6C2kMcM5Et%2F4h3ZUVIlD6dQDS3x2PZ3IFcKUvv5elJugGAkJFHPdqWAnhpql%2FogrfmD217JZq%2B07Wjnhet7QuQbC4CBh3aZ6SBcvSDm%2Fa3%2FWhRC6qIEDyALAtILOIaY%2Fz26Prn9npAhovxeneWLeDArr25FkE9pZ4%2BbQSuxv7i01ByRnz0BquhYW3y56FBKbA8oEmv9LX2bXcI5kP6OALw9YqFa2i0GkP%2BT7rRHteEbXl2F2%2B7gQa6JQJiU6Hd0xY%2FGmhg97yQH4FVEapuOtTqDJEICD4X0tQlp1cHd02iDJ5aJo4xK%2Fv9xor%2FVzn7dWj0IEDJRUxh%2FY6vY5j3ypMVJeq9WDajS%2FYoe%2FiBwlggjgKXbBZ0r36uVtvuM9WEidwBViVU7yNzbC%2FPSPQqx6RnnqS8pqZOILTYCbQHlnPaQvvJb9ZfNnf9h%2FdoTdxKxLQXBeRey1RXrh3Rlo8BTdWwsENeHfMSLEhppPTUeVrCiJe3EGI5246zpYZ57HwlD5CLqsQowyr4cOj18vwfP70fEbwVzHwCwB9SFW8LMrMJLByr4GOqUBeMGcHeD4PpNHtaSFKp%2FZDp0NgOcqcLeAJtEUbVHomGSAlcQPZt5gCnPoUwOFuNF9OvSs3fQs1ALJm0Wz40dgXcMtNZUQxO4BSFQya58k%2FyXsf2dKZlOImuNijXwB031UjFpm%2FnamS3bRkhBadjsgsmWqt2hA1uTyepisRNt7%2BX%2F6KF5aSnxk07OeGhpUzCecGEDPg%2BSB4qSnXvkFbCl6Pr%2FZjpRM&X-Amz-Signature=e4c1be9a84dcf4a13fdbca59f1fac3b3dda88391d901d6675c874e07fdfa3813&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC7PPQL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5DGeoqG41Vdy%2B%2FsQWeSafHBId2Bx3QMhTB%2BOX%2B2gDUAiEAklJPStbPziQmY7Bdy7eOGPA6TTdrKfwakYAssLzLQY8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8GidPetgGQ8XUReircA5P8TbsNv%2BL0WMz5W1E7%2FqStqC%2FQfqm4q2XDBfxOiY7wW4WLMQP7iO4FbQviygDetAPTC%2B%2BH6dQ%2F92uZHFBq6C2kMcM5Et%2F4h3ZUVIlD6dQDS3x2PZ3IFcKUvv5elJugGAkJFHPdqWAnhpql%2FogrfmD217JZq%2B07Wjnhet7QuQbC4CBh3aZ6SBcvSDm%2Fa3%2FWhRC6qIEDyALAtILOIaY%2Fz26Prn9npAhovxeneWLeDArr25FkE9pZ4%2BbQSuxv7i01ByRnz0BquhYW3y56FBKbA8oEmv9LX2bXcI5kP6OALw9YqFa2i0GkP%2BT7rRHteEbXl2F2%2B7gQa6JQJiU6Hd0xY%2FGmhg97yQH4FVEapuOtTqDJEICD4X0tQlp1cHd02iDJ5aJo4xK%2Fv9xor%2FVzn7dWj0IEDJRUxh%2FY6vY5j3ypMVJeq9WDajS%2FYoe%2FiBwlggjgKXbBZ0r36uVtvuM9WEidwBViVU7yNzbC%2FPSPQqx6RnnqS8pqZOILTYCbQHlnPaQvvJb9ZfNnf9h%2FdoTdxKxLQXBeRey1RXrh3Rlo8BTdWwsENeHfMSLEhppPTUeVrCiJe3EGI5246zpYZ57HwlD5CLqsQowyr4cOj18vwfP70fEbwVzHwCwB9SFW8LMrMJLByr4GOqUBeMGcHeD4PpNHtaSFKp%2FZDp0NgOcqcLeAJtEUbVHomGSAlcQPZt5gCnPoUwOFuNF9OvSs3fQs1ALJm0Wz40dgXcMtNZUQxO4BSFQya58k%2FyXsf2dKZlOImuNijXwB031UjFpm%2FnamS3bRkhBadjsgsmWqt2hA1uTyepisRNt7%2BX%2F6KF5aSnxk07OeGhpUzCecGEDPg%2BSB4qSnXvkFbCl6Pr%2FZjpRM&X-Amz-Signature=9955d133cbe7fd6392128af6739f3e4e8a84c526f127ae483d57d0051d7f1089&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
