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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBUUTPJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlUUfNuBpDC6pEgBOlnNQ5jYnWIEJjaJInFLY%2B3jjGwIgQrGW6sElMUJkQvYdLhdG5%2BRaXNTy9Htu857YfpA2ByYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP7PhSwuWPLKNAHYiSrcA0DeoBHhnhk905LAG0OuiopSmsNYnLUaGvydycRmkVEZKDDc35%2FlAfHiaKC9c36AP90t9uJFrz6DyL7ynQdonAZX3DnHwMb3CGmGI4IrEiZwpIkDNowvklhb7a4nMj1RPL%2BVi4mMoUCuZyegOOhnzO0NeUWa4z%2F%2BmV1ZGdbYfqaf%2F%2BWG56YRAptR%2BJDrST%2FX3dmXWLMAwyjB2wV01noGQi0yqb%2BHoDM1o%2F2lFZIZwYXnYs3u%2B9o0nr6SBqrFsmLqxY8uJrWyxKfe27iDhbVwc18Y5WSvdSMTM1WtngOwwXXYs1ApN3dqeSK1j9G%2B7cO5ejXUqeJR3DMjXzpv6%2B0Kmi6VVm8fcjumco8t4ay33Gwu%2FrMRQAXF6evDrUQXe9z4r8etxDhm%2Fjj4ChY3IY86numNIyKsTvHwv4%2FgTDhpXn7InQ8NTjx9C19xZVVmxlCCTGEGnyqFTUpYyhgMNzs3D%2FnjcdXDKrBs8uRIbJEn3NJGj7SsgTLqOxL38qFd0iDoQkoPTBRu5oaipBIKPqs1brTL7kD9EeZW2P2zPIQVtG5FbHhe%2F6qAhNAT6w26nb1lsBfqArfK42Bnddp4ckOoBK64%2FMbs4zPAWrDflELGLaa849H%2FrPvxNghltAMSMKOqscAGOqUBDwZ7kaqaQROXwBjvfCDQoW%2Fe55zswhXJvFI3MW1zktbth6s%2BUYIQrHpB6Ug7y0xWBeFtPC%2FXSqzEeGpBvbqqlZz78PeJYpb%2B61umnxnmQn%2FqwyZwqVhKSjgUHbtSIZTOWNvk%2BQt%2BTrExYURGr38htPAEXoiQUL4fECQQcR70ERtfOAgI9DWtXiHTQtnjGsAjHuYavDCtf73oy6iaEwBWhg8H6OoW&X-Amz-Signature=b3359b770314a58933b18ead84aec95f69927a66d3982a5ca68b2ceb7167c67c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBUUTPJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlUUfNuBpDC6pEgBOlnNQ5jYnWIEJjaJInFLY%2B3jjGwIgQrGW6sElMUJkQvYdLhdG5%2BRaXNTy9Htu857YfpA2ByYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP7PhSwuWPLKNAHYiSrcA0DeoBHhnhk905LAG0OuiopSmsNYnLUaGvydycRmkVEZKDDc35%2FlAfHiaKC9c36AP90t9uJFrz6DyL7ynQdonAZX3DnHwMb3CGmGI4IrEiZwpIkDNowvklhb7a4nMj1RPL%2BVi4mMoUCuZyegOOhnzO0NeUWa4z%2F%2BmV1ZGdbYfqaf%2F%2BWG56YRAptR%2BJDrST%2FX3dmXWLMAwyjB2wV01noGQi0yqb%2BHoDM1o%2F2lFZIZwYXnYs3u%2B9o0nr6SBqrFsmLqxY8uJrWyxKfe27iDhbVwc18Y5WSvdSMTM1WtngOwwXXYs1ApN3dqeSK1j9G%2B7cO5ejXUqeJR3DMjXzpv6%2B0Kmi6VVm8fcjumco8t4ay33Gwu%2FrMRQAXF6evDrUQXe9z4r8etxDhm%2Fjj4ChY3IY86numNIyKsTvHwv4%2FgTDhpXn7InQ8NTjx9C19xZVVmxlCCTGEGnyqFTUpYyhgMNzs3D%2FnjcdXDKrBs8uRIbJEn3NJGj7SsgTLqOxL38qFd0iDoQkoPTBRu5oaipBIKPqs1brTL7kD9EeZW2P2zPIQVtG5FbHhe%2F6qAhNAT6w26nb1lsBfqArfK42Bnddp4ckOoBK64%2FMbs4zPAWrDflELGLaa849H%2FrPvxNghltAMSMKOqscAGOqUBDwZ7kaqaQROXwBjvfCDQoW%2Fe55zswhXJvFI3MW1zktbth6s%2BUYIQrHpB6Ug7y0xWBeFtPC%2FXSqzEeGpBvbqqlZz78PeJYpb%2B61umnxnmQn%2FqwyZwqVhKSjgUHbtSIZTOWNvk%2BQt%2BTrExYURGr38htPAEXoiQUL4fECQQcR70ERtfOAgI9DWtXiHTQtnjGsAjHuYavDCtf73oy6iaEwBWhg8H6OoW&X-Amz-Signature=903e39f81f4235f8cdc24b5066f939beff2a9dc7762b4f35b650de23a64cd0c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBUUTPJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlUUfNuBpDC6pEgBOlnNQ5jYnWIEJjaJInFLY%2B3jjGwIgQrGW6sElMUJkQvYdLhdG5%2BRaXNTy9Htu857YfpA2ByYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP7PhSwuWPLKNAHYiSrcA0DeoBHhnhk905LAG0OuiopSmsNYnLUaGvydycRmkVEZKDDc35%2FlAfHiaKC9c36AP90t9uJFrz6DyL7ynQdonAZX3DnHwMb3CGmGI4IrEiZwpIkDNowvklhb7a4nMj1RPL%2BVi4mMoUCuZyegOOhnzO0NeUWa4z%2F%2BmV1ZGdbYfqaf%2F%2BWG56YRAptR%2BJDrST%2FX3dmXWLMAwyjB2wV01noGQi0yqb%2BHoDM1o%2F2lFZIZwYXnYs3u%2B9o0nr6SBqrFsmLqxY8uJrWyxKfe27iDhbVwc18Y5WSvdSMTM1WtngOwwXXYs1ApN3dqeSK1j9G%2B7cO5ejXUqeJR3DMjXzpv6%2B0Kmi6VVm8fcjumco8t4ay33Gwu%2FrMRQAXF6evDrUQXe9z4r8etxDhm%2Fjj4ChY3IY86numNIyKsTvHwv4%2FgTDhpXn7InQ8NTjx9C19xZVVmxlCCTGEGnyqFTUpYyhgMNzs3D%2FnjcdXDKrBs8uRIbJEn3NJGj7SsgTLqOxL38qFd0iDoQkoPTBRu5oaipBIKPqs1brTL7kD9EeZW2P2zPIQVtG5FbHhe%2F6qAhNAT6w26nb1lsBfqArfK42Bnddp4ckOoBK64%2FMbs4zPAWrDflELGLaa849H%2FrPvxNghltAMSMKOqscAGOqUBDwZ7kaqaQROXwBjvfCDQoW%2Fe55zswhXJvFI3MW1zktbth6s%2BUYIQrHpB6Ug7y0xWBeFtPC%2FXSqzEeGpBvbqqlZz78PeJYpb%2B61umnxnmQn%2FqwyZwqVhKSjgUHbtSIZTOWNvk%2BQt%2BTrExYURGr38htPAEXoiQUL4fECQQcR70ERtfOAgI9DWtXiHTQtnjGsAjHuYavDCtf73oy6iaEwBWhg8H6OoW&X-Amz-Signature=401fe546f70cd9406e3dbcf78339e93c78a3d7960aaf70ba475afc3c2a632d49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBUUTPJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlUUfNuBpDC6pEgBOlnNQ5jYnWIEJjaJInFLY%2B3jjGwIgQrGW6sElMUJkQvYdLhdG5%2BRaXNTy9Htu857YfpA2ByYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP7PhSwuWPLKNAHYiSrcA0DeoBHhnhk905LAG0OuiopSmsNYnLUaGvydycRmkVEZKDDc35%2FlAfHiaKC9c36AP90t9uJFrz6DyL7ynQdonAZX3DnHwMb3CGmGI4IrEiZwpIkDNowvklhb7a4nMj1RPL%2BVi4mMoUCuZyegOOhnzO0NeUWa4z%2F%2BmV1ZGdbYfqaf%2F%2BWG56YRAptR%2BJDrST%2FX3dmXWLMAwyjB2wV01noGQi0yqb%2BHoDM1o%2F2lFZIZwYXnYs3u%2B9o0nr6SBqrFsmLqxY8uJrWyxKfe27iDhbVwc18Y5WSvdSMTM1WtngOwwXXYs1ApN3dqeSK1j9G%2B7cO5ejXUqeJR3DMjXzpv6%2B0Kmi6VVm8fcjumco8t4ay33Gwu%2FrMRQAXF6evDrUQXe9z4r8etxDhm%2Fjj4ChY3IY86numNIyKsTvHwv4%2FgTDhpXn7InQ8NTjx9C19xZVVmxlCCTGEGnyqFTUpYyhgMNzs3D%2FnjcdXDKrBs8uRIbJEn3NJGj7SsgTLqOxL38qFd0iDoQkoPTBRu5oaipBIKPqs1brTL7kD9EeZW2P2zPIQVtG5FbHhe%2F6qAhNAT6w26nb1lsBfqArfK42Bnddp4ckOoBK64%2FMbs4zPAWrDflELGLaa849H%2FrPvxNghltAMSMKOqscAGOqUBDwZ7kaqaQROXwBjvfCDQoW%2Fe55zswhXJvFI3MW1zktbth6s%2BUYIQrHpB6Ug7y0xWBeFtPC%2FXSqzEeGpBvbqqlZz78PeJYpb%2B61umnxnmQn%2FqwyZwqVhKSjgUHbtSIZTOWNvk%2BQt%2BTrExYURGr38htPAEXoiQUL4fECQQcR70ERtfOAgI9DWtXiHTQtnjGsAjHuYavDCtf73oy6iaEwBWhg8H6OoW&X-Amz-Signature=0c02d10f557dfbcd6be9817c9f1209d6ced4c82f4319eea05117155b0e711e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBUUTPJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlUUfNuBpDC6pEgBOlnNQ5jYnWIEJjaJInFLY%2B3jjGwIgQrGW6sElMUJkQvYdLhdG5%2BRaXNTy9Htu857YfpA2ByYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP7PhSwuWPLKNAHYiSrcA0DeoBHhnhk905LAG0OuiopSmsNYnLUaGvydycRmkVEZKDDc35%2FlAfHiaKC9c36AP90t9uJFrz6DyL7ynQdonAZX3DnHwMb3CGmGI4IrEiZwpIkDNowvklhb7a4nMj1RPL%2BVi4mMoUCuZyegOOhnzO0NeUWa4z%2F%2BmV1ZGdbYfqaf%2F%2BWG56YRAptR%2BJDrST%2FX3dmXWLMAwyjB2wV01noGQi0yqb%2BHoDM1o%2F2lFZIZwYXnYs3u%2B9o0nr6SBqrFsmLqxY8uJrWyxKfe27iDhbVwc18Y5WSvdSMTM1WtngOwwXXYs1ApN3dqeSK1j9G%2B7cO5ejXUqeJR3DMjXzpv6%2B0Kmi6VVm8fcjumco8t4ay33Gwu%2FrMRQAXF6evDrUQXe9z4r8etxDhm%2Fjj4ChY3IY86numNIyKsTvHwv4%2FgTDhpXn7InQ8NTjx9C19xZVVmxlCCTGEGnyqFTUpYyhgMNzs3D%2FnjcdXDKrBs8uRIbJEn3NJGj7SsgTLqOxL38qFd0iDoQkoPTBRu5oaipBIKPqs1brTL7kD9EeZW2P2zPIQVtG5FbHhe%2F6qAhNAT6w26nb1lsBfqArfK42Bnddp4ckOoBK64%2FMbs4zPAWrDflELGLaa849H%2FrPvxNghltAMSMKOqscAGOqUBDwZ7kaqaQROXwBjvfCDQoW%2Fe55zswhXJvFI3MW1zktbth6s%2BUYIQrHpB6Ug7y0xWBeFtPC%2FXSqzEeGpBvbqqlZz78PeJYpb%2B61umnxnmQn%2FqwyZwqVhKSjgUHbtSIZTOWNvk%2BQt%2BTrExYURGr38htPAEXoiQUL4fECQQcR70ERtfOAgI9DWtXiHTQtnjGsAjHuYavDCtf73oy6iaEwBWhg8H6OoW&X-Amz-Signature=ad4becd00994bdb8f384409e063b99c0575f42012562ae579db2bee8e44f650d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBUUTPJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlUUfNuBpDC6pEgBOlnNQ5jYnWIEJjaJInFLY%2B3jjGwIgQrGW6sElMUJkQvYdLhdG5%2BRaXNTy9Htu857YfpA2ByYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDP7PhSwuWPLKNAHYiSrcA0DeoBHhnhk905LAG0OuiopSmsNYnLUaGvydycRmkVEZKDDc35%2FlAfHiaKC9c36AP90t9uJFrz6DyL7ynQdonAZX3DnHwMb3CGmGI4IrEiZwpIkDNowvklhb7a4nMj1RPL%2BVi4mMoUCuZyegOOhnzO0NeUWa4z%2F%2BmV1ZGdbYfqaf%2F%2BWG56YRAptR%2BJDrST%2FX3dmXWLMAwyjB2wV01noGQi0yqb%2BHoDM1o%2F2lFZIZwYXnYs3u%2B9o0nr6SBqrFsmLqxY8uJrWyxKfe27iDhbVwc18Y5WSvdSMTM1WtngOwwXXYs1ApN3dqeSK1j9G%2B7cO5ejXUqeJR3DMjXzpv6%2B0Kmi6VVm8fcjumco8t4ay33Gwu%2FrMRQAXF6evDrUQXe9z4r8etxDhm%2Fjj4ChY3IY86numNIyKsTvHwv4%2FgTDhpXn7InQ8NTjx9C19xZVVmxlCCTGEGnyqFTUpYyhgMNzs3D%2FnjcdXDKrBs8uRIbJEn3NJGj7SsgTLqOxL38qFd0iDoQkoPTBRu5oaipBIKPqs1brTL7kD9EeZW2P2zPIQVtG5FbHhe%2F6qAhNAT6w26nb1lsBfqArfK42Bnddp4ckOoBK64%2FMbs4zPAWrDflELGLaa849H%2FrPvxNghltAMSMKOqscAGOqUBDwZ7kaqaQROXwBjvfCDQoW%2Fe55zswhXJvFI3MW1zktbth6s%2BUYIQrHpB6Ug7y0xWBeFtPC%2FXSqzEeGpBvbqqlZz78PeJYpb%2B61umnxnmQn%2FqwyZwqVhKSjgUHbtSIZTOWNvk%2BQt%2BTrExYURGr38htPAEXoiQUL4fECQQcR70ERtfOAgI9DWtXiHTQtnjGsAjHuYavDCtf73oy6iaEwBWhg8H6OoW&X-Amz-Signature=1e4db69660dfaab090fd984a9505a7d36a7a6f7865dc511023d17ed693372eb0&X-Amz-SignedHeaders=host&x-id=GetObject)
