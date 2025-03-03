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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPHBRCY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQvwPzUrLk8tGUVK3JRspzjeIzp640apI%2FddJ8GSIlDQIgLng8%2FtqeWgBYWD3XZzCNSXyNIUHc5JyJm2CD0LPvnFUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVFmkriA7jzZClgqSrcAzapNxJdfBdQLPB7V2lUDvhGR0Nmi81lO72TF7PV1L0XwGs1FsT%2FBNgXGTl4q7X459%2BnwIWVjWjHvMVraHTKhcUFq2%2FA6RjkWfZKY%2FkQkKl1FdrEpv4Z263q%2BIDUcXaIrB1pyh%2FmHNJli1gKRZwifftNOfn1oje82yqvimR6B7bw9EyvNgD6RkAdQ8Y%2FAyElyTiTM6NzkgzspfIsgQ7%2Bl%2BSLOXifAIIcum4gDBmRXvApkN4X3GPsLlAwcqMPzGgXnTL%2FuUoLYa8bxg4w%2FMPhVIm8z%2Bd%2BtNXVLM53IJ5IU2tBTLeCaoq9i95tgM7jCmMy0KqT7u4HPKUdMHi4Sc17Eba9ECEEUn1U245hOvigX%2Fa%2F5yZReqGsfnxaVwY%2BHD6a%2FJhlT6%2Fca5nYAmwhYvVof7rIRlxrGxR3ft4dJn5MjBo9bpXPOZGZZdB33BoAjmjg97GCgdF32E8oQl3UwRryaHCOETfNp1bM%2Fmj6AK8j0Jz5LFlBcoypZId36SNPbVuQCOWPoXmXixoV89onrIQy4aM2d5oQlbmKo1OcMkdTj%2BvD9%2FCkjHXXBuhJ9InyskYMHbnOr93PTsTqniYun5f2mGMPY2FpLywmcvXm4%2FGRWXQRc2%2BRWKShxiez0Fa1MMuWlb4GOqUBf4dJPiKDNvjOnNhgoo4wyEkH4U4f2%2FEUe68%2FDQvkw66leYjbRyzS0Se96dpyhxXfBdvflapGhK%2Fcaek7osm0BEOe%2FMkAtL8eaXm6uSr4eZPFfik0cQX5XAAC%2F2uvaHXTcXWEd1W8td2f4iY5FtGxkSaqSr%2BgamCp%2BAGe6KtiFlBGnICRjyVNEcWO4fPkNl6NGx2Xbe%2B7oKWlyAgLxGfQpKW5xyMS&X-Amz-Signature=3303be455d8a3c4f567a5061bc2ca38119980bc9d91ed4f8be8f20e926d75715&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPHBRCY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQvwPzUrLk8tGUVK3JRspzjeIzp640apI%2FddJ8GSIlDQIgLng8%2FtqeWgBYWD3XZzCNSXyNIUHc5JyJm2CD0LPvnFUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVFmkriA7jzZClgqSrcAzapNxJdfBdQLPB7V2lUDvhGR0Nmi81lO72TF7PV1L0XwGs1FsT%2FBNgXGTl4q7X459%2BnwIWVjWjHvMVraHTKhcUFq2%2FA6RjkWfZKY%2FkQkKl1FdrEpv4Z263q%2BIDUcXaIrB1pyh%2FmHNJli1gKRZwifftNOfn1oje82yqvimR6B7bw9EyvNgD6RkAdQ8Y%2FAyElyTiTM6NzkgzspfIsgQ7%2Bl%2BSLOXifAIIcum4gDBmRXvApkN4X3GPsLlAwcqMPzGgXnTL%2FuUoLYa8bxg4w%2FMPhVIm8z%2Bd%2BtNXVLM53IJ5IU2tBTLeCaoq9i95tgM7jCmMy0KqT7u4HPKUdMHi4Sc17Eba9ECEEUn1U245hOvigX%2Fa%2F5yZReqGsfnxaVwY%2BHD6a%2FJhlT6%2Fca5nYAmwhYvVof7rIRlxrGxR3ft4dJn5MjBo9bpXPOZGZZdB33BoAjmjg97GCgdF32E8oQl3UwRryaHCOETfNp1bM%2Fmj6AK8j0Jz5LFlBcoypZId36SNPbVuQCOWPoXmXixoV89onrIQy4aM2d5oQlbmKo1OcMkdTj%2BvD9%2FCkjHXXBuhJ9InyskYMHbnOr93PTsTqniYun5f2mGMPY2FpLywmcvXm4%2FGRWXQRc2%2BRWKShxiez0Fa1MMuWlb4GOqUBf4dJPiKDNvjOnNhgoo4wyEkH4U4f2%2FEUe68%2FDQvkw66leYjbRyzS0Se96dpyhxXfBdvflapGhK%2Fcaek7osm0BEOe%2FMkAtL8eaXm6uSr4eZPFfik0cQX5XAAC%2F2uvaHXTcXWEd1W8td2f4iY5FtGxkSaqSr%2BgamCp%2BAGe6KtiFlBGnICRjyVNEcWO4fPkNl6NGx2Xbe%2B7oKWlyAgLxGfQpKW5xyMS&X-Amz-Signature=2fbb26d6523552fb0aded8a0f54ec7323ad2f17681a9f401ae500654bb390d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPHBRCY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQvwPzUrLk8tGUVK3JRspzjeIzp640apI%2FddJ8GSIlDQIgLng8%2FtqeWgBYWD3XZzCNSXyNIUHc5JyJm2CD0LPvnFUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVFmkriA7jzZClgqSrcAzapNxJdfBdQLPB7V2lUDvhGR0Nmi81lO72TF7PV1L0XwGs1FsT%2FBNgXGTl4q7X459%2BnwIWVjWjHvMVraHTKhcUFq2%2FA6RjkWfZKY%2FkQkKl1FdrEpv4Z263q%2BIDUcXaIrB1pyh%2FmHNJli1gKRZwifftNOfn1oje82yqvimR6B7bw9EyvNgD6RkAdQ8Y%2FAyElyTiTM6NzkgzspfIsgQ7%2Bl%2BSLOXifAIIcum4gDBmRXvApkN4X3GPsLlAwcqMPzGgXnTL%2FuUoLYa8bxg4w%2FMPhVIm8z%2Bd%2BtNXVLM53IJ5IU2tBTLeCaoq9i95tgM7jCmMy0KqT7u4HPKUdMHi4Sc17Eba9ECEEUn1U245hOvigX%2Fa%2F5yZReqGsfnxaVwY%2BHD6a%2FJhlT6%2Fca5nYAmwhYvVof7rIRlxrGxR3ft4dJn5MjBo9bpXPOZGZZdB33BoAjmjg97GCgdF32E8oQl3UwRryaHCOETfNp1bM%2Fmj6AK8j0Jz5LFlBcoypZId36SNPbVuQCOWPoXmXixoV89onrIQy4aM2d5oQlbmKo1OcMkdTj%2BvD9%2FCkjHXXBuhJ9InyskYMHbnOr93PTsTqniYun5f2mGMPY2FpLywmcvXm4%2FGRWXQRc2%2BRWKShxiez0Fa1MMuWlb4GOqUBf4dJPiKDNvjOnNhgoo4wyEkH4U4f2%2FEUe68%2FDQvkw66leYjbRyzS0Se96dpyhxXfBdvflapGhK%2Fcaek7osm0BEOe%2FMkAtL8eaXm6uSr4eZPFfik0cQX5XAAC%2F2uvaHXTcXWEd1W8td2f4iY5FtGxkSaqSr%2BgamCp%2BAGe6KtiFlBGnICRjyVNEcWO4fPkNl6NGx2Xbe%2B7oKWlyAgLxGfQpKW5xyMS&X-Amz-Signature=467911d45fb279a5e5e82602b9f3e83c8787447b6059088c8f58dd0445ffc7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPHBRCY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQvwPzUrLk8tGUVK3JRspzjeIzp640apI%2FddJ8GSIlDQIgLng8%2FtqeWgBYWD3XZzCNSXyNIUHc5JyJm2CD0LPvnFUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVFmkriA7jzZClgqSrcAzapNxJdfBdQLPB7V2lUDvhGR0Nmi81lO72TF7PV1L0XwGs1FsT%2FBNgXGTl4q7X459%2BnwIWVjWjHvMVraHTKhcUFq2%2FA6RjkWfZKY%2FkQkKl1FdrEpv4Z263q%2BIDUcXaIrB1pyh%2FmHNJli1gKRZwifftNOfn1oje82yqvimR6B7bw9EyvNgD6RkAdQ8Y%2FAyElyTiTM6NzkgzspfIsgQ7%2Bl%2BSLOXifAIIcum4gDBmRXvApkN4X3GPsLlAwcqMPzGgXnTL%2FuUoLYa8bxg4w%2FMPhVIm8z%2Bd%2BtNXVLM53IJ5IU2tBTLeCaoq9i95tgM7jCmMy0KqT7u4HPKUdMHi4Sc17Eba9ECEEUn1U245hOvigX%2Fa%2F5yZReqGsfnxaVwY%2BHD6a%2FJhlT6%2Fca5nYAmwhYvVof7rIRlxrGxR3ft4dJn5MjBo9bpXPOZGZZdB33BoAjmjg97GCgdF32E8oQl3UwRryaHCOETfNp1bM%2Fmj6AK8j0Jz5LFlBcoypZId36SNPbVuQCOWPoXmXixoV89onrIQy4aM2d5oQlbmKo1OcMkdTj%2BvD9%2FCkjHXXBuhJ9InyskYMHbnOr93PTsTqniYun5f2mGMPY2FpLywmcvXm4%2FGRWXQRc2%2BRWKShxiez0Fa1MMuWlb4GOqUBf4dJPiKDNvjOnNhgoo4wyEkH4U4f2%2FEUe68%2FDQvkw66leYjbRyzS0Se96dpyhxXfBdvflapGhK%2Fcaek7osm0BEOe%2FMkAtL8eaXm6uSr4eZPFfik0cQX5XAAC%2F2uvaHXTcXWEd1W8td2f4iY5FtGxkSaqSr%2BgamCp%2BAGe6KtiFlBGnICRjyVNEcWO4fPkNl6NGx2Xbe%2B7oKWlyAgLxGfQpKW5xyMS&X-Amz-Signature=502bc3e83fd4d4a5afc1506d0511aa19510eb86b1f17ce7c927f24b0edb8b4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPHBRCY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQvwPzUrLk8tGUVK3JRspzjeIzp640apI%2FddJ8GSIlDQIgLng8%2FtqeWgBYWD3XZzCNSXyNIUHc5JyJm2CD0LPvnFUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVFmkriA7jzZClgqSrcAzapNxJdfBdQLPB7V2lUDvhGR0Nmi81lO72TF7PV1L0XwGs1FsT%2FBNgXGTl4q7X459%2BnwIWVjWjHvMVraHTKhcUFq2%2FA6RjkWfZKY%2FkQkKl1FdrEpv4Z263q%2BIDUcXaIrB1pyh%2FmHNJli1gKRZwifftNOfn1oje82yqvimR6B7bw9EyvNgD6RkAdQ8Y%2FAyElyTiTM6NzkgzspfIsgQ7%2Bl%2BSLOXifAIIcum4gDBmRXvApkN4X3GPsLlAwcqMPzGgXnTL%2FuUoLYa8bxg4w%2FMPhVIm8z%2Bd%2BtNXVLM53IJ5IU2tBTLeCaoq9i95tgM7jCmMy0KqT7u4HPKUdMHi4Sc17Eba9ECEEUn1U245hOvigX%2Fa%2F5yZReqGsfnxaVwY%2BHD6a%2FJhlT6%2Fca5nYAmwhYvVof7rIRlxrGxR3ft4dJn5MjBo9bpXPOZGZZdB33BoAjmjg97GCgdF32E8oQl3UwRryaHCOETfNp1bM%2Fmj6AK8j0Jz5LFlBcoypZId36SNPbVuQCOWPoXmXixoV89onrIQy4aM2d5oQlbmKo1OcMkdTj%2BvD9%2FCkjHXXBuhJ9InyskYMHbnOr93PTsTqniYun5f2mGMPY2FpLywmcvXm4%2FGRWXQRc2%2BRWKShxiez0Fa1MMuWlb4GOqUBf4dJPiKDNvjOnNhgoo4wyEkH4U4f2%2FEUe68%2FDQvkw66leYjbRyzS0Se96dpyhxXfBdvflapGhK%2Fcaek7osm0BEOe%2FMkAtL8eaXm6uSr4eZPFfik0cQX5XAAC%2F2uvaHXTcXWEd1W8td2f4iY5FtGxkSaqSr%2BgamCp%2BAGe6KtiFlBGnICRjyVNEcWO4fPkNl6NGx2Xbe%2B7oKWlyAgLxGfQpKW5xyMS&X-Amz-Signature=8f1f96b12f534701905aa25c73624cb5179173ab0b2232ca279f09068009bd92&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPHBRCY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQvwPzUrLk8tGUVK3JRspzjeIzp640apI%2FddJ8GSIlDQIgLng8%2FtqeWgBYWD3XZzCNSXyNIUHc5JyJm2CD0LPvnFUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVFmkriA7jzZClgqSrcAzapNxJdfBdQLPB7V2lUDvhGR0Nmi81lO72TF7PV1L0XwGs1FsT%2FBNgXGTl4q7X459%2BnwIWVjWjHvMVraHTKhcUFq2%2FA6RjkWfZKY%2FkQkKl1FdrEpv4Z263q%2BIDUcXaIrB1pyh%2FmHNJli1gKRZwifftNOfn1oje82yqvimR6B7bw9EyvNgD6RkAdQ8Y%2FAyElyTiTM6NzkgzspfIsgQ7%2Bl%2BSLOXifAIIcum4gDBmRXvApkN4X3GPsLlAwcqMPzGgXnTL%2FuUoLYa8bxg4w%2FMPhVIm8z%2Bd%2BtNXVLM53IJ5IU2tBTLeCaoq9i95tgM7jCmMy0KqT7u4HPKUdMHi4Sc17Eba9ECEEUn1U245hOvigX%2Fa%2F5yZReqGsfnxaVwY%2BHD6a%2FJhlT6%2Fca5nYAmwhYvVof7rIRlxrGxR3ft4dJn5MjBo9bpXPOZGZZdB33BoAjmjg97GCgdF32E8oQl3UwRryaHCOETfNp1bM%2Fmj6AK8j0Jz5LFlBcoypZId36SNPbVuQCOWPoXmXixoV89onrIQy4aM2d5oQlbmKo1OcMkdTj%2BvD9%2FCkjHXXBuhJ9InyskYMHbnOr93PTsTqniYun5f2mGMPY2FpLywmcvXm4%2FGRWXQRc2%2BRWKShxiez0Fa1MMuWlb4GOqUBf4dJPiKDNvjOnNhgoo4wyEkH4U4f2%2FEUe68%2FDQvkw66leYjbRyzS0Se96dpyhxXfBdvflapGhK%2Fcaek7osm0BEOe%2FMkAtL8eaXm6uSr4eZPFfik0cQX5XAAC%2F2uvaHXTcXWEd1W8td2f4iY5FtGxkSaqSr%2BgamCp%2BAGe6KtiFlBGnICRjyVNEcWO4fPkNl6NGx2Xbe%2B7oKWlyAgLxGfQpKW5xyMS&X-Amz-Signature=af71283e3aecd6720b5dbcd7c19f15bb7585a35999d06ab211c3db4c8d7e35ba&X-Amz-SignedHeaders=host&x-id=GetObject)
