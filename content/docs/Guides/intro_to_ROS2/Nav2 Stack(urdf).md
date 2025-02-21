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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC5WVF3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADQ4P9kPn6Q9eYFDkho4QrBPYZhxFqxUH4mVwTjOYoRAiBdsxdr0vB64UvE8GMXbWpc8qMfeTuWMQqSka7DNabFZiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3y%2BXqToy4dW4KrFKtwDJIuk3DoleMa1vaDaXbgUni78bb760Np%2FBFUh0S5zIakFlB2m%2Bxb9DPHMirJiB5wdNQW1KNPYjf%2BRtjCMFHNP7t%2Bec76krcmVw1iZtjxT3EB%2BedKB9Y%2F7IJNZ73aqHczM526NlZgc6%2FBNTnj35atc8v%2B16owlJnOH6Rebyeo8os9BSqYPk1z%2ByclDGZupbMew%2BWQCflB81aejuiGr7wuw8V2zeDaU4GFHm5ZvX04G%2Bp0DZicPyUHCFDkxgJoU0x3VagwY2jxWcI9agBNx%2FetuTXpoqldyvweRI3VCE1XVgOrpJrZ1XWAwikg4VfvXG1vJk29PzoVqxTSeRbp2kr1E1scrWtJshSF%2BQAJw%2FWQRUBmAsb2D%2BCkYP%2B0kXpe9q5NMalHX5Z8WMEY79KKCl4JFd7mkF1wFXqcgMRZn9Fdu%2FyF%2Bf7rOmHqATzY6dzLsrmop2k1LE3Cc7M2UFN6t5ljW%2F5Ch%2F1%2FIvtoIjjbGVcg5PuM5GzXhyEuqLbe7webT%2FE7e%2Brn0CAq3FDkwrz8Rl7PBqMnmMP%2BMT7eDFTf25AUFvsWQn2ahelxbRPdPwftlxUmIPiwTCl22UGOPk7BplupDhU%2BAPMqW2jBjINeR9ZftaJzFnzHUkYeigMNtCA8w%2FJjhvQY6pgEVngCQz2JEVkSTMG9yaTdqHr50iBdBleaB0aeIlxvq5XO%2FTcVMxk3KEUNX2qVAoZzPQfqgoBTSbwqo4GozxQC%2FI9661d7WOG1%2F2x7km5AeQ4ekIY74E9PVn4lhXpNVg0T0ODi2nRpU1A5jR7Iv4eOLbSNSbVu348u3HnfrQ50lF0ezX7J14FIKCuLL8dHksdWnSJFUUVyhBAYOSpJYMvmK0AefJ1WS&X-Amz-Signature=33b287bb9a2945e1f069a7a7ac290b4f30ad563cb9aee91d856bc1a2fe206f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC5WVF3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADQ4P9kPn6Q9eYFDkho4QrBPYZhxFqxUH4mVwTjOYoRAiBdsxdr0vB64UvE8GMXbWpc8qMfeTuWMQqSka7DNabFZiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3y%2BXqToy4dW4KrFKtwDJIuk3DoleMa1vaDaXbgUni78bb760Np%2FBFUh0S5zIakFlB2m%2Bxb9DPHMirJiB5wdNQW1KNPYjf%2BRtjCMFHNP7t%2Bec76krcmVw1iZtjxT3EB%2BedKB9Y%2F7IJNZ73aqHczM526NlZgc6%2FBNTnj35atc8v%2B16owlJnOH6Rebyeo8os9BSqYPk1z%2ByclDGZupbMew%2BWQCflB81aejuiGr7wuw8V2zeDaU4GFHm5ZvX04G%2Bp0DZicPyUHCFDkxgJoU0x3VagwY2jxWcI9agBNx%2FetuTXpoqldyvweRI3VCE1XVgOrpJrZ1XWAwikg4VfvXG1vJk29PzoVqxTSeRbp2kr1E1scrWtJshSF%2BQAJw%2FWQRUBmAsb2D%2BCkYP%2B0kXpe9q5NMalHX5Z8WMEY79KKCl4JFd7mkF1wFXqcgMRZn9Fdu%2FyF%2Bf7rOmHqATzY6dzLsrmop2k1LE3Cc7M2UFN6t5ljW%2F5Ch%2F1%2FIvtoIjjbGVcg5PuM5GzXhyEuqLbe7webT%2FE7e%2Brn0CAq3FDkwrz8Rl7PBqMnmMP%2BMT7eDFTf25AUFvsWQn2ahelxbRPdPwftlxUmIPiwTCl22UGOPk7BplupDhU%2BAPMqW2jBjINeR9ZftaJzFnzHUkYeigMNtCA8w%2FJjhvQY6pgEVngCQz2JEVkSTMG9yaTdqHr50iBdBleaB0aeIlxvq5XO%2FTcVMxk3KEUNX2qVAoZzPQfqgoBTSbwqo4GozxQC%2FI9661d7WOG1%2F2x7km5AeQ4ekIY74E9PVn4lhXpNVg0T0ODi2nRpU1A5jR7Iv4eOLbSNSbVu348u3HnfrQ50lF0ezX7J14FIKCuLL8dHksdWnSJFUUVyhBAYOSpJYMvmK0AefJ1WS&X-Amz-Signature=07e05e58b59458b2f1074bb9971a5ca500c9a2b590cdc20a1753093d0d6f3a63&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC5WVF3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADQ4P9kPn6Q9eYFDkho4QrBPYZhxFqxUH4mVwTjOYoRAiBdsxdr0vB64UvE8GMXbWpc8qMfeTuWMQqSka7DNabFZiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3y%2BXqToy4dW4KrFKtwDJIuk3DoleMa1vaDaXbgUni78bb760Np%2FBFUh0S5zIakFlB2m%2Bxb9DPHMirJiB5wdNQW1KNPYjf%2BRtjCMFHNP7t%2Bec76krcmVw1iZtjxT3EB%2BedKB9Y%2F7IJNZ73aqHczM526NlZgc6%2FBNTnj35atc8v%2B16owlJnOH6Rebyeo8os9BSqYPk1z%2ByclDGZupbMew%2BWQCflB81aejuiGr7wuw8V2zeDaU4GFHm5ZvX04G%2Bp0DZicPyUHCFDkxgJoU0x3VagwY2jxWcI9agBNx%2FetuTXpoqldyvweRI3VCE1XVgOrpJrZ1XWAwikg4VfvXG1vJk29PzoVqxTSeRbp2kr1E1scrWtJshSF%2BQAJw%2FWQRUBmAsb2D%2BCkYP%2B0kXpe9q5NMalHX5Z8WMEY79KKCl4JFd7mkF1wFXqcgMRZn9Fdu%2FyF%2Bf7rOmHqATzY6dzLsrmop2k1LE3Cc7M2UFN6t5ljW%2F5Ch%2F1%2FIvtoIjjbGVcg5PuM5GzXhyEuqLbe7webT%2FE7e%2Brn0CAq3FDkwrz8Rl7PBqMnmMP%2BMT7eDFTf25AUFvsWQn2ahelxbRPdPwftlxUmIPiwTCl22UGOPk7BplupDhU%2BAPMqW2jBjINeR9ZftaJzFnzHUkYeigMNtCA8w%2FJjhvQY6pgEVngCQz2JEVkSTMG9yaTdqHr50iBdBleaB0aeIlxvq5XO%2FTcVMxk3KEUNX2qVAoZzPQfqgoBTSbwqo4GozxQC%2FI9661d7WOG1%2F2x7km5AeQ4ekIY74E9PVn4lhXpNVg0T0ODi2nRpU1A5jR7Iv4eOLbSNSbVu348u3HnfrQ50lF0ezX7J14FIKCuLL8dHksdWnSJFUUVyhBAYOSpJYMvmK0AefJ1WS&X-Amz-Signature=3f4cb77809ece470cb2a4f6207d8311fff4bd753a48b33e3c3bf2e26b37c1f73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC5WVF3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADQ4P9kPn6Q9eYFDkho4QrBPYZhxFqxUH4mVwTjOYoRAiBdsxdr0vB64UvE8GMXbWpc8qMfeTuWMQqSka7DNabFZiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3y%2BXqToy4dW4KrFKtwDJIuk3DoleMa1vaDaXbgUni78bb760Np%2FBFUh0S5zIakFlB2m%2Bxb9DPHMirJiB5wdNQW1KNPYjf%2BRtjCMFHNP7t%2Bec76krcmVw1iZtjxT3EB%2BedKB9Y%2F7IJNZ73aqHczM526NlZgc6%2FBNTnj35atc8v%2B16owlJnOH6Rebyeo8os9BSqYPk1z%2ByclDGZupbMew%2BWQCflB81aejuiGr7wuw8V2zeDaU4GFHm5ZvX04G%2Bp0DZicPyUHCFDkxgJoU0x3VagwY2jxWcI9agBNx%2FetuTXpoqldyvweRI3VCE1XVgOrpJrZ1XWAwikg4VfvXG1vJk29PzoVqxTSeRbp2kr1E1scrWtJshSF%2BQAJw%2FWQRUBmAsb2D%2BCkYP%2B0kXpe9q5NMalHX5Z8WMEY79KKCl4JFd7mkF1wFXqcgMRZn9Fdu%2FyF%2Bf7rOmHqATzY6dzLsrmop2k1LE3Cc7M2UFN6t5ljW%2F5Ch%2F1%2FIvtoIjjbGVcg5PuM5GzXhyEuqLbe7webT%2FE7e%2Brn0CAq3FDkwrz8Rl7PBqMnmMP%2BMT7eDFTf25AUFvsWQn2ahelxbRPdPwftlxUmIPiwTCl22UGOPk7BplupDhU%2BAPMqW2jBjINeR9ZftaJzFnzHUkYeigMNtCA8w%2FJjhvQY6pgEVngCQz2JEVkSTMG9yaTdqHr50iBdBleaB0aeIlxvq5XO%2FTcVMxk3KEUNX2qVAoZzPQfqgoBTSbwqo4GozxQC%2FI9661d7WOG1%2F2x7km5AeQ4ekIY74E9PVn4lhXpNVg0T0ODi2nRpU1A5jR7Iv4eOLbSNSbVu348u3HnfrQ50lF0ezX7J14FIKCuLL8dHksdWnSJFUUVyhBAYOSpJYMvmK0AefJ1WS&X-Amz-Signature=1b946f16ee423e749fb627495b7340e342fac29fd0ea5de9b300828b8ab90b31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC5WVF3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADQ4P9kPn6Q9eYFDkho4QrBPYZhxFqxUH4mVwTjOYoRAiBdsxdr0vB64UvE8GMXbWpc8qMfeTuWMQqSka7DNabFZiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3y%2BXqToy4dW4KrFKtwDJIuk3DoleMa1vaDaXbgUni78bb760Np%2FBFUh0S5zIakFlB2m%2Bxb9DPHMirJiB5wdNQW1KNPYjf%2BRtjCMFHNP7t%2Bec76krcmVw1iZtjxT3EB%2BedKB9Y%2F7IJNZ73aqHczM526NlZgc6%2FBNTnj35atc8v%2B16owlJnOH6Rebyeo8os9BSqYPk1z%2ByclDGZupbMew%2BWQCflB81aejuiGr7wuw8V2zeDaU4GFHm5ZvX04G%2Bp0DZicPyUHCFDkxgJoU0x3VagwY2jxWcI9agBNx%2FetuTXpoqldyvweRI3VCE1XVgOrpJrZ1XWAwikg4VfvXG1vJk29PzoVqxTSeRbp2kr1E1scrWtJshSF%2BQAJw%2FWQRUBmAsb2D%2BCkYP%2B0kXpe9q5NMalHX5Z8WMEY79KKCl4JFd7mkF1wFXqcgMRZn9Fdu%2FyF%2Bf7rOmHqATzY6dzLsrmop2k1LE3Cc7M2UFN6t5ljW%2F5Ch%2F1%2FIvtoIjjbGVcg5PuM5GzXhyEuqLbe7webT%2FE7e%2Brn0CAq3FDkwrz8Rl7PBqMnmMP%2BMT7eDFTf25AUFvsWQn2ahelxbRPdPwftlxUmIPiwTCl22UGOPk7BplupDhU%2BAPMqW2jBjINeR9ZftaJzFnzHUkYeigMNtCA8w%2FJjhvQY6pgEVngCQz2JEVkSTMG9yaTdqHr50iBdBleaB0aeIlxvq5XO%2FTcVMxk3KEUNX2qVAoZzPQfqgoBTSbwqo4GozxQC%2FI9661d7WOG1%2F2x7km5AeQ4ekIY74E9PVn4lhXpNVg0T0ODi2nRpU1A5jR7Iv4eOLbSNSbVu348u3HnfrQ50lF0ezX7J14FIKCuLL8dHksdWnSJFUUVyhBAYOSpJYMvmK0AefJ1WS&X-Amz-Signature=ae3db108145c583aad02c590767a49347f95e78778d8025bb6b3c998150be8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBC5WVF3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADQ4P9kPn6Q9eYFDkho4QrBPYZhxFqxUH4mVwTjOYoRAiBdsxdr0vB64UvE8GMXbWpc8qMfeTuWMQqSka7DNabFZiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3y%2BXqToy4dW4KrFKtwDJIuk3DoleMa1vaDaXbgUni78bb760Np%2FBFUh0S5zIakFlB2m%2Bxb9DPHMirJiB5wdNQW1KNPYjf%2BRtjCMFHNP7t%2Bec76krcmVw1iZtjxT3EB%2BedKB9Y%2F7IJNZ73aqHczM526NlZgc6%2FBNTnj35atc8v%2B16owlJnOH6Rebyeo8os9BSqYPk1z%2ByclDGZupbMew%2BWQCflB81aejuiGr7wuw8V2zeDaU4GFHm5ZvX04G%2Bp0DZicPyUHCFDkxgJoU0x3VagwY2jxWcI9agBNx%2FetuTXpoqldyvweRI3VCE1XVgOrpJrZ1XWAwikg4VfvXG1vJk29PzoVqxTSeRbp2kr1E1scrWtJshSF%2BQAJw%2FWQRUBmAsb2D%2BCkYP%2B0kXpe9q5NMalHX5Z8WMEY79KKCl4JFd7mkF1wFXqcgMRZn9Fdu%2FyF%2Bf7rOmHqATzY6dzLsrmop2k1LE3Cc7M2UFN6t5ljW%2F5Ch%2F1%2FIvtoIjjbGVcg5PuM5GzXhyEuqLbe7webT%2FE7e%2Brn0CAq3FDkwrz8Rl7PBqMnmMP%2BMT7eDFTf25AUFvsWQn2ahelxbRPdPwftlxUmIPiwTCl22UGOPk7BplupDhU%2BAPMqW2jBjINeR9ZftaJzFnzHUkYeigMNtCA8w%2FJjhvQY6pgEVngCQz2JEVkSTMG9yaTdqHr50iBdBleaB0aeIlxvq5XO%2FTcVMxk3KEUNX2qVAoZzPQfqgoBTSbwqo4GozxQC%2FI9661d7WOG1%2F2x7km5AeQ4ekIY74E9PVn4lhXpNVg0T0ODi2nRpU1A5jR7Iv4eOLbSNSbVu348u3HnfrQ50lF0ezX7J14FIKCuLL8dHksdWnSJFUUVyhBAYOSpJYMvmK0AefJ1WS&X-Amz-Signature=75c62a8849225c69c2bc5ecbc36158b7bcfa9de7198484fe7dbcf50064404702&X-Amz-SignedHeaders=host&x-id=GetObject)
