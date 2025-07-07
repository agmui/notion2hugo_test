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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBR6UYO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCIJVpzbp0BD57Wws9BALM184HsdubLcyu5zLPhslbWpQIgROfCI7EP%2F%2FWTBXDuNlxgS%2BHKzDjKqLoLETV2TJ45KQ8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLv3zUZoJWEFmf6o%2FircAwvmRfVJ%2FQbxBhMqYJNSfQmYqTDnJKmBb2PAt%2B0qqTlUrnAJTsMINrScg7n%2FdvkaKmoN0kZH5ELVuTOrq1hwGUWi5hLXBPK4xP87rbVaCwrZz6F0kMtU37Hf5FA2ExN3XzFfUIJrNgSCQOJOOjtkC9uTUfe8FXfjbZf%2F5gvCkQ7Uai6htgg%2FkX8yhbFc7Az8RH1JcdfoS1cAZ%2FUBEl9HlxhhOmFI4fGiAwBOA3RJnDOa7qHzcbEdG42tQFPf8Gx%2Ba5sZWjPdqfMM4ZIUO%2BsIxKulEodUb3pcCNye23Kz4t8rp8Nsj6tRRTL%2FXJH4fMjOUTLcI9NT3w4c80QwX%2BlXZg7ilc9CFqriieOaNmTcjao46nboPMbE01ek%2FGtUAeUv7iVu4xch2hPEMWGU5bBkVsZy%2B276BS1kbsVIrf6cLnYphreKBIcp51bfSjb%2Bav17UagOweQsV%2BnOLaiN0iUoZPVuMFqS81tKeBWjc5n73L1dXgMLsIUau2dC7fbh69w2dLnTqn6MvqL1kEw6GBIld01iAfMhJs%2B6kwvZxvkGd%2Ber5x4a5Y3QC2Sa2mwcHv3smqNbMHe8BWxm76Bb9%2BdumZQhOkPMd8Kr32gmi3s3Lphiyt%2BJE2%2FVJOj1ax7bMNa3rsMGOqUBfZCaO828ty7H2nQu29tsdqzD%2F3BbSjATeCP7EDda3W62nZ1NAomUyzrvWinUID0L2kDDXJhZQ8cZRr%2BF9RXecURS8IW6%2Fwtkx98bUDmJAaSEpkvb7FLbwIzONPXJieXAICcbgBB6CSx92jYpfmfk911i1TJFEIhNYilchyGlDlDg6MwpCVExaPrdAWBYwmpGGON%2BslI9OD2jcu3LRuzm5fYk%2FpD3&X-Amz-Signature=b952de27e147e3955c92c49f8c4ff827c5e945e546627e67feb453877fb186a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBR6UYO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCIJVpzbp0BD57Wws9BALM184HsdubLcyu5zLPhslbWpQIgROfCI7EP%2F%2FWTBXDuNlxgS%2BHKzDjKqLoLETV2TJ45KQ8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLv3zUZoJWEFmf6o%2FircAwvmRfVJ%2FQbxBhMqYJNSfQmYqTDnJKmBb2PAt%2B0qqTlUrnAJTsMINrScg7n%2FdvkaKmoN0kZH5ELVuTOrq1hwGUWi5hLXBPK4xP87rbVaCwrZz6F0kMtU37Hf5FA2ExN3XzFfUIJrNgSCQOJOOjtkC9uTUfe8FXfjbZf%2F5gvCkQ7Uai6htgg%2FkX8yhbFc7Az8RH1JcdfoS1cAZ%2FUBEl9HlxhhOmFI4fGiAwBOA3RJnDOa7qHzcbEdG42tQFPf8Gx%2Ba5sZWjPdqfMM4ZIUO%2BsIxKulEodUb3pcCNye23Kz4t8rp8Nsj6tRRTL%2FXJH4fMjOUTLcI9NT3w4c80QwX%2BlXZg7ilc9CFqriieOaNmTcjao46nboPMbE01ek%2FGtUAeUv7iVu4xch2hPEMWGU5bBkVsZy%2B276BS1kbsVIrf6cLnYphreKBIcp51bfSjb%2Bav17UagOweQsV%2BnOLaiN0iUoZPVuMFqS81tKeBWjc5n73L1dXgMLsIUau2dC7fbh69w2dLnTqn6MvqL1kEw6GBIld01iAfMhJs%2B6kwvZxvkGd%2Ber5x4a5Y3QC2Sa2mwcHv3smqNbMHe8BWxm76Bb9%2BdumZQhOkPMd8Kr32gmi3s3Lphiyt%2BJE2%2FVJOj1ax7bMNa3rsMGOqUBfZCaO828ty7H2nQu29tsdqzD%2F3BbSjATeCP7EDda3W62nZ1NAomUyzrvWinUID0L2kDDXJhZQ8cZRr%2BF9RXecURS8IW6%2Fwtkx98bUDmJAaSEpkvb7FLbwIzONPXJieXAICcbgBB6CSx92jYpfmfk911i1TJFEIhNYilchyGlDlDg6MwpCVExaPrdAWBYwmpGGON%2BslI9OD2jcu3LRuzm5fYk%2FpD3&X-Amz-Signature=4a3514dd40fb3a4e3749a33ad25a3f80330be0743649a2dc86e6c123af9a7046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBR6UYO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCIJVpzbp0BD57Wws9BALM184HsdubLcyu5zLPhslbWpQIgROfCI7EP%2F%2FWTBXDuNlxgS%2BHKzDjKqLoLETV2TJ45KQ8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLv3zUZoJWEFmf6o%2FircAwvmRfVJ%2FQbxBhMqYJNSfQmYqTDnJKmBb2PAt%2B0qqTlUrnAJTsMINrScg7n%2FdvkaKmoN0kZH5ELVuTOrq1hwGUWi5hLXBPK4xP87rbVaCwrZz6F0kMtU37Hf5FA2ExN3XzFfUIJrNgSCQOJOOjtkC9uTUfe8FXfjbZf%2F5gvCkQ7Uai6htgg%2FkX8yhbFc7Az8RH1JcdfoS1cAZ%2FUBEl9HlxhhOmFI4fGiAwBOA3RJnDOa7qHzcbEdG42tQFPf8Gx%2Ba5sZWjPdqfMM4ZIUO%2BsIxKulEodUb3pcCNye23Kz4t8rp8Nsj6tRRTL%2FXJH4fMjOUTLcI9NT3w4c80QwX%2BlXZg7ilc9CFqriieOaNmTcjao46nboPMbE01ek%2FGtUAeUv7iVu4xch2hPEMWGU5bBkVsZy%2B276BS1kbsVIrf6cLnYphreKBIcp51bfSjb%2Bav17UagOweQsV%2BnOLaiN0iUoZPVuMFqS81tKeBWjc5n73L1dXgMLsIUau2dC7fbh69w2dLnTqn6MvqL1kEw6GBIld01iAfMhJs%2B6kwvZxvkGd%2Ber5x4a5Y3QC2Sa2mwcHv3smqNbMHe8BWxm76Bb9%2BdumZQhOkPMd8Kr32gmi3s3Lphiyt%2BJE2%2FVJOj1ax7bMNa3rsMGOqUBfZCaO828ty7H2nQu29tsdqzD%2F3BbSjATeCP7EDda3W62nZ1NAomUyzrvWinUID0L2kDDXJhZQ8cZRr%2BF9RXecURS8IW6%2Fwtkx98bUDmJAaSEpkvb7FLbwIzONPXJieXAICcbgBB6CSx92jYpfmfk911i1TJFEIhNYilchyGlDlDg6MwpCVExaPrdAWBYwmpGGON%2BslI9OD2jcu3LRuzm5fYk%2FpD3&X-Amz-Signature=a130201957290a53c6218734c4cff6fca906aac5aa2b9b7f678ac23bebfc0777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBR6UYO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCIJVpzbp0BD57Wws9BALM184HsdubLcyu5zLPhslbWpQIgROfCI7EP%2F%2FWTBXDuNlxgS%2BHKzDjKqLoLETV2TJ45KQ8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLv3zUZoJWEFmf6o%2FircAwvmRfVJ%2FQbxBhMqYJNSfQmYqTDnJKmBb2PAt%2B0qqTlUrnAJTsMINrScg7n%2FdvkaKmoN0kZH5ELVuTOrq1hwGUWi5hLXBPK4xP87rbVaCwrZz6F0kMtU37Hf5FA2ExN3XzFfUIJrNgSCQOJOOjtkC9uTUfe8FXfjbZf%2F5gvCkQ7Uai6htgg%2FkX8yhbFc7Az8RH1JcdfoS1cAZ%2FUBEl9HlxhhOmFI4fGiAwBOA3RJnDOa7qHzcbEdG42tQFPf8Gx%2Ba5sZWjPdqfMM4ZIUO%2BsIxKulEodUb3pcCNye23Kz4t8rp8Nsj6tRRTL%2FXJH4fMjOUTLcI9NT3w4c80QwX%2BlXZg7ilc9CFqriieOaNmTcjao46nboPMbE01ek%2FGtUAeUv7iVu4xch2hPEMWGU5bBkVsZy%2B276BS1kbsVIrf6cLnYphreKBIcp51bfSjb%2Bav17UagOweQsV%2BnOLaiN0iUoZPVuMFqS81tKeBWjc5n73L1dXgMLsIUau2dC7fbh69w2dLnTqn6MvqL1kEw6GBIld01iAfMhJs%2B6kwvZxvkGd%2Ber5x4a5Y3QC2Sa2mwcHv3smqNbMHe8BWxm76Bb9%2BdumZQhOkPMd8Kr32gmi3s3Lphiyt%2BJE2%2FVJOj1ax7bMNa3rsMGOqUBfZCaO828ty7H2nQu29tsdqzD%2F3BbSjATeCP7EDda3W62nZ1NAomUyzrvWinUID0L2kDDXJhZQ8cZRr%2BF9RXecURS8IW6%2Fwtkx98bUDmJAaSEpkvb7FLbwIzONPXJieXAICcbgBB6CSx92jYpfmfk911i1TJFEIhNYilchyGlDlDg6MwpCVExaPrdAWBYwmpGGON%2BslI9OD2jcu3LRuzm5fYk%2FpD3&X-Amz-Signature=6e1d2ee43f2de2dcb5c064b41c016ddddedb7fa5d48572bbda290d8557f269ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBR6UYO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCIJVpzbp0BD57Wws9BALM184HsdubLcyu5zLPhslbWpQIgROfCI7EP%2F%2FWTBXDuNlxgS%2BHKzDjKqLoLETV2TJ45KQ8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLv3zUZoJWEFmf6o%2FircAwvmRfVJ%2FQbxBhMqYJNSfQmYqTDnJKmBb2PAt%2B0qqTlUrnAJTsMINrScg7n%2FdvkaKmoN0kZH5ELVuTOrq1hwGUWi5hLXBPK4xP87rbVaCwrZz6F0kMtU37Hf5FA2ExN3XzFfUIJrNgSCQOJOOjtkC9uTUfe8FXfjbZf%2F5gvCkQ7Uai6htgg%2FkX8yhbFc7Az8RH1JcdfoS1cAZ%2FUBEl9HlxhhOmFI4fGiAwBOA3RJnDOa7qHzcbEdG42tQFPf8Gx%2Ba5sZWjPdqfMM4ZIUO%2BsIxKulEodUb3pcCNye23Kz4t8rp8Nsj6tRRTL%2FXJH4fMjOUTLcI9NT3w4c80QwX%2BlXZg7ilc9CFqriieOaNmTcjao46nboPMbE01ek%2FGtUAeUv7iVu4xch2hPEMWGU5bBkVsZy%2B276BS1kbsVIrf6cLnYphreKBIcp51bfSjb%2Bav17UagOweQsV%2BnOLaiN0iUoZPVuMFqS81tKeBWjc5n73L1dXgMLsIUau2dC7fbh69w2dLnTqn6MvqL1kEw6GBIld01iAfMhJs%2B6kwvZxvkGd%2Ber5x4a5Y3QC2Sa2mwcHv3smqNbMHe8BWxm76Bb9%2BdumZQhOkPMd8Kr32gmi3s3Lphiyt%2BJE2%2FVJOj1ax7bMNa3rsMGOqUBfZCaO828ty7H2nQu29tsdqzD%2F3BbSjATeCP7EDda3W62nZ1NAomUyzrvWinUID0L2kDDXJhZQ8cZRr%2BF9RXecURS8IW6%2Fwtkx98bUDmJAaSEpkvb7FLbwIzONPXJieXAICcbgBB6CSx92jYpfmfk911i1TJFEIhNYilchyGlDlDg6MwpCVExaPrdAWBYwmpGGON%2BslI9OD2jcu3LRuzm5fYk%2FpD3&X-Amz-Signature=7124a8e038bd65585913515815925ec4adc47fa1151f34dc9ec99a4ae8937b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
