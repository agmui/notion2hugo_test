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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=d651a08faff622b3391202c84c488fe36d75259537a12df5024eda5f593ea676&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=e06ee0fba94691518de8f6a4ebe0911ca92c39a471d09450fed3074e5b888eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=e68d0ba51562c6489bd614e080364a7aefdf0c224d33449a040d3830982e79ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=926c845ab6a47b33806caf7d5a95dd498c9c53259e594c711aacf2fecd019a06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=8851af2afff30d0ebbf91d2909baee7d6c57fe372fd018d4a28ed5c1d374380c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=93a0f9a7774eb93f43adbda61b2831ff9762d4ccf92455347045177efedaee24&X-Amz-SignedHeaders=host&x-id=GetObject)
