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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGK2JUZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDfPIoJ1S1hBD2E%2BF4t4kdv8c0DBGRzttuq9v3S%2FD4wAiBh%2Buec%2FeKzQQqbLrAcPms8CKIZCf%2FGJ0iR%2Bgl4X2Wuvir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAK%2B8i5fjLEvSL6Q1KtwDV%2FpI5LQhDsKkz03hbjCLb9r7L%2F%2F%2FaGSVNcE520SoDRf2obevZfgxRKWaXp2HzzTY2sxlTNL9Ne1lzYjx7a%2FQi7oY10l57rlhMd%2Fdf0GiOEuC48%2FnjiFyUry0u0sGz7tLwTHvB3xPFS2XJv%2BeBQqU6%2FV05%2F1yHHZx9qyDCLY5WbXe69dTc%2F5DIUS4YM7mBwTdVoYvkC7Q4ZbWdamGrlfjMmswgsziDViOZMsNyh6B1fn1eKeZIxAIte8y6y6uJ%2FEnD5WzK8vsmRagB9ibSQPIKkvrb9pCSBD6dnHL0cLWyB5lK5B0eI2c2mNPkG3yNzDCxzCXTqqzFXGhdgDTsGuBDp%2FwMQGBCV4YwRVUB3zRQJL21Zz6aem9aW1hXttvviW8NH6%2BXq0fouViipeiHgHa5NBXmBzFLT04VhTSbYY9f29RhmVlYTuG96VFSdiUzmueAxIY8mfAH7mlyWnOESur%2Fee0L7Ksa2N25q9U6w3zgA4qQyjb2B7NulbJN3kTLdRkJta2gMAR3KlwxuYFhA0XDmPt3XQy%2FDBMfcNCNWyYNP4g35e%2BeNJfTcQ0e7d%2FV%2BhB15dN9qwHIRGIuz0eJdwg4QEhDqTks%2BbQfyxZjIok9CrHT%2Bx7Xn5SEsM71Kkwz6fhvgY6pgFaQA%2BqnO%2FjSCjT%2FqQGXadSk1BbDshU1fjhpKHcxg1k0RniN67%2BorXaVMjtbHz3cmWfPTZybO1xOkRw9Y0FKMuKMhuU9tsKGRQ0lNQL2RyngiBFAFT26F3SQsr2QyFPX7O8zQtJs3UV%2FY%2Bq8%2BTJkz4HsS%2FqcHb6D0DNdi5OWqe4FrxbbIjrq2i%2FJbR0nRutEjYtAxnvzcg9DSblFgee9iPhF0HVBuJh&X-Amz-Signature=a9dcf4e402df0d428a979bd410ecb842440cfb0e6aa0e26354bafdb8bcad6556&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGK2JUZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDfPIoJ1S1hBD2E%2BF4t4kdv8c0DBGRzttuq9v3S%2FD4wAiBh%2Buec%2FeKzQQqbLrAcPms8CKIZCf%2FGJ0iR%2Bgl4X2Wuvir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAK%2B8i5fjLEvSL6Q1KtwDV%2FpI5LQhDsKkz03hbjCLb9r7L%2F%2F%2FaGSVNcE520SoDRf2obevZfgxRKWaXp2HzzTY2sxlTNL9Ne1lzYjx7a%2FQi7oY10l57rlhMd%2Fdf0GiOEuC48%2FnjiFyUry0u0sGz7tLwTHvB3xPFS2XJv%2BeBQqU6%2FV05%2F1yHHZx9qyDCLY5WbXe69dTc%2F5DIUS4YM7mBwTdVoYvkC7Q4ZbWdamGrlfjMmswgsziDViOZMsNyh6B1fn1eKeZIxAIte8y6y6uJ%2FEnD5WzK8vsmRagB9ibSQPIKkvrb9pCSBD6dnHL0cLWyB5lK5B0eI2c2mNPkG3yNzDCxzCXTqqzFXGhdgDTsGuBDp%2FwMQGBCV4YwRVUB3zRQJL21Zz6aem9aW1hXttvviW8NH6%2BXq0fouViipeiHgHa5NBXmBzFLT04VhTSbYY9f29RhmVlYTuG96VFSdiUzmueAxIY8mfAH7mlyWnOESur%2Fee0L7Ksa2N25q9U6w3zgA4qQyjb2B7NulbJN3kTLdRkJta2gMAR3KlwxuYFhA0XDmPt3XQy%2FDBMfcNCNWyYNP4g35e%2BeNJfTcQ0e7d%2FV%2BhB15dN9qwHIRGIuz0eJdwg4QEhDqTks%2BbQfyxZjIok9CrHT%2Bx7Xn5SEsM71Kkwz6fhvgY6pgFaQA%2BqnO%2FjSCjT%2FqQGXadSk1BbDshU1fjhpKHcxg1k0RniN67%2BorXaVMjtbHz3cmWfPTZybO1xOkRw9Y0FKMuKMhuU9tsKGRQ0lNQL2RyngiBFAFT26F3SQsr2QyFPX7O8zQtJs3UV%2FY%2Bq8%2BTJkz4HsS%2FqcHb6D0DNdi5OWqe4FrxbbIjrq2i%2FJbR0nRutEjYtAxnvzcg9DSblFgee9iPhF0HVBuJh&X-Amz-Signature=87c53c52c9ae39814fca05e7858dacc746c2c7890b59771aa06f4b41a2be654f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGK2JUZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDfPIoJ1S1hBD2E%2BF4t4kdv8c0DBGRzttuq9v3S%2FD4wAiBh%2Buec%2FeKzQQqbLrAcPms8CKIZCf%2FGJ0iR%2Bgl4X2Wuvir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAK%2B8i5fjLEvSL6Q1KtwDV%2FpI5LQhDsKkz03hbjCLb9r7L%2F%2F%2FaGSVNcE520SoDRf2obevZfgxRKWaXp2HzzTY2sxlTNL9Ne1lzYjx7a%2FQi7oY10l57rlhMd%2Fdf0GiOEuC48%2FnjiFyUry0u0sGz7tLwTHvB3xPFS2XJv%2BeBQqU6%2FV05%2F1yHHZx9qyDCLY5WbXe69dTc%2F5DIUS4YM7mBwTdVoYvkC7Q4ZbWdamGrlfjMmswgsziDViOZMsNyh6B1fn1eKeZIxAIte8y6y6uJ%2FEnD5WzK8vsmRagB9ibSQPIKkvrb9pCSBD6dnHL0cLWyB5lK5B0eI2c2mNPkG3yNzDCxzCXTqqzFXGhdgDTsGuBDp%2FwMQGBCV4YwRVUB3zRQJL21Zz6aem9aW1hXttvviW8NH6%2BXq0fouViipeiHgHa5NBXmBzFLT04VhTSbYY9f29RhmVlYTuG96VFSdiUzmueAxIY8mfAH7mlyWnOESur%2Fee0L7Ksa2N25q9U6w3zgA4qQyjb2B7NulbJN3kTLdRkJta2gMAR3KlwxuYFhA0XDmPt3XQy%2FDBMfcNCNWyYNP4g35e%2BeNJfTcQ0e7d%2FV%2BhB15dN9qwHIRGIuz0eJdwg4QEhDqTks%2BbQfyxZjIok9CrHT%2Bx7Xn5SEsM71Kkwz6fhvgY6pgFaQA%2BqnO%2FjSCjT%2FqQGXadSk1BbDshU1fjhpKHcxg1k0RniN67%2BorXaVMjtbHz3cmWfPTZybO1xOkRw9Y0FKMuKMhuU9tsKGRQ0lNQL2RyngiBFAFT26F3SQsr2QyFPX7O8zQtJs3UV%2FY%2Bq8%2BTJkz4HsS%2FqcHb6D0DNdi5OWqe4FrxbbIjrq2i%2FJbR0nRutEjYtAxnvzcg9DSblFgee9iPhF0HVBuJh&X-Amz-Signature=bf64a9efd8784737fe08c7b2fa539e048569992b795b9ee685d0a16319b723ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGK2JUZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDfPIoJ1S1hBD2E%2BF4t4kdv8c0DBGRzttuq9v3S%2FD4wAiBh%2Buec%2FeKzQQqbLrAcPms8CKIZCf%2FGJ0iR%2Bgl4X2Wuvir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAK%2B8i5fjLEvSL6Q1KtwDV%2FpI5LQhDsKkz03hbjCLb9r7L%2F%2F%2FaGSVNcE520SoDRf2obevZfgxRKWaXp2HzzTY2sxlTNL9Ne1lzYjx7a%2FQi7oY10l57rlhMd%2Fdf0GiOEuC48%2FnjiFyUry0u0sGz7tLwTHvB3xPFS2XJv%2BeBQqU6%2FV05%2F1yHHZx9qyDCLY5WbXe69dTc%2F5DIUS4YM7mBwTdVoYvkC7Q4ZbWdamGrlfjMmswgsziDViOZMsNyh6B1fn1eKeZIxAIte8y6y6uJ%2FEnD5WzK8vsmRagB9ibSQPIKkvrb9pCSBD6dnHL0cLWyB5lK5B0eI2c2mNPkG3yNzDCxzCXTqqzFXGhdgDTsGuBDp%2FwMQGBCV4YwRVUB3zRQJL21Zz6aem9aW1hXttvviW8NH6%2BXq0fouViipeiHgHa5NBXmBzFLT04VhTSbYY9f29RhmVlYTuG96VFSdiUzmueAxIY8mfAH7mlyWnOESur%2Fee0L7Ksa2N25q9U6w3zgA4qQyjb2B7NulbJN3kTLdRkJta2gMAR3KlwxuYFhA0XDmPt3XQy%2FDBMfcNCNWyYNP4g35e%2BeNJfTcQ0e7d%2FV%2BhB15dN9qwHIRGIuz0eJdwg4QEhDqTks%2BbQfyxZjIok9CrHT%2Bx7Xn5SEsM71Kkwz6fhvgY6pgFaQA%2BqnO%2FjSCjT%2FqQGXadSk1BbDshU1fjhpKHcxg1k0RniN67%2BorXaVMjtbHz3cmWfPTZybO1xOkRw9Y0FKMuKMhuU9tsKGRQ0lNQL2RyngiBFAFT26F3SQsr2QyFPX7O8zQtJs3UV%2FY%2Bq8%2BTJkz4HsS%2FqcHb6D0DNdi5OWqe4FrxbbIjrq2i%2FJbR0nRutEjYtAxnvzcg9DSblFgee9iPhF0HVBuJh&X-Amz-Signature=3fd38953fd2d4fcd1f13940ef2c94b7ad4ae54a270b829c7dd921af2834ed163&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGK2JUZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDfPIoJ1S1hBD2E%2BF4t4kdv8c0DBGRzttuq9v3S%2FD4wAiBh%2Buec%2FeKzQQqbLrAcPms8CKIZCf%2FGJ0iR%2Bgl4X2Wuvir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAK%2B8i5fjLEvSL6Q1KtwDV%2FpI5LQhDsKkz03hbjCLb9r7L%2F%2F%2FaGSVNcE520SoDRf2obevZfgxRKWaXp2HzzTY2sxlTNL9Ne1lzYjx7a%2FQi7oY10l57rlhMd%2Fdf0GiOEuC48%2FnjiFyUry0u0sGz7tLwTHvB3xPFS2XJv%2BeBQqU6%2FV05%2F1yHHZx9qyDCLY5WbXe69dTc%2F5DIUS4YM7mBwTdVoYvkC7Q4ZbWdamGrlfjMmswgsziDViOZMsNyh6B1fn1eKeZIxAIte8y6y6uJ%2FEnD5WzK8vsmRagB9ibSQPIKkvrb9pCSBD6dnHL0cLWyB5lK5B0eI2c2mNPkG3yNzDCxzCXTqqzFXGhdgDTsGuBDp%2FwMQGBCV4YwRVUB3zRQJL21Zz6aem9aW1hXttvviW8NH6%2BXq0fouViipeiHgHa5NBXmBzFLT04VhTSbYY9f29RhmVlYTuG96VFSdiUzmueAxIY8mfAH7mlyWnOESur%2Fee0L7Ksa2N25q9U6w3zgA4qQyjb2B7NulbJN3kTLdRkJta2gMAR3KlwxuYFhA0XDmPt3XQy%2FDBMfcNCNWyYNP4g35e%2BeNJfTcQ0e7d%2FV%2BhB15dN9qwHIRGIuz0eJdwg4QEhDqTks%2BbQfyxZjIok9CrHT%2Bx7Xn5SEsM71Kkwz6fhvgY6pgFaQA%2BqnO%2FjSCjT%2FqQGXadSk1BbDshU1fjhpKHcxg1k0RniN67%2BorXaVMjtbHz3cmWfPTZybO1xOkRw9Y0FKMuKMhuU9tsKGRQ0lNQL2RyngiBFAFT26F3SQsr2QyFPX7O8zQtJs3UV%2FY%2Bq8%2BTJkz4HsS%2FqcHb6D0DNdi5OWqe4FrxbbIjrq2i%2FJbR0nRutEjYtAxnvzcg9DSblFgee9iPhF0HVBuJh&X-Amz-Signature=506de2f8ea8bb70304b158e6f7e5068a3eaf6a8072b139bb9844fe420ffa96b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGK2JUZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDfPIoJ1S1hBD2E%2BF4t4kdv8c0DBGRzttuq9v3S%2FD4wAiBh%2Buec%2FeKzQQqbLrAcPms8CKIZCf%2FGJ0iR%2Bgl4X2Wuvir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMAK%2B8i5fjLEvSL6Q1KtwDV%2FpI5LQhDsKkz03hbjCLb9r7L%2F%2F%2FaGSVNcE520SoDRf2obevZfgxRKWaXp2HzzTY2sxlTNL9Ne1lzYjx7a%2FQi7oY10l57rlhMd%2Fdf0GiOEuC48%2FnjiFyUry0u0sGz7tLwTHvB3xPFS2XJv%2BeBQqU6%2FV05%2F1yHHZx9qyDCLY5WbXe69dTc%2F5DIUS4YM7mBwTdVoYvkC7Q4ZbWdamGrlfjMmswgsziDViOZMsNyh6B1fn1eKeZIxAIte8y6y6uJ%2FEnD5WzK8vsmRagB9ibSQPIKkvrb9pCSBD6dnHL0cLWyB5lK5B0eI2c2mNPkG3yNzDCxzCXTqqzFXGhdgDTsGuBDp%2FwMQGBCV4YwRVUB3zRQJL21Zz6aem9aW1hXttvviW8NH6%2BXq0fouViipeiHgHa5NBXmBzFLT04VhTSbYY9f29RhmVlYTuG96VFSdiUzmueAxIY8mfAH7mlyWnOESur%2Fee0L7Ksa2N25q9U6w3zgA4qQyjb2B7NulbJN3kTLdRkJta2gMAR3KlwxuYFhA0XDmPt3XQy%2FDBMfcNCNWyYNP4g35e%2BeNJfTcQ0e7d%2FV%2BhB15dN9qwHIRGIuz0eJdwg4QEhDqTks%2BbQfyxZjIok9CrHT%2Bx7Xn5SEsM71Kkwz6fhvgY6pgFaQA%2BqnO%2FjSCjT%2FqQGXadSk1BbDshU1fjhpKHcxg1k0RniN67%2BorXaVMjtbHz3cmWfPTZybO1xOkRw9Y0FKMuKMhuU9tsKGRQ0lNQL2RyngiBFAFT26F3SQsr2QyFPX7O8zQtJs3UV%2FY%2Bq8%2BTJkz4HsS%2FqcHb6D0DNdi5OWqe4FrxbbIjrq2i%2FJbR0nRutEjYtAxnvzcg9DSblFgee9iPhF0HVBuJh&X-Amz-Signature=aa0774549b933ed9a042bf874c2dd9c8dc9c0f439163d93ea66986e3c96ce8eb&X-Amz-SignedHeaders=host&x-id=GetObject)
