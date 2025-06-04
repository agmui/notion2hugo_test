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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBP6RCP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYjH8JDnD63IhZBClYucMshw%2FJQr3%2B9lvVExvyJZam2wIgS7siyQm74YVw5OyXnqH8laxR7uH%2BRaOtQEBDUXJaTKUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFja%2FK%2BKzqBiHa0pLyrcA0%2FtWaKgllJkRpjvzCfH%2FjtvRLM7pj7%2Bzv4S%2B2JHRJIX7WZ4lS8pogQf7SIKDedtruPaaWrHkrIlmxyJPYhyKSUmEJqW9rhO%2BmolHoHaz7Pgz3iTNbjs3ll%2FL5JrEIrxs8VxoHlPwarEsfzn4ChMLeVajfN4pHf3SDaRPAB0s1YSDzKBk3XFW%2BT6s21DEgawaavv7KnBm8oPDKcwaVr0po%2FtRw2hiDOiXYHhkBji1Fc3MzawZWStYdhT2ObzyMtS4%2B8fpZKDUsqJRiuSWpHOaUYymuXtw1a%2FOlj31U82i6czxQ5I3DKBRXuzlIjowG3dQk5Cx8Zo2JC9FuEY9t4Luj7kFmfXnvzeQtP%2Famgn55%2BOkDuNagVR3jRCa5vNnNLH0eUoV26OiUnjnnQYUwZ88gk3W7IfaXoHr%2BNzr5uoR%2F%2Fc6%2F%2F7Z5A43icMyccvoIUcpvlxwTIUh3iSsjbTa6DJyzT9ENcEKA7pIHCGx%2BblN3Xa2cc%2BsMwV%2FGbPZAusSvOeGe4xMQ3%2BirCq7SD%2F02K30dQgg%2BNzXyt5g0B0Uw2maEFM9C%2Bjx%2Fn%2FYxFjrAB9hTg9R%2B%2BScO12NtYRlpmnkCaN%2FlAPwObaOKJHS%2Bo6C8eJe4%2FaswMS490wQvyr%2FDC4MPLg%2FsEGOqUBzm4cif3JKhOp%2BXo8Yd9pZgA9%2BswQX427ufBBoauxUs8qY15xTSFVi4%2Fp9HM1t%2FWkvFEDf7Qyhi3%2Fldsght%2BkzoF%2BgmKSitdlX%2Bu62WcvYCqAnYDznU58W9avlJKlF05koAOuDkTYJMTj8qdg5DO0MCyloF0GdCXYCs4gH6NkouaoKdN57hOECLfbis8z6IGdnDbD8Zj2wDfBE2rZ%2B6BpzDRy32B%2F&X-Amz-Signature=4db20aa823fc3d4cf759d2e37d31fbfdba1ae6fcbb80e285d49d11c1790d0be5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBP6RCP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYjH8JDnD63IhZBClYucMshw%2FJQr3%2B9lvVExvyJZam2wIgS7siyQm74YVw5OyXnqH8laxR7uH%2BRaOtQEBDUXJaTKUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFja%2FK%2BKzqBiHa0pLyrcA0%2FtWaKgllJkRpjvzCfH%2FjtvRLM7pj7%2Bzv4S%2B2JHRJIX7WZ4lS8pogQf7SIKDedtruPaaWrHkrIlmxyJPYhyKSUmEJqW9rhO%2BmolHoHaz7Pgz3iTNbjs3ll%2FL5JrEIrxs8VxoHlPwarEsfzn4ChMLeVajfN4pHf3SDaRPAB0s1YSDzKBk3XFW%2BT6s21DEgawaavv7KnBm8oPDKcwaVr0po%2FtRw2hiDOiXYHhkBji1Fc3MzawZWStYdhT2ObzyMtS4%2B8fpZKDUsqJRiuSWpHOaUYymuXtw1a%2FOlj31U82i6czxQ5I3DKBRXuzlIjowG3dQk5Cx8Zo2JC9FuEY9t4Luj7kFmfXnvzeQtP%2Famgn55%2BOkDuNagVR3jRCa5vNnNLH0eUoV26OiUnjnnQYUwZ88gk3W7IfaXoHr%2BNzr5uoR%2F%2Fc6%2F%2F7Z5A43icMyccvoIUcpvlxwTIUh3iSsjbTa6DJyzT9ENcEKA7pIHCGx%2BblN3Xa2cc%2BsMwV%2FGbPZAusSvOeGe4xMQ3%2BirCq7SD%2F02K30dQgg%2BNzXyt5g0B0Uw2maEFM9C%2Bjx%2Fn%2FYxFjrAB9hTg9R%2B%2BScO12NtYRlpmnkCaN%2FlAPwObaOKJHS%2Bo6C8eJe4%2FaswMS490wQvyr%2FDC4MPLg%2FsEGOqUBzm4cif3JKhOp%2BXo8Yd9pZgA9%2BswQX427ufBBoauxUs8qY15xTSFVi4%2Fp9HM1t%2FWkvFEDf7Qyhi3%2Fldsght%2BkzoF%2BgmKSitdlX%2Bu62WcvYCqAnYDznU58W9avlJKlF05koAOuDkTYJMTj8qdg5DO0MCyloF0GdCXYCs4gH6NkouaoKdN57hOECLfbis8z6IGdnDbD8Zj2wDfBE2rZ%2B6BpzDRy32B%2F&X-Amz-Signature=9b227cb0d0b0b9c3edb69ad6c9df2b9a423921758f81b932599bcca80fe77cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBP6RCP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYjH8JDnD63IhZBClYucMshw%2FJQr3%2B9lvVExvyJZam2wIgS7siyQm74YVw5OyXnqH8laxR7uH%2BRaOtQEBDUXJaTKUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFja%2FK%2BKzqBiHa0pLyrcA0%2FtWaKgllJkRpjvzCfH%2FjtvRLM7pj7%2Bzv4S%2B2JHRJIX7WZ4lS8pogQf7SIKDedtruPaaWrHkrIlmxyJPYhyKSUmEJqW9rhO%2BmolHoHaz7Pgz3iTNbjs3ll%2FL5JrEIrxs8VxoHlPwarEsfzn4ChMLeVajfN4pHf3SDaRPAB0s1YSDzKBk3XFW%2BT6s21DEgawaavv7KnBm8oPDKcwaVr0po%2FtRw2hiDOiXYHhkBji1Fc3MzawZWStYdhT2ObzyMtS4%2B8fpZKDUsqJRiuSWpHOaUYymuXtw1a%2FOlj31U82i6czxQ5I3DKBRXuzlIjowG3dQk5Cx8Zo2JC9FuEY9t4Luj7kFmfXnvzeQtP%2Famgn55%2BOkDuNagVR3jRCa5vNnNLH0eUoV26OiUnjnnQYUwZ88gk3W7IfaXoHr%2BNzr5uoR%2F%2Fc6%2F%2F7Z5A43icMyccvoIUcpvlxwTIUh3iSsjbTa6DJyzT9ENcEKA7pIHCGx%2BblN3Xa2cc%2BsMwV%2FGbPZAusSvOeGe4xMQ3%2BirCq7SD%2F02K30dQgg%2BNzXyt5g0B0Uw2maEFM9C%2Bjx%2Fn%2FYxFjrAB9hTg9R%2B%2BScO12NtYRlpmnkCaN%2FlAPwObaOKJHS%2Bo6C8eJe4%2FaswMS490wQvyr%2FDC4MPLg%2FsEGOqUBzm4cif3JKhOp%2BXo8Yd9pZgA9%2BswQX427ufBBoauxUs8qY15xTSFVi4%2Fp9HM1t%2FWkvFEDf7Qyhi3%2Fldsght%2BkzoF%2BgmKSitdlX%2Bu62WcvYCqAnYDznU58W9avlJKlF05koAOuDkTYJMTj8qdg5DO0MCyloF0GdCXYCs4gH6NkouaoKdN57hOECLfbis8z6IGdnDbD8Zj2wDfBE2rZ%2B6BpzDRy32B%2F&X-Amz-Signature=7622286fad18d161cafe9c43e1e7590222f5184f8937b313ec93a9270b5f0a50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBP6RCP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYjH8JDnD63IhZBClYucMshw%2FJQr3%2B9lvVExvyJZam2wIgS7siyQm74YVw5OyXnqH8laxR7uH%2BRaOtQEBDUXJaTKUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFja%2FK%2BKzqBiHa0pLyrcA0%2FtWaKgllJkRpjvzCfH%2FjtvRLM7pj7%2Bzv4S%2B2JHRJIX7WZ4lS8pogQf7SIKDedtruPaaWrHkrIlmxyJPYhyKSUmEJqW9rhO%2BmolHoHaz7Pgz3iTNbjs3ll%2FL5JrEIrxs8VxoHlPwarEsfzn4ChMLeVajfN4pHf3SDaRPAB0s1YSDzKBk3XFW%2BT6s21DEgawaavv7KnBm8oPDKcwaVr0po%2FtRw2hiDOiXYHhkBji1Fc3MzawZWStYdhT2ObzyMtS4%2B8fpZKDUsqJRiuSWpHOaUYymuXtw1a%2FOlj31U82i6czxQ5I3DKBRXuzlIjowG3dQk5Cx8Zo2JC9FuEY9t4Luj7kFmfXnvzeQtP%2Famgn55%2BOkDuNagVR3jRCa5vNnNLH0eUoV26OiUnjnnQYUwZ88gk3W7IfaXoHr%2BNzr5uoR%2F%2Fc6%2F%2F7Z5A43icMyccvoIUcpvlxwTIUh3iSsjbTa6DJyzT9ENcEKA7pIHCGx%2BblN3Xa2cc%2BsMwV%2FGbPZAusSvOeGe4xMQ3%2BirCq7SD%2F02K30dQgg%2BNzXyt5g0B0Uw2maEFM9C%2Bjx%2Fn%2FYxFjrAB9hTg9R%2B%2BScO12NtYRlpmnkCaN%2FlAPwObaOKJHS%2Bo6C8eJe4%2FaswMS490wQvyr%2FDC4MPLg%2FsEGOqUBzm4cif3JKhOp%2BXo8Yd9pZgA9%2BswQX427ufBBoauxUs8qY15xTSFVi4%2Fp9HM1t%2FWkvFEDf7Qyhi3%2Fldsght%2BkzoF%2BgmKSitdlX%2Bu62WcvYCqAnYDznU58W9avlJKlF05koAOuDkTYJMTj8qdg5DO0MCyloF0GdCXYCs4gH6NkouaoKdN57hOECLfbis8z6IGdnDbD8Zj2wDfBE2rZ%2B6BpzDRy32B%2F&X-Amz-Signature=db9379b0e6c547e16d18e91b14caf8c00f547e0fe127eb67ebee7315dd221ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBP6RCP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYjH8JDnD63IhZBClYucMshw%2FJQr3%2B9lvVExvyJZam2wIgS7siyQm74YVw5OyXnqH8laxR7uH%2BRaOtQEBDUXJaTKUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFja%2FK%2BKzqBiHa0pLyrcA0%2FtWaKgllJkRpjvzCfH%2FjtvRLM7pj7%2Bzv4S%2B2JHRJIX7WZ4lS8pogQf7SIKDedtruPaaWrHkrIlmxyJPYhyKSUmEJqW9rhO%2BmolHoHaz7Pgz3iTNbjs3ll%2FL5JrEIrxs8VxoHlPwarEsfzn4ChMLeVajfN4pHf3SDaRPAB0s1YSDzKBk3XFW%2BT6s21DEgawaavv7KnBm8oPDKcwaVr0po%2FtRw2hiDOiXYHhkBji1Fc3MzawZWStYdhT2ObzyMtS4%2B8fpZKDUsqJRiuSWpHOaUYymuXtw1a%2FOlj31U82i6czxQ5I3DKBRXuzlIjowG3dQk5Cx8Zo2JC9FuEY9t4Luj7kFmfXnvzeQtP%2Famgn55%2BOkDuNagVR3jRCa5vNnNLH0eUoV26OiUnjnnQYUwZ88gk3W7IfaXoHr%2BNzr5uoR%2F%2Fc6%2F%2F7Z5A43icMyccvoIUcpvlxwTIUh3iSsjbTa6DJyzT9ENcEKA7pIHCGx%2BblN3Xa2cc%2BsMwV%2FGbPZAusSvOeGe4xMQ3%2BirCq7SD%2F02K30dQgg%2BNzXyt5g0B0Uw2maEFM9C%2Bjx%2Fn%2FYxFjrAB9hTg9R%2B%2BScO12NtYRlpmnkCaN%2FlAPwObaOKJHS%2Bo6C8eJe4%2FaswMS490wQvyr%2FDC4MPLg%2FsEGOqUBzm4cif3JKhOp%2BXo8Yd9pZgA9%2BswQX427ufBBoauxUs8qY15xTSFVi4%2Fp9HM1t%2FWkvFEDf7Qyhi3%2Fldsght%2BkzoF%2BgmKSitdlX%2Bu62WcvYCqAnYDznU58W9avlJKlF05koAOuDkTYJMTj8qdg5DO0MCyloF0GdCXYCs4gH6NkouaoKdN57hOECLfbis8z6IGdnDbD8Zj2wDfBE2rZ%2B6BpzDRy32B%2F&X-Amz-Signature=c3f4e5d7f3b22df9aa7b7e2f898c21bf3ff948ec68d7283259bcd4ecfc061d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBP6RCP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCYjH8JDnD63IhZBClYucMshw%2FJQr3%2B9lvVExvyJZam2wIgS7siyQm74YVw5OyXnqH8laxR7uH%2BRaOtQEBDUXJaTKUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFja%2FK%2BKzqBiHa0pLyrcA0%2FtWaKgllJkRpjvzCfH%2FjtvRLM7pj7%2Bzv4S%2B2JHRJIX7WZ4lS8pogQf7SIKDedtruPaaWrHkrIlmxyJPYhyKSUmEJqW9rhO%2BmolHoHaz7Pgz3iTNbjs3ll%2FL5JrEIrxs8VxoHlPwarEsfzn4ChMLeVajfN4pHf3SDaRPAB0s1YSDzKBk3XFW%2BT6s21DEgawaavv7KnBm8oPDKcwaVr0po%2FtRw2hiDOiXYHhkBji1Fc3MzawZWStYdhT2ObzyMtS4%2B8fpZKDUsqJRiuSWpHOaUYymuXtw1a%2FOlj31U82i6czxQ5I3DKBRXuzlIjowG3dQk5Cx8Zo2JC9FuEY9t4Luj7kFmfXnvzeQtP%2Famgn55%2BOkDuNagVR3jRCa5vNnNLH0eUoV26OiUnjnnQYUwZ88gk3W7IfaXoHr%2BNzr5uoR%2F%2Fc6%2F%2F7Z5A43icMyccvoIUcpvlxwTIUh3iSsjbTa6DJyzT9ENcEKA7pIHCGx%2BblN3Xa2cc%2BsMwV%2FGbPZAusSvOeGe4xMQ3%2BirCq7SD%2F02K30dQgg%2BNzXyt5g0B0Uw2maEFM9C%2Bjx%2Fn%2FYxFjrAB9hTg9R%2B%2BScO12NtYRlpmnkCaN%2FlAPwObaOKJHS%2Bo6C8eJe4%2FaswMS490wQvyr%2FDC4MPLg%2FsEGOqUBzm4cif3JKhOp%2BXo8Yd9pZgA9%2BswQX427ufBBoauxUs8qY15xTSFVi4%2Fp9HM1t%2FWkvFEDf7Qyhi3%2Fldsght%2BkzoF%2BgmKSitdlX%2Bu62WcvYCqAnYDznU58W9avlJKlF05koAOuDkTYJMTj8qdg5DO0MCyloF0GdCXYCs4gH6NkouaoKdN57hOECLfbis8z6IGdnDbD8Zj2wDfBE2rZ%2B6BpzDRy32B%2F&X-Amz-Signature=362607a0a439abb2c14baa05dedd07c5185bf7209184259b4ad3eb11f7bb06a7&X-Amz-SignedHeaders=host&x-id=GetObject)
