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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNPHDIC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzxGTKBaY6hnh6rB4Yc%2Bj8BSHvyUObEzNni1QosbNtgIhAKWLBi151dD8yjkYg4GNm5BbGIYXRKCJjTLAwexVh1NXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQUV6F0eCE6RRfeQq3AOTz7TuwS6UAD3L3IxHT4Co%2FKmhpn2%2FVmm0Tu2GTvvNHW5qAmwW9Meuz6ArmdWEqpRPz6O46vj1JrcjOeKB1YMGYS14Eyi1JEOsTL0Ep%2FT8ltoaD1fdmj87pXk4QsjbuK2SN4%2BSI6tYgEa%2BYlCNgHTlJt41J7md%2FJ1ypME0l4xnY9pWUTzpLnbFccK1pEQUjrgkKmITyhAyJw%2FVoWOt8VVVD5F3gq%2FA%2BFq4ztn9LUtCD7G%2BYyOswt6ZfGnVWnZrZ0qzbVToAoJYDTncVOtVzSfo92%2FWDI7EzqRl3GgWqXZ1iCK8Qo6fX5wGY6BCZliMcf1a8srdzv9Nu5E66Lu0%2Bud7L%2Btua%2FpdqJmm8dNYckqYv8OOEK84IGS8Q0gjMAUOdE17GGsFX7R7Ks0sgG%2FRl0Ob6nqy6ROG0S4c4igKKzHA%2B6sGtTzmJkpuqiUKagXKULdEjOn8%2FS8oL8qdKbT%2BM%2F%2FbpdrKD0v%2F10ivOdk3LpFSsEzDmITPVVeRoMvQKDWVxaNXGfQnjbYUE%2FfswCW1Hh7lms48060o9Rp94yJpKZVEFzfdQBMast9UM3V2%2BiWX0nLX6rqiM4eUYAn6%2FkpYO96QFfMqORW5euPnhGPEbtZQ%2FYx%2BKBoUrpGKtX9EYDCts6LCBjqkAcXd5LCuT5U3cBDYWx1iO4qHFVBrUHjJ8Iqn7PD9oeMsfMqbCA5FnHKxa8YtRtn2i1%2BN2TdlHLH%2FdsrbHMJmE1RHiDTX9XHoarYEVvvniWAdfCXY0T9sVyZNxr99DVYmMm3NmTCWGmvv7GnWDPEciCJjSrslxoTBByg6Lc5JgDWaemqX8LELAKhEbsIsP1KsCct25EsjReTSBXsryFqOq89QXIPJ&X-Amz-Signature=bc58c2cc5d28062f52300b20fbdeab3c529e93c86d8c2e4f46ae256536014970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNPHDIC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzxGTKBaY6hnh6rB4Yc%2Bj8BSHvyUObEzNni1QosbNtgIhAKWLBi151dD8yjkYg4GNm5BbGIYXRKCJjTLAwexVh1NXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQUV6F0eCE6RRfeQq3AOTz7TuwS6UAD3L3IxHT4Co%2FKmhpn2%2FVmm0Tu2GTvvNHW5qAmwW9Meuz6ArmdWEqpRPz6O46vj1JrcjOeKB1YMGYS14Eyi1JEOsTL0Ep%2FT8ltoaD1fdmj87pXk4QsjbuK2SN4%2BSI6tYgEa%2BYlCNgHTlJt41J7md%2FJ1ypME0l4xnY9pWUTzpLnbFccK1pEQUjrgkKmITyhAyJw%2FVoWOt8VVVD5F3gq%2FA%2BFq4ztn9LUtCD7G%2BYyOswt6ZfGnVWnZrZ0qzbVToAoJYDTncVOtVzSfo92%2FWDI7EzqRl3GgWqXZ1iCK8Qo6fX5wGY6BCZliMcf1a8srdzv9Nu5E66Lu0%2Bud7L%2Btua%2FpdqJmm8dNYckqYv8OOEK84IGS8Q0gjMAUOdE17GGsFX7R7Ks0sgG%2FRl0Ob6nqy6ROG0S4c4igKKzHA%2B6sGtTzmJkpuqiUKagXKULdEjOn8%2FS8oL8qdKbT%2BM%2F%2FbpdrKD0v%2F10ivOdk3LpFSsEzDmITPVVeRoMvQKDWVxaNXGfQnjbYUE%2FfswCW1Hh7lms48060o9Rp94yJpKZVEFzfdQBMast9UM3V2%2BiWX0nLX6rqiM4eUYAn6%2FkpYO96QFfMqORW5euPnhGPEbtZQ%2FYx%2BKBoUrpGKtX9EYDCts6LCBjqkAcXd5LCuT5U3cBDYWx1iO4qHFVBrUHjJ8Iqn7PD9oeMsfMqbCA5FnHKxa8YtRtn2i1%2BN2TdlHLH%2FdsrbHMJmE1RHiDTX9XHoarYEVvvniWAdfCXY0T9sVyZNxr99DVYmMm3NmTCWGmvv7GnWDPEciCJjSrslxoTBByg6Lc5JgDWaemqX8LELAKhEbsIsP1KsCct25EsjReTSBXsryFqOq89QXIPJ&X-Amz-Signature=37d80b302037e8bceed484f2ae331ad9a165399df8003c1323b1d19e1094b08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNPHDIC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzxGTKBaY6hnh6rB4Yc%2Bj8BSHvyUObEzNni1QosbNtgIhAKWLBi151dD8yjkYg4GNm5BbGIYXRKCJjTLAwexVh1NXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQUV6F0eCE6RRfeQq3AOTz7TuwS6UAD3L3IxHT4Co%2FKmhpn2%2FVmm0Tu2GTvvNHW5qAmwW9Meuz6ArmdWEqpRPz6O46vj1JrcjOeKB1YMGYS14Eyi1JEOsTL0Ep%2FT8ltoaD1fdmj87pXk4QsjbuK2SN4%2BSI6tYgEa%2BYlCNgHTlJt41J7md%2FJ1ypME0l4xnY9pWUTzpLnbFccK1pEQUjrgkKmITyhAyJw%2FVoWOt8VVVD5F3gq%2FA%2BFq4ztn9LUtCD7G%2BYyOswt6ZfGnVWnZrZ0qzbVToAoJYDTncVOtVzSfo92%2FWDI7EzqRl3GgWqXZ1iCK8Qo6fX5wGY6BCZliMcf1a8srdzv9Nu5E66Lu0%2Bud7L%2Btua%2FpdqJmm8dNYckqYv8OOEK84IGS8Q0gjMAUOdE17GGsFX7R7Ks0sgG%2FRl0Ob6nqy6ROG0S4c4igKKzHA%2B6sGtTzmJkpuqiUKagXKULdEjOn8%2FS8oL8qdKbT%2BM%2F%2FbpdrKD0v%2F10ivOdk3LpFSsEzDmITPVVeRoMvQKDWVxaNXGfQnjbYUE%2FfswCW1Hh7lms48060o9Rp94yJpKZVEFzfdQBMast9UM3V2%2BiWX0nLX6rqiM4eUYAn6%2FkpYO96QFfMqORW5euPnhGPEbtZQ%2FYx%2BKBoUrpGKtX9EYDCts6LCBjqkAcXd5LCuT5U3cBDYWx1iO4qHFVBrUHjJ8Iqn7PD9oeMsfMqbCA5FnHKxa8YtRtn2i1%2BN2TdlHLH%2FdsrbHMJmE1RHiDTX9XHoarYEVvvniWAdfCXY0T9sVyZNxr99DVYmMm3NmTCWGmvv7GnWDPEciCJjSrslxoTBByg6Lc5JgDWaemqX8LELAKhEbsIsP1KsCct25EsjReTSBXsryFqOq89QXIPJ&X-Amz-Signature=5214a32ed9658957f2193f1c7c1d0c690be341297577ea2abf46a1836ad02e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNPHDIC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzxGTKBaY6hnh6rB4Yc%2Bj8BSHvyUObEzNni1QosbNtgIhAKWLBi151dD8yjkYg4GNm5BbGIYXRKCJjTLAwexVh1NXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQUV6F0eCE6RRfeQq3AOTz7TuwS6UAD3L3IxHT4Co%2FKmhpn2%2FVmm0Tu2GTvvNHW5qAmwW9Meuz6ArmdWEqpRPz6O46vj1JrcjOeKB1YMGYS14Eyi1JEOsTL0Ep%2FT8ltoaD1fdmj87pXk4QsjbuK2SN4%2BSI6tYgEa%2BYlCNgHTlJt41J7md%2FJ1ypME0l4xnY9pWUTzpLnbFccK1pEQUjrgkKmITyhAyJw%2FVoWOt8VVVD5F3gq%2FA%2BFq4ztn9LUtCD7G%2BYyOswt6ZfGnVWnZrZ0qzbVToAoJYDTncVOtVzSfo92%2FWDI7EzqRl3GgWqXZ1iCK8Qo6fX5wGY6BCZliMcf1a8srdzv9Nu5E66Lu0%2Bud7L%2Btua%2FpdqJmm8dNYckqYv8OOEK84IGS8Q0gjMAUOdE17GGsFX7R7Ks0sgG%2FRl0Ob6nqy6ROG0S4c4igKKzHA%2B6sGtTzmJkpuqiUKagXKULdEjOn8%2FS8oL8qdKbT%2BM%2F%2FbpdrKD0v%2F10ivOdk3LpFSsEzDmITPVVeRoMvQKDWVxaNXGfQnjbYUE%2FfswCW1Hh7lms48060o9Rp94yJpKZVEFzfdQBMast9UM3V2%2BiWX0nLX6rqiM4eUYAn6%2FkpYO96QFfMqORW5euPnhGPEbtZQ%2FYx%2BKBoUrpGKtX9EYDCts6LCBjqkAcXd5LCuT5U3cBDYWx1iO4qHFVBrUHjJ8Iqn7PD9oeMsfMqbCA5FnHKxa8YtRtn2i1%2BN2TdlHLH%2FdsrbHMJmE1RHiDTX9XHoarYEVvvniWAdfCXY0T9sVyZNxr99DVYmMm3NmTCWGmvv7GnWDPEciCJjSrslxoTBByg6Lc5JgDWaemqX8LELAKhEbsIsP1KsCct25EsjReTSBXsryFqOq89QXIPJ&X-Amz-Signature=e597d19aacffe77a6a319c55a92e70730083f73da0e5a2f665e40476d223e775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNPHDIC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzxGTKBaY6hnh6rB4Yc%2Bj8BSHvyUObEzNni1QosbNtgIhAKWLBi151dD8yjkYg4GNm5BbGIYXRKCJjTLAwexVh1NXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQUV6F0eCE6RRfeQq3AOTz7TuwS6UAD3L3IxHT4Co%2FKmhpn2%2FVmm0Tu2GTvvNHW5qAmwW9Meuz6ArmdWEqpRPz6O46vj1JrcjOeKB1YMGYS14Eyi1JEOsTL0Ep%2FT8ltoaD1fdmj87pXk4QsjbuK2SN4%2BSI6tYgEa%2BYlCNgHTlJt41J7md%2FJ1ypME0l4xnY9pWUTzpLnbFccK1pEQUjrgkKmITyhAyJw%2FVoWOt8VVVD5F3gq%2FA%2BFq4ztn9LUtCD7G%2BYyOswt6ZfGnVWnZrZ0qzbVToAoJYDTncVOtVzSfo92%2FWDI7EzqRl3GgWqXZ1iCK8Qo6fX5wGY6BCZliMcf1a8srdzv9Nu5E66Lu0%2Bud7L%2Btua%2FpdqJmm8dNYckqYv8OOEK84IGS8Q0gjMAUOdE17GGsFX7R7Ks0sgG%2FRl0Ob6nqy6ROG0S4c4igKKzHA%2B6sGtTzmJkpuqiUKagXKULdEjOn8%2FS8oL8qdKbT%2BM%2F%2FbpdrKD0v%2F10ivOdk3LpFSsEzDmITPVVeRoMvQKDWVxaNXGfQnjbYUE%2FfswCW1Hh7lms48060o9Rp94yJpKZVEFzfdQBMast9UM3V2%2BiWX0nLX6rqiM4eUYAn6%2FkpYO96QFfMqORW5euPnhGPEbtZQ%2FYx%2BKBoUrpGKtX9EYDCts6LCBjqkAcXd5LCuT5U3cBDYWx1iO4qHFVBrUHjJ8Iqn7PD9oeMsfMqbCA5FnHKxa8YtRtn2i1%2BN2TdlHLH%2FdsrbHMJmE1RHiDTX9XHoarYEVvvniWAdfCXY0T9sVyZNxr99DVYmMm3NmTCWGmvv7GnWDPEciCJjSrslxoTBByg6Lc5JgDWaemqX8LELAKhEbsIsP1KsCct25EsjReTSBXsryFqOq89QXIPJ&X-Amz-Signature=91ba24df4c5dcff8fed9ba0d4ad2e224d2d2d9780b6ae65afa818d592a9d768c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNPHDIC%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzxGTKBaY6hnh6rB4Yc%2Bj8BSHvyUObEzNni1QosbNtgIhAKWLBi151dD8yjkYg4GNm5BbGIYXRKCJjTLAwexVh1NXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEQUV6F0eCE6RRfeQq3AOTz7TuwS6UAD3L3IxHT4Co%2FKmhpn2%2FVmm0Tu2GTvvNHW5qAmwW9Meuz6ArmdWEqpRPz6O46vj1JrcjOeKB1YMGYS14Eyi1JEOsTL0Ep%2FT8ltoaD1fdmj87pXk4QsjbuK2SN4%2BSI6tYgEa%2BYlCNgHTlJt41J7md%2FJ1ypME0l4xnY9pWUTzpLnbFccK1pEQUjrgkKmITyhAyJw%2FVoWOt8VVVD5F3gq%2FA%2BFq4ztn9LUtCD7G%2BYyOswt6ZfGnVWnZrZ0qzbVToAoJYDTncVOtVzSfo92%2FWDI7EzqRl3GgWqXZ1iCK8Qo6fX5wGY6BCZliMcf1a8srdzv9Nu5E66Lu0%2Bud7L%2Btua%2FpdqJmm8dNYckqYv8OOEK84IGS8Q0gjMAUOdE17GGsFX7R7Ks0sgG%2FRl0Ob6nqy6ROG0S4c4igKKzHA%2B6sGtTzmJkpuqiUKagXKULdEjOn8%2FS8oL8qdKbT%2BM%2F%2FbpdrKD0v%2F10ivOdk3LpFSsEzDmITPVVeRoMvQKDWVxaNXGfQnjbYUE%2FfswCW1Hh7lms48060o9Rp94yJpKZVEFzfdQBMast9UM3V2%2BiWX0nLX6rqiM4eUYAn6%2FkpYO96QFfMqORW5euPnhGPEbtZQ%2FYx%2BKBoUrpGKtX9EYDCts6LCBjqkAcXd5LCuT5U3cBDYWx1iO4qHFVBrUHjJ8Iqn7PD9oeMsfMqbCA5FnHKxa8YtRtn2i1%2BN2TdlHLH%2FdsrbHMJmE1RHiDTX9XHoarYEVvvniWAdfCXY0T9sVyZNxr99DVYmMm3NmTCWGmvv7GnWDPEciCJjSrslxoTBByg6Lc5JgDWaemqX8LELAKhEbsIsP1KsCct25EsjReTSBXsryFqOq89QXIPJ&X-Amz-Signature=8aa70874892c8ebdbf7434047f593f9fd438bf70234a9bbc8250aa98f3b33ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
