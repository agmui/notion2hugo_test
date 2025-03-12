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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNKFMBF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCnJBdIQ%2FSaxkdi4fb8iYCvMONtt8nCNU4emJBxYU6Z9AIhAOQr1O4zBIsGlObmjUyGxIA1S8ItMMAiUMs%2FM5Z3%2BKwCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhd%2BjaotlNrD6wX0Uq3AO56G8FZReb%2FO%2Fwnt8J0cFanJM7uu5G9CBkfBTk92zK%2BbPP3LJ1RsHSdj%2FBN%2Fpvv%2FR5bmYQIEc2IGJB7GMjn6qippNKsvyLX3wemtpvRf9MWHN5%2BZbKZ%2B60dMJcxkPkJFoQHdDvJUEFkpIZWg1fUSMBtW8UByEBjsrOu7MYCj1IpqLLSsJrdye30RG%2BWKhMq5saWBhErQ%2FiwN3MO9eqpUI6cM2EmDVN0H1T0RdCDoaYbzwpveAMub%2BAcfn7VpYHDaK0TqWilnQTtojCm%2BqJDKxJJwren9X%2FlkAlYMonlTCvcYNIuVb7UBswRyvY%2FZvWguHNGLoGItbfo8LDEdYMGnto9ejjo5YxlkLaPYA150XiQwz8jfyjQe1B8O%2BolUL9exGeR%2FEPCO3agRsI6OZlLm9hlYbljobWwfW%2BLfFBpKWkfWwn%2F4zzBQ2PC1%2BHp3vPLpWbg%2BufeSmCrgIcJlBYhEe%2By7AfvgqXGj2WJfjWUzJVSKIGDnkZn8ZQ5BnAAf2HzSnc6DIEARvLHKWZA5Cm2jX4fj0mqAkS0%2FUy6BtnBzm9%2BKaGp4UiCnmZE8WVoExdXHtV1jCMKzy%2BghV95YdmZ8dReVhb0W3x0vcuZaUofXjIlK4P96IN567cpx3hRTCoosi%2BBjqkAcJJ6z%2BgdoDxkNxxat6q1g87uOlWInxKCrT5dPN0Ou0od1g5EGHYa52EfCCbBxaJPnuvDQv2x9m7xEGFSh3UVTozgbGSfjPFzP2JOPqukpRZKqbejQ1vZSW43HCbC0JVQHNLw3hJfbbSGZrnazj3FfAN%2FJL9qvsibzrBTolbeY2gcLdwzxPXzhBpYeZF95uy2QGztRbC21Ntg7L%2FzAVBulxwUNwV&X-Amz-Signature=0208581897d37553836512868de65e5cfde37403881696d7e4e7128aac091a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNKFMBF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCnJBdIQ%2FSaxkdi4fb8iYCvMONtt8nCNU4emJBxYU6Z9AIhAOQr1O4zBIsGlObmjUyGxIA1S8ItMMAiUMs%2FM5Z3%2BKwCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhd%2BjaotlNrD6wX0Uq3AO56G8FZReb%2FO%2Fwnt8J0cFanJM7uu5G9CBkfBTk92zK%2BbPP3LJ1RsHSdj%2FBN%2Fpvv%2FR5bmYQIEc2IGJB7GMjn6qippNKsvyLX3wemtpvRf9MWHN5%2BZbKZ%2B60dMJcxkPkJFoQHdDvJUEFkpIZWg1fUSMBtW8UByEBjsrOu7MYCj1IpqLLSsJrdye30RG%2BWKhMq5saWBhErQ%2FiwN3MO9eqpUI6cM2EmDVN0H1T0RdCDoaYbzwpveAMub%2BAcfn7VpYHDaK0TqWilnQTtojCm%2BqJDKxJJwren9X%2FlkAlYMonlTCvcYNIuVb7UBswRyvY%2FZvWguHNGLoGItbfo8LDEdYMGnto9ejjo5YxlkLaPYA150XiQwz8jfyjQe1B8O%2BolUL9exGeR%2FEPCO3agRsI6OZlLm9hlYbljobWwfW%2BLfFBpKWkfWwn%2F4zzBQ2PC1%2BHp3vPLpWbg%2BufeSmCrgIcJlBYhEe%2By7AfvgqXGj2WJfjWUzJVSKIGDnkZn8ZQ5BnAAf2HzSnc6DIEARvLHKWZA5Cm2jX4fj0mqAkS0%2FUy6BtnBzm9%2BKaGp4UiCnmZE8WVoExdXHtV1jCMKzy%2BghV95YdmZ8dReVhb0W3x0vcuZaUofXjIlK4P96IN567cpx3hRTCoosi%2BBjqkAcJJ6z%2BgdoDxkNxxat6q1g87uOlWInxKCrT5dPN0Ou0od1g5EGHYa52EfCCbBxaJPnuvDQv2x9m7xEGFSh3UVTozgbGSfjPFzP2JOPqukpRZKqbejQ1vZSW43HCbC0JVQHNLw3hJfbbSGZrnazj3FfAN%2FJL9qvsibzrBTolbeY2gcLdwzxPXzhBpYeZF95uy2QGztRbC21Ntg7L%2FzAVBulxwUNwV&X-Amz-Signature=290fc5f3265227773ba33b98a503809bdb9ddfdcfdfce0d009c6a49c3f089a89&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNKFMBF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCnJBdIQ%2FSaxkdi4fb8iYCvMONtt8nCNU4emJBxYU6Z9AIhAOQr1O4zBIsGlObmjUyGxIA1S8ItMMAiUMs%2FM5Z3%2BKwCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhd%2BjaotlNrD6wX0Uq3AO56G8FZReb%2FO%2Fwnt8J0cFanJM7uu5G9CBkfBTk92zK%2BbPP3LJ1RsHSdj%2FBN%2Fpvv%2FR5bmYQIEc2IGJB7GMjn6qippNKsvyLX3wemtpvRf9MWHN5%2BZbKZ%2B60dMJcxkPkJFoQHdDvJUEFkpIZWg1fUSMBtW8UByEBjsrOu7MYCj1IpqLLSsJrdye30RG%2BWKhMq5saWBhErQ%2FiwN3MO9eqpUI6cM2EmDVN0H1T0RdCDoaYbzwpveAMub%2BAcfn7VpYHDaK0TqWilnQTtojCm%2BqJDKxJJwren9X%2FlkAlYMonlTCvcYNIuVb7UBswRyvY%2FZvWguHNGLoGItbfo8LDEdYMGnto9ejjo5YxlkLaPYA150XiQwz8jfyjQe1B8O%2BolUL9exGeR%2FEPCO3agRsI6OZlLm9hlYbljobWwfW%2BLfFBpKWkfWwn%2F4zzBQ2PC1%2BHp3vPLpWbg%2BufeSmCrgIcJlBYhEe%2By7AfvgqXGj2WJfjWUzJVSKIGDnkZn8ZQ5BnAAf2HzSnc6DIEARvLHKWZA5Cm2jX4fj0mqAkS0%2FUy6BtnBzm9%2BKaGp4UiCnmZE8WVoExdXHtV1jCMKzy%2BghV95YdmZ8dReVhb0W3x0vcuZaUofXjIlK4P96IN567cpx3hRTCoosi%2BBjqkAcJJ6z%2BgdoDxkNxxat6q1g87uOlWInxKCrT5dPN0Ou0od1g5EGHYa52EfCCbBxaJPnuvDQv2x9m7xEGFSh3UVTozgbGSfjPFzP2JOPqukpRZKqbejQ1vZSW43HCbC0JVQHNLw3hJfbbSGZrnazj3FfAN%2FJL9qvsibzrBTolbeY2gcLdwzxPXzhBpYeZF95uy2QGztRbC21Ntg7L%2FzAVBulxwUNwV&X-Amz-Signature=e27019348af937b40e294c26981d23399c238c53c3d1e5dd0c818aec7de764d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNKFMBF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCnJBdIQ%2FSaxkdi4fb8iYCvMONtt8nCNU4emJBxYU6Z9AIhAOQr1O4zBIsGlObmjUyGxIA1S8ItMMAiUMs%2FM5Z3%2BKwCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhd%2BjaotlNrD6wX0Uq3AO56G8FZReb%2FO%2Fwnt8J0cFanJM7uu5G9CBkfBTk92zK%2BbPP3LJ1RsHSdj%2FBN%2Fpvv%2FR5bmYQIEc2IGJB7GMjn6qippNKsvyLX3wemtpvRf9MWHN5%2BZbKZ%2B60dMJcxkPkJFoQHdDvJUEFkpIZWg1fUSMBtW8UByEBjsrOu7MYCj1IpqLLSsJrdye30RG%2BWKhMq5saWBhErQ%2FiwN3MO9eqpUI6cM2EmDVN0H1T0RdCDoaYbzwpveAMub%2BAcfn7VpYHDaK0TqWilnQTtojCm%2BqJDKxJJwren9X%2FlkAlYMonlTCvcYNIuVb7UBswRyvY%2FZvWguHNGLoGItbfo8LDEdYMGnto9ejjo5YxlkLaPYA150XiQwz8jfyjQe1B8O%2BolUL9exGeR%2FEPCO3agRsI6OZlLm9hlYbljobWwfW%2BLfFBpKWkfWwn%2F4zzBQ2PC1%2BHp3vPLpWbg%2BufeSmCrgIcJlBYhEe%2By7AfvgqXGj2WJfjWUzJVSKIGDnkZn8ZQ5BnAAf2HzSnc6DIEARvLHKWZA5Cm2jX4fj0mqAkS0%2FUy6BtnBzm9%2BKaGp4UiCnmZE8WVoExdXHtV1jCMKzy%2BghV95YdmZ8dReVhb0W3x0vcuZaUofXjIlK4P96IN567cpx3hRTCoosi%2BBjqkAcJJ6z%2BgdoDxkNxxat6q1g87uOlWInxKCrT5dPN0Ou0od1g5EGHYa52EfCCbBxaJPnuvDQv2x9m7xEGFSh3UVTozgbGSfjPFzP2JOPqukpRZKqbejQ1vZSW43HCbC0JVQHNLw3hJfbbSGZrnazj3FfAN%2FJL9qvsibzrBTolbeY2gcLdwzxPXzhBpYeZF95uy2QGztRbC21Ntg7L%2FzAVBulxwUNwV&X-Amz-Signature=f42191cc383b054338dcffeb8506957cf5f6c804044770737a60612ef0a214bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNKFMBF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCnJBdIQ%2FSaxkdi4fb8iYCvMONtt8nCNU4emJBxYU6Z9AIhAOQr1O4zBIsGlObmjUyGxIA1S8ItMMAiUMs%2FM5Z3%2BKwCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhd%2BjaotlNrD6wX0Uq3AO56G8FZReb%2FO%2Fwnt8J0cFanJM7uu5G9CBkfBTk92zK%2BbPP3LJ1RsHSdj%2FBN%2Fpvv%2FR5bmYQIEc2IGJB7GMjn6qippNKsvyLX3wemtpvRf9MWHN5%2BZbKZ%2B60dMJcxkPkJFoQHdDvJUEFkpIZWg1fUSMBtW8UByEBjsrOu7MYCj1IpqLLSsJrdye30RG%2BWKhMq5saWBhErQ%2FiwN3MO9eqpUI6cM2EmDVN0H1T0RdCDoaYbzwpveAMub%2BAcfn7VpYHDaK0TqWilnQTtojCm%2BqJDKxJJwren9X%2FlkAlYMonlTCvcYNIuVb7UBswRyvY%2FZvWguHNGLoGItbfo8LDEdYMGnto9ejjo5YxlkLaPYA150XiQwz8jfyjQe1B8O%2BolUL9exGeR%2FEPCO3agRsI6OZlLm9hlYbljobWwfW%2BLfFBpKWkfWwn%2F4zzBQ2PC1%2BHp3vPLpWbg%2BufeSmCrgIcJlBYhEe%2By7AfvgqXGj2WJfjWUzJVSKIGDnkZn8ZQ5BnAAf2HzSnc6DIEARvLHKWZA5Cm2jX4fj0mqAkS0%2FUy6BtnBzm9%2BKaGp4UiCnmZE8WVoExdXHtV1jCMKzy%2BghV95YdmZ8dReVhb0W3x0vcuZaUofXjIlK4P96IN567cpx3hRTCoosi%2BBjqkAcJJ6z%2BgdoDxkNxxat6q1g87uOlWInxKCrT5dPN0Ou0od1g5EGHYa52EfCCbBxaJPnuvDQv2x9m7xEGFSh3UVTozgbGSfjPFzP2JOPqukpRZKqbejQ1vZSW43HCbC0JVQHNLw3hJfbbSGZrnazj3FfAN%2FJL9qvsibzrBTolbeY2gcLdwzxPXzhBpYeZF95uy2QGztRbC21Ntg7L%2FzAVBulxwUNwV&X-Amz-Signature=3248d42284ea76d211d21a610be9e8ea1678c8f45d9bdcd9ec5a6ef1a9f0f0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNKFMBF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCnJBdIQ%2FSaxkdi4fb8iYCvMONtt8nCNU4emJBxYU6Z9AIhAOQr1O4zBIsGlObmjUyGxIA1S8ItMMAiUMs%2FM5Z3%2BKwCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhd%2BjaotlNrD6wX0Uq3AO56G8FZReb%2FO%2Fwnt8J0cFanJM7uu5G9CBkfBTk92zK%2BbPP3LJ1RsHSdj%2FBN%2Fpvv%2FR5bmYQIEc2IGJB7GMjn6qippNKsvyLX3wemtpvRf9MWHN5%2BZbKZ%2B60dMJcxkPkJFoQHdDvJUEFkpIZWg1fUSMBtW8UByEBjsrOu7MYCj1IpqLLSsJrdye30RG%2BWKhMq5saWBhErQ%2FiwN3MO9eqpUI6cM2EmDVN0H1T0RdCDoaYbzwpveAMub%2BAcfn7VpYHDaK0TqWilnQTtojCm%2BqJDKxJJwren9X%2FlkAlYMonlTCvcYNIuVb7UBswRyvY%2FZvWguHNGLoGItbfo8LDEdYMGnto9ejjo5YxlkLaPYA150XiQwz8jfyjQe1B8O%2BolUL9exGeR%2FEPCO3agRsI6OZlLm9hlYbljobWwfW%2BLfFBpKWkfWwn%2F4zzBQ2PC1%2BHp3vPLpWbg%2BufeSmCrgIcJlBYhEe%2By7AfvgqXGj2WJfjWUzJVSKIGDnkZn8ZQ5BnAAf2HzSnc6DIEARvLHKWZA5Cm2jX4fj0mqAkS0%2FUy6BtnBzm9%2BKaGp4UiCnmZE8WVoExdXHtV1jCMKzy%2BghV95YdmZ8dReVhb0W3x0vcuZaUofXjIlK4P96IN567cpx3hRTCoosi%2BBjqkAcJJ6z%2BgdoDxkNxxat6q1g87uOlWInxKCrT5dPN0Ou0od1g5EGHYa52EfCCbBxaJPnuvDQv2x9m7xEGFSh3UVTozgbGSfjPFzP2JOPqukpRZKqbejQ1vZSW43HCbC0JVQHNLw3hJfbbSGZrnazj3FfAN%2FJL9qvsibzrBTolbeY2gcLdwzxPXzhBpYeZF95uy2QGztRbC21Ntg7L%2FzAVBulxwUNwV&X-Amz-Signature=e4c9bf787882b2787ce811e52096a9f0c4a0fc8a1a1eb6fc075812901659e392&X-Amz-SignedHeaders=host&x-id=GetObject)
