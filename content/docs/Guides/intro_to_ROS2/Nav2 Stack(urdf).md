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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBS7K5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiwjVHKoRaV%2Fjg%2F0uNswVUr%2FgoRYPzrXvnJAtgZDIxDAiA3dRfarpzGJf4JydrJDB3V%2BAM4OEWuP2A7B%2F1Ct3Ti7yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvkNjIbVjiFaU7XJLKtwDvt%2FcAPy0WgHPGTgzO%2B8UGbEiqQmpiId%2BdqPFkRi7GdVWd2ife2c1z2kZcAb4twDj3x1t6Jnos1OML8SiVkXtZBA0c4e6s1Nmevun4akoG1ardcSZnfBX6njh%2Bhi4Yn7S9%2FOG4rYpgJqfdHqJrZ%2FdonwWRV3d60oWKQ39ohNhGmjwJuHt%2Fohn%2FRyTIoJMbtSqxTt8CEttVhatnUoeHF0E9B1vrcNGuZQxMGcLk1Mu4%2BSBISSqYGn39w4arCXq31hwTvIxhO9Kf5cxld0W1iJL%2BuipuogKcytDMvvtHOfFkuzqda%2BHYw8Z9g7YwKDMsxbdukl62xS4vMSC7s8GOmgKayFag25j2Bh2NaEWDTOB56QOf7lM1rFVV6IELpE%2F1dZDgp%2BckfY%2B5uD7h%2B47CVHHnXZL0nrWIDE%2FRfrKnRomjOjeSTyroxpvhfY8ZYwbKbxBkFi%2FJXdXWjl3sW%2Br0e9au5wEiHKfiIZGAdhFTOU5kKWOs4Nx3WJ1Q%2BlImpNqfGVt0f6g%2F16hhWLrBmwSvjBDGA1lJ55ZnA%2F%2B1yP34K69dfCAoblZBd48ZGYt4sTqcvinhtyZOamiGe47ST4jGj%2BStThtG3SjRvAfA2prltBJogDVyrV9uYZVEGRIppAwtYaMwAY6pgGFd1rPGCkIX0cZyNQINYs7Yu1S%2F9c1QFWnIuJC0fZu5nKAy31VlSgd49OlIi77%2BhO2%2FicoUJzAB9Cp8jYhJio9nS2KixNQZWh3JLSeGdSQZhG755Iy%2BkDBRjrZj8SWj%2BHdX8Py1%2FDoCFUARch51USpcPnPIjO1U2xYi9fgIPzjUve%2BWfR05kQ32i4L2xgRknNF4rOKSj9rKSOeDZGxEYooiEHH08vp&X-Amz-Signature=23a180b2c6307dc14e14116c2444d4f794b504f10a6c672a151fe7751eacfea3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBS7K5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiwjVHKoRaV%2Fjg%2F0uNswVUr%2FgoRYPzrXvnJAtgZDIxDAiA3dRfarpzGJf4JydrJDB3V%2BAM4OEWuP2A7B%2F1Ct3Ti7yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvkNjIbVjiFaU7XJLKtwDvt%2FcAPy0WgHPGTgzO%2B8UGbEiqQmpiId%2BdqPFkRi7GdVWd2ife2c1z2kZcAb4twDj3x1t6Jnos1OML8SiVkXtZBA0c4e6s1Nmevun4akoG1ardcSZnfBX6njh%2Bhi4Yn7S9%2FOG4rYpgJqfdHqJrZ%2FdonwWRV3d60oWKQ39ohNhGmjwJuHt%2Fohn%2FRyTIoJMbtSqxTt8CEttVhatnUoeHF0E9B1vrcNGuZQxMGcLk1Mu4%2BSBISSqYGn39w4arCXq31hwTvIxhO9Kf5cxld0W1iJL%2BuipuogKcytDMvvtHOfFkuzqda%2BHYw8Z9g7YwKDMsxbdukl62xS4vMSC7s8GOmgKayFag25j2Bh2NaEWDTOB56QOf7lM1rFVV6IELpE%2F1dZDgp%2BckfY%2B5uD7h%2B47CVHHnXZL0nrWIDE%2FRfrKnRomjOjeSTyroxpvhfY8ZYwbKbxBkFi%2FJXdXWjl3sW%2Br0e9au5wEiHKfiIZGAdhFTOU5kKWOs4Nx3WJ1Q%2BlImpNqfGVt0f6g%2F16hhWLrBmwSvjBDGA1lJ55ZnA%2F%2B1yP34K69dfCAoblZBd48ZGYt4sTqcvinhtyZOamiGe47ST4jGj%2BStThtG3SjRvAfA2prltBJogDVyrV9uYZVEGRIppAwtYaMwAY6pgGFd1rPGCkIX0cZyNQINYs7Yu1S%2F9c1QFWnIuJC0fZu5nKAy31VlSgd49OlIi77%2BhO2%2FicoUJzAB9Cp8jYhJio9nS2KixNQZWh3JLSeGdSQZhG755Iy%2BkDBRjrZj8SWj%2BHdX8Py1%2FDoCFUARch51USpcPnPIjO1U2xYi9fgIPzjUve%2BWfR05kQ32i4L2xgRknNF4rOKSj9rKSOeDZGxEYooiEHH08vp&X-Amz-Signature=893c4fffc56f84397dd3b28b79484fd4e8cc0466c3740207480a85bdb73c1776&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBS7K5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiwjVHKoRaV%2Fjg%2F0uNswVUr%2FgoRYPzrXvnJAtgZDIxDAiA3dRfarpzGJf4JydrJDB3V%2BAM4OEWuP2A7B%2F1Ct3Ti7yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvkNjIbVjiFaU7XJLKtwDvt%2FcAPy0WgHPGTgzO%2B8UGbEiqQmpiId%2BdqPFkRi7GdVWd2ife2c1z2kZcAb4twDj3x1t6Jnos1OML8SiVkXtZBA0c4e6s1Nmevun4akoG1ardcSZnfBX6njh%2Bhi4Yn7S9%2FOG4rYpgJqfdHqJrZ%2FdonwWRV3d60oWKQ39ohNhGmjwJuHt%2Fohn%2FRyTIoJMbtSqxTt8CEttVhatnUoeHF0E9B1vrcNGuZQxMGcLk1Mu4%2BSBISSqYGn39w4arCXq31hwTvIxhO9Kf5cxld0W1iJL%2BuipuogKcytDMvvtHOfFkuzqda%2BHYw8Z9g7YwKDMsxbdukl62xS4vMSC7s8GOmgKayFag25j2Bh2NaEWDTOB56QOf7lM1rFVV6IELpE%2F1dZDgp%2BckfY%2B5uD7h%2B47CVHHnXZL0nrWIDE%2FRfrKnRomjOjeSTyroxpvhfY8ZYwbKbxBkFi%2FJXdXWjl3sW%2Br0e9au5wEiHKfiIZGAdhFTOU5kKWOs4Nx3WJ1Q%2BlImpNqfGVt0f6g%2F16hhWLrBmwSvjBDGA1lJ55ZnA%2F%2B1yP34K69dfCAoblZBd48ZGYt4sTqcvinhtyZOamiGe47ST4jGj%2BStThtG3SjRvAfA2prltBJogDVyrV9uYZVEGRIppAwtYaMwAY6pgGFd1rPGCkIX0cZyNQINYs7Yu1S%2F9c1QFWnIuJC0fZu5nKAy31VlSgd49OlIi77%2BhO2%2FicoUJzAB9Cp8jYhJio9nS2KixNQZWh3JLSeGdSQZhG755Iy%2BkDBRjrZj8SWj%2BHdX8Py1%2FDoCFUARch51USpcPnPIjO1U2xYi9fgIPzjUve%2BWfR05kQ32i4L2xgRknNF4rOKSj9rKSOeDZGxEYooiEHH08vp&X-Amz-Signature=7606c2a077e54294f637f72a3f5b63dbb94f8d31f4b16a0e33e2c5943629b2fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBS7K5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiwjVHKoRaV%2Fjg%2F0uNswVUr%2FgoRYPzrXvnJAtgZDIxDAiA3dRfarpzGJf4JydrJDB3V%2BAM4OEWuP2A7B%2F1Ct3Ti7yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvkNjIbVjiFaU7XJLKtwDvt%2FcAPy0WgHPGTgzO%2B8UGbEiqQmpiId%2BdqPFkRi7GdVWd2ife2c1z2kZcAb4twDj3x1t6Jnos1OML8SiVkXtZBA0c4e6s1Nmevun4akoG1ardcSZnfBX6njh%2Bhi4Yn7S9%2FOG4rYpgJqfdHqJrZ%2FdonwWRV3d60oWKQ39ohNhGmjwJuHt%2Fohn%2FRyTIoJMbtSqxTt8CEttVhatnUoeHF0E9B1vrcNGuZQxMGcLk1Mu4%2BSBISSqYGn39w4arCXq31hwTvIxhO9Kf5cxld0W1iJL%2BuipuogKcytDMvvtHOfFkuzqda%2BHYw8Z9g7YwKDMsxbdukl62xS4vMSC7s8GOmgKayFag25j2Bh2NaEWDTOB56QOf7lM1rFVV6IELpE%2F1dZDgp%2BckfY%2B5uD7h%2B47CVHHnXZL0nrWIDE%2FRfrKnRomjOjeSTyroxpvhfY8ZYwbKbxBkFi%2FJXdXWjl3sW%2Br0e9au5wEiHKfiIZGAdhFTOU5kKWOs4Nx3WJ1Q%2BlImpNqfGVt0f6g%2F16hhWLrBmwSvjBDGA1lJ55ZnA%2F%2B1yP34K69dfCAoblZBd48ZGYt4sTqcvinhtyZOamiGe47ST4jGj%2BStThtG3SjRvAfA2prltBJogDVyrV9uYZVEGRIppAwtYaMwAY6pgGFd1rPGCkIX0cZyNQINYs7Yu1S%2F9c1QFWnIuJC0fZu5nKAy31VlSgd49OlIi77%2BhO2%2FicoUJzAB9Cp8jYhJio9nS2KixNQZWh3JLSeGdSQZhG755Iy%2BkDBRjrZj8SWj%2BHdX8Py1%2FDoCFUARch51USpcPnPIjO1U2xYi9fgIPzjUve%2BWfR05kQ32i4L2xgRknNF4rOKSj9rKSOeDZGxEYooiEHH08vp&X-Amz-Signature=c863976f4f168236c765d850de44a744955a7770f7198d93e8d2c6f980e17006&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBS7K5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiwjVHKoRaV%2Fjg%2F0uNswVUr%2FgoRYPzrXvnJAtgZDIxDAiA3dRfarpzGJf4JydrJDB3V%2BAM4OEWuP2A7B%2F1Ct3Ti7yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvkNjIbVjiFaU7XJLKtwDvt%2FcAPy0WgHPGTgzO%2B8UGbEiqQmpiId%2BdqPFkRi7GdVWd2ife2c1z2kZcAb4twDj3x1t6Jnos1OML8SiVkXtZBA0c4e6s1Nmevun4akoG1ardcSZnfBX6njh%2Bhi4Yn7S9%2FOG4rYpgJqfdHqJrZ%2FdonwWRV3d60oWKQ39ohNhGmjwJuHt%2Fohn%2FRyTIoJMbtSqxTt8CEttVhatnUoeHF0E9B1vrcNGuZQxMGcLk1Mu4%2BSBISSqYGn39w4arCXq31hwTvIxhO9Kf5cxld0W1iJL%2BuipuogKcytDMvvtHOfFkuzqda%2BHYw8Z9g7YwKDMsxbdukl62xS4vMSC7s8GOmgKayFag25j2Bh2NaEWDTOB56QOf7lM1rFVV6IELpE%2F1dZDgp%2BckfY%2B5uD7h%2B47CVHHnXZL0nrWIDE%2FRfrKnRomjOjeSTyroxpvhfY8ZYwbKbxBkFi%2FJXdXWjl3sW%2Br0e9au5wEiHKfiIZGAdhFTOU5kKWOs4Nx3WJ1Q%2BlImpNqfGVt0f6g%2F16hhWLrBmwSvjBDGA1lJ55ZnA%2F%2B1yP34K69dfCAoblZBd48ZGYt4sTqcvinhtyZOamiGe47ST4jGj%2BStThtG3SjRvAfA2prltBJogDVyrV9uYZVEGRIppAwtYaMwAY6pgGFd1rPGCkIX0cZyNQINYs7Yu1S%2F9c1QFWnIuJC0fZu5nKAy31VlSgd49OlIi77%2BhO2%2FicoUJzAB9Cp8jYhJio9nS2KixNQZWh3JLSeGdSQZhG755Iy%2BkDBRjrZj8SWj%2BHdX8Py1%2FDoCFUARch51USpcPnPIjO1U2xYi9fgIPzjUve%2BWfR05kQ32i4L2xgRknNF4rOKSj9rKSOeDZGxEYooiEHH08vp&X-Amz-Signature=babc093eb16b5306f69ca3592f496ecfa66faa7ea724178723ade9abc1e7fc24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBS7K5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiwjVHKoRaV%2Fjg%2F0uNswVUr%2FgoRYPzrXvnJAtgZDIxDAiA3dRfarpzGJf4JydrJDB3V%2BAM4OEWuP2A7B%2F1Ct3Ti7yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvkNjIbVjiFaU7XJLKtwDvt%2FcAPy0WgHPGTgzO%2B8UGbEiqQmpiId%2BdqPFkRi7GdVWd2ife2c1z2kZcAb4twDj3x1t6Jnos1OML8SiVkXtZBA0c4e6s1Nmevun4akoG1ardcSZnfBX6njh%2Bhi4Yn7S9%2FOG4rYpgJqfdHqJrZ%2FdonwWRV3d60oWKQ39ohNhGmjwJuHt%2Fohn%2FRyTIoJMbtSqxTt8CEttVhatnUoeHF0E9B1vrcNGuZQxMGcLk1Mu4%2BSBISSqYGn39w4arCXq31hwTvIxhO9Kf5cxld0W1iJL%2BuipuogKcytDMvvtHOfFkuzqda%2BHYw8Z9g7YwKDMsxbdukl62xS4vMSC7s8GOmgKayFag25j2Bh2NaEWDTOB56QOf7lM1rFVV6IELpE%2F1dZDgp%2BckfY%2B5uD7h%2B47CVHHnXZL0nrWIDE%2FRfrKnRomjOjeSTyroxpvhfY8ZYwbKbxBkFi%2FJXdXWjl3sW%2Br0e9au5wEiHKfiIZGAdhFTOU5kKWOs4Nx3WJ1Q%2BlImpNqfGVt0f6g%2F16hhWLrBmwSvjBDGA1lJ55ZnA%2F%2B1yP34K69dfCAoblZBd48ZGYt4sTqcvinhtyZOamiGe47ST4jGj%2BStThtG3SjRvAfA2prltBJogDVyrV9uYZVEGRIppAwtYaMwAY6pgGFd1rPGCkIX0cZyNQINYs7Yu1S%2F9c1QFWnIuJC0fZu5nKAy31VlSgd49OlIi77%2BhO2%2FicoUJzAB9Cp8jYhJio9nS2KixNQZWh3JLSeGdSQZhG755Iy%2BkDBRjrZj8SWj%2BHdX8Py1%2FDoCFUARch51USpcPnPIjO1U2xYi9fgIPzjUve%2BWfR05kQ32i4L2xgRknNF4rOKSj9rKSOeDZGxEYooiEHH08vp&X-Amz-Signature=caed83454ba4667236f4727de10fc881379f840691668dfbe402bc7827f428f6&X-Amz-SignedHeaders=host&x-id=GetObject)
