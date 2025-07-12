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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYUL7TW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgQbspMi5IyVKDNOfpSkWeIOuFeouDMfc90lLYBEWkQIgVyENcBG6ch8f4WOaZ5rA2%2FMmhUpVP2RmpXGbS%2BWGw2YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgEKmZg%2BodfhwbdiyrcA3MxZtU1I9g9Ql%2BbZwvUDbJBx3YvRD9OWRnNFWiX6%2BovzmH5L5jSl07HI%2FYv2L6fWKQXeDkX2gDPP57fe9SwawK4jH%2FtNCsd%2FG5XgSZR5FGnTUk4DnbHetsWZcdEKr1NE4SbGe5tFhGwHP1ETUj3ORUQsVjFV1HgOodb1ycnASMveiByWEO%2FgDO9jZBdnUAJ7isOxFIiaBy5re548mGsQLznBaD8V7Z61TlvcwwvfkTbSKo3lS0g92Vu2h2qisp1LUowGuX3w7PZdEN%2FzbAW%2FbSX5qkjv9ltP%2FRDDn94io9%2BaTEP7i%2FVRT7rAbBbL0v%2F0dAdfKhbsscPB4R7bqcqyBp3A9KjtC5twQ8gwKs4nHGo8Fxb31bLsZzuH4ud19AeLhZIhURGfXRG8jgcI1Sz%2BWEf0HdM3sSgoBDiI0drMklj8DE5stGqj8zE4ehrHGo2CauQhhoqgYkXy3sgAT8wYwHLC5J3hMCMgLqRR0JztmV0g9rombLMDYUsZK%2FGAjVbIlB7Jwa8v36g7SxEh6AaRrwp7lw3Vg%2BGvv08HoflnJ8Jj%2FFBoxHgPIEdyld2i2dF%2Fo66Q5Cg%2FdnbSftcm24R8RmMRbUy%2FK%2FTCuUnC7mwwVQ%2FOCTkoFJeoCiTuJXKMIf9yMMGOqUBXmdRamkgeKiMh1mfQpeuK9ADW3IuFo%2FWAOKkP3%2FDJQUUQ1ZHNfzZ%2BlFjEvJQx7yZDm8izX1YvudOoeX7S3Zek20FzSkmPpxlZqw0y5XGzVL2Kz0h0SRv5lAQPss3yYfFtBWwLfonM0b9U3%2F6r9xAk9214B5pVSNR7ylwF6eOJ1506enDwDjEkJyIk1fg0t3XH11%2BbkwtuKhJXC1muEmrCclOhGpD&X-Amz-Signature=d4ee9bdc0580ef7434a0affa600dd4fd1446a613d31ed4c688105c6dfe32e700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYUL7TW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgQbspMi5IyVKDNOfpSkWeIOuFeouDMfc90lLYBEWkQIgVyENcBG6ch8f4WOaZ5rA2%2FMmhUpVP2RmpXGbS%2BWGw2YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgEKmZg%2BodfhwbdiyrcA3MxZtU1I9g9Ql%2BbZwvUDbJBx3YvRD9OWRnNFWiX6%2BovzmH5L5jSl07HI%2FYv2L6fWKQXeDkX2gDPP57fe9SwawK4jH%2FtNCsd%2FG5XgSZR5FGnTUk4DnbHetsWZcdEKr1NE4SbGe5tFhGwHP1ETUj3ORUQsVjFV1HgOodb1ycnASMveiByWEO%2FgDO9jZBdnUAJ7isOxFIiaBy5re548mGsQLznBaD8V7Z61TlvcwwvfkTbSKo3lS0g92Vu2h2qisp1LUowGuX3w7PZdEN%2FzbAW%2FbSX5qkjv9ltP%2FRDDn94io9%2BaTEP7i%2FVRT7rAbBbL0v%2F0dAdfKhbsscPB4R7bqcqyBp3A9KjtC5twQ8gwKs4nHGo8Fxb31bLsZzuH4ud19AeLhZIhURGfXRG8jgcI1Sz%2BWEf0HdM3sSgoBDiI0drMklj8DE5stGqj8zE4ehrHGo2CauQhhoqgYkXy3sgAT8wYwHLC5J3hMCMgLqRR0JztmV0g9rombLMDYUsZK%2FGAjVbIlB7Jwa8v36g7SxEh6AaRrwp7lw3Vg%2BGvv08HoflnJ8Jj%2FFBoxHgPIEdyld2i2dF%2Fo66Q5Cg%2FdnbSftcm24R8RmMRbUy%2FK%2FTCuUnC7mwwVQ%2FOCTkoFJeoCiTuJXKMIf9yMMGOqUBXmdRamkgeKiMh1mfQpeuK9ADW3IuFo%2FWAOKkP3%2FDJQUUQ1ZHNfzZ%2BlFjEvJQx7yZDm8izX1YvudOoeX7S3Zek20FzSkmPpxlZqw0y5XGzVL2Kz0h0SRv5lAQPss3yYfFtBWwLfonM0b9U3%2F6r9xAk9214B5pVSNR7ylwF6eOJ1506enDwDjEkJyIk1fg0t3XH11%2BbkwtuKhJXC1muEmrCclOhGpD&X-Amz-Signature=af18e7b045915871a31a9969fa05550b9eacfef505dbf84f8bfe3d4e8eb5f17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYUL7TW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgQbspMi5IyVKDNOfpSkWeIOuFeouDMfc90lLYBEWkQIgVyENcBG6ch8f4WOaZ5rA2%2FMmhUpVP2RmpXGbS%2BWGw2YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgEKmZg%2BodfhwbdiyrcA3MxZtU1I9g9Ql%2BbZwvUDbJBx3YvRD9OWRnNFWiX6%2BovzmH5L5jSl07HI%2FYv2L6fWKQXeDkX2gDPP57fe9SwawK4jH%2FtNCsd%2FG5XgSZR5FGnTUk4DnbHetsWZcdEKr1NE4SbGe5tFhGwHP1ETUj3ORUQsVjFV1HgOodb1ycnASMveiByWEO%2FgDO9jZBdnUAJ7isOxFIiaBy5re548mGsQLznBaD8V7Z61TlvcwwvfkTbSKo3lS0g92Vu2h2qisp1LUowGuX3w7PZdEN%2FzbAW%2FbSX5qkjv9ltP%2FRDDn94io9%2BaTEP7i%2FVRT7rAbBbL0v%2F0dAdfKhbsscPB4R7bqcqyBp3A9KjtC5twQ8gwKs4nHGo8Fxb31bLsZzuH4ud19AeLhZIhURGfXRG8jgcI1Sz%2BWEf0HdM3sSgoBDiI0drMklj8DE5stGqj8zE4ehrHGo2CauQhhoqgYkXy3sgAT8wYwHLC5J3hMCMgLqRR0JztmV0g9rombLMDYUsZK%2FGAjVbIlB7Jwa8v36g7SxEh6AaRrwp7lw3Vg%2BGvv08HoflnJ8Jj%2FFBoxHgPIEdyld2i2dF%2Fo66Q5Cg%2FdnbSftcm24R8RmMRbUy%2FK%2FTCuUnC7mwwVQ%2FOCTkoFJeoCiTuJXKMIf9yMMGOqUBXmdRamkgeKiMh1mfQpeuK9ADW3IuFo%2FWAOKkP3%2FDJQUUQ1ZHNfzZ%2BlFjEvJQx7yZDm8izX1YvudOoeX7S3Zek20FzSkmPpxlZqw0y5XGzVL2Kz0h0SRv5lAQPss3yYfFtBWwLfonM0b9U3%2F6r9xAk9214B5pVSNR7ylwF6eOJ1506enDwDjEkJyIk1fg0t3XH11%2BbkwtuKhJXC1muEmrCclOhGpD&X-Amz-Signature=4a8d835ab967fbb83d0f5b93763e888da8dd2d1273c4f53f46145cb98bf7fff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYUL7TW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgQbspMi5IyVKDNOfpSkWeIOuFeouDMfc90lLYBEWkQIgVyENcBG6ch8f4WOaZ5rA2%2FMmhUpVP2RmpXGbS%2BWGw2YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgEKmZg%2BodfhwbdiyrcA3MxZtU1I9g9Ql%2BbZwvUDbJBx3YvRD9OWRnNFWiX6%2BovzmH5L5jSl07HI%2FYv2L6fWKQXeDkX2gDPP57fe9SwawK4jH%2FtNCsd%2FG5XgSZR5FGnTUk4DnbHetsWZcdEKr1NE4SbGe5tFhGwHP1ETUj3ORUQsVjFV1HgOodb1ycnASMveiByWEO%2FgDO9jZBdnUAJ7isOxFIiaBy5re548mGsQLznBaD8V7Z61TlvcwwvfkTbSKo3lS0g92Vu2h2qisp1LUowGuX3w7PZdEN%2FzbAW%2FbSX5qkjv9ltP%2FRDDn94io9%2BaTEP7i%2FVRT7rAbBbL0v%2F0dAdfKhbsscPB4R7bqcqyBp3A9KjtC5twQ8gwKs4nHGo8Fxb31bLsZzuH4ud19AeLhZIhURGfXRG8jgcI1Sz%2BWEf0HdM3sSgoBDiI0drMklj8DE5stGqj8zE4ehrHGo2CauQhhoqgYkXy3sgAT8wYwHLC5J3hMCMgLqRR0JztmV0g9rombLMDYUsZK%2FGAjVbIlB7Jwa8v36g7SxEh6AaRrwp7lw3Vg%2BGvv08HoflnJ8Jj%2FFBoxHgPIEdyld2i2dF%2Fo66Q5Cg%2FdnbSftcm24R8RmMRbUy%2FK%2FTCuUnC7mwwVQ%2FOCTkoFJeoCiTuJXKMIf9yMMGOqUBXmdRamkgeKiMh1mfQpeuK9ADW3IuFo%2FWAOKkP3%2FDJQUUQ1ZHNfzZ%2BlFjEvJQx7yZDm8izX1YvudOoeX7S3Zek20FzSkmPpxlZqw0y5XGzVL2Kz0h0SRv5lAQPss3yYfFtBWwLfonM0b9U3%2F6r9xAk9214B5pVSNR7ylwF6eOJ1506enDwDjEkJyIk1fg0t3XH11%2BbkwtuKhJXC1muEmrCclOhGpD&X-Amz-Signature=2024f737abd9c8e4cfde1943be8c02d81e00127b67693201a4bb269cc1188512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYUL7TW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLgQbspMi5IyVKDNOfpSkWeIOuFeouDMfc90lLYBEWkQIgVyENcBG6ch8f4WOaZ5rA2%2FMmhUpVP2RmpXGbS%2BWGw2YqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgEKmZg%2BodfhwbdiyrcA3MxZtU1I9g9Ql%2BbZwvUDbJBx3YvRD9OWRnNFWiX6%2BovzmH5L5jSl07HI%2FYv2L6fWKQXeDkX2gDPP57fe9SwawK4jH%2FtNCsd%2FG5XgSZR5FGnTUk4DnbHetsWZcdEKr1NE4SbGe5tFhGwHP1ETUj3ORUQsVjFV1HgOodb1ycnASMveiByWEO%2FgDO9jZBdnUAJ7isOxFIiaBy5re548mGsQLznBaD8V7Z61TlvcwwvfkTbSKo3lS0g92Vu2h2qisp1LUowGuX3w7PZdEN%2FzbAW%2FbSX5qkjv9ltP%2FRDDn94io9%2BaTEP7i%2FVRT7rAbBbL0v%2F0dAdfKhbsscPB4R7bqcqyBp3A9KjtC5twQ8gwKs4nHGo8Fxb31bLsZzuH4ud19AeLhZIhURGfXRG8jgcI1Sz%2BWEf0HdM3sSgoBDiI0drMklj8DE5stGqj8zE4ehrHGo2CauQhhoqgYkXy3sgAT8wYwHLC5J3hMCMgLqRR0JztmV0g9rombLMDYUsZK%2FGAjVbIlB7Jwa8v36g7SxEh6AaRrwp7lw3Vg%2BGvv08HoflnJ8Jj%2FFBoxHgPIEdyld2i2dF%2Fo66Q5Cg%2FdnbSftcm24R8RmMRbUy%2FK%2FTCuUnC7mwwVQ%2FOCTkoFJeoCiTuJXKMIf9yMMGOqUBXmdRamkgeKiMh1mfQpeuK9ADW3IuFo%2FWAOKkP3%2FDJQUUQ1ZHNfzZ%2BlFjEvJQx7yZDm8izX1YvudOoeX7S3Zek20FzSkmPpxlZqw0y5XGzVL2Kz0h0SRv5lAQPss3yYfFtBWwLfonM0b9U3%2F6r9xAk9214B5pVSNR7ylwF6eOJ1506enDwDjEkJyIk1fg0t3XH11%2BbkwtuKhJXC1muEmrCclOhGpD&X-Amz-Signature=2bc2ad346e99e008abc86ac6aa557b678140cdc64a1b14b915a89e3649a60ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
