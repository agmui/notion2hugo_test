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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPF7CQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfaOCNgfneWqW9mbtT6C6Jkc5FwtRi576GMoLYQzx2mAiEA9HTHXmdFtk0EVbjTRwYzZ0wV51oGwLf1Bz71ssuAZO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwlZh3%2BhAwIrR%2B18yrcA%2Bve0ijAkvebOWUg7%2FgDFbgV5cKFU5vw%2BWuj9x2IAjDwgAcr%2FZRPwTXyowF7Fg9ZQy3PdIC78I4bNZzEoVGNzoNiP%2BtWakGzr2Vatqm4PBHbbm3xiQvga3r%2FF65S3%2BeSvIBOTqQRFZedmnLR7O3UrsL20R2mBQ3WE8xutuATLVjmqqm9DvWqY8yc%2F9bviXTvfWoxcVkAm7oJnGMThH7XKY4q%2BPizmjjrn9lVo01zeruNvgUxXra1oGch3MJGhFLPpqBR%2BjzQjQpHU7e0u1DEUsjgDSaea%2B960%2FOsPFbHkv4eC6H%2BHcz%2BbxCgqBjruL9FA1oIChUAZsRyR%2FbP%2FTfMQRwoLW7bQtOp3av4Pb8VG84ZBwBVmSjZPfZYEv1S1L9qHIXzCdNe4cfG685%2BCC5qQMZFJ5scYYTw7tkgeVxyTbl3MbPgWRBeJDOXMz5afKoqgNZBVwjqdPzQiqNcPocMLEZ8VOicMhei6V4OBL7jlyTWe0grfx0exmw5KIKAuMZRU5RYobP%2BvFqT%2BWTZGJRWWCc0PzD%2FNCbzLDKPKjs820yZLH8dkm1B6oET3df4%2FgFiNrEeVnee9dUWp1RrNGQLVHxe81rQdOfgL%2BrjCU1l%2BEvlE%2BdzrfVypFM%2FJvTiMIWk1cIGOqUBCmBYNF0QgtyHVjFUF%2BnFCEgMF%2FTxO1y5XVAP81PojyKPvg%2FHmY3TyohAm%2F1yXDRMPVTHEwSx%2B%2FTKCNLbunQc7zwNIHr1uHMkS5qrxSRL1zhZtPkNCWe6RQfdFVsq0gghIF404FnxwmqnNX%2BnxS94J2yc4b1xz1d164KFwkPYLLcCWO%2BdawWX5ml18zWtLqfkgL5MIZvl6IRbS4k%2Bc1TiwNa0ODXW&X-Amz-Signature=5390e6267dd1eb0d097052121aaf97646f690476d2eb1e175606f2e8d30b8402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPF7CQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfaOCNgfneWqW9mbtT6C6Jkc5FwtRi576GMoLYQzx2mAiEA9HTHXmdFtk0EVbjTRwYzZ0wV51oGwLf1Bz71ssuAZO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwlZh3%2BhAwIrR%2B18yrcA%2Bve0ijAkvebOWUg7%2FgDFbgV5cKFU5vw%2BWuj9x2IAjDwgAcr%2FZRPwTXyowF7Fg9ZQy3PdIC78I4bNZzEoVGNzoNiP%2BtWakGzr2Vatqm4PBHbbm3xiQvga3r%2FF65S3%2BeSvIBOTqQRFZedmnLR7O3UrsL20R2mBQ3WE8xutuATLVjmqqm9DvWqY8yc%2F9bviXTvfWoxcVkAm7oJnGMThH7XKY4q%2BPizmjjrn9lVo01zeruNvgUxXra1oGch3MJGhFLPpqBR%2BjzQjQpHU7e0u1DEUsjgDSaea%2B960%2FOsPFbHkv4eC6H%2BHcz%2BbxCgqBjruL9FA1oIChUAZsRyR%2FbP%2FTfMQRwoLW7bQtOp3av4Pb8VG84ZBwBVmSjZPfZYEv1S1L9qHIXzCdNe4cfG685%2BCC5qQMZFJ5scYYTw7tkgeVxyTbl3MbPgWRBeJDOXMz5afKoqgNZBVwjqdPzQiqNcPocMLEZ8VOicMhei6V4OBL7jlyTWe0grfx0exmw5KIKAuMZRU5RYobP%2BvFqT%2BWTZGJRWWCc0PzD%2FNCbzLDKPKjs820yZLH8dkm1B6oET3df4%2FgFiNrEeVnee9dUWp1RrNGQLVHxe81rQdOfgL%2BrjCU1l%2BEvlE%2BdzrfVypFM%2FJvTiMIWk1cIGOqUBCmBYNF0QgtyHVjFUF%2BnFCEgMF%2FTxO1y5XVAP81PojyKPvg%2FHmY3TyohAm%2F1yXDRMPVTHEwSx%2B%2FTKCNLbunQc7zwNIHr1uHMkS5qrxSRL1zhZtPkNCWe6RQfdFVsq0gghIF404FnxwmqnNX%2BnxS94J2yc4b1xz1d164KFwkPYLLcCWO%2BdawWX5ml18zWtLqfkgL5MIZvl6IRbS4k%2Bc1TiwNa0ODXW&X-Amz-Signature=6008e8766cc886daa7571e0fdf476a9b2226a795b3105de20845d0c72f5c4aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPF7CQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfaOCNgfneWqW9mbtT6C6Jkc5FwtRi576GMoLYQzx2mAiEA9HTHXmdFtk0EVbjTRwYzZ0wV51oGwLf1Bz71ssuAZO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwlZh3%2BhAwIrR%2B18yrcA%2Bve0ijAkvebOWUg7%2FgDFbgV5cKFU5vw%2BWuj9x2IAjDwgAcr%2FZRPwTXyowF7Fg9ZQy3PdIC78I4bNZzEoVGNzoNiP%2BtWakGzr2Vatqm4PBHbbm3xiQvga3r%2FF65S3%2BeSvIBOTqQRFZedmnLR7O3UrsL20R2mBQ3WE8xutuATLVjmqqm9DvWqY8yc%2F9bviXTvfWoxcVkAm7oJnGMThH7XKY4q%2BPizmjjrn9lVo01zeruNvgUxXra1oGch3MJGhFLPpqBR%2BjzQjQpHU7e0u1DEUsjgDSaea%2B960%2FOsPFbHkv4eC6H%2BHcz%2BbxCgqBjruL9FA1oIChUAZsRyR%2FbP%2FTfMQRwoLW7bQtOp3av4Pb8VG84ZBwBVmSjZPfZYEv1S1L9qHIXzCdNe4cfG685%2BCC5qQMZFJ5scYYTw7tkgeVxyTbl3MbPgWRBeJDOXMz5afKoqgNZBVwjqdPzQiqNcPocMLEZ8VOicMhei6V4OBL7jlyTWe0grfx0exmw5KIKAuMZRU5RYobP%2BvFqT%2BWTZGJRWWCc0PzD%2FNCbzLDKPKjs820yZLH8dkm1B6oET3df4%2FgFiNrEeVnee9dUWp1RrNGQLVHxe81rQdOfgL%2BrjCU1l%2BEvlE%2BdzrfVypFM%2FJvTiMIWk1cIGOqUBCmBYNF0QgtyHVjFUF%2BnFCEgMF%2FTxO1y5XVAP81PojyKPvg%2FHmY3TyohAm%2F1yXDRMPVTHEwSx%2B%2FTKCNLbunQc7zwNIHr1uHMkS5qrxSRL1zhZtPkNCWe6RQfdFVsq0gghIF404FnxwmqnNX%2BnxS94J2yc4b1xz1d164KFwkPYLLcCWO%2BdawWX5ml18zWtLqfkgL5MIZvl6IRbS4k%2Bc1TiwNa0ODXW&X-Amz-Signature=b29f0201ba7c4e3040c58a1a5e5d1a13c428bb59c76041abd2381bb7cd7051a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPF7CQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfaOCNgfneWqW9mbtT6C6Jkc5FwtRi576GMoLYQzx2mAiEA9HTHXmdFtk0EVbjTRwYzZ0wV51oGwLf1Bz71ssuAZO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwlZh3%2BhAwIrR%2B18yrcA%2Bve0ijAkvebOWUg7%2FgDFbgV5cKFU5vw%2BWuj9x2IAjDwgAcr%2FZRPwTXyowF7Fg9ZQy3PdIC78I4bNZzEoVGNzoNiP%2BtWakGzr2Vatqm4PBHbbm3xiQvga3r%2FF65S3%2BeSvIBOTqQRFZedmnLR7O3UrsL20R2mBQ3WE8xutuATLVjmqqm9DvWqY8yc%2F9bviXTvfWoxcVkAm7oJnGMThH7XKY4q%2BPizmjjrn9lVo01zeruNvgUxXra1oGch3MJGhFLPpqBR%2BjzQjQpHU7e0u1DEUsjgDSaea%2B960%2FOsPFbHkv4eC6H%2BHcz%2BbxCgqBjruL9FA1oIChUAZsRyR%2FbP%2FTfMQRwoLW7bQtOp3av4Pb8VG84ZBwBVmSjZPfZYEv1S1L9qHIXzCdNe4cfG685%2BCC5qQMZFJ5scYYTw7tkgeVxyTbl3MbPgWRBeJDOXMz5afKoqgNZBVwjqdPzQiqNcPocMLEZ8VOicMhei6V4OBL7jlyTWe0grfx0exmw5KIKAuMZRU5RYobP%2BvFqT%2BWTZGJRWWCc0PzD%2FNCbzLDKPKjs820yZLH8dkm1B6oET3df4%2FgFiNrEeVnee9dUWp1RrNGQLVHxe81rQdOfgL%2BrjCU1l%2BEvlE%2BdzrfVypFM%2FJvTiMIWk1cIGOqUBCmBYNF0QgtyHVjFUF%2BnFCEgMF%2FTxO1y5XVAP81PojyKPvg%2FHmY3TyohAm%2F1yXDRMPVTHEwSx%2B%2FTKCNLbunQc7zwNIHr1uHMkS5qrxSRL1zhZtPkNCWe6RQfdFVsq0gghIF404FnxwmqnNX%2BnxS94J2yc4b1xz1d164KFwkPYLLcCWO%2BdawWX5ml18zWtLqfkgL5MIZvl6IRbS4k%2Bc1TiwNa0ODXW&X-Amz-Signature=0c65bb691830fbceb3375dac6a549014e37f05b0735de3c0777e7df6a223bd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPF7CQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfaOCNgfneWqW9mbtT6C6Jkc5FwtRi576GMoLYQzx2mAiEA9HTHXmdFtk0EVbjTRwYzZ0wV51oGwLf1Bz71ssuAZO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwlZh3%2BhAwIrR%2B18yrcA%2Bve0ijAkvebOWUg7%2FgDFbgV5cKFU5vw%2BWuj9x2IAjDwgAcr%2FZRPwTXyowF7Fg9ZQy3PdIC78I4bNZzEoVGNzoNiP%2BtWakGzr2Vatqm4PBHbbm3xiQvga3r%2FF65S3%2BeSvIBOTqQRFZedmnLR7O3UrsL20R2mBQ3WE8xutuATLVjmqqm9DvWqY8yc%2F9bviXTvfWoxcVkAm7oJnGMThH7XKY4q%2BPizmjjrn9lVo01zeruNvgUxXra1oGch3MJGhFLPpqBR%2BjzQjQpHU7e0u1DEUsjgDSaea%2B960%2FOsPFbHkv4eC6H%2BHcz%2BbxCgqBjruL9FA1oIChUAZsRyR%2FbP%2FTfMQRwoLW7bQtOp3av4Pb8VG84ZBwBVmSjZPfZYEv1S1L9qHIXzCdNe4cfG685%2BCC5qQMZFJ5scYYTw7tkgeVxyTbl3MbPgWRBeJDOXMz5afKoqgNZBVwjqdPzQiqNcPocMLEZ8VOicMhei6V4OBL7jlyTWe0grfx0exmw5KIKAuMZRU5RYobP%2BvFqT%2BWTZGJRWWCc0PzD%2FNCbzLDKPKjs820yZLH8dkm1B6oET3df4%2FgFiNrEeVnee9dUWp1RrNGQLVHxe81rQdOfgL%2BrjCU1l%2BEvlE%2BdzrfVypFM%2FJvTiMIWk1cIGOqUBCmBYNF0QgtyHVjFUF%2BnFCEgMF%2FTxO1y5XVAP81PojyKPvg%2FHmY3TyohAm%2F1yXDRMPVTHEwSx%2B%2FTKCNLbunQc7zwNIHr1uHMkS5qrxSRL1zhZtPkNCWe6RQfdFVsq0gghIF404FnxwmqnNX%2BnxS94J2yc4b1xz1d164KFwkPYLLcCWO%2BdawWX5ml18zWtLqfkgL5MIZvl6IRbS4k%2Bc1TiwNa0ODXW&X-Amz-Signature=da6c620dcf8fce5dec16d908d0fd5fd315268afabbd6c9c09a6a3c14ed4880e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMPF7CQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfaOCNgfneWqW9mbtT6C6Jkc5FwtRi576GMoLYQzx2mAiEA9HTHXmdFtk0EVbjTRwYzZ0wV51oGwLf1Bz71ssuAZO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwlZh3%2BhAwIrR%2B18yrcA%2Bve0ijAkvebOWUg7%2FgDFbgV5cKFU5vw%2BWuj9x2IAjDwgAcr%2FZRPwTXyowF7Fg9ZQy3PdIC78I4bNZzEoVGNzoNiP%2BtWakGzr2Vatqm4PBHbbm3xiQvga3r%2FF65S3%2BeSvIBOTqQRFZedmnLR7O3UrsL20R2mBQ3WE8xutuATLVjmqqm9DvWqY8yc%2F9bviXTvfWoxcVkAm7oJnGMThH7XKY4q%2BPizmjjrn9lVo01zeruNvgUxXra1oGch3MJGhFLPpqBR%2BjzQjQpHU7e0u1DEUsjgDSaea%2B960%2FOsPFbHkv4eC6H%2BHcz%2BbxCgqBjruL9FA1oIChUAZsRyR%2FbP%2FTfMQRwoLW7bQtOp3av4Pb8VG84ZBwBVmSjZPfZYEv1S1L9qHIXzCdNe4cfG685%2BCC5qQMZFJ5scYYTw7tkgeVxyTbl3MbPgWRBeJDOXMz5afKoqgNZBVwjqdPzQiqNcPocMLEZ8VOicMhei6V4OBL7jlyTWe0grfx0exmw5KIKAuMZRU5RYobP%2BvFqT%2BWTZGJRWWCc0PzD%2FNCbzLDKPKjs820yZLH8dkm1B6oET3df4%2FgFiNrEeVnee9dUWp1RrNGQLVHxe81rQdOfgL%2BrjCU1l%2BEvlE%2BdzrfVypFM%2FJvTiMIWk1cIGOqUBCmBYNF0QgtyHVjFUF%2BnFCEgMF%2FTxO1y5XVAP81PojyKPvg%2FHmY3TyohAm%2F1yXDRMPVTHEwSx%2B%2FTKCNLbunQc7zwNIHr1uHMkS5qrxSRL1zhZtPkNCWe6RQfdFVsq0gghIF404FnxwmqnNX%2BnxS94J2yc4b1xz1d164KFwkPYLLcCWO%2BdawWX5ml18zWtLqfkgL5MIZvl6IRbS4k%2Bc1TiwNa0ODXW&X-Amz-Signature=2cb577485f968574f0ee4006b887978bc9fc5beb5403ae1e0c2c96efc372bf79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
