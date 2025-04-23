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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBS37XVR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC1NTL9kVdh2I0kYK0%2F6qTT0MqTehmhba%2BtvdpblJYy3AIhAMuFqIuZP0xEdjLCTnI8wrPxucMiShvGHixO0KPnLKxqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxieGWZ0ggJtaPm8tEq3AOjqWt%2B7UwvxQqP8lY2V5jgbkjPxUm%2BzKYSq7jFQUOQs80ea4wyFbn3U5Yb%2FMc1buBsQXfxqawpAAAL7fWmLquwbwTSeu4sAuDKmOWZj3hudYMPqE0ww6MVxQa1QpuaUAqb%2Fy4AWdVg%2FSl78xWd6KYExFTctVLoXz%2FLUUOW7cJt1ip1gkdd1W1OVtrih0acYWMMSPKVU5I8zbVwjrV8RtDvxnYyZx6Ja4omot5eka5sjSUv0kn%2B6%2FTXcJ8NZ%2FFSzR4vQcH7hpHxKIO6ubtImEA7FNPJ0FiguM1PqPrU3alOwyYBwctpt6%2FRhOxSjMKJcs%2F1S%2FaHHukx%2Bwd7APrnamImN%2Bbr77z5CzWIzUHV7sLUdbEVpOm3tb%2BVcene3p2bCYgHXylbDtcEdGkquDrL1chToVl6Hk%2FQ6CXAD65UkXqNfLlP7zkqsPex%2FCPAEUtDaCBrui9oP4U692uiKOBTQE7UmPAtmKu7%2BU1NaoDKVm04%2BU6dTy5ZqjMBfbA7KPwCR7CsSki5tvVGmbgJ%2FddOGGz7H7JvV%2FbT%2BEL2kWJkvEpwFMPupQMEKRqxCfJ9yX1W509ORPUk599s1SjeThjHZvXcGx0P10fzmPpQf2eWXzaXeS55vHWFiC%2Fek6omaDCnlKLABjqkAWDq2PNxymnFIrw%2FcFXZ8xlVBl9crpq3vRm8xFKXE5xkFG88dMkUj8bkWg6IL2SC3h1HRqHjC5CTIdG%2BcLR8FeWI%2BnHPVAzPaxJp7jCykQLH16vcvPH%2FOUuo4raXx%2BSHcvfJUF9rg4K5h0F3Qvyaz%2BFQQub0448UdTh8GTVau%2F%2FRzIsDbnd6fldPvOS4GBhdd%2F6320GH1MDci%2FlmM5hVGmjV%2FQJs&X-Amz-Signature=679dfa86849aea93b6de61f6bc72abe989ec24ff9130e67c84e538fe4f8e15a8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBS37XVR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC1NTL9kVdh2I0kYK0%2F6qTT0MqTehmhba%2BtvdpblJYy3AIhAMuFqIuZP0xEdjLCTnI8wrPxucMiShvGHixO0KPnLKxqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxieGWZ0ggJtaPm8tEq3AOjqWt%2B7UwvxQqP8lY2V5jgbkjPxUm%2BzKYSq7jFQUOQs80ea4wyFbn3U5Yb%2FMc1buBsQXfxqawpAAAL7fWmLquwbwTSeu4sAuDKmOWZj3hudYMPqE0ww6MVxQa1QpuaUAqb%2Fy4AWdVg%2FSl78xWd6KYExFTctVLoXz%2FLUUOW7cJt1ip1gkdd1W1OVtrih0acYWMMSPKVU5I8zbVwjrV8RtDvxnYyZx6Ja4omot5eka5sjSUv0kn%2B6%2FTXcJ8NZ%2FFSzR4vQcH7hpHxKIO6ubtImEA7FNPJ0FiguM1PqPrU3alOwyYBwctpt6%2FRhOxSjMKJcs%2F1S%2FaHHukx%2Bwd7APrnamImN%2Bbr77z5CzWIzUHV7sLUdbEVpOm3tb%2BVcene3p2bCYgHXylbDtcEdGkquDrL1chToVl6Hk%2FQ6CXAD65UkXqNfLlP7zkqsPex%2FCPAEUtDaCBrui9oP4U692uiKOBTQE7UmPAtmKu7%2BU1NaoDKVm04%2BU6dTy5ZqjMBfbA7KPwCR7CsSki5tvVGmbgJ%2FddOGGz7H7JvV%2FbT%2BEL2kWJkvEpwFMPupQMEKRqxCfJ9yX1W509ORPUk599s1SjeThjHZvXcGx0P10fzmPpQf2eWXzaXeS55vHWFiC%2Fek6omaDCnlKLABjqkAWDq2PNxymnFIrw%2FcFXZ8xlVBl9crpq3vRm8xFKXE5xkFG88dMkUj8bkWg6IL2SC3h1HRqHjC5CTIdG%2BcLR8FeWI%2BnHPVAzPaxJp7jCykQLH16vcvPH%2FOUuo4raXx%2BSHcvfJUF9rg4K5h0F3Qvyaz%2BFQQub0448UdTh8GTVau%2F%2FRzIsDbnd6fldPvOS4GBhdd%2F6320GH1MDci%2FlmM5hVGmjV%2FQJs&X-Amz-Signature=d30d1eafcbc5419e5ed9f343ee3a84deb20b69cf14ce536823b119169cc51bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBS37XVR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC1NTL9kVdh2I0kYK0%2F6qTT0MqTehmhba%2BtvdpblJYy3AIhAMuFqIuZP0xEdjLCTnI8wrPxucMiShvGHixO0KPnLKxqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxieGWZ0ggJtaPm8tEq3AOjqWt%2B7UwvxQqP8lY2V5jgbkjPxUm%2BzKYSq7jFQUOQs80ea4wyFbn3U5Yb%2FMc1buBsQXfxqawpAAAL7fWmLquwbwTSeu4sAuDKmOWZj3hudYMPqE0ww6MVxQa1QpuaUAqb%2Fy4AWdVg%2FSl78xWd6KYExFTctVLoXz%2FLUUOW7cJt1ip1gkdd1W1OVtrih0acYWMMSPKVU5I8zbVwjrV8RtDvxnYyZx6Ja4omot5eka5sjSUv0kn%2B6%2FTXcJ8NZ%2FFSzR4vQcH7hpHxKIO6ubtImEA7FNPJ0FiguM1PqPrU3alOwyYBwctpt6%2FRhOxSjMKJcs%2F1S%2FaHHukx%2Bwd7APrnamImN%2Bbr77z5CzWIzUHV7sLUdbEVpOm3tb%2BVcene3p2bCYgHXylbDtcEdGkquDrL1chToVl6Hk%2FQ6CXAD65UkXqNfLlP7zkqsPex%2FCPAEUtDaCBrui9oP4U692uiKOBTQE7UmPAtmKu7%2BU1NaoDKVm04%2BU6dTy5ZqjMBfbA7KPwCR7CsSki5tvVGmbgJ%2FddOGGz7H7JvV%2FbT%2BEL2kWJkvEpwFMPupQMEKRqxCfJ9yX1W509ORPUk599s1SjeThjHZvXcGx0P10fzmPpQf2eWXzaXeS55vHWFiC%2Fek6omaDCnlKLABjqkAWDq2PNxymnFIrw%2FcFXZ8xlVBl9crpq3vRm8xFKXE5xkFG88dMkUj8bkWg6IL2SC3h1HRqHjC5CTIdG%2BcLR8FeWI%2BnHPVAzPaxJp7jCykQLH16vcvPH%2FOUuo4raXx%2BSHcvfJUF9rg4K5h0F3Qvyaz%2BFQQub0448UdTh8GTVau%2F%2FRzIsDbnd6fldPvOS4GBhdd%2F6320GH1MDci%2FlmM5hVGmjV%2FQJs&X-Amz-Signature=7dccd8ad6928562e8426e4a9533fca71077a18850c9dee959b158f86797b2d35&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBS37XVR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC1NTL9kVdh2I0kYK0%2F6qTT0MqTehmhba%2BtvdpblJYy3AIhAMuFqIuZP0xEdjLCTnI8wrPxucMiShvGHixO0KPnLKxqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxieGWZ0ggJtaPm8tEq3AOjqWt%2B7UwvxQqP8lY2V5jgbkjPxUm%2BzKYSq7jFQUOQs80ea4wyFbn3U5Yb%2FMc1buBsQXfxqawpAAAL7fWmLquwbwTSeu4sAuDKmOWZj3hudYMPqE0ww6MVxQa1QpuaUAqb%2Fy4AWdVg%2FSl78xWd6KYExFTctVLoXz%2FLUUOW7cJt1ip1gkdd1W1OVtrih0acYWMMSPKVU5I8zbVwjrV8RtDvxnYyZx6Ja4omot5eka5sjSUv0kn%2B6%2FTXcJ8NZ%2FFSzR4vQcH7hpHxKIO6ubtImEA7FNPJ0FiguM1PqPrU3alOwyYBwctpt6%2FRhOxSjMKJcs%2F1S%2FaHHukx%2Bwd7APrnamImN%2Bbr77z5CzWIzUHV7sLUdbEVpOm3tb%2BVcene3p2bCYgHXylbDtcEdGkquDrL1chToVl6Hk%2FQ6CXAD65UkXqNfLlP7zkqsPex%2FCPAEUtDaCBrui9oP4U692uiKOBTQE7UmPAtmKu7%2BU1NaoDKVm04%2BU6dTy5ZqjMBfbA7KPwCR7CsSki5tvVGmbgJ%2FddOGGz7H7JvV%2FbT%2BEL2kWJkvEpwFMPupQMEKRqxCfJ9yX1W509ORPUk599s1SjeThjHZvXcGx0P10fzmPpQf2eWXzaXeS55vHWFiC%2Fek6omaDCnlKLABjqkAWDq2PNxymnFIrw%2FcFXZ8xlVBl9crpq3vRm8xFKXE5xkFG88dMkUj8bkWg6IL2SC3h1HRqHjC5CTIdG%2BcLR8FeWI%2BnHPVAzPaxJp7jCykQLH16vcvPH%2FOUuo4raXx%2BSHcvfJUF9rg4K5h0F3Qvyaz%2BFQQub0448UdTh8GTVau%2F%2FRzIsDbnd6fldPvOS4GBhdd%2F6320GH1MDci%2FlmM5hVGmjV%2FQJs&X-Amz-Signature=21bee69604c319783de4b74423a3f7c7665dca583b9c3777ecbd8735111e64b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBS37XVR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC1NTL9kVdh2I0kYK0%2F6qTT0MqTehmhba%2BtvdpblJYy3AIhAMuFqIuZP0xEdjLCTnI8wrPxucMiShvGHixO0KPnLKxqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxieGWZ0ggJtaPm8tEq3AOjqWt%2B7UwvxQqP8lY2V5jgbkjPxUm%2BzKYSq7jFQUOQs80ea4wyFbn3U5Yb%2FMc1buBsQXfxqawpAAAL7fWmLquwbwTSeu4sAuDKmOWZj3hudYMPqE0ww6MVxQa1QpuaUAqb%2Fy4AWdVg%2FSl78xWd6KYExFTctVLoXz%2FLUUOW7cJt1ip1gkdd1W1OVtrih0acYWMMSPKVU5I8zbVwjrV8RtDvxnYyZx6Ja4omot5eka5sjSUv0kn%2B6%2FTXcJ8NZ%2FFSzR4vQcH7hpHxKIO6ubtImEA7FNPJ0FiguM1PqPrU3alOwyYBwctpt6%2FRhOxSjMKJcs%2F1S%2FaHHukx%2Bwd7APrnamImN%2Bbr77z5CzWIzUHV7sLUdbEVpOm3tb%2BVcene3p2bCYgHXylbDtcEdGkquDrL1chToVl6Hk%2FQ6CXAD65UkXqNfLlP7zkqsPex%2FCPAEUtDaCBrui9oP4U692uiKOBTQE7UmPAtmKu7%2BU1NaoDKVm04%2BU6dTy5ZqjMBfbA7KPwCR7CsSki5tvVGmbgJ%2FddOGGz7H7JvV%2FbT%2BEL2kWJkvEpwFMPupQMEKRqxCfJ9yX1W509ORPUk599s1SjeThjHZvXcGx0P10fzmPpQf2eWXzaXeS55vHWFiC%2Fek6omaDCnlKLABjqkAWDq2PNxymnFIrw%2FcFXZ8xlVBl9crpq3vRm8xFKXE5xkFG88dMkUj8bkWg6IL2SC3h1HRqHjC5CTIdG%2BcLR8FeWI%2BnHPVAzPaxJp7jCykQLH16vcvPH%2FOUuo4raXx%2BSHcvfJUF9rg4K5h0F3Qvyaz%2BFQQub0448UdTh8GTVau%2F%2FRzIsDbnd6fldPvOS4GBhdd%2F6320GH1MDci%2FlmM5hVGmjV%2FQJs&X-Amz-Signature=92a2aa15e6d4d662422a2416b5de8a0e59e4a57f16293a99eb31fad9b0ff269a&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
