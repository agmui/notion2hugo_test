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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNT2TQC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBYFO3JI%2B1Ij1d4lI6EIVhT%2Fjraj%2FtjOzjhCbRvU4f4aAiEA%2B3cYpbh6cHAMFHUVOSllQsM%2FtO97Iq2fc5oRkS56vUMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP7avalaGF9Qo7LICrcA3RukSAaRW4jRnIFVT0RtmiqkS7PjnYRDhQp%2FMYrUiOgL%2FkIR1bpSE003gCFhwCxAtV6DbPJ0g1PI04WwDjEcpD6mg89ZbJWuaHL39aTyXZyfPNIgDfZ%2BLEJckzjmEVzx3k3Kb6c30W0bDM%2B29oFNW7U1BXTUQ1lzoxGcQUowa5IA%2BVoguKgBTXeUWzqfX0LU%2FLcZCpr%2Ftw%2Ft3PhwlNgCRWLJ6xd1U5ErQv%2B9R03AjBhxTjQmgMwtXOVAF9mYBxdG8sD5WCvv41n1r7BSrlP5Tw3X5q1OLy9X0YnaSbF348t%2FsVQxnurk9A1xDP%2B%2BS6FBv7%2F%2BInzSOD8kn8HFbeKMP8J0NBoUDdpYtN9Xw632UTYbnDqe8lIaRybIiZpr%2F53xD988I40loPR6PWwsqSVgtOlR%2F%2Buyj31Qc7oWdaKo%2FZWyj4yLDNeOJAD4wFaJGfoomLgSXN6pPOTdUw%2B9kaZoowg4S%2FS6c%2FZUfPSfUbxoLEgQMYWm%2BKNy6qr0zgYpBskmyKCUpvrHr908lnqOZyihdfS7jTLiJWJh9sHDLj3%2FW6FL%2B28r4VWfx5S1GPlYPhflCYvI3SOyhDZJ16giwm8zWb9%2BVFMNew6VD%2FLDKHiDpLtCzB8OvkxW0mE3HZdML%2Bhy8AGOqUBhQL2yachY2Tnj0JV5WidwJQ7Y%2Fe4reXqDQzY7RT8qxnIgAbidk28r9crKcYdjj3ZFTfRQzEbCOt6N794tBEdDpngccmzET6y3yhzQv4s594ZVGjx%2FaotXN1SuzeT7tt0Q20X1fqQ%2F%2FOIzy%2Fy%2BTVwTfo9Hxu%2BB4AibVrWlcrkVJbsob2rY0pMr6WjVDOeDffLXlIhr5IRIv96UFYvIR5%2B7yOno67n&X-Amz-Signature=d002f8d831cd009de4e6d23d0d2a646d852b76986f451862c8adc2e036ed49db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNT2TQC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBYFO3JI%2B1Ij1d4lI6EIVhT%2Fjraj%2FtjOzjhCbRvU4f4aAiEA%2B3cYpbh6cHAMFHUVOSllQsM%2FtO97Iq2fc5oRkS56vUMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP7avalaGF9Qo7LICrcA3RukSAaRW4jRnIFVT0RtmiqkS7PjnYRDhQp%2FMYrUiOgL%2FkIR1bpSE003gCFhwCxAtV6DbPJ0g1PI04WwDjEcpD6mg89ZbJWuaHL39aTyXZyfPNIgDfZ%2BLEJckzjmEVzx3k3Kb6c30W0bDM%2B29oFNW7U1BXTUQ1lzoxGcQUowa5IA%2BVoguKgBTXeUWzqfX0LU%2FLcZCpr%2Ftw%2Ft3PhwlNgCRWLJ6xd1U5ErQv%2B9R03AjBhxTjQmgMwtXOVAF9mYBxdG8sD5WCvv41n1r7BSrlP5Tw3X5q1OLy9X0YnaSbF348t%2FsVQxnurk9A1xDP%2B%2BS6FBv7%2F%2BInzSOD8kn8HFbeKMP8J0NBoUDdpYtN9Xw632UTYbnDqe8lIaRybIiZpr%2F53xD988I40loPR6PWwsqSVgtOlR%2F%2Buyj31Qc7oWdaKo%2FZWyj4yLDNeOJAD4wFaJGfoomLgSXN6pPOTdUw%2B9kaZoowg4S%2FS6c%2FZUfPSfUbxoLEgQMYWm%2BKNy6qr0zgYpBskmyKCUpvrHr908lnqOZyihdfS7jTLiJWJh9sHDLj3%2FW6FL%2B28r4VWfx5S1GPlYPhflCYvI3SOyhDZJ16giwm8zWb9%2BVFMNew6VD%2FLDKHiDpLtCzB8OvkxW0mE3HZdML%2Bhy8AGOqUBhQL2yachY2Tnj0JV5WidwJQ7Y%2Fe4reXqDQzY7RT8qxnIgAbidk28r9crKcYdjj3ZFTfRQzEbCOt6N794tBEdDpngccmzET6y3yhzQv4s594ZVGjx%2FaotXN1SuzeT7tt0Q20X1fqQ%2F%2FOIzy%2Fy%2BTVwTfo9Hxu%2BB4AibVrWlcrkVJbsob2rY0pMr6WjVDOeDffLXlIhr5IRIv96UFYvIR5%2B7yOno67n&X-Amz-Signature=a5c44b26ab53d7afa3ecaee5ff73021321914a5e60f02234f5f6c229de71f20b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNT2TQC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBYFO3JI%2B1Ij1d4lI6EIVhT%2Fjraj%2FtjOzjhCbRvU4f4aAiEA%2B3cYpbh6cHAMFHUVOSllQsM%2FtO97Iq2fc5oRkS56vUMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP7avalaGF9Qo7LICrcA3RukSAaRW4jRnIFVT0RtmiqkS7PjnYRDhQp%2FMYrUiOgL%2FkIR1bpSE003gCFhwCxAtV6DbPJ0g1PI04WwDjEcpD6mg89ZbJWuaHL39aTyXZyfPNIgDfZ%2BLEJckzjmEVzx3k3Kb6c30W0bDM%2B29oFNW7U1BXTUQ1lzoxGcQUowa5IA%2BVoguKgBTXeUWzqfX0LU%2FLcZCpr%2Ftw%2Ft3PhwlNgCRWLJ6xd1U5ErQv%2B9R03AjBhxTjQmgMwtXOVAF9mYBxdG8sD5WCvv41n1r7BSrlP5Tw3X5q1OLy9X0YnaSbF348t%2FsVQxnurk9A1xDP%2B%2BS6FBv7%2F%2BInzSOD8kn8HFbeKMP8J0NBoUDdpYtN9Xw632UTYbnDqe8lIaRybIiZpr%2F53xD988I40loPR6PWwsqSVgtOlR%2F%2Buyj31Qc7oWdaKo%2FZWyj4yLDNeOJAD4wFaJGfoomLgSXN6pPOTdUw%2B9kaZoowg4S%2FS6c%2FZUfPSfUbxoLEgQMYWm%2BKNy6qr0zgYpBskmyKCUpvrHr908lnqOZyihdfS7jTLiJWJh9sHDLj3%2FW6FL%2B28r4VWfx5S1GPlYPhflCYvI3SOyhDZJ16giwm8zWb9%2BVFMNew6VD%2FLDKHiDpLtCzB8OvkxW0mE3HZdML%2Bhy8AGOqUBhQL2yachY2Tnj0JV5WidwJQ7Y%2Fe4reXqDQzY7RT8qxnIgAbidk28r9crKcYdjj3ZFTfRQzEbCOt6N794tBEdDpngccmzET6y3yhzQv4s594ZVGjx%2FaotXN1SuzeT7tt0Q20X1fqQ%2F%2FOIzy%2Fy%2BTVwTfo9Hxu%2BB4AibVrWlcrkVJbsob2rY0pMr6WjVDOeDffLXlIhr5IRIv96UFYvIR5%2B7yOno67n&X-Amz-Signature=2eb3a47ea840fb194775ade776afedf1dbad924f1120d4580022efc9c52fc0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNT2TQC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBYFO3JI%2B1Ij1d4lI6EIVhT%2Fjraj%2FtjOzjhCbRvU4f4aAiEA%2B3cYpbh6cHAMFHUVOSllQsM%2FtO97Iq2fc5oRkS56vUMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP7avalaGF9Qo7LICrcA3RukSAaRW4jRnIFVT0RtmiqkS7PjnYRDhQp%2FMYrUiOgL%2FkIR1bpSE003gCFhwCxAtV6DbPJ0g1PI04WwDjEcpD6mg89ZbJWuaHL39aTyXZyfPNIgDfZ%2BLEJckzjmEVzx3k3Kb6c30W0bDM%2B29oFNW7U1BXTUQ1lzoxGcQUowa5IA%2BVoguKgBTXeUWzqfX0LU%2FLcZCpr%2Ftw%2Ft3PhwlNgCRWLJ6xd1U5ErQv%2B9R03AjBhxTjQmgMwtXOVAF9mYBxdG8sD5WCvv41n1r7BSrlP5Tw3X5q1OLy9X0YnaSbF348t%2FsVQxnurk9A1xDP%2B%2BS6FBv7%2F%2BInzSOD8kn8HFbeKMP8J0NBoUDdpYtN9Xw632UTYbnDqe8lIaRybIiZpr%2F53xD988I40loPR6PWwsqSVgtOlR%2F%2Buyj31Qc7oWdaKo%2FZWyj4yLDNeOJAD4wFaJGfoomLgSXN6pPOTdUw%2B9kaZoowg4S%2FS6c%2FZUfPSfUbxoLEgQMYWm%2BKNy6qr0zgYpBskmyKCUpvrHr908lnqOZyihdfS7jTLiJWJh9sHDLj3%2FW6FL%2B28r4VWfx5S1GPlYPhflCYvI3SOyhDZJ16giwm8zWb9%2BVFMNew6VD%2FLDKHiDpLtCzB8OvkxW0mE3HZdML%2Bhy8AGOqUBhQL2yachY2Tnj0JV5WidwJQ7Y%2Fe4reXqDQzY7RT8qxnIgAbidk28r9crKcYdjj3ZFTfRQzEbCOt6N794tBEdDpngccmzET6y3yhzQv4s594ZVGjx%2FaotXN1SuzeT7tt0Q20X1fqQ%2F%2FOIzy%2Fy%2BTVwTfo9Hxu%2BB4AibVrWlcrkVJbsob2rY0pMr6WjVDOeDffLXlIhr5IRIv96UFYvIR5%2B7yOno67n&X-Amz-Signature=5819d00e963e83fe53a01b37a2dc15994c082d37e6378994a2e390bbe6539baf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNT2TQC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBYFO3JI%2B1Ij1d4lI6EIVhT%2Fjraj%2FtjOzjhCbRvU4f4aAiEA%2B3cYpbh6cHAMFHUVOSllQsM%2FtO97Iq2fc5oRkS56vUMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP7avalaGF9Qo7LICrcA3RukSAaRW4jRnIFVT0RtmiqkS7PjnYRDhQp%2FMYrUiOgL%2FkIR1bpSE003gCFhwCxAtV6DbPJ0g1PI04WwDjEcpD6mg89ZbJWuaHL39aTyXZyfPNIgDfZ%2BLEJckzjmEVzx3k3Kb6c30W0bDM%2B29oFNW7U1BXTUQ1lzoxGcQUowa5IA%2BVoguKgBTXeUWzqfX0LU%2FLcZCpr%2Ftw%2Ft3PhwlNgCRWLJ6xd1U5ErQv%2B9R03AjBhxTjQmgMwtXOVAF9mYBxdG8sD5WCvv41n1r7BSrlP5Tw3X5q1OLy9X0YnaSbF348t%2FsVQxnurk9A1xDP%2B%2BS6FBv7%2F%2BInzSOD8kn8HFbeKMP8J0NBoUDdpYtN9Xw632UTYbnDqe8lIaRybIiZpr%2F53xD988I40loPR6PWwsqSVgtOlR%2F%2Buyj31Qc7oWdaKo%2FZWyj4yLDNeOJAD4wFaJGfoomLgSXN6pPOTdUw%2B9kaZoowg4S%2FS6c%2FZUfPSfUbxoLEgQMYWm%2BKNy6qr0zgYpBskmyKCUpvrHr908lnqOZyihdfS7jTLiJWJh9sHDLj3%2FW6FL%2B28r4VWfx5S1GPlYPhflCYvI3SOyhDZJ16giwm8zWb9%2BVFMNew6VD%2FLDKHiDpLtCzB8OvkxW0mE3HZdML%2Bhy8AGOqUBhQL2yachY2Tnj0JV5WidwJQ7Y%2Fe4reXqDQzY7RT8qxnIgAbidk28r9crKcYdjj3ZFTfRQzEbCOt6N794tBEdDpngccmzET6y3yhzQv4s594ZVGjx%2FaotXN1SuzeT7tt0Q20X1fqQ%2F%2FOIzy%2Fy%2BTVwTfo9Hxu%2BB4AibVrWlcrkVJbsob2rY0pMr6WjVDOeDffLXlIhr5IRIv96UFYvIR5%2B7yOno67n&X-Amz-Signature=d6112e7d670c2367745ea7b3ffdc0df4c860d17329ccac6a363a6db42155e858&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JNT2TQC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBYFO3JI%2B1Ij1d4lI6EIVhT%2Fjraj%2FtjOzjhCbRvU4f4aAiEA%2B3cYpbh6cHAMFHUVOSllQsM%2FtO97Iq2fc5oRkS56vUMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP7avalaGF9Qo7LICrcA3RukSAaRW4jRnIFVT0RtmiqkS7PjnYRDhQp%2FMYrUiOgL%2FkIR1bpSE003gCFhwCxAtV6DbPJ0g1PI04WwDjEcpD6mg89ZbJWuaHL39aTyXZyfPNIgDfZ%2BLEJckzjmEVzx3k3Kb6c30W0bDM%2B29oFNW7U1BXTUQ1lzoxGcQUowa5IA%2BVoguKgBTXeUWzqfX0LU%2FLcZCpr%2Ftw%2Ft3PhwlNgCRWLJ6xd1U5ErQv%2B9R03AjBhxTjQmgMwtXOVAF9mYBxdG8sD5WCvv41n1r7BSrlP5Tw3X5q1OLy9X0YnaSbF348t%2FsVQxnurk9A1xDP%2B%2BS6FBv7%2F%2BInzSOD8kn8HFbeKMP8J0NBoUDdpYtN9Xw632UTYbnDqe8lIaRybIiZpr%2F53xD988I40loPR6PWwsqSVgtOlR%2F%2Buyj31Qc7oWdaKo%2FZWyj4yLDNeOJAD4wFaJGfoomLgSXN6pPOTdUw%2B9kaZoowg4S%2FS6c%2FZUfPSfUbxoLEgQMYWm%2BKNy6qr0zgYpBskmyKCUpvrHr908lnqOZyihdfS7jTLiJWJh9sHDLj3%2FW6FL%2B28r4VWfx5S1GPlYPhflCYvI3SOyhDZJ16giwm8zWb9%2BVFMNew6VD%2FLDKHiDpLtCzB8OvkxW0mE3HZdML%2Bhy8AGOqUBhQL2yachY2Tnj0JV5WidwJQ7Y%2Fe4reXqDQzY7RT8qxnIgAbidk28r9crKcYdjj3ZFTfRQzEbCOt6N794tBEdDpngccmzET6y3yhzQv4s594ZVGjx%2FaotXN1SuzeT7tt0Q20X1fqQ%2F%2FOIzy%2Fy%2BTVwTfo9Hxu%2BB4AibVrWlcrkVJbsob2rY0pMr6WjVDOeDffLXlIhr5IRIv96UFYvIR5%2B7yOno67n&X-Amz-Signature=35cec146ff9145b558812ec734e7fadb3d4132305f7758844d666e71eeb7640c&X-Amz-SignedHeaders=host&x-id=GetObject)
