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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQPH5QE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJqAAZmK9jx%2FpGKexEsLDZA8VFl5r8XHyx69uGwfppGgIgP9iAUKcfgJcSGpyWfvr5NIziGMphpXrtcBiQn1JSrpkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2BFUZ5qQZ08EfgGSrcAwmuHCApCVO8Hz9x%2FYX8BeT%2BphsQQpzo618LxyHq5d8d07JasWoxTPNYhJqY%2BXGiwyv5G4CbSsVnqBGmlfenAuUaAkcKgF9OBzCqGfYfAFSZOmO81XlqAzBZZc1Hmh3h4zss0vkZiWynJVVCs7N1yzMpbR2zf4xhPOMp%2Fhbf0zio%2BSDtVEySqfcuqtYQ2hUPqRYGps84ThGILERQ75Lcvxg8htfxd9CEp%2F22aghB5%2F1Kkfx5bL8YgRLtfhzp0kh1xwzolBCwT%2B5j6NbFDmyp3soTB3DHlIUxoPFXmrvU0x%2Ba5lgFnQcghqyAws99PtjAZBa2HRRJ8iWbP8QMxlezFxNykqTUUqcESClj3xr%2B7TIGwVTGHajH8YvK7I6FnPatbUiRoh1vW6HAfv%2FqZ6rPGHjek3CzSGc4lYOSb7u4JPlmcwQ3rynYVcSdvMhlBdUjadlGZyma4xgK3jE%2BC34V7KEh6IVH%2BDAOki1GjSAjDYAu%2BJejABu8Z5SW6TYwCvWHgd%2BVJoYj%2F1KShgQ92dn7v9KU6W5xuZ%2F%2FdBauwE1oZbN%2FFF6Eixv5qZHIMhNGOJjOkYDjkjBtYDLspMus%2BYgQu2Mo5ulyg8WzwsEQ8p%2Fcfga2Dqo%2FsFA5WYujS7U%2BMO3yoMAGOqUBKmVxpqpHMvFYwZGfUQOEoBBFGVLmdb4daGKF1OtOtncpHWZZUim7p9fz8Phm5VykkX%2BnAAvw1TvJGkIALzvMcGTbMqvECSXrpW2liTraN96%2FsF%2FPvAQXoMmyl%2FqlC5zmoQqGolEIJc9m8zqHo3aB1y4oxV1X6W7KnuMz%2BgdcOGk76ThJWxf9KUhIkozGU5FIFudbPWKVsbOV6tYe4SipAwY8UjCF&X-Amz-Signature=d5ba95658fca81d4fc9b7cc549f25540e82bb079c159bc4c44cfefde961076b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQPH5QE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJqAAZmK9jx%2FpGKexEsLDZA8VFl5r8XHyx69uGwfppGgIgP9iAUKcfgJcSGpyWfvr5NIziGMphpXrtcBiQn1JSrpkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2BFUZ5qQZ08EfgGSrcAwmuHCApCVO8Hz9x%2FYX8BeT%2BphsQQpzo618LxyHq5d8d07JasWoxTPNYhJqY%2BXGiwyv5G4CbSsVnqBGmlfenAuUaAkcKgF9OBzCqGfYfAFSZOmO81XlqAzBZZc1Hmh3h4zss0vkZiWynJVVCs7N1yzMpbR2zf4xhPOMp%2Fhbf0zio%2BSDtVEySqfcuqtYQ2hUPqRYGps84ThGILERQ75Lcvxg8htfxd9CEp%2F22aghB5%2F1Kkfx5bL8YgRLtfhzp0kh1xwzolBCwT%2B5j6NbFDmyp3soTB3DHlIUxoPFXmrvU0x%2Ba5lgFnQcghqyAws99PtjAZBa2HRRJ8iWbP8QMxlezFxNykqTUUqcESClj3xr%2B7TIGwVTGHajH8YvK7I6FnPatbUiRoh1vW6HAfv%2FqZ6rPGHjek3CzSGc4lYOSb7u4JPlmcwQ3rynYVcSdvMhlBdUjadlGZyma4xgK3jE%2BC34V7KEh6IVH%2BDAOki1GjSAjDYAu%2BJejABu8Z5SW6TYwCvWHgd%2BVJoYj%2F1KShgQ92dn7v9KU6W5xuZ%2F%2FdBauwE1oZbN%2FFF6Eixv5qZHIMhNGOJjOkYDjkjBtYDLspMus%2BYgQu2Mo5ulyg8WzwsEQ8p%2Fcfga2Dqo%2FsFA5WYujS7U%2BMO3yoMAGOqUBKmVxpqpHMvFYwZGfUQOEoBBFGVLmdb4daGKF1OtOtncpHWZZUim7p9fz8Phm5VykkX%2BnAAvw1TvJGkIALzvMcGTbMqvECSXrpW2liTraN96%2FsF%2FPvAQXoMmyl%2FqlC5zmoQqGolEIJc9m8zqHo3aB1y4oxV1X6W7KnuMz%2BgdcOGk76ThJWxf9KUhIkozGU5FIFudbPWKVsbOV6tYe4SipAwY8UjCF&X-Amz-Signature=c6a45ee944e7353f2e20396dd4981bbcf8a4716cff04adc16130a9f0b69e3172&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQPH5QE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJqAAZmK9jx%2FpGKexEsLDZA8VFl5r8XHyx69uGwfppGgIgP9iAUKcfgJcSGpyWfvr5NIziGMphpXrtcBiQn1JSrpkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2BFUZ5qQZ08EfgGSrcAwmuHCApCVO8Hz9x%2FYX8BeT%2BphsQQpzo618LxyHq5d8d07JasWoxTPNYhJqY%2BXGiwyv5G4CbSsVnqBGmlfenAuUaAkcKgF9OBzCqGfYfAFSZOmO81XlqAzBZZc1Hmh3h4zss0vkZiWynJVVCs7N1yzMpbR2zf4xhPOMp%2Fhbf0zio%2BSDtVEySqfcuqtYQ2hUPqRYGps84ThGILERQ75Lcvxg8htfxd9CEp%2F22aghB5%2F1Kkfx5bL8YgRLtfhzp0kh1xwzolBCwT%2B5j6NbFDmyp3soTB3DHlIUxoPFXmrvU0x%2Ba5lgFnQcghqyAws99PtjAZBa2HRRJ8iWbP8QMxlezFxNykqTUUqcESClj3xr%2B7TIGwVTGHajH8YvK7I6FnPatbUiRoh1vW6HAfv%2FqZ6rPGHjek3CzSGc4lYOSb7u4JPlmcwQ3rynYVcSdvMhlBdUjadlGZyma4xgK3jE%2BC34V7KEh6IVH%2BDAOki1GjSAjDYAu%2BJejABu8Z5SW6TYwCvWHgd%2BVJoYj%2F1KShgQ92dn7v9KU6W5xuZ%2F%2FdBauwE1oZbN%2FFF6Eixv5qZHIMhNGOJjOkYDjkjBtYDLspMus%2BYgQu2Mo5ulyg8WzwsEQ8p%2Fcfga2Dqo%2FsFA5WYujS7U%2BMO3yoMAGOqUBKmVxpqpHMvFYwZGfUQOEoBBFGVLmdb4daGKF1OtOtncpHWZZUim7p9fz8Phm5VykkX%2BnAAvw1TvJGkIALzvMcGTbMqvECSXrpW2liTraN96%2FsF%2FPvAQXoMmyl%2FqlC5zmoQqGolEIJc9m8zqHo3aB1y4oxV1X6W7KnuMz%2BgdcOGk76ThJWxf9KUhIkozGU5FIFudbPWKVsbOV6tYe4SipAwY8UjCF&X-Amz-Signature=013a1734f443da9686ff1b43c52fd03551ceb6c05d5e35572dd00f6054865367&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQPH5QE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJqAAZmK9jx%2FpGKexEsLDZA8VFl5r8XHyx69uGwfppGgIgP9iAUKcfgJcSGpyWfvr5NIziGMphpXrtcBiQn1JSrpkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2BFUZ5qQZ08EfgGSrcAwmuHCApCVO8Hz9x%2FYX8BeT%2BphsQQpzo618LxyHq5d8d07JasWoxTPNYhJqY%2BXGiwyv5G4CbSsVnqBGmlfenAuUaAkcKgF9OBzCqGfYfAFSZOmO81XlqAzBZZc1Hmh3h4zss0vkZiWynJVVCs7N1yzMpbR2zf4xhPOMp%2Fhbf0zio%2BSDtVEySqfcuqtYQ2hUPqRYGps84ThGILERQ75Lcvxg8htfxd9CEp%2F22aghB5%2F1Kkfx5bL8YgRLtfhzp0kh1xwzolBCwT%2B5j6NbFDmyp3soTB3DHlIUxoPFXmrvU0x%2Ba5lgFnQcghqyAws99PtjAZBa2HRRJ8iWbP8QMxlezFxNykqTUUqcESClj3xr%2B7TIGwVTGHajH8YvK7I6FnPatbUiRoh1vW6HAfv%2FqZ6rPGHjek3CzSGc4lYOSb7u4JPlmcwQ3rynYVcSdvMhlBdUjadlGZyma4xgK3jE%2BC34V7KEh6IVH%2BDAOki1GjSAjDYAu%2BJejABu8Z5SW6TYwCvWHgd%2BVJoYj%2F1KShgQ92dn7v9KU6W5xuZ%2F%2FdBauwE1oZbN%2FFF6Eixv5qZHIMhNGOJjOkYDjkjBtYDLspMus%2BYgQu2Mo5ulyg8WzwsEQ8p%2Fcfga2Dqo%2FsFA5WYujS7U%2BMO3yoMAGOqUBKmVxpqpHMvFYwZGfUQOEoBBFGVLmdb4daGKF1OtOtncpHWZZUim7p9fz8Phm5VykkX%2BnAAvw1TvJGkIALzvMcGTbMqvECSXrpW2liTraN96%2FsF%2FPvAQXoMmyl%2FqlC5zmoQqGolEIJc9m8zqHo3aB1y4oxV1X6W7KnuMz%2BgdcOGk76ThJWxf9KUhIkozGU5FIFudbPWKVsbOV6tYe4SipAwY8UjCF&X-Amz-Signature=59ab423973e2954c5a0ea0e1fe522259b740ff55ae7ac501909d64519c145c18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQPH5QE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJqAAZmK9jx%2FpGKexEsLDZA8VFl5r8XHyx69uGwfppGgIgP9iAUKcfgJcSGpyWfvr5NIziGMphpXrtcBiQn1JSrpkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2BFUZ5qQZ08EfgGSrcAwmuHCApCVO8Hz9x%2FYX8BeT%2BphsQQpzo618LxyHq5d8d07JasWoxTPNYhJqY%2BXGiwyv5G4CbSsVnqBGmlfenAuUaAkcKgF9OBzCqGfYfAFSZOmO81XlqAzBZZc1Hmh3h4zss0vkZiWynJVVCs7N1yzMpbR2zf4xhPOMp%2Fhbf0zio%2BSDtVEySqfcuqtYQ2hUPqRYGps84ThGILERQ75Lcvxg8htfxd9CEp%2F22aghB5%2F1Kkfx5bL8YgRLtfhzp0kh1xwzolBCwT%2B5j6NbFDmyp3soTB3DHlIUxoPFXmrvU0x%2Ba5lgFnQcghqyAws99PtjAZBa2HRRJ8iWbP8QMxlezFxNykqTUUqcESClj3xr%2B7TIGwVTGHajH8YvK7I6FnPatbUiRoh1vW6HAfv%2FqZ6rPGHjek3CzSGc4lYOSb7u4JPlmcwQ3rynYVcSdvMhlBdUjadlGZyma4xgK3jE%2BC34V7KEh6IVH%2BDAOki1GjSAjDYAu%2BJejABu8Z5SW6TYwCvWHgd%2BVJoYj%2F1KShgQ92dn7v9KU6W5xuZ%2F%2FdBauwE1oZbN%2FFF6Eixv5qZHIMhNGOJjOkYDjkjBtYDLspMus%2BYgQu2Mo5ulyg8WzwsEQ8p%2Fcfga2Dqo%2FsFA5WYujS7U%2BMO3yoMAGOqUBKmVxpqpHMvFYwZGfUQOEoBBFGVLmdb4daGKF1OtOtncpHWZZUim7p9fz8Phm5VykkX%2BnAAvw1TvJGkIALzvMcGTbMqvECSXrpW2liTraN96%2FsF%2FPvAQXoMmyl%2FqlC5zmoQqGolEIJc9m8zqHo3aB1y4oxV1X6W7KnuMz%2BgdcOGk76ThJWxf9KUhIkozGU5FIFudbPWKVsbOV6tYe4SipAwY8UjCF&X-Amz-Signature=3d897f3458d459fdf34d69564ac996d6e1683f6fdf7ea3a2a23523fad194f966&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQPH5QE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJqAAZmK9jx%2FpGKexEsLDZA8VFl5r8XHyx69uGwfppGgIgP9iAUKcfgJcSGpyWfvr5NIziGMphpXrtcBiQn1JSrpkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2BFUZ5qQZ08EfgGSrcAwmuHCApCVO8Hz9x%2FYX8BeT%2BphsQQpzo618LxyHq5d8d07JasWoxTPNYhJqY%2BXGiwyv5G4CbSsVnqBGmlfenAuUaAkcKgF9OBzCqGfYfAFSZOmO81XlqAzBZZc1Hmh3h4zss0vkZiWynJVVCs7N1yzMpbR2zf4xhPOMp%2Fhbf0zio%2BSDtVEySqfcuqtYQ2hUPqRYGps84ThGILERQ75Lcvxg8htfxd9CEp%2F22aghB5%2F1Kkfx5bL8YgRLtfhzp0kh1xwzolBCwT%2B5j6NbFDmyp3soTB3DHlIUxoPFXmrvU0x%2Ba5lgFnQcghqyAws99PtjAZBa2HRRJ8iWbP8QMxlezFxNykqTUUqcESClj3xr%2B7TIGwVTGHajH8YvK7I6FnPatbUiRoh1vW6HAfv%2FqZ6rPGHjek3CzSGc4lYOSb7u4JPlmcwQ3rynYVcSdvMhlBdUjadlGZyma4xgK3jE%2BC34V7KEh6IVH%2BDAOki1GjSAjDYAu%2BJejABu8Z5SW6TYwCvWHgd%2BVJoYj%2F1KShgQ92dn7v9KU6W5xuZ%2F%2FdBauwE1oZbN%2FFF6Eixv5qZHIMhNGOJjOkYDjkjBtYDLspMus%2BYgQu2Mo5ulyg8WzwsEQ8p%2Fcfga2Dqo%2FsFA5WYujS7U%2BMO3yoMAGOqUBKmVxpqpHMvFYwZGfUQOEoBBFGVLmdb4daGKF1OtOtncpHWZZUim7p9fz8Phm5VykkX%2BnAAvw1TvJGkIALzvMcGTbMqvECSXrpW2liTraN96%2FsF%2FPvAQXoMmyl%2FqlC5zmoQqGolEIJc9m8zqHo3aB1y4oxV1X6W7KnuMz%2BgdcOGk76ThJWxf9KUhIkozGU5FIFudbPWKVsbOV6tYe4SipAwY8UjCF&X-Amz-Signature=2e5c5e1b9899fa4247601ea4256a02058b3c060c65f8ae0d73ab854a9ac5e4bb&X-Amz-SignedHeaders=host&x-id=GetObject)
