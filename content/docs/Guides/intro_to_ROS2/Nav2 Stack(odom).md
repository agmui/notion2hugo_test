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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IY3PAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNjLoUiBS8%2BIBoUHisDvAdf8LcCos8SRTB2BoyTCWYwAiEArP%2B8ivGEg038XIHbas34v%2Bhrh14LQmPOzYzUg9m5ZfEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNep69nKhBLeiZSbbSrcAwCWJWBibwQ%2BOQENvjrWDoGUPYWOIWiOBYp919jGrdTekdCexL%2BFWg6IMs1rEyXeeerAcqN3%2BYIWyW%2FPwaJU3oV4sFN1p6UE926g7VEqP8ga1IG4l2IoWgaCj12h3FiSjj%2BdkpkZlgg7XyZqfPb3zxGVf3lC4f3rihFiwDVv0oUvi7P54QluTXpOMyc%2B3Q2BPISiVEIstVoMFazAqTYS3bcx3gf1m7d65kRnW3NXWp5UALHnuWPhQMMJ2fHsYko2qTLHkEbHrgcxkKXg%2FCVaHNAgno9%2F0yehD8bO0njk51aVw1MR8DU0O4N1K%2FAI6q29eSGSGG0lIsJxXe0ALSKLvUOrUt%2B5f6ECZENI0GsKvSw%2BpOLLmrxHMC0WF2Cao1p95p%2FeWKmGM0ClrJ4UBn8tJwbOWCb9H07K4RWnAzgYmSHpBFN9HHTQDGAC7%2FrVLA64u3a6JH5%2FyHoRsji42xBkFSQhHxXjJ4dpJRaSTC2jkUtQZnxk1DO%2B0kienKH9zro26wIpnj7%2FZic3iQ%2FIv0VGgFaXTY1n2fFejtAQ7t8GF7kx%2BytizsM7gFOQbVbETxp1PAuE8MsFj8lTNUvdn7peBxDRFl0NBqj8W8hgJ0JB3PSv0q6NSv%2BqQN7lGYllMNmy0r4GOqUBNgMSfUr14KNcZlN8udeGUpnkJmf00focKyRoJPKI82wKlrQM123yJjD%2F9PrWo%2B7dikpzZjgHPbAtUUD6IAz0VhD0xwYgMShfzyU1P8rce1c86Bym2KNBrk9EdLhtcEgXpsPcf5nhc4kYAyrZaVTS9IioF5XN8sXLXCUVa%2F7XKvf1gGxamKJ3hPHfytSKXlpZ2zcPhQE%2FiF8ohZmVCnaMWnMb%2B%2FHz&X-Amz-Signature=d291e1690f2b83f51e7bcf282919a62e5ed1d00e0a29caa2da2798a0a14c3ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IY3PAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNjLoUiBS8%2BIBoUHisDvAdf8LcCos8SRTB2BoyTCWYwAiEArP%2B8ivGEg038XIHbas34v%2Bhrh14LQmPOzYzUg9m5ZfEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNep69nKhBLeiZSbbSrcAwCWJWBibwQ%2BOQENvjrWDoGUPYWOIWiOBYp919jGrdTekdCexL%2BFWg6IMs1rEyXeeerAcqN3%2BYIWyW%2FPwaJU3oV4sFN1p6UE926g7VEqP8ga1IG4l2IoWgaCj12h3FiSjj%2BdkpkZlgg7XyZqfPb3zxGVf3lC4f3rihFiwDVv0oUvi7P54QluTXpOMyc%2B3Q2BPISiVEIstVoMFazAqTYS3bcx3gf1m7d65kRnW3NXWp5UALHnuWPhQMMJ2fHsYko2qTLHkEbHrgcxkKXg%2FCVaHNAgno9%2F0yehD8bO0njk51aVw1MR8DU0O4N1K%2FAI6q29eSGSGG0lIsJxXe0ALSKLvUOrUt%2B5f6ECZENI0GsKvSw%2BpOLLmrxHMC0WF2Cao1p95p%2FeWKmGM0ClrJ4UBn8tJwbOWCb9H07K4RWnAzgYmSHpBFN9HHTQDGAC7%2FrVLA64u3a6JH5%2FyHoRsji42xBkFSQhHxXjJ4dpJRaSTC2jkUtQZnxk1DO%2B0kienKH9zro26wIpnj7%2FZic3iQ%2FIv0VGgFaXTY1n2fFejtAQ7t8GF7kx%2BytizsM7gFOQbVbETxp1PAuE8MsFj8lTNUvdn7peBxDRFl0NBqj8W8hgJ0JB3PSv0q6NSv%2BqQN7lGYllMNmy0r4GOqUBNgMSfUr14KNcZlN8udeGUpnkJmf00focKyRoJPKI82wKlrQM123yJjD%2F9PrWo%2B7dikpzZjgHPbAtUUD6IAz0VhD0xwYgMShfzyU1P8rce1c86Bym2KNBrk9EdLhtcEgXpsPcf5nhc4kYAyrZaVTS9IioF5XN8sXLXCUVa%2F7XKvf1gGxamKJ3hPHfytSKXlpZ2zcPhQE%2FiF8ohZmVCnaMWnMb%2B%2FHz&X-Amz-Signature=994f8f2842e6ab2c03bc4a1a8f2805afc9fc8128d4e6c9270eb0e3f64a6c972c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IY3PAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNjLoUiBS8%2BIBoUHisDvAdf8LcCos8SRTB2BoyTCWYwAiEArP%2B8ivGEg038XIHbas34v%2Bhrh14LQmPOzYzUg9m5ZfEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNep69nKhBLeiZSbbSrcAwCWJWBibwQ%2BOQENvjrWDoGUPYWOIWiOBYp919jGrdTekdCexL%2BFWg6IMs1rEyXeeerAcqN3%2BYIWyW%2FPwaJU3oV4sFN1p6UE926g7VEqP8ga1IG4l2IoWgaCj12h3FiSjj%2BdkpkZlgg7XyZqfPb3zxGVf3lC4f3rihFiwDVv0oUvi7P54QluTXpOMyc%2B3Q2BPISiVEIstVoMFazAqTYS3bcx3gf1m7d65kRnW3NXWp5UALHnuWPhQMMJ2fHsYko2qTLHkEbHrgcxkKXg%2FCVaHNAgno9%2F0yehD8bO0njk51aVw1MR8DU0O4N1K%2FAI6q29eSGSGG0lIsJxXe0ALSKLvUOrUt%2B5f6ECZENI0GsKvSw%2BpOLLmrxHMC0WF2Cao1p95p%2FeWKmGM0ClrJ4UBn8tJwbOWCb9H07K4RWnAzgYmSHpBFN9HHTQDGAC7%2FrVLA64u3a6JH5%2FyHoRsji42xBkFSQhHxXjJ4dpJRaSTC2jkUtQZnxk1DO%2B0kienKH9zro26wIpnj7%2FZic3iQ%2FIv0VGgFaXTY1n2fFejtAQ7t8GF7kx%2BytizsM7gFOQbVbETxp1PAuE8MsFj8lTNUvdn7peBxDRFl0NBqj8W8hgJ0JB3PSv0q6NSv%2BqQN7lGYllMNmy0r4GOqUBNgMSfUr14KNcZlN8udeGUpnkJmf00focKyRoJPKI82wKlrQM123yJjD%2F9PrWo%2B7dikpzZjgHPbAtUUD6IAz0VhD0xwYgMShfzyU1P8rce1c86Bym2KNBrk9EdLhtcEgXpsPcf5nhc4kYAyrZaVTS9IioF5XN8sXLXCUVa%2F7XKvf1gGxamKJ3hPHfytSKXlpZ2zcPhQE%2FiF8ohZmVCnaMWnMb%2B%2FHz&X-Amz-Signature=a2c318ed5af3729cf86de690b86ef7e61f4d707698d73a154f3ad11999946c68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IY3PAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNjLoUiBS8%2BIBoUHisDvAdf8LcCos8SRTB2BoyTCWYwAiEArP%2B8ivGEg038XIHbas34v%2Bhrh14LQmPOzYzUg9m5ZfEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNep69nKhBLeiZSbbSrcAwCWJWBibwQ%2BOQENvjrWDoGUPYWOIWiOBYp919jGrdTekdCexL%2BFWg6IMs1rEyXeeerAcqN3%2BYIWyW%2FPwaJU3oV4sFN1p6UE926g7VEqP8ga1IG4l2IoWgaCj12h3FiSjj%2BdkpkZlgg7XyZqfPb3zxGVf3lC4f3rihFiwDVv0oUvi7P54QluTXpOMyc%2B3Q2BPISiVEIstVoMFazAqTYS3bcx3gf1m7d65kRnW3NXWp5UALHnuWPhQMMJ2fHsYko2qTLHkEbHrgcxkKXg%2FCVaHNAgno9%2F0yehD8bO0njk51aVw1MR8DU0O4N1K%2FAI6q29eSGSGG0lIsJxXe0ALSKLvUOrUt%2B5f6ECZENI0GsKvSw%2BpOLLmrxHMC0WF2Cao1p95p%2FeWKmGM0ClrJ4UBn8tJwbOWCb9H07K4RWnAzgYmSHpBFN9HHTQDGAC7%2FrVLA64u3a6JH5%2FyHoRsji42xBkFSQhHxXjJ4dpJRaSTC2jkUtQZnxk1DO%2B0kienKH9zro26wIpnj7%2FZic3iQ%2FIv0VGgFaXTY1n2fFejtAQ7t8GF7kx%2BytizsM7gFOQbVbETxp1PAuE8MsFj8lTNUvdn7peBxDRFl0NBqj8W8hgJ0JB3PSv0q6NSv%2BqQN7lGYllMNmy0r4GOqUBNgMSfUr14KNcZlN8udeGUpnkJmf00focKyRoJPKI82wKlrQM123yJjD%2F9PrWo%2B7dikpzZjgHPbAtUUD6IAz0VhD0xwYgMShfzyU1P8rce1c86Bym2KNBrk9EdLhtcEgXpsPcf5nhc4kYAyrZaVTS9IioF5XN8sXLXCUVa%2F7XKvf1gGxamKJ3hPHfytSKXlpZ2zcPhQE%2FiF8ohZmVCnaMWnMb%2B%2FHz&X-Amz-Signature=b2384b2f56909f3a4b6e6a7c056c7373923ea1cb95b8b9d547b861ed93e44cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IY3PAL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNjLoUiBS8%2BIBoUHisDvAdf8LcCos8SRTB2BoyTCWYwAiEArP%2B8ivGEg038XIHbas34v%2Bhrh14LQmPOzYzUg9m5ZfEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNep69nKhBLeiZSbbSrcAwCWJWBibwQ%2BOQENvjrWDoGUPYWOIWiOBYp919jGrdTekdCexL%2BFWg6IMs1rEyXeeerAcqN3%2BYIWyW%2FPwaJU3oV4sFN1p6UE926g7VEqP8ga1IG4l2IoWgaCj12h3FiSjj%2BdkpkZlgg7XyZqfPb3zxGVf3lC4f3rihFiwDVv0oUvi7P54QluTXpOMyc%2B3Q2BPISiVEIstVoMFazAqTYS3bcx3gf1m7d65kRnW3NXWp5UALHnuWPhQMMJ2fHsYko2qTLHkEbHrgcxkKXg%2FCVaHNAgno9%2F0yehD8bO0njk51aVw1MR8DU0O4N1K%2FAI6q29eSGSGG0lIsJxXe0ALSKLvUOrUt%2B5f6ECZENI0GsKvSw%2BpOLLmrxHMC0WF2Cao1p95p%2FeWKmGM0ClrJ4UBn8tJwbOWCb9H07K4RWnAzgYmSHpBFN9HHTQDGAC7%2FrVLA64u3a6JH5%2FyHoRsji42xBkFSQhHxXjJ4dpJRaSTC2jkUtQZnxk1DO%2B0kienKH9zro26wIpnj7%2FZic3iQ%2FIv0VGgFaXTY1n2fFejtAQ7t8GF7kx%2BytizsM7gFOQbVbETxp1PAuE8MsFj8lTNUvdn7peBxDRFl0NBqj8W8hgJ0JB3PSv0q6NSv%2BqQN7lGYllMNmy0r4GOqUBNgMSfUr14KNcZlN8udeGUpnkJmf00focKyRoJPKI82wKlrQM123yJjD%2F9PrWo%2B7dikpzZjgHPbAtUUD6IAz0VhD0xwYgMShfzyU1P8rce1c86Bym2KNBrk9EdLhtcEgXpsPcf5nhc4kYAyrZaVTS9IioF5XN8sXLXCUVa%2F7XKvf1gGxamKJ3hPHfytSKXlpZ2zcPhQE%2FiF8ohZmVCnaMWnMb%2B%2FHz&X-Amz-Signature=264382a9c8719b6d2fb8fbe54fafd05098076811846977a3420d46b56de5f889&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
