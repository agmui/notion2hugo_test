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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J66VQ4Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJ5Nf%2FC4PXM5eBzEpD54RZfGDZ2IXxY8Sxl%2FQNowhtQIgXs5rlP2ZRoPaNyPCk8jfpRgOWXwaNYzj7mDtMeaH23kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN%2BBw7fsT20Srpp2CrcA0iNiKqDjwH%2BTxcYsJIHws97YSnp1P5WzF2Oqnx18w4VAoMuKnoBfCxbn914%2Fxx%2FGZ6Z3b47zcM%2FjabMdrE1igLEbNX5eSQIn%2FHZV95cwutSKVOuNbs5SXJWp5AOWJ51ndcq2zM3Su20YoSfYzSaKu1H%2BnOAkydvhs52fFYsoLy%2BA2zznEgn9kl%2Fwo4dmqwi4sD56STICRc%2FThsH95OaVNyAQzihwpX22sMNiUxMyv77p4nDskO2rdqcymc6BcvxUciby1bsWOMeF8EnU1xBae0kC3WkbvgtvIB7K3%2FrHTI40Xv2R%2BJ5Nbu6YIQyJNjmREAkPBmYYRggtVXZg%2BOR2pdKRg%2B%2BtrA%2F95fMn3oyg%2BLFpfQbeuXtLkNWdEQ5aLebiyCVHdtiWwwh6gVJayxRi6anSBeluGdZaMaMvBMr%2FOIE1F4quZC0QLUpS%2FWDW7drki2zycFCY3hWy9l63xz4AVu96LCCCFkUekI48Fe%2B%2BcR4RjESAxzYRDosjtx6JOwwDvub%2BGUhdX7tl13%2F1FbCK4uFqcHcWevS9tewylW7A5QYzizwQitWueNnPU7ptazoGtyLKz5w77TgVt9VOT5YeRDUBrH0XhdWxDmEE3msvghierhpq9Ddr0%2F0XoPzMP6z6sEGOqUBB%2Bvgpk9VrsD5gHWtflhAuRUzQlSMq9PnxLbP0kw7SSlPDSYAbXM6Wem8fv2Q1AJ5csHA0rfFkiBv3d5gfzMlxKoZENb3CIkHwVCc8Zm0j5YQ0TgnfhG%2FRRS5FIcg7HtZ%2BYwNHHK9sz%2FFXviObqNgaBzLAf6%2BvQBpqgQid0IP4HrZdAKQDn7g4CZnGBhUoFbA%2FWbNrLDZwz4GeYyUE3c5Vzu6XCHx&X-Amz-Signature=57a18383bab60ed9754b30cf7ac172404c5992bb9f931b0650524cf37d102216&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J66VQ4Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJ5Nf%2FC4PXM5eBzEpD54RZfGDZ2IXxY8Sxl%2FQNowhtQIgXs5rlP2ZRoPaNyPCk8jfpRgOWXwaNYzj7mDtMeaH23kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN%2BBw7fsT20Srpp2CrcA0iNiKqDjwH%2BTxcYsJIHws97YSnp1P5WzF2Oqnx18w4VAoMuKnoBfCxbn914%2Fxx%2FGZ6Z3b47zcM%2FjabMdrE1igLEbNX5eSQIn%2FHZV95cwutSKVOuNbs5SXJWp5AOWJ51ndcq2zM3Su20YoSfYzSaKu1H%2BnOAkydvhs52fFYsoLy%2BA2zznEgn9kl%2Fwo4dmqwi4sD56STICRc%2FThsH95OaVNyAQzihwpX22sMNiUxMyv77p4nDskO2rdqcymc6BcvxUciby1bsWOMeF8EnU1xBae0kC3WkbvgtvIB7K3%2FrHTI40Xv2R%2BJ5Nbu6YIQyJNjmREAkPBmYYRggtVXZg%2BOR2pdKRg%2B%2BtrA%2F95fMn3oyg%2BLFpfQbeuXtLkNWdEQ5aLebiyCVHdtiWwwh6gVJayxRi6anSBeluGdZaMaMvBMr%2FOIE1F4quZC0QLUpS%2FWDW7drki2zycFCY3hWy9l63xz4AVu96LCCCFkUekI48Fe%2B%2BcR4RjESAxzYRDosjtx6JOwwDvub%2BGUhdX7tl13%2F1FbCK4uFqcHcWevS9tewylW7A5QYzizwQitWueNnPU7ptazoGtyLKz5w77TgVt9VOT5YeRDUBrH0XhdWxDmEE3msvghierhpq9Ddr0%2F0XoPzMP6z6sEGOqUBB%2Bvgpk9VrsD5gHWtflhAuRUzQlSMq9PnxLbP0kw7SSlPDSYAbXM6Wem8fv2Q1AJ5csHA0rfFkiBv3d5gfzMlxKoZENb3CIkHwVCc8Zm0j5YQ0TgnfhG%2FRRS5FIcg7HtZ%2BYwNHHK9sz%2FFXviObqNgaBzLAf6%2BvQBpqgQid0IP4HrZdAKQDn7g4CZnGBhUoFbA%2FWbNrLDZwz4GeYyUE3c5Vzu6XCHx&X-Amz-Signature=2e3e3cb7a0fdf5dad1f5edf96801b06233ef5a5dd1fe70358b35bafc33410169&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J66VQ4Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJ5Nf%2FC4PXM5eBzEpD54RZfGDZ2IXxY8Sxl%2FQNowhtQIgXs5rlP2ZRoPaNyPCk8jfpRgOWXwaNYzj7mDtMeaH23kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN%2BBw7fsT20Srpp2CrcA0iNiKqDjwH%2BTxcYsJIHws97YSnp1P5WzF2Oqnx18w4VAoMuKnoBfCxbn914%2Fxx%2FGZ6Z3b47zcM%2FjabMdrE1igLEbNX5eSQIn%2FHZV95cwutSKVOuNbs5SXJWp5AOWJ51ndcq2zM3Su20YoSfYzSaKu1H%2BnOAkydvhs52fFYsoLy%2BA2zznEgn9kl%2Fwo4dmqwi4sD56STICRc%2FThsH95OaVNyAQzihwpX22sMNiUxMyv77p4nDskO2rdqcymc6BcvxUciby1bsWOMeF8EnU1xBae0kC3WkbvgtvIB7K3%2FrHTI40Xv2R%2BJ5Nbu6YIQyJNjmREAkPBmYYRggtVXZg%2BOR2pdKRg%2B%2BtrA%2F95fMn3oyg%2BLFpfQbeuXtLkNWdEQ5aLebiyCVHdtiWwwh6gVJayxRi6anSBeluGdZaMaMvBMr%2FOIE1F4quZC0QLUpS%2FWDW7drki2zycFCY3hWy9l63xz4AVu96LCCCFkUekI48Fe%2B%2BcR4RjESAxzYRDosjtx6JOwwDvub%2BGUhdX7tl13%2F1FbCK4uFqcHcWevS9tewylW7A5QYzizwQitWueNnPU7ptazoGtyLKz5w77TgVt9VOT5YeRDUBrH0XhdWxDmEE3msvghierhpq9Ddr0%2F0XoPzMP6z6sEGOqUBB%2Bvgpk9VrsD5gHWtflhAuRUzQlSMq9PnxLbP0kw7SSlPDSYAbXM6Wem8fv2Q1AJ5csHA0rfFkiBv3d5gfzMlxKoZENb3CIkHwVCc8Zm0j5YQ0TgnfhG%2FRRS5FIcg7HtZ%2BYwNHHK9sz%2FFXviObqNgaBzLAf6%2BvQBpqgQid0IP4HrZdAKQDn7g4CZnGBhUoFbA%2FWbNrLDZwz4GeYyUE3c5Vzu6XCHx&X-Amz-Signature=ea2a33d6057ea6e39a04ae4f3775e5687a20a5f0adc4d702a931dc436c611490&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J66VQ4Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJ5Nf%2FC4PXM5eBzEpD54RZfGDZ2IXxY8Sxl%2FQNowhtQIgXs5rlP2ZRoPaNyPCk8jfpRgOWXwaNYzj7mDtMeaH23kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN%2BBw7fsT20Srpp2CrcA0iNiKqDjwH%2BTxcYsJIHws97YSnp1P5WzF2Oqnx18w4VAoMuKnoBfCxbn914%2Fxx%2FGZ6Z3b47zcM%2FjabMdrE1igLEbNX5eSQIn%2FHZV95cwutSKVOuNbs5SXJWp5AOWJ51ndcq2zM3Su20YoSfYzSaKu1H%2BnOAkydvhs52fFYsoLy%2BA2zznEgn9kl%2Fwo4dmqwi4sD56STICRc%2FThsH95OaVNyAQzihwpX22sMNiUxMyv77p4nDskO2rdqcymc6BcvxUciby1bsWOMeF8EnU1xBae0kC3WkbvgtvIB7K3%2FrHTI40Xv2R%2BJ5Nbu6YIQyJNjmREAkPBmYYRggtVXZg%2BOR2pdKRg%2B%2BtrA%2F95fMn3oyg%2BLFpfQbeuXtLkNWdEQ5aLebiyCVHdtiWwwh6gVJayxRi6anSBeluGdZaMaMvBMr%2FOIE1F4quZC0QLUpS%2FWDW7drki2zycFCY3hWy9l63xz4AVu96LCCCFkUekI48Fe%2B%2BcR4RjESAxzYRDosjtx6JOwwDvub%2BGUhdX7tl13%2F1FbCK4uFqcHcWevS9tewylW7A5QYzizwQitWueNnPU7ptazoGtyLKz5w77TgVt9VOT5YeRDUBrH0XhdWxDmEE3msvghierhpq9Ddr0%2F0XoPzMP6z6sEGOqUBB%2Bvgpk9VrsD5gHWtflhAuRUzQlSMq9PnxLbP0kw7SSlPDSYAbXM6Wem8fv2Q1AJ5csHA0rfFkiBv3d5gfzMlxKoZENb3CIkHwVCc8Zm0j5YQ0TgnfhG%2FRRS5FIcg7HtZ%2BYwNHHK9sz%2FFXviObqNgaBzLAf6%2BvQBpqgQid0IP4HrZdAKQDn7g4CZnGBhUoFbA%2FWbNrLDZwz4GeYyUE3c5Vzu6XCHx&X-Amz-Signature=f71d7b0cf2c3fe49759448dff86762ad93792a0ce812da03502994204d631810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J66VQ4Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJ5Nf%2FC4PXM5eBzEpD54RZfGDZ2IXxY8Sxl%2FQNowhtQIgXs5rlP2ZRoPaNyPCk8jfpRgOWXwaNYzj7mDtMeaH23kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN%2BBw7fsT20Srpp2CrcA0iNiKqDjwH%2BTxcYsJIHws97YSnp1P5WzF2Oqnx18w4VAoMuKnoBfCxbn914%2Fxx%2FGZ6Z3b47zcM%2FjabMdrE1igLEbNX5eSQIn%2FHZV95cwutSKVOuNbs5SXJWp5AOWJ51ndcq2zM3Su20YoSfYzSaKu1H%2BnOAkydvhs52fFYsoLy%2BA2zznEgn9kl%2Fwo4dmqwi4sD56STICRc%2FThsH95OaVNyAQzihwpX22sMNiUxMyv77p4nDskO2rdqcymc6BcvxUciby1bsWOMeF8EnU1xBae0kC3WkbvgtvIB7K3%2FrHTI40Xv2R%2BJ5Nbu6YIQyJNjmREAkPBmYYRggtVXZg%2BOR2pdKRg%2B%2BtrA%2F95fMn3oyg%2BLFpfQbeuXtLkNWdEQ5aLebiyCVHdtiWwwh6gVJayxRi6anSBeluGdZaMaMvBMr%2FOIE1F4quZC0QLUpS%2FWDW7drki2zycFCY3hWy9l63xz4AVu96LCCCFkUekI48Fe%2B%2BcR4RjESAxzYRDosjtx6JOwwDvub%2BGUhdX7tl13%2F1FbCK4uFqcHcWevS9tewylW7A5QYzizwQitWueNnPU7ptazoGtyLKz5w77TgVt9VOT5YeRDUBrH0XhdWxDmEE3msvghierhpq9Ddr0%2F0XoPzMP6z6sEGOqUBB%2Bvgpk9VrsD5gHWtflhAuRUzQlSMq9PnxLbP0kw7SSlPDSYAbXM6Wem8fv2Q1AJ5csHA0rfFkiBv3d5gfzMlxKoZENb3CIkHwVCc8Zm0j5YQ0TgnfhG%2FRRS5FIcg7HtZ%2BYwNHHK9sz%2FFXviObqNgaBzLAf6%2BvQBpqgQid0IP4HrZdAKQDn7g4CZnGBhUoFbA%2FWbNrLDZwz4GeYyUE3c5Vzu6XCHx&X-Amz-Signature=4c3de673a12ad8bb614f83c178f3871b379c6df95aca902eb651c184af9193bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J66VQ4Y%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJ5Nf%2FC4PXM5eBzEpD54RZfGDZ2IXxY8Sxl%2FQNowhtQIgXs5rlP2ZRoPaNyPCk8jfpRgOWXwaNYzj7mDtMeaH23kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN%2BBw7fsT20Srpp2CrcA0iNiKqDjwH%2BTxcYsJIHws97YSnp1P5WzF2Oqnx18w4VAoMuKnoBfCxbn914%2Fxx%2FGZ6Z3b47zcM%2FjabMdrE1igLEbNX5eSQIn%2FHZV95cwutSKVOuNbs5SXJWp5AOWJ51ndcq2zM3Su20YoSfYzSaKu1H%2BnOAkydvhs52fFYsoLy%2BA2zznEgn9kl%2Fwo4dmqwi4sD56STICRc%2FThsH95OaVNyAQzihwpX22sMNiUxMyv77p4nDskO2rdqcymc6BcvxUciby1bsWOMeF8EnU1xBae0kC3WkbvgtvIB7K3%2FrHTI40Xv2R%2BJ5Nbu6YIQyJNjmREAkPBmYYRggtVXZg%2BOR2pdKRg%2B%2BtrA%2F95fMn3oyg%2BLFpfQbeuXtLkNWdEQ5aLebiyCVHdtiWwwh6gVJayxRi6anSBeluGdZaMaMvBMr%2FOIE1F4quZC0QLUpS%2FWDW7drki2zycFCY3hWy9l63xz4AVu96LCCCFkUekI48Fe%2B%2BcR4RjESAxzYRDosjtx6JOwwDvub%2BGUhdX7tl13%2F1FbCK4uFqcHcWevS9tewylW7A5QYzizwQitWueNnPU7ptazoGtyLKz5w77TgVt9VOT5YeRDUBrH0XhdWxDmEE3msvghierhpq9Ddr0%2F0XoPzMP6z6sEGOqUBB%2Bvgpk9VrsD5gHWtflhAuRUzQlSMq9PnxLbP0kw7SSlPDSYAbXM6Wem8fv2Q1AJ5csHA0rfFkiBv3d5gfzMlxKoZENb3CIkHwVCc8Zm0j5YQ0TgnfhG%2FRRS5FIcg7HtZ%2BYwNHHK9sz%2FFXviObqNgaBzLAf6%2BvQBpqgQid0IP4HrZdAKQDn7g4CZnGBhUoFbA%2FWbNrLDZwz4GeYyUE3c5Vzu6XCHx&X-Amz-Signature=8df472670ceae0e38c5f8aad15d71e85175fab7a37700e323b300c6fb96ac4f1&X-Amz-SignedHeaders=host&x-id=GetObject)
