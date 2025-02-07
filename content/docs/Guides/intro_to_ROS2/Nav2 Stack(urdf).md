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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=a782f5b941ca208c5c236d47f1db1df96e6405990dfb34f75c0e3e585ac863c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=bab7f80eb4d598181bba0370058da69851efc0a1f48cff79111572ee99983f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=144641bc9f4ad7c6b5597675f239b6a75d57eee45893f6862b993da0794b8e01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=8dcbbfec6756706bb215940c1442e5e19b0983d693a86662754b5f2d88f07a14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=b3a08c157fe519ab93ebf8a1510824e176e6e8c77646d8e53dc05a04ecd0f964&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHL5DNVS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDyyzSxbpXLwF4OAd%2FpvQ%2B4vuQf5x11cah3nTsiMf6j2AiAr68WDpVhwA1oxN8OuLZPjkIE27ZrzPfwi1%2BVLcevEQir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMWtvzm4A7JseYS4aKtwDqJxCzfg8g1TYIqujN43aYHjLatgbMN0mAlgQ%2FKTpylFZrCBnDsJl5po0Qb7uLyCJ%2BhGk%2FBtbzxPwQTXmXNexNuyWY3HimqZfX0fH93LBbjNsTHcmpCSa45JDc8Ln0F35kUIVbNhfc9camW57FtSUqfHV2kmAuxlQgFe1E7lTI4lvu4bj8xbVpaCsUW6K%2Fb9e577lP2mxQbp8VpZ0bgqeSCMKgnVVOeau9%2BUfGMw%2BSm%2FJask4bJXoohW%2BS7eE3DwKZFGZ9B6wycT6yfrBZ1M7SnfoaOBi6vQDh5CHc3GgzLOD2e9qyFTSxfFsIDd5jawqDGZaQykX1my6O5F4AI%2FlThqQ4UoMXhtonYYfC5apf7djXa47QwF99ayxygnXCVUHwzeLkoZQX1HAppXfujwwlAs8LapWmCggEvqozo%2FbE3Gv3qbFtFF347SPH0rPdQBSXoitKDz4UUwnDIz3MSuF%2Fo7c%2FSlpJ35icj%2FbxKU0HnICyC29tnYSzP27CjoxCHgwN36iVbUwYao2vruiRzT4cwDp6ddrGKprPMeEjpqAtYtYSLqHkEa1UHlAXXSuoJ%2FErPr3oNp3VGUB4LjsmLSwdUx8%2FNhQhohKcMg0vHLxai%2BRqEd1VZY0EwfZaOcwztSZvQY6pgFCBdPzUaXQvzWFXgzyoXfSd1TYseDqUxdRtPRdLMphxe5BkSmJaU%2BXx%2BGANo1RHL9Hi79NTvsbMdz%2BmU2ZLFTcKxajENEM5fMsmIrHdfwYBLKhx9WA4TWVS4p%2BPkWX65KpjbPR%2Bxs29o3W%2FxxYixGfVBqN3AL5JW2CVj9n51SMs4XKMn7Ks0BSp0is%2BKOe6O9NBT0zY4PyZWrugchy%2FVOumgUjmtem&X-Amz-Signature=c0f35cf0806bd007b0d7b7319d550b6285a13869112d127ff2f45713b746923c&X-Amz-SignedHeaders=host&x-id=GetObject)
