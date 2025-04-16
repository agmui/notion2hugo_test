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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RX7UYIS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvCYJQchTT4ZqhNIiP8gL8E86L%2B%2Fxt502AmAHwZQLtYAiEAtdxhLbLA3zaa2nfn5Ai8YzgBQtHrWzRxULyre9Wi9Nwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAitIZOtv6Jtr5fUuCrcA4hTrwwGntsnoPQvqP5QXgaGOuMBFwSGbgUwhrjkbDs9J84F2zDfWSpc4Tvz5640Ltl42w%2FIkchwTkkwER8cTOuaN6BEBb1n63KlS%2BQF%2BwsiwoM7%2FymGqIlTJrFhVXew6XlR3etQm%2BvTbBgiJTb8PXmSB%2BIkm5J2tGgq5S4zEk7FpvbibtdzO8YsNfxd%2Bnw5xB%2BUMCLHcRTuMTXAlV8kQ1s8bibb2%2BBEanifaTwrDxH%2BsNqzlII57SMyW6%2BC6M%2BjclrUiTdR8oYhYF0hhom7BwJkGnIIeROPSciPBy5NAcMXcreI5AIkB50e3e%2B8oaHsgc8KFgc5JtHi7avIyEF09vCNwwZnHHNtW2NQppE%2FBzJh6dDchTAP3XLZq2cIVTVRG%2F%2FZY%2Bl6YYRcrTBUWCtFaiBw0wcEcJao7ITwZc9M8DYR%2FrVZXPPqD%2B%2F%2BwOqsuCuI%2FpFm%2Fg4Y5y95Y1Cc3DPjPB3ISlwFA1u8FRkZOLs6nd8rcds3ULUJzIaJUxb89Zy9n9UCCyy3298iEo%2BMheM40tZHBqnQyLpaJ9be4pfpF0Rqn5N%2F1KcTsmFEj3us05DMobydFQ%2BWDEgZtDq%2By%2Ffdfrv7Iq5P8I4CzAdDfnGRXX%2F9ULPnKzh00LgvgV%2FDMNPGgMAGOqUBwD1mmuKWZaBtHL70d8P9lUTULWxpyDbzdHmjg6v4RgipUlRVS92tFsW6JGGcJHSvYAuZqndj6QmS%2B2rwohBARt5pjhH7YgFekvt%2B264H2r8Tq8ioM8YLB912AcT%2Bo3CXyA5iWmsk8g7A4VDgoWeM2e2yfRpDLCVx9kcGUY0WsZVf3irrlrEym0L7rZOvptN6%2F%2BybZVZfErHl%2FwzmgL8v1ZPGm4hP&X-Amz-Signature=e4a423cebb6fe0be24fa120bede70d2fdfba1aa7675bdbe67f5c3a92e5fdbb05&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RX7UYIS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvCYJQchTT4ZqhNIiP8gL8E86L%2B%2Fxt502AmAHwZQLtYAiEAtdxhLbLA3zaa2nfn5Ai8YzgBQtHrWzRxULyre9Wi9Nwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAitIZOtv6Jtr5fUuCrcA4hTrwwGntsnoPQvqP5QXgaGOuMBFwSGbgUwhrjkbDs9J84F2zDfWSpc4Tvz5640Ltl42w%2FIkchwTkkwER8cTOuaN6BEBb1n63KlS%2BQF%2BwsiwoM7%2FymGqIlTJrFhVXew6XlR3etQm%2BvTbBgiJTb8PXmSB%2BIkm5J2tGgq5S4zEk7FpvbibtdzO8YsNfxd%2Bnw5xB%2BUMCLHcRTuMTXAlV8kQ1s8bibb2%2BBEanifaTwrDxH%2BsNqzlII57SMyW6%2BC6M%2BjclrUiTdR8oYhYF0hhom7BwJkGnIIeROPSciPBy5NAcMXcreI5AIkB50e3e%2B8oaHsgc8KFgc5JtHi7avIyEF09vCNwwZnHHNtW2NQppE%2FBzJh6dDchTAP3XLZq2cIVTVRG%2F%2FZY%2Bl6YYRcrTBUWCtFaiBw0wcEcJao7ITwZc9M8DYR%2FrVZXPPqD%2B%2F%2BwOqsuCuI%2FpFm%2Fg4Y5y95Y1Cc3DPjPB3ISlwFA1u8FRkZOLs6nd8rcds3ULUJzIaJUxb89Zy9n9UCCyy3298iEo%2BMheM40tZHBqnQyLpaJ9be4pfpF0Rqn5N%2F1KcTsmFEj3us05DMobydFQ%2BWDEgZtDq%2By%2Ffdfrv7Iq5P8I4CzAdDfnGRXX%2F9ULPnKzh00LgvgV%2FDMNPGgMAGOqUBwD1mmuKWZaBtHL70d8P9lUTULWxpyDbzdHmjg6v4RgipUlRVS92tFsW6JGGcJHSvYAuZqndj6QmS%2B2rwohBARt5pjhH7YgFekvt%2B264H2r8Tq8ioM8YLB912AcT%2Bo3CXyA5iWmsk8g7A4VDgoWeM2e2yfRpDLCVx9kcGUY0WsZVf3irrlrEym0L7rZOvptN6%2F%2BybZVZfErHl%2FwzmgL8v1ZPGm4hP&X-Amz-Signature=2f86e01693f0228e264352422b74467fa5ca64eebbb23fdb72b51b30caa66740&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RX7UYIS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvCYJQchTT4ZqhNIiP8gL8E86L%2B%2Fxt502AmAHwZQLtYAiEAtdxhLbLA3zaa2nfn5Ai8YzgBQtHrWzRxULyre9Wi9Nwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAitIZOtv6Jtr5fUuCrcA4hTrwwGntsnoPQvqP5QXgaGOuMBFwSGbgUwhrjkbDs9J84F2zDfWSpc4Tvz5640Ltl42w%2FIkchwTkkwER8cTOuaN6BEBb1n63KlS%2BQF%2BwsiwoM7%2FymGqIlTJrFhVXew6XlR3etQm%2BvTbBgiJTb8PXmSB%2BIkm5J2tGgq5S4zEk7FpvbibtdzO8YsNfxd%2Bnw5xB%2BUMCLHcRTuMTXAlV8kQ1s8bibb2%2BBEanifaTwrDxH%2BsNqzlII57SMyW6%2BC6M%2BjclrUiTdR8oYhYF0hhom7BwJkGnIIeROPSciPBy5NAcMXcreI5AIkB50e3e%2B8oaHsgc8KFgc5JtHi7avIyEF09vCNwwZnHHNtW2NQppE%2FBzJh6dDchTAP3XLZq2cIVTVRG%2F%2FZY%2Bl6YYRcrTBUWCtFaiBw0wcEcJao7ITwZc9M8DYR%2FrVZXPPqD%2B%2F%2BwOqsuCuI%2FpFm%2Fg4Y5y95Y1Cc3DPjPB3ISlwFA1u8FRkZOLs6nd8rcds3ULUJzIaJUxb89Zy9n9UCCyy3298iEo%2BMheM40tZHBqnQyLpaJ9be4pfpF0Rqn5N%2F1KcTsmFEj3us05DMobydFQ%2BWDEgZtDq%2By%2Ffdfrv7Iq5P8I4CzAdDfnGRXX%2F9ULPnKzh00LgvgV%2FDMNPGgMAGOqUBwD1mmuKWZaBtHL70d8P9lUTULWxpyDbzdHmjg6v4RgipUlRVS92tFsW6JGGcJHSvYAuZqndj6QmS%2B2rwohBARt5pjhH7YgFekvt%2B264H2r8Tq8ioM8YLB912AcT%2Bo3CXyA5iWmsk8g7A4VDgoWeM2e2yfRpDLCVx9kcGUY0WsZVf3irrlrEym0L7rZOvptN6%2F%2BybZVZfErHl%2FwzmgL8v1ZPGm4hP&X-Amz-Signature=c025d8abeec3bf49687f8973f27a6a722bc38d8df45a7f94502bd1ac99edd4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RX7UYIS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvCYJQchTT4ZqhNIiP8gL8E86L%2B%2Fxt502AmAHwZQLtYAiEAtdxhLbLA3zaa2nfn5Ai8YzgBQtHrWzRxULyre9Wi9Nwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAitIZOtv6Jtr5fUuCrcA4hTrwwGntsnoPQvqP5QXgaGOuMBFwSGbgUwhrjkbDs9J84F2zDfWSpc4Tvz5640Ltl42w%2FIkchwTkkwER8cTOuaN6BEBb1n63KlS%2BQF%2BwsiwoM7%2FymGqIlTJrFhVXew6XlR3etQm%2BvTbBgiJTb8PXmSB%2BIkm5J2tGgq5S4zEk7FpvbibtdzO8YsNfxd%2Bnw5xB%2BUMCLHcRTuMTXAlV8kQ1s8bibb2%2BBEanifaTwrDxH%2BsNqzlII57SMyW6%2BC6M%2BjclrUiTdR8oYhYF0hhom7BwJkGnIIeROPSciPBy5NAcMXcreI5AIkB50e3e%2B8oaHsgc8KFgc5JtHi7avIyEF09vCNwwZnHHNtW2NQppE%2FBzJh6dDchTAP3XLZq2cIVTVRG%2F%2FZY%2Bl6YYRcrTBUWCtFaiBw0wcEcJao7ITwZc9M8DYR%2FrVZXPPqD%2B%2F%2BwOqsuCuI%2FpFm%2Fg4Y5y95Y1Cc3DPjPB3ISlwFA1u8FRkZOLs6nd8rcds3ULUJzIaJUxb89Zy9n9UCCyy3298iEo%2BMheM40tZHBqnQyLpaJ9be4pfpF0Rqn5N%2F1KcTsmFEj3us05DMobydFQ%2BWDEgZtDq%2By%2Ffdfrv7Iq5P8I4CzAdDfnGRXX%2F9ULPnKzh00LgvgV%2FDMNPGgMAGOqUBwD1mmuKWZaBtHL70d8P9lUTULWxpyDbzdHmjg6v4RgipUlRVS92tFsW6JGGcJHSvYAuZqndj6QmS%2B2rwohBARt5pjhH7YgFekvt%2B264H2r8Tq8ioM8YLB912AcT%2Bo3CXyA5iWmsk8g7A4VDgoWeM2e2yfRpDLCVx9kcGUY0WsZVf3irrlrEym0L7rZOvptN6%2F%2BybZVZfErHl%2FwzmgL8v1ZPGm4hP&X-Amz-Signature=f27dd5a83d35b5aa6c3d72189e2f1ba671736874c8179272558dab28a524d876&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RX7UYIS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvCYJQchTT4ZqhNIiP8gL8E86L%2B%2Fxt502AmAHwZQLtYAiEAtdxhLbLA3zaa2nfn5Ai8YzgBQtHrWzRxULyre9Wi9Nwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAitIZOtv6Jtr5fUuCrcA4hTrwwGntsnoPQvqP5QXgaGOuMBFwSGbgUwhrjkbDs9J84F2zDfWSpc4Tvz5640Ltl42w%2FIkchwTkkwER8cTOuaN6BEBb1n63KlS%2BQF%2BwsiwoM7%2FymGqIlTJrFhVXew6XlR3etQm%2BvTbBgiJTb8PXmSB%2BIkm5J2tGgq5S4zEk7FpvbibtdzO8YsNfxd%2Bnw5xB%2BUMCLHcRTuMTXAlV8kQ1s8bibb2%2BBEanifaTwrDxH%2BsNqzlII57SMyW6%2BC6M%2BjclrUiTdR8oYhYF0hhom7BwJkGnIIeROPSciPBy5NAcMXcreI5AIkB50e3e%2B8oaHsgc8KFgc5JtHi7avIyEF09vCNwwZnHHNtW2NQppE%2FBzJh6dDchTAP3XLZq2cIVTVRG%2F%2FZY%2Bl6YYRcrTBUWCtFaiBw0wcEcJao7ITwZc9M8DYR%2FrVZXPPqD%2B%2F%2BwOqsuCuI%2FpFm%2Fg4Y5y95Y1Cc3DPjPB3ISlwFA1u8FRkZOLs6nd8rcds3ULUJzIaJUxb89Zy9n9UCCyy3298iEo%2BMheM40tZHBqnQyLpaJ9be4pfpF0Rqn5N%2F1KcTsmFEj3us05DMobydFQ%2BWDEgZtDq%2By%2Ffdfrv7Iq5P8I4CzAdDfnGRXX%2F9ULPnKzh00LgvgV%2FDMNPGgMAGOqUBwD1mmuKWZaBtHL70d8P9lUTULWxpyDbzdHmjg6v4RgipUlRVS92tFsW6JGGcJHSvYAuZqndj6QmS%2B2rwohBARt5pjhH7YgFekvt%2B264H2r8Tq8ioM8YLB912AcT%2Bo3CXyA5iWmsk8g7A4VDgoWeM2e2yfRpDLCVx9kcGUY0WsZVf3irrlrEym0L7rZOvptN6%2F%2BybZVZfErHl%2FwzmgL8v1ZPGm4hP&X-Amz-Signature=f6755beec9e5ef73fda65405f20661d7435cd71380dc15dc53e22db803ecce78&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
