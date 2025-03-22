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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VWHNL6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDDkA5BDKu%2BvWVw%2F93u2VXQbd55sZMTucHcXDlkEjtWyQIgGYYHiP2Ujcz50BhzayCfMto6RyCnQeKjCctTIUllMNcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7XqvlOyfIhH3WueircAxoFyx9QHe5ZcywVRMxy6cRWG66Z%2FsL2nVb9Vif8cWQuzZevO8jUKzexCTvtBVJd74mhwYD3jRBxioCNBJ8LXVJNBEKPOLWpsSM%2BKEaQvWuXwQe54UBbYVpJKRMk9LUXqkBMnHg1WSYxg9KuLGI%2FTaHdzXpWT5cWHmwMA%2FEasB%2FxRniatYGkrHZ%2BZHBWnJpqCV9xauiHiVQkifVw4EnaP3J%2BIinBJzSFk0wPjgkmqi1W3xT57IH2cnHtYfN9WzUXLZuQFTMjfvyukHczS%2F7oSIo%2BaGuToZ7YzsA6%2FqgOXOzTlmQPdRn%2FHz3EHgAQYvyg7c1bEKEMeIWGLvKNv6%2Bbagp5fVn5hFAKdpSEhwC5o%2Fhnd7VOWmnvl4lpuevw1qCfuVouXGfk4F3fRbFMS6puGE9KPVyDZq3w063%2BquK5gmrNbDljGR9HcSjK%2BydUWecXyS8c6sdm%2BD3ma8UXBhXaRsBwPDySZhdRYqU%2FCsiZWgoyWlFHeQbpoNeDNt5M4W5ZSzoHX9VY%2BhRp6YRMqZdU6PULO4cXQP%2B5ugMid%2FySzjTFrQyAb1DifzPLRWqUT7Nr71hE4%2Fixa%2FuOmCnwgGDJZWTwlodtYT3iH8P8Hr4%2Fpr8viEIygDqlLuRuXMzhMKX3974GOqUB%2BHOMxKHJ9XN58amh6ofUdY3lUw%2BSM3%2BBBpYG6Fu3mTp%2FhJFIm1fpRVrdR5nlrfAGmOBnMteVMWw2JjS35erDbyX6%2FNmXZSphDRBhP7AKI7efADNcYpdeDcjkJ9dlLFAKHXBzki8iDIIbeSP%2BCkjmYycZe8h2Nto9VAgX3%2FhEhScR0LIMvfIpe1%2FA60MLjIIvRybWqgn1auFoB%2F3WbQF1CxdwQPPh&X-Amz-Signature=ae5f03e3fe5b61e63440fee7bb1d73ee2839f7f9692171b9c5c44d6564635377&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VWHNL6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDDkA5BDKu%2BvWVw%2F93u2VXQbd55sZMTucHcXDlkEjtWyQIgGYYHiP2Ujcz50BhzayCfMto6RyCnQeKjCctTIUllMNcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7XqvlOyfIhH3WueircAxoFyx9QHe5ZcywVRMxy6cRWG66Z%2FsL2nVb9Vif8cWQuzZevO8jUKzexCTvtBVJd74mhwYD3jRBxioCNBJ8LXVJNBEKPOLWpsSM%2BKEaQvWuXwQe54UBbYVpJKRMk9LUXqkBMnHg1WSYxg9KuLGI%2FTaHdzXpWT5cWHmwMA%2FEasB%2FxRniatYGkrHZ%2BZHBWnJpqCV9xauiHiVQkifVw4EnaP3J%2BIinBJzSFk0wPjgkmqi1W3xT57IH2cnHtYfN9WzUXLZuQFTMjfvyukHczS%2F7oSIo%2BaGuToZ7YzsA6%2FqgOXOzTlmQPdRn%2FHz3EHgAQYvyg7c1bEKEMeIWGLvKNv6%2Bbagp5fVn5hFAKdpSEhwC5o%2Fhnd7VOWmnvl4lpuevw1qCfuVouXGfk4F3fRbFMS6puGE9KPVyDZq3w063%2BquK5gmrNbDljGR9HcSjK%2BydUWecXyS8c6sdm%2BD3ma8UXBhXaRsBwPDySZhdRYqU%2FCsiZWgoyWlFHeQbpoNeDNt5M4W5ZSzoHX9VY%2BhRp6YRMqZdU6PULO4cXQP%2B5ugMid%2FySzjTFrQyAb1DifzPLRWqUT7Nr71hE4%2Fixa%2FuOmCnwgGDJZWTwlodtYT3iH8P8Hr4%2Fpr8viEIygDqlLuRuXMzhMKX3974GOqUB%2BHOMxKHJ9XN58amh6ofUdY3lUw%2BSM3%2BBBpYG6Fu3mTp%2FhJFIm1fpRVrdR5nlrfAGmOBnMteVMWw2JjS35erDbyX6%2FNmXZSphDRBhP7AKI7efADNcYpdeDcjkJ9dlLFAKHXBzki8iDIIbeSP%2BCkjmYycZe8h2Nto9VAgX3%2FhEhScR0LIMvfIpe1%2FA60MLjIIvRybWqgn1auFoB%2F3WbQF1CxdwQPPh&X-Amz-Signature=f25d810ee82ac2cd5f7d063ef559dc158d42e4301460c0651a456b3dbac49795&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VWHNL6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDDkA5BDKu%2BvWVw%2F93u2VXQbd55sZMTucHcXDlkEjtWyQIgGYYHiP2Ujcz50BhzayCfMto6RyCnQeKjCctTIUllMNcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7XqvlOyfIhH3WueircAxoFyx9QHe5ZcywVRMxy6cRWG66Z%2FsL2nVb9Vif8cWQuzZevO8jUKzexCTvtBVJd74mhwYD3jRBxioCNBJ8LXVJNBEKPOLWpsSM%2BKEaQvWuXwQe54UBbYVpJKRMk9LUXqkBMnHg1WSYxg9KuLGI%2FTaHdzXpWT5cWHmwMA%2FEasB%2FxRniatYGkrHZ%2BZHBWnJpqCV9xauiHiVQkifVw4EnaP3J%2BIinBJzSFk0wPjgkmqi1W3xT57IH2cnHtYfN9WzUXLZuQFTMjfvyukHczS%2F7oSIo%2BaGuToZ7YzsA6%2FqgOXOzTlmQPdRn%2FHz3EHgAQYvyg7c1bEKEMeIWGLvKNv6%2Bbagp5fVn5hFAKdpSEhwC5o%2Fhnd7VOWmnvl4lpuevw1qCfuVouXGfk4F3fRbFMS6puGE9KPVyDZq3w063%2BquK5gmrNbDljGR9HcSjK%2BydUWecXyS8c6sdm%2BD3ma8UXBhXaRsBwPDySZhdRYqU%2FCsiZWgoyWlFHeQbpoNeDNt5M4W5ZSzoHX9VY%2BhRp6YRMqZdU6PULO4cXQP%2B5ugMid%2FySzjTFrQyAb1DifzPLRWqUT7Nr71hE4%2Fixa%2FuOmCnwgGDJZWTwlodtYT3iH8P8Hr4%2Fpr8viEIygDqlLuRuXMzhMKX3974GOqUB%2BHOMxKHJ9XN58amh6ofUdY3lUw%2BSM3%2BBBpYG6Fu3mTp%2FhJFIm1fpRVrdR5nlrfAGmOBnMteVMWw2JjS35erDbyX6%2FNmXZSphDRBhP7AKI7efADNcYpdeDcjkJ9dlLFAKHXBzki8iDIIbeSP%2BCkjmYycZe8h2Nto9VAgX3%2FhEhScR0LIMvfIpe1%2FA60MLjIIvRybWqgn1auFoB%2F3WbQF1CxdwQPPh&X-Amz-Signature=f69c0685bccce8e8e547a6802a54406c7aca751db8dce5b819da3520ed5497c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VWHNL6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDDkA5BDKu%2BvWVw%2F93u2VXQbd55sZMTucHcXDlkEjtWyQIgGYYHiP2Ujcz50BhzayCfMto6RyCnQeKjCctTIUllMNcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7XqvlOyfIhH3WueircAxoFyx9QHe5ZcywVRMxy6cRWG66Z%2FsL2nVb9Vif8cWQuzZevO8jUKzexCTvtBVJd74mhwYD3jRBxioCNBJ8LXVJNBEKPOLWpsSM%2BKEaQvWuXwQe54UBbYVpJKRMk9LUXqkBMnHg1WSYxg9KuLGI%2FTaHdzXpWT5cWHmwMA%2FEasB%2FxRniatYGkrHZ%2BZHBWnJpqCV9xauiHiVQkifVw4EnaP3J%2BIinBJzSFk0wPjgkmqi1W3xT57IH2cnHtYfN9WzUXLZuQFTMjfvyukHczS%2F7oSIo%2BaGuToZ7YzsA6%2FqgOXOzTlmQPdRn%2FHz3EHgAQYvyg7c1bEKEMeIWGLvKNv6%2Bbagp5fVn5hFAKdpSEhwC5o%2Fhnd7VOWmnvl4lpuevw1qCfuVouXGfk4F3fRbFMS6puGE9KPVyDZq3w063%2BquK5gmrNbDljGR9HcSjK%2BydUWecXyS8c6sdm%2BD3ma8UXBhXaRsBwPDySZhdRYqU%2FCsiZWgoyWlFHeQbpoNeDNt5M4W5ZSzoHX9VY%2BhRp6YRMqZdU6PULO4cXQP%2B5ugMid%2FySzjTFrQyAb1DifzPLRWqUT7Nr71hE4%2Fixa%2FuOmCnwgGDJZWTwlodtYT3iH8P8Hr4%2Fpr8viEIygDqlLuRuXMzhMKX3974GOqUB%2BHOMxKHJ9XN58amh6ofUdY3lUw%2BSM3%2BBBpYG6Fu3mTp%2FhJFIm1fpRVrdR5nlrfAGmOBnMteVMWw2JjS35erDbyX6%2FNmXZSphDRBhP7AKI7efADNcYpdeDcjkJ9dlLFAKHXBzki8iDIIbeSP%2BCkjmYycZe8h2Nto9VAgX3%2FhEhScR0LIMvfIpe1%2FA60MLjIIvRybWqgn1auFoB%2F3WbQF1CxdwQPPh&X-Amz-Signature=37d84cd68fc7691312dfc854ee99c2ce0e41e67513767916cfe0336672562d88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VWHNL6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDDkA5BDKu%2BvWVw%2F93u2VXQbd55sZMTucHcXDlkEjtWyQIgGYYHiP2Ujcz50BhzayCfMto6RyCnQeKjCctTIUllMNcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7XqvlOyfIhH3WueircAxoFyx9QHe5ZcywVRMxy6cRWG66Z%2FsL2nVb9Vif8cWQuzZevO8jUKzexCTvtBVJd74mhwYD3jRBxioCNBJ8LXVJNBEKPOLWpsSM%2BKEaQvWuXwQe54UBbYVpJKRMk9LUXqkBMnHg1WSYxg9KuLGI%2FTaHdzXpWT5cWHmwMA%2FEasB%2FxRniatYGkrHZ%2BZHBWnJpqCV9xauiHiVQkifVw4EnaP3J%2BIinBJzSFk0wPjgkmqi1W3xT57IH2cnHtYfN9WzUXLZuQFTMjfvyukHczS%2F7oSIo%2BaGuToZ7YzsA6%2FqgOXOzTlmQPdRn%2FHz3EHgAQYvyg7c1bEKEMeIWGLvKNv6%2Bbagp5fVn5hFAKdpSEhwC5o%2Fhnd7VOWmnvl4lpuevw1qCfuVouXGfk4F3fRbFMS6puGE9KPVyDZq3w063%2BquK5gmrNbDljGR9HcSjK%2BydUWecXyS8c6sdm%2BD3ma8UXBhXaRsBwPDySZhdRYqU%2FCsiZWgoyWlFHeQbpoNeDNt5M4W5ZSzoHX9VY%2BhRp6YRMqZdU6PULO4cXQP%2B5ugMid%2FySzjTFrQyAb1DifzPLRWqUT7Nr71hE4%2Fixa%2FuOmCnwgGDJZWTwlodtYT3iH8P8Hr4%2Fpr8viEIygDqlLuRuXMzhMKX3974GOqUB%2BHOMxKHJ9XN58amh6ofUdY3lUw%2BSM3%2BBBpYG6Fu3mTp%2FhJFIm1fpRVrdR5nlrfAGmOBnMteVMWw2JjS35erDbyX6%2FNmXZSphDRBhP7AKI7efADNcYpdeDcjkJ9dlLFAKHXBzki8iDIIbeSP%2BCkjmYycZe8h2Nto9VAgX3%2FhEhScR0LIMvfIpe1%2FA60MLjIIvRybWqgn1auFoB%2F3WbQF1CxdwQPPh&X-Amz-Signature=16afc86eb787039846d31de9c78a25b43fa636a87cb616381570d50d9a0d61d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VWHNL6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDDkA5BDKu%2BvWVw%2F93u2VXQbd55sZMTucHcXDlkEjtWyQIgGYYHiP2Ujcz50BhzayCfMto6RyCnQeKjCctTIUllMNcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7XqvlOyfIhH3WueircAxoFyx9QHe5ZcywVRMxy6cRWG66Z%2FsL2nVb9Vif8cWQuzZevO8jUKzexCTvtBVJd74mhwYD3jRBxioCNBJ8LXVJNBEKPOLWpsSM%2BKEaQvWuXwQe54UBbYVpJKRMk9LUXqkBMnHg1WSYxg9KuLGI%2FTaHdzXpWT5cWHmwMA%2FEasB%2FxRniatYGkrHZ%2BZHBWnJpqCV9xauiHiVQkifVw4EnaP3J%2BIinBJzSFk0wPjgkmqi1W3xT57IH2cnHtYfN9WzUXLZuQFTMjfvyukHczS%2F7oSIo%2BaGuToZ7YzsA6%2FqgOXOzTlmQPdRn%2FHz3EHgAQYvyg7c1bEKEMeIWGLvKNv6%2Bbagp5fVn5hFAKdpSEhwC5o%2Fhnd7VOWmnvl4lpuevw1qCfuVouXGfk4F3fRbFMS6puGE9KPVyDZq3w063%2BquK5gmrNbDljGR9HcSjK%2BydUWecXyS8c6sdm%2BD3ma8UXBhXaRsBwPDySZhdRYqU%2FCsiZWgoyWlFHeQbpoNeDNt5M4W5ZSzoHX9VY%2BhRp6YRMqZdU6PULO4cXQP%2B5ugMid%2FySzjTFrQyAb1DifzPLRWqUT7Nr71hE4%2Fixa%2FuOmCnwgGDJZWTwlodtYT3iH8P8Hr4%2Fpr8viEIygDqlLuRuXMzhMKX3974GOqUB%2BHOMxKHJ9XN58amh6ofUdY3lUw%2BSM3%2BBBpYG6Fu3mTp%2FhJFIm1fpRVrdR5nlrfAGmOBnMteVMWw2JjS35erDbyX6%2FNmXZSphDRBhP7AKI7efADNcYpdeDcjkJ9dlLFAKHXBzki8iDIIbeSP%2BCkjmYycZe8h2Nto9VAgX3%2FhEhScR0LIMvfIpe1%2FA60MLjIIvRybWqgn1auFoB%2F3WbQF1CxdwQPPh&X-Amz-Signature=820d1ba321f1a7e7e5e167ac5f3f1519ec9dd78da26cc62c37d3df00e5eb83c4&X-Amz-SignedHeaders=host&x-id=GetObject)
