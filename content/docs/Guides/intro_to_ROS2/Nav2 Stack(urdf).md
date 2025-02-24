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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVLNV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBybvhHd5zU2n%2BUTFI4ZQT505Ill7t9AkA0Py0yL8zpcAiEAii%2B9kf%2BipogOLUhKKhey1GSmvftfbsA%2BvgivjfTvzK0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4H53chySMmN1B7gSrcA%2FYJ1NSzFPT0nIquiHAqiFlsNMcvivZDgWAGu5Y1BlD8OVJNo1oB3zKNJplfmBg%2BRpsqkB8pxPkO%2BhCYfsSBHsOl5RHPIvyEhAoC2c%2FH%2BZ076RxOXRzoVvTTqkyVS0qj7oyVb79PqlcLmY5LVdve8BMQFBKnxR57sSf8iYcUESdYM7pmZV8oj8CkiIKRoQK6UaLzsWcBe7jNf7RwwD%2B9ed0CWilVhfU8YHCvO%2FdaHZgPEh2o89lc%2BgAvbUJch%2F6gEQ24HPU%2FuE3Kp5IsiCsZWBN0Fb49sIRLtnUQJ6a8EkL0N3aJnX2mvFBtS%2FhV3wVObgcmBncaJVpqyTZCwTJ7%2FspwumxzYify70mx%2FPCLXdNthYqdpBqEfh4NfyP21dbI7W0FPwB8LCcRM9akaNpQH%2B3u%2FV9wQXh21y6DZdpakUBCobIbXK3MDLBxl1qFMAjXVdSZgsKdZOd9c%2F8r3FjIZNnnMmh7cZNekT5FgJ6ICxXYw8fu8wyabN6fUnqj2ozCcCNGb%2FjG5eWKe9Cpu7R7wHyeGXnjf%2B2e%2FoxWBnEAJaI7rzCwk80iS8ZPedBIUvXBA1TKZjSa2JEgb4N8XNcRmulSZ0p3Cs1qPkxNLv%2BQxFLAhyQsN1E2ljQk%2BjJbMK688r0GOqUB62fZ5POPhn76kylWRc1SnIES5zIxLK%2FX75ElzahNbfH9ykpODvyReA5i5G5WwxxoHfgx7OqE0fVOp6Z%2Bi0aernGL9Y2iYASrbudRdGIP71NZGe%2BHJusqOixUOV%2BTgjg6F%2BmbdfHZoGyE9Etljh14apPEWuARV8QzXUwdud%2F7hReJKPGMbgGo22gOxXT0nICRXBsLdCZ6O4s%2FqM1KhxtiNlbHuuZE&X-Amz-Signature=df8c75568c5f0dae2de08241f33384488646a674137048c8e9da9d16111b1c75&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVLNV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBybvhHd5zU2n%2BUTFI4ZQT505Ill7t9AkA0Py0yL8zpcAiEAii%2B9kf%2BipogOLUhKKhey1GSmvftfbsA%2BvgivjfTvzK0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4H53chySMmN1B7gSrcA%2FYJ1NSzFPT0nIquiHAqiFlsNMcvivZDgWAGu5Y1BlD8OVJNo1oB3zKNJplfmBg%2BRpsqkB8pxPkO%2BhCYfsSBHsOl5RHPIvyEhAoC2c%2FH%2BZ076RxOXRzoVvTTqkyVS0qj7oyVb79PqlcLmY5LVdve8BMQFBKnxR57sSf8iYcUESdYM7pmZV8oj8CkiIKRoQK6UaLzsWcBe7jNf7RwwD%2B9ed0CWilVhfU8YHCvO%2FdaHZgPEh2o89lc%2BgAvbUJch%2F6gEQ24HPU%2FuE3Kp5IsiCsZWBN0Fb49sIRLtnUQJ6a8EkL0N3aJnX2mvFBtS%2FhV3wVObgcmBncaJVpqyTZCwTJ7%2FspwumxzYify70mx%2FPCLXdNthYqdpBqEfh4NfyP21dbI7W0FPwB8LCcRM9akaNpQH%2B3u%2FV9wQXh21y6DZdpakUBCobIbXK3MDLBxl1qFMAjXVdSZgsKdZOd9c%2F8r3FjIZNnnMmh7cZNekT5FgJ6ICxXYw8fu8wyabN6fUnqj2ozCcCNGb%2FjG5eWKe9Cpu7R7wHyeGXnjf%2B2e%2FoxWBnEAJaI7rzCwk80iS8ZPedBIUvXBA1TKZjSa2JEgb4N8XNcRmulSZ0p3Cs1qPkxNLv%2BQxFLAhyQsN1E2ljQk%2BjJbMK688r0GOqUB62fZ5POPhn76kylWRc1SnIES5zIxLK%2FX75ElzahNbfH9ykpODvyReA5i5G5WwxxoHfgx7OqE0fVOp6Z%2Bi0aernGL9Y2iYASrbudRdGIP71NZGe%2BHJusqOixUOV%2BTgjg6F%2BmbdfHZoGyE9Etljh14apPEWuARV8QzXUwdud%2F7hReJKPGMbgGo22gOxXT0nICRXBsLdCZ6O4s%2FqM1KhxtiNlbHuuZE&X-Amz-Signature=532456a83a53db317e14f379f5682254d58f98fba9465943f7542eb35c10e5a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVLNV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBybvhHd5zU2n%2BUTFI4ZQT505Ill7t9AkA0Py0yL8zpcAiEAii%2B9kf%2BipogOLUhKKhey1GSmvftfbsA%2BvgivjfTvzK0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4H53chySMmN1B7gSrcA%2FYJ1NSzFPT0nIquiHAqiFlsNMcvivZDgWAGu5Y1BlD8OVJNo1oB3zKNJplfmBg%2BRpsqkB8pxPkO%2BhCYfsSBHsOl5RHPIvyEhAoC2c%2FH%2BZ076RxOXRzoVvTTqkyVS0qj7oyVb79PqlcLmY5LVdve8BMQFBKnxR57sSf8iYcUESdYM7pmZV8oj8CkiIKRoQK6UaLzsWcBe7jNf7RwwD%2B9ed0CWilVhfU8YHCvO%2FdaHZgPEh2o89lc%2BgAvbUJch%2F6gEQ24HPU%2FuE3Kp5IsiCsZWBN0Fb49sIRLtnUQJ6a8EkL0N3aJnX2mvFBtS%2FhV3wVObgcmBncaJVpqyTZCwTJ7%2FspwumxzYify70mx%2FPCLXdNthYqdpBqEfh4NfyP21dbI7W0FPwB8LCcRM9akaNpQH%2B3u%2FV9wQXh21y6DZdpakUBCobIbXK3MDLBxl1qFMAjXVdSZgsKdZOd9c%2F8r3FjIZNnnMmh7cZNekT5FgJ6ICxXYw8fu8wyabN6fUnqj2ozCcCNGb%2FjG5eWKe9Cpu7R7wHyeGXnjf%2B2e%2FoxWBnEAJaI7rzCwk80iS8ZPedBIUvXBA1TKZjSa2JEgb4N8XNcRmulSZ0p3Cs1qPkxNLv%2BQxFLAhyQsN1E2ljQk%2BjJbMK688r0GOqUB62fZ5POPhn76kylWRc1SnIES5zIxLK%2FX75ElzahNbfH9ykpODvyReA5i5G5WwxxoHfgx7OqE0fVOp6Z%2Bi0aernGL9Y2iYASrbudRdGIP71NZGe%2BHJusqOixUOV%2BTgjg6F%2BmbdfHZoGyE9Etljh14apPEWuARV8QzXUwdud%2F7hReJKPGMbgGo22gOxXT0nICRXBsLdCZ6O4s%2FqM1KhxtiNlbHuuZE&X-Amz-Signature=78d009b5bd2cb605ac95768c84965a9dc585da48c65fb8e084347d114ad1f05e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVLNV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBybvhHd5zU2n%2BUTFI4ZQT505Ill7t9AkA0Py0yL8zpcAiEAii%2B9kf%2BipogOLUhKKhey1GSmvftfbsA%2BvgivjfTvzK0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4H53chySMmN1B7gSrcA%2FYJ1NSzFPT0nIquiHAqiFlsNMcvivZDgWAGu5Y1BlD8OVJNo1oB3zKNJplfmBg%2BRpsqkB8pxPkO%2BhCYfsSBHsOl5RHPIvyEhAoC2c%2FH%2BZ076RxOXRzoVvTTqkyVS0qj7oyVb79PqlcLmY5LVdve8BMQFBKnxR57sSf8iYcUESdYM7pmZV8oj8CkiIKRoQK6UaLzsWcBe7jNf7RwwD%2B9ed0CWilVhfU8YHCvO%2FdaHZgPEh2o89lc%2BgAvbUJch%2F6gEQ24HPU%2FuE3Kp5IsiCsZWBN0Fb49sIRLtnUQJ6a8EkL0N3aJnX2mvFBtS%2FhV3wVObgcmBncaJVpqyTZCwTJ7%2FspwumxzYify70mx%2FPCLXdNthYqdpBqEfh4NfyP21dbI7W0FPwB8LCcRM9akaNpQH%2B3u%2FV9wQXh21y6DZdpakUBCobIbXK3MDLBxl1qFMAjXVdSZgsKdZOd9c%2F8r3FjIZNnnMmh7cZNekT5FgJ6ICxXYw8fu8wyabN6fUnqj2ozCcCNGb%2FjG5eWKe9Cpu7R7wHyeGXnjf%2B2e%2FoxWBnEAJaI7rzCwk80iS8ZPedBIUvXBA1TKZjSa2JEgb4N8XNcRmulSZ0p3Cs1qPkxNLv%2BQxFLAhyQsN1E2ljQk%2BjJbMK688r0GOqUB62fZ5POPhn76kylWRc1SnIES5zIxLK%2FX75ElzahNbfH9ykpODvyReA5i5G5WwxxoHfgx7OqE0fVOp6Z%2Bi0aernGL9Y2iYASrbudRdGIP71NZGe%2BHJusqOixUOV%2BTgjg6F%2BmbdfHZoGyE9Etljh14apPEWuARV8QzXUwdud%2F7hReJKPGMbgGo22gOxXT0nICRXBsLdCZ6O4s%2FqM1KhxtiNlbHuuZE&X-Amz-Signature=1ae6af25bba08646ce2274af754fbcbfc5b2c5863f6e799b2edffe2e9cb9ff1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVLNV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBybvhHd5zU2n%2BUTFI4ZQT505Ill7t9AkA0Py0yL8zpcAiEAii%2B9kf%2BipogOLUhKKhey1GSmvftfbsA%2BvgivjfTvzK0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4H53chySMmN1B7gSrcA%2FYJ1NSzFPT0nIquiHAqiFlsNMcvivZDgWAGu5Y1BlD8OVJNo1oB3zKNJplfmBg%2BRpsqkB8pxPkO%2BhCYfsSBHsOl5RHPIvyEhAoC2c%2FH%2BZ076RxOXRzoVvTTqkyVS0qj7oyVb79PqlcLmY5LVdve8BMQFBKnxR57sSf8iYcUESdYM7pmZV8oj8CkiIKRoQK6UaLzsWcBe7jNf7RwwD%2B9ed0CWilVhfU8YHCvO%2FdaHZgPEh2o89lc%2BgAvbUJch%2F6gEQ24HPU%2FuE3Kp5IsiCsZWBN0Fb49sIRLtnUQJ6a8EkL0N3aJnX2mvFBtS%2FhV3wVObgcmBncaJVpqyTZCwTJ7%2FspwumxzYify70mx%2FPCLXdNthYqdpBqEfh4NfyP21dbI7W0FPwB8LCcRM9akaNpQH%2B3u%2FV9wQXh21y6DZdpakUBCobIbXK3MDLBxl1qFMAjXVdSZgsKdZOd9c%2F8r3FjIZNnnMmh7cZNekT5FgJ6ICxXYw8fu8wyabN6fUnqj2ozCcCNGb%2FjG5eWKe9Cpu7R7wHyeGXnjf%2B2e%2FoxWBnEAJaI7rzCwk80iS8ZPedBIUvXBA1TKZjSa2JEgb4N8XNcRmulSZ0p3Cs1qPkxNLv%2BQxFLAhyQsN1E2ljQk%2BjJbMK688r0GOqUB62fZ5POPhn76kylWRc1SnIES5zIxLK%2FX75ElzahNbfH9ykpODvyReA5i5G5WwxxoHfgx7OqE0fVOp6Z%2Bi0aernGL9Y2iYASrbudRdGIP71NZGe%2BHJusqOixUOV%2BTgjg6F%2BmbdfHZoGyE9Etljh14apPEWuARV8QzXUwdud%2F7hReJKPGMbgGo22gOxXT0nICRXBsLdCZ6O4s%2FqM1KhxtiNlbHuuZE&X-Amz-Signature=e2e971ca628636f2127884bf34faf49f050502a6668f935492fddbe4c03dad31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVLNV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBybvhHd5zU2n%2BUTFI4ZQT505Ill7t9AkA0Py0yL8zpcAiEAii%2B9kf%2BipogOLUhKKhey1GSmvftfbsA%2BvgivjfTvzK0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC4H53chySMmN1B7gSrcA%2FYJ1NSzFPT0nIquiHAqiFlsNMcvivZDgWAGu5Y1BlD8OVJNo1oB3zKNJplfmBg%2BRpsqkB8pxPkO%2BhCYfsSBHsOl5RHPIvyEhAoC2c%2FH%2BZ076RxOXRzoVvTTqkyVS0qj7oyVb79PqlcLmY5LVdve8BMQFBKnxR57sSf8iYcUESdYM7pmZV8oj8CkiIKRoQK6UaLzsWcBe7jNf7RwwD%2B9ed0CWilVhfU8YHCvO%2FdaHZgPEh2o89lc%2BgAvbUJch%2F6gEQ24HPU%2FuE3Kp5IsiCsZWBN0Fb49sIRLtnUQJ6a8EkL0N3aJnX2mvFBtS%2FhV3wVObgcmBncaJVpqyTZCwTJ7%2FspwumxzYify70mx%2FPCLXdNthYqdpBqEfh4NfyP21dbI7W0FPwB8LCcRM9akaNpQH%2B3u%2FV9wQXh21y6DZdpakUBCobIbXK3MDLBxl1qFMAjXVdSZgsKdZOd9c%2F8r3FjIZNnnMmh7cZNekT5FgJ6ICxXYw8fu8wyabN6fUnqj2ozCcCNGb%2FjG5eWKe9Cpu7R7wHyeGXnjf%2B2e%2FoxWBnEAJaI7rzCwk80iS8ZPedBIUvXBA1TKZjSa2JEgb4N8XNcRmulSZ0p3Cs1qPkxNLv%2BQxFLAhyQsN1E2ljQk%2BjJbMK688r0GOqUB62fZ5POPhn76kylWRc1SnIES5zIxLK%2FX75ElzahNbfH9ykpODvyReA5i5G5WwxxoHfgx7OqE0fVOp6Z%2Bi0aernGL9Y2iYASrbudRdGIP71NZGe%2BHJusqOixUOV%2BTgjg6F%2BmbdfHZoGyE9Etljh14apPEWuARV8QzXUwdud%2F7hReJKPGMbgGo22gOxXT0nICRXBsLdCZ6O4s%2FqM1KhxtiNlbHuuZE&X-Amz-Signature=425f9cfbae886dd6a2f3d5f54e69d0793346ddd423d812bd481dd35db4c6dba1&X-Amz-SignedHeaders=host&x-id=GetObject)
