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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZYJODY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzR9Fd0a3HiXlD0KRprsieckHeSqDD28ASuGsCt1E73gIgLkPWpjeAtW9w03F9%2Bdz%2B9%2F%2FAcKjX4FlUbfYUuMif3JQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIskl2xkgiFiijDMwSrcA3prTgpIysTUq4Medff%2F%2B3wXvzR5baJy%2By9V%2FgfhHgQL6Q5DMFzGRpykbSo3MwmrC2YJ4xyVDQP2HhxzDu1JDA4JqxhBMpi7q%2BhZvZkPWK82zEwYo4qmIDu9O7XeW4CeaXllaRvE5tJn3RxhIpSAAtjg66IPIqtvRD%2FtXXPPZEOYpD2iciOB3R7VMDwJTcy5ik7IEGvhIorF3b3Ex%2BCrqXBpL7Z9Z%2FQ9z3t5SzzpgboIF1u3yI0FDknMu4fbc%2By8Oh3bYjl%2Fg06Wb%2FRLFXe96xU9Mh3sqtqccqMdXAGMly8X9Hxjv6Nhi%2FX%2BZNQ57RLBNMqOYPd5FDFroirNci6dOtN6TXXZDWXMI4%2FFc94zFFCLfJAe8fmlJvW1cN7EQ9KXtJjfMlUDMdYGRUEIC%2B6%2FE%2BFBeFQG2TPHV%2FCZ22hqQ9QsUGcIC6eg0M%2Fy%2F9Oh1GDNOPPbos3wgoEl4RCgvJ%2FPmY8WG4RJEFZcJRQtclC%2FZ7bsTYvsmIZCl%2BFSluqXYf%2F%2FAf6tcin%2B6ZRWOgC%2FhtgfoIPHjxgMEykVUJFKE9cQ1GNvukmL3Mv1meFd4hUok8%2BFK4gLlmpq%2BfQqNNPcBvUieCJovOY5YaqKOjAz76SsNw1qZvuTYpWhFYiuaAfPML6P%2Fr8GOqUBXsaB7iOvMtz7LhAoE4%2BV%2FCcZmBw7VV%2FN3N2zeZ0xc9AkvGA3HO6rupgO%2FPachOwXexVS8tFn3Yj3WZGXAB1sjwKZhOVyNYU4zctWnGat%2B%2Fa7nJu5mHTyzfAPCdnCi9UPzRYJx7MoWFvKNrcXt5Q%2BPXoGkYtS7x00QZoSUNSDdS2Qlgf%2BhqKo9kJzwbrFRtQurs77N9UgEGfMIOL0gDv0FkDjiuDJ&X-Amz-Signature=a56159e9a735a45f16a52d5a60e775fd5db0ef364dc38572ac607650a9a4d5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZYJODY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzR9Fd0a3HiXlD0KRprsieckHeSqDD28ASuGsCt1E73gIgLkPWpjeAtW9w03F9%2Bdz%2B9%2F%2FAcKjX4FlUbfYUuMif3JQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIskl2xkgiFiijDMwSrcA3prTgpIysTUq4Medff%2F%2B3wXvzR5baJy%2By9V%2FgfhHgQL6Q5DMFzGRpykbSo3MwmrC2YJ4xyVDQP2HhxzDu1JDA4JqxhBMpi7q%2BhZvZkPWK82zEwYo4qmIDu9O7XeW4CeaXllaRvE5tJn3RxhIpSAAtjg66IPIqtvRD%2FtXXPPZEOYpD2iciOB3R7VMDwJTcy5ik7IEGvhIorF3b3Ex%2BCrqXBpL7Z9Z%2FQ9z3t5SzzpgboIF1u3yI0FDknMu4fbc%2By8Oh3bYjl%2Fg06Wb%2FRLFXe96xU9Mh3sqtqccqMdXAGMly8X9Hxjv6Nhi%2FX%2BZNQ57RLBNMqOYPd5FDFroirNci6dOtN6TXXZDWXMI4%2FFc94zFFCLfJAe8fmlJvW1cN7EQ9KXtJjfMlUDMdYGRUEIC%2B6%2FE%2BFBeFQG2TPHV%2FCZ22hqQ9QsUGcIC6eg0M%2Fy%2F9Oh1GDNOPPbos3wgoEl4RCgvJ%2FPmY8WG4RJEFZcJRQtclC%2FZ7bsTYvsmIZCl%2BFSluqXYf%2F%2FAf6tcin%2B6ZRWOgC%2FhtgfoIPHjxgMEykVUJFKE9cQ1GNvukmL3Mv1meFd4hUok8%2BFK4gLlmpq%2BfQqNNPcBvUieCJovOY5YaqKOjAz76SsNw1qZvuTYpWhFYiuaAfPML6P%2Fr8GOqUBXsaB7iOvMtz7LhAoE4%2BV%2FCcZmBw7VV%2FN3N2zeZ0xc9AkvGA3HO6rupgO%2FPachOwXexVS8tFn3Yj3WZGXAB1sjwKZhOVyNYU4zctWnGat%2B%2Fa7nJu5mHTyzfAPCdnCi9UPzRYJx7MoWFvKNrcXt5Q%2BPXoGkYtS7x00QZoSUNSDdS2Qlgf%2BhqKo9kJzwbrFRtQurs77N9UgEGfMIOL0gDv0FkDjiuDJ&X-Amz-Signature=1f151f4c967004db95a354d046d1e38fba0edd7d14c7bd1ade9534569cd96150&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZYJODY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzR9Fd0a3HiXlD0KRprsieckHeSqDD28ASuGsCt1E73gIgLkPWpjeAtW9w03F9%2Bdz%2B9%2F%2FAcKjX4FlUbfYUuMif3JQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIskl2xkgiFiijDMwSrcA3prTgpIysTUq4Medff%2F%2B3wXvzR5baJy%2By9V%2FgfhHgQL6Q5DMFzGRpykbSo3MwmrC2YJ4xyVDQP2HhxzDu1JDA4JqxhBMpi7q%2BhZvZkPWK82zEwYo4qmIDu9O7XeW4CeaXllaRvE5tJn3RxhIpSAAtjg66IPIqtvRD%2FtXXPPZEOYpD2iciOB3R7VMDwJTcy5ik7IEGvhIorF3b3Ex%2BCrqXBpL7Z9Z%2FQ9z3t5SzzpgboIF1u3yI0FDknMu4fbc%2By8Oh3bYjl%2Fg06Wb%2FRLFXe96xU9Mh3sqtqccqMdXAGMly8X9Hxjv6Nhi%2FX%2BZNQ57RLBNMqOYPd5FDFroirNci6dOtN6TXXZDWXMI4%2FFc94zFFCLfJAe8fmlJvW1cN7EQ9KXtJjfMlUDMdYGRUEIC%2B6%2FE%2BFBeFQG2TPHV%2FCZ22hqQ9QsUGcIC6eg0M%2Fy%2F9Oh1GDNOPPbos3wgoEl4RCgvJ%2FPmY8WG4RJEFZcJRQtclC%2FZ7bsTYvsmIZCl%2BFSluqXYf%2F%2FAf6tcin%2B6ZRWOgC%2FhtgfoIPHjxgMEykVUJFKE9cQ1GNvukmL3Mv1meFd4hUok8%2BFK4gLlmpq%2BfQqNNPcBvUieCJovOY5YaqKOjAz76SsNw1qZvuTYpWhFYiuaAfPML6P%2Fr8GOqUBXsaB7iOvMtz7LhAoE4%2BV%2FCcZmBw7VV%2FN3N2zeZ0xc9AkvGA3HO6rupgO%2FPachOwXexVS8tFn3Yj3WZGXAB1sjwKZhOVyNYU4zctWnGat%2B%2Fa7nJu5mHTyzfAPCdnCi9UPzRYJx7MoWFvKNrcXt5Q%2BPXoGkYtS7x00QZoSUNSDdS2Qlgf%2BhqKo9kJzwbrFRtQurs77N9UgEGfMIOL0gDv0FkDjiuDJ&X-Amz-Signature=2cfa7ce36968d100a9907a987ce7e5f20f8f6fe1aeb45212defab85c73b14c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZYJODY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzR9Fd0a3HiXlD0KRprsieckHeSqDD28ASuGsCt1E73gIgLkPWpjeAtW9w03F9%2Bdz%2B9%2F%2FAcKjX4FlUbfYUuMif3JQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIskl2xkgiFiijDMwSrcA3prTgpIysTUq4Medff%2F%2B3wXvzR5baJy%2By9V%2FgfhHgQL6Q5DMFzGRpykbSo3MwmrC2YJ4xyVDQP2HhxzDu1JDA4JqxhBMpi7q%2BhZvZkPWK82zEwYo4qmIDu9O7XeW4CeaXllaRvE5tJn3RxhIpSAAtjg66IPIqtvRD%2FtXXPPZEOYpD2iciOB3R7VMDwJTcy5ik7IEGvhIorF3b3Ex%2BCrqXBpL7Z9Z%2FQ9z3t5SzzpgboIF1u3yI0FDknMu4fbc%2By8Oh3bYjl%2Fg06Wb%2FRLFXe96xU9Mh3sqtqccqMdXAGMly8X9Hxjv6Nhi%2FX%2BZNQ57RLBNMqOYPd5FDFroirNci6dOtN6TXXZDWXMI4%2FFc94zFFCLfJAe8fmlJvW1cN7EQ9KXtJjfMlUDMdYGRUEIC%2B6%2FE%2BFBeFQG2TPHV%2FCZ22hqQ9QsUGcIC6eg0M%2Fy%2F9Oh1GDNOPPbos3wgoEl4RCgvJ%2FPmY8WG4RJEFZcJRQtclC%2FZ7bsTYvsmIZCl%2BFSluqXYf%2F%2FAf6tcin%2B6ZRWOgC%2FhtgfoIPHjxgMEykVUJFKE9cQ1GNvukmL3Mv1meFd4hUok8%2BFK4gLlmpq%2BfQqNNPcBvUieCJovOY5YaqKOjAz76SsNw1qZvuTYpWhFYiuaAfPML6P%2Fr8GOqUBXsaB7iOvMtz7LhAoE4%2BV%2FCcZmBw7VV%2FN3N2zeZ0xc9AkvGA3HO6rupgO%2FPachOwXexVS8tFn3Yj3WZGXAB1sjwKZhOVyNYU4zctWnGat%2B%2Fa7nJu5mHTyzfAPCdnCi9UPzRYJx7MoWFvKNrcXt5Q%2BPXoGkYtS7x00QZoSUNSDdS2Qlgf%2BhqKo9kJzwbrFRtQurs77N9UgEGfMIOL0gDv0FkDjiuDJ&X-Amz-Signature=20e4d8242b07ad6376838e201c5c0ca8462677b798611b0f78e8a4e7a8d17618&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZYJODY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzR9Fd0a3HiXlD0KRprsieckHeSqDD28ASuGsCt1E73gIgLkPWpjeAtW9w03F9%2Bdz%2B9%2F%2FAcKjX4FlUbfYUuMif3JQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIskl2xkgiFiijDMwSrcA3prTgpIysTUq4Medff%2F%2B3wXvzR5baJy%2By9V%2FgfhHgQL6Q5DMFzGRpykbSo3MwmrC2YJ4xyVDQP2HhxzDu1JDA4JqxhBMpi7q%2BhZvZkPWK82zEwYo4qmIDu9O7XeW4CeaXllaRvE5tJn3RxhIpSAAtjg66IPIqtvRD%2FtXXPPZEOYpD2iciOB3R7VMDwJTcy5ik7IEGvhIorF3b3Ex%2BCrqXBpL7Z9Z%2FQ9z3t5SzzpgboIF1u3yI0FDknMu4fbc%2By8Oh3bYjl%2Fg06Wb%2FRLFXe96xU9Mh3sqtqccqMdXAGMly8X9Hxjv6Nhi%2FX%2BZNQ57RLBNMqOYPd5FDFroirNci6dOtN6TXXZDWXMI4%2FFc94zFFCLfJAe8fmlJvW1cN7EQ9KXtJjfMlUDMdYGRUEIC%2B6%2FE%2BFBeFQG2TPHV%2FCZ22hqQ9QsUGcIC6eg0M%2Fy%2F9Oh1GDNOPPbos3wgoEl4RCgvJ%2FPmY8WG4RJEFZcJRQtclC%2FZ7bsTYvsmIZCl%2BFSluqXYf%2F%2FAf6tcin%2B6ZRWOgC%2FhtgfoIPHjxgMEykVUJFKE9cQ1GNvukmL3Mv1meFd4hUok8%2BFK4gLlmpq%2BfQqNNPcBvUieCJovOY5YaqKOjAz76SsNw1qZvuTYpWhFYiuaAfPML6P%2Fr8GOqUBXsaB7iOvMtz7LhAoE4%2BV%2FCcZmBw7VV%2FN3N2zeZ0xc9AkvGA3HO6rupgO%2FPachOwXexVS8tFn3Yj3WZGXAB1sjwKZhOVyNYU4zctWnGat%2B%2Fa7nJu5mHTyzfAPCdnCi9UPzRYJx7MoWFvKNrcXt5Q%2BPXoGkYtS7x00QZoSUNSDdS2Qlgf%2BhqKo9kJzwbrFRtQurs77N9UgEGfMIOL0gDv0FkDjiuDJ&X-Amz-Signature=cf6faf68d5a779d8c97f452442cb10a166a39d77e32082096d38a7389d7062ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZYJODY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzR9Fd0a3HiXlD0KRprsieckHeSqDD28ASuGsCt1E73gIgLkPWpjeAtW9w03F9%2Bdz%2B9%2F%2FAcKjX4FlUbfYUuMif3JQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIskl2xkgiFiijDMwSrcA3prTgpIysTUq4Medff%2F%2B3wXvzR5baJy%2By9V%2FgfhHgQL6Q5DMFzGRpykbSo3MwmrC2YJ4xyVDQP2HhxzDu1JDA4JqxhBMpi7q%2BhZvZkPWK82zEwYo4qmIDu9O7XeW4CeaXllaRvE5tJn3RxhIpSAAtjg66IPIqtvRD%2FtXXPPZEOYpD2iciOB3R7VMDwJTcy5ik7IEGvhIorF3b3Ex%2BCrqXBpL7Z9Z%2FQ9z3t5SzzpgboIF1u3yI0FDknMu4fbc%2By8Oh3bYjl%2Fg06Wb%2FRLFXe96xU9Mh3sqtqccqMdXAGMly8X9Hxjv6Nhi%2FX%2BZNQ57RLBNMqOYPd5FDFroirNci6dOtN6TXXZDWXMI4%2FFc94zFFCLfJAe8fmlJvW1cN7EQ9KXtJjfMlUDMdYGRUEIC%2B6%2FE%2BFBeFQG2TPHV%2FCZ22hqQ9QsUGcIC6eg0M%2Fy%2F9Oh1GDNOPPbos3wgoEl4RCgvJ%2FPmY8WG4RJEFZcJRQtclC%2FZ7bsTYvsmIZCl%2BFSluqXYf%2F%2FAf6tcin%2B6ZRWOgC%2FhtgfoIPHjxgMEykVUJFKE9cQ1GNvukmL3Mv1meFd4hUok8%2BFK4gLlmpq%2BfQqNNPcBvUieCJovOY5YaqKOjAz76SsNw1qZvuTYpWhFYiuaAfPML6P%2Fr8GOqUBXsaB7iOvMtz7LhAoE4%2BV%2FCcZmBw7VV%2FN3N2zeZ0xc9AkvGA3HO6rupgO%2FPachOwXexVS8tFn3Yj3WZGXAB1sjwKZhOVyNYU4zctWnGat%2B%2Fa7nJu5mHTyzfAPCdnCi9UPzRYJx7MoWFvKNrcXt5Q%2BPXoGkYtS7x00QZoSUNSDdS2Qlgf%2BhqKo9kJzwbrFRtQurs77N9UgEGfMIOL0gDv0FkDjiuDJ&X-Amz-Signature=34b980188171273c796aa82596ee63b9abbf9ed8dddc45c9c7d3016905a8f9ac&X-Amz-SignedHeaders=host&x-id=GetObject)
