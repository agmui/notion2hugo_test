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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHYUXUJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5zsa5vz%2F9VBcLbrOfSxcZ4iu2a%2BqwMlM0ZOGDhAYAAiBNQRtAJxlQaWP198dECnpo6XU%2BdyFQst1HMf%2ByVrIkjSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvdiZFBDirbrYoD%2FKtwDK%2FmF%2BEDJLxZFLs%2BskTUCy9tonVYpvEo7SWwDnEN%2FhALVSqKF57RHrpj02vwTz357xl7nhYV3K8u4e5WPLNK95ELnfr35sojp3U3iNMYDmR4Jo4IJNTBmO08nEB%2FAYfAm6%2Fpk1JXM3hLuOBjyS35RLpgUlCZMevuhCs%2FpBgNC3cpWNMlMiNJnIqatzfs9tbIEge1Ag5Jtd9Zl4TYCAtA617o0VeM%2B2oLQG6ltk9iUv6E0belIm94Ef3Zv%2Bv3BebrfS0IApRttmwwlGb7JzIckIl9CNi66g58R114wuAluU8mPHCOHVdRBh%2FSuZmuiGePeZ%2F%2B5CsCVc09KHMszwdRgpq5g%2BPB5HNBRmGNIumgo0ONHIYTo1oqMyL3GUO8cIqZ2ZqDnU6Wsxy3dSqFE19DeMKXG%2Bcn3HIJXKvqxhc6Q%2BPm297nJf9hO%2BWnufd2Ra83mnF9Xl%2FzGWxt0ww6o0o%2Fsst64wqtxf881Qik%2FiGyrYaXqjL%2BSY9FSI2i4kgSULYBomJW08SwxgAOHkoaQHjnUM3DnnQl%2F4uY5Gi7L0Hxq9pKmmXtrEXj9fD7z3lyRR5G8cHWsQQNROyVR701VFQKhznbbHAOC9vL4fZuIhJvcyco9MlFAw%2BXRTJshCLcwt9abwgY6pgHqppf6xor22T%2FrbcXW5wVbWk1Hin8iNkEuscIGt0O%2BYTgt81DFZuCOBBwxN87xM%2Fw78iz7TcuJDzUtZ5r96nEtx2jF7wIcoluB2IAi9rN3SLzt8F558L9FeRHX2MPMcnJV6kUwNZZPhGAJnQxMrmicaK4gqUO%2BQu9w2%2FRx76Rh%2B5NKlDXMht5N1zsBkhoiUYKNZxKVI6ze9z1AdHvA0HxU9tSQZXu5&X-Amz-Signature=75c5927fb5f5ea1d6a076ac4b11c77bf18f7187a749ed4ae9c172231c98d64a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHYUXUJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5zsa5vz%2F9VBcLbrOfSxcZ4iu2a%2BqwMlM0ZOGDhAYAAiBNQRtAJxlQaWP198dECnpo6XU%2BdyFQst1HMf%2ByVrIkjSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvdiZFBDirbrYoD%2FKtwDK%2FmF%2BEDJLxZFLs%2BskTUCy9tonVYpvEo7SWwDnEN%2FhALVSqKF57RHrpj02vwTz357xl7nhYV3K8u4e5WPLNK95ELnfr35sojp3U3iNMYDmR4Jo4IJNTBmO08nEB%2FAYfAm6%2Fpk1JXM3hLuOBjyS35RLpgUlCZMevuhCs%2FpBgNC3cpWNMlMiNJnIqatzfs9tbIEge1Ag5Jtd9Zl4TYCAtA617o0VeM%2B2oLQG6ltk9iUv6E0belIm94Ef3Zv%2Bv3BebrfS0IApRttmwwlGb7JzIckIl9CNi66g58R114wuAluU8mPHCOHVdRBh%2FSuZmuiGePeZ%2F%2B5CsCVc09KHMszwdRgpq5g%2BPB5HNBRmGNIumgo0ONHIYTo1oqMyL3GUO8cIqZ2ZqDnU6Wsxy3dSqFE19DeMKXG%2Bcn3HIJXKvqxhc6Q%2BPm297nJf9hO%2BWnufd2Ra83mnF9Xl%2FzGWxt0ww6o0o%2Fsst64wqtxf881Qik%2FiGyrYaXqjL%2BSY9FSI2i4kgSULYBomJW08SwxgAOHkoaQHjnUM3DnnQl%2F4uY5Gi7L0Hxq9pKmmXtrEXj9fD7z3lyRR5G8cHWsQQNROyVR701VFQKhznbbHAOC9vL4fZuIhJvcyco9MlFAw%2BXRTJshCLcwt9abwgY6pgHqppf6xor22T%2FrbcXW5wVbWk1Hin8iNkEuscIGt0O%2BYTgt81DFZuCOBBwxN87xM%2Fw78iz7TcuJDzUtZ5r96nEtx2jF7wIcoluB2IAi9rN3SLzt8F558L9FeRHX2MPMcnJV6kUwNZZPhGAJnQxMrmicaK4gqUO%2BQu9w2%2FRx76Rh%2B5NKlDXMht5N1zsBkhoiUYKNZxKVI6ze9z1AdHvA0HxU9tSQZXu5&X-Amz-Signature=f108505f7b6e609ef09163d9b42a1e38de595d36eedc8b6810a257daf2d422b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHYUXUJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5zsa5vz%2F9VBcLbrOfSxcZ4iu2a%2BqwMlM0ZOGDhAYAAiBNQRtAJxlQaWP198dECnpo6XU%2BdyFQst1HMf%2ByVrIkjSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvdiZFBDirbrYoD%2FKtwDK%2FmF%2BEDJLxZFLs%2BskTUCy9tonVYpvEo7SWwDnEN%2FhALVSqKF57RHrpj02vwTz357xl7nhYV3K8u4e5WPLNK95ELnfr35sojp3U3iNMYDmR4Jo4IJNTBmO08nEB%2FAYfAm6%2Fpk1JXM3hLuOBjyS35RLpgUlCZMevuhCs%2FpBgNC3cpWNMlMiNJnIqatzfs9tbIEge1Ag5Jtd9Zl4TYCAtA617o0VeM%2B2oLQG6ltk9iUv6E0belIm94Ef3Zv%2Bv3BebrfS0IApRttmwwlGb7JzIckIl9CNi66g58R114wuAluU8mPHCOHVdRBh%2FSuZmuiGePeZ%2F%2B5CsCVc09KHMszwdRgpq5g%2BPB5HNBRmGNIumgo0ONHIYTo1oqMyL3GUO8cIqZ2ZqDnU6Wsxy3dSqFE19DeMKXG%2Bcn3HIJXKvqxhc6Q%2BPm297nJf9hO%2BWnufd2Ra83mnF9Xl%2FzGWxt0ww6o0o%2Fsst64wqtxf881Qik%2FiGyrYaXqjL%2BSY9FSI2i4kgSULYBomJW08SwxgAOHkoaQHjnUM3DnnQl%2F4uY5Gi7L0Hxq9pKmmXtrEXj9fD7z3lyRR5G8cHWsQQNROyVR701VFQKhznbbHAOC9vL4fZuIhJvcyco9MlFAw%2BXRTJshCLcwt9abwgY6pgHqppf6xor22T%2FrbcXW5wVbWk1Hin8iNkEuscIGt0O%2BYTgt81DFZuCOBBwxN87xM%2Fw78iz7TcuJDzUtZ5r96nEtx2jF7wIcoluB2IAi9rN3SLzt8F558L9FeRHX2MPMcnJV6kUwNZZPhGAJnQxMrmicaK4gqUO%2BQu9w2%2FRx76Rh%2B5NKlDXMht5N1zsBkhoiUYKNZxKVI6ze9z1AdHvA0HxU9tSQZXu5&X-Amz-Signature=0fc1acb36425c73605dbe1843c08f9df74b949f0af41f7325147215d159f419d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHYUXUJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5zsa5vz%2F9VBcLbrOfSxcZ4iu2a%2BqwMlM0ZOGDhAYAAiBNQRtAJxlQaWP198dECnpo6XU%2BdyFQst1HMf%2ByVrIkjSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvdiZFBDirbrYoD%2FKtwDK%2FmF%2BEDJLxZFLs%2BskTUCy9tonVYpvEo7SWwDnEN%2FhALVSqKF57RHrpj02vwTz357xl7nhYV3K8u4e5WPLNK95ELnfr35sojp3U3iNMYDmR4Jo4IJNTBmO08nEB%2FAYfAm6%2Fpk1JXM3hLuOBjyS35RLpgUlCZMevuhCs%2FpBgNC3cpWNMlMiNJnIqatzfs9tbIEge1Ag5Jtd9Zl4TYCAtA617o0VeM%2B2oLQG6ltk9iUv6E0belIm94Ef3Zv%2Bv3BebrfS0IApRttmwwlGb7JzIckIl9CNi66g58R114wuAluU8mPHCOHVdRBh%2FSuZmuiGePeZ%2F%2B5CsCVc09KHMszwdRgpq5g%2BPB5HNBRmGNIumgo0ONHIYTo1oqMyL3GUO8cIqZ2ZqDnU6Wsxy3dSqFE19DeMKXG%2Bcn3HIJXKvqxhc6Q%2BPm297nJf9hO%2BWnufd2Ra83mnF9Xl%2FzGWxt0ww6o0o%2Fsst64wqtxf881Qik%2FiGyrYaXqjL%2BSY9FSI2i4kgSULYBomJW08SwxgAOHkoaQHjnUM3DnnQl%2F4uY5Gi7L0Hxq9pKmmXtrEXj9fD7z3lyRR5G8cHWsQQNROyVR701VFQKhznbbHAOC9vL4fZuIhJvcyco9MlFAw%2BXRTJshCLcwt9abwgY6pgHqppf6xor22T%2FrbcXW5wVbWk1Hin8iNkEuscIGt0O%2BYTgt81DFZuCOBBwxN87xM%2Fw78iz7TcuJDzUtZ5r96nEtx2jF7wIcoluB2IAi9rN3SLzt8F558L9FeRHX2MPMcnJV6kUwNZZPhGAJnQxMrmicaK4gqUO%2BQu9w2%2FRx76Rh%2B5NKlDXMht5N1zsBkhoiUYKNZxKVI6ze9z1AdHvA0HxU9tSQZXu5&X-Amz-Signature=2928cd0cb0b74da82726bd9dcc81cbd332782b184b23962c431da8521a8b7482&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHYUXUJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5zsa5vz%2F9VBcLbrOfSxcZ4iu2a%2BqwMlM0ZOGDhAYAAiBNQRtAJxlQaWP198dECnpo6XU%2BdyFQst1HMf%2ByVrIkjSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvdiZFBDirbrYoD%2FKtwDK%2FmF%2BEDJLxZFLs%2BskTUCy9tonVYpvEo7SWwDnEN%2FhALVSqKF57RHrpj02vwTz357xl7nhYV3K8u4e5WPLNK95ELnfr35sojp3U3iNMYDmR4Jo4IJNTBmO08nEB%2FAYfAm6%2Fpk1JXM3hLuOBjyS35RLpgUlCZMevuhCs%2FpBgNC3cpWNMlMiNJnIqatzfs9tbIEge1Ag5Jtd9Zl4TYCAtA617o0VeM%2B2oLQG6ltk9iUv6E0belIm94Ef3Zv%2Bv3BebrfS0IApRttmwwlGb7JzIckIl9CNi66g58R114wuAluU8mPHCOHVdRBh%2FSuZmuiGePeZ%2F%2B5CsCVc09KHMszwdRgpq5g%2BPB5HNBRmGNIumgo0ONHIYTo1oqMyL3GUO8cIqZ2ZqDnU6Wsxy3dSqFE19DeMKXG%2Bcn3HIJXKvqxhc6Q%2BPm297nJf9hO%2BWnufd2Ra83mnF9Xl%2FzGWxt0ww6o0o%2Fsst64wqtxf881Qik%2FiGyrYaXqjL%2BSY9FSI2i4kgSULYBomJW08SwxgAOHkoaQHjnUM3DnnQl%2F4uY5Gi7L0Hxq9pKmmXtrEXj9fD7z3lyRR5G8cHWsQQNROyVR701VFQKhznbbHAOC9vL4fZuIhJvcyco9MlFAw%2BXRTJshCLcwt9abwgY6pgHqppf6xor22T%2FrbcXW5wVbWk1Hin8iNkEuscIGt0O%2BYTgt81DFZuCOBBwxN87xM%2Fw78iz7TcuJDzUtZ5r96nEtx2jF7wIcoluB2IAi9rN3SLzt8F558L9FeRHX2MPMcnJV6kUwNZZPhGAJnQxMrmicaK4gqUO%2BQu9w2%2FRx76Rh%2B5NKlDXMht5N1zsBkhoiUYKNZxKVI6ze9z1AdHvA0HxU9tSQZXu5&X-Amz-Signature=be94adebf3c62111125d53cf0ccb32161648c64a0991a5c7661854a993d4c89e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHYUXUJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5zsa5vz%2F9VBcLbrOfSxcZ4iu2a%2BqwMlM0ZOGDhAYAAiBNQRtAJxlQaWP198dECnpo6XU%2BdyFQst1HMf%2ByVrIkjSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXvdiZFBDirbrYoD%2FKtwDK%2FmF%2BEDJLxZFLs%2BskTUCy9tonVYpvEo7SWwDnEN%2FhALVSqKF57RHrpj02vwTz357xl7nhYV3K8u4e5WPLNK95ELnfr35sojp3U3iNMYDmR4Jo4IJNTBmO08nEB%2FAYfAm6%2Fpk1JXM3hLuOBjyS35RLpgUlCZMevuhCs%2FpBgNC3cpWNMlMiNJnIqatzfs9tbIEge1Ag5Jtd9Zl4TYCAtA617o0VeM%2B2oLQG6ltk9iUv6E0belIm94Ef3Zv%2Bv3BebrfS0IApRttmwwlGb7JzIckIl9CNi66g58R114wuAluU8mPHCOHVdRBh%2FSuZmuiGePeZ%2F%2B5CsCVc09KHMszwdRgpq5g%2BPB5HNBRmGNIumgo0ONHIYTo1oqMyL3GUO8cIqZ2ZqDnU6Wsxy3dSqFE19DeMKXG%2Bcn3HIJXKvqxhc6Q%2BPm297nJf9hO%2BWnufd2Ra83mnF9Xl%2FzGWxt0ww6o0o%2Fsst64wqtxf881Qik%2FiGyrYaXqjL%2BSY9FSI2i4kgSULYBomJW08SwxgAOHkoaQHjnUM3DnnQl%2F4uY5Gi7L0Hxq9pKmmXtrEXj9fD7z3lyRR5G8cHWsQQNROyVR701VFQKhznbbHAOC9vL4fZuIhJvcyco9MlFAw%2BXRTJshCLcwt9abwgY6pgHqppf6xor22T%2FrbcXW5wVbWk1Hin8iNkEuscIGt0O%2BYTgt81DFZuCOBBwxN87xM%2Fw78iz7TcuJDzUtZ5r96nEtx2jF7wIcoluB2IAi9rN3SLzt8F558L9FeRHX2MPMcnJV6kUwNZZPhGAJnQxMrmicaK4gqUO%2BQu9w2%2FRx76Rh%2B5NKlDXMht5N1zsBkhoiUYKNZxKVI6ze9z1AdHvA0HxU9tSQZXu5&X-Amz-Signature=e7efc0ac07e974c92c5fd5c6ae84f0dc638cc3df983ca9e122df2687756348bb&X-Amz-SignedHeaders=host&x-id=GetObject)
