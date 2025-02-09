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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=89bad79c33528d19191a1f2f08a025c08ac27fbd941720123944fa2f19091ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=b872ddb67823cebadc8ece80a668da438e4edd83a4af33a33557d7f880cc6660&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=80848941c3b651b13be1707bb029b6129924d3c092d3f1546b8bcf267950f77b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=d00095002b8679fd7be07e3b4e4f09cced4e03766abf7625894956f1212f173e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=a0e7fd73bb546216b5fabf0fd4147a7a3470f16fa47c8c14b6da81453c042231&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=9ba906b8229cf98596d0c5fd8e64eafa05acf89879c6df946a3dfb2ad7ae53f1&X-Amz-SignedHeaders=host&x-id=GetObject)
