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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUBH35T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDExiE%2BMW05aub41a3Y%2FmDvn6l2qsKIEeG9QT5PmmemFQIgMJV2lp%2FwxP76yV%2F3kAfgNSbxdN%2BsLFstjZ4pH5Wk4L4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLaKZZkUkI5O9WiilircA69IgwN%2FC5cxDIkxXXxnqTwpHR%2B%2Fu3ghpXnfS9EkyVlqXFpVNmxmdz6ww4Lww%2Fd2m4wxd9V8%2F46%2F63vMiCrHfXOfazKaFxB1czEM8n%2Bue3xnC477mJy%2BiRYbWYJIuWIhtgLmzwGX%2BjHizLrOxJr6donob3vF1GOTDkhms1cbCGiCHpVJW7R7bQrc%2Bf6ckWh2O0O8SleziSsFfnsGyZId%2B%2BIuETihEKlts4e5QuwfvN%2FKDXd1r0tAGKuc%2B8RDwoWzgII40VUTtQWcjNQ81%2BWbF3Ua5agtXSsFwvT9UyOVRL8pCQXlPr%2BOjfJWIymFyDHgtBpdecTuuAyMBLH9vvO3n0GTZfzjVH5q3zSkz%2BZizG6EBEsDuCDdj2%2Frb3tHtZ5zgQWZPFSp0lOiRufF6sJt0a0ZpOUtSCddH5BR3Gjd6xocnwRbC78tO7GUZNLzzHnBVLETyiC7OUadqj7%2BJU483Wg2Ryg52KNCrN7GOx5AdH3LrRu3ByaO%2FdFzwKD0XuCxShCsVAyzGgdD08h1Kcl9sIpYUgAg7FT2jmFyHqgb0qLbNIlNaVLqNnaU02cjnakouWg3fOSrJh2eV9VSMvsg4VVcvZMNojVpWplbFByK%2FuNYpb7Piu19j9Q87Er2MIO%2F5MMGOqUBsgiCFdCoNsv31mS4F%2FvknSnVVPqlX3r3G92ZQrsx%2FWFNt%2BG8VBuq0z%2Bor%2Fogvg68cQOxAwdeqzchtsLUybuG0GvgYp%2Fsk9%2B0auWjRWNcwcFfFM9BaLeMF7ouubP9tow6TqiGT%2F9RVwh%2Bg3x3cOH9fcB8g%2BOtQ59YgzoHyLEFnTcmj8MIaeLqZViWPxQlmmIOajFxiHFbk5aZ3wfhlHYWEv8ZL23X&X-Amz-Signature=316c3d4317879ee39539a8eb3c699b7183c6d0eee475044a787e346a07ab65b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUBH35T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDExiE%2BMW05aub41a3Y%2FmDvn6l2qsKIEeG9QT5PmmemFQIgMJV2lp%2FwxP76yV%2F3kAfgNSbxdN%2BsLFstjZ4pH5Wk4L4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLaKZZkUkI5O9WiilircA69IgwN%2FC5cxDIkxXXxnqTwpHR%2B%2Fu3ghpXnfS9EkyVlqXFpVNmxmdz6ww4Lww%2Fd2m4wxd9V8%2F46%2F63vMiCrHfXOfazKaFxB1czEM8n%2Bue3xnC477mJy%2BiRYbWYJIuWIhtgLmzwGX%2BjHizLrOxJr6donob3vF1GOTDkhms1cbCGiCHpVJW7R7bQrc%2Bf6ckWh2O0O8SleziSsFfnsGyZId%2B%2BIuETihEKlts4e5QuwfvN%2FKDXd1r0tAGKuc%2B8RDwoWzgII40VUTtQWcjNQ81%2BWbF3Ua5agtXSsFwvT9UyOVRL8pCQXlPr%2BOjfJWIymFyDHgtBpdecTuuAyMBLH9vvO3n0GTZfzjVH5q3zSkz%2BZizG6EBEsDuCDdj2%2Frb3tHtZ5zgQWZPFSp0lOiRufF6sJt0a0ZpOUtSCddH5BR3Gjd6xocnwRbC78tO7GUZNLzzHnBVLETyiC7OUadqj7%2BJU483Wg2Ryg52KNCrN7GOx5AdH3LrRu3ByaO%2FdFzwKD0XuCxShCsVAyzGgdD08h1Kcl9sIpYUgAg7FT2jmFyHqgb0qLbNIlNaVLqNnaU02cjnakouWg3fOSrJh2eV9VSMvsg4VVcvZMNojVpWplbFByK%2FuNYpb7Piu19j9Q87Er2MIO%2F5MMGOqUBsgiCFdCoNsv31mS4F%2FvknSnVVPqlX3r3G92ZQrsx%2FWFNt%2BG8VBuq0z%2Bor%2Fogvg68cQOxAwdeqzchtsLUybuG0GvgYp%2Fsk9%2B0auWjRWNcwcFfFM9BaLeMF7ouubP9tow6TqiGT%2F9RVwh%2Bg3x3cOH9fcB8g%2BOtQ59YgzoHyLEFnTcmj8MIaeLqZViWPxQlmmIOajFxiHFbk5aZ3wfhlHYWEv8ZL23X&X-Amz-Signature=eacf9e8ab2c3dace5bfb02a54ad509e6dc3d0dbae5c8adde43585305a1927ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUBH35T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDExiE%2BMW05aub41a3Y%2FmDvn6l2qsKIEeG9QT5PmmemFQIgMJV2lp%2FwxP76yV%2F3kAfgNSbxdN%2BsLFstjZ4pH5Wk4L4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLaKZZkUkI5O9WiilircA69IgwN%2FC5cxDIkxXXxnqTwpHR%2B%2Fu3ghpXnfS9EkyVlqXFpVNmxmdz6ww4Lww%2Fd2m4wxd9V8%2F46%2F63vMiCrHfXOfazKaFxB1czEM8n%2Bue3xnC477mJy%2BiRYbWYJIuWIhtgLmzwGX%2BjHizLrOxJr6donob3vF1GOTDkhms1cbCGiCHpVJW7R7bQrc%2Bf6ckWh2O0O8SleziSsFfnsGyZId%2B%2BIuETihEKlts4e5QuwfvN%2FKDXd1r0tAGKuc%2B8RDwoWzgII40VUTtQWcjNQ81%2BWbF3Ua5agtXSsFwvT9UyOVRL8pCQXlPr%2BOjfJWIymFyDHgtBpdecTuuAyMBLH9vvO3n0GTZfzjVH5q3zSkz%2BZizG6EBEsDuCDdj2%2Frb3tHtZ5zgQWZPFSp0lOiRufF6sJt0a0ZpOUtSCddH5BR3Gjd6xocnwRbC78tO7GUZNLzzHnBVLETyiC7OUadqj7%2BJU483Wg2Ryg52KNCrN7GOx5AdH3LrRu3ByaO%2FdFzwKD0XuCxShCsVAyzGgdD08h1Kcl9sIpYUgAg7FT2jmFyHqgb0qLbNIlNaVLqNnaU02cjnakouWg3fOSrJh2eV9VSMvsg4VVcvZMNojVpWplbFByK%2FuNYpb7Piu19j9Q87Er2MIO%2F5MMGOqUBsgiCFdCoNsv31mS4F%2FvknSnVVPqlX3r3G92ZQrsx%2FWFNt%2BG8VBuq0z%2Bor%2Fogvg68cQOxAwdeqzchtsLUybuG0GvgYp%2Fsk9%2B0auWjRWNcwcFfFM9BaLeMF7ouubP9tow6TqiGT%2F9RVwh%2Bg3x3cOH9fcB8g%2BOtQ59YgzoHyLEFnTcmj8MIaeLqZViWPxQlmmIOajFxiHFbk5aZ3wfhlHYWEv8ZL23X&X-Amz-Signature=cf698d7d3233b3aea23a462700041d9b08d6d44aaef6852b51a56d286aa76b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUBH35T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDExiE%2BMW05aub41a3Y%2FmDvn6l2qsKIEeG9QT5PmmemFQIgMJV2lp%2FwxP76yV%2F3kAfgNSbxdN%2BsLFstjZ4pH5Wk4L4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLaKZZkUkI5O9WiilircA69IgwN%2FC5cxDIkxXXxnqTwpHR%2B%2Fu3ghpXnfS9EkyVlqXFpVNmxmdz6ww4Lww%2Fd2m4wxd9V8%2F46%2F63vMiCrHfXOfazKaFxB1czEM8n%2Bue3xnC477mJy%2BiRYbWYJIuWIhtgLmzwGX%2BjHizLrOxJr6donob3vF1GOTDkhms1cbCGiCHpVJW7R7bQrc%2Bf6ckWh2O0O8SleziSsFfnsGyZId%2B%2BIuETihEKlts4e5QuwfvN%2FKDXd1r0tAGKuc%2B8RDwoWzgII40VUTtQWcjNQ81%2BWbF3Ua5agtXSsFwvT9UyOVRL8pCQXlPr%2BOjfJWIymFyDHgtBpdecTuuAyMBLH9vvO3n0GTZfzjVH5q3zSkz%2BZizG6EBEsDuCDdj2%2Frb3tHtZ5zgQWZPFSp0lOiRufF6sJt0a0ZpOUtSCddH5BR3Gjd6xocnwRbC78tO7GUZNLzzHnBVLETyiC7OUadqj7%2BJU483Wg2Ryg52KNCrN7GOx5AdH3LrRu3ByaO%2FdFzwKD0XuCxShCsVAyzGgdD08h1Kcl9sIpYUgAg7FT2jmFyHqgb0qLbNIlNaVLqNnaU02cjnakouWg3fOSrJh2eV9VSMvsg4VVcvZMNojVpWplbFByK%2FuNYpb7Piu19j9Q87Er2MIO%2F5MMGOqUBsgiCFdCoNsv31mS4F%2FvknSnVVPqlX3r3G92ZQrsx%2FWFNt%2BG8VBuq0z%2Bor%2Fogvg68cQOxAwdeqzchtsLUybuG0GvgYp%2Fsk9%2B0auWjRWNcwcFfFM9BaLeMF7ouubP9tow6TqiGT%2F9RVwh%2Bg3x3cOH9fcB8g%2BOtQ59YgzoHyLEFnTcmj8MIaeLqZViWPxQlmmIOajFxiHFbk5aZ3wfhlHYWEv8ZL23X&X-Amz-Signature=1efb930ee24ece4a91879ca3967692bfd662e11d8ac6aef37c1b21c9b73006c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUBH35T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDExiE%2BMW05aub41a3Y%2FmDvn6l2qsKIEeG9QT5PmmemFQIgMJV2lp%2FwxP76yV%2F3kAfgNSbxdN%2BsLFstjZ4pH5Wk4L4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLaKZZkUkI5O9WiilircA69IgwN%2FC5cxDIkxXXxnqTwpHR%2B%2Fu3ghpXnfS9EkyVlqXFpVNmxmdz6ww4Lww%2Fd2m4wxd9V8%2F46%2F63vMiCrHfXOfazKaFxB1czEM8n%2Bue3xnC477mJy%2BiRYbWYJIuWIhtgLmzwGX%2BjHizLrOxJr6donob3vF1GOTDkhms1cbCGiCHpVJW7R7bQrc%2Bf6ckWh2O0O8SleziSsFfnsGyZId%2B%2BIuETihEKlts4e5QuwfvN%2FKDXd1r0tAGKuc%2B8RDwoWzgII40VUTtQWcjNQ81%2BWbF3Ua5agtXSsFwvT9UyOVRL8pCQXlPr%2BOjfJWIymFyDHgtBpdecTuuAyMBLH9vvO3n0GTZfzjVH5q3zSkz%2BZizG6EBEsDuCDdj2%2Frb3tHtZ5zgQWZPFSp0lOiRufF6sJt0a0ZpOUtSCddH5BR3Gjd6xocnwRbC78tO7GUZNLzzHnBVLETyiC7OUadqj7%2BJU483Wg2Ryg52KNCrN7GOx5AdH3LrRu3ByaO%2FdFzwKD0XuCxShCsVAyzGgdD08h1Kcl9sIpYUgAg7FT2jmFyHqgb0qLbNIlNaVLqNnaU02cjnakouWg3fOSrJh2eV9VSMvsg4VVcvZMNojVpWplbFByK%2FuNYpb7Piu19j9Q87Er2MIO%2F5MMGOqUBsgiCFdCoNsv31mS4F%2FvknSnVVPqlX3r3G92ZQrsx%2FWFNt%2BG8VBuq0z%2Bor%2Fogvg68cQOxAwdeqzchtsLUybuG0GvgYp%2Fsk9%2B0auWjRWNcwcFfFM9BaLeMF7ouubP9tow6TqiGT%2F9RVwh%2Bg3x3cOH9fcB8g%2BOtQ59YgzoHyLEFnTcmj8MIaeLqZViWPxQlmmIOajFxiHFbk5aZ3wfhlHYWEv8ZL23X&X-Amz-Signature=44d334ae972b0edc5727dc7a7ab82ed5f8d8d805c3ab218f4c296654a4d77b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUBH35T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDExiE%2BMW05aub41a3Y%2FmDvn6l2qsKIEeG9QT5PmmemFQIgMJV2lp%2FwxP76yV%2F3kAfgNSbxdN%2BsLFstjZ4pH5Wk4L4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLaKZZkUkI5O9WiilircA69IgwN%2FC5cxDIkxXXxnqTwpHR%2B%2Fu3ghpXnfS9EkyVlqXFpVNmxmdz6ww4Lww%2Fd2m4wxd9V8%2F46%2F63vMiCrHfXOfazKaFxB1czEM8n%2Bue3xnC477mJy%2BiRYbWYJIuWIhtgLmzwGX%2BjHizLrOxJr6donob3vF1GOTDkhms1cbCGiCHpVJW7R7bQrc%2Bf6ckWh2O0O8SleziSsFfnsGyZId%2B%2BIuETihEKlts4e5QuwfvN%2FKDXd1r0tAGKuc%2B8RDwoWzgII40VUTtQWcjNQ81%2BWbF3Ua5agtXSsFwvT9UyOVRL8pCQXlPr%2BOjfJWIymFyDHgtBpdecTuuAyMBLH9vvO3n0GTZfzjVH5q3zSkz%2BZizG6EBEsDuCDdj2%2Frb3tHtZ5zgQWZPFSp0lOiRufF6sJt0a0ZpOUtSCddH5BR3Gjd6xocnwRbC78tO7GUZNLzzHnBVLETyiC7OUadqj7%2BJU483Wg2Ryg52KNCrN7GOx5AdH3LrRu3ByaO%2FdFzwKD0XuCxShCsVAyzGgdD08h1Kcl9sIpYUgAg7FT2jmFyHqgb0qLbNIlNaVLqNnaU02cjnakouWg3fOSrJh2eV9VSMvsg4VVcvZMNojVpWplbFByK%2FuNYpb7Piu19j9Q87Er2MIO%2F5MMGOqUBsgiCFdCoNsv31mS4F%2FvknSnVVPqlX3r3G92ZQrsx%2FWFNt%2BG8VBuq0z%2Bor%2Fogvg68cQOxAwdeqzchtsLUybuG0GvgYp%2Fsk9%2B0auWjRWNcwcFfFM9BaLeMF7ouubP9tow6TqiGT%2F9RVwh%2Bg3x3cOH9fcB8g%2BOtQ59YgzoHyLEFnTcmj8MIaeLqZViWPxQlmmIOajFxiHFbk5aZ3wfhlHYWEv8ZL23X&X-Amz-Signature=4d276f395030efb7b2ea6f6827197d4f1313b575f1ebe2fdc81716ecf805942b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
