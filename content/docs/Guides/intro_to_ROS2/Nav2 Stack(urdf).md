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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFPRMCK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpTFYTjaqkiKGYKH9FCNxPVo55piHyIPzsueqU2nQDQAiAGd8edw2fOzl0ifC7ZTzFDD%2Bepvcik5Liy5KcPtIl%2FmCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMphuU%2FywNtPgY9epsKtwDX0b%2FgdYyThEylIuwGvGiafmLO%2BZfSujcSKW3jA1HivzTCdt62u4tL6bIUU08Jlenc7tLnfcYimkDWDw5VGRhx01QuAZ%2FoNverGD3SAF6bEtCpkCjTiNEXyMkQCZWsrOX2xGfj%2Bp0AhckJsuHPRd%2B79dqq1t0jATMetAy9WOqhdk2wsZfwgQ2sozaILkTFEzrH2N%2FKg2Rlp%2BF4M2YaJH7LUYxyJXMTrWqvHuskqEtuo1pISfcdICObqWFhCZi8aYi5xQyH7VHt4iOMxzXtHoYGGTm8wEdzV6bDhFz6%2BS%2BVKy4JaUmqwEbHvs8nF4Xy%2BvkLE9QXBsl%2FwtZk2hRuul0CFBds3M30HT3YbtnOZwpNPU%2F1QaFtqQUu939hXDKyOck%2F0xCndYxFbnKKH4GDmICfmUjbXddme3lcL8mxIADmwNwUpUIrld7VWXjBny0iPQZzeTscR5OgtYpzvEHqLwuz9%2BWrOHKuOQtthSheYBW66GUaDOnsWD5Q2nmcijXATaZFq7%2B70knj6hwl3d19rsCBxXmmlCzGu0HZrECoSkQ6YJqzmVczYvnMV49Fop973EFRFkhMDhNBia3dQpJfbVXXtXhvKskhKz15v1c%2FewEI0991i4Ula6Z9OKGJw4w3%2B%2BmvgY6pgF5V6o4r765F4ZHHLnXZcQkMpQqVrzungBNmj2zoM1R1DIGICQyKW2%2Fzz9PEirntZ1smNKghDuGMNaU7of85clJYG%2BVhdkwbkKj4QE4GlXd0oGXyFPPE7zWvDwYikF%2FFPQTuYkdjlRhHReOC%2BtGqH%2FQOwL58jIcDvLC6RfAndc3D10CriF1ieQ1nh3dbYr0pli3kWKkyNj6%2Br2o8gs01BPJ%2FBVoPcXO&X-Amz-Signature=7eb22ac10820efe4fd11832ec881e598447ae0cc53cb1dbea7afbf4233e6ddbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFPRMCK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpTFYTjaqkiKGYKH9FCNxPVo55piHyIPzsueqU2nQDQAiAGd8edw2fOzl0ifC7ZTzFDD%2Bepvcik5Liy5KcPtIl%2FmCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMphuU%2FywNtPgY9epsKtwDX0b%2FgdYyThEylIuwGvGiafmLO%2BZfSujcSKW3jA1HivzTCdt62u4tL6bIUU08Jlenc7tLnfcYimkDWDw5VGRhx01QuAZ%2FoNverGD3SAF6bEtCpkCjTiNEXyMkQCZWsrOX2xGfj%2Bp0AhckJsuHPRd%2B79dqq1t0jATMetAy9WOqhdk2wsZfwgQ2sozaILkTFEzrH2N%2FKg2Rlp%2BF4M2YaJH7LUYxyJXMTrWqvHuskqEtuo1pISfcdICObqWFhCZi8aYi5xQyH7VHt4iOMxzXtHoYGGTm8wEdzV6bDhFz6%2BS%2BVKy4JaUmqwEbHvs8nF4Xy%2BvkLE9QXBsl%2FwtZk2hRuul0CFBds3M30HT3YbtnOZwpNPU%2F1QaFtqQUu939hXDKyOck%2F0xCndYxFbnKKH4GDmICfmUjbXddme3lcL8mxIADmwNwUpUIrld7VWXjBny0iPQZzeTscR5OgtYpzvEHqLwuz9%2BWrOHKuOQtthSheYBW66GUaDOnsWD5Q2nmcijXATaZFq7%2B70knj6hwl3d19rsCBxXmmlCzGu0HZrECoSkQ6YJqzmVczYvnMV49Fop973EFRFkhMDhNBia3dQpJfbVXXtXhvKskhKz15v1c%2FewEI0991i4Ula6Z9OKGJw4w3%2B%2BmvgY6pgF5V6o4r765F4ZHHLnXZcQkMpQqVrzungBNmj2zoM1R1DIGICQyKW2%2Fzz9PEirntZ1smNKghDuGMNaU7of85clJYG%2BVhdkwbkKj4QE4GlXd0oGXyFPPE7zWvDwYikF%2FFPQTuYkdjlRhHReOC%2BtGqH%2FQOwL58jIcDvLC6RfAndc3D10CriF1ieQ1nh3dbYr0pli3kWKkyNj6%2Br2o8gs01BPJ%2FBVoPcXO&X-Amz-Signature=c243976aa4d95c0406af5bf875492beac4cf7b7d1eac5754c7a97f01889312c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFPRMCK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpTFYTjaqkiKGYKH9FCNxPVo55piHyIPzsueqU2nQDQAiAGd8edw2fOzl0ifC7ZTzFDD%2Bepvcik5Liy5KcPtIl%2FmCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMphuU%2FywNtPgY9epsKtwDX0b%2FgdYyThEylIuwGvGiafmLO%2BZfSujcSKW3jA1HivzTCdt62u4tL6bIUU08Jlenc7tLnfcYimkDWDw5VGRhx01QuAZ%2FoNverGD3SAF6bEtCpkCjTiNEXyMkQCZWsrOX2xGfj%2Bp0AhckJsuHPRd%2B79dqq1t0jATMetAy9WOqhdk2wsZfwgQ2sozaILkTFEzrH2N%2FKg2Rlp%2BF4M2YaJH7LUYxyJXMTrWqvHuskqEtuo1pISfcdICObqWFhCZi8aYi5xQyH7VHt4iOMxzXtHoYGGTm8wEdzV6bDhFz6%2BS%2BVKy4JaUmqwEbHvs8nF4Xy%2BvkLE9QXBsl%2FwtZk2hRuul0CFBds3M30HT3YbtnOZwpNPU%2F1QaFtqQUu939hXDKyOck%2F0xCndYxFbnKKH4GDmICfmUjbXddme3lcL8mxIADmwNwUpUIrld7VWXjBny0iPQZzeTscR5OgtYpzvEHqLwuz9%2BWrOHKuOQtthSheYBW66GUaDOnsWD5Q2nmcijXATaZFq7%2B70knj6hwl3d19rsCBxXmmlCzGu0HZrECoSkQ6YJqzmVczYvnMV49Fop973EFRFkhMDhNBia3dQpJfbVXXtXhvKskhKz15v1c%2FewEI0991i4Ula6Z9OKGJw4w3%2B%2BmvgY6pgF5V6o4r765F4ZHHLnXZcQkMpQqVrzungBNmj2zoM1R1DIGICQyKW2%2Fzz9PEirntZ1smNKghDuGMNaU7of85clJYG%2BVhdkwbkKj4QE4GlXd0oGXyFPPE7zWvDwYikF%2FFPQTuYkdjlRhHReOC%2BtGqH%2FQOwL58jIcDvLC6RfAndc3D10CriF1ieQ1nh3dbYr0pli3kWKkyNj6%2Br2o8gs01BPJ%2FBVoPcXO&X-Amz-Signature=a08982bcba1bb996c3028fbe3df3c37b193d0f8f46ecc9979be81440312cf127&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFPRMCK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpTFYTjaqkiKGYKH9FCNxPVo55piHyIPzsueqU2nQDQAiAGd8edw2fOzl0ifC7ZTzFDD%2Bepvcik5Liy5KcPtIl%2FmCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMphuU%2FywNtPgY9epsKtwDX0b%2FgdYyThEylIuwGvGiafmLO%2BZfSujcSKW3jA1HivzTCdt62u4tL6bIUU08Jlenc7tLnfcYimkDWDw5VGRhx01QuAZ%2FoNverGD3SAF6bEtCpkCjTiNEXyMkQCZWsrOX2xGfj%2Bp0AhckJsuHPRd%2B79dqq1t0jATMetAy9WOqhdk2wsZfwgQ2sozaILkTFEzrH2N%2FKg2Rlp%2BF4M2YaJH7LUYxyJXMTrWqvHuskqEtuo1pISfcdICObqWFhCZi8aYi5xQyH7VHt4iOMxzXtHoYGGTm8wEdzV6bDhFz6%2BS%2BVKy4JaUmqwEbHvs8nF4Xy%2BvkLE9QXBsl%2FwtZk2hRuul0CFBds3M30HT3YbtnOZwpNPU%2F1QaFtqQUu939hXDKyOck%2F0xCndYxFbnKKH4GDmICfmUjbXddme3lcL8mxIADmwNwUpUIrld7VWXjBny0iPQZzeTscR5OgtYpzvEHqLwuz9%2BWrOHKuOQtthSheYBW66GUaDOnsWD5Q2nmcijXATaZFq7%2B70knj6hwl3d19rsCBxXmmlCzGu0HZrECoSkQ6YJqzmVczYvnMV49Fop973EFRFkhMDhNBia3dQpJfbVXXtXhvKskhKz15v1c%2FewEI0991i4Ula6Z9OKGJw4w3%2B%2BmvgY6pgF5V6o4r765F4ZHHLnXZcQkMpQqVrzungBNmj2zoM1R1DIGICQyKW2%2Fzz9PEirntZ1smNKghDuGMNaU7of85clJYG%2BVhdkwbkKj4QE4GlXd0oGXyFPPE7zWvDwYikF%2FFPQTuYkdjlRhHReOC%2BtGqH%2FQOwL58jIcDvLC6RfAndc3D10CriF1ieQ1nh3dbYr0pli3kWKkyNj6%2Br2o8gs01BPJ%2FBVoPcXO&X-Amz-Signature=eb92721c6cfdecd331d45abc1b17d2e3f579fd9e74140bdc897fe3bca199aaed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFPRMCK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpTFYTjaqkiKGYKH9FCNxPVo55piHyIPzsueqU2nQDQAiAGd8edw2fOzl0ifC7ZTzFDD%2Bepvcik5Liy5KcPtIl%2FmCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMphuU%2FywNtPgY9epsKtwDX0b%2FgdYyThEylIuwGvGiafmLO%2BZfSujcSKW3jA1HivzTCdt62u4tL6bIUU08Jlenc7tLnfcYimkDWDw5VGRhx01QuAZ%2FoNverGD3SAF6bEtCpkCjTiNEXyMkQCZWsrOX2xGfj%2Bp0AhckJsuHPRd%2B79dqq1t0jATMetAy9WOqhdk2wsZfwgQ2sozaILkTFEzrH2N%2FKg2Rlp%2BF4M2YaJH7LUYxyJXMTrWqvHuskqEtuo1pISfcdICObqWFhCZi8aYi5xQyH7VHt4iOMxzXtHoYGGTm8wEdzV6bDhFz6%2BS%2BVKy4JaUmqwEbHvs8nF4Xy%2BvkLE9QXBsl%2FwtZk2hRuul0CFBds3M30HT3YbtnOZwpNPU%2F1QaFtqQUu939hXDKyOck%2F0xCndYxFbnKKH4GDmICfmUjbXddme3lcL8mxIADmwNwUpUIrld7VWXjBny0iPQZzeTscR5OgtYpzvEHqLwuz9%2BWrOHKuOQtthSheYBW66GUaDOnsWD5Q2nmcijXATaZFq7%2B70knj6hwl3d19rsCBxXmmlCzGu0HZrECoSkQ6YJqzmVczYvnMV49Fop973EFRFkhMDhNBia3dQpJfbVXXtXhvKskhKz15v1c%2FewEI0991i4Ula6Z9OKGJw4w3%2B%2BmvgY6pgF5V6o4r765F4ZHHLnXZcQkMpQqVrzungBNmj2zoM1R1DIGICQyKW2%2Fzz9PEirntZ1smNKghDuGMNaU7of85clJYG%2BVhdkwbkKj4QE4GlXd0oGXyFPPE7zWvDwYikF%2FFPQTuYkdjlRhHReOC%2BtGqH%2FQOwL58jIcDvLC6RfAndc3D10CriF1ieQ1nh3dbYr0pli3kWKkyNj6%2Br2o8gs01BPJ%2FBVoPcXO&X-Amz-Signature=7ed115c4b6779b89731e516acec3f1789b70b685555797585f9a716a3f537e48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFPRMCK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpTFYTjaqkiKGYKH9FCNxPVo55piHyIPzsueqU2nQDQAiAGd8edw2fOzl0ifC7ZTzFDD%2Bepvcik5Liy5KcPtIl%2FmCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMphuU%2FywNtPgY9epsKtwDX0b%2FgdYyThEylIuwGvGiafmLO%2BZfSujcSKW3jA1HivzTCdt62u4tL6bIUU08Jlenc7tLnfcYimkDWDw5VGRhx01QuAZ%2FoNverGD3SAF6bEtCpkCjTiNEXyMkQCZWsrOX2xGfj%2Bp0AhckJsuHPRd%2B79dqq1t0jATMetAy9WOqhdk2wsZfwgQ2sozaILkTFEzrH2N%2FKg2Rlp%2BF4M2YaJH7LUYxyJXMTrWqvHuskqEtuo1pISfcdICObqWFhCZi8aYi5xQyH7VHt4iOMxzXtHoYGGTm8wEdzV6bDhFz6%2BS%2BVKy4JaUmqwEbHvs8nF4Xy%2BvkLE9QXBsl%2FwtZk2hRuul0CFBds3M30HT3YbtnOZwpNPU%2F1QaFtqQUu939hXDKyOck%2F0xCndYxFbnKKH4GDmICfmUjbXddme3lcL8mxIADmwNwUpUIrld7VWXjBny0iPQZzeTscR5OgtYpzvEHqLwuz9%2BWrOHKuOQtthSheYBW66GUaDOnsWD5Q2nmcijXATaZFq7%2B70knj6hwl3d19rsCBxXmmlCzGu0HZrECoSkQ6YJqzmVczYvnMV49Fop973EFRFkhMDhNBia3dQpJfbVXXtXhvKskhKz15v1c%2FewEI0991i4Ula6Z9OKGJw4w3%2B%2BmvgY6pgF5V6o4r765F4ZHHLnXZcQkMpQqVrzungBNmj2zoM1R1DIGICQyKW2%2Fzz9PEirntZ1smNKghDuGMNaU7of85clJYG%2BVhdkwbkKj4QE4GlXd0oGXyFPPE7zWvDwYikF%2FFPQTuYkdjlRhHReOC%2BtGqH%2FQOwL58jIcDvLC6RfAndc3D10CriF1ieQ1nh3dbYr0pli3kWKkyNj6%2Br2o8gs01BPJ%2FBVoPcXO&X-Amz-Signature=f6a519f35d4bba7f3aa98a04113862c49d43aa0fdff5e8eaa751356fab0c961e&X-Amz-SignedHeaders=host&x-id=GetObject)
