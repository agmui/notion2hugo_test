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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAQFTYE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFT3IiYAVlVqJp3Kusl5AH134giodsxUXPAnxXF0m0PWAiEAlPld08g4dVDHjaJtEN6FQzFb7UI%2FFfVyZpXP2OuuQEoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSz9qUlgpzvSADFNircA03El4BpztiB0vr40lh8hstNJmYs349ODPCVSLcjGJBTYQ%2BQdSbFmCpyIi5fMoIXU1tQ%2B6EL%2FCL3GAOeVaUQW8tfOnQtAuiacdepdWXVhH7szvkIz29WEgDgYucUnRgryMgad2q3xNboMc%2BiSWQX7YxQcLKVJWn%2B64WY9grMdThPdKR%2FIe0vJQjqho0S6GNhJdl67SakTgUYsWkCbbQLdo7SjwTowBVkSkQIL6hiGYD0woA9rNtdraja%2FqBPwAAUDFXEDG27RhgRpRCJDoykEdPnx0K%2BdHlZoBKJyvfSBBZtLyLEsFo%2BHu7zC7QQ3k3DFsSTq37UBSpetR5nLimz%2FhBPYqG6bufKBQdm36cvNHzCa%2FujNSEUJdlZD253Nagq8V8Zl%2BuCGDLjZIIstK6MRVtESn7rKTaKL5vyZP2AhVL7AHWEMmlPK2nR5Tsl2Vl%2BgMPwjnmFOmPD%2F1mKFABOFPQbVl1ubrd16IJydN56pLjBFMBvzrvEUXU6xUtsdrYWE6AyzNwI1MiEwyN0sW8njdsjbo1EJYS4At5lLqB3%2BxZEgAL6EY6e9xqdFKJR5xhoT7towyCR1U%2FDjxvq0HgbtaEl0rEc5CipY3sq5BYXmwRc8eDBoNYx0hzlN6ANMIGHkMEGOqUBxETtgdD3qj8jMH%2Fo56YdLSHu%2BUeM%2BnAWUkMb9f6lWdhI4ZF3iuRgOdp39gJbCocFyYPaBNdhYMmIzBVZvaLyilZYsTjCFXx182JUy3hqDGF6W04xUYaMxqYMd%2BAOJHTVVrp3TPdJXFgWZzImh56ynCTEiZrwFE2%2Bk2D6HV2TyVVnt8zYwtivWORAO%2FCUXmGraylrP7jJUowgg6RSu91a0ugVKXiR&X-Amz-Signature=9476dcc8d7b171d09158a733f48950a945c1a548836cb60464c8efe0d9cc4102&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAQFTYE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFT3IiYAVlVqJp3Kusl5AH134giodsxUXPAnxXF0m0PWAiEAlPld08g4dVDHjaJtEN6FQzFb7UI%2FFfVyZpXP2OuuQEoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSz9qUlgpzvSADFNircA03El4BpztiB0vr40lh8hstNJmYs349ODPCVSLcjGJBTYQ%2BQdSbFmCpyIi5fMoIXU1tQ%2B6EL%2FCL3GAOeVaUQW8tfOnQtAuiacdepdWXVhH7szvkIz29WEgDgYucUnRgryMgad2q3xNboMc%2BiSWQX7YxQcLKVJWn%2B64WY9grMdThPdKR%2FIe0vJQjqho0S6GNhJdl67SakTgUYsWkCbbQLdo7SjwTowBVkSkQIL6hiGYD0woA9rNtdraja%2FqBPwAAUDFXEDG27RhgRpRCJDoykEdPnx0K%2BdHlZoBKJyvfSBBZtLyLEsFo%2BHu7zC7QQ3k3DFsSTq37UBSpetR5nLimz%2FhBPYqG6bufKBQdm36cvNHzCa%2FujNSEUJdlZD253Nagq8V8Zl%2BuCGDLjZIIstK6MRVtESn7rKTaKL5vyZP2AhVL7AHWEMmlPK2nR5Tsl2Vl%2BgMPwjnmFOmPD%2F1mKFABOFPQbVl1ubrd16IJydN56pLjBFMBvzrvEUXU6xUtsdrYWE6AyzNwI1MiEwyN0sW8njdsjbo1EJYS4At5lLqB3%2BxZEgAL6EY6e9xqdFKJR5xhoT7towyCR1U%2FDjxvq0HgbtaEl0rEc5CipY3sq5BYXmwRc8eDBoNYx0hzlN6ANMIGHkMEGOqUBxETtgdD3qj8jMH%2Fo56YdLSHu%2BUeM%2BnAWUkMb9f6lWdhI4ZF3iuRgOdp39gJbCocFyYPaBNdhYMmIzBVZvaLyilZYsTjCFXx182JUy3hqDGF6W04xUYaMxqYMd%2BAOJHTVVrp3TPdJXFgWZzImh56ynCTEiZrwFE2%2Bk2D6HV2TyVVnt8zYwtivWORAO%2FCUXmGraylrP7jJUowgg6RSu91a0ugVKXiR&X-Amz-Signature=7e9e4136129791f724502f1ab0edc4a2ad4076a81db0caa38def1f5cf1237f76&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAQFTYE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFT3IiYAVlVqJp3Kusl5AH134giodsxUXPAnxXF0m0PWAiEAlPld08g4dVDHjaJtEN6FQzFb7UI%2FFfVyZpXP2OuuQEoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSz9qUlgpzvSADFNircA03El4BpztiB0vr40lh8hstNJmYs349ODPCVSLcjGJBTYQ%2BQdSbFmCpyIi5fMoIXU1tQ%2B6EL%2FCL3GAOeVaUQW8tfOnQtAuiacdepdWXVhH7szvkIz29WEgDgYucUnRgryMgad2q3xNboMc%2BiSWQX7YxQcLKVJWn%2B64WY9grMdThPdKR%2FIe0vJQjqho0S6GNhJdl67SakTgUYsWkCbbQLdo7SjwTowBVkSkQIL6hiGYD0woA9rNtdraja%2FqBPwAAUDFXEDG27RhgRpRCJDoykEdPnx0K%2BdHlZoBKJyvfSBBZtLyLEsFo%2BHu7zC7QQ3k3DFsSTq37UBSpetR5nLimz%2FhBPYqG6bufKBQdm36cvNHzCa%2FujNSEUJdlZD253Nagq8V8Zl%2BuCGDLjZIIstK6MRVtESn7rKTaKL5vyZP2AhVL7AHWEMmlPK2nR5Tsl2Vl%2BgMPwjnmFOmPD%2F1mKFABOFPQbVl1ubrd16IJydN56pLjBFMBvzrvEUXU6xUtsdrYWE6AyzNwI1MiEwyN0sW8njdsjbo1EJYS4At5lLqB3%2BxZEgAL6EY6e9xqdFKJR5xhoT7towyCR1U%2FDjxvq0HgbtaEl0rEc5CipY3sq5BYXmwRc8eDBoNYx0hzlN6ANMIGHkMEGOqUBxETtgdD3qj8jMH%2Fo56YdLSHu%2BUeM%2BnAWUkMb9f6lWdhI4ZF3iuRgOdp39gJbCocFyYPaBNdhYMmIzBVZvaLyilZYsTjCFXx182JUy3hqDGF6W04xUYaMxqYMd%2BAOJHTVVrp3TPdJXFgWZzImh56ynCTEiZrwFE2%2Bk2D6HV2TyVVnt8zYwtivWORAO%2FCUXmGraylrP7jJUowgg6RSu91a0ugVKXiR&X-Amz-Signature=9253487f3693dedfa3df091afb9020ee925c61d0cc5595b3cc2a641a5953a8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAQFTYE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFT3IiYAVlVqJp3Kusl5AH134giodsxUXPAnxXF0m0PWAiEAlPld08g4dVDHjaJtEN6FQzFb7UI%2FFfVyZpXP2OuuQEoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSz9qUlgpzvSADFNircA03El4BpztiB0vr40lh8hstNJmYs349ODPCVSLcjGJBTYQ%2BQdSbFmCpyIi5fMoIXU1tQ%2B6EL%2FCL3GAOeVaUQW8tfOnQtAuiacdepdWXVhH7szvkIz29WEgDgYucUnRgryMgad2q3xNboMc%2BiSWQX7YxQcLKVJWn%2B64WY9grMdThPdKR%2FIe0vJQjqho0S6GNhJdl67SakTgUYsWkCbbQLdo7SjwTowBVkSkQIL6hiGYD0woA9rNtdraja%2FqBPwAAUDFXEDG27RhgRpRCJDoykEdPnx0K%2BdHlZoBKJyvfSBBZtLyLEsFo%2BHu7zC7QQ3k3DFsSTq37UBSpetR5nLimz%2FhBPYqG6bufKBQdm36cvNHzCa%2FujNSEUJdlZD253Nagq8V8Zl%2BuCGDLjZIIstK6MRVtESn7rKTaKL5vyZP2AhVL7AHWEMmlPK2nR5Tsl2Vl%2BgMPwjnmFOmPD%2F1mKFABOFPQbVl1ubrd16IJydN56pLjBFMBvzrvEUXU6xUtsdrYWE6AyzNwI1MiEwyN0sW8njdsjbo1EJYS4At5lLqB3%2BxZEgAL6EY6e9xqdFKJR5xhoT7towyCR1U%2FDjxvq0HgbtaEl0rEc5CipY3sq5BYXmwRc8eDBoNYx0hzlN6ANMIGHkMEGOqUBxETtgdD3qj8jMH%2Fo56YdLSHu%2BUeM%2BnAWUkMb9f6lWdhI4ZF3iuRgOdp39gJbCocFyYPaBNdhYMmIzBVZvaLyilZYsTjCFXx182JUy3hqDGF6W04xUYaMxqYMd%2BAOJHTVVrp3TPdJXFgWZzImh56ynCTEiZrwFE2%2Bk2D6HV2TyVVnt8zYwtivWORAO%2FCUXmGraylrP7jJUowgg6RSu91a0ugVKXiR&X-Amz-Signature=7986433ca0eb18f03721feb763bc02e223f5d7054e61431be7b763ba7b103061&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAQFTYE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFT3IiYAVlVqJp3Kusl5AH134giodsxUXPAnxXF0m0PWAiEAlPld08g4dVDHjaJtEN6FQzFb7UI%2FFfVyZpXP2OuuQEoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSz9qUlgpzvSADFNircA03El4BpztiB0vr40lh8hstNJmYs349ODPCVSLcjGJBTYQ%2BQdSbFmCpyIi5fMoIXU1tQ%2B6EL%2FCL3GAOeVaUQW8tfOnQtAuiacdepdWXVhH7szvkIz29WEgDgYucUnRgryMgad2q3xNboMc%2BiSWQX7YxQcLKVJWn%2B64WY9grMdThPdKR%2FIe0vJQjqho0S6GNhJdl67SakTgUYsWkCbbQLdo7SjwTowBVkSkQIL6hiGYD0woA9rNtdraja%2FqBPwAAUDFXEDG27RhgRpRCJDoykEdPnx0K%2BdHlZoBKJyvfSBBZtLyLEsFo%2BHu7zC7QQ3k3DFsSTq37UBSpetR5nLimz%2FhBPYqG6bufKBQdm36cvNHzCa%2FujNSEUJdlZD253Nagq8V8Zl%2BuCGDLjZIIstK6MRVtESn7rKTaKL5vyZP2AhVL7AHWEMmlPK2nR5Tsl2Vl%2BgMPwjnmFOmPD%2F1mKFABOFPQbVl1ubrd16IJydN56pLjBFMBvzrvEUXU6xUtsdrYWE6AyzNwI1MiEwyN0sW8njdsjbo1EJYS4At5lLqB3%2BxZEgAL6EY6e9xqdFKJR5xhoT7towyCR1U%2FDjxvq0HgbtaEl0rEc5CipY3sq5BYXmwRc8eDBoNYx0hzlN6ANMIGHkMEGOqUBxETtgdD3qj8jMH%2Fo56YdLSHu%2BUeM%2BnAWUkMb9f6lWdhI4ZF3iuRgOdp39gJbCocFyYPaBNdhYMmIzBVZvaLyilZYsTjCFXx182JUy3hqDGF6W04xUYaMxqYMd%2BAOJHTVVrp3TPdJXFgWZzImh56ynCTEiZrwFE2%2Bk2D6HV2TyVVnt8zYwtivWORAO%2FCUXmGraylrP7jJUowgg6RSu91a0ugVKXiR&X-Amz-Signature=6cbea56e05c456372fe38fd4543a3c5b8973006e0d125f68baa38098f39a66c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAQFTYE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFT3IiYAVlVqJp3Kusl5AH134giodsxUXPAnxXF0m0PWAiEAlPld08g4dVDHjaJtEN6FQzFb7UI%2FFfVyZpXP2OuuQEoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSz9qUlgpzvSADFNircA03El4BpztiB0vr40lh8hstNJmYs349ODPCVSLcjGJBTYQ%2BQdSbFmCpyIi5fMoIXU1tQ%2B6EL%2FCL3GAOeVaUQW8tfOnQtAuiacdepdWXVhH7szvkIz29WEgDgYucUnRgryMgad2q3xNboMc%2BiSWQX7YxQcLKVJWn%2B64WY9grMdThPdKR%2FIe0vJQjqho0S6GNhJdl67SakTgUYsWkCbbQLdo7SjwTowBVkSkQIL6hiGYD0woA9rNtdraja%2FqBPwAAUDFXEDG27RhgRpRCJDoykEdPnx0K%2BdHlZoBKJyvfSBBZtLyLEsFo%2BHu7zC7QQ3k3DFsSTq37UBSpetR5nLimz%2FhBPYqG6bufKBQdm36cvNHzCa%2FujNSEUJdlZD253Nagq8V8Zl%2BuCGDLjZIIstK6MRVtESn7rKTaKL5vyZP2AhVL7AHWEMmlPK2nR5Tsl2Vl%2BgMPwjnmFOmPD%2F1mKFABOFPQbVl1ubrd16IJydN56pLjBFMBvzrvEUXU6xUtsdrYWE6AyzNwI1MiEwyN0sW8njdsjbo1EJYS4At5lLqB3%2BxZEgAL6EY6e9xqdFKJR5xhoT7towyCR1U%2FDjxvq0HgbtaEl0rEc5CipY3sq5BYXmwRc8eDBoNYx0hzlN6ANMIGHkMEGOqUBxETtgdD3qj8jMH%2Fo56YdLSHu%2BUeM%2BnAWUkMb9f6lWdhI4ZF3iuRgOdp39gJbCocFyYPaBNdhYMmIzBVZvaLyilZYsTjCFXx182JUy3hqDGF6W04xUYaMxqYMd%2BAOJHTVVrp3TPdJXFgWZzImh56ynCTEiZrwFE2%2Bk2D6HV2TyVVnt8zYwtivWORAO%2FCUXmGraylrP7jJUowgg6RSu91a0ugVKXiR&X-Amz-Signature=3cc58cbccb960d801100c449bded067538f456abda373da8234516bc35d47578&X-Amz-SignedHeaders=host&x-id=GetObject)
