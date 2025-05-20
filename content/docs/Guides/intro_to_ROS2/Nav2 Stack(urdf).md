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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226D6FXC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzg0%2BgYffTTwb8HKm7ZPEHXs7ZgnX6FxJ3vtCf0%2FKf9AiA%2Fvkf7nFX8C69%2FG2aX7bKgxvLYwKuDllaTBUyzBBjllyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Zuk3l717oVeUGAtKtwDo3iHRitwRGftKdzjSRUNixtidnkmHvdaELTKM12qv9i8mmFoRAe9mp6Y%2FteX2c4nhjUnEnBclNM0Y%2FmKqjko8omjGI8pL8mvtyyFuJzywcxSME%2BlPe2sXLwSLVBP%2FraVvWd444jdH%2B1r7o%2FbuCVnrkbBePrQOyPSPBgj2PxnSLN%2BLTdl9hSlxV%2FQo%2BzjDFlz1Wrl02Iw4CXBANmC56x%2FlwwV2D4JNpxnhM2DgAx0cTykQvodEHzDlTLWlPR4HHs2Dj25Xv%2BbGG6PUOMkPjwcADy8cdUbkK%2FRMjp5nuCkPRerpHR18SyH5pNcHzZRGOXjdbDEYXr57PDEMhlO2jvwCl60i%2FF2nsU21j%2FdligF73TiRXuTRT4TPCbdEuBNDPiKbsAwAPdS6J%2F32SA8jnldQKOJeopRpQnk7XQ4RLoqTS0m8gO%2BVJ5AjDuCyzI2wPJMhlo6v9PlA7PAd7DAQhiEjBD75VA2hthxDjMYUgmosS3D2lkhV1J2RV%2FUqaFrH5iag4Pg4zWhQUoTCPKTGssXHiz8CUcq374TqgRsTkFcEDbiQGfZwPZhNOAc2xTiEEWPN6n8nwfBEmfMDHDFQuqukMCm28p56%2FXJQlOk9RNf1mX0h5P4OLokbhtcctwwnq2xwQY6pgGUkJ7gT26DjLXM8ho3prUpkGqxn4o3m56%2Fc%2F6CVH5jOgINp6p%2FFwMX9%2BB8cWsnHYjGZzTIiltRPQx6KbdZ72PuzUkOHi3WE9ij5pQPOSIgqnOlh8CGYX0NyyXVMKx08jlnnGHPR7Bbz2ShUlNX13MWncU5y18OvA494s6aOpy2R1Bv6kHawi2vGMwZGJv9aC673OmPUOAKLpN2cVxx1oiEbdVF%2B8Ig&X-Amz-Signature=4e997e057625664ff9eaa5976665ef799b63b034139f000c54b0f31f6a1f656b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226D6FXC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzg0%2BgYffTTwb8HKm7ZPEHXs7ZgnX6FxJ3vtCf0%2FKf9AiA%2Fvkf7nFX8C69%2FG2aX7bKgxvLYwKuDllaTBUyzBBjllyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Zuk3l717oVeUGAtKtwDo3iHRitwRGftKdzjSRUNixtidnkmHvdaELTKM12qv9i8mmFoRAe9mp6Y%2FteX2c4nhjUnEnBclNM0Y%2FmKqjko8omjGI8pL8mvtyyFuJzywcxSME%2BlPe2sXLwSLVBP%2FraVvWd444jdH%2B1r7o%2FbuCVnrkbBePrQOyPSPBgj2PxnSLN%2BLTdl9hSlxV%2FQo%2BzjDFlz1Wrl02Iw4CXBANmC56x%2FlwwV2D4JNpxnhM2DgAx0cTykQvodEHzDlTLWlPR4HHs2Dj25Xv%2BbGG6PUOMkPjwcADy8cdUbkK%2FRMjp5nuCkPRerpHR18SyH5pNcHzZRGOXjdbDEYXr57PDEMhlO2jvwCl60i%2FF2nsU21j%2FdligF73TiRXuTRT4TPCbdEuBNDPiKbsAwAPdS6J%2F32SA8jnldQKOJeopRpQnk7XQ4RLoqTS0m8gO%2BVJ5AjDuCyzI2wPJMhlo6v9PlA7PAd7DAQhiEjBD75VA2hthxDjMYUgmosS3D2lkhV1J2RV%2FUqaFrH5iag4Pg4zWhQUoTCPKTGssXHiz8CUcq374TqgRsTkFcEDbiQGfZwPZhNOAc2xTiEEWPN6n8nwfBEmfMDHDFQuqukMCm28p56%2FXJQlOk9RNf1mX0h5P4OLokbhtcctwwnq2xwQY6pgGUkJ7gT26DjLXM8ho3prUpkGqxn4o3m56%2Fc%2F6CVH5jOgINp6p%2FFwMX9%2BB8cWsnHYjGZzTIiltRPQx6KbdZ72PuzUkOHi3WE9ij5pQPOSIgqnOlh8CGYX0NyyXVMKx08jlnnGHPR7Bbz2ShUlNX13MWncU5y18OvA494s6aOpy2R1Bv6kHawi2vGMwZGJv9aC673OmPUOAKLpN2cVxx1oiEbdVF%2B8Ig&X-Amz-Signature=38f96ea1fce8b3a409f70b0b37bd2e0e0521912dfd7c8247b471e22ea2d434f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226D6FXC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzg0%2BgYffTTwb8HKm7ZPEHXs7ZgnX6FxJ3vtCf0%2FKf9AiA%2Fvkf7nFX8C69%2FG2aX7bKgxvLYwKuDllaTBUyzBBjllyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Zuk3l717oVeUGAtKtwDo3iHRitwRGftKdzjSRUNixtidnkmHvdaELTKM12qv9i8mmFoRAe9mp6Y%2FteX2c4nhjUnEnBclNM0Y%2FmKqjko8omjGI8pL8mvtyyFuJzywcxSME%2BlPe2sXLwSLVBP%2FraVvWd444jdH%2B1r7o%2FbuCVnrkbBePrQOyPSPBgj2PxnSLN%2BLTdl9hSlxV%2FQo%2BzjDFlz1Wrl02Iw4CXBANmC56x%2FlwwV2D4JNpxnhM2DgAx0cTykQvodEHzDlTLWlPR4HHs2Dj25Xv%2BbGG6PUOMkPjwcADy8cdUbkK%2FRMjp5nuCkPRerpHR18SyH5pNcHzZRGOXjdbDEYXr57PDEMhlO2jvwCl60i%2FF2nsU21j%2FdligF73TiRXuTRT4TPCbdEuBNDPiKbsAwAPdS6J%2F32SA8jnldQKOJeopRpQnk7XQ4RLoqTS0m8gO%2BVJ5AjDuCyzI2wPJMhlo6v9PlA7PAd7DAQhiEjBD75VA2hthxDjMYUgmosS3D2lkhV1J2RV%2FUqaFrH5iag4Pg4zWhQUoTCPKTGssXHiz8CUcq374TqgRsTkFcEDbiQGfZwPZhNOAc2xTiEEWPN6n8nwfBEmfMDHDFQuqukMCm28p56%2FXJQlOk9RNf1mX0h5P4OLokbhtcctwwnq2xwQY6pgGUkJ7gT26DjLXM8ho3prUpkGqxn4o3m56%2Fc%2F6CVH5jOgINp6p%2FFwMX9%2BB8cWsnHYjGZzTIiltRPQx6KbdZ72PuzUkOHi3WE9ij5pQPOSIgqnOlh8CGYX0NyyXVMKx08jlnnGHPR7Bbz2ShUlNX13MWncU5y18OvA494s6aOpy2R1Bv6kHawi2vGMwZGJv9aC673OmPUOAKLpN2cVxx1oiEbdVF%2B8Ig&X-Amz-Signature=2c4cc4de419798f6b73d4c3eae2672f44848747010d707b8b527754ba076d29f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226D6FXC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzg0%2BgYffTTwb8HKm7ZPEHXs7ZgnX6FxJ3vtCf0%2FKf9AiA%2Fvkf7nFX8C69%2FG2aX7bKgxvLYwKuDllaTBUyzBBjllyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Zuk3l717oVeUGAtKtwDo3iHRitwRGftKdzjSRUNixtidnkmHvdaELTKM12qv9i8mmFoRAe9mp6Y%2FteX2c4nhjUnEnBclNM0Y%2FmKqjko8omjGI8pL8mvtyyFuJzywcxSME%2BlPe2sXLwSLVBP%2FraVvWd444jdH%2B1r7o%2FbuCVnrkbBePrQOyPSPBgj2PxnSLN%2BLTdl9hSlxV%2FQo%2BzjDFlz1Wrl02Iw4CXBANmC56x%2FlwwV2D4JNpxnhM2DgAx0cTykQvodEHzDlTLWlPR4HHs2Dj25Xv%2BbGG6PUOMkPjwcADy8cdUbkK%2FRMjp5nuCkPRerpHR18SyH5pNcHzZRGOXjdbDEYXr57PDEMhlO2jvwCl60i%2FF2nsU21j%2FdligF73TiRXuTRT4TPCbdEuBNDPiKbsAwAPdS6J%2F32SA8jnldQKOJeopRpQnk7XQ4RLoqTS0m8gO%2BVJ5AjDuCyzI2wPJMhlo6v9PlA7PAd7DAQhiEjBD75VA2hthxDjMYUgmosS3D2lkhV1J2RV%2FUqaFrH5iag4Pg4zWhQUoTCPKTGssXHiz8CUcq374TqgRsTkFcEDbiQGfZwPZhNOAc2xTiEEWPN6n8nwfBEmfMDHDFQuqukMCm28p56%2FXJQlOk9RNf1mX0h5P4OLokbhtcctwwnq2xwQY6pgGUkJ7gT26DjLXM8ho3prUpkGqxn4o3m56%2Fc%2F6CVH5jOgINp6p%2FFwMX9%2BB8cWsnHYjGZzTIiltRPQx6KbdZ72PuzUkOHi3WE9ij5pQPOSIgqnOlh8CGYX0NyyXVMKx08jlnnGHPR7Bbz2ShUlNX13MWncU5y18OvA494s6aOpy2R1Bv6kHawi2vGMwZGJv9aC673OmPUOAKLpN2cVxx1oiEbdVF%2B8Ig&X-Amz-Signature=c9f887a3d4f251c9cac90105bbf064195a158a13d494301d92adb47ce100ab13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226D6FXC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzg0%2BgYffTTwb8HKm7ZPEHXs7ZgnX6FxJ3vtCf0%2FKf9AiA%2Fvkf7nFX8C69%2FG2aX7bKgxvLYwKuDllaTBUyzBBjllyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Zuk3l717oVeUGAtKtwDo3iHRitwRGftKdzjSRUNixtidnkmHvdaELTKM12qv9i8mmFoRAe9mp6Y%2FteX2c4nhjUnEnBclNM0Y%2FmKqjko8omjGI8pL8mvtyyFuJzywcxSME%2BlPe2sXLwSLVBP%2FraVvWd444jdH%2B1r7o%2FbuCVnrkbBePrQOyPSPBgj2PxnSLN%2BLTdl9hSlxV%2FQo%2BzjDFlz1Wrl02Iw4CXBANmC56x%2FlwwV2D4JNpxnhM2DgAx0cTykQvodEHzDlTLWlPR4HHs2Dj25Xv%2BbGG6PUOMkPjwcADy8cdUbkK%2FRMjp5nuCkPRerpHR18SyH5pNcHzZRGOXjdbDEYXr57PDEMhlO2jvwCl60i%2FF2nsU21j%2FdligF73TiRXuTRT4TPCbdEuBNDPiKbsAwAPdS6J%2F32SA8jnldQKOJeopRpQnk7XQ4RLoqTS0m8gO%2BVJ5AjDuCyzI2wPJMhlo6v9PlA7PAd7DAQhiEjBD75VA2hthxDjMYUgmosS3D2lkhV1J2RV%2FUqaFrH5iag4Pg4zWhQUoTCPKTGssXHiz8CUcq374TqgRsTkFcEDbiQGfZwPZhNOAc2xTiEEWPN6n8nwfBEmfMDHDFQuqukMCm28p56%2FXJQlOk9RNf1mX0h5P4OLokbhtcctwwnq2xwQY6pgGUkJ7gT26DjLXM8ho3prUpkGqxn4o3m56%2Fc%2F6CVH5jOgINp6p%2FFwMX9%2BB8cWsnHYjGZzTIiltRPQx6KbdZ72PuzUkOHi3WE9ij5pQPOSIgqnOlh8CGYX0NyyXVMKx08jlnnGHPR7Bbz2ShUlNX13MWncU5y18OvA494s6aOpy2R1Bv6kHawi2vGMwZGJv9aC673OmPUOAKLpN2cVxx1oiEbdVF%2B8Ig&X-Amz-Signature=e9e612527244e866dc887954368da87b8d32de01c1af787de73451d386b78c32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226D6FXC%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzg0%2BgYffTTwb8HKm7ZPEHXs7ZgnX6FxJ3vtCf0%2FKf9AiA%2Fvkf7nFX8C69%2FG2aX7bKgxvLYwKuDllaTBUyzBBjllyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Zuk3l717oVeUGAtKtwDo3iHRitwRGftKdzjSRUNixtidnkmHvdaELTKM12qv9i8mmFoRAe9mp6Y%2FteX2c4nhjUnEnBclNM0Y%2FmKqjko8omjGI8pL8mvtyyFuJzywcxSME%2BlPe2sXLwSLVBP%2FraVvWd444jdH%2B1r7o%2FbuCVnrkbBePrQOyPSPBgj2PxnSLN%2BLTdl9hSlxV%2FQo%2BzjDFlz1Wrl02Iw4CXBANmC56x%2FlwwV2D4JNpxnhM2DgAx0cTykQvodEHzDlTLWlPR4HHs2Dj25Xv%2BbGG6PUOMkPjwcADy8cdUbkK%2FRMjp5nuCkPRerpHR18SyH5pNcHzZRGOXjdbDEYXr57PDEMhlO2jvwCl60i%2FF2nsU21j%2FdligF73TiRXuTRT4TPCbdEuBNDPiKbsAwAPdS6J%2F32SA8jnldQKOJeopRpQnk7XQ4RLoqTS0m8gO%2BVJ5AjDuCyzI2wPJMhlo6v9PlA7PAd7DAQhiEjBD75VA2hthxDjMYUgmosS3D2lkhV1J2RV%2FUqaFrH5iag4Pg4zWhQUoTCPKTGssXHiz8CUcq374TqgRsTkFcEDbiQGfZwPZhNOAc2xTiEEWPN6n8nwfBEmfMDHDFQuqukMCm28p56%2FXJQlOk9RNf1mX0h5P4OLokbhtcctwwnq2xwQY6pgGUkJ7gT26DjLXM8ho3prUpkGqxn4o3m56%2Fc%2F6CVH5jOgINp6p%2FFwMX9%2BB8cWsnHYjGZzTIiltRPQx6KbdZ72PuzUkOHi3WE9ij5pQPOSIgqnOlh8CGYX0NyyXVMKx08jlnnGHPR7Bbz2ShUlNX13MWncU5y18OvA494s6aOpy2R1Bv6kHawi2vGMwZGJv9aC673OmPUOAKLpN2cVxx1oiEbdVF%2B8Ig&X-Amz-Signature=331c4542472262ced32440472d63e2c3876bdb92e082e9314e823084efc8e8e3&X-Amz-SignedHeaders=host&x-id=GetObject)
