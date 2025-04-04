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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVD7I63%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKoGGK0gKdnBzwG1nIDI4UlHaqD%2Bsw3pipIszlBR4gQIgZTUIdiriX0enO6TW93emAEcp117jlyin9NRvmEy0IDAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDE9eMfqmN5pBxhmL%2BCrcAxiPNOmofOmMwY%2B6Cej2o5k2TM7M3a0qfhUyAjvOLLJxKHLzys1QJ2nqtZSAcv8LDm3U2Xnwqb9kXPYCjAsF%2Fv44PixDgi%2F2VbbwxjdvGdlWmW%2FTknMD7aj0p0EmbM%2F00ebe363grzJgMQqkig2p%2FXLYFdqkfh5El4A5GB5lFTHUSMK89csq4hlBPH0Eb7pQHe3VZtq4bUoFh0FbY1l%2BKOPQYzc41dJYridKT7llNIYSBx4Qonzx8dH37hCxk5DsAOM3b1c9uIraGuk%2B9YG4oHBWd5KVpIO2Pikicy16ES%2BqIvyb3ZuTwg63E0H0OdVWBKf7eaLKHBFi5xrxRdefqvLGsgF834J6wIj6byKJVYy1grP4shLppIT068N3EzWRbUSRIerbZ9EvGn8SXs09B53LYqyaTOTHzFJ1EGmIadE6kx8ko6PJToo5EPSmi8Tyc0c6gGFbjsDJ%2Bp76nrEpQJdKUXqYgqg0TGZ1YbP1bsQ1vK%2B4VfRScyhnSqdrHtmssgNHGGihyfttyxfTdk1%2BddCe7VXLpivGDoYQ9QuWlZZUTEsODQIVAZq3BZ%2BzlvSnLw%2FLB9kZR%2BbEHyadAy1HIxVlyjbgw%2Fbrqah3d6eGombpbGdMnNY1MqAXWjnuMNPmv78GOqUBjOfhfs%2FRNUWwC9MpdLVBZkhUj9I1CJkTSPTBLPDcn83yxph%2FXaQ2ZrPEdwiHEW4s2lAIkcU%2Frqq0qKBW4y%2Bsx0fTEb7liA0Wmik11Kp9gXw3EmbdK%2FAYenrolAeZHiARC4JPBpP9HpfXY6IK3seZKqQWpCmqgFPwrfSux44BSofSpOF0Q0Jaa5ntXHUrx0SDE%2BxfJTxaj1F4AZyDgtt6Mxc717Av&X-Amz-Signature=3de6f50cc5cd462a35cbbafdece1e24751afc21a2cad1b3d1b7e265248f762b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVD7I63%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKoGGK0gKdnBzwG1nIDI4UlHaqD%2Bsw3pipIszlBR4gQIgZTUIdiriX0enO6TW93emAEcp117jlyin9NRvmEy0IDAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDE9eMfqmN5pBxhmL%2BCrcAxiPNOmofOmMwY%2B6Cej2o5k2TM7M3a0qfhUyAjvOLLJxKHLzys1QJ2nqtZSAcv8LDm3U2Xnwqb9kXPYCjAsF%2Fv44PixDgi%2F2VbbwxjdvGdlWmW%2FTknMD7aj0p0EmbM%2F00ebe363grzJgMQqkig2p%2FXLYFdqkfh5El4A5GB5lFTHUSMK89csq4hlBPH0Eb7pQHe3VZtq4bUoFh0FbY1l%2BKOPQYzc41dJYridKT7llNIYSBx4Qonzx8dH37hCxk5DsAOM3b1c9uIraGuk%2B9YG4oHBWd5KVpIO2Pikicy16ES%2BqIvyb3ZuTwg63E0H0OdVWBKf7eaLKHBFi5xrxRdefqvLGsgF834J6wIj6byKJVYy1grP4shLppIT068N3EzWRbUSRIerbZ9EvGn8SXs09B53LYqyaTOTHzFJ1EGmIadE6kx8ko6PJToo5EPSmi8Tyc0c6gGFbjsDJ%2Bp76nrEpQJdKUXqYgqg0TGZ1YbP1bsQ1vK%2B4VfRScyhnSqdrHtmssgNHGGihyfttyxfTdk1%2BddCe7VXLpivGDoYQ9QuWlZZUTEsODQIVAZq3BZ%2BzlvSnLw%2FLB9kZR%2BbEHyadAy1HIxVlyjbgw%2Fbrqah3d6eGombpbGdMnNY1MqAXWjnuMNPmv78GOqUBjOfhfs%2FRNUWwC9MpdLVBZkhUj9I1CJkTSPTBLPDcn83yxph%2FXaQ2ZrPEdwiHEW4s2lAIkcU%2Frqq0qKBW4y%2Bsx0fTEb7liA0Wmik11Kp9gXw3EmbdK%2FAYenrolAeZHiARC4JPBpP9HpfXY6IK3seZKqQWpCmqgFPwrfSux44BSofSpOF0Q0Jaa5ntXHUrx0SDE%2BxfJTxaj1F4AZyDgtt6Mxc717Av&X-Amz-Signature=baf704f2396372ee133bb38120474cf98e137309defd997dcf6216225ddf40ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVD7I63%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKoGGK0gKdnBzwG1nIDI4UlHaqD%2Bsw3pipIszlBR4gQIgZTUIdiriX0enO6TW93emAEcp117jlyin9NRvmEy0IDAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDE9eMfqmN5pBxhmL%2BCrcAxiPNOmofOmMwY%2B6Cej2o5k2TM7M3a0qfhUyAjvOLLJxKHLzys1QJ2nqtZSAcv8LDm3U2Xnwqb9kXPYCjAsF%2Fv44PixDgi%2F2VbbwxjdvGdlWmW%2FTknMD7aj0p0EmbM%2F00ebe363grzJgMQqkig2p%2FXLYFdqkfh5El4A5GB5lFTHUSMK89csq4hlBPH0Eb7pQHe3VZtq4bUoFh0FbY1l%2BKOPQYzc41dJYridKT7llNIYSBx4Qonzx8dH37hCxk5DsAOM3b1c9uIraGuk%2B9YG4oHBWd5KVpIO2Pikicy16ES%2BqIvyb3ZuTwg63E0H0OdVWBKf7eaLKHBFi5xrxRdefqvLGsgF834J6wIj6byKJVYy1grP4shLppIT068N3EzWRbUSRIerbZ9EvGn8SXs09B53LYqyaTOTHzFJ1EGmIadE6kx8ko6PJToo5EPSmi8Tyc0c6gGFbjsDJ%2Bp76nrEpQJdKUXqYgqg0TGZ1YbP1bsQ1vK%2B4VfRScyhnSqdrHtmssgNHGGihyfttyxfTdk1%2BddCe7VXLpivGDoYQ9QuWlZZUTEsODQIVAZq3BZ%2BzlvSnLw%2FLB9kZR%2BbEHyadAy1HIxVlyjbgw%2Fbrqah3d6eGombpbGdMnNY1MqAXWjnuMNPmv78GOqUBjOfhfs%2FRNUWwC9MpdLVBZkhUj9I1CJkTSPTBLPDcn83yxph%2FXaQ2ZrPEdwiHEW4s2lAIkcU%2Frqq0qKBW4y%2Bsx0fTEb7liA0Wmik11Kp9gXw3EmbdK%2FAYenrolAeZHiARC4JPBpP9HpfXY6IK3seZKqQWpCmqgFPwrfSux44BSofSpOF0Q0Jaa5ntXHUrx0SDE%2BxfJTxaj1F4AZyDgtt6Mxc717Av&X-Amz-Signature=7094ac4210e74108f88a7903d02385a9d3d9f650dbae4ec0b82c0836a55a3ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVD7I63%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKoGGK0gKdnBzwG1nIDI4UlHaqD%2Bsw3pipIszlBR4gQIgZTUIdiriX0enO6TW93emAEcp117jlyin9NRvmEy0IDAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDE9eMfqmN5pBxhmL%2BCrcAxiPNOmofOmMwY%2B6Cej2o5k2TM7M3a0qfhUyAjvOLLJxKHLzys1QJ2nqtZSAcv8LDm3U2Xnwqb9kXPYCjAsF%2Fv44PixDgi%2F2VbbwxjdvGdlWmW%2FTknMD7aj0p0EmbM%2F00ebe363grzJgMQqkig2p%2FXLYFdqkfh5El4A5GB5lFTHUSMK89csq4hlBPH0Eb7pQHe3VZtq4bUoFh0FbY1l%2BKOPQYzc41dJYridKT7llNIYSBx4Qonzx8dH37hCxk5DsAOM3b1c9uIraGuk%2B9YG4oHBWd5KVpIO2Pikicy16ES%2BqIvyb3ZuTwg63E0H0OdVWBKf7eaLKHBFi5xrxRdefqvLGsgF834J6wIj6byKJVYy1grP4shLppIT068N3EzWRbUSRIerbZ9EvGn8SXs09B53LYqyaTOTHzFJ1EGmIadE6kx8ko6PJToo5EPSmi8Tyc0c6gGFbjsDJ%2Bp76nrEpQJdKUXqYgqg0TGZ1YbP1bsQ1vK%2B4VfRScyhnSqdrHtmssgNHGGihyfttyxfTdk1%2BddCe7VXLpivGDoYQ9QuWlZZUTEsODQIVAZq3BZ%2BzlvSnLw%2FLB9kZR%2BbEHyadAy1HIxVlyjbgw%2Fbrqah3d6eGombpbGdMnNY1MqAXWjnuMNPmv78GOqUBjOfhfs%2FRNUWwC9MpdLVBZkhUj9I1CJkTSPTBLPDcn83yxph%2FXaQ2ZrPEdwiHEW4s2lAIkcU%2Frqq0qKBW4y%2Bsx0fTEb7liA0Wmik11Kp9gXw3EmbdK%2FAYenrolAeZHiARC4JPBpP9HpfXY6IK3seZKqQWpCmqgFPwrfSux44BSofSpOF0Q0Jaa5ntXHUrx0SDE%2BxfJTxaj1F4AZyDgtt6Mxc717Av&X-Amz-Signature=33ab204d5116d6be8055cdea9264250070db4cfad0be05e62bea191492f8e512&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVD7I63%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKoGGK0gKdnBzwG1nIDI4UlHaqD%2Bsw3pipIszlBR4gQIgZTUIdiriX0enO6TW93emAEcp117jlyin9NRvmEy0IDAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDE9eMfqmN5pBxhmL%2BCrcAxiPNOmofOmMwY%2B6Cej2o5k2TM7M3a0qfhUyAjvOLLJxKHLzys1QJ2nqtZSAcv8LDm3U2Xnwqb9kXPYCjAsF%2Fv44PixDgi%2F2VbbwxjdvGdlWmW%2FTknMD7aj0p0EmbM%2F00ebe363grzJgMQqkig2p%2FXLYFdqkfh5El4A5GB5lFTHUSMK89csq4hlBPH0Eb7pQHe3VZtq4bUoFh0FbY1l%2BKOPQYzc41dJYridKT7llNIYSBx4Qonzx8dH37hCxk5DsAOM3b1c9uIraGuk%2B9YG4oHBWd5KVpIO2Pikicy16ES%2BqIvyb3ZuTwg63E0H0OdVWBKf7eaLKHBFi5xrxRdefqvLGsgF834J6wIj6byKJVYy1grP4shLppIT068N3EzWRbUSRIerbZ9EvGn8SXs09B53LYqyaTOTHzFJ1EGmIadE6kx8ko6PJToo5EPSmi8Tyc0c6gGFbjsDJ%2Bp76nrEpQJdKUXqYgqg0TGZ1YbP1bsQ1vK%2B4VfRScyhnSqdrHtmssgNHGGihyfttyxfTdk1%2BddCe7VXLpivGDoYQ9QuWlZZUTEsODQIVAZq3BZ%2BzlvSnLw%2FLB9kZR%2BbEHyadAy1HIxVlyjbgw%2Fbrqah3d6eGombpbGdMnNY1MqAXWjnuMNPmv78GOqUBjOfhfs%2FRNUWwC9MpdLVBZkhUj9I1CJkTSPTBLPDcn83yxph%2FXaQ2ZrPEdwiHEW4s2lAIkcU%2Frqq0qKBW4y%2Bsx0fTEb7liA0Wmik11Kp9gXw3EmbdK%2FAYenrolAeZHiARC4JPBpP9HpfXY6IK3seZKqQWpCmqgFPwrfSux44BSofSpOF0Q0Jaa5ntXHUrx0SDE%2BxfJTxaj1F4AZyDgtt6Mxc717Av&X-Amz-Signature=221c9101eb4f07e57c0bc5b350eff1cecc554f40f300de6ef69171c2555c7d31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVD7I63%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKoGGK0gKdnBzwG1nIDI4UlHaqD%2Bsw3pipIszlBR4gQIgZTUIdiriX0enO6TW93emAEcp117jlyin9NRvmEy0IDAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDE9eMfqmN5pBxhmL%2BCrcAxiPNOmofOmMwY%2B6Cej2o5k2TM7M3a0qfhUyAjvOLLJxKHLzys1QJ2nqtZSAcv8LDm3U2Xnwqb9kXPYCjAsF%2Fv44PixDgi%2F2VbbwxjdvGdlWmW%2FTknMD7aj0p0EmbM%2F00ebe363grzJgMQqkig2p%2FXLYFdqkfh5El4A5GB5lFTHUSMK89csq4hlBPH0Eb7pQHe3VZtq4bUoFh0FbY1l%2BKOPQYzc41dJYridKT7llNIYSBx4Qonzx8dH37hCxk5DsAOM3b1c9uIraGuk%2B9YG4oHBWd5KVpIO2Pikicy16ES%2BqIvyb3ZuTwg63E0H0OdVWBKf7eaLKHBFi5xrxRdefqvLGsgF834J6wIj6byKJVYy1grP4shLppIT068N3EzWRbUSRIerbZ9EvGn8SXs09B53LYqyaTOTHzFJ1EGmIadE6kx8ko6PJToo5EPSmi8Tyc0c6gGFbjsDJ%2Bp76nrEpQJdKUXqYgqg0TGZ1YbP1bsQ1vK%2B4VfRScyhnSqdrHtmssgNHGGihyfttyxfTdk1%2BddCe7VXLpivGDoYQ9QuWlZZUTEsODQIVAZq3BZ%2BzlvSnLw%2FLB9kZR%2BbEHyadAy1HIxVlyjbgw%2Fbrqah3d6eGombpbGdMnNY1MqAXWjnuMNPmv78GOqUBjOfhfs%2FRNUWwC9MpdLVBZkhUj9I1CJkTSPTBLPDcn83yxph%2FXaQ2ZrPEdwiHEW4s2lAIkcU%2Frqq0qKBW4y%2Bsx0fTEb7liA0Wmik11Kp9gXw3EmbdK%2FAYenrolAeZHiARC4JPBpP9HpfXY6IK3seZKqQWpCmqgFPwrfSux44BSofSpOF0Q0Jaa5ntXHUrx0SDE%2BxfJTxaj1F4AZyDgtt6Mxc717Av&X-Amz-Signature=080ef127f66db73bf6bf640b287d6bbe75497ee25358a2ba4db9ae53ab00abd1&X-Amz-SignedHeaders=host&x-id=GetObject)
