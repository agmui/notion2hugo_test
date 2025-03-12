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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIOVUU2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFYMVvdBuRaoCoTMhAJfzBSuwNDv%2B3SHH8Mp%2F%2BAzg3HtAiEA5%2Fq74qVPEkZ%2FqunC3RcJUDQe8aWsVSuehcR82vETawoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlOnpF%2Bm687JtKvsircA10%2FKofbwhNEwyGdZ6sPm3kB8fFbdWDN0WyZT%2BIT%2FKppMbzAE7PdKf3gENX27HUXVSIukjSM2W9YwxDfOpbjh%2FF9ogWah7Y1yPWTXomtuxxHb6mxixoxo9zI9zjoqOqF070gKi3XweGbNx%2B90JwGaac1vaMbj5wBo2zwmjiEEM%2FcbG1zhFqZFwIsCymr9ZnlPo7Diat3k8H8jUKW5rnLKN9vaTXx%2Bnjm9E4C%2FR7mclJyMzkbJ2Rwqdd2EZgRumuBscnqR798ISaJNnq%2BireN5cj35O0Eeub3UplbIwZurLL3%2B9gCMdbeYr8n4Q%2FloPd%2Fx1JrDhaFTy9Va2G6OQNn38YBaoWUmvd68SiPGVr1%2FVWbATkS6Dn%2FwrkzVHbwJFVJRX8SfMdI9eZuCxVhN2XeWyt0ead%2FMIBBWB5B%2FrjKbXsI8nbqMwUsLWeGIuOOwXwnye93Qi4bu2HxRj%2F7L5rK%2BElY8yLJqSLg0dxeKtiNYSeWDm03ZCB5fSRDPIZ8sxr%2FzUE48JmZu%2FR6uCiWR6tgwsUbpSlEdeW3yZSBfNP4vVCwzwlUnCBFAo8zdmx6JbQoApUi9SGJVB9AlkbQuFAtPrySdpKiVjLnKQby3wu1CGUk688R%2FIBA2hVwMeZJMJ7gxr4GOqUBpPqp0awd3LWaCN3EKdUA7ragJ5KemXSA5r0fwqFl9WysKMRItrJYl0OVY4hZn1bitnVsIbli31Ff8ws3dWQPoXOtIgsI6vFcekGLiQ2zFOhxL8bVQcigUr5v1Qr2VICz15bfUx0Qk9TdQ14AOiuWYZWaqevY6F3uqOPAEh9MnwO7pA%2BElRT%2BPzEeFoqAQOX7ITywL5hkXsFZFMwD6So6mFKe6SDf&X-Amz-Signature=ebb515f5a038ffef5a30cabedf882e684582a858f2ac3941fe4d8c8ddbdab215&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIOVUU2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFYMVvdBuRaoCoTMhAJfzBSuwNDv%2B3SHH8Mp%2F%2BAzg3HtAiEA5%2Fq74qVPEkZ%2FqunC3RcJUDQe8aWsVSuehcR82vETawoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlOnpF%2Bm687JtKvsircA10%2FKofbwhNEwyGdZ6sPm3kB8fFbdWDN0WyZT%2BIT%2FKppMbzAE7PdKf3gENX27HUXVSIukjSM2W9YwxDfOpbjh%2FF9ogWah7Y1yPWTXomtuxxHb6mxixoxo9zI9zjoqOqF070gKi3XweGbNx%2B90JwGaac1vaMbj5wBo2zwmjiEEM%2FcbG1zhFqZFwIsCymr9ZnlPo7Diat3k8H8jUKW5rnLKN9vaTXx%2Bnjm9E4C%2FR7mclJyMzkbJ2Rwqdd2EZgRumuBscnqR798ISaJNnq%2BireN5cj35O0Eeub3UplbIwZurLL3%2B9gCMdbeYr8n4Q%2FloPd%2Fx1JrDhaFTy9Va2G6OQNn38YBaoWUmvd68SiPGVr1%2FVWbATkS6Dn%2FwrkzVHbwJFVJRX8SfMdI9eZuCxVhN2XeWyt0ead%2FMIBBWB5B%2FrjKbXsI8nbqMwUsLWeGIuOOwXwnye93Qi4bu2HxRj%2F7L5rK%2BElY8yLJqSLg0dxeKtiNYSeWDm03ZCB5fSRDPIZ8sxr%2FzUE48JmZu%2FR6uCiWR6tgwsUbpSlEdeW3yZSBfNP4vVCwzwlUnCBFAo8zdmx6JbQoApUi9SGJVB9AlkbQuFAtPrySdpKiVjLnKQby3wu1CGUk688R%2FIBA2hVwMeZJMJ7gxr4GOqUBpPqp0awd3LWaCN3EKdUA7ragJ5KemXSA5r0fwqFl9WysKMRItrJYl0OVY4hZn1bitnVsIbli31Ff8ws3dWQPoXOtIgsI6vFcekGLiQ2zFOhxL8bVQcigUr5v1Qr2VICz15bfUx0Qk9TdQ14AOiuWYZWaqevY6F3uqOPAEh9MnwO7pA%2BElRT%2BPzEeFoqAQOX7ITywL5hkXsFZFMwD6So6mFKe6SDf&X-Amz-Signature=1b7e6459ef6d452f800ed521a10e9d59fff264a48f2054cd3824affc477c0152&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIOVUU2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFYMVvdBuRaoCoTMhAJfzBSuwNDv%2B3SHH8Mp%2F%2BAzg3HtAiEA5%2Fq74qVPEkZ%2FqunC3RcJUDQe8aWsVSuehcR82vETawoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlOnpF%2Bm687JtKvsircA10%2FKofbwhNEwyGdZ6sPm3kB8fFbdWDN0WyZT%2BIT%2FKppMbzAE7PdKf3gENX27HUXVSIukjSM2W9YwxDfOpbjh%2FF9ogWah7Y1yPWTXomtuxxHb6mxixoxo9zI9zjoqOqF070gKi3XweGbNx%2B90JwGaac1vaMbj5wBo2zwmjiEEM%2FcbG1zhFqZFwIsCymr9ZnlPo7Diat3k8H8jUKW5rnLKN9vaTXx%2Bnjm9E4C%2FR7mclJyMzkbJ2Rwqdd2EZgRumuBscnqR798ISaJNnq%2BireN5cj35O0Eeub3UplbIwZurLL3%2B9gCMdbeYr8n4Q%2FloPd%2Fx1JrDhaFTy9Va2G6OQNn38YBaoWUmvd68SiPGVr1%2FVWbATkS6Dn%2FwrkzVHbwJFVJRX8SfMdI9eZuCxVhN2XeWyt0ead%2FMIBBWB5B%2FrjKbXsI8nbqMwUsLWeGIuOOwXwnye93Qi4bu2HxRj%2F7L5rK%2BElY8yLJqSLg0dxeKtiNYSeWDm03ZCB5fSRDPIZ8sxr%2FzUE48JmZu%2FR6uCiWR6tgwsUbpSlEdeW3yZSBfNP4vVCwzwlUnCBFAo8zdmx6JbQoApUi9SGJVB9AlkbQuFAtPrySdpKiVjLnKQby3wu1CGUk688R%2FIBA2hVwMeZJMJ7gxr4GOqUBpPqp0awd3LWaCN3EKdUA7ragJ5KemXSA5r0fwqFl9WysKMRItrJYl0OVY4hZn1bitnVsIbli31Ff8ws3dWQPoXOtIgsI6vFcekGLiQ2zFOhxL8bVQcigUr5v1Qr2VICz15bfUx0Qk9TdQ14AOiuWYZWaqevY6F3uqOPAEh9MnwO7pA%2BElRT%2BPzEeFoqAQOX7ITywL5hkXsFZFMwD6So6mFKe6SDf&X-Amz-Signature=f1ec09a14b1e2ec776ba7ce7b5cf49933e2aacc68df2b7e436b754cda5a8b294&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIOVUU2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFYMVvdBuRaoCoTMhAJfzBSuwNDv%2B3SHH8Mp%2F%2BAzg3HtAiEA5%2Fq74qVPEkZ%2FqunC3RcJUDQe8aWsVSuehcR82vETawoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlOnpF%2Bm687JtKvsircA10%2FKofbwhNEwyGdZ6sPm3kB8fFbdWDN0WyZT%2BIT%2FKppMbzAE7PdKf3gENX27HUXVSIukjSM2W9YwxDfOpbjh%2FF9ogWah7Y1yPWTXomtuxxHb6mxixoxo9zI9zjoqOqF070gKi3XweGbNx%2B90JwGaac1vaMbj5wBo2zwmjiEEM%2FcbG1zhFqZFwIsCymr9ZnlPo7Diat3k8H8jUKW5rnLKN9vaTXx%2Bnjm9E4C%2FR7mclJyMzkbJ2Rwqdd2EZgRumuBscnqR798ISaJNnq%2BireN5cj35O0Eeub3UplbIwZurLL3%2B9gCMdbeYr8n4Q%2FloPd%2Fx1JrDhaFTy9Va2G6OQNn38YBaoWUmvd68SiPGVr1%2FVWbATkS6Dn%2FwrkzVHbwJFVJRX8SfMdI9eZuCxVhN2XeWyt0ead%2FMIBBWB5B%2FrjKbXsI8nbqMwUsLWeGIuOOwXwnye93Qi4bu2HxRj%2F7L5rK%2BElY8yLJqSLg0dxeKtiNYSeWDm03ZCB5fSRDPIZ8sxr%2FzUE48JmZu%2FR6uCiWR6tgwsUbpSlEdeW3yZSBfNP4vVCwzwlUnCBFAo8zdmx6JbQoApUi9SGJVB9AlkbQuFAtPrySdpKiVjLnKQby3wu1CGUk688R%2FIBA2hVwMeZJMJ7gxr4GOqUBpPqp0awd3LWaCN3EKdUA7ragJ5KemXSA5r0fwqFl9WysKMRItrJYl0OVY4hZn1bitnVsIbli31Ff8ws3dWQPoXOtIgsI6vFcekGLiQ2zFOhxL8bVQcigUr5v1Qr2VICz15bfUx0Qk9TdQ14AOiuWYZWaqevY6F3uqOPAEh9MnwO7pA%2BElRT%2BPzEeFoqAQOX7ITywL5hkXsFZFMwD6So6mFKe6SDf&X-Amz-Signature=597f776f6ddb3e796f1d85a74c4da704c98cbefc3000d87a8233f1847b6f5186&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIOVUU2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFYMVvdBuRaoCoTMhAJfzBSuwNDv%2B3SHH8Mp%2F%2BAzg3HtAiEA5%2Fq74qVPEkZ%2FqunC3RcJUDQe8aWsVSuehcR82vETawoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlOnpF%2Bm687JtKvsircA10%2FKofbwhNEwyGdZ6sPm3kB8fFbdWDN0WyZT%2BIT%2FKppMbzAE7PdKf3gENX27HUXVSIukjSM2W9YwxDfOpbjh%2FF9ogWah7Y1yPWTXomtuxxHb6mxixoxo9zI9zjoqOqF070gKi3XweGbNx%2B90JwGaac1vaMbj5wBo2zwmjiEEM%2FcbG1zhFqZFwIsCymr9ZnlPo7Diat3k8H8jUKW5rnLKN9vaTXx%2Bnjm9E4C%2FR7mclJyMzkbJ2Rwqdd2EZgRumuBscnqR798ISaJNnq%2BireN5cj35O0Eeub3UplbIwZurLL3%2B9gCMdbeYr8n4Q%2FloPd%2Fx1JrDhaFTy9Va2G6OQNn38YBaoWUmvd68SiPGVr1%2FVWbATkS6Dn%2FwrkzVHbwJFVJRX8SfMdI9eZuCxVhN2XeWyt0ead%2FMIBBWB5B%2FrjKbXsI8nbqMwUsLWeGIuOOwXwnye93Qi4bu2HxRj%2F7L5rK%2BElY8yLJqSLg0dxeKtiNYSeWDm03ZCB5fSRDPIZ8sxr%2FzUE48JmZu%2FR6uCiWR6tgwsUbpSlEdeW3yZSBfNP4vVCwzwlUnCBFAo8zdmx6JbQoApUi9SGJVB9AlkbQuFAtPrySdpKiVjLnKQby3wu1CGUk688R%2FIBA2hVwMeZJMJ7gxr4GOqUBpPqp0awd3LWaCN3EKdUA7ragJ5KemXSA5r0fwqFl9WysKMRItrJYl0OVY4hZn1bitnVsIbli31Ff8ws3dWQPoXOtIgsI6vFcekGLiQ2zFOhxL8bVQcigUr5v1Qr2VICz15bfUx0Qk9TdQ14AOiuWYZWaqevY6F3uqOPAEh9MnwO7pA%2BElRT%2BPzEeFoqAQOX7ITywL5hkXsFZFMwD6So6mFKe6SDf&X-Amz-Signature=d8ffb383d71faae7aa1335ce74a84da8dfadeb5e72a7a50cdcab77decd542526&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
