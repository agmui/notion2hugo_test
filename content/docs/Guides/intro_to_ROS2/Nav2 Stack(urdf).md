---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUWII6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7smOmXb5HEKcDi6jfxlYtMX%2FZo3Q2az1pSInNjF9nJAiEA%2FrbuP35LVZKFcZumO7JFy90i%2FAmeSMvA6GbB%2F5xBXCYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWO8vO0eZZcq%2FOiBircAxditzC7sqhmRlDPXt076035GPK%2BZDha4urTRs7kZsjc58HyDcbyKV74u%2BMPx7QPAVrvMBeaQDzJCofVG7u6cokE0WB1vZhqkzNratYRGDxuK%2FyU7A0sCCSy3XZ79lFIE0x0zKmsXb7jeO8tPW5vex0yXhxWg9El0hOCiumEfu4IJLdcbR1b1yh7F9Qgo4vfKSO55bcZD8nvbuIKPJn6Y990E13NrOflO%2B3v8xu5AkU7Bsx5GyKGE7kg05ERg1aoO3VIH7R3YzxByHT6JNGXInJ1FLydgQpy1Cn7GDjBRrNhwYfO7Zckp96%2BWa83Us5OM%2Bcga1fSSco7LDCKnc%2BGdyLgrypKiYr0zcggpn%2BQrMYaPb01wCS%2FMQekcjVX34ZfZ%2FMe3NLUZXfcy1bW0vFg%2FYWUfQ3v5s4joZGIveEgBA2ZKnu0ukBGV%2BDnTt5egeFioxq2hAlr5TsPyh7vwhrikKYaVuLlFqNxnpBIuxEsxFwYeBdPRT%2BeuxX5ZzDkdbHIAVgmLljdGox6x1zbvJKSvMUKz8msWcgut6qAavrKK3wp%2BBg2hh%2BHYJV4ITqV33lfGn8SsvI%2BULoSVddwtaczvR8QeS1YyHw1sKQ1V5gYbbbgLeJrMB03heigtZpqMLLs4r4GOqUBfp2pU9OZph1Nm%2FwWksg9nEb7vcmbNvhOxI9PYAkD7kjEqj1t3TtpTQsHdCWaHdb6c3SUx1QwpgFbqWse1yszjPslmlkMrPUl0umx7oZvvNeg4TwPabJdHsb0j3Dttpbq%2FtuK9iFygcY2C2KwgvLdto4H5BvBNZWcDg3CpHNN1PuRoiMogP1LQd2OfsElp49p5jtORq2d3bVFOaNAyCUO%2F7yfyQm6&X-Amz-Signature=26d537cb3735f962b9d6d313ded3a80b9e53888e5894c4375050d7b44c86da1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUWII6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7smOmXb5HEKcDi6jfxlYtMX%2FZo3Q2az1pSInNjF9nJAiEA%2FrbuP35LVZKFcZumO7JFy90i%2FAmeSMvA6GbB%2F5xBXCYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWO8vO0eZZcq%2FOiBircAxditzC7sqhmRlDPXt076035GPK%2BZDha4urTRs7kZsjc58HyDcbyKV74u%2BMPx7QPAVrvMBeaQDzJCofVG7u6cokE0WB1vZhqkzNratYRGDxuK%2FyU7A0sCCSy3XZ79lFIE0x0zKmsXb7jeO8tPW5vex0yXhxWg9El0hOCiumEfu4IJLdcbR1b1yh7F9Qgo4vfKSO55bcZD8nvbuIKPJn6Y990E13NrOflO%2B3v8xu5AkU7Bsx5GyKGE7kg05ERg1aoO3VIH7R3YzxByHT6JNGXInJ1FLydgQpy1Cn7GDjBRrNhwYfO7Zckp96%2BWa83Us5OM%2Bcga1fSSco7LDCKnc%2BGdyLgrypKiYr0zcggpn%2BQrMYaPb01wCS%2FMQekcjVX34ZfZ%2FMe3NLUZXfcy1bW0vFg%2FYWUfQ3v5s4joZGIveEgBA2ZKnu0ukBGV%2BDnTt5egeFioxq2hAlr5TsPyh7vwhrikKYaVuLlFqNxnpBIuxEsxFwYeBdPRT%2BeuxX5ZzDkdbHIAVgmLljdGox6x1zbvJKSvMUKz8msWcgut6qAavrKK3wp%2BBg2hh%2BHYJV4ITqV33lfGn8SsvI%2BULoSVddwtaczvR8QeS1YyHw1sKQ1V5gYbbbgLeJrMB03heigtZpqMLLs4r4GOqUBfp2pU9OZph1Nm%2FwWksg9nEb7vcmbNvhOxI9PYAkD7kjEqj1t3TtpTQsHdCWaHdb6c3SUx1QwpgFbqWse1yszjPslmlkMrPUl0umx7oZvvNeg4TwPabJdHsb0j3Dttpbq%2FtuK9iFygcY2C2KwgvLdto4H5BvBNZWcDg3CpHNN1PuRoiMogP1LQd2OfsElp49p5jtORq2d3bVFOaNAyCUO%2F7yfyQm6&X-Amz-Signature=2db3cbe70db5f6e1a45a30d7706b779b464fa601289ce1aff80e38b4750821ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUWII6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7smOmXb5HEKcDi6jfxlYtMX%2FZo3Q2az1pSInNjF9nJAiEA%2FrbuP35LVZKFcZumO7JFy90i%2FAmeSMvA6GbB%2F5xBXCYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWO8vO0eZZcq%2FOiBircAxditzC7sqhmRlDPXt076035GPK%2BZDha4urTRs7kZsjc58HyDcbyKV74u%2BMPx7QPAVrvMBeaQDzJCofVG7u6cokE0WB1vZhqkzNratYRGDxuK%2FyU7A0sCCSy3XZ79lFIE0x0zKmsXb7jeO8tPW5vex0yXhxWg9El0hOCiumEfu4IJLdcbR1b1yh7F9Qgo4vfKSO55bcZD8nvbuIKPJn6Y990E13NrOflO%2B3v8xu5AkU7Bsx5GyKGE7kg05ERg1aoO3VIH7R3YzxByHT6JNGXInJ1FLydgQpy1Cn7GDjBRrNhwYfO7Zckp96%2BWa83Us5OM%2Bcga1fSSco7LDCKnc%2BGdyLgrypKiYr0zcggpn%2BQrMYaPb01wCS%2FMQekcjVX34ZfZ%2FMe3NLUZXfcy1bW0vFg%2FYWUfQ3v5s4joZGIveEgBA2ZKnu0ukBGV%2BDnTt5egeFioxq2hAlr5TsPyh7vwhrikKYaVuLlFqNxnpBIuxEsxFwYeBdPRT%2BeuxX5ZzDkdbHIAVgmLljdGox6x1zbvJKSvMUKz8msWcgut6qAavrKK3wp%2BBg2hh%2BHYJV4ITqV33lfGn8SsvI%2BULoSVddwtaczvR8QeS1YyHw1sKQ1V5gYbbbgLeJrMB03heigtZpqMLLs4r4GOqUBfp2pU9OZph1Nm%2FwWksg9nEb7vcmbNvhOxI9PYAkD7kjEqj1t3TtpTQsHdCWaHdb6c3SUx1QwpgFbqWse1yszjPslmlkMrPUl0umx7oZvvNeg4TwPabJdHsb0j3Dttpbq%2FtuK9iFygcY2C2KwgvLdto4H5BvBNZWcDg3CpHNN1PuRoiMogP1LQd2OfsElp49p5jtORq2d3bVFOaNAyCUO%2F7yfyQm6&X-Amz-Signature=2344fa230edcec648e8093da25c5b77413cd731556cf8f994e0fe4d72f0d44dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUWII6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7smOmXb5HEKcDi6jfxlYtMX%2FZo3Q2az1pSInNjF9nJAiEA%2FrbuP35LVZKFcZumO7JFy90i%2FAmeSMvA6GbB%2F5xBXCYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWO8vO0eZZcq%2FOiBircAxditzC7sqhmRlDPXt076035GPK%2BZDha4urTRs7kZsjc58HyDcbyKV74u%2BMPx7QPAVrvMBeaQDzJCofVG7u6cokE0WB1vZhqkzNratYRGDxuK%2FyU7A0sCCSy3XZ79lFIE0x0zKmsXb7jeO8tPW5vex0yXhxWg9El0hOCiumEfu4IJLdcbR1b1yh7F9Qgo4vfKSO55bcZD8nvbuIKPJn6Y990E13NrOflO%2B3v8xu5AkU7Bsx5GyKGE7kg05ERg1aoO3VIH7R3YzxByHT6JNGXInJ1FLydgQpy1Cn7GDjBRrNhwYfO7Zckp96%2BWa83Us5OM%2Bcga1fSSco7LDCKnc%2BGdyLgrypKiYr0zcggpn%2BQrMYaPb01wCS%2FMQekcjVX34ZfZ%2FMe3NLUZXfcy1bW0vFg%2FYWUfQ3v5s4joZGIveEgBA2ZKnu0ukBGV%2BDnTt5egeFioxq2hAlr5TsPyh7vwhrikKYaVuLlFqNxnpBIuxEsxFwYeBdPRT%2BeuxX5ZzDkdbHIAVgmLljdGox6x1zbvJKSvMUKz8msWcgut6qAavrKK3wp%2BBg2hh%2BHYJV4ITqV33lfGn8SsvI%2BULoSVddwtaczvR8QeS1YyHw1sKQ1V5gYbbbgLeJrMB03heigtZpqMLLs4r4GOqUBfp2pU9OZph1Nm%2FwWksg9nEb7vcmbNvhOxI9PYAkD7kjEqj1t3TtpTQsHdCWaHdb6c3SUx1QwpgFbqWse1yszjPslmlkMrPUl0umx7oZvvNeg4TwPabJdHsb0j3Dttpbq%2FtuK9iFygcY2C2KwgvLdto4H5BvBNZWcDg3CpHNN1PuRoiMogP1LQd2OfsElp49p5jtORq2d3bVFOaNAyCUO%2F7yfyQm6&X-Amz-Signature=a89edd825d93a776cc2cb4443162d568e89d0499cd2c33df5e20443c75549805&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
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

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

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
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUWII6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7smOmXb5HEKcDi6jfxlYtMX%2FZo3Q2az1pSInNjF9nJAiEA%2FrbuP35LVZKFcZumO7JFy90i%2FAmeSMvA6GbB%2F5xBXCYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWO8vO0eZZcq%2FOiBircAxditzC7sqhmRlDPXt076035GPK%2BZDha4urTRs7kZsjc58HyDcbyKV74u%2BMPx7QPAVrvMBeaQDzJCofVG7u6cokE0WB1vZhqkzNratYRGDxuK%2FyU7A0sCCSy3XZ79lFIE0x0zKmsXb7jeO8tPW5vex0yXhxWg9El0hOCiumEfu4IJLdcbR1b1yh7F9Qgo4vfKSO55bcZD8nvbuIKPJn6Y990E13NrOflO%2B3v8xu5AkU7Bsx5GyKGE7kg05ERg1aoO3VIH7R3YzxByHT6JNGXInJ1FLydgQpy1Cn7GDjBRrNhwYfO7Zckp96%2BWa83Us5OM%2Bcga1fSSco7LDCKnc%2BGdyLgrypKiYr0zcggpn%2BQrMYaPb01wCS%2FMQekcjVX34ZfZ%2FMe3NLUZXfcy1bW0vFg%2FYWUfQ3v5s4joZGIveEgBA2ZKnu0ukBGV%2BDnTt5egeFioxq2hAlr5TsPyh7vwhrikKYaVuLlFqNxnpBIuxEsxFwYeBdPRT%2BeuxX5ZzDkdbHIAVgmLljdGox6x1zbvJKSvMUKz8msWcgut6qAavrKK3wp%2BBg2hh%2BHYJV4ITqV33lfGn8SsvI%2BULoSVddwtaczvR8QeS1YyHw1sKQ1V5gYbbbgLeJrMB03heigtZpqMLLs4r4GOqUBfp2pU9OZph1Nm%2FwWksg9nEb7vcmbNvhOxI9PYAkD7kjEqj1t3TtpTQsHdCWaHdb6c3SUx1QwpgFbqWse1yszjPslmlkMrPUl0umx7oZvvNeg4TwPabJdHsb0j3Dttpbq%2FtuK9iFygcY2C2KwgvLdto4H5BvBNZWcDg3CpHNN1PuRoiMogP1LQd2OfsElp49p5jtORq2d3bVFOaNAyCUO%2F7yfyQm6&X-Amz-Signature=7ee896af228f9ce7b2515a049b860f4bfc26e0f21a6a5c85832efed55401bf01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUWII6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7smOmXb5HEKcDi6jfxlYtMX%2FZo3Q2az1pSInNjF9nJAiEA%2FrbuP35LVZKFcZumO7JFy90i%2FAmeSMvA6GbB%2F5xBXCYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHWO8vO0eZZcq%2FOiBircAxditzC7sqhmRlDPXt076035GPK%2BZDha4urTRs7kZsjc58HyDcbyKV74u%2BMPx7QPAVrvMBeaQDzJCofVG7u6cokE0WB1vZhqkzNratYRGDxuK%2FyU7A0sCCSy3XZ79lFIE0x0zKmsXb7jeO8tPW5vex0yXhxWg9El0hOCiumEfu4IJLdcbR1b1yh7F9Qgo4vfKSO55bcZD8nvbuIKPJn6Y990E13NrOflO%2B3v8xu5AkU7Bsx5GyKGE7kg05ERg1aoO3VIH7R3YzxByHT6JNGXInJ1FLydgQpy1Cn7GDjBRrNhwYfO7Zckp96%2BWa83Us5OM%2Bcga1fSSco7LDCKnc%2BGdyLgrypKiYr0zcggpn%2BQrMYaPb01wCS%2FMQekcjVX34ZfZ%2FMe3NLUZXfcy1bW0vFg%2FYWUfQ3v5s4joZGIveEgBA2ZKnu0ukBGV%2BDnTt5egeFioxq2hAlr5TsPyh7vwhrikKYaVuLlFqNxnpBIuxEsxFwYeBdPRT%2BeuxX5ZzDkdbHIAVgmLljdGox6x1zbvJKSvMUKz8msWcgut6qAavrKK3wp%2BBg2hh%2BHYJV4ITqV33lfGn8SsvI%2BULoSVddwtaczvR8QeS1YyHw1sKQ1V5gYbbbgLeJrMB03heigtZpqMLLs4r4GOqUBfp2pU9OZph1Nm%2FwWksg9nEb7vcmbNvhOxI9PYAkD7kjEqj1t3TtpTQsHdCWaHdb6c3SUx1QwpgFbqWse1yszjPslmlkMrPUl0umx7oZvvNeg4TwPabJdHsb0j3Dttpbq%2FtuK9iFygcY2C2KwgvLdto4H5BvBNZWcDg3CpHNN1PuRoiMogP1LQd2OfsElp49p5jtORq2d3bVFOaNAyCUO%2F7yfyQm6&X-Amz-Signature=4af64000ac7ec66316627a9d35f3f46697ef635778f3efa77b1ef4cdce0f1867&X-Amz-SignedHeaders=host&x-id=GetObject)
