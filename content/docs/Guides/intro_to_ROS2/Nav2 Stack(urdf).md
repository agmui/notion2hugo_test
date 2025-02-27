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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3NHA3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdt7yZCzgFEheM1J7x5%2Feh%2Fg2PHN7M1kVUKR10ar60ngIgCZk%2FZx%2FE23L%2B9bs6EokD4hFh%2BmshaVER%2FDA%2FmkU0nR0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHURbjP32pmVAR7z5SrcAx%2Bg146UiHwqIgyFJaAUU%2FF0tUhRIsrkNcNIla%2Btc4N6BMeJeV8LAeo98%2B5MO8iowxFNX6WX5zduFGjL4SPu0dp9J%2Bxt%2BU5DWwJVU7oKGEHUdi1J40i%2BLR7Vck20%2F%2FkViraclDx3xQHTS9cUHHDyXE0v2X5lP3O71y9wvmb3rYyW5sSvxZn6xjJqz%2FFmu0Z2BT5vYJNzTs9PwzD4Bfh%2FtzbH6kyNV0KiowahCZywGcarU1bYOBST2LEP%2BLPopS%2FQqeH%2BtCjsxSILMV%2Fby%2Ft8GHkc8IN92ydoshMMm0HJOGOb%2By9KZPtrpailzkktHig7TRepbcytp4SB%2Fp%2B49gQmeXeOw3LfDDaMV%2FyvzZeP5m7c11OqzUGViQBqqhfX7dFeu%2FW9UFkFqpDk%2FVzED3e9LirgshIwpTdW7PtMxs7j%2FC7WPlMRaSYZqHCSMf2RK%2BQTVpZpIYx%2BEblOLhbf3%2FuyPJ8OejB0VETekcyw9xSx8DuaIeOQKByOLcmp6GtedHEO0tODkE3gZ4DHEwH%2FZQ%2BpkIkXmQpwb%2BplqQl5uPOX3%2F4qh6OLeDTe9pHIMX4GhdfA0t7NfaSAD3cm20casXx919Drj5oWXU9Tz9FOEI%2BI%2Fs9czAaFXxj7KyOcG8hrMM3Mgb4GOqUB3sDBYIA%2FT%2F7BI5wtry6YmQqgWco1plStDop5lUBr5thR6OB1uWZJFIaPmGXQHcIdUlf942LwTovw7SYFLwDpNx3emJk5Clyn%2BfLSIchN0uoMVjpIJQf9kaQgFlaJaH59xkD02rcNCeKz3cFLrhZUEdNxzYN%2FKGbDN7Od57FMHy8bkDZCmV5%2FyZLKufQuEYrXAS6cbQA5CfuXjRcCw6ZLmLboFcJT&X-Amz-Signature=38cd961ed4458e702166770394a00a4a1093c48dd4cd6c3387436ddb24f2af90&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3NHA3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdt7yZCzgFEheM1J7x5%2Feh%2Fg2PHN7M1kVUKR10ar60ngIgCZk%2FZx%2FE23L%2B9bs6EokD4hFh%2BmshaVER%2FDA%2FmkU0nR0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHURbjP32pmVAR7z5SrcAx%2Bg146UiHwqIgyFJaAUU%2FF0tUhRIsrkNcNIla%2Btc4N6BMeJeV8LAeo98%2B5MO8iowxFNX6WX5zduFGjL4SPu0dp9J%2Bxt%2BU5DWwJVU7oKGEHUdi1J40i%2BLR7Vck20%2F%2FkViraclDx3xQHTS9cUHHDyXE0v2X5lP3O71y9wvmb3rYyW5sSvxZn6xjJqz%2FFmu0Z2BT5vYJNzTs9PwzD4Bfh%2FtzbH6kyNV0KiowahCZywGcarU1bYOBST2LEP%2BLPopS%2FQqeH%2BtCjsxSILMV%2Fby%2Ft8GHkc8IN92ydoshMMm0HJOGOb%2By9KZPtrpailzkktHig7TRepbcytp4SB%2Fp%2B49gQmeXeOw3LfDDaMV%2FyvzZeP5m7c11OqzUGViQBqqhfX7dFeu%2FW9UFkFqpDk%2FVzED3e9LirgshIwpTdW7PtMxs7j%2FC7WPlMRaSYZqHCSMf2RK%2BQTVpZpIYx%2BEblOLhbf3%2FuyPJ8OejB0VETekcyw9xSx8DuaIeOQKByOLcmp6GtedHEO0tODkE3gZ4DHEwH%2FZQ%2BpkIkXmQpwb%2BplqQl5uPOX3%2F4qh6OLeDTe9pHIMX4GhdfA0t7NfaSAD3cm20casXx919Drj5oWXU9Tz9FOEI%2BI%2Fs9czAaFXxj7KyOcG8hrMM3Mgb4GOqUB3sDBYIA%2FT%2F7BI5wtry6YmQqgWco1plStDop5lUBr5thR6OB1uWZJFIaPmGXQHcIdUlf942LwTovw7SYFLwDpNx3emJk5Clyn%2BfLSIchN0uoMVjpIJQf9kaQgFlaJaH59xkD02rcNCeKz3cFLrhZUEdNxzYN%2FKGbDN7Od57FMHy8bkDZCmV5%2FyZLKufQuEYrXAS6cbQA5CfuXjRcCw6ZLmLboFcJT&X-Amz-Signature=0b5a910caf865e6ffcfb8c7bbebe25c9ee82c0cd691e71d431b05ff97cc14ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3NHA3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdt7yZCzgFEheM1J7x5%2Feh%2Fg2PHN7M1kVUKR10ar60ngIgCZk%2FZx%2FE23L%2B9bs6EokD4hFh%2BmshaVER%2FDA%2FmkU0nR0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHURbjP32pmVAR7z5SrcAx%2Bg146UiHwqIgyFJaAUU%2FF0tUhRIsrkNcNIla%2Btc4N6BMeJeV8LAeo98%2B5MO8iowxFNX6WX5zduFGjL4SPu0dp9J%2Bxt%2BU5DWwJVU7oKGEHUdi1J40i%2BLR7Vck20%2F%2FkViraclDx3xQHTS9cUHHDyXE0v2X5lP3O71y9wvmb3rYyW5sSvxZn6xjJqz%2FFmu0Z2BT5vYJNzTs9PwzD4Bfh%2FtzbH6kyNV0KiowahCZywGcarU1bYOBST2LEP%2BLPopS%2FQqeH%2BtCjsxSILMV%2Fby%2Ft8GHkc8IN92ydoshMMm0HJOGOb%2By9KZPtrpailzkktHig7TRepbcytp4SB%2Fp%2B49gQmeXeOw3LfDDaMV%2FyvzZeP5m7c11OqzUGViQBqqhfX7dFeu%2FW9UFkFqpDk%2FVzED3e9LirgshIwpTdW7PtMxs7j%2FC7WPlMRaSYZqHCSMf2RK%2BQTVpZpIYx%2BEblOLhbf3%2FuyPJ8OejB0VETekcyw9xSx8DuaIeOQKByOLcmp6GtedHEO0tODkE3gZ4DHEwH%2FZQ%2BpkIkXmQpwb%2BplqQl5uPOX3%2F4qh6OLeDTe9pHIMX4GhdfA0t7NfaSAD3cm20casXx919Drj5oWXU9Tz9FOEI%2BI%2Fs9czAaFXxj7KyOcG8hrMM3Mgb4GOqUB3sDBYIA%2FT%2F7BI5wtry6YmQqgWco1plStDop5lUBr5thR6OB1uWZJFIaPmGXQHcIdUlf942LwTovw7SYFLwDpNx3emJk5Clyn%2BfLSIchN0uoMVjpIJQf9kaQgFlaJaH59xkD02rcNCeKz3cFLrhZUEdNxzYN%2FKGbDN7Od57FMHy8bkDZCmV5%2FyZLKufQuEYrXAS6cbQA5CfuXjRcCw6ZLmLboFcJT&X-Amz-Signature=ec09bf6acd58b6384a890a68f17a577dc460cafedd3db0f12fe0f6943f3062a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3NHA3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdt7yZCzgFEheM1J7x5%2Feh%2Fg2PHN7M1kVUKR10ar60ngIgCZk%2FZx%2FE23L%2B9bs6EokD4hFh%2BmshaVER%2FDA%2FmkU0nR0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHURbjP32pmVAR7z5SrcAx%2Bg146UiHwqIgyFJaAUU%2FF0tUhRIsrkNcNIla%2Btc4N6BMeJeV8LAeo98%2B5MO8iowxFNX6WX5zduFGjL4SPu0dp9J%2Bxt%2BU5DWwJVU7oKGEHUdi1J40i%2BLR7Vck20%2F%2FkViraclDx3xQHTS9cUHHDyXE0v2X5lP3O71y9wvmb3rYyW5sSvxZn6xjJqz%2FFmu0Z2BT5vYJNzTs9PwzD4Bfh%2FtzbH6kyNV0KiowahCZywGcarU1bYOBST2LEP%2BLPopS%2FQqeH%2BtCjsxSILMV%2Fby%2Ft8GHkc8IN92ydoshMMm0HJOGOb%2By9KZPtrpailzkktHig7TRepbcytp4SB%2Fp%2B49gQmeXeOw3LfDDaMV%2FyvzZeP5m7c11OqzUGViQBqqhfX7dFeu%2FW9UFkFqpDk%2FVzED3e9LirgshIwpTdW7PtMxs7j%2FC7WPlMRaSYZqHCSMf2RK%2BQTVpZpIYx%2BEblOLhbf3%2FuyPJ8OejB0VETekcyw9xSx8DuaIeOQKByOLcmp6GtedHEO0tODkE3gZ4DHEwH%2FZQ%2BpkIkXmQpwb%2BplqQl5uPOX3%2F4qh6OLeDTe9pHIMX4GhdfA0t7NfaSAD3cm20casXx919Drj5oWXU9Tz9FOEI%2BI%2Fs9czAaFXxj7KyOcG8hrMM3Mgb4GOqUB3sDBYIA%2FT%2F7BI5wtry6YmQqgWco1plStDop5lUBr5thR6OB1uWZJFIaPmGXQHcIdUlf942LwTovw7SYFLwDpNx3emJk5Clyn%2BfLSIchN0uoMVjpIJQf9kaQgFlaJaH59xkD02rcNCeKz3cFLrhZUEdNxzYN%2FKGbDN7Od57FMHy8bkDZCmV5%2FyZLKufQuEYrXAS6cbQA5CfuXjRcCw6ZLmLboFcJT&X-Amz-Signature=be47edc86cb40f4cd9619e89f35f901d2b4bbd8b1f6c33d28d85373371591243&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3NHA3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdt7yZCzgFEheM1J7x5%2Feh%2Fg2PHN7M1kVUKR10ar60ngIgCZk%2FZx%2FE23L%2B9bs6EokD4hFh%2BmshaVER%2FDA%2FmkU0nR0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHURbjP32pmVAR7z5SrcAx%2Bg146UiHwqIgyFJaAUU%2FF0tUhRIsrkNcNIla%2Btc4N6BMeJeV8LAeo98%2B5MO8iowxFNX6WX5zduFGjL4SPu0dp9J%2Bxt%2BU5DWwJVU7oKGEHUdi1J40i%2BLR7Vck20%2F%2FkViraclDx3xQHTS9cUHHDyXE0v2X5lP3O71y9wvmb3rYyW5sSvxZn6xjJqz%2FFmu0Z2BT5vYJNzTs9PwzD4Bfh%2FtzbH6kyNV0KiowahCZywGcarU1bYOBST2LEP%2BLPopS%2FQqeH%2BtCjsxSILMV%2Fby%2Ft8GHkc8IN92ydoshMMm0HJOGOb%2By9KZPtrpailzkktHig7TRepbcytp4SB%2Fp%2B49gQmeXeOw3LfDDaMV%2FyvzZeP5m7c11OqzUGViQBqqhfX7dFeu%2FW9UFkFqpDk%2FVzED3e9LirgshIwpTdW7PtMxs7j%2FC7WPlMRaSYZqHCSMf2RK%2BQTVpZpIYx%2BEblOLhbf3%2FuyPJ8OejB0VETekcyw9xSx8DuaIeOQKByOLcmp6GtedHEO0tODkE3gZ4DHEwH%2FZQ%2BpkIkXmQpwb%2BplqQl5uPOX3%2F4qh6OLeDTe9pHIMX4GhdfA0t7NfaSAD3cm20casXx919Drj5oWXU9Tz9FOEI%2BI%2Fs9czAaFXxj7KyOcG8hrMM3Mgb4GOqUB3sDBYIA%2FT%2F7BI5wtry6YmQqgWco1plStDop5lUBr5thR6OB1uWZJFIaPmGXQHcIdUlf942LwTovw7SYFLwDpNx3emJk5Clyn%2BfLSIchN0uoMVjpIJQf9kaQgFlaJaH59xkD02rcNCeKz3cFLrhZUEdNxzYN%2FKGbDN7Od57FMHy8bkDZCmV5%2FyZLKufQuEYrXAS6cbQA5CfuXjRcCw6ZLmLboFcJT&X-Amz-Signature=de00c795fc2764d95996bcc4fae20b244f80f300b0e5f0aee8aa99682d6fb4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3NHA3X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDdt7yZCzgFEheM1J7x5%2Feh%2Fg2PHN7M1kVUKR10ar60ngIgCZk%2FZx%2FE23L%2B9bs6EokD4hFh%2BmshaVER%2FDA%2FmkU0nR0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHURbjP32pmVAR7z5SrcAx%2Bg146UiHwqIgyFJaAUU%2FF0tUhRIsrkNcNIla%2Btc4N6BMeJeV8LAeo98%2B5MO8iowxFNX6WX5zduFGjL4SPu0dp9J%2Bxt%2BU5DWwJVU7oKGEHUdi1J40i%2BLR7Vck20%2F%2FkViraclDx3xQHTS9cUHHDyXE0v2X5lP3O71y9wvmb3rYyW5sSvxZn6xjJqz%2FFmu0Z2BT5vYJNzTs9PwzD4Bfh%2FtzbH6kyNV0KiowahCZywGcarU1bYOBST2LEP%2BLPopS%2FQqeH%2BtCjsxSILMV%2Fby%2Ft8GHkc8IN92ydoshMMm0HJOGOb%2By9KZPtrpailzkktHig7TRepbcytp4SB%2Fp%2B49gQmeXeOw3LfDDaMV%2FyvzZeP5m7c11OqzUGViQBqqhfX7dFeu%2FW9UFkFqpDk%2FVzED3e9LirgshIwpTdW7PtMxs7j%2FC7WPlMRaSYZqHCSMf2RK%2BQTVpZpIYx%2BEblOLhbf3%2FuyPJ8OejB0VETekcyw9xSx8DuaIeOQKByOLcmp6GtedHEO0tODkE3gZ4DHEwH%2FZQ%2BpkIkXmQpwb%2BplqQl5uPOX3%2F4qh6OLeDTe9pHIMX4GhdfA0t7NfaSAD3cm20casXx919Drj5oWXU9Tz9FOEI%2BI%2Fs9czAaFXxj7KyOcG8hrMM3Mgb4GOqUB3sDBYIA%2FT%2F7BI5wtry6YmQqgWco1plStDop5lUBr5thR6OB1uWZJFIaPmGXQHcIdUlf942LwTovw7SYFLwDpNx3emJk5Clyn%2BfLSIchN0uoMVjpIJQf9kaQgFlaJaH59xkD02rcNCeKz3cFLrhZUEdNxzYN%2FKGbDN7Od57FMHy8bkDZCmV5%2FyZLKufQuEYrXAS6cbQA5CfuXjRcCw6ZLmLboFcJT&X-Amz-Signature=5ac55e993bca0b4c430ad2c0e54a2c0214e78051b194363cd246e1201017905c&X-Amz-SignedHeaders=host&x-id=GetObject)
