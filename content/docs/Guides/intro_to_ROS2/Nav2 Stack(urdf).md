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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHNPMWL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdF05qymL45OFhIf8d2IO7VPCyCNFqQDgQc9axggm3AIgU2Wor0HQQxubWTZt49hQ756Y1%2B0wzt79EdIhz8CxXBIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKeoZl67W8cwqmhR9ircA8qezJ5MKB4Orf8KTVdtFt9v4Iysz8Gs%2BArT9v0bukfcBgWmdXF373eCSckt8FvfvIdkuNk0dFpzmt%2BKi1GzZfUxdqQDaymv%2FQzDNJq7t6oZZ1Ti%2BjLqSbgD%2B7s5ffZ2%2BPxppzQYDRoGJnyrAq4w1ru6f7SJLOWYfEwNS3yBPIjQPicu93Wr7cdTAa96jk%2Fzf%2BCi92LPUSTJ9A%2BI9FpaV%2BkDPDqttCY2ClJRzxJ76Ujeg98m8UOAHoPAFsXMq6hwEgBXYfDIfl8KwKFPDlbnQje6q8DeswuaMRtVZvtaZiB%2BaGV39H2TVF2kIBOERQN0dk0rhCkCsNAGo8lP04dSmoF1NGdNbjYdVVz9P%2Bb5ogWE26gPFY19VJ9F9dvJJhdvk7ZMGMYJHyJKTRYSGpX5h%2FLIqKw%2BC2u4SVqF1hNRBXCBGpPiTpyWmlg05uMovMxx3M8Yi2xhh76fVCh%2BSz65f7RzwGdbglMD9F5OkD3X%2BmXlV9NJjvsVeC40a0u9wdNsTfJycWdwqu%2BizKtBZfoCt7m8V6wcv81aVkNTKTdXnjASY2wU6EkVbYr7VeqluDEKzGRn50kF2RqVnkYEX%2BIUGzKn5A%2F5PKmOMoDCVKN4FUD2gH3iLeBFygbKH9KdMKKUvMAGOqUBzBSwNoSwIkyep2zybMPE1wbGkefbl7XzR7NPOoAfHTcqWVAVfkHCRb4jyBi7Hr%2F9gvw26orm9Ii%2FWqiezzhDKZyi8ErKCP%2BW8Urpxoc5x9vwsGZeXhpgbYpkCbhiX6Tfy2MrGDRh0M1qeSkptNfaDL%2Fk0sPR2LopCMc3A03VwIz7Bd4KwZbrS%2BmsyS30psg8tPtBKKKW2nrgDZJiHhesqnvxZWaz&X-Amz-Signature=324c33f77f7b54c8100b7bd7cd6d09071ad8badd4d2e537ca58ea4504707e9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHNPMWL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdF05qymL45OFhIf8d2IO7VPCyCNFqQDgQc9axggm3AIgU2Wor0HQQxubWTZt49hQ756Y1%2B0wzt79EdIhz8CxXBIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKeoZl67W8cwqmhR9ircA8qezJ5MKB4Orf8KTVdtFt9v4Iysz8Gs%2BArT9v0bukfcBgWmdXF373eCSckt8FvfvIdkuNk0dFpzmt%2BKi1GzZfUxdqQDaymv%2FQzDNJq7t6oZZ1Ti%2BjLqSbgD%2B7s5ffZ2%2BPxppzQYDRoGJnyrAq4w1ru6f7SJLOWYfEwNS3yBPIjQPicu93Wr7cdTAa96jk%2Fzf%2BCi92LPUSTJ9A%2BI9FpaV%2BkDPDqttCY2ClJRzxJ76Ujeg98m8UOAHoPAFsXMq6hwEgBXYfDIfl8KwKFPDlbnQje6q8DeswuaMRtVZvtaZiB%2BaGV39H2TVF2kIBOERQN0dk0rhCkCsNAGo8lP04dSmoF1NGdNbjYdVVz9P%2Bb5ogWE26gPFY19VJ9F9dvJJhdvk7ZMGMYJHyJKTRYSGpX5h%2FLIqKw%2BC2u4SVqF1hNRBXCBGpPiTpyWmlg05uMovMxx3M8Yi2xhh76fVCh%2BSz65f7RzwGdbglMD9F5OkD3X%2BmXlV9NJjvsVeC40a0u9wdNsTfJycWdwqu%2BizKtBZfoCt7m8V6wcv81aVkNTKTdXnjASY2wU6EkVbYr7VeqluDEKzGRn50kF2RqVnkYEX%2BIUGzKn5A%2F5PKmOMoDCVKN4FUD2gH3iLeBFygbKH9KdMKKUvMAGOqUBzBSwNoSwIkyep2zybMPE1wbGkefbl7XzR7NPOoAfHTcqWVAVfkHCRb4jyBi7Hr%2F9gvw26orm9Ii%2FWqiezzhDKZyi8ErKCP%2BW8Urpxoc5x9vwsGZeXhpgbYpkCbhiX6Tfy2MrGDRh0M1qeSkptNfaDL%2Fk0sPR2LopCMc3A03VwIz7Bd4KwZbrS%2BmsyS30psg8tPtBKKKW2nrgDZJiHhesqnvxZWaz&X-Amz-Signature=53299d7759e32b0ae105ddff9cb4db4562fe732c422aaf0ad43b8671123199fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHNPMWL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdF05qymL45OFhIf8d2IO7VPCyCNFqQDgQc9axggm3AIgU2Wor0HQQxubWTZt49hQ756Y1%2B0wzt79EdIhz8CxXBIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKeoZl67W8cwqmhR9ircA8qezJ5MKB4Orf8KTVdtFt9v4Iysz8Gs%2BArT9v0bukfcBgWmdXF373eCSckt8FvfvIdkuNk0dFpzmt%2BKi1GzZfUxdqQDaymv%2FQzDNJq7t6oZZ1Ti%2BjLqSbgD%2B7s5ffZ2%2BPxppzQYDRoGJnyrAq4w1ru6f7SJLOWYfEwNS3yBPIjQPicu93Wr7cdTAa96jk%2Fzf%2BCi92LPUSTJ9A%2BI9FpaV%2BkDPDqttCY2ClJRzxJ76Ujeg98m8UOAHoPAFsXMq6hwEgBXYfDIfl8KwKFPDlbnQje6q8DeswuaMRtVZvtaZiB%2BaGV39H2TVF2kIBOERQN0dk0rhCkCsNAGo8lP04dSmoF1NGdNbjYdVVz9P%2Bb5ogWE26gPFY19VJ9F9dvJJhdvk7ZMGMYJHyJKTRYSGpX5h%2FLIqKw%2BC2u4SVqF1hNRBXCBGpPiTpyWmlg05uMovMxx3M8Yi2xhh76fVCh%2BSz65f7RzwGdbglMD9F5OkD3X%2BmXlV9NJjvsVeC40a0u9wdNsTfJycWdwqu%2BizKtBZfoCt7m8V6wcv81aVkNTKTdXnjASY2wU6EkVbYr7VeqluDEKzGRn50kF2RqVnkYEX%2BIUGzKn5A%2F5PKmOMoDCVKN4FUD2gH3iLeBFygbKH9KdMKKUvMAGOqUBzBSwNoSwIkyep2zybMPE1wbGkefbl7XzR7NPOoAfHTcqWVAVfkHCRb4jyBi7Hr%2F9gvw26orm9Ii%2FWqiezzhDKZyi8ErKCP%2BW8Urpxoc5x9vwsGZeXhpgbYpkCbhiX6Tfy2MrGDRh0M1qeSkptNfaDL%2Fk0sPR2LopCMc3A03VwIz7Bd4KwZbrS%2BmsyS30psg8tPtBKKKW2nrgDZJiHhesqnvxZWaz&X-Amz-Signature=03a78f8a3e371492fb3579502f285aa32adb34c86633a52aaf5e2341c0a8e1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHNPMWL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdF05qymL45OFhIf8d2IO7VPCyCNFqQDgQc9axggm3AIgU2Wor0HQQxubWTZt49hQ756Y1%2B0wzt79EdIhz8CxXBIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKeoZl67W8cwqmhR9ircA8qezJ5MKB4Orf8KTVdtFt9v4Iysz8Gs%2BArT9v0bukfcBgWmdXF373eCSckt8FvfvIdkuNk0dFpzmt%2BKi1GzZfUxdqQDaymv%2FQzDNJq7t6oZZ1Ti%2BjLqSbgD%2B7s5ffZ2%2BPxppzQYDRoGJnyrAq4w1ru6f7SJLOWYfEwNS3yBPIjQPicu93Wr7cdTAa96jk%2Fzf%2BCi92LPUSTJ9A%2BI9FpaV%2BkDPDqttCY2ClJRzxJ76Ujeg98m8UOAHoPAFsXMq6hwEgBXYfDIfl8KwKFPDlbnQje6q8DeswuaMRtVZvtaZiB%2BaGV39H2TVF2kIBOERQN0dk0rhCkCsNAGo8lP04dSmoF1NGdNbjYdVVz9P%2Bb5ogWE26gPFY19VJ9F9dvJJhdvk7ZMGMYJHyJKTRYSGpX5h%2FLIqKw%2BC2u4SVqF1hNRBXCBGpPiTpyWmlg05uMovMxx3M8Yi2xhh76fVCh%2BSz65f7RzwGdbglMD9F5OkD3X%2BmXlV9NJjvsVeC40a0u9wdNsTfJycWdwqu%2BizKtBZfoCt7m8V6wcv81aVkNTKTdXnjASY2wU6EkVbYr7VeqluDEKzGRn50kF2RqVnkYEX%2BIUGzKn5A%2F5PKmOMoDCVKN4FUD2gH3iLeBFygbKH9KdMKKUvMAGOqUBzBSwNoSwIkyep2zybMPE1wbGkefbl7XzR7NPOoAfHTcqWVAVfkHCRb4jyBi7Hr%2F9gvw26orm9Ii%2FWqiezzhDKZyi8ErKCP%2BW8Urpxoc5x9vwsGZeXhpgbYpkCbhiX6Tfy2MrGDRh0M1qeSkptNfaDL%2Fk0sPR2LopCMc3A03VwIz7Bd4KwZbrS%2BmsyS30psg8tPtBKKKW2nrgDZJiHhesqnvxZWaz&X-Amz-Signature=ed856b384cc1523b54d4e4d17a2e57119002df23bef89cea5b28c53df006cf32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHNPMWL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdF05qymL45OFhIf8d2IO7VPCyCNFqQDgQc9axggm3AIgU2Wor0HQQxubWTZt49hQ756Y1%2B0wzt79EdIhz8CxXBIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKeoZl67W8cwqmhR9ircA8qezJ5MKB4Orf8KTVdtFt9v4Iysz8Gs%2BArT9v0bukfcBgWmdXF373eCSckt8FvfvIdkuNk0dFpzmt%2BKi1GzZfUxdqQDaymv%2FQzDNJq7t6oZZ1Ti%2BjLqSbgD%2B7s5ffZ2%2BPxppzQYDRoGJnyrAq4w1ru6f7SJLOWYfEwNS3yBPIjQPicu93Wr7cdTAa96jk%2Fzf%2BCi92LPUSTJ9A%2BI9FpaV%2BkDPDqttCY2ClJRzxJ76Ujeg98m8UOAHoPAFsXMq6hwEgBXYfDIfl8KwKFPDlbnQje6q8DeswuaMRtVZvtaZiB%2BaGV39H2TVF2kIBOERQN0dk0rhCkCsNAGo8lP04dSmoF1NGdNbjYdVVz9P%2Bb5ogWE26gPFY19VJ9F9dvJJhdvk7ZMGMYJHyJKTRYSGpX5h%2FLIqKw%2BC2u4SVqF1hNRBXCBGpPiTpyWmlg05uMovMxx3M8Yi2xhh76fVCh%2BSz65f7RzwGdbglMD9F5OkD3X%2BmXlV9NJjvsVeC40a0u9wdNsTfJycWdwqu%2BizKtBZfoCt7m8V6wcv81aVkNTKTdXnjASY2wU6EkVbYr7VeqluDEKzGRn50kF2RqVnkYEX%2BIUGzKn5A%2F5PKmOMoDCVKN4FUD2gH3iLeBFygbKH9KdMKKUvMAGOqUBzBSwNoSwIkyep2zybMPE1wbGkefbl7XzR7NPOoAfHTcqWVAVfkHCRb4jyBi7Hr%2F9gvw26orm9Ii%2FWqiezzhDKZyi8ErKCP%2BW8Urpxoc5x9vwsGZeXhpgbYpkCbhiX6Tfy2MrGDRh0M1qeSkptNfaDL%2Fk0sPR2LopCMc3A03VwIz7Bd4KwZbrS%2BmsyS30psg8tPtBKKKW2nrgDZJiHhesqnvxZWaz&X-Amz-Signature=d96aa06ac97a081a36ae151abdbee16e2fd8b8ab130b255bfa70d0568bb39bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHNPMWL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUdF05qymL45OFhIf8d2IO7VPCyCNFqQDgQc9axggm3AIgU2Wor0HQQxubWTZt49hQ756Y1%2B0wzt79EdIhz8CxXBIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKeoZl67W8cwqmhR9ircA8qezJ5MKB4Orf8KTVdtFt9v4Iysz8Gs%2BArT9v0bukfcBgWmdXF373eCSckt8FvfvIdkuNk0dFpzmt%2BKi1GzZfUxdqQDaymv%2FQzDNJq7t6oZZ1Ti%2BjLqSbgD%2B7s5ffZ2%2BPxppzQYDRoGJnyrAq4w1ru6f7SJLOWYfEwNS3yBPIjQPicu93Wr7cdTAa96jk%2Fzf%2BCi92LPUSTJ9A%2BI9FpaV%2BkDPDqttCY2ClJRzxJ76Ujeg98m8UOAHoPAFsXMq6hwEgBXYfDIfl8KwKFPDlbnQje6q8DeswuaMRtVZvtaZiB%2BaGV39H2TVF2kIBOERQN0dk0rhCkCsNAGo8lP04dSmoF1NGdNbjYdVVz9P%2Bb5ogWE26gPFY19VJ9F9dvJJhdvk7ZMGMYJHyJKTRYSGpX5h%2FLIqKw%2BC2u4SVqF1hNRBXCBGpPiTpyWmlg05uMovMxx3M8Yi2xhh76fVCh%2BSz65f7RzwGdbglMD9F5OkD3X%2BmXlV9NJjvsVeC40a0u9wdNsTfJycWdwqu%2BizKtBZfoCt7m8V6wcv81aVkNTKTdXnjASY2wU6EkVbYr7VeqluDEKzGRn50kF2RqVnkYEX%2BIUGzKn5A%2F5PKmOMoDCVKN4FUD2gH3iLeBFygbKH9KdMKKUvMAGOqUBzBSwNoSwIkyep2zybMPE1wbGkefbl7XzR7NPOoAfHTcqWVAVfkHCRb4jyBi7Hr%2F9gvw26orm9Ii%2FWqiezzhDKZyi8ErKCP%2BW8Urpxoc5x9vwsGZeXhpgbYpkCbhiX6Tfy2MrGDRh0M1qeSkptNfaDL%2Fk0sPR2LopCMc3A03VwIz7Bd4KwZbrS%2BmsyS30psg8tPtBKKKW2nrgDZJiHhesqnvxZWaz&X-Amz-Signature=e51e5e74741df0b5f19812793bcde236e5771b7fc350bcfd8a8f813922f19ed3&X-Amz-SignedHeaders=host&x-id=GetObject)
