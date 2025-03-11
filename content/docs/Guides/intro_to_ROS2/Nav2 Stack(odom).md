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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ6MENS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDH%2Ffc3hCU5cr96wZeIFMbeeHMRI5n5Oqi9G%2BFsjRJDOwIhAKZSNeEAmzJG3vAfhNFqRTf%2BciB0isn%2Bi%2BoEvoiHINw3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRkZ3veVUh96YqIDQq3APXlbjMSpPiORwOMY7K0nRPVIX4vpy%2B%2BJLoZvlJaMXlhc4t4gFMZwPGt1rF5Q40%2BZXNPpxYkr1q%2FE6D9LQTNm0wweg9dwW63Rje9CTw6rIVRtAxF%2BSjyPy4Tt%2FiZJUMMpd8IFL5Y1WtVRESBYeGPwqavaXQHaisP57JNqDt3aHb4Fl6FxCvrdwqVm0eOjzuPl4sIqi29uScKRwNFAP5spFwEEThapjeIyv3DaLlekzcRmzBWtDDAy%2BIBYVLUImYT34D2xdQU7TSOsJovMFvz2Id4CtmUI5tn3ioea8nGkRjANC3p9b2xQoQvZUOfe8hXe1J%2BTjGepc%2FGJIPkqgbZWqkG93tDSxHSM9HXKe2BueOKp4s37ZiW3SO9JxgRkd%2Fgy4jzXbrBdUAoSzeEAfxb%2BYRsTSMQ9xEtwGJwGTFs3BuPdD31XUx8Bd%2F9OmP%2FHBTkC1pnvB%2Fteq45%2BfgVaNqXbGDuFzjlP3n9W%2FHU%2Fxo%2FcninJGzwHGaxBFWQV3RT4Mx0OAaBPVVn7XvQ7HieiowCFtlr%2ByHchP3xTA2LHebaKxpVFEUqNIkvqnG2AxVjD49jOvj5xvMynrGz0J5trOiI3xz7JKAghvhaEaMl5pqIiFLBYihnEdTU2X%2BfhnctjD07b2%2BBjqkAVzrc%2B6JH7Yfo35J6QcCXUTPZnqkEw%2Fnsfd%2BYnN6yiSckQJ%2FafAzchz%2FKlE5uDMwunOMwqg1S6pUUNKPMdV4VqJCHEM4qbWMnZ3Zj9Mgcip3n0LWSk782BPgIpibwbuw3JVXM%2Bcr5vOJ8E%2FvVBDXMxyyZaFlvR3zhDyN%2FTIO0hR%2BfuzhGaZWmYUaNP8Nk18EcsN0rb6gyTV9c7uNc3a2hAk%2BFYAW&X-Amz-Signature=92190a2fa740976bd81a0294edcec0e7b125808b2058228adc11a1ee31f4b141&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ6MENS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDH%2Ffc3hCU5cr96wZeIFMbeeHMRI5n5Oqi9G%2BFsjRJDOwIhAKZSNeEAmzJG3vAfhNFqRTf%2BciB0isn%2Bi%2BoEvoiHINw3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRkZ3veVUh96YqIDQq3APXlbjMSpPiORwOMY7K0nRPVIX4vpy%2B%2BJLoZvlJaMXlhc4t4gFMZwPGt1rF5Q40%2BZXNPpxYkr1q%2FE6D9LQTNm0wweg9dwW63Rje9CTw6rIVRtAxF%2BSjyPy4Tt%2FiZJUMMpd8IFL5Y1WtVRESBYeGPwqavaXQHaisP57JNqDt3aHb4Fl6FxCvrdwqVm0eOjzuPl4sIqi29uScKRwNFAP5spFwEEThapjeIyv3DaLlekzcRmzBWtDDAy%2BIBYVLUImYT34D2xdQU7TSOsJovMFvz2Id4CtmUI5tn3ioea8nGkRjANC3p9b2xQoQvZUOfe8hXe1J%2BTjGepc%2FGJIPkqgbZWqkG93tDSxHSM9HXKe2BueOKp4s37ZiW3SO9JxgRkd%2Fgy4jzXbrBdUAoSzeEAfxb%2BYRsTSMQ9xEtwGJwGTFs3BuPdD31XUx8Bd%2F9OmP%2FHBTkC1pnvB%2Fteq45%2BfgVaNqXbGDuFzjlP3n9W%2FHU%2Fxo%2FcninJGzwHGaxBFWQV3RT4Mx0OAaBPVVn7XvQ7HieiowCFtlr%2ByHchP3xTA2LHebaKxpVFEUqNIkvqnG2AxVjD49jOvj5xvMynrGz0J5trOiI3xz7JKAghvhaEaMl5pqIiFLBYihnEdTU2X%2BfhnctjD07b2%2BBjqkAVzrc%2B6JH7Yfo35J6QcCXUTPZnqkEw%2Fnsfd%2BYnN6yiSckQJ%2FafAzchz%2FKlE5uDMwunOMwqg1S6pUUNKPMdV4VqJCHEM4qbWMnZ3Zj9Mgcip3n0LWSk782BPgIpibwbuw3JVXM%2Bcr5vOJ8E%2FvVBDXMxyyZaFlvR3zhDyN%2FTIO0hR%2BfuzhGaZWmYUaNP8Nk18EcsN0rb6gyTV9c7uNc3a2hAk%2BFYAW&X-Amz-Signature=dc2270c1fdaf063c5439a4d76a0e013b99c0bcbb9d1640297f5254f9708b8f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ6MENS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDH%2Ffc3hCU5cr96wZeIFMbeeHMRI5n5Oqi9G%2BFsjRJDOwIhAKZSNeEAmzJG3vAfhNFqRTf%2BciB0isn%2Bi%2BoEvoiHINw3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRkZ3veVUh96YqIDQq3APXlbjMSpPiORwOMY7K0nRPVIX4vpy%2B%2BJLoZvlJaMXlhc4t4gFMZwPGt1rF5Q40%2BZXNPpxYkr1q%2FE6D9LQTNm0wweg9dwW63Rje9CTw6rIVRtAxF%2BSjyPy4Tt%2FiZJUMMpd8IFL5Y1WtVRESBYeGPwqavaXQHaisP57JNqDt3aHb4Fl6FxCvrdwqVm0eOjzuPl4sIqi29uScKRwNFAP5spFwEEThapjeIyv3DaLlekzcRmzBWtDDAy%2BIBYVLUImYT34D2xdQU7TSOsJovMFvz2Id4CtmUI5tn3ioea8nGkRjANC3p9b2xQoQvZUOfe8hXe1J%2BTjGepc%2FGJIPkqgbZWqkG93tDSxHSM9HXKe2BueOKp4s37ZiW3SO9JxgRkd%2Fgy4jzXbrBdUAoSzeEAfxb%2BYRsTSMQ9xEtwGJwGTFs3BuPdD31XUx8Bd%2F9OmP%2FHBTkC1pnvB%2Fteq45%2BfgVaNqXbGDuFzjlP3n9W%2FHU%2Fxo%2FcninJGzwHGaxBFWQV3RT4Mx0OAaBPVVn7XvQ7HieiowCFtlr%2ByHchP3xTA2LHebaKxpVFEUqNIkvqnG2AxVjD49jOvj5xvMynrGz0J5trOiI3xz7JKAghvhaEaMl5pqIiFLBYihnEdTU2X%2BfhnctjD07b2%2BBjqkAVzrc%2B6JH7Yfo35J6QcCXUTPZnqkEw%2Fnsfd%2BYnN6yiSckQJ%2FafAzchz%2FKlE5uDMwunOMwqg1S6pUUNKPMdV4VqJCHEM4qbWMnZ3Zj9Mgcip3n0LWSk782BPgIpibwbuw3JVXM%2Bcr5vOJ8E%2FvVBDXMxyyZaFlvR3zhDyN%2FTIO0hR%2BfuzhGaZWmYUaNP8Nk18EcsN0rb6gyTV9c7uNc3a2hAk%2BFYAW&X-Amz-Signature=e573c544e1c6ebd7e2a81d6a507f48158abe58dbba802d46b0ed981e479dc94e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ6MENS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDH%2Ffc3hCU5cr96wZeIFMbeeHMRI5n5Oqi9G%2BFsjRJDOwIhAKZSNeEAmzJG3vAfhNFqRTf%2BciB0isn%2Bi%2BoEvoiHINw3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRkZ3veVUh96YqIDQq3APXlbjMSpPiORwOMY7K0nRPVIX4vpy%2B%2BJLoZvlJaMXlhc4t4gFMZwPGt1rF5Q40%2BZXNPpxYkr1q%2FE6D9LQTNm0wweg9dwW63Rje9CTw6rIVRtAxF%2BSjyPy4Tt%2FiZJUMMpd8IFL5Y1WtVRESBYeGPwqavaXQHaisP57JNqDt3aHb4Fl6FxCvrdwqVm0eOjzuPl4sIqi29uScKRwNFAP5spFwEEThapjeIyv3DaLlekzcRmzBWtDDAy%2BIBYVLUImYT34D2xdQU7TSOsJovMFvz2Id4CtmUI5tn3ioea8nGkRjANC3p9b2xQoQvZUOfe8hXe1J%2BTjGepc%2FGJIPkqgbZWqkG93tDSxHSM9HXKe2BueOKp4s37ZiW3SO9JxgRkd%2Fgy4jzXbrBdUAoSzeEAfxb%2BYRsTSMQ9xEtwGJwGTFs3BuPdD31XUx8Bd%2F9OmP%2FHBTkC1pnvB%2Fteq45%2BfgVaNqXbGDuFzjlP3n9W%2FHU%2Fxo%2FcninJGzwHGaxBFWQV3RT4Mx0OAaBPVVn7XvQ7HieiowCFtlr%2ByHchP3xTA2LHebaKxpVFEUqNIkvqnG2AxVjD49jOvj5xvMynrGz0J5trOiI3xz7JKAghvhaEaMl5pqIiFLBYihnEdTU2X%2BfhnctjD07b2%2BBjqkAVzrc%2B6JH7Yfo35J6QcCXUTPZnqkEw%2Fnsfd%2BYnN6yiSckQJ%2FafAzchz%2FKlE5uDMwunOMwqg1S6pUUNKPMdV4VqJCHEM4qbWMnZ3Zj9Mgcip3n0LWSk782BPgIpibwbuw3JVXM%2Bcr5vOJ8E%2FvVBDXMxyyZaFlvR3zhDyN%2FTIO0hR%2BfuzhGaZWmYUaNP8Nk18EcsN0rb6gyTV9c7uNc3a2hAk%2BFYAW&X-Amz-Signature=ea2311afd0e533b1c12791de3e3ad367e8533f48342109a50e401bde8724cc94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDQ6MENS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDH%2Ffc3hCU5cr96wZeIFMbeeHMRI5n5Oqi9G%2BFsjRJDOwIhAKZSNeEAmzJG3vAfhNFqRTf%2BciB0isn%2Bi%2BoEvoiHINw3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRkZ3veVUh96YqIDQq3APXlbjMSpPiORwOMY7K0nRPVIX4vpy%2B%2BJLoZvlJaMXlhc4t4gFMZwPGt1rF5Q40%2BZXNPpxYkr1q%2FE6D9LQTNm0wweg9dwW63Rje9CTw6rIVRtAxF%2BSjyPy4Tt%2FiZJUMMpd8IFL5Y1WtVRESBYeGPwqavaXQHaisP57JNqDt3aHb4Fl6FxCvrdwqVm0eOjzuPl4sIqi29uScKRwNFAP5spFwEEThapjeIyv3DaLlekzcRmzBWtDDAy%2BIBYVLUImYT34D2xdQU7TSOsJovMFvz2Id4CtmUI5tn3ioea8nGkRjANC3p9b2xQoQvZUOfe8hXe1J%2BTjGepc%2FGJIPkqgbZWqkG93tDSxHSM9HXKe2BueOKp4s37ZiW3SO9JxgRkd%2Fgy4jzXbrBdUAoSzeEAfxb%2BYRsTSMQ9xEtwGJwGTFs3BuPdD31XUx8Bd%2F9OmP%2FHBTkC1pnvB%2Fteq45%2BfgVaNqXbGDuFzjlP3n9W%2FHU%2Fxo%2FcninJGzwHGaxBFWQV3RT4Mx0OAaBPVVn7XvQ7HieiowCFtlr%2ByHchP3xTA2LHebaKxpVFEUqNIkvqnG2AxVjD49jOvj5xvMynrGz0J5trOiI3xz7JKAghvhaEaMl5pqIiFLBYihnEdTU2X%2BfhnctjD07b2%2BBjqkAVzrc%2B6JH7Yfo35J6QcCXUTPZnqkEw%2Fnsfd%2BYnN6yiSckQJ%2FafAzchz%2FKlE5uDMwunOMwqg1S6pUUNKPMdV4VqJCHEM4qbWMnZ3Zj9Mgcip3n0LWSk782BPgIpibwbuw3JVXM%2Bcr5vOJ8E%2FvVBDXMxyyZaFlvR3zhDyN%2FTIO0hR%2BfuzhGaZWmYUaNP8Nk18EcsN0rb6gyTV9c7uNc3a2hAk%2BFYAW&X-Amz-Signature=6635bc4dfccd5d763e40a16ee8bcc15f9a5eac26b605703ed1ed3b527759d06e&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
