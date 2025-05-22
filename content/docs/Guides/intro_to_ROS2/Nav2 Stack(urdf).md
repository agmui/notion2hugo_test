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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJDCLGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGMH%2BizLd4V%2FyCeoV%2FzlNPMDqvSLXTN0M0hjPDwLOe%2BRAiEAsel7RFtheffJOD36baKvm00rKZLXkM8cfEhUSmsADoEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE0lGxjxokdb6GF4ircAzY2hVnm%2BqX%2BbidB9yOCvjED%2BcGaK87H%2BZ%2FtMmsgg01hkZhCdfVeypmW6gDE8LouDvR1gH4qhdot%2FfI20qPCy4XkUGSiMkF5kQm8B4khwDig3gVLg6VXgDQoT8tUNQn1DT1PWGU6oMMR6BIKUusmaYUZ3pgirQB5YYXAVsKfWVhuMYtdwQLbGqREsad4sbs4DP3HS%2F6rG%2BBULhi7Ia1sz71r81F%2BXBPlDkspBo%2BPAKOa%2Fn3vcDAuj0k7ZLTyrlWbbRIbDS7gPFC8NgBChrEHvdKgUE976qMKACG8obNCHMNMdAZVBoecTZhrJIdDgGPCsg184hNccfDbJBOJBMAdMgpyA8wvQQs9x5KP6C4crg3tklcStFTq8PStH7Se2n5eAIQt7C%2B3uhZA7xIHQVeBk6KDevERC5yYkzG8mFsBhIewq61a6msX2ENgK01icHZc0fHBBzOJ2EwzbMBExCycCtoO%2FAsvFBe%2BDOUrMQ8ENw9O6bQhlATQSh5BGsX%2B3gOGx%2FqFqDY%2FDjn3zhmauDaDsxEiIUQt9KZ0U0eSzSaXpCT3BM%2B15w1n%2FfhLdKiiruwV4GFQQZ0lq6Urff8%2FBBWReuersQL3YHV3JuZmiz%2FqRFN8HgxDjn4STAncoiwhMMqRvMEGOqUBGeyTrVHGcDpiWoPAwSE4pjioWxTU4cI5P9c8RCC0UaSHHnL4UUNNKB%2B8iFgjH7%2BVqNqvp7vtJAJ6OP5JyRyPFsG6JVIpguGHPX5DsJwJx4%2Fgkw6G%2FE0CgQVsaTt%2FttnkKxvHw9WzmlZ%2FVzp3vYZz0TI%2FAzqG%2BTcxMSE6RXnlC5krxm%2FgG%2Bgj0VDkZH4fBkzLu3Yu4HMb9OZklNUbWSU6QeXNkfR%2F&X-Amz-Signature=8a0bf3d19ec02d32291024aef568a9a2d21bdb2d2b80453fb248fb5c66a9da68&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJDCLGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGMH%2BizLd4V%2FyCeoV%2FzlNPMDqvSLXTN0M0hjPDwLOe%2BRAiEAsel7RFtheffJOD36baKvm00rKZLXkM8cfEhUSmsADoEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE0lGxjxokdb6GF4ircAzY2hVnm%2BqX%2BbidB9yOCvjED%2BcGaK87H%2BZ%2FtMmsgg01hkZhCdfVeypmW6gDE8LouDvR1gH4qhdot%2FfI20qPCy4XkUGSiMkF5kQm8B4khwDig3gVLg6VXgDQoT8tUNQn1DT1PWGU6oMMR6BIKUusmaYUZ3pgirQB5YYXAVsKfWVhuMYtdwQLbGqREsad4sbs4DP3HS%2F6rG%2BBULhi7Ia1sz71r81F%2BXBPlDkspBo%2BPAKOa%2Fn3vcDAuj0k7ZLTyrlWbbRIbDS7gPFC8NgBChrEHvdKgUE976qMKACG8obNCHMNMdAZVBoecTZhrJIdDgGPCsg184hNccfDbJBOJBMAdMgpyA8wvQQs9x5KP6C4crg3tklcStFTq8PStH7Se2n5eAIQt7C%2B3uhZA7xIHQVeBk6KDevERC5yYkzG8mFsBhIewq61a6msX2ENgK01icHZc0fHBBzOJ2EwzbMBExCycCtoO%2FAsvFBe%2BDOUrMQ8ENw9O6bQhlATQSh5BGsX%2B3gOGx%2FqFqDY%2FDjn3zhmauDaDsxEiIUQt9KZ0U0eSzSaXpCT3BM%2B15w1n%2FfhLdKiiruwV4GFQQZ0lq6Urff8%2FBBWReuersQL3YHV3JuZmiz%2FqRFN8HgxDjn4STAncoiwhMMqRvMEGOqUBGeyTrVHGcDpiWoPAwSE4pjioWxTU4cI5P9c8RCC0UaSHHnL4UUNNKB%2B8iFgjH7%2BVqNqvp7vtJAJ6OP5JyRyPFsG6JVIpguGHPX5DsJwJx4%2Fgkw6G%2FE0CgQVsaTt%2FttnkKxvHw9WzmlZ%2FVzp3vYZz0TI%2FAzqG%2BTcxMSE6RXnlC5krxm%2FgG%2Bgj0VDkZH4fBkzLu3Yu4HMb9OZklNUbWSU6QeXNkfR%2F&X-Amz-Signature=f68d19ecd99f4d9281f73ec77ea795bd25c420f44ca75f10c1e42a616e04e1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJDCLGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGMH%2BizLd4V%2FyCeoV%2FzlNPMDqvSLXTN0M0hjPDwLOe%2BRAiEAsel7RFtheffJOD36baKvm00rKZLXkM8cfEhUSmsADoEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE0lGxjxokdb6GF4ircAzY2hVnm%2BqX%2BbidB9yOCvjED%2BcGaK87H%2BZ%2FtMmsgg01hkZhCdfVeypmW6gDE8LouDvR1gH4qhdot%2FfI20qPCy4XkUGSiMkF5kQm8B4khwDig3gVLg6VXgDQoT8tUNQn1DT1PWGU6oMMR6BIKUusmaYUZ3pgirQB5YYXAVsKfWVhuMYtdwQLbGqREsad4sbs4DP3HS%2F6rG%2BBULhi7Ia1sz71r81F%2BXBPlDkspBo%2BPAKOa%2Fn3vcDAuj0k7ZLTyrlWbbRIbDS7gPFC8NgBChrEHvdKgUE976qMKACG8obNCHMNMdAZVBoecTZhrJIdDgGPCsg184hNccfDbJBOJBMAdMgpyA8wvQQs9x5KP6C4crg3tklcStFTq8PStH7Se2n5eAIQt7C%2B3uhZA7xIHQVeBk6KDevERC5yYkzG8mFsBhIewq61a6msX2ENgK01icHZc0fHBBzOJ2EwzbMBExCycCtoO%2FAsvFBe%2BDOUrMQ8ENw9O6bQhlATQSh5BGsX%2B3gOGx%2FqFqDY%2FDjn3zhmauDaDsxEiIUQt9KZ0U0eSzSaXpCT3BM%2B15w1n%2FfhLdKiiruwV4GFQQZ0lq6Urff8%2FBBWReuersQL3YHV3JuZmiz%2FqRFN8HgxDjn4STAncoiwhMMqRvMEGOqUBGeyTrVHGcDpiWoPAwSE4pjioWxTU4cI5P9c8RCC0UaSHHnL4UUNNKB%2B8iFgjH7%2BVqNqvp7vtJAJ6OP5JyRyPFsG6JVIpguGHPX5DsJwJx4%2Fgkw6G%2FE0CgQVsaTt%2FttnkKxvHw9WzmlZ%2FVzp3vYZz0TI%2FAzqG%2BTcxMSE6RXnlC5krxm%2FgG%2Bgj0VDkZH4fBkzLu3Yu4HMb9OZklNUbWSU6QeXNkfR%2F&X-Amz-Signature=4f3e230f34dd64c372fbe103fa8d68264a19f42205e716d680921b9b0ae4bb43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJDCLGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGMH%2BizLd4V%2FyCeoV%2FzlNPMDqvSLXTN0M0hjPDwLOe%2BRAiEAsel7RFtheffJOD36baKvm00rKZLXkM8cfEhUSmsADoEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE0lGxjxokdb6GF4ircAzY2hVnm%2BqX%2BbidB9yOCvjED%2BcGaK87H%2BZ%2FtMmsgg01hkZhCdfVeypmW6gDE8LouDvR1gH4qhdot%2FfI20qPCy4XkUGSiMkF5kQm8B4khwDig3gVLg6VXgDQoT8tUNQn1DT1PWGU6oMMR6BIKUusmaYUZ3pgirQB5YYXAVsKfWVhuMYtdwQLbGqREsad4sbs4DP3HS%2F6rG%2BBULhi7Ia1sz71r81F%2BXBPlDkspBo%2BPAKOa%2Fn3vcDAuj0k7ZLTyrlWbbRIbDS7gPFC8NgBChrEHvdKgUE976qMKACG8obNCHMNMdAZVBoecTZhrJIdDgGPCsg184hNccfDbJBOJBMAdMgpyA8wvQQs9x5KP6C4crg3tklcStFTq8PStH7Se2n5eAIQt7C%2B3uhZA7xIHQVeBk6KDevERC5yYkzG8mFsBhIewq61a6msX2ENgK01icHZc0fHBBzOJ2EwzbMBExCycCtoO%2FAsvFBe%2BDOUrMQ8ENw9O6bQhlATQSh5BGsX%2B3gOGx%2FqFqDY%2FDjn3zhmauDaDsxEiIUQt9KZ0U0eSzSaXpCT3BM%2B15w1n%2FfhLdKiiruwV4GFQQZ0lq6Urff8%2FBBWReuersQL3YHV3JuZmiz%2FqRFN8HgxDjn4STAncoiwhMMqRvMEGOqUBGeyTrVHGcDpiWoPAwSE4pjioWxTU4cI5P9c8RCC0UaSHHnL4UUNNKB%2B8iFgjH7%2BVqNqvp7vtJAJ6OP5JyRyPFsG6JVIpguGHPX5DsJwJx4%2Fgkw6G%2FE0CgQVsaTt%2FttnkKxvHw9WzmlZ%2FVzp3vYZz0TI%2FAzqG%2BTcxMSE6RXnlC5krxm%2FgG%2Bgj0VDkZH4fBkzLu3Yu4HMb9OZklNUbWSU6QeXNkfR%2F&X-Amz-Signature=b6f1a536f43061b6396f872551a0f95d5ea3812e72876ac9ab497e1077463427&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJDCLGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGMH%2BizLd4V%2FyCeoV%2FzlNPMDqvSLXTN0M0hjPDwLOe%2BRAiEAsel7RFtheffJOD36baKvm00rKZLXkM8cfEhUSmsADoEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE0lGxjxokdb6GF4ircAzY2hVnm%2BqX%2BbidB9yOCvjED%2BcGaK87H%2BZ%2FtMmsgg01hkZhCdfVeypmW6gDE8LouDvR1gH4qhdot%2FfI20qPCy4XkUGSiMkF5kQm8B4khwDig3gVLg6VXgDQoT8tUNQn1DT1PWGU6oMMR6BIKUusmaYUZ3pgirQB5YYXAVsKfWVhuMYtdwQLbGqREsad4sbs4DP3HS%2F6rG%2BBULhi7Ia1sz71r81F%2BXBPlDkspBo%2BPAKOa%2Fn3vcDAuj0k7ZLTyrlWbbRIbDS7gPFC8NgBChrEHvdKgUE976qMKACG8obNCHMNMdAZVBoecTZhrJIdDgGPCsg184hNccfDbJBOJBMAdMgpyA8wvQQs9x5KP6C4crg3tklcStFTq8PStH7Se2n5eAIQt7C%2B3uhZA7xIHQVeBk6KDevERC5yYkzG8mFsBhIewq61a6msX2ENgK01icHZc0fHBBzOJ2EwzbMBExCycCtoO%2FAsvFBe%2BDOUrMQ8ENw9O6bQhlATQSh5BGsX%2B3gOGx%2FqFqDY%2FDjn3zhmauDaDsxEiIUQt9KZ0U0eSzSaXpCT3BM%2B15w1n%2FfhLdKiiruwV4GFQQZ0lq6Urff8%2FBBWReuersQL3YHV3JuZmiz%2FqRFN8HgxDjn4STAncoiwhMMqRvMEGOqUBGeyTrVHGcDpiWoPAwSE4pjioWxTU4cI5P9c8RCC0UaSHHnL4UUNNKB%2B8iFgjH7%2BVqNqvp7vtJAJ6OP5JyRyPFsG6JVIpguGHPX5DsJwJx4%2Fgkw6G%2FE0CgQVsaTt%2FttnkKxvHw9WzmlZ%2FVzp3vYZz0TI%2FAzqG%2BTcxMSE6RXnlC5krxm%2FgG%2Bgj0VDkZH4fBkzLu3Yu4HMb9OZklNUbWSU6QeXNkfR%2F&X-Amz-Signature=738fbc845ba460f063899491e0c142d74c23a6d2c1ba3e570ded4a8f0e5559b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJDCLGB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGMH%2BizLd4V%2FyCeoV%2FzlNPMDqvSLXTN0M0hjPDwLOe%2BRAiEAsel7RFtheffJOD36baKvm00rKZLXkM8cfEhUSmsADoEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGE0lGxjxokdb6GF4ircAzY2hVnm%2BqX%2BbidB9yOCvjED%2BcGaK87H%2BZ%2FtMmsgg01hkZhCdfVeypmW6gDE8LouDvR1gH4qhdot%2FfI20qPCy4XkUGSiMkF5kQm8B4khwDig3gVLg6VXgDQoT8tUNQn1DT1PWGU6oMMR6BIKUusmaYUZ3pgirQB5YYXAVsKfWVhuMYtdwQLbGqREsad4sbs4DP3HS%2F6rG%2BBULhi7Ia1sz71r81F%2BXBPlDkspBo%2BPAKOa%2Fn3vcDAuj0k7ZLTyrlWbbRIbDS7gPFC8NgBChrEHvdKgUE976qMKACG8obNCHMNMdAZVBoecTZhrJIdDgGPCsg184hNccfDbJBOJBMAdMgpyA8wvQQs9x5KP6C4crg3tklcStFTq8PStH7Se2n5eAIQt7C%2B3uhZA7xIHQVeBk6KDevERC5yYkzG8mFsBhIewq61a6msX2ENgK01icHZc0fHBBzOJ2EwzbMBExCycCtoO%2FAsvFBe%2BDOUrMQ8ENw9O6bQhlATQSh5BGsX%2B3gOGx%2FqFqDY%2FDjn3zhmauDaDsxEiIUQt9KZ0U0eSzSaXpCT3BM%2B15w1n%2FfhLdKiiruwV4GFQQZ0lq6Urff8%2FBBWReuersQL3YHV3JuZmiz%2FqRFN8HgxDjn4STAncoiwhMMqRvMEGOqUBGeyTrVHGcDpiWoPAwSE4pjioWxTU4cI5P9c8RCC0UaSHHnL4UUNNKB%2B8iFgjH7%2BVqNqvp7vtJAJ6OP5JyRyPFsG6JVIpguGHPX5DsJwJx4%2Fgkw6G%2FE0CgQVsaTt%2FttnkKxvHw9WzmlZ%2FVzp3vYZz0TI%2FAzqG%2BTcxMSE6RXnlC5krxm%2FgG%2Bgj0VDkZH4fBkzLu3Yu4HMb9OZklNUbWSU6QeXNkfR%2F&X-Amz-Signature=8977d8a1b362ca6b9d77e72fa5cd82f8fc1c07d37cfe6e61c1be5acab250c6b5&X-Amz-SignedHeaders=host&x-id=GetObject)
