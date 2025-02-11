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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZHYYBQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iN65%2BWo%2FtXDfJAswAXy47cjFrQFj%2B1WeHsOpPRWeQAIhALd3hmVtPNmyhlcHIEqS7AcO1ZDnA1PzBR0sAPogGoigKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALOKDu3kG%2Fy4%2B7kMq3ANJOf1J7QmZwXCiZb8BtVSfcCUyQNOmHEmKE6htgk1K9aCDfmnUFtxL0W0hRpatZNSS90ORfH3gc2o9k2dVYswVSdjBpI9bwqESgcDHdMQ2wyBg7G6IQK0FOJepbPONOtDI48ARto8o6Jq%2BLiFC5cLJVMXpuu%2F3xmoa%2BBbjNyoelTUEE4fSdPxMwgtcdtltPKoLG9EeNsSGe7PAWprEsAUFrbzoP1YODC%2FK%2FyBrHdPfjWxwFBPP3vBcZ96vErD%2FXoICPgShoy1QT6VPK5pF%2B5fUC1Nz0mYkM1pIZvLXjJLb%2F8lxmJmAXGPlESnUYm3N96bxIA0HVT55Ak75TBRdleUEp8iP%2Fcj%2FsdLEEroY5jLF5CTSnXZy%2BDap1zaPYxg6FeebSmZLDWieAPcutl5H1Am%2Fc2qdfHp2UxeRWzdw1lGyq4tzD38%2FbdUpKBh98ca7wILREkA%2FEZNmskjBjxS22YimknLua3l8L8i81%2FxJRGyYzilGM2v5%2B6M4Yh8gCbF%2FOR%2BirZcEMaPCUJwKglOxz%2FHq20ta6%2FAiRbzXwGk78J9yHw%2B7kmvf3ULCHYYUVjgH4TA6XdDWWZOiAFEGZFMEPi8niC3b4o%2B4Ktf3V3ZRZLImMaWbuXNojj08Z%2BmMqzDdt6y9BjqkAVS6E%2Br9gXrH219pSm17%2FJQpp13keQuVMi3pQxC0Q1xBKrAqj5Ny8kI3cLtlcGr2pv5O8aBS3jv4TD5tpPD5vHVrSUcH5ESUCTc%2F%2F4a5BNhiORh03j2dLwh%2BuGUP%2F3sZXGweRQpIHRKb9vpvV3cR7Cd3tnA87ujJId35LZsSnxcuZkhuH7cgjh57bY8h4hrPCFmU6VEinQhlgBm8obEQbzsmBwoC&X-Amz-Signature=45c2a338b869633bfa472e1458dcc6d859ee5ea12c967ee71cd7b4456004a570&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZHYYBQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iN65%2BWo%2FtXDfJAswAXy47cjFrQFj%2B1WeHsOpPRWeQAIhALd3hmVtPNmyhlcHIEqS7AcO1ZDnA1PzBR0sAPogGoigKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALOKDu3kG%2Fy4%2B7kMq3ANJOf1J7QmZwXCiZb8BtVSfcCUyQNOmHEmKE6htgk1K9aCDfmnUFtxL0W0hRpatZNSS90ORfH3gc2o9k2dVYswVSdjBpI9bwqESgcDHdMQ2wyBg7G6IQK0FOJepbPONOtDI48ARto8o6Jq%2BLiFC5cLJVMXpuu%2F3xmoa%2BBbjNyoelTUEE4fSdPxMwgtcdtltPKoLG9EeNsSGe7PAWprEsAUFrbzoP1YODC%2FK%2FyBrHdPfjWxwFBPP3vBcZ96vErD%2FXoICPgShoy1QT6VPK5pF%2B5fUC1Nz0mYkM1pIZvLXjJLb%2F8lxmJmAXGPlESnUYm3N96bxIA0HVT55Ak75TBRdleUEp8iP%2Fcj%2FsdLEEroY5jLF5CTSnXZy%2BDap1zaPYxg6FeebSmZLDWieAPcutl5H1Am%2Fc2qdfHp2UxeRWzdw1lGyq4tzD38%2FbdUpKBh98ca7wILREkA%2FEZNmskjBjxS22YimknLua3l8L8i81%2FxJRGyYzilGM2v5%2B6M4Yh8gCbF%2FOR%2BirZcEMaPCUJwKglOxz%2FHq20ta6%2FAiRbzXwGk78J9yHw%2B7kmvf3ULCHYYUVjgH4TA6XdDWWZOiAFEGZFMEPi8niC3b4o%2B4Ktf3V3ZRZLImMaWbuXNojj08Z%2BmMqzDdt6y9BjqkAVS6E%2Br9gXrH219pSm17%2FJQpp13keQuVMi3pQxC0Q1xBKrAqj5Ny8kI3cLtlcGr2pv5O8aBS3jv4TD5tpPD5vHVrSUcH5ESUCTc%2F%2F4a5BNhiORh03j2dLwh%2BuGUP%2F3sZXGweRQpIHRKb9vpvV3cR7Cd3tnA87ujJId35LZsSnxcuZkhuH7cgjh57bY8h4hrPCFmU6VEinQhlgBm8obEQbzsmBwoC&X-Amz-Signature=8c3cbf9fa0a07c6bbb0f9702551c2b4b77bb3f69adccffc47b0c8b10cbd2f60b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZHYYBQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iN65%2BWo%2FtXDfJAswAXy47cjFrQFj%2B1WeHsOpPRWeQAIhALd3hmVtPNmyhlcHIEqS7AcO1ZDnA1PzBR0sAPogGoigKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALOKDu3kG%2Fy4%2B7kMq3ANJOf1J7QmZwXCiZb8BtVSfcCUyQNOmHEmKE6htgk1K9aCDfmnUFtxL0W0hRpatZNSS90ORfH3gc2o9k2dVYswVSdjBpI9bwqESgcDHdMQ2wyBg7G6IQK0FOJepbPONOtDI48ARto8o6Jq%2BLiFC5cLJVMXpuu%2F3xmoa%2BBbjNyoelTUEE4fSdPxMwgtcdtltPKoLG9EeNsSGe7PAWprEsAUFrbzoP1YODC%2FK%2FyBrHdPfjWxwFBPP3vBcZ96vErD%2FXoICPgShoy1QT6VPK5pF%2B5fUC1Nz0mYkM1pIZvLXjJLb%2F8lxmJmAXGPlESnUYm3N96bxIA0HVT55Ak75TBRdleUEp8iP%2Fcj%2FsdLEEroY5jLF5CTSnXZy%2BDap1zaPYxg6FeebSmZLDWieAPcutl5H1Am%2Fc2qdfHp2UxeRWzdw1lGyq4tzD38%2FbdUpKBh98ca7wILREkA%2FEZNmskjBjxS22YimknLua3l8L8i81%2FxJRGyYzilGM2v5%2B6M4Yh8gCbF%2FOR%2BirZcEMaPCUJwKglOxz%2FHq20ta6%2FAiRbzXwGk78J9yHw%2B7kmvf3ULCHYYUVjgH4TA6XdDWWZOiAFEGZFMEPi8niC3b4o%2B4Ktf3V3ZRZLImMaWbuXNojj08Z%2BmMqzDdt6y9BjqkAVS6E%2Br9gXrH219pSm17%2FJQpp13keQuVMi3pQxC0Q1xBKrAqj5Ny8kI3cLtlcGr2pv5O8aBS3jv4TD5tpPD5vHVrSUcH5ESUCTc%2F%2F4a5BNhiORh03j2dLwh%2BuGUP%2F3sZXGweRQpIHRKb9vpvV3cR7Cd3tnA87ujJId35LZsSnxcuZkhuH7cgjh57bY8h4hrPCFmU6VEinQhlgBm8obEQbzsmBwoC&X-Amz-Signature=36fbb0624ccf219a23277cf0d54b278bedeff9d722e95bddebd2a502b1f16289&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZHYYBQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iN65%2BWo%2FtXDfJAswAXy47cjFrQFj%2B1WeHsOpPRWeQAIhALd3hmVtPNmyhlcHIEqS7AcO1ZDnA1PzBR0sAPogGoigKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALOKDu3kG%2Fy4%2B7kMq3ANJOf1J7QmZwXCiZb8BtVSfcCUyQNOmHEmKE6htgk1K9aCDfmnUFtxL0W0hRpatZNSS90ORfH3gc2o9k2dVYswVSdjBpI9bwqESgcDHdMQ2wyBg7G6IQK0FOJepbPONOtDI48ARto8o6Jq%2BLiFC5cLJVMXpuu%2F3xmoa%2BBbjNyoelTUEE4fSdPxMwgtcdtltPKoLG9EeNsSGe7PAWprEsAUFrbzoP1YODC%2FK%2FyBrHdPfjWxwFBPP3vBcZ96vErD%2FXoICPgShoy1QT6VPK5pF%2B5fUC1Nz0mYkM1pIZvLXjJLb%2F8lxmJmAXGPlESnUYm3N96bxIA0HVT55Ak75TBRdleUEp8iP%2Fcj%2FsdLEEroY5jLF5CTSnXZy%2BDap1zaPYxg6FeebSmZLDWieAPcutl5H1Am%2Fc2qdfHp2UxeRWzdw1lGyq4tzD38%2FbdUpKBh98ca7wILREkA%2FEZNmskjBjxS22YimknLua3l8L8i81%2FxJRGyYzilGM2v5%2B6M4Yh8gCbF%2FOR%2BirZcEMaPCUJwKglOxz%2FHq20ta6%2FAiRbzXwGk78J9yHw%2B7kmvf3ULCHYYUVjgH4TA6XdDWWZOiAFEGZFMEPi8niC3b4o%2B4Ktf3V3ZRZLImMaWbuXNojj08Z%2BmMqzDdt6y9BjqkAVS6E%2Br9gXrH219pSm17%2FJQpp13keQuVMi3pQxC0Q1xBKrAqj5Ny8kI3cLtlcGr2pv5O8aBS3jv4TD5tpPD5vHVrSUcH5ESUCTc%2F%2F4a5BNhiORh03j2dLwh%2BuGUP%2F3sZXGweRQpIHRKb9vpvV3cR7Cd3tnA87ujJId35LZsSnxcuZkhuH7cgjh57bY8h4hrPCFmU6VEinQhlgBm8obEQbzsmBwoC&X-Amz-Signature=8de0b1d80f311d955dca2bc4f1ca2bb78b659490cb99bb2b84bb9b7b318d29ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZHYYBQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iN65%2BWo%2FtXDfJAswAXy47cjFrQFj%2B1WeHsOpPRWeQAIhALd3hmVtPNmyhlcHIEqS7AcO1ZDnA1PzBR0sAPogGoigKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALOKDu3kG%2Fy4%2B7kMq3ANJOf1J7QmZwXCiZb8BtVSfcCUyQNOmHEmKE6htgk1K9aCDfmnUFtxL0W0hRpatZNSS90ORfH3gc2o9k2dVYswVSdjBpI9bwqESgcDHdMQ2wyBg7G6IQK0FOJepbPONOtDI48ARto8o6Jq%2BLiFC5cLJVMXpuu%2F3xmoa%2BBbjNyoelTUEE4fSdPxMwgtcdtltPKoLG9EeNsSGe7PAWprEsAUFrbzoP1YODC%2FK%2FyBrHdPfjWxwFBPP3vBcZ96vErD%2FXoICPgShoy1QT6VPK5pF%2B5fUC1Nz0mYkM1pIZvLXjJLb%2F8lxmJmAXGPlESnUYm3N96bxIA0HVT55Ak75TBRdleUEp8iP%2Fcj%2FsdLEEroY5jLF5CTSnXZy%2BDap1zaPYxg6FeebSmZLDWieAPcutl5H1Am%2Fc2qdfHp2UxeRWzdw1lGyq4tzD38%2FbdUpKBh98ca7wILREkA%2FEZNmskjBjxS22YimknLua3l8L8i81%2FxJRGyYzilGM2v5%2B6M4Yh8gCbF%2FOR%2BirZcEMaPCUJwKglOxz%2FHq20ta6%2FAiRbzXwGk78J9yHw%2B7kmvf3ULCHYYUVjgH4TA6XdDWWZOiAFEGZFMEPi8niC3b4o%2B4Ktf3V3ZRZLImMaWbuXNojj08Z%2BmMqzDdt6y9BjqkAVS6E%2Br9gXrH219pSm17%2FJQpp13keQuVMi3pQxC0Q1xBKrAqj5Ny8kI3cLtlcGr2pv5O8aBS3jv4TD5tpPD5vHVrSUcH5ESUCTc%2F%2F4a5BNhiORh03j2dLwh%2BuGUP%2F3sZXGweRQpIHRKb9vpvV3cR7Cd3tnA87ujJId35LZsSnxcuZkhuH7cgjh57bY8h4hrPCFmU6VEinQhlgBm8obEQbzsmBwoC&X-Amz-Signature=d8bfaf5970448ea9671421e6c24f248b15ef8338f2eb9ca2b22c5e17d20fdd93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZHYYBQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iN65%2BWo%2FtXDfJAswAXy47cjFrQFj%2B1WeHsOpPRWeQAIhALd3hmVtPNmyhlcHIEqS7AcO1ZDnA1PzBR0sAPogGoigKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzALOKDu3kG%2Fy4%2B7kMq3ANJOf1J7QmZwXCiZb8BtVSfcCUyQNOmHEmKE6htgk1K9aCDfmnUFtxL0W0hRpatZNSS90ORfH3gc2o9k2dVYswVSdjBpI9bwqESgcDHdMQ2wyBg7G6IQK0FOJepbPONOtDI48ARto8o6Jq%2BLiFC5cLJVMXpuu%2F3xmoa%2BBbjNyoelTUEE4fSdPxMwgtcdtltPKoLG9EeNsSGe7PAWprEsAUFrbzoP1YODC%2FK%2FyBrHdPfjWxwFBPP3vBcZ96vErD%2FXoICPgShoy1QT6VPK5pF%2B5fUC1Nz0mYkM1pIZvLXjJLb%2F8lxmJmAXGPlESnUYm3N96bxIA0HVT55Ak75TBRdleUEp8iP%2Fcj%2FsdLEEroY5jLF5CTSnXZy%2BDap1zaPYxg6FeebSmZLDWieAPcutl5H1Am%2Fc2qdfHp2UxeRWzdw1lGyq4tzD38%2FbdUpKBh98ca7wILREkA%2FEZNmskjBjxS22YimknLua3l8L8i81%2FxJRGyYzilGM2v5%2B6M4Yh8gCbF%2FOR%2BirZcEMaPCUJwKglOxz%2FHq20ta6%2FAiRbzXwGk78J9yHw%2B7kmvf3ULCHYYUVjgH4TA6XdDWWZOiAFEGZFMEPi8niC3b4o%2B4Ktf3V3ZRZLImMaWbuXNojj08Z%2BmMqzDdt6y9BjqkAVS6E%2Br9gXrH219pSm17%2FJQpp13keQuVMi3pQxC0Q1xBKrAqj5Ny8kI3cLtlcGr2pv5O8aBS3jv4TD5tpPD5vHVrSUcH5ESUCTc%2F%2F4a5BNhiORh03j2dLwh%2BuGUP%2F3sZXGweRQpIHRKb9vpvV3cR7Cd3tnA87ujJId35LZsSnxcuZkhuH7cgjh57bY8h4hrPCFmU6VEinQhlgBm8obEQbzsmBwoC&X-Amz-Signature=662ffc9e150d1ac5d587f2ecf5f8ffeecacf5983d81f290541813a14d5a94f3a&X-Amz-SignedHeaders=host&x-id=GetObject)
