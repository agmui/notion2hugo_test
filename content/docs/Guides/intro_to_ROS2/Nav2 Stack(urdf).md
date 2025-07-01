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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRU4FYB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GiqoODPn%2BwL3xIvW301RBB80LqbPtyJ0kUdOLxwddwIhAMDVftY2lgsGEGSOQkxSMYqzcEE%2FaFKBHQ5Jx0zXAc6oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2BlsJEGHM40usaycq3AOHwYG%2Flq9uj5g7Wzg80pQgc1QyrBFzGNQjoH7Z%2B7HvMfXhe4xS%2FybZR85zVNooFJ2TcIP5ofFW6e6wJhuako9Mn5r8c5Mf%2F%2F%2BFtlm7R%2BtuKqoA5D1Nxk5FQZcN6NDooUTyA9R92ULXJsiSeMnCx0dFX7VG5e4KledTcxf%2FMckd6onWfhQpaAbNFJnGkeJCKXvijQtbrwXqjM7lTRmyoO4JyPI32mrxifwFqD6SiN8kgTR8bBU2arIizDMghQfvtyU%2BxjXZp5LplZ2bDPiQ8l65lL27MLUvHrmhw6hg4CWnc%2ByMdit7lpvGWq12d1KI9fblGBjxgoryPgVkbQJ%2Bssu6OKUB2JoMx3bMPYUx3N3RJMXyWJNh2y4aD64BRGF7oCSffnlJE0D4xfglJ%2F%2FjVZhqzN72DrdYJdEKNGpZLy3Ww3qqY1esr%2B3hpShsn422hBSrJEVWYlDJF81ZZiPK%2B%2BSHhRpLery6aG%2Fo72Ka6i3AcB3nXpbgx2h3EXm4%2Bolzxve0PDX8WKwi4vIL4ue1Bpy9Va6tP278vjmZ%2FNvHAlPy0%2BiJvdU6atb3WvUtXr4oq5md1hBPe%2FdBb3bMvVXYSjN4iiuluMVNLpQtXEtwSHQItmV16Pjyi9AKSOLCxTCmyZHDBjqkAUjzXaJfVHR45sUeKlf9IrZw%2BZ6Qw6fjJGgj4Tf8LV3kVnsE3U2%2BsIlkuFdyVHjYc533J4Ug9BhHwlZY0KA8RLeureZYxPL%2FV515KN1oBnwH2Q%2F4ZlOkiyKsKCnknwoQBt6mUpBUwqFCsOE%2Fk9Jx5QGFWgSA8ns8E%2Btp8OdcZjJ0G9Nec1p2E9ZNznFc2IY4sHLqGxUquHZxrs8nzGwYxLJOCc7m&X-Amz-Signature=c0989b21bd6160b832e14b088bad295e7856dfcad939018dc879813822c6a146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRU4FYB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GiqoODPn%2BwL3xIvW301RBB80LqbPtyJ0kUdOLxwddwIhAMDVftY2lgsGEGSOQkxSMYqzcEE%2FaFKBHQ5Jx0zXAc6oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2BlsJEGHM40usaycq3AOHwYG%2Flq9uj5g7Wzg80pQgc1QyrBFzGNQjoH7Z%2B7HvMfXhe4xS%2FybZR85zVNooFJ2TcIP5ofFW6e6wJhuako9Mn5r8c5Mf%2F%2F%2BFtlm7R%2BtuKqoA5D1Nxk5FQZcN6NDooUTyA9R92ULXJsiSeMnCx0dFX7VG5e4KledTcxf%2FMckd6onWfhQpaAbNFJnGkeJCKXvijQtbrwXqjM7lTRmyoO4JyPI32mrxifwFqD6SiN8kgTR8bBU2arIizDMghQfvtyU%2BxjXZp5LplZ2bDPiQ8l65lL27MLUvHrmhw6hg4CWnc%2ByMdit7lpvGWq12d1KI9fblGBjxgoryPgVkbQJ%2Bssu6OKUB2JoMx3bMPYUx3N3RJMXyWJNh2y4aD64BRGF7oCSffnlJE0D4xfglJ%2F%2FjVZhqzN72DrdYJdEKNGpZLy3Ww3qqY1esr%2B3hpShsn422hBSrJEVWYlDJF81ZZiPK%2B%2BSHhRpLery6aG%2Fo72Ka6i3AcB3nXpbgx2h3EXm4%2Bolzxve0PDX8WKwi4vIL4ue1Bpy9Va6tP278vjmZ%2FNvHAlPy0%2BiJvdU6atb3WvUtXr4oq5md1hBPe%2FdBb3bMvVXYSjN4iiuluMVNLpQtXEtwSHQItmV16Pjyi9AKSOLCxTCmyZHDBjqkAUjzXaJfVHR45sUeKlf9IrZw%2BZ6Qw6fjJGgj4Tf8LV3kVnsE3U2%2BsIlkuFdyVHjYc533J4Ug9BhHwlZY0KA8RLeureZYxPL%2FV515KN1oBnwH2Q%2F4ZlOkiyKsKCnknwoQBt6mUpBUwqFCsOE%2Fk9Jx5QGFWgSA8ns8E%2Btp8OdcZjJ0G9Nec1p2E9ZNznFc2IY4sHLqGxUquHZxrs8nzGwYxLJOCc7m&X-Amz-Signature=548cc4e2e4740825a0acdd4a048ecf211ca06c66361a25719dd47dd0982488d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRU4FYB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GiqoODPn%2BwL3xIvW301RBB80LqbPtyJ0kUdOLxwddwIhAMDVftY2lgsGEGSOQkxSMYqzcEE%2FaFKBHQ5Jx0zXAc6oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2BlsJEGHM40usaycq3AOHwYG%2Flq9uj5g7Wzg80pQgc1QyrBFzGNQjoH7Z%2B7HvMfXhe4xS%2FybZR85zVNooFJ2TcIP5ofFW6e6wJhuako9Mn5r8c5Mf%2F%2F%2BFtlm7R%2BtuKqoA5D1Nxk5FQZcN6NDooUTyA9R92ULXJsiSeMnCx0dFX7VG5e4KledTcxf%2FMckd6onWfhQpaAbNFJnGkeJCKXvijQtbrwXqjM7lTRmyoO4JyPI32mrxifwFqD6SiN8kgTR8bBU2arIizDMghQfvtyU%2BxjXZp5LplZ2bDPiQ8l65lL27MLUvHrmhw6hg4CWnc%2ByMdit7lpvGWq12d1KI9fblGBjxgoryPgVkbQJ%2Bssu6OKUB2JoMx3bMPYUx3N3RJMXyWJNh2y4aD64BRGF7oCSffnlJE0D4xfglJ%2F%2FjVZhqzN72DrdYJdEKNGpZLy3Ww3qqY1esr%2B3hpShsn422hBSrJEVWYlDJF81ZZiPK%2B%2BSHhRpLery6aG%2Fo72Ka6i3AcB3nXpbgx2h3EXm4%2Bolzxve0PDX8WKwi4vIL4ue1Bpy9Va6tP278vjmZ%2FNvHAlPy0%2BiJvdU6atb3WvUtXr4oq5md1hBPe%2FdBb3bMvVXYSjN4iiuluMVNLpQtXEtwSHQItmV16Pjyi9AKSOLCxTCmyZHDBjqkAUjzXaJfVHR45sUeKlf9IrZw%2BZ6Qw6fjJGgj4Tf8LV3kVnsE3U2%2BsIlkuFdyVHjYc533J4Ug9BhHwlZY0KA8RLeureZYxPL%2FV515KN1oBnwH2Q%2F4ZlOkiyKsKCnknwoQBt6mUpBUwqFCsOE%2Fk9Jx5QGFWgSA8ns8E%2Btp8OdcZjJ0G9Nec1p2E9ZNznFc2IY4sHLqGxUquHZxrs8nzGwYxLJOCc7m&X-Amz-Signature=3549a711bb135f9e41b5893e22aa2a590dd5a062ecc7cfed9a7a9f4b6822147b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRU4FYB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GiqoODPn%2BwL3xIvW301RBB80LqbPtyJ0kUdOLxwddwIhAMDVftY2lgsGEGSOQkxSMYqzcEE%2FaFKBHQ5Jx0zXAc6oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2BlsJEGHM40usaycq3AOHwYG%2Flq9uj5g7Wzg80pQgc1QyrBFzGNQjoH7Z%2B7HvMfXhe4xS%2FybZR85zVNooFJ2TcIP5ofFW6e6wJhuako9Mn5r8c5Mf%2F%2F%2BFtlm7R%2BtuKqoA5D1Nxk5FQZcN6NDooUTyA9R92ULXJsiSeMnCx0dFX7VG5e4KledTcxf%2FMckd6onWfhQpaAbNFJnGkeJCKXvijQtbrwXqjM7lTRmyoO4JyPI32mrxifwFqD6SiN8kgTR8bBU2arIizDMghQfvtyU%2BxjXZp5LplZ2bDPiQ8l65lL27MLUvHrmhw6hg4CWnc%2ByMdit7lpvGWq12d1KI9fblGBjxgoryPgVkbQJ%2Bssu6OKUB2JoMx3bMPYUx3N3RJMXyWJNh2y4aD64BRGF7oCSffnlJE0D4xfglJ%2F%2FjVZhqzN72DrdYJdEKNGpZLy3Ww3qqY1esr%2B3hpShsn422hBSrJEVWYlDJF81ZZiPK%2B%2BSHhRpLery6aG%2Fo72Ka6i3AcB3nXpbgx2h3EXm4%2Bolzxve0PDX8WKwi4vIL4ue1Bpy9Va6tP278vjmZ%2FNvHAlPy0%2BiJvdU6atb3WvUtXr4oq5md1hBPe%2FdBb3bMvVXYSjN4iiuluMVNLpQtXEtwSHQItmV16Pjyi9AKSOLCxTCmyZHDBjqkAUjzXaJfVHR45sUeKlf9IrZw%2BZ6Qw6fjJGgj4Tf8LV3kVnsE3U2%2BsIlkuFdyVHjYc533J4Ug9BhHwlZY0KA8RLeureZYxPL%2FV515KN1oBnwH2Q%2F4ZlOkiyKsKCnknwoQBt6mUpBUwqFCsOE%2Fk9Jx5QGFWgSA8ns8E%2Btp8OdcZjJ0G9Nec1p2E9ZNznFc2IY4sHLqGxUquHZxrs8nzGwYxLJOCc7m&X-Amz-Signature=adb9a52e654db98d62bacd17fc7d36035279c8cf32999d5489965faf129d54c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRU4FYB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GiqoODPn%2BwL3xIvW301RBB80LqbPtyJ0kUdOLxwddwIhAMDVftY2lgsGEGSOQkxSMYqzcEE%2FaFKBHQ5Jx0zXAc6oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2BlsJEGHM40usaycq3AOHwYG%2Flq9uj5g7Wzg80pQgc1QyrBFzGNQjoH7Z%2B7HvMfXhe4xS%2FybZR85zVNooFJ2TcIP5ofFW6e6wJhuako9Mn5r8c5Mf%2F%2F%2BFtlm7R%2BtuKqoA5D1Nxk5FQZcN6NDooUTyA9R92ULXJsiSeMnCx0dFX7VG5e4KledTcxf%2FMckd6onWfhQpaAbNFJnGkeJCKXvijQtbrwXqjM7lTRmyoO4JyPI32mrxifwFqD6SiN8kgTR8bBU2arIizDMghQfvtyU%2BxjXZp5LplZ2bDPiQ8l65lL27MLUvHrmhw6hg4CWnc%2ByMdit7lpvGWq12d1KI9fblGBjxgoryPgVkbQJ%2Bssu6OKUB2JoMx3bMPYUx3N3RJMXyWJNh2y4aD64BRGF7oCSffnlJE0D4xfglJ%2F%2FjVZhqzN72DrdYJdEKNGpZLy3Ww3qqY1esr%2B3hpShsn422hBSrJEVWYlDJF81ZZiPK%2B%2BSHhRpLery6aG%2Fo72Ka6i3AcB3nXpbgx2h3EXm4%2Bolzxve0PDX8WKwi4vIL4ue1Bpy9Va6tP278vjmZ%2FNvHAlPy0%2BiJvdU6atb3WvUtXr4oq5md1hBPe%2FdBb3bMvVXYSjN4iiuluMVNLpQtXEtwSHQItmV16Pjyi9AKSOLCxTCmyZHDBjqkAUjzXaJfVHR45sUeKlf9IrZw%2BZ6Qw6fjJGgj4Tf8LV3kVnsE3U2%2BsIlkuFdyVHjYc533J4Ug9BhHwlZY0KA8RLeureZYxPL%2FV515KN1oBnwH2Q%2F4ZlOkiyKsKCnknwoQBt6mUpBUwqFCsOE%2Fk9Jx5QGFWgSA8ns8E%2Btp8OdcZjJ0G9Nec1p2E9ZNznFc2IY4sHLqGxUquHZxrs8nzGwYxLJOCc7m&X-Amz-Signature=a5120bbfd2e268997b7b0a8ac9e4e777910b3412ae266e58a7e7428e24b7521e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRU4FYB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7GiqoODPn%2BwL3xIvW301RBB80LqbPtyJ0kUdOLxwddwIhAMDVftY2lgsGEGSOQkxSMYqzcEE%2FaFKBHQ5Jx0zXAc6oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2BlsJEGHM40usaycq3AOHwYG%2Flq9uj5g7Wzg80pQgc1QyrBFzGNQjoH7Z%2B7HvMfXhe4xS%2FybZR85zVNooFJ2TcIP5ofFW6e6wJhuako9Mn5r8c5Mf%2F%2F%2BFtlm7R%2BtuKqoA5D1Nxk5FQZcN6NDooUTyA9R92ULXJsiSeMnCx0dFX7VG5e4KledTcxf%2FMckd6onWfhQpaAbNFJnGkeJCKXvijQtbrwXqjM7lTRmyoO4JyPI32mrxifwFqD6SiN8kgTR8bBU2arIizDMghQfvtyU%2BxjXZp5LplZ2bDPiQ8l65lL27MLUvHrmhw6hg4CWnc%2ByMdit7lpvGWq12d1KI9fblGBjxgoryPgVkbQJ%2Bssu6OKUB2JoMx3bMPYUx3N3RJMXyWJNh2y4aD64BRGF7oCSffnlJE0D4xfglJ%2F%2FjVZhqzN72DrdYJdEKNGpZLy3Ww3qqY1esr%2B3hpShsn422hBSrJEVWYlDJF81ZZiPK%2B%2BSHhRpLery6aG%2Fo72Ka6i3AcB3nXpbgx2h3EXm4%2Bolzxve0PDX8WKwi4vIL4ue1Bpy9Va6tP278vjmZ%2FNvHAlPy0%2BiJvdU6atb3WvUtXr4oq5md1hBPe%2FdBb3bMvVXYSjN4iiuluMVNLpQtXEtwSHQItmV16Pjyi9AKSOLCxTCmyZHDBjqkAUjzXaJfVHR45sUeKlf9IrZw%2BZ6Qw6fjJGgj4Tf8LV3kVnsE3U2%2BsIlkuFdyVHjYc533J4Ug9BhHwlZY0KA8RLeureZYxPL%2FV515KN1oBnwH2Q%2F4ZlOkiyKsKCnknwoQBt6mUpBUwqFCsOE%2Fk9Jx5QGFWgSA8ns8E%2Btp8OdcZjJ0G9Nec1p2E9ZNznFc2IY4sHLqGxUquHZxrs8nzGwYxLJOCc7m&X-Amz-Signature=76f2cb089f1a09c15450eac4d8624331d87bb1edfb735d4c22b467def11d117f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
