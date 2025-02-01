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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY6BJO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFlcFQlj4Bbq9gwTaXVRFtdrdmp%2Bwn6YUVluxg%2B9l%2FQIhAL7DPSeXUOSP3iNuAHVHrZzEXPVE4%2FDD1O2uMGL6xdfrKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOjA0pLaZd2PAu4boq3AOd%2Fip706TC6mfFPHTMaeGJ1d2%2B8eP4DW6mqc09i5VCVQA7t%2B59JfN8wzb473Z9Fr07ZXN474Ozerx31Ara%2BT%2FvWUe5elIUU01g3ZOPFcpBz5U%2Fhe9h2xMSRC89y5HIeeFEHAFnzuswLgZdnqtzVU%2Bg%2BQ4Di1GW7iqvsvFE1tUnB7D%2FvTYXDS5IKyYSC3hcKJBwjWSwNuCw6fM5WE8hcHJjHuCXJtJkMyXFwcJlcFDQR%2B1FU%2FWhf194ZNVWxSXOAMIffS4ZZOslx%2FU2Os4ZiAlVzt7Yo9OIkbsUZH3tl81%2BGOrh9v4mvndaEHxaJp1dNbMLdkIixL1Lj5ISGhVfdDqFGD3pPO0UQBO6FJ3CjnRBcYrFXglQXbZl%2BJCLW2mxnE7eYvaTEumTx4r1u4wA2DZpEMHlerKBNFn7zZQRl2A1EFP2z2kwGF05DsUD6YWQUgPJRt5gd0H1%2FE0VwBfKprcOQ6eHJm8zQT7yXQl%2BX0jU5PufapUWe8uuHpyTkm6LgbbFDqkTCrasjWA%2FCI8vZOLmMDYJD2eeKItttJJnTgx2Hi2WOphQCGRcIGYcGHe3giC%2BeSSqmWxpYh4Laf%2B0%2BXKcIYT5MKY3A%2FvNNr52L9wZtzmTQ02h%2FuCxUxp8FzCGw%2Fa8BjqkAVas856VL%2FTv%2F3loYXFI17qYARKlqK0LkKiP%2BW3qNZEjXCoBMAeU0KzOn1BAHZZAUTSEZy%2Fa1mYOEpmLswDqVnruG7vQw%2BXtzcP4kY%2B9XLWcGEh9%2FqeMQJzJoLMxAhPXARIpo4LWP%2B3r5H3W9ti%2FmpR0QSPmqelKyaYbYGdYByEvCsUmEXSvjkCNBPtrWESHzhNzOGnxuJrAzibDWb25AtY8VTWs&X-Amz-Signature=ad2283fbfb284d3b1608e8aed7cfdac137646a99ce97662032d75489e9c811e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY6BJO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFlcFQlj4Bbq9gwTaXVRFtdrdmp%2Bwn6YUVluxg%2B9l%2FQIhAL7DPSeXUOSP3iNuAHVHrZzEXPVE4%2FDD1O2uMGL6xdfrKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOjA0pLaZd2PAu4boq3AOd%2Fip706TC6mfFPHTMaeGJ1d2%2B8eP4DW6mqc09i5VCVQA7t%2B59JfN8wzb473Z9Fr07ZXN474Ozerx31Ara%2BT%2FvWUe5elIUU01g3ZOPFcpBz5U%2Fhe9h2xMSRC89y5HIeeFEHAFnzuswLgZdnqtzVU%2Bg%2BQ4Di1GW7iqvsvFE1tUnB7D%2FvTYXDS5IKyYSC3hcKJBwjWSwNuCw6fM5WE8hcHJjHuCXJtJkMyXFwcJlcFDQR%2B1FU%2FWhf194ZNVWxSXOAMIffS4ZZOslx%2FU2Os4ZiAlVzt7Yo9OIkbsUZH3tl81%2BGOrh9v4mvndaEHxaJp1dNbMLdkIixL1Lj5ISGhVfdDqFGD3pPO0UQBO6FJ3CjnRBcYrFXglQXbZl%2BJCLW2mxnE7eYvaTEumTx4r1u4wA2DZpEMHlerKBNFn7zZQRl2A1EFP2z2kwGF05DsUD6YWQUgPJRt5gd0H1%2FE0VwBfKprcOQ6eHJm8zQT7yXQl%2BX0jU5PufapUWe8uuHpyTkm6LgbbFDqkTCrasjWA%2FCI8vZOLmMDYJD2eeKItttJJnTgx2Hi2WOphQCGRcIGYcGHe3giC%2BeSSqmWxpYh4Laf%2B0%2BXKcIYT5MKY3A%2FvNNr52L9wZtzmTQ02h%2FuCxUxp8FzCGw%2Fa8BjqkAVas856VL%2FTv%2F3loYXFI17qYARKlqK0LkKiP%2BW3qNZEjXCoBMAeU0KzOn1BAHZZAUTSEZy%2Fa1mYOEpmLswDqVnruG7vQw%2BXtzcP4kY%2B9XLWcGEh9%2FqeMQJzJoLMxAhPXARIpo4LWP%2B3r5H3W9ti%2FmpR0QSPmqelKyaYbYGdYByEvCsUmEXSvjkCNBPtrWESHzhNzOGnxuJrAzibDWb25AtY8VTWs&X-Amz-Signature=39ddebba891c09ac61d959d7daac211f9eae86cda57eef941432b17e7b2dc3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY6BJO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFlcFQlj4Bbq9gwTaXVRFtdrdmp%2Bwn6YUVluxg%2B9l%2FQIhAL7DPSeXUOSP3iNuAHVHrZzEXPVE4%2FDD1O2uMGL6xdfrKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOjA0pLaZd2PAu4boq3AOd%2Fip706TC6mfFPHTMaeGJ1d2%2B8eP4DW6mqc09i5VCVQA7t%2B59JfN8wzb473Z9Fr07ZXN474Ozerx31Ara%2BT%2FvWUe5elIUU01g3ZOPFcpBz5U%2Fhe9h2xMSRC89y5HIeeFEHAFnzuswLgZdnqtzVU%2Bg%2BQ4Di1GW7iqvsvFE1tUnB7D%2FvTYXDS5IKyYSC3hcKJBwjWSwNuCw6fM5WE8hcHJjHuCXJtJkMyXFwcJlcFDQR%2B1FU%2FWhf194ZNVWxSXOAMIffS4ZZOslx%2FU2Os4ZiAlVzt7Yo9OIkbsUZH3tl81%2BGOrh9v4mvndaEHxaJp1dNbMLdkIixL1Lj5ISGhVfdDqFGD3pPO0UQBO6FJ3CjnRBcYrFXglQXbZl%2BJCLW2mxnE7eYvaTEumTx4r1u4wA2DZpEMHlerKBNFn7zZQRl2A1EFP2z2kwGF05DsUD6YWQUgPJRt5gd0H1%2FE0VwBfKprcOQ6eHJm8zQT7yXQl%2BX0jU5PufapUWe8uuHpyTkm6LgbbFDqkTCrasjWA%2FCI8vZOLmMDYJD2eeKItttJJnTgx2Hi2WOphQCGRcIGYcGHe3giC%2BeSSqmWxpYh4Laf%2B0%2BXKcIYT5MKY3A%2FvNNr52L9wZtzmTQ02h%2FuCxUxp8FzCGw%2Fa8BjqkAVas856VL%2FTv%2F3loYXFI17qYARKlqK0LkKiP%2BW3qNZEjXCoBMAeU0KzOn1BAHZZAUTSEZy%2Fa1mYOEpmLswDqVnruG7vQw%2BXtzcP4kY%2B9XLWcGEh9%2FqeMQJzJoLMxAhPXARIpo4LWP%2B3r5H3W9ti%2FmpR0QSPmqelKyaYbYGdYByEvCsUmEXSvjkCNBPtrWESHzhNzOGnxuJrAzibDWb25AtY8VTWs&X-Amz-Signature=8e92ff6c6602ec7915de8ebfa617fb1ca01fd14c15a7b4d77360a553ee3b3593&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY6BJO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFlcFQlj4Bbq9gwTaXVRFtdrdmp%2Bwn6YUVluxg%2B9l%2FQIhAL7DPSeXUOSP3iNuAHVHrZzEXPVE4%2FDD1O2uMGL6xdfrKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOjA0pLaZd2PAu4boq3AOd%2Fip706TC6mfFPHTMaeGJ1d2%2B8eP4DW6mqc09i5VCVQA7t%2B59JfN8wzb473Z9Fr07ZXN474Ozerx31Ara%2BT%2FvWUe5elIUU01g3ZOPFcpBz5U%2Fhe9h2xMSRC89y5HIeeFEHAFnzuswLgZdnqtzVU%2Bg%2BQ4Di1GW7iqvsvFE1tUnB7D%2FvTYXDS5IKyYSC3hcKJBwjWSwNuCw6fM5WE8hcHJjHuCXJtJkMyXFwcJlcFDQR%2B1FU%2FWhf194ZNVWxSXOAMIffS4ZZOslx%2FU2Os4ZiAlVzt7Yo9OIkbsUZH3tl81%2BGOrh9v4mvndaEHxaJp1dNbMLdkIixL1Lj5ISGhVfdDqFGD3pPO0UQBO6FJ3CjnRBcYrFXglQXbZl%2BJCLW2mxnE7eYvaTEumTx4r1u4wA2DZpEMHlerKBNFn7zZQRl2A1EFP2z2kwGF05DsUD6YWQUgPJRt5gd0H1%2FE0VwBfKprcOQ6eHJm8zQT7yXQl%2BX0jU5PufapUWe8uuHpyTkm6LgbbFDqkTCrasjWA%2FCI8vZOLmMDYJD2eeKItttJJnTgx2Hi2WOphQCGRcIGYcGHe3giC%2BeSSqmWxpYh4Laf%2B0%2BXKcIYT5MKY3A%2FvNNr52L9wZtzmTQ02h%2FuCxUxp8FzCGw%2Fa8BjqkAVas856VL%2FTv%2F3loYXFI17qYARKlqK0LkKiP%2BW3qNZEjXCoBMAeU0KzOn1BAHZZAUTSEZy%2Fa1mYOEpmLswDqVnruG7vQw%2BXtzcP4kY%2B9XLWcGEh9%2FqeMQJzJoLMxAhPXARIpo4LWP%2B3r5H3W9ti%2FmpR0QSPmqelKyaYbYGdYByEvCsUmEXSvjkCNBPtrWESHzhNzOGnxuJrAzibDWb25AtY8VTWs&X-Amz-Signature=7c9e5f78f81da1f6f249ba2f2f9317543eae9158f60818dca3305ea09b6ec9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY6BJO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFlcFQlj4Bbq9gwTaXVRFtdrdmp%2Bwn6YUVluxg%2B9l%2FQIhAL7DPSeXUOSP3iNuAHVHrZzEXPVE4%2FDD1O2uMGL6xdfrKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOjA0pLaZd2PAu4boq3AOd%2Fip706TC6mfFPHTMaeGJ1d2%2B8eP4DW6mqc09i5VCVQA7t%2B59JfN8wzb473Z9Fr07ZXN474Ozerx31Ara%2BT%2FvWUe5elIUU01g3ZOPFcpBz5U%2Fhe9h2xMSRC89y5HIeeFEHAFnzuswLgZdnqtzVU%2Bg%2BQ4Di1GW7iqvsvFE1tUnB7D%2FvTYXDS5IKyYSC3hcKJBwjWSwNuCw6fM5WE8hcHJjHuCXJtJkMyXFwcJlcFDQR%2B1FU%2FWhf194ZNVWxSXOAMIffS4ZZOslx%2FU2Os4ZiAlVzt7Yo9OIkbsUZH3tl81%2BGOrh9v4mvndaEHxaJp1dNbMLdkIixL1Lj5ISGhVfdDqFGD3pPO0UQBO6FJ3CjnRBcYrFXglQXbZl%2BJCLW2mxnE7eYvaTEumTx4r1u4wA2DZpEMHlerKBNFn7zZQRl2A1EFP2z2kwGF05DsUD6YWQUgPJRt5gd0H1%2FE0VwBfKprcOQ6eHJm8zQT7yXQl%2BX0jU5PufapUWe8uuHpyTkm6LgbbFDqkTCrasjWA%2FCI8vZOLmMDYJD2eeKItttJJnTgx2Hi2WOphQCGRcIGYcGHe3giC%2BeSSqmWxpYh4Laf%2B0%2BXKcIYT5MKY3A%2FvNNr52L9wZtzmTQ02h%2FuCxUxp8FzCGw%2Fa8BjqkAVas856VL%2FTv%2F3loYXFI17qYARKlqK0LkKiP%2BW3qNZEjXCoBMAeU0KzOn1BAHZZAUTSEZy%2Fa1mYOEpmLswDqVnruG7vQw%2BXtzcP4kY%2B9XLWcGEh9%2FqeMQJzJoLMxAhPXARIpo4LWP%2B3r5H3W9ti%2FmpR0QSPmqelKyaYbYGdYByEvCsUmEXSvjkCNBPtrWESHzhNzOGnxuJrAzibDWb25AtY8VTWs&X-Amz-Signature=9813bfa89004fbbe5956bcf2e5c3f61f1d1ece4bb6fb05a5126217c377a4efd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY6BJO3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQFlcFQlj4Bbq9gwTaXVRFtdrdmp%2Bwn6YUVluxg%2B9l%2FQIhAL7DPSeXUOSP3iNuAHVHrZzEXPVE4%2FDD1O2uMGL6xdfrKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOjA0pLaZd2PAu4boq3AOd%2Fip706TC6mfFPHTMaeGJ1d2%2B8eP4DW6mqc09i5VCVQA7t%2B59JfN8wzb473Z9Fr07ZXN474Ozerx31Ara%2BT%2FvWUe5elIUU01g3ZOPFcpBz5U%2Fhe9h2xMSRC89y5HIeeFEHAFnzuswLgZdnqtzVU%2Bg%2BQ4Di1GW7iqvsvFE1tUnB7D%2FvTYXDS5IKyYSC3hcKJBwjWSwNuCw6fM5WE8hcHJjHuCXJtJkMyXFwcJlcFDQR%2B1FU%2FWhf194ZNVWxSXOAMIffS4ZZOslx%2FU2Os4ZiAlVzt7Yo9OIkbsUZH3tl81%2BGOrh9v4mvndaEHxaJp1dNbMLdkIixL1Lj5ISGhVfdDqFGD3pPO0UQBO6FJ3CjnRBcYrFXglQXbZl%2BJCLW2mxnE7eYvaTEumTx4r1u4wA2DZpEMHlerKBNFn7zZQRl2A1EFP2z2kwGF05DsUD6YWQUgPJRt5gd0H1%2FE0VwBfKprcOQ6eHJm8zQT7yXQl%2BX0jU5PufapUWe8uuHpyTkm6LgbbFDqkTCrasjWA%2FCI8vZOLmMDYJD2eeKItttJJnTgx2Hi2WOphQCGRcIGYcGHe3giC%2BeSSqmWxpYh4Laf%2B0%2BXKcIYT5MKY3A%2FvNNr52L9wZtzmTQ02h%2FuCxUxp8FzCGw%2Fa8BjqkAVas856VL%2FTv%2F3loYXFI17qYARKlqK0LkKiP%2BW3qNZEjXCoBMAeU0KzOn1BAHZZAUTSEZy%2Fa1mYOEpmLswDqVnruG7vQw%2BXtzcP4kY%2B9XLWcGEh9%2FqeMQJzJoLMxAhPXARIpo4LWP%2B3r5H3W9ti%2FmpR0QSPmqelKyaYbYGdYByEvCsUmEXSvjkCNBPtrWESHzhNzOGnxuJrAzibDWb25AtY8VTWs&X-Amz-Signature=59568e9f2886b71d8e4f06107676a5cf8a0c8298f44c2f1ff7f8087277c47f87&X-Amz-SignedHeaders=host&x-id=GetObject)
