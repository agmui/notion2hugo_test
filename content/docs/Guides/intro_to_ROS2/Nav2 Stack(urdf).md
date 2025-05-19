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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNZH4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaCP04JhpRTibWHhWWqC0eDa9JV39PjrKdDcGIU6wvPAiBH73ly5pZHA5hX6ZO5BDGav7LyXk05hifLnw%2FkkOY0OyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkm5bT9ZrNwNbyFQKtwDQk7wbrrQwzoUIyz8J31Xh93OAT3i2aV%2BZKetCvWMXoye2lgwe8PBTGpujtGUDmLrhmkrMdRY%2FBqmcpM4B4ido5GkRgRWYRuf%2Fsj5VAfWAfJHWreEp0%2FQX%2BRPZhr7x8MmTSn9Ri5MsISSe%2FOwv5H%2BJQP00tktNVR0jAMeAiLiF%2BVFnbCTE1mH9I7g7VddXtOsEKTIjxjk4YBFNCIFLA2EqhP9jjbZuMub1V3TP2dMwfkyUOMfDhN2P2E8WhCCKqMa1sHm9cbP%2F4PItTd1gk0etWWe7W2aO2l0i1Kecuzd0UVh9wf5dRXeQJvUJCrXYpiQdfT2xyV0tSph5l%2F%2B3XNFqW1m3mtEfYQt9IMC03Byw2wQKfNG%2Bknkx7nUUrZPk75oaSDAavhSJjmJkwwy2ONQ27PNw3%2FG3Pf0E6TivK6i8X8APpuXD0paoqYZ0W61haCfuuasLnr02L09a%2FuBJZ6j0Eq0PnCiITv5tstI3mUadXlrNOkPWBckA%2BDLvm1cb%2FMCDHtFjIHmhnJLyZYsAnuTsYfzS7z0DqFmk2PjlzuMzrXclwRFg4ILN6cxJbqZhuqnDxzCGb0sAAsJYN72MLpAxkfeED1ZBXpkmE6NKvO8bxg%2Ffyb4fdkntm7aM0MwqJ2swQY6pgGGKF21hLmaxP2xEVcGT7E2dvFpFzJbm2FDF%2B%2FlLDgR5UPlSkp6%2FDP%2B%2FMUxKYdjDi2Qn6mZPtURFJZtHfiSjUnnK7le46dEUqIJeQ%2BZLP0p9iBOKd7bqyKPDrONvpPpu%2BU3bAaUnkpRJWpgrpCMCqUvgbk5fhJzragSCD%2FEsdbZd%2BSHPtct7AUqK%2FDJ5pmlKjLKl%2FqOzGVLcjth4MIdB%2FymaKiJ4UD9&X-Amz-Signature=6e84e234ed4f94ccc2a51f6f517e7027581fab2a67ed92e76457e15c7f4aa5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNZH4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaCP04JhpRTibWHhWWqC0eDa9JV39PjrKdDcGIU6wvPAiBH73ly5pZHA5hX6ZO5BDGav7LyXk05hifLnw%2FkkOY0OyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkm5bT9ZrNwNbyFQKtwDQk7wbrrQwzoUIyz8J31Xh93OAT3i2aV%2BZKetCvWMXoye2lgwe8PBTGpujtGUDmLrhmkrMdRY%2FBqmcpM4B4ido5GkRgRWYRuf%2Fsj5VAfWAfJHWreEp0%2FQX%2BRPZhr7x8MmTSn9Ri5MsISSe%2FOwv5H%2BJQP00tktNVR0jAMeAiLiF%2BVFnbCTE1mH9I7g7VddXtOsEKTIjxjk4YBFNCIFLA2EqhP9jjbZuMub1V3TP2dMwfkyUOMfDhN2P2E8WhCCKqMa1sHm9cbP%2F4PItTd1gk0etWWe7W2aO2l0i1Kecuzd0UVh9wf5dRXeQJvUJCrXYpiQdfT2xyV0tSph5l%2F%2B3XNFqW1m3mtEfYQt9IMC03Byw2wQKfNG%2Bknkx7nUUrZPk75oaSDAavhSJjmJkwwy2ONQ27PNw3%2FG3Pf0E6TivK6i8X8APpuXD0paoqYZ0W61haCfuuasLnr02L09a%2FuBJZ6j0Eq0PnCiITv5tstI3mUadXlrNOkPWBckA%2BDLvm1cb%2FMCDHtFjIHmhnJLyZYsAnuTsYfzS7z0DqFmk2PjlzuMzrXclwRFg4ILN6cxJbqZhuqnDxzCGb0sAAsJYN72MLpAxkfeED1ZBXpkmE6NKvO8bxg%2Ffyb4fdkntm7aM0MwqJ2swQY6pgGGKF21hLmaxP2xEVcGT7E2dvFpFzJbm2FDF%2B%2FlLDgR5UPlSkp6%2FDP%2B%2FMUxKYdjDi2Qn6mZPtURFJZtHfiSjUnnK7le46dEUqIJeQ%2BZLP0p9iBOKd7bqyKPDrONvpPpu%2BU3bAaUnkpRJWpgrpCMCqUvgbk5fhJzragSCD%2FEsdbZd%2BSHPtct7AUqK%2FDJ5pmlKjLKl%2FqOzGVLcjth4MIdB%2FymaKiJ4UD9&X-Amz-Signature=2dd91de76430a8ff563c27f732e7f9c5038ddfdbfd31645470bf8c27df035a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNZH4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaCP04JhpRTibWHhWWqC0eDa9JV39PjrKdDcGIU6wvPAiBH73ly5pZHA5hX6ZO5BDGav7LyXk05hifLnw%2FkkOY0OyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkm5bT9ZrNwNbyFQKtwDQk7wbrrQwzoUIyz8J31Xh93OAT3i2aV%2BZKetCvWMXoye2lgwe8PBTGpujtGUDmLrhmkrMdRY%2FBqmcpM4B4ido5GkRgRWYRuf%2Fsj5VAfWAfJHWreEp0%2FQX%2BRPZhr7x8MmTSn9Ri5MsISSe%2FOwv5H%2BJQP00tktNVR0jAMeAiLiF%2BVFnbCTE1mH9I7g7VddXtOsEKTIjxjk4YBFNCIFLA2EqhP9jjbZuMub1V3TP2dMwfkyUOMfDhN2P2E8WhCCKqMa1sHm9cbP%2F4PItTd1gk0etWWe7W2aO2l0i1Kecuzd0UVh9wf5dRXeQJvUJCrXYpiQdfT2xyV0tSph5l%2F%2B3XNFqW1m3mtEfYQt9IMC03Byw2wQKfNG%2Bknkx7nUUrZPk75oaSDAavhSJjmJkwwy2ONQ27PNw3%2FG3Pf0E6TivK6i8X8APpuXD0paoqYZ0W61haCfuuasLnr02L09a%2FuBJZ6j0Eq0PnCiITv5tstI3mUadXlrNOkPWBckA%2BDLvm1cb%2FMCDHtFjIHmhnJLyZYsAnuTsYfzS7z0DqFmk2PjlzuMzrXclwRFg4ILN6cxJbqZhuqnDxzCGb0sAAsJYN72MLpAxkfeED1ZBXpkmE6NKvO8bxg%2Ffyb4fdkntm7aM0MwqJ2swQY6pgGGKF21hLmaxP2xEVcGT7E2dvFpFzJbm2FDF%2B%2FlLDgR5UPlSkp6%2FDP%2B%2FMUxKYdjDi2Qn6mZPtURFJZtHfiSjUnnK7le46dEUqIJeQ%2BZLP0p9iBOKd7bqyKPDrONvpPpu%2BU3bAaUnkpRJWpgrpCMCqUvgbk5fhJzragSCD%2FEsdbZd%2BSHPtct7AUqK%2FDJ5pmlKjLKl%2FqOzGVLcjth4MIdB%2FymaKiJ4UD9&X-Amz-Signature=9a38e16d90f832abff8914aaf9a6e92750cf65c765898fe894dbe2ed6ddfc681&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNZH4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaCP04JhpRTibWHhWWqC0eDa9JV39PjrKdDcGIU6wvPAiBH73ly5pZHA5hX6ZO5BDGav7LyXk05hifLnw%2FkkOY0OyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkm5bT9ZrNwNbyFQKtwDQk7wbrrQwzoUIyz8J31Xh93OAT3i2aV%2BZKetCvWMXoye2lgwe8PBTGpujtGUDmLrhmkrMdRY%2FBqmcpM4B4ido5GkRgRWYRuf%2Fsj5VAfWAfJHWreEp0%2FQX%2BRPZhr7x8MmTSn9Ri5MsISSe%2FOwv5H%2BJQP00tktNVR0jAMeAiLiF%2BVFnbCTE1mH9I7g7VddXtOsEKTIjxjk4YBFNCIFLA2EqhP9jjbZuMub1V3TP2dMwfkyUOMfDhN2P2E8WhCCKqMa1sHm9cbP%2F4PItTd1gk0etWWe7W2aO2l0i1Kecuzd0UVh9wf5dRXeQJvUJCrXYpiQdfT2xyV0tSph5l%2F%2B3XNFqW1m3mtEfYQt9IMC03Byw2wQKfNG%2Bknkx7nUUrZPk75oaSDAavhSJjmJkwwy2ONQ27PNw3%2FG3Pf0E6TivK6i8X8APpuXD0paoqYZ0W61haCfuuasLnr02L09a%2FuBJZ6j0Eq0PnCiITv5tstI3mUadXlrNOkPWBckA%2BDLvm1cb%2FMCDHtFjIHmhnJLyZYsAnuTsYfzS7z0DqFmk2PjlzuMzrXclwRFg4ILN6cxJbqZhuqnDxzCGb0sAAsJYN72MLpAxkfeED1ZBXpkmE6NKvO8bxg%2Ffyb4fdkntm7aM0MwqJ2swQY6pgGGKF21hLmaxP2xEVcGT7E2dvFpFzJbm2FDF%2B%2FlLDgR5UPlSkp6%2FDP%2B%2FMUxKYdjDi2Qn6mZPtURFJZtHfiSjUnnK7le46dEUqIJeQ%2BZLP0p9iBOKd7bqyKPDrONvpPpu%2BU3bAaUnkpRJWpgrpCMCqUvgbk5fhJzragSCD%2FEsdbZd%2BSHPtct7AUqK%2FDJ5pmlKjLKl%2FqOzGVLcjth4MIdB%2FymaKiJ4UD9&X-Amz-Signature=41659f7d100afd312b6d3841ae346339eb5d48c2c0d305d4b7071c0536ffa2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNZH4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaCP04JhpRTibWHhWWqC0eDa9JV39PjrKdDcGIU6wvPAiBH73ly5pZHA5hX6ZO5BDGav7LyXk05hifLnw%2FkkOY0OyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkm5bT9ZrNwNbyFQKtwDQk7wbrrQwzoUIyz8J31Xh93OAT3i2aV%2BZKetCvWMXoye2lgwe8PBTGpujtGUDmLrhmkrMdRY%2FBqmcpM4B4ido5GkRgRWYRuf%2Fsj5VAfWAfJHWreEp0%2FQX%2BRPZhr7x8MmTSn9Ri5MsISSe%2FOwv5H%2BJQP00tktNVR0jAMeAiLiF%2BVFnbCTE1mH9I7g7VddXtOsEKTIjxjk4YBFNCIFLA2EqhP9jjbZuMub1V3TP2dMwfkyUOMfDhN2P2E8WhCCKqMa1sHm9cbP%2F4PItTd1gk0etWWe7W2aO2l0i1Kecuzd0UVh9wf5dRXeQJvUJCrXYpiQdfT2xyV0tSph5l%2F%2B3XNFqW1m3mtEfYQt9IMC03Byw2wQKfNG%2Bknkx7nUUrZPk75oaSDAavhSJjmJkwwy2ONQ27PNw3%2FG3Pf0E6TivK6i8X8APpuXD0paoqYZ0W61haCfuuasLnr02L09a%2FuBJZ6j0Eq0PnCiITv5tstI3mUadXlrNOkPWBckA%2BDLvm1cb%2FMCDHtFjIHmhnJLyZYsAnuTsYfzS7z0DqFmk2PjlzuMzrXclwRFg4ILN6cxJbqZhuqnDxzCGb0sAAsJYN72MLpAxkfeED1ZBXpkmE6NKvO8bxg%2Ffyb4fdkntm7aM0MwqJ2swQY6pgGGKF21hLmaxP2xEVcGT7E2dvFpFzJbm2FDF%2B%2FlLDgR5UPlSkp6%2FDP%2B%2FMUxKYdjDi2Qn6mZPtURFJZtHfiSjUnnK7le46dEUqIJeQ%2BZLP0p9iBOKd7bqyKPDrONvpPpu%2BU3bAaUnkpRJWpgrpCMCqUvgbk5fhJzragSCD%2FEsdbZd%2BSHPtct7AUqK%2FDJ5pmlKjLKl%2FqOzGVLcjth4MIdB%2FymaKiJ4UD9&X-Amz-Signature=b6d6df855b5ed52f15d088cbbfb02675257e02a92d88292fe0a6cd263137b43a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBNZH4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaCP04JhpRTibWHhWWqC0eDa9JV39PjrKdDcGIU6wvPAiBH73ly5pZHA5hX6ZO5BDGav7LyXk05hifLnw%2FkkOY0OyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnkm5bT9ZrNwNbyFQKtwDQk7wbrrQwzoUIyz8J31Xh93OAT3i2aV%2BZKetCvWMXoye2lgwe8PBTGpujtGUDmLrhmkrMdRY%2FBqmcpM4B4ido5GkRgRWYRuf%2Fsj5VAfWAfJHWreEp0%2FQX%2BRPZhr7x8MmTSn9Ri5MsISSe%2FOwv5H%2BJQP00tktNVR0jAMeAiLiF%2BVFnbCTE1mH9I7g7VddXtOsEKTIjxjk4YBFNCIFLA2EqhP9jjbZuMub1V3TP2dMwfkyUOMfDhN2P2E8WhCCKqMa1sHm9cbP%2F4PItTd1gk0etWWe7W2aO2l0i1Kecuzd0UVh9wf5dRXeQJvUJCrXYpiQdfT2xyV0tSph5l%2F%2B3XNFqW1m3mtEfYQt9IMC03Byw2wQKfNG%2Bknkx7nUUrZPk75oaSDAavhSJjmJkwwy2ONQ27PNw3%2FG3Pf0E6TivK6i8X8APpuXD0paoqYZ0W61haCfuuasLnr02L09a%2FuBJZ6j0Eq0PnCiITv5tstI3mUadXlrNOkPWBckA%2BDLvm1cb%2FMCDHtFjIHmhnJLyZYsAnuTsYfzS7z0DqFmk2PjlzuMzrXclwRFg4ILN6cxJbqZhuqnDxzCGb0sAAsJYN72MLpAxkfeED1ZBXpkmE6NKvO8bxg%2Ffyb4fdkntm7aM0MwqJ2swQY6pgGGKF21hLmaxP2xEVcGT7E2dvFpFzJbm2FDF%2B%2FlLDgR5UPlSkp6%2FDP%2B%2FMUxKYdjDi2Qn6mZPtURFJZtHfiSjUnnK7le46dEUqIJeQ%2BZLP0p9iBOKd7bqyKPDrONvpPpu%2BU3bAaUnkpRJWpgrpCMCqUvgbk5fhJzragSCD%2FEsdbZd%2BSHPtct7AUqK%2FDJ5pmlKjLKl%2FqOzGVLcjth4MIdB%2FymaKiJ4UD9&X-Amz-Signature=6986af95fe0b7079818528aed4e3c1e061104adf7f89161fee8b74af4b2c1205&X-Amz-SignedHeaders=host&x-id=GetObject)
