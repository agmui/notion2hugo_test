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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2OYIUI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX8lRXt5kx3kmouvUeOGfOXFOJKy%2FBSrP1R%2FxsQ1lfgIgPNqbQCcJd2r878ZTlSWDJ%2FN4YUkliHnBpDnZ7%2B5BvQQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYvOVJ3Uv2AuqhAJCrcAwTgsJiOxFuce%2B14iY9Zo97Ee56uFe%2BqDM8ELjya%2B1Oox2VGLyInC48Zejagl9D4efoRXMgubUOmmPrzZv0l6lIdbYXOXqLnPVC92RCjXIRPvjrbx%2B2OwO410v5X1j7lxfQK5b9qTaV04Lbe2CYuZK67kSNKtNeOoWYIrDuU0dnyG3YEoXEva9VPRqAhlcK0peVj6ff4N7zFy6%2FpvLeE7SbAQ3RPH9hDRKw83OCBUwexM4iGsz3zaSVC4qwK7dljqAHlUHQgGR0fI5UCXWlwaPjrjZJu8iNrSid3R%2FUl20nE%2FyKa1I7mvGOUkGeMGT%2BR3KLthbXbn%2FPipzi1MgiFcSrZ2uX1P1yOFtmEs%2B37h97lP53KzIn%2BlBm%2F90HKMSwLWfcpV%2BrSQv8CYPQK29%2BmqNrsfynYPyjmeL7lWZ8BMbo2GFA3M%2FIAUQMYd6kzzJURmbnjGNxaNLRhpjUp0PhzLVUZ9RQ%2FjHR2ICsy9VGuvaofhphO%2FeLInWKPff%2FaRHVj2rjVu4%2BmdYisIAIUL%2FUdkySWCR3saxHVApBZ4oC3dxEBe%2B%2BNMEmie64BrOkaMcaJ66l0q3l8V7t7uNH75vjal68d1%2FNW647rzOQpBWmRJqws8YGWI%2BKNDdvz2IJdMP6UgsMGOqUBpqx4R5Jd2MXB%2FRqzcCoKsH2dzgxaJmzIQdXVd5E044BlY%2BXtlgnO9pL5S2WnMIumOfKT21pI9PZ9NlS8KuiPiWUHU5oi1530o8ZUrj0tiFDZz8htVzuAxxqkmm%2FN8UL%2FLkhr%2F57BZ5iKBjJBzuL73zQ4gv%2FtIzlFlKolyTRqI8YugZGDopb89ZKPuKpR%2FVw9UW3wk5ThfZzuDyLntTMGsxUJVTmD&X-Amz-Signature=06c5b6f40ef8d21166c0d76b776e3547fc8c4f8e6fba4878c3382833be8da8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2OYIUI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX8lRXt5kx3kmouvUeOGfOXFOJKy%2FBSrP1R%2FxsQ1lfgIgPNqbQCcJd2r878ZTlSWDJ%2FN4YUkliHnBpDnZ7%2B5BvQQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYvOVJ3Uv2AuqhAJCrcAwTgsJiOxFuce%2B14iY9Zo97Ee56uFe%2BqDM8ELjya%2B1Oox2VGLyInC48Zejagl9D4efoRXMgubUOmmPrzZv0l6lIdbYXOXqLnPVC92RCjXIRPvjrbx%2B2OwO410v5X1j7lxfQK5b9qTaV04Lbe2CYuZK67kSNKtNeOoWYIrDuU0dnyG3YEoXEva9VPRqAhlcK0peVj6ff4N7zFy6%2FpvLeE7SbAQ3RPH9hDRKw83OCBUwexM4iGsz3zaSVC4qwK7dljqAHlUHQgGR0fI5UCXWlwaPjrjZJu8iNrSid3R%2FUl20nE%2FyKa1I7mvGOUkGeMGT%2BR3KLthbXbn%2FPipzi1MgiFcSrZ2uX1P1yOFtmEs%2B37h97lP53KzIn%2BlBm%2F90HKMSwLWfcpV%2BrSQv8CYPQK29%2BmqNrsfynYPyjmeL7lWZ8BMbo2GFA3M%2FIAUQMYd6kzzJURmbnjGNxaNLRhpjUp0PhzLVUZ9RQ%2FjHR2ICsy9VGuvaofhphO%2FeLInWKPff%2FaRHVj2rjVu4%2BmdYisIAIUL%2FUdkySWCR3saxHVApBZ4oC3dxEBe%2B%2BNMEmie64BrOkaMcaJ66l0q3l8V7t7uNH75vjal68d1%2FNW647rzOQpBWmRJqws8YGWI%2BKNDdvz2IJdMP6UgsMGOqUBpqx4R5Jd2MXB%2FRqzcCoKsH2dzgxaJmzIQdXVd5E044BlY%2BXtlgnO9pL5S2WnMIumOfKT21pI9PZ9NlS8KuiPiWUHU5oi1530o8ZUrj0tiFDZz8htVzuAxxqkmm%2FN8UL%2FLkhr%2F57BZ5iKBjJBzuL73zQ4gv%2FtIzlFlKolyTRqI8YugZGDopb89ZKPuKpR%2FVw9UW3wk5ThfZzuDyLntTMGsxUJVTmD&X-Amz-Signature=1080eb3c89773e3c2453aa8f41f1e7e68bf2748fc0bacc1cfe0bd9ef72e905b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2OYIUI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX8lRXt5kx3kmouvUeOGfOXFOJKy%2FBSrP1R%2FxsQ1lfgIgPNqbQCcJd2r878ZTlSWDJ%2FN4YUkliHnBpDnZ7%2B5BvQQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYvOVJ3Uv2AuqhAJCrcAwTgsJiOxFuce%2B14iY9Zo97Ee56uFe%2BqDM8ELjya%2B1Oox2VGLyInC48Zejagl9D4efoRXMgubUOmmPrzZv0l6lIdbYXOXqLnPVC92RCjXIRPvjrbx%2B2OwO410v5X1j7lxfQK5b9qTaV04Lbe2CYuZK67kSNKtNeOoWYIrDuU0dnyG3YEoXEva9VPRqAhlcK0peVj6ff4N7zFy6%2FpvLeE7SbAQ3RPH9hDRKw83OCBUwexM4iGsz3zaSVC4qwK7dljqAHlUHQgGR0fI5UCXWlwaPjrjZJu8iNrSid3R%2FUl20nE%2FyKa1I7mvGOUkGeMGT%2BR3KLthbXbn%2FPipzi1MgiFcSrZ2uX1P1yOFtmEs%2B37h97lP53KzIn%2BlBm%2F90HKMSwLWfcpV%2BrSQv8CYPQK29%2BmqNrsfynYPyjmeL7lWZ8BMbo2GFA3M%2FIAUQMYd6kzzJURmbnjGNxaNLRhpjUp0PhzLVUZ9RQ%2FjHR2ICsy9VGuvaofhphO%2FeLInWKPff%2FaRHVj2rjVu4%2BmdYisIAIUL%2FUdkySWCR3saxHVApBZ4oC3dxEBe%2B%2BNMEmie64BrOkaMcaJ66l0q3l8V7t7uNH75vjal68d1%2FNW647rzOQpBWmRJqws8YGWI%2BKNDdvz2IJdMP6UgsMGOqUBpqx4R5Jd2MXB%2FRqzcCoKsH2dzgxaJmzIQdXVd5E044BlY%2BXtlgnO9pL5S2WnMIumOfKT21pI9PZ9NlS8KuiPiWUHU5oi1530o8ZUrj0tiFDZz8htVzuAxxqkmm%2FN8UL%2FLkhr%2F57BZ5iKBjJBzuL73zQ4gv%2FtIzlFlKolyTRqI8YugZGDopb89ZKPuKpR%2FVw9UW3wk5ThfZzuDyLntTMGsxUJVTmD&X-Amz-Signature=25a93b619378bd23b035e64535ea449f96dc06a4b0237d75795038838a77db0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2OYIUI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX8lRXt5kx3kmouvUeOGfOXFOJKy%2FBSrP1R%2FxsQ1lfgIgPNqbQCcJd2r878ZTlSWDJ%2FN4YUkliHnBpDnZ7%2B5BvQQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYvOVJ3Uv2AuqhAJCrcAwTgsJiOxFuce%2B14iY9Zo97Ee56uFe%2BqDM8ELjya%2B1Oox2VGLyInC48Zejagl9D4efoRXMgubUOmmPrzZv0l6lIdbYXOXqLnPVC92RCjXIRPvjrbx%2B2OwO410v5X1j7lxfQK5b9qTaV04Lbe2CYuZK67kSNKtNeOoWYIrDuU0dnyG3YEoXEva9VPRqAhlcK0peVj6ff4N7zFy6%2FpvLeE7SbAQ3RPH9hDRKw83OCBUwexM4iGsz3zaSVC4qwK7dljqAHlUHQgGR0fI5UCXWlwaPjrjZJu8iNrSid3R%2FUl20nE%2FyKa1I7mvGOUkGeMGT%2BR3KLthbXbn%2FPipzi1MgiFcSrZ2uX1P1yOFtmEs%2B37h97lP53KzIn%2BlBm%2F90HKMSwLWfcpV%2BrSQv8CYPQK29%2BmqNrsfynYPyjmeL7lWZ8BMbo2GFA3M%2FIAUQMYd6kzzJURmbnjGNxaNLRhpjUp0PhzLVUZ9RQ%2FjHR2ICsy9VGuvaofhphO%2FeLInWKPff%2FaRHVj2rjVu4%2BmdYisIAIUL%2FUdkySWCR3saxHVApBZ4oC3dxEBe%2B%2BNMEmie64BrOkaMcaJ66l0q3l8V7t7uNH75vjal68d1%2FNW647rzOQpBWmRJqws8YGWI%2BKNDdvz2IJdMP6UgsMGOqUBpqx4R5Jd2MXB%2FRqzcCoKsH2dzgxaJmzIQdXVd5E044BlY%2BXtlgnO9pL5S2WnMIumOfKT21pI9PZ9NlS8KuiPiWUHU5oi1530o8ZUrj0tiFDZz8htVzuAxxqkmm%2FN8UL%2FLkhr%2F57BZ5iKBjJBzuL73zQ4gv%2FtIzlFlKolyTRqI8YugZGDopb89ZKPuKpR%2FVw9UW3wk5ThfZzuDyLntTMGsxUJVTmD&X-Amz-Signature=02c883530946e7d20fd267975baace7139a8d2cee4917d40b29d246dc6681710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2OYIUI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX8lRXt5kx3kmouvUeOGfOXFOJKy%2FBSrP1R%2FxsQ1lfgIgPNqbQCcJd2r878ZTlSWDJ%2FN4YUkliHnBpDnZ7%2B5BvQQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYvOVJ3Uv2AuqhAJCrcAwTgsJiOxFuce%2B14iY9Zo97Ee56uFe%2BqDM8ELjya%2B1Oox2VGLyInC48Zejagl9D4efoRXMgubUOmmPrzZv0l6lIdbYXOXqLnPVC92RCjXIRPvjrbx%2B2OwO410v5X1j7lxfQK5b9qTaV04Lbe2CYuZK67kSNKtNeOoWYIrDuU0dnyG3YEoXEva9VPRqAhlcK0peVj6ff4N7zFy6%2FpvLeE7SbAQ3RPH9hDRKw83OCBUwexM4iGsz3zaSVC4qwK7dljqAHlUHQgGR0fI5UCXWlwaPjrjZJu8iNrSid3R%2FUl20nE%2FyKa1I7mvGOUkGeMGT%2BR3KLthbXbn%2FPipzi1MgiFcSrZ2uX1P1yOFtmEs%2B37h97lP53KzIn%2BlBm%2F90HKMSwLWfcpV%2BrSQv8CYPQK29%2BmqNrsfynYPyjmeL7lWZ8BMbo2GFA3M%2FIAUQMYd6kzzJURmbnjGNxaNLRhpjUp0PhzLVUZ9RQ%2FjHR2ICsy9VGuvaofhphO%2FeLInWKPff%2FaRHVj2rjVu4%2BmdYisIAIUL%2FUdkySWCR3saxHVApBZ4oC3dxEBe%2B%2BNMEmie64BrOkaMcaJ66l0q3l8V7t7uNH75vjal68d1%2FNW647rzOQpBWmRJqws8YGWI%2BKNDdvz2IJdMP6UgsMGOqUBpqx4R5Jd2MXB%2FRqzcCoKsH2dzgxaJmzIQdXVd5E044BlY%2BXtlgnO9pL5S2WnMIumOfKT21pI9PZ9NlS8KuiPiWUHU5oi1530o8ZUrj0tiFDZz8htVzuAxxqkmm%2FN8UL%2FLkhr%2F57BZ5iKBjJBzuL73zQ4gv%2FtIzlFlKolyTRqI8YugZGDopb89ZKPuKpR%2FVw9UW3wk5ThfZzuDyLntTMGsxUJVTmD&X-Amz-Signature=71b87db25ad2adb22b9cd675646ca3c5459c763d98e2538a59215350e2326f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2OYIUI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX8lRXt5kx3kmouvUeOGfOXFOJKy%2FBSrP1R%2FxsQ1lfgIgPNqbQCcJd2r878ZTlSWDJ%2FN4YUkliHnBpDnZ7%2B5BvQQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYvOVJ3Uv2AuqhAJCrcAwTgsJiOxFuce%2B14iY9Zo97Ee56uFe%2BqDM8ELjya%2B1Oox2VGLyInC48Zejagl9D4efoRXMgubUOmmPrzZv0l6lIdbYXOXqLnPVC92RCjXIRPvjrbx%2B2OwO410v5X1j7lxfQK5b9qTaV04Lbe2CYuZK67kSNKtNeOoWYIrDuU0dnyG3YEoXEva9VPRqAhlcK0peVj6ff4N7zFy6%2FpvLeE7SbAQ3RPH9hDRKw83OCBUwexM4iGsz3zaSVC4qwK7dljqAHlUHQgGR0fI5UCXWlwaPjrjZJu8iNrSid3R%2FUl20nE%2FyKa1I7mvGOUkGeMGT%2BR3KLthbXbn%2FPipzi1MgiFcSrZ2uX1P1yOFtmEs%2B37h97lP53KzIn%2BlBm%2F90HKMSwLWfcpV%2BrSQv8CYPQK29%2BmqNrsfynYPyjmeL7lWZ8BMbo2GFA3M%2FIAUQMYd6kzzJURmbnjGNxaNLRhpjUp0PhzLVUZ9RQ%2FjHR2ICsy9VGuvaofhphO%2FeLInWKPff%2FaRHVj2rjVu4%2BmdYisIAIUL%2FUdkySWCR3saxHVApBZ4oC3dxEBe%2B%2BNMEmie64BrOkaMcaJ66l0q3l8V7t7uNH75vjal68d1%2FNW647rzOQpBWmRJqws8YGWI%2BKNDdvz2IJdMP6UgsMGOqUBpqx4R5Jd2MXB%2FRqzcCoKsH2dzgxaJmzIQdXVd5E044BlY%2BXtlgnO9pL5S2WnMIumOfKT21pI9PZ9NlS8KuiPiWUHU5oi1530o8ZUrj0tiFDZz8htVzuAxxqkmm%2FN8UL%2FLkhr%2F57BZ5iKBjJBzuL73zQ4gv%2FtIzlFlKolyTRqI8YugZGDopb89ZKPuKpR%2FVw9UW3wk5ThfZzuDyLntTMGsxUJVTmD&X-Amz-Signature=cefabf14e7a7f283956f3d67a7b65a3351412fe6e8f56d1315c59a032549dcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
