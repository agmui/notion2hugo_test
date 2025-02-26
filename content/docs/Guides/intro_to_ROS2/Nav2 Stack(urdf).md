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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3P3EGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAEAB%2BBArDmjftIYzIHptMsjwEt%2FhlLz580HWUfjRA1AiEA0F%2FvzxSVlh9p3CojlBLWwqkCgmGB5GZhVAGQR2OUg4oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBvaa6kymhTG%2B5BFjyrcA8r2RLe9w3kyvCkuC%2BxkVeQ38oT2cdBHoPhIkju9zhjZob1YcK6zKmA%2BgXtGYRqz0bYuHLgX6KR%2F8oTBpDIPRG6eLu47LmtaFAar2s%2FG2QK5al55rXO1Z%2BXZWusHXtc%2FTpAAihMPBFOE0QqKWc7hfSVcKKaA%2BOlgWHjwZ7gseHMDnN3h9ytV5KX%2BTGXKtFO4zrzrNce6jpyhSmLLt5zeITec%2BiWf%2BQgekn5ZywMPX4W%2BT7Kte5i1JPGFL9WXZA0byx3oqu%2F0J5HjbA%2Fxt4zhZknEyEcIGPSXMDJNBGq9pVVeyX%2F95AWNUoF2vFF%2FcXbZOiJY%2BZ9kcNo90FMfkpuZKyvKNX7KfIKOsQg5l2B9%2FpaT%2BmU2Oa84W8JlbPkVtc3w%2Fp9BC7L2UFHdsyiuLIHaXyuiBYqogazQlE%2FxJi0lJgTcvpsBxDqOFMtqTnTialA4cKW4yD4kg2SBYpxlwbFLTS2%2FM%2B%2FuTft9VZug%2F3Vh1XWt7is%2FlDbgtW5aR1ItqhQ7yqWiRpDUNZQurpSbG5Ef7IzrQUlvUrFgVQPynO4T5aQg5HINCbx6BmnvpihstbUoZAw9mCHxraBxkCTCfhrTVC6G2bgHCXwcsQ%2BygrpDEPFOiTd5UJtWyRsnCigYMI%2BB%2Fr0GOqUBDoMPujcUXP%2FvBko1dvjfMLiFs3SssSvrWAno9VPDGXX5sfW2tuJoj5NRdkz6ske%2FyXO4jx3tyMpUKfCESzD2cOyOfGC4VfSLOh2xUjD6EJoQoKpHOnqoS8F3w%2FmfPMv8P8yNNzZF3eJYxhhXo1lO2l85YpoQMH9GgmRLJy%2FbGbjlPS1ssx7ac8qULz4n%2FE%2FyWvtkZf63N7%2B5%2F7YrD5mZ3lJnaM6W&X-Amz-Signature=191ba90dd901b6f9048744e0bbcb53d1c4b555d153272d2cdae46e662ed6b8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3P3EGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAEAB%2BBArDmjftIYzIHptMsjwEt%2FhlLz580HWUfjRA1AiEA0F%2FvzxSVlh9p3CojlBLWwqkCgmGB5GZhVAGQR2OUg4oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBvaa6kymhTG%2B5BFjyrcA8r2RLe9w3kyvCkuC%2BxkVeQ38oT2cdBHoPhIkju9zhjZob1YcK6zKmA%2BgXtGYRqz0bYuHLgX6KR%2F8oTBpDIPRG6eLu47LmtaFAar2s%2FG2QK5al55rXO1Z%2BXZWusHXtc%2FTpAAihMPBFOE0QqKWc7hfSVcKKaA%2BOlgWHjwZ7gseHMDnN3h9ytV5KX%2BTGXKtFO4zrzrNce6jpyhSmLLt5zeITec%2BiWf%2BQgekn5ZywMPX4W%2BT7Kte5i1JPGFL9WXZA0byx3oqu%2F0J5HjbA%2Fxt4zhZknEyEcIGPSXMDJNBGq9pVVeyX%2F95AWNUoF2vFF%2FcXbZOiJY%2BZ9kcNo90FMfkpuZKyvKNX7KfIKOsQg5l2B9%2FpaT%2BmU2Oa84W8JlbPkVtc3w%2Fp9BC7L2UFHdsyiuLIHaXyuiBYqogazQlE%2FxJi0lJgTcvpsBxDqOFMtqTnTialA4cKW4yD4kg2SBYpxlwbFLTS2%2FM%2B%2FuTft9VZug%2F3Vh1XWt7is%2FlDbgtW5aR1ItqhQ7yqWiRpDUNZQurpSbG5Ef7IzrQUlvUrFgVQPynO4T5aQg5HINCbx6BmnvpihstbUoZAw9mCHxraBxkCTCfhrTVC6G2bgHCXwcsQ%2BygrpDEPFOiTd5UJtWyRsnCigYMI%2BB%2Fr0GOqUBDoMPujcUXP%2FvBko1dvjfMLiFs3SssSvrWAno9VPDGXX5sfW2tuJoj5NRdkz6ske%2FyXO4jx3tyMpUKfCESzD2cOyOfGC4VfSLOh2xUjD6EJoQoKpHOnqoS8F3w%2FmfPMv8P8yNNzZF3eJYxhhXo1lO2l85YpoQMH9GgmRLJy%2FbGbjlPS1ssx7ac8qULz4n%2FE%2FyWvtkZf63N7%2B5%2F7YrD5mZ3lJnaM6W&X-Amz-Signature=004744ec0a8e8a75e274813adbcecadbdc3e7019756e1ace221d53394eebc6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3P3EGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAEAB%2BBArDmjftIYzIHptMsjwEt%2FhlLz580HWUfjRA1AiEA0F%2FvzxSVlh9p3CojlBLWwqkCgmGB5GZhVAGQR2OUg4oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBvaa6kymhTG%2B5BFjyrcA8r2RLe9w3kyvCkuC%2BxkVeQ38oT2cdBHoPhIkju9zhjZob1YcK6zKmA%2BgXtGYRqz0bYuHLgX6KR%2F8oTBpDIPRG6eLu47LmtaFAar2s%2FG2QK5al55rXO1Z%2BXZWusHXtc%2FTpAAihMPBFOE0QqKWc7hfSVcKKaA%2BOlgWHjwZ7gseHMDnN3h9ytV5KX%2BTGXKtFO4zrzrNce6jpyhSmLLt5zeITec%2BiWf%2BQgekn5ZywMPX4W%2BT7Kte5i1JPGFL9WXZA0byx3oqu%2F0J5HjbA%2Fxt4zhZknEyEcIGPSXMDJNBGq9pVVeyX%2F95AWNUoF2vFF%2FcXbZOiJY%2BZ9kcNo90FMfkpuZKyvKNX7KfIKOsQg5l2B9%2FpaT%2BmU2Oa84W8JlbPkVtc3w%2Fp9BC7L2UFHdsyiuLIHaXyuiBYqogazQlE%2FxJi0lJgTcvpsBxDqOFMtqTnTialA4cKW4yD4kg2SBYpxlwbFLTS2%2FM%2B%2FuTft9VZug%2F3Vh1XWt7is%2FlDbgtW5aR1ItqhQ7yqWiRpDUNZQurpSbG5Ef7IzrQUlvUrFgVQPynO4T5aQg5HINCbx6BmnvpihstbUoZAw9mCHxraBxkCTCfhrTVC6G2bgHCXwcsQ%2BygrpDEPFOiTd5UJtWyRsnCigYMI%2BB%2Fr0GOqUBDoMPujcUXP%2FvBko1dvjfMLiFs3SssSvrWAno9VPDGXX5sfW2tuJoj5NRdkz6ske%2FyXO4jx3tyMpUKfCESzD2cOyOfGC4VfSLOh2xUjD6EJoQoKpHOnqoS8F3w%2FmfPMv8P8yNNzZF3eJYxhhXo1lO2l85YpoQMH9GgmRLJy%2FbGbjlPS1ssx7ac8qULz4n%2FE%2FyWvtkZf63N7%2B5%2F7YrD5mZ3lJnaM6W&X-Amz-Signature=44a21ab7eeca683ecd74a4d998b9bf6e64185554223580e4f8a4b1a9a42bbabb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3P3EGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAEAB%2BBArDmjftIYzIHptMsjwEt%2FhlLz580HWUfjRA1AiEA0F%2FvzxSVlh9p3CojlBLWwqkCgmGB5GZhVAGQR2OUg4oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBvaa6kymhTG%2B5BFjyrcA8r2RLe9w3kyvCkuC%2BxkVeQ38oT2cdBHoPhIkju9zhjZob1YcK6zKmA%2BgXtGYRqz0bYuHLgX6KR%2F8oTBpDIPRG6eLu47LmtaFAar2s%2FG2QK5al55rXO1Z%2BXZWusHXtc%2FTpAAihMPBFOE0QqKWc7hfSVcKKaA%2BOlgWHjwZ7gseHMDnN3h9ytV5KX%2BTGXKtFO4zrzrNce6jpyhSmLLt5zeITec%2BiWf%2BQgekn5ZywMPX4W%2BT7Kte5i1JPGFL9WXZA0byx3oqu%2F0J5HjbA%2Fxt4zhZknEyEcIGPSXMDJNBGq9pVVeyX%2F95AWNUoF2vFF%2FcXbZOiJY%2BZ9kcNo90FMfkpuZKyvKNX7KfIKOsQg5l2B9%2FpaT%2BmU2Oa84W8JlbPkVtc3w%2Fp9BC7L2UFHdsyiuLIHaXyuiBYqogazQlE%2FxJi0lJgTcvpsBxDqOFMtqTnTialA4cKW4yD4kg2SBYpxlwbFLTS2%2FM%2B%2FuTft9VZug%2F3Vh1XWt7is%2FlDbgtW5aR1ItqhQ7yqWiRpDUNZQurpSbG5Ef7IzrQUlvUrFgVQPynO4T5aQg5HINCbx6BmnvpihstbUoZAw9mCHxraBxkCTCfhrTVC6G2bgHCXwcsQ%2BygrpDEPFOiTd5UJtWyRsnCigYMI%2BB%2Fr0GOqUBDoMPujcUXP%2FvBko1dvjfMLiFs3SssSvrWAno9VPDGXX5sfW2tuJoj5NRdkz6ske%2FyXO4jx3tyMpUKfCESzD2cOyOfGC4VfSLOh2xUjD6EJoQoKpHOnqoS8F3w%2FmfPMv8P8yNNzZF3eJYxhhXo1lO2l85YpoQMH9GgmRLJy%2FbGbjlPS1ssx7ac8qULz4n%2FE%2FyWvtkZf63N7%2B5%2F7YrD5mZ3lJnaM6W&X-Amz-Signature=f12636ce133dba4607cfc13da9ceb3d2b2fa94ea3eb1c13400acaae7570958fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3P3EGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAEAB%2BBArDmjftIYzIHptMsjwEt%2FhlLz580HWUfjRA1AiEA0F%2FvzxSVlh9p3CojlBLWwqkCgmGB5GZhVAGQR2OUg4oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBvaa6kymhTG%2B5BFjyrcA8r2RLe9w3kyvCkuC%2BxkVeQ38oT2cdBHoPhIkju9zhjZob1YcK6zKmA%2BgXtGYRqz0bYuHLgX6KR%2F8oTBpDIPRG6eLu47LmtaFAar2s%2FG2QK5al55rXO1Z%2BXZWusHXtc%2FTpAAihMPBFOE0QqKWc7hfSVcKKaA%2BOlgWHjwZ7gseHMDnN3h9ytV5KX%2BTGXKtFO4zrzrNce6jpyhSmLLt5zeITec%2BiWf%2BQgekn5ZywMPX4W%2BT7Kte5i1JPGFL9WXZA0byx3oqu%2F0J5HjbA%2Fxt4zhZknEyEcIGPSXMDJNBGq9pVVeyX%2F95AWNUoF2vFF%2FcXbZOiJY%2BZ9kcNo90FMfkpuZKyvKNX7KfIKOsQg5l2B9%2FpaT%2BmU2Oa84W8JlbPkVtc3w%2Fp9BC7L2UFHdsyiuLIHaXyuiBYqogazQlE%2FxJi0lJgTcvpsBxDqOFMtqTnTialA4cKW4yD4kg2SBYpxlwbFLTS2%2FM%2B%2FuTft9VZug%2F3Vh1XWt7is%2FlDbgtW5aR1ItqhQ7yqWiRpDUNZQurpSbG5Ef7IzrQUlvUrFgVQPynO4T5aQg5HINCbx6BmnvpihstbUoZAw9mCHxraBxkCTCfhrTVC6G2bgHCXwcsQ%2BygrpDEPFOiTd5UJtWyRsnCigYMI%2BB%2Fr0GOqUBDoMPujcUXP%2FvBko1dvjfMLiFs3SssSvrWAno9VPDGXX5sfW2tuJoj5NRdkz6ske%2FyXO4jx3tyMpUKfCESzD2cOyOfGC4VfSLOh2xUjD6EJoQoKpHOnqoS8F3w%2FmfPMv8P8yNNzZF3eJYxhhXo1lO2l85YpoQMH9GgmRLJy%2FbGbjlPS1ssx7ac8qULz4n%2FE%2FyWvtkZf63N7%2B5%2F7YrD5mZ3lJnaM6W&X-Amz-Signature=99373fadc94752df5b275e2b5528ebf2e42cd9b5d252b8c084bda753428dbe13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3P3EGW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAEAB%2BBArDmjftIYzIHptMsjwEt%2FhlLz580HWUfjRA1AiEA0F%2FvzxSVlh9p3CojlBLWwqkCgmGB5GZhVAGQR2OUg4oq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBvaa6kymhTG%2B5BFjyrcA8r2RLe9w3kyvCkuC%2BxkVeQ38oT2cdBHoPhIkju9zhjZob1YcK6zKmA%2BgXtGYRqz0bYuHLgX6KR%2F8oTBpDIPRG6eLu47LmtaFAar2s%2FG2QK5al55rXO1Z%2BXZWusHXtc%2FTpAAihMPBFOE0QqKWc7hfSVcKKaA%2BOlgWHjwZ7gseHMDnN3h9ytV5KX%2BTGXKtFO4zrzrNce6jpyhSmLLt5zeITec%2BiWf%2BQgekn5ZywMPX4W%2BT7Kte5i1JPGFL9WXZA0byx3oqu%2F0J5HjbA%2Fxt4zhZknEyEcIGPSXMDJNBGq9pVVeyX%2F95AWNUoF2vFF%2FcXbZOiJY%2BZ9kcNo90FMfkpuZKyvKNX7KfIKOsQg5l2B9%2FpaT%2BmU2Oa84W8JlbPkVtc3w%2Fp9BC7L2UFHdsyiuLIHaXyuiBYqogazQlE%2FxJi0lJgTcvpsBxDqOFMtqTnTialA4cKW4yD4kg2SBYpxlwbFLTS2%2FM%2B%2FuTft9VZug%2F3Vh1XWt7is%2FlDbgtW5aR1ItqhQ7yqWiRpDUNZQurpSbG5Ef7IzrQUlvUrFgVQPynO4T5aQg5HINCbx6BmnvpihstbUoZAw9mCHxraBxkCTCfhrTVC6G2bgHCXwcsQ%2BygrpDEPFOiTd5UJtWyRsnCigYMI%2BB%2Fr0GOqUBDoMPujcUXP%2FvBko1dvjfMLiFs3SssSvrWAno9VPDGXX5sfW2tuJoj5NRdkz6ske%2FyXO4jx3tyMpUKfCESzD2cOyOfGC4VfSLOh2xUjD6EJoQoKpHOnqoS8F3w%2FmfPMv8P8yNNzZF3eJYxhhXo1lO2l85YpoQMH9GgmRLJy%2FbGbjlPS1ssx7ac8qULz4n%2FE%2FyWvtkZf63N7%2B5%2F7YrD5mZ3lJnaM6W&X-Amz-Signature=f148c5cadde97b4ec2f1f1a96304426976ac5cbab118f75b81411e5f6bff86a5&X-Amz-SignedHeaders=host&x-id=GetObject)
