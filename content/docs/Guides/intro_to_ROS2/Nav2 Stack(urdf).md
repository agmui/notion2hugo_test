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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXCBXM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1PNv9SigS8RhjUm8%2BPvd76KrtFtVi1LRrHmhKeFAJowIhAMgZd1xoso%2FewIwjffNZMny9Dl%2BsSE0%2BLwFNU3Z6SH7fKv8DCCYQABoMNjM3NDIzMTgzODA1IgxeC%2BXzPjRm%2FO%2FtTUAq3AOJgnhQgFADtUyvOuq5z%2BZVfz%2F2RtwkfHTZDtTJ1YNN%2BQuiu7ka2EcsBG6ojgg1RzQFe0rp%2FxhKVA9FA%2BDLpEdBGbJ2v5YzDte4MrLKZ1%2FwhAa8ZV5onC8AmJa%2BtK5JoIeqFcFBlXBaNsloIHahcwlIsynCxrr9tcgmb%2FvKsaBkf2U5QHF3oA8mtdAL9symlgIWj1Z7qVn8WDF338Bco1pzTt5gE5WaRWR2LC%2BmNEPQaXHl3EO0Ptu6R%2Bl9%2FwDW3x76DRk2JmovVeZ1A57AYiZaCjp5BZki7rEQUlyVScnPuOj49fNxEvuupFyaTRLchd67qVcLpPNiWx%2FFzswdDpmpFc%2B1qJ6m7DZCAGzVzMEoIPF%2FYJKSHAHDHYoBpJyfCbfZA%2BGVaNsYK3OIXa%2FNsL4tjWLUSRhy5qRgT4F3jr1kU0xPukG7rrQJQ3MoJZxfOxSOq3gsmEMd3oJJVKp4v15t8ZT9tcMyvkjWI0FqERLdCSb0Dt7ueEnPv8i7i1btjmloUgiqsNXyB6JyjZDji0yZEs7J2WQvK0Rh%2B4ersj19PKN4qXVXpGrZSeKG9JQPw5fhVSQb8W14PiNY7g6BB9k2qiDFnMKzBw2SIKYEnlPgTPAk8Iidg4r7bitAKTCbwIa9BjqkAV8Ulw18nqIuHVUvDjBK5o0Fge7t%2BxBRChsBbkTtrT5ADsUCq8M7cr7vvexeW097rs2LNSvqz61%2Bh38yMXDIVg7bMW%2F7zVXIOlcf%2BNv3zoWPFbvwKlFeWpb6uUbjNjGr4T7JLsZGCU%2BNqPCzs70wdulVewtRfXmmI9l1cRGE8esRT7tz8eYNrd78TXcsO%2F%2FRI6SBp7opiE0dcH8aN0LVP3MVA6QG&X-Amz-Signature=fd3579442339d51cbe295e477896be08ca789f3a4d7b09d422d18f5600840ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXCBXM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1PNv9SigS8RhjUm8%2BPvd76KrtFtVi1LRrHmhKeFAJowIhAMgZd1xoso%2FewIwjffNZMny9Dl%2BsSE0%2BLwFNU3Z6SH7fKv8DCCYQABoMNjM3NDIzMTgzODA1IgxeC%2BXzPjRm%2FO%2FtTUAq3AOJgnhQgFADtUyvOuq5z%2BZVfz%2F2RtwkfHTZDtTJ1YNN%2BQuiu7ka2EcsBG6ojgg1RzQFe0rp%2FxhKVA9FA%2BDLpEdBGbJ2v5YzDte4MrLKZ1%2FwhAa8ZV5onC8AmJa%2BtK5JoIeqFcFBlXBaNsloIHahcwlIsynCxrr9tcgmb%2FvKsaBkf2U5QHF3oA8mtdAL9symlgIWj1Z7qVn8WDF338Bco1pzTt5gE5WaRWR2LC%2BmNEPQaXHl3EO0Ptu6R%2Bl9%2FwDW3x76DRk2JmovVeZ1A57AYiZaCjp5BZki7rEQUlyVScnPuOj49fNxEvuupFyaTRLchd67qVcLpPNiWx%2FFzswdDpmpFc%2B1qJ6m7DZCAGzVzMEoIPF%2FYJKSHAHDHYoBpJyfCbfZA%2BGVaNsYK3OIXa%2FNsL4tjWLUSRhy5qRgT4F3jr1kU0xPukG7rrQJQ3MoJZxfOxSOq3gsmEMd3oJJVKp4v15t8ZT9tcMyvkjWI0FqERLdCSb0Dt7ueEnPv8i7i1btjmloUgiqsNXyB6JyjZDji0yZEs7J2WQvK0Rh%2B4ersj19PKN4qXVXpGrZSeKG9JQPw5fhVSQb8W14PiNY7g6BB9k2qiDFnMKzBw2SIKYEnlPgTPAk8Iidg4r7bitAKTCbwIa9BjqkAV8Ulw18nqIuHVUvDjBK5o0Fge7t%2BxBRChsBbkTtrT5ADsUCq8M7cr7vvexeW097rs2LNSvqz61%2Bh38yMXDIVg7bMW%2F7zVXIOlcf%2BNv3zoWPFbvwKlFeWpb6uUbjNjGr4T7JLsZGCU%2BNqPCzs70wdulVewtRfXmmI9l1cRGE8esRT7tz8eYNrd78TXcsO%2F%2FRI6SBp7opiE0dcH8aN0LVP3MVA6QG&X-Amz-Signature=47dd3d66e4e32d30449c6785811a7ff06a761306d946b4503a7ab1e5f19d2b51&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXCBXM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1PNv9SigS8RhjUm8%2BPvd76KrtFtVi1LRrHmhKeFAJowIhAMgZd1xoso%2FewIwjffNZMny9Dl%2BsSE0%2BLwFNU3Z6SH7fKv8DCCYQABoMNjM3NDIzMTgzODA1IgxeC%2BXzPjRm%2FO%2FtTUAq3AOJgnhQgFADtUyvOuq5z%2BZVfz%2F2RtwkfHTZDtTJ1YNN%2BQuiu7ka2EcsBG6ojgg1RzQFe0rp%2FxhKVA9FA%2BDLpEdBGbJ2v5YzDte4MrLKZ1%2FwhAa8ZV5onC8AmJa%2BtK5JoIeqFcFBlXBaNsloIHahcwlIsynCxrr9tcgmb%2FvKsaBkf2U5QHF3oA8mtdAL9symlgIWj1Z7qVn8WDF338Bco1pzTt5gE5WaRWR2LC%2BmNEPQaXHl3EO0Ptu6R%2Bl9%2FwDW3x76DRk2JmovVeZ1A57AYiZaCjp5BZki7rEQUlyVScnPuOj49fNxEvuupFyaTRLchd67qVcLpPNiWx%2FFzswdDpmpFc%2B1qJ6m7DZCAGzVzMEoIPF%2FYJKSHAHDHYoBpJyfCbfZA%2BGVaNsYK3OIXa%2FNsL4tjWLUSRhy5qRgT4F3jr1kU0xPukG7rrQJQ3MoJZxfOxSOq3gsmEMd3oJJVKp4v15t8ZT9tcMyvkjWI0FqERLdCSb0Dt7ueEnPv8i7i1btjmloUgiqsNXyB6JyjZDji0yZEs7J2WQvK0Rh%2B4ersj19PKN4qXVXpGrZSeKG9JQPw5fhVSQb8W14PiNY7g6BB9k2qiDFnMKzBw2SIKYEnlPgTPAk8Iidg4r7bitAKTCbwIa9BjqkAV8Ulw18nqIuHVUvDjBK5o0Fge7t%2BxBRChsBbkTtrT5ADsUCq8M7cr7vvexeW097rs2LNSvqz61%2Bh38yMXDIVg7bMW%2F7zVXIOlcf%2BNv3zoWPFbvwKlFeWpb6uUbjNjGr4T7JLsZGCU%2BNqPCzs70wdulVewtRfXmmI9l1cRGE8esRT7tz8eYNrd78TXcsO%2F%2FRI6SBp7opiE0dcH8aN0LVP3MVA6QG&X-Amz-Signature=39916de616e5f3664d3fb7ee1bc7363c5c5930ac42f25c6be7a4c383680a0b77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXCBXM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1PNv9SigS8RhjUm8%2BPvd76KrtFtVi1LRrHmhKeFAJowIhAMgZd1xoso%2FewIwjffNZMny9Dl%2BsSE0%2BLwFNU3Z6SH7fKv8DCCYQABoMNjM3NDIzMTgzODA1IgxeC%2BXzPjRm%2FO%2FtTUAq3AOJgnhQgFADtUyvOuq5z%2BZVfz%2F2RtwkfHTZDtTJ1YNN%2BQuiu7ka2EcsBG6ojgg1RzQFe0rp%2FxhKVA9FA%2BDLpEdBGbJ2v5YzDte4MrLKZ1%2FwhAa8ZV5onC8AmJa%2BtK5JoIeqFcFBlXBaNsloIHahcwlIsynCxrr9tcgmb%2FvKsaBkf2U5QHF3oA8mtdAL9symlgIWj1Z7qVn8WDF338Bco1pzTt5gE5WaRWR2LC%2BmNEPQaXHl3EO0Ptu6R%2Bl9%2FwDW3x76DRk2JmovVeZ1A57AYiZaCjp5BZki7rEQUlyVScnPuOj49fNxEvuupFyaTRLchd67qVcLpPNiWx%2FFzswdDpmpFc%2B1qJ6m7DZCAGzVzMEoIPF%2FYJKSHAHDHYoBpJyfCbfZA%2BGVaNsYK3OIXa%2FNsL4tjWLUSRhy5qRgT4F3jr1kU0xPukG7rrQJQ3MoJZxfOxSOq3gsmEMd3oJJVKp4v15t8ZT9tcMyvkjWI0FqERLdCSb0Dt7ueEnPv8i7i1btjmloUgiqsNXyB6JyjZDji0yZEs7J2WQvK0Rh%2B4ersj19PKN4qXVXpGrZSeKG9JQPw5fhVSQb8W14PiNY7g6BB9k2qiDFnMKzBw2SIKYEnlPgTPAk8Iidg4r7bitAKTCbwIa9BjqkAV8Ulw18nqIuHVUvDjBK5o0Fge7t%2BxBRChsBbkTtrT5ADsUCq8M7cr7vvexeW097rs2LNSvqz61%2Bh38yMXDIVg7bMW%2F7zVXIOlcf%2BNv3zoWPFbvwKlFeWpb6uUbjNjGr4T7JLsZGCU%2BNqPCzs70wdulVewtRfXmmI9l1cRGE8esRT7tz8eYNrd78TXcsO%2F%2FRI6SBp7opiE0dcH8aN0LVP3MVA6QG&X-Amz-Signature=2858046de862d8ff90e6d5631ea5bcd6753c03485be7965d8ccb68e769d8f43c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXCBXM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1PNv9SigS8RhjUm8%2BPvd76KrtFtVi1LRrHmhKeFAJowIhAMgZd1xoso%2FewIwjffNZMny9Dl%2BsSE0%2BLwFNU3Z6SH7fKv8DCCYQABoMNjM3NDIzMTgzODA1IgxeC%2BXzPjRm%2FO%2FtTUAq3AOJgnhQgFADtUyvOuq5z%2BZVfz%2F2RtwkfHTZDtTJ1YNN%2BQuiu7ka2EcsBG6ojgg1RzQFe0rp%2FxhKVA9FA%2BDLpEdBGbJ2v5YzDte4MrLKZ1%2FwhAa8ZV5onC8AmJa%2BtK5JoIeqFcFBlXBaNsloIHahcwlIsynCxrr9tcgmb%2FvKsaBkf2U5QHF3oA8mtdAL9symlgIWj1Z7qVn8WDF338Bco1pzTt5gE5WaRWR2LC%2BmNEPQaXHl3EO0Ptu6R%2Bl9%2FwDW3x76DRk2JmovVeZ1A57AYiZaCjp5BZki7rEQUlyVScnPuOj49fNxEvuupFyaTRLchd67qVcLpPNiWx%2FFzswdDpmpFc%2B1qJ6m7DZCAGzVzMEoIPF%2FYJKSHAHDHYoBpJyfCbfZA%2BGVaNsYK3OIXa%2FNsL4tjWLUSRhy5qRgT4F3jr1kU0xPukG7rrQJQ3MoJZxfOxSOq3gsmEMd3oJJVKp4v15t8ZT9tcMyvkjWI0FqERLdCSb0Dt7ueEnPv8i7i1btjmloUgiqsNXyB6JyjZDji0yZEs7J2WQvK0Rh%2B4ersj19PKN4qXVXpGrZSeKG9JQPw5fhVSQb8W14PiNY7g6BB9k2qiDFnMKzBw2SIKYEnlPgTPAk8Iidg4r7bitAKTCbwIa9BjqkAV8Ulw18nqIuHVUvDjBK5o0Fge7t%2BxBRChsBbkTtrT5ADsUCq8M7cr7vvexeW097rs2LNSvqz61%2Bh38yMXDIVg7bMW%2F7zVXIOlcf%2BNv3zoWPFbvwKlFeWpb6uUbjNjGr4T7JLsZGCU%2BNqPCzs70wdulVewtRfXmmI9l1cRGE8esRT7tz8eYNrd78TXcsO%2F%2FRI6SBp7opiE0dcH8aN0LVP3MVA6QG&X-Amz-Signature=91adfb913719aebd6e9366db8a8a3dab9d304cefab482298905a2726c9f75757&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXCBXM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1PNv9SigS8RhjUm8%2BPvd76KrtFtVi1LRrHmhKeFAJowIhAMgZd1xoso%2FewIwjffNZMny9Dl%2BsSE0%2BLwFNU3Z6SH7fKv8DCCYQABoMNjM3NDIzMTgzODA1IgxeC%2BXzPjRm%2FO%2FtTUAq3AOJgnhQgFADtUyvOuq5z%2BZVfz%2F2RtwkfHTZDtTJ1YNN%2BQuiu7ka2EcsBG6ojgg1RzQFe0rp%2FxhKVA9FA%2BDLpEdBGbJ2v5YzDte4MrLKZ1%2FwhAa8ZV5onC8AmJa%2BtK5JoIeqFcFBlXBaNsloIHahcwlIsynCxrr9tcgmb%2FvKsaBkf2U5QHF3oA8mtdAL9symlgIWj1Z7qVn8WDF338Bco1pzTt5gE5WaRWR2LC%2BmNEPQaXHl3EO0Ptu6R%2Bl9%2FwDW3x76DRk2JmovVeZ1A57AYiZaCjp5BZki7rEQUlyVScnPuOj49fNxEvuupFyaTRLchd67qVcLpPNiWx%2FFzswdDpmpFc%2B1qJ6m7DZCAGzVzMEoIPF%2FYJKSHAHDHYoBpJyfCbfZA%2BGVaNsYK3OIXa%2FNsL4tjWLUSRhy5qRgT4F3jr1kU0xPukG7rrQJQ3MoJZxfOxSOq3gsmEMd3oJJVKp4v15t8ZT9tcMyvkjWI0FqERLdCSb0Dt7ueEnPv8i7i1btjmloUgiqsNXyB6JyjZDji0yZEs7J2WQvK0Rh%2B4ersj19PKN4qXVXpGrZSeKG9JQPw5fhVSQb8W14PiNY7g6BB9k2qiDFnMKzBw2SIKYEnlPgTPAk8Iidg4r7bitAKTCbwIa9BjqkAV8Ulw18nqIuHVUvDjBK5o0Fge7t%2BxBRChsBbkTtrT5ADsUCq8M7cr7vvexeW097rs2LNSvqz61%2Bh38yMXDIVg7bMW%2F7zVXIOlcf%2BNv3zoWPFbvwKlFeWpb6uUbjNjGr4T7JLsZGCU%2BNqPCzs70wdulVewtRfXmmI9l1cRGE8esRT7tz8eYNrd78TXcsO%2F%2FRI6SBp7opiE0dcH8aN0LVP3MVA6QG&X-Amz-Signature=d31b4f47a1bcc94b1cb4ad6a4a81309e3e01f658529e2a1bcf1cac994edafbb2&X-Amz-SignedHeaders=host&x-id=GetObject)
