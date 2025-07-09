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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIAVYDF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oHQPmIm%2FFWarI7HUkG9BkXp%2FasxAfR7FUWUYVS7cogIhAKXyJ3pcZVNc9driYyXi3hldmC5QVJvGRnSY3pZnLu9vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5B3UtJdK6KavFm5Iq3AOr9Kub%2FYxvRhzcZR%2BlO%2FRxuo26SDoAshcZI8l3Q9KELk%2Fbmz3j86%2FOTDHeW%2B3Em0zBshlyTtmft%2Fv%2BNQC0ZcM9hjX3nTfQJc806yQjcM0E8DV45oyiUrK%2FzfKbjH%2ByMpTkW3l%2B7yM%2B3P7dLQesf9S%2BLECUqYiU1CaAC0cSOcKRMvdyZ1JjW1OcTKcrarRLiSzcTtYx%2Fv%2Bx6rLEif0ujfP25apJk63gSlgMTQwKNgMR8b28x2IdLP1W3v8R6LYA3QZfp28ThgFMd8UjDjY5a%2FmsBws7jb%2FvjeoFhxw%2Boy0eie38shucJQzcAHw0JiHqlrHLnmXYNZN8aeb0IZNMJz2am70epYij5z0MjDEdMr%2FSuTFeunXYni4pj%2FWEwZEwfIHoHBmMn7WfKjEv1SYIDXjb%2BrgbVjSOMMUvCBXM%2FNbjzPvv4ygzmyvdMh19gYQv558nChDqfNaoB9KmvLpuaBHB45ZX%2FUyoyjlKzMnwmVZ9mrgGY4FH9nxDxdmPIFsCrKyL2e%2BUwHkRoJVUXBiDm3gerQYfQY6IGu%2BnGXuGNmvqq6pg1imh%2Bw1SzLkhysXf9mZVWmovuaAreZFNCapMQVq8JhQQx2VJXd%2FLdUj05S56m3jFri8hZ3i%2Bd0ZUyTCr77rDBjqkAYLqKm5UeTPcweyvKXe1m3NGQX3g1Bork58X4w975HK%2FZrGK9DlHLntsT%2BA5pGgn60lrFtfQCVwKxDF6aobPaTX%2FZYSImJUNrrOkjzhyXCAf8G5n%2FFgygS6S6E74eDLH126kGT5mIlwfpK3zJbsEAWWs2w5REPHvJjiW%2Bf0GX2U41kYwEp99iWZxRao3x6iNZSJ0m0lL5Am%2FFbFhYf766cHxHahe&X-Amz-Signature=d57e2ed01f338a118974a059753d1dfdd28bd04e2050b781f9cc81b52690a982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIAVYDF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oHQPmIm%2FFWarI7HUkG9BkXp%2FasxAfR7FUWUYVS7cogIhAKXyJ3pcZVNc9driYyXi3hldmC5QVJvGRnSY3pZnLu9vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5B3UtJdK6KavFm5Iq3AOr9Kub%2FYxvRhzcZR%2BlO%2FRxuo26SDoAshcZI8l3Q9KELk%2Fbmz3j86%2FOTDHeW%2B3Em0zBshlyTtmft%2Fv%2BNQC0ZcM9hjX3nTfQJc806yQjcM0E8DV45oyiUrK%2FzfKbjH%2ByMpTkW3l%2B7yM%2B3P7dLQesf9S%2BLECUqYiU1CaAC0cSOcKRMvdyZ1JjW1OcTKcrarRLiSzcTtYx%2Fv%2Bx6rLEif0ujfP25apJk63gSlgMTQwKNgMR8b28x2IdLP1W3v8R6LYA3QZfp28ThgFMd8UjDjY5a%2FmsBws7jb%2FvjeoFhxw%2Boy0eie38shucJQzcAHw0JiHqlrHLnmXYNZN8aeb0IZNMJz2am70epYij5z0MjDEdMr%2FSuTFeunXYni4pj%2FWEwZEwfIHoHBmMn7WfKjEv1SYIDXjb%2BrgbVjSOMMUvCBXM%2FNbjzPvv4ygzmyvdMh19gYQv558nChDqfNaoB9KmvLpuaBHB45ZX%2FUyoyjlKzMnwmVZ9mrgGY4FH9nxDxdmPIFsCrKyL2e%2BUwHkRoJVUXBiDm3gerQYfQY6IGu%2BnGXuGNmvqq6pg1imh%2Bw1SzLkhysXf9mZVWmovuaAreZFNCapMQVq8JhQQx2VJXd%2FLdUj05S56m3jFri8hZ3i%2Bd0ZUyTCr77rDBjqkAYLqKm5UeTPcweyvKXe1m3NGQX3g1Bork58X4w975HK%2FZrGK9DlHLntsT%2BA5pGgn60lrFtfQCVwKxDF6aobPaTX%2FZYSImJUNrrOkjzhyXCAf8G5n%2FFgygS6S6E74eDLH126kGT5mIlwfpK3zJbsEAWWs2w5REPHvJjiW%2Bf0GX2U41kYwEp99iWZxRao3x6iNZSJ0m0lL5Am%2FFbFhYf766cHxHahe&X-Amz-Signature=cd976b777c1195142596170d8668aa76122066ac224fae302e80fbde6fc743dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIAVYDF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oHQPmIm%2FFWarI7HUkG9BkXp%2FasxAfR7FUWUYVS7cogIhAKXyJ3pcZVNc9driYyXi3hldmC5QVJvGRnSY3pZnLu9vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5B3UtJdK6KavFm5Iq3AOr9Kub%2FYxvRhzcZR%2BlO%2FRxuo26SDoAshcZI8l3Q9KELk%2Fbmz3j86%2FOTDHeW%2B3Em0zBshlyTtmft%2Fv%2BNQC0ZcM9hjX3nTfQJc806yQjcM0E8DV45oyiUrK%2FzfKbjH%2ByMpTkW3l%2B7yM%2B3P7dLQesf9S%2BLECUqYiU1CaAC0cSOcKRMvdyZ1JjW1OcTKcrarRLiSzcTtYx%2Fv%2Bx6rLEif0ujfP25apJk63gSlgMTQwKNgMR8b28x2IdLP1W3v8R6LYA3QZfp28ThgFMd8UjDjY5a%2FmsBws7jb%2FvjeoFhxw%2Boy0eie38shucJQzcAHw0JiHqlrHLnmXYNZN8aeb0IZNMJz2am70epYij5z0MjDEdMr%2FSuTFeunXYni4pj%2FWEwZEwfIHoHBmMn7WfKjEv1SYIDXjb%2BrgbVjSOMMUvCBXM%2FNbjzPvv4ygzmyvdMh19gYQv558nChDqfNaoB9KmvLpuaBHB45ZX%2FUyoyjlKzMnwmVZ9mrgGY4FH9nxDxdmPIFsCrKyL2e%2BUwHkRoJVUXBiDm3gerQYfQY6IGu%2BnGXuGNmvqq6pg1imh%2Bw1SzLkhysXf9mZVWmovuaAreZFNCapMQVq8JhQQx2VJXd%2FLdUj05S56m3jFri8hZ3i%2Bd0ZUyTCr77rDBjqkAYLqKm5UeTPcweyvKXe1m3NGQX3g1Bork58X4w975HK%2FZrGK9DlHLntsT%2BA5pGgn60lrFtfQCVwKxDF6aobPaTX%2FZYSImJUNrrOkjzhyXCAf8G5n%2FFgygS6S6E74eDLH126kGT5mIlwfpK3zJbsEAWWs2w5REPHvJjiW%2Bf0GX2U41kYwEp99iWZxRao3x6iNZSJ0m0lL5Am%2FFbFhYf766cHxHahe&X-Amz-Signature=d6f1e7ae17f82276f9c1fa52769b64283302a7b85910f2ee7816b6198322b160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIAVYDF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oHQPmIm%2FFWarI7HUkG9BkXp%2FasxAfR7FUWUYVS7cogIhAKXyJ3pcZVNc9driYyXi3hldmC5QVJvGRnSY3pZnLu9vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5B3UtJdK6KavFm5Iq3AOr9Kub%2FYxvRhzcZR%2BlO%2FRxuo26SDoAshcZI8l3Q9KELk%2Fbmz3j86%2FOTDHeW%2B3Em0zBshlyTtmft%2Fv%2BNQC0ZcM9hjX3nTfQJc806yQjcM0E8DV45oyiUrK%2FzfKbjH%2ByMpTkW3l%2B7yM%2B3P7dLQesf9S%2BLECUqYiU1CaAC0cSOcKRMvdyZ1JjW1OcTKcrarRLiSzcTtYx%2Fv%2Bx6rLEif0ujfP25apJk63gSlgMTQwKNgMR8b28x2IdLP1W3v8R6LYA3QZfp28ThgFMd8UjDjY5a%2FmsBws7jb%2FvjeoFhxw%2Boy0eie38shucJQzcAHw0JiHqlrHLnmXYNZN8aeb0IZNMJz2am70epYij5z0MjDEdMr%2FSuTFeunXYni4pj%2FWEwZEwfIHoHBmMn7WfKjEv1SYIDXjb%2BrgbVjSOMMUvCBXM%2FNbjzPvv4ygzmyvdMh19gYQv558nChDqfNaoB9KmvLpuaBHB45ZX%2FUyoyjlKzMnwmVZ9mrgGY4FH9nxDxdmPIFsCrKyL2e%2BUwHkRoJVUXBiDm3gerQYfQY6IGu%2BnGXuGNmvqq6pg1imh%2Bw1SzLkhysXf9mZVWmovuaAreZFNCapMQVq8JhQQx2VJXd%2FLdUj05S56m3jFri8hZ3i%2Bd0ZUyTCr77rDBjqkAYLqKm5UeTPcweyvKXe1m3NGQX3g1Bork58X4w975HK%2FZrGK9DlHLntsT%2BA5pGgn60lrFtfQCVwKxDF6aobPaTX%2FZYSImJUNrrOkjzhyXCAf8G5n%2FFgygS6S6E74eDLH126kGT5mIlwfpK3zJbsEAWWs2w5REPHvJjiW%2Bf0GX2U41kYwEp99iWZxRao3x6iNZSJ0m0lL5Am%2FFbFhYf766cHxHahe&X-Amz-Signature=091521368d9b3d26c02f8ffc0dbac1b3511006e74d95474a99e2471bf7527776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIAVYDF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oHQPmIm%2FFWarI7HUkG9BkXp%2FasxAfR7FUWUYVS7cogIhAKXyJ3pcZVNc9driYyXi3hldmC5QVJvGRnSY3pZnLu9vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5B3UtJdK6KavFm5Iq3AOr9Kub%2FYxvRhzcZR%2BlO%2FRxuo26SDoAshcZI8l3Q9KELk%2Fbmz3j86%2FOTDHeW%2B3Em0zBshlyTtmft%2Fv%2BNQC0ZcM9hjX3nTfQJc806yQjcM0E8DV45oyiUrK%2FzfKbjH%2ByMpTkW3l%2B7yM%2B3P7dLQesf9S%2BLECUqYiU1CaAC0cSOcKRMvdyZ1JjW1OcTKcrarRLiSzcTtYx%2Fv%2Bx6rLEif0ujfP25apJk63gSlgMTQwKNgMR8b28x2IdLP1W3v8R6LYA3QZfp28ThgFMd8UjDjY5a%2FmsBws7jb%2FvjeoFhxw%2Boy0eie38shucJQzcAHw0JiHqlrHLnmXYNZN8aeb0IZNMJz2am70epYij5z0MjDEdMr%2FSuTFeunXYni4pj%2FWEwZEwfIHoHBmMn7WfKjEv1SYIDXjb%2BrgbVjSOMMUvCBXM%2FNbjzPvv4ygzmyvdMh19gYQv558nChDqfNaoB9KmvLpuaBHB45ZX%2FUyoyjlKzMnwmVZ9mrgGY4FH9nxDxdmPIFsCrKyL2e%2BUwHkRoJVUXBiDm3gerQYfQY6IGu%2BnGXuGNmvqq6pg1imh%2Bw1SzLkhysXf9mZVWmovuaAreZFNCapMQVq8JhQQx2VJXd%2FLdUj05S56m3jFri8hZ3i%2Bd0ZUyTCr77rDBjqkAYLqKm5UeTPcweyvKXe1m3NGQX3g1Bork58X4w975HK%2FZrGK9DlHLntsT%2BA5pGgn60lrFtfQCVwKxDF6aobPaTX%2FZYSImJUNrrOkjzhyXCAf8G5n%2FFgygS6S6E74eDLH126kGT5mIlwfpK3zJbsEAWWs2w5REPHvJjiW%2Bf0GX2U41kYwEp99iWZxRao3x6iNZSJ0m0lL5Am%2FFbFhYf766cHxHahe&X-Amz-Signature=8cd76b263301a9d3b69c2a73087510bce66e41c88bf8cb5ca4aac24b3053e8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIAVYDF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oHQPmIm%2FFWarI7HUkG9BkXp%2FasxAfR7FUWUYVS7cogIhAKXyJ3pcZVNc9driYyXi3hldmC5QVJvGRnSY3pZnLu9vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5B3UtJdK6KavFm5Iq3AOr9Kub%2FYxvRhzcZR%2BlO%2FRxuo26SDoAshcZI8l3Q9KELk%2Fbmz3j86%2FOTDHeW%2B3Em0zBshlyTtmft%2Fv%2BNQC0ZcM9hjX3nTfQJc806yQjcM0E8DV45oyiUrK%2FzfKbjH%2ByMpTkW3l%2B7yM%2B3P7dLQesf9S%2BLECUqYiU1CaAC0cSOcKRMvdyZ1JjW1OcTKcrarRLiSzcTtYx%2Fv%2Bx6rLEif0ujfP25apJk63gSlgMTQwKNgMR8b28x2IdLP1W3v8R6LYA3QZfp28ThgFMd8UjDjY5a%2FmsBws7jb%2FvjeoFhxw%2Boy0eie38shucJQzcAHw0JiHqlrHLnmXYNZN8aeb0IZNMJz2am70epYij5z0MjDEdMr%2FSuTFeunXYni4pj%2FWEwZEwfIHoHBmMn7WfKjEv1SYIDXjb%2BrgbVjSOMMUvCBXM%2FNbjzPvv4ygzmyvdMh19gYQv558nChDqfNaoB9KmvLpuaBHB45ZX%2FUyoyjlKzMnwmVZ9mrgGY4FH9nxDxdmPIFsCrKyL2e%2BUwHkRoJVUXBiDm3gerQYfQY6IGu%2BnGXuGNmvqq6pg1imh%2Bw1SzLkhysXf9mZVWmovuaAreZFNCapMQVq8JhQQx2VJXd%2FLdUj05S56m3jFri8hZ3i%2Bd0ZUyTCr77rDBjqkAYLqKm5UeTPcweyvKXe1m3NGQX3g1Bork58X4w975HK%2FZrGK9DlHLntsT%2BA5pGgn60lrFtfQCVwKxDF6aobPaTX%2FZYSImJUNrrOkjzhyXCAf8G5n%2FFgygS6S6E74eDLH126kGT5mIlwfpK3zJbsEAWWs2w5REPHvJjiW%2Bf0GX2U41kYwEp99iWZxRao3x6iNZSJ0m0lL5Am%2FFbFhYf766cHxHahe&X-Amz-Signature=327dc25c23ea3f6932ea1b82e788b73abe17cb447763daf6e6444f65633cdc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
