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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUQOBBS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEDG26YU%2FLzpCoToXf8sOZELB6ReXenKTQKIcaqL41PMAiBXJYiJLQHpI%2B1her4YX7F5L5TCcLJjGHFBe62m0gc3Iir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI1OvW24H7miE%2F9udKtwD9kRXljqv6dU3YqB89uU2fEPN695jfPNNNzAWoDT50lDhnEIb9T6W8n%2FwFraFLQst7ui%2B2zIBVSixrZC71yw41RTBToIgcCqy8lXf3iwcXGM39swwVTEDlDxHmhcUfyRT0i0F9g%2FEmrmZMVbjnyfX8sUmmNuaTnmwweGyDWb9SIQsVbZjyiKE6kyWA0Sc%2BgIX99SrT3zpd6YrMExTd5M2e%2BXhfy68E80Odpq5Zl9XKpXB%2B%2FDrCzlDFXdsuRgW5oN79MFimqsH32KvrA3LNHxlFn0VnIIyR%2Ba4ikxCHw3EElgt372GTy%2BEd2kAKWMxeBTIFq6uKzdZLXOP%2Bd6cNr2d1Fy8%2BsWuqx%2B195V1apqXu56%2BqThFFPk5xacCi6GdWTqpN6GI4F0hVTHNS7sWhVY4dxBXYVom7V1ZYD3BG8f3Ym8%2BPDplNeIQL1sqH4a59gqWZsN8USc8oNboO2XfBl%2BT7SReSCJ%2B10%2Fb4jThPiUYPmjmeLKaYQ3tEMZ3%2BfQGUJB7diDJzwEFqqax5q7uWi0NkeMNgbv8B%2F42Y%2BlkjhU%2FDi6vdvxww%2FwyAD8wBb%2BIt0zacHHeXWuwzzp1kHAjJ11TkUE%2FMnxI4qZ86Yr6XlOwY85QkZVhgf6rheIirJow5cakwwY6pgF0zqBHyI9Khz8HZjjMHt2Aj5LPXvp6fbfXkCk99lGIb8Tmmt5r9DyIIoECioOZf8tOeyiGpJZZVwE51sTuLxrAWmvdVraFTzaNuSKrtIuIZmFi%2BnbIEZE4eKaf%2FqvOdHcSDrl1ACNb%2FYsSJHxvCMdEdZJfBU5M0BJz0sQqwH5hD2jGjkytJNslVSb16SELsFJuqh5J8fGdyYlODWSY%2FgsnZxii9Bu9&X-Amz-Signature=6f06d1fd7471ff22a657b2fb4562468b5b5cf061a05e44074fd472645c09473c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUQOBBS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEDG26YU%2FLzpCoToXf8sOZELB6ReXenKTQKIcaqL41PMAiBXJYiJLQHpI%2B1her4YX7F5L5TCcLJjGHFBe62m0gc3Iir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI1OvW24H7miE%2F9udKtwD9kRXljqv6dU3YqB89uU2fEPN695jfPNNNzAWoDT50lDhnEIb9T6W8n%2FwFraFLQst7ui%2B2zIBVSixrZC71yw41RTBToIgcCqy8lXf3iwcXGM39swwVTEDlDxHmhcUfyRT0i0F9g%2FEmrmZMVbjnyfX8sUmmNuaTnmwweGyDWb9SIQsVbZjyiKE6kyWA0Sc%2BgIX99SrT3zpd6YrMExTd5M2e%2BXhfy68E80Odpq5Zl9XKpXB%2B%2FDrCzlDFXdsuRgW5oN79MFimqsH32KvrA3LNHxlFn0VnIIyR%2Ba4ikxCHw3EElgt372GTy%2BEd2kAKWMxeBTIFq6uKzdZLXOP%2Bd6cNr2d1Fy8%2BsWuqx%2B195V1apqXu56%2BqThFFPk5xacCi6GdWTqpN6GI4F0hVTHNS7sWhVY4dxBXYVom7V1ZYD3BG8f3Ym8%2BPDplNeIQL1sqH4a59gqWZsN8USc8oNboO2XfBl%2BT7SReSCJ%2B10%2Fb4jThPiUYPmjmeLKaYQ3tEMZ3%2BfQGUJB7diDJzwEFqqax5q7uWi0NkeMNgbv8B%2F42Y%2BlkjhU%2FDi6vdvxww%2FwyAD8wBb%2BIt0zacHHeXWuwzzp1kHAjJ11TkUE%2FMnxI4qZ86Yr6XlOwY85QkZVhgf6rheIirJow5cakwwY6pgF0zqBHyI9Khz8HZjjMHt2Aj5LPXvp6fbfXkCk99lGIb8Tmmt5r9DyIIoECioOZf8tOeyiGpJZZVwE51sTuLxrAWmvdVraFTzaNuSKrtIuIZmFi%2BnbIEZE4eKaf%2FqvOdHcSDrl1ACNb%2FYsSJHxvCMdEdZJfBU5M0BJz0sQqwH5hD2jGjkytJNslVSb16SELsFJuqh5J8fGdyYlODWSY%2FgsnZxii9Bu9&X-Amz-Signature=4574f0279b7884a6675e0b92a09f212fa500c4df4b0b37625c2ed16b779a2667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUQOBBS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEDG26YU%2FLzpCoToXf8sOZELB6ReXenKTQKIcaqL41PMAiBXJYiJLQHpI%2B1her4YX7F5L5TCcLJjGHFBe62m0gc3Iir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI1OvW24H7miE%2F9udKtwD9kRXljqv6dU3YqB89uU2fEPN695jfPNNNzAWoDT50lDhnEIb9T6W8n%2FwFraFLQst7ui%2B2zIBVSixrZC71yw41RTBToIgcCqy8lXf3iwcXGM39swwVTEDlDxHmhcUfyRT0i0F9g%2FEmrmZMVbjnyfX8sUmmNuaTnmwweGyDWb9SIQsVbZjyiKE6kyWA0Sc%2BgIX99SrT3zpd6YrMExTd5M2e%2BXhfy68E80Odpq5Zl9XKpXB%2B%2FDrCzlDFXdsuRgW5oN79MFimqsH32KvrA3LNHxlFn0VnIIyR%2Ba4ikxCHw3EElgt372GTy%2BEd2kAKWMxeBTIFq6uKzdZLXOP%2Bd6cNr2d1Fy8%2BsWuqx%2B195V1apqXu56%2BqThFFPk5xacCi6GdWTqpN6GI4F0hVTHNS7sWhVY4dxBXYVom7V1ZYD3BG8f3Ym8%2BPDplNeIQL1sqH4a59gqWZsN8USc8oNboO2XfBl%2BT7SReSCJ%2B10%2Fb4jThPiUYPmjmeLKaYQ3tEMZ3%2BfQGUJB7diDJzwEFqqax5q7uWi0NkeMNgbv8B%2F42Y%2BlkjhU%2FDi6vdvxww%2FwyAD8wBb%2BIt0zacHHeXWuwzzp1kHAjJ11TkUE%2FMnxI4qZ86Yr6XlOwY85QkZVhgf6rheIirJow5cakwwY6pgF0zqBHyI9Khz8HZjjMHt2Aj5LPXvp6fbfXkCk99lGIb8Tmmt5r9DyIIoECioOZf8tOeyiGpJZZVwE51sTuLxrAWmvdVraFTzaNuSKrtIuIZmFi%2BnbIEZE4eKaf%2FqvOdHcSDrl1ACNb%2FYsSJHxvCMdEdZJfBU5M0BJz0sQqwH5hD2jGjkytJNslVSb16SELsFJuqh5J8fGdyYlODWSY%2FgsnZxii9Bu9&X-Amz-Signature=7af1a0103e9806c24181ca0b2d239d8efc28491aa239957852d9a34aadd4aba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUQOBBS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEDG26YU%2FLzpCoToXf8sOZELB6ReXenKTQKIcaqL41PMAiBXJYiJLQHpI%2B1her4YX7F5L5TCcLJjGHFBe62m0gc3Iir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI1OvW24H7miE%2F9udKtwD9kRXljqv6dU3YqB89uU2fEPN695jfPNNNzAWoDT50lDhnEIb9T6W8n%2FwFraFLQst7ui%2B2zIBVSixrZC71yw41RTBToIgcCqy8lXf3iwcXGM39swwVTEDlDxHmhcUfyRT0i0F9g%2FEmrmZMVbjnyfX8sUmmNuaTnmwweGyDWb9SIQsVbZjyiKE6kyWA0Sc%2BgIX99SrT3zpd6YrMExTd5M2e%2BXhfy68E80Odpq5Zl9XKpXB%2B%2FDrCzlDFXdsuRgW5oN79MFimqsH32KvrA3LNHxlFn0VnIIyR%2Ba4ikxCHw3EElgt372GTy%2BEd2kAKWMxeBTIFq6uKzdZLXOP%2Bd6cNr2d1Fy8%2BsWuqx%2B195V1apqXu56%2BqThFFPk5xacCi6GdWTqpN6GI4F0hVTHNS7sWhVY4dxBXYVom7V1ZYD3BG8f3Ym8%2BPDplNeIQL1sqH4a59gqWZsN8USc8oNboO2XfBl%2BT7SReSCJ%2B10%2Fb4jThPiUYPmjmeLKaYQ3tEMZ3%2BfQGUJB7diDJzwEFqqax5q7uWi0NkeMNgbv8B%2F42Y%2BlkjhU%2FDi6vdvxww%2FwyAD8wBb%2BIt0zacHHeXWuwzzp1kHAjJ11TkUE%2FMnxI4qZ86Yr6XlOwY85QkZVhgf6rheIirJow5cakwwY6pgF0zqBHyI9Khz8HZjjMHt2Aj5LPXvp6fbfXkCk99lGIb8Tmmt5r9DyIIoECioOZf8tOeyiGpJZZVwE51sTuLxrAWmvdVraFTzaNuSKrtIuIZmFi%2BnbIEZE4eKaf%2FqvOdHcSDrl1ACNb%2FYsSJHxvCMdEdZJfBU5M0BJz0sQqwH5hD2jGjkytJNslVSb16SELsFJuqh5J8fGdyYlODWSY%2FgsnZxii9Bu9&X-Amz-Signature=6b1c26d322f672919de8800c9027a02249571089b295caf56258f2403f44513b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUQOBBS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEDG26YU%2FLzpCoToXf8sOZELB6ReXenKTQKIcaqL41PMAiBXJYiJLQHpI%2B1her4YX7F5L5TCcLJjGHFBe62m0gc3Iir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI1OvW24H7miE%2F9udKtwD9kRXljqv6dU3YqB89uU2fEPN695jfPNNNzAWoDT50lDhnEIb9T6W8n%2FwFraFLQst7ui%2B2zIBVSixrZC71yw41RTBToIgcCqy8lXf3iwcXGM39swwVTEDlDxHmhcUfyRT0i0F9g%2FEmrmZMVbjnyfX8sUmmNuaTnmwweGyDWb9SIQsVbZjyiKE6kyWA0Sc%2BgIX99SrT3zpd6YrMExTd5M2e%2BXhfy68E80Odpq5Zl9XKpXB%2B%2FDrCzlDFXdsuRgW5oN79MFimqsH32KvrA3LNHxlFn0VnIIyR%2Ba4ikxCHw3EElgt372GTy%2BEd2kAKWMxeBTIFq6uKzdZLXOP%2Bd6cNr2d1Fy8%2BsWuqx%2B195V1apqXu56%2BqThFFPk5xacCi6GdWTqpN6GI4F0hVTHNS7sWhVY4dxBXYVom7V1ZYD3BG8f3Ym8%2BPDplNeIQL1sqH4a59gqWZsN8USc8oNboO2XfBl%2BT7SReSCJ%2B10%2Fb4jThPiUYPmjmeLKaYQ3tEMZ3%2BfQGUJB7diDJzwEFqqax5q7uWi0NkeMNgbv8B%2F42Y%2BlkjhU%2FDi6vdvxww%2FwyAD8wBb%2BIt0zacHHeXWuwzzp1kHAjJ11TkUE%2FMnxI4qZ86Yr6XlOwY85QkZVhgf6rheIirJow5cakwwY6pgF0zqBHyI9Khz8HZjjMHt2Aj5LPXvp6fbfXkCk99lGIb8Tmmt5r9DyIIoECioOZf8tOeyiGpJZZVwE51sTuLxrAWmvdVraFTzaNuSKrtIuIZmFi%2BnbIEZE4eKaf%2FqvOdHcSDrl1ACNb%2FYsSJHxvCMdEdZJfBU5M0BJz0sQqwH5hD2jGjkytJNslVSb16SELsFJuqh5J8fGdyYlODWSY%2FgsnZxii9Bu9&X-Amz-Signature=4ae305d8bfceffb1fc243f2709343c90087a510a177038dc6273d7f51a0381cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUQOBBS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEDG26YU%2FLzpCoToXf8sOZELB6ReXenKTQKIcaqL41PMAiBXJYiJLQHpI%2B1her4YX7F5L5TCcLJjGHFBe62m0gc3Iir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMI1OvW24H7miE%2F9udKtwD9kRXljqv6dU3YqB89uU2fEPN695jfPNNNzAWoDT50lDhnEIb9T6W8n%2FwFraFLQst7ui%2B2zIBVSixrZC71yw41RTBToIgcCqy8lXf3iwcXGM39swwVTEDlDxHmhcUfyRT0i0F9g%2FEmrmZMVbjnyfX8sUmmNuaTnmwweGyDWb9SIQsVbZjyiKE6kyWA0Sc%2BgIX99SrT3zpd6YrMExTd5M2e%2BXhfy68E80Odpq5Zl9XKpXB%2B%2FDrCzlDFXdsuRgW5oN79MFimqsH32KvrA3LNHxlFn0VnIIyR%2Ba4ikxCHw3EElgt372GTy%2BEd2kAKWMxeBTIFq6uKzdZLXOP%2Bd6cNr2d1Fy8%2BsWuqx%2B195V1apqXu56%2BqThFFPk5xacCi6GdWTqpN6GI4F0hVTHNS7sWhVY4dxBXYVom7V1ZYD3BG8f3Ym8%2BPDplNeIQL1sqH4a59gqWZsN8USc8oNboO2XfBl%2BT7SReSCJ%2B10%2Fb4jThPiUYPmjmeLKaYQ3tEMZ3%2BfQGUJB7diDJzwEFqqax5q7uWi0NkeMNgbv8B%2F42Y%2BlkjhU%2FDi6vdvxww%2FwyAD8wBb%2BIt0zacHHeXWuwzzp1kHAjJ11TkUE%2FMnxI4qZ86Yr6XlOwY85QkZVhgf6rheIirJow5cakwwY6pgF0zqBHyI9Khz8HZjjMHt2Aj5LPXvp6fbfXkCk99lGIb8Tmmt5r9DyIIoECioOZf8tOeyiGpJZZVwE51sTuLxrAWmvdVraFTzaNuSKrtIuIZmFi%2BnbIEZE4eKaf%2FqvOdHcSDrl1ACNb%2FYsSJHxvCMdEdZJfBU5M0BJz0sQqwH5hD2jGjkytJNslVSb16SELsFJuqh5J8fGdyYlODWSY%2FgsnZxii9Bu9&X-Amz-Signature=82569b228be1963c03496c28bf9fb367bce199310bd2c4d6000e8040c30c81a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
