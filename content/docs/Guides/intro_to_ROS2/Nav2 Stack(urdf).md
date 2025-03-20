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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDJ5NZT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMB4SqaJQXqjLJF78YCPPpEZGTnon9OvxgsqUkDB%2BGigIgBeQRLUQaLgj%2ByPlzvHiKhIKjl8yQ4bO1sToNyrwW6acqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn60TTgaPWpUxiYKircA4u1KnlIiA2q4qoTWoZOUoXTq1EUgUFmPsTcgWTWPm31nMqcekQKRZn4YEbMfHpEmEVCFzorknuQ6fHOy5gk%2BhJvL%2FGk6i9Upjx%2F0UlhKI4B9iCGh%2F0w9xqH1T1fPUlGJJKQ2Z43F%2F2E%2BNeCRWHIyo4LVG0Ce0%2BzZCEBPHxC4O1KTYFAz7p6g6AX%2BGsmjiP1fdAKVOi6zk0YWLG5wOPKLN5AxrsqzMbupoJxZQDVQNf68zSC1f1cxkYq5yiRqLCqOzPZNJqaoMuzUBmxdE2H%2FaFz7HhnBqfeBLGHO%2FdhZlcn6X%2FrrnV%2F0bySA8IejVQPzZtcHrDxsl7vaUWOAnXwZpXj3Lsy88tA15zvQ2MVkd4ZFy8UjioRIDrcif5J%2FF2sge26kAnxuJv4UcOLYM4Ve6B8VcFJ%2FZ7%2B6CAFITQhi253yDXbh1IkiKL19hst0AiZSmyA0c1YQcse5%2BhcrE27plUCvZAhoe0hEDFyTeJR6aOFsKR37r3XZQLbX0HZBnBnPjD7JeELYeQvg7wH1sTdMbRN0691Z9URZ9bdP4NxDm8MbuVQDQcBoo%2FcLTw%2B%2BeCMnp6djIhXmatR0hoarywMrYlrQva74MktH%2FQbNnwnq85oghmAOV8UeoFVXh7EMK7E8L4GOqUBBlD5E9EBXeTKT0b7aLE%2FH1Yt6ysMOTny%2FmSj0TEoHEnjtSiYPzIk8HqWHnXCgzcYfYo1T3GrZrMAS%2FodcdGvX6xq5YkV41vEwdb3upVwfTZhL7se2UotkkBOUcNpOtyhxprlmdp0gK8WIxSfh3yNrHmzHWpC2uoXzdS4Ov7Wz6DQEg1aGsaO35gsUh6%2F43UQTa8JFVnE0Rp98unyc3uZwaYIqrrW&X-Amz-Signature=5a645c021b3920acf4182114f0be387c0a0d7ce28b8de42e6ee8cca4767e227e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDJ5NZT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMB4SqaJQXqjLJF78YCPPpEZGTnon9OvxgsqUkDB%2BGigIgBeQRLUQaLgj%2ByPlzvHiKhIKjl8yQ4bO1sToNyrwW6acqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn60TTgaPWpUxiYKircA4u1KnlIiA2q4qoTWoZOUoXTq1EUgUFmPsTcgWTWPm31nMqcekQKRZn4YEbMfHpEmEVCFzorknuQ6fHOy5gk%2BhJvL%2FGk6i9Upjx%2F0UlhKI4B9iCGh%2F0w9xqH1T1fPUlGJJKQ2Z43F%2F2E%2BNeCRWHIyo4LVG0Ce0%2BzZCEBPHxC4O1KTYFAz7p6g6AX%2BGsmjiP1fdAKVOi6zk0YWLG5wOPKLN5AxrsqzMbupoJxZQDVQNf68zSC1f1cxkYq5yiRqLCqOzPZNJqaoMuzUBmxdE2H%2FaFz7HhnBqfeBLGHO%2FdhZlcn6X%2FrrnV%2F0bySA8IejVQPzZtcHrDxsl7vaUWOAnXwZpXj3Lsy88tA15zvQ2MVkd4ZFy8UjioRIDrcif5J%2FF2sge26kAnxuJv4UcOLYM4Ve6B8VcFJ%2FZ7%2B6CAFITQhi253yDXbh1IkiKL19hst0AiZSmyA0c1YQcse5%2BhcrE27plUCvZAhoe0hEDFyTeJR6aOFsKR37r3XZQLbX0HZBnBnPjD7JeELYeQvg7wH1sTdMbRN0691Z9URZ9bdP4NxDm8MbuVQDQcBoo%2FcLTw%2B%2BeCMnp6djIhXmatR0hoarywMrYlrQva74MktH%2FQbNnwnq85oghmAOV8UeoFVXh7EMK7E8L4GOqUBBlD5E9EBXeTKT0b7aLE%2FH1Yt6ysMOTny%2FmSj0TEoHEnjtSiYPzIk8HqWHnXCgzcYfYo1T3GrZrMAS%2FodcdGvX6xq5YkV41vEwdb3upVwfTZhL7se2UotkkBOUcNpOtyhxprlmdp0gK8WIxSfh3yNrHmzHWpC2uoXzdS4Ov7Wz6DQEg1aGsaO35gsUh6%2F43UQTa8JFVnE0Rp98unyc3uZwaYIqrrW&X-Amz-Signature=292ba09c2dfd1d186bf4e5efd424133220b233e034e41e0873733dfa290f2fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDJ5NZT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMB4SqaJQXqjLJF78YCPPpEZGTnon9OvxgsqUkDB%2BGigIgBeQRLUQaLgj%2ByPlzvHiKhIKjl8yQ4bO1sToNyrwW6acqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn60TTgaPWpUxiYKircA4u1KnlIiA2q4qoTWoZOUoXTq1EUgUFmPsTcgWTWPm31nMqcekQKRZn4YEbMfHpEmEVCFzorknuQ6fHOy5gk%2BhJvL%2FGk6i9Upjx%2F0UlhKI4B9iCGh%2F0w9xqH1T1fPUlGJJKQ2Z43F%2F2E%2BNeCRWHIyo4LVG0Ce0%2BzZCEBPHxC4O1KTYFAz7p6g6AX%2BGsmjiP1fdAKVOi6zk0YWLG5wOPKLN5AxrsqzMbupoJxZQDVQNf68zSC1f1cxkYq5yiRqLCqOzPZNJqaoMuzUBmxdE2H%2FaFz7HhnBqfeBLGHO%2FdhZlcn6X%2FrrnV%2F0bySA8IejVQPzZtcHrDxsl7vaUWOAnXwZpXj3Lsy88tA15zvQ2MVkd4ZFy8UjioRIDrcif5J%2FF2sge26kAnxuJv4UcOLYM4Ve6B8VcFJ%2FZ7%2B6CAFITQhi253yDXbh1IkiKL19hst0AiZSmyA0c1YQcse5%2BhcrE27plUCvZAhoe0hEDFyTeJR6aOFsKR37r3XZQLbX0HZBnBnPjD7JeELYeQvg7wH1sTdMbRN0691Z9URZ9bdP4NxDm8MbuVQDQcBoo%2FcLTw%2B%2BeCMnp6djIhXmatR0hoarywMrYlrQva74MktH%2FQbNnwnq85oghmAOV8UeoFVXh7EMK7E8L4GOqUBBlD5E9EBXeTKT0b7aLE%2FH1Yt6ysMOTny%2FmSj0TEoHEnjtSiYPzIk8HqWHnXCgzcYfYo1T3GrZrMAS%2FodcdGvX6xq5YkV41vEwdb3upVwfTZhL7se2UotkkBOUcNpOtyhxprlmdp0gK8WIxSfh3yNrHmzHWpC2uoXzdS4Ov7Wz6DQEg1aGsaO35gsUh6%2F43UQTa8JFVnE0Rp98unyc3uZwaYIqrrW&X-Amz-Signature=3f9e70876c0c6fb3bbd16df580e08e4500c0c4ba9ba4a791785799763f18e4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDJ5NZT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMB4SqaJQXqjLJF78YCPPpEZGTnon9OvxgsqUkDB%2BGigIgBeQRLUQaLgj%2ByPlzvHiKhIKjl8yQ4bO1sToNyrwW6acqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn60TTgaPWpUxiYKircA4u1KnlIiA2q4qoTWoZOUoXTq1EUgUFmPsTcgWTWPm31nMqcekQKRZn4YEbMfHpEmEVCFzorknuQ6fHOy5gk%2BhJvL%2FGk6i9Upjx%2F0UlhKI4B9iCGh%2F0w9xqH1T1fPUlGJJKQ2Z43F%2F2E%2BNeCRWHIyo4LVG0Ce0%2BzZCEBPHxC4O1KTYFAz7p6g6AX%2BGsmjiP1fdAKVOi6zk0YWLG5wOPKLN5AxrsqzMbupoJxZQDVQNf68zSC1f1cxkYq5yiRqLCqOzPZNJqaoMuzUBmxdE2H%2FaFz7HhnBqfeBLGHO%2FdhZlcn6X%2FrrnV%2F0bySA8IejVQPzZtcHrDxsl7vaUWOAnXwZpXj3Lsy88tA15zvQ2MVkd4ZFy8UjioRIDrcif5J%2FF2sge26kAnxuJv4UcOLYM4Ve6B8VcFJ%2FZ7%2B6CAFITQhi253yDXbh1IkiKL19hst0AiZSmyA0c1YQcse5%2BhcrE27plUCvZAhoe0hEDFyTeJR6aOFsKR37r3XZQLbX0HZBnBnPjD7JeELYeQvg7wH1sTdMbRN0691Z9URZ9bdP4NxDm8MbuVQDQcBoo%2FcLTw%2B%2BeCMnp6djIhXmatR0hoarywMrYlrQva74MktH%2FQbNnwnq85oghmAOV8UeoFVXh7EMK7E8L4GOqUBBlD5E9EBXeTKT0b7aLE%2FH1Yt6ysMOTny%2FmSj0TEoHEnjtSiYPzIk8HqWHnXCgzcYfYo1T3GrZrMAS%2FodcdGvX6xq5YkV41vEwdb3upVwfTZhL7se2UotkkBOUcNpOtyhxprlmdp0gK8WIxSfh3yNrHmzHWpC2uoXzdS4Ov7Wz6DQEg1aGsaO35gsUh6%2F43UQTa8JFVnE0Rp98unyc3uZwaYIqrrW&X-Amz-Signature=95ec6f15be2d4c32e4e731973c85aef608e27c19e23c16f0ef54f7e3ca9f7dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDJ5NZT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMB4SqaJQXqjLJF78YCPPpEZGTnon9OvxgsqUkDB%2BGigIgBeQRLUQaLgj%2ByPlzvHiKhIKjl8yQ4bO1sToNyrwW6acqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn60TTgaPWpUxiYKircA4u1KnlIiA2q4qoTWoZOUoXTq1EUgUFmPsTcgWTWPm31nMqcekQKRZn4YEbMfHpEmEVCFzorknuQ6fHOy5gk%2BhJvL%2FGk6i9Upjx%2F0UlhKI4B9iCGh%2F0w9xqH1T1fPUlGJJKQ2Z43F%2F2E%2BNeCRWHIyo4LVG0Ce0%2BzZCEBPHxC4O1KTYFAz7p6g6AX%2BGsmjiP1fdAKVOi6zk0YWLG5wOPKLN5AxrsqzMbupoJxZQDVQNf68zSC1f1cxkYq5yiRqLCqOzPZNJqaoMuzUBmxdE2H%2FaFz7HhnBqfeBLGHO%2FdhZlcn6X%2FrrnV%2F0bySA8IejVQPzZtcHrDxsl7vaUWOAnXwZpXj3Lsy88tA15zvQ2MVkd4ZFy8UjioRIDrcif5J%2FF2sge26kAnxuJv4UcOLYM4Ve6B8VcFJ%2FZ7%2B6CAFITQhi253yDXbh1IkiKL19hst0AiZSmyA0c1YQcse5%2BhcrE27plUCvZAhoe0hEDFyTeJR6aOFsKR37r3XZQLbX0HZBnBnPjD7JeELYeQvg7wH1sTdMbRN0691Z9URZ9bdP4NxDm8MbuVQDQcBoo%2FcLTw%2B%2BeCMnp6djIhXmatR0hoarywMrYlrQva74MktH%2FQbNnwnq85oghmAOV8UeoFVXh7EMK7E8L4GOqUBBlD5E9EBXeTKT0b7aLE%2FH1Yt6ysMOTny%2FmSj0TEoHEnjtSiYPzIk8HqWHnXCgzcYfYo1T3GrZrMAS%2FodcdGvX6xq5YkV41vEwdb3upVwfTZhL7se2UotkkBOUcNpOtyhxprlmdp0gK8WIxSfh3yNrHmzHWpC2uoXzdS4Ov7Wz6DQEg1aGsaO35gsUh6%2F43UQTa8JFVnE0Rp98unyc3uZwaYIqrrW&X-Amz-Signature=83cb9b7b916bfe20db5f7f68decaa5124adc6ee3d4822618c41f417ca4e22cda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WDJ5NZT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDMB4SqaJQXqjLJF78YCPPpEZGTnon9OvxgsqUkDB%2BGigIgBeQRLUQaLgj%2ByPlzvHiKhIKjl8yQ4bO1sToNyrwW6acqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn60TTgaPWpUxiYKircA4u1KnlIiA2q4qoTWoZOUoXTq1EUgUFmPsTcgWTWPm31nMqcekQKRZn4YEbMfHpEmEVCFzorknuQ6fHOy5gk%2BhJvL%2FGk6i9Upjx%2F0UlhKI4B9iCGh%2F0w9xqH1T1fPUlGJJKQ2Z43F%2F2E%2BNeCRWHIyo4LVG0Ce0%2BzZCEBPHxC4O1KTYFAz7p6g6AX%2BGsmjiP1fdAKVOi6zk0YWLG5wOPKLN5AxrsqzMbupoJxZQDVQNf68zSC1f1cxkYq5yiRqLCqOzPZNJqaoMuzUBmxdE2H%2FaFz7HhnBqfeBLGHO%2FdhZlcn6X%2FrrnV%2F0bySA8IejVQPzZtcHrDxsl7vaUWOAnXwZpXj3Lsy88tA15zvQ2MVkd4ZFy8UjioRIDrcif5J%2FF2sge26kAnxuJv4UcOLYM4Ve6B8VcFJ%2FZ7%2B6CAFITQhi253yDXbh1IkiKL19hst0AiZSmyA0c1YQcse5%2BhcrE27plUCvZAhoe0hEDFyTeJR6aOFsKR37r3XZQLbX0HZBnBnPjD7JeELYeQvg7wH1sTdMbRN0691Z9URZ9bdP4NxDm8MbuVQDQcBoo%2FcLTw%2B%2BeCMnp6djIhXmatR0hoarywMrYlrQva74MktH%2FQbNnwnq85oghmAOV8UeoFVXh7EMK7E8L4GOqUBBlD5E9EBXeTKT0b7aLE%2FH1Yt6ysMOTny%2FmSj0TEoHEnjtSiYPzIk8HqWHnXCgzcYfYo1T3GrZrMAS%2FodcdGvX6xq5YkV41vEwdb3upVwfTZhL7se2UotkkBOUcNpOtyhxprlmdp0gK8WIxSfh3yNrHmzHWpC2uoXzdS4Ov7Wz6DQEg1aGsaO35gsUh6%2F43UQTa8JFVnE0Rp98unyc3uZwaYIqrrW&X-Amz-Signature=42276cbd5d179f5b7034b107f462ef4e9c03644131f056a9c0413857e135f553&X-Amz-SignedHeaders=host&x-id=GetObject)
