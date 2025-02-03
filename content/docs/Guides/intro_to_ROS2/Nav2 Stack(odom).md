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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=d26a3c3f8f9c90fc9ee5062325bdc90ed2be95769dc41fcea525b0eb39475e86&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=cd97e66df353f2104a2ff61aa71ef82f768d7699e593c2077e03adecdd496288&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=7476fa6bc6d65bcf4b462699fdfce3f9f557341f727c5dc737647b8a3b46d020&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=db7365399f8c457cc936d5274472b2668dc79a2b221272bf917773581b3be4df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=e3d57756d5db761203c301f7c3d4788a218ffce6625bf865fdc51dd72847d8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
