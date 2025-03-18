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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSYHAPI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5jFyLuwZ%2BQvq1q0WF89CMKqVn4OIW%2BiGcHQ99hSJiugIhAP95QCSkGHIwAu6KIgNgH4VVIjA%2F6zmcpNjkKwbyosEVKv8DCGIQABoMNjM3NDIzMTgzODA1Igxh9XzXQZrb98mY3Xkq3AO9iOPEIVE10hEfQgI9w49ow81IyYzcrhOiaSq85UqkRo6FTfIrnX4gigsgvBNqJ91y9j2Rn6bUaKEO91JbB4LwoFPbNo2OJ%2BsqSi2LR2ThAvvCmbvV6TZK5m6asEBjc%2FPu647FElQtH4h5v41H4r7%2FFU0J%2F3N44bE%2FqgUCV%2BwHrJt0khGleQhTwkuBCaz%2BtaQrA%2BMAgyje4Ss7xJZXh6v9XEWyQW3LfjtxbO5xWBGHgc4UWHQ6efOSDHKTwxKubZigSh%2BlqBstcM4DTfVxbf%2BlB8qoF0zDy%2FyFhf2%2BOEHqbU4TexbIEkW43cs4strEiKb4SFt7nQKnyf%2Bv%2FO0TJfO9EakMhwMfe8re8ZBa384qRlsEQxr3KE6TtvumaFv5xxB6Ndq3fEqpOX35f7rltM6eMu0Axci2uF188K9Mhpu8VTuTlEQwJvuVHdGm070mFAUsh7DXbn0dHofZbjOw%2BknOX7XQ0JR5gNxQXMIP%2BPzeI%2FP1xEQPjN8Iduk0lD9dXaVcqQ1ox8yBCyd3ZuX5Dr2TBm8w9McO3dfDBw6vpdKwAo27ID7RGYkU2cXKqKeyv7Cxfm2Qi5Tq06zcHLLIDbZ%2FkhLGGFQpyTQEFG%2Buk3dlqQhg0FA%2FPIwLEUGVOjDW1Oa%2BBjqkAR7AfpH4EGHNK6SNuEUK9gJStEAju5ro9PzhHK%2BFh2Sdczd2stadOyZwypxlxDvpt%2BceQOXBIevmSZQeHjik4RscbpTYCobo3pkaY6UXt2qqT3M4ExVi2AfwVwXrHbotZ4T8cCpkMssgVsQ3u6lQg3N0pJ6pSnRbvLBn9v4nUJo46s4kp03hKlJr%2B0L4xfdfWzbn47euTI21BDMCvs3YQ%2F0hP%2B90&X-Amz-Signature=108436ff4df93378fdf47559f46954e2c57e498ea26129edb40b79e96bf4d634&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSYHAPI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5jFyLuwZ%2BQvq1q0WF89CMKqVn4OIW%2BiGcHQ99hSJiugIhAP95QCSkGHIwAu6KIgNgH4VVIjA%2F6zmcpNjkKwbyosEVKv8DCGIQABoMNjM3NDIzMTgzODA1Igxh9XzXQZrb98mY3Xkq3AO9iOPEIVE10hEfQgI9w49ow81IyYzcrhOiaSq85UqkRo6FTfIrnX4gigsgvBNqJ91y9j2Rn6bUaKEO91JbB4LwoFPbNo2OJ%2BsqSi2LR2ThAvvCmbvV6TZK5m6asEBjc%2FPu647FElQtH4h5v41H4r7%2FFU0J%2F3N44bE%2FqgUCV%2BwHrJt0khGleQhTwkuBCaz%2BtaQrA%2BMAgyje4Ss7xJZXh6v9XEWyQW3LfjtxbO5xWBGHgc4UWHQ6efOSDHKTwxKubZigSh%2BlqBstcM4DTfVxbf%2BlB8qoF0zDy%2FyFhf2%2BOEHqbU4TexbIEkW43cs4strEiKb4SFt7nQKnyf%2Bv%2FO0TJfO9EakMhwMfe8re8ZBa384qRlsEQxr3KE6TtvumaFv5xxB6Ndq3fEqpOX35f7rltM6eMu0Axci2uF188K9Mhpu8VTuTlEQwJvuVHdGm070mFAUsh7DXbn0dHofZbjOw%2BknOX7XQ0JR5gNxQXMIP%2BPzeI%2FP1xEQPjN8Iduk0lD9dXaVcqQ1ox8yBCyd3ZuX5Dr2TBm8w9McO3dfDBw6vpdKwAo27ID7RGYkU2cXKqKeyv7Cxfm2Qi5Tq06zcHLLIDbZ%2FkhLGGFQpyTQEFG%2Buk3dlqQhg0FA%2FPIwLEUGVOjDW1Oa%2BBjqkAR7AfpH4EGHNK6SNuEUK9gJStEAju5ro9PzhHK%2BFh2Sdczd2stadOyZwypxlxDvpt%2BceQOXBIevmSZQeHjik4RscbpTYCobo3pkaY6UXt2qqT3M4ExVi2AfwVwXrHbotZ4T8cCpkMssgVsQ3u6lQg3N0pJ6pSnRbvLBn9v4nUJo46s4kp03hKlJr%2B0L4xfdfWzbn47euTI21BDMCvs3YQ%2F0hP%2B90&X-Amz-Signature=547c4b19296f5881a5119cdbb2cb3bf89f6da80f8665a5977bc3ff6d0ee28b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSYHAPI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5jFyLuwZ%2BQvq1q0WF89CMKqVn4OIW%2BiGcHQ99hSJiugIhAP95QCSkGHIwAu6KIgNgH4VVIjA%2F6zmcpNjkKwbyosEVKv8DCGIQABoMNjM3NDIzMTgzODA1Igxh9XzXQZrb98mY3Xkq3AO9iOPEIVE10hEfQgI9w49ow81IyYzcrhOiaSq85UqkRo6FTfIrnX4gigsgvBNqJ91y9j2Rn6bUaKEO91JbB4LwoFPbNo2OJ%2BsqSi2LR2ThAvvCmbvV6TZK5m6asEBjc%2FPu647FElQtH4h5v41H4r7%2FFU0J%2F3N44bE%2FqgUCV%2BwHrJt0khGleQhTwkuBCaz%2BtaQrA%2BMAgyje4Ss7xJZXh6v9XEWyQW3LfjtxbO5xWBGHgc4UWHQ6efOSDHKTwxKubZigSh%2BlqBstcM4DTfVxbf%2BlB8qoF0zDy%2FyFhf2%2BOEHqbU4TexbIEkW43cs4strEiKb4SFt7nQKnyf%2Bv%2FO0TJfO9EakMhwMfe8re8ZBa384qRlsEQxr3KE6TtvumaFv5xxB6Ndq3fEqpOX35f7rltM6eMu0Axci2uF188K9Mhpu8VTuTlEQwJvuVHdGm070mFAUsh7DXbn0dHofZbjOw%2BknOX7XQ0JR5gNxQXMIP%2BPzeI%2FP1xEQPjN8Iduk0lD9dXaVcqQ1ox8yBCyd3ZuX5Dr2TBm8w9McO3dfDBw6vpdKwAo27ID7RGYkU2cXKqKeyv7Cxfm2Qi5Tq06zcHLLIDbZ%2FkhLGGFQpyTQEFG%2Buk3dlqQhg0FA%2FPIwLEUGVOjDW1Oa%2BBjqkAR7AfpH4EGHNK6SNuEUK9gJStEAju5ro9PzhHK%2BFh2Sdczd2stadOyZwypxlxDvpt%2BceQOXBIevmSZQeHjik4RscbpTYCobo3pkaY6UXt2qqT3M4ExVi2AfwVwXrHbotZ4T8cCpkMssgVsQ3u6lQg3N0pJ6pSnRbvLBn9v4nUJo46s4kp03hKlJr%2B0L4xfdfWzbn47euTI21BDMCvs3YQ%2F0hP%2B90&X-Amz-Signature=131f03faf50e04d862ecb973e4e171bfd7d219012ea2df352efba78be76c31ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSYHAPI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5jFyLuwZ%2BQvq1q0WF89CMKqVn4OIW%2BiGcHQ99hSJiugIhAP95QCSkGHIwAu6KIgNgH4VVIjA%2F6zmcpNjkKwbyosEVKv8DCGIQABoMNjM3NDIzMTgzODA1Igxh9XzXQZrb98mY3Xkq3AO9iOPEIVE10hEfQgI9w49ow81IyYzcrhOiaSq85UqkRo6FTfIrnX4gigsgvBNqJ91y9j2Rn6bUaKEO91JbB4LwoFPbNo2OJ%2BsqSi2LR2ThAvvCmbvV6TZK5m6asEBjc%2FPu647FElQtH4h5v41H4r7%2FFU0J%2F3N44bE%2FqgUCV%2BwHrJt0khGleQhTwkuBCaz%2BtaQrA%2BMAgyje4Ss7xJZXh6v9XEWyQW3LfjtxbO5xWBGHgc4UWHQ6efOSDHKTwxKubZigSh%2BlqBstcM4DTfVxbf%2BlB8qoF0zDy%2FyFhf2%2BOEHqbU4TexbIEkW43cs4strEiKb4SFt7nQKnyf%2Bv%2FO0TJfO9EakMhwMfe8re8ZBa384qRlsEQxr3KE6TtvumaFv5xxB6Ndq3fEqpOX35f7rltM6eMu0Axci2uF188K9Mhpu8VTuTlEQwJvuVHdGm070mFAUsh7DXbn0dHofZbjOw%2BknOX7XQ0JR5gNxQXMIP%2BPzeI%2FP1xEQPjN8Iduk0lD9dXaVcqQ1ox8yBCyd3ZuX5Dr2TBm8w9McO3dfDBw6vpdKwAo27ID7RGYkU2cXKqKeyv7Cxfm2Qi5Tq06zcHLLIDbZ%2FkhLGGFQpyTQEFG%2Buk3dlqQhg0FA%2FPIwLEUGVOjDW1Oa%2BBjqkAR7AfpH4EGHNK6SNuEUK9gJStEAju5ro9PzhHK%2BFh2Sdczd2stadOyZwypxlxDvpt%2BceQOXBIevmSZQeHjik4RscbpTYCobo3pkaY6UXt2qqT3M4ExVi2AfwVwXrHbotZ4T8cCpkMssgVsQ3u6lQg3N0pJ6pSnRbvLBn9v4nUJo46s4kp03hKlJr%2B0L4xfdfWzbn47euTI21BDMCvs3YQ%2F0hP%2B90&X-Amz-Signature=d03652ce4864e078001a0c462774595c8b50ad437c76371b89b889ab1fb3faae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSYHAPI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5jFyLuwZ%2BQvq1q0WF89CMKqVn4OIW%2BiGcHQ99hSJiugIhAP95QCSkGHIwAu6KIgNgH4VVIjA%2F6zmcpNjkKwbyosEVKv8DCGIQABoMNjM3NDIzMTgzODA1Igxh9XzXQZrb98mY3Xkq3AO9iOPEIVE10hEfQgI9w49ow81IyYzcrhOiaSq85UqkRo6FTfIrnX4gigsgvBNqJ91y9j2Rn6bUaKEO91JbB4LwoFPbNo2OJ%2BsqSi2LR2ThAvvCmbvV6TZK5m6asEBjc%2FPu647FElQtH4h5v41H4r7%2FFU0J%2F3N44bE%2FqgUCV%2BwHrJt0khGleQhTwkuBCaz%2BtaQrA%2BMAgyje4Ss7xJZXh6v9XEWyQW3LfjtxbO5xWBGHgc4UWHQ6efOSDHKTwxKubZigSh%2BlqBstcM4DTfVxbf%2BlB8qoF0zDy%2FyFhf2%2BOEHqbU4TexbIEkW43cs4strEiKb4SFt7nQKnyf%2Bv%2FO0TJfO9EakMhwMfe8re8ZBa384qRlsEQxr3KE6TtvumaFv5xxB6Ndq3fEqpOX35f7rltM6eMu0Axci2uF188K9Mhpu8VTuTlEQwJvuVHdGm070mFAUsh7DXbn0dHofZbjOw%2BknOX7XQ0JR5gNxQXMIP%2BPzeI%2FP1xEQPjN8Iduk0lD9dXaVcqQ1ox8yBCyd3ZuX5Dr2TBm8w9McO3dfDBw6vpdKwAo27ID7RGYkU2cXKqKeyv7Cxfm2Qi5Tq06zcHLLIDbZ%2FkhLGGFQpyTQEFG%2Buk3dlqQhg0FA%2FPIwLEUGVOjDW1Oa%2BBjqkAR7AfpH4EGHNK6SNuEUK9gJStEAju5ro9PzhHK%2BFh2Sdczd2stadOyZwypxlxDvpt%2BceQOXBIevmSZQeHjik4RscbpTYCobo3pkaY6UXt2qqT3M4ExVi2AfwVwXrHbotZ4T8cCpkMssgVsQ3u6lQg3N0pJ6pSnRbvLBn9v4nUJo46s4kp03hKlJr%2B0L4xfdfWzbn47euTI21BDMCvs3YQ%2F0hP%2B90&X-Amz-Signature=fd4ae5b97ca4f6985c6555e667fbf9a5c3c9d63c93288b5bc7d27126613940f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSYHAPI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5jFyLuwZ%2BQvq1q0WF89CMKqVn4OIW%2BiGcHQ99hSJiugIhAP95QCSkGHIwAu6KIgNgH4VVIjA%2F6zmcpNjkKwbyosEVKv8DCGIQABoMNjM3NDIzMTgzODA1Igxh9XzXQZrb98mY3Xkq3AO9iOPEIVE10hEfQgI9w49ow81IyYzcrhOiaSq85UqkRo6FTfIrnX4gigsgvBNqJ91y9j2Rn6bUaKEO91JbB4LwoFPbNo2OJ%2BsqSi2LR2ThAvvCmbvV6TZK5m6asEBjc%2FPu647FElQtH4h5v41H4r7%2FFU0J%2F3N44bE%2FqgUCV%2BwHrJt0khGleQhTwkuBCaz%2BtaQrA%2BMAgyje4Ss7xJZXh6v9XEWyQW3LfjtxbO5xWBGHgc4UWHQ6efOSDHKTwxKubZigSh%2BlqBstcM4DTfVxbf%2BlB8qoF0zDy%2FyFhf2%2BOEHqbU4TexbIEkW43cs4strEiKb4SFt7nQKnyf%2Bv%2FO0TJfO9EakMhwMfe8re8ZBa384qRlsEQxr3KE6TtvumaFv5xxB6Ndq3fEqpOX35f7rltM6eMu0Axci2uF188K9Mhpu8VTuTlEQwJvuVHdGm070mFAUsh7DXbn0dHofZbjOw%2BknOX7XQ0JR5gNxQXMIP%2BPzeI%2FP1xEQPjN8Iduk0lD9dXaVcqQ1ox8yBCyd3ZuX5Dr2TBm8w9McO3dfDBw6vpdKwAo27ID7RGYkU2cXKqKeyv7Cxfm2Qi5Tq06zcHLLIDbZ%2FkhLGGFQpyTQEFG%2Buk3dlqQhg0FA%2FPIwLEUGVOjDW1Oa%2BBjqkAR7AfpH4EGHNK6SNuEUK9gJStEAju5ro9PzhHK%2BFh2Sdczd2stadOyZwypxlxDvpt%2BceQOXBIevmSZQeHjik4RscbpTYCobo3pkaY6UXt2qqT3M4ExVi2AfwVwXrHbotZ4T8cCpkMssgVsQ3u6lQg3N0pJ6pSnRbvLBn9v4nUJo46s4kp03hKlJr%2B0L4xfdfWzbn47euTI21BDMCvs3YQ%2F0hP%2B90&X-Amz-Signature=0016eda9179d93bd4021fbbd464b39c29207a661fbe6fd94b3a4b912ae2de3e3&X-Amz-SignedHeaders=host&x-id=GetObject)
