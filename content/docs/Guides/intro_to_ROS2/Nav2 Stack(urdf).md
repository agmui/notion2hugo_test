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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILEZPJZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TkSSCOfSjQL1QZ1%2Bb9is5ClWE%2By%2FIYSReOvieJMMdAIhAKoXAQkmXI%2FtGbRlqWH37bELXp7EctKL0YRSAhYiKlw3KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmizn2cYJvSQR%2BhCMq3APk%2BCCQ69S4bzPdautboUakIdoAMgCbEDQxZjKQRBidcjOxvqOmng7hQjq%2BRn23tlFONL6%2BvUx5f0vJRspECaVrI9Hkb2prLvZYNfr35mQlO88nGLqYRxkc6FDZ6TegplF9a25vS3VcSQwzi%2BtFXprKLsvKPohfICuENczrn3RhxOnhPUjugyNme2KmwYgoadDnZNvxzjTPdbQGe55iV%2FLSsmDSUros7VUWvbaGtcfAzVchOfXdWb8IlSGgo2ukmJq%2FanlWxQGczGKTtu1Rctx7aYfzDBtZizh0TjR5y1pM8Y0uRLuJ%2BzzsQiDNzG0fsS62%2BiwFkRZAzb%2FBaSOHk9aV6xsjBxYXnpDJnco%2B5QFwBpzbcwDVP7j2ZiTJNv7NhKH7O1Cb1zuPJ60C24igBcQXdFBLnibWdKf8WDwOxAHuISs1qHn7ArcjR842Ltn%2F5hT6CDnYsJYZKb2KJEROZ6ELacZ2zqqWcKWKLQXsqI5pyMJZVCUjBmP8Vqb4O%2FB4CCVZZp7nTpE2XAgHa2gU5Gr6ZK2mJKPKJT7wknWsXNlaD8oSOlSsKE1dgeAs1EaBzgV5yFz%2Fr%2BtBx5MR8tLot5Y1wBSgS44O71huShw%2FoF4vAXv7pbKCmDpWND%2FaejCDyee8BjqkAYaW71PXsmamJTYeeM8HtxrkHxwGKa0TuSPJlzdqgE3dMBx4UlBlohzk4PUBV4q5RZPQEcE70r7EEDiZmbWuBJIFWZ%2BeCINl1q8asjNl2LVqZkhRoTr0lqV3TcOXPhBNuL26Ie4R%2BG1vfqXE%2Fevocukt6%2B8xRwT%2BjlsT7DaZgPdHOfsVUHBpBp%2FLS7WDhqrTTlLt7QgthrPBZa%2Bkay1NbIT16k0d&X-Amz-Signature=08a43b69a6d6ce059c0a18e4e78d48c9c42fdb90dc4a3e7eb3f456edef3a25fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILEZPJZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TkSSCOfSjQL1QZ1%2Bb9is5ClWE%2By%2FIYSReOvieJMMdAIhAKoXAQkmXI%2FtGbRlqWH37bELXp7EctKL0YRSAhYiKlw3KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmizn2cYJvSQR%2BhCMq3APk%2BCCQ69S4bzPdautboUakIdoAMgCbEDQxZjKQRBidcjOxvqOmng7hQjq%2BRn23tlFONL6%2BvUx5f0vJRspECaVrI9Hkb2prLvZYNfr35mQlO88nGLqYRxkc6FDZ6TegplF9a25vS3VcSQwzi%2BtFXprKLsvKPohfICuENczrn3RhxOnhPUjugyNme2KmwYgoadDnZNvxzjTPdbQGe55iV%2FLSsmDSUros7VUWvbaGtcfAzVchOfXdWb8IlSGgo2ukmJq%2FanlWxQGczGKTtu1Rctx7aYfzDBtZizh0TjR5y1pM8Y0uRLuJ%2BzzsQiDNzG0fsS62%2BiwFkRZAzb%2FBaSOHk9aV6xsjBxYXnpDJnco%2B5QFwBpzbcwDVP7j2ZiTJNv7NhKH7O1Cb1zuPJ60C24igBcQXdFBLnibWdKf8WDwOxAHuISs1qHn7ArcjR842Ltn%2F5hT6CDnYsJYZKb2KJEROZ6ELacZ2zqqWcKWKLQXsqI5pyMJZVCUjBmP8Vqb4O%2FB4CCVZZp7nTpE2XAgHa2gU5Gr6ZK2mJKPKJT7wknWsXNlaD8oSOlSsKE1dgeAs1EaBzgV5yFz%2Fr%2BtBx5MR8tLot5Y1wBSgS44O71huShw%2FoF4vAXv7pbKCmDpWND%2FaejCDyee8BjqkAYaW71PXsmamJTYeeM8HtxrkHxwGKa0TuSPJlzdqgE3dMBx4UlBlohzk4PUBV4q5RZPQEcE70r7EEDiZmbWuBJIFWZ%2BeCINl1q8asjNl2LVqZkhRoTr0lqV3TcOXPhBNuL26Ie4R%2BG1vfqXE%2Fevocukt6%2B8xRwT%2BjlsT7DaZgPdHOfsVUHBpBp%2FLS7WDhqrTTlLt7QgthrPBZa%2Bkay1NbIT16k0d&X-Amz-Signature=6b20157272ff3c628675b883702f66a748e6a8d7677de37e0f060119ae3c0568&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILEZPJZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TkSSCOfSjQL1QZ1%2Bb9is5ClWE%2By%2FIYSReOvieJMMdAIhAKoXAQkmXI%2FtGbRlqWH37bELXp7EctKL0YRSAhYiKlw3KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmizn2cYJvSQR%2BhCMq3APk%2BCCQ69S4bzPdautboUakIdoAMgCbEDQxZjKQRBidcjOxvqOmng7hQjq%2BRn23tlFONL6%2BvUx5f0vJRspECaVrI9Hkb2prLvZYNfr35mQlO88nGLqYRxkc6FDZ6TegplF9a25vS3VcSQwzi%2BtFXprKLsvKPohfICuENczrn3RhxOnhPUjugyNme2KmwYgoadDnZNvxzjTPdbQGe55iV%2FLSsmDSUros7VUWvbaGtcfAzVchOfXdWb8IlSGgo2ukmJq%2FanlWxQGczGKTtu1Rctx7aYfzDBtZizh0TjR5y1pM8Y0uRLuJ%2BzzsQiDNzG0fsS62%2BiwFkRZAzb%2FBaSOHk9aV6xsjBxYXnpDJnco%2B5QFwBpzbcwDVP7j2ZiTJNv7NhKH7O1Cb1zuPJ60C24igBcQXdFBLnibWdKf8WDwOxAHuISs1qHn7ArcjR842Ltn%2F5hT6CDnYsJYZKb2KJEROZ6ELacZ2zqqWcKWKLQXsqI5pyMJZVCUjBmP8Vqb4O%2FB4CCVZZp7nTpE2XAgHa2gU5Gr6ZK2mJKPKJT7wknWsXNlaD8oSOlSsKE1dgeAs1EaBzgV5yFz%2Fr%2BtBx5MR8tLot5Y1wBSgS44O71huShw%2FoF4vAXv7pbKCmDpWND%2FaejCDyee8BjqkAYaW71PXsmamJTYeeM8HtxrkHxwGKa0TuSPJlzdqgE3dMBx4UlBlohzk4PUBV4q5RZPQEcE70r7EEDiZmbWuBJIFWZ%2BeCINl1q8asjNl2LVqZkhRoTr0lqV3TcOXPhBNuL26Ie4R%2BG1vfqXE%2Fevocukt6%2B8xRwT%2BjlsT7DaZgPdHOfsVUHBpBp%2FLS7WDhqrTTlLt7QgthrPBZa%2Bkay1NbIT16k0d&X-Amz-Signature=7e31c03ad68a7d11cefb4fc1d53ae15c4f5ada36ca12ef9166056e4fdf685e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILEZPJZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TkSSCOfSjQL1QZ1%2Bb9is5ClWE%2By%2FIYSReOvieJMMdAIhAKoXAQkmXI%2FtGbRlqWH37bELXp7EctKL0YRSAhYiKlw3KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmizn2cYJvSQR%2BhCMq3APk%2BCCQ69S4bzPdautboUakIdoAMgCbEDQxZjKQRBidcjOxvqOmng7hQjq%2BRn23tlFONL6%2BvUx5f0vJRspECaVrI9Hkb2prLvZYNfr35mQlO88nGLqYRxkc6FDZ6TegplF9a25vS3VcSQwzi%2BtFXprKLsvKPohfICuENczrn3RhxOnhPUjugyNme2KmwYgoadDnZNvxzjTPdbQGe55iV%2FLSsmDSUros7VUWvbaGtcfAzVchOfXdWb8IlSGgo2ukmJq%2FanlWxQGczGKTtu1Rctx7aYfzDBtZizh0TjR5y1pM8Y0uRLuJ%2BzzsQiDNzG0fsS62%2BiwFkRZAzb%2FBaSOHk9aV6xsjBxYXnpDJnco%2B5QFwBpzbcwDVP7j2ZiTJNv7NhKH7O1Cb1zuPJ60C24igBcQXdFBLnibWdKf8WDwOxAHuISs1qHn7ArcjR842Ltn%2F5hT6CDnYsJYZKb2KJEROZ6ELacZ2zqqWcKWKLQXsqI5pyMJZVCUjBmP8Vqb4O%2FB4CCVZZp7nTpE2XAgHa2gU5Gr6ZK2mJKPKJT7wknWsXNlaD8oSOlSsKE1dgeAs1EaBzgV5yFz%2Fr%2BtBx5MR8tLot5Y1wBSgS44O71huShw%2FoF4vAXv7pbKCmDpWND%2FaejCDyee8BjqkAYaW71PXsmamJTYeeM8HtxrkHxwGKa0TuSPJlzdqgE3dMBx4UlBlohzk4PUBV4q5RZPQEcE70r7EEDiZmbWuBJIFWZ%2BeCINl1q8asjNl2LVqZkhRoTr0lqV3TcOXPhBNuL26Ie4R%2BG1vfqXE%2Fevocukt6%2B8xRwT%2BjlsT7DaZgPdHOfsVUHBpBp%2FLS7WDhqrTTlLt7QgthrPBZa%2Bkay1NbIT16k0d&X-Amz-Signature=2171d9a5f1cfa9cc277e07d65117a48e49129af22659aefc46b20aecbae82b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILEZPJZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TkSSCOfSjQL1QZ1%2Bb9is5ClWE%2By%2FIYSReOvieJMMdAIhAKoXAQkmXI%2FtGbRlqWH37bELXp7EctKL0YRSAhYiKlw3KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmizn2cYJvSQR%2BhCMq3APk%2BCCQ69S4bzPdautboUakIdoAMgCbEDQxZjKQRBidcjOxvqOmng7hQjq%2BRn23tlFONL6%2BvUx5f0vJRspECaVrI9Hkb2prLvZYNfr35mQlO88nGLqYRxkc6FDZ6TegplF9a25vS3VcSQwzi%2BtFXprKLsvKPohfICuENczrn3RhxOnhPUjugyNme2KmwYgoadDnZNvxzjTPdbQGe55iV%2FLSsmDSUros7VUWvbaGtcfAzVchOfXdWb8IlSGgo2ukmJq%2FanlWxQGczGKTtu1Rctx7aYfzDBtZizh0TjR5y1pM8Y0uRLuJ%2BzzsQiDNzG0fsS62%2BiwFkRZAzb%2FBaSOHk9aV6xsjBxYXnpDJnco%2B5QFwBpzbcwDVP7j2ZiTJNv7NhKH7O1Cb1zuPJ60C24igBcQXdFBLnibWdKf8WDwOxAHuISs1qHn7ArcjR842Ltn%2F5hT6CDnYsJYZKb2KJEROZ6ELacZ2zqqWcKWKLQXsqI5pyMJZVCUjBmP8Vqb4O%2FB4CCVZZp7nTpE2XAgHa2gU5Gr6ZK2mJKPKJT7wknWsXNlaD8oSOlSsKE1dgeAs1EaBzgV5yFz%2Fr%2BtBx5MR8tLot5Y1wBSgS44O71huShw%2FoF4vAXv7pbKCmDpWND%2FaejCDyee8BjqkAYaW71PXsmamJTYeeM8HtxrkHxwGKa0TuSPJlzdqgE3dMBx4UlBlohzk4PUBV4q5RZPQEcE70r7EEDiZmbWuBJIFWZ%2BeCINl1q8asjNl2LVqZkhRoTr0lqV3TcOXPhBNuL26Ie4R%2BG1vfqXE%2Fevocukt6%2B8xRwT%2BjlsT7DaZgPdHOfsVUHBpBp%2FLS7WDhqrTTlLt7QgthrPBZa%2Bkay1NbIT16k0d&X-Amz-Signature=05c16ed4dbd00996ebe53a93afbda34f3490accb22a90c0ac21182ee0e076357&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILEZPJZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1TkSSCOfSjQL1QZ1%2Bb9is5ClWE%2By%2FIYSReOvieJMMdAIhAKoXAQkmXI%2FtGbRlqWH37bELXp7EctKL0YRSAhYiKlw3KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmizn2cYJvSQR%2BhCMq3APk%2BCCQ69S4bzPdautboUakIdoAMgCbEDQxZjKQRBidcjOxvqOmng7hQjq%2BRn23tlFONL6%2BvUx5f0vJRspECaVrI9Hkb2prLvZYNfr35mQlO88nGLqYRxkc6FDZ6TegplF9a25vS3VcSQwzi%2BtFXprKLsvKPohfICuENczrn3RhxOnhPUjugyNme2KmwYgoadDnZNvxzjTPdbQGe55iV%2FLSsmDSUros7VUWvbaGtcfAzVchOfXdWb8IlSGgo2ukmJq%2FanlWxQGczGKTtu1Rctx7aYfzDBtZizh0TjR5y1pM8Y0uRLuJ%2BzzsQiDNzG0fsS62%2BiwFkRZAzb%2FBaSOHk9aV6xsjBxYXnpDJnco%2B5QFwBpzbcwDVP7j2ZiTJNv7NhKH7O1Cb1zuPJ60C24igBcQXdFBLnibWdKf8WDwOxAHuISs1qHn7ArcjR842Ltn%2F5hT6CDnYsJYZKb2KJEROZ6ELacZ2zqqWcKWKLQXsqI5pyMJZVCUjBmP8Vqb4O%2FB4CCVZZp7nTpE2XAgHa2gU5Gr6ZK2mJKPKJT7wknWsXNlaD8oSOlSsKE1dgeAs1EaBzgV5yFz%2Fr%2BtBx5MR8tLot5Y1wBSgS44O71huShw%2FoF4vAXv7pbKCmDpWND%2FaejCDyee8BjqkAYaW71PXsmamJTYeeM8HtxrkHxwGKa0TuSPJlzdqgE3dMBx4UlBlohzk4PUBV4q5RZPQEcE70r7EEDiZmbWuBJIFWZ%2BeCINl1q8asjNl2LVqZkhRoTr0lqV3TcOXPhBNuL26Ie4R%2BG1vfqXE%2Fevocukt6%2B8xRwT%2BjlsT7DaZgPdHOfsVUHBpBp%2FLS7WDhqrTTlLt7QgthrPBZa%2Bkay1NbIT16k0d&X-Amz-Signature=220e97421f483098d14254abab5e915c595c814569cc5fd7afa96230a7dc5d13&X-Amz-SignedHeaders=host&x-id=GetObject)
