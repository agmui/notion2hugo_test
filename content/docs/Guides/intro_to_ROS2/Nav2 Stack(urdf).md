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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SFPSWL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuNfbQGJeC1wDmdH%2Bwdm6xhcrneEZAPOtvHjOo2XwruwIgEog3jNLGJuEux6Nt0Qk1J0Wr6U5DmbNhV%2BiatxNWkMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKsZ8rKlVAnUyDvOkSrcA9w%2FC890tIzHrLio%2B9Yya%2By9B8t%2BYeqTjSAiF%2FDLIlwdcFVMg2aV%2BLs6QA9FEgwXY4UgiedRuhlwvAlwGAk9FP1hEQ94MeuZHDAYSjk8mV5HpI5NOoViN4WTfn7GSZmkOmNYP1rdGg8KWFO2jGVghvGZEpsMHmNNAgK0eGc%2BC5vYxURnx6Ew%2BDgCaDgIhIYsJhHNiCVHb5Zf1YtOV%2BcfvkyoGwlzJ%2Fx%2BIrFz0xYeZ62epByF4zLYppduIGyZIRaN3thmM5rx3XGtAILSwV91Qqtf17svja7rrMcumcLda2TlmNmvlbHBsUusdvixqLCgSIAEvFZXGY2y%2FNSqI0sSZpTLaF6ExeoewVKrD3ga7QXAM1833x017pRJco8jNWtbXfTNLDvEf7lLVRZ24vUPP%2BPnd0rsJgKHQMJVhgbK%2ButOJwEDokrzQl0odJSniQRltrZOwlSvzZKhZ413sqBynbYlfb8zLoNi8raGePgkTImQ0wybfAiEjcCIMaE5DjdfjfltYqZRrqF8HGcnLi%2F41aKqvEICcbKKOJ9PivCl%2Bnn67Wbm45zXksvJoLI7C0AvURwHAeCATSJ65kAu1dXZ0QCVdmwS9GBnC1jfAEP65qr5qWiIZyp4gFzNqYzSMM2X4MMGOqUBg8d6B9XtqzCvRCyWvG0Y1EDtejlinBbKX8BwQB7GBdMefPv8YiwS3e2lIr0OyK3uKsvoCmdNqJJosSMzLdUm7wugGngT6h3WBgLIIRw2pSAGMji8NaLzlaIP%2Fxwo5zqnuYoK4tz18gW3sreZcMO8FRuTaMXyUQ8fvteuH%2FwU7MOPuYqkn5xZs8hcCQet%2FEDkoRi%2FhwkTJBkdPBTjcO2Bt64qXsb7&X-Amz-Signature=2e2fe90398d8d01b33553583d831aff363b298808c7e7ff8ce6750791cf32805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SFPSWL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuNfbQGJeC1wDmdH%2Bwdm6xhcrneEZAPOtvHjOo2XwruwIgEog3jNLGJuEux6Nt0Qk1J0Wr6U5DmbNhV%2BiatxNWkMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKsZ8rKlVAnUyDvOkSrcA9w%2FC890tIzHrLio%2B9Yya%2By9B8t%2BYeqTjSAiF%2FDLIlwdcFVMg2aV%2BLs6QA9FEgwXY4UgiedRuhlwvAlwGAk9FP1hEQ94MeuZHDAYSjk8mV5HpI5NOoViN4WTfn7GSZmkOmNYP1rdGg8KWFO2jGVghvGZEpsMHmNNAgK0eGc%2BC5vYxURnx6Ew%2BDgCaDgIhIYsJhHNiCVHb5Zf1YtOV%2BcfvkyoGwlzJ%2Fx%2BIrFz0xYeZ62epByF4zLYppduIGyZIRaN3thmM5rx3XGtAILSwV91Qqtf17svja7rrMcumcLda2TlmNmvlbHBsUusdvixqLCgSIAEvFZXGY2y%2FNSqI0sSZpTLaF6ExeoewVKrD3ga7QXAM1833x017pRJco8jNWtbXfTNLDvEf7lLVRZ24vUPP%2BPnd0rsJgKHQMJVhgbK%2ButOJwEDokrzQl0odJSniQRltrZOwlSvzZKhZ413sqBynbYlfb8zLoNi8raGePgkTImQ0wybfAiEjcCIMaE5DjdfjfltYqZRrqF8HGcnLi%2F41aKqvEICcbKKOJ9PivCl%2Bnn67Wbm45zXksvJoLI7C0AvURwHAeCATSJ65kAu1dXZ0QCVdmwS9GBnC1jfAEP65qr5qWiIZyp4gFzNqYzSMM2X4MMGOqUBg8d6B9XtqzCvRCyWvG0Y1EDtejlinBbKX8BwQB7GBdMefPv8YiwS3e2lIr0OyK3uKsvoCmdNqJJosSMzLdUm7wugGngT6h3WBgLIIRw2pSAGMji8NaLzlaIP%2Fxwo5zqnuYoK4tz18gW3sreZcMO8FRuTaMXyUQ8fvteuH%2FwU7MOPuYqkn5xZs8hcCQet%2FEDkoRi%2FhwkTJBkdPBTjcO2Bt64qXsb7&X-Amz-Signature=aeb1d57375e62055aa054cd5ae9092539c992ed22ce38c3d04b6629b519ed554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SFPSWL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuNfbQGJeC1wDmdH%2Bwdm6xhcrneEZAPOtvHjOo2XwruwIgEog3jNLGJuEux6Nt0Qk1J0Wr6U5DmbNhV%2BiatxNWkMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKsZ8rKlVAnUyDvOkSrcA9w%2FC890tIzHrLio%2B9Yya%2By9B8t%2BYeqTjSAiF%2FDLIlwdcFVMg2aV%2BLs6QA9FEgwXY4UgiedRuhlwvAlwGAk9FP1hEQ94MeuZHDAYSjk8mV5HpI5NOoViN4WTfn7GSZmkOmNYP1rdGg8KWFO2jGVghvGZEpsMHmNNAgK0eGc%2BC5vYxURnx6Ew%2BDgCaDgIhIYsJhHNiCVHb5Zf1YtOV%2BcfvkyoGwlzJ%2Fx%2BIrFz0xYeZ62epByF4zLYppduIGyZIRaN3thmM5rx3XGtAILSwV91Qqtf17svja7rrMcumcLda2TlmNmvlbHBsUusdvixqLCgSIAEvFZXGY2y%2FNSqI0sSZpTLaF6ExeoewVKrD3ga7QXAM1833x017pRJco8jNWtbXfTNLDvEf7lLVRZ24vUPP%2BPnd0rsJgKHQMJVhgbK%2ButOJwEDokrzQl0odJSniQRltrZOwlSvzZKhZ413sqBynbYlfb8zLoNi8raGePgkTImQ0wybfAiEjcCIMaE5DjdfjfltYqZRrqF8HGcnLi%2F41aKqvEICcbKKOJ9PivCl%2Bnn67Wbm45zXksvJoLI7C0AvURwHAeCATSJ65kAu1dXZ0QCVdmwS9GBnC1jfAEP65qr5qWiIZyp4gFzNqYzSMM2X4MMGOqUBg8d6B9XtqzCvRCyWvG0Y1EDtejlinBbKX8BwQB7GBdMefPv8YiwS3e2lIr0OyK3uKsvoCmdNqJJosSMzLdUm7wugGngT6h3WBgLIIRw2pSAGMji8NaLzlaIP%2Fxwo5zqnuYoK4tz18gW3sreZcMO8FRuTaMXyUQ8fvteuH%2FwU7MOPuYqkn5xZs8hcCQet%2FEDkoRi%2FhwkTJBkdPBTjcO2Bt64qXsb7&X-Amz-Signature=fa78fb59f65cd3a3c21bd04373594c9984f9c432810f09d9d835079d8c68bbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SFPSWL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuNfbQGJeC1wDmdH%2Bwdm6xhcrneEZAPOtvHjOo2XwruwIgEog3jNLGJuEux6Nt0Qk1J0Wr6U5DmbNhV%2BiatxNWkMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKsZ8rKlVAnUyDvOkSrcA9w%2FC890tIzHrLio%2B9Yya%2By9B8t%2BYeqTjSAiF%2FDLIlwdcFVMg2aV%2BLs6QA9FEgwXY4UgiedRuhlwvAlwGAk9FP1hEQ94MeuZHDAYSjk8mV5HpI5NOoViN4WTfn7GSZmkOmNYP1rdGg8KWFO2jGVghvGZEpsMHmNNAgK0eGc%2BC5vYxURnx6Ew%2BDgCaDgIhIYsJhHNiCVHb5Zf1YtOV%2BcfvkyoGwlzJ%2Fx%2BIrFz0xYeZ62epByF4zLYppduIGyZIRaN3thmM5rx3XGtAILSwV91Qqtf17svja7rrMcumcLda2TlmNmvlbHBsUusdvixqLCgSIAEvFZXGY2y%2FNSqI0sSZpTLaF6ExeoewVKrD3ga7QXAM1833x017pRJco8jNWtbXfTNLDvEf7lLVRZ24vUPP%2BPnd0rsJgKHQMJVhgbK%2ButOJwEDokrzQl0odJSniQRltrZOwlSvzZKhZ413sqBynbYlfb8zLoNi8raGePgkTImQ0wybfAiEjcCIMaE5DjdfjfltYqZRrqF8HGcnLi%2F41aKqvEICcbKKOJ9PivCl%2Bnn67Wbm45zXksvJoLI7C0AvURwHAeCATSJ65kAu1dXZ0QCVdmwS9GBnC1jfAEP65qr5qWiIZyp4gFzNqYzSMM2X4MMGOqUBg8d6B9XtqzCvRCyWvG0Y1EDtejlinBbKX8BwQB7GBdMefPv8YiwS3e2lIr0OyK3uKsvoCmdNqJJosSMzLdUm7wugGngT6h3WBgLIIRw2pSAGMji8NaLzlaIP%2Fxwo5zqnuYoK4tz18gW3sreZcMO8FRuTaMXyUQ8fvteuH%2FwU7MOPuYqkn5xZs8hcCQet%2FEDkoRi%2FhwkTJBkdPBTjcO2Bt64qXsb7&X-Amz-Signature=655387e75c283b3d219b40ff2b76555681e88e07fc3ae215123c88b5f5245437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SFPSWL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuNfbQGJeC1wDmdH%2Bwdm6xhcrneEZAPOtvHjOo2XwruwIgEog3jNLGJuEux6Nt0Qk1J0Wr6U5DmbNhV%2BiatxNWkMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKsZ8rKlVAnUyDvOkSrcA9w%2FC890tIzHrLio%2B9Yya%2By9B8t%2BYeqTjSAiF%2FDLIlwdcFVMg2aV%2BLs6QA9FEgwXY4UgiedRuhlwvAlwGAk9FP1hEQ94MeuZHDAYSjk8mV5HpI5NOoViN4WTfn7GSZmkOmNYP1rdGg8KWFO2jGVghvGZEpsMHmNNAgK0eGc%2BC5vYxURnx6Ew%2BDgCaDgIhIYsJhHNiCVHb5Zf1YtOV%2BcfvkyoGwlzJ%2Fx%2BIrFz0xYeZ62epByF4zLYppduIGyZIRaN3thmM5rx3XGtAILSwV91Qqtf17svja7rrMcumcLda2TlmNmvlbHBsUusdvixqLCgSIAEvFZXGY2y%2FNSqI0sSZpTLaF6ExeoewVKrD3ga7QXAM1833x017pRJco8jNWtbXfTNLDvEf7lLVRZ24vUPP%2BPnd0rsJgKHQMJVhgbK%2ButOJwEDokrzQl0odJSniQRltrZOwlSvzZKhZ413sqBynbYlfb8zLoNi8raGePgkTImQ0wybfAiEjcCIMaE5DjdfjfltYqZRrqF8HGcnLi%2F41aKqvEICcbKKOJ9PivCl%2Bnn67Wbm45zXksvJoLI7C0AvURwHAeCATSJ65kAu1dXZ0QCVdmwS9GBnC1jfAEP65qr5qWiIZyp4gFzNqYzSMM2X4MMGOqUBg8d6B9XtqzCvRCyWvG0Y1EDtejlinBbKX8BwQB7GBdMefPv8YiwS3e2lIr0OyK3uKsvoCmdNqJJosSMzLdUm7wugGngT6h3WBgLIIRw2pSAGMji8NaLzlaIP%2Fxwo5zqnuYoK4tz18gW3sreZcMO8FRuTaMXyUQ8fvteuH%2FwU7MOPuYqkn5xZs8hcCQet%2FEDkoRi%2FhwkTJBkdPBTjcO2Bt64qXsb7&X-Amz-Signature=8eca98ea63b36a982602b3d931eb2f458d8bb36d15a009e4c2c2d8bd5793c63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SFPSWL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCuNfbQGJeC1wDmdH%2Bwdm6xhcrneEZAPOtvHjOo2XwruwIgEog3jNLGJuEux6Nt0Qk1J0Wr6U5DmbNhV%2BiatxNWkMIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKsZ8rKlVAnUyDvOkSrcA9w%2FC890tIzHrLio%2B9Yya%2By9B8t%2BYeqTjSAiF%2FDLIlwdcFVMg2aV%2BLs6QA9FEgwXY4UgiedRuhlwvAlwGAk9FP1hEQ94MeuZHDAYSjk8mV5HpI5NOoViN4WTfn7GSZmkOmNYP1rdGg8KWFO2jGVghvGZEpsMHmNNAgK0eGc%2BC5vYxURnx6Ew%2BDgCaDgIhIYsJhHNiCVHb5Zf1YtOV%2BcfvkyoGwlzJ%2Fx%2BIrFz0xYeZ62epByF4zLYppduIGyZIRaN3thmM5rx3XGtAILSwV91Qqtf17svja7rrMcumcLda2TlmNmvlbHBsUusdvixqLCgSIAEvFZXGY2y%2FNSqI0sSZpTLaF6ExeoewVKrD3ga7QXAM1833x017pRJco8jNWtbXfTNLDvEf7lLVRZ24vUPP%2BPnd0rsJgKHQMJVhgbK%2ButOJwEDokrzQl0odJSniQRltrZOwlSvzZKhZ413sqBynbYlfb8zLoNi8raGePgkTImQ0wybfAiEjcCIMaE5DjdfjfltYqZRrqF8HGcnLi%2F41aKqvEICcbKKOJ9PivCl%2Bnn67Wbm45zXksvJoLI7C0AvURwHAeCATSJ65kAu1dXZ0QCVdmwS9GBnC1jfAEP65qr5qWiIZyp4gFzNqYzSMM2X4MMGOqUBg8d6B9XtqzCvRCyWvG0Y1EDtejlinBbKX8BwQB7GBdMefPv8YiwS3e2lIr0OyK3uKsvoCmdNqJJosSMzLdUm7wugGngT6h3WBgLIIRw2pSAGMji8NaLzlaIP%2Fxwo5zqnuYoK4tz18gW3sreZcMO8FRuTaMXyUQ8fvteuH%2FwU7MOPuYqkn5xZs8hcCQet%2FEDkoRi%2FhwkTJBkdPBTjcO2Bt64qXsb7&X-Amz-Signature=ba26a0236b4e358c43955e91054f0e39a01d6a4b484ad11d15e71071974bcd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
