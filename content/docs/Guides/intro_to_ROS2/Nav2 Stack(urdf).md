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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGODZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDJ1H1XsZMYLRnxpiVYYcBgBGaiDbmTSJdpnn15%2BkAuhAiApl%2FyR%2FEGW4eeeZvyLTdPtuLSoja3g7ntq9f6HutjDliqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZN%2BJnD%2BGG49P%2FabKtwDn4HyNFuxNHxwBjoZjBr%2BBX8RBulbf7J4JtBwlrZNaAC8ecsfowthjiA3%2BILnEGJKsabWHPanxExUtpDrlLvauvhp6UsLNr7zJqg3afBgFrSTmG7wL1W9OXxbjHhb%2F%2BKq7dg%2F%2F3FdXABvW3LaFpupo1MkpkqD3GFk4tGm2OtEeRuZ8idyiJcxjMoJEIZd91eCZ%2FmuB6chT9olpjytSK4JFsTP7NBSmAp%2F7n0B3dS9fZIVEKrEJs6pPbIeEHIIauQ3zfphE1FxSicngpSetbrHpD%2BpQb3%2FD13s6CItpKXgyAJhg6VaOr3q5VPqDk%2BFmzBG9KqDK83q%2BU5Idplbbf20l0R6iZG0EXJ3zhULMp8NQANTmUeeEL4tnRwWJX27hL0F%2B5IiGa06cSxdV4mzX6F65owHUZMy4EsErs8R%2FakzSyH9e3FqXCXK%2BPbHLLJyEv%2BiEerOPXqL%2F9GdVv8o3Ba1Wm5SijM%2BSDG8oNpuIt7XYUO3C3wuaEgvYgrpgUcJ84DR9bAKt2L12msUOFJlf9Hes2cwMJrBccNdZKVfImYMHiZ4EdtW86Q608R%2BBknSwrpYQVXYXbqB%2FOTeyWB88bwk5czfqaxtqkOtzejT5pASH%2FUB2zPsLW61VLFgLacw2cO3wQY6pgEMHj45XUgkprnhu4pNtTnXnDoRkm0I%2B2SjxMf3cltpxOUhpACJXyYccy6SxOnmQ34W5Vv7ND2P9wzJboC083gTVKIlGPy0Slf%2BaqFRNbqBwBVHIZNJqiu51qI3Pc1WXnDbDyk6rwtr958%2FoOtQ6EzzOBD9r%2BYS%2BtEJ4gL3bVEQRmMTbNXMeRiGmq51gK4zAA4pe%2BipXVw88FCNBhna7zxyvUEW1PSK&X-Amz-Signature=2c55368a54ff6ef2eabdf45949281a2ffdfc348ce6eea6784ee47e576fa17ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGODZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDJ1H1XsZMYLRnxpiVYYcBgBGaiDbmTSJdpnn15%2BkAuhAiApl%2FyR%2FEGW4eeeZvyLTdPtuLSoja3g7ntq9f6HutjDliqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZN%2BJnD%2BGG49P%2FabKtwDn4HyNFuxNHxwBjoZjBr%2BBX8RBulbf7J4JtBwlrZNaAC8ecsfowthjiA3%2BILnEGJKsabWHPanxExUtpDrlLvauvhp6UsLNr7zJqg3afBgFrSTmG7wL1W9OXxbjHhb%2F%2BKq7dg%2F%2F3FdXABvW3LaFpupo1MkpkqD3GFk4tGm2OtEeRuZ8idyiJcxjMoJEIZd91eCZ%2FmuB6chT9olpjytSK4JFsTP7NBSmAp%2F7n0B3dS9fZIVEKrEJs6pPbIeEHIIauQ3zfphE1FxSicngpSetbrHpD%2BpQb3%2FD13s6CItpKXgyAJhg6VaOr3q5VPqDk%2BFmzBG9KqDK83q%2BU5Idplbbf20l0R6iZG0EXJ3zhULMp8NQANTmUeeEL4tnRwWJX27hL0F%2B5IiGa06cSxdV4mzX6F65owHUZMy4EsErs8R%2FakzSyH9e3FqXCXK%2BPbHLLJyEv%2BiEerOPXqL%2F9GdVv8o3Ba1Wm5SijM%2BSDG8oNpuIt7XYUO3C3wuaEgvYgrpgUcJ84DR9bAKt2L12msUOFJlf9Hes2cwMJrBccNdZKVfImYMHiZ4EdtW86Q608R%2BBknSwrpYQVXYXbqB%2FOTeyWB88bwk5czfqaxtqkOtzejT5pASH%2FUB2zPsLW61VLFgLacw2cO3wQY6pgEMHj45XUgkprnhu4pNtTnXnDoRkm0I%2B2SjxMf3cltpxOUhpACJXyYccy6SxOnmQ34W5Vv7ND2P9wzJboC083gTVKIlGPy0Slf%2BaqFRNbqBwBVHIZNJqiu51qI3Pc1WXnDbDyk6rwtr958%2FoOtQ6EzzOBD9r%2BYS%2BtEJ4gL3bVEQRmMTbNXMeRiGmq51gK4zAA4pe%2BipXVw88FCNBhna7zxyvUEW1PSK&X-Amz-Signature=fad174c308f51307dd3976fbd12d2674a46a7eafdf1a590715bbd1af83fc0391&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGODZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDJ1H1XsZMYLRnxpiVYYcBgBGaiDbmTSJdpnn15%2BkAuhAiApl%2FyR%2FEGW4eeeZvyLTdPtuLSoja3g7ntq9f6HutjDliqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZN%2BJnD%2BGG49P%2FabKtwDn4HyNFuxNHxwBjoZjBr%2BBX8RBulbf7J4JtBwlrZNaAC8ecsfowthjiA3%2BILnEGJKsabWHPanxExUtpDrlLvauvhp6UsLNr7zJqg3afBgFrSTmG7wL1W9OXxbjHhb%2F%2BKq7dg%2F%2F3FdXABvW3LaFpupo1MkpkqD3GFk4tGm2OtEeRuZ8idyiJcxjMoJEIZd91eCZ%2FmuB6chT9olpjytSK4JFsTP7NBSmAp%2F7n0B3dS9fZIVEKrEJs6pPbIeEHIIauQ3zfphE1FxSicngpSetbrHpD%2BpQb3%2FD13s6CItpKXgyAJhg6VaOr3q5VPqDk%2BFmzBG9KqDK83q%2BU5Idplbbf20l0R6iZG0EXJ3zhULMp8NQANTmUeeEL4tnRwWJX27hL0F%2B5IiGa06cSxdV4mzX6F65owHUZMy4EsErs8R%2FakzSyH9e3FqXCXK%2BPbHLLJyEv%2BiEerOPXqL%2F9GdVv8o3Ba1Wm5SijM%2BSDG8oNpuIt7XYUO3C3wuaEgvYgrpgUcJ84DR9bAKt2L12msUOFJlf9Hes2cwMJrBccNdZKVfImYMHiZ4EdtW86Q608R%2BBknSwrpYQVXYXbqB%2FOTeyWB88bwk5czfqaxtqkOtzejT5pASH%2FUB2zPsLW61VLFgLacw2cO3wQY6pgEMHj45XUgkprnhu4pNtTnXnDoRkm0I%2B2SjxMf3cltpxOUhpACJXyYccy6SxOnmQ34W5Vv7ND2P9wzJboC083gTVKIlGPy0Slf%2BaqFRNbqBwBVHIZNJqiu51qI3Pc1WXnDbDyk6rwtr958%2FoOtQ6EzzOBD9r%2BYS%2BtEJ4gL3bVEQRmMTbNXMeRiGmq51gK4zAA4pe%2BipXVw88FCNBhna7zxyvUEW1PSK&X-Amz-Signature=587f942960191ecd9291eb203124befb29ff3b36eab30c630fa7bdb524b4f858&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGODZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDJ1H1XsZMYLRnxpiVYYcBgBGaiDbmTSJdpnn15%2BkAuhAiApl%2FyR%2FEGW4eeeZvyLTdPtuLSoja3g7ntq9f6HutjDliqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZN%2BJnD%2BGG49P%2FabKtwDn4HyNFuxNHxwBjoZjBr%2BBX8RBulbf7J4JtBwlrZNaAC8ecsfowthjiA3%2BILnEGJKsabWHPanxExUtpDrlLvauvhp6UsLNr7zJqg3afBgFrSTmG7wL1W9OXxbjHhb%2F%2BKq7dg%2F%2F3FdXABvW3LaFpupo1MkpkqD3GFk4tGm2OtEeRuZ8idyiJcxjMoJEIZd91eCZ%2FmuB6chT9olpjytSK4JFsTP7NBSmAp%2F7n0B3dS9fZIVEKrEJs6pPbIeEHIIauQ3zfphE1FxSicngpSetbrHpD%2BpQb3%2FD13s6CItpKXgyAJhg6VaOr3q5VPqDk%2BFmzBG9KqDK83q%2BU5Idplbbf20l0R6iZG0EXJ3zhULMp8NQANTmUeeEL4tnRwWJX27hL0F%2B5IiGa06cSxdV4mzX6F65owHUZMy4EsErs8R%2FakzSyH9e3FqXCXK%2BPbHLLJyEv%2BiEerOPXqL%2F9GdVv8o3Ba1Wm5SijM%2BSDG8oNpuIt7XYUO3C3wuaEgvYgrpgUcJ84DR9bAKt2L12msUOFJlf9Hes2cwMJrBccNdZKVfImYMHiZ4EdtW86Q608R%2BBknSwrpYQVXYXbqB%2FOTeyWB88bwk5czfqaxtqkOtzejT5pASH%2FUB2zPsLW61VLFgLacw2cO3wQY6pgEMHj45XUgkprnhu4pNtTnXnDoRkm0I%2B2SjxMf3cltpxOUhpACJXyYccy6SxOnmQ34W5Vv7ND2P9wzJboC083gTVKIlGPy0Slf%2BaqFRNbqBwBVHIZNJqiu51qI3Pc1WXnDbDyk6rwtr958%2FoOtQ6EzzOBD9r%2BYS%2BtEJ4gL3bVEQRmMTbNXMeRiGmq51gK4zAA4pe%2BipXVw88FCNBhna7zxyvUEW1PSK&X-Amz-Signature=effe54e5ee6fbbec71c4daf79d79260fa8607eb74f87151437ed87d9272eac56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGODZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDJ1H1XsZMYLRnxpiVYYcBgBGaiDbmTSJdpnn15%2BkAuhAiApl%2FyR%2FEGW4eeeZvyLTdPtuLSoja3g7ntq9f6HutjDliqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZN%2BJnD%2BGG49P%2FabKtwDn4HyNFuxNHxwBjoZjBr%2BBX8RBulbf7J4JtBwlrZNaAC8ecsfowthjiA3%2BILnEGJKsabWHPanxExUtpDrlLvauvhp6UsLNr7zJqg3afBgFrSTmG7wL1W9OXxbjHhb%2F%2BKq7dg%2F%2F3FdXABvW3LaFpupo1MkpkqD3GFk4tGm2OtEeRuZ8idyiJcxjMoJEIZd91eCZ%2FmuB6chT9olpjytSK4JFsTP7NBSmAp%2F7n0B3dS9fZIVEKrEJs6pPbIeEHIIauQ3zfphE1FxSicngpSetbrHpD%2BpQb3%2FD13s6CItpKXgyAJhg6VaOr3q5VPqDk%2BFmzBG9KqDK83q%2BU5Idplbbf20l0R6iZG0EXJ3zhULMp8NQANTmUeeEL4tnRwWJX27hL0F%2B5IiGa06cSxdV4mzX6F65owHUZMy4EsErs8R%2FakzSyH9e3FqXCXK%2BPbHLLJyEv%2BiEerOPXqL%2F9GdVv8o3Ba1Wm5SijM%2BSDG8oNpuIt7XYUO3C3wuaEgvYgrpgUcJ84DR9bAKt2L12msUOFJlf9Hes2cwMJrBccNdZKVfImYMHiZ4EdtW86Q608R%2BBknSwrpYQVXYXbqB%2FOTeyWB88bwk5czfqaxtqkOtzejT5pASH%2FUB2zPsLW61VLFgLacw2cO3wQY6pgEMHj45XUgkprnhu4pNtTnXnDoRkm0I%2B2SjxMf3cltpxOUhpACJXyYccy6SxOnmQ34W5Vv7ND2P9wzJboC083gTVKIlGPy0Slf%2BaqFRNbqBwBVHIZNJqiu51qI3Pc1WXnDbDyk6rwtr958%2FoOtQ6EzzOBD9r%2BYS%2BtEJ4gL3bVEQRmMTbNXMeRiGmq51gK4zAA4pe%2BipXVw88FCNBhna7zxyvUEW1PSK&X-Amz-Signature=e1acd3166b7789e3c259d7926edf968d7b866431db7597a757e98690bdb4b50d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGODZ2G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDJ1H1XsZMYLRnxpiVYYcBgBGaiDbmTSJdpnn15%2BkAuhAiApl%2FyR%2FEGW4eeeZvyLTdPtuLSoja3g7ntq9f6HutjDliqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZN%2BJnD%2BGG49P%2FabKtwDn4HyNFuxNHxwBjoZjBr%2BBX8RBulbf7J4JtBwlrZNaAC8ecsfowthjiA3%2BILnEGJKsabWHPanxExUtpDrlLvauvhp6UsLNr7zJqg3afBgFrSTmG7wL1W9OXxbjHhb%2F%2BKq7dg%2F%2F3FdXABvW3LaFpupo1MkpkqD3GFk4tGm2OtEeRuZ8idyiJcxjMoJEIZd91eCZ%2FmuB6chT9olpjytSK4JFsTP7NBSmAp%2F7n0B3dS9fZIVEKrEJs6pPbIeEHIIauQ3zfphE1FxSicngpSetbrHpD%2BpQb3%2FD13s6CItpKXgyAJhg6VaOr3q5VPqDk%2BFmzBG9KqDK83q%2BU5Idplbbf20l0R6iZG0EXJ3zhULMp8NQANTmUeeEL4tnRwWJX27hL0F%2B5IiGa06cSxdV4mzX6F65owHUZMy4EsErs8R%2FakzSyH9e3FqXCXK%2BPbHLLJyEv%2BiEerOPXqL%2F9GdVv8o3Ba1Wm5SijM%2BSDG8oNpuIt7XYUO3C3wuaEgvYgrpgUcJ84DR9bAKt2L12msUOFJlf9Hes2cwMJrBccNdZKVfImYMHiZ4EdtW86Q608R%2BBknSwrpYQVXYXbqB%2FOTeyWB88bwk5czfqaxtqkOtzejT5pASH%2FUB2zPsLW61VLFgLacw2cO3wQY6pgEMHj45XUgkprnhu4pNtTnXnDoRkm0I%2B2SjxMf3cltpxOUhpACJXyYccy6SxOnmQ34W5Vv7ND2P9wzJboC083gTVKIlGPy0Slf%2BaqFRNbqBwBVHIZNJqiu51qI3Pc1WXnDbDyk6rwtr958%2FoOtQ6EzzOBD9r%2BYS%2BtEJ4gL3bVEQRmMTbNXMeRiGmq51gK4zAA4pe%2BipXVw88FCNBhna7zxyvUEW1PSK&X-Amz-Signature=83e20fc0166f91a25fce183fbbe351cd3d47d702ba69438ef2c8cd16e34c5c72&X-Amz-SignedHeaders=host&x-id=GetObject)
