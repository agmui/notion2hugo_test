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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDEI47D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICyxgKo6WRED3al%2FaDQxXGPhpZHvruu%2BCUlQfIDhzbBcAiEA7jUJu7BnRP7jHCC4f2RMyFr9k6Wk82nUGg608wYGbWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4NR%2BFhm%2FRHGdlUKyrcAzMgVxqD5ShC3V6LeOz0%2Bk75Y9SSvVoOLiKNcimri3BwCgY1El7EBhOF6IPUq%2FzvboMBZmjfEyBDhTPQweyKcddUFzX0GjmRRjzxD7cDHTLa50Ut8GZ3k1gCzAjMh06lnkTG4hSG4hyyPq3Epr4TBFOr04%2BvDKyybwyOI5lT6yOjTQKH4BQMW%2Bglv0GpeM7HD9c92z%2F0a41fsR%2FIWkfpQQEMVeYS%2FvDfTz%2BBnQFhIczRzSoW7GgBUyOq8mx9rQGbfw0iV7zISwcsdOuJooIzcOUp5DYy1UVQ%2B3AtsuMGDs2hP0qENep2ygXC%2Bt5U4AO0nOhS6i2xom9ZJlt8OLjxHlmCAKGMFLCByFC2HAOmTtx50%2BfazkPWoTYkgBxqjSlcwUiK5VqPFofCmgtbdn1LqdJ8%2BFHmMaS0H3fFfybEGO4kOvE75FzTgjShs%2B7ifdNlUYgwVEDVfx%2Bj9k2i5ZOO5lRmuluB32xE%2BMfLLgDYbYgkqqCjlIYO4kWpgvpcSI5b1MRscCs5tM6c7TtYGwFixVCQ9AS1Fk61QOUALL084nG%2FdPOaYNDV4BJbWTgNi8dELfRoUsOmkPTW1zAtsOl4%2FyE0WbeL9z1y%2BkBNwneWmPx4zGXMKM9uiQw3yPd4MMCJtr4GOqUBYE%2FnHzWKgP%2Bo0vqAEgjtau93IqjGiYCNq8FxC6peRFcTKx0%2FsC%2BP%2FwMfK%2BWZXNInGZQl6YM5eOOOWqS5Mjd55KzomDyeOAV3FI9VV3oixDBQlNQfkNNMmRcGUwaUYjAnjFs8XrQ9nY3CBxHB5nVhw5wDbHiO%2BUptmu6javhA7n8joUcSPegr7%2B5guS0zJWJBXOzE%2Bq9wh5Wyf3GNIluXBscOLK3k&X-Amz-Signature=9aa788ceaa80a64a5bd1ff8183250c1f141703167007e3dbc629e9a1c796d165&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDEI47D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICyxgKo6WRED3al%2FaDQxXGPhpZHvruu%2BCUlQfIDhzbBcAiEA7jUJu7BnRP7jHCC4f2RMyFr9k6Wk82nUGg608wYGbWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4NR%2BFhm%2FRHGdlUKyrcAzMgVxqD5ShC3V6LeOz0%2Bk75Y9SSvVoOLiKNcimri3BwCgY1El7EBhOF6IPUq%2FzvboMBZmjfEyBDhTPQweyKcddUFzX0GjmRRjzxD7cDHTLa50Ut8GZ3k1gCzAjMh06lnkTG4hSG4hyyPq3Epr4TBFOr04%2BvDKyybwyOI5lT6yOjTQKH4BQMW%2Bglv0GpeM7HD9c92z%2F0a41fsR%2FIWkfpQQEMVeYS%2FvDfTz%2BBnQFhIczRzSoW7GgBUyOq8mx9rQGbfw0iV7zISwcsdOuJooIzcOUp5DYy1UVQ%2B3AtsuMGDs2hP0qENep2ygXC%2Bt5U4AO0nOhS6i2xom9ZJlt8OLjxHlmCAKGMFLCByFC2HAOmTtx50%2BfazkPWoTYkgBxqjSlcwUiK5VqPFofCmgtbdn1LqdJ8%2BFHmMaS0H3fFfybEGO4kOvE75FzTgjShs%2B7ifdNlUYgwVEDVfx%2Bj9k2i5ZOO5lRmuluB32xE%2BMfLLgDYbYgkqqCjlIYO4kWpgvpcSI5b1MRscCs5tM6c7TtYGwFixVCQ9AS1Fk61QOUALL084nG%2FdPOaYNDV4BJbWTgNi8dELfRoUsOmkPTW1zAtsOl4%2FyE0WbeL9z1y%2BkBNwneWmPx4zGXMKM9uiQw3yPd4MMCJtr4GOqUBYE%2FnHzWKgP%2Bo0vqAEgjtau93IqjGiYCNq8FxC6peRFcTKx0%2FsC%2BP%2FwMfK%2BWZXNInGZQl6YM5eOOOWqS5Mjd55KzomDyeOAV3FI9VV3oixDBQlNQfkNNMmRcGUwaUYjAnjFs8XrQ9nY3CBxHB5nVhw5wDbHiO%2BUptmu6javhA7n8joUcSPegr7%2B5guS0zJWJBXOzE%2Bq9wh5Wyf3GNIluXBscOLK3k&X-Amz-Signature=7e3f04a35b24a60e70660a75c3192e728ea0188a9921d9b03216a113a1830838&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDEI47D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICyxgKo6WRED3al%2FaDQxXGPhpZHvruu%2BCUlQfIDhzbBcAiEA7jUJu7BnRP7jHCC4f2RMyFr9k6Wk82nUGg608wYGbWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4NR%2BFhm%2FRHGdlUKyrcAzMgVxqD5ShC3V6LeOz0%2Bk75Y9SSvVoOLiKNcimri3BwCgY1El7EBhOF6IPUq%2FzvboMBZmjfEyBDhTPQweyKcddUFzX0GjmRRjzxD7cDHTLa50Ut8GZ3k1gCzAjMh06lnkTG4hSG4hyyPq3Epr4TBFOr04%2BvDKyybwyOI5lT6yOjTQKH4BQMW%2Bglv0GpeM7HD9c92z%2F0a41fsR%2FIWkfpQQEMVeYS%2FvDfTz%2BBnQFhIczRzSoW7GgBUyOq8mx9rQGbfw0iV7zISwcsdOuJooIzcOUp5DYy1UVQ%2B3AtsuMGDs2hP0qENep2ygXC%2Bt5U4AO0nOhS6i2xom9ZJlt8OLjxHlmCAKGMFLCByFC2HAOmTtx50%2BfazkPWoTYkgBxqjSlcwUiK5VqPFofCmgtbdn1LqdJ8%2BFHmMaS0H3fFfybEGO4kOvE75FzTgjShs%2B7ifdNlUYgwVEDVfx%2Bj9k2i5ZOO5lRmuluB32xE%2BMfLLgDYbYgkqqCjlIYO4kWpgvpcSI5b1MRscCs5tM6c7TtYGwFixVCQ9AS1Fk61QOUALL084nG%2FdPOaYNDV4BJbWTgNi8dELfRoUsOmkPTW1zAtsOl4%2FyE0WbeL9z1y%2BkBNwneWmPx4zGXMKM9uiQw3yPd4MMCJtr4GOqUBYE%2FnHzWKgP%2Bo0vqAEgjtau93IqjGiYCNq8FxC6peRFcTKx0%2FsC%2BP%2FwMfK%2BWZXNInGZQl6YM5eOOOWqS5Mjd55KzomDyeOAV3FI9VV3oixDBQlNQfkNNMmRcGUwaUYjAnjFs8XrQ9nY3CBxHB5nVhw5wDbHiO%2BUptmu6javhA7n8joUcSPegr7%2B5guS0zJWJBXOzE%2Bq9wh5Wyf3GNIluXBscOLK3k&X-Amz-Signature=fd7b70b801be3e4adc04c76351d8e2438d5039c258b97ea55c3965218f755591&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDEI47D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICyxgKo6WRED3al%2FaDQxXGPhpZHvruu%2BCUlQfIDhzbBcAiEA7jUJu7BnRP7jHCC4f2RMyFr9k6Wk82nUGg608wYGbWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4NR%2BFhm%2FRHGdlUKyrcAzMgVxqD5ShC3V6LeOz0%2Bk75Y9SSvVoOLiKNcimri3BwCgY1El7EBhOF6IPUq%2FzvboMBZmjfEyBDhTPQweyKcddUFzX0GjmRRjzxD7cDHTLa50Ut8GZ3k1gCzAjMh06lnkTG4hSG4hyyPq3Epr4TBFOr04%2BvDKyybwyOI5lT6yOjTQKH4BQMW%2Bglv0GpeM7HD9c92z%2F0a41fsR%2FIWkfpQQEMVeYS%2FvDfTz%2BBnQFhIczRzSoW7GgBUyOq8mx9rQGbfw0iV7zISwcsdOuJooIzcOUp5DYy1UVQ%2B3AtsuMGDs2hP0qENep2ygXC%2Bt5U4AO0nOhS6i2xom9ZJlt8OLjxHlmCAKGMFLCByFC2HAOmTtx50%2BfazkPWoTYkgBxqjSlcwUiK5VqPFofCmgtbdn1LqdJ8%2BFHmMaS0H3fFfybEGO4kOvE75FzTgjShs%2B7ifdNlUYgwVEDVfx%2Bj9k2i5ZOO5lRmuluB32xE%2BMfLLgDYbYgkqqCjlIYO4kWpgvpcSI5b1MRscCs5tM6c7TtYGwFixVCQ9AS1Fk61QOUALL084nG%2FdPOaYNDV4BJbWTgNi8dELfRoUsOmkPTW1zAtsOl4%2FyE0WbeL9z1y%2BkBNwneWmPx4zGXMKM9uiQw3yPd4MMCJtr4GOqUBYE%2FnHzWKgP%2Bo0vqAEgjtau93IqjGiYCNq8FxC6peRFcTKx0%2FsC%2BP%2FwMfK%2BWZXNInGZQl6YM5eOOOWqS5Mjd55KzomDyeOAV3FI9VV3oixDBQlNQfkNNMmRcGUwaUYjAnjFs8XrQ9nY3CBxHB5nVhw5wDbHiO%2BUptmu6javhA7n8joUcSPegr7%2B5guS0zJWJBXOzE%2Bq9wh5Wyf3GNIluXBscOLK3k&X-Amz-Signature=dab38bf58b513b4a057723cdf5c21c17f4d3c698281a9ef1877d64a2af066fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDEI47D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICyxgKo6WRED3al%2FaDQxXGPhpZHvruu%2BCUlQfIDhzbBcAiEA7jUJu7BnRP7jHCC4f2RMyFr9k6Wk82nUGg608wYGbWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4NR%2BFhm%2FRHGdlUKyrcAzMgVxqD5ShC3V6LeOz0%2Bk75Y9SSvVoOLiKNcimri3BwCgY1El7EBhOF6IPUq%2FzvboMBZmjfEyBDhTPQweyKcddUFzX0GjmRRjzxD7cDHTLa50Ut8GZ3k1gCzAjMh06lnkTG4hSG4hyyPq3Epr4TBFOr04%2BvDKyybwyOI5lT6yOjTQKH4BQMW%2Bglv0GpeM7HD9c92z%2F0a41fsR%2FIWkfpQQEMVeYS%2FvDfTz%2BBnQFhIczRzSoW7GgBUyOq8mx9rQGbfw0iV7zISwcsdOuJooIzcOUp5DYy1UVQ%2B3AtsuMGDs2hP0qENep2ygXC%2Bt5U4AO0nOhS6i2xom9ZJlt8OLjxHlmCAKGMFLCByFC2HAOmTtx50%2BfazkPWoTYkgBxqjSlcwUiK5VqPFofCmgtbdn1LqdJ8%2BFHmMaS0H3fFfybEGO4kOvE75FzTgjShs%2B7ifdNlUYgwVEDVfx%2Bj9k2i5ZOO5lRmuluB32xE%2BMfLLgDYbYgkqqCjlIYO4kWpgvpcSI5b1MRscCs5tM6c7TtYGwFixVCQ9AS1Fk61QOUALL084nG%2FdPOaYNDV4BJbWTgNi8dELfRoUsOmkPTW1zAtsOl4%2FyE0WbeL9z1y%2BkBNwneWmPx4zGXMKM9uiQw3yPd4MMCJtr4GOqUBYE%2FnHzWKgP%2Bo0vqAEgjtau93IqjGiYCNq8FxC6peRFcTKx0%2FsC%2BP%2FwMfK%2BWZXNInGZQl6YM5eOOOWqS5Mjd55KzomDyeOAV3FI9VV3oixDBQlNQfkNNMmRcGUwaUYjAnjFs8XrQ9nY3CBxHB5nVhw5wDbHiO%2BUptmu6javhA7n8joUcSPegr7%2B5guS0zJWJBXOzE%2Bq9wh5Wyf3GNIluXBscOLK3k&X-Amz-Signature=588a18672b8da23fc4041d0d31b6d06f556c6e3b65404ae73fb9e0d9a3ce874e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDEI47D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICyxgKo6WRED3al%2FaDQxXGPhpZHvruu%2BCUlQfIDhzbBcAiEA7jUJu7BnRP7jHCC4f2RMyFr9k6Wk82nUGg608wYGbWkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4NR%2BFhm%2FRHGdlUKyrcAzMgVxqD5ShC3V6LeOz0%2Bk75Y9SSvVoOLiKNcimri3BwCgY1El7EBhOF6IPUq%2FzvboMBZmjfEyBDhTPQweyKcddUFzX0GjmRRjzxD7cDHTLa50Ut8GZ3k1gCzAjMh06lnkTG4hSG4hyyPq3Epr4TBFOr04%2BvDKyybwyOI5lT6yOjTQKH4BQMW%2Bglv0GpeM7HD9c92z%2F0a41fsR%2FIWkfpQQEMVeYS%2FvDfTz%2BBnQFhIczRzSoW7GgBUyOq8mx9rQGbfw0iV7zISwcsdOuJooIzcOUp5DYy1UVQ%2B3AtsuMGDs2hP0qENep2ygXC%2Bt5U4AO0nOhS6i2xom9ZJlt8OLjxHlmCAKGMFLCByFC2HAOmTtx50%2BfazkPWoTYkgBxqjSlcwUiK5VqPFofCmgtbdn1LqdJ8%2BFHmMaS0H3fFfybEGO4kOvE75FzTgjShs%2B7ifdNlUYgwVEDVfx%2Bj9k2i5ZOO5lRmuluB32xE%2BMfLLgDYbYgkqqCjlIYO4kWpgvpcSI5b1MRscCs5tM6c7TtYGwFixVCQ9AS1Fk61QOUALL084nG%2FdPOaYNDV4BJbWTgNi8dELfRoUsOmkPTW1zAtsOl4%2FyE0WbeL9z1y%2BkBNwneWmPx4zGXMKM9uiQw3yPd4MMCJtr4GOqUBYE%2FnHzWKgP%2Bo0vqAEgjtau93IqjGiYCNq8FxC6peRFcTKx0%2FsC%2BP%2FwMfK%2BWZXNInGZQl6YM5eOOOWqS5Mjd55KzomDyeOAV3FI9VV3oixDBQlNQfkNNMmRcGUwaUYjAnjFs8XrQ9nY3CBxHB5nVhw5wDbHiO%2BUptmu6javhA7n8joUcSPegr7%2B5guS0zJWJBXOzE%2Bq9wh5Wyf3GNIluXBscOLK3k&X-Amz-Signature=5508f1b14702c43f745e3f20e0ab9fe6148e5bf237c7c06b3b20c976b5819e1c&X-Amz-SignedHeaders=host&x-id=GetObject)
