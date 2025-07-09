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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W745WFZ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3ac7Bv1NEd1RGly8vcleDA%2BhqA2tNxBr3e%2FYKS4WqTAiAfyqDpFVWDUvZRflaIx7Wa8lUReNaHC%2F0i2WHRcF%2Bj0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqZxjHt1ibRp6ROfKtwDkD9I1LBZq4EFmXdGFPljZEdC7Fsp9HrI%2Fsyd4ANQ37RzohY2Mga%2FrnkZyZFjHS4GwM4s8uRfdRTdEtUQt0TRt%2FbGGMYRhQioD%2BciF9os%2B%2FfmwvolZbg50%2FTlc%2BsooPeSqwzhM4AFrYz2hLVCC2pBXyx9G67dmlPywcV7Xp2g0BSvRmVe5iRsWChtxk8GIusH0ofh1l1caMftF1nWDY2lGmtGKG%2F1CiLKv0DG58mOvRlX4j0BnwZ%2Bvu5VbWnyjRpqhxdggGKI2DhImHzibfUlWunhCX1ePuSUIDQc6nxayb4ckeBg5FBjY9sRtJtPSqw%2FtrfV%2FJQR3g7wcVvaUejZOupAkiAdaeYrZlhap3bNKFzUhdNYV52WBE3pFQuOW6tfi1hgwZeE0agVo0fyvx170pDkOdA3pyhjzwNhR1faSmvnP2QrQukunzJc%2BixXPK6slPU%2BSocXM%2B5Ed0h4RqSJ5cPlWchGz5qVXWuBAjOKMwcGUcSKTajppcgFP3Pkc1er7OwXzJc4pF0UUt770VfiTZKOm0ZtBs5mgS3Pt5mCU%2FLLxpeN8OZB3cURKDEriVMMYKVLEvkP8hkF3AUNTyync2gYwezffqwCYcLEwz%2BrqehT6%2BzIXtMb7ilTkWwwm%2Bu5wwY6pgEkbIKZIa8r9rreUN%2Bl%2FDcLOta1NQE%2FhzlSArwJDFePwi36LdyUa%2B%2FPX9Vf%2BFvQBW4Jmc4lagHRfeXc5ONmYvq2aLVO5k%2B2e32%2BlauCnM%2BA1x9CT6RfndzuXVtK8oe05PuA37wpKH8k14ZUWao06BVwXHWVhGoQ2md%2FjF%2FtNL9PP8lB4SNH9F4POeyPO00EbSWeIylmLGVlWbdbYmM8hV8fVijRxh8S&X-Amz-Signature=c84bf7ccef8e6fd8130f8d3c422ba9a2e6601c044f8b0ce8b5ca9f25f8452270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W745WFZ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3ac7Bv1NEd1RGly8vcleDA%2BhqA2tNxBr3e%2FYKS4WqTAiAfyqDpFVWDUvZRflaIx7Wa8lUReNaHC%2F0i2WHRcF%2Bj0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqZxjHt1ibRp6ROfKtwDkD9I1LBZq4EFmXdGFPljZEdC7Fsp9HrI%2Fsyd4ANQ37RzohY2Mga%2FrnkZyZFjHS4GwM4s8uRfdRTdEtUQt0TRt%2FbGGMYRhQioD%2BciF9os%2B%2FfmwvolZbg50%2FTlc%2BsooPeSqwzhM4AFrYz2hLVCC2pBXyx9G67dmlPywcV7Xp2g0BSvRmVe5iRsWChtxk8GIusH0ofh1l1caMftF1nWDY2lGmtGKG%2F1CiLKv0DG58mOvRlX4j0BnwZ%2Bvu5VbWnyjRpqhxdggGKI2DhImHzibfUlWunhCX1ePuSUIDQc6nxayb4ckeBg5FBjY9sRtJtPSqw%2FtrfV%2FJQR3g7wcVvaUejZOupAkiAdaeYrZlhap3bNKFzUhdNYV52WBE3pFQuOW6tfi1hgwZeE0agVo0fyvx170pDkOdA3pyhjzwNhR1faSmvnP2QrQukunzJc%2BixXPK6slPU%2BSocXM%2B5Ed0h4RqSJ5cPlWchGz5qVXWuBAjOKMwcGUcSKTajppcgFP3Pkc1er7OwXzJc4pF0UUt770VfiTZKOm0ZtBs5mgS3Pt5mCU%2FLLxpeN8OZB3cURKDEriVMMYKVLEvkP8hkF3AUNTyync2gYwezffqwCYcLEwz%2BrqehT6%2BzIXtMb7ilTkWwwm%2Bu5wwY6pgEkbIKZIa8r9rreUN%2Bl%2FDcLOta1NQE%2FhzlSArwJDFePwi36LdyUa%2B%2FPX9Vf%2BFvQBW4Jmc4lagHRfeXc5ONmYvq2aLVO5k%2B2e32%2BlauCnM%2BA1x9CT6RfndzuXVtK8oe05PuA37wpKH8k14ZUWao06BVwXHWVhGoQ2md%2FjF%2FtNL9PP8lB4SNH9F4POeyPO00EbSWeIylmLGVlWbdbYmM8hV8fVijRxh8S&X-Amz-Signature=1e980e1831e6bb1c0289cd5b5b572a08f2b4c36c7860d52008824795349d2799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W745WFZ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3ac7Bv1NEd1RGly8vcleDA%2BhqA2tNxBr3e%2FYKS4WqTAiAfyqDpFVWDUvZRflaIx7Wa8lUReNaHC%2F0i2WHRcF%2Bj0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqZxjHt1ibRp6ROfKtwDkD9I1LBZq4EFmXdGFPljZEdC7Fsp9HrI%2Fsyd4ANQ37RzohY2Mga%2FrnkZyZFjHS4GwM4s8uRfdRTdEtUQt0TRt%2FbGGMYRhQioD%2BciF9os%2B%2FfmwvolZbg50%2FTlc%2BsooPeSqwzhM4AFrYz2hLVCC2pBXyx9G67dmlPywcV7Xp2g0BSvRmVe5iRsWChtxk8GIusH0ofh1l1caMftF1nWDY2lGmtGKG%2F1CiLKv0DG58mOvRlX4j0BnwZ%2Bvu5VbWnyjRpqhxdggGKI2DhImHzibfUlWunhCX1ePuSUIDQc6nxayb4ckeBg5FBjY9sRtJtPSqw%2FtrfV%2FJQR3g7wcVvaUejZOupAkiAdaeYrZlhap3bNKFzUhdNYV52WBE3pFQuOW6tfi1hgwZeE0agVo0fyvx170pDkOdA3pyhjzwNhR1faSmvnP2QrQukunzJc%2BixXPK6slPU%2BSocXM%2B5Ed0h4RqSJ5cPlWchGz5qVXWuBAjOKMwcGUcSKTajppcgFP3Pkc1er7OwXzJc4pF0UUt770VfiTZKOm0ZtBs5mgS3Pt5mCU%2FLLxpeN8OZB3cURKDEriVMMYKVLEvkP8hkF3AUNTyync2gYwezffqwCYcLEwz%2BrqehT6%2BzIXtMb7ilTkWwwm%2Bu5wwY6pgEkbIKZIa8r9rreUN%2Bl%2FDcLOta1NQE%2FhzlSArwJDFePwi36LdyUa%2B%2FPX9Vf%2BFvQBW4Jmc4lagHRfeXc5ONmYvq2aLVO5k%2B2e32%2BlauCnM%2BA1x9CT6RfndzuXVtK8oe05PuA37wpKH8k14ZUWao06BVwXHWVhGoQ2md%2FjF%2FtNL9PP8lB4SNH9F4POeyPO00EbSWeIylmLGVlWbdbYmM8hV8fVijRxh8S&X-Amz-Signature=5b20de2bebdc8811c7b474e229a9a3cf6749153ce6df38eae7e851832be2adfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W745WFZ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3ac7Bv1NEd1RGly8vcleDA%2BhqA2tNxBr3e%2FYKS4WqTAiAfyqDpFVWDUvZRflaIx7Wa8lUReNaHC%2F0i2WHRcF%2Bj0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqZxjHt1ibRp6ROfKtwDkD9I1LBZq4EFmXdGFPljZEdC7Fsp9HrI%2Fsyd4ANQ37RzohY2Mga%2FrnkZyZFjHS4GwM4s8uRfdRTdEtUQt0TRt%2FbGGMYRhQioD%2BciF9os%2B%2FfmwvolZbg50%2FTlc%2BsooPeSqwzhM4AFrYz2hLVCC2pBXyx9G67dmlPywcV7Xp2g0BSvRmVe5iRsWChtxk8GIusH0ofh1l1caMftF1nWDY2lGmtGKG%2F1CiLKv0DG58mOvRlX4j0BnwZ%2Bvu5VbWnyjRpqhxdggGKI2DhImHzibfUlWunhCX1ePuSUIDQc6nxayb4ckeBg5FBjY9sRtJtPSqw%2FtrfV%2FJQR3g7wcVvaUejZOupAkiAdaeYrZlhap3bNKFzUhdNYV52WBE3pFQuOW6tfi1hgwZeE0agVo0fyvx170pDkOdA3pyhjzwNhR1faSmvnP2QrQukunzJc%2BixXPK6slPU%2BSocXM%2B5Ed0h4RqSJ5cPlWchGz5qVXWuBAjOKMwcGUcSKTajppcgFP3Pkc1er7OwXzJc4pF0UUt770VfiTZKOm0ZtBs5mgS3Pt5mCU%2FLLxpeN8OZB3cURKDEriVMMYKVLEvkP8hkF3AUNTyync2gYwezffqwCYcLEwz%2BrqehT6%2BzIXtMb7ilTkWwwm%2Bu5wwY6pgEkbIKZIa8r9rreUN%2Bl%2FDcLOta1NQE%2FhzlSArwJDFePwi36LdyUa%2B%2FPX9Vf%2BFvQBW4Jmc4lagHRfeXc5ONmYvq2aLVO5k%2B2e32%2BlauCnM%2BA1x9CT6RfndzuXVtK8oe05PuA37wpKH8k14ZUWao06BVwXHWVhGoQ2md%2FjF%2FtNL9PP8lB4SNH9F4POeyPO00EbSWeIylmLGVlWbdbYmM8hV8fVijRxh8S&X-Amz-Signature=f90e8935a99c026ea825b338267ec293fcb84cb3c9395dc2781785b6b6f00a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W745WFZ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3ac7Bv1NEd1RGly8vcleDA%2BhqA2tNxBr3e%2FYKS4WqTAiAfyqDpFVWDUvZRflaIx7Wa8lUReNaHC%2F0i2WHRcF%2Bj0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqZxjHt1ibRp6ROfKtwDkD9I1LBZq4EFmXdGFPljZEdC7Fsp9HrI%2Fsyd4ANQ37RzohY2Mga%2FrnkZyZFjHS4GwM4s8uRfdRTdEtUQt0TRt%2FbGGMYRhQioD%2BciF9os%2B%2FfmwvolZbg50%2FTlc%2BsooPeSqwzhM4AFrYz2hLVCC2pBXyx9G67dmlPywcV7Xp2g0BSvRmVe5iRsWChtxk8GIusH0ofh1l1caMftF1nWDY2lGmtGKG%2F1CiLKv0DG58mOvRlX4j0BnwZ%2Bvu5VbWnyjRpqhxdggGKI2DhImHzibfUlWunhCX1ePuSUIDQc6nxayb4ckeBg5FBjY9sRtJtPSqw%2FtrfV%2FJQR3g7wcVvaUejZOupAkiAdaeYrZlhap3bNKFzUhdNYV52WBE3pFQuOW6tfi1hgwZeE0agVo0fyvx170pDkOdA3pyhjzwNhR1faSmvnP2QrQukunzJc%2BixXPK6slPU%2BSocXM%2B5Ed0h4RqSJ5cPlWchGz5qVXWuBAjOKMwcGUcSKTajppcgFP3Pkc1er7OwXzJc4pF0UUt770VfiTZKOm0ZtBs5mgS3Pt5mCU%2FLLxpeN8OZB3cURKDEriVMMYKVLEvkP8hkF3AUNTyync2gYwezffqwCYcLEwz%2BrqehT6%2BzIXtMb7ilTkWwwm%2Bu5wwY6pgEkbIKZIa8r9rreUN%2Bl%2FDcLOta1NQE%2FhzlSArwJDFePwi36LdyUa%2B%2FPX9Vf%2BFvQBW4Jmc4lagHRfeXc5ONmYvq2aLVO5k%2B2e32%2BlauCnM%2BA1x9CT6RfndzuXVtK8oe05PuA37wpKH8k14ZUWao06BVwXHWVhGoQ2md%2FjF%2FtNL9PP8lB4SNH9F4POeyPO00EbSWeIylmLGVlWbdbYmM8hV8fVijRxh8S&X-Amz-Signature=fd619f6e7f4f70d849779528a7ac923417ad98afe3f859c1f487fbe19a9c6eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W745WFZ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3ac7Bv1NEd1RGly8vcleDA%2BhqA2tNxBr3e%2FYKS4WqTAiAfyqDpFVWDUvZRflaIx7Wa8lUReNaHC%2F0i2WHRcF%2Bj0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqZxjHt1ibRp6ROfKtwDkD9I1LBZq4EFmXdGFPljZEdC7Fsp9HrI%2Fsyd4ANQ37RzohY2Mga%2FrnkZyZFjHS4GwM4s8uRfdRTdEtUQt0TRt%2FbGGMYRhQioD%2BciF9os%2B%2FfmwvolZbg50%2FTlc%2BsooPeSqwzhM4AFrYz2hLVCC2pBXyx9G67dmlPywcV7Xp2g0BSvRmVe5iRsWChtxk8GIusH0ofh1l1caMftF1nWDY2lGmtGKG%2F1CiLKv0DG58mOvRlX4j0BnwZ%2Bvu5VbWnyjRpqhxdggGKI2DhImHzibfUlWunhCX1ePuSUIDQc6nxayb4ckeBg5FBjY9sRtJtPSqw%2FtrfV%2FJQR3g7wcVvaUejZOupAkiAdaeYrZlhap3bNKFzUhdNYV52WBE3pFQuOW6tfi1hgwZeE0agVo0fyvx170pDkOdA3pyhjzwNhR1faSmvnP2QrQukunzJc%2BixXPK6slPU%2BSocXM%2B5Ed0h4RqSJ5cPlWchGz5qVXWuBAjOKMwcGUcSKTajppcgFP3Pkc1er7OwXzJc4pF0UUt770VfiTZKOm0ZtBs5mgS3Pt5mCU%2FLLxpeN8OZB3cURKDEriVMMYKVLEvkP8hkF3AUNTyync2gYwezffqwCYcLEwz%2BrqehT6%2BzIXtMb7ilTkWwwm%2Bu5wwY6pgEkbIKZIa8r9rreUN%2Bl%2FDcLOta1NQE%2FhzlSArwJDFePwi36LdyUa%2B%2FPX9Vf%2BFvQBW4Jmc4lagHRfeXc5ONmYvq2aLVO5k%2B2e32%2BlauCnM%2BA1x9CT6RfndzuXVtK8oe05PuA37wpKH8k14ZUWao06BVwXHWVhGoQ2md%2FjF%2FtNL9PP8lB4SNH9F4POeyPO00EbSWeIylmLGVlWbdbYmM8hV8fVijRxh8S&X-Amz-Signature=9969b50e1514b5b3ea0c2a054b7e254814d59964b168b039d4dfffa94c673ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
