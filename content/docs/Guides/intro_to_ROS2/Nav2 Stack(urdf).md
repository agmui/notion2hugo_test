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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMNOOIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDngxz%2FoYzp%2Ft2rKMmlMoZAgHLE43ZmTemJVxXs0%2BfUyAIhANHU3UBEGeN3pl%2BRhEmp534WxgxsabNInapIxXDeOp0DKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2GCpENrTGdJd8tW8q3ANFsQUPrGasLaXHVTFLee0KfisWBPLZrKjEzcngyrUoKPhwxv09rx%2Fr0DXyRvP%2BMDEbX%2Bruxq6L8B4GKmOhmIyR2BfFPADjhxhfMdk2CBAAZ52NE%2FtKbvXmEcApJXt5B602zMG7h1VhrRgQIoYZZiuTZJZT4%2B80cfcmYFvNEe0jJ3QKpa%2FNlqyl17T9YIf3VQb1V9rfAO2ZjktlCU7URvh3Zn7LCUkKJQ32AUNgex5QbI1r6Q84egsL2rOp6ser%2BBHkEgNybfNqmzDimVLcKnWgLpSQnvXBKAVvmAwvXaEEKHR2HQLr1Jn1lB%2FwqSA4su2IRAqw3jwUBOX4Yh2L0qrA%2B8IMS7Xh1CR48dxgx0VDSnnh5cF5LaRVcPpIkPrSN%2FW6lNyRpv8boDDkeCOfu1Mm9GzdWa1Ua1BhxrbAsE0xrD6hOOTHWnu%2BjKe4KLLWU5BoXQQxc%2BcNW38g0J4Ci4EThyXJFn5wKLWeCcInSlR3Aj4IgN6tAEBVkwdVAf1hNnyzXcc5StaJbmo6BiwUZ04sR6pDevGNwbMgtlOkacINYoYla1N9Kv3vdwiu0KXGPc03UheLk1blWd%2BPjeGCqp9qcQ%2Fuoal3r9hCholxA7Ss2pmTam7adeHcNYAn6TC3rYG%2BBjqkAdeNvsRnUNU828nAeicD5WUTo%2F8lTSktiUpV9DiRsb%2BI5lpAT6%2BplqfP%2FoBkNqr7BvkcR9YYbVaifDH4uSKbsAlpOqsvGXS%2F451LhyNgseQMsjcbIMNJnvv6BVVmJTJ1j1tWdwKkvTTjV3N1yn3Y5tHE6gD%2F3X62n3caSvyPmamZIfhCCec3K67BfUcsKV%2Fv8NZ3LBvPrl7nqXY7QuD9DpGIja%2FE&X-Amz-Signature=981e16e7e5130be63e5202197cde615d54004288bff0afcbe998e1a878c0066c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMNOOIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDngxz%2FoYzp%2Ft2rKMmlMoZAgHLE43ZmTemJVxXs0%2BfUyAIhANHU3UBEGeN3pl%2BRhEmp534WxgxsabNInapIxXDeOp0DKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2GCpENrTGdJd8tW8q3ANFsQUPrGasLaXHVTFLee0KfisWBPLZrKjEzcngyrUoKPhwxv09rx%2Fr0DXyRvP%2BMDEbX%2Bruxq6L8B4GKmOhmIyR2BfFPADjhxhfMdk2CBAAZ52NE%2FtKbvXmEcApJXt5B602zMG7h1VhrRgQIoYZZiuTZJZT4%2B80cfcmYFvNEe0jJ3QKpa%2FNlqyl17T9YIf3VQb1V9rfAO2ZjktlCU7URvh3Zn7LCUkKJQ32AUNgex5QbI1r6Q84egsL2rOp6ser%2BBHkEgNybfNqmzDimVLcKnWgLpSQnvXBKAVvmAwvXaEEKHR2HQLr1Jn1lB%2FwqSA4su2IRAqw3jwUBOX4Yh2L0qrA%2B8IMS7Xh1CR48dxgx0VDSnnh5cF5LaRVcPpIkPrSN%2FW6lNyRpv8boDDkeCOfu1Mm9GzdWa1Ua1BhxrbAsE0xrD6hOOTHWnu%2BjKe4KLLWU5BoXQQxc%2BcNW38g0J4Ci4EThyXJFn5wKLWeCcInSlR3Aj4IgN6tAEBVkwdVAf1hNnyzXcc5StaJbmo6BiwUZ04sR6pDevGNwbMgtlOkacINYoYla1N9Kv3vdwiu0KXGPc03UheLk1blWd%2BPjeGCqp9qcQ%2Fuoal3r9hCholxA7Ss2pmTam7adeHcNYAn6TC3rYG%2BBjqkAdeNvsRnUNU828nAeicD5WUTo%2F8lTSktiUpV9DiRsb%2BI5lpAT6%2BplqfP%2FoBkNqr7BvkcR9YYbVaifDH4uSKbsAlpOqsvGXS%2F451LhyNgseQMsjcbIMNJnvv6BVVmJTJ1j1tWdwKkvTTjV3N1yn3Y5tHE6gD%2F3X62n3caSvyPmamZIfhCCec3K67BfUcsKV%2Fv8NZ3LBvPrl7nqXY7QuD9DpGIja%2FE&X-Amz-Signature=8f16df511c4e26eb08127b10096a15236231e52d38943d218a016d13e791d111&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMNOOIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDngxz%2FoYzp%2Ft2rKMmlMoZAgHLE43ZmTemJVxXs0%2BfUyAIhANHU3UBEGeN3pl%2BRhEmp534WxgxsabNInapIxXDeOp0DKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2GCpENrTGdJd8tW8q3ANFsQUPrGasLaXHVTFLee0KfisWBPLZrKjEzcngyrUoKPhwxv09rx%2Fr0DXyRvP%2BMDEbX%2Bruxq6L8B4GKmOhmIyR2BfFPADjhxhfMdk2CBAAZ52NE%2FtKbvXmEcApJXt5B602zMG7h1VhrRgQIoYZZiuTZJZT4%2B80cfcmYFvNEe0jJ3QKpa%2FNlqyl17T9YIf3VQb1V9rfAO2ZjktlCU7URvh3Zn7LCUkKJQ32AUNgex5QbI1r6Q84egsL2rOp6ser%2BBHkEgNybfNqmzDimVLcKnWgLpSQnvXBKAVvmAwvXaEEKHR2HQLr1Jn1lB%2FwqSA4su2IRAqw3jwUBOX4Yh2L0qrA%2B8IMS7Xh1CR48dxgx0VDSnnh5cF5LaRVcPpIkPrSN%2FW6lNyRpv8boDDkeCOfu1Mm9GzdWa1Ua1BhxrbAsE0xrD6hOOTHWnu%2BjKe4KLLWU5BoXQQxc%2BcNW38g0J4Ci4EThyXJFn5wKLWeCcInSlR3Aj4IgN6tAEBVkwdVAf1hNnyzXcc5StaJbmo6BiwUZ04sR6pDevGNwbMgtlOkacINYoYla1N9Kv3vdwiu0KXGPc03UheLk1blWd%2BPjeGCqp9qcQ%2Fuoal3r9hCholxA7Ss2pmTam7adeHcNYAn6TC3rYG%2BBjqkAdeNvsRnUNU828nAeicD5WUTo%2F8lTSktiUpV9DiRsb%2BI5lpAT6%2BplqfP%2FoBkNqr7BvkcR9YYbVaifDH4uSKbsAlpOqsvGXS%2F451LhyNgseQMsjcbIMNJnvv6BVVmJTJ1j1tWdwKkvTTjV3N1yn3Y5tHE6gD%2F3X62n3caSvyPmamZIfhCCec3K67BfUcsKV%2Fv8NZ3LBvPrl7nqXY7QuD9DpGIja%2FE&X-Amz-Signature=9f373e5fa04f29a3ab1ce1b52e3be9f8042701ee9c0dec89a1071ef91c3ec590&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMNOOIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDngxz%2FoYzp%2Ft2rKMmlMoZAgHLE43ZmTemJVxXs0%2BfUyAIhANHU3UBEGeN3pl%2BRhEmp534WxgxsabNInapIxXDeOp0DKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2GCpENrTGdJd8tW8q3ANFsQUPrGasLaXHVTFLee0KfisWBPLZrKjEzcngyrUoKPhwxv09rx%2Fr0DXyRvP%2BMDEbX%2Bruxq6L8B4GKmOhmIyR2BfFPADjhxhfMdk2CBAAZ52NE%2FtKbvXmEcApJXt5B602zMG7h1VhrRgQIoYZZiuTZJZT4%2B80cfcmYFvNEe0jJ3QKpa%2FNlqyl17T9YIf3VQb1V9rfAO2ZjktlCU7URvh3Zn7LCUkKJQ32AUNgex5QbI1r6Q84egsL2rOp6ser%2BBHkEgNybfNqmzDimVLcKnWgLpSQnvXBKAVvmAwvXaEEKHR2HQLr1Jn1lB%2FwqSA4su2IRAqw3jwUBOX4Yh2L0qrA%2B8IMS7Xh1CR48dxgx0VDSnnh5cF5LaRVcPpIkPrSN%2FW6lNyRpv8boDDkeCOfu1Mm9GzdWa1Ua1BhxrbAsE0xrD6hOOTHWnu%2BjKe4KLLWU5BoXQQxc%2BcNW38g0J4Ci4EThyXJFn5wKLWeCcInSlR3Aj4IgN6tAEBVkwdVAf1hNnyzXcc5StaJbmo6BiwUZ04sR6pDevGNwbMgtlOkacINYoYla1N9Kv3vdwiu0KXGPc03UheLk1blWd%2BPjeGCqp9qcQ%2Fuoal3r9hCholxA7Ss2pmTam7adeHcNYAn6TC3rYG%2BBjqkAdeNvsRnUNU828nAeicD5WUTo%2F8lTSktiUpV9DiRsb%2BI5lpAT6%2BplqfP%2FoBkNqr7BvkcR9YYbVaifDH4uSKbsAlpOqsvGXS%2F451LhyNgseQMsjcbIMNJnvv6BVVmJTJ1j1tWdwKkvTTjV3N1yn3Y5tHE6gD%2F3X62n3caSvyPmamZIfhCCec3K67BfUcsKV%2Fv8NZ3LBvPrl7nqXY7QuD9DpGIja%2FE&X-Amz-Signature=dd900bd9c7c1d88df28ca9c9b7a63b9f60de8a7d09ffa3876535866a2810a7da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMNOOIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDngxz%2FoYzp%2Ft2rKMmlMoZAgHLE43ZmTemJVxXs0%2BfUyAIhANHU3UBEGeN3pl%2BRhEmp534WxgxsabNInapIxXDeOp0DKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2GCpENrTGdJd8tW8q3ANFsQUPrGasLaXHVTFLee0KfisWBPLZrKjEzcngyrUoKPhwxv09rx%2Fr0DXyRvP%2BMDEbX%2Bruxq6L8B4GKmOhmIyR2BfFPADjhxhfMdk2CBAAZ52NE%2FtKbvXmEcApJXt5B602zMG7h1VhrRgQIoYZZiuTZJZT4%2B80cfcmYFvNEe0jJ3QKpa%2FNlqyl17T9YIf3VQb1V9rfAO2ZjktlCU7URvh3Zn7LCUkKJQ32AUNgex5QbI1r6Q84egsL2rOp6ser%2BBHkEgNybfNqmzDimVLcKnWgLpSQnvXBKAVvmAwvXaEEKHR2HQLr1Jn1lB%2FwqSA4su2IRAqw3jwUBOX4Yh2L0qrA%2B8IMS7Xh1CR48dxgx0VDSnnh5cF5LaRVcPpIkPrSN%2FW6lNyRpv8boDDkeCOfu1Mm9GzdWa1Ua1BhxrbAsE0xrD6hOOTHWnu%2BjKe4KLLWU5BoXQQxc%2BcNW38g0J4Ci4EThyXJFn5wKLWeCcInSlR3Aj4IgN6tAEBVkwdVAf1hNnyzXcc5StaJbmo6BiwUZ04sR6pDevGNwbMgtlOkacINYoYla1N9Kv3vdwiu0KXGPc03UheLk1blWd%2BPjeGCqp9qcQ%2Fuoal3r9hCholxA7Ss2pmTam7adeHcNYAn6TC3rYG%2BBjqkAdeNvsRnUNU828nAeicD5WUTo%2F8lTSktiUpV9DiRsb%2BI5lpAT6%2BplqfP%2FoBkNqr7BvkcR9YYbVaifDH4uSKbsAlpOqsvGXS%2F451LhyNgseQMsjcbIMNJnvv6BVVmJTJ1j1tWdwKkvTTjV3N1yn3Y5tHE6gD%2F3X62n3caSvyPmamZIfhCCec3K67BfUcsKV%2Fv8NZ3LBvPrl7nqXY7QuD9DpGIja%2FE&X-Amz-Signature=f1ee5065e7420772267e819ba2c88d43c8764fc0d5e8eae7082e05e491d27ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMNOOIF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDngxz%2FoYzp%2Ft2rKMmlMoZAgHLE43ZmTemJVxXs0%2BfUyAIhANHU3UBEGeN3pl%2BRhEmp534WxgxsabNInapIxXDeOp0DKv8DCHUQABoMNjM3NDIzMTgzODA1Igw2GCpENrTGdJd8tW8q3ANFsQUPrGasLaXHVTFLee0KfisWBPLZrKjEzcngyrUoKPhwxv09rx%2Fr0DXyRvP%2BMDEbX%2Bruxq6L8B4GKmOhmIyR2BfFPADjhxhfMdk2CBAAZ52NE%2FtKbvXmEcApJXt5B602zMG7h1VhrRgQIoYZZiuTZJZT4%2B80cfcmYFvNEe0jJ3QKpa%2FNlqyl17T9YIf3VQb1V9rfAO2ZjktlCU7URvh3Zn7LCUkKJQ32AUNgex5QbI1r6Q84egsL2rOp6ser%2BBHkEgNybfNqmzDimVLcKnWgLpSQnvXBKAVvmAwvXaEEKHR2HQLr1Jn1lB%2FwqSA4su2IRAqw3jwUBOX4Yh2L0qrA%2B8IMS7Xh1CR48dxgx0VDSnnh5cF5LaRVcPpIkPrSN%2FW6lNyRpv8boDDkeCOfu1Mm9GzdWa1Ua1BhxrbAsE0xrD6hOOTHWnu%2BjKe4KLLWU5BoXQQxc%2BcNW38g0J4Ci4EThyXJFn5wKLWeCcInSlR3Aj4IgN6tAEBVkwdVAf1hNnyzXcc5StaJbmo6BiwUZ04sR6pDevGNwbMgtlOkacINYoYla1N9Kv3vdwiu0KXGPc03UheLk1blWd%2BPjeGCqp9qcQ%2Fuoal3r9hCholxA7Ss2pmTam7adeHcNYAn6TC3rYG%2BBjqkAdeNvsRnUNU828nAeicD5WUTo%2F8lTSktiUpV9DiRsb%2BI5lpAT6%2BplqfP%2FoBkNqr7BvkcR9YYbVaifDH4uSKbsAlpOqsvGXS%2F451LhyNgseQMsjcbIMNJnvv6BVVmJTJ1j1tWdwKkvTTjV3N1yn3Y5tHE6gD%2F3X62n3caSvyPmamZIfhCCec3K67BfUcsKV%2Fv8NZ3LBvPrl7nqXY7QuD9DpGIja%2FE&X-Amz-Signature=9ad3831ebbff1aa442c73e9847a5ece5a46d64411bf35b1a451f3f340fd0da9e&X-Amz-SignedHeaders=host&x-id=GetObject)
