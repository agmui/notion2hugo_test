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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6WOSD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZyAnzG%2FKv2GUAFOk7qnTIdYgyeUhcRCC8fJv2zcjjwIhALheKAxH6N1nV212ACJw2tb%2ByHZuCZ4%2FU5aI8HjKc8HIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3mL7xxT5SyPg0AYq3AM0tEvSbhhKAoyItk9B%2Fz8DTYLIMQncBlWKHVthS6pClxqog%2F34pWrIjqW2QhlAcSRAMzg%2B0kitVjnXDOPuISbb4IbHqY1eLiA7KHUsHNmx3%2FvYGEqPKZ9j3UyFrKmdgTPZJqSPfa6%2BvCnpFuhOmxz2dO6BpmmnCuQDG0hJIEr7VulGaXjduxFNGjSzxZW%2Fmv3u3qWxUGrXwG84JhtITgaUOqDKE5PFaWF5MT%2BgaN2Gp8eqGguYQDkzDpDcgGeJlh9aBuB0txflLJiqYsOWOiFJX9hCyIWyjFF0KccAZEJdhG24vI1V8OUUs%2Bdy7vhklfs5UVzUBNqim%2BtB3QISzQZCovUINEgzow43w92BLg3tg5%2Fh%2F%2FL6WneWpECS65kcIvkuAuk0KAachFpTPf2OlxGrhjF19n52gPz%2BZ4invLcszuf9DX4FyAqYHLrfn6uWuHzzWo1IpuZkOnq3GYHBldHrLcnaw72GySLoLaRHRRt5%2Fsf9ft%2BhmZYFpy9EIwh6c39IlThMgxZPIUIymRclxKJuzilPw3kmBYi%2FrC%2FjGDLSi1IWk2%2FHmzL%2F5ln2WhiKs7bKFnaEXskicEWyuwaqiM%2BDQwuXbV%2FiStToZz2unZ%2BpaZnXrtgmwaBXtKRXUzD5oovDBjqkAQqkG%2B9Sr7O78dG4tUHCJUpbeCEjZnMC0ZK7I1fu9VzA33TQO7vlPu4e7XbGX%2FSZAXx0S6Oy%2F0rOu4kEK3TTXvghcBaWKdvC%2Bv%2Bk5LVVFVnRxTbvzrmAiUM7KOD2S36PDtukqzf7GTDHQdBN6ZvrAen76muLr6VeFQKTvMGx4qO7diR0h%2F1D%2FGqPVIuc%2FTel8t3r5r5oQZhvpd0044X4BESl%2F9oY&X-Amz-Signature=6ada0248c58e9c9d8585402c23d6760882ce92e11869147ccd78d93aa3440940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6WOSD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZyAnzG%2FKv2GUAFOk7qnTIdYgyeUhcRCC8fJv2zcjjwIhALheKAxH6N1nV212ACJw2tb%2ByHZuCZ4%2FU5aI8HjKc8HIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3mL7xxT5SyPg0AYq3AM0tEvSbhhKAoyItk9B%2Fz8DTYLIMQncBlWKHVthS6pClxqog%2F34pWrIjqW2QhlAcSRAMzg%2B0kitVjnXDOPuISbb4IbHqY1eLiA7KHUsHNmx3%2FvYGEqPKZ9j3UyFrKmdgTPZJqSPfa6%2BvCnpFuhOmxz2dO6BpmmnCuQDG0hJIEr7VulGaXjduxFNGjSzxZW%2Fmv3u3qWxUGrXwG84JhtITgaUOqDKE5PFaWF5MT%2BgaN2Gp8eqGguYQDkzDpDcgGeJlh9aBuB0txflLJiqYsOWOiFJX9hCyIWyjFF0KccAZEJdhG24vI1V8OUUs%2Bdy7vhklfs5UVzUBNqim%2BtB3QISzQZCovUINEgzow43w92BLg3tg5%2Fh%2F%2FL6WneWpECS65kcIvkuAuk0KAachFpTPf2OlxGrhjF19n52gPz%2BZ4invLcszuf9DX4FyAqYHLrfn6uWuHzzWo1IpuZkOnq3GYHBldHrLcnaw72GySLoLaRHRRt5%2Fsf9ft%2BhmZYFpy9EIwh6c39IlThMgxZPIUIymRclxKJuzilPw3kmBYi%2FrC%2FjGDLSi1IWk2%2FHmzL%2F5ln2WhiKs7bKFnaEXskicEWyuwaqiM%2BDQwuXbV%2FiStToZz2unZ%2BpaZnXrtgmwaBXtKRXUzD5oovDBjqkAQqkG%2B9Sr7O78dG4tUHCJUpbeCEjZnMC0ZK7I1fu9VzA33TQO7vlPu4e7XbGX%2FSZAXx0S6Oy%2F0rOu4kEK3TTXvghcBaWKdvC%2Bv%2Bk5LVVFVnRxTbvzrmAiUM7KOD2S36PDtukqzf7GTDHQdBN6ZvrAen76muLr6VeFQKTvMGx4qO7diR0h%2F1D%2FGqPVIuc%2FTel8t3r5r5oQZhvpd0044X4BESl%2F9oY&X-Amz-Signature=0a3534bb1e0dc6d82cd869a201dceeac4081cacabc05907da5d2821c76f9aa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6WOSD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZyAnzG%2FKv2GUAFOk7qnTIdYgyeUhcRCC8fJv2zcjjwIhALheKAxH6N1nV212ACJw2tb%2ByHZuCZ4%2FU5aI8HjKc8HIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3mL7xxT5SyPg0AYq3AM0tEvSbhhKAoyItk9B%2Fz8DTYLIMQncBlWKHVthS6pClxqog%2F34pWrIjqW2QhlAcSRAMzg%2B0kitVjnXDOPuISbb4IbHqY1eLiA7KHUsHNmx3%2FvYGEqPKZ9j3UyFrKmdgTPZJqSPfa6%2BvCnpFuhOmxz2dO6BpmmnCuQDG0hJIEr7VulGaXjduxFNGjSzxZW%2Fmv3u3qWxUGrXwG84JhtITgaUOqDKE5PFaWF5MT%2BgaN2Gp8eqGguYQDkzDpDcgGeJlh9aBuB0txflLJiqYsOWOiFJX9hCyIWyjFF0KccAZEJdhG24vI1V8OUUs%2Bdy7vhklfs5UVzUBNqim%2BtB3QISzQZCovUINEgzow43w92BLg3tg5%2Fh%2F%2FL6WneWpECS65kcIvkuAuk0KAachFpTPf2OlxGrhjF19n52gPz%2BZ4invLcszuf9DX4FyAqYHLrfn6uWuHzzWo1IpuZkOnq3GYHBldHrLcnaw72GySLoLaRHRRt5%2Fsf9ft%2BhmZYFpy9EIwh6c39IlThMgxZPIUIymRclxKJuzilPw3kmBYi%2FrC%2FjGDLSi1IWk2%2FHmzL%2F5ln2WhiKs7bKFnaEXskicEWyuwaqiM%2BDQwuXbV%2FiStToZz2unZ%2BpaZnXrtgmwaBXtKRXUzD5oovDBjqkAQqkG%2B9Sr7O78dG4tUHCJUpbeCEjZnMC0ZK7I1fu9VzA33TQO7vlPu4e7XbGX%2FSZAXx0S6Oy%2F0rOu4kEK3TTXvghcBaWKdvC%2Bv%2Bk5LVVFVnRxTbvzrmAiUM7KOD2S36PDtukqzf7GTDHQdBN6ZvrAen76muLr6VeFQKTvMGx4qO7diR0h%2F1D%2FGqPVIuc%2FTel8t3r5r5oQZhvpd0044X4BESl%2F9oY&X-Amz-Signature=74bf8bf4b6fb94befe0c276eec602772c9b27a32d6c11330f670b9f8c9a6572b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6WOSD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZyAnzG%2FKv2GUAFOk7qnTIdYgyeUhcRCC8fJv2zcjjwIhALheKAxH6N1nV212ACJw2tb%2ByHZuCZ4%2FU5aI8HjKc8HIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3mL7xxT5SyPg0AYq3AM0tEvSbhhKAoyItk9B%2Fz8DTYLIMQncBlWKHVthS6pClxqog%2F34pWrIjqW2QhlAcSRAMzg%2B0kitVjnXDOPuISbb4IbHqY1eLiA7KHUsHNmx3%2FvYGEqPKZ9j3UyFrKmdgTPZJqSPfa6%2BvCnpFuhOmxz2dO6BpmmnCuQDG0hJIEr7VulGaXjduxFNGjSzxZW%2Fmv3u3qWxUGrXwG84JhtITgaUOqDKE5PFaWF5MT%2BgaN2Gp8eqGguYQDkzDpDcgGeJlh9aBuB0txflLJiqYsOWOiFJX9hCyIWyjFF0KccAZEJdhG24vI1V8OUUs%2Bdy7vhklfs5UVzUBNqim%2BtB3QISzQZCovUINEgzow43w92BLg3tg5%2Fh%2F%2FL6WneWpECS65kcIvkuAuk0KAachFpTPf2OlxGrhjF19n52gPz%2BZ4invLcszuf9DX4FyAqYHLrfn6uWuHzzWo1IpuZkOnq3GYHBldHrLcnaw72GySLoLaRHRRt5%2Fsf9ft%2BhmZYFpy9EIwh6c39IlThMgxZPIUIymRclxKJuzilPw3kmBYi%2FrC%2FjGDLSi1IWk2%2FHmzL%2F5ln2WhiKs7bKFnaEXskicEWyuwaqiM%2BDQwuXbV%2FiStToZz2unZ%2BpaZnXrtgmwaBXtKRXUzD5oovDBjqkAQqkG%2B9Sr7O78dG4tUHCJUpbeCEjZnMC0ZK7I1fu9VzA33TQO7vlPu4e7XbGX%2FSZAXx0S6Oy%2F0rOu4kEK3TTXvghcBaWKdvC%2Bv%2Bk5LVVFVnRxTbvzrmAiUM7KOD2S36PDtukqzf7GTDHQdBN6ZvrAen76muLr6VeFQKTvMGx4qO7diR0h%2F1D%2FGqPVIuc%2FTel8t3r5r5oQZhvpd0044X4BESl%2F9oY&X-Amz-Signature=81a867fd699bb6807dd35cc0067abc51760a6c2ed0db2369da929afd5c0e62cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6WOSD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZyAnzG%2FKv2GUAFOk7qnTIdYgyeUhcRCC8fJv2zcjjwIhALheKAxH6N1nV212ACJw2tb%2ByHZuCZ4%2FU5aI8HjKc8HIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3mL7xxT5SyPg0AYq3AM0tEvSbhhKAoyItk9B%2Fz8DTYLIMQncBlWKHVthS6pClxqog%2F34pWrIjqW2QhlAcSRAMzg%2B0kitVjnXDOPuISbb4IbHqY1eLiA7KHUsHNmx3%2FvYGEqPKZ9j3UyFrKmdgTPZJqSPfa6%2BvCnpFuhOmxz2dO6BpmmnCuQDG0hJIEr7VulGaXjduxFNGjSzxZW%2Fmv3u3qWxUGrXwG84JhtITgaUOqDKE5PFaWF5MT%2BgaN2Gp8eqGguYQDkzDpDcgGeJlh9aBuB0txflLJiqYsOWOiFJX9hCyIWyjFF0KccAZEJdhG24vI1V8OUUs%2Bdy7vhklfs5UVzUBNqim%2BtB3QISzQZCovUINEgzow43w92BLg3tg5%2Fh%2F%2FL6WneWpECS65kcIvkuAuk0KAachFpTPf2OlxGrhjF19n52gPz%2BZ4invLcszuf9DX4FyAqYHLrfn6uWuHzzWo1IpuZkOnq3GYHBldHrLcnaw72GySLoLaRHRRt5%2Fsf9ft%2BhmZYFpy9EIwh6c39IlThMgxZPIUIymRclxKJuzilPw3kmBYi%2FrC%2FjGDLSi1IWk2%2FHmzL%2F5ln2WhiKs7bKFnaEXskicEWyuwaqiM%2BDQwuXbV%2FiStToZz2unZ%2BpaZnXrtgmwaBXtKRXUzD5oovDBjqkAQqkG%2B9Sr7O78dG4tUHCJUpbeCEjZnMC0ZK7I1fu9VzA33TQO7vlPu4e7XbGX%2FSZAXx0S6Oy%2F0rOu4kEK3TTXvghcBaWKdvC%2Bv%2Bk5LVVFVnRxTbvzrmAiUM7KOD2S36PDtukqzf7GTDHQdBN6ZvrAen76muLr6VeFQKTvMGx4qO7diR0h%2F1D%2FGqPVIuc%2FTel8t3r5r5oQZhvpd0044X4BESl%2F9oY&X-Amz-Signature=e36be9f9fd4400cb83d82d8a013d75fdfa51b5107660a3537bd706af6d93c722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCZ6WOSD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZyAnzG%2FKv2GUAFOk7qnTIdYgyeUhcRCC8fJv2zcjjwIhALheKAxH6N1nV212ACJw2tb%2ByHZuCZ4%2FU5aI8HjKc8HIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3mL7xxT5SyPg0AYq3AM0tEvSbhhKAoyItk9B%2Fz8DTYLIMQncBlWKHVthS6pClxqog%2F34pWrIjqW2QhlAcSRAMzg%2B0kitVjnXDOPuISbb4IbHqY1eLiA7KHUsHNmx3%2FvYGEqPKZ9j3UyFrKmdgTPZJqSPfa6%2BvCnpFuhOmxz2dO6BpmmnCuQDG0hJIEr7VulGaXjduxFNGjSzxZW%2Fmv3u3qWxUGrXwG84JhtITgaUOqDKE5PFaWF5MT%2BgaN2Gp8eqGguYQDkzDpDcgGeJlh9aBuB0txflLJiqYsOWOiFJX9hCyIWyjFF0KccAZEJdhG24vI1V8OUUs%2Bdy7vhklfs5UVzUBNqim%2BtB3QISzQZCovUINEgzow43w92BLg3tg5%2Fh%2F%2FL6WneWpECS65kcIvkuAuk0KAachFpTPf2OlxGrhjF19n52gPz%2BZ4invLcszuf9DX4FyAqYHLrfn6uWuHzzWo1IpuZkOnq3GYHBldHrLcnaw72GySLoLaRHRRt5%2Fsf9ft%2BhmZYFpy9EIwh6c39IlThMgxZPIUIymRclxKJuzilPw3kmBYi%2FrC%2FjGDLSi1IWk2%2FHmzL%2F5ln2WhiKs7bKFnaEXskicEWyuwaqiM%2BDQwuXbV%2FiStToZz2unZ%2BpaZnXrtgmwaBXtKRXUzD5oovDBjqkAQqkG%2B9Sr7O78dG4tUHCJUpbeCEjZnMC0ZK7I1fu9VzA33TQO7vlPu4e7XbGX%2FSZAXx0S6Oy%2F0rOu4kEK3TTXvghcBaWKdvC%2Bv%2Bk5LVVFVnRxTbvzrmAiUM7KOD2S36PDtukqzf7GTDHQdBN6ZvrAen76muLr6VeFQKTvMGx4qO7diR0h%2F1D%2FGqPVIuc%2FTel8t3r5r5oQZhvpd0044X4BESl%2F9oY&X-Amz-Signature=81ffa3c050b501ae22d04cc0255bf8b13b5d1f35b05bcefea90e0a0679da027c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
