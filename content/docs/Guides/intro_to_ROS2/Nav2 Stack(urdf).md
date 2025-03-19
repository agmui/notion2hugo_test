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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMVHRO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCEKUHIZihy6ViNw2KFScfrQ74DrSI%2FOtD4tXQJUT2ODwIhAINiACGGdGZ9UIus21uqDk9TXAn5QJ9OJ8fNwZxlzvYhKv8DCG0QABoMNjM3NDIzMTgzODA1Igy6HASCJ9VLV9h2ol8q3APXIIjIINEGPWq0JBzHzKz2HCM%2BclYFzE%2BwQy%2FXFKv7o26L8U0kNiUJY3e0uNStR%2FZeencucCQh%2BLpzjOIbV9%2Bl39ruzXoYDIr6z%2Fsmz8D3q4qGaBH74Kx2PzmpzUfS4X2xydzNvzdprobCim2dufQbE%2FY5vvKk0V4AwoKJfbyIoHeqxHAw%2BEMW6oJ0lG9FfX9WgAbf3ZPtml2XDz8okmZHdKtX7aJIjTybXciNkywLFBahJ%2FCROVilU8lHdkAaJuv3Nk3Wm5ZVbwBQZhCQ0iEjAOfxW5ShJHfW%2BV94qVKJx6h3Tx4zjZEH%2FxcN%2FEaIQu3UwG7R2%2B%2FkuJfVW6j4pfFbCc73aZ15gGmhh%2FL1CElkBHlhBhoG8GjwAoWjFMsHBhtk3c%2Fb6CxPyfHPa%2BYfwyqMVuLk0ItQjLtG2RWFQ1jzWC0NBwUdrQmC%2BU%2F5Fj0KmHy3v5aNvuXHE8c8wNyVVzBd9pI%2B4dS1yU%2FwOrP%2Fipyb%2BzE1YQdphIGBhU%2FLuSUDaVxWmK79uTStrYLjjc%2Bdaz7HVXo3VnkGg2qG2BVm2Hj5q5WDXL5LqAZBp1GVeGfPkovr8B6a7jKMSMiluDDBu%2BStRxkwGcgkfAafUUDDRC4ZET%2Brpx9xGgXfLuRJLDDT%2Fei%2BBjqkAV8qRSAoRSMXBbIdtGzEqhv%2Flbhy1uZr6J4xDWIxtPrtXYDvg%2F0KvuwymTs%2BimBNi0zlvIXxT%2FyDrnC7VjTbw1ws6YteVZ0YYvR42oVWxAx0L7ynnuoL0A1UWbdE7KJ15tVke0vdKz7p5IM1m%2FWGiuoTS7gEuFEmNFJpAkpT%2F2Qr0RWKbjlEZSgnppCRzl2krn2rEaIkrbVAFnR6WAAyFKfBG4NA&X-Amz-Signature=315adc6d18667d0cfa754a0f45742c7a61eb9ac2296934f06bbda0ddf82c73f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMVHRO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCEKUHIZihy6ViNw2KFScfrQ74DrSI%2FOtD4tXQJUT2ODwIhAINiACGGdGZ9UIus21uqDk9TXAn5QJ9OJ8fNwZxlzvYhKv8DCG0QABoMNjM3NDIzMTgzODA1Igy6HASCJ9VLV9h2ol8q3APXIIjIINEGPWq0JBzHzKz2HCM%2BclYFzE%2BwQy%2FXFKv7o26L8U0kNiUJY3e0uNStR%2FZeencucCQh%2BLpzjOIbV9%2Bl39ruzXoYDIr6z%2Fsmz8D3q4qGaBH74Kx2PzmpzUfS4X2xydzNvzdprobCim2dufQbE%2FY5vvKk0V4AwoKJfbyIoHeqxHAw%2BEMW6oJ0lG9FfX9WgAbf3ZPtml2XDz8okmZHdKtX7aJIjTybXciNkywLFBahJ%2FCROVilU8lHdkAaJuv3Nk3Wm5ZVbwBQZhCQ0iEjAOfxW5ShJHfW%2BV94qVKJx6h3Tx4zjZEH%2FxcN%2FEaIQu3UwG7R2%2B%2FkuJfVW6j4pfFbCc73aZ15gGmhh%2FL1CElkBHlhBhoG8GjwAoWjFMsHBhtk3c%2Fb6CxPyfHPa%2BYfwyqMVuLk0ItQjLtG2RWFQ1jzWC0NBwUdrQmC%2BU%2F5Fj0KmHy3v5aNvuXHE8c8wNyVVzBd9pI%2B4dS1yU%2FwOrP%2Fipyb%2BzE1YQdphIGBhU%2FLuSUDaVxWmK79uTStrYLjjc%2Bdaz7HVXo3VnkGg2qG2BVm2Hj5q5WDXL5LqAZBp1GVeGfPkovr8B6a7jKMSMiluDDBu%2BStRxkwGcgkfAafUUDDRC4ZET%2Brpx9xGgXfLuRJLDDT%2Fei%2BBjqkAV8qRSAoRSMXBbIdtGzEqhv%2Flbhy1uZr6J4xDWIxtPrtXYDvg%2F0KvuwymTs%2BimBNi0zlvIXxT%2FyDrnC7VjTbw1ws6YteVZ0YYvR42oVWxAx0L7ynnuoL0A1UWbdE7KJ15tVke0vdKz7p5IM1m%2FWGiuoTS7gEuFEmNFJpAkpT%2F2Qr0RWKbjlEZSgnppCRzl2krn2rEaIkrbVAFnR6WAAyFKfBG4NA&X-Amz-Signature=fbddd401db0cc45d3677c400e78b6621b800167a8efe6fbea37664f8e8412d04&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMVHRO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCEKUHIZihy6ViNw2KFScfrQ74DrSI%2FOtD4tXQJUT2ODwIhAINiACGGdGZ9UIus21uqDk9TXAn5QJ9OJ8fNwZxlzvYhKv8DCG0QABoMNjM3NDIzMTgzODA1Igy6HASCJ9VLV9h2ol8q3APXIIjIINEGPWq0JBzHzKz2HCM%2BclYFzE%2BwQy%2FXFKv7o26L8U0kNiUJY3e0uNStR%2FZeencucCQh%2BLpzjOIbV9%2Bl39ruzXoYDIr6z%2Fsmz8D3q4qGaBH74Kx2PzmpzUfS4X2xydzNvzdprobCim2dufQbE%2FY5vvKk0V4AwoKJfbyIoHeqxHAw%2BEMW6oJ0lG9FfX9WgAbf3ZPtml2XDz8okmZHdKtX7aJIjTybXciNkywLFBahJ%2FCROVilU8lHdkAaJuv3Nk3Wm5ZVbwBQZhCQ0iEjAOfxW5ShJHfW%2BV94qVKJx6h3Tx4zjZEH%2FxcN%2FEaIQu3UwG7R2%2B%2FkuJfVW6j4pfFbCc73aZ15gGmhh%2FL1CElkBHlhBhoG8GjwAoWjFMsHBhtk3c%2Fb6CxPyfHPa%2BYfwyqMVuLk0ItQjLtG2RWFQ1jzWC0NBwUdrQmC%2BU%2F5Fj0KmHy3v5aNvuXHE8c8wNyVVzBd9pI%2B4dS1yU%2FwOrP%2Fipyb%2BzE1YQdphIGBhU%2FLuSUDaVxWmK79uTStrYLjjc%2Bdaz7HVXo3VnkGg2qG2BVm2Hj5q5WDXL5LqAZBp1GVeGfPkovr8B6a7jKMSMiluDDBu%2BStRxkwGcgkfAafUUDDRC4ZET%2Brpx9xGgXfLuRJLDDT%2Fei%2BBjqkAV8qRSAoRSMXBbIdtGzEqhv%2Flbhy1uZr6J4xDWIxtPrtXYDvg%2F0KvuwymTs%2BimBNi0zlvIXxT%2FyDrnC7VjTbw1ws6YteVZ0YYvR42oVWxAx0L7ynnuoL0A1UWbdE7KJ15tVke0vdKz7p5IM1m%2FWGiuoTS7gEuFEmNFJpAkpT%2F2Qr0RWKbjlEZSgnppCRzl2krn2rEaIkrbVAFnR6WAAyFKfBG4NA&X-Amz-Signature=00f9639d6e46cb68ce189d1297f1660adeb9a5a5baf2c796573d785f0f5c42c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMVHRO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCEKUHIZihy6ViNw2KFScfrQ74DrSI%2FOtD4tXQJUT2ODwIhAINiACGGdGZ9UIus21uqDk9TXAn5QJ9OJ8fNwZxlzvYhKv8DCG0QABoMNjM3NDIzMTgzODA1Igy6HASCJ9VLV9h2ol8q3APXIIjIINEGPWq0JBzHzKz2HCM%2BclYFzE%2BwQy%2FXFKv7o26L8U0kNiUJY3e0uNStR%2FZeencucCQh%2BLpzjOIbV9%2Bl39ruzXoYDIr6z%2Fsmz8D3q4qGaBH74Kx2PzmpzUfS4X2xydzNvzdprobCim2dufQbE%2FY5vvKk0V4AwoKJfbyIoHeqxHAw%2BEMW6oJ0lG9FfX9WgAbf3ZPtml2XDz8okmZHdKtX7aJIjTybXciNkywLFBahJ%2FCROVilU8lHdkAaJuv3Nk3Wm5ZVbwBQZhCQ0iEjAOfxW5ShJHfW%2BV94qVKJx6h3Tx4zjZEH%2FxcN%2FEaIQu3UwG7R2%2B%2FkuJfVW6j4pfFbCc73aZ15gGmhh%2FL1CElkBHlhBhoG8GjwAoWjFMsHBhtk3c%2Fb6CxPyfHPa%2BYfwyqMVuLk0ItQjLtG2RWFQ1jzWC0NBwUdrQmC%2BU%2F5Fj0KmHy3v5aNvuXHE8c8wNyVVzBd9pI%2B4dS1yU%2FwOrP%2Fipyb%2BzE1YQdphIGBhU%2FLuSUDaVxWmK79uTStrYLjjc%2Bdaz7HVXo3VnkGg2qG2BVm2Hj5q5WDXL5LqAZBp1GVeGfPkovr8B6a7jKMSMiluDDBu%2BStRxkwGcgkfAafUUDDRC4ZET%2Brpx9xGgXfLuRJLDDT%2Fei%2BBjqkAV8qRSAoRSMXBbIdtGzEqhv%2Flbhy1uZr6J4xDWIxtPrtXYDvg%2F0KvuwymTs%2BimBNi0zlvIXxT%2FyDrnC7VjTbw1ws6YteVZ0YYvR42oVWxAx0L7ynnuoL0A1UWbdE7KJ15tVke0vdKz7p5IM1m%2FWGiuoTS7gEuFEmNFJpAkpT%2F2Qr0RWKbjlEZSgnppCRzl2krn2rEaIkrbVAFnR6WAAyFKfBG4NA&X-Amz-Signature=c01e278e98411ed00e43a4839259cce8099164c9d8921849a7874f216c8617ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMVHRO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCEKUHIZihy6ViNw2KFScfrQ74DrSI%2FOtD4tXQJUT2ODwIhAINiACGGdGZ9UIus21uqDk9TXAn5QJ9OJ8fNwZxlzvYhKv8DCG0QABoMNjM3NDIzMTgzODA1Igy6HASCJ9VLV9h2ol8q3APXIIjIINEGPWq0JBzHzKz2HCM%2BclYFzE%2BwQy%2FXFKv7o26L8U0kNiUJY3e0uNStR%2FZeencucCQh%2BLpzjOIbV9%2Bl39ruzXoYDIr6z%2Fsmz8D3q4qGaBH74Kx2PzmpzUfS4X2xydzNvzdprobCim2dufQbE%2FY5vvKk0V4AwoKJfbyIoHeqxHAw%2BEMW6oJ0lG9FfX9WgAbf3ZPtml2XDz8okmZHdKtX7aJIjTybXciNkywLFBahJ%2FCROVilU8lHdkAaJuv3Nk3Wm5ZVbwBQZhCQ0iEjAOfxW5ShJHfW%2BV94qVKJx6h3Tx4zjZEH%2FxcN%2FEaIQu3UwG7R2%2B%2FkuJfVW6j4pfFbCc73aZ15gGmhh%2FL1CElkBHlhBhoG8GjwAoWjFMsHBhtk3c%2Fb6CxPyfHPa%2BYfwyqMVuLk0ItQjLtG2RWFQ1jzWC0NBwUdrQmC%2BU%2F5Fj0KmHy3v5aNvuXHE8c8wNyVVzBd9pI%2B4dS1yU%2FwOrP%2Fipyb%2BzE1YQdphIGBhU%2FLuSUDaVxWmK79uTStrYLjjc%2Bdaz7HVXo3VnkGg2qG2BVm2Hj5q5WDXL5LqAZBp1GVeGfPkovr8B6a7jKMSMiluDDBu%2BStRxkwGcgkfAafUUDDRC4ZET%2Brpx9xGgXfLuRJLDDT%2Fei%2BBjqkAV8qRSAoRSMXBbIdtGzEqhv%2Flbhy1uZr6J4xDWIxtPrtXYDvg%2F0KvuwymTs%2BimBNi0zlvIXxT%2FyDrnC7VjTbw1ws6YteVZ0YYvR42oVWxAx0L7ynnuoL0A1UWbdE7KJ15tVke0vdKz7p5IM1m%2FWGiuoTS7gEuFEmNFJpAkpT%2F2Qr0RWKbjlEZSgnppCRzl2krn2rEaIkrbVAFnR6WAAyFKfBG4NA&X-Amz-Signature=f40157801e89f51e2e85e0f815e686f5b8ca119a31d5f31c2afae2159c4e9a14&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJMVHRO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCEKUHIZihy6ViNw2KFScfrQ74DrSI%2FOtD4tXQJUT2ODwIhAINiACGGdGZ9UIus21uqDk9TXAn5QJ9OJ8fNwZxlzvYhKv8DCG0QABoMNjM3NDIzMTgzODA1Igy6HASCJ9VLV9h2ol8q3APXIIjIINEGPWq0JBzHzKz2HCM%2BclYFzE%2BwQy%2FXFKv7o26L8U0kNiUJY3e0uNStR%2FZeencucCQh%2BLpzjOIbV9%2Bl39ruzXoYDIr6z%2Fsmz8D3q4qGaBH74Kx2PzmpzUfS4X2xydzNvzdprobCim2dufQbE%2FY5vvKk0V4AwoKJfbyIoHeqxHAw%2BEMW6oJ0lG9FfX9WgAbf3ZPtml2XDz8okmZHdKtX7aJIjTybXciNkywLFBahJ%2FCROVilU8lHdkAaJuv3Nk3Wm5ZVbwBQZhCQ0iEjAOfxW5ShJHfW%2BV94qVKJx6h3Tx4zjZEH%2FxcN%2FEaIQu3UwG7R2%2B%2FkuJfVW6j4pfFbCc73aZ15gGmhh%2FL1CElkBHlhBhoG8GjwAoWjFMsHBhtk3c%2Fb6CxPyfHPa%2BYfwyqMVuLk0ItQjLtG2RWFQ1jzWC0NBwUdrQmC%2BU%2F5Fj0KmHy3v5aNvuXHE8c8wNyVVzBd9pI%2B4dS1yU%2FwOrP%2Fipyb%2BzE1YQdphIGBhU%2FLuSUDaVxWmK79uTStrYLjjc%2Bdaz7HVXo3VnkGg2qG2BVm2Hj5q5WDXL5LqAZBp1GVeGfPkovr8B6a7jKMSMiluDDBu%2BStRxkwGcgkfAafUUDDRC4ZET%2Brpx9xGgXfLuRJLDDT%2Fei%2BBjqkAV8qRSAoRSMXBbIdtGzEqhv%2Flbhy1uZr6J4xDWIxtPrtXYDvg%2F0KvuwymTs%2BimBNi0zlvIXxT%2FyDrnC7VjTbw1ws6YteVZ0YYvR42oVWxAx0L7ynnuoL0A1UWbdE7KJ15tVke0vdKz7p5IM1m%2FWGiuoTS7gEuFEmNFJpAkpT%2F2Qr0RWKbjlEZSgnppCRzl2krn2rEaIkrbVAFnR6WAAyFKfBG4NA&X-Amz-Signature=d52caa453bb4454e3436bf9f27959d8f3791e238d560e66bc2579f92f00a0e0c&X-Amz-SignedHeaders=host&x-id=GetObject)
