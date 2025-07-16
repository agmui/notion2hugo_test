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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPANT7QV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC5l1JZydSWx25wPvjtVol5BPbeL%2BtJW%2BF9EHQt6RdREAiAw0uHg293dricqB5ljDZxiQj%2FA5ajZvAahP%2FgynqTqCCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM47LJsOD0tIGUIGn%2BKtwDN7QzZEmS54viZsF2R5jz%2BNYVItw5hFXmcWTAawInUJxELsGQ3cFJDg5fODAMlt1wf%2F%2FqGHer8ALYVUJPePuaMGuP210TWcxD0obiWfO%2FeEdeo1zYivXFegE0rpEe4KaiOSZjyvFcvvc27z1EOT7lBSxQ8Kat5R3JsgawOSlIzdySB6rWASKH0Lsgfy3cUwX1lbxQ68V%2BHy5a5PuoIHBRJefvLv%2BXIdjFPtN%2F3rT8YG%2B4%2BQbMjyFSzLhn30cvqpTDPzTO66CCzdK8UpnsBAVBvbEZ2NXZsqfflCmkYSQqqJYsnvT3BUlaMd%2BSHZUfH6tE8aRl5bq08jyP3oi%2F3b1Ne04IeQc%2Bi27tc3XpTwANuGAWwaz%2Fj9V7yjN3T751wb8ecNNCk9bY%2FGeobixjsowiccmFcL%2Fqrkrzp1s0apaIG0dai6hORIgW32V5cLY7XnBUv91fWIQXg6G2%2B%2B2UgxQsdwaXia3A53yZrhiNJ%2FzIt%2BLhJRiCkPWjVyFOBPY%2BapfggawGnmv%2BhrEH6ejd1pZ6kSHBTby18hKDMhfGSOoNCBXjQwDvntue8XkwvagxzThmqg7JYBFQbgiBIbaHnZk%2F06G3Dj%2FKp9Pckz%2F0HUkt8nlQlxG%2BNJzTquAV0uQwnZfgwwY6pgHuf81orwhPwFExysw8lA5DS%2FiLxSwgtpYavBkpH6eBYCUDeMGKwhhT2SFVBEs52R%2BDV3GbJquxJJmKFGxhwklCMOWQZGcvqq8vpQ0jZqtT%2FMECyJ9Oxeu6tpfFHO3gJxJE8bgILJO6bopIueY3Wgs%2Fkk1ipw%2FYxV5fGcuEUuUYemLWP%2BwgBxXg1e1N0u9N1GX%2FOPwCow81uT9F9LrKFUqhXGGpWOWj&X-Amz-Signature=bfd41d71141be94e109d9aae9c39c0c20b9504b85d49f40f957cbfb9a3d080b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPANT7QV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC5l1JZydSWx25wPvjtVol5BPbeL%2BtJW%2BF9EHQt6RdREAiAw0uHg293dricqB5ljDZxiQj%2FA5ajZvAahP%2FgynqTqCCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM47LJsOD0tIGUIGn%2BKtwDN7QzZEmS54viZsF2R5jz%2BNYVItw5hFXmcWTAawInUJxELsGQ3cFJDg5fODAMlt1wf%2F%2FqGHer8ALYVUJPePuaMGuP210TWcxD0obiWfO%2FeEdeo1zYivXFegE0rpEe4KaiOSZjyvFcvvc27z1EOT7lBSxQ8Kat5R3JsgawOSlIzdySB6rWASKH0Lsgfy3cUwX1lbxQ68V%2BHy5a5PuoIHBRJefvLv%2BXIdjFPtN%2F3rT8YG%2B4%2BQbMjyFSzLhn30cvqpTDPzTO66CCzdK8UpnsBAVBvbEZ2NXZsqfflCmkYSQqqJYsnvT3BUlaMd%2BSHZUfH6tE8aRl5bq08jyP3oi%2F3b1Ne04IeQc%2Bi27tc3XpTwANuGAWwaz%2Fj9V7yjN3T751wb8ecNNCk9bY%2FGeobixjsowiccmFcL%2Fqrkrzp1s0apaIG0dai6hORIgW32V5cLY7XnBUv91fWIQXg6G2%2B%2B2UgxQsdwaXia3A53yZrhiNJ%2FzIt%2BLhJRiCkPWjVyFOBPY%2BapfggawGnmv%2BhrEH6ejd1pZ6kSHBTby18hKDMhfGSOoNCBXjQwDvntue8XkwvagxzThmqg7JYBFQbgiBIbaHnZk%2F06G3Dj%2FKp9Pckz%2F0HUkt8nlQlxG%2BNJzTquAV0uQwnZfgwwY6pgHuf81orwhPwFExysw8lA5DS%2FiLxSwgtpYavBkpH6eBYCUDeMGKwhhT2SFVBEs52R%2BDV3GbJquxJJmKFGxhwklCMOWQZGcvqq8vpQ0jZqtT%2FMECyJ9Oxeu6tpfFHO3gJxJE8bgILJO6bopIueY3Wgs%2Fkk1ipw%2FYxV5fGcuEUuUYemLWP%2BwgBxXg1e1N0u9N1GX%2FOPwCow81uT9F9LrKFUqhXGGpWOWj&X-Amz-Signature=34d4b471d030b0b83e22cabb3d1e02dd36d80e37935107b6ee7dcfeb173d580b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPANT7QV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC5l1JZydSWx25wPvjtVol5BPbeL%2BtJW%2BF9EHQt6RdREAiAw0uHg293dricqB5ljDZxiQj%2FA5ajZvAahP%2FgynqTqCCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM47LJsOD0tIGUIGn%2BKtwDN7QzZEmS54viZsF2R5jz%2BNYVItw5hFXmcWTAawInUJxELsGQ3cFJDg5fODAMlt1wf%2F%2FqGHer8ALYVUJPePuaMGuP210TWcxD0obiWfO%2FeEdeo1zYivXFegE0rpEe4KaiOSZjyvFcvvc27z1EOT7lBSxQ8Kat5R3JsgawOSlIzdySB6rWASKH0Lsgfy3cUwX1lbxQ68V%2BHy5a5PuoIHBRJefvLv%2BXIdjFPtN%2F3rT8YG%2B4%2BQbMjyFSzLhn30cvqpTDPzTO66CCzdK8UpnsBAVBvbEZ2NXZsqfflCmkYSQqqJYsnvT3BUlaMd%2BSHZUfH6tE8aRl5bq08jyP3oi%2F3b1Ne04IeQc%2Bi27tc3XpTwANuGAWwaz%2Fj9V7yjN3T751wb8ecNNCk9bY%2FGeobixjsowiccmFcL%2Fqrkrzp1s0apaIG0dai6hORIgW32V5cLY7XnBUv91fWIQXg6G2%2B%2B2UgxQsdwaXia3A53yZrhiNJ%2FzIt%2BLhJRiCkPWjVyFOBPY%2BapfggawGnmv%2BhrEH6ejd1pZ6kSHBTby18hKDMhfGSOoNCBXjQwDvntue8XkwvagxzThmqg7JYBFQbgiBIbaHnZk%2F06G3Dj%2FKp9Pckz%2F0HUkt8nlQlxG%2BNJzTquAV0uQwnZfgwwY6pgHuf81orwhPwFExysw8lA5DS%2FiLxSwgtpYavBkpH6eBYCUDeMGKwhhT2SFVBEs52R%2BDV3GbJquxJJmKFGxhwklCMOWQZGcvqq8vpQ0jZqtT%2FMECyJ9Oxeu6tpfFHO3gJxJE8bgILJO6bopIueY3Wgs%2Fkk1ipw%2FYxV5fGcuEUuUYemLWP%2BwgBxXg1e1N0u9N1GX%2FOPwCow81uT9F9LrKFUqhXGGpWOWj&X-Amz-Signature=72a85a04d13fd07fb272682c80a0ee594bd96cf27a072001e98af9c078551f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPANT7QV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC5l1JZydSWx25wPvjtVol5BPbeL%2BtJW%2BF9EHQt6RdREAiAw0uHg293dricqB5ljDZxiQj%2FA5ajZvAahP%2FgynqTqCCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM47LJsOD0tIGUIGn%2BKtwDN7QzZEmS54viZsF2R5jz%2BNYVItw5hFXmcWTAawInUJxELsGQ3cFJDg5fODAMlt1wf%2F%2FqGHer8ALYVUJPePuaMGuP210TWcxD0obiWfO%2FeEdeo1zYivXFegE0rpEe4KaiOSZjyvFcvvc27z1EOT7lBSxQ8Kat5R3JsgawOSlIzdySB6rWASKH0Lsgfy3cUwX1lbxQ68V%2BHy5a5PuoIHBRJefvLv%2BXIdjFPtN%2F3rT8YG%2B4%2BQbMjyFSzLhn30cvqpTDPzTO66CCzdK8UpnsBAVBvbEZ2NXZsqfflCmkYSQqqJYsnvT3BUlaMd%2BSHZUfH6tE8aRl5bq08jyP3oi%2F3b1Ne04IeQc%2Bi27tc3XpTwANuGAWwaz%2Fj9V7yjN3T751wb8ecNNCk9bY%2FGeobixjsowiccmFcL%2Fqrkrzp1s0apaIG0dai6hORIgW32V5cLY7XnBUv91fWIQXg6G2%2B%2B2UgxQsdwaXia3A53yZrhiNJ%2FzIt%2BLhJRiCkPWjVyFOBPY%2BapfggawGnmv%2BhrEH6ejd1pZ6kSHBTby18hKDMhfGSOoNCBXjQwDvntue8XkwvagxzThmqg7JYBFQbgiBIbaHnZk%2F06G3Dj%2FKp9Pckz%2F0HUkt8nlQlxG%2BNJzTquAV0uQwnZfgwwY6pgHuf81orwhPwFExysw8lA5DS%2FiLxSwgtpYavBkpH6eBYCUDeMGKwhhT2SFVBEs52R%2BDV3GbJquxJJmKFGxhwklCMOWQZGcvqq8vpQ0jZqtT%2FMECyJ9Oxeu6tpfFHO3gJxJE8bgILJO6bopIueY3Wgs%2Fkk1ipw%2FYxV5fGcuEUuUYemLWP%2BwgBxXg1e1N0u9N1GX%2FOPwCow81uT9F9LrKFUqhXGGpWOWj&X-Amz-Signature=16f01048a4b249c7d2a9eacf5005f5e02969108e8c7e16d3dac176044b422273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPANT7QV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC5l1JZydSWx25wPvjtVol5BPbeL%2BtJW%2BF9EHQt6RdREAiAw0uHg293dricqB5ljDZxiQj%2FA5ajZvAahP%2FgynqTqCCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM47LJsOD0tIGUIGn%2BKtwDN7QzZEmS54viZsF2R5jz%2BNYVItw5hFXmcWTAawInUJxELsGQ3cFJDg5fODAMlt1wf%2F%2FqGHer8ALYVUJPePuaMGuP210TWcxD0obiWfO%2FeEdeo1zYivXFegE0rpEe4KaiOSZjyvFcvvc27z1EOT7lBSxQ8Kat5R3JsgawOSlIzdySB6rWASKH0Lsgfy3cUwX1lbxQ68V%2BHy5a5PuoIHBRJefvLv%2BXIdjFPtN%2F3rT8YG%2B4%2BQbMjyFSzLhn30cvqpTDPzTO66CCzdK8UpnsBAVBvbEZ2NXZsqfflCmkYSQqqJYsnvT3BUlaMd%2BSHZUfH6tE8aRl5bq08jyP3oi%2F3b1Ne04IeQc%2Bi27tc3XpTwANuGAWwaz%2Fj9V7yjN3T751wb8ecNNCk9bY%2FGeobixjsowiccmFcL%2Fqrkrzp1s0apaIG0dai6hORIgW32V5cLY7XnBUv91fWIQXg6G2%2B%2B2UgxQsdwaXia3A53yZrhiNJ%2FzIt%2BLhJRiCkPWjVyFOBPY%2BapfggawGnmv%2BhrEH6ejd1pZ6kSHBTby18hKDMhfGSOoNCBXjQwDvntue8XkwvagxzThmqg7JYBFQbgiBIbaHnZk%2F06G3Dj%2FKp9Pckz%2F0HUkt8nlQlxG%2BNJzTquAV0uQwnZfgwwY6pgHuf81orwhPwFExysw8lA5DS%2FiLxSwgtpYavBkpH6eBYCUDeMGKwhhT2SFVBEs52R%2BDV3GbJquxJJmKFGxhwklCMOWQZGcvqq8vpQ0jZqtT%2FMECyJ9Oxeu6tpfFHO3gJxJE8bgILJO6bopIueY3Wgs%2Fkk1ipw%2FYxV5fGcuEUuUYemLWP%2BwgBxXg1e1N0u9N1GX%2FOPwCow81uT9F9LrKFUqhXGGpWOWj&X-Amz-Signature=832b156870874c96c5a62454687ce5d21939ec26e63170ee397f28f52fdbcd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPANT7QV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC5l1JZydSWx25wPvjtVol5BPbeL%2BtJW%2BF9EHQt6RdREAiAw0uHg293dricqB5ljDZxiQj%2FA5ajZvAahP%2FgynqTqCCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM47LJsOD0tIGUIGn%2BKtwDN7QzZEmS54viZsF2R5jz%2BNYVItw5hFXmcWTAawInUJxELsGQ3cFJDg5fODAMlt1wf%2F%2FqGHer8ALYVUJPePuaMGuP210TWcxD0obiWfO%2FeEdeo1zYivXFegE0rpEe4KaiOSZjyvFcvvc27z1EOT7lBSxQ8Kat5R3JsgawOSlIzdySB6rWASKH0Lsgfy3cUwX1lbxQ68V%2BHy5a5PuoIHBRJefvLv%2BXIdjFPtN%2F3rT8YG%2B4%2BQbMjyFSzLhn30cvqpTDPzTO66CCzdK8UpnsBAVBvbEZ2NXZsqfflCmkYSQqqJYsnvT3BUlaMd%2BSHZUfH6tE8aRl5bq08jyP3oi%2F3b1Ne04IeQc%2Bi27tc3XpTwANuGAWwaz%2Fj9V7yjN3T751wb8ecNNCk9bY%2FGeobixjsowiccmFcL%2Fqrkrzp1s0apaIG0dai6hORIgW32V5cLY7XnBUv91fWIQXg6G2%2B%2B2UgxQsdwaXia3A53yZrhiNJ%2FzIt%2BLhJRiCkPWjVyFOBPY%2BapfggawGnmv%2BhrEH6ejd1pZ6kSHBTby18hKDMhfGSOoNCBXjQwDvntue8XkwvagxzThmqg7JYBFQbgiBIbaHnZk%2F06G3Dj%2FKp9Pckz%2F0HUkt8nlQlxG%2BNJzTquAV0uQwnZfgwwY6pgHuf81orwhPwFExysw8lA5DS%2FiLxSwgtpYavBkpH6eBYCUDeMGKwhhT2SFVBEs52R%2BDV3GbJquxJJmKFGxhwklCMOWQZGcvqq8vpQ0jZqtT%2FMECyJ9Oxeu6tpfFHO3gJxJE8bgILJO6bopIueY3Wgs%2Fkk1ipw%2FYxV5fGcuEUuUYemLWP%2BwgBxXg1e1N0u9N1GX%2FOPwCow81uT9F9LrKFUqhXGGpWOWj&X-Amz-Signature=18824c20674bbd24d984a5b446a85864609dd02d54c69cce63ad18f0eee5594f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
