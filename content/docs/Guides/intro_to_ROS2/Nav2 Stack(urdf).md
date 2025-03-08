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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7I765TK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuS2sP6T63%2FI%2FQ1duMOhRK6ocLmcXxHtGClJtxx8lfbgIhAKBuSn32IlPtSFcgIt2%2F2iH8kBL4Dw1rZNyg9QpwK94zKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKGhTgJ%2BGMEbhkoysq3AMrhkbI7w%2FOcr%2BpWu1h7DRMqgCB6eJXFx%2BD86qCgrJO8P53yjIQzE6nmUUotAUtjg7gKq3xs85VktXtVBef99mwqV3h%2Bx6Mh602lLnx5hZSPQLnLpOp4yXoN5m1dQpSQYvoFlQTrQerVTFG6lqzqYnrKDyRmlEXJvz6ruFjsMqcZumzX4VUvvUbXPByT3cQfii%2F4EJ29%2BB5SrrJEhs%2BqsHTntl%2FwUWOq4KNeA24Bf2KOYK%2Bi1Huq3dzEaaRXfRXHjTJ%2BUGK5Bk6AvhqdDdcWJ9ykEPyM33u5v0lJ%2B%2BMIUUUGf8aKZjL3ri5AZCRlEtl2aSV%2BhiKL3LQKVTynu5uEKRq1gqCe8Z6u5J4nliAWtKwtb%2BA38NqlUaba8%2FGIzNZrsi1KLkaVFQx78wZdTNkBspxbY7odcnLOFOoT7BhomRKBAXWt4Nto3f39a26Aq%2FDI6YZNzlmL44a9PvzQIVl8HE0BKaB65xTWFSzd56%2BO2nwgEerkFVnTO2pLYuwtCRpV3NrNQ8C2zevdmitGVLdbDNkjtZ7%2F89SaXNQQt3ztTwX0dpwVOVWF8njPC9%2FEaydenyojayE3yDsC4ONIf2CI%2BMTA7Ud%2B7zCFkmERxKudgIu4srVXUKgI8NuyKWfRzDegrK%2BBjqkAbzTuw7g4nkM%2FKWuMOZkAPkVYLX79GmJOh9X8LLagsQF9fMSWLFs9KqiNu273WfZRAvh8lH%2BOGztvo%2BRzXlgsPwVeKG7cxhi10wIpunaVr3VmmJzW7Ow3ta%2Bd8eUG6M48juC%2BspUmxt1%2BJ7VG%2BRq6mOvBTc8tGpZexbXZa6IrduiL2qel8WYIZC1LUTpzG07CqXllL3ja3%2FQ4sk1PUpevrlXCF6s&X-Amz-Signature=5f7f4b96bb71aea8a7ee008ccd11439e7e1b5b2c3687800a56befc9d769b7670&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7I765TK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuS2sP6T63%2FI%2FQ1duMOhRK6ocLmcXxHtGClJtxx8lfbgIhAKBuSn32IlPtSFcgIt2%2F2iH8kBL4Dw1rZNyg9QpwK94zKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKGhTgJ%2BGMEbhkoysq3AMrhkbI7w%2FOcr%2BpWu1h7DRMqgCB6eJXFx%2BD86qCgrJO8P53yjIQzE6nmUUotAUtjg7gKq3xs85VktXtVBef99mwqV3h%2Bx6Mh602lLnx5hZSPQLnLpOp4yXoN5m1dQpSQYvoFlQTrQerVTFG6lqzqYnrKDyRmlEXJvz6ruFjsMqcZumzX4VUvvUbXPByT3cQfii%2F4EJ29%2BB5SrrJEhs%2BqsHTntl%2FwUWOq4KNeA24Bf2KOYK%2Bi1Huq3dzEaaRXfRXHjTJ%2BUGK5Bk6AvhqdDdcWJ9ykEPyM33u5v0lJ%2B%2BMIUUUGf8aKZjL3ri5AZCRlEtl2aSV%2BhiKL3LQKVTynu5uEKRq1gqCe8Z6u5J4nliAWtKwtb%2BA38NqlUaba8%2FGIzNZrsi1KLkaVFQx78wZdTNkBspxbY7odcnLOFOoT7BhomRKBAXWt4Nto3f39a26Aq%2FDI6YZNzlmL44a9PvzQIVl8HE0BKaB65xTWFSzd56%2BO2nwgEerkFVnTO2pLYuwtCRpV3NrNQ8C2zevdmitGVLdbDNkjtZ7%2F89SaXNQQt3ztTwX0dpwVOVWF8njPC9%2FEaydenyojayE3yDsC4ONIf2CI%2BMTA7Ud%2B7zCFkmERxKudgIu4srVXUKgI8NuyKWfRzDegrK%2BBjqkAbzTuw7g4nkM%2FKWuMOZkAPkVYLX79GmJOh9X8LLagsQF9fMSWLFs9KqiNu273WfZRAvh8lH%2BOGztvo%2BRzXlgsPwVeKG7cxhi10wIpunaVr3VmmJzW7Ow3ta%2Bd8eUG6M48juC%2BspUmxt1%2BJ7VG%2BRq6mOvBTc8tGpZexbXZa6IrduiL2qel8WYIZC1LUTpzG07CqXllL3ja3%2FQ4sk1PUpevrlXCF6s&X-Amz-Signature=e43b509c6dbfb4122307ce7665f53c96e334c04505e36713d8dd941955f27f54&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7I765TK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuS2sP6T63%2FI%2FQ1duMOhRK6ocLmcXxHtGClJtxx8lfbgIhAKBuSn32IlPtSFcgIt2%2F2iH8kBL4Dw1rZNyg9QpwK94zKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKGhTgJ%2BGMEbhkoysq3AMrhkbI7w%2FOcr%2BpWu1h7DRMqgCB6eJXFx%2BD86qCgrJO8P53yjIQzE6nmUUotAUtjg7gKq3xs85VktXtVBef99mwqV3h%2Bx6Mh602lLnx5hZSPQLnLpOp4yXoN5m1dQpSQYvoFlQTrQerVTFG6lqzqYnrKDyRmlEXJvz6ruFjsMqcZumzX4VUvvUbXPByT3cQfii%2F4EJ29%2BB5SrrJEhs%2BqsHTntl%2FwUWOq4KNeA24Bf2KOYK%2Bi1Huq3dzEaaRXfRXHjTJ%2BUGK5Bk6AvhqdDdcWJ9ykEPyM33u5v0lJ%2B%2BMIUUUGf8aKZjL3ri5AZCRlEtl2aSV%2BhiKL3LQKVTynu5uEKRq1gqCe8Z6u5J4nliAWtKwtb%2BA38NqlUaba8%2FGIzNZrsi1KLkaVFQx78wZdTNkBspxbY7odcnLOFOoT7BhomRKBAXWt4Nto3f39a26Aq%2FDI6YZNzlmL44a9PvzQIVl8HE0BKaB65xTWFSzd56%2BO2nwgEerkFVnTO2pLYuwtCRpV3NrNQ8C2zevdmitGVLdbDNkjtZ7%2F89SaXNQQt3ztTwX0dpwVOVWF8njPC9%2FEaydenyojayE3yDsC4ONIf2CI%2BMTA7Ud%2B7zCFkmERxKudgIu4srVXUKgI8NuyKWfRzDegrK%2BBjqkAbzTuw7g4nkM%2FKWuMOZkAPkVYLX79GmJOh9X8LLagsQF9fMSWLFs9KqiNu273WfZRAvh8lH%2BOGztvo%2BRzXlgsPwVeKG7cxhi10wIpunaVr3VmmJzW7Ow3ta%2Bd8eUG6M48juC%2BspUmxt1%2BJ7VG%2BRq6mOvBTc8tGpZexbXZa6IrduiL2qel8WYIZC1LUTpzG07CqXllL3ja3%2FQ4sk1PUpevrlXCF6s&X-Amz-Signature=2c365d67920c815ac5959833bfd65b8c63a2fe2f5a30f15379820de339f30231&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7I765TK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuS2sP6T63%2FI%2FQ1duMOhRK6ocLmcXxHtGClJtxx8lfbgIhAKBuSn32IlPtSFcgIt2%2F2iH8kBL4Dw1rZNyg9QpwK94zKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKGhTgJ%2BGMEbhkoysq3AMrhkbI7w%2FOcr%2BpWu1h7DRMqgCB6eJXFx%2BD86qCgrJO8P53yjIQzE6nmUUotAUtjg7gKq3xs85VktXtVBef99mwqV3h%2Bx6Mh602lLnx5hZSPQLnLpOp4yXoN5m1dQpSQYvoFlQTrQerVTFG6lqzqYnrKDyRmlEXJvz6ruFjsMqcZumzX4VUvvUbXPByT3cQfii%2F4EJ29%2BB5SrrJEhs%2BqsHTntl%2FwUWOq4KNeA24Bf2KOYK%2Bi1Huq3dzEaaRXfRXHjTJ%2BUGK5Bk6AvhqdDdcWJ9ykEPyM33u5v0lJ%2B%2BMIUUUGf8aKZjL3ri5AZCRlEtl2aSV%2BhiKL3LQKVTynu5uEKRq1gqCe8Z6u5J4nliAWtKwtb%2BA38NqlUaba8%2FGIzNZrsi1KLkaVFQx78wZdTNkBspxbY7odcnLOFOoT7BhomRKBAXWt4Nto3f39a26Aq%2FDI6YZNzlmL44a9PvzQIVl8HE0BKaB65xTWFSzd56%2BO2nwgEerkFVnTO2pLYuwtCRpV3NrNQ8C2zevdmitGVLdbDNkjtZ7%2F89SaXNQQt3ztTwX0dpwVOVWF8njPC9%2FEaydenyojayE3yDsC4ONIf2CI%2BMTA7Ud%2B7zCFkmERxKudgIu4srVXUKgI8NuyKWfRzDegrK%2BBjqkAbzTuw7g4nkM%2FKWuMOZkAPkVYLX79GmJOh9X8LLagsQF9fMSWLFs9KqiNu273WfZRAvh8lH%2BOGztvo%2BRzXlgsPwVeKG7cxhi10wIpunaVr3VmmJzW7Ow3ta%2Bd8eUG6M48juC%2BspUmxt1%2BJ7VG%2BRq6mOvBTc8tGpZexbXZa6IrduiL2qel8WYIZC1LUTpzG07CqXllL3ja3%2FQ4sk1PUpevrlXCF6s&X-Amz-Signature=108d6dc61997a512f8f32ce6a1ce6450f0e05424cb3009b4ee483d01ca3e23d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7I765TK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuS2sP6T63%2FI%2FQ1duMOhRK6ocLmcXxHtGClJtxx8lfbgIhAKBuSn32IlPtSFcgIt2%2F2iH8kBL4Dw1rZNyg9QpwK94zKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKGhTgJ%2BGMEbhkoysq3AMrhkbI7w%2FOcr%2BpWu1h7DRMqgCB6eJXFx%2BD86qCgrJO8P53yjIQzE6nmUUotAUtjg7gKq3xs85VktXtVBef99mwqV3h%2Bx6Mh602lLnx5hZSPQLnLpOp4yXoN5m1dQpSQYvoFlQTrQerVTFG6lqzqYnrKDyRmlEXJvz6ruFjsMqcZumzX4VUvvUbXPByT3cQfii%2F4EJ29%2BB5SrrJEhs%2BqsHTntl%2FwUWOq4KNeA24Bf2KOYK%2Bi1Huq3dzEaaRXfRXHjTJ%2BUGK5Bk6AvhqdDdcWJ9ykEPyM33u5v0lJ%2B%2BMIUUUGf8aKZjL3ri5AZCRlEtl2aSV%2BhiKL3LQKVTynu5uEKRq1gqCe8Z6u5J4nliAWtKwtb%2BA38NqlUaba8%2FGIzNZrsi1KLkaVFQx78wZdTNkBspxbY7odcnLOFOoT7BhomRKBAXWt4Nto3f39a26Aq%2FDI6YZNzlmL44a9PvzQIVl8HE0BKaB65xTWFSzd56%2BO2nwgEerkFVnTO2pLYuwtCRpV3NrNQ8C2zevdmitGVLdbDNkjtZ7%2F89SaXNQQt3ztTwX0dpwVOVWF8njPC9%2FEaydenyojayE3yDsC4ONIf2CI%2BMTA7Ud%2B7zCFkmERxKudgIu4srVXUKgI8NuyKWfRzDegrK%2BBjqkAbzTuw7g4nkM%2FKWuMOZkAPkVYLX79GmJOh9X8LLagsQF9fMSWLFs9KqiNu273WfZRAvh8lH%2BOGztvo%2BRzXlgsPwVeKG7cxhi10wIpunaVr3VmmJzW7Ow3ta%2Bd8eUG6M48juC%2BspUmxt1%2BJ7VG%2BRq6mOvBTc8tGpZexbXZa6IrduiL2qel8WYIZC1LUTpzG07CqXllL3ja3%2FQ4sk1PUpevrlXCF6s&X-Amz-Signature=734aace4c83a87f5d5a6dd78a4f4bc5d4e821b01c10faad308f7abdb5bf73988&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7I765TK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuS2sP6T63%2FI%2FQ1duMOhRK6ocLmcXxHtGClJtxx8lfbgIhAKBuSn32IlPtSFcgIt2%2F2iH8kBL4Dw1rZNyg9QpwK94zKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKGhTgJ%2BGMEbhkoysq3AMrhkbI7w%2FOcr%2BpWu1h7DRMqgCB6eJXFx%2BD86qCgrJO8P53yjIQzE6nmUUotAUtjg7gKq3xs85VktXtVBef99mwqV3h%2Bx6Mh602lLnx5hZSPQLnLpOp4yXoN5m1dQpSQYvoFlQTrQerVTFG6lqzqYnrKDyRmlEXJvz6ruFjsMqcZumzX4VUvvUbXPByT3cQfii%2F4EJ29%2BB5SrrJEhs%2BqsHTntl%2FwUWOq4KNeA24Bf2KOYK%2Bi1Huq3dzEaaRXfRXHjTJ%2BUGK5Bk6AvhqdDdcWJ9ykEPyM33u5v0lJ%2B%2BMIUUUGf8aKZjL3ri5AZCRlEtl2aSV%2BhiKL3LQKVTynu5uEKRq1gqCe8Z6u5J4nliAWtKwtb%2BA38NqlUaba8%2FGIzNZrsi1KLkaVFQx78wZdTNkBspxbY7odcnLOFOoT7BhomRKBAXWt4Nto3f39a26Aq%2FDI6YZNzlmL44a9PvzQIVl8HE0BKaB65xTWFSzd56%2BO2nwgEerkFVnTO2pLYuwtCRpV3NrNQ8C2zevdmitGVLdbDNkjtZ7%2F89SaXNQQt3ztTwX0dpwVOVWF8njPC9%2FEaydenyojayE3yDsC4ONIf2CI%2BMTA7Ud%2B7zCFkmERxKudgIu4srVXUKgI8NuyKWfRzDegrK%2BBjqkAbzTuw7g4nkM%2FKWuMOZkAPkVYLX79GmJOh9X8LLagsQF9fMSWLFs9KqiNu273WfZRAvh8lH%2BOGztvo%2BRzXlgsPwVeKG7cxhi10wIpunaVr3VmmJzW7Ow3ta%2Bd8eUG6M48juC%2BspUmxt1%2BJ7VG%2BRq6mOvBTc8tGpZexbXZa6IrduiL2qel8WYIZC1LUTpzG07CqXllL3ja3%2FQ4sk1PUpevrlXCF6s&X-Amz-Signature=a997703bedfb1cc946e0c21cf7e3abb719721da0a5ef30e1c285ae2da66a8d4c&X-Amz-SignedHeaders=host&x-id=GetObject)
