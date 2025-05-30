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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HFTNGE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4OrkrODnLhXrMv5EhAcjTxRBLOFQxtKAoAuRCKfCJQIgYmk%2FDlVRRzOjPouhP1Q8qh6dSwIkC5sSSND15y3Xs7gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5MRVzGOpjmKq%2FLlyrcA9bmMCbYLFREHfPWby8pAxzNi6oBa3eGP%2BjN2c%2BqRs8ybedMLjXHLC4pVXJZBWD10totWUdBAuuEh%2FIOR%2B376bm51GBUd26y3uTOQe%2BLk1d61pUAZ1pHNOK9Vfu4SbtXqx7dikY7cUUnzAO0R7SY%2BPl3gTZAQZ1ErT3Khc8KJJt8e5NiFCKKIF5wxHL%2FZUvC6EcCnkigxlLUCKLPkMsXN3XrtNoykTBq3%2B3qOcgfkRZfM%2FrF3PsEb50VzfOjZZyq8dTh3oOQhmV15bIy58ub%2FRhN6DDyqy4qch%2FHZgk4MCDZgkf8pQMTjXZA3%2FQEtZ2JHHdvQaWLUSXSLlVENhpbqZ5IF5PjClxFop1guI9c9VAtE%2FP0p%2FIRGdOFwPEf5RPnC4buEhCPW%2BuB9eIY3nZD%2Bux0T1uad72aAoRTJrvvKpoGeWmNyBJ81%2FnqyhGl67zAS1gPSSHHW7%2BMnJUCVRh%2BfEi4tOgOs0oc2RMcnJjNt%2F2D3k%2B%2FSiStjs0gYivQD5yZVoAyw8m5AZthZVY1RDLDoKp2%2FRLUapWv5qZLNVUW%2FZSrRsPf7bAK9aynztv8tYtLndqKUgsg2XlTKQhMd3WuRxrJ7SJkOGKI0GtJhceOmuOZGxty5ig0bk%2ByPSxIMLzx5sEGOqUBr7guBq7gggIuiv9ykVBGYVOyYuM2b1Z3%2BbUFAEoXnSG7rTzoh2cNprBOnksXjysEP5AH2BlLJQ%2BAcTHEl4RSktuS1IZWAGRrF9e3zhEl%2FlARAdXQjfThSXuIyt7dtXv17yay5O5CvhpMKa0WompEyO4UoLk6KwHDL9SkFQrxJWoV06NjJHZpdxXWLYBzpnCdDTmr8N8FVmY6DQ8jtfyoYZyOCRAz&X-Amz-Signature=fbd74f0e47f6adaffc1dce02b6419912758c4ed05fa3283f5b4fc858de86741c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HFTNGE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4OrkrODnLhXrMv5EhAcjTxRBLOFQxtKAoAuRCKfCJQIgYmk%2FDlVRRzOjPouhP1Q8qh6dSwIkC5sSSND15y3Xs7gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5MRVzGOpjmKq%2FLlyrcA9bmMCbYLFREHfPWby8pAxzNi6oBa3eGP%2BjN2c%2BqRs8ybedMLjXHLC4pVXJZBWD10totWUdBAuuEh%2FIOR%2B376bm51GBUd26y3uTOQe%2BLk1d61pUAZ1pHNOK9Vfu4SbtXqx7dikY7cUUnzAO0R7SY%2BPl3gTZAQZ1ErT3Khc8KJJt8e5NiFCKKIF5wxHL%2FZUvC6EcCnkigxlLUCKLPkMsXN3XrtNoykTBq3%2B3qOcgfkRZfM%2FrF3PsEb50VzfOjZZyq8dTh3oOQhmV15bIy58ub%2FRhN6DDyqy4qch%2FHZgk4MCDZgkf8pQMTjXZA3%2FQEtZ2JHHdvQaWLUSXSLlVENhpbqZ5IF5PjClxFop1guI9c9VAtE%2FP0p%2FIRGdOFwPEf5RPnC4buEhCPW%2BuB9eIY3nZD%2Bux0T1uad72aAoRTJrvvKpoGeWmNyBJ81%2FnqyhGl67zAS1gPSSHHW7%2BMnJUCVRh%2BfEi4tOgOs0oc2RMcnJjNt%2F2D3k%2B%2FSiStjs0gYivQD5yZVoAyw8m5AZthZVY1RDLDoKp2%2FRLUapWv5qZLNVUW%2FZSrRsPf7bAK9aynztv8tYtLndqKUgsg2XlTKQhMd3WuRxrJ7SJkOGKI0GtJhceOmuOZGxty5ig0bk%2ByPSxIMLzx5sEGOqUBr7guBq7gggIuiv9ykVBGYVOyYuM2b1Z3%2BbUFAEoXnSG7rTzoh2cNprBOnksXjysEP5AH2BlLJQ%2BAcTHEl4RSktuS1IZWAGRrF9e3zhEl%2FlARAdXQjfThSXuIyt7dtXv17yay5O5CvhpMKa0WompEyO4UoLk6KwHDL9SkFQrxJWoV06NjJHZpdxXWLYBzpnCdDTmr8N8FVmY6DQ8jtfyoYZyOCRAz&X-Amz-Signature=17b8f36cd71718a9fd05328f5d1cbcf4d4a62b92c10d840edfbcf88789e667e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HFTNGE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4OrkrODnLhXrMv5EhAcjTxRBLOFQxtKAoAuRCKfCJQIgYmk%2FDlVRRzOjPouhP1Q8qh6dSwIkC5sSSND15y3Xs7gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5MRVzGOpjmKq%2FLlyrcA9bmMCbYLFREHfPWby8pAxzNi6oBa3eGP%2BjN2c%2BqRs8ybedMLjXHLC4pVXJZBWD10totWUdBAuuEh%2FIOR%2B376bm51GBUd26y3uTOQe%2BLk1d61pUAZ1pHNOK9Vfu4SbtXqx7dikY7cUUnzAO0R7SY%2BPl3gTZAQZ1ErT3Khc8KJJt8e5NiFCKKIF5wxHL%2FZUvC6EcCnkigxlLUCKLPkMsXN3XrtNoykTBq3%2B3qOcgfkRZfM%2FrF3PsEb50VzfOjZZyq8dTh3oOQhmV15bIy58ub%2FRhN6DDyqy4qch%2FHZgk4MCDZgkf8pQMTjXZA3%2FQEtZ2JHHdvQaWLUSXSLlVENhpbqZ5IF5PjClxFop1guI9c9VAtE%2FP0p%2FIRGdOFwPEf5RPnC4buEhCPW%2BuB9eIY3nZD%2Bux0T1uad72aAoRTJrvvKpoGeWmNyBJ81%2FnqyhGl67zAS1gPSSHHW7%2BMnJUCVRh%2BfEi4tOgOs0oc2RMcnJjNt%2F2D3k%2B%2FSiStjs0gYivQD5yZVoAyw8m5AZthZVY1RDLDoKp2%2FRLUapWv5qZLNVUW%2FZSrRsPf7bAK9aynztv8tYtLndqKUgsg2XlTKQhMd3WuRxrJ7SJkOGKI0GtJhceOmuOZGxty5ig0bk%2ByPSxIMLzx5sEGOqUBr7guBq7gggIuiv9ykVBGYVOyYuM2b1Z3%2BbUFAEoXnSG7rTzoh2cNprBOnksXjysEP5AH2BlLJQ%2BAcTHEl4RSktuS1IZWAGRrF9e3zhEl%2FlARAdXQjfThSXuIyt7dtXv17yay5O5CvhpMKa0WompEyO4UoLk6KwHDL9SkFQrxJWoV06NjJHZpdxXWLYBzpnCdDTmr8N8FVmY6DQ8jtfyoYZyOCRAz&X-Amz-Signature=254c6885e7a2e28db87675ac4c1ea25db613e5a6c4b5220191d81c946927bc59&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HFTNGE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4OrkrODnLhXrMv5EhAcjTxRBLOFQxtKAoAuRCKfCJQIgYmk%2FDlVRRzOjPouhP1Q8qh6dSwIkC5sSSND15y3Xs7gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5MRVzGOpjmKq%2FLlyrcA9bmMCbYLFREHfPWby8pAxzNi6oBa3eGP%2BjN2c%2BqRs8ybedMLjXHLC4pVXJZBWD10totWUdBAuuEh%2FIOR%2B376bm51GBUd26y3uTOQe%2BLk1d61pUAZ1pHNOK9Vfu4SbtXqx7dikY7cUUnzAO0R7SY%2BPl3gTZAQZ1ErT3Khc8KJJt8e5NiFCKKIF5wxHL%2FZUvC6EcCnkigxlLUCKLPkMsXN3XrtNoykTBq3%2B3qOcgfkRZfM%2FrF3PsEb50VzfOjZZyq8dTh3oOQhmV15bIy58ub%2FRhN6DDyqy4qch%2FHZgk4MCDZgkf8pQMTjXZA3%2FQEtZ2JHHdvQaWLUSXSLlVENhpbqZ5IF5PjClxFop1guI9c9VAtE%2FP0p%2FIRGdOFwPEf5RPnC4buEhCPW%2BuB9eIY3nZD%2Bux0T1uad72aAoRTJrvvKpoGeWmNyBJ81%2FnqyhGl67zAS1gPSSHHW7%2BMnJUCVRh%2BfEi4tOgOs0oc2RMcnJjNt%2F2D3k%2B%2FSiStjs0gYivQD5yZVoAyw8m5AZthZVY1RDLDoKp2%2FRLUapWv5qZLNVUW%2FZSrRsPf7bAK9aynztv8tYtLndqKUgsg2XlTKQhMd3WuRxrJ7SJkOGKI0GtJhceOmuOZGxty5ig0bk%2ByPSxIMLzx5sEGOqUBr7guBq7gggIuiv9ykVBGYVOyYuM2b1Z3%2BbUFAEoXnSG7rTzoh2cNprBOnksXjysEP5AH2BlLJQ%2BAcTHEl4RSktuS1IZWAGRrF9e3zhEl%2FlARAdXQjfThSXuIyt7dtXv17yay5O5CvhpMKa0WompEyO4UoLk6KwHDL9SkFQrxJWoV06NjJHZpdxXWLYBzpnCdDTmr8N8FVmY6DQ8jtfyoYZyOCRAz&X-Amz-Signature=30a394322f09df743bb8b93ae96ba5ab6098f7510d773365c32481d8496b6c21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HFTNGE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG4OrkrODnLhXrMv5EhAcjTxRBLOFQxtKAoAuRCKfCJQIgYmk%2FDlVRRzOjPouhP1Q8qh6dSwIkC5sSSND15y3Xs7gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5MRVzGOpjmKq%2FLlyrcA9bmMCbYLFREHfPWby8pAxzNi6oBa3eGP%2BjN2c%2BqRs8ybedMLjXHLC4pVXJZBWD10totWUdBAuuEh%2FIOR%2B376bm51GBUd26y3uTOQe%2BLk1d61pUAZ1pHNOK9Vfu4SbtXqx7dikY7cUUnzAO0R7SY%2BPl3gTZAQZ1ErT3Khc8KJJt8e5NiFCKKIF5wxHL%2FZUvC6EcCnkigxlLUCKLPkMsXN3XrtNoykTBq3%2B3qOcgfkRZfM%2FrF3PsEb50VzfOjZZyq8dTh3oOQhmV15bIy58ub%2FRhN6DDyqy4qch%2FHZgk4MCDZgkf8pQMTjXZA3%2FQEtZ2JHHdvQaWLUSXSLlVENhpbqZ5IF5PjClxFop1guI9c9VAtE%2FP0p%2FIRGdOFwPEf5RPnC4buEhCPW%2BuB9eIY3nZD%2Bux0T1uad72aAoRTJrvvKpoGeWmNyBJ81%2FnqyhGl67zAS1gPSSHHW7%2BMnJUCVRh%2BfEi4tOgOs0oc2RMcnJjNt%2F2D3k%2B%2FSiStjs0gYivQD5yZVoAyw8m5AZthZVY1RDLDoKp2%2FRLUapWv5qZLNVUW%2FZSrRsPf7bAK9aynztv8tYtLndqKUgsg2XlTKQhMd3WuRxrJ7SJkOGKI0GtJhceOmuOZGxty5ig0bk%2ByPSxIMLzx5sEGOqUBr7guBq7gggIuiv9ykVBGYVOyYuM2b1Z3%2BbUFAEoXnSG7rTzoh2cNprBOnksXjysEP5AH2BlLJQ%2BAcTHEl4RSktuS1IZWAGRrF9e3zhEl%2FlARAdXQjfThSXuIyt7dtXv17yay5O5CvhpMKa0WompEyO4UoLk6KwHDL9SkFQrxJWoV06NjJHZpdxXWLYBzpnCdDTmr8N8FVmY6DQ8jtfyoYZyOCRAz&X-Amz-Signature=e13369724d6ed172f70d868c9f8d0cba0695cbb626e3ded161b3e2ac6ed47130&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
