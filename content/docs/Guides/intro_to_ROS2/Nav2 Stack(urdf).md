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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM265OYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDlqUHRqUd%2BxQld7LhrTMtQYs3aicwKYn6Y95%2FhKMPCPgIhAKIXnyX%2Fq6ayCElZjrwlgxiKFrnk6h3qmkU4d7Eu3gOyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8XheLB3QZI%2Fq4i8q3APjKxv1wkzeNsy0pUPJIAyQqEFzy3g2Uv9Kd38HoOyQjUuEO26d5TLCZjxTV%2BSFDRqbjgN%2FAkgikSo5e7tvjmwa%2FyeCMJ13a6uhEZgYPFEz9TY6ZmwpRt%2FeQHa6rYz8%2FWH0hWEglo3xDl0rLyB8SCD3bFJp0wKNNqKLvbqdKGXXmg0xWHfeOkW3l4EwzS62Tlu1QyEg27qSi9X1jT8J4oPPufR8Uck16Lo9UHnOXEh0jFNYwhdA2hLbPS%2BV6eOjSQ%2BmBXQfw0Gt7OIYTDGCEB1RylHjY7S%2BrN5MHe%2BQURAkenW3RDK688oyzXm9bV1hUWuh3r1vNhEGrNBeIs4Ab6HxEBIe8Ck3tKl6JgAjHyF%2Bz1L7pO18sEw68CQUR8e8EITzCIUz4DOajzvZI%2BC1%2B4T3y4rKC3j03KbVJjjIUxPMhN3yU9mx%2Fs6xopUVrsI3QT4TBjU9FIJGe%2BzxxNGiDWMIbOe5CPjJXLZ6uIYuYvwWtIhApWLsavVidNK9PHtiG9TCgA35DALG8bJKzNZ5%2FUYM48us4A2Sm%2FNFh2%2FW6CfvuAepibkoMO036vbp9MWdjK%2Fuq0iZO0t%2B4zhMQaqHj2cfChMY38shf1%2F2ZA6tlOFdXHinUuwXb2OIeAhO8DDIqr7BBjqkAX1eVRxdAzc7peb54YwnEin7eEkgpTOQcB0l3CVQbwoKLeGvhz0cAw%2BO2Lio%2F9qr3SmfacKhn%2FQQ%2F8mWtilXlm2DBwzAGhr8UGEzzflY%2FCwiZIRNonxeBOq2njefrePtba5dKYjqbD6EbmBYDXv1UzGn%2F8uviYADE2vVkSpgNXZ%2FdkQdGYNZasvMNzjXoNjmAj5mAOmTzTvFSNKJuYu7DYBQidmP&X-Amz-Signature=e5f26b57f7517ba87afea3801aca2b7631abfa151b436d9124f03484f80c5f29&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM265OYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDlqUHRqUd%2BxQld7LhrTMtQYs3aicwKYn6Y95%2FhKMPCPgIhAKIXnyX%2Fq6ayCElZjrwlgxiKFrnk6h3qmkU4d7Eu3gOyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8XheLB3QZI%2Fq4i8q3APjKxv1wkzeNsy0pUPJIAyQqEFzy3g2Uv9Kd38HoOyQjUuEO26d5TLCZjxTV%2BSFDRqbjgN%2FAkgikSo5e7tvjmwa%2FyeCMJ13a6uhEZgYPFEz9TY6ZmwpRt%2FeQHa6rYz8%2FWH0hWEglo3xDl0rLyB8SCD3bFJp0wKNNqKLvbqdKGXXmg0xWHfeOkW3l4EwzS62Tlu1QyEg27qSi9X1jT8J4oPPufR8Uck16Lo9UHnOXEh0jFNYwhdA2hLbPS%2BV6eOjSQ%2BmBXQfw0Gt7OIYTDGCEB1RylHjY7S%2BrN5MHe%2BQURAkenW3RDK688oyzXm9bV1hUWuh3r1vNhEGrNBeIs4Ab6HxEBIe8Ck3tKl6JgAjHyF%2Bz1L7pO18sEw68CQUR8e8EITzCIUz4DOajzvZI%2BC1%2B4T3y4rKC3j03KbVJjjIUxPMhN3yU9mx%2Fs6xopUVrsI3QT4TBjU9FIJGe%2BzxxNGiDWMIbOe5CPjJXLZ6uIYuYvwWtIhApWLsavVidNK9PHtiG9TCgA35DALG8bJKzNZ5%2FUYM48us4A2Sm%2FNFh2%2FW6CfvuAepibkoMO036vbp9MWdjK%2Fuq0iZO0t%2B4zhMQaqHj2cfChMY38shf1%2F2ZA6tlOFdXHinUuwXb2OIeAhO8DDIqr7BBjqkAX1eVRxdAzc7peb54YwnEin7eEkgpTOQcB0l3CVQbwoKLeGvhz0cAw%2BO2Lio%2F9qr3SmfacKhn%2FQQ%2F8mWtilXlm2DBwzAGhr8UGEzzflY%2FCwiZIRNonxeBOq2njefrePtba5dKYjqbD6EbmBYDXv1UzGn%2F8uviYADE2vVkSpgNXZ%2FdkQdGYNZasvMNzjXoNjmAj5mAOmTzTvFSNKJuYu7DYBQidmP&X-Amz-Signature=6d3d8a1f69d689c4a086928fa4764f2cc4fbea0f738feaf9f9935eb8f875f068&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM265OYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDlqUHRqUd%2BxQld7LhrTMtQYs3aicwKYn6Y95%2FhKMPCPgIhAKIXnyX%2Fq6ayCElZjrwlgxiKFrnk6h3qmkU4d7Eu3gOyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8XheLB3QZI%2Fq4i8q3APjKxv1wkzeNsy0pUPJIAyQqEFzy3g2Uv9Kd38HoOyQjUuEO26d5TLCZjxTV%2BSFDRqbjgN%2FAkgikSo5e7tvjmwa%2FyeCMJ13a6uhEZgYPFEz9TY6ZmwpRt%2FeQHa6rYz8%2FWH0hWEglo3xDl0rLyB8SCD3bFJp0wKNNqKLvbqdKGXXmg0xWHfeOkW3l4EwzS62Tlu1QyEg27qSi9X1jT8J4oPPufR8Uck16Lo9UHnOXEh0jFNYwhdA2hLbPS%2BV6eOjSQ%2BmBXQfw0Gt7OIYTDGCEB1RylHjY7S%2BrN5MHe%2BQURAkenW3RDK688oyzXm9bV1hUWuh3r1vNhEGrNBeIs4Ab6HxEBIe8Ck3tKl6JgAjHyF%2Bz1L7pO18sEw68CQUR8e8EITzCIUz4DOajzvZI%2BC1%2B4T3y4rKC3j03KbVJjjIUxPMhN3yU9mx%2Fs6xopUVrsI3QT4TBjU9FIJGe%2BzxxNGiDWMIbOe5CPjJXLZ6uIYuYvwWtIhApWLsavVidNK9PHtiG9TCgA35DALG8bJKzNZ5%2FUYM48us4A2Sm%2FNFh2%2FW6CfvuAepibkoMO036vbp9MWdjK%2Fuq0iZO0t%2B4zhMQaqHj2cfChMY38shf1%2F2ZA6tlOFdXHinUuwXb2OIeAhO8DDIqr7BBjqkAX1eVRxdAzc7peb54YwnEin7eEkgpTOQcB0l3CVQbwoKLeGvhz0cAw%2BO2Lio%2F9qr3SmfacKhn%2FQQ%2F8mWtilXlm2DBwzAGhr8UGEzzflY%2FCwiZIRNonxeBOq2njefrePtba5dKYjqbD6EbmBYDXv1UzGn%2F8uviYADE2vVkSpgNXZ%2FdkQdGYNZasvMNzjXoNjmAj5mAOmTzTvFSNKJuYu7DYBQidmP&X-Amz-Signature=04f25fb5db9d4a413fd62ebaf6529125013e5ba5b05fdd0fc70017f46ad8da83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM265OYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDlqUHRqUd%2BxQld7LhrTMtQYs3aicwKYn6Y95%2FhKMPCPgIhAKIXnyX%2Fq6ayCElZjrwlgxiKFrnk6h3qmkU4d7Eu3gOyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8XheLB3QZI%2Fq4i8q3APjKxv1wkzeNsy0pUPJIAyQqEFzy3g2Uv9Kd38HoOyQjUuEO26d5TLCZjxTV%2BSFDRqbjgN%2FAkgikSo5e7tvjmwa%2FyeCMJ13a6uhEZgYPFEz9TY6ZmwpRt%2FeQHa6rYz8%2FWH0hWEglo3xDl0rLyB8SCD3bFJp0wKNNqKLvbqdKGXXmg0xWHfeOkW3l4EwzS62Tlu1QyEg27qSi9X1jT8J4oPPufR8Uck16Lo9UHnOXEh0jFNYwhdA2hLbPS%2BV6eOjSQ%2BmBXQfw0Gt7OIYTDGCEB1RylHjY7S%2BrN5MHe%2BQURAkenW3RDK688oyzXm9bV1hUWuh3r1vNhEGrNBeIs4Ab6HxEBIe8Ck3tKl6JgAjHyF%2Bz1L7pO18sEw68CQUR8e8EITzCIUz4DOajzvZI%2BC1%2B4T3y4rKC3j03KbVJjjIUxPMhN3yU9mx%2Fs6xopUVrsI3QT4TBjU9FIJGe%2BzxxNGiDWMIbOe5CPjJXLZ6uIYuYvwWtIhApWLsavVidNK9PHtiG9TCgA35DALG8bJKzNZ5%2FUYM48us4A2Sm%2FNFh2%2FW6CfvuAepibkoMO036vbp9MWdjK%2Fuq0iZO0t%2B4zhMQaqHj2cfChMY38shf1%2F2ZA6tlOFdXHinUuwXb2OIeAhO8DDIqr7BBjqkAX1eVRxdAzc7peb54YwnEin7eEkgpTOQcB0l3CVQbwoKLeGvhz0cAw%2BO2Lio%2F9qr3SmfacKhn%2FQQ%2F8mWtilXlm2DBwzAGhr8UGEzzflY%2FCwiZIRNonxeBOq2njefrePtba5dKYjqbD6EbmBYDXv1UzGn%2F8uviYADE2vVkSpgNXZ%2FdkQdGYNZasvMNzjXoNjmAj5mAOmTzTvFSNKJuYu7DYBQidmP&X-Amz-Signature=2b97322fb1b77803a973da3d3e693370e61145b76cad5914b21bfd1e6eb73733&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM265OYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDlqUHRqUd%2BxQld7LhrTMtQYs3aicwKYn6Y95%2FhKMPCPgIhAKIXnyX%2Fq6ayCElZjrwlgxiKFrnk6h3qmkU4d7Eu3gOyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8XheLB3QZI%2Fq4i8q3APjKxv1wkzeNsy0pUPJIAyQqEFzy3g2Uv9Kd38HoOyQjUuEO26d5TLCZjxTV%2BSFDRqbjgN%2FAkgikSo5e7tvjmwa%2FyeCMJ13a6uhEZgYPFEz9TY6ZmwpRt%2FeQHa6rYz8%2FWH0hWEglo3xDl0rLyB8SCD3bFJp0wKNNqKLvbqdKGXXmg0xWHfeOkW3l4EwzS62Tlu1QyEg27qSi9X1jT8J4oPPufR8Uck16Lo9UHnOXEh0jFNYwhdA2hLbPS%2BV6eOjSQ%2BmBXQfw0Gt7OIYTDGCEB1RylHjY7S%2BrN5MHe%2BQURAkenW3RDK688oyzXm9bV1hUWuh3r1vNhEGrNBeIs4Ab6HxEBIe8Ck3tKl6JgAjHyF%2Bz1L7pO18sEw68CQUR8e8EITzCIUz4DOajzvZI%2BC1%2B4T3y4rKC3j03KbVJjjIUxPMhN3yU9mx%2Fs6xopUVrsI3QT4TBjU9FIJGe%2BzxxNGiDWMIbOe5CPjJXLZ6uIYuYvwWtIhApWLsavVidNK9PHtiG9TCgA35DALG8bJKzNZ5%2FUYM48us4A2Sm%2FNFh2%2FW6CfvuAepibkoMO036vbp9MWdjK%2Fuq0iZO0t%2B4zhMQaqHj2cfChMY38shf1%2F2ZA6tlOFdXHinUuwXb2OIeAhO8DDIqr7BBjqkAX1eVRxdAzc7peb54YwnEin7eEkgpTOQcB0l3CVQbwoKLeGvhz0cAw%2BO2Lio%2F9qr3SmfacKhn%2FQQ%2F8mWtilXlm2DBwzAGhr8UGEzzflY%2FCwiZIRNonxeBOq2njefrePtba5dKYjqbD6EbmBYDXv1UzGn%2F8uviYADE2vVkSpgNXZ%2FdkQdGYNZasvMNzjXoNjmAj5mAOmTzTvFSNKJuYu7DYBQidmP&X-Amz-Signature=b2d14bc93f84fbdec8c414e4f846121b8a8c0a8dd514cec4a1fee9c1f7ecd5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM265OYU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDlqUHRqUd%2BxQld7LhrTMtQYs3aicwKYn6Y95%2FhKMPCPgIhAKIXnyX%2Fq6ayCElZjrwlgxiKFrnk6h3qmkU4d7Eu3gOyKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8XheLB3QZI%2Fq4i8q3APjKxv1wkzeNsy0pUPJIAyQqEFzy3g2Uv9Kd38HoOyQjUuEO26d5TLCZjxTV%2BSFDRqbjgN%2FAkgikSo5e7tvjmwa%2FyeCMJ13a6uhEZgYPFEz9TY6ZmwpRt%2FeQHa6rYz8%2FWH0hWEglo3xDl0rLyB8SCD3bFJp0wKNNqKLvbqdKGXXmg0xWHfeOkW3l4EwzS62Tlu1QyEg27qSi9X1jT8J4oPPufR8Uck16Lo9UHnOXEh0jFNYwhdA2hLbPS%2BV6eOjSQ%2BmBXQfw0Gt7OIYTDGCEB1RylHjY7S%2BrN5MHe%2BQURAkenW3RDK688oyzXm9bV1hUWuh3r1vNhEGrNBeIs4Ab6HxEBIe8Ck3tKl6JgAjHyF%2Bz1L7pO18sEw68CQUR8e8EITzCIUz4DOajzvZI%2BC1%2B4T3y4rKC3j03KbVJjjIUxPMhN3yU9mx%2Fs6xopUVrsI3QT4TBjU9FIJGe%2BzxxNGiDWMIbOe5CPjJXLZ6uIYuYvwWtIhApWLsavVidNK9PHtiG9TCgA35DALG8bJKzNZ5%2FUYM48us4A2Sm%2FNFh2%2FW6CfvuAepibkoMO036vbp9MWdjK%2Fuq0iZO0t%2B4zhMQaqHj2cfChMY38shf1%2F2ZA6tlOFdXHinUuwXb2OIeAhO8DDIqr7BBjqkAX1eVRxdAzc7peb54YwnEin7eEkgpTOQcB0l3CVQbwoKLeGvhz0cAw%2BO2Lio%2F9qr3SmfacKhn%2FQQ%2F8mWtilXlm2DBwzAGhr8UGEzzflY%2FCwiZIRNonxeBOq2njefrePtba5dKYjqbD6EbmBYDXv1UzGn%2F8uviYADE2vVkSpgNXZ%2FdkQdGYNZasvMNzjXoNjmAj5mAOmTzTvFSNKJuYu7DYBQidmP&X-Amz-Signature=cdd64f60240f6463d59784617544abe3d2a3013daf341c6ddf432d48419b5188&X-Amz-SignedHeaders=host&x-id=GetObject)
