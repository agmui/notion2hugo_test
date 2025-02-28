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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54QNWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFD0SbGtLbRRnoNGjeCarpsdUHS9ZIXeuGDjeZ5unaG7AiEAnU24yTHx9Q2FSJvUFsjxQjjAgtQgI%2BS2eWOgyDTLE6UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhHXv9J0VFJUAOySrcA%2F7xJMHPCezmt%2Fo1U%2F6urxbteGElceAEG0iXJrBEidJbtTrMPSLosNxSKBRPc4tpdnCKIIAjkkSrYECp91%2FPohZZRxJ0z6GAurud3tVcbjtHV6sV5vdKknV3Hl9W0htGUgmn84FeBBvoCT10qQ49h39BqYZDAUwadhaBEjE3n892ZOteRp6FXdz6KKJuZb%2Bc%2B9jr%2BUGmu6cuV9N1fp3pxtVG%2F4yvCK0n0Q2KGLUMK8eGHZTtrBrRJ0tyZ%2BIyWpSWNS5kCy11lK8aTwWZwyi%2FYzZLKS9y18eAHLAqmRWl6N6jIcgP7C7WmfAiXFK1LOfo4soKYcWvvc3J%2FX4bXVBgmyQaQG2vItiZPSOf6Dr%2BGv%2FSAe8GtL4Em%2BwuXjCgC%2BmRJF8W2alm6pFYfIVGz9ZxU2aiinmSVeGRAFEjqu51NnQI%2FzPcsenTaNQTwGgIOnMA4w2fByWSMrQDDbGLyThgMDCRw1DMmbhpWfj%2Fq7wv6GPLa4E2yzGantKYli%2Bv2hOrHNNC%2BN3NugEqJ%2BpZzadb07d0G2CUUJIIyrHY5Yy30bQaKLY35g5%2BstAHQQRwLO4LwKfATwk8T3fljD0gWc9Rud17sThHVMeAXeIM9NlBvOsIwp%2FV2z289uONuCanMJ32g74GOqUBcC72YId9myzunqFQ56aYu91KfxnJKpq9k3l60SaerxtVMtYW1Ncp295cQje9%2BBRajv254OtJFRlNVF72XCmnjLvTEq3%2FeRnZBfPU3kZinEV1Zu19jpgk8NGCmV2cKpzmEIphkGfDXEiuN5TCcMrBG9BmRKeQi7Eo66lNYSCDLXpPh2FFpdWCw2%2B5rfi0hsYo6Nr0XW8ByEojWSPX5Imacbg4sL5w&X-Amz-Signature=127dfdde8a32077dd6fc4a650e37bd0f15cc5093a011feb5928e36c02b7d211b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54QNWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFD0SbGtLbRRnoNGjeCarpsdUHS9ZIXeuGDjeZ5unaG7AiEAnU24yTHx9Q2FSJvUFsjxQjjAgtQgI%2BS2eWOgyDTLE6UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhHXv9J0VFJUAOySrcA%2F7xJMHPCezmt%2Fo1U%2F6urxbteGElceAEG0iXJrBEidJbtTrMPSLosNxSKBRPc4tpdnCKIIAjkkSrYECp91%2FPohZZRxJ0z6GAurud3tVcbjtHV6sV5vdKknV3Hl9W0htGUgmn84FeBBvoCT10qQ49h39BqYZDAUwadhaBEjE3n892ZOteRp6FXdz6KKJuZb%2Bc%2B9jr%2BUGmu6cuV9N1fp3pxtVG%2F4yvCK0n0Q2KGLUMK8eGHZTtrBrRJ0tyZ%2BIyWpSWNS5kCy11lK8aTwWZwyi%2FYzZLKS9y18eAHLAqmRWl6N6jIcgP7C7WmfAiXFK1LOfo4soKYcWvvc3J%2FX4bXVBgmyQaQG2vItiZPSOf6Dr%2BGv%2FSAe8GtL4Em%2BwuXjCgC%2BmRJF8W2alm6pFYfIVGz9ZxU2aiinmSVeGRAFEjqu51NnQI%2FzPcsenTaNQTwGgIOnMA4w2fByWSMrQDDbGLyThgMDCRw1DMmbhpWfj%2Fq7wv6GPLa4E2yzGantKYli%2Bv2hOrHNNC%2BN3NugEqJ%2BpZzadb07d0G2CUUJIIyrHY5Yy30bQaKLY35g5%2BstAHQQRwLO4LwKfATwk8T3fljD0gWc9Rud17sThHVMeAXeIM9NlBvOsIwp%2FV2z289uONuCanMJ32g74GOqUBcC72YId9myzunqFQ56aYu91KfxnJKpq9k3l60SaerxtVMtYW1Ncp295cQje9%2BBRajv254OtJFRlNVF72XCmnjLvTEq3%2FeRnZBfPU3kZinEV1Zu19jpgk8NGCmV2cKpzmEIphkGfDXEiuN5TCcMrBG9BmRKeQi7Eo66lNYSCDLXpPh2FFpdWCw2%2B5rfi0hsYo6Nr0XW8ByEojWSPX5Imacbg4sL5w&X-Amz-Signature=83bf7528c6fa7a02d8da2690a8826ff65195eb2c1ca6e17848b0c3b48eb5d61a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54QNWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFD0SbGtLbRRnoNGjeCarpsdUHS9ZIXeuGDjeZ5unaG7AiEAnU24yTHx9Q2FSJvUFsjxQjjAgtQgI%2BS2eWOgyDTLE6UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhHXv9J0VFJUAOySrcA%2F7xJMHPCezmt%2Fo1U%2F6urxbteGElceAEG0iXJrBEidJbtTrMPSLosNxSKBRPc4tpdnCKIIAjkkSrYECp91%2FPohZZRxJ0z6GAurud3tVcbjtHV6sV5vdKknV3Hl9W0htGUgmn84FeBBvoCT10qQ49h39BqYZDAUwadhaBEjE3n892ZOteRp6FXdz6KKJuZb%2Bc%2B9jr%2BUGmu6cuV9N1fp3pxtVG%2F4yvCK0n0Q2KGLUMK8eGHZTtrBrRJ0tyZ%2BIyWpSWNS5kCy11lK8aTwWZwyi%2FYzZLKS9y18eAHLAqmRWl6N6jIcgP7C7WmfAiXFK1LOfo4soKYcWvvc3J%2FX4bXVBgmyQaQG2vItiZPSOf6Dr%2BGv%2FSAe8GtL4Em%2BwuXjCgC%2BmRJF8W2alm6pFYfIVGz9ZxU2aiinmSVeGRAFEjqu51NnQI%2FzPcsenTaNQTwGgIOnMA4w2fByWSMrQDDbGLyThgMDCRw1DMmbhpWfj%2Fq7wv6GPLa4E2yzGantKYli%2Bv2hOrHNNC%2BN3NugEqJ%2BpZzadb07d0G2CUUJIIyrHY5Yy30bQaKLY35g5%2BstAHQQRwLO4LwKfATwk8T3fljD0gWc9Rud17sThHVMeAXeIM9NlBvOsIwp%2FV2z289uONuCanMJ32g74GOqUBcC72YId9myzunqFQ56aYu91KfxnJKpq9k3l60SaerxtVMtYW1Ncp295cQje9%2BBRajv254OtJFRlNVF72XCmnjLvTEq3%2FeRnZBfPU3kZinEV1Zu19jpgk8NGCmV2cKpzmEIphkGfDXEiuN5TCcMrBG9BmRKeQi7Eo66lNYSCDLXpPh2FFpdWCw2%2B5rfi0hsYo6Nr0XW8ByEojWSPX5Imacbg4sL5w&X-Amz-Signature=8cce71ebf60503711e035d486070888f1549d2447624ec71ee87c4118fefedcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54QNWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFD0SbGtLbRRnoNGjeCarpsdUHS9ZIXeuGDjeZ5unaG7AiEAnU24yTHx9Q2FSJvUFsjxQjjAgtQgI%2BS2eWOgyDTLE6UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhHXv9J0VFJUAOySrcA%2F7xJMHPCezmt%2Fo1U%2F6urxbteGElceAEG0iXJrBEidJbtTrMPSLosNxSKBRPc4tpdnCKIIAjkkSrYECp91%2FPohZZRxJ0z6GAurud3tVcbjtHV6sV5vdKknV3Hl9W0htGUgmn84FeBBvoCT10qQ49h39BqYZDAUwadhaBEjE3n892ZOteRp6FXdz6KKJuZb%2Bc%2B9jr%2BUGmu6cuV9N1fp3pxtVG%2F4yvCK0n0Q2KGLUMK8eGHZTtrBrRJ0tyZ%2BIyWpSWNS5kCy11lK8aTwWZwyi%2FYzZLKS9y18eAHLAqmRWl6N6jIcgP7C7WmfAiXFK1LOfo4soKYcWvvc3J%2FX4bXVBgmyQaQG2vItiZPSOf6Dr%2BGv%2FSAe8GtL4Em%2BwuXjCgC%2BmRJF8W2alm6pFYfIVGz9ZxU2aiinmSVeGRAFEjqu51NnQI%2FzPcsenTaNQTwGgIOnMA4w2fByWSMrQDDbGLyThgMDCRw1DMmbhpWfj%2Fq7wv6GPLa4E2yzGantKYli%2Bv2hOrHNNC%2BN3NugEqJ%2BpZzadb07d0G2CUUJIIyrHY5Yy30bQaKLY35g5%2BstAHQQRwLO4LwKfATwk8T3fljD0gWc9Rud17sThHVMeAXeIM9NlBvOsIwp%2FV2z289uONuCanMJ32g74GOqUBcC72YId9myzunqFQ56aYu91KfxnJKpq9k3l60SaerxtVMtYW1Ncp295cQje9%2BBRajv254OtJFRlNVF72XCmnjLvTEq3%2FeRnZBfPU3kZinEV1Zu19jpgk8NGCmV2cKpzmEIphkGfDXEiuN5TCcMrBG9BmRKeQi7Eo66lNYSCDLXpPh2FFpdWCw2%2B5rfi0hsYo6Nr0XW8ByEojWSPX5Imacbg4sL5w&X-Amz-Signature=5c1dbffc9856812c62c1240078559bf76e9d27e418c718b8c039ddaa92eb6983&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54QNWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFD0SbGtLbRRnoNGjeCarpsdUHS9ZIXeuGDjeZ5unaG7AiEAnU24yTHx9Q2FSJvUFsjxQjjAgtQgI%2BS2eWOgyDTLE6UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhHXv9J0VFJUAOySrcA%2F7xJMHPCezmt%2Fo1U%2F6urxbteGElceAEG0iXJrBEidJbtTrMPSLosNxSKBRPc4tpdnCKIIAjkkSrYECp91%2FPohZZRxJ0z6GAurud3tVcbjtHV6sV5vdKknV3Hl9W0htGUgmn84FeBBvoCT10qQ49h39BqYZDAUwadhaBEjE3n892ZOteRp6FXdz6KKJuZb%2Bc%2B9jr%2BUGmu6cuV9N1fp3pxtVG%2F4yvCK0n0Q2KGLUMK8eGHZTtrBrRJ0tyZ%2BIyWpSWNS5kCy11lK8aTwWZwyi%2FYzZLKS9y18eAHLAqmRWl6N6jIcgP7C7WmfAiXFK1LOfo4soKYcWvvc3J%2FX4bXVBgmyQaQG2vItiZPSOf6Dr%2BGv%2FSAe8GtL4Em%2BwuXjCgC%2BmRJF8W2alm6pFYfIVGz9ZxU2aiinmSVeGRAFEjqu51NnQI%2FzPcsenTaNQTwGgIOnMA4w2fByWSMrQDDbGLyThgMDCRw1DMmbhpWfj%2Fq7wv6GPLa4E2yzGantKYli%2Bv2hOrHNNC%2BN3NugEqJ%2BpZzadb07d0G2CUUJIIyrHY5Yy30bQaKLY35g5%2BstAHQQRwLO4LwKfATwk8T3fljD0gWc9Rud17sThHVMeAXeIM9NlBvOsIwp%2FV2z289uONuCanMJ32g74GOqUBcC72YId9myzunqFQ56aYu91KfxnJKpq9k3l60SaerxtVMtYW1Ncp295cQje9%2BBRajv254OtJFRlNVF72XCmnjLvTEq3%2FeRnZBfPU3kZinEV1Zu19jpgk8NGCmV2cKpzmEIphkGfDXEiuN5TCcMrBG9BmRKeQi7Eo66lNYSCDLXpPh2FFpdWCw2%2B5rfi0hsYo6Nr0XW8ByEojWSPX5Imacbg4sL5w&X-Amz-Signature=df2afa6b1be15d3d2f47e50d9d24d4e88ddde8b50053a008d5cdeaf72053df76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54QNWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIFD0SbGtLbRRnoNGjeCarpsdUHS9ZIXeuGDjeZ5unaG7AiEAnU24yTHx9Q2FSJvUFsjxQjjAgtQgI%2BS2eWOgyDTLE6UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhHXv9J0VFJUAOySrcA%2F7xJMHPCezmt%2Fo1U%2F6urxbteGElceAEG0iXJrBEidJbtTrMPSLosNxSKBRPc4tpdnCKIIAjkkSrYECp91%2FPohZZRxJ0z6GAurud3tVcbjtHV6sV5vdKknV3Hl9W0htGUgmn84FeBBvoCT10qQ49h39BqYZDAUwadhaBEjE3n892ZOteRp6FXdz6KKJuZb%2Bc%2B9jr%2BUGmu6cuV9N1fp3pxtVG%2F4yvCK0n0Q2KGLUMK8eGHZTtrBrRJ0tyZ%2BIyWpSWNS5kCy11lK8aTwWZwyi%2FYzZLKS9y18eAHLAqmRWl6N6jIcgP7C7WmfAiXFK1LOfo4soKYcWvvc3J%2FX4bXVBgmyQaQG2vItiZPSOf6Dr%2BGv%2FSAe8GtL4Em%2BwuXjCgC%2BmRJF8W2alm6pFYfIVGz9ZxU2aiinmSVeGRAFEjqu51NnQI%2FzPcsenTaNQTwGgIOnMA4w2fByWSMrQDDbGLyThgMDCRw1DMmbhpWfj%2Fq7wv6GPLa4E2yzGantKYli%2Bv2hOrHNNC%2BN3NugEqJ%2BpZzadb07d0G2CUUJIIyrHY5Yy30bQaKLY35g5%2BstAHQQRwLO4LwKfATwk8T3fljD0gWc9Rud17sThHVMeAXeIM9NlBvOsIwp%2FV2z289uONuCanMJ32g74GOqUBcC72YId9myzunqFQ56aYu91KfxnJKpq9k3l60SaerxtVMtYW1Ncp295cQje9%2BBRajv254OtJFRlNVF72XCmnjLvTEq3%2FeRnZBfPU3kZinEV1Zu19jpgk8NGCmV2cKpzmEIphkGfDXEiuN5TCcMrBG9BmRKeQi7Eo66lNYSCDLXpPh2FFpdWCw2%2B5rfi0hsYo6Nr0XW8ByEojWSPX5Imacbg4sL5w&X-Amz-Signature=b2de917f4d3d1c5342207e0136c69a8a13c10ec1c071a04356fd124c64bd1845&X-Amz-SignedHeaders=host&x-id=GetObject)
