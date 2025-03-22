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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2I55VK6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDjeBMzhIdl63oWnwhEK8vxKh%2FHM3r%2F4MjDCQeB533IUQIhAKD2H%2Frmm2n2Xqqqsck%2BJj7ase9NIzEm3%2B%2B3u%2BBu3KZoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysAI0Vsf1N%2BC%2FiDlQq3ANKNFddny8PsR62dLzaJd7WCzw9Z%2Fibqb6VMq%2FAzSyI1i4%2FkUsr5q7g66nEm6xEfAKRUhhk3EoRdhn%2FQkhVXITTXxWzKl%2BchBuEzcjoZ6tAtUOAoVhSU%2FXMFqRa1dMvnDkKalPBO7UjHJMgS%2BVEpDrkQftnOgCBnZwRpmpos2M3K%2B%2B86XZ7n8WC1Z8aKBrm2W%2BbipZJ0BrlewwFtsQ1BqEu%2ByeIpzuv69Rb3RCrX5thO7MflwFTfbFv43Pv99mrWlloBoadySbFMNIYfRY82swXqVatE1Fq5gQ9UTga7GPUILs4nGIBc8Eljv4W8Nezoagu10R8xFq5syZ%2BCLgCheb3bvzCXc1nHVkJKGNvXtXxrwaYvOlsO1gsoh8C85D26%2FSuRGPpl4QKTJPBlcG8y%2BaLxt23%2BQJUp9YrU6fDduVSK0phz%2FMDv5befe1swnwUaPUK85QKQ9HQEjojloN6WA%2BuE1zs%2F2Fuc4zriDF9pJSyuHceGluKzfzSAS1k3YMieSqKllS80zTMbAf02WL6HmqkplHCD%2FLf4REAZzOSRkn3Kx0dewC1JPwdPJOqsuBFcrSdTqeyQR49MYx%2BnQNhxGP3DQzqAYf6r6AKLa4we3Ao%2FBHRxRGG6uKXI2jHsjD85%2Fi%2BBjqkAdgT%2BOZx2NcUJaiN1X6VeMry%2Fz%2FL4ngneEm0RBcG7zYhMH%2BvAfEGZYuhoebVeYtXdIJrii2c%2BXs7Bp9HP5n%2F%2FgamouzLEU2dd8KhFbm5DigE3aFLbHhyImWtffqfCKMimcVetfhXXMi2jMQMyNlYkoTVU3p1ippjukVYT3h1NBkRjfg50pphEHpQvDmag3mnwEwKizTuQqmZ30a267h4q9YG1x%2Bx&X-Amz-Signature=286bce8d80d4cb6bf1037bc80d7c95f444d237df84b80c6e4f8ea5b2fa8f57f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2I55VK6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDjeBMzhIdl63oWnwhEK8vxKh%2FHM3r%2F4MjDCQeB533IUQIhAKD2H%2Frmm2n2Xqqqsck%2BJj7ase9NIzEm3%2B%2B3u%2BBu3KZoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysAI0Vsf1N%2BC%2FiDlQq3ANKNFddny8PsR62dLzaJd7WCzw9Z%2Fibqb6VMq%2FAzSyI1i4%2FkUsr5q7g66nEm6xEfAKRUhhk3EoRdhn%2FQkhVXITTXxWzKl%2BchBuEzcjoZ6tAtUOAoVhSU%2FXMFqRa1dMvnDkKalPBO7UjHJMgS%2BVEpDrkQftnOgCBnZwRpmpos2M3K%2B%2B86XZ7n8WC1Z8aKBrm2W%2BbipZJ0BrlewwFtsQ1BqEu%2ByeIpzuv69Rb3RCrX5thO7MflwFTfbFv43Pv99mrWlloBoadySbFMNIYfRY82swXqVatE1Fq5gQ9UTga7GPUILs4nGIBc8Eljv4W8Nezoagu10R8xFq5syZ%2BCLgCheb3bvzCXc1nHVkJKGNvXtXxrwaYvOlsO1gsoh8C85D26%2FSuRGPpl4QKTJPBlcG8y%2BaLxt23%2BQJUp9YrU6fDduVSK0phz%2FMDv5befe1swnwUaPUK85QKQ9HQEjojloN6WA%2BuE1zs%2F2Fuc4zriDF9pJSyuHceGluKzfzSAS1k3YMieSqKllS80zTMbAf02WL6HmqkplHCD%2FLf4REAZzOSRkn3Kx0dewC1JPwdPJOqsuBFcrSdTqeyQR49MYx%2BnQNhxGP3DQzqAYf6r6AKLa4we3Ao%2FBHRxRGG6uKXI2jHsjD85%2Fi%2BBjqkAdgT%2BOZx2NcUJaiN1X6VeMry%2Fz%2FL4ngneEm0RBcG7zYhMH%2BvAfEGZYuhoebVeYtXdIJrii2c%2BXs7Bp9HP5n%2F%2FgamouzLEU2dd8KhFbm5DigE3aFLbHhyImWtffqfCKMimcVetfhXXMi2jMQMyNlYkoTVU3p1ippjukVYT3h1NBkRjfg50pphEHpQvDmag3mnwEwKizTuQqmZ30a267h4q9YG1x%2Bx&X-Amz-Signature=3f67a74aa2ff7f3b718bbb69807cff3a7e0695e9b6a7854a7c291787ceaafb74&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2I55VK6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDjeBMzhIdl63oWnwhEK8vxKh%2FHM3r%2F4MjDCQeB533IUQIhAKD2H%2Frmm2n2Xqqqsck%2BJj7ase9NIzEm3%2B%2B3u%2BBu3KZoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysAI0Vsf1N%2BC%2FiDlQq3ANKNFddny8PsR62dLzaJd7WCzw9Z%2Fibqb6VMq%2FAzSyI1i4%2FkUsr5q7g66nEm6xEfAKRUhhk3EoRdhn%2FQkhVXITTXxWzKl%2BchBuEzcjoZ6tAtUOAoVhSU%2FXMFqRa1dMvnDkKalPBO7UjHJMgS%2BVEpDrkQftnOgCBnZwRpmpos2M3K%2B%2B86XZ7n8WC1Z8aKBrm2W%2BbipZJ0BrlewwFtsQ1BqEu%2ByeIpzuv69Rb3RCrX5thO7MflwFTfbFv43Pv99mrWlloBoadySbFMNIYfRY82swXqVatE1Fq5gQ9UTga7GPUILs4nGIBc8Eljv4W8Nezoagu10R8xFq5syZ%2BCLgCheb3bvzCXc1nHVkJKGNvXtXxrwaYvOlsO1gsoh8C85D26%2FSuRGPpl4QKTJPBlcG8y%2BaLxt23%2BQJUp9YrU6fDduVSK0phz%2FMDv5befe1swnwUaPUK85QKQ9HQEjojloN6WA%2BuE1zs%2F2Fuc4zriDF9pJSyuHceGluKzfzSAS1k3YMieSqKllS80zTMbAf02WL6HmqkplHCD%2FLf4REAZzOSRkn3Kx0dewC1JPwdPJOqsuBFcrSdTqeyQR49MYx%2BnQNhxGP3DQzqAYf6r6AKLa4we3Ao%2FBHRxRGG6uKXI2jHsjD85%2Fi%2BBjqkAdgT%2BOZx2NcUJaiN1X6VeMry%2Fz%2FL4ngneEm0RBcG7zYhMH%2BvAfEGZYuhoebVeYtXdIJrii2c%2BXs7Bp9HP5n%2F%2FgamouzLEU2dd8KhFbm5DigE3aFLbHhyImWtffqfCKMimcVetfhXXMi2jMQMyNlYkoTVU3p1ippjukVYT3h1NBkRjfg50pphEHpQvDmag3mnwEwKizTuQqmZ30a267h4q9YG1x%2Bx&X-Amz-Signature=c27bab44a2f0e61b6ab905f6156f74be246589c93db7fa1c123ba654a5db8b99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2I55VK6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDjeBMzhIdl63oWnwhEK8vxKh%2FHM3r%2F4MjDCQeB533IUQIhAKD2H%2Frmm2n2Xqqqsck%2BJj7ase9NIzEm3%2B%2B3u%2BBu3KZoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysAI0Vsf1N%2BC%2FiDlQq3ANKNFddny8PsR62dLzaJd7WCzw9Z%2Fibqb6VMq%2FAzSyI1i4%2FkUsr5q7g66nEm6xEfAKRUhhk3EoRdhn%2FQkhVXITTXxWzKl%2BchBuEzcjoZ6tAtUOAoVhSU%2FXMFqRa1dMvnDkKalPBO7UjHJMgS%2BVEpDrkQftnOgCBnZwRpmpos2M3K%2B%2B86XZ7n8WC1Z8aKBrm2W%2BbipZJ0BrlewwFtsQ1BqEu%2ByeIpzuv69Rb3RCrX5thO7MflwFTfbFv43Pv99mrWlloBoadySbFMNIYfRY82swXqVatE1Fq5gQ9UTga7GPUILs4nGIBc8Eljv4W8Nezoagu10R8xFq5syZ%2BCLgCheb3bvzCXc1nHVkJKGNvXtXxrwaYvOlsO1gsoh8C85D26%2FSuRGPpl4QKTJPBlcG8y%2BaLxt23%2BQJUp9YrU6fDduVSK0phz%2FMDv5befe1swnwUaPUK85QKQ9HQEjojloN6WA%2BuE1zs%2F2Fuc4zriDF9pJSyuHceGluKzfzSAS1k3YMieSqKllS80zTMbAf02WL6HmqkplHCD%2FLf4REAZzOSRkn3Kx0dewC1JPwdPJOqsuBFcrSdTqeyQR49MYx%2BnQNhxGP3DQzqAYf6r6AKLa4we3Ao%2FBHRxRGG6uKXI2jHsjD85%2Fi%2BBjqkAdgT%2BOZx2NcUJaiN1X6VeMry%2Fz%2FL4ngneEm0RBcG7zYhMH%2BvAfEGZYuhoebVeYtXdIJrii2c%2BXs7Bp9HP5n%2F%2FgamouzLEU2dd8KhFbm5DigE3aFLbHhyImWtffqfCKMimcVetfhXXMi2jMQMyNlYkoTVU3p1ippjukVYT3h1NBkRjfg50pphEHpQvDmag3mnwEwKizTuQqmZ30a267h4q9YG1x%2Bx&X-Amz-Signature=7c7cb8eeaf4244a3b39b481a9792381c10969ddbae08eee1d58c79c4ba10d8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2I55VK6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDjeBMzhIdl63oWnwhEK8vxKh%2FHM3r%2F4MjDCQeB533IUQIhAKD2H%2Frmm2n2Xqqqsck%2BJj7ase9NIzEm3%2B%2B3u%2BBu3KZoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysAI0Vsf1N%2BC%2FiDlQq3ANKNFddny8PsR62dLzaJd7WCzw9Z%2Fibqb6VMq%2FAzSyI1i4%2FkUsr5q7g66nEm6xEfAKRUhhk3EoRdhn%2FQkhVXITTXxWzKl%2BchBuEzcjoZ6tAtUOAoVhSU%2FXMFqRa1dMvnDkKalPBO7UjHJMgS%2BVEpDrkQftnOgCBnZwRpmpos2M3K%2B%2B86XZ7n8WC1Z8aKBrm2W%2BbipZJ0BrlewwFtsQ1BqEu%2ByeIpzuv69Rb3RCrX5thO7MflwFTfbFv43Pv99mrWlloBoadySbFMNIYfRY82swXqVatE1Fq5gQ9UTga7GPUILs4nGIBc8Eljv4W8Nezoagu10R8xFq5syZ%2BCLgCheb3bvzCXc1nHVkJKGNvXtXxrwaYvOlsO1gsoh8C85D26%2FSuRGPpl4QKTJPBlcG8y%2BaLxt23%2BQJUp9YrU6fDduVSK0phz%2FMDv5befe1swnwUaPUK85QKQ9HQEjojloN6WA%2BuE1zs%2F2Fuc4zriDF9pJSyuHceGluKzfzSAS1k3YMieSqKllS80zTMbAf02WL6HmqkplHCD%2FLf4REAZzOSRkn3Kx0dewC1JPwdPJOqsuBFcrSdTqeyQR49MYx%2BnQNhxGP3DQzqAYf6r6AKLa4we3Ao%2FBHRxRGG6uKXI2jHsjD85%2Fi%2BBjqkAdgT%2BOZx2NcUJaiN1X6VeMry%2Fz%2FL4ngneEm0RBcG7zYhMH%2BvAfEGZYuhoebVeYtXdIJrii2c%2BXs7Bp9HP5n%2F%2FgamouzLEU2dd8KhFbm5DigE3aFLbHhyImWtffqfCKMimcVetfhXXMi2jMQMyNlYkoTVU3p1ippjukVYT3h1NBkRjfg50pphEHpQvDmag3mnwEwKizTuQqmZ30a267h4q9YG1x%2Bx&X-Amz-Signature=7012bc293ba763298b1cc1d7c3efeecd6e3eabb623517fdd147dfded3835998d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2I55VK6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDjeBMzhIdl63oWnwhEK8vxKh%2FHM3r%2F4MjDCQeB533IUQIhAKD2H%2Frmm2n2Xqqqsck%2BJj7ase9NIzEm3%2B%2B3u%2BBu3KZoKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysAI0Vsf1N%2BC%2FiDlQq3ANKNFddny8PsR62dLzaJd7WCzw9Z%2Fibqb6VMq%2FAzSyI1i4%2FkUsr5q7g66nEm6xEfAKRUhhk3EoRdhn%2FQkhVXITTXxWzKl%2BchBuEzcjoZ6tAtUOAoVhSU%2FXMFqRa1dMvnDkKalPBO7UjHJMgS%2BVEpDrkQftnOgCBnZwRpmpos2M3K%2B%2B86XZ7n8WC1Z8aKBrm2W%2BbipZJ0BrlewwFtsQ1BqEu%2ByeIpzuv69Rb3RCrX5thO7MflwFTfbFv43Pv99mrWlloBoadySbFMNIYfRY82swXqVatE1Fq5gQ9UTga7GPUILs4nGIBc8Eljv4W8Nezoagu10R8xFq5syZ%2BCLgCheb3bvzCXc1nHVkJKGNvXtXxrwaYvOlsO1gsoh8C85D26%2FSuRGPpl4QKTJPBlcG8y%2BaLxt23%2BQJUp9YrU6fDduVSK0phz%2FMDv5befe1swnwUaPUK85QKQ9HQEjojloN6WA%2BuE1zs%2F2Fuc4zriDF9pJSyuHceGluKzfzSAS1k3YMieSqKllS80zTMbAf02WL6HmqkplHCD%2FLf4REAZzOSRkn3Kx0dewC1JPwdPJOqsuBFcrSdTqeyQR49MYx%2BnQNhxGP3DQzqAYf6r6AKLa4we3Ao%2FBHRxRGG6uKXI2jHsjD85%2Fi%2BBjqkAdgT%2BOZx2NcUJaiN1X6VeMry%2Fz%2FL4ngneEm0RBcG7zYhMH%2BvAfEGZYuhoebVeYtXdIJrii2c%2BXs7Bp9HP5n%2F%2FgamouzLEU2dd8KhFbm5DigE3aFLbHhyImWtffqfCKMimcVetfhXXMi2jMQMyNlYkoTVU3p1ippjukVYT3h1NBkRjfg50pphEHpQvDmag3mnwEwKizTuQqmZ30a267h4q9YG1x%2Bx&X-Amz-Signature=66d20a6f59464c38dfd19dd932c0dcc221fd4618cbc66bead971f4f90a20c776&X-Amz-SignedHeaders=host&x-id=GetObject)
