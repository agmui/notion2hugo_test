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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQOP3UX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDDlwXltSP262vZ6JgZWs32HYPGQCfcyLJNaPCDYmVv%2FAiEArZiaTe3khlWOEKWZkHx%2FHI9q%2FdL4eki4iLcthvnHh7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMIlLRtjbPTHwfZCrcA%2Fm2wCbA6gXpY9ULjSjYyuO%2B6LfiAjoPVe6zWpVnK5iNUikxWEOAVSyuoqZjqjMaTz%2F0Z%2Fa6Q%2FZXh1qmr5VFXV6hxG1aFyDynRhOlH9TavqSN%2BF1O0TeJTIEbbhVFycGegS3NCwyowiwVMSi6o6Kh7CuWKfGGKisV7fuZM8cRWwGwD%2BwrS%2FnyGzXqo6qYlPPLvFJbe%2BD3hgNlKeDEdMrEiChXs51CV9hyXshsRl%2F0ZtIQb9Xf6GrkbMf9YxqPyJeRBJOGDLziAQtsojleP9prXiOb4ypgc9bfGMABqj6ZXYHAg7003m6zNYUWB2xMBN6Rrh%2BfQtIlaKKKfPsv71X3W8ieNM6%2F3h5oCMs3Ni0cw%2FGY8TohDP2dR9lsfIt8AI4mfodjaOS5TvLsFEpdNSjkV9NqcZRSYoB5jljdl7vuscsXwyw%2FAVaiwBalBv1Bqoc8WsnZsJWaAZX4JUOXA4gBZD7B6OgmtgnWQ9BY1XXzn1a1AgXGIGl8l7j21lG1BlYUMyPjLV%2BjD4msjlGuHyYeEWDphbQfJH3OV5xFn2%2BeHvDH%2FvShYVgg9CtR0%2FuYGn67%2BeWm7mYNoqvGqKmd6zXOsNeSMCeGO6n8WYyl9MJZMF1J7VzSi0gdv585%2BPIMIX958MGOqUB2UpXTlufe6QQtqUlRHs7xVBKS9ph%2F8Vd6YAAc9KcPevQwqTNCGs86utggwAEcsCktSAmeLe4aAAg1slbDQKml8aeqC6ch9SnA2rKUyyIJK9HijDrCD5f5S5u2Dw7vElG9FvRfUdcxSwSwInzywtOJkuc9I8vvjR1UXrRb56K5l0%2Fd7jVd15N5xhc9d60p1ZPzn5lVj9wIC%2Byf7k3kjafR0py%2Bdfx&X-Amz-Signature=f2a365d6269581be3e9d346e305aa0ac90248511c7a7718d8125f0e2a5451f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQOP3UX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDDlwXltSP262vZ6JgZWs32HYPGQCfcyLJNaPCDYmVv%2FAiEArZiaTe3khlWOEKWZkHx%2FHI9q%2FdL4eki4iLcthvnHh7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMIlLRtjbPTHwfZCrcA%2Fm2wCbA6gXpY9ULjSjYyuO%2B6LfiAjoPVe6zWpVnK5iNUikxWEOAVSyuoqZjqjMaTz%2F0Z%2Fa6Q%2FZXh1qmr5VFXV6hxG1aFyDynRhOlH9TavqSN%2BF1O0TeJTIEbbhVFycGegS3NCwyowiwVMSi6o6Kh7CuWKfGGKisV7fuZM8cRWwGwD%2BwrS%2FnyGzXqo6qYlPPLvFJbe%2BD3hgNlKeDEdMrEiChXs51CV9hyXshsRl%2F0ZtIQb9Xf6GrkbMf9YxqPyJeRBJOGDLziAQtsojleP9prXiOb4ypgc9bfGMABqj6ZXYHAg7003m6zNYUWB2xMBN6Rrh%2BfQtIlaKKKfPsv71X3W8ieNM6%2F3h5oCMs3Ni0cw%2FGY8TohDP2dR9lsfIt8AI4mfodjaOS5TvLsFEpdNSjkV9NqcZRSYoB5jljdl7vuscsXwyw%2FAVaiwBalBv1Bqoc8WsnZsJWaAZX4JUOXA4gBZD7B6OgmtgnWQ9BY1XXzn1a1AgXGIGl8l7j21lG1BlYUMyPjLV%2BjD4msjlGuHyYeEWDphbQfJH3OV5xFn2%2BeHvDH%2FvShYVgg9CtR0%2FuYGn67%2BeWm7mYNoqvGqKmd6zXOsNeSMCeGO6n8WYyl9MJZMF1J7VzSi0gdv585%2BPIMIX958MGOqUB2UpXTlufe6QQtqUlRHs7xVBKS9ph%2F8Vd6YAAc9KcPevQwqTNCGs86utggwAEcsCktSAmeLe4aAAg1slbDQKml8aeqC6ch9SnA2rKUyyIJK9HijDrCD5f5S5u2Dw7vElG9FvRfUdcxSwSwInzywtOJkuc9I8vvjR1UXrRb56K5l0%2Fd7jVd15N5xhc9d60p1ZPzn5lVj9wIC%2Byf7k3kjafR0py%2Bdfx&X-Amz-Signature=d7fcee93e1249724035bd6641f73b7efd29091583ddf780065a7996ba74570d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQOP3UX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDDlwXltSP262vZ6JgZWs32HYPGQCfcyLJNaPCDYmVv%2FAiEArZiaTe3khlWOEKWZkHx%2FHI9q%2FdL4eki4iLcthvnHh7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMIlLRtjbPTHwfZCrcA%2Fm2wCbA6gXpY9ULjSjYyuO%2B6LfiAjoPVe6zWpVnK5iNUikxWEOAVSyuoqZjqjMaTz%2F0Z%2Fa6Q%2FZXh1qmr5VFXV6hxG1aFyDynRhOlH9TavqSN%2BF1O0TeJTIEbbhVFycGegS3NCwyowiwVMSi6o6Kh7CuWKfGGKisV7fuZM8cRWwGwD%2BwrS%2FnyGzXqo6qYlPPLvFJbe%2BD3hgNlKeDEdMrEiChXs51CV9hyXshsRl%2F0ZtIQb9Xf6GrkbMf9YxqPyJeRBJOGDLziAQtsojleP9prXiOb4ypgc9bfGMABqj6ZXYHAg7003m6zNYUWB2xMBN6Rrh%2BfQtIlaKKKfPsv71X3W8ieNM6%2F3h5oCMs3Ni0cw%2FGY8TohDP2dR9lsfIt8AI4mfodjaOS5TvLsFEpdNSjkV9NqcZRSYoB5jljdl7vuscsXwyw%2FAVaiwBalBv1Bqoc8WsnZsJWaAZX4JUOXA4gBZD7B6OgmtgnWQ9BY1XXzn1a1AgXGIGl8l7j21lG1BlYUMyPjLV%2BjD4msjlGuHyYeEWDphbQfJH3OV5xFn2%2BeHvDH%2FvShYVgg9CtR0%2FuYGn67%2BeWm7mYNoqvGqKmd6zXOsNeSMCeGO6n8WYyl9MJZMF1J7VzSi0gdv585%2BPIMIX958MGOqUB2UpXTlufe6QQtqUlRHs7xVBKS9ph%2F8Vd6YAAc9KcPevQwqTNCGs86utggwAEcsCktSAmeLe4aAAg1slbDQKml8aeqC6ch9SnA2rKUyyIJK9HijDrCD5f5S5u2Dw7vElG9FvRfUdcxSwSwInzywtOJkuc9I8vvjR1UXrRb56K5l0%2Fd7jVd15N5xhc9d60p1ZPzn5lVj9wIC%2Byf7k3kjafR0py%2Bdfx&X-Amz-Signature=8e667e724080bea8de30060bb6a662ab25a8781eef7c593bdf939bd361fbba6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQOP3UX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDDlwXltSP262vZ6JgZWs32HYPGQCfcyLJNaPCDYmVv%2FAiEArZiaTe3khlWOEKWZkHx%2FHI9q%2FdL4eki4iLcthvnHh7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMIlLRtjbPTHwfZCrcA%2Fm2wCbA6gXpY9ULjSjYyuO%2B6LfiAjoPVe6zWpVnK5iNUikxWEOAVSyuoqZjqjMaTz%2F0Z%2Fa6Q%2FZXh1qmr5VFXV6hxG1aFyDynRhOlH9TavqSN%2BF1O0TeJTIEbbhVFycGegS3NCwyowiwVMSi6o6Kh7CuWKfGGKisV7fuZM8cRWwGwD%2BwrS%2FnyGzXqo6qYlPPLvFJbe%2BD3hgNlKeDEdMrEiChXs51CV9hyXshsRl%2F0ZtIQb9Xf6GrkbMf9YxqPyJeRBJOGDLziAQtsojleP9prXiOb4ypgc9bfGMABqj6ZXYHAg7003m6zNYUWB2xMBN6Rrh%2BfQtIlaKKKfPsv71X3W8ieNM6%2F3h5oCMs3Ni0cw%2FGY8TohDP2dR9lsfIt8AI4mfodjaOS5TvLsFEpdNSjkV9NqcZRSYoB5jljdl7vuscsXwyw%2FAVaiwBalBv1Bqoc8WsnZsJWaAZX4JUOXA4gBZD7B6OgmtgnWQ9BY1XXzn1a1AgXGIGl8l7j21lG1BlYUMyPjLV%2BjD4msjlGuHyYeEWDphbQfJH3OV5xFn2%2BeHvDH%2FvShYVgg9CtR0%2FuYGn67%2BeWm7mYNoqvGqKmd6zXOsNeSMCeGO6n8WYyl9MJZMF1J7VzSi0gdv585%2BPIMIX958MGOqUB2UpXTlufe6QQtqUlRHs7xVBKS9ph%2F8Vd6YAAc9KcPevQwqTNCGs86utggwAEcsCktSAmeLe4aAAg1slbDQKml8aeqC6ch9SnA2rKUyyIJK9HijDrCD5f5S5u2Dw7vElG9FvRfUdcxSwSwInzywtOJkuc9I8vvjR1UXrRb56K5l0%2Fd7jVd15N5xhc9d60p1ZPzn5lVj9wIC%2Byf7k3kjafR0py%2Bdfx&X-Amz-Signature=b99d203c516f84296c75cd3ffe91ba7782f69eb8addbdc9eace7ead255f31bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQOP3UX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDDlwXltSP262vZ6JgZWs32HYPGQCfcyLJNaPCDYmVv%2FAiEArZiaTe3khlWOEKWZkHx%2FHI9q%2FdL4eki4iLcthvnHh7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMIlLRtjbPTHwfZCrcA%2Fm2wCbA6gXpY9ULjSjYyuO%2B6LfiAjoPVe6zWpVnK5iNUikxWEOAVSyuoqZjqjMaTz%2F0Z%2Fa6Q%2FZXh1qmr5VFXV6hxG1aFyDynRhOlH9TavqSN%2BF1O0TeJTIEbbhVFycGegS3NCwyowiwVMSi6o6Kh7CuWKfGGKisV7fuZM8cRWwGwD%2BwrS%2FnyGzXqo6qYlPPLvFJbe%2BD3hgNlKeDEdMrEiChXs51CV9hyXshsRl%2F0ZtIQb9Xf6GrkbMf9YxqPyJeRBJOGDLziAQtsojleP9prXiOb4ypgc9bfGMABqj6ZXYHAg7003m6zNYUWB2xMBN6Rrh%2BfQtIlaKKKfPsv71X3W8ieNM6%2F3h5oCMs3Ni0cw%2FGY8TohDP2dR9lsfIt8AI4mfodjaOS5TvLsFEpdNSjkV9NqcZRSYoB5jljdl7vuscsXwyw%2FAVaiwBalBv1Bqoc8WsnZsJWaAZX4JUOXA4gBZD7B6OgmtgnWQ9BY1XXzn1a1AgXGIGl8l7j21lG1BlYUMyPjLV%2BjD4msjlGuHyYeEWDphbQfJH3OV5xFn2%2BeHvDH%2FvShYVgg9CtR0%2FuYGn67%2BeWm7mYNoqvGqKmd6zXOsNeSMCeGO6n8WYyl9MJZMF1J7VzSi0gdv585%2BPIMIX958MGOqUB2UpXTlufe6QQtqUlRHs7xVBKS9ph%2F8Vd6YAAc9KcPevQwqTNCGs86utggwAEcsCktSAmeLe4aAAg1slbDQKml8aeqC6ch9SnA2rKUyyIJK9HijDrCD5f5S5u2Dw7vElG9FvRfUdcxSwSwInzywtOJkuc9I8vvjR1UXrRb56K5l0%2Fd7jVd15N5xhc9d60p1ZPzn5lVj9wIC%2Byf7k3kjafR0py%2Bdfx&X-Amz-Signature=0e78707964491b7bae9bd5e617dac80b4d84f3d858ca73a22e174413954bfb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LQOP3UX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDDlwXltSP262vZ6JgZWs32HYPGQCfcyLJNaPCDYmVv%2FAiEArZiaTe3khlWOEKWZkHx%2FHI9q%2FdL4eki4iLcthvnHh7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaMIlLRtjbPTHwfZCrcA%2Fm2wCbA6gXpY9ULjSjYyuO%2B6LfiAjoPVe6zWpVnK5iNUikxWEOAVSyuoqZjqjMaTz%2F0Z%2Fa6Q%2FZXh1qmr5VFXV6hxG1aFyDynRhOlH9TavqSN%2BF1O0TeJTIEbbhVFycGegS3NCwyowiwVMSi6o6Kh7CuWKfGGKisV7fuZM8cRWwGwD%2BwrS%2FnyGzXqo6qYlPPLvFJbe%2BD3hgNlKeDEdMrEiChXs51CV9hyXshsRl%2F0ZtIQb9Xf6GrkbMf9YxqPyJeRBJOGDLziAQtsojleP9prXiOb4ypgc9bfGMABqj6ZXYHAg7003m6zNYUWB2xMBN6Rrh%2BfQtIlaKKKfPsv71X3W8ieNM6%2F3h5oCMs3Ni0cw%2FGY8TohDP2dR9lsfIt8AI4mfodjaOS5TvLsFEpdNSjkV9NqcZRSYoB5jljdl7vuscsXwyw%2FAVaiwBalBv1Bqoc8WsnZsJWaAZX4JUOXA4gBZD7B6OgmtgnWQ9BY1XXzn1a1AgXGIGl8l7j21lG1BlYUMyPjLV%2BjD4msjlGuHyYeEWDphbQfJH3OV5xFn2%2BeHvDH%2FvShYVgg9CtR0%2FuYGn67%2BeWm7mYNoqvGqKmd6zXOsNeSMCeGO6n8WYyl9MJZMF1J7VzSi0gdv585%2BPIMIX958MGOqUB2UpXTlufe6QQtqUlRHs7xVBKS9ph%2F8Vd6YAAc9KcPevQwqTNCGs86utggwAEcsCktSAmeLe4aAAg1slbDQKml8aeqC6ch9SnA2rKUyyIJK9HijDrCD5f5S5u2Dw7vElG9FvRfUdcxSwSwInzywtOJkuc9I8vvjR1UXrRb56K5l0%2Fd7jVd15N5xhc9d60p1ZPzn5lVj9wIC%2Byf7k3kjafR0py%2Bdfx&X-Amz-Signature=94add6c69fc41de3e0ed5672e73242431db15590169126ae27eec47386867871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
