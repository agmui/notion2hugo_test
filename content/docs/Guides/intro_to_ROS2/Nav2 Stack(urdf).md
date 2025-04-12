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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GATRGSU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF4DFwwOJFzltJYkm3EnlWxdWNeMWrg6h7CjfBOHdhsRAiAGu63cnUjKVaPtNQ4LsYAbyDSIJmY3L4tC2ikXHbxFtyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYej7An6vrhUiBgK0KtwDWCYbHuDJapmd9iav8eJBkQ6fNDWMk3rNh7%2FIGEEyi%2Fdr7YGoC7nn6Z2sUi2ynytrr1HThpj65%2FHS7F18yiGcnGV5%2BLMv5wuOuF6G7BtnRN3HdgjlDoD4peYg0kGYB%2B%2FPQgUIweHWS%2BPPWhVZMgDYI%2BdFqXm%2B8N%2BU%2FkpJ6QMX3bTRbS7AgKbBwvRbuarDcGMqoEuq8l5akCN7rTPwkmSC8RlSkBpnNewE2hnKYkISgksu8i7gWmd7Z2F0kuiepFTWTiqvnqZw5KvbXI9%2BqhDAdzsg6MTKZFY39M2v2RTb7d9qEdM6pmKfGo6UstgcMyS9UkfQac3ufweQczSgGT4qEw5FfumMR9ySSoLaoAPwtGGiywc%2F1mptgzCbq9WJ9hffquYSM%2FHdHZ92Rlv6XFDcghSOcFZLbZU3swd5mekSHQf7cswirOv9pDbRSPzxofV7dZXJj84xgm44ljdQa6qNQ1sbXPaHhQWqoo8Xf%2BhrCESPh1DoxcKwpK%2FxbxktByQjGzJvQBkALs3JnEzA4XKZXpZhCy2bt3xJLTuQeflRJVeFK%2F%2FBzN6uJmQlzJ7%2BmvTS5GHkPmmTQaEQSURiTwefpnl8pjoKxgge1ZUggSvuAa2sNE4KbPBgWUS%2BICAw3rDrvwY6pgEpNJ%2B4JNuSmJrXTtEctN9ZEP0vLzOJl%2F%2FuuYBlDpk5lzrrAmeYwNWj2dn2fEviCz6u4g%2F5o9twigzKn333ohhUHffI6lsVnhyxi8qk2HZdBSyNIwF7msqPWKufNU2ZWZv4v%2FZc0uSRRQVYgWqWWPnrqOxlI0MEF%2BNWBtvuPqHcM2M%2Fy8v7opD0izQgAOQUWhZCO2Q1QDKLtt%2BPVy08L8m7Qw6UVUu8&X-Amz-Signature=b687999ff2fec958d29f9c36c5912c5b38e229b3236a4cf08631015ddfb6e295&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GATRGSU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF4DFwwOJFzltJYkm3EnlWxdWNeMWrg6h7CjfBOHdhsRAiAGu63cnUjKVaPtNQ4LsYAbyDSIJmY3L4tC2ikXHbxFtyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYej7An6vrhUiBgK0KtwDWCYbHuDJapmd9iav8eJBkQ6fNDWMk3rNh7%2FIGEEyi%2Fdr7YGoC7nn6Z2sUi2ynytrr1HThpj65%2FHS7F18yiGcnGV5%2BLMv5wuOuF6G7BtnRN3HdgjlDoD4peYg0kGYB%2B%2FPQgUIweHWS%2BPPWhVZMgDYI%2BdFqXm%2B8N%2BU%2FkpJ6QMX3bTRbS7AgKbBwvRbuarDcGMqoEuq8l5akCN7rTPwkmSC8RlSkBpnNewE2hnKYkISgksu8i7gWmd7Z2F0kuiepFTWTiqvnqZw5KvbXI9%2BqhDAdzsg6MTKZFY39M2v2RTb7d9qEdM6pmKfGo6UstgcMyS9UkfQac3ufweQczSgGT4qEw5FfumMR9ySSoLaoAPwtGGiywc%2F1mptgzCbq9WJ9hffquYSM%2FHdHZ92Rlv6XFDcghSOcFZLbZU3swd5mekSHQf7cswirOv9pDbRSPzxofV7dZXJj84xgm44ljdQa6qNQ1sbXPaHhQWqoo8Xf%2BhrCESPh1DoxcKwpK%2FxbxktByQjGzJvQBkALs3JnEzA4XKZXpZhCy2bt3xJLTuQeflRJVeFK%2F%2FBzN6uJmQlzJ7%2BmvTS5GHkPmmTQaEQSURiTwefpnl8pjoKxgge1ZUggSvuAa2sNE4KbPBgWUS%2BICAw3rDrvwY6pgEpNJ%2B4JNuSmJrXTtEctN9ZEP0vLzOJl%2F%2FuuYBlDpk5lzrrAmeYwNWj2dn2fEviCz6u4g%2F5o9twigzKn333ohhUHffI6lsVnhyxi8qk2HZdBSyNIwF7msqPWKufNU2ZWZv4v%2FZc0uSRRQVYgWqWWPnrqOxlI0MEF%2BNWBtvuPqHcM2M%2Fy8v7opD0izQgAOQUWhZCO2Q1QDKLtt%2BPVy08L8m7Qw6UVUu8&X-Amz-Signature=45c4916fa69b385b2fa175478a7bb070ec4609614ea9fa817da288294f930920&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GATRGSU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF4DFwwOJFzltJYkm3EnlWxdWNeMWrg6h7CjfBOHdhsRAiAGu63cnUjKVaPtNQ4LsYAbyDSIJmY3L4tC2ikXHbxFtyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYej7An6vrhUiBgK0KtwDWCYbHuDJapmd9iav8eJBkQ6fNDWMk3rNh7%2FIGEEyi%2Fdr7YGoC7nn6Z2sUi2ynytrr1HThpj65%2FHS7F18yiGcnGV5%2BLMv5wuOuF6G7BtnRN3HdgjlDoD4peYg0kGYB%2B%2FPQgUIweHWS%2BPPWhVZMgDYI%2BdFqXm%2B8N%2BU%2FkpJ6QMX3bTRbS7AgKbBwvRbuarDcGMqoEuq8l5akCN7rTPwkmSC8RlSkBpnNewE2hnKYkISgksu8i7gWmd7Z2F0kuiepFTWTiqvnqZw5KvbXI9%2BqhDAdzsg6MTKZFY39M2v2RTb7d9qEdM6pmKfGo6UstgcMyS9UkfQac3ufweQczSgGT4qEw5FfumMR9ySSoLaoAPwtGGiywc%2F1mptgzCbq9WJ9hffquYSM%2FHdHZ92Rlv6XFDcghSOcFZLbZU3swd5mekSHQf7cswirOv9pDbRSPzxofV7dZXJj84xgm44ljdQa6qNQ1sbXPaHhQWqoo8Xf%2BhrCESPh1DoxcKwpK%2FxbxktByQjGzJvQBkALs3JnEzA4XKZXpZhCy2bt3xJLTuQeflRJVeFK%2F%2FBzN6uJmQlzJ7%2BmvTS5GHkPmmTQaEQSURiTwefpnl8pjoKxgge1ZUggSvuAa2sNE4KbPBgWUS%2BICAw3rDrvwY6pgEpNJ%2B4JNuSmJrXTtEctN9ZEP0vLzOJl%2F%2FuuYBlDpk5lzrrAmeYwNWj2dn2fEviCz6u4g%2F5o9twigzKn333ohhUHffI6lsVnhyxi8qk2HZdBSyNIwF7msqPWKufNU2ZWZv4v%2FZc0uSRRQVYgWqWWPnrqOxlI0MEF%2BNWBtvuPqHcM2M%2Fy8v7opD0izQgAOQUWhZCO2Q1QDKLtt%2BPVy08L8m7Qw6UVUu8&X-Amz-Signature=828d71483c9067301d21b68b72a0f0f1fdde9a0e0d3f8ba085cd4af39d12ebf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GATRGSU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF4DFwwOJFzltJYkm3EnlWxdWNeMWrg6h7CjfBOHdhsRAiAGu63cnUjKVaPtNQ4LsYAbyDSIJmY3L4tC2ikXHbxFtyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYej7An6vrhUiBgK0KtwDWCYbHuDJapmd9iav8eJBkQ6fNDWMk3rNh7%2FIGEEyi%2Fdr7YGoC7nn6Z2sUi2ynytrr1HThpj65%2FHS7F18yiGcnGV5%2BLMv5wuOuF6G7BtnRN3HdgjlDoD4peYg0kGYB%2B%2FPQgUIweHWS%2BPPWhVZMgDYI%2BdFqXm%2B8N%2BU%2FkpJ6QMX3bTRbS7AgKbBwvRbuarDcGMqoEuq8l5akCN7rTPwkmSC8RlSkBpnNewE2hnKYkISgksu8i7gWmd7Z2F0kuiepFTWTiqvnqZw5KvbXI9%2BqhDAdzsg6MTKZFY39M2v2RTb7d9qEdM6pmKfGo6UstgcMyS9UkfQac3ufweQczSgGT4qEw5FfumMR9ySSoLaoAPwtGGiywc%2F1mptgzCbq9WJ9hffquYSM%2FHdHZ92Rlv6XFDcghSOcFZLbZU3swd5mekSHQf7cswirOv9pDbRSPzxofV7dZXJj84xgm44ljdQa6qNQ1sbXPaHhQWqoo8Xf%2BhrCESPh1DoxcKwpK%2FxbxktByQjGzJvQBkALs3JnEzA4XKZXpZhCy2bt3xJLTuQeflRJVeFK%2F%2FBzN6uJmQlzJ7%2BmvTS5GHkPmmTQaEQSURiTwefpnl8pjoKxgge1ZUggSvuAa2sNE4KbPBgWUS%2BICAw3rDrvwY6pgEpNJ%2B4JNuSmJrXTtEctN9ZEP0vLzOJl%2F%2FuuYBlDpk5lzrrAmeYwNWj2dn2fEviCz6u4g%2F5o9twigzKn333ohhUHffI6lsVnhyxi8qk2HZdBSyNIwF7msqPWKufNU2ZWZv4v%2FZc0uSRRQVYgWqWWPnrqOxlI0MEF%2BNWBtvuPqHcM2M%2Fy8v7opD0izQgAOQUWhZCO2Q1QDKLtt%2BPVy08L8m7Qw6UVUu8&X-Amz-Signature=f226f07a42f93009cd350dffeb618a71ebcb27f401e96db4689eb43ce573d3d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GATRGSU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF4DFwwOJFzltJYkm3EnlWxdWNeMWrg6h7CjfBOHdhsRAiAGu63cnUjKVaPtNQ4LsYAbyDSIJmY3L4tC2ikXHbxFtyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYej7An6vrhUiBgK0KtwDWCYbHuDJapmd9iav8eJBkQ6fNDWMk3rNh7%2FIGEEyi%2Fdr7YGoC7nn6Z2sUi2ynytrr1HThpj65%2FHS7F18yiGcnGV5%2BLMv5wuOuF6G7BtnRN3HdgjlDoD4peYg0kGYB%2B%2FPQgUIweHWS%2BPPWhVZMgDYI%2BdFqXm%2B8N%2BU%2FkpJ6QMX3bTRbS7AgKbBwvRbuarDcGMqoEuq8l5akCN7rTPwkmSC8RlSkBpnNewE2hnKYkISgksu8i7gWmd7Z2F0kuiepFTWTiqvnqZw5KvbXI9%2BqhDAdzsg6MTKZFY39M2v2RTb7d9qEdM6pmKfGo6UstgcMyS9UkfQac3ufweQczSgGT4qEw5FfumMR9ySSoLaoAPwtGGiywc%2F1mptgzCbq9WJ9hffquYSM%2FHdHZ92Rlv6XFDcghSOcFZLbZU3swd5mekSHQf7cswirOv9pDbRSPzxofV7dZXJj84xgm44ljdQa6qNQ1sbXPaHhQWqoo8Xf%2BhrCESPh1DoxcKwpK%2FxbxktByQjGzJvQBkALs3JnEzA4XKZXpZhCy2bt3xJLTuQeflRJVeFK%2F%2FBzN6uJmQlzJ7%2BmvTS5GHkPmmTQaEQSURiTwefpnl8pjoKxgge1ZUggSvuAa2sNE4KbPBgWUS%2BICAw3rDrvwY6pgEpNJ%2B4JNuSmJrXTtEctN9ZEP0vLzOJl%2F%2FuuYBlDpk5lzrrAmeYwNWj2dn2fEviCz6u4g%2F5o9twigzKn333ohhUHffI6lsVnhyxi8qk2HZdBSyNIwF7msqPWKufNU2ZWZv4v%2FZc0uSRRQVYgWqWWPnrqOxlI0MEF%2BNWBtvuPqHcM2M%2Fy8v7opD0izQgAOQUWhZCO2Q1QDKLtt%2BPVy08L8m7Qw6UVUu8&X-Amz-Signature=26f43a2b9bbfd59455a52fb971d2c3e330d2941a0810cc54aa6408f0ab519c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GATRGSU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF4DFwwOJFzltJYkm3EnlWxdWNeMWrg6h7CjfBOHdhsRAiAGu63cnUjKVaPtNQ4LsYAbyDSIJmY3L4tC2ikXHbxFtyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYej7An6vrhUiBgK0KtwDWCYbHuDJapmd9iav8eJBkQ6fNDWMk3rNh7%2FIGEEyi%2Fdr7YGoC7nn6Z2sUi2ynytrr1HThpj65%2FHS7F18yiGcnGV5%2BLMv5wuOuF6G7BtnRN3HdgjlDoD4peYg0kGYB%2B%2FPQgUIweHWS%2BPPWhVZMgDYI%2BdFqXm%2B8N%2BU%2FkpJ6QMX3bTRbS7AgKbBwvRbuarDcGMqoEuq8l5akCN7rTPwkmSC8RlSkBpnNewE2hnKYkISgksu8i7gWmd7Z2F0kuiepFTWTiqvnqZw5KvbXI9%2BqhDAdzsg6MTKZFY39M2v2RTb7d9qEdM6pmKfGo6UstgcMyS9UkfQac3ufweQczSgGT4qEw5FfumMR9ySSoLaoAPwtGGiywc%2F1mptgzCbq9WJ9hffquYSM%2FHdHZ92Rlv6XFDcghSOcFZLbZU3swd5mekSHQf7cswirOv9pDbRSPzxofV7dZXJj84xgm44ljdQa6qNQ1sbXPaHhQWqoo8Xf%2BhrCESPh1DoxcKwpK%2FxbxktByQjGzJvQBkALs3JnEzA4XKZXpZhCy2bt3xJLTuQeflRJVeFK%2F%2FBzN6uJmQlzJ7%2BmvTS5GHkPmmTQaEQSURiTwefpnl8pjoKxgge1ZUggSvuAa2sNE4KbPBgWUS%2BICAw3rDrvwY6pgEpNJ%2B4JNuSmJrXTtEctN9ZEP0vLzOJl%2F%2FuuYBlDpk5lzrrAmeYwNWj2dn2fEviCz6u4g%2F5o9twigzKn333ohhUHffI6lsVnhyxi8qk2HZdBSyNIwF7msqPWKufNU2ZWZv4v%2FZc0uSRRQVYgWqWWPnrqOxlI0MEF%2BNWBtvuPqHcM2M%2Fy8v7opD0izQgAOQUWhZCO2Q1QDKLtt%2BPVy08L8m7Qw6UVUu8&X-Amz-Signature=43f1d15f5b0f98750c5f27b7ae186687bf1053bdd1ceec2602f2ba092bcde35e&X-Amz-SignedHeaders=host&x-id=GetObject)
