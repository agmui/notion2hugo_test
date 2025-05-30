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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NGZG7G5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnCw6XyIC6qo1n8iQlOdJQjE6SWmkwzVjgyu%2FiD7jH3AiEAw9D%2FJiHxLycuXv0NjdcBNwyCvciJpjdbINoQZA30T9QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5aFlnfuzGb62lz6CrcAzUBG2yXruVSnDZN6CSRUp2hJ0AP0DXvJeMj1JRhXuglYfLmbnl3Z9iuEmzLpy7TEd7iM6Cld9IkGzAq1JsDkZl%2Bv1ik1x1IXgJ42Kcsb7SxoQqOr13Ppzl7L0CbjeIQp%2Finnwqr3G%2Bt5ClIZLC7wtLhMFr0TGJ%2Bcee6NNpI36V5UAIwXuGL%2BvVHyUPHoblnj505Dw6E7EQT2VUFu5Ds5tPilSuyhYAe%2BuXH5HUmLSr32SZcIDwuQxBhOU89jLigosEwjDwiV05hZuwbeZMTM4XGXQlr8XFmPx6aMLV6IKonD6HgZ1h7CPvvbFqD5vy61xHzsJ39qQpxOaGEaqbHy3RZ7mha32qG87RxcmvYJe5fekTaVpuZFdSlk2biYtqxw7l6grygoKnvx75LjugXOKIX3jSemRO4AaBOlzYr%2FU94OyDEi1JNTj1rUH08UgRaeTROA0hoWqhV%2FdoYziUc6RZSem22OOGZfbtyAqI3O5VIFkmYR%2BXKPCpQR7FW1SOhdlMheVKuo%2FhvAyeR9MuQlFwE5xSV3RUYU3FicS%2FWJHkWYo4iMFoZIOwTsaHl7gM5nCxYBD05MxFz8nUacuePDoeXxh2PcVThulj8c8IiZIbD6pxAOEeLO73WQ0BMMJjc5cEGOqUBOVd8ebyvaTNAjzKHG5WHHvcRn2zrCt20kkj%2FQjgLui86EMyK6sjBtPQgwZftNcnVoOkJbva20CbNxZ4qU6orcU7%2BoxbvOy5o24KirIDFMYJQuuTsFvihaMEDdJHGjNNy%2FHlU4SusMIwJiiXjb1cDMHMY6Zj8CMqc%2Fi3WM2%2BOgzLqcK51toSdq61E7DQjCn0V1cMU34ei1EooxX3%2BSEaoJhx6vFpd&X-Amz-Signature=5fbf92f72c170e63f55f16b1e3cc90647173d0fd0c63336f4ea3410f24b49ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NGZG7G5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnCw6XyIC6qo1n8iQlOdJQjE6SWmkwzVjgyu%2FiD7jH3AiEAw9D%2FJiHxLycuXv0NjdcBNwyCvciJpjdbINoQZA30T9QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5aFlnfuzGb62lz6CrcAzUBG2yXruVSnDZN6CSRUp2hJ0AP0DXvJeMj1JRhXuglYfLmbnl3Z9iuEmzLpy7TEd7iM6Cld9IkGzAq1JsDkZl%2Bv1ik1x1IXgJ42Kcsb7SxoQqOr13Ppzl7L0CbjeIQp%2Finnwqr3G%2Bt5ClIZLC7wtLhMFr0TGJ%2Bcee6NNpI36V5UAIwXuGL%2BvVHyUPHoblnj505Dw6E7EQT2VUFu5Ds5tPilSuyhYAe%2BuXH5HUmLSr32SZcIDwuQxBhOU89jLigosEwjDwiV05hZuwbeZMTM4XGXQlr8XFmPx6aMLV6IKonD6HgZ1h7CPvvbFqD5vy61xHzsJ39qQpxOaGEaqbHy3RZ7mha32qG87RxcmvYJe5fekTaVpuZFdSlk2biYtqxw7l6grygoKnvx75LjugXOKIX3jSemRO4AaBOlzYr%2FU94OyDEi1JNTj1rUH08UgRaeTROA0hoWqhV%2FdoYziUc6RZSem22OOGZfbtyAqI3O5VIFkmYR%2BXKPCpQR7FW1SOhdlMheVKuo%2FhvAyeR9MuQlFwE5xSV3RUYU3FicS%2FWJHkWYo4iMFoZIOwTsaHl7gM5nCxYBD05MxFz8nUacuePDoeXxh2PcVThulj8c8IiZIbD6pxAOEeLO73WQ0BMMJjc5cEGOqUBOVd8ebyvaTNAjzKHG5WHHvcRn2zrCt20kkj%2FQjgLui86EMyK6sjBtPQgwZftNcnVoOkJbva20CbNxZ4qU6orcU7%2BoxbvOy5o24KirIDFMYJQuuTsFvihaMEDdJHGjNNy%2FHlU4SusMIwJiiXjb1cDMHMY6Zj8CMqc%2Fi3WM2%2BOgzLqcK51toSdq61E7DQjCn0V1cMU34ei1EooxX3%2BSEaoJhx6vFpd&X-Amz-Signature=121bc249d314fdfae16fff0bafda3d2f65144e5611935f6447f64f02fdab80c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NGZG7G5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnCw6XyIC6qo1n8iQlOdJQjE6SWmkwzVjgyu%2FiD7jH3AiEAw9D%2FJiHxLycuXv0NjdcBNwyCvciJpjdbINoQZA30T9QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5aFlnfuzGb62lz6CrcAzUBG2yXruVSnDZN6CSRUp2hJ0AP0DXvJeMj1JRhXuglYfLmbnl3Z9iuEmzLpy7TEd7iM6Cld9IkGzAq1JsDkZl%2Bv1ik1x1IXgJ42Kcsb7SxoQqOr13Ppzl7L0CbjeIQp%2Finnwqr3G%2Bt5ClIZLC7wtLhMFr0TGJ%2Bcee6NNpI36V5UAIwXuGL%2BvVHyUPHoblnj505Dw6E7EQT2VUFu5Ds5tPilSuyhYAe%2BuXH5HUmLSr32SZcIDwuQxBhOU89jLigosEwjDwiV05hZuwbeZMTM4XGXQlr8XFmPx6aMLV6IKonD6HgZ1h7CPvvbFqD5vy61xHzsJ39qQpxOaGEaqbHy3RZ7mha32qG87RxcmvYJe5fekTaVpuZFdSlk2biYtqxw7l6grygoKnvx75LjugXOKIX3jSemRO4AaBOlzYr%2FU94OyDEi1JNTj1rUH08UgRaeTROA0hoWqhV%2FdoYziUc6RZSem22OOGZfbtyAqI3O5VIFkmYR%2BXKPCpQR7FW1SOhdlMheVKuo%2FhvAyeR9MuQlFwE5xSV3RUYU3FicS%2FWJHkWYo4iMFoZIOwTsaHl7gM5nCxYBD05MxFz8nUacuePDoeXxh2PcVThulj8c8IiZIbD6pxAOEeLO73WQ0BMMJjc5cEGOqUBOVd8ebyvaTNAjzKHG5WHHvcRn2zrCt20kkj%2FQjgLui86EMyK6sjBtPQgwZftNcnVoOkJbva20CbNxZ4qU6orcU7%2BoxbvOy5o24KirIDFMYJQuuTsFvihaMEDdJHGjNNy%2FHlU4SusMIwJiiXjb1cDMHMY6Zj8CMqc%2Fi3WM2%2BOgzLqcK51toSdq61E7DQjCn0V1cMU34ei1EooxX3%2BSEaoJhx6vFpd&X-Amz-Signature=70d82520f10bd32098aba11034334213f3f93e6484c74d14f2f848476cf94de7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NGZG7G5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnCw6XyIC6qo1n8iQlOdJQjE6SWmkwzVjgyu%2FiD7jH3AiEAw9D%2FJiHxLycuXv0NjdcBNwyCvciJpjdbINoQZA30T9QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5aFlnfuzGb62lz6CrcAzUBG2yXruVSnDZN6CSRUp2hJ0AP0DXvJeMj1JRhXuglYfLmbnl3Z9iuEmzLpy7TEd7iM6Cld9IkGzAq1JsDkZl%2Bv1ik1x1IXgJ42Kcsb7SxoQqOr13Ppzl7L0CbjeIQp%2Finnwqr3G%2Bt5ClIZLC7wtLhMFr0TGJ%2Bcee6NNpI36V5UAIwXuGL%2BvVHyUPHoblnj505Dw6E7EQT2VUFu5Ds5tPilSuyhYAe%2BuXH5HUmLSr32SZcIDwuQxBhOU89jLigosEwjDwiV05hZuwbeZMTM4XGXQlr8XFmPx6aMLV6IKonD6HgZ1h7CPvvbFqD5vy61xHzsJ39qQpxOaGEaqbHy3RZ7mha32qG87RxcmvYJe5fekTaVpuZFdSlk2biYtqxw7l6grygoKnvx75LjugXOKIX3jSemRO4AaBOlzYr%2FU94OyDEi1JNTj1rUH08UgRaeTROA0hoWqhV%2FdoYziUc6RZSem22OOGZfbtyAqI3O5VIFkmYR%2BXKPCpQR7FW1SOhdlMheVKuo%2FhvAyeR9MuQlFwE5xSV3RUYU3FicS%2FWJHkWYo4iMFoZIOwTsaHl7gM5nCxYBD05MxFz8nUacuePDoeXxh2PcVThulj8c8IiZIbD6pxAOEeLO73WQ0BMMJjc5cEGOqUBOVd8ebyvaTNAjzKHG5WHHvcRn2zrCt20kkj%2FQjgLui86EMyK6sjBtPQgwZftNcnVoOkJbva20CbNxZ4qU6orcU7%2BoxbvOy5o24KirIDFMYJQuuTsFvihaMEDdJHGjNNy%2FHlU4SusMIwJiiXjb1cDMHMY6Zj8CMqc%2Fi3WM2%2BOgzLqcK51toSdq61E7DQjCn0V1cMU34ei1EooxX3%2BSEaoJhx6vFpd&X-Amz-Signature=498a11754d1bd6f7f3f97cc9cca15d5a9dffbde8550c30aae6ec9d87f6dae538&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NGZG7G5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnCw6XyIC6qo1n8iQlOdJQjE6SWmkwzVjgyu%2FiD7jH3AiEAw9D%2FJiHxLycuXv0NjdcBNwyCvciJpjdbINoQZA30T9QqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5aFlnfuzGb62lz6CrcAzUBG2yXruVSnDZN6CSRUp2hJ0AP0DXvJeMj1JRhXuglYfLmbnl3Z9iuEmzLpy7TEd7iM6Cld9IkGzAq1JsDkZl%2Bv1ik1x1IXgJ42Kcsb7SxoQqOr13Ppzl7L0CbjeIQp%2Finnwqr3G%2Bt5ClIZLC7wtLhMFr0TGJ%2Bcee6NNpI36V5UAIwXuGL%2BvVHyUPHoblnj505Dw6E7EQT2VUFu5Ds5tPilSuyhYAe%2BuXH5HUmLSr32SZcIDwuQxBhOU89jLigosEwjDwiV05hZuwbeZMTM4XGXQlr8XFmPx6aMLV6IKonD6HgZ1h7CPvvbFqD5vy61xHzsJ39qQpxOaGEaqbHy3RZ7mha32qG87RxcmvYJe5fekTaVpuZFdSlk2biYtqxw7l6grygoKnvx75LjugXOKIX3jSemRO4AaBOlzYr%2FU94OyDEi1JNTj1rUH08UgRaeTROA0hoWqhV%2FdoYziUc6RZSem22OOGZfbtyAqI3O5VIFkmYR%2BXKPCpQR7FW1SOhdlMheVKuo%2FhvAyeR9MuQlFwE5xSV3RUYU3FicS%2FWJHkWYo4iMFoZIOwTsaHl7gM5nCxYBD05MxFz8nUacuePDoeXxh2PcVThulj8c8IiZIbD6pxAOEeLO73WQ0BMMJjc5cEGOqUBOVd8ebyvaTNAjzKHG5WHHvcRn2zrCt20kkj%2FQjgLui86EMyK6sjBtPQgwZftNcnVoOkJbva20CbNxZ4qU6orcU7%2BoxbvOy5o24KirIDFMYJQuuTsFvihaMEDdJHGjNNy%2FHlU4SusMIwJiiXjb1cDMHMY6Zj8CMqc%2Fi3WM2%2BOgzLqcK51toSdq61E7DQjCn0V1cMU34ei1EooxX3%2BSEaoJhx6vFpd&X-Amz-Signature=860d42b0374db064d386ece2352fe2ebac7646a8af671ef6922b11679d155c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
