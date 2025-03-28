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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6XRS3MN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAThnlDma75HDownRJyh6s%2FbSHjsp7hrw35J%2B70ykuxwIgYwRuJ%2F82QOIRlO9aEOtcbEvPIAnkLv0tfXa%2FV2tDjEgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCTKKteojkuuyju2eircA1vLCCBlP9vuiOZZJlEB0FFxeQW3nKul5qgR13x0HdHJrxaoXtFJ2ih3J%2B9gWMCChedIrHRuUHHRkoADQf9wWnOc4KuvWmH8N%2BjMcFdnetf0SHQlvvq%2FzaYMuVdS25UicbF5%2BmX7zRKBiUfU%2BPz2VYQztzK%2BMW4%2B5YMwWrNOk%2BKK5oWLZlWAJ%2BWoSdQOBUAGadDx6yXFqpu%2FuJPCXfXE%2BzOrgPijzMdIWX%2BRpqPYIgsVR75EzowIL5wfI8IdRIT6aBmd9qB9J%2FWEY%2FvOAVOJj2GShVLkoA9xtVwoswce8OINoLSRtartEa5N%2F3dtDHWXte%2B3hp86rnKVVRIwsP48d%2BIwqhlQwDJTVx0WbzKVvLyDfF5YjlG3ttHUCmMzG%2F3KHovIUt35EBd2PCwg5RwyKFEA%2BNM%2FPFR4fdi2v4BXagEDL7SY0uq7f8TmipFKLlWLuifHMzaXjMixQdln6af%2BQSh6mF%2BIJXYXFckyy8QqyfydTSjqLdRaSr%2F1cX0Ty847hdtiH9%2Fw6fzaTIfs3GbEkxILlKjX1DydWd7NvCXnSi%2Bs8ABE8zU%2BEAusL83WMckQxC4JS1L1v%2BohwUqmkcxQI9ym%2BcFTnatwB5CT5DJO0Dx%2BNTafa1YczVHd7hK9MOXQmr8GOqUB40c%2FWIO%2BXrvGKeum366Nb4lzyK5PIH1g1QihJKBVGH71yQmb%2F%2FXw1EnspWYig4PCAX5ZKMSf1U41f%2Bgcqk0r0wAAJqY5rdDWAZuNadUTx1iujwGJt3wt2eNCW7UVuKwA3e9S6G943ELgFYZle7FdIKQWZSizWSUw6vGj9%2FOuOoMwWC8nTE6LrLbWJd7tnSieL4C4qUGKg0vHVeniq1lswrHKUNbv&X-Amz-Signature=91b268c4c3ab325c52fb530f9345517c07e2175b5aa94ae6e1cac79ac0a27efb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6XRS3MN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAThnlDma75HDownRJyh6s%2FbSHjsp7hrw35J%2B70ykuxwIgYwRuJ%2F82QOIRlO9aEOtcbEvPIAnkLv0tfXa%2FV2tDjEgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCTKKteojkuuyju2eircA1vLCCBlP9vuiOZZJlEB0FFxeQW3nKul5qgR13x0HdHJrxaoXtFJ2ih3J%2B9gWMCChedIrHRuUHHRkoADQf9wWnOc4KuvWmH8N%2BjMcFdnetf0SHQlvvq%2FzaYMuVdS25UicbF5%2BmX7zRKBiUfU%2BPz2VYQztzK%2BMW4%2B5YMwWrNOk%2BKK5oWLZlWAJ%2BWoSdQOBUAGadDx6yXFqpu%2FuJPCXfXE%2BzOrgPijzMdIWX%2BRpqPYIgsVR75EzowIL5wfI8IdRIT6aBmd9qB9J%2FWEY%2FvOAVOJj2GShVLkoA9xtVwoswce8OINoLSRtartEa5N%2F3dtDHWXte%2B3hp86rnKVVRIwsP48d%2BIwqhlQwDJTVx0WbzKVvLyDfF5YjlG3ttHUCmMzG%2F3KHovIUt35EBd2PCwg5RwyKFEA%2BNM%2FPFR4fdi2v4BXagEDL7SY0uq7f8TmipFKLlWLuifHMzaXjMixQdln6af%2BQSh6mF%2BIJXYXFckyy8QqyfydTSjqLdRaSr%2F1cX0Ty847hdtiH9%2Fw6fzaTIfs3GbEkxILlKjX1DydWd7NvCXnSi%2Bs8ABE8zU%2BEAusL83WMckQxC4JS1L1v%2BohwUqmkcxQI9ym%2BcFTnatwB5CT5DJO0Dx%2BNTafa1YczVHd7hK9MOXQmr8GOqUB40c%2FWIO%2BXrvGKeum366Nb4lzyK5PIH1g1QihJKBVGH71yQmb%2F%2FXw1EnspWYig4PCAX5ZKMSf1U41f%2Bgcqk0r0wAAJqY5rdDWAZuNadUTx1iujwGJt3wt2eNCW7UVuKwA3e9S6G943ELgFYZle7FdIKQWZSizWSUw6vGj9%2FOuOoMwWC8nTE6LrLbWJd7tnSieL4C4qUGKg0vHVeniq1lswrHKUNbv&X-Amz-Signature=630f067430e5fac1b1a850e9e80f43bec3de17768ddf38bf5e0f952fea1a86b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6XRS3MN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAThnlDma75HDownRJyh6s%2FbSHjsp7hrw35J%2B70ykuxwIgYwRuJ%2F82QOIRlO9aEOtcbEvPIAnkLv0tfXa%2FV2tDjEgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCTKKteojkuuyju2eircA1vLCCBlP9vuiOZZJlEB0FFxeQW3nKul5qgR13x0HdHJrxaoXtFJ2ih3J%2B9gWMCChedIrHRuUHHRkoADQf9wWnOc4KuvWmH8N%2BjMcFdnetf0SHQlvvq%2FzaYMuVdS25UicbF5%2BmX7zRKBiUfU%2BPz2VYQztzK%2BMW4%2B5YMwWrNOk%2BKK5oWLZlWAJ%2BWoSdQOBUAGadDx6yXFqpu%2FuJPCXfXE%2BzOrgPijzMdIWX%2BRpqPYIgsVR75EzowIL5wfI8IdRIT6aBmd9qB9J%2FWEY%2FvOAVOJj2GShVLkoA9xtVwoswce8OINoLSRtartEa5N%2F3dtDHWXte%2B3hp86rnKVVRIwsP48d%2BIwqhlQwDJTVx0WbzKVvLyDfF5YjlG3ttHUCmMzG%2F3KHovIUt35EBd2PCwg5RwyKFEA%2BNM%2FPFR4fdi2v4BXagEDL7SY0uq7f8TmipFKLlWLuifHMzaXjMixQdln6af%2BQSh6mF%2BIJXYXFckyy8QqyfydTSjqLdRaSr%2F1cX0Ty847hdtiH9%2Fw6fzaTIfs3GbEkxILlKjX1DydWd7NvCXnSi%2Bs8ABE8zU%2BEAusL83WMckQxC4JS1L1v%2BohwUqmkcxQI9ym%2BcFTnatwB5CT5DJO0Dx%2BNTafa1YczVHd7hK9MOXQmr8GOqUB40c%2FWIO%2BXrvGKeum366Nb4lzyK5PIH1g1QihJKBVGH71yQmb%2F%2FXw1EnspWYig4PCAX5ZKMSf1U41f%2Bgcqk0r0wAAJqY5rdDWAZuNadUTx1iujwGJt3wt2eNCW7UVuKwA3e9S6G943ELgFYZle7FdIKQWZSizWSUw6vGj9%2FOuOoMwWC8nTE6LrLbWJd7tnSieL4C4qUGKg0vHVeniq1lswrHKUNbv&X-Amz-Signature=6055e83883d5da971f63cbd10afa1b5235b23133ec68ddd8eb05afcca3a80fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6XRS3MN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAThnlDma75HDownRJyh6s%2FbSHjsp7hrw35J%2B70ykuxwIgYwRuJ%2F82QOIRlO9aEOtcbEvPIAnkLv0tfXa%2FV2tDjEgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCTKKteojkuuyju2eircA1vLCCBlP9vuiOZZJlEB0FFxeQW3nKul5qgR13x0HdHJrxaoXtFJ2ih3J%2B9gWMCChedIrHRuUHHRkoADQf9wWnOc4KuvWmH8N%2BjMcFdnetf0SHQlvvq%2FzaYMuVdS25UicbF5%2BmX7zRKBiUfU%2BPz2VYQztzK%2BMW4%2B5YMwWrNOk%2BKK5oWLZlWAJ%2BWoSdQOBUAGadDx6yXFqpu%2FuJPCXfXE%2BzOrgPijzMdIWX%2BRpqPYIgsVR75EzowIL5wfI8IdRIT6aBmd9qB9J%2FWEY%2FvOAVOJj2GShVLkoA9xtVwoswce8OINoLSRtartEa5N%2F3dtDHWXte%2B3hp86rnKVVRIwsP48d%2BIwqhlQwDJTVx0WbzKVvLyDfF5YjlG3ttHUCmMzG%2F3KHovIUt35EBd2PCwg5RwyKFEA%2BNM%2FPFR4fdi2v4BXagEDL7SY0uq7f8TmipFKLlWLuifHMzaXjMixQdln6af%2BQSh6mF%2BIJXYXFckyy8QqyfydTSjqLdRaSr%2F1cX0Ty847hdtiH9%2Fw6fzaTIfs3GbEkxILlKjX1DydWd7NvCXnSi%2Bs8ABE8zU%2BEAusL83WMckQxC4JS1L1v%2BohwUqmkcxQI9ym%2BcFTnatwB5CT5DJO0Dx%2BNTafa1YczVHd7hK9MOXQmr8GOqUB40c%2FWIO%2BXrvGKeum366Nb4lzyK5PIH1g1QihJKBVGH71yQmb%2F%2FXw1EnspWYig4PCAX5ZKMSf1U41f%2Bgcqk0r0wAAJqY5rdDWAZuNadUTx1iujwGJt3wt2eNCW7UVuKwA3e9S6G943ELgFYZle7FdIKQWZSizWSUw6vGj9%2FOuOoMwWC8nTE6LrLbWJd7tnSieL4C4qUGKg0vHVeniq1lswrHKUNbv&X-Amz-Signature=b0f2c0d08a63c0e3f96ef022588bc4959b3327f371ae400e78a61535855e5aae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6XRS3MN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAThnlDma75HDownRJyh6s%2FbSHjsp7hrw35J%2B70ykuxwIgYwRuJ%2F82QOIRlO9aEOtcbEvPIAnkLv0tfXa%2FV2tDjEgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCTKKteojkuuyju2eircA1vLCCBlP9vuiOZZJlEB0FFxeQW3nKul5qgR13x0HdHJrxaoXtFJ2ih3J%2B9gWMCChedIrHRuUHHRkoADQf9wWnOc4KuvWmH8N%2BjMcFdnetf0SHQlvvq%2FzaYMuVdS25UicbF5%2BmX7zRKBiUfU%2BPz2VYQztzK%2BMW4%2B5YMwWrNOk%2BKK5oWLZlWAJ%2BWoSdQOBUAGadDx6yXFqpu%2FuJPCXfXE%2BzOrgPijzMdIWX%2BRpqPYIgsVR75EzowIL5wfI8IdRIT6aBmd9qB9J%2FWEY%2FvOAVOJj2GShVLkoA9xtVwoswce8OINoLSRtartEa5N%2F3dtDHWXte%2B3hp86rnKVVRIwsP48d%2BIwqhlQwDJTVx0WbzKVvLyDfF5YjlG3ttHUCmMzG%2F3KHovIUt35EBd2PCwg5RwyKFEA%2BNM%2FPFR4fdi2v4BXagEDL7SY0uq7f8TmipFKLlWLuifHMzaXjMixQdln6af%2BQSh6mF%2BIJXYXFckyy8QqyfydTSjqLdRaSr%2F1cX0Ty847hdtiH9%2Fw6fzaTIfs3GbEkxILlKjX1DydWd7NvCXnSi%2Bs8ABE8zU%2BEAusL83WMckQxC4JS1L1v%2BohwUqmkcxQI9ym%2BcFTnatwB5CT5DJO0Dx%2BNTafa1YczVHd7hK9MOXQmr8GOqUB40c%2FWIO%2BXrvGKeum366Nb4lzyK5PIH1g1QihJKBVGH71yQmb%2F%2FXw1EnspWYig4PCAX5ZKMSf1U41f%2Bgcqk0r0wAAJqY5rdDWAZuNadUTx1iujwGJt3wt2eNCW7UVuKwA3e9S6G943ELgFYZle7FdIKQWZSizWSUw6vGj9%2FOuOoMwWC8nTE6LrLbWJd7tnSieL4C4qUGKg0vHVeniq1lswrHKUNbv&X-Amz-Signature=3ef69d2185994abc32ce582c73319c540f2325569594571a39ade3306f99aab1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6XRS3MN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAThnlDma75HDownRJyh6s%2FbSHjsp7hrw35J%2B70ykuxwIgYwRuJ%2F82QOIRlO9aEOtcbEvPIAnkLv0tfXa%2FV2tDjEgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCTKKteojkuuyju2eircA1vLCCBlP9vuiOZZJlEB0FFxeQW3nKul5qgR13x0HdHJrxaoXtFJ2ih3J%2B9gWMCChedIrHRuUHHRkoADQf9wWnOc4KuvWmH8N%2BjMcFdnetf0SHQlvvq%2FzaYMuVdS25UicbF5%2BmX7zRKBiUfU%2BPz2VYQztzK%2BMW4%2B5YMwWrNOk%2BKK5oWLZlWAJ%2BWoSdQOBUAGadDx6yXFqpu%2FuJPCXfXE%2BzOrgPijzMdIWX%2BRpqPYIgsVR75EzowIL5wfI8IdRIT6aBmd9qB9J%2FWEY%2FvOAVOJj2GShVLkoA9xtVwoswce8OINoLSRtartEa5N%2F3dtDHWXte%2B3hp86rnKVVRIwsP48d%2BIwqhlQwDJTVx0WbzKVvLyDfF5YjlG3ttHUCmMzG%2F3KHovIUt35EBd2PCwg5RwyKFEA%2BNM%2FPFR4fdi2v4BXagEDL7SY0uq7f8TmipFKLlWLuifHMzaXjMixQdln6af%2BQSh6mF%2BIJXYXFckyy8QqyfydTSjqLdRaSr%2F1cX0Ty847hdtiH9%2Fw6fzaTIfs3GbEkxILlKjX1DydWd7NvCXnSi%2Bs8ABE8zU%2BEAusL83WMckQxC4JS1L1v%2BohwUqmkcxQI9ym%2BcFTnatwB5CT5DJO0Dx%2BNTafa1YczVHd7hK9MOXQmr8GOqUB40c%2FWIO%2BXrvGKeum366Nb4lzyK5PIH1g1QihJKBVGH71yQmb%2F%2FXw1EnspWYig4PCAX5ZKMSf1U41f%2Bgcqk0r0wAAJqY5rdDWAZuNadUTx1iujwGJt3wt2eNCW7UVuKwA3e9S6G943ELgFYZle7FdIKQWZSizWSUw6vGj9%2FOuOoMwWC8nTE6LrLbWJd7tnSieL4C4qUGKg0vHVeniq1lswrHKUNbv&X-Amz-Signature=701ce16be3e1dd1a23d42d6dd17c8e9c9c01667d6371293a1cf380dd13a37f81&X-Amz-SignedHeaders=host&x-id=GetObject)
