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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2HTJTE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgWhy0ifKXLLk6izPO0%2BKrUiJ8Mw%2FVoXqsSb1fi1R6QIgIXZC11uFzk8mf0x32nro4E7idC7srgAsisIHJ7r3GTQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWTC7XCxsdY4fgItircA6WS%2FOYs92Q0wspmjAc9ya7aPWZ5E4en4FrXzN5FC512IJz%2FpNGQ6LP7ID3y%2Fp6CSA9Osy4Ot2vOFhFbWZ76JKL2MJJ%2BK6SZGrfwWTeGB17BV9jfNPMvCb4TT13yooLcDjwLEKeZcYL0y1de9p3gGxAGpdM5NCgpIj269QHa5jUOpFTLWTYN0uMAc8DRoa8BIX72UkgVYq0bi0umw%2BULEI7q7ekg8HBU1ldRbNhEbxDvX4nEvZq5LTVxTzE9a2fY0MvxYpnJCSbFisQUQ1awYGrhI6WigGwkb98ql1DKy0of57f%2FnoJHhblI1Rf98YLHiCn9%2BqtoJKwgsR7oRw3Go5iZxM66yNqNQyv8G3kD%2B6l6UKY%2F0GyhZ6lEJsxLo7BJvnKkFd9NH5UlS5JsKKcCEtwByF3YAslEMsC%2BoaZfOKBB%2Bcft2ab3bZ5l%2F4AEok7eWtRaM9644JD1J1secr4pUctwcXGqLxddU1p3EG7l2lw3p37hTHaoebCrCYje3f2FIvE4cFhEzGZK1LZb%2BvT3lO9xnA9lzahqsH6zCUHTExRXfGSNzjRHrmdrg%2BFSFH7AezkWokxXh5PwL49bTFZoET7Gll2L5K%2BvvcpM49BL9TU%2FMOHlNTJzLAn4kIDcML2PgsMGOqUBBQakEWY2WacWPuU%2Bv%2BFPIInxzTpPbpRa32cWxJ02Q%2FCe3HCdP1vYvOf1C8KA6Datab5UWH788bWDWMWGOT9Bk80XE9zxcoDvult5h9zqU1RWPHuiCw7%2BUrZixA3kdFK%2FDbl%2BlE%2FGLJcK0Ca2VI640tynf4Rfsc7Uh2jLs869P6tTjzKt6NjTCHv95F3Bn3ZIlK4dz8vHJUYzjOTM8lMeLxr%2BuupQ&X-Amz-Signature=14e1194c331a918bf608aeb4020933650b77912b21f798c7059fa0300ea2b502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2HTJTE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgWhy0ifKXLLk6izPO0%2BKrUiJ8Mw%2FVoXqsSb1fi1R6QIgIXZC11uFzk8mf0x32nro4E7idC7srgAsisIHJ7r3GTQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWTC7XCxsdY4fgItircA6WS%2FOYs92Q0wspmjAc9ya7aPWZ5E4en4FrXzN5FC512IJz%2FpNGQ6LP7ID3y%2Fp6CSA9Osy4Ot2vOFhFbWZ76JKL2MJJ%2BK6SZGrfwWTeGB17BV9jfNPMvCb4TT13yooLcDjwLEKeZcYL0y1de9p3gGxAGpdM5NCgpIj269QHa5jUOpFTLWTYN0uMAc8DRoa8BIX72UkgVYq0bi0umw%2BULEI7q7ekg8HBU1ldRbNhEbxDvX4nEvZq5LTVxTzE9a2fY0MvxYpnJCSbFisQUQ1awYGrhI6WigGwkb98ql1DKy0of57f%2FnoJHhblI1Rf98YLHiCn9%2BqtoJKwgsR7oRw3Go5iZxM66yNqNQyv8G3kD%2B6l6UKY%2F0GyhZ6lEJsxLo7BJvnKkFd9NH5UlS5JsKKcCEtwByF3YAslEMsC%2BoaZfOKBB%2Bcft2ab3bZ5l%2F4AEok7eWtRaM9644JD1J1secr4pUctwcXGqLxddU1p3EG7l2lw3p37hTHaoebCrCYje3f2FIvE4cFhEzGZK1LZb%2BvT3lO9xnA9lzahqsH6zCUHTExRXfGSNzjRHrmdrg%2BFSFH7AezkWokxXh5PwL49bTFZoET7Gll2L5K%2BvvcpM49BL9TU%2FMOHlNTJzLAn4kIDcML2PgsMGOqUBBQakEWY2WacWPuU%2Bv%2BFPIInxzTpPbpRa32cWxJ02Q%2FCe3HCdP1vYvOf1C8KA6Datab5UWH788bWDWMWGOT9Bk80XE9zxcoDvult5h9zqU1RWPHuiCw7%2BUrZixA3kdFK%2FDbl%2BlE%2FGLJcK0Ca2VI640tynf4Rfsc7Uh2jLs869P6tTjzKt6NjTCHv95F3Bn3ZIlK4dz8vHJUYzjOTM8lMeLxr%2BuupQ&X-Amz-Signature=b262c80ff98a1c1514eb144ded999307c1d0180a0e851f7a4d7871c23558efc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2HTJTE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgWhy0ifKXLLk6izPO0%2BKrUiJ8Mw%2FVoXqsSb1fi1R6QIgIXZC11uFzk8mf0x32nro4E7idC7srgAsisIHJ7r3GTQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWTC7XCxsdY4fgItircA6WS%2FOYs92Q0wspmjAc9ya7aPWZ5E4en4FrXzN5FC512IJz%2FpNGQ6LP7ID3y%2Fp6CSA9Osy4Ot2vOFhFbWZ76JKL2MJJ%2BK6SZGrfwWTeGB17BV9jfNPMvCb4TT13yooLcDjwLEKeZcYL0y1de9p3gGxAGpdM5NCgpIj269QHa5jUOpFTLWTYN0uMAc8DRoa8BIX72UkgVYq0bi0umw%2BULEI7q7ekg8HBU1ldRbNhEbxDvX4nEvZq5LTVxTzE9a2fY0MvxYpnJCSbFisQUQ1awYGrhI6WigGwkb98ql1DKy0of57f%2FnoJHhblI1Rf98YLHiCn9%2BqtoJKwgsR7oRw3Go5iZxM66yNqNQyv8G3kD%2B6l6UKY%2F0GyhZ6lEJsxLo7BJvnKkFd9NH5UlS5JsKKcCEtwByF3YAslEMsC%2BoaZfOKBB%2Bcft2ab3bZ5l%2F4AEok7eWtRaM9644JD1J1secr4pUctwcXGqLxddU1p3EG7l2lw3p37hTHaoebCrCYje3f2FIvE4cFhEzGZK1LZb%2BvT3lO9xnA9lzahqsH6zCUHTExRXfGSNzjRHrmdrg%2BFSFH7AezkWokxXh5PwL49bTFZoET7Gll2L5K%2BvvcpM49BL9TU%2FMOHlNTJzLAn4kIDcML2PgsMGOqUBBQakEWY2WacWPuU%2Bv%2BFPIInxzTpPbpRa32cWxJ02Q%2FCe3HCdP1vYvOf1C8KA6Datab5UWH788bWDWMWGOT9Bk80XE9zxcoDvult5h9zqU1RWPHuiCw7%2BUrZixA3kdFK%2FDbl%2BlE%2FGLJcK0Ca2VI640tynf4Rfsc7Uh2jLs869P6tTjzKt6NjTCHv95F3Bn3ZIlK4dz8vHJUYzjOTM8lMeLxr%2BuupQ&X-Amz-Signature=106c31399b91524ebff14c492df6b357aea03efa5a369943a05e4dcdae2eb184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2HTJTE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgWhy0ifKXLLk6izPO0%2BKrUiJ8Mw%2FVoXqsSb1fi1R6QIgIXZC11uFzk8mf0x32nro4E7idC7srgAsisIHJ7r3GTQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWTC7XCxsdY4fgItircA6WS%2FOYs92Q0wspmjAc9ya7aPWZ5E4en4FrXzN5FC512IJz%2FpNGQ6LP7ID3y%2Fp6CSA9Osy4Ot2vOFhFbWZ76JKL2MJJ%2BK6SZGrfwWTeGB17BV9jfNPMvCb4TT13yooLcDjwLEKeZcYL0y1de9p3gGxAGpdM5NCgpIj269QHa5jUOpFTLWTYN0uMAc8DRoa8BIX72UkgVYq0bi0umw%2BULEI7q7ekg8HBU1ldRbNhEbxDvX4nEvZq5LTVxTzE9a2fY0MvxYpnJCSbFisQUQ1awYGrhI6WigGwkb98ql1DKy0of57f%2FnoJHhblI1Rf98YLHiCn9%2BqtoJKwgsR7oRw3Go5iZxM66yNqNQyv8G3kD%2B6l6UKY%2F0GyhZ6lEJsxLo7BJvnKkFd9NH5UlS5JsKKcCEtwByF3YAslEMsC%2BoaZfOKBB%2Bcft2ab3bZ5l%2F4AEok7eWtRaM9644JD1J1secr4pUctwcXGqLxddU1p3EG7l2lw3p37hTHaoebCrCYje3f2FIvE4cFhEzGZK1LZb%2BvT3lO9xnA9lzahqsH6zCUHTExRXfGSNzjRHrmdrg%2BFSFH7AezkWokxXh5PwL49bTFZoET7Gll2L5K%2BvvcpM49BL9TU%2FMOHlNTJzLAn4kIDcML2PgsMGOqUBBQakEWY2WacWPuU%2Bv%2BFPIInxzTpPbpRa32cWxJ02Q%2FCe3HCdP1vYvOf1C8KA6Datab5UWH788bWDWMWGOT9Bk80XE9zxcoDvult5h9zqU1RWPHuiCw7%2BUrZixA3kdFK%2FDbl%2BlE%2FGLJcK0Ca2VI640tynf4Rfsc7Uh2jLs869P6tTjzKt6NjTCHv95F3Bn3ZIlK4dz8vHJUYzjOTM8lMeLxr%2BuupQ&X-Amz-Signature=63754429f6d31d279ec997834b67fc1863feb307b1d9fdff74f1f47a761702f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2HTJTE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgWhy0ifKXLLk6izPO0%2BKrUiJ8Mw%2FVoXqsSb1fi1R6QIgIXZC11uFzk8mf0x32nro4E7idC7srgAsisIHJ7r3GTQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWTC7XCxsdY4fgItircA6WS%2FOYs92Q0wspmjAc9ya7aPWZ5E4en4FrXzN5FC512IJz%2FpNGQ6LP7ID3y%2Fp6CSA9Osy4Ot2vOFhFbWZ76JKL2MJJ%2BK6SZGrfwWTeGB17BV9jfNPMvCb4TT13yooLcDjwLEKeZcYL0y1de9p3gGxAGpdM5NCgpIj269QHa5jUOpFTLWTYN0uMAc8DRoa8BIX72UkgVYq0bi0umw%2BULEI7q7ekg8HBU1ldRbNhEbxDvX4nEvZq5LTVxTzE9a2fY0MvxYpnJCSbFisQUQ1awYGrhI6WigGwkb98ql1DKy0of57f%2FnoJHhblI1Rf98YLHiCn9%2BqtoJKwgsR7oRw3Go5iZxM66yNqNQyv8G3kD%2B6l6UKY%2F0GyhZ6lEJsxLo7BJvnKkFd9NH5UlS5JsKKcCEtwByF3YAslEMsC%2BoaZfOKBB%2Bcft2ab3bZ5l%2F4AEok7eWtRaM9644JD1J1secr4pUctwcXGqLxddU1p3EG7l2lw3p37hTHaoebCrCYje3f2FIvE4cFhEzGZK1LZb%2BvT3lO9xnA9lzahqsH6zCUHTExRXfGSNzjRHrmdrg%2BFSFH7AezkWokxXh5PwL49bTFZoET7Gll2L5K%2BvvcpM49BL9TU%2FMOHlNTJzLAn4kIDcML2PgsMGOqUBBQakEWY2WacWPuU%2Bv%2BFPIInxzTpPbpRa32cWxJ02Q%2FCe3HCdP1vYvOf1C8KA6Datab5UWH788bWDWMWGOT9Bk80XE9zxcoDvult5h9zqU1RWPHuiCw7%2BUrZixA3kdFK%2FDbl%2BlE%2FGLJcK0Ca2VI640tynf4Rfsc7Uh2jLs869P6tTjzKt6NjTCHv95F3Bn3ZIlK4dz8vHJUYzjOTM8lMeLxr%2BuupQ&X-Amz-Signature=cc746a533ec1fcdf15e46e2bf1e6acbdbec3d8c113d564b622ac5da07f1b2b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2HTJTE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCgWhy0ifKXLLk6izPO0%2BKrUiJ8Mw%2FVoXqsSb1fi1R6QIgIXZC11uFzk8mf0x32nro4E7idC7srgAsisIHJ7r3GTQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWTC7XCxsdY4fgItircA6WS%2FOYs92Q0wspmjAc9ya7aPWZ5E4en4FrXzN5FC512IJz%2FpNGQ6LP7ID3y%2Fp6CSA9Osy4Ot2vOFhFbWZ76JKL2MJJ%2BK6SZGrfwWTeGB17BV9jfNPMvCb4TT13yooLcDjwLEKeZcYL0y1de9p3gGxAGpdM5NCgpIj269QHa5jUOpFTLWTYN0uMAc8DRoa8BIX72UkgVYq0bi0umw%2BULEI7q7ekg8HBU1ldRbNhEbxDvX4nEvZq5LTVxTzE9a2fY0MvxYpnJCSbFisQUQ1awYGrhI6WigGwkb98ql1DKy0of57f%2FnoJHhblI1Rf98YLHiCn9%2BqtoJKwgsR7oRw3Go5iZxM66yNqNQyv8G3kD%2B6l6UKY%2F0GyhZ6lEJsxLo7BJvnKkFd9NH5UlS5JsKKcCEtwByF3YAslEMsC%2BoaZfOKBB%2Bcft2ab3bZ5l%2F4AEok7eWtRaM9644JD1J1secr4pUctwcXGqLxddU1p3EG7l2lw3p37hTHaoebCrCYje3f2FIvE4cFhEzGZK1LZb%2BvT3lO9xnA9lzahqsH6zCUHTExRXfGSNzjRHrmdrg%2BFSFH7AezkWokxXh5PwL49bTFZoET7Gll2L5K%2BvvcpM49BL9TU%2FMOHlNTJzLAn4kIDcML2PgsMGOqUBBQakEWY2WacWPuU%2Bv%2BFPIInxzTpPbpRa32cWxJ02Q%2FCe3HCdP1vYvOf1C8KA6Datab5UWH788bWDWMWGOT9Bk80XE9zxcoDvult5h9zqU1RWPHuiCw7%2BUrZixA3kdFK%2FDbl%2BlE%2FGLJcK0Ca2VI640tynf4Rfsc7Uh2jLs869P6tTjzKt6NjTCHv95F3Bn3ZIlK4dz8vHJUYzjOTM8lMeLxr%2BuupQ&X-Amz-Signature=720003a6c8cd3405c1d6a0a9b4cbf8e7190b93d7d719b0bac7c553a13891992b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
