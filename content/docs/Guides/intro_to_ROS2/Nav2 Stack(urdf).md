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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKU2QFD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPWAwo1bUQyQ8DUyYgIxcZaC%2Bh8Gjls4xLTon7OretRwIgQXsE%2FZM%2BCKjH6spfu7GiQ1vt3NKFfAU9rWgLTrifZywq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJaKW268aFymlLd7LircA%2F69fXMsiPUxLRYBznuVyz%2FdCYDu%2Fr8PBO1DGNh5yeqLhk6kab0Up1VAaWmeSYGgx1XTg3Ykf%2FvbeFYELh56f%2BPO8aMvCF10tKwTUeaj1Zjc9LzP3YOCRxwAsGKzzsfMvUolUBqf4tduH%2BONxM%2BbkOFlvcyrZMYnwi9tnuNWsfey9LYgbB0oEGLj0u9v23uFOpe%2BThlGEtGXNoLA6u22BCz%2BQm%2F%2FVs0wWm1yaM%2FneYcMzD1tF0tcr7wJnuKCrQAuENqnWfmh1HgtpoVsotfN5Z3C12CdThfXi4daNc%2B%2FWwoGWe18y484jAoQoyfDT%2FtgFIKnTu5YB6kldzaV%2BFUcyunP8sgk%2BGJqsJ%2FoOuKaoKvTmlGDMpQT2KEWrvKIZ%2B3S1kQD2716zAmZHaQnhPtQkpW2AG3lxnZbjs7DTUAg0QiLkfCNlqjIOqq0H9p8cU2DxlMbADjs%2FChZsjs6kJJZu%2F%2BF5Ek3d%2BR6%2BshO7hKaURog%2F%2F3lF%2Fj9qVaVOyUWftkxP2Ap%2FpdoeAuJUp5uYNwMf4Tn88a0%2F%2BBPtwaIkD35c0SiS%2BIK9oJc1NxADK6EIZzI%2BLxFd27yae9jFSpg45Mcw30zdJ1NcG44uk70nIV%2BY4vA%2FRGUtPWhG%2Boof3siMJi45cMGOqUBFAiUZf0aI%2BEOeuoZad4dr1hFChVKXFwkKvauLR%2F8ANGSMKAiB7%2FAtBzI7CZTplSHAQqRcF92r%2B0FkRAsgBk8nt8N9LCZ7qI2A4UGblgyB5GAidqxR4x2I%2FPj8D9TrSdIv%2BM7m94y1z1d5F7qcvHpq3pjYWqBIbVOrM%2BgM3%2BncPghbeZiJZRsxABPYbiW%2FwJvHicJsLap5r4NvVsG%2BmjdtuNT9ksa&X-Amz-Signature=782095e943f7262799454cc17ad706873e8943fb70fbc6695408a69acc99d21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKU2QFD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPWAwo1bUQyQ8DUyYgIxcZaC%2Bh8Gjls4xLTon7OretRwIgQXsE%2FZM%2BCKjH6spfu7GiQ1vt3NKFfAU9rWgLTrifZywq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJaKW268aFymlLd7LircA%2F69fXMsiPUxLRYBznuVyz%2FdCYDu%2Fr8PBO1DGNh5yeqLhk6kab0Up1VAaWmeSYGgx1XTg3Ykf%2FvbeFYELh56f%2BPO8aMvCF10tKwTUeaj1Zjc9LzP3YOCRxwAsGKzzsfMvUolUBqf4tduH%2BONxM%2BbkOFlvcyrZMYnwi9tnuNWsfey9LYgbB0oEGLj0u9v23uFOpe%2BThlGEtGXNoLA6u22BCz%2BQm%2F%2FVs0wWm1yaM%2FneYcMzD1tF0tcr7wJnuKCrQAuENqnWfmh1HgtpoVsotfN5Z3C12CdThfXi4daNc%2B%2FWwoGWe18y484jAoQoyfDT%2FtgFIKnTu5YB6kldzaV%2BFUcyunP8sgk%2BGJqsJ%2FoOuKaoKvTmlGDMpQT2KEWrvKIZ%2B3S1kQD2716zAmZHaQnhPtQkpW2AG3lxnZbjs7DTUAg0QiLkfCNlqjIOqq0H9p8cU2DxlMbADjs%2FChZsjs6kJJZu%2F%2BF5Ek3d%2BR6%2BshO7hKaURog%2F%2F3lF%2Fj9qVaVOyUWftkxP2Ap%2FpdoeAuJUp5uYNwMf4Tn88a0%2F%2BBPtwaIkD35c0SiS%2BIK9oJc1NxADK6EIZzI%2BLxFd27yae9jFSpg45Mcw30zdJ1NcG44uk70nIV%2BY4vA%2FRGUtPWhG%2Boof3siMJi45cMGOqUBFAiUZf0aI%2BEOeuoZad4dr1hFChVKXFwkKvauLR%2F8ANGSMKAiB7%2FAtBzI7CZTplSHAQqRcF92r%2B0FkRAsgBk8nt8N9LCZ7qI2A4UGblgyB5GAidqxR4x2I%2FPj8D9TrSdIv%2BM7m94y1z1d5F7qcvHpq3pjYWqBIbVOrM%2BgM3%2BncPghbeZiJZRsxABPYbiW%2FwJvHicJsLap5r4NvVsG%2BmjdtuNT9ksa&X-Amz-Signature=b3f16842d3ed9f743af6ad1c19683dc4c230c16095957bf80d52538da3a14db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKU2QFD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPWAwo1bUQyQ8DUyYgIxcZaC%2Bh8Gjls4xLTon7OretRwIgQXsE%2FZM%2BCKjH6spfu7GiQ1vt3NKFfAU9rWgLTrifZywq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJaKW268aFymlLd7LircA%2F69fXMsiPUxLRYBznuVyz%2FdCYDu%2Fr8PBO1DGNh5yeqLhk6kab0Up1VAaWmeSYGgx1XTg3Ykf%2FvbeFYELh56f%2BPO8aMvCF10tKwTUeaj1Zjc9LzP3YOCRxwAsGKzzsfMvUolUBqf4tduH%2BONxM%2BbkOFlvcyrZMYnwi9tnuNWsfey9LYgbB0oEGLj0u9v23uFOpe%2BThlGEtGXNoLA6u22BCz%2BQm%2F%2FVs0wWm1yaM%2FneYcMzD1tF0tcr7wJnuKCrQAuENqnWfmh1HgtpoVsotfN5Z3C12CdThfXi4daNc%2B%2FWwoGWe18y484jAoQoyfDT%2FtgFIKnTu5YB6kldzaV%2BFUcyunP8sgk%2BGJqsJ%2FoOuKaoKvTmlGDMpQT2KEWrvKIZ%2B3S1kQD2716zAmZHaQnhPtQkpW2AG3lxnZbjs7DTUAg0QiLkfCNlqjIOqq0H9p8cU2DxlMbADjs%2FChZsjs6kJJZu%2F%2BF5Ek3d%2BR6%2BshO7hKaURog%2F%2F3lF%2Fj9qVaVOyUWftkxP2Ap%2FpdoeAuJUp5uYNwMf4Tn88a0%2F%2BBPtwaIkD35c0SiS%2BIK9oJc1NxADK6EIZzI%2BLxFd27yae9jFSpg45Mcw30zdJ1NcG44uk70nIV%2BY4vA%2FRGUtPWhG%2Boof3siMJi45cMGOqUBFAiUZf0aI%2BEOeuoZad4dr1hFChVKXFwkKvauLR%2F8ANGSMKAiB7%2FAtBzI7CZTplSHAQqRcF92r%2B0FkRAsgBk8nt8N9LCZ7qI2A4UGblgyB5GAidqxR4x2I%2FPj8D9TrSdIv%2BM7m94y1z1d5F7qcvHpq3pjYWqBIbVOrM%2BgM3%2BncPghbeZiJZRsxABPYbiW%2FwJvHicJsLap5r4NvVsG%2BmjdtuNT9ksa&X-Amz-Signature=216d3af42120b42c8014d8cf37c299640862823b4ebd82378d346b165e24682d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKU2QFD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPWAwo1bUQyQ8DUyYgIxcZaC%2Bh8Gjls4xLTon7OretRwIgQXsE%2FZM%2BCKjH6spfu7GiQ1vt3NKFfAU9rWgLTrifZywq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJaKW268aFymlLd7LircA%2F69fXMsiPUxLRYBznuVyz%2FdCYDu%2Fr8PBO1DGNh5yeqLhk6kab0Up1VAaWmeSYGgx1XTg3Ykf%2FvbeFYELh56f%2BPO8aMvCF10tKwTUeaj1Zjc9LzP3YOCRxwAsGKzzsfMvUolUBqf4tduH%2BONxM%2BbkOFlvcyrZMYnwi9tnuNWsfey9LYgbB0oEGLj0u9v23uFOpe%2BThlGEtGXNoLA6u22BCz%2BQm%2F%2FVs0wWm1yaM%2FneYcMzD1tF0tcr7wJnuKCrQAuENqnWfmh1HgtpoVsotfN5Z3C12CdThfXi4daNc%2B%2FWwoGWe18y484jAoQoyfDT%2FtgFIKnTu5YB6kldzaV%2BFUcyunP8sgk%2BGJqsJ%2FoOuKaoKvTmlGDMpQT2KEWrvKIZ%2B3S1kQD2716zAmZHaQnhPtQkpW2AG3lxnZbjs7DTUAg0QiLkfCNlqjIOqq0H9p8cU2DxlMbADjs%2FChZsjs6kJJZu%2F%2BF5Ek3d%2BR6%2BshO7hKaURog%2F%2F3lF%2Fj9qVaVOyUWftkxP2Ap%2FpdoeAuJUp5uYNwMf4Tn88a0%2F%2BBPtwaIkD35c0SiS%2BIK9oJc1NxADK6EIZzI%2BLxFd27yae9jFSpg45Mcw30zdJ1NcG44uk70nIV%2BY4vA%2FRGUtPWhG%2Boof3siMJi45cMGOqUBFAiUZf0aI%2BEOeuoZad4dr1hFChVKXFwkKvauLR%2F8ANGSMKAiB7%2FAtBzI7CZTplSHAQqRcF92r%2B0FkRAsgBk8nt8N9LCZ7qI2A4UGblgyB5GAidqxR4x2I%2FPj8D9TrSdIv%2BM7m94y1z1d5F7qcvHpq3pjYWqBIbVOrM%2BgM3%2BncPghbeZiJZRsxABPYbiW%2FwJvHicJsLap5r4NvVsG%2BmjdtuNT9ksa&X-Amz-Signature=f57f40146cfd3d0a9d0e79a092cc22111f4d93003a4b8b9c0e00882150307855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKU2QFD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPWAwo1bUQyQ8DUyYgIxcZaC%2Bh8Gjls4xLTon7OretRwIgQXsE%2FZM%2BCKjH6spfu7GiQ1vt3NKFfAU9rWgLTrifZywq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJaKW268aFymlLd7LircA%2F69fXMsiPUxLRYBznuVyz%2FdCYDu%2Fr8PBO1DGNh5yeqLhk6kab0Up1VAaWmeSYGgx1XTg3Ykf%2FvbeFYELh56f%2BPO8aMvCF10tKwTUeaj1Zjc9LzP3YOCRxwAsGKzzsfMvUolUBqf4tduH%2BONxM%2BbkOFlvcyrZMYnwi9tnuNWsfey9LYgbB0oEGLj0u9v23uFOpe%2BThlGEtGXNoLA6u22BCz%2BQm%2F%2FVs0wWm1yaM%2FneYcMzD1tF0tcr7wJnuKCrQAuENqnWfmh1HgtpoVsotfN5Z3C12CdThfXi4daNc%2B%2FWwoGWe18y484jAoQoyfDT%2FtgFIKnTu5YB6kldzaV%2BFUcyunP8sgk%2BGJqsJ%2FoOuKaoKvTmlGDMpQT2KEWrvKIZ%2B3S1kQD2716zAmZHaQnhPtQkpW2AG3lxnZbjs7DTUAg0QiLkfCNlqjIOqq0H9p8cU2DxlMbADjs%2FChZsjs6kJJZu%2F%2BF5Ek3d%2BR6%2BshO7hKaURog%2F%2F3lF%2Fj9qVaVOyUWftkxP2Ap%2FpdoeAuJUp5uYNwMf4Tn88a0%2F%2BBPtwaIkD35c0SiS%2BIK9oJc1NxADK6EIZzI%2BLxFd27yae9jFSpg45Mcw30zdJ1NcG44uk70nIV%2BY4vA%2FRGUtPWhG%2Boof3siMJi45cMGOqUBFAiUZf0aI%2BEOeuoZad4dr1hFChVKXFwkKvauLR%2F8ANGSMKAiB7%2FAtBzI7CZTplSHAQqRcF92r%2B0FkRAsgBk8nt8N9LCZ7qI2A4UGblgyB5GAidqxR4x2I%2FPj8D9TrSdIv%2BM7m94y1z1d5F7qcvHpq3pjYWqBIbVOrM%2BgM3%2BncPghbeZiJZRsxABPYbiW%2FwJvHicJsLap5r4NvVsG%2BmjdtuNT9ksa&X-Amz-Signature=671de3f789172daca9ef0bc48b0ad8c43647e7df94a9fc053626510b8dd1f782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKU2QFD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPWAwo1bUQyQ8DUyYgIxcZaC%2Bh8Gjls4xLTon7OretRwIgQXsE%2FZM%2BCKjH6spfu7GiQ1vt3NKFfAU9rWgLTrifZywq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJaKW268aFymlLd7LircA%2F69fXMsiPUxLRYBznuVyz%2FdCYDu%2Fr8PBO1DGNh5yeqLhk6kab0Up1VAaWmeSYGgx1XTg3Ykf%2FvbeFYELh56f%2BPO8aMvCF10tKwTUeaj1Zjc9LzP3YOCRxwAsGKzzsfMvUolUBqf4tduH%2BONxM%2BbkOFlvcyrZMYnwi9tnuNWsfey9LYgbB0oEGLj0u9v23uFOpe%2BThlGEtGXNoLA6u22BCz%2BQm%2F%2FVs0wWm1yaM%2FneYcMzD1tF0tcr7wJnuKCrQAuENqnWfmh1HgtpoVsotfN5Z3C12CdThfXi4daNc%2B%2FWwoGWe18y484jAoQoyfDT%2FtgFIKnTu5YB6kldzaV%2BFUcyunP8sgk%2BGJqsJ%2FoOuKaoKvTmlGDMpQT2KEWrvKIZ%2B3S1kQD2716zAmZHaQnhPtQkpW2AG3lxnZbjs7DTUAg0QiLkfCNlqjIOqq0H9p8cU2DxlMbADjs%2FChZsjs6kJJZu%2F%2BF5Ek3d%2BR6%2BshO7hKaURog%2F%2F3lF%2Fj9qVaVOyUWftkxP2Ap%2FpdoeAuJUp5uYNwMf4Tn88a0%2F%2BBPtwaIkD35c0SiS%2BIK9oJc1NxADK6EIZzI%2BLxFd27yae9jFSpg45Mcw30zdJ1NcG44uk70nIV%2BY4vA%2FRGUtPWhG%2Boof3siMJi45cMGOqUBFAiUZf0aI%2BEOeuoZad4dr1hFChVKXFwkKvauLR%2F8ANGSMKAiB7%2FAtBzI7CZTplSHAQqRcF92r%2B0FkRAsgBk8nt8N9LCZ7qI2A4UGblgyB5GAidqxR4x2I%2FPj8D9TrSdIv%2BM7m94y1z1d5F7qcvHpq3pjYWqBIbVOrM%2BgM3%2BncPghbeZiJZRsxABPYbiW%2FwJvHicJsLap5r4NvVsG%2BmjdtuNT9ksa&X-Amz-Signature=94822a41baddf911afeab6c17636923d778bd0850f8c7178cc1fc65d20f12d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
