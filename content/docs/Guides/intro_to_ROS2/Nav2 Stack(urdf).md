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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6CREPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC%2F%2Bkcwjj6oeUOVE9tT704K%2FiYGZGMPjJrnLX60iqMpqQIgOJVy%2FAbRoyVGTlS6Yi9Rn2m%2FmgRkh6xWfDIjft%2BnBSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAFLZKnBQJabvyTv5SrcA%2BXK1ElFc%2FWX4DVC9olwtZ2pddxtRVdAwmAxFl6DzMe6lpO12CqgFqUi2UgWO4%2FYUKHguUwdpXcXS9ptC38%2FYkbCH87BPurPy%2BBbkkmiAQwcdT1jQfHPBXlybfp%2FLFebDJphCfTtRuqQpQRE4kJ%2BTJ8VSSxBSww8gKCo3Shv7THqugWuVSgo%2BrBEteHiRZbCXhIGzO%2FKR4%2FiSz9BqSndxUWyUWxuulIQTOHc1g9IvmZZPj7gdPcLt0yctsjZ6M653c9Ffu7axEw1OcvjuEx3OCPqI%2FreM5iSBCyr7UZu%2BNLoECHpOOXvULrtVQs4JjfYFGYzEYcSCtHe1Ru95q6ypFV2uosNQ39GftWPRZ%2BRi8C230k%2Brtto59bdHY5begrdwoFXcm7KmtUqSs9vbUz4GltM8bAj%2F3SB9lFW8vDV2i5o9bH8zRQd00agaexfWc2J1Pc2ojVj8VSnuoj3b9Sqi0bOHXm%2BPROY4g91oi47RYaif3ZA3hZDTrZbyNwlRc6tgDed9az8%2FYs5IUPQLJolFG62h5Yo4XR5cjKJ66J49wfltiC3ELPZkoMk7%2FnObmULMifTvr97qa2DVFhV24Tj5%2FSGF8CchFKAEwgkbg8Jg6HUKf4xX7GC785GTEleMKbuxr0GOqUB%2FdpE0UVtCeFv88Qwr99EuwbvXP%2BaPH9DwyVADsiuei2P2F9ZEyRYwIK7VfK4c%2BGYeU1xgHppJ%2FcHt4uKAedEEy1AEgNUGmSMce73DWCBfbKbANp91zFuZeRS8i%2B9%2FWzn0CZKKf1%2FpnJitgT4hvJ%2BtRtUawjY7ebXWy7nZqFya62d4wgVL2m9faSxiPf%2FbcfAjvYjDOVZIN1ZzEz6WcFAx7lRCF2H&X-Amz-Signature=42f6acd2957fd518f3b1779e1e3a498a840076c522c0336e506ac0cd6a6a3fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6CREPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC%2F%2Bkcwjj6oeUOVE9tT704K%2FiYGZGMPjJrnLX60iqMpqQIgOJVy%2FAbRoyVGTlS6Yi9Rn2m%2FmgRkh6xWfDIjft%2BnBSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAFLZKnBQJabvyTv5SrcA%2BXK1ElFc%2FWX4DVC9olwtZ2pddxtRVdAwmAxFl6DzMe6lpO12CqgFqUi2UgWO4%2FYUKHguUwdpXcXS9ptC38%2FYkbCH87BPurPy%2BBbkkmiAQwcdT1jQfHPBXlybfp%2FLFebDJphCfTtRuqQpQRE4kJ%2BTJ8VSSxBSww8gKCo3Shv7THqugWuVSgo%2BrBEteHiRZbCXhIGzO%2FKR4%2FiSz9BqSndxUWyUWxuulIQTOHc1g9IvmZZPj7gdPcLt0yctsjZ6M653c9Ffu7axEw1OcvjuEx3OCPqI%2FreM5iSBCyr7UZu%2BNLoECHpOOXvULrtVQs4JjfYFGYzEYcSCtHe1Ru95q6ypFV2uosNQ39GftWPRZ%2BRi8C230k%2Brtto59bdHY5begrdwoFXcm7KmtUqSs9vbUz4GltM8bAj%2F3SB9lFW8vDV2i5o9bH8zRQd00agaexfWc2J1Pc2ojVj8VSnuoj3b9Sqi0bOHXm%2BPROY4g91oi47RYaif3ZA3hZDTrZbyNwlRc6tgDed9az8%2FYs5IUPQLJolFG62h5Yo4XR5cjKJ66J49wfltiC3ELPZkoMk7%2FnObmULMifTvr97qa2DVFhV24Tj5%2FSGF8CchFKAEwgkbg8Jg6HUKf4xX7GC785GTEleMKbuxr0GOqUB%2FdpE0UVtCeFv88Qwr99EuwbvXP%2BaPH9DwyVADsiuei2P2F9ZEyRYwIK7VfK4c%2BGYeU1xgHppJ%2FcHt4uKAedEEy1AEgNUGmSMce73DWCBfbKbANp91zFuZeRS8i%2B9%2FWzn0CZKKf1%2FpnJitgT4hvJ%2BtRtUawjY7ebXWy7nZqFya62d4wgVL2m9faSxiPf%2FbcfAjvYjDOVZIN1ZzEz6WcFAx7lRCF2H&X-Amz-Signature=3fa09f7c4b931760bee25688ba21518855c59bcce6c908d91c2d2079b5ceebc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6CREPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC%2F%2Bkcwjj6oeUOVE9tT704K%2FiYGZGMPjJrnLX60iqMpqQIgOJVy%2FAbRoyVGTlS6Yi9Rn2m%2FmgRkh6xWfDIjft%2BnBSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAFLZKnBQJabvyTv5SrcA%2BXK1ElFc%2FWX4DVC9olwtZ2pddxtRVdAwmAxFl6DzMe6lpO12CqgFqUi2UgWO4%2FYUKHguUwdpXcXS9ptC38%2FYkbCH87BPurPy%2BBbkkmiAQwcdT1jQfHPBXlybfp%2FLFebDJphCfTtRuqQpQRE4kJ%2BTJ8VSSxBSww8gKCo3Shv7THqugWuVSgo%2BrBEteHiRZbCXhIGzO%2FKR4%2FiSz9BqSndxUWyUWxuulIQTOHc1g9IvmZZPj7gdPcLt0yctsjZ6M653c9Ffu7axEw1OcvjuEx3OCPqI%2FreM5iSBCyr7UZu%2BNLoECHpOOXvULrtVQs4JjfYFGYzEYcSCtHe1Ru95q6ypFV2uosNQ39GftWPRZ%2BRi8C230k%2Brtto59bdHY5begrdwoFXcm7KmtUqSs9vbUz4GltM8bAj%2F3SB9lFW8vDV2i5o9bH8zRQd00agaexfWc2J1Pc2ojVj8VSnuoj3b9Sqi0bOHXm%2BPROY4g91oi47RYaif3ZA3hZDTrZbyNwlRc6tgDed9az8%2FYs5IUPQLJolFG62h5Yo4XR5cjKJ66J49wfltiC3ELPZkoMk7%2FnObmULMifTvr97qa2DVFhV24Tj5%2FSGF8CchFKAEwgkbg8Jg6HUKf4xX7GC785GTEleMKbuxr0GOqUB%2FdpE0UVtCeFv88Qwr99EuwbvXP%2BaPH9DwyVADsiuei2P2F9ZEyRYwIK7VfK4c%2BGYeU1xgHppJ%2FcHt4uKAedEEy1AEgNUGmSMce73DWCBfbKbANp91zFuZeRS8i%2B9%2FWzn0CZKKf1%2FpnJitgT4hvJ%2BtRtUawjY7ebXWy7nZqFya62d4wgVL2m9faSxiPf%2FbcfAjvYjDOVZIN1ZzEz6WcFAx7lRCF2H&X-Amz-Signature=f2fc0f69d40cadc74bf72e9a344200a42b4139b86d6f289a2c692524b08daba1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6CREPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC%2F%2Bkcwjj6oeUOVE9tT704K%2FiYGZGMPjJrnLX60iqMpqQIgOJVy%2FAbRoyVGTlS6Yi9Rn2m%2FmgRkh6xWfDIjft%2BnBSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAFLZKnBQJabvyTv5SrcA%2BXK1ElFc%2FWX4DVC9olwtZ2pddxtRVdAwmAxFl6DzMe6lpO12CqgFqUi2UgWO4%2FYUKHguUwdpXcXS9ptC38%2FYkbCH87BPurPy%2BBbkkmiAQwcdT1jQfHPBXlybfp%2FLFebDJphCfTtRuqQpQRE4kJ%2BTJ8VSSxBSww8gKCo3Shv7THqugWuVSgo%2BrBEteHiRZbCXhIGzO%2FKR4%2FiSz9BqSndxUWyUWxuulIQTOHc1g9IvmZZPj7gdPcLt0yctsjZ6M653c9Ffu7axEw1OcvjuEx3OCPqI%2FreM5iSBCyr7UZu%2BNLoECHpOOXvULrtVQs4JjfYFGYzEYcSCtHe1Ru95q6ypFV2uosNQ39GftWPRZ%2BRi8C230k%2Brtto59bdHY5begrdwoFXcm7KmtUqSs9vbUz4GltM8bAj%2F3SB9lFW8vDV2i5o9bH8zRQd00agaexfWc2J1Pc2ojVj8VSnuoj3b9Sqi0bOHXm%2BPROY4g91oi47RYaif3ZA3hZDTrZbyNwlRc6tgDed9az8%2FYs5IUPQLJolFG62h5Yo4XR5cjKJ66J49wfltiC3ELPZkoMk7%2FnObmULMifTvr97qa2DVFhV24Tj5%2FSGF8CchFKAEwgkbg8Jg6HUKf4xX7GC785GTEleMKbuxr0GOqUB%2FdpE0UVtCeFv88Qwr99EuwbvXP%2BaPH9DwyVADsiuei2P2F9ZEyRYwIK7VfK4c%2BGYeU1xgHppJ%2FcHt4uKAedEEy1AEgNUGmSMce73DWCBfbKbANp91zFuZeRS8i%2B9%2FWzn0CZKKf1%2FpnJitgT4hvJ%2BtRtUawjY7ebXWy7nZqFya62d4wgVL2m9faSxiPf%2FbcfAjvYjDOVZIN1ZzEz6WcFAx7lRCF2H&X-Amz-Signature=322fb18107e8e6b8dd2cf000e105dc074aeede1a70ae4fc210fa95a96c2347e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6CREPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC%2F%2Bkcwjj6oeUOVE9tT704K%2FiYGZGMPjJrnLX60iqMpqQIgOJVy%2FAbRoyVGTlS6Yi9Rn2m%2FmgRkh6xWfDIjft%2BnBSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAFLZKnBQJabvyTv5SrcA%2BXK1ElFc%2FWX4DVC9olwtZ2pddxtRVdAwmAxFl6DzMe6lpO12CqgFqUi2UgWO4%2FYUKHguUwdpXcXS9ptC38%2FYkbCH87BPurPy%2BBbkkmiAQwcdT1jQfHPBXlybfp%2FLFebDJphCfTtRuqQpQRE4kJ%2BTJ8VSSxBSww8gKCo3Shv7THqugWuVSgo%2BrBEteHiRZbCXhIGzO%2FKR4%2FiSz9BqSndxUWyUWxuulIQTOHc1g9IvmZZPj7gdPcLt0yctsjZ6M653c9Ffu7axEw1OcvjuEx3OCPqI%2FreM5iSBCyr7UZu%2BNLoECHpOOXvULrtVQs4JjfYFGYzEYcSCtHe1Ru95q6ypFV2uosNQ39GftWPRZ%2BRi8C230k%2Brtto59bdHY5begrdwoFXcm7KmtUqSs9vbUz4GltM8bAj%2F3SB9lFW8vDV2i5o9bH8zRQd00agaexfWc2J1Pc2ojVj8VSnuoj3b9Sqi0bOHXm%2BPROY4g91oi47RYaif3ZA3hZDTrZbyNwlRc6tgDed9az8%2FYs5IUPQLJolFG62h5Yo4XR5cjKJ66J49wfltiC3ELPZkoMk7%2FnObmULMifTvr97qa2DVFhV24Tj5%2FSGF8CchFKAEwgkbg8Jg6HUKf4xX7GC785GTEleMKbuxr0GOqUB%2FdpE0UVtCeFv88Qwr99EuwbvXP%2BaPH9DwyVADsiuei2P2F9ZEyRYwIK7VfK4c%2BGYeU1xgHppJ%2FcHt4uKAedEEy1AEgNUGmSMce73DWCBfbKbANp91zFuZeRS8i%2B9%2FWzn0CZKKf1%2FpnJitgT4hvJ%2BtRtUawjY7ebXWy7nZqFya62d4wgVL2m9faSxiPf%2FbcfAjvYjDOVZIN1ZzEz6WcFAx7lRCF2H&X-Amz-Signature=e4dba2a6d40196deb01138b3e4999b845db3994ce5c7f0230be39ad3190ce372&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6CREPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC%2F%2Bkcwjj6oeUOVE9tT704K%2FiYGZGMPjJrnLX60iqMpqQIgOJVy%2FAbRoyVGTlS6Yi9Rn2m%2FmgRkh6xWfDIjft%2BnBSUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAFLZKnBQJabvyTv5SrcA%2BXK1ElFc%2FWX4DVC9olwtZ2pddxtRVdAwmAxFl6DzMe6lpO12CqgFqUi2UgWO4%2FYUKHguUwdpXcXS9ptC38%2FYkbCH87BPurPy%2BBbkkmiAQwcdT1jQfHPBXlybfp%2FLFebDJphCfTtRuqQpQRE4kJ%2BTJ8VSSxBSww8gKCo3Shv7THqugWuVSgo%2BrBEteHiRZbCXhIGzO%2FKR4%2FiSz9BqSndxUWyUWxuulIQTOHc1g9IvmZZPj7gdPcLt0yctsjZ6M653c9Ffu7axEw1OcvjuEx3OCPqI%2FreM5iSBCyr7UZu%2BNLoECHpOOXvULrtVQs4JjfYFGYzEYcSCtHe1Ru95q6ypFV2uosNQ39GftWPRZ%2BRi8C230k%2Brtto59bdHY5begrdwoFXcm7KmtUqSs9vbUz4GltM8bAj%2F3SB9lFW8vDV2i5o9bH8zRQd00agaexfWc2J1Pc2ojVj8VSnuoj3b9Sqi0bOHXm%2BPROY4g91oi47RYaif3ZA3hZDTrZbyNwlRc6tgDed9az8%2FYs5IUPQLJolFG62h5Yo4XR5cjKJ66J49wfltiC3ELPZkoMk7%2FnObmULMifTvr97qa2DVFhV24Tj5%2FSGF8CchFKAEwgkbg8Jg6HUKf4xX7GC785GTEleMKbuxr0GOqUB%2FdpE0UVtCeFv88Qwr99EuwbvXP%2BaPH9DwyVADsiuei2P2F9ZEyRYwIK7VfK4c%2BGYeU1xgHppJ%2FcHt4uKAedEEy1AEgNUGmSMce73DWCBfbKbANp91zFuZeRS8i%2B9%2FWzn0CZKKf1%2FpnJitgT4hvJ%2BtRtUawjY7ebXWy7nZqFya62d4wgVL2m9faSxiPf%2FbcfAjvYjDOVZIN1ZzEz6WcFAx7lRCF2H&X-Amz-Signature=1f4b1a5a167caf6932097ea7b1a9ce38f229e8d03de7338c76e34f1cdd5ef020&X-Amz-SignedHeaders=host&x-id=GetObject)
