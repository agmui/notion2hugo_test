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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRIOCTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWjetZ4ZbJqlNyTZj80Ds4dwDqLmFWvaJ6UnQBRB0rQIhAPggagC6S85aH2YdKON0c%2ByoQo7oJj1nEIMwfvUmCcGRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh1QCiLubqDJ2teaoq3AMa2rNfOIN2qSeBAtGX3w4R4jUUZt6bkEXS0AI57qXeKZRv7lzPyJFWdlOVMPS5c95XXgXTS8%2Bj6xtLc%2FQ9inyd9GR3TAXPNb5WGm4wETb%2BuvY0POn2G%2FSWqstWxJX0bfpzXKMtgyS7sGHX4E%2BHXLWtozxAu4tORNNBbPvgZc4hj3JjljhFWQUB9Y2Olrjd1cHF8TC7LcT5eUBpoqGeCtQqulzn4gwgNvz44ZBN0Uq4RSoSgas7Ziq%2B4SOejxYmWPTS1C6FQQP8P1ApkRpcEOfFLjqKVTxikDZJDhMdoqWaiAnHuQkjqMRvyUyhsIleHMOR8Rua2GEdKTHHr0HjebsNP9iydu%2F%2BiPlQncFVCrHL3jmcoUDHzKh9ymLE3ttdVTAvJOZi1vt2%2BBxV2d78GXdlALkIJc4r9chyyK4qlGQaerQnda8YKWSQpQ3sZCCwMq33MQ5z3Ez5Le25iCPbqJdSLNVqk0q5r%2ByKEMqI4q7UsX%2BuwQ0TqEkJ%2FNfC%2BXwcN64TQMiKaB1nAX12FfxyhppnhkydpKif4NArcUD0jrDDDA1Yx0%2F6O5MYlDy06F1JOBkwg6pwuJXktXFLJYhdItm%2FqpRgYloOt713mF9RuYsbeHTXG1N%2BYeeMrnDsLTDB%2FMHDBjqkAY%2FlLo61Lwgo8kx5m329bENDsXhDXoH%2Fy7OTCWg6rOj4f3gj9KYqwuyd8pPJWQjYd3Ac0KdS6riX4CTEkO8lJZVRZh3z4gp9NIc4egcuyFmt0TQA7ONqVj1NGo8hHZHjfa%2BE5vU1OCeYN9y5k%2BeFnQVfntCdwGcWgSARHwjLukHDuVz3rtSQ%2F8xVsQWFwDXGDdoSU4gL6OCLBMfPjHXxku7Gp%2F6d&X-Amz-Signature=a5318b374260c58b5ab6df6b57a45dffed6cea5b6a1438afa275000b5176feed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRIOCTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWjetZ4ZbJqlNyTZj80Ds4dwDqLmFWvaJ6UnQBRB0rQIhAPggagC6S85aH2YdKON0c%2ByoQo7oJj1nEIMwfvUmCcGRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh1QCiLubqDJ2teaoq3AMa2rNfOIN2qSeBAtGX3w4R4jUUZt6bkEXS0AI57qXeKZRv7lzPyJFWdlOVMPS5c95XXgXTS8%2Bj6xtLc%2FQ9inyd9GR3TAXPNb5WGm4wETb%2BuvY0POn2G%2FSWqstWxJX0bfpzXKMtgyS7sGHX4E%2BHXLWtozxAu4tORNNBbPvgZc4hj3JjljhFWQUB9Y2Olrjd1cHF8TC7LcT5eUBpoqGeCtQqulzn4gwgNvz44ZBN0Uq4RSoSgas7Ziq%2B4SOejxYmWPTS1C6FQQP8P1ApkRpcEOfFLjqKVTxikDZJDhMdoqWaiAnHuQkjqMRvyUyhsIleHMOR8Rua2GEdKTHHr0HjebsNP9iydu%2F%2BiPlQncFVCrHL3jmcoUDHzKh9ymLE3ttdVTAvJOZi1vt2%2BBxV2d78GXdlALkIJc4r9chyyK4qlGQaerQnda8YKWSQpQ3sZCCwMq33MQ5z3Ez5Le25iCPbqJdSLNVqk0q5r%2ByKEMqI4q7UsX%2BuwQ0TqEkJ%2FNfC%2BXwcN64TQMiKaB1nAX12FfxyhppnhkydpKif4NArcUD0jrDDDA1Yx0%2F6O5MYlDy06F1JOBkwg6pwuJXktXFLJYhdItm%2FqpRgYloOt713mF9RuYsbeHTXG1N%2BYeeMrnDsLTDB%2FMHDBjqkAY%2FlLo61Lwgo8kx5m329bENDsXhDXoH%2Fy7OTCWg6rOj4f3gj9KYqwuyd8pPJWQjYd3Ac0KdS6riX4CTEkO8lJZVRZh3z4gp9NIc4egcuyFmt0TQA7ONqVj1NGo8hHZHjfa%2BE5vU1OCeYN9y5k%2BeFnQVfntCdwGcWgSARHwjLukHDuVz3rtSQ%2F8xVsQWFwDXGDdoSU4gL6OCLBMfPjHXxku7Gp%2F6d&X-Amz-Signature=d34dfa977e2519554a93ac167b405de9cc782362187b707fd8991952e8c60cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRIOCTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWjetZ4ZbJqlNyTZj80Ds4dwDqLmFWvaJ6UnQBRB0rQIhAPggagC6S85aH2YdKON0c%2ByoQo7oJj1nEIMwfvUmCcGRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh1QCiLubqDJ2teaoq3AMa2rNfOIN2qSeBAtGX3w4R4jUUZt6bkEXS0AI57qXeKZRv7lzPyJFWdlOVMPS5c95XXgXTS8%2Bj6xtLc%2FQ9inyd9GR3TAXPNb5WGm4wETb%2BuvY0POn2G%2FSWqstWxJX0bfpzXKMtgyS7sGHX4E%2BHXLWtozxAu4tORNNBbPvgZc4hj3JjljhFWQUB9Y2Olrjd1cHF8TC7LcT5eUBpoqGeCtQqulzn4gwgNvz44ZBN0Uq4RSoSgas7Ziq%2B4SOejxYmWPTS1C6FQQP8P1ApkRpcEOfFLjqKVTxikDZJDhMdoqWaiAnHuQkjqMRvyUyhsIleHMOR8Rua2GEdKTHHr0HjebsNP9iydu%2F%2BiPlQncFVCrHL3jmcoUDHzKh9ymLE3ttdVTAvJOZi1vt2%2BBxV2d78GXdlALkIJc4r9chyyK4qlGQaerQnda8YKWSQpQ3sZCCwMq33MQ5z3Ez5Le25iCPbqJdSLNVqk0q5r%2ByKEMqI4q7UsX%2BuwQ0TqEkJ%2FNfC%2BXwcN64TQMiKaB1nAX12FfxyhppnhkydpKif4NArcUD0jrDDDA1Yx0%2F6O5MYlDy06F1JOBkwg6pwuJXktXFLJYhdItm%2FqpRgYloOt713mF9RuYsbeHTXG1N%2BYeeMrnDsLTDB%2FMHDBjqkAY%2FlLo61Lwgo8kx5m329bENDsXhDXoH%2Fy7OTCWg6rOj4f3gj9KYqwuyd8pPJWQjYd3Ac0KdS6riX4CTEkO8lJZVRZh3z4gp9NIc4egcuyFmt0TQA7ONqVj1NGo8hHZHjfa%2BE5vU1OCeYN9y5k%2BeFnQVfntCdwGcWgSARHwjLukHDuVz3rtSQ%2F8xVsQWFwDXGDdoSU4gL6OCLBMfPjHXxku7Gp%2F6d&X-Amz-Signature=33d462954aa2eef93334014bb22e0f0236879eb4f58558df7ef0dcc4ed62522d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRIOCTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWjetZ4ZbJqlNyTZj80Ds4dwDqLmFWvaJ6UnQBRB0rQIhAPggagC6S85aH2YdKON0c%2ByoQo7oJj1nEIMwfvUmCcGRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh1QCiLubqDJ2teaoq3AMa2rNfOIN2qSeBAtGX3w4R4jUUZt6bkEXS0AI57qXeKZRv7lzPyJFWdlOVMPS5c95XXgXTS8%2Bj6xtLc%2FQ9inyd9GR3TAXPNb5WGm4wETb%2BuvY0POn2G%2FSWqstWxJX0bfpzXKMtgyS7sGHX4E%2BHXLWtozxAu4tORNNBbPvgZc4hj3JjljhFWQUB9Y2Olrjd1cHF8TC7LcT5eUBpoqGeCtQqulzn4gwgNvz44ZBN0Uq4RSoSgas7Ziq%2B4SOejxYmWPTS1C6FQQP8P1ApkRpcEOfFLjqKVTxikDZJDhMdoqWaiAnHuQkjqMRvyUyhsIleHMOR8Rua2GEdKTHHr0HjebsNP9iydu%2F%2BiPlQncFVCrHL3jmcoUDHzKh9ymLE3ttdVTAvJOZi1vt2%2BBxV2d78GXdlALkIJc4r9chyyK4qlGQaerQnda8YKWSQpQ3sZCCwMq33MQ5z3Ez5Le25iCPbqJdSLNVqk0q5r%2ByKEMqI4q7UsX%2BuwQ0TqEkJ%2FNfC%2BXwcN64TQMiKaB1nAX12FfxyhppnhkydpKif4NArcUD0jrDDDA1Yx0%2F6O5MYlDy06F1JOBkwg6pwuJXktXFLJYhdItm%2FqpRgYloOt713mF9RuYsbeHTXG1N%2BYeeMrnDsLTDB%2FMHDBjqkAY%2FlLo61Lwgo8kx5m329bENDsXhDXoH%2Fy7OTCWg6rOj4f3gj9KYqwuyd8pPJWQjYd3Ac0KdS6riX4CTEkO8lJZVRZh3z4gp9NIc4egcuyFmt0TQA7ONqVj1NGo8hHZHjfa%2BE5vU1OCeYN9y5k%2BeFnQVfntCdwGcWgSARHwjLukHDuVz3rtSQ%2F8xVsQWFwDXGDdoSU4gL6OCLBMfPjHXxku7Gp%2F6d&X-Amz-Signature=746009d86e46004a2e8bf2f3722f0d70aea24f207f5b9a7afa2ccd7247c8882f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRIOCTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWjetZ4ZbJqlNyTZj80Ds4dwDqLmFWvaJ6UnQBRB0rQIhAPggagC6S85aH2YdKON0c%2ByoQo7oJj1nEIMwfvUmCcGRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh1QCiLubqDJ2teaoq3AMa2rNfOIN2qSeBAtGX3w4R4jUUZt6bkEXS0AI57qXeKZRv7lzPyJFWdlOVMPS5c95XXgXTS8%2Bj6xtLc%2FQ9inyd9GR3TAXPNb5WGm4wETb%2BuvY0POn2G%2FSWqstWxJX0bfpzXKMtgyS7sGHX4E%2BHXLWtozxAu4tORNNBbPvgZc4hj3JjljhFWQUB9Y2Olrjd1cHF8TC7LcT5eUBpoqGeCtQqulzn4gwgNvz44ZBN0Uq4RSoSgas7Ziq%2B4SOejxYmWPTS1C6FQQP8P1ApkRpcEOfFLjqKVTxikDZJDhMdoqWaiAnHuQkjqMRvyUyhsIleHMOR8Rua2GEdKTHHr0HjebsNP9iydu%2F%2BiPlQncFVCrHL3jmcoUDHzKh9ymLE3ttdVTAvJOZi1vt2%2BBxV2d78GXdlALkIJc4r9chyyK4qlGQaerQnda8YKWSQpQ3sZCCwMq33MQ5z3Ez5Le25iCPbqJdSLNVqk0q5r%2ByKEMqI4q7UsX%2BuwQ0TqEkJ%2FNfC%2BXwcN64TQMiKaB1nAX12FfxyhppnhkydpKif4NArcUD0jrDDDA1Yx0%2F6O5MYlDy06F1JOBkwg6pwuJXktXFLJYhdItm%2FqpRgYloOt713mF9RuYsbeHTXG1N%2BYeeMrnDsLTDB%2FMHDBjqkAY%2FlLo61Lwgo8kx5m329bENDsXhDXoH%2Fy7OTCWg6rOj4f3gj9KYqwuyd8pPJWQjYd3Ac0KdS6riX4CTEkO8lJZVRZh3z4gp9NIc4egcuyFmt0TQA7ONqVj1NGo8hHZHjfa%2BE5vU1OCeYN9y5k%2BeFnQVfntCdwGcWgSARHwjLukHDuVz3rtSQ%2F8xVsQWFwDXGDdoSU4gL6OCLBMfPjHXxku7Gp%2F6d&X-Amz-Signature=51430eca13a20fce2ab60e1299da8cc236d9bc5d618bf594406fc4f9bbcda25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRIOCTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiWjetZ4ZbJqlNyTZj80Ds4dwDqLmFWvaJ6UnQBRB0rQIhAPggagC6S85aH2YdKON0c%2ByoQo7oJj1nEIMwfvUmCcGRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh1QCiLubqDJ2teaoq3AMa2rNfOIN2qSeBAtGX3w4R4jUUZt6bkEXS0AI57qXeKZRv7lzPyJFWdlOVMPS5c95XXgXTS8%2Bj6xtLc%2FQ9inyd9GR3TAXPNb5WGm4wETb%2BuvY0POn2G%2FSWqstWxJX0bfpzXKMtgyS7sGHX4E%2BHXLWtozxAu4tORNNBbPvgZc4hj3JjljhFWQUB9Y2Olrjd1cHF8TC7LcT5eUBpoqGeCtQqulzn4gwgNvz44ZBN0Uq4RSoSgas7Ziq%2B4SOejxYmWPTS1C6FQQP8P1ApkRpcEOfFLjqKVTxikDZJDhMdoqWaiAnHuQkjqMRvyUyhsIleHMOR8Rua2GEdKTHHr0HjebsNP9iydu%2F%2BiPlQncFVCrHL3jmcoUDHzKh9ymLE3ttdVTAvJOZi1vt2%2BBxV2d78GXdlALkIJc4r9chyyK4qlGQaerQnda8YKWSQpQ3sZCCwMq33MQ5z3Ez5Le25iCPbqJdSLNVqk0q5r%2ByKEMqI4q7UsX%2BuwQ0TqEkJ%2FNfC%2BXwcN64TQMiKaB1nAX12FfxyhppnhkydpKif4NArcUD0jrDDDA1Yx0%2F6O5MYlDy06F1JOBkwg6pwuJXktXFLJYhdItm%2FqpRgYloOt713mF9RuYsbeHTXG1N%2BYeeMrnDsLTDB%2FMHDBjqkAY%2FlLo61Lwgo8kx5m329bENDsXhDXoH%2Fy7OTCWg6rOj4f3gj9KYqwuyd8pPJWQjYd3Ac0KdS6riX4CTEkO8lJZVRZh3z4gp9NIc4egcuyFmt0TQA7ONqVj1NGo8hHZHjfa%2BE5vU1OCeYN9y5k%2BeFnQVfntCdwGcWgSARHwjLukHDuVz3rtSQ%2F8xVsQWFwDXGDdoSU4gL6OCLBMfPjHXxku7Gp%2F6d&X-Amz-Signature=2006ded1e0f79ec9a8bbd82038b57496e2de0b3cf150c353b10e86a38fad2dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
