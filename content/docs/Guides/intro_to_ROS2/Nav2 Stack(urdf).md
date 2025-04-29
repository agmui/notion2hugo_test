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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW5P2KJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYyYFL9fSn6S3sv6pHnZJJzh8XOH0a2njVF%2FnOXNY5LAIhAPGgNK2qn0CPtM7nE6BY%2F0xAIhq21xNgGGFPuwlMBB6UKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FsoO%2FzN%2FQHIIpsq4q3ANR3QeYmeXhX6GswP51v6RtwGmDJjtv8aGKXQIsR6O0XYRWwcXcEktRpDu1qBHIaGer5MmizaS5YnqJjBSt%2Bc7M2gRoT5dEaYDQSKCJqiGYBa%2BjhQsjIySQFvBb9Z1J8V7qJglmcJZcCCPyqyE8NNeYBGXERAMIRmElPFAidMyAHyl3q8pgKaJp5c9j%2FFkmOBQKmpbNoWGZ3gRlqGxexk4eoPEWdGD%2FbTKyTLURU%2FACl6nIdS1W0kQ5fG58%2B4iKI3VL3jrTBwmFpuWnuf11SrW%2FAL%2FjcCT4LSgjU6nGWyMCgGK7v7XCXI0wAzKNNS9MXhBvFzXvpM%2FRZltOeNLJd6kl7rF4KFfyC4WwKBJLVbGJbeyZJOBEEui3jntWA%2BLaMT91vjrjRk3GzmVPpmaNdR3%2Bj8e83mwYiPlyv0I%2BvUin0Ms%2BXIDV0PEfU4%2BdgyK1L3GRYzbPMl6RuD9T4SMLwQfcwsdjT3Bi%2BNqVx%2BjvnEW7IBZAOrAySHxZ2ljC1JNQHXpZKNw8syLn3a%2F0TMLw8zzTmOiFUrRZ%2FPDXah1A7QsbNxK9am%2FCYgYuQg%2BcyQOS7PQUsdb5LrGS4%2Fgiz%2ByD1dIthfws0bZccwpIeyFmJYsf8ld3XfTI240PDKuDdTCRo8PABjqkAXCvK9UpB21g66l6QFhButovpXx3ZgGiZ1LxisCCEEYABwhNYqI5deopoB7Rb0TAMEi1sVqvittRV5Qj4WhqQNu7jCRuowBhy6jtxof%2FSiy66vS75anQeSQsYNK1OaFZbXkDxtJWxh9c7IKTEAODUl%2FB7CDfhy2Kg7axlZVcWvhfq7tUmnA9bV9%2BtG7%2Bt6ZAj1JxyZZW1EEUAxRLt7E4he1p1ogf&X-Amz-Signature=7eb2d7de9e764d37c71ec63d053371fdb6bfe0cf85d730894ea49641cd836063&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW5P2KJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYyYFL9fSn6S3sv6pHnZJJzh8XOH0a2njVF%2FnOXNY5LAIhAPGgNK2qn0CPtM7nE6BY%2F0xAIhq21xNgGGFPuwlMBB6UKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FsoO%2FzN%2FQHIIpsq4q3ANR3QeYmeXhX6GswP51v6RtwGmDJjtv8aGKXQIsR6O0XYRWwcXcEktRpDu1qBHIaGer5MmizaS5YnqJjBSt%2Bc7M2gRoT5dEaYDQSKCJqiGYBa%2BjhQsjIySQFvBb9Z1J8V7qJglmcJZcCCPyqyE8NNeYBGXERAMIRmElPFAidMyAHyl3q8pgKaJp5c9j%2FFkmOBQKmpbNoWGZ3gRlqGxexk4eoPEWdGD%2FbTKyTLURU%2FACl6nIdS1W0kQ5fG58%2B4iKI3VL3jrTBwmFpuWnuf11SrW%2FAL%2FjcCT4LSgjU6nGWyMCgGK7v7XCXI0wAzKNNS9MXhBvFzXvpM%2FRZltOeNLJd6kl7rF4KFfyC4WwKBJLVbGJbeyZJOBEEui3jntWA%2BLaMT91vjrjRk3GzmVPpmaNdR3%2Bj8e83mwYiPlyv0I%2BvUin0Ms%2BXIDV0PEfU4%2BdgyK1L3GRYzbPMl6RuD9T4SMLwQfcwsdjT3Bi%2BNqVx%2BjvnEW7IBZAOrAySHxZ2ljC1JNQHXpZKNw8syLn3a%2F0TMLw8zzTmOiFUrRZ%2FPDXah1A7QsbNxK9am%2FCYgYuQg%2BcyQOS7PQUsdb5LrGS4%2Fgiz%2ByD1dIthfws0bZccwpIeyFmJYsf8ld3XfTI240PDKuDdTCRo8PABjqkAXCvK9UpB21g66l6QFhButovpXx3ZgGiZ1LxisCCEEYABwhNYqI5deopoB7Rb0TAMEi1sVqvittRV5Qj4WhqQNu7jCRuowBhy6jtxof%2FSiy66vS75anQeSQsYNK1OaFZbXkDxtJWxh9c7IKTEAODUl%2FB7CDfhy2Kg7axlZVcWvhfq7tUmnA9bV9%2BtG7%2Bt6ZAj1JxyZZW1EEUAxRLt7E4he1p1ogf&X-Amz-Signature=fdc23addd64a4608c9a7f369d0c66b1d557b995123f51c81cfeae15abab7d78b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW5P2KJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYyYFL9fSn6S3sv6pHnZJJzh8XOH0a2njVF%2FnOXNY5LAIhAPGgNK2qn0CPtM7nE6BY%2F0xAIhq21xNgGGFPuwlMBB6UKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FsoO%2FzN%2FQHIIpsq4q3ANR3QeYmeXhX6GswP51v6RtwGmDJjtv8aGKXQIsR6O0XYRWwcXcEktRpDu1qBHIaGer5MmizaS5YnqJjBSt%2Bc7M2gRoT5dEaYDQSKCJqiGYBa%2BjhQsjIySQFvBb9Z1J8V7qJglmcJZcCCPyqyE8NNeYBGXERAMIRmElPFAidMyAHyl3q8pgKaJp5c9j%2FFkmOBQKmpbNoWGZ3gRlqGxexk4eoPEWdGD%2FbTKyTLURU%2FACl6nIdS1W0kQ5fG58%2B4iKI3VL3jrTBwmFpuWnuf11SrW%2FAL%2FjcCT4LSgjU6nGWyMCgGK7v7XCXI0wAzKNNS9MXhBvFzXvpM%2FRZltOeNLJd6kl7rF4KFfyC4WwKBJLVbGJbeyZJOBEEui3jntWA%2BLaMT91vjrjRk3GzmVPpmaNdR3%2Bj8e83mwYiPlyv0I%2BvUin0Ms%2BXIDV0PEfU4%2BdgyK1L3GRYzbPMl6RuD9T4SMLwQfcwsdjT3Bi%2BNqVx%2BjvnEW7IBZAOrAySHxZ2ljC1JNQHXpZKNw8syLn3a%2F0TMLw8zzTmOiFUrRZ%2FPDXah1A7QsbNxK9am%2FCYgYuQg%2BcyQOS7PQUsdb5LrGS4%2Fgiz%2ByD1dIthfws0bZccwpIeyFmJYsf8ld3XfTI240PDKuDdTCRo8PABjqkAXCvK9UpB21g66l6QFhButovpXx3ZgGiZ1LxisCCEEYABwhNYqI5deopoB7Rb0TAMEi1sVqvittRV5Qj4WhqQNu7jCRuowBhy6jtxof%2FSiy66vS75anQeSQsYNK1OaFZbXkDxtJWxh9c7IKTEAODUl%2FB7CDfhy2Kg7axlZVcWvhfq7tUmnA9bV9%2BtG7%2Bt6ZAj1JxyZZW1EEUAxRLt7E4he1p1ogf&X-Amz-Signature=460b03ca0ed1a02323cb726c98a79829cfcd21acfa571dd1532091e79c741138&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW5P2KJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYyYFL9fSn6S3sv6pHnZJJzh8XOH0a2njVF%2FnOXNY5LAIhAPGgNK2qn0CPtM7nE6BY%2F0xAIhq21xNgGGFPuwlMBB6UKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FsoO%2FzN%2FQHIIpsq4q3ANR3QeYmeXhX6GswP51v6RtwGmDJjtv8aGKXQIsR6O0XYRWwcXcEktRpDu1qBHIaGer5MmizaS5YnqJjBSt%2Bc7M2gRoT5dEaYDQSKCJqiGYBa%2BjhQsjIySQFvBb9Z1J8V7qJglmcJZcCCPyqyE8NNeYBGXERAMIRmElPFAidMyAHyl3q8pgKaJp5c9j%2FFkmOBQKmpbNoWGZ3gRlqGxexk4eoPEWdGD%2FbTKyTLURU%2FACl6nIdS1W0kQ5fG58%2B4iKI3VL3jrTBwmFpuWnuf11SrW%2FAL%2FjcCT4LSgjU6nGWyMCgGK7v7XCXI0wAzKNNS9MXhBvFzXvpM%2FRZltOeNLJd6kl7rF4KFfyC4WwKBJLVbGJbeyZJOBEEui3jntWA%2BLaMT91vjrjRk3GzmVPpmaNdR3%2Bj8e83mwYiPlyv0I%2BvUin0Ms%2BXIDV0PEfU4%2BdgyK1L3GRYzbPMl6RuD9T4SMLwQfcwsdjT3Bi%2BNqVx%2BjvnEW7IBZAOrAySHxZ2ljC1JNQHXpZKNw8syLn3a%2F0TMLw8zzTmOiFUrRZ%2FPDXah1A7QsbNxK9am%2FCYgYuQg%2BcyQOS7PQUsdb5LrGS4%2Fgiz%2ByD1dIthfws0bZccwpIeyFmJYsf8ld3XfTI240PDKuDdTCRo8PABjqkAXCvK9UpB21g66l6QFhButovpXx3ZgGiZ1LxisCCEEYABwhNYqI5deopoB7Rb0TAMEi1sVqvittRV5Qj4WhqQNu7jCRuowBhy6jtxof%2FSiy66vS75anQeSQsYNK1OaFZbXkDxtJWxh9c7IKTEAODUl%2FB7CDfhy2Kg7axlZVcWvhfq7tUmnA9bV9%2BtG7%2Bt6ZAj1JxyZZW1EEUAxRLt7E4he1p1ogf&X-Amz-Signature=279477a0afcc3ed1b81d66c0c575ee8f72e977b4090b1a3351e33ff1c7f57cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW5P2KJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYyYFL9fSn6S3sv6pHnZJJzh8XOH0a2njVF%2FnOXNY5LAIhAPGgNK2qn0CPtM7nE6BY%2F0xAIhq21xNgGGFPuwlMBB6UKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FsoO%2FzN%2FQHIIpsq4q3ANR3QeYmeXhX6GswP51v6RtwGmDJjtv8aGKXQIsR6O0XYRWwcXcEktRpDu1qBHIaGer5MmizaS5YnqJjBSt%2Bc7M2gRoT5dEaYDQSKCJqiGYBa%2BjhQsjIySQFvBb9Z1J8V7qJglmcJZcCCPyqyE8NNeYBGXERAMIRmElPFAidMyAHyl3q8pgKaJp5c9j%2FFkmOBQKmpbNoWGZ3gRlqGxexk4eoPEWdGD%2FbTKyTLURU%2FACl6nIdS1W0kQ5fG58%2B4iKI3VL3jrTBwmFpuWnuf11SrW%2FAL%2FjcCT4LSgjU6nGWyMCgGK7v7XCXI0wAzKNNS9MXhBvFzXvpM%2FRZltOeNLJd6kl7rF4KFfyC4WwKBJLVbGJbeyZJOBEEui3jntWA%2BLaMT91vjrjRk3GzmVPpmaNdR3%2Bj8e83mwYiPlyv0I%2BvUin0Ms%2BXIDV0PEfU4%2BdgyK1L3GRYzbPMl6RuD9T4SMLwQfcwsdjT3Bi%2BNqVx%2BjvnEW7IBZAOrAySHxZ2ljC1JNQHXpZKNw8syLn3a%2F0TMLw8zzTmOiFUrRZ%2FPDXah1A7QsbNxK9am%2FCYgYuQg%2BcyQOS7PQUsdb5LrGS4%2Fgiz%2ByD1dIthfws0bZccwpIeyFmJYsf8ld3XfTI240PDKuDdTCRo8PABjqkAXCvK9UpB21g66l6QFhButovpXx3ZgGiZ1LxisCCEEYABwhNYqI5deopoB7Rb0TAMEi1sVqvittRV5Qj4WhqQNu7jCRuowBhy6jtxof%2FSiy66vS75anQeSQsYNK1OaFZbXkDxtJWxh9c7IKTEAODUl%2FB7CDfhy2Kg7axlZVcWvhfq7tUmnA9bV9%2BtG7%2Bt6ZAj1JxyZZW1EEUAxRLt7E4he1p1ogf&X-Amz-Signature=fafd4a7d7b091c83075b4eb330b7bef56a9d0a4e328f9a479f56c3f0fd37fcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FW5P2KJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYyYFL9fSn6S3sv6pHnZJJzh8XOH0a2njVF%2FnOXNY5LAIhAPGgNK2qn0CPtM7nE6BY%2F0xAIhq21xNgGGFPuwlMBB6UKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FsoO%2FzN%2FQHIIpsq4q3ANR3QeYmeXhX6GswP51v6RtwGmDJjtv8aGKXQIsR6O0XYRWwcXcEktRpDu1qBHIaGer5MmizaS5YnqJjBSt%2Bc7M2gRoT5dEaYDQSKCJqiGYBa%2BjhQsjIySQFvBb9Z1J8V7qJglmcJZcCCPyqyE8NNeYBGXERAMIRmElPFAidMyAHyl3q8pgKaJp5c9j%2FFkmOBQKmpbNoWGZ3gRlqGxexk4eoPEWdGD%2FbTKyTLURU%2FACl6nIdS1W0kQ5fG58%2B4iKI3VL3jrTBwmFpuWnuf11SrW%2FAL%2FjcCT4LSgjU6nGWyMCgGK7v7XCXI0wAzKNNS9MXhBvFzXvpM%2FRZltOeNLJd6kl7rF4KFfyC4WwKBJLVbGJbeyZJOBEEui3jntWA%2BLaMT91vjrjRk3GzmVPpmaNdR3%2Bj8e83mwYiPlyv0I%2BvUin0Ms%2BXIDV0PEfU4%2BdgyK1L3GRYzbPMl6RuD9T4SMLwQfcwsdjT3Bi%2BNqVx%2BjvnEW7IBZAOrAySHxZ2ljC1JNQHXpZKNw8syLn3a%2F0TMLw8zzTmOiFUrRZ%2FPDXah1A7QsbNxK9am%2FCYgYuQg%2BcyQOS7PQUsdb5LrGS4%2Fgiz%2ByD1dIthfws0bZccwpIeyFmJYsf8ld3XfTI240PDKuDdTCRo8PABjqkAXCvK9UpB21g66l6QFhButovpXx3ZgGiZ1LxisCCEEYABwhNYqI5deopoB7Rb0TAMEi1sVqvittRV5Qj4WhqQNu7jCRuowBhy6jtxof%2FSiy66vS75anQeSQsYNK1OaFZbXkDxtJWxh9c7IKTEAODUl%2FB7CDfhy2Kg7axlZVcWvhfq7tUmnA9bV9%2BtG7%2Bt6ZAj1JxyZZW1EEUAxRLt7E4he1p1ogf&X-Amz-Signature=774f450153047b6f953a382705d88d315cfdac1b0cf71cc3a19057c10ff8591d&X-Amz-SignedHeaders=host&x-id=GetObject)
