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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG57R67%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHUE6fpDbX%2BvGBLPrJiiSVNDI2yyK7uGbrA3xl%2FhJIK4AiBfZHM3t%2ByzG9dIEU9TDmTeTVzn3d3WDUBbfYXbyWdIyyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgGrNjfKTLp4rbsWVKtwD9oApUH8ehfSoUGo4QicRe9qmtwvlTPPYYlbC4deNj4X96N4HEmaEBOQJU77HbRoQN4a9vOJ2nO8FFIyQJ3f7Z3nED%2FRRelAeR60SrhjZ00k9qkNNymUGU%2BGiMvia7qfN%2BGmDr7WnMeMToQyhB6FZRo9X5CmjzohvzetETe3qUSUrwifhuJBxrLsJN2htZ45jmopob7HLjO4pFR4rTSfreNJk7GfiLmqnpYcnxWG93TqFcKSVBGPtR06ToNi6cBxFibUOPBXBPDzK96AAuaCKlBoU%2FMyCy2nX5mUxncgxisTq4N2d5n3ygQ4AV3Uudb9KFoGyD1SuNvSAmNy%2BS%2FbYC1CH2w9eB1oOSnLJTRiQ7bv1Q%2BtR13EU7%2B%2BFmDok3bas4ERGkUypJYxfBDTOYINOJNYBVN9YI1fzSd0%2Bfaqzfnqx30c2DpJm4RjXT6sDJ1Hi5wi95rO7fCTCeWvmo3B0IAsmg3WEDGbkxlgLyWgpf9YaCKjAbuTzYDAnOxMGZJsZGJf6kRLW92F0lPtuUx6XowA0MrZQuaGE83SG9MU%2FGmXHAXT9i7q560I9v%2B48%2BNgfUxl8N0Kn6kztLi6xCtzNXXOUXJ16fvlM574HJ546gIIByliT4vCrV5VPBeUwit2hvwY6pgEGS0GbzOcFr5G5yh1b5Eil1APIGGL5XhXhqPjNDAoDG4pPEaqHyXphez5BS9SBcID2Sjr2ohJDbRllu2Z0BVUZNIk65ZHMHF42LCABdhEAllIs3IrPUCMdrP8jAPNDCkbkvF3CHr6lt5GCHlbg41XNA9BaqXxZ1qoluWXnaeQSlQZzgXuNM29jEZkY2AB5v9ZoNYbt3QauUyWK%2BXjK6LbSN7wiTHf1&X-Amz-Signature=d6933c24a0afcc7b595494746e4bb6fcc80a397c2039e3141f9902b9614efd04&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG57R67%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHUE6fpDbX%2BvGBLPrJiiSVNDI2yyK7uGbrA3xl%2FhJIK4AiBfZHM3t%2ByzG9dIEU9TDmTeTVzn3d3WDUBbfYXbyWdIyyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgGrNjfKTLp4rbsWVKtwD9oApUH8ehfSoUGo4QicRe9qmtwvlTPPYYlbC4deNj4X96N4HEmaEBOQJU77HbRoQN4a9vOJ2nO8FFIyQJ3f7Z3nED%2FRRelAeR60SrhjZ00k9qkNNymUGU%2BGiMvia7qfN%2BGmDr7WnMeMToQyhB6FZRo9X5CmjzohvzetETe3qUSUrwifhuJBxrLsJN2htZ45jmopob7HLjO4pFR4rTSfreNJk7GfiLmqnpYcnxWG93TqFcKSVBGPtR06ToNi6cBxFibUOPBXBPDzK96AAuaCKlBoU%2FMyCy2nX5mUxncgxisTq4N2d5n3ygQ4AV3Uudb9KFoGyD1SuNvSAmNy%2BS%2FbYC1CH2w9eB1oOSnLJTRiQ7bv1Q%2BtR13EU7%2B%2BFmDok3bas4ERGkUypJYxfBDTOYINOJNYBVN9YI1fzSd0%2Bfaqzfnqx30c2DpJm4RjXT6sDJ1Hi5wi95rO7fCTCeWvmo3B0IAsmg3WEDGbkxlgLyWgpf9YaCKjAbuTzYDAnOxMGZJsZGJf6kRLW92F0lPtuUx6XowA0MrZQuaGE83SG9MU%2FGmXHAXT9i7q560I9v%2B48%2BNgfUxl8N0Kn6kztLi6xCtzNXXOUXJ16fvlM574HJ546gIIByliT4vCrV5VPBeUwit2hvwY6pgEGS0GbzOcFr5G5yh1b5Eil1APIGGL5XhXhqPjNDAoDG4pPEaqHyXphez5BS9SBcID2Sjr2ohJDbRllu2Z0BVUZNIk65ZHMHF42LCABdhEAllIs3IrPUCMdrP8jAPNDCkbkvF3CHr6lt5GCHlbg41XNA9BaqXxZ1qoluWXnaeQSlQZzgXuNM29jEZkY2AB5v9ZoNYbt3QauUyWK%2BXjK6LbSN7wiTHf1&X-Amz-Signature=8b061bb5d113db9c4d5bdc05ddc64a3c719b4c3df798eb997b679c2995f58a51&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG57R67%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHUE6fpDbX%2BvGBLPrJiiSVNDI2yyK7uGbrA3xl%2FhJIK4AiBfZHM3t%2ByzG9dIEU9TDmTeTVzn3d3WDUBbfYXbyWdIyyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgGrNjfKTLp4rbsWVKtwD9oApUH8ehfSoUGo4QicRe9qmtwvlTPPYYlbC4deNj4X96N4HEmaEBOQJU77HbRoQN4a9vOJ2nO8FFIyQJ3f7Z3nED%2FRRelAeR60SrhjZ00k9qkNNymUGU%2BGiMvia7qfN%2BGmDr7WnMeMToQyhB6FZRo9X5CmjzohvzetETe3qUSUrwifhuJBxrLsJN2htZ45jmopob7HLjO4pFR4rTSfreNJk7GfiLmqnpYcnxWG93TqFcKSVBGPtR06ToNi6cBxFibUOPBXBPDzK96AAuaCKlBoU%2FMyCy2nX5mUxncgxisTq4N2d5n3ygQ4AV3Uudb9KFoGyD1SuNvSAmNy%2BS%2FbYC1CH2w9eB1oOSnLJTRiQ7bv1Q%2BtR13EU7%2B%2BFmDok3bas4ERGkUypJYxfBDTOYINOJNYBVN9YI1fzSd0%2Bfaqzfnqx30c2DpJm4RjXT6sDJ1Hi5wi95rO7fCTCeWvmo3B0IAsmg3WEDGbkxlgLyWgpf9YaCKjAbuTzYDAnOxMGZJsZGJf6kRLW92F0lPtuUx6XowA0MrZQuaGE83SG9MU%2FGmXHAXT9i7q560I9v%2B48%2BNgfUxl8N0Kn6kztLi6xCtzNXXOUXJ16fvlM574HJ546gIIByliT4vCrV5VPBeUwit2hvwY6pgEGS0GbzOcFr5G5yh1b5Eil1APIGGL5XhXhqPjNDAoDG4pPEaqHyXphez5BS9SBcID2Sjr2ohJDbRllu2Z0BVUZNIk65ZHMHF42LCABdhEAllIs3IrPUCMdrP8jAPNDCkbkvF3CHr6lt5GCHlbg41XNA9BaqXxZ1qoluWXnaeQSlQZzgXuNM29jEZkY2AB5v9ZoNYbt3QauUyWK%2BXjK6LbSN7wiTHf1&X-Amz-Signature=f406de4650f1bbbfde06440a414b9f95637af9c3a153ff7f4a3d3adcf8dee788&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG57R67%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHUE6fpDbX%2BvGBLPrJiiSVNDI2yyK7uGbrA3xl%2FhJIK4AiBfZHM3t%2ByzG9dIEU9TDmTeTVzn3d3WDUBbfYXbyWdIyyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgGrNjfKTLp4rbsWVKtwD9oApUH8ehfSoUGo4QicRe9qmtwvlTPPYYlbC4deNj4X96N4HEmaEBOQJU77HbRoQN4a9vOJ2nO8FFIyQJ3f7Z3nED%2FRRelAeR60SrhjZ00k9qkNNymUGU%2BGiMvia7qfN%2BGmDr7WnMeMToQyhB6FZRo9X5CmjzohvzetETe3qUSUrwifhuJBxrLsJN2htZ45jmopob7HLjO4pFR4rTSfreNJk7GfiLmqnpYcnxWG93TqFcKSVBGPtR06ToNi6cBxFibUOPBXBPDzK96AAuaCKlBoU%2FMyCy2nX5mUxncgxisTq4N2d5n3ygQ4AV3Uudb9KFoGyD1SuNvSAmNy%2BS%2FbYC1CH2w9eB1oOSnLJTRiQ7bv1Q%2BtR13EU7%2B%2BFmDok3bas4ERGkUypJYxfBDTOYINOJNYBVN9YI1fzSd0%2Bfaqzfnqx30c2DpJm4RjXT6sDJ1Hi5wi95rO7fCTCeWvmo3B0IAsmg3WEDGbkxlgLyWgpf9YaCKjAbuTzYDAnOxMGZJsZGJf6kRLW92F0lPtuUx6XowA0MrZQuaGE83SG9MU%2FGmXHAXT9i7q560I9v%2B48%2BNgfUxl8N0Kn6kztLi6xCtzNXXOUXJ16fvlM574HJ546gIIByliT4vCrV5VPBeUwit2hvwY6pgEGS0GbzOcFr5G5yh1b5Eil1APIGGL5XhXhqPjNDAoDG4pPEaqHyXphez5BS9SBcID2Sjr2ohJDbRllu2Z0BVUZNIk65ZHMHF42LCABdhEAllIs3IrPUCMdrP8jAPNDCkbkvF3CHr6lt5GCHlbg41XNA9BaqXxZ1qoluWXnaeQSlQZzgXuNM29jEZkY2AB5v9ZoNYbt3QauUyWK%2BXjK6LbSN7wiTHf1&X-Amz-Signature=bbbb33a3b3f51b8caeddfab278049c8c7ce8e2509e61e36f079f15db043babe7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG57R67%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHUE6fpDbX%2BvGBLPrJiiSVNDI2yyK7uGbrA3xl%2FhJIK4AiBfZHM3t%2ByzG9dIEU9TDmTeTVzn3d3WDUBbfYXbyWdIyyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgGrNjfKTLp4rbsWVKtwD9oApUH8ehfSoUGo4QicRe9qmtwvlTPPYYlbC4deNj4X96N4HEmaEBOQJU77HbRoQN4a9vOJ2nO8FFIyQJ3f7Z3nED%2FRRelAeR60SrhjZ00k9qkNNymUGU%2BGiMvia7qfN%2BGmDr7WnMeMToQyhB6FZRo9X5CmjzohvzetETe3qUSUrwifhuJBxrLsJN2htZ45jmopob7HLjO4pFR4rTSfreNJk7GfiLmqnpYcnxWG93TqFcKSVBGPtR06ToNi6cBxFibUOPBXBPDzK96AAuaCKlBoU%2FMyCy2nX5mUxncgxisTq4N2d5n3ygQ4AV3Uudb9KFoGyD1SuNvSAmNy%2BS%2FbYC1CH2w9eB1oOSnLJTRiQ7bv1Q%2BtR13EU7%2B%2BFmDok3bas4ERGkUypJYxfBDTOYINOJNYBVN9YI1fzSd0%2Bfaqzfnqx30c2DpJm4RjXT6sDJ1Hi5wi95rO7fCTCeWvmo3B0IAsmg3WEDGbkxlgLyWgpf9YaCKjAbuTzYDAnOxMGZJsZGJf6kRLW92F0lPtuUx6XowA0MrZQuaGE83SG9MU%2FGmXHAXT9i7q560I9v%2B48%2BNgfUxl8N0Kn6kztLi6xCtzNXXOUXJ16fvlM574HJ546gIIByliT4vCrV5VPBeUwit2hvwY6pgEGS0GbzOcFr5G5yh1b5Eil1APIGGL5XhXhqPjNDAoDG4pPEaqHyXphez5BS9SBcID2Sjr2ohJDbRllu2Z0BVUZNIk65ZHMHF42LCABdhEAllIs3IrPUCMdrP8jAPNDCkbkvF3CHr6lt5GCHlbg41XNA9BaqXxZ1qoluWXnaeQSlQZzgXuNM29jEZkY2AB5v9ZoNYbt3QauUyWK%2BXjK6LbSN7wiTHf1&X-Amz-Signature=bb33a8aab2c6676898de80b487373a7a1644259fae7445861cba315f76f8fb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IG57R67%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHUE6fpDbX%2BvGBLPrJiiSVNDI2yyK7uGbrA3xl%2FhJIK4AiBfZHM3t%2ByzG9dIEU9TDmTeTVzn3d3WDUBbfYXbyWdIyyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMgGrNjfKTLp4rbsWVKtwD9oApUH8ehfSoUGo4QicRe9qmtwvlTPPYYlbC4deNj4X96N4HEmaEBOQJU77HbRoQN4a9vOJ2nO8FFIyQJ3f7Z3nED%2FRRelAeR60SrhjZ00k9qkNNymUGU%2BGiMvia7qfN%2BGmDr7WnMeMToQyhB6FZRo9X5CmjzohvzetETe3qUSUrwifhuJBxrLsJN2htZ45jmopob7HLjO4pFR4rTSfreNJk7GfiLmqnpYcnxWG93TqFcKSVBGPtR06ToNi6cBxFibUOPBXBPDzK96AAuaCKlBoU%2FMyCy2nX5mUxncgxisTq4N2d5n3ygQ4AV3Uudb9KFoGyD1SuNvSAmNy%2BS%2FbYC1CH2w9eB1oOSnLJTRiQ7bv1Q%2BtR13EU7%2B%2BFmDok3bas4ERGkUypJYxfBDTOYINOJNYBVN9YI1fzSd0%2Bfaqzfnqx30c2DpJm4RjXT6sDJ1Hi5wi95rO7fCTCeWvmo3B0IAsmg3WEDGbkxlgLyWgpf9YaCKjAbuTzYDAnOxMGZJsZGJf6kRLW92F0lPtuUx6XowA0MrZQuaGE83SG9MU%2FGmXHAXT9i7q560I9v%2B48%2BNgfUxl8N0Kn6kztLi6xCtzNXXOUXJ16fvlM574HJ546gIIByliT4vCrV5VPBeUwit2hvwY6pgEGS0GbzOcFr5G5yh1b5Eil1APIGGL5XhXhqPjNDAoDG4pPEaqHyXphez5BS9SBcID2Sjr2ohJDbRllu2Z0BVUZNIk65ZHMHF42LCABdhEAllIs3IrPUCMdrP8jAPNDCkbkvF3CHr6lt5GCHlbg41XNA9BaqXxZ1qoluWXnaeQSlQZzgXuNM29jEZkY2AB5v9ZoNYbt3QauUyWK%2BXjK6LbSN7wiTHf1&X-Amz-Signature=6836e14adfbd030843cb1511a84a8c33bd9b149f15342982a936977768b2cf1c&X-Amz-SignedHeaders=host&x-id=GetObject)
