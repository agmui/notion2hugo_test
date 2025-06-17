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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDMKS7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWhz6f5pJ47lEyzHIWKtc68jpZXpx49u3XT7HgaF12wIhAN1e%2BjLU%2BTyljorJKS%2BtgjIF1v%2BvrW9DL3CWcCwygorNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCwICy2vuggovzZwgq3AMqFcqhEjGg%2BJ6Ot4N3zK4dWHITicUm3wviYnZzHSDTXZgQg1I%2Fzmc6O7M67%2B0tihYUNFmBFfHNZb34FvWEz7kOJTS86qzJnDHZClTZXi3JiGys3E5kpDtpW%2BlqwKDTeb6mIRcBwwzPnWAKgYDdu62g31Dminh%2FIb%2BZQHAOrBGr8zJtOXV5q6uK8oMD8UcZCJuaonqDmrFzZngkVWoreQXjfiPrXT%2FNSUXwv92be0dzL%2FVoTqsHGjxN0gWaqUtZWI725I6lO2xHxcDZ9frb49%2BX8ulCuS8MEIagcNOxu4QQAWl022%2F%2FsZsFGbkdgr9BYORHjMxmqRYzksMyoAYuiyyWicW653dcnp4KnkVy%2Bp2qvgOLlHfX24qLgtVi2lpP4gPM3t1qo0x7ZrsuTRpJZGxiwjXiV4qHk%2BMoX9yWvPLMYE0f%2FV4oGMF65EBH9ugohz4uO6SlITuLD739YbILzIqS6mHaOQcZ%2BcUJcjOKBAeo5uYrCuKEC8ZFc%2BBz%2BW8Pmou20ONLBcFJh1JklspvXk%2FqSkGodyNXq8CVrW5k%2FdRDGuY4LLKDFEq6%2BoG91rGBkK23qtLuviWOf0YOaJpPErsa7FiA0VpLel8r0bAKGJbG38Ol%2BfwM7tWvShVRwjD8ksTCBjqkARwn%2Bf3WMY7%2BM%2BdM2v4yhv9QMLV1ex2AFmhstshGilXbQ4vAbbiZ%2F%2FXcLRJ0JB%2BX7G8paUNklHVOWWXzU06LFpHNN88WUiu1xdaApi0MlQ%2FVlH8PjiUmsj1Ge%2B1wGORfQXF3AGtFhFxItgRUbkzD7KNpvb3nGNqPwDnALAkCHg6UPK5XbZah%2F8pnkFf8iyW8dpGz4Jt%2B%2FLTjT%2FhFTbkG2wjGaAPV&X-Amz-Signature=d782a47dbdbdea0a0f15fb9edceb0e246c1e83421f41979f88eefe11feb389a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDMKS7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWhz6f5pJ47lEyzHIWKtc68jpZXpx49u3XT7HgaF12wIhAN1e%2BjLU%2BTyljorJKS%2BtgjIF1v%2BvrW9DL3CWcCwygorNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCwICy2vuggovzZwgq3AMqFcqhEjGg%2BJ6Ot4N3zK4dWHITicUm3wviYnZzHSDTXZgQg1I%2Fzmc6O7M67%2B0tihYUNFmBFfHNZb34FvWEz7kOJTS86qzJnDHZClTZXi3JiGys3E5kpDtpW%2BlqwKDTeb6mIRcBwwzPnWAKgYDdu62g31Dminh%2FIb%2BZQHAOrBGr8zJtOXV5q6uK8oMD8UcZCJuaonqDmrFzZngkVWoreQXjfiPrXT%2FNSUXwv92be0dzL%2FVoTqsHGjxN0gWaqUtZWI725I6lO2xHxcDZ9frb49%2BX8ulCuS8MEIagcNOxu4QQAWl022%2F%2FsZsFGbkdgr9BYORHjMxmqRYzksMyoAYuiyyWicW653dcnp4KnkVy%2Bp2qvgOLlHfX24qLgtVi2lpP4gPM3t1qo0x7ZrsuTRpJZGxiwjXiV4qHk%2BMoX9yWvPLMYE0f%2FV4oGMF65EBH9ugohz4uO6SlITuLD739YbILzIqS6mHaOQcZ%2BcUJcjOKBAeo5uYrCuKEC8ZFc%2BBz%2BW8Pmou20ONLBcFJh1JklspvXk%2FqSkGodyNXq8CVrW5k%2FdRDGuY4LLKDFEq6%2BoG91rGBkK23qtLuviWOf0YOaJpPErsa7FiA0VpLel8r0bAKGJbG38Ol%2BfwM7tWvShVRwjD8ksTCBjqkARwn%2Bf3WMY7%2BM%2BdM2v4yhv9QMLV1ex2AFmhstshGilXbQ4vAbbiZ%2F%2FXcLRJ0JB%2BX7G8paUNklHVOWWXzU06LFpHNN88WUiu1xdaApi0MlQ%2FVlH8PjiUmsj1Ge%2B1wGORfQXF3AGtFhFxItgRUbkzD7KNpvb3nGNqPwDnALAkCHg6UPK5XbZah%2F8pnkFf8iyW8dpGz4Jt%2B%2FLTjT%2FhFTbkG2wjGaAPV&X-Amz-Signature=cffd764b7fd82ba5f9b446b77de9a54a231ed7f2730998e86f9930b5699c03c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDMKS7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWhz6f5pJ47lEyzHIWKtc68jpZXpx49u3XT7HgaF12wIhAN1e%2BjLU%2BTyljorJKS%2BtgjIF1v%2BvrW9DL3CWcCwygorNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCwICy2vuggovzZwgq3AMqFcqhEjGg%2BJ6Ot4N3zK4dWHITicUm3wviYnZzHSDTXZgQg1I%2Fzmc6O7M67%2B0tihYUNFmBFfHNZb34FvWEz7kOJTS86qzJnDHZClTZXi3JiGys3E5kpDtpW%2BlqwKDTeb6mIRcBwwzPnWAKgYDdu62g31Dminh%2FIb%2BZQHAOrBGr8zJtOXV5q6uK8oMD8UcZCJuaonqDmrFzZngkVWoreQXjfiPrXT%2FNSUXwv92be0dzL%2FVoTqsHGjxN0gWaqUtZWI725I6lO2xHxcDZ9frb49%2BX8ulCuS8MEIagcNOxu4QQAWl022%2F%2FsZsFGbkdgr9BYORHjMxmqRYzksMyoAYuiyyWicW653dcnp4KnkVy%2Bp2qvgOLlHfX24qLgtVi2lpP4gPM3t1qo0x7ZrsuTRpJZGxiwjXiV4qHk%2BMoX9yWvPLMYE0f%2FV4oGMF65EBH9ugohz4uO6SlITuLD739YbILzIqS6mHaOQcZ%2BcUJcjOKBAeo5uYrCuKEC8ZFc%2BBz%2BW8Pmou20ONLBcFJh1JklspvXk%2FqSkGodyNXq8CVrW5k%2FdRDGuY4LLKDFEq6%2BoG91rGBkK23qtLuviWOf0YOaJpPErsa7FiA0VpLel8r0bAKGJbG38Ol%2BfwM7tWvShVRwjD8ksTCBjqkARwn%2Bf3WMY7%2BM%2BdM2v4yhv9QMLV1ex2AFmhstshGilXbQ4vAbbiZ%2F%2FXcLRJ0JB%2BX7G8paUNklHVOWWXzU06LFpHNN88WUiu1xdaApi0MlQ%2FVlH8PjiUmsj1Ge%2B1wGORfQXF3AGtFhFxItgRUbkzD7KNpvb3nGNqPwDnALAkCHg6UPK5XbZah%2F8pnkFf8iyW8dpGz4Jt%2B%2FLTjT%2FhFTbkG2wjGaAPV&X-Amz-Signature=b8068db64c225c325cae167a03556dcf261a438859080859526593961ba4c876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDMKS7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWhz6f5pJ47lEyzHIWKtc68jpZXpx49u3XT7HgaF12wIhAN1e%2BjLU%2BTyljorJKS%2BtgjIF1v%2BvrW9DL3CWcCwygorNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCwICy2vuggovzZwgq3AMqFcqhEjGg%2BJ6Ot4N3zK4dWHITicUm3wviYnZzHSDTXZgQg1I%2Fzmc6O7M67%2B0tihYUNFmBFfHNZb34FvWEz7kOJTS86qzJnDHZClTZXi3JiGys3E5kpDtpW%2BlqwKDTeb6mIRcBwwzPnWAKgYDdu62g31Dminh%2FIb%2BZQHAOrBGr8zJtOXV5q6uK8oMD8UcZCJuaonqDmrFzZngkVWoreQXjfiPrXT%2FNSUXwv92be0dzL%2FVoTqsHGjxN0gWaqUtZWI725I6lO2xHxcDZ9frb49%2BX8ulCuS8MEIagcNOxu4QQAWl022%2F%2FsZsFGbkdgr9BYORHjMxmqRYzksMyoAYuiyyWicW653dcnp4KnkVy%2Bp2qvgOLlHfX24qLgtVi2lpP4gPM3t1qo0x7ZrsuTRpJZGxiwjXiV4qHk%2BMoX9yWvPLMYE0f%2FV4oGMF65EBH9ugohz4uO6SlITuLD739YbILzIqS6mHaOQcZ%2BcUJcjOKBAeo5uYrCuKEC8ZFc%2BBz%2BW8Pmou20ONLBcFJh1JklspvXk%2FqSkGodyNXq8CVrW5k%2FdRDGuY4LLKDFEq6%2BoG91rGBkK23qtLuviWOf0YOaJpPErsa7FiA0VpLel8r0bAKGJbG38Ol%2BfwM7tWvShVRwjD8ksTCBjqkARwn%2Bf3WMY7%2BM%2BdM2v4yhv9QMLV1ex2AFmhstshGilXbQ4vAbbiZ%2F%2FXcLRJ0JB%2BX7G8paUNklHVOWWXzU06LFpHNN88WUiu1xdaApi0MlQ%2FVlH8PjiUmsj1Ge%2B1wGORfQXF3AGtFhFxItgRUbkzD7KNpvb3nGNqPwDnALAkCHg6UPK5XbZah%2F8pnkFf8iyW8dpGz4Jt%2B%2FLTjT%2FhFTbkG2wjGaAPV&X-Amz-Signature=b74d00b491820ac4433d26f6b9d8d332e1f64dbb6f9770302408a6d16e502935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDMKS7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWhz6f5pJ47lEyzHIWKtc68jpZXpx49u3XT7HgaF12wIhAN1e%2BjLU%2BTyljorJKS%2BtgjIF1v%2BvrW9DL3CWcCwygorNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCwICy2vuggovzZwgq3AMqFcqhEjGg%2BJ6Ot4N3zK4dWHITicUm3wviYnZzHSDTXZgQg1I%2Fzmc6O7M67%2B0tihYUNFmBFfHNZb34FvWEz7kOJTS86qzJnDHZClTZXi3JiGys3E5kpDtpW%2BlqwKDTeb6mIRcBwwzPnWAKgYDdu62g31Dminh%2FIb%2BZQHAOrBGr8zJtOXV5q6uK8oMD8UcZCJuaonqDmrFzZngkVWoreQXjfiPrXT%2FNSUXwv92be0dzL%2FVoTqsHGjxN0gWaqUtZWI725I6lO2xHxcDZ9frb49%2BX8ulCuS8MEIagcNOxu4QQAWl022%2F%2FsZsFGbkdgr9BYORHjMxmqRYzksMyoAYuiyyWicW653dcnp4KnkVy%2Bp2qvgOLlHfX24qLgtVi2lpP4gPM3t1qo0x7ZrsuTRpJZGxiwjXiV4qHk%2BMoX9yWvPLMYE0f%2FV4oGMF65EBH9ugohz4uO6SlITuLD739YbILzIqS6mHaOQcZ%2BcUJcjOKBAeo5uYrCuKEC8ZFc%2BBz%2BW8Pmou20ONLBcFJh1JklspvXk%2FqSkGodyNXq8CVrW5k%2FdRDGuY4LLKDFEq6%2BoG91rGBkK23qtLuviWOf0YOaJpPErsa7FiA0VpLel8r0bAKGJbG38Ol%2BfwM7tWvShVRwjD8ksTCBjqkARwn%2Bf3WMY7%2BM%2BdM2v4yhv9QMLV1ex2AFmhstshGilXbQ4vAbbiZ%2F%2FXcLRJ0JB%2BX7G8paUNklHVOWWXzU06LFpHNN88WUiu1xdaApi0MlQ%2FVlH8PjiUmsj1Ge%2B1wGORfQXF3AGtFhFxItgRUbkzD7KNpvb3nGNqPwDnALAkCHg6UPK5XbZah%2F8pnkFf8iyW8dpGz4Jt%2B%2FLTjT%2FhFTbkG2wjGaAPV&X-Amz-Signature=3b9fa662c1c875193711001e03b565922d046c857ef15f1e4dcb6b80053572ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDMKS7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpWhz6f5pJ47lEyzHIWKtc68jpZXpx49u3XT7HgaF12wIhAN1e%2BjLU%2BTyljorJKS%2BtgjIF1v%2BvrW9DL3CWcCwygorNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwCwICy2vuggovzZwgq3AMqFcqhEjGg%2BJ6Ot4N3zK4dWHITicUm3wviYnZzHSDTXZgQg1I%2Fzmc6O7M67%2B0tihYUNFmBFfHNZb34FvWEz7kOJTS86qzJnDHZClTZXi3JiGys3E5kpDtpW%2BlqwKDTeb6mIRcBwwzPnWAKgYDdu62g31Dminh%2FIb%2BZQHAOrBGr8zJtOXV5q6uK8oMD8UcZCJuaonqDmrFzZngkVWoreQXjfiPrXT%2FNSUXwv92be0dzL%2FVoTqsHGjxN0gWaqUtZWI725I6lO2xHxcDZ9frb49%2BX8ulCuS8MEIagcNOxu4QQAWl022%2F%2FsZsFGbkdgr9BYORHjMxmqRYzksMyoAYuiyyWicW653dcnp4KnkVy%2Bp2qvgOLlHfX24qLgtVi2lpP4gPM3t1qo0x7ZrsuTRpJZGxiwjXiV4qHk%2BMoX9yWvPLMYE0f%2FV4oGMF65EBH9ugohz4uO6SlITuLD739YbILzIqS6mHaOQcZ%2BcUJcjOKBAeo5uYrCuKEC8ZFc%2BBz%2BW8Pmou20ONLBcFJh1JklspvXk%2FqSkGodyNXq8CVrW5k%2FdRDGuY4LLKDFEq6%2BoG91rGBkK23qtLuviWOf0YOaJpPErsa7FiA0VpLel8r0bAKGJbG38Ol%2BfwM7tWvShVRwjD8ksTCBjqkARwn%2Bf3WMY7%2BM%2BdM2v4yhv9QMLV1ex2AFmhstshGilXbQ4vAbbiZ%2F%2FXcLRJ0JB%2BX7G8paUNklHVOWWXzU06LFpHNN88WUiu1xdaApi0MlQ%2FVlH8PjiUmsj1Ge%2B1wGORfQXF3AGtFhFxItgRUbkzD7KNpvb3nGNqPwDnALAkCHg6UPK5XbZah%2F8pnkFf8iyW8dpGz4Jt%2B%2FLTjT%2FhFTbkG2wjGaAPV&X-Amz-Signature=8e9bcf24f8bab629af2e1c1eb44604cdd4b19e4c64da3d22b6fcd8252350ddd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
