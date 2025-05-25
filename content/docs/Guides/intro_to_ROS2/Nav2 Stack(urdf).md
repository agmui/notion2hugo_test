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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUJRLT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFU9vl%2B%2BVgmkQFr7O3EodKARJUwvCOUcYYFKZKLQRb%2B%2FAiEA1DxP6QKVxHjF9JcaUFDHV6w6xuKKhP23Th3cm6amNHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKhjeVpRbqB087kRnyrcA2jzkcExFV7uCVevAdyDv0UcI39pjGUjwwNQWE30k2MfQZrjVWQyzFJxE9xxG0V60cbK8SKsKE16hrmMYc%2BzK%2Buo1nhsbV%2Ful4Fivrz1uZUOAAA3eDbsoU4mKGSNCUcBzzKFma7x91NiUBgnjzadgV26evnA%2BEtzXOcaqNTBJWE0tgL4uV%2FTYKUeVdgJkJplT6Q7ER8l2mVggvLCvhTm7opdF8zv4u%2BZGYBwgO7YuxJAJVJsJrfpWFpI4vFNfBmY4AzhM5sqq8rJZl%2BxhVnBvgtnXZJ7aDvfFB2hvP6LxEAbP7kfHftefQUAreY4jSVmEF2JM2XpMDpBozB18gwuPBgl0qkSj1AuzklqZVBaPIO3r8ZTz2r7JGIISx55WFZE07rfJ5k%2F1rS50WO3vaMi5QtDZ3URU7JPuHOlBJ1tZLi6VbxYmLPrqbnA%2F99zTanyOpgZy7CHQRG5eihCSRp7L9vNPb40bc%2B71c2e1l0w2v%2BZvTw28jqMF2ctwM99d0YjKXqbhdUT7slib1MB84BgsDf3R45ZA1kXkivp9Z3ocz1WKxnlnAKcBDeOcnhNuRAl89XmYYG6WbKDiLZ%2BagrwTRGtGhedgHz2BcsQRx%2B4aqyMTHsmDUQtB3bro2LjMID%2FzMEGOqUBWxtlk60NxWVaF1T95FIQVHzfkx4GZpRuhr7vYfaydJbvSFWkQUKp0E9S7Vlu96ZT7f8XysRs1wkycrfm5J5WdZFCZqVqhh167U0cvAOLRizKJ3p0G8YzkLMCDzoNtMTselmpgFfrKTw2YxZRcf01wWBvLvQchxvUPE5K4hMjmLhJCi9%2BoRkm3PM8TpZaGVLv4HQbJHWHfq%2FfiPx%2B0Vhfpu0dLspX&X-Amz-Signature=95c474e1a90328e61e9f250b5c55f461e96a6667903308d06f86b8b48ec7fd8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUJRLT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFU9vl%2B%2BVgmkQFr7O3EodKARJUwvCOUcYYFKZKLQRb%2B%2FAiEA1DxP6QKVxHjF9JcaUFDHV6w6xuKKhP23Th3cm6amNHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKhjeVpRbqB087kRnyrcA2jzkcExFV7uCVevAdyDv0UcI39pjGUjwwNQWE30k2MfQZrjVWQyzFJxE9xxG0V60cbK8SKsKE16hrmMYc%2BzK%2Buo1nhsbV%2Ful4Fivrz1uZUOAAA3eDbsoU4mKGSNCUcBzzKFma7x91NiUBgnjzadgV26evnA%2BEtzXOcaqNTBJWE0tgL4uV%2FTYKUeVdgJkJplT6Q7ER8l2mVggvLCvhTm7opdF8zv4u%2BZGYBwgO7YuxJAJVJsJrfpWFpI4vFNfBmY4AzhM5sqq8rJZl%2BxhVnBvgtnXZJ7aDvfFB2hvP6LxEAbP7kfHftefQUAreY4jSVmEF2JM2XpMDpBozB18gwuPBgl0qkSj1AuzklqZVBaPIO3r8ZTz2r7JGIISx55WFZE07rfJ5k%2F1rS50WO3vaMi5QtDZ3URU7JPuHOlBJ1tZLi6VbxYmLPrqbnA%2F99zTanyOpgZy7CHQRG5eihCSRp7L9vNPb40bc%2B71c2e1l0w2v%2BZvTw28jqMF2ctwM99d0YjKXqbhdUT7slib1MB84BgsDf3R45ZA1kXkivp9Z3ocz1WKxnlnAKcBDeOcnhNuRAl89XmYYG6WbKDiLZ%2BagrwTRGtGhedgHz2BcsQRx%2B4aqyMTHsmDUQtB3bro2LjMID%2FzMEGOqUBWxtlk60NxWVaF1T95FIQVHzfkx4GZpRuhr7vYfaydJbvSFWkQUKp0E9S7Vlu96ZT7f8XysRs1wkycrfm5J5WdZFCZqVqhh167U0cvAOLRizKJ3p0G8YzkLMCDzoNtMTselmpgFfrKTw2YxZRcf01wWBvLvQchxvUPE5K4hMjmLhJCi9%2BoRkm3PM8TpZaGVLv4HQbJHWHfq%2FfiPx%2B0Vhfpu0dLspX&X-Amz-Signature=30cb3ce4ff12ccfc8223c70a4c0cdbd3e726dec721bdc142df7b18bb8b176154&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUJRLT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFU9vl%2B%2BVgmkQFr7O3EodKARJUwvCOUcYYFKZKLQRb%2B%2FAiEA1DxP6QKVxHjF9JcaUFDHV6w6xuKKhP23Th3cm6amNHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKhjeVpRbqB087kRnyrcA2jzkcExFV7uCVevAdyDv0UcI39pjGUjwwNQWE30k2MfQZrjVWQyzFJxE9xxG0V60cbK8SKsKE16hrmMYc%2BzK%2Buo1nhsbV%2Ful4Fivrz1uZUOAAA3eDbsoU4mKGSNCUcBzzKFma7x91NiUBgnjzadgV26evnA%2BEtzXOcaqNTBJWE0tgL4uV%2FTYKUeVdgJkJplT6Q7ER8l2mVggvLCvhTm7opdF8zv4u%2BZGYBwgO7YuxJAJVJsJrfpWFpI4vFNfBmY4AzhM5sqq8rJZl%2BxhVnBvgtnXZJ7aDvfFB2hvP6LxEAbP7kfHftefQUAreY4jSVmEF2JM2XpMDpBozB18gwuPBgl0qkSj1AuzklqZVBaPIO3r8ZTz2r7JGIISx55WFZE07rfJ5k%2F1rS50WO3vaMi5QtDZ3URU7JPuHOlBJ1tZLi6VbxYmLPrqbnA%2F99zTanyOpgZy7CHQRG5eihCSRp7L9vNPb40bc%2B71c2e1l0w2v%2BZvTw28jqMF2ctwM99d0YjKXqbhdUT7slib1MB84BgsDf3R45ZA1kXkivp9Z3ocz1WKxnlnAKcBDeOcnhNuRAl89XmYYG6WbKDiLZ%2BagrwTRGtGhedgHz2BcsQRx%2B4aqyMTHsmDUQtB3bro2LjMID%2FzMEGOqUBWxtlk60NxWVaF1T95FIQVHzfkx4GZpRuhr7vYfaydJbvSFWkQUKp0E9S7Vlu96ZT7f8XysRs1wkycrfm5J5WdZFCZqVqhh167U0cvAOLRizKJ3p0G8YzkLMCDzoNtMTselmpgFfrKTw2YxZRcf01wWBvLvQchxvUPE5K4hMjmLhJCi9%2BoRkm3PM8TpZaGVLv4HQbJHWHfq%2FfiPx%2B0Vhfpu0dLspX&X-Amz-Signature=66ae426ccc71bffa08ce561953b0f0032d32b4459348bd2c49f619cee4865579&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUJRLT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFU9vl%2B%2BVgmkQFr7O3EodKARJUwvCOUcYYFKZKLQRb%2B%2FAiEA1DxP6QKVxHjF9JcaUFDHV6w6xuKKhP23Th3cm6amNHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKhjeVpRbqB087kRnyrcA2jzkcExFV7uCVevAdyDv0UcI39pjGUjwwNQWE30k2MfQZrjVWQyzFJxE9xxG0V60cbK8SKsKE16hrmMYc%2BzK%2Buo1nhsbV%2Ful4Fivrz1uZUOAAA3eDbsoU4mKGSNCUcBzzKFma7x91NiUBgnjzadgV26evnA%2BEtzXOcaqNTBJWE0tgL4uV%2FTYKUeVdgJkJplT6Q7ER8l2mVggvLCvhTm7opdF8zv4u%2BZGYBwgO7YuxJAJVJsJrfpWFpI4vFNfBmY4AzhM5sqq8rJZl%2BxhVnBvgtnXZJ7aDvfFB2hvP6LxEAbP7kfHftefQUAreY4jSVmEF2JM2XpMDpBozB18gwuPBgl0qkSj1AuzklqZVBaPIO3r8ZTz2r7JGIISx55WFZE07rfJ5k%2F1rS50WO3vaMi5QtDZ3URU7JPuHOlBJ1tZLi6VbxYmLPrqbnA%2F99zTanyOpgZy7CHQRG5eihCSRp7L9vNPb40bc%2B71c2e1l0w2v%2BZvTw28jqMF2ctwM99d0YjKXqbhdUT7slib1MB84BgsDf3R45ZA1kXkivp9Z3ocz1WKxnlnAKcBDeOcnhNuRAl89XmYYG6WbKDiLZ%2BagrwTRGtGhedgHz2BcsQRx%2B4aqyMTHsmDUQtB3bro2LjMID%2FzMEGOqUBWxtlk60NxWVaF1T95FIQVHzfkx4GZpRuhr7vYfaydJbvSFWkQUKp0E9S7Vlu96ZT7f8XysRs1wkycrfm5J5WdZFCZqVqhh167U0cvAOLRizKJ3p0G8YzkLMCDzoNtMTselmpgFfrKTw2YxZRcf01wWBvLvQchxvUPE5K4hMjmLhJCi9%2BoRkm3PM8TpZaGVLv4HQbJHWHfq%2FfiPx%2B0Vhfpu0dLspX&X-Amz-Signature=86c0302fb4ec8db5322ec7398eeb8cf07115511a43e16c87379c16f64e990135&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUJRLT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFU9vl%2B%2BVgmkQFr7O3EodKARJUwvCOUcYYFKZKLQRb%2B%2FAiEA1DxP6QKVxHjF9JcaUFDHV6w6xuKKhP23Th3cm6amNHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKhjeVpRbqB087kRnyrcA2jzkcExFV7uCVevAdyDv0UcI39pjGUjwwNQWE30k2MfQZrjVWQyzFJxE9xxG0V60cbK8SKsKE16hrmMYc%2BzK%2Buo1nhsbV%2Ful4Fivrz1uZUOAAA3eDbsoU4mKGSNCUcBzzKFma7x91NiUBgnjzadgV26evnA%2BEtzXOcaqNTBJWE0tgL4uV%2FTYKUeVdgJkJplT6Q7ER8l2mVggvLCvhTm7opdF8zv4u%2BZGYBwgO7YuxJAJVJsJrfpWFpI4vFNfBmY4AzhM5sqq8rJZl%2BxhVnBvgtnXZJ7aDvfFB2hvP6LxEAbP7kfHftefQUAreY4jSVmEF2JM2XpMDpBozB18gwuPBgl0qkSj1AuzklqZVBaPIO3r8ZTz2r7JGIISx55WFZE07rfJ5k%2F1rS50WO3vaMi5QtDZ3URU7JPuHOlBJ1tZLi6VbxYmLPrqbnA%2F99zTanyOpgZy7CHQRG5eihCSRp7L9vNPb40bc%2B71c2e1l0w2v%2BZvTw28jqMF2ctwM99d0YjKXqbhdUT7slib1MB84BgsDf3R45ZA1kXkivp9Z3ocz1WKxnlnAKcBDeOcnhNuRAl89XmYYG6WbKDiLZ%2BagrwTRGtGhedgHz2BcsQRx%2B4aqyMTHsmDUQtB3bro2LjMID%2FzMEGOqUBWxtlk60NxWVaF1T95FIQVHzfkx4GZpRuhr7vYfaydJbvSFWkQUKp0E9S7Vlu96ZT7f8XysRs1wkycrfm5J5WdZFCZqVqhh167U0cvAOLRizKJ3p0G8YzkLMCDzoNtMTselmpgFfrKTw2YxZRcf01wWBvLvQchxvUPE5K4hMjmLhJCi9%2BoRkm3PM8TpZaGVLv4HQbJHWHfq%2FfiPx%2B0Vhfpu0dLspX&X-Amz-Signature=ded548a37182b40acbb8dc4bcfa0725d90def3f866c0534c28fecb6e5b177176&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUJRLT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFU9vl%2B%2BVgmkQFr7O3EodKARJUwvCOUcYYFKZKLQRb%2B%2FAiEA1DxP6QKVxHjF9JcaUFDHV6w6xuKKhP23Th3cm6amNHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKhjeVpRbqB087kRnyrcA2jzkcExFV7uCVevAdyDv0UcI39pjGUjwwNQWE30k2MfQZrjVWQyzFJxE9xxG0V60cbK8SKsKE16hrmMYc%2BzK%2Buo1nhsbV%2Ful4Fivrz1uZUOAAA3eDbsoU4mKGSNCUcBzzKFma7x91NiUBgnjzadgV26evnA%2BEtzXOcaqNTBJWE0tgL4uV%2FTYKUeVdgJkJplT6Q7ER8l2mVggvLCvhTm7opdF8zv4u%2BZGYBwgO7YuxJAJVJsJrfpWFpI4vFNfBmY4AzhM5sqq8rJZl%2BxhVnBvgtnXZJ7aDvfFB2hvP6LxEAbP7kfHftefQUAreY4jSVmEF2JM2XpMDpBozB18gwuPBgl0qkSj1AuzklqZVBaPIO3r8ZTz2r7JGIISx55WFZE07rfJ5k%2F1rS50WO3vaMi5QtDZ3URU7JPuHOlBJ1tZLi6VbxYmLPrqbnA%2F99zTanyOpgZy7CHQRG5eihCSRp7L9vNPb40bc%2B71c2e1l0w2v%2BZvTw28jqMF2ctwM99d0YjKXqbhdUT7slib1MB84BgsDf3R45ZA1kXkivp9Z3ocz1WKxnlnAKcBDeOcnhNuRAl89XmYYG6WbKDiLZ%2BagrwTRGtGhedgHz2BcsQRx%2B4aqyMTHsmDUQtB3bro2LjMID%2FzMEGOqUBWxtlk60NxWVaF1T95FIQVHzfkx4GZpRuhr7vYfaydJbvSFWkQUKp0E9S7Vlu96ZT7f8XysRs1wkycrfm5J5WdZFCZqVqhh167U0cvAOLRizKJ3p0G8YzkLMCDzoNtMTselmpgFfrKTw2YxZRcf01wWBvLvQchxvUPE5K4hMjmLhJCi9%2BoRkm3PM8TpZaGVLv4HQbJHWHfq%2FfiPx%2B0Vhfpu0dLspX&X-Amz-Signature=fabd43f08fddc93cfa8fc2b8dbbb4d41414e814447244e87d4db22041989beb8&X-Amz-SignedHeaders=host&x-id=GetObject)
