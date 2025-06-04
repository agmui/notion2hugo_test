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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROQO6QU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHRl2FFU4jmRs0w6NyO9wogmHLvJgbdzdTLDZGvKUYS5AiBfG%2Bo%2FpfYOtGoI52FiJhwbq9E%2FWd2OIkzAoaJqVyb2sCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1jPgfnH7Spt%2BKTqCKtwDXfNXEbWTgFaPOdr%2Bo%2BsjZ0MWGkXvBpGxqpjGfB0nMgjqjJFJyi8IueC6oN6TYEzbB00Q72YOXMt2Z0YmFDuIxo4F33JlEiFk%2BaC5ddCchlf38e%2B2u6eFg79TrKUP5Or%2Ff3%2BPyanEf%2Fh5EaPlrs%2BNzn%2FI1IR9A16TlcS3yJuWeUzZrpSorZf9F%2FObYX5Rmju7yiFUCTl2T1GPHn3s8Qcgd2iMews0PkFy%2BhrLRO0MXlFM%2BPgPLaaZBEC5fmqdpHpF56DyOo1kYGlKa6QqwpO6QmI8Chb7GNndGV%2FPta0zKNGSBueuMkZX6zl8UwRCUh7rJvb0oMqmZRGAmuHjP8XPTdlMGxeV%2FFBjeRq5elV8LpdZ9PY1%2BsMbEzqasTB%2Fz8UK0jJz3YfE5cewkVQigltneyvmmXJz9sbqS8nIwGRgoaDvVye02bgdWXEId00wvzo62xy9Dj6IAmEM5zPEA64PMOxdbXj2eCi%2BiJEESDU04TDCQDMI9GaoyeTEKm2OCMXwSp0YfzDnoz36jYVTYDLnLN8Y50f15Y9yAwP0wHPeTS7MTEqyUFlhVaze3%2BLStpRCc4ncrYV5Lo6k995sArrY5qV8t6hcGchLQFhW36xf9%2FeJqeeMADsM40gc3ugwu6mBwgY6pgGhTnT4qgDmkrr3at9R1ylTj%2Fh%2Fa%2BxBgNrNJJkr9%2BewGxWvPfWzKsGNKytEY7Qgfik0tm0UeEhICEy4CGTzlxCvNnCo9JubFOWxt4AhQnJ2an8%2BLXMKEvvdwyW1jXTBPtNb29%2F%2BFRVsYA5izm%2BEkQuZ%2F5w%2Bgh8omtYHnAvZv6xFd3T3Qlrx5nOnCnguQ46rEAyG0c35yP7t%2FVXntQXoSueXwT6iSHA0&X-Amz-Signature=2f4df1167bf411450df6563d2d63baa5d08e3bc7734b4e0455a7c66056f99314&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROQO6QU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHRl2FFU4jmRs0w6NyO9wogmHLvJgbdzdTLDZGvKUYS5AiBfG%2Bo%2FpfYOtGoI52FiJhwbq9E%2FWd2OIkzAoaJqVyb2sCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1jPgfnH7Spt%2BKTqCKtwDXfNXEbWTgFaPOdr%2Bo%2BsjZ0MWGkXvBpGxqpjGfB0nMgjqjJFJyi8IueC6oN6TYEzbB00Q72YOXMt2Z0YmFDuIxo4F33JlEiFk%2BaC5ddCchlf38e%2B2u6eFg79TrKUP5Or%2Ff3%2BPyanEf%2Fh5EaPlrs%2BNzn%2FI1IR9A16TlcS3yJuWeUzZrpSorZf9F%2FObYX5Rmju7yiFUCTl2T1GPHn3s8Qcgd2iMews0PkFy%2BhrLRO0MXlFM%2BPgPLaaZBEC5fmqdpHpF56DyOo1kYGlKa6QqwpO6QmI8Chb7GNndGV%2FPta0zKNGSBueuMkZX6zl8UwRCUh7rJvb0oMqmZRGAmuHjP8XPTdlMGxeV%2FFBjeRq5elV8LpdZ9PY1%2BsMbEzqasTB%2Fz8UK0jJz3YfE5cewkVQigltneyvmmXJz9sbqS8nIwGRgoaDvVye02bgdWXEId00wvzo62xy9Dj6IAmEM5zPEA64PMOxdbXj2eCi%2BiJEESDU04TDCQDMI9GaoyeTEKm2OCMXwSp0YfzDnoz36jYVTYDLnLN8Y50f15Y9yAwP0wHPeTS7MTEqyUFlhVaze3%2BLStpRCc4ncrYV5Lo6k995sArrY5qV8t6hcGchLQFhW36xf9%2FeJqeeMADsM40gc3ugwu6mBwgY6pgGhTnT4qgDmkrr3at9R1ylTj%2Fh%2Fa%2BxBgNrNJJkr9%2BewGxWvPfWzKsGNKytEY7Qgfik0tm0UeEhICEy4CGTzlxCvNnCo9JubFOWxt4AhQnJ2an8%2BLXMKEvvdwyW1jXTBPtNb29%2F%2BFRVsYA5izm%2BEkQuZ%2F5w%2Bgh8omtYHnAvZv6xFd3T3Qlrx5nOnCnguQ46rEAyG0c35yP7t%2FVXntQXoSueXwT6iSHA0&X-Amz-Signature=f34d35f4dd1a1068cc5e0d9ebad68d59dc223a7baeced1d34af83b7a175236e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROQO6QU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHRl2FFU4jmRs0w6NyO9wogmHLvJgbdzdTLDZGvKUYS5AiBfG%2Bo%2FpfYOtGoI52FiJhwbq9E%2FWd2OIkzAoaJqVyb2sCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1jPgfnH7Spt%2BKTqCKtwDXfNXEbWTgFaPOdr%2Bo%2BsjZ0MWGkXvBpGxqpjGfB0nMgjqjJFJyi8IueC6oN6TYEzbB00Q72YOXMt2Z0YmFDuIxo4F33JlEiFk%2BaC5ddCchlf38e%2B2u6eFg79TrKUP5Or%2Ff3%2BPyanEf%2Fh5EaPlrs%2BNzn%2FI1IR9A16TlcS3yJuWeUzZrpSorZf9F%2FObYX5Rmju7yiFUCTl2T1GPHn3s8Qcgd2iMews0PkFy%2BhrLRO0MXlFM%2BPgPLaaZBEC5fmqdpHpF56DyOo1kYGlKa6QqwpO6QmI8Chb7GNndGV%2FPta0zKNGSBueuMkZX6zl8UwRCUh7rJvb0oMqmZRGAmuHjP8XPTdlMGxeV%2FFBjeRq5elV8LpdZ9PY1%2BsMbEzqasTB%2Fz8UK0jJz3YfE5cewkVQigltneyvmmXJz9sbqS8nIwGRgoaDvVye02bgdWXEId00wvzo62xy9Dj6IAmEM5zPEA64PMOxdbXj2eCi%2BiJEESDU04TDCQDMI9GaoyeTEKm2OCMXwSp0YfzDnoz36jYVTYDLnLN8Y50f15Y9yAwP0wHPeTS7MTEqyUFlhVaze3%2BLStpRCc4ncrYV5Lo6k995sArrY5qV8t6hcGchLQFhW36xf9%2FeJqeeMADsM40gc3ugwu6mBwgY6pgGhTnT4qgDmkrr3at9R1ylTj%2Fh%2Fa%2BxBgNrNJJkr9%2BewGxWvPfWzKsGNKytEY7Qgfik0tm0UeEhICEy4CGTzlxCvNnCo9JubFOWxt4AhQnJ2an8%2BLXMKEvvdwyW1jXTBPtNb29%2F%2BFRVsYA5izm%2BEkQuZ%2F5w%2Bgh8omtYHnAvZv6xFd3T3Qlrx5nOnCnguQ46rEAyG0c35yP7t%2FVXntQXoSueXwT6iSHA0&X-Amz-Signature=e1d812fae9837fc0b069f55efb538b7ee94055522deae45bc08fb53c0b426a22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROQO6QU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHRl2FFU4jmRs0w6NyO9wogmHLvJgbdzdTLDZGvKUYS5AiBfG%2Bo%2FpfYOtGoI52FiJhwbq9E%2FWd2OIkzAoaJqVyb2sCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1jPgfnH7Spt%2BKTqCKtwDXfNXEbWTgFaPOdr%2Bo%2BsjZ0MWGkXvBpGxqpjGfB0nMgjqjJFJyi8IueC6oN6TYEzbB00Q72YOXMt2Z0YmFDuIxo4F33JlEiFk%2BaC5ddCchlf38e%2B2u6eFg79TrKUP5Or%2Ff3%2BPyanEf%2Fh5EaPlrs%2BNzn%2FI1IR9A16TlcS3yJuWeUzZrpSorZf9F%2FObYX5Rmju7yiFUCTl2T1GPHn3s8Qcgd2iMews0PkFy%2BhrLRO0MXlFM%2BPgPLaaZBEC5fmqdpHpF56DyOo1kYGlKa6QqwpO6QmI8Chb7GNndGV%2FPta0zKNGSBueuMkZX6zl8UwRCUh7rJvb0oMqmZRGAmuHjP8XPTdlMGxeV%2FFBjeRq5elV8LpdZ9PY1%2BsMbEzqasTB%2Fz8UK0jJz3YfE5cewkVQigltneyvmmXJz9sbqS8nIwGRgoaDvVye02bgdWXEId00wvzo62xy9Dj6IAmEM5zPEA64PMOxdbXj2eCi%2BiJEESDU04TDCQDMI9GaoyeTEKm2OCMXwSp0YfzDnoz36jYVTYDLnLN8Y50f15Y9yAwP0wHPeTS7MTEqyUFlhVaze3%2BLStpRCc4ncrYV5Lo6k995sArrY5qV8t6hcGchLQFhW36xf9%2FeJqeeMADsM40gc3ugwu6mBwgY6pgGhTnT4qgDmkrr3at9R1ylTj%2Fh%2Fa%2BxBgNrNJJkr9%2BewGxWvPfWzKsGNKytEY7Qgfik0tm0UeEhICEy4CGTzlxCvNnCo9JubFOWxt4AhQnJ2an8%2BLXMKEvvdwyW1jXTBPtNb29%2F%2BFRVsYA5izm%2BEkQuZ%2F5w%2Bgh8omtYHnAvZv6xFd3T3Qlrx5nOnCnguQ46rEAyG0c35yP7t%2FVXntQXoSueXwT6iSHA0&X-Amz-Signature=cca7bf83d8c324af47316f205f18b5aca06808af876e4972293c83d450e5de02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROQO6QU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHRl2FFU4jmRs0w6NyO9wogmHLvJgbdzdTLDZGvKUYS5AiBfG%2Bo%2FpfYOtGoI52FiJhwbq9E%2FWd2OIkzAoaJqVyb2sCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1jPgfnH7Spt%2BKTqCKtwDXfNXEbWTgFaPOdr%2Bo%2BsjZ0MWGkXvBpGxqpjGfB0nMgjqjJFJyi8IueC6oN6TYEzbB00Q72YOXMt2Z0YmFDuIxo4F33JlEiFk%2BaC5ddCchlf38e%2B2u6eFg79TrKUP5Or%2Ff3%2BPyanEf%2Fh5EaPlrs%2BNzn%2FI1IR9A16TlcS3yJuWeUzZrpSorZf9F%2FObYX5Rmju7yiFUCTl2T1GPHn3s8Qcgd2iMews0PkFy%2BhrLRO0MXlFM%2BPgPLaaZBEC5fmqdpHpF56DyOo1kYGlKa6QqwpO6QmI8Chb7GNndGV%2FPta0zKNGSBueuMkZX6zl8UwRCUh7rJvb0oMqmZRGAmuHjP8XPTdlMGxeV%2FFBjeRq5elV8LpdZ9PY1%2BsMbEzqasTB%2Fz8UK0jJz3YfE5cewkVQigltneyvmmXJz9sbqS8nIwGRgoaDvVye02bgdWXEId00wvzo62xy9Dj6IAmEM5zPEA64PMOxdbXj2eCi%2BiJEESDU04TDCQDMI9GaoyeTEKm2OCMXwSp0YfzDnoz36jYVTYDLnLN8Y50f15Y9yAwP0wHPeTS7MTEqyUFlhVaze3%2BLStpRCc4ncrYV5Lo6k995sArrY5qV8t6hcGchLQFhW36xf9%2FeJqeeMADsM40gc3ugwu6mBwgY6pgGhTnT4qgDmkrr3at9R1ylTj%2Fh%2Fa%2BxBgNrNJJkr9%2BewGxWvPfWzKsGNKytEY7Qgfik0tm0UeEhICEy4CGTzlxCvNnCo9JubFOWxt4AhQnJ2an8%2BLXMKEvvdwyW1jXTBPtNb29%2F%2BFRVsYA5izm%2BEkQuZ%2F5w%2Bgh8omtYHnAvZv6xFd3T3Qlrx5nOnCnguQ46rEAyG0c35yP7t%2FVXntQXoSueXwT6iSHA0&X-Amz-Signature=d06d485351da44fd6433c80263ee371a06a952994eb47eea7a0133fe9c164554&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROQO6QU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHRl2FFU4jmRs0w6NyO9wogmHLvJgbdzdTLDZGvKUYS5AiBfG%2Bo%2FpfYOtGoI52FiJhwbq9E%2FWd2OIkzAoaJqVyb2sCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1jPgfnH7Spt%2BKTqCKtwDXfNXEbWTgFaPOdr%2Bo%2BsjZ0MWGkXvBpGxqpjGfB0nMgjqjJFJyi8IueC6oN6TYEzbB00Q72YOXMt2Z0YmFDuIxo4F33JlEiFk%2BaC5ddCchlf38e%2B2u6eFg79TrKUP5Or%2Ff3%2BPyanEf%2Fh5EaPlrs%2BNzn%2FI1IR9A16TlcS3yJuWeUzZrpSorZf9F%2FObYX5Rmju7yiFUCTl2T1GPHn3s8Qcgd2iMews0PkFy%2BhrLRO0MXlFM%2BPgPLaaZBEC5fmqdpHpF56DyOo1kYGlKa6QqwpO6QmI8Chb7GNndGV%2FPta0zKNGSBueuMkZX6zl8UwRCUh7rJvb0oMqmZRGAmuHjP8XPTdlMGxeV%2FFBjeRq5elV8LpdZ9PY1%2BsMbEzqasTB%2Fz8UK0jJz3YfE5cewkVQigltneyvmmXJz9sbqS8nIwGRgoaDvVye02bgdWXEId00wvzo62xy9Dj6IAmEM5zPEA64PMOxdbXj2eCi%2BiJEESDU04TDCQDMI9GaoyeTEKm2OCMXwSp0YfzDnoz36jYVTYDLnLN8Y50f15Y9yAwP0wHPeTS7MTEqyUFlhVaze3%2BLStpRCc4ncrYV5Lo6k995sArrY5qV8t6hcGchLQFhW36xf9%2FeJqeeMADsM40gc3ugwu6mBwgY6pgGhTnT4qgDmkrr3at9R1ylTj%2Fh%2Fa%2BxBgNrNJJkr9%2BewGxWvPfWzKsGNKytEY7Qgfik0tm0UeEhICEy4CGTzlxCvNnCo9JubFOWxt4AhQnJ2an8%2BLXMKEvvdwyW1jXTBPtNb29%2F%2BFRVsYA5izm%2BEkQuZ%2F5w%2Bgh8omtYHnAvZv6xFd3T3Qlrx5nOnCnguQ46rEAyG0c35yP7t%2FVXntQXoSueXwT6iSHA0&X-Amz-Signature=6727b3fb50ff3fe16f8542b7a67104969ede45830e715c6581aa710cfa3e7d39&X-Amz-SignedHeaders=host&x-id=GetObject)
