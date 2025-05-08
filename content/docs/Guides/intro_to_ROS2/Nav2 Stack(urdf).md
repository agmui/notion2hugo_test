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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR3XSE45%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8FEvUYyw%2Byfz8FpOaVCz1VMZwjxzPjCxTZbAU4B7%2F7AiEAyVihe2vbCLslkFbYcrG9vRauYIjGlaRxxHw4iKLgFJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHdzW4snAlLDzARsSCrcA8JdkX3YWPlF0kb7WSibtHtpC5yfpbsBNXgMA9F%2Bshh0qx9eQ6wYCH1lTqQ8JZPjCN6ED%2BHQI60XfnEqRFeE1pRO3uAi%2Bcbg4InB351VcsTDrPtlG8LPiTxjJBujLBM3kuycQ%2BQ0I6dgEtmkdqbaZCt0uY1%2FIfW1KoyjdSoS41OyT1JRsou%2BMDtR9Av9tjBq5jIGdWEa6o3mSs0MT3RTZWaAbDy6mM79IjZpExtuZGl%2B7hKnegcTbaLsE9GIz7GF%2BbsV6kituSg8K9zy9bOasPuULeiqb%2B4x%2B2C3%2F1wlSM57A9%2BvYaf4PPuxOHPy5deqj2lDz%2FkKP8PSezraFae8TRyYVjxuUNVwtefRqLihMPwTDH2oU32FTbs8hwlKn5r5iHpZEXZTbHE84YvFJbK1UW4OKEWiW7ROm0BUOw%2FEq1gvt0HRYyKjLVY5fqYTgRBe4psBhCxeNc61aw%2Bwms9ziSaD3eZfuHtOv4BhXWjiUg7wNywe5mWfHKPKkS8kT8BqnNS%2FQ%2FhfKKSz%2BZMEBlHPEvMXkX5UwjY57rMUxskV1KQCo0zhm3tqdiq2Z0%2FaFbjodYspIDLGryhXRPDYdJN3YOgPDscmRrPkUjEQiJGH0aZ5mjUzZEh434YJeDSPMNrf8cAGOqUBSTetFpJh%2Frg0TaieQwD6Euk75OjU%2FLitejvpbdcA4PITEapV9zCRFtU7j1vxZM6KE7ZaJQsIv2dcNtfQg5aZB5DKRyrulODitQjVe9QRV1cMtNrhhwhF%2BCKz7IvhuP%2BYTsR8KmoBR8PS0Th%2FANxEFLesa2VX8Qw9FBO2WB5i28oaUQfwCs%2BsBoyq3HX%2F4%2Fq0UwdnGAgiZRMJEWx7Ja%2B7rtTy5sa5&X-Amz-Signature=0141ec3da0c95c3d2f7a5efc2feea301724fef17e51619570e947973bd00fad4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR3XSE45%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8FEvUYyw%2Byfz8FpOaVCz1VMZwjxzPjCxTZbAU4B7%2F7AiEAyVihe2vbCLslkFbYcrG9vRauYIjGlaRxxHw4iKLgFJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHdzW4snAlLDzARsSCrcA8JdkX3YWPlF0kb7WSibtHtpC5yfpbsBNXgMA9F%2Bshh0qx9eQ6wYCH1lTqQ8JZPjCN6ED%2BHQI60XfnEqRFeE1pRO3uAi%2Bcbg4InB351VcsTDrPtlG8LPiTxjJBujLBM3kuycQ%2BQ0I6dgEtmkdqbaZCt0uY1%2FIfW1KoyjdSoS41OyT1JRsou%2BMDtR9Av9tjBq5jIGdWEa6o3mSs0MT3RTZWaAbDy6mM79IjZpExtuZGl%2B7hKnegcTbaLsE9GIz7GF%2BbsV6kituSg8K9zy9bOasPuULeiqb%2B4x%2B2C3%2F1wlSM57A9%2BvYaf4PPuxOHPy5deqj2lDz%2FkKP8PSezraFae8TRyYVjxuUNVwtefRqLihMPwTDH2oU32FTbs8hwlKn5r5iHpZEXZTbHE84YvFJbK1UW4OKEWiW7ROm0BUOw%2FEq1gvt0HRYyKjLVY5fqYTgRBe4psBhCxeNc61aw%2Bwms9ziSaD3eZfuHtOv4BhXWjiUg7wNywe5mWfHKPKkS8kT8BqnNS%2FQ%2FhfKKSz%2BZMEBlHPEvMXkX5UwjY57rMUxskV1KQCo0zhm3tqdiq2Z0%2FaFbjodYspIDLGryhXRPDYdJN3YOgPDscmRrPkUjEQiJGH0aZ5mjUzZEh434YJeDSPMNrf8cAGOqUBSTetFpJh%2Frg0TaieQwD6Euk75OjU%2FLitejvpbdcA4PITEapV9zCRFtU7j1vxZM6KE7ZaJQsIv2dcNtfQg5aZB5DKRyrulODitQjVe9QRV1cMtNrhhwhF%2BCKz7IvhuP%2BYTsR8KmoBR8PS0Th%2FANxEFLesa2VX8Qw9FBO2WB5i28oaUQfwCs%2BsBoyq3HX%2F4%2Fq0UwdnGAgiZRMJEWx7Ja%2B7rtTy5sa5&X-Amz-Signature=2cd427f0b660fcefc22ed9a59713e5fa6dca4452d0155e8a21a65fe40c756261&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR3XSE45%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8FEvUYyw%2Byfz8FpOaVCz1VMZwjxzPjCxTZbAU4B7%2F7AiEAyVihe2vbCLslkFbYcrG9vRauYIjGlaRxxHw4iKLgFJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHdzW4snAlLDzARsSCrcA8JdkX3YWPlF0kb7WSibtHtpC5yfpbsBNXgMA9F%2Bshh0qx9eQ6wYCH1lTqQ8JZPjCN6ED%2BHQI60XfnEqRFeE1pRO3uAi%2Bcbg4InB351VcsTDrPtlG8LPiTxjJBujLBM3kuycQ%2BQ0I6dgEtmkdqbaZCt0uY1%2FIfW1KoyjdSoS41OyT1JRsou%2BMDtR9Av9tjBq5jIGdWEa6o3mSs0MT3RTZWaAbDy6mM79IjZpExtuZGl%2B7hKnegcTbaLsE9GIz7GF%2BbsV6kituSg8K9zy9bOasPuULeiqb%2B4x%2B2C3%2F1wlSM57A9%2BvYaf4PPuxOHPy5deqj2lDz%2FkKP8PSezraFae8TRyYVjxuUNVwtefRqLihMPwTDH2oU32FTbs8hwlKn5r5iHpZEXZTbHE84YvFJbK1UW4OKEWiW7ROm0BUOw%2FEq1gvt0HRYyKjLVY5fqYTgRBe4psBhCxeNc61aw%2Bwms9ziSaD3eZfuHtOv4BhXWjiUg7wNywe5mWfHKPKkS8kT8BqnNS%2FQ%2FhfKKSz%2BZMEBlHPEvMXkX5UwjY57rMUxskV1KQCo0zhm3tqdiq2Z0%2FaFbjodYspIDLGryhXRPDYdJN3YOgPDscmRrPkUjEQiJGH0aZ5mjUzZEh434YJeDSPMNrf8cAGOqUBSTetFpJh%2Frg0TaieQwD6Euk75OjU%2FLitejvpbdcA4PITEapV9zCRFtU7j1vxZM6KE7ZaJQsIv2dcNtfQg5aZB5DKRyrulODitQjVe9QRV1cMtNrhhwhF%2BCKz7IvhuP%2BYTsR8KmoBR8PS0Th%2FANxEFLesa2VX8Qw9FBO2WB5i28oaUQfwCs%2BsBoyq3HX%2F4%2Fq0UwdnGAgiZRMJEWx7Ja%2B7rtTy5sa5&X-Amz-Signature=5aba914ad04d2b3a85b5b1ff2eea89d06e927f368edd2e2a6738666c0f51173e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR3XSE45%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8FEvUYyw%2Byfz8FpOaVCz1VMZwjxzPjCxTZbAU4B7%2F7AiEAyVihe2vbCLslkFbYcrG9vRauYIjGlaRxxHw4iKLgFJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHdzW4snAlLDzARsSCrcA8JdkX3YWPlF0kb7WSibtHtpC5yfpbsBNXgMA9F%2Bshh0qx9eQ6wYCH1lTqQ8JZPjCN6ED%2BHQI60XfnEqRFeE1pRO3uAi%2Bcbg4InB351VcsTDrPtlG8LPiTxjJBujLBM3kuycQ%2BQ0I6dgEtmkdqbaZCt0uY1%2FIfW1KoyjdSoS41OyT1JRsou%2BMDtR9Av9tjBq5jIGdWEa6o3mSs0MT3RTZWaAbDy6mM79IjZpExtuZGl%2B7hKnegcTbaLsE9GIz7GF%2BbsV6kituSg8K9zy9bOasPuULeiqb%2B4x%2B2C3%2F1wlSM57A9%2BvYaf4PPuxOHPy5deqj2lDz%2FkKP8PSezraFae8TRyYVjxuUNVwtefRqLihMPwTDH2oU32FTbs8hwlKn5r5iHpZEXZTbHE84YvFJbK1UW4OKEWiW7ROm0BUOw%2FEq1gvt0HRYyKjLVY5fqYTgRBe4psBhCxeNc61aw%2Bwms9ziSaD3eZfuHtOv4BhXWjiUg7wNywe5mWfHKPKkS8kT8BqnNS%2FQ%2FhfKKSz%2BZMEBlHPEvMXkX5UwjY57rMUxskV1KQCo0zhm3tqdiq2Z0%2FaFbjodYspIDLGryhXRPDYdJN3YOgPDscmRrPkUjEQiJGH0aZ5mjUzZEh434YJeDSPMNrf8cAGOqUBSTetFpJh%2Frg0TaieQwD6Euk75OjU%2FLitejvpbdcA4PITEapV9zCRFtU7j1vxZM6KE7ZaJQsIv2dcNtfQg5aZB5DKRyrulODitQjVe9QRV1cMtNrhhwhF%2BCKz7IvhuP%2BYTsR8KmoBR8PS0Th%2FANxEFLesa2VX8Qw9FBO2WB5i28oaUQfwCs%2BsBoyq3HX%2F4%2Fq0UwdnGAgiZRMJEWx7Ja%2B7rtTy5sa5&X-Amz-Signature=fd82b7d9d87748f01d5d4597197a0b82060d7c2fa29ac92ba763c72c57434819&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR3XSE45%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8FEvUYyw%2Byfz8FpOaVCz1VMZwjxzPjCxTZbAU4B7%2F7AiEAyVihe2vbCLslkFbYcrG9vRauYIjGlaRxxHw4iKLgFJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHdzW4snAlLDzARsSCrcA8JdkX3YWPlF0kb7WSibtHtpC5yfpbsBNXgMA9F%2Bshh0qx9eQ6wYCH1lTqQ8JZPjCN6ED%2BHQI60XfnEqRFeE1pRO3uAi%2Bcbg4InB351VcsTDrPtlG8LPiTxjJBujLBM3kuycQ%2BQ0I6dgEtmkdqbaZCt0uY1%2FIfW1KoyjdSoS41OyT1JRsou%2BMDtR9Av9tjBq5jIGdWEa6o3mSs0MT3RTZWaAbDy6mM79IjZpExtuZGl%2B7hKnegcTbaLsE9GIz7GF%2BbsV6kituSg8K9zy9bOasPuULeiqb%2B4x%2B2C3%2F1wlSM57A9%2BvYaf4PPuxOHPy5deqj2lDz%2FkKP8PSezraFae8TRyYVjxuUNVwtefRqLihMPwTDH2oU32FTbs8hwlKn5r5iHpZEXZTbHE84YvFJbK1UW4OKEWiW7ROm0BUOw%2FEq1gvt0HRYyKjLVY5fqYTgRBe4psBhCxeNc61aw%2Bwms9ziSaD3eZfuHtOv4BhXWjiUg7wNywe5mWfHKPKkS8kT8BqnNS%2FQ%2FhfKKSz%2BZMEBlHPEvMXkX5UwjY57rMUxskV1KQCo0zhm3tqdiq2Z0%2FaFbjodYspIDLGryhXRPDYdJN3YOgPDscmRrPkUjEQiJGH0aZ5mjUzZEh434YJeDSPMNrf8cAGOqUBSTetFpJh%2Frg0TaieQwD6Euk75OjU%2FLitejvpbdcA4PITEapV9zCRFtU7j1vxZM6KE7ZaJQsIv2dcNtfQg5aZB5DKRyrulODitQjVe9QRV1cMtNrhhwhF%2BCKz7IvhuP%2BYTsR8KmoBR8PS0Th%2FANxEFLesa2VX8Qw9FBO2WB5i28oaUQfwCs%2BsBoyq3HX%2F4%2Fq0UwdnGAgiZRMJEWx7Ja%2B7rtTy5sa5&X-Amz-Signature=63704ec7c23754a91c4b8764b26bf5b81740602e76288d365f627c2137ac5a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR3XSE45%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8FEvUYyw%2Byfz8FpOaVCz1VMZwjxzPjCxTZbAU4B7%2F7AiEAyVihe2vbCLslkFbYcrG9vRauYIjGlaRxxHw4iKLgFJsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHdzW4snAlLDzARsSCrcA8JdkX3YWPlF0kb7WSibtHtpC5yfpbsBNXgMA9F%2Bshh0qx9eQ6wYCH1lTqQ8JZPjCN6ED%2BHQI60XfnEqRFeE1pRO3uAi%2Bcbg4InB351VcsTDrPtlG8LPiTxjJBujLBM3kuycQ%2BQ0I6dgEtmkdqbaZCt0uY1%2FIfW1KoyjdSoS41OyT1JRsou%2BMDtR9Av9tjBq5jIGdWEa6o3mSs0MT3RTZWaAbDy6mM79IjZpExtuZGl%2B7hKnegcTbaLsE9GIz7GF%2BbsV6kituSg8K9zy9bOasPuULeiqb%2B4x%2B2C3%2F1wlSM57A9%2BvYaf4PPuxOHPy5deqj2lDz%2FkKP8PSezraFae8TRyYVjxuUNVwtefRqLihMPwTDH2oU32FTbs8hwlKn5r5iHpZEXZTbHE84YvFJbK1UW4OKEWiW7ROm0BUOw%2FEq1gvt0HRYyKjLVY5fqYTgRBe4psBhCxeNc61aw%2Bwms9ziSaD3eZfuHtOv4BhXWjiUg7wNywe5mWfHKPKkS8kT8BqnNS%2FQ%2FhfKKSz%2BZMEBlHPEvMXkX5UwjY57rMUxskV1KQCo0zhm3tqdiq2Z0%2FaFbjodYspIDLGryhXRPDYdJN3YOgPDscmRrPkUjEQiJGH0aZ5mjUzZEh434YJeDSPMNrf8cAGOqUBSTetFpJh%2Frg0TaieQwD6Euk75OjU%2FLitejvpbdcA4PITEapV9zCRFtU7j1vxZM6KE7ZaJQsIv2dcNtfQg5aZB5DKRyrulODitQjVe9QRV1cMtNrhhwhF%2BCKz7IvhuP%2BYTsR8KmoBR8PS0Th%2FANxEFLesa2VX8Qw9FBO2WB5i28oaUQfwCs%2BsBoyq3HX%2F4%2Fq0UwdnGAgiZRMJEWx7Ja%2B7rtTy5sa5&X-Amz-Signature=280fbed5ed98b7f8460773ce943beab8b16ea52604c373e1030f12b8003078d6&X-Amz-SignedHeaders=host&x-id=GetObject)
