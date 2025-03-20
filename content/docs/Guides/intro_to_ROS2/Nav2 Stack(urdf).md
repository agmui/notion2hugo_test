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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AARXLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCaz85ShqqtwCY5FMCwbKx3U%2FTjQW5soMXoE4ZMbeFXFQIhAMPZT8y3INMBbhcUEcGrzIclCPzW%2BwL6HIEd1rZmY1niKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tPNj%2B8JmQyGML9cq3AMPUo5Kkizxh8SFJViWLYgoAWqHFizv1D7WLQKMM9drPJhfihGyg9cz3cYUyiLu31QSxf9R2ouwISgXp0b2BKQFJ5vcMY953%2FqOPkSSQ1O%2BzujKSAy1TEtotgNECf9QhnSZno0vqiPCKSoq4sWzsBrLyStMEvQnFrYiaKaIAhXOiU8N50mGR556%2FaHRTrvW3lerr51BBvMILEjbU8Bl0xEDfocG8Qc7Mp5VUN5xWaO%2BTGDSD4Bct%2Bntgzz5nrkJdbtVd%2Fd7eGdnvNbO3AE8qGjLpNVKYxwqtUajHJJq21vi1UUozRrbpw0A6HzcKEvd6a9SelMHzmp5%2F1x8MwU2RccS0dY2sTPInznuUNIrML9P6Jv%2B%2FAtgLAT9OKJ7cLxmtJvKS577eoY%2BbashCTcPi9NVgKY%2BmoMDhjmjPBQtGUUX%2BcecIKZHPN3jsrV0y2mX5cEnEx7Nh9XyTpkA0Lu1LWkKz%2BqqbOq5V%2F%2Bzrms7RghrFRWJiZBb0Bc1NuhfjGz3MSS22Evmtcs%2FhKkMv7OCwVpIK8PA%2FVhxqffuC1tY3szZtetre1byaxNQgS3fmCxaGqg1eTedW5sJznDahWyxO%2BTqTXhKLF546oUmXoweepSWiVq1Dhp8sWRf%2FIT0sTCipu%2B%2BBjqkAd93JOACqlzMWm%2BKRd326SLbeF2Bdq7fLcfMCpIWMkVXE2rmLz7n0Jnq2jZ9vMjuoGqsryjg75b2Zb3VfmxJ9Ism6i9fPiF6s1MaGTpheTRuchKxEs%2BqbDDOCcVmCdRXCQGU0nMY223C8Bxt8UM3rxiRory0MABLSCk0TiHrYakV%2FK7MKoww%2Ff800dfZc7SVzc%2F8WXQnzmdCVd3u6%2FjVhzqG%2F40w&X-Amz-Signature=e4c5a12bc0196dad9e50ba674bbc78be632010b1497296138948d3f96f225b24&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AARXLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCaz85ShqqtwCY5FMCwbKx3U%2FTjQW5soMXoE4ZMbeFXFQIhAMPZT8y3INMBbhcUEcGrzIclCPzW%2BwL6HIEd1rZmY1niKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tPNj%2B8JmQyGML9cq3AMPUo5Kkizxh8SFJViWLYgoAWqHFizv1D7WLQKMM9drPJhfihGyg9cz3cYUyiLu31QSxf9R2ouwISgXp0b2BKQFJ5vcMY953%2FqOPkSSQ1O%2BzujKSAy1TEtotgNECf9QhnSZno0vqiPCKSoq4sWzsBrLyStMEvQnFrYiaKaIAhXOiU8N50mGR556%2FaHRTrvW3lerr51BBvMILEjbU8Bl0xEDfocG8Qc7Mp5VUN5xWaO%2BTGDSD4Bct%2Bntgzz5nrkJdbtVd%2Fd7eGdnvNbO3AE8qGjLpNVKYxwqtUajHJJq21vi1UUozRrbpw0A6HzcKEvd6a9SelMHzmp5%2F1x8MwU2RccS0dY2sTPInznuUNIrML9P6Jv%2B%2FAtgLAT9OKJ7cLxmtJvKS577eoY%2BbashCTcPi9NVgKY%2BmoMDhjmjPBQtGUUX%2BcecIKZHPN3jsrV0y2mX5cEnEx7Nh9XyTpkA0Lu1LWkKz%2BqqbOq5V%2F%2Bzrms7RghrFRWJiZBb0Bc1NuhfjGz3MSS22Evmtcs%2FhKkMv7OCwVpIK8PA%2FVhxqffuC1tY3szZtetre1byaxNQgS3fmCxaGqg1eTedW5sJznDahWyxO%2BTqTXhKLF546oUmXoweepSWiVq1Dhp8sWRf%2FIT0sTCipu%2B%2BBjqkAd93JOACqlzMWm%2BKRd326SLbeF2Bdq7fLcfMCpIWMkVXE2rmLz7n0Jnq2jZ9vMjuoGqsryjg75b2Zb3VfmxJ9Ism6i9fPiF6s1MaGTpheTRuchKxEs%2BqbDDOCcVmCdRXCQGU0nMY223C8Bxt8UM3rxiRory0MABLSCk0TiHrYakV%2FK7MKoww%2Ff800dfZc7SVzc%2F8WXQnzmdCVd3u6%2FjVhzqG%2F40w&X-Amz-Signature=5485988ce68a562a556ad69fd306ed3748d857c665ecb937e9b845ef8feef578&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AARXLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCaz85ShqqtwCY5FMCwbKx3U%2FTjQW5soMXoE4ZMbeFXFQIhAMPZT8y3INMBbhcUEcGrzIclCPzW%2BwL6HIEd1rZmY1niKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tPNj%2B8JmQyGML9cq3AMPUo5Kkizxh8SFJViWLYgoAWqHFizv1D7WLQKMM9drPJhfihGyg9cz3cYUyiLu31QSxf9R2ouwISgXp0b2BKQFJ5vcMY953%2FqOPkSSQ1O%2BzujKSAy1TEtotgNECf9QhnSZno0vqiPCKSoq4sWzsBrLyStMEvQnFrYiaKaIAhXOiU8N50mGR556%2FaHRTrvW3lerr51BBvMILEjbU8Bl0xEDfocG8Qc7Mp5VUN5xWaO%2BTGDSD4Bct%2Bntgzz5nrkJdbtVd%2Fd7eGdnvNbO3AE8qGjLpNVKYxwqtUajHJJq21vi1UUozRrbpw0A6HzcKEvd6a9SelMHzmp5%2F1x8MwU2RccS0dY2sTPInznuUNIrML9P6Jv%2B%2FAtgLAT9OKJ7cLxmtJvKS577eoY%2BbashCTcPi9NVgKY%2BmoMDhjmjPBQtGUUX%2BcecIKZHPN3jsrV0y2mX5cEnEx7Nh9XyTpkA0Lu1LWkKz%2BqqbOq5V%2F%2Bzrms7RghrFRWJiZBb0Bc1NuhfjGz3MSS22Evmtcs%2FhKkMv7OCwVpIK8PA%2FVhxqffuC1tY3szZtetre1byaxNQgS3fmCxaGqg1eTedW5sJznDahWyxO%2BTqTXhKLF546oUmXoweepSWiVq1Dhp8sWRf%2FIT0sTCipu%2B%2BBjqkAd93JOACqlzMWm%2BKRd326SLbeF2Bdq7fLcfMCpIWMkVXE2rmLz7n0Jnq2jZ9vMjuoGqsryjg75b2Zb3VfmxJ9Ism6i9fPiF6s1MaGTpheTRuchKxEs%2BqbDDOCcVmCdRXCQGU0nMY223C8Bxt8UM3rxiRory0MABLSCk0TiHrYakV%2FK7MKoww%2Ff800dfZc7SVzc%2F8WXQnzmdCVd3u6%2FjVhzqG%2F40w&X-Amz-Signature=51b5688d310c06d712914975303a43ef8ab6bb83cb302d0361aedf39d0fcccc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AARXLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCaz85ShqqtwCY5FMCwbKx3U%2FTjQW5soMXoE4ZMbeFXFQIhAMPZT8y3INMBbhcUEcGrzIclCPzW%2BwL6HIEd1rZmY1niKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tPNj%2B8JmQyGML9cq3AMPUo5Kkizxh8SFJViWLYgoAWqHFizv1D7WLQKMM9drPJhfihGyg9cz3cYUyiLu31QSxf9R2ouwISgXp0b2BKQFJ5vcMY953%2FqOPkSSQ1O%2BzujKSAy1TEtotgNECf9QhnSZno0vqiPCKSoq4sWzsBrLyStMEvQnFrYiaKaIAhXOiU8N50mGR556%2FaHRTrvW3lerr51BBvMILEjbU8Bl0xEDfocG8Qc7Mp5VUN5xWaO%2BTGDSD4Bct%2Bntgzz5nrkJdbtVd%2Fd7eGdnvNbO3AE8qGjLpNVKYxwqtUajHJJq21vi1UUozRrbpw0A6HzcKEvd6a9SelMHzmp5%2F1x8MwU2RccS0dY2sTPInznuUNIrML9P6Jv%2B%2FAtgLAT9OKJ7cLxmtJvKS577eoY%2BbashCTcPi9NVgKY%2BmoMDhjmjPBQtGUUX%2BcecIKZHPN3jsrV0y2mX5cEnEx7Nh9XyTpkA0Lu1LWkKz%2BqqbOq5V%2F%2Bzrms7RghrFRWJiZBb0Bc1NuhfjGz3MSS22Evmtcs%2FhKkMv7OCwVpIK8PA%2FVhxqffuC1tY3szZtetre1byaxNQgS3fmCxaGqg1eTedW5sJznDahWyxO%2BTqTXhKLF546oUmXoweepSWiVq1Dhp8sWRf%2FIT0sTCipu%2B%2BBjqkAd93JOACqlzMWm%2BKRd326SLbeF2Bdq7fLcfMCpIWMkVXE2rmLz7n0Jnq2jZ9vMjuoGqsryjg75b2Zb3VfmxJ9Ism6i9fPiF6s1MaGTpheTRuchKxEs%2BqbDDOCcVmCdRXCQGU0nMY223C8Bxt8UM3rxiRory0MABLSCk0TiHrYakV%2FK7MKoww%2Ff800dfZc7SVzc%2F8WXQnzmdCVd3u6%2FjVhzqG%2F40w&X-Amz-Signature=3e1ec3e9d289b44dc151d81486d4083894c756237a3d65f3da5e9ae36ae9fc8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AARXLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCaz85ShqqtwCY5FMCwbKx3U%2FTjQW5soMXoE4ZMbeFXFQIhAMPZT8y3INMBbhcUEcGrzIclCPzW%2BwL6HIEd1rZmY1niKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tPNj%2B8JmQyGML9cq3AMPUo5Kkizxh8SFJViWLYgoAWqHFizv1D7WLQKMM9drPJhfihGyg9cz3cYUyiLu31QSxf9R2ouwISgXp0b2BKQFJ5vcMY953%2FqOPkSSQ1O%2BzujKSAy1TEtotgNECf9QhnSZno0vqiPCKSoq4sWzsBrLyStMEvQnFrYiaKaIAhXOiU8N50mGR556%2FaHRTrvW3lerr51BBvMILEjbU8Bl0xEDfocG8Qc7Mp5VUN5xWaO%2BTGDSD4Bct%2Bntgzz5nrkJdbtVd%2Fd7eGdnvNbO3AE8qGjLpNVKYxwqtUajHJJq21vi1UUozRrbpw0A6HzcKEvd6a9SelMHzmp5%2F1x8MwU2RccS0dY2sTPInznuUNIrML9P6Jv%2B%2FAtgLAT9OKJ7cLxmtJvKS577eoY%2BbashCTcPi9NVgKY%2BmoMDhjmjPBQtGUUX%2BcecIKZHPN3jsrV0y2mX5cEnEx7Nh9XyTpkA0Lu1LWkKz%2BqqbOq5V%2F%2Bzrms7RghrFRWJiZBb0Bc1NuhfjGz3MSS22Evmtcs%2FhKkMv7OCwVpIK8PA%2FVhxqffuC1tY3szZtetre1byaxNQgS3fmCxaGqg1eTedW5sJznDahWyxO%2BTqTXhKLF546oUmXoweepSWiVq1Dhp8sWRf%2FIT0sTCipu%2B%2BBjqkAd93JOACqlzMWm%2BKRd326SLbeF2Bdq7fLcfMCpIWMkVXE2rmLz7n0Jnq2jZ9vMjuoGqsryjg75b2Zb3VfmxJ9Ism6i9fPiF6s1MaGTpheTRuchKxEs%2BqbDDOCcVmCdRXCQGU0nMY223C8Bxt8UM3rxiRory0MABLSCk0TiHrYakV%2FK7MKoww%2Ff800dfZc7SVzc%2F8WXQnzmdCVd3u6%2FjVhzqG%2F40w&X-Amz-Signature=89cdd3b5f3ae7c2216a9de1e49adedf6b519feb34609fa9a0714152902c5db09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AARXLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCaz85ShqqtwCY5FMCwbKx3U%2FTjQW5soMXoE4ZMbeFXFQIhAMPZT8y3INMBbhcUEcGrzIclCPzW%2BwL6HIEd1rZmY1niKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7tPNj%2B8JmQyGML9cq3AMPUo5Kkizxh8SFJViWLYgoAWqHFizv1D7WLQKMM9drPJhfihGyg9cz3cYUyiLu31QSxf9R2ouwISgXp0b2BKQFJ5vcMY953%2FqOPkSSQ1O%2BzujKSAy1TEtotgNECf9QhnSZno0vqiPCKSoq4sWzsBrLyStMEvQnFrYiaKaIAhXOiU8N50mGR556%2FaHRTrvW3lerr51BBvMILEjbU8Bl0xEDfocG8Qc7Mp5VUN5xWaO%2BTGDSD4Bct%2Bntgzz5nrkJdbtVd%2Fd7eGdnvNbO3AE8qGjLpNVKYxwqtUajHJJq21vi1UUozRrbpw0A6HzcKEvd6a9SelMHzmp5%2F1x8MwU2RccS0dY2sTPInznuUNIrML9P6Jv%2B%2FAtgLAT9OKJ7cLxmtJvKS577eoY%2BbashCTcPi9NVgKY%2BmoMDhjmjPBQtGUUX%2BcecIKZHPN3jsrV0y2mX5cEnEx7Nh9XyTpkA0Lu1LWkKz%2BqqbOq5V%2F%2Bzrms7RghrFRWJiZBb0Bc1NuhfjGz3MSS22Evmtcs%2FhKkMv7OCwVpIK8PA%2FVhxqffuC1tY3szZtetre1byaxNQgS3fmCxaGqg1eTedW5sJznDahWyxO%2BTqTXhKLF546oUmXoweepSWiVq1Dhp8sWRf%2FIT0sTCipu%2B%2BBjqkAd93JOACqlzMWm%2BKRd326SLbeF2Bdq7fLcfMCpIWMkVXE2rmLz7n0Jnq2jZ9vMjuoGqsryjg75b2Zb3VfmxJ9Ism6i9fPiF6s1MaGTpheTRuchKxEs%2BqbDDOCcVmCdRXCQGU0nMY223C8Bxt8UM3rxiRory0MABLSCk0TiHrYakV%2FK7MKoww%2Ff800dfZc7SVzc%2F8WXQnzmdCVd3u6%2FjVhzqG%2F40w&X-Amz-Signature=caf49da95626bd2427d8a7a03ee7fb7ac114b35b742943549ebba7c91dcbae1b&X-Amz-SignedHeaders=host&x-id=GetObject)
