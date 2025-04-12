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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR65QXF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIQChN8M5tUR%2BbOTR%2B4kcJ7u9fkustavlmMptpWiU1HxjqAIfZtfmRLeePuun98E2LIunn5Ovfnoefp6YitzsTfOpIyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y4YDeyosbx1SCC4KtwDv5ZMc9oT5CD9BkJwkH4r5qRaZqy41ydoTyAtsbN7h562mQ9Kk3zRMCCaeT9ES4pyvlJ6M%2BNouJx5XJIv34%2Bcj5UgsWdeLTaO5sJH0xtbidW1H%2FYTNtBrny92lDrQn5Jz%2Fi9%2Bd9AUgAFjmxxVbytZmWlZGSOVySfcpOsycMgjdOqoVaRZ%2BVKMIHt0uRxy1h%2B0jeZ5CXUl%2F0psYOOnZcCoR0n3NBcHjkF%2FZiThQ9FD8hmAnumRXKclIgIOWlgeMJSUjyYs7WpBWGP%2BylCUIjp0FcxwoyMELja0LLseIGazFKWgolXwiGoWpbKpvFIMUBPA%2BeWrfyA2AO9KVA3AokncunsVvPZDjm%2BhhaNpfJNpe%2F7xd%2FOEKndQseE%2FHJr%2FFLRAX%2BRXg2J34WRsmK8yT533gujrsaY9ZrVMYP1CpkHlXF75XkOC2okHts8rAN%2BY494xYyLv%2B%2FPA3f8b7sG9gw8eaQd7EAhxCpILvjq2mU4Hfkirm0TX0scSaMLVeauIkdNAZLVBGxmmfUGIYsf9Fm%2B6TzuoH90rShxwC2KPwhKylWMN3s3sWO1dKJsLwsxbFBc8Ct%2BRACOEthZkqYiLrNb%2F822z0hmj1k3EXQ6fh2JE8mZHqghLHyvLkRieqJQw%2BPrpvwY6pgGeRq%2B2LE6L85B6nWeVkA7QR1QMvHDZrVB9dskZLmD9gybkO70CiDqsv4HArCi6bCIhkQ09%2F9KpyFrwzeiqo9dBWNIzX36vzepOawcj4MlUD3UsrK6Z%2BK0hL3Ig2MDVkz%2B6B1RARlIHUeaVbpNkLtJV%2F8vnNNdVKw6BQFY%2FKO3RuX2tFsIT%2FVPJhDQ4clBrqx8W3oQ8I5wbcg%2F%2BZsj0VfTcA1UsRyfy&X-Amz-Signature=d149f27b7c11cf0e49a50c4c62b592b8be1877a2c22bef70407cb596614f7947&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR65QXF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIQChN8M5tUR%2BbOTR%2B4kcJ7u9fkustavlmMptpWiU1HxjqAIfZtfmRLeePuun98E2LIunn5Ovfnoefp6YitzsTfOpIyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y4YDeyosbx1SCC4KtwDv5ZMc9oT5CD9BkJwkH4r5qRaZqy41ydoTyAtsbN7h562mQ9Kk3zRMCCaeT9ES4pyvlJ6M%2BNouJx5XJIv34%2Bcj5UgsWdeLTaO5sJH0xtbidW1H%2FYTNtBrny92lDrQn5Jz%2Fi9%2Bd9AUgAFjmxxVbytZmWlZGSOVySfcpOsycMgjdOqoVaRZ%2BVKMIHt0uRxy1h%2B0jeZ5CXUl%2F0psYOOnZcCoR0n3NBcHjkF%2FZiThQ9FD8hmAnumRXKclIgIOWlgeMJSUjyYs7WpBWGP%2BylCUIjp0FcxwoyMELja0LLseIGazFKWgolXwiGoWpbKpvFIMUBPA%2BeWrfyA2AO9KVA3AokncunsVvPZDjm%2BhhaNpfJNpe%2F7xd%2FOEKndQseE%2FHJr%2FFLRAX%2BRXg2J34WRsmK8yT533gujrsaY9ZrVMYP1CpkHlXF75XkOC2okHts8rAN%2BY494xYyLv%2B%2FPA3f8b7sG9gw8eaQd7EAhxCpILvjq2mU4Hfkirm0TX0scSaMLVeauIkdNAZLVBGxmmfUGIYsf9Fm%2B6TzuoH90rShxwC2KPwhKylWMN3s3sWO1dKJsLwsxbFBc8Ct%2BRACOEthZkqYiLrNb%2F822z0hmj1k3EXQ6fh2JE8mZHqghLHyvLkRieqJQw%2BPrpvwY6pgGeRq%2B2LE6L85B6nWeVkA7QR1QMvHDZrVB9dskZLmD9gybkO70CiDqsv4HArCi6bCIhkQ09%2F9KpyFrwzeiqo9dBWNIzX36vzepOawcj4MlUD3UsrK6Z%2BK0hL3Ig2MDVkz%2B6B1RARlIHUeaVbpNkLtJV%2F8vnNNdVKw6BQFY%2FKO3RuX2tFsIT%2FVPJhDQ4clBrqx8W3oQ8I5wbcg%2F%2BZsj0VfTcA1UsRyfy&X-Amz-Signature=359e07946e54f415dc5cf1e7268bdad85ccbf317d16c86cab2ad7ea8e14f819e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR65QXF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIQChN8M5tUR%2BbOTR%2B4kcJ7u9fkustavlmMptpWiU1HxjqAIfZtfmRLeePuun98E2LIunn5Ovfnoefp6YitzsTfOpIyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y4YDeyosbx1SCC4KtwDv5ZMc9oT5CD9BkJwkH4r5qRaZqy41ydoTyAtsbN7h562mQ9Kk3zRMCCaeT9ES4pyvlJ6M%2BNouJx5XJIv34%2Bcj5UgsWdeLTaO5sJH0xtbidW1H%2FYTNtBrny92lDrQn5Jz%2Fi9%2Bd9AUgAFjmxxVbytZmWlZGSOVySfcpOsycMgjdOqoVaRZ%2BVKMIHt0uRxy1h%2B0jeZ5CXUl%2F0psYOOnZcCoR0n3NBcHjkF%2FZiThQ9FD8hmAnumRXKclIgIOWlgeMJSUjyYs7WpBWGP%2BylCUIjp0FcxwoyMELja0LLseIGazFKWgolXwiGoWpbKpvFIMUBPA%2BeWrfyA2AO9KVA3AokncunsVvPZDjm%2BhhaNpfJNpe%2F7xd%2FOEKndQseE%2FHJr%2FFLRAX%2BRXg2J34WRsmK8yT533gujrsaY9ZrVMYP1CpkHlXF75XkOC2okHts8rAN%2BY494xYyLv%2B%2FPA3f8b7sG9gw8eaQd7EAhxCpILvjq2mU4Hfkirm0TX0scSaMLVeauIkdNAZLVBGxmmfUGIYsf9Fm%2B6TzuoH90rShxwC2KPwhKylWMN3s3sWO1dKJsLwsxbFBc8Ct%2BRACOEthZkqYiLrNb%2F822z0hmj1k3EXQ6fh2JE8mZHqghLHyvLkRieqJQw%2BPrpvwY6pgGeRq%2B2LE6L85B6nWeVkA7QR1QMvHDZrVB9dskZLmD9gybkO70CiDqsv4HArCi6bCIhkQ09%2F9KpyFrwzeiqo9dBWNIzX36vzepOawcj4MlUD3UsrK6Z%2BK0hL3Ig2MDVkz%2B6B1RARlIHUeaVbpNkLtJV%2F8vnNNdVKw6BQFY%2FKO3RuX2tFsIT%2FVPJhDQ4clBrqx8W3oQ8I5wbcg%2F%2BZsj0VfTcA1UsRyfy&X-Amz-Signature=c060d184b7df2865819b5ad3c41be3c20e80332958a5f59fc1b9c6e52638e640&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR65QXF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIQChN8M5tUR%2BbOTR%2B4kcJ7u9fkustavlmMptpWiU1HxjqAIfZtfmRLeePuun98E2LIunn5Ovfnoefp6YitzsTfOpIyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y4YDeyosbx1SCC4KtwDv5ZMc9oT5CD9BkJwkH4r5qRaZqy41ydoTyAtsbN7h562mQ9Kk3zRMCCaeT9ES4pyvlJ6M%2BNouJx5XJIv34%2Bcj5UgsWdeLTaO5sJH0xtbidW1H%2FYTNtBrny92lDrQn5Jz%2Fi9%2Bd9AUgAFjmxxVbytZmWlZGSOVySfcpOsycMgjdOqoVaRZ%2BVKMIHt0uRxy1h%2B0jeZ5CXUl%2F0psYOOnZcCoR0n3NBcHjkF%2FZiThQ9FD8hmAnumRXKclIgIOWlgeMJSUjyYs7WpBWGP%2BylCUIjp0FcxwoyMELja0LLseIGazFKWgolXwiGoWpbKpvFIMUBPA%2BeWrfyA2AO9KVA3AokncunsVvPZDjm%2BhhaNpfJNpe%2F7xd%2FOEKndQseE%2FHJr%2FFLRAX%2BRXg2J34WRsmK8yT533gujrsaY9ZrVMYP1CpkHlXF75XkOC2okHts8rAN%2BY494xYyLv%2B%2FPA3f8b7sG9gw8eaQd7EAhxCpILvjq2mU4Hfkirm0TX0scSaMLVeauIkdNAZLVBGxmmfUGIYsf9Fm%2B6TzuoH90rShxwC2KPwhKylWMN3s3sWO1dKJsLwsxbFBc8Ct%2BRACOEthZkqYiLrNb%2F822z0hmj1k3EXQ6fh2JE8mZHqghLHyvLkRieqJQw%2BPrpvwY6pgGeRq%2B2LE6L85B6nWeVkA7QR1QMvHDZrVB9dskZLmD9gybkO70CiDqsv4HArCi6bCIhkQ09%2F9KpyFrwzeiqo9dBWNIzX36vzepOawcj4MlUD3UsrK6Z%2BK0hL3Ig2MDVkz%2B6B1RARlIHUeaVbpNkLtJV%2F8vnNNdVKw6BQFY%2FKO3RuX2tFsIT%2FVPJhDQ4clBrqx8W3oQ8I5wbcg%2F%2BZsj0VfTcA1UsRyfy&X-Amz-Signature=51a17f3c6f910f3e1d09db17793717d1b6461a9f4a8b8e44fc29aad4d4fcebf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR65QXF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIQChN8M5tUR%2BbOTR%2B4kcJ7u9fkustavlmMptpWiU1HxjqAIfZtfmRLeePuun98E2LIunn5Ovfnoefp6YitzsTfOpIyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y4YDeyosbx1SCC4KtwDv5ZMc9oT5CD9BkJwkH4r5qRaZqy41ydoTyAtsbN7h562mQ9Kk3zRMCCaeT9ES4pyvlJ6M%2BNouJx5XJIv34%2Bcj5UgsWdeLTaO5sJH0xtbidW1H%2FYTNtBrny92lDrQn5Jz%2Fi9%2Bd9AUgAFjmxxVbytZmWlZGSOVySfcpOsycMgjdOqoVaRZ%2BVKMIHt0uRxy1h%2B0jeZ5CXUl%2F0psYOOnZcCoR0n3NBcHjkF%2FZiThQ9FD8hmAnumRXKclIgIOWlgeMJSUjyYs7WpBWGP%2BylCUIjp0FcxwoyMELja0LLseIGazFKWgolXwiGoWpbKpvFIMUBPA%2BeWrfyA2AO9KVA3AokncunsVvPZDjm%2BhhaNpfJNpe%2F7xd%2FOEKndQseE%2FHJr%2FFLRAX%2BRXg2J34WRsmK8yT533gujrsaY9ZrVMYP1CpkHlXF75XkOC2okHts8rAN%2BY494xYyLv%2B%2FPA3f8b7sG9gw8eaQd7EAhxCpILvjq2mU4Hfkirm0TX0scSaMLVeauIkdNAZLVBGxmmfUGIYsf9Fm%2B6TzuoH90rShxwC2KPwhKylWMN3s3sWO1dKJsLwsxbFBc8Ct%2BRACOEthZkqYiLrNb%2F822z0hmj1k3EXQ6fh2JE8mZHqghLHyvLkRieqJQw%2BPrpvwY6pgGeRq%2B2LE6L85B6nWeVkA7QR1QMvHDZrVB9dskZLmD9gybkO70CiDqsv4HArCi6bCIhkQ09%2F9KpyFrwzeiqo9dBWNIzX36vzepOawcj4MlUD3UsrK6Z%2BK0hL3Ig2MDVkz%2B6B1RARlIHUeaVbpNkLtJV%2F8vnNNdVKw6BQFY%2FKO3RuX2tFsIT%2FVPJhDQ4clBrqx8W3oQ8I5wbcg%2F%2BZsj0VfTcA1UsRyfy&X-Amz-Signature=63d9b0a8c46bb435fda2dd0df688549f5dba6202fb8afa7f25a8adbcf5500cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR65QXF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIQChN8M5tUR%2BbOTR%2B4kcJ7u9fkustavlmMptpWiU1HxjqAIfZtfmRLeePuun98E2LIunn5Ovfnoefp6YitzsTfOpIyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y4YDeyosbx1SCC4KtwDv5ZMc9oT5CD9BkJwkH4r5qRaZqy41ydoTyAtsbN7h562mQ9Kk3zRMCCaeT9ES4pyvlJ6M%2BNouJx5XJIv34%2Bcj5UgsWdeLTaO5sJH0xtbidW1H%2FYTNtBrny92lDrQn5Jz%2Fi9%2Bd9AUgAFjmxxVbytZmWlZGSOVySfcpOsycMgjdOqoVaRZ%2BVKMIHt0uRxy1h%2B0jeZ5CXUl%2F0psYOOnZcCoR0n3NBcHjkF%2FZiThQ9FD8hmAnumRXKclIgIOWlgeMJSUjyYs7WpBWGP%2BylCUIjp0FcxwoyMELja0LLseIGazFKWgolXwiGoWpbKpvFIMUBPA%2BeWrfyA2AO9KVA3AokncunsVvPZDjm%2BhhaNpfJNpe%2F7xd%2FOEKndQseE%2FHJr%2FFLRAX%2BRXg2J34WRsmK8yT533gujrsaY9ZrVMYP1CpkHlXF75XkOC2okHts8rAN%2BY494xYyLv%2B%2FPA3f8b7sG9gw8eaQd7EAhxCpILvjq2mU4Hfkirm0TX0scSaMLVeauIkdNAZLVBGxmmfUGIYsf9Fm%2B6TzuoH90rShxwC2KPwhKylWMN3s3sWO1dKJsLwsxbFBc8Ct%2BRACOEthZkqYiLrNb%2F822z0hmj1k3EXQ6fh2JE8mZHqghLHyvLkRieqJQw%2BPrpvwY6pgGeRq%2B2LE6L85B6nWeVkA7QR1QMvHDZrVB9dskZLmD9gybkO70CiDqsv4HArCi6bCIhkQ09%2F9KpyFrwzeiqo9dBWNIzX36vzepOawcj4MlUD3UsrK6Z%2BK0hL3Ig2MDVkz%2B6B1RARlIHUeaVbpNkLtJV%2F8vnNNdVKw6BQFY%2FKO3RuX2tFsIT%2FVPJhDQ4clBrqx8W3oQ8I5wbcg%2F%2BZsj0VfTcA1UsRyfy&X-Amz-Signature=b6bb08c7ce0ecf7e942ea98c668b1bfa3745b75bbb868183e0c8336029135534&X-Amz-SignedHeaders=host&x-id=GetObject)
