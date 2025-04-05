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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRG5TH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM19NfgSStf9XJH%2FOvHSPCIwste9EIdkJf3Ce%2BwaUAmAIhAM81RjthFwEocH%2Fi5LIeClnOutKngkW0rCb2C%2FY2VZSiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6CJOHC0wZ6bg5vLkq3AMIw3h7rzl5%2BBPQTu9QZc%2FcEzzvPTJhM7KmE%2FY3GFY3WTcoejHmSTVJKDy4n90E4mEPMY%2BQwXpTE7haK%2B%2FCiBtwd3vO7Ac0By%2BIbaZLlctD8uLU3LmNJX%2B%2BIumWVlxvihG%2BqJiEYpTcLvVmeSTmnDaUO8jGUnBtD%2B7lAbq6jJvB9e%2F5qd6W4L5uPp%2ByM5V8566LO5BILZtMT5ukD4%2FC0MDtMmsdYDTO%2B%2BaHWbbsnsYYNIT5fWyyWvAqVIKL7axuXRuyeRqhlehPZkWuCUoVvVCmgTSUE%2FA4k2ZI4j4DocsWNvUB2gRuYn1WB8%2BDjWb8GuwmlyLPnUdSZ%2B%2BgrMHWnmltNKpx%2BTbrUuX%2BFwd5hJpGYgJS6kQDaiVQwA9NlZeLf6qbq8Djdb%2Bes05Weoketgs7eU4dneL9VXesS8e0Hg8uFbH%2F9CnXOYGKvQQaYsh7IWTePYQYh6JlQqGRz37OpRw0cV8YBEUiKjMFh0gqRgJ3Fso4dFCYvb2%2B%2BH66gZoGaQBPwPTq47ROBDAcL5nOp%2FfrdT0bJFa40IHBIsaJETYhIgVfkhJ3K8diISlh%2F7w%2FAUnSe6fte4V0F2DjWdnQpbZZx%2BBMjb5ysHABTl8peTEwrEvcW%2Bz7dT2wc1c9sTDi48O%2FBjqkAWLDV7uSsgEUz1QvkvIl7ebXEy28pWHP2U7DMuuvDqlTmo%2BTB6bW51OUopTOIwToIzhSJhHCSCx%2B3S8hD7LcmtAZMTbvqIyo9euQDOROQkoXC8mbNcUsgFUX2BMJ%2FqhYJz1WoIhTK6izYvoXJpk6l85Zteza9r%2F96SBct0ftFxpL%2Bg8SPwxv1g6%2FsqyOq8o8J1Jp104CySr0If1anhO96Q51aMBL&X-Amz-Signature=c3d5d415baef973fea35cd2cd33b859cc72e3a037ee3e1da107a239f4bd66b29&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRG5TH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM19NfgSStf9XJH%2FOvHSPCIwste9EIdkJf3Ce%2BwaUAmAIhAM81RjthFwEocH%2Fi5LIeClnOutKngkW0rCb2C%2FY2VZSiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6CJOHC0wZ6bg5vLkq3AMIw3h7rzl5%2BBPQTu9QZc%2FcEzzvPTJhM7KmE%2FY3GFY3WTcoejHmSTVJKDy4n90E4mEPMY%2BQwXpTE7haK%2B%2FCiBtwd3vO7Ac0By%2BIbaZLlctD8uLU3LmNJX%2B%2BIumWVlxvihG%2BqJiEYpTcLvVmeSTmnDaUO8jGUnBtD%2B7lAbq6jJvB9e%2F5qd6W4L5uPp%2ByM5V8566LO5BILZtMT5ukD4%2FC0MDtMmsdYDTO%2B%2BaHWbbsnsYYNIT5fWyyWvAqVIKL7axuXRuyeRqhlehPZkWuCUoVvVCmgTSUE%2FA4k2ZI4j4DocsWNvUB2gRuYn1WB8%2BDjWb8GuwmlyLPnUdSZ%2B%2BgrMHWnmltNKpx%2BTbrUuX%2BFwd5hJpGYgJS6kQDaiVQwA9NlZeLf6qbq8Djdb%2Bes05Weoketgs7eU4dneL9VXesS8e0Hg8uFbH%2F9CnXOYGKvQQaYsh7IWTePYQYh6JlQqGRz37OpRw0cV8YBEUiKjMFh0gqRgJ3Fso4dFCYvb2%2B%2BH66gZoGaQBPwPTq47ROBDAcL5nOp%2FfrdT0bJFa40IHBIsaJETYhIgVfkhJ3K8diISlh%2F7w%2FAUnSe6fte4V0F2DjWdnQpbZZx%2BBMjb5ysHABTl8peTEwrEvcW%2Bz7dT2wc1c9sTDi48O%2FBjqkAWLDV7uSsgEUz1QvkvIl7ebXEy28pWHP2U7DMuuvDqlTmo%2BTB6bW51OUopTOIwToIzhSJhHCSCx%2B3S8hD7LcmtAZMTbvqIyo9euQDOROQkoXC8mbNcUsgFUX2BMJ%2FqhYJz1WoIhTK6izYvoXJpk6l85Zteza9r%2F96SBct0ftFxpL%2Bg8SPwxv1g6%2FsqyOq8o8J1Jp104CySr0If1anhO96Q51aMBL&X-Amz-Signature=86a311567a783dd8b6a56304406cd607abbdbb5321f26b35ef0515dbcd38fa0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRG5TH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM19NfgSStf9XJH%2FOvHSPCIwste9EIdkJf3Ce%2BwaUAmAIhAM81RjthFwEocH%2Fi5LIeClnOutKngkW0rCb2C%2FY2VZSiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6CJOHC0wZ6bg5vLkq3AMIw3h7rzl5%2BBPQTu9QZc%2FcEzzvPTJhM7KmE%2FY3GFY3WTcoejHmSTVJKDy4n90E4mEPMY%2BQwXpTE7haK%2B%2FCiBtwd3vO7Ac0By%2BIbaZLlctD8uLU3LmNJX%2B%2BIumWVlxvihG%2BqJiEYpTcLvVmeSTmnDaUO8jGUnBtD%2B7lAbq6jJvB9e%2F5qd6W4L5uPp%2ByM5V8566LO5BILZtMT5ukD4%2FC0MDtMmsdYDTO%2B%2BaHWbbsnsYYNIT5fWyyWvAqVIKL7axuXRuyeRqhlehPZkWuCUoVvVCmgTSUE%2FA4k2ZI4j4DocsWNvUB2gRuYn1WB8%2BDjWb8GuwmlyLPnUdSZ%2B%2BgrMHWnmltNKpx%2BTbrUuX%2BFwd5hJpGYgJS6kQDaiVQwA9NlZeLf6qbq8Djdb%2Bes05Weoketgs7eU4dneL9VXesS8e0Hg8uFbH%2F9CnXOYGKvQQaYsh7IWTePYQYh6JlQqGRz37OpRw0cV8YBEUiKjMFh0gqRgJ3Fso4dFCYvb2%2B%2BH66gZoGaQBPwPTq47ROBDAcL5nOp%2FfrdT0bJFa40IHBIsaJETYhIgVfkhJ3K8diISlh%2F7w%2FAUnSe6fte4V0F2DjWdnQpbZZx%2BBMjb5ysHABTl8peTEwrEvcW%2Bz7dT2wc1c9sTDi48O%2FBjqkAWLDV7uSsgEUz1QvkvIl7ebXEy28pWHP2U7DMuuvDqlTmo%2BTB6bW51OUopTOIwToIzhSJhHCSCx%2B3S8hD7LcmtAZMTbvqIyo9euQDOROQkoXC8mbNcUsgFUX2BMJ%2FqhYJz1WoIhTK6izYvoXJpk6l85Zteza9r%2F96SBct0ftFxpL%2Bg8SPwxv1g6%2FsqyOq8o8J1Jp104CySr0If1anhO96Q51aMBL&X-Amz-Signature=417b9ee286127583a4b8b776ffd7e2aa243c206690550be4af38bab9d59d2ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRG5TH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM19NfgSStf9XJH%2FOvHSPCIwste9EIdkJf3Ce%2BwaUAmAIhAM81RjthFwEocH%2Fi5LIeClnOutKngkW0rCb2C%2FY2VZSiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6CJOHC0wZ6bg5vLkq3AMIw3h7rzl5%2BBPQTu9QZc%2FcEzzvPTJhM7KmE%2FY3GFY3WTcoejHmSTVJKDy4n90E4mEPMY%2BQwXpTE7haK%2B%2FCiBtwd3vO7Ac0By%2BIbaZLlctD8uLU3LmNJX%2B%2BIumWVlxvihG%2BqJiEYpTcLvVmeSTmnDaUO8jGUnBtD%2B7lAbq6jJvB9e%2F5qd6W4L5uPp%2ByM5V8566LO5BILZtMT5ukD4%2FC0MDtMmsdYDTO%2B%2BaHWbbsnsYYNIT5fWyyWvAqVIKL7axuXRuyeRqhlehPZkWuCUoVvVCmgTSUE%2FA4k2ZI4j4DocsWNvUB2gRuYn1WB8%2BDjWb8GuwmlyLPnUdSZ%2B%2BgrMHWnmltNKpx%2BTbrUuX%2BFwd5hJpGYgJS6kQDaiVQwA9NlZeLf6qbq8Djdb%2Bes05Weoketgs7eU4dneL9VXesS8e0Hg8uFbH%2F9CnXOYGKvQQaYsh7IWTePYQYh6JlQqGRz37OpRw0cV8YBEUiKjMFh0gqRgJ3Fso4dFCYvb2%2B%2BH66gZoGaQBPwPTq47ROBDAcL5nOp%2FfrdT0bJFa40IHBIsaJETYhIgVfkhJ3K8diISlh%2F7w%2FAUnSe6fte4V0F2DjWdnQpbZZx%2BBMjb5ysHABTl8peTEwrEvcW%2Bz7dT2wc1c9sTDi48O%2FBjqkAWLDV7uSsgEUz1QvkvIl7ebXEy28pWHP2U7DMuuvDqlTmo%2BTB6bW51OUopTOIwToIzhSJhHCSCx%2B3S8hD7LcmtAZMTbvqIyo9euQDOROQkoXC8mbNcUsgFUX2BMJ%2FqhYJz1WoIhTK6izYvoXJpk6l85Zteza9r%2F96SBct0ftFxpL%2Bg8SPwxv1g6%2FsqyOq8o8J1Jp104CySr0If1anhO96Q51aMBL&X-Amz-Signature=ffcf10aaedcb85422eb7038d8622f2e0b4523509705746d9f7d190d9b1242195&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRG5TH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM19NfgSStf9XJH%2FOvHSPCIwste9EIdkJf3Ce%2BwaUAmAIhAM81RjthFwEocH%2Fi5LIeClnOutKngkW0rCb2C%2FY2VZSiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6CJOHC0wZ6bg5vLkq3AMIw3h7rzl5%2BBPQTu9QZc%2FcEzzvPTJhM7KmE%2FY3GFY3WTcoejHmSTVJKDy4n90E4mEPMY%2BQwXpTE7haK%2B%2FCiBtwd3vO7Ac0By%2BIbaZLlctD8uLU3LmNJX%2B%2BIumWVlxvihG%2BqJiEYpTcLvVmeSTmnDaUO8jGUnBtD%2B7lAbq6jJvB9e%2F5qd6W4L5uPp%2ByM5V8566LO5BILZtMT5ukD4%2FC0MDtMmsdYDTO%2B%2BaHWbbsnsYYNIT5fWyyWvAqVIKL7axuXRuyeRqhlehPZkWuCUoVvVCmgTSUE%2FA4k2ZI4j4DocsWNvUB2gRuYn1WB8%2BDjWb8GuwmlyLPnUdSZ%2B%2BgrMHWnmltNKpx%2BTbrUuX%2BFwd5hJpGYgJS6kQDaiVQwA9NlZeLf6qbq8Djdb%2Bes05Weoketgs7eU4dneL9VXesS8e0Hg8uFbH%2F9CnXOYGKvQQaYsh7IWTePYQYh6JlQqGRz37OpRw0cV8YBEUiKjMFh0gqRgJ3Fso4dFCYvb2%2B%2BH66gZoGaQBPwPTq47ROBDAcL5nOp%2FfrdT0bJFa40IHBIsaJETYhIgVfkhJ3K8diISlh%2F7w%2FAUnSe6fte4V0F2DjWdnQpbZZx%2BBMjb5ysHABTl8peTEwrEvcW%2Bz7dT2wc1c9sTDi48O%2FBjqkAWLDV7uSsgEUz1QvkvIl7ebXEy28pWHP2U7DMuuvDqlTmo%2BTB6bW51OUopTOIwToIzhSJhHCSCx%2B3S8hD7LcmtAZMTbvqIyo9euQDOROQkoXC8mbNcUsgFUX2BMJ%2FqhYJz1WoIhTK6izYvoXJpk6l85Zteza9r%2F96SBct0ftFxpL%2Bg8SPwxv1g6%2FsqyOq8o8J1Jp104CySr0If1anhO96Q51aMBL&X-Amz-Signature=692b8e31e7f1d9150bf48d8e03fbc7826a5c92eb21c5c4857df0a341511ccf11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRG5TH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM19NfgSStf9XJH%2FOvHSPCIwste9EIdkJf3Ce%2BwaUAmAIhAM81RjthFwEocH%2Fi5LIeClnOutKngkW0rCb2C%2FY2VZSiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6CJOHC0wZ6bg5vLkq3AMIw3h7rzl5%2BBPQTu9QZc%2FcEzzvPTJhM7KmE%2FY3GFY3WTcoejHmSTVJKDy4n90E4mEPMY%2BQwXpTE7haK%2B%2FCiBtwd3vO7Ac0By%2BIbaZLlctD8uLU3LmNJX%2B%2BIumWVlxvihG%2BqJiEYpTcLvVmeSTmnDaUO8jGUnBtD%2B7lAbq6jJvB9e%2F5qd6W4L5uPp%2ByM5V8566LO5BILZtMT5ukD4%2FC0MDtMmsdYDTO%2B%2BaHWbbsnsYYNIT5fWyyWvAqVIKL7axuXRuyeRqhlehPZkWuCUoVvVCmgTSUE%2FA4k2ZI4j4DocsWNvUB2gRuYn1WB8%2BDjWb8GuwmlyLPnUdSZ%2B%2BgrMHWnmltNKpx%2BTbrUuX%2BFwd5hJpGYgJS6kQDaiVQwA9NlZeLf6qbq8Djdb%2Bes05Weoketgs7eU4dneL9VXesS8e0Hg8uFbH%2F9CnXOYGKvQQaYsh7IWTePYQYh6JlQqGRz37OpRw0cV8YBEUiKjMFh0gqRgJ3Fso4dFCYvb2%2B%2BH66gZoGaQBPwPTq47ROBDAcL5nOp%2FfrdT0bJFa40IHBIsaJETYhIgVfkhJ3K8diISlh%2F7w%2FAUnSe6fte4V0F2DjWdnQpbZZx%2BBMjb5ysHABTl8peTEwrEvcW%2Bz7dT2wc1c9sTDi48O%2FBjqkAWLDV7uSsgEUz1QvkvIl7ebXEy28pWHP2U7DMuuvDqlTmo%2BTB6bW51OUopTOIwToIzhSJhHCSCx%2B3S8hD7LcmtAZMTbvqIyo9euQDOROQkoXC8mbNcUsgFUX2BMJ%2FqhYJz1WoIhTK6izYvoXJpk6l85Zteza9r%2F96SBct0ftFxpL%2Bg8SPwxv1g6%2FsqyOq8o8J1Jp104CySr0If1anhO96Q51aMBL&X-Amz-Signature=160b003ae573d4c20d623fa5f936676bce42d105ba2a9da6cd109656d7c3f5cb&X-Amz-SignedHeaders=host&x-id=GetObject)
