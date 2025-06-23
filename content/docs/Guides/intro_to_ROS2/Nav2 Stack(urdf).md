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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3JGURY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChurC5hWzx%2Fgo4aeiLc9hsMvV1QQH7lEXPEqfE0FNBmQIhALg2TBBGO%2F2%2BWxNkoIkStIGJA8D4GkcdY7TEMIN6DPUOKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZkDaIwbhWFL14Rwq3AOezIEB2y%2B6SLx%2FSjKSgoHKNEsjkd1ySe0jE23ZsFb%2B%2B4M0TDllsTf%2Bg4wPeJhe%2FkC3WG6D86Owp4IYcJrENbmHKHHYcLW1Nhuxc%2BwiC8lZT8YagqypkGRznVhUh0Gtb5QaDDLyJrayp4dhjTBHTGBw5VVfGX8vOEpl0lKhR6BZ32pyUkK80JWPqBe5TZdsG3dHd7YZs5FtvGLfFqujJGg9lpnbhHS3MA4kjbhWJ92%2BQ8kmdIATTTYe10FF6u7Gk4vmrJDzQR6fv%2FBz8VrWI8Y4I5PRvY6cxuY4Xg5QmFXywB%2BWwnkizXpLF7zZHG1uzUW60fx0ObOwBgdqONkaHEBEbMeHrlKHBi8k9Qa9ZMRZkiSOuCKhdkgl1t56ANTgLfuyvMLJIrdI6Zp3kwi4VCfIvmSgEWxW34fectWAtkTKsKw3YFphW5sw3cpdPK0ytyinZgzzAAZuufIw%2Bbj2iBErdbZhXTVPo8j9HKl0yL0BLHajR2D1k5VmZUH9MDsKlFfTQ%2F1H6u%2Fv1iQxVYHnbcocWHcKgPiCsKDaKzQeQMI2TGXeSTZStsfsew36GnB2gpSvfjAJC4DLaTNMPP9npGe9sxgzOhROOH4ezBETa0MjCKeiCeRo7r21W9lI6jD10OPCBjqkAdP5L8Z6V4lQTLd%2FtAvTaaeZJUtPdGbeG5fjqnAB3p2RqX568tFwtDchoAc%2B%2Bwv9nRqh%2BkB3njVkithezRP9GdGnoW1JI7RDfHHZnlnpe6zpIX2dGZpsI71UWUl367FCpfrU2kTnfNG2SryzfwamXmnyHvChh0KmRvrF%2FfclJg6goj5SCBsXTuLUwA5OqYtzpeYHDXyJv8An4rOebbyC5h%2Bo%2BYdE&X-Amz-Signature=2ee5f4a1cd449f1bbd93a6f28e0c24291aeb2d82c7813db0507a12d6aa344d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3JGURY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChurC5hWzx%2Fgo4aeiLc9hsMvV1QQH7lEXPEqfE0FNBmQIhALg2TBBGO%2F2%2BWxNkoIkStIGJA8D4GkcdY7TEMIN6DPUOKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZkDaIwbhWFL14Rwq3AOezIEB2y%2B6SLx%2FSjKSgoHKNEsjkd1ySe0jE23ZsFb%2B%2B4M0TDllsTf%2Bg4wPeJhe%2FkC3WG6D86Owp4IYcJrENbmHKHHYcLW1Nhuxc%2BwiC8lZT8YagqypkGRznVhUh0Gtb5QaDDLyJrayp4dhjTBHTGBw5VVfGX8vOEpl0lKhR6BZ32pyUkK80JWPqBe5TZdsG3dHd7YZs5FtvGLfFqujJGg9lpnbhHS3MA4kjbhWJ92%2BQ8kmdIATTTYe10FF6u7Gk4vmrJDzQR6fv%2FBz8VrWI8Y4I5PRvY6cxuY4Xg5QmFXywB%2BWwnkizXpLF7zZHG1uzUW60fx0ObOwBgdqONkaHEBEbMeHrlKHBi8k9Qa9ZMRZkiSOuCKhdkgl1t56ANTgLfuyvMLJIrdI6Zp3kwi4VCfIvmSgEWxW34fectWAtkTKsKw3YFphW5sw3cpdPK0ytyinZgzzAAZuufIw%2Bbj2iBErdbZhXTVPo8j9HKl0yL0BLHajR2D1k5VmZUH9MDsKlFfTQ%2F1H6u%2Fv1iQxVYHnbcocWHcKgPiCsKDaKzQeQMI2TGXeSTZStsfsew36GnB2gpSvfjAJC4DLaTNMPP9npGe9sxgzOhROOH4ezBETa0MjCKeiCeRo7r21W9lI6jD10OPCBjqkAdP5L8Z6V4lQTLd%2FtAvTaaeZJUtPdGbeG5fjqnAB3p2RqX568tFwtDchoAc%2B%2Bwv9nRqh%2BkB3njVkithezRP9GdGnoW1JI7RDfHHZnlnpe6zpIX2dGZpsI71UWUl367FCpfrU2kTnfNG2SryzfwamXmnyHvChh0KmRvrF%2FfclJg6goj5SCBsXTuLUwA5OqYtzpeYHDXyJv8An4rOebbyC5h%2Bo%2BYdE&X-Amz-Signature=9891dfe5d113177e167fd1581c9429bd4add80d2aa81049fc60e8a12a6206830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3JGURY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChurC5hWzx%2Fgo4aeiLc9hsMvV1QQH7lEXPEqfE0FNBmQIhALg2TBBGO%2F2%2BWxNkoIkStIGJA8D4GkcdY7TEMIN6DPUOKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZkDaIwbhWFL14Rwq3AOezIEB2y%2B6SLx%2FSjKSgoHKNEsjkd1ySe0jE23ZsFb%2B%2B4M0TDllsTf%2Bg4wPeJhe%2FkC3WG6D86Owp4IYcJrENbmHKHHYcLW1Nhuxc%2BwiC8lZT8YagqypkGRznVhUh0Gtb5QaDDLyJrayp4dhjTBHTGBw5VVfGX8vOEpl0lKhR6BZ32pyUkK80JWPqBe5TZdsG3dHd7YZs5FtvGLfFqujJGg9lpnbhHS3MA4kjbhWJ92%2BQ8kmdIATTTYe10FF6u7Gk4vmrJDzQR6fv%2FBz8VrWI8Y4I5PRvY6cxuY4Xg5QmFXywB%2BWwnkizXpLF7zZHG1uzUW60fx0ObOwBgdqONkaHEBEbMeHrlKHBi8k9Qa9ZMRZkiSOuCKhdkgl1t56ANTgLfuyvMLJIrdI6Zp3kwi4VCfIvmSgEWxW34fectWAtkTKsKw3YFphW5sw3cpdPK0ytyinZgzzAAZuufIw%2Bbj2iBErdbZhXTVPo8j9HKl0yL0BLHajR2D1k5VmZUH9MDsKlFfTQ%2F1H6u%2Fv1iQxVYHnbcocWHcKgPiCsKDaKzQeQMI2TGXeSTZStsfsew36GnB2gpSvfjAJC4DLaTNMPP9npGe9sxgzOhROOH4ezBETa0MjCKeiCeRo7r21W9lI6jD10OPCBjqkAdP5L8Z6V4lQTLd%2FtAvTaaeZJUtPdGbeG5fjqnAB3p2RqX568tFwtDchoAc%2B%2Bwv9nRqh%2BkB3njVkithezRP9GdGnoW1JI7RDfHHZnlnpe6zpIX2dGZpsI71UWUl367FCpfrU2kTnfNG2SryzfwamXmnyHvChh0KmRvrF%2FfclJg6goj5SCBsXTuLUwA5OqYtzpeYHDXyJv8An4rOebbyC5h%2Bo%2BYdE&X-Amz-Signature=309b508af5f44ff6dcbd13fcf6a5107f65d66def9774e2a81d9765bd0580e2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3JGURY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChurC5hWzx%2Fgo4aeiLc9hsMvV1QQH7lEXPEqfE0FNBmQIhALg2TBBGO%2F2%2BWxNkoIkStIGJA8D4GkcdY7TEMIN6DPUOKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZkDaIwbhWFL14Rwq3AOezIEB2y%2B6SLx%2FSjKSgoHKNEsjkd1ySe0jE23ZsFb%2B%2B4M0TDllsTf%2Bg4wPeJhe%2FkC3WG6D86Owp4IYcJrENbmHKHHYcLW1Nhuxc%2BwiC8lZT8YagqypkGRznVhUh0Gtb5QaDDLyJrayp4dhjTBHTGBw5VVfGX8vOEpl0lKhR6BZ32pyUkK80JWPqBe5TZdsG3dHd7YZs5FtvGLfFqujJGg9lpnbhHS3MA4kjbhWJ92%2BQ8kmdIATTTYe10FF6u7Gk4vmrJDzQR6fv%2FBz8VrWI8Y4I5PRvY6cxuY4Xg5QmFXywB%2BWwnkizXpLF7zZHG1uzUW60fx0ObOwBgdqONkaHEBEbMeHrlKHBi8k9Qa9ZMRZkiSOuCKhdkgl1t56ANTgLfuyvMLJIrdI6Zp3kwi4VCfIvmSgEWxW34fectWAtkTKsKw3YFphW5sw3cpdPK0ytyinZgzzAAZuufIw%2Bbj2iBErdbZhXTVPo8j9HKl0yL0BLHajR2D1k5VmZUH9MDsKlFfTQ%2F1H6u%2Fv1iQxVYHnbcocWHcKgPiCsKDaKzQeQMI2TGXeSTZStsfsew36GnB2gpSvfjAJC4DLaTNMPP9npGe9sxgzOhROOH4ezBETa0MjCKeiCeRo7r21W9lI6jD10OPCBjqkAdP5L8Z6V4lQTLd%2FtAvTaaeZJUtPdGbeG5fjqnAB3p2RqX568tFwtDchoAc%2B%2Bwv9nRqh%2BkB3njVkithezRP9GdGnoW1JI7RDfHHZnlnpe6zpIX2dGZpsI71UWUl367FCpfrU2kTnfNG2SryzfwamXmnyHvChh0KmRvrF%2FfclJg6goj5SCBsXTuLUwA5OqYtzpeYHDXyJv8An4rOebbyC5h%2Bo%2BYdE&X-Amz-Signature=ed66b2141368aa0a6c941ece3da4961ba0d7f75ee1a000e6ce3788cca2a70eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3JGURY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChurC5hWzx%2Fgo4aeiLc9hsMvV1QQH7lEXPEqfE0FNBmQIhALg2TBBGO%2F2%2BWxNkoIkStIGJA8D4GkcdY7TEMIN6DPUOKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZkDaIwbhWFL14Rwq3AOezIEB2y%2B6SLx%2FSjKSgoHKNEsjkd1ySe0jE23ZsFb%2B%2B4M0TDllsTf%2Bg4wPeJhe%2FkC3WG6D86Owp4IYcJrENbmHKHHYcLW1Nhuxc%2BwiC8lZT8YagqypkGRznVhUh0Gtb5QaDDLyJrayp4dhjTBHTGBw5VVfGX8vOEpl0lKhR6BZ32pyUkK80JWPqBe5TZdsG3dHd7YZs5FtvGLfFqujJGg9lpnbhHS3MA4kjbhWJ92%2BQ8kmdIATTTYe10FF6u7Gk4vmrJDzQR6fv%2FBz8VrWI8Y4I5PRvY6cxuY4Xg5QmFXywB%2BWwnkizXpLF7zZHG1uzUW60fx0ObOwBgdqONkaHEBEbMeHrlKHBi8k9Qa9ZMRZkiSOuCKhdkgl1t56ANTgLfuyvMLJIrdI6Zp3kwi4VCfIvmSgEWxW34fectWAtkTKsKw3YFphW5sw3cpdPK0ytyinZgzzAAZuufIw%2Bbj2iBErdbZhXTVPo8j9HKl0yL0BLHajR2D1k5VmZUH9MDsKlFfTQ%2F1H6u%2Fv1iQxVYHnbcocWHcKgPiCsKDaKzQeQMI2TGXeSTZStsfsew36GnB2gpSvfjAJC4DLaTNMPP9npGe9sxgzOhROOH4ezBETa0MjCKeiCeRo7r21W9lI6jD10OPCBjqkAdP5L8Z6V4lQTLd%2FtAvTaaeZJUtPdGbeG5fjqnAB3p2RqX568tFwtDchoAc%2B%2Bwv9nRqh%2BkB3njVkithezRP9GdGnoW1JI7RDfHHZnlnpe6zpIX2dGZpsI71UWUl367FCpfrU2kTnfNG2SryzfwamXmnyHvChh0KmRvrF%2FfclJg6goj5SCBsXTuLUwA5OqYtzpeYHDXyJv8An4rOebbyC5h%2Bo%2BYdE&X-Amz-Signature=c975f6e894fa71c25a96062e5d41dbc6652709d002064297f3ec5ac083b0b8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3JGURY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChurC5hWzx%2Fgo4aeiLc9hsMvV1QQH7lEXPEqfE0FNBmQIhALg2TBBGO%2F2%2BWxNkoIkStIGJA8D4GkcdY7TEMIN6DPUOKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuZkDaIwbhWFL14Rwq3AOezIEB2y%2B6SLx%2FSjKSgoHKNEsjkd1ySe0jE23ZsFb%2B%2B4M0TDllsTf%2Bg4wPeJhe%2FkC3WG6D86Owp4IYcJrENbmHKHHYcLW1Nhuxc%2BwiC8lZT8YagqypkGRznVhUh0Gtb5QaDDLyJrayp4dhjTBHTGBw5VVfGX8vOEpl0lKhR6BZ32pyUkK80JWPqBe5TZdsG3dHd7YZs5FtvGLfFqujJGg9lpnbhHS3MA4kjbhWJ92%2BQ8kmdIATTTYe10FF6u7Gk4vmrJDzQR6fv%2FBz8VrWI8Y4I5PRvY6cxuY4Xg5QmFXywB%2BWwnkizXpLF7zZHG1uzUW60fx0ObOwBgdqONkaHEBEbMeHrlKHBi8k9Qa9ZMRZkiSOuCKhdkgl1t56ANTgLfuyvMLJIrdI6Zp3kwi4VCfIvmSgEWxW34fectWAtkTKsKw3YFphW5sw3cpdPK0ytyinZgzzAAZuufIw%2Bbj2iBErdbZhXTVPo8j9HKl0yL0BLHajR2D1k5VmZUH9MDsKlFfTQ%2F1H6u%2Fv1iQxVYHnbcocWHcKgPiCsKDaKzQeQMI2TGXeSTZStsfsew36GnB2gpSvfjAJC4DLaTNMPP9npGe9sxgzOhROOH4ezBETa0MjCKeiCeRo7r21W9lI6jD10OPCBjqkAdP5L8Z6V4lQTLd%2FtAvTaaeZJUtPdGbeG5fjqnAB3p2RqX568tFwtDchoAc%2B%2Bwv9nRqh%2BkB3njVkithezRP9GdGnoW1JI7RDfHHZnlnpe6zpIX2dGZpsI71UWUl367FCpfrU2kTnfNG2SryzfwamXmnyHvChh0KmRvrF%2FfclJg6goj5SCBsXTuLUwA5OqYtzpeYHDXyJv8An4rOebbyC5h%2Bo%2BYdE&X-Amz-Signature=195f8fa5600593160d9acafaf923a925d709bdd430324b3fc4c6cac565648461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
