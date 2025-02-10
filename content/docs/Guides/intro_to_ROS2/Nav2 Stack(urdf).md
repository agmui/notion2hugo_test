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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ46DMN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwy89d%2B%2BMnVggB4JB3cELmMMpxL6o6qxqerNMJlITEQAiAC7B6YjOkyFBEWIqZ8%2F7h9Hv0KVxjswqXZpzkymgHX5SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuk8Mu1CM9c7Va4rKtwDOPdMPuiFOpMaj%2BQzTzN%2FIQrSVZ%2FM7q09475PqoVGmntEB9e8hTMiQzzTk%2BhPKQVv%2BurDtzoKU02obnGmQKyQofELr%2FH9H09BZtDPjwgcRnTpYmBk3tpVa4DGyQ%2FK8pIO6mO7H6sOHJDPWCN6Hk2p1AnTXhXEzwktcF%2FB5h227dpkTnvSBCYtRUnofQG5dvkRyDRukWdGuZwnVsVKPu5RlgwL8p1YVRzolpxiRptVnSvzwS5%2Fmt%2BwIwRiDsRiK344L4io8iXUy5YIMjdt220Llcyi9p6W8W8e9aWMN3YL67h%2BaltDiop8I7PPK8XUvpn4P0vM%2BmLj%2B6hCbJZRkwhhBFLEuT1DOANEsQ23SY%2FtauWBjht6OLF0%2FtWhIHgsKf8kCQKSdz%2FzJUNO%2Bm%2BsskXaDOThMOUMmlFYCZof3Tkk0kJp5FS53rjQyzl1a5TRRvRnOo%2FPB%2F5Ui8cRZ1qmYdpWmhPQeKuu2%2BKPwRgjtgIfqHa7wf99nF6cGJM5dv%2F5OBXY4w2txx8X1mpHK%2Faa%2FGGq2ieCx6N8dkS73iOF6U2QWZzgPXdmdZSP26%2BBPcXv2UO4FM1HFlFzlrgHre6jo45eE0eJo4q1nKqGoLE9fW8jHsjH%2B4m%2BVBaNKsOGtLkwl%2FqlvQY6pgHwOWHASrjdqMXllperLNXyGmLn3YWbGsdIRTuhCoyFSsyjy9CP3fCC3PXdTWsLTIysUDAAa7U5tZ9A6OVYA2zBfgAbgVWUFHG5Pcf365dT5BflTIgTgaAfTCuQ16OuENpkf5%2F%2BLD3JpN%2FwT94aB2VcJOBGfMpDznoQpHxcUEiu1DHqR7TIUvxrBbLdBUk1x9iaQYiMT2YF4xUgMJkT3zf5m6fPmbU5&X-Amz-Signature=fc80acbeb4e091dee21b38f82014160c5ceba513bfab8c6e8d19bb57af8ad52a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ46DMN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwy89d%2B%2BMnVggB4JB3cELmMMpxL6o6qxqerNMJlITEQAiAC7B6YjOkyFBEWIqZ8%2F7h9Hv0KVxjswqXZpzkymgHX5SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuk8Mu1CM9c7Va4rKtwDOPdMPuiFOpMaj%2BQzTzN%2FIQrSVZ%2FM7q09475PqoVGmntEB9e8hTMiQzzTk%2BhPKQVv%2BurDtzoKU02obnGmQKyQofELr%2FH9H09BZtDPjwgcRnTpYmBk3tpVa4DGyQ%2FK8pIO6mO7H6sOHJDPWCN6Hk2p1AnTXhXEzwktcF%2FB5h227dpkTnvSBCYtRUnofQG5dvkRyDRukWdGuZwnVsVKPu5RlgwL8p1YVRzolpxiRptVnSvzwS5%2Fmt%2BwIwRiDsRiK344L4io8iXUy5YIMjdt220Llcyi9p6W8W8e9aWMN3YL67h%2BaltDiop8I7PPK8XUvpn4P0vM%2BmLj%2B6hCbJZRkwhhBFLEuT1DOANEsQ23SY%2FtauWBjht6OLF0%2FtWhIHgsKf8kCQKSdz%2FzJUNO%2Bm%2BsskXaDOThMOUMmlFYCZof3Tkk0kJp5FS53rjQyzl1a5TRRvRnOo%2FPB%2F5Ui8cRZ1qmYdpWmhPQeKuu2%2BKPwRgjtgIfqHa7wf99nF6cGJM5dv%2F5OBXY4w2txx8X1mpHK%2Faa%2FGGq2ieCx6N8dkS73iOF6U2QWZzgPXdmdZSP26%2BBPcXv2UO4FM1HFlFzlrgHre6jo45eE0eJo4q1nKqGoLE9fW8jHsjH%2B4m%2BVBaNKsOGtLkwl%2FqlvQY6pgHwOWHASrjdqMXllperLNXyGmLn3YWbGsdIRTuhCoyFSsyjy9CP3fCC3PXdTWsLTIysUDAAa7U5tZ9A6OVYA2zBfgAbgVWUFHG5Pcf365dT5BflTIgTgaAfTCuQ16OuENpkf5%2F%2BLD3JpN%2FwT94aB2VcJOBGfMpDznoQpHxcUEiu1DHqR7TIUvxrBbLdBUk1x9iaQYiMT2YF4xUgMJkT3zf5m6fPmbU5&X-Amz-Signature=478d14bffecefd2889b935b3fce6d3614ec355cf85f666208ed508a9367da620&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ46DMN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwy89d%2B%2BMnVggB4JB3cELmMMpxL6o6qxqerNMJlITEQAiAC7B6YjOkyFBEWIqZ8%2F7h9Hv0KVxjswqXZpzkymgHX5SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuk8Mu1CM9c7Va4rKtwDOPdMPuiFOpMaj%2BQzTzN%2FIQrSVZ%2FM7q09475PqoVGmntEB9e8hTMiQzzTk%2BhPKQVv%2BurDtzoKU02obnGmQKyQofELr%2FH9H09BZtDPjwgcRnTpYmBk3tpVa4DGyQ%2FK8pIO6mO7H6sOHJDPWCN6Hk2p1AnTXhXEzwktcF%2FB5h227dpkTnvSBCYtRUnofQG5dvkRyDRukWdGuZwnVsVKPu5RlgwL8p1YVRzolpxiRptVnSvzwS5%2Fmt%2BwIwRiDsRiK344L4io8iXUy5YIMjdt220Llcyi9p6W8W8e9aWMN3YL67h%2BaltDiop8I7PPK8XUvpn4P0vM%2BmLj%2B6hCbJZRkwhhBFLEuT1DOANEsQ23SY%2FtauWBjht6OLF0%2FtWhIHgsKf8kCQKSdz%2FzJUNO%2Bm%2BsskXaDOThMOUMmlFYCZof3Tkk0kJp5FS53rjQyzl1a5TRRvRnOo%2FPB%2F5Ui8cRZ1qmYdpWmhPQeKuu2%2BKPwRgjtgIfqHa7wf99nF6cGJM5dv%2F5OBXY4w2txx8X1mpHK%2Faa%2FGGq2ieCx6N8dkS73iOF6U2QWZzgPXdmdZSP26%2BBPcXv2UO4FM1HFlFzlrgHre6jo45eE0eJo4q1nKqGoLE9fW8jHsjH%2B4m%2BVBaNKsOGtLkwl%2FqlvQY6pgHwOWHASrjdqMXllperLNXyGmLn3YWbGsdIRTuhCoyFSsyjy9CP3fCC3PXdTWsLTIysUDAAa7U5tZ9A6OVYA2zBfgAbgVWUFHG5Pcf365dT5BflTIgTgaAfTCuQ16OuENpkf5%2F%2BLD3JpN%2FwT94aB2VcJOBGfMpDznoQpHxcUEiu1DHqR7TIUvxrBbLdBUk1x9iaQYiMT2YF4xUgMJkT3zf5m6fPmbU5&X-Amz-Signature=e88b1ce1e055dc58bc92052cff74e9648db6e4e3edbbfdbdb1c078bd47994222&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ46DMN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwy89d%2B%2BMnVggB4JB3cELmMMpxL6o6qxqerNMJlITEQAiAC7B6YjOkyFBEWIqZ8%2F7h9Hv0KVxjswqXZpzkymgHX5SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuk8Mu1CM9c7Va4rKtwDOPdMPuiFOpMaj%2BQzTzN%2FIQrSVZ%2FM7q09475PqoVGmntEB9e8hTMiQzzTk%2BhPKQVv%2BurDtzoKU02obnGmQKyQofELr%2FH9H09BZtDPjwgcRnTpYmBk3tpVa4DGyQ%2FK8pIO6mO7H6sOHJDPWCN6Hk2p1AnTXhXEzwktcF%2FB5h227dpkTnvSBCYtRUnofQG5dvkRyDRukWdGuZwnVsVKPu5RlgwL8p1YVRzolpxiRptVnSvzwS5%2Fmt%2BwIwRiDsRiK344L4io8iXUy5YIMjdt220Llcyi9p6W8W8e9aWMN3YL67h%2BaltDiop8I7PPK8XUvpn4P0vM%2BmLj%2B6hCbJZRkwhhBFLEuT1DOANEsQ23SY%2FtauWBjht6OLF0%2FtWhIHgsKf8kCQKSdz%2FzJUNO%2Bm%2BsskXaDOThMOUMmlFYCZof3Tkk0kJp5FS53rjQyzl1a5TRRvRnOo%2FPB%2F5Ui8cRZ1qmYdpWmhPQeKuu2%2BKPwRgjtgIfqHa7wf99nF6cGJM5dv%2F5OBXY4w2txx8X1mpHK%2Faa%2FGGq2ieCx6N8dkS73iOF6U2QWZzgPXdmdZSP26%2BBPcXv2UO4FM1HFlFzlrgHre6jo45eE0eJo4q1nKqGoLE9fW8jHsjH%2B4m%2BVBaNKsOGtLkwl%2FqlvQY6pgHwOWHASrjdqMXllperLNXyGmLn3YWbGsdIRTuhCoyFSsyjy9CP3fCC3PXdTWsLTIysUDAAa7U5tZ9A6OVYA2zBfgAbgVWUFHG5Pcf365dT5BflTIgTgaAfTCuQ16OuENpkf5%2F%2BLD3JpN%2FwT94aB2VcJOBGfMpDznoQpHxcUEiu1DHqR7TIUvxrBbLdBUk1x9iaQYiMT2YF4xUgMJkT3zf5m6fPmbU5&X-Amz-Signature=b35f8d3154a4d8f14d41924124cc38b29c828797229d919407ee18936807026c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ46DMN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwy89d%2B%2BMnVggB4JB3cELmMMpxL6o6qxqerNMJlITEQAiAC7B6YjOkyFBEWIqZ8%2F7h9Hv0KVxjswqXZpzkymgHX5SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuk8Mu1CM9c7Va4rKtwDOPdMPuiFOpMaj%2BQzTzN%2FIQrSVZ%2FM7q09475PqoVGmntEB9e8hTMiQzzTk%2BhPKQVv%2BurDtzoKU02obnGmQKyQofELr%2FH9H09BZtDPjwgcRnTpYmBk3tpVa4DGyQ%2FK8pIO6mO7H6sOHJDPWCN6Hk2p1AnTXhXEzwktcF%2FB5h227dpkTnvSBCYtRUnofQG5dvkRyDRukWdGuZwnVsVKPu5RlgwL8p1YVRzolpxiRptVnSvzwS5%2Fmt%2BwIwRiDsRiK344L4io8iXUy5YIMjdt220Llcyi9p6W8W8e9aWMN3YL67h%2BaltDiop8I7PPK8XUvpn4P0vM%2BmLj%2B6hCbJZRkwhhBFLEuT1DOANEsQ23SY%2FtauWBjht6OLF0%2FtWhIHgsKf8kCQKSdz%2FzJUNO%2Bm%2BsskXaDOThMOUMmlFYCZof3Tkk0kJp5FS53rjQyzl1a5TRRvRnOo%2FPB%2F5Ui8cRZ1qmYdpWmhPQeKuu2%2BKPwRgjtgIfqHa7wf99nF6cGJM5dv%2F5OBXY4w2txx8X1mpHK%2Faa%2FGGq2ieCx6N8dkS73iOF6U2QWZzgPXdmdZSP26%2BBPcXv2UO4FM1HFlFzlrgHre6jo45eE0eJo4q1nKqGoLE9fW8jHsjH%2B4m%2BVBaNKsOGtLkwl%2FqlvQY6pgHwOWHASrjdqMXllperLNXyGmLn3YWbGsdIRTuhCoyFSsyjy9CP3fCC3PXdTWsLTIysUDAAa7U5tZ9A6OVYA2zBfgAbgVWUFHG5Pcf365dT5BflTIgTgaAfTCuQ16OuENpkf5%2F%2BLD3JpN%2FwT94aB2VcJOBGfMpDznoQpHxcUEiu1DHqR7TIUvxrBbLdBUk1x9iaQYiMT2YF4xUgMJkT3zf5m6fPmbU5&X-Amz-Signature=6c0682b9ec4294e91b18785c8d819925d4472898c19bc77bc78317e59d07cf8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOJ46DMN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwy89d%2B%2BMnVggB4JB3cELmMMpxL6o6qxqerNMJlITEQAiAC7B6YjOkyFBEWIqZ8%2F7h9Hv0KVxjswqXZpzkymgHX5SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRuk8Mu1CM9c7Va4rKtwDOPdMPuiFOpMaj%2BQzTzN%2FIQrSVZ%2FM7q09475PqoVGmntEB9e8hTMiQzzTk%2BhPKQVv%2BurDtzoKU02obnGmQKyQofELr%2FH9H09BZtDPjwgcRnTpYmBk3tpVa4DGyQ%2FK8pIO6mO7H6sOHJDPWCN6Hk2p1AnTXhXEzwktcF%2FB5h227dpkTnvSBCYtRUnofQG5dvkRyDRukWdGuZwnVsVKPu5RlgwL8p1YVRzolpxiRptVnSvzwS5%2Fmt%2BwIwRiDsRiK344L4io8iXUy5YIMjdt220Llcyi9p6W8W8e9aWMN3YL67h%2BaltDiop8I7PPK8XUvpn4P0vM%2BmLj%2B6hCbJZRkwhhBFLEuT1DOANEsQ23SY%2FtauWBjht6OLF0%2FtWhIHgsKf8kCQKSdz%2FzJUNO%2Bm%2BsskXaDOThMOUMmlFYCZof3Tkk0kJp5FS53rjQyzl1a5TRRvRnOo%2FPB%2F5Ui8cRZ1qmYdpWmhPQeKuu2%2BKPwRgjtgIfqHa7wf99nF6cGJM5dv%2F5OBXY4w2txx8X1mpHK%2Faa%2FGGq2ieCx6N8dkS73iOF6U2QWZzgPXdmdZSP26%2BBPcXv2UO4FM1HFlFzlrgHre6jo45eE0eJo4q1nKqGoLE9fW8jHsjH%2B4m%2BVBaNKsOGtLkwl%2FqlvQY6pgHwOWHASrjdqMXllperLNXyGmLn3YWbGsdIRTuhCoyFSsyjy9CP3fCC3PXdTWsLTIysUDAAa7U5tZ9A6OVYA2zBfgAbgVWUFHG5Pcf365dT5BflTIgTgaAfTCuQ16OuENpkf5%2F%2BLD3JpN%2FwT94aB2VcJOBGfMpDznoQpHxcUEiu1DHqR7TIUvxrBbLdBUk1x9iaQYiMT2YF4xUgMJkT3zf5m6fPmbU5&X-Amz-Signature=6b6b5f3b2ecc23238ce0a0754a6ddf4a85fc12d5dc775a368de295ab84afed55&X-Amz-SignedHeaders=host&x-id=GetObject)
