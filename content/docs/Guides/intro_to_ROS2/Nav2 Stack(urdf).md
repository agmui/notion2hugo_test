---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY75SNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFyiGm2iVH5UJmqGoUF5kaoVqN3%2BYfgxvAyaBjLSZOdAiAjepeBpGpDeVtLWxO9Nj5NgtKCWGx0SlncjyPSvm3r7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8TjcBe0poHcDgt0KtwDJNJFq6N2VqRJlli8Lu1YOTWB4HNwMaTgvdkvQsrObMsdogwiowHToKtUQUL1I5f76tcAJVGDjtqyZoh53T5rtQ3cDwUujNxpzYp8CHGPzDn0u06MYf3ajblCP8g3vf9W%2FQ5EECdtpnquBruWYw4vqo4BGWrvcLLbisLMxZzzalXAMMwd7ZhtyBSa1tHZnQHupgkqYMMxbEGKq%2FeGkRV5Ob%2F6zzU9R5K7GPXVxvAhQ2SEUBrAtG4HeSyEzqMOvHkfz0t%2FArqO3XkT0NYC3mjWiQVt5eUP0yjBKwVbFjG8vW5eJlOT1H9yErKPTJp3JbhMvJssQNqk6NfusfcMUyFObk5Ror0Lt7zbnsoz5JPI7Pid2aFqVJTa9mHLPPukitYbGrU9Jvp2EszNk%2FBhBjIqsSJNDL2TguhKl%2Fwo5vYnF4jrD7sL%2FO7qcAjG2v8xiPxllnCB05u%2BcsCZCcT82BWFZAfctmqeEVro0D4ENPihHFOGzjExrCrkxpnqk%2Bjx6DyposkYKsoGhEh1I9dEXKX9Dnr5tm85bIljYC%2FjCtk3SNu8LPiAt7qnXoMGLsAtBYcImpPwL7f6bIO3cx9SfyrIAroM8YIV69swbm6ECJc%2FSxQkbB0Kf1uBfd4Tr9sww779vAY6pgHcZIal167DS2sY894A%2B4NtuYB3hyAEh2%2FgzowNdtfjMbIlmEuAhaE84lSmxzcXNI96pz%2BWuSziF%2FWCuIjFKEc8U%2BxC7OBm1Srk2cNr4UWZeqUD0E1pslvtC8wOmmmNFzYLHtEW5VOiKenek66YVeXhuWU1g6xV5kYu4ImZYpOzpqibfotcp0T64gvlipirkqjxPeSt7dSRT%2FVTyk8kedZM1EYLuqym&X-Amz-Signature=5c370d5e550562e594d54083b67addee113c93bfc7edeed6b3ce0f4058e2a7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY75SNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFyiGm2iVH5UJmqGoUF5kaoVqN3%2BYfgxvAyaBjLSZOdAiAjepeBpGpDeVtLWxO9Nj5NgtKCWGx0SlncjyPSvm3r7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8TjcBe0poHcDgt0KtwDJNJFq6N2VqRJlli8Lu1YOTWB4HNwMaTgvdkvQsrObMsdogwiowHToKtUQUL1I5f76tcAJVGDjtqyZoh53T5rtQ3cDwUujNxpzYp8CHGPzDn0u06MYf3ajblCP8g3vf9W%2FQ5EECdtpnquBruWYw4vqo4BGWrvcLLbisLMxZzzalXAMMwd7ZhtyBSa1tHZnQHupgkqYMMxbEGKq%2FeGkRV5Ob%2F6zzU9R5K7GPXVxvAhQ2SEUBrAtG4HeSyEzqMOvHkfz0t%2FArqO3XkT0NYC3mjWiQVt5eUP0yjBKwVbFjG8vW5eJlOT1H9yErKPTJp3JbhMvJssQNqk6NfusfcMUyFObk5Ror0Lt7zbnsoz5JPI7Pid2aFqVJTa9mHLPPukitYbGrU9Jvp2EszNk%2FBhBjIqsSJNDL2TguhKl%2Fwo5vYnF4jrD7sL%2FO7qcAjG2v8xiPxllnCB05u%2BcsCZCcT82BWFZAfctmqeEVro0D4ENPihHFOGzjExrCrkxpnqk%2Bjx6DyposkYKsoGhEh1I9dEXKX9Dnr5tm85bIljYC%2FjCtk3SNu8LPiAt7qnXoMGLsAtBYcImpPwL7f6bIO3cx9SfyrIAroM8YIV69swbm6ECJc%2FSxQkbB0Kf1uBfd4Tr9sww779vAY6pgHcZIal167DS2sY894A%2B4NtuYB3hyAEh2%2FgzowNdtfjMbIlmEuAhaE84lSmxzcXNI96pz%2BWuSziF%2FWCuIjFKEc8U%2BxC7OBm1Srk2cNr4UWZeqUD0E1pslvtC8wOmmmNFzYLHtEW5VOiKenek66YVeXhuWU1g6xV5kYu4ImZYpOzpqibfotcp0T64gvlipirkqjxPeSt7dSRT%2FVTyk8kedZM1EYLuqym&X-Amz-Signature=bad95b75978496622d9d3194e574d470e8599893569153a2aefc33f5176bd98f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY75SNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFyiGm2iVH5UJmqGoUF5kaoVqN3%2BYfgxvAyaBjLSZOdAiAjepeBpGpDeVtLWxO9Nj5NgtKCWGx0SlncjyPSvm3r7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8TjcBe0poHcDgt0KtwDJNJFq6N2VqRJlli8Lu1YOTWB4HNwMaTgvdkvQsrObMsdogwiowHToKtUQUL1I5f76tcAJVGDjtqyZoh53T5rtQ3cDwUujNxpzYp8CHGPzDn0u06MYf3ajblCP8g3vf9W%2FQ5EECdtpnquBruWYw4vqo4BGWrvcLLbisLMxZzzalXAMMwd7ZhtyBSa1tHZnQHupgkqYMMxbEGKq%2FeGkRV5Ob%2F6zzU9R5K7GPXVxvAhQ2SEUBrAtG4HeSyEzqMOvHkfz0t%2FArqO3XkT0NYC3mjWiQVt5eUP0yjBKwVbFjG8vW5eJlOT1H9yErKPTJp3JbhMvJssQNqk6NfusfcMUyFObk5Ror0Lt7zbnsoz5JPI7Pid2aFqVJTa9mHLPPukitYbGrU9Jvp2EszNk%2FBhBjIqsSJNDL2TguhKl%2Fwo5vYnF4jrD7sL%2FO7qcAjG2v8xiPxllnCB05u%2BcsCZCcT82BWFZAfctmqeEVro0D4ENPihHFOGzjExrCrkxpnqk%2Bjx6DyposkYKsoGhEh1I9dEXKX9Dnr5tm85bIljYC%2FjCtk3SNu8LPiAt7qnXoMGLsAtBYcImpPwL7f6bIO3cx9SfyrIAroM8YIV69swbm6ECJc%2FSxQkbB0Kf1uBfd4Tr9sww779vAY6pgHcZIal167DS2sY894A%2B4NtuYB3hyAEh2%2FgzowNdtfjMbIlmEuAhaE84lSmxzcXNI96pz%2BWuSziF%2FWCuIjFKEc8U%2BxC7OBm1Srk2cNr4UWZeqUD0E1pslvtC8wOmmmNFzYLHtEW5VOiKenek66YVeXhuWU1g6xV5kYu4ImZYpOzpqibfotcp0T64gvlipirkqjxPeSt7dSRT%2FVTyk8kedZM1EYLuqym&X-Amz-Signature=c58c9756893066a2ea24f18ea805e30c18d82df991f0ef08d9f78f227d19a2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY75SNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFyiGm2iVH5UJmqGoUF5kaoVqN3%2BYfgxvAyaBjLSZOdAiAjepeBpGpDeVtLWxO9Nj5NgtKCWGx0SlncjyPSvm3r7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8TjcBe0poHcDgt0KtwDJNJFq6N2VqRJlli8Lu1YOTWB4HNwMaTgvdkvQsrObMsdogwiowHToKtUQUL1I5f76tcAJVGDjtqyZoh53T5rtQ3cDwUujNxpzYp8CHGPzDn0u06MYf3ajblCP8g3vf9W%2FQ5EECdtpnquBruWYw4vqo4BGWrvcLLbisLMxZzzalXAMMwd7ZhtyBSa1tHZnQHupgkqYMMxbEGKq%2FeGkRV5Ob%2F6zzU9R5K7GPXVxvAhQ2SEUBrAtG4HeSyEzqMOvHkfz0t%2FArqO3XkT0NYC3mjWiQVt5eUP0yjBKwVbFjG8vW5eJlOT1H9yErKPTJp3JbhMvJssQNqk6NfusfcMUyFObk5Ror0Lt7zbnsoz5JPI7Pid2aFqVJTa9mHLPPukitYbGrU9Jvp2EszNk%2FBhBjIqsSJNDL2TguhKl%2Fwo5vYnF4jrD7sL%2FO7qcAjG2v8xiPxllnCB05u%2BcsCZCcT82BWFZAfctmqeEVro0D4ENPihHFOGzjExrCrkxpnqk%2Bjx6DyposkYKsoGhEh1I9dEXKX9Dnr5tm85bIljYC%2FjCtk3SNu8LPiAt7qnXoMGLsAtBYcImpPwL7f6bIO3cx9SfyrIAroM8YIV69swbm6ECJc%2FSxQkbB0Kf1uBfd4Tr9sww779vAY6pgHcZIal167DS2sY894A%2B4NtuYB3hyAEh2%2FgzowNdtfjMbIlmEuAhaE84lSmxzcXNI96pz%2BWuSziF%2FWCuIjFKEc8U%2BxC7OBm1Srk2cNr4UWZeqUD0E1pslvtC8wOmmmNFzYLHtEW5VOiKenek66YVeXhuWU1g6xV5kYu4ImZYpOzpqibfotcp0T64gvlipirkqjxPeSt7dSRT%2FVTyk8kedZM1EYLuqym&X-Amz-Signature=9d56a9f64a82fe27d9c941fa58f73caf6b8be34495139b1c6ae88a7eabadef72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY75SNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFyiGm2iVH5UJmqGoUF5kaoVqN3%2BYfgxvAyaBjLSZOdAiAjepeBpGpDeVtLWxO9Nj5NgtKCWGx0SlncjyPSvm3r7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8TjcBe0poHcDgt0KtwDJNJFq6N2VqRJlli8Lu1YOTWB4HNwMaTgvdkvQsrObMsdogwiowHToKtUQUL1I5f76tcAJVGDjtqyZoh53T5rtQ3cDwUujNxpzYp8CHGPzDn0u06MYf3ajblCP8g3vf9W%2FQ5EECdtpnquBruWYw4vqo4BGWrvcLLbisLMxZzzalXAMMwd7ZhtyBSa1tHZnQHupgkqYMMxbEGKq%2FeGkRV5Ob%2F6zzU9R5K7GPXVxvAhQ2SEUBrAtG4HeSyEzqMOvHkfz0t%2FArqO3XkT0NYC3mjWiQVt5eUP0yjBKwVbFjG8vW5eJlOT1H9yErKPTJp3JbhMvJssQNqk6NfusfcMUyFObk5Ror0Lt7zbnsoz5JPI7Pid2aFqVJTa9mHLPPukitYbGrU9Jvp2EszNk%2FBhBjIqsSJNDL2TguhKl%2Fwo5vYnF4jrD7sL%2FO7qcAjG2v8xiPxllnCB05u%2BcsCZCcT82BWFZAfctmqeEVro0D4ENPihHFOGzjExrCrkxpnqk%2Bjx6DyposkYKsoGhEh1I9dEXKX9Dnr5tm85bIljYC%2FjCtk3SNu8LPiAt7qnXoMGLsAtBYcImpPwL7f6bIO3cx9SfyrIAroM8YIV69swbm6ECJc%2FSxQkbB0Kf1uBfd4Tr9sww779vAY6pgHcZIal167DS2sY894A%2B4NtuYB3hyAEh2%2FgzowNdtfjMbIlmEuAhaE84lSmxzcXNI96pz%2BWuSziF%2FWCuIjFKEc8U%2BxC7OBm1Srk2cNr4UWZeqUD0E1pslvtC8wOmmmNFzYLHtEW5VOiKenek66YVeXhuWU1g6xV5kYu4ImZYpOzpqibfotcp0T64gvlipirkqjxPeSt7dSRT%2FVTyk8kedZM1EYLuqym&X-Amz-Signature=992e04f0c2bc654385ef61bf2a7dcf2c5b7335fccf347d7ea218414190ae1a76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY75SNU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFyiGm2iVH5UJmqGoUF5kaoVqN3%2BYfgxvAyaBjLSZOdAiAjepeBpGpDeVtLWxO9Nj5NgtKCWGx0SlncjyPSvm3r7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8TjcBe0poHcDgt0KtwDJNJFq6N2VqRJlli8Lu1YOTWB4HNwMaTgvdkvQsrObMsdogwiowHToKtUQUL1I5f76tcAJVGDjtqyZoh53T5rtQ3cDwUujNxpzYp8CHGPzDn0u06MYf3ajblCP8g3vf9W%2FQ5EECdtpnquBruWYw4vqo4BGWrvcLLbisLMxZzzalXAMMwd7ZhtyBSa1tHZnQHupgkqYMMxbEGKq%2FeGkRV5Ob%2F6zzU9R5K7GPXVxvAhQ2SEUBrAtG4HeSyEzqMOvHkfz0t%2FArqO3XkT0NYC3mjWiQVt5eUP0yjBKwVbFjG8vW5eJlOT1H9yErKPTJp3JbhMvJssQNqk6NfusfcMUyFObk5Ror0Lt7zbnsoz5JPI7Pid2aFqVJTa9mHLPPukitYbGrU9Jvp2EszNk%2FBhBjIqsSJNDL2TguhKl%2Fwo5vYnF4jrD7sL%2FO7qcAjG2v8xiPxllnCB05u%2BcsCZCcT82BWFZAfctmqeEVro0D4ENPihHFOGzjExrCrkxpnqk%2Bjx6DyposkYKsoGhEh1I9dEXKX9Dnr5tm85bIljYC%2FjCtk3SNu8LPiAt7qnXoMGLsAtBYcImpPwL7f6bIO3cx9SfyrIAroM8YIV69swbm6ECJc%2FSxQkbB0Kf1uBfd4Tr9sww779vAY6pgHcZIal167DS2sY894A%2B4NtuYB3hyAEh2%2FgzowNdtfjMbIlmEuAhaE84lSmxzcXNI96pz%2BWuSziF%2FWCuIjFKEc8U%2BxC7OBm1Srk2cNr4UWZeqUD0E1pslvtC8wOmmmNFzYLHtEW5VOiKenek66YVeXhuWU1g6xV5kYu4ImZYpOzpqibfotcp0T64gvlipirkqjxPeSt7dSRT%2FVTyk8kedZM1EYLuqym&X-Amz-Signature=aec0190ab28dccc5c8d3639dae8de4caa51bc6ec254f9745725d242b5dd13a11&X-Amz-SignedHeaders=host&x-id=GetObject)
