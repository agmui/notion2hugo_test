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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756XGVXW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDOr8mIetPirEdytBzVh7ZnfyGIVN3JH0TFfImb%2B%2FJQgIgLmf01VAiTIlVYSjhaKzDs2Xob9d0GtFCHJUsADfORAUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhFEr%2BIkYVSdPylbCrcA%2FQEIL5nV11V23mY8YIt%2BbyDnU57luf8hIK3sAtpGQC7MUBb%2FiQTmxoWZtcoIFweSiJhBaz%2BWKhzbIQ9DDdcQ2mRs%2BskZzDchKF2SLvsxgo5wLl6tSjvsXAFWy6X3073a6uQwEMFggxet2A6ks5304VsNMuq%2FOT%2FrZTHxRG1yrPPzVw7TzcAI8zEw14R29t%2B2N%2FVJrk7oqIyYX2sUOEGC0kGgyAG%2BbkP49xrpLlxJAkLroznsnsMONgMBG7pT3EQ9lNeN%2FwUDK8iddSShbvbPP7zul0AV36nuSzxPyIG36NZ9nNsnNVhIkxFEKqwUGGinngUP57%2F%2B%2FAwSiIyutpsvkWZi5BIWX0QM6oOEgDYuddDC6XHipI98phbeEiX6RIVopHYTQuLxp4XomzMCxTXo7gNdsjOft%2BUBLOOEjrtAOSqxYipCg%2FoCQ8TlXBv6Sw2%2BODWY2egHa3Kq3rbCioQuZoZKslzOBPZC5D6f6yjqneq8nd%2BcRtNZr2%2Fmp%2FFDkUzTbBKwlBnzqR1jxXgkIKzs8ymVym0rFC8l%2BXXK6w8osfrDZz7o6AQJoiDypl8Z9cz9y8PanCDATXI3BFxHMrxITPkt7I3GkzP2NtzlZikqMq8oWT%2FZ%2FrA7jlnSfrQMJHhyMAGOqUB442tY5jeExHvtXNhdJBrA7R4XhB0CGWVfwatY4IBjQOf6Kg0VxvXnnknI1SYmYHhFE5ueJ2hhIjm9PQpuVjZzReGmf%2Fp5gydZ%2FuhWVyiHDY0pDvrZGZ97CipT1%2FQbN4XeTIdfE%2BaECibKlpWCDN6nRTK%2Fv9U48FCAogyV%2BHLRbnoxfCSzABoAl06vJFe8vN2%2BE5cuusCwedsMgbouoD8EU2sE%2Fd2&X-Amz-Signature=daec5cb99ea719e0f4f7bcd74032c431e45c5eac917b6d54eee42f3ca611f506&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756XGVXW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDOr8mIetPirEdytBzVh7ZnfyGIVN3JH0TFfImb%2B%2FJQgIgLmf01VAiTIlVYSjhaKzDs2Xob9d0GtFCHJUsADfORAUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhFEr%2BIkYVSdPylbCrcA%2FQEIL5nV11V23mY8YIt%2BbyDnU57luf8hIK3sAtpGQC7MUBb%2FiQTmxoWZtcoIFweSiJhBaz%2BWKhzbIQ9DDdcQ2mRs%2BskZzDchKF2SLvsxgo5wLl6tSjvsXAFWy6X3073a6uQwEMFggxet2A6ks5304VsNMuq%2FOT%2FrZTHxRG1yrPPzVw7TzcAI8zEw14R29t%2B2N%2FVJrk7oqIyYX2sUOEGC0kGgyAG%2BbkP49xrpLlxJAkLroznsnsMONgMBG7pT3EQ9lNeN%2FwUDK8iddSShbvbPP7zul0AV36nuSzxPyIG36NZ9nNsnNVhIkxFEKqwUGGinngUP57%2F%2B%2FAwSiIyutpsvkWZi5BIWX0QM6oOEgDYuddDC6XHipI98phbeEiX6RIVopHYTQuLxp4XomzMCxTXo7gNdsjOft%2BUBLOOEjrtAOSqxYipCg%2FoCQ8TlXBv6Sw2%2BODWY2egHa3Kq3rbCioQuZoZKslzOBPZC5D6f6yjqneq8nd%2BcRtNZr2%2Fmp%2FFDkUzTbBKwlBnzqR1jxXgkIKzs8ymVym0rFC8l%2BXXK6w8osfrDZz7o6AQJoiDypl8Z9cz9y8PanCDATXI3BFxHMrxITPkt7I3GkzP2NtzlZikqMq8oWT%2FZ%2FrA7jlnSfrQMJHhyMAGOqUB442tY5jeExHvtXNhdJBrA7R4XhB0CGWVfwatY4IBjQOf6Kg0VxvXnnknI1SYmYHhFE5ueJ2hhIjm9PQpuVjZzReGmf%2Fp5gydZ%2FuhWVyiHDY0pDvrZGZ97CipT1%2FQbN4XeTIdfE%2BaECibKlpWCDN6nRTK%2Fv9U48FCAogyV%2BHLRbnoxfCSzABoAl06vJFe8vN2%2BE5cuusCwedsMgbouoD8EU2sE%2Fd2&X-Amz-Signature=e99f0d90fba90f2a25df6fadb5e63637f15326498f4b43cd4d4eb16af9be6eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756XGVXW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDOr8mIetPirEdytBzVh7ZnfyGIVN3JH0TFfImb%2B%2FJQgIgLmf01VAiTIlVYSjhaKzDs2Xob9d0GtFCHJUsADfORAUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhFEr%2BIkYVSdPylbCrcA%2FQEIL5nV11V23mY8YIt%2BbyDnU57luf8hIK3sAtpGQC7MUBb%2FiQTmxoWZtcoIFweSiJhBaz%2BWKhzbIQ9DDdcQ2mRs%2BskZzDchKF2SLvsxgo5wLl6tSjvsXAFWy6X3073a6uQwEMFggxet2A6ks5304VsNMuq%2FOT%2FrZTHxRG1yrPPzVw7TzcAI8zEw14R29t%2B2N%2FVJrk7oqIyYX2sUOEGC0kGgyAG%2BbkP49xrpLlxJAkLroznsnsMONgMBG7pT3EQ9lNeN%2FwUDK8iddSShbvbPP7zul0AV36nuSzxPyIG36NZ9nNsnNVhIkxFEKqwUGGinngUP57%2F%2B%2FAwSiIyutpsvkWZi5BIWX0QM6oOEgDYuddDC6XHipI98phbeEiX6RIVopHYTQuLxp4XomzMCxTXo7gNdsjOft%2BUBLOOEjrtAOSqxYipCg%2FoCQ8TlXBv6Sw2%2BODWY2egHa3Kq3rbCioQuZoZKslzOBPZC5D6f6yjqneq8nd%2BcRtNZr2%2Fmp%2FFDkUzTbBKwlBnzqR1jxXgkIKzs8ymVym0rFC8l%2BXXK6w8osfrDZz7o6AQJoiDypl8Z9cz9y8PanCDATXI3BFxHMrxITPkt7I3GkzP2NtzlZikqMq8oWT%2FZ%2FrA7jlnSfrQMJHhyMAGOqUB442tY5jeExHvtXNhdJBrA7R4XhB0CGWVfwatY4IBjQOf6Kg0VxvXnnknI1SYmYHhFE5ueJ2hhIjm9PQpuVjZzReGmf%2Fp5gydZ%2FuhWVyiHDY0pDvrZGZ97CipT1%2FQbN4XeTIdfE%2BaECibKlpWCDN6nRTK%2Fv9U48FCAogyV%2BHLRbnoxfCSzABoAl06vJFe8vN2%2BE5cuusCwedsMgbouoD8EU2sE%2Fd2&X-Amz-Signature=e30f68223f58dfbbf68e2f49376f58198fbbd6317cb866414dadccf3a066daad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756XGVXW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDOr8mIetPirEdytBzVh7ZnfyGIVN3JH0TFfImb%2B%2FJQgIgLmf01VAiTIlVYSjhaKzDs2Xob9d0GtFCHJUsADfORAUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhFEr%2BIkYVSdPylbCrcA%2FQEIL5nV11V23mY8YIt%2BbyDnU57luf8hIK3sAtpGQC7MUBb%2FiQTmxoWZtcoIFweSiJhBaz%2BWKhzbIQ9DDdcQ2mRs%2BskZzDchKF2SLvsxgo5wLl6tSjvsXAFWy6X3073a6uQwEMFggxet2A6ks5304VsNMuq%2FOT%2FrZTHxRG1yrPPzVw7TzcAI8zEw14R29t%2B2N%2FVJrk7oqIyYX2sUOEGC0kGgyAG%2BbkP49xrpLlxJAkLroznsnsMONgMBG7pT3EQ9lNeN%2FwUDK8iddSShbvbPP7zul0AV36nuSzxPyIG36NZ9nNsnNVhIkxFEKqwUGGinngUP57%2F%2B%2FAwSiIyutpsvkWZi5BIWX0QM6oOEgDYuddDC6XHipI98phbeEiX6RIVopHYTQuLxp4XomzMCxTXo7gNdsjOft%2BUBLOOEjrtAOSqxYipCg%2FoCQ8TlXBv6Sw2%2BODWY2egHa3Kq3rbCioQuZoZKslzOBPZC5D6f6yjqneq8nd%2BcRtNZr2%2Fmp%2FFDkUzTbBKwlBnzqR1jxXgkIKzs8ymVym0rFC8l%2BXXK6w8osfrDZz7o6AQJoiDypl8Z9cz9y8PanCDATXI3BFxHMrxITPkt7I3GkzP2NtzlZikqMq8oWT%2FZ%2FrA7jlnSfrQMJHhyMAGOqUB442tY5jeExHvtXNhdJBrA7R4XhB0CGWVfwatY4IBjQOf6Kg0VxvXnnknI1SYmYHhFE5ueJ2hhIjm9PQpuVjZzReGmf%2Fp5gydZ%2FuhWVyiHDY0pDvrZGZ97CipT1%2FQbN4XeTIdfE%2BaECibKlpWCDN6nRTK%2Fv9U48FCAogyV%2BHLRbnoxfCSzABoAl06vJFe8vN2%2BE5cuusCwedsMgbouoD8EU2sE%2Fd2&X-Amz-Signature=b2458843e24b46ec9d17e8bf62474f694faf6774141a0dbd6b6ed458fc1555aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756XGVXW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDOr8mIetPirEdytBzVh7ZnfyGIVN3JH0TFfImb%2B%2FJQgIgLmf01VAiTIlVYSjhaKzDs2Xob9d0GtFCHJUsADfORAUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhFEr%2BIkYVSdPylbCrcA%2FQEIL5nV11V23mY8YIt%2BbyDnU57luf8hIK3sAtpGQC7MUBb%2FiQTmxoWZtcoIFweSiJhBaz%2BWKhzbIQ9DDdcQ2mRs%2BskZzDchKF2SLvsxgo5wLl6tSjvsXAFWy6X3073a6uQwEMFggxet2A6ks5304VsNMuq%2FOT%2FrZTHxRG1yrPPzVw7TzcAI8zEw14R29t%2B2N%2FVJrk7oqIyYX2sUOEGC0kGgyAG%2BbkP49xrpLlxJAkLroznsnsMONgMBG7pT3EQ9lNeN%2FwUDK8iddSShbvbPP7zul0AV36nuSzxPyIG36NZ9nNsnNVhIkxFEKqwUGGinngUP57%2F%2B%2FAwSiIyutpsvkWZi5BIWX0QM6oOEgDYuddDC6XHipI98phbeEiX6RIVopHYTQuLxp4XomzMCxTXo7gNdsjOft%2BUBLOOEjrtAOSqxYipCg%2FoCQ8TlXBv6Sw2%2BODWY2egHa3Kq3rbCioQuZoZKslzOBPZC5D6f6yjqneq8nd%2BcRtNZr2%2Fmp%2FFDkUzTbBKwlBnzqR1jxXgkIKzs8ymVym0rFC8l%2BXXK6w8osfrDZz7o6AQJoiDypl8Z9cz9y8PanCDATXI3BFxHMrxITPkt7I3GkzP2NtzlZikqMq8oWT%2FZ%2FrA7jlnSfrQMJHhyMAGOqUB442tY5jeExHvtXNhdJBrA7R4XhB0CGWVfwatY4IBjQOf6Kg0VxvXnnknI1SYmYHhFE5ueJ2hhIjm9PQpuVjZzReGmf%2Fp5gydZ%2FuhWVyiHDY0pDvrZGZ97CipT1%2FQbN4XeTIdfE%2BaECibKlpWCDN6nRTK%2Fv9U48FCAogyV%2BHLRbnoxfCSzABoAl06vJFe8vN2%2BE5cuusCwedsMgbouoD8EU2sE%2Fd2&X-Amz-Signature=421f511978b94462a8d48e9dadb7e388f8d7befe849ddfce28f6d01422462be8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756XGVXW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDOr8mIetPirEdytBzVh7ZnfyGIVN3JH0TFfImb%2B%2FJQgIgLmf01VAiTIlVYSjhaKzDs2Xob9d0GtFCHJUsADfORAUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhFEr%2BIkYVSdPylbCrcA%2FQEIL5nV11V23mY8YIt%2BbyDnU57luf8hIK3sAtpGQC7MUBb%2FiQTmxoWZtcoIFweSiJhBaz%2BWKhzbIQ9DDdcQ2mRs%2BskZzDchKF2SLvsxgo5wLl6tSjvsXAFWy6X3073a6uQwEMFggxet2A6ks5304VsNMuq%2FOT%2FrZTHxRG1yrPPzVw7TzcAI8zEw14R29t%2B2N%2FVJrk7oqIyYX2sUOEGC0kGgyAG%2BbkP49xrpLlxJAkLroznsnsMONgMBG7pT3EQ9lNeN%2FwUDK8iddSShbvbPP7zul0AV36nuSzxPyIG36NZ9nNsnNVhIkxFEKqwUGGinngUP57%2F%2B%2FAwSiIyutpsvkWZi5BIWX0QM6oOEgDYuddDC6XHipI98phbeEiX6RIVopHYTQuLxp4XomzMCxTXo7gNdsjOft%2BUBLOOEjrtAOSqxYipCg%2FoCQ8TlXBv6Sw2%2BODWY2egHa3Kq3rbCioQuZoZKslzOBPZC5D6f6yjqneq8nd%2BcRtNZr2%2Fmp%2FFDkUzTbBKwlBnzqR1jxXgkIKzs8ymVym0rFC8l%2BXXK6w8osfrDZz7o6AQJoiDypl8Z9cz9y8PanCDATXI3BFxHMrxITPkt7I3GkzP2NtzlZikqMq8oWT%2FZ%2FrA7jlnSfrQMJHhyMAGOqUB442tY5jeExHvtXNhdJBrA7R4XhB0CGWVfwatY4IBjQOf6Kg0VxvXnnknI1SYmYHhFE5ueJ2hhIjm9PQpuVjZzReGmf%2Fp5gydZ%2FuhWVyiHDY0pDvrZGZ97CipT1%2FQbN4XeTIdfE%2BaECibKlpWCDN6nRTK%2Fv9U48FCAogyV%2BHLRbnoxfCSzABoAl06vJFe8vN2%2BE5cuusCwedsMgbouoD8EU2sE%2Fd2&X-Amz-Signature=8b4061a41468da909718ea6952f5e406f467b396692a0d28eee0c49f4fb029f6&X-Amz-SignedHeaders=host&x-id=GetObject)
