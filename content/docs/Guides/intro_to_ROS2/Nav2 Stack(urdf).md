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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEYOAN3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbn%2BhJ2Nhug7qpraab6%2FD%2FcDAri3LrfCVErIDp6n1tAIgRmNRXwn9aTkEjX9zYFaYwColUsOnrbGBSosdbmZnmfIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlfh9UKpI2znoTSDyrcA%2FC%2FxTtxQ7aCpcOY4iR9wgpjMPHEiXDgIuyzLDjwcL6l%2FjVw4%2BIats%2BFDAOArN5s3dHlUo24DtY4h07GITnnTB1Ipi5%2F7lGFu5CbYtdylWtakXzMDJPcwU2BxL69zrvRhLnm7Mjrw9wzkMcuakdblgRiR0BdBp8PGyOTPSvJCBnSZK7RBHz4nsD%2BigerQHBtb20X1b62GyFgqXFZdqHM2c9I%2BU8PBlwlPSGi2LmeNDlnc1PTvpTlhH%2BXcMx%2Fy%2Fij7CcttJxoM%2BOV65zvl1iUo9mLicYZV7v8Vace9uvfga4wDcUr%2B9EhnSPN0B0Y%2F31ZojNGqQY30UQw8k74LTyqLtE6VswhGyGPGfGiSMNCLQrPSGvAbknLTsdF9th98e0vLtrzhp8f5AasucrxpjAJVQkcthWbGmg06OdenNUSZYgg%2BnF0ld9B25yPv8anax9oUNrhNM7QGVzM60crVU8FEUQgrc4mp32nTwd4xnupdFmjrjRe5r9AMe8flMcNppK7AN000nSwoKxEdxK2Pi7%2FdxA0nxGB%2B6niTLIlmrDxJGEnfb%2BYc1j5IZHvJ4uuGSrS7r%2FDxPwdDpYarSp3yFhAIqQ2R67rRTPMgS2SgBq9REJRywjMC%2FgHcTCqoOF3MOTFm74GOqUBrbCqxokjyzgtyVsepFqLkS6JXZfglBwq3yhtsS7%2FC9Kwh7UjFGh25haN0H5p%2BqEdt87DhgdvchseQYgSdCrSQA5W%2B0NJSgovjTcJnGCO7RBAsyMgexfzl%2BFaRhnVVUcNwGQ%2Be6e6GZwgyJo3s13%2BALzI4tF0vB6iRvdNxZpluO%2Bc%2BcKsBq2jpU7tl8ZuPnDloE1FkUEy7rdxS8VZ1%2FGclypVxuSZ&X-Amz-Signature=5d3720b9335d6985825c7c63b1eb16ff37c4bd7e54996b05763d8f225f332f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEYOAN3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbn%2BhJ2Nhug7qpraab6%2FD%2FcDAri3LrfCVErIDp6n1tAIgRmNRXwn9aTkEjX9zYFaYwColUsOnrbGBSosdbmZnmfIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlfh9UKpI2znoTSDyrcA%2FC%2FxTtxQ7aCpcOY4iR9wgpjMPHEiXDgIuyzLDjwcL6l%2FjVw4%2BIats%2BFDAOArN5s3dHlUo24DtY4h07GITnnTB1Ipi5%2F7lGFu5CbYtdylWtakXzMDJPcwU2BxL69zrvRhLnm7Mjrw9wzkMcuakdblgRiR0BdBp8PGyOTPSvJCBnSZK7RBHz4nsD%2BigerQHBtb20X1b62GyFgqXFZdqHM2c9I%2BU8PBlwlPSGi2LmeNDlnc1PTvpTlhH%2BXcMx%2Fy%2Fij7CcttJxoM%2BOV65zvl1iUo9mLicYZV7v8Vace9uvfga4wDcUr%2B9EhnSPN0B0Y%2F31ZojNGqQY30UQw8k74LTyqLtE6VswhGyGPGfGiSMNCLQrPSGvAbknLTsdF9th98e0vLtrzhp8f5AasucrxpjAJVQkcthWbGmg06OdenNUSZYgg%2BnF0ld9B25yPv8anax9oUNrhNM7QGVzM60crVU8FEUQgrc4mp32nTwd4xnupdFmjrjRe5r9AMe8flMcNppK7AN000nSwoKxEdxK2Pi7%2FdxA0nxGB%2B6niTLIlmrDxJGEnfb%2BYc1j5IZHvJ4uuGSrS7r%2FDxPwdDpYarSp3yFhAIqQ2R67rRTPMgS2SgBq9REJRywjMC%2FgHcTCqoOF3MOTFm74GOqUBrbCqxokjyzgtyVsepFqLkS6JXZfglBwq3yhtsS7%2FC9Kwh7UjFGh25haN0H5p%2BqEdt87DhgdvchseQYgSdCrSQA5W%2B0NJSgovjTcJnGCO7RBAsyMgexfzl%2BFaRhnVVUcNwGQ%2Be6e6GZwgyJo3s13%2BALzI4tF0vB6iRvdNxZpluO%2Bc%2BcKsBq2jpU7tl8ZuPnDloE1FkUEy7rdxS8VZ1%2FGclypVxuSZ&X-Amz-Signature=c3f57c6cdd08f9c32e0346fa608ac97aae63ded8b7bc644d408035ca3805e5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEYOAN3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbn%2BhJ2Nhug7qpraab6%2FD%2FcDAri3LrfCVErIDp6n1tAIgRmNRXwn9aTkEjX9zYFaYwColUsOnrbGBSosdbmZnmfIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlfh9UKpI2znoTSDyrcA%2FC%2FxTtxQ7aCpcOY4iR9wgpjMPHEiXDgIuyzLDjwcL6l%2FjVw4%2BIats%2BFDAOArN5s3dHlUo24DtY4h07GITnnTB1Ipi5%2F7lGFu5CbYtdylWtakXzMDJPcwU2BxL69zrvRhLnm7Mjrw9wzkMcuakdblgRiR0BdBp8PGyOTPSvJCBnSZK7RBHz4nsD%2BigerQHBtb20X1b62GyFgqXFZdqHM2c9I%2BU8PBlwlPSGi2LmeNDlnc1PTvpTlhH%2BXcMx%2Fy%2Fij7CcttJxoM%2BOV65zvl1iUo9mLicYZV7v8Vace9uvfga4wDcUr%2B9EhnSPN0B0Y%2F31ZojNGqQY30UQw8k74LTyqLtE6VswhGyGPGfGiSMNCLQrPSGvAbknLTsdF9th98e0vLtrzhp8f5AasucrxpjAJVQkcthWbGmg06OdenNUSZYgg%2BnF0ld9B25yPv8anax9oUNrhNM7QGVzM60crVU8FEUQgrc4mp32nTwd4xnupdFmjrjRe5r9AMe8flMcNppK7AN000nSwoKxEdxK2Pi7%2FdxA0nxGB%2B6niTLIlmrDxJGEnfb%2BYc1j5IZHvJ4uuGSrS7r%2FDxPwdDpYarSp3yFhAIqQ2R67rRTPMgS2SgBq9REJRywjMC%2FgHcTCqoOF3MOTFm74GOqUBrbCqxokjyzgtyVsepFqLkS6JXZfglBwq3yhtsS7%2FC9Kwh7UjFGh25haN0H5p%2BqEdt87DhgdvchseQYgSdCrSQA5W%2B0NJSgovjTcJnGCO7RBAsyMgexfzl%2BFaRhnVVUcNwGQ%2Be6e6GZwgyJo3s13%2BALzI4tF0vB6iRvdNxZpluO%2Bc%2BcKsBq2jpU7tl8ZuPnDloE1FkUEy7rdxS8VZ1%2FGclypVxuSZ&X-Amz-Signature=77c0e181ce315b82f2de0d16063af0e475956931d563af58abeec6c890063443&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEYOAN3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbn%2BhJ2Nhug7qpraab6%2FD%2FcDAri3LrfCVErIDp6n1tAIgRmNRXwn9aTkEjX9zYFaYwColUsOnrbGBSosdbmZnmfIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlfh9UKpI2znoTSDyrcA%2FC%2FxTtxQ7aCpcOY4iR9wgpjMPHEiXDgIuyzLDjwcL6l%2FjVw4%2BIats%2BFDAOArN5s3dHlUo24DtY4h07GITnnTB1Ipi5%2F7lGFu5CbYtdylWtakXzMDJPcwU2BxL69zrvRhLnm7Mjrw9wzkMcuakdblgRiR0BdBp8PGyOTPSvJCBnSZK7RBHz4nsD%2BigerQHBtb20X1b62GyFgqXFZdqHM2c9I%2BU8PBlwlPSGi2LmeNDlnc1PTvpTlhH%2BXcMx%2Fy%2Fij7CcttJxoM%2BOV65zvl1iUo9mLicYZV7v8Vace9uvfga4wDcUr%2B9EhnSPN0B0Y%2F31ZojNGqQY30UQw8k74LTyqLtE6VswhGyGPGfGiSMNCLQrPSGvAbknLTsdF9th98e0vLtrzhp8f5AasucrxpjAJVQkcthWbGmg06OdenNUSZYgg%2BnF0ld9B25yPv8anax9oUNrhNM7QGVzM60crVU8FEUQgrc4mp32nTwd4xnupdFmjrjRe5r9AMe8flMcNppK7AN000nSwoKxEdxK2Pi7%2FdxA0nxGB%2B6niTLIlmrDxJGEnfb%2BYc1j5IZHvJ4uuGSrS7r%2FDxPwdDpYarSp3yFhAIqQ2R67rRTPMgS2SgBq9REJRywjMC%2FgHcTCqoOF3MOTFm74GOqUBrbCqxokjyzgtyVsepFqLkS6JXZfglBwq3yhtsS7%2FC9Kwh7UjFGh25haN0H5p%2BqEdt87DhgdvchseQYgSdCrSQA5W%2B0NJSgovjTcJnGCO7RBAsyMgexfzl%2BFaRhnVVUcNwGQ%2Be6e6GZwgyJo3s13%2BALzI4tF0vB6iRvdNxZpluO%2Bc%2BcKsBq2jpU7tl8ZuPnDloE1FkUEy7rdxS8VZ1%2FGclypVxuSZ&X-Amz-Signature=fbf9994c3d958284b1dff27879656a61784cc433a9064b0fcd4fc6e3f413f91d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEYOAN3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbn%2BhJ2Nhug7qpraab6%2FD%2FcDAri3LrfCVErIDp6n1tAIgRmNRXwn9aTkEjX9zYFaYwColUsOnrbGBSosdbmZnmfIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlfh9UKpI2znoTSDyrcA%2FC%2FxTtxQ7aCpcOY4iR9wgpjMPHEiXDgIuyzLDjwcL6l%2FjVw4%2BIats%2BFDAOArN5s3dHlUo24DtY4h07GITnnTB1Ipi5%2F7lGFu5CbYtdylWtakXzMDJPcwU2BxL69zrvRhLnm7Mjrw9wzkMcuakdblgRiR0BdBp8PGyOTPSvJCBnSZK7RBHz4nsD%2BigerQHBtb20X1b62GyFgqXFZdqHM2c9I%2BU8PBlwlPSGi2LmeNDlnc1PTvpTlhH%2BXcMx%2Fy%2Fij7CcttJxoM%2BOV65zvl1iUo9mLicYZV7v8Vace9uvfga4wDcUr%2B9EhnSPN0B0Y%2F31ZojNGqQY30UQw8k74LTyqLtE6VswhGyGPGfGiSMNCLQrPSGvAbknLTsdF9th98e0vLtrzhp8f5AasucrxpjAJVQkcthWbGmg06OdenNUSZYgg%2BnF0ld9B25yPv8anax9oUNrhNM7QGVzM60crVU8FEUQgrc4mp32nTwd4xnupdFmjrjRe5r9AMe8flMcNppK7AN000nSwoKxEdxK2Pi7%2FdxA0nxGB%2B6niTLIlmrDxJGEnfb%2BYc1j5IZHvJ4uuGSrS7r%2FDxPwdDpYarSp3yFhAIqQ2R67rRTPMgS2SgBq9REJRywjMC%2FgHcTCqoOF3MOTFm74GOqUBrbCqxokjyzgtyVsepFqLkS6JXZfglBwq3yhtsS7%2FC9Kwh7UjFGh25haN0H5p%2BqEdt87DhgdvchseQYgSdCrSQA5W%2B0NJSgovjTcJnGCO7RBAsyMgexfzl%2BFaRhnVVUcNwGQ%2Be6e6GZwgyJo3s13%2BALzI4tF0vB6iRvdNxZpluO%2Bc%2BcKsBq2jpU7tl8ZuPnDloE1FkUEy7rdxS8VZ1%2FGclypVxuSZ&X-Amz-Signature=b2332f7af14acaa14d8cd9a14d329790bf767d1442215d18f980ab145a3d680c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEYOAN3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSbn%2BhJ2Nhug7qpraab6%2FD%2FcDAri3LrfCVErIDp6n1tAIgRmNRXwn9aTkEjX9zYFaYwColUsOnrbGBSosdbmZnmfIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlfh9UKpI2znoTSDyrcA%2FC%2FxTtxQ7aCpcOY4iR9wgpjMPHEiXDgIuyzLDjwcL6l%2FjVw4%2BIats%2BFDAOArN5s3dHlUo24DtY4h07GITnnTB1Ipi5%2F7lGFu5CbYtdylWtakXzMDJPcwU2BxL69zrvRhLnm7Mjrw9wzkMcuakdblgRiR0BdBp8PGyOTPSvJCBnSZK7RBHz4nsD%2BigerQHBtb20X1b62GyFgqXFZdqHM2c9I%2BU8PBlwlPSGi2LmeNDlnc1PTvpTlhH%2BXcMx%2Fy%2Fij7CcttJxoM%2BOV65zvl1iUo9mLicYZV7v8Vace9uvfga4wDcUr%2B9EhnSPN0B0Y%2F31ZojNGqQY30UQw8k74LTyqLtE6VswhGyGPGfGiSMNCLQrPSGvAbknLTsdF9th98e0vLtrzhp8f5AasucrxpjAJVQkcthWbGmg06OdenNUSZYgg%2BnF0ld9B25yPv8anax9oUNrhNM7QGVzM60crVU8FEUQgrc4mp32nTwd4xnupdFmjrjRe5r9AMe8flMcNppK7AN000nSwoKxEdxK2Pi7%2FdxA0nxGB%2B6niTLIlmrDxJGEnfb%2BYc1j5IZHvJ4uuGSrS7r%2FDxPwdDpYarSp3yFhAIqQ2R67rRTPMgS2SgBq9REJRywjMC%2FgHcTCqoOF3MOTFm74GOqUBrbCqxokjyzgtyVsepFqLkS6JXZfglBwq3yhtsS7%2FC9Kwh7UjFGh25haN0H5p%2BqEdt87DhgdvchseQYgSdCrSQA5W%2B0NJSgovjTcJnGCO7RBAsyMgexfzl%2BFaRhnVVUcNwGQ%2Be6e6GZwgyJo3s13%2BALzI4tF0vB6iRvdNxZpluO%2Bc%2BcKsBq2jpU7tl8ZuPnDloE1FkUEy7rdxS8VZ1%2FGclypVxuSZ&X-Amz-Signature=9d6766d3239512159caf74e83300c4031e46aef64befa5f26b9864a971d5911b&X-Amz-SignedHeaders=host&x-id=GetObject)
