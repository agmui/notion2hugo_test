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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH44AJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC8M82NWtfwaKmXb508rpdWABYaaviIKnWtTeDPtQTexwIhAPdaF5t9Miuqj0xVhZv1fCG4y%2FheoRZ2Etzn5TYlMyKdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwfwyMQbn4VnjgLI2cq3ANWX7OTMU7rtg20rqG4Ge5IWhPAm93eMOamJrLTIW9iHEiYwnP9QF5o03WJisFLb0id9Cli7BeWbcw5K%2FUzN3y7Gg2U52PSwaZbne8KvYd5khOJIlSM02jNPwCr91jBtAaum3qd3fksyhhqyb15jlzYqHGHs4IHOHaHqGdcYzCT1HQ9gwA%2BAAXFMLokk3oAZ7RMVffxq2J3vMKT5VT5CixnkHsI0pqVC%2B4blOk%2B4fWx1AEE0mSxj1wX9j8cww60elilfcY5%2F8BLyPnG%2BMzzOJFtFm9lsc58FybGmdBtzWtKw4x9u5xLey%2Btfxkqm5XwPN0tAmlWzBENSiEkv%2FwvE6sgVpeKBRMv%2FMWVMj7cSeA0SbISAlJwS9Q0xTxgedhVdSbuK2ziY9Z5tVRn4jLvKqKL3rkFPxIOPN0JfINHcKSHVi81gehU%2BJlIFslpKMaXDB0ydE5yoyYW7c9aFK8kroan99LbekveDh3JKjjUx78cwigSQQ3gYYQL8SczjAXuflsPS5nIxgJed4fGXwmLUuezbDiSksdubBdYgmLMsJU%2BKZuT%2B2gwYZVsmO18HzASXYW0VBG6gfqQyrkNHIWmPRZTpcFjvGY5LxeuLlsWrHhl9ecS04%2ByscwlQ3aYEzDF%2FsW9BjqkAURIFxir5CzcluNQnGC%2BZVBaV6GdeiBHR8Mz1DchPlCXzNuw8NQnqMbH1LNHA%2B16hCGjdIjFIf09GCyysL3Q1ONcBidbxvNY2AfIizVAGuItog7j61DbbitRK%2Fx1NTLVq%2Fi%2B%2FQEM5UMdfEG1a4MQE%2BtrkEbT4O%2FJ3hnDEfzKvpswKinZ4wHvNXprcgd9eGMaL5b%2Fs%2BhdBUTIqmkrjY5mebknUqJe&X-Amz-Signature=aefac6faacaa8c2f111d780fa871a2dcc355e95e7b3d6e499477e89a4cc9bdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH44AJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC8M82NWtfwaKmXb508rpdWABYaaviIKnWtTeDPtQTexwIhAPdaF5t9Miuqj0xVhZv1fCG4y%2FheoRZ2Etzn5TYlMyKdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwfwyMQbn4VnjgLI2cq3ANWX7OTMU7rtg20rqG4Ge5IWhPAm93eMOamJrLTIW9iHEiYwnP9QF5o03WJisFLb0id9Cli7BeWbcw5K%2FUzN3y7Gg2U52PSwaZbne8KvYd5khOJIlSM02jNPwCr91jBtAaum3qd3fksyhhqyb15jlzYqHGHs4IHOHaHqGdcYzCT1HQ9gwA%2BAAXFMLokk3oAZ7RMVffxq2J3vMKT5VT5CixnkHsI0pqVC%2B4blOk%2B4fWx1AEE0mSxj1wX9j8cww60elilfcY5%2F8BLyPnG%2BMzzOJFtFm9lsc58FybGmdBtzWtKw4x9u5xLey%2Btfxkqm5XwPN0tAmlWzBENSiEkv%2FwvE6sgVpeKBRMv%2FMWVMj7cSeA0SbISAlJwS9Q0xTxgedhVdSbuK2ziY9Z5tVRn4jLvKqKL3rkFPxIOPN0JfINHcKSHVi81gehU%2BJlIFslpKMaXDB0ydE5yoyYW7c9aFK8kroan99LbekveDh3JKjjUx78cwigSQQ3gYYQL8SczjAXuflsPS5nIxgJed4fGXwmLUuezbDiSksdubBdYgmLMsJU%2BKZuT%2B2gwYZVsmO18HzASXYW0VBG6gfqQyrkNHIWmPRZTpcFjvGY5LxeuLlsWrHhl9ecS04%2ByscwlQ3aYEzDF%2FsW9BjqkAURIFxir5CzcluNQnGC%2BZVBaV6GdeiBHR8Mz1DchPlCXzNuw8NQnqMbH1LNHA%2B16hCGjdIjFIf09GCyysL3Q1ONcBidbxvNY2AfIizVAGuItog7j61DbbitRK%2Fx1NTLVq%2Fi%2B%2FQEM5UMdfEG1a4MQE%2BtrkEbT4O%2FJ3hnDEfzKvpswKinZ4wHvNXprcgd9eGMaL5b%2Fs%2BhdBUTIqmkrjY5mebknUqJe&X-Amz-Signature=b2b3a55ba4e4f9ee6f35c1f3632a02259e0e68212bafa8250a761ea24a2b0718&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH44AJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC8M82NWtfwaKmXb508rpdWABYaaviIKnWtTeDPtQTexwIhAPdaF5t9Miuqj0xVhZv1fCG4y%2FheoRZ2Etzn5TYlMyKdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwfwyMQbn4VnjgLI2cq3ANWX7OTMU7rtg20rqG4Ge5IWhPAm93eMOamJrLTIW9iHEiYwnP9QF5o03WJisFLb0id9Cli7BeWbcw5K%2FUzN3y7Gg2U52PSwaZbne8KvYd5khOJIlSM02jNPwCr91jBtAaum3qd3fksyhhqyb15jlzYqHGHs4IHOHaHqGdcYzCT1HQ9gwA%2BAAXFMLokk3oAZ7RMVffxq2J3vMKT5VT5CixnkHsI0pqVC%2B4blOk%2B4fWx1AEE0mSxj1wX9j8cww60elilfcY5%2F8BLyPnG%2BMzzOJFtFm9lsc58FybGmdBtzWtKw4x9u5xLey%2Btfxkqm5XwPN0tAmlWzBENSiEkv%2FwvE6sgVpeKBRMv%2FMWVMj7cSeA0SbISAlJwS9Q0xTxgedhVdSbuK2ziY9Z5tVRn4jLvKqKL3rkFPxIOPN0JfINHcKSHVi81gehU%2BJlIFslpKMaXDB0ydE5yoyYW7c9aFK8kroan99LbekveDh3JKjjUx78cwigSQQ3gYYQL8SczjAXuflsPS5nIxgJed4fGXwmLUuezbDiSksdubBdYgmLMsJU%2BKZuT%2B2gwYZVsmO18HzASXYW0VBG6gfqQyrkNHIWmPRZTpcFjvGY5LxeuLlsWrHhl9ecS04%2ByscwlQ3aYEzDF%2FsW9BjqkAURIFxir5CzcluNQnGC%2BZVBaV6GdeiBHR8Mz1DchPlCXzNuw8NQnqMbH1LNHA%2B16hCGjdIjFIf09GCyysL3Q1ONcBidbxvNY2AfIizVAGuItog7j61DbbitRK%2Fx1NTLVq%2Fi%2B%2FQEM5UMdfEG1a4MQE%2BtrkEbT4O%2FJ3hnDEfzKvpswKinZ4wHvNXprcgd9eGMaL5b%2Fs%2BhdBUTIqmkrjY5mebknUqJe&X-Amz-Signature=7d58f90aaec8c8458eee1601e56f73c88a6c483f1d8566775d3056f9bad3e651&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH44AJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC8M82NWtfwaKmXb508rpdWABYaaviIKnWtTeDPtQTexwIhAPdaF5t9Miuqj0xVhZv1fCG4y%2FheoRZ2Etzn5TYlMyKdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwfwyMQbn4VnjgLI2cq3ANWX7OTMU7rtg20rqG4Ge5IWhPAm93eMOamJrLTIW9iHEiYwnP9QF5o03WJisFLb0id9Cli7BeWbcw5K%2FUzN3y7Gg2U52PSwaZbne8KvYd5khOJIlSM02jNPwCr91jBtAaum3qd3fksyhhqyb15jlzYqHGHs4IHOHaHqGdcYzCT1HQ9gwA%2BAAXFMLokk3oAZ7RMVffxq2J3vMKT5VT5CixnkHsI0pqVC%2B4blOk%2B4fWx1AEE0mSxj1wX9j8cww60elilfcY5%2F8BLyPnG%2BMzzOJFtFm9lsc58FybGmdBtzWtKw4x9u5xLey%2Btfxkqm5XwPN0tAmlWzBENSiEkv%2FwvE6sgVpeKBRMv%2FMWVMj7cSeA0SbISAlJwS9Q0xTxgedhVdSbuK2ziY9Z5tVRn4jLvKqKL3rkFPxIOPN0JfINHcKSHVi81gehU%2BJlIFslpKMaXDB0ydE5yoyYW7c9aFK8kroan99LbekveDh3JKjjUx78cwigSQQ3gYYQL8SczjAXuflsPS5nIxgJed4fGXwmLUuezbDiSksdubBdYgmLMsJU%2BKZuT%2B2gwYZVsmO18HzASXYW0VBG6gfqQyrkNHIWmPRZTpcFjvGY5LxeuLlsWrHhl9ecS04%2ByscwlQ3aYEzDF%2FsW9BjqkAURIFxir5CzcluNQnGC%2BZVBaV6GdeiBHR8Mz1DchPlCXzNuw8NQnqMbH1LNHA%2B16hCGjdIjFIf09GCyysL3Q1ONcBidbxvNY2AfIizVAGuItog7j61DbbitRK%2Fx1NTLVq%2Fi%2B%2FQEM5UMdfEG1a4MQE%2BtrkEbT4O%2FJ3hnDEfzKvpswKinZ4wHvNXprcgd9eGMaL5b%2Fs%2BhdBUTIqmkrjY5mebknUqJe&X-Amz-Signature=1100aa1c43a02c781a0fd7e99617ef6ba3a910b05696ee488d74af92e51eadf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH44AJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC8M82NWtfwaKmXb508rpdWABYaaviIKnWtTeDPtQTexwIhAPdaF5t9Miuqj0xVhZv1fCG4y%2FheoRZ2Etzn5TYlMyKdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwfwyMQbn4VnjgLI2cq3ANWX7OTMU7rtg20rqG4Ge5IWhPAm93eMOamJrLTIW9iHEiYwnP9QF5o03WJisFLb0id9Cli7BeWbcw5K%2FUzN3y7Gg2U52PSwaZbne8KvYd5khOJIlSM02jNPwCr91jBtAaum3qd3fksyhhqyb15jlzYqHGHs4IHOHaHqGdcYzCT1HQ9gwA%2BAAXFMLokk3oAZ7RMVffxq2J3vMKT5VT5CixnkHsI0pqVC%2B4blOk%2B4fWx1AEE0mSxj1wX9j8cww60elilfcY5%2F8BLyPnG%2BMzzOJFtFm9lsc58FybGmdBtzWtKw4x9u5xLey%2Btfxkqm5XwPN0tAmlWzBENSiEkv%2FwvE6sgVpeKBRMv%2FMWVMj7cSeA0SbISAlJwS9Q0xTxgedhVdSbuK2ziY9Z5tVRn4jLvKqKL3rkFPxIOPN0JfINHcKSHVi81gehU%2BJlIFslpKMaXDB0ydE5yoyYW7c9aFK8kroan99LbekveDh3JKjjUx78cwigSQQ3gYYQL8SczjAXuflsPS5nIxgJed4fGXwmLUuezbDiSksdubBdYgmLMsJU%2BKZuT%2B2gwYZVsmO18HzASXYW0VBG6gfqQyrkNHIWmPRZTpcFjvGY5LxeuLlsWrHhl9ecS04%2ByscwlQ3aYEzDF%2FsW9BjqkAURIFxir5CzcluNQnGC%2BZVBaV6GdeiBHR8Mz1DchPlCXzNuw8NQnqMbH1LNHA%2B16hCGjdIjFIf09GCyysL3Q1ONcBidbxvNY2AfIizVAGuItog7j61DbbitRK%2Fx1NTLVq%2Fi%2B%2FQEM5UMdfEG1a4MQE%2BtrkEbT4O%2FJ3hnDEfzKvpswKinZ4wHvNXprcgd9eGMaL5b%2Fs%2BhdBUTIqmkrjY5mebknUqJe&X-Amz-Signature=99a61bc917ddce55bf1ba60f10a3d6ad712c5f77354cfa715c6c4199a45c17f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIH44AJU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC8M82NWtfwaKmXb508rpdWABYaaviIKnWtTeDPtQTexwIhAPdaF5t9Miuqj0xVhZv1fCG4y%2FheoRZ2Etzn5TYlMyKdKv8DCFcQABoMNjM3NDIzMTgzODA1IgwfwyMQbn4VnjgLI2cq3ANWX7OTMU7rtg20rqG4Ge5IWhPAm93eMOamJrLTIW9iHEiYwnP9QF5o03WJisFLb0id9Cli7BeWbcw5K%2FUzN3y7Gg2U52PSwaZbne8KvYd5khOJIlSM02jNPwCr91jBtAaum3qd3fksyhhqyb15jlzYqHGHs4IHOHaHqGdcYzCT1HQ9gwA%2BAAXFMLokk3oAZ7RMVffxq2J3vMKT5VT5CixnkHsI0pqVC%2B4blOk%2B4fWx1AEE0mSxj1wX9j8cww60elilfcY5%2F8BLyPnG%2BMzzOJFtFm9lsc58FybGmdBtzWtKw4x9u5xLey%2Btfxkqm5XwPN0tAmlWzBENSiEkv%2FwvE6sgVpeKBRMv%2FMWVMj7cSeA0SbISAlJwS9Q0xTxgedhVdSbuK2ziY9Z5tVRn4jLvKqKL3rkFPxIOPN0JfINHcKSHVi81gehU%2BJlIFslpKMaXDB0ydE5yoyYW7c9aFK8kroan99LbekveDh3JKjjUx78cwigSQQ3gYYQL8SczjAXuflsPS5nIxgJed4fGXwmLUuezbDiSksdubBdYgmLMsJU%2BKZuT%2B2gwYZVsmO18HzASXYW0VBG6gfqQyrkNHIWmPRZTpcFjvGY5LxeuLlsWrHhl9ecS04%2ByscwlQ3aYEzDF%2FsW9BjqkAURIFxir5CzcluNQnGC%2BZVBaV6GdeiBHR8Mz1DchPlCXzNuw8NQnqMbH1LNHA%2B16hCGjdIjFIf09GCyysL3Q1ONcBidbxvNY2AfIizVAGuItog7j61DbbitRK%2Fx1NTLVq%2Fi%2B%2FQEM5UMdfEG1a4MQE%2BtrkEbT4O%2FJ3hnDEfzKvpswKinZ4wHvNXprcgd9eGMaL5b%2Fs%2BhdBUTIqmkrjY5mebknUqJe&X-Amz-Signature=ca259c6a0a1d3e8ddcca32205fcd39155dade8b447b60dbce30b61879d8fc5be&X-Amz-SignedHeaders=host&x-id=GetObject)
