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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEKFTPE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCWXpcYV6U1aMsIGtzkHVIPDHmXTIOU1F%2BoFrvbcnA73AIgEXYSR1Qu7II%2Bc4M%2BRDTU%2F%2ByfdIwhb9e4gKMNXPSkF6EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIqI7gStUPEDkp3OSrcAxWuZ9dKw2CCUPYUN12acPo9FXszFG33zINd%2FEwxxXaNzRFsuxz0q0SFxWcuYbfXaw9ryJOTt0S10abPikf%2B4QKXW0o0r9rSppml81riVHq%2FSNKl%2B%2F3mlfB7tATRp3%2FyrlWQFjRKDYD93ApjLVitbXJbVLWSQbGUxPYGu2kotNa0pEYUAOA3k7YmY023kVsR7fIA652KX7Sq6vf6Af5CHHIFJF1uoXYxodM%2FtUosT%2FQuAgpgT1KWORfY%2BeaKr67CCMQq9OHoXaxBS5sq3lHzjxhBFgRZDS97MJ5HzuWmPvyA6auitpIzov8gxl9AyQ6PqF5VVMWWMdOLDaB3G1Gk9UgCIyGgA0zDuJaEzUY9AJodTuBz321dRmgimPdX0zwbgFhp8iG4MocBpI9Xf3U1dRh7yrZvFUGl7qLTNd7j4hp%2Fvqu62F3HRKpyqC0YpFgiZc14xq0xHh5N3DgDGPSNIY0A46bbUFnA1CKcWa1fV9tiVqtpn8ECBwCSSQbEmDBelFFgrpfhgGaE2T9YGgM7DBvsbv7fd40JoXw3SIN1B67lRJJX6dunBP%2FzL3D26gwmrhcygQoGAUiZ8ilnNkuFL6GF%2BFOF%2B3QrUqwjboyFbAbOkJJHDL1FTb2rWQ%2FOMNzqwL4GOqUB9bSWpAieC6TFhLH0BjVfw32Uu%2F9zJ07od%2B3cJe5u0JFKaLaouSCHOHMeIPCLLvRFvXICoL20i8VQxvj7pZhGm2Da5UGp%2FLxW%2BZamKkvMlioidAdgzSBsNHu3E5ZN3TW12GBwwwUVX%2BNHn5XU3VMrDeD6RFQl9r29NPLPwc7yVvCD9ML67yYoQBlNsOauLdMOQPneYO6oIBRl%2B4NeG2shbWzZtOuV&X-Amz-Signature=383c47b013b1874dab070cae7804ab69c766f417f57176b562b5e3254bb2362b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEKFTPE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCWXpcYV6U1aMsIGtzkHVIPDHmXTIOU1F%2BoFrvbcnA73AIgEXYSR1Qu7II%2Bc4M%2BRDTU%2F%2ByfdIwhb9e4gKMNXPSkF6EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIqI7gStUPEDkp3OSrcAxWuZ9dKw2CCUPYUN12acPo9FXszFG33zINd%2FEwxxXaNzRFsuxz0q0SFxWcuYbfXaw9ryJOTt0S10abPikf%2B4QKXW0o0r9rSppml81riVHq%2FSNKl%2B%2F3mlfB7tATRp3%2FyrlWQFjRKDYD93ApjLVitbXJbVLWSQbGUxPYGu2kotNa0pEYUAOA3k7YmY023kVsR7fIA652KX7Sq6vf6Af5CHHIFJF1uoXYxodM%2FtUosT%2FQuAgpgT1KWORfY%2BeaKr67CCMQq9OHoXaxBS5sq3lHzjxhBFgRZDS97MJ5HzuWmPvyA6auitpIzov8gxl9AyQ6PqF5VVMWWMdOLDaB3G1Gk9UgCIyGgA0zDuJaEzUY9AJodTuBz321dRmgimPdX0zwbgFhp8iG4MocBpI9Xf3U1dRh7yrZvFUGl7qLTNd7j4hp%2Fvqu62F3HRKpyqC0YpFgiZc14xq0xHh5N3DgDGPSNIY0A46bbUFnA1CKcWa1fV9tiVqtpn8ECBwCSSQbEmDBelFFgrpfhgGaE2T9YGgM7DBvsbv7fd40JoXw3SIN1B67lRJJX6dunBP%2FzL3D26gwmrhcygQoGAUiZ8ilnNkuFL6GF%2BFOF%2B3QrUqwjboyFbAbOkJJHDL1FTb2rWQ%2FOMNzqwL4GOqUB9bSWpAieC6TFhLH0BjVfw32Uu%2F9zJ07od%2B3cJe5u0JFKaLaouSCHOHMeIPCLLvRFvXICoL20i8VQxvj7pZhGm2Da5UGp%2FLxW%2BZamKkvMlioidAdgzSBsNHu3E5ZN3TW12GBwwwUVX%2BNHn5XU3VMrDeD6RFQl9r29NPLPwc7yVvCD9ML67yYoQBlNsOauLdMOQPneYO6oIBRl%2B4NeG2shbWzZtOuV&X-Amz-Signature=cfa0177e52eed47a6c38feb8ce8f73ed00480f858a47fcd6ec62db3080f8170c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEKFTPE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCWXpcYV6U1aMsIGtzkHVIPDHmXTIOU1F%2BoFrvbcnA73AIgEXYSR1Qu7II%2Bc4M%2BRDTU%2F%2ByfdIwhb9e4gKMNXPSkF6EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIqI7gStUPEDkp3OSrcAxWuZ9dKw2CCUPYUN12acPo9FXszFG33zINd%2FEwxxXaNzRFsuxz0q0SFxWcuYbfXaw9ryJOTt0S10abPikf%2B4QKXW0o0r9rSppml81riVHq%2FSNKl%2B%2F3mlfB7tATRp3%2FyrlWQFjRKDYD93ApjLVitbXJbVLWSQbGUxPYGu2kotNa0pEYUAOA3k7YmY023kVsR7fIA652KX7Sq6vf6Af5CHHIFJF1uoXYxodM%2FtUosT%2FQuAgpgT1KWORfY%2BeaKr67CCMQq9OHoXaxBS5sq3lHzjxhBFgRZDS97MJ5HzuWmPvyA6auitpIzov8gxl9AyQ6PqF5VVMWWMdOLDaB3G1Gk9UgCIyGgA0zDuJaEzUY9AJodTuBz321dRmgimPdX0zwbgFhp8iG4MocBpI9Xf3U1dRh7yrZvFUGl7qLTNd7j4hp%2Fvqu62F3HRKpyqC0YpFgiZc14xq0xHh5N3DgDGPSNIY0A46bbUFnA1CKcWa1fV9tiVqtpn8ECBwCSSQbEmDBelFFgrpfhgGaE2T9YGgM7DBvsbv7fd40JoXw3SIN1B67lRJJX6dunBP%2FzL3D26gwmrhcygQoGAUiZ8ilnNkuFL6GF%2BFOF%2B3QrUqwjboyFbAbOkJJHDL1FTb2rWQ%2FOMNzqwL4GOqUB9bSWpAieC6TFhLH0BjVfw32Uu%2F9zJ07od%2B3cJe5u0JFKaLaouSCHOHMeIPCLLvRFvXICoL20i8VQxvj7pZhGm2Da5UGp%2FLxW%2BZamKkvMlioidAdgzSBsNHu3E5ZN3TW12GBwwwUVX%2BNHn5XU3VMrDeD6RFQl9r29NPLPwc7yVvCD9ML67yYoQBlNsOauLdMOQPneYO6oIBRl%2B4NeG2shbWzZtOuV&X-Amz-Signature=7c83292da7e95e2555018ef24a740750bba56d8a6ffa9896014629a47f0e57c6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEKFTPE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCWXpcYV6U1aMsIGtzkHVIPDHmXTIOU1F%2BoFrvbcnA73AIgEXYSR1Qu7II%2Bc4M%2BRDTU%2F%2ByfdIwhb9e4gKMNXPSkF6EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIqI7gStUPEDkp3OSrcAxWuZ9dKw2CCUPYUN12acPo9FXszFG33zINd%2FEwxxXaNzRFsuxz0q0SFxWcuYbfXaw9ryJOTt0S10abPikf%2B4QKXW0o0r9rSppml81riVHq%2FSNKl%2B%2F3mlfB7tATRp3%2FyrlWQFjRKDYD93ApjLVitbXJbVLWSQbGUxPYGu2kotNa0pEYUAOA3k7YmY023kVsR7fIA652KX7Sq6vf6Af5CHHIFJF1uoXYxodM%2FtUosT%2FQuAgpgT1KWORfY%2BeaKr67CCMQq9OHoXaxBS5sq3lHzjxhBFgRZDS97MJ5HzuWmPvyA6auitpIzov8gxl9AyQ6PqF5VVMWWMdOLDaB3G1Gk9UgCIyGgA0zDuJaEzUY9AJodTuBz321dRmgimPdX0zwbgFhp8iG4MocBpI9Xf3U1dRh7yrZvFUGl7qLTNd7j4hp%2Fvqu62F3HRKpyqC0YpFgiZc14xq0xHh5N3DgDGPSNIY0A46bbUFnA1CKcWa1fV9tiVqtpn8ECBwCSSQbEmDBelFFgrpfhgGaE2T9YGgM7DBvsbv7fd40JoXw3SIN1B67lRJJX6dunBP%2FzL3D26gwmrhcygQoGAUiZ8ilnNkuFL6GF%2BFOF%2B3QrUqwjboyFbAbOkJJHDL1FTb2rWQ%2FOMNzqwL4GOqUB9bSWpAieC6TFhLH0BjVfw32Uu%2F9zJ07od%2B3cJe5u0JFKaLaouSCHOHMeIPCLLvRFvXICoL20i8VQxvj7pZhGm2Da5UGp%2FLxW%2BZamKkvMlioidAdgzSBsNHu3E5ZN3TW12GBwwwUVX%2BNHn5XU3VMrDeD6RFQl9r29NPLPwc7yVvCD9ML67yYoQBlNsOauLdMOQPneYO6oIBRl%2B4NeG2shbWzZtOuV&X-Amz-Signature=8a354e25a77f16e8dfd5eb623a3b171451c12464a0f6600a38fc18032c6dd942&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEKFTPE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCWXpcYV6U1aMsIGtzkHVIPDHmXTIOU1F%2BoFrvbcnA73AIgEXYSR1Qu7II%2Bc4M%2BRDTU%2F%2ByfdIwhb9e4gKMNXPSkF6EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIqI7gStUPEDkp3OSrcAxWuZ9dKw2CCUPYUN12acPo9FXszFG33zINd%2FEwxxXaNzRFsuxz0q0SFxWcuYbfXaw9ryJOTt0S10abPikf%2B4QKXW0o0r9rSppml81riVHq%2FSNKl%2B%2F3mlfB7tATRp3%2FyrlWQFjRKDYD93ApjLVitbXJbVLWSQbGUxPYGu2kotNa0pEYUAOA3k7YmY023kVsR7fIA652KX7Sq6vf6Af5CHHIFJF1uoXYxodM%2FtUosT%2FQuAgpgT1KWORfY%2BeaKr67CCMQq9OHoXaxBS5sq3lHzjxhBFgRZDS97MJ5HzuWmPvyA6auitpIzov8gxl9AyQ6PqF5VVMWWMdOLDaB3G1Gk9UgCIyGgA0zDuJaEzUY9AJodTuBz321dRmgimPdX0zwbgFhp8iG4MocBpI9Xf3U1dRh7yrZvFUGl7qLTNd7j4hp%2Fvqu62F3HRKpyqC0YpFgiZc14xq0xHh5N3DgDGPSNIY0A46bbUFnA1CKcWa1fV9tiVqtpn8ECBwCSSQbEmDBelFFgrpfhgGaE2T9YGgM7DBvsbv7fd40JoXw3SIN1B67lRJJX6dunBP%2FzL3D26gwmrhcygQoGAUiZ8ilnNkuFL6GF%2BFOF%2B3QrUqwjboyFbAbOkJJHDL1FTb2rWQ%2FOMNzqwL4GOqUB9bSWpAieC6TFhLH0BjVfw32Uu%2F9zJ07od%2B3cJe5u0JFKaLaouSCHOHMeIPCLLvRFvXICoL20i8VQxvj7pZhGm2Da5UGp%2FLxW%2BZamKkvMlioidAdgzSBsNHu3E5ZN3TW12GBwwwUVX%2BNHn5XU3VMrDeD6RFQl9r29NPLPwc7yVvCD9ML67yYoQBlNsOauLdMOQPneYO6oIBRl%2B4NeG2shbWzZtOuV&X-Amz-Signature=a804da2ee45435d53f08c0ab385d60ab4c983d8684b95fa08e3e228375c6d7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
