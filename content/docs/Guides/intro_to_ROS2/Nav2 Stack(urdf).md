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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ5PKM7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQy3jbofPetR7yXw6vLjFAHYwZAaparJ45Ct%2F8o8rRRwIhAJgBPJTI%2FJP%2BhlwpwQN%2BevS1D%2BI2TnBSbLjpmqVFfpsxKv8DCEgQABoMNjM3NDIzMTgzODA1IgybzcSgvkvuspctR0Qq3ANlwLuxXHfANB0TdClXwyL7fgH5b85S7wZF7wz4qSwwcr5a%2F5cJm4T4w1MDDc%2FIE9lmVG9mY3Za6vMCJ0j6ADhDBrAoBTj%2Fpo0NhU0rif2n6pqdKLTcWw7v92fvF7mJnrN0yVzwANvXD44q2wnKUu7LSBrkAuqDJYieMQXHpPGjSFUfw3ebbUqMj4jxOFiY7ZLKcDCM8QdlSjYIS2E%2BjrCqTSZ8ckyGz8P65p5%2BjaHf1naEAgZ5G12AWaYGB7AwwyCi%2BdCEaEu4Tyjw18X4tkGs0VNwR4wsCsrtOZOxTgxEzFIunAQPOMMJq%2BXfRQqSS2jomnUQUVzl%2FbCpW1Te0YlTfm0Gx89Y4Kzhbk%2FNu6utdqF6nUkGeMq3XBio8aJJepslJivK%2BwCoWXHFMg2XXB2ju7AN0VfMmIgBlnVKaptJKobVPdWgHIJQcjQjotYCA3RFQIVtDcwKNCRhyYbOGK8GwuyXWoiBT%2F2Vu42o1La1sKPuv8EhWqrQCq1P60v5KvcO63%2F2RF%2FbaOKVJUi88h7NlIqq4xESQA%2FqtEFFUbf9VYSojcbnmvdYKTTE2vQknxkb8BxIheEQG0H28cwFu83NJhlhOuTqrl5zcsihNY%2FP3jXU4qY9dH8Uqcm7MTDmwLvCBjqkAeStiVdiUjMQvc445%2BsZX1K9Vfgemjxw4ABrnDxzyI3AFUVyhm8Vbl43zykaCvKh0ZvLKXvV%2FXPVsUFOsqJM3J08a6LuXC2e6OBNNqZ0kY5X32kLoBaCKSbN5QgWp0xdNHiJ8c9Oht3Pg4a8LFhKjD%2F6SLPVWM4B23NbizTkOIuuEU17NSbyqP5NwIXlVVYsGSrJSsW1FHl7Ut2eWRoozxL1yS6m&X-Amz-Signature=93d0f33fe2e6df122d13041c858fdae20dc61ab86d58a828013f67a5ae727cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ5PKM7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQy3jbofPetR7yXw6vLjFAHYwZAaparJ45Ct%2F8o8rRRwIhAJgBPJTI%2FJP%2BhlwpwQN%2BevS1D%2BI2TnBSbLjpmqVFfpsxKv8DCEgQABoMNjM3NDIzMTgzODA1IgybzcSgvkvuspctR0Qq3ANlwLuxXHfANB0TdClXwyL7fgH5b85S7wZF7wz4qSwwcr5a%2F5cJm4T4w1MDDc%2FIE9lmVG9mY3Za6vMCJ0j6ADhDBrAoBTj%2Fpo0NhU0rif2n6pqdKLTcWw7v92fvF7mJnrN0yVzwANvXD44q2wnKUu7LSBrkAuqDJYieMQXHpPGjSFUfw3ebbUqMj4jxOFiY7ZLKcDCM8QdlSjYIS2E%2BjrCqTSZ8ckyGz8P65p5%2BjaHf1naEAgZ5G12AWaYGB7AwwyCi%2BdCEaEu4Tyjw18X4tkGs0VNwR4wsCsrtOZOxTgxEzFIunAQPOMMJq%2BXfRQqSS2jomnUQUVzl%2FbCpW1Te0YlTfm0Gx89Y4Kzhbk%2FNu6utdqF6nUkGeMq3XBio8aJJepslJivK%2BwCoWXHFMg2XXB2ju7AN0VfMmIgBlnVKaptJKobVPdWgHIJQcjQjotYCA3RFQIVtDcwKNCRhyYbOGK8GwuyXWoiBT%2F2Vu42o1La1sKPuv8EhWqrQCq1P60v5KvcO63%2F2RF%2FbaOKVJUi88h7NlIqq4xESQA%2FqtEFFUbf9VYSojcbnmvdYKTTE2vQknxkb8BxIheEQG0H28cwFu83NJhlhOuTqrl5zcsihNY%2FP3jXU4qY9dH8Uqcm7MTDmwLvCBjqkAeStiVdiUjMQvc445%2BsZX1K9Vfgemjxw4ABrnDxzyI3AFUVyhm8Vbl43zykaCvKh0ZvLKXvV%2FXPVsUFOsqJM3J08a6LuXC2e6OBNNqZ0kY5X32kLoBaCKSbN5QgWp0xdNHiJ8c9Oht3Pg4a8LFhKjD%2F6SLPVWM4B23NbizTkOIuuEU17NSbyqP5NwIXlVVYsGSrJSsW1FHl7Ut2eWRoozxL1yS6m&X-Amz-Signature=8c33bc156a137d5ce540026d4408134b8fc590874018ceac6da50d86f1a17fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ5PKM7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQy3jbofPetR7yXw6vLjFAHYwZAaparJ45Ct%2F8o8rRRwIhAJgBPJTI%2FJP%2BhlwpwQN%2BevS1D%2BI2TnBSbLjpmqVFfpsxKv8DCEgQABoMNjM3NDIzMTgzODA1IgybzcSgvkvuspctR0Qq3ANlwLuxXHfANB0TdClXwyL7fgH5b85S7wZF7wz4qSwwcr5a%2F5cJm4T4w1MDDc%2FIE9lmVG9mY3Za6vMCJ0j6ADhDBrAoBTj%2Fpo0NhU0rif2n6pqdKLTcWw7v92fvF7mJnrN0yVzwANvXD44q2wnKUu7LSBrkAuqDJYieMQXHpPGjSFUfw3ebbUqMj4jxOFiY7ZLKcDCM8QdlSjYIS2E%2BjrCqTSZ8ckyGz8P65p5%2BjaHf1naEAgZ5G12AWaYGB7AwwyCi%2BdCEaEu4Tyjw18X4tkGs0VNwR4wsCsrtOZOxTgxEzFIunAQPOMMJq%2BXfRQqSS2jomnUQUVzl%2FbCpW1Te0YlTfm0Gx89Y4Kzhbk%2FNu6utdqF6nUkGeMq3XBio8aJJepslJivK%2BwCoWXHFMg2XXB2ju7AN0VfMmIgBlnVKaptJKobVPdWgHIJQcjQjotYCA3RFQIVtDcwKNCRhyYbOGK8GwuyXWoiBT%2F2Vu42o1La1sKPuv8EhWqrQCq1P60v5KvcO63%2F2RF%2FbaOKVJUi88h7NlIqq4xESQA%2FqtEFFUbf9VYSojcbnmvdYKTTE2vQknxkb8BxIheEQG0H28cwFu83NJhlhOuTqrl5zcsihNY%2FP3jXU4qY9dH8Uqcm7MTDmwLvCBjqkAeStiVdiUjMQvc445%2BsZX1K9Vfgemjxw4ABrnDxzyI3AFUVyhm8Vbl43zykaCvKh0ZvLKXvV%2FXPVsUFOsqJM3J08a6LuXC2e6OBNNqZ0kY5X32kLoBaCKSbN5QgWp0xdNHiJ8c9Oht3Pg4a8LFhKjD%2F6SLPVWM4B23NbizTkOIuuEU17NSbyqP5NwIXlVVYsGSrJSsW1FHl7Ut2eWRoozxL1yS6m&X-Amz-Signature=5e9f10154456fb809a57d4e41955a068d2e06b60af2339a2260cb54225c641ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ5PKM7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQy3jbofPetR7yXw6vLjFAHYwZAaparJ45Ct%2F8o8rRRwIhAJgBPJTI%2FJP%2BhlwpwQN%2BevS1D%2BI2TnBSbLjpmqVFfpsxKv8DCEgQABoMNjM3NDIzMTgzODA1IgybzcSgvkvuspctR0Qq3ANlwLuxXHfANB0TdClXwyL7fgH5b85S7wZF7wz4qSwwcr5a%2F5cJm4T4w1MDDc%2FIE9lmVG9mY3Za6vMCJ0j6ADhDBrAoBTj%2Fpo0NhU0rif2n6pqdKLTcWw7v92fvF7mJnrN0yVzwANvXD44q2wnKUu7LSBrkAuqDJYieMQXHpPGjSFUfw3ebbUqMj4jxOFiY7ZLKcDCM8QdlSjYIS2E%2BjrCqTSZ8ckyGz8P65p5%2BjaHf1naEAgZ5G12AWaYGB7AwwyCi%2BdCEaEu4Tyjw18X4tkGs0VNwR4wsCsrtOZOxTgxEzFIunAQPOMMJq%2BXfRQqSS2jomnUQUVzl%2FbCpW1Te0YlTfm0Gx89Y4Kzhbk%2FNu6utdqF6nUkGeMq3XBio8aJJepslJivK%2BwCoWXHFMg2XXB2ju7AN0VfMmIgBlnVKaptJKobVPdWgHIJQcjQjotYCA3RFQIVtDcwKNCRhyYbOGK8GwuyXWoiBT%2F2Vu42o1La1sKPuv8EhWqrQCq1P60v5KvcO63%2F2RF%2FbaOKVJUi88h7NlIqq4xESQA%2FqtEFFUbf9VYSojcbnmvdYKTTE2vQknxkb8BxIheEQG0H28cwFu83NJhlhOuTqrl5zcsihNY%2FP3jXU4qY9dH8Uqcm7MTDmwLvCBjqkAeStiVdiUjMQvc445%2BsZX1K9Vfgemjxw4ABrnDxzyI3AFUVyhm8Vbl43zykaCvKh0ZvLKXvV%2FXPVsUFOsqJM3J08a6LuXC2e6OBNNqZ0kY5X32kLoBaCKSbN5QgWp0xdNHiJ8c9Oht3Pg4a8LFhKjD%2F6SLPVWM4B23NbizTkOIuuEU17NSbyqP5NwIXlVVYsGSrJSsW1FHl7Ut2eWRoozxL1yS6m&X-Amz-Signature=791a01356d6a39c969734ccfe3e2164f30a9f3d392648456bcfacd22bacb2034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ5PKM7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQy3jbofPetR7yXw6vLjFAHYwZAaparJ45Ct%2F8o8rRRwIhAJgBPJTI%2FJP%2BhlwpwQN%2BevS1D%2BI2TnBSbLjpmqVFfpsxKv8DCEgQABoMNjM3NDIzMTgzODA1IgybzcSgvkvuspctR0Qq3ANlwLuxXHfANB0TdClXwyL7fgH5b85S7wZF7wz4qSwwcr5a%2F5cJm4T4w1MDDc%2FIE9lmVG9mY3Za6vMCJ0j6ADhDBrAoBTj%2Fpo0NhU0rif2n6pqdKLTcWw7v92fvF7mJnrN0yVzwANvXD44q2wnKUu7LSBrkAuqDJYieMQXHpPGjSFUfw3ebbUqMj4jxOFiY7ZLKcDCM8QdlSjYIS2E%2BjrCqTSZ8ckyGz8P65p5%2BjaHf1naEAgZ5G12AWaYGB7AwwyCi%2BdCEaEu4Tyjw18X4tkGs0VNwR4wsCsrtOZOxTgxEzFIunAQPOMMJq%2BXfRQqSS2jomnUQUVzl%2FbCpW1Te0YlTfm0Gx89Y4Kzhbk%2FNu6utdqF6nUkGeMq3XBio8aJJepslJivK%2BwCoWXHFMg2XXB2ju7AN0VfMmIgBlnVKaptJKobVPdWgHIJQcjQjotYCA3RFQIVtDcwKNCRhyYbOGK8GwuyXWoiBT%2F2Vu42o1La1sKPuv8EhWqrQCq1P60v5KvcO63%2F2RF%2FbaOKVJUi88h7NlIqq4xESQA%2FqtEFFUbf9VYSojcbnmvdYKTTE2vQknxkb8BxIheEQG0H28cwFu83NJhlhOuTqrl5zcsihNY%2FP3jXU4qY9dH8Uqcm7MTDmwLvCBjqkAeStiVdiUjMQvc445%2BsZX1K9Vfgemjxw4ABrnDxzyI3AFUVyhm8Vbl43zykaCvKh0ZvLKXvV%2FXPVsUFOsqJM3J08a6LuXC2e6OBNNqZ0kY5X32kLoBaCKSbN5QgWp0xdNHiJ8c9Oht3Pg4a8LFhKjD%2F6SLPVWM4B23NbizTkOIuuEU17NSbyqP5NwIXlVVYsGSrJSsW1FHl7Ut2eWRoozxL1yS6m&X-Amz-Signature=db5ee12cbb3bfee3d8d0f95676e4b6baf4e31170f098878529c7677ef41ffcba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ5PKM7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCQy3jbofPetR7yXw6vLjFAHYwZAaparJ45Ct%2F8o8rRRwIhAJgBPJTI%2FJP%2BhlwpwQN%2BevS1D%2BI2TnBSbLjpmqVFfpsxKv8DCEgQABoMNjM3NDIzMTgzODA1IgybzcSgvkvuspctR0Qq3ANlwLuxXHfANB0TdClXwyL7fgH5b85S7wZF7wz4qSwwcr5a%2F5cJm4T4w1MDDc%2FIE9lmVG9mY3Za6vMCJ0j6ADhDBrAoBTj%2Fpo0NhU0rif2n6pqdKLTcWw7v92fvF7mJnrN0yVzwANvXD44q2wnKUu7LSBrkAuqDJYieMQXHpPGjSFUfw3ebbUqMj4jxOFiY7ZLKcDCM8QdlSjYIS2E%2BjrCqTSZ8ckyGz8P65p5%2BjaHf1naEAgZ5G12AWaYGB7AwwyCi%2BdCEaEu4Tyjw18X4tkGs0VNwR4wsCsrtOZOxTgxEzFIunAQPOMMJq%2BXfRQqSS2jomnUQUVzl%2FbCpW1Te0YlTfm0Gx89Y4Kzhbk%2FNu6utdqF6nUkGeMq3XBio8aJJepslJivK%2BwCoWXHFMg2XXB2ju7AN0VfMmIgBlnVKaptJKobVPdWgHIJQcjQjotYCA3RFQIVtDcwKNCRhyYbOGK8GwuyXWoiBT%2F2Vu42o1La1sKPuv8EhWqrQCq1P60v5KvcO63%2F2RF%2FbaOKVJUi88h7NlIqq4xESQA%2FqtEFFUbf9VYSojcbnmvdYKTTE2vQknxkb8BxIheEQG0H28cwFu83NJhlhOuTqrl5zcsihNY%2FP3jXU4qY9dH8Uqcm7MTDmwLvCBjqkAeStiVdiUjMQvc445%2BsZX1K9Vfgemjxw4ABrnDxzyI3AFUVyhm8Vbl43zykaCvKh0ZvLKXvV%2FXPVsUFOsqJM3J08a6LuXC2e6OBNNqZ0kY5X32kLoBaCKSbN5QgWp0xdNHiJ8c9Oht3Pg4a8LFhKjD%2F6SLPVWM4B23NbizTkOIuuEU17NSbyqP5NwIXlVVYsGSrJSsW1FHl7Ut2eWRoozxL1yS6m&X-Amz-Signature=771db28a6e18eba1845e35708315ce7ab3a8aa994f03b70bb147c3112c2fbe82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
