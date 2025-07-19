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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=a792070e25413f799b4ed06bc74152df5fd0f3cd2d1f7abde4474a3d75809465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=721128750024393c9eceb486fe0eb613f19cdc994ce367e013e41ccec1ba9f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=d15b388ff21e4786039f5e7c3abda0ad1b7ac9604e39ec4bb06f054cb09c86fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=23f1054f68d181307f8b8e585116758c5ff61132596d920083fd3503dfb44246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=9e2cdaaf38a178760412f39de0e3e7a76c7f81d8109c940b0740ececd522feec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=c6fb6998d68bf0214dbbe11b15401e0dd73626cb73f3393e4d8dd56d860bb61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
