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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLZIGE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwgittZRksU15mPGGALu83hkycE96bypeDYune0RKtwIhAOuSxEoPQpfKRMHKt%2FG6FvqHGrfsasvY9GYi9I5CfwXGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDY6uY8WElepPpDxYq3APqfLLJko7y1BnTCbEuFkKRJD5iB3869zhvyvEjod1PBgl%2FkLqZk0iZUDv%2FKjEoRQdTWCRxoDyiGZzULx30IK1cLZuPOf5pLlzUk8DS4GjoyAHoIAbBmVdZ%2BEtzUB%2BqXcdNZmLereKSepP1rQYS%2BDImypwlRTGmBkscPxf2YALbUCLR7cPi7S9F9XeJS6LZ1WlJhBWK8oX7jrB78FdTDwdhCl9kRR7wW%2Fmbur5N4PpCQeuF3jp3EuDY47kHAU%2Bez66P3vrDK%2BOXlwzockCdTg4GPR7jiKSusOfUdQUtRuJEOkkaXhI14BpDm3eu7fYOyvorXOeKmIq0SroNVkVo3j7GkaBrBdApCfup1hqD1uUZXQlXt%2Fj9pgH%2FMCXYESaS4pMhw3j8MjT%2F8rMCAAgSyD6jy59Vq7ibJPzU3jqOuQjevTLxWRxgXb4EL0Bw0yPFc3KOVpZUE1rhl72OxtfCZ2TBbb4P%2BUyrfN77xFtg6azVP%2B2ZBSBxlb4ZP49FO%2BoDzF7KrB%2BAECRWTaWS%2B3%2FkiH8Kj8zIZD2HrUOT1IVAIBSV969z6kMYqZ1%2FAq9zI8HaI%2BlVyyyQWqoC39nFAVKwk1VvMTfj4zwGK24meet%2FOo6i9M6ngsRRRis0OFuPlDCRtcbDBjqkASbtXrH6asbbjMooTVvr3OSs0t7WdiBh2XUG5ebKputyb2pE7wKpKOH7LqJlvpwPVeMXgon9XW9v80GWqOryQeD5OrtakerVg5xw9NRzP%2FxuvNqRrE2tm%2BHGKmKoyoo9ik1AWTmjiW7XUgeEIUEJc8AooWLsztnwFLmDdMBV7XJ%2B43URmgVuo84JotLvAfB3K3huk4WvVEBM4Y6%2BqoZ0iJmciFPy&X-Amz-Signature=539bc1c98f02600184a89682e3d59891a7a37e761ffea52fcebcb11a9e888afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLZIGE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwgittZRksU15mPGGALu83hkycE96bypeDYune0RKtwIhAOuSxEoPQpfKRMHKt%2FG6FvqHGrfsasvY9GYi9I5CfwXGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDY6uY8WElepPpDxYq3APqfLLJko7y1BnTCbEuFkKRJD5iB3869zhvyvEjod1PBgl%2FkLqZk0iZUDv%2FKjEoRQdTWCRxoDyiGZzULx30IK1cLZuPOf5pLlzUk8DS4GjoyAHoIAbBmVdZ%2BEtzUB%2BqXcdNZmLereKSepP1rQYS%2BDImypwlRTGmBkscPxf2YALbUCLR7cPi7S9F9XeJS6LZ1WlJhBWK8oX7jrB78FdTDwdhCl9kRR7wW%2Fmbur5N4PpCQeuF3jp3EuDY47kHAU%2Bez66P3vrDK%2BOXlwzockCdTg4GPR7jiKSusOfUdQUtRuJEOkkaXhI14BpDm3eu7fYOyvorXOeKmIq0SroNVkVo3j7GkaBrBdApCfup1hqD1uUZXQlXt%2Fj9pgH%2FMCXYESaS4pMhw3j8MjT%2F8rMCAAgSyD6jy59Vq7ibJPzU3jqOuQjevTLxWRxgXb4EL0Bw0yPFc3KOVpZUE1rhl72OxtfCZ2TBbb4P%2BUyrfN77xFtg6azVP%2B2ZBSBxlb4ZP49FO%2BoDzF7KrB%2BAECRWTaWS%2B3%2FkiH8Kj8zIZD2HrUOT1IVAIBSV969z6kMYqZ1%2FAq9zI8HaI%2BlVyyyQWqoC39nFAVKwk1VvMTfj4zwGK24meet%2FOo6i9M6ngsRRRis0OFuPlDCRtcbDBjqkASbtXrH6asbbjMooTVvr3OSs0t7WdiBh2XUG5ebKputyb2pE7wKpKOH7LqJlvpwPVeMXgon9XW9v80GWqOryQeD5OrtakerVg5xw9NRzP%2FxuvNqRrE2tm%2BHGKmKoyoo9ik1AWTmjiW7XUgeEIUEJc8AooWLsztnwFLmDdMBV7XJ%2B43URmgVuo84JotLvAfB3K3huk4WvVEBM4Y6%2BqoZ0iJmciFPy&X-Amz-Signature=05d256eac67e6d35fca46c8c2fa25318937a1194637d70e6e36723bcc02b9e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLZIGE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwgittZRksU15mPGGALu83hkycE96bypeDYune0RKtwIhAOuSxEoPQpfKRMHKt%2FG6FvqHGrfsasvY9GYi9I5CfwXGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDY6uY8WElepPpDxYq3APqfLLJko7y1BnTCbEuFkKRJD5iB3869zhvyvEjod1PBgl%2FkLqZk0iZUDv%2FKjEoRQdTWCRxoDyiGZzULx30IK1cLZuPOf5pLlzUk8DS4GjoyAHoIAbBmVdZ%2BEtzUB%2BqXcdNZmLereKSepP1rQYS%2BDImypwlRTGmBkscPxf2YALbUCLR7cPi7S9F9XeJS6LZ1WlJhBWK8oX7jrB78FdTDwdhCl9kRR7wW%2Fmbur5N4PpCQeuF3jp3EuDY47kHAU%2Bez66P3vrDK%2BOXlwzockCdTg4GPR7jiKSusOfUdQUtRuJEOkkaXhI14BpDm3eu7fYOyvorXOeKmIq0SroNVkVo3j7GkaBrBdApCfup1hqD1uUZXQlXt%2Fj9pgH%2FMCXYESaS4pMhw3j8MjT%2F8rMCAAgSyD6jy59Vq7ibJPzU3jqOuQjevTLxWRxgXb4EL0Bw0yPFc3KOVpZUE1rhl72OxtfCZ2TBbb4P%2BUyrfN77xFtg6azVP%2B2ZBSBxlb4ZP49FO%2BoDzF7KrB%2BAECRWTaWS%2B3%2FkiH8Kj8zIZD2HrUOT1IVAIBSV969z6kMYqZ1%2FAq9zI8HaI%2BlVyyyQWqoC39nFAVKwk1VvMTfj4zwGK24meet%2FOo6i9M6ngsRRRis0OFuPlDCRtcbDBjqkASbtXrH6asbbjMooTVvr3OSs0t7WdiBh2XUG5ebKputyb2pE7wKpKOH7LqJlvpwPVeMXgon9XW9v80GWqOryQeD5OrtakerVg5xw9NRzP%2FxuvNqRrE2tm%2BHGKmKoyoo9ik1AWTmjiW7XUgeEIUEJc8AooWLsztnwFLmDdMBV7XJ%2B43URmgVuo84JotLvAfB3K3huk4WvVEBM4Y6%2BqoZ0iJmciFPy&X-Amz-Signature=b59641723900ea7f61fb5b1851fac207434ed8b7e6cf8ecfb526be5dc2e61ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLZIGE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwgittZRksU15mPGGALu83hkycE96bypeDYune0RKtwIhAOuSxEoPQpfKRMHKt%2FG6FvqHGrfsasvY9GYi9I5CfwXGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDY6uY8WElepPpDxYq3APqfLLJko7y1BnTCbEuFkKRJD5iB3869zhvyvEjod1PBgl%2FkLqZk0iZUDv%2FKjEoRQdTWCRxoDyiGZzULx30IK1cLZuPOf5pLlzUk8DS4GjoyAHoIAbBmVdZ%2BEtzUB%2BqXcdNZmLereKSepP1rQYS%2BDImypwlRTGmBkscPxf2YALbUCLR7cPi7S9F9XeJS6LZ1WlJhBWK8oX7jrB78FdTDwdhCl9kRR7wW%2Fmbur5N4PpCQeuF3jp3EuDY47kHAU%2Bez66P3vrDK%2BOXlwzockCdTg4GPR7jiKSusOfUdQUtRuJEOkkaXhI14BpDm3eu7fYOyvorXOeKmIq0SroNVkVo3j7GkaBrBdApCfup1hqD1uUZXQlXt%2Fj9pgH%2FMCXYESaS4pMhw3j8MjT%2F8rMCAAgSyD6jy59Vq7ibJPzU3jqOuQjevTLxWRxgXb4EL0Bw0yPFc3KOVpZUE1rhl72OxtfCZ2TBbb4P%2BUyrfN77xFtg6azVP%2B2ZBSBxlb4ZP49FO%2BoDzF7KrB%2BAECRWTaWS%2B3%2FkiH8Kj8zIZD2HrUOT1IVAIBSV969z6kMYqZ1%2FAq9zI8HaI%2BlVyyyQWqoC39nFAVKwk1VvMTfj4zwGK24meet%2FOo6i9M6ngsRRRis0OFuPlDCRtcbDBjqkASbtXrH6asbbjMooTVvr3OSs0t7WdiBh2XUG5ebKputyb2pE7wKpKOH7LqJlvpwPVeMXgon9XW9v80GWqOryQeD5OrtakerVg5xw9NRzP%2FxuvNqRrE2tm%2BHGKmKoyoo9ik1AWTmjiW7XUgeEIUEJc8AooWLsztnwFLmDdMBV7XJ%2B43URmgVuo84JotLvAfB3K3huk4WvVEBM4Y6%2BqoZ0iJmciFPy&X-Amz-Signature=2fe097fded02b1f512dbef631f75d5e7a0a06e1ec1a995ae9e55432fdc873bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLZIGE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwgittZRksU15mPGGALu83hkycE96bypeDYune0RKtwIhAOuSxEoPQpfKRMHKt%2FG6FvqHGrfsasvY9GYi9I5CfwXGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDY6uY8WElepPpDxYq3APqfLLJko7y1BnTCbEuFkKRJD5iB3869zhvyvEjod1PBgl%2FkLqZk0iZUDv%2FKjEoRQdTWCRxoDyiGZzULx30IK1cLZuPOf5pLlzUk8DS4GjoyAHoIAbBmVdZ%2BEtzUB%2BqXcdNZmLereKSepP1rQYS%2BDImypwlRTGmBkscPxf2YALbUCLR7cPi7S9F9XeJS6LZ1WlJhBWK8oX7jrB78FdTDwdhCl9kRR7wW%2Fmbur5N4PpCQeuF3jp3EuDY47kHAU%2Bez66P3vrDK%2BOXlwzockCdTg4GPR7jiKSusOfUdQUtRuJEOkkaXhI14BpDm3eu7fYOyvorXOeKmIq0SroNVkVo3j7GkaBrBdApCfup1hqD1uUZXQlXt%2Fj9pgH%2FMCXYESaS4pMhw3j8MjT%2F8rMCAAgSyD6jy59Vq7ibJPzU3jqOuQjevTLxWRxgXb4EL0Bw0yPFc3KOVpZUE1rhl72OxtfCZ2TBbb4P%2BUyrfN77xFtg6azVP%2B2ZBSBxlb4ZP49FO%2BoDzF7KrB%2BAECRWTaWS%2B3%2FkiH8Kj8zIZD2HrUOT1IVAIBSV969z6kMYqZ1%2FAq9zI8HaI%2BlVyyyQWqoC39nFAVKwk1VvMTfj4zwGK24meet%2FOo6i9M6ngsRRRis0OFuPlDCRtcbDBjqkASbtXrH6asbbjMooTVvr3OSs0t7WdiBh2XUG5ebKputyb2pE7wKpKOH7LqJlvpwPVeMXgon9XW9v80GWqOryQeD5OrtakerVg5xw9NRzP%2FxuvNqRrE2tm%2BHGKmKoyoo9ik1AWTmjiW7XUgeEIUEJc8AooWLsztnwFLmDdMBV7XJ%2B43URmgVuo84JotLvAfB3K3huk4WvVEBM4Y6%2BqoZ0iJmciFPy&X-Amz-Signature=bf1ac0ba5bdc32646ee0742d312c8862f452f4fd72185cea0d6b6e8f65598faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPLZIGE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwgittZRksU15mPGGALu83hkycE96bypeDYune0RKtwIhAOuSxEoPQpfKRMHKt%2FG6FvqHGrfsasvY9GYi9I5CfwXGKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDY6uY8WElepPpDxYq3APqfLLJko7y1BnTCbEuFkKRJD5iB3869zhvyvEjod1PBgl%2FkLqZk0iZUDv%2FKjEoRQdTWCRxoDyiGZzULx30IK1cLZuPOf5pLlzUk8DS4GjoyAHoIAbBmVdZ%2BEtzUB%2BqXcdNZmLereKSepP1rQYS%2BDImypwlRTGmBkscPxf2YALbUCLR7cPi7S9F9XeJS6LZ1WlJhBWK8oX7jrB78FdTDwdhCl9kRR7wW%2Fmbur5N4PpCQeuF3jp3EuDY47kHAU%2Bez66P3vrDK%2BOXlwzockCdTg4GPR7jiKSusOfUdQUtRuJEOkkaXhI14BpDm3eu7fYOyvorXOeKmIq0SroNVkVo3j7GkaBrBdApCfup1hqD1uUZXQlXt%2Fj9pgH%2FMCXYESaS4pMhw3j8MjT%2F8rMCAAgSyD6jy59Vq7ibJPzU3jqOuQjevTLxWRxgXb4EL0Bw0yPFc3KOVpZUE1rhl72OxtfCZ2TBbb4P%2BUyrfN77xFtg6azVP%2B2ZBSBxlb4ZP49FO%2BoDzF7KrB%2BAECRWTaWS%2B3%2FkiH8Kj8zIZD2HrUOT1IVAIBSV969z6kMYqZ1%2FAq9zI8HaI%2BlVyyyQWqoC39nFAVKwk1VvMTfj4zwGK24meet%2FOo6i9M6ngsRRRis0OFuPlDCRtcbDBjqkASbtXrH6asbbjMooTVvr3OSs0t7WdiBh2XUG5ebKputyb2pE7wKpKOH7LqJlvpwPVeMXgon9XW9v80GWqOryQeD5OrtakerVg5xw9NRzP%2FxuvNqRrE2tm%2BHGKmKoyoo9ik1AWTmjiW7XUgeEIUEJc8AooWLsztnwFLmDdMBV7XJ%2B43URmgVuo84JotLvAfB3K3huk4WvVEBM4Y6%2BqoZ0iJmciFPy&X-Amz-Signature=cf110ec80e3d91fa8e6b0b5477c03f28cdbba63785417653786833d1c6edb368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
