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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXYD52B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWscZYjYDtBu%2F%2B%2FPFX5fz1WODvDkz7MaYyU62RoOQ%2BwIgSZWKj5qyUOjLK5r9ZM8jWGOdSIHHEyejKz%2FFQv%2FfBmMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBokIuQZxygxl3Lf0yrcAxwaYaK5dnq53FaZqDaGHLkaTy7irpv5yovQGmlSJ5%2BtWK19I1XrkRomHZo6bUWH5UKuBZRjHjQQKxl0TOS4b5%2BXJIYx%2BMDP6AQARQIlbsaLEK5WyEHUpxQCMbJ8%2Fkg%2Fl6mVG4L4UPmLJvhK8TvxQ9BNEajlccUew%2FdanGI%2BiWu3dNIuEQi3%2F9R3N6g1Gw1O%2Bq2dGandxcszSkvF%2BWpm12POhdFZDDhxA6I5T70kR5aPGCWK6C8Eu9%2FPVBjpe4iluJin5nS3sENsh3VR4lo08ljRdd3P%2FgfY6TaMr5NDUuaWJKwv80uocEGVzw5SsYecmcnzy%2F6gQCR9w%2F3Gsh1Sf5SIBaQt45W9GSgTDcz6m1zkmNmQlxxJnJ0ZlPgWWWthAB2Y3Ro8c2gs9it9QtTgJdvDfKkGHJDgHNiiM9SDrPyC5Jd1Ys5PAqOS2ck3r8%2FFcvEL1aGjBj4hqSa5yrjCCkLpS2QGeCc1SNaNj54zqGV%2FqqoYqJxwzFzDDj9wWB9YCp8rKZ%2BjX6PNPfwm0a1lqjc4vZh2U%2BcVm5o%2B6Lv%2F57bjQlPE%2B9aZgk8e4Tnvle0vfkS3DCjlCP8JQnkWO8fIyvhehtlHRv6YyihrQzGNQT6S%2F6A86F2cVQ%2F8DvLEMOm908IGOqUBm7hIhfZdGcY8zs%2B4FrtFt%2BaoMF5DEevUnBaNwGrXIJG0kji0L%2F0IjTEvMonJlVpPSP%2BAmJeHyk6g%2F9HExEbo0AYSGaS1J0AeVuM4Ne9weT0Lg4v7ed%2F1B5mvwJ4F7%2FSl11UXgB%2BI3YNJKElwFMDGIlxpKEq%2BztC3YUhV2kARK9nj%2BT6DbNWLKN8x1gKt7fbJAPFXFrta%2FSBzIJWib6G6pKdNUjp8&X-Amz-Signature=c39652fe7c28e59f063c435557b0eb51404c4013896627afc5f0bf9068f2295e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXYD52B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWscZYjYDtBu%2F%2B%2FPFX5fz1WODvDkz7MaYyU62RoOQ%2BwIgSZWKj5qyUOjLK5r9ZM8jWGOdSIHHEyejKz%2FFQv%2FfBmMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBokIuQZxygxl3Lf0yrcAxwaYaK5dnq53FaZqDaGHLkaTy7irpv5yovQGmlSJ5%2BtWK19I1XrkRomHZo6bUWH5UKuBZRjHjQQKxl0TOS4b5%2BXJIYx%2BMDP6AQARQIlbsaLEK5WyEHUpxQCMbJ8%2Fkg%2Fl6mVG4L4UPmLJvhK8TvxQ9BNEajlccUew%2FdanGI%2BiWu3dNIuEQi3%2F9R3N6g1Gw1O%2Bq2dGandxcszSkvF%2BWpm12POhdFZDDhxA6I5T70kR5aPGCWK6C8Eu9%2FPVBjpe4iluJin5nS3sENsh3VR4lo08ljRdd3P%2FgfY6TaMr5NDUuaWJKwv80uocEGVzw5SsYecmcnzy%2F6gQCR9w%2F3Gsh1Sf5SIBaQt45W9GSgTDcz6m1zkmNmQlxxJnJ0ZlPgWWWthAB2Y3Ro8c2gs9it9QtTgJdvDfKkGHJDgHNiiM9SDrPyC5Jd1Ys5PAqOS2ck3r8%2FFcvEL1aGjBj4hqSa5yrjCCkLpS2QGeCc1SNaNj54zqGV%2FqqoYqJxwzFzDDj9wWB9YCp8rKZ%2BjX6PNPfwm0a1lqjc4vZh2U%2BcVm5o%2B6Lv%2F57bjQlPE%2B9aZgk8e4Tnvle0vfkS3DCjlCP8JQnkWO8fIyvhehtlHRv6YyihrQzGNQT6S%2F6A86F2cVQ%2F8DvLEMOm908IGOqUBm7hIhfZdGcY8zs%2B4FrtFt%2BaoMF5DEevUnBaNwGrXIJG0kji0L%2F0IjTEvMonJlVpPSP%2BAmJeHyk6g%2F9HExEbo0AYSGaS1J0AeVuM4Ne9weT0Lg4v7ed%2F1B5mvwJ4F7%2FSl11UXgB%2BI3YNJKElwFMDGIlxpKEq%2BztC3YUhV2kARK9nj%2BT6DbNWLKN8x1gKt7fbJAPFXFrta%2FSBzIJWib6G6pKdNUjp8&X-Amz-Signature=48a217369a3a4593253ad8aa33a7b7af5ac4621377a2fbdd0f3c4994cfc1b98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXYD52B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWscZYjYDtBu%2F%2B%2FPFX5fz1WODvDkz7MaYyU62RoOQ%2BwIgSZWKj5qyUOjLK5r9ZM8jWGOdSIHHEyejKz%2FFQv%2FfBmMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBokIuQZxygxl3Lf0yrcAxwaYaK5dnq53FaZqDaGHLkaTy7irpv5yovQGmlSJ5%2BtWK19I1XrkRomHZo6bUWH5UKuBZRjHjQQKxl0TOS4b5%2BXJIYx%2BMDP6AQARQIlbsaLEK5WyEHUpxQCMbJ8%2Fkg%2Fl6mVG4L4UPmLJvhK8TvxQ9BNEajlccUew%2FdanGI%2BiWu3dNIuEQi3%2F9R3N6g1Gw1O%2Bq2dGandxcszSkvF%2BWpm12POhdFZDDhxA6I5T70kR5aPGCWK6C8Eu9%2FPVBjpe4iluJin5nS3sENsh3VR4lo08ljRdd3P%2FgfY6TaMr5NDUuaWJKwv80uocEGVzw5SsYecmcnzy%2F6gQCR9w%2F3Gsh1Sf5SIBaQt45W9GSgTDcz6m1zkmNmQlxxJnJ0ZlPgWWWthAB2Y3Ro8c2gs9it9QtTgJdvDfKkGHJDgHNiiM9SDrPyC5Jd1Ys5PAqOS2ck3r8%2FFcvEL1aGjBj4hqSa5yrjCCkLpS2QGeCc1SNaNj54zqGV%2FqqoYqJxwzFzDDj9wWB9YCp8rKZ%2BjX6PNPfwm0a1lqjc4vZh2U%2BcVm5o%2B6Lv%2F57bjQlPE%2B9aZgk8e4Tnvle0vfkS3DCjlCP8JQnkWO8fIyvhehtlHRv6YyihrQzGNQT6S%2F6A86F2cVQ%2F8DvLEMOm908IGOqUBm7hIhfZdGcY8zs%2B4FrtFt%2BaoMF5DEevUnBaNwGrXIJG0kji0L%2F0IjTEvMonJlVpPSP%2BAmJeHyk6g%2F9HExEbo0AYSGaS1J0AeVuM4Ne9weT0Lg4v7ed%2F1B5mvwJ4F7%2FSl11UXgB%2BI3YNJKElwFMDGIlxpKEq%2BztC3YUhV2kARK9nj%2BT6DbNWLKN8x1gKt7fbJAPFXFrta%2FSBzIJWib6G6pKdNUjp8&X-Amz-Signature=9372f9ea03f728132759dbbae0bf01e55c725460ba863a553bf8125647bed64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXYD52B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWscZYjYDtBu%2F%2B%2FPFX5fz1WODvDkz7MaYyU62RoOQ%2BwIgSZWKj5qyUOjLK5r9ZM8jWGOdSIHHEyejKz%2FFQv%2FfBmMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBokIuQZxygxl3Lf0yrcAxwaYaK5dnq53FaZqDaGHLkaTy7irpv5yovQGmlSJ5%2BtWK19I1XrkRomHZo6bUWH5UKuBZRjHjQQKxl0TOS4b5%2BXJIYx%2BMDP6AQARQIlbsaLEK5WyEHUpxQCMbJ8%2Fkg%2Fl6mVG4L4UPmLJvhK8TvxQ9BNEajlccUew%2FdanGI%2BiWu3dNIuEQi3%2F9R3N6g1Gw1O%2Bq2dGandxcszSkvF%2BWpm12POhdFZDDhxA6I5T70kR5aPGCWK6C8Eu9%2FPVBjpe4iluJin5nS3sENsh3VR4lo08ljRdd3P%2FgfY6TaMr5NDUuaWJKwv80uocEGVzw5SsYecmcnzy%2F6gQCR9w%2F3Gsh1Sf5SIBaQt45W9GSgTDcz6m1zkmNmQlxxJnJ0ZlPgWWWthAB2Y3Ro8c2gs9it9QtTgJdvDfKkGHJDgHNiiM9SDrPyC5Jd1Ys5PAqOS2ck3r8%2FFcvEL1aGjBj4hqSa5yrjCCkLpS2QGeCc1SNaNj54zqGV%2FqqoYqJxwzFzDDj9wWB9YCp8rKZ%2BjX6PNPfwm0a1lqjc4vZh2U%2BcVm5o%2B6Lv%2F57bjQlPE%2B9aZgk8e4Tnvle0vfkS3DCjlCP8JQnkWO8fIyvhehtlHRv6YyihrQzGNQT6S%2F6A86F2cVQ%2F8DvLEMOm908IGOqUBm7hIhfZdGcY8zs%2B4FrtFt%2BaoMF5DEevUnBaNwGrXIJG0kji0L%2F0IjTEvMonJlVpPSP%2BAmJeHyk6g%2F9HExEbo0AYSGaS1J0AeVuM4Ne9weT0Lg4v7ed%2F1B5mvwJ4F7%2FSl11UXgB%2BI3YNJKElwFMDGIlxpKEq%2BztC3YUhV2kARK9nj%2BT6DbNWLKN8x1gKt7fbJAPFXFrta%2FSBzIJWib6G6pKdNUjp8&X-Amz-Signature=c8151aff6e2d202ebf28768ccfc68b7a5f3bb5580196e36898a91ea2c099a556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXYD52B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWscZYjYDtBu%2F%2B%2FPFX5fz1WODvDkz7MaYyU62RoOQ%2BwIgSZWKj5qyUOjLK5r9ZM8jWGOdSIHHEyejKz%2FFQv%2FfBmMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBokIuQZxygxl3Lf0yrcAxwaYaK5dnq53FaZqDaGHLkaTy7irpv5yovQGmlSJ5%2BtWK19I1XrkRomHZo6bUWH5UKuBZRjHjQQKxl0TOS4b5%2BXJIYx%2BMDP6AQARQIlbsaLEK5WyEHUpxQCMbJ8%2Fkg%2Fl6mVG4L4UPmLJvhK8TvxQ9BNEajlccUew%2FdanGI%2BiWu3dNIuEQi3%2F9R3N6g1Gw1O%2Bq2dGandxcszSkvF%2BWpm12POhdFZDDhxA6I5T70kR5aPGCWK6C8Eu9%2FPVBjpe4iluJin5nS3sENsh3VR4lo08ljRdd3P%2FgfY6TaMr5NDUuaWJKwv80uocEGVzw5SsYecmcnzy%2F6gQCR9w%2F3Gsh1Sf5SIBaQt45W9GSgTDcz6m1zkmNmQlxxJnJ0ZlPgWWWthAB2Y3Ro8c2gs9it9QtTgJdvDfKkGHJDgHNiiM9SDrPyC5Jd1Ys5PAqOS2ck3r8%2FFcvEL1aGjBj4hqSa5yrjCCkLpS2QGeCc1SNaNj54zqGV%2FqqoYqJxwzFzDDj9wWB9YCp8rKZ%2BjX6PNPfwm0a1lqjc4vZh2U%2BcVm5o%2B6Lv%2F57bjQlPE%2B9aZgk8e4Tnvle0vfkS3DCjlCP8JQnkWO8fIyvhehtlHRv6YyihrQzGNQT6S%2F6A86F2cVQ%2F8DvLEMOm908IGOqUBm7hIhfZdGcY8zs%2B4FrtFt%2BaoMF5DEevUnBaNwGrXIJG0kji0L%2F0IjTEvMonJlVpPSP%2BAmJeHyk6g%2F9HExEbo0AYSGaS1J0AeVuM4Ne9weT0Lg4v7ed%2F1B5mvwJ4F7%2FSl11UXgB%2BI3YNJKElwFMDGIlxpKEq%2BztC3YUhV2kARK9nj%2BT6DbNWLKN8x1gKt7fbJAPFXFrta%2FSBzIJWib6G6pKdNUjp8&X-Amz-Signature=05d03eea7d4bd98e825ef31755fbc1f7a1e8310c1743c35536060c6492a15313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WXYD52B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKWscZYjYDtBu%2F%2B%2FPFX5fz1WODvDkz7MaYyU62RoOQ%2BwIgSZWKj5qyUOjLK5r9ZM8jWGOdSIHHEyejKz%2FFQv%2FfBmMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBokIuQZxygxl3Lf0yrcAxwaYaK5dnq53FaZqDaGHLkaTy7irpv5yovQGmlSJ5%2BtWK19I1XrkRomHZo6bUWH5UKuBZRjHjQQKxl0TOS4b5%2BXJIYx%2BMDP6AQARQIlbsaLEK5WyEHUpxQCMbJ8%2Fkg%2Fl6mVG4L4UPmLJvhK8TvxQ9BNEajlccUew%2FdanGI%2BiWu3dNIuEQi3%2F9R3N6g1Gw1O%2Bq2dGandxcszSkvF%2BWpm12POhdFZDDhxA6I5T70kR5aPGCWK6C8Eu9%2FPVBjpe4iluJin5nS3sENsh3VR4lo08ljRdd3P%2FgfY6TaMr5NDUuaWJKwv80uocEGVzw5SsYecmcnzy%2F6gQCR9w%2F3Gsh1Sf5SIBaQt45W9GSgTDcz6m1zkmNmQlxxJnJ0ZlPgWWWthAB2Y3Ro8c2gs9it9QtTgJdvDfKkGHJDgHNiiM9SDrPyC5Jd1Ys5PAqOS2ck3r8%2FFcvEL1aGjBj4hqSa5yrjCCkLpS2QGeCc1SNaNj54zqGV%2FqqoYqJxwzFzDDj9wWB9YCp8rKZ%2BjX6PNPfwm0a1lqjc4vZh2U%2BcVm5o%2B6Lv%2F57bjQlPE%2B9aZgk8e4Tnvle0vfkS3DCjlCP8JQnkWO8fIyvhehtlHRv6YyihrQzGNQT6S%2F6A86F2cVQ%2F8DvLEMOm908IGOqUBm7hIhfZdGcY8zs%2B4FrtFt%2BaoMF5DEevUnBaNwGrXIJG0kji0L%2F0IjTEvMonJlVpPSP%2BAmJeHyk6g%2F9HExEbo0AYSGaS1J0AeVuM4Ne9weT0Lg4v7ed%2F1B5mvwJ4F7%2FSl11UXgB%2BI3YNJKElwFMDGIlxpKEq%2BztC3YUhV2kARK9nj%2BT6DbNWLKN8x1gKt7fbJAPFXFrta%2FSBzIJWib6G6pKdNUjp8&X-Amz-Signature=3b2c34703f901da6404f79c6ccca368e0e81fc2c3db64cc2ff3cd31639a4150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
