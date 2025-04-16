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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDVQYP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp0x5YjnaeWPcfe81HGevzV9WPu1ISDZIbyW8pIp36AIgXU%2BqoRxlXXNB6eQ4Ad2iq%2FsXXovx9lTzq%2FiV03dSYroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFV1IlrX0z7uHWBlvyrcA%2FbNTz1OwKaBsrQ8VQOHmBJKmgJR6Q%2FY%2Bqx7Omi%2FUpaTU5oAIokEtVjwrmg65v1QFHYPWEXB%2FHyiew2rxPmEwGRdgYKpNYczrKtFmvBx%2F%2BOq4h%2B1vJcaipoeeUEsOj6iI5CpwJBUlZUQzcA%2Bxf0Sw9dN7A8LzH5WmoDpDJUyQBI5bHSeffs4TOpQxDjZDZVLlABN5Ju5wOu%2F8%2FEDg%2Fm79Q9SkJ5uSMJIaUk893a6rwugisBYLWDmRXU5SVZw72uf9Q4UJZcCORY53FrjEQd7W0v95xt%2Bkiz%2Bmoc%2B2oOkEP0qVf0BcvKNbgbYXgdujI761%2BEHwibwl%2BeCC1FbmXvGSelWwJW2lci6Q%2FPk0Zh4TUlMQler482KOsxAaW5x0P7FZs3Bfgm8RB7WFUacgky8ZmWzEL3akVNFHeIRJwW6r5zxPlrBsw6b%2BgFUYwapD8wzl8HJwOclnz0l76Fx8piNyTqt%2FXOo1eexRxbZbHkS7tv2Bjl104yvVG9mwEsetckk7TtX3riR0%2FAfU%2FKpEs7XjZ3H3cKEmhGorJhZbnEzE5djc6nJFEVzAB90%2BzFDtuhVLOfv2YYa3yv2faJItWnwd6jpYMSlXh%2FO4Ctbl%2Fjg6eqYOKXwQ%2FE9FtqnAaaRML6sgMAGOqUBXKNQRyMf0oE9te%2Fr%2F9vfb9En9Y4y2i%2F0RBSxYjBoqmHII%2BMxm0m4FhEXYFWsm%2FU9q0OsqZac1RhIDreTUcMPeSwT8OM4QMEb4OIN4AlTG3W5ofqbZi8QVuAh%2BHfz%2FeuyYm%2F2I7vP3iuoOhJlizSa%2FRK9wWq4APmI7CUleUI0okjhYHtWCwakeUsAuU%2FB6btjAJa9h1TU71Y9Dnc5nu%2Fiss3dzd1T&X-Amz-Signature=bcd634934f9c54f1ee279af91f352606e6c2f85cdabbed6407badf17b7ee4dff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDVQYP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp0x5YjnaeWPcfe81HGevzV9WPu1ISDZIbyW8pIp36AIgXU%2BqoRxlXXNB6eQ4Ad2iq%2FsXXovx9lTzq%2FiV03dSYroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFV1IlrX0z7uHWBlvyrcA%2FbNTz1OwKaBsrQ8VQOHmBJKmgJR6Q%2FY%2Bqx7Omi%2FUpaTU5oAIokEtVjwrmg65v1QFHYPWEXB%2FHyiew2rxPmEwGRdgYKpNYczrKtFmvBx%2F%2BOq4h%2B1vJcaipoeeUEsOj6iI5CpwJBUlZUQzcA%2Bxf0Sw9dN7A8LzH5WmoDpDJUyQBI5bHSeffs4TOpQxDjZDZVLlABN5Ju5wOu%2F8%2FEDg%2Fm79Q9SkJ5uSMJIaUk893a6rwugisBYLWDmRXU5SVZw72uf9Q4UJZcCORY53FrjEQd7W0v95xt%2Bkiz%2Bmoc%2B2oOkEP0qVf0BcvKNbgbYXgdujI761%2BEHwibwl%2BeCC1FbmXvGSelWwJW2lci6Q%2FPk0Zh4TUlMQler482KOsxAaW5x0P7FZs3Bfgm8RB7WFUacgky8ZmWzEL3akVNFHeIRJwW6r5zxPlrBsw6b%2BgFUYwapD8wzl8HJwOclnz0l76Fx8piNyTqt%2FXOo1eexRxbZbHkS7tv2Bjl104yvVG9mwEsetckk7TtX3riR0%2FAfU%2FKpEs7XjZ3H3cKEmhGorJhZbnEzE5djc6nJFEVzAB90%2BzFDtuhVLOfv2YYa3yv2faJItWnwd6jpYMSlXh%2FO4Ctbl%2Fjg6eqYOKXwQ%2FE9FtqnAaaRML6sgMAGOqUBXKNQRyMf0oE9te%2Fr%2F9vfb9En9Y4y2i%2F0RBSxYjBoqmHII%2BMxm0m4FhEXYFWsm%2FU9q0OsqZac1RhIDreTUcMPeSwT8OM4QMEb4OIN4AlTG3W5ofqbZi8QVuAh%2BHfz%2FeuyYm%2F2I7vP3iuoOhJlizSa%2FRK9wWq4APmI7CUleUI0okjhYHtWCwakeUsAuU%2FB6btjAJa9h1TU71Y9Dnc5nu%2Fiss3dzd1T&X-Amz-Signature=b30def30b627eaafb78e2e257edb0fb3226882132b96737546531b5e2b95dff9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDVQYP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp0x5YjnaeWPcfe81HGevzV9WPu1ISDZIbyW8pIp36AIgXU%2BqoRxlXXNB6eQ4Ad2iq%2FsXXovx9lTzq%2FiV03dSYroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFV1IlrX0z7uHWBlvyrcA%2FbNTz1OwKaBsrQ8VQOHmBJKmgJR6Q%2FY%2Bqx7Omi%2FUpaTU5oAIokEtVjwrmg65v1QFHYPWEXB%2FHyiew2rxPmEwGRdgYKpNYczrKtFmvBx%2F%2BOq4h%2B1vJcaipoeeUEsOj6iI5CpwJBUlZUQzcA%2Bxf0Sw9dN7A8LzH5WmoDpDJUyQBI5bHSeffs4TOpQxDjZDZVLlABN5Ju5wOu%2F8%2FEDg%2Fm79Q9SkJ5uSMJIaUk893a6rwugisBYLWDmRXU5SVZw72uf9Q4UJZcCORY53FrjEQd7W0v95xt%2Bkiz%2Bmoc%2B2oOkEP0qVf0BcvKNbgbYXgdujI761%2BEHwibwl%2BeCC1FbmXvGSelWwJW2lci6Q%2FPk0Zh4TUlMQler482KOsxAaW5x0P7FZs3Bfgm8RB7WFUacgky8ZmWzEL3akVNFHeIRJwW6r5zxPlrBsw6b%2BgFUYwapD8wzl8HJwOclnz0l76Fx8piNyTqt%2FXOo1eexRxbZbHkS7tv2Bjl104yvVG9mwEsetckk7TtX3riR0%2FAfU%2FKpEs7XjZ3H3cKEmhGorJhZbnEzE5djc6nJFEVzAB90%2BzFDtuhVLOfv2YYa3yv2faJItWnwd6jpYMSlXh%2FO4Ctbl%2Fjg6eqYOKXwQ%2FE9FtqnAaaRML6sgMAGOqUBXKNQRyMf0oE9te%2Fr%2F9vfb9En9Y4y2i%2F0RBSxYjBoqmHII%2BMxm0m4FhEXYFWsm%2FU9q0OsqZac1RhIDreTUcMPeSwT8OM4QMEb4OIN4AlTG3W5ofqbZi8QVuAh%2BHfz%2FeuyYm%2F2I7vP3iuoOhJlizSa%2FRK9wWq4APmI7CUleUI0okjhYHtWCwakeUsAuU%2FB6btjAJa9h1TU71Y9Dnc5nu%2Fiss3dzd1T&X-Amz-Signature=10bb47ec74396f7285733e31a0c372009a692c8d44de439b72f7d55c425f474f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDVQYP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp0x5YjnaeWPcfe81HGevzV9WPu1ISDZIbyW8pIp36AIgXU%2BqoRxlXXNB6eQ4Ad2iq%2FsXXovx9lTzq%2FiV03dSYroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFV1IlrX0z7uHWBlvyrcA%2FbNTz1OwKaBsrQ8VQOHmBJKmgJR6Q%2FY%2Bqx7Omi%2FUpaTU5oAIokEtVjwrmg65v1QFHYPWEXB%2FHyiew2rxPmEwGRdgYKpNYczrKtFmvBx%2F%2BOq4h%2B1vJcaipoeeUEsOj6iI5CpwJBUlZUQzcA%2Bxf0Sw9dN7A8LzH5WmoDpDJUyQBI5bHSeffs4TOpQxDjZDZVLlABN5Ju5wOu%2F8%2FEDg%2Fm79Q9SkJ5uSMJIaUk893a6rwugisBYLWDmRXU5SVZw72uf9Q4UJZcCORY53FrjEQd7W0v95xt%2Bkiz%2Bmoc%2B2oOkEP0qVf0BcvKNbgbYXgdujI761%2BEHwibwl%2BeCC1FbmXvGSelWwJW2lci6Q%2FPk0Zh4TUlMQler482KOsxAaW5x0P7FZs3Bfgm8RB7WFUacgky8ZmWzEL3akVNFHeIRJwW6r5zxPlrBsw6b%2BgFUYwapD8wzl8HJwOclnz0l76Fx8piNyTqt%2FXOo1eexRxbZbHkS7tv2Bjl104yvVG9mwEsetckk7TtX3riR0%2FAfU%2FKpEs7XjZ3H3cKEmhGorJhZbnEzE5djc6nJFEVzAB90%2BzFDtuhVLOfv2YYa3yv2faJItWnwd6jpYMSlXh%2FO4Ctbl%2Fjg6eqYOKXwQ%2FE9FtqnAaaRML6sgMAGOqUBXKNQRyMf0oE9te%2Fr%2F9vfb9En9Y4y2i%2F0RBSxYjBoqmHII%2BMxm0m4FhEXYFWsm%2FU9q0OsqZac1RhIDreTUcMPeSwT8OM4QMEb4OIN4AlTG3W5ofqbZi8QVuAh%2BHfz%2FeuyYm%2F2I7vP3iuoOhJlizSa%2FRK9wWq4APmI7CUleUI0okjhYHtWCwakeUsAuU%2FB6btjAJa9h1TU71Y9Dnc5nu%2Fiss3dzd1T&X-Amz-Signature=d681794ca4c6da0addabf6ef37471f749fa72e09e3189f01ab435a97f46076f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDVQYP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp0x5YjnaeWPcfe81HGevzV9WPu1ISDZIbyW8pIp36AIgXU%2BqoRxlXXNB6eQ4Ad2iq%2FsXXovx9lTzq%2FiV03dSYroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFV1IlrX0z7uHWBlvyrcA%2FbNTz1OwKaBsrQ8VQOHmBJKmgJR6Q%2FY%2Bqx7Omi%2FUpaTU5oAIokEtVjwrmg65v1QFHYPWEXB%2FHyiew2rxPmEwGRdgYKpNYczrKtFmvBx%2F%2BOq4h%2B1vJcaipoeeUEsOj6iI5CpwJBUlZUQzcA%2Bxf0Sw9dN7A8LzH5WmoDpDJUyQBI5bHSeffs4TOpQxDjZDZVLlABN5Ju5wOu%2F8%2FEDg%2Fm79Q9SkJ5uSMJIaUk893a6rwugisBYLWDmRXU5SVZw72uf9Q4UJZcCORY53FrjEQd7W0v95xt%2Bkiz%2Bmoc%2B2oOkEP0qVf0BcvKNbgbYXgdujI761%2BEHwibwl%2BeCC1FbmXvGSelWwJW2lci6Q%2FPk0Zh4TUlMQler482KOsxAaW5x0P7FZs3Bfgm8RB7WFUacgky8ZmWzEL3akVNFHeIRJwW6r5zxPlrBsw6b%2BgFUYwapD8wzl8HJwOclnz0l76Fx8piNyTqt%2FXOo1eexRxbZbHkS7tv2Bjl104yvVG9mwEsetckk7TtX3riR0%2FAfU%2FKpEs7XjZ3H3cKEmhGorJhZbnEzE5djc6nJFEVzAB90%2BzFDtuhVLOfv2YYa3yv2faJItWnwd6jpYMSlXh%2FO4Ctbl%2Fjg6eqYOKXwQ%2FE9FtqnAaaRML6sgMAGOqUBXKNQRyMf0oE9te%2Fr%2F9vfb9En9Y4y2i%2F0RBSxYjBoqmHII%2BMxm0m4FhEXYFWsm%2FU9q0OsqZac1RhIDreTUcMPeSwT8OM4QMEb4OIN4AlTG3W5ofqbZi8QVuAh%2BHfz%2FeuyYm%2F2I7vP3iuoOhJlizSa%2FRK9wWq4APmI7CUleUI0okjhYHtWCwakeUsAuU%2FB6btjAJa9h1TU71Y9Dnc5nu%2Fiss3dzd1T&X-Amz-Signature=b750152507dfcf41d2172754cfab071262e0ba0cf4bf33beb90a3f1b91e49cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSDVQYP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp0x5YjnaeWPcfe81HGevzV9WPu1ISDZIbyW8pIp36AIgXU%2BqoRxlXXNB6eQ4Ad2iq%2FsXXovx9lTzq%2FiV03dSYroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFV1IlrX0z7uHWBlvyrcA%2FbNTz1OwKaBsrQ8VQOHmBJKmgJR6Q%2FY%2Bqx7Omi%2FUpaTU5oAIokEtVjwrmg65v1QFHYPWEXB%2FHyiew2rxPmEwGRdgYKpNYczrKtFmvBx%2F%2BOq4h%2B1vJcaipoeeUEsOj6iI5CpwJBUlZUQzcA%2Bxf0Sw9dN7A8LzH5WmoDpDJUyQBI5bHSeffs4TOpQxDjZDZVLlABN5Ju5wOu%2F8%2FEDg%2Fm79Q9SkJ5uSMJIaUk893a6rwugisBYLWDmRXU5SVZw72uf9Q4UJZcCORY53FrjEQd7W0v95xt%2Bkiz%2Bmoc%2B2oOkEP0qVf0BcvKNbgbYXgdujI761%2BEHwibwl%2BeCC1FbmXvGSelWwJW2lci6Q%2FPk0Zh4TUlMQler482KOsxAaW5x0P7FZs3Bfgm8RB7WFUacgky8ZmWzEL3akVNFHeIRJwW6r5zxPlrBsw6b%2BgFUYwapD8wzl8HJwOclnz0l76Fx8piNyTqt%2FXOo1eexRxbZbHkS7tv2Bjl104yvVG9mwEsetckk7TtX3riR0%2FAfU%2FKpEs7XjZ3H3cKEmhGorJhZbnEzE5djc6nJFEVzAB90%2BzFDtuhVLOfv2YYa3yv2faJItWnwd6jpYMSlXh%2FO4Ctbl%2Fjg6eqYOKXwQ%2FE9FtqnAaaRML6sgMAGOqUBXKNQRyMf0oE9te%2Fr%2F9vfb9En9Y4y2i%2F0RBSxYjBoqmHII%2BMxm0m4FhEXYFWsm%2FU9q0OsqZac1RhIDreTUcMPeSwT8OM4QMEb4OIN4AlTG3W5ofqbZi8QVuAh%2BHfz%2FeuyYm%2F2I7vP3iuoOhJlizSa%2FRK9wWq4APmI7CUleUI0okjhYHtWCwakeUsAuU%2FB6btjAJa9h1TU71Y9Dnc5nu%2Fiss3dzd1T&X-Amz-Signature=36d7b3b3b24db37de63fd57ffd3e5f55176cd05e89da252434356f58f9a811b9&X-Amz-SignedHeaders=host&x-id=GetObject)
