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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4FEMFR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDVg20ZYLxBWcjg%2BhZttgjeCsChKSLfHoV0ajLdnv45rQIhAIpB1rJrM4hBZoeBvKavtM7VRO69p%2F%2F%2Bc9ps2SPSkngeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyjQRuLGhZomtwBNZUq3AM5Na8ewvWPiBzOcSi%2BYeXjQqm1t%2BYLEtb4qsPq%2F797swACT8vv%2B1asiuuTdnwqxWIQRgFb2JzTfBjB0jarc9xFXTW9PNdLO%2BTrNF2arOwWGLHcwehCTHadauGj4E0ZOoDInOdkPlMFUAy8ZeGSulQ1B3EKKT6C49R0%2BG5xmM91e2wqOcRE2vz80eTNrxojHgSUK5z5XqhmQHOGY%2BIsgOxdT5tBDiyZWmIma85LCp6CsOG1RJyR3MEfzrQvVfBSsF2VitgXKJBb1YbD9qSQrz%2BAQjuGqLDBQVfkb9kaEb32xNK%2BhVy4e6ErWOpygQW87xc%2Bzn%2FS6L6nTSQND7A2lEs0bEKSFWltQdmeMOlMEGUPtw9vsnp4chULQHlV%2BdwCNMNIO3aFrsLQr98LmKKkcaJntudfMCpcftz69vgcy8zG3u9x6w%2FqVuPrucnKh9FHDcznQo0fnLsSbiyTATg7zV9ZuRQG7ss%2FMN2kWIoEsth7KHWa2NH41txE%2B%2FV6JjrigK3g4s0dHxUU7uqAiFQC2ngZoFR2mWB1VelqV2NwePoqCBSUUGGZS48d8ORYbz7A06qsqJPfQxMKanxrz%2B8Mh8NYUkBaONd1yUxiE7UdHH12gdSC3l4whKxAXFiDsDC27%2B%2FCBjqkAXTmvoyMkh%2BXuKluDWw5z21%2FEKSlxtoocxtiDiK8WdHBfendUFh9kVrR32jzMvuVjcVjxmKGC%2FMYDjMO%2FIkWsjdWhbIJAl0rV1j0KhqHBx47RenaRRRDzhz0jiFS%2FWsiDdBXsmq60ehaogm4S0KmgSgL9Ay%2BDCPKSB3eHWiSDGdpk35JHtGK6UUkPIBOK4Alm%2BVL1VZc1QrYk24rkfpjSHFKTyft&X-Amz-Signature=69109d61057962cb8186075938a9a92aa743ae355e4173c99f32c507aa2e0370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4FEMFR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDVg20ZYLxBWcjg%2BhZttgjeCsChKSLfHoV0ajLdnv45rQIhAIpB1rJrM4hBZoeBvKavtM7VRO69p%2F%2F%2Bc9ps2SPSkngeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyjQRuLGhZomtwBNZUq3AM5Na8ewvWPiBzOcSi%2BYeXjQqm1t%2BYLEtb4qsPq%2F797swACT8vv%2B1asiuuTdnwqxWIQRgFb2JzTfBjB0jarc9xFXTW9PNdLO%2BTrNF2arOwWGLHcwehCTHadauGj4E0ZOoDInOdkPlMFUAy8ZeGSulQ1B3EKKT6C49R0%2BG5xmM91e2wqOcRE2vz80eTNrxojHgSUK5z5XqhmQHOGY%2BIsgOxdT5tBDiyZWmIma85LCp6CsOG1RJyR3MEfzrQvVfBSsF2VitgXKJBb1YbD9qSQrz%2BAQjuGqLDBQVfkb9kaEb32xNK%2BhVy4e6ErWOpygQW87xc%2Bzn%2FS6L6nTSQND7A2lEs0bEKSFWltQdmeMOlMEGUPtw9vsnp4chULQHlV%2BdwCNMNIO3aFrsLQr98LmKKkcaJntudfMCpcftz69vgcy8zG3u9x6w%2FqVuPrucnKh9FHDcznQo0fnLsSbiyTATg7zV9ZuRQG7ss%2FMN2kWIoEsth7KHWa2NH41txE%2B%2FV6JjrigK3g4s0dHxUU7uqAiFQC2ngZoFR2mWB1VelqV2NwePoqCBSUUGGZS48d8ORYbz7A06qsqJPfQxMKanxrz%2B8Mh8NYUkBaONd1yUxiE7UdHH12gdSC3l4whKxAXFiDsDC27%2B%2FCBjqkAXTmvoyMkh%2BXuKluDWw5z21%2FEKSlxtoocxtiDiK8WdHBfendUFh9kVrR32jzMvuVjcVjxmKGC%2FMYDjMO%2FIkWsjdWhbIJAl0rV1j0KhqHBx47RenaRRRDzhz0jiFS%2FWsiDdBXsmq60ehaogm4S0KmgSgL9Ay%2BDCPKSB3eHWiSDGdpk35JHtGK6UUkPIBOK4Alm%2BVL1VZc1QrYk24rkfpjSHFKTyft&X-Amz-Signature=3de804919d294cdfd2449b660a60e14f1104ffc5c64dc5297627722b1d430220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4FEMFR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDVg20ZYLxBWcjg%2BhZttgjeCsChKSLfHoV0ajLdnv45rQIhAIpB1rJrM4hBZoeBvKavtM7VRO69p%2F%2F%2Bc9ps2SPSkngeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyjQRuLGhZomtwBNZUq3AM5Na8ewvWPiBzOcSi%2BYeXjQqm1t%2BYLEtb4qsPq%2F797swACT8vv%2B1asiuuTdnwqxWIQRgFb2JzTfBjB0jarc9xFXTW9PNdLO%2BTrNF2arOwWGLHcwehCTHadauGj4E0ZOoDInOdkPlMFUAy8ZeGSulQ1B3EKKT6C49R0%2BG5xmM91e2wqOcRE2vz80eTNrxojHgSUK5z5XqhmQHOGY%2BIsgOxdT5tBDiyZWmIma85LCp6CsOG1RJyR3MEfzrQvVfBSsF2VitgXKJBb1YbD9qSQrz%2BAQjuGqLDBQVfkb9kaEb32xNK%2BhVy4e6ErWOpygQW87xc%2Bzn%2FS6L6nTSQND7A2lEs0bEKSFWltQdmeMOlMEGUPtw9vsnp4chULQHlV%2BdwCNMNIO3aFrsLQr98LmKKkcaJntudfMCpcftz69vgcy8zG3u9x6w%2FqVuPrucnKh9FHDcznQo0fnLsSbiyTATg7zV9ZuRQG7ss%2FMN2kWIoEsth7KHWa2NH41txE%2B%2FV6JjrigK3g4s0dHxUU7uqAiFQC2ngZoFR2mWB1VelqV2NwePoqCBSUUGGZS48d8ORYbz7A06qsqJPfQxMKanxrz%2B8Mh8NYUkBaONd1yUxiE7UdHH12gdSC3l4whKxAXFiDsDC27%2B%2FCBjqkAXTmvoyMkh%2BXuKluDWw5z21%2FEKSlxtoocxtiDiK8WdHBfendUFh9kVrR32jzMvuVjcVjxmKGC%2FMYDjMO%2FIkWsjdWhbIJAl0rV1j0KhqHBx47RenaRRRDzhz0jiFS%2FWsiDdBXsmq60ehaogm4S0KmgSgL9Ay%2BDCPKSB3eHWiSDGdpk35JHtGK6UUkPIBOK4Alm%2BVL1VZc1QrYk24rkfpjSHFKTyft&X-Amz-Signature=bc1625817ff055d35071bfb4579e294325cebd4a601279dac5add69e44207e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4FEMFR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDVg20ZYLxBWcjg%2BhZttgjeCsChKSLfHoV0ajLdnv45rQIhAIpB1rJrM4hBZoeBvKavtM7VRO69p%2F%2F%2Bc9ps2SPSkngeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyjQRuLGhZomtwBNZUq3AM5Na8ewvWPiBzOcSi%2BYeXjQqm1t%2BYLEtb4qsPq%2F797swACT8vv%2B1asiuuTdnwqxWIQRgFb2JzTfBjB0jarc9xFXTW9PNdLO%2BTrNF2arOwWGLHcwehCTHadauGj4E0ZOoDInOdkPlMFUAy8ZeGSulQ1B3EKKT6C49R0%2BG5xmM91e2wqOcRE2vz80eTNrxojHgSUK5z5XqhmQHOGY%2BIsgOxdT5tBDiyZWmIma85LCp6CsOG1RJyR3MEfzrQvVfBSsF2VitgXKJBb1YbD9qSQrz%2BAQjuGqLDBQVfkb9kaEb32xNK%2BhVy4e6ErWOpygQW87xc%2Bzn%2FS6L6nTSQND7A2lEs0bEKSFWltQdmeMOlMEGUPtw9vsnp4chULQHlV%2BdwCNMNIO3aFrsLQr98LmKKkcaJntudfMCpcftz69vgcy8zG3u9x6w%2FqVuPrucnKh9FHDcznQo0fnLsSbiyTATg7zV9ZuRQG7ss%2FMN2kWIoEsth7KHWa2NH41txE%2B%2FV6JjrigK3g4s0dHxUU7uqAiFQC2ngZoFR2mWB1VelqV2NwePoqCBSUUGGZS48d8ORYbz7A06qsqJPfQxMKanxrz%2B8Mh8NYUkBaONd1yUxiE7UdHH12gdSC3l4whKxAXFiDsDC27%2B%2FCBjqkAXTmvoyMkh%2BXuKluDWw5z21%2FEKSlxtoocxtiDiK8WdHBfendUFh9kVrR32jzMvuVjcVjxmKGC%2FMYDjMO%2FIkWsjdWhbIJAl0rV1j0KhqHBx47RenaRRRDzhz0jiFS%2FWsiDdBXsmq60ehaogm4S0KmgSgL9Ay%2BDCPKSB3eHWiSDGdpk35JHtGK6UUkPIBOK4Alm%2BVL1VZc1QrYk24rkfpjSHFKTyft&X-Amz-Signature=a571b14dea5ba27b47666dbf274417d460bf32163d2a31fccdac912d4b7ddb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4FEMFR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDVg20ZYLxBWcjg%2BhZttgjeCsChKSLfHoV0ajLdnv45rQIhAIpB1rJrM4hBZoeBvKavtM7VRO69p%2F%2F%2Bc9ps2SPSkngeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyjQRuLGhZomtwBNZUq3AM5Na8ewvWPiBzOcSi%2BYeXjQqm1t%2BYLEtb4qsPq%2F797swACT8vv%2B1asiuuTdnwqxWIQRgFb2JzTfBjB0jarc9xFXTW9PNdLO%2BTrNF2arOwWGLHcwehCTHadauGj4E0ZOoDInOdkPlMFUAy8ZeGSulQ1B3EKKT6C49R0%2BG5xmM91e2wqOcRE2vz80eTNrxojHgSUK5z5XqhmQHOGY%2BIsgOxdT5tBDiyZWmIma85LCp6CsOG1RJyR3MEfzrQvVfBSsF2VitgXKJBb1YbD9qSQrz%2BAQjuGqLDBQVfkb9kaEb32xNK%2BhVy4e6ErWOpygQW87xc%2Bzn%2FS6L6nTSQND7A2lEs0bEKSFWltQdmeMOlMEGUPtw9vsnp4chULQHlV%2BdwCNMNIO3aFrsLQr98LmKKkcaJntudfMCpcftz69vgcy8zG3u9x6w%2FqVuPrucnKh9FHDcznQo0fnLsSbiyTATg7zV9ZuRQG7ss%2FMN2kWIoEsth7KHWa2NH41txE%2B%2FV6JjrigK3g4s0dHxUU7uqAiFQC2ngZoFR2mWB1VelqV2NwePoqCBSUUGGZS48d8ORYbz7A06qsqJPfQxMKanxrz%2B8Mh8NYUkBaONd1yUxiE7UdHH12gdSC3l4whKxAXFiDsDC27%2B%2FCBjqkAXTmvoyMkh%2BXuKluDWw5z21%2FEKSlxtoocxtiDiK8WdHBfendUFh9kVrR32jzMvuVjcVjxmKGC%2FMYDjMO%2FIkWsjdWhbIJAl0rV1j0KhqHBx47RenaRRRDzhz0jiFS%2FWsiDdBXsmq60ehaogm4S0KmgSgL9Ay%2BDCPKSB3eHWiSDGdpk35JHtGK6UUkPIBOK4Alm%2BVL1VZc1QrYk24rkfpjSHFKTyft&X-Amz-Signature=01d7eb421db3a87b9c136b02aafb9fa2f4f46aed0973badc7bfbe87d63625b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4FEMFR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDVg20ZYLxBWcjg%2BhZttgjeCsChKSLfHoV0ajLdnv45rQIhAIpB1rJrM4hBZoeBvKavtM7VRO69p%2F%2F%2Bc9ps2SPSkngeKv8DCEYQABoMNjM3NDIzMTgzODA1IgyjQRuLGhZomtwBNZUq3AM5Na8ewvWPiBzOcSi%2BYeXjQqm1t%2BYLEtb4qsPq%2F797swACT8vv%2B1asiuuTdnwqxWIQRgFb2JzTfBjB0jarc9xFXTW9PNdLO%2BTrNF2arOwWGLHcwehCTHadauGj4E0ZOoDInOdkPlMFUAy8ZeGSulQ1B3EKKT6C49R0%2BG5xmM91e2wqOcRE2vz80eTNrxojHgSUK5z5XqhmQHOGY%2BIsgOxdT5tBDiyZWmIma85LCp6CsOG1RJyR3MEfzrQvVfBSsF2VitgXKJBb1YbD9qSQrz%2BAQjuGqLDBQVfkb9kaEb32xNK%2BhVy4e6ErWOpygQW87xc%2Bzn%2FS6L6nTSQND7A2lEs0bEKSFWltQdmeMOlMEGUPtw9vsnp4chULQHlV%2BdwCNMNIO3aFrsLQr98LmKKkcaJntudfMCpcftz69vgcy8zG3u9x6w%2FqVuPrucnKh9FHDcznQo0fnLsSbiyTATg7zV9ZuRQG7ss%2FMN2kWIoEsth7KHWa2NH41txE%2B%2FV6JjrigK3g4s0dHxUU7uqAiFQC2ngZoFR2mWB1VelqV2NwePoqCBSUUGGZS48d8ORYbz7A06qsqJPfQxMKanxrz%2B8Mh8NYUkBaONd1yUxiE7UdHH12gdSC3l4whKxAXFiDsDC27%2B%2FCBjqkAXTmvoyMkh%2BXuKluDWw5z21%2FEKSlxtoocxtiDiK8WdHBfendUFh9kVrR32jzMvuVjcVjxmKGC%2FMYDjMO%2FIkWsjdWhbIJAl0rV1j0KhqHBx47RenaRRRDzhz0jiFS%2FWsiDdBXsmq60ehaogm4S0KmgSgL9Ay%2BDCPKSB3eHWiSDGdpk35JHtGK6UUkPIBOK4Alm%2BVL1VZc1QrYk24rkfpjSHFKTyft&X-Amz-Signature=adcc37a377c45be640adeee9d19aad21a7b6167c4235bc6b6313c80971127437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
