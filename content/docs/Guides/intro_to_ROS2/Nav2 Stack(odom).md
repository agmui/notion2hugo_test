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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ECINWZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgeYxqj8u62XlpGN42pzaLnJifVDaRsE9JK1no8k1NwIgdFmDYBlV%2FhW9ZPVBTBBbvzXJlXa7YPkaPxHLhwVcvUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhFY%2B%2FeiuzSASMm3CrcA91BUmvVwKPyS0IeLdYZjPgchjpgKhCYDNjqnT6Sb%2B%2F6D%2FyzuIK7Xjh%2FK2uoBYjrOu8gm3DJyRVia1idCH9qDr4SghKWIKfrmWy5oYtSTl%2BMtUD2ArIagglzMgF7baEkpNE0pp2PmXWn2s3XDC5ueHPhiwBdOCQWezHktNGdr%2BUsFb4e91ZyW0PEfupcJfsiLZEvv8nrhLQBmoVRLX6Bjwuk3RMphcbUy9EY5uevzqesAdGFfpWvwGQwMZixVM65aqeMmwzFMx9P7W%2F4J%2BtyMvD8ai%2FxEOsz2RyTNw6tLksJMIYfgBZ0PtJ%2BxMlew8aOoSAiKm1Aki2aPsh6vNRHqpEAP2Moc3ITAN03TlA3tricCSdpuZlKUv%2BmMuAVHAn0rLD8VWZa86Qb3FcqiO93K0phzKS%2FGlG9F6TUzWjAvIpIsCo95TLUvHy7NyudFoTXggPTw7x1zvIlD3alLCidK6WBazGOivsNhmAm7DHG3BLBoI%2BmEoKPmnzXsP2NHz8%2BYB9hJbmPnzmSkwLzcLiHM4RHo%2F9KsejtVegnvRmdVGgeEA9RLs765EBbAOGLZ6BR4BvKt9sRiwfTKUzMnEKYzV8Z9FauAnXVb%2BTD9wcq72EPvaQDqRpGbh2il1YwMKOIq8EGOqUBtiyX2NiiiaMQFXWqmeC%2FwZVT52NcowBppwF8mFcN6V66oceVtflNthtaZA%2FhT2C0PDAcSl6wPx%2Fp%2Bm82NEkkrq8TRMRvgDzbmtpa5qs1klR1rx95M0v7jCqoyy4RFKoFCW9gJdXSHBNWo%2BeXsWDBpT74oGUyj%2Bo8X7qyFOWpKmjcHIe6Dbb0yk9EICdXtG7%2FwwiXwdjHz%2F3c44ewtuH7nneQ04Eh&X-Amz-Signature=75e95594a8048a44b75e1e0cadf7bb93610fdf2bccd8303dc2d4e4bf1a1cd5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ECINWZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgeYxqj8u62XlpGN42pzaLnJifVDaRsE9JK1no8k1NwIgdFmDYBlV%2FhW9ZPVBTBBbvzXJlXa7YPkaPxHLhwVcvUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhFY%2B%2FeiuzSASMm3CrcA91BUmvVwKPyS0IeLdYZjPgchjpgKhCYDNjqnT6Sb%2B%2F6D%2FyzuIK7Xjh%2FK2uoBYjrOu8gm3DJyRVia1idCH9qDr4SghKWIKfrmWy5oYtSTl%2BMtUD2ArIagglzMgF7baEkpNE0pp2PmXWn2s3XDC5ueHPhiwBdOCQWezHktNGdr%2BUsFb4e91ZyW0PEfupcJfsiLZEvv8nrhLQBmoVRLX6Bjwuk3RMphcbUy9EY5uevzqesAdGFfpWvwGQwMZixVM65aqeMmwzFMx9P7W%2F4J%2BtyMvD8ai%2FxEOsz2RyTNw6tLksJMIYfgBZ0PtJ%2BxMlew8aOoSAiKm1Aki2aPsh6vNRHqpEAP2Moc3ITAN03TlA3tricCSdpuZlKUv%2BmMuAVHAn0rLD8VWZa86Qb3FcqiO93K0phzKS%2FGlG9F6TUzWjAvIpIsCo95TLUvHy7NyudFoTXggPTw7x1zvIlD3alLCidK6WBazGOivsNhmAm7DHG3BLBoI%2BmEoKPmnzXsP2NHz8%2BYB9hJbmPnzmSkwLzcLiHM4RHo%2F9KsejtVegnvRmdVGgeEA9RLs765EBbAOGLZ6BR4BvKt9sRiwfTKUzMnEKYzV8Z9FauAnXVb%2BTD9wcq72EPvaQDqRpGbh2il1YwMKOIq8EGOqUBtiyX2NiiiaMQFXWqmeC%2FwZVT52NcowBppwF8mFcN6V66oceVtflNthtaZA%2FhT2C0PDAcSl6wPx%2Fp%2Bm82NEkkrq8TRMRvgDzbmtpa5qs1klR1rx95M0v7jCqoyy4RFKoFCW9gJdXSHBNWo%2BeXsWDBpT74oGUyj%2Bo8X7qyFOWpKmjcHIe6Dbb0yk9EICdXtG7%2FwwiXwdjHz%2F3c44ewtuH7nneQ04Eh&X-Amz-Signature=787e56a6375046af95d7fd4586d1c253374ff038bb8e0941cdf596ac5af4f5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ECINWZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgeYxqj8u62XlpGN42pzaLnJifVDaRsE9JK1no8k1NwIgdFmDYBlV%2FhW9ZPVBTBBbvzXJlXa7YPkaPxHLhwVcvUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhFY%2B%2FeiuzSASMm3CrcA91BUmvVwKPyS0IeLdYZjPgchjpgKhCYDNjqnT6Sb%2B%2F6D%2FyzuIK7Xjh%2FK2uoBYjrOu8gm3DJyRVia1idCH9qDr4SghKWIKfrmWy5oYtSTl%2BMtUD2ArIagglzMgF7baEkpNE0pp2PmXWn2s3XDC5ueHPhiwBdOCQWezHktNGdr%2BUsFb4e91ZyW0PEfupcJfsiLZEvv8nrhLQBmoVRLX6Bjwuk3RMphcbUy9EY5uevzqesAdGFfpWvwGQwMZixVM65aqeMmwzFMx9P7W%2F4J%2BtyMvD8ai%2FxEOsz2RyTNw6tLksJMIYfgBZ0PtJ%2BxMlew8aOoSAiKm1Aki2aPsh6vNRHqpEAP2Moc3ITAN03TlA3tricCSdpuZlKUv%2BmMuAVHAn0rLD8VWZa86Qb3FcqiO93K0phzKS%2FGlG9F6TUzWjAvIpIsCo95TLUvHy7NyudFoTXggPTw7x1zvIlD3alLCidK6WBazGOivsNhmAm7DHG3BLBoI%2BmEoKPmnzXsP2NHz8%2BYB9hJbmPnzmSkwLzcLiHM4RHo%2F9KsejtVegnvRmdVGgeEA9RLs765EBbAOGLZ6BR4BvKt9sRiwfTKUzMnEKYzV8Z9FauAnXVb%2BTD9wcq72EPvaQDqRpGbh2il1YwMKOIq8EGOqUBtiyX2NiiiaMQFXWqmeC%2FwZVT52NcowBppwF8mFcN6V66oceVtflNthtaZA%2FhT2C0PDAcSl6wPx%2Fp%2Bm82NEkkrq8TRMRvgDzbmtpa5qs1klR1rx95M0v7jCqoyy4RFKoFCW9gJdXSHBNWo%2BeXsWDBpT74oGUyj%2Bo8X7qyFOWpKmjcHIe6Dbb0yk9EICdXtG7%2FwwiXwdjHz%2F3c44ewtuH7nneQ04Eh&X-Amz-Signature=40fba7c8740da268d4f1959d3cb29c865e6209255aa1cb5751291650a6f764fd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ECINWZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgeYxqj8u62XlpGN42pzaLnJifVDaRsE9JK1no8k1NwIgdFmDYBlV%2FhW9ZPVBTBBbvzXJlXa7YPkaPxHLhwVcvUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhFY%2B%2FeiuzSASMm3CrcA91BUmvVwKPyS0IeLdYZjPgchjpgKhCYDNjqnT6Sb%2B%2F6D%2FyzuIK7Xjh%2FK2uoBYjrOu8gm3DJyRVia1idCH9qDr4SghKWIKfrmWy5oYtSTl%2BMtUD2ArIagglzMgF7baEkpNE0pp2PmXWn2s3XDC5ueHPhiwBdOCQWezHktNGdr%2BUsFb4e91ZyW0PEfupcJfsiLZEvv8nrhLQBmoVRLX6Bjwuk3RMphcbUy9EY5uevzqesAdGFfpWvwGQwMZixVM65aqeMmwzFMx9P7W%2F4J%2BtyMvD8ai%2FxEOsz2RyTNw6tLksJMIYfgBZ0PtJ%2BxMlew8aOoSAiKm1Aki2aPsh6vNRHqpEAP2Moc3ITAN03TlA3tricCSdpuZlKUv%2BmMuAVHAn0rLD8VWZa86Qb3FcqiO93K0phzKS%2FGlG9F6TUzWjAvIpIsCo95TLUvHy7NyudFoTXggPTw7x1zvIlD3alLCidK6WBazGOivsNhmAm7DHG3BLBoI%2BmEoKPmnzXsP2NHz8%2BYB9hJbmPnzmSkwLzcLiHM4RHo%2F9KsejtVegnvRmdVGgeEA9RLs765EBbAOGLZ6BR4BvKt9sRiwfTKUzMnEKYzV8Z9FauAnXVb%2BTD9wcq72EPvaQDqRpGbh2il1YwMKOIq8EGOqUBtiyX2NiiiaMQFXWqmeC%2FwZVT52NcowBppwF8mFcN6V66oceVtflNthtaZA%2FhT2C0PDAcSl6wPx%2Fp%2Bm82NEkkrq8TRMRvgDzbmtpa5qs1klR1rx95M0v7jCqoyy4RFKoFCW9gJdXSHBNWo%2BeXsWDBpT74oGUyj%2Bo8X7qyFOWpKmjcHIe6Dbb0yk9EICdXtG7%2FwwiXwdjHz%2F3c44ewtuH7nneQ04Eh&X-Amz-Signature=dc93e9fd7dadfb9817528648d30ed42121b87846147fe3ef701ad8a18669da62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ECINWZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbgeYxqj8u62XlpGN42pzaLnJifVDaRsE9JK1no8k1NwIgdFmDYBlV%2FhW9ZPVBTBBbvzXJlXa7YPkaPxHLhwVcvUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhFY%2B%2FeiuzSASMm3CrcA91BUmvVwKPyS0IeLdYZjPgchjpgKhCYDNjqnT6Sb%2B%2F6D%2FyzuIK7Xjh%2FK2uoBYjrOu8gm3DJyRVia1idCH9qDr4SghKWIKfrmWy5oYtSTl%2BMtUD2ArIagglzMgF7baEkpNE0pp2PmXWn2s3XDC5ueHPhiwBdOCQWezHktNGdr%2BUsFb4e91ZyW0PEfupcJfsiLZEvv8nrhLQBmoVRLX6Bjwuk3RMphcbUy9EY5uevzqesAdGFfpWvwGQwMZixVM65aqeMmwzFMx9P7W%2F4J%2BtyMvD8ai%2FxEOsz2RyTNw6tLksJMIYfgBZ0PtJ%2BxMlew8aOoSAiKm1Aki2aPsh6vNRHqpEAP2Moc3ITAN03TlA3tricCSdpuZlKUv%2BmMuAVHAn0rLD8VWZa86Qb3FcqiO93K0phzKS%2FGlG9F6TUzWjAvIpIsCo95TLUvHy7NyudFoTXggPTw7x1zvIlD3alLCidK6WBazGOivsNhmAm7DHG3BLBoI%2BmEoKPmnzXsP2NHz8%2BYB9hJbmPnzmSkwLzcLiHM4RHo%2F9KsejtVegnvRmdVGgeEA9RLs765EBbAOGLZ6BR4BvKt9sRiwfTKUzMnEKYzV8Z9FauAnXVb%2BTD9wcq72EPvaQDqRpGbh2il1YwMKOIq8EGOqUBtiyX2NiiiaMQFXWqmeC%2FwZVT52NcowBppwF8mFcN6V66oceVtflNthtaZA%2FhT2C0PDAcSl6wPx%2Fp%2Bm82NEkkrq8TRMRvgDzbmtpa5qs1klR1rx95M0v7jCqoyy4RFKoFCW9gJdXSHBNWo%2BeXsWDBpT74oGUyj%2Bo8X7qyFOWpKmjcHIe6Dbb0yk9EICdXtG7%2FwwiXwdjHz%2F3c44ewtuH7nneQ04Eh&X-Amz-Signature=af43480f65c05f09591adf6e640cdfa0f24104c0bf9ff00d8c692e41e1beebed&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
