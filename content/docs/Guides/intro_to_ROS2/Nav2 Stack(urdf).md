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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4D2ZNVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUXFNow8NGmTAn9rBsatpUMpeH8aChuipv87iWEgMdbAiEA96GUDnPHhhd1xuC3NpFuvmgkdGIir46olAE5PwiYwwUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOFQicAXY0UR25qTTircA8e60AM0HljFgjbtRGXvWcrxKNDiSIoFAzEt4Wfu6Ba6bdK4gcOC3Cn%2FxR1izV0%2FkbVEm%2FRyBSB6Yehbhtfv5qrRX7A2csoCcnmqXuhAkKFDqo2EJcro5nxw7siOj885K0rs5fwvcfLz1A87vzAy%2BSM1Ivr4Jqna3M2Q3yIL%2BSzl5JAIMzdH4cen4RvxImLM237ajMEKbHyQpbW3lfmIO0EwckiR02TIu9bps5c7%2BHHJoWSBAQvSYBlAQtdW4h50rOdaNLHBk%2BKrWXRwU7ZoGyjGWNhwqN0ebZ6HVy1Lydre%2FvYl4PsFoth7uXYmn6hdh47cekR5M1NBX11f0sH%2FBigUlfLmsmz1sBzVnSLwBkEbE0TiukZXHDMtMIiNeiohNx3%2BIxuiXABafr2CpLXyM7YhsrQDO8gKk9u5370uRI2BqCPNh2vi9bW%2FQvhfU4MxZ82I1r1CUmV2%2BwEXrgq0mCf5NAC5M7GCCcROcTS4RTycElfK02O9Lys0dWnfsPYCQ83WNfaCBDLaDlb95xEaH9BRiIM%2F1jb5WFsdMEYOZyYsfWyiTosn2pAunqXI%2BrM6WETzHibhg%2B%2BqlTrdbV9NRmG%2F4mcdFXbBVh5AN4eP8ZKjg8Ll6zG792T2NuDtMMio9L8GOqUB7ReoT2fXlsn57pUZjY4GhyEkrPh1q%2BjH5Z6fFqxqvNQmls%2BECmKpIKjSsnhRZfD2zu1vmCOuxc%2Bem%2BMoY5xZDz58WU1IDxD8m8RuI%2Bo1j9zSiwRLjLpNUPW9NPl%2F5FIi0oL34znY7nMtRavdcXk8PGuVqI2rtvXfS91FDxESMiHj2tFyM2R3zZNriW6MHRWt4PMk97Nq%2FsIeIfsC3kYpzAfxClHq&X-Amz-Signature=6d24c5cb43bad39e943c3c03fbe7b90869879ee61670c9ca4c7087153fa96cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4D2ZNVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUXFNow8NGmTAn9rBsatpUMpeH8aChuipv87iWEgMdbAiEA96GUDnPHhhd1xuC3NpFuvmgkdGIir46olAE5PwiYwwUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOFQicAXY0UR25qTTircA8e60AM0HljFgjbtRGXvWcrxKNDiSIoFAzEt4Wfu6Ba6bdK4gcOC3Cn%2FxR1izV0%2FkbVEm%2FRyBSB6Yehbhtfv5qrRX7A2csoCcnmqXuhAkKFDqo2EJcro5nxw7siOj885K0rs5fwvcfLz1A87vzAy%2BSM1Ivr4Jqna3M2Q3yIL%2BSzl5JAIMzdH4cen4RvxImLM237ajMEKbHyQpbW3lfmIO0EwckiR02TIu9bps5c7%2BHHJoWSBAQvSYBlAQtdW4h50rOdaNLHBk%2BKrWXRwU7ZoGyjGWNhwqN0ebZ6HVy1Lydre%2FvYl4PsFoth7uXYmn6hdh47cekR5M1NBX11f0sH%2FBigUlfLmsmz1sBzVnSLwBkEbE0TiukZXHDMtMIiNeiohNx3%2BIxuiXABafr2CpLXyM7YhsrQDO8gKk9u5370uRI2BqCPNh2vi9bW%2FQvhfU4MxZ82I1r1CUmV2%2BwEXrgq0mCf5NAC5M7GCCcROcTS4RTycElfK02O9Lys0dWnfsPYCQ83WNfaCBDLaDlb95xEaH9BRiIM%2F1jb5WFsdMEYOZyYsfWyiTosn2pAunqXI%2BrM6WETzHibhg%2B%2BqlTrdbV9NRmG%2F4mcdFXbBVh5AN4eP8ZKjg8Ll6zG792T2NuDtMMio9L8GOqUB7ReoT2fXlsn57pUZjY4GhyEkrPh1q%2BjH5Z6fFqxqvNQmls%2BECmKpIKjSsnhRZfD2zu1vmCOuxc%2Bem%2BMoY5xZDz58WU1IDxD8m8RuI%2Bo1j9zSiwRLjLpNUPW9NPl%2F5FIi0oL34znY7nMtRavdcXk8PGuVqI2rtvXfS91FDxESMiHj2tFyM2R3zZNriW6MHRWt4PMk97Nq%2FsIeIfsC3kYpzAfxClHq&X-Amz-Signature=7f8d3255a9c372bb58f8c932e0b747a0b13a6e37c48fe1e6ebb0d4f40e3d99b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4D2ZNVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUXFNow8NGmTAn9rBsatpUMpeH8aChuipv87iWEgMdbAiEA96GUDnPHhhd1xuC3NpFuvmgkdGIir46olAE5PwiYwwUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOFQicAXY0UR25qTTircA8e60AM0HljFgjbtRGXvWcrxKNDiSIoFAzEt4Wfu6Ba6bdK4gcOC3Cn%2FxR1izV0%2FkbVEm%2FRyBSB6Yehbhtfv5qrRX7A2csoCcnmqXuhAkKFDqo2EJcro5nxw7siOj885K0rs5fwvcfLz1A87vzAy%2BSM1Ivr4Jqna3M2Q3yIL%2BSzl5JAIMzdH4cen4RvxImLM237ajMEKbHyQpbW3lfmIO0EwckiR02TIu9bps5c7%2BHHJoWSBAQvSYBlAQtdW4h50rOdaNLHBk%2BKrWXRwU7ZoGyjGWNhwqN0ebZ6HVy1Lydre%2FvYl4PsFoth7uXYmn6hdh47cekR5M1NBX11f0sH%2FBigUlfLmsmz1sBzVnSLwBkEbE0TiukZXHDMtMIiNeiohNx3%2BIxuiXABafr2CpLXyM7YhsrQDO8gKk9u5370uRI2BqCPNh2vi9bW%2FQvhfU4MxZ82I1r1CUmV2%2BwEXrgq0mCf5NAC5M7GCCcROcTS4RTycElfK02O9Lys0dWnfsPYCQ83WNfaCBDLaDlb95xEaH9BRiIM%2F1jb5WFsdMEYOZyYsfWyiTosn2pAunqXI%2BrM6WETzHibhg%2B%2BqlTrdbV9NRmG%2F4mcdFXbBVh5AN4eP8ZKjg8Ll6zG792T2NuDtMMio9L8GOqUB7ReoT2fXlsn57pUZjY4GhyEkrPh1q%2BjH5Z6fFqxqvNQmls%2BECmKpIKjSsnhRZfD2zu1vmCOuxc%2Bem%2BMoY5xZDz58WU1IDxD8m8RuI%2Bo1j9zSiwRLjLpNUPW9NPl%2F5FIi0oL34znY7nMtRavdcXk8PGuVqI2rtvXfS91FDxESMiHj2tFyM2R3zZNriW6MHRWt4PMk97Nq%2FsIeIfsC3kYpzAfxClHq&X-Amz-Signature=047c26bfdc5a9b87f53c95b346b98229ea987e79ba1a931bc6ba3defc1eefd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4D2ZNVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUXFNow8NGmTAn9rBsatpUMpeH8aChuipv87iWEgMdbAiEA96GUDnPHhhd1xuC3NpFuvmgkdGIir46olAE5PwiYwwUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOFQicAXY0UR25qTTircA8e60AM0HljFgjbtRGXvWcrxKNDiSIoFAzEt4Wfu6Ba6bdK4gcOC3Cn%2FxR1izV0%2FkbVEm%2FRyBSB6Yehbhtfv5qrRX7A2csoCcnmqXuhAkKFDqo2EJcro5nxw7siOj885K0rs5fwvcfLz1A87vzAy%2BSM1Ivr4Jqna3M2Q3yIL%2BSzl5JAIMzdH4cen4RvxImLM237ajMEKbHyQpbW3lfmIO0EwckiR02TIu9bps5c7%2BHHJoWSBAQvSYBlAQtdW4h50rOdaNLHBk%2BKrWXRwU7ZoGyjGWNhwqN0ebZ6HVy1Lydre%2FvYl4PsFoth7uXYmn6hdh47cekR5M1NBX11f0sH%2FBigUlfLmsmz1sBzVnSLwBkEbE0TiukZXHDMtMIiNeiohNx3%2BIxuiXABafr2CpLXyM7YhsrQDO8gKk9u5370uRI2BqCPNh2vi9bW%2FQvhfU4MxZ82I1r1CUmV2%2BwEXrgq0mCf5NAC5M7GCCcROcTS4RTycElfK02O9Lys0dWnfsPYCQ83WNfaCBDLaDlb95xEaH9BRiIM%2F1jb5WFsdMEYOZyYsfWyiTosn2pAunqXI%2BrM6WETzHibhg%2B%2BqlTrdbV9NRmG%2F4mcdFXbBVh5AN4eP8ZKjg8Ll6zG792T2NuDtMMio9L8GOqUB7ReoT2fXlsn57pUZjY4GhyEkrPh1q%2BjH5Z6fFqxqvNQmls%2BECmKpIKjSsnhRZfD2zu1vmCOuxc%2Bem%2BMoY5xZDz58WU1IDxD8m8RuI%2Bo1j9zSiwRLjLpNUPW9NPl%2F5FIi0oL34znY7nMtRavdcXk8PGuVqI2rtvXfS91FDxESMiHj2tFyM2R3zZNriW6MHRWt4PMk97Nq%2FsIeIfsC3kYpzAfxClHq&X-Amz-Signature=519acb09cad51b7bf6d78b2658ec3f52f3955c6b08b7a385f3546fc0db6963ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4D2ZNVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUXFNow8NGmTAn9rBsatpUMpeH8aChuipv87iWEgMdbAiEA96GUDnPHhhd1xuC3NpFuvmgkdGIir46olAE5PwiYwwUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOFQicAXY0UR25qTTircA8e60AM0HljFgjbtRGXvWcrxKNDiSIoFAzEt4Wfu6Ba6bdK4gcOC3Cn%2FxR1izV0%2FkbVEm%2FRyBSB6Yehbhtfv5qrRX7A2csoCcnmqXuhAkKFDqo2EJcro5nxw7siOj885K0rs5fwvcfLz1A87vzAy%2BSM1Ivr4Jqna3M2Q3yIL%2BSzl5JAIMzdH4cen4RvxImLM237ajMEKbHyQpbW3lfmIO0EwckiR02TIu9bps5c7%2BHHJoWSBAQvSYBlAQtdW4h50rOdaNLHBk%2BKrWXRwU7ZoGyjGWNhwqN0ebZ6HVy1Lydre%2FvYl4PsFoth7uXYmn6hdh47cekR5M1NBX11f0sH%2FBigUlfLmsmz1sBzVnSLwBkEbE0TiukZXHDMtMIiNeiohNx3%2BIxuiXABafr2CpLXyM7YhsrQDO8gKk9u5370uRI2BqCPNh2vi9bW%2FQvhfU4MxZ82I1r1CUmV2%2BwEXrgq0mCf5NAC5M7GCCcROcTS4RTycElfK02O9Lys0dWnfsPYCQ83WNfaCBDLaDlb95xEaH9BRiIM%2F1jb5WFsdMEYOZyYsfWyiTosn2pAunqXI%2BrM6WETzHibhg%2B%2BqlTrdbV9NRmG%2F4mcdFXbBVh5AN4eP8ZKjg8Ll6zG792T2NuDtMMio9L8GOqUB7ReoT2fXlsn57pUZjY4GhyEkrPh1q%2BjH5Z6fFqxqvNQmls%2BECmKpIKjSsnhRZfD2zu1vmCOuxc%2Bem%2BMoY5xZDz58WU1IDxD8m8RuI%2Bo1j9zSiwRLjLpNUPW9NPl%2F5FIi0oL34znY7nMtRavdcXk8PGuVqI2rtvXfS91FDxESMiHj2tFyM2R3zZNriW6MHRWt4PMk97Nq%2FsIeIfsC3kYpzAfxClHq&X-Amz-Signature=4aa649113a83cb10824c12bab40d684a4e196d4e3669933280f2b7e187307f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4D2ZNVW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUXFNow8NGmTAn9rBsatpUMpeH8aChuipv87iWEgMdbAiEA96GUDnPHhhd1xuC3NpFuvmgkdGIir46olAE5PwiYwwUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOFQicAXY0UR25qTTircA8e60AM0HljFgjbtRGXvWcrxKNDiSIoFAzEt4Wfu6Ba6bdK4gcOC3Cn%2FxR1izV0%2FkbVEm%2FRyBSB6Yehbhtfv5qrRX7A2csoCcnmqXuhAkKFDqo2EJcro5nxw7siOj885K0rs5fwvcfLz1A87vzAy%2BSM1Ivr4Jqna3M2Q3yIL%2BSzl5JAIMzdH4cen4RvxImLM237ajMEKbHyQpbW3lfmIO0EwckiR02TIu9bps5c7%2BHHJoWSBAQvSYBlAQtdW4h50rOdaNLHBk%2BKrWXRwU7ZoGyjGWNhwqN0ebZ6HVy1Lydre%2FvYl4PsFoth7uXYmn6hdh47cekR5M1NBX11f0sH%2FBigUlfLmsmz1sBzVnSLwBkEbE0TiukZXHDMtMIiNeiohNx3%2BIxuiXABafr2CpLXyM7YhsrQDO8gKk9u5370uRI2BqCPNh2vi9bW%2FQvhfU4MxZ82I1r1CUmV2%2BwEXrgq0mCf5NAC5M7GCCcROcTS4RTycElfK02O9Lys0dWnfsPYCQ83WNfaCBDLaDlb95xEaH9BRiIM%2F1jb5WFsdMEYOZyYsfWyiTosn2pAunqXI%2BrM6WETzHibhg%2B%2BqlTrdbV9NRmG%2F4mcdFXbBVh5AN4eP8ZKjg8Ll6zG792T2NuDtMMio9L8GOqUB7ReoT2fXlsn57pUZjY4GhyEkrPh1q%2BjH5Z6fFqxqvNQmls%2BECmKpIKjSsnhRZfD2zu1vmCOuxc%2Bem%2BMoY5xZDz58WU1IDxD8m8RuI%2Bo1j9zSiwRLjLpNUPW9NPl%2F5FIi0oL34znY7nMtRavdcXk8PGuVqI2rtvXfS91FDxESMiHj2tFyM2R3zZNriW6MHRWt4PMk97Nq%2FsIeIfsC3kYpzAfxClHq&X-Amz-Signature=5772d3399350ee3fa82370dadbfabd124bf535aaa6bf3f9d6155fb34c6bc60ad&X-Amz-SignedHeaders=host&x-id=GetObject)
