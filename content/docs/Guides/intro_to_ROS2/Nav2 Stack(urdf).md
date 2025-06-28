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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VSH74H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmPcC9juqhH0Y46yH4rOBywoQiLpI9KwWtdGZ6G7v9TAiA7gJ0FuFOmWecE7ROAdYLvnVYVLFpLGHR7w5MYk9N2dCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAaEanekyZveuGraKtwDJmlI73qGUztp4UW%2FiOo76cFeKW4OsgG%2BO6xRiQFqPgE7pH%2FdJkrtcd%2BKI7yzQ4iABc1ImaaCSUt5lgndvDtm%2Fmem8%2FN7LAtZ5OwWejqkiEExc7MRhbgwUhriSQIpRmdniAyLHl8Ty2pVUkyxlH7cm%2FPbQX39sYAI3%2BWv4UQ0N5gtxOinQQQYCN3Z9VTj8%2BxuPk81kQgQo8Ztjq6rBoHjyGVw225rV1YtePoGG5hq9v4p62FCSLo9iUU%2F5Ol2aYwtctfFmLglDdexzgNz%2BXzev66ojflzBpZQsNRjpirgTQS77Ow%2FNGKBvvBpT%2FZidBwuy5eIu6VZkAcLJTuEU3URRhoZSyh64TTlhdWKMoTaZQz6G%2FuWR7RB4K%2BDDp08wJ8IhVtf9aD8YenT4jQ6Y%2BbZCGXlicKb5Oqzl6AFcCs%2F0njsg%2BmQ6uK5U15m9MiBjMF40Q3Ahyak8TUPxKrGnmYvOD%2FZYhjcZDLm5OH10xOg0yOnUcy%2B4Ff7hGuuZ2vwhurAvr1ADUCKGupyDbhVZdFAfl67GdS4b6FfDV2aZaKkIQjyv1rTdwT5XmuCZnI1Eg6fUdKvMQsdHJ3e9UCYfRcLQe8lxMlD11j6lBsSPC8EH6243%2FAkX8U8mv%2BI9PEw%2B8yAwwY6pgEtMg%2B2aJDLodV9DP5wJZ9YVx%2BRpFmFwtc%2BHhA9y1PIBrHYg8NgCFvv8Mcxkmoj0bh0e95Rd2rP1tOMkEWPYhx26b0LdfNJRjiS256y%2Fjz8OuD6zXuiwLNa65TchlyVRBfcrumwUcPw6fD2gcdmoTUXcqy3PyIsM2e6%2FXe3Fj9M6sI%2F917ZptSsOHiepOZ%2FHFd6K3Q8fbKONfaDkWexrMp1Bgt66tzw&X-Amz-Signature=b0e50048379ed55d8a5652e7de8b2f4519af452a2e8d870d6e57ed2e96e6da7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VSH74H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmPcC9juqhH0Y46yH4rOBywoQiLpI9KwWtdGZ6G7v9TAiA7gJ0FuFOmWecE7ROAdYLvnVYVLFpLGHR7w5MYk9N2dCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAaEanekyZveuGraKtwDJmlI73qGUztp4UW%2FiOo76cFeKW4OsgG%2BO6xRiQFqPgE7pH%2FdJkrtcd%2BKI7yzQ4iABc1ImaaCSUt5lgndvDtm%2Fmem8%2FN7LAtZ5OwWejqkiEExc7MRhbgwUhriSQIpRmdniAyLHl8Ty2pVUkyxlH7cm%2FPbQX39sYAI3%2BWv4UQ0N5gtxOinQQQYCN3Z9VTj8%2BxuPk81kQgQo8Ztjq6rBoHjyGVw225rV1YtePoGG5hq9v4p62FCSLo9iUU%2F5Ol2aYwtctfFmLglDdexzgNz%2BXzev66ojflzBpZQsNRjpirgTQS77Ow%2FNGKBvvBpT%2FZidBwuy5eIu6VZkAcLJTuEU3URRhoZSyh64TTlhdWKMoTaZQz6G%2FuWR7RB4K%2BDDp08wJ8IhVtf9aD8YenT4jQ6Y%2BbZCGXlicKb5Oqzl6AFcCs%2F0njsg%2BmQ6uK5U15m9MiBjMF40Q3Ahyak8TUPxKrGnmYvOD%2FZYhjcZDLm5OH10xOg0yOnUcy%2B4Ff7hGuuZ2vwhurAvr1ADUCKGupyDbhVZdFAfl67GdS4b6FfDV2aZaKkIQjyv1rTdwT5XmuCZnI1Eg6fUdKvMQsdHJ3e9UCYfRcLQe8lxMlD11j6lBsSPC8EH6243%2FAkX8U8mv%2BI9PEw%2B8yAwwY6pgEtMg%2B2aJDLodV9DP5wJZ9YVx%2BRpFmFwtc%2BHhA9y1PIBrHYg8NgCFvv8Mcxkmoj0bh0e95Rd2rP1tOMkEWPYhx26b0LdfNJRjiS256y%2Fjz8OuD6zXuiwLNa65TchlyVRBfcrumwUcPw6fD2gcdmoTUXcqy3PyIsM2e6%2FXe3Fj9M6sI%2F917ZptSsOHiepOZ%2FHFd6K3Q8fbKONfaDkWexrMp1Bgt66tzw&X-Amz-Signature=97ed8f80110ca70927c6e8323b511edd84c377d5b3bf09bb196b7ed54328168f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VSH74H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmPcC9juqhH0Y46yH4rOBywoQiLpI9KwWtdGZ6G7v9TAiA7gJ0FuFOmWecE7ROAdYLvnVYVLFpLGHR7w5MYk9N2dCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAaEanekyZveuGraKtwDJmlI73qGUztp4UW%2FiOo76cFeKW4OsgG%2BO6xRiQFqPgE7pH%2FdJkrtcd%2BKI7yzQ4iABc1ImaaCSUt5lgndvDtm%2Fmem8%2FN7LAtZ5OwWejqkiEExc7MRhbgwUhriSQIpRmdniAyLHl8Ty2pVUkyxlH7cm%2FPbQX39sYAI3%2BWv4UQ0N5gtxOinQQQYCN3Z9VTj8%2BxuPk81kQgQo8Ztjq6rBoHjyGVw225rV1YtePoGG5hq9v4p62FCSLo9iUU%2F5Ol2aYwtctfFmLglDdexzgNz%2BXzev66ojflzBpZQsNRjpirgTQS77Ow%2FNGKBvvBpT%2FZidBwuy5eIu6VZkAcLJTuEU3URRhoZSyh64TTlhdWKMoTaZQz6G%2FuWR7RB4K%2BDDp08wJ8IhVtf9aD8YenT4jQ6Y%2BbZCGXlicKb5Oqzl6AFcCs%2F0njsg%2BmQ6uK5U15m9MiBjMF40Q3Ahyak8TUPxKrGnmYvOD%2FZYhjcZDLm5OH10xOg0yOnUcy%2B4Ff7hGuuZ2vwhurAvr1ADUCKGupyDbhVZdFAfl67GdS4b6FfDV2aZaKkIQjyv1rTdwT5XmuCZnI1Eg6fUdKvMQsdHJ3e9UCYfRcLQe8lxMlD11j6lBsSPC8EH6243%2FAkX8U8mv%2BI9PEw%2B8yAwwY6pgEtMg%2B2aJDLodV9DP5wJZ9YVx%2BRpFmFwtc%2BHhA9y1PIBrHYg8NgCFvv8Mcxkmoj0bh0e95Rd2rP1tOMkEWPYhx26b0LdfNJRjiS256y%2Fjz8OuD6zXuiwLNa65TchlyVRBfcrumwUcPw6fD2gcdmoTUXcqy3PyIsM2e6%2FXe3Fj9M6sI%2F917ZptSsOHiepOZ%2FHFd6K3Q8fbKONfaDkWexrMp1Bgt66tzw&X-Amz-Signature=2c287e53cb88cb41dd1e69c5ddd351dbf47c633524e5b92ffffb77250b261400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VSH74H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmPcC9juqhH0Y46yH4rOBywoQiLpI9KwWtdGZ6G7v9TAiA7gJ0FuFOmWecE7ROAdYLvnVYVLFpLGHR7w5MYk9N2dCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAaEanekyZveuGraKtwDJmlI73qGUztp4UW%2FiOo76cFeKW4OsgG%2BO6xRiQFqPgE7pH%2FdJkrtcd%2BKI7yzQ4iABc1ImaaCSUt5lgndvDtm%2Fmem8%2FN7LAtZ5OwWejqkiEExc7MRhbgwUhriSQIpRmdniAyLHl8Ty2pVUkyxlH7cm%2FPbQX39sYAI3%2BWv4UQ0N5gtxOinQQQYCN3Z9VTj8%2BxuPk81kQgQo8Ztjq6rBoHjyGVw225rV1YtePoGG5hq9v4p62FCSLo9iUU%2F5Ol2aYwtctfFmLglDdexzgNz%2BXzev66ojflzBpZQsNRjpirgTQS77Ow%2FNGKBvvBpT%2FZidBwuy5eIu6VZkAcLJTuEU3URRhoZSyh64TTlhdWKMoTaZQz6G%2FuWR7RB4K%2BDDp08wJ8IhVtf9aD8YenT4jQ6Y%2BbZCGXlicKb5Oqzl6AFcCs%2F0njsg%2BmQ6uK5U15m9MiBjMF40Q3Ahyak8TUPxKrGnmYvOD%2FZYhjcZDLm5OH10xOg0yOnUcy%2B4Ff7hGuuZ2vwhurAvr1ADUCKGupyDbhVZdFAfl67GdS4b6FfDV2aZaKkIQjyv1rTdwT5XmuCZnI1Eg6fUdKvMQsdHJ3e9UCYfRcLQe8lxMlD11j6lBsSPC8EH6243%2FAkX8U8mv%2BI9PEw%2B8yAwwY6pgEtMg%2B2aJDLodV9DP5wJZ9YVx%2BRpFmFwtc%2BHhA9y1PIBrHYg8NgCFvv8Mcxkmoj0bh0e95Rd2rP1tOMkEWPYhx26b0LdfNJRjiS256y%2Fjz8OuD6zXuiwLNa65TchlyVRBfcrumwUcPw6fD2gcdmoTUXcqy3PyIsM2e6%2FXe3Fj9M6sI%2F917ZptSsOHiepOZ%2FHFd6K3Q8fbKONfaDkWexrMp1Bgt66tzw&X-Amz-Signature=33fb40d157277d89fe12c3d7de67b35eb5d0f17f899176ec3b6df51d09fed519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VSH74H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmPcC9juqhH0Y46yH4rOBywoQiLpI9KwWtdGZ6G7v9TAiA7gJ0FuFOmWecE7ROAdYLvnVYVLFpLGHR7w5MYk9N2dCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAaEanekyZveuGraKtwDJmlI73qGUztp4UW%2FiOo76cFeKW4OsgG%2BO6xRiQFqPgE7pH%2FdJkrtcd%2BKI7yzQ4iABc1ImaaCSUt5lgndvDtm%2Fmem8%2FN7LAtZ5OwWejqkiEExc7MRhbgwUhriSQIpRmdniAyLHl8Ty2pVUkyxlH7cm%2FPbQX39sYAI3%2BWv4UQ0N5gtxOinQQQYCN3Z9VTj8%2BxuPk81kQgQo8Ztjq6rBoHjyGVw225rV1YtePoGG5hq9v4p62FCSLo9iUU%2F5Ol2aYwtctfFmLglDdexzgNz%2BXzev66ojflzBpZQsNRjpirgTQS77Ow%2FNGKBvvBpT%2FZidBwuy5eIu6VZkAcLJTuEU3URRhoZSyh64TTlhdWKMoTaZQz6G%2FuWR7RB4K%2BDDp08wJ8IhVtf9aD8YenT4jQ6Y%2BbZCGXlicKb5Oqzl6AFcCs%2F0njsg%2BmQ6uK5U15m9MiBjMF40Q3Ahyak8TUPxKrGnmYvOD%2FZYhjcZDLm5OH10xOg0yOnUcy%2B4Ff7hGuuZ2vwhurAvr1ADUCKGupyDbhVZdFAfl67GdS4b6FfDV2aZaKkIQjyv1rTdwT5XmuCZnI1Eg6fUdKvMQsdHJ3e9UCYfRcLQe8lxMlD11j6lBsSPC8EH6243%2FAkX8U8mv%2BI9PEw%2B8yAwwY6pgEtMg%2B2aJDLodV9DP5wJZ9YVx%2BRpFmFwtc%2BHhA9y1PIBrHYg8NgCFvv8Mcxkmoj0bh0e95Rd2rP1tOMkEWPYhx26b0LdfNJRjiS256y%2Fjz8OuD6zXuiwLNa65TchlyVRBfcrumwUcPw6fD2gcdmoTUXcqy3PyIsM2e6%2FXe3Fj9M6sI%2F917ZptSsOHiepOZ%2FHFd6K3Q8fbKONfaDkWexrMp1Bgt66tzw&X-Amz-Signature=fb9e2e8edc6447d74c5114ca3d6118c6f4094a41a8c85c347dcea7dac996e919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VSH74H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmPcC9juqhH0Y46yH4rOBywoQiLpI9KwWtdGZ6G7v9TAiA7gJ0FuFOmWecE7ROAdYLvnVYVLFpLGHR7w5MYk9N2dCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAaEanekyZveuGraKtwDJmlI73qGUztp4UW%2FiOo76cFeKW4OsgG%2BO6xRiQFqPgE7pH%2FdJkrtcd%2BKI7yzQ4iABc1ImaaCSUt5lgndvDtm%2Fmem8%2FN7LAtZ5OwWejqkiEExc7MRhbgwUhriSQIpRmdniAyLHl8Ty2pVUkyxlH7cm%2FPbQX39sYAI3%2BWv4UQ0N5gtxOinQQQYCN3Z9VTj8%2BxuPk81kQgQo8Ztjq6rBoHjyGVw225rV1YtePoGG5hq9v4p62FCSLo9iUU%2F5Ol2aYwtctfFmLglDdexzgNz%2BXzev66ojflzBpZQsNRjpirgTQS77Ow%2FNGKBvvBpT%2FZidBwuy5eIu6VZkAcLJTuEU3URRhoZSyh64TTlhdWKMoTaZQz6G%2FuWR7RB4K%2BDDp08wJ8IhVtf9aD8YenT4jQ6Y%2BbZCGXlicKb5Oqzl6AFcCs%2F0njsg%2BmQ6uK5U15m9MiBjMF40Q3Ahyak8TUPxKrGnmYvOD%2FZYhjcZDLm5OH10xOg0yOnUcy%2B4Ff7hGuuZ2vwhurAvr1ADUCKGupyDbhVZdFAfl67GdS4b6FfDV2aZaKkIQjyv1rTdwT5XmuCZnI1Eg6fUdKvMQsdHJ3e9UCYfRcLQe8lxMlD11j6lBsSPC8EH6243%2FAkX8U8mv%2BI9PEw%2B8yAwwY6pgEtMg%2B2aJDLodV9DP5wJZ9YVx%2BRpFmFwtc%2BHhA9y1PIBrHYg8NgCFvv8Mcxkmoj0bh0e95Rd2rP1tOMkEWPYhx26b0LdfNJRjiS256y%2Fjz8OuD6zXuiwLNa65TchlyVRBfcrumwUcPw6fD2gcdmoTUXcqy3PyIsM2e6%2FXe3Fj9M6sI%2F917ZptSsOHiepOZ%2FHFd6K3Q8fbKONfaDkWexrMp1Bgt66tzw&X-Amz-Signature=aee0f0144698b25e21e5e1036adea043b89fc0240c8a250169bb01317bd66d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
