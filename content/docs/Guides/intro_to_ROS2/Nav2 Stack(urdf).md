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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBOHM7O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtYkr8%2BGnrRWmUbcxHe9ozOU8c%2BjKhO2OhCz5HH0xaRAiB0TTtAgMfmOa2oIRdN4v3nReBB1PnPiAkIhNOCqcfBQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMch7ptp0SrqbyG6uBKtwDrz%2FWl%2BkgipLVRdzfTPHMn2tYYovoOZywt6ysEHGh2EB1Wl6dXIlVtqN%2B%2F6Hccudpd%2BPXjQVLOeo3gFcJru5XYM1hHlWumID%2FjOu3Q6FAbWqkNQd05b4cS8K%2BLBV9CMHNYqVV7REHJdusSntErvTEyLITvvAQgcxG%2F5I1U4qjtmFaNYjIfFml01VpQFVpR4ZN12m8ffvWTPNT6U3sF3OZoADbBBszaJ1cBpyxJGq2FtNIsi9YiiUoWitUfygQnCvqvUEA6orSRPk6pXXP3W5KH9OMbkvaCyj2jQTiZJ0RAVoXp2EKbRuRfARI8k5ZZGP%2BluM0VxvSvx0jyYllq6Lt1hILVbaIAo0GbQAF%2BYVfGRwxSi9E5egPsMkX1w541rZeFjFjM7dhjMHVYYz1sP%2F0Tah2rC3J50CRH2qeG6qRbTVu19RtyvLVSpSclvj7YF2nOJqQOk7XK8b4i7GEg2tbkPijGDSOqLK6fop3IckK2Jg2ZMRO%2F%2BJdZnLKq%2FbIWNdsd098AnhfuZNIr4iRDLriD7LeCjCsr7PqcOH%2BNjtn9eruJxjFgf8Z%2FBir1ACgHHyfF%2BNcoAZ%2F2TdKK2alddfqL3zE4kT0EGAXknflmKk8Bdar4gCxG0sNuHua16EwgvuWvQY6pgEdYUgSXHv%2BqRVrB055G3EJpcZhpxWfFq39AD8PlO%2B%2BV40YIrztLv6QWOgjCsZtmDa5ZFOqb1boO%2Fskhm3qgxSbEL2A07SzufoAKp9MHm3fwenp2gAW3NwMLXdGrsBIG1bWiOf5IoIVQw7Bo3ojgRSJKcLUY5lHaMIYVoFwDj5X1uu5XflmIlyzWfn%2Fg9C6NaJhjEtYu9ZhG5M2wvMSDj51%2ByY%2B4xU4&X-Amz-Signature=f69249336cedcd4a0dd0926137652d64884436141e09f01965830a3e58f96d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBOHM7O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtYkr8%2BGnrRWmUbcxHe9ozOU8c%2BjKhO2OhCz5HH0xaRAiB0TTtAgMfmOa2oIRdN4v3nReBB1PnPiAkIhNOCqcfBQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMch7ptp0SrqbyG6uBKtwDrz%2FWl%2BkgipLVRdzfTPHMn2tYYovoOZywt6ysEHGh2EB1Wl6dXIlVtqN%2B%2F6Hccudpd%2BPXjQVLOeo3gFcJru5XYM1hHlWumID%2FjOu3Q6FAbWqkNQd05b4cS8K%2BLBV9CMHNYqVV7REHJdusSntErvTEyLITvvAQgcxG%2F5I1U4qjtmFaNYjIfFml01VpQFVpR4ZN12m8ffvWTPNT6U3sF3OZoADbBBszaJ1cBpyxJGq2FtNIsi9YiiUoWitUfygQnCvqvUEA6orSRPk6pXXP3W5KH9OMbkvaCyj2jQTiZJ0RAVoXp2EKbRuRfARI8k5ZZGP%2BluM0VxvSvx0jyYllq6Lt1hILVbaIAo0GbQAF%2BYVfGRwxSi9E5egPsMkX1w541rZeFjFjM7dhjMHVYYz1sP%2F0Tah2rC3J50CRH2qeG6qRbTVu19RtyvLVSpSclvj7YF2nOJqQOk7XK8b4i7GEg2tbkPijGDSOqLK6fop3IckK2Jg2ZMRO%2F%2BJdZnLKq%2FbIWNdsd098AnhfuZNIr4iRDLriD7LeCjCsr7PqcOH%2BNjtn9eruJxjFgf8Z%2FBir1ACgHHyfF%2BNcoAZ%2F2TdKK2alddfqL3zE4kT0EGAXknflmKk8Bdar4gCxG0sNuHua16EwgvuWvQY6pgEdYUgSXHv%2BqRVrB055G3EJpcZhpxWfFq39AD8PlO%2B%2BV40YIrztLv6QWOgjCsZtmDa5ZFOqb1boO%2Fskhm3qgxSbEL2A07SzufoAKp9MHm3fwenp2gAW3NwMLXdGrsBIG1bWiOf5IoIVQw7Bo3ojgRSJKcLUY5lHaMIYVoFwDj5X1uu5XflmIlyzWfn%2Fg9C6NaJhjEtYu9ZhG5M2wvMSDj51%2ByY%2B4xU4&X-Amz-Signature=5b055ceacec200a9398c25b2d248abd4130306a1900aed6a220afe98aab9a39f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBOHM7O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtYkr8%2BGnrRWmUbcxHe9ozOU8c%2BjKhO2OhCz5HH0xaRAiB0TTtAgMfmOa2oIRdN4v3nReBB1PnPiAkIhNOCqcfBQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMch7ptp0SrqbyG6uBKtwDrz%2FWl%2BkgipLVRdzfTPHMn2tYYovoOZywt6ysEHGh2EB1Wl6dXIlVtqN%2B%2F6Hccudpd%2BPXjQVLOeo3gFcJru5XYM1hHlWumID%2FjOu3Q6FAbWqkNQd05b4cS8K%2BLBV9CMHNYqVV7REHJdusSntErvTEyLITvvAQgcxG%2F5I1U4qjtmFaNYjIfFml01VpQFVpR4ZN12m8ffvWTPNT6U3sF3OZoADbBBszaJ1cBpyxJGq2FtNIsi9YiiUoWitUfygQnCvqvUEA6orSRPk6pXXP3W5KH9OMbkvaCyj2jQTiZJ0RAVoXp2EKbRuRfARI8k5ZZGP%2BluM0VxvSvx0jyYllq6Lt1hILVbaIAo0GbQAF%2BYVfGRwxSi9E5egPsMkX1w541rZeFjFjM7dhjMHVYYz1sP%2F0Tah2rC3J50CRH2qeG6qRbTVu19RtyvLVSpSclvj7YF2nOJqQOk7XK8b4i7GEg2tbkPijGDSOqLK6fop3IckK2Jg2ZMRO%2F%2BJdZnLKq%2FbIWNdsd098AnhfuZNIr4iRDLriD7LeCjCsr7PqcOH%2BNjtn9eruJxjFgf8Z%2FBir1ACgHHyfF%2BNcoAZ%2F2TdKK2alddfqL3zE4kT0EGAXknflmKk8Bdar4gCxG0sNuHua16EwgvuWvQY6pgEdYUgSXHv%2BqRVrB055G3EJpcZhpxWfFq39AD8PlO%2B%2BV40YIrztLv6QWOgjCsZtmDa5ZFOqb1boO%2Fskhm3qgxSbEL2A07SzufoAKp9MHm3fwenp2gAW3NwMLXdGrsBIG1bWiOf5IoIVQw7Bo3ojgRSJKcLUY5lHaMIYVoFwDj5X1uu5XflmIlyzWfn%2Fg9C6NaJhjEtYu9ZhG5M2wvMSDj51%2ByY%2B4xU4&X-Amz-Signature=dfb02679680e3a2aa4e5a11eb115676cb8f7ecca30dc36fa0fec76b211244f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBOHM7O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtYkr8%2BGnrRWmUbcxHe9ozOU8c%2BjKhO2OhCz5HH0xaRAiB0TTtAgMfmOa2oIRdN4v3nReBB1PnPiAkIhNOCqcfBQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMch7ptp0SrqbyG6uBKtwDrz%2FWl%2BkgipLVRdzfTPHMn2tYYovoOZywt6ysEHGh2EB1Wl6dXIlVtqN%2B%2F6Hccudpd%2BPXjQVLOeo3gFcJru5XYM1hHlWumID%2FjOu3Q6FAbWqkNQd05b4cS8K%2BLBV9CMHNYqVV7REHJdusSntErvTEyLITvvAQgcxG%2F5I1U4qjtmFaNYjIfFml01VpQFVpR4ZN12m8ffvWTPNT6U3sF3OZoADbBBszaJ1cBpyxJGq2FtNIsi9YiiUoWitUfygQnCvqvUEA6orSRPk6pXXP3W5KH9OMbkvaCyj2jQTiZJ0RAVoXp2EKbRuRfARI8k5ZZGP%2BluM0VxvSvx0jyYllq6Lt1hILVbaIAo0GbQAF%2BYVfGRwxSi9E5egPsMkX1w541rZeFjFjM7dhjMHVYYz1sP%2F0Tah2rC3J50CRH2qeG6qRbTVu19RtyvLVSpSclvj7YF2nOJqQOk7XK8b4i7GEg2tbkPijGDSOqLK6fop3IckK2Jg2ZMRO%2F%2BJdZnLKq%2FbIWNdsd098AnhfuZNIr4iRDLriD7LeCjCsr7PqcOH%2BNjtn9eruJxjFgf8Z%2FBir1ACgHHyfF%2BNcoAZ%2F2TdKK2alddfqL3zE4kT0EGAXknflmKk8Bdar4gCxG0sNuHua16EwgvuWvQY6pgEdYUgSXHv%2BqRVrB055G3EJpcZhpxWfFq39AD8PlO%2B%2BV40YIrztLv6QWOgjCsZtmDa5ZFOqb1boO%2Fskhm3qgxSbEL2A07SzufoAKp9MHm3fwenp2gAW3NwMLXdGrsBIG1bWiOf5IoIVQw7Bo3ojgRSJKcLUY5lHaMIYVoFwDj5X1uu5XflmIlyzWfn%2Fg9C6NaJhjEtYu9ZhG5M2wvMSDj51%2ByY%2B4xU4&X-Amz-Signature=33adb5fe332734843fe249e5b6a4f015ef774a4734a2013413378969a532f2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBOHM7O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtYkr8%2BGnrRWmUbcxHe9ozOU8c%2BjKhO2OhCz5HH0xaRAiB0TTtAgMfmOa2oIRdN4v3nReBB1PnPiAkIhNOCqcfBQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMch7ptp0SrqbyG6uBKtwDrz%2FWl%2BkgipLVRdzfTPHMn2tYYovoOZywt6ysEHGh2EB1Wl6dXIlVtqN%2B%2F6Hccudpd%2BPXjQVLOeo3gFcJru5XYM1hHlWumID%2FjOu3Q6FAbWqkNQd05b4cS8K%2BLBV9CMHNYqVV7REHJdusSntErvTEyLITvvAQgcxG%2F5I1U4qjtmFaNYjIfFml01VpQFVpR4ZN12m8ffvWTPNT6U3sF3OZoADbBBszaJ1cBpyxJGq2FtNIsi9YiiUoWitUfygQnCvqvUEA6orSRPk6pXXP3W5KH9OMbkvaCyj2jQTiZJ0RAVoXp2EKbRuRfARI8k5ZZGP%2BluM0VxvSvx0jyYllq6Lt1hILVbaIAo0GbQAF%2BYVfGRwxSi9E5egPsMkX1w541rZeFjFjM7dhjMHVYYz1sP%2F0Tah2rC3J50CRH2qeG6qRbTVu19RtyvLVSpSclvj7YF2nOJqQOk7XK8b4i7GEg2tbkPijGDSOqLK6fop3IckK2Jg2ZMRO%2F%2BJdZnLKq%2FbIWNdsd098AnhfuZNIr4iRDLriD7LeCjCsr7PqcOH%2BNjtn9eruJxjFgf8Z%2FBir1ACgHHyfF%2BNcoAZ%2F2TdKK2alddfqL3zE4kT0EGAXknflmKk8Bdar4gCxG0sNuHua16EwgvuWvQY6pgEdYUgSXHv%2BqRVrB055G3EJpcZhpxWfFq39AD8PlO%2B%2BV40YIrztLv6QWOgjCsZtmDa5ZFOqb1boO%2Fskhm3qgxSbEL2A07SzufoAKp9MHm3fwenp2gAW3NwMLXdGrsBIG1bWiOf5IoIVQw7Bo3ojgRSJKcLUY5lHaMIYVoFwDj5X1uu5XflmIlyzWfn%2Fg9C6NaJhjEtYu9ZhG5M2wvMSDj51%2ByY%2B4xU4&X-Amz-Signature=45310996a9316bdc00581029ef373d7fcd7a1e63e5fed34e50dd54fd4fc51ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGBOHM7O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtYkr8%2BGnrRWmUbcxHe9ozOU8c%2BjKhO2OhCz5HH0xaRAiB0TTtAgMfmOa2oIRdN4v3nReBB1PnPiAkIhNOCqcfBQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMch7ptp0SrqbyG6uBKtwDrz%2FWl%2BkgipLVRdzfTPHMn2tYYovoOZywt6ysEHGh2EB1Wl6dXIlVtqN%2B%2F6Hccudpd%2BPXjQVLOeo3gFcJru5XYM1hHlWumID%2FjOu3Q6FAbWqkNQd05b4cS8K%2BLBV9CMHNYqVV7REHJdusSntErvTEyLITvvAQgcxG%2F5I1U4qjtmFaNYjIfFml01VpQFVpR4ZN12m8ffvWTPNT6U3sF3OZoADbBBszaJ1cBpyxJGq2FtNIsi9YiiUoWitUfygQnCvqvUEA6orSRPk6pXXP3W5KH9OMbkvaCyj2jQTiZJ0RAVoXp2EKbRuRfARI8k5ZZGP%2BluM0VxvSvx0jyYllq6Lt1hILVbaIAo0GbQAF%2BYVfGRwxSi9E5egPsMkX1w541rZeFjFjM7dhjMHVYYz1sP%2F0Tah2rC3J50CRH2qeG6qRbTVu19RtyvLVSpSclvj7YF2nOJqQOk7XK8b4i7GEg2tbkPijGDSOqLK6fop3IckK2Jg2ZMRO%2F%2BJdZnLKq%2FbIWNdsd098AnhfuZNIr4iRDLriD7LeCjCsr7PqcOH%2BNjtn9eruJxjFgf8Z%2FBir1ACgHHyfF%2BNcoAZ%2F2TdKK2alddfqL3zE4kT0EGAXknflmKk8Bdar4gCxG0sNuHua16EwgvuWvQY6pgEdYUgSXHv%2BqRVrB055G3EJpcZhpxWfFq39AD8PlO%2B%2BV40YIrztLv6QWOgjCsZtmDa5ZFOqb1boO%2Fskhm3qgxSbEL2A07SzufoAKp9MHm3fwenp2gAW3NwMLXdGrsBIG1bWiOf5IoIVQw7Bo3ojgRSJKcLUY5lHaMIYVoFwDj5X1uu5XflmIlyzWfn%2Fg9C6NaJhjEtYu9ZhG5M2wvMSDj51%2ByY%2B4xU4&X-Amz-Signature=6d4d538e5e07e1ea43e3a3a80efbf749ded326c1dc8ff39f1edaf2323fbcd151&X-Amz-SignedHeaders=host&x-id=GetObject)
