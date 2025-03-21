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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAKBBMA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE7VoPkyzbT5xybvBNp2TTdvFftfQsX0RjdMw9yYf4cVAiASUQn3PUap5FOm4xqGIiNomHSgOTa4ACc3eDD2A5MkpiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ENaM9E0wab7iFKgKtwDFUMJHnrLdA3Epxsh3%2FDzshCzQb0QA%2BBBVVDKUMoiCqn6cCWfY523t1bRkmRHl7ugSC7CE0RjKUo70LZyHPbgOymfZyIy4P1EgGX1XXee08xdC3BDfJZwIGTLZ%2FEelwABDvx4nDzyT85n02kK4fPb%2BTopqECtm4OnYQPy8tX7xQM%2B0KiPZhfaehEcocG%2F4PfdwWc7p6qX2KDgagcR%2BT62wv87ewe9sfWbFnQILy3IZ4dk6LX8VE4q6k0kULk3thvzmkoTfv5s3Bwx3c2zvZiVl50vwOAKJToX4kWhFCKRy22siemE%2BFrJImjBmgaPsijobRq2%2FY%2FaJhbf1hf46Eds%2Br7o5xdGvZMfxZif7Ne7tVukP1UOkj9N8tp%2F6rDxEz3VWWW9Y5WJ9szkFXzSBz7gOC%2B3YSxzvI18KOEgS0dhNLFoeZ%2FDiec%2BXvhGa4qIy7JsgKZ0tumpS44PH8p%2Bh39vMOGhyv9KDdpzYopvFghyrtUSqMztLlFBG3%2BNMxb6hBMt4mNzKIcq2ShgY%2B7LSpd27upwaxgF7%2BglIaIgcTLaZEPwapfYN96Ahd%2BtfupY%2F40bIqym1DJnsw%2FsXBL8SdBNJ94CFhppAHkMwyikyEXHKI7AI4u7hB8JGt8KUmAwvfrzvgY6pgGzO1hgnkr3uD05p5gpUm%2BM%2BzoxOOIKilIi4eZqhCMH72odZVE07NJuTKRZmkoUc%2FAGDc4ZIfKVXSPRnMoM9n%2B%2FdqPIomkQ%2BezQ7aKcqUqiA09VHsPIVPfEOPiGvJu87Eac71Rsqe7NAD%2FWUPa91oMx4ugLt6yWqdTzx1l8uQwJCIBXl9J34%2BiIziHTUhh%2BpPRTyLnUm2I9lkPTl1ND6%2Flq96v3%2BVpT&X-Amz-Signature=9af1c117e6eda694a15e3a9a5d3729a4f702aa32049bd85e5ed9103a99a72146&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAKBBMA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE7VoPkyzbT5xybvBNp2TTdvFftfQsX0RjdMw9yYf4cVAiASUQn3PUap5FOm4xqGIiNomHSgOTa4ACc3eDD2A5MkpiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ENaM9E0wab7iFKgKtwDFUMJHnrLdA3Epxsh3%2FDzshCzQb0QA%2BBBVVDKUMoiCqn6cCWfY523t1bRkmRHl7ugSC7CE0RjKUo70LZyHPbgOymfZyIy4P1EgGX1XXee08xdC3BDfJZwIGTLZ%2FEelwABDvx4nDzyT85n02kK4fPb%2BTopqECtm4OnYQPy8tX7xQM%2B0KiPZhfaehEcocG%2F4PfdwWc7p6qX2KDgagcR%2BT62wv87ewe9sfWbFnQILy3IZ4dk6LX8VE4q6k0kULk3thvzmkoTfv5s3Bwx3c2zvZiVl50vwOAKJToX4kWhFCKRy22siemE%2BFrJImjBmgaPsijobRq2%2FY%2FaJhbf1hf46Eds%2Br7o5xdGvZMfxZif7Ne7tVukP1UOkj9N8tp%2F6rDxEz3VWWW9Y5WJ9szkFXzSBz7gOC%2B3YSxzvI18KOEgS0dhNLFoeZ%2FDiec%2BXvhGa4qIy7JsgKZ0tumpS44PH8p%2Bh39vMOGhyv9KDdpzYopvFghyrtUSqMztLlFBG3%2BNMxb6hBMt4mNzKIcq2ShgY%2B7LSpd27upwaxgF7%2BglIaIgcTLaZEPwapfYN96Ahd%2BtfupY%2F40bIqym1DJnsw%2FsXBL8SdBNJ94CFhppAHkMwyikyEXHKI7AI4u7hB8JGt8KUmAwvfrzvgY6pgGzO1hgnkr3uD05p5gpUm%2BM%2BzoxOOIKilIi4eZqhCMH72odZVE07NJuTKRZmkoUc%2FAGDc4ZIfKVXSPRnMoM9n%2B%2FdqPIomkQ%2BezQ7aKcqUqiA09VHsPIVPfEOPiGvJu87Eac71Rsqe7NAD%2FWUPa91oMx4ugLt6yWqdTzx1l8uQwJCIBXl9J34%2BiIziHTUhh%2BpPRTyLnUm2I9lkPTl1ND6%2Flq96v3%2BVpT&X-Amz-Signature=9d8ed6cfc8f8ce86ba9136e86a835f5316c14e2b52d7d2ddd8f11039fd24667f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAKBBMA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE7VoPkyzbT5xybvBNp2TTdvFftfQsX0RjdMw9yYf4cVAiASUQn3PUap5FOm4xqGIiNomHSgOTa4ACc3eDD2A5MkpiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ENaM9E0wab7iFKgKtwDFUMJHnrLdA3Epxsh3%2FDzshCzQb0QA%2BBBVVDKUMoiCqn6cCWfY523t1bRkmRHl7ugSC7CE0RjKUo70LZyHPbgOymfZyIy4P1EgGX1XXee08xdC3BDfJZwIGTLZ%2FEelwABDvx4nDzyT85n02kK4fPb%2BTopqECtm4OnYQPy8tX7xQM%2B0KiPZhfaehEcocG%2F4PfdwWc7p6qX2KDgagcR%2BT62wv87ewe9sfWbFnQILy3IZ4dk6LX8VE4q6k0kULk3thvzmkoTfv5s3Bwx3c2zvZiVl50vwOAKJToX4kWhFCKRy22siemE%2BFrJImjBmgaPsijobRq2%2FY%2FaJhbf1hf46Eds%2Br7o5xdGvZMfxZif7Ne7tVukP1UOkj9N8tp%2F6rDxEz3VWWW9Y5WJ9szkFXzSBz7gOC%2B3YSxzvI18KOEgS0dhNLFoeZ%2FDiec%2BXvhGa4qIy7JsgKZ0tumpS44PH8p%2Bh39vMOGhyv9KDdpzYopvFghyrtUSqMztLlFBG3%2BNMxb6hBMt4mNzKIcq2ShgY%2B7LSpd27upwaxgF7%2BglIaIgcTLaZEPwapfYN96Ahd%2BtfupY%2F40bIqym1DJnsw%2FsXBL8SdBNJ94CFhppAHkMwyikyEXHKI7AI4u7hB8JGt8KUmAwvfrzvgY6pgGzO1hgnkr3uD05p5gpUm%2BM%2BzoxOOIKilIi4eZqhCMH72odZVE07NJuTKRZmkoUc%2FAGDc4ZIfKVXSPRnMoM9n%2B%2FdqPIomkQ%2BezQ7aKcqUqiA09VHsPIVPfEOPiGvJu87Eac71Rsqe7NAD%2FWUPa91oMx4ugLt6yWqdTzx1l8uQwJCIBXl9J34%2BiIziHTUhh%2BpPRTyLnUm2I9lkPTl1ND6%2Flq96v3%2BVpT&X-Amz-Signature=2804b91b62358b6786ff7f0d429308bb6db27641414247ac6da4b2d79eb14380&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAKBBMA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE7VoPkyzbT5xybvBNp2TTdvFftfQsX0RjdMw9yYf4cVAiASUQn3PUap5FOm4xqGIiNomHSgOTa4ACc3eDD2A5MkpiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ENaM9E0wab7iFKgKtwDFUMJHnrLdA3Epxsh3%2FDzshCzQb0QA%2BBBVVDKUMoiCqn6cCWfY523t1bRkmRHl7ugSC7CE0RjKUo70LZyHPbgOymfZyIy4P1EgGX1XXee08xdC3BDfJZwIGTLZ%2FEelwABDvx4nDzyT85n02kK4fPb%2BTopqECtm4OnYQPy8tX7xQM%2B0KiPZhfaehEcocG%2F4PfdwWc7p6qX2KDgagcR%2BT62wv87ewe9sfWbFnQILy3IZ4dk6LX8VE4q6k0kULk3thvzmkoTfv5s3Bwx3c2zvZiVl50vwOAKJToX4kWhFCKRy22siemE%2BFrJImjBmgaPsijobRq2%2FY%2FaJhbf1hf46Eds%2Br7o5xdGvZMfxZif7Ne7tVukP1UOkj9N8tp%2F6rDxEz3VWWW9Y5WJ9szkFXzSBz7gOC%2B3YSxzvI18KOEgS0dhNLFoeZ%2FDiec%2BXvhGa4qIy7JsgKZ0tumpS44PH8p%2Bh39vMOGhyv9KDdpzYopvFghyrtUSqMztLlFBG3%2BNMxb6hBMt4mNzKIcq2ShgY%2B7LSpd27upwaxgF7%2BglIaIgcTLaZEPwapfYN96Ahd%2BtfupY%2F40bIqym1DJnsw%2FsXBL8SdBNJ94CFhppAHkMwyikyEXHKI7AI4u7hB8JGt8KUmAwvfrzvgY6pgGzO1hgnkr3uD05p5gpUm%2BM%2BzoxOOIKilIi4eZqhCMH72odZVE07NJuTKRZmkoUc%2FAGDc4ZIfKVXSPRnMoM9n%2B%2FdqPIomkQ%2BezQ7aKcqUqiA09VHsPIVPfEOPiGvJu87Eac71Rsqe7NAD%2FWUPa91oMx4ugLt6yWqdTzx1l8uQwJCIBXl9J34%2BiIziHTUhh%2BpPRTyLnUm2I9lkPTl1ND6%2Flq96v3%2BVpT&X-Amz-Signature=b678d0c4145d642e3ab8a23ef066a32d4af1b920e92cbab0f8d0314635399939&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAKBBMA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE7VoPkyzbT5xybvBNp2TTdvFftfQsX0RjdMw9yYf4cVAiASUQn3PUap5FOm4xqGIiNomHSgOTa4ACc3eDD2A5MkpiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ENaM9E0wab7iFKgKtwDFUMJHnrLdA3Epxsh3%2FDzshCzQb0QA%2BBBVVDKUMoiCqn6cCWfY523t1bRkmRHl7ugSC7CE0RjKUo70LZyHPbgOymfZyIy4P1EgGX1XXee08xdC3BDfJZwIGTLZ%2FEelwABDvx4nDzyT85n02kK4fPb%2BTopqECtm4OnYQPy8tX7xQM%2B0KiPZhfaehEcocG%2F4PfdwWc7p6qX2KDgagcR%2BT62wv87ewe9sfWbFnQILy3IZ4dk6LX8VE4q6k0kULk3thvzmkoTfv5s3Bwx3c2zvZiVl50vwOAKJToX4kWhFCKRy22siemE%2BFrJImjBmgaPsijobRq2%2FY%2FaJhbf1hf46Eds%2Br7o5xdGvZMfxZif7Ne7tVukP1UOkj9N8tp%2F6rDxEz3VWWW9Y5WJ9szkFXzSBz7gOC%2B3YSxzvI18KOEgS0dhNLFoeZ%2FDiec%2BXvhGa4qIy7JsgKZ0tumpS44PH8p%2Bh39vMOGhyv9KDdpzYopvFghyrtUSqMztLlFBG3%2BNMxb6hBMt4mNzKIcq2ShgY%2B7LSpd27upwaxgF7%2BglIaIgcTLaZEPwapfYN96Ahd%2BtfupY%2F40bIqym1DJnsw%2FsXBL8SdBNJ94CFhppAHkMwyikyEXHKI7AI4u7hB8JGt8KUmAwvfrzvgY6pgGzO1hgnkr3uD05p5gpUm%2BM%2BzoxOOIKilIi4eZqhCMH72odZVE07NJuTKRZmkoUc%2FAGDc4ZIfKVXSPRnMoM9n%2B%2FdqPIomkQ%2BezQ7aKcqUqiA09VHsPIVPfEOPiGvJu87Eac71Rsqe7NAD%2FWUPa91oMx4ugLt6yWqdTzx1l8uQwJCIBXl9J34%2BiIziHTUhh%2BpPRTyLnUm2I9lkPTl1ND6%2Flq96v3%2BVpT&X-Amz-Signature=f3f54658550448327676f768b068f2c99aaeb64ee150c53563a86c87814c8206&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAKBBMA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE7VoPkyzbT5xybvBNp2TTdvFftfQsX0RjdMw9yYf4cVAiASUQn3PUap5FOm4xqGIiNomHSgOTa4ACc3eDD2A5MkpiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ENaM9E0wab7iFKgKtwDFUMJHnrLdA3Epxsh3%2FDzshCzQb0QA%2BBBVVDKUMoiCqn6cCWfY523t1bRkmRHl7ugSC7CE0RjKUo70LZyHPbgOymfZyIy4P1EgGX1XXee08xdC3BDfJZwIGTLZ%2FEelwABDvx4nDzyT85n02kK4fPb%2BTopqECtm4OnYQPy8tX7xQM%2B0KiPZhfaehEcocG%2F4PfdwWc7p6qX2KDgagcR%2BT62wv87ewe9sfWbFnQILy3IZ4dk6LX8VE4q6k0kULk3thvzmkoTfv5s3Bwx3c2zvZiVl50vwOAKJToX4kWhFCKRy22siemE%2BFrJImjBmgaPsijobRq2%2FY%2FaJhbf1hf46Eds%2Br7o5xdGvZMfxZif7Ne7tVukP1UOkj9N8tp%2F6rDxEz3VWWW9Y5WJ9szkFXzSBz7gOC%2B3YSxzvI18KOEgS0dhNLFoeZ%2FDiec%2BXvhGa4qIy7JsgKZ0tumpS44PH8p%2Bh39vMOGhyv9KDdpzYopvFghyrtUSqMztLlFBG3%2BNMxb6hBMt4mNzKIcq2ShgY%2B7LSpd27upwaxgF7%2BglIaIgcTLaZEPwapfYN96Ahd%2BtfupY%2F40bIqym1DJnsw%2FsXBL8SdBNJ94CFhppAHkMwyikyEXHKI7AI4u7hB8JGt8KUmAwvfrzvgY6pgGzO1hgnkr3uD05p5gpUm%2BM%2BzoxOOIKilIi4eZqhCMH72odZVE07NJuTKRZmkoUc%2FAGDc4ZIfKVXSPRnMoM9n%2B%2FdqPIomkQ%2BezQ7aKcqUqiA09VHsPIVPfEOPiGvJu87Eac71Rsqe7NAD%2FWUPa91oMx4ugLt6yWqdTzx1l8uQwJCIBXl9J34%2BiIziHTUhh%2BpPRTyLnUm2I9lkPTl1ND6%2Flq96v3%2BVpT&X-Amz-Signature=4a5d141150e9db246e87192d857e2637a71a736514d70f99a8bc063bc1a8a668&X-Amz-SignedHeaders=host&x-id=GetObject)
