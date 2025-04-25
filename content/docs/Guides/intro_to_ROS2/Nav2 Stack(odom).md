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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRSEPX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC91ZFFz8VXINde4wC%2FRI03gAMcIl9qD42Uxha5TFJTVAiA5PZ9sOvHU79UlUVR1nJKHRexdLr7KavuT9wBRec9GzCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhDHYnfwYeAh18DFQKtwDQezqR%2FO8p3fIrZZkU08xRQEcHjp%2B4Vfh1%2FklhFSMZ%2ByglImo8t2m8Uuk1nr2izWYBVwGNLi4tAJh2LTVoAzG3HDS7nNOLJq%2FsOH1%2B5URY3LsAzQ2qVk2s1iIr9Vev%2Bi3ER7S1PgpJTVPDKsYn34LcsShmsSCufkxYyxddL9%2FO%2BXVv0PI4b%2FQ4bd9Taq7jQFS0a2%2BaFqBPBt%2BQZYbXZOpybiC2DDe9zTfUv3MScAMz0bVZGQwB23WO7rcowoJ%2B3oWFRA20xulQitau%2FF%2Bd%2FDkjxfMvhoe5jJR4cUt87%2Fhg1hByw2IOA%2F3szl8zSXj3EvKKBt5%2FRxh1tpooMmet7S8hvjWxgmgd%2FroBKvG3C6hCoeF1E3QIS7wR%2BhtvXmJW8VW39MhO1m5ukH33APmbHQxF7HJV5rR%2F4pFpoFmAjwseWEJKptFeGAtH9SHhNywiUoPIQzXwaheJ3Wg6SamXpux7WUgC%2FpczIDM7ArVJIIBeen%2BGYYhXfMqi2lFtq1wntoJ9gFU69Rv2CgGN%2Fd4kYkwOLLBlVX0xylqPdrLNj5F09HJcUqdwPVKzo0bQZLGarxGbI2OlY89s5AyVD9wJKFqpfkU8PJxCJddgEThwb6e2M3sM%2FavB6aBFQV4RLgwq8qswAY6pgEyvcKfB6tAQliUORYflq46%2BByixVuu6%2BYDmMbybrYzAYLBKzp6WmQErQgiGHLNogW41cKCWWCGE%2FQEq25GIebZxLXj36JnzvyEQBcvuF9ciMFBRu%2BvLuzFe5VrJtXY%2BAjtLgHw4f4XXzxeXEP8eLXICWCDNGTZK8nlqj6V7K2Z5VjGDjUVILDtiBpz%2F668LrfQJ1qvrqGsD%2FERZGd9A9sqfjD3GFSM&X-Amz-Signature=17196529390844074f43a98ebe20f0af7c65fd9369954fb3aaa006307fef978b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRSEPX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC91ZFFz8VXINde4wC%2FRI03gAMcIl9qD42Uxha5TFJTVAiA5PZ9sOvHU79UlUVR1nJKHRexdLr7KavuT9wBRec9GzCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhDHYnfwYeAh18DFQKtwDQezqR%2FO8p3fIrZZkU08xRQEcHjp%2B4Vfh1%2FklhFSMZ%2ByglImo8t2m8Uuk1nr2izWYBVwGNLi4tAJh2LTVoAzG3HDS7nNOLJq%2FsOH1%2B5URY3LsAzQ2qVk2s1iIr9Vev%2Bi3ER7S1PgpJTVPDKsYn34LcsShmsSCufkxYyxddL9%2FO%2BXVv0PI4b%2FQ4bd9Taq7jQFS0a2%2BaFqBPBt%2BQZYbXZOpybiC2DDe9zTfUv3MScAMz0bVZGQwB23WO7rcowoJ%2B3oWFRA20xulQitau%2FF%2Bd%2FDkjxfMvhoe5jJR4cUt87%2Fhg1hByw2IOA%2F3szl8zSXj3EvKKBt5%2FRxh1tpooMmet7S8hvjWxgmgd%2FroBKvG3C6hCoeF1E3QIS7wR%2BhtvXmJW8VW39MhO1m5ukH33APmbHQxF7HJV5rR%2F4pFpoFmAjwseWEJKptFeGAtH9SHhNywiUoPIQzXwaheJ3Wg6SamXpux7WUgC%2FpczIDM7ArVJIIBeen%2BGYYhXfMqi2lFtq1wntoJ9gFU69Rv2CgGN%2Fd4kYkwOLLBlVX0xylqPdrLNj5F09HJcUqdwPVKzo0bQZLGarxGbI2OlY89s5AyVD9wJKFqpfkU8PJxCJddgEThwb6e2M3sM%2FavB6aBFQV4RLgwq8qswAY6pgEyvcKfB6tAQliUORYflq46%2BByixVuu6%2BYDmMbybrYzAYLBKzp6WmQErQgiGHLNogW41cKCWWCGE%2FQEq25GIebZxLXj36JnzvyEQBcvuF9ciMFBRu%2BvLuzFe5VrJtXY%2BAjtLgHw4f4XXzxeXEP8eLXICWCDNGTZK8nlqj6V7K2Z5VjGDjUVILDtiBpz%2F668LrfQJ1qvrqGsD%2FERZGd9A9sqfjD3GFSM&X-Amz-Signature=4d491b8d0648068cfad761e2fa32b2e53b2f557e84425a03b266cb5fd4291f52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRSEPX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC91ZFFz8VXINde4wC%2FRI03gAMcIl9qD42Uxha5TFJTVAiA5PZ9sOvHU79UlUVR1nJKHRexdLr7KavuT9wBRec9GzCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhDHYnfwYeAh18DFQKtwDQezqR%2FO8p3fIrZZkU08xRQEcHjp%2B4Vfh1%2FklhFSMZ%2ByglImo8t2m8Uuk1nr2izWYBVwGNLi4tAJh2LTVoAzG3HDS7nNOLJq%2FsOH1%2B5URY3LsAzQ2qVk2s1iIr9Vev%2Bi3ER7S1PgpJTVPDKsYn34LcsShmsSCufkxYyxddL9%2FO%2BXVv0PI4b%2FQ4bd9Taq7jQFS0a2%2BaFqBPBt%2BQZYbXZOpybiC2DDe9zTfUv3MScAMz0bVZGQwB23WO7rcowoJ%2B3oWFRA20xulQitau%2FF%2Bd%2FDkjxfMvhoe5jJR4cUt87%2Fhg1hByw2IOA%2F3szl8zSXj3EvKKBt5%2FRxh1tpooMmet7S8hvjWxgmgd%2FroBKvG3C6hCoeF1E3QIS7wR%2BhtvXmJW8VW39MhO1m5ukH33APmbHQxF7HJV5rR%2F4pFpoFmAjwseWEJKptFeGAtH9SHhNywiUoPIQzXwaheJ3Wg6SamXpux7WUgC%2FpczIDM7ArVJIIBeen%2BGYYhXfMqi2lFtq1wntoJ9gFU69Rv2CgGN%2Fd4kYkwOLLBlVX0xylqPdrLNj5F09HJcUqdwPVKzo0bQZLGarxGbI2OlY89s5AyVD9wJKFqpfkU8PJxCJddgEThwb6e2M3sM%2FavB6aBFQV4RLgwq8qswAY6pgEyvcKfB6tAQliUORYflq46%2BByixVuu6%2BYDmMbybrYzAYLBKzp6WmQErQgiGHLNogW41cKCWWCGE%2FQEq25GIebZxLXj36JnzvyEQBcvuF9ciMFBRu%2BvLuzFe5VrJtXY%2BAjtLgHw4f4XXzxeXEP8eLXICWCDNGTZK8nlqj6V7K2Z5VjGDjUVILDtiBpz%2F668LrfQJ1qvrqGsD%2FERZGd9A9sqfjD3GFSM&X-Amz-Signature=8434df336becfcdb1bad39628caf7c274b6b40eab9be260ffcf7be76fbb74178&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRSEPX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC91ZFFz8VXINde4wC%2FRI03gAMcIl9qD42Uxha5TFJTVAiA5PZ9sOvHU79UlUVR1nJKHRexdLr7KavuT9wBRec9GzCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhDHYnfwYeAh18DFQKtwDQezqR%2FO8p3fIrZZkU08xRQEcHjp%2B4Vfh1%2FklhFSMZ%2ByglImo8t2m8Uuk1nr2izWYBVwGNLi4tAJh2LTVoAzG3HDS7nNOLJq%2FsOH1%2B5URY3LsAzQ2qVk2s1iIr9Vev%2Bi3ER7S1PgpJTVPDKsYn34LcsShmsSCufkxYyxddL9%2FO%2BXVv0PI4b%2FQ4bd9Taq7jQFS0a2%2BaFqBPBt%2BQZYbXZOpybiC2DDe9zTfUv3MScAMz0bVZGQwB23WO7rcowoJ%2B3oWFRA20xulQitau%2FF%2Bd%2FDkjxfMvhoe5jJR4cUt87%2Fhg1hByw2IOA%2F3szl8zSXj3EvKKBt5%2FRxh1tpooMmet7S8hvjWxgmgd%2FroBKvG3C6hCoeF1E3QIS7wR%2BhtvXmJW8VW39MhO1m5ukH33APmbHQxF7HJV5rR%2F4pFpoFmAjwseWEJKptFeGAtH9SHhNywiUoPIQzXwaheJ3Wg6SamXpux7WUgC%2FpczIDM7ArVJIIBeen%2BGYYhXfMqi2lFtq1wntoJ9gFU69Rv2CgGN%2Fd4kYkwOLLBlVX0xylqPdrLNj5F09HJcUqdwPVKzo0bQZLGarxGbI2OlY89s5AyVD9wJKFqpfkU8PJxCJddgEThwb6e2M3sM%2FavB6aBFQV4RLgwq8qswAY6pgEyvcKfB6tAQliUORYflq46%2BByixVuu6%2BYDmMbybrYzAYLBKzp6WmQErQgiGHLNogW41cKCWWCGE%2FQEq25GIebZxLXj36JnzvyEQBcvuF9ciMFBRu%2BvLuzFe5VrJtXY%2BAjtLgHw4f4XXzxeXEP8eLXICWCDNGTZK8nlqj6V7K2Z5VjGDjUVILDtiBpz%2F668LrfQJ1qvrqGsD%2FERZGd9A9sqfjD3GFSM&X-Amz-Signature=4c8574378d412c1d0f54bda0c50c163e6018f62073d0df96809ab46516caf9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRSEPX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC91ZFFz8VXINde4wC%2FRI03gAMcIl9qD42Uxha5TFJTVAiA5PZ9sOvHU79UlUVR1nJKHRexdLr7KavuT9wBRec9GzCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhDHYnfwYeAh18DFQKtwDQezqR%2FO8p3fIrZZkU08xRQEcHjp%2B4Vfh1%2FklhFSMZ%2ByglImo8t2m8Uuk1nr2izWYBVwGNLi4tAJh2LTVoAzG3HDS7nNOLJq%2FsOH1%2B5URY3LsAzQ2qVk2s1iIr9Vev%2Bi3ER7S1PgpJTVPDKsYn34LcsShmsSCufkxYyxddL9%2FO%2BXVv0PI4b%2FQ4bd9Taq7jQFS0a2%2BaFqBPBt%2BQZYbXZOpybiC2DDe9zTfUv3MScAMz0bVZGQwB23WO7rcowoJ%2B3oWFRA20xulQitau%2FF%2Bd%2FDkjxfMvhoe5jJR4cUt87%2Fhg1hByw2IOA%2F3szl8zSXj3EvKKBt5%2FRxh1tpooMmet7S8hvjWxgmgd%2FroBKvG3C6hCoeF1E3QIS7wR%2BhtvXmJW8VW39MhO1m5ukH33APmbHQxF7HJV5rR%2F4pFpoFmAjwseWEJKptFeGAtH9SHhNywiUoPIQzXwaheJ3Wg6SamXpux7WUgC%2FpczIDM7ArVJIIBeen%2BGYYhXfMqi2lFtq1wntoJ9gFU69Rv2CgGN%2Fd4kYkwOLLBlVX0xylqPdrLNj5F09HJcUqdwPVKzo0bQZLGarxGbI2OlY89s5AyVD9wJKFqpfkU8PJxCJddgEThwb6e2M3sM%2FavB6aBFQV4RLgwq8qswAY6pgEyvcKfB6tAQliUORYflq46%2BByixVuu6%2BYDmMbybrYzAYLBKzp6WmQErQgiGHLNogW41cKCWWCGE%2FQEq25GIebZxLXj36JnzvyEQBcvuF9ciMFBRu%2BvLuzFe5VrJtXY%2BAjtLgHw4f4XXzxeXEP8eLXICWCDNGTZK8nlqj6V7K2Z5VjGDjUVILDtiBpz%2F668LrfQJ1qvrqGsD%2FERZGd9A9sqfjD3GFSM&X-Amz-Signature=950555f9867b2664711d9fba2e4079c1f236dac0e45ee0db3eea28aa6bf3f46a&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
