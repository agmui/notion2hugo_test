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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MVZ5RN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2Bs1VlqUmwuUoZ%2ByldbHo%2F8rcgzDr95dhQn%2Fw0OhXXNAiBAoHeL%2FQlOCITFKiSXO%2FNhIBbb7FwAUmw%2FrFhNq2HaRir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLKCAKWXvCyhAPv2CKtwDtdXWgxozfHT3EDflt0Q6dchW7lmoYtJ%2B0MIHaSLYoKgJhOvMGaGQHk%2FdjXuYQVK05f1aBj20vfrRdrb1K5jH3aG0Ef3zzx2iT9QEoEVJfiKuziRpbAR9J1j8A%2F1D1DEobqxo0GXBmXyD0cZRTQ951O5%2Bt1M6YO%2BVf%2BT4CTyqPXxTcuborUNaKenqLeWdL%2BEUny5maZFkeIjL7CpjD6fiV6kLWVbby85pj9NorFL4FSMHmKaXbv0bCNKgDKveoEtz8VPIyYGHGdOsoLcS3BeT1OOFVJHhKTV5lS4MjyaB7l2EM4iLe%2BghFXc%2F3TlHkQud2CelA%2BxpECNTlFIWbB1VdNzUER5qXFIWkn%2BVDANFamfTVzeCkL36EssUDT7HAgloRZpb%2FepXj%2FAGzsvBghIjo%2FGf15Ho4T01swf1pUsebaXcsGrSf6R9FQu28mlgrDyZWz6k%2Bi8wr%2FH21V1mn38WSFsUyV9N1FnpUEtSbP%2BPhpy%2Fd9%2B4oA%2BOBRFOF%2FkA8wMHct1xIfkc%2F5pfDXA3LffCbcTJq8N8z5AaWK0aZJchJ9K311q%2B%2BoVtQwG4bR%2Bl5%2FBgnUxUlRyIyc1EEje0aeAl64NurK4nGblbFBa6jK42M6euSvcD9o5sy%2FmevrwwrIS8wgY6pgFB%2BlhQh%2BULq%2FLdabseTXNILov0vJH0POQ2uhVaTl%2FkW5ItAdOvVUkLWIVCzg7bo93J9UXFZwGfX5XfaaAQf8b59xFiCLYURZyGZyxzeWQL4oO08CLtwWUzgT66%2BwP4H9JxkyaZ9GcgTbbdS%2F803z%2FdgAuzbSP%2B7ATTy6P60TIBNit7doguavQkYr6p%2BJ9TUOU7PAkDu78KB4B3OUxFHHETC3My1klL&X-Amz-Signature=834ac6bfef21506354f82c601b0ac6e15cb0b2f401e00ea54dcbf5e0fb9bb413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MVZ5RN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2Bs1VlqUmwuUoZ%2ByldbHo%2F8rcgzDr95dhQn%2Fw0OhXXNAiBAoHeL%2FQlOCITFKiSXO%2FNhIBbb7FwAUmw%2FrFhNq2HaRir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLKCAKWXvCyhAPv2CKtwDtdXWgxozfHT3EDflt0Q6dchW7lmoYtJ%2B0MIHaSLYoKgJhOvMGaGQHk%2FdjXuYQVK05f1aBj20vfrRdrb1K5jH3aG0Ef3zzx2iT9QEoEVJfiKuziRpbAR9J1j8A%2F1D1DEobqxo0GXBmXyD0cZRTQ951O5%2Bt1M6YO%2BVf%2BT4CTyqPXxTcuborUNaKenqLeWdL%2BEUny5maZFkeIjL7CpjD6fiV6kLWVbby85pj9NorFL4FSMHmKaXbv0bCNKgDKveoEtz8VPIyYGHGdOsoLcS3BeT1OOFVJHhKTV5lS4MjyaB7l2EM4iLe%2BghFXc%2F3TlHkQud2CelA%2BxpECNTlFIWbB1VdNzUER5qXFIWkn%2BVDANFamfTVzeCkL36EssUDT7HAgloRZpb%2FepXj%2FAGzsvBghIjo%2FGf15Ho4T01swf1pUsebaXcsGrSf6R9FQu28mlgrDyZWz6k%2Bi8wr%2FH21V1mn38WSFsUyV9N1FnpUEtSbP%2BPhpy%2Fd9%2B4oA%2BOBRFOF%2FkA8wMHct1xIfkc%2F5pfDXA3LffCbcTJq8N8z5AaWK0aZJchJ9K311q%2B%2BoVtQwG4bR%2Bl5%2FBgnUxUlRyIyc1EEje0aeAl64NurK4nGblbFBa6jK42M6euSvcD9o5sy%2FmevrwwrIS8wgY6pgFB%2BlhQh%2BULq%2FLdabseTXNILov0vJH0POQ2uhVaTl%2FkW5ItAdOvVUkLWIVCzg7bo93J9UXFZwGfX5XfaaAQf8b59xFiCLYURZyGZyxzeWQL4oO08CLtwWUzgT66%2BwP4H9JxkyaZ9GcgTbbdS%2F803z%2FdgAuzbSP%2B7ATTy6P60TIBNit7doguavQkYr6p%2BJ9TUOU7PAkDu78KB4B3OUxFHHETC3My1klL&X-Amz-Signature=02560a949012079d0f9711a2599913466622e33dadcc9231e08e3045bc4448fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MVZ5RN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2Bs1VlqUmwuUoZ%2ByldbHo%2F8rcgzDr95dhQn%2Fw0OhXXNAiBAoHeL%2FQlOCITFKiSXO%2FNhIBbb7FwAUmw%2FrFhNq2HaRir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLKCAKWXvCyhAPv2CKtwDtdXWgxozfHT3EDflt0Q6dchW7lmoYtJ%2B0MIHaSLYoKgJhOvMGaGQHk%2FdjXuYQVK05f1aBj20vfrRdrb1K5jH3aG0Ef3zzx2iT9QEoEVJfiKuziRpbAR9J1j8A%2F1D1DEobqxo0GXBmXyD0cZRTQ951O5%2Bt1M6YO%2BVf%2BT4CTyqPXxTcuborUNaKenqLeWdL%2BEUny5maZFkeIjL7CpjD6fiV6kLWVbby85pj9NorFL4FSMHmKaXbv0bCNKgDKveoEtz8VPIyYGHGdOsoLcS3BeT1OOFVJHhKTV5lS4MjyaB7l2EM4iLe%2BghFXc%2F3TlHkQud2CelA%2BxpECNTlFIWbB1VdNzUER5qXFIWkn%2BVDANFamfTVzeCkL36EssUDT7HAgloRZpb%2FepXj%2FAGzsvBghIjo%2FGf15Ho4T01swf1pUsebaXcsGrSf6R9FQu28mlgrDyZWz6k%2Bi8wr%2FH21V1mn38WSFsUyV9N1FnpUEtSbP%2BPhpy%2Fd9%2B4oA%2BOBRFOF%2FkA8wMHct1xIfkc%2F5pfDXA3LffCbcTJq8N8z5AaWK0aZJchJ9K311q%2B%2BoVtQwG4bR%2Bl5%2FBgnUxUlRyIyc1EEje0aeAl64NurK4nGblbFBa6jK42M6euSvcD9o5sy%2FmevrwwrIS8wgY6pgFB%2BlhQh%2BULq%2FLdabseTXNILov0vJH0POQ2uhVaTl%2FkW5ItAdOvVUkLWIVCzg7bo93J9UXFZwGfX5XfaaAQf8b59xFiCLYURZyGZyxzeWQL4oO08CLtwWUzgT66%2BwP4H9JxkyaZ9GcgTbbdS%2F803z%2FdgAuzbSP%2B7ATTy6P60TIBNit7doguavQkYr6p%2BJ9TUOU7PAkDu78KB4B3OUxFHHETC3My1klL&X-Amz-Signature=f859c04e7cea41aadc8cf5f3f873dab8c0102b0b5745def150781ec093102829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MVZ5RN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2Bs1VlqUmwuUoZ%2ByldbHo%2F8rcgzDr95dhQn%2Fw0OhXXNAiBAoHeL%2FQlOCITFKiSXO%2FNhIBbb7FwAUmw%2FrFhNq2HaRir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLKCAKWXvCyhAPv2CKtwDtdXWgxozfHT3EDflt0Q6dchW7lmoYtJ%2B0MIHaSLYoKgJhOvMGaGQHk%2FdjXuYQVK05f1aBj20vfrRdrb1K5jH3aG0Ef3zzx2iT9QEoEVJfiKuziRpbAR9J1j8A%2F1D1DEobqxo0GXBmXyD0cZRTQ951O5%2Bt1M6YO%2BVf%2BT4CTyqPXxTcuborUNaKenqLeWdL%2BEUny5maZFkeIjL7CpjD6fiV6kLWVbby85pj9NorFL4FSMHmKaXbv0bCNKgDKveoEtz8VPIyYGHGdOsoLcS3BeT1OOFVJHhKTV5lS4MjyaB7l2EM4iLe%2BghFXc%2F3TlHkQud2CelA%2BxpECNTlFIWbB1VdNzUER5qXFIWkn%2BVDANFamfTVzeCkL36EssUDT7HAgloRZpb%2FepXj%2FAGzsvBghIjo%2FGf15Ho4T01swf1pUsebaXcsGrSf6R9FQu28mlgrDyZWz6k%2Bi8wr%2FH21V1mn38WSFsUyV9N1FnpUEtSbP%2BPhpy%2Fd9%2B4oA%2BOBRFOF%2FkA8wMHct1xIfkc%2F5pfDXA3LffCbcTJq8N8z5AaWK0aZJchJ9K311q%2B%2BoVtQwG4bR%2Bl5%2FBgnUxUlRyIyc1EEje0aeAl64NurK4nGblbFBa6jK42M6euSvcD9o5sy%2FmevrwwrIS8wgY6pgFB%2BlhQh%2BULq%2FLdabseTXNILov0vJH0POQ2uhVaTl%2FkW5ItAdOvVUkLWIVCzg7bo93J9UXFZwGfX5XfaaAQf8b59xFiCLYURZyGZyxzeWQL4oO08CLtwWUzgT66%2BwP4H9JxkyaZ9GcgTbbdS%2F803z%2FdgAuzbSP%2B7ATTy6P60TIBNit7doguavQkYr6p%2BJ9TUOU7PAkDu78KB4B3OUxFHHETC3My1klL&X-Amz-Signature=451e2529b51fb3bbaeaf464a34902561a3767abeb8744b9cc2e6c998bfdb8873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MVZ5RN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2Bs1VlqUmwuUoZ%2ByldbHo%2F8rcgzDr95dhQn%2Fw0OhXXNAiBAoHeL%2FQlOCITFKiSXO%2FNhIBbb7FwAUmw%2FrFhNq2HaRir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLKCAKWXvCyhAPv2CKtwDtdXWgxozfHT3EDflt0Q6dchW7lmoYtJ%2B0MIHaSLYoKgJhOvMGaGQHk%2FdjXuYQVK05f1aBj20vfrRdrb1K5jH3aG0Ef3zzx2iT9QEoEVJfiKuziRpbAR9J1j8A%2F1D1DEobqxo0GXBmXyD0cZRTQ951O5%2Bt1M6YO%2BVf%2BT4CTyqPXxTcuborUNaKenqLeWdL%2BEUny5maZFkeIjL7CpjD6fiV6kLWVbby85pj9NorFL4FSMHmKaXbv0bCNKgDKveoEtz8VPIyYGHGdOsoLcS3BeT1OOFVJHhKTV5lS4MjyaB7l2EM4iLe%2BghFXc%2F3TlHkQud2CelA%2BxpECNTlFIWbB1VdNzUER5qXFIWkn%2BVDANFamfTVzeCkL36EssUDT7HAgloRZpb%2FepXj%2FAGzsvBghIjo%2FGf15Ho4T01swf1pUsebaXcsGrSf6R9FQu28mlgrDyZWz6k%2Bi8wr%2FH21V1mn38WSFsUyV9N1FnpUEtSbP%2BPhpy%2Fd9%2B4oA%2BOBRFOF%2FkA8wMHct1xIfkc%2F5pfDXA3LffCbcTJq8N8z5AaWK0aZJchJ9K311q%2B%2BoVtQwG4bR%2Bl5%2FBgnUxUlRyIyc1EEje0aeAl64NurK4nGblbFBa6jK42M6euSvcD9o5sy%2FmevrwwrIS8wgY6pgFB%2BlhQh%2BULq%2FLdabseTXNILov0vJH0POQ2uhVaTl%2FkW5ItAdOvVUkLWIVCzg7bo93J9UXFZwGfX5XfaaAQf8b59xFiCLYURZyGZyxzeWQL4oO08CLtwWUzgT66%2BwP4H9JxkyaZ9GcgTbbdS%2F803z%2FdgAuzbSP%2B7ATTy6P60TIBNit7doguavQkYr6p%2BJ9TUOU7PAkDu78KB4B3OUxFHHETC3My1klL&X-Amz-Signature=779963ee773faf3ffa3e545ef53da5a3f9f2cacdb34f740f879bbf78e9a15df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
