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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHAANXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWcjiQJwI%2BQh%2F6w2usBONIll5XQbdZjYZen0Mg6HemCAiEA1EOcgmbLQqiNU2vfDf3dwb4hXbdfnH9KYPbHRhXpMa4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA032kDFOXaR1w3W6SrcAxYzeSY5cgh30bQB6fGEXLd%2FRCjMbiXsr%2F56SOrntNYcL%2FDo8PqvUY8%2BYBbhjYQXNmcECGMaNhQ%2BY7uTrjFN1Qk49qF80bK1%2FCJaTvN7XuhRZYcZdnclRZVpcMeqBNM4FcztObFa%2F152%2FSq3G46II9umIX4%2B9ajLTiFKk5e2TYQGfmDb%2FNhiJ0zksYv845W1XFCAeT0uE%2Bsmk7bNsTJ1E3hqkOyaD1JUBCg%2FHaopP%2BsI50AJK8peVgoRZbRS8RNcEKPyJ6GKEEAHTqOTjo1AbxMXPpOInDlE3ow0L6oeI7ECw%2FtmK6VThO8xcFRelXYvtAoeQPPxZEnJROXzr9EagXG%2Bndxfxj2alhxz1URnK1EJVGBdPJH0x%2BCVOTyr2j1WiQnWSWmWd6gxPqVVCB6iVSLSg8DTJx72IgZ0R7vSNUJqUH40pBGky%2FhefKLYCadE6SJ5VE3J8PDkvJVh8ucGWowYGT5IR%2FLDH3Mqitj84l0XD8zJa4hk8uPLOChXZrRqfYzOvEEm4Rj4EpIiwnmN4UDgh%2BoZAidL4lzfZYi3iuDlHvP9kF5mHBzTpKpMw%2FFfqPBS9q%2B774VkP%2FZTFmNsORfyMBEgm9Rn4pv3vxBeuiBliWe48Rk2XPKXsfGlMIvhgcAGOqUBGoRLYIh7ILZ5KupkMkveP3SyD9z5BW61pW3YE78tPoNS9q%2FejXkplszYOeX8QIY3uzCSHU1X7FMS2FEmKHCuaUQFYuPuSHgTBkEnF1mcLfAszNgq1mzBy5taz8ag2sRy8x6HtqnpBf2ZG%2B0rwD%2FWsZ0Llos5RNqOA8G%2FBZIvm%2FWb9qyO3ocYrBBXor%2BijCRjDiXiDH8UQhSRZ5mChW3wPEm%2Fi1Wk&X-Amz-Signature=b38b91e6567134ef2cbdc061a1bac972f3552b8f66dbd39a6f4ea5bc5b8ca7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHAANXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWcjiQJwI%2BQh%2F6w2usBONIll5XQbdZjYZen0Mg6HemCAiEA1EOcgmbLQqiNU2vfDf3dwb4hXbdfnH9KYPbHRhXpMa4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA032kDFOXaR1w3W6SrcAxYzeSY5cgh30bQB6fGEXLd%2FRCjMbiXsr%2F56SOrntNYcL%2FDo8PqvUY8%2BYBbhjYQXNmcECGMaNhQ%2BY7uTrjFN1Qk49qF80bK1%2FCJaTvN7XuhRZYcZdnclRZVpcMeqBNM4FcztObFa%2F152%2FSq3G46II9umIX4%2B9ajLTiFKk5e2TYQGfmDb%2FNhiJ0zksYv845W1XFCAeT0uE%2Bsmk7bNsTJ1E3hqkOyaD1JUBCg%2FHaopP%2BsI50AJK8peVgoRZbRS8RNcEKPyJ6GKEEAHTqOTjo1AbxMXPpOInDlE3ow0L6oeI7ECw%2FtmK6VThO8xcFRelXYvtAoeQPPxZEnJROXzr9EagXG%2Bndxfxj2alhxz1URnK1EJVGBdPJH0x%2BCVOTyr2j1WiQnWSWmWd6gxPqVVCB6iVSLSg8DTJx72IgZ0R7vSNUJqUH40pBGky%2FhefKLYCadE6SJ5VE3J8PDkvJVh8ucGWowYGT5IR%2FLDH3Mqitj84l0XD8zJa4hk8uPLOChXZrRqfYzOvEEm4Rj4EpIiwnmN4UDgh%2BoZAidL4lzfZYi3iuDlHvP9kF5mHBzTpKpMw%2FFfqPBS9q%2B774VkP%2FZTFmNsORfyMBEgm9Rn4pv3vxBeuiBliWe48Rk2XPKXsfGlMIvhgcAGOqUBGoRLYIh7ILZ5KupkMkveP3SyD9z5BW61pW3YE78tPoNS9q%2FejXkplszYOeX8QIY3uzCSHU1X7FMS2FEmKHCuaUQFYuPuSHgTBkEnF1mcLfAszNgq1mzBy5taz8ag2sRy8x6HtqnpBf2ZG%2B0rwD%2FWsZ0Llos5RNqOA8G%2FBZIvm%2FWb9qyO3ocYrBBXor%2BijCRjDiXiDH8UQhSRZ5mChW3wPEm%2Fi1Wk&X-Amz-Signature=b9d307cb0fe1a4ed9880d8c073fd116c6af89d22288b7a198cc8f64502dd759c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHAANXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWcjiQJwI%2BQh%2F6w2usBONIll5XQbdZjYZen0Mg6HemCAiEA1EOcgmbLQqiNU2vfDf3dwb4hXbdfnH9KYPbHRhXpMa4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA032kDFOXaR1w3W6SrcAxYzeSY5cgh30bQB6fGEXLd%2FRCjMbiXsr%2F56SOrntNYcL%2FDo8PqvUY8%2BYBbhjYQXNmcECGMaNhQ%2BY7uTrjFN1Qk49qF80bK1%2FCJaTvN7XuhRZYcZdnclRZVpcMeqBNM4FcztObFa%2F152%2FSq3G46II9umIX4%2B9ajLTiFKk5e2TYQGfmDb%2FNhiJ0zksYv845W1XFCAeT0uE%2Bsmk7bNsTJ1E3hqkOyaD1JUBCg%2FHaopP%2BsI50AJK8peVgoRZbRS8RNcEKPyJ6GKEEAHTqOTjo1AbxMXPpOInDlE3ow0L6oeI7ECw%2FtmK6VThO8xcFRelXYvtAoeQPPxZEnJROXzr9EagXG%2Bndxfxj2alhxz1URnK1EJVGBdPJH0x%2BCVOTyr2j1WiQnWSWmWd6gxPqVVCB6iVSLSg8DTJx72IgZ0R7vSNUJqUH40pBGky%2FhefKLYCadE6SJ5VE3J8PDkvJVh8ucGWowYGT5IR%2FLDH3Mqitj84l0XD8zJa4hk8uPLOChXZrRqfYzOvEEm4Rj4EpIiwnmN4UDgh%2BoZAidL4lzfZYi3iuDlHvP9kF5mHBzTpKpMw%2FFfqPBS9q%2B774VkP%2FZTFmNsORfyMBEgm9Rn4pv3vxBeuiBliWe48Rk2XPKXsfGlMIvhgcAGOqUBGoRLYIh7ILZ5KupkMkveP3SyD9z5BW61pW3YE78tPoNS9q%2FejXkplszYOeX8QIY3uzCSHU1X7FMS2FEmKHCuaUQFYuPuSHgTBkEnF1mcLfAszNgq1mzBy5taz8ag2sRy8x6HtqnpBf2ZG%2B0rwD%2FWsZ0Llos5RNqOA8G%2FBZIvm%2FWb9qyO3ocYrBBXor%2BijCRjDiXiDH8UQhSRZ5mChW3wPEm%2Fi1Wk&X-Amz-Signature=a33017e3910b92ad057a5b2d4a26b41bc3965c52f09faf9df84707896d5e5de6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHAANXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWcjiQJwI%2BQh%2F6w2usBONIll5XQbdZjYZen0Mg6HemCAiEA1EOcgmbLQqiNU2vfDf3dwb4hXbdfnH9KYPbHRhXpMa4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA032kDFOXaR1w3W6SrcAxYzeSY5cgh30bQB6fGEXLd%2FRCjMbiXsr%2F56SOrntNYcL%2FDo8PqvUY8%2BYBbhjYQXNmcECGMaNhQ%2BY7uTrjFN1Qk49qF80bK1%2FCJaTvN7XuhRZYcZdnclRZVpcMeqBNM4FcztObFa%2F152%2FSq3G46II9umIX4%2B9ajLTiFKk5e2TYQGfmDb%2FNhiJ0zksYv845W1XFCAeT0uE%2Bsmk7bNsTJ1E3hqkOyaD1JUBCg%2FHaopP%2BsI50AJK8peVgoRZbRS8RNcEKPyJ6GKEEAHTqOTjo1AbxMXPpOInDlE3ow0L6oeI7ECw%2FtmK6VThO8xcFRelXYvtAoeQPPxZEnJROXzr9EagXG%2Bndxfxj2alhxz1URnK1EJVGBdPJH0x%2BCVOTyr2j1WiQnWSWmWd6gxPqVVCB6iVSLSg8DTJx72IgZ0R7vSNUJqUH40pBGky%2FhefKLYCadE6SJ5VE3J8PDkvJVh8ucGWowYGT5IR%2FLDH3Mqitj84l0XD8zJa4hk8uPLOChXZrRqfYzOvEEm4Rj4EpIiwnmN4UDgh%2BoZAidL4lzfZYi3iuDlHvP9kF5mHBzTpKpMw%2FFfqPBS9q%2B774VkP%2FZTFmNsORfyMBEgm9Rn4pv3vxBeuiBliWe48Rk2XPKXsfGlMIvhgcAGOqUBGoRLYIh7ILZ5KupkMkveP3SyD9z5BW61pW3YE78tPoNS9q%2FejXkplszYOeX8QIY3uzCSHU1X7FMS2FEmKHCuaUQFYuPuSHgTBkEnF1mcLfAszNgq1mzBy5taz8ag2sRy8x6HtqnpBf2ZG%2B0rwD%2FWsZ0Llos5RNqOA8G%2FBZIvm%2FWb9qyO3ocYrBBXor%2BijCRjDiXiDH8UQhSRZ5mChW3wPEm%2Fi1Wk&X-Amz-Signature=2676236a4fb66765470251ef7e7d78bb1365b2322a64eef3a2e53b939d426a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHAANXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWcjiQJwI%2BQh%2F6w2usBONIll5XQbdZjYZen0Mg6HemCAiEA1EOcgmbLQqiNU2vfDf3dwb4hXbdfnH9KYPbHRhXpMa4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA032kDFOXaR1w3W6SrcAxYzeSY5cgh30bQB6fGEXLd%2FRCjMbiXsr%2F56SOrntNYcL%2FDo8PqvUY8%2BYBbhjYQXNmcECGMaNhQ%2BY7uTrjFN1Qk49qF80bK1%2FCJaTvN7XuhRZYcZdnclRZVpcMeqBNM4FcztObFa%2F152%2FSq3G46II9umIX4%2B9ajLTiFKk5e2TYQGfmDb%2FNhiJ0zksYv845W1XFCAeT0uE%2Bsmk7bNsTJ1E3hqkOyaD1JUBCg%2FHaopP%2BsI50AJK8peVgoRZbRS8RNcEKPyJ6GKEEAHTqOTjo1AbxMXPpOInDlE3ow0L6oeI7ECw%2FtmK6VThO8xcFRelXYvtAoeQPPxZEnJROXzr9EagXG%2Bndxfxj2alhxz1URnK1EJVGBdPJH0x%2BCVOTyr2j1WiQnWSWmWd6gxPqVVCB6iVSLSg8DTJx72IgZ0R7vSNUJqUH40pBGky%2FhefKLYCadE6SJ5VE3J8PDkvJVh8ucGWowYGT5IR%2FLDH3Mqitj84l0XD8zJa4hk8uPLOChXZrRqfYzOvEEm4Rj4EpIiwnmN4UDgh%2BoZAidL4lzfZYi3iuDlHvP9kF5mHBzTpKpMw%2FFfqPBS9q%2B774VkP%2FZTFmNsORfyMBEgm9Rn4pv3vxBeuiBliWe48Rk2XPKXsfGlMIvhgcAGOqUBGoRLYIh7ILZ5KupkMkveP3SyD9z5BW61pW3YE78tPoNS9q%2FejXkplszYOeX8QIY3uzCSHU1X7FMS2FEmKHCuaUQFYuPuSHgTBkEnF1mcLfAszNgq1mzBy5taz8ag2sRy8x6HtqnpBf2ZG%2B0rwD%2FWsZ0Llos5RNqOA8G%2FBZIvm%2FWb9qyO3ocYrBBXor%2BijCRjDiXiDH8UQhSRZ5mChW3wPEm%2Fi1Wk&X-Amz-Signature=f5e0769a4c60d4e67f0ab1a9a79eb5471be1506853dc12576305b9b8e804cacd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHAANXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWcjiQJwI%2BQh%2F6w2usBONIll5XQbdZjYZen0Mg6HemCAiEA1EOcgmbLQqiNU2vfDf3dwb4hXbdfnH9KYPbHRhXpMa4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA032kDFOXaR1w3W6SrcAxYzeSY5cgh30bQB6fGEXLd%2FRCjMbiXsr%2F56SOrntNYcL%2FDo8PqvUY8%2BYBbhjYQXNmcECGMaNhQ%2BY7uTrjFN1Qk49qF80bK1%2FCJaTvN7XuhRZYcZdnclRZVpcMeqBNM4FcztObFa%2F152%2FSq3G46II9umIX4%2B9ajLTiFKk5e2TYQGfmDb%2FNhiJ0zksYv845W1XFCAeT0uE%2Bsmk7bNsTJ1E3hqkOyaD1JUBCg%2FHaopP%2BsI50AJK8peVgoRZbRS8RNcEKPyJ6GKEEAHTqOTjo1AbxMXPpOInDlE3ow0L6oeI7ECw%2FtmK6VThO8xcFRelXYvtAoeQPPxZEnJROXzr9EagXG%2Bndxfxj2alhxz1URnK1EJVGBdPJH0x%2BCVOTyr2j1WiQnWSWmWd6gxPqVVCB6iVSLSg8DTJx72IgZ0R7vSNUJqUH40pBGky%2FhefKLYCadE6SJ5VE3J8PDkvJVh8ucGWowYGT5IR%2FLDH3Mqitj84l0XD8zJa4hk8uPLOChXZrRqfYzOvEEm4Rj4EpIiwnmN4UDgh%2BoZAidL4lzfZYi3iuDlHvP9kF5mHBzTpKpMw%2FFfqPBS9q%2B774VkP%2FZTFmNsORfyMBEgm9Rn4pv3vxBeuiBliWe48Rk2XPKXsfGlMIvhgcAGOqUBGoRLYIh7ILZ5KupkMkveP3SyD9z5BW61pW3YE78tPoNS9q%2FejXkplszYOeX8QIY3uzCSHU1X7FMS2FEmKHCuaUQFYuPuSHgTBkEnF1mcLfAszNgq1mzBy5taz8ag2sRy8x6HtqnpBf2ZG%2B0rwD%2FWsZ0Llos5RNqOA8G%2FBZIvm%2FWb9qyO3ocYrBBXor%2BijCRjDiXiDH8UQhSRZ5mChW3wPEm%2Fi1Wk&X-Amz-Signature=3d4379b9747bec4fa5d2961580dcc435e0910df2f78084931743066a58844172&X-Amz-SignedHeaders=host&x-id=GetObject)
