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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPXQ5VZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBspVOANKhjI6l9RVzd0hHO7DtxCuV1EV7tbex%2BjwKILAiEAk%2F99yjYEONk4WPRBbo5kFCRl6MDQGl62IBzLDCWNmFUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGoNzlC2V%2B5PYE4tTircA%2F%2BQ7vvLWF6t24c2Y3V7%2B0q%2BQVSTbfvu5k9r0lOVPiOhFQDtjFshiNA6YU8KakAlgI4EdNDyXtO6W00yJipeZiPYWqpBU2UF%2Bv9CmlvxYC3T7zCIJbCGaZkyrFYqutHqQTHvgvwXUeveh5nBjs62TsENDBH%2BCt9lFEpR6gI9nW4Pyy31fwZu5B33nq5CTvdwU2j9%2BvNTSfkuRSMg3lPRV4MRdyEMd5%2F3RytKyT2TjMfRUpVzyfqUBvBstqN8OfLapy03uHu39hr3VUnVvDizDan%2FgOi68dE%2BZ0NjMMKwoYCZeT%2B%2BdLBwVd6DT9LdIUrdaU5EGjShlBZU8aChNUQ3B%2FDV%2BtmRvSox5QHAjpPoQpBmV3q6YgvyKyz2Ptv%2FZvaWbo1WTxf5akCY3jELtZCaHkdYDov9s4VTh1rkCi1sQRClbwjrGjjzjc0Pxe9L4Wc5GvMYzQW5MQLa5p%2FJpr55J7z4T0DRlcW%2FqVgrOZYSw4EoW9CrC7pWnGfV26r1JOLEXzFEYsFTj0Uq10xeI5B9I%2By4mmCEKkV7zcn3qnQ5Q3iBzmdWSf6tf5lOQL%2BGeQS26GmoLDzG%2FveFmZXipb9Z5ODV2YwdXBunyG0UEiRqyfD4Ru%2BCh0s4%2BWX9qBRJMMu7jr0GOqUBFaqjEKNa8xmcop4HqQDX2E62BDm%2FA1VXF55BhGU7gpVWM0EDoIv6OtwDmrCQz0mPgTWE5IhFUGrEXq9deN4zHAEz8m87B8I%2FQJs%2B7EfMOOu3YGGgSSzRLNJ8j1hytl99sdLTNJCmtaqI4SF3tjnshxDg%2FKnuMTzzm5mJRuIbWGbxBq4bU4OLccvvZF8CbnHLe7kHboDF5zR52OmYU2XrCOYHBYxd&X-Amz-Signature=83e933c07f1b880c79fd4987176853b07ced1b10a5b6c0b5192177e469ea0f33&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPXQ5VZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBspVOANKhjI6l9RVzd0hHO7DtxCuV1EV7tbex%2BjwKILAiEAk%2F99yjYEONk4WPRBbo5kFCRl6MDQGl62IBzLDCWNmFUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGoNzlC2V%2B5PYE4tTircA%2F%2BQ7vvLWF6t24c2Y3V7%2B0q%2BQVSTbfvu5k9r0lOVPiOhFQDtjFshiNA6YU8KakAlgI4EdNDyXtO6W00yJipeZiPYWqpBU2UF%2Bv9CmlvxYC3T7zCIJbCGaZkyrFYqutHqQTHvgvwXUeveh5nBjs62TsENDBH%2BCt9lFEpR6gI9nW4Pyy31fwZu5B33nq5CTvdwU2j9%2BvNTSfkuRSMg3lPRV4MRdyEMd5%2F3RytKyT2TjMfRUpVzyfqUBvBstqN8OfLapy03uHu39hr3VUnVvDizDan%2FgOi68dE%2BZ0NjMMKwoYCZeT%2B%2BdLBwVd6DT9LdIUrdaU5EGjShlBZU8aChNUQ3B%2FDV%2BtmRvSox5QHAjpPoQpBmV3q6YgvyKyz2Ptv%2FZvaWbo1WTxf5akCY3jELtZCaHkdYDov9s4VTh1rkCi1sQRClbwjrGjjzjc0Pxe9L4Wc5GvMYzQW5MQLa5p%2FJpr55J7z4T0DRlcW%2FqVgrOZYSw4EoW9CrC7pWnGfV26r1JOLEXzFEYsFTj0Uq10xeI5B9I%2By4mmCEKkV7zcn3qnQ5Q3iBzmdWSf6tf5lOQL%2BGeQS26GmoLDzG%2FveFmZXipb9Z5ODV2YwdXBunyG0UEiRqyfD4Ru%2BCh0s4%2BWX9qBRJMMu7jr0GOqUBFaqjEKNa8xmcop4HqQDX2E62BDm%2FA1VXF55BhGU7gpVWM0EDoIv6OtwDmrCQz0mPgTWE5IhFUGrEXq9deN4zHAEz8m87B8I%2FQJs%2B7EfMOOu3YGGgSSzRLNJ8j1hytl99sdLTNJCmtaqI4SF3tjnshxDg%2FKnuMTzzm5mJRuIbWGbxBq4bU4OLccvvZF8CbnHLe7kHboDF5zR52OmYU2XrCOYHBYxd&X-Amz-Signature=88f4911734d8a9897c68f2bde33890cf05761271433f1b227892bc78cc426771&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPXQ5VZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBspVOANKhjI6l9RVzd0hHO7DtxCuV1EV7tbex%2BjwKILAiEAk%2F99yjYEONk4WPRBbo5kFCRl6MDQGl62IBzLDCWNmFUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGoNzlC2V%2B5PYE4tTircA%2F%2BQ7vvLWF6t24c2Y3V7%2B0q%2BQVSTbfvu5k9r0lOVPiOhFQDtjFshiNA6YU8KakAlgI4EdNDyXtO6W00yJipeZiPYWqpBU2UF%2Bv9CmlvxYC3T7zCIJbCGaZkyrFYqutHqQTHvgvwXUeveh5nBjs62TsENDBH%2BCt9lFEpR6gI9nW4Pyy31fwZu5B33nq5CTvdwU2j9%2BvNTSfkuRSMg3lPRV4MRdyEMd5%2F3RytKyT2TjMfRUpVzyfqUBvBstqN8OfLapy03uHu39hr3VUnVvDizDan%2FgOi68dE%2BZ0NjMMKwoYCZeT%2B%2BdLBwVd6DT9LdIUrdaU5EGjShlBZU8aChNUQ3B%2FDV%2BtmRvSox5QHAjpPoQpBmV3q6YgvyKyz2Ptv%2FZvaWbo1WTxf5akCY3jELtZCaHkdYDov9s4VTh1rkCi1sQRClbwjrGjjzjc0Pxe9L4Wc5GvMYzQW5MQLa5p%2FJpr55J7z4T0DRlcW%2FqVgrOZYSw4EoW9CrC7pWnGfV26r1JOLEXzFEYsFTj0Uq10xeI5B9I%2By4mmCEKkV7zcn3qnQ5Q3iBzmdWSf6tf5lOQL%2BGeQS26GmoLDzG%2FveFmZXipb9Z5ODV2YwdXBunyG0UEiRqyfD4Ru%2BCh0s4%2BWX9qBRJMMu7jr0GOqUBFaqjEKNa8xmcop4HqQDX2E62BDm%2FA1VXF55BhGU7gpVWM0EDoIv6OtwDmrCQz0mPgTWE5IhFUGrEXq9deN4zHAEz8m87B8I%2FQJs%2B7EfMOOu3YGGgSSzRLNJ8j1hytl99sdLTNJCmtaqI4SF3tjnshxDg%2FKnuMTzzm5mJRuIbWGbxBq4bU4OLccvvZF8CbnHLe7kHboDF5zR52OmYU2XrCOYHBYxd&X-Amz-Signature=b7713bc4ce2fada401de19a99dc483132db6ec2be45d556179e7c11c4b06bf19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPXQ5VZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBspVOANKhjI6l9RVzd0hHO7DtxCuV1EV7tbex%2BjwKILAiEAk%2F99yjYEONk4WPRBbo5kFCRl6MDQGl62IBzLDCWNmFUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGoNzlC2V%2B5PYE4tTircA%2F%2BQ7vvLWF6t24c2Y3V7%2B0q%2BQVSTbfvu5k9r0lOVPiOhFQDtjFshiNA6YU8KakAlgI4EdNDyXtO6W00yJipeZiPYWqpBU2UF%2Bv9CmlvxYC3T7zCIJbCGaZkyrFYqutHqQTHvgvwXUeveh5nBjs62TsENDBH%2BCt9lFEpR6gI9nW4Pyy31fwZu5B33nq5CTvdwU2j9%2BvNTSfkuRSMg3lPRV4MRdyEMd5%2F3RytKyT2TjMfRUpVzyfqUBvBstqN8OfLapy03uHu39hr3VUnVvDizDan%2FgOi68dE%2BZ0NjMMKwoYCZeT%2B%2BdLBwVd6DT9LdIUrdaU5EGjShlBZU8aChNUQ3B%2FDV%2BtmRvSox5QHAjpPoQpBmV3q6YgvyKyz2Ptv%2FZvaWbo1WTxf5akCY3jELtZCaHkdYDov9s4VTh1rkCi1sQRClbwjrGjjzjc0Pxe9L4Wc5GvMYzQW5MQLa5p%2FJpr55J7z4T0DRlcW%2FqVgrOZYSw4EoW9CrC7pWnGfV26r1JOLEXzFEYsFTj0Uq10xeI5B9I%2By4mmCEKkV7zcn3qnQ5Q3iBzmdWSf6tf5lOQL%2BGeQS26GmoLDzG%2FveFmZXipb9Z5ODV2YwdXBunyG0UEiRqyfD4Ru%2BCh0s4%2BWX9qBRJMMu7jr0GOqUBFaqjEKNa8xmcop4HqQDX2E62BDm%2FA1VXF55BhGU7gpVWM0EDoIv6OtwDmrCQz0mPgTWE5IhFUGrEXq9deN4zHAEz8m87B8I%2FQJs%2B7EfMOOu3YGGgSSzRLNJ8j1hytl99sdLTNJCmtaqI4SF3tjnshxDg%2FKnuMTzzm5mJRuIbWGbxBq4bU4OLccvvZF8CbnHLe7kHboDF5zR52OmYU2XrCOYHBYxd&X-Amz-Signature=6e0e3bbd7acb523d53a39ef71e2a6da0ee3f9316afa84037e49b7d6cfa3840e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPXQ5VZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBspVOANKhjI6l9RVzd0hHO7DtxCuV1EV7tbex%2BjwKILAiEAk%2F99yjYEONk4WPRBbo5kFCRl6MDQGl62IBzLDCWNmFUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGoNzlC2V%2B5PYE4tTircA%2F%2BQ7vvLWF6t24c2Y3V7%2B0q%2BQVSTbfvu5k9r0lOVPiOhFQDtjFshiNA6YU8KakAlgI4EdNDyXtO6W00yJipeZiPYWqpBU2UF%2Bv9CmlvxYC3T7zCIJbCGaZkyrFYqutHqQTHvgvwXUeveh5nBjs62TsENDBH%2BCt9lFEpR6gI9nW4Pyy31fwZu5B33nq5CTvdwU2j9%2BvNTSfkuRSMg3lPRV4MRdyEMd5%2F3RytKyT2TjMfRUpVzyfqUBvBstqN8OfLapy03uHu39hr3VUnVvDizDan%2FgOi68dE%2BZ0NjMMKwoYCZeT%2B%2BdLBwVd6DT9LdIUrdaU5EGjShlBZU8aChNUQ3B%2FDV%2BtmRvSox5QHAjpPoQpBmV3q6YgvyKyz2Ptv%2FZvaWbo1WTxf5akCY3jELtZCaHkdYDov9s4VTh1rkCi1sQRClbwjrGjjzjc0Pxe9L4Wc5GvMYzQW5MQLa5p%2FJpr55J7z4T0DRlcW%2FqVgrOZYSw4EoW9CrC7pWnGfV26r1JOLEXzFEYsFTj0Uq10xeI5B9I%2By4mmCEKkV7zcn3qnQ5Q3iBzmdWSf6tf5lOQL%2BGeQS26GmoLDzG%2FveFmZXipb9Z5ODV2YwdXBunyG0UEiRqyfD4Ru%2BCh0s4%2BWX9qBRJMMu7jr0GOqUBFaqjEKNa8xmcop4HqQDX2E62BDm%2FA1VXF55BhGU7gpVWM0EDoIv6OtwDmrCQz0mPgTWE5IhFUGrEXq9deN4zHAEz8m87B8I%2FQJs%2B7EfMOOu3YGGgSSzRLNJ8j1hytl99sdLTNJCmtaqI4SF3tjnshxDg%2FKnuMTzzm5mJRuIbWGbxBq4bU4OLccvvZF8CbnHLe7kHboDF5zR52OmYU2XrCOYHBYxd&X-Amz-Signature=42242ee640c17021d169e01333f3c2dd871a796ffb301b7c56ecfb9a759a15a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPXQ5VZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBspVOANKhjI6l9RVzd0hHO7DtxCuV1EV7tbex%2BjwKILAiEAk%2F99yjYEONk4WPRBbo5kFCRl6MDQGl62IBzLDCWNmFUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGoNzlC2V%2B5PYE4tTircA%2F%2BQ7vvLWF6t24c2Y3V7%2B0q%2BQVSTbfvu5k9r0lOVPiOhFQDtjFshiNA6YU8KakAlgI4EdNDyXtO6W00yJipeZiPYWqpBU2UF%2Bv9CmlvxYC3T7zCIJbCGaZkyrFYqutHqQTHvgvwXUeveh5nBjs62TsENDBH%2BCt9lFEpR6gI9nW4Pyy31fwZu5B33nq5CTvdwU2j9%2BvNTSfkuRSMg3lPRV4MRdyEMd5%2F3RytKyT2TjMfRUpVzyfqUBvBstqN8OfLapy03uHu39hr3VUnVvDizDan%2FgOi68dE%2BZ0NjMMKwoYCZeT%2B%2BdLBwVd6DT9LdIUrdaU5EGjShlBZU8aChNUQ3B%2FDV%2BtmRvSox5QHAjpPoQpBmV3q6YgvyKyz2Ptv%2FZvaWbo1WTxf5akCY3jELtZCaHkdYDov9s4VTh1rkCi1sQRClbwjrGjjzjc0Pxe9L4Wc5GvMYzQW5MQLa5p%2FJpr55J7z4T0DRlcW%2FqVgrOZYSw4EoW9CrC7pWnGfV26r1JOLEXzFEYsFTj0Uq10xeI5B9I%2By4mmCEKkV7zcn3qnQ5Q3iBzmdWSf6tf5lOQL%2BGeQS26GmoLDzG%2FveFmZXipb9Z5ODV2YwdXBunyG0UEiRqyfD4Ru%2BCh0s4%2BWX9qBRJMMu7jr0GOqUBFaqjEKNa8xmcop4HqQDX2E62BDm%2FA1VXF55BhGU7gpVWM0EDoIv6OtwDmrCQz0mPgTWE5IhFUGrEXq9deN4zHAEz8m87B8I%2FQJs%2B7EfMOOu3YGGgSSzRLNJ8j1hytl99sdLTNJCmtaqI4SF3tjnshxDg%2FKnuMTzzm5mJRuIbWGbxBq4bU4OLccvvZF8CbnHLe7kHboDF5zR52OmYU2XrCOYHBYxd&X-Amz-Signature=cbfcb8a21d941ed5e0e2aa255772a5dd0a235a755cfed5e2091ec2d01e7e355c&X-Amz-SignedHeaders=host&x-id=GetObject)
