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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGXIFFK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH93DcSakknVbQ7qke8CbvI4xnDuaKLEnQGwa9frbLtgAiA1tQPTzJpZ39dXr50T3UaN6pbGfZqbc%2BIVvKCwwQD5lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlo4sk4scTf0trLH5KtwD5v%2FjFbv8c1UQ7YCPNHDCTuCyAD88ZUj5r0kBo%2BcdiLnAtYvaApVIK5gNqpKMnsUU21jflj5mBcXKvk7XVW%2BrQChM%2BVqi%2BIiKisokYlq%2Fj%2BPzxrZwJyNkJZZARc7IW9agbZD2LWIKxJABE1Ez2XpZEZtT1vU%2FoeaA2AORlk6WRjhk2YMR%2Fr4vBCu0Z2JEn%2FcOQc2Y%2BP5tYu7RTYVD6e1YLrRNKeRSBCJ01f%2BXVZlAMQkU4tWfXvrZNCBVFCSiJI3ubyw5u0WDH5AxGVKBPbaadrzGy4dBSGLpAE6TE61YgxwJLOHOMH%2F5FSAwpLFGZDqd0P70qRs0SBjlTXAM4iLudjlolHEf8Gv1bpd1DIESkpaJ3cjcCHHOjg%2FnItprjvaDbh2JlbsgNHGxbQ111L1gVvTNq6eXmPj57KWSd5Q6NfHIef2WeN7WTm0%2FG5XVQj2y%2FDHW%2FVAO7Ix%2BE8d0FZbQXDGwHNiChCG9HSFPQm1z081iCxd3VliGna0fqx0Rekn3EFwi7PpBqt3czRdD6pmPJSyB7WOsCPISnkuJsL1rkTJwzM8Huf7t8SBCO%2BWHtsAsAh1zl7S4b5gY1zXnwNmRwAYFUilSD9W7cvwFkwVW9tVSR8S2llV1phEPPxcwoN6BwgY6pgGAaWg%2FvdkQ0Xbn3d%2BCXb4iixBza%2B6JjYsFAVvxoJeLXT7oESiW6zFBxL4QiPysnstvdcl5en4%2F7utUvmFBcuQbLTcEfWFhfVMql4C7JIHg5bywFT%2ByxNeoqj7%2Fc07H9Vfth0PjUWbLX5hKewyoqF3GMFQhk3vfp62DHnHQMMrqg3R825uzLvZ%2FPJL5qdeyUt%2Bj%2FYi9A54txo3gFal3qEM8urA%2BpRUE&X-Amz-Signature=574d4e67fcc900dbfb77c2fa9ad28cc4333ba96c839dac6898ed12913ca6fdff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGXIFFK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH93DcSakknVbQ7qke8CbvI4xnDuaKLEnQGwa9frbLtgAiA1tQPTzJpZ39dXr50T3UaN6pbGfZqbc%2BIVvKCwwQD5lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlo4sk4scTf0trLH5KtwD5v%2FjFbv8c1UQ7YCPNHDCTuCyAD88ZUj5r0kBo%2BcdiLnAtYvaApVIK5gNqpKMnsUU21jflj5mBcXKvk7XVW%2BrQChM%2BVqi%2BIiKisokYlq%2Fj%2BPzxrZwJyNkJZZARc7IW9agbZD2LWIKxJABE1Ez2XpZEZtT1vU%2FoeaA2AORlk6WRjhk2YMR%2Fr4vBCu0Z2JEn%2FcOQc2Y%2BP5tYu7RTYVD6e1YLrRNKeRSBCJ01f%2BXVZlAMQkU4tWfXvrZNCBVFCSiJI3ubyw5u0WDH5AxGVKBPbaadrzGy4dBSGLpAE6TE61YgxwJLOHOMH%2F5FSAwpLFGZDqd0P70qRs0SBjlTXAM4iLudjlolHEf8Gv1bpd1DIESkpaJ3cjcCHHOjg%2FnItprjvaDbh2JlbsgNHGxbQ111L1gVvTNq6eXmPj57KWSd5Q6NfHIef2WeN7WTm0%2FG5XVQj2y%2FDHW%2FVAO7Ix%2BE8d0FZbQXDGwHNiChCG9HSFPQm1z081iCxd3VliGna0fqx0Rekn3EFwi7PpBqt3czRdD6pmPJSyB7WOsCPISnkuJsL1rkTJwzM8Huf7t8SBCO%2BWHtsAsAh1zl7S4b5gY1zXnwNmRwAYFUilSD9W7cvwFkwVW9tVSR8S2llV1phEPPxcwoN6BwgY6pgGAaWg%2FvdkQ0Xbn3d%2BCXb4iixBza%2B6JjYsFAVvxoJeLXT7oESiW6zFBxL4QiPysnstvdcl5en4%2F7utUvmFBcuQbLTcEfWFhfVMql4C7JIHg5bywFT%2ByxNeoqj7%2Fc07H9Vfth0PjUWbLX5hKewyoqF3GMFQhk3vfp62DHnHQMMrqg3R825uzLvZ%2FPJL5qdeyUt%2Bj%2FYi9A54txo3gFal3qEM8urA%2BpRUE&X-Amz-Signature=8f877c3722036c99c18d85fb52fd2b025a88d3cd165429cd5e92eb3a973ce414&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGXIFFK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH93DcSakknVbQ7qke8CbvI4xnDuaKLEnQGwa9frbLtgAiA1tQPTzJpZ39dXr50T3UaN6pbGfZqbc%2BIVvKCwwQD5lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlo4sk4scTf0trLH5KtwD5v%2FjFbv8c1UQ7YCPNHDCTuCyAD88ZUj5r0kBo%2BcdiLnAtYvaApVIK5gNqpKMnsUU21jflj5mBcXKvk7XVW%2BrQChM%2BVqi%2BIiKisokYlq%2Fj%2BPzxrZwJyNkJZZARc7IW9agbZD2LWIKxJABE1Ez2XpZEZtT1vU%2FoeaA2AORlk6WRjhk2YMR%2Fr4vBCu0Z2JEn%2FcOQc2Y%2BP5tYu7RTYVD6e1YLrRNKeRSBCJ01f%2BXVZlAMQkU4tWfXvrZNCBVFCSiJI3ubyw5u0WDH5AxGVKBPbaadrzGy4dBSGLpAE6TE61YgxwJLOHOMH%2F5FSAwpLFGZDqd0P70qRs0SBjlTXAM4iLudjlolHEf8Gv1bpd1DIESkpaJ3cjcCHHOjg%2FnItprjvaDbh2JlbsgNHGxbQ111L1gVvTNq6eXmPj57KWSd5Q6NfHIef2WeN7WTm0%2FG5XVQj2y%2FDHW%2FVAO7Ix%2BE8d0FZbQXDGwHNiChCG9HSFPQm1z081iCxd3VliGna0fqx0Rekn3EFwi7PpBqt3czRdD6pmPJSyB7WOsCPISnkuJsL1rkTJwzM8Huf7t8SBCO%2BWHtsAsAh1zl7S4b5gY1zXnwNmRwAYFUilSD9W7cvwFkwVW9tVSR8S2llV1phEPPxcwoN6BwgY6pgGAaWg%2FvdkQ0Xbn3d%2BCXb4iixBza%2B6JjYsFAVvxoJeLXT7oESiW6zFBxL4QiPysnstvdcl5en4%2F7utUvmFBcuQbLTcEfWFhfVMql4C7JIHg5bywFT%2ByxNeoqj7%2Fc07H9Vfth0PjUWbLX5hKewyoqF3GMFQhk3vfp62DHnHQMMrqg3R825uzLvZ%2FPJL5qdeyUt%2Bj%2FYi9A54txo3gFal3qEM8urA%2BpRUE&X-Amz-Signature=db2dddad15c06a2df120760db073cf81b5c17b994a51e69105b648e63c90d566&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGXIFFK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH93DcSakknVbQ7qke8CbvI4xnDuaKLEnQGwa9frbLtgAiA1tQPTzJpZ39dXr50T3UaN6pbGfZqbc%2BIVvKCwwQD5lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlo4sk4scTf0trLH5KtwD5v%2FjFbv8c1UQ7YCPNHDCTuCyAD88ZUj5r0kBo%2BcdiLnAtYvaApVIK5gNqpKMnsUU21jflj5mBcXKvk7XVW%2BrQChM%2BVqi%2BIiKisokYlq%2Fj%2BPzxrZwJyNkJZZARc7IW9agbZD2LWIKxJABE1Ez2XpZEZtT1vU%2FoeaA2AORlk6WRjhk2YMR%2Fr4vBCu0Z2JEn%2FcOQc2Y%2BP5tYu7RTYVD6e1YLrRNKeRSBCJ01f%2BXVZlAMQkU4tWfXvrZNCBVFCSiJI3ubyw5u0WDH5AxGVKBPbaadrzGy4dBSGLpAE6TE61YgxwJLOHOMH%2F5FSAwpLFGZDqd0P70qRs0SBjlTXAM4iLudjlolHEf8Gv1bpd1DIESkpaJ3cjcCHHOjg%2FnItprjvaDbh2JlbsgNHGxbQ111L1gVvTNq6eXmPj57KWSd5Q6NfHIef2WeN7WTm0%2FG5XVQj2y%2FDHW%2FVAO7Ix%2BE8d0FZbQXDGwHNiChCG9HSFPQm1z081iCxd3VliGna0fqx0Rekn3EFwi7PpBqt3czRdD6pmPJSyB7WOsCPISnkuJsL1rkTJwzM8Huf7t8SBCO%2BWHtsAsAh1zl7S4b5gY1zXnwNmRwAYFUilSD9W7cvwFkwVW9tVSR8S2llV1phEPPxcwoN6BwgY6pgGAaWg%2FvdkQ0Xbn3d%2BCXb4iixBza%2B6JjYsFAVvxoJeLXT7oESiW6zFBxL4QiPysnstvdcl5en4%2F7utUvmFBcuQbLTcEfWFhfVMql4C7JIHg5bywFT%2ByxNeoqj7%2Fc07H9Vfth0PjUWbLX5hKewyoqF3GMFQhk3vfp62DHnHQMMrqg3R825uzLvZ%2FPJL5qdeyUt%2Bj%2FYi9A54txo3gFal3qEM8urA%2BpRUE&X-Amz-Signature=697e31795166aeb80866add901e01f8eec111925216427b941b4707c7e6ab1de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGXIFFK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH93DcSakknVbQ7qke8CbvI4xnDuaKLEnQGwa9frbLtgAiA1tQPTzJpZ39dXr50T3UaN6pbGfZqbc%2BIVvKCwwQD5lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlo4sk4scTf0trLH5KtwD5v%2FjFbv8c1UQ7YCPNHDCTuCyAD88ZUj5r0kBo%2BcdiLnAtYvaApVIK5gNqpKMnsUU21jflj5mBcXKvk7XVW%2BrQChM%2BVqi%2BIiKisokYlq%2Fj%2BPzxrZwJyNkJZZARc7IW9agbZD2LWIKxJABE1Ez2XpZEZtT1vU%2FoeaA2AORlk6WRjhk2YMR%2Fr4vBCu0Z2JEn%2FcOQc2Y%2BP5tYu7RTYVD6e1YLrRNKeRSBCJ01f%2BXVZlAMQkU4tWfXvrZNCBVFCSiJI3ubyw5u0WDH5AxGVKBPbaadrzGy4dBSGLpAE6TE61YgxwJLOHOMH%2F5FSAwpLFGZDqd0P70qRs0SBjlTXAM4iLudjlolHEf8Gv1bpd1DIESkpaJ3cjcCHHOjg%2FnItprjvaDbh2JlbsgNHGxbQ111L1gVvTNq6eXmPj57KWSd5Q6NfHIef2WeN7WTm0%2FG5XVQj2y%2FDHW%2FVAO7Ix%2BE8d0FZbQXDGwHNiChCG9HSFPQm1z081iCxd3VliGna0fqx0Rekn3EFwi7PpBqt3czRdD6pmPJSyB7WOsCPISnkuJsL1rkTJwzM8Huf7t8SBCO%2BWHtsAsAh1zl7S4b5gY1zXnwNmRwAYFUilSD9W7cvwFkwVW9tVSR8S2llV1phEPPxcwoN6BwgY6pgGAaWg%2FvdkQ0Xbn3d%2BCXb4iixBza%2B6JjYsFAVvxoJeLXT7oESiW6zFBxL4QiPysnstvdcl5en4%2F7utUvmFBcuQbLTcEfWFhfVMql4C7JIHg5bywFT%2ByxNeoqj7%2Fc07H9Vfth0PjUWbLX5hKewyoqF3GMFQhk3vfp62DHnHQMMrqg3R825uzLvZ%2FPJL5qdeyUt%2Bj%2FYi9A54txo3gFal3qEM8urA%2BpRUE&X-Amz-Signature=5fe3ecdfbadeef8d439d0b790f67221547965b5b0e4258a5e86388ed21668e26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGXIFFK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH93DcSakknVbQ7qke8CbvI4xnDuaKLEnQGwa9frbLtgAiA1tQPTzJpZ39dXr50T3UaN6pbGfZqbc%2BIVvKCwwQD5lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlo4sk4scTf0trLH5KtwD5v%2FjFbv8c1UQ7YCPNHDCTuCyAD88ZUj5r0kBo%2BcdiLnAtYvaApVIK5gNqpKMnsUU21jflj5mBcXKvk7XVW%2BrQChM%2BVqi%2BIiKisokYlq%2Fj%2BPzxrZwJyNkJZZARc7IW9agbZD2LWIKxJABE1Ez2XpZEZtT1vU%2FoeaA2AORlk6WRjhk2YMR%2Fr4vBCu0Z2JEn%2FcOQc2Y%2BP5tYu7RTYVD6e1YLrRNKeRSBCJ01f%2BXVZlAMQkU4tWfXvrZNCBVFCSiJI3ubyw5u0WDH5AxGVKBPbaadrzGy4dBSGLpAE6TE61YgxwJLOHOMH%2F5FSAwpLFGZDqd0P70qRs0SBjlTXAM4iLudjlolHEf8Gv1bpd1DIESkpaJ3cjcCHHOjg%2FnItprjvaDbh2JlbsgNHGxbQ111L1gVvTNq6eXmPj57KWSd5Q6NfHIef2WeN7WTm0%2FG5XVQj2y%2FDHW%2FVAO7Ix%2BE8d0FZbQXDGwHNiChCG9HSFPQm1z081iCxd3VliGna0fqx0Rekn3EFwi7PpBqt3czRdD6pmPJSyB7WOsCPISnkuJsL1rkTJwzM8Huf7t8SBCO%2BWHtsAsAh1zl7S4b5gY1zXnwNmRwAYFUilSD9W7cvwFkwVW9tVSR8S2llV1phEPPxcwoN6BwgY6pgGAaWg%2FvdkQ0Xbn3d%2BCXb4iixBza%2B6JjYsFAVvxoJeLXT7oESiW6zFBxL4QiPysnstvdcl5en4%2F7utUvmFBcuQbLTcEfWFhfVMql4C7JIHg5bywFT%2ByxNeoqj7%2Fc07H9Vfth0PjUWbLX5hKewyoqF3GMFQhk3vfp62DHnHQMMrqg3R825uzLvZ%2FPJL5qdeyUt%2Bj%2FYi9A54txo3gFal3qEM8urA%2BpRUE&X-Amz-Signature=8359858522917c3c088fca0aa39cb4b2992b7b54adbb65019fa2c18b8f072d4a&X-Amz-SignedHeaders=host&x-id=GetObject)
