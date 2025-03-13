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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGD3CGA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIVcbdzJ8f3GqE%2FCzchjGSn4GsA5mQ3lNLdzZBE8iNAIgZuwiMJqGi8wO5ntrpGZF4EJ8XQo2EsIqTNPg%2BT%2FGUB4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFERgTyi%2FXu%2BmqzrlircA%2BYJNWM02zsl5HynJc6H0bu1MaL6tYDsEIxf1RyTc6GddYYlk7KcLN%2FUa1d%2B53kVXzqAJeWlfwaACmkSNT1xB7g0lZf7DHaDrRrZ54Hx8ap3pe3qMXXaWw3tWveZbKOb8SOt5dKymo1qTioGCpscj2%2Fu1MeMcgJBLIHzlOwlz322gk2X3%2FKOtnBV%2BFS%2BxtLeJrCe7G2ENhvEocos34MsySia5vyXDu%2BU%2Feask4C9VFWPnESnXbqL6%2F1U7uI2VaanZuJcl9vVP9MkLYH9jMoGQmaqt6DOALWtW28HW4KnVjOpRQ0aIyEVonxxmTAaCuywAP%2F1GIZ09CQLBjh4U4URejvx0Vno%2BKW9VOb%2FDEZs7r2hpYQ62tXvys%2FwtJlcRYgyyE33RIC2JxV7OQ0HPUBlt99cQiju6Ahuj68Sct6yzyuTB290yBoxT2SPsy%2BqLJYxHZ%2FnyZN3oWNdJ%2FBPCA2ZC1MuRA0uJDvq%2FeVZig0UMcWPg2gHZYeXrMklKiZXLk6XnGjqpVtse6gV47F6gsFM8hyNPo2voaK%2BgVi67T4JZKR7thXiwbyMsJFh534punIZUmNBx6WbhHxKp5FPWrZGvyxT5aoJ9EUfffEiG6SGO1yvegn8jke3sHW4TqU9MNP1yr4GOqUBJJ0BZfoivXE3wiYsR8aYLsDTgxJAYH5G%2FyA6Nf145sLpyZ1CpPOAyCAVwhkuTXESFq%2F98PcOTyn72JchnDFOjrAtyHpU565q1T6fVrX1%2Fj3wPn0KOgRX%2BhUaF7QfXqn2jD0wVQBjDBGthLW6e0OiohwPheN6nTw19cUtamrOPx%2BTFpba%2BomvJei3aA2X11LmFuS8abIlTZn6DdTIF0dmeik%2BINb9&X-Amz-Signature=8f67656484d6972f24b30ce8b527eea4ee3ec525a7fd47ba75cc03f1cbdc8d82&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGD3CGA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIVcbdzJ8f3GqE%2FCzchjGSn4GsA5mQ3lNLdzZBE8iNAIgZuwiMJqGi8wO5ntrpGZF4EJ8XQo2EsIqTNPg%2BT%2FGUB4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFERgTyi%2FXu%2BmqzrlircA%2BYJNWM02zsl5HynJc6H0bu1MaL6tYDsEIxf1RyTc6GddYYlk7KcLN%2FUa1d%2B53kVXzqAJeWlfwaACmkSNT1xB7g0lZf7DHaDrRrZ54Hx8ap3pe3qMXXaWw3tWveZbKOb8SOt5dKymo1qTioGCpscj2%2Fu1MeMcgJBLIHzlOwlz322gk2X3%2FKOtnBV%2BFS%2BxtLeJrCe7G2ENhvEocos34MsySia5vyXDu%2BU%2Feask4C9VFWPnESnXbqL6%2F1U7uI2VaanZuJcl9vVP9MkLYH9jMoGQmaqt6DOALWtW28HW4KnVjOpRQ0aIyEVonxxmTAaCuywAP%2F1GIZ09CQLBjh4U4URejvx0Vno%2BKW9VOb%2FDEZs7r2hpYQ62tXvys%2FwtJlcRYgyyE33RIC2JxV7OQ0HPUBlt99cQiju6Ahuj68Sct6yzyuTB290yBoxT2SPsy%2BqLJYxHZ%2FnyZN3oWNdJ%2FBPCA2ZC1MuRA0uJDvq%2FeVZig0UMcWPg2gHZYeXrMklKiZXLk6XnGjqpVtse6gV47F6gsFM8hyNPo2voaK%2BgVi67T4JZKR7thXiwbyMsJFh534punIZUmNBx6WbhHxKp5FPWrZGvyxT5aoJ9EUfffEiG6SGO1yvegn8jke3sHW4TqU9MNP1yr4GOqUBJJ0BZfoivXE3wiYsR8aYLsDTgxJAYH5G%2FyA6Nf145sLpyZ1CpPOAyCAVwhkuTXESFq%2F98PcOTyn72JchnDFOjrAtyHpU565q1T6fVrX1%2Fj3wPn0KOgRX%2BhUaF7QfXqn2jD0wVQBjDBGthLW6e0OiohwPheN6nTw19cUtamrOPx%2BTFpba%2BomvJei3aA2X11LmFuS8abIlTZn6DdTIF0dmeik%2BINb9&X-Amz-Signature=8526315622b673372e616542dda33cbc61e7eb4141dbf46d262b6eb600de78a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGD3CGA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIVcbdzJ8f3GqE%2FCzchjGSn4GsA5mQ3lNLdzZBE8iNAIgZuwiMJqGi8wO5ntrpGZF4EJ8XQo2EsIqTNPg%2BT%2FGUB4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFERgTyi%2FXu%2BmqzrlircA%2BYJNWM02zsl5HynJc6H0bu1MaL6tYDsEIxf1RyTc6GddYYlk7KcLN%2FUa1d%2B53kVXzqAJeWlfwaACmkSNT1xB7g0lZf7DHaDrRrZ54Hx8ap3pe3qMXXaWw3tWveZbKOb8SOt5dKymo1qTioGCpscj2%2Fu1MeMcgJBLIHzlOwlz322gk2X3%2FKOtnBV%2BFS%2BxtLeJrCe7G2ENhvEocos34MsySia5vyXDu%2BU%2Feask4C9VFWPnESnXbqL6%2F1U7uI2VaanZuJcl9vVP9MkLYH9jMoGQmaqt6DOALWtW28HW4KnVjOpRQ0aIyEVonxxmTAaCuywAP%2F1GIZ09CQLBjh4U4URejvx0Vno%2BKW9VOb%2FDEZs7r2hpYQ62tXvys%2FwtJlcRYgyyE33RIC2JxV7OQ0HPUBlt99cQiju6Ahuj68Sct6yzyuTB290yBoxT2SPsy%2BqLJYxHZ%2FnyZN3oWNdJ%2FBPCA2ZC1MuRA0uJDvq%2FeVZig0UMcWPg2gHZYeXrMklKiZXLk6XnGjqpVtse6gV47F6gsFM8hyNPo2voaK%2BgVi67T4JZKR7thXiwbyMsJFh534punIZUmNBx6WbhHxKp5FPWrZGvyxT5aoJ9EUfffEiG6SGO1yvegn8jke3sHW4TqU9MNP1yr4GOqUBJJ0BZfoivXE3wiYsR8aYLsDTgxJAYH5G%2FyA6Nf145sLpyZ1CpPOAyCAVwhkuTXESFq%2F98PcOTyn72JchnDFOjrAtyHpU565q1T6fVrX1%2Fj3wPn0KOgRX%2BhUaF7QfXqn2jD0wVQBjDBGthLW6e0OiohwPheN6nTw19cUtamrOPx%2BTFpba%2BomvJei3aA2X11LmFuS8abIlTZn6DdTIF0dmeik%2BINb9&X-Amz-Signature=7f4dabaab9571abc44870733fe75ef33613a82d6a5563b7af4c3253df854260f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGD3CGA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIVcbdzJ8f3GqE%2FCzchjGSn4GsA5mQ3lNLdzZBE8iNAIgZuwiMJqGi8wO5ntrpGZF4EJ8XQo2EsIqTNPg%2BT%2FGUB4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFERgTyi%2FXu%2BmqzrlircA%2BYJNWM02zsl5HynJc6H0bu1MaL6tYDsEIxf1RyTc6GddYYlk7KcLN%2FUa1d%2B53kVXzqAJeWlfwaACmkSNT1xB7g0lZf7DHaDrRrZ54Hx8ap3pe3qMXXaWw3tWveZbKOb8SOt5dKymo1qTioGCpscj2%2Fu1MeMcgJBLIHzlOwlz322gk2X3%2FKOtnBV%2BFS%2BxtLeJrCe7G2ENhvEocos34MsySia5vyXDu%2BU%2Feask4C9VFWPnESnXbqL6%2F1U7uI2VaanZuJcl9vVP9MkLYH9jMoGQmaqt6DOALWtW28HW4KnVjOpRQ0aIyEVonxxmTAaCuywAP%2F1GIZ09CQLBjh4U4URejvx0Vno%2BKW9VOb%2FDEZs7r2hpYQ62tXvys%2FwtJlcRYgyyE33RIC2JxV7OQ0HPUBlt99cQiju6Ahuj68Sct6yzyuTB290yBoxT2SPsy%2BqLJYxHZ%2FnyZN3oWNdJ%2FBPCA2ZC1MuRA0uJDvq%2FeVZig0UMcWPg2gHZYeXrMklKiZXLk6XnGjqpVtse6gV47F6gsFM8hyNPo2voaK%2BgVi67T4JZKR7thXiwbyMsJFh534punIZUmNBx6WbhHxKp5FPWrZGvyxT5aoJ9EUfffEiG6SGO1yvegn8jke3sHW4TqU9MNP1yr4GOqUBJJ0BZfoivXE3wiYsR8aYLsDTgxJAYH5G%2FyA6Nf145sLpyZ1CpPOAyCAVwhkuTXESFq%2F98PcOTyn72JchnDFOjrAtyHpU565q1T6fVrX1%2Fj3wPn0KOgRX%2BhUaF7QfXqn2jD0wVQBjDBGthLW6e0OiohwPheN6nTw19cUtamrOPx%2BTFpba%2BomvJei3aA2X11LmFuS8abIlTZn6DdTIF0dmeik%2BINb9&X-Amz-Signature=c06db0320bc2b8904cf09af45b823ac8c69a7f669a76a5cde5aad96a12b8d5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGD3CGA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIVcbdzJ8f3GqE%2FCzchjGSn4GsA5mQ3lNLdzZBE8iNAIgZuwiMJqGi8wO5ntrpGZF4EJ8XQo2EsIqTNPg%2BT%2FGUB4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFERgTyi%2FXu%2BmqzrlircA%2BYJNWM02zsl5HynJc6H0bu1MaL6tYDsEIxf1RyTc6GddYYlk7KcLN%2FUa1d%2B53kVXzqAJeWlfwaACmkSNT1xB7g0lZf7DHaDrRrZ54Hx8ap3pe3qMXXaWw3tWveZbKOb8SOt5dKymo1qTioGCpscj2%2Fu1MeMcgJBLIHzlOwlz322gk2X3%2FKOtnBV%2BFS%2BxtLeJrCe7G2ENhvEocos34MsySia5vyXDu%2BU%2Feask4C9VFWPnESnXbqL6%2F1U7uI2VaanZuJcl9vVP9MkLYH9jMoGQmaqt6DOALWtW28HW4KnVjOpRQ0aIyEVonxxmTAaCuywAP%2F1GIZ09CQLBjh4U4URejvx0Vno%2BKW9VOb%2FDEZs7r2hpYQ62tXvys%2FwtJlcRYgyyE33RIC2JxV7OQ0HPUBlt99cQiju6Ahuj68Sct6yzyuTB290yBoxT2SPsy%2BqLJYxHZ%2FnyZN3oWNdJ%2FBPCA2ZC1MuRA0uJDvq%2FeVZig0UMcWPg2gHZYeXrMklKiZXLk6XnGjqpVtse6gV47F6gsFM8hyNPo2voaK%2BgVi67T4JZKR7thXiwbyMsJFh534punIZUmNBx6WbhHxKp5FPWrZGvyxT5aoJ9EUfffEiG6SGO1yvegn8jke3sHW4TqU9MNP1yr4GOqUBJJ0BZfoivXE3wiYsR8aYLsDTgxJAYH5G%2FyA6Nf145sLpyZ1CpPOAyCAVwhkuTXESFq%2F98PcOTyn72JchnDFOjrAtyHpU565q1T6fVrX1%2Fj3wPn0KOgRX%2BhUaF7QfXqn2jD0wVQBjDBGthLW6e0OiohwPheN6nTw19cUtamrOPx%2BTFpba%2BomvJei3aA2X11LmFuS8abIlTZn6DdTIF0dmeik%2BINb9&X-Amz-Signature=8ee238fcec6c4d8015f00a715d982bdd31a1261877febd969a79e1d64f5a21fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGD3CGA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIVcbdzJ8f3GqE%2FCzchjGSn4GsA5mQ3lNLdzZBE8iNAIgZuwiMJqGi8wO5ntrpGZF4EJ8XQo2EsIqTNPg%2BT%2FGUB4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFERgTyi%2FXu%2BmqzrlircA%2BYJNWM02zsl5HynJc6H0bu1MaL6tYDsEIxf1RyTc6GddYYlk7KcLN%2FUa1d%2B53kVXzqAJeWlfwaACmkSNT1xB7g0lZf7DHaDrRrZ54Hx8ap3pe3qMXXaWw3tWveZbKOb8SOt5dKymo1qTioGCpscj2%2Fu1MeMcgJBLIHzlOwlz322gk2X3%2FKOtnBV%2BFS%2BxtLeJrCe7G2ENhvEocos34MsySia5vyXDu%2BU%2Feask4C9VFWPnESnXbqL6%2F1U7uI2VaanZuJcl9vVP9MkLYH9jMoGQmaqt6DOALWtW28HW4KnVjOpRQ0aIyEVonxxmTAaCuywAP%2F1GIZ09CQLBjh4U4URejvx0Vno%2BKW9VOb%2FDEZs7r2hpYQ62tXvys%2FwtJlcRYgyyE33RIC2JxV7OQ0HPUBlt99cQiju6Ahuj68Sct6yzyuTB290yBoxT2SPsy%2BqLJYxHZ%2FnyZN3oWNdJ%2FBPCA2ZC1MuRA0uJDvq%2FeVZig0UMcWPg2gHZYeXrMklKiZXLk6XnGjqpVtse6gV47F6gsFM8hyNPo2voaK%2BgVi67T4JZKR7thXiwbyMsJFh534punIZUmNBx6WbhHxKp5FPWrZGvyxT5aoJ9EUfffEiG6SGO1yvegn8jke3sHW4TqU9MNP1yr4GOqUBJJ0BZfoivXE3wiYsR8aYLsDTgxJAYH5G%2FyA6Nf145sLpyZ1CpPOAyCAVwhkuTXESFq%2F98PcOTyn72JchnDFOjrAtyHpU565q1T6fVrX1%2Fj3wPn0KOgRX%2BhUaF7QfXqn2jD0wVQBjDBGthLW6e0OiohwPheN6nTw19cUtamrOPx%2BTFpba%2BomvJei3aA2X11LmFuS8abIlTZn6DdTIF0dmeik%2BINb9&X-Amz-Signature=85ffbcfcb8933727c67e0fc8766c897c9a907bd3fb40951f7ba8af9c76991fa5&X-Amz-SignedHeaders=host&x-id=GetObject)
