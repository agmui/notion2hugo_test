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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTINKQ4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGtfZLQBssF73FlOP8U2ojQdRH4pbQs5H%2FRI%2Bomuq4AwAiEA9eah7seJFwPWWCguQ%2BBsuJjYcRl3TrdQcWEfC8VbOUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMO%2B%2F72rIJ1dxt9c%2FCrcA%2BlwWwhyjjHF6hJYnVfx3icgzWoSilSAhTNCx5AUn8adiDd596EnFAJZSEH48qeBzuwTWsmjLxr7IilPNM4QgTp9CF31jSFpA%2B%2BJFDU4Rutw%2B6rWzBLJY48qvteVCF6nLCAq3Q1Hw4Svgvgm7b3OQ%2FPEg0nEXn8CSwpUYBFjhCjfTZteQOMB2ZA7U9dPzpQotQM91jHpCbQYZhhCVh6cPy7mnkKyCViNs%2FH%2FNKRHLmgjOdBnm5C8xfhHksyQcaIQrnr0a9CqTVUrfJWA%2BzElFsxWgamKt%2BIWhuqQVY%2BHtR7theC1GwfyoSn0dgBxdrk3oYRqTbPjMc1%2Bc27VOlNOSqMnHukHcOFtgeaVlG7%2BbHKBzMTYs45d83tPtmG46EqC6kt0yD%2FoL5PNkuOfSf6ru7ieo2YFkDsab8V9jdan%2FjFDvX6IdRHtqQL%2BZ7vD002eDx5gckq91%2BuRwprnrvUaOe3LIbo7AS7RQaaKIVUSYROCw%2FVK7m5u4x9puVaYkLJH2d6qU8DTdJ4d66bqwTzsliHzW0dKGxzdT9BjRJWtBksQp8Y2UkLjKZZXP%2F01ETJjKT4Rbt%2FTzYwkFpnA9D%2Bh54VGNon09zyJaAOqnhycu0yHd1v8U2U78d3j1jK2MIXVl8EGOqUBfS%2FBNcyjtvuFBREQJ75435PVjUmFNPNB1ChSGFJx1I0jtaBa%2BudCo%2Bl56mDjEga5hOGXo2oF20F4KIiDnIfbn4QZdfekY6rAa6O%2BYid8kMi9ZiRhWkB8kUMrFnXeUCfr8TFCeWWMC6QWQU4qxlWPOcOCBZBb0grbY0iMmsRJSunrKa3WW6RVkjDBo6%2F0%2Bkh2EP2flQHJ3jGoKrJ%2Bnkfslcmyabpw&X-Amz-Signature=15d3874b524ed625c463adeb561bb6281d91685eb616eef73e01ea07935fcfff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTINKQ4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGtfZLQBssF73FlOP8U2ojQdRH4pbQs5H%2FRI%2Bomuq4AwAiEA9eah7seJFwPWWCguQ%2BBsuJjYcRl3TrdQcWEfC8VbOUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMO%2B%2F72rIJ1dxt9c%2FCrcA%2BlwWwhyjjHF6hJYnVfx3icgzWoSilSAhTNCx5AUn8adiDd596EnFAJZSEH48qeBzuwTWsmjLxr7IilPNM4QgTp9CF31jSFpA%2B%2BJFDU4Rutw%2B6rWzBLJY48qvteVCF6nLCAq3Q1Hw4Svgvgm7b3OQ%2FPEg0nEXn8CSwpUYBFjhCjfTZteQOMB2ZA7U9dPzpQotQM91jHpCbQYZhhCVh6cPy7mnkKyCViNs%2FH%2FNKRHLmgjOdBnm5C8xfhHksyQcaIQrnr0a9CqTVUrfJWA%2BzElFsxWgamKt%2BIWhuqQVY%2BHtR7theC1GwfyoSn0dgBxdrk3oYRqTbPjMc1%2Bc27VOlNOSqMnHukHcOFtgeaVlG7%2BbHKBzMTYs45d83tPtmG46EqC6kt0yD%2FoL5PNkuOfSf6ru7ieo2YFkDsab8V9jdan%2FjFDvX6IdRHtqQL%2BZ7vD002eDx5gckq91%2BuRwprnrvUaOe3LIbo7AS7RQaaKIVUSYROCw%2FVK7m5u4x9puVaYkLJH2d6qU8DTdJ4d66bqwTzsliHzW0dKGxzdT9BjRJWtBksQp8Y2UkLjKZZXP%2F01ETJjKT4Rbt%2FTzYwkFpnA9D%2Bh54VGNon09zyJaAOqnhycu0yHd1v8U2U78d3j1jK2MIXVl8EGOqUBfS%2FBNcyjtvuFBREQJ75435PVjUmFNPNB1ChSGFJx1I0jtaBa%2BudCo%2Bl56mDjEga5hOGXo2oF20F4KIiDnIfbn4QZdfekY6rAa6O%2BYid8kMi9ZiRhWkB8kUMrFnXeUCfr8TFCeWWMC6QWQU4qxlWPOcOCBZBb0grbY0iMmsRJSunrKa3WW6RVkjDBo6%2F0%2Bkh2EP2flQHJ3jGoKrJ%2Bnkfslcmyabpw&X-Amz-Signature=f8b625ba823af8a033123201805e887466e3cd68383cd28231d2f5d3c1f03f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTINKQ4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGtfZLQBssF73FlOP8U2ojQdRH4pbQs5H%2FRI%2Bomuq4AwAiEA9eah7seJFwPWWCguQ%2BBsuJjYcRl3TrdQcWEfC8VbOUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMO%2B%2F72rIJ1dxt9c%2FCrcA%2BlwWwhyjjHF6hJYnVfx3icgzWoSilSAhTNCx5AUn8adiDd596EnFAJZSEH48qeBzuwTWsmjLxr7IilPNM4QgTp9CF31jSFpA%2B%2BJFDU4Rutw%2B6rWzBLJY48qvteVCF6nLCAq3Q1Hw4Svgvgm7b3OQ%2FPEg0nEXn8CSwpUYBFjhCjfTZteQOMB2ZA7U9dPzpQotQM91jHpCbQYZhhCVh6cPy7mnkKyCViNs%2FH%2FNKRHLmgjOdBnm5C8xfhHksyQcaIQrnr0a9CqTVUrfJWA%2BzElFsxWgamKt%2BIWhuqQVY%2BHtR7theC1GwfyoSn0dgBxdrk3oYRqTbPjMc1%2Bc27VOlNOSqMnHukHcOFtgeaVlG7%2BbHKBzMTYs45d83tPtmG46EqC6kt0yD%2FoL5PNkuOfSf6ru7ieo2YFkDsab8V9jdan%2FjFDvX6IdRHtqQL%2BZ7vD002eDx5gckq91%2BuRwprnrvUaOe3LIbo7AS7RQaaKIVUSYROCw%2FVK7m5u4x9puVaYkLJH2d6qU8DTdJ4d66bqwTzsliHzW0dKGxzdT9BjRJWtBksQp8Y2UkLjKZZXP%2F01ETJjKT4Rbt%2FTzYwkFpnA9D%2Bh54VGNon09zyJaAOqnhycu0yHd1v8U2U78d3j1jK2MIXVl8EGOqUBfS%2FBNcyjtvuFBREQJ75435PVjUmFNPNB1ChSGFJx1I0jtaBa%2BudCo%2Bl56mDjEga5hOGXo2oF20F4KIiDnIfbn4QZdfekY6rAa6O%2BYid8kMi9ZiRhWkB8kUMrFnXeUCfr8TFCeWWMC6QWQU4qxlWPOcOCBZBb0grbY0iMmsRJSunrKa3WW6RVkjDBo6%2F0%2Bkh2EP2flQHJ3jGoKrJ%2Bnkfslcmyabpw&X-Amz-Signature=d07d43f5c8a2aa41d5170f191ac7aad52be0e89df2e3ff1bfb4ae4c353b177e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTINKQ4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGtfZLQBssF73FlOP8U2ojQdRH4pbQs5H%2FRI%2Bomuq4AwAiEA9eah7seJFwPWWCguQ%2BBsuJjYcRl3TrdQcWEfC8VbOUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMO%2B%2F72rIJ1dxt9c%2FCrcA%2BlwWwhyjjHF6hJYnVfx3icgzWoSilSAhTNCx5AUn8adiDd596EnFAJZSEH48qeBzuwTWsmjLxr7IilPNM4QgTp9CF31jSFpA%2B%2BJFDU4Rutw%2B6rWzBLJY48qvteVCF6nLCAq3Q1Hw4Svgvgm7b3OQ%2FPEg0nEXn8CSwpUYBFjhCjfTZteQOMB2ZA7U9dPzpQotQM91jHpCbQYZhhCVh6cPy7mnkKyCViNs%2FH%2FNKRHLmgjOdBnm5C8xfhHksyQcaIQrnr0a9CqTVUrfJWA%2BzElFsxWgamKt%2BIWhuqQVY%2BHtR7theC1GwfyoSn0dgBxdrk3oYRqTbPjMc1%2Bc27VOlNOSqMnHukHcOFtgeaVlG7%2BbHKBzMTYs45d83tPtmG46EqC6kt0yD%2FoL5PNkuOfSf6ru7ieo2YFkDsab8V9jdan%2FjFDvX6IdRHtqQL%2BZ7vD002eDx5gckq91%2BuRwprnrvUaOe3LIbo7AS7RQaaKIVUSYROCw%2FVK7m5u4x9puVaYkLJH2d6qU8DTdJ4d66bqwTzsliHzW0dKGxzdT9BjRJWtBksQp8Y2UkLjKZZXP%2F01ETJjKT4Rbt%2FTzYwkFpnA9D%2Bh54VGNon09zyJaAOqnhycu0yHd1v8U2U78d3j1jK2MIXVl8EGOqUBfS%2FBNcyjtvuFBREQJ75435PVjUmFNPNB1ChSGFJx1I0jtaBa%2BudCo%2Bl56mDjEga5hOGXo2oF20F4KIiDnIfbn4QZdfekY6rAa6O%2BYid8kMi9ZiRhWkB8kUMrFnXeUCfr8TFCeWWMC6QWQU4qxlWPOcOCBZBb0grbY0iMmsRJSunrKa3WW6RVkjDBo6%2F0%2Bkh2EP2flQHJ3jGoKrJ%2Bnkfslcmyabpw&X-Amz-Signature=cb134570dfa3e56b78a203b96f75e12d954881bb1e5654df49e22f7ca23d9aab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTINKQ4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGtfZLQBssF73FlOP8U2ojQdRH4pbQs5H%2FRI%2Bomuq4AwAiEA9eah7seJFwPWWCguQ%2BBsuJjYcRl3TrdQcWEfC8VbOUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMO%2B%2F72rIJ1dxt9c%2FCrcA%2BlwWwhyjjHF6hJYnVfx3icgzWoSilSAhTNCx5AUn8adiDd596EnFAJZSEH48qeBzuwTWsmjLxr7IilPNM4QgTp9CF31jSFpA%2B%2BJFDU4Rutw%2B6rWzBLJY48qvteVCF6nLCAq3Q1Hw4Svgvgm7b3OQ%2FPEg0nEXn8CSwpUYBFjhCjfTZteQOMB2ZA7U9dPzpQotQM91jHpCbQYZhhCVh6cPy7mnkKyCViNs%2FH%2FNKRHLmgjOdBnm5C8xfhHksyQcaIQrnr0a9CqTVUrfJWA%2BzElFsxWgamKt%2BIWhuqQVY%2BHtR7theC1GwfyoSn0dgBxdrk3oYRqTbPjMc1%2Bc27VOlNOSqMnHukHcOFtgeaVlG7%2BbHKBzMTYs45d83tPtmG46EqC6kt0yD%2FoL5PNkuOfSf6ru7ieo2YFkDsab8V9jdan%2FjFDvX6IdRHtqQL%2BZ7vD002eDx5gckq91%2BuRwprnrvUaOe3LIbo7AS7RQaaKIVUSYROCw%2FVK7m5u4x9puVaYkLJH2d6qU8DTdJ4d66bqwTzsliHzW0dKGxzdT9BjRJWtBksQp8Y2UkLjKZZXP%2F01ETJjKT4Rbt%2FTzYwkFpnA9D%2Bh54VGNon09zyJaAOqnhycu0yHd1v8U2U78d3j1jK2MIXVl8EGOqUBfS%2FBNcyjtvuFBREQJ75435PVjUmFNPNB1ChSGFJx1I0jtaBa%2BudCo%2Bl56mDjEga5hOGXo2oF20F4KIiDnIfbn4QZdfekY6rAa6O%2BYid8kMi9ZiRhWkB8kUMrFnXeUCfr8TFCeWWMC6QWQU4qxlWPOcOCBZBb0grbY0iMmsRJSunrKa3WW6RVkjDBo6%2F0%2Bkh2EP2flQHJ3jGoKrJ%2Bnkfslcmyabpw&X-Amz-Signature=e458e081fa4a8601bf2b1f8cd9f99336c83d1fd59e6f1841d11edf501fb66476&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTINKQ4P%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGtfZLQBssF73FlOP8U2ojQdRH4pbQs5H%2FRI%2Bomuq4AwAiEA9eah7seJFwPWWCguQ%2BBsuJjYcRl3TrdQcWEfC8VbOUgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMO%2B%2F72rIJ1dxt9c%2FCrcA%2BlwWwhyjjHF6hJYnVfx3icgzWoSilSAhTNCx5AUn8adiDd596EnFAJZSEH48qeBzuwTWsmjLxr7IilPNM4QgTp9CF31jSFpA%2B%2BJFDU4Rutw%2B6rWzBLJY48qvteVCF6nLCAq3Q1Hw4Svgvgm7b3OQ%2FPEg0nEXn8CSwpUYBFjhCjfTZteQOMB2ZA7U9dPzpQotQM91jHpCbQYZhhCVh6cPy7mnkKyCViNs%2FH%2FNKRHLmgjOdBnm5C8xfhHksyQcaIQrnr0a9CqTVUrfJWA%2BzElFsxWgamKt%2BIWhuqQVY%2BHtR7theC1GwfyoSn0dgBxdrk3oYRqTbPjMc1%2Bc27VOlNOSqMnHukHcOFtgeaVlG7%2BbHKBzMTYs45d83tPtmG46EqC6kt0yD%2FoL5PNkuOfSf6ru7ieo2YFkDsab8V9jdan%2FjFDvX6IdRHtqQL%2BZ7vD002eDx5gckq91%2BuRwprnrvUaOe3LIbo7AS7RQaaKIVUSYROCw%2FVK7m5u4x9puVaYkLJH2d6qU8DTdJ4d66bqwTzsliHzW0dKGxzdT9BjRJWtBksQp8Y2UkLjKZZXP%2F01ETJjKT4Rbt%2FTzYwkFpnA9D%2Bh54VGNon09zyJaAOqnhycu0yHd1v8U2U78d3j1jK2MIXVl8EGOqUBfS%2FBNcyjtvuFBREQJ75435PVjUmFNPNB1ChSGFJx1I0jtaBa%2BudCo%2Bl56mDjEga5hOGXo2oF20F4KIiDnIfbn4QZdfekY6rAa6O%2BYid8kMi9ZiRhWkB8kUMrFnXeUCfr8TFCeWWMC6QWQU4qxlWPOcOCBZBb0grbY0iMmsRJSunrKa3WW6RVkjDBo6%2F0%2Bkh2EP2flQHJ3jGoKrJ%2Bnkfslcmyabpw&X-Amz-Signature=cc750d0569363c9642936c10d30933a61c7c1659b762091d42bea709b61f4668&X-Amz-SignedHeaders=host&x-id=GetObject)
