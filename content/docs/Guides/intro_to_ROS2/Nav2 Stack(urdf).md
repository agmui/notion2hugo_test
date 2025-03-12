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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LXJ264%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1gpJe3SVJMNgXdqkb8c2CdtIvnGFUL3ZlQAPvFOuCSwIhAJL7huajJ%2FzcMDpO5tuoJ6Vu0oYdouJqhQwRGXnbWDtmKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0HlzCEfrFDUf1l3gq3AN5B8qDjI0Zze11Q0hJWTPGiGjJ%2BRjFtvRMfyUffUUrn1gPa4WsSJBRyXtfDM5c1LmpA2uCvC19LSFyXp6yswO1Zrr8Cff3cQcKXWivATW4RRf9Hvqof7p1XJEws%2Fr2BSPVkittYz1o2q%2BD7HEfhH0LbyYNVVK4xzjvSzSaGLdMe7NNWsIU%2B279mN3pRZvGMReQIV3sNbMWNN2cmykglsprD6YmTTxgmDn7TKkNU4xk70rLom6riRSHHPXGTDSqYwTBdcw55vQ11%2F7A%2FnL5EDw2VTQHgmQZZDQuBjem4xMKSCit8608OKacCjPqd6ffQpAsE2W04oCoCPEEag49x6G%2Bxh05VpwaB9xJL6h%2B%2BJVvyeqVxr9XW6VgNTJUUXSPWswRct9gBUdzbPv0YlfyDtiB9dDDcPR80H2ri2DLLDyJty%2BOAwxNGZFyZWjW5UgE%2FEieFj56ueMIygr58tu7AloIuv8vBXEZvZnS5PdSt8dkGkVj1r2prhGVMS647Yqn0oPT1AP8filBMHkPmfZCrCLjcCC%2B4zc0EaZkCzwqlYzkB9VOEb%2F3qIx3gy9JFJcK2MALLwxjVtHi15ETKLFNo50Tw3IQsuh7Su39omzL0MjfBvG3tyHFWtrjXNtRdjDAw8e%2BBjqkATgFGUAZArMyjzpSYQQNTwQNS38OxNda07QdR4KQGpCxhqtMMQcfB43RFpFZry7p6oemUbAXWLz1hWfhr8aZ8%2BypV2xrPcqfu4%2FA5LOPrnAUknV54Aes8DFlt%2BMmDpZvlzB7afEQ1TMEHStTiPXRA%2Fs6yMCEJA5ogt%2BT2R1Zi6qp%2FX7ctsO7YSUQsYuv%2B190p54xL1W6GJzPLKykhfSq3rVIK6j5&X-Amz-Signature=515585e809adfff84a210ebb9e1b37d07b758705256801988aace3f4669b7203&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LXJ264%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1gpJe3SVJMNgXdqkb8c2CdtIvnGFUL3ZlQAPvFOuCSwIhAJL7huajJ%2FzcMDpO5tuoJ6Vu0oYdouJqhQwRGXnbWDtmKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0HlzCEfrFDUf1l3gq3AN5B8qDjI0Zze11Q0hJWTPGiGjJ%2BRjFtvRMfyUffUUrn1gPa4WsSJBRyXtfDM5c1LmpA2uCvC19LSFyXp6yswO1Zrr8Cff3cQcKXWivATW4RRf9Hvqof7p1XJEws%2Fr2BSPVkittYz1o2q%2BD7HEfhH0LbyYNVVK4xzjvSzSaGLdMe7NNWsIU%2B279mN3pRZvGMReQIV3sNbMWNN2cmykglsprD6YmTTxgmDn7TKkNU4xk70rLom6riRSHHPXGTDSqYwTBdcw55vQ11%2F7A%2FnL5EDw2VTQHgmQZZDQuBjem4xMKSCit8608OKacCjPqd6ffQpAsE2W04oCoCPEEag49x6G%2Bxh05VpwaB9xJL6h%2B%2BJVvyeqVxr9XW6VgNTJUUXSPWswRct9gBUdzbPv0YlfyDtiB9dDDcPR80H2ri2DLLDyJty%2BOAwxNGZFyZWjW5UgE%2FEieFj56ueMIygr58tu7AloIuv8vBXEZvZnS5PdSt8dkGkVj1r2prhGVMS647Yqn0oPT1AP8filBMHkPmfZCrCLjcCC%2B4zc0EaZkCzwqlYzkB9VOEb%2F3qIx3gy9JFJcK2MALLwxjVtHi15ETKLFNo50Tw3IQsuh7Su39omzL0MjfBvG3tyHFWtrjXNtRdjDAw8e%2BBjqkATgFGUAZArMyjzpSYQQNTwQNS38OxNda07QdR4KQGpCxhqtMMQcfB43RFpFZry7p6oemUbAXWLz1hWfhr8aZ8%2BypV2xrPcqfu4%2FA5LOPrnAUknV54Aes8DFlt%2BMmDpZvlzB7afEQ1TMEHStTiPXRA%2Fs6yMCEJA5ogt%2BT2R1Zi6qp%2FX7ctsO7YSUQsYuv%2B190p54xL1W6GJzPLKykhfSq3rVIK6j5&X-Amz-Signature=96103be65bf5baa0ca643d899bb467ffb5c6a06ff49b395b3e91b24321c8437b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LXJ264%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1gpJe3SVJMNgXdqkb8c2CdtIvnGFUL3ZlQAPvFOuCSwIhAJL7huajJ%2FzcMDpO5tuoJ6Vu0oYdouJqhQwRGXnbWDtmKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0HlzCEfrFDUf1l3gq3AN5B8qDjI0Zze11Q0hJWTPGiGjJ%2BRjFtvRMfyUffUUrn1gPa4WsSJBRyXtfDM5c1LmpA2uCvC19LSFyXp6yswO1Zrr8Cff3cQcKXWivATW4RRf9Hvqof7p1XJEws%2Fr2BSPVkittYz1o2q%2BD7HEfhH0LbyYNVVK4xzjvSzSaGLdMe7NNWsIU%2B279mN3pRZvGMReQIV3sNbMWNN2cmykglsprD6YmTTxgmDn7TKkNU4xk70rLom6riRSHHPXGTDSqYwTBdcw55vQ11%2F7A%2FnL5EDw2VTQHgmQZZDQuBjem4xMKSCit8608OKacCjPqd6ffQpAsE2W04oCoCPEEag49x6G%2Bxh05VpwaB9xJL6h%2B%2BJVvyeqVxr9XW6VgNTJUUXSPWswRct9gBUdzbPv0YlfyDtiB9dDDcPR80H2ri2DLLDyJty%2BOAwxNGZFyZWjW5UgE%2FEieFj56ueMIygr58tu7AloIuv8vBXEZvZnS5PdSt8dkGkVj1r2prhGVMS647Yqn0oPT1AP8filBMHkPmfZCrCLjcCC%2B4zc0EaZkCzwqlYzkB9VOEb%2F3qIx3gy9JFJcK2MALLwxjVtHi15ETKLFNo50Tw3IQsuh7Su39omzL0MjfBvG3tyHFWtrjXNtRdjDAw8e%2BBjqkATgFGUAZArMyjzpSYQQNTwQNS38OxNda07QdR4KQGpCxhqtMMQcfB43RFpFZry7p6oemUbAXWLz1hWfhr8aZ8%2BypV2xrPcqfu4%2FA5LOPrnAUknV54Aes8DFlt%2BMmDpZvlzB7afEQ1TMEHStTiPXRA%2Fs6yMCEJA5ogt%2BT2R1Zi6qp%2FX7ctsO7YSUQsYuv%2B190p54xL1W6GJzPLKykhfSq3rVIK6j5&X-Amz-Signature=50105782cec04bc3749f200bae5a84870fb1000b352197c45d1495e1a4a12da1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LXJ264%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1gpJe3SVJMNgXdqkb8c2CdtIvnGFUL3ZlQAPvFOuCSwIhAJL7huajJ%2FzcMDpO5tuoJ6Vu0oYdouJqhQwRGXnbWDtmKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0HlzCEfrFDUf1l3gq3AN5B8qDjI0Zze11Q0hJWTPGiGjJ%2BRjFtvRMfyUffUUrn1gPa4WsSJBRyXtfDM5c1LmpA2uCvC19LSFyXp6yswO1Zrr8Cff3cQcKXWivATW4RRf9Hvqof7p1XJEws%2Fr2BSPVkittYz1o2q%2BD7HEfhH0LbyYNVVK4xzjvSzSaGLdMe7NNWsIU%2B279mN3pRZvGMReQIV3sNbMWNN2cmykglsprD6YmTTxgmDn7TKkNU4xk70rLom6riRSHHPXGTDSqYwTBdcw55vQ11%2F7A%2FnL5EDw2VTQHgmQZZDQuBjem4xMKSCit8608OKacCjPqd6ffQpAsE2W04oCoCPEEag49x6G%2Bxh05VpwaB9xJL6h%2B%2BJVvyeqVxr9XW6VgNTJUUXSPWswRct9gBUdzbPv0YlfyDtiB9dDDcPR80H2ri2DLLDyJty%2BOAwxNGZFyZWjW5UgE%2FEieFj56ueMIygr58tu7AloIuv8vBXEZvZnS5PdSt8dkGkVj1r2prhGVMS647Yqn0oPT1AP8filBMHkPmfZCrCLjcCC%2B4zc0EaZkCzwqlYzkB9VOEb%2F3qIx3gy9JFJcK2MALLwxjVtHi15ETKLFNo50Tw3IQsuh7Su39omzL0MjfBvG3tyHFWtrjXNtRdjDAw8e%2BBjqkATgFGUAZArMyjzpSYQQNTwQNS38OxNda07QdR4KQGpCxhqtMMQcfB43RFpFZry7p6oemUbAXWLz1hWfhr8aZ8%2BypV2xrPcqfu4%2FA5LOPrnAUknV54Aes8DFlt%2BMmDpZvlzB7afEQ1TMEHStTiPXRA%2Fs6yMCEJA5ogt%2BT2R1Zi6qp%2FX7ctsO7YSUQsYuv%2B190p54xL1W6GJzPLKykhfSq3rVIK6j5&X-Amz-Signature=114e9717d6777c1d14eb06318f3ecd563e97abdebcdda12d8f33a5d532112ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LXJ264%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1gpJe3SVJMNgXdqkb8c2CdtIvnGFUL3ZlQAPvFOuCSwIhAJL7huajJ%2FzcMDpO5tuoJ6Vu0oYdouJqhQwRGXnbWDtmKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0HlzCEfrFDUf1l3gq3AN5B8qDjI0Zze11Q0hJWTPGiGjJ%2BRjFtvRMfyUffUUrn1gPa4WsSJBRyXtfDM5c1LmpA2uCvC19LSFyXp6yswO1Zrr8Cff3cQcKXWivATW4RRf9Hvqof7p1XJEws%2Fr2BSPVkittYz1o2q%2BD7HEfhH0LbyYNVVK4xzjvSzSaGLdMe7NNWsIU%2B279mN3pRZvGMReQIV3sNbMWNN2cmykglsprD6YmTTxgmDn7TKkNU4xk70rLom6riRSHHPXGTDSqYwTBdcw55vQ11%2F7A%2FnL5EDw2VTQHgmQZZDQuBjem4xMKSCit8608OKacCjPqd6ffQpAsE2W04oCoCPEEag49x6G%2Bxh05VpwaB9xJL6h%2B%2BJVvyeqVxr9XW6VgNTJUUXSPWswRct9gBUdzbPv0YlfyDtiB9dDDcPR80H2ri2DLLDyJty%2BOAwxNGZFyZWjW5UgE%2FEieFj56ueMIygr58tu7AloIuv8vBXEZvZnS5PdSt8dkGkVj1r2prhGVMS647Yqn0oPT1AP8filBMHkPmfZCrCLjcCC%2B4zc0EaZkCzwqlYzkB9VOEb%2F3qIx3gy9JFJcK2MALLwxjVtHi15ETKLFNo50Tw3IQsuh7Su39omzL0MjfBvG3tyHFWtrjXNtRdjDAw8e%2BBjqkATgFGUAZArMyjzpSYQQNTwQNS38OxNda07QdR4KQGpCxhqtMMQcfB43RFpFZry7p6oemUbAXWLz1hWfhr8aZ8%2BypV2xrPcqfu4%2FA5LOPrnAUknV54Aes8DFlt%2BMmDpZvlzB7afEQ1TMEHStTiPXRA%2Fs6yMCEJA5ogt%2BT2R1Zi6qp%2FX7ctsO7YSUQsYuv%2B190p54xL1W6GJzPLKykhfSq3rVIK6j5&X-Amz-Signature=bd046450a659c6057289f7fb57c3a092c5289db639bd2ad4ad9ae3773f75dcd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LXJ264%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD1gpJe3SVJMNgXdqkb8c2CdtIvnGFUL3ZlQAPvFOuCSwIhAJL7huajJ%2FzcMDpO5tuoJ6Vu0oYdouJqhQwRGXnbWDtmKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0HlzCEfrFDUf1l3gq3AN5B8qDjI0Zze11Q0hJWTPGiGjJ%2BRjFtvRMfyUffUUrn1gPa4WsSJBRyXtfDM5c1LmpA2uCvC19LSFyXp6yswO1Zrr8Cff3cQcKXWivATW4RRf9Hvqof7p1XJEws%2Fr2BSPVkittYz1o2q%2BD7HEfhH0LbyYNVVK4xzjvSzSaGLdMe7NNWsIU%2B279mN3pRZvGMReQIV3sNbMWNN2cmykglsprD6YmTTxgmDn7TKkNU4xk70rLom6riRSHHPXGTDSqYwTBdcw55vQ11%2F7A%2FnL5EDw2VTQHgmQZZDQuBjem4xMKSCit8608OKacCjPqd6ffQpAsE2W04oCoCPEEag49x6G%2Bxh05VpwaB9xJL6h%2B%2BJVvyeqVxr9XW6VgNTJUUXSPWswRct9gBUdzbPv0YlfyDtiB9dDDcPR80H2ri2DLLDyJty%2BOAwxNGZFyZWjW5UgE%2FEieFj56ueMIygr58tu7AloIuv8vBXEZvZnS5PdSt8dkGkVj1r2prhGVMS647Yqn0oPT1AP8filBMHkPmfZCrCLjcCC%2B4zc0EaZkCzwqlYzkB9VOEb%2F3qIx3gy9JFJcK2MALLwxjVtHi15ETKLFNo50Tw3IQsuh7Su39omzL0MjfBvG3tyHFWtrjXNtRdjDAw8e%2BBjqkATgFGUAZArMyjzpSYQQNTwQNS38OxNda07QdR4KQGpCxhqtMMQcfB43RFpFZry7p6oemUbAXWLz1hWfhr8aZ8%2BypV2xrPcqfu4%2FA5LOPrnAUknV54Aes8DFlt%2BMmDpZvlzB7afEQ1TMEHStTiPXRA%2Fs6yMCEJA5ogt%2BT2R1Zi6qp%2FX7ctsO7YSUQsYuv%2B190p54xL1W6GJzPLKykhfSq3rVIK6j5&X-Amz-Signature=db89478052c0cd13fedcb1ffc37736e6400a982271c2ea5c6fbc95b2cfaa55ef&X-Amz-SignedHeaders=host&x-id=GetObject)
