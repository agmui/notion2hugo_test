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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC53ROBL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHZUX0Uq%2FtyY6%2BNMCXDXAiCKr5APX6qDW5pSgMXb1liSAiEAkkXHVKgziOrb55dmOh9D0zyg8%2BnvfWDBTBFNwNA%2FnwMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd%2Be5xqozzS3wNa7ircAyyCGN6ziKn8IkzVE3bOZnjM3CQ1fJ8IUmXQBNQOTy%2BIM6HJNdlClbIMYKnedjFhUrw%2BPAnyOSd09aOREKnTpe8AuthtEEjYAW9q2ixF6XicOrYzavIL24HBV2i06GjG6i7dbBvpCyMM4y7uQUhIeeJ3Q3E9XdJYX6i%2FpdCrQ8Hwdm8lx2zarnt82On9sieEE2U%2FuTOkqgejarPiSdjCuPz5rOBdv7kDOW%2FdghH7glxRvwF79b7v02H71DOoWFMqCfjvh6qTMyL6I7slUWsjspZyNr%2B5blD49wgPyjw7Nfs8K%2Fjx%2BcytURQvo%2BhpmQQJHUQV8IXf3KesZ9mZnV6moYSkkvfaXMK0IajF64zbf6XjyzB9pQppD3aUXMgPEKZj%2FbMSND6ao3UpyIEXCaEtYDBzizPYL2QY%2FcVMyfCCfXNAhHe0ylyJS2ZM5UA47LpEF2K9NeNNruG7Uf5YJFNE2ikjEtkzTCD7PoW9FIbuiyd%2Fh98Tcs4foYuaZxLavEhN8t%2B6vsYJrZJa%2B%2F4I6f%2FVdSX%2B5r6MhLTQiSkaqG1IjapA5hGL75ae6PoYmIvw1v3jMiYc6pvFGjOoKySZL9Myqi2Qq7JJpEwTBps7T2ahfEfsmd29UYZGKoZrM5VZMMeOgsEGOqUBQKdKLNksfi%2BFpgH0ZQ8drj%2BichmqGyhWAOarzfbRJMFqPvej1rzVDM4q9uDEhpJwMCr4XrOoDaqRTys24pKs86DUybptF%2Fhk6pRHg8%2B7zU%2FygMnJ9rlljceWVMcGwyd2GgAB%2B1atVKHSk4Wzbex24zQoVBtRJ9J%2F4cYHLzanV%2FLfuaDrTUsoBKxzsKPICAQp84VEu1gFbcmUySV3hVi8roPEIzqc&X-Amz-Signature=1e0f108a2d1009971ad80dd77398f9d61dd01e9867274755a538cb5b901e8eed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC53ROBL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHZUX0Uq%2FtyY6%2BNMCXDXAiCKr5APX6qDW5pSgMXb1liSAiEAkkXHVKgziOrb55dmOh9D0zyg8%2BnvfWDBTBFNwNA%2FnwMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd%2Be5xqozzS3wNa7ircAyyCGN6ziKn8IkzVE3bOZnjM3CQ1fJ8IUmXQBNQOTy%2BIM6HJNdlClbIMYKnedjFhUrw%2BPAnyOSd09aOREKnTpe8AuthtEEjYAW9q2ixF6XicOrYzavIL24HBV2i06GjG6i7dbBvpCyMM4y7uQUhIeeJ3Q3E9XdJYX6i%2FpdCrQ8Hwdm8lx2zarnt82On9sieEE2U%2FuTOkqgejarPiSdjCuPz5rOBdv7kDOW%2FdghH7glxRvwF79b7v02H71DOoWFMqCfjvh6qTMyL6I7slUWsjspZyNr%2B5blD49wgPyjw7Nfs8K%2Fjx%2BcytURQvo%2BhpmQQJHUQV8IXf3KesZ9mZnV6moYSkkvfaXMK0IajF64zbf6XjyzB9pQppD3aUXMgPEKZj%2FbMSND6ao3UpyIEXCaEtYDBzizPYL2QY%2FcVMyfCCfXNAhHe0ylyJS2ZM5UA47LpEF2K9NeNNruG7Uf5YJFNE2ikjEtkzTCD7PoW9FIbuiyd%2Fh98Tcs4foYuaZxLavEhN8t%2B6vsYJrZJa%2B%2F4I6f%2FVdSX%2B5r6MhLTQiSkaqG1IjapA5hGL75ae6PoYmIvw1v3jMiYc6pvFGjOoKySZL9Myqi2Qq7JJpEwTBps7T2ahfEfsmd29UYZGKoZrM5VZMMeOgsEGOqUBQKdKLNksfi%2BFpgH0ZQ8drj%2BichmqGyhWAOarzfbRJMFqPvej1rzVDM4q9uDEhpJwMCr4XrOoDaqRTys24pKs86DUybptF%2Fhk6pRHg8%2B7zU%2FygMnJ9rlljceWVMcGwyd2GgAB%2B1atVKHSk4Wzbex24zQoVBtRJ9J%2F4cYHLzanV%2FLfuaDrTUsoBKxzsKPICAQp84VEu1gFbcmUySV3hVi8roPEIzqc&X-Amz-Signature=24e2960f94f02ea79234d4a2cecd88f9d644e54c5df01575237599e45c3a1bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC53ROBL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHZUX0Uq%2FtyY6%2BNMCXDXAiCKr5APX6qDW5pSgMXb1liSAiEAkkXHVKgziOrb55dmOh9D0zyg8%2BnvfWDBTBFNwNA%2FnwMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd%2Be5xqozzS3wNa7ircAyyCGN6ziKn8IkzVE3bOZnjM3CQ1fJ8IUmXQBNQOTy%2BIM6HJNdlClbIMYKnedjFhUrw%2BPAnyOSd09aOREKnTpe8AuthtEEjYAW9q2ixF6XicOrYzavIL24HBV2i06GjG6i7dbBvpCyMM4y7uQUhIeeJ3Q3E9XdJYX6i%2FpdCrQ8Hwdm8lx2zarnt82On9sieEE2U%2FuTOkqgejarPiSdjCuPz5rOBdv7kDOW%2FdghH7glxRvwF79b7v02H71DOoWFMqCfjvh6qTMyL6I7slUWsjspZyNr%2B5blD49wgPyjw7Nfs8K%2Fjx%2BcytURQvo%2BhpmQQJHUQV8IXf3KesZ9mZnV6moYSkkvfaXMK0IajF64zbf6XjyzB9pQppD3aUXMgPEKZj%2FbMSND6ao3UpyIEXCaEtYDBzizPYL2QY%2FcVMyfCCfXNAhHe0ylyJS2ZM5UA47LpEF2K9NeNNruG7Uf5YJFNE2ikjEtkzTCD7PoW9FIbuiyd%2Fh98Tcs4foYuaZxLavEhN8t%2B6vsYJrZJa%2B%2F4I6f%2FVdSX%2B5r6MhLTQiSkaqG1IjapA5hGL75ae6PoYmIvw1v3jMiYc6pvFGjOoKySZL9Myqi2Qq7JJpEwTBps7T2ahfEfsmd29UYZGKoZrM5VZMMeOgsEGOqUBQKdKLNksfi%2BFpgH0ZQ8drj%2BichmqGyhWAOarzfbRJMFqPvej1rzVDM4q9uDEhpJwMCr4XrOoDaqRTys24pKs86DUybptF%2Fhk6pRHg8%2B7zU%2FygMnJ9rlljceWVMcGwyd2GgAB%2B1atVKHSk4Wzbex24zQoVBtRJ9J%2F4cYHLzanV%2FLfuaDrTUsoBKxzsKPICAQp84VEu1gFbcmUySV3hVi8roPEIzqc&X-Amz-Signature=b607ec6fba73bffafae4965cddd1a46dd28f7e95edd0236c7d6c55a9b1cea8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC53ROBL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHZUX0Uq%2FtyY6%2BNMCXDXAiCKr5APX6qDW5pSgMXb1liSAiEAkkXHVKgziOrb55dmOh9D0zyg8%2BnvfWDBTBFNwNA%2FnwMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd%2Be5xqozzS3wNa7ircAyyCGN6ziKn8IkzVE3bOZnjM3CQ1fJ8IUmXQBNQOTy%2BIM6HJNdlClbIMYKnedjFhUrw%2BPAnyOSd09aOREKnTpe8AuthtEEjYAW9q2ixF6XicOrYzavIL24HBV2i06GjG6i7dbBvpCyMM4y7uQUhIeeJ3Q3E9XdJYX6i%2FpdCrQ8Hwdm8lx2zarnt82On9sieEE2U%2FuTOkqgejarPiSdjCuPz5rOBdv7kDOW%2FdghH7glxRvwF79b7v02H71DOoWFMqCfjvh6qTMyL6I7slUWsjspZyNr%2B5blD49wgPyjw7Nfs8K%2Fjx%2BcytURQvo%2BhpmQQJHUQV8IXf3KesZ9mZnV6moYSkkvfaXMK0IajF64zbf6XjyzB9pQppD3aUXMgPEKZj%2FbMSND6ao3UpyIEXCaEtYDBzizPYL2QY%2FcVMyfCCfXNAhHe0ylyJS2ZM5UA47LpEF2K9NeNNruG7Uf5YJFNE2ikjEtkzTCD7PoW9FIbuiyd%2Fh98Tcs4foYuaZxLavEhN8t%2B6vsYJrZJa%2B%2F4I6f%2FVdSX%2B5r6MhLTQiSkaqG1IjapA5hGL75ae6PoYmIvw1v3jMiYc6pvFGjOoKySZL9Myqi2Qq7JJpEwTBps7T2ahfEfsmd29UYZGKoZrM5VZMMeOgsEGOqUBQKdKLNksfi%2BFpgH0ZQ8drj%2BichmqGyhWAOarzfbRJMFqPvej1rzVDM4q9uDEhpJwMCr4XrOoDaqRTys24pKs86DUybptF%2Fhk6pRHg8%2B7zU%2FygMnJ9rlljceWVMcGwyd2GgAB%2B1atVKHSk4Wzbex24zQoVBtRJ9J%2F4cYHLzanV%2FLfuaDrTUsoBKxzsKPICAQp84VEu1gFbcmUySV3hVi8roPEIzqc&X-Amz-Signature=7ed06ceefb9b2e660f76e4f9b53741b678f2c8fbc5a756db60446c802c68601b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC53ROBL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHZUX0Uq%2FtyY6%2BNMCXDXAiCKr5APX6qDW5pSgMXb1liSAiEAkkXHVKgziOrb55dmOh9D0zyg8%2BnvfWDBTBFNwNA%2FnwMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd%2Be5xqozzS3wNa7ircAyyCGN6ziKn8IkzVE3bOZnjM3CQ1fJ8IUmXQBNQOTy%2BIM6HJNdlClbIMYKnedjFhUrw%2BPAnyOSd09aOREKnTpe8AuthtEEjYAW9q2ixF6XicOrYzavIL24HBV2i06GjG6i7dbBvpCyMM4y7uQUhIeeJ3Q3E9XdJYX6i%2FpdCrQ8Hwdm8lx2zarnt82On9sieEE2U%2FuTOkqgejarPiSdjCuPz5rOBdv7kDOW%2FdghH7glxRvwF79b7v02H71DOoWFMqCfjvh6qTMyL6I7slUWsjspZyNr%2B5blD49wgPyjw7Nfs8K%2Fjx%2BcytURQvo%2BhpmQQJHUQV8IXf3KesZ9mZnV6moYSkkvfaXMK0IajF64zbf6XjyzB9pQppD3aUXMgPEKZj%2FbMSND6ao3UpyIEXCaEtYDBzizPYL2QY%2FcVMyfCCfXNAhHe0ylyJS2ZM5UA47LpEF2K9NeNNruG7Uf5YJFNE2ikjEtkzTCD7PoW9FIbuiyd%2Fh98Tcs4foYuaZxLavEhN8t%2B6vsYJrZJa%2B%2F4I6f%2FVdSX%2B5r6MhLTQiSkaqG1IjapA5hGL75ae6PoYmIvw1v3jMiYc6pvFGjOoKySZL9Myqi2Qq7JJpEwTBps7T2ahfEfsmd29UYZGKoZrM5VZMMeOgsEGOqUBQKdKLNksfi%2BFpgH0ZQ8drj%2BichmqGyhWAOarzfbRJMFqPvej1rzVDM4q9uDEhpJwMCr4XrOoDaqRTys24pKs86DUybptF%2Fhk6pRHg8%2B7zU%2FygMnJ9rlljceWVMcGwyd2GgAB%2B1atVKHSk4Wzbex24zQoVBtRJ9J%2F4cYHLzanV%2FLfuaDrTUsoBKxzsKPICAQp84VEu1gFbcmUySV3hVi8roPEIzqc&X-Amz-Signature=e7f9fa260fe2c2d9e1c7ea19ba959c7cc2ec192425e8f9452db3678fa1685691&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC53ROBL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHZUX0Uq%2FtyY6%2BNMCXDXAiCKr5APX6qDW5pSgMXb1liSAiEAkkXHVKgziOrb55dmOh9D0zyg8%2BnvfWDBTBFNwNA%2FnwMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd%2Be5xqozzS3wNa7ircAyyCGN6ziKn8IkzVE3bOZnjM3CQ1fJ8IUmXQBNQOTy%2BIM6HJNdlClbIMYKnedjFhUrw%2BPAnyOSd09aOREKnTpe8AuthtEEjYAW9q2ixF6XicOrYzavIL24HBV2i06GjG6i7dbBvpCyMM4y7uQUhIeeJ3Q3E9XdJYX6i%2FpdCrQ8Hwdm8lx2zarnt82On9sieEE2U%2FuTOkqgejarPiSdjCuPz5rOBdv7kDOW%2FdghH7glxRvwF79b7v02H71DOoWFMqCfjvh6qTMyL6I7slUWsjspZyNr%2B5blD49wgPyjw7Nfs8K%2Fjx%2BcytURQvo%2BhpmQQJHUQV8IXf3KesZ9mZnV6moYSkkvfaXMK0IajF64zbf6XjyzB9pQppD3aUXMgPEKZj%2FbMSND6ao3UpyIEXCaEtYDBzizPYL2QY%2FcVMyfCCfXNAhHe0ylyJS2ZM5UA47LpEF2K9NeNNruG7Uf5YJFNE2ikjEtkzTCD7PoW9FIbuiyd%2Fh98Tcs4foYuaZxLavEhN8t%2B6vsYJrZJa%2B%2F4I6f%2FVdSX%2B5r6MhLTQiSkaqG1IjapA5hGL75ae6PoYmIvw1v3jMiYc6pvFGjOoKySZL9Myqi2Qq7JJpEwTBps7T2ahfEfsmd29UYZGKoZrM5VZMMeOgsEGOqUBQKdKLNksfi%2BFpgH0ZQ8drj%2BichmqGyhWAOarzfbRJMFqPvej1rzVDM4q9uDEhpJwMCr4XrOoDaqRTys24pKs86DUybptF%2Fhk6pRHg8%2B7zU%2FygMnJ9rlljceWVMcGwyd2GgAB%2B1atVKHSk4Wzbex24zQoVBtRJ9J%2F4cYHLzanV%2FLfuaDrTUsoBKxzsKPICAQp84VEu1gFbcmUySV3hVi8roPEIzqc&X-Amz-Signature=35ea88399ff024b3274005369d8d70d4d98991f2a74e7b7af35da2bfef799168&X-Amz-SignedHeaders=host&x-id=GetObject)
