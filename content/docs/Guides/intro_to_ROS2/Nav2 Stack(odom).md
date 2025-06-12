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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZQF3SB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDFkcTBV2PnoNKhM8Gbo%2FKiJPEihGy7t9IGaw89V3PG7wIgCaOMiyXZFTGTF5kKRrB32%2BqCY7FF3rarLHSPOHb%2BPhUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuXec%2Fr2UkT6QANECrcA7P6vUcUPlAbyWmS6IeImMDF%2B%2Fuw5KuatI2B2Kz%2BHWPeWqH0H5usc3EW2baMRQDJo0eh2TenlESCEpp3FE6KqTt%2Fr2pxYHyV%2BXphXjgAHYMQiwwbMdK3H4UNMXYGKKoLMl1fR798Von1atDcdTi4%2BZUPcfPLgO5krmrtBr86qAnlgPM6EZExXinVPOmq1%2B%2B2jUdL%2BPjRmTZcIn4wBs4vkD12d5NDK2N%2FkG4s%2Foy4aU4UPmkcI1Rswd%2Fxl7ADIEsNTIAB3bqW2Tm%2FkmCNSSQv9IT1NShCnB4at9vaUu%2BZOOeLI16iYIts572ok%2FSf2DCWVgkSDuSyqVjkWkLM8Mf8OEbPSqKpStZzkQiip2P6gAPU32bP%2B00sLlS3p%2F1ya5vxmOsnYY%2BI6y9YoP%2BYOrMcxeqdKzykVdHYqsQK2GbVKMkP%2FxLJG30TmG%2FZQTFxMTdpwZzCD78RE3lLi26T2F8XIGnlcsE%2FDLDwQgZ93bj3S3k9Rne2rnUb2mUyDTYcv6QRr6GBO0N0Gi3KRFfgJL67OzR9M6xPE6eXTOhW8HXascxDoWvfvqT52JPUwbnKa%2FWIHBsVzpHONLPBc2dMa7BmL3DYfdT5OCsfHnJuI0L1Swx1JVn1mIKtbzqQub6rMLXCqcIGOqUBKrs1v9IgkpyJqlxTipQiECLtXgVCJc2tiP24CE7%2FRxlbXNkMbX2zpBNrqEyfCcgaWyo4KBzCPMRVnkYkBpOIs%2FlBtRnDFlJtNQ0CzWCeILGfBsx69hejOhdHGzN%2BqTr6FvRvqhalLjGaD6R97aS5HPciwZiEnNg0Hx2VRxla8bc7ihgMBciVNaTZTeCJQWMO7pVRj3eAkF5usmshPas6Wz2EA9HJ&X-Amz-Signature=aa1cfca12b925403756705ecca90b48503fefd94ae614e187722573125fc17e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZQF3SB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDFkcTBV2PnoNKhM8Gbo%2FKiJPEihGy7t9IGaw89V3PG7wIgCaOMiyXZFTGTF5kKRrB32%2BqCY7FF3rarLHSPOHb%2BPhUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuXec%2Fr2UkT6QANECrcA7P6vUcUPlAbyWmS6IeImMDF%2B%2Fuw5KuatI2B2Kz%2BHWPeWqH0H5usc3EW2baMRQDJo0eh2TenlESCEpp3FE6KqTt%2Fr2pxYHyV%2BXphXjgAHYMQiwwbMdK3H4UNMXYGKKoLMl1fR798Von1atDcdTi4%2BZUPcfPLgO5krmrtBr86qAnlgPM6EZExXinVPOmq1%2B%2B2jUdL%2BPjRmTZcIn4wBs4vkD12d5NDK2N%2FkG4s%2Foy4aU4UPmkcI1Rswd%2Fxl7ADIEsNTIAB3bqW2Tm%2FkmCNSSQv9IT1NShCnB4at9vaUu%2BZOOeLI16iYIts572ok%2FSf2DCWVgkSDuSyqVjkWkLM8Mf8OEbPSqKpStZzkQiip2P6gAPU32bP%2B00sLlS3p%2F1ya5vxmOsnYY%2BI6y9YoP%2BYOrMcxeqdKzykVdHYqsQK2GbVKMkP%2FxLJG30TmG%2FZQTFxMTdpwZzCD78RE3lLi26T2F8XIGnlcsE%2FDLDwQgZ93bj3S3k9Rne2rnUb2mUyDTYcv6QRr6GBO0N0Gi3KRFfgJL67OzR9M6xPE6eXTOhW8HXascxDoWvfvqT52JPUwbnKa%2FWIHBsVzpHONLPBc2dMa7BmL3DYfdT5OCsfHnJuI0L1Swx1JVn1mIKtbzqQub6rMLXCqcIGOqUBKrs1v9IgkpyJqlxTipQiECLtXgVCJc2tiP24CE7%2FRxlbXNkMbX2zpBNrqEyfCcgaWyo4KBzCPMRVnkYkBpOIs%2FlBtRnDFlJtNQ0CzWCeILGfBsx69hejOhdHGzN%2BqTr6FvRvqhalLjGaD6R97aS5HPciwZiEnNg0Hx2VRxla8bc7ihgMBciVNaTZTeCJQWMO7pVRj3eAkF5usmshPas6Wz2EA9HJ&X-Amz-Signature=efac09cf200d3221f082784174198063f3f8b088b8772d73221750223086a5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZQF3SB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDFkcTBV2PnoNKhM8Gbo%2FKiJPEihGy7t9IGaw89V3PG7wIgCaOMiyXZFTGTF5kKRrB32%2BqCY7FF3rarLHSPOHb%2BPhUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuXec%2Fr2UkT6QANECrcA7P6vUcUPlAbyWmS6IeImMDF%2B%2Fuw5KuatI2B2Kz%2BHWPeWqH0H5usc3EW2baMRQDJo0eh2TenlESCEpp3FE6KqTt%2Fr2pxYHyV%2BXphXjgAHYMQiwwbMdK3H4UNMXYGKKoLMl1fR798Von1atDcdTi4%2BZUPcfPLgO5krmrtBr86qAnlgPM6EZExXinVPOmq1%2B%2B2jUdL%2BPjRmTZcIn4wBs4vkD12d5NDK2N%2FkG4s%2Foy4aU4UPmkcI1Rswd%2Fxl7ADIEsNTIAB3bqW2Tm%2FkmCNSSQv9IT1NShCnB4at9vaUu%2BZOOeLI16iYIts572ok%2FSf2DCWVgkSDuSyqVjkWkLM8Mf8OEbPSqKpStZzkQiip2P6gAPU32bP%2B00sLlS3p%2F1ya5vxmOsnYY%2BI6y9YoP%2BYOrMcxeqdKzykVdHYqsQK2GbVKMkP%2FxLJG30TmG%2FZQTFxMTdpwZzCD78RE3lLi26T2F8XIGnlcsE%2FDLDwQgZ93bj3S3k9Rne2rnUb2mUyDTYcv6QRr6GBO0N0Gi3KRFfgJL67OzR9M6xPE6eXTOhW8HXascxDoWvfvqT52JPUwbnKa%2FWIHBsVzpHONLPBc2dMa7BmL3DYfdT5OCsfHnJuI0L1Swx1JVn1mIKtbzqQub6rMLXCqcIGOqUBKrs1v9IgkpyJqlxTipQiECLtXgVCJc2tiP24CE7%2FRxlbXNkMbX2zpBNrqEyfCcgaWyo4KBzCPMRVnkYkBpOIs%2FlBtRnDFlJtNQ0CzWCeILGfBsx69hejOhdHGzN%2BqTr6FvRvqhalLjGaD6R97aS5HPciwZiEnNg0Hx2VRxla8bc7ihgMBciVNaTZTeCJQWMO7pVRj3eAkF5usmshPas6Wz2EA9HJ&X-Amz-Signature=34a3161498721f0f9edd2b083566eaa7b594518760c0006f3e148dadad9f7ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZQF3SB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDFkcTBV2PnoNKhM8Gbo%2FKiJPEihGy7t9IGaw89V3PG7wIgCaOMiyXZFTGTF5kKRrB32%2BqCY7FF3rarLHSPOHb%2BPhUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuXec%2Fr2UkT6QANECrcA7P6vUcUPlAbyWmS6IeImMDF%2B%2Fuw5KuatI2B2Kz%2BHWPeWqH0H5usc3EW2baMRQDJo0eh2TenlESCEpp3FE6KqTt%2Fr2pxYHyV%2BXphXjgAHYMQiwwbMdK3H4UNMXYGKKoLMl1fR798Von1atDcdTi4%2BZUPcfPLgO5krmrtBr86qAnlgPM6EZExXinVPOmq1%2B%2B2jUdL%2BPjRmTZcIn4wBs4vkD12d5NDK2N%2FkG4s%2Foy4aU4UPmkcI1Rswd%2Fxl7ADIEsNTIAB3bqW2Tm%2FkmCNSSQv9IT1NShCnB4at9vaUu%2BZOOeLI16iYIts572ok%2FSf2DCWVgkSDuSyqVjkWkLM8Mf8OEbPSqKpStZzkQiip2P6gAPU32bP%2B00sLlS3p%2F1ya5vxmOsnYY%2BI6y9YoP%2BYOrMcxeqdKzykVdHYqsQK2GbVKMkP%2FxLJG30TmG%2FZQTFxMTdpwZzCD78RE3lLi26T2F8XIGnlcsE%2FDLDwQgZ93bj3S3k9Rne2rnUb2mUyDTYcv6QRr6GBO0N0Gi3KRFfgJL67OzR9M6xPE6eXTOhW8HXascxDoWvfvqT52JPUwbnKa%2FWIHBsVzpHONLPBc2dMa7BmL3DYfdT5OCsfHnJuI0L1Swx1JVn1mIKtbzqQub6rMLXCqcIGOqUBKrs1v9IgkpyJqlxTipQiECLtXgVCJc2tiP24CE7%2FRxlbXNkMbX2zpBNrqEyfCcgaWyo4KBzCPMRVnkYkBpOIs%2FlBtRnDFlJtNQ0CzWCeILGfBsx69hejOhdHGzN%2BqTr6FvRvqhalLjGaD6R97aS5HPciwZiEnNg0Hx2VRxla8bc7ihgMBciVNaTZTeCJQWMO7pVRj3eAkF5usmshPas6Wz2EA9HJ&X-Amz-Signature=233e0c4991b684efd281f7d481294627e154e3eee256a68d7c0d9500072383e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZQF3SB%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDFkcTBV2PnoNKhM8Gbo%2FKiJPEihGy7t9IGaw89V3PG7wIgCaOMiyXZFTGTF5kKRrB32%2BqCY7FF3rarLHSPOHb%2BPhUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuXec%2Fr2UkT6QANECrcA7P6vUcUPlAbyWmS6IeImMDF%2B%2Fuw5KuatI2B2Kz%2BHWPeWqH0H5usc3EW2baMRQDJo0eh2TenlESCEpp3FE6KqTt%2Fr2pxYHyV%2BXphXjgAHYMQiwwbMdK3H4UNMXYGKKoLMl1fR798Von1atDcdTi4%2BZUPcfPLgO5krmrtBr86qAnlgPM6EZExXinVPOmq1%2B%2B2jUdL%2BPjRmTZcIn4wBs4vkD12d5NDK2N%2FkG4s%2Foy4aU4UPmkcI1Rswd%2Fxl7ADIEsNTIAB3bqW2Tm%2FkmCNSSQv9IT1NShCnB4at9vaUu%2BZOOeLI16iYIts572ok%2FSf2DCWVgkSDuSyqVjkWkLM8Mf8OEbPSqKpStZzkQiip2P6gAPU32bP%2B00sLlS3p%2F1ya5vxmOsnYY%2BI6y9YoP%2BYOrMcxeqdKzykVdHYqsQK2GbVKMkP%2FxLJG30TmG%2FZQTFxMTdpwZzCD78RE3lLi26T2F8XIGnlcsE%2FDLDwQgZ93bj3S3k9Rne2rnUb2mUyDTYcv6QRr6GBO0N0Gi3KRFfgJL67OzR9M6xPE6eXTOhW8HXascxDoWvfvqT52JPUwbnKa%2FWIHBsVzpHONLPBc2dMa7BmL3DYfdT5OCsfHnJuI0L1Swx1JVn1mIKtbzqQub6rMLXCqcIGOqUBKrs1v9IgkpyJqlxTipQiECLtXgVCJc2tiP24CE7%2FRxlbXNkMbX2zpBNrqEyfCcgaWyo4KBzCPMRVnkYkBpOIs%2FlBtRnDFlJtNQ0CzWCeILGfBsx69hejOhdHGzN%2BqTr6FvRvqhalLjGaD6R97aS5HPciwZiEnNg0Hx2VRxla8bc7ihgMBciVNaTZTeCJQWMO7pVRj3eAkF5usmshPas6Wz2EA9HJ&X-Amz-Signature=5796ce6dbac3b75501d5dced21ea8392c96557b3202adbead7d2608016acf3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
