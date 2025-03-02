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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNEBKJA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXTyGNN4JqD9%2BXABgcUh1s5fN53oSBv7rHeQT6D64RJAiEAxO2lbWpGTEnV5l3GsC2elODpiJrBql32LN8uLD5PqvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwvEvrLwYKw0UHAXyrcAwEyGU26Q2clFJnkozsUNAiF9SNH4i6ClaUzQ6QMKxPBq%2BTic9C1jnTJqmvJpS4ONNH9gDmoiQdMzWvT%2B0PhB9cAlvqmBWyxw7UMT3pbxZDzD25fDfQFsIx99lLLAvHSIz8xGXoykzisvmBjE%2FVAvI70SFRTSV40pu1CZtnj%2FSxpcax7NvgplNm2PjPNyw6X31M6DxzJF2chYE8TetJm4myv0lMeKCr%2FJ8koYvJ6kqbIxcYfAUxBywznfHZ55TBBbQuYal3OvidxMD1JaXrYgKAURNxKVm9bzKnMm8aoyq6n0HA1WkyEAsyYlv6JUHeiucyn5JJISHmjBYHNPClsjQih8jmB50XovYaZw%2BVoeBfnDa6yxYwAPKScAL4bF%2BNjtDRiueiaR6P%2BAUgNGTfLCUVklpCU2DOKg6OswYO0f%2FHMZeimrc%2F8COCTw4dZqmJ%2BRqw0RaIW7JkRwNx1uqnSEFa2LIYYf4jfn1HINrwogvMSP5aPluEBPcTxEy4LnXiXxYzUU0%2B4OTdKEqOJcnAdpftn%2FovMmXoLubXQr%2F4iF5uM9aIWjV1d8veQjA6YIeykgiIzyJ69Ude4e%2BZYJSzirGjrQWOzqwdLyJsvyiSg3wqNgxZrFypiD5JinHkHMKO8l74GOqUB6UTkzaBa%2BCDZlK3A4QPmRRanF554RLl2cjteRoqlUKJ0052CyvoPWm6KG0WRCtJjfzhP1566EBczYhovWvTWdzAbHjrd5CZ7YAAmPut%2BPNCVxsHP2OVO2aioCdGxnp2y6RW%2FQC6SHPMLjQBW3NCer8kCFNUBERJFvbKaMk9KrpGTx2MLnr4CxOTkm3uMgaD%2Frm5SMaZ9Z9WLmtqRExZ1v6wcTaAD&X-Amz-Signature=bec0abd07c839c621c6f5dff9ec794de7f67f4c00af31f0ea285d1c3f1866a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNEBKJA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXTyGNN4JqD9%2BXABgcUh1s5fN53oSBv7rHeQT6D64RJAiEAxO2lbWpGTEnV5l3GsC2elODpiJrBql32LN8uLD5PqvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwvEvrLwYKw0UHAXyrcAwEyGU26Q2clFJnkozsUNAiF9SNH4i6ClaUzQ6QMKxPBq%2BTic9C1jnTJqmvJpS4ONNH9gDmoiQdMzWvT%2B0PhB9cAlvqmBWyxw7UMT3pbxZDzD25fDfQFsIx99lLLAvHSIz8xGXoykzisvmBjE%2FVAvI70SFRTSV40pu1CZtnj%2FSxpcax7NvgplNm2PjPNyw6X31M6DxzJF2chYE8TetJm4myv0lMeKCr%2FJ8koYvJ6kqbIxcYfAUxBywznfHZ55TBBbQuYal3OvidxMD1JaXrYgKAURNxKVm9bzKnMm8aoyq6n0HA1WkyEAsyYlv6JUHeiucyn5JJISHmjBYHNPClsjQih8jmB50XovYaZw%2BVoeBfnDa6yxYwAPKScAL4bF%2BNjtDRiueiaR6P%2BAUgNGTfLCUVklpCU2DOKg6OswYO0f%2FHMZeimrc%2F8COCTw4dZqmJ%2BRqw0RaIW7JkRwNx1uqnSEFa2LIYYf4jfn1HINrwogvMSP5aPluEBPcTxEy4LnXiXxYzUU0%2B4OTdKEqOJcnAdpftn%2FovMmXoLubXQr%2F4iF5uM9aIWjV1d8veQjA6YIeykgiIzyJ69Ude4e%2BZYJSzirGjrQWOzqwdLyJsvyiSg3wqNgxZrFypiD5JinHkHMKO8l74GOqUB6UTkzaBa%2BCDZlK3A4QPmRRanF554RLl2cjteRoqlUKJ0052CyvoPWm6KG0WRCtJjfzhP1566EBczYhovWvTWdzAbHjrd5CZ7YAAmPut%2BPNCVxsHP2OVO2aioCdGxnp2y6RW%2FQC6SHPMLjQBW3NCer8kCFNUBERJFvbKaMk9KrpGTx2MLnr4CxOTkm3uMgaD%2Frm5SMaZ9Z9WLmtqRExZ1v6wcTaAD&X-Amz-Signature=75ef4fe705719d2e0746232bbd865b314add59ede7900b701a97ba9b2f895add&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNEBKJA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXTyGNN4JqD9%2BXABgcUh1s5fN53oSBv7rHeQT6D64RJAiEAxO2lbWpGTEnV5l3GsC2elODpiJrBql32LN8uLD5PqvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwvEvrLwYKw0UHAXyrcAwEyGU26Q2clFJnkozsUNAiF9SNH4i6ClaUzQ6QMKxPBq%2BTic9C1jnTJqmvJpS4ONNH9gDmoiQdMzWvT%2B0PhB9cAlvqmBWyxw7UMT3pbxZDzD25fDfQFsIx99lLLAvHSIz8xGXoykzisvmBjE%2FVAvI70SFRTSV40pu1CZtnj%2FSxpcax7NvgplNm2PjPNyw6X31M6DxzJF2chYE8TetJm4myv0lMeKCr%2FJ8koYvJ6kqbIxcYfAUxBywznfHZ55TBBbQuYal3OvidxMD1JaXrYgKAURNxKVm9bzKnMm8aoyq6n0HA1WkyEAsyYlv6JUHeiucyn5JJISHmjBYHNPClsjQih8jmB50XovYaZw%2BVoeBfnDa6yxYwAPKScAL4bF%2BNjtDRiueiaR6P%2BAUgNGTfLCUVklpCU2DOKg6OswYO0f%2FHMZeimrc%2F8COCTw4dZqmJ%2BRqw0RaIW7JkRwNx1uqnSEFa2LIYYf4jfn1HINrwogvMSP5aPluEBPcTxEy4LnXiXxYzUU0%2B4OTdKEqOJcnAdpftn%2FovMmXoLubXQr%2F4iF5uM9aIWjV1d8veQjA6YIeykgiIzyJ69Ude4e%2BZYJSzirGjrQWOzqwdLyJsvyiSg3wqNgxZrFypiD5JinHkHMKO8l74GOqUB6UTkzaBa%2BCDZlK3A4QPmRRanF554RLl2cjteRoqlUKJ0052CyvoPWm6KG0WRCtJjfzhP1566EBczYhovWvTWdzAbHjrd5CZ7YAAmPut%2BPNCVxsHP2OVO2aioCdGxnp2y6RW%2FQC6SHPMLjQBW3NCer8kCFNUBERJFvbKaMk9KrpGTx2MLnr4CxOTkm3uMgaD%2Frm5SMaZ9Z9WLmtqRExZ1v6wcTaAD&X-Amz-Signature=3ea66a4f2b9d71ac361dc9517d5b012ca49ec00968754bb918611d4831d1534d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNEBKJA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXTyGNN4JqD9%2BXABgcUh1s5fN53oSBv7rHeQT6D64RJAiEAxO2lbWpGTEnV5l3GsC2elODpiJrBql32LN8uLD5PqvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwvEvrLwYKw0UHAXyrcAwEyGU26Q2clFJnkozsUNAiF9SNH4i6ClaUzQ6QMKxPBq%2BTic9C1jnTJqmvJpS4ONNH9gDmoiQdMzWvT%2B0PhB9cAlvqmBWyxw7UMT3pbxZDzD25fDfQFsIx99lLLAvHSIz8xGXoykzisvmBjE%2FVAvI70SFRTSV40pu1CZtnj%2FSxpcax7NvgplNm2PjPNyw6X31M6DxzJF2chYE8TetJm4myv0lMeKCr%2FJ8koYvJ6kqbIxcYfAUxBywznfHZ55TBBbQuYal3OvidxMD1JaXrYgKAURNxKVm9bzKnMm8aoyq6n0HA1WkyEAsyYlv6JUHeiucyn5JJISHmjBYHNPClsjQih8jmB50XovYaZw%2BVoeBfnDa6yxYwAPKScAL4bF%2BNjtDRiueiaR6P%2BAUgNGTfLCUVklpCU2DOKg6OswYO0f%2FHMZeimrc%2F8COCTw4dZqmJ%2BRqw0RaIW7JkRwNx1uqnSEFa2LIYYf4jfn1HINrwogvMSP5aPluEBPcTxEy4LnXiXxYzUU0%2B4OTdKEqOJcnAdpftn%2FovMmXoLubXQr%2F4iF5uM9aIWjV1d8veQjA6YIeykgiIzyJ69Ude4e%2BZYJSzirGjrQWOzqwdLyJsvyiSg3wqNgxZrFypiD5JinHkHMKO8l74GOqUB6UTkzaBa%2BCDZlK3A4QPmRRanF554RLl2cjteRoqlUKJ0052CyvoPWm6KG0WRCtJjfzhP1566EBczYhovWvTWdzAbHjrd5CZ7YAAmPut%2BPNCVxsHP2OVO2aioCdGxnp2y6RW%2FQC6SHPMLjQBW3NCer8kCFNUBERJFvbKaMk9KrpGTx2MLnr4CxOTkm3uMgaD%2Frm5SMaZ9Z9WLmtqRExZ1v6wcTaAD&X-Amz-Signature=73e326d2e9d943b1e57e820c2fff5afaae01374e7c46d5f0b8ebbaf51af9350b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNEBKJA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXTyGNN4JqD9%2BXABgcUh1s5fN53oSBv7rHeQT6D64RJAiEAxO2lbWpGTEnV5l3GsC2elODpiJrBql32LN8uLD5PqvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwvEvrLwYKw0UHAXyrcAwEyGU26Q2clFJnkozsUNAiF9SNH4i6ClaUzQ6QMKxPBq%2BTic9C1jnTJqmvJpS4ONNH9gDmoiQdMzWvT%2B0PhB9cAlvqmBWyxw7UMT3pbxZDzD25fDfQFsIx99lLLAvHSIz8xGXoykzisvmBjE%2FVAvI70SFRTSV40pu1CZtnj%2FSxpcax7NvgplNm2PjPNyw6X31M6DxzJF2chYE8TetJm4myv0lMeKCr%2FJ8koYvJ6kqbIxcYfAUxBywznfHZ55TBBbQuYal3OvidxMD1JaXrYgKAURNxKVm9bzKnMm8aoyq6n0HA1WkyEAsyYlv6JUHeiucyn5JJISHmjBYHNPClsjQih8jmB50XovYaZw%2BVoeBfnDa6yxYwAPKScAL4bF%2BNjtDRiueiaR6P%2BAUgNGTfLCUVklpCU2DOKg6OswYO0f%2FHMZeimrc%2F8COCTw4dZqmJ%2BRqw0RaIW7JkRwNx1uqnSEFa2LIYYf4jfn1HINrwogvMSP5aPluEBPcTxEy4LnXiXxYzUU0%2B4OTdKEqOJcnAdpftn%2FovMmXoLubXQr%2F4iF5uM9aIWjV1d8veQjA6YIeykgiIzyJ69Ude4e%2BZYJSzirGjrQWOzqwdLyJsvyiSg3wqNgxZrFypiD5JinHkHMKO8l74GOqUB6UTkzaBa%2BCDZlK3A4QPmRRanF554RLl2cjteRoqlUKJ0052CyvoPWm6KG0WRCtJjfzhP1566EBczYhovWvTWdzAbHjrd5CZ7YAAmPut%2BPNCVxsHP2OVO2aioCdGxnp2y6RW%2FQC6SHPMLjQBW3NCer8kCFNUBERJFvbKaMk9KrpGTx2MLnr4CxOTkm3uMgaD%2Frm5SMaZ9Z9WLmtqRExZ1v6wcTaAD&X-Amz-Signature=b68de34f14f54fe3010a27c54d9777369ee58ae6ef96d4d1ced213a7d7cd2e20&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNEBKJA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXTyGNN4JqD9%2BXABgcUh1s5fN53oSBv7rHeQT6D64RJAiEAxO2lbWpGTEnV5l3GsC2elODpiJrBql32LN8uLD5PqvUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwvEvrLwYKw0UHAXyrcAwEyGU26Q2clFJnkozsUNAiF9SNH4i6ClaUzQ6QMKxPBq%2BTic9C1jnTJqmvJpS4ONNH9gDmoiQdMzWvT%2B0PhB9cAlvqmBWyxw7UMT3pbxZDzD25fDfQFsIx99lLLAvHSIz8xGXoykzisvmBjE%2FVAvI70SFRTSV40pu1CZtnj%2FSxpcax7NvgplNm2PjPNyw6X31M6DxzJF2chYE8TetJm4myv0lMeKCr%2FJ8koYvJ6kqbIxcYfAUxBywznfHZ55TBBbQuYal3OvidxMD1JaXrYgKAURNxKVm9bzKnMm8aoyq6n0HA1WkyEAsyYlv6JUHeiucyn5JJISHmjBYHNPClsjQih8jmB50XovYaZw%2BVoeBfnDa6yxYwAPKScAL4bF%2BNjtDRiueiaR6P%2BAUgNGTfLCUVklpCU2DOKg6OswYO0f%2FHMZeimrc%2F8COCTw4dZqmJ%2BRqw0RaIW7JkRwNx1uqnSEFa2LIYYf4jfn1HINrwogvMSP5aPluEBPcTxEy4LnXiXxYzUU0%2B4OTdKEqOJcnAdpftn%2FovMmXoLubXQr%2F4iF5uM9aIWjV1d8veQjA6YIeykgiIzyJ69Ude4e%2BZYJSzirGjrQWOzqwdLyJsvyiSg3wqNgxZrFypiD5JinHkHMKO8l74GOqUB6UTkzaBa%2BCDZlK3A4QPmRRanF554RLl2cjteRoqlUKJ0052CyvoPWm6KG0WRCtJjfzhP1566EBczYhovWvTWdzAbHjrd5CZ7YAAmPut%2BPNCVxsHP2OVO2aioCdGxnp2y6RW%2FQC6SHPMLjQBW3NCer8kCFNUBERJFvbKaMk9KrpGTx2MLnr4CxOTkm3uMgaD%2Frm5SMaZ9Z9WLmtqRExZ1v6wcTaAD&X-Amz-Signature=eb9b32926586861561aeba2543bf4403cdc2c30f8a5b811e972a721154ae1651&X-Amz-SignedHeaders=host&x-id=GetObject)
