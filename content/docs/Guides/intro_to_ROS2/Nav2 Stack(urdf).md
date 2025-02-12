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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHZ5FIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB6lzSJ20JgZzjJRCZeFy1WvXqDZbG9nIiU4%2B2apSWwAiEA4JQmM2bVNk%2B%2FsXmG3yqoCDUG64v1vHC2FnVevAZ5jcMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwHxVLU1EFS2tcfFSrcA3hUFTtsYQWSeZEh%2BU1wLk%2FoN%2FoAN%2BREKjRdG7bxOzjKR6aGuK0awxOA98oF34D52MgDAWz9E4jBoDPj8OMxepSiTwJYhqBPesovq9wRDx8nSAGG7Hrmpoq9qZpOFzFqXIMghCOHAVG5xYadpKfU7b%2FLtEEfZRJJF4B3%2BxW6cFUinklYAgeBlGU8CJxGPsC%2B0NeCWgMWC%2Bwebpq0a1n5%2BaAA0wg4tIawamIZhBhPvSu9yx49JST8dMxaBc8XqpqRhc8u1nQ6zPZRTcETGq9lBEtne2kjwftqpuxngMZBg%2F2BCnFmchrcbQ85aiRendb23E7J%2FjJUd9SMe1lwGoRpIMSziZGMjthIorEXhtFh%2FOZ9hIyao2eVSe6F3nExl65IxqcsDM1RC%2F32UkxlYKD6FN7qRMxyRz7zDJAH5nKky6hD4Wvmm8VXdMZ6%2FvibSdBvaVGIbNGB2i6cU0vAjTonA4H2QCCzD4NKZUM4RHOMCOLx1u0%2FGik0J7wlMETKGVRNkjSImIzCCMuveL4koSa75o8K9%2FuN3%2FMXdyB3G8myCghLBZ4CT1l%2BbLRdoubgdexrQGdVhPwOweRXHK1eH5%2BQUbVHcbyfwq3DuBlfpYg9b34WyxZSCuJcaXyzxU%2FZMNHur70GOqUBt0mbQ%2Bo5I3%2FguE5U3NGZz9rXdGKKSKEy%2FHO9Bf56%2Bu1lF1bW6BZm8MIFawJyk%2FWoz6SxoovNDVbD9PP%2B2kjj3ouPX9aX6aLD%2BKpxx6l6%2Bj9ZAwSy8313sAMAwiypDZi3oGJBIf2YRGa8z%2BKs5t5MF3AlvIh9DXczUJ3dkgCnF0fVLU%2ByotB3otiNMheDncgDnZtmXhJztFUEnm6I7kieXiKwDS9u&X-Amz-Signature=b2a92c1f1c2fcda4eaca83caaf07b7f0d67cc0d0a3ceda487d52cd4076d69760&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHZ5FIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB6lzSJ20JgZzjJRCZeFy1WvXqDZbG9nIiU4%2B2apSWwAiEA4JQmM2bVNk%2B%2FsXmG3yqoCDUG64v1vHC2FnVevAZ5jcMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwHxVLU1EFS2tcfFSrcA3hUFTtsYQWSeZEh%2BU1wLk%2FoN%2FoAN%2BREKjRdG7bxOzjKR6aGuK0awxOA98oF34D52MgDAWz9E4jBoDPj8OMxepSiTwJYhqBPesovq9wRDx8nSAGG7Hrmpoq9qZpOFzFqXIMghCOHAVG5xYadpKfU7b%2FLtEEfZRJJF4B3%2BxW6cFUinklYAgeBlGU8CJxGPsC%2B0NeCWgMWC%2Bwebpq0a1n5%2BaAA0wg4tIawamIZhBhPvSu9yx49JST8dMxaBc8XqpqRhc8u1nQ6zPZRTcETGq9lBEtne2kjwftqpuxngMZBg%2F2BCnFmchrcbQ85aiRendb23E7J%2FjJUd9SMe1lwGoRpIMSziZGMjthIorEXhtFh%2FOZ9hIyao2eVSe6F3nExl65IxqcsDM1RC%2F32UkxlYKD6FN7qRMxyRz7zDJAH5nKky6hD4Wvmm8VXdMZ6%2FvibSdBvaVGIbNGB2i6cU0vAjTonA4H2QCCzD4NKZUM4RHOMCOLx1u0%2FGik0J7wlMETKGVRNkjSImIzCCMuveL4koSa75o8K9%2FuN3%2FMXdyB3G8myCghLBZ4CT1l%2BbLRdoubgdexrQGdVhPwOweRXHK1eH5%2BQUbVHcbyfwq3DuBlfpYg9b34WyxZSCuJcaXyzxU%2FZMNHur70GOqUBt0mbQ%2Bo5I3%2FguE5U3NGZz9rXdGKKSKEy%2FHO9Bf56%2Bu1lF1bW6BZm8MIFawJyk%2FWoz6SxoovNDVbD9PP%2B2kjj3ouPX9aX6aLD%2BKpxx6l6%2Bj9ZAwSy8313sAMAwiypDZi3oGJBIf2YRGa8z%2BKs5t5MF3AlvIh9DXczUJ3dkgCnF0fVLU%2ByotB3otiNMheDncgDnZtmXhJztFUEnm6I7kieXiKwDS9u&X-Amz-Signature=4e1f63a851693d45a702731e2d611624e7736d6525143f21155b9458d1f70849&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHZ5FIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB6lzSJ20JgZzjJRCZeFy1WvXqDZbG9nIiU4%2B2apSWwAiEA4JQmM2bVNk%2B%2FsXmG3yqoCDUG64v1vHC2FnVevAZ5jcMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwHxVLU1EFS2tcfFSrcA3hUFTtsYQWSeZEh%2BU1wLk%2FoN%2FoAN%2BREKjRdG7bxOzjKR6aGuK0awxOA98oF34D52MgDAWz9E4jBoDPj8OMxepSiTwJYhqBPesovq9wRDx8nSAGG7Hrmpoq9qZpOFzFqXIMghCOHAVG5xYadpKfU7b%2FLtEEfZRJJF4B3%2BxW6cFUinklYAgeBlGU8CJxGPsC%2B0NeCWgMWC%2Bwebpq0a1n5%2BaAA0wg4tIawamIZhBhPvSu9yx49JST8dMxaBc8XqpqRhc8u1nQ6zPZRTcETGq9lBEtne2kjwftqpuxngMZBg%2F2BCnFmchrcbQ85aiRendb23E7J%2FjJUd9SMe1lwGoRpIMSziZGMjthIorEXhtFh%2FOZ9hIyao2eVSe6F3nExl65IxqcsDM1RC%2F32UkxlYKD6FN7qRMxyRz7zDJAH5nKky6hD4Wvmm8VXdMZ6%2FvibSdBvaVGIbNGB2i6cU0vAjTonA4H2QCCzD4NKZUM4RHOMCOLx1u0%2FGik0J7wlMETKGVRNkjSImIzCCMuveL4koSa75o8K9%2FuN3%2FMXdyB3G8myCghLBZ4CT1l%2BbLRdoubgdexrQGdVhPwOweRXHK1eH5%2BQUbVHcbyfwq3DuBlfpYg9b34WyxZSCuJcaXyzxU%2FZMNHur70GOqUBt0mbQ%2Bo5I3%2FguE5U3NGZz9rXdGKKSKEy%2FHO9Bf56%2Bu1lF1bW6BZm8MIFawJyk%2FWoz6SxoovNDVbD9PP%2B2kjj3ouPX9aX6aLD%2BKpxx6l6%2Bj9ZAwSy8313sAMAwiypDZi3oGJBIf2YRGa8z%2BKs5t5MF3AlvIh9DXczUJ3dkgCnF0fVLU%2ByotB3otiNMheDncgDnZtmXhJztFUEnm6I7kieXiKwDS9u&X-Amz-Signature=836f05c1e6b76eb0ae3dd7cba2a30936238704cec4584b4bce328defad0cc560&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHZ5FIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB6lzSJ20JgZzjJRCZeFy1WvXqDZbG9nIiU4%2B2apSWwAiEA4JQmM2bVNk%2B%2FsXmG3yqoCDUG64v1vHC2FnVevAZ5jcMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwHxVLU1EFS2tcfFSrcA3hUFTtsYQWSeZEh%2BU1wLk%2FoN%2FoAN%2BREKjRdG7bxOzjKR6aGuK0awxOA98oF34D52MgDAWz9E4jBoDPj8OMxepSiTwJYhqBPesovq9wRDx8nSAGG7Hrmpoq9qZpOFzFqXIMghCOHAVG5xYadpKfU7b%2FLtEEfZRJJF4B3%2BxW6cFUinklYAgeBlGU8CJxGPsC%2B0NeCWgMWC%2Bwebpq0a1n5%2BaAA0wg4tIawamIZhBhPvSu9yx49JST8dMxaBc8XqpqRhc8u1nQ6zPZRTcETGq9lBEtne2kjwftqpuxngMZBg%2F2BCnFmchrcbQ85aiRendb23E7J%2FjJUd9SMe1lwGoRpIMSziZGMjthIorEXhtFh%2FOZ9hIyao2eVSe6F3nExl65IxqcsDM1RC%2F32UkxlYKD6FN7qRMxyRz7zDJAH5nKky6hD4Wvmm8VXdMZ6%2FvibSdBvaVGIbNGB2i6cU0vAjTonA4H2QCCzD4NKZUM4RHOMCOLx1u0%2FGik0J7wlMETKGVRNkjSImIzCCMuveL4koSa75o8K9%2FuN3%2FMXdyB3G8myCghLBZ4CT1l%2BbLRdoubgdexrQGdVhPwOweRXHK1eH5%2BQUbVHcbyfwq3DuBlfpYg9b34WyxZSCuJcaXyzxU%2FZMNHur70GOqUBt0mbQ%2Bo5I3%2FguE5U3NGZz9rXdGKKSKEy%2FHO9Bf56%2Bu1lF1bW6BZm8MIFawJyk%2FWoz6SxoovNDVbD9PP%2B2kjj3ouPX9aX6aLD%2BKpxx6l6%2Bj9ZAwSy8313sAMAwiypDZi3oGJBIf2YRGa8z%2BKs5t5MF3AlvIh9DXczUJ3dkgCnF0fVLU%2ByotB3otiNMheDncgDnZtmXhJztFUEnm6I7kieXiKwDS9u&X-Amz-Signature=93c44cbf138383f11881cdd2bb31cd1e94ade6ce2c6f0d66c570c6475af2ea8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHZ5FIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB6lzSJ20JgZzjJRCZeFy1WvXqDZbG9nIiU4%2B2apSWwAiEA4JQmM2bVNk%2B%2FsXmG3yqoCDUG64v1vHC2FnVevAZ5jcMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwHxVLU1EFS2tcfFSrcA3hUFTtsYQWSeZEh%2BU1wLk%2FoN%2FoAN%2BREKjRdG7bxOzjKR6aGuK0awxOA98oF34D52MgDAWz9E4jBoDPj8OMxepSiTwJYhqBPesovq9wRDx8nSAGG7Hrmpoq9qZpOFzFqXIMghCOHAVG5xYadpKfU7b%2FLtEEfZRJJF4B3%2BxW6cFUinklYAgeBlGU8CJxGPsC%2B0NeCWgMWC%2Bwebpq0a1n5%2BaAA0wg4tIawamIZhBhPvSu9yx49JST8dMxaBc8XqpqRhc8u1nQ6zPZRTcETGq9lBEtne2kjwftqpuxngMZBg%2F2BCnFmchrcbQ85aiRendb23E7J%2FjJUd9SMe1lwGoRpIMSziZGMjthIorEXhtFh%2FOZ9hIyao2eVSe6F3nExl65IxqcsDM1RC%2F32UkxlYKD6FN7qRMxyRz7zDJAH5nKky6hD4Wvmm8VXdMZ6%2FvibSdBvaVGIbNGB2i6cU0vAjTonA4H2QCCzD4NKZUM4RHOMCOLx1u0%2FGik0J7wlMETKGVRNkjSImIzCCMuveL4koSa75o8K9%2FuN3%2FMXdyB3G8myCghLBZ4CT1l%2BbLRdoubgdexrQGdVhPwOweRXHK1eH5%2BQUbVHcbyfwq3DuBlfpYg9b34WyxZSCuJcaXyzxU%2FZMNHur70GOqUBt0mbQ%2Bo5I3%2FguE5U3NGZz9rXdGKKSKEy%2FHO9Bf56%2Bu1lF1bW6BZm8MIFawJyk%2FWoz6SxoovNDVbD9PP%2B2kjj3ouPX9aX6aLD%2BKpxx6l6%2Bj9ZAwSy8313sAMAwiypDZi3oGJBIf2YRGa8z%2BKs5t5MF3AlvIh9DXczUJ3dkgCnF0fVLU%2ByotB3otiNMheDncgDnZtmXhJztFUEnm6I7kieXiKwDS9u&X-Amz-Signature=0b84036f39b9ef9db949c4024a8f4e1066ac8f30a9e2cd366d9c45743525408a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHZ5FIP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGB6lzSJ20JgZzjJRCZeFy1WvXqDZbG9nIiU4%2B2apSWwAiEA4JQmM2bVNk%2B%2FsXmG3yqoCDUG64v1vHC2FnVevAZ5jcMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwHxVLU1EFS2tcfFSrcA3hUFTtsYQWSeZEh%2BU1wLk%2FoN%2FoAN%2BREKjRdG7bxOzjKR6aGuK0awxOA98oF34D52MgDAWz9E4jBoDPj8OMxepSiTwJYhqBPesovq9wRDx8nSAGG7Hrmpoq9qZpOFzFqXIMghCOHAVG5xYadpKfU7b%2FLtEEfZRJJF4B3%2BxW6cFUinklYAgeBlGU8CJxGPsC%2B0NeCWgMWC%2Bwebpq0a1n5%2BaAA0wg4tIawamIZhBhPvSu9yx49JST8dMxaBc8XqpqRhc8u1nQ6zPZRTcETGq9lBEtne2kjwftqpuxngMZBg%2F2BCnFmchrcbQ85aiRendb23E7J%2FjJUd9SMe1lwGoRpIMSziZGMjthIorEXhtFh%2FOZ9hIyao2eVSe6F3nExl65IxqcsDM1RC%2F32UkxlYKD6FN7qRMxyRz7zDJAH5nKky6hD4Wvmm8VXdMZ6%2FvibSdBvaVGIbNGB2i6cU0vAjTonA4H2QCCzD4NKZUM4RHOMCOLx1u0%2FGik0J7wlMETKGVRNkjSImIzCCMuveL4koSa75o8K9%2FuN3%2FMXdyB3G8myCghLBZ4CT1l%2BbLRdoubgdexrQGdVhPwOweRXHK1eH5%2BQUbVHcbyfwq3DuBlfpYg9b34WyxZSCuJcaXyzxU%2FZMNHur70GOqUBt0mbQ%2Bo5I3%2FguE5U3NGZz9rXdGKKSKEy%2FHO9Bf56%2Bu1lF1bW6BZm8MIFawJyk%2FWoz6SxoovNDVbD9PP%2B2kjj3ouPX9aX6aLD%2BKpxx6l6%2Bj9ZAwSy8313sAMAwiypDZi3oGJBIf2YRGa8z%2BKs5t5MF3AlvIh9DXczUJ3dkgCnF0fVLU%2ByotB3otiNMheDncgDnZtmXhJztFUEnm6I7kieXiKwDS9u&X-Amz-Signature=7d3069d05c4060466f8b0f79bd9253b69364cd7099b99e6bec3fb5663180e4e3&X-Amz-SignedHeaders=host&x-id=GetObject)
