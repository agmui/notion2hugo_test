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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLIE7JP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkH%2B9Ht3Qty%2FPjvQJIUZj5ZiQhePWqnEXTfXNHkjJZlgIgI3Jfm1m%2FJkeNv8jrjNvhGsGqN2OuhjgqBULEFcnTMTEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmYXdgeETBwpySeircAzjNYpX8xJIFNcawl%2FFKZdxV%2FvMAC62RXVV8wIYew4kTzOpPZEiGMDVVdCf6tSbQiH1PF5U98oYNVrp76tqnp%2FEE%2B%2FnlhKj7mrwDj159wWTvQOZJpaacZ0M2AMnQ8gqdOFt%2BgYe8TClCxB2hcSrInNqcfaT1zcry7dNt2bApWTishkWwIuF0IUwQQclsu27ZTYEBvmcvVgCS1syiwcHpT2tJdiVaZqIKTzozGDrW64SzabCqSmBcs0JahKotOqgDf03MB1QNY0i4ZfWYafxY50j4juZoj0kbpoEsuZQ7bZfxyAGf%2Bi5fANT8pxUsFB07XVH3SNo%2FZVDEWDltRY%2FOZG44cPql53eiAdaaWRNKbAA246vdu1Qj2OotcIU%2F4NzTdRuKrPnQeTM%2B1EeLx%2BPIz%2Fug01wktyDFrMDEW6%2F5iAY0%2BC5Su6FBWdLNyBU2Her10YDlabDmDjYUr%2FQM%2BwxYKwLMgY%2F8e7g0NfvnXFZbIW2MDLOXzTYjGAvKXClR1orpGNZsrhs0LAJJbzc9dbu8WjFzGbSlbXrfVIb3YffwdwfaZXsQfpYotidwO%2BSNh2B8TAL%2FxR58gMbSEqKIQnYAbs1ESsphLzhN%2F%2FjN%2FdZiHEaZzQ45H6Lqds42uoAgMNCQhb8GOqUB%2F7vVT8VbfsmfkVT13WeUIHinhi01PwgjNexMhJq%2FDDg2F2mTm6t7t1mi9wEpEM9Q%2FfEfNsRoPsw3jdY7KzYPOilEJoTnQiu6yFy7oVTwzJ0Qxq27LBLTDo4H2UtSw%2FgJYnDUL1nOXj8Qs1lno%2BZABVEdOf5gwA3Wav%2FqZkpuQIEv%2B68Zi7T52zcxLu7PmdRQDahfz8MbnurKUviGiLyqC4zmtyUA&X-Amz-Signature=ed2b4046c008a48517908407066fa098825f55014e65a650df5ab7ba77804e94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLIE7JP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkH%2B9Ht3Qty%2FPjvQJIUZj5ZiQhePWqnEXTfXNHkjJZlgIgI3Jfm1m%2FJkeNv8jrjNvhGsGqN2OuhjgqBULEFcnTMTEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmYXdgeETBwpySeircAzjNYpX8xJIFNcawl%2FFKZdxV%2FvMAC62RXVV8wIYew4kTzOpPZEiGMDVVdCf6tSbQiH1PF5U98oYNVrp76tqnp%2FEE%2B%2FnlhKj7mrwDj159wWTvQOZJpaacZ0M2AMnQ8gqdOFt%2BgYe8TClCxB2hcSrInNqcfaT1zcry7dNt2bApWTishkWwIuF0IUwQQclsu27ZTYEBvmcvVgCS1syiwcHpT2tJdiVaZqIKTzozGDrW64SzabCqSmBcs0JahKotOqgDf03MB1QNY0i4ZfWYafxY50j4juZoj0kbpoEsuZQ7bZfxyAGf%2Bi5fANT8pxUsFB07XVH3SNo%2FZVDEWDltRY%2FOZG44cPql53eiAdaaWRNKbAA246vdu1Qj2OotcIU%2F4NzTdRuKrPnQeTM%2B1EeLx%2BPIz%2Fug01wktyDFrMDEW6%2F5iAY0%2BC5Su6FBWdLNyBU2Her10YDlabDmDjYUr%2FQM%2BwxYKwLMgY%2F8e7g0NfvnXFZbIW2MDLOXzTYjGAvKXClR1orpGNZsrhs0LAJJbzc9dbu8WjFzGbSlbXrfVIb3YffwdwfaZXsQfpYotidwO%2BSNh2B8TAL%2FxR58gMbSEqKIQnYAbs1ESsphLzhN%2F%2FjN%2FdZiHEaZzQ45H6Lqds42uoAgMNCQhb8GOqUB%2F7vVT8VbfsmfkVT13WeUIHinhi01PwgjNexMhJq%2FDDg2F2mTm6t7t1mi9wEpEM9Q%2FfEfNsRoPsw3jdY7KzYPOilEJoTnQiu6yFy7oVTwzJ0Qxq27LBLTDo4H2UtSw%2FgJYnDUL1nOXj8Qs1lno%2BZABVEdOf5gwA3Wav%2FqZkpuQIEv%2B68Zi7T52zcxLu7PmdRQDahfz8MbnurKUviGiLyqC4zmtyUA&X-Amz-Signature=1e01beeb3e99cfe58b9f851ed0caf03c86110b39800c5e19fa386994c44bafa1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLIE7JP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkH%2B9Ht3Qty%2FPjvQJIUZj5ZiQhePWqnEXTfXNHkjJZlgIgI3Jfm1m%2FJkeNv8jrjNvhGsGqN2OuhjgqBULEFcnTMTEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmYXdgeETBwpySeircAzjNYpX8xJIFNcawl%2FFKZdxV%2FvMAC62RXVV8wIYew4kTzOpPZEiGMDVVdCf6tSbQiH1PF5U98oYNVrp76tqnp%2FEE%2B%2FnlhKj7mrwDj159wWTvQOZJpaacZ0M2AMnQ8gqdOFt%2BgYe8TClCxB2hcSrInNqcfaT1zcry7dNt2bApWTishkWwIuF0IUwQQclsu27ZTYEBvmcvVgCS1syiwcHpT2tJdiVaZqIKTzozGDrW64SzabCqSmBcs0JahKotOqgDf03MB1QNY0i4ZfWYafxY50j4juZoj0kbpoEsuZQ7bZfxyAGf%2Bi5fANT8pxUsFB07XVH3SNo%2FZVDEWDltRY%2FOZG44cPql53eiAdaaWRNKbAA246vdu1Qj2OotcIU%2F4NzTdRuKrPnQeTM%2B1EeLx%2BPIz%2Fug01wktyDFrMDEW6%2F5iAY0%2BC5Su6FBWdLNyBU2Her10YDlabDmDjYUr%2FQM%2BwxYKwLMgY%2F8e7g0NfvnXFZbIW2MDLOXzTYjGAvKXClR1orpGNZsrhs0LAJJbzc9dbu8WjFzGbSlbXrfVIb3YffwdwfaZXsQfpYotidwO%2BSNh2B8TAL%2FxR58gMbSEqKIQnYAbs1ESsphLzhN%2F%2FjN%2FdZiHEaZzQ45H6Lqds42uoAgMNCQhb8GOqUB%2F7vVT8VbfsmfkVT13WeUIHinhi01PwgjNexMhJq%2FDDg2F2mTm6t7t1mi9wEpEM9Q%2FfEfNsRoPsw3jdY7KzYPOilEJoTnQiu6yFy7oVTwzJ0Qxq27LBLTDo4H2UtSw%2FgJYnDUL1nOXj8Qs1lno%2BZABVEdOf5gwA3Wav%2FqZkpuQIEv%2B68Zi7T52zcxLu7PmdRQDahfz8MbnurKUviGiLyqC4zmtyUA&X-Amz-Signature=fcc3ff4050569046a155479a6a7f363b300f692cfc4660af93120b87259ffbad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLIE7JP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkH%2B9Ht3Qty%2FPjvQJIUZj5ZiQhePWqnEXTfXNHkjJZlgIgI3Jfm1m%2FJkeNv8jrjNvhGsGqN2OuhjgqBULEFcnTMTEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmYXdgeETBwpySeircAzjNYpX8xJIFNcawl%2FFKZdxV%2FvMAC62RXVV8wIYew4kTzOpPZEiGMDVVdCf6tSbQiH1PF5U98oYNVrp76tqnp%2FEE%2B%2FnlhKj7mrwDj159wWTvQOZJpaacZ0M2AMnQ8gqdOFt%2BgYe8TClCxB2hcSrInNqcfaT1zcry7dNt2bApWTishkWwIuF0IUwQQclsu27ZTYEBvmcvVgCS1syiwcHpT2tJdiVaZqIKTzozGDrW64SzabCqSmBcs0JahKotOqgDf03MB1QNY0i4ZfWYafxY50j4juZoj0kbpoEsuZQ7bZfxyAGf%2Bi5fANT8pxUsFB07XVH3SNo%2FZVDEWDltRY%2FOZG44cPql53eiAdaaWRNKbAA246vdu1Qj2OotcIU%2F4NzTdRuKrPnQeTM%2B1EeLx%2BPIz%2Fug01wktyDFrMDEW6%2F5iAY0%2BC5Su6FBWdLNyBU2Her10YDlabDmDjYUr%2FQM%2BwxYKwLMgY%2F8e7g0NfvnXFZbIW2MDLOXzTYjGAvKXClR1orpGNZsrhs0LAJJbzc9dbu8WjFzGbSlbXrfVIb3YffwdwfaZXsQfpYotidwO%2BSNh2B8TAL%2FxR58gMbSEqKIQnYAbs1ESsphLzhN%2F%2FjN%2FdZiHEaZzQ45H6Lqds42uoAgMNCQhb8GOqUB%2F7vVT8VbfsmfkVT13WeUIHinhi01PwgjNexMhJq%2FDDg2F2mTm6t7t1mi9wEpEM9Q%2FfEfNsRoPsw3jdY7KzYPOilEJoTnQiu6yFy7oVTwzJ0Qxq27LBLTDo4H2UtSw%2FgJYnDUL1nOXj8Qs1lno%2BZABVEdOf5gwA3Wav%2FqZkpuQIEv%2B68Zi7T52zcxLu7PmdRQDahfz8MbnurKUviGiLyqC4zmtyUA&X-Amz-Signature=3c75ec40c04b3fc07cc9609b6bc02b19965bada69814593e6691c9440dcf5879&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLIE7JP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkH%2B9Ht3Qty%2FPjvQJIUZj5ZiQhePWqnEXTfXNHkjJZlgIgI3Jfm1m%2FJkeNv8jrjNvhGsGqN2OuhjgqBULEFcnTMTEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmYXdgeETBwpySeircAzjNYpX8xJIFNcawl%2FFKZdxV%2FvMAC62RXVV8wIYew4kTzOpPZEiGMDVVdCf6tSbQiH1PF5U98oYNVrp76tqnp%2FEE%2B%2FnlhKj7mrwDj159wWTvQOZJpaacZ0M2AMnQ8gqdOFt%2BgYe8TClCxB2hcSrInNqcfaT1zcry7dNt2bApWTishkWwIuF0IUwQQclsu27ZTYEBvmcvVgCS1syiwcHpT2tJdiVaZqIKTzozGDrW64SzabCqSmBcs0JahKotOqgDf03MB1QNY0i4ZfWYafxY50j4juZoj0kbpoEsuZQ7bZfxyAGf%2Bi5fANT8pxUsFB07XVH3SNo%2FZVDEWDltRY%2FOZG44cPql53eiAdaaWRNKbAA246vdu1Qj2OotcIU%2F4NzTdRuKrPnQeTM%2B1EeLx%2BPIz%2Fug01wktyDFrMDEW6%2F5iAY0%2BC5Su6FBWdLNyBU2Her10YDlabDmDjYUr%2FQM%2BwxYKwLMgY%2F8e7g0NfvnXFZbIW2MDLOXzTYjGAvKXClR1orpGNZsrhs0LAJJbzc9dbu8WjFzGbSlbXrfVIb3YffwdwfaZXsQfpYotidwO%2BSNh2B8TAL%2FxR58gMbSEqKIQnYAbs1ESsphLzhN%2F%2FjN%2FdZiHEaZzQ45H6Lqds42uoAgMNCQhb8GOqUB%2F7vVT8VbfsmfkVT13WeUIHinhi01PwgjNexMhJq%2FDDg2F2mTm6t7t1mi9wEpEM9Q%2FfEfNsRoPsw3jdY7KzYPOilEJoTnQiu6yFy7oVTwzJ0Qxq27LBLTDo4H2UtSw%2FgJYnDUL1nOXj8Qs1lno%2BZABVEdOf5gwA3Wav%2FqZkpuQIEv%2B68Zi7T52zcxLu7PmdRQDahfz8MbnurKUviGiLyqC4zmtyUA&X-Amz-Signature=505e5da4979bd2bc5142f7d37ded31dd2e18b2d229a6190527a2e9751cf7d6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLIE7JP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkH%2B9Ht3Qty%2FPjvQJIUZj5ZiQhePWqnEXTfXNHkjJZlgIgI3Jfm1m%2FJkeNv8jrjNvhGsGqN2OuhjgqBULEFcnTMTEqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgmYXdgeETBwpySeircAzjNYpX8xJIFNcawl%2FFKZdxV%2FvMAC62RXVV8wIYew4kTzOpPZEiGMDVVdCf6tSbQiH1PF5U98oYNVrp76tqnp%2FEE%2B%2FnlhKj7mrwDj159wWTvQOZJpaacZ0M2AMnQ8gqdOFt%2BgYe8TClCxB2hcSrInNqcfaT1zcry7dNt2bApWTishkWwIuF0IUwQQclsu27ZTYEBvmcvVgCS1syiwcHpT2tJdiVaZqIKTzozGDrW64SzabCqSmBcs0JahKotOqgDf03MB1QNY0i4ZfWYafxY50j4juZoj0kbpoEsuZQ7bZfxyAGf%2Bi5fANT8pxUsFB07XVH3SNo%2FZVDEWDltRY%2FOZG44cPql53eiAdaaWRNKbAA246vdu1Qj2OotcIU%2F4NzTdRuKrPnQeTM%2B1EeLx%2BPIz%2Fug01wktyDFrMDEW6%2F5iAY0%2BC5Su6FBWdLNyBU2Her10YDlabDmDjYUr%2FQM%2BwxYKwLMgY%2F8e7g0NfvnXFZbIW2MDLOXzTYjGAvKXClR1orpGNZsrhs0LAJJbzc9dbu8WjFzGbSlbXrfVIb3YffwdwfaZXsQfpYotidwO%2BSNh2B8TAL%2FxR58gMbSEqKIQnYAbs1ESsphLzhN%2F%2FjN%2FdZiHEaZzQ45H6Lqds42uoAgMNCQhb8GOqUB%2F7vVT8VbfsmfkVT13WeUIHinhi01PwgjNexMhJq%2FDDg2F2mTm6t7t1mi9wEpEM9Q%2FfEfNsRoPsw3jdY7KzYPOilEJoTnQiu6yFy7oVTwzJ0Qxq27LBLTDo4H2UtSw%2FgJYnDUL1nOXj8Qs1lno%2BZABVEdOf5gwA3Wav%2FqZkpuQIEv%2B68Zi7T52zcxLu7PmdRQDahfz8MbnurKUviGiLyqC4zmtyUA&X-Amz-Signature=71c7d7b5f6d96d7ca99431164da5a7e325a7fcdcaf7bbf0e7334d44e6e6a10d2&X-Amz-SignedHeaders=host&x-id=GetObject)
