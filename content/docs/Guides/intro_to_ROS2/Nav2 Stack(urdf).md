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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBLMW5Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvIGhG4ky9JjMA%2BcHY2KkO%2FxRZuDODx7PE%2F1erPkyQQAiALBy%2FQIbm3N1F%2FmDqG5DNGL079B4GGnm40S9ByBeUlmSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxBNSvVFIqbwMMp%2BQKtwDSFqpt9d9U0cMTG0sYXdtrw%2FN%2FCWsdmtBgmQf%2Fcn6cQMLvJYnRik%2BJB8KPgp8TyuwVeLsd9GeIrr060qelJ3vCDAiomIQeZ1in2%2By0ibPbmqXjEodKZOc0L2ItxnlKVqh8ZskJPzquIxBCBSYZRCSm7mrOhFBf3iVDQj6Q2h3MswGhjSaUQiSPIvepfboiazWY%2FkIc7k3l0ZSkwaZJF3cIdXKNdE%2Bvrsv7ZNUdt90tewWx%2BebgTtMpUUcXQsHh3n9L4IApr3bBzEFEx4fFinIAVB%2BmnkAm7qUFVoGdJncDxmqYvHrWnrFTmvum%2FzGz7icuyGHIiAOBijBOdzWgv9OEY%2BylSBc5Ufe21hOuVpxITiE5QjWBTMsMZuQ7Cj2iSK2qBJs3s6KUzIDjSHhO8bMI5IZymu%2FdjJ5aG5qJTCgoP0xQ4YEDsXwCRwSg1N%2Fuw1q7dQI3ZOuPGwqMZoCB9rhN5FgNMygweLMbuv1Udq%2Fuho0%2FmlL6HAngHZ1Q7f4WeLHYeWeYaQAdjqoqFckY9%2Fon%2BetY%2FX7yqwv3f92wDaWJF%2FtqUtfrRPZMGxKF1PotQ5ZYLhtuGUC17%2BRdG8rVBqyY3SJHaowpOupR5XtYcRLgqt8qBBlJFKcXH%2BJZz8w0dHFwQY6pgG1CtjPU0U790Rtn7%2BO7cSRiAKg0n10rUQJgP37Rk2YkL8Zrsc2N8f9%2BK4UGfeO22ch6biyu5xPNoMGb2TI6nUFL0Onc3Spq6uSGxABTSrjugGDiwsUrM98pXiTOd87%2FT0bqvepbUR5RlcIsyJM1nYkO2QltM0YAwmw5xNg0zu0Erm%2B7rDxRBqQhhu0GZYBrRNvN%2BjvYi8erR%2BKphLYzqiEPJB91cgc&X-Amz-Signature=020cadcade1125fbfe8d869faca0ac54847aee1a3ee7dfc47e1b543695931655&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBLMW5Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvIGhG4ky9JjMA%2BcHY2KkO%2FxRZuDODx7PE%2F1erPkyQQAiALBy%2FQIbm3N1F%2FmDqG5DNGL079B4GGnm40S9ByBeUlmSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxBNSvVFIqbwMMp%2BQKtwDSFqpt9d9U0cMTG0sYXdtrw%2FN%2FCWsdmtBgmQf%2Fcn6cQMLvJYnRik%2BJB8KPgp8TyuwVeLsd9GeIrr060qelJ3vCDAiomIQeZ1in2%2By0ibPbmqXjEodKZOc0L2ItxnlKVqh8ZskJPzquIxBCBSYZRCSm7mrOhFBf3iVDQj6Q2h3MswGhjSaUQiSPIvepfboiazWY%2FkIc7k3l0ZSkwaZJF3cIdXKNdE%2Bvrsv7ZNUdt90tewWx%2BebgTtMpUUcXQsHh3n9L4IApr3bBzEFEx4fFinIAVB%2BmnkAm7qUFVoGdJncDxmqYvHrWnrFTmvum%2FzGz7icuyGHIiAOBijBOdzWgv9OEY%2BylSBc5Ufe21hOuVpxITiE5QjWBTMsMZuQ7Cj2iSK2qBJs3s6KUzIDjSHhO8bMI5IZymu%2FdjJ5aG5qJTCgoP0xQ4YEDsXwCRwSg1N%2Fuw1q7dQI3ZOuPGwqMZoCB9rhN5FgNMygweLMbuv1Udq%2Fuho0%2FmlL6HAngHZ1Q7f4WeLHYeWeYaQAdjqoqFckY9%2Fon%2BetY%2FX7yqwv3f92wDaWJF%2FtqUtfrRPZMGxKF1PotQ5ZYLhtuGUC17%2BRdG8rVBqyY3SJHaowpOupR5XtYcRLgqt8qBBlJFKcXH%2BJZz8w0dHFwQY6pgG1CtjPU0U790Rtn7%2BO7cSRiAKg0n10rUQJgP37Rk2YkL8Zrsc2N8f9%2BK4UGfeO22ch6biyu5xPNoMGb2TI6nUFL0Onc3Spq6uSGxABTSrjugGDiwsUrM98pXiTOd87%2FT0bqvepbUR5RlcIsyJM1nYkO2QltM0YAwmw5xNg0zu0Erm%2B7rDxRBqQhhu0GZYBrRNvN%2BjvYi8erR%2BKphLYzqiEPJB91cgc&X-Amz-Signature=8e8e510e78de0486b68ba72ad5ac83901a0ae1f21d741456d7b310a31c181673&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBLMW5Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvIGhG4ky9JjMA%2BcHY2KkO%2FxRZuDODx7PE%2F1erPkyQQAiALBy%2FQIbm3N1F%2FmDqG5DNGL079B4GGnm40S9ByBeUlmSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxBNSvVFIqbwMMp%2BQKtwDSFqpt9d9U0cMTG0sYXdtrw%2FN%2FCWsdmtBgmQf%2Fcn6cQMLvJYnRik%2BJB8KPgp8TyuwVeLsd9GeIrr060qelJ3vCDAiomIQeZ1in2%2By0ibPbmqXjEodKZOc0L2ItxnlKVqh8ZskJPzquIxBCBSYZRCSm7mrOhFBf3iVDQj6Q2h3MswGhjSaUQiSPIvepfboiazWY%2FkIc7k3l0ZSkwaZJF3cIdXKNdE%2Bvrsv7ZNUdt90tewWx%2BebgTtMpUUcXQsHh3n9L4IApr3bBzEFEx4fFinIAVB%2BmnkAm7qUFVoGdJncDxmqYvHrWnrFTmvum%2FzGz7icuyGHIiAOBijBOdzWgv9OEY%2BylSBc5Ufe21hOuVpxITiE5QjWBTMsMZuQ7Cj2iSK2qBJs3s6KUzIDjSHhO8bMI5IZymu%2FdjJ5aG5qJTCgoP0xQ4YEDsXwCRwSg1N%2Fuw1q7dQI3ZOuPGwqMZoCB9rhN5FgNMygweLMbuv1Udq%2Fuho0%2FmlL6HAngHZ1Q7f4WeLHYeWeYaQAdjqoqFckY9%2Fon%2BetY%2FX7yqwv3f92wDaWJF%2FtqUtfrRPZMGxKF1PotQ5ZYLhtuGUC17%2BRdG8rVBqyY3SJHaowpOupR5XtYcRLgqt8qBBlJFKcXH%2BJZz8w0dHFwQY6pgG1CtjPU0U790Rtn7%2BO7cSRiAKg0n10rUQJgP37Rk2YkL8Zrsc2N8f9%2BK4UGfeO22ch6biyu5xPNoMGb2TI6nUFL0Onc3Spq6uSGxABTSrjugGDiwsUrM98pXiTOd87%2FT0bqvepbUR5RlcIsyJM1nYkO2QltM0YAwmw5xNg0zu0Erm%2B7rDxRBqQhhu0GZYBrRNvN%2BjvYi8erR%2BKphLYzqiEPJB91cgc&X-Amz-Signature=272b7f5e8d87ac67a0720c2b446ddce3f26495ba8e564a0100fd148f34e615c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBLMW5Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvIGhG4ky9JjMA%2BcHY2KkO%2FxRZuDODx7PE%2F1erPkyQQAiALBy%2FQIbm3N1F%2FmDqG5DNGL079B4GGnm40S9ByBeUlmSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxBNSvVFIqbwMMp%2BQKtwDSFqpt9d9U0cMTG0sYXdtrw%2FN%2FCWsdmtBgmQf%2Fcn6cQMLvJYnRik%2BJB8KPgp8TyuwVeLsd9GeIrr060qelJ3vCDAiomIQeZ1in2%2By0ibPbmqXjEodKZOc0L2ItxnlKVqh8ZskJPzquIxBCBSYZRCSm7mrOhFBf3iVDQj6Q2h3MswGhjSaUQiSPIvepfboiazWY%2FkIc7k3l0ZSkwaZJF3cIdXKNdE%2Bvrsv7ZNUdt90tewWx%2BebgTtMpUUcXQsHh3n9L4IApr3bBzEFEx4fFinIAVB%2BmnkAm7qUFVoGdJncDxmqYvHrWnrFTmvum%2FzGz7icuyGHIiAOBijBOdzWgv9OEY%2BylSBc5Ufe21hOuVpxITiE5QjWBTMsMZuQ7Cj2iSK2qBJs3s6KUzIDjSHhO8bMI5IZymu%2FdjJ5aG5qJTCgoP0xQ4YEDsXwCRwSg1N%2Fuw1q7dQI3ZOuPGwqMZoCB9rhN5FgNMygweLMbuv1Udq%2Fuho0%2FmlL6HAngHZ1Q7f4WeLHYeWeYaQAdjqoqFckY9%2Fon%2BetY%2FX7yqwv3f92wDaWJF%2FtqUtfrRPZMGxKF1PotQ5ZYLhtuGUC17%2BRdG8rVBqyY3SJHaowpOupR5XtYcRLgqt8qBBlJFKcXH%2BJZz8w0dHFwQY6pgG1CtjPU0U790Rtn7%2BO7cSRiAKg0n10rUQJgP37Rk2YkL8Zrsc2N8f9%2BK4UGfeO22ch6biyu5xPNoMGb2TI6nUFL0Onc3Spq6uSGxABTSrjugGDiwsUrM98pXiTOd87%2FT0bqvepbUR5RlcIsyJM1nYkO2QltM0YAwmw5xNg0zu0Erm%2B7rDxRBqQhhu0GZYBrRNvN%2BjvYi8erR%2BKphLYzqiEPJB91cgc&X-Amz-Signature=7dc0569c1de0331796994fdb18c0c5c63bc14139bd7204c40ed7b8773e2c802f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBLMW5Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvIGhG4ky9JjMA%2BcHY2KkO%2FxRZuDODx7PE%2F1erPkyQQAiALBy%2FQIbm3N1F%2FmDqG5DNGL079B4GGnm40S9ByBeUlmSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxBNSvVFIqbwMMp%2BQKtwDSFqpt9d9U0cMTG0sYXdtrw%2FN%2FCWsdmtBgmQf%2Fcn6cQMLvJYnRik%2BJB8KPgp8TyuwVeLsd9GeIrr060qelJ3vCDAiomIQeZ1in2%2By0ibPbmqXjEodKZOc0L2ItxnlKVqh8ZskJPzquIxBCBSYZRCSm7mrOhFBf3iVDQj6Q2h3MswGhjSaUQiSPIvepfboiazWY%2FkIc7k3l0ZSkwaZJF3cIdXKNdE%2Bvrsv7ZNUdt90tewWx%2BebgTtMpUUcXQsHh3n9L4IApr3bBzEFEx4fFinIAVB%2BmnkAm7qUFVoGdJncDxmqYvHrWnrFTmvum%2FzGz7icuyGHIiAOBijBOdzWgv9OEY%2BylSBc5Ufe21hOuVpxITiE5QjWBTMsMZuQ7Cj2iSK2qBJs3s6KUzIDjSHhO8bMI5IZymu%2FdjJ5aG5qJTCgoP0xQ4YEDsXwCRwSg1N%2Fuw1q7dQI3ZOuPGwqMZoCB9rhN5FgNMygweLMbuv1Udq%2Fuho0%2FmlL6HAngHZ1Q7f4WeLHYeWeYaQAdjqoqFckY9%2Fon%2BetY%2FX7yqwv3f92wDaWJF%2FtqUtfrRPZMGxKF1PotQ5ZYLhtuGUC17%2BRdG8rVBqyY3SJHaowpOupR5XtYcRLgqt8qBBlJFKcXH%2BJZz8w0dHFwQY6pgG1CtjPU0U790Rtn7%2BO7cSRiAKg0n10rUQJgP37Rk2YkL8Zrsc2N8f9%2BK4UGfeO22ch6biyu5xPNoMGb2TI6nUFL0Onc3Spq6uSGxABTSrjugGDiwsUrM98pXiTOd87%2FT0bqvepbUR5RlcIsyJM1nYkO2QltM0YAwmw5xNg0zu0Erm%2B7rDxRBqQhhu0GZYBrRNvN%2BjvYi8erR%2BKphLYzqiEPJB91cgc&X-Amz-Signature=6bbfac2206b7f42fa706b30a8ee518a9bb487395db08ae40e5341bb86ef0eee5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBLMW5Z%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFvIGhG4ky9JjMA%2BcHY2KkO%2FxRZuDODx7PE%2F1erPkyQQAiALBy%2FQIbm3N1F%2FmDqG5DNGL079B4GGnm40S9ByBeUlmSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxBNSvVFIqbwMMp%2BQKtwDSFqpt9d9U0cMTG0sYXdtrw%2FN%2FCWsdmtBgmQf%2Fcn6cQMLvJYnRik%2BJB8KPgp8TyuwVeLsd9GeIrr060qelJ3vCDAiomIQeZ1in2%2By0ibPbmqXjEodKZOc0L2ItxnlKVqh8ZskJPzquIxBCBSYZRCSm7mrOhFBf3iVDQj6Q2h3MswGhjSaUQiSPIvepfboiazWY%2FkIc7k3l0ZSkwaZJF3cIdXKNdE%2Bvrsv7ZNUdt90tewWx%2BebgTtMpUUcXQsHh3n9L4IApr3bBzEFEx4fFinIAVB%2BmnkAm7qUFVoGdJncDxmqYvHrWnrFTmvum%2FzGz7icuyGHIiAOBijBOdzWgv9OEY%2BylSBc5Ufe21hOuVpxITiE5QjWBTMsMZuQ7Cj2iSK2qBJs3s6KUzIDjSHhO8bMI5IZymu%2FdjJ5aG5qJTCgoP0xQ4YEDsXwCRwSg1N%2Fuw1q7dQI3ZOuPGwqMZoCB9rhN5FgNMygweLMbuv1Udq%2Fuho0%2FmlL6HAngHZ1Q7f4WeLHYeWeYaQAdjqoqFckY9%2Fon%2BetY%2FX7yqwv3f92wDaWJF%2FtqUtfrRPZMGxKF1PotQ5ZYLhtuGUC17%2BRdG8rVBqyY3SJHaowpOupR5XtYcRLgqt8qBBlJFKcXH%2BJZz8w0dHFwQY6pgG1CtjPU0U790Rtn7%2BO7cSRiAKg0n10rUQJgP37Rk2YkL8Zrsc2N8f9%2BK4UGfeO22ch6biyu5xPNoMGb2TI6nUFL0Onc3Spq6uSGxABTSrjugGDiwsUrM98pXiTOd87%2FT0bqvepbUR5RlcIsyJM1nYkO2QltM0YAwmw5xNg0zu0Erm%2B7rDxRBqQhhu0GZYBrRNvN%2BjvYi8erR%2BKphLYzqiEPJB91cgc&X-Amz-Signature=ecc08fedf48fd84b5ea2b4f0e723bf2933e6f7009502383bbaf42b0e5521d025&X-Amz-SignedHeaders=host&x-id=GetObject)
