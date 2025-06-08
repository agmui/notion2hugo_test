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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITGDLVC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwdw64tLpJDBAlfScG5f%2Ffyt8K2TNBfVdKM1gTEa2DKAIhAJsoHzHSEHk3rh5P9%2FQ%2BOZJn2x%2BANmmNW031Bus2DdOyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3B9Pdoj1rObhB7nEq3ANICEF9ZYZcKmSiL2ULTHc7HfORX4NR5AOUUBrxQxszQJfWSMD6AZ%2BotRGPZvTGbibQ7R8RvgWocl8wR07t%2F2HrRWZm7a%2BjFc%2BJDiCEAzKm9wlnj4kiAAhYSlRsDfvx68moagfkesZIndjevh7VASvDbkTbV5v9qDlYnv6RVU%2Fl1SpZXVMtaxUV8S%2Flasexa8DqQ4w0f0FUIeYuwo%2B6z%2Bx28AR22GZjSTwxMsy9MQ1kGN5kfQOq0BDC%2Br96zXlBGn4IHDiUTpz6CseQ1VN%2FZpI6WGrMk0qdKUzw1PeHbio4hb9dfwUirTI1WVtijY2B4mBmBPW8O40ARyLxecc0CV5l%2B2MgSETJN1YNItzRZsbUJk3u%2FRZCC9e%2BTjF%2F3Ai6O2uFia%2Bp7Ojny5lsEPPFzoWCUNqXOwkHA6IJNpkaQxQ1%2FwsSX6kHr6EWShZok1EJEJnLEUbZfe8fFxVBJ3mMTls1Mgy5My9OtCzw3itU8Yyj8GCk7tlXlK3o6moo4DpBqIXIjMWLDXo8CKkV6Q6NGZWMBSh7PJmAIMk0VY72buP8%2B9SEVKlN4vF8EqPYJ0t0zAH1BKpUzY5a9RlHzeSlR2OThx62pc2GYawNgOQcWWTcZRJJvz%2FrEHx8aNcYmjDZspbCBjqkAcJBWOj5Y%2FQXiCeJrwWVzKuvhzYdH%2FiojWk8t8lX%2BPTtx%2B3%2FZtayyy%2BiFVaziwzZl%2F%2BiPIyg5CsMxsnqeb0XSS01%2Bqqe8mtpfw3UG8NjBgBrqkQh%2F5iZm3gTt8t7pOreps6Zo6x7UidKrzPTMBZEDBHXfzhK2pSddToL6kTEl3BBeSK2BTIHa4kYxNELsoKmPzdelobcYbPwawKtAztzfEhXlgvT&X-Amz-Signature=b68ce9ff547f679d3c7c7f465886b1a89276b85bb28f07f37b64725a1f8f856c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITGDLVC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwdw64tLpJDBAlfScG5f%2Ffyt8K2TNBfVdKM1gTEa2DKAIhAJsoHzHSEHk3rh5P9%2FQ%2BOZJn2x%2BANmmNW031Bus2DdOyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3B9Pdoj1rObhB7nEq3ANICEF9ZYZcKmSiL2ULTHc7HfORX4NR5AOUUBrxQxszQJfWSMD6AZ%2BotRGPZvTGbibQ7R8RvgWocl8wR07t%2F2HrRWZm7a%2BjFc%2BJDiCEAzKm9wlnj4kiAAhYSlRsDfvx68moagfkesZIndjevh7VASvDbkTbV5v9qDlYnv6RVU%2Fl1SpZXVMtaxUV8S%2Flasexa8DqQ4w0f0FUIeYuwo%2B6z%2Bx28AR22GZjSTwxMsy9MQ1kGN5kfQOq0BDC%2Br96zXlBGn4IHDiUTpz6CseQ1VN%2FZpI6WGrMk0qdKUzw1PeHbio4hb9dfwUirTI1WVtijY2B4mBmBPW8O40ARyLxecc0CV5l%2B2MgSETJN1YNItzRZsbUJk3u%2FRZCC9e%2BTjF%2F3Ai6O2uFia%2Bp7Ojny5lsEPPFzoWCUNqXOwkHA6IJNpkaQxQ1%2FwsSX6kHr6EWShZok1EJEJnLEUbZfe8fFxVBJ3mMTls1Mgy5My9OtCzw3itU8Yyj8GCk7tlXlK3o6moo4DpBqIXIjMWLDXo8CKkV6Q6NGZWMBSh7PJmAIMk0VY72buP8%2B9SEVKlN4vF8EqPYJ0t0zAH1BKpUzY5a9RlHzeSlR2OThx62pc2GYawNgOQcWWTcZRJJvz%2FrEHx8aNcYmjDZspbCBjqkAcJBWOj5Y%2FQXiCeJrwWVzKuvhzYdH%2FiojWk8t8lX%2BPTtx%2B3%2FZtayyy%2BiFVaziwzZl%2F%2BiPIyg5CsMxsnqeb0XSS01%2Bqqe8mtpfw3UG8NjBgBrqkQh%2F5iZm3gTt8t7pOreps6Zo6x7UidKrzPTMBZEDBHXfzhK2pSddToL6kTEl3BBeSK2BTIHa4kYxNELsoKmPzdelobcYbPwawKtAztzfEhXlgvT&X-Amz-Signature=0ba4c131cfa456ab2541a40022e95fa7af5fd1ea38b76d4a911ae67e1ee80be5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITGDLVC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwdw64tLpJDBAlfScG5f%2Ffyt8K2TNBfVdKM1gTEa2DKAIhAJsoHzHSEHk3rh5P9%2FQ%2BOZJn2x%2BANmmNW031Bus2DdOyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3B9Pdoj1rObhB7nEq3ANICEF9ZYZcKmSiL2ULTHc7HfORX4NR5AOUUBrxQxszQJfWSMD6AZ%2BotRGPZvTGbibQ7R8RvgWocl8wR07t%2F2HrRWZm7a%2BjFc%2BJDiCEAzKm9wlnj4kiAAhYSlRsDfvx68moagfkesZIndjevh7VASvDbkTbV5v9qDlYnv6RVU%2Fl1SpZXVMtaxUV8S%2Flasexa8DqQ4w0f0FUIeYuwo%2B6z%2Bx28AR22GZjSTwxMsy9MQ1kGN5kfQOq0BDC%2Br96zXlBGn4IHDiUTpz6CseQ1VN%2FZpI6WGrMk0qdKUzw1PeHbio4hb9dfwUirTI1WVtijY2B4mBmBPW8O40ARyLxecc0CV5l%2B2MgSETJN1YNItzRZsbUJk3u%2FRZCC9e%2BTjF%2F3Ai6O2uFia%2Bp7Ojny5lsEPPFzoWCUNqXOwkHA6IJNpkaQxQ1%2FwsSX6kHr6EWShZok1EJEJnLEUbZfe8fFxVBJ3mMTls1Mgy5My9OtCzw3itU8Yyj8GCk7tlXlK3o6moo4DpBqIXIjMWLDXo8CKkV6Q6NGZWMBSh7PJmAIMk0VY72buP8%2B9SEVKlN4vF8EqPYJ0t0zAH1BKpUzY5a9RlHzeSlR2OThx62pc2GYawNgOQcWWTcZRJJvz%2FrEHx8aNcYmjDZspbCBjqkAcJBWOj5Y%2FQXiCeJrwWVzKuvhzYdH%2FiojWk8t8lX%2BPTtx%2B3%2FZtayyy%2BiFVaziwzZl%2F%2BiPIyg5CsMxsnqeb0XSS01%2Bqqe8mtpfw3UG8NjBgBrqkQh%2F5iZm3gTt8t7pOreps6Zo6x7UidKrzPTMBZEDBHXfzhK2pSddToL6kTEl3BBeSK2BTIHa4kYxNELsoKmPzdelobcYbPwawKtAztzfEhXlgvT&X-Amz-Signature=96e07fafbf4add64b90a11e6b95f1a5279019ef175623d508d1144cb4ee5a004&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITGDLVC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwdw64tLpJDBAlfScG5f%2Ffyt8K2TNBfVdKM1gTEa2DKAIhAJsoHzHSEHk3rh5P9%2FQ%2BOZJn2x%2BANmmNW031Bus2DdOyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3B9Pdoj1rObhB7nEq3ANICEF9ZYZcKmSiL2ULTHc7HfORX4NR5AOUUBrxQxszQJfWSMD6AZ%2BotRGPZvTGbibQ7R8RvgWocl8wR07t%2F2HrRWZm7a%2BjFc%2BJDiCEAzKm9wlnj4kiAAhYSlRsDfvx68moagfkesZIndjevh7VASvDbkTbV5v9qDlYnv6RVU%2Fl1SpZXVMtaxUV8S%2Flasexa8DqQ4w0f0FUIeYuwo%2B6z%2Bx28AR22GZjSTwxMsy9MQ1kGN5kfQOq0BDC%2Br96zXlBGn4IHDiUTpz6CseQ1VN%2FZpI6WGrMk0qdKUzw1PeHbio4hb9dfwUirTI1WVtijY2B4mBmBPW8O40ARyLxecc0CV5l%2B2MgSETJN1YNItzRZsbUJk3u%2FRZCC9e%2BTjF%2F3Ai6O2uFia%2Bp7Ojny5lsEPPFzoWCUNqXOwkHA6IJNpkaQxQ1%2FwsSX6kHr6EWShZok1EJEJnLEUbZfe8fFxVBJ3mMTls1Mgy5My9OtCzw3itU8Yyj8GCk7tlXlK3o6moo4DpBqIXIjMWLDXo8CKkV6Q6NGZWMBSh7PJmAIMk0VY72buP8%2B9SEVKlN4vF8EqPYJ0t0zAH1BKpUzY5a9RlHzeSlR2OThx62pc2GYawNgOQcWWTcZRJJvz%2FrEHx8aNcYmjDZspbCBjqkAcJBWOj5Y%2FQXiCeJrwWVzKuvhzYdH%2FiojWk8t8lX%2BPTtx%2B3%2FZtayyy%2BiFVaziwzZl%2F%2BiPIyg5CsMxsnqeb0XSS01%2Bqqe8mtpfw3UG8NjBgBrqkQh%2F5iZm3gTt8t7pOreps6Zo6x7UidKrzPTMBZEDBHXfzhK2pSddToL6kTEl3BBeSK2BTIHa4kYxNELsoKmPzdelobcYbPwawKtAztzfEhXlgvT&X-Amz-Signature=cb1f76866f9ba7293270c21da2b5f66caf31753416eb1fda5c4e2699ab9f4b44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITGDLVC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwdw64tLpJDBAlfScG5f%2Ffyt8K2TNBfVdKM1gTEa2DKAIhAJsoHzHSEHk3rh5P9%2FQ%2BOZJn2x%2BANmmNW031Bus2DdOyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3B9Pdoj1rObhB7nEq3ANICEF9ZYZcKmSiL2ULTHc7HfORX4NR5AOUUBrxQxszQJfWSMD6AZ%2BotRGPZvTGbibQ7R8RvgWocl8wR07t%2F2HrRWZm7a%2BjFc%2BJDiCEAzKm9wlnj4kiAAhYSlRsDfvx68moagfkesZIndjevh7VASvDbkTbV5v9qDlYnv6RVU%2Fl1SpZXVMtaxUV8S%2Flasexa8DqQ4w0f0FUIeYuwo%2B6z%2Bx28AR22GZjSTwxMsy9MQ1kGN5kfQOq0BDC%2Br96zXlBGn4IHDiUTpz6CseQ1VN%2FZpI6WGrMk0qdKUzw1PeHbio4hb9dfwUirTI1WVtijY2B4mBmBPW8O40ARyLxecc0CV5l%2B2MgSETJN1YNItzRZsbUJk3u%2FRZCC9e%2BTjF%2F3Ai6O2uFia%2Bp7Ojny5lsEPPFzoWCUNqXOwkHA6IJNpkaQxQ1%2FwsSX6kHr6EWShZok1EJEJnLEUbZfe8fFxVBJ3mMTls1Mgy5My9OtCzw3itU8Yyj8GCk7tlXlK3o6moo4DpBqIXIjMWLDXo8CKkV6Q6NGZWMBSh7PJmAIMk0VY72buP8%2B9SEVKlN4vF8EqPYJ0t0zAH1BKpUzY5a9RlHzeSlR2OThx62pc2GYawNgOQcWWTcZRJJvz%2FrEHx8aNcYmjDZspbCBjqkAcJBWOj5Y%2FQXiCeJrwWVzKuvhzYdH%2FiojWk8t8lX%2BPTtx%2B3%2FZtayyy%2BiFVaziwzZl%2F%2BiPIyg5CsMxsnqeb0XSS01%2Bqqe8mtpfw3UG8NjBgBrqkQh%2F5iZm3gTt8t7pOreps6Zo6x7UidKrzPTMBZEDBHXfzhK2pSddToL6kTEl3BBeSK2BTIHa4kYxNELsoKmPzdelobcYbPwawKtAztzfEhXlgvT&X-Amz-Signature=1311d2e29ddf9604f465fe5d178ad01da08b4fd11b684f87810ccb6b0263ca7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITGDLVC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwdw64tLpJDBAlfScG5f%2Ffyt8K2TNBfVdKM1gTEa2DKAIhAJsoHzHSEHk3rh5P9%2FQ%2BOZJn2x%2BANmmNW031Bus2DdOyKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3B9Pdoj1rObhB7nEq3ANICEF9ZYZcKmSiL2ULTHc7HfORX4NR5AOUUBrxQxszQJfWSMD6AZ%2BotRGPZvTGbibQ7R8RvgWocl8wR07t%2F2HrRWZm7a%2BjFc%2BJDiCEAzKm9wlnj4kiAAhYSlRsDfvx68moagfkesZIndjevh7VASvDbkTbV5v9qDlYnv6RVU%2Fl1SpZXVMtaxUV8S%2Flasexa8DqQ4w0f0FUIeYuwo%2B6z%2Bx28AR22GZjSTwxMsy9MQ1kGN5kfQOq0BDC%2Br96zXlBGn4IHDiUTpz6CseQ1VN%2FZpI6WGrMk0qdKUzw1PeHbio4hb9dfwUirTI1WVtijY2B4mBmBPW8O40ARyLxecc0CV5l%2B2MgSETJN1YNItzRZsbUJk3u%2FRZCC9e%2BTjF%2F3Ai6O2uFia%2Bp7Ojny5lsEPPFzoWCUNqXOwkHA6IJNpkaQxQ1%2FwsSX6kHr6EWShZok1EJEJnLEUbZfe8fFxVBJ3mMTls1Mgy5My9OtCzw3itU8Yyj8GCk7tlXlK3o6moo4DpBqIXIjMWLDXo8CKkV6Q6NGZWMBSh7PJmAIMk0VY72buP8%2B9SEVKlN4vF8EqPYJ0t0zAH1BKpUzY5a9RlHzeSlR2OThx62pc2GYawNgOQcWWTcZRJJvz%2FrEHx8aNcYmjDZspbCBjqkAcJBWOj5Y%2FQXiCeJrwWVzKuvhzYdH%2FiojWk8t8lX%2BPTtx%2B3%2FZtayyy%2BiFVaziwzZl%2F%2BiPIyg5CsMxsnqeb0XSS01%2Bqqe8mtpfw3UG8NjBgBrqkQh%2F5iZm3gTt8t7pOreps6Zo6x7UidKrzPTMBZEDBHXfzhK2pSddToL6kTEl3BBeSK2BTIHa4kYxNELsoKmPzdelobcYbPwawKtAztzfEhXlgvT&X-Amz-Signature=cac5ee1f6fb93f9e152835d6e6d9335f899d21fb75919ef8a5bbd7e5c65fec25&X-Amz-SignedHeaders=host&x-id=GetObject)
