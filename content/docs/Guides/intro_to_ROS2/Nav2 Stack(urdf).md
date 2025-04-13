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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJSWQA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE4DFp9LJPmekgM6PkgFYRo%2BMocatGyQSGensTYmC3cSAiEApZCOpn8XEsckU5D9vB5eXj0EpM2ZQhTWgYcROMD9cxwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzKpeV1JUqGHTO9gSrcA3pweJ2wNw7d8LKQpVel1HuxP4kM3YqevyrrXROyGF9NLcBNbBYSdDuKuaAgOwryWw7b8TfQGX0mjoad%2B8ohQggkajd%2BmFZR6gO38DSP8w6MDxgwfGRNsrnFljBoIjbnuhRN1xosw8xgcTZM7Jw18fVvTSMtLiDm8UOc4FFiKype8aKwD6eBtBRHkboQgijNZiP5NiQe5KNaAMaGIGZxgT%2B9QcjgKJ%2Fu3W8J4u2lTeR%2B5fFcA5AbFKOih9%2BxtAinqJo99q2vM9KvQdBqNmxMizSpRYDSO93Vn3hlEprapnuAd%2B2Q0c9%2BY4%2BBqlWVa6422uUwiipva0eYvEgvRuENrGmtOhuMnSy3mNFKr2e2%2FwBo5CF0wSD1mc%2Ff0hFLEwA7LUGNrkAePlaOCcN107TWUvD8wW6xRy7EleEzR3ulDiaBrS%2BnSJsy9HgnbC5TKPKYDZodLSWWvU4BKPybFu9ppqRjammJxxKrOYJlmWSY2IbhXDsuwtINWjPerZpc%2BGiJyfVW3A2ViVBMe2lI0sQxrVTa2Si2SopeRMUOFY5ccDuDecoibjJU94MKOi7pSmhbM2Z1kLKz0izhKp3%2B2LBOgvHUAUeoQiY%2F5TTVKge3WDsYKd%2Ft7LU7RYl%2FIqraMPvg7b8GOqUBfrGQU9vqoqqwfDXSi3o6rKh3hdEG8RS6%2FVq0zyKzuH3KFENZb9ehmcw4zbUr5ezZqTCpEdI0Ugfj5wNmUhXg6nLuZDQ17JpU10V2MaFQC21N1n2zEgT4%2BvoAb4lsUYszvBGj5xnwVOktZd%2FhRs5iBqFJPIdKUtUa%2BFG4q4TwgOBGp6xbesG2rb8uWkDnpMDdEPfosVESVJvkeHj9crBYJeFm2I9J&X-Amz-Signature=a072f88b42d031bce9c872090ce356b46f31e035690a69ab28e574ac68195472&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJSWQA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE4DFp9LJPmekgM6PkgFYRo%2BMocatGyQSGensTYmC3cSAiEApZCOpn8XEsckU5D9vB5eXj0EpM2ZQhTWgYcROMD9cxwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzKpeV1JUqGHTO9gSrcA3pweJ2wNw7d8LKQpVel1HuxP4kM3YqevyrrXROyGF9NLcBNbBYSdDuKuaAgOwryWw7b8TfQGX0mjoad%2B8ohQggkajd%2BmFZR6gO38DSP8w6MDxgwfGRNsrnFljBoIjbnuhRN1xosw8xgcTZM7Jw18fVvTSMtLiDm8UOc4FFiKype8aKwD6eBtBRHkboQgijNZiP5NiQe5KNaAMaGIGZxgT%2B9QcjgKJ%2Fu3W8J4u2lTeR%2B5fFcA5AbFKOih9%2BxtAinqJo99q2vM9KvQdBqNmxMizSpRYDSO93Vn3hlEprapnuAd%2B2Q0c9%2BY4%2BBqlWVa6422uUwiipva0eYvEgvRuENrGmtOhuMnSy3mNFKr2e2%2FwBo5CF0wSD1mc%2Ff0hFLEwA7LUGNrkAePlaOCcN107TWUvD8wW6xRy7EleEzR3ulDiaBrS%2BnSJsy9HgnbC5TKPKYDZodLSWWvU4BKPybFu9ppqRjammJxxKrOYJlmWSY2IbhXDsuwtINWjPerZpc%2BGiJyfVW3A2ViVBMe2lI0sQxrVTa2Si2SopeRMUOFY5ccDuDecoibjJU94MKOi7pSmhbM2Z1kLKz0izhKp3%2B2LBOgvHUAUeoQiY%2F5TTVKge3WDsYKd%2Ft7LU7RYl%2FIqraMPvg7b8GOqUBfrGQU9vqoqqwfDXSi3o6rKh3hdEG8RS6%2FVq0zyKzuH3KFENZb9ehmcw4zbUr5ezZqTCpEdI0Ugfj5wNmUhXg6nLuZDQ17JpU10V2MaFQC21N1n2zEgT4%2BvoAb4lsUYszvBGj5xnwVOktZd%2FhRs5iBqFJPIdKUtUa%2BFG4q4TwgOBGp6xbesG2rb8uWkDnpMDdEPfosVESVJvkeHj9crBYJeFm2I9J&X-Amz-Signature=9b4c557a7d8235c2f5d56be772929bd9f733aff6b36aa6ca37c4becb97fb5b22&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJSWQA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE4DFp9LJPmekgM6PkgFYRo%2BMocatGyQSGensTYmC3cSAiEApZCOpn8XEsckU5D9vB5eXj0EpM2ZQhTWgYcROMD9cxwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzKpeV1JUqGHTO9gSrcA3pweJ2wNw7d8LKQpVel1HuxP4kM3YqevyrrXROyGF9NLcBNbBYSdDuKuaAgOwryWw7b8TfQGX0mjoad%2B8ohQggkajd%2BmFZR6gO38DSP8w6MDxgwfGRNsrnFljBoIjbnuhRN1xosw8xgcTZM7Jw18fVvTSMtLiDm8UOc4FFiKype8aKwD6eBtBRHkboQgijNZiP5NiQe5KNaAMaGIGZxgT%2B9QcjgKJ%2Fu3W8J4u2lTeR%2B5fFcA5AbFKOih9%2BxtAinqJo99q2vM9KvQdBqNmxMizSpRYDSO93Vn3hlEprapnuAd%2B2Q0c9%2BY4%2BBqlWVa6422uUwiipva0eYvEgvRuENrGmtOhuMnSy3mNFKr2e2%2FwBo5CF0wSD1mc%2Ff0hFLEwA7LUGNrkAePlaOCcN107TWUvD8wW6xRy7EleEzR3ulDiaBrS%2BnSJsy9HgnbC5TKPKYDZodLSWWvU4BKPybFu9ppqRjammJxxKrOYJlmWSY2IbhXDsuwtINWjPerZpc%2BGiJyfVW3A2ViVBMe2lI0sQxrVTa2Si2SopeRMUOFY5ccDuDecoibjJU94MKOi7pSmhbM2Z1kLKz0izhKp3%2B2LBOgvHUAUeoQiY%2F5TTVKge3WDsYKd%2Ft7LU7RYl%2FIqraMPvg7b8GOqUBfrGQU9vqoqqwfDXSi3o6rKh3hdEG8RS6%2FVq0zyKzuH3KFENZb9ehmcw4zbUr5ezZqTCpEdI0Ugfj5wNmUhXg6nLuZDQ17JpU10V2MaFQC21N1n2zEgT4%2BvoAb4lsUYszvBGj5xnwVOktZd%2FhRs5iBqFJPIdKUtUa%2BFG4q4TwgOBGp6xbesG2rb8uWkDnpMDdEPfosVESVJvkeHj9crBYJeFm2I9J&X-Amz-Signature=53fa5cfc9cfde3774bca4d5ff1a99354d4c39500a8f50019e77bafa67b854aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJSWQA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE4DFp9LJPmekgM6PkgFYRo%2BMocatGyQSGensTYmC3cSAiEApZCOpn8XEsckU5D9vB5eXj0EpM2ZQhTWgYcROMD9cxwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzKpeV1JUqGHTO9gSrcA3pweJ2wNw7d8LKQpVel1HuxP4kM3YqevyrrXROyGF9NLcBNbBYSdDuKuaAgOwryWw7b8TfQGX0mjoad%2B8ohQggkajd%2BmFZR6gO38DSP8w6MDxgwfGRNsrnFljBoIjbnuhRN1xosw8xgcTZM7Jw18fVvTSMtLiDm8UOc4FFiKype8aKwD6eBtBRHkboQgijNZiP5NiQe5KNaAMaGIGZxgT%2B9QcjgKJ%2Fu3W8J4u2lTeR%2B5fFcA5AbFKOih9%2BxtAinqJo99q2vM9KvQdBqNmxMizSpRYDSO93Vn3hlEprapnuAd%2B2Q0c9%2BY4%2BBqlWVa6422uUwiipva0eYvEgvRuENrGmtOhuMnSy3mNFKr2e2%2FwBo5CF0wSD1mc%2Ff0hFLEwA7LUGNrkAePlaOCcN107TWUvD8wW6xRy7EleEzR3ulDiaBrS%2BnSJsy9HgnbC5TKPKYDZodLSWWvU4BKPybFu9ppqRjammJxxKrOYJlmWSY2IbhXDsuwtINWjPerZpc%2BGiJyfVW3A2ViVBMe2lI0sQxrVTa2Si2SopeRMUOFY5ccDuDecoibjJU94MKOi7pSmhbM2Z1kLKz0izhKp3%2B2LBOgvHUAUeoQiY%2F5TTVKge3WDsYKd%2Ft7LU7RYl%2FIqraMPvg7b8GOqUBfrGQU9vqoqqwfDXSi3o6rKh3hdEG8RS6%2FVq0zyKzuH3KFENZb9ehmcw4zbUr5ezZqTCpEdI0Ugfj5wNmUhXg6nLuZDQ17JpU10V2MaFQC21N1n2zEgT4%2BvoAb4lsUYszvBGj5xnwVOktZd%2FhRs5iBqFJPIdKUtUa%2BFG4q4TwgOBGp6xbesG2rb8uWkDnpMDdEPfosVESVJvkeHj9crBYJeFm2I9J&X-Amz-Signature=47ce820d2a9a9e0cd797d358abc0cf0a41221dc6ae85e35c32414b16f5380596&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJSWQA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE4DFp9LJPmekgM6PkgFYRo%2BMocatGyQSGensTYmC3cSAiEApZCOpn8XEsckU5D9vB5eXj0EpM2ZQhTWgYcROMD9cxwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzKpeV1JUqGHTO9gSrcA3pweJ2wNw7d8LKQpVel1HuxP4kM3YqevyrrXROyGF9NLcBNbBYSdDuKuaAgOwryWw7b8TfQGX0mjoad%2B8ohQggkajd%2BmFZR6gO38DSP8w6MDxgwfGRNsrnFljBoIjbnuhRN1xosw8xgcTZM7Jw18fVvTSMtLiDm8UOc4FFiKype8aKwD6eBtBRHkboQgijNZiP5NiQe5KNaAMaGIGZxgT%2B9QcjgKJ%2Fu3W8J4u2lTeR%2B5fFcA5AbFKOih9%2BxtAinqJo99q2vM9KvQdBqNmxMizSpRYDSO93Vn3hlEprapnuAd%2B2Q0c9%2BY4%2BBqlWVa6422uUwiipva0eYvEgvRuENrGmtOhuMnSy3mNFKr2e2%2FwBo5CF0wSD1mc%2Ff0hFLEwA7LUGNrkAePlaOCcN107TWUvD8wW6xRy7EleEzR3ulDiaBrS%2BnSJsy9HgnbC5TKPKYDZodLSWWvU4BKPybFu9ppqRjammJxxKrOYJlmWSY2IbhXDsuwtINWjPerZpc%2BGiJyfVW3A2ViVBMe2lI0sQxrVTa2Si2SopeRMUOFY5ccDuDecoibjJU94MKOi7pSmhbM2Z1kLKz0izhKp3%2B2LBOgvHUAUeoQiY%2F5TTVKge3WDsYKd%2Ft7LU7RYl%2FIqraMPvg7b8GOqUBfrGQU9vqoqqwfDXSi3o6rKh3hdEG8RS6%2FVq0zyKzuH3KFENZb9ehmcw4zbUr5ezZqTCpEdI0Ugfj5wNmUhXg6nLuZDQ17JpU10V2MaFQC21N1n2zEgT4%2BvoAb4lsUYszvBGj5xnwVOktZd%2FhRs5iBqFJPIdKUtUa%2BFG4q4TwgOBGp6xbesG2rb8uWkDnpMDdEPfosVESVJvkeHj9crBYJeFm2I9J&X-Amz-Signature=83f853af29845236e9a10c25b917461eb9878ef547841315da2badda7b6779a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJSWQA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE4DFp9LJPmekgM6PkgFYRo%2BMocatGyQSGensTYmC3cSAiEApZCOpn8XEsckU5D9vB5eXj0EpM2ZQhTWgYcROMD9cxwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzKpeV1JUqGHTO9gSrcA3pweJ2wNw7d8LKQpVel1HuxP4kM3YqevyrrXROyGF9NLcBNbBYSdDuKuaAgOwryWw7b8TfQGX0mjoad%2B8ohQggkajd%2BmFZR6gO38DSP8w6MDxgwfGRNsrnFljBoIjbnuhRN1xosw8xgcTZM7Jw18fVvTSMtLiDm8UOc4FFiKype8aKwD6eBtBRHkboQgijNZiP5NiQe5KNaAMaGIGZxgT%2B9QcjgKJ%2Fu3W8J4u2lTeR%2B5fFcA5AbFKOih9%2BxtAinqJo99q2vM9KvQdBqNmxMizSpRYDSO93Vn3hlEprapnuAd%2B2Q0c9%2BY4%2BBqlWVa6422uUwiipva0eYvEgvRuENrGmtOhuMnSy3mNFKr2e2%2FwBo5CF0wSD1mc%2Ff0hFLEwA7LUGNrkAePlaOCcN107TWUvD8wW6xRy7EleEzR3ulDiaBrS%2BnSJsy9HgnbC5TKPKYDZodLSWWvU4BKPybFu9ppqRjammJxxKrOYJlmWSY2IbhXDsuwtINWjPerZpc%2BGiJyfVW3A2ViVBMe2lI0sQxrVTa2Si2SopeRMUOFY5ccDuDecoibjJU94MKOi7pSmhbM2Z1kLKz0izhKp3%2B2LBOgvHUAUeoQiY%2F5TTVKge3WDsYKd%2Ft7LU7RYl%2FIqraMPvg7b8GOqUBfrGQU9vqoqqwfDXSi3o6rKh3hdEG8RS6%2FVq0zyKzuH3KFENZb9ehmcw4zbUr5ezZqTCpEdI0Ugfj5wNmUhXg6nLuZDQ17JpU10V2MaFQC21N1n2zEgT4%2BvoAb4lsUYszvBGj5xnwVOktZd%2FhRs5iBqFJPIdKUtUa%2BFG4q4TwgOBGp6xbesG2rb8uWkDnpMDdEPfosVESVJvkeHj9crBYJeFm2I9J&X-Amz-Signature=e55eb810f027b385afce612482d7fb493fa59b2f9e9fa0caa819ef3d0ced8d53&X-Amz-SignedHeaders=host&x-id=GetObject)
