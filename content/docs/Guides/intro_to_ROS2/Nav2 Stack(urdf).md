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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNFWEDA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTEg%2B3CEBByIATrNJlH7wbRkTybKnsWvlt83EfqLaL0QIgLW%2BW5Ul0KnsbvuMAKa0L6980bMDN5HTirOonZaAviz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkDSzhzFX%2FEtTJHWyrcA%2BtarUAjf9P6TACATHBMW%2FIiY8witFaok8MlW2yGyveBGx2pYtGR3kcezcDfYIkZdHOmHcCAhw2GrSjFT32WISIVnNEKn2%2FdNXjVPOwSKHgQ7T5441mQdhJ8yux801wDylZEzTNnuxVg2jCAN2Npk1Or2Z3Fc3%2BvS476PHAgntq5bYueHNY4js8ECnzRqi%2F3QKbp7%2B9JGYj8Q4j2J64hMT1eZJKna2y5EZSNL74sV4tXrihdnSqrNBth3Ldv8OISUwPAjxnHcrE2uXiIz%2F2Kf8eygESZ%2FUyv7SKgsbSchoO84pjulrOK%2Bdg1gGNHnmJlDeD1x99yynkzg29HuRhZXH8VkWex21wsdd39tG%2Fc1Kqce08t%2Fr81HOse6Wy7mZonsX%2FoD7Fw93XXezAsgXV6v4u2zo0epQI7wyNEfhm0YuOH3AeEHwG5uBVaUuE08wSSgiuLj%2FRUo6DjYxpI4HMSk1C6FzYU0lRbM%2Fvb49XVjmUwVoc4wuOpgg%2BPWDiAUVQSXi%2Fmmcu%2FyUWgasDqJXknRzOYqmTFfRI96xRWJXOE0cV4WBlNi7ALL6c2XyIHfZ1zYwAQaJQV8G4PNW%2FSmC%2FaUOyMp9uywIGjl5C8B4o9Xvo1jlSIb1mz0q4%2FNY9VMM%2B9osAGOqUBpEJVosDnI%2Fv18tRLB77%2BeZ%2BQ8hYC8znzP3zehXeM1YKPTvWk5KhTvYsis3iP03MhRGKmaU1%2BhAMBHFXluJOt1HGPpuZdnl%2Bd2yl80dMqS2WzPfXC8UchZWnrdEMAcMZr681wqpHBZTPBDrMpq8W9GXgGA5dQ6hXbzMQQ%2FggqK39XqQxUFKy1d%2FpaInVWtHqesNkJJ7dbpCXHxmV3ZsfjEUdfH3GA&X-Amz-Signature=f5248ff7b50559005cfc2bc2076c2de6e938c3a77ca47493702b367cd1e5c40c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNFWEDA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTEg%2B3CEBByIATrNJlH7wbRkTybKnsWvlt83EfqLaL0QIgLW%2BW5Ul0KnsbvuMAKa0L6980bMDN5HTirOonZaAviz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkDSzhzFX%2FEtTJHWyrcA%2BtarUAjf9P6TACATHBMW%2FIiY8witFaok8MlW2yGyveBGx2pYtGR3kcezcDfYIkZdHOmHcCAhw2GrSjFT32WISIVnNEKn2%2FdNXjVPOwSKHgQ7T5441mQdhJ8yux801wDylZEzTNnuxVg2jCAN2Npk1Or2Z3Fc3%2BvS476PHAgntq5bYueHNY4js8ECnzRqi%2F3QKbp7%2B9JGYj8Q4j2J64hMT1eZJKna2y5EZSNL74sV4tXrihdnSqrNBth3Ldv8OISUwPAjxnHcrE2uXiIz%2F2Kf8eygESZ%2FUyv7SKgsbSchoO84pjulrOK%2Bdg1gGNHnmJlDeD1x99yynkzg29HuRhZXH8VkWex21wsdd39tG%2Fc1Kqce08t%2Fr81HOse6Wy7mZonsX%2FoD7Fw93XXezAsgXV6v4u2zo0epQI7wyNEfhm0YuOH3AeEHwG5uBVaUuE08wSSgiuLj%2FRUo6DjYxpI4HMSk1C6FzYU0lRbM%2Fvb49XVjmUwVoc4wuOpgg%2BPWDiAUVQSXi%2Fmmcu%2FyUWgasDqJXknRzOYqmTFfRI96xRWJXOE0cV4WBlNi7ALL6c2XyIHfZ1zYwAQaJQV8G4PNW%2FSmC%2FaUOyMp9uywIGjl5C8B4o9Xvo1jlSIb1mz0q4%2FNY9VMM%2B9osAGOqUBpEJVosDnI%2Fv18tRLB77%2BeZ%2BQ8hYC8znzP3zehXeM1YKPTvWk5KhTvYsis3iP03MhRGKmaU1%2BhAMBHFXluJOt1HGPpuZdnl%2Bd2yl80dMqS2WzPfXC8UchZWnrdEMAcMZr681wqpHBZTPBDrMpq8W9GXgGA5dQ6hXbzMQQ%2FggqK39XqQxUFKy1d%2FpaInVWtHqesNkJJ7dbpCXHxmV3ZsfjEUdfH3GA&X-Amz-Signature=aa24d7b7532f7145c3a92ad7591c8d0127807a2f4b1c6ab66210339404549f95&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNFWEDA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTEg%2B3CEBByIATrNJlH7wbRkTybKnsWvlt83EfqLaL0QIgLW%2BW5Ul0KnsbvuMAKa0L6980bMDN5HTirOonZaAviz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkDSzhzFX%2FEtTJHWyrcA%2BtarUAjf9P6TACATHBMW%2FIiY8witFaok8MlW2yGyveBGx2pYtGR3kcezcDfYIkZdHOmHcCAhw2GrSjFT32WISIVnNEKn2%2FdNXjVPOwSKHgQ7T5441mQdhJ8yux801wDylZEzTNnuxVg2jCAN2Npk1Or2Z3Fc3%2BvS476PHAgntq5bYueHNY4js8ECnzRqi%2F3QKbp7%2B9JGYj8Q4j2J64hMT1eZJKna2y5EZSNL74sV4tXrihdnSqrNBth3Ldv8OISUwPAjxnHcrE2uXiIz%2F2Kf8eygESZ%2FUyv7SKgsbSchoO84pjulrOK%2Bdg1gGNHnmJlDeD1x99yynkzg29HuRhZXH8VkWex21wsdd39tG%2Fc1Kqce08t%2Fr81HOse6Wy7mZonsX%2FoD7Fw93XXezAsgXV6v4u2zo0epQI7wyNEfhm0YuOH3AeEHwG5uBVaUuE08wSSgiuLj%2FRUo6DjYxpI4HMSk1C6FzYU0lRbM%2Fvb49XVjmUwVoc4wuOpgg%2BPWDiAUVQSXi%2Fmmcu%2FyUWgasDqJXknRzOYqmTFfRI96xRWJXOE0cV4WBlNi7ALL6c2XyIHfZ1zYwAQaJQV8G4PNW%2FSmC%2FaUOyMp9uywIGjl5C8B4o9Xvo1jlSIb1mz0q4%2FNY9VMM%2B9osAGOqUBpEJVosDnI%2Fv18tRLB77%2BeZ%2BQ8hYC8znzP3zehXeM1YKPTvWk5KhTvYsis3iP03MhRGKmaU1%2BhAMBHFXluJOt1HGPpuZdnl%2Bd2yl80dMqS2WzPfXC8UchZWnrdEMAcMZr681wqpHBZTPBDrMpq8W9GXgGA5dQ6hXbzMQQ%2FggqK39XqQxUFKy1d%2FpaInVWtHqesNkJJ7dbpCXHxmV3ZsfjEUdfH3GA&X-Amz-Signature=d213bb2eb36872a32642434fb82094341a8a5fb39e17e5c6bfb3542dbb463ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNFWEDA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTEg%2B3CEBByIATrNJlH7wbRkTybKnsWvlt83EfqLaL0QIgLW%2BW5Ul0KnsbvuMAKa0L6980bMDN5HTirOonZaAviz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkDSzhzFX%2FEtTJHWyrcA%2BtarUAjf9P6TACATHBMW%2FIiY8witFaok8MlW2yGyveBGx2pYtGR3kcezcDfYIkZdHOmHcCAhw2GrSjFT32WISIVnNEKn2%2FdNXjVPOwSKHgQ7T5441mQdhJ8yux801wDylZEzTNnuxVg2jCAN2Npk1Or2Z3Fc3%2BvS476PHAgntq5bYueHNY4js8ECnzRqi%2F3QKbp7%2B9JGYj8Q4j2J64hMT1eZJKna2y5EZSNL74sV4tXrihdnSqrNBth3Ldv8OISUwPAjxnHcrE2uXiIz%2F2Kf8eygESZ%2FUyv7SKgsbSchoO84pjulrOK%2Bdg1gGNHnmJlDeD1x99yynkzg29HuRhZXH8VkWex21wsdd39tG%2Fc1Kqce08t%2Fr81HOse6Wy7mZonsX%2FoD7Fw93XXezAsgXV6v4u2zo0epQI7wyNEfhm0YuOH3AeEHwG5uBVaUuE08wSSgiuLj%2FRUo6DjYxpI4HMSk1C6FzYU0lRbM%2Fvb49XVjmUwVoc4wuOpgg%2BPWDiAUVQSXi%2Fmmcu%2FyUWgasDqJXknRzOYqmTFfRI96xRWJXOE0cV4WBlNi7ALL6c2XyIHfZ1zYwAQaJQV8G4PNW%2FSmC%2FaUOyMp9uywIGjl5C8B4o9Xvo1jlSIb1mz0q4%2FNY9VMM%2B9osAGOqUBpEJVosDnI%2Fv18tRLB77%2BeZ%2BQ8hYC8znzP3zehXeM1YKPTvWk5KhTvYsis3iP03MhRGKmaU1%2BhAMBHFXluJOt1HGPpuZdnl%2Bd2yl80dMqS2WzPfXC8UchZWnrdEMAcMZr681wqpHBZTPBDrMpq8W9GXgGA5dQ6hXbzMQQ%2FggqK39XqQxUFKy1d%2FpaInVWtHqesNkJJ7dbpCXHxmV3ZsfjEUdfH3GA&X-Amz-Signature=5f1824004547a318a602e8fbc453062b3d5b75aa7ec54ebcb2c1d4285876c45e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNFWEDA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTEg%2B3CEBByIATrNJlH7wbRkTybKnsWvlt83EfqLaL0QIgLW%2BW5Ul0KnsbvuMAKa0L6980bMDN5HTirOonZaAviz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkDSzhzFX%2FEtTJHWyrcA%2BtarUAjf9P6TACATHBMW%2FIiY8witFaok8MlW2yGyveBGx2pYtGR3kcezcDfYIkZdHOmHcCAhw2GrSjFT32WISIVnNEKn2%2FdNXjVPOwSKHgQ7T5441mQdhJ8yux801wDylZEzTNnuxVg2jCAN2Npk1Or2Z3Fc3%2BvS476PHAgntq5bYueHNY4js8ECnzRqi%2F3QKbp7%2B9JGYj8Q4j2J64hMT1eZJKna2y5EZSNL74sV4tXrihdnSqrNBth3Ldv8OISUwPAjxnHcrE2uXiIz%2F2Kf8eygESZ%2FUyv7SKgsbSchoO84pjulrOK%2Bdg1gGNHnmJlDeD1x99yynkzg29HuRhZXH8VkWex21wsdd39tG%2Fc1Kqce08t%2Fr81HOse6Wy7mZonsX%2FoD7Fw93XXezAsgXV6v4u2zo0epQI7wyNEfhm0YuOH3AeEHwG5uBVaUuE08wSSgiuLj%2FRUo6DjYxpI4HMSk1C6FzYU0lRbM%2Fvb49XVjmUwVoc4wuOpgg%2BPWDiAUVQSXi%2Fmmcu%2FyUWgasDqJXknRzOYqmTFfRI96xRWJXOE0cV4WBlNi7ALL6c2XyIHfZ1zYwAQaJQV8G4PNW%2FSmC%2FaUOyMp9uywIGjl5C8B4o9Xvo1jlSIb1mz0q4%2FNY9VMM%2B9osAGOqUBpEJVosDnI%2Fv18tRLB77%2BeZ%2BQ8hYC8znzP3zehXeM1YKPTvWk5KhTvYsis3iP03MhRGKmaU1%2BhAMBHFXluJOt1HGPpuZdnl%2Bd2yl80dMqS2WzPfXC8UchZWnrdEMAcMZr681wqpHBZTPBDrMpq8W9GXgGA5dQ6hXbzMQQ%2FggqK39XqQxUFKy1d%2FpaInVWtHqesNkJJ7dbpCXHxmV3ZsfjEUdfH3GA&X-Amz-Signature=00b7b48c0af90443cb3eee5fd8d92d2d15597ab0e66b44de0d84a84052b6eae9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNFWEDA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCTEg%2B3CEBByIATrNJlH7wbRkTybKnsWvlt83EfqLaL0QIgLW%2BW5Ul0KnsbvuMAKa0L6980bMDN5HTirOonZaAviz8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkDSzhzFX%2FEtTJHWyrcA%2BtarUAjf9P6TACATHBMW%2FIiY8witFaok8MlW2yGyveBGx2pYtGR3kcezcDfYIkZdHOmHcCAhw2GrSjFT32WISIVnNEKn2%2FdNXjVPOwSKHgQ7T5441mQdhJ8yux801wDylZEzTNnuxVg2jCAN2Npk1Or2Z3Fc3%2BvS476PHAgntq5bYueHNY4js8ECnzRqi%2F3QKbp7%2B9JGYj8Q4j2J64hMT1eZJKna2y5EZSNL74sV4tXrihdnSqrNBth3Ldv8OISUwPAjxnHcrE2uXiIz%2F2Kf8eygESZ%2FUyv7SKgsbSchoO84pjulrOK%2Bdg1gGNHnmJlDeD1x99yynkzg29HuRhZXH8VkWex21wsdd39tG%2Fc1Kqce08t%2Fr81HOse6Wy7mZonsX%2FoD7Fw93XXezAsgXV6v4u2zo0epQI7wyNEfhm0YuOH3AeEHwG5uBVaUuE08wSSgiuLj%2FRUo6DjYxpI4HMSk1C6FzYU0lRbM%2Fvb49XVjmUwVoc4wuOpgg%2BPWDiAUVQSXi%2Fmmcu%2FyUWgasDqJXknRzOYqmTFfRI96xRWJXOE0cV4WBlNi7ALL6c2XyIHfZ1zYwAQaJQV8G4PNW%2FSmC%2FaUOyMp9uywIGjl5C8B4o9Xvo1jlSIb1mz0q4%2FNY9VMM%2B9osAGOqUBpEJVosDnI%2Fv18tRLB77%2BeZ%2BQ8hYC8znzP3zehXeM1YKPTvWk5KhTvYsis3iP03MhRGKmaU1%2BhAMBHFXluJOt1HGPpuZdnl%2Bd2yl80dMqS2WzPfXC8UchZWnrdEMAcMZr681wqpHBZTPBDrMpq8W9GXgGA5dQ6hXbzMQQ%2FggqK39XqQxUFKy1d%2FpaInVWtHqesNkJJ7dbpCXHxmV3ZsfjEUdfH3GA&X-Amz-Signature=82680a59c8e177748ef248079f829c1e536df840320bf6e966f18dc7519bc1f2&X-Amz-SignedHeaders=host&x-id=GetObject)
