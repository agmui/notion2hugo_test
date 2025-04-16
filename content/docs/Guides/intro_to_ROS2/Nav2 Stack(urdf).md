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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFAJ4VL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYMxRB6mZk%2BpTSCjgoorjMndzFGMn3W3cPZ1%2BwQL%2FAbAiEAih4TPk2xt6Gi%2Ft0E%2BaLMjH%2Fy%2BFVIUTX2kvuNI5sbnwkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHc%2BFOYkATH0mxIBjSrcA6khwaXPUK%2Fig4%2FNDjVDPNjT%2Fihvmc4cH92urI%2Fvv5i%2FU%2F5bxdL%2FBLi3azf3Qukull%2FGquspyBVLzTyl%2BDP%2B66fTW72McHYPw6LWDJvoCB3DML562F4FC5SWatwcuy0uiEjFfSM1SK%2FYzrScTK3GPJCEx88RHa9a0Yx7y9PgmlIAlrcDo9CBtWDC3VEcZZbKCBh5XxRF0O0%2FpyEf6KA6jQJ4j6HTg92HAaNP7vMmK%2Fy9DEKvVFeGPcoksrICZCfCD0Nffd2ybSAct2OOEk0Vqk%2BZsKC%2Be9H3MKA2FSaHNPp%2FWcLLeZ%2FWWM6nZq8rZBt4joSvx1nHfeWXL2U6WZU1kTma38MCeFJlL3adZSq58QxrDZ2zvzV%2FZygftfX8oXIUDuXDOT1%2BNqf9SVZdmqpuZ50%2BNKlY7FGj5FuOPz3QpeiRalVyARwZi2cxsG9nyconG8m23ddd2a5JbcAYpdIMhZbc%2BmibjMBUYA6FwbDdJHaL4pL1Pz5vaXjkGOF9RB1VLVUW%2BF9cCLjOY5cxekOX26k%2Fz6SvK3JBgthYfw09%2Bt7JFmZM1pErQG8ZDqCPhdpgKUguRTgHMH%2BCW3z8P%2Bb6vUlfXbp9M8rHtJJA53kgQt67p63LU3lNItDP%2FlC8MP%2F3%2F78GOqUB1%2FY%2BmBvKp9arGqf3%2FZgJfH1ExjCx1mD7ESVLwdinVXu5HwXblHFCh3V%2FNvaOcqamBVdh4L0iXn3Nn5aZOHC91HnGJIlWGe%2B8vXgkWnFZRvrJvHiuzLFNCrBqrvQ%2BIrQ1foCWhoPHzBb%2FzSiwmC1BBEWtazGw3a1oSGB0lupbZAmaIx9qw%2FT2ozxxBdi7gFlX%2FZq1ZJIajCLnfIsJQ%2BLjCtsvCkTe&X-Amz-Signature=c958d7c2860a1718a218480df33d6353569e013e174bd2e1fba405a637ac4679&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFAJ4VL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYMxRB6mZk%2BpTSCjgoorjMndzFGMn3W3cPZ1%2BwQL%2FAbAiEAih4TPk2xt6Gi%2Ft0E%2BaLMjH%2Fy%2BFVIUTX2kvuNI5sbnwkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHc%2BFOYkATH0mxIBjSrcA6khwaXPUK%2Fig4%2FNDjVDPNjT%2Fihvmc4cH92urI%2Fvv5i%2FU%2F5bxdL%2FBLi3azf3Qukull%2FGquspyBVLzTyl%2BDP%2B66fTW72McHYPw6LWDJvoCB3DML562F4FC5SWatwcuy0uiEjFfSM1SK%2FYzrScTK3GPJCEx88RHa9a0Yx7y9PgmlIAlrcDo9CBtWDC3VEcZZbKCBh5XxRF0O0%2FpyEf6KA6jQJ4j6HTg92HAaNP7vMmK%2Fy9DEKvVFeGPcoksrICZCfCD0Nffd2ybSAct2OOEk0Vqk%2BZsKC%2Be9H3MKA2FSaHNPp%2FWcLLeZ%2FWWM6nZq8rZBt4joSvx1nHfeWXL2U6WZU1kTma38MCeFJlL3adZSq58QxrDZ2zvzV%2FZygftfX8oXIUDuXDOT1%2BNqf9SVZdmqpuZ50%2BNKlY7FGj5FuOPz3QpeiRalVyARwZi2cxsG9nyconG8m23ddd2a5JbcAYpdIMhZbc%2BmibjMBUYA6FwbDdJHaL4pL1Pz5vaXjkGOF9RB1VLVUW%2BF9cCLjOY5cxekOX26k%2Fz6SvK3JBgthYfw09%2Bt7JFmZM1pErQG8ZDqCPhdpgKUguRTgHMH%2BCW3z8P%2Bb6vUlfXbp9M8rHtJJA53kgQt67p63LU3lNItDP%2FlC8MP%2F3%2F78GOqUB1%2FY%2BmBvKp9arGqf3%2FZgJfH1ExjCx1mD7ESVLwdinVXu5HwXblHFCh3V%2FNvaOcqamBVdh4L0iXn3Nn5aZOHC91HnGJIlWGe%2B8vXgkWnFZRvrJvHiuzLFNCrBqrvQ%2BIrQ1foCWhoPHzBb%2FzSiwmC1BBEWtazGw3a1oSGB0lupbZAmaIx9qw%2FT2ozxxBdi7gFlX%2FZq1ZJIajCLnfIsJQ%2BLjCtsvCkTe&X-Amz-Signature=1cd4813e9a45716969991b34939d9da1ea03478148b90bc5bb6f51cf11cf944f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFAJ4VL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYMxRB6mZk%2BpTSCjgoorjMndzFGMn3W3cPZ1%2BwQL%2FAbAiEAih4TPk2xt6Gi%2Ft0E%2BaLMjH%2Fy%2BFVIUTX2kvuNI5sbnwkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHc%2BFOYkATH0mxIBjSrcA6khwaXPUK%2Fig4%2FNDjVDPNjT%2Fihvmc4cH92urI%2Fvv5i%2FU%2F5bxdL%2FBLi3azf3Qukull%2FGquspyBVLzTyl%2BDP%2B66fTW72McHYPw6LWDJvoCB3DML562F4FC5SWatwcuy0uiEjFfSM1SK%2FYzrScTK3GPJCEx88RHa9a0Yx7y9PgmlIAlrcDo9CBtWDC3VEcZZbKCBh5XxRF0O0%2FpyEf6KA6jQJ4j6HTg92HAaNP7vMmK%2Fy9DEKvVFeGPcoksrICZCfCD0Nffd2ybSAct2OOEk0Vqk%2BZsKC%2Be9H3MKA2FSaHNPp%2FWcLLeZ%2FWWM6nZq8rZBt4joSvx1nHfeWXL2U6WZU1kTma38MCeFJlL3adZSq58QxrDZ2zvzV%2FZygftfX8oXIUDuXDOT1%2BNqf9SVZdmqpuZ50%2BNKlY7FGj5FuOPz3QpeiRalVyARwZi2cxsG9nyconG8m23ddd2a5JbcAYpdIMhZbc%2BmibjMBUYA6FwbDdJHaL4pL1Pz5vaXjkGOF9RB1VLVUW%2BF9cCLjOY5cxekOX26k%2Fz6SvK3JBgthYfw09%2Bt7JFmZM1pErQG8ZDqCPhdpgKUguRTgHMH%2BCW3z8P%2Bb6vUlfXbp9M8rHtJJA53kgQt67p63LU3lNItDP%2FlC8MP%2F3%2F78GOqUB1%2FY%2BmBvKp9arGqf3%2FZgJfH1ExjCx1mD7ESVLwdinVXu5HwXblHFCh3V%2FNvaOcqamBVdh4L0iXn3Nn5aZOHC91HnGJIlWGe%2B8vXgkWnFZRvrJvHiuzLFNCrBqrvQ%2BIrQ1foCWhoPHzBb%2FzSiwmC1BBEWtazGw3a1oSGB0lupbZAmaIx9qw%2FT2ozxxBdi7gFlX%2FZq1ZJIajCLnfIsJQ%2BLjCtsvCkTe&X-Amz-Signature=829c5d00496524d6e90e1653ee2fd6e83e4e6927d7e05afceba81cbc3d092bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFAJ4VL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYMxRB6mZk%2BpTSCjgoorjMndzFGMn3W3cPZ1%2BwQL%2FAbAiEAih4TPk2xt6Gi%2Ft0E%2BaLMjH%2Fy%2BFVIUTX2kvuNI5sbnwkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHc%2BFOYkATH0mxIBjSrcA6khwaXPUK%2Fig4%2FNDjVDPNjT%2Fihvmc4cH92urI%2Fvv5i%2FU%2F5bxdL%2FBLi3azf3Qukull%2FGquspyBVLzTyl%2BDP%2B66fTW72McHYPw6LWDJvoCB3DML562F4FC5SWatwcuy0uiEjFfSM1SK%2FYzrScTK3GPJCEx88RHa9a0Yx7y9PgmlIAlrcDo9CBtWDC3VEcZZbKCBh5XxRF0O0%2FpyEf6KA6jQJ4j6HTg92HAaNP7vMmK%2Fy9DEKvVFeGPcoksrICZCfCD0Nffd2ybSAct2OOEk0Vqk%2BZsKC%2Be9H3MKA2FSaHNPp%2FWcLLeZ%2FWWM6nZq8rZBt4joSvx1nHfeWXL2U6WZU1kTma38MCeFJlL3adZSq58QxrDZ2zvzV%2FZygftfX8oXIUDuXDOT1%2BNqf9SVZdmqpuZ50%2BNKlY7FGj5FuOPz3QpeiRalVyARwZi2cxsG9nyconG8m23ddd2a5JbcAYpdIMhZbc%2BmibjMBUYA6FwbDdJHaL4pL1Pz5vaXjkGOF9RB1VLVUW%2BF9cCLjOY5cxekOX26k%2Fz6SvK3JBgthYfw09%2Bt7JFmZM1pErQG8ZDqCPhdpgKUguRTgHMH%2BCW3z8P%2Bb6vUlfXbp9M8rHtJJA53kgQt67p63LU3lNItDP%2FlC8MP%2F3%2F78GOqUB1%2FY%2BmBvKp9arGqf3%2FZgJfH1ExjCx1mD7ESVLwdinVXu5HwXblHFCh3V%2FNvaOcqamBVdh4L0iXn3Nn5aZOHC91HnGJIlWGe%2B8vXgkWnFZRvrJvHiuzLFNCrBqrvQ%2BIrQ1foCWhoPHzBb%2FzSiwmC1BBEWtazGw3a1oSGB0lupbZAmaIx9qw%2FT2ozxxBdi7gFlX%2FZq1ZJIajCLnfIsJQ%2BLjCtsvCkTe&X-Amz-Signature=aef2a11528a079857719aaadd2f2afdfb989890f0074ebebeb1d5deea122a3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFAJ4VL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYMxRB6mZk%2BpTSCjgoorjMndzFGMn3W3cPZ1%2BwQL%2FAbAiEAih4TPk2xt6Gi%2Ft0E%2BaLMjH%2Fy%2BFVIUTX2kvuNI5sbnwkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHc%2BFOYkATH0mxIBjSrcA6khwaXPUK%2Fig4%2FNDjVDPNjT%2Fihvmc4cH92urI%2Fvv5i%2FU%2F5bxdL%2FBLi3azf3Qukull%2FGquspyBVLzTyl%2BDP%2B66fTW72McHYPw6LWDJvoCB3DML562F4FC5SWatwcuy0uiEjFfSM1SK%2FYzrScTK3GPJCEx88RHa9a0Yx7y9PgmlIAlrcDo9CBtWDC3VEcZZbKCBh5XxRF0O0%2FpyEf6KA6jQJ4j6HTg92HAaNP7vMmK%2Fy9DEKvVFeGPcoksrICZCfCD0Nffd2ybSAct2OOEk0Vqk%2BZsKC%2Be9H3MKA2FSaHNPp%2FWcLLeZ%2FWWM6nZq8rZBt4joSvx1nHfeWXL2U6WZU1kTma38MCeFJlL3adZSq58QxrDZ2zvzV%2FZygftfX8oXIUDuXDOT1%2BNqf9SVZdmqpuZ50%2BNKlY7FGj5FuOPz3QpeiRalVyARwZi2cxsG9nyconG8m23ddd2a5JbcAYpdIMhZbc%2BmibjMBUYA6FwbDdJHaL4pL1Pz5vaXjkGOF9RB1VLVUW%2BF9cCLjOY5cxekOX26k%2Fz6SvK3JBgthYfw09%2Bt7JFmZM1pErQG8ZDqCPhdpgKUguRTgHMH%2BCW3z8P%2Bb6vUlfXbp9M8rHtJJA53kgQt67p63LU3lNItDP%2FlC8MP%2F3%2F78GOqUB1%2FY%2BmBvKp9arGqf3%2FZgJfH1ExjCx1mD7ESVLwdinVXu5HwXblHFCh3V%2FNvaOcqamBVdh4L0iXn3Nn5aZOHC91HnGJIlWGe%2B8vXgkWnFZRvrJvHiuzLFNCrBqrvQ%2BIrQ1foCWhoPHzBb%2FzSiwmC1BBEWtazGw3a1oSGB0lupbZAmaIx9qw%2FT2ozxxBdi7gFlX%2FZq1ZJIajCLnfIsJQ%2BLjCtsvCkTe&X-Amz-Signature=48f31c1816224c3be7e82f0a9a9c3cf27681ba0179971b87699f5cfc23f6257b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFAJ4VL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYMxRB6mZk%2BpTSCjgoorjMndzFGMn3W3cPZ1%2BwQL%2FAbAiEAih4TPk2xt6Gi%2Ft0E%2BaLMjH%2Fy%2BFVIUTX2kvuNI5sbnwkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHc%2BFOYkATH0mxIBjSrcA6khwaXPUK%2Fig4%2FNDjVDPNjT%2Fihvmc4cH92urI%2Fvv5i%2FU%2F5bxdL%2FBLi3azf3Qukull%2FGquspyBVLzTyl%2BDP%2B66fTW72McHYPw6LWDJvoCB3DML562F4FC5SWatwcuy0uiEjFfSM1SK%2FYzrScTK3GPJCEx88RHa9a0Yx7y9PgmlIAlrcDo9CBtWDC3VEcZZbKCBh5XxRF0O0%2FpyEf6KA6jQJ4j6HTg92HAaNP7vMmK%2Fy9DEKvVFeGPcoksrICZCfCD0Nffd2ybSAct2OOEk0Vqk%2BZsKC%2Be9H3MKA2FSaHNPp%2FWcLLeZ%2FWWM6nZq8rZBt4joSvx1nHfeWXL2U6WZU1kTma38MCeFJlL3adZSq58QxrDZ2zvzV%2FZygftfX8oXIUDuXDOT1%2BNqf9SVZdmqpuZ50%2BNKlY7FGj5FuOPz3QpeiRalVyARwZi2cxsG9nyconG8m23ddd2a5JbcAYpdIMhZbc%2BmibjMBUYA6FwbDdJHaL4pL1Pz5vaXjkGOF9RB1VLVUW%2BF9cCLjOY5cxekOX26k%2Fz6SvK3JBgthYfw09%2Bt7JFmZM1pErQG8ZDqCPhdpgKUguRTgHMH%2BCW3z8P%2Bb6vUlfXbp9M8rHtJJA53kgQt67p63LU3lNItDP%2FlC8MP%2F3%2F78GOqUB1%2FY%2BmBvKp9arGqf3%2FZgJfH1ExjCx1mD7ESVLwdinVXu5HwXblHFCh3V%2FNvaOcqamBVdh4L0iXn3Nn5aZOHC91HnGJIlWGe%2B8vXgkWnFZRvrJvHiuzLFNCrBqrvQ%2BIrQ1foCWhoPHzBb%2FzSiwmC1BBEWtazGw3a1oSGB0lupbZAmaIx9qw%2FT2ozxxBdi7gFlX%2FZq1ZJIajCLnfIsJQ%2BLjCtsvCkTe&X-Amz-Signature=2ff0748ace44a3350deb541e86f5d60e518c6ab339334c9f042baff93db42539&X-Amz-SignedHeaders=host&x-id=GetObject)
