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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEGCTZJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQcqQJkENtCPvEEwPUjuD1EWiXTkltZhcDQ07LS%2FX2QIhAPTSEDxAAtEjym8xyPuyjuvgetpNDDhWlOpQtu%2BAuucwKv8DCCYQABoMNjM3NDIzMTgzODA1IgwauIV6iASlhzX7aT8q3AP6a8f9dTSHuZOyZvyutyuPYEjPkg%2BmFnvsYsVwGhL3jry%2F9WuEBO7w6zvDYT1IqQ5e4drmXQT6TSIhjLS2oA5RaKAH0iwS%2FPHbglefxmUgyvMU98FUrjbif6l1XHL6bQSAeqWazdTHmwct10SWNExVm%2BtB7bl8KryvzZcIg1gzCjzyCT0FslSJEH2Dmmb3Qeea%2BBtv1uchPkdicXwRA57I67pbob%2BOskkgpLfJOmQjc4%2BOb1cnKkcjrjkWPcttrtKvY0ysljkqtM7tbFIvTmwG%2Fvw6p8PjmVyr9%2FqvCteJ8Gqq9LD0ergAcnTrK2J3mA%2FcJLIQqspOzJKIc0JhXFsr35zRm9wiTR3VmrBtNBOiOddbpg5dD%2FZ8DQSngf2dS%2BEb1CVgYYY4IwkBQWVkZK3gt9VlPC4a32UOQvaq6BW3A20%2BhUi7TnyYEjCw1txmD0oTbXrYlxfYsh11%2Bdck3f7mL5DSg8dMxFdF1ou2YyNxtXxyfv1iowAFuMAFV59BK4PujrGHCWCSJD1hO03GYh5nNRDo0TDYoXCCWul6JvvZ%2B%2B0GsVZP2gBTwy8jUahky2%2Bv1c77HH9oJxLVqMLohQsT4m8IoqieCk99Qaqrts2rAY9cYVyfZoJvatP1RjCY78K%2FBjqkAS4wY%2FS2hXBBjjAkh3CnFuVvnoGJ4E1Q0bzX6CbzgXfu5AsjzLqHAzMmJRAyo4791IsyEmUZaiJ0THenjbjjOpAegvET7zRBjlx%2FihwlegqnPw7gieuiy9zKkuq7MKLtG30JV3zuKhRxKxKCBLJhg9crAmBrKwzS1vOYQKX11MEa3W2dA1KXNEt951Mmzu4GT5UYgo67UYosOlsEZK829YRLZPjF&X-Amz-Signature=0616623f18e75f2cadf0f62c83b52b02ea94067e7a342d254980e3e6b72e6e54&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEGCTZJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQcqQJkENtCPvEEwPUjuD1EWiXTkltZhcDQ07LS%2FX2QIhAPTSEDxAAtEjym8xyPuyjuvgetpNDDhWlOpQtu%2BAuucwKv8DCCYQABoMNjM3NDIzMTgzODA1IgwauIV6iASlhzX7aT8q3AP6a8f9dTSHuZOyZvyutyuPYEjPkg%2BmFnvsYsVwGhL3jry%2F9WuEBO7w6zvDYT1IqQ5e4drmXQT6TSIhjLS2oA5RaKAH0iwS%2FPHbglefxmUgyvMU98FUrjbif6l1XHL6bQSAeqWazdTHmwct10SWNExVm%2BtB7bl8KryvzZcIg1gzCjzyCT0FslSJEH2Dmmb3Qeea%2BBtv1uchPkdicXwRA57I67pbob%2BOskkgpLfJOmQjc4%2BOb1cnKkcjrjkWPcttrtKvY0ysljkqtM7tbFIvTmwG%2Fvw6p8PjmVyr9%2FqvCteJ8Gqq9LD0ergAcnTrK2J3mA%2FcJLIQqspOzJKIc0JhXFsr35zRm9wiTR3VmrBtNBOiOddbpg5dD%2FZ8DQSngf2dS%2BEb1CVgYYY4IwkBQWVkZK3gt9VlPC4a32UOQvaq6BW3A20%2BhUi7TnyYEjCw1txmD0oTbXrYlxfYsh11%2Bdck3f7mL5DSg8dMxFdF1ou2YyNxtXxyfv1iowAFuMAFV59BK4PujrGHCWCSJD1hO03GYh5nNRDo0TDYoXCCWul6JvvZ%2B%2B0GsVZP2gBTwy8jUahky2%2Bv1c77HH9oJxLVqMLohQsT4m8IoqieCk99Qaqrts2rAY9cYVyfZoJvatP1RjCY78K%2FBjqkAS4wY%2FS2hXBBjjAkh3CnFuVvnoGJ4E1Q0bzX6CbzgXfu5AsjzLqHAzMmJRAyo4791IsyEmUZaiJ0THenjbjjOpAegvET7zRBjlx%2FihwlegqnPw7gieuiy9zKkuq7MKLtG30JV3zuKhRxKxKCBLJhg9crAmBrKwzS1vOYQKX11MEa3W2dA1KXNEt951Mmzu4GT5UYgo67UYosOlsEZK829YRLZPjF&X-Amz-Signature=d8c7537eda353468d892b47d99261bc7fe4733c9d5f9611f8594874bc27cdeab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEGCTZJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQcqQJkENtCPvEEwPUjuD1EWiXTkltZhcDQ07LS%2FX2QIhAPTSEDxAAtEjym8xyPuyjuvgetpNDDhWlOpQtu%2BAuucwKv8DCCYQABoMNjM3NDIzMTgzODA1IgwauIV6iASlhzX7aT8q3AP6a8f9dTSHuZOyZvyutyuPYEjPkg%2BmFnvsYsVwGhL3jry%2F9WuEBO7w6zvDYT1IqQ5e4drmXQT6TSIhjLS2oA5RaKAH0iwS%2FPHbglefxmUgyvMU98FUrjbif6l1XHL6bQSAeqWazdTHmwct10SWNExVm%2BtB7bl8KryvzZcIg1gzCjzyCT0FslSJEH2Dmmb3Qeea%2BBtv1uchPkdicXwRA57I67pbob%2BOskkgpLfJOmQjc4%2BOb1cnKkcjrjkWPcttrtKvY0ysljkqtM7tbFIvTmwG%2Fvw6p8PjmVyr9%2FqvCteJ8Gqq9LD0ergAcnTrK2J3mA%2FcJLIQqspOzJKIc0JhXFsr35zRm9wiTR3VmrBtNBOiOddbpg5dD%2FZ8DQSngf2dS%2BEb1CVgYYY4IwkBQWVkZK3gt9VlPC4a32UOQvaq6BW3A20%2BhUi7TnyYEjCw1txmD0oTbXrYlxfYsh11%2Bdck3f7mL5DSg8dMxFdF1ou2YyNxtXxyfv1iowAFuMAFV59BK4PujrGHCWCSJD1hO03GYh5nNRDo0TDYoXCCWul6JvvZ%2B%2B0GsVZP2gBTwy8jUahky2%2Bv1c77HH9oJxLVqMLohQsT4m8IoqieCk99Qaqrts2rAY9cYVyfZoJvatP1RjCY78K%2FBjqkAS4wY%2FS2hXBBjjAkh3CnFuVvnoGJ4E1Q0bzX6CbzgXfu5AsjzLqHAzMmJRAyo4791IsyEmUZaiJ0THenjbjjOpAegvET7zRBjlx%2FihwlegqnPw7gieuiy9zKkuq7MKLtG30JV3zuKhRxKxKCBLJhg9crAmBrKwzS1vOYQKX11MEa3W2dA1KXNEt951Mmzu4GT5UYgo67UYosOlsEZK829YRLZPjF&X-Amz-Signature=4a4b8fb06debfd3af9660219bdbbc49fadf4cd86c9f9335f989ff33cb1a4e5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEGCTZJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQcqQJkENtCPvEEwPUjuD1EWiXTkltZhcDQ07LS%2FX2QIhAPTSEDxAAtEjym8xyPuyjuvgetpNDDhWlOpQtu%2BAuucwKv8DCCYQABoMNjM3NDIzMTgzODA1IgwauIV6iASlhzX7aT8q3AP6a8f9dTSHuZOyZvyutyuPYEjPkg%2BmFnvsYsVwGhL3jry%2F9WuEBO7w6zvDYT1IqQ5e4drmXQT6TSIhjLS2oA5RaKAH0iwS%2FPHbglefxmUgyvMU98FUrjbif6l1XHL6bQSAeqWazdTHmwct10SWNExVm%2BtB7bl8KryvzZcIg1gzCjzyCT0FslSJEH2Dmmb3Qeea%2BBtv1uchPkdicXwRA57I67pbob%2BOskkgpLfJOmQjc4%2BOb1cnKkcjrjkWPcttrtKvY0ysljkqtM7tbFIvTmwG%2Fvw6p8PjmVyr9%2FqvCteJ8Gqq9LD0ergAcnTrK2J3mA%2FcJLIQqspOzJKIc0JhXFsr35zRm9wiTR3VmrBtNBOiOddbpg5dD%2FZ8DQSngf2dS%2BEb1CVgYYY4IwkBQWVkZK3gt9VlPC4a32UOQvaq6BW3A20%2BhUi7TnyYEjCw1txmD0oTbXrYlxfYsh11%2Bdck3f7mL5DSg8dMxFdF1ou2YyNxtXxyfv1iowAFuMAFV59BK4PujrGHCWCSJD1hO03GYh5nNRDo0TDYoXCCWul6JvvZ%2B%2B0GsVZP2gBTwy8jUahky2%2Bv1c77HH9oJxLVqMLohQsT4m8IoqieCk99Qaqrts2rAY9cYVyfZoJvatP1RjCY78K%2FBjqkAS4wY%2FS2hXBBjjAkh3CnFuVvnoGJ4E1Q0bzX6CbzgXfu5AsjzLqHAzMmJRAyo4791IsyEmUZaiJ0THenjbjjOpAegvET7zRBjlx%2FihwlegqnPw7gieuiy9zKkuq7MKLtG30JV3zuKhRxKxKCBLJhg9crAmBrKwzS1vOYQKX11MEa3W2dA1KXNEt951Mmzu4GT5UYgo67UYosOlsEZK829YRLZPjF&X-Amz-Signature=c6a8747764a2a26750ecab984be7bd9c3949ac14577bf9a368c50468022d9b60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEGCTZJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQcqQJkENtCPvEEwPUjuD1EWiXTkltZhcDQ07LS%2FX2QIhAPTSEDxAAtEjym8xyPuyjuvgetpNDDhWlOpQtu%2BAuucwKv8DCCYQABoMNjM3NDIzMTgzODA1IgwauIV6iASlhzX7aT8q3AP6a8f9dTSHuZOyZvyutyuPYEjPkg%2BmFnvsYsVwGhL3jry%2F9WuEBO7w6zvDYT1IqQ5e4drmXQT6TSIhjLS2oA5RaKAH0iwS%2FPHbglefxmUgyvMU98FUrjbif6l1XHL6bQSAeqWazdTHmwct10SWNExVm%2BtB7bl8KryvzZcIg1gzCjzyCT0FslSJEH2Dmmb3Qeea%2BBtv1uchPkdicXwRA57I67pbob%2BOskkgpLfJOmQjc4%2BOb1cnKkcjrjkWPcttrtKvY0ysljkqtM7tbFIvTmwG%2Fvw6p8PjmVyr9%2FqvCteJ8Gqq9LD0ergAcnTrK2J3mA%2FcJLIQqspOzJKIc0JhXFsr35zRm9wiTR3VmrBtNBOiOddbpg5dD%2FZ8DQSngf2dS%2BEb1CVgYYY4IwkBQWVkZK3gt9VlPC4a32UOQvaq6BW3A20%2BhUi7TnyYEjCw1txmD0oTbXrYlxfYsh11%2Bdck3f7mL5DSg8dMxFdF1ou2YyNxtXxyfv1iowAFuMAFV59BK4PujrGHCWCSJD1hO03GYh5nNRDo0TDYoXCCWul6JvvZ%2B%2B0GsVZP2gBTwy8jUahky2%2Bv1c77HH9oJxLVqMLohQsT4m8IoqieCk99Qaqrts2rAY9cYVyfZoJvatP1RjCY78K%2FBjqkAS4wY%2FS2hXBBjjAkh3CnFuVvnoGJ4E1Q0bzX6CbzgXfu5AsjzLqHAzMmJRAyo4791IsyEmUZaiJ0THenjbjjOpAegvET7zRBjlx%2FihwlegqnPw7gieuiy9zKkuq7MKLtG30JV3zuKhRxKxKCBLJhg9crAmBrKwzS1vOYQKX11MEa3W2dA1KXNEt951Mmzu4GT5UYgo67UYosOlsEZK829YRLZPjF&X-Amz-Signature=c13c3fa38b0f276ac95724608a7db3a60506ba5678e20616e1fbf68bf3a83c34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FEGCTZJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQcqQJkENtCPvEEwPUjuD1EWiXTkltZhcDQ07LS%2FX2QIhAPTSEDxAAtEjym8xyPuyjuvgetpNDDhWlOpQtu%2BAuucwKv8DCCYQABoMNjM3NDIzMTgzODA1IgwauIV6iASlhzX7aT8q3AP6a8f9dTSHuZOyZvyutyuPYEjPkg%2BmFnvsYsVwGhL3jry%2F9WuEBO7w6zvDYT1IqQ5e4drmXQT6TSIhjLS2oA5RaKAH0iwS%2FPHbglefxmUgyvMU98FUrjbif6l1XHL6bQSAeqWazdTHmwct10SWNExVm%2BtB7bl8KryvzZcIg1gzCjzyCT0FslSJEH2Dmmb3Qeea%2BBtv1uchPkdicXwRA57I67pbob%2BOskkgpLfJOmQjc4%2BOb1cnKkcjrjkWPcttrtKvY0ysljkqtM7tbFIvTmwG%2Fvw6p8PjmVyr9%2FqvCteJ8Gqq9LD0ergAcnTrK2J3mA%2FcJLIQqspOzJKIc0JhXFsr35zRm9wiTR3VmrBtNBOiOddbpg5dD%2FZ8DQSngf2dS%2BEb1CVgYYY4IwkBQWVkZK3gt9VlPC4a32UOQvaq6BW3A20%2BhUi7TnyYEjCw1txmD0oTbXrYlxfYsh11%2Bdck3f7mL5DSg8dMxFdF1ou2YyNxtXxyfv1iowAFuMAFV59BK4PujrGHCWCSJD1hO03GYh5nNRDo0TDYoXCCWul6JvvZ%2B%2B0GsVZP2gBTwy8jUahky2%2Bv1c77HH9oJxLVqMLohQsT4m8IoqieCk99Qaqrts2rAY9cYVyfZoJvatP1RjCY78K%2FBjqkAS4wY%2FS2hXBBjjAkh3CnFuVvnoGJ4E1Q0bzX6CbzgXfu5AsjzLqHAzMmJRAyo4791IsyEmUZaiJ0THenjbjjOpAegvET7zRBjlx%2FihwlegqnPw7gieuiy9zKkuq7MKLtG30JV3zuKhRxKxKCBLJhg9crAmBrKwzS1vOYQKX11MEa3W2dA1KXNEt951Mmzu4GT5UYgo67UYosOlsEZK829YRLZPjF&X-Amz-Signature=54f660cd375e60a7468aec28fa9e03e23f7a1298090469522022ea76a86dfbae&X-Amz-SignedHeaders=host&x-id=GetObject)
