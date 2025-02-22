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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQKZIKV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjHrYeIZFnZn3ZGhRcTPFxPzASr841yGHY6lDM33O3gIhANBQhKTU0oyoPk36JaX7kuQb3u35%2FZWdcnH6z6uW%2BHlyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xLyb69Srn2fE7xMq3AMKigGQTQ098NaVsSUyPpWoo%2FZoreNA039Vol9vTzNoxJ3q9NW5pX4v4b%2Fo6SfeUfYD4HjrJnHsImRt5huNkYSUSbjIzkpmtZWx%2FsNVy6NwsOPj4UxNStAJOFnMZEtDY8lseZ4%2BKgVZuntEa2CcSmNXkPt6oN9ohZZ%2B52h90OpAAAcCw0h5fzPME941fjOFahNtd4ESUMRZrC09PvEtUbVnh3U5bfLK3%2Bm8t0Cm4U1gtVeDr8FMHCOSspsRCMiH%2BFL3w66MEI3YcjtOzyHEMaDTxGJ9fdxFCqD3aiZUZ1DdllYWhTfwUe3PPMz%2FK5rVq6uB1eGPLwq0xbsQtOcjwGoI8Sqv8X%2BdszpzpR%2FwoG4FNoiLdpwce8BFWSccKXn%2FoRUS0i1WrifbKxPOUA5v1Y3095cSQwPewJZ0iF8p73IF7er8TwJKOhlXVAh9wA6WrbtH7YxqXKuqt%2BqJiWL7dIROItI1mWp9a1iLOL3jV8VPnbY0rUvdOExM%2BhNUhxz%2Brj3bCiWiYxtIJnI7G0EjBNK1fRdG5vKn3fHjGimaAUl%2F05mUqBjGyJNUpLpfBPaPsEb067UGY1SbHVjHTE1%2BRCopt0o1GR4GKF6KquHNZcl6ORooFfE6Oake7Z%2FyHDDhzOe9BjqkAYW%2Fzsvb1NqE8uFfcz7MjY%2FCJ%2BiD%2BZxB3o6JWfstXsDutX%2BXVg0nSOs2HbSqdwUSqcuFUbN1MaS81OZztl%2ByLQvSdwy19zU5SETeifmu7F0HObFAFaaRxknggTbjKP5vjGoCaFvcC4C78HJl4nfabJLrAI7nBClPcsKISBEmsfcOVal%2F00VwpywnChbST0vP2IczmD0ibbdXFtnM4j9OIN%2BTa6YH&X-Amz-Signature=22f3496fbb88d69d2aec9249e2ee6e3e73e0dc8c123ecd3af36af0cfd78e3290&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQKZIKV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjHrYeIZFnZn3ZGhRcTPFxPzASr841yGHY6lDM33O3gIhANBQhKTU0oyoPk36JaX7kuQb3u35%2FZWdcnH6z6uW%2BHlyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xLyb69Srn2fE7xMq3AMKigGQTQ098NaVsSUyPpWoo%2FZoreNA039Vol9vTzNoxJ3q9NW5pX4v4b%2Fo6SfeUfYD4HjrJnHsImRt5huNkYSUSbjIzkpmtZWx%2FsNVy6NwsOPj4UxNStAJOFnMZEtDY8lseZ4%2BKgVZuntEa2CcSmNXkPt6oN9ohZZ%2B52h90OpAAAcCw0h5fzPME941fjOFahNtd4ESUMRZrC09PvEtUbVnh3U5bfLK3%2Bm8t0Cm4U1gtVeDr8FMHCOSspsRCMiH%2BFL3w66MEI3YcjtOzyHEMaDTxGJ9fdxFCqD3aiZUZ1DdllYWhTfwUe3PPMz%2FK5rVq6uB1eGPLwq0xbsQtOcjwGoI8Sqv8X%2BdszpzpR%2FwoG4FNoiLdpwce8BFWSccKXn%2FoRUS0i1WrifbKxPOUA5v1Y3095cSQwPewJZ0iF8p73IF7er8TwJKOhlXVAh9wA6WrbtH7YxqXKuqt%2BqJiWL7dIROItI1mWp9a1iLOL3jV8VPnbY0rUvdOExM%2BhNUhxz%2Brj3bCiWiYxtIJnI7G0EjBNK1fRdG5vKn3fHjGimaAUl%2F05mUqBjGyJNUpLpfBPaPsEb067UGY1SbHVjHTE1%2BRCopt0o1GR4GKF6KquHNZcl6ORooFfE6Oake7Z%2FyHDDhzOe9BjqkAYW%2Fzsvb1NqE8uFfcz7MjY%2FCJ%2BiD%2BZxB3o6JWfstXsDutX%2BXVg0nSOs2HbSqdwUSqcuFUbN1MaS81OZztl%2ByLQvSdwy19zU5SETeifmu7F0HObFAFaaRxknggTbjKP5vjGoCaFvcC4C78HJl4nfabJLrAI7nBClPcsKISBEmsfcOVal%2F00VwpywnChbST0vP2IczmD0ibbdXFtnM4j9OIN%2BTa6YH&X-Amz-Signature=9cbc07256d5c189c6c0a59b056fc3a3e508c869852b26e63d70d382554c7814b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQKZIKV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjHrYeIZFnZn3ZGhRcTPFxPzASr841yGHY6lDM33O3gIhANBQhKTU0oyoPk36JaX7kuQb3u35%2FZWdcnH6z6uW%2BHlyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xLyb69Srn2fE7xMq3AMKigGQTQ098NaVsSUyPpWoo%2FZoreNA039Vol9vTzNoxJ3q9NW5pX4v4b%2Fo6SfeUfYD4HjrJnHsImRt5huNkYSUSbjIzkpmtZWx%2FsNVy6NwsOPj4UxNStAJOFnMZEtDY8lseZ4%2BKgVZuntEa2CcSmNXkPt6oN9ohZZ%2B52h90OpAAAcCw0h5fzPME941fjOFahNtd4ESUMRZrC09PvEtUbVnh3U5bfLK3%2Bm8t0Cm4U1gtVeDr8FMHCOSspsRCMiH%2BFL3w66MEI3YcjtOzyHEMaDTxGJ9fdxFCqD3aiZUZ1DdllYWhTfwUe3PPMz%2FK5rVq6uB1eGPLwq0xbsQtOcjwGoI8Sqv8X%2BdszpzpR%2FwoG4FNoiLdpwce8BFWSccKXn%2FoRUS0i1WrifbKxPOUA5v1Y3095cSQwPewJZ0iF8p73IF7er8TwJKOhlXVAh9wA6WrbtH7YxqXKuqt%2BqJiWL7dIROItI1mWp9a1iLOL3jV8VPnbY0rUvdOExM%2BhNUhxz%2Brj3bCiWiYxtIJnI7G0EjBNK1fRdG5vKn3fHjGimaAUl%2F05mUqBjGyJNUpLpfBPaPsEb067UGY1SbHVjHTE1%2BRCopt0o1GR4GKF6KquHNZcl6ORooFfE6Oake7Z%2FyHDDhzOe9BjqkAYW%2Fzsvb1NqE8uFfcz7MjY%2FCJ%2BiD%2BZxB3o6JWfstXsDutX%2BXVg0nSOs2HbSqdwUSqcuFUbN1MaS81OZztl%2ByLQvSdwy19zU5SETeifmu7F0HObFAFaaRxknggTbjKP5vjGoCaFvcC4C78HJl4nfabJLrAI7nBClPcsKISBEmsfcOVal%2F00VwpywnChbST0vP2IczmD0ibbdXFtnM4j9OIN%2BTa6YH&X-Amz-Signature=8cc012b65b6a4bc7a022c4102af6032918ff6fb3baca5426d1c63582eafe53f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQKZIKV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjHrYeIZFnZn3ZGhRcTPFxPzASr841yGHY6lDM33O3gIhANBQhKTU0oyoPk36JaX7kuQb3u35%2FZWdcnH6z6uW%2BHlyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xLyb69Srn2fE7xMq3AMKigGQTQ098NaVsSUyPpWoo%2FZoreNA039Vol9vTzNoxJ3q9NW5pX4v4b%2Fo6SfeUfYD4HjrJnHsImRt5huNkYSUSbjIzkpmtZWx%2FsNVy6NwsOPj4UxNStAJOFnMZEtDY8lseZ4%2BKgVZuntEa2CcSmNXkPt6oN9ohZZ%2B52h90OpAAAcCw0h5fzPME941fjOFahNtd4ESUMRZrC09PvEtUbVnh3U5bfLK3%2Bm8t0Cm4U1gtVeDr8FMHCOSspsRCMiH%2BFL3w66MEI3YcjtOzyHEMaDTxGJ9fdxFCqD3aiZUZ1DdllYWhTfwUe3PPMz%2FK5rVq6uB1eGPLwq0xbsQtOcjwGoI8Sqv8X%2BdszpzpR%2FwoG4FNoiLdpwce8BFWSccKXn%2FoRUS0i1WrifbKxPOUA5v1Y3095cSQwPewJZ0iF8p73IF7er8TwJKOhlXVAh9wA6WrbtH7YxqXKuqt%2BqJiWL7dIROItI1mWp9a1iLOL3jV8VPnbY0rUvdOExM%2BhNUhxz%2Brj3bCiWiYxtIJnI7G0EjBNK1fRdG5vKn3fHjGimaAUl%2F05mUqBjGyJNUpLpfBPaPsEb067UGY1SbHVjHTE1%2BRCopt0o1GR4GKF6KquHNZcl6ORooFfE6Oake7Z%2FyHDDhzOe9BjqkAYW%2Fzsvb1NqE8uFfcz7MjY%2FCJ%2BiD%2BZxB3o6JWfstXsDutX%2BXVg0nSOs2HbSqdwUSqcuFUbN1MaS81OZztl%2ByLQvSdwy19zU5SETeifmu7F0HObFAFaaRxknggTbjKP5vjGoCaFvcC4C78HJl4nfabJLrAI7nBClPcsKISBEmsfcOVal%2F00VwpywnChbST0vP2IczmD0ibbdXFtnM4j9OIN%2BTa6YH&X-Amz-Signature=8a74df5fb7a078d120a78632e5d858534dccb8d3a9e6ba175ac6984bfef52a48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQKZIKV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjHrYeIZFnZn3ZGhRcTPFxPzASr841yGHY6lDM33O3gIhANBQhKTU0oyoPk36JaX7kuQb3u35%2FZWdcnH6z6uW%2BHlyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xLyb69Srn2fE7xMq3AMKigGQTQ098NaVsSUyPpWoo%2FZoreNA039Vol9vTzNoxJ3q9NW5pX4v4b%2Fo6SfeUfYD4HjrJnHsImRt5huNkYSUSbjIzkpmtZWx%2FsNVy6NwsOPj4UxNStAJOFnMZEtDY8lseZ4%2BKgVZuntEa2CcSmNXkPt6oN9ohZZ%2B52h90OpAAAcCw0h5fzPME941fjOFahNtd4ESUMRZrC09PvEtUbVnh3U5bfLK3%2Bm8t0Cm4U1gtVeDr8FMHCOSspsRCMiH%2BFL3w66MEI3YcjtOzyHEMaDTxGJ9fdxFCqD3aiZUZ1DdllYWhTfwUe3PPMz%2FK5rVq6uB1eGPLwq0xbsQtOcjwGoI8Sqv8X%2BdszpzpR%2FwoG4FNoiLdpwce8BFWSccKXn%2FoRUS0i1WrifbKxPOUA5v1Y3095cSQwPewJZ0iF8p73IF7er8TwJKOhlXVAh9wA6WrbtH7YxqXKuqt%2BqJiWL7dIROItI1mWp9a1iLOL3jV8VPnbY0rUvdOExM%2BhNUhxz%2Brj3bCiWiYxtIJnI7G0EjBNK1fRdG5vKn3fHjGimaAUl%2F05mUqBjGyJNUpLpfBPaPsEb067UGY1SbHVjHTE1%2BRCopt0o1GR4GKF6KquHNZcl6ORooFfE6Oake7Z%2FyHDDhzOe9BjqkAYW%2Fzsvb1NqE8uFfcz7MjY%2FCJ%2BiD%2BZxB3o6JWfstXsDutX%2BXVg0nSOs2HbSqdwUSqcuFUbN1MaS81OZztl%2ByLQvSdwy19zU5SETeifmu7F0HObFAFaaRxknggTbjKP5vjGoCaFvcC4C78HJl4nfabJLrAI7nBClPcsKISBEmsfcOVal%2F00VwpywnChbST0vP2IczmD0ibbdXFtnM4j9OIN%2BTa6YH&X-Amz-Signature=ebe540d3039ed220c2981246b1579647ecc106d3dd77e9e0ec053a602d8cd482&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQKZIKV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjHrYeIZFnZn3ZGhRcTPFxPzASr841yGHY6lDM33O3gIhANBQhKTU0oyoPk36JaX7kuQb3u35%2FZWdcnH6z6uW%2BHlyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9xLyb69Srn2fE7xMq3AMKigGQTQ098NaVsSUyPpWoo%2FZoreNA039Vol9vTzNoxJ3q9NW5pX4v4b%2Fo6SfeUfYD4HjrJnHsImRt5huNkYSUSbjIzkpmtZWx%2FsNVy6NwsOPj4UxNStAJOFnMZEtDY8lseZ4%2BKgVZuntEa2CcSmNXkPt6oN9ohZZ%2B52h90OpAAAcCw0h5fzPME941fjOFahNtd4ESUMRZrC09PvEtUbVnh3U5bfLK3%2Bm8t0Cm4U1gtVeDr8FMHCOSspsRCMiH%2BFL3w66MEI3YcjtOzyHEMaDTxGJ9fdxFCqD3aiZUZ1DdllYWhTfwUe3PPMz%2FK5rVq6uB1eGPLwq0xbsQtOcjwGoI8Sqv8X%2BdszpzpR%2FwoG4FNoiLdpwce8BFWSccKXn%2FoRUS0i1WrifbKxPOUA5v1Y3095cSQwPewJZ0iF8p73IF7er8TwJKOhlXVAh9wA6WrbtH7YxqXKuqt%2BqJiWL7dIROItI1mWp9a1iLOL3jV8VPnbY0rUvdOExM%2BhNUhxz%2Brj3bCiWiYxtIJnI7G0EjBNK1fRdG5vKn3fHjGimaAUl%2F05mUqBjGyJNUpLpfBPaPsEb067UGY1SbHVjHTE1%2BRCopt0o1GR4GKF6KquHNZcl6ORooFfE6Oake7Z%2FyHDDhzOe9BjqkAYW%2Fzsvb1NqE8uFfcz7MjY%2FCJ%2BiD%2BZxB3o6JWfstXsDutX%2BXVg0nSOs2HbSqdwUSqcuFUbN1MaS81OZztl%2ByLQvSdwy19zU5SETeifmu7F0HObFAFaaRxknggTbjKP5vjGoCaFvcC4C78HJl4nfabJLrAI7nBClPcsKISBEmsfcOVal%2F00VwpywnChbST0vP2IczmD0ibbdXFtnM4j9OIN%2BTa6YH&X-Amz-Signature=1174e8523e3f0cc144f80b371baf65e300456001d492343590db22822c3d0a4f&X-Amz-SignedHeaders=host&x-id=GetObject)
