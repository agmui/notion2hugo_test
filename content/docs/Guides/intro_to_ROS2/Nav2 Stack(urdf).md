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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJLUC5X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkj6%2BN63a1duQ2OoSQlvv4jlQT1%2FgAZZObyRU3uOHcBQIgW8uLmNEuD7neTbysSvsOTqfb%2BrU6dslrbs6FYiwDi1gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSevC34Vg9Sj2QyCrcA8dyzXtTWV3vTQTxsyX6QJY8YbhuUXVej6Dyn5BHnBsHXR%2F8q8Zhd2%2Ff5bCtcV%2BdA3SnFB%2Bhgod933hl0asBozi7zbnAPVE9w4HOjQGu4QKonuia4dt0oTVjFnPfxGBbLkEdFBlfpmKxfbYOs7lV2zCFTD%2FBQa%2BH1TSAcBRiAnghhs03FXbeqBpXeX0aGiPngNeVibS%2FT9Qwusvr%2BFMJPikavg20WjNuBkrbPSQaB7Sjxt5BvDJ0yXisxFUDQ%2BBrGunsMD66PBNoSB2FtLk9T%2Fsr039blKgARUwGLpqCCbqQCSHyAMGHMzdBqA8xGHz%2Bx2x%2Fr4mh77hfKVK7rFXAKcmD2rliVx7bHl7hcoPkCFP%2BuaumYo8xRjGYAppydfow5ckPjxgmxSaYlAucESBvQiGUxWlg7wQxB4K4TIiggpifxymkB4LsNZI9zwS42H2l4N9A3o%2BrqY1wDKSk2cgXj1NclRWa%2F54SWK%2Bqwxmpceoo8%2BwpOmj6%2BqUBeu3IICNqNvsd%2BbYdChP7XyK%2FwYC0wPBLpGKTujuN2vuDrqv88yt%2BVOycJbJGXUjPEOZobbrBT3LejF56mdjrTDZ26DDkAcFsbJDhPW%2BiCF3FCgMhA%2Baj6i2TwEo0VZK8cBY7MM3NwMMGOqUBksa459CPkDKtJ%2FlJX8oHBWwCR%2BYuJb7p19Fzv9P%2Fr9BBLRwgfkTFvUnl8kfssh4%2FUl%2FQNoRLDuiTg4KaYwirmwOmgu8jsStW296vHTPIM%2BLsbUCtCaQRfNpWUWtBIXOEIkvXku3SrmVJhCYFDdvRWU3ogKUxB%2BYIcNYBhpngNXSk0mmTGPSxdnf65F4ngTdylr8N%2FLk%2Bh4nNiUzO31raF8PQPmPY&X-Amz-Signature=f208d4f21fbbc47bd481f96d901eed100f6bd0732c224d3d1fac08dd1e132e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJLUC5X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkj6%2BN63a1duQ2OoSQlvv4jlQT1%2FgAZZObyRU3uOHcBQIgW8uLmNEuD7neTbysSvsOTqfb%2BrU6dslrbs6FYiwDi1gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSevC34Vg9Sj2QyCrcA8dyzXtTWV3vTQTxsyX6QJY8YbhuUXVej6Dyn5BHnBsHXR%2F8q8Zhd2%2Ff5bCtcV%2BdA3SnFB%2Bhgod933hl0asBozi7zbnAPVE9w4HOjQGu4QKonuia4dt0oTVjFnPfxGBbLkEdFBlfpmKxfbYOs7lV2zCFTD%2FBQa%2BH1TSAcBRiAnghhs03FXbeqBpXeX0aGiPngNeVibS%2FT9Qwusvr%2BFMJPikavg20WjNuBkrbPSQaB7Sjxt5BvDJ0yXisxFUDQ%2BBrGunsMD66PBNoSB2FtLk9T%2Fsr039blKgARUwGLpqCCbqQCSHyAMGHMzdBqA8xGHz%2Bx2x%2Fr4mh77hfKVK7rFXAKcmD2rliVx7bHl7hcoPkCFP%2BuaumYo8xRjGYAppydfow5ckPjxgmxSaYlAucESBvQiGUxWlg7wQxB4K4TIiggpifxymkB4LsNZI9zwS42H2l4N9A3o%2BrqY1wDKSk2cgXj1NclRWa%2F54SWK%2Bqwxmpceoo8%2BwpOmj6%2BqUBeu3IICNqNvsd%2BbYdChP7XyK%2FwYC0wPBLpGKTujuN2vuDrqv88yt%2BVOycJbJGXUjPEOZobbrBT3LejF56mdjrTDZ26DDkAcFsbJDhPW%2BiCF3FCgMhA%2Baj6i2TwEo0VZK8cBY7MM3NwMMGOqUBksa459CPkDKtJ%2FlJX8oHBWwCR%2BYuJb7p19Fzv9P%2Fr9BBLRwgfkTFvUnl8kfssh4%2FUl%2FQNoRLDuiTg4KaYwirmwOmgu8jsStW296vHTPIM%2BLsbUCtCaQRfNpWUWtBIXOEIkvXku3SrmVJhCYFDdvRWU3ogKUxB%2BYIcNYBhpngNXSk0mmTGPSxdnf65F4ngTdylr8N%2FLk%2Bh4nNiUzO31raF8PQPmPY&X-Amz-Signature=f86b25201445f348d0bbf69b5c29a9210b4280f0c71197a86bfcc102680e8f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJLUC5X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkj6%2BN63a1duQ2OoSQlvv4jlQT1%2FgAZZObyRU3uOHcBQIgW8uLmNEuD7neTbysSvsOTqfb%2BrU6dslrbs6FYiwDi1gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSevC34Vg9Sj2QyCrcA8dyzXtTWV3vTQTxsyX6QJY8YbhuUXVej6Dyn5BHnBsHXR%2F8q8Zhd2%2Ff5bCtcV%2BdA3SnFB%2Bhgod933hl0asBozi7zbnAPVE9w4HOjQGu4QKonuia4dt0oTVjFnPfxGBbLkEdFBlfpmKxfbYOs7lV2zCFTD%2FBQa%2BH1TSAcBRiAnghhs03FXbeqBpXeX0aGiPngNeVibS%2FT9Qwusvr%2BFMJPikavg20WjNuBkrbPSQaB7Sjxt5BvDJ0yXisxFUDQ%2BBrGunsMD66PBNoSB2FtLk9T%2Fsr039blKgARUwGLpqCCbqQCSHyAMGHMzdBqA8xGHz%2Bx2x%2Fr4mh77hfKVK7rFXAKcmD2rliVx7bHl7hcoPkCFP%2BuaumYo8xRjGYAppydfow5ckPjxgmxSaYlAucESBvQiGUxWlg7wQxB4K4TIiggpifxymkB4LsNZI9zwS42H2l4N9A3o%2BrqY1wDKSk2cgXj1NclRWa%2F54SWK%2Bqwxmpceoo8%2BwpOmj6%2BqUBeu3IICNqNvsd%2BbYdChP7XyK%2FwYC0wPBLpGKTujuN2vuDrqv88yt%2BVOycJbJGXUjPEOZobbrBT3LejF56mdjrTDZ26DDkAcFsbJDhPW%2BiCF3FCgMhA%2Baj6i2TwEo0VZK8cBY7MM3NwMMGOqUBksa459CPkDKtJ%2FlJX8oHBWwCR%2BYuJb7p19Fzv9P%2Fr9BBLRwgfkTFvUnl8kfssh4%2FUl%2FQNoRLDuiTg4KaYwirmwOmgu8jsStW296vHTPIM%2BLsbUCtCaQRfNpWUWtBIXOEIkvXku3SrmVJhCYFDdvRWU3ogKUxB%2BYIcNYBhpngNXSk0mmTGPSxdnf65F4ngTdylr8N%2FLk%2Bh4nNiUzO31raF8PQPmPY&X-Amz-Signature=e219660359a8c51e046ef0d1724255c4e81a957b77090c3df9d6953463dfc408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJLUC5X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkj6%2BN63a1duQ2OoSQlvv4jlQT1%2FgAZZObyRU3uOHcBQIgW8uLmNEuD7neTbysSvsOTqfb%2BrU6dslrbs6FYiwDi1gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSevC34Vg9Sj2QyCrcA8dyzXtTWV3vTQTxsyX6QJY8YbhuUXVej6Dyn5BHnBsHXR%2F8q8Zhd2%2Ff5bCtcV%2BdA3SnFB%2Bhgod933hl0asBozi7zbnAPVE9w4HOjQGu4QKonuia4dt0oTVjFnPfxGBbLkEdFBlfpmKxfbYOs7lV2zCFTD%2FBQa%2BH1TSAcBRiAnghhs03FXbeqBpXeX0aGiPngNeVibS%2FT9Qwusvr%2BFMJPikavg20WjNuBkrbPSQaB7Sjxt5BvDJ0yXisxFUDQ%2BBrGunsMD66PBNoSB2FtLk9T%2Fsr039blKgARUwGLpqCCbqQCSHyAMGHMzdBqA8xGHz%2Bx2x%2Fr4mh77hfKVK7rFXAKcmD2rliVx7bHl7hcoPkCFP%2BuaumYo8xRjGYAppydfow5ckPjxgmxSaYlAucESBvQiGUxWlg7wQxB4K4TIiggpifxymkB4LsNZI9zwS42H2l4N9A3o%2BrqY1wDKSk2cgXj1NclRWa%2F54SWK%2Bqwxmpceoo8%2BwpOmj6%2BqUBeu3IICNqNvsd%2BbYdChP7XyK%2FwYC0wPBLpGKTujuN2vuDrqv88yt%2BVOycJbJGXUjPEOZobbrBT3LejF56mdjrTDZ26DDkAcFsbJDhPW%2BiCF3FCgMhA%2Baj6i2TwEo0VZK8cBY7MM3NwMMGOqUBksa459CPkDKtJ%2FlJX8oHBWwCR%2BYuJb7p19Fzv9P%2Fr9BBLRwgfkTFvUnl8kfssh4%2FUl%2FQNoRLDuiTg4KaYwirmwOmgu8jsStW296vHTPIM%2BLsbUCtCaQRfNpWUWtBIXOEIkvXku3SrmVJhCYFDdvRWU3ogKUxB%2BYIcNYBhpngNXSk0mmTGPSxdnf65F4ngTdylr8N%2FLk%2Bh4nNiUzO31raF8PQPmPY&X-Amz-Signature=646504b15e64233d081fc6529df71a01fdc328a2ec3dc77b661d57190cb6f714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJLUC5X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkj6%2BN63a1duQ2OoSQlvv4jlQT1%2FgAZZObyRU3uOHcBQIgW8uLmNEuD7neTbysSvsOTqfb%2BrU6dslrbs6FYiwDi1gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSevC34Vg9Sj2QyCrcA8dyzXtTWV3vTQTxsyX6QJY8YbhuUXVej6Dyn5BHnBsHXR%2F8q8Zhd2%2Ff5bCtcV%2BdA3SnFB%2Bhgod933hl0asBozi7zbnAPVE9w4HOjQGu4QKonuia4dt0oTVjFnPfxGBbLkEdFBlfpmKxfbYOs7lV2zCFTD%2FBQa%2BH1TSAcBRiAnghhs03FXbeqBpXeX0aGiPngNeVibS%2FT9Qwusvr%2BFMJPikavg20WjNuBkrbPSQaB7Sjxt5BvDJ0yXisxFUDQ%2BBrGunsMD66PBNoSB2FtLk9T%2Fsr039blKgARUwGLpqCCbqQCSHyAMGHMzdBqA8xGHz%2Bx2x%2Fr4mh77hfKVK7rFXAKcmD2rliVx7bHl7hcoPkCFP%2BuaumYo8xRjGYAppydfow5ckPjxgmxSaYlAucESBvQiGUxWlg7wQxB4K4TIiggpifxymkB4LsNZI9zwS42H2l4N9A3o%2BrqY1wDKSk2cgXj1NclRWa%2F54SWK%2Bqwxmpceoo8%2BwpOmj6%2BqUBeu3IICNqNvsd%2BbYdChP7XyK%2FwYC0wPBLpGKTujuN2vuDrqv88yt%2BVOycJbJGXUjPEOZobbrBT3LejF56mdjrTDZ26DDkAcFsbJDhPW%2BiCF3FCgMhA%2Baj6i2TwEo0VZK8cBY7MM3NwMMGOqUBksa459CPkDKtJ%2FlJX8oHBWwCR%2BYuJb7p19Fzv9P%2Fr9BBLRwgfkTFvUnl8kfssh4%2FUl%2FQNoRLDuiTg4KaYwirmwOmgu8jsStW296vHTPIM%2BLsbUCtCaQRfNpWUWtBIXOEIkvXku3SrmVJhCYFDdvRWU3ogKUxB%2BYIcNYBhpngNXSk0mmTGPSxdnf65F4ngTdylr8N%2FLk%2Bh4nNiUzO31raF8PQPmPY&X-Amz-Signature=955278a60d8a21d72e90ebd14000c73517150616b9aa41ef8cb02d996b8b386e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJLUC5X%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkj6%2BN63a1duQ2OoSQlvv4jlQT1%2FgAZZObyRU3uOHcBQIgW8uLmNEuD7neTbysSvsOTqfb%2BrU6dslrbs6FYiwDi1gqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BSevC34Vg9Sj2QyCrcA8dyzXtTWV3vTQTxsyX6QJY8YbhuUXVej6Dyn5BHnBsHXR%2F8q8Zhd2%2Ff5bCtcV%2BdA3SnFB%2Bhgod933hl0asBozi7zbnAPVE9w4HOjQGu4QKonuia4dt0oTVjFnPfxGBbLkEdFBlfpmKxfbYOs7lV2zCFTD%2FBQa%2BH1TSAcBRiAnghhs03FXbeqBpXeX0aGiPngNeVibS%2FT9Qwusvr%2BFMJPikavg20WjNuBkrbPSQaB7Sjxt5BvDJ0yXisxFUDQ%2BBrGunsMD66PBNoSB2FtLk9T%2Fsr039blKgARUwGLpqCCbqQCSHyAMGHMzdBqA8xGHz%2Bx2x%2Fr4mh77hfKVK7rFXAKcmD2rliVx7bHl7hcoPkCFP%2BuaumYo8xRjGYAppydfow5ckPjxgmxSaYlAucESBvQiGUxWlg7wQxB4K4TIiggpifxymkB4LsNZI9zwS42H2l4N9A3o%2BrqY1wDKSk2cgXj1NclRWa%2F54SWK%2Bqwxmpceoo8%2BwpOmj6%2BqUBeu3IICNqNvsd%2BbYdChP7XyK%2FwYC0wPBLpGKTujuN2vuDrqv88yt%2BVOycJbJGXUjPEOZobbrBT3LejF56mdjrTDZ26DDkAcFsbJDhPW%2BiCF3FCgMhA%2Baj6i2TwEo0VZK8cBY7MM3NwMMGOqUBksa459CPkDKtJ%2FlJX8oHBWwCR%2BYuJb7p19Fzv9P%2Fr9BBLRwgfkTFvUnl8kfssh4%2FUl%2FQNoRLDuiTg4KaYwirmwOmgu8jsStW296vHTPIM%2BLsbUCtCaQRfNpWUWtBIXOEIkvXku3SrmVJhCYFDdvRWU3ogKUxB%2BYIcNYBhpngNXSk0mmTGPSxdnf65F4ngTdylr8N%2FLk%2Bh4nNiUzO31raF8PQPmPY&X-Amz-Signature=50c7ce062a25e98d6c684fae5d405781184134dd6a17795e0164fcc63ace9813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
