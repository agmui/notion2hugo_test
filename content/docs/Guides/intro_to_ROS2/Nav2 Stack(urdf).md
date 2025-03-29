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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSACU5T%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDjk%2B52G50ZiJdeGD%2BjgFyB3ssIh8IIXKa2s8T%2ByutYNAiBPMzsoWvd4QYtgKmiteon2yDj9RPfs1fb8scxKye7z1Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4wcZLpIbgNiYuVGYKtwD1EadiPpmLt8ezUSsDepulpJAbe6E9WWnRmYl1Fi836mUuMKc5%2F9f2qi7NkLRoqF2WZQ8iakLfuHwrTuTRjTn0zinl7l5oSq1Fz2oHBvA2%2BXZg4r%2B4%2FHVnaZby%2BfMuWK26dWjZN1M7pFudJGl7AL3rbyBV8AD8g1FYXPg9JGgGirsHpSv5%2FAEbEwTb2f9xe6uHITf8s7M6r%2BScm12SrOEBnooW3a%2BBXFWIOxCT6RVHJW24EFMoMoyj7sJs8mkee9UHuIJq8pV5HIlbpVtr4bqAm%2FkssZpSyLZ6vQ3DoFqx4vXDan6XS%2B9lqbDDIvKBv%2BT3MsaYd5KCx%2F201djHVGI7RVA%2B8hmy62tgIybBxdlXdkk346j7lzuMPiNdjIsk20u%2BdBFeboeRmblU2%2BudB30x6HUceMx35cCynmE5mu%2F76i4QcAH7l9vtqxRKDJ1HLn27wFqflXKXl3f2A5fHlAcEIrrgEUgvsTkA56%2F%2F52XNkVEaBOMqVDsW%2BVvI%2B6d%2BYzHHfQlwikW6EtyFBuFV%2B6bct%2FBYRkaOo3IsSHdmRbV9Tqd8kyQ96VLmgevLddPuHGc%2FpUt031VRxY%2FWJn%2Bltdcj8iO9Ec0HaC8oJFJZUI96AbJZGbJWQnJHTYgFs4w4oufvwY6pgGl3vtBGQPLpxlIAaNxhOHxXOqzlLReIeN3TF1eucNpoJ9ST5U6Wo15f52vIjPs62SLLGfwipQ3uiVjYPk493xz294umrP3uWLhEJLRjHChKwcpnXH2L0urlA7nrrbFDaugg%2FPDw7m04COG3iSzQgAxg4yZhQBQ1SzACIpV32H7DDfY5nPk74sitMqhZZkP0u5RXNzXLVFieB75jELIhIdZ3DGkPwpd&X-Amz-Signature=0413931a1d40627e405bfaaf15d3e5d66557970c80c346ae2d2decf2920b35c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSACU5T%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDjk%2B52G50ZiJdeGD%2BjgFyB3ssIh8IIXKa2s8T%2ByutYNAiBPMzsoWvd4QYtgKmiteon2yDj9RPfs1fb8scxKye7z1Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4wcZLpIbgNiYuVGYKtwD1EadiPpmLt8ezUSsDepulpJAbe6E9WWnRmYl1Fi836mUuMKc5%2F9f2qi7NkLRoqF2WZQ8iakLfuHwrTuTRjTn0zinl7l5oSq1Fz2oHBvA2%2BXZg4r%2B4%2FHVnaZby%2BfMuWK26dWjZN1M7pFudJGl7AL3rbyBV8AD8g1FYXPg9JGgGirsHpSv5%2FAEbEwTb2f9xe6uHITf8s7M6r%2BScm12SrOEBnooW3a%2BBXFWIOxCT6RVHJW24EFMoMoyj7sJs8mkee9UHuIJq8pV5HIlbpVtr4bqAm%2FkssZpSyLZ6vQ3DoFqx4vXDan6XS%2B9lqbDDIvKBv%2BT3MsaYd5KCx%2F201djHVGI7RVA%2B8hmy62tgIybBxdlXdkk346j7lzuMPiNdjIsk20u%2BdBFeboeRmblU2%2BudB30x6HUceMx35cCynmE5mu%2F76i4QcAH7l9vtqxRKDJ1HLn27wFqflXKXl3f2A5fHlAcEIrrgEUgvsTkA56%2F%2F52XNkVEaBOMqVDsW%2BVvI%2B6d%2BYzHHfQlwikW6EtyFBuFV%2B6bct%2FBYRkaOo3IsSHdmRbV9Tqd8kyQ96VLmgevLddPuHGc%2FpUt031VRxY%2FWJn%2Bltdcj8iO9Ec0HaC8oJFJZUI96AbJZGbJWQnJHTYgFs4w4oufvwY6pgGl3vtBGQPLpxlIAaNxhOHxXOqzlLReIeN3TF1eucNpoJ9ST5U6Wo15f52vIjPs62SLLGfwipQ3uiVjYPk493xz294umrP3uWLhEJLRjHChKwcpnXH2L0urlA7nrrbFDaugg%2FPDw7m04COG3iSzQgAxg4yZhQBQ1SzACIpV32H7DDfY5nPk74sitMqhZZkP0u5RXNzXLVFieB75jELIhIdZ3DGkPwpd&X-Amz-Signature=23208f29b4843fd827d9bb25381810817f770a73ad95438f71178ca291d85516&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSACU5T%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDjk%2B52G50ZiJdeGD%2BjgFyB3ssIh8IIXKa2s8T%2ByutYNAiBPMzsoWvd4QYtgKmiteon2yDj9RPfs1fb8scxKye7z1Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4wcZLpIbgNiYuVGYKtwD1EadiPpmLt8ezUSsDepulpJAbe6E9WWnRmYl1Fi836mUuMKc5%2F9f2qi7NkLRoqF2WZQ8iakLfuHwrTuTRjTn0zinl7l5oSq1Fz2oHBvA2%2BXZg4r%2B4%2FHVnaZby%2BfMuWK26dWjZN1M7pFudJGl7AL3rbyBV8AD8g1FYXPg9JGgGirsHpSv5%2FAEbEwTb2f9xe6uHITf8s7M6r%2BScm12SrOEBnooW3a%2BBXFWIOxCT6RVHJW24EFMoMoyj7sJs8mkee9UHuIJq8pV5HIlbpVtr4bqAm%2FkssZpSyLZ6vQ3DoFqx4vXDan6XS%2B9lqbDDIvKBv%2BT3MsaYd5KCx%2F201djHVGI7RVA%2B8hmy62tgIybBxdlXdkk346j7lzuMPiNdjIsk20u%2BdBFeboeRmblU2%2BudB30x6HUceMx35cCynmE5mu%2F76i4QcAH7l9vtqxRKDJ1HLn27wFqflXKXl3f2A5fHlAcEIrrgEUgvsTkA56%2F%2F52XNkVEaBOMqVDsW%2BVvI%2B6d%2BYzHHfQlwikW6EtyFBuFV%2B6bct%2FBYRkaOo3IsSHdmRbV9Tqd8kyQ96VLmgevLddPuHGc%2FpUt031VRxY%2FWJn%2Bltdcj8iO9Ec0HaC8oJFJZUI96AbJZGbJWQnJHTYgFs4w4oufvwY6pgGl3vtBGQPLpxlIAaNxhOHxXOqzlLReIeN3TF1eucNpoJ9ST5U6Wo15f52vIjPs62SLLGfwipQ3uiVjYPk493xz294umrP3uWLhEJLRjHChKwcpnXH2L0urlA7nrrbFDaugg%2FPDw7m04COG3iSzQgAxg4yZhQBQ1SzACIpV32H7DDfY5nPk74sitMqhZZkP0u5RXNzXLVFieB75jELIhIdZ3DGkPwpd&X-Amz-Signature=ed0364fb9de6daf577379c192013ff786363524db0d767f28246172aae413e54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSACU5T%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDjk%2B52G50ZiJdeGD%2BjgFyB3ssIh8IIXKa2s8T%2ByutYNAiBPMzsoWvd4QYtgKmiteon2yDj9RPfs1fb8scxKye7z1Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4wcZLpIbgNiYuVGYKtwD1EadiPpmLt8ezUSsDepulpJAbe6E9WWnRmYl1Fi836mUuMKc5%2F9f2qi7NkLRoqF2WZQ8iakLfuHwrTuTRjTn0zinl7l5oSq1Fz2oHBvA2%2BXZg4r%2B4%2FHVnaZby%2BfMuWK26dWjZN1M7pFudJGl7AL3rbyBV8AD8g1FYXPg9JGgGirsHpSv5%2FAEbEwTb2f9xe6uHITf8s7M6r%2BScm12SrOEBnooW3a%2BBXFWIOxCT6RVHJW24EFMoMoyj7sJs8mkee9UHuIJq8pV5HIlbpVtr4bqAm%2FkssZpSyLZ6vQ3DoFqx4vXDan6XS%2B9lqbDDIvKBv%2BT3MsaYd5KCx%2F201djHVGI7RVA%2B8hmy62tgIybBxdlXdkk346j7lzuMPiNdjIsk20u%2BdBFeboeRmblU2%2BudB30x6HUceMx35cCynmE5mu%2F76i4QcAH7l9vtqxRKDJ1HLn27wFqflXKXl3f2A5fHlAcEIrrgEUgvsTkA56%2F%2F52XNkVEaBOMqVDsW%2BVvI%2B6d%2BYzHHfQlwikW6EtyFBuFV%2B6bct%2FBYRkaOo3IsSHdmRbV9Tqd8kyQ96VLmgevLddPuHGc%2FpUt031VRxY%2FWJn%2Bltdcj8iO9Ec0HaC8oJFJZUI96AbJZGbJWQnJHTYgFs4w4oufvwY6pgGl3vtBGQPLpxlIAaNxhOHxXOqzlLReIeN3TF1eucNpoJ9ST5U6Wo15f52vIjPs62SLLGfwipQ3uiVjYPk493xz294umrP3uWLhEJLRjHChKwcpnXH2L0urlA7nrrbFDaugg%2FPDw7m04COG3iSzQgAxg4yZhQBQ1SzACIpV32H7DDfY5nPk74sitMqhZZkP0u5RXNzXLVFieB75jELIhIdZ3DGkPwpd&X-Amz-Signature=e64b03e160c8d97366d5af324147d51e802866080037b5baca97872bb9c87fde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSACU5T%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDjk%2B52G50ZiJdeGD%2BjgFyB3ssIh8IIXKa2s8T%2ByutYNAiBPMzsoWvd4QYtgKmiteon2yDj9RPfs1fb8scxKye7z1Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4wcZLpIbgNiYuVGYKtwD1EadiPpmLt8ezUSsDepulpJAbe6E9WWnRmYl1Fi836mUuMKc5%2F9f2qi7NkLRoqF2WZQ8iakLfuHwrTuTRjTn0zinl7l5oSq1Fz2oHBvA2%2BXZg4r%2B4%2FHVnaZby%2BfMuWK26dWjZN1M7pFudJGl7AL3rbyBV8AD8g1FYXPg9JGgGirsHpSv5%2FAEbEwTb2f9xe6uHITf8s7M6r%2BScm12SrOEBnooW3a%2BBXFWIOxCT6RVHJW24EFMoMoyj7sJs8mkee9UHuIJq8pV5HIlbpVtr4bqAm%2FkssZpSyLZ6vQ3DoFqx4vXDan6XS%2B9lqbDDIvKBv%2BT3MsaYd5KCx%2F201djHVGI7RVA%2B8hmy62tgIybBxdlXdkk346j7lzuMPiNdjIsk20u%2BdBFeboeRmblU2%2BudB30x6HUceMx35cCynmE5mu%2F76i4QcAH7l9vtqxRKDJ1HLn27wFqflXKXl3f2A5fHlAcEIrrgEUgvsTkA56%2F%2F52XNkVEaBOMqVDsW%2BVvI%2B6d%2BYzHHfQlwikW6EtyFBuFV%2B6bct%2FBYRkaOo3IsSHdmRbV9Tqd8kyQ96VLmgevLddPuHGc%2FpUt031VRxY%2FWJn%2Bltdcj8iO9Ec0HaC8oJFJZUI96AbJZGbJWQnJHTYgFs4w4oufvwY6pgGl3vtBGQPLpxlIAaNxhOHxXOqzlLReIeN3TF1eucNpoJ9ST5U6Wo15f52vIjPs62SLLGfwipQ3uiVjYPk493xz294umrP3uWLhEJLRjHChKwcpnXH2L0urlA7nrrbFDaugg%2FPDw7m04COG3iSzQgAxg4yZhQBQ1SzACIpV32H7DDfY5nPk74sitMqhZZkP0u5RXNzXLVFieB75jELIhIdZ3DGkPwpd&X-Amz-Signature=565a54eeb640bf2d244f813f24025c5f7a1d9b1e6e5350db90aaefef8ec47b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSACU5T%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDjk%2B52G50ZiJdeGD%2BjgFyB3ssIh8IIXKa2s8T%2ByutYNAiBPMzsoWvd4QYtgKmiteon2yDj9RPfs1fb8scxKye7z1Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM4wcZLpIbgNiYuVGYKtwD1EadiPpmLt8ezUSsDepulpJAbe6E9WWnRmYl1Fi836mUuMKc5%2F9f2qi7NkLRoqF2WZQ8iakLfuHwrTuTRjTn0zinl7l5oSq1Fz2oHBvA2%2BXZg4r%2B4%2FHVnaZby%2BfMuWK26dWjZN1M7pFudJGl7AL3rbyBV8AD8g1FYXPg9JGgGirsHpSv5%2FAEbEwTb2f9xe6uHITf8s7M6r%2BScm12SrOEBnooW3a%2BBXFWIOxCT6RVHJW24EFMoMoyj7sJs8mkee9UHuIJq8pV5HIlbpVtr4bqAm%2FkssZpSyLZ6vQ3DoFqx4vXDan6XS%2B9lqbDDIvKBv%2BT3MsaYd5KCx%2F201djHVGI7RVA%2B8hmy62tgIybBxdlXdkk346j7lzuMPiNdjIsk20u%2BdBFeboeRmblU2%2BudB30x6HUceMx35cCynmE5mu%2F76i4QcAH7l9vtqxRKDJ1HLn27wFqflXKXl3f2A5fHlAcEIrrgEUgvsTkA56%2F%2F52XNkVEaBOMqVDsW%2BVvI%2B6d%2BYzHHfQlwikW6EtyFBuFV%2B6bct%2FBYRkaOo3IsSHdmRbV9Tqd8kyQ96VLmgevLddPuHGc%2FpUt031VRxY%2FWJn%2Bltdcj8iO9Ec0HaC8oJFJZUI96AbJZGbJWQnJHTYgFs4w4oufvwY6pgGl3vtBGQPLpxlIAaNxhOHxXOqzlLReIeN3TF1eucNpoJ9ST5U6Wo15f52vIjPs62SLLGfwipQ3uiVjYPk493xz294umrP3uWLhEJLRjHChKwcpnXH2L0urlA7nrrbFDaugg%2FPDw7m04COG3iSzQgAxg4yZhQBQ1SzACIpV32H7DDfY5nPk74sitMqhZZkP0u5RXNzXLVFieB75jELIhIdZ3DGkPwpd&X-Amz-Signature=95525fffcb4a93d77517e260573f008a56d1bd916f243224870d6a0d790d7bf9&X-Amz-SignedHeaders=host&x-id=GetObject)
