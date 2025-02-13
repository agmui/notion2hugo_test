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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPHB2C2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46WX05I14hAKLD56gJ%2BDHUTXSkaKyAKFs%2Fhm3ly8rwwIgD8Oq9v%2Ft9WVeHa1repuW5MiZzmdZ%2BJiHNYOodOqQWBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHDj%2BnUMfshff8YN8ircA1efhhAJmZCYwBJsnyganwH60Jui9z0aY0qIE0EQnydwhJrB%2BZR8%2ByxlJZYJv7ZQI6HiRNZZT34pTfa27ne3fhDiE6ah0%2FBKUkVRPvRuRB%2BJxDT9xS4g4CUFvl8E2I0HGp%2F754p%2FHzq3v7o0KHy7YQqj0VW%2FGwcJZIXiA3ChKEEZ5yiccJIGi3XDbt9YirLLRxcLZMlmzAZu07gixcYAXa8r2vAF7wfmPLH8hT7Srp9dgxrwYWpnmdKShbyJw3sD0yLgEKa%2FJRkhuh9YQHOC65KIik5Wy3BV3uJ1xRjvQxw4nVMWOxOILeHqAhtc9MaeMqsgYRVcJjwyCjILA7yIxEvO0jTXj7keIPL7lIpbLNFs2vf5s8%2BRZQvBcRwrZAqxFRCSSPisPyzY0Wf7fo2R%2B7U564UiQyraD3vscwMvakRWpYMmJpUL%2Bu7iZuqdCqVs5mw2IJRzNh276hv9riK%2FSge54mnORmKRJ%2FzugMuLNW0dC0WozuSnmjuF9fSJvMMMg4%2F7RmWlsud8kNGRTWHHFYso02KFEF25cjgGgw6XsrWTGPSSjR%2BENpVz3ee8EoIGoA0mc%2BIoEi4cwng45HTXa4yIzo9xU02HL0oXUDa1pEh0arM8aGkxzZH76zmRMP7Bt70GOqUB9T9ekFrISsvPAMz%2BAT2mmTAI5SZ84pEMOLyoWTneb88oZD1Q1IwQeoIHdvJ487KAmtyfoMhLD76E5wmhHLvh6VR0lXEHRihwvixy%2B3R9i%2F5OYsWyyFIaPfbZvh4YQ%2BBC3fX4E4CuEJewBXpr0D1QmHz6VGIDkBxCSB5c9FTCnSZ7RxH%2Bw1rEIrwXC2XYcp4rm2pdg1QQ1VSj1SQnLCurD%2FxiLuzi&X-Amz-Signature=5360e13c8f92f8b86d3329a3a6d419cb99635e941059911d2fde650794e2ccd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPHB2C2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46WX05I14hAKLD56gJ%2BDHUTXSkaKyAKFs%2Fhm3ly8rwwIgD8Oq9v%2Ft9WVeHa1repuW5MiZzmdZ%2BJiHNYOodOqQWBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHDj%2BnUMfshff8YN8ircA1efhhAJmZCYwBJsnyganwH60Jui9z0aY0qIE0EQnydwhJrB%2BZR8%2ByxlJZYJv7ZQI6HiRNZZT34pTfa27ne3fhDiE6ah0%2FBKUkVRPvRuRB%2BJxDT9xS4g4CUFvl8E2I0HGp%2F754p%2FHzq3v7o0KHy7YQqj0VW%2FGwcJZIXiA3ChKEEZ5yiccJIGi3XDbt9YirLLRxcLZMlmzAZu07gixcYAXa8r2vAF7wfmPLH8hT7Srp9dgxrwYWpnmdKShbyJw3sD0yLgEKa%2FJRkhuh9YQHOC65KIik5Wy3BV3uJ1xRjvQxw4nVMWOxOILeHqAhtc9MaeMqsgYRVcJjwyCjILA7yIxEvO0jTXj7keIPL7lIpbLNFs2vf5s8%2BRZQvBcRwrZAqxFRCSSPisPyzY0Wf7fo2R%2B7U564UiQyraD3vscwMvakRWpYMmJpUL%2Bu7iZuqdCqVs5mw2IJRzNh276hv9riK%2FSge54mnORmKRJ%2FzugMuLNW0dC0WozuSnmjuF9fSJvMMMg4%2F7RmWlsud8kNGRTWHHFYso02KFEF25cjgGgw6XsrWTGPSSjR%2BENpVz3ee8EoIGoA0mc%2BIoEi4cwng45HTXa4yIzo9xU02HL0oXUDa1pEh0arM8aGkxzZH76zmRMP7Bt70GOqUB9T9ekFrISsvPAMz%2BAT2mmTAI5SZ84pEMOLyoWTneb88oZD1Q1IwQeoIHdvJ487KAmtyfoMhLD76E5wmhHLvh6VR0lXEHRihwvixy%2B3R9i%2F5OYsWyyFIaPfbZvh4YQ%2BBC3fX4E4CuEJewBXpr0D1QmHz6VGIDkBxCSB5c9FTCnSZ7RxH%2Bw1rEIrwXC2XYcp4rm2pdg1QQ1VSj1SQnLCurD%2FxiLuzi&X-Amz-Signature=505bedee71a1b1e14bf504b3ab532a315918c4e5ccad107e335d8d49585eb708&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPHB2C2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46WX05I14hAKLD56gJ%2BDHUTXSkaKyAKFs%2Fhm3ly8rwwIgD8Oq9v%2Ft9WVeHa1repuW5MiZzmdZ%2BJiHNYOodOqQWBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHDj%2BnUMfshff8YN8ircA1efhhAJmZCYwBJsnyganwH60Jui9z0aY0qIE0EQnydwhJrB%2BZR8%2ByxlJZYJv7ZQI6HiRNZZT34pTfa27ne3fhDiE6ah0%2FBKUkVRPvRuRB%2BJxDT9xS4g4CUFvl8E2I0HGp%2F754p%2FHzq3v7o0KHy7YQqj0VW%2FGwcJZIXiA3ChKEEZ5yiccJIGi3XDbt9YirLLRxcLZMlmzAZu07gixcYAXa8r2vAF7wfmPLH8hT7Srp9dgxrwYWpnmdKShbyJw3sD0yLgEKa%2FJRkhuh9YQHOC65KIik5Wy3BV3uJ1xRjvQxw4nVMWOxOILeHqAhtc9MaeMqsgYRVcJjwyCjILA7yIxEvO0jTXj7keIPL7lIpbLNFs2vf5s8%2BRZQvBcRwrZAqxFRCSSPisPyzY0Wf7fo2R%2B7U564UiQyraD3vscwMvakRWpYMmJpUL%2Bu7iZuqdCqVs5mw2IJRzNh276hv9riK%2FSge54mnORmKRJ%2FzugMuLNW0dC0WozuSnmjuF9fSJvMMMg4%2F7RmWlsud8kNGRTWHHFYso02KFEF25cjgGgw6XsrWTGPSSjR%2BENpVz3ee8EoIGoA0mc%2BIoEi4cwng45HTXa4yIzo9xU02HL0oXUDa1pEh0arM8aGkxzZH76zmRMP7Bt70GOqUB9T9ekFrISsvPAMz%2BAT2mmTAI5SZ84pEMOLyoWTneb88oZD1Q1IwQeoIHdvJ487KAmtyfoMhLD76E5wmhHLvh6VR0lXEHRihwvixy%2B3R9i%2F5OYsWyyFIaPfbZvh4YQ%2BBC3fX4E4CuEJewBXpr0D1QmHz6VGIDkBxCSB5c9FTCnSZ7RxH%2Bw1rEIrwXC2XYcp4rm2pdg1QQ1VSj1SQnLCurD%2FxiLuzi&X-Amz-Signature=a4b4ee5bd423f72c30b29af1b83a10dab83214da557b4c61e35cd94e93be2d65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPHB2C2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46WX05I14hAKLD56gJ%2BDHUTXSkaKyAKFs%2Fhm3ly8rwwIgD8Oq9v%2Ft9WVeHa1repuW5MiZzmdZ%2BJiHNYOodOqQWBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHDj%2BnUMfshff8YN8ircA1efhhAJmZCYwBJsnyganwH60Jui9z0aY0qIE0EQnydwhJrB%2BZR8%2ByxlJZYJv7ZQI6HiRNZZT34pTfa27ne3fhDiE6ah0%2FBKUkVRPvRuRB%2BJxDT9xS4g4CUFvl8E2I0HGp%2F754p%2FHzq3v7o0KHy7YQqj0VW%2FGwcJZIXiA3ChKEEZ5yiccJIGi3XDbt9YirLLRxcLZMlmzAZu07gixcYAXa8r2vAF7wfmPLH8hT7Srp9dgxrwYWpnmdKShbyJw3sD0yLgEKa%2FJRkhuh9YQHOC65KIik5Wy3BV3uJ1xRjvQxw4nVMWOxOILeHqAhtc9MaeMqsgYRVcJjwyCjILA7yIxEvO0jTXj7keIPL7lIpbLNFs2vf5s8%2BRZQvBcRwrZAqxFRCSSPisPyzY0Wf7fo2R%2B7U564UiQyraD3vscwMvakRWpYMmJpUL%2Bu7iZuqdCqVs5mw2IJRzNh276hv9riK%2FSge54mnORmKRJ%2FzugMuLNW0dC0WozuSnmjuF9fSJvMMMg4%2F7RmWlsud8kNGRTWHHFYso02KFEF25cjgGgw6XsrWTGPSSjR%2BENpVz3ee8EoIGoA0mc%2BIoEi4cwng45HTXa4yIzo9xU02HL0oXUDa1pEh0arM8aGkxzZH76zmRMP7Bt70GOqUB9T9ekFrISsvPAMz%2BAT2mmTAI5SZ84pEMOLyoWTneb88oZD1Q1IwQeoIHdvJ487KAmtyfoMhLD76E5wmhHLvh6VR0lXEHRihwvixy%2B3R9i%2F5OYsWyyFIaPfbZvh4YQ%2BBC3fX4E4CuEJewBXpr0D1QmHz6VGIDkBxCSB5c9FTCnSZ7RxH%2Bw1rEIrwXC2XYcp4rm2pdg1QQ1VSj1SQnLCurD%2FxiLuzi&X-Amz-Signature=fc940e3ef3770c768305cde84febb22a44a41b1ae862cb47e0ce2da5427fd205&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPHB2C2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46WX05I14hAKLD56gJ%2BDHUTXSkaKyAKFs%2Fhm3ly8rwwIgD8Oq9v%2Ft9WVeHa1repuW5MiZzmdZ%2BJiHNYOodOqQWBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHDj%2BnUMfshff8YN8ircA1efhhAJmZCYwBJsnyganwH60Jui9z0aY0qIE0EQnydwhJrB%2BZR8%2ByxlJZYJv7ZQI6HiRNZZT34pTfa27ne3fhDiE6ah0%2FBKUkVRPvRuRB%2BJxDT9xS4g4CUFvl8E2I0HGp%2F754p%2FHzq3v7o0KHy7YQqj0VW%2FGwcJZIXiA3ChKEEZ5yiccJIGi3XDbt9YirLLRxcLZMlmzAZu07gixcYAXa8r2vAF7wfmPLH8hT7Srp9dgxrwYWpnmdKShbyJw3sD0yLgEKa%2FJRkhuh9YQHOC65KIik5Wy3BV3uJ1xRjvQxw4nVMWOxOILeHqAhtc9MaeMqsgYRVcJjwyCjILA7yIxEvO0jTXj7keIPL7lIpbLNFs2vf5s8%2BRZQvBcRwrZAqxFRCSSPisPyzY0Wf7fo2R%2B7U564UiQyraD3vscwMvakRWpYMmJpUL%2Bu7iZuqdCqVs5mw2IJRzNh276hv9riK%2FSge54mnORmKRJ%2FzugMuLNW0dC0WozuSnmjuF9fSJvMMMg4%2F7RmWlsud8kNGRTWHHFYso02KFEF25cjgGgw6XsrWTGPSSjR%2BENpVz3ee8EoIGoA0mc%2BIoEi4cwng45HTXa4yIzo9xU02HL0oXUDa1pEh0arM8aGkxzZH76zmRMP7Bt70GOqUB9T9ekFrISsvPAMz%2BAT2mmTAI5SZ84pEMOLyoWTneb88oZD1Q1IwQeoIHdvJ487KAmtyfoMhLD76E5wmhHLvh6VR0lXEHRihwvixy%2B3R9i%2F5OYsWyyFIaPfbZvh4YQ%2BBC3fX4E4CuEJewBXpr0D1QmHz6VGIDkBxCSB5c9FTCnSZ7RxH%2Bw1rEIrwXC2XYcp4rm2pdg1QQ1VSj1SQnLCurD%2FxiLuzi&X-Amz-Signature=aecdf8712baec5fd8cfa7ebcd3da3d30eaa833dac1e3a628885b279cd2b13b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHPHB2C2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46WX05I14hAKLD56gJ%2BDHUTXSkaKyAKFs%2Fhm3ly8rwwIgD8Oq9v%2Ft9WVeHa1repuW5MiZzmdZ%2BJiHNYOodOqQWBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHDj%2BnUMfshff8YN8ircA1efhhAJmZCYwBJsnyganwH60Jui9z0aY0qIE0EQnydwhJrB%2BZR8%2ByxlJZYJv7ZQI6HiRNZZT34pTfa27ne3fhDiE6ah0%2FBKUkVRPvRuRB%2BJxDT9xS4g4CUFvl8E2I0HGp%2F754p%2FHzq3v7o0KHy7YQqj0VW%2FGwcJZIXiA3ChKEEZ5yiccJIGi3XDbt9YirLLRxcLZMlmzAZu07gixcYAXa8r2vAF7wfmPLH8hT7Srp9dgxrwYWpnmdKShbyJw3sD0yLgEKa%2FJRkhuh9YQHOC65KIik5Wy3BV3uJ1xRjvQxw4nVMWOxOILeHqAhtc9MaeMqsgYRVcJjwyCjILA7yIxEvO0jTXj7keIPL7lIpbLNFs2vf5s8%2BRZQvBcRwrZAqxFRCSSPisPyzY0Wf7fo2R%2B7U564UiQyraD3vscwMvakRWpYMmJpUL%2Bu7iZuqdCqVs5mw2IJRzNh276hv9riK%2FSge54mnORmKRJ%2FzugMuLNW0dC0WozuSnmjuF9fSJvMMMg4%2F7RmWlsud8kNGRTWHHFYso02KFEF25cjgGgw6XsrWTGPSSjR%2BENpVz3ee8EoIGoA0mc%2BIoEi4cwng45HTXa4yIzo9xU02HL0oXUDa1pEh0arM8aGkxzZH76zmRMP7Bt70GOqUB9T9ekFrISsvPAMz%2BAT2mmTAI5SZ84pEMOLyoWTneb88oZD1Q1IwQeoIHdvJ487KAmtyfoMhLD76E5wmhHLvh6VR0lXEHRihwvixy%2B3R9i%2F5OYsWyyFIaPfbZvh4YQ%2BBC3fX4E4CuEJewBXpr0D1QmHz6VGIDkBxCSB5c9FTCnSZ7RxH%2Bw1rEIrwXC2XYcp4rm2pdg1QQ1VSj1SQnLCurD%2FxiLuzi&X-Amz-Signature=34d74b71291140bb060b137fe74a884a303c7ba3d0ec1b489f9e3eda78a21551&X-Amz-SignedHeaders=host&x-id=GetObject)
