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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDWKDTJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHK85I4TSgJq7zA%2B0GWxqK6JuyHRuicJhnN90%2Fi3TLshAiEAz354898fxJU5WNw%2FHmLFmaPA6OvmUF%2B7RA7uKx4ovLIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHX78KeeaA2Lg23SLyrcA6AD4WTvlJHHGDsR5OvlnCxpZRoKmWBL8F9JciPPTJkOLNUPjvjCgU3lPcPHICxi6U1LM5qvGhdYym2tsVD2JVV5qOUcI3WBl43%2BJL%2BnaYkOkOd1RdWHUZc1S6fftpLxkjz8Hv9WG8vgcMx%2FhPhsUStZMpdkwTBLH8xUrwRmMfVyTDLoT%2BNZ6WoZZ8sMO6F9onNR9tnLsPvxKQhApX5BUPcG%2FWkgTnFe6ShYaWxtMVdcju%2FkWEEpmifIzSJUj0sUz2MmMeaIdzSMkYqgT0C3%2BnxzGzrMtVZyb4aPr%2FyEKMtmMR%2Bn7s77IEmqNtp7lMF6oqqPqk8J8uCOngu5FeRbdQ5ZILQ76UsZtXF0GCqyy1K1g5IvqMmwzqK45iJxnPQUeTgeKRRG2K%2B14KofcKFwq%2Fnxq7Sjzy0f5WtPPusgIP3y6xbr0bnffZJKHPjcBqYR77sE%2BS5Ro3TN8IBU241gGn53pvbXuAc9vdw%2Fnjh5ekO%2F%2Fp559hntY75eivvhO5HvZNlisw5dPNJKYP%2Fba4FdZ3aQ1ASa6wDcRwRAjqkW5eufGQQ6P4Ob56XRCRwLPZROalNo2ceGMwefl%2FKJV78Q8JmbiyaZ3ZJ8TLEd9o0KcwlzRnKsJL%2FWAuK2qlqsMPfehcIGOqUBRgQ2cxw82XvhNw6APbLy4qUuNMcbDJhtCB0PEYSxCD9bsgL4eyaahEH4kXC22K3i2cEgaItPGxzcmI3YhOu7wqBjH%2BE2wZOb2pMTuCqjNSqbLCIsqMtHvZ4C9K25%2Bh3iW%2F7iaYS3QXZmAXD0VIKcJOolt2lNUcaLHhsAqFWUHJt5ei51npxB2LxWXAMjMmh7BtK4kvtUcmVbyYH6BJtYeifkf%2FGB&X-Amz-Signature=13543a24e4a34ee0a57cb5db6dc52e282b34d3b0e9a31b2541b9f06747cb8049&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDWKDTJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHK85I4TSgJq7zA%2B0GWxqK6JuyHRuicJhnN90%2Fi3TLshAiEAz354898fxJU5WNw%2FHmLFmaPA6OvmUF%2B7RA7uKx4ovLIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHX78KeeaA2Lg23SLyrcA6AD4WTvlJHHGDsR5OvlnCxpZRoKmWBL8F9JciPPTJkOLNUPjvjCgU3lPcPHICxi6U1LM5qvGhdYym2tsVD2JVV5qOUcI3WBl43%2BJL%2BnaYkOkOd1RdWHUZc1S6fftpLxkjz8Hv9WG8vgcMx%2FhPhsUStZMpdkwTBLH8xUrwRmMfVyTDLoT%2BNZ6WoZZ8sMO6F9onNR9tnLsPvxKQhApX5BUPcG%2FWkgTnFe6ShYaWxtMVdcju%2FkWEEpmifIzSJUj0sUz2MmMeaIdzSMkYqgT0C3%2BnxzGzrMtVZyb4aPr%2FyEKMtmMR%2Bn7s77IEmqNtp7lMF6oqqPqk8J8uCOngu5FeRbdQ5ZILQ76UsZtXF0GCqyy1K1g5IvqMmwzqK45iJxnPQUeTgeKRRG2K%2B14KofcKFwq%2Fnxq7Sjzy0f5WtPPusgIP3y6xbr0bnffZJKHPjcBqYR77sE%2BS5Ro3TN8IBU241gGn53pvbXuAc9vdw%2Fnjh5ekO%2F%2Fp559hntY75eivvhO5HvZNlisw5dPNJKYP%2Fba4FdZ3aQ1ASa6wDcRwRAjqkW5eufGQQ6P4Ob56XRCRwLPZROalNo2ceGMwefl%2FKJV78Q8JmbiyaZ3ZJ8TLEd9o0KcwlzRnKsJL%2FWAuK2qlqsMPfehcIGOqUBRgQ2cxw82XvhNw6APbLy4qUuNMcbDJhtCB0PEYSxCD9bsgL4eyaahEH4kXC22K3i2cEgaItPGxzcmI3YhOu7wqBjH%2BE2wZOb2pMTuCqjNSqbLCIsqMtHvZ4C9K25%2Bh3iW%2F7iaYS3QXZmAXD0VIKcJOolt2lNUcaLHhsAqFWUHJt5ei51npxB2LxWXAMjMmh7BtK4kvtUcmVbyYH6BJtYeifkf%2FGB&X-Amz-Signature=2aa3f1c3b5fc80302a2351f62df5629a9a1aa8d48557cb33eaf7e49d908da4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDWKDTJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHK85I4TSgJq7zA%2B0GWxqK6JuyHRuicJhnN90%2Fi3TLshAiEAz354898fxJU5WNw%2FHmLFmaPA6OvmUF%2B7RA7uKx4ovLIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHX78KeeaA2Lg23SLyrcA6AD4WTvlJHHGDsR5OvlnCxpZRoKmWBL8F9JciPPTJkOLNUPjvjCgU3lPcPHICxi6U1LM5qvGhdYym2tsVD2JVV5qOUcI3WBl43%2BJL%2BnaYkOkOd1RdWHUZc1S6fftpLxkjz8Hv9WG8vgcMx%2FhPhsUStZMpdkwTBLH8xUrwRmMfVyTDLoT%2BNZ6WoZZ8sMO6F9onNR9tnLsPvxKQhApX5BUPcG%2FWkgTnFe6ShYaWxtMVdcju%2FkWEEpmifIzSJUj0sUz2MmMeaIdzSMkYqgT0C3%2BnxzGzrMtVZyb4aPr%2FyEKMtmMR%2Bn7s77IEmqNtp7lMF6oqqPqk8J8uCOngu5FeRbdQ5ZILQ76UsZtXF0GCqyy1K1g5IvqMmwzqK45iJxnPQUeTgeKRRG2K%2B14KofcKFwq%2Fnxq7Sjzy0f5WtPPusgIP3y6xbr0bnffZJKHPjcBqYR77sE%2BS5Ro3TN8IBU241gGn53pvbXuAc9vdw%2Fnjh5ekO%2F%2Fp559hntY75eivvhO5HvZNlisw5dPNJKYP%2Fba4FdZ3aQ1ASa6wDcRwRAjqkW5eufGQQ6P4Ob56XRCRwLPZROalNo2ceGMwefl%2FKJV78Q8JmbiyaZ3ZJ8TLEd9o0KcwlzRnKsJL%2FWAuK2qlqsMPfehcIGOqUBRgQ2cxw82XvhNw6APbLy4qUuNMcbDJhtCB0PEYSxCD9bsgL4eyaahEH4kXC22K3i2cEgaItPGxzcmI3YhOu7wqBjH%2BE2wZOb2pMTuCqjNSqbLCIsqMtHvZ4C9K25%2Bh3iW%2F7iaYS3QXZmAXD0VIKcJOolt2lNUcaLHhsAqFWUHJt5ei51npxB2LxWXAMjMmh7BtK4kvtUcmVbyYH6BJtYeifkf%2FGB&X-Amz-Signature=037d8ce605577f87ad7c808c87dc9e120404e71e1055a2e827ff4765b94a303d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDWKDTJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHK85I4TSgJq7zA%2B0GWxqK6JuyHRuicJhnN90%2Fi3TLshAiEAz354898fxJU5WNw%2FHmLFmaPA6OvmUF%2B7RA7uKx4ovLIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHX78KeeaA2Lg23SLyrcA6AD4WTvlJHHGDsR5OvlnCxpZRoKmWBL8F9JciPPTJkOLNUPjvjCgU3lPcPHICxi6U1LM5qvGhdYym2tsVD2JVV5qOUcI3WBl43%2BJL%2BnaYkOkOd1RdWHUZc1S6fftpLxkjz8Hv9WG8vgcMx%2FhPhsUStZMpdkwTBLH8xUrwRmMfVyTDLoT%2BNZ6WoZZ8sMO6F9onNR9tnLsPvxKQhApX5BUPcG%2FWkgTnFe6ShYaWxtMVdcju%2FkWEEpmifIzSJUj0sUz2MmMeaIdzSMkYqgT0C3%2BnxzGzrMtVZyb4aPr%2FyEKMtmMR%2Bn7s77IEmqNtp7lMF6oqqPqk8J8uCOngu5FeRbdQ5ZILQ76UsZtXF0GCqyy1K1g5IvqMmwzqK45iJxnPQUeTgeKRRG2K%2B14KofcKFwq%2Fnxq7Sjzy0f5WtPPusgIP3y6xbr0bnffZJKHPjcBqYR77sE%2BS5Ro3TN8IBU241gGn53pvbXuAc9vdw%2Fnjh5ekO%2F%2Fp559hntY75eivvhO5HvZNlisw5dPNJKYP%2Fba4FdZ3aQ1ASa6wDcRwRAjqkW5eufGQQ6P4Ob56XRCRwLPZROalNo2ceGMwefl%2FKJV78Q8JmbiyaZ3ZJ8TLEd9o0KcwlzRnKsJL%2FWAuK2qlqsMPfehcIGOqUBRgQ2cxw82XvhNw6APbLy4qUuNMcbDJhtCB0PEYSxCD9bsgL4eyaahEH4kXC22K3i2cEgaItPGxzcmI3YhOu7wqBjH%2BE2wZOb2pMTuCqjNSqbLCIsqMtHvZ4C9K25%2Bh3iW%2F7iaYS3QXZmAXD0VIKcJOolt2lNUcaLHhsAqFWUHJt5ei51npxB2LxWXAMjMmh7BtK4kvtUcmVbyYH6BJtYeifkf%2FGB&X-Amz-Signature=7987c6591ed52da455841816699b12cc4d291b8514a10f6e73999dbd307f44ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDWKDTJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHK85I4TSgJq7zA%2B0GWxqK6JuyHRuicJhnN90%2Fi3TLshAiEAz354898fxJU5WNw%2FHmLFmaPA6OvmUF%2B7RA7uKx4ovLIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHX78KeeaA2Lg23SLyrcA6AD4WTvlJHHGDsR5OvlnCxpZRoKmWBL8F9JciPPTJkOLNUPjvjCgU3lPcPHICxi6U1LM5qvGhdYym2tsVD2JVV5qOUcI3WBl43%2BJL%2BnaYkOkOd1RdWHUZc1S6fftpLxkjz8Hv9WG8vgcMx%2FhPhsUStZMpdkwTBLH8xUrwRmMfVyTDLoT%2BNZ6WoZZ8sMO6F9onNR9tnLsPvxKQhApX5BUPcG%2FWkgTnFe6ShYaWxtMVdcju%2FkWEEpmifIzSJUj0sUz2MmMeaIdzSMkYqgT0C3%2BnxzGzrMtVZyb4aPr%2FyEKMtmMR%2Bn7s77IEmqNtp7lMF6oqqPqk8J8uCOngu5FeRbdQ5ZILQ76UsZtXF0GCqyy1K1g5IvqMmwzqK45iJxnPQUeTgeKRRG2K%2B14KofcKFwq%2Fnxq7Sjzy0f5WtPPusgIP3y6xbr0bnffZJKHPjcBqYR77sE%2BS5Ro3TN8IBU241gGn53pvbXuAc9vdw%2Fnjh5ekO%2F%2Fp559hntY75eivvhO5HvZNlisw5dPNJKYP%2Fba4FdZ3aQ1ASa6wDcRwRAjqkW5eufGQQ6P4Ob56XRCRwLPZROalNo2ceGMwefl%2FKJV78Q8JmbiyaZ3ZJ8TLEd9o0KcwlzRnKsJL%2FWAuK2qlqsMPfehcIGOqUBRgQ2cxw82XvhNw6APbLy4qUuNMcbDJhtCB0PEYSxCD9bsgL4eyaahEH4kXC22K3i2cEgaItPGxzcmI3YhOu7wqBjH%2BE2wZOb2pMTuCqjNSqbLCIsqMtHvZ4C9K25%2Bh3iW%2F7iaYS3QXZmAXD0VIKcJOolt2lNUcaLHhsAqFWUHJt5ei51npxB2LxWXAMjMmh7BtK4kvtUcmVbyYH6BJtYeifkf%2FGB&X-Amz-Signature=d9c8f18204237a848ca0ab9fb940d2d104dd8182cda1b991a3af1547de68a705&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCDWKDTJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHK85I4TSgJq7zA%2B0GWxqK6JuyHRuicJhnN90%2Fi3TLshAiEAz354898fxJU5WNw%2FHmLFmaPA6OvmUF%2B7RA7uKx4ovLIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHX78KeeaA2Lg23SLyrcA6AD4WTvlJHHGDsR5OvlnCxpZRoKmWBL8F9JciPPTJkOLNUPjvjCgU3lPcPHICxi6U1LM5qvGhdYym2tsVD2JVV5qOUcI3WBl43%2BJL%2BnaYkOkOd1RdWHUZc1S6fftpLxkjz8Hv9WG8vgcMx%2FhPhsUStZMpdkwTBLH8xUrwRmMfVyTDLoT%2BNZ6WoZZ8sMO6F9onNR9tnLsPvxKQhApX5BUPcG%2FWkgTnFe6ShYaWxtMVdcju%2FkWEEpmifIzSJUj0sUz2MmMeaIdzSMkYqgT0C3%2BnxzGzrMtVZyb4aPr%2FyEKMtmMR%2Bn7s77IEmqNtp7lMF6oqqPqk8J8uCOngu5FeRbdQ5ZILQ76UsZtXF0GCqyy1K1g5IvqMmwzqK45iJxnPQUeTgeKRRG2K%2B14KofcKFwq%2Fnxq7Sjzy0f5WtPPusgIP3y6xbr0bnffZJKHPjcBqYR77sE%2BS5Ro3TN8IBU241gGn53pvbXuAc9vdw%2Fnjh5ekO%2F%2Fp559hntY75eivvhO5HvZNlisw5dPNJKYP%2Fba4FdZ3aQ1ASa6wDcRwRAjqkW5eufGQQ6P4Ob56XRCRwLPZROalNo2ceGMwefl%2FKJV78Q8JmbiyaZ3ZJ8TLEd9o0KcwlzRnKsJL%2FWAuK2qlqsMPfehcIGOqUBRgQ2cxw82XvhNw6APbLy4qUuNMcbDJhtCB0PEYSxCD9bsgL4eyaahEH4kXC22K3i2cEgaItPGxzcmI3YhOu7wqBjH%2BE2wZOb2pMTuCqjNSqbLCIsqMtHvZ4C9K25%2Bh3iW%2F7iaYS3QXZmAXD0VIKcJOolt2lNUcaLHhsAqFWUHJt5ei51npxB2LxWXAMjMmh7BtK4kvtUcmVbyYH6BJtYeifkf%2FGB&X-Amz-Signature=d71cf46a0fde5a92edcfb2eee93ec6d51740e7d1b9522f39fc9166a8dc59a76a&X-Amz-SignedHeaders=host&x-id=GetObject)
