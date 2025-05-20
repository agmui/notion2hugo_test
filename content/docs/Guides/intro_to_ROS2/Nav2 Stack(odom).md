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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653N5OHQN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBagyw1ipamCOzXe2KuwVwjMHhHWn5zScd0lLoQ00TZAiAQWecVSpI%2Boxj8%2FbQ5pGOPBfSZwri4oudsHEmB2L1VmSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhuTIoZjxkO1dBFaKtwDuP6%2FyXB3lUEhGB8nrc4iB8SVt6J9vd7WI77%2BST7cfRXhTszdLKSQU4rLCRx63%2B62gHBZggqky8pG0AOlA5uTFHu94uLq6SpWMZCZZMIcG%2FBx2gPRV8my3IHPyPdC6sgJuVqpQWFGI1ef%2FcF%2Fu%2BKGFYsWeN6RSE86bGRiP%2BTRfr7gYVSn2SsN0oz5u0CyokDp%2Fs5SA%2FIoHzHYqvFNsLZFMIJhHNbKPspSbO97vTtAn929panXBwYWkLmvokLV%2B%2F6y015oWqQIv1CnoIB31tVZEhoKwo1a9BPo9j2PTjO2NL%2B4j%2BFI02vm5i2nOkZ23FWCOFztZohWinAJ1pxCi0%2B1n%2B3F2tYC9IrqTxTDoEJ6HLVASb9IoBd0wavEKkYzUUkbiGTHjlCRbWeRjj1lQE7CpCl4%2BYyygJx3kNWF7wbAHknFYNxy2JmsIbvB8A%2Fw1LoQMaS%2Bzf4hcYlqlLdUhwwEGijOBycPsj5FlpWHeh%2F7uF0WcgkI%2Bk3NA%2BbEXJbsdIAnE2locTWGTVdTjjXpVVMywmOdK9N9PwDWMHmsgg215lZYKeZXVWyz2zpnkdUQSTptGmYfQ3VWlJhYNVpKc1hEXu%2FWOX7LzB3N7YoOIg6as2CQeDSMyqjjxzinL38wjsewwQY6pgG17lM1%2FaRBH3DvTQaXl66D2%2BCuRdipDwfZDXmAQHYjW12XMethgo0ujTADsjF5v7bocdQW%2FxHeT%2FmTWBjI%2FQhGjDhVdC%2B7520aFnRkQqS4jjhoRYFBBwOB2mDt%2BJe%2BpZv47gNvmfA44LI06y6f%2FYqCTDVTEv4jzexss5FzTX13mzdYx34NwLVuwKyqQIMhmAsYWYd0e10zDmN4f0GvU5SP1GJf2N3z&X-Amz-Signature=53545e9729a0476936c82ef967222d9ae43d735479b5b1a0b956f546c3aeff35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653N5OHQN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBagyw1ipamCOzXe2KuwVwjMHhHWn5zScd0lLoQ00TZAiAQWecVSpI%2Boxj8%2FbQ5pGOPBfSZwri4oudsHEmB2L1VmSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhuTIoZjxkO1dBFaKtwDuP6%2FyXB3lUEhGB8nrc4iB8SVt6J9vd7WI77%2BST7cfRXhTszdLKSQU4rLCRx63%2B62gHBZggqky8pG0AOlA5uTFHu94uLq6SpWMZCZZMIcG%2FBx2gPRV8my3IHPyPdC6sgJuVqpQWFGI1ef%2FcF%2Fu%2BKGFYsWeN6RSE86bGRiP%2BTRfr7gYVSn2SsN0oz5u0CyokDp%2Fs5SA%2FIoHzHYqvFNsLZFMIJhHNbKPspSbO97vTtAn929panXBwYWkLmvokLV%2B%2F6y015oWqQIv1CnoIB31tVZEhoKwo1a9BPo9j2PTjO2NL%2B4j%2BFI02vm5i2nOkZ23FWCOFztZohWinAJ1pxCi0%2B1n%2B3F2tYC9IrqTxTDoEJ6HLVASb9IoBd0wavEKkYzUUkbiGTHjlCRbWeRjj1lQE7CpCl4%2BYyygJx3kNWF7wbAHknFYNxy2JmsIbvB8A%2Fw1LoQMaS%2Bzf4hcYlqlLdUhwwEGijOBycPsj5FlpWHeh%2F7uF0WcgkI%2Bk3NA%2BbEXJbsdIAnE2locTWGTVdTjjXpVVMywmOdK9N9PwDWMHmsgg215lZYKeZXVWyz2zpnkdUQSTptGmYfQ3VWlJhYNVpKc1hEXu%2FWOX7LzB3N7YoOIg6as2CQeDSMyqjjxzinL38wjsewwQY6pgG17lM1%2FaRBH3DvTQaXl66D2%2BCuRdipDwfZDXmAQHYjW12XMethgo0ujTADsjF5v7bocdQW%2FxHeT%2FmTWBjI%2FQhGjDhVdC%2B7520aFnRkQqS4jjhoRYFBBwOB2mDt%2BJe%2BpZv47gNvmfA44LI06y6f%2FYqCTDVTEv4jzexss5FzTX13mzdYx34NwLVuwKyqQIMhmAsYWYd0e10zDmN4f0GvU5SP1GJf2N3z&X-Amz-Signature=0b977b398063292b83e164a5805b3a7d66a3866057b1c33ac29ef79b30c269fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653N5OHQN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBagyw1ipamCOzXe2KuwVwjMHhHWn5zScd0lLoQ00TZAiAQWecVSpI%2Boxj8%2FbQ5pGOPBfSZwri4oudsHEmB2L1VmSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhuTIoZjxkO1dBFaKtwDuP6%2FyXB3lUEhGB8nrc4iB8SVt6J9vd7WI77%2BST7cfRXhTszdLKSQU4rLCRx63%2B62gHBZggqky8pG0AOlA5uTFHu94uLq6SpWMZCZZMIcG%2FBx2gPRV8my3IHPyPdC6sgJuVqpQWFGI1ef%2FcF%2Fu%2BKGFYsWeN6RSE86bGRiP%2BTRfr7gYVSn2SsN0oz5u0CyokDp%2Fs5SA%2FIoHzHYqvFNsLZFMIJhHNbKPspSbO97vTtAn929panXBwYWkLmvokLV%2B%2F6y015oWqQIv1CnoIB31tVZEhoKwo1a9BPo9j2PTjO2NL%2B4j%2BFI02vm5i2nOkZ23FWCOFztZohWinAJ1pxCi0%2B1n%2B3F2tYC9IrqTxTDoEJ6HLVASb9IoBd0wavEKkYzUUkbiGTHjlCRbWeRjj1lQE7CpCl4%2BYyygJx3kNWF7wbAHknFYNxy2JmsIbvB8A%2Fw1LoQMaS%2Bzf4hcYlqlLdUhwwEGijOBycPsj5FlpWHeh%2F7uF0WcgkI%2Bk3NA%2BbEXJbsdIAnE2locTWGTVdTjjXpVVMywmOdK9N9PwDWMHmsgg215lZYKeZXVWyz2zpnkdUQSTptGmYfQ3VWlJhYNVpKc1hEXu%2FWOX7LzB3N7YoOIg6as2CQeDSMyqjjxzinL38wjsewwQY6pgG17lM1%2FaRBH3DvTQaXl66D2%2BCuRdipDwfZDXmAQHYjW12XMethgo0ujTADsjF5v7bocdQW%2FxHeT%2FmTWBjI%2FQhGjDhVdC%2B7520aFnRkQqS4jjhoRYFBBwOB2mDt%2BJe%2BpZv47gNvmfA44LI06y6f%2FYqCTDVTEv4jzexss5FzTX13mzdYx34NwLVuwKyqQIMhmAsYWYd0e10zDmN4f0GvU5SP1GJf2N3z&X-Amz-Signature=06867069851f3c2a985b99dc24ac0e6a4005fdfb22b6888816a05b0d0a1323b2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653N5OHQN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBagyw1ipamCOzXe2KuwVwjMHhHWn5zScd0lLoQ00TZAiAQWecVSpI%2Boxj8%2FbQ5pGOPBfSZwri4oudsHEmB2L1VmSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhuTIoZjxkO1dBFaKtwDuP6%2FyXB3lUEhGB8nrc4iB8SVt6J9vd7WI77%2BST7cfRXhTszdLKSQU4rLCRx63%2B62gHBZggqky8pG0AOlA5uTFHu94uLq6SpWMZCZZMIcG%2FBx2gPRV8my3IHPyPdC6sgJuVqpQWFGI1ef%2FcF%2Fu%2BKGFYsWeN6RSE86bGRiP%2BTRfr7gYVSn2SsN0oz5u0CyokDp%2Fs5SA%2FIoHzHYqvFNsLZFMIJhHNbKPspSbO97vTtAn929panXBwYWkLmvokLV%2B%2F6y015oWqQIv1CnoIB31tVZEhoKwo1a9BPo9j2PTjO2NL%2B4j%2BFI02vm5i2nOkZ23FWCOFztZohWinAJ1pxCi0%2B1n%2B3F2tYC9IrqTxTDoEJ6HLVASb9IoBd0wavEKkYzUUkbiGTHjlCRbWeRjj1lQE7CpCl4%2BYyygJx3kNWF7wbAHknFYNxy2JmsIbvB8A%2Fw1LoQMaS%2Bzf4hcYlqlLdUhwwEGijOBycPsj5FlpWHeh%2F7uF0WcgkI%2Bk3NA%2BbEXJbsdIAnE2locTWGTVdTjjXpVVMywmOdK9N9PwDWMHmsgg215lZYKeZXVWyz2zpnkdUQSTptGmYfQ3VWlJhYNVpKc1hEXu%2FWOX7LzB3N7YoOIg6as2CQeDSMyqjjxzinL38wjsewwQY6pgG17lM1%2FaRBH3DvTQaXl66D2%2BCuRdipDwfZDXmAQHYjW12XMethgo0ujTADsjF5v7bocdQW%2FxHeT%2FmTWBjI%2FQhGjDhVdC%2B7520aFnRkQqS4jjhoRYFBBwOB2mDt%2BJe%2BpZv47gNvmfA44LI06y6f%2FYqCTDVTEv4jzexss5FzTX13mzdYx34NwLVuwKyqQIMhmAsYWYd0e10zDmN4f0GvU5SP1GJf2N3z&X-Amz-Signature=82b183ece88ec11601f5fba89c7a5f606c260837014646486a4ed3e502197c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653N5OHQN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBagyw1ipamCOzXe2KuwVwjMHhHWn5zScd0lLoQ00TZAiAQWecVSpI%2Boxj8%2FbQ5pGOPBfSZwri4oudsHEmB2L1VmSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhuTIoZjxkO1dBFaKtwDuP6%2FyXB3lUEhGB8nrc4iB8SVt6J9vd7WI77%2BST7cfRXhTszdLKSQU4rLCRx63%2B62gHBZggqky8pG0AOlA5uTFHu94uLq6SpWMZCZZMIcG%2FBx2gPRV8my3IHPyPdC6sgJuVqpQWFGI1ef%2FcF%2Fu%2BKGFYsWeN6RSE86bGRiP%2BTRfr7gYVSn2SsN0oz5u0CyokDp%2Fs5SA%2FIoHzHYqvFNsLZFMIJhHNbKPspSbO97vTtAn929panXBwYWkLmvokLV%2B%2F6y015oWqQIv1CnoIB31tVZEhoKwo1a9BPo9j2PTjO2NL%2B4j%2BFI02vm5i2nOkZ23FWCOFztZohWinAJ1pxCi0%2B1n%2B3F2tYC9IrqTxTDoEJ6HLVASb9IoBd0wavEKkYzUUkbiGTHjlCRbWeRjj1lQE7CpCl4%2BYyygJx3kNWF7wbAHknFYNxy2JmsIbvB8A%2Fw1LoQMaS%2Bzf4hcYlqlLdUhwwEGijOBycPsj5FlpWHeh%2F7uF0WcgkI%2Bk3NA%2BbEXJbsdIAnE2locTWGTVdTjjXpVVMywmOdK9N9PwDWMHmsgg215lZYKeZXVWyz2zpnkdUQSTptGmYfQ3VWlJhYNVpKc1hEXu%2FWOX7LzB3N7YoOIg6as2CQeDSMyqjjxzinL38wjsewwQY6pgG17lM1%2FaRBH3DvTQaXl66D2%2BCuRdipDwfZDXmAQHYjW12XMethgo0ujTADsjF5v7bocdQW%2FxHeT%2FmTWBjI%2FQhGjDhVdC%2B7520aFnRkQqS4jjhoRYFBBwOB2mDt%2BJe%2BpZv47gNvmfA44LI06y6f%2FYqCTDVTEv4jzexss5FzTX13mzdYx34NwLVuwKyqQIMhmAsYWYd0e10zDmN4f0GvU5SP1GJf2N3z&X-Amz-Signature=b8b41d9e467492fcac83302414a57a7edf63f9bd3a0bccce7cf16c6ef5c398c4&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
