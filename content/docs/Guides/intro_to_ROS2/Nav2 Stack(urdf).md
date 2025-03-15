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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KXFORQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhit7%2Bu8ciLG9hFQh2b4wvJhYwxvMNowTYQ%2F%2BRpvCxfAiEA%2BPxK%2FJr839ULuDHZBEGknIUMqsPZoGxzmUjuaXVqJX4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXAUI1Tv3MxOCm4sCrcA%2B1xZ5OIkUbB%2BEki5o35ry1r841C3cxDzuHXAwZ5LY9FhExuRIs655cIWRpAPUINgBqHi1xfUDQA9RE0r4Vmb8ITYNbcBl8nKjbGVEVyu%2FKMOBMm9yezGXQ%2BiIMRUDxQzB1KYbUUjP1Ge498UxFEsx3uMP6t9lWc9PG5uGxE%2Bf3A6rFSF6WytsHmvwqQq4dNeIkrr%2Fr4goMG%2F%2BKGcK6uBURFAdtIMMn6R%2Bi2umG00f1bQgBiK5FJmc0qrXvg7%2B%2FM2iqCccTviJewkoph6bn5E8WN1qXyIisNORoKnfT0tZsc7D3zMyDyAsFTvxRG%2FOc6U%2FkKORrs6AFUWIYIgZjTAJ1aW%2Fhs4l2f5eKlOB%2F6pLtYGzzQI10P8vqfochayg4PYI1jLTG3JLuUSMdEcP0k7YCQI60qOQufSzvnQl9tibxB1HBmCSv6b3k7K6v87tEfi%2BpsnbeSsOFShWkKZGF%2Ft%2BlV23JuxbPkjak6OYzzBochY%2BTW6zCrOUilHrF2xC0XLwGOfK6GnFsP%2B62roHZglIbHtibkPLhHh3xoL928MkR5c%2BrK0Y7cXfQNwtfIg6AOYrVmzwFfcAbC9jJuD2GfjOJ8Zrn%2BO0%2BWUmUtVx%2FkjCHMLa9FSbKgPKnrJ2fQMPGG1L4GOqUBuZNhMeDulzqD3Jd%2FUWaQUwzm1KGGUXBbTYtpA2Uc1GDGZuHIBkH25li3jZXuY4gJLABZVcimAilPIkGv4Bz05wUdHLeWuw4evqgvYQCXnkqpNCHnJ6mACGDYXBiNY1xlZA%2FStLc4%2FlZCY3eSoa%2B6DyL1NRRy44ZuhAt%2FdI85VddvOGltXZVjG1yFfOG3ZVAFp7vAl6GLK83IwcaOts%2FC8nEic4Ci&X-Amz-Signature=4118cc945a1907791dcf55b22cf3804e1e45afe3a0a1ae0ec9a1f0f830a65c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KXFORQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhit7%2Bu8ciLG9hFQh2b4wvJhYwxvMNowTYQ%2F%2BRpvCxfAiEA%2BPxK%2FJr839ULuDHZBEGknIUMqsPZoGxzmUjuaXVqJX4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXAUI1Tv3MxOCm4sCrcA%2B1xZ5OIkUbB%2BEki5o35ry1r841C3cxDzuHXAwZ5LY9FhExuRIs655cIWRpAPUINgBqHi1xfUDQA9RE0r4Vmb8ITYNbcBl8nKjbGVEVyu%2FKMOBMm9yezGXQ%2BiIMRUDxQzB1KYbUUjP1Ge498UxFEsx3uMP6t9lWc9PG5uGxE%2Bf3A6rFSF6WytsHmvwqQq4dNeIkrr%2Fr4goMG%2F%2BKGcK6uBURFAdtIMMn6R%2Bi2umG00f1bQgBiK5FJmc0qrXvg7%2B%2FM2iqCccTviJewkoph6bn5E8WN1qXyIisNORoKnfT0tZsc7D3zMyDyAsFTvxRG%2FOc6U%2FkKORrs6AFUWIYIgZjTAJ1aW%2Fhs4l2f5eKlOB%2F6pLtYGzzQI10P8vqfochayg4PYI1jLTG3JLuUSMdEcP0k7YCQI60qOQufSzvnQl9tibxB1HBmCSv6b3k7K6v87tEfi%2BpsnbeSsOFShWkKZGF%2Ft%2BlV23JuxbPkjak6OYzzBochY%2BTW6zCrOUilHrF2xC0XLwGOfK6GnFsP%2B62roHZglIbHtibkPLhHh3xoL928MkR5c%2BrK0Y7cXfQNwtfIg6AOYrVmzwFfcAbC9jJuD2GfjOJ8Zrn%2BO0%2BWUmUtVx%2FkjCHMLa9FSbKgPKnrJ2fQMPGG1L4GOqUBuZNhMeDulzqD3Jd%2FUWaQUwzm1KGGUXBbTYtpA2Uc1GDGZuHIBkH25li3jZXuY4gJLABZVcimAilPIkGv4Bz05wUdHLeWuw4evqgvYQCXnkqpNCHnJ6mACGDYXBiNY1xlZA%2FStLc4%2FlZCY3eSoa%2B6DyL1NRRy44ZuhAt%2FdI85VddvOGltXZVjG1yFfOG3ZVAFp7vAl6GLK83IwcaOts%2FC8nEic4Ci&X-Amz-Signature=a4860a5fbeb3a40f24ec16cfc26f35c01b787ab77ae9d00584c1262e848cf39f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KXFORQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhit7%2Bu8ciLG9hFQh2b4wvJhYwxvMNowTYQ%2F%2BRpvCxfAiEA%2BPxK%2FJr839ULuDHZBEGknIUMqsPZoGxzmUjuaXVqJX4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXAUI1Tv3MxOCm4sCrcA%2B1xZ5OIkUbB%2BEki5o35ry1r841C3cxDzuHXAwZ5LY9FhExuRIs655cIWRpAPUINgBqHi1xfUDQA9RE0r4Vmb8ITYNbcBl8nKjbGVEVyu%2FKMOBMm9yezGXQ%2BiIMRUDxQzB1KYbUUjP1Ge498UxFEsx3uMP6t9lWc9PG5uGxE%2Bf3A6rFSF6WytsHmvwqQq4dNeIkrr%2Fr4goMG%2F%2BKGcK6uBURFAdtIMMn6R%2Bi2umG00f1bQgBiK5FJmc0qrXvg7%2B%2FM2iqCccTviJewkoph6bn5E8WN1qXyIisNORoKnfT0tZsc7D3zMyDyAsFTvxRG%2FOc6U%2FkKORrs6AFUWIYIgZjTAJ1aW%2Fhs4l2f5eKlOB%2F6pLtYGzzQI10P8vqfochayg4PYI1jLTG3JLuUSMdEcP0k7YCQI60qOQufSzvnQl9tibxB1HBmCSv6b3k7K6v87tEfi%2BpsnbeSsOFShWkKZGF%2Ft%2BlV23JuxbPkjak6OYzzBochY%2BTW6zCrOUilHrF2xC0XLwGOfK6GnFsP%2B62roHZglIbHtibkPLhHh3xoL928MkR5c%2BrK0Y7cXfQNwtfIg6AOYrVmzwFfcAbC9jJuD2GfjOJ8Zrn%2BO0%2BWUmUtVx%2FkjCHMLa9FSbKgPKnrJ2fQMPGG1L4GOqUBuZNhMeDulzqD3Jd%2FUWaQUwzm1KGGUXBbTYtpA2Uc1GDGZuHIBkH25li3jZXuY4gJLABZVcimAilPIkGv4Bz05wUdHLeWuw4evqgvYQCXnkqpNCHnJ6mACGDYXBiNY1xlZA%2FStLc4%2FlZCY3eSoa%2B6DyL1NRRy44ZuhAt%2FdI85VddvOGltXZVjG1yFfOG3ZVAFp7vAl6GLK83IwcaOts%2FC8nEic4Ci&X-Amz-Signature=0a4b3606520fc4611ba4da413300a89a55ca619aa05658fb7552acf25ab9afc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KXFORQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhit7%2Bu8ciLG9hFQh2b4wvJhYwxvMNowTYQ%2F%2BRpvCxfAiEA%2BPxK%2FJr839ULuDHZBEGknIUMqsPZoGxzmUjuaXVqJX4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXAUI1Tv3MxOCm4sCrcA%2B1xZ5OIkUbB%2BEki5o35ry1r841C3cxDzuHXAwZ5LY9FhExuRIs655cIWRpAPUINgBqHi1xfUDQA9RE0r4Vmb8ITYNbcBl8nKjbGVEVyu%2FKMOBMm9yezGXQ%2BiIMRUDxQzB1KYbUUjP1Ge498UxFEsx3uMP6t9lWc9PG5uGxE%2Bf3A6rFSF6WytsHmvwqQq4dNeIkrr%2Fr4goMG%2F%2BKGcK6uBURFAdtIMMn6R%2Bi2umG00f1bQgBiK5FJmc0qrXvg7%2B%2FM2iqCccTviJewkoph6bn5E8WN1qXyIisNORoKnfT0tZsc7D3zMyDyAsFTvxRG%2FOc6U%2FkKORrs6AFUWIYIgZjTAJ1aW%2Fhs4l2f5eKlOB%2F6pLtYGzzQI10P8vqfochayg4PYI1jLTG3JLuUSMdEcP0k7YCQI60qOQufSzvnQl9tibxB1HBmCSv6b3k7K6v87tEfi%2BpsnbeSsOFShWkKZGF%2Ft%2BlV23JuxbPkjak6OYzzBochY%2BTW6zCrOUilHrF2xC0XLwGOfK6GnFsP%2B62roHZglIbHtibkPLhHh3xoL928MkR5c%2BrK0Y7cXfQNwtfIg6AOYrVmzwFfcAbC9jJuD2GfjOJ8Zrn%2BO0%2BWUmUtVx%2FkjCHMLa9FSbKgPKnrJ2fQMPGG1L4GOqUBuZNhMeDulzqD3Jd%2FUWaQUwzm1KGGUXBbTYtpA2Uc1GDGZuHIBkH25li3jZXuY4gJLABZVcimAilPIkGv4Bz05wUdHLeWuw4evqgvYQCXnkqpNCHnJ6mACGDYXBiNY1xlZA%2FStLc4%2FlZCY3eSoa%2B6DyL1NRRy44ZuhAt%2FdI85VddvOGltXZVjG1yFfOG3ZVAFp7vAl6GLK83IwcaOts%2FC8nEic4Ci&X-Amz-Signature=a3478709419eac8a6ba1d3cc203a29680c7ec59775620ef261849f5764c0dcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KXFORQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhit7%2Bu8ciLG9hFQh2b4wvJhYwxvMNowTYQ%2F%2BRpvCxfAiEA%2BPxK%2FJr839ULuDHZBEGknIUMqsPZoGxzmUjuaXVqJX4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXAUI1Tv3MxOCm4sCrcA%2B1xZ5OIkUbB%2BEki5o35ry1r841C3cxDzuHXAwZ5LY9FhExuRIs655cIWRpAPUINgBqHi1xfUDQA9RE0r4Vmb8ITYNbcBl8nKjbGVEVyu%2FKMOBMm9yezGXQ%2BiIMRUDxQzB1KYbUUjP1Ge498UxFEsx3uMP6t9lWc9PG5uGxE%2Bf3A6rFSF6WytsHmvwqQq4dNeIkrr%2Fr4goMG%2F%2BKGcK6uBURFAdtIMMn6R%2Bi2umG00f1bQgBiK5FJmc0qrXvg7%2B%2FM2iqCccTviJewkoph6bn5E8WN1qXyIisNORoKnfT0tZsc7D3zMyDyAsFTvxRG%2FOc6U%2FkKORrs6AFUWIYIgZjTAJ1aW%2Fhs4l2f5eKlOB%2F6pLtYGzzQI10P8vqfochayg4PYI1jLTG3JLuUSMdEcP0k7YCQI60qOQufSzvnQl9tibxB1HBmCSv6b3k7K6v87tEfi%2BpsnbeSsOFShWkKZGF%2Ft%2BlV23JuxbPkjak6OYzzBochY%2BTW6zCrOUilHrF2xC0XLwGOfK6GnFsP%2B62roHZglIbHtibkPLhHh3xoL928MkR5c%2BrK0Y7cXfQNwtfIg6AOYrVmzwFfcAbC9jJuD2GfjOJ8Zrn%2BO0%2BWUmUtVx%2FkjCHMLa9FSbKgPKnrJ2fQMPGG1L4GOqUBuZNhMeDulzqD3Jd%2FUWaQUwzm1KGGUXBbTYtpA2Uc1GDGZuHIBkH25li3jZXuY4gJLABZVcimAilPIkGv4Bz05wUdHLeWuw4evqgvYQCXnkqpNCHnJ6mACGDYXBiNY1xlZA%2FStLc4%2FlZCY3eSoa%2B6DyL1NRRy44ZuhAt%2FdI85VddvOGltXZVjG1yFfOG3ZVAFp7vAl6GLK83IwcaOts%2FC8nEic4Ci&X-Amz-Signature=4d50f8e0a9f1857b006b6f555d32f80687ffd01f86e9dc381cf6f5c583399a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KXFORQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhit7%2Bu8ciLG9hFQh2b4wvJhYwxvMNowTYQ%2F%2BRpvCxfAiEA%2BPxK%2FJr839ULuDHZBEGknIUMqsPZoGxzmUjuaXVqJX4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXAUI1Tv3MxOCm4sCrcA%2B1xZ5OIkUbB%2BEki5o35ry1r841C3cxDzuHXAwZ5LY9FhExuRIs655cIWRpAPUINgBqHi1xfUDQA9RE0r4Vmb8ITYNbcBl8nKjbGVEVyu%2FKMOBMm9yezGXQ%2BiIMRUDxQzB1KYbUUjP1Ge498UxFEsx3uMP6t9lWc9PG5uGxE%2Bf3A6rFSF6WytsHmvwqQq4dNeIkrr%2Fr4goMG%2F%2BKGcK6uBURFAdtIMMn6R%2Bi2umG00f1bQgBiK5FJmc0qrXvg7%2B%2FM2iqCccTviJewkoph6bn5E8WN1qXyIisNORoKnfT0tZsc7D3zMyDyAsFTvxRG%2FOc6U%2FkKORrs6AFUWIYIgZjTAJ1aW%2Fhs4l2f5eKlOB%2F6pLtYGzzQI10P8vqfochayg4PYI1jLTG3JLuUSMdEcP0k7YCQI60qOQufSzvnQl9tibxB1HBmCSv6b3k7K6v87tEfi%2BpsnbeSsOFShWkKZGF%2Ft%2BlV23JuxbPkjak6OYzzBochY%2BTW6zCrOUilHrF2xC0XLwGOfK6GnFsP%2B62roHZglIbHtibkPLhHh3xoL928MkR5c%2BrK0Y7cXfQNwtfIg6AOYrVmzwFfcAbC9jJuD2GfjOJ8Zrn%2BO0%2BWUmUtVx%2FkjCHMLa9FSbKgPKnrJ2fQMPGG1L4GOqUBuZNhMeDulzqD3Jd%2FUWaQUwzm1KGGUXBbTYtpA2Uc1GDGZuHIBkH25li3jZXuY4gJLABZVcimAilPIkGv4Bz05wUdHLeWuw4evqgvYQCXnkqpNCHnJ6mACGDYXBiNY1xlZA%2FStLc4%2FlZCY3eSoa%2B6DyL1NRRy44ZuhAt%2FdI85VddvOGltXZVjG1yFfOG3ZVAFp7vAl6GLK83IwcaOts%2FC8nEic4Ci&X-Amz-Signature=e8ba5dd4484e5c52586a3d5de52dcbb206a5ba017a411b3f469f8610df9830ce&X-Amz-SignedHeaders=host&x-id=GetObject)
