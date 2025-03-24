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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWITAVS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZAdrbxY0TbJt%2FzjyLEzMWY%2FAY1VUAImFhW9QbkS51IAiEAjK%2Fs7YN8AJ4Fe8hfCWdgdoSIPXHkhVW6JGmiArCks%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7EVdgoEYANHFi%2FayrcAxp6KER8et5JzQ3%2Bx8746aNXeSdiK8xXuZ8%2BhzJ6W4asssxM8x8wP3x5rhK6Muh8KSKJk5LIGdjmqH%2B0Bz2iiego8coV5CxVDupJsThMeIQxgvLC7QuqOTEbQ3DyKL0uNSkpxeuYU7%2BYzH%2B7tMRQy8HXkvA1700EEU0Dcq7wufNEner7yCYpk%2BxuodZc2S%2FwjuUTj6X7BGhHLsw9AaZXSAwsq8DfZ6ll1IXcbQ5Fb2HTlPjtOCcJZx5wl5VYb0WY5am3CTUZSeZztTHz5ii5fs4jMGKv04LQNjCxoDsJonb%2BWRcLeMRV%2FBJJijyvaLmPriUs%2Fx%2BgWwSgX1ewqYkUlUh8Ybd3PlJmKeK%2B4%2BncYaJdBZen5UP8jdjeHcxRPU1KeZ0GGDa%2BniFvRy6e88CZN9n%2BaqxHbWg6f8oruhg8DBNdh4Qkfr0sV5HJV59kWxLy%2BymsZyYCtlxvdiq5uZnWZPK0KvSuKpFLBA29%2FmQZVhy6rqBOWqFyYKDTm%2FhvzdzvU%2Fl%2BG6mDU5hrf9M%2BV25iWUxtfG6MAQDrCfMkaJC6I8SHHdByPJFZ%2FdAggHgafE%2FOIOz5QKpO%2BsLhAKlCDWu3IXxw1bqELkZ7Opj9DayF7CyPp6gjiMcKvLESbhoCMIz%2Bhb8GOqUBtNhc2WjSVHTljvVer5Ez45AC6XuG07iMwExv5%2BigqkjVz9dmTNJz4sDoMR6yWKowNlI7hFoBIx1NiQjVgDgD3LleuDs9luKLLHl2SbitoUt%2F3NFXfgolSrmlmttfUXPVjRicELTNSsHpcNd99%2FEt%2FJJ1mL02zo9y6Q5fjqSvOn66V0HcSv65ks1zdErhbGi4mGSINSFshQoMGOOfP1Gsn9J8OqHU&X-Amz-Signature=a8035d52dbdc4cbff05303549d0f4ff271434d7cd55752785fcefaf10839246d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWITAVS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZAdrbxY0TbJt%2FzjyLEzMWY%2FAY1VUAImFhW9QbkS51IAiEAjK%2Fs7YN8AJ4Fe8hfCWdgdoSIPXHkhVW6JGmiArCks%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7EVdgoEYANHFi%2FayrcAxp6KER8et5JzQ3%2Bx8746aNXeSdiK8xXuZ8%2BhzJ6W4asssxM8x8wP3x5rhK6Muh8KSKJk5LIGdjmqH%2B0Bz2iiego8coV5CxVDupJsThMeIQxgvLC7QuqOTEbQ3DyKL0uNSkpxeuYU7%2BYzH%2B7tMRQy8HXkvA1700EEU0Dcq7wufNEner7yCYpk%2BxuodZc2S%2FwjuUTj6X7BGhHLsw9AaZXSAwsq8DfZ6ll1IXcbQ5Fb2HTlPjtOCcJZx5wl5VYb0WY5am3CTUZSeZztTHz5ii5fs4jMGKv04LQNjCxoDsJonb%2BWRcLeMRV%2FBJJijyvaLmPriUs%2Fx%2BgWwSgX1ewqYkUlUh8Ybd3PlJmKeK%2B4%2BncYaJdBZen5UP8jdjeHcxRPU1KeZ0GGDa%2BniFvRy6e88CZN9n%2BaqxHbWg6f8oruhg8DBNdh4Qkfr0sV5HJV59kWxLy%2BymsZyYCtlxvdiq5uZnWZPK0KvSuKpFLBA29%2FmQZVhy6rqBOWqFyYKDTm%2FhvzdzvU%2Fl%2BG6mDU5hrf9M%2BV25iWUxtfG6MAQDrCfMkaJC6I8SHHdByPJFZ%2FdAggHgafE%2FOIOz5QKpO%2BsLhAKlCDWu3IXxw1bqELkZ7Opj9DayF7CyPp6gjiMcKvLESbhoCMIz%2Bhb8GOqUBtNhc2WjSVHTljvVer5Ez45AC6XuG07iMwExv5%2BigqkjVz9dmTNJz4sDoMR6yWKowNlI7hFoBIx1NiQjVgDgD3LleuDs9luKLLHl2SbitoUt%2F3NFXfgolSrmlmttfUXPVjRicELTNSsHpcNd99%2FEt%2FJJ1mL02zo9y6Q5fjqSvOn66V0HcSv65ks1zdErhbGi4mGSINSFshQoMGOOfP1Gsn9J8OqHU&X-Amz-Signature=e6f8efa79ee647701aa29d439c5d64ae38755ec44d54c4d832912a1393b3b62f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWITAVS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZAdrbxY0TbJt%2FzjyLEzMWY%2FAY1VUAImFhW9QbkS51IAiEAjK%2Fs7YN8AJ4Fe8hfCWdgdoSIPXHkhVW6JGmiArCks%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7EVdgoEYANHFi%2FayrcAxp6KER8et5JzQ3%2Bx8746aNXeSdiK8xXuZ8%2BhzJ6W4asssxM8x8wP3x5rhK6Muh8KSKJk5LIGdjmqH%2B0Bz2iiego8coV5CxVDupJsThMeIQxgvLC7QuqOTEbQ3DyKL0uNSkpxeuYU7%2BYzH%2B7tMRQy8HXkvA1700EEU0Dcq7wufNEner7yCYpk%2BxuodZc2S%2FwjuUTj6X7BGhHLsw9AaZXSAwsq8DfZ6ll1IXcbQ5Fb2HTlPjtOCcJZx5wl5VYb0WY5am3CTUZSeZztTHz5ii5fs4jMGKv04LQNjCxoDsJonb%2BWRcLeMRV%2FBJJijyvaLmPriUs%2Fx%2BgWwSgX1ewqYkUlUh8Ybd3PlJmKeK%2B4%2BncYaJdBZen5UP8jdjeHcxRPU1KeZ0GGDa%2BniFvRy6e88CZN9n%2BaqxHbWg6f8oruhg8DBNdh4Qkfr0sV5HJV59kWxLy%2BymsZyYCtlxvdiq5uZnWZPK0KvSuKpFLBA29%2FmQZVhy6rqBOWqFyYKDTm%2FhvzdzvU%2Fl%2BG6mDU5hrf9M%2BV25iWUxtfG6MAQDrCfMkaJC6I8SHHdByPJFZ%2FdAggHgafE%2FOIOz5QKpO%2BsLhAKlCDWu3IXxw1bqELkZ7Opj9DayF7CyPp6gjiMcKvLESbhoCMIz%2Bhb8GOqUBtNhc2WjSVHTljvVer5Ez45AC6XuG07iMwExv5%2BigqkjVz9dmTNJz4sDoMR6yWKowNlI7hFoBIx1NiQjVgDgD3LleuDs9luKLLHl2SbitoUt%2F3NFXfgolSrmlmttfUXPVjRicELTNSsHpcNd99%2FEt%2FJJ1mL02zo9y6Q5fjqSvOn66V0HcSv65ks1zdErhbGi4mGSINSFshQoMGOOfP1Gsn9J8OqHU&X-Amz-Signature=c0bcff26222f72fb2d96b0e6e6c10b2531bb478ed8843744f52f2938a084c9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWITAVS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZAdrbxY0TbJt%2FzjyLEzMWY%2FAY1VUAImFhW9QbkS51IAiEAjK%2Fs7YN8AJ4Fe8hfCWdgdoSIPXHkhVW6JGmiArCks%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7EVdgoEYANHFi%2FayrcAxp6KER8et5JzQ3%2Bx8746aNXeSdiK8xXuZ8%2BhzJ6W4asssxM8x8wP3x5rhK6Muh8KSKJk5LIGdjmqH%2B0Bz2iiego8coV5CxVDupJsThMeIQxgvLC7QuqOTEbQ3DyKL0uNSkpxeuYU7%2BYzH%2B7tMRQy8HXkvA1700EEU0Dcq7wufNEner7yCYpk%2BxuodZc2S%2FwjuUTj6X7BGhHLsw9AaZXSAwsq8DfZ6ll1IXcbQ5Fb2HTlPjtOCcJZx5wl5VYb0WY5am3CTUZSeZztTHz5ii5fs4jMGKv04LQNjCxoDsJonb%2BWRcLeMRV%2FBJJijyvaLmPriUs%2Fx%2BgWwSgX1ewqYkUlUh8Ybd3PlJmKeK%2B4%2BncYaJdBZen5UP8jdjeHcxRPU1KeZ0GGDa%2BniFvRy6e88CZN9n%2BaqxHbWg6f8oruhg8DBNdh4Qkfr0sV5HJV59kWxLy%2BymsZyYCtlxvdiq5uZnWZPK0KvSuKpFLBA29%2FmQZVhy6rqBOWqFyYKDTm%2FhvzdzvU%2Fl%2BG6mDU5hrf9M%2BV25iWUxtfG6MAQDrCfMkaJC6I8SHHdByPJFZ%2FdAggHgafE%2FOIOz5QKpO%2BsLhAKlCDWu3IXxw1bqELkZ7Opj9DayF7CyPp6gjiMcKvLESbhoCMIz%2Bhb8GOqUBtNhc2WjSVHTljvVer5Ez45AC6XuG07iMwExv5%2BigqkjVz9dmTNJz4sDoMR6yWKowNlI7hFoBIx1NiQjVgDgD3LleuDs9luKLLHl2SbitoUt%2F3NFXfgolSrmlmttfUXPVjRicELTNSsHpcNd99%2FEt%2FJJ1mL02zo9y6Q5fjqSvOn66V0HcSv65ks1zdErhbGi4mGSINSFshQoMGOOfP1Gsn9J8OqHU&X-Amz-Signature=27b69ba093941b1ef7b0af5c6493c44bc42e25e74def63777ab0ddcfad49082d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWITAVS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZAdrbxY0TbJt%2FzjyLEzMWY%2FAY1VUAImFhW9QbkS51IAiEAjK%2Fs7YN8AJ4Fe8hfCWdgdoSIPXHkhVW6JGmiArCks%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7EVdgoEYANHFi%2FayrcAxp6KER8et5JzQ3%2Bx8746aNXeSdiK8xXuZ8%2BhzJ6W4asssxM8x8wP3x5rhK6Muh8KSKJk5LIGdjmqH%2B0Bz2iiego8coV5CxVDupJsThMeIQxgvLC7QuqOTEbQ3DyKL0uNSkpxeuYU7%2BYzH%2B7tMRQy8HXkvA1700EEU0Dcq7wufNEner7yCYpk%2BxuodZc2S%2FwjuUTj6X7BGhHLsw9AaZXSAwsq8DfZ6ll1IXcbQ5Fb2HTlPjtOCcJZx5wl5VYb0WY5am3CTUZSeZztTHz5ii5fs4jMGKv04LQNjCxoDsJonb%2BWRcLeMRV%2FBJJijyvaLmPriUs%2Fx%2BgWwSgX1ewqYkUlUh8Ybd3PlJmKeK%2B4%2BncYaJdBZen5UP8jdjeHcxRPU1KeZ0GGDa%2BniFvRy6e88CZN9n%2BaqxHbWg6f8oruhg8DBNdh4Qkfr0sV5HJV59kWxLy%2BymsZyYCtlxvdiq5uZnWZPK0KvSuKpFLBA29%2FmQZVhy6rqBOWqFyYKDTm%2FhvzdzvU%2Fl%2BG6mDU5hrf9M%2BV25iWUxtfG6MAQDrCfMkaJC6I8SHHdByPJFZ%2FdAggHgafE%2FOIOz5QKpO%2BsLhAKlCDWu3IXxw1bqELkZ7Opj9DayF7CyPp6gjiMcKvLESbhoCMIz%2Bhb8GOqUBtNhc2WjSVHTljvVer5Ez45AC6XuG07iMwExv5%2BigqkjVz9dmTNJz4sDoMR6yWKowNlI7hFoBIx1NiQjVgDgD3LleuDs9luKLLHl2SbitoUt%2F3NFXfgolSrmlmttfUXPVjRicELTNSsHpcNd99%2FEt%2FJJ1mL02zo9y6Q5fjqSvOn66V0HcSv65ks1zdErhbGi4mGSINSFshQoMGOOfP1Gsn9J8OqHU&X-Amz-Signature=8315f4ed7e358f099268e6e586defe6aa7f7ad0a17b9c9dbbbcc05d3498f8904&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWITAVS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZAdrbxY0TbJt%2FzjyLEzMWY%2FAY1VUAImFhW9QbkS51IAiEAjK%2Fs7YN8AJ4Fe8hfCWdgdoSIPXHkhVW6JGmiArCks%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7EVdgoEYANHFi%2FayrcAxp6KER8et5JzQ3%2Bx8746aNXeSdiK8xXuZ8%2BhzJ6W4asssxM8x8wP3x5rhK6Muh8KSKJk5LIGdjmqH%2B0Bz2iiego8coV5CxVDupJsThMeIQxgvLC7QuqOTEbQ3DyKL0uNSkpxeuYU7%2BYzH%2B7tMRQy8HXkvA1700EEU0Dcq7wufNEner7yCYpk%2BxuodZc2S%2FwjuUTj6X7BGhHLsw9AaZXSAwsq8DfZ6ll1IXcbQ5Fb2HTlPjtOCcJZx5wl5VYb0WY5am3CTUZSeZztTHz5ii5fs4jMGKv04LQNjCxoDsJonb%2BWRcLeMRV%2FBJJijyvaLmPriUs%2Fx%2BgWwSgX1ewqYkUlUh8Ybd3PlJmKeK%2B4%2BncYaJdBZen5UP8jdjeHcxRPU1KeZ0GGDa%2BniFvRy6e88CZN9n%2BaqxHbWg6f8oruhg8DBNdh4Qkfr0sV5HJV59kWxLy%2BymsZyYCtlxvdiq5uZnWZPK0KvSuKpFLBA29%2FmQZVhy6rqBOWqFyYKDTm%2FhvzdzvU%2Fl%2BG6mDU5hrf9M%2BV25iWUxtfG6MAQDrCfMkaJC6I8SHHdByPJFZ%2FdAggHgafE%2FOIOz5QKpO%2BsLhAKlCDWu3IXxw1bqELkZ7Opj9DayF7CyPp6gjiMcKvLESbhoCMIz%2Bhb8GOqUBtNhc2WjSVHTljvVer5Ez45AC6XuG07iMwExv5%2BigqkjVz9dmTNJz4sDoMR6yWKowNlI7hFoBIx1NiQjVgDgD3LleuDs9luKLLHl2SbitoUt%2F3NFXfgolSrmlmttfUXPVjRicELTNSsHpcNd99%2FEt%2FJJ1mL02zo9y6Q5fjqSvOn66V0HcSv65ks1zdErhbGi4mGSINSFshQoMGOOfP1Gsn9J8OqHU&X-Amz-Signature=9336a60353b1b7c73887b348e37e0129a2185c6e8a1c744c607e927b5cb9ff36&X-Amz-SignedHeaders=host&x-id=GetObject)
