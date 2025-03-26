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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXOZJXY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNe0JKKwJ3izbLexiPx0SEWCAZ1Xx0ZluJ%2F6mBj86RQIhAN7Gi5r1dIZ7Ulsu2SJEDwykJXYjQZMmCHgWHybQ1m9AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxM1VoEleykojtH71kq3APg9qqoa7hruJosYaLIpexICfi%2B6JCs%2FPiO%2F1c3FXXOxOgXkLhDngkbE%2ByO1eydlQ%2FXlHdc%2FS%2FPnIJyKgavbVOQ6u4%2FvG5fPHGHvaBH8lS5yAXwTGsgkybCnxrWYKUBgdeTYTgpkY045E%2BMG6ZNS9qk8l7xaxeYf4xJ3sNbDsbBS4xE60PMT1Na2rxIiCCj8D1Wb3qThF0sI7OEJTPhsobw23RQYl6DL2ZZPWbGPHSX5DX4SnUrtNSr6PWFoQzN0KtdKUANvd1vh%2Fk4DdujewS%2BchelDLBR2SzapfSTEmVsO6tDGsj3F4k0ysfgKi0jvC47yCI2lTft%2BpRZBEd2AnwxWn28uADYUP%2BasFNWOz3u%2FjT0XJiX6i0TIIsPwV%2BDBF8jElv1PKlv8FECIggsbsoLrg52VDzxu4AifIeo9GFUz0L9BCAtwuJf8yPbYygWuRLNhqE7Wn14G%2BZWNT26y06jItxstCqs94sanYVRYqhe3jWJoJEx5M0R9EMhZ%2BRChaUOvNE0xrF5VHbNKS06zBvTPrh9Suc7itiNjiD8rtMsufOUFTp23lKD9NHrP9%2FtOpH0pHUzx5%2FNHvkm07fZ9bzcdgPdpylB4pemAgRORCdAj0HHXXfCoPX5JZVYjTCO646%2FBjqkAco0GL3EHEnfVQahAWaHgOFMCapnmHMPDKtlnc9VQUyJPsfz5a0rDNOAZd%2FQXbewqUiHlH65Y6IoHNnr4Jm5Vc1KzQcKPnzZYWWMHb2p5ED9a2ocIaWcNmbAbIoMHXSOB8g3MxmHyjoCdLCLIINE1w5o5fqFWy4WL%2BJJWVC%2BJgMfHWcgXdkTv5j9sgUxTp%2FK%2FS8xmA%2B6YZua0L5bQVwzFGyd6tgi&X-Amz-Signature=a4a194dd197c2988fc776b55cb6d55eb0e37b1ac2bb156a0a91a313b8dd28f41&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXOZJXY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNe0JKKwJ3izbLexiPx0SEWCAZ1Xx0ZluJ%2F6mBj86RQIhAN7Gi5r1dIZ7Ulsu2SJEDwykJXYjQZMmCHgWHybQ1m9AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxM1VoEleykojtH71kq3APg9qqoa7hruJosYaLIpexICfi%2B6JCs%2FPiO%2F1c3FXXOxOgXkLhDngkbE%2ByO1eydlQ%2FXlHdc%2FS%2FPnIJyKgavbVOQ6u4%2FvG5fPHGHvaBH8lS5yAXwTGsgkybCnxrWYKUBgdeTYTgpkY045E%2BMG6ZNS9qk8l7xaxeYf4xJ3sNbDsbBS4xE60PMT1Na2rxIiCCj8D1Wb3qThF0sI7OEJTPhsobw23RQYl6DL2ZZPWbGPHSX5DX4SnUrtNSr6PWFoQzN0KtdKUANvd1vh%2Fk4DdujewS%2BchelDLBR2SzapfSTEmVsO6tDGsj3F4k0ysfgKi0jvC47yCI2lTft%2BpRZBEd2AnwxWn28uADYUP%2BasFNWOz3u%2FjT0XJiX6i0TIIsPwV%2BDBF8jElv1PKlv8FECIggsbsoLrg52VDzxu4AifIeo9GFUz0L9BCAtwuJf8yPbYygWuRLNhqE7Wn14G%2BZWNT26y06jItxstCqs94sanYVRYqhe3jWJoJEx5M0R9EMhZ%2BRChaUOvNE0xrF5VHbNKS06zBvTPrh9Suc7itiNjiD8rtMsufOUFTp23lKD9NHrP9%2FtOpH0pHUzx5%2FNHvkm07fZ9bzcdgPdpylB4pemAgRORCdAj0HHXXfCoPX5JZVYjTCO646%2FBjqkAco0GL3EHEnfVQahAWaHgOFMCapnmHMPDKtlnc9VQUyJPsfz5a0rDNOAZd%2FQXbewqUiHlH65Y6IoHNnr4Jm5Vc1KzQcKPnzZYWWMHb2p5ED9a2ocIaWcNmbAbIoMHXSOB8g3MxmHyjoCdLCLIINE1w5o5fqFWy4WL%2BJJWVC%2BJgMfHWcgXdkTv5j9sgUxTp%2FK%2FS8xmA%2B6YZua0L5bQVwzFGyd6tgi&X-Amz-Signature=3f58aae1b100585f9ea282060d95c427a3a51d76b40f21ae2723613ad932eb23&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXOZJXY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNe0JKKwJ3izbLexiPx0SEWCAZ1Xx0ZluJ%2F6mBj86RQIhAN7Gi5r1dIZ7Ulsu2SJEDwykJXYjQZMmCHgWHybQ1m9AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxM1VoEleykojtH71kq3APg9qqoa7hruJosYaLIpexICfi%2B6JCs%2FPiO%2F1c3FXXOxOgXkLhDngkbE%2ByO1eydlQ%2FXlHdc%2FS%2FPnIJyKgavbVOQ6u4%2FvG5fPHGHvaBH8lS5yAXwTGsgkybCnxrWYKUBgdeTYTgpkY045E%2BMG6ZNS9qk8l7xaxeYf4xJ3sNbDsbBS4xE60PMT1Na2rxIiCCj8D1Wb3qThF0sI7OEJTPhsobw23RQYl6DL2ZZPWbGPHSX5DX4SnUrtNSr6PWFoQzN0KtdKUANvd1vh%2Fk4DdujewS%2BchelDLBR2SzapfSTEmVsO6tDGsj3F4k0ysfgKi0jvC47yCI2lTft%2BpRZBEd2AnwxWn28uADYUP%2BasFNWOz3u%2FjT0XJiX6i0TIIsPwV%2BDBF8jElv1PKlv8FECIggsbsoLrg52VDzxu4AifIeo9GFUz0L9BCAtwuJf8yPbYygWuRLNhqE7Wn14G%2BZWNT26y06jItxstCqs94sanYVRYqhe3jWJoJEx5M0R9EMhZ%2BRChaUOvNE0xrF5VHbNKS06zBvTPrh9Suc7itiNjiD8rtMsufOUFTp23lKD9NHrP9%2FtOpH0pHUzx5%2FNHvkm07fZ9bzcdgPdpylB4pemAgRORCdAj0HHXXfCoPX5JZVYjTCO646%2FBjqkAco0GL3EHEnfVQahAWaHgOFMCapnmHMPDKtlnc9VQUyJPsfz5a0rDNOAZd%2FQXbewqUiHlH65Y6IoHNnr4Jm5Vc1KzQcKPnzZYWWMHb2p5ED9a2ocIaWcNmbAbIoMHXSOB8g3MxmHyjoCdLCLIINE1w5o5fqFWy4WL%2BJJWVC%2BJgMfHWcgXdkTv5j9sgUxTp%2FK%2FS8xmA%2B6YZua0L5bQVwzFGyd6tgi&X-Amz-Signature=d1fb7ea4e9c98bc65c2237f997e47cdb11f183d44d10115e0dcf2cee27991aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXOZJXY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNe0JKKwJ3izbLexiPx0SEWCAZ1Xx0ZluJ%2F6mBj86RQIhAN7Gi5r1dIZ7Ulsu2SJEDwykJXYjQZMmCHgWHybQ1m9AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxM1VoEleykojtH71kq3APg9qqoa7hruJosYaLIpexICfi%2B6JCs%2FPiO%2F1c3FXXOxOgXkLhDngkbE%2ByO1eydlQ%2FXlHdc%2FS%2FPnIJyKgavbVOQ6u4%2FvG5fPHGHvaBH8lS5yAXwTGsgkybCnxrWYKUBgdeTYTgpkY045E%2BMG6ZNS9qk8l7xaxeYf4xJ3sNbDsbBS4xE60PMT1Na2rxIiCCj8D1Wb3qThF0sI7OEJTPhsobw23RQYl6DL2ZZPWbGPHSX5DX4SnUrtNSr6PWFoQzN0KtdKUANvd1vh%2Fk4DdujewS%2BchelDLBR2SzapfSTEmVsO6tDGsj3F4k0ysfgKi0jvC47yCI2lTft%2BpRZBEd2AnwxWn28uADYUP%2BasFNWOz3u%2FjT0XJiX6i0TIIsPwV%2BDBF8jElv1PKlv8FECIggsbsoLrg52VDzxu4AifIeo9GFUz0L9BCAtwuJf8yPbYygWuRLNhqE7Wn14G%2BZWNT26y06jItxstCqs94sanYVRYqhe3jWJoJEx5M0R9EMhZ%2BRChaUOvNE0xrF5VHbNKS06zBvTPrh9Suc7itiNjiD8rtMsufOUFTp23lKD9NHrP9%2FtOpH0pHUzx5%2FNHvkm07fZ9bzcdgPdpylB4pemAgRORCdAj0HHXXfCoPX5JZVYjTCO646%2FBjqkAco0GL3EHEnfVQahAWaHgOFMCapnmHMPDKtlnc9VQUyJPsfz5a0rDNOAZd%2FQXbewqUiHlH65Y6IoHNnr4Jm5Vc1KzQcKPnzZYWWMHb2p5ED9a2ocIaWcNmbAbIoMHXSOB8g3MxmHyjoCdLCLIINE1w5o5fqFWy4WL%2BJJWVC%2BJgMfHWcgXdkTv5j9sgUxTp%2FK%2FS8xmA%2B6YZua0L5bQVwzFGyd6tgi&X-Amz-Signature=8f517be1b30ebb20f35e8465c5fd2d33285ef5597d0a9d60bb66415394a82d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXOZJXY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNe0JKKwJ3izbLexiPx0SEWCAZ1Xx0ZluJ%2F6mBj86RQIhAN7Gi5r1dIZ7Ulsu2SJEDwykJXYjQZMmCHgWHybQ1m9AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxM1VoEleykojtH71kq3APg9qqoa7hruJosYaLIpexICfi%2B6JCs%2FPiO%2F1c3FXXOxOgXkLhDngkbE%2ByO1eydlQ%2FXlHdc%2FS%2FPnIJyKgavbVOQ6u4%2FvG5fPHGHvaBH8lS5yAXwTGsgkybCnxrWYKUBgdeTYTgpkY045E%2BMG6ZNS9qk8l7xaxeYf4xJ3sNbDsbBS4xE60PMT1Na2rxIiCCj8D1Wb3qThF0sI7OEJTPhsobw23RQYl6DL2ZZPWbGPHSX5DX4SnUrtNSr6PWFoQzN0KtdKUANvd1vh%2Fk4DdujewS%2BchelDLBR2SzapfSTEmVsO6tDGsj3F4k0ysfgKi0jvC47yCI2lTft%2BpRZBEd2AnwxWn28uADYUP%2BasFNWOz3u%2FjT0XJiX6i0TIIsPwV%2BDBF8jElv1PKlv8FECIggsbsoLrg52VDzxu4AifIeo9GFUz0L9BCAtwuJf8yPbYygWuRLNhqE7Wn14G%2BZWNT26y06jItxstCqs94sanYVRYqhe3jWJoJEx5M0R9EMhZ%2BRChaUOvNE0xrF5VHbNKS06zBvTPrh9Suc7itiNjiD8rtMsufOUFTp23lKD9NHrP9%2FtOpH0pHUzx5%2FNHvkm07fZ9bzcdgPdpylB4pemAgRORCdAj0HHXXfCoPX5JZVYjTCO646%2FBjqkAco0GL3EHEnfVQahAWaHgOFMCapnmHMPDKtlnc9VQUyJPsfz5a0rDNOAZd%2FQXbewqUiHlH65Y6IoHNnr4Jm5Vc1KzQcKPnzZYWWMHb2p5ED9a2ocIaWcNmbAbIoMHXSOB8g3MxmHyjoCdLCLIINE1w5o5fqFWy4WL%2BJJWVC%2BJgMfHWcgXdkTv5j9sgUxTp%2FK%2FS8xmA%2B6YZua0L5bQVwzFGyd6tgi&X-Amz-Signature=5347dcb4b9ed8c5e1edf5e87aaad7e4d92ff34d8ce35ef2d8ba85c74204ce64c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXOZJXY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNe0JKKwJ3izbLexiPx0SEWCAZ1Xx0ZluJ%2F6mBj86RQIhAN7Gi5r1dIZ7Ulsu2SJEDwykJXYjQZMmCHgWHybQ1m9AKv8DCCkQABoMNjM3NDIzMTgzODA1IgxM1VoEleykojtH71kq3APg9qqoa7hruJosYaLIpexICfi%2B6JCs%2FPiO%2F1c3FXXOxOgXkLhDngkbE%2ByO1eydlQ%2FXlHdc%2FS%2FPnIJyKgavbVOQ6u4%2FvG5fPHGHvaBH8lS5yAXwTGsgkybCnxrWYKUBgdeTYTgpkY045E%2BMG6ZNS9qk8l7xaxeYf4xJ3sNbDsbBS4xE60PMT1Na2rxIiCCj8D1Wb3qThF0sI7OEJTPhsobw23RQYl6DL2ZZPWbGPHSX5DX4SnUrtNSr6PWFoQzN0KtdKUANvd1vh%2Fk4DdujewS%2BchelDLBR2SzapfSTEmVsO6tDGsj3F4k0ysfgKi0jvC47yCI2lTft%2BpRZBEd2AnwxWn28uADYUP%2BasFNWOz3u%2FjT0XJiX6i0TIIsPwV%2BDBF8jElv1PKlv8FECIggsbsoLrg52VDzxu4AifIeo9GFUz0L9BCAtwuJf8yPbYygWuRLNhqE7Wn14G%2BZWNT26y06jItxstCqs94sanYVRYqhe3jWJoJEx5M0R9EMhZ%2BRChaUOvNE0xrF5VHbNKS06zBvTPrh9Suc7itiNjiD8rtMsufOUFTp23lKD9NHrP9%2FtOpH0pHUzx5%2FNHvkm07fZ9bzcdgPdpylB4pemAgRORCdAj0HHXXfCoPX5JZVYjTCO646%2FBjqkAco0GL3EHEnfVQahAWaHgOFMCapnmHMPDKtlnc9VQUyJPsfz5a0rDNOAZd%2FQXbewqUiHlH65Y6IoHNnr4Jm5Vc1KzQcKPnzZYWWMHb2p5ED9a2ocIaWcNmbAbIoMHXSOB8g3MxmHyjoCdLCLIINE1w5o5fqFWy4WL%2BJJWVC%2BJgMfHWcgXdkTv5j9sgUxTp%2FK%2FS8xmA%2B6YZua0L5bQVwzFGyd6tgi&X-Amz-Signature=df5b477096cc4854c897f3bf18111776ebdbd021bb0f949f18f44564598ddcac&X-Amz-SignedHeaders=host&x-id=GetObject)
