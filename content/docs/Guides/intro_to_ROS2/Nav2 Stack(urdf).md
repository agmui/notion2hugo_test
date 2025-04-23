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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764XU6L3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDesnW25H1SMILKD1f5c%2F4%2BJhu0RiZu5HH%2BMVRlTxCnnAiBM8h9qxIZBAwu5E9VFbLGNBCDoMcaXrpQLJj8OW6qr3yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhJ5L9x4EyPbNrOoKtwDatllgWyKX7C8S9QIcQestNv8KsVSGPDz7SvUSrxp5rcHaFl60LkIp7yOArGRzbPAHVGMR0NPSKNRuDjFT8Dof%2FSMnYeqM64M3V4vtS%2FLalC7fGeO%2FgCbZkopzIh4g92cBZRRDwwKcBcTYxkHBNLx5kcuyMIJo5Sgt2%2FP%2Bdg8R6Js1oNewZQzir5nUnM%2BejT1hIvQFteLasD7CzM1uXIFBdsf9%2B9Dz22dD%2FBBHsUV%2B%2Ft6bJatPffGTN33ydDtP4UsyrLbu4sdscgDCSINOLSc8Awk5TeBRvG0G6zW5zQiRO%2Fb3%2FSV9ZvrdxuIw8JrXCRMOkT30REQxWyvLTOBG4qaHNFlbDvEXMINjmrzfmXsIDFdvxz0SogCB4Bmpx%2FquezUkdLBeDkZeCmAR6mFvAFZBzCDDR9GgblyhFnd2xkVLtxvPFKrMfaT6AXl1saRerP0JGX45%2BbytHp9ladVQOzwt5OTtNIDrq9b7WnugZ5n9NwXm7olji8Jp%2B5aXyD3IJ64znQG8sW5W%2B3pKgGmqKpmJZFKTQTcwL0O4JinlBVGYLASrxE%2B0SpYcNuskfZMFW1ULZt0Ow1hdVWDwZYn1PB3C2TTcfdTApSPK9ktEEpHcecstdn%2FD6%2FdHNR3FKcw6YOjwAY6pgGw09GCigj0L3oaMjVRFNTby5qhKEeqZpncBlpICVQc3%2FZ5CzmXvyHpazj9eSCLTKkXR3YNAOt2y%2BCTBMcp0o20%2FxAeEtICIt37TVtXBeOIguuF8cGpv%2BdFda2Bg96QDSkTMKI3Qa7rEyGcEGRVIAHBESlK3j3E%2FsZSr1zsJhIYTGdfjcG293ApKRPs1CDQiIwqzYte9eYesdpk4EGEwLQ8Q4qVUCy6&X-Amz-Signature=0018af10591dcacfb9a73db0cff809ba860a5945a7acf7413e065b20e26c8f83&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764XU6L3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDesnW25H1SMILKD1f5c%2F4%2BJhu0RiZu5HH%2BMVRlTxCnnAiBM8h9qxIZBAwu5E9VFbLGNBCDoMcaXrpQLJj8OW6qr3yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhJ5L9x4EyPbNrOoKtwDatllgWyKX7C8S9QIcQestNv8KsVSGPDz7SvUSrxp5rcHaFl60LkIp7yOArGRzbPAHVGMR0NPSKNRuDjFT8Dof%2FSMnYeqM64M3V4vtS%2FLalC7fGeO%2FgCbZkopzIh4g92cBZRRDwwKcBcTYxkHBNLx5kcuyMIJo5Sgt2%2FP%2Bdg8R6Js1oNewZQzir5nUnM%2BejT1hIvQFteLasD7CzM1uXIFBdsf9%2B9Dz22dD%2FBBHsUV%2B%2Ft6bJatPffGTN33ydDtP4UsyrLbu4sdscgDCSINOLSc8Awk5TeBRvG0G6zW5zQiRO%2Fb3%2FSV9ZvrdxuIw8JrXCRMOkT30REQxWyvLTOBG4qaHNFlbDvEXMINjmrzfmXsIDFdvxz0SogCB4Bmpx%2FquezUkdLBeDkZeCmAR6mFvAFZBzCDDR9GgblyhFnd2xkVLtxvPFKrMfaT6AXl1saRerP0JGX45%2BbytHp9ladVQOzwt5OTtNIDrq9b7WnugZ5n9NwXm7olji8Jp%2B5aXyD3IJ64znQG8sW5W%2B3pKgGmqKpmJZFKTQTcwL0O4JinlBVGYLASrxE%2B0SpYcNuskfZMFW1ULZt0Ow1hdVWDwZYn1PB3C2TTcfdTApSPK9ktEEpHcecstdn%2FD6%2FdHNR3FKcw6YOjwAY6pgGw09GCigj0L3oaMjVRFNTby5qhKEeqZpncBlpICVQc3%2FZ5CzmXvyHpazj9eSCLTKkXR3YNAOt2y%2BCTBMcp0o20%2FxAeEtICIt37TVtXBeOIguuF8cGpv%2BdFda2Bg96QDSkTMKI3Qa7rEyGcEGRVIAHBESlK3j3E%2FsZSr1zsJhIYTGdfjcG293ApKRPs1CDQiIwqzYte9eYesdpk4EGEwLQ8Q4qVUCy6&X-Amz-Signature=26d5baa15bbc8023d91a33e9165ffc4f81d6f9972a212c2399455507cc656867&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764XU6L3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDesnW25H1SMILKD1f5c%2F4%2BJhu0RiZu5HH%2BMVRlTxCnnAiBM8h9qxIZBAwu5E9VFbLGNBCDoMcaXrpQLJj8OW6qr3yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhJ5L9x4EyPbNrOoKtwDatllgWyKX7C8S9QIcQestNv8KsVSGPDz7SvUSrxp5rcHaFl60LkIp7yOArGRzbPAHVGMR0NPSKNRuDjFT8Dof%2FSMnYeqM64M3V4vtS%2FLalC7fGeO%2FgCbZkopzIh4g92cBZRRDwwKcBcTYxkHBNLx5kcuyMIJo5Sgt2%2FP%2Bdg8R6Js1oNewZQzir5nUnM%2BejT1hIvQFteLasD7CzM1uXIFBdsf9%2B9Dz22dD%2FBBHsUV%2B%2Ft6bJatPffGTN33ydDtP4UsyrLbu4sdscgDCSINOLSc8Awk5TeBRvG0G6zW5zQiRO%2Fb3%2FSV9ZvrdxuIw8JrXCRMOkT30REQxWyvLTOBG4qaHNFlbDvEXMINjmrzfmXsIDFdvxz0SogCB4Bmpx%2FquezUkdLBeDkZeCmAR6mFvAFZBzCDDR9GgblyhFnd2xkVLtxvPFKrMfaT6AXl1saRerP0JGX45%2BbytHp9ladVQOzwt5OTtNIDrq9b7WnugZ5n9NwXm7olji8Jp%2B5aXyD3IJ64znQG8sW5W%2B3pKgGmqKpmJZFKTQTcwL0O4JinlBVGYLASrxE%2B0SpYcNuskfZMFW1ULZt0Ow1hdVWDwZYn1PB3C2TTcfdTApSPK9ktEEpHcecstdn%2FD6%2FdHNR3FKcw6YOjwAY6pgGw09GCigj0L3oaMjVRFNTby5qhKEeqZpncBlpICVQc3%2FZ5CzmXvyHpazj9eSCLTKkXR3YNAOt2y%2BCTBMcp0o20%2FxAeEtICIt37TVtXBeOIguuF8cGpv%2BdFda2Bg96QDSkTMKI3Qa7rEyGcEGRVIAHBESlK3j3E%2FsZSr1zsJhIYTGdfjcG293ApKRPs1CDQiIwqzYte9eYesdpk4EGEwLQ8Q4qVUCy6&X-Amz-Signature=f3c7522dccf9c3bb250a73cf2d36761201e3fd48364ce01c5f4672ea2787cff1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764XU6L3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDesnW25H1SMILKD1f5c%2F4%2BJhu0RiZu5HH%2BMVRlTxCnnAiBM8h9qxIZBAwu5E9VFbLGNBCDoMcaXrpQLJj8OW6qr3yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhJ5L9x4EyPbNrOoKtwDatllgWyKX7C8S9QIcQestNv8KsVSGPDz7SvUSrxp5rcHaFl60LkIp7yOArGRzbPAHVGMR0NPSKNRuDjFT8Dof%2FSMnYeqM64M3V4vtS%2FLalC7fGeO%2FgCbZkopzIh4g92cBZRRDwwKcBcTYxkHBNLx5kcuyMIJo5Sgt2%2FP%2Bdg8R6Js1oNewZQzir5nUnM%2BejT1hIvQFteLasD7CzM1uXIFBdsf9%2B9Dz22dD%2FBBHsUV%2B%2Ft6bJatPffGTN33ydDtP4UsyrLbu4sdscgDCSINOLSc8Awk5TeBRvG0G6zW5zQiRO%2Fb3%2FSV9ZvrdxuIw8JrXCRMOkT30REQxWyvLTOBG4qaHNFlbDvEXMINjmrzfmXsIDFdvxz0SogCB4Bmpx%2FquezUkdLBeDkZeCmAR6mFvAFZBzCDDR9GgblyhFnd2xkVLtxvPFKrMfaT6AXl1saRerP0JGX45%2BbytHp9ladVQOzwt5OTtNIDrq9b7WnugZ5n9NwXm7olji8Jp%2B5aXyD3IJ64znQG8sW5W%2B3pKgGmqKpmJZFKTQTcwL0O4JinlBVGYLASrxE%2B0SpYcNuskfZMFW1ULZt0Ow1hdVWDwZYn1PB3C2TTcfdTApSPK9ktEEpHcecstdn%2FD6%2FdHNR3FKcw6YOjwAY6pgGw09GCigj0L3oaMjVRFNTby5qhKEeqZpncBlpICVQc3%2FZ5CzmXvyHpazj9eSCLTKkXR3YNAOt2y%2BCTBMcp0o20%2FxAeEtICIt37TVtXBeOIguuF8cGpv%2BdFda2Bg96QDSkTMKI3Qa7rEyGcEGRVIAHBESlK3j3E%2FsZSr1zsJhIYTGdfjcG293ApKRPs1CDQiIwqzYte9eYesdpk4EGEwLQ8Q4qVUCy6&X-Amz-Signature=28e720f16847750e665bc06ed6f2cf402df87ab855424ce681cfdea35069a381&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764XU6L3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDesnW25H1SMILKD1f5c%2F4%2BJhu0RiZu5HH%2BMVRlTxCnnAiBM8h9qxIZBAwu5E9VFbLGNBCDoMcaXrpQLJj8OW6qr3yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhJ5L9x4EyPbNrOoKtwDatllgWyKX7C8S9QIcQestNv8KsVSGPDz7SvUSrxp5rcHaFl60LkIp7yOArGRzbPAHVGMR0NPSKNRuDjFT8Dof%2FSMnYeqM64M3V4vtS%2FLalC7fGeO%2FgCbZkopzIh4g92cBZRRDwwKcBcTYxkHBNLx5kcuyMIJo5Sgt2%2FP%2Bdg8R6Js1oNewZQzir5nUnM%2BejT1hIvQFteLasD7CzM1uXIFBdsf9%2B9Dz22dD%2FBBHsUV%2B%2Ft6bJatPffGTN33ydDtP4UsyrLbu4sdscgDCSINOLSc8Awk5TeBRvG0G6zW5zQiRO%2Fb3%2FSV9ZvrdxuIw8JrXCRMOkT30REQxWyvLTOBG4qaHNFlbDvEXMINjmrzfmXsIDFdvxz0SogCB4Bmpx%2FquezUkdLBeDkZeCmAR6mFvAFZBzCDDR9GgblyhFnd2xkVLtxvPFKrMfaT6AXl1saRerP0JGX45%2BbytHp9ladVQOzwt5OTtNIDrq9b7WnugZ5n9NwXm7olji8Jp%2B5aXyD3IJ64znQG8sW5W%2B3pKgGmqKpmJZFKTQTcwL0O4JinlBVGYLASrxE%2B0SpYcNuskfZMFW1ULZt0Ow1hdVWDwZYn1PB3C2TTcfdTApSPK9ktEEpHcecstdn%2FD6%2FdHNR3FKcw6YOjwAY6pgGw09GCigj0L3oaMjVRFNTby5qhKEeqZpncBlpICVQc3%2FZ5CzmXvyHpazj9eSCLTKkXR3YNAOt2y%2BCTBMcp0o20%2FxAeEtICIt37TVtXBeOIguuF8cGpv%2BdFda2Bg96QDSkTMKI3Qa7rEyGcEGRVIAHBESlK3j3E%2FsZSr1zsJhIYTGdfjcG293ApKRPs1CDQiIwqzYte9eYesdpk4EGEwLQ8Q4qVUCy6&X-Amz-Signature=3e9b213a72b4eed22caeaccc402595d6b42a766236d7f7a53539f5a4d4c88ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466764XU6L3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDesnW25H1SMILKD1f5c%2F4%2BJhu0RiZu5HH%2BMVRlTxCnnAiBM8h9qxIZBAwu5E9VFbLGNBCDoMcaXrpQLJj8OW6qr3yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhJ5L9x4EyPbNrOoKtwDatllgWyKX7C8S9QIcQestNv8KsVSGPDz7SvUSrxp5rcHaFl60LkIp7yOArGRzbPAHVGMR0NPSKNRuDjFT8Dof%2FSMnYeqM64M3V4vtS%2FLalC7fGeO%2FgCbZkopzIh4g92cBZRRDwwKcBcTYxkHBNLx5kcuyMIJo5Sgt2%2FP%2Bdg8R6Js1oNewZQzir5nUnM%2BejT1hIvQFteLasD7CzM1uXIFBdsf9%2B9Dz22dD%2FBBHsUV%2B%2Ft6bJatPffGTN33ydDtP4UsyrLbu4sdscgDCSINOLSc8Awk5TeBRvG0G6zW5zQiRO%2Fb3%2FSV9ZvrdxuIw8JrXCRMOkT30REQxWyvLTOBG4qaHNFlbDvEXMINjmrzfmXsIDFdvxz0SogCB4Bmpx%2FquezUkdLBeDkZeCmAR6mFvAFZBzCDDR9GgblyhFnd2xkVLtxvPFKrMfaT6AXl1saRerP0JGX45%2BbytHp9ladVQOzwt5OTtNIDrq9b7WnugZ5n9NwXm7olji8Jp%2B5aXyD3IJ64znQG8sW5W%2B3pKgGmqKpmJZFKTQTcwL0O4JinlBVGYLASrxE%2B0SpYcNuskfZMFW1ULZt0Ow1hdVWDwZYn1PB3C2TTcfdTApSPK9ktEEpHcecstdn%2FD6%2FdHNR3FKcw6YOjwAY6pgGw09GCigj0L3oaMjVRFNTby5qhKEeqZpncBlpICVQc3%2FZ5CzmXvyHpazj9eSCLTKkXR3YNAOt2y%2BCTBMcp0o20%2FxAeEtICIt37TVtXBeOIguuF8cGpv%2BdFda2Bg96QDSkTMKI3Qa7rEyGcEGRVIAHBESlK3j3E%2FsZSr1zsJhIYTGdfjcG293ApKRPs1CDQiIwqzYte9eYesdpk4EGEwLQ8Q4qVUCy6&X-Amz-Signature=737e94948ac9839fbbfb548b4056ffde399d2d60de4f9332da9537afae537acf&X-Amz-SignedHeaders=host&x-id=GetObject)
