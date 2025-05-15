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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICCCEIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF8QhupnzaIiMYXHDvfR6Sp4YfOJtrn9vgLNfSi%2BnNotAiEA%2FBwT9w9s6AaaLvNiRVBMBYKoD8G8mkD1saVWVOtoq0Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE2TCJoBjzqGbFeYVyrcAzjSpGQ2shaKK6Gm%2FuFVfV0uiZsJlDUNDW8gZHcuMmjzWTiLZpU61iYwu%2FcECiuE1pNGWT%2FusfbgFKQ6LeP8wyP1wgA3vGPX2HUo7m1PB7BThrfh9hscVJEplcy9wQnJBtWcJhjqs4IqRn6xEVkkixXN6ebhctz5Wm9gP0V86Glyw4UE4TI4PzyFkqXREm8VLn5iFY6xm%2BegbjrBiEpCc1Ysr%2FzpSHwvVmk6rK94E5flO6EGD0t9IyHhYER%2BPFANp2Pj8Xus5oUvexRGHoqEYkQoRUlEXeMKQ70Etv2Npq9%2FpvseYIPJ2YQyNh7IrHtjiUVW0AXTbED7L0rKO4kM2OOZI9sVuOqHIhAIwXeuK9oz02FWj5HaP4YXgrdTMLe5mtkS7l%2BzOiHDeTzrgc5A8%2BODCYoNQdsXI9M4pblp4Kenc%2B%2FGNFyBzwX9SS%2FlXU%2FO8zVccUmMlHMkSJOlxmRPnGu8%2Bq7TtMrMDvovwzERmu3R%2FawPBrCEJy1vXefUaKIa0f4p3d7GCtKzrY1616JruXrX7Gz%2F2OJhAqPNUDQ1SYf4HYYTTbJZ9eIr%2F1EOcwenGAB3qXsFzTCQLysGsiKXz0n4c0b9XVHv%2BUkKKXLZNZw%2BXiL0mIUH43hejUX3MI%2FSlcEGOqUBLSrIE4%2F0DonOzhfsWng%2Fi8aWetYnktESl%2BmOsWBsIBQ05Nzp19g%2FiAY7H%2BA6SlRl4Rs3ADfZUZJaya97%2BDWIYa4sn0pEXThak1kP65gkoPAjqGWzHjyb7yQd8rrvxx%2F8TZHOvi98uLbqUIWUa9VkYoGh2OvyQAiKY0U3M%2Fqz%2Fhb1c0pTT7Z4hqcObjw0btb0OkDJnRLqMTaHA3XDRFIYObalZjOW&X-Amz-Signature=63b02b8ac7403c60a9507528f3c41efa8ed1a49028a6eafd8b1d3d99aad3e839&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICCCEIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF8QhupnzaIiMYXHDvfR6Sp4YfOJtrn9vgLNfSi%2BnNotAiEA%2FBwT9w9s6AaaLvNiRVBMBYKoD8G8mkD1saVWVOtoq0Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE2TCJoBjzqGbFeYVyrcAzjSpGQ2shaKK6Gm%2FuFVfV0uiZsJlDUNDW8gZHcuMmjzWTiLZpU61iYwu%2FcECiuE1pNGWT%2FusfbgFKQ6LeP8wyP1wgA3vGPX2HUo7m1PB7BThrfh9hscVJEplcy9wQnJBtWcJhjqs4IqRn6xEVkkixXN6ebhctz5Wm9gP0V86Glyw4UE4TI4PzyFkqXREm8VLn5iFY6xm%2BegbjrBiEpCc1Ysr%2FzpSHwvVmk6rK94E5flO6EGD0t9IyHhYER%2BPFANp2Pj8Xus5oUvexRGHoqEYkQoRUlEXeMKQ70Etv2Npq9%2FpvseYIPJ2YQyNh7IrHtjiUVW0AXTbED7L0rKO4kM2OOZI9sVuOqHIhAIwXeuK9oz02FWj5HaP4YXgrdTMLe5mtkS7l%2BzOiHDeTzrgc5A8%2BODCYoNQdsXI9M4pblp4Kenc%2B%2FGNFyBzwX9SS%2FlXU%2FO8zVccUmMlHMkSJOlxmRPnGu8%2Bq7TtMrMDvovwzERmu3R%2FawPBrCEJy1vXefUaKIa0f4p3d7GCtKzrY1616JruXrX7Gz%2F2OJhAqPNUDQ1SYf4HYYTTbJZ9eIr%2F1EOcwenGAB3qXsFzTCQLysGsiKXz0n4c0b9XVHv%2BUkKKXLZNZw%2BXiL0mIUH43hejUX3MI%2FSlcEGOqUBLSrIE4%2F0DonOzhfsWng%2Fi8aWetYnktESl%2BmOsWBsIBQ05Nzp19g%2FiAY7H%2BA6SlRl4Rs3ADfZUZJaya97%2BDWIYa4sn0pEXThak1kP65gkoPAjqGWzHjyb7yQd8rrvxx%2F8TZHOvi98uLbqUIWUa9VkYoGh2OvyQAiKY0U3M%2Fqz%2Fhb1c0pTT7Z4hqcObjw0btb0OkDJnRLqMTaHA3XDRFIYObalZjOW&X-Amz-Signature=40af4db88f17c8caa8ff276a0b252cec666bfd4e1fcdb1045de17f077c5e5914&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICCCEIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF8QhupnzaIiMYXHDvfR6Sp4YfOJtrn9vgLNfSi%2BnNotAiEA%2FBwT9w9s6AaaLvNiRVBMBYKoD8G8mkD1saVWVOtoq0Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE2TCJoBjzqGbFeYVyrcAzjSpGQ2shaKK6Gm%2FuFVfV0uiZsJlDUNDW8gZHcuMmjzWTiLZpU61iYwu%2FcECiuE1pNGWT%2FusfbgFKQ6LeP8wyP1wgA3vGPX2HUo7m1PB7BThrfh9hscVJEplcy9wQnJBtWcJhjqs4IqRn6xEVkkixXN6ebhctz5Wm9gP0V86Glyw4UE4TI4PzyFkqXREm8VLn5iFY6xm%2BegbjrBiEpCc1Ysr%2FzpSHwvVmk6rK94E5flO6EGD0t9IyHhYER%2BPFANp2Pj8Xus5oUvexRGHoqEYkQoRUlEXeMKQ70Etv2Npq9%2FpvseYIPJ2YQyNh7IrHtjiUVW0AXTbED7L0rKO4kM2OOZI9sVuOqHIhAIwXeuK9oz02FWj5HaP4YXgrdTMLe5mtkS7l%2BzOiHDeTzrgc5A8%2BODCYoNQdsXI9M4pblp4Kenc%2B%2FGNFyBzwX9SS%2FlXU%2FO8zVccUmMlHMkSJOlxmRPnGu8%2Bq7TtMrMDvovwzERmu3R%2FawPBrCEJy1vXefUaKIa0f4p3d7GCtKzrY1616JruXrX7Gz%2F2OJhAqPNUDQ1SYf4HYYTTbJZ9eIr%2F1EOcwenGAB3qXsFzTCQLysGsiKXz0n4c0b9XVHv%2BUkKKXLZNZw%2BXiL0mIUH43hejUX3MI%2FSlcEGOqUBLSrIE4%2F0DonOzhfsWng%2Fi8aWetYnktESl%2BmOsWBsIBQ05Nzp19g%2FiAY7H%2BA6SlRl4Rs3ADfZUZJaya97%2BDWIYa4sn0pEXThak1kP65gkoPAjqGWzHjyb7yQd8rrvxx%2F8TZHOvi98uLbqUIWUa9VkYoGh2OvyQAiKY0U3M%2Fqz%2Fhb1c0pTT7Z4hqcObjw0btb0OkDJnRLqMTaHA3XDRFIYObalZjOW&X-Amz-Signature=836885728e22787eaa620b77e648e0277141eab39b61c023ca47bd01d2bf7c86&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICCCEIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF8QhupnzaIiMYXHDvfR6Sp4YfOJtrn9vgLNfSi%2BnNotAiEA%2FBwT9w9s6AaaLvNiRVBMBYKoD8G8mkD1saVWVOtoq0Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE2TCJoBjzqGbFeYVyrcAzjSpGQ2shaKK6Gm%2FuFVfV0uiZsJlDUNDW8gZHcuMmjzWTiLZpU61iYwu%2FcECiuE1pNGWT%2FusfbgFKQ6LeP8wyP1wgA3vGPX2HUo7m1PB7BThrfh9hscVJEplcy9wQnJBtWcJhjqs4IqRn6xEVkkixXN6ebhctz5Wm9gP0V86Glyw4UE4TI4PzyFkqXREm8VLn5iFY6xm%2BegbjrBiEpCc1Ysr%2FzpSHwvVmk6rK94E5flO6EGD0t9IyHhYER%2BPFANp2Pj8Xus5oUvexRGHoqEYkQoRUlEXeMKQ70Etv2Npq9%2FpvseYIPJ2YQyNh7IrHtjiUVW0AXTbED7L0rKO4kM2OOZI9sVuOqHIhAIwXeuK9oz02FWj5HaP4YXgrdTMLe5mtkS7l%2BzOiHDeTzrgc5A8%2BODCYoNQdsXI9M4pblp4Kenc%2B%2FGNFyBzwX9SS%2FlXU%2FO8zVccUmMlHMkSJOlxmRPnGu8%2Bq7TtMrMDvovwzERmu3R%2FawPBrCEJy1vXefUaKIa0f4p3d7GCtKzrY1616JruXrX7Gz%2F2OJhAqPNUDQ1SYf4HYYTTbJZ9eIr%2F1EOcwenGAB3qXsFzTCQLysGsiKXz0n4c0b9XVHv%2BUkKKXLZNZw%2BXiL0mIUH43hejUX3MI%2FSlcEGOqUBLSrIE4%2F0DonOzhfsWng%2Fi8aWetYnktESl%2BmOsWBsIBQ05Nzp19g%2FiAY7H%2BA6SlRl4Rs3ADfZUZJaya97%2BDWIYa4sn0pEXThak1kP65gkoPAjqGWzHjyb7yQd8rrvxx%2F8TZHOvi98uLbqUIWUa9VkYoGh2OvyQAiKY0U3M%2Fqz%2Fhb1c0pTT7Z4hqcObjw0btb0OkDJnRLqMTaHA3XDRFIYObalZjOW&X-Amz-Signature=ba7768a9de57027243b493ee0d9b614f0429872dce2cd831c75f61f4984f363e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICCCEIF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF8QhupnzaIiMYXHDvfR6Sp4YfOJtrn9vgLNfSi%2BnNotAiEA%2FBwT9w9s6AaaLvNiRVBMBYKoD8G8mkD1saVWVOtoq0Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE2TCJoBjzqGbFeYVyrcAzjSpGQ2shaKK6Gm%2FuFVfV0uiZsJlDUNDW8gZHcuMmjzWTiLZpU61iYwu%2FcECiuE1pNGWT%2FusfbgFKQ6LeP8wyP1wgA3vGPX2HUo7m1PB7BThrfh9hscVJEplcy9wQnJBtWcJhjqs4IqRn6xEVkkixXN6ebhctz5Wm9gP0V86Glyw4UE4TI4PzyFkqXREm8VLn5iFY6xm%2BegbjrBiEpCc1Ysr%2FzpSHwvVmk6rK94E5flO6EGD0t9IyHhYER%2BPFANp2Pj8Xus5oUvexRGHoqEYkQoRUlEXeMKQ70Etv2Npq9%2FpvseYIPJ2YQyNh7IrHtjiUVW0AXTbED7L0rKO4kM2OOZI9sVuOqHIhAIwXeuK9oz02FWj5HaP4YXgrdTMLe5mtkS7l%2BzOiHDeTzrgc5A8%2BODCYoNQdsXI9M4pblp4Kenc%2B%2FGNFyBzwX9SS%2FlXU%2FO8zVccUmMlHMkSJOlxmRPnGu8%2Bq7TtMrMDvovwzERmu3R%2FawPBrCEJy1vXefUaKIa0f4p3d7GCtKzrY1616JruXrX7Gz%2F2OJhAqPNUDQ1SYf4HYYTTbJZ9eIr%2F1EOcwenGAB3qXsFzTCQLysGsiKXz0n4c0b9XVHv%2BUkKKXLZNZw%2BXiL0mIUH43hejUX3MI%2FSlcEGOqUBLSrIE4%2F0DonOzhfsWng%2Fi8aWetYnktESl%2BmOsWBsIBQ05Nzp19g%2FiAY7H%2BA6SlRl4Rs3ADfZUZJaya97%2BDWIYa4sn0pEXThak1kP65gkoPAjqGWzHjyb7yQd8rrvxx%2F8TZHOvi98uLbqUIWUa9VkYoGh2OvyQAiKY0U3M%2Fqz%2Fhb1c0pTT7Z4hqcObjw0btb0OkDJnRLqMTaHA3XDRFIYObalZjOW&X-Amz-Signature=2580ce387ab9b162a68ee46e75e7655950a46f76d1cc6ed967eec5930095e01f&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
