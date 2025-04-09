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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCQSEMT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCebGVxo9fCCY1dcP4cTn4X3EOKvLfP9DPH9%2FyILLw%2FYwIhAOJXT1rPC%2Fcr3duH45J91A8%2FjWPeWPx0iL7tELB4iupWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoNBrliFTrtVg0ENoq3ANSY%2BcFGdwP0sGeTi3VOoelNpB7q8nK%2BCjbOsQdUU9WUb5cmolapFCg18pwrn3e%2FC%2F9dmbRwmb7GcksG7TmABylhKQpyOmWdT0mXnjfXrA5DhUyv2uf6B0eOg3AB4sIxeA8qOH%2FYAkqGY0FVtecl%2FgQWy4WkDP0hi3JyolM4PbsD1nKPBJvD7ijlZmAbzFXbQryGH3F3PKlf%2FXtpOOC%2BwtcrjICB8S7j5uIztLHZ9o6RJxMd0Jq0%2F%2FHOjF16YeSwEue%2BEXS8QrVBReB%2FG1TF7qqa%2FvmfnEG95c5nfU1dx5mtyJwYtH8XDMWGqBWD%2BFiJQAyME3vp5t%2BUXJ%2FUxKdj8Lb9fvw9McNpwqtJ%2FBFXubvUVpogFF63VExBsVWFTW6E3KRRuxngFlp2xv766thqbACByTANHPVtD2Mtfk1q4Tn1wSIWQegLrsu9Qiq3evXEvoCUgnfpAXIdV%2BFAVcsrl1bBsEx9LCyHKtPPkzF49W0NLtNWJDGn%2BkRjGHYbsGb%2BlriXS7fvh6x0FgyI5KdY7pa13Iz%2FD%2BqcvTA%2FuPvB0oDokpr0zJjTOw4%2FVh5myCs13pArGHQqqu43P%2B%2BxkHYw8gttNkSXUfWNNv4lvepWFPxxC%2FAADUup3ln4PdV%2BjDe5dm%2FBjqkAdpOPAx%2BmxQmUe3IxoB1amXZXDURXnh5K3v0WvZJ%2FPBc5F0puR7PDkSSgSjAKm5z75jy3gmCKWHIcfXeVhHAezEtvfKqUIUaeVSUUSYNiy4nv6JKpwoUC32HrG3J3Ab0HEPJFKN0BOMoP49GtqeSunrVCK3DC3Els7hCih%2FkZ%2F2c1BqnS3J0xYi3UJJcqwWM54VvdlItyJriwS%2FHD1x6e9UR%2FMcz&X-Amz-Signature=0b74ef5cd84f0a54656d2b7ca9bae4a45b8dd6164173a0407e8e774edaaa77b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCQSEMT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCebGVxo9fCCY1dcP4cTn4X3EOKvLfP9DPH9%2FyILLw%2FYwIhAOJXT1rPC%2Fcr3duH45J91A8%2FjWPeWPx0iL7tELB4iupWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoNBrliFTrtVg0ENoq3ANSY%2BcFGdwP0sGeTi3VOoelNpB7q8nK%2BCjbOsQdUU9WUb5cmolapFCg18pwrn3e%2FC%2F9dmbRwmb7GcksG7TmABylhKQpyOmWdT0mXnjfXrA5DhUyv2uf6B0eOg3AB4sIxeA8qOH%2FYAkqGY0FVtecl%2FgQWy4WkDP0hi3JyolM4PbsD1nKPBJvD7ijlZmAbzFXbQryGH3F3PKlf%2FXtpOOC%2BwtcrjICB8S7j5uIztLHZ9o6RJxMd0Jq0%2F%2FHOjF16YeSwEue%2BEXS8QrVBReB%2FG1TF7qqa%2FvmfnEG95c5nfU1dx5mtyJwYtH8XDMWGqBWD%2BFiJQAyME3vp5t%2BUXJ%2FUxKdj8Lb9fvw9McNpwqtJ%2FBFXubvUVpogFF63VExBsVWFTW6E3KRRuxngFlp2xv766thqbACByTANHPVtD2Mtfk1q4Tn1wSIWQegLrsu9Qiq3evXEvoCUgnfpAXIdV%2BFAVcsrl1bBsEx9LCyHKtPPkzF49W0NLtNWJDGn%2BkRjGHYbsGb%2BlriXS7fvh6x0FgyI5KdY7pa13Iz%2FD%2BqcvTA%2FuPvB0oDokpr0zJjTOw4%2FVh5myCs13pArGHQqqu43P%2B%2BxkHYw8gttNkSXUfWNNv4lvepWFPxxC%2FAADUup3ln4PdV%2BjDe5dm%2FBjqkAdpOPAx%2BmxQmUe3IxoB1amXZXDURXnh5K3v0WvZJ%2FPBc5F0puR7PDkSSgSjAKm5z75jy3gmCKWHIcfXeVhHAezEtvfKqUIUaeVSUUSYNiy4nv6JKpwoUC32HrG3J3Ab0HEPJFKN0BOMoP49GtqeSunrVCK3DC3Els7hCih%2FkZ%2F2c1BqnS3J0xYi3UJJcqwWM54VvdlItyJriwS%2FHD1x6e9UR%2FMcz&X-Amz-Signature=c268e625d99f8cd0974cf9a44e9e80d69922663ea3f5bd50d64662f3c22a166d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCQSEMT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCebGVxo9fCCY1dcP4cTn4X3EOKvLfP9DPH9%2FyILLw%2FYwIhAOJXT1rPC%2Fcr3duH45J91A8%2FjWPeWPx0iL7tELB4iupWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoNBrliFTrtVg0ENoq3ANSY%2BcFGdwP0sGeTi3VOoelNpB7q8nK%2BCjbOsQdUU9WUb5cmolapFCg18pwrn3e%2FC%2F9dmbRwmb7GcksG7TmABylhKQpyOmWdT0mXnjfXrA5DhUyv2uf6B0eOg3AB4sIxeA8qOH%2FYAkqGY0FVtecl%2FgQWy4WkDP0hi3JyolM4PbsD1nKPBJvD7ijlZmAbzFXbQryGH3F3PKlf%2FXtpOOC%2BwtcrjICB8S7j5uIztLHZ9o6RJxMd0Jq0%2F%2FHOjF16YeSwEue%2BEXS8QrVBReB%2FG1TF7qqa%2FvmfnEG95c5nfU1dx5mtyJwYtH8XDMWGqBWD%2BFiJQAyME3vp5t%2BUXJ%2FUxKdj8Lb9fvw9McNpwqtJ%2FBFXubvUVpogFF63VExBsVWFTW6E3KRRuxngFlp2xv766thqbACByTANHPVtD2Mtfk1q4Tn1wSIWQegLrsu9Qiq3evXEvoCUgnfpAXIdV%2BFAVcsrl1bBsEx9LCyHKtPPkzF49W0NLtNWJDGn%2BkRjGHYbsGb%2BlriXS7fvh6x0FgyI5KdY7pa13Iz%2FD%2BqcvTA%2FuPvB0oDokpr0zJjTOw4%2FVh5myCs13pArGHQqqu43P%2B%2BxkHYw8gttNkSXUfWNNv4lvepWFPxxC%2FAADUup3ln4PdV%2BjDe5dm%2FBjqkAdpOPAx%2BmxQmUe3IxoB1amXZXDURXnh5K3v0WvZJ%2FPBc5F0puR7PDkSSgSjAKm5z75jy3gmCKWHIcfXeVhHAezEtvfKqUIUaeVSUUSYNiy4nv6JKpwoUC32HrG3J3Ab0HEPJFKN0BOMoP49GtqeSunrVCK3DC3Els7hCih%2FkZ%2F2c1BqnS3J0xYi3UJJcqwWM54VvdlItyJriwS%2FHD1x6e9UR%2FMcz&X-Amz-Signature=f96567da6e4245cede87b1b70c1cabd8e9b43d09e5c029ee492fc073b8eb4dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCQSEMT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCebGVxo9fCCY1dcP4cTn4X3EOKvLfP9DPH9%2FyILLw%2FYwIhAOJXT1rPC%2Fcr3duH45J91A8%2FjWPeWPx0iL7tELB4iupWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoNBrliFTrtVg0ENoq3ANSY%2BcFGdwP0sGeTi3VOoelNpB7q8nK%2BCjbOsQdUU9WUb5cmolapFCg18pwrn3e%2FC%2F9dmbRwmb7GcksG7TmABylhKQpyOmWdT0mXnjfXrA5DhUyv2uf6B0eOg3AB4sIxeA8qOH%2FYAkqGY0FVtecl%2FgQWy4WkDP0hi3JyolM4PbsD1nKPBJvD7ijlZmAbzFXbQryGH3F3PKlf%2FXtpOOC%2BwtcrjICB8S7j5uIztLHZ9o6RJxMd0Jq0%2F%2FHOjF16YeSwEue%2BEXS8QrVBReB%2FG1TF7qqa%2FvmfnEG95c5nfU1dx5mtyJwYtH8XDMWGqBWD%2BFiJQAyME3vp5t%2BUXJ%2FUxKdj8Lb9fvw9McNpwqtJ%2FBFXubvUVpogFF63VExBsVWFTW6E3KRRuxngFlp2xv766thqbACByTANHPVtD2Mtfk1q4Tn1wSIWQegLrsu9Qiq3evXEvoCUgnfpAXIdV%2BFAVcsrl1bBsEx9LCyHKtPPkzF49W0NLtNWJDGn%2BkRjGHYbsGb%2BlriXS7fvh6x0FgyI5KdY7pa13Iz%2FD%2BqcvTA%2FuPvB0oDokpr0zJjTOw4%2FVh5myCs13pArGHQqqu43P%2B%2BxkHYw8gttNkSXUfWNNv4lvepWFPxxC%2FAADUup3ln4PdV%2BjDe5dm%2FBjqkAdpOPAx%2BmxQmUe3IxoB1amXZXDURXnh5K3v0WvZJ%2FPBc5F0puR7PDkSSgSjAKm5z75jy3gmCKWHIcfXeVhHAezEtvfKqUIUaeVSUUSYNiy4nv6JKpwoUC32HrG3J3Ab0HEPJFKN0BOMoP49GtqeSunrVCK3DC3Els7hCih%2FkZ%2F2c1BqnS3J0xYi3UJJcqwWM54VvdlItyJriwS%2FHD1x6e9UR%2FMcz&X-Amz-Signature=3abf2b184d340a5d3d00adccd6218b93b2671045486fcfc24e153ac87b097b92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCQSEMT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCebGVxo9fCCY1dcP4cTn4X3EOKvLfP9DPH9%2FyILLw%2FYwIhAOJXT1rPC%2Fcr3duH45J91A8%2FjWPeWPx0iL7tELB4iupWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoNBrliFTrtVg0ENoq3ANSY%2BcFGdwP0sGeTi3VOoelNpB7q8nK%2BCjbOsQdUU9WUb5cmolapFCg18pwrn3e%2FC%2F9dmbRwmb7GcksG7TmABylhKQpyOmWdT0mXnjfXrA5DhUyv2uf6B0eOg3AB4sIxeA8qOH%2FYAkqGY0FVtecl%2FgQWy4WkDP0hi3JyolM4PbsD1nKPBJvD7ijlZmAbzFXbQryGH3F3PKlf%2FXtpOOC%2BwtcrjICB8S7j5uIztLHZ9o6RJxMd0Jq0%2F%2FHOjF16YeSwEue%2BEXS8QrVBReB%2FG1TF7qqa%2FvmfnEG95c5nfU1dx5mtyJwYtH8XDMWGqBWD%2BFiJQAyME3vp5t%2BUXJ%2FUxKdj8Lb9fvw9McNpwqtJ%2FBFXubvUVpogFF63VExBsVWFTW6E3KRRuxngFlp2xv766thqbACByTANHPVtD2Mtfk1q4Tn1wSIWQegLrsu9Qiq3evXEvoCUgnfpAXIdV%2BFAVcsrl1bBsEx9LCyHKtPPkzF49W0NLtNWJDGn%2BkRjGHYbsGb%2BlriXS7fvh6x0FgyI5KdY7pa13Iz%2FD%2BqcvTA%2FuPvB0oDokpr0zJjTOw4%2FVh5myCs13pArGHQqqu43P%2B%2BxkHYw8gttNkSXUfWNNv4lvepWFPxxC%2FAADUup3ln4PdV%2BjDe5dm%2FBjqkAdpOPAx%2BmxQmUe3IxoB1amXZXDURXnh5K3v0WvZJ%2FPBc5F0puR7PDkSSgSjAKm5z75jy3gmCKWHIcfXeVhHAezEtvfKqUIUaeVSUUSYNiy4nv6JKpwoUC32HrG3J3Ab0HEPJFKN0BOMoP49GtqeSunrVCK3DC3Els7hCih%2FkZ%2F2c1BqnS3J0xYi3UJJcqwWM54VvdlItyJriwS%2FHD1x6e9UR%2FMcz&X-Amz-Signature=78f44842aa94f8a8ec9b0ffa9b18ff59f41e5e1b99ce94b416952ce12f287f58&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCQSEMT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCebGVxo9fCCY1dcP4cTn4X3EOKvLfP9DPH9%2FyILLw%2FYwIhAOJXT1rPC%2Fcr3duH45J91A8%2FjWPeWPx0iL7tELB4iupWKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoNBrliFTrtVg0ENoq3ANSY%2BcFGdwP0sGeTi3VOoelNpB7q8nK%2BCjbOsQdUU9WUb5cmolapFCg18pwrn3e%2FC%2F9dmbRwmb7GcksG7TmABylhKQpyOmWdT0mXnjfXrA5DhUyv2uf6B0eOg3AB4sIxeA8qOH%2FYAkqGY0FVtecl%2FgQWy4WkDP0hi3JyolM4PbsD1nKPBJvD7ijlZmAbzFXbQryGH3F3PKlf%2FXtpOOC%2BwtcrjICB8S7j5uIztLHZ9o6RJxMd0Jq0%2F%2FHOjF16YeSwEue%2BEXS8QrVBReB%2FG1TF7qqa%2FvmfnEG95c5nfU1dx5mtyJwYtH8XDMWGqBWD%2BFiJQAyME3vp5t%2BUXJ%2FUxKdj8Lb9fvw9McNpwqtJ%2FBFXubvUVpogFF63VExBsVWFTW6E3KRRuxngFlp2xv766thqbACByTANHPVtD2Mtfk1q4Tn1wSIWQegLrsu9Qiq3evXEvoCUgnfpAXIdV%2BFAVcsrl1bBsEx9LCyHKtPPkzF49W0NLtNWJDGn%2BkRjGHYbsGb%2BlriXS7fvh6x0FgyI5KdY7pa13Iz%2FD%2BqcvTA%2FuPvB0oDokpr0zJjTOw4%2FVh5myCs13pArGHQqqu43P%2B%2BxkHYw8gttNkSXUfWNNv4lvepWFPxxC%2FAADUup3ln4PdV%2BjDe5dm%2FBjqkAdpOPAx%2BmxQmUe3IxoB1amXZXDURXnh5K3v0WvZJ%2FPBc5F0puR7PDkSSgSjAKm5z75jy3gmCKWHIcfXeVhHAezEtvfKqUIUaeVSUUSYNiy4nv6JKpwoUC32HrG3J3Ab0HEPJFKN0BOMoP49GtqeSunrVCK3DC3Els7hCih%2FkZ%2F2c1BqnS3J0xYi3UJJcqwWM54VvdlItyJriwS%2FHD1x6e9UR%2FMcz&X-Amz-Signature=a228541383f9e7dc714938fd770e29b066fdbbf298de5cd8caf270d77215d11e&X-Amz-SignedHeaders=host&x-id=GetObject)
