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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXLSMDJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD6b2k0MkK39tf722nz48FtCvsj8z4VN9lVWaD4UvViWgIgL6qBc7AAcBl9acdGskqjJ3VI5jVqKSVe1U%2B73FrI0Jsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJSxLzJxzhNSGCzlSSrcA7N2R90ob%2Bzcm1GM%2B0Y5jNDkjEDFE5CL9a104x0ZknVX9%2BJl25t%2BPl%2FO%2BPPogB3gU7VWUzQjsljTmZC8kPg%2BvrzVYoomPq0%2BcTu747qq1n7ffLT85EoUQa7CxEGG1j7rVxfgWpEdlMKLFvwH4bmNrrVDGLr2NosNmkU5WPc%2F2bsEboIJQX%2BIxVKqWTAgZkkrwqBsKaxPwUL46CSyfJxB87rHJJdMMG%2Ba6GWqC1WygrSOnWJGVenK8jRbych%2FKflP4%2FaStSsx0Q0qpUTqouuOrnGqDe0M%2B0ABXxxeH04J4RC7E9B5l37NjJktkBE8nzp0PQ4Fi%2FqTM9XgMgVUjSNAplZfkLkBdbYb%2B%2F1tHusmDW0dL5Xy84ql7MThNJX64QaqucC1v4MfxglVsk2yU9%2Bonhv7DwrC5a%2BfFg%2Bhojc10zljWyd%2BZPFTdOPfaSZ%2BkwwGpycGDpCq2ppaFAsTmDHQZOob9bkdkjYDsr0%2Bc4cPLAtyEWjYixYHbgHt387DYpd9g8COkP7uLszm1%2F32Ab6UeSA2tHhxGdmUESFHgVmTxeYeWUeQmAzjfWXg%2BgWrP1ihUJ%2BotEFpQqGTLhseiEE1p0SUXhy8waB6RuU5OWNCacp99w8OVQFy0Eu5aqpaMK%2FG%2BsEGOqUBFV0iwlXvFHUgLNpZW%2FTfotCFxKdIzmztIOLeGfqzrtKM4Kr5OIVhozbD8ch5OZYKXNrkQk%2FRKqYw7CN%2BOynLBNMkIMF5WglzvL0OjVyUUd%2BGjWvULd4sFvgfrr1A%2BTI%2BuagMKY1pHAb5CeILPT%2FS%2B64b9DNsXSSI7h3PiYsvr9vAicTfsBBGMedmjDeJmcBkLyLAqu5E8G9UNoHb%2B6h8BAfyq7q0&X-Amz-Signature=2b9d96d277f8933261af7d07fad18478e2fe6e42968aa4a398a60d0c2171b7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXLSMDJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD6b2k0MkK39tf722nz48FtCvsj8z4VN9lVWaD4UvViWgIgL6qBc7AAcBl9acdGskqjJ3VI5jVqKSVe1U%2B73FrI0Jsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJSxLzJxzhNSGCzlSSrcA7N2R90ob%2Bzcm1GM%2B0Y5jNDkjEDFE5CL9a104x0ZknVX9%2BJl25t%2BPl%2FO%2BPPogB3gU7VWUzQjsljTmZC8kPg%2BvrzVYoomPq0%2BcTu747qq1n7ffLT85EoUQa7CxEGG1j7rVxfgWpEdlMKLFvwH4bmNrrVDGLr2NosNmkU5WPc%2F2bsEboIJQX%2BIxVKqWTAgZkkrwqBsKaxPwUL46CSyfJxB87rHJJdMMG%2Ba6GWqC1WygrSOnWJGVenK8jRbych%2FKflP4%2FaStSsx0Q0qpUTqouuOrnGqDe0M%2B0ABXxxeH04J4RC7E9B5l37NjJktkBE8nzp0PQ4Fi%2FqTM9XgMgVUjSNAplZfkLkBdbYb%2B%2F1tHusmDW0dL5Xy84ql7MThNJX64QaqucC1v4MfxglVsk2yU9%2Bonhv7DwrC5a%2BfFg%2Bhojc10zljWyd%2BZPFTdOPfaSZ%2BkwwGpycGDpCq2ppaFAsTmDHQZOob9bkdkjYDsr0%2Bc4cPLAtyEWjYixYHbgHt387DYpd9g8COkP7uLszm1%2F32Ab6UeSA2tHhxGdmUESFHgVmTxeYeWUeQmAzjfWXg%2BgWrP1ihUJ%2BotEFpQqGTLhseiEE1p0SUXhy8waB6RuU5OWNCacp99w8OVQFy0Eu5aqpaMK%2FG%2BsEGOqUBFV0iwlXvFHUgLNpZW%2FTfotCFxKdIzmztIOLeGfqzrtKM4Kr5OIVhozbD8ch5OZYKXNrkQk%2FRKqYw7CN%2BOynLBNMkIMF5WglzvL0OjVyUUd%2BGjWvULd4sFvgfrr1A%2BTI%2BuagMKY1pHAb5CeILPT%2FS%2B64b9DNsXSSI7h3PiYsvr9vAicTfsBBGMedmjDeJmcBkLyLAqu5E8G9UNoHb%2B6h8BAfyq7q0&X-Amz-Signature=8914f23f5a951d96d40603f78ad51a340f188cff54a43308e2630de5afaa00ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXLSMDJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD6b2k0MkK39tf722nz48FtCvsj8z4VN9lVWaD4UvViWgIgL6qBc7AAcBl9acdGskqjJ3VI5jVqKSVe1U%2B73FrI0Jsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJSxLzJxzhNSGCzlSSrcA7N2R90ob%2Bzcm1GM%2B0Y5jNDkjEDFE5CL9a104x0ZknVX9%2BJl25t%2BPl%2FO%2BPPogB3gU7VWUzQjsljTmZC8kPg%2BvrzVYoomPq0%2BcTu747qq1n7ffLT85EoUQa7CxEGG1j7rVxfgWpEdlMKLFvwH4bmNrrVDGLr2NosNmkU5WPc%2F2bsEboIJQX%2BIxVKqWTAgZkkrwqBsKaxPwUL46CSyfJxB87rHJJdMMG%2Ba6GWqC1WygrSOnWJGVenK8jRbych%2FKflP4%2FaStSsx0Q0qpUTqouuOrnGqDe0M%2B0ABXxxeH04J4RC7E9B5l37NjJktkBE8nzp0PQ4Fi%2FqTM9XgMgVUjSNAplZfkLkBdbYb%2B%2F1tHusmDW0dL5Xy84ql7MThNJX64QaqucC1v4MfxglVsk2yU9%2Bonhv7DwrC5a%2BfFg%2Bhojc10zljWyd%2BZPFTdOPfaSZ%2BkwwGpycGDpCq2ppaFAsTmDHQZOob9bkdkjYDsr0%2Bc4cPLAtyEWjYixYHbgHt387DYpd9g8COkP7uLszm1%2F32Ab6UeSA2tHhxGdmUESFHgVmTxeYeWUeQmAzjfWXg%2BgWrP1ihUJ%2BotEFpQqGTLhseiEE1p0SUXhy8waB6RuU5OWNCacp99w8OVQFy0Eu5aqpaMK%2FG%2BsEGOqUBFV0iwlXvFHUgLNpZW%2FTfotCFxKdIzmztIOLeGfqzrtKM4Kr5OIVhozbD8ch5OZYKXNrkQk%2FRKqYw7CN%2BOynLBNMkIMF5WglzvL0OjVyUUd%2BGjWvULd4sFvgfrr1A%2BTI%2BuagMKY1pHAb5CeILPT%2FS%2B64b9DNsXSSI7h3PiYsvr9vAicTfsBBGMedmjDeJmcBkLyLAqu5E8G9UNoHb%2B6h8BAfyq7q0&X-Amz-Signature=719a9c26936bdd83ee4c73b4e2a83d66c223de02795a61fda57580ae26a0ab96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXLSMDJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD6b2k0MkK39tf722nz48FtCvsj8z4VN9lVWaD4UvViWgIgL6qBc7AAcBl9acdGskqjJ3VI5jVqKSVe1U%2B73FrI0Jsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJSxLzJxzhNSGCzlSSrcA7N2R90ob%2Bzcm1GM%2B0Y5jNDkjEDFE5CL9a104x0ZknVX9%2BJl25t%2BPl%2FO%2BPPogB3gU7VWUzQjsljTmZC8kPg%2BvrzVYoomPq0%2BcTu747qq1n7ffLT85EoUQa7CxEGG1j7rVxfgWpEdlMKLFvwH4bmNrrVDGLr2NosNmkU5WPc%2F2bsEboIJQX%2BIxVKqWTAgZkkrwqBsKaxPwUL46CSyfJxB87rHJJdMMG%2Ba6GWqC1WygrSOnWJGVenK8jRbych%2FKflP4%2FaStSsx0Q0qpUTqouuOrnGqDe0M%2B0ABXxxeH04J4RC7E9B5l37NjJktkBE8nzp0PQ4Fi%2FqTM9XgMgVUjSNAplZfkLkBdbYb%2B%2F1tHusmDW0dL5Xy84ql7MThNJX64QaqucC1v4MfxglVsk2yU9%2Bonhv7DwrC5a%2BfFg%2Bhojc10zljWyd%2BZPFTdOPfaSZ%2BkwwGpycGDpCq2ppaFAsTmDHQZOob9bkdkjYDsr0%2Bc4cPLAtyEWjYixYHbgHt387DYpd9g8COkP7uLszm1%2F32Ab6UeSA2tHhxGdmUESFHgVmTxeYeWUeQmAzjfWXg%2BgWrP1ihUJ%2BotEFpQqGTLhseiEE1p0SUXhy8waB6RuU5OWNCacp99w8OVQFy0Eu5aqpaMK%2FG%2BsEGOqUBFV0iwlXvFHUgLNpZW%2FTfotCFxKdIzmztIOLeGfqzrtKM4Kr5OIVhozbD8ch5OZYKXNrkQk%2FRKqYw7CN%2BOynLBNMkIMF5WglzvL0OjVyUUd%2BGjWvULd4sFvgfrr1A%2BTI%2BuagMKY1pHAb5CeILPT%2FS%2B64b9DNsXSSI7h3PiYsvr9vAicTfsBBGMedmjDeJmcBkLyLAqu5E8G9UNoHb%2B6h8BAfyq7q0&X-Amz-Signature=4525f42366d738bdf70cc3ae1b89d1ff7aafaae9e3caa04846805ce066f50a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXLSMDJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD6b2k0MkK39tf722nz48FtCvsj8z4VN9lVWaD4UvViWgIgL6qBc7AAcBl9acdGskqjJ3VI5jVqKSVe1U%2B73FrI0Jsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJSxLzJxzhNSGCzlSSrcA7N2R90ob%2Bzcm1GM%2B0Y5jNDkjEDFE5CL9a104x0ZknVX9%2BJl25t%2BPl%2FO%2BPPogB3gU7VWUzQjsljTmZC8kPg%2BvrzVYoomPq0%2BcTu747qq1n7ffLT85EoUQa7CxEGG1j7rVxfgWpEdlMKLFvwH4bmNrrVDGLr2NosNmkU5WPc%2F2bsEboIJQX%2BIxVKqWTAgZkkrwqBsKaxPwUL46CSyfJxB87rHJJdMMG%2Ba6GWqC1WygrSOnWJGVenK8jRbych%2FKflP4%2FaStSsx0Q0qpUTqouuOrnGqDe0M%2B0ABXxxeH04J4RC7E9B5l37NjJktkBE8nzp0PQ4Fi%2FqTM9XgMgVUjSNAplZfkLkBdbYb%2B%2F1tHusmDW0dL5Xy84ql7MThNJX64QaqucC1v4MfxglVsk2yU9%2Bonhv7DwrC5a%2BfFg%2Bhojc10zljWyd%2BZPFTdOPfaSZ%2BkwwGpycGDpCq2ppaFAsTmDHQZOob9bkdkjYDsr0%2Bc4cPLAtyEWjYixYHbgHt387DYpd9g8COkP7uLszm1%2F32Ab6UeSA2tHhxGdmUESFHgVmTxeYeWUeQmAzjfWXg%2BgWrP1ihUJ%2BotEFpQqGTLhseiEE1p0SUXhy8waB6RuU5OWNCacp99w8OVQFy0Eu5aqpaMK%2FG%2BsEGOqUBFV0iwlXvFHUgLNpZW%2FTfotCFxKdIzmztIOLeGfqzrtKM4Kr5OIVhozbD8ch5OZYKXNrkQk%2FRKqYw7CN%2BOynLBNMkIMF5WglzvL0OjVyUUd%2BGjWvULd4sFvgfrr1A%2BTI%2BuagMKY1pHAb5CeILPT%2FS%2B64b9DNsXSSI7h3PiYsvr9vAicTfsBBGMedmjDeJmcBkLyLAqu5E8G9UNoHb%2B6h8BAfyq7q0&X-Amz-Signature=b28c2ec6e17d728619d33fe8f614e06a00c974feee6e6cb36057c1428370adae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXLSMDJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD6b2k0MkK39tf722nz48FtCvsj8z4VN9lVWaD4UvViWgIgL6qBc7AAcBl9acdGskqjJ3VI5jVqKSVe1U%2B73FrI0Jsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJSxLzJxzhNSGCzlSSrcA7N2R90ob%2Bzcm1GM%2B0Y5jNDkjEDFE5CL9a104x0ZknVX9%2BJl25t%2BPl%2FO%2BPPogB3gU7VWUzQjsljTmZC8kPg%2BvrzVYoomPq0%2BcTu747qq1n7ffLT85EoUQa7CxEGG1j7rVxfgWpEdlMKLFvwH4bmNrrVDGLr2NosNmkU5WPc%2F2bsEboIJQX%2BIxVKqWTAgZkkrwqBsKaxPwUL46CSyfJxB87rHJJdMMG%2Ba6GWqC1WygrSOnWJGVenK8jRbych%2FKflP4%2FaStSsx0Q0qpUTqouuOrnGqDe0M%2B0ABXxxeH04J4RC7E9B5l37NjJktkBE8nzp0PQ4Fi%2FqTM9XgMgVUjSNAplZfkLkBdbYb%2B%2F1tHusmDW0dL5Xy84ql7MThNJX64QaqucC1v4MfxglVsk2yU9%2Bonhv7DwrC5a%2BfFg%2Bhojc10zljWyd%2BZPFTdOPfaSZ%2BkwwGpycGDpCq2ppaFAsTmDHQZOob9bkdkjYDsr0%2Bc4cPLAtyEWjYixYHbgHt387DYpd9g8COkP7uLszm1%2F32Ab6UeSA2tHhxGdmUESFHgVmTxeYeWUeQmAzjfWXg%2BgWrP1ihUJ%2BotEFpQqGTLhseiEE1p0SUXhy8waB6RuU5OWNCacp99w8OVQFy0Eu5aqpaMK%2FG%2BsEGOqUBFV0iwlXvFHUgLNpZW%2FTfotCFxKdIzmztIOLeGfqzrtKM4Kr5OIVhozbD8ch5OZYKXNrkQk%2FRKqYw7CN%2BOynLBNMkIMF5WglzvL0OjVyUUd%2BGjWvULd4sFvgfrr1A%2BTI%2BuagMKY1pHAb5CeILPT%2FS%2B64b9DNsXSSI7h3PiYsvr9vAicTfsBBGMedmjDeJmcBkLyLAqu5E8G9UNoHb%2B6h8BAfyq7q0&X-Amz-Signature=47fa7f38eb17118dbead83e0cbd2b0d735f706b58aeb970a3f6e300559debabb&X-Amz-SignedHeaders=host&x-id=GetObject)
