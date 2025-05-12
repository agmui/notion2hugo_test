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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN7RZKV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHS4Npav0kExxIJJwKLrncA01T4QtdiwZnElHoomqJkpAiBi1hjiIUhq5l0TApOHvyaRBCdlETFIh3Dt83FgxzqWmiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvMVFsklsO%2FfC6OOKtwDMYZj6nKNkKHo3kbr6%2Falnm2hHajE%2FCkjh4EIvPqIihxYXFNHTAd6A8CSzLZyBNXC%2B3%2Fn68bszVVwMibhsfTBmLCxLAHoD5H2Kg%2FpA4wf2m9lJZK0Q0FlSfzaApE9XyByiBv6PH8dIfW7G47wzZ8Wartsv7AgHXhOOB%2F7WQuYz6OzluvZ9rKMWfgMqMA1Vxit52JROTYsfIowza%2FcoTNefqztLB6jZZedr5xqRNBTJvF4BZhQ4qifbh8261p5KUO0bsTKLZyNPcZsR3aIH2%2FYSaozSjcm9ZSeDg1J8ug2ED63M%2F4T1n%2Fm7RtoyvH%2Fqjphe16FBir0I5YNt0wO9e5F2kuZ2ALA9Chw7iHcbPaqM%2BSijU5IUYVTGcis%2Fpe%2BoVLCpfmTxamcQi6w2prDWamrmMyjvBBYODhUqCX%2B3ruVwSqQodxQoXQhAruRgHkBz4BYd9vRMQfcIHfLAZtMtsMebNwS%2F08mq15a%2BSYjI%2F7Tyy%2Fgc4I4ibpbrYDk%2BdLHdzrTrt%2Bql4%2FnAThFkHiSI9k987NWOvVSjZiwyGyVMsoXQonijuZ%2B9t0yX%2FdwPijktZy%2Bqjx4zVPMjrdbG1bacQtlCv21RpmFSQmZKXp9PDl8hAtQZK%2BCcz3aMbNn1GgwxZaFwQY6pgGZH7rZbVu3h2cqTlLT0lkNEO9SJ0XKFwQc3NKhcdaLOXJz%2FH20BpUPPJty4s5oSA%2FS2J6h9QreKsV6nd8S0Y5pvHZHwH7kJzYihMi%2FOtxBUAqwLYRbLL%2FdIHJN7lpy2Zuj2%2BU%2FNX4lOkCUoQL%2FNrvmI3%2F2HJRNtJmtSaGzEbcunw4fM2WBItb5TaMKH0GVbALD%2BYPXNs2psJJyVOb7y6pZcD0xCd86&X-Amz-Signature=8659b405f556126cb6bb2b35ac388e1d3573a40ec89f2252540c21ec8bf92801&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN7RZKV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHS4Npav0kExxIJJwKLrncA01T4QtdiwZnElHoomqJkpAiBi1hjiIUhq5l0TApOHvyaRBCdlETFIh3Dt83FgxzqWmiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvMVFsklsO%2FfC6OOKtwDMYZj6nKNkKHo3kbr6%2Falnm2hHajE%2FCkjh4EIvPqIihxYXFNHTAd6A8CSzLZyBNXC%2B3%2Fn68bszVVwMibhsfTBmLCxLAHoD5H2Kg%2FpA4wf2m9lJZK0Q0FlSfzaApE9XyByiBv6PH8dIfW7G47wzZ8Wartsv7AgHXhOOB%2F7WQuYz6OzluvZ9rKMWfgMqMA1Vxit52JROTYsfIowza%2FcoTNefqztLB6jZZedr5xqRNBTJvF4BZhQ4qifbh8261p5KUO0bsTKLZyNPcZsR3aIH2%2FYSaozSjcm9ZSeDg1J8ug2ED63M%2F4T1n%2Fm7RtoyvH%2Fqjphe16FBir0I5YNt0wO9e5F2kuZ2ALA9Chw7iHcbPaqM%2BSijU5IUYVTGcis%2Fpe%2BoVLCpfmTxamcQi6w2prDWamrmMyjvBBYODhUqCX%2B3ruVwSqQodxQoXQhAruRgHkBz4BYd9vRMQfcIHfLAZtMtsMebNwS%2F08mq15a%2BSYjI%2F7Tyy%2Fgc4I4ibpbrYDk%2BdLHdzrTrt%2Bql4%2FnAThFkHiSI9k987NWOvVSjZiwyGyVMsoXQonijuZ%2B9t0yX%2FdwPijktZy%2Bqjx4zVPMjrdbG1bacQtlCv21RpmFSQmZKXp9PDl8hAtQZK%2BCcz3aMbNn1GgwxZaFwQY6pgGZH7rZbVu3h2cqTlLT0lkNEO9SJ0XKFwQc3NKhcdaLOXJz%2FH20BpUPPJty4s5oSA%2FS2J6h9QreKsV6nd8S0Y5pvHZHwH7kJzYihMi%2FOtxBUAqwLYRbLL%2FdIHJN7lpy2Zuj2%2BU%2FNX4lOkCUoQL%2FNrvmI3%2F2HJRNtJmtSaGzEbcunw4fM2WBItb5TaMKH0GVbALD%2BYPXNs2psJJyVOb7y6pZcD0xCd86&X-Amz-Signature=776bd1d60e353ea9d58e15e86cbd16b2dd12233df88e0f220e72ec8a2d634233&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN7RZKV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHS4Npav0kExxIJJwKLrncA01T4QtdiwZnElHoomqJkpAiBi1hjiIUhq5l0TApOHvyaRBCdlETFIh3Dt83FgxzqWmiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvMVFsklsO%2FfC6OOKtwDMYZj6nKNkKHo3kbr6%2Falnm2hHajE%2FCkjh4EIvPqIihxYXFNHTAd6A8CSzLZyBNXC%2B3%2Fn68bszVVwMibhsfTBmLCxLAHoD5H2Kg%2FpA4wf2m9lJZK0Q0FlSfzaApE9XyByiBv6PH8dIfW7G47wzZ8Wartsv7AgHXhOOB%2F7WQuYz6OzluvZ9rKMWfgMqMA1Vxit52JROTYsfIowza%2FcoTNefqztLB6jZZedr5xqRNBTJvF4BZhQ4qifbh8261p5KUO0bsTKLZyNPcZsR3aIH2%2FYSaozSjcm9ZSeDg1J8ug2ED63M%2F4T1n%2Fm7RtoyvH%2Fqjphe16FBir0I5YNt0wO9e5F2kuZ2ALA9Chw7iHcbPaqM%2BSijU5IUYVTGcis%2Fpe%2BoVLCpfmTxamcQi6w2prDWamrmMyjvBBYODhUqCX%2B3ruVwSqQodxQoXQhAruRgHkBz4BYd9vRMQfcIHfLAZtMtsMebNwS%2F08mq15a%2BSYjI%2F7Tyy%2Fgc4I4ibpbrYDk%2BdLHdzrTrt%2Bql4%2FnAThFkHiSI9k987NWOvVSjZiwyGyVMsoXQonijuZ%2B9t0yX%2FdwPijktZy%2Bqjx4zVPMjrdbG1bacQtlCv21RpmFSQmZKXp9PDl8hAtQZK%2BCcz3aMbNn1GgwxZaFwQY6pgGZH7rZbVu3h2cqTlLT0lkNEO9SJ0XKFwQc3NKhcdaLOXJz%2FH20BpUPPJty4s5oSA%2FS2J6h9QreKsV6nd8S0Y5pvHZHwH7kJzYihMi%2FOtxBUAqwLYRbLL%2FdIHJN7lpy2Zuj2%2BU%2FNX4lOkCUoQL%2FNrvmI3%2F2HJRNtJmtSaGzEbcunw4fM2WBItb5TaMKH0GVbALD%2BYPXNs2psJJyVOb7y6pZcD0xCd86&X-Amz-Signature=9fdcaf1a64a4376fb5c739553a61dc15c9a89f73bcd29dff2d2d570cf3dde952&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN7RZKV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHS4Npav0kExxIJJwKLrncA01T4QtdiwZnElHoomqJkpAiBi1hjiIUhq5l0TApOHvyaRBCdlETFIh3Dt83FgxzqWmiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvMVFsklsO%2FfC6OOKtwDMYZj6nKNkKHo3kbr6%2Falnm2hHajE%2FCkjh4EIvPqIihxYXFNHTAd6A8CSzLZyBNXC%2B3%2Fn68bszVVwMibhsfTBmLCxLAHoD5H2Kg%2FpA4wf2m9lJZK0Q0FlSfzaApE9XyByiBv6PH8dIfW7G47wzZ8Wartsv7AgHXhOOB%2F7WQuYz6OzluvZ9rKMWfgMqMA1Vxit52JROTYsfIowza%2FcoTNefqztLB6jZZedr5xqRNBTJvF4BZhQ4qifbh8261p5KUO0bsTKLZyNPcZsR3aIH2%2FYSaozSjcm9ZSeDg1J8ug2ED63M%2F4T1n%2Fm7RtoyvH%2Fqjphe16FBir0I5YNt0wO9e5F2kuZ2ALA9Chw7iHcbPaqM%2BSijU5IUYVTGcis%2Fpe%2BoVLCpfmTxamcQi6w2prDWamrmMyjvBBYODhUqCX%2B3ruVwSqQodxQoXQhAruRgHkBz4BYd9vRMQfcIHfLAZtMtsMebNwS%2F08mq15a%2BSYjI%2F7Tyy%2Fgc4I4ibpbrYDk%2BdLHdzrTrt%2Bql4%2FnAThFkHiSI9k987NWOvVSjZiwyGyVMsoXQonijuZ%2B9t0yX%2FdwPijktZy%2Bqjx4zVPMjrdbG1bacQtlCv21RpmFSQmZKXp9PDl8hAtQZK%2BCcz3aMbNn1GgwxZaFwQY6pgGZH7rZbVu3h2cqTlLT0lkNEO9SJ0XKFwQc3NKhcdaLOXJz%2FH20BpUPPJty4s5oSA%2FS2J6h9QreKsV6nd8S0Y5pvHZHwH7kJzYihMi%2FOtxBUAqwLYRbLL%2FdIHJN7lpy2Zuj2%2BU%2FNX4lOkCUoQL%2FNrvmI3%2F2HJRNtJmtSaGzEbcunw4fM2WBItb5TaMKH0GVbALD%2BYPXNs2psJJyVOb7y6pZcD0xCd86&X-Amz-Signature=f45b42e66d0cd4ccc3f4a204f6d2e1e7482942551c35ff5cc3df5e8eb44311c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN7RZKV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHS4Npav0kExxIJJwKLrncA01T4QtdiwZnElHoomqJkpAiBi1hjiIUhq5l0TApOHvyaRBCdlETFIh3Dt83FgxzqWmiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvMVFsklsO%2FfC6OOKtwDMYZj6nKNkKHo3kbr6%2Falnm2hHajE%2FCkjh4EIvPqIihxYXFNHTAd6A8CSzLZyBNXC%2B3%2Fn68bszVVwMibhsfTBmLCxLAHoD5H2Kg%2FpA4wf2m9lJZK0Q0FlSfzaApE9XyByiBv6PH8dIfW7G47wzZ8Wartsv7AgHXhOOB%2F7WQuYz6OzluvZ9rKMWfgMqMA1Vxit52JROTYsfIowza%2FcoTNefqztLB6jZZedr5xqRNBTJvF4BZhQ4qifbh8261p5KUO0bsTKLZyNPcZsR3aIH2%2FYSaozSjcm9ZSeDg1J8ug2ED63M%2F4T1n%2Fm7RtoyvH%2Fqjphe16FBir0I5YNt0wO9e5F2kuZ2ALA9Chw7iHcbPaqM%2BSijU5IUYVTGcis%2Fpe%2BoVLCpfmTxamcQi6w2prDWamrmMyjvBBYODhUqCX%2B3ruVwSqQodxQoXQhAruRgHkBz4BYd9vRMQfcIHfLAZtMtsMebNwS%2F08mq15a%2BSYjI%2F7Tyy%2Fgc4I4ibpbrYDk%2BdLHdzrTrt%2Bql4%2FnAThFkHiSI9k987NWOvVSjZiwyGyVMsoXQonijuZ%2B9t0yX%2FdwPijktZy%2Bqjx4zVPMjrdbG1bacQtlCv21RpmFSQmZKXp9PDl8hAtQZK%2BCcz3aMbNn1GgwxZaFwQY6pgGZH7rZbVu3h2cqTlLT0lkNEO9SJ0XKFwQc3NKhcdaLOXJz%2FH20BpUPPJty4s5oSA%2FS2J6h9QreKsV6nd8S0Y5pvHZHwH7kJzYihMi%2FOtxBUAqwLYRbLL%2FdIHJN7lpy2Zuj2%2BU%2FNX4lOkCUoQL%2FNrvmI3%2F2HJRNtJmtSaGzEbcunw4fM2WBItb5TaMKH0GVbALD%2BYPXNs2psJJyVOb7y6pZcD0xCd86&X-Amz-Signature=9d57162779ac63fb8f33e46e75f062dacd0aae9e67631570fcf947e58c2287f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN7RZKV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHS4Npav0kExxIJJwKLrncA01T4QtdiwZnElHoomqJkpAiBi1hjiIUhq5l0TApOHvyaRBCdlETFIh3Dt83FgxzqWmiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvMVFsklsO%2FfC6OOKtwDMYZj6nKNkKHo3kbr6%2Falnm2hHajE%2FCkjh4EIvPqIihxYXFNHTAd6A8CSzLZyBNXC%2B3%2Fn68bszVVwMibhsfTBmLCxLAHoD5H2Kg%2FpA4wf2m9lJZK0Q0FlSfzaApE9XyByiBv6PH8dIfW7G47wzZ8Wartsv7AgHXhOOB%2F7WQuYz6OzluvZ9rKMWfgMqMA1Vxit52JROTYsfIowza%2FcoTNefqztLB6jZZedr5xqRNBTJvF4BZhQ4qifbh8261p5KUO0bsTKLZyNPcZsR3aIH2%2FYSaozSjcm9ZSeDg1J8ug2ED63M%2F4T1n%2Fm7RtoyvH%2Fqjphe16FBir0I5YNt0wO9e5F2kuZ2ALA9Chw7iHcbPaqM%2BSijU5IUYVTGcis%2Fpe%2BoVLCpfmTxamcQi6w2prDWamrmMyjvBBYODhUqCX%2B3ruVwSqQodxQoXQhAruRgHkBz4BYd9vRMQfcIHfLAZtMtsMebNwS%2F08mq15a%2BSYjI%2F7Tyy%2Fgc4I4ibpbrYDk%2BdLHdzrTrt%2Bql4%2FnAThFkHiSI9k987NWOvVSjZiwyGyVMsoXQonijuZ%2B9t0yX%2FdwPijktZy%2Bqjx4zVPMjrdbG1bacQtlCv21RpmFSQmZKXp9PDl8hAtQZK%2BCcz3aMbNn1GgwxZaFwQY6pgGZH7rZbVu3h2cqTlLT0lkNEO9SJ0XKFwQc3NKhcdaLOXJz%2FH20BpUPPJty4s5oSA%2FS2J6h9QreKsV6nd8S0Y5pvHZHwH7kJzYihMi%2FOtxBUAqwLYRbLL%2FdIHJN7lpy2Zuj2%2BU%2FNX4lOkCUoQL%2FNrvmI3%2F2HJRNtJmtSaGzEbcunw4fM2WBItb5TaMKH0GVbALD%2BYPXNs2psJJyVOb7y6pZcD0xCd86&X-Amz-Signature=dd71c29de4aa1e81fdb9daf4f469e211794cbe0223072b2d3f3fbf01ba83bfc0&X-Amz-SignedHeaders=host&x-id=GetObject)
