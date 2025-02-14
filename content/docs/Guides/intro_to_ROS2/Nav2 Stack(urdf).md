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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQFAUX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZH34umZOSCzkSAG7YotABg1ZPDRUvbtckiyCDCCT8QIhAOLniYxjhwjF5CnOh0j0exW7QLfWdgmAemi8Dg8GUX7DKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7KFO3JaiJXWIz78q3AMAZS5XMU548YSyU88Q%2F7hJwlqqRR8sGIPcoX3%2FxgKtaJ%2BjmbDMY5h%2BijJyc4s9S3zxdzWTbs%2B%2BpS4%2BJC8a3yXY4uDZL6CyxO%2FbaqWXLHPHXCUoKsLIxdTf1PPCUwjhKRBrbm0xzpIQepm4QNrgyrq%2BstiPJLysmxC4dONtF%2Bbk8xlNo68oytXPYqCNfTgRaFncbIG1EMI8nAint2mUEuUcSra4z%2FDa%2Bdfj0W0bEjXWxN7c24rye%2FO1j4uk8%2F8nlwZS9iCi0h4kECYSpedCY41tv51vrOBsosD71%2FZtTmGfXufVJsT%2F%2BTw695YhkUBE5hIVUzvWRekhbKHORZSiNcu5beiXO7xnaNPd3oyl%2FCHdo4cjAIGAQIOOnEimrKn3NWMWcEf62oqLKQb2nh55%2FAKpCAEYXgd6gjAij%2BwR%2BmQev9lNrnd0%2BGz%2FId4aP9AtbiWV7pT8f%2BV72lTN6NseQHMK4NBWoEL1SsBz0KWiyseFM%2ByyjsvwcCmT2z8r4CBT2X8XpdonAwtHbBKwte2uasVO5txYtQjFA%2BgUIru5FTlCn4PEH8AJ4ZM30R%2B42NTfJHWBkzpvXIP0%2FKFrybKNDX%2B2d91pHaoxa3T0IsLoO5boYeBFJq6tZihLyl0flzDY6rq9BjqkAVccT0k8R7dj6opkShNhiR2zrvpDObSCjFYmFKQQ%2BzgLH3JqwmjhCJR%2FXylDkV6fC4dVnQNKgutHCGG6hp8ejiwjLFFy7krXvE6gGNp4gYBqML%2Bx9K6%2FlxL2PaDXFQe4tkwWlPScc89O7coWhY9nVrFIXQb11tipWxwWaHWCMEeubA%2BvUAI110e91suHziTSR64ERgig1WLmahRrj4OH2LA1WPE9&X-Amz-Signature=1aebbe11369de0fef592b9028d515cf327a753c516d83ee48ca42262a98450f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQFAUX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZH34umZOSCzkSAG7YotABg1ZPDRUvbtckiyCDCCT8QIhAOLniYxjhwjF5CnOh0j0exW7QLfWdgmAemi8Dg8GUX7DKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7KFO3JaiJXWIz78q3AMAZS5XMU548YSyU88Q%2F7hJwlqqRR8sGIPcoX3%2FxgKtaJ%2BjmbDMY5h%2BijJyc4s9S3zxdzWTbs%2B%2BpS4%2BJC8a3yXY4uDZL6CyxO%2FbaqWXLHPHXCUoKsLIxdTf1PPCUwjhKRBrbm0xzpIQepm4QNrgyrq%2BstiPJLysmxC4dONtF%2Bbk8xlNo68oytXPYqCNfTgRaFncbIG1EMI8nAint2mUEuUcSra4z%2FDa%2Bdfj0W0bEjXWxN7c24rye%2FO1j4uk8%2F8nlwZS9iCi0h4kECYSpedCY41tv51vrOBsosD71%2FZtTmGfXufVJsT%2F%2BTw695YhkUBE5hIVUzvWRekhbKHORZSiNcu5beiXO7xnaNPd3oyl%2FCHdo4cjAIGAQIOOnEimrKn3NWMWcEf62oqLKQb2nh55%2FAKpCAEYXgd6gjAij%2BwR%2BmQev9lNrnd0%2BGz%2FId4aP9AtbiWV7pT8f%2BV72lTN6NseQHMK4NBWoEL1SsBz0KWiyseFM%2ByyjsvwcCmT2z8r4CBT2X8XpdonAwtHbBKwte2uasVO5txYtQjFA%2BgUIru5FTlCn4PEH8AJ4ZM30R%2B42NTfJHWBkzpvXIP0%2FKFrybKNDX%2B2d91pHaoxa3T0IsLoO5boYeBFJq6tZihLyl0flzDY6rq9BjqkAVccT0k8R7dj6opkShNhiR2zrvpDObSCjFYmFKQQ%2BzgLH3JqwmjhCJR%2FXylDkV6fC4dVnQNKgutHCGG6hp8ejiwjLFFy7krXvE6gGNp4gYBqML%2Bx9K6%2FlxL2PaDXFQe4tkwWlPScc89O7coWhY9nVrFIXQb11tipWxwWaHWCMEeubA%2BvUAI110e91suHziTSR64ERgig1WLmahRrj4OH2LA1WPE9&X-Amz-Signature=384921814df0a385fa390eecbc7605adfcdf993f811ab0f76d6878cb50fbe9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQFAUX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZH34umZOSCzkSAG7YotABg1ZPDRUvbtckiyCDCCT8QIhAOLniYxjhwjF5CnOh0j0exW7QLfWdgmAemi8Dg8GUX7DKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7KFO3JaiJXWIz78q3AMAZS5XMU548YSyU88Q%2F7hJwlqqRR8sGIPcoX3%2FxgKtaJ%2BjmbDMY5h%2BijJyc4s9S3zxdzWTbs%2B%2BpS4%2BJC8a3yXY4uDZL6CyxO%2FbaqWXLHPHXCUoKsLIxdTf1PPCUwjhKRBrbm0xzpIQepm4QNrgyrq%2BstiPJLysmxC4dONtF%2Bbk8xlNo68oytXPYqCNfTgRaFncbIG1EMI8nAint2mUEuUcSra4z%2FDa%2Bdfj0W0bEjXWxN7c24rye%2FO1j4uk8%2F8nlwZS9iCi0h4kECYSpedCY41tv51vrOBsosD71%2FZtTmGfXufVJsT%2F%2BTw695YhkUBE5hIVUzvWRekhbKHORZSiNcu5beiXO7xnaNPd3oyl%2FCHdo4cjAIGAQIOOnEimrKn3NWMWcEf62oqLKQb2nh55%2FAKpCAEYXgd6gjAij%2BwR%2BmQev9lNrnd0%2BGz%2FId4aP9AtbiWV7pT8f%2BV72lTN6NseQHMK4NBWoEL1SsBz0KWiyseFM%2ByyjsvwcCmT2z8r4CBT2X8XpdonAwtHbBKwte2uasVO5txYtQjFA%2BgUIru5FTlCn4PEH8AJ4ZM30R%2B42NTfJHWBkzpvXIP0%2FKFrybKNDX%2B2d91pHaoxa3T0IsLoO5boYeBFJq6tZihLyl0flzDY6rq9BjqkAVccT0k8R7dj6opkShNhiR2zrvpDObSCjFYmFKQQ%2BzgLH3JqwmjhCJR%2FXylDkV6fC4dVnQNKgutHCGG6hp8ejiwjLFFy7krXvE6gGNp4gYBqML%2Bx9K6%2FlxL2PaDXFQe4tkwWlPScc89O7coWhY9nVrFIXQb11tipWxwWaHWCMEeubA%2BvUAI110e91suHziTSR64ERgig1WLmahRrj4OH2LA1WPE9&X-Amz-Signature=ac3e646744e86ffdf799199f19da144a164937bcae4aad78a9b166733d6fdb75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQFAUX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZH34umZOSCzkSAG7YotABg1ZPDRUvbtckiyCDCCT8QIhAOLniYxjhwjF5CnOh0j0exW7QLfWdgmAemi8Dg8GUX7DKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7KFO3JaiJXWIz78q3AMAZS5XMU548YSyU88Q%2F7hJwlqqRR8sGIPcoX3%2FxgKtaJ%2BjmbDMY5h%2BijJyc4s9S3zxdzWTbs%2B%2BpS4%2BJC8a3yXY4uDZL6CyxO%2FbaqWXLHPHXCUoKsLIxdTf1PPCUwjhKRBrbm0xzpIQepm4QNrgyrq%2BstiPJLysmxC4dONtF%2Bbk8xlNo68oytXPYqCNfTgRaFncbIG1EMI8nAint2mUEuUcSra4z%2FDa%2Bdfj0W0bEjXWxN7c24rye%2FO1j4uk8%2F8nlwZS9iCi0h4kECYSpedCY41tv51vrOBsosD71%2FZtTmGfXufVJsT%2F%2BTw695YhkUBE5hIVUzvWRekhbKHORZSiNcu5beiXO7xnaNPd3oyl%2FCHdo4cjAIGAQIOOnEimrKn3NWMWcEf62oqLKQb2nh55%2FAKpCAEYXgd6gjAij%2BwR%2BmQev9lNrnd0%2BGz%2FId4aP9AtbiWV7pT8f%2BV72lTN6NseQHMK4NBWoEL1SsBz0KWiyseFM%2ByyjsvwcCmT2z8r4CBT2X8XpdonAwtHbBKwte2uasVO5txYtQjFA%2BgUIru5FTlCn4PEH8AJ4ZM30R%2B42NTfJHWBkzpvXIP0%2FKFrybKNDX%2B2d91pHaoxa3T0IsLoO5boYeBFJq6tZihLyl0flzDY6rq9BjqkAVccT0k8R7dj6opkShNhiR2zrvpDObSCjFYmFKQQ%2BzgLH3JqwmjhCJR%2FXylDkV6fC4dVnQNKgutHCGG6hp8ejiwjLFFy7krXvE6gGNp4gYBqML%2Bx9K6%2FlxL2PaDXFQe4tkwWlPScc89O7coWhY9nVrFIXQb11tipWxwWaHWCMEeubA%2BvUAI110e91suHziTSR64ERgig1WLmahRrj4OH2LA1WPE9&X-Amz-Signature=a6f9de63a8a92de40c6a1c579c41de264596c1ab68e4fa7c0bcee6b4bcb8e384&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQFAUX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZH34umZOSCzkSAG7YotABg1ZPDRUvbtckiyCDCCT8QIhAOLniYxjhwjF5CnOh0j0exW7QLfWdgmAemi8Dg8GUX7DKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7KFO3JaiJXWIz78q3AMAZS5XMU548YSyU88Q%2F7hJwlqqRR8sGIPcoX3%2FxgKtaJ%2BjmbDMY5h%2BijJyc4s9S3zxdzWTbs%2B%2BpS4%2BJC8a3yXY4uDZL6CyxO%2FbaqWXLHPHXCUoKsLIxdTf1PPCUwjhKRBrbm0xzpIQepm4QNrgyrq%2BstiPJLysmxC4dONtF%2Bbk8xlNo68oytXPYqCNfTgRaFncbIG1EMI8nAint2mUEuUcSra4z%2FDa%2Bdfj0W0bEjXWxN7c24rye%2FO1j4uk8%2F8nlwZS9iCi0h4kECYSpedCY41tv51vrOBsosD71%2FZtTmGfXufVJsT%2F%2BTw695YhkUBE5hIVUzvWRekhbKHORZSiNcu5beiXO7xnaNPd3oyl%2FCHdo4cjAIGAQIOOnEimrKn3NWMWcEf62oqLKQb2nh55%2FAKpCAEYXgd6gjAij%2BwR%2BmQev9lNrnd0%2BGz%2FId4aP9AtbiWV7pT8f%2BV72lTN6NseQHMK4NBWoEL1SsBz0KWiyseFM%2ByyjsvwcCmT2z8r4CBT2X8XpdonAwtHbBKwte2uasVO5txYtQjFA%2BgUIru5FTlCn4PEH8AJ4ZM30R%2B42NTfJHWBkzpvXIP0%2FKFrybKNDX%2B2d91pHaoxa3T0IsLoO5boYeBFJq6tZihLyl0flzDY6rq9BjqkAVccT0k8R7dj6opkShNhiR2zrvpDObSCjFYmFKQQ%2BzgLH3JqwmjhCJR%2FXylDkV6fC4dVnQNKgutHCGG6hp8ejiwjLFFy7krXvE6gGNp4gYBqML%2Bx9K6%2FlxL2PaDXFQe4tkwWlPScc89O7coWhY9nVrFIXQb11tipWxwWaHWCMEeubA%2BvUAI110e91suHziTSR64ERgig1WLmahRrj4OH2LA1WPE9&X-Amz-Signature=78eb3b15058db3e05febcf42423ae7a64588c78d113e8b5a1a3bece4594e176d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQFAUX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRZH34umZOSCzkSAG7YotABg1ZPDRUvbtckiyCDCCT8QIhAOLniYxjhwjF5CnOh0j0exW7QLfWdgmAemi8Dg8GUX7DKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh7KFO3JaiJXWIz78q3AMAZS5XMU548YSyU88Q%2F7hJwlqqRR8sGIPcoX3%2FxgKtaJ%2BjmbDMY5h%2BijJyc4s9S3zxdzWTbs%2B%2BpS4%2BJC8a3yXY4uDZL6CyxO%2FbaqWXLHPHXCUoKsLIxdTf1PPCUwjhKRBrbm0xzpIQepm4QNrgyrq%2BstiPJLysmxC4dONtF%2Bbk8xlNo68oytXPYqCNfTgRaFncbIG1EMI8nAint2mUEuUcSra4z%2FDa%2Bdfj0W0bEjXWxN7c24rye%2FO1j4uk8%2F8nlwZS9iCi0h4kECYSpedCY41tv51vrOBsosD71%2FZtTmGfXufVJsT%2F%2BTw695YhkUBE5hIVUzvWRekhbKHORZSiNcu5beiXO7xnaNPd3oyl%2FCHdo4cjAIGAQIOOnEimrKn3NWMWcEf62oqLKQb2nh55%2FAKpCAEYXgd6gjAij%2BwR%2BmQev9lNrnd0%2BGz%2FId4aP9AtbiWV7pT8f%2BV72lTN6NseQHMK4NBWoEL1SsBz0KWiyseFM%2ByyjsvwcCmT2z8r4CBT2X8XpdonAwtHbBKwte2uasVO5txYtQjFA%2BgUIru5FTlCn4PEH8AJ4ZM30R%2B42NTfJHWBkzpvXIP0%2FKFrybKNDX%2B2d91pHaoxa3T0IsLoO5boYeBFJq6tZihLyl0flzDY6rq9BjqkAVccT0k8R7dj6opkShNhiR2zrvpDObSCjFYmFKQQ%2BzgLH3JqwmjhCJR%2FXylDkV6fC4dVnQNKgutHCGG6hp8ejiwjLFFy7krXvE6gGNp4gYBqML%2Bx9K6%2FlxL2PaDXFQe4tkwWlPScc89O7coWhY9nVrFIXQb11tipWxwWaHWCMEeubA%2BvUAI110e91suHziTSR64ERgig1WLmahRrj4OH2LA1WPE9&X-Amz-Signature=aada28b01f4dcf08f6f5f35792f604b4e49b7e583e560f21bf8df702e2dfd509&X-Amz-SignedHeaders=host&x-id=GetObject)
