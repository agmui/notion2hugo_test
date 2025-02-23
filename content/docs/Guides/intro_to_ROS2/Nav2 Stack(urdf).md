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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWM2EHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQu3SLZ73BFx3pxfpYAsTx%2F2TTm96dLLaOCpjcdlj%2BAiEApJbwVOt2qeXKUO3e58QQfuchmx61DWpamKUyFeAfl1kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISLCl5wa5QM%2BeyBTCrcA2M6JvwX3rsKxRBGCU1BIWBertdLdaXIunKKCLVwMFstmEbrmlzzzO%2FyHwbS14e7GuEqWo%2FCKNy6bVb8RbmcN4b47E52KI6POvy984heH%2BsoIX%2BJ7nAIrjYGSx9ziujEirooWnaqo1RpHfK8vKEDhRM3nzKPfnOp7FsKlrbFp1TDFJveB5jYQk8aH%2F8BhW%2FsJBl7S362juXWyB8dqEZaT8FPN70xW%2Fl8JCOixJN0SdjdwSGbyBQmmp2njHlZ4tnUSOtqLTgeUVioO800N0QrwGBnrfjlCF6TW%2B4TV6mlnwRX5qx5uns2v6ekpnCPOoHO5LSisEGJytL0syla1NId6u9HQRC3NfpXRJaJzTHG94EqQ%2FlIvMJpi6n5P8dGQOPSdyclk%2BFEwdkINL%2B2dkciNhiHZSC%2Bmc2gyjgYI%2Fl%2BfhNSujbIzjdeAmnTZ7JAfqLai3dx%2Bvv7zWMjTnyrcrZGwtG1qnbSvlwvSz8Nrhzt8Uhv%2FE3iLePbSIZsNnPGD%2FRsutzSesmEMOG9pcD8zoWFE2FYYZ%2FZIqI0jTKGhhuxVlvbR907I2NWG2sD%2BLR4qG0pleeChle%2BVrp%2BUzoDA%2B5vWqgMyz0ifkoELvcK54%2FOIPOfq1DNzJzybxbdRNnxMNmp6b0GOqUBm06Ug7CeQZ%2FZrqae5Wwy7IvNclPWJIJobeUO6LjYjCOipdKXHUU9boQlgXq2gIrieUPUH3fFNDwsc446BlxSMHxhclrgGV%2FJ0HJt6ppnYED5dgtc%2BfXpuERTX827tcRrStvNUkATsERy0NfJva9uL7QHoiS2uQON%2BMZzYFbIVfwzjpLDHQ88SEAm2qV%2FvbvNj%2BOgEKbaze1%2Fg1X%2Fb5hwCt6R8Zx2&X-Amz-Signature=bc279bb94fb05ffd805e13f70e2946527e52cc2cef17f7f77669fa75788f7f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWM2EHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQu3SLZ73BFx3pxfpYAsTx%2F2TTm96dLLaOCpjcdlj%2BAiEApJbwVOt2qeXKUO3e58QQfuchmx61DWpamKUyFeAfl1kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISLCl5wa5QM%2BeyBTCrcA2M6JvwX3rsKxRBGCU1BIWBertdLdaXIunKKCLVwMFstmEbrmlzzzO%2FyHwbS14e7GuEqWo%2FCKNy6bVb8RbmcN4b47E52KI6POvy984heH%2BsoIX%2BJ7nAIrjYGSx9ziujEirooWnaqo1RpHfK8vKEDhRM3nzKPfnOp7FsKlrbFp1TDFJveB5jYQk8aH%2F8BhW%2FsJBl7S362juXWyB8dqEZaT8FPN70xW%2Fl8JCOixJN0SdjdwSGbyBQmmp2njHlZ4tnUSOtqLTgeUVioO800N0QrwGBnrfjlCF6TW%2B4TV6mlnwRX5qx5uns2v6ekpnCPOoHO5LSisEGJytL0syla1NId6u9HQRC3NfpXRJaJzTHG94EqQ%2FlIvMJpi6n5P8dGQOPSdyclk%2BFEwdkINL%2B2dkciNhiHZSC%2Bmc2gyjgYI%2Fl%2BfhNSujbIzjdeAmnTZ7JAfqLai3dx%2Bvv7zWMjTnyrcrZGwtG1qnbSvlwvSz8Nrhzt8Uhv%2FE3iLePbSIZsNnPGD%2FRsutzSesmEMOG9pcD8zoWFE2FYYZ%2FZIqI0jTKGhhuxVlvbR907I2NWG2sD%2BLR4qG0pleeChle%2BVrp%2BUzoDA%2B5vWqgMyz0ifkoELvcK54%2FOIPOfq1DNzJzybxbdRNnxMNmp6b0GOqUBm06Ug7CeQZ%2FZrqae5Wwy7IvNclPWJIJobeUO6LjYjCOipdKXHUU9boQlgXq2gIrieUPUH3fFNDwsc446BlxSMHxhclrgGV%2FJ0HJt6ppnYED5dgtc%2BfXpuERTX827tcRrStvNUkATsERy0NfJva9uL7QHoiS2uQON%2BMZzYFbIVfwzjpLDHQ88SEAm2qV%2FvbvNj%2BOgEKbaze1%2Fg1X%2Fb5hwCt6R8Zx2&X-Amz-Signature=cbd1b29c2492b75eb79941b6db9bbe808a8ae54124d096d40d038fa4c7f0a318&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWM2EHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQu3SLZ73BFx3pxfpYAsTx%2F2TTm96dLLaOCpjcdlj%2BAiEApJbwVOt2qeXKUO3e58QQfuchmx61DWpamKUyFeAfl1kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISLCl5wa5QM%2BeyBTCrcA2M6JvwX3rsKxRBGCU1BIWBertdLdaXIunKKCLVwMFstmEbrmlzzzO%2FyHwbS14e7GuEqWo%2FCKNy6bVb8RbmcN4b47E52KI6POvy984heH%2BsoIX%2BJ7nAIrjYGSx9ziujEirooWnaqo1RpHfK8vKEDhRM3nzKPfnOp7FsKlrbFp1TDFJveB5jYQk8aH%2F8BhW%2FsJBl7S362juXWyB8dqEZaT8FPN70xW%2Fl8JCOixJN0SdjdwSGbyBQmmp2njHlZ4tnUSOtqLTgeUVioO800N0QrwGBnrfjlCF6TW%2B4TV6mlnwRX5qx5uns2v6ekpnCPOoHO5LSisEGJytL0syla1NId6u9HQRC3NfpXRJaJzTHG94EqQ%2FlIvMJpi6n5P8dGQOPSdyclk%2BFEwdkINL%2B2dkciNhiHZSC%2Bmc2gyjgYI%2Fl%2BfhNSujbIzjdeAmnTZ7JAfqLai3dx%2Bvv7zWMjTnyrcrZGwtG1qnbSvlwvSz8Nrhzt8Uhv%2FE3iLePbSIZsNnPGD%2FRsutzSesmEMOG9pcD8zoWFE2FYYZ%2FZIqI0jTKGhhuxVlvbR907I2NWG2sD%2BLR4qG0pleeChle%2BVrp%2BUzoDA%2B5vWqgMyz0ifkoELvcK54%2FOIPOfq1DNzJzybxbdRNnxMNmp6b0GOqUBm06Ug7CeQZ%2FZrqae5Wwy7IvNclPWJIJobeUO6LjYjCOipdKXHUU9boQlgXq2gIrieUPUH3fFNDwsc446BlxSMHxhclrgGV%2FJ0HJt6ppnYED5dgtc%2BfXpuERTX827tcRrStvNUkATsERy0NfJva9uL7QHoiS2uQON%2BMZzYFbIVfwzjpLDHQ88SEAm2qV%2FvbvNj%2BOgEKbaze1%2Fg1X%2Fb5hwCt6R8Zx2&X-Amz-Signature=794c3bd423daace79b7f8457c019a70b4907d634269a99695bb25776a1c78356&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWM2EHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQu3SLZ73BFx3pxfpYAsTx%2F2TTm96dLLaOCpjcdlj%2BAiEApJbwVOt2qeXKUO3e58QQfuchmx61DWpamKUyFeAfl1kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISLCl5wa5QM%2BeyBTCrcA2M6JvwX3rsKxRBGCU1BIWBertdLdaXIunKKCLVwMFstmEbrmlzzzO%2FyHwbS14e7GuEqWo%2FCKNy6bVb8RbmcN4b47E52KI6POvy984heH%2BsoIX%2BJ7nAIrjYGSx9ziujEirooWnaqo1RpHfK8vKEDhRM3nzKPfnOp7FsKlrbFp1TDFJveB5jYQk8aH%2F8BhW%2FsJBl7S362juXWyB8dqEZaT8FPN70xW%2Fl8JCOixJN0SdjdwSGbyBQmmp2njHlZ4tnUSOtqLTgeUVioO800N0QrwGBnrfjlCF6TW%2B4TV6mlnwRX5qx5uns2v6ekpnCPOoHO5LSisEGJytL0syla1NId6u9HQRC3NfpXRJaJzTHG94EqQ%2FlIvMJpi6n5P8dGQOPSdyclk%2BFEwdkINL%2B2dkciNhiHZSC%2Bmc2gyjgYI%2Fl%2BfhNSujbIzjdeAmnTZ7JAfqLai3dx%2Bvv7zWMjTnyrcrZGwtG1qnbSvlwvSz8Nrhzt8Uhv%2FE3iLePbSIZsNnPGD%2FRsutzSesmEMOG9pcD8zoWFE2FYYZ%2FZIqI0jTKGhhuxVlvbR907I2NWG2sD%2BLR4qG0pleeChle%2BVrp%2BUzoDA%2B5vWqgMyz0ifkoELvcK54%2FOIPOfq1DNzJzybxbdRNnxMNmp6b0GOqUBm06Ug7CeQZ%2FZrqae5Wwy7IvNclPWJIJobeUO6LjYjCOipdKXHUU9boQlgXq2gIrieUPUH3fFNDwsc446BlxSMHxhclrgGV%2FJ0HJt6ppnYED5dgtc%2BfXpuERTX827tcRrStvNUkATsERy0NfJva9uL7QHoiS2uQON%2BMZzYFbIVfwzjpLDHQ88SEAm2qV%2FvbvNj%2BOgEKbaze1%2Fg1X%2Fb5hwCt6R8Zx2&X-Amz-Signature=c68459a46569c5fd9ff45c0ba43ddce767062974f5ae311255bdd31abb11325d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWM2EHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQu3SLZ73BFx3pxfpYAsTx%2F2TTm96dLLaOCpjcdlj%2BAiEApJbwVOt2qeXKUO3e58QQfuchmx61DWpamKUyFeAfl1kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISLCl5wa5QM%2BeyBTCrcA2M6JvwX3rsKxRBGCU1BIWBertdLdaXIunKKCLVwMFstmEbrmlzzzO%2FyHwbS14e7GuEqWo%2FCKNy6bVb8RbmcN4b47E52KI6POvy984heH%2BsoIX%2BJ7nAIrjYGSx9ziujEirooWnaqo1RpHfK8vKEDhRM3nzKPfnOp7FsKlrbFp1TDFJveB5jYQk8aH%2F8BhW%2FsJBl7S362juXWyB8dqEZaT8FPN70xW%2Fl8JCOixJN0SdjdwSGbyBQmmp2njHlZ4tnUSOtqLTgeUVioO800N0QrwGBnrfjlCF6TW%2B4TV6mlnwRX5qx5uns2v6ekpnCPOoHO5LSisEGJytL0syla1NId6u9HQRC3NfpXRJaJzTHG94EqQ%2FlIvMJpi6n5P8dGQOPSdyclk%2BFEwdkINL%2B2dkciNhiHZSC%2Bmc2gyjgYI%2Fl%2BfhNSujbIzjdeAmnTZ7JAfqLai3dx%2Bvv7zWMjTnyrcrZGwtG1qnbSvlwvSz8Nrhzt8Uhv%2FE3iLePbSIZsNnPGD%2FRsutzSesmEMOG9pcD8zoWFE2FYYZ%2FZIqI0jTKGhhuxVlvbR907I2NWG2sD%2BLR4qG0pleeChle%2BVrp%2BUzoDA%2B5vWqgMyz0ifkoELvcK54%2FOIPOfq1DNzJzybxbdRNnxMNmp6b0GOqUBm06Ug7CeQZ%2FZrqae5Wwy7IvNclPWJIJobeUO6LjYjCOipdKXHUU9boQlgXq2gIrieUPUH3fFNDwsc446BlxSMHxhclrgGV%2FJ0HJt6ppnYED5dgtc%2BfXpuERTX827tcRrStvNUkATsERy0NfJva9uL7QHoiS2uQON%2BMZzYFbIVfwzjpLDHQ88SEAm2qV%2FvbvNj%2BOgEKbaze1%2Fg1X%2Fb5hwCt6R8Zx2&X-Amz-Signature=a70f9fb7e439f6e4fa927416e2b247d0d045b800ada6aae2921009f7fb97e509&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWM2EHM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWQu3SLZ73BFx3pxfpYAsTx%2F2TTm96dLLaOCpjcdlj%2BAiEApJbwVOt2qeXKUO3e58QQfuchmx61DWpamKUyFeAfl1kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISLCl5wa5QM%2BeyBTCrcA2M6JvwX3rsKxRBGCU1BIWBertdLdaXIunKKCLVwMFstmEbrmlzzzO%2FyHwbS14e7GuEqWo%2FCKNy6bVb8RbmcN4b47E52KI6POvy984heH%2BsoIX%2BJ7nAIrjYGSx9ziujEirooWnaqo1RpHfK8vKEDhRM3nzKPfnOp7FsKlrbFp1TDFJveB5jYQk8aH%2F8BhW%2FsJBl7S362juXWyB8dqEZaT8FPN70xW%2Fl8JCOixJN0SdjdwSGbyBQmmp2njHlZ4tnUSOtqLTgeUVioO800N0QrwGBnrfjlCF6TW%2B4TV6mlnwRX5qx5uns2v6ekpnCPOoHO5LSisEGJytL0syla1NId6u9HQRC3NfpXRJaJzTHG94EqQ%2FlIvMJpi6n5P8dGQOPSdyclk%2BFEwdkINL%2B2dkciNhiHZSC%2Bmc2gyjgYI%2Fl%2BfhNSujbIzjdeAmnTZ7JAfqLai3dx%2Bvv7zWMjTnyrcrZGwtG1qnbSvlwvSz8Nrhzt8Uhv%2FE3iLePbSIZsNnPGD%2FRsutzSesmEMOG9pcD8zoWFE2FYYZ%2FZIqI0jTKGhhuxVlvbR907I2NWG2sD%2BLR4qG0pleeChle%2BVrp%2BUzoDA%2B5vWqgMyz0ifkoELvcK54%2FOIPOfq1DNzJzybxbdRNnxMNmp6b0GOqUBm06Ug7CeQZ%2FZrqae5Wwy7IvNclPWJIJobeUO6LjYjCOipdKXHUU9boQlgXq2gIrieUPUH3fFNDwsc446BlxSMHxhclrgGV%2FJ0HJt6ppnYED5dgtc%2BfXpuERTX827tcRrStvNUkATsERy0NfJva9uL7QHoiS2uQON%2BMZzYFbIVfwzjpLDHQ88SEAm2qV%2FvbvNj%2BOgEKbaze1%2Fg1X%2Fb5hwCt6R8Zx2&X-Amz-Signature=509bb104d1b7b8bbb13128a6fae3ce5e2e366498e3c6a41d90968efacf25e3ba&X-Amz-SignedHeaders=host&x-id=GetObject)
