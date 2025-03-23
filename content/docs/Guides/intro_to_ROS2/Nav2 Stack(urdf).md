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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=4c563f7c3f55060d582e75c92ada65331d99da3de6dc97473210a93640e3de59&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=6851b56036e20bc592489749c678a95855b514d9be15f4b512e56ebd1e3a5307&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=23d5049df2cddfecad4e7d00358ce5f149fa0a69a17a8e74fb4278699e771e39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=0cb16bc55e42dcbfa2dc4ce184a90ccc6d7b9b8ee009360f50d3ac3c1287cbda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=c980c1380758fef372b6ec3b55880383c7ffba7f35a34026d765413a3d780eda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSUMRVC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAj3tYcqjYTnq5s9nCAD14QQWIn6nQRJvuFlArJRgfg7AiAKNpMz4BgQ1dzMgzMpomTmKXTfEgbtO3vLSJO9WKXegiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVUHHNGCj%2BpYlnqAKtwDfu09iZ9ykBTS8InibIPuoSdQtWV6AiI%2FXeZkk%2B9SwjeuHoWYaAoorT5GaF5Jwgo%2BcSX30SH4370laDe6MLHiYaQIMjpIgQ%2F60D%2Fmi6AtY5UUSW9eS3w%2FHVwCM%2F7ShjB5YoDZIuJfvMKCA%2F%2BdfrhWcbiVKF%2FmYCGN3vWA8AOu%2F80axZAfj6Pxmk3VrBv8x9Zm5lOIusgzoFjqQuL9Ct9Hno9FQJIS%2BAW1JBv%2BUFw3BfEBmjG4VXFniPrZohrN4vyyfMXeKJGimWHUDL7DmCdb7cwkKIKV0dtkp0w9kx%2F%2Ftz3vCYV6DyuXSXd1WMMFQPFgAlnmSSjtUZ3z%2FBUOfKQxza%2BsnQ9uwcw9sybng%2B6QDWCPloeBdmrDimg0apk331BLCK%2FqQmdJmOjWouplow%2FmMgm9U3AP5fGHus3zfHULKylY8my853IlkZPMtbyjV8%2FS5VEFlV2NTpkZadEp41ti7MZQnG32LHl9S1qshJFblBVik11qFTSRoQI0kEXnWn4T83Bw6ArUrfCP6pA44z%2Bjj0th7URDQ0uhvo0wZofTXFthFf%2BCPGNlCXiYS7%2BI%2F2IsZSU7CMUOgYrumblezzZgPb1tq2wExkW6udyDa0rR7xuT4uRDtLp2bduu7%2BYwxMz%2FvgY6pgEUI5U26thiwf2VDrJ0UgzAR%2BvvZA%2Baxwn9o3%2BG8jNTgtTK%2FysYvz%2FyhIIYBFjX%2F%2BwF7SqUZJUKQcIgr1yoPhVMK7nz18Zc7WV2fYnXFcMtAj2LKXglwFBDJi0vzjqFe3IgrGqd37COg3GvLGWIOFbQriyqepjmQ4vgIvHpMOzyXl7f%2BT%2FP0eGr3bB5mDF9YORjI4pkfaFfIbtu8b0%2B3KzQF1axOppd&X-Amz-Signature=5dedd9f406f3b3663b81c73417254285d6859c952c61beba5d9a5bd16dceb754&X-Amz-SignedHeaders=host&x-id=GetObject)
