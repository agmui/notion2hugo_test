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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR6YVO6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5NnrBy0k8se9sncSmwr0OTun6yMfPMrCmr1UkkezxXAiAmsrKl1I0YbKSaNGfT0EwYxW6SWrueawYVU%2B8ZzJf5cSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGe7noKMolTdaXWPKtwDkXxFy49kdnoCRgSlUuMcoYASFDGtcTNTqdRzSzzSDoBxRTmemMw7ASRaVRQmHkThw8PDJ4S%2FeUF1epJMzwne%2FZnmG%2FIP2yTKAoKUGml3VPUT80zdGkaf0B7ZJg9TbPjRESiIEKQyXRGxic1V%2Bag49M2k5UJJ1fkzYcinVyvIBbf02RdnAS9J%2FG5TBmeXl78UJEg6gDS%2FIqxmTnCJVIi1WVE6ausikG0VgHe2kwte7NbjhkpirN8oLO4C4W0%2Bqr1xjf2qowYvt4GlFrHjhlvE2HMzbQZ6kzmLPk3LIWhmKV0gDU5ylfrvA0FJlTXP7VFo1jeEfAVd0ohBpepEIxkkav6wm8wcpMS%2FeTT%2BpIi2uFi7f3vhb7lplACJeP%2FWrEBJqGXBNSmkJlCoJtCsjLsDzOxeQhDMP5NBOgFVmkB7ATgYOxwlg9CEcAA6KvqxacPpSWCj8JF3CK2bMoNqNjemxz9j7jj0WGgEOXZGllJKFOrHk4XeiHWNgIXsz30WFopcKcQ%2FTSov%2FyQKdplkz63BrjayAkHL%2FP9QaPuX4tzEGqZcSqViL4IAq3kOKk%2BR%2BrSvurXjTx4LhdQh9TywenhoC%2F5CU6llbafWCoilnX%2F%2Bp4QWOZE36gviU01qvkQw6vr2vAY6pgEbolCxTcjmDhlZQoohqMPVk%2BV%2FMGKlhkM%2FUnxqRbLBBgpymaAcmiIUA42G8gvZFDI6gxW6KE%2F4a%2Fl0YoiKgLLcQemFsavY7ZNW%2BopfWfghZv7EtekwEhSTpPO8rmDEEhc5urZHFFRi0iD%2FYh1A1luME5nq%2FYEQLSdR3zMfCnkfpeds%2B65it0yZUGoIH9ssbWKDyXdn80kVMLRqZSiu0V543CsHKh%2Bt&X-Amz-Signature=1da50bfe2a30be64ad5fbafb81facebb4f73fce47d4ecad9dd1e58623b8778f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR6YVO6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5NnrBy0k8se9sncSmwr0OTun6yMfPMrCmr1UkkezxXAiAmsrKl1I0YbKSaNGfT0EwYxW6SWrueawYVU%2B8ZzJf5cSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGe7noKMolTdaXWPKtwDkXxFy49kdnoCRgSlUuMcoYASFDGtcTNTqdRzSzzSDoBxRTmemMw7ASRaVRQmHkThw8PDJ4S%2FeUF1epJMzwne%2FZnmG%2FIP2yTKAoKUGml3VPUT80zdGkaf0B7ZJg9TbPjRESiIEKQyXRGxic1V%2Bag49M2k5UJJ1fkzYcinVyvIBbf02RdnAS9J%2FG5TBmeXl78UJEg6gDS%2FIqxmTnCJVIi1WVE6ausikG0VgHe2kwte7NbjhkpirN8oLO4C4W0%2Bqr1xjf2qowYvt4GlFrHjhlvE2HMzbQZ6kzmLPk3LIWhmKV0gDU5ylfrvA0FJlTXP7VFo1jeEfAVd0ohBpepEIxkkav6wm8wcpMS%2FeTT%2BpIi2uFi7f3vhb7lplACJeP%2FWrEBJqGXBNSmkJlCoJtCsjLsDzOxeQhDMP5NBOgFVmkB7ATgYOxwlg9CEcAA6KvqxacPpSWCj8JF3CK2bMoNqNjemxz9j7jj0WGgEOXZGllJKFOrHk4XeiHWNgIXsz30WFopcKcQ%2FTSov%2FyQKdplkz63BrjayAkHL%2FP9QaPuX4tzEGqZcSqViL4IAq3kOKk%2BR%2BrSvurXjTx4LhdQh9TywenhoC%2F5CU6llbafWCoilnX%2F%2Bp4QWOZE36gviU01qvkQw6vr2vAY6pgEbolCxTcjmDhlZQoohqMPVk%2BV%2FMGKlhkM%2FUnxqRbLBBgpymaAcmiIUA42G8gvZFDI6gxW6KE%2F4a%2Fl0YoiKgLLcQemFsavY7ZNW%2BopfWfghZv7EtekwEhSTpPO8rmDEEhc5urZHFFRi0iD%2FYh1A1luME5nq%2FYEQLSdR3zMfCnkfpeds%2B65it0yZUGoIH9ssbWKDyXdn80kVMLRqZSiu0V543CsHKh%2Bt&X-Amz-Signature=063e5ca5c112e8c2dcc001cf3c24aa0bd2837cd8c09811d24406546e5c34ca81&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR6YVO6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5NnrBy0k8se9sncSmwr0OTun6yMfPMrCmr1UkkezxXAiAmsrKl1I0YbKSaNGfT0EwYxW6SWrueawYVU%2B8ZzJf5cSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGe7noKMolTdaXWPKtwDkXxFy49kdnoCRgSlUuMcoYASFDGtcTNTqdRzSzzSDoBxRTmemMw7ASRaVRQmHkThw8PDJ4S%2FeUF1epJMzwne%2FZnmG%2FIP2yTKAoKUGml3VPUT80zdGkaf0B7ZJg9TbPjRESiIEKQyXRGxic1V%2Bag49M2k5UJJ1fkzYcinVyvIBbf02RdnAS9J%2FG5TBmeXl78UJEg6gDS%2FIqxmTnCJVIi1WVE6ausikG0VgHe2kwte7NbjhkpirN8oLO4C4W0%2Bqr1xjf2qowYvt4GlFrHjhlvE2HMzbQZ6kzmLPk3LIWhmKV0gDU5ylfrvA0FJlTXP7VFo1jeEfAVd0ohBpepEIxkkav6wm8wcpMS%2FeTT%2BpIi2uFi7f3vhb7lplACJeP%2FWrEBJqGXBNSmkJlCoJtCsjLsDzOxeQhDMP5NBOgFVmkB7ATgYOxwlg9CEcAA6KvqxacPpSWCj8JF3CK2bMoNqNjemxz9j7jj0WGgEOXZGllJKFOrHk4XeiHWNgIXsz30WFopcKcQ%2FTSov%2FyQKdplkz63BrjayAkHL%2FP9QaPuX4tzEGqZcSqViL4IAq3kOKk%2BR%2BrSvurXjTx4LhdQh9TywenhoC%2F5CU6llbafWCoilnX%2F%2Bp4QWOZE36gviU01qvkQw6vr2vAY6pgEbolCxTcjmDhlZQoohqMPVk%2BV%2FMGKlhkM%2FUnxqRbLBBgpymaAcmiIUA42G8gvZFDI6gxW6KE%2F4a%2Fl0YoiKgLLcQemFsavY7ZNW%2BopfWfghZv7EtekwEhSTpPO8rmDEEhc5urZHFFRi0iD%2FYh1A1luME5nq%2FYEQLSdR3zMfCnkfpeds%2B65it0yZUGoIH9ssbWKDyXdn80kVMLRqZSiu0V543CsHKh%2Bt&X-Amz-Signature=f20a2dad5b39116f234a717bee35ad0732ec385b824a0272e7ed215588c90a24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR6YVO6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5NnrBy0k8se9sncSmwr0OTun6yMfPMrCmr1UkkezxXAiAmsrKl1I0YbKSaNGfT0EwYxW6SWrueawYVU%2B8ZzJf5cSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGe7noKMolTdaXWPKtwDkXxFy49kdnoCRgSlUuMcoYASFDGtcTNTqdRzSzzSDoBxRTmemMw7ASRaVRQmHkThw8PDJ4S%2FeUF1epJMzwne%2FZnmG%2FIP2yTKAoKUGml3VPUT80zdGkaf0B7ZJg9TbPjRESiIEKQyXRGxic1V%2Bag49M2k5UJJ1fkzYcinVyvIBbf02RdnAS9J%2FG5TBmeXl78UJEg6gDS%2FIqxmTnCJVIi1WVE6ausikG0VgHe2kwte7NbjhkpirN8oLO4C4W0%2Bqr1xjf2qowYvt4GlFrHjhlvE2HMzbQZ6kzmLPk3LIWhmKV0gDU5ylfrvA0FJlTXP7VFo1jeEfAVd0ohBpepEIxkkav6wm8wcpMS%2FeTT%2BpIi2uFi7f3vhb7lplACJeP%2FWrEBJqGXBNSmkJlCoJtCsjLsDzOxeQhDMP5NBOgFVmkB7ATgYOxwlg9CEcAA6KvqxacPpSWCj8JF3CK2bMoNqNjemxz9j7jj0WGgEOXZGllJKFOrHk4XeiHWNgIXsz30WFopcKcQ%2FTSov%2FyQKdplkz63BrjayAkHL%2FP9QaPuX4tzEGqZcSqViL4IAq3kOKk%2BR%2BrSvurXjTx4LhdQh9TywenhoC%2F5CU6llbafWCoilnX%2F%2Bp4QWOZE36gviU01qvkQw6vr2vAY6pgEbolCxTcjmDhlZQoohqMPVk%2BV%2FMGKlhkM%2FUnxqRbLBBgpymaAcmiIUA42G8gvZFDI6gxW6KE%2F4a%2Fl0YoiKgLLcQemFsavY7ZNW%2BopfWfghZv7EtekwEhSTpPO8rmDEEhc5urZHFFRi0iD%2FYh1A1luME5nq%2FYEQLSdR3zMfCnkfpeds%2B65it0yZUGoIH9ssbWKDyXdn80kVMLRqZSiu0V543CsHKh%2Bt&X-Amz-Signature=15048cab6e4a1349b904c62071b33a6a5bf7aaa55f8fae0873a7c0dba417b7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR6YVO6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5NnrBy0k8se9sncSmwr0OTun6yMfPMrCmr1UkkezxXAiAmsrKl1I0YbKSaNGfT0EwYxW6SWrueawYVU%2B8ZzJf5cSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGe7noKMolTdaXWPKtwDkXxFy49kdnoCRgSlUuMcoYASFDGtcTNTqdRzSzzSDoBxRTmemMw7ASRaVRQmHkThw8PDJ4S%2FeUF1epJMzwne%2FZnmG%2FIP2yTKAoKUGml3VPUT80zdGkaf0B7ZJg9TbPjRESiIEKQyXRGxic1V%2Bag49M2k5UJJ1fkzYcinVyvIBbf02RdnAS9J%2FG5TBmeXl78UJEg6gDS%2FIqxmTnCJVIi1WVE6ausikG0VgHe2kwte7NbjhkpirN8oLO4C4W0%2Bqr1xjf2qowYvt4GlFrHjhlvE2HMzbQZ6kzmLPk3LIWhmKV0gDU5ylfrvA0FJlTXP7VFo1jeEfAVd0ohBpepEIxkkav6wm8wcpMS%2FeTT%2BpIi2uFi7f3vhb7lplACJeP%2FWrEBJqGXBNSmkJlCoJtCsjLsDzOxeQhDMP5NBOgFVmkB7ATgYOxwlg9CEcAA6KvqxacPpSWCj8JF3CK2bMoNqNjemxz9j7jj0WGgEOXZGllJKFOrHk4XeiHWNgIXsz30WFopcKcQ%2FTSov%2FyQKdplkz63BrjayAkHL%2FP9QaPuX4tzEGqZcSqViL4IAq3kOKk%2BR%2BrSvurXjTx4LhdQh9TywenhoC%2F5CU6llbafWCoilnX%2F%2Bp4QWOZE36gviU01qvkQw6vr2vAY6pgEbolCxTcjmDhlZQoohqMPVk%2BV%2FMGKlhkM%2FUnxqRbLBBgpymaAcmiIUA42G8gvZFDI6gxW6KE%2F4a%2Fl0YoiKgLLcQemFsavY7ZNW%2BopfWfghZv7EtekwEhSTpPO8rmDEEhc5urZHFFRi0iD%2FYh1A1luME5nq%2FYEQLSdR3zMfCnkfpeds%2B65it0yZUGoIH9ssbWKDyXdn80kVMLRqZSiu0V543CsHKh%2Bt&X-Amz-Signature=d25003a05b9a419944f0c30af8ff5cc3bfbfe0f892b4aa3fc070a80f482ab7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR6YVO6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5NnrBy0k8se9sncSmwr0OTun6yMfPMrCmr1UkkezxXAiAmsrKl1I0YbKSaNGfT0EwYxW6SWrueawYVU%2B8ZzJf5cSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGe7noKMolTdaXWPKtwDkXxFy49kdnoCRgSlUuMcoYASFDGtcTNTqdRzSzzSDoBxRTmemMw7ASRaVRQmHkThw8PDJ4S%2FeUF1epJMzwne%2FZnmG%2FIP2yTKAoKUGml3VPUT80zdGkaf0B7ZJg9TbPjRESiIEKQyXRGxic1V%2Bag49M2k5UJJ1fkzYcinVyvIBbf02RdnAS9J%2FG5TBmeXl78UJEg6gDS%2FIqxmTnCJVIi1WVE6ausikG0VgHe2kwte7NbjhkpirN8oLO4C4W0%2Bqr1xjf2qowYvt4GlFrHjhlvE2HMzbQZ6kzmLPk3LIWhmKV0gDU5ylfrvA0FJlTXP7VFo1jeEfAVd0ohBpepEIxkkav6wm8wcpMS%2FeTT%2BpIi2uFi7f3vhb7lplACJeP%2FWrEBJqGXBNSmkJlCoJtCsjLsDzOxeQhDMP5NBOgFVmkB7ATgYOxwlg9CEcAA6KvqxacPpSWCj8JF3CK2bMoNqNjemxz9j7jj0WGgEOXZGllJKFOrHk4XeiHWNgIXsz30WFopcKcQ%2FTSov%2FyQKdplkz63BrjayAkHL%2FP9QaPuX4tzEGqZcSqViL4IAq3kOKk%2BR%2BrSvurXjTx4LhdQh9TywenhoC%2F5CU6llbafWCoilnX%2F%2Bp4QWOZE36gviU01qvkQw6vr2vAY6pgEbolCxTcjmDhlZQoohqMPVk%2BV%2FMGKlhkM%2FUnxqRbLBBgpymaAcmiIUA42G8gvZFDI6gxW6KE%2F4a%2Fl0YoiKgLLcQemFsavY7ZNW%2BopfWfghZv7EtekwEhSTpPO8rmDEEhc5urZHFFRi0iD%2FYh1A1luME5nq%2FYEQLSdR3zMfCnkfpeds%2B65it0yZUGoIH9ssbWKDyXdn80kVMLRqZSiu0V543CsHKh%2Bt&X-Amz-Signature=8a79630927d8d357f2ae2e09f2b9bb99a4e12f7700569b84da41a2928b74c521&X-Amz-SignedHeaders=host&x-id=GetObject)
