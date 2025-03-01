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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=15aec73ae2309d652d0d18b962c6441dc3686adfdf7615afa4a267ae76ea6890&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=ba9e21304977a6d5ee082db6ea49dc711860831cf08c674138be4ff2f10b733d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=48247f44e3e424b82738c3b2fbcf3c259dcd976b0855539b9596bf27b2de55c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=83e8f0c0af382f0d3c337a2588c0b59765d2dda9da7c78e3894d821408702e18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=a2c60e0c98c83238d686a853213576144291278434067f7f60e874017aa06e69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCU5PHG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDK8mtoT%2Brbv3Bl6ot4zQxY0nupjR7RgmgWAs1f%2F5WiNAIgHM7U8TLacn5%2FOgQcKFFpfieGbYOaQEKOuaYxj%2FI1nKsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2BAKXL7R02r7oFJircA8oQsdTm5NKUoa%2Bo4W5zStQ8AxLFFiiK%2FBQEBksh8HhwEUlhTetQvKISj4eJcgWd91zDeD4EiIOwA9EKZqQXn2n8JWUqJK5JXW3WeRa4xZKb2zoC6HYEL%2FL9xz5tzqnojIhqdBAxsjm5PjPAyz0lV0pYMmJzeUQ58hSy7x48IdVY3F8S7%2FCQ2RKLrL6IP0WpZtuPeB33P40CNHJ0UWkr8ZOH61VdrBBotUiY2tR9IU%2FDWSJ%2FLHYL7T2bCDEhIbMT%2F1lqoj2ODpmL38blQH6%2FGdr%2FbBpYsWbeRZ9lBQ1r2A2K5X%2B60Y10gUQpFHi2WW0Yo%2B9D9J%2FZCWGzj%2BJREuITw71fhcVgmZIdZuep5yvEHVWy52B3hH8zh6D2gMB8Sl9rzx3jVYqDi%2FoCaOrsc007wlZghu64w08T0tU1jlWvDLreUqmp9ZEv0pJr0Cv8KhbAiojN3NsfSUCFd%2B5bR2mf8AyNT9E6WvvyrqRh0XgveDlyFSH7WCNKJC9UD%2FvL2gAUYt0QnA0yOFbWWoWiEITkPrdzM%2B8Y6J3LOA1QUBF6Or89GYxWtzEuAoSq3WCq64GD7OJsrjZPlAjYA%2BiXkzhJb%2Bajb6PJC9NoPR0VWENORx2SxzZD4z%2FkMHnQVd3KMKiVjL4GOqUB1gdTuyA0HhcxhyAFiQvL5eI%2BUoyAxC6A1ey7rjultY4VNUq3h8zbTIt%2By6cARtiEJx4gkn6ODVKRV6HlMYVTIf6Ob4JZuKh1OY8NuuEPzINcq%2Bu7fDYfX%2FUBuSng98SaKa6pM6NCbMbG8j2zpXesrOyLSEJZASBqPPCBNT1MxjpJyC3eZXdOhOs22NfmDYCW1Pde4wcGi4e6TGD7pdOzKfoNVuKy&X-Amz-Signature=303d0b8ca3b86371ec2bb53ccb5af6548a869a560a8e24eba02389e5ed733899&X-Amz-SignedHeaders=host&x-id=GetObject)
