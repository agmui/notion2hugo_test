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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4K4XB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCz3Qav5MBsEuM8mgGsLNTHtqhKgTH%2F%2BDnsxSCrG13EhQIgGqwV1LX0cdcRMKgxCRfCGxiA34R0ImGV57StkusdS9oqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGa4avn5GL2kfgulyrcA8ifLwsPff3CprIEGCicIRbLhe%2FeZFpq7knEyaVo%2FsqrfnJ1nXoUIjSzr9P%2FXPOJAKqvjxBf4KChZmMc3HHjPwTs%2B9poLK%2Fui1QF5lep7gQCtC%2F1Te3oigONkeQsS4tRp5qNFV6gy0rIMTMNOyvfSAgv48bFgh2UxgsoWh5AUV20sC2%2FwHPPAwFYj61AI1HwWoaCZgec3U4xdzjFQdfsu2afWIN%2BKXI15ugl43YyF8hekyY8mYA%2BjAFrhDdsh035nlRhtlCCA2hxv3S68040hRzf1NgJW9Cyyy3bVMVnjZI6G85LiMeszahdwdMGroRNhdgnU5Ph5VuFehdMmv%2FVRHgW5xbeHViLkdeKp1GHuplD3AReUAMEF7q4oS4djTePwb34NkQgWqQaxyj8fmD64jq%2BMA9Gzt0cjdko7vTdgm4WKY97IAOGXLC7Zv%2FgkpCXgYDhJ6tOY65lSkCOkHOkyDUB%2F6FwcyKMeQ4hh2VnskQQfZwa7hId9eef%2BlbNdeH46Sz%2FyVIqT1UDf4j9B%2BOX4CpBsJU0w2LGypseKBd5RiX1hoLAhPa5IvWAY557MBbksb32%2BgSFioBpnKW6bsXKQlDIXQVkQeHgD2i14g%2FSlQWYlLgT7dc5NYucKSOMMKfivMEGOqUBpfzzraofStcZ3ZLDJTq3u68DGuHyGnsLY4erRejMqjvGMUUmW7tcP3dnyUMlBXFI504iwthQcMGOL6jeRVHlI2ITYphB9bSyadLAqGoVsbGWgFWCTmxaXi9z7r8CshGmIc0Eu6%2BGzXpFW%2F%2B4uDC4iY1S%2BFT3BYkK2c6V7k5687sRgSpEJKCkRyMv5BjqZZmXF6YzZxmI5s468HZoOunKvlaoME2w&X-Amz-Signature=6776f24e495b213f9dfcf67e7b6e88b7ecdc04c1a92815e36fe577cf8eaf2baa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4K4XB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCz3Qav5MBsEuM8mgGsLNTHtqhKgTH%2F%2BDnsxSCrG13EhQIgGqwV1LX0cdcRMKgxCRfCGxiA34R0ImGV57StkusdS9oqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGa4avn5GL2kfgulyrcA8ifLwsPff3CprIEGCicIRbLhe%2FeZFpq7knEyaVo%2FsqrfnJ1nXoUIjSzr9P%2FXPOJAKqvjxBf4KChZmMc3HHjPwTs%2B9poLK%2Fui1QF5lep7gQCtC%2F1Te3oigONkeQsS4tRp5qNFV6gy0rIMTMNOyvfSAgv48bFgh2UxgsoWh5AUV20sC2%2FwHPPAwFYj61AI1HwWoaCZgec3U4xdzjFQdfsu2afWIN%2BKXI15ugl43YyF8hekyY8mYA%2BjAFrhDdsh035nlRhtlCCA2hxv3S68040hRzf1NgJW9Cyyy3bVMVnjZI6G85LiMeszahdwdMGroRNhdgnU5Ph5VuFehdMmv%2FVRHgW5xbeHViLkdeKp1GHuplD3AReUAMEF7q4oS4djTePwb34NkQgWqQaxyj8fmD64jq%2BMA9Gzt0cjdko7vTdgm4WKY97IAOGXLC7Zv%2FgkpCXgYDhJ6tOY65lSkCOkHOkyDUB%2F6FwcyKMeQ4hh2VnskQQfZwa7hId9eef%2BlbNdeH46Sz%2FyVIqT1UDf4j9B%2BOX4CpBsJU0w2LGypseKBd5RiX1hoLAhPa5IvWAY557MBbksb32%2BgSFioBpnKW6bsXKQlDIXQVkQeHgD2i14g%2FSlQWYlLgT7dc5NYucKSOMMKfivMEGOqUBpfzzraofStcZ3ZLDJTq3u68DGuHyGnsLY4erRejMqjvGMUUmW7tcP3dnyUMlBXFI504iwthQcMGOL6jeRVHlI2ITYphB9bSyadLAqGoVsbGWgFWCTmxaXi9z7r8CshGmIc0Eu6%2BGzXpFW%2F%2B4uDC4iY1S%2BFT3BYkK2c6V7k5687sRgSpEJKCkRyMv5BjqZZmXF6YzZxmI5s468HZoOunKvlaoME2w&X-Amz-Signature=87d2c59489f37c080d98ede1e1cd46e6a7f486c25eed5fddd1e605792f1c0df0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4K4XB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCz3Qav5MBsEuM8mgGsLNTHtqhKgTH%2F%2BDnsxSCrG13EhQIgGqwV1LX0cdcRMKgxCRfCGxiA34R0ImGV57StkusdS9oqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGa4avn5GL2kfgulyrcA8ifLwsPff3CprIEGCicIRbLhe%2FeZFpq7knEyaVo%2FsqrfnJ1nXoUIjSzr9P%2FXPOJAKqvjxBf4KChZmMc3HHjPwTs%2B9poLK%2Fui1QF5lep7gQCtC%2F1Te3oigONkeQsS4tRp5qNFV6gy0rIMTMNOyvfSAgv48bFgh2UxgsoWh5AUV20sC2%2FwHPPAwFYj61AI1HwWoaCZgec3U4xdzjFQdfsu2afWIN%2BKXI15ugl43YyF8hekyY8mYA%2BjAFrhDdsh035nlRhtlCCA2hxv3S68040hRzf1NgJW9Cyyy3bVMVnjZI6G85LiMeszahdwdMGroRNhdgnU5Ph5VuFehdMmv%2FVRHgW5xbeHViLkdeKp1GHuplD3AReUAMEF7q4oS4djTePwb34NkQgWqQaxyj8fmD64jq%2BMA9Gzt0cjdko7vTdgm4WKY97IAOGXLC7Zv%2FgkpCXgYDhJ6tOY65lSkCOkHOkyDUB%2F6FwcyKMeQ4hh2VnskQQfZwa7hId9eef%2BlbNdeH46Sz%2FyVIqT1UDf4j9B%2BOX4CpBsJU0w2LGypseKBd5RiX1hoLAhPa5IvWAY557MBbksb32%2BgSFioBpnKW6bsXKQlDIXQVkQeHgD2i14g%2FSlQWYlLgT7dc5NYucKSOMMKfivMEGOqUBpfzzraofStcZ3ZLDJTq3u68DGuHyGnsLY4erRejMqjvGMUUmW7tcP3dnyUMlBXFI504iwthQcMGOL6jeRVHlI2ITYphB9bSyadLAqGoVsbGWgFWCTmxaXi9z7r8CshGmIc0Eu6%2BGzXpFW%2F%2B4uDC4iY1S%2BFT3BYkK2c6V7k5687sRgSpEJKCkRyMv5BjqZZmXF6YzZxmI5s468HZoOunKvlaoME2w&X-Amz-Signature=c81f023fb343d572761bdbabb42ca1b9497b6c7cd8172a9a1d950b8d3ec21421&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4K4XB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCz3Qav5MBsEuM8mgGsLNTHtqhKgTH%2F%2BDnsxSCrG13EhQIgGqwV1LX0cdcRMKgxCRfCGxiA34R0ImGV57StkusdS9oqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGa4avn5GL2kfgulyrcA8ifLwsPff3CprIEGCicIRbLhe%2FeZFpq7knEyaVo%2FsqrfnJ1nXoUIjSzr9P%2FXPOJAKqvjxBf4KChZmMc3HHjPwTs%2B9poLK%2Fui1QF5lep7gQCtC%2F1Te3oigONkeQsS4tRp5qNFV6gy0rIMTMNOyvfSAgv48bFgh2UxgsoWh5AUV20sC2%2FwHPPAwFYj61AI1HwWoaCZgec3U4xdzjFQdfsu2afWIN%2BKXI15ugl43YyF8hekyY8mYA%2BjAFrhDdsh035nlRhtlCCA2hxv3S68040hRzf1NgJW9Cyyy3bVMVnjZI6G85LiMeszahdwdMGroRNhdgnU5Ph5VuFehdMmv%2FVRHgW5xbeHViLkdeKp1GHuplD3AReUAMEF7q4oS4djTePwb34NkQgWqQaxyj8fmD64jq%2BMA9Gzt0cjdko7vTdgm4WKY97IAOGXLC7Zv%2FgkpCXgYDhJ6tOY65lSkCOkHOkyDUB%2F6FwcyKMeQ4hh2VnskQQfZwa7hId9eef%2BlbNdeH46Sz%2FyVIqT1UDf4j9B%2BOX4CpBsJU0w2LGypseKBd5RiX1hoLAhPa5IvWAY557MBbksb32%2BgSFioBpnKW6bsXKQlDIXQVkQeHgD2i14g%2FSlQWYlLgT7dc5NYucKSOMMKfivMEGOqUBpfzzraofStcZ3ZLDJTq3u68DGuHyGnsLY4erRejMqjvGMUUmW7tcP3dnyUMlBXFI504iwthQcMGOL6jeRVHlI2ITYphB9bSyadLAqGoVsbGWgFWCTmxaXi9z7r8CshGmIc0Eu6%2BGzXpFW%2F%2B4uDC4iY1S%2BFT3BYkK2c6V7k5687sRgSpEJKCkRyMv5BjqZZmXF6YzZxmI5s468HZoOunKvlaoME2w&X-Amz-Signature=319ef37308e61fd1c578d66b30f3a47e0bfeb151bb083badb027b522558df1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4K4XB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCz3Qav5MBsEuM8mgGsLNTHtqhKgTH%2F%2BDnsxSCrG13EhQIgGqwV1LX0cdcRMKgxCRfCGxiA34R0ImGV57StkusdS9oqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGa4avn5GL2kfgulyrcA8ifLwsPff3CprIEGCicIRbLhe%2FeZFpq7knEyaVo%2FsqrfnJ1nXoUIjSzr9P%2FXPOJAKqvjxBf4KChZmMc3HHjPwTs%2B9poLK%2Fui1QF5lep7gQCtC%2F1Te3oigONkeQsS4tRp5qNFV6gy0rIMTMNOyvfSAgv48bFgh2UxgsoWh5AUV20sC2%2FwHPPAwFYj61AI1HwWoaCZgec3U4xdzjFQdfsu2afWIN%2BKXI15ugl43YyF8hekyY8mYA%2BjAFrhDdsh035nlRhtlCCA2hxv3S68040hRzf1NgJW9Cyyy3bVMVnjZI6G85LiMeszahdwdMGroRNhdgnU5Ph5VuFehdMmv%2FVRHgW5xbeHViLkdeKp1GHuplD3AReUAMEF7q4oS4djTePwb34NkQgWqQaxyj8fmD64jq%2BMA9Gzt0cjdko7vTdgm4WKY97IAOGXLC7Zv%2FgkpCXgYDhJ6tOY65lSkCOkHOkyDUB%2F6FwcyKMeQ4hh2VnskQQfZwa7hId9eef%2BlbNdeH46Sz%2FyVIqT1UDf4j9B%2BOX4CpBsJU0w2LGypseKBd5RiX1hoLAhPa5IvWAY557MBbksb32%2BgSFioBpnKW6bsXKQlDIXQVkQeHgD2i14g%2FSlQWYlLgT7dc5NYucKSOMMKfivMEGOqUBpfzzraofStcZ3ZLDJTq3u68DGuHyGnsLY4erRejMqjvGMUUmW7tcP3dnyUMlBXFI504iwthQcMGOL6jeRVHlI2ITYphB9bSyadLAqGoVsbGWgFWCTmxaXi9z7r8CshGmIc0Eu6%2BGzXpFW%2F%2B4uDC4iY1S%2BFT3BYkK2c6V7k5687sRgSpEJKCkRyMv5BjqZZmXF6YzZxmI5s468HZoOunKvlaoME2w&X-Amz-Signature=9f40848e655c23653e886051c9e91f8e4e0ba8bffdbcc565e5ddaf7d3b27bc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y4K4XB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCz3Qav5MBsEuM8mgGsLNTHtqhKgTH%2F%2BDnsxSCrG13EhQIgGqwV1LX0cdcRMKgxCRfCGxiA34R0ImGV57StkusdS9oqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGa4avn5GL2kfgulyrcA8ifLwsPff3CprIEGCicIRbLhe%2FeZFpq7knEyaVo%2FsqrfnJ1nXoUIjSzr9P%2FXPOJAKqvjxBf4KChZmMc3HHjPwTs%2B9poLK%2Fui1QF5lep7gQCtC%2F1Te3oigONkeQsS4tRp5qNFV6gy0rIMTMNOyvfSAgv48bFgh2UxgsoWh5AUV20sC2%2FwHPPAwFYj61AI1HwWoaCZgec3U4xdzjFQdfsu2afWIN%2BKXI15ugl43YyF8hekyY8mYA%2BjAFrhDdsh035nlRhtlCCA2hxv3S68040hRzf1NgJW9Cyyy3bVMVnjZI6G85LiMeszahdwdMGroRNhdgnU5Ph5VuFehdMmv%2FVRHgW5xbeHViLkdeKp1GHuplD3AReUAMEF7q4oS4djTePwb34NkQgWqQaxyj8fmD64jq%2BMA9Gzt0cjdko7vTdgm4WKY97IAOGXLC7Zv%2FgkpCXgYDhJ6tOY65lSkCOkHOkyDUB%2F6FwcyKMeQ4hh2VnskQQfZwa7hId9eef%2BlbNdeH46Sz%2FyVIqT1UDf4j9B%2BOX4CpBsJU0w2LGypseKBd5RiX1hoLAhPa5IvWAY557MBbksb32%2BgSFioBpnKW6bsXKQlDIXQVkQeHgD2i14g%2FSlQWYlLgT7dc5NYucKSOMMKfivMEGOqUBpfzzraofStcZ3ZLDJTq3u68DGuHyGnsLY4erRejMqjvGMUUmW7tcP3dnyUMlBXFI504iwthQcMGOL6jeRVHlI2ITYphB9bSyadLAqGoVsbGWgFWCTmxaXi9z7r8CshGmIc0Eu6%2BGzXpFW%2F%2B4uDC4iY1S%2BFT3BYkK2c6V7k5687sRgSpEJKCkRyMv5BjqZZmXF6YzZxmI5s468HZoOunKvlaoME2w&X-Amz-Signature=fc9175989dc3e479661eaf7b60a66527424cf1c6c0f892853d5fbb742dd7b870&X-Amz-SignedHeaders=host&x-id=GetObject)
