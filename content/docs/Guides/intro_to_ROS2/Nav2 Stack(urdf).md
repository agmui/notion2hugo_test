---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPE2GGV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCse%2BY2eV697v7cpsf3KPzEgnkB5Hzy9QIeZT4GStH89wIgbf1Pj%2BBDQDx6wRhZp8uYMwgncXDV3uZimWfBVkuCOzIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfUE3RnV6lOYbVa1CrcA2w7uE9N4qelIK0Xb5cP9tyNm0CBzOpLS3RLho6LTRxoEnUgEcVMAzQGmm1CDnmlz4kXrv%2FbM4ZcIzqiVWDcKgB1FspwGd9mHgCwZp9qq4qAfpztWMe7gOtGxE9lF0fx1PUAPDGKhpYSw0C17yBP0cbfOyEQ2AK%2Ff0YXn%2Bt%2FP8HLEHBzzarrJwWH9VA%2B78uJ08z2KDBSsTdTpUM%2FQ1CTuHZqhBZYZR%2B%2B8xHFD1N%2FHjgkIAK%2FJFcJ6b%2BUQWhv9vUg%2FvCuCyIXuuVkXE1tY7Q7RMqRGFFTXNE7nlDZNHqAUHLGuucheUzJr13d7ZGyJi5wf9l5ksrTP95Kne4xFTSOXV3RfKTkStmRIZ9PJi2PFI9hobGz38QnrBOC4CjSYQabTWeBO9Pnbt8ZE0WWQG7BG2vq%2B9KP70uimeM2pa7qF5jTuGUPq7yBWuACkZGqduSAtjl23G2b6Ssq9VAIV6InB4Wgl2yA8XwZtvqA%2BJW2QpIx%2FcN3GL9w6R9Oi4BAKDijtWq4ALvA%2B%2F%2F%2FqnygVPeYQ%2F7LD4h2qkoBMylmvbAC7Sw8HSHA273dM5r9gmBYi%2Fxo07g4AoUi%2Bu0SRvWx5ejT6rRUuVZ3SnApGCZFXcjfUPuulglmQnFvNKnIocJmMPGEib0GOqUBmrKVOWPmVg5n5STyd%2Fvsm2Ynt4KEjAnT4wspuOAiTNn7BaXy%2BOIVB%2BARkXNNJdQtglZ1cpvoCxHlstgN6I5jsWU8Y38pIsL1OMP31osochtvzpOsKOJWT3U2NF%2FksXW1z763XHzuf8CzJVT9TULFMr%2Fq%2Fld3QBBYAPs8wL25%2B4ogaeTsbKLkPdcTC547f0%2FMYMYJZ6asHELrcF4bCeFe6HkGbhPe&X-Amz-Signature=6fdcb2f797526d34a0e416752ef3f286443142b975475428a8a58a757b065a52&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPE2GGV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCse%2BY2eV697v7cpsf3KPzEgnkB5Hzy9QIeZT4GStH89wIgbf1Pj%2BBDQDx6wRhZp8uYMwgncXDV3uZimWfBVkuCOzIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfUE3RnV6lOYbVa1CrcA2w7uE9N4qelIK0Xb5cP9tyNm0CBzOpLS3RLho6LTRxoEnUgEcVMAzQGmm1CDnmlz4kXrv%2FbM4ZcIzqiVWDcKgB1FspwGd9mHgCwZp9qq4qAfpztWMe7gOtGxE9lF0fx1PUAPDGKhpYSw0C17yBP0cbfOyEQ2AK%2Ff0YXn%2Bt%2FP8HLEHBzzarrJwWH9VA%2B78uJ08z2KDBSsTdTpUM%2FQ1CTuHZqhBZYZR%2B%2B8xHFD1N%2FHjgkIAK%2FJFcJ6b%2BUQWhv9vUg%2FvCuCyIXuuVkXE1tY7Q7RMqRGFFTXNE7nlDZNHqAUHLGuucheUzJr13d7ZGyJi5wf9l5ksrTP95Kne4xFTSOXV3RfKTkStmRIZ9PJi2PFI9hobGz38QnrBOC4CjSYQabTWeBO9Pnbt8ZE0WWQG7BG2vq%2B9KP70uimeM2pa7qF5jTuGUPq7yBWuACkZGqduSAtjl23G2b6Ssq9VAIV6InB4Wgl2yA8XwZtvqA%2BJW2QpIx%2FcN3GL9w6R9Oi4BAKDijtWq4ALvA%2B%2F%2F%2FqnygVPeYQ%2F7LD4h2qkoBMylmvbAC7Sw8HSHA273dM5r9gmBYi%2Fxo07g4AoUi%2Bu0SRvWx5ejT6rRUuVZ3SnApGCZFXcjfUPuulglmQnFvNKnIocJmMPGEib0GOqUBmrKVOWPmVg5n5STyd%2Fvsm2Ynt4KEjAnT4wspuOAiTNn7BaXy%2BOIVB%2BARkXNNJdQtglZ1cpvoCxHlstgN6I5jsWU8Y38pIsL1OMP31osochtvzpOsKOJWT3U2NF%2FksXW1z763XHzuf8CzJVT9TULFMr%2Fq%2Fld3QBBYAPs8wL25%2B4ogaeTsbKLkPdcTC547f0%2FMYMYJZ6asHELrcF4bCeFe6HkGbhPe&X-Amz-Signature=8a4b21a9fc2e5ba48f66ab4ab64a9f056a68389b5d4e5137451ad6cbf409386c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPE2GGV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCse%2BY2eV697v7cpsf3KPzEgnkB5Hzy9QIeZT4GStH89wIgbf1Pj%2BBDQDx6wRhZp8uYMwgncXDV3uZimWfBVkuCOzIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfUE3RnV6lOYbVa1CrcA2w7uE9N4qelIK0Xb5cP9tyNm0CBzOpLS3RLho6LTRxoEnUgEcVMAzQGmm1CDnmlz4kXrv%2FbM4ZcIzqiVWDcKgB1FspwGd9mHgCwZp9qq4qAfpztWMe7gOtGxE9lF0fx1PUAPDGKhpYSw0C17yBP0cbfOyEQ2AK%2Ff0YXn%2Bt%2FP8HLEHBzzarrJwWH9VA%2B78uJ08z2KDBSsTdTpUM%2FQ1CTuHZqhBZYZR%2B%2B8xHFD1N%2FHjgkIAK%2FJFcJ6b%2BUQWhv9vUg%2FvCuCyIXuuVkXE1tY7Q7RMqRGFFTXNE7nlDZNHqAUHLGuucheUzJr13d7ZGyJi5wf9l5ksrTP95Kne4xFTSOXV3RfKTkStmRIZ9PJi2PFI9hobGz38QnrBOC4CjSYQabTWeBO9Pnbt8ZE0WWQG7BG2vq%2B9KP70uimeM2pa7qF5jTuGUPq7yBWuACkZGqduSAtjl23G2b6Ssq9VAIV6InB4Wgl2yA8XwZtvqA%2BJW2QpIx%2FcN3GL9w6R9Oi4BAKDijtWq4ALvA%2B%2F%2F%2FqnygVPeYQ%2F7LD4h2qkoBMylmvbAC7Sw8HSHA273dM5r9gmBYi%2Fxo07g4AoUi%2Bu0SRvWx5ejT6rRUuVZ3SnApGCZFXcjfUPuulglmQnFvNKnIocJmMPGEib0GOqUBmrKVOWPmVg5n5STyd%2Fvsm2Ynt4KEjAnT4wspuOAiTNn7BaXy%2BOIVB%2BARkXNNJdQtglZ1cpvoCxHlstgN6I5jsWU8Y38pIsL1OMP31osochtvzpOsKOJWT3U2NF%2FksXW1z763XHzuf8CzJVT9TULFMr%2Fq%2Fld3QBBYAPs8wL25%2B4ogaeTsbKLkPdcTC547f0%2FMYMYJZ6asHELrcF4bCeFe6HkGbhPe&X-Amz-Signature=9897e8c14c51889abf8babf781e4e5719efee8876ee1eaa68e2b19cb0a490ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPE2GGV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCse%2BY2eV697v7cpsf3KPzEgnkB5Hzy9QIeZT4GStH89wIgbf1Pj%2BBDQDx6wRhZp8uYMwgncXDV3uZimWfBVkuCOzIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfUE3RnV6lOYbVa1CrcA2w7uE9N4qelIK0Xb5cP9tyNm0CBzOpLS3RLho6LTRxoEnUgEcVMAzQGmm1CDnmlz4kXrv%2FbM4ZcIzqiVWDcKgB1FspwGd9mHgCwZp9qq4qAfpztWMe7gOtGxE9lF0fx1PUAPDGKhpYSw0C17yBP0cbfOyEQ2AK%2Ff0YXn%2Bt%2FP8HLEHBzzarrJwWH9VA%2B78uJ08z2KDBSsTdTpUM%2FQ1CTuHZqhBZYZR%2B%2B8xHFD1N%2FHjgkIAK%2FJFcJ6b%2BUQWhv9vUg%2FvCuCyIXuuVkXE1tY7Q7RMqRGFFTXNE7nlDZNHqAUHLGuucheUzJr13d7ZGyJi5wf9l5ksrTP95Kne4xFTSOXV3RfKTkStmRIZ9PJi2PFI9hobGz38QnrBOC4CjSYQabTWeBO9Pnbt8ZE0WWQG7BG2vq%2B9KP70uimeM2pa7qF5jTuGUPq7yBWuACkZGqduSAtjl23G2b6Ssq9VAIV6InB4Wgl2yA8XwZtvqA%2BJW2QpIx%2FcN3GL9w6R9Oi4BAKDijtWq4ALvA%2B%2F%2F%2FqnygVPeYQ%2F7LD4h2qkoBMylmvbAC7Sw8HSHA273dM5r9gmBYi%2Fxo07g4AoUi%2Bu0SRvWx5ejT6rRUuVZ3SnApGCZFXcjfUPuulglmQnFvNKnIocJmMPGEib0GOqUBmrKVOWPmVg5n5STyd%2Fvsm2Ynt4KEjAnT4wspuOAiTNn7BaXy%2BOIVB%2BARkXNNJdQtglZ1cpvoCxHlstgN6I5jsWU8Y38pIsL1OMP31osochtvzpOsKOJWT3U2NF%2FksXW1z763XHzuf8CzJVT9TULFMr%2Fq%2Fld3QBBYAPs8wL25%2B4ogaeTsbKLkPdcTC547f0%2FMYMYJZ6asHELrcF4bCeFe6HkGbhPe&X-Amz-Signature=da68821817b4794f424fcc9b3b6531221a40d5c63726bd7e7595b1a0476631f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPE2GGV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCse%2BY2eV697v7cpsf3KPzEgnkB5Hzy9QIeZT4GStH89wIgbf1Pj%2BBDQDx6wRhZp8uYMwgncXDV3uZimWfBVkuCOzIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfUE3RnV6lOYbVa1CrcA2w7uE9N4qelIK0Xb5cP9tyNm0CBzOpLS3RLho6LTRxoEnUgEcVMAzQGmm1CDnmlz4kXrv%2FbM4ZcIzqiVWDcKgB1FspwGd9mHgCwZp9qq4qAfpztWMe7gOtGxE9lF0fx1PUAPDGKhpYSw0C17yBP0cbfOyEQ2AK%2Ff0YXn%2Bt%2FP8HLEHBzzarrJwWH9VA%2B78uJ08z2KDBSsTdTpUM%2FQ1CTuHZqhBZYZR%2B%2B8xHFD1N%2FHjgkIAK%2FJFcJ6b%2BUQWhv9vUg%2FvCuCyIXuuVkXE1tY7Q7RMqRGFFTXNE7nlDZNHqAUHLGuucheUzJr13d7ZGyJi5wf9l5ksrTP95Kne4xFTSOXV3RfKTkStmRIZ9PJi2PFI9hobGz38QnrBOC4CjSYQabTWeBO9Pnbt8ZE0WWQG7BG2vq%2B9KP70uimeM2pa7qF5jTuGUPq7yBWuACkZGqduSAtjl23G2b6Ssq9VAIV6InB4Wgl2yA8XwZtvqA%2BJW2QpIx%2FcN3GL9w6R9Oi4BAKDijtWq4ALvA%2B%2F%2F%2FqnygVPeYQ%2F7LD4h2qkoBMylmvbAC7Sw8HSHA273dM5r9gmBYi%2Fxo07g4AoUi%2Bu0SRvWx5ejT6rRUuVZ3SnApGCZFXcjfUPuulglmQnFvNKnIocJmMPGEib0GOqUBmrKVOWPmVg5n5STyd%2Fvsm2Ynt4KEjAnT4wspuOAiTNn7BaXy%2BOIVB%2BARkXNNJdQtglZ1cpvoCxHlstgN6I5jsWU8Y38pIsL1OMP31osochtvzpOsKOJWT3U2NF%2FksXW1z763XHzuf8CzJVT9TULFMr%2Fq%2Fld3QBBYAPs8wL25%2B4ogaeTsbKLkPdcTC547f0%2FMYMYJZ6asHELrcF4bCeFe6HkGbhPe&X-Amz-Signature=f545e5245e55c147fc675313f50d8fd18fd750ba7542c3739b7070e3d73caa80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPE2GGV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCse%2BY2eV697v7cpsf3KPzEgnkB5Hzy9QIeZT4GStH89wIgbf1Pj%2BBDQDx6wRhZp8uYMwgncXDV3uZimWfBVkuCOzIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBfUE3RnV6lOYbVa1CrcA2w7uE9N4qelIK0Xb5cP9tyNm0CBzOpLS3RLho6LTRxoEnUgEcVMAzQGmm1CDnmlz4kXrv%2FbM4ZcIzqiVWDcKgB1FspwGd9mHgCwZp9qq4qAfpztWMe7gOtGxE9lF0fx1PUAPDGKhpYSw0C17yBP0cbfOyEQ2AK%2Ff0YXn%2Bt%2FP8HLEHBzzarrJwWH9VA%2B78uJ08z2KDBSsTdTpUM%2FQ1CTuHZqhBZYZR%2B%2B8xHFD1N%2FHjgkIAK%2FJFcJ6b%2BUQWhv9vUg%2FvCuCyIXuuVkXE1tY7Q7RMqRGFFTXNE7nlDZNHqAUHLGuucheUzJr13d7ZGyJi5wf9l5ksrTP95Kne4xFTSOXV3RfKTkStmRIZ9PJi2PFI9hobGz38QnrBOC4CjSYQabTWeBO9Pnbt8ZE0WWQG7BG2vq%2B9KP70uimeM2pa7qF5jTuGUPq7yBWuACkZGqduSAtjl23G2b6Ssq9VAIV6InB4Wgl2yA8XwZtvqA%2BJW2QpIx%2FcN3GL9w6R9Oi4BAKDijtWq4ALvA%2B%2F%2F%2FqnygVPeYQ%2F7LD4h2qkoBMylmvbAC7Sw8HSHA273dM5r9gmBYi%2Fxo07g4AoUi%2Bu0SRvWx5ejT6rRUuVZ3SnApGCZFXcjfUPuulglmQnFvNKnIocJmMPGEib0GOqUBmrKVOWPmVg5n5STyd%2Fvsm2Ynt4KEjAnT4wspuOAiTNn7BaXy%2BOIVB%2BARkXNNJdQtglZ1cpvoCxHlstgN6I5jsWU8Y38pIsL1OMP31osochtvzpOsKOJWT3U2NF%2FksXW1z763XHzuf8CzJVT9TULFMr%2Fq%2Fld3QBBYAPs8wL25%2B4ogaeTsbKLkPdcTC547f0%2FMYMYJZ6asHELrcF4bCeFe6HkGbhPe&X-Amz-Signature=e941ae24bfbe791a931cf3b2cc7861abe493f2663120135e03957f7c20e09428&X-Amz-SignedHeaders=host&x-id=GetObject)
