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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP6XW2Q%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDaF9Jht%2Bz26X9mMmFnVBBHzD6yuyDUgQ4UZQDES1OafwIgRwTnyszdxIpEcb%2F9%2BFAFB36ZgAJLfqDGzb5l%2FQTNNcQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFlgYDGZjwAUQUxsircAxHrh%2ByPBkPbU10w7TvYNWzNo6i2p%2Ftsr0ViV225xI81rVjxvmR1zyqTt9Yvwpg44nMd1kyBKGH3H5E6U1zmCEie31vDB0RnQ74xr8Tg%2BGw5Mzf%2BgEutuM%2Bk2ykJ00FmTxC88E77vn2M3%2BzDW%2FRYbFSkwZiCuuuplQzxMF8HLk73dPNiINnhQvHx2qIPGrk%2BySszixqpW050AbKAkAlDVHQlNVfcwuwjXWWmZBJ3K0imZGjG9rdFvKLzCSoVDSYKXx76lvl9NvMvPytbqRikPcKXWeD7IzmaLJsAev3KveUF2HSJhrQf4SAUkj7CRDJcTlsxuv%2BLj8XoxM875XDRv0%2BwltS3wFRlaP%2FGBnFAptRENs23G%2Bn6xCi7tgTazk80eQyztcoue8%2BIU7BbB0tcPfkM%2Fl22f6ME%2Fhb1DtTQOC7rwRP8BlPppZkFJ5VWqjsB%2BQpidy3UXndjWj0VH%2BelABcDcgugF1GB3WfKJ%2Fv6motih5K6Lh7xsDVFFLTHJK1gbV9h27C0hmbZ9t%2BHddzo1%2FS18bpbfH5Gni1uE8b14bSxC4kMc7qTH9sUCU%2FPnV8RM8TDsZLw%2Bec4P4x1Knwf0mYFZmExR6nEKyPd3rjjxtfmpHkw8yojqCnZVAIiML2rxcEGOqUBODnRHyiv3pHJ3%2FHqwkC%2BJcVhNTZXX6hv5Xt5UAjeBImKNn7a%2BDyNit8ZnDhz9qCDojJmMtBKPNs2H%2FubQQeGiPL56Yto%2B0WYa2vmVHL22wpxdWwYlnJOiQDezncfLwlCDDAAg7kA6mraaVb1DDCFbLRHa22ks7V8V9mkADLcdV9hPklL%2FErqbKG08bv6Fds%2BinsqpvTAvDIvIAOHSBnGBUPyY5o%2B&X-Amz-Signature=f9463ce2fcd3e414364386b242db0e7da945b0aad233deba6c2a7bd74fad8509&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP6XW2Q%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDaF9Jht%2Bz26X9mMmFnVBBHzD6yuyDUgQ4UZQDES1OafwIgRwTnyszdxIpEcb%2F9%2BFAFB36ZgAJLfqDGzb5l%2FQTNNcQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFlgYDGZjwAUQUxsircAxHrh%2ByPBkPbU10w7TvYNWzNo6i2p%2Ftsr0ViV225xI81rVjxvmR1zyqTt9Yvwpg44nMd1kyBKGH3H5E6U1zmCEie31vDB0RnQ74xr8Tg%2BGw5Mzf%2BgEutuM%2Bk2ykJ00FmTxC88E77vn2M3%2BzDW%2FRYbFSkwZiCuuuplQzxMF8HLk73dPNiINnhQvHx2qIPGrk%2BySszixqpW050AbKAkAlDVHQlNVfcwuwjXWWmZBJ3K0imZGjG9rdFvKLzCSoVDSYKXx76lvl9NvMvPytbqRikPcKXWeD7IzmaLJsAev3KveUF2HSJhrQf4SAUkj7CRDJcTlsxuv%2BLj8XoxM875XDRv0%2BwltS3wFRlaP%2FGBnFAptRENs23G%2Bn6xCi7tgTazk80eQyztcoue8%2BIU7BbB0tcPfkM%2Fl22f6ME%2Fhb1DtTQOC7rwRP8BlPppZkFJ5VWqjsB%2BQpidy3UXndjWj0VH%2BelABcDcgugF1GB3WfKJ%2Fv6motih5K6Lh7xsDVFFLTHJK1gbV9h27C0hmbZ9t%2BHddzo1%2FS18bpbfH5Gni1uE8b14bSxC4kMc7qTH9sUCU%2FPnV8RM8TDsZLw%2Bec4P4x1Knwf0mYFZmExR6nEKyPd3rjjxtfmpHkw8yojqCnZVAIiML2rxcEGOqUBODnRHyiv3pHJ3%2FHqwkC%2BJcVhNTZXX6hv5Xt5UAjeBImKNn7a%2BDyNit8ZnDhz9qCDojJmMtBKPNs2H%2FubQQeGiPL56Yto%2B0WYa2vmVHL22wpxdWwYlnJOiQDezncfLwlCDDAAg7kA6mraaVb1DDCFbLRHa22ks7V8V9mkADLcdV9hPklL%2FErqbKG08bv6Fds%2BinsqpvTAvDIvIAOHSBnGBUPyY5o%2B&X-Amz-Signature=2a0f5d24790dbc5a905e854703b41ef23eb31af7d71b9be391bcf07aeee708cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP6XW2Q%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDaF9Jht%2Bz26X9mMmFnVBBHzD6yuyDUgQ4UZQDES1OafwIgRwTnyszdxIpEcb%2F9%2BFAFB36ZgAJLfqDGzb5l%2FQTNNcQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFlgYDGZjwAUQUxsircAxHrh%2ByPBkPbU10w7TvYNWzNo6i2p%2Ftsr0ViV225xI81rVjxvmR1zyqTt9Yvwpg44nMd1kyBKGH3H5E6U1zmCEie31vDB0RnQ74xr8Tg%2BGw5Mzf%2BgEutuM%2Bk2ykJ00FmTxC88E77vn2M3%2BzDW%2FRYbFSkwZiCuuuplQzxMF8HLk73dPNiINnhQvHx2qIPGrk%2BySszixqpW050AbKAkAlDVHQlNVfcwuwjXWWmZBJ3K0imZGjG9rdFvKLzCSoVDSYKXx76lvl9NvMvPytbqRikPcKXWeD7IzmaLJsAev3KveUF2HSJhrQf4SAUkj7CRDJcTlsxuv%2BLj8XoxM875XDRv0%2BwltS3wFRlaP%2FGBnFAptRENs23G%2Bn6xCi7tgTazk80eQyztcoue8%2BIU7BbB0tcPfkM%2Fl22f6ME%2Fhb1DtTQOC7rwRP8BlPppZkFJ5VWqjsB%2BQpidy3UXndjWj0VH%2BelABcDcgugF1GB3WfKJ%2Fv6motih5K6Lh7xsDVFFLTHJK1gbV9h27C0hmbZ9t%2BHddzo1%2FS18bpbfH5Gni1uE8b14bSxC4kMc7qTH9sUCU%2FPnV8RM8TDsZLw%2Bec4P4x1Knwf0mYFZmExR6nEKyPd3rjjxtfmpHkw8yojqCnZVAIiML2rxcEGOqUBODnRHyiv3pHJ3%2FHqwkC%2BJcVhNTZXX6hv5Xt5UAjeBImKNn7a%2BDyNit8ZnDhz9qCDojJmMtBKPNs2H%2FubQQeGiPL56Yto%2B0WYa2vmVHL22wpxdWwYlnJOiQDezncfLwlCDDAAg7kA6mraaVb1DDCFbLRHa22ks7V8V9mkADLcdV9hPklL%2FErqbKG08bv6Fds%2BinsqpvTAvDIvIAOHSBnGBUPyY5o%2B&X-Amz-Signature=6e628a1c2033f76b9c4a13efd6003406e4759ecb5a569b2384b2718e8ed68718&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP6XW2Q%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDaF9Jht%2Bz26X9mMmFnVBBHzD6yuyDUgQ4UZQDES1OafwIgRwTnyszdxIpEcb%2F9%2BFAFB36ZgAJLfqDGzb5l%2FQTNNcQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFlgYDGZjwAUQUxsircAxHrh%2ByPBkPbU10w7TvYNWzNo6i2p%2Ftsr0ViV225xI81rVjxvmR1zyqTt9Yvwpg44nMd1kyBKGH3H5E6U1zmCEie31vDB0RnQ74xr8Tg%2BGw5Mzf%2BgEutuM%2Bk2ykJ00FmTxC88E77vn2M3%2BzDW%2FRYbFSkwZiCuuuplQzxMF8HLk73dPNiINnhQvHx2qIPGrk%2BySszixqpW050AbKAkAlDVHQlNVfcwuwjXWWmZBJ3K0imZGjG9rdFvKLzCSoVDSYKXx76lvl9NvMvPytbqRikPcKXWeD7IzmaLJsAev3KveUF2HSJhrQf4SAUkj7CRDJcTlsxuv%2BLj8XoxM875XDRv0%2BwltS3wFRlaP%2FGBnFAptRENs23G%2Bn6xCi7tgTazk80eQyztcoue8%2BIU7BbB0tcPfkM%2Fl22f6ME%2Fhb1DtTQOC7rwRP8BlPppZkFJ5VWqjsB%2BQpidy3UXndjWj0VH%2BelABcDcgugF1GB3WfKJ%2Fv6motih5K6Lh7xsDVFFLTHJK1gbV9h27C0hmbZ9t%2BHddzo1%2FS18bpbfH5Gni1uE8b14bSxC4kMc7qTH9sUCU%2FPnV8RM8TDsZLw%2Bec4P4x1Knwf0mYFZmExR6nEKyPd3rjjxtfmpHkw8yojqCnZVAIiML2rxcEGOqUBODnRHyiv3pHJ3%2FHqwkC%2BJcVhNTZXX6hv5Xt5UAjeBImKNn7a%2BDyNit8ZnDhz9qCDojJmMtBKPNs2H%2FubQQeGiPL56Yto%2B0WYa2vmVHL22wpxdWwYlnJOiQDezncfLwlCDDAAg7kA6mraaVb1DDCFbLRHa22ks7V8V9mkADLcdV9hPklL%2FErqbKG08bv6Fds%2BinsqpvTAvDIvIAOHSBnGBUPyY5o%2B&X-Amz-Signature=52f2333252af0a35ec8c1827a665c5cd8111afe7b3a8fe6ac4c14c517c1073cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP6XW2Q%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDaF9Jht%2Bz26X9mMmFnVBBHzD6yuyDUgQ4UZQDES1OafwIgRwTnyszdxIpEcb%2F9%2BFAFB36ZgAJLfqDGzb5l%2FQTNNcQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFlgYDGZjwAUQUxsircAxHrh%2ByPBkPbU10w7TvYNWzNo6i2p%2Ftsr0ViV225xI81rVjxvmR1zyqTt9Yvwpg44nMd1kyBKGH3H5E6U1zmCEie31vDB0RnQ74xr8Tg%2BGw5Mzf%2BgEutuM%2Bk2ykJ00FmTxC88E77vn2M3%2BzDW%2FRYbFSkwZiCuuuplQzxMF8HLk73dPNiINnhQvHx2qIPGrk%2BySszixqpW050AbKAkAlDVHQlNVfcwuwjXWWmZBJ3K0imZGjG9rdFvKLzCSoVDSYKXx76lvl9NvMvPytbqRikPcKXWeD7IzmaLJsAev3KveUF2HSJhrQf4SAUkj7CRDJcTlsxuv%2BLj8XoxM875XDRv0%2BwltS3wFRlaP%2FGBnFAptRENs23G%2Bn6xCi7tgTazk80eQyztcoue8%2BIU7BbB0tcPfkM%2Fl22f6ME%2Fhb1DtTQOC7rwRP8BlPppZkFJ5VWqjsB%2BQpidy3UXndjWj0VH%2BelABcDcgugF1GB3WfKJ%2Fv6motih5K6Lh7xsDVFFLTHJK1gbV9h27C0hmbZ9t%2BHddzo1%2FS18bpbfH5Gni1uE8b14bSxC4kMc7qTH9sUCU%2FPnV8RM8TDsZLw%2Bec4P4x1Knwf0mYFZmExR6nEKyPd3rjjxtfmpHkw8yojqCnZVAIiML2rxcEGOqUBODnRHyiv3pHJ3%2FHqwkC%2BJcVhNTZXX6hv5Xt5UAjeBImKNn7a%2BDyNit8ZnDhz9qCDojJmMtBKPNs2H%2FubQQeGiPL56Yto%2B0WYa2vmVHL22wpxdWwYlnJOiQDezncfLwlCDDAAg7kA6mraaVb1DDCFbLRHa22ks7V8V9mkADLcdV9hPklL%2FErqbKG08bv6Fds%2BinsqpvTAvDIvIAOHSBnGBUPyY5o%2B&X-Amz-Signature=d7822d61bd38ffcbb292eb6ebeac3c65146b22b0ab0d7c5a86b3157fb048754e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP6XW2Q%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDaF9Jht%2Bz26X9mMmFnVBBHzD6yuyDUgQ4UZQDES1OafwIgRwTnyszdxIpEcb%2F9%2BFAFB36ZgAJLfqDGzb5l%2FQTNNcQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFlgYDGZjwAUQUxsircAxHrh%2ByPBkPbU10w7TvYNWzNo6i2p%2Ftsr0ViV225xI81rVjxvmR1zyqTt9Yvwpg44nMd1kyBKGH3H5E6U1zmCEie31vDB0RnQ74xr8Tg%2BGw5Mzf%2BgEutuM%2Bk2ykJ00FmTxC88E77vn2M3%2BzDW%2FRYbFSkwZiCuuuplQzxMF8HLk73dPNiINnhQvHx2qIPGrk%2BySszixqpW050AbKAkAlDVHQlNVfcwuwjXWWmZBJ3K0imZGjG9rdFvKLzCSoVDSYKXx76lvl9NvMvPytbqRikPcKXWeD7IzmaLJsAev3KveUF2HSJhrQf4SAUkj7CRDJcTlsxuv%2BLj8XoxM875XDRv0%2BwltS3wFRlaP%2FGBnFAptRENs23G%2Bn6xCi7tgTazk80eQyztcoue8%2BIU7BbB0tcPfkM%2Fl22f6ME%2Fhb1DtTQOC7rwRP8BlPppZkFJ5VWqjsB%2BQpidy3UXndjWj0VH%2BelABcDcgugF1GB3WfKJ%2Fv6motih5K6Lh7xsDVFFLTHJK1gbV9h27C0hmbZ9t%2BHddzo1%2FS18bpbfH5Gni1uE8b14bSxC4kMc7qTH9sUCU%2FPnV8RM8TDsZLw%2Bec4P4x1Knwf0mYFZmExR6nEKyPd3rjjxtfmpHkw8yojqCnZVAIiML2rxcEGOqUBODnRHyiv3pHJ3%2FHqwkC%2BJcVhNTZXX6hv5Xt5UAjeBImKNn7a%2BDyNit8ZnDhz9qCDojJmMtBKPNs2H%2FubQQeGiPL56Yto%2B0WYa2vmVHL22wpxdWwYlnJOiQDezncfLwlCDDAAg7kA6mraaVb1DDCFbLRHa22ks7V8V9mkADLcdV9hPklL%2FErqbKG08bv6Fds%2BinsqpvTAvDIvIAOHSBnGBUPyY5o%2B&X-Amz-Signature=43cd0b8c7a3fd3c148ebf1e61ddb4dcae1b61bd62abc68a571feed9340726199&X-Amz-SignedHeaders=host&x-id=GetObject)
