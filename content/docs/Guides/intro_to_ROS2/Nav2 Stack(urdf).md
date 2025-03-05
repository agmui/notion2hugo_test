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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA57IWNM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKwsZFWLJHYa%2FkA1GW7QfCFMjNlRG%2FyFHEIyV3WsItZAiAD%2B9L67S0KLH81ROCJaicjfe3PvItvO8oh2swXk9gjFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvmeF3IKkflxTFiv0KtwD0nq8RJvZ1Wb71gY7%2FrB58CHHUspr%2BM%2FkhVj5skePmYQ1edk9TuRd%2F0ST8oqNG%2BmCYmuDUeVwI5IwL5TKBR3GDfrboW2s8XyRCVQ7PUnM9tgIf%2FC6%2Fc2z0%2FcR4v3U49%2FTlR%2B43IPlk3hsHla4sTokRggLTJVz8UkgZzH0EePlt8W3mc2dDsOgwTPtkTJjvbOUWC%2FSjY5zxAmWXCFUngHFw%2BLKFes8CcOV6zzm2fhBE8NfMkVtqMpcP6GkFHs60p32RcpZf1qLjjH15TCr0HThB%2B4%2FVZfHhcj4PSDEx5Sw%2Fd2y7Zl2HL0OZ3p1dmLDhJjMBCnn1pG895p5Cf9BvPUclAQxw7DoHJxg2fskAjahcUtVzlhw25tfooWclKthV0h%2F%2BpJSRBv29GoVVcIJyYn0SBKh0zqvIeqK9bVK%2B6vAxBrPrjkeP%2B%2FpF8Lvd2IxwURToOJj%2FlT1o2ucG1vAVThfRbr6Or3F6yLl0%2Bx0O02XSidDq58iP2t2tiCv8KvbWaIWDIywiTHrskVhLe5WPNHWV20wOn5JN10y3PQeV%2B%2FVFSVhM36wq4zX4hCtIS4ho%2Br%2F98bVbSoia%2FlyBQgEHcx2KuUbCzqScfU9GkIdZKrvbFEzCPNs3Bjpf1aAxzow2a%2BgvgY6pgHLs6W%2BTMpWYOs7VfGY6774SVQq8l06dZFV8A6eCN3g49iIy6mV5yAf7r6EeRMbpKguEggdBhFUa%2BxoLnikGdTCJcT5jXe%2FWIzMPvjvGpmrnpuzZK4ZbNOSNyO70f3to%2BQB8ElB8tojk3TUBF1MC07nfHxTuzz1xSz7DGrR0h2ai9qz67c0oyYMk%2FLY21pGZU%2ByynJ58U2YsQMAMn4C%2F1vuk46DVv8T&X-Amz-Signature=07ec1437cf6d371ef569bd8a353c34ff5025ddea017976d8bf7aee835101675f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA57IWNM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKwsZFWLJHYa%2FkA1GW7QfCFMjNlRG%2FyFHEIyV3WsItZAiAD%2B9L67S0KLH81ROCJaicjfe3PvItvO8oh2swXk9gjFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvmeF3IKkflxTFiv0KtwD0nq8RJvZ1Wb71gY7%2FrB58CHHUspr%2BM%2FkhVj5skePmYQ1edk9TuRd%2F0ST8oqNG%2BmCYmuDUeVwI5IwL5TKBR3GDfrboW2s8XyRCVQ7PUnM9tgIf%2FC6%2Fc2z0%2FcR4v3U49%2FTlR%2B43IPlk3hsHla4sTokRggLTJVz8UkgZzH0EePlt8W3mc2dDsOgwTPtkTJjvbOUWC%2FSjY5zxAmWXCFUngHFw%2BLKFes8CcOV6zzm2fhBE8NfMkVtqMpcP6GkFHs60p32RcpZf1qLjjH15TCr0HThB%2B4%2FVZfHhcj4PSDEx5Sw%2Fd2y7Zl2HL0OZ3p1dmLDhJjMBCnn1pG895p5Cf9BvPUclAQxw7DoHJxg2fskAjahcUtVzlhw25tfooWclKthV0h%2F%2BpJSRBv29GoVVcIJyYn0SBKh0zqvIeqK9bVK%2B6vAxBrPrjkeP%2B%2FpF8Lvd2IxwURToOJj%2FlT1o2ucG1vAVThfRbr6Or3F6yLl0%2Bx0O02XSidDq58iP2t2tiCv8KvbWaIWDIywiTHrskVhLe5WPNHWV20wOn5JN10y3PQeV%2B%2FVFSVhM36wq4zX4hCtIS4ho%2Br%2F98bVbSoia%2FlyBQgEHcx2KuUbCzqScfU9GkIdZKrvbFEzCPNs3Bjpf1aAxzow2a%2BgvgY6pgHLs6W%2BTMpWYOs7VfGY6774SVQq8l06dZFV8A6eCN3g49iIy6mV5yAf7r6EeRMbpKguEggdBhFUa%2BxoLnikGdTCJcT5jXe%2FWIzMPvjvGpmrnpuzZK4ZbNOSNyO70f3to%2BQB8ElB8tojk3TUBF1MC07nfHxTuzz1xSz7DGrR0h2ai9qz67c0oyYMk%2FLY21pGZU%2ByynJ58U2YsQMAMn4C%2F1vuk46DVv8T&X-Amz-Signature=fe02cd8e0064711e9954ed945e13ffacfb3cfafb2dcda962df077d65ab30c913&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA57IWNM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKwsZFWLJHYa%2FkA1GW7QfCFMjNlRG%2FyFHEIyV3WsItZAiAD%2B9L67S0KLH81ROCJaicjfe3PvItvO8oh2swXk9gjFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvmeF3IKkflxTFiv0KtwD0nq8RJvZ1Wb71gY7%2FrB58CHHUspr%2BM%2FkhVj5skePmYQ1edk9TuRd%2F0ST8oqNG%2BmCYmuDUeVwI5IwL5TKBR3GDfrboW2s8XyRCVQ7PUnM9tgIf%2FC6%2Fc2z0%2FcR4v3U49%2FTlR%2B43IPlk3hsHla4sTokRggLTJVz8UkgZzH0EePlt8W3mc2dDsOgwTPtkTJjvbOUWC%2FSjY5zxAmWXCFUngHFw%2BLKFes8CcOV6zzm2fhBE8NfMkVtqMpcP6GkFHs60p32RcpZf1qLjjH15TCr0HThB%2B4%2FVZfHhcj4PSDEx5Sw%2Fd2y7Zl2HL0OZ3p1dmLDhJjMBCnn1pG895p5Cf9BvPUclAQxw7DoHJxg2fskAjahcUtVzlhw25tfooWclKthV0h%2F%2BpJSRBv29GoVVcIJyYn0SBKh0zqvIeqK9bVK%2B6vAxBrPrjkeP%2B%2FpF8Lvd2IxwURToOJj%2FlT1o2ucG1vAVThfRbr6Or3F6yLl0%2Bx0O02XSidDq58iP2t2tiCv8KvbWaIWDIywiTHrskVhLe5WPNHWV20wOn5JN10y3PQeV%2B%2FVFSVhM36wq4zX4hCtIS4ho%2Br%2F98bVbSoia%2FlyBQgEHcx2KuUbCzqScfU9GkIdZKrvbFEzCPNs3Bjpf1aAxzow2a%2BgvgY6pgHLs6W%2BTMpWYOs7VfGY6774SVQq8l06dZFV8A6eCN3g49iIy6mV5yAf7r6EeRMbpKguEggdBhFUa%2BxoLnikGdTCJcT5jXe%2FWIzMPvjvGpmrnpuzZK4ZbNOSNyO70f3to%2BQB8ElB8tojk3TUBF1MC07nfHxTuzz1xSz7DGrR0h2ai9qz67c0oyYMk%2FLY21pGZU%2ByynJ58U2YsQMAMn4C%2F1vuk46DVv8T&X-Amz-Signature=c2f086bb19ba6ca830c64d03481241761e23efec18014939dff0040d5138ebac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA57IWNM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKwsZFWLJHYa%2FkA1GW7QfCFMjNlRG%2FyFHEIyV3WsItZAiAD%2B9L67S0KLH81ROCJaicjfe3PvItvO8oh2swXk9gjFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvmeF3IKkflxTFiv0KtwD0nq8RJvZ1Wb71gY7%2FrB58CHHUspr%2BM%2FkhVj5skePmYQ1edk9TuRd%2F0ST8oqNG%2BmCYmuDUeVwI5IwL5TKBR3GDfrboW2s8XyRCVQ7PUnM9tgIf%2FC6%2Fc2z0%2FcR4v3U49%2FTlR%2B43IPlk3hsHla4sTokRggLTJVz8UkgZzH0EePlt8W3mc2dDsOgwTPtkTJjvbOUWC%2FSjY5zxAmWXCFUngHFw%2BLKFes8CcOV6zzm2fhBE8NfMkVtqMpcP6GkFHs60p32RcpZf1qLjjH15TCr0HThB%2B4%2FVZfHhcj4PSDEx5Sw%2Fd2y7Zl2HL0OZ3p1dmLDhJjMBCnn1pG895p5Cf9BvPUclAQxw7DoHJxg2fskAjahcUtVzlhw25tfooWclKthV0h%2F%2BpJSRBv29GoVVcIJyYn0SBKh0zqvIeqK9bVK%2B6vAxBrPrjkeP%2B%2FpF8Lvd2IxwURToOJj%2FlT1o2ucG1vAVThfRbr6Or3F6yLl0%2Bx0O02XSidDq58iP2t2tiCv8KvbWaIWDIywiTHrskVhLe5WPNHWV20wOn5JN10y3PQeV%2B%2FVFSVhM36wq4zX4hCtIS4ho%2Br%2F98bVbSoia%2FlyBQgEHcx2KuUbCzqScfU9GkIdZKrvbFEzCPNs3Bjpf1aAxzow2a%2BgvgY6pgHLs6W%2BTMpWYOs7VfGY6774SVQq8l06dZFV8A6eCN3g49iIy6mV5yAf7r6EeRMbpKguEggdBhFUa%2BxoLnikGdTCJcT5jXe%2FWIzMPvjvGpmrnpuzZK4ZbNOSNyO70f3to%2BQB8ElB8tojk3TUBF1MC07nfHxTuzz1xSz7DGrR0h2ai9qz67c0oyYMk%2FLY21pGZU%2ByynJ58U2YsQMAMn4C%2F1vuk46DVv8T&X-Amz-Signature=d60563169c6d7b68b4cb328b7e364c231fbcd2a9f93da51c1226e2141c31e6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA57IWNM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKwsZFWLJHYa%2FkA1GW7QfCFMjNlRG%2FyFHEIyV3WsItZAiAD%2B9L67S0KLH81ROCJaicjfe3PvItvO8oh2swXk9gjFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvmeF3IKkflxTFiv0KtwD0nq8RJvZ1Wb71gY7%2FrB58CHHUspr%2BM%2FkhVj5skePmYQ1edk9TuRd%2F0ST8oqNG%2BmCYmuDUeVwI5IwL5TKBR3GDfrboW2s8XyRCVQ7PUnM9tgIf%2FC6%2Fc2z0%2FcR4v3U49%2FTlR%2B43IPlk3hsHla4sTokRggLTJVz8UkgZzH0EePlt8W3mc2dDsOgwTPtkTJjvbOUWC%2FSjY5zxAmWXCFUngHFw%2BLKFes8CcOV6zzm2fhBE8NfMkVtqMpcP6GkFHs60p32RcpZf1qLjjH15TCr0HThB%2B4%2FVZfHhcj4PSDEx5Sw%2Fd2y7Zl2HL0OZ3p1dmLDhJjMBCnn1pG895p5Cf9BvPUclAQxw7DoHJxg2fskAjahcUtVzlhw25tfooWclKthV0h%2F%2BpJSRBv29GoVVcIJyYn0SBKh0zqvIeqK9bVK%2B6vAxBrPrjkeP%2B%2FpF8Lvd2IxwURToOJj%2FlT1o2ucG1vAVThfRbr6Or3F6yLl0%2Bx0O02XSidDq58iP2t2tiCv8KvbWaIWDIywiTHrskVhLe5WPNHWV20wOn5JN10y3PQeV%2B%2FVFSVhM36wq4zX4hCtIS4ho%2Br%2F98bVbSoia%2FlyBQgEHcx2KuUbCzqScfU9GkIdZKrvbFEzCPNs3Bjpf1aAxzow2a%2BgvgY6pgHLs6W%2BTMpWYOs7VfGY6774SVQq8l06dZFV8A6eCN3g49iIy6mV5yAf7r6EeRMbpKguEggdBhFUa%2BxoLnikGdTCJcT5jXe%2FWIzMPvjvGpmrnpuzZK4ZbNOSNyO70f3to%2BQB8ElB8tojk3TUBF1MC07nfHxTuzz1xSz7DGrR0h2ai9qz67c0oyYMk%2FLY21pGZU%2ByynJ58U2YsQMAMn4C%2F1vuk46DVv8T&X-Amz-Signature=2bc773db780aaaf8e7a1fc6bad52a56152220e61da51d66a0b773ac568a5974b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA57IWNM%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKwsZFWLJHYa%2FkA1GW7QfCFMjNlRG%2FyFHEIyV3WsItZAiAD%2B9L67S0KLH81ROCJaicjfe3PvItvO8oh2swXk9gjFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMvmeF3IKkflxTFiv0KtwD0nq8RJvZ1Wb71gY7%2FrB58CHHUspr%2BM%2FkhVj5skePmYQ1edk9TuRd%2F0ST8oqNG%2BmCYmuDUeVwI5IwL5TKBR3GDfrboW2s8XyRCVQ7PUnM9tgIf%2FC6%2Fc2z0%2FcR4v3U49%2FTlR%2B43IPlk3hsHla4sTokRggLTJVz8UkgZzH0EePlt8W3mc2dDsOgwTPtkTJjvbOUWC%2FSjY5zxAmWXCFUngHFw%2BLKFes8CcOV6zzm2fhBE8NfMkVtqMpcP6GkFHs60p32RcpZf1qLjjH15TCr0HThB%2B4%2FVZfHhcj4PSDEx5Sw%2Fd2y7Zl2HL0OZ3p1dmLDhJjMBCnn1pG895p5Cf9BvPUclAQxw7DoHJxg2fskAjahcUtVzlhw25tfooWclKthV0h%2F%2BpJSRBv29GoVVcIJyYn0SBKh0zqvIeqK9bVK%2B6vAxBrPrjkeP%2B%2FpF8Lvd2IxwURToOJj%2FlT1o2ucG1vAVThfRbr6Or3F6yLl0%2Bx0O02XSidDq58iP2t2tiCv8KvbWaIWDIywiTHrskVhLe5WPNHWV20wOn5JN10y3PQeV%2B%2FVFSVhM36wq4zX4hCtIS4ho%2Br%2F98bVbSoia%2FlyBQgEHcx2KuUbCzqScfU9GkIdZKrvbFEzCPNs3Bjpf1aAxzow2a%2BgvgY6pgHLs6W%2BTMpWYOs7VfGY6774SVQq8l06dZFV8A6eCN3g49iIy6mV5yAf7r6EeRMbpKguEggdBhFUa%2BxoLnikGdTCJcT5jXe%2FWIzMPvjvGpmrnpuzZK4ZbNOSNyO70f3to%2BQB8ElB8tojk3TUBF1MC07nfHxTuzz1xSz7DGrR0h2ai9qz67c0oyYMk%2FLY21pGZU%2ByynJ58U2YsQMAMn4C%2F1vuk46DVv8T&X-Amz-Signature=2e717238b6f32118ff5989812ac4ed0fce8b389ac746e7b1874728d2cc15cee2&X-Amz-SignedHeaders=host&x-id=GetObject)
