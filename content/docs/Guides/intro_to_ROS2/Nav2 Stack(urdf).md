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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=d1fd7efb13e972558db64dbd96000108972f38c34857b8c97fcd376a6b884841&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=733138c81c16bac6d1b0b23bd37f880ba00a0ae259015ca9626198119bebe440&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=e98145cdddaaf7fc051867575f590f6f71ada7d0daf51e6f19683122212442c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=cf5264d6159ec49f74de444b90115c0ca089179319e70872806394f58ef8ef05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=666aa7ec2a5f7b6e53deb26b50f3f6a5ceb1845529545e8af9c5ea42c5bf5d93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TZSJG4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCWffPQqYgcGf%2FoQlmK45Kv1LPgkti7RL3xe%2F1plNfNtgIhAI8qW6ilyEt%2FjXYslDvQXfOuXdf2%2FPgCsAne1OMa0qhJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyXLsF0JcmMsQNyicq3AO9iS%2B08CninAnQrI6PQWpT7xCXVMfl3eB0DBcJRhJ7eh49lTXLwHl%2FD5z%2FCGM3HlFPDsTUw3VAwlh9C5BYfX5sL4KN9kRwpw%2FOBdEZIJXBomsrDa%2BUmpMdtcVGAm6gfFCRmJaAIc9Veazf%2FoXjQZGBMnMvqBl3xfSwc1rZf5ReaQUeFNYueAHTT9g7ggn%2BgNol98Nd9e%2F%2BGP%2BT8RsNC4ZpFBzx%2BA%2Fn18ffiE4PayQkSZkdCBQMtHIvr7%2BNElkaBLWHotLXelRyPIr9ZzIvSaQybXBkFyHIvADLXg7h1fSbPdTua40Jm9Biu2UTfy6Rrhgjm20JblZpxEgC0FT2D%2FH5SqyxOqAc4xFEpyXsPLDaTl9h4ASMA4YLsjyM81QbgNQOGBvu3BMY6XkKS%2F1hlZFM4MAywZXWBW%2B6EXVZ6dLihywSNa1MTsNd58CnU3j2UDPzKWrqjM25TfhoU%2Fszu7lEy1GhYodLhrojy6kbVyQP5%2FaX2MGa7XNVNr1Gd1PMlkzcwJ%2Bq0Jfg%2BqpPsaeTugdaD3nwXmiXzRZAuax3j6vFjMK6a%2F1l1BRqIkuDBQiZvaZeSdmfpPBkAE%2BOhax8o%2FsbnXg%2FFlwp%2BgeOc5qM%2BRF9KtdZ6fxDvMgejtywKjCCwr%2FBBjqkAZgIg0XsAgJP4VQH8PbTuWPBvaVifV8waCnh5Nuc5TMyGis9N%2BIlWusQdbdb8tGbVwWWeAjr9nN2IMwTVVeVXWzQzdBIS9qT1xzyphT8rQpawuKiRcJUubUvs3O4%2Fux9JcEDXFWJcNB2yUf3%2FNOJV%2FP8CjKa%2BHQWAOPjNWLXqFQ2je%2FJlirsHVssL8t9g6kzp3lkUqtCo6A2Y7Vi2KmkPzETKluY&X-Amz-Signature=e91dcdd8fecc2736d293e5bfc124518443d58d8a43d1d721ac25e2b58d26f7b2&X-Amz-SignedHeaders=host&x-id=GetObject)
