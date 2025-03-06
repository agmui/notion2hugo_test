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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGHGSST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IT13I84tnMu0NCmTI8hxSXm%2B%2FRKqzvNq1cgptrMwXAIhALIVieUMh4J7z2EDmWrHZQLGcZ3PZsRfO6KjOOfLrxNkKv8DCCYQABoMNjM3NDIzMTgzODA1IgzlRsLw7kNck40uUD4q3ANL1juPNMhHPHwrb0L3eX4dOE9RJCL0b1n0dugFSwYKFdokGdMvQhPE5R1qep49uKkTSEpDTft8BllmpoXWYv0jHckRlTeshVbCZmiSImNXuZfNUGBvCHG7Me5UKqSzkxakFzffXG9XioRrtJsqo2sQ%2BLZai9X9A9GEft8vo%2B3oDmZ4A2xcdZmqJ2GDGQGMUFVdaqYfBm1uEZhidiF90j4SbV%2BxZkEEpaZC9ACUgRHpUJokr07rGi3A7PjWkrB0dPUqyLR%2BA%2F6oGpAwqmV7dinO%2BopxMQn5XOIZ%2BOWnE0mEF2laeT672uRCurY9uyLCivrX4NF4y%2BGWyn67n%2B35poz8WoIQk27mxzXNKKjyz7KaIcoiFknfbtZLNH7%2BxPpZ%2FgKzZEFchVm3SgQz8e%2BEz3Xj4f1W5sST3BZ3jfkA1%2ByhnTGubvwn8tQaMOlCJnKlwBVwjOaAVCFMEvJhGP71Sg7CdJwI%2BUzY3rXulC2dkbNd9rVnPrQqdioJZ1o5HWgokF%2F6w9euImm9ufeBs7CpiYL56xo%2FRj3ko%2B6B4dzKjKY5dMMtehAnKohs5ZrOK2WYSAg3IOf1KPfsnNBTL1r7blXbNoWAcuSn3YA1gobnGVbS%2BibC4itnqTyTHs5HBzCK2aS%2BBjqkAY4HPyDWewyVdOzisHRlAJvDN%2Fjt4j6JK%2B8K1au%2BIngU2REK7emeIwlSEKMeEtf9J0z1lYhG327UPZLt4FdkrHTTEW5%2FcNhOh1%2FkZsaShmKb9G9VBCecDl%2BOS0Sg%2FWBczI3SEc%2ByyQ9Q1Pqk2iX47NdVVaoUFvP8KpeVONe90%2Fejp%2FzMw7XoGaln5A3VUFVqDwcVtTCiXp6ar1KBPjIxMtKGZire&X-Amz-Signature=f0d9f0d1c3ea38e8f98ca8fef0f2340db8f8af1a1f6cc0cf5d810a8cb59676cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGHGSST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IT13I84tnMu0NCmTI8hxSXm%2B%2FRKqzvNq1cgptrMwXAIhALIVieUMh4J7z2EDmWrHZQLGcZ3PZsRfO6KjOOfLrxNkKv8DCCYQABoMNjM3NDIzMTgzODA1IgzlRsLw7kNck40uUD4q3ANL1juPNMhHPHwrb0L3eX4dOE9RJCL0b1n0dugFSwYKFdokGdMvQhPE5R1qep49uKkTSEpDTft8BllmpoXWYv0jHckRlTeshVbCZmiSImNXuZfNUGBvCHG7Me5UKqSzkxakFzffXG9XioRrtJsqo2sQ%2BLZai9X9A9GEft8vo%2B3oDmZ4A2xcdZmqJ2GDGQGMUFVdaqYfBm1uEZhidiF90j4SbV%2BxZkEEpaZC9ACUgRHpUJokr07rGi3A7PjWkrB0dPUqyLR%2BA%2F6oGpAwqmV7dinO%2BopxMQn5XOIZ%2BOWnE0mEF2laeT672uRCurY9uyLCivrX4NF4y%2BGWyn67n%2B35poz8WoIQk27mxzXNKKjyz7KaIcoiFknfbtZLNH7%2BxPpZ%2FgKzZEFchVm3SgQz8e%2BEz3Xj4f1W5sST3BZ3jfkA1%2ByhnTGubvwn8tQaMOlCJnKlwBVwjOaAVCFMEvJhGP71Sg7CdJwI%2BUzY3rXulC2dkbNd9rVnPrQqdioJZ1o5HWgokF%2F6w9euImm9ufeBs7CpiYL56xo%2FRj3ko%2B6B4dzKjKY5dMMtehAnKohs5ZrOK2WYSAg3IOf1KPfsnNBTL1r7blXbNoWAcuSn3YA1gobnGVbS%2BibC4itnqTyTHs5HBzCK2aS%2BBjqkAY4HPyDWewyVdOzisHRlAJvDN%2Fjt4j6JK%2B8K1au%2BIngU2REK7emeIwlSEKMeEtf9J0z1lYhG327UPZLt4FdkrHTTEW5%2FcNhOh1%2FkZsaShmKb9G9VBCecDl%2BOS0Sg%2FWBczI3SEc%2ByyQ9Q1Pqk2iX47NdVVaoUFvP8KpeVONe90%2Fejp%2FzMw7XoGaln5A3VUFVqDwcVtTCiXp6ar1KBPjIxMtKGZire&X-Amz-Signature=314bd4e20e2c62464a0d4d01366a6182feb606084177afa9be9a37c9fb43fd78&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGHGSST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IT13I84tnMu0NCmTI8hxSXm%2B%2FRKqzvNq1cgptrMwXAIhALIVieUMh4J7z2EDmWrHZQLGcZ3PZsRfO6KjOOfLrxNkKv8DCCYQABoMNjM3NDIzMTgzODA1IgzlRsLw7kNck40uUD4q3ANL1juPNMhHPHwrb0L3eX4dOE9RJCL0b1n0dugFSwYKFdokGdMvQhPE5R1qep49uKkTSEpDTft8BllmpoXWYv0jHckRlTeshVbCZmiSImNXuZfNUGBvCHG7Me5UKqSzkxakFzffXG9XioRrtJsqo2sQ%2BLZai9X9A9GEft8vo%2B3oDmZ4A2xcdZmqJ2GDGQGMUFVdaqYfBm1uEZhidiF90j4SbV%2BxZkEEpaZC9ACUgRHpUJokr07rGi3A7PjWkrB0dPUqyLR%2BA%2F6oGpAwqmV7dinO%2BopxMQn5XOIZ%2BOWnE0mEF2laeT672uRCurY9uyLCivrX4NF4y%2BGWyn67n%2B35poz8WoIQk27mxzXNKKjyz7KaIcoiFknfbtZLNH7%2BxPpZ%2FgKzZEFchVm3SgQz8e%2BEz3Xj4f1W5sST3BZ3jfkA1%2ByhnTGubvwn8tQaMOlCJnKlwBVwjOaAVCFMEvJhGP71Sg7CdJwI%2BUzY3rXulC2dkbNd9rVnPrQqdioJZ1o5HWgokF%2F6w9euImm9ufeBs7CpiYL56xo%2FRj3ko%2B6B4dzKjKY5dMMtehAnKohs5ZrOK2WYSAg3IOf1KPfsnNBTL1r7blXbNoWAcuSn3YA1gobnGVbS%2BibC4itnqTyTHs5HBzCK2aS%2BBjqkAY4HPyDWewyVdOzisHRlAJvDN%2Fjt4j6JK%2B8K1au%2BIngU2REK7emeIwlSEKMeEtf9J0z1lYhG327UPZLt4FdkrHTTEW5%2FcNhOh1%2FkZsaShmKb9G9VBCecDl%2BOS0Sg%2FWBczI3SEc%2ByyQ9Q1Pqk2iX47NdVVaoUFvP8KpeVONe90%2Fejp%2FzMw7XoGaln5A3VUFVqDwcVtTCiXp6ar1KBPjIxMtKGZire&X-Amz-Signature=6236ed1de18930245655bb365b33d2e8f06f63b0d123569dead71cd994570def&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGHGSST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IT13I84tnMu0NCmTI8hxSXm%2B%2FRKqzvNq1cgptrMwXAIhALIVieUMh4J7z2EDmWrHZQLGcZ3PZsRfO6KjOOfLrxNkKv8DCCYQABoMNjM3NDIzMTgzODA1IgzlRsLw7kNck40uUD4q3ANL1juPNMhHPHwrb0L3eX4dOE9RJCL0b1n0dugFSwYKFdokGdMvQhPE5R1qep49uKkTSEpDTft8BllmpoXWYv0jHckRlTeshVbCZmiSImNXuZfNUGBvCHG7Me5UKqSzkxakFzffXG9XioRrtJsqo2sQ%2BLZai9X9A9GEft8vo%2B3oDmZ4A2xcdZmqJ2GDGQGMUFVdaqYfBm1uEZhidiF90j4SbV%2BxZkEEpaZC9ACUgRHpUJokr07rGi3A7PjWkrB0dPUqyLR%2BA%2F6oGpAwqmV7dinO%2BopxMQn5XOIZ%2BOWnE0mEF2laeT672uRCurY9uyLCivrX4NF4y%2BGWyn67n%2B35poz8WoIQk27mxzXNKKjyz7KaIcoiFknfbtZLNH7%2BxPpZ%2FgKzZEFchVm3SgQz8e%2BEz3Xj4f1W5sST3BZ3jfkA1%2ByhnTGubvwn8tQaMOlCJnKlwBVwjOaAVCFMEvJhGP71Sg7CdJwI%2BUzY3rXulC2dkbNd9rVnPrQqdioJZ1o5HWgokF%2F6w9euImm9ufeBs7CpiYL56xo%2FRj3ko%2B6B4dzKjKY5dMMtehAnKohs5ZrOK2WYSAg3IOf1KPfsnNBTL1r7blXbNoWAcuSn3YA1gobnGVbS%2BibC4itnqTyTHs5HBzCK2aS%2BBjqkAY4HPyDWewyVdOzisHRlAJvDN%2Fjt4j6JK%2B8K1au%2BIngU2REK7emeIwlSEKMeEtf9J0z1lYhG327UPZLt4FdkrHTTEW5%2FcNhOh1%2FkZsaShmKb9G9VBCecDl%2BOS0Sg%2FWBczI3SEc%2ByyQ9Q1Pqk2iX47NdVVaoUFvP8KpeVONe90%2Fejp%2FzMw7XoGaln5A3VUFVqDwcVtTCiXp6ar1KBPjIxMtKGZire&X-Amz-Signature=bff943c681e7d169e3bfb92a2fcfab87aec7035d823cfd9dfa5f61b8ad926b01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGHGSST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IT13I84tnMu0NCmTI8hxSXm%2B%2FRKqzvNq1cgptrMwXAIhALIVieUMh4J7z2EDmWrHZQLGcZ3PZsRfO6KjOOfLrxNkKv8DCCYQABoMNjM3NDIzMTgzODA1IgzlRsLw7kNck40uUD4q3ANL1juPNMhHPHwrb0L3eX4dOE9RJCL0b1n0dugFSwYKFdokGdMvQhPE5R1qep49uKkTSEpDTft8BllmpoXWYv0jHckRlTeshVbCZmiSImNXuZfNUGBvCHG7Me5UKqSzkxakFzffXG9XioRrtJsqo2sQ%2BLZai9X9A9GEft8vo%2B3oDmZ4A2xcdZmqJ2GDGQGMUFVdaqYfBm1uEZhidiF90j4SbV%2BxZkEEpaZC9ACUgRHpUJokr07rGi3A7PjWkrB0dPUqyLR%2BA%2F6oGpAwqmV7dinO%2BopxMQn5XOIZ%2BOWnE0mEF2laeT672uRCurY9uyLCivrX4NF4y%2BGWyn67n%2B35poz8WoIQk27mxzXNKKjyz7KaIcoiFknfbtZLNH7%2BxPpZ%2FgKzZEFchVm3SgQz8e%2BEz3Xj4f1W5sST3BZ3jfkA1%2ByhnTGubvwn8tQaMOlCJnKlwBVwjOaAVCFMEvJhGP71Sg7CdJwI%2BUzY3rXulC2dkbNd9rVnPrQqdioJZ1o5HWgokF%2F6w9euImm9ufeBs7CpiYL56xo%2FRj3ko%2B6B4dzKjKY5dMMtehAnKohs5ZrOK2WYSAg3IOf1KPfsnNBTL1r7blXbNoWAcuSn3YA1gobnGVbS%2BibC4itnqTyTHs5HBzCK2aS%2BBjqkAY4HPyDWewyVdOzisHRlAJvDN%2Fjt4j6JK%2B8K1au%2BIngU2REK7emeIwlSEKMeEtf9J0z1lYhG327UPZLt4FdkrHTTEW5%2FcNhOh1%2FkZsaShmKb9G9VBCecDl%2BOS0Sg%2FWBczI3SEc%2ByyQ9Q1Pqk2iX47NdVVaoUFvP8KpeVONe90%2Fejp%2FzMw7XoGaln5A3VUFVqDwcVtTCiXp6ar1KBPjIxMtKGZire&X-Amz-Signature=b9600565031f58b310c3d630e3ec430f4c950eed44e0a88859e3e5284c3b3b27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGHGSST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7IT13I84tnMu0NCmTI8hxSXm%2B%2FRKqzvNq1cgptrMwXAIhALIVieUMh4J7z2EDmWrHZQLGcZ3PZsRfO6KjOOfLrxNkKv8DCCYQABoMNjM3NDIzMTgzODA1IgzlRsLw7kNck40uUD4q3ANL1juPNMhHPHwrb0L3eX4dOE9RJCL0b1n0dugFSwYKFdokGdMvQhPE5R1qep49uKkTSEpDTft8BllmpoXWYv0jHckRlTeshVbCZmiSImNXuZfNUGBvCHG7Me5UKqSzkxakFzffXG9XioRrtJsqo2sQ%2BLZai9X9A9GEft8vo%2B3oDmZ4A2xcdZmqJ2GDGQGMUFVdaqYfBm1uEZhidiF90j4SbV%2BxZkEEpaZC9ACUgRHpUJokr07rGi3A7PjWkrB0dPUqyLR%2BA%2F6oGpAwqmV7dinO%2BopxMQn5XOIZ%2BOWnE0mEF2laeT672uRCurY9uyLCivrX4NF4y%2BGWyn67n%2B35poz8WoIQk27mxzXNKKjyz7KaIcoiFknfbtZLNH7%2BxPpZ%2FgKzZEFchVm3SgQz8e%2BEz3Xj4f1W5sST3BZ3jfkA1%2ByhnTGubvwn8tQaMOlCJnKlwBVwjOaAVCFMEvJhGP71Sg7CdJwI%2BUzY3rXulC2dkbNd9rVnPrQqdioJZ1o5HWgokF%2F6w9euImm9ufeBs7CpiYL56xo%2FRj3ko%2B6B4dzKjKY5dMMtehAnKohs5ZrOK2WYSAg3IOf1KPfsnNBTL1r7blXbNoWAcuSn3YA1gobnGVbS%2BibC4itnqTyTHs5HBzCK2aS%2BBjqkAY4HPyDWewyVdOzisHRlAJvDN%2Fjt4j6JK%2B8K1au%2BIngU2REK7emeIwlSEKMeEtf9J0z1lYhG327UPZLt4FdkrHTTEW5%2FcNhOh1%2FkZsaShmKb9G9VBCecDl%2BOS0Sg%2FWBczI3SEc%2ByyQ9Q1Pqk2iX47NdVVaoUFvP8KpeVONe90%2Fejp%2FzMw7XoGaln5A3VUFVqDwcVtTCiXp6ar1KBPjIxMtKGZire&X-Amz-Signature=f2bd712270db186f5261c8a8257a3a32a51a640aea8ca95af2fce7d9c5ba2c91&X-Amz-SignedHeaders=host&x-id=GetObject)
