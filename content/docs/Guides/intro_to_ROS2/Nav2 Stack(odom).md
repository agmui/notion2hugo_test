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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VNN5R6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE%2Fl%2BU%2BC%2B6vC6cDNUxS7h5Je8ZK4y9303amGv3Kibb2AIgEdSsTqRIG5oi5CSdKDKKS0CuQbvt0gDpYEvsTOOmlrsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2PFmc8RLftn8bRZSrcA301zvyMW1gfo5fjcn6e8SthHRm29zpuKRO5jsl4E2ooD2IGrfcMB3bWX1dEYPjJc5c3bB%2B0OAYIY%2FNdmt1c%2FUscL8aub9MXVXj%2BI6Nvr%2BSMNxApUibx%2FIKEPdiI%2F%2BQ5XB9l7UXRPPWPvjmjfb9yOCwA1fLcwtDqIbkk0PGIg8mE4VWRx9yGfnOkYy%2FcBzzLaQz6Ov%2B4KN7Y%2FEi%2Bf3E1YI1P5sG%2Bm2vBvedP6MaVMlhT%2BBR5Uub901PfoN7%2BybNrnWeNy9MWwDkATn8cjRewWWJ0ZeAfdOqC2DK8zKddYJFVUHCSF%2F%2BiuZzorRyv%2BHUjNnn9iZobdeQl6i8yQ9e0EMYfyVFb7XLCNZqdowDyaNib6OcZ7q2NbDBSLliJ4YkA0W2wd0A37oOc05HcjEE%2FC3WlVmAMe78UGV85jTbT8jh7ZLN5j6l6K3C4VtAV2v87HqXqHyluTkRrBJBnuCpqa%2BPaaDAGbJIGVtwooo4h70%2Fgyl2Bm7IKGA2B%2FSOCTeVkGPb2XOqlNFcYHIV4tf3g61B%2BtIa6Pyl4rX7S4YGxx14KW3qSK2MMPvj1AhUBFvGKbsbQHO%2FUoHsitCY77nZWANqO855KOZsIOmwCvtlQMwxgFQhroB9jFkAaZ0SVMMrKwL4GOqUBB7vp%2FXZg%2BOg13xtwlLoQfzclfe8nfxImAoZCr9DKZRftp53IbfhQ7F%2BiyxcbFEPNJSqEGYUg4mpHgw4Cd2EsP7l4THsjigxJ2DB9rNuSM3QC7hFIo9WFWO2hoY912sV8325o0Badu89ML9jrTd8ifS%2Fkt8GjpU5UCNhrO8zOQWJDibxTyDjEwDZM6jsww3wilzMyF6BWV3iD6wHbnklLWX6b4IsO&X-Amz-Signature=af2b9dcb8a05aea05e88798b51a8ce96b94534a63b44a4d4d8be8cff2f0e920e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VNN5R6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE%2Fl%2BU%2BC%2B6vC6cDNUxS7h5Je8ZK4y9303amGv3Kibb2AIgEdSsTqRIG5oi5CSdKDKKS0CuQbvt0gDpYEvsTOOmlrsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2PFmc8RLftn8bRZSrcA301zvyMW1gfo5fjcn6e8SthHRm29zpuKRO5jsl4E2ooD2IGrfcMB3bWX1dEYPjJc5c3bB%2B0OAYIY%2FNdmt1c%2FUscL8aub9MXVXj%2BI6Nvr%2BSMNxApUibx%2FIKEPdiI%2F%2BQ5XB9l7UXRPPWPvjmjfb9yOCwA1fLcwtDqIbkk0PGIg8mE4VWRx9yGfnOkYy%2FcBzzLaQz6Ov%2B4KN7Y%2FEi%2Bf3E1YI1P5sG%2Bm2vBvedP6MaVMlhT%2BBR5Uub901PfoN7%2BybNrnWeNy9MWwDkATn8cjRewWWJ0ZeAfdOqC2DK8zKddYJFVUHCSF%2F%2BiuZzorRyv%2BHUjNnn9iZobdeQl6i8yQ9e0EMYfyVFb7XLCNZqdowDyaNib6OcZ7q2NbDBSLliJ4YkA0W2wd0A37oOc05HcjEE%2FC3WlVmAMe78UGV85jTbT8jh7ZLN5j6l6K3C4VtAV2v87HqXqHyluTkRrBJBnuCpqa%2BPaaDAGbJIGVtwooo4h70%2Fgyl2Bm7IKGA2B%2FSOCTeVkGPb2XOqlNFcYHIV4tf3g61B%2BtIa6Pyl4rX7S4YGxx14KW3qSK2MMPvj1AhUBFvGKbsbQHO%2FUoHsitCY77nZWANqO855KOZsIOmwCvtlQMwxgFQhroB9jFkAaZ0SVMMrKwL4GOqUBB7vp%2FXZg%2BOg13xtwlLoQfzclfe8nfxImAoZCr9DKZRftp53IbfhQ7F%2BiyxcbFEPNJSqEGYUg4mpHgw4Cd2EsP7l4THsjigxJ2DB9rNuSM3QC7hFIo9WFWO2hoY912sV8325o0Badu89ML9jrTd8ifS%2Fkt8GjpU5UCNhrO8zOQWJDibxTyDjEwDZM6jsww3wilzMyF6BWV3iD6wHbnklLWX6b4IsO&X-Amz-Signature=e9ce53c61d139be5b1aa14a8709e1f047a2ba8f513f12ecda1bbac177f8f43e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VNN5R6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE%2Fl%2BU%2BC%2B6vC6cDNUxS7h5Je8ZK4y9303amGv3Kibb2AIgEdSsTqRIG5oi5CSdKDKKS0CuQbvt0gDpYEvsTOOmlrsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2PFmc8RLftn8bRZSrcA301zvyMW1gfo5fjcn6e8SthHRm29zpuKRO5jsl4E2ooD2IGrfcMB3bWX1dEYPjJc5c3bB%2B0OAYIY%2FNdmt1c%2FUscL8aub9MXVXj%2BI6Nvr%2BSMNxApUibx%2FIKEPdiI%2F%2BQ5XB9l7UXRPPWPvjmjfb9yOCwA1fLcwtDqIbkk0PGIg8mE4VWRx9yGfnOkYy%2FcBzzLaQz6Ov%2B4KN7Y%2FEi%2Bf3E1YI1P5sG%2Bm2vBvedP6MaVMlhT%2BBR5Uub901PfoN7%2BybNrnWeNy9MWwDkATn8cjRewWWJ0ZeAfdOqC2DK8zKddYJFVUHCSF%2F%2BiuZzorRyv%2BHUjNnn9iZobdeQl6i8yQ9e0EMYfyVFb7XLCNZqdowDyaNib6OcZ7q2NbDBSLliJ4YkA0W2wd0A37oOc05HcjEE%2FC3WlVmAMe78UGV85jTbT8jh7ZLN5j6l6K3C4VtAV2v87HqXqHyluTkRrBJBnuCpqa%2BPaaDAGbJIGVtwooo4h70%2Fgyl2Bm7IKGA2B%2FSOCTeVkGPb2XOqlNFcYHIV4tf3g61B%2BtIa6Pyl4rX7S4YGxx14KW3qSK2MMPvj1AhUBFvGKbsbQHO%2FUoHsitCY77nZWANqO855KOZsIOmwCvtlQMwxgFQhroB9jFkAaZ0SVMMrKwL4GOqUBB7vp%2FXZg%2BOg13xtwlLoQfzclfe8nfxImAoZCr9DKZRftp53IbfhQ7F%2BiyxcbFEPNJSqEGYUg4mpHgw4Cd2EsP7l4THsjigxJ2DB9rNuSM3QC7hFIo9WFWO2hoY912sV8325o0Badu89ML9jrTd8ifS%2Fkt8GjpU5UCNhrO8zOQWJDibxTyDjEwDZM6jsww3wilzMyF6BWV3iD6wHbnklLWX6b4IsO&X-Amz-Signature=27583fbef371c7125e3b4a478abe0c889fde48f9730f583fa6fd640cb2ffbd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VNN5R6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE%2Fl%2BU%2BC%2B6vC6cDNUxS7h5Je8ZK4y9303amGv3Kibb2AIgEdSsTqRIG5oi5CSdKDKKS0CuQbvt0gDpYEvsTOOmlrsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2PFmc8RLftn8bRZSrcA301zvyMW1gfo5fjcn6e8SthHRm29zpuKRO5jsl4E2ooD2IGrfcMB3bWX1dEYPjJc5c3bB%2B0OAYIY%2FNdmt1c%2FUscL8aub9MXVXj%2BI6Nvr%2BSMNxApUibx%2FIKEPdiI%2F%2BQ5XB9l7UXRPPWPvjmjfb9yOCwA1fLcwtDqIbkk0PGIg8mE4VWRx9yGfnOkYy%2FcBzzLaQz6Ov%2B4KN7Y%2FEi%2Bf3E1YI1P5sG%2Bm2vBvedP6MaVMlhT%2BBR5Uub901PfoN7%2BybNrnWeNy9MWwDkATn8cjRewWWJ0ZeAfdOqC2DK8zKddYJFVUHCSF%2F%2BiuZzorRyv%2BHUjNnn9iZobdeQl6i8yQ9e0EMYfyVFb7XLCNZqdowDyaNib6OcZ7q2NbDBSLliJ4YkA0W2wd0A37oOc05HcjEE%2FC3WlVmAMe78UGV85jTbT8jh7ZLN5j6l6K3C4VtAV2v87HqXqHyluTkRrBJBnuCpqa%2BPaaDAGbJIGVtwooo4h70%2Fgyl2Bm7IKGA2B%2FSOCTeVkGPb2XOqlNFcYHIV4tf3g61B%2BtIa6Pyl4rX7S4YGxx14KW3qSK2MMPvj1AhUBFvGKbsbQHO%2FUoHsitCY77nZWANqO855KOZsIOmwCvtlQMwxgFQhroB9jFkAaZ0SVMMrKwL4GOqUBB7vp%2FXZg%2BOg13xtwlLoQfzclfe8nfxImAoZCr9DKZRftp53IbfhQ7F%2BiyxcbFEPNJSqEGYUg4mpHgw4Cd2EsP7l4THsjigxJ2DB9rNuSM3QC7hFIo9WFWO2hoY912sV8325o0Badu89ML9jrTd8ifS%2Fkt8GjpU5UCNhrO8zOQWJDibxTyDjEwDZM6jsww3wilzMyF6BWV3iD6wHbnklLWX6b4IsO&X-Amz-Signature=70136d9f35cc65c7d537ecb73522728bbd3761d1aa90aa57baaa224479cab49a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VNN5R6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE%2Fl%2BU%2BC%2B6vC6cDNUxS7h5Je8ZK4y9303amGv3Kibb2AIgEdSsTqRIG5oi5CSdKDKKS0CuQbvt0gDpYEvsTOOmlrsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2PFmc8RLftn8bRZSrcA301zvyMW1gfo5fjcn6e8SthHRm29zpuKRO5jsl4E2ooD2IGrfcMB3bWX1dEYPjJc5c3bB%2B0OAYIY%2FNdmt1c%2FUscL8aub9MXVXj%2BI6Nvr%2BSMNxApUibx%2FIKEPdiI%2F%2BQ5XB9l7UXRPPWPvjmjfb9yOCwA1fLcwtDqIbkk0PGIg8mE4VWRx9yGfnOkYy%2FcBzzLaQz6Ov%2B4KN7Y%2FEi%2Bf3E1YI1P5sG%2Bm2vBvedP6MaVMlhT%2BBR5Uub901PfoN7%2BybNrnWeNy9MWwDkATn8cjRewWWJ0ZeAfdOqC2DK8zKddYJFVUHCSF%2F%2BiuZzorRyv%2BHUjNnn9iZobdeQl6i8yQ9e0EMYfyVFb7XLCNZqdowDyaNib6OcZ7q2NbDBSLliJ4YkA0W2wd0A37oOc05HcjEE%2FC3WlVmAMe78UGV85jTbT8jh7ZLN5j6l6K3C4VtAV2v87HqXqHyluTkRrBJBnuCpqa%2BPaaDAGbJIGVtwooo4h70%2Fgyl2Bm7IKGA2B%2FSOCTeVkGPb2XOqlNFcYHIV4tf3g61B%2BtIa6Pyl4rX7S4YGxx14KW3qSK2MMPvj1AhUBFvGKbsbQHO%2FUoHsitCY77nZWANqO855KOZsIOmwCvtlQMwxgFQhroB9jFkAaZ0SVMMrKwL4GOqUBB7vp%2FXZg%2BOg13xtwlLoQfzclfe8nfxImAoZCr9DKZRftp53IbfhQ7F%2BiyxcbFEPNJSqEGYUg4mpHgw4Cd2EsP7l4THsjigxJ2DB9rNuSM3QC7hFIo9WFWO2hoY912sV8325o0Badu89ML9jrTd8ifS%2Fkt8GjpU5UCNhrO8zOQWJDibxTyDjEwDZM6jsww3wilzMyF6BWV3iD6wHbnklLWX6b4IsO&X-Amz-Signature=8d917d3932ac9353224bae4b5ec7cf545fa23e4169804e946b6389af2e0ab7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
