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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCRNDJN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwV8bkP%2FL%2Fm8YaD9M4OQEGTeyP6m%2FKu5LnFWQNpBoAAiAsfdpKeJtM0rtIU0hgUwTkZl1U9j%2FrO8JxC07PjsVVcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwF9qefckzqqPlLCZKtwDtY0yHLXLGw52K1beWTIE6zNZUdP1nWZGG1PuqIMYC%2BDWqM6BwnGIiwzZBgL%2FnKJtzsDmAHw2RH5LG27gYNVLKPHSZRozmJBaShNewG6aa0iiyUGc0MYMk013IHA%2FprY%2BtDP8Udcl1GKO8N2v8%2BbiaC2XKfNYC2taflM%2B3OarA8JJ6sWCzqJhnszCP92wI2ia6wCux0qgiTBQoILIyDtE9clYnNHLzxufSZ3c3RJJzH%2BLHvBxd%2Fr%2BVzYQCfFA2YW%2FUEtPV2JEkSyZD%2BNNAF1ZtQjZ4MTVyBg5CMijRdW%2BOA9wviGPaQEva5ujWliHlXOuEVa36KAN2x3c8R7dnuWP2i2l25EPsTZ1IMP3tIuyXaomMNmV%2F%2F%2FnUcuoyULMNdCmaJUsW49%2Bj6M1wv1SvP44xmYGJ%2BRz4IPjjJC35Ld%2FObzJ5Twys%2BJDCM3%2FSNFWhjvWEb6NPVhtHTMV3T9B%2BMB4YPbNzo7OuFCXDv%2BafRLCJ%2F4YWde7ot%2BCCGURwOTu8LxUIQUdimleRdJavvkX0aSMcxcTRC2tx8XZDNCeGFBCpao5OPX6RBiHybwRMumsKrD3KqCyF0wwQZy2nnk7Kk4evlWsFUz9RF9cjKNNANckju%2FK4vcHzYHsUH4BKrowxeCgwQY6pgF79IIUT4Dq6TeAbsnEP8wbbnTu27FbiaBlMf7Cww5aqggnCajZ73wGEzBzzeENLgAKVI7QXOguvYc5nIFp0WuxPIDbyb92DVHNcWlj4VfVmsnQFv%2BQxZ%2BLdZAMX8SUGKkqHnYjX47%2FhecX75xd9hUexYocDt7DL55UsvAaWdRQDxQ2iDO0ERvGUcM8g6nrbdufeQtIips2rmGZplx4oMEPGIEwXAZT&X-Amz-Signature=c4749061955198ccae06b08239a061f624b80c50827d598c612acf7b1470279a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCRNDJN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwV8bkP%2FL%2Fm8YaD9M4OQEGTeyP6m%2FKu5LnFWQNpBoAAiAsfdpKeJtM0rtIU0hgUwTkZl1U9j%2FrO8JxC07PjsVVcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwF9qefckzqqPlLCZKtwDtY0yHLXLGw52K1beWTIE6zNZUdP1nWZGG1PuqIMYC%2BDWqM6BwnGIiwzZBgL%2FnKJtzsDmAHw2RH5LG27gYNVLKPHSZRozmJBaShNewG6aa0iiyUGc0MYMk013IHA%2FprY%2BtDP8Udcl1GKO8N2v8%2BbiaC2XKfNYC2taflM%2B3OarA8JJ6sWCzqJhnszCP92wI2ia6wCux0qgiTBQoILIyDtE9clYnNHLzxufSZ3c3RJJzH%2BLHvBxd%2Fr%2BVzYQCfFA2YW%2FUEtPV2JEkSyZD%2BNNAF1ZtQjZ4MTVyBg5CMijRdW%2BOA9wviGPaQEva5ujWliHlXOuEVa36KAN2x3c8R7dnuWP2i2l25EPsTZ1IMP3tIuyXaomMNmV%2F%2F%2FnUcuoyULMNdCmaJUsW49%2Bj6M1wv1SvP44xmYGJ%2BRz4IPjjJC35Ld%2FObzJ5Twys%2BJDCM3%2FSNFWhjvWEb6NPVhtHTMV3T9B%2BMB4YPbNzo7OuFCXDv%2BafRLCJ%2F4YWde7ot%2BCCGURwOTu8LxUIQUdimleRdJavvkX0aSMcxcTRC2tx8XZDNCeGFBCpao5OPX6RBiHybwRMumsKrD3KqCyF0wwQZy2nnk7Kk4evlWsFUz9RF9cjKNNANckju%2FK4vcHzYHsUH4BKrowxeCgwQY6pgF79IIUT4Dq6TeAbsnEP8wbbnTu27FbiaBlMf7Cww5aqggnCajZ73wGEzBzzeENLgAKVI7QXOguvYc5nIFp0WuxPIDbyb92DVHNcWlj4VfVmsnQFv%2BQxZ%2BLdZAMX8SUGKkqHnYjX47%2FhecX75xd9hUexYocDt7DL55UsvAaWdRQDxQ2iDO0ERvGUcM8g6nrbdufeQtIips2rmGZplx4oMEPGIEwXAZT&X-Amz-Signature=25edcfa3a8f4b2afa16ec70564afaef1a11ebeb6ac20fbfdfaa87642917a5772&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCRNDJN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwV8bkP%2FL%2Fm8YaD9M4OQEGTeyP6m%2FKu5LnFWQNpBoAAiAsfdpKeJtM0rtIU0hgUwTkZl1U9j%2FrO8JxC07PjsVVcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwF9qefckzqqPlLCZKtwDtY0yHLXLGw52K1beWTIE6zNZUdP1nWZGG1PuqIMYC%2BDWqM6BwnGIiwzZBgL%2FnKJtzsDmAHw2RH5LG27gYNVLKPHSZRozmJBaShNewG6aa0iiyUGc0MYMk013IHA%2FprY%2BtDP8Udcl1GKO8N2v8%2BbiaC2XKfNYC2taflM%2B3OarA8JJ6sWCzqJhnszCP92wI2ia6wCux0qgiTBQoILIyDtE9clYnNHLzxufSZ3c3RJJzH%2BLHvBxd%2Fr%2BVzYQCfFA2YW%2FUEtPV2JEkSyZD%2BNNAF1ZtQjZ4MTVyBg5CMijRdW%2BOA9wviGPaQEva5ujWliHlXOuEVa36KAN2x3c8R7dnuWP2i2l25EPsTZ1IMP3tIuyXaomMNmV%2F%2F%2FnUcuoyULMNdCmaJUsW49%2Bj6M1wv1SvP44xmYGJ%2BRz4IPjjJC35Ld%2FObzJ5Twys%2BJDCM3%2FSNFWhjvWEb6NPVhtHTMV3T9B%2BMB4YPbNzo7OuFCXDv%2BafRLCJ%2F4YWde7ot%2BCCGURwOTu8LxUIQUdimleRdJavvkX0aSMcxcTRC2tx8XZDNCeGFBCpao5OPX6RBiHybwRMumsKrD3KqCyF0wwQZy2nnk7Kk4evlWsFUz9RF9cjKNNANckju%2FK4vcHzYHsUH4BKrowxeCgwQY6pgF79IIUT4Dq6TeAbsnEP8wbbnTu27FbiaBlMf7Cww5aqggnCajZ73wGEzBzzeENLgAKVI7QXOguvYc5nIFp0WuxPIDbyb92DVHNcWlj4VfVmsnQFv%2BQxZ%2BLdZAMX8SUGKkqHnYjX47%2FhecX75xd9hUexYocDt7DL55UsvAaWdRQDxQ2iDO0ERvGUcM8g6nrbdufeQtIips2rmGZplx4oMEPGIEwXAZT&X-Amz-Signature=24fc60daa038fe9b1a6e87a7bf9b9c3af1fbc18ee79a0fd929bf18bf4fed3592&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCRNDJN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwV8bkP%2FL%2Fm8YaD9M4OQEGTeyP6m%2FKu5LnFWQNpBoAAiAsfdpKeJtM0rtIU0hgUwTkZl1U9j%2FrO8JxC07PjsVVcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwF9qefckzqqPlLCZKtwDtY0yHLXLGw52K1beWTIE6zNZUdP1nWZGG1PuqIMYC%2BDWqM6BwnGIiwzZBgL%2FnKJtzsDmAHw2RH5LG27gYNVLKPHSZRozmJBaShNewG6aa0iiyUGc0MYMk013IHA%2FprY%2BtDP8Udcl1GKO8N2v8%2BbiaC2XKfNYC2taflM%2B3OarA8JJ6sWCzqJhnszCP92wI2ia6wCux0qgiTBQoILIyDtE9clYnNHLzxufSZ3c3RJJzH%2BLHvBxd%2Fr%2BVzYQCfFA2YW%2FUEtPV2JEkSyZD%2BNNAF1ZtQjZ4MTVyBg5CMijRdW%2BOA9wviGPaQEva5ujWliHlXOuEVa36KAN2x3c8R7dnuWP2i2l25EPsTZ1IMP3tIuyXaomMNmV%2F%2F%2FnUcuoyULMNdCmaJUsW49%2Bj6M1wv1SvP44xmYGJ%2BRz4IPjjJC35Ld%2FObzJ5Twys%2BJDCM3%2FSNFWhjvWEb6NPVhtHTMV3T9B%2BMB4YPbNzo7OuFCXDv%2BafRLCJ%2F4YWde7ot%2BCCGURwOTu8LxUIQUdimleRdJavvkX0aSMcxcTRC2tx8XZDNCeGFBCpao5OPX6RBiHybwRMumsKrD3KqCyF0wwQZy2nnk7Kk4evlWsFUz9RF9cjKNNANckju%2FK4vcHzYHsUH4BKrowxeCgwQY6pgF79IIUT4Dq6TeAbsnEP8wbbnTu27FbiaBlMf7Cww5aqggnCajZ73wGEzBzzeENLgAKVI7QXOguvYc5nIFp0WuxPIDbyb92DVHNcWlj4VfVmsnQFv%2BQxZ%2BLdZAMX8SUGKkqHnYjX47%2FhecX75xd9hUexYocDt7DL55UsvAaWdRQDxQ2iDO0ERvGUcM8g6nrbdufeQtIips2rmGZplx4oMEPGIEwXAZT&X-Amz-Signature=5a24076151ff6a58e336fbef9aa41ffd6b02aaac8fdedf4adf22941e0612f537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCRNDJN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwV8bkP%2FL%2Fm8YaD9M4OQEGTeyP6m%2FKu5LnFWQNpBoAAiAsfdpKeJtM0rtIU0hgUwTkZl1U9j%2FrO8JxC07PjsVVcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwF9qefckzqqPlLCZKtwDtY0yHLXLGw52K1beWTIE6zNZUdP1nWZGG1PuqIMYC%2BDWqM6BwnGIiwzZBgL%2FnKJtzsDmAHw2RH5LG27gYNVLKPHSZRozmJBaShNewG6aa0iiyUGc0MYMk013IHA%2FprY%2BtDP8Udcl1GKO8N2v8%2BbiaC2XKfNYC2taflM%2B3OarA8JJ6sWCzqJhnszCP92wI2ia6wCux0qgiTBQoILIyDtE9clYnNHLzxufSZ3c3RJJzH%2BLHvBxd%2Fr%2BVzYQCfFA2YW%2FUEtPV2JEkSyZD%2BNNAF1ZtQjZ4MTVyBg5CMijRdW%2BOA9wviGPaQEva5ujWliHlXOuEVa36KAN2x3c8R7dnuWP2i2l25EPsTZ1IMP3tIuyXaomMNmV%2F%2F%2FnUcuoyULMNdCmaJUsW49%2Bj6M1wv1SvP44xmYGJ%2BRz4IPjjJC35Ld%2FObzJ5Twys%2BJDCM3%2FSNFWhjvWEb6NPVhtHTMV3T9B%2BMB4YPbNzo7OuFCXDv%2BafRLCJ%2F4YWde7ot%2BCCGURwOTu8LxUIQUdimleRdJavvkX0aSMcxcTRC2tx8XZDNCeGFBCpao5OPX6RBiHybwRMumsKrD3KqCyF0wwQZy2nnk7Kk4evlWsFUz9RF9cjKNNANckju%2FK4vcHzYHsUH4BKrowxeCgwQY6pgF79IIUT4Dq6TeAbsnEP8wbbnTu27FbiaBlMf7Cww5aqggnCajZ73wGEzBzzeENLgAKVI7QXOguvYc5nIFp0WuxPIDbyb92DVHNcWlj4VfVmsnQFv%2BQxZ%2BLdZAMX8SUGKkqHnYjX47%2FhecX75xd9hUexYocDt7DL55UsvAaWdRQDxQ2iDO0ERvGUcM8g6nrbdufeQtIips2rmGZplx4oMEPGIEwXAZT&X-Amz-Signature=24d75dc339c91c98f4b4ca7db93c30266b46c0d0adba5af6e1a87e03951e7bda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCRNDJN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZwV8bkP%2FL%2Fm8YaD9M4OQEGTeyP6m%2FKu5LnFWQNpBoAAiAsfdpKeJtM0rtIU0hgUwTkZl1U9j%2FrO8JxC07PjsVVcSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwF9qefckzqqPlLCZKtwDtY0yHLXLGw52K1beWTIE6zNZUdP1nWZGG1PuqIMYC%2BDWqM6BwnGIiwzZBgL%2FnKJtzsDmAHw2RH5LG27gYNVLKPHSZRozmJBaShNewG6aa0iiyUGc0MYMk013IHA%2FprY%2BtDP8Udcl1GKO8N2v8%2BbiaC2XKfNYC2taflM%2B3OarA8JJ6sWCzqJhnszCP92wI2ia6wCux0qgiTBQoILIyDtE9clYnNHLzxufSZ3c3RJJzH%2BLHvBxd%2Fr%2BVzYQCfFA2YW%2FUEtPV2JEkSyZD%2BNNAF1ZtQjZ4MTVyBg5CMijRdW%2BOA9wviGPaQEva5ujWliHlXOuEVa36KAN2x3c8R7dnuWP2i2l25EPsTZ1IMP3tIuyXaomMNmV%2F%2F%2FnUcuoyULMNdCmaJUsW49%2Bj6M1wv1SvP44xmYGJ%2BRz4IPjjJC35Ld%2FObzJ5Twys%2BJDCM3%2FSNFWhjvWEb6NPVhtHTMV3T9B%2BMB4YPbNzo7OuFCXDv%2BafRLCJ%2F4YWde7ot%2BCCGURwOTu8LxUIQUdimleRdJavvkX0aSMcxcTRC2tx8XZDNCeGFBCpao5OPX6RBiHybwRMumsKrD3KqCyF0wwQZy2nnk7Kk4evlWsFUz9RF9cjKNNANckju%2FK4vcHzYHsUH4BKrowxeCgwQY6pgF79IIUT4Dq6TeAbsnEP8wbbnTu27FbiaBlMf7Cww5aqggnCajZ73wGEzBzzeENLgAKVI7QXOguvYc5nIFp0WuxPIDbyb92DVHNcWlj4VfVmsnQFv%2BQxZ%2BLdZAMX8SUGKkqHnYjX47%2FhecX75xd9hUexYocDt7DL55UsvAaWdRQDxQ2iDO0ERvGUcM8g6nrbdufeQtIips2rmGZplx4oMEPGIEwXAZT&X-Amz-Signature=1671644394b51d653efe40b29a31941830f73cbcac667a64f76c9a7a95ffc400&X-Amz-SignedHeaders=host&x-id=GetObject)
