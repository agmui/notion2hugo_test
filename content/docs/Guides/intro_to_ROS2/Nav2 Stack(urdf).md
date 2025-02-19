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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPVAMM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB29MeqLyB%2FTPI4z3xkk5Qt8%2B2%2B7rTOLMn9WEL4yfUhJAiEA5C9Sg%2FcT5zjwH2sdzACpvWpUCKg0mCnXiWTscSVz8fsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FVBa8Og20GHVmLuyrcA4OmQgKD2FIduXXmzjssEOb7BPU%2BYyUTw5fo9q%2BnWEc8IHJsJ6ayD7x96MAzXY%2B736FmU6wdp8cfXZM%2BsUvj%2Fe%2FZH9bJEgnyOE0pFnki6UvvGuTFCVw2mbMwYPy%2FoCfCxYU2DB92h1qYUzWULGMtghk%2FD8Chlq9E0IdJsHmkzvPWQAONzRi%2FrTZaHHtSihucuEiBpZvajrnwJCOWS1Du66X47ky4b56KzB431t19mXLRCAf%2F2i99RMEW4V1EfIXoO4Osg%2BvOQxYRHILAi%2FqYDQb58jy6VnV8U4afjPjOH8vMmWwQz2J3uksE5IvxDn7JBjvvbmDvwVbWZgpgIJHwe%2BCQF3Nd3PRCk1JwTRLarS%2BHPlBH6mFs3kf9EwD1%2BUST4LJxvNmZIWTHGGK7JMIbXm9IORnwousnypXqkkCC8Ukd6g4bjtoHwfnOXlZlVT7S7U4k7gdQQuEnyMSfcw2duXheagVnSwp%2B15PA19UNiBXBmO1svCfv3Zq0gFmPrVeoaP6j2FL1LM1F22UxXXYf2rA5fq5k4FOYaT1iwiVDIoC4eBmKmLQHdL24IyocaXeoQwXRea5l41lyDA0%2B1LTwR7%2FPxByjKojZNt8HIOMPA%2FMG3rwzWM%2FNlF67R1NSMP761r0GOqUBGZfqCOdMNvXIUOEzPGPiGlOtAVkAJFMzveLHbhCN3oXxGsELvM87ZpC8CstbrPdSOxTmiXkFjpYWUpUMkhJHIyaq%2ByeafZi0BA3D4q%2FQ7Jj2Bbu9%2FOdkTfepLtz3oRyDTo%2BLdvq%2BVnn0uokUCd%2BDh9oBQxkPPkVwnKsLDSlYFxcf27C%2FPlRHGiAHAAJ3T04UFzPvqZCZR6aHnE7oSaZ5VHEqOYhS&X-Amz-Signature=7418ca6d68fe84b6773341c3bd2192dbb65bd2323f4e31a873778aa55bff91d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPVAMM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB29MeqLyB%2FTPI4z3xkk5Qt8%2B2%2B7rTOLMn9WEL4yfUhJAiEA5C9Sg%2FcT5zjwH2sdzACpvWpUCKg0mCnXiWTscSVz8fsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FVBa8Og20GHVmLuyrcA4OmQgKD2FIduXXmzjssEOb7BPU%2BYyUTw5fo9q%2BnWEc8IHJsJ6ayD7x96MAzXY%2B736FmU6wdp8cfXZM%2BsUvj%2Fe%2FZH9bJEgnyOE0pFnki6UvvGuTFCVw2mbMwYPy%2FoCfCxYU2DB92h1qYUzWULGMtghk%2FD8Chlq9E0IdJsHmkzvPWQAONzRi%2FrTZaHHtSihucuEiBpZvajrnwJCOWS1Du66X47ky4b56KzB431t19mXLRCAf%2F2i99RMEW4V1EfIXoO4Osg%2BvOQxYRHILAi%2FqYDQb58jy6VnV8U4afjPjOH8vMmWwQz2J3uksE5IvxDn7JBjvvbmDvwVbWZgpgIJHwe%2BCQF3Nd3PRCk1JwTRLarS%2BHPlBH6mFs3kf9EwD1%2BUST4LJxvNmZIWTHGGK7JMIbXm9IORnwousnypXqkkCC8Ukd6g4bjtoHwfnOXlZlVT7S7U4k7gdQQuEnyMSfcw2duXheagVnSwp%2B15PA19UNiBXBmO1svCfv3Zq0gFmPrVeoaP6j2FL1LM1F22UxXXYf2rA5fq5k4FOYaT1iwiVDIoC4eBmKmLQHdL24IyocaXeoQwXRea5l41lyDA0%2B1LTwR7%2FPxByjKojZNt8HIOMPA%2FMG3rwzWM%2FNlF67R1NSMP761r0GOqUBGZfqCOdMNvXIUOEzPGPiGlOtAVkAJFMzveLHbhCN3oXxGsELvM87ZpC8CstbrPdSOxTmiXkFjpYWUpUMkhJHIyaq%2ByeafZi0BA3D4q%2FQ7Jj2Bbu9%2FOdkTfepLtz3oRyDTo%2BLdvq%2BVnn0uokUCd%2BDh9oBQxkPPkVwnKsLDSlYFxcf27C%2FPlRHGiAHAAJ3T04UFzPvqZCZR6aHnE7oSaZ5VHEqOYhS&X-Amz-Signature=e5f932c7cc2e235b1a1d2725cdd49755dda6eea23c211eb99c87b127f0ce95cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPVAMM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB29MeqLyB%2FTPI4z3xkk5Qt8%2B2%2B7rTOLMn9WEL4yfUhJAiEA5C9Sg%2FcT5zjwH2sdzACpvWpUCKg0mCnXiWTscSVz8fsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FVBa8Og20GHVmLuyrcA4OmQgKD2FIduXXmzjssEOb7BPU%2BYyUTw5fo9q%2BnWEc8IHJsJ6ayD7x96MAzXY%2B736FmU6wdp8cfXZM%2BsUvj%2Fe%2FZH9bJEgnyOE0pFnki6UvvGuTFCVw2mbMwYPy%2FoCfCxYU2DB92h1qYUzWULGMtghk%2FD8Chlq9E0IdJsHmkzvPWQAONzRi%2FrTZaHHtSihucuEiBpZvajrnwJCOWS1Du66X47ky4b56KzB431t19mXLRCAf%2F2i99RMEW4V1EfIXoO4Osg%2BvOQxYRHILAi%2FqYDQb58jy6VnV8U4afjPjOH8vMmWwQz2J3uksE5IvxDn7JBjvvbmDvwVbWZgpgIJHwe%2BCQF3Nd3PRCk1JwTRLarS%2BHPlBH6mFs3kf9EwD1%2BUST4LJxvNmZIWTHGGK7JMIbXm9IORnwousnypXqkkCC8Ukd6g4bjtoHwfnOXlZlVT7S7U4k7gdQQuEnyMSfcw2duXheagVnSwp%2B15PA19UNiBXBmO1svCfv3Zq0gFmPrVeoaP6j2FL1LM1F22UxXXYf2rA5fq5k4FOYaT1iwiVDIoC4eBmKmLQHdL24IyocaXeoQwXRea5l41lyDA0%2B1LTwR7%2FPxByjKojZNt8HIOMPA%2FMG3rwzWM%2FNlF67R1NSMP761r0GOqUBGZfqCOdMNvXIUOEzPGPiGlOtAVkAJFMzveLHbhCN3oXxGsELvM87ZpC8CstbrPdSOxTmiXkFjpYWUpUMkhJHIyaq%2ByeafZi0BA3D4q%2FQ7Jj2Bbu9%2FOdkTfepLtz3oRyDTo%2BLdvq%2BVnn0uokUCd%2BDh9oBQxkPPkVwnKsLDSlYFxcf27C%2FPlRHGiAHAAJ3T04UFzPvqZCZR6aHnE7oSaZ5VHEqOYhS&X-Amz-Signature=e01ec52fb547f76a42b3a02e1efabfec8ff8111e2002e2759dd646b3ebc56e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPVAMM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB29MeqLyB%2FTPI4z3xkk5Qt8%2B2%2B7rTOLMn9WEL4yfUhJAiEA5C9Sg%2FcT5zjwH2sdzACpvWpUCKg0mCnXiWTscSVz8fsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FVBa8Og20GHVmLuyrcA4OmQgKD2FIduXXmzjssEOb7BPU%2BYyUTw5fo9q%2BnWEc8IHJsJ6ayD7x96MAzXY%2B736FmU6wdp8cfXZM%2BsUvj%2Fe%2FZH9bJEgnyOE0pFnki6UvvGuTFCVw2mbMwYPy%2FoCfCxYU2DB92h1qYUzWULGMtghk%2FD8Chlq9E0IdJsHmkzvPWQAONzRi%2FrTZaHHtSihucuEiBpZvajrnwJCOWS1Du66X47ky4b56KzB431t19mXLRCAf%2F2i99RMEW4V1EfIXoO4Osg%2BvOQxYRHILAi%2FqYDQb58jy6VnV8U4afjPjOH8vMmWwQz2J3uksE5IvxDn7JBjvvbmDvwVbWZgpgIJHwe%2BCQF3Nd3PRCk1JwTRLarS%2BHPlBH6mFs3kf9EwD1%2BUST4LJxvNmZIWTHGGK7JMIbXm9IORnwousnypXqkkCC8Ukd6g4bjtoHwfnOXlZlVT7S7U4k7gdQQuEnyMSfcw2duXheagVnSwp%2B15PA19UNiBXBmO1svCfv3Zq0gFmPrVeoaP6j2FL1LM1F22UxXXYf2rA5fq5k4FOYaT1iwiVDIoC4eBmKmLQHdL24IyocaXeoQwXRea5l41lyDA0%2B1LTwR7%2FPxByjKojZNt8HIOMPA%2FMG3rwzWM%2FNlF67R1NSMP761r0GOqUBGZfqCOdMNvXIUOEzPGPiGlOtAVkAJFMzveLHbhCN3oXxGsELvM87ZpC8CstbrPdSOxTmiXkFjpYWUpUMkhJHIyaq%2ByeafZi0BA3D4q%2FQ7Jj2Bbu9%2FOdkTfepLtz3oRyDTo%2BLdvq%2BVnn0uokUCd%2BDh9oBQxkPPkVwnKsLDSlYFxcf27C%2FPlRHGiAHAAJ3T04UFzPvqZCZR6aHnE7oSaZ5VHEqOYhS&X-Amz-Signature=bf806215a0d53f7741df0286f185963c6ed946cdf958ba82fd325f435bbe9a33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPVAMM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB29MeqLyB%2FTPI4z3xkk5Qt8%2B2%2B7rTOLMn9WEL4yfUhJAiEA5C9Sg%2FcT5zjwH2sdzACpvWpUCKg0mCnXiWTscSVz8fsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FVBa8Og20GHVmLuyrcA4OmQgKD2FIduXXmzjssEOb7BPU%2BYyUTw5fo9q%2BnWEc8IHJsJ6ayD7x96MAzXY%2B736FmU6wdp8cfXZM%2BsUvj%2Fe%2FZH9bJEgnyOE0pFnki6UvvGuTFCVw2mbMwYPy%2FoCfCxYU2DB92h1qYUzWULGMtghk%2FD8Chlq9E0IdJsHmkzvPWQAONzRi%2FrTZaHHtSihucuEiBpZvajrnwJCOWS1Du66X47ky4b56KzB431t19mXLRCAf%2F2i99RMEW4V1EfIXoO4Osg%2BvOQxYRHILAi%2FqYDQb58jy6VnV8U4afjPjOH8vMmWwQz2J3uksE5IvxDn7JBjvvbmDvwVbWZgpgIJHwe%2BCQF3Nd3PRCk1JwTRLarS%2BHPlBH6mFs3kf9EwD1%2BUST4LJxvNmZIWTHGGK7JMIbXm9IORnwousnypXqkkCC8Ukd6g4bjtoHwfnOXlZlVT7S7U4k7gdQQuEnyMSfcw2duXheagVnSwp%2B15PA19UNiBXBmO1svCfv3Zq0gFmPrVeoaP6j2FL1LM1F22UxXXYf2rA5fq5k4FOYaT1iwiVDIoC4eBmKmLQHdL24IyocaXeoQwXRea5l41lyDA0%2B1LTwR7%2FPxByjKojZNt8HIOMPA%2FMG3rwzWM%2FNlF67R1NSMP761r0GOqUBGZfqCOdMNvXIUOEzPGPiGlOtAVkAJFMzveLHbhCN3oXxGsELvM87ZpC8CstbrPdSOxTmiXkFjpYWUpUMkhJHIyaq%2ByeafZi0BA3D4q%2FQ7Jj2Bbu9%2FOdkTfepLtz3oRyDTo%2BLdvq%2BVnn0uokUCd%2BDh9oBQxkPPkVwnKsLDSlYFxcf27C%2FPlRHGiAHAAJ3T04UFzPvqZCZR6aHnE7oSaZ5VHEqOYhS&X-Amz-Signature=7664f46c48d60bcdd90dd5b7b5204b2d91a7124d0a24d7a193b1b6a72b40d740&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLPVAMM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB29MeqLyB%2FTPI4z3xkk5Qt8%2B2%2B7rTOLMn9WEL4yfUhJAiEA5C9Sg%2FcT5zjwH2sdzACpvWpUCKg0mCnXiWTscSVz8fsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FVBa8Og20GHVmLuyrcA4OmQgKD2FIduXXmzjssEOb7BPU%2BYyUTw5fo9q%2BnWEc8IHJsJ6ayD7x96MAzXY%2B736FmU6wdp8cfXZM%2BsUvj%2Fe%2FZH9bJEgnyOE0pFnki6UvvGuTFCVw2mbMwYPy%2FoCfCxYU2DB92h1qYUzWULGMtghk%2FD8Chlq9E0IdJsHmkzvPWQAONzRi%2FrTZaHHtSihucuEiBpZvajrnwJCOWS1Du66X47ky4b56KzB431t19mXLRCAf%2F2i99RMEW4V1EfIXoO4Osg%2BvOQxYRHILAi%2FqYDQb58jy6VnV8U4afjPjOH8vMmWwQz2J3uksE5IvxDn7JBjvvbmDvwVbWZgpgIJHwe%2BCQF3Nd3PRCk1JwTRLarS%2BHPlBH6mFs3kf9EwD1%2BUST4LJxvNmZIWTHGGK7JMIbXm9IORnwousnypXqkkCC8Ukd6g4bjtoHwfnOXlZlVT7S7U4k7gdQQuEnyMSfcw2duXheagVnSwp%2B15PA19UNiBXBmO1svCfv3Zq0gFmPrVeoaP6j2FL1LM1F22UxXXYf2rA5fq5k4FOYaT1iwiVDIoC4eBmKmLQHdL24IyocaXeoQwXRea5l41lyDA0%2B1LTwR7%2FPxByjKojZNt8HIOMPA%2FMG3rwzWM%2FNlF67R1NSMP761r0GOqUBGZfqCOdMNvXIUOEzPGPiGlOtAVkAJFMzveLHbhCN3oXxGsELvM87ZpC8CstbrPdSOxTmiXkFjpYWUpUMkhJHIyaq%2ByeafZi0BA3D4q%2FQ7Jj2Bbu9%2FOdkTfepLtz3oRyDTo%2BLdvq%2BVnn0uokUCd%2BDh9oBQxkPPkVwnKsLDSlYFxcf27C%2FPlRHGiAHAAJ3T04UFzPvqZCZR6aHnE7oSaZ5VHEqOYhS&X-Amz-Signature=2a488d86b2fe23c06dfd1f8be95748a543f90bc315c1b7467a4fb829c3a9627f&X-Amz-SignedHeaders=host&x-id=GetObject)
