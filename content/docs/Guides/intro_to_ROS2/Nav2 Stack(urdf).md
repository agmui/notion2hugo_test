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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5L63S2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHgatyn9DW%2BtIWCbIbMYWY56ZR3FMZyZhcRu1PJnsQpTAiAezzaO6%2FQmg0Odsz3X4v4liG53wxHPH51bqTW%2FHYMy7ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMM%2FCsVr8B%2FCUWYOPtKtwDjea1hwCx514OJhYora5Rk86tJQSEMVuhCb5d8H9p3M3tQW9W6mnaUCf21hbgwhFncSIcxoTH4D%2B3tlBn8Ltsr8eowEitUFzOOMoY7DfBkYapkW9Zfu1Xe%2FHHRK8wUO1Oomqxczam%2FhRlmMTa6Pp9O6dWvDKZ3Nzahey5eNboeWEk%2BKjWdGGvxNf3gk95pznWatOTdlfbONCRf6BPGdebvHCUiM%2BULfNK8BI2bLApj5phOI%2BQBrSneWey7ngFa%2FPeDNOxyb4jQsa5kjOuz7YHwbLG8aEUfRkWIixLDGkgEIZdHDa8DPc%2FfnVnt7OjePQ75rTeLKrm%2BDDD1BAZKKIC4HJ4gcCNHMcMwGqqoYzxpZ1U2Tfn55n8QXNUGw5C2F9mtJflRNgH9uMcgJBUQE0%2FFIJgcL6CcMaxsNOKwCh8eUQeM6SYcyJKGfC7BFeM76g6R0k9%2F3ZrY6ap5Rqcfd%2F2Tyf%2FjS31CjO5xH00p5xxgObuI656WPP1YWVbrJ5%2FJLGe6Qdn8Vz2VTGAnoqetMjrBKJGWgh6xzyF%2FRhD%2BJ9juUUm4XrnTzTsFclRBzW8gUYCRxrXIzGRVe5HUU286c1Lq2vWU1Xila4%2FvMDOquiktgMh3lQpbUVIuvOuatgw7YS6wgY6pgFReuADpzWhFoNpgp5d3EH2tZMOC4xQPPNqIkwM0Nv4afW1jLTpOMaNC3Ne%2BF%2BeflkIQnjIKd%2BqrBLoazqUHx77rgatQKZWZ%2FxRNRG6nxwxqU3ehqWeuPU5L6jjUzjswKAuIybT1%2F32nDoBRYUnjtyVdunIwXsNk3cd%2BFWtdkFDWWxRw0Re6A0MMO5BQevt0ZXG7o79%2F%2BVBGa0HxgDeiDaNaxgtRios&X-Amz-Signature=3cc10f31c10707d6410109e49ad3dc29f80f972becd3009bd517d9dee27a7150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5L63S2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHgatyn9DW%2BtIWCbIbMYWY56ZR3FMZyZhcRu1PJnsQpTAiAezzaO6%2FQmg0Odsz3X4v4liG53wxHPH51bqTW%2FHYMy7ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMM%2FCsVr8B%2FCUWYOPtKtwDjea1hwCx514OJhYora5Rk86tJQSEMVuhCb5d8H9p3M3tQW9W6mnaUCf21hbgwhFncSIcxoTH4D%2B3tlBn8Ltsr8eowEitUFzOOMoY7DfBkYapkW9Zfu1Xe%2FHHRK8wUO1Oomqxczam%2FhRlmMTa6Pp9O6dWvDKZ3Nzahey5eNboeWEk%2BKjWdGGvxNf3gk95pznWatOTdlfbONCRf6BPGdebvHCUiM%2BULfNK8BI2bLApj5phOI%2BQBrSneWey7ngFa%2FPeDNOxyb4jQsa5kjOuz7YHwbLG8aEUfRkWIixLDGkgEIZdHDa8DPc%2FfnVnt7OjePQ75rTeLKrm%2BDDD1BAZKKIC4HJ4gcCNHMcMwGqqoYzxpZ1U2Tfn55n8QXNUGw5C2F9mtJflRNgH9uMcgJBUQE0%2FFIJgcL6CcMaxsNOKwCh8eUQeM6SYcyJKGfC7BFeM76g6R0k9%2F3ZrY6ap5Rqcfd%2F2Tyf%2FjS31CjO5xH00p5xxgObuI656WPP1YWVbrJ5%2FJLGe6Qdn8Vz2VTGAnoqetMjrBKJGWgh6xzyF%2FRhD%2BJ9juUUm4XrnTzTsFclRBzW8gUYCRxrXIzGRVe5HUU286c1Lq2vWU1Xila4%2FvMDOquiktgMh3lQpbUVIuvOuatgw7YS6wgY6pgFReuADpzWhFoNpgp5d3EH2tZMOC4xQPPNqIkwM0Nv4afW1jLTpOMaNC3Ne%2BF%2BeflkIQnjIKd%2BqrBLoazqUHx77rgatQKZWZ%2FxRNRG6nxwxqU3ehqWeuPU5L6jjUzjswKAuIybT1%2F32nDoBRYUnjtyVdunIwXsNk3cd%2BFWtdkFDWWxRw0Re6A0MMO5BQevt0ZXG7o79%2F%2BVBGa0HxgDeiDaNaxgtRios&X-Amz-Signature=9761a4d0922f68f289d5f6a2570a4f321a151a443f7156f98310ef332c694d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5L63S2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHgatyn9DW%2BtIWCbIbMYWY56ZR3FMZyZhcRu1PJnsQpTAiAezzaO6%2FQmg0Odsz3X4v4liG53wxHPH51bqTW%2FHYMy7ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMM%2FCsVr8B%2FCUWYOPtKtwDjea1hwCx514OJhYora5Rk86tJQSEMVuhCb5d8H9p3M3tQW9W6mnaUCf21hbgwhFncSIcxoTH4D%2B3tlBn8Ltsr8eowEitUFzOOMoY7DfBkYapkW9Zfu1Xe%2FHHRK8wUO1Oomqxczam%2FhRlmMTa6Pp9O6dWvDKZ3Nzahey5eNboeWEk%2BKjWdGGvxNf3gk95pznWatOTdlfbONCRf6BPGdebvHCUiM%2BULfNK8BI2bLApj5phOI%2BQBrSneWey7ngFa%2FPeDNOxyb4jQsa5kjOuz7YHwbLG8aEUfRkWIixLDGkgEIZdHDa8DPc%2FfnVnt7OjePQ75rTeLKrm%2BDDD1BAZKKIC4HJ4gcCNHMcMwGqqoYzxpZ1U2Tfn55n8QXNUGw5C2F9mtJflRNgH9uMcgJBUQE0%2FFIJgcL6CcMaxsNOKwCh8eUQeM6SYcyJKGfC7BFeM76g6R0k9%2F3ZrY6ap5Rqcfd%2F2Tyf%2FjS31CjO5xH00p5xxgObuI656WPP1YWVbrJ5%2FJLGe6Qdn8Vz2VTGAnoqetMjrBKJGWgh6xzyF%2FRhD%2BJ9juUUm4XrnTzTsFclRBzW8gUYCRxrXIzGRVe5HUU286c1Lq2vWU1Xila4%2FvMDOquiktgMh3lQpbUVIuvOuatgw7YS6wgY6pgFReuADpzWhFoNpgp5d3EH2tZMOC4xQPPNqIkwM0Nv4afW1jLTpOMaNC3Ne%2BF%2BeflkIQnjIKd%2BqrBLoazqUHx77rgatQKZWZ%2FxRNRG6nxwxqU3ehqWeuPU5L6jjUzjswKAuIybT1%2F32nDoBRYUnjtyVdunIwXsNk3cd%2BFWtdkFDWWxRw0Re6A0MMO5BQevt0ZXG7o79%2F%2BVBGa0HxgDeiDaNaxgtRios&X-Amz-Signature=7b1ce4da2e343eb52625c0b2dba2a43198bcef00215712a4b1a81b49905de07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5L63S2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHgatyn9DW%2BtIWCbIbMYWY56ZR3FMZyZhcRu1PJnsQpTAiAezzaO6%2FQmg0Odsz3X4v4liG53wxHPH51bqTW%2FHYMy7ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMM%2FCsVr8B%2FCUWYOPtKtwDjea1hwCx514OJhYora5Rk86tJQSEMVuhCb5d8H9p3M3tQW9W6mnaUCf21hbgwhFncSIcxoTH4D%2B3tlBn8Ltsr8eowEitUFzOOMoY7DfBkYapkW9Zfu1Xe%2FHHRK8wUO1Oomqxczam%2FhRlmMTa6Pp9O6dWvDKZ3Nzahey5eNboeWEk%2BKjWdGGvxNf3gk95pznWatOTdlfbONCRf6BPGdebvHCUiM%2BULfNK8BI2bLApj5phOI%2BQBrSneWey7ngFa%2FPeDNOxyb4jQsa5kjOuz7YHwbLG8aEUfRkWIixLDGkgEIZdHDa8DPc%2FfnVnt7OjePQ75rTeLKrm%2BDDD1BAZKKIC4HJ4gcCNHMcMwGqqoYzxpZ1U2Tfn55n8QXNUGw5C2F9mtJflRNgH9uMcgJBUQE0%2FFIJgcL6CcMaxsNOKwCh8eUQeM6SYcyJKGfC7BFeM76g6R0k9%2F3ZrY6ap5Rqcfd%2F2Tyf%2FjS31CjO5xH00p5xxgObuI656WPP1YWVbrJ5%2FJLGe6Qdn8Vz2VTGAnoqetMjrBKJGWgh6xzyF%2FRhD%2BJ9juUUm4XrnTzTsFclRBzW8gUYCRxrXIzGRVe5HUU286c1Lq2vWU1Xila4%2FvMDOquiktgMh3lQpbUVIuvOuatgw7YS6wgY6pgFReuADpzWhFoNpgp5d3EH2tZMOC4xQPPNqIkwM0Nv4afW1jLTpOMaNC3Ne%2BF%2BeflkIQnjIKd%2BqrBLoazqUHx77rgatQKZWZ%2FxRNRG6nxwxqU3ehqWeuPU5L6jjUzjswKAuIybT1%2F32nDoBRYUnjtyVdunIwXsNk3cd%2BFWtdkFDWWxRw0Re6A0MMO5BQevt0ZXG7o79%2F%2BVBGa0HxgDeiDaNaxgtRios&X-Amz-Signature=09e556d406ef478ac5f80446545401788e80cd1b0484a458e7d1014a2b9a73c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5L63S2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHgatyn9DW%2BtIWCbIbMYWY56ZR3FMZyZhcRu1PJnsQpTAiAezzaO6%2FQmg0Odsz3X4v4liG53wxHPH51bqTW%2FHYMy7ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMM%2FCsVr8B%2FCUWYOPtKtwDjea1hwCx514OJhYora5Rk86tJQSEMVuhCb5d8H9p3M3tQW9W6mnaUCf21hbgwhFncSIcxoTH4D%2B3tlBn8Ltsr8eowEitUFzOOMoY7DfBkYapkW9Zfu1Xe%2FHHRK8wUO1Oomqxczam%2FhRlmMTa6Pp9O6dWvDKZ3Nzahey5eNboeWEk%2BKjWdGGvxNf3gk95pznWatOTdlfbONCRf6BPGdebvHCUiM%2BULfNK8BI2bLApj5phOI%2BQBrSneWey7ngFa%2FPeDNOxyb4jQsa5kjOuz7YHwbLG8aEUfRkWIixLDGkgEIZdHDa8DPc%2FfnVnt7OjePQ75rTeLKrm%2BDDD1BAZKKIC4HJ4gcCNHMcMwGqqoYzxpZ1U2Tfn55n8QXNUGw5C2F9mtJflRNgH9uMcgJBUQE0%2FFIJgcL6CcMaxsNOKwCh8eUQeM6SYcyJKGfC7BFeM76g6R0k9%2F3ZrY6ap5Rqcfd%2F2Tyf%2FjS31CjO5xH00p5xxgObuI656WPP1YWVbrJ5%2FJLGe6Qdn8Vz2VTGAnoqetMjrBKJGWgh6xzyF%2FRhD%2BJ9juUUm4XrnTzTsFclRBzW8gUYCRxrXIzGRVe5HUU286c1Lq2vWU1Xila4%2FvMDOquiktgMh3lQpbUVIuvOuatgw7YS6wgY6pgFReuADpzWhFoNpgp5d3EH2tZMOC4xQPPNqIkwM0Nv4afW1jLTpOMaNC3Ne%2BF%2BeflkIQnjIKd%2BqrBLoazqUHx77rgatQKZWZ%2FxRNRG6nxwxqU3ehqWeuPU5L6jjUzjswKAuIybT1%2F32nDoBRYUnjtyVdunIwXsNk3cd%2BFWtdkFDWWxRw0Re6A0MMO5BQevt0ZXG7o79%2F%2BVBGa0HxgDeiDaNaxgtRios&X-Amz-Signature=3175c1ec3defcb6a5109a310a5eec890335179953975d34f5f1321c7e80703e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK5L63S2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHgatyn9DW%2BtIWCbIbMYWY56ZR3FMZyZhcRu1PJnsQpTAiAezzaO6%2FQmg0Odsz3X4v4liG53wxHPH51bqTW%2FHYMy7ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMM%2FCsVr8B%2FCUWYOPtKtwDjea1hwCx514OJhYora5Rk86tJQSEMVuhCb5d8H9p3M3tQW9W6mnaUCf21hbgwhFncSIcxoTH4D%2B3tlBn8Ltsr8eowEitUFzOOMoY7DfBkYapkW9Zfu1Xe%2FHHRK8wUO1Oomqxczam%2FhRlmMTa6Pp9O6dWvDKZ3Nzahey5eNboeWEk%2BKjWdGGvxNf3gk95pznWatOTdlfbONCRf6BPGdebvHCUiM%2BULfNK8BI2bLApj5phOI%2BQBrSneWey7ngFa%2FPeDNOxyb4jQsa5kjOuz7YHwbLG8aEUfRkWIixLDGkgEIZdHDa8DPc%2FfnVnt7OjePQ75rTeLKrm%2BDDD1BAZKKIC4HJ4gcCNHMcMwGqqoYzxpZ1U2Tfn55n8QXNUGw5C2F9mtJflRNgH9uMcgJBUQE0%2FFIJgcL6CcMaxsNOKwCh8eUQeM6SYcyJKGfC7BFeM76g6R0k9%2F3ZrY6ap5Rqcfd%2F2Tyf%2FjS31CjO5xH00p5xxgObuI656WPP1YWVbrJ5%2FJLGe6Qdn8Vz2VTGAnoqetMjrBKJGWgh6xzyF%2FRhD%2BJ9juUUm4XrnTzTsFclRBzW8gUYCRxrXIzGRVe5HUU286c1Lq2vWU1Xila4%2FvMDOquiktgMh3lQpbUVIuvOuatgw7YS6wgY6pgFReuADpzWhFoNpgp5d3EH2tZMOC4xQPPNqIkwM0Nv4afW1jLTpOMaNC3Ne%2BF%2BeflkIQnjIKd%2BqrBLoazqUHx77rgatQKZWZ%2FxRNRG6nxwxqU3ehqWeuPU5L6jjUzjswKAuIybT1%2F32nDoBRYUnjtyVdunIwXsNk3cd%2BFWtdkFDWWxRw0Re6A0MMO5BQevt0ZXG7o79%2F%2BVBGa0HxgDeiDaNaxgtRios&X-Amz-Signature=cfd239073cd3201a0ccbe036cf46d34e35945858b2aad160d52b720638ffe4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
