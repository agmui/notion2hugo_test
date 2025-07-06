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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEB55BX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJgNuAnUd7f7m6ONPIu7n2Yn4MMVmVLFs0zXjXIegykgIgSUFhxZGQVWKCNAgxzpFykPm6Quqof3oxrrIva3cnpUMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGPMFu%2F%2Fj8SuP%2FcGpCrcA1yt3Hry8X8PRzKCtY2iFeqIbsqq94OTqkCOoKMZIkMZ8qsPaRqjJP3o5IXmPTbz5yPW05IcezTNwYJqFLIpPvX9lpOvzy7QNgPKhClw4A2vi8mOn0YvynlmRCueNrtc7yGkvPlLEETC%2FReH04KYYXqq1VpsFiHVBmlwkfpUyDoRwAV3%2FU1tVjmYVKthGY4Swn3MN5EtimAAtUCnANqHaZT%2Fj0oruTQsO4EmF85EaJvwwlGg5rFnF9%2BL0bin2AJAfOwPDVNgKVgAZrk5zqgsmlFpt%2FwNjGdUE5fQwsuG5SLZX02J0f2x6ToTTsl6SOMV8lKh75PWRgxozIBDxOhkbfRxwB0JDtOkfV8aSzQbyYQDA7b%2FI1TGzTQUTdrB6oKJa2NOY1NOKZS9OLGVNj6TSh6A%2F4bD8RDqm%2FxQylfEaDqi1WvXrf8Zszl2ZmL1tqFlqILBKqsSN9PC3ftvwuM3rgfjaLzM%2FVe8yw9Guzm5V3SXCyEjE9wJJwCyK54Bu0uCLu87XaJHbyUTcp66Wx7TOK%2B1RA33SeVcshJJdTemjNpvJlZWrTleD7%2FkyDubuMn7v7QAjbe29l42RMF9irgMATeMXbSK%2F3Hd%2BRTp2LkHCgHeyyyhA46YLV%2FGKzJIML%2FwpcMGOqUBOyGuTT5zRTjYXYcDY5XvhiWmfUUp9NEsEoUArIN3CQpP1WxBNTN9IBS%2BL0EDsCCNzihMz1WN4izYu4SNpUTST98Q9NsaHmTatSvb03GFs6QtvYALcEjg1mOeDlJwuqf7KC3EZoPpC5RO2u7R%2BZ2dlsIwHV8RXX%2B4egnmrTvyl3E0RH0OmqbToIBhUZRnnxlrylq4uioRm7OftN8ySzFuSv7JWWxm&X-Amz-Signature=1e849222cc03575d2ddf1093c01a879cfe4ac45d73c83cbf7c723269a4729189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEB55BX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJgNuAnUd7f7m6ONPIu7n2Yn4MMVmVLFs0zXjXIegykgIgSUFhxZGQVWKCNAgxzpFykPm6Quqof3oxrrIva3cnpUMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGPMFu%2F%2Fj8SuP%2FcGpCrcA1yt3Hry8X8PRzKCtY2iFeqIbsqq94OTqkCOoKMZIkMZ8qsPaRqjJP3o5IXmPTbz5yPW05IcezTNwYJqFLIpPvX9lpOvzy7QNgPKhClw4A2vi8mOn0YvynlmRCueNrtc7yGkvPlLEETC%2FReH04KYYXqq1VpsFiHVBmlwkfpUyDoRwAV3%2FU1tVjmYVKthGY4Swn3MN5EtimAAtUCnANqHaZT%2Fj0oruTQsO4EmF85EaJvwwlGg5rFnF9%2BL0bin2AJAfOwPDVNgKVgAZrk5zqgsmlFpt%2FwNjGdUE5fQwsuG5SLZX02J0f2x6ToTTsl6SOMV8lKh75PWRgxozIBDxOhkbfRxwB0JDtOkfV8aSzQbyYQDA7b%2FI1TGzTQUTdrB6oKJa2NOY1NOKZS9OLGVNj6TSh6A%2F4bD8RDqm%2FxQylfEaDqi1WvXrf8Zszl2ZmL1tqFlqILBKqsSN9PC3ftvwuM3rgfjaLzM%2FVe8yw9Guzm5V3SXCyEjE9wJJwCyK54Bu0uCLu87XaJHbyUTcp66Wx7TOK%2B1RA33SeVcshJJdTemjNpvJlZWrTleD7%2FkyDubuMn7v7QAjbe29l42RMF9irgMATeMXbSK%2F3Hd%2BRTp2LkHCgHeyyyhA46YLV%2FGKzJIML%2FwpcMGOqUBOyGuTT5zRTjYXYcDY5XvhiWmfUUp9NEsEoUArIN3CQpP1WxBNTN9IBS%2BL0EDsCCNzihMz1WN4izYu4SNpUTST98Q9NsaHmTatSvb03GFs6QtvYALcEjg1mOeDlJwuqf7KC3EZoPpC5RO2u7R%2BZ2dlsIwHV8RXX%2B4egnmrTvyl3E0RH0OmqbToIBhUZRnnxlrylq4uioRm7OftN8ySzFuSv7JWWxm&X-Amz-Signature=605ac09e22f5e9d4e615df3151c14fcfa0491de6b0076d1a7e6de0cfbc1661c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEB55BX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJgNuAnUd7f7m6ONPIu7n2Yn4MMVmVLFs0zXjXIegykgIgSUFhxZGQVWKCNAgxzpFykPm6Quqof3oxrrIva3cnpUMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGPMFu%2F%2Fj8SuP%2FcGpCrcA1yt3Hry8X8PRzKCtY2iFeqIbsqq94OTqkCOoKMZIkMZ8qsPaRqjJP3o5IXmPTbz5yPW05IcezTNwYJqFLIpPvX9lpOvzy7QNgPKhClw4A2vi8mOn0YvynlmRCueNrtc7yGkvPlLEETC%2FReH04KYYXqq1VpsFiHVBmlwkfpUyDoRwAV3%2FU1tVjmYVKthGY4Swn3MN5EtimAAtUCnANqHaZT%2Fj0oruTQsO4EmF85EaJvwwlGg5rFnF9%2BL0bin2AJAfOwPDVNgKVgAZrk5zqgsmlFpt%2FwNjGdUE5fQwsuG5SLZX02J0f2x6ToTTsl6SOMV8lKh75PWRgxozIBDxOhkbfRxwB0JDtOkfV8aSzQbyYQDA7b%2FI1TGzTQUTdrB6oKJa2NOY1NOKZS9OLGVNj6TSh6A%2F4bD8RDqm%2FxQylfEaDqi1WvXrf8Zszl2ZmL1tqFlqILBKqsSN9PC3ftvwuM3rgfjaLzM%2FVe8yw9Guzm5V3SXCyEjE9wJJwCyK54Bu0uCLu87XaJHbyUTcp66Wx7TOK%2B1RA33SeVcshJJdTemjNpvJlZWrTleD7%2FkyDubuMn7v7QAjbe29l42RMF9irgMATeMXbSK%2F3Hd%2BRTp2LkHCgHeyyyhA46YLV%2FGKzJIML%2FwpcMGOqUBOyGuTT5zRTjYXYcDY5XvhiWmfUUp9NEsEoUArIN3CQpP1WxBNTN9IBS%2BL0EDsCCNzihMz1WN4izYu4SNpUTST98Q9NsaHmTatSvb03GFs6QtvYALcEjg1mOeDlJwuqf7KC3EZoPpC5RO2u7R%2BZ2dlsIwHV8RXX%2B4egnmrTvyl3E0RH0OmqbToIBhUZRnnxlrylq4uioRm7OftN8ySzFuSv7JWWxm&X-Amz-Signature=f11acf40216ca4f161181cfeb4a9c3efd3269ea439551445766fe71442a5ea44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEB55BX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJgNuAnUd7f7m6ONPIu7n2Yn4MMVmVLFs0zXjXIegykgIgSUFhxZGQVWKCNAgxzpFykPm6Quqof3oxrrIva3cnpUMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGPMFu%2F%2Fj8SuP%2FcGpCrcA1yt3Hry8X8PRzKCtY2iFeqIbsqq94OTqkCOoKMZIkMZ8qsPaRqjJP3o5IXmPTbz5yPW05IcezTNwYJqFLIpPvX9lpOvzy7QNgPKhClw4A2vi8mOn0YvynlmRCueNrtc7yGkvPlLEETC%2FReH04KYYXqq1VpsFiHVBmlwkfpUyDoRwAV3%2FU1tVjmYVKthGY4Swn3MN5EtimAAtUCnANqHaZT%2Fj0oruTQsO4EmF85EaJvwwlGg5rFnF9%2BL0bin2AJAfOwPDVNgKVgAZrk5zqgsmlFpt%2FwNjGdUE5fQwsuG5SLZX02J0f2x6ToTTsl6SOMV8lKh75PWRgxozIBDxOhkbfRxwB0JDtOkfV8aSzQbyYQDA7b%2FI1TGzTQUTdrB6oKJa2NOY1NOKZS9OLGVNj6TSh6A%2F4bD8RDqm%2FxQylfEaDqi1WvXrf8Zszl2ZmL1tqFlqILBKqsSN9PC3ftvwuM3rgfjaLzM%2FVe8yw9Guzm5V3SXCyEjE9wJJwCyK54Bu0uCLu87XaJHbyUTcp66Wx7TOK%2B1RA33SeVcshJJdTemjNpvJlZWrTleD7%2FkyDubuMn7v7QAjbe29l42RMF9irgMATeMXbSK%2F3Hd%2BRTp2LkHCgHeyyyhA46YLV%2FGKzJIML%2FwpcMGOqUBOyGuTT5zRTjYXYcDY5XvhiWmfUUp9NEsEoUArIN3CQpP1WxBNTN9IBS%2BL0EDsCCNzihMz1WN4izYu4SNpUTST98Q9NsaHmTatSvb03GFs6QtvYALcEjg1mOeDlJwuqf7KC3EZoPpC5RO2u7R%2BZ2dlsIwHV8RXX%2B4egnmrTvyl3E0RH0OmqbToIBhUZRnnxlrylq4uioRm7OftN8ySzFuSv7JWWxm&X-Amz-Signature=044f9db482b3d1d17a5cab6281833be7f32edfdae1468f00cb4dcfeecada7248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEB55BX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJgNuAnUd7f7m6ONPIu7n2Yn4MMVmVLFs0zXjXIegykgIgSUFhxZGQVWKCNAgxzpFykPm6Quqof3oxrrIva3cnpUMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGPMFu%2F%2Fj8SuP%2FcGpCrcA1yt3Hry8X8PRzKCtY2iFeqIbsqq94OTqkCOoKMZIkMZ8qsPaRqjJP3o5IXmPTbz5yPW05IcezTNwYJqFLIpPvX9lpOvzy7QNgPKhClw4A2vi8mOn0YvynlmRCueNrtc7yGkvPlLEETC%2FReH04KYYXqq1VpsFiHVBmlwkfpUyDoRwAV3%2FU1tVjmYVKthGY4Swn3MN5EtimAAtUCnANqHaZT%2Fj0oruTQsO4EmF85EaJvwwlGg5rFnF9%2BL0bin2AJAfOwPDVNgKVgAZrk5zqgsmlFpt%2FwNjGdUE5fQwsuG5SLZX02J0f2x6ToTTsl6SOMV8lKh75PWRgxozIBDxOhkbfRxwB0JDtOkfV8aSzQbyYQDA7b%2FI1TGzTQUTdrB6oKJa2NOY1NOKZS9OLGVNj6TSh6A%2F4bD8RDqm%2FxQylfEaDqi1WvXrf8Zszl2ZmL1tqFlqILBKqsSN9PC3ftvwuM3rgfjaLzM%2FVe8yw9Guzm5V3SXCyEjE9wJJwCyK54Bu0uCLu87XaJHbyUTcp66Wx7TOK%2B1RA33SeVcshJJdTemjNpvJlZWrTleD7%2FkyDubuMn7v7QAjbe29l42RMF9irgMATeMXbSK%2F3Hd%2BRTp2LkHCgHeyyyhA46YLV%2FGKzJIML%2FwpcMGOqUBOyGuTT5zRTjYXYcDY5XvhiWmfUUp9NEsEoUArIN3CQpP1WxBNTN9IBS%2BL0EDsCCNzihMz1WN4izYu4SNpUTST98Q9NsaHmTatSvb03GFs6QtvYALcEjg1mOeDlJwuqf7KC3EZoPpC5RO2u7R%2BZ2dlsIwHV8RXX%2B4egnmrTvyl3E0RH0OmqbToIBhUZRnnxlrylq4uioRm7OftN8ySzFuSv7JWWxm&X-Amz-Signature=cd98ae3450b357aa8fea8a33885bf3c6f7a4866ffe94ae2b371a7b8a58205b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEB55BX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJgNuAnUd7f7m6ONPIu7n2Yn4MMVmVLFs0zXjXIegykgIgSUFhxZGQVWKCNAgxzpFykPm6Quqof3oxrrIva3cnpUMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGPMFu%2F%2Fj8SuP%2FcGpCrcA1yt3Hry8X8PRzKCtY2iFeqIbsqq94OTqkCOoKMZIkMZ8qsPaRqjJP3o5IXmPTbz5yPW05IcezTNwYJqFLIpPvX9lpOvzy7QNgPKhClw4A2vi8mOn0YvynlmRCueNrtc7yGkvPlLEETC%2FReH04KYYXqq1VpsFiHVBmlwkfpUyDoRwAV3%2FU1tVjmYVKthGY4Swn3MN5EtimAAtUCnANqHaZT%2Fj0oruTQsO4EmF85EaJvwwlGg5rFnF9%2BL0bin2AJAfOwPDVNgKVgAZrk5zqgsmlFpt%2FwNjGdUE5fQwsuG5SLZX02J0f2x6ToTTsl6SOMV8lKh75PWRgxozIBDxOhkbfRxwB0JDtOkfV8aSzQbyYQDA7b%2FI1TGzTQUTdrB6oKJa2NOY1NOKZS9OLGVNj6TSh6A%2F4bD8RDqm%2FxQylfEaDqi1WvXrf8Zszl2ZmL1tqFlqILBKqsSN9PC3ftvwuM3rgfjaLzM%2FVe8yw9Guzm5V3SXCyEjE9wJJwCyK54Bu0uCLu87XaJHbyUTcp66Wx7TOK%2B1RA33SeVcshJJdTemjNpvJlZWrTleD7%2FkyDubuMn7v7QAjbe29l42RMF9irgMATeMXbSK%2F3Hd%2BRTp2LkHCgHeyyyhA46YLV%2FGKzJIML%2FwpcMGOqUBOyGuTT5zRTjYXYcDY5XvhiWmfUUp9NEsEoUArIN3CQpP1WxBNTN9IBS%2BL0EDsCCNzihMz1WN4izYu4SNpUTST98Q9NsaHmTatSvb03GFs6QtvYALcEjg1mOeDlJwuqf7KC3EZoPpC5RO2u7R%2BZ2dlsIwHV8RXX%2B4egnmrTvyl3E0RH0OmqbToIBhUZRnnxlrylq4uioRm7OftN8ySzFuSv7JWWxm&X-Amz-Signature=e34648e32fb2f4cca9c435ebbb44c1a07cc4e57396a3e317a515ca3a61f11e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
