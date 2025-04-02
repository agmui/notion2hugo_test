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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3TE5ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMzGrAEXRxqHPXqoO1RJnYZJwV55ZwGQeSgs66PsYH2gIgcpxIa%2BC11fPS7Yu7ykdqMkub%2FBdly41aFcbxhPlI6dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa7vZ2ARhtxwXkrDircAxonF0%2FtPpINJTyw5QxxUtoIwtEAwCSzVzAEo1cAHyvpH5%2FDbiJTl5t2kiLoqu%2FSgcfpTcVzzfL4csjUu2d1VxcwOndY2BQnbuyUj%2F7JU352j3ltsPmMWxKWVP%2FVX9TW5BeAN0EIcuBOXDyrfbis68UFOM9LJpQ1H6%2BzSyzlHyUB1NHU7mOY70XNwzC%2FkEIzNcJiig9Jx1fCwkJiO6eoAfXkyedy8KCfviXaHvLtEM3ZOlztO96yY3uJ%2FPr58cLcE%2FjE1Cl4Id3irGNIIZ6yePxneYq6Eh9BvKBax7jsAuOa3fbf6%2B6dYxxL6kwMO2LUyRBJPO%2B7Jkxz2HFkU4iWad2NJejI3v5IByf7zo4xaMrMoaWTySSR51M%2BanoCPQmTi5T%2BvNfx6nush1f9%2B0CnEnZ%2F6zppIY5pU8AKEolOSD9GQHOKVYc3ZviP63zCAGYTS0grl9z3GzXaA%2FOIhENXkMQz77%2FA8ur2tueVAWYigpOTxmJIzewvLhDc9u0IBGub93xYNDtmoRzN7H7UsHb%2F0hGEhS5R2L6vI2CZpsYdyUszWXXb5WU%2F6MhSy6RwoF0flAOeP9xO%2FVhAQoxHYCG1Nm1DDhkwikyp%2FzGUwnJsOcOFKv%2B72J0zJN073M3LMMaktr8GOqUBWKjkMLYdsBKXnatfK0EMPa6FiyM6jiPdJKUkMyiqifI%2FpdZ%2Fm4F5hocpg%2FDdRPeluLdq6%2F0toU%2B8eXWBX2zPDoLlK5OL6uUum6xj3E3WVZs60C9va%2FQU1OEwcAg9zyosb%2B95ALusA3jv%2FDUjJxm%2Bu0Xbo9z8flNfrfJo0UCFwncCLTGa4NYHbzMuz44d0dTsAEbBdeQf%2Bpto9LbnkFlAqh82Z%2FL2&X-Amz-Signature=01d83cf318f34fc073f30e2c3a800cf5cec6b23cf25a83bc4a61550a0308db89&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3TE5ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMzGrAEXRxqHPXqoO1RJnYZJwV55ZwGQeSgs66PsYH2gIgcpxIa%2BC11fPS7Yu7ykdqMkub%2FBdly41aFcbxhPlI6dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa7vZ2ARhtxwXkrDircAxonF0%2FtPpINJTyw5QxxUtoIwtEAwCSzVzAEo1cAHyvpH5%2FDbiJTl5t2kiLoqu%2FSgcfpTcVzzfL4csjUu2d1VxcwOndY2BQnbuyUj%2F7JU352j3ltsPmMWxKWVP%2FVX9TW5BeAN0EIcuBOXDyrfbis68UFOM9LJpQ1H6%2BzSyzlHyUB1NHU7mOY70XNwzC%2FkEIzNcJiig9Jx1fCwkJiO6eoAfXkyedy8KCfviXaHvLtEM3ZOlztO96yY3uJ%2FPr58cLcE%2FjE1Cl4Id3irGNIIZ6yePxneYq6Eh9BvKBax7jsAuOa3fbf6%2B6dYxxL6kwMO2LUyRBJPO%2B7Jkxz2HFkU4iWad2NJejI3v5IByf7zo4xaMrMoaWTySSR51M%2BanoCPQmTi5T%2BvNfx6nush1f9%2B0CnEnZ%2F6zppIY5pU8AKEolOSD9GQHOKVYc3ZviP63zCAGYTS0grl9z3GzXaA%2FOIhENXkMQz77%2FA8ur2tueVAWYigpOTxmJIzewvLhDc9u0IBGub93xYNDtmoRzN7H7UsHb%2F0hGEhS5R2L6vI2CZpsYdyUszWXXb5WU%2F6MhSy6RwoF0flAOeP9xO%2FVhAQoxHYCG1Nm1DDhkwikyp%2FzGUwnJsOcOFKv%2B72J0zJN073M3LMMaktr8GOqUBWKjkMLYdsBKXnatfK0EMPa6FiyM6jiPdJKUkMyiqifI%2FpdZ%2Fm4F5hocpg%2FDdRPeluLdq6%2F0toU%2B8eXWBX2zPDoLlK5OL6uUum6xj3E3WVZs60C9va%2FQU1OEwcAg9zyosb%2B95ALusA3jv%2FDUjJxm%2Bu0Xbo9z8flNfrfJo0UCFwncCLTGa4NYHbzMuz44d0dTsAEbBdeQf%2Bpto9LbnkFlAqh82Z%2FL2&X-Amz-Signature=5504c8ec534de35f39cbbcb03249959c6d71e7ae2dfc8261a6c1e89f96191ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3TE5ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMzGrAEXRxqHPXqoO1RJnYZJwV55ZwGQeSgs66PsYH2gIgcpxIa%2BC11fPS7Yu7ykdqMkub%2FBdly41aFcbxhPlI6dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa7vZ2ARhtxwXkrDircAxonF0%2FtPpINJTyw5QxxUtoIwtEAwCSzVzAEo1cAHyvpH5%2FDbiJTl5t2kiLoqu%2FSgcfpTcVzzfL4csjUu2d1VxcwOndY2BQnbuyUj%2F7JU352j3ltsPmMWxKWVP%2FVX9TW5BeAN0EIcuBOXDyrfbis68UFOM9LJpQ1H6%2BzSyzlHyUB1NHU7mOY70XNwzC%2FkEIzNcJiig9Jx1fCwkJiO6eoAfXkyedy8KCfviXaHvLtEM3ZOlztO96yY3uJ%2FPr58cLcE%2FjE1Cl4Id3irGNIIZ6yePxneYq6Eh9BvKBax7jsAuOa3fbf6%2B6dYxxL6kwMO2LUyRBJPO%2B7Jkxz2HFkU4iWad2NJejI3v5IByf7zo4xaMrMoaWTySSR51M%2BanoCPQmTi5T%2BvNfx6nush1f9%2B0CnEnZ%2F6zppIY5pU8AKEolOSD9GQHOKVYc3ZviP63zCAGYTS0grl9z3GzXaA%2FOIhENXkMQz77%2FA8ur2tueVAWYigpOTxmJIzewvLhDc9u0IBGub93xYNDtmoRzN7H7UsHb%2F0hGEhS5R2L6vI2CZpsYdyUszWXXb5WU%2F6MhSy6RwoF0flAOeP9xO%2FVhAQoxHYCG1Nm1DDhkwikyp%2FzGUwnJsOcOFKv%2B72J0zJN073M3LMMaktr8GOqUBWKjkMLYdsBKXnatfK0EMPa6FiyM6jiPdJKUkMyiqifI%2FpdZ%2Fm4F5hocpg%2FDdRPeluLdq6%2F0toU%2B8eXWBX2zPDoLlK5OL6uUum6xj3E3WVZs60C9va%2FQU1OEwcAg9zyosb%2B95ALusA3jv%2FDUjJxm%2Bu0Xbo9z8flNfrfJo0UCFwncCLTGa4NYHbzMuz44d0dTsAEbBdeQf%2Bpto9LbnkFlAqh82Z%2FL2&X-Amz-Signature=865c404c573686a4a1dcdbd0fe62f1cdcc0819d9f4a5ec8d705dd7f4b570b257&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3TE5ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMzGrAEXRxqHPXqoO1RJnYZJwV55ZwGQeSgs66PsYH2gIgcpxIa%2BC11fPS7Yu7ykdqMkub%2FBdly41aFcbxhPlI6dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa7vZ2ARhtxwXkrDircAxonF0%2FtPpINJTyw5QxxUtoIwtEAwCSzVzAEo1cAHyvpH5%2FDbiJTl5t2kiLoqu%2FSgcfpTcVzzfL4csjUu2d1VxcwOndY2BQnbuyUj%2F7JU352j3ltsPmMWxKWVP%2FVX9TW5BeAN0EIcuBOXDyrfbis68UFOM9LJpQ1H6%2BzSyzlHyUB1NHU7mOY70XNwzC%2FkEIzNcJiig9Jx1fCwkJiO6eoAfXkyedy8KCfviXaHvLtEM3ZOlztO96yY3uJ%2FPr58cLcE%2FjE1Cl4Id3irGNIIZ6yePxneYq6Eh9BvKBax7jsAuOa3fbf6%2B6dYxxL6kwMO2LUyRBJPO%2B7Jkxz2HFkU4iWad2NJejI3v5IByf7zo4xaMrMoaWTySSR51M%2BanoCPQmTi5T%2BvNfx6nush1f9%2B0CnEnZ%2F6zppIY5pU8AKEolOSD9GQHOKVYc3ZviP63zCAGYTS0grl9z3GzXaA%2FOIhENXkMQz77%2FA8ur2tueVAWYigpOTxmJIzewvLhDc9u0IBGub93xYNDtmoRzN7H7UsHb%2F0hGEhS5R2L6vI2CZpsYdyUszWXXb5WU%2F6MhSy6RwoF0flAOeP9xO%2FVhAQoxHYCG1Nm1DDhkwikyp%2FzGUwnJsOcOFKv%2B72J0zJN073M3LMMaktr8GOqUBWKjkMLYdsBKXnatfK0EMPa6FiyM6jiPdJKUkMyiqifI%2FpdZ%2Fm4F5hocpg%2FDdRPeluLdq6%2F0toU%2B8eXWBX2zPDoLlK5OL6uUum6xj3E3WVZs60C9va%2FQU1OEwcAg9zyosb%2B95ALusA3jv%2FDUjJxm%2Bu0Xbo9z8flNfrfJo0UCFwncCLTGa4NYHbzMuz44d0dTsAEbBdeQf%2Bpto9LbnkFlAqh82Z%2FL2&X-Amz-Signature=74e22a14fea987ada98b8a0b4e1f4d4c573b5e8b098143f239ea59703e845466&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3TE5ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMzGrAEXRxqHPXqoO1RJnYZJwV55ZwGQeSgs66PsYH2gIgcpxIa%2BC11fPS7Yu7ykdqMkub%2FBdly41aFcbxhPlI6dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa7vZ2ARhtxwXkrDircAxonF0%2FtPpINJTyw5QxxUtoIwtEAwCSzVzAEo1cAHyvpH5%2FDbiJTl5t2kiLoqu%2FSgcfpTcVzzfL4csjUu2d1VxcwOndY2BQnbuyUj%2F7JU352j3ltsPmMWxKWVP%2FVX9TW5BeAN0EIcuBOXDyrfbis68UFOM9LJpQ1H6%2BzSyzlHyUB1NHU7mOY70XNwzC%2FkEIzNcJiig9Jx1fCwkJiO6eoAfXkyedy8KCfviXaHvLtEM3ZOlztO96yY3uJ%2FPr58cLcE%2FjE1Cl4Id3irGNIIZ6yePxneYq6Eh9BvKBax7jsAuOa3fbf6%2B6dYxxL6kwMO2LUyRBJPO%2B7Jkxz2HFkU4iWad2NJejI3v5IByf7zo4xaMrMoaWTySSR51M%2BanoCPQmTi5T%2BvNfx6nush1f9%2B0CnEnZ%2F6zppIY5pU8AKEolOSD9GQHOKVYc3ZviP63zCAGYTS0grl9z3GzXaA%2FOIhENXkMQz77%2FA8ur2tueVAWYigpOTxmJIzewvLhDc9u0IBGub93xYNDtmoRzN7H7UsHb%2F0hGEhS5R2L6vI2CZpsYdyUszWXXb5WU%2F6MhSy6RwoF0flAOeP9xO%2FVhAQoxHYCG1Nm1DDhkwikyp%2FzGUwnJsOcOFKv%2B72J0zJN073M3LMMaktr8GOqUBWKjkMLYdsBKXnatfK0EMPa6FiyM6jiPdJKUkMyiqifI%2FpdZ%2Fm4F5hocpg%2FDdRPeluLdq6%2F0toU%2B8eXWBX2zPDoLlK5OL6uUum6xj3E3WVZs60C9va%2FQU1OEwcAg9zyosb%2B95ALusA3jv%2FDUjJxm%2Bu0Xbo9z8flNfrfJo0UCFwncCLTGa4NYHbzMuz44d0dTsAEbBdeQf%2Bpto9LbnkFlAqh82Z%2FL2&X-Amz-Signature=531e1b5bf7643a67f334c746be44daa4ac20647807124674448aeebbf9131b46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3TE5ME%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCMzGrAEXRxqHPXqoO1RJnYZJwV55ZwGQeSgs66PsYH2gIgcpxIa%2BC11fPS7Yu7ykdqMkub%2FBdly41aFcbxhPlI6dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNa7vZ2ARhtxwXkrDircAxonF0%2FtPpINJTyw5QxxUtoIwtEAwCSzVzAEo1cAHyvpH5%2FDbiJTl5t2kiLoqu%2FSgcfpTcVzzfL4csjUu2d1VxcwOndY2BQnbuyUj%2F7JU352j3ltsPmMWxKWVP%2FVX9TW5BeAN0EIcuBOXDyrfbis68UFOM9LJpQ1H6%2BzSyzlHyUB1NHU7mOY70XNwzC%2FkEIzNcJiig9Jx1fCwkJiO6eoAfXkyedy8KCfviXaHvLtEM3ZOlztO96yY3uJ%2FPr58cLcE%2FjE1Cl4Id3irGNIIZ6yePxneYq6Eh9BvKBax7jsAuOa3fbf6%2B6dYxxL6kwMO2LUyRBJPO%2B7Jkxz2HFkU4iWad2NJejI3v5IByf7zo4xaMrMoaWTySSR51M%2BanoCPQmTi5T%2BvNfx6nush1f9%2B0CnEnZ%2F6zppIY5pU8AKEolOSD9GQHOKVYc3ZviP63zCAGYTS0grl9z3GzXaA%2FOIhENXkMQz77%2FA8ur2tueVAWYigpOTxmJIzewvLhDc9u0IBGub93xYNDtmoRzN7H7UsHb%2F0hGEhS5R2L6vI2CZpsYdyUszWXXb5WU%2F6MhSy6RwoF0flAOeP9xO%2FVhAQoxHYCG1Nm1DDhkwikyp%2FzGUwnJsOcOFKv%2B72J0zJN073M3LMMaktr8GOqUBWKjkMLYdsBKXnatfK0EMPa6FiyM6jiPdJKUkMyiqifI%2FpdZ%2Fm4F5hocpg%2FDdRPeluLdq6%2F0toU%2B8eXWBX2zPDoLlK5OL6uUum6xj3E3WVZs60C9va%2FQU1OEwcAg9zyosb%2B95ALusA3jv%2FDUjJxm%2Bu0Xbo9z8flNfrfJo0UCFwncCLTGa4NYHbzMuz44d0dTsAEbBdeQf%2Bpto9LbnkFlAqh82Z%2FL2&X-Amz-Signature=0b7b8e38bb24c9219b0d1d1f85328c33b2be0f88a1733de5fa8d16d23e64eb6e&X-Amz-SignedHeaders=host&x-id=GetObject)
