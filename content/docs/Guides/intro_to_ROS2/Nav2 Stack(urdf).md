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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=53fc28661f9c4bf908bb70016f0e2b0e04c0f4cfaa03ef2742f05984171cde28&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=a4804ea85102ac863a7533d47df328bdf5f580a4a7df6d6175a1430fc141776d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=eb3301f44fb988b1afa8f097fe15af75873a6f1302d56a348ffc741c67dd7f98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=eb6565e99b133a77e6166424394f463bd12e0991d8a6b062e7539386ccc2b240&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=2dbd3d3528ffbde61ef62cf0f8ad90762927e91a057fdc8605b77e1a32f36e18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LT3MXN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC2ZuZqAuQu1P1H3AFE7Qa1fQS3jqGGQY4Y3kfR9D%2BC4gIgeds078HStQErQQOzdyzrPnith1BG0e5g%2FZvLYLVU4JUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLet6D4RNh%2BOqbpPlyrcA0jzbQKUk45D%2BPvF%2FN7RF48xWUGRT8kIB3UlCNxpRZa9cYQ%2F4KEQ6pJzpkxouWZZLcRi6oyrwVMwVNvrxetmHtr6k9og5Y4ArWltLgaHeXx8uTpzaGdsX3h1X%2BNuNtMH9YrYND4TIKxs5Q1mTp%2Frz0cSAFA1bdvT8qGzo4CRZM7242usqNnJ9nTZ8qybYQBcryQy9rN1HeVwW%2FA1zW8JjsH7TMVATmm0YGvxOWXXam8vR58O5%2Bv%2B37D8RQU3x7gTVpNgtvf3o1K5BMImYr958A3yeKIj8Ik1Dj4PFSJDt4TxLYi1zi5OHhHSpndtY7GPVwxPCPBTLSb1c7896St0qkAMAK1Po7YdYUQZWydMkZpngVDJTiPf7%2BGrbO6zs6kdPd4gL1bC3HSwuQNl2XZ5aWmXNnxWk86jGMKBBB8JarVop1OPcxVd5X8GqFKf0Lptg2HITrUMAEMD7%2BXgffaKUzaQPmuhQ5KD%2Bjq%2FNNo4al20%2FZxV%2FOdc0i0Fw5gczE0jJW2aW0GHn8fT5DHzZ4D7ZzdNSrdp%2BJhTjf1v8AqkSJprsWqM8keyGOs4zYkhXQ%2BLKihcr%2BG87yLHlvyDIsZexR6uX01dh2fc9jtKlZLOgyCmhbnMuIYMqqDwoSoLMMH2r74GOqUBlpJQfgtdEWHYLaqFlwcU%2FG8rgc9HN2Q1BqCE7vjFgEg5i1%2FCYDJ4mC5Vl0ym6mjcbthfUGvb9ubqYqo3wWZ%2FmAvfohhPLzW3kUXkNly9HxNWGCN6sNhC7U1jGwTuAPv5Z7b4FluDcEM6U1lCsjtPZS88c03hooTkUEy%2BErf%2FiDzYYJVuojwZb4B6Sx1PXJ0v0N3poOBCs5LCmzOwXEzA03enGkE%2B&X-Amz-Signature=bee8ec16fd5092e6ace75c8610590ac71f039832795bfd8d39a182eccb844368&X-Amz-SignedHeaders=host&x-id=GetObject)
