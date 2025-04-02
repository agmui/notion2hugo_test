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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5WUIL7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF97VDPDxpK38KuUblkNrAM3QjK2NF%2FgKZwn%2F3RvROZDAiEA1Xthk2I9ItLcmUmKO5xWWZnuD6rVcbdqUcFp2Vbrtx8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPMD3JWkiOd6Gt5KyrcAx0S0xp1kUCGKPxKPTOQtB2OvD4AZoVQUPv2aiW%2FzGFxPfFYrhCIDnh%2B%2BurVR6sikUH5o0XQFGVDO6M3EcL32CNG0sZ%2BlR6m%2BDAzPAoYPFitF0VyAPTvp2FSYyEPuoTWVR1UeEN%2FbXtjQKoJZQOdVjvfC6pujr2GeH%2FkFOSV4wQmaAC0J%2BaF7btBAtftL8eLVLcvGMyCJzYVNVCcyTtbhx5MlXevioikqCEjjEKf4MRWLad0RYE8kK9HcaF9EirFu5A4LCQD2SOl855DqRqOnQkr5f%2BD4OH81OTq4lC8ifxcB7d3BiRa%2BKrhnTZwlzgt124AFZ4rWmeWbfYg%2FGLbBcxT7us70SuNUMLdDFIOXglYU7unB9jAbvBip%2F1RNYbpvvS42Ki2oCRjoEiohtwcINlL0NZv%2BMxNos6Qizrkd2WlmT%2F4yvfjLyMmfCtettKxki5pwkbNzFln750s1dOkw5glBIq6nfyUFwyiQjtG1D%2BwJEoGhTronZuWZQqm2TcR3kK0kCfrTrKSKvXw9MIQKt%2F9G6%2BOg15rE2j0AKO3vn5GtPX%2BJo0jTgH7uC09SLuHOFPTXR6xAEOKk8udrymYkKP5Dq5yhRkpgBXllt%2BWr%2BQkgybZKK3sY9kxmTtaMNOKs78GOqUBDuSAzXAufEOp7SXPjdL7knw%2BlyKDZgf3ndO8bcPGHYLeW62I0VfgblJV7RSyJFB3i8V8USr7ndcX%2Fj5E98gQ1EepY0H9lLfrvBylyn3yz3jlhN2D2haQ3eD4Iwz0ZqAg%2FYUAkZnzWu7S54mvIDiod3TXvzux3Ce7KSLtANtP%2BbH6m9wIo3JMeg7LIXhaYdVp0z%2F%2BX2QMnhaD3iBbOeSITikGWbC9&X-Amz-Signature=76ed89f1e5c71806e075ea8eddf917830ad246b672662de10c06506ff3f10323&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5WUIL7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF97VDPDxpK38KuUblkNrAM3QjK2NF%2FgKZwn%2F3RvROZDAiEA1Xthk2I9ItLcmUmKO5xWWZnuD6rVcbdqUcFp2Vbrtx8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPMD3JWkiOd6Gt5KyrcAx0S0xp1kUCGKPxKPTOQtB2OvD4AZoVQUPv2aiW%2FzGFxPfFYrhCIDnh%2B%2BurVR6sikUH5o0XQFGVDO6M3EcL32CNG0sZ%2BlR6m%2BDAzPAoYPFitF0VyAPTvp2FSYyEPuoTWVR1UeEN%2FbXtjQKoJZQOdVjvfC6pujr2GeH%2FkFOSV4wQmaAC0J%2BaF7btBAtftL8eLVLcvGMyCJzYVNVCcyTtbhx5MlXevioikqCEjjEKf4MRWLad0RYE8kK9HcaF9EirFu5A4LCQD2SOl855DqRqOnQkr5f%2BD4OH81OTq4lC8ifxcB7d3BiRa%2BKrhnTZwlzgt124AFZ4rWmeWbfYg%2FGLbBcxT7us70SuNUMLdDFIOXglYU7unB9jAbvBip%2F1RNYbpvvS42Ki2oCRjoEiohtwcINlL0NZv%2BMxNos6Qizrkd2WlmT%2F4yvfjLyMmfCtettKxki5pwkbNzFln750s1dOkw5glBIq6nfyUFwyiQjtG1D%2BwJEoGhTronZuWZQqm2TcR3kK0kCfrTrKSKvXw9MIQKt%2F9G6%2BOg15rE2j0AKO3vn5GtPX%2BJo0jTgH7uC09SLuHOFPTXR6xAEOKk8udrymYkKP5Dq5yhRkpgBXllt%2BWr%2BQkgybZKK3sY9kxmTtaMNOKs78GOqUBDuSAzXAufEOp7SXPjdL7knw%2BlyKDZgf3ndO8bcPGHYLeW62I0VfgblJV7RSyJFB3i8V8USr7ndcX%2Fj5E98gQ1EepY0H9lLfrvBylyn3yz3jlhN2D2haQ3eD4Iwz0ZqAg%2FYUAkZnzWu7S54mvIDiod3TXvzux3Ce7KSLtANtP%2BbH6m9wIo3JMeg7LIXhaYdVp0z%2F%2BX2QMnhaD3iBbOeSITikGWbC9&X-Amz-Signature=d2c27c7ee15c4a70bf5e3abb05f41ed32b85311a34a65160621da76614f62758&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5WUIL7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF97VDPDxpK38KuUblkNrAM3QjK2NF%2FgKZwn%2F3RvROZDAiEA1Xthk2I9ItLcmUmKO5xWWZnuD6rVcbdqUcFp2Vbrtx8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPMD3JWkiOd6Gt5KyrcAx0S0xp1kUCGKPxKPTOQtB2OvD4AZoVQUPv2aiW%2FzGFxPfFYrhCIDnh%2B%2BurVR6sikUH5o0XQFGVDO6M3EcL32CNG0sZ%2BlR6m%2BDAzPAoYPFitF0VyAPTvp2FSYyEPuoTWVR1UeEN%2FbXtjQKoJZQOdVjvfC6pujr2GeH%2FkFOSV4wQmaAC0J%2BaF7btBAtftL8eLVLcvGMyCJzYVNVCcyTtbhx5MlXevioikqCEjjEKf4MRWLad0RYE8kK9HcaF9EirFu5A4LCQD2SOl855DqRqOnQkr5f%2BD4OH81OTq4lC8ifxcB7d3BiRa%2BKrhnTZwlzgt124AFZ4rWmeWbfYg%2FGLbBcxT7us70SuNUMLdDFIOXglYU7unB9jAbvBip%2F1RNYbpvvS42Ki2oCRjoEiohtwcINlL0NZv%2BMxNos6Qizrkd2WlmT%2F4yvfjLyMmfCtettKxki5pwkbNzFln750s1dOkw5glBIq6nfyUFwyiQjtG1D%2BwJEoGhTronZuWZQqm2TcR3kK0kCfrTrKSKvXw9MIQKt%2F9G6%2BOg15rE2j0AKO3vn5GtPX%2BJo0jTgH7uC09SLuHOFPTXR6xAEOKk8udrymYkKP5Dq5yhRkpgBXllt%2BWr%2BQkgybZKK3sY9kxmTtaMNOKs78GOqUBDuSAzXAufEOp7SXPjdL7knw%2BlyKDZgf3ndO8bcPGHYLeW62I0VfgblJV7RSyJFB3i8V8USr7ndcX%2Fj5E98gQ1EepY0H9lLfrvBylyn3yz3jlhN2D2haQ3eD4Iwz0ZqAg%2FYUAkZnzWu7S54mvIDiod3TXvzux3Ce7KSLtANtP%2BbH6m9wIo3JMeg7LIXhaYdVp0z%2F%2BX2QMnhaD3iBbOeSITikGWbC9&X-Amz-Signature=b41c9068e70b8a839058c65063ad2143100e6972498b85e4f542effe704773b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5WUIL7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF97VDPDxpK38KuUblkNrAM3QjK2NF%2FgKZwn%2F3RvROZDAiEA1Xthk2I9ItLcmUmKO5xWWZnuD6rVcbdqUcFp2Vbrtx8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPMD3JWkiOd6Gt5KyrcAx0S0xp1kUCGKPxKPTOQtB2OvD4AZoVQUPv2aiW%2FzGFxPfFYrhCIDnh%2B%2BurVR6sikUH5o0XQFGVDO6M3EcL32CNG0sZ%2BlR6m%2BDAzPAoYPFitF0VyAPTvp2FSYyEPuoTWVR1UeEN%2FbXtjQKoJZQOdVjvfC6pujr2GeH%2FkFOSV4wQmaAC0J%2BaF7btBAtftL8eLVLcvGMyCJzYVNVCcyTtbhx5MlXevioikqCEjjEKf4MRWLad0RYE8kK9HcaF9EirFu5A4LCQD2SOl855DqRqOnQkr5f%2BD4OH81OTq4lC8ifxcB7d3BiRa%2BKrhnTZwlzgt124AFZ4rWmeWbfYg%2FGLbBcxT7us70SuNUMLdDFIOXglYU7unB9jAbvBip%2F1RNYbpvvS42Ki2oCRjoEiohtwcINlL0NZv%2BMxNos6Qizrkd2WlmT%2F4yvfjLyMmfCtettKxki5pwkbNzFln750s1dOkw5glBIq6nfyUFwyiQjtG1D%2BwJEoGhTronZuWZQqm2TcR3kK0kCfrTrKSKvXw9MIQKt%2F9G6%2BOg15rE2j0AKO3vn5GtPX%2BJo0jTgH7uC09SLuHOFPTXR6xAEOKk8udrymYkKP5Dq5yhRkpgBXllt%2BWr%2BQkgybZKK3sY9kxmTtaMNOKs78GOqUBDuSAzXAufEOp7SXPjdL7knw%2BlyKDZgf3ndO8bcPGHYLeW62I0VfgblJV7RSyJFB3i8V8USr7ndcX%2Fj5E98gQ1EepY0H9lLfrvBylyn3yz3jlhN2D2haQ3eD4Iwz0ZqAg%2FYUAkZnzWu7S54mvIDiod3TXvzux3Ce7KSLtANtP%2BbH6m9wIo3JMeg7LIXhaYdVp0z%2F%2BX2QMnhaD3iBbOeSITikGWbC9&X-Amz-Signature=91183a6019324f5ef593a50551714f92eeaf5aefd9cc670a3c9d3b8bc0ee5a51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5WUIL7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF97VDPDxpK38KuUblkNrAM3QjK2NF%2FgKZwn%2F3RvROZDAiEA1Xthk2I9ItLcmUmKO5xWWZnuD6rVcbdqUcFp2Vbrtx8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPMD3JWkiOd6Gt5KyrcAx0S0xp1kUCGKPxKPTOQtB2OvD4AZoVQUPv2aiW%2FzGFxPfFYrhCIDnh%2B%2BurVR6sikUH5o0XQFGVDO6M3EcL32CNG0sZ%2BlR6m%2BDAzPAoYPFitF0VyAPTvp2FSYyEPuoTWVR1UeEN%2FbXtjQKoJZQOdVjvfC6pujr2GeH%2FkFOSV4wQmaAC0J%2BaF7btBAtftL8eLVLcvGMyCJzYVNVCcyTtbhx5MlXevioikqCEjjEKf4MRWLad0RYE8kK9HcaF9EirFu5A4LCQD2SOl855DqRqOnQkr5f%2BD4OH81OTq4lC8ifxcB7d3BiRa%2BKrhnTZwlzgt124AFZ4rWmeWbfYg%2FGLbBcxT7us70SuNUMLdDFIOXglYU7unB9jAbvBip%2F1RNYbpvvS42Ki2oCRjoEiohtwcINlL0NZv%2BMxNos6Qizrkd2WlmT%2F4yvfjLyMmfCtettKxki5pwkbNzFln750s1dOkw5glBIq6nfyUFwyiQjtG1D%2BwJEoGhTronZuWZQqm2TcR3kK0kCfrTrKSKvXw9MIQKt%2F9G6%2BOg15rE2j0AKO3vn5GtPX%2BJo0jTgH7uC09SLuHOFPTXR6xAEOKk8udrymYkKP5Dq5yhRkpgBXllt%2BWr%2BQkgybZKK3sY9kxmTtaMNOKs78GOqUBDuSAzXAufEOp7SXPjdL7knw%2BlyKDZgf3ndO8bcPGHYLeW62I0VfgblJV7RSyJFB3i8V8USr7ndcX%2Fj5E98gQ1EepY0H9lLfrvBylyn3yz3jlhN2D2haQ3eD4Iwz0ZqAg%2FYUAkZnzWu7S54mvIDiod3TXvzux3Ce7KSLtANtP%2BbH6m9wIo3JMeg7LIXhaYdVp0z%2F%2BX2QMnhaD3iBbOeSITikGWbC9&X-Amz-Signature=a1be62264b67daeddb62f1cc38447413e4faec934bf7e1d77c6dc740df200e37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5WUIL7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF97VDPDxpK38KuUblkNrAM3QjK2NF%2FgKZwn%2F3RvROZDAiEA1Xthk2I9ItLcmUmKO5xWWZnuD6rVcbdqUcFp2Vbrtx8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPMD3JWkiOd6Gt5KyrcAx0S0xp1kUCGKPxKPTOQtB2OvD4AZoVQUPv2aiW%2FzGFxPfFYrhCIDnh%2B%2BurVR6sikUH5o0XQFGVDO6M3EcL32CNG0sZ%2BlR6m%2BDAzPAoYPFitF0VyAPTvp2FSYyEPuoTWVR1UeEN%2FbXtjQKoJZQOdVjvfC6pujr2GeH%2FkFOSV4wQmaAC0J%2BaF7btBAtftL8eLVLcvGMyCJzYVNVCcyTtbhx5MlXevioikqCEjjEKf4MRWLad0RYE8kK9HcaF9EirFu5A4LCQD2SOl855DqRqOnQkr5f%2BD4OH81OTq4lC8ifxcB7d3BiRa%2BKrhnTZwlzgt124AFZ4rWmeWbfYg%2FGLbBcxT7us70SuNUMLdDFIOXglYU7unB9jAbvBip%2F1RNYbpvvS42Ki2oCRjoEiohtwcINlL0NZv%2BMxNos6Qizrkd2WlmT%2F4yvfjLyMmfCtettKxki5pwkbNzFln750s1dOkw5glBIq6nfyUFwyiQjtG1D%2BwJEoGhTronZuWZQqm2TcR3kK0kCfrTrKSKvXw9MIQKt%2F9G6%2BOg15rE2j0AKO3vn5GtPX%2BJo0jTgH7uC09SLuHOFPTXR6xAEOKk8udrymYkKP5Dq5yhRkpgBXllt%2BWr%2BQkgybZKK3sY9kxmTtaMNOKs78GOqUBDuSAzXAufEOp7SXPjdL7knw%2BlyKDZgf3ndO8bcPGHYLeW62I0VfgblJV7RSyJFB3i8V8USr7ndcX%2Fj5E98gQ1EepY0H9lLfrvBylyn3yz3jlhN2D2haQ3eD4Iwz0ZqAg%2FYUAkZnzWu7S54mvIDiod3TXvzux3Ce7KSLtANtP%2BbH6m9wIo3JMeg7LIXhaYdVp0z%2F%2BX2QMnhaD3iBbOeSITikGWbC9&X-Amz-Signature=dd56262b846afb6f9b1f29e853c85ef19faa4d2eec1cc02bd3f5e82ea7c3ff2b&X-Amz-SignedHeaders=host&x-id=GetObject)
