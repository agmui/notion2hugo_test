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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMR4S72D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCRGR2D96sCl3%2FM3kxjuMBM7RxI5RoDKyiSiRr80jBNXAIhANb4QChymVOcIqvrW0arR2gxKaHGi5utCqj86nE6DJ0hKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzbPOP1WXGBYUG%2BYq3AMGOXIYirSUL2yDIUbEENOLKjfexcczjzt%2BFkGDnTHlC%2F1f3J2dTzxDkHtT0mQL0HYKzByOVb5NS%2BSCWZkv6pdidWkS48IWJ8MolawkKuMF9tXjixcuDuPQGJJmm%2FZIUWKGVsOFCMiBRg3imxdYF8a%2BFeJ3Qd%2FA0INPhpTfvdyN5Wqo3CdV2xso6%2Fke%2FN87joni%2FjRxZq3QfluogvdYEJ1DWvDo2%2BOIJhRHtP8FDtQYzQsby%2Bsrq4s0zgHCECz5e%2FvZq%2FalBguOmvpgyoXILuq5BQ4dn0PPp3F%2B%2B5LOOdcEA0KOWsOcBGNeqz%2FCI8hkEZNIukacV4KdYQ7ao68XRH40naPE4%2Fru%2FeTCkS0AGkBbG1P95hc9dlhLPx4sp%2BMsqqO%2Fo%2BemagVksSMLUNR38O30wwhqZCCrq%2FgWvVwWZe3V6ihgGYZDTnm4toOAYESzPG3eZ9Crulb1TAiKkAkIKy%2F3OTafrQqHuOhLf7tuiAYe5ztAPwKjGVcCDjBi0xA%2FWREK1FmIIMtLIqpuJxTy0s105cAumoJ3A0h0DYILEqpe9MiVGBjq0nloada9S4%2BbSSTPSv0PP8ZxZMbB7%2BVwHxUDGHwEZgzSrH11VaiRRtTChGhgfoiFdd%2F6wKAQZTC%2Fq9PABjqkAduUxKL4N9uRsDqgNRmda0A5nDyxJVmGvFz9nc4Toe9rqF0J%2BngDfE9zKIkpVKaIqrme2HfiNCHTZy5igf5Ksw5tTO%2FPdzD09xVEcrpJW7SNzjiVXcgNtcCmaZwRcHgj446c%2FIgkIbDDbVTeIVt9h0E%2B3oYK29RF68BSao7XoVE%2BKBxoE8RYvAUKQE77g3LNBeE8W4Ys5VHyPa3FXfqFpZXbyBKH&X-Amz-Signature=76d64bad11e0aa78cbcbf291f24bd9ee8adee7443170c8d470a7435f0f12f54b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMR4S72D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCRGR2D96sCl3%2FM3kxjuMBM7RxI5RoDKyiSiRr80jBNXAIhANb4QChymVOcIqvrW0arR2gxKaHGi5utCqj86nE6DJ0hKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzbPOP1WXGBYUG%2BYq3AMGOXIYirSUL2yDIUbEENOLKjfexcczjzt%2BFkGDnTHlC%2F1f3J2dTzxDkHtT0mQL0HYKzByOVb5NS%2BSCWZkv6pdidWkS48IWJ8MolawkKuMF9tXjixcuDuPQGJJmm%2FZIUWKGVsOFCMiBRg3imxdYF8a%2BFeJ3Qd%2FA0INPhpTfvdyN5Wqo3CdV2xso6%2Fke%2FN87joni%2FjRxZq3QfluogvdYEJ1DWvDo2%2BOIJhRHtP8FDtQYzQsby%2Bsrq4s0zgHCECz5e%2FvZq%2FalBguOmvpgyoXILuq5BQ4dn0PPp3F%2B%2B5LOOdcEA0KOWsOcBGNeqz%2FCI8hkEZNIukacV4KdYQ7ao68XRH40naPE4%2Fru%2FeTCkS0AGkBbG1P95hc9dlhLPx4sp%2BMsqqO%2Fo%2BemagVksSMLUNR38O30wwhqZCCrq%2FgWvVwWZe3V6ihgGYZDTnm4toOAYESzPG3eZ9Crulb1TAiKkAkIKy%2F3OTafrQqHuOhLf7tuiAYe5ztAPwKjGVcCDjBi0xA%2FWREK1FmIIMtLIqpuJxTy0s105cAumoJ3A0h0DYILEqpe9MiVGBjq0nloada9S4%2BbSSTPSv0PP8ZxZMbB7%2BVwHxUDGHwEZgzSrH11VaiRRtTChGhgfoiFdd%2F6wKAQZTC%2Fq9PABjqkAduUxKL4N9uRsDqgNRmda0A5nDyxJVmGvFz9nc4Toe9rqF0J%2BngDfE9zKIkpVKaIqrme2HfiNCHTZy5igf5Ksw5tTO%2FPdzD09xVEcrpJW7SNzjiVXcgNtcCmaZwRcHgj446c%2FIgkIbDDbVTeIVt9h0E%2B3oYK29RF68BSao7XoVE%2BKBxoE8RYvAUKQE77g3LNBeE8W4Ys5VHyPa3FXfqFpZXbyBKH&X-Amz-Signature=292656dafd5c9fd50c7d0a6904e2e155dbd31c2caedc7bbec7750355edff6341&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMR4S72D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCRGR2D96sCl3%2FM3kxjuMBM7RxI5RoDKyiSiRr80jBNXAIhANb4QChymVOcIqvrW0arR2gxKaHGi5utCqj86nE6DJ0hKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzbPOP1WXGBYUG%2BYq3AMGOXIYirSUL2yDIUbEENOLKjfexcczjzt%2BFkGDnTHlC%2F1f3J2dTzxDkHtT0mQL0HYKzByOVb5NS%2BSCWZkv6pdidWkS48IWJ8MolawkKuMF9tXjixcuDuPQGJJmm%2FZIUWKGVsOFCMiBRg3imxdYF8a%2BFeJ3Qd%2FA0INPhpTfvdyN5Wqo3CdV2xso6%2Fke%2FN87joni%2FjRxZq3QfluogvdYEJ1DWvDo2%2BOIJhRHtP8FDtQYzQsby%2Bsrq4s0zgHCECz5e%2FvZq%2FalBguOmvpgyoXILuq5BQ4dn0PPp3F%2B%2B5LOOdcEA0KOWsOcBGNeqz%2FCI8hkEZNIukacV4KdYQ7ao68XRH40naPE4%2Fru%2FeTCkS0AGkBbG1P95hc9dlhLPx4sp%2BMsqqO%2Fo%2BemagVksSMLUNR38O30wwhqZCCrq%2FgWvVwWZe3V6ihgGYZDTnm4toOAYESzPG3eZ9Crulb1TAiKkAkIKy%2F3OTafrQqHuOhLf7tuiAYe5ztAPwKjGVcCDjBi0xA%2FWREK1FmIIMtLIqpuJxTy0s105cAumoJ3A0h0DYILEqpe9MiVGBjq0nloada9S4%2BbSSTPSv0PP8ZxZMbB7%2BVwHxUDGHwEZgzSrH11VaiRRtTChGhgfoiFdd%2F6wKAQZTC%2Fq9PABjqkAduUxKL4N9uRsDqgNRmda0A5nDyxJVmGvFz9nc4Toe9rqF0J%2BngDfE9zKIkpVKaIqrme2HfiNCHTZy5igf5Ksw5tTO%2FPdzD09xVEcrpJW7SNzjiVXcgNtcCmaZwRcHgj446c%2FIgkIbDDbVTeIVt9h0E%2B3oYK29RF68BSao7XoVE%2BKBxoE8RYvAUKQE77g3LNBeE8W4Ys5VHyPa3FXfqFpZXbyBKH&X-Amz-Signature=527d067bafbd0d636d57190008693eed2c14b19c2104ea87d32b556522cedcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMR4S72D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCRGR2D96sCl3%2FM3kxjuMBM7RxI5RoDKyiSiRr80jBNXAIhANb4QChymVOcIqvrW0arR2gxKaHGi5utCqj86nE6DJ0hKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzbPOP1WXGBYUG%2BYq3AMGOXIYirSUL2yDIUbEENOLKjfexcczjzt%2BFkGDnTHlC%2F1f3J2dTzxDkHtT0mQL0HYKzByOVb5NS%2BSCWZkv6pdidWkS48IWJ8MolawkKuMF9tXjixcuDuPQGJJmm%2FZIUWKGVsOFCMiBRg3imxdYF8a%2BFeJ3Qd%2FA0INPhpTfvdyN5Wqo3CdV2xso6%2Fke%2FN87joni%2FjRxZq3QfluogvdYEJ1DWvDo2%2BOIJhRHtP8FDtQYzQsby%2Bsrq4s0zgHCECz5e%2FvZq%2FalBguOmvpgyoXILuq5BQ4dn0PPp3F%2B%2B5LOOdcEA0KOWsOcBGNeqz%2FCI8hkEZNIukacV4KdYQ7ao68XRH40naPE4%2Fru%2FeTCkS0AGkBbG1P95hc9dlhLPx4sp%2BMsqqO%2Fo%2BemagVksSMLUNR38O30wwhqZCCrq%2FgWvVwWZe3V6ihgGYZDTnm4toOAYESzPG3eZ9Crulb1TAiKkAkIKy%2F3OTafrQqHuOhLf7tuiAYe5ztAPwKjGVcCDjBi0xA%2FWREK1FmIIMtLIqpuJxTy0s105cAumoJ3A0h0DYILEqpe9MiVGBjq0nloada9S4%2BbSSTPSv0PP8ZxZMbB7%2BVwHxUDGHwEZgzSrH11VaiRRtTChGhgfoiFdd%2F6wKAQZTC%2Fq9PABjqkAduUxKL4N9uRsDqgNRmda0A5nDyxJVmGvFz9nc4Toe9rqF0J%2BngDfE9zKIkpVKaIqrme2HfiNCHTZy5igf5Ksw5tTO%2FPdzD09xVEcrpJW7SNzjiVXcgNtcCmaZwRcHgj446c%2FIgkIbDDbVTeIVt9h0E%2B3oYK29RF68BSao7XoVE%2BKBxoE8RYvAUKQE77g3LNBeE8W4Ys5VHyPa3FXfqFpZXbyBKH&X-Amz-Signature=54d66d9c274db1b6b113c85c4b44f3d8e1136f6064da218c3428876b2cc6e015&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMR4S72D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCRGR2D96sCl3%2FM3kxjuMBM7RxI5RoDKyiSiRr80jBNXAIhANb4QChymVOcIqvrW0arR2gxKaHGi5utCqj86nE6DJ0hKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzbPOP1WXGBYUG%2BYq3AMGOXIYirSUL2yDIUbEENOLKjfexcczjzt%2BFkGDnTHlC%2F1f3J2dTzxDkHtT0mQL0HYKzByOVb5NS%2BSCWZkv6pdidWkS48IWJ8MolawkKuMF9tXjixcuDuPQGJJmm%2FZIUWKGVsOFCMiBRg3imxdYF8a%2BFeJ3Qd%2FA0INPhpTfvdyN5Wqo3CdV2xso6%2Fke%2FN87joni%2FjRxZq3QfluogvdYEJ1DWvDo2%2BOIJhRHtP8FDtQYzQsby%2Bsrq4s0zgHCECz5e%2FvZq%2FalBguOmvpgyoXILuq5BQ4dn0PPp3F%2B%2B5LOOdcEA0KOWsOcBGNeqz%2FCI8hkEZNIukacV4KdYQ7ao68XRH40naPE4%2Fru%2FeTCkS0AGkBbG1P95hc9dlhLPx4sp%2BMsqqO%2Fo%2BemagVksSMLUNR38O30wwhqZCCrq%2FgWvVwWZe3V6ihgGYZDTnm4toOAYESzPG3eZ9Crulb1TAiKkAkIKy%2F3OTafrQqHuOhLf7tuiAYe5ztAPwKjGVcCDjBi0xA%2FWREK1FmIIMtLIqpuJxTy0s105cAumoJ3A0h0DYILEqpe9MiVGBjq0nloada9S4%2BbSSTPSv0PP8ZxZMbB7%2BVwHxUDGHwEZgzSrH11VaiRRtTChGhgfoiFdd%2F6wKAQZTC%2Fq9PABjqkAduUxKL4N9uRsDqgNRmda0A5nDyxJVmGvFz9nc4Toe9rqF0J%2BngDfE9zKIkpVKaIqrme2HfiNCHTZy5igf5Ksw5tTO%2FPdzD09xVEcrpJW7SNzjiVXcgNtcCmaZwRcHgj446c%2FIgkIbDDbVTeIVt9h0E%2B3oYK29RF68BSao7XoVE%2BKBxoE8RYvAUKQE77g3LNBeE8W4Ys5VHyPa3FXfqFpZXbyBKH&X-Amz-Signature=287cd24d67f8b7906b7dbf651f27695dfd54df64d57a5ce60e066af7b563b204&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMR4S72D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCRGR2D96sCl3%2FM3kxjuMBM7RxI5RoDKyiSiRr80jBNXAIhANb4QChymVOcIqvrW0arR2gxKaHGi5utCqj86nE6DJ0hKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlzbPOP1WXGBYUG%2BYq3AMGOXIYirSUL2yDIUbEENOLKjfexcczjzt%2BFkGDnTHlC%2F1f3J2dTzxDkHtT0mQL0HYKzByOVb5NS%2BSCWZkv6pdidWkS48IWJ8MolawkKuMF9tXjixcuDuPQGJJmm%2FZIUWKGVsOFCMiBRg3imxdYF8a%2BFeJ3Qd%2FA0INPhpTfvdyN5Wqo3CdV2xso6%2Fke%2FN87joni%2FjRxZq3QfluogvdYEJ1DWvDo2%2BOIJhRHtP8FDtQYzQsby%2Bsrq4s0zgHCECz5e%2FvZq%2FalBguOmvpgyoXILuq5BQ4dn0PPp3F%2B%2B5LOOdcEA0KOWsOcBGNeqz%2FCI8hkEZNIukacV4KdYQ7ao68XRH40naPE4%2Fru%2FeTCkS0AGkBbG1P95hc9dlhLPx4sp%2BMsqqO%2Fo%2BemagVksSMLUNR38O30wwhqZCCrq%2FgWvVwWZe3V6ihgGYZDTnm4toOAYESzPG3eZ9Crulb1TAiKkAkIKy%2F3OTafrQqHuOhLf7tuiAYe5ztAPwKjGVcCDjBi0xA%2FWREK1FmIIMtLIqpuJxTy0s105cAumoJ3A0h0DYILEqpe9MiVGBjq0nloada9S4%2BbSSTPSv0PP8ZxZMbB7%2BVwHxUDGHwEZgzSrH11VaiRRtTChGhgfoiFdd%2F6wKAQZTC%2Fq9PABjqkAduUxKL4N9uRsDqgNRmda0A5nDyxJVmGvFz9nc4Toe9rqF0J%2BngDfE9zKIkpVKaIqrme2HfiNCHTZy5igf5Ksw5tTO%2FPdzD09xVEcrpJW7SNzjiVXcgNtcCmaZwRcHgj446c%2FIgkIbDDbVTeIVt9h0E%2B3oYK29RF68BSao7XoVE%2BKBxoE8RYvAUKQE77g3LNBeE8W4Ys5VHyPa3FXfqFpZXbyBKH&X-Amz-Signature=c1ff802136a10cabc2b5f03a23dc99826dac9d664e7dc2de73ec9162be2f95de&X-Amz-SignedHeaders=host&x-id=GetObject)
