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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FIJERE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuH%2FZjx5DmZ7ZBddVG%2BGYVYsEJM0S79HXISKgHvbfPRQIhAMbKGm7zlSpYA8hjqQkmsoGGx866xdFkCovItPDstx1kKv8DCGYQABoMNjM3NDIzMTgzODA1Igwr76GtNJIvyltlduQq3AO9RBqlQqFlWe7Ujg094r7h9iVUE%2FlWMe1Aexzq8ATV4Bg6vURcGStpJBLYEYF3dzvjbLXsIpqWpf%2FoY3QN8XM8YV26GO6x097wUXEJEbsZSRbR2I1yY38Oi6dyUK5tPLbpSsYJoC2JMZdEeIucvxNz5ILhMJISsD9YLINB7aiG1Vd6r61Zb%2B724DP%2BuQNmdOyQ9OMzTLdKiigG1Csi7ZwLZXZW5mSGH6K87OgcFutn%2FBwAtvgWnwOF73XjBZBrVYP7o7p1hEyHsga9D0vmPLoYVQdv0jZ%2BLC2BdQYzHTByyU1nyFZT%2FgoK%2FQ8VUHpP2ETF%2BMZX0BKuodPK1CzFcPHEJoubgDpQHTq4JONHa37QgXJqUw8qE4m38wedmnR8UIRE5TkAUS7QMBc0Yq1U1qHrkgEiDjwZNIaWy%2Bi0EdbgY6Vzosdakzr8ll1RV%2B8pjjPvFODmxe05FLXdJzGYS2RQ2eyjfNZdQwx9ouj%2F7bg4OgTve5wMnJYVWYCbwWS8YcN7otKg8GkLImY3bph%2FVPvINBXvlbgKH2LC4EaOPYIQ9TwgB%2B7GAnG3MPycjjX%2F%2BmzIMr%2B3NBZCtODQBwCTXvW2miTMT6ATDsIQYwGr0pYvk88wTE9Es5UniStbRDD%2F8qPBBjqkAZJAJs5Mbh7ynB8dh6ylVTa0ztK%2Fa5P8qIUdQc839NwRjDUw41J9c20%2BfZoVdbInQXcc4a6hxr%2Fx38%2FPuQAHVQso3hWM7st%2BwnO7rngrAXSpiiIyFcb7024kJhwngNgRogaLE7DQGoDrl0ARRUC0uS7sJAOnKRY4qfZOCnQXPlz4Y4JERGZ9NN6X1Fq364sA6Xg5L3CW6mwjYuTf31TIMD8h9TaO&X-Amz-Signature=7fca68989a70f201ba9def1fad5e0c330b1893b30a0df73e39797e528986beff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FIJERE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuH%2FZjx5DmZ7ZBddVG%2BGYVYsEJM0S79HXISKgHvbfPRQIhAMbKGm7zlSpYA8hjqQkmsoGGx866xdFkCovItPDstx1kKv8DCGYQABoMNjM3NDIzMTgzODA1Igwr76GtNJIvyltlduQq3AO9RBqlQqFlWe7Ujg094r7h9iVUE%2FlWMe1Aexzq8ATV4Bg6vURcGStpJBLYEYF3dzvjbLXsIpqWpf%2FoY3QN8XM8YV26GO6x097wUXEJEbsZSRbR2I1yY38Oi6dyUK5tPLbpSsYJoC2JMZdEeIucvxNz5ILhMJISsD9YLINB7aiG1Vd6r61Zb%2B724DP%2BuQNmdOyQ9OMzTLdKiigG1Csi7ZwLZXZW5mSGH6K87OgcFutn%2FBwAtvgWnwOF73XjBZBrVYP7o7p1hEyHsga9D0vmPLoYVQdv0jZ%2BLC2BdQYzHTByyU1nyFZT%2FgoK%2FQ8VUHpP2ETF%2BMZX0BKuodPK1CzFcPHEJoubgDpQHTq4JONHa37QgXJqUw8qE4m38wedmnR8UIRE5TkAUS7QMBc0Yq1U1qHrkgEiDjwZNIaWy%2Bi0EdbgY6Vzosdakzr8ll1RV%2B8pjjPvFODmxe05FLXdJzGYS2RQ2eyjfNZdQwx9ouj%2F7bg4OgTve5wMnJYVWYCbwWS8YcN7otKg8GkLImY3bph%2FVPvINBXvlbgKH2LC4EaOPYIQ9TwgB%2B7GAnG3MPycjjX%2F%2BmzIMr%2B3NBZCtODQBwCTXvW2miTMT6ATDsIQYwGr0pYvk88wTE9Es5UniStbRDD%2F8qPBBjqkAZJAJs5Mbh7ynB8dh6ylVTa0ztK%2Fa5P8qIUdQc839NwRjDUw41J9c20%2BfZoVdbInQXcc4a6hxr%2Fx38%2FPuQAHVQso3hWM7st%2BwnO7rngrAXSpiiIyFcb7024kJhwngNgRogaLE7DQGoDrl0ARRUC0uS7sJAOnKRY4qfZOCnQXPlz4Y4JERGZ9NN6X1Fq364sA6Xg5L3CW6mwjYuTf31TIMD8h9TaO&X-Amz-Signature=1860c6e77887b25eebb44940f5d85ff2df569059b60202e42f129a8445530b44&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FIJERE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuH%2FZjx5DmZ7ZBddVG%2BGYVYsEJM0S79HXISKgHvbfPRQIhAMbKGm7zlSpYA8hjqQkmsoGGx866xdFkCovItPDstx1kKv8DCGYQABoMNjM3NDIzMTgzODA1Igwr76GtNJIvyltlduQq3AO9RBqlQqFlWe7Ujg094r7h9iVUE%2FlWMe1Aexzq8ATV4Bg6vURcGStpJBLYEYF3dzvjbLXsIpqWpf%2FoY3QN8XM8YV26GO6x097wUXEJEbsZSRbR2I1yY38Oi6dyUK5tPLbpSsYJoC2JMZdEeIucvxNz5ILhMJISsD9YLINB7aiG1Vd6r61Zb%2B724DP%2BuQNmdOyQ9OMzTLdKiigG1Csi7ZwLZXZW5mSGH6K87OgcFutn%2FBwAtvgWnwOF73XjBZBrVYP7o7p1hEyHsga9D0vmPLoYVQdv0jZ%2BLC2BdQYzHTByyU1nyFZT%2FgoK%2FQ8VUHpP2ETF%2BMZX0BKuodPK1CzFcPHEJoubgDpQHTq4JONHa37QgXJqUw8qE4m38wedmnR8UIRE5TkAUS7QMBc0Yq1U1qHrkgEiDjwZNIaWy%2Bi0EdbgY6Vzosdakzr8ll1RV%2B8pjjPvFODmxe05FLXdJzGYS2RQ2eyjfNZdQwx9ouj%2F7bg4OgTve5wMnJYVWYCbwWS8YcN7otKg8GkLImY3bph%2FVPvINBXvlbgKH2LC4EaOPYIQ9TwgB%2B7GAnG3MPycjjX%2F%2BmzIMr%2B3NBZCtODQBwCTXvW2miTMT6ATDsIQYwGr0pYvk88wTE9Es5UniStbRDD%2F8qPBBjqkAZJAJs5Mbh7ynB8dh6ylVTa0ztK%2Fa5P8qIUdQc839NwRjDUw41J9c20%2BfZoVdbInQXcc4a6hxr%2Fx38%2FPuQAHVQso3hWM7st%2BwnO7rngrAXSpiiIyFcb7024kJhwngNgRogaLE7DQGoDrl0ARRUC0uS7sJAOnKRY4qfZOCnQXPlz4Y4JERGZ9NN6X1Fq364sA6Xg5L3CW6mwjYuTf31TIMD8h9TaO&X-Amz-Signature=80e37898ef3f9b2c42a3097add0d36dc622dc5c59b9aa024df8fa2985a766ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FIJERE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuH%2FZjx5DmZ7ZBddVG%2BGYVYsEJM0S79HXISKgHvbfPRQIhAMbKGm7zlSpYA8hjqQkmsoGGx866xdFkCovItPDstx1kKv8DCGYQABoMNjM3NDIzMTgzODA1Igwr76GtNJIvyltlduQq3AO9RBqlQqFlWe7Ujg094r7h9iVUE%2FlWMe1Aexzq8ATV4Bg6vURcGStpJBLYEYF3dzvjbLXsIpqWpf%2FoY3QN8XM8YV26GO6x097wUXEJEbsZSRbR2I1yY38Oi6dyUK5tPLbpSsYJoC2JMZdEeIucvxNz5ILhMJISsD9YLINB7aiG1Vd6r61Zb%2B724DP%2BuQNmdOyQ9OMzTLdKiigG1Csi7ZwLZXZW5mSGH6K87OgcFutn%2FBwAtvgWnwOF73XjBZBrVYP7o7p1hEyHsga9D0vmPLoYVQdv0jZ%2BLC2BdQYzHTByyU1nyFZT%2FgoK%2FQ8VUHpP2ETF%2BMZX0BKuodPK1CzFcPHEJoubgDpQHTq4JONHa37QgXJqUw8qE4m38wedmnR8UIRE5TkAUS7QMBc0Yq1U1qHrkgEiDjwZNIaWy%2Bi0EdbgY6Vzosdakzr8ll1RV%2B8pjjPvFODmxe05FLXdJzGYS2RQ2eyjfNZdQwx9ouj%2F7bg4OgTve5wMnJYVWYCbwWS8YcN7otKg8GkLImY3bph%2FVPvINBXvlbgKH2LC4EaOPYIQ9TwgB%2B7GAnG3MPycjjX%2F%2BmzIMr%2B3NBZCtODQBwCTXvW2miTMT6ATDsIQYwGr0pYvk88wTE9Es5UniStbRDD%2F8qPBBjqkAZJAJs5Mbh7ynB8dh6ylVTa0ztK%2Fa5P8qIUdQc839NwRjDUw41J9c20%2BfZoVdbInQXcc4a6hxr%2Fx38%2FPuQAHVQso3hWM7st%2BwnO7rngrAXSpiiIyFcb7024kJhwngNgRogaLE7DQGoDrl0ARRUC0uS7sJAOnKRY4qfZOCnQXPlz4Y4JERGZ9NN6X1Fq364sA6Xg5L3CW6mwjYuTf31TIMD8h9TaO&X-Amz-Signature=bf830c1883c0a1aa1820603276f132868e0cfed743390ab4e46cdb868481db21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FIJERE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuH%2FZjx5DmZ7ZBddVG%2BGYVYsEJM0S79HXISKgHvbfPRQIhAMbKGm7zlSpYA8hjqQkmsoGGx866xdFkCovItPDstx1kKv8DCGYQABoMNjM3NDIzMTgzODA1Igwr76GtNJIvyltlduQq3AO9RBqlQqFlWe7Ujg094r7h9iVUE%2FlWMe1Aexzq8ATV4Bg6vURcGStpJBLYEYF3dzvjbLXsIpqWpf%2FoY3QN8XM8YV26GO6x097wUXEJEbsZSRbR2I1yY38Oi6dyUK5tPLbpSsYJoC2JMZdEeIucvxNz5ILhMJISsD9YLINB7aiG1Vd6r61Zb%2B724DP%2BuQNmdOyQ9OMzTLdKiigG1Csi7ZwLZXZW5mSGH6K87OgcFutn%2FBwAtvgWnwOF73XjBZBrVYP7o7p1hEyHsga9D0vmPLoYVQdv0jZ%2BLC2BdQYzHTByyU1nyFZT%2FgoK%2FQ8VUHpP2ETF%2BMZX0BKuodPK1CzFcPHEJoubgDpQHTq4JONHa37QgXJqUw8qE4m38wedmnR8UIRE5TkAUS7QMBc0Yq1U1qHrkgEiDjwZNIaWy%2Bi0EdbgY6Vzosdakzr8ll1RV%2B8pjjPvFODmxe05FLXdJzGYS2RQ2eyjfNZdQwx9ouj%2F7bg4OgTve5wMnJYVWYCbwWS8YcN7otKg8GkLImY3bph%2FVPvINBXvlbgKH2LC4EaOPYIQ9TwgB%2B7GAnG3MPycjjX%2F%2BmzIMr%2B3NBZCtODQBwCTXvW2miTMT6ATDsIQYwGr0pYvk88wTE9Es5UniStbRDD%2F8qPBBjqkAZJAJs5Mbh7ynB8dh6ylVTa0ztK%2Fa5P8qIUdQc839NwRjDUw41J9c20%2BfZoVdbInQXcc4a6hxr%2Fx38%2FPuQAHVQso3hWM7st%2BwnO7rngrAXSpiiIyFcb7024kJhwngNgRogaLE7DQGoDrl0ARRUC0uS7sJAOnKRY4qfZOCnQXPlz4Y4JERGZ9NN6X1Fq364sA6Xg5L3CW6mwjYuTf31TIMD8h9TaO&X-Amz-Signature=4d641140375c1fb22d3f3a3c5d9bc2c388f9224f115c9dbc1b17abea5efd9bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3FIJERE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuH%2FZjx5DmZ7ZBddVG%2BGYVYsEJM0S79HXISKgHvbfPRQIhAMbKGm7zlSpYA8hjqQkmsoGGx866xdFkCovItPDstx1kKv8DCGYQABoMNjM3NDIzMTgzODA1Igwr76GtNJIvyltlduQq3AO9RBqlQqFlWe7Ujg094r7h9iVUE%2FlWMe1Aexzq8ATV4Bg6vURcGStpJBLYEYF3dzvjbLXsIpqWpf%2FoY3QN8XM8YV26GO6x097wUXEJEbsZSRbR2I1yY38Oi6dyUK5tPLbpSsYJoC2JMZdEeIucvxNz5ILhMJISsD9YLINB7aiG1Vd6r61Zb%2B724DP%2BuQNmdOyQ9OMzTLdKiigG1Csi7ZwLZXZW5mSGH6K87OgcFutn%2FBwAtvgWnwOF73XjBZBrVYP7o7p1hEyHsga9D0vmPLoYVQdv0jZ%2BLC2BdQYzHTByyU1nyFZT%2FgoK%2FQ8VUHpP2ETF%2BMZX0BKuodPK1CzFcPHEJoubgDpQHTq4JONHa37QgXJqUw8qE4m38wedmnR8UIRE5TkAUS7QMBc0Yq1U1qHrkgEiDjwZNIaWy%2Bi0EdbgY6Vzosdakzr8ll1RV%2B8pjjPvFODmxe05FLXdJzGYS2RQ2eyjfNZdQwx9ouj%2F7bg4OgTve5wMnJYVWYCbwWS8YcN7otKg8GkLImY3bph%2FVPvINBXvlbgKH2LC4EaOPYIQ9TwgB%2B7GAnG3MPycjjX%2F%2BmzIMr%2B3NBZCtODQBwCTXvW2miTMT6ATDsIQYwGr0pYvk88wTE9Es5UniStbRDD%2F8qPBBjqkAZJAJs5Mbh7ynB8dh6ylVTa0ztK%2Fa5P8qIUdQc839NwRjDUw41J9c20%2BfZoVdbInQXcc4a6hxr%2Fx38%2FPuQAHVQso3hWM7st%2BwnO7rngrAXSpiiIyFcb7024kJhwngNgRogaLE7DQGoDrl0ARRUC0uS7sJAOnKRY4qfZOCnQXPlz4Y4JERGZ9NN6X1Fq364sA6Xg5L3CW6mwjYuTf31TIMD8h9TaO&X-Amz-Signature=148ac6163b9ac4a89e0280fcd7e1a8fd2a7e1927a049ff7adb71a5e506ae0100&X-Amz-SignedHeaders=host&x-id=GetObject)
