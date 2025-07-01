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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3UGNIL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFss0gOCRKTjS3N0Nq8Qho%2BZ%2F45hqj2MG%2BdlsytZ8JgAiBnzsukgOwFWCSM4jIVoew0ATEHZmeLo89%2F7nnKvtmrhyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm1TxeX90UNaTN6EKtwDtvnbEtgorSdvi6CgbFHyNPuQyo6TyijkBmtVr7zIpUDIsX%2BXla7MOdapYtEdbL0sVKM3OPiKhAAcm07YxVuiQLT%2Bu%2FD2RDzvA9RrnEZ2EKEJ7OlkrXuSBzVD5mVgDeoRwBKXXE4tLOBs%2BtzfI%2F5bcsujv%2BJ%2BLioLwMeqMWDIwXerMMTlTXBPit9h1o9AHnRZz4NRW%2FYdYQqvaB4zeNo3z0yDEECH9u%2B3UN%2BEF1ebVIS4QlTN9Ar3vxNQ0w6ubMFwPjO2RkbxU751dTiCclxqs52zuHDGKoc1uGMjXwgFeeIczwXGEXQ%2F07UD40hQ0RsmEb5HWXB6Y5Ry4ypoGZtdFuRvmdwZ7NygFtfyKYzPaQqqqoQKAGO%2B%2FxwbFoOEB223HuFo6rSLU45Yr1wEEVOeamP2JDep9tMlyXxG3WRC8aJQYcsI32xPUIRPd61VnyFVIU80ApJcNCtOu%2F%2B1U0Xa8YlM%2Bvh0awUXyaqAeUfWllKqKX9rHO3kKVb4Hk5PmKk8sVADmJjUpvL%2BS2mnQmFNz1BTqVgcWWfVotaeo5JzeSmbgtyMPolXouIR2qjrtSmO8nPFqXBdA7Xi9mB7IJxpbCMSFiuoaxbsNTsTKBeBVOJDMaWRRm99fbcQfg8wqM%2BOwwY6pgFWYmNc0jP%2FTpra0iGhSihqiDBLKTiBdV9cxZBg29zH9AWlUe3xm4hZXYV1mKdovExU7Ihci7ewP1x2xFe77OdevtWzExGhhuQJBDZmR78TPbetMrMn3IAL3tyW65COrsUPHBO7DMpCknvHuxs2JoHQrnpgFX%2Bkq1cHn%2FiShJGrPGgOeJ%2BynFy88GuhLe3sH9vDaJU98QF4iMfdZx%2F1oIuw1ssiljWg&X-Amz-Signature=f07f77cccb3c9a82e865a53784b458b4a2513e58e36b65467f5cc9d2ae179f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3UGNIL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFss0gOCRKTjS3N0Nq8Qho%2BZ%2F45hqj2MG%2BdlsytZ8JgAiBnzsukgOwFWCSM4jIVoew0ATEHZmeLo89%2F7nnKvtmrhyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm1TxeX90UNaTN6EKtwDtvnbEtgorSdvi6CgbFHyNPuQyo6TyijkBmtVr7zIpUDIsX%2BXla7MOdapYtEdbL0sVKM3OPiKhAAcm07YxVuiQLT%2Bu%2FD2RDzvA9RrnEZ2EKEJ7OlkrXuSBzVD5mVgDeoRwBKXXE4tLOBs%2BtzfI%2F5bcsujv%2BJ%2BLioLwMeqMWDIwXerMMTlTXBPit9h1o9AHnRZz4NRW%2FYdYQqvaB4zeNo3z0yDEECH9u%2B3UN%2BEF1ebVIS4QlTN9Ar3vxNQ0w6ubMFwPjO2RkbxU751dTiCclxqs52zuHDGKoc1uGMjXwgFeeIczwXGEXQ%2F07UD40hQ0RsmEb5HWXB6Y5Ry4ypoGZtdFuRvmdwZ7NygFtfyKYzPaQqqqoQKAGO%2B%2FxwbFoOEB223HuFo6rSLU45Yr1wEEVOeamP2JDep9tMlyXxG3WRC8aJQYcsI32xPUIRPd61VnyFVIU80ApJcNCtOu%2F%2B1U0Xa8YlM%2Bvh0awUXyaqAeUfWllKqKX9rHO3kKVb4Hk5PmKk8sVADmJjUpvL%2BS2mnQmFNz1BTqVgcWWfVotaeo5JzeSmbgtyMPolXouIR2qjrtSmO8nPFqXBdA7Xi9mB7IJxpbCMSFiuoaxbsNTsTKBeBVOJDMaWRRm99fbcQfg8wqM%2BOwwY6pgFWYmNc0jP%2FTpra0iGhSihqiDBLKTiBdV9cxZBg29zH9AWlUe3xm4hZXYV1mKdovExU7Ihci7ewP1x2xFe77OdevtWzExGhhuQJBDZmR78TPbetMrMn3IAL3tyW65COrsUPHBO7DMpCknvHuxs2JoHQrnpgFX%2Bkq1cHn%2FiShJGrPGgOeJ%2BynFy88GuhLe3sH9vDaJU98QF4iMfdZx%2F1oIuw1ssiljWg&X-Amz-Signature=98de12debabbf1eec7571c76ea5040768e39d80e4c2dda0d56224566ba2b09c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3UGNIL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFss0gOCRKTjS3N0Nq8Qho%2BZ%2F45hqj2MG%2BdlsytZ8JgAiBnzsukgOwFWCSM4jIVoew0ATEHZmeLo89%2F7nnKvtmrhyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm1TxeX90UNaTN6EKtwDtvnbEtgorSdvi6CgbFHyNPuQyo6TyijkBmtVr7zIpUDIsX%2BXla7MOdapYtEdbL0sVKM3OPiKhAAcm07YxVuiQLT%2Bu%2FD2RDzvA9RrnEZ2EKEJ7OlkrXuSBzVD5mVgDeoRwBKXXE4tLOBs%2BtzfI%2F5bcsujv%2BJ%2BLioLwMeqMWDIwXerMMTlTXBPit9h1o9AHnRZz4NRW%2FYdYQqvaB4zeNo3z0yDEECH9u%2B3UN%2BEF1ebVIS4QlTN9Ar3vxNQ0w6ubMFwPjO2RkbxU751dTiCclxqs52zuHDGKoc1uGMjXwgFeeIczwXGEXQ%2F07UD40hQ0RsmEb5HWXB6Y5Ry4ypoGZtdFuRvmdwZ7NygFtfyKYzPaQqqqoQKAGO%2B%2FxwbFoOEB223HuFo6rSLU45Yr1wEEVOeamP2JDep9tMlyXxG3WRC8aJQYcsI32xPUIRPd61VnyFVIU80ApJcNCtOu%2F%2B1U0Xa8YlM%2Bvh0awUXyaqAeUfWllKqKX9rHO3kKVb4Hk5PmKk8sVADmJjUpvL%2BS2mnQmFNz1BTqVgcWWfVotaeo5JzeSmbgtyMPolXouIR2qjrtSmO8nPFqXBdA7Xi9mB7IJxpbCMSFiuoaxbsNTsTKBeBVOJDMaWRRm99fbcQfg8wqM%2BOwwY6pgFWYmNc0jP%2FTpra0iGhSihqiDBLKTiBdV9cxZBg29zH9AWlUe3xm4hZXYV1mKdovExU7Ihci7ewP1x2xFe77OdevtWzExGhhuQJBDZmR78TPbetMrMn3IAL3tyW65COrsUPHBO7DMpCknvHuxs2JoHQrnpgFX%2Bkq1cHn%2FiShJGrPGgOeJ%2BynFy88GuhLe3sH9vDaJU98QF4iMfdZx%2F1oIuw1ssiljWg&X-Amz-Signature=eeee704dd79d7bfe63f9921f616631cac0eb6c9cf14dd6e34b4e97249c5c5776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3UGNIL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFss0gOCRKTjS3N0Nq8Qho%2BZ%2F45hqj2MG%2BdlsytZ8JgAiBnzsukgOwFWCSM4jIVoew0ATEHZmeLo89%2F7nnKvtmrhyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm1TxeX90UNaTN6EKtwDtvnbEtgorSdvi6CgbFHyNPuQyo6TyijkBmtVr7zIpUDIsX%2BXla7MOdapYtEdbL0sVKM3OPiKhAAcm07YxVuiQLT%2Bu%2FD2RDzvA9RrnEZ2EKEJ7OlkrXuSBzVD5mVgDeoRwBKXXE4tLOBs%2BtzfI%2F5bcsujv%2BJ%2BLioLwMeqMWDIwXerMMTlTXBPit9h1o9AHnRZz4NRW%2FYdYQqvaB4zeNo3z0yDEECH9u%2B3UN%2BEF1ebVIS4QlTN9Ar3vxNQ0w6ubMFwPjO2RkbxU751dTiCclxqs52zuHDGKoc1uGMjXwgFeeIczwXGEXQ%2F07UD40hQ0RsmEb5HWXB6Y5Ry4ypoGZtdFuRvmdwZ7NygFtfyKYzPaQqqqoQKAGO%2B%2FxwbFoOEB223HuFo6rSLU45Yr1wEEVOeamP2JDep9tMlyXxG3WRC8aJQYcsI32xPUIRPd61VnyFVIU80ApJcNCtOu%2F%2B1U0Xa8YlM%2Bvh0awUXyaqAeUfWllKqKX9rHO3kKVb4Hk5PmKk8sVADmJjUpvL%2BS2mnQmFNz1BTqVgcWWfVotaeo5JzeSmbgtyMPolXouIR2qjrtSmO8nPFqXBdA7Xi9mB7IJxpbCMSFiuoaxbsNTsTKBeBVOJDMaWRRm99fbcQfg8wqM%2BOwwY6pgFWYmNc0jP%2FTpra0iGhSihqiDBLKTiBdV9cxZBg29zH9AWlUe3xm4hZXYV1mKdovExU7Ihci7ewP1x2xFe77OdevtWzExGhhuQJBDZmR78TPbetMrMn3IAL3tyW65COrsUPHBO7DMpCknvHuxs2JoHQrnpgFX%2Bkq1cHn%2FiShJGrPGgOeJ%2BynFy88GuhLe3sH9vDaJU98QF4iMfdZx%2F1oIuw1ssiljWg&X-Amz-Signature=6549311a8b625e0b445f60630e9b29370e023a17ed722784c1edb78895d07615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3UGNIL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFss0gOCRKTjS3N0Nq8Qho%2BZ%2F45hqj2MG%2BdlsytZ8JgAiBnzsukgOwFWCSM4jIVoew0ATEHZmeLo89%2F7nnKvtmrhyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm1TxeX90UNaTN6EKtwDtvnbEtgorSdvi6CgbFHyNPuQyo6TyijkBmtVr7zIpUDIsX%2BXla7MOdapYtEdbL0sVKM3OPiKhAAcm07YxVuiQLT%2Bu%2FD2RDzvA9RrnEZ2EKEJ7OlkrXuSBzVD5mVgDeoRwBKXXE4tLOBs%2BtzfI%2F5bcsujv%2BJ%2BLioLwMeqMWDIwXerMMTlTXBPit9h1o9AHnRZz4NRW%2FYdYQqvaB4zeNo3z0yDEECH9u%2B3UN%2BEF1ebVIS4QlTN9Ar3vxNQ0w6ubMFwPjO2RkbxU751dTiCclxqs52zuHDGKoc1uGMjXwgFeeIczwXGEXQ%2F07UD40hQ0RsmEb5HWXB6Y5Ry4ypoGZtdFuRvmdwZ7NygFtfyKYzPaQqqqoQKAGO%2B%2FxwbFoOEB223HuFo6rSLU45Yr1wEEVOeamP2JDep9tMlyXxG3WRC8aJQYcsI32xPUIRPd61VnyFVIU80ApJcNCtOu%2F%2B1U0Xa8YlM%2Bvh0awUXyaqAeUfWllKqKX9rHO3kKVb4Hk5PmKk8sVADmJjUpvL%2BS2mnQmFNz1BTqVgcWWfVotaeo5JzeSmbgtyMPolXouIR2qjrtSmO8nPFqXBdA7Xi9mB7IJxpbCMSFiuoaxbsNTsTKBeBVOJDMaWRRm99fbcQfg8wqM%2BOwwY6pgFWYmNc0jP%2FTpra0iGhSihqiDBLKTiBdV9cxZBg29zH9AWlUe3xm4hZXYV1mKdovExU7Ihci7ewP1x2xFe77OdevtWzExGhhuQJBDZmR78TPbetMrMn3IAL3tyW65COrsUPHBO7DMpCknvHuxs2JoHQrnpgFX%2Bkq1cHn%2FiShJGrPGgOeJ%2BynFy88GuhLe3sH9vDaJU98QF4iMfdZx%2F1oIuw1ssiljWg&X-Amz-Signature=b903640cd996d76ea9b3652dd716d2475406f4b28272c541a08e0211b9f4f431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3UGNIL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFss0gOCRKTjS3N0Nq8Qho%2BZ%2F45hqj2MG%2BdlsytZ8JgAiBnzsukgOwFWCSM4jIVoew0ATEHZmeLo89%2F7nnKvtmrhyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm1TxeX90UNaTN6EKtwDtvnbEtgorSdvi6CgbFHyNPuQyo6TyijkBmtVr7zIpUDIsX%2BXla7MOdapYtEdbL0sVKM3OPiKhAAcm07YxVuiQLT%2Bu%2FD2RDzvA9RrnEZ2EKEJ7OlkrXuSBzVD5mVgDeoRwBKXXE4tLOBs%2BtzfI%2F5bcsujv%2BJ%2BLioLwMeqMWDIwXerMMTlTXBPit9h1o9AHnRZz4NRW%2FYdYQqvaB4zeNo3z0yDEECH9u%2B3UN%2BEF1ebVIS4QlTN9Ar3vxNQ0w6ubMFwPjO2RkbxU751dTiCclxqs52zuHDGKoc1uGMjXwgFeeIczwXGEXQ%2F07UD40hQ0RsmEb5HWXB6Y5Ry4ypoGZtdFuRvmdwZ7NygFtfyKYzPaQqqqoQKAGO%2B%2FxwbFoOEB223HuFo6rSLU45Yr1wEEVOeamP2JDep9tMlyXxG3WRC8aJQYcsI32xPUIRPd61VnyFVIU80ApJcNCtOu%2F%2B1U0Xa8YlM%2Bvh0awUXyaqAeUfWllKqKX9rHO3kKVb4Hk5PmKk8sVADmJjUpvL%2BS2mnQmFNz1BTqVgcWWfVotaeo5JzeSmbgtyMPolXouIR2qjrtSmO8nPFqXBdA7Xi9mB7IJxpbCMSFiuoaxbsNTsTKBeBVOJDMaWRRm99fbcQfg8wqM%2BOwwY6pgFWYmNc0jP%2FTpra0iGhSihqiDBLKTiBdV9cxZBg29zH9AWlUe3xm4hZXYV1mKdovExU7Ihci7ewP1x2xFe77OdevtWzExGhhuQJBDZmR78TPbetMrMn3IAL3tyW65COrsUPHBO7DMpCknvHuxs2JoHQrnpgFX%2Bkq1cHn%2FiShJGrPGgOeJ%2BynFy88GuhLe3sH9vDaJU98QF4iMfdZx%2F1oIuw1ssiljWg&X-Amz-Signature=cc5d7cc2db088854a8cdfead435ee1bab8600904b4fa4c561a93eacfc9ab9acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
