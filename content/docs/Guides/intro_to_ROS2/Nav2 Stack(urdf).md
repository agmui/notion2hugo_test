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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCZX6CO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH6oHsbwBww2zVfG8VbRZ5xT%2FgAlTVlYl%2FpGBwqs8YRhAiA3HyV6f1B%2FW4M8duio8fpZL1yQe0G7PAJsVen8hJ9lZir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKl8kcP9zTjdO2fN9KtwD3zxhxKlQVfgDYSEiMf1oc04mHfvr9TOy%2BY8ZZjbyNUdwxjAjda3jbDJ4s61sqnTNWKgxJ4P3feyyvK1FIUHci1AKOFjWppsYg9UWjA%2FqyaR%2FZmSs93D%2B%2BHegVyASdPhIcTamgTZYMGXlmCegh4%2FnSE9RKYmypKIhzTeaHx4N1%2Feihfx2OhKQvNq%2B2YZDBVHdgFfjvvH3TmgMfJ1PRFIitTbb9CNvZ53%2B9oBR%2BbvPJxmKDsWawUG9bBvOhHk32YIeHgNMtJwanq1YkFuKtelypjbdYsrY64K03gma2klv1e%2FqKcK7qJKCQnwOMyR7hlHYU3ClgCHiFEmuSbOJCIB%2BMx%2FtMyE%2Fl9aXWNtntly9DkYzNWqjGX4Q%2BsXaea9GPuACSL8XNfYjtEwrShkjcK%2Bin7ZS8VJdsy93KwP82U3Q4kibO%2BKGYSzylp9jNwIZwfocGXwEB%2FQvBcSA76dIyPBQko9WDu%2B50jMrlBqDvrNmYuON1UNMiMqiGCUFUORIud0dfjroRKIv15NudD%2BdRsQTV09lWhsYqoOQPPPEKVaPo3PC1iK0Vfv6zgJ71dDjiMO4QdoB9ps%2BwJzxyo8n1GMMft59fWmuHq8euXGJtaElfWboRdXJjDSUN3uzaIYwqJbIwQY6pgFv%2BWu7hpMvDew1hyzzMX9NiyaqAMab7jtSyJxjgLP3reZ2J9rICUFIrAC0cqobBD%2BlS1fUuarn3FQGxeQJ4xooGVJyQdUxphLkC9ISpIN1TXrL74GrFmNPhUGOx9oE6n%2FMdHdqZCcxQHJMd%2F6iWXeQ5Aujb8SZSJwKQEUtPvfFMOxXt1xybmvEdqiSo%2B1T%2F%2Bz0NCyWvi43qV3JWEH8B4v3XFxSSyXQ&X-Amz-Signature=9dd83c15f1713dbf89f178a4abc9b7d312691168c5286ebea954254a918c3ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCZX6CO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH6oHsbwBww2zVfG8VbRZ5xT%2FgAlTVlYl%2FpGBwqs8YRhAiA3HyV6f1B%2FW4M8duio8fpZL1yQe0G7PAJsVen8hJ9lZir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKl8kcP9zTjdO2fN9KtwD3zxhxKlQVfgDYSEiMf1oc04mHfvr9TOy%2BY8ZZjbyNUdwxjAjda3jbDJ4s61sqnTNWKgxJ4P3feyyvK1FIUHci1AKOFjWppsYg9UWjA%2FqyaR%2FZmSs93D%2B%2BHegVyASdPhIcTamgTZYMGXlmCegh4%2FnSE9RKYmypKIhzTeaHx4N1%2Feihfx2OhKQvNq%2B2YZDBVHdgFfjvvH3TmgMfJ1PRFIitTbb9CNvZ53%2B9oBR%2BbvPJxmKDsWawUG9bBvOhHk32YIeHgNMtJwanq1YkFuKtelypjbdYsrY64K03gma2klv1e%2FqKcK7qJKCQnwOMyR7hlHYU3ClgCHiFEmuSbOJCIB%2BMx%2FtMyE%2Fl9aXWNtntly9DkYzNWqjGX4Q%2BsXaea9GPuACSL8XNfYjtEwrShkjcK%2Bin7ZS8VJdsy93KwP82U3Q4kibO%2BKGYSzylp9jNwIZwfocGXwEB%2FQvBcSA76dIyPBQko9WDu%2B50jMrlBqDvrNmYuON1UNMiMqiGCUFUORIud0dfjroRKIv15NudD%2BdRsQTV09lWhsYqoOQPPPEKVaPo3PC1iK0Vfv6zgJ71dDjiMO4QdoB9ps%2BwJzxyo8n1GMMft59fWmuHq8euXGJtaElfWboRdXJjDSUN3uzaIYwqJbIwQY6pgFv%2BWu7hpMvDew1hyzzMX9NiyaqAMab7jtSyJxjgLP3reZ2J9rICUFIrAC0cqobBD%2BlS1fUuarn3FQGxeQJ4xooGVJyQdUxphLkC9ISpIN1TXrL74GrFmNPhUGOx9oE6n%2FMdHdqZCcxQHJMd%2F6iWXeQ5Aujb8SZSJwKQEUtPvfFMOxXt1xybmvEdqiSo%2B1T%2F%2Bz0NCyWvi43qV3JWEH8B4v3XFxSSyXQ&X-Amz-Signature=878ee5cf7c54384d6e9c39aad15a43812bbc6a5004caa0d341a8d60893b1ca46&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCZX6CO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH6oHsbwBww2zVfG8VbRZ5xT%2FgAlTVlYl%2FpGBwqs8YRhAiA3HyV6f1B%2FW4M8duio8fpZL1yQe0G7PAJsVen8hJ9lZir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKl8kcP9zTjdO2fN9KtwD3zxhxKlQVfgDYSEiMf1oc04mHfvr9TOy%2BY8ZZjbyNUdwxjAjda3jbDJ4s61sqnTNWKgxJ4P3feyyvK1FIUHci1AKOFjWppsYg9UWjA%2FqyaR%2FZmSs93D%2B%2BHegVyASdPhIcTamgTZYMGXlmCegh4%2FnSE9RKYmypKIhzTeaHx4N1%2Feihfx2OhKQvNq%2B2YZDBVHdgFfjvvH3TmgMfJ1PRFIitTbb9CNvZ53%2B9oBR%2BbvPJxmKDsWawUG9bBvOhHk32YIeHgNMtJwanq1YkFuKtelypjbdYsrY64K03gma2klv1e%2FqKcK7qJKCQnwOMyR7hlHYU3ClgCHiFEmuSbOJCIB%2BMx%2FtMyE%2Fl9aXWNtntly9DkYzNWqjGX4Q%2BsXaea9GPuACSL8XNfYjtEwrShkjcK%2Bin7ZS8VJdsy93KwP82U3Q4kibO%2BKGYSzylp9jNwIZwfocGXwEB%2FQvBcSA76dIyPBQko9WDu%2B50jMrlBqDvrNmYuON1UNMiMqiGCUFUORIud0dfjroRKIv15NudD%2BdRsQTV09lWhsYqoOQPPPEKVaPo3PC1iK0Vfv6zgJ71dDjiMO4QdoB9ps%2BwJzxyo8n1GMMft59fWmuHq8euXGJtaElfWboRdXJjDSUN3uzaIYwqJbIwQY6pgFv%2BWu7hpMvDew1hyzzMX9NiyaqAMab7jtSyJxjgLP3reZ2J9rICUFIrAC0cqobBD%2BlS1fUuarn3FQGxeQJ4xooGVJyQdUxphLkC9ISpIN1TXrL74GrFmNPhUGOx9oE6n%2FMdHdqZCcxQHJMd%2F6iWXeQ5Aujb8SZSJwKQEUtPvfFMOxXt1xybmvEdqiSo%2B1T%2F%2Bz0NCyWvi43qV3JWEH8B4v3XFxSSyXQ&X-Amz-Signature=5bebaa4627d85abf3dd5f6d8c683988720410449b99f9c3eb59d46dac78a5bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCZX6CO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH6oHsbwBww2zVfG8VbRZ5xT%2FgAlTVlYl%2FpGBwqs8YRhAiA3HyV6f1B%2FW4M8duio8fpZL1yQe0G7PAJsVen8hJ9lZir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKl8kcP9zTjdO2fN9KtwD3zxhxKlQVfgDYSEiMf1oc04mHfvr9TOy%2BY8ZZjbyNUdwxjAjda3jbDJ4s61sqnTNWKgxJ4P3feyyvK1FIUHci1AKOFjWppsYg9UWjA%2FqyaR%2FZmSs93D%2B%2BHegVyASdPhIcTamgTZYMGXlmCegh4%2FnSE9RKYmypKIhzTeaHx4N1%2Feihfx2OhKQvNq%2B2YZDBVHdgFfjvvH3TmgMfJ1PRFIitTbb9CNvZ53%2B9oBR%2BbvPJxmKDsWawUG9bBvOhHk32YIeHgNMtJwanq1YkFuKtelypjbdYsrY64K03gma2klv1e%2FqKcK7qJKCQnwOMyR7hlHYU3ClgCHiFEmuSbOJCIB%2BMx%2FtMyE%2Fl9aXWNtntly9DkYzNWqjGX4Q%2BsXaea9GPuACSL8XNfYjtEwrShkjcK%2Bin7ZS8VJdsy93KwP82U3Q4kibO%2BKGYSzylp9jNwIZwfocGXwEB%2FQvBcSA76dIyPBQko9WDu%2B50jMrlBqDvrNmYuON1UNMiMqiGCUFUORIud0dfjroRKIv15NudD%2BdRsQTV09lWhsYqoOQPPPEKVaPo3PC1iK0Vfv6zgJ71dDjiMO4QdoB9ps%2BwJzxyo8n1GMMft59fWmuHq8euXGJtaElfWboRdXJjDSUN3uzaIYwqJbIwQY6pgFv%2BWu7hpMvDew1hyzzMX9NiyaqAMab7jtSyJxjgLP3reZ2J9rICUFIrAC0cqobBD%2BlS1fUuarn3FQGxeQJ4xooGVJyQdUxphLkC9ISpIN1TXrL74GrFmNPhUGOx9oE6n%2FMdHdqZCcxQHJMd%2F6iWXeQ5Aujb8SZSJwKQEUtPvfFMOxXt1xybmvEdqiSo%2B1T%2F%2Bz0NCyWvi43qV3JWEH8B4v3XFxSSyXQ&X-Amz-Signature=7d886bef406d2f5f3ea04b853eb6f6f29d7645580105d059d804e3d337bf61fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCZX6CO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH6oHsbwBww2zVfG8VbRZ5xT%2FgAlTVlYl%2FpGBwqs8YRhAiA3HyV6f1B%2FW4M8duio8fpZL1yQe0G7PAJsVen8hJ9lZir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKl8kcP9zTjdO2fN9KtwD3zxhxKlQVfgDYSEiMf1oc04mHfvr9TOy%2BY8ZZjbyNUdwxjAjda3jbDJ4s61sqnTNWKgxJ4P3feyyvK1FIUHci1AKOFjWppsYg9UWjA%2FqyaR%2FZmSs93D%2B%2BHegVyASdPhIcTamgTZYMGXlmCegh4%2FnSE9RKYmypKIhzTeaHx4N1%2Feihfx2OhKQvNq%2B2YZDBVHdgFfjvvH3TmgMfJ1PRFIitTbb9CNvZ53%2B9oBR%2BbvPJxmKDsWawUG9bBvOhHk32YIeHgNMtJwanq1YkFuKtelypjbdYsrY64K03gma2klv1e%2FqKcK7qJKCQnwOMyR7hlHYU3ClgCHiFEmuSbOJCIB%2BMx%2FtMyE%2Fl9aXWNtntly9DkYzNWqjGX4Q%2BsXaea9GPuACSL8XNfYjtEwrShkjcK%2Bin7ZS8VJdsy93KwP82U3Q4kibO%2BKGYSzylp9jNwIZwfocGXwEB%2FQvBcSA76dIyPBQko9WDu%2B50jMrlBqDvrNmYuON1UNMiMqiGCUFUORIud0dfjroRKIv15NudD%2BdRsQTV09lWhsYqoOQPPPEKVaPo3PC1iK0Vfv6zgJ71dDjiMO4QdoB9ps%2BwJzxyo8n1GMMft59fWmuHq8euXGJtaElfWboRdXJjDSUN3uzaIYwqJbIwQY6pgFv%2BWu7hpMvDew1hyzzMX9NiyaqAMab7jtSyJxjgLP3reZ2J9rICUFIrAC0cqobBD%2BlS1fUuarn3FQGxeQJ4xooGVJyQdUxphLkC9ISpIN1TXrL74GrFmNPhUGOx9oE6n%2FMdHdqZCcxQHJMd%2F6iWXeQ5Aujb8SZSJwKQEUtPvfFMOxXt1xybmvEdqiSo%2B1T%2F%2Bz0NCyWvi43qV3JWEH8B4v3XFxSSyXQ&X-Amz-Signature=b32bd2da66bc31981fe6bf4c15aa89d645de4720afb77dbbde998e8a64b7de37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCZX6CO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH6oHsbwBww2zVfG8VbRZ5xT%2FgAlTVlYl%2FpGBwqs8YRhAiA3HyV6f1B%2FW4M8duio8fpZL1yQe0G7PAJsVen8hJ9lZir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKl8kcP9zTjdO2fN9KtwD3zxhxKlQVfgDYSEiMf1oc04mHfvr9TOy%2BY8ZZjbyNUdwxjAjda3jbDJ4s61sqnTNWKgxJ4P3feyyvK1FIUHci1AKOFjWppsYg9UWjA%2FqyaR%2FZmSs93D%2B%2BHegVyASdPhIcTamgTZYMGXlmCegh4%2FnSE9RKYmypKIhzTeaHx4N1%2Feihfx2OhKQvNq%2B2YZDBVHdgFfjvvH3TmgMfJ1PRFIitTbb9CNvZ53%2B9oBR%2BbvPJxmKDsWawUG9bBvOhHk32YIeHgNMtJwanq1YkFuKtelypjbdYsrY64K03gma2klv1e%2FqKcK7qJKCQnwOMyR7hlHYU3ClgCHiFEmuSbOJCIB%2BMx%2FtMyE%2Fl9aXWNtntly9DkYzNWqjGX4Q%2BsXaea9GPuACSL8XNfYjtEwrShkjcK%2Bin7ZS8VJdsy93KwP82U3Q4kibO%2BKGYSzylp9jNwIZwfocGXwEB%2FQvBcSA76dIyPBQko9WDu%2B50jMrlBqDvrNmYuON1UNMiMqiGCUFUORIud0dfjroRKIv15NudD%2BdRsQTV09lWhsYqoOQPPPEKVaPo3PC1iK0Vfv6zgJ71dDjiMO4QdoB9ps%2BwJzxyo8n1GMMft59fWmuHq8euXGJtaElfWboRdXJjDSUN3uzaIYwqJbIwQY6pgFv%2BWu7hpMvDew1hyzzMX9NiyaqAMab7jtSyJxjgLP3reZ2J9rICUFIrAC0cqobBD%2BlS1fUuarn3FQGxeQJ4xooGVJyQdUxphLkC9ISpIN1TXrL74GrFmNPhUGOx9oE6n%2FMdHdqZCcxQHJMd%2F6iWXeQ5Aujb8SZSJwKQEUtPvfFMOxXt1xybmvEdqiSo%2B1T%2F%2Bz0NCyWvi43qV3JWEH8B4v3XFxSSyXQ&X-Amz-Signature=8b04d4dc3e981299cea92a11d840274a0794ef060f87426502a009d5050ec5df&X-Amz-SignedHeaders=host&x-id=GetObject)
