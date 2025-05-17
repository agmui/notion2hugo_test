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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJIM3T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7AB41MUxEq04rXSxsr6JgkfFrUBhIUheel5L5YknlFgIgcKtBESGhTnjm7OTJ9H5%2FEfuykqU%2F8vRj7OCwXnGr3jUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpoI4LdCbRRXKCHsSrcA%2B0ev0TVwy%2BKFkEcnNIRlkknskseuemKU%2BYXfmoBHnDqOcDIQs5T6v91T9Go5OO6op4IbYyYoSFKa%2BHdDl02X%2B8eUXkokUs9kKNYHio8JJXUXI6j7jCSpfJdvipP8lJAjWYl6qAOnRmmIDPBHA23RgfumWeiqJ9ltqJap0bybStkQ2IN%2F6CUjzG64Hxp0JkZz2YwY9eaawrmE1DtkTxGyU5dDWDP0z4%2BcQvY0hnd99NHECMeyXwBCW4piFtkKE2GLoX3AuLNArsZwY%2BjqCOnwKZDuCtMWM%2BTaE2TDtH1%2BZvBhUPIa6io6QfY9cCWMBcgOmXq51q2zYwq91kUyA85yEX4aaPpvZFEpF8QmCXVg6MfrPnYmvNONEO9sUN3TGkfc81cCKd%2Fxdl%2F8kaWEBA4yO7aONN01wsfFXLq3dqLpYMKpeRjS4gFnxiveNg1RbVYQ%2FsBW%2B8YOlU7eFER9RVEQaOjNjPD9QQ4jmKbXJOR6%2Fop0J7Av1Al67Z%2FPbui5630aQw5AopUKMMvjOoA%2FXkZMKBMM0Sq%2BNnjGJhQOGpGaphwTweKYktexp4IRPV7rXeP47Ayu7mWSA86x6%2FmOoFnhIITo8%2BYzLB%2Ffjl5E0XowrgH9DurVWe07VaM0br3MNG8ocEGOqUB%2BFD9CFwb2tulR074H59E6bDxFr%2FQu4LZcmfgnN1VNt87%2BLpuT3joqGFGzXAgQc9MjXlEI898td0Ktc%2FCAoyN%2BMMp3ibd%2FLKXE0R7Os7ELPidoDZPBBMDBkuVQ%2FudL38xce9rXPuo3TElXTdFS62g%2B5%2FNzoQEQmTsi84k7YGaXOnCGJaHi%2FtzgaRMRKm8%2BwhlNL%2BFwLOL8gcjDGfIlAgO4wrWFrCU&X-Amz-Signature=9f530e288f8b5978865f5a031ef9a209024c9aac93ec06fcc53933996ec68f42&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJIM3T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7AB41MUxEq04rXSxsr6JgkfFrUBhIUheel5L5YknlFgIgcKtBESGhTnjm7OTJ9H5%2FEfuykqU%2F8vRj7OCwXnGr3jUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpoI4LdCbRRXKCHsSrcA%2B0ev0TVwy%2BKFkEcnNIRlkknskseuemKU%2BYXfmoBHnDqOcDIQs5T6v91T9Go5OO6op4IbYyYoSFKa%2BHdDl02X%2B8eUXkokUs9kKNYHio8JJXUXI6j7jCSpfJdvipP8lJAjWYl6qAOnRmmIDPBHA23RgfumWeiqJ9ltqJap0bybStkQ2IN%2F6CUjzG64Hxp0JkZz2YwY9eaawrmE1DtkTxGyU5dDWDP0z4%2BcQvY0hnd99NHECMeyXwBCW4piFtkKE2GLoX3AuLNArsZwY%2BjqCOnwKZDuCtMWM%2BTaE2TDtH1%2BZvBhUPIa6io6QfY9cCWMBcgOmXq51q2zYwq91kUyA85yEX4aaPpvZFEpF8QmCXVg6MfrPnYmvNONEO9sUN3TGkfc81cCKd%2Fxdl%2F8kaWEBA4yO7aONN01wsfFXLq3dqLpYMKpeRjS4gFnxiveNg1RbVYQ%2FsBW%2B8YOlU7eFER9RVEQaOjNjPD9QQ4jmKbXJOR6%2Fop0J7Av1Al67Z%2FPbui5630aQw5AopUKMMvjOoA%2FXkZMKBMM0Sq%2BNnjGJhQOGpGaphwTweKYktexp4IRPV7rXeP47Ayu7mWSA86x6%2FmOoFnhIITo8%2BYzLB%2Ffjl5E0XowrgH9DurVWe07VaM0br3MNG8ocEGOqUB%2BFD9CFwb2tulR074H59E6bDxFr%2FQu4LZcmfgnN1VNt87%2BLpuT3joqGFGzXAgQc9MjXlEI898td0Ktc%2FCAoyN%2BMMp3ibd%2FLKXE0R7Os7ELPidoDZPBBMDBkuVQ%2FudL38xce9rXPuo3TElXTdFS62g%2B5%2FNzoQEQmTsi84k7YGaXOnCGJaHi%2FtzgaRMRKm8%2BwhlNL%2BFwLOL8gcjDGfIlAgO4wrWFrCU&X-Amz-Signature=4d2e4fc428f356d3e5d023f4cea45fe59dbbec640b563fd9e4c23f2127ba63dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJIM3T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7AB41MUxEq04rXSxsr6JgkfFrUBhIUheel5L5YknlFgIgcKtBESGhTnjm7OTJ9H5%2FEfuykqU%2F8vRj7OCwXnGr3jUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpoI4LdCbRRXKCHsSrcA%2B0ev0TVwy%2BKFkEcnNIRlkknskseuemKU%2BYXfmoBHnDqOcDIQs5T6v91T9Go5OO6op4IbYyYoSFKa%2BHdDl02X%2B8eUXkokUs9kKNYHio8JJXUXI6j7jCSpfJdvipP8lJAjWYl6qAOnRmmIDPBHA23RgfumWeiqJ9ltqJap0bybStkQ2IN%2F6CUjzG64Hxp0JkZz2YwY9eaawrmE1DtkTxGyU5dDWDP0z4%2BcQvY0hnd99NHECMeyXwBCW4piFtkKE2GLoX3AuLNArsZwY%2BjqCOnwKZDuCtMWM%2BTaE2TDtH1%2BZvBhUPIa6io6QfY9cCWMBcgOmXq51q2zYwq91kUyA85yEX4aaPpvZFEpF8QmCXVg6MfrPnYmvNONEO9sUN3TGkfc81cCKd%2Fxdl%2F8kaWEBA4yO7aONN01wsfFXLq3dqLpYMKpeRjS4gFnxiveNg1RbVYQ%2FsBW%2B8YOlU7eFER9RVEQaOjNjPD9QQ4jmKbXJOR6%2Fop0J7Av1Al67Z%2FPbui5630aQw5AopUKMMvjOoA%2FXkZMKBMM0Sq%2BNnjGJhQOGpGaphwTweKYktexp4IRPV7rXeP47Ayu7mWSA86x6%2FmOoFnhIITo8%2BYzLB%2Ffjl5E0XowrgH9DurVWe07VaM0br3MNG8ocEGOqUB%2BFD9CFwb2tulR074H59E6bDxFr%2FQu4LZcmfgnN1VNt87%2BLpuT3joqGFGzXAgQc9MjXlEI898td0Ktc%2FCAoyN%2BMMp3ibd%2FLKXE0R7Os7ELPidoDZPBBMDBkuVQ%2FudL38xce9rXPuo3TElXTdFS62g%2B5%2FNzoQEQmTsi84k7YGaXOnCGJaHi%2FtzgaRMRKm8%2BwhlNL%2BFwLOL8gcjDGfIlAgO4wrWFrCU&X-Amz-Signature=16e8fbff1fafd8bb4230963e825855bfc1015c6168aa5b0959039c2ee65428c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJIM3T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7AB41MUxEq04rXSxsr6JgkfFrUBhIUheel5L5YknlFgIgcKtBESGhTnjm7OTJ9H5%2FEfuykqU%2F8vRj7OCwXnGr3jUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpoI4LdCbRRXKCHsSrcA%2B0ev0TVwy%2BKFkEcnNIRlkknskseuemKU%2BYXfmoBHnDqOcDIQs5T6v91T9Go5OO6op4IbYyYoSFKa%2BHdDl02X%2B8eUXkokUs9kKNYHio8JJXUXI6j7jCSpfJdvipP8lJAjWYl6qAOnRmmIDPBHA23RgfumWeiqJ9ltqJap0bybStkQ2IN%2F6CUjzG64Hxp0JkZz2YwY9eaawrmE1DtkTxGyU5dDWDP0z4%2BcQvY0hnd99NHECMeyXwBCW4piFtkKE2GLoX3AuLNArsZwY%2BjqCOnwKZDuCtMWM%2BTaE2TDtH1%2BZvBhUPIa6io6QfY9cCWMBcgOmXq51q2zYwq91kUyA85yEX4aaPpvZFEpF8QmCXVg6MfrPnYmvNONEO9sUN3TGkfc81cCKd%2Fxdl%2F8kaWEBA4yO7aONN01wsfFXLq3dqLpYMKpeRjS4gFnxiveNg1RbVYQ%2FsBW%2B8YOlU7eFER9RVEQaOjNjPD9QQ4jmKbXJOR6%2Fop0J7Av1Al67Z%2FPbui5630aQw5AopUKMMvjOoA%2FXkZMKBMM0Sq%2BNnjGJhQOGpGaphwTweKYktexp4IRPV7rXeP47Ayu7mWSA86x6%2FmOoFnhIITo8%2BYzLB%2Ffjl5E0XowrgH9DurVWe07VaM0br3MNG8ocEGOqUB%2BFD9CFwb2tulR074H59E6bDxFr%2FQu4LZcmfgnN1VNt87%2BLpuT3joqGFGzXAgQc9MjXlEI898td0Ktc%2FCAoyN%2BMMp3ibd%2FLKXE0R7Os7ELPidoDZPBBMDBkuVQ%2FudL38xce9rXPuo3TElXTdFS62g%2B5%2FNzoQEQmTsi84k7YGaXOnCGJaHi%2FtzgaRMRKm8%2BwhlNL%2BFwLOL8gcjDGfIlAgO4wrWFrCU&X-Amz-Signature=b81e9d85e6e317953d0c1ea0f96e602799061b800a72da75ee2dcae49e894ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJIM3T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7AB41MUxEq04rXSxsr6JgkfFrUBhIUheel5L5YknlFgIgcKtBESGhTnjm7OTJ9H5%2FEfuykqU%2F8vRj7OCwXnGr3jUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpoI4LdCbRRXKCHsSrcA%2B0ev0TVwy%2BKFkEcnNIRlkknskseuemKU%2BYXfmoBHnDqOcDIQs5T6v91T9Go5OO6op4IbYyYoSFKa%2BHdDl02X%2B8eUXkokUs9kKNYHio8JJXUXI6j7jCSpfJdvipP8lJAjWYl6qAOnRmmIDPBHA23RgfumWeiqJ9ltqJap0bybStkQ2IN%2F6CUjzG64Hxp0JkZz2YwY9eaawrmE1DtkTxGyU5dDWDP0z4%2BcQvY0hnd99NHECMeyXwBCW4piFtkKE2GLoX3AuLNArsZwY%2BjqCOnwKZDuCtMWM%2BTaE2TDtH1%2BZvBhUPIa6io6QfY9cCWMBcgOmXq51q2zYwq91kUyA85yEX4aaPpvZFEpF8QmCXVg6MfrPnYmvNONEO9sUN3TGkfc81cCKd%2Fxdl%2F8kaWEBA4yO7aONN01wsfFXLq3dqLpYMKpeRjS4gFnxiveNg1RbVYQ%2FsBW%2B8YOlU7eFER9RVEQaOjNjPD9QQ4jmKbXJOR6%2Fop0J7Av1Al67Z%2FPbui5630aQw5AopUKMMvjOoA%2FXkZMKBMM0Sq%2BNnjGJhQOGpGaphwTweKYktexp4IRPV7rXeP47Ayu7mWSA86x6%2FmOoFnhIITo8%2BYzLB%2Ffjl5E0XowrgH9DurVWe07VaM0br3MNG8ocEGOqUB%2BFD9CFwb2tulR074H59E6bDxFr%2FQu4LZcmfgnN1VNt87%2BLpuT3joqGFGzXAgQc9MjXlEI898td0Ktc%2FCAoyN%2BMMp3ibd%2FLKXE0R7Os7ELPidoDZPBBMDBkuVQ%2FudL38xce9rXPuo3TElXTdFS62g%2B5%2FNzoQEQmTsi84k7YGaXOnCGJaHi%2FtzgaRMRKm8%2BwhlNL%2BFwLOL8gcjDGfIlAgO4wrWFrCU&X-Amz-Signature=308ab5163147b7c7b3f118e60fb4c0022622b29a5ac20bd5f56414109ba9e222&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJIM3T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7AB41MUxEq04rXSxsr6JgkfFrUBhIUheel5L5YknlFgIgcKtBESGhTnjm7OTJ9H5%2FEfuykqU%2F8vRj7OCwXnGr3jUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpoI4LdCbRRXKCHsSrcA%2B0ev0TVwy%2BKFkEcnNIRlkknskseuemKU%2BYXfmoBHnDqOcDIQs5T6v91T9Go5OO6op4IbYyYoSFKa%2BHdDl02X%2B8eUXkokUs9kKNYHio8JJXUXI6j7jCSpfJdvipP8lJAjWYl6qAOnRmmIDPBHA23RgfumWeiqJ9ltqJap0bybStkQ2IN%2F6CUjzG64Hxp0JkZz2YwY9eaawrmE1DtkTxGyU5dDWDP0z4%2BcQvY0hnd99NHECMeyXwBCW4piFtkKE2GLoX3AuLNArsZwY%2BjqCOnwKZDuCtMWM%2BTaE2TDtH1%2BZvBhUPIa6io6QfY9cCWMBcgOmXq51q2zYwq91kUyA85yEX4aaPpvZFEpF8QmCXVg6MfrPnYmvNONEO9sUN3TGkfc81cCKd%2Fxdl%2F8kaWEBA4yO7aONN01wsfFXLq3dqLpYMKpeRjS4gFnxiveNg1RbVYQ%2FsBW%2B8YOlU7eFER9RVEQaOjNjPD9QQ4jmKbXJOR6%2Fop0J7Av1Al67Z%2FPbui5630aQw5AopUKMMvjOoA%2FXkZMKBMM0Sq%2BNnjGJhQOGpGaphwTweKYktexp4IRPV7rXeP47Ayu7mWSA86x6%2FmOoFnhIITo8%2BYzLB%2Ffjl5E0XowrgH9DurVWe07VaM0br3MNG8ocEGOqUB%2BFD9CFwb2tulR074H59E6bDxFr%2FQu4LZcmfgnN1VNt87%2BLpuT3joqGFGzXAgQc9MjXlEI898td0Ktc%2FCAoyN%2BMMp3ibd%2FLKXE0R7Os7ELPidoDZPBBMDBkuVQ%2FudL38xce9rXPuo3TElXTdFS62g%2B5%2FNzoQEQmTsi84k7YGaXOnCGJaHi%2FtzgaRMRKm8%2BwhlNL%2BFwLOL8gcjDGfIlAgO4wrWFrCU&X-Amz-Signature=8ed4e7a55c7ace49ab7320e1baa2c50442efd6540a77b97ff08b779e0197e1ac&X-Amz-SignedHeaders=host&x-id=GetObject)
