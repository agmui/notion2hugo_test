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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PXXKNK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPoHYT3X1rDtBRIWvuDTn4lOS%2BzzDBNfJKobeRyUpCHwIhAJ1b7jew5Hdq8o9D%2Fo3q0uNVZyj5Gl8EyJIq%2FHzOa5SuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimEmyJCOPrisAll4q3APn1UF5plyiEOmtGb4oaxPiFDL9lkI0VZYMg1R3FCKX3cWJa8eKMRcAkSdq%2Fs1BZRECQLx%2BvXZHGToFU6xy7Q5SRqS3ERYK3AdN7BfX%2BmkGQeN%2BlZFu9xt%2BLGJFLUjGqUIoyL%2BCLtHBPig9c2lvn%2BDmWME1OQBbVgZVeuf8SU2dLyQOwwKhnfzs08w3y%2BUoifOOSeoEwkLYnPrdc%2BOC2HG7dmkoTRVe%2BejuxPIIvqQaV8mC8fNzna5OlBIC%2FvDr3xGztZ4FaH2nrVhblg0thCGjQDff%2F9sRN3qHWQQMDT8UCCk1VJEXOWxmBz1J3fNeE1Hg2BB47bZuhcWO%2Fl%2B98f7f33HKI%2FlPBTn4%2FHBx8j1%2FFYa47ruuj4CTQ9Cu6CghXWYED0XQDKj03tSiLJi%2Bqw1xv4V5%2BFiNrxT6%2FQpGW67RBML0WvcfDijjqAnQrEu0pDtRW8QC9cAFoI8SBCGBomygfWwQn2kY6TwFFn9RBsmOcQvFRA755kpvnEnraOJV2LmwiCTWhCTKgPUR%2B9lNrCIRX7QRa4h%2Bfy3eF4WWo8PpFm%2FTRh0%2BmbZHdkUg7BrWT3Tt87fIpPud452EnrukkSdPgQtMfbIFI1GfPJWr7r%2Bvrk8%2FVAsoziAZA3WXUDDr0YS%2BBjqkAWWl4NNYJ7e%2FhMOFYjfBP%2F9l9al6ifs7eq62u4c3csLiE10fRFUxRH88v5%2BXjm%2BdW7RObc36HzoKAR%2FiTuisJTVdNm7sWt%2B%2FaTW3W4UUjgh0pApk%2BF8a2EVi1jI1gBjHOticw2XEFoU%2BeRG5PgwKDj6fTLYlDpcN937VF2DrUFgnnL1MRSgbeiPoGx%2FFAyghVLFXJ2nsQx5NiYqMovxGjI7rpKVV&X-Amz-Signature=2b1dcb302807f1e9f4e2908a0732b022c4297a642e8696ed7addc6643d5d66f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PXXKNK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPoHYT3X1rDtBRIWvuDTn4lOS%2BzzDBNfJKobeRyUpCHwIhAJ1b7jew5Hdq8o9D%2Fo3q0uNVZyj5Gl8EyJIq%2FHzOa5SuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimEmyJCOPrisAll4q3APn1UF5plyiEOmtGb4oaxPiFDL9lkI0VZYMg1R3FCKX3cWJa8eKMRcAkSdq%2Fs1BZRECQLx%2BvXZHGToFU6xy7Q5SRqS3ERYK3AdN7BfX%2BmkGQeN%2BlZFu9xt%2BLGJFLUjGqUIoyL%2BCLtHBPig9c2lvn%2BDmWME1OQBbVgZVeuf8SU2dLyQOwwKhnfzs08w3y%2BUoifOOSeoEwkLYnPrdc%2BOC2HG7dmkoTRVe%2BejuxPIIvqQaV8mC8fNzna5OlBIC%2FvDr3xGztZ4FaH2nrVhblg0thCGjQDff%2F9sRN3qHWQQMDT8UCCk1VJEXOWxmBz1J3fNeE1Hg2BB47bZuhcWO%2Fl%2B98f7f33HKI%2FlPBTn4%2FHBx8j1%2FFYa47ruuj4CTQ9Cu6CghXWYED0XQDKj03tSiLJi%2Bqw1xv4V5%2BFiNrxT6%2FQpGW67RBML0WvcfDijjqAnQrEu0pDtRW8QC9cAFoI8SBCGBomygfWwQn2kY6TwFFn9RBsmOcQvFRA755kpvnEnraOJV2LmwiCTWhCTKgPUR%2B9lNrCIRX7QRa4h%2Bfy3eF4WWo8PpFm%2FTRh0%2BmbZHdkUg7BrWT3Tt87fIpPud452EnrukkSdPgQtMfbIFI1GfPJWr7r%2Bvrk8%2FVAsoziAZA3WXUDDr0YS%2BBjqkAWWl4NNYJ7e%2FhMOFYjfBP%2F9l9al6ifs7eq62u4c3csLiE10fRFUxRH88v5%2BXjm%2BdW7RObc36HzoKAR%2FiTuisJTVdNm7sWt%2B%2FaTW3W4UUjgh0pApk%2BF8a2EVi1jI1gBjHOticw2XEFoU%2BeRG5PgwKDj6fTLYlDpcN937VF2DrUFgnnL1MRSgbeiPoGx%2FFAyghVLFXJ2nsQx5NiYqMovxGjI7rpKVV&X-Amz-Signature=7db530fd06e6eba65e6601c15e9ded256182a2605654634e5ee6cb84099bd4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PXXKNK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPoHYT3X1rDtBRIWvuDTn4lOS%2BzzDBNfJKobeRyUpCHwIhAJ1b7jew5Hdq8o9D%2Fo3q0uNVZyj5Gl8EyJIq%2FHzOa5SuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimEmyJCOPrisAll4q3APn1UF5plyiEOmtGb4oaxPiFDL9lkI0VZYMg1R3FCKX3cWJa8eKMRcAkSdq%2Fs1BZRECQLx%2BvXZHGToFU6xy7Q5SRqS3ERYK3AdN7BfX%2BmkGQeN%2BlZFu9xt%2BLGJFLUjGqUIoyL%2BCLtHBPig9c2lvn%2BDmWME1OQBbVgZVeuf8SU2dLyQOwwKhnfzs08w3y%2BUoifOOSeoEwkLYnPrdc%2BOC2HG7dmkoTRVe%2BejuxPIIvqQaV8mC8fNzna5OlBIC%2FvDr3xGztZ4FaH2nrVhblg0thCGjQDff%2F9sRN3qHWQQMDT8UCCk1VJEXOWxmBz1J3fNeE1Hg2BB47bZuhcWO%2Fl%2B98f7f33HKI%2FlPBTn4%2FHBx8j1%2FFYa47ruuj4CTQ9Cu6CghXWYED0XQDKj03tSiLJi%2Bqw1xv4V5%2BFiNrxT6%2FQpGW67RBML0WvcfDijjqAnQrEu0pDtRW8QC9cAFoI8SBCGBomygfWwQn2kY6TwFFn9RBsmOcQvFRA755kpvnEnraOJV2LmwiCTWhCTKgPUR%2B9lNrCIRX7QRa4h%2Bfy3eF4WWo8PpFm%2FTRh0%2BmbZHdkUg7BrWT3Tt87fIpPud452EnrukkSdPgQtMfbIFI1GfPJWr7r%2Bvrk8%2FVAsoziAZA3WXUDDr0YS%2BBjqkAWWl4NNYJ7e%2FhMOFYjfBP%2F9l9al6ifs7eq62u4c3csLiE10fRFUxRH88v5%2BXjm%2BdW7RObc36HzoKAR%2FiTuisJTVdNm7sWt%2B%2FaTW3W4UUjgh0pApk%2BF8a2EVi1jI1gBjHOticw2XEFoU%2BeRG5PgwKDj6fTLYlDpcN937VF2DrUFgnnL1MRSgbeiPoGx%2FFAyghVLFXJ2nsQx5NiYqMovxGjI7rpKVV&X-Amz-Signature=0d65d13290469573a38389f1288dceb9276559b205cc911337981e0f74d9e129&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PXXKNK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPoHYT3X1rDtBRIWvuDTn4lOS%2BzzDBNfJKobeRyUpCHwIhAJ1b7jew5Hdq8o9D%2Fo3q0uNVZyj5Gl8EyJIq%2FHzOa5SuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimEmyJCOPrisAll4q3APn1UF5plyiEOmtGb4oaxPiFDL9lkI0VZYMg1R3FCKX3cWJa8eKMRcAkSdq%2Fs1BZRECQLx%2BvXZHGToFU6xy7Q5SRqS3ERYK3AdN7BfX%2BmkGQeN%2BlZFu9xt%2BLGJFLUjGqUIoyL%2BCLtHBPig9c2lvn%2BDmWME1OQBbVgZVeuf8SU2dLyQOwwKhnfzs08w3y%2BUoifOOSeoEwkLYnPrdc%2BOC2HG7dmkoTRVe%2BejuxPIIvqQaV8mC8fNzna5OlBIC%2FvDr3xGztZ4FaH2nrVhblg0thCGjQDff%2F9sRN3qHWQQMDT8UCCk1VJEXOWxmBz1J3fNeE1Hg2BB47bZuhcWO%2Fl%2B98f7f33HKI%2FlPBTn4%2FHBx8j1%2FFYa47ruuj4CTQ9Cu6CghXWYED0XQDKj03tSiLJi%2Bqw1xv4V5%2BFiNrxT6%2FQpGW67RBML0WvcfDijjqAnQrEu0pDtRW8QC9cAFoI8SBCGBomygfWwQn2kY6TwFFn9RBsmOcQvFRA755kpvnEnraOJV2LmwiCTWhCTKgPUR%2B9lNrCIRX7QRa4h%2Bfy3eF4WWo8PpFm%2FTRh0%2BmbZHdkUg7BrWT3Tt87fIpPud452EnrukkSdPgQtMfbIFI1GfPJWr7r%2Bvrk8%2FVAsoziAZA3WXUDDr0YS%2BBjqkAWWl4NNYJ7e%2FhMOFYjfBP%2F9l9al6ifs7eq62u4c3csLiE10fRFUxRH88v5%2BXjm%2BdW7RObc36HzoKAR%2FiTuisJTVdNm7sWt%2B%2FaTW3W4UUjgh0pApk%2BF8a2EVi1jI1gBjHOticw2XEFoU%2BeRG5PgwKDj6fTLYlDpcN937VF2DrUFgnnL1MRSgbeiPoGx%2FFAyghVLFXJ2nsQx5NiYqMovxGjI7rpKVV&X-Amz-Signature=677eb6a3717b0e20f2b1d7cc16407f354de3aeba0a5ecff2be8f6abb235e1075&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PXXKNK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPoHYT3X1rDtBRIWvuDTn4lOS%2BzzDBNfJKobeRyUpCHwIhAJ1b7jew5Hdq8o9D%2Fo3q0uNVZyj5Gl8EyJIq%2FHzOa5SuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimEmyJCOPrisAll4q3APn1UF5plyiEOmtGb4oaxPiFDL9lkI0VZYMg1R3FCKX3cWJa8eKMRcAkSdq%2Fs1BZRECQLx%2BvXZHGToFU6xy7Q5SRqS3ERYK3AdN7BfX%2BmkGQeN%2BlZFu9xt%2BLGJFLUjGqUIoyL%2BCLtHBPig9c2lvn%2BDmWME1OQBbVgZVeuf8SU2dLyQOwwKhnfzs08w3y%2BUoifOOSeoEwkLYnPrdc%2BOC2HG7dmkoTRVe%2BejuxPIIvqQaV8mC8fNzna5OlBIC%2FvDr3xGztZ4FaH2nrVhblg0thCGjQDff%2F9sRN3qHWQQMDT8UCCk1VJEXOWxmBz1J3fNeE1Hg2BB47bZuhcWO%2Fl%2B98f7f33HKI%2FlPBTn4%2FHBx8j1%2FFYa47ruuj4CTQ9Cu6CghXWYED0XQDKj03tSiLJi%2Bqw1xv4V5%2BFiNrxT6%2FQpGW67RBML0WvcfDijjqAnQrEu0pDtRW8QC9cAFoI8SBCGBomygfWwQn2kY6TwFFn9RBsmOcQvFRA755kpvnEnraOJV2LmwiCTWhCTKgPUR%2B9lNrCIRX7QRa4h%2Bfy3eF4WWo8PpFm%2FTRh0%2BmbZHdkUg7BrWT3Tt87fIpPud452EnrukkSdPgQtMfbIFI1GfPJWr7r%2Bvrk8%2FVAsoziAZA3WXUDDr0YS%2BBjqkAWWl4NNYJ7e%2FhMOFYjfBP%2F9l9al6ifs7eq62u4c3csLiE10fRFUxRH88v5%2BXjm%2BdW7RObc36HzoKAR%2FiTuisJTVdNm7sWt%2B%2FaTW3W4UUjgh0pApk%2BF8a2EVi1jI1gBjHOticw2XEFoU%2BeRG5PgwKDj6fTLYlDpcN937VF2DrUFgnnL1MRSgbeiPoGx%2FFAyghVLFXJ2nsQx5NiYqMovxGjI7rpKVV&X-Amz-Signature=60dac3f975dc754dfea83015a97fb8c233b24e385c65c2755e0ae820df9cc63d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PXXKNK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDPoHYT3X1rDtBRIWvuDTn4lOS%2BzzDBNfJKobeRyUpCHwIhAJ1b7jew5Hdq8o9D%2Fo3q0uNVZyj5Gl8EyJIq%2FHzOa5SuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimEmyJCOPrisAll4q3APn1UF5plyiEOmtGb4oaxPiFDL9lkI0VZYMg1R3FCKX3cWJa8eKMRcAkSdq%2Fs1BZRECQLx%2BvXZHGToFU6xy7Q5SRqS3ERYK3AdN7BfX%2BmkGQeN%2BlZFu9xt%2BLGJFLUjGqUIoyL%2BCLtHBPig9c2lvn%2BDmWME1OQBbVgZVeuf8SU2dLyQOwwKhnfzs08w3y%2BUoifOOSeoEwkLYnPrdc%2BOC2HG7dmkoTRVe%2BejuxPIIvqQaV8mC8fNzna5OlBIC%2FvDr3xGztZ4FaH2nrVhblg0thCGjQDff%2F9sRN3qHWQQMDT8UCCk1VJEXOWxmBz1J3fNeE1Hg2BB47bZuhcWO%2Fl%2B98f7f33HKI%2FlPBTn4%2FHBx8j1%2FFYa47ruuj4CTQ9Cu6CghXWYED0XQDKj03tSiLJi%2Bqw1xv4V5%2BFiNrxT6%2FQpGW67RBML0WvcfDijjqAnQrEu0pDtRW8QC9cAFoI8SBCGBomygfWwQn2kY6TwFFn9RBsmOcQvFRA755kpvnEnraOJV2LmwiCTWhCTKgPUR%2B9lNrCIRX7QRa4h%2Bfy3eF4WWo8PpFm%2FTRh0%2BmbZHdkUg7BrWT3Tt87fIpPud452EnrukkSdPgQtMfbIFI1GfPJWr7r%2Bvrk8%2FVAsoziAZA3WXUDDr0YS%2BBjqkAWWl4NNYJ7e%2FhMOFYjfBP%2F9l9al6ifs7eq62u4c3csLiE10fRFUxRH88v5%2BXjm%2BdW7RObc36HzoKAR%2FiTuisJTVdNm7sWt%2B%2FaTW3W4UUjgh0pApk%2BF8a2EVi1jI1gBjHOticw2XEFoU%2BeRG5PgwKDj6fTLYlDpcN937VF2DrUFgnnL1MRSgbeiPoGx%2FFAyghVLFXJ2nsQx5NiYqMovxGjI7rpKVV&X-Amz-Signature=2ea9f642560a9bbdb8b588dc53e993c5c45696960cc1bc0673033e1d4de78dcf&X-Amz-SignedHeaders=host&x-id=GetObject)
