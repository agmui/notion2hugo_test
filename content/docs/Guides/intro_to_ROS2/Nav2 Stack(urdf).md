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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KDK2YX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE05zKVBPjKifkaRcIAFpLRTaJKoLlNG9nIzbogY7GCTAiBolk3Of0nlq3%2FTU4QoWSz7qdDMtXXFBm7WMg72r87pIiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq7y1W1DRXfZeNX3KtwDVfRv%2B6UteLgSXTJM70m6tTChqe7nnFGfMgIxod1ugZkppXw3FPmktLRzP%2FENOhouLLgI8U%2FreFzqJttsDQBPV7HkoMz2M3t0KmCRKmfgBMlbnmTpMVSwasEgw1Y%2BQojsQOTyIsUmlCJyK8byKN9l5ZY1Fj2W513F4UT0SZOfWud13BedXnMke%2BCvij7DxKK5SDDhNwJWYHXQCdfzy5Vq55PoPIewk8DCWAZV9yv%2FbnJKdNSeoJ8qYnHUrbo23IK%2Bg%2FQrLN9zJEKHiNj2EeBjdfTX%2F8Ntecp2QZ5K5vxHr0wJp0TfWJY1c1x%2FM4X9An1Nhg%2FQ0M1zrAow%2FAcBr9H2Jdjhya0Ep3FOYc7%2FAHYowF5HQHSxycB4oiAiChwymXAh0s8sOkholCHWECYoMUs2QmTON52wNlGBjIGXmQptK1U%2FE%2B8GiPyPr9ekbbcWkFL%2Baa7aCZHaCb0XbodMByfxvA7U7Ae1PC2pHijpiFgf%2B4oh6i9YpXsGaYQZoFpnO1I%2BmdTSmKQyezRj0jxFs7G%2BcKP8pp3RTpp3D33RcqM91bzu4rdbLZ3Emt4Sw7xNtKN4wzfWT7m5RHHLX%2Fwp8z9gOYww8B3QyNZCsIkFbmBnO2G%2FJInb%2Fn1hDnaLyDAwjtyNwQY6pgEZw%2FFIuFawmHFgJDVx46QETRUhbTwCSc7MpPCGFxApudPMoumowlg4ziluekDCnEPlVePHb5I5Y4w7LsvXxjxSr6byK5nHaSJ%2F7Pq%2BD8zsGMA3JJDa6IwqjVO0m09%2FS%2FvyVjJfVNjBXXYeT1uDY1xQhX54vxM2nHmPwCbqNTA6oDhUYn5YzeU01zDTxgBcBsVG8C9PU5gn8z%2Fz1YwzyCR71uTzFWtN&X-Amz-Signature=b870d3c8f446a467514590fa16506b80a8309820810970eedb39b4c23b0c9f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KDK2YX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE05zKVBPjKifkaRcIAFpLRTaJKoLlNG9nIzbogY7GCTAiBolk3Of0nlq3%2FTU4QoWSz7qdDMtXXFBm7WMg72r87pIiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq7y1W1DRXfZeNX3KtwDVfRv%2B6UteLgSXTJM70m6tTChqe7nnFGfMgIxod1ugZkppXw3FPmktLRzP%2FENOhouLLgI8U%2FreFzqJttsDQBPV7HkoMz2M3t0KmCRKmfgBMlbnmTpMVSwasEgw1Y%2BQojsQOTyIsUmlCJyK8byKN9l5ZY1Fj2W513F4UT0SZOfWud13BedXnMke%2BCvij7DxKK5SDDhNwJWYHXQCdfzy5Vq55PoPIewk8DCWAZV9yv%2FbnJKdNSeoJ8qYnHUrbo23IK%2Bg%2FQrLN9zJEKHiNj2EeBjdfTX%2F8Ntecp2QZ5K5vxHr0wJp0TfWJY1c1x%2FM4X9An1Nhg%2FQ0M1zrAow%2FAcBr9H2Jdjhya0Ep3FOYc7%2FAHYowF5HQHSxycB4oiAiChwymXAh0s8sOkholCHWECYoMUs2QmTON52wNlGBjIGXmQptK1U%2FE%2B8GiPyPr9ekbbcWkFL%2Baa7aCZHaCb0XbodMByfxvA7U7Ae1PC2pHijpiFgf%2B4oh6i9YpXsGaYQZoFpnO1I%2BmdTSmKQyezRj0jxFs7G%2BcKP8pp3RTpp3D33RcqM91bzu4rdbLZ3Emt4Sw7xNtKN4wzfWT7m5RHHLX%2Fwp8z9gOYww8B3QyNZCsIkFbmBnO2G%2FJInb%2Fn1hDnaLyDAwjtyNwQY6pgEZw%2FFIuFawmHFgJDVx46QETRUhbTwCSc7MpPCGFxApudPMoumowlg4ziluekDCnEPlVePHb5I5Y4w7LsvXxjxSr6byK5nHaSJ%2F7Pq%2BD8zsGMA3JJDa6IwqjVO0m09%2FS%2FvyVjJfVNjBXXYeT1uDY1xQhX54vxM2nHmPwCbqNTA6oDhUYn5YzeU01zDTxgBcBsVG8C9PU5gn8z%2Fz1YwzyCR71uTzFWtN&X-Amz-Signature=f629733557cf7236625c4786c1943393fdf2fcb450be174fc412dd6da0a24785&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KDK2YX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE05zKVBPjKifkaRcIAFpLRTaJKoLlNG9nIzbogY7GCTAiBolk3Of0nlq3%2FTU4QoWSz7qdDMtXXFBm7WMg72r87pIiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq7y1W1DRXfZeNX3KtwDVfRv%2B6UteLgSXTJM70m6tTChqe7nnFGfMgIxod1ugZkppXw3FPmktLRzP%2FENOhouLLgI8U%2FreFzqJttsDQBPV7HkoMz2M3t0KmCRKmfgBMlbnmTpMVSwasEgw1Y%2BQojsQOTyIsUmlCJyK8byKN9l5ZY1Fj2W513F4UT0SZOfWud13BedXnMke%2BCvij7DxKK5SDDhNwJWYHXQCdfzy5Vq55PoPIewk8DCWAZV9yv%2FbnJKdNSeoJ8qYnHUrbo23IK%2Bg%2FQrLN9zJEKHiNj2EeBjdfTX%2F8Ntecp2QZ5K5vxHr0wJp0TfWJY1c1x%2FM4X9An1Nhg%2FQ0M1zrAow%2FAcBr9H2Jdjhya0Ep3FOYc7%2FAHYowF5HQHSxycB4oiAiChwymXAh0s8sOkholCHWECYoMUs2QmTON52wNlGBjIGXmQptK1U%2FE%2B8GiPyPr9ekbbcWkFL%2Baa7aCZHaCb0XbodMByfxvA7U7Ae1PC2pHijpiFgf%2B4oh6i9YpXsGaYQZoFpnO1I%2BmdTSmKQyezRj0jxFs7G%2BcKP8pp3RTpp3D33RcqM91bzu4rdbLZ3Emt4Sw7xNtKN4wzfWT7m5RHHLX%2Fwp8z9gOYww8B3QyNZCsIkFbmBnO2G%2FJInb%2Fn1hDnaLyDAwjtyNwQY6pgEZw%2FFIuFawmHFgJDVx46QETRUhbTwCSc7MpPCGFxApudPMoumowlg4ziluekDCnEPlVePHb5I5Y4w7LsvXxjxSr6byK5nHaSJ%2F7Pq%2BD8zsGMA3JJDa6IwqjVO0m09%2FS%2FvyVjJfVNjBXXYeT1uDY1xQhX54vxM2nHmPwCbqNTA6oDhUYn5YzeU01zDTxgBcBsVG8C9PU5gn8z%2Fz1YwzyCR71uTzFWtN&X-Amz-Signature=3a8ad100cae7059af30fe43dda2a49f6eabfc9eedbc1e5a4806915e9d7e3e5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KDK2YX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE05zKVBPjKifkaRcIAFpLRTaJKoLlNG9nIzbogY7GCTAiBolk3Of0nlq3%2FTU4QoWSz7qdDMtXXFBm7WMg72r87pIiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq7y1W1DRXfZeNX3KtwDVfRv%2B6UteLgSXTJM70m6tTChqe7nnFGfMgIxod1ugZkppXw3FPmktLRzP%2FENOhouLLgI8U%2FreFzqJttsDQBPV7HkoMz2M3t0KmCRKmfgBMlbnmTpMVSwasEgw1Y%2BQojsQOTyIsUmlCJyK8byKN9l5ZY1Fj2W513F4UT0SZOfWud13BedXnMke%2BCvij7DxKK5SDDhNwJWYHXQCdfzy5Vq55PoPIewk8DCWAZV9yv%2FbnJKdNSeoJ8qYnHUrbo23IK%2Bg%2FQrLN9zJEKHiNj2EeBjdfTX%2F8Ntecp2QZ5K5vxHr0wJp0TfWJY1c1x%2FM4X9An1Nhg%2FQ0M1zrAow%2FAcBr9H2Jdjhya0Ep3FOYc7%2FAHYowF5HQHSxycB4oiAiChwymXAh0s8sOkholCHWECYoMUs2QmTON52wNlGBjIGXmQptK1U%2FE%2B8GiPyPr9ekbbcWkFL%2Baa7aCZHaCb0XbodMByfxvA7U7Ae1PC2pHijpiFgf%2B4oh6i9YpXsGaYQZoFpnO1I%2BmdTSmKQyezRj0jxFs7G%2BcKP8pp3RTpp3D33RcqM91bzu4rdbLZ3Emt4Sw7xNtKN4wzfWT7m5RHHLX%2Fwp8z9gOYww8B3QyNZCsIkFbmBnO2G%2FJInb%2Fn1hDnaLyDAwjtyNwQY6pgEZw%2FFIuFawmHFgJDVx46QETRUhbTwCSc7MpPCGFxApudPMoumowlg4ziluekDCnEPlVePHb5I5Y4w7LsvXxjxSr6byK5nHaSJ%2F7Pq%2BD8zsGMA3JJDa6IwqjVO0m09%2FS%2FvyVjJfVNjBXXYeT1uDY1xQhX54vxM2nHmPwCbqNTA6oDhUYn5YzeU01zDTxgBcBsVG8C9PU5gn8z%2Fz1YwzyCR71uTzFWtN&X-Amz-Signature=a6b0499cef1c3904392378d841c5eaa6e28405d920d11a0928086d4c9c0996b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KDK2YX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE05zKVBPjKifkaRcIAFpLRTaJKoLlNG9nIzbogY7GCTAiBolk3Of0nlq3%2FTU4QoWSz7qdDMtXXFBm7WMg72r87pIiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq7y1W1DRXfZeNX3KtwDVfRv%2B6UteLgSXTJM70m6tTChqe7nnFGfMgIxod1ugZkppXw3FPmktLRzP%2FENOhouLLgI8U%2FreFzqJttsDQBPV7HkoMz2M3t0KmCRKmfgBMlbnmTpMVSwasEgw1Y%2BQojsQOTyIsUmlCJyK8byKN9l5ZY1Fj2W513F4UT0SZOfWud13BedXnMke%2BCvij7DxKK5SDDhNwJWYHXQCdfzy5Vq55PoPIewk8DCWAZV9yv%2FbnJKdNSeoJ8qYnHUrbo23IK%2Bg%2FQrLN9zJEKHiNj2EeBjdfTX%2F8Ntecp2QZ5K5vxHr0wJp0TfWJY1c1x%2FM4X9An1Nhg%2FQ0M1zrAow%2FAcBr9H2Jdjhya0Ep3FOYc7%2FAHYowF5HQHSxycB4oiAiChwymXAh0s8sOkholCHWECYoMUs2QmTON52wNlGBjIGXmQptK1U%2FE%2B8GiPyPr9ekbbcWkFL%2Baa7aCZHaCb0XbodMByfxvA7U7Ae1PC2pHijpiFgf%2B4oh6i9YpXsGaYQZoFpnO1I%2BmdTSmKQyezRj0jxFs7G%2BcKP8pp3RTpp3D33RcqM91bzu4rdbLZ3Emt4Sw7xNtKN4wzfWT7m5RHHLX%2Fwp8z9gOYww8B3QyNZCsIkFbmBnO2G%2FJInb%2Fn1hDnaLyDAwjtyNwQY6pgEZw%2FFIuFawmHFgJDVx46QETRUhbTwCSc7MpPCGFxApudPMoumowlg4ziluekDCnEPlVePHb5I5Y4w7LsvXxjxSr6byK5nHaSJ%2F7Pq%2BD8zsGMA3JJDa6IwqjVO0m09%2FS%2FvyVjJfVNjBXXYeT1uDY1xQhX54vxM2nHmPwCbqNTA6oDhUYn5YzeU01zDTxgBcBsVG8C9PU5gn8z%2Fz1YwzyCR71uTzFWtN&X-Amz-Signature=345b07b94415bb43f0e860b18d13c52f9c001c69f577d70c66b4dcef28f050cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652KDK2YX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE05zKVBPjKifkaRcIAFpLRTaJKoLlNG9nIzbogY7GCTAiBolk3Of0nlq3%2FTU4QoWSz7qdDMtXXFBm7WMg72r87pIiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAq7y1W1DRXfZeNX3KtwDVfRv%2B6UteLgSXTJM70m6tTChqe7nnFGfMgIxod1ugZkppXw3FPmktLRzP%2FENOhouLLgI8U%2FreFzqJttsDQBPV7HkoMz2M3t0KmCRKmfgBMlbnmTpMVSwasEgw1Y%2BQojsQOTyIsUmlCJyK8byKN9l5ZY1Fj2W513F4UT0SZOfWud13BedXnMke%2BCvij7DxKK5SDDhNwJWYHXQCdfzy5Vq55PoPIewk8DCWAZV9yv%2FbnJKdNSeoJ8qYnHUrbo23IK%2Bg%2FQrLN9zJEKHiNj2EeBjdfTX%2F8Ntecp2QZ5K5vxHr0wJp0TfWJY1c1x%2FM4X9An1Nhg%2FQ0M1zrAow%2FAcBr9H2Jdjhya0Ep3FOYc7%2FAHYowF5HQHSxycB4oiAiChwymXAh0s8sOkholCHWECYoMUs2QmTON52wNlGBjIGXmQptK1U%2FE%2B8GiPyPr9ekbbcWkFL%2Baa7aCZHaCb0XbodMByfxvA7U7Ae1PC2pHijpiFgf%2B4oh6i9YpXsGaYQZoFpnO1I%2BmdTSmKQyezRj0jxFs7G%2BcKP8pp3RTpp3D33RcqM91bzu4rdbLZ3Emt4Sw7xNtKN4wzfWT7m5RHHLX%2Fwp8z9gOYww8B3QyNZCsIkFbmBnO2G%2FJInb%2Fn1hDnaLyDAwjtyNwQY6pgEZw%2FFIuFawmHFgJDVx46QETRUhbTwCSc7MpPCGFxApudPMoumowlg4ziluekDCnEPlVePHb5I5Y4w7LsvXxjxSr6byK5nHaSJ%2F7Pq%2BD8zsGMA3JJDa6IwqjVO0m09%2FS%2FvyVjJfVNjBXXYeT1uDY1xQhX54vxM2nHmPwCbqNTA6oDhUYn5YzeU01zDTxgBcBsVG8C9PU5gn8z%2Fz1YwzyCR71uTzFWtN&X-Amz-Signature=cd1811aeaceb074a80f5f8d9e8d83ca2d0977752cf968b265c6af33687ab5258&X-Amz-SignedHeaders=host&x-id=GetObject)
