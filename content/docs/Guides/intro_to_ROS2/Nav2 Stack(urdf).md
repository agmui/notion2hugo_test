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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JFSXGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD2yoEKsGPrIcMTfvJlxOWZfZEnV8V%2BrTwjhIwC4I4vuAIgUI4OixM8cukhlYOFX9%2FF62Q6356xQ0o537%2FF2Cenq2Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAb1VJzjFAejrtIJLCrcAysOPP7nFjgrBLTISwyMm4NOL1M%2FfT6baUVjzY2lhPyATevgW%2Fifo60BTGgSZHrGd4fGhA4aAL%2FUJIpxEhvz8ddurF7bw%2FkslIwVD9gGY3QdjfWAiwczL7t7J5BUeJVKa%2BJlWJNBLa3pV4c84CV8WF5rx5byHHFLJ%2FgTnswJZiPoMQ%2BilEQ8Hz4uXNkoVGw2F8kQ%2Fb0WRth2MPFjuckILka6y%2FpNZuXonmKBW%2FsybqGJh8JQXQ20RxuXaZvobOQjlZQwJ0qBUWzYwA0JCSorIL1T2qEIKp9ORpFyRyUWJ8Ags64X80xvWMPewYBmyrtdR%2BEsRmBco5oudKiV103TtFlzyH3LGcE91HQXXu7Bu1vci3EnItxmNEoOKFan%2BImFJgO3oYTA2ZgUwLT62d4w%2BJVxSZC%2BwzAZVyYc9wzgsYv1Tn5tFdwW67gQJGzDHa6R%2BLXjwtZbK5G8%2BS0fA5JheI%2BcAPkA%2BJpriL6iT%2FJMl%2BkEPS4moTbUt0jA0bzSWL%2FedDyr1k315ygKjVkFEpwhSCavMAaGztW7pnNT5bCDauwiq6KGO9BYbGSfnEQyUMg6YPDt41f3P%2FyJlmek%2B2gVThlCg58%2FhKi9E%2F7f1RUa9T9hXv2FqJIaIAa6NbzpMIm9r74GOqUBCURJxGj2LPrzBgueN3dXgABe1xpf8ybdagqiROkGIEiA3CjCjSrEIZSIyGP%2BG0pLPK9zCtPcrxFDDfo5R5A1nbR4l57XA8wyQ9gRum7nXUUrisVyNxBAt33M1zFejqoIHTjK4caHktOWjcXyVYcqUU%2B%2F3sChJBxhA8GNK7tbkbu7gioqDQazKpazF6eM%2FhQJ5yBi%2B6NV%2FHg09LZIbAEvp8oHU69O&X-Amz-Signature=21297645c5dea2fce1dabf2b190b2edd31c626ea8f8021ed7e11b3a6afe64d50&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JFSXGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD2yoEKsGPrIcMTfvJlxOWZfZEnV8V%2BrTwjhIwC4I4vuAIgUI4OixM8cukhlYOFX9%2FF62Q6356xQ0o537%2FF2Cenq2Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAb1VJzjFAejrtIJLCrcAysOPP7nFjgrBLTISwyMm4NOL1M%2FfT6baUVjzY2lhPyATevgW%2Fifo60BTGgSZHrGd4fGhA4aAL%2FUJIpxEhvz8ddurF7bw%2FkslIwVD9gGY3QdjfWAiwczL7t7J5BUeJVKa%2BJlWJNBLa3pV4c84CV8WF5rx5byHHFLJ%2FgTnswJZiPoMQ%2BilEQ8Hz4uXNkoVGw2F8kQ%2Fb0WRth2MPFjuckILka6y%2FpNZuXonmKBW%2FsybqGJh8JQXQ20RxuXaZvobOQjlZQwJ0qBUWzYwA0JCSorIL1T2qEIKp9ORpFyRyUWJ8Ags64X80xvWMPewYBmyrtdR%2BEsRmBco5oudKiV103TtFlzyH3LGcE91HQXXu7Bu1vci3EnItxmNEoOKFan%2BImFJgO3oYTA2ZgUwLT62d4w%2BJVxSZC%2BwzAZVyYc9wzgsYv1Tn5tFdwW67gQJGzDHa6R%2BLXjwtZbK5G8%2BS0fA5JheI%2BcAPkA%2BJpriL6iT%2FJMl%2BkEPS4moTbUt0jA0bzSWL%2FedDyr1k315ygKjVkFEpwhSCavMAaGztW7pnNT5bCDauwiq6KGO9BYbGSfnEQyUMg6YPDt41f3P%2FyJlmek%2B2gVThlCg58%2FhKi9E%2F7f1RUa9T9hXv2FqJIaIAa6NbzpMIm9r74GOqUBCURJxGj2LPrzBgueN3dXgABe1xpf8ybdagqiROkGIEiA3CjCjSrEIZSIyGP%2BG0pLPK9zCtPcrxFDDfo5R5A1nbR4l57XA8wyQ9gRum7nXUUrisVyNxBAt33M1zFejqoIHTjK4caHktOWjcXyVYcqUU%2B%2F3sChJBxhA8GNK7tbkbu7gioqDQazKpazF6eM%2FhQJ5yBi%2B6NV%2FHg09LZIbAEvp8oHU69O&X-Amz-Signature=83b13c5a54ea1f23392466e6c3740574118c9b9d7683c0edf2c10de0a0bd8973&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JFSXGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD2yoEKsGPrIcMTfvJlxOWZfZEnV8V%2BrTwjhIwC4I4vuAIgUI4OixM8cukhlYOFX9%2FF62Q6356xQ0o537%2FF2Cenq2Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAb1VJzjFAejrtIJLCrcAysOPP7nFjgrBLTISwyMm4NOL1M%2FfT6baUVjzY2lhPyATevgW%2Fifo60BTGgSZHrGd4fGhA4aAL%2FUJIpxEhvz8ddurF7bw%2FkslIwVD9gGY3QdjfWAiwczL7t7J5BUeJVKa%2BJlWJNBLa3pV4c84CV8WF5rx5byHHFLJ%2FgTnswJZiPoMQ%2BilEQ8Hz4uXNkoVGw2F8kQ%2Fb0WRth2MPFjuckILka6y%2FpNZuXonmKBW%2FsybqGJh8JQXQ20RxuXaZvobOQjlZQwJ0qBUWzYwA0JCSorIL1T2qEIKp9ORpFyRyUWJ8Ags64X80xvWMPewYBmyrtdR%2BEsRmBco5oudKiV103TtFlzyH3LGcE91HQXXu7Bu1vci3EnItxmNEoOKFan%2BImFJgO3oYTA2ZgUwLT62d4w%2BJVxSZC%2BwzAZVyYc9wzgsYv1Tn5tFdwW67gQJGzDHa6R%2BLXjwtZbK5G8%2BS0fA5JheI%2BcAPkA%2BJpriL6iT%2FJMl%2BkEPS4moTbUt0jA0bzSWL%2FedDyr1k315ygKjVkFEpwhSCavMAaGztW7pnNT5bCDauwiq6KGO9BYbGSfnEQyUMg6YPDt41f3P%2FyJlmek%2B2gVThlCg58%2FhKi9E%2F7f1RUa9T9hXv2FqJIaIAa6NbzpMIm9r74GOqUBCURJxGj2LPrzBgueN3dXgABe1xpf8ybdagqiROkGIEiA3CjCjSrEIZSIyGP%2BG0pLPK9zCtPcrxFDDfo5R5A1nbR4l57XA8wyQ9gRum7nXUUrisVyNxBAt33M1zFejqoIHTjK4caHktOWjcXyVYcqUU%2B%2F3sChJBxhA8GNK7tbkbu7gioqDQazKpazF6eM%2FhQJ5yBi%2B6NV%2FHg09LZIbAEvp8oHU69O&X-Amz-Signature=724b49249a52ffe1ba440139ce77400b2636e1731f4c494d2f0c60429b3049d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JFSXGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD2yoEKsGPrIcMTfvJlxOWZfZEnV8V%2BrTwjhIwC4I4vuAIgUI4OixM8cukhlYOFX9%2FF62Q6356xQ0o537%2FF2Cenq2Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAb1VJzjFAejrtIJLCrcAysOPP7nFjgrBLTISwyMm4NOL1M%2FfT6baUVjzY2lhPyATevgW%2Fifo60BTGgSZHrGd4fGhA4aAL%2FUJIpxEhvz8ddurF7bw%2FkslIwVD9gGY3QdjfWAiwczL7t7J5BUeJVKa%2BJlWJNBLa3pV4c84CV8WF5rx5byHHFLJ%2FgTnswJZiPoMQ%2BilEQ8Hz4uXNkoVGw2F8kQ%2Fb0WRth2MPFjuckILka6y%2FpNZuXonmKBW%2FsybqGJh8JQXQ20RxuXaZvobOQjlZQwJ0qBUWzYwA0JCSorIL1T2qEIKp9ORpFyRyUWJ8Ags64X80xvWMPewYBmyrtdR%2BEsRmBco5oudKiV103TtFlzyH3LGcE91HQXXu7Bu1vci3EnItxmNEoOKFan%2BImFJgO3oYTA2ZgUwLT62d4w%2BJVxSZC%2BwzAZVyYc9wzgsYv1Tn5tFdwW67gQJGzDHa6R%2BLXjwtZbK5G8%2BS0fA5JheI%2BcAPkA%2BJpriL6iT%2FJMl%2BkEPS4moTbUt0jA0bzSWL%2FedDyr1k315ygKjVkFEpwhSCavMAaGztW7pnNT5bCDauwiq6KGO9BYbGSfnEQyUMg6YPDt41f3P%2FyJlmek%2B2gVThlCg58%2FhKi9E%2F7f1RUa9T9hXv2FqJIaIAa6NbzpMIm9r74GOqUBCURJxGj2LPrzBgueN3dXgABe1xpf8ybdagqiROkGIEiA3CjCjSrEIZSIyGP%2BG0pLPK9zCtPcrxFDDfo5R5A1nbR4l57XA8wyQ9gRum7nXUUrisVyNxBAt33M1zFejqoIHTjK4caHktOWjcXyVYcqUU%2B%2F3sChJBxhA8GNK7tbkbu7gioqDQazKpazF6eM%2FhQJ5yBi%2B6NV%2FHg09LZIbAEvp8oHU69O&X-Amz-Signature=9f79b54bd1e700bf1e82cbe8bd8279544e92aca54778351f31248ed6a64a27a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JFSXGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD2yoEKsGPrIcMTfvJlxOWZfZEnV8V%2BrTwjhIwC4I4vuAIgUI4OixM8cukhlYOFX9%2FF62Q6356xQ0o537%2FF2Cenq2Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAb1VJzjFAejrtIJLCrcAysOPP7nFjgrBLTISwyMm4NOL1M%2FfT6baUVjzY2lhPyATevgW%2Fifo60BTGgSZHrGd4fGhA4aAL%2FUJIpxEhvz8ddurF7bw%2FkslIwVD9gGY3QdjfWAiwczL7t7J5BUeJVKa%2BJlWJNBLa3pV4c84CV8WF5rx5byHHFLJ%2FgTnswJZiPoMQ%2BilEQ8Hz4uXNkoVGw2F8kQ%2Fb0WRth2MPFjuckILka6y%2FpNZuXonmKBW%2FsybqGJh8JQXQ20RxuXaZvobOQjlZQwJ0qBUWzYwA0JCSorIL1T2qEIKp9ORpFyRyUWJ8Ags64X80xvWMPewYBmyrtdR%2BEsRmBco5oudKiV103TtFlzyH3LGcE91HQXXu7Bu1vci3EnItxmNEoOKFan%2BImFJgO3oYTA2ZgUwLT62d4w%2BJVxSZC%2BwzAZVyYc9wzgsYv1Tn5tFdwW67gQJGzDHa6R%2BLXjwtZbK5G8%2BS0fA5JheI%2BcAPkA%2BJpriL6iT%2FJMl%2BkEPS4moTbUt0jA0bzSWL%2FedDyr1k315ygKjVkFEpwhSCavMAaGztW7pnNT5bCDauwiq6KGO9BYbGSfnEQyUMg6YPDt41f3P%2FyJlmek%2B2gVThlCg58%2FhKi9E%2F7f1RUa9T9hXv2FqJIaIAa6NbzpMIm9r74GOqUBCURJxGj2LPrzBgueN3dXgABe1xpf8ybdagqiROkGIEiA3CjCjSrEIZSIyGP%2BG0pLPK9zCtPcrxFDDfo5R5A1nbR4l57XA8wyQ9gRum7nXUUrisVyNxBAt33M1zFejqoIHTjK4caHktOWjcXyVYcqUU%2B%2F3sChJBxhA8GNK7tbkbu7gioqDQazKpazF6eM%2FhQJ5yBi%2B6NV%2FHg09LZIbAEvp8oHU69O&X-Amz-Signature=28a2b281e6ae84d2b43fa27214778062de345182ffbf1f539c532fcc6a417b05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JFSXGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD2yoEKsGPrIcMTfvJlxOWZfZEnV8V%2BrTwjhIwC4I4vuAIgUI4OixM8cukhlYOFX9%2FF62Q6356xQ0o537%2FF2Cenq2Iq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAb1VJzjFAejrtIJLCrcAysOPP7nFjgrBLTISwyMm4NOL1M%2FfT6baUVjzY2lhPyATevgW%2Fifo60BTGgSZHrGd4fGhA4aAL%2FUJIpxEhvz8ddurF7bw%2FkslIwVD9gGY3QdjfWAiwczL7t7J5BUeJVKa%2BJlWJNBLa3pV4c84CV8WF5rx5byHHFLJ%2FgTnswJZiPoMQ%2BilEQ8Hz4uXNkoVGw2F8kQ%2Fb0WRth2MPFjuckILka6y%2FpNZuXonmKBW%2FsybqGJh8JQXQ20RxuXaZvobOQjlZQwJ0qBUWzYwA0JCSorIL1T2qEIKp9ORpFyRyUWJ8Ags64X80xvWMPewYBmyrtdR%2BEsRmBco5oudKiV103TtFlzyH3LGcE91HQXXu7Bu1vci3EnItxmNEoOKFan%2BImFJgO3oYTA2ZgUwLT62d4w%2BJVxSZC%2BwzAZVyYc9wzgsYv1Tn5tFdwW67gQJGzDHa6R%2BLXjwtZbK5G8%2BS0fA5JheI%2BcAPkA%2BJpriL6iT%2FJMl%2BkEPS4moTbUt0jA0bzSWL%2FedDyr1k315ygKjVkFEpwhSCavMAaGztW7pnNT5bCDauwiq6KGO9BYbGSfnEQyUMg6YPDt41f3P%2FyJlmek%2B2gVThlCg58%2FhKi9E%2F7f1RUa9T9hXv2FqJIaIAa6NbzpMIm9r74GOqUBCURJxGj2LPrzBgueN3dXgABe1xpf8ybdagqiROkGIEiA3CjCjSrEIZSIyGP%2BG0pLPK9zCtPcrxFDDfo5R5A1nbR4l57XA8wyQ9gRum7nXUUrisVyNxBAt33M1zFejqoIHTjK4caHktOWjcXyVYcqUU%2B%2F3sChJBxhA8GNK7tbkbu7gioqDQazKpazF6eM%2FhQJ5yBi%2B6NV%2FHg09LZIbAEvp8oHU69O&X-Amz-Signature=846d2b7f8e921b196934112ab87805b898f90838ebbd46f2d6b2cc05c9c60fa3&X-Amz-SignedHeaders=host&x-id=GetObject)
