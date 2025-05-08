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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTPNDUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2F%2FZ1EFR39R7Gd1I8zeB7%2F8Z3AnW4NBcljCCbnNW85AIhANfDZQG4xXr3bAQiNVQUIBXp9ihZg3PhWQ2fe%2BYow10GKv8DCG8QABoMNjM3NDIzMTgzODA1Igz1imHxwLrm7iws3BUq3AMShjGuFOxskRkecOrcicycac5mYsH%2FCxM6OivVMlqufowglFKP9Em7LmgMNllA3qY%2BkZu1rX0GUOluMcWXJaoI0CFlGiA%2BHevp2rYjYmUslWdL%2Bim2QT%2FhT89eLI2z%2B2cmMNat07sA8D3ZsUP95Yy3XL%2BQKLIkrt39p3MZixhSIqEbYpRFgf2BWavimb%2B6DB9PnB1m%2FlrM6oX5bZwJsEbUrBUaxSI6%2BDm8mShohMV12c04hU4Ywovh3WAkec0PBf%2BHOUzVj7XT9xtzQH4pKICV0yQZv4fT1zoNvSfp6%2BCR6QXOKgysazO%2Fn9K75kKLZEvGv%2BkGXBihJWzlVcDwmipoQfJv8qUWqXvk7mrIUCrs64gMhqEo%2FgvZFy0dG23pzCQOSWbIwOu%2FZ6KD%2FNs8uG%2Bbsfd%2FLRqjHRDSPqSxYM4t7JX4Zha1GEXLPyTl8BcI58oJRdS%2FCMw%2Flr%2BiZOj8V5es%2BjUquBnrpmeLAIS7DSsllSfD1u0yyYQXh4ZlnJPc3gwxNgwgrlRwng0gfzDhD1CcjWS8SY2mEp3P1W4YmELyrM9tIoAwSaKr86ao87VwBV4qZqYXx7Ug8u0RcNmNtYjc3jPdJ1ZMDEiTMKavITIhHRKy3KlbihqKiCH9JDDjlPHABjqkAR51SN6ERgMGWUJuiGud8wiqz7vpMmk8dzEqZ3ZIZB5m4m3VWo7quN%2F0IA2fxRzLT%2Bt2vvEAMnJyuEJD2zAgKMlpYl%2FfDY%2F1Zy1uqy8L2%2FV5zrL2RRbWeNvB8A%2FB3TTJovQqEMJX0xw9tuFeZRcz8qhnhquZzdUz9KjNZMVvdKZVYu3Nu2UtwiSK8I1m2ykbfstHBqmB%2BDorbtyDKpM6r2K4Vgb1&X-Amz-Signature=1ec36f04a7457b82d7ef448a9940476873e4e6530a3c98555e0032f578796a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTPNDUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2F%2FZ1EFR39R7Gd1I8zeB7%2F8Z3AnW4NBcljCCbnNW85AIhANfDZQG4xXr3bAQiNVQUIBXp9ihZg3PhWQ2fe%2BYow10GKv8DCG8QABoMNjM3NDIzMTgzODA1Igz1imHxwLrm7iws3BUq3AMShjGuFOxskRkecOrcicycac5mYsH%2FCxM6OivVMlqufowglFKP9Em7LmgMNllA3qY%2BkZu1rX0GUOluMcWXJaoI0CFlGiA%2BHevp2rYjYmUslWdL%2Bim2QT%2FhT89eLI2z%2B2cmMNat07sA8D3ZsUP95Yy3XL%2BQKLIkrt39p3MZixhSIqEbYpRFgf2BWavimb%2B6DB9PnB1m%2FlrM6oX5bZwJsEbUrBUaxSI6%2BDm8mShohMV12c04hU4Ywovh3WAkec0PBf%2BHOUzVj7XT9xtzQH4pKICV0yQZv4fT1zoNvSfp6%2BCR6QXOKgysazO%2Fn9K75kKLZEvGv%2BkGXBihJWzlVcDwmipoQfJv8qUWqXvk7mrIUCrs64gMhqEo%2FgvZFy0dG23pzCQOSWbIwOu%2FZ6KD%2FNs8uG%2Bbsfd%2FLRqjHRDSPqSxYM4t7JX4Zha1GEXLPyTl8BcI58oJRdS%2FCMw%2Flr%2BiZOj8V5es%2BjUquBnrpmeLAIS7DSsllSfD1u0yyYQXh4ZlnJPc3gwxNgwgrlRwng0gfzDhD1CcjWS8SY2mEp3P1W4YmELyrM9tIoAwSaKr86ao87VwBV4qZqYXx7Ug8u0RcNmNtYjc3jPdJ1ZMDEiTMKavITIhHRKy3KlbihqKiCH9JDDjlPHABjqkAR51SN6ERgMGWUJuiGud8wiqz7vpMmk8dzEqZ3ZIZB5m4m3VWo7quN%2F0IA2fxRzLT%2Bt2vvEAMnJyuEJD2zAgKMlpYl%2FfDY%2F1Zy1uqy8L2%2FV5zrL2RRbWeNvB8A%2FB3TTJovQqEMJX0xw9tuFeZRcz8qhnhquZzdUz9KjNZMVvdKZVYu3Nu2UtwiSK8I1m2ykbfstHBqmB%2BDorbtyDKpM6r2K4Vgb1&X-Amz-Signature=ecfb67deee6b750b0c4a1b67d2c3b1b7ad2e4aa4a5a7eeb35d15c67d069a88da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTPNDUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2F%2FZ1EFR39R7Gd1I8zeB7%2F8Z3AnW4NBcljCCbnNW85AIhANfDZQG4xXr3bAQiNVQUIBXp9ihZg3PhWQ2fe%2BYow10GKv8DCG8QABoMNjM3NDIzMTgzODA1Igz1imHxwLrm7iws3BUq3AMShjGuFOxskRkecOrcicycac5mYsH%2FCxM6OivVMlqufowglFKP9Em7LmgMNllA3qY%2BkZu1rX0GUOluMcWXJaoI0CFlGiA%2BHevp2rYjYmUslWdL%2Bim2QT%2FhT89eLI2z%2B2cmMNat07sA8D3ZsUP95Yy3XL%2BQKLIkrt39p3MZixhSIqEbYpRFgf2BWavimb%2B6DB9PnB1m%2FlrM6oX5bZwJsEbUrBUaxSI6%2BDm8mShohMV12c04hU4Ywovh3WAkec0PBf%2BHOUzVj7XT9xtzQH4pKICV0yQZv4fT1zoNvSfp6%2BCR6QXOKgysazO%2Fn9K75kKLZEvGv%2BkGXBihJWzlVcDwmipoQfJv8qUWqXvk7mrIUCrs64gMhqEo%2FgvZFy0dG23pzCQOSWbIwOu%2FZ6KD%2FNs8uG%2Bbsfd%2FLRqjHRDSPqSxYM4t7JX4Zha1GEXLPyTl8BcI58oJRdS%2FCMw%2Flr%2BiZOj8V5es%2BjUquBnrpmeLAIS7DSsllSfD1u0yyYQXh4ZlnJPc3gwxNgwgrlRwng0gfzDhD1CcjWS8SY2mEp3P1W4YmELyrM9tIoAwSaKr86ao87VwBV4qZqYXx7Ug8u0RcNmNtYjc3jPdJ1ZMDEiTMKavITIhHRKy3KlbihqKiCH9JDDjlPHABjqkAR51SN6ERgMGWUJuiGud8wiqz7vpMmk8dzEqZ3ZIZB5m4m3VWo7quN%2F0IA2fxRzLT%2Bt2vvEAMnJyuEJD2zAgKMlpYl%2FfDY%2F1Zy1uqy8L2%2FV5zrL2RRbWeNvB8A%2FB3TTJovQqEMJX0xw9tuFeZRcz8qhnhquZzdUz9KjNZMVvdKZVYu3Nu2UtwiSK8I1m2ykbfstHBqmB%2BDorbtyDKpM6r2K4Vgb1&X-Amz-Signature=3f4aba1cb5b9175d26aa9c0cd77324d943f763e048e2257d2255ff4c6378e843&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTPNDUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2F%2FZ1EFR39R7Gd1I8zeB7%2F8Z3AnW4NBcljCCbnNW85AIhANfDZQG4xXr3bAQiNVQUIBXp9ihZg3PhWQ2fe%2BYow10GKv8DCG8QABoMNjM3NDIzMTgzODA1Igz1imHxwLrm7iws3BUq3AMShjGuFOxskRkecOrcicycac5mYsH%2FCxM6OivVMlqufowglFKP9Em7LmgMNllA3qY%2BkZu1rX0GUOluMcWXJaoI0CFlGiA%2BHevp2rYjYmUslWdL%2Bim2QT%2FhT89eLI2z%2B2cmMNat07sA8D3ZsUP95Yy3XL%2BQKLIkrt39p3MZixhSIqEbYpRFgf2BWavimb%2B6DB9PnB1m%2FlrM6oX5bZwJsEbUrBUaxSI6%2BDm8mShohMV12c04hU4Ywovh3WAkec0PBf%2BHOUzVj7XT9xtzQH4pKICV0yQZv4fT1zoNvSfp6%2BCR6QXOKgysazO%2Fn9K75kKLZEvGv%2BkGXBihJWzlVcDwmipoQfJv8qUWqXvk7mrIUCrs64gMhqEo%2FgvZFy0dG23pzCQOSWbIwOu%2FZ6KD%2FNs8uG%2Bbsfd%2FLRqjHRDSPqSxYM4t7JX4Zha1GEXLPyTl8BcI58oJRdS%2FCMw%2Flr%2BiZOj8V5es%2BjUquBnrpmeLAIS7DSsllSfD1u0yyYQXh4ZlnJPc3gwxNgwgrlRwng0gfzDhD1CcjWS8SY2mEp3P1W4YmELyrM9tIoAwSaKr86ao87VwBV4qZqYXx7Ug8u0RcNmNtYjc3jPdJ1ZMDEiTMKavITIhHRKy3KlbihqKiCH9JDDjlPHABjqkAR51SN6ERgMGWUJuiGud8wiqz7vpMmk8dzEqZ3ZIZB5m4m3VWo7quN%2F0IA2fxRzLT%2Bt2vvEAMnJyuEJD2zAgKMlpYl%2FfDY%2F1Zy1uqy8L2%2FV5zrL2RRbWeNvB8A%2FB3TTJovQqEMJX0xw9tuFeZRcz8qhnhquZzdUz9KjNZMVvdKZVYu3Nu2UtwiSK8I1m2ykbfstHBqmB%2BDorbtyDKpM6r2K4Vgb1&X-Amz-Signature=ac7d74df956fa0f6948cc4c7f842ef432a8d3077c1aed4a3e12741bb2ca69523&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTPNDUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2F%2FZ1EFR39R7Gd1I8zeB7%2F8Z3AnW4NBcljCCbnNW85AIhANfDZQG4xXr3bAQiNVQUIBXp9ihZg3PhWQ2fe%2BYow10GKv8DCG8QABoMNjM3NDIzMTgzODA1Igz1imHxwLrm7iws3BUq3AMShjGuFOxskRkecOrcicycac5mYsH%2FCxM6OivVMlqufowglFKP9Em7LmgMNllA3qY%2BkZu1rX0GUOluMcWXJaoI0CFlGiA%2BHevp2rYjYmUslWdL%2Bim2QT%2FhT89eLI2z%2B2cmMNat07sA8D3ZsUP95Yy3XL%2BQKLIkrt39p3MZixhSIqEbYpRFgf2BWavimb%2B6DB9PnB1m%2FlrM6oX5bZwJsEbUrBUaxSI6%2BDm8mShohMV12c04hU4Ywovh3WAkec0PBf%2BHOUzVj7XT9xtzQH4pKICV0yQZv4fT1zoNvSfp6%2BCR6QXOKgysazO%2Fn9K75kKLZEvGv%2BkGXBihJWzlVcDwmipoQfJv8qUWqXvk7mrIUCrs64gMhqEo%2FgvZFy0dG23pzCQOSWbIwOu%2FZ6KD%2FNs8uG%2Bbsfd%2FLRqjHRDSPqSxYM4t7JX4Zha1GEXLPyTl8BcI58oJRdS%2FCMw%2Flr%2BiZOj8V5es%2BjUquBnrpmeLAIS7DSsllSfD1u0yyYQXh4ZlnJPc3gwxNgwgrlRwng0gfzDhD1CcjWS8SY2mEp3P1W4YmELyrM9tIoAwSaKr86ao87VwBV4qZqYXx7Ug8u0RcNmNtYjc3jPdJ1ZMDEiTMKavITIhHRKy3KlbihqKiCH9JDDjlPHABjqkAR51SN6ERgMGWUJuiGud8wiqz7vpMmk8dzEqZ3ZIZB5m4m3VWo7quN%2F0IA2fxRzLT%2Bt2vvEAMnJyuEJD2zAgKMlpYl%2FfDY%2F1Zy1uqy8L2%2FV5zrL2RRbWeNvB8A%2FB3TTJovQqEMJX0xw9tuFeZRcz8qhnhquZzdUz9KjNZMVvdKZVYu3Nu2UtwiSK8I1m2ykbfstHBqmB%2BDorbtyDKpM6r2K4Vgb1&X-Amz-Signature=56939f06ce2ab8d7e5f43498228f4d386dc0b6d208da7498e1f76111f2d0010e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTPNDUH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2F%2FZ1EFR39R7Gd1I8zeB7%2F8Z3AnW4NBcljCCbnNW85AIhANfDZQG4xXr3bAQiNVQUIBXp9ihZg3PhWQ2fe%2BYow10GKv8DCG8QABoMNjM3NDIzMTgzODA1Igz1imHxwLrm7iws3BUq3AMShjGuFOxskRkecOrcicycac5mYsH%2FCxM6OivVMlqufowglFKP9Em7LmgMNllA3qY%2BkZu1rX0GUOluMcWXJaoI0CFlGiA%2BHevp2rYjYmUslWdL%2Bim2QT%2FhT89eLI2z%2B2cmMNat07sA8D3ZsUP95Yy3XL%2BQKLIkrt39p3MZixhSIqEbYpRFgf2BWavimb%2B6DB9PnB1m%2FlrM6oX5bZwJsEbUrBUaxSI6%2BDm8mShohMV12c04hU4Ywovh3WAkec0PBf%2BHOUzVj7XT9xtzQH4pKICV0yQZv4fT1zoNvSfp6%2BCR6QXOKgysazO%2Fn9K75kKLZEvGv%2BkGXBihJWzlVcDwmipoQfJv8qUWqXvk7mrIUCrs64gMhqEo%2FgvZFy0dG23pzCQOSWbIwOu%2FZ6KD%2FNs8uG%2Bbsfd%2FLRqjHRDSPqSxYM4t7JX4Zha1GEXLPyTl8BcI58oJRdS%2FCMw%2Flr%2BiZOj8V5es%2BjUquBnrpmeLAIS7DSsllSfD1u0yyYQXh4ZlnJPc3gwxNgwgrlRwng0gfzDhD1CcjWS8SY2mEp3P1W4YmELyrM9tIoAwSaKr86ao87VwBV4qZqYXx7Ug8u0RcNmNtYjc3jPdJ1ZMDEiTMKavITIhHRKy3KlbihqKiCH9JDDjlPHABjqkAR51SN6ERgMGWUJuiGud8wiqz7vpMmk8dzEqZ3ZIZB5m4m3VWo7quN%2F0IA2fxRzLT%2Bt2vvEAMnJyuEJD2zAgKMlpYl%2FfDY%2F1Zy1uqy8L2%2FV5zrL2RRbWeNvB8A%2FB3TTJovQqEMJX0xw9tuFeZRcz8qhnhquZzdUz9KjNZMVvdKZVYu3Nu2UtwiSK8I1m2ykbfstHBqmB%2BDorbtyDKpM6r2K4Vgb1&X-Amz-Signature=35489465506ab29e049c3b73384549bfc6e63981d92950f893ac933b39225739&X-Amz-SignedHeaders=host&x-id=GetObject)
