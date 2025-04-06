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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK75XDS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNv4JsWrpmIQD%2FzF1aDANlgjYTTvFMpzAOmkGhC1m60AiAPC04q0wyJVwHHJBhXAdkWdpkAYiMjJNbO%2BzfLR8ftISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuPsLzQQVk9axLpb3KtwD20tkRUfH2beyOU0MjTyntQTw%2F%2FC9NbDmuQMfzzrZ1TTs0tOVRSeMGbD1jsnuQ71xZseHhmVzjTR9bJTdVkwrsW9Qs9jkYPWr9hDwlnAxjnlCcypHg9sTm0b2bKW0bvAsSsLsfmKkMUFAko83I4wQcOXAxMAhfdKKvTqypfLB8thE9HaEaE1W%2B3nCvk4ew77d%2BhSgYpcUqgkw%2BjKrFtars1GhLW7ljY1KZKxclIf6WZHtHp9WT3L5scNEK%2B8Hv6tcXvzh9oyDpL2eXPgnWu8ZB9c0s1Bh0QzEPBNBFEcxPtsh9Aj76f%2FGFdXfsw3B7dLcMMED5dEfRBYkbSynCwIbb7FkPz%2BLyF8D9F8L78%2FdRWV8xxWTIb9EAH5rFp3YuvE2xECVtYVfNMc2osi1dHxjx5oIH2djayzSdV8ENDIN4ktAoLdu65Sx%2FlywisWoOQu7IpNd%2BSD7w%2BIxnHNrTcIRMPOgQ%2FcshKYPVbT1BUc7xW0q4Vmlx691DlZR2XA7smONS0tr3CldbUxWAUZzpvWprrCtWdSRvB7DuOjJR87MYMfaY9wI2PD6IwqaDFN5pI9Hqncvcf7Mixz48hpVFkRrZ4KCsbIbUJKXpiOAU5C%2FZrI5FoM4GB%2BKz%2Fh6gtowoZ7LvwY6pgEr8HmDksaey3YXZbOlzKreoE14Y9Xn5bi3FMP7aSn9KZmicj8gL3Zp7GXMg857VSWTk0T%2FGDWR7bxwa96zyezxGvRYKGPHq%2FVL3CmCFY%2FeLZbvJpt8pIOxcCWSK2AU2zIuK0Lq8L%2FVSBEBxIdf1CTMlXDcV7zqsXh7o5ivfxOojFubblaL88tbM0CvYuQi78Timadn9POtjL8JmvHreS9zlEl3S335&X-Amz-Signature=827f3ecca5bca783779e93519599f672aeed35365ba9ff77d33c82d57813957e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK75XDS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNv4JsWrpmIQD%2FzF1aDANlgjYTTvFMpzAOmkGhC1m60AiAPC04q0wyJVwHHJBhXAdkWdpkAYiMjJNbO%2BzfLR8ftISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuPsLzQQVk9axLpb3KtwD20tkRUfH2beyOU0MjTyntQTw%2F%2FC9NbDmuQMfzzrZ1TTs0tOVRSeMGbD1jsnuQ71xZseHhmVzjTR9bJTdVkwrsW9Qs9jkYPWr9hDwlnAxjnlCcypHg9sTm0b2bKW0bvAsSsLsfmKkMUFAko83I4wQcOXAxMAhfdKKvTqypfLB8thE9HaEaE1W%2B3nCvk4ew77d%2BhSgYpcUqgkw%2BjKrFtars1GhLW7ljY1KZKxclIf6WZHtHp9WT3L5scNEK%2B8Hv6tcXvzh9oyDpL2eXPgnWu8ZB9c0s1Bh0QzEPBNBFEcxPtsh9Aj76f%2FGFdXfsw3B7dLcMMED5dEfRBYkbSynCwIbb7FkPz%2BLyF8D9F8L78%2FdRWV8xxWTIb9EAH5rFp3YuvE2xECVtYVfNMc2osi1dHxjx5oIH2djayzSdV8ENDIN4ktAoLdu65Sx%2FlywisWoOQu7IpNd%2BSD7w%2BIxnHNrTcIRMPOgQ%2FcshKYPVbT1BUc7xW0q4Vmlx691DlZR2XA7smONS0tr3CldbUxWAUZzpvWprrCtWdSRvB7DuOjJR87MYMfaY9wI2PD6IwqaDFN5pI9Hqncvcf7Mixz48hpVFkRrZ4KCsbIbUJKXpiOAU5C%2FZrI5FoM4GB%2BKz%2Fh6gtowoZ7LvwY6pgEr8HmDksaey3YXZbOlzKreoE14Y9Xn5bi3FMP7aSn9KZmicj8gL3Zp7GXMg857VSWTk0T%2FGDWR7bxwa96zyezxGvRYKGPHq%2FVL3CmCFY%2FeLZbvJpt8pIOxcCWSK2AU2zIuK0Lq8L%2FVSBEBxIdf1CTMlXDcV7zqsXh7o5ivfxOojFubblaL88tbM0CvYuQi78Timadn9POtjL8JmvHreS9zlEl3S335&X-Amz-Signature=a9b0e2ab4b8cd846c26965714c05837917a3bbdc5a82c61ccdd3633e8c93ca9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK75XDS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNv4JsWrpmIQD%2FzF1aDANlgjYTTvFMpzAOmkGhC1m60AiAPC04q0wyJVwHHJBhXAdkWdpkAYiMjJNbO%2BzfLR8ftISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuPsLzQQVk9axLpb3KtwD20tkRUfH2beyOU0MjTyntQTw%2F%2FC9NbDmuQMfzzrZ1TTs0tOVRSeMGbD1jsnuQ71xZseHhmVzjTR9bJTdVkwrsW9Qs9jkYPWr9hDwlnAxjnlCcypHg9sTm0b2bKW0bvAsSsLsfmKkMUFAko83I4wQcOXAxMAhfdKKvTqypfLB8thE9HaEaE1W%2B3nCvk4ew77d%2BhSgYpcUqgkw%2BjKrFtars1GhLW7ljY1KZKxclIf6WZHtHp9WT3L5scNEK%2B8Hv6tcXvzh9oyDpL2eXPgnWu8ZB9c0s1Bh0QzEPBNBFEcxPtsh9Aj76f%2FGFdXfsw3B7dLcMMED5dEfRBYkbSynCwIbb7FkPz%2BLyF8D9F8L78%2FdRWV8xxWTIb9EAH5rFp3YuvE2xECVtYVfNMc2osi1dHxjx5oIH2djayzSdV8ENDIN4ktAoLdu65Sx%2FlywisWoOQu7IpNd%2BSD7w%2BIxnHNrTcIRMPOgQ%2FcshKYPVbT1BUc7xW0q4Vmlx691DlZR2XA7smONS0tr3CldbUxWAUZzpvWprrCtWdSRvB7DuOjJR87MYMfaY9wI2PD6IwqaDFN5pI9Hqncvcf7Mixz48hpVFkRrZ4KCsbIbUJKXpiOAU5C%2FZrI5FoM4GB%2BKz%2Fh6gtowoZ7LvwY6pgEr8HmDksaey3YXZbOlzKreoE14Y9Xn5bi3FMP7aSn9KZmicj8gL3Zp7GXMg857VSWTk0T%2FGDWR7bxwa96zyezxGvRYKGPHq%2FVL3CmCFY%2FeLZbvJpt8pIOxcCWSK2AU2zIuK0Lq8L%2FVSBEBxIdf1CTMlXDcV7zqsXh7o5ivfxOojFubblaL88tbM0CvYuQi78Timadn9POtjL8JmvHreS9zlEl3S335&X-Amz-Signature=1758c30a6332ad6a5a42688b9e9b3b9147cf10996baed0aa5f49141d9c18afde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK75XDS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNv4JsWrpmIQD%2FzF1aDANlgjYTTvFMpzAOmkGhC1m60AiAPC04q0wyJVwHHJBhXAdkWdpkAYiMjJNbO%2BzfLR8ftISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuPsLzQQVk9axLpb3KtwD20tkRUfH2beyOU0MjTyntQTw%2F%2FC9NbDmuQMfzzrZ1TTs0tOVRSeMGbD1jsnuQ71xZseHhmVzjTR9bJTdVkwrsW9Qs9jkYPWr9hDwlnAxjnlCcypHg9sTm0b2bKW0bvAsSsLsfmKkMUFAko83I4wQcOXAxMAhfdKKvTqypfLB8thE9HaEaE1W%2B3nCvk4ew77d%2BhSgYpcUqgkw%2BjKrFtars1GhLW7ljY1KZKxclIf6WZHtHp9WT3L5scNEK%2B8Hv6tcXvzh9oyDpL2eXPgnWu8ZB9c0s1Bh0QzEPBNBFEcxPtsh9Aj76f%2FGFdXfsw3B7dLcMMED5dEfRBYkbSynCwIbb7FkPz%2BLyF8D9F8L78%2FdRWV8xxWTIb9EAH5rFp3YuvE2xECVtYVfNMc2osi1dHxjx5oIH2djayzSdV8ENDIN4ktAoLdu65Sx%2FlywisWoOQu7IpNd%2BSD7w%2BIxnHNrTcIRMPOgQ%2FcshKYPVbT1BUc7xW0q4Vmlx691DlZR2XA7smONS0tr3CldbUxWAUZzpvWprrCtWdSRvB7DuOjJR87MYMfaY9wI2PD6IwqaDFN5pI9Hqncvcf7Mixz48hpVFkRrZ4KCsbIbUJKXpiOAU5C%2FZrI5FoM4GB%2BKz%2Fh6gtowoZ7LvwY6pgEr8HmDksaey3YXZbOlzKreoE14Y9Xn5bi3FMP7aSn9KZmicj8gL3Zp7GXMg857VSWTk0T%2FGDWR7bxwa96zyezxGvRYKGPHq%2FVL3CmCFY%2FeLZbvJpt8pIOxcCWSK2AU2zIuK0Lq8L%2FVSBEBxIdf1CTMlXDcV7zqsXh7o5ivfxOojFubblaL88tbM0CvYuQi78Timadn9POtjL8JmvHreS9zlEl3S335&X-Amz-Signature=db1b692d4611aaac8c1ce17c32e522c46106f9e997fc301e60b8a9ac8522a48a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK75XDS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNv4JsWrpmIQD%2FzF1aDANlgjYTTvFMpzAOmkGhC1m60AiAPC04q0wyJVwHHJBhXAdkWdpkAYiMjJNbO%2BzfLR8ftISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuPsLzQQVk9axLpb3KtwD20tkRUfH2beyOU0MjTyntQTw%2F%2FC9NbDmuQMfzzrZ1TTs0tOVRSeMGbD1jsnuQ71xZseHhmVzjTR9bJTdVkwrsW9Qs9jkYPWr9hDwlnAxjnlCcypHg9sTm0b2bKW0bvAsSsLsfmKkMUFAko83I4wQcOXAxMAhfdKKvTqypfLB8thE9HaEaE1W%2B3nCvk4ew77d%2BhSgYpcUqgkw%2BjKrFtars1GhLW7ljY1KZKxclIf6WZHtHp9WT3L5scNEK%2B8Hv6tcXvzh9oyDpL2eXPgnWu8ZB9c0s1Bh0QzEPBNBFEcxPtsh9Aj76f%2FGFdXfsw3B7dLcMMED5dEfRBYkbSynCwIbb7FkPz%2BLyF8D9F8L78%2FdRWV8xxWTIb9EAH5rFp3YuvE2xECVtYVfNMc2osi1dHxjx5oIH2djayzSdV8ENDIN4ktAoLdu65Sx%2FlywisWoOQu7IpNd%2BSD7w%2BIxnHNrTcIRMPOgQ%2FcshKYPVbT1BUc7xW0q4Vmlx691DlZR2XA7smONS0tr3CldbUxWAUZzpvWprrCtWdSRvB7DuOjJR87MYMfaY9wI2PD6IwqaDFN5pI9Hqncvcf7Mixz48hpVFkRrZ4KCsbIbUJKXpiOAU5C%2FZrI5FoM4GB%2BKz%2Fh6gtowoZ7LvwY6pgEr8HmDksaey3YXZbOlzKreoE14Y9Xn5bi3FMP7aSn9KZmicj8gL3Zp7GXMg857VSWTk0T%2FGDWR7bxwa96zyezxGvRYKGPHq%2FVL3CmCFY%2FeLZbvJpt8pIOxcCWSK2AU2zIuK0Lq8L%2FVSBEBxIdf1CTMlXDcV7zqsXh7o5ivfxOojFubblaL88tbM0CvYuQi78Timadn9POtjL8JmvHreS9zlEl3S335&X-Amz-Signature=aa3ec9385e749a966d0ec045e1a5e4299c5aadbe2d3977a30926bd455bdb1eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK75XDS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNv4JsWrpmIQD%2FzF1aDANlgjYTTvFMpzAOmkGhC1m60AiAPC04q0wyJVwHHJBhXAdkWdpkAYiMjJNbO%2BzfLR8ftISr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuPsLzQQVk9axLpb3KtwD20tkRUfH2beyOU0MjTyntQTw%2F%2FC9NbDmuQMfzzrZ1TTs0tOVRSeMGbD1jsnuQ71xZseHhmVzjTR9bJTdVkwrsW9Qs9jkYPWr9hDwlnAxjnlCcypHg9sTm0b2bKW0bvAsSsLsfmKkMUFAko83I4wQcOXAxMAhfdKKvTqypfLB8thE9HaEaE1W%2B3nCvk4ew77d%2BhSgYpcUqgkw%2BjKrFtars1GhLW7ljY1KZKxclIf6WZHtHp9WT3L5scNEK%2B8Hv6tcXvzh9oyDpL2eXPgnWu8ZB9c0s1Bh0QzEPBNBFEcxPtsh9Aj76f%2FGFdXfsw3B7dLcMMED5dEfRBYkbSynCwIbb7FkPz%2BLyF8D9F8L78%2FdRWV8xxWTIb9EAH5rFp3YuvE2xECVtYVfNMc2osi1dHxjx5oIH2djayzSdV8ENDIN4ktAoLdu65Sx%2FlywisWoOQu7IpNd%2BSD7w%2BIxnHNrTcIRMPOgQ%2FcshKYPVbT1BUc7xW0q4Vmlx691DlZR2XA7smONS0tr3CldbUxWAUZzpvWprrCtWdSRvB7DuOjJR87MYMfaY9wI2PD6IwqaDFN5pI9Hqncvcf7Mixz48hpVFkRrZ4KCsbIbUJKXpiOAU5C%2FZrI5FoM4GB%2BKz%2Fh6gtowoZ7LvwY6pgEr8HmDksaey3YXZbOlzKreoE14Y9Xn5bi3FMP7aSn9KZmicj8gL3Zp7GXMg857VSWTk0T%2FGDWR7bxwa96zyezxGvRYKGPHq%2FVL3CmCFY%2FeLZbvJpt8pIOxcCWSK2AU2zIuK0Lq8L%2FVSBEBxIdf1CTMlXDcV7zqsXh7o5ivfxOojFubblaL88tbM0CvYuQi78Timadn9POtjL8JmvHreS9zlEl3S335&X-Amz-Signature=e8c4518ffc245508a86b7555609e1c90edbd2215cebf30417497c5f0b6139799&X-Amz-SignedHeaders=host&x-id=GetObject)
