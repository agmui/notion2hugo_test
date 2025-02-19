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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCYSHSB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIElyX0C0y%2BOzWeIU0KXeUa0Q79NVqsrYH8kh8CpiPpqcAiEAu943mJevLwha2PG6TCU4hocTuVeQ%2FLALlL5kkzEDfZcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp4TlIZm1Nkfu2riSrcA3WBV7zOwCMQRe91hPlhulrCMB5Dtww1zxCWfrwT%2F0WdtbYSq2m96wOMko9xCj5D%2BVacueOsIM6quUE9rYJzFa%2FL3uBMA0RAWRM0WW23z1ISBUDPENx9Lo6ytURczohEQD%2BlvO18Vnq%2Fq%2FtMTV5bXUMla491mqxd%2FUYy8ODxlZk2KusKa%2F1yR3dXezbVFkKloaNsjQifRPU958s2K3gG55da9T3x9YhLbXltulMqE9byP4rS7t7VCd0%2FmlGmaAo4YVlZh95z2jnEOl0Xz5gbKnKZMR3B6iYato6ZFA0%2BjObEOebT0oRthlmQ%2FuRqboAP3QOS8VagXiwHEjJd74R7SXow2tbGMkNiRmsPXZPMvkwWHMLJ43h1qz1MTy%2FCkk0aag4z%2FC1PrSItQefuu5HAWT3nHs1gbudNCpgqFekCCPa3m%2FW0N%2FcsXvHrZRYM49RYO1YxLZovZWpffxO9t9EU8gyR0LzCvExzF4jUtn603Fq2EZQvVsa0CPS0TF5X1ZRSmxSpW9dLWJGn97tcJMF1yLDQsuDAHGlzCdJowrIoHL7JpchGQiAeeoQW7pJsXEHlIojQz7T45DWTRKuV2b3brOH6NcXybkFjtPvvbXMIIPnQ0zmKyjfVla0wPobUMMS71r0GOqUBvtJ8X9AkZzfr1qgElS5pV34kJRtr4IuZeFY9LotHahFOkiCHwBuEEIQjNBzrAGpUIdKdWYXgszVaIELnmyKkeaKb%2BSycXhgWWtoahGhJrNSnt5Mf2ptlEuOtHFTZctakJZGVm%2BEkSsx%2Bicdy0ojZ7eVBBmif6vA6JpDrPAaT8Tc55XgxFfGM7pgkt2LcwmVrMoX1TwuPeG1pebp2q%2Ft4eywoXABv&X-Amz-Signature=5c65935c096455668d2c128e91e992f74106cd76010a6a0b26e6be9bbc623dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCYSHSB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIElyX0C0y%2BOzWeIU0KXeUa0Q79NVqsrYH8kh8CpiPpqcAiEAu943mJevLwha2PG6TCU4hocTuVeQ%2FLALlL5kkzEDfZcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp4TlIZm1Nkfu2riSrcA3WBV7zOwCMQRe91hPlhulrCMB5Dtww1zxCWfrwT%2F0WdtbYSq2m96wOMko9xCj5D%2BVacueOsIM6quUE9rYJzFa%2FL3uBMA0RAWRM0WW23z1ISBUDPENx9Lo6ytURczohEQD%2BlvO18Vnq%2Fq%2FtMTV5bXUMla491mqxd%2FUYy8ODxlZk2KusKa%2F1yR3dXezbVFkKloaNsjQifRPU958s2K3gG55da9T3x9YhLbXltulMqE9byP4rS7t7VCd0%2FmlGmaAo4YVlZh95z2jnEOl0Xz5gbKnKZMR3B6iYato6ZFA0%2BjObEOebT0oRthlmQ%2FuRqboAP3QOS8VagXiwHEjJd74R7SXow2tbGMkNiRmsPXZPMvkwWHMLJ43h1qz1MTy%2FCkk0aag4z%2FC1PrSItQefuu5HAWT3nHs1gbudNCpgqFekCCPa3m%2FW0N%2FcsXvHrZRYM49RYO1YxLZovZWpffxO9t9EU8gyR0LzCvExzF4jUtn603Fq2EZQvVsa0CPS0TF5X1ZRSmxSpW9dLWJGn97tcJMF1yLDQsuDAHGlzCdJowrIoHL7JpchGQiAeeoQW7pJsXEHlIojQz7T45DWTRKuV2b3brOH6NcXybkFjtPvvbXMIIPnQ0zmKyjfVla0wPobUMMS71r0GOqUBvtJ8X9AkZzfr1qgElS5pV34kJRtr4IuZeFY9LotHahFOkiCHwBuEEIQjNBzrAGpUIdKdWYXgszVaIELnmyKkeaKb%2BSycXhgWWtoahGhJrNSnt5Mf2ptlEuOtHFTZctakJZGVm%2BEkSsx%2Bicdy0ojZ7eVBBmif6vA6JpDrPAaT8Tc55XgxFfGM7pgkt2LcwmVrMoX1TwuPeG1pebp2q%2Ft4eywoXABv&X-Amz-Signature=b0e2f178845b3932f3786e3e64bb0af6228840e09632e7ef129278b2d5dffca4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCYSHSB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIElyX0C0y%2BOzWeIU0KXeUa0Q79NVqsrYH8kh8CpiPpqcAiEAu943mJevLwha2PG6TCU4hocTuVeQ%2FLALlL5kkzEDfZcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp4TlIZm1Nkfu2riSrcA3WBV7zOwCMQRe91hPlhulrCMB5Dtww1zxCWfrwT%2F0WdtbYSq2m96wOMko9xCj5D%2BVacueOsIM6quUE9rYJzFa%2FL3uBMA0RAWRM0WW23z1ISBUDPENx9Lo6ytURczohEQD%2BlvO18Vnq%2Fq%2FtMTV5bXUMla491mqxd%2FUYy8ODxlZk2KusKa%2F1yR3dXezbVFkKloaNsjQifRPU958s2K3gG55da9T3x9YhLbXltulMqE9byP4rS7t7VCd0%2FmlGmaAo4YVlZh95z2jnEOl0Xz5gbKnKZMR3B6iYato6ZFA0%2BjObEOebT0oRthlmQ%2FuRqboAP3QOS8VagXiwHEjJd74R7SXow2tbGMkNiRmsPXZPMvkwWHMLJ43h1qz1MTy%2FCkk0aag4z%2FC1PrSItQefuu5HAWT3nHs1gbudNCpgqFekCCPa3m%2FW0N%2FcsXvHrZRYM49RYO1YxLZovZWpffxO9t9EU8gyR0LzCvExzF4jUtn603Fq2EZQvVsa0CPS0TF5X1ZRSmxSpW9dLWJGn97tcJMF1yLDQsuDAHGlzCdJowrIoHL7JpchGQiAeeoQW7pJsXEHlIojQz7T45DWTRKuV2b3brOH6NcXybkFjtPvvbXMIIPnQ0zmKyjfVla0wPobUMMS71r0GOqUBvtJ8X9AkZzfr1qgElS5pV34kJRtr4IuZeFY9LotHahFOkiCHwBuEEIQjNBzrAGpUIdKdWYXgszVaIELnmyKkeaKb%2BSycXhgWWtoahGhJrNSnt5Mf2ptlEuOtHFTZctakJZGVm%2BEkSsx%2Bicdy0ojZ7eVBBmif6vA6JpDrPAaT8Tc55XgxFfGM7pgkt2LcwmVrMoX1TwuPeG1pebp2q%2Ft4eywoXABv&X-Amz-Signature=bd3e2d97352b6631356f7ca126146a084a8edde141dc6c71a8efbbeae31f958b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCYSHSB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIElyX0C0y%2BOzWeIU0KXeUa0Q79NVqsrYH8kh8CpiPpqcAiEAu943mJevLwha2PG6TCU4hocTuVeQ%2FLALlL5kkzEDfZcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp4TlIZm1Nkfu2riSrcA3WBV7zOwCMQRe91hPlhulrCMB5Dtww1zxCWfrwT%2F0WdtbYSq2m96wOMko9xCj5D%2BVacueOsIM6quUE9rYJzFa%2FL3uBMA0RAWRM0WW23z1ISBUDPENx9Lo6ytURczohEQD%2BlvO18Vnq%2Fq%2FtMTV5bXUMla491mqxd%2FUYy8ODxlZk2KusKa%2F1yR3dXezbVFkKloaNsjQifRPU958s2K3gG55da9T3x9YhLbXltulMqE9byP4rS7t7VCd0%2FmlGmaAo4YVlZh95z2jnEOl0Xz5gbKnKZMR3B6iYato6ZFA0%2BjObEOebT0oRthlmQ%2FuRqboAP3QOS8VagXiwHEjJd74R7SXow2tbGMkNiRmsPXZPMvkwWHMLJ43h1qz1MTy%2FCkk0aag4z%2FC1PrSItQefuu5HAWT3nHs1gbudNCpgqFekCCPa3m%2FW0N%2FcsXvHrZRYM49RYO1YxLZovZWpffxO9t9EU8gyR0LzCvExzF4jUtn603Fq2EZQvVsa0CPS0TF5X1ZRSmxSpW9dLWJGn97tcJMF1yLDQsuDAHGlzCdJowrIoHL7JpchGQiAeeoQW7pJsXEHlIojQz7T45DWTRKuV2b3brOH6NcXybkFjtPvvbXMIIPnQ0zmKyjfVla0wPobUMMS71r0GOqUBvtJ8X9AkZzfr1qgElS5pV34kJRtr4IuZeFY9LotHahFOkiCHwBuEEIQjNBzrAGpUIdKdWYXgszVaIELnmyKkeaKb%2BSycXhgWWtoahGhJrNSnt5Mf2ptlEuOtHFTZctakJZGVm%2BEkSsx%2Bicdy0ojZ7eVBBmif6vA6JpDrPAaT8Tc55XgxFfGM7pgkt2LcwmVrMoX1TwuPeG1pebp2q%2Ft4eywoXABv&X-Amz-Signature=3bd2c62e417d9fd5144ec4cb7df6a60a2f35ed190eff2190b84b51cb8a5c5e21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCYSHSB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIElyX0C0y%2BOzWeIU0KXeUa0Q79NVqsrYH8kh8CpiPpqcAiEAu943mJevLwha2PG6TCU4hocTuVeQ%2FLALlL5kkzEDfZcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp4TlIZm1Nkfu2riSrcA3WBV7zOwCMQRe91hPlhulrCMB5Dtww1zxCWfrwT%2F0WdtbYSq2m96wOMko9xCj5D%2BVacueOsIM6quUE9rYJzFa%2FL3uBMA0RAWRM0WW23z1ISBUDPENx9Lo6ytURczohEQD%2BlvO18Vnq%2Fq%2FtMTV5bXUMla491mqxd%2FUYy8ODxlZk2KusKa%2F1yR3dXezbVFkKloaNsjQifRPU958s2K3gG55da9T3x9YhLbXltulMqE9byP4rS7t7VCd0%2FmlGmaAo4YVlZh95z2jnEOl0Xz5gbKnKZMR3B6iYato6ZFA0%2BjObEOebT0oRthlmQ%2FuRqboAP3QOS8VagXiwHEjJd74R7SXow2tbGMkNiRmsPXZPMvkwWHMLJ43h1qz1MTy%2FCkk0aag4z%2FC1PrSItQefuu5HAWT3nHs1gbudNCpgqFekCCPa3m%2FW0N%2FcsXvHrZRYM49RYO1YxLZovZWpffxO9t9EU8gyR0LzCvExzF4jUtn603Fq2EZQvVsa0CPS0TF5X1ZRSmxSpW9dLWJGn97tcJMF1yLDQsuDAHGlzCdJowrIoHL7JpchGQiAeeoQW7pJsXEHlIojQz7T45DWTRKuV2b3brOH6NcXybkFjtPvvbXMIIPnQ0zmKyjfVla0wPobUMMS71r0GOqUBvtJ8X9AkZzfr1qgElS5pV34kJRtr4IuZeFY9LotHahFOkiCHwBuEEIQjNBzrAGpUIdKdWYXgszVaIELnmyKkeaKb%2BSycXhgWWtoahGhJrNSnt5Mf2ptlEuOtHFTZctakJZGVm%2BEkSsx%2Bicdy0ojZ7eVBBmif6vA6JpDrPAaT8Tc55XgxFfGM7pgkt2LcwmVrMoX1TwuPeG1pebp2q%2Ft4eywoXABv&X-Amz-Signature=0a02d0b8046149c8904274586b02a493e0babc80f628080612bffd37ff0872c7&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
