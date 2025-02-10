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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CTHGQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9a6%2B5qGzgi789PsvEj7OKfSqn2GH%2FPZApl7IvB3W0LAIhAJZ8KPI7s6xvU2I54KWZHYfx8xvwejePgr1vkQfrZw0cKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl9BduLLXnQ3ACnr0q3ANP6nWFHfYlzFa5VQ3Cxn7OuluV1%2Fajbg4lMAZ9xkSxNz9avSNRJxjpXwV7IN%2BMWqhw7KmB00W5gfYSMyofvQryJTk8%2BbGQQPPi2on6p%2Bf29lc9V92DM5gc42qtuDxMw7k4EWL4wnn8INGcJsQMQhkALt9YX4toNXjET%2BU72b3BpkEAXM4w%2FnCYrrRfK8S45lZcRj4GbluIiNKaOlRSg5zPZeZfqm8glsG5%2BM%2Fp5IW4qzHrv1X926DgBIXGcHrY0iGC2gh%2F%2BdANpSs0SfzQHPq305t%2BRyspWKHE3SnQoapNQI5zB%2BDCn%2F1tlpY3oqVMb%2BijIJzi%2BNKRjfB5bDVPEPY0BcZE4IFnSrq7%2Bd4vEW5Z%2B133MPzKsUlUy1kPLgjxWb3%2FrqmnPl4BztOguR4Q8Bs%2FowGD6pa6FFtL5ND2E9ufHQRfpVOsTVBJ8oK1F55wJs4jUtdzJyP%2FiQOoS8NW8f02wMdOqwsJt8P4BSC2wV7tHY3saXmyQ9bpd0VelP%2BNIR2w1hjZaFnk%2F7PT5GJrBw91wDRsFyMsjRuJOhDHd7oc%2B4OBnxYLcQuTD2AOLChpB0Sz4ZXhClY7WmT46f6W2uWboviJwZ3o4a6tKEy2sSZ4ouv8N%2FmbJocr9aI3aTCVs6m9BjqkAWGrGiQk%2BBgrxg5GXWAOlE%2FJOkurNUjuJuQTas81%2FzNU6AKFqOTb7WAe%2BZc5TZOi1%2FBmxP622ouWeeGQCdyR%2FWgLDqPG7zOdZfGIwREKMr%2Fu0Nz34ZN0W%2F0fQ4vjLloMF185F%2F0kpx83rM%2Bi4DaRV1o1t8LLRLQrPMt%2B%2F5ndsE7naweRrOmdEfSNFJNslTw8NTMmKUPB%2FYjyr%2B1xBuqbDfWPNJl%2B&X-Amz-Signature=86572586c8173c12ed7119ae5dfe4953569ddbd69290cef444a9819156c7f9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CTHGQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9a6%2B5qGzgi789PsvEj7OKfSqn2GH%2FPZApl7IvB3W0LAIhAJZ8KPI7s6xvU2I54KWZHYfx8xvwejePgr1vkQfrZw0cKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl9BduLLXnQ3ACnr0q3ANP6nWFHfYlzFa5VQ3Cxn7OuluV1%2Fajbg4lMAZ9xkSxNz9avSNRJxjpXwV7IN%2BMWqhw7KmB00W5gfYSMyofvQryJTk8%2BbGQQPPi2on6p%2Bf29lc9V92DM5gc42qtuDxMw7k4EWL4wnn8INGcJsQMQhkALt9YX4toNXjET%2BU72b3BpkEAXM4w%2FnCYrrRfK8S45lZcRj4GbluIiNKaOlRSg5zPZeZfqm8glsG5%2BM%2Fp5IW4qzHrv1X926DgBIXGcHrY0iGC2gh%2F%2BdANpSs0SfzQHPq305t%2BRyspWKHE3SnQoapNQI5zB%2BDCn%2F1tlpY3oqVMb%2BijIJzi%2BNKRjfB5bDVPEPY0BcZE4IFnSrq7%2Bd4vEW5Z%2B133MPzKsUlUy1kPLgjxWb3%2FrqmnPl4BztOguR4Q8Bs%2FowGD6pa6FFtL5ND2E9ufHQRfpVOsTVBJ8oK1F55wJs4jUtdzJyP%2FiQOoS8NW8f02wMdOqwsJt8P4BSC2wV7tHY3saXmyQ9bpd0VelP%2BNIR2w1hjZaFnk%2F7PT5GJrBw91wDRsFyMsjRuJOhDHd7oc%2B4OBnxYLcQuTD2AOLChpB0Sz4ZXhClY7WmT46f6W2uWboviJwZ3o4a6tKEy2sSZ4ouv8N%2FmbJocr9aI3aTCVs6m9BjqkAWGrGiQk%2BBgrxg5GXWAOlE%2FJOkurNUjuJuQTas81%2FzNU6AKFqOTb7WAe%2BZc5TZOi1%2FBmxP622ouWeeGQCdyR%2FWgLDqPG7zOdZfGIwREKMr%2Fu0Nz34ZN0W%2F0fQ4vjLloMF185F%2F0kpx83rM%2Bi4DaRV1o1t8LLRLQrPMt%2B%2F5ndsE7naweRrOmdEfSNFJNslTw8NTMmKUPB%2FYjyr%2B1xBuqbDfWPNJl%2B&X-Amz-Signature=547a66ead4f109878221b5b011a075eeb733a2c27b4599111aafa774380a52aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CTHGQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9a6%2B5qGzgi789PsvEj7OKfSqn2GH%2FPZApl7IvB3W0LAIhAJZ8KPI7s6xvU2I54KWZHYfx8xvwejePgr1vkQfrZw0cKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl9BduLLXnQ3ACnr0q3ANP6nWFHfYlzFa5VQ3Cxn7OuluV1%2Fajbg4lMAZ9xkSxNz9avSNRJxjpXwV7IN%2BMWqhw7KmB00W5gfYSMyofvQryJTk8%2BbGQQPPi2on6p%2Bf29lc9V92DM5gc42qtuDxMw7k4EWL4wnn8INGcJsQMQhkALt9YX4toNXjET%2BU72b3BpkEAXM4w%2FnCYrrRfK8S45lZcRj4GbluIiNKaOlRSg5zPZeZfqm8glsG5%2BM%2Fp5IW4qzHrv1X926DgBIXGcHrY0iGC2gh%2F%2BdANpSs0SfzQHPq305t%2BRyspWKHE3SnQoapNQI5zB%2BDCn%2F1tlpY3oqVMb%2BijIJzi%2BNKRjfB5bDVPEPY0BcZE4IFnSrq7%2Bd4vEW5Z%2B133MPzKsUlUy1kPLgjxWb3%2FrqmnPl4BztOguR4Q8Bs%2FowGD6pa6FFtL5ND2E9ufHQRfpVOsTVBJ8oK1F55wJs4jUtdzJyP%2FiQOoS8NW8f02wMdOqwsJt8P4BSC2wV7tHY3saXmyQ9bpd0VelP%2BNIR2w1hjZaFnk%2F7PT5GJrBw91wDRsFyMsjRuJOhDHd7oc%2B4OBnxYLcQuTD2AOLChpB0Sz4ZXhClY7WmT46f6W2uWboviJwZ3o4a6tKEy2sSZ4ouv8N%2FmbJocr9aI3aTCVs6m9BjqkAWGrGiQk%2BBgrxg5GXWAOlE%2FJOkurNUjuJuQTas81%2FzNU6AKFqOTb7WAe%2BZc5TZOi1%2FBmxP622ouWeeGQCdyR%2FWgLDqPG7zOdZfGIwREKMr%2Fu0Nz34ZN0W%2F0fQ4vjLloMF185F%2F0kpx83rM%2Bi4DaRV1o1t8LLRLQrPMt%2B%2F5ndsE7naweRrOmdEfSNFJNslTw8NTMmKUPB%2FYjyr%2B1xBuqbDfWPNJl%2B&X-Amz-Signature=d0a91b2a6e7ee1a3f805114e6c7a9260e63bbb0e7226db50cc2c8f0e01b96227&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CTHGQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9a6%2B5qGzgi789PsvEj7OKfSqn2GH%2FPZApl7IvB3W0LAIhAJZ8KPI7s6xvU2I54KWZHYfx8xvwejePgr1vkQfrZw0cKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl9BduLLXnQ3ACnr0q3ANP6nWFHfYlzFa5VQ3Cxn7OuluV1%2Fajbg4lMAZ9xkSxNz9avSNRJxjpXwV7IN%2BMWqhw7KmB00W5gfYSMyofvQryJTk8%2BbGQQPPi2on6p%2Bf29lc9V92DM5gc42qtuDxMw7k4EWL4wnn8INGcJsQMQhkALt9YX4toNXjET%2BU72b3BpkEAXM4w%2FnCYrrRfK8S45lZcRj4GbluIiNKaOlRSg5zPZeZfqm8glsG5%2BM%2Fp5IW4qzHrv1X926DgBIXGcHrY0iGC2gh%2F%2BdANpSs0SfzQHPq305t%2BRyspWKHE3SnQoapNQI5zB%2BDCn%2F1tlpY3oqVMb%2BijIJzi%2BNKRjfB5bDVPEPY0BcZE4IFnSrq7%2Bd4vEW5Z%2B133MPzKsUlUy1kPLgjxWb3%2FrqmnPl4BztOguR4Q8Bs%2FowGD6pa6FFtL5ND2E9ufHQRfpVOsTVBJ8oK1F55wJs4jUtdzJyP%2FiQOoS8NW8f02wMdOqwsJt8P4BSC2wV7tHY3saXmyQ9bpd0VelP%2BNIR2w1hjZaFnk%2F7PT5GJrBw91wDRsFyMsjRuJOhDHd7oc%2B4OBnxYLcQuTD2AOLChpB0Sz4ZXhClY7WmT46f6W2uWboviJwZ3o4a6tKEy2sSZ4ouv8N%2FmbJocr9aI3aTCVs6m9BjqkAWGrGiQk%2BBgrxg5GXWAOlE%2FJOkurNUjuJuQTas81%2FzNU6AKFqOTb7WAe%2BZc5TZOi1%2FBmxP622ouWeeGQCdyR%2FWgLDqPG7zOdZfGIwREKMr%2Fu0Nz34ZN0W%2F0fQ4vjLloMF185F%2F0kpx83rM%2Bi4DaRV1o1t8LLRLQrPMt%2B%2F5ndsE7naweRrOmdEfSNFJNslTw8NTMmKUPB%2FYjyr%2B1xBuqbDfWPNJl%2B&X-Amz-Signature=b5a8d1e05e10d1b80e17ee7a2ff4916d3bb63d6346fe8d4f0cdd6966caa86a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6CTHGQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9a6%2B5qGzgi789PsvEj7OKfSqn2GH%2FPZApl7IvB3W0LAIhAJZ8KPI7s6xvU2I54KWZHYfx8xvwejePgr1vkQfrZw0cKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl9BduLLXnQ3ACnr0q3ANP6nWFHfYlzFa5VQ3Cxn7OuluV1%2Fajbg4lMAZ9xkSxNz9avSNRJxjpXwV7IN%2BMWqhw7KmB00W5gfYSMyofvQryJTk8%2BbGQQPPi2on6p%2Bf29lc9V92DM5gc42qtuDxMw7k4EWL4wnn8INGcJsQMQhkALt9YX4toNXjET%2BU72b3BpkEAXM4w%2FnCYrrRfK8S45lZcRj4GbluIiNKaOlRSg5zPZeZfqm8glsG5%2BM%2Fp5IW4qzHrv1X926DgBIXGcHrY0iGC2gh%2F%2BdANpSs0SfzQHPq305t%2BRyspWKHE3SnQoapNQI5zB%2BDCn%2F1tlpY3oqVMb%2BijIJzi%2BNKRjfB5bDVPEPY0BcZE4IFnSrq7%2Bd4vEW5Z%2B133MPzKsUlUy1kPLgjxWb3%2FrqmnPl4BztOguR4Q8Bs%2FowGD6pa6FFtL5ND2E9ufHQRfpVOsTVBJ8oK1F55wJs4jUtdzJyP%2FiQOoS8NW8f02wMdOqwsJt8P4BSC2wV7tHY3saXmyQ9bpd0VelP%2BNIR2w1hjZaFnk%2F7PT5GJrBw91wDRsFyMsjRuJOhDHd7oc%2B4OBnxYLcQuTD2AOLChpB0Sz4ZXhClY7WmT46f6W2uWboviJwZ3o4a6tKEy2sSZ4ouv8N%2FmbJocr9aI3aTCVs6m9BjqkAWGrGiQk%2BBgrxg5GXWAOlE%2FJOkurNUjuJuQTas81%2FzNU6AKFqOTb7WAe%2BZc5TZOi1%2FBmxP622ouWeeGQCdyR%2FWgLDqPG7zOdZfGIwREKMr%2Fu0Nz34ZN0W%2F0fQ4vjLloMF185F%2F0kpx83rM%2Bi4DaRV1o1t8LLRLQrPMt%2B%2F5ndsE7naweRrOmdEfSNFJNslTw8NTMmKUPB%2FYjyr%2B1xBuqbDfWPNJl%2B&X-Amz-Signature=6e1603adf6403776933946330132b890c48bac85e300efd58a6e7172f5bb3523&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
