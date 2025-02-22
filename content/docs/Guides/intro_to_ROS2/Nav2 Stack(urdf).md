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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7UNEB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt2VL2wG5wjLCZ0IhEKs64H0jLPRwwvB%2FaNagcho2cCAiAEm2488LoI10GLGYf6nGMsgVbD3PmhBoFUOgtDzAVYniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIn360GrCCXnoiHjwKtwDV6DuPtV9FOa%2F%2FBjABBe9ABt7s1NU%2B5NmWZ2y6AVVeTAJG1YYv%2BJ13Q1grUKmaOiv7uUlOGuQ9R0vqOVgQGnSzvRwjdBb6c6U%2FIXq4jjD3C6nbbedrDOC9Lb1Pjr%2FQvww1fkr4uprWtdHMiBuWEtVjK0M%2BmzJlsYpnp7jVXn7KC%2FRvu3JbG1k3hRMwo3OY4g6Pg%2FACR%2Fj6IItTAEaZWEBS1%2FOzvuhYRPP4U4YKtcA3EPAnDFwVzdfdknif99JlEzJ8k4AN1Jbr7%2FyGMaO%2BW9pC7bPdKfAMZ4%2Fxzr9rvvzMEKU8AOLEJ6DkAZiQ%2BEfqgbmFdw%2FpmJAo%2FQf1sHr0mCDN41npxM1dHxtbafA9jBE7UHBNCmfASY9zpze5howowj2ZRIqefh1YQlm9CQody0WkTWPvuLUDod0i2VfxHWHmxmdSfCjIDYyvJ0BYFGUomvPDpiNvMYggNiuC2hHYUbpBTWxIU8hUuWu%2F31Notp8jmfMnSIcC6lf5FG8i%2FDgPL%2FGWGB%2FjukHvuLomIm3EVa40IVK%2FW99gbDRXIqP0FTT%2FAROV90tm0Kh2Q6XOhdIp8ejgCUaSh7gw2SRwOjDhMGIr46u5CpCURR72%2BKwe9dLjX%2FXhZZqeEK%2Bo5mfydIwzsflvQY6pgFR6BJRYsD7ZoOOETkNr66vSQNWbZBW80E7tJDMjuDu%2FIcw7sJ3JwUFQqkT%2BBXYMYON%2FkjZ9ZVay79jLtlEWC6P2ZCV4gir9Wisb6VwKd%2F64iCeHtp1LRMBjq7FULs75a3ETudJydbLNfQzS%2BoEt4XF6sTIxA6SK9x8NHNUpTdjcoAjSWV9edM7KVAhbuwbFKAa4OzQCtLs%2BsAUZTN7Fgr58SvfATGk&X-Amz-Signature=915820ae29518d3645c21fe66be9fd9f83b985b8f21e8bc28c265abb2700b4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7UNEB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt2VL2wG5wjLCZ0IhEKs64H0jLPRwwvB%2FaNagcho2cCAiAEm2488LoI10GLGYf6nGMsgVbD3PmhBoFUOgtDzAVYniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIn360GrCCXnoiHjwKtwDV6DuPtV9FOa%2F%2FBjABBe9ABt7s1NU%2B5NmWZ2y6AVVeTAJG1YYv%2BJ13Q1grUKmaOiv7uUlOGuQ9R0vqOVgQGnSzvRwjdBb6c6U%2FIXq4jjD3C6nbbedrDOC9Lb1Pjr%2FQvww1fkr4uprWtdHMiBuWEtVjK0M%2BmzJlsYpnp7jVXn7KC%2FRvu3JbG1k3hRMwo3OY4g6Pg%2FACR%2Fj6IItTAEaZWEBS1%2FOzvuhYRPP4U4YKtcA3EPAnDFwVzdfdknif99JlEzJ8k4AN1Jbr7%2FyGMaO%2BW9pC7bPdKfAMZ4%2Fxzr9rvvzMEKU8AOLEJ6DkAZiQ%2BEfqgbmFdw%2FpmJAo%2FQf1sHr0mCDN41npxM1dHxtbafA9jBE7UHBNCmfASY9zpze5howowj2ZRIqefh1YQlm9CQody0WkTWPvuLUDod0i2VfxHWHmxmdSfCjIDYyvJ0BYFGUomvPDpiNvMYggNiuC2hHYUbpBTWxIU8hUuWu%2F31Notp8jmfMnSIcC6lf5FG8i%2FDgPL%2FGWGB%2FjukHvuLomIm3EVa40IVK%2FW99gbDRXIqP0FTT%2FAROV90tm0Kh2Q6XOhdIp8ejgCUaSh7gw2SRwOjDhMGIr46u5CpCURR72%2BKwe9dLjX%2FXhZZqeEK%2Bo5mfydIwzsflvQY6pgFR6BJRYsD7ZoOOETkNr66vSQNWbZBW80E7tJDMjuDu%2FIcw7sJ3JwUFQqkT%2BBXYMYON%2FkjZ9ZVay79jLtlEWC6P2ZCV4gir9Wisb6VwKd%2F64iCeHtp1LRMBjq7FULs75a3ETudJydbLNfQzS%2BoEt4XF6sTIxA6SK9x8NHNUpTdjcoAjSWV9edM7KVAhbuwbFKAa4OzQCtLs%2BsAUZTN7Fgr58SvfATGk&X-Amz-Signature=ca17c04b71061ec2ab6c5cd902291ed485c8c0126244e97a43bafaade9b181fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7UNEB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt2VL2wG5wjLCZ0IhEKs64H0jLPRwwvB%2FaNagcho2cCAiAEm2488LoI10GLGYf6nGMsgVbD3PmhBoFUOgtDzAVYniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIn360GrCCXnoiHjwKtwDV6DuPtV9FOa%2F%2FBjABBe9ABt7s1NU%2B5NmWZ2y6AVVeTAJG1YYv%2BJ13Q1grUKmaOiv7uUlOGuQ9R0vqOVgQGnSzvRwjdBb6c6U%2FIXq4jjD3C6nbbedrDOC9Lb1Pjr%2FQvww1fkr4uprWtdHMiBuWEtVjK0M%2BmzJlsYpnp7jVXn7KC%2FRvu3JbG1k3hRMwo3OY4g6Pg%2FACR%2Fj6IItTAEaZWEBS1%2FOzvuhYRPP4U4YKtcA3EPAnDFwVzdfdknif99JlEzJ8k4AN1Jbr7%2FyGMaO%2BW9pC7bPdKfAMZ4%2Fxzr9rvvzMEKU8AOLEJ6DkAZiQ%2BEfqgbmFdw%2FpmJAo%2FQf1sHr0mCDN41npxM1dHxtbafA9jBE7UHBNCmfASY9zpze5howowj2ZRIqefh1YQlm9CQody0WkTWPvuLUDod0i2VfxHWHmxmdSfCjIDYyvJ0BYFGUomvPDpiNvMYggNiuC2hHYUbpBTWxIU8hUuWu%2F31Notp8jmfMnSIcC6lf5FG8i%2FDgPL%2FGWGB%2FjukHvuLomIm3EVa40IVK%2FW99gbDRXIqP0FTT%2FAROV90tm0Kh2Q6XOhdIp8ejgCUaSh7gw2SRwOjDhMGIr46u5CpCURR72%2BKwe9dLjX%2FXhZZqeEK%2Bo5mfydIwzsflvQY6pgFR6BJRYsD7ZoOOETkNr66vSQNWbZBW80E7tJDMjuDu%2FIcw7sJ3JwUFQqkT%2BBXYMYON%2FkjZ9ZVay79jLtlEWC6P2ZCV4gir9Wisb6VwKd%2F64iCeHtp1LRMBjq7FULs75a3ETudJydbLNfQzS%2BoEt4XF6sTIxA6SK9x8NHNUpTdjcoAjSWV9edM7KVAhbuwbFKAa4OzQCtLs%2BsAUZTN7Fgr58SvfATGk&X-Amz-Signature=bb9be943f9b079caa101cdf6da48ed856fdb8ffdccb6cd87056c3b65af500dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7UNEB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt2VL2wG5wjLCZ0IhEKs64H0jLPRwwvB%2FaNagcho2cCAiAEm2488LoI10GLGYf6nGMsgVbD3PmhBoFUOgtDzAVYniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIn360GrCCXnoiHjwKtwDV6DuPtV9FOa%2F%2FBjABBe9ABt7s1NU%2B5NmWZ2y6AVVeTAJG1YYv%2BJ13Q1grUKmaOiv7uUlOGuQ9R0vqOVgQGnSzvRwjdBb6c6U%2FIXq4jjD3C6nbbedrDOC9Lb1Pjr%2FQvww1fkr4uprWtdHMiBuWEtVjK0M%2BmzJlsYpnp7jVXn7KC%2FRvu3JbG1k3hRMwo3OY4g6Pg%2FACR%2Fj6IItTAEaZWEBS1%2FOzvuhYRPP4U4YKtcA3EPAnDFwVzdfdknif99JlEzJ8k4AN1Jbr7%2FyGMaO%2BW9pC7bPdKfAMZ4%2Fxzr9rvvzMEKU8AOLEJ6DkAZiQ%2BEfqgbmFdw%2FpmJAo%2FQf1sHr0mCDN41npxM1dHxtbafA9jBE7UHBNCmfASY9zpze5howowj2ZRIqefh1YQlm9CQody0WkTWPvuLUDod0i2VfxHWHmxmdSfCjIDYyvJ0BYFGUomvPDpiNvMYggNiuC2hHYUbpBTWxIU8hUuWu%2F31Notp8jmfMnSIcC6lf5FG8i%2FDgPL%2FGWGB%2FjukHvuLomIm3EVa40IVK%2FW99gbDRXIqP0FTT%2FAROV90tm0Kh2Q6XOhdIp8ejgCUaSh7gw2SRwOjDhMGIr46u5CpCURR72%2BKwe9dLjX%2FXhZZqeEK%2Bo5mfydIwzsflvQY6pgFR6BJRYsD7ZoOOETkNr66vSQNWbZBW80E7tJDMjuDu%2FIcw7sJ3JwUFQqkT%2BBXYMYON%2FkjZ9ZVay79jLtlEWC6P2ZCV4gir9Wisb6VwKd%2F64iCeHtp1LRMBjq7FULs75a3ETudJydbLNfQzS%2BoEt4XF6sTIxA6SK9x8NHNUpTdjcoAjSWV9edM7KVAhbuwbFKAa4OzQCtLs%2BsAUZTN7Fgr58SvfATGk&X-Amz-Signature=f9549432cd53e597166eeb8bac84bb2c2cde634792d0334c0f3fcbc7828714c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7UNEB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt2VL2wG5wjLCZ0IhEKs64H0jLPRwwvB%2FaNagcho2cCAiAEm2488LoI10GLGYf6nGMsgVbD3PmhBoFUOgtDzAVYniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIn360GrCCXnoiHjwKtwDV6DuPtV9FOa%2F%2FBjABBe9ABt7s1NU%2B5NmWZ2y6AVVeTAJG1YYv%2BJ13Q1grUKmaOiv7uUlOGuQ9R0vqOVgQGnSzvRwjdBb6c6U%2FIXq4jjD3C6nbbedrDOC9Lb1Pjr%2FQvww1fkr4uprWtdHMiBuWEtVjK0M%2BmzJlsYpnp7jVXn7KC%2FRvu3JbG1k3hRMwo3OY4g6Pg%2FACR%2Fj6IItTAEaZWEBS1%2FOzvuhYRPP4U4YKtcA3EPAnDFwVzdfdknif99JlEzJ8k4AN1Jbr7%2FyGMaO%2BW9pC7bPdKfAMZ4%2Fxzr9rvvzMEKU8AOLEJ6DkAZiQ%2BEfqgbmFdw%2FpmJAo%2FQf1sHr0mCDN41npxM1dHxtbafA9jBE7UHBNCmfASY9zpze5howowj2ZRIqefh1YQlm9CQody0WkTWPvuLUDod0i2VfxHWHmxmdSfCjIDYyvJ0BYFGUomvPDpiNvMYggNiuC2hHYUbpBTWxIU8hUuWu%2F31Notp8jmfMnSIcC6lf5FG8i%2FDgPL%2FGWGB%2FjukHvuLomIm3EVa40IVK%2FW99gbDRXIqP0FTT%2FAROV90tm0Kh2Q6XOhdIp8ejgCUaSh7gw2SRwOjDhMGIr46u5CpCURR72%2BKwe9dLjX%2FXhZZqeEK%2Bo5mfydIwzsflvQY6pgFR6BJRYsD7ZoOOETkNr66vSQNWbZBW80E7tJDMjuDu%2FIcw7sJ3JwUFQqkT%2BBXYMYON%2FkjZ9ZVay79jLtlEWC6P2ZCV4gir9Wisb6VwKd%2F64iCeHtp1LRMBjq7FULs75a3ETudJydbLNfQzS%2BoEt4XF6sTIxA6SK9x8NHNUpTdjcoAjSWV9edM7KVAhbuwbFKAa4OzQCtLs%2BsAUZTN7Fgr58SvfATGk&X-Amz-Signature=975ef89e2be9ad4d751b5c12e91cfc72ab7f5d866df223bea2c47ea5e06ff944&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7UNEB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt2VL2wG5wjLCZ0IhEKs64H0jLPRwwvB%2FaNagcho2cCAiAEm2488LoI10GLGYf6nGMsgVbD3PmhBoFUOgtDzAVYniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIn360GrCCXnoiHjwKtwDV6DuPtV9FOa%2F%2FBjABBe9ABt7s1NU%2B5NmWZ2y6AVVeTAJG1YYv%2BJ13Q1grUKmaOiv7uUlOGuQ9R0vqOVgQGnSzvRwjdBb6c6U%2FIXq4jjD3C6nbbedrDOC9Lb1Pjr%2FQvww1fkr4uprWtdHMiBuWEtVjK0M%2BmzJlsYpnp7jVXn7KC%2FRvu3JbG1k3hRMwo3OY4g6Pg%2FACR%2Fj6IItTAEaZWEBS1%2FOzvuhYRPP4U4YKtcA3EPAnDFwVzdfdknif99JlEzJ8k4AN1Jbr7%2FyGMaO%2BW9pC7bPdKfAMZ4%2Fxzr9rvvzMEKU8AOLEJ6DkAZiQ%2BEfqgbmFdw%2FpmJAo%2FQf1sHr0mCDN41npxM1dHxtbafA9jBE7UHBNCmfASY9zpze5howowj2ZRIqefh1YQlm9CQody0WkTWPvuLUDod0i2VfxHWHmxmdSfCjIDYyvJ0BYFGUomvPDpiNvMYggNiuC2hHYUbpBTWxIU8hUuWu%2F31Notp8jmfMnSIcC6lf5FG8i%2FDgPL%2FGWGB%2FjukHvuLomIm3EVa40IVK%2FW99gbDRXIqP0FTT%2FAROV90tm0Kh2Q6XOhdIp8ejgCUaSh7gw2SRwOjDhMGIr46u5CpCURR72%2BKwe9dLjX%2FXhZZqeEK%2Bo5mfydIwzsflvQY6pgFR6BJRYsD7ZoOOETkNr66vSQNWbZBW80E7tJDMjuDu%2FIcw7sJ3JwUFQqkT%2BBXYMYON%2FkjZ9ZVay79jLtlEWC6P2ZCV4gir9Wisb6VwKd%2F64iCeHtp1LRMBjq7FULs75a3ETudJydbLNfQzS%2BoEt4XF6sTIxA6SK9x8NHNUpTdjcoAjSWV9edM7KVAhbuwbFKAa4OzQCtLs%2BsAUZTN7Fgr58SvfATGk&X-Amz-Signature=84a5c4672af00a89b2ece4eb7cf582756af96bdaf8c14e46a930c4c49777c07e&X-Amz-SignedHeaders=host&x-id=GetObject)
