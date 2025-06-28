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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKY4YRT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP9AnqTGka%2Bwuc6lOsglP3b1FlK2%2B%2BNXWre%2FFzx3%2FsoQIhALo%2F2HzwiNwt9lYXMh7K1Wvlsqtwkk%2FZz59yQOR5B%2FFZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyno5l1XoGn3%2FYOUUMq3AM%2FZG4KuOTp2UCk%2FVlD8cGNZ3Q42KHugA%2B9%2FwOG0c5AXpiD1qxZgDvPAomIxBbNZ4sUHacYqbzuSy0nQ9rqOlDy53TugsJfL9U7q96aNml1hpJ9g%2Bv25s9o8k%2F8idr%2B7EO8lCpxvCiYBIlbA7haUJ9PWeTNoWCfG4iGNTJ0BXBwbe2w39U%2Bg2BZz0lV6WRFS8yBNACcPVkQegfreRjRHft99txNYoZ5cJ9NOcTfIIvM8Gz1rCB1hk2AkRrv%2Fyv1ErW2g%2BpL%2BLxnok%2BgmSy111kuXpDrimI1k2kRGzSrrYyf7aRn%2BKJhSp5eSX48Tsc894l7ffC5vxH8wht41grQYVDgm71Cy9pm17Tgn%2BlgUwC8AoF00c0CiS7odCfQCxMfiR4hSDiiZoSQ%2BRZl8mff%2Fv%2F94BToVfD6muaOVjGwv1fJye2aSL7AJOZ%2FIUUmZAnot4eSUY4WfPpvnuI3%2Bfsn6S%2Fr8uF%2BZHqgF9GoRUbH5jr0hCdVxoi%2Bb3mcRUx2xV5OQINl%2Bx2%2BlA1h6%2BjbKDZ0gYwA4EKedWJq1cbP3Bj%2FModf5XLKIsBrahfiTNHwHuRegcGZSTjUyMZIh1ytxIEWGJERfDQUY8bHRh5JvNgSnJTxkByrcJ9p1Hk%2BfMlt%2BTCnkf%2FCBjqkAfi7hzjtIDLkslbQ9Or%2F4DsfBLePzvRewcekpW9f2C02qKOv2emX56tkys9m5yjxfu5EeBteSwSjD4JQgBA%2BoNm4MHQShNJalzaw6%2BcRSsqZ3vc5OsOBYB8Zlf7Fd7Ke7JgyhO%2BFFnZaD0uEWMx8z5cX3zJA4lQ66WtVCLYolp71wHY0oy1PcA1UgUvn4w49WdC37Z7imTmtBIOTmvr79P1S7eoX&X-Amz-Signature=bf7e5191d773d49ee3af32ac4eec401a0c8c77cfdebcf0e14a0f1ba8a854c5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKY4YRT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP9AnqTGka%2Bwuc6lOsglP3b1FlK2%2B%2BNXWre%2FFzx3%2FsoQIhALo%2F2HzwiNwt9lYXMh7K1Wvlsqtwkk%2FZz59yQOR5B%2FFZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyno5l1XoGn3%2FYOUUMq3AM%2FZG4KuOTp2UCk%2FVlD8cGNZ3Q42KHugA%2B9%2FwOG0c5AXpiD1qxZgDvPAomIxBbNZ4sUHacYqbzuSy0nQ9rqOlDy53TugsJfL9U7q96aNml1hpJ9g%2Bv25s9o8k%2F8idr%2B7EO8lCpxvCiYBIlbA7haUJ9PWeTNoWCfG4iGNTJ0BXBwbe2w39U%2Bg2BZz0lV6WRFS8yBNACcPVkQegfreRjRHft99txNYoZ5cJ9NOcTfIIvM8Gz1rCB1hk2AkRrv%2Fyv1ErW2g%2BpL%2BLxnok%2BgmSy111kuXpDrimI1k2kRGzSrrYyf7aRn%2BKJhSp5eSX48Tsc894l7ffC5vxH8wht41grQYVDgm71Cy9pm17Tgn%2BlgUwC8AoF00c0CiS7odCfQCxMfiR4hSDiiZoSQ%2BRZl8mff%2Fv%2F94BToVfD6muaOVjGwv1fJye2aSL7AJOZ%2FIUUmZAnot4eSUY4WfPpvnuI3%2Bfsn6S%2Fr8uF%2BZHqgF9GoRUbH5jr0hCdVxoi%2Bb3mcRUx2xV5OQINl%2Bx2%2BlA1h6%2BjbKDZ0gYwA4EKedWJq1cbP3Bj%2FModf5XLKIsBrahfiTNHwHuRegcGZSTjUyMZIh1ytxIEWGJERfDQUY8bHRh5JvNgSnJTxkByrcJ9p1Hk%2BfMlt%2BTCnkf%2FCBjqkAfi7hzjtIDLkslbQ9Or%2F4DsfBLePzvRewcekpW9f2C02qKOv2emX56tkys9m5yjxfu5EeBteSwSjD4JQgBA%2BoNm4MHQShNJalzaw6%2BcRSsqZ3vc5OsOBYB8Zlf7Fd7Ke7JgyhO%2BFFnZaD0uEWMx8z5cX3zJA4lQ66WtVCLYolp71wHY0oy1PcA1UgUvn4w49WdC37Z7imTmtBIOTmvr79P1S7eoX&X-Amz-Signature=c395866b1f6d5c539a305f083640c3ad91b138148787058d8803dddb31c1b0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKY4YRT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP9AnqTGka%2Bwuc6lOsglP3b1FlK2%2B%2BNXWre%2FFzx3%2FsoQIhALo%2F2HzwiNwt9lYXMh7K1Wvlsqtwkk%2FZz59yQOR5B%2FFZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyno5l1XoGn3%2FYOUUMq3AM%2FZG4KuOTp2UCk%2FVlD8cGNZ3Q42KHugA%2B9%2FwOG0c5AXpiD1qxZgDvPAomIxBbNZ4sUHacYqbzuSy0nQ9rqOlDy53TugsJfL9U7q96aNml1hpJ9g%2Bv25s9o8k%2F8idr%2B7EO8lCpxvCiYBIlbA7haUJ9PWeTNoWCfG4iGNTJ0BXBwbe2w39U%2Bg2BZz0lV6WRFS8yBNACcPVkQegfreRjRHft99txNYoZ5cJ9NOcTfIIvM8Gz1rCB1hk2AkRrv%2Fyv1ErW2g%2BpL%2BLxnok%2BgmSy111kuXpDrimI1k2kRGzSrrYyf7aRn%2BKJhSp5eSX48Tsc894l7ffC5vxH8wht41grQYVDgm71Cy9pm17Tgn%2BlgUwC8AoF00c0CiS7odCfQCxMfiR4hSDiiZoSQ%2BRZl8mff%2Fv%2F94BToVfD6muaOVjGwv1fJye2aSL7AJOZ%2FIUUmZAnot4eSUY4WfPpvnuI3%2Bfsn6S%2Fr8uF%2BZHqgF9GoRUbH5jr0hCdVxoi%2Bb3mcRUx2xV5OQINl%2Bx2%2BlA1h6%2BjbKDZ0gYwA4EKedWJq1cbP3Bj%2FModf5XLKIsBrahfiTNHwHuRegcGZSTjUyMZIh1ytxIEWGJERfDQUY8bHRh5JvNgSnJTxkByrcJ9p1Hk%2BfMlt%2BTCnkf%2FCBjqkAfi7hzjtIDLkslbQ9Or%2F4DsfBLePzvRewcekpW9f2C02qKOv2emX56tkys9m5yjxfu5EeBteSwSjD4JQgBA%2BoNm4MHQShNJalzaw6%2BcRSsqZ3vc5OsOBYB8Zlf7Fd7Ke7JgyhO%2BFFnZaD0uEWMx8z5cX3zJA4lQ66WtVCLYolp71wHY0oy1PcA1UgUvn4w49WdC37Z7imTmtBIOTmvr79P1S7eoX&X-Amz-Signature=9b0d8ce05b2d21d803fd21882da1f4c5885d41ae2b27249d8f995c0f2303b102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKY4YRT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP9AnqTGka%2Bwuc6lOsglP3b1FlK2%2B%2BNXWre%2FFzx3%2FsoQIhALo%2F2HzwiNwt9lYXMh7K1Wvlsqtwkk%2FZz59yQOR5B%2FFZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyno5l1XoGn3%2FYOUUMq3AM%2FZG4KuOTp2UCk%2FVlD8cGNZ3Q42KHugA%2B9%2FwOG0c5AXpiD1qxZgDvPAomIxBbNZ4sUHacYqbzuSy0nQ9rqOlDy53TugsJfL9U7q96aNml1hpJ9g%2Bv25s9o8k%2F8idr%2B7EO8lCpxvCiYBIlbA7haUJ9PWeTNoWCfG4iGNTJ0BXBwbe2w39U%2Bg2BZz0lV6WRFS8yBNACcPVkQegfreRjRHft99txNYoZ5cJ9NOcTfIIvM8Gz1rCB1hk2AkRrv%2Fyv1ErW2g%2BpL%2BLxnok%2BgmSy111kuXpDrimI1k2kRGzSrrYyf7aRn%2BKJhSp5eSX48Tsc894l7ffC5vxH8wht41grQYVDgm71Cy9pm17Tgn%2BlgUwC8AoF00c0CiS7odCfQCxMfiR4hSDiiZoSQ%2BRZl8mff%2Fv%2F94BToVfD6muaOVjGwv1fJye2aSL7AJOZ%2FIUUmZAnot4eSUY4WfPpvnuI3%2Bfsn6S%2Fr8uF%2BZHqgF9GoRUbH5jr0hCdVxoi%2Bb3mcRUx2xV5OQINl%2Bx2%2BlA1h6%2BjbKDZ0gYwA4EKedWJq1cbP3Bj%2FModf5XLKIsBrahfiTNHwHuRegcGZSTjUyMZIh1ytxIEWGJERfDQUY8bHRh5JvNgSnJTxkByrcJ9p1Hk%2BfMlt%2BTCnkf%2FCBjqkAfi7hzjtIDLkslbQ9Or%2F4DsfBLePzvRewcekpW9f2C02qKOv2emX56tkys9m5yjxfu5EeBteSwSjD4JQgBA%2BoNm4MHQShNJalzaw6%2BcRSsqZ3vc5OsOBYB8Zlf7Fd7Ke7JgyhO%2BFFnZaD0uEWMx8z5cX3zJA4lQ66WtVCLYolp71wHY0oy1PcA1UgUvn4w49WdC37Z7imTmtBIOTmvr79P1S7eoX&X-Amz-Signature=5cea21c2c0a5c165685e25c8d7731e4c137e99207bddb788efcc354fa5e5a8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKY4YRT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP9AnqTGka%2Bwuc6lOsglP3b1FlK2%2B%2BNXWre%2FFzx3%2FsoQIhALo%2F2HzwiNwt9lYXMh7K1Wvlsqtwkk%2FZz59yQOR5B%2FFZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyno5l1XoGn3%2FYOUUMq3AM%2FZG4KuOTp2UCk%2FVlD8cGNZ3Q42KHugA%2B9%2FwOG0c5AXpiD1qxZgDvPAomIxBbNZ4sUHacYqbzuSy0nQ9rqOlDy53TugsJfL9U7q96aNml1hpJ9g%2Bv25s9o8k%2F8idr%2B7EO8lCpxvCiYBIlbA7haUJ9PWeTNoWCfG4iGNTJ0BXBwbe2w39U%2Bg2BZz0lV6WRFS8yBNACcPVkQegfreRjRHft99txNYoZ5cJ9NOcTfIIvM8Gz1rCB1hk2AkRrv%2Fyv1ErW2g%2BpL%2BLxnok%2BgmSy111kuXpDrimI1k2kRGzSrrYyf7aRn%2BKJhSp5eSX48Tsc894l7ffC5vxH8wht41grQYVDgm71Cy9pm17Tgn%2BlgUwC8AoF00c0CiS7odCfQCxMfiR4hSDiiZoSQ%2BRZl8mff%2Fv%2F94BToVfD6muaOVjGwv1fJye2aSL7AJOZ%2FIUUmZAnot4eSUY4WfPpvnuI3%2Bfsn6S%2Fr8uF%2BZHqgF9GoRUbH5jr0hCdVxoi%2Bb3mcRUx2xV5OQINl%2Bx2%2BlA1h6%2BjbKDZ0gYwA4EKedWJq1cbP3Bj%2FModf5XLKIsBrahfiTNHwHuRegcGZSTjUyMZIh1ytxIEWGJERfDQUY8bHRh5JvNgSnJTxkByrcJ9p1Hk%2BfMlt%2BTCnkf%2FCBjqkAfi7hzjtIDLkslbQ9Or%2F4DsfBLePzvRewcekpW9f2C02qKOv2emX56tkys9m5yjxfu5EeBteSwSjD4JQgBA%2BoNm4MHQShNJalzaw6%2BcRSsqZ3vc5OsOBYB8Zlf7Fd7Ke7JgyhO%2BFFnZaD0uEWMx8z5cX3zJA4lQ66WtVCLYolp71wHY0oy1PcA1UgUvn4w49WdC37Z7imTmtBIOTmvr79P1S7eoX&X-Amz-Signature=bdba8cf24ade99a30511cffaac1aed81dc0116474aab2b1bf97d10630a15d915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKY4YRT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP9AnqTGka%2Bwuc6lOsglP3b1FlK2%2B%2BNXWre%2FFzx3%2FsoQIhALo%2F2HzwiNwt9lYXMh7K1Wvlsqtwkk%2FZz59yQOR5B%2FFZKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyno5l1XoGn3%2FYOUUMq3AM%2FZG4KuOTp2UCk%2FVlD8cGNZ3Q42KHugA%2B9%2FwOG0c5AXpiD1qxZgDvPAomIxBbNZ4sUHacYqbzuSy0nQ9rqOlDy53TugsJfL9U7q96aNml1hpJ9g%2Bv25s9o8k%2F8idr%2B7EO8lCpxvCiYBIlbA7haUJ9PWeTNoWCfG4iGNTJ0BXBwbe2w39U%2Bg2BZz0lV6WRFS8yBNACcPVkQegfreRjRHft99txNYoZ5cJ9NOcTfIIvM8Gz1rCB1hk2AkRrv%2Fyv1ErW2g%2BpL%2BLxnok%2BgmSy111kuXpDrimI1k2kRGzSrrYyf7aRn%2BKJhSp5eSX48Tsc894l7ffC5vxH8wht41grQYVDgm71Cy9pm17Tgn%2BlgUwC8AoF00c0CiS7odCfQCxMfiR4hSDiiZoSQ%2BRZl8mff%2Fv%2F94BToVfD6muaOVjGwv1fJye2aSL7AJOZ%2FIUUmZAnot4eSUY4WfPpvnuI3%2Bfsn6S%2Fr8uF%2BZHqgF9GoRUbH5jr0hCdVxoi%2Bb3mcRUx2xV5OQINl%2Bx2%2BlA1h6%2BjbKDZ0gYwA4EKedWJq1cbP3Bj%2FModf5XLKIsBrahfiTNHwHuRegcGZSTjUyMZIh1ytxIEWGJERfDQUY8bHRh5JvNgSnJTxkByrcJ9p1Hk%2BfMlt%2BTCnkf%2FCBjqkAfi7hzjtIDLkslbQ9Or%2F4DsfBLePzvRewcekpW9f2C02qKOv2emX56tkys9m5yjxfu5EeBteSwSjD4JQgBA%2BoNm4MHQShNJalzaw6%2BcRSsqZ3vc5OsOBYB8Zlf7Fd7Ke7JgyhO%2BFFnZaD0uEWMx8z5cX3zJA4lQ66WtVCLYolp71wHY0oy1PcA1UgUvn4w49WdC37Z7imTmtBIOTmvr79P1S7eoX&X-Amz-Signature=4b006ed5ce7f0d745d81676ad46b8eed625972e99fea10979db66944a1f29b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
