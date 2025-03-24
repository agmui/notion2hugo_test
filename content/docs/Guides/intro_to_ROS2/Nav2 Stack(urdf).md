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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN53XSQ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcXSWTxnItRowU%2BpFgdheV3N%2BwxVwS7VWEW5mtosIZgIhAN1O1khNgOHxAKoNjTTEQip6A3%2BezI0DeaASPkaZsYayKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFzllCg0dSQ8iv8Yq3AM0CgyuqRBOVjLFPR5ErNr%2Bg5FnK9mVvtxurEv9mntLAtjdpo846lrn6DI4k8NxYZWrq99QWshSRf5mNO3tgO81gHeZiXqmi1%2BauCIjQgJQt7hSF6firl8yhNjgDDvYnTjagIST30p5YnZ5Hud5IErsljO1OsrTbzM3uLRCuvBWff574nUPpv2B2fOav58bWgBWnwtJzfwzfv2bzl0TIx2KaqwENrG%2Bs7j8ynoNIccwmVezuVBf4Ar30P83ZwGx5wvTIOwFcRkKVYSvdJhZSqc0OJVAGNs2K%2BcNmd4sAd3UW0oB18J8X6fN%2BCkLoVDXKbbbTa6RUIiYfiWEiTDuhbuYtO8SvGD9B%2FPa8%2Fd1MglXN59RORGG%2BQ07RoaMZbgAAw6sTNWtP4UbT05aSps4f8mSFuhg8Wk%2FVGvOuMLyFkHKZfzMtOZehDppEGOksiePA3H6WP%2FWf2SyHxo3EQnrq7UEWBMh9452Pxh5ikHL%2BS4QR2duug2Km8fTBxuX6aoqveK2xknnJ6C%2FRH8ZFcxHAx5rK124T8azsUKsx3S1UUGJkseOSxdv9%2BP8zUFgiJhmLomdNX7G97XZWcch9WvKxnPx%2FhnBdoVd4xW%2BqxokMo8cxq7DSfyF%2Fs0omwvJbjDFsIK%2FBjqkASjBQROsgB4tskuy0F0Tiqdsks5AZlTcYx%2Fo5hgP%2BWL78UbfQP01D9P5bVQ9CA7ryrkiMzUY3rf5aFwJ%2BiH%2BJzI279KEE2coCIxc5bBEDA7OZJTuoV9Eh1T25YMhqP3sy6UbRADkZxV3kS54K50zovWqZJM%2FqnY6C0zqbzEzDYE2cPIspQKi47qj1AV5zx4U1%2FIBTkEuyk35Z%2F22pOsA1UeV4L7b&X-Amz-Signature=c077f933feed5bcf1bd51b24e4e626b7264d372c1f1114ab776ed720870f9913&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN53XSQ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcXSWTxnItRowU%2BpFgdheV3N%2BwxVwS7VWEW5mtosIZgIhAN1O1khNgOHxAKoNjTTEQip6A3%2BezI0DeaASPkaZsYayKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFzllCg0dSQ8iv8Yq3AM0CgyuqRBOVjLFPR5ErNr%2Bg5FnK9mVvtxurEv9mntLAtjdpo846lrn6DI4k8NxYZWrq99QWshSRf5mNO3tgO81gHeZiXqmi1%2BauCIjQgJQt7hSF6firl8yhNjgDDvYnTjagIST30p5YnZ5Hud5IErsljO1OsrTbzM3uLRCuvBWff574nUPpv2B2fOav58bWgBWnwtJzfwzfv2bzl0TIx2KaqwENrG%2Bs7j8ynoNIccwmVezuVBf4Ar30P83ZwGx5wvTIOwFcRkKVYSvdJhZSqc0OJVAGNs2K%2BcNmd4sAd3UW0oB18J8X6fN%2BCkLoVDXKbbbTa6RUIiYfiWEiTDuhbuYtO8SvGD9B%2FPa8%2Fd1MglXN59RORGG%2BQ07RoaMZbgAAw6sTNWtP4UbT05aSps4f8mSFuhg8Wk%2FVGvOuMLyFkHKZfzMtOZehDppEGOksiePA3H6WP%2FWf2SyHxo3EQnrq7UEWBMh9452Pxh5ikHL%2BS4QR2duug2Km8fTBxuX6aoqveK2xknnJ6C%2FRH8ZFcxHAx5rK124T8azsUKsx3S1UUGJkseOSxdv9%2BP8zUFgiJhmLomdNX7G97XZWcch9WvKxnPx%2FhnBdoVd4xW%2BqxokMo8cxq7DSfyF%2Fs0omwvJbjDFsIK%2FBjqkASjBQROsgB4tskuy0F0Tiqdsks5AZlTcYx%2Fo5hgP%2BWL78UbfQP01D9P5bVQ9CA7ryrkiMzUY3rf5aFwJ%2BiH%2BJzI279KEE2coCIxc5bBEDA7OZJTuoV9Eh1T25YMhqP3sy6UbRADkZxV3kS54K50zovWqZJM%2FqnY6C0zqbzEzDYE2cPIspQKi47qj1AV5zx4U1%2FIBTkEuyk35Z%2F22pOsA1UeV4L7b&X-Amz-Signature=0f13db8dc7696658f5e2c773fe0070b454291c346d737002705608b536c6d1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN53XSQ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcXSWTxnItRowU%2BpFgdheV3N%2BwxVwS7VWEW5mtosIZgIhAN1O1khNgOHxAKoNjTTEQip6A3%2BezI0DeaASPkaZsYayKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFzllCg0dSQ8iv8Yq3AM0CgyuqRBOVjLFPR5ErNr%2Bg5FnK9mVvtxurEv9mntLAtjdpo846lrn6DI4k8NxYZWrq99QWshSRf5mNO3tgO81gHeZiXqmi1%2BauCIjQgJQt7hSF6firl8yhNjgDDvYnTjagIST30p5YnZ5Hud5IErsljO1OsrTbzM3uLRCuvBWff574nUPpv2B2fOav58bWgBWnwtJzfwzfv2bzl0TIx2KaqwENrG%2Bs7j8ynoNIccwmVezuVBf4Ar30P83ZwGx5wvTIOwFcRkKVYSvdJhZSqc0OJVAGNs2K%2BcNmd4sAd3UW0oB18J8X6fN%2BCkLoVDXKbbbTa6RUIiYfiWEiTDuhbuYtO8SvGD9B%2FPa8%2Fd1MglXN59RORGG%2BQ07RoaMZbgAAw6sTNWtP4UbT05aSps4f8mSFuhg8Wk%2FVGvOuMLyFkHKZfzMtOZehDppEGOksiePA3H6WP%2FWf2SyHxo3EQnrq7UEWBMh9452Pxh5ikHL%2BS4QR2duug2Km8fTBxuX6aoqveK2xknnJ6C%2FRH8ZFcxHAx5rK124T8azsUKsx3S1UUGJkseOSxdv9%2BP8zUFgiJhmLomdNX7G97XZWcch9WvKxnPx%2FhnBdoVd4xW%2BqxokMo8cxq7DSfyF%2Fs0omwvJbjDFsIK%2FBjqkASjBQROsgB4tskuy0F0Tiqdsks5AZlTcYx%2Fo5hgP%2BWL78UbfQP01D9P5bVQ9CA7ryrkiMzUY3rf5aFwJ%2BiH%2BJzI279KEE2coCIxc5bBEDA7OZJTuoV9Eh1T25YMhqP3sy6UbRADkZxV3kS54K50zovWqZJM%2FqnY6C0zqbzEzDYE2cPIspQKi47qj1AV5zx4U1%2FIBTkEuyk35Z%2F22pOsA1UeV4L7b&X-Amz-Signature=1b7696fc4079d2626ea4b353d6b25eb8cae83682fd134e1681c7e14145b7a052&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN53XSQ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcXSWTxnItRowU%2BpFgdheV3N%2BwxVwS7VWEW5mtosIZgIhAN1O1khNgOHxAKoNjTTEQip6A3%2BezI0DeaASPkaZsYayKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFzllCg0dSQ8iv8Yq3AM0CgyuqRBOVjLFPR5ErNr%2Bg5FnK9mVvtxurEv9mntLAtjdpo846lrn6DI4k8NxYZWrq99QWshSRf5mNO3tgO81gHeZiXqmi1%2BauCIjQgJQt7hSF6firl8yhNjgDDvYnTjagIST30p5YnZ5Hud5IErsljO1OsrTbzM3uLRCuvBWff574nUPpv2B2fOav58bWgBWnwtJzfwzfv2bzl0TIx2KaqwENrG%2Bs7j8ynoNIccwmVezuVBf4Ar30P83ZwGx5wvTIOwFcRkKVYSvdJhZSqc0OJVAGNs2K%2BcNmd4sAd3UW0oB18J8X6fN%2BCkLoVDXKbbbTa6RUIiYfiWEiTDuhbuYtO8SvGD9B%2FPa8%2Fd1MglXN59RORGG%2BQ07RoaMZbgAAw6sTNWtP4UbT05aSps4f8mSFuhg8Wk%2FVGvOuMLyFkHKZfzMtOZehDppEGOksiePA3H6WP%2FWf2SyHxo3EQnrq7UEWBMh9452Pxh5ikHL%2BS4QR2duug2Km8fTBxuX6aoqveK2xknnJ6C%2FRH8ZFcxHAx5rK124T8azsUKsx3S1UUGJkseOSxdv9%2BP8zUFgiJhmLomdNX7G97XZWcch9WvKxnPx%2FhnBdoVd4xW%2BqxokMo8cxq7DSfyF%2Fs0omwvJbjDFsIK%2FBjqkASjBQROsgB4tskuy0F0Tiqdsks5AZlTcYx%2Fo5hgP%2BWL78UbfQP01D9P5bVQ9CA7ryrkiMzUY3rf5aFwJ%2BiH%2BJzI279KEE2coCIxc5bBEDA7OZJTuoV9Eh1T25YMhqP3sy6UbRADkZxV3kS54K50zovWqZJM%2FqnY6C0zqbzEzDYE2cPIspQKi47qj1AV5zx4U1%2FIBTkEuyk35Z%2F22pOsA1UeV4L7b&X-Amz-Signature=e6d5c6b1213311a47d498a7117aa72276a369f3288ea99002a21f378d7ab8f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN53XSQ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcXSWTxnItRowU%2BpFgdheV3N%2BwxVwS7VWEW5mtosIZgIhAN1O1khNgOHxAKoNjTTEQip6A3%2BezI0DeaASPkaZsYayKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFzllCg0dSQ8iv8Yq3AM0CgyuqRBOVjLFPR5ErNr%2Bg5FnK9mVvtxurEv9mntLAtjdpo846lrn6DI4k8NxYZWrq99QWshSRf5mNO3tgO81gHeZiXqmi1%2BauCIjQgJQt7hSF6firl8yhNjgDDvYnTjagIST30p5YnZ5Hud5IErsljO1OsrTbzM3uLRCuvBWff574nUPpv2B2fOav58bWgBWnwtJzfwzfv2bzl0TIx2KaqwENrG%2Bs7j8ynoNIccwmVezuVBf4Ar30P83ZwGx5wvTIOwFcRkKVYSvdJhZSqc0OJVAGNs2K%2BcNmd4sAd3UW0oB18J8X6fN%2BCkLoVDXKbbbTa6RUIiYfiWEiTDuhbuYtO8SvGD9B%2FPa8%2Fd1MglXN59RORGG%2BQ07RoaMZbgAAw6sTNWtP4UbT05aSps4f8mSFuhg8Wk%2FVGvOuMLyFkHKZfzMtOZehDppEGOksiePA3H6WP%2FWf2SyHxo3EQnrq7UEWBMh9452Pxh5ikHL%2BS4QR2duug2Km8fTBxuX6aoqveK2xknnJ6C%2FRH8ZFcxHAx5rK124T8azsUKsx3S1UUGJkseOSxdv9%2BP8zUFgiJhmLomdNX7G97XZWcch9WvKxnPx%2FhnBdoVd4xW%2BqxokMo8cxq7DSfyF%2Fs0omwvJbjDFsIK%2FBjqkASjBQROsgB4tskuy0F0Tiqdsks5AZlTcYx%2Fo5hgP%2BWL78UbfQP01D9P5bVQ9CA7ryrkiMzUY3rf5aFwJ%2BiH%2BJzI279KEE2coCIxc5bBEDA7OZJTuoV9Eh1T25YMhqP3sy6UbRADkZxV3kS54K50zovWqZJM%2FqnY6C0zqbzEzDYE2cPIspQKi47qj1AV5zx4U1%2FIBTkEuyk35Z%2F22pOsA1UeV4L7b&X-Amz-Signature=78e9bd4e10871df3630f14e6c17c14cd77b3902e6aef77b6d06808f1a4c33431&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN53XSQ4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcXSWTxnItRowU%2BpFgdheV3N%2BwxVwS7VWEW5mtosIZgIhAN1O1khNgOHxAKoNjTTEQip6A3%2BezI0DeaASPkaZsYayKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFzllCg0dSQ8iv8Yq3AM0CgyuqRBOVjLFPR5ErNr%2Bg5FnK9mVvtxurEv9mntLAtjdpo846lrn6DI4k8NxYZWrq99QWshSRf5mNO3tgO81gHeZiXqmi1%2BauCIjQgJQt7hSF6firl8yhNjgDDvYnTjagIST30p5YnZ5Hud5IErsljO1OsrTbzM3uLRCuvBWff574nUPpv2B2fOav58bWgBWnwtJzfwzfv2bzl0TIx2KaqwENrG%2Bs7j8ynoNIccwmVezuVBf4Ar30P83ZwGx5wvTIOwFcRkKVYSvdJhZSqc0OJVAGNs2K%2BcNmd4sAd3UW0oB18J8X6fN%2BCkLoVDXKbbbTa6RUIiYfiWEiTDuhbuYtO8SvGD9B%2FPa8%2Fd1MglXN59RORGG%2BQ07RoaMZbgAAw6sTNWtP4UbT05aSps4f8mSFuhg8Wk%2FVGvOuMLyFkHKZfzMtOZehDppEGOksiePA3H6WP%2FWf2SyHxo3EQnrq7UEWBMh9452Pxh5ikHL%2BS4QR2duug2Km8fTBxuX6aoqveK2xknnJ6C%2FRH8ZFcxHAx5rK124T8azsUKsx3S1UUGJkseOSxdv9%2BP8zUFgiJhmLomdNX7G97XZWcch9WvKxnPx%2FhnBdoVd4xW%2BqxokMo8cxq7DSfyF%2Fs0omwvJbjDFsIK%2FBjqkASjBQROsgB4tskuy0F0Tiqdsks5AZlTcYx%2Fo5hgP%2BWL78UbfQP01D9P5bVQ9CA7ryrkiMzUY3rf5aFwJ%2BiH%2BJzI279KEE2coCIxc5bBEDA7OZJTuoV9Eh1T25YMhqP3sy6UbRADkZxV3kS54K50zovWqZJM%2FqnY6C0zqbzEzDYE2cPIspQKi47qj1AV5zx4U1%2FIBTkEuyk35Z%2F22pOsA1UeV4L7b&X-Amz-Signature=568b0e05f5e0d919e3a97030c637813277be8a9b73d3841c585102d9e9871034&X-Amz-SignedHeaders=host&x-id=GetObject)
