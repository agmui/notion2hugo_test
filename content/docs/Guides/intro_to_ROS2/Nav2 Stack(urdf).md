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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLSYKM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFxKta6I9V6Uoyjcuiixm8fv4MHnRAvm2ovdEWnOGvFvAiAp5SJIAmExIu%2B2vmgNcGTzeCKZ%2BbnU00FP97f5SLdW1Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLHUYEJDmgUYi7XpEKtwDzMfBq9MqqdbdlgBC6k38pvO89PAFPD7hi9YqxWD%2BuejBgo0sJvAFfouv%2FdJ6F%2BW3csYSshqru4kM2BSfr%2FqIFk8Phj%2B5%2Bf%2FXQdV9sy6yOSJqKxAaveVzVQNZFOlfcCamDQKVUa7VEkJROzDQBT5SqFX%2FlFidVx5FZkL45gxsc3I7KVz1mkk4V%2FWm%2BPMXg8sBKwNs1l16NMkZ6DE79kt%2FcUA9KtGmwkAiik3ecGW10P6vuaPtU4PR5MkQjv%2F9n5LMcYBhaUPXUPWnX4iRvZXcD%2FaVlfTFJuM%2FomHP4qIlBSgnBWeDP7Fp7CGXhIIJugPeTXKexXR9ymf2agh%2BOtzvAC5CVtMfk705RMUjyeF5AdIaXbJ%2Bhf4ZkGGAbBvAnOBbmlBaLXujx68c3%2Bil4BXSIURafwXGov6U0EHHMEMnXRU7%2BFc5xIKYG8uT60ewefNpAbOYT1wAQ45JkI0wpMZyMBE%2B1x5nppbI0OK7lEtgNVOns%2BF5QZ1GUGPoeduTIoAII%2F7GaI5dp542ILPq3v33zJZ5hx4vLwznCfCXZeLe8Zc%2BTFt%2FvMEOpMkEZYpaGzDBo3C9iODrmmI4o4FTRXX0DmnZNeE8Y%2BGRMGm4WYwxKYH7OXRZiuLFuvKTAT4wtJCevwY6pgHoW109F5dbeyCIRNtWI%2BPev7XbagX2w0J9SE5Y04nwRitWMhjcbKT4Eb3bcj%2FJTT32gvtwZWKm8DEPx19Z%2FOImmjvjY5yXka1vjwLmLG7DVOw%2FOI%2Fz%2FKAzUCxAqAMhPlLhnnjrPpeO033pInW9muqxGxC%2F7trAXHJx%2BFeFyriUFb6b2Cbl7TM3JGKe%2BmU2u9NqeucxbmCYFO8f8Ykh14Kev%2BS7JdTS&X-Amz-Signature=008357160ed686c5b8e94f1d4508500031f3edf7ea6c39138f3228b529e100a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLSYKM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFxKta6I9V6Uoyjcuiixm8fv4MHnRAvm2ovdEWnOGvFvAiAp5SJIAmExIu%2B2vmgNcGTzeCKZ%2BbnU00FP97f5SLdW1Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLHUYEJDmgUYi7XpEKtwDzMfBq9MqqdbdlgBC6k38pvO89PAFPD7hi9YqxWD%2BuejBgo0sJvAFfouv%2FdJ6F%2BW3csYSshqru4kM2BSfr%2FqIFk8Phj%2B5%2Bf%2FXQdV9sy6yOSJqKxAaveVzVQNZFOlfcCamDQKVUa7VEkJROzDQBT5SqFX%2FlFidVx5FZkL45gxsc3I7KVz1mkk4V%2FWm%2BPMXg8sBKwNs1l16NMkZ6DE79kt%2FcUA9KtGmwkAiik3ecGW10P6vuaPtU4PR5MkQjv%2F9n5LMcYBhaUPXUPWnX4iRvZXcD%2FaVlfTFJuM%2FomHP4qIlBSgnBWeDP7Fp7CGXhIIJugPeTXKexXR9ymf2agh%2BOtzvAC5CVtMfk705RMUjyeF5AdIaXbJ%2Bhf4ZkGGAbBvAnOBbmlBaLXujx68c3%2Bil4BXSIURafwXGov6U0EHHMEMnXRU7%2BFc5xIKYG8uT60ewefNpAbOYT1wAQ45JkI0wpMZyMBE%2B1x5nppbI0OK7lEtgNVOns%2BF5QZ1GUGPoeduTIoAII%2F7GaI5dp542ILPq3v33zJZ5hx4vLwznCfCXZeLe8Zc%2BTFt%2FvMEOpMkEZYpaGzDBo3C9iODrmmI4o4FTRXX0DmnZNeE8Y%2BGRMGm4WYwxKYH7OXRZiuLFuvKTAT4wtJCevwY6pgHoW109F5dbeyCIRNtWI%2BPev7XbagX2w0J9SE5Y04nwRitWMhjcbKT4Eb3bcj%2FJTT32gvtwZWKm8DEPx19Z%2FOImmjvjY5yXka1vjwLmLG7DVOw%2FOI%2Fz%2FKAzUCxAqAMhPlLhnnjrPpeO033pInW9muqxGxC%2F7trAXHJx%2BFeFyriUFb6b2Cbl7TM3JGKe%2BmU2u9NqeucxbmCYFO8f8Ykh14Kev%2BS7JdTS&X-Amz-Signature=cc74abba864fee98427e2569a5f938cc706eb54d7307667fd7b6e49371aaece0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLSYKM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFxKta6I9V6Uoyjcuiixm8fv4MHnRAvm2ovdEWnOGvFvAiAp5SJIAmExIu%2B2vmgNcGTzeCKZ%2BbnU00FP97f5SLdW1Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLHUYEJDmgUYi7XpEKtwDzMfBq9MqqdbdlgBC6k38pvO89PAFPD7hi9YqxWD%2BuejBgo0sJvAFfouv%2FdJ6F%2BW3csYSshqru4kM2BSfr%2FqIFk8Phj%2B5%2Bf%2FXQdV9sy6yOSJqKxAaveVzVQNZFOlfcCamDQKVUa7VEkJROzDQBT5SqFX%2FlFidVx5FZkL45gxsc3I7KVz1mkk4V%2FWm%2BPMXg8sBKwNs1l16NMkZ6DE79kt%2FcUA9KtGmwkAiik3ecGW10P6vuaPtU4PR5MkQjv%2F9n5LMcYBhaUPXUPWnX4iRvZXcD%2FaVlfTFJuM%2FomHP4qIlBSgnBWeDP7Fp7CGXhIIJugPeTXKexXR9ymf2agh%2BOtzvAC5CVtMfk705RMUjyeF5AdIaXbJ%2Bhf4ZkGGAbBvAnOBbmlBaLXujx68c3%2Bil4BXSIURafwXGov6U0EHHMEMnXRU7%2BFc5xIKYG8uT60ewefNpAbOYT1wAQ45JkI0wpMZyMBE%2B1x5nppbI0OK7lEtgNVOns%2BF5QZ1GUGPoeduTIoAII%2F7GaI5dp542ILPq3v33zJZ5hx4vLwznCfCXZeLe8Zc%2BTFt%2FvMEOpMkEZYpaGzDBo3C9iODrmmI4o4FTRXX0DmnZNeE8Y%2BGRMGm4WYwxKYH7OXRZiuLFuvKTAT4wtJCevwY6pgHoW109F5dbeyCIRNtWI%2BPev7XbagX2w0J9SE5Y04nwRitWMhjcbKT4Eb3bcj%2FJTT32gvtwZWKm8DEPx19Z%2FOImmjvjY5yXka1vjwLmLG7DVOw%2FOI%2Fz%2FKAzUCxAqAMhPlLhnnjrPpeO033pInW9muqxGxC%2F7trAXHJx%2BFeFyriUFb6b2Cbl7TM3JGKe%2BmU2u9NqeucxbmCYFO8f8Ykh14Kev%2BS7JdTS&X-Amz-Signature=035a5eb9ad95f402fbfe0da0c86abab019733287aa66497aece3440151b4c6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLSYKM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFxKta6I9V6Uoyjcuiixm8fv4MHnRAvm2ovdEWnOGvFvAiAp5SJIAmExIu%2B2vmgNcGTzeCKZ%2BbnU00FP97f5SLdW1Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLHUYEJDmgUYi7XpEKtwDzMfBq9MqqdbdlgBC6k38pvO89PAFPD7hi9YqxWD%2BuejBgo0sJvAFfouv%2FdJ6F%2BW3csYSshqru4kM2BSfr%2FqIFk8Phj%2B5%2Bf%2FXQdV9sy6yOSJqKxAaveVzVQNZFOlfcCamDQKVUa7VEkJROzDQBT5SqFX%2FlFidVx5FZkL45gxsc3I7KVz1mkk4V%2FWm%2BPMXg8sBKwNs1l16NMkZ6DE79kt%2FcUA9KtGmwkAiik3ecGW10P6vuaPtU4PR5MkQjv%2F9n5LMcYBhaUPXUPWnX4iRvZXcD%2FaVlfTFJuM%2FomHP4qIlBSgnBWeDP7Fp7CGXhIIJugPeTXKexXR9ymf2agh%2BOtzvAC5CVtMfk705RMUjyeF5AdIaXbJ%2Bhf4ZkGGAbBvAnOBbmlBaLXujx68c3%2Bil4BXSIURafwXGov6U0EHHMEMnXRU7%2BFc5xIKYG8uT60ewefNpAbOYT1wAQ45JkI0wpMZyMBE%2B1x5nppbI0OK7lEtgNVOns%2BF5QZ1GUGPoeduTIoAII%2F7GaI5dp542ILPq3v33zJZ5hx4vLwznCfCXZeLe8Zc%2BTFt%2FvMEOpMkEZYpaGzDBo3C9iODrmmI4o4FTRXX0DmnZNeE8Y%2BGRMGm4WYwxKYH7OXRZiuLFuvKTAT4wtJCevwY6pgHoW109F5dbeyCIRNtWI%2BPev7XbagX2w0J9SE5Y04nwRitWMhjcbKT4Eb3bcj%2FJTT32gvtwZWKm8DEPx19Z%2FOImmjvjY5yXka1vjwLmLG7DVOw%2FOI%2Fz%2FKAzUCxAqAMhPlLhnnjrPpeO033pInW9muqxGxC%2F7trAXHJx%2BFeFyriUFb6b2Cbl7TM3JGKe%2BmU2u9NqeucxbmCYFO8f8Ykh14Kev%2BS7JdTS&X-Amz-Signature=b82aed4b9d50b093cb371d13b3e1eeace040f07f71886351abfd9b608748f2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLSYKM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFxKta6I9V6Uoyjcuiixm8fv4MHnRAvm2ovdEWnOGvFvAiAp5SJIAmExIu%2B2vmgNcGTzeCKZ%2BbnU00FP97f5SLdW1Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLHUYEJDmgUYi7XpEKtwDzMfBq9MqqdbdlgBC6k38pvO89PAFPD7hi9YqxWD%2BuejBgo0sJvAFfouv%2FdJ6F%2BW3csYSshqru4kM2BSfr%2FqIFk8Phj%2B5%2Bf%2FXQdV9sy6yOSJqKxAaveVzVQNZFOlfcCamDQKVUa7VEkJROzDQBT5SqFX%2FlFidVx5FZkL45gxsc3I7KVz1mkk4V%2FWm%2BPMXg8sBKwNs1l16NMkZ6DE79kt%2FcUA9KtGmwkAiik3ecGW10P6vuaPtU4PR5MkQjv%2F9n5LMcYBhaUPXUPWnX4iRvZXcD%2FaVlfTFJuM%2FomHP4qIlBSgnBWeDP7Fp7CGXhIIJugPeTXKexXR9ymf2agh%2BOtzvAC5CVtMfk705RMUjyeF5AdIaXbJ%2Bhf4ZkGGAbBvAnOBbmlBaLXujx68c3%2Bil4BXSIURafwXGov6U0EHHMEMnXRU7%2BFc5xIKYG8uT60ewefNpAbOYT1wAQ45JkI0wpMZyMBE%2B1x5nppbI0OK7lEtgNVOns%2BF5QZ1GUGPoeduTIoAII%2F7GaI5dp542ILPq3v33zJZ5hx4vLwznCfCXZeLe8Zc%2BTFt%2FvMEOpMkEZYpaGzDBo3C9iODrmmI4o4FTRXX0DmnZNeE8Y%2BGRMGm4WYwxKYH7OXRZiuLFuvKTAT4wtJCevwY6pgHoW109F5dbeyCIRNtWI%2BPev7XbagX2w0J9SE5Y04nwRitWMhjcbKT4Eb3bcj%2FJTT32gvtwZWKm8DEPx19Z%2FOImmjvjY5yXka1vjwLmLG7DVOw%2FOI%2Fz%2FKAzUCxAqAMhPlLhnnjrPpeO033pInW9muqxGxC%2F7trAXHJx%2BFeFyriUFb6b2Cbl7TM3JGKe%2BmU2u9NqeucxbmCYFO8f8Ykh14Kev%2BS7JdTS&X-Amz-Signature=2b1eb1088ca0209a46800b5e4e76c1cdb3bf5f85460ec66013de7718c0bd88d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYLSYKM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFxKta6I9V6Uoyjcuiixm8fv4MHnRAvm2ovdEWnOGvFvAiAp5SJIAmExIu%2B2vmgNcGTzeCKZ%2BbnU00FP97f5SLdW1Cr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLHUYEJDmgUYi7XpEKtwDzMfBq9MqqdbdlgBC6k38pvO89PAFPD7hi9YqxWD%2BuejBgo0sJvAFfouv%2FdJ6F%2BW3csYSshqru4kM2BSfr%2FqIFk8Phj%2B5%2Bf%2FXQdV9sy6yOSJqKxAaveVzVQNZFOlfcCamDQKVUa7VEkJROzDQBT5SqFX%2FlFidVx5FZkL45gxsc3I7KVz1mkk4V%2FWm%2BPMXg8sBKwNs1l16NMkZ6DE79kt%2FcUA9KtGmwkAiik3ecGW10P6vuaPtU4PR5MkQjv%2F9n5LMcYBhaUPXUPWnX4iRvZXcD%2FaVlfTFJuM%2FomHP4qIlBSgnBWeDP7Fp7CGXhIIJugPeTXKexXR9ymf2agh%2BOtzvAC5CVtMfk705RMUjyeF5AdIaXbJ%2Bhf4ZkGGAbBvAnOBbmlBaLXujx68c3%2Bil4BXSIURafwXGov6U0EHHMEMnXRU7%2BFc5xIKYG8uT60ewefNpAbOYT1wAQ45JkI0wpMZyMBE%2B1x5nppbI0OK7lEtgNVOns%2BF5QZ1GUGPoeduTIoAII%2F7GaI5dp542ILPq3v33zJZ5hx4vLwznCfCXZeLe8Zc%2BTFt%2FvMEOpMkEZYpaGzDBo3C9iODrmmI4o4FTRXX0DmnZNeE8Y%2BGRMGm4WYwxKYH7OXRZiuLFuvKTAT4wtJCevwY6pgHoW109F5dbeyCIRNtWI%2BPev7XbagX2w0J9SE5Y04nwRitWMhjcbKT4Eb3bcj%2FJTT32gvtwZWKm8DEPx19Z%2FOImmjvjY5yXka1vjwLmLG7DVOw%2FOI%2Fz%2FKAzUCxAqAMhPlLhnnjrPpeO033pInW9muqxGxC%2F7trAXHJx%2BFeFyriUFb6b2Cbl7TM3JGKe%2BmU2u9NqeucxbmCYFO8f8Ykh14Kev%2BS7JdTS&X-Amz-Signature=199aeb2a8601cf36aec4afa638b1b18a37a94d5eec67f8d755846d48956ca4a5&X-Amz-SignedHeaders=host&x-id=GetObject)
