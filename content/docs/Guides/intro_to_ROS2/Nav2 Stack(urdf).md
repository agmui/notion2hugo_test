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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LDCGP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDG35QvyxySYC0ySNzBN9Ayv9r3y4sn%2B8q8tHox02HSxAIgIbf6yyBQZwyJzxxEZ4%2BLKWYcuA4ZhjJgXMoQ%2FRwoifIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ1mI%2BKVr8kn17A%2ByrcAz2SGroNXO%2BwS7Wp65V1ULobVd%2ByrJgEk8bUNEYwgmXxOGg9KfkbM5hbjk9KlAcHhwhrZ1%2BDZYdCH4QdDQr6RXA%2F8u4bHn%2FmEnf%2FYV7ZIU7L1bQE5xojPEJOxJEpArbthRPptyMnusbR6xYLi6S2bS96TSUtEb%2BE6JRu3oEKuUJIZ0QNZNaoszb8FvGyfGCUOHBp3zTZeXtEoGFjgSc%2BPiwVlW6JZ7XCcmt5n%2BwNCZnMeL21M9QAi3Fh7JWdEmTnAR3iVLXzUQBlzBbpGqparul8MhlyCrneMdbm1BJGm0eDcILTF1vr%2BT5dBvvBQT71LyT0KUvhU063rzgUk%2FVEt%2Fy8X%2Bo8Eb54vKylbJtkrSVQ3osRG%2B3HkgFJMP6txg1zBXEcOcK5u3eawzCpHuxqLCH2QXgzBKghBL7f2bPfYMxY0ChNKpFmkNhTnoN0kjYKDysLKLILm8ospw613cTxVQsxKb5ApqfoO2xJiru8f30IjKMMrSlnkWAb0hsf9LHU6pa0ptucHnNfUcxOx700wqf%2FUPxzl9ElcFdEToQ0kLGoRu4nBtOQZVhsxf5Pav5osOQ8nJG%2F4rm0AIBXQ8Syjby2ZBh2K7AhQp42U5pjg9TIHedwVTCUwZDfMbeuMNvB78EGOqUBam3f19bjKWAhtHRHkqVhPlLFKrLzyWeqAhzSe31u6ELPGAbIqDBTHNbBXXt6f%2FtRJeV%2FcuhkiiyXHkDWp6LMywcxZmrNTZSOY70BauUE0NcdWceLNtASTd%2BToBSBO4Iu%2FxLkkUnqz%2BIMDkTDzN8tpx3UyIBCTVkgIlw5oRvXjxaqfIxpR34gNv4CbHghRS%2BeoCLeT%2BoFtPQ%2BOrKLQoTLzWLBJRtR&X-Amz-Signature=38ae1f0c088e764c4ef1c7dc2a73f3534d70ef4cf6143ea251dca05ab2c34557&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LDCGP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDG35QvyxySYC0ySNzBN9Ayv9r3y4sn%2B8q8tHox02HSxAIgIbf6yyBQZwyJzxxEZ4%2BLKWYcuA4ZhjJgXMoQ%2FRwoifIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ1mI%2BKVr8kn17A%2ByrcAz2SGroNXO%2BwS7Wp65V1ULobVd%2ByrJgEk8bUNEYwgmXxOGg9KfkbM5hbjk9KlAcHhwhrZ1%2BDZYdCH4QdDQr6RXA%2F8u4bHn%2FmEnf%2FYV7ZIU7L1bQE5xojPEJOxJEpArbthRPptyMnusbR6xYLi6S2bS96TSUtEb%2BE6JRu3oEKuUJIZ0QNZNaoszb8FvGyfGCUOHBp3zTZeXtEoGFjgSc%2BPiwVlW6JZ7XCcmt5n%2BwNCZnMeL21M9QAi3Fh7JWdEmTnAR3iVLXzUQBlzBbpGqparul8MhlyCrneMdbm1BJGm0eDcILTF1vr%2BT5dBvvBQT71LyT0KUvhU063rzgUk%2FVEt%2Fy8X%2Bo8Eb54vKylbJtkrSVQ3osRG%2B3HkgFJMP6txg1zBXEcOcK5u3eawzCpHuxqLCH2QXgzBKghBL7f2bPfYMxY0ChNKpFmkNhTnoN0kjYKDysLKLILm8ospw613cTxVQsxKb5ApqfoO2xJiru8f30IjKMMrSlnkWAb0hsf9LHU6pa0ptucHnNfUcxOx700wqf%2FUPxzl9ElcFdEToQ0kLGoRu4nBtOQZVhsxf5Pav5osOQ8nJG%2F4rm0AIBXQ8Syjby2ZBh2K7AhQp42U5pjg9TIHedwVTCUwZDfMbeuMNvB78EGOqUBam3f19bjKWAhtHRHkqVhPlLFKrLzyWeqAhzSe31u6ELPGAbIqDBTHNbBXXt6f%2FtRJeV%2FcuhkiiyXHkDWp6LMywcxZmrNTZSOY70BauUE0NcdWceLNtASTd%2BToBSBO4Iu%2FxLkkUnqz%2BIMDkTDzN8tpx3UyIBCTVkgIlw5oRvXjxaqfIxpR34gNv4CbHghRS%2BeoCLeT%2BoFtPQ%2BOrKLQoTLzWLBJRtR&X-Amz-Signature=a7caaa94d843a26c4be50cf7f2322491e01247916c739b134696c19de6fa766c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LDCGP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDG35QvyxySYC0ySNzBN9Ayv9r3y4sn%2B8q8tHox02HSxAIgIbf6yyBQZwyJzxxEZ4%2BLKWYcuA4ZhjJgXMoQ%2FRwoifIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ1mI%2BKVr8kn17A%2ByrcAz2SGroNXO%2BwS7Wp65V1ULobVd%2ByrJgEk8bUNEYwgmXxOGg9KfkbM5hbjk9KlAcHhwhrZ1%2BDZYdCH4QdDQr6RXA%2F8u4bHn%2FmEnf%2FYV7ZIU7L1bQE5xojPEJOxJEpArbthRPptyMnusbR6xYLi6S2bS96TSUtEb%2BE6JRu3oEKuUJIZ0QNZNaoszb8FvGyfGCUOHBp3zTZeXtEoGFjgSc%2BPiwVlW6JZ7XCcmt5n%2BwNCZnMeL21M9QAi3Fh7JWdEmTnAR3iVLXzUQBlzBbpGqparul8MhlyCrneMdbm1BJGm0eDcILTF1vr%2BT5dBvvBQT71LyT0KUvhU063rzgUk%2FVEt%2Fy8X%2Bo8Eb54vKylbJtkrSVQ3osRG%2B3HkgFJMP6txg1zBXEcOcK5u3eawzCpHuxqLCH2QXgzBKghBL7f2bPfYMxY0ChNKpFmkNhTnoN0kjYKDysLKLILm8ospw613cTxVQsxKb5ApqfoO2xJiru8f30IjKMMrSlnkWAb0hsf9LHU6pa0ptucHnNfUcxOx700wqf%2FUPxzl9ElcFdEToQ0kLGoRu4nBtOQZVhsxf5Pav5osOQ8nJG%2F4rm0AIBXQ8Syjby2ZBh2K7AhQp42U5pjg9TIHedwVTCUwZDfMbeuMNvB78EGOqUBam3f19bjKWAhtHRHkqVhPlLFKrLzyWeqAhzSe31u6ELPGAbIqDBTHNbBXXt6f%2FtRJeV%2FcuhkiiyXHkDWp6LMywcxZmrNTZSOY70BauUE0NcdWceLNtASTd%2BToBSBO4Iu%2FxLkkUnqz%2BIMDkTDzN8tpx3UyIBCTVkgIlw5oRvXjxaqfIxpR34gNv4CbHghRS%2BeoCLeT%2BoFtPQ%2BOrKLQoTLzWLBJRtR&X-Amz-Signature=f3a14245a31802a61aa11e934c26e3607cb91e4cc8599e7c74ed009b4b7ec979&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LDCGP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDG35QvyxySYC0ySNzBN9Ayv9r3y4sn%2B8q8tHox02HSxAIgIbf6yyBQZwyJzxxEZ4%2BLKWYcuA4ZhjJgXMoQ%2FRwoifIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ1mI%2BKVr8kn17A%2ByrcAz2SGroNXO%2BwS7Wp65V1ULobVd%2ByrJgEk8bUNEYwgmXxOGg9KfkbM5hbjk9KlAcHhwhrZ1%2BDZYdCH4QdDQr6RXA%2F8u4bHn%2FmEnf%2FYV7ZIU7L1bQE5xojPEJOxJEpArbthRPptyMnusbR6xYLi6S2bS96TSUtEb%2BE6JRu3oEKuUJIZ0QNZNaoszb8FvGyfGCUOHBp3zTZeXtEoGFjgSc%2BPiwVlW6JZ7XCcmt5n%2BwNCZnMeL21M9QAi3Fh7JWdEmTnAR3iVLXzUQBlzBbpGqparul8MhlyCrneMdbm1BJGm0eDcILTF1vr%2BT5dBvvBQT71LyT0KUvhU063rzgUk%2FVEt%2Fy8X%2Bo8Eb54vKylbJtkrSVQ3osRG%2B3HkgFJMP6txg1zBXEcOcK5u3eawzCpHuxqLCH2QXgzBKghBL7f2bPfYMxY0ChNKpFmkNhTnoN0kjYKDysLKLILm8ospw613cTxVQsxKb5ApqfoO2xJiru8f30IjKMMrSlnkWAb0hsf9LHU6pa0ptucHnNfUcxOx700wqf%2FUPxzl9ElcFdEToQ0kLGoRu4nBtOQZVhsxf5Pav5osOQ8nJG%2F4rm0AIBXQ8Syjby2ZBh2K7AhQp42U5pjg9TIHedwVTCUwZDfMbeuMNvB78EGOqUBam3f19bjKWAhtHRHkqVhPlLFKrLzyWeqAhzSe31u6ELPGAbIqDBTHNbBXXt6f%2FtRJeV%2FcuhkiiyXHkDWp6LMywcxZmrNTZSOY70BauUE0NcdWceLNtASTd%2BToBSBO4Iu%2FxLkkUnqz%2BIMDkTDzN8tpx3UyIBCTVkgIlw5oRvXjxaqfIxpR34gNv4CbHghRS%2BeoCLeT%2BoFtPQ%2BOrKLQoTLzWLBJRtR&X-Amz-Signature=98e39ba31a13ac6908f10427d8d679638067c20f1568a3209adf915d673d3652&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LDCGP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDG35QvyxySYC0ySNzBN9Ayv9r3y4sn%2B8q8tHox02HSxAIgIbf6yyBQZwyJzxxEZ4%2BLKWYcuA4ZhjJgXMoQ%2FRwoifIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ1mI%2BKVr8kn17A%2ByrcAz2SGroNXO%2BwS7Wp65V1ULobVd%2ByrJgEk8bUNEYwgmXxOGg9KfkbM5hbjk9KlAcHhwhrZ1%2BDZYdCH4QdDQr6RXA%2F8u4bHn%2FmEnf%2FYV7ZIU7L1bQE5xojPEJOxJEpArbthRPptyMnusbR6xYLi6S2bS96TSUtEb%2BE6JRu3oEKuUJIZ0QNZNaoszb8FvGyfGCUOHBp3zTZeXtEoGFjgSc%2BPiwVlW6JZ7XCcmt5n%2BwNCZnMeL21M9QAi3Fh7JWdEmTnAR3iVLXzUQBlzBbpGqparul8MhlyCrneMdbm1BJGm0eDcILTF1vr%2BT5dBvvBQT71LyT0KUvhU063rzgUk%2FVEt%2Fy8X%2Bo8Eb54vKylbJtkrSVQ3osRG%2B3HkgFJMP6txg1zBXEcOcK5u3eawzCpHuxqLCH2QXgzBKghBL7f2bPfYMxY0ChNKpFmkNhTnoN0kjYKDysLKLILm8ospw613cTxVQsxKb5ApqfoO2xJiru8f30IjKMMrSlnkWAb0hsf9LHU6pa0ptucHnNfUcxOx700wqf%2FUPxzl9ElcFdEToQ0kLGoRu4nBtOQZVhsxf5Pav5osOQ8nJG%2F4rm0AIBXQ8Syjby2ZBh2K7AhQp42U5pjg9TIHedwVTCUwZDfMbeuMNvB78EGOqUBam3f19bjKWAhtHRHkqVhPlLFKrLzyWeqAhzSe31u6ELPGAbIqDBTHNbBXXt6f%2FtRJeV%2FcuhkiiyXHkDWp6LMywcxZmrNTZSOY70BauUE0NcdWceLNtASTd%2BToBSBO4Iu%2FxLkkUnqz%2BIMDkTDzN8tpx3UyIBCTVkgIlw5oRvXjxaqfIxpR34gNv4CbHghRS%2BeoCLeT%2BoFtPQ%2BOrKLQoTLzWLBJRtR&X-Amz-Signature=f1696ca046c0f6b2da4dc3190e1bea313e417bd4a5336a2c9d50d293859d2793&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LDCGP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDG35QvyxySYC0ySNzBN9Ayv9r3y4sn%2B8q8tHox02HSxAIgIbf6yyBQZwyJzxxEZ4%2BLKWYcuA4ZhjJgXMoQ%2FRwoifIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ1mI%2BKVr8kn17A%2ByrcAz2SGroNXO%2BwS7Wp65V1ULobVd%2ByrJgEk8bUNEYwgmXxOGg9KfkbM5hbjk9KlAcHhwhrZ1%2BDZYdCH4QdDQr6RXA%2F8u4bHn%2FmEnf%2FYV7ZIU7L1bQE5xojPEJOxJEpArbthRPptyMnusbR6xYLi6S2bS96TSUtEb%2BE6JRu3oEKuUJIZ0QNZNaoszb8FvGyfGCUOHBp3zTZeXtEoGFjgSc%2BPiwVlW6JZ7XCcmt5n%2BwNCZnMeL21M9QAi3Fh7JWdEmTnAR3iVLXzUQBlzBbpGqparul8MhlyCrneMdbm1BJGm0eDcILTF1vr%2BT5dBvvBQT71LyT0KUvhU063rzgUk%2FVEt%2Fy8X%2Bo8Eb54vKylbJtkrSVQ3osRG%2B3HkgFJMP6txg1zBXEcOcK5u3eawzCpHuxqLCH2QXgzBKghBL7f2bPfYMxY0ChNKpFmkNhTnoN0kjYKDysLKLILm8ospw613cTxVQsxKb5ApqfoO2xJiru8f30IjKMMrSlnkWAb0hsf9LHU6pa0ptucHnNfUcxOx700wqf%2FUPxzl9ElcFdEToQ0kLGoRu4nBtOQZVhsxf5Pav5osOQ8nJG%2F4rm0AIBXQ8Syjby2ZBh2K7AhQp42U5pjg9TIHedwVTCUwZDfMbeuMNvB78EGOqUBam3f19bjKWAhtHRHkqVhPlLFKrLzyWeqAhzSe31u6ELPGAbIqDBTHNbBXXt6f%2FtRJeV%2FcuhkiiyXHkDWp6LMywcxZmrNTZSOY70BauUE0NcdWceLNtASTd%2BToBSBO4Iu%2FxLkkUnqz%2BIMDkTDzN8tpx3UyIBCTVkgIlw5oRvXjxaqfIxpR34gNv4CbHghRS%2BeoCLeT%2BoFtPQ%2BOrKLQoTLzWLBJRtR&X-Amz-Signature=35869649b00da3ded724d186a89229da9b3614df715b61b3181699f65b2af242&X-Amz-SignedHeaders=host&x-id=GetObject)
