---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXPPOJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7QBCuDCnsAL18QKQPq44FKdRoVTUUBeTqNAhXkYexAiB8l4ealT%2Bo0TkDaYUyS7tWCh6FIlwYCLUvQC7F4oEwHiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqG24DroX8KjxpsfKtwDW3ted2GlKDyW2gRshiGQJXfDID1V9fmP8EqVZg10paw0i%2FRGKvt%2FdjtlRjPVxKTtG%2FNAJax2SILhte80UdeDGHgTf9I8yC92SK9avZBeV5XrcCIz4Ahnvwssr%2Fq0zxEyDLQuHK5%2BHkr7Neah4cA9T%2FI4N43LGxrld1vTpatr0tFDZf0LnTG8yFkaGLkWLTFyhQ86NAT8WCkr2KYcRxc7UKoOUdhDO8VR3omHUyX3GARjUm%2BenUTdeatTcBCsUREdCGvtyEXM0aNA8aJk%2FIlhZ91nOcW%2BnRR2vCH0NyDQsZL9ZCNPzigLR%2FP2XAWJpI1gEHDDuTbwnJwWKZu8P7tptdMmZ3IODkfr0yFCIgaxQwrWIEvDDps53eOvsxqtjbna%2FJQVhw4AbPtxEvVt7sdmPDcPQgsqhj3SnAzh%2BfwRcV7l2LCOBocayqu%2B5cNSJRjk%2Fwz5IeGjXOQT6mCqlkXUPYIWz%2B0naEOjt2FSxKsLUA6PZ346eTmAwLux6GUUnUW9h3dXotGNCEMPJscD7BaQiibOpNOYzFF2hVG%2FpkdzQcFxuGVOZDo8dDdoRe3IClrG5sUiJuHAJMf3ibSUmV8psWqqjPxidfYFJzMrwQQJ65Q3Q4S%2FXRMx4%2BQIknAwhLTrvAY6pgGS6mDIZT2Y59MFs%2BIx9aL2YMVl1%2FfGOS%2FRxkCSfuaAh5O5VUqR2ldpTmj7UMekDBYxO21S8rV%2BfaiQ3viDAkNO3la78oQgLiPPAU7PeeqFmfz6YfWKHgRBpxUBLzmy%2B%2FHmUvK8HJ5OD1BauoXbF93%2BSzbtEPVZw3Emql8kRl1ez%2FGO3XRqoogbP2i5pA32q%2BuH3ed5GD5nV%2FnIrndUOKQAvBCEKd9t&X-Amz-Signature=abe7a253e99f0dccd1667684c83a5adf47d1f0cfa0f90b90a37cc5395e567230&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXPPOJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7QBCuDCnsAL18QKQPq44FKdRoVTUUBeTqNAhXkYexAiB8l4ealT%2Bo0TkDaYUyS7tWCh6FIlwYCLUvQC7F4oEwHiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqG24DroX8KjxpsfKtwDW3ted2GlKDyW2gRshiGQJXfDID1V9fmP8EqVZg10paw0i%2FRGKvt%2FdjtlRjPVxKTtG%2FNAJax2SILhte80UdeDGHgTf9I8yC92SK9avZBeV5XrcCIz4Ahnvwssr%2Fq0zxEyDLQuHK5%2BHkr7Neah4cA9T%2FI4N43LGxrld1vTpatr0tFDZf0LnTG8yFkaGLkWLTFyhQ86NAT8WCkr2KYcRxc7UKoOUdhDO8VR3omHUyX3GARjUm%2BenUTdeatTcBCsUREdCGvtyEXM0aNA8aJk%2FIlhZ91nOcW%2BnRR2vCH0NyDQsZL9ZCNPzigLR%2FP2XAWJpI1gEHDDuTbwnJwWKZu8P7tptdMmZ3IODkfr0yFCIgaxQwrWIEvDDps53eOvsxqtjbna%2FJQVhw4AbPtxEvVt7sdmPDcPQgsqhj3SnAzh%2BfwRcV7l2LCOBocayqu%2B5cNSJRjk%2Fwz5IeGjXOQT6mCqlkXUPYIWz%2B0naEOjt2FSxKsLUA6PZ346eTmAwLux6GUUnUW9h3dXotGNCEMPJscD7BaQiibOpNOYzFF2hVG%2FpkdzQcFxuGVOZDo8dDdoRe3IClrG5sUiJuHAJMf3ibSUmV8psWqqjPxidfYFJzMrwQQJ65Q3Q4S%2FXRMx4%2BQIknAwhLTrvAY6pgGS6mDIZT2Y59MFs%2BIx9aL2YMVl1%2FfGOS%2FRxkCSfuaAh5O5VUqR2ldpTmj7UMekDBYxO21S8rV%2BfaiQ3viDAkNO3la78oQgLiPPAU7PeeqFmfz6YfWKHgRBpxUBLzmy%2B%2FHmUvK8HJ5OD1BauoXbF93%2BSzbtEPVZw3Emql8kRl1ez%2FGO3XRqoogbP2i5pA32q%2BuH3ed5GD5nV%2FnIrndUOKQAvBCEKd9t&X-Amz-Signature=24bf0d290a413c520d1489891b6a7895257ea32f13ae4eda8aa7ae37248838fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXPPOJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7QBCuDCnsAL18QKQPq44FKdRoVTUUBeTqNAhXkYexAiB8l4ealT%2Bo0TkDaYUyS7tWCh6FIlwYCLUvQC7F4oEwHiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqG24DroX8KjxpsfKtwDW3ted2GlKDyW2gRshiGQJXfDID1V9fmP8EqVZg10paw0i%2FRGKvt%2FdjtlRjPVxKTtG%2FNAJax2SILhte80UdeDGHgTf9I8yC92SK9avZBeV5XrcCIz4Ahnvwssr%2Fq0zxEyDLQuHK5%2BHkr7Neah4cA9T%2FI4N43LGxrld1vTpatr0tFDZf0LnTG8yFkaGLkWLTFyhQ86NAT8WCkr2KYcRxc7UKoOUdhDO8VR3omHUyX3GARjUm%2BenUTdeatTcBCsUREdCGvtyEXM0aNA8aJk%2FIlhZ91nOcW%2BnRR2vCH0NyDQsZL9ZCNPzigLR%2FP2XAWJpI1gEHDDuTbwnJwWKZu8P7tptdMmZ3IODkfr0yFCIgaxQwrWIEvDDps53eOvsxqtjbna%2FJQVhw4AbPtxEvVt7sdmPDcPQgsqhj3SnAzh%2BfwRcV7l2LCOBocayqu%2B5cNSJRjk%2Fwz5IeGjXOQT6mCqlkXUPYIWz%2B0naEOjt2FSxKsLUA6PZ346eTmAwLux6GUUnUW9h3dXotGNCEMPJscD7BaQiibOpNOYzFF2hVG%2FpkdzQcFxuGVOZDo8dDdoRe3IClrG5sUiJuHAJMf3ibSUmV8psWqqjPxidfYFJzMrwQQJ65Q3Q4S%2FXRMx4%2BQIknAwhLTrvAY6pgGS6mDIZT2Y59MFs%2BIx9aL2YMVl1%2FfGOS%2FRxkCSfuaAh5O5VUqR2ldpTmj7UMekDBYxO21S8rV%2BfaiQ3viDAkNO3la78oQgLiPPAU7PeeqFmfz6YfWKHgRBpxUBLzmy%2B%2FHmUvK8HJ5OD1BauoXbF93%2BSzbtEPVZw3Emql8kRl1ez%2FGO3XRqoogbP2i5pA32q%2BuH3ed5GD5nV%2FnIrndUOKQAvBCEKd9t&X-Amz-Signature=c60f60eb5cdfd059cac1d81c93a2451ff59bed4743a2462600db5f5c0d32fe1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXPPOJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7QBCuDCnsAL18QKQPq44FKdRoVTUUBeTqNAhXkYexAiB8l4ealT%2Bo0TkDaYUyS7tWCh6FIlwYCLUvQC7F4oEwHiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqG24DroX8KjxpsfKtwDW3ted2GlKDyW2gRshiGQJXfDID1V9fmP8EqVZg10paw0i%2FRGKvt%2FdjtlRjPVxKTtG%2FNAJax2SILhte80UdeDGHgTf9I8yC92SK9avZBeV5XrcCIz4Ahnvwssr%2Fq0zxEyDLQuHK5%2BHkr7Neah4cA9T%2FI4N43LGxrld1vTpatr0tFDZf0LnTG8yFkaGLkWLTFyhQ86NAT8WCkr2KYcRxc7UKoOUdhDO8VR3omHUyX3GARjUm%2BenUTdeatTcBCsUREdCGvtyEXM0aNA8aJk%2FIlhZ91nOcW%2BnRR2vCH0NyDQsZL9ZCNPzigLR%2FP2XAWJpI1gEHDDuTbwnJwWKZu8P7tptdMmZ3IODkfr0yFCIgaxQwrWIEvDDps53eOvsxqtjbna%2FJQVhw4AbPtxEvVt7sdmPDcPQgsqhj3SnAzh%2BfwRcV7l2LCOBocayqu%2B5cNSJRjk%2Fwz5IeGjXOQT6mCqlkXUPYIWz%2B0naEOjt2FSxKsLUA6PZ346eTmAwLux6GUUnUW9h3dXotGNCEMPJscD7BaQiibOpNOYzFF2hVG%2FpkdzQcFxuGVOZDo8dDdoRe3IClrG5sUiJuHAJMf3ibSUmV8psWqqjPxidfYFJzMrwQQJ65Q3Q4S%2FXRMx4%2BQIknAwhLTrvAY6pgGS6mDIZT2Y59MFs%2BIx9aL2YMVl1%2FfGOS%2FRxkCSfuaAh5O5VUqR2ldpTmj7UMekDBYxO21S8rV%2BfaiQ3viDAkNO3la78oQgLiPPAU7PeeqFmfz6YfWKHgRBpxUBLzmy%2B%2FHmUvK8HJ5OD1BauoXbF93%2BSzbtEPVZw3Emql8kRl1ez%2FGO3XRqoogbP2i5pA32q%2BuH3ed5GD5nV%2FnIrndUOKQAvBCEKd9t&X-Amz-Signature=8fff859db1a2d2a49b87b1ec2f7a4c22792ef8566595537accb7135be36d1a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXPPOJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7QBCuDCnsAL18QKQPq44FKdRoVTUUBeTqNAhXkYexAiB8l4ealT%2Bo0TkDaYUyS7tWCh6FIlwYCLUvQC7F4oEwHiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqG24DroX8KjxpsfKtwDW3ted2GlKDyW2gRshiGQJXfDID1V9fmP8EqVZg10paw0i%2FRGKvt%2FdjtlRjPVxKTtG%2FNAJax2SILhte80UdeDGHgTf9I8yC92SK9avZBeV5XrcCIz4Ahnvwssr%2Fq0zxEyDLQuHK5%2BHkr7Neah4cA9T%2FI4N43LGxrld1vTpatr0tFDZf0LnTG8yFkaGLkWLTFyhQ86NAT8WCkr2KYcRxc7UKoOUdhDO8VR3omHUyX3GARjUm%2BenUTdeatTcBCsUREdCGvtyEXM0aNA8aJk%2FIlhZ91nOcW%2BnRR2vCH0NyDQsZL9ZCNPzigLR%2FP2XAWJpI1gEHDDuTbwnJwWKZu8P7tptdMmZ3IODkfr0yFCIgaxQwrWIEvDDps53eOvsxqtjbna%2FJQVhw4AbPtxEvVt7sdmPDcPQgsqhj3SnAzh%2BfwRcV7l2LCOBocayqu%2B5cNSJRjk%2Fwz5IeGjXOQT6mCqlkXUPYIWz%2B0naEOjt2FSxKsLUA6PZ346eTmAwLux6GUUnUW9h3dXotGNCEMPJscD7BaQiibOpNOYzFF2hVG%2FpkdzQcFxuGVOZDo8dDdoRe3IClrG5sUiJuHAJMf3ibSUmV8psWqqjPxidfYFJzMrwQQJ65Q3Q4S%2FXRMx4%2BQIknAwhLTrvAY6pgGS6mDIZT2Y59MFs%2BIx9aL2YMVl1%2FfGOS%2FRxkCSfuaAh5O5VUqR2ldpTmj7UMekDBYxO21S8rV%2BfaiQ3viDAkNO3la78oQgLiPPAU7PeeqFmfz6YfWKHgRBpxUBLzmy%2B%2FHmUvK8HJ5OD1BauoXbF93%2BSzbtEPVZw3Emql8kRl1ez%2FGO3XRqoogbP2i5pA32q%2BuH3ed5GD5nV%2FnIrndUOKQAvBCEKd9t&X-Amz-Signature=1a37e1c11f3e19ede7fdcbb1705965170e280329313b3c2f2c0912a066dbecf4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXPPOJJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK7QBCuDCnsAL18QKQPq44FKdRoVTUUBeTqNAhXkYexAiB8l4ealT%2Bo0TkDaYUyS7tWCh6FIlwYCLUvQC7F4oEwHiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqG24DroX8KjxpsfKtwDW3ted2GlKDyW2gRshiGQJXfDID1V9fmP8EqVZg10paw0i%2FRGKvt%2FdjtlRjPVxKTtG%2FNAJax2SILhte80UdeDGHgTf9I8yC92SK9avZBeV5XrcCIz4Ahnvwssr%2Fq0zxEyDLQuHK5%2BHkr7Neah4cA9T%2FI4N43LGxrld1vTpatr0tFDZf0LnTG8yFkaGLkWLTFyhQ86NAT8WCkr2KYcRxc7UKoOUdhDO8VR3omHUyX3GARjUm%2BenUTdeatTcBCsUREdCGvtyEXM0aNA8aJk%2FIlhZ91nOcW%2BnRR2vCH0NyDQsZL9ZCNPzigLR%2FP2XAWJpI1gEHDDuTbwnJwWKZu8P7tptdMmZ3IODkfr0yFCIgaxQwrWIEvDDps53eOvsxqtjbna%2FJQVhw4AbPtxEvVt7sdmPDcPQgsqhj3SnAzh%2BfwRcV7l2LCOBocayqu%2B5cNSJRjk%2Fwz5IeGjXOQT6mCqlkXUPYIWz%2B0naEOjt2FSxKsLUA6PZ346eTmAwLux6GUUnUW9h3dXotGNCEMPJscD7BaQiibOpNOYzFF2hVG%2FpkdzQcFxuGVOZDo8dDdoRe3IClrG5sUiJuHAJMf3ibSUmV8psWqqjPxidfYFJzMrwQQJ65Q3Q4S%2FXRMx4%2BQIknAwhLTrvAY6pgGS6mDIZT2Y59MFs%2BIx9aL2YMVl1%2FfGOS%2FRxkCSfuaAh5O5VUqR2ldpTmj7UMekDBYxO21S8rV%2BfaiQ3viDAkNO3la78oQgLiPPAU7PeeqFmfz6YfWKHgRBpxUBLzmy%2B%2FHmUvK8HJ5OD1BauoXbF93%2BSzbtEPVZw3Emql8kRl1ez%2FGO3XRqoogbP2i5pA32q%2BuH3ed5GD5nV%2FnIrndUOKQAvBCEKd9t&X-Amz-Signature=5fa7d11b4a0a4b4adea8640149e4f0aad0ad09501864188b5291991c2895c4d4&X-Amz-SignedHeaders=host&x-id=GetObject)
