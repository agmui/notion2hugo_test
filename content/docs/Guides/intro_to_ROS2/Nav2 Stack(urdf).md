---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUQPNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0rUTyeTxv8ZnL8gBpkU76ptj%2Bwh3UIx7Bu43GT8lNNAiEAquuMF3W9n2B%2FeoULh3mXi9Uzrab%2BPTlA9Af0ZRpiwnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoAlS%2BY1pLciUBSPircAxLAMdrX1MW2LFa%2BbbSmacrLoWmf5ubXCbhzrXFwXS8lf9CU6Lly8gDitC6xWghUReRuf8p48uC5eTggK9WZc7mwokLw2UQBeVlMzI8YaEXS0VM%2FhoOv959HxWDOdUss18bT0ePir7DpN3HNpBvJXlUHEuMdhhmEvXaDoZRnwhTFxrWfRlADcdtXBM%2BusG2SdHqfiFRZjhkzK1UWVEk5bGOYHawHARCMFs2y7OxyuRwyeuv7Nc122n0kuJiW0elbkA55YFnAA5qwHuqaRdpQHaDwF%2F%2FkBEvvfgxJykK69FK149%2ByoctHG234hb7lj%2F84UohQgL4AEmEV6mJjfYHMrRJSIgAuQsf2Cyx%2ByJ0Zl7sAlNudNb4veNUuuTXRmKj%2FDU2p0T7kJ37WsJPWlDesvrxnuh7pPemFGnqo7Qn26EmdRCin3egTZ6CUX9fbq2WeGnZ8l%2FBWCzvEHHGtBQX%2FVFHk87dCMXZ%2Ba6O2kTVObwIwNV5evt7VSZMlEK0U2EO0cWPLpnmrjGUjEMEagpT4mPFuss4h7JKoKxrFMFV2LOo%2F0hXm%2FYcI5BDwzh1c%2FdqSewrfNJyiZL6UICaSM%2Fe8bor3WK%2F1%2BiX70yjavt%2FgXkvaBL80US9dTylO%2FYRXMM248rwGOqUBnseG3xbFgD33Kj5g314U53Xq5RaLnP4kITgEgbRT4Rswn78q5QKcPbIlnRIFm7htUU4bAN2myBBu%2B1r40wRwdccrj98kJfD2dF9Z4p5cgWD2QYTyxNvn3B4d6rklKiGx61OgXwmmGT7Wa0%2BL%2BnboGy1q2tgzhtiyaXYe9F%2B5bvvMg9grjWVAQ%2FBAUOdpcDnq6DpjCY%2FQGOuV%2B6gXWtcn3DPTY5A%2B&X-Amz-Signature=545737e2523aa7f2eaa4b6a2882775aee48a258d0a826cbcf5540119aa5914e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUQPNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0rUTyeTxv8ZnL8gBpkU76ptj%2Bwh3UIx7Bu43GT8lNNAiEAquuMF3W9n2B%2FeoULh3mXi9Uzrab%2BPTlA9Af0ZRpiwnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoAlS%2BY1pLciUBSPircAxLAMdrX1MW2LFa%2BbbSmacrLoWmf5ubXCbhzrXFwXS8lf9CU6Lly8gDitC6xWghUReRuf8p48uC5eTggK9WZc7mwokLw2UQBeVlMzI8YaEXS0VM%2FhoOv959HxWDOdUss18bT0ePir7DpN3HNpBvJXlUHEuMdhhmEvXaDoZRnwhTFxrWfRlADcdtXBM%2BusG2SdHqfiFRZjhkzK1UWVEk5bGOYHawHARCMFs2y7OxyuRwyeuv7Nc122n0kuJiW0elbkA55YFnAA5qwHuqaRdpQHaDwF%2F%2FkBEvvfgxJykK69FK149%2ByoctHG234hb7lj%2F84UohQgL4AEmEV6mJjfYHMrRJSIgAuQsf2Cyx%2ByJ0Zl7sAlNudNb4veNUuuTXRmKj%2FDU2p0T7kJ37WsJPWlDesvrxnuh7pPemFGnqo7Qn26EmdRCin3egTZ6CUX9fbq2WeGnZ8l%2FBWCzvEHHGtBQX%2FVFHk87dCMXZ%2Ba6O2kTVObwIwNV5evt7VSZMlEK0U2EO0cWPLpnmrjGUjEMEagpT4mPFuss4h7JKoKxrFMFV2LOo%2F0hXm%2FYcI5BDwzh1c%2FdqSewrfNJyiZL6UICaSM%2Fe8bor3WK%2F1%2BiX70yjavt%2FgXkvaBL80US9dTylO%2FYRXMM248rwGOqUBnseG3xbFgD33Kj5g314U53Xq5RaLnP4kITgEgbRT4Rswn78q5QKcPbIlnRIFm7htUU4bAN2myBBu%2B1r40wRwdccrj98kJfD2dF9Z4p5cgWD2QYTyxNvn3B4d6rklKiGx61OgXwmmGT7Wa0%2BL%2BnboGy1q2tgzhtiyaXYe9F%2B5bvvMg9grjWVAQ%2FBAUOdpcDnq6DpjCY%2FQGOuV%2B6gXWtcn3DPTY5A%2B&X-Amz-Signature=58d142ca9719671f950676a37ef8e2de98de690976e4877dde3dbf452d3a39d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUQPNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0rUTyeTxv8ZnL8gBpkU76ptj%2Bwh3UIx7Bu43GT8lNNAiEAquuMF3W9n2B%2FeoULh3mXi9Uzrab%2BPTlA9Af0ZRpiwnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoAlS%2BY1pLciUBSPircAxLAMdrX1MW2LFa%2BbbSmacrLoWmf5ubXCbhzrXFwXS8lf9CU6Lly8gDitC6xWghUReRuf8p48uC5eTggK9WZc7mwokLw2UQBeVlMzI8YaEXS0VM%2FhoOv959HxWDOdUss18bT0ePir7DpN3HNpBvJXlUHEuMdhhmEvXaDoZRnwhTFxrWfRlADcdtXBM%2BusG2SdHqfiFRZjhkzK1UWVEk5bGOYHawHARCMFs2y7OxyuRwyeuv7Nc122n0kuJiW0elbkA55YFnAA5qwHuqaRdpQHaDwF%2F%2FkBEvvfgxJykK69FK149%2ByoctHG234hb7lj%2F84UohQgL4AEmEV6mJjfYHMrRJSIgAuQsf2Cyx%2ByJ0Zl7sAlNudNb4veNUuuTXRmKj%2FDU2p0T7kJ37WsJPWlDesvrxnuh7pPemFGnqo7Qn26EmdRCin3egTZ6CUX9fbq2WeGnZ8l%2FBWCzvEHHGtBQX%2FVFHk87dCMXZ%2Ba6O2kTVObwIwNV5evt7VSZMlEK0U2EO0cWPLpnmrjGUjEMEagpT4mPFuss4h7JKoKxrFMFV2LOo%2F0hXm%2FYcI5BDwzh1c%2FdqSewrfNJyiZL6UICaSM%2Fe8bor3WK%2F1%2BiX70yjavt%2FgXkvaBL80US9dTylO%2FYRXMM248rwGOqUBnseG3xbFgD33Kj5g314U53Xq5RaLnP4kITgEgbRT4Rswn78q5QKcPbIlnRIFm7htUU4bAN2myBBu%2B1r40wRwdccrj98kJfD2dF9Z4p5cgWD2QYTyxNvn3B4d6rklKiGx61OgXwmmGT7Wa0%2BL%2BnboGy1q2tgzhtiyaXYe9F%2B5bvvMg9grjWVAQ%2FBAUOdpcDnq6DpjCY%2FQGOuV%2B6gXWtcn3DPTY5A%2B&X-Amz-Signature=7facd72f4d2a8888b6c5e748ef78aea35cc552144fc5240f4a52e0d58ce3a3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUQPNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0rUTyeTxv8ZnL8gBpkU76ptj%2Bwh3UIx7Bu43GT8lNNAiEAquuMF3W9n2B%2FeoULh3mXi9Uzrab%2BPTlA9Af0ZRpiwnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoAlS%2BY1pLciUBSPircAxLAMdrX1MW2LFa%2BbbSmacrLoWmf5ubXCbhzrXFwXS8lf9CU6Lly8gDitC6xWghUReRuf8p48uC5eTggK9WZc7mwokLw2UQBeVlMzI8YaEXS0VM%2FhoOv959HxWDOdUss18bT0ePir7DpN3HNpBvJXlUHEuMdhhmEvXaDoZRnwhTFxrWfRlADcdtXBM%2BusG2SdHqfiFRZjhkzK1UWVEk5bGOYHawHARCMFs2y7OxyuRwyeuv7Nc122n0kuJiW0elbkA55YFnAA5qwHuqaRdpQHaDwF%2F%2FkBEvvfgxJykK69FK149%2ByoctHG234hb7lj%2F84UohQgL4AEmEV6mJjfYHMrRJSIgAuQsf2Cyx%2ByJ0Zl7sAlNudNb4veNUuuTXRmKj%2FDU2p0T7kJ37WsJPWlDesvrxnuh7pPemFGnqo7Qn26EmdRCin3egTZ6CUX9fbq2WeGnZ8l%2FBWCzvEHHGtBQX%2FVFHk87dCMXZ%2Ba6O2kTVObwIwNV5evt7VSZMlEK0U2EO0cWPLpnmrjGUjEMEagpT4mPFuss4h7JKoKxrFMFV2LOo%2F0hXm%2FYcI5BDwzh1c%2FdqSewrfNJyiZL6UICaSM%2Fe8bor3WK%2F1%2BiX70yjavt%2FgXkvaBL80US9dTylO%2FYRXMM248rwGOqUBnseG3xbFgD33Kj5g314U53Xq5RaLnP4kITgEgbRT4Rswn78q5QKcPbIlnRIFm7htUU4bAN2myBBu%2B1r40wRwdccrj98kJfD2dF9Z4p5cgWD2QYTyxNvn3B4d6rklKiGx61OgXwmmGT7Wa0%2BL%2BnboGy1q2tgzhtiyaXYe9F%2B5bvvMg9grjWVAQ%2FBAUOdpcDnq6DpjCY%2FQGOuV%2B6gXWtcn3DPTY5A%2B&X-Amz-Signature=89da7ffccc69dc25ec6476ad9a0567249236ab2a49c079550e6de70e43bfe552&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUQPNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0rUTyeTxv8ZnL8gBpkU76ptj%2Bwh3UIx7Bu43GT8lNNAiEAquuMF3W9n2B%2FeoULh3mXi9Uzrab%2BPTlA9Af0ZRpiwnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoAlS%2BY1pLciUBSPircAxLAMdrX1MW2LFa%2BbbSmacrLoWmf5ubXCbhzrXFwXS8lf9CU6Lly8gDitC6xWghUReRuf8p48uC5eTggK9WZc7mwokLw2UQBeVlMzI8YaEXS0VM%2FhoOv959HxWDOdUss18bT0ePir7DpN3HNpBvJXlUHEuMdhhmEvXaDoZRnwhTFxrWfRlADcdtXBM%2BusG2SdHqfiFRZjhkzK1UWVEk5bGOYHawHARCMFs2y7OxyuRwyeuv7Nc122n0kuJiW0elbkA55YFnAA5qwHuqaRdpQHaDwF%2F%2FkBEvvfgxJykK69FK149%2ByoctHG234hb7lj%2F84UohQgL4AEmEV6mJjfYHMrRJSIgAuQsf2Cyx%2ByJ0Zl7sAlNudNb4veNUuuTXRmKj%2FDU2p0T7kJ37WsJPWlDesvrxnuh7pPemFGnqo7Qn26EmdRCin3egTZ6CUX9fbq2WeGnZ8l%2FBWCzvEHHGtBQX%2FVFHk87dCMXZ%2Ba6O2kTVObwIwNV5evt7VSZMlEK0U2EO0cWPLpnmrjGUjEMEagpT4mPFuss4h7JKoKxrFMFV2LOo%2F0hXm%2FYcI5BDwzh1c%2FdqSewrfNJyiZL6UICaSM%2Fe8bor3WK%2F1%2BiX70yjavt%2FgXkvaBL80US9dTylO%2FYRXMM248rwGOqUBnseG3xbFgD33Kj5g314U53Xq5RaLnP4kITgEgbRT4Rswn78q5QKcPbIlnRIFm7htUU4bAN2myBBu%2B1r40wRwdccrj98kJfD2dF9Z4p5cgWD2QYTyxNvn3B4d6rklKiGx61OgXwmmGT7Wa0%2BL%2BnboGy1q2tgzhtiyaXYe9F%2B5bvvMg9grjWVAQ%2FBAUOdpcDnq6DpjCY%2FQGOuV%2B6gXWtcn3DPTY5A%2B&X-Amz-Signature=32bc48f536f949cd36e2eedb69a6aad6c5eb6e2571e2a2f53a5c704e64e63f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5QUQPNV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0rUTyeTxv8ZnL8gBpkU76ptj%2Bwh3UIx7Bu43GT8lNNAiEAquuMF3W9n2B%2FeoULh3mXi9Uzrab%2BPTlA9Af0ZRpiwnAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoAlS%2BY1pLciUBSPircAxLAMdrX1MW2LFa%2BbbSmacrLoWmf5ubXCbhzrXFwXS8lf9CU6Lly8gDitC6xWghUReRuf8p48uC5eTggK9WZc7mwokLw2UQBeVlMzI8YaEXS0VM%2FhoOv959HxWDOdUss18bT0ePir7DpN3HNpBvJXlUHEuMdhhmEvXaDoZRnwhTFxrWfRlADcdtXBM%2BusG2SdHqfiFRZjhkzK1UWVEk5bGOYHawHARCMFs2y7OxyuRwyeuv7Nc122n0kuJiW0elbkA55YFnAA5qwHuqaRdpQHaDwF%2F%2FkBEvvfgxJykK69FK149%2ByoctHG234hb7lj%2F84UohQgL4AEmEV6mJjfYHMrRJSIgAuQsf2Cyx%2ByJ0Zl7sAlNudNb4veNUuuTXRmKj%2FDU2p0T7kJ37WsJPWlDesvrxnuh7pPemFGnqo7Qn26EmdRCin3egTZ6CUX9fbq2WeGnZ8l%2FBWCzvEHHGtBQX%2FVFHk87dCMXZ%2Ba6O2kTVObwIwNV5evt7VSZMlEK0U2EO0cWPLpnmrjGUjEMEagpT4mPFuss4h7JKoKxrFMFV2LOo%2F0hXm%2FYcI5BDwzh1c%2FdqSewrfNJyiZL6UICaSM%2Fe8bor3WK%2F1%2BiX70yjavt%2FgXkvaBL80US9dTylO%2FYRXMM248rwGOqUBnseG3xbFgD33Kj5g314U53Xq5RaLnP4kITgEgbRT4Rswn78q5QKcPbIlnRIFm7htUU4bAN2myBBu%2B1r40wRwdccrj98kJfD2dF9Z4p5cgWD2QYTyxNvn3B4d6rklKiGx61OgXwmmGT7Wa0%2BL%2BnboGy1q2tgzhtiyaXYe9F%2B5bvvMg9grjWVAQ%2FBAUOdpcDnq6DpjCY%2FQGOuV%2B6gXWtcn3DPTY5A%2B&X-Amz-Signature=cf5177c0f9aba99a9116ef1a0c906500223e66e577f84715b47867f28b139248&X-Amz-SignedHeaders=host&x-id=GetObject)
