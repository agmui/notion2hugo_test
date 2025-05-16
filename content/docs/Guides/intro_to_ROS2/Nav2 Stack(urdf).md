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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH4VW5W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnFNkYffMxGGheseyUp2Hutp%2BnvMxMllmIBKA4f4Jg6AiAG2BcGq9VKeEs948TZosuFv6dXjjVFNFSF9%2B%2BFHtRohir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2L26ahrlET9mU7%2B7KtwDT5BvBndeVNYKBFznxFNzVF%2FzUyvmKyo7pxg1IMhh8b9xrFxRWHc7Z0svbXWCRb8h0dIJ3si0pdZ8Lj50fV%2B%2FU4SaivYMLbwUqOm2C%2BiPmKbmqMeHAcqkeaGozm8WbaE0c4%2FTFeBoqiXBq9DSaa6iIY4ewUtvHFTJCJfXuiQ5NJci6l5ODLm5aDRMdjPiTcXXCDNbOI9Xb3CX3xoJOeikuj2pxi2B7aOHqJUujgglVs8pvgEY3H5BKMPoBssMm%2B8lmeKk87Yyx8dqsrTQCIDNcND0lR01JF5bILEIxckO8zrTtqsDQQQe0%2F6eV8nWhvKLaiOAzbzW0yLAWN9ms6WinpemugrguXzsy1Iewtm2peousxLia1uUAjO39U1315dtxaS0nujCorypFLTgojJotmLtkoJVSERZeHolntoN%2BFnU7dcY6hhuWMQmSCnUscQkinllUuJg%2FQ2jInx1FMrpMUlnrVvCf8HspQgrJsNzgOOFEWj7FDaRrPho%2FN0HDZ8ScQQZxg4qRc8eCLHooFpRyQWo%2BxFFZCLZeXdP38SnFj8LJ8GYOWTjLq7EHtY%2BiRqcKY4T8yIGXK1lbkQ344vTpBdgYB8mrTC9tWtHBb3KRwK34K04zyAY3QLSFagwxu%2BawQY6pgH4WcnN3N1FlqOefZhlW4IEARDj21YfNqCAGEvewNxjKnUJcoMkqyYVkjo7u4qZiDEuNVU2bJlqAwomKibTn4xF%2BJJ7pMKo2eYTPAdqq2DtTtpik9RoUpO0DcvK64B5BErEanLrxvtuSwOmWcC%2Fnldm5ZBlXkGlQiLtQOBPSdmNPdUY0A3WTv4%2B%2FNuhmRVN%2B8hHeVXbBDc0goES0o%2B3socjeLZphWn3&X-Amz-Signature=60be91864f7b195bb40f0d821e2d6070baf0a13e571e2b85d2ce89e57f50d188&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH4VW5W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnFNkYffMxGGheseyUp2Hutp%2BnvMxMllmIBKA4f4Jg6AiAG2BcGq9VKeEs948TZosuFv6dXjjVFNFSF9%2B%2BFHtRohir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2L26ahrlET9mU7%2B7KtwDT5BvBndeVNYKBFznxFNzVF%2FzUyvmKyo7pxg1IMhh8b9xrFxRWHc7Z0svbXWCRb8h0dIJ3si0pdZ8Lj50fV%2B%2FU4SaivYMLbwUqOm2C%2BiPmKbmqMeHAcqkeaGozm8WbaE0c4%2FTFeBoqiXBq9DSaa6iIY4ewUtvHFTJCJfXuiQ5NJci6l5ODLm5aDRMdjPiTcXXCDNbOI9Xb3CX3xoJOeikuj2pxi2B7aOHqJUujgglVs8pvgEY3H5BKMPoBssMm%2B8lmeKk87Yyx8dqsrTQCIDNcND0lR01JF5bILEIxckO8zrTtqsDQQQe0%2F6eV8nWhvKLaiOAzbzW0yLAWN9ms6WinpemugrguXzsy1Iewtm2peousxLia1uUAjO39U1315dtxaS0nujCorypFLTgojJotmLtkoJVSERZeHolntoN%2BFnU7dcY6hhuWMQmSCnUscQkinllUuJg%2FQ2jInx1FMrpMUlnrVvCf8HspQgrJsNzgOOFEWj7FDaRrPho%2FN0HDZ8ScQQZxg4qRc8eCLHooFpRyQWo%2BxFFZCLZeXdP38SnFj8LJ8GYOWTjLq7EHtY%2BiRqcKY4T8yIGXK1lbkQ344vTpBdgYB8mrTC9tWtHBb3KRwK34K04zyAY3QLSFagwxu%2BawQY6pgH4WcnN3N1FlqOefZhlW4IEARDj21YfNqCAGEvewNxjKnUJcoMkqyYVkjo7u4qZiDEuNVU2bJlqAwomKibTn4xF%2BJJ7pMKo2eYTPAdqq2DtTtpik9RoUpO0DcvK64B5BErEanLrxvtuSwOmWcC%2Fnldm5ZBlXkGlQiLtQOBPSdmNPdUY0A3WTv4%2B%2FNuhmRVN%2B8hHeVXbBDc0goES0o%2B3socjeLZphWn3&X-Amz-Signature=0e2c470f7e90f4587111804c721e46abc6a6a1f6d750616bc1aa4ce27fabaa83&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH4VW5W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnFNkYffMxGGheseyUp2Hutp%2BnvMxMllmIBKA4f4Jg6AiAG2BcGq9VKeEs948TZosuFv6dXjjVFNFSF9%2B%2BFHtRohir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2L26ahrlET9mU7%2B7KtwDT5BvBndeVNYKBFznxFNzVF%2FzUyvmKyo7pxg1IMhh8b9xrFxRWHc7Z0svbXWCRb8h0dIJ3si0pdZ8Lj50fV%2B%2FU4SaivYMLbwUqOm2C%2BiPmKbmqMeHAcqkeaGozm8WbaE0c4%2FTFeBoqiXBq9DSaa6iIY4ewUtvHFTJCJfXuiQ5NJci6l5ODLm5aDRMdjPiTcXXCDNbOI9Xb3CX3xoJOeikuj2pxi2B7aOHqJUujgglVs8pvgEY3H5BKMPoBssMm%2B8lmeKk87Yyx8dqsrTQCIDNcND0lR01JF5bILEIxckO8zrTtqsDQQQe0%2F6eV8nWhvKLaiOAzbzW0yLAWN9ms6WinpemugrguXzsy1Iewtm2peousxLia1uUAjO39U1315dtxaS0nujCorypFLTgojJotmLtkoJVSERZeHolntoN%2BFnU7dcY6hhuWMQmSCnUscQkinllUuJg%2FQ2jInx1FMrpMUlnrVvCf8HspQgrJsNzgOOFEWj7FDaRrPho%2FN0HDZ8ScQQZxg4qRc8eCLHooFpRyQWo%2BxFFZCLZeXdP38SnFj8LJ8GYOWTjLq7EHtY%2BiRqcKY4T8yIGXK1lbkQ344vTpBdgYB8mrTC9tWtHBb3KRwK34K04zyAY3QLSFagwxu%2BawQY6pgH4WcnN3N1FlqOefZhlW4IEARDj21YfNqCAGEvewNxjKnUJcoMkqyYVkjo7u4qZiDEuNVU2bJlqAwomKibTn4xF%2BJJ7pMKo2eYTPAdqq2DtTtpik9RoUpO0DcvK64B5BErEanLrxvtuSwOmWcC%2Fnldm5ZBlXkGlQiLtQOBPSdmNPdUY0A3WTv4%2B%2FNuhmRVN%2B8hHeVXbBDc0goES0o%2B3socjeLZphWn3&X-Amz-Signature=1758ca5707678e8a51ce33211c15e39866ba81b5525cc890ed4d081d4974a300&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH4VW5W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnFNkYffMxGGheseyUp2Hutp%2BnvMxMllmIBKA4f4Jg6AiAG2BcGq9VKeEs948TZosuFv6dXjjVFNFSF9%2B%2BFHtRohir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2L26ahrlET9mU7%2B7KtwDT5BvBndeVNYKBFznxFNzVF%2FzUyvmKyo7pxg1IMhh8b9xrFxRWHc7Z0svbXWCRb8h0dIJ3si0pdZ8Lj50fV%2B%2FU4SaivYMLbwUqOm2C%2BiPmKbmqMeHAcqkeaGozm8WbaE0c4%2FTFeBoqiXBq9DSaa6iIY4ewUtvHFTJCJfXuiQ5NJci6l5ODLm5aDRMdjPiTcXXCDNbOI9Xb3CX3xoJOeikuj2pxi2B7aOHqJUujgglVs8pvgEY3H5BKMPoBssMm%2B8lmeKk87Yyx8dqsrTQCIDNcND0lR01JF5bILEIxckO8zrTtqsDQQQe0%2F6eV8nWhvKLaiOAzbzW0yLAWN9ms6WinpemugrguXzsy1Iewtm2peousxLia1uUAjO39U1315dtxaS0nujCorypFLTgojJotmLtkoJVSERZeHolntoN%2BFnU7dcY6hhuWMQmSCnUscQkinllUuJg%2FQ2jInx1FMrpMUlnrVvCf8HspQgrJsNzgOOFEWj7FDaRrPho%2FN0HDZ8ScQQZxg4qRc8eCLHooFpRyQWo%2BxFFZCLZeXdP38SnFj8LJ8GYOWTjLq7EHtY%2BiRqcKY4T8yIGXK1lbkQ344vTpBdgYB8mrTC9tWtHBb3KRwK34K04zyAY3QLSFagwxu%2BawQY6pgH4WcnN3N1FlqOefZhlW4IEARDj21YfNqCAGEvewNxjKnUJcoMkqyYVkjo7u4qZiDEuNVU2bJlqAwomKibTn4xF%2BJJ7pMKo2eYTPAdqq2DtTtpik9RoUpO0DcvK64B5BErEanLrxvtuSwOmWcC%2Fnldm5ZBlXkGlQiLtQOBPSdmNPdUY0A3WTv4%2B%2FNuhmRVN%2B8hHeVXbBDc0goES0o%2B3socjeLZphWn3&X-Amz-Signature=32974323eede806fcd0f53bfd0f8a5eceed81da98eca2c0f86308717bcbb88bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH4VW5W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnFNkYffMxGGheseyUp2Hutp%2BnvMxMllmIBKA4f4Jg6AiAG2BcGq9VKeEs948TZosuFv6dXjjVFNFSF9%2B%2BFHtRohir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2L26ahrlET9mU7%2B7KtwDT5BvBndeVNYKBFznxFNzVF%2FzUyvmKyo7pxg1IMhh8b9xrFxRWHc7Z0svbXWCRb8h0dIJ3si0pdZ8Lj50fV%2B%2FU4SaivYMLbwUqOm2C%2BiPmKbmqMeHAcqkeaGozm8WbaE0c4%2FTFeBoqiXBq9DSaa6iIY4ewUtvHFTJCJfXuiQ5NJci6l5ODLm5aDRMdjPiTcXXCDNbOI9Xb3CX3xoJOeikuj2pxi2B7aOHqJUujgglVs8pvgEY3H5BKMPoBssMm%2B8lmeKk87Yyx8dqsrTQCIDNcND0lR01JF5bILEIxckO8zrTtqsDQQQe0%2F6eV8nWhvKLaiOAzbzW0yLAWN9ms6WinpemugrguXzsy1Iewtm2peousxLia1uUAjO39U1315dtxaS0nujCorypFLTgojJotmLtkoJVSERZeHolntoN%2BFnU7dcY6hhuWMQmSCnUscQkinllUuJg%2FQ2jInx1FMrpMUlnrVvCf8HspQgrJsNzgOOFEWj7FDaRrPho%2FN0HDZ8ScQQZxg4qRc8eCLHooFpRyQWo%2BxFFZCLZeXdP38SnFj8LJ8GYOWTjLq7EHtY%2BiRqcKY4T8yIGXK1lbkQ344vTpBdgYB8mrTC9tWtHBb3KRwK34K04zyAY3QLSFagwxu%2BawQY6pgH4WcnN3N1FlqOefZhlW4IEARDj21YfNqCAGEvewNxjKnUJcoMkqyYVkjo7u4qZiDEuNVU2bJlqAwomKibTn4xF%2BJJ7pMKo2eYTPAdqq2DtTtpik9RoUpO0DcvK64B5BErEanLrxvtuSwOmWcC%2Fnldm5ZBlXkGlQiLtQOBPSdmNPdUY0A3WTv4%2B%2FNuhmRVN%2B8hHeVXbBDc0goES0o%2B3socjeLZphWn3&X-Amz-Signature=a731375993abc60d66b5d98d0e04c71e47f5dfe42cda77aa7daade795bd0c67d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSH4VW5W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnFNkYffMxGGheseyUp2Hutp%2BnvMxMllmIBKA4f4Jg6AiAG2BcGq9VKeEs948TZosuFv6dXjjVFNFSF9%2B%2BFHtRohir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM2L26ahrlET9mU7%2B7KtwDT5BvBndeVNYKBFznxFNzVF%2FzUyvmKyo7pxg1IMhh8b9xrFxRWHc7Z0svbXWCRb8h0dIJ3si0pdZ8Lj50fV%2B%2FU4SaivYMLbwUqOm2C%2BiPmKbmqMeHAcqkeaGozm8WbaE0c4%2FTFeBoqiXBq9DSaa6iIY4ewUtvHFTJCJfXuiQ5NJci6l5ODLm5aDRMdjPiTcXXCDNbOI9Xb3CX3xoJOeikuj2pxi2B7aOHqJUujgglVs8pvgEY3H5BKMPoBssMm%2B8lmeKk87Yyx8dqsrTQCIDNcND0lR01JF5bILEIxckO8zrTtqsDQQQe0%2F6eV8nWhvKLaiOAzbzW0yLAWN9ms6WinpemugrguXzsy1Iewtm2peousxLia1uUAjO39U1315dtxaS0nujCorypFLTgojJotmLtkoJVSERZeHolntoN%2BFnU7dcY6hhuWMQmSCnUscQkinllUuJg%2FQ2jInx1FMrpMUlnrVvCf8HspQgrJsNzgOOFEWj7FDaRrPho%2FN0HDZ8ScQQZxg4qRc8eCLHooFpRyQWo%2BxFFZCLZeXdP38SnFj8LJ8GYOWTjLq7EHtY%2BiRqcKY4T8yIGXK1lbkQ344vTpBdgYB8mrTC9tWtHBb3KRwK34K04zyAY3QLSFagwxu%2BawQY6pgH4WcnN3N1FlqOefZhlW4IEARDj21YfNqCAGEvewNxjKnUJcoMkqyYVkjo7u4qZiDEuNVU2bJlqAwomKibTn4xF%2BJJ7pMKo2eYTPAdqq2DtTtpik9RoUpO0DcvK64B5BErEanLrxvtuSwOmWcC%2Fnldm5ZBlXkGlQiLtQOBPSdmNPdUY0A3WTv4%2B%2FNuhmRVN%2B8hHeVXbBDc0goES0o%2B3socjeLZphWn3&X-Amz-Signature=6f277af37801f91662f8830836788f27874642a862956cd4c30b056bec162814&X-Amz-SignedHeaders=host&x-id=GetObject)
