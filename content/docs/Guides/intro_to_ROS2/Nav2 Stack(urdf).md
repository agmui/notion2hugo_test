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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCWOHVA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF5nt1mq%2Bbw569wuNtSNvvVSLiUmiTdbzUz9KSSS%2BXTkAiA%2FlKJYNrqj2eC%2BKxImZk5hlCXpo6i2vkM6YPDbz01GASr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM16qBSxTKZbTC0kxdKtwDPJWy8T6sKNf6d%2FlkvneR1HEbtKPRJUN2n8kC7GzjgsZq%2FybbhMGCwVPWtQN2ZHVArLQOa0tyQ2O4QPlxWrZqr7zKWOhlwie8igauBQBcFCheHqZHTe2BbDFlRWYL5mBsSWMBrb2AwuRsa061WVU9PWrEC9fCFhcN9qtuZZt9hW55zRxLMq9YDfk%2BpAi0TebuO5eSM3dztHGTo1DhbO%2B2FYTM5aTbf0AAAzUcPiuZRZ%2FsuPruwJDZAARjjh2QUGWMFuuh4ELPbUnrUgVPv8puarUVDKBuRxgZS0q3aCG5BQBoLg%2FGlet23S9zpnrbato54i2JnAyY3RRO3L4v%2FjFaU8mhY9BBE4v5NoMRriWq%2BEGJj40%2F1zaF05pGQLrwNy012FRc2aKKc1DhEEWmhedYKBVOlLRoDGjF1W9zbsI7yIJwpdS1HD0sN8WWKcLC6wQ%2Ff51%2FZNbp5WhotMKS5191TyiuNr4VNzqeC%2Ff5IlCtZ%2FMNPKjkDde4GrynAOSOrzEONYdkUWiWJe%2ByFxPtSZXRMuq8XIRQNna8K%2ByGp5jB%2FZh4PWhi5pY4KIm%2FN5KCeIliJLK96NCJLQ%2FektxktLzy8ceu8wW8vOZn4FJ6sEjsrb%2BZlxpeAD7WsjdZVSow77iqwwY6pgF4A7Tr7LMaFt%2FphfJLDNQPW1GQeUj4NkvIVXxgoFdlGI8aUPSL3e%2BErMoXPK8F%2Bruj%2FfhOYaKnTQIw6NEnQMSzdkzBgv0fgAf7P04QvSzHPl%2FNK9h%2BCuN%2F6bZUKnAg6qtTc3lbgxc5%2BX6PZcbmG8PVSkPaz6RPLLcv4L9ZetaVDTgtfuUTwAgGw699oAtBZ2k1QovZsneR1FuDGG6v%2BLNdvTyq7OC0&X-Amz-Signature=42ad40deb311bc611897f536590d409217461fcc14eaeaee8067a386e1620fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCWOHVA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF5nt1mq%2Bbw569wuNtSNvvVSLiUmiTdbzUz9KSSS%2BXTkAiA%2FlKJYNrqj2eC%2BKxImZk5hlCXpo6i2vkM6YPDbz01GASr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM16qBSxTKZbTC0kxdKtwDPJWy8T6sKNf6d%2FlkvneR1HEbtKPRJUN2n8kC7GzjgsZq%2FybbhMGCwVPWtQN2ZHVArLQOa0tyQ2O4QPlxWrZqr7zKWOhlwie8igauBQBcFCheHqZHTe2BbDFlRWYL5mBsSWMBrb2AwuRsa061WVU9PWrEC9fCFhcN9qtuZZt9hW55zRxLMq9YDfk%2BpAi0TebuO5eSM3dztHGTo1DhbO%2B2FYTM5aTbf0AAAzUcPiuZRZ%2FsuPruwJDZAARjjh2QUGWMFuuh4ELPbUnrUgVPv8puarUVDKBuRxgZS0q3aCG5BQBoLg%2FGlet23S9zpnrbato54i2JnAyY3RRO3L4v%2FjFaU8mhY9BBE4v5NoMRriWq%2BEGJj40%2F1zaF05pGQLrwNy012FRc2aKKc1DhEEWmhedYKBVOlLRoDGjF1W9zbsI7yIJwpdS1HD0sN8WWKcLC6wQ%2Ff51%2FZNbp5WhotMKS5191TyiuNr4VNzqeC%2Ff5IlCtZ%2FMNPKjkDde4GrynAOSOrzEONYdkUWiWJe%2ByFxPtSZXRMuq8XIRQNna8K%2ByGp5jB%2FZh4PWhi5pY4KIm%2FN5KCeIliJLK96NCJLQ%2FektxktLzy8ceu8wW8vOZn4FJ6sEjsrb%2BZlxpeAD7WsjdZVSow77iqwwY6pgF4A7Tr7LMaFt%2FphfJLDNQPW1GQeUj4NkvIVXxgoFdlGI8aUPSL3e%2BErMoXPK8F%2Bruj%2FfhOYaKnTQIw6NEnQMSzdkzBgv0fgAf7P04QvSzHPl%2FNK9h%2BCuN%2F6bZUKnAg6qtTc3lbgxc5%2BX6PZcbmG8PVSkPaz6RPLLcv4L9ZetaVDTgtfuUTwAgGw699oAtBZ2k1QovZsneR1FuDGG6v%2BLNdvTyq7OC0&X-Amz-Signature=edd55c8105d0575722b5101f08218b0eac85dfbe4ab4e095a2a2987cdfbf4c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCWOHVA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF5nt1mq%2Bbw569wuNtSNvvVSLiUmiTdbzUz9KSSS%2BXTkAiA%2FlKJYNrqj2eC%2BKxImZk5hlCXpo6i2vkM6YPDbz01GASr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM16qBSxTKZbTC0kxdKtwDPJWy8T6sKNf6d%2FlkvneR1HEbtKPRJUN2n8kC7GzjgsZq%2FybbhMGCwVPWtQN2ZHVArLQOa0tyQ2O4QPlxWrZqr7zKWOhlwie8igauBQBcFCheHqZHTe2BbDFlRWYL5mBsSWMBrb2AwuRsa061WVU9PWrEC9fCFhcN9qtuZZt9hW55zRxLMq9YDfk%2BpAi0TebuO5eSM3dztHGTo1DhbO%2B2FYTM5aTbf0AAAzUcPiuZRZ%2FsuPruwJDZAARjjh2QUGWMFuuh4ELPbUnrUgVPv8puarUVDKBuRxgZS0q3aCG5BQBoLg%2FGlet23S9zpnrbato54i2JnAyY3RRO3L4v%2FjFaU8mhY9BBE4v5NoMRriWq%2BEGJj40%2F1zaF05pGQLrwNy012FRc2aKKc1DhEEWmhedYKBVOlLRoDGjF1W9zbsI7yIJwpdS1HD0sN8WWKcLC6wQ%2Ff51%2FZNbp5WhotMKS5191TyiuNr4VNzqeC%2Ff5IlCtZ%2FMNPKjkDde4GrynAOSOrzEONYdkUWiWJe%2ByFxPtSZXRMuq8XIRQNna8K%2ByGp5jB%2FZh4PWhi5pY4KIm%2FN5KCeIliJLK96NCJLQ%2FektxktLzy8ceu8wW8vOZn4FJ6sEjsrb%2BZlxpeAD7WsjdZVSow77iqwwY6pgF4A7Tr7LMaFt%2FphfJLDNQPW1GQeUj4NkvIVXxgoFdlGI8aUPSL3e%2BErMoXPK8F%2Bruj%2FfhOYaKnTQIw6NEnQMSzdkzBgv0fgAf7P04QvSzHPl%2FNK9h%2BCuN%2F6bZUKnAg6qtTc3lbgxc5%2BX6PZcbmG8PVSkPaz6RPLLcv4L9ZetaVDTgtfuUTwAgGw699oAtBZ2k1QovZsneR1FuDGG6v%2BLNdvTyq7OC0&X-Amz-Signature=eb5c128ff9dc8617bfcceb0bcfbba20046adc319b99d8378b436236dfab6c5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCWOHVA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF5nt1mq%2Bbw569wuNtSNvvVSLiUmiTdbzUz9KSSS%2BXTkAiA%2FlKJYNrqj2eC%2BKxImZk5hlCXpo6i2vkM6YPDbz01GASr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM16qBSxTKZbTC0kxdKtwDPJWy8T6sKNf6d%2FlkvneR1HEbtKPRJUN2n8kC7GzjgsZq%2FybbhMGCwVPWtQN2ZHVArLQOa0tyQ2O4QPlxWrZqr7zKWOhlwie8igauBQBcFCheHqZHTe2BbDFlRWYL5mBsSWMBrb2AwuRsa061WVU9PWrEC9fCFhcN9qtuZZt9hW55zRxLMq9YDfk%2BpAi0TebuO5eSM3dztHGTo1DhbO%2B2FYTM5aTbf0AAAzUcPiuZRZ%2FsuPruwJDZAARjjh2QUGWMFuuh4ELPbUnrUgVPv8puarUVDKBuRxgZS0q3aCG5BQBoLg%2FGlet23S9zpnrbato54i2JnAyY3RRO3L4v%2FjFaU8mhY9BBE4v5NoMRriWq%2BEGJj40%2F1zaF05pGQLrwNy012FRc2aKKc1DhEEWmhedYKBVOlLRoDGjF1W9zbsI7yIJwpdS1HD0sN8WWKcLC6wQ%2Ff51%2FZNbp5WhotMKS5191TyiuNr4VNzqeC%2Ff5IlCtZ%2FMNPKjkDde4GrynAOSOrzEONYdkUWiWJe%2ByFxPtSZXRMuq8XIRQNna8K%2ByGp5jB%2FZh4PWhi5pY4KIm%2FN5KCeIliJLK96NCJLQ%2FektxktLzy8ceu8wW8vOZn4FJ6sEjsrb%2BZlxpeAD7WsjdZVSow77iqwwY6pgF4A7Tr7LMaFt%2FphfJLDNQPW1GQeUj4NkvIVXxgoFdlGI8aUPSL3e%2BErMoXPK8F%2Bruj%2FfhOYaKnTQIw6NEnQMSzdkzBgv0fgAf7P04QvSzHPl%2FNK9h%2BCuN%2F6bZUKnAg6qtTc3lbgxc5%2BX6PZcbmG8PVSkPaz6RPLLcv4L9ZetaVDTgtfuUTwAgGw699oAtBZ2k1QovZsneR1FuDGG6v%2BLNdvTyq7OC0&X-Amz-Signature=7dd71ee14e667601b14aa99644cdce1e361edadcdb170784c5d17183b346b8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCWOHVA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF5nt1mq%2Bbw569wuNtSNvvVSLiUmiTdbzUz9KSSS%2BXTkAiA%2FlKJYNrqj2eC%2BKxImZk5hlCXpo6i2vkM6YPDbz01GASr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM16qBSxTKZbTC0kxdKtwDPJWy8T6sKNf6d%2FlkvneR1HEbtKPRJUN2n8kC7GzjgsZq%2FybbhMGCwVPWtQN2ZHVArLQOa0tyQ2O4QPlxWrZqr7zKWOhlwie8igauBQBcFCheHqZHTe2BbDFlRWYL5mBsSWMBrb2AwuRsa061WVU9PWrEC9fCFhcN9qtuZZt9hW55zRxLMq9YDfk%2BpAi0TebuO5eSM3dztHGTo1DhbO%2B2FYTM5aTbf0AAAzUcPiuZRZ%2FsuPruwJDZAARjjh2QUGWMFuuh4ELPbUnrUgVPv8puarUVDKBuRxgZS0q3aCG5BQBoLg%2FGlet23S9zpnrbato54i2JnAyY3RRO3L4v%2FjFaU8mhY9BBE4v5NoMRriWq%2BEGJj40%2F1zaF05pGQLrwNy012FRc2aKKc1DhEEWmhedYKBVOlLRoDGjF1W9zbsI7yIJwpdS1HD0sN8WWKcLC6wQ%2Ff51%2FZNbp5WhotMKS5191TyiuNr4VNzqeC%2Ff5IlCtZ%2FMNPKjkDde4GrynAOSOrzEONYdkUWiWJe%2ByFxPtSZXRMuq8XIRQNna8K%2ByGp5jB%2FZh4PWhi5pY4KIm%2FN5KCeIliJLK96NCJLQ%2FektxktLzy8ceu8wW8vOZn4FJ6sEjsrb%2BZlxpeAD7WsjdZVSow77iqwwY6pgF4A7Tr7LMaFt%2FphfJLDNQPW1GQeUj4NkvIVXxgoFdlGI8aUPSL3e%2BErMoXPK8F%2Bruj%2FfhOYaKnTQIw6NEnQMSzdkzBgv0fgAf7P04QvSzHPl%2FNK9h%2BCuN%2F6bZUKnAg6qtTc3lbgxc5%2BX6PZcbmG8PVSkPaz6RPLLcv4L9ZetaVDTgtfuUTwAgGw699oAtBZ2k1QovZsneR1FuDGG6v%2BLNdvTyq7OC0&X-Amz-Signature=f8c688febfc325b7e1170e0d9d103db074b7390b326df3be63427b3d2504dd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCWOHVA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF5nt1mq%2Bbw569wuNtSNvvVSLiUmiTdbzUz9KSSS%2BXTkAiA%2FlKJYNrqj2eC%2BKxImZk5hlCXpo6i2vkM6YPDbz01GASr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM16qBSxTKZbTC0kxdKtwDPJWy8T6sKNf6d%2FlkvneR1HEbtKPRJUN2n8kC7GzjgsZq%2FybbhMGCwVPWtQN2ZHVArLQOa0tyQ2O4QPlxWrZqr7zKWOhlwie8igauBQBcFCheHqZHTe2BbDFlRWYL5mBsSWMBrb2AwuRsa061WVU9PWrEC9fCFhcN9qtuZZt9hW55zRxLMq9YDfk%2BpAi0TebuO5eSM3dztHGTo1DhbO%2B2FYTM5aTbf0AAAzUcPiuZRZ%2FsuPruwJDZAARjjh2QUGWMFuuh4ELPbUnrUgVPv8puarUVDKBuRxgZS0q3aCG5BQBoLg%2FGlet23S9zpnrbato54i2JnAyY3RRO3L4v%2FjFaU8mhY9BBE4v5NoMRriWq%2BEGJj40%2F1zaF05pGQLrwNy012FRc2aKKc1DhEEWmhedYKBVOlLRoDGjF1W9zbsI7yIJwpdS1HD0sN8WWKcLC6wQ%2Ff51%2FZNbp5WhotMKS5191TyiuNr4VNzqeC%2Ff5IlCtZ%2FMNPKjkDde4GrynAOSOrzEONYdkUWiWJe%2ByFxPtSZXRMuq8XIRQNna8K%2ByGp5jB%2FZh4PWhi5pY4KIm%2FN5KCeIliJLK96NCJLQ%2FektxktLzy8ceu8wW8vOZn4FJ6sEjsrb%2BZlxpeAD7WsjdZVSow77iqwwY6pgF4A7Tr7LMaFt%2FphfJLDNQPW1GQeUj4NkvIVXxgoFdlGI8aUPSL3e%2BErMoXPK8F%2Bruj%2FfhOYaKnTQIw6NEnQMSzdkzBgv0fgAf7P04QvSzHPl%2FNK9h%2BCuN%2F6bZUKnAg6qtTc3lbgxc5%2BX6PZcbmG8PVSkPaz6RPLLcv4L9ZetaVDTgtfuUTwAgGw699oAtBZ2k1QovZsneR1FuDGG6v%2BLNdvTyq7OC0&X-Amz-Signature=07a49f2972e958422837b923829f965d73b981aeda4530b8e448ebf4b41174fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
