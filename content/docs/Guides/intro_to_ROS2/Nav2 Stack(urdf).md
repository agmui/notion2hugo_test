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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDIOOT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClic0H3cEh791vfsE7ADYrikWGr5TQnNq9tzPu5x62oAiBVx6c%2BSULt6uLmvfNBHHZIIfRDsgQNAfv8MP2ubWhA%2BCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2FONRsilsj1hm9bDKtwDF05EEImZAjk5UUgbiGDpjBss%2FeEvg3uktO3STTVqKQsG4xb9hgtUA%2BwWffS3BBUecqXXAiVgr3jSg7DbZDuI8m9fquT4DTssz4g0MsypN9gglKDL04r8qrXd4IUfNs%2B3vxCutOQs6%2B4r9ALbIxOVCrGZCBJ2KSacxaeBvklwoF2BrhaXBa%2FSMWleYzNN8Lz%2FuBNqSnrnASYvJ4qt58PuZ4gyg4qL784WzM4a4SZtehWMnZ%2B898Ea820%2Fxj0jvYe3r5DSmxJG0%2B4nG8BrAtoKUWBP64xFYxHu0ft1fJluVLGBpWLzi8yKMkEE%2BqCt6AIs9qFzpzYMft5PD9e5%2BIoq7k2xYOYhMvg89REEts7dYNleeQqjO4onQiqGwWqoulktpoxaFP4F6WpqB%2F8rBYGlfjGR5OeT9WZFXvP1Vv2SlnTMLxAwDsLR7DknP1uKa2%2B9sF%2F4%2FDpUZL1pkwWYsfsc75usOTpYcNZAJoE3M3iAiXAhMSY6N%2BE0LUm8frcAiWtOgYRLq%2FYdLo3akOjoaqqXBdGXc%2FlFH6SAlIWydXWdnDWZzT9ln3MI6ijgFiRwcBENISuMZKbaAtLrb2lgxpzuTd9UEeRjpOrXezCTv3ha3Nu8mjRgqqkXZ0Zjxpgwovj4wwY6pgHY1FI%2F1cmmdJ5rEVK67FyelsUo5FTrVqB%2BZcqV65XpphWZleXVyjlsmugpB%2FO9LRToDcYyJpU%2FhI4fpZ%2BxPJciJaS%2BRdWK8lm7Br4XXy93EoSZ6p0RPXYXWgu2w4gVBKaueWV%2F%2FJmAeAAyYZSBbbp9UqTKu9eve3rJYQdTNSxvGwCTgmA6ALbLtX1eIptEnRWUXWOiuEkMAebvkaiPCkcm2x3TSBOd&X-Amz-Signature=fc4c8b47880c433346dabd8221d9e3c3dcb237009901151bec16d0f30df18419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDIOOT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClic0H3cEh791vfsE7ADYrikWGr5TQnNq9tzPu5x62oAiBVx6c%2BSULt6uLmvfNBHHZIIfRDsgQNAfv8MP2ubWhA%2BCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2FONRsilsj1hm9bDKtwDF05EEImZAjk5UUgbiGDpjBss%2FeEvg3uktO3STTVqKQsG4xb9hgtUA%2BwWffS3BBUecqXXAiVgr3jSg7DbZDuI8m9fquT4DTssz4g0MsypN9gglKDL04r8qrXd4IUfNs%2B3vxCutOQs6%2B4r9ALbIxOVCrGZCBJ2KSacxaeBvklwoF2BrhaXBa%2FSMWleYzNN8Lz%2FuBNqSnrnASYvJ4qt58PuZ4gyg4qL784WzM4a4SZtehWMnZ%2B898Ea820%2Fxj0jvYe3r5DSmxJG0%2B4nG8BrAtoKUWBP64xFYxHu0ft1fJluVLGBpWLzi8yKMkEE%2BqCt6AIs9qFzpzYMft5PD9e5%2BIoq7k2xYOYhMvg89REEts7dYNleeQqjO4onQiqGwWqoulktpoxaFP4F6WpqB%2F8rBYGlfjGR5OeT9WZFXvP1Vv2SlnTMLxAwDsLR7DknP1uKa2%2B9sF%2F4%2FDpUZL1pkwWYsfsc75usOTpYcNZAJoE3M3iAiXAhMSY6N%2BE0LUm8frcAiWtOgYRLq%2FYdLo3akOjoaqqXBdGXc%2FlFH6SAlIWydXWdnDWZzT9ln3MI6ijgFiRwcBENISuMZKbaAtLrb2lgxpzuTd9UEeRjpOrXezCTv3ha3Nu8mjRgqqkXZ0Zjxpgwovj4wwY6pgHY1FI%2F1cmmdJ5rEVK67FyelsUo5FTrVqB%2BZcqV65XpphWZleXVyjlsmugpB%2FO9LRToDcYyJpU%2FhI4fpZ%2BxPJciJaS%2BRdWK8lm7Br4XXy93EoSZ6p0RPXYXWgu2w4gVBKaueWV%2F%2FJmAeAAyYZSBbbp9UqTKu9eve3rJYQdTNSxvGwCTgmA6ALbLtX1eIptEnRWUXWOiuEkMAebvkaiPCkcm2x3TSBOd&X-Amz-Signature=0f5f0d3c8ca714af143ca827a2ddf4271a4aba4649faee68b647884bc05ec88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDIOOT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClic0H3cEh791vfsE7ADYrikWGr5TQnNq9tzPu5x62oAiBVx6c%2BSULt6uLmvfNBHHZIIfRDsgQNAfv8MP2ubWhA%2BCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2FONRsilsj1hm9bDKtwDF05EEImZAjk5UUgbiGDpjBss%2FeEvg3uktO3STTVqKQsG4xb9hgtUA%2BwWffS3BBUecqXXAiVgr3jSg7DbZDuI8m9fquT4DTssz4g0MsypN9gglKDL04r8qrXd4IUfNs%2B3vxCutOQs6%2B4r9ALbIxOVCrGZCBJ2KSacxaeBvklwoF2BrhaXBa%2FSMWleYzNN8Lz%2FuBNqSnrnASYvJ4qt58PuZ4gyg4qL784WzM4a4SZtehWMnZ%2B898Ea820%2Fxj0jvYe3r5DSmxJG0%2B4nG8BrAtoKUWBP64xFYxHu0ft1fJluVLGBpWLzi8yKMkEE%2BqCt6AIs9qFzpzYMft5PD9e5%2BIoq7k2xYOYhMvg89REEts7dYNleeQqjO4onQiqGwWqoulktpoxaFP4F6WpqB%2F8rBYGlfjGR5OeT9WZFXvP1Vv2SlnTMLxAwDsLR7DknP1uKa2%2B9sF%2F4%2FDpUZL1pkwWYsfsc75usOTpYcNZAJoE3M3iAiXAhMSY6N%2BE0LUm8frcAiWtOgYRLq%2FYdLo3akOjoaqqXBdGXc%2FlFH6SAlIWydXWdnDWZzT9ln3MI6ijgFiRwcBENISuMZKbaAtLrb2lgxpzuTd9UEeRjpOrXezCTv3ha3Nu8mjRgqqkXZ0Zjxpgwovj4wwY6pgHY1FI%2F1cmmdJ5rEVK67FyelsUo5FTrVqB%2BZcqV65XpphWZleXVyjlsmugpB%2FO9LRToDcYyJpU%2FhI4fpZ%2BxPJciJaS%2BRdWK8lm7Br4XXy93EoSZ6p0RPXYXWgu2w4gVBKaueWV%2F%2FJmAeAAyYZSBbbp9UqTKu9eve3rJYQdTNSxvGwCTgmA6ALbLtX1eIptEnRWUXWOiuEkMAebvkaiPCkcm2x3TSBOd&X-Amz-Signature=394ab8736501d5a11096609d60c31ecb6fa7937558ac7e0630354e583ea4fa6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDIOOT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClic0H3cEh791vfsE7ADYrikWGr5TQnNq9tzPu5x62oAiBVx6c%2BSULt6uLmvfNBHHZIIfRDsgQNAfv8MP2ubWhA%2BCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2FONRsilsj1hm9bDKtwDF05EEImZAjk5UUgbiGDpjBss%2FeEvg3uktO3STTVqKQsG4xb9hgtUA%2BwWffS3BBUecqXXAiVgr3jSg7DbZDuI8m9fquT4DTssz4g0MsypN9gglKDL04r8qrXd4IUfNs%2B3vxCutOQs6%2B4r9ALbIxOVCrGZCBJ2KSacxaeBvklwoF2BrhaXBa%2FSMWleYzNN8Lz%2FuBNqSnrnASYvJ4qt58PuZ4gyg4qL784WzM4a4SZtehWMnZ%2B898Ea820%2Fxj0jvYe3r5DSmxJG0%2B4nG8BrAtoKUWBP64xFYxHu0ft1fJluVLGBpWLzi8yKMkEE%2BqCt6AIs9qFzpzYMft5PD9e5%2BIoq7k2xYOYhMvg89REEts7dYNleeQqjO4onQiqGwWqoulktpoxaFP4F6WpqB%2F8rBYGlfjGR5OeT9WZFXvP1Vv2SlnTMLxAwDsLR7DknP1uKa2%2B9sF%2F4%2FDpUZL1pkwWYsfsc75usOTpYcNZAJoE3M3iAiXAhMSY6N%2BE0LUm8frcAiWtOgYRLq%2FYdLo3akOjoaqqXBdGXc%2FlFH6SAlIWydXWdnDWZzT9ln3MI6ijgFiRwcBENISuMZKbaAtLrb2lgxpzuTd9UEeRjpOrXezCTv3ha3Nu8mjRgqqkXZ0Zjxpgwovj4wwY6pgHY1FI%2F1cmmdJ5rEVK67FyelsUo5FTrVqB%2BZcqV65XpphWZleXVyjlsmugpB%2FO9LRToDcYyJpU%2FhI4fpZ%2BxPJciJaS%2BRdWK8lm7Br4XXy93EoSZ6p0RPXYXWgu2w4gVBKaueWV%2F%2FJmAeAAyYZSBbbp9UqTKu9eve3rJYQdTNSxvGwCTgmA6ALbLtX1eIptEnRWUXWOiuEkMAebvkaiPCkcm2x3TSBOd&X-Amz-Signature=c476f61206be4e8de3ff3951558035e40ec7a93dfb084ac0ee0c86b60ab2d79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDIOOT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClic0H3cEh791vfsE7ADYrikWGr5TQnNq9tzPu5x62oAiBVx6c%2BSULt6uLmvfNBHHZIIfRDsgQNAfv8MP2ubWhA%2BCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2FONRsilsj1hm9bDKtwDF05EEImZAjk5UUgbiGDpjBss%2FeEvg3uktO3STTVqKQsG4xb9hgtUA%2BwWffS3BBUecqXXAiVgr3jSg7DbZDuI8m9fquT4DTssz4g0MsypN9gglKDL04r8qrXd4IUfNs%2B3vxCutOQs6%2B4r9ALbIxOVCrGZCBJ2KSacxaeBvklwoF2BrhaXBa%2FSMWleYzNN8Lz%2FuBNqSnrnASYvJ4qt58PuZ4gyg4qL784WzM4a4SZtehWMnZ%2B898Ea820%2Fxj0jvYe3r5DSmxJG0%2B4nG8BrAtoKUWBP64xFYxHu0ft1fJluVLGBpWLzi8yKMkEE%2BqCt6AIs9qFzpzYMft5PD9e5%2BIoq7k2xYOYhMvg89REEts7dYNleeQqjO4onQiqGwWqoulktpoxaFP4F6WpqB%2F8rBYGlfjGR5OeT9WZFXvP1Vv2SlnTMLxAwDsLR7DknP1uKa2%2B9sF%2F4%2FDpUZL1pkwWYsfsc75usOTpYcNZAJoE3M3iAiXAhMSY6N%2BE0LUm8frcAiWtOgYRLq%2FYdLo3akOjoaqqXBdGXc%2FlFH6SAlIWydXWdnDWZzT9ln3MI6ijgFiRwcBENISuMZKbaAtLrb2lgxpzuTd9UEeRjpOrXezCTv3ha3Nu8mjRgqqkXZ0Zjxpgwovj4wwY6pgHY1FI%2F1cmmdJ5rEVK67FyelsUo5FTrVqB%2BZcqV65XpphWZleXVyjlsmugpB%2FO9LRToDcYyJpU%2FhI4fpZ%2BxPJciJaS%2BRdWK8lm7Br4XXy93EoSZ6p0RPXYXWgu2w4gVBKaueWV%2F%2FJmAeAAyYZSBbbp9UqTKu9eve3rJYQdTNSxvGwCTgmA6ALbLtX1eIptEnRWUXWOiuEkMAebvkaiPCkcm2x3TSBOd&X-Amz-Signature=828174c2894c41f5ae504eb417062280bb1bb1bcea4dfd8124b1c9db8e19f43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDIOOT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClic0H3cEh791vfsE7ADYrikWGr5TQnNq9tzPu5x62oAiBVx6c%2BSULt6uLmvfNBHHZIIfRDsgQNAfv8MP2ubWhA%2BCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA%2FONRsilsj1hm9bDKtwDF05EEImZAjk5UUgbiGDpjBss%2FeEvg3uktO3STTVqKQsG4xb9hgtUA%2BwWffS3BBUecqXXAiVgr3jSg7DbZDuI8m9fquT4DTssz4g0MsypN9gglKDL04r8qrXd4IUfNs%2B3vxCutOQs6%2B4r9ALbIxOVCrGZCBJ2KSacxaeBvklwoF2BrhaXBa%2FSMWleYzNN8Lz%2FuBNqSnrnASYvJ4qt58PuZ4gyg4qL784WzM4a4SZtehWMnZ%2B898Ea820%2Fxj0jvYe3r5DSmxJG0%2B4nG8BrAtoKUWBP64xFYxHu0ft1fJluVLGBpWLzi8yKMkEE%2BqCt6AIs9qFzpzYMft5PD9e5%2BIoq7k2xYOYhMvg89REEts7dYNleeQqjO4onQiqGwWqoulktpoxaFP4F6WpqB%2F8rBYGlfjGR5OeT9WZFXvP1Vv2SlnTMLxAwDsLR7DknP1uKa2%2B9sF%2F4%2FDpUZL1pkwWYsfsc75usOTpYcNZAJoE3M3iAiXAhMSY6N%2BE0LUm8frcAiWtOgYRLq%2FYdLo3akOjoaqqXBdGXc%2FlFH6SAlIWydXWdnDWZzT9ln3MI6ijgFiRwcBENISuMZKbaAtLrb2lgxpzuTd9UEeRjpOrXezCTv3ha3Nu8mjRgqqkXZ0Zjxpgwovj4wwY6pgHY1FI%2F1cmmdJ5rEVK67FyelsUo5FTrVqB%2BZcqV65XpphWZleXVyjlsmugpB%2FO9LRToDcYyJpU%2FhI4fpZ%2BxPJciJaS%2BRdWK8lm7Br4XXy93EoSZ6p0RPXYXWgu2w4gVBKaueWV%2F%2FJmAeAAyYZSBbbp9UqTKu9eve3rJYQdTNSxvGwCTgmA6ALbLtX1eIptEnRWUXWOiuEkMAebvkaiPCkcm2x3TSBOd&X-Amz-Signature=d19acd51fe818553f63c87f03641a0caea2194c2490b6a017fc8f2e045629ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
