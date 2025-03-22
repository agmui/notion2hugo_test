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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPF3FVET%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCNuSaZosEv6Kt54AmbIE8R1Zq9fGlDYm4z7PU9ptf8hgIgRQeC27fiTicgLiatTD9MX69gQWviOgPCsKfhkhZCMo0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKwGMllh2BedrQSYCrcA07ErW2EgoMiO8m6J66TGe1i7z5mMnsdEt01URPxlOpXGdLvg53dVWsUMPMoQ8f1liwGeBxDRTEcX27wb%2Bkpezx7mu%2FhnB7dDpF2jaITRW7Gt9fwRn84ATpXZz%2F4AA1dJU24DX%2FTKXi4qsQaWVK9DffC4y5RuzQBSGTCq2NMvd81rI7CNGlnFeHYeXKvyfQ57mQsrmY0hjKCoXHKVtgcXVKdkR3lRUuGTDXl0%2F0tgxLpQUder3EYiERW1SSlFwK2SHA833ny2ddCTo2Eepq%2F8%2BGE%2BLqWw7NuRZCP7sM1h3T0jW4IAbhTQgBiFaEEGn3gpqq1U%2FICDrJUOMYC558MZBa1e5flWBBqSHSMhK5bhqqYhXGmoT77LF3zBWKI2Yjal5d3PgBZIQiOtMxr2I%2BWYlGrnSbrSmBUkFzFwXK87mIqSQzCqaoNT6e9f4aHbQDoYkAABUjV%2F6wqCxVDbP2%2FWPJVFmbRQT%2FI9dL3LTJ14UjtpbYnW5dovBMxjyDO56YwBuADwcpmpIrdIhQwxvVn2A25FHnDMIxQMZn5tJZBgkw9OC3YOO4CoxRD7j5bGwlTykid641KMStwjySNkSjN4K2DXzz8qUrbxrOVvHPGafDdqxe0ZSmCF2rbWnAVMP%2B6%2BL4GOqUB6xHEAycIU2Mw71k6kELdShirHJQAPty%2FZ74E8gTt%2F3u83x%2BmRaaOYbiwDIcmVvArcPtW8%2F%2BpRuZ4sgQ6ZUliirMP8vS6vS8elNvANCZfjLo9aU2ru88aBzY%2FiLCSj0LIqL2IBSi04XNf551jy8s1KxFONHmfWRxdiUWnhxs4rXpy0uye4nNsrW7kbUtDMRGsmfv1hQLzrKINCIhknmoV4aqQIAf1&X-Amz-Signature=5b0f6f512ca28e0450ce421f566936c2115974308581b7b152ed946f254368b1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPF3FVET%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCNuSaZosEv6Kt54AmbIE8R1Zq9fGlDYm4z7PU9ptf8hgIgRQeC27fiTicgLiatTD9MX69gQWviOgPCsKfhkhZCMo0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKwGMllh2BedrQSYCrcA07ErW2EgoMiO8m6J66TGe1i7z5mMnsdEt01URPxlOpXGdLvg53dVWsUMPMoQ8f1liwGeBxDRTEcX27wb%2Bkpezx7mu%2FhnB7dDpF2jaITRW7Gt9fwRn84ATpXZz%2F4AA1dJU24DX%2FTKXi4qsQaWVK9DffC4y5RuzQBSGTCq2NMvd81rI7CNGlnFeHYeXKvyfQ57mQsrmY0hjKCoXHKVtgcXVKdkR3lRUuGTDXl0%2F0tgxLpQUder3EYiERW1SSlFwK2SHA833ny2ddCTo2Eepq%2F8%2BGE%2BLqWw7NuRZCP7sM1h3T0jW4IAbhTQgBiFaEEGn3gpqq1U%2FICDrJUOMYC558MZBa1e5flWBBqSHSMhK5bhqqYhXGmoT77LF3zBWKI2Yjal5d3PgBZIQiOtMxr2I%2BWYlGrnSbrSmBUkFzFwXK87mIqSQzCqaoNT6e9f4aHbQDoYkAABUjV%2F6wqCxVDbP2%2FWPJVFmbRQT%2FI9dL3LTJ14UjtpbYnW5dovBMxjyDO56YwBuADwcpmpIrdIhQwxvVn2A25FHnDMIxQMZn5tJZBgkw9OC3YOO4CoxRD7j5bGwlTykid641KMStwjySNkSjN4K2DXzz8qUrbxrOVvHPGafDdqxe0ZSmCF2rbWnAVMP%2B6%2BL4GOqUB6xHEAycIU2Mw71k6kELdShirHJQAPty%2FZ74E8gTt%2F3u83x%2BmRaaOYbiwDIcmVvArcPtW8%2F%2BpRuZ4sgQ6ZUliirMP8vS6vS8elNvANCZfjLo9aU2ru88aBzY%2FiLCSj0LIqL2IBSi04XNf551jy8s1KxFONHmfWRxdiUWnhxs4rXpy0uye4nNsrW7kbUtDMRGsmfv1hQLzrKINCIhknmoV4aqQIAf1&X-Amz-Signature=199c9a26e3e2fa7d715ae88ad1cf56358ad182b3e45e52f37326a40c343f301b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPF3FVET%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCNuSaZosEv6Kt54AmbIE8R1Zq9fGlDYm4z7PU9ptf8hgIgRQeC27fiTicgLiatTD9MX69gQWviOgPCsKfhkhZCMo0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKwGMllh2BedrQSYCrcA07ErW2EgoMiO8m6J66TGe1i7z5mMnsdEt01URPxlOpXGdLvg53dVWsUMPMoQ8f1liwGeBxDRTEcX27wb%2Bkpezx7mu%2FhnB7dDpF2jaITRW7Gt9fwRn84ATpXZz%2F4AA1dJU24DX%2FTKXi4qsQaWVK9DffC4y5RuzQBSGTCq2NMvd81rI7CNGlnFeHYeXKvyfQ57mQsrmY0hjKCoXHKVtgcXVKdkR3lRUuGTDXl0%2F0tgxLpQUder3EYiERW1SSlFwK2SHA833ny2ddCTo2Eepq%2F8%2BGE%2BLqWw7NuRZCP7sM1h3T0jW4IAbhTQgBiFaEEGn3gpqq1U%2FICDrJUOMYC558MZBa1e5flWBBqSHSMhK5bhqqYhXGmoT77LF3zBWKI2Yjal5d3PgBZIQiOtMxr2I%2BWYlGrnSbrSmBUkFzFwXK87mIqSQzCqaoNT6e9f4aHbQDoYkAABUjV%2F6wqCxVDbP2%2FWPJVFmbRQT%2FI9dL3LTJ14UjtpbYnW5dovBMxjyDO56YwBuADwcpmpIrdIhQwxvVn2A25FHnDMIxQMZn5tJZBgkw9OC3YOO4CoxRD7j5bGwlTykid641KMStwjySNkSjN4K2DXzz8qUrbxrOVvHPGafDdqxe0ZSmCF2rbWnAVMP%2B6%2BL4GOqUB6xHEAycIU2Mw71k6kELdShirHJQAPty%2FZ74E8gTt%2F3u83x%2BmRaaOYbiwDIcmVvArcPtW8%2F%2BpRuZ4sgQ6ZUliirMP8vS6vS8elNvANCZfjLo9aU2ru88aBzY%2FiLCSj0LIqL2IBSi04XNf551jy8s1KxFONHmfWRxdiUWnhxs4rXpy0uye4nNsrW7kbUtDMRGsmfv1hQLzrKINCIhknmoV4aqQIAf1&X-Amz-Signature=d71b965628c8e8027f226174df343653f1d1afb868d149b8d6305bde6c8cda70&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPF3FVET%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCNuSaZosEv6Kt54AmbIE8R1Zq9fGlDYm4z7PU9ptf8hgIgRQeC27fiTicgLiatTD9MX69gQWviOgPCsKfhkhZCMo0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKwGMllh2BedrQSYCrcA07ErW2EgoMiO8m6J66TGe1i7z5mMnsdEt01URPxlOpXGdLvg53dVWsUMPMoQ8f1liwGeBxDRTEcX27wb%2Bkpezx7mu%2FhnB7dDpF2jaITRW7Gt9fwRn84ATpXZz%2F4AA1dJU24DX%2FTKXi4qsQaWVK9DffC4y5RuzQBSGTCq2NMvd81rI7CNGlnFeHYeXKvyfQ57mQsrmY0hjKCoXHKVtgcXVKdkR3lRUuGTDXl0%2F0tgxLpQUder3EYiERW1SSlFwK2SHA833ny2ddCTo2Eepq%2F8%2BGE%2BLqWw7NuRZCP7sM1h3T0jW4IAbhTQgBiFaEEGn3gpqq1U%2FICDrJUOMYC558MZBa1e5flWBBqSHSMhK5bhqqYhXGmoT77LF3zBWKI2Yjal5d3PgBZIQiOtMxr2I%2BWYlGrnSbrSmBUkFzFwXK87mIqSQzCqaoNT6e9f4aHbQDoYkAABUjV%2F6wqCxVDbP2%2FWPJVFmbRQT%2FI9dL3LTJ14UjtpbYnW5dovBMxjyDO56YwBuADwcpmpIrdIhQwxvVn2A25FHnDMIxQMZn5tJZBgkw9OC3YOO4CoxRD7j5bGwlTykid641KMStwjySNkSjN4K2DXzz8qUrbxrOVvHPGafDdqxe0ZSmCF2rbWnAVMP%2B6%2BL4GOqUB6xHEAycIU2Mw71k6kELdShirHJQAPty%2FZ74E8gTt%2F3u83x%2BmRaaOYbiwDIcmVvArcPtW8%2F%2BpRuZ4sgQ6ZUliirMP8vS6vS8elNvANCZfjLo9aU2ru88aBzY%2FiLCSj0LIqL2IBSi04XNf551jy8s1KxFONHmfWRxdiUWnhxs4rXpy0uye4nNsrW7kbUtDMRGsmfv1hQLzrKINCIhknmoV4aqQIAf1&X-Amz-Signature=a250f25a239090b8205d6879de457042bdb4241eb8e14690e3d0ee068c33fc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPF3FVET%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCNuSaZosEv6Kt54AmbIE8R1Zq9fGlDYm4z7PU9ptf8hgIgRQeC27fiTicgLiatTD9MX69gQWviOgPCsKfhkhZCMo0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKwGMllh2BedrQSYCrcA07ErW2EgoMiO8m6J66TGe1i7z5mMnsdEt01URPxlOpXGdLvg53dVWsUMPMoQ8f1liwGeBxDRTEcX27wb%2Bkpezx7mu%2FhnB7dDpF2jaITRW7Gt9fwRn84ATpXZz%2F4AA1dJU24DX%2FTKXi4qsQaWVK9DffC4y5RuzQBSGTCq2NMvd81rI7CNGlnFeHYeXKvyfQ57mQsrmY0hjKCoXHKVtgcXVKdkR3lRUuGTDXl0%2F0tgxLpQUder3EYiERW1SSlFwK2SHA833ny2ddCTo2Eepq%2F8%2BGE%2BLqWw7NuRZCP7sM1h3T0jW4IAbhTQgBiFaEEGn3gpqq1U%2FICDrJUOMYC558MZBa1e5flWBBqSHSMhK5bhqqYhXGmoT77LF3zBWKI2Yjal5d3PgBZIQiOtMxr2I%2BWYlGrnSbrSmBUkFzFwXK87mIqSQzCqaoNT6e9f4aHbQDoYkAABUjV%2F6wqCxVDbP2%2FWPJVFmbRQT%2FI9dL3LTJ14UjtpbYnW5dovBMxjyDO56YwBuADwcpmpIrdIhQwxvVn2A25FHnDMIxQMZn5tJZBgkw9OC3YOO4CoxRD7j5bGwlTykid641KMStwjySNkSjN4K2DXzz8qUrbxrOVvHPGafDdqxe0ZSmCF2rbWnAVMP%2B6%2BL4GOqUB6xHEAycIU2Mw71k6kELdShirHJQAPty%2FZ74E8gTt%2F3u83x%2BmRaaOYbiwDIcmVvArcPtW8%2F%2BpRuZ4sgQ6ZUliirMP8vS6vS8elNvANCZfjLo9aU2ru88aBzY%2FiLCSj0LIqL2IBSi04XNf551jy8s1KxFONHmfWRxdiUWnhxs4rXpy0uye4nNsrW7kbUtDMRGsmfv1hQLzrKINCIhknmoV4aqQIAf1&X-Amz-Signature=599cffbba9cdaceb36b521461f3477d9e46269a59c088b9838694cbfee609d16&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
