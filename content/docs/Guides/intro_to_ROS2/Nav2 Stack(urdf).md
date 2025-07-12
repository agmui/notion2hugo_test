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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7WULCL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXfGKyh4mgMe%2BaHq%2F1mUVI5St5OFkDKxK4RMxsyP1dQIhAPU%2FuqyPmfOe%2Fh4Ls9%2B1BQKi5M0zZPdubghm%2FxYew288KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOYQVlWdhiScgIqQq3AMEAIA6kLnEeqYH3mIRYhbbXwr0OhdmvWbuEwIJun9ZtLXKWrRG2h721t9XNxuNjs%2B8Q%2FvAJ3zTmmRRBe%2FmbwkkKZaalBAYxl6lgMV5mxKRI7dQEkVYJ8bYdUjlIF0YAETSqGRcjPDlngZ0rurfgtJX6wJAxyx0TCWU7EpHffixwDsb6BzyiPQcY%2FEeZjlySbXVClguVv70lnhDOTlP86DTuZ2W26Gkob8XGyLMa%2FekP1%2FD7zOKOE1v30Y8DZG%2F2m9GmdhEgj37d6XuittXgezf2SrduSiluVE2MXs012P2pshfrj5Oq4RSksBNBqtNMb8EROu2UEMsdB3pXPnIYlDiMlNYef5TucuJeXS92mjM8A3Vp45V1G7jpWjlz8l7mlb9tlb7uY6C2Zsz0zOt2NZpPbysVR%2BIDIN%2BDuDYYV2Kv%2FEv7t2UH1FYsrsilU%2Fxf6y2uE3sLVtXUdBq7iHhsH0TWGy3Jz9aqpioqC7GP4DN2NJxXDsWBWTdNd7jpKzvMMiwfOVylQQ0UQP1Z%2BHydTdLvGO35WadKfqlSEcc8P51V4cqHnQBEklpekzblFFyssQdIfGVR%2FBq4u4t%2FuB9gFS2jwzi46oo7zQ77hmi5So5kyRgCu2KW8nomi4EkDDPz8fDBjqkAUrqpV4%2BOu5JDxCUpFdE9DLScGEzKBH5Hl4EBWkEmXKvUYV86NiYaQHm8wGobWIvIJZH8Vd2q%2BEp31tVY%2BxChogcoeCtTEv0w0TV9IdIvfMfrHnIt4K9%2FSugT4euAS591VqNVWQ8ZnrqJSLd1%2FUQkNsWI9cyTkcpvLGXBz6eCPC414oZjzqvK7t8pahTM4qfkyLiPF5O304n2AeC%2Fe105At2bFox&X-Amz-Signature=44b4531660288dca5c8f006f6a6412a56e7a077c89dae9228ebf035c5fce3523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7WULCL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXfGKyh4mgMe%2BaHq%2F1mUVI5St5OFkDKxK4RMxsyP1dQIhAPU%2FuqyPmfOe%2Fh4Ls9%2B1BQKi5M0zZPdubghm%2FxYew288KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOYQVlWdhiScgIqQq3AMEAIA6kLnEeqYH3mIRYhbbXwr0OhdmvWbuEwIJun9ZtLXKWrRG2h721t9XNxuNjs%2B8Q%2FvAJ3zTmmRRBe%2FmbwkkKZaalBAYxl6lgMV5mxKRI7dQEkVYJ8bYdUjlIF0YAETSqGRcjPDlngZ0rurfgtJX6wJAxyx0TCWU7EpHffixwDsb6BzyiPQcY%2FEeZjlySbXVClguVv70lnhDOTlP86DTuZ2W26Gkob8XGyLMa%2FekP1%2FD7zOKOE1v30Y8DZG%2F2m9GmdhEgj37d6XuittXgezf2SrduSiluVE2MXs012P2pshfrj5Oq4RSksBNBqtNMb8EROu2UEMsdB3pXPnIYlDiMlNYef5TucuJeXS92mjM8A3Vp45V1G7jpWjlz8l7mlb9tlb7uY6C2Zsz0zOt2NZpPbysVR%2BIDIN%2BDuDYYV2Kv%2FEv7t2UH1FYsrsilU%2Fxf6y2uE3sLVtXUdBq7iHhsH0TWGy3Jz9aqpioqC7GP4DN2NJxXDsWBWTdNd7jpKzvMMiwfOVylQQ0UQP1Z%2BHydTdLvGO35WadKfqlSEcc8P51V4cqHnQBEklpekzblFFyssQdIfGVR%2FBq4u4t%2FuB9gFS2jwzi46oo7zQ77hmi5So5kyRgCu2KW8nomi4EkDDPz8fDBjqkAUrqpV4%2BOu5JDxCUpFdE9DLScGEzKBH5Hl4EBWkEmXKvUYV86NiYaQHm8wGobWIvIJZH8Vd2q%2BEp31tVY%2BxChogcoeCtTEv0w0TV9IdIvfMfrHnIt4K9%2FSugT4euAS591VqNVWQ8ZnrqJSLd1%2FUQkNsWI9cyTkcpvLGXBz6eCPC414oZjzqvK7t8pahTM4qfkyLiPF5O304n2AeC%2Fe105At2bFox&X-Amz-Signature=8580db64fcaf845695586fdba5c333bfe24a24b58e51af1f37f9fe8a6a5df194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7WULCL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXfGKyh4mgMe%2BaHq%2F1mUVI5St5OFkDKxK4RMxsyP1dQIhAPU%2FuqyPmfOe%2Fh4Ls9%2B1BQKi5M0zZPdubghm%2FxYew288KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOYQVlWdhiScgIqQq3AMEAIA6kLnEeqYH3mIRYhbbXwr0OhdmvWbuEwIJun9ZtLXKWrRG2h721t9XNxuNjs%2B8Q%2FvAJ3zTmmRRBe%2FmbwkkKZaalBAYxl6lgMV5mxKRI7dQEkVYJ8bYdUjlIF0YAETSqGRcjPDlngZ0rurfgtJX6wJAxyx0TCWU7EpHffixwDsb6BzyiPQcY%2FEeZjlySbXVClguVv70lnhDOTlP86DTuZ2W26Gkob8XGyLMa%2FekP1%2FD7zOKOE1v30Y8DZG%2F2m9GmdhEgj37d6XuittXgezf2SrduSiluVE2MXs012P2pshfrj5Oq4RSksBNBqtNMb8EROu2UEMsdB3pXPnIYlDiMlNYef5TucuJeXS92mjM8A3Vp45V1G7jpWjlz8l7mlb9tlb7uY6C2Zsz0zOt2NZpPbysVR%2BIDIN%2BDuDYYV2Kv%2FEv7t2UH1FYsrsilU%2Fxf6y2uE3sLVtXUdBq7iHhsH0TWGy3Jz9aqpioqC7GP4DN2NJxXDsWBWTdNd7jpKzvMMiwfOVylQQ0UQP1Z%2BHydTdLvGO35WadKfqlSEcc8P51V4cqHnQBEklpekzblFFyssQdIfGVR%2FBq4u4t%2FuB9gFS2jwzi46oo7zQ77hmi5So5kyRgCu2KW8nomi4EkDDPz8fDBjqkAUrqpV4%2BOu5JDxCUpFdE9DLScGEzKBH5Hl4EBWkEmXKvUYV86NiYaQHm8wGobWIvIJZH8Vd2q%2BEp31tVY%2BxChogcoeCtTEv0w0TV9IdIvfMfrHnIt4K9%2FSugT4euAS591VqNVWQ8ZnrqJSLd1%2FUQkNsWI9cyTkcpvLGXBz6eCPC414oZjzqvK7t8pahTM4qfkyLiPF5O304n2AeC%2Fe105At2bFox&X-Amz-Signature=0f50cff3a24960675c8a843da919c8519e13d511f62736e3a59aa20c8de2acf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7WULCL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXfGKyh4mgMe%2BaHq%2F1mUVI5St5OFkDKxK4RMxsyP1dQIhAPU%2FuqyPmfOe%2Fh4Ls9%2B1BQKi5M0zZPdubghm%2FxYew288KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOYQVlWdhiScgIqQq3AMEAIA6kLnEeqYH3mIRYhbbXwr0OhdmvWbuEwIJun9ZtLXKWrRG2h721t9XNxuNjs%2B8Q%2FvAJ3zTmmRRBe%2FmbwkkKZaalBAYxl6lgMV5mxKRI7dQEkVYJ8bYdUjlIF0YAETSqGRcjPDlngZ0rurfgtJX6wJAxyx0TCWU7EpHffixwDsb6BzyiPQcY%2FEeZjlySbXVClguVv70lnhDOTlP86DTuZ2W26Gkob8XGyLMa%2FekP1%2FD7zOKOE1v30Y8DZG%2F2m9GmdhEgj37d6XuittXgezf2SrduSiluVE2MXs012P2pshfrj5Oq4RSksBNBqtNMb8EROu2UEMsdB3pXPnIYlDiMlNYef5TucuJeXS92mjM8A3Vp45V1G7jpWjlz8l7mlb9tlb7uY6C2Zsz0zOt2NZpPbysVR%2BIDIN%2BDuDYYV2Kv%2FEv7t2UH1FYsrsilU%2Fxf6y2uE3sLVtXUdBq7iHhsH0TWGy3Jz9aqpioqC7GP4DN2NJxXDsWBWTdNd7jpKzvMMiwfOVylQQ0UQP1Z%2BHydTdLvGO35WadKfqlSEcc8P51V4cqHnQBEklpekzblFFyssQdIfGVR%2FBq4u4t%2FuB9gFS2jwzi46oo7zQ77hmi5So5kyRgCu2KW8nomi4EkDDPz8fDBjqkAUrqpV4%2BOu5JDxCUpFdE9DLScGEzKBH5Hl4EBWkEmXKvUYV86NiYaQHm8wGobWIvIJZH8Vd2q%2BEp31tVY%2BxChogcoeCtTEv0w0TV9IdIvfMfrHnIt4K9%2FSugT4euAS591VqNVWQ8ZnrqJSLd1%2FUQkNsWI9cyTkcpvLGXBz6eCPC414oZjzqvK7t8pahTM4qfkyLiPF5O304n2AeC%2Fe105At2bFox&X-Amz-Signature=33b2d2d78aaf39242e9d773e2359f95bc3f2ee432ee743bd5493bcacb04f361b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7WULCL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXfGKyh4mgMe%2BaHq%2F1mUVI5St5OFkDKxK4RMxsyP1dQIhAPU%2FuqyPmfOe%2Fh4Ls9%2B1BQKi5M0zZPdubghm%2FxYew288KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOYQVlWdhiScgIqQq3AMEAIA6kLnEeqYH3mIRYhbbXwr0OhdmvWbuEwIJun9ZtLXKWrRG2h721t9XNxuNjs%2B8Q%2FvAJ3zTmmRRBe%2FmbwkkKZaalBAYxl6lgMV5mxKRI7dQEkVYJ8bYdUjlIF0YAETSqGRcjPDlngZ0rurfgtJX6wJAxyx0TCWU7EpHffixwDsb6BzyiPQcY%2FEeZjlySbXVClguVv70lnhDOTlP86DTuZ2W26Gkob8XGyLMa%2FekP1%2FD7zOKOE1v30Y8DZG%2F2m9GmdhEgj37d6XuittXgezf2SrduSiluVE2MXs012P2pshfrj5Oq4RSksBNBqtNMb8EROu2UEMsdB3pXPnIYlDiMlNYef5TucuJeXS92mjM8A3Vp45V1G7jpWjlz8l7mlb9tlb7uY6C2Zsz0zOt2NZpPbysVR%2BIDIN%2BDuDYYV2Kv%2FEv7t2UH1FYsrsilU%2Fxf6y2uE3sLVtXUdBq7iHhsH0TWGy3Jz9aqpioqC7GP4DN2NJxXDsWBWTdNd7jpKzvMMiwfOVylQQ0UQP1Z%2BHydTdLvGO35WadKfqlSEcc8P51V4cqHnQBEklpekzblFFyssQdIfGVR%2FBq4u4t%2FuB9gFS2jwzi46oo7zQ77hmi5So5kyRgCu2KW8nomi4EkDDPz8fDBjqkAUrqpV4%2BOu5JDxCUpFdE9DLScGEzKBH5Hl4EBWkEmXKvUYV86NiYaQHm8wGobWIvIJZH8Vd2q%2BEp31tVY%2BxChogcoeCtTEv0w0TV9IdIvfMfrHnIt4K9%2FSugT4euAS591VqNVWQ8ZnrqJSLd1%2FUQkNsWI9cyTkcpvLGXBz6eCPC414oZjzqvK7t8pahTM4qfkyLiPF5O304n2AeC%2Fe105At2bFox&X-Amz-Signature=adb55880d0dd2f20e3a0cc0c5f8758a3affa99974d9bc2840451ad7a7f752168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7WULCL%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXfGKyh4mgMe%2BaHq%2F1mUVI5St5OFkDKxK4RMxsyP1dQIhAPU%2FuqyPmfOe%2Fh4Ls9%2B1BQKi5M0zZPdubghm%2FxYew288KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOYQVlWdhiScgIqQq3AMEAIA6kLnEeqYH3mIRYhbbXwr0OhdmvWbuEwIJun9ZtLXKWrRG2h721t9XNxuNjs%2B8Q%2FvAJ3zTmmRRBe%2FmbwkkKZaalBAYxl6lgMV5mxKRI7dQEkVYJ8bYdUjlIF0YAETSqGRcjPDlngZ0rurfgtJX6wJAxyx0TCWU7EpHffixwDsb6BzyiPQcY%2FEeZjlySbXVClguVv70lnhDOTlP86DTuZ2W26Gkob8XGyLMa%2FekP1%2FD7zOKOE1v30Y8DZG%2F2m9GmdhEgj37d6XuittXgezf2SrduSiluVE2MXs012P2pshfrj5Oq4RSksBNBqtNMb8EROu2UEMsdB3pXPnIYlDiMlNYef5TucuJeXS92mjM8A3Vp45V1G7jpWjlz8l7mlb9tlb7uY6C2Zsz0zOt2NZpPbysVR%2BIDIN%2BDuDYYV2Kv%2FEv7t2UH1FYsrsilU%2Fxf6y2uE3sLVtXUdBq7iHhsH0TWGy3Jz9aqpioqC7GP4DN2NJxXDsWBWTdNd7jpKzvMMiwfOVylQQ0UQP1Z%2BHydTdLvGO35WadKfqlSEcc8P51V4cqHnQBEklpekzblFFyssQdIfGVR%2FBq4u4t%2FuB9gFS2jwzi46oo7zQ77hmi5So5kyRgCu2KW8nomi4EkDDPz8fDBjqkAUrqpV4%2BOu5JDxCUpFdE9DLScGEzKBH5Hl4EBWkEmXKvUYV86NiYaQHm8wGobWIvIJZH8Vd2q%2BEp31tVY%2BxChogcoeCtTEv0w0TV9IdIvfMfrHnIt4K9%2FSugT4euAS591VqNVWQ8ZnrqJSLd1%2FUQkNsWI9cyTkcpvLGXBz6eCPC414oZjzqvK7t8pahTM4qfkyLiPF5O304n2AeC%2Fe105At2bFox&X-Amz-Signature=215babc8e4e997094d4b199ca3e38e45ded5d358d31e114403266a5236c564b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
