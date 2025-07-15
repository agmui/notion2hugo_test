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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNESUGW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCkgIBhfJPvSmpaVuPovE3tzgvpS%2FAqrXF1iq533UPFbwIgbhfVAe6gbaosDkFSYyQ7fng34gUcCIqMNNBhDAuH6%2Bkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGcm4DHIcZM8rS1z3CrcAxG%2F6%2Fr60Hci5maKbFupBgUjX1P9gCbgK7iVbKMaSQpm3gu5DTph%2FWRj3K4Jz3V5v8F0DA0GCrkl49N%2FzXUFGEnvDr9KupJArBpJQC6HttrkbldOKuItUN6xguTPxATeX6Jnjh7PPFUdmIo%2FjdUZU8bcdfUQQr9gOwIM901ehhypmPjkW%2FiyLTdoc0SpGZaxd7FLDhat9c00w3cPii0l8%2FrxmQp1dKH3xojAtMFsURJ9rxLn5Fm1DesU5czjg9L2auEaCkvT4XirDVQM0EwVKBGgYcUgQh3dTdMZjLT19RYgjG6zqPQVD6qQ6JPQ0Oo3CpJL%2BcrxMaUOuIy3S18rLDF2Vf%2Fkc0VtKG1JypwuRKThKjBjzl3pL7J6owBhlSJbYF0lgyGfEpfK%2FMi94jL3pQvNvU3ikbHX7ODOjm26%2FfS9FuCyLU4GWG5zJcGA2rkg3WFKkEZ7rRT9LNHYmjVV6OYj53blJRoTJSUoUJXUKATyNFhlR4EAW9gvX9%2F%2BuFEOdWF1nV%2Fw%2FeaGogatE3f37BpbibTyj2Ywof%2BTdknVOZgzcCSGwyrGoSE6g1kwse%2BWmAJPujK0hEcEg%2F%2B5lcaaEUJlprEILUX5ij2%2Fbl5tc7AUed6o56IyIjPxCUBvMOr22sMGOqUBt3zeGiYpApzi881X3WKZtDn7%2Bjopc6Vvn2%2F9mq4bip8UD3c%2BCAl1WgsukKT5GWVcIgEnD3Sn0%2B2gBOSBi0v%2FfhV7dnIy5AgKQ5EwBN3GU4BUJN09zsa6BbMkKmN31usBKEZOINoL7JrH6k%2F5WxGIGXuMHGqyT7hzyfJ9gOPM%2FJ9B9w%2FG7J2YgiQZMVdj4JkL4q0nejC%2FZsaO8LHY0xcOguDo04UA&X-Amz-Signature=a699056af3a926339c0cf79bc8ccfb888b3590aeecb8c9a1f6524833645adefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNESUGW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCkgIBhfJPvSmpaVuPovE3tzgvpS%2FAqrXF1iq533UPFbwIgbhfVAe6gbaosDkFSYyQ7fng34gUcCIqMNNBhDAuH6%2Bkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGcm4DHIcZM8rS1z3CrcAxG%2F6%2Fr60Hci5maKbFupBgUjX1P9gCbgK7iVbKMaSQpm3gu5DTph%2FWRj3K4Jz3V5v8F0DA0GCrkl49N%2FzXUFGEnvDr9KupJArBpJQC6HttrkbldOKuItUN6xguTPxATeX6Jnjh7PPFUdmIo%2FjdUZU8bcdfUQQr9gOwIM901ehhypmPjkW%2FiyLTdoc0SpGZaxd7FLDhat9c00w3cPii0l8%2FrxmQp1dKH3xojAtMFsURJ9rxLn5Fm1DesU5czjg9L2auEaCkvT4XirDVQM0EwVKBGgYcUgQh3dTdMZjLT19RYgjG6zqPQVD6qQ6JPQ0Oo3CpJL%2BcrxMaUOuIy3S18rLDF2Vf%2Fkc0VtKG1JypwuRKThKjBjzl3pL7J6owBhlSJbYF0lgyGfEpfK%2FMi94jL3pQvNvU3ikbHX7ODOjm26%2FfS9FuCyLU4GWG5zJcGA2rkg3WFKkEZ7rRT9LNHYmjVV6OYj53blJRoTJSUoUJXUKATyNFhlR4EAW9gvX9%2F%2BuFEOdWF1nV%2Fw%2FeaGogatE3f37BpbibTyj2Ywof%2BTdknVOZgzcCSGwyrGoSE6g1kwse%2BWmAJPujK0hEcEg%2F%2B5lcaaEUJlprEILUX5ij2%2Fbl5tc7AUed6o56IyIjPxCUBvMOr22sMGOqUBt3zeGiYpApzi881X3WKZtDn7%2Bjopc6Vvn2%2F9mq4bip8UD3c%2BCAl1WgsukKT5GWVcIgEnD3Sn0%2B2gBOSBi0v%2FfhV7dnIy5AgKQ5EwBN3GU4BUJN09zsa6BbMkKmN31usBKEZOINoL7JrH6k%2F5WxGIGXuMHGqyT7hzyfJ9gOPM%2FJ9B9w%2FG7J2YgiQZMVdj4JkL4q0nejC%2FZsaO8LHY0xcOguDo04UA&X-Amz-Signature=91e4ae54193433919fb20196f7b15080718fdaefe9b08fa898ca965ea016b122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNESUGW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCkgIBhfJPvSmpaVuPovE3tzgvpS%2FAqrXF1iq533UPFbwIgbhfVAe6gbaosDkFSYyQ7fng34gUcCIqMNNBhDAuH6%2Bkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGcm4DHIcZM8rS1z3CrcAxG%2F6%2Fr60Hci5maKbFupBgUjX1P9gCbgK7iVbKMaSQpm3gu5DTph%2FWRj3K4Jz3V5v8F0DA0GCrkl49N%2FzXUFGEnvDr9KupJArBpJQC6HttrkbldOKuItUN6xguTPxATeX6Jnjh7PPFUdmIo%2FjdUZU8bcdfUQQr9gOwIM901ehhypmPjkW%2FiyLTdoc0SpGZaxd7FLDhat9c00w3cPii0l8%2FrxmQp1dKH3xojAtMFsURJ9rxLn5Fm1DesU5czjg9L2auEaCkvT4XirDVQM0EwVKBGgYcUgQh3dTdMZjLT19RYgjG6zqPQVD6qQ6JPQ0Oo3CpJL%2BcrxMaUOuIy3S18rLDF2Vf%2Fkc0VtKG1JypwuRKThKjBjzl3pL7J6owBhlSJbYF0lgyGfEpfK%2FMi94jL3pQvNvU3ikbHX7ODOjm26%2FfS9FuCyLU4GWG5zJcGA2rkg3WFKkEZ7rRT9LNHYmjVV6OYj53blJRoTJSUoUJXUKATyNFhlR4EAW9gvX9%2F%2BuFEOdWF1nV%2Fw%2FeaGogatE3f37BpbibTyj2Ywof%2BTdknVOZgzcCSGwyrGoSE6g1kwse%2BWmAJPujK0hEcEg%2F%2B5lcaaEUJlprEILUX5ij2%2Fbl5tc7AUed6o56IyIjPxCUBvMOr22sMGOqUBt3zeGiYpApzi881X3WKZtDn7%2Bjopc6Vvn2%2F9mq4bip8UD3c%2BCAl1WgsukKT5GWVcIgEnD3Sn0%2B2gBOSBi0v%2FfhV7dnIy5AgKQ5EwBN3GU4BUJN09zsa6BbMkKmN31usBKEZOINoL7JrH6k%2F5WxGIGXuMHGqyT7hzyfJ9gOPM%2FJ9B9w%2FG7J2YgiQZMVdj4JkL4q0nejC%2FZsaO8LHY0xcOguDo04UA&X-Amz-Signature=bb5d0ea040958dd5fd7e3b9d908bcbfcb8343005c1481880560a7e809d70775a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNESUGW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCkgIBhfJPvSmpaVuPovE3tzgvpS%2FAqrXF1iq533UPFbwIgbhfVAe6gbaosDkFSYyQ7fng34gUcCIqMNNBhDAuH6%2Bkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGcm4DHIcZM8rS1z3CrcAxG%2F6%2Fr60Hci5maKbFupBgUjX1P9gCbgK7iVbKMaSQpm3gu5DTph%2FWRj3K4Jz3V5v8F0DA0GCrkl49N%2FzXUFGEnvDr9KupJArBpJQC6HttrkbldOKuItUN6xguTPxATeX6Jnjh7PPFUdmIo%2FjdUZU8bcdfUQQr9gOwIM901ehhypmPjkW%2FiyLTdoc0SpGZaxd7FLDhat9c00w3cPii0l8%2FrxmQp1dKH3xojAtMFsURJ9rxLn5Fm1DesU5czjg9L2auEaCkvT4XirDVQM0EwVKBGgYcUgQh3dTdMZjLT19RYgjG6zqPQVD6qQ6JPQ0Oo3CpJL%2BcrxMaUOuIy3S18rLDF2Vf%2Fkc0VtKG1JypwuRKThKjBjzl3pL7J6owBhlSJbYF0lgyGfEpfK%2FMi94jL3pQvNvU3ikbHX7ODOjm26%2FfS9FuCyLU4GWG5zJcGA2rkg3WFKkEZ7rRT9LNHYmjVV6OYj53blJRoTJSUoUJXUKATyNFhlR4EAW9gvX9%2F%2BuFEOdWF1nV%2Fw%2FeaGogatE3f37BpbibTyj2Ywof%2BTdknVOZgzcCSGwyrGoSE6g1kwse%2BWmAJPujK0hEcEg%2F%2B5lcaaEUJlprEILUX5ij2%2Fbl5tc7AUed6o56IyIjPxCUBvMOr22sMGOqUBt3zeGiYpApzi881X3WKZtDn7%2Bjopc6Vvn2%2F9mq4bip8UD3c%2BCAl1WgsukKT5GWVcIgEnD3Sn0%2B2gBOSBi0v%2FfhV7dnIy5AgKQ5EwBN3GU4BUJN09zsa6BbMkKmN31usBKEZOINoL7JrH6k%2F5WxGIGXuMHGqyT7hzyfJ9gOPM%2FJ9B9w%2FG7J2YgiQZMVdj4JkL4q0nejC%2FZsaO8LHY0xcOguDo04UA&X-Amz-Signature=8cc6915478ffb412c5fc13bb9d3c9c63042cb092cfb66817ea467d633dc36055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNESUGW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCkgIBhfJPvSmpaVuPovE3tzgvpS%2FAqrXF1iq533UPFbwIgbhfVAe6gbaosDkFSYyQ7fng34gUcCIqMNNBhDAuH6%2Bkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGcm4DHIcZM8rS1z3CrcAxG%2F6%2Fr60Hci5maKbFupBgUjX1P9gCbgK7iVbKMaSQpm3gu5DTph%2FWRj3K4Jz3V5v8F0DA0GCrkl49N%2FzXUFGEnvDr9KupJArBpJQC6HttrkbldOKuItUN6xguTPxATeX6Jnjh7PPFUdmIo%2FjdUZU8bcdfUQQr9gOwIM901ehhypmPjkW%2FiyLTdoc0SpGZaxd7FLDhat9c00w3cPii0l8%2FrxmQp1dKH3xojAtMFsURJ9rxLn5Fm1DesU5czjg9L2auEaCkvT4XirDVQM0EwVKBGgYcUgQh3dTdMZjLT19RYgjG6zqPQVD6qQ6JPQ0Oo3CpJL%2BcrxMaUOuIy3S18rLDF2Vf%2Fkc0VtKG1JypwuRKThKjBjzl3pL7J6owBhlSJbYF0lgyGfEpfK%2FMi94jL3pQvNvU3ikbHX7ODOjm26%2FfS9FuCyLU4GWG5zJcGA2rkg3WFKkEZ7rRT9LNHYmjVV6OYj53blJRoTJSUoUJXUKATyNFhlR4EAW9gvX9%2F%2BuFEOdWF1nV%2Fw%2FeaGogatE3f37BpbibTyj2Ywof%2BTdknVOZgzcCSGwyrGoSE6g1kwse%2BWmAJPujK0hEcEg%2F%2B5lcaaEUJlprEILUX5ij2%2Fbl5tc7AUed6o56IyIjPxCUBvMOr22sMGOqUBt3zeGiYpApzi881X3WKZtDn7%2Bjopc6Vvn2%2F9mq4bip8UD3c%2BCAl1WgsukKT5GWVcIgEnD3Sn0%2B2gBOSBi0v%2FfhV7dnIy5AgKQ5EwBN3GU4BUJN09zsa6BbMkKmN31usBKEZOINoL7JrH6k%2F5WxGIGXuMHGqyT7hzyfJ9gOPM%2FJ9B9w%2FG7J2YgiQZMVdj4JkL4q0nejC%2FZsaO8LHY0xcOguDo04UA&X-Amz-Signature=18c5ef38e761bbb37a4a43aa949c6b75a39bdc5e12a92aa7222546fb3396b4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
