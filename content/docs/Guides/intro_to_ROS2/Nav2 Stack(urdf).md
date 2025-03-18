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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXSHBM4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDBY3Gg09m%2F2nllBL7mEnEgatg8FqQ5HokegjP6sN9O7AiBIOwRL5hKoe4V%2F0lDMNwz7828lvUBmZSgqAMM0gDH6hir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMY%2Bn0H6F5%2FLkZqzoUKtwDYJoLJ4T5r4XoFH5cqp4GkfRTcyzsX02nihPOEcTdKBchMQI6JrROwM%2FDma9HZ%2FU6iPolAjtyTcUwiYzLSu6j5UZEN9QOZuL05MbLfENH3h8O0APyZrv7pWtVVoH%2FQV9hlTBB6RUoazUkYuauHAwxzWeGzwe9oTef2LiBHiWsfnwKWT8jIwh%2F5uwxoGpkB9%2BbaMfDCytBDEl42jX8RarhfpLFCZ8rpxlO1m4aaqjN0vPnk9fzmRX0XGHKfJCy2bUg0%2BcZH8igS5%2FTcBKkmhkZMtH%2BtMPGFEVB%2Fhb2jPibn6qOz9Omiya50p1FE8%2BG6tLn2wmR9NJMzAweJM1IncwIzwkc4Y%2B2xYhbZjkgiWBzU46RbcqPGmoW4BwMsBN9aQeJuItqd3xVRlONSo5cSqA%2BKrLfOSoRSD1N5jSt61b0aEKyd%2FouoqXJprEMcE6cpFd1fWYlDKZ%2B%2Brh%2BfW1dM%2BBeM6AP6egV5rjzD8q2K5VLSV56KAQJsS6XjYI76nAg2YyXhG%2B%2FH3bIbLKR20cpRQP%2FLxf9tiq9lDNcgpQ4HcxQPEhlIr6Bvn2Mp%2FgKaCGrCD1ltAxEOYJwPrFsawT%2Fi5M%2BN0lPzll2ceDuUUNjWBAfStg8aIQGjwxwMeKBhVIw2ZTmvgY6pgH1RujstascuCf2Tzc0E3b2YB0C82KgAW2lsBwfgi%2Bah%2BFUi7Op%2FDrHAqdhm6zrWgxtWcRDR8vL5ifaprIN5H8SRnHCS1a6QFPqq92P3m%2B4zx2HmozYqF32YeQwY0C3CXloAabI0K6qaiZJ1FAP3jL07e27Ytp6gOJXEDLw22B2oHXanwfYCNVMXPO0FcvezOevdkIyWSFMz%2FfGM2TDty1pMR%2BfKUP5&X-Amz-Signature=426a4ee3d7322d1b82cb6bc6fe9dd7f035fbd478890c1dbd67ee97d90f893fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXSHBM4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDBY3Gg09m%2F2nllBL7mEnEgatg8FqQ5HokegjP6sN9O7AiBIOwRL5hKoe4V%2F0lDMNwz7828lvUBmZSgqAMM0gDH6hir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMY%2Bn0H6F5%2FLkZqzoUKtwDYJoLJ4T5r4XoFH5cqp4GkfRTcyzsX02nihPOEcTdKBchMQI6JrROwM%2FDma9HZ%2FU6iPolAjtyTcUwiYzLSu6j5UZEN9QOZuL05MbLfENH3h8O0APyZrv7pWtVVoH%2FQV9hlTBB6RUoazUkYuauHAwxzWeGzwe9oTef2LiBHiWsfnwKWT8jIwh%2F5uwxoGpkB9%2BbaMfDCytBDEl42jX8RarhfpLFCZ8rpxlO1m4aaqjN0vPnk9fzmRX0XGHKfJCy2bUg0%2BcZH8igS5%2FTcBKkmhkZMtH%2BtMPGFEVB%2Fhb2jPibn6qOz9Omiya50p1FE8%2BG6tLn2wmR9NJMzAweJM1IncwIzwkc4Y%2B2xYhbZjkgiWBzU46RbcqPGmoW4BwMsBN9aQeJuItqd3xVRlONSo5cSqA%2BKrLfOSoRSD1N5jSt61b0aEKyd%2FouoqXJprEMcE6cpFd1fWYlDKZ%2B%2Brh%2BfW1dM%2BBeM6AP6egV5rjzD8q2K5VLSV56KAQJsS6XjYI76nAg2YyXhG%2B%2FH3bIbLKR20cpRQP%2FLxf9tiq9lDNcgpQ4HcxQPEhlIr6Bvn2Mp%2FgKaCGrCD1ltAxEOYJwPrFsawT%2Fi5M%2BN0lPzll2ceDuUUNjWBAfStg8aIQGjwxwMeKBhVIw2ZTmvgY6pgH1RujstascuCf2Tzc0E3b2YB0C82KgAW2lsBwfgi%2Bah%2BFUi7Op%2FDrHAqdhm6zrWgxtWcRDR8vL5ifaprIN5H8SRnHCS1a6QFPqq92P3m%2B4zx2HmozYqF32YeQwY0C3CXloAabI0K6qaiZJ1FAP3jL07e27Ytp6gOJXEDLw22B2oHXanwfYCNVMXPO0FcvezOevdkIyWSFMz%2FfGM2TDty1pMR%2BfKUP5&X-Amz-Signature=c7c62aca5109f5f49b6e6af8a8355199a59fadfead42f1d0e29d34e44bd67394&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXSHBM4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDBY3Gg09m%2F2nllBL7mEnEgatg8FqQ5HokegjP6sN9O7AiBIOwRL5hKoe4V%2F0lDMNwz7828lvUBmZSgqAMM0gDH6hir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMY%2Bn0H6F5%2FLkZqzoUKtwDYJoLJ4T5r4XoFH5cqp4GkfRTcyzsX02nihPOEcTdKBchMQI6JrROwM%2FDma9HZ%2FU6iPolAjtyTcUwiYzLSu6j5UZEN9QOZuL05MbLfENH3h8O0APyZrv7pWtVVoH%2FQV9hlTBB6RUoazUkYuauHAwxzWeGzwe9oTef2LiBHiWsfnwKWT8jIwh%2F5uwxoGpkB9%2BbaMfDCytBDEl42jX8RarhfpLFCZ8rpxlO1m4aaqjN0vPnk9fzmRX0XGHKfJCy2bUg0%2BcZH8igS5%2FTcBKkmhkZMtH%2BtMPGFEVB%2Fhb2jPibn6qOz9Omiya50p1FE8%2BG6tLn2wmR9NJMzAweJM1IncwIzwkc4Y%2B2xYhbZjkgiWBzU46RbcqPGmoW4BwMsBN9aQeJuItqd3xVRlONSo5cSqA%2BKrLfOSoRSD1N5jSt61b0aEKyd%2FouoqXJprEMcE6cpFd1fWYlDKZ%2B%2Brh%2BfW1dM%2BBeM6AP6egV5rjzD8q2K5VLSV56KAQJsS6XjYI76nAg2YyXhG%2B%2FH3bIbLKR20cpRQP%2FLxf9tiq9lDNcgpQ4HcxQPEhlIr6Bvn2Mp%2FgKaCGrCD1ltAxEOYJwPrFsawT%2Fi5M%2BN0lPzll2ceDuUUNjWBAfStg8aIQGjwxwMeKBhVIw2ZTmvgY6pgH1RujstascuCf2Tzc0E3b2YB0C82KgAW2lsBwfgi%2Bah%2BFUi7Op%2FDrHAqdhm6zrWgxtWcRDR8vL5ifaprIN5H8SRnHCS1a6QFPqq92P3m%2B4zx2HmozYqF32YeQwY0C3CXloAabI0K6qaiZJ1FAP3jL07e27Ytp6gOJXEDLw22B2oHXanwfYCNVMXPO0FcvezOevdkIyWSFMz%2FfGM2TDty1pMR%2BfKUP5&X-Amz-Signature=21e5a86c1331e158b2a49d9d38402a3fddcff1fb58f2fe513ef4c49acaf0dd5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXSHBM4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDBY3Gg09m%2F2nllBL7mEnEgatg8FqQ5HokegjP6sN9O7AiBIOwRL5hKoe4V%2F0lDMNwz7828lvUBmZSgqAMM0gDH6hir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMY%2Bn0H6F5%2FLkZqzoUKtwDYJoLJ4T5r4XoFH5cqp4GkfRTcyzsX02nihPOEcTdKBchMQI6JrROwM%2FDma9HZ%2FU6iPolAjtyTcUwiYzLSu6j5UZEN9QOZuL05MbLfENH3h8O0APyZrv7pWtVVoH%2FQV9hlTBB6RUoazUkYuauHAwxzWeGzwe9oTef2LiBHiWsfnwKWT8jIwh%2F5uwxoGpkB9%2BbaMfDCytBDEl42jX8RarhfpLFCZ8rpxlO1m4aaqjN0vPnk9fzmRX0XGHKfJCy2bUg0%2BcZH8igS5%2FTcBKkmhkZMtH%2BtMPGFEVB%2Fhb2jPibn6qOz9Omiya50p1FE8%2BG6tLn2wmR9NJMzAweJM1IncwIzwkc4Y%2B2xYhbZjkgiWBzU46RbcqPGmoW4BwMsBN9aQeJuItqd3xVRlONSo5cSqA%2BKrLfOSoRSD1N5jSt61b0aEKyd%2FouoqXJprEMcE6cpFd1fWYlDKZ%2B%2Brh%2BfW1dM%2BBeM6AP6egV5rjzD8q2K5VLSV56KAQJsS6XjYI76nAg2YyXhG%2B%2FH3bIbLKR20cpRQP%2FLxf9tiq9lDNcgpQ4HcxQPEhlIr6Bvn2Mp%2FgKaCGrCD1ltAxEOYJwPrFsawT%2Fi5M%2BN0lPzll2ceDuUUNjWBAfStg8aIQGjwxwMeKBhVIw2ZTmvgY6pgH1RujstascuCf2Tzc0E3b2YB0C82KgAW2lsBwfgi%2Bah%2BFUi7Op%2FDrHAqdhm6zrWgxtWcRDR8vL5ifaprIN5H8SRnHCS1a6QFPqq92P3m%2B4zx2HmozYqF32YeQwY0C3CXloAabI0K6qaiZJ1FAP3jL07e27Ytp6gOJXEDLw22B2oHXanwfYCNVMXPO0FcvezOevdkIyWSFMz%2FfGM2TDty1pMR%2BfKUP5&X-Amz-Signature=cf59bece0c5cd88357fb189d772c26e725a2a103170733cd8eaddb1b48a31030&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXSHBM4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDBY3Gg09m%2F2nllBL7mEnEgatg8FqQ5HokegjP6sN9O7AiBIOwRL5hKoe4V%2F0lDMNwz7828lvUBmZSgqAMM0gDH6hir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMY%2Bn0H6F5%2FLkZqzoUKtwDYJoLJ4T5r4XoFH5cqp4GkfRTcyzsX02nihPOEcTdKBchMQI6JrROwM%2FDma9HZ%2FU6iPolAjtyTcUwiYzLSu6j5UZEN9QOZuL05MbLfENH3h8O0APyZrv7pWtVVoH%2FQV9hlTBB6RUoazUkYuauHAwxzWeGzwe9oTef2LiBHiWsfnwKWT8jIwh%2F5uwxoGpkB9%2BbaMfDCytBDEl42jX8RarhfpLFCZ8rpxlO1m4aaqjN0vPnk9fzmRX0XGHKfJCy2bUg0%2BcZH8igS5%2FTcBKkmhkZMtH%2BtMPGFEVB%2Fhb2jPibn6qOz9Omiya50p1FE8%2BG6tLn2wmR9NJMzAweJM1IncwIzwkc4Y%2B2xYhbZjkgiWBzU46RbcqPGmoW4BwMsBN9aQeJuItqd3xVRlONSo5cSqA%2BKrLfOSoRSD1N5jSt61b0aEKyd%2FouoqXJprEMcE6cpFd1fWYlDKZ%2B%2Brh%2BfW1dM%2BBeM6AP6egV5rjzD8q2K5VLSV56KAQJsS6XjYI76nAg2YyXhG%2B%2FH3bIbLKR20cpRQP%2FLxf9tiq9lDNcgpQ4HcxQPEhlIr6Bvn2Mp%2FgKaCGrCD1ltAxEOYJwPrFsawT%2Fi5M%2BN0lPzll2ceDuUUNjWBAfStg8aIQGjwxwMeKBhVIw2ZTmvgY6pgH1RujstascuCf2Tzc0E3b2YB0C82KgAW2lsBwfgi%2Bah%2BFUi7Op%2FDrHAqdhm6zrWgxtWcRDR8vL5ifaprIN5H8SRnHCS1a6QFPqq92P3m%2B4zx2HmozYqF32YeQwY0C3CXloAabI0K6qaiZJ1FAP3jL07e27Ytp6gOJXEDLw22B2oHXanwfYCNVMXPO0FcvezOevdkIyWSFMz%2FfGM2TDty1pMR%2BfKUP5&X-Amz-Signature=90cfed49d6b291cda0a79df99799ebe17e9310d79cc7a192700d01709156ce8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXSHBM4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDBY3Gg09m%2F2nllBL7mEnEgatg8FqQ5HokegjP6sN9O7AiBIOwRL5hKoe4V%2F0lDMNwz7828lvUBmZSgqAMM0gDH6hir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMY%2Bn0H6F5%2FLkZqzoUKtwDYJoLJ4T5r4XoFH5cqp4GkfRTcyzsX02nihPOEcTdKBchMQI6JrROwM%2FDma9HZ%2FU6iPolAjtyTcUwiYzLSu6j5UZEN9QOZuL05MbLfENH3h8O0APyZrv7pWtVVoH%2FQV9hlTBB6RUoazUkYuauHAwxzWeGzwe9oTef2LiBHiWsfnwKWT8jIwh%2F5uwxoGpkB9%2BbaMfDCytBDEl42jX8RarhfpLFCZ8rpxlO1m4aaqjN0vPnk9fzmRX0XGHKfJCy2bUg0%2BcZH8igS5%2FTcBKkmhkZMtH%2BtMPGFEVB%2Fhb2jPibn6qOz9Omiya50p1FE8%2BG6tLn2wmR9NJMzAweJM1IncwIzwkc4Y%2B2xYhbZjkgiWBzU46RbcqPGmoW4BwMsBN9aQeJuItqd3xVRlONSo5cSqA%2BKrLfOSoRSD1N5jSt61b0aEKyd%2FouoqXJprEMcE6cpFd1fWYlDKZ%2B%2Brh%2BfW1dM%2BBeM6AP6egV5rjzD8q2K5VLSV56KAQJsS6XjYI76nAg2YyXhG%2B%2FH3bIbLKR20cpRQP%2FLxf9tiq9lDNcgpQ4HcxQPEhlIr6Bvn2Mp%2FgKaCGrCD1ltAxEOYJwPrFsawT%2Fi5M%2BN0lPzll2ceDuUUNjWBAfStg8aIQGjwxwMeKBhVIw2ZTmvgY6pgH1RujstascuCf2Tzc0E3b2YB0C82KgAW2lsBwfgi%2Bah%2BFUi7Op%2FDrHAqdhm6zrWgxtWcRDR8vL5ifaprIN5H8SRnHCS1a6QFPqq92P3m%2B4zx2HmozYqF32YeQwY0C3CXloAabI0K6qaiZJ1FAP3jL07e27Ytp6gOJXEDLw22B2oHXanwfYCNVMXPO0FcvezOevdkIyWSFMz%2FfGM2TDty1pMR%2BfKUP5&X-Amz-Signature=6498e584a5e3044745cda7e6075c0a93f440123a629cb13e0b64db01c27422df&X-Amz-SignedHeaders=host&x-id=GetObject)
