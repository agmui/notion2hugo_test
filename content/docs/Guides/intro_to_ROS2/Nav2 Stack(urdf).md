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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6FLWA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLP1UQmRaQa8RCb%2Bo3x46YhbI7ogTIYs5MKzYsvXjbQAiBemKdEl2%2BakATRmXCosSIMWZKl%2FBuyN9yEWVT7q1DyjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqTOzm9LXvd%2FVg2cgKtwDCVPzvtp2wwHWr57YCRjds5A467ha82h6M8MGGLPKtubEPtkdkWREwJ3zUgBbo1eamWj%2BXZXcjDZqRd6aSPerXf3qJ6hYSK5NcEXibLDyjzcBA97TqRNjzSNDWMLqKINhSVvJWadx1M3p3nNmCgZa6Br%2BwPDWxhuf4e%2FIbyVuncXhYVTlYggERSKorflPBTjHe7Uy6eOYktCHI2LyFUYcO1doMwBPMPoOOQNiAPn8sZrlxEK%2Fm8YbeaLWympi4sjtB8l6VtsuQKXqsrd1t97uVoEsxnt1gQ84PiHg9j4cAY5eqvtc0HnEHGDenHZ5EkMROmBey8168iJZet4am4etBPncJrEHR96tzpnOLohHyULeqXEujSXamXqmw6ZCw%2B2Ydo9BZY86vGNRHvp2MZ%2BE8rpobaSKQW4nRlC%2FIHqP%2FZlsIoskEdjpFmUiwIgV9zdc5UmNvOS35jtekN4d9D8hNFGv4AtmbJo0fYlmAKeWfZEWXxN5mCAlSdsApUvpIZY41MRftsiJvPPA%2BPykdBnO1lGLe4AKIq5%2FV2dSHuo1JomdoaemMbqUZRHd612NUNzramHPzGEw0aXhnUdO%2Fbe21f6p9BRovVDTrohM4UVW9pb0YJzKIW79MLi4HJMwsbzevgY6pgFfE6l4dNT5Gn3flfha2PWKUKH3NL48yHq6x9KKmwL8SMz0Xoho95P6rsyxB0gl%2FlGjP%2B9WcqOjUmlQq3bkHMfP7dkman7vzH3LZ66NTG0Pk%2FfXdzyJ4EqlCw7yAyGpM9MiaugHWQPzYx666U%2F%2BFwjIWYnV8huVydNlz4ehIuFn%2F6qmt5VcYWMOmDFCVJOoM47%2B%2Bw03ptT%2BFK2U3PEknGv780vWvybi&X-Amz-Signature=f0a59a680f5e365c081cc23bab678048e9e10d24aac8d41bc5a59ee4b2be5b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6FLWA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLP1UQmRaQa8RCb%2Bo3x46YhbI7ogTIYs5MKzYsvXjbQAiBemKdEl2%2BakATRmXCosSIMWZKl%2FBuyN9yEWVT7q1DyjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqTOzm9LXvd%2FVg2cgKtwDCVPzvtp2wwHWr57YCRjds5A467ha82h6M8MGGLPKtubEPtkdkWREwJ3zUgBbo1eamWj%2BXZXcjDZqRd6aSPerXf3qJ6hYSK5NcEXibLDyjzcBA97TqRNjzSNDWMLqKINhSVvJWadx1M3p3nNmCgZa6Br%2BwPDWxhuf4e%2FIbyVuncXhYVTlYggERSKorflPBTjHe7Uy6eOYktCHI2LyFUYcO1doMwBPMPoOOQNiAPn8sZrlxEK%2Fm8YbeaLWympi4sjtB8l6VtsuQKXqsrd1t97uVoEsxnt1gQ84PiHg9j4cAY5eqvtc0HnEHGDenHZ5EkMROmBey8168iJZet4am4etBPncJrEHR96tzpnOLohHyULeqXEujSXamXqmw6ZCw%2B2Ydo9BZY86vGNRHvp2MZ%2BE8rpobaSKQW4nRlC%2FIHqP%2FZlsIoskEdjpFmUiwIgV9zdc5UmNvOS35jtekN4d9D8hNFGv4AtmbJo0fYlmAKeWfZEWXxN5mCAlSdsApUvpIZY41MRftsiJvPPA%2BPykdBnO1lGLe4AKIq5%2FV2dSHuo1JomdoaemMbqUZRHd612NUNzramHPzGEw0aXhnUdO%2Fbe21f6p9BRovVDTrohM4UVW9pb0YJzKIW79MLi4HJMwsbzevgY6pgFfE6l4dNT5Gn3flfha2PWKUKH3NL48yHq6x9KKmwL8SMz0Xoho95P6rsyxB0gl%2FlGjP%2B9WcqOjUmlQq3bkHMfP7dkman7vzH3LZ66NTG0Pk%2FfXdzyJ4EqlCw7yAyGpM9MiaugHWQPzYx666U%2F%2BFwjIWYnV8huVydNlz4ehIuFn%2F6qmt5VcYWMOmDFCVJOoM47%2B%2Bw03ptT%2BFK2U3PEknGv780vWvybi&X-Amz-Signature=70ecfddc992647d6b4538c060cb6e1c7688874bc2cd084326fe746800352c27d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6FLWA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLP1UQmRaQa8RCb%2Bo3x46YhbI7ogTIYs5MKzYsvXjbQAiBemKdEl2%2BakATRmXCosSIMWZKl%2FBuyN9yEWVT7q1DyjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqTOzm9LXvd%2FVg2cgKtwDCVPzvtp2wwHWr57YCRjds5A467ha82h6M8MGGLPKtubEPtkdkWREwJ3zUgBbo1eamWj%2BXZXcjDZqRd6aSPerXf3qJ6hYSK5NcEXibLDyjzcBA97TqRNjzSNDWMLqKINhSVvJWadx1M3p3nNmCgZa6Br%2BwPDWxhuf4e%2FIbyVuncXhYVTlYggERSKorflPBTjHe7Uy6eOYktCHI2LyFUYcO1doMwBPMPoOOQNiAPn8sZrlxEK%2Fm8YbeaLWympi4sjtB8l6VtsuQKXqsrd1t97uVoEsxnt1gQ84PiHg9j4cAY5eqvtc0HnEHGDenHZ5EkMROmBey8168iJZet4am4etBPncJrEHR96tzpnOLohHyULeqXEujSXamXqmw6ZCw%2B2Ydo9BZY86vGNRHvp2MZ%2BE8rpobaSKQW4nRlC%2FIHqP%2FZlsIoskEdjpFmUiwIgV9zdc5UmNvOS35jtekN4d9D8hNFGv4AtmbJo0fYlmAKeWfZEWXxN5mCAlSdsApUvpIZY41MRftsiJvPPA%2BPykdBnO1lGLe4AKIq5%2FV2dSHuo1JomdoaemMbqUZRHd612NUNzramHPzGEw0aXhnUdO%2Fbe21f6p9BRovVDTrohM4UVW9pb0YJzKIW79MLi4HJMwsbzevgY6pgFfE6l4dNT5Gn3flfha2PWKUKH3NL48yHq6x9KKmwL8SMz0Xoho95P6rsyxB0gl%2FlGjP%2B9WcqOjUmlQq3bkHMfP7dkman7vzH3LZ66NTG0Pk%2FfXdzyJ4EqlCw7yAyGpM9MiaugHWQPzYx666U%2F%2BFwjIWYnV8huVydNlz4ehIuFn%2F6qmt5VcYWMOmDFCVJOoM47%2B%2Bw03ptT%2BFK2U3PEknGv780vWvybi&X-Amz-Signature=893fec6c7d71c99ea4f5d328009cabc5ab8a046269d08664c5cff0ebde530528&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6FLWA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLP1UQmRaQa8RCb%2Bo3x46YhbI7ogTIYs5MKzYsvXjbQAiBemKdEl2%2BakATRmXCosSIMWZKl%2FBuyN9yEWVT7q1DyjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqTOzm9LXvd%2FVg2cgKtwDCVPzvtp2wwHWr57YCRjds5A467ha82h6M8MGGLPKtubEPtkdkWREwJ3zUgBbo1eamWj%2BXZXcjDZqRd6aSPerXf3qJ6hYSK5NcEXibLDyjzcBA97TqRNjzSNDWMLqKINhSVvJWadx1M3p3nNmCgZa6Br%2BwPDWxhuf4e%2FIbyVuncXhYVTlYggERSKorflPBTjHe7Uy6eOYktCHI2LyFUYcO1doMwBPMPoOOQNiAPn8sZrlxEK%2Fm8YbeaLWympi4sjtB8l6VtsuQKXqsrd1t97uVoEsxnt1gQ84PiHg9j4cAY5eqvtc0HnEHGDenHZ5EkMROmBey8168iJZet4am4etBPncJrEHR96tzpnOLohHyULeqXEujSXamXqmw6ZCw%2B2Ydo9BZY86vGNRHvp2MZ%2BE8rpobaSKQW4nRlC%2FIHqP%2FZlsIoskEdjpFmUiwIgV9zdc5UmNvOS35jtekN4d9D8hNFGv4AtmbJo0fYlmAKeWfZEWXxN5mCAlSdsApUvpIZY41MRftsiJvPPA%2BPykdBnO1lGLe4AKIq5%2FV2dSHuo1JomdoaemMbqUZRHd612NUNzramHPzGEw0aXhnUdO%2Fbe21f6p9BRovVDTrohM4UVW9pb0YJzKIW79MLi4HJMwsbzevgY6pgFfE6l4dNT5Gn3flfha2PWKUKH3NL48yHq6x9KKmwL8SMz0Xoho95P6rsyxB0gl%2FlGjP%2B9WcqOjUmlQq3bkHMfP7dkman7vzH3LZ66NTG0Pk%2FfXdzyJ4EqlCw7yAyGpM9MiaugHWQPzYx666U%2F%2BFwjIWYnV8huVydNlz4ehIuFn%2F6qmt5VcYWMOmDFCVJOoM47%2B%2Bw03ptT%2BFK2U3PEknGv780vWvybi&X-Amz-Signature=b99ad4f3eacf5bd95d7296ada7cf078d752acf0435815d65e11b77c1053f67a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6FLWA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLP1UQmRaQa8RCb%2Bo3x46YhbI7ogTIYs5MKzYsvXjbQAiBemKdEl2%2BakATRmXCosSIMWZKl%2FBuyN9yEWVT7q1DyjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqTOzm9LXvd%2FVg2cgKtwDCVPzvtp2wwHWr57YCRjds5A467ha82h6M8MGGLPKtubEPtkdkWREwJ3zUgBbo1eamWj%2BXZXcjDZqRd6aSPerXf3qJ6hYSK5NcEXibLDyjzcBA97TqRNjzSNDWMLqKINhSVvJWadx1M3p3nNmCgZa6Br%2BwPDWxhuf4e%2FIbyVuncXhYVTlYggERSKorflPBTjHe7Uy6eOYktCHI2LyFUYcO1doMwBPMPoOOQNiAPn8sZrlxEK%2Fm8YbeaLWympi4sjtB8l6VtsuQKXqsrd1t97uVoEsxnt1gQ84PiHg9j4cAY5eqvtc0HnEHGDenHZ5EkMROmBey8168iJZet4am4etBPncJrEHR96tzpnOLohHyULeqXEujSXamXqmw6ZCw%2B2Ydo9BZY86vGNRHvp2MZ%2BE8rpobaSKQW4nRlC%2FIHqP%2FZlsIoskEdjpFmUiwIgV9zdc5UmNvOS35jtekN4d9D8hNFGv4AtmbJo0fYlmAKeWfZEWXxN5mCAlSdsApUvpIZY41MRftsiJvPPA%2BPykdBnO1lGLe4AKIq5%2FV2dSHuo1JomdoaemMbqUZRHd612NUNzramHPzGEw0aXhnUdO%2Fbe21f6p9BRovVDTrohM4UVW9pb0YJzKIW79MLi4HJMwsbzevgY6pgFfE6l4dNT5Gn3flfha2PWKUKH3NL48yHq6x9KKmwL8SMz0Xoho95P6rsyxB0gl%2FlGjP%2B9WcqOjUmlQq3bkHMfP7dkman7vzH3LZ66NTG0Pk%2FfXdzyJ4EqlCw7yAyGpM9MiaugHWQPzYx666U%2F%2BFwjIWYnV8huVydNlz4ehIuFn%2F6qmt5VcYWMOmDFCVJOoM47%2B%2Bw03ptT%2BFK2U3PEknGv780vWvybi&X-Amz-Signature=7bb78dfc6289f874bfefae213a692332a66a38f2fd912453782121d86e9daab0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C6FLWA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLP1UQmRaQa8RCb%2Bo3x46YhbI7ogTIYs5MKzYsvXjbQAiBemKdEl2%2BakATRmXCosSIMWZKl%2FBuyN9yEWVT7q1DyjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqTOzm9LXvd%2FVg2cgKtwDCVPzvtp2wwHWr57YCRjds5A467ha82h6M8MGGLPKtubEPtkdkWREwJ3zUgBbo1eamWj%2BXZXcjDZqRd6aSPerXf3qJ6hYSK5NcEXibLDyjzcBA97TqRNjzSNDWMLqKINhSVvJWadx1M3p3nNmCgZa6Br%2BwPDWxhuf4e%2FIbyVuncXhYVTlYggERSKorflPBTjHe7Uy6eOYktCHI2LyFUYcO1doMwBPMPoOOQNiAPn8sZrlxEK%2Fm8YbeaLWympi4sjtB8l6VtsuQKXqsrd1t97uVoEsxnt1gQ84PiHg9j4cAY5eqvtc0HnEHGDenHZ5EkMROmBey8168iJZet4am4etBPncJrEHR96tzpnOLohHyULeqXEujSXamXqmw6ZCw%2B2Ydo9BZY86vGNRHvp2MZ%2BE8rpobaSKQW4nRlC%2FIHqP%2FZlsIoskEdjpFmUiwIgV9zdc5UmNvOS35jtekN4d9D8hNFGv4AtmbJo0fYlmAKeWfZEWXxN5mCAlSdsApUvpIZY41MRftsiJvPPA%2BPykdBnO1lGLe4AKIq5%2FV2dSHuo1JomdoaemMbqUZRHd612NUNzramHPzGEw0aXhnUdO%2Fbe21f6p9BRovVDTrohM4UVW9pb0YJzKIW79MLi4HJMwsbzevgY6pgFfE6l4dNT5Gn3flfha2PWKUKH3NL48yHq6x9KKmwL8SMz0Xoho95P6rsyxB0gl%2FlGjP%2B9WcqOjUmlQq3bkHMfP7dkman7vzH3LZ66NTG0Pk%2FfXdzyJ4EqlCw7yAyGpM9MiaugHWQPzYx666U%2F%2BFwjIWYnV8huVydNlz4ehIuFn%2F6qmt5VcYWMOmDFCVJOoM47%2B%2Bw03ptT%2BFK2U3PEknGv780vWvybi&X-Amz-Signature=9fd0c9965d07a728ff6380fb0f92756264df6f5869bf7e34560627ea5513623f&X-Amz-SignedHeaders=host&x-id=GetObject)
