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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVF2JWL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF2qVECgRid9nvYJ4X%2FpJGKtGmX9mqFMdYO1ACTRnBi%2BAiEAsYo2YeQ9pasL7CUIVKO%2BwTk6gJ5pOiDmVhlY4hmRG%2BoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxUkB3ue3HM8TqbSrcA0VU2o4sYqBP8nOl6weVDcDt2oT4aI4wHBu7NEzQb%2FoiTeEC4q47tz1FHmwFzEH3Q6C1NoYFwLzJZRAtMUcWsNtF9Sg4Il%2BFUOsUEsFYnOpgNHhI6cQ5eM83%2F51bd%2FVNynqKJeLF9r2qW%2BzTepw9gCos5FryBB3RtFoUpk6iUxyu%2BDkodZ5hEU2xud5nFi98rhK4KDHgxRlQaRPQ8QoKkZxdYfUIayfDBhQbYJ7h8GnG0e61IFAP2HBUrh4Xft3VYka89Bv3qMsYY1DrjcPo7R3VqtPZMwTSUaGESaXX9muvAK4rkuPFFXSVkQkUhfsAiuyGKni7EO24%2BQPTKGZWys5BYo9vTaA0uCTEkt6ERj%2FwbjKx7BE5OafflzD1CmOi1OVJgfpVak2yDjJfRVOWde58K5OQHoKX5C7Z%2FnJp8Ej3m3wu56NGFx4%2BTNUuq6J%2FMDROJYlwJWD%2BbCPhgN0ZX8v1yDe2iqT02AjeEZTJLi3Q0Q6VTHOvQXJCPG5wneGV4xAybzOroZ8Zs%2Ft9xyap4F55NeMKkJtq0XdJW5WqwYNQsN5EIKhrB29QAeK68bLA3SooQHN4hUF65ABl%2BMgXwyorFbYwwQ4TV%2B1SfMQXtTkH5neodD3o4UakhGT3MNa4q78GOqUBoVGTAazj8TJjoC1kGlP7kg%2Bsg23l4SxCxXNEu6tOC9ELrfpRZMIGf8jq%2BsUVrOHLD3gTayXci9kwic6EMaWyLRHQf7svBt%2F%2F4BkyDiQfaFPXi569GJ%2FccEXg%2BKjgAoAxrYg1Hp2M3MkZZep4B4Tq63YUDeuDplDdQrmxAZUfUKn5pE9V9ezU6WBy2oJJJ1QY3ZRGTCO9UbExCCtkfpFWEjiGIln1&X-Amz-Signature=b7b53460564e80f6de9b4b6873b6509b99ba708e9ec6384b7598b0be41d835a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVF2JWL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF2qVECgRid9nvYJ4X%2FpJGKtGmX9mqFMdYO1ACTRnBi%2BAiEAsYo2YeQ9pasL7CUIVKO%2BwTk6gJ5pOiDmVhlY4hmRG%2BoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxUkB3ue3HM8TqbSrcA0VU2o4sYqBP8nOl6weVDcDt2oT4aI4wHBu7NEzQb%2FoiTeEC4q47tz1FHmwFzEH3Q6C1NoYFwLzJZRAtMUcWsNtF9Sg4Il%2BFUOsUEsFYnOpgNHhI6cQ5eM83%2F51bd%2FVNynqKJeLF9r2qW%2BzTepw9gCos5FryBB3RtFoUpk6iUxyu%2BDkodZ5hEU2xud5nFi98rhK4KDHgxRlQaRPQ8QoKkZxdYfUIayfDBhQbYJ7h8GnG0e61IFAP2HBUrh4Xft3VYka89Bv3qMsYY1DrjcPo7R3VqtPZMwTSUaGESaXX9muvAK4rkuPFFXSVkQkUhfsAiuyGKni7EO24%2BQPTKGZWys5BYo9vTaA0uCTEkt6ERj%2FwbjKx7BE5OafflzD1CmOi1OVJgfpVak2yDjJfRVOWde58K5OQHoKX5C7Z%2FnJp8Ej3m3wu56NGFx4%2BTNUuq6J%2FMDROJYlwJWD%2BbCPhgN0ZX8v1yDe2iqT02AjeEZTJLi3Q0Q6VTHOvQXJCPG5wneGV4xAybzOroZ8Zs%2Ft9xyap4F55NeMKkJtq0XdJW5WqwYNQsN5EIKhrB29QAeK68bLA3SooQHN4hUF65ABl%2BMgXwyorFbYwwQ4TV%2B1SfMQXtTkH5neodD3o4UakhGT3MNa4q78GOqUBoVGTAazj8TJjoC1kGlP7kg%2Bsg23l4SxCxXNEu6tOC9ELrfpRZMIGf8jq%2BsUVrOHLD3gTayXci9kwic6EMaWyLRHQf7svBt%2F%2F4BkyDiQfaFPXi569GJ%2FccEXg%2BKjgAoAxrYg1Hp2M3MkZZep4B4Tq63YUDeuDplDdQrmxAZUfUKn5pE9V9ezU6WBy2oJJJ1QY3ZRGTCO9UbExCCtkfpFWEjiGIln1&X-Amz-Signature=af9304d004e66887afec701e971188fb2be6177b30a5fb47d3b2dc05554c4464&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVF2JWL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF2qVECgRid9nvYJ4X%2FpJGKtGmX9mqFMdYO1ACTRnBi%2BAiEAsYo2YeQ9pasL7CUIVKO%2BwTk6gJ5pOiDmVhlY4hmRG%2BoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxUkB3ue3HM8TqbSrcA0VU2o4sYqBP8nOl6weVDcDt2oT4aI4wHBu7NEzQb%2FoiTeEC4q47tz1FHmwFzEH3Q6C1NoYFwLzJZRAtMUcWsNtF9Sg4Il%2BFUOsUEsFYnOpgNHhI6cQ5eM83%2F51bd%2FVNynqKJeLF9r2qW%2BzTepw9gCos5FryBB3RtFoUpk6iUxyu%2BDkodZ5hEU2xud5nFi98rhK4KDHgxRlQaRPQ8QoKkZxdYfUIayfDBhQbYJ7h8GnG0e61IFAP2HBUrh4Xft3VYka89Bv3qMsYY1DrjcPo7R3VqtPZMwTSUaGESaXX9muvAK4rkuPFFXSVkQkUhfsAiuyGKni7EO24%2BQPTKGZWys5BYo9vTaA0uCTEkt6ERj%2FwbjKx7BE5OafflzD1CmOi1OVJgfpVak2yDjJfRVOWde58K5OQHoKX5C7Z%2FnJp8Ej3m3wu56NGFx4%2BTNUuq6J%2FMDROJYlwJWD%2BbCPhgN0ZX8v1yDe2iqT02AjeEZTJLi3Q0Q6VTHOvQXJCPG5wneGV4xAybzOroZ8Zs%2Ft9xyap4F55NeMKkJtq0XdJW5WqwYNQsN5EIKhrB29QAeK68bLA3SooQHN4hUF65ABl%2BMgXwyorFbYwwQ4TV%2B1SfMQXtTkH5neodD3o4UakhGT3MNa4q78GOqUBoVGTAazj8TJjoC1kGlP7kg%2Bsg23l4SxCxXNEu6tOC9ELrfpRZMIGf8jq%2BsUVrOHLD3gTayXci9kwic6EMaWyLRHQf7svBt%2F%2F4BkyDiQfaFPXi569GJ%2FccEXg%2BKjgAoAxrYg1Hp2M3MkZZep4B4Tq63YUDeuDplDdQrmxAZUfUKn5pE9V9ezU6WBy2oJJJ1QY3ZRGTCO9UbExCCtkfpFWEjiGIln1&X-Amz-Signature=51db9e97f81d8d65adbbb09d8357f6f2e8b0a7d1358c932bd59a3df47aa293b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVF2JWL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF2qVECgRid9nvYJ4X%2FpJGKtGmX9mqFMdYO1ACTRnBi%2BAiEAsYo2YeQ9pasL7CUIVKO%2BwTk6gJ5pOiDmVhlY4hmRG%2BoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxUkB3ue3HM8TqbSrcA0VU2o4sYqBP8nOl6weVDcDt2oT4aI4wHBu7NEzQb%2FoiTeEC4q47tz1FHmwFzEH3Q6C1NoYFwLzJZRAtMUcWsNtF9Sg4Il%2BFUOsUEsFYnOpgNHhI6cQ5eM83%2F51bd%2FVNynqKJeLF9r2qW%2BzTepw9gCos5FryBB3RtFoUpk6iUxyu%2BDkodZ5hEU2xud5nFi98rhK4KDHgxRlQaRPQ8QoKkZxdYfUIayfDBhQbYJ7h8GnG0e61IFAP2HBUrh4Xft3VYka89Bv3qMsYY1DrjcPo7R3VqtPZMwTSUaGESaXX9muvAK4rkuPFFXSVkQkUhfsAiuyGKni7EO24%2BQPTKGZWys5BYo9vTaA0uCTEkt6ERj%2FwbjKx7BE5OafflzD1CmOi1OVJgfpVak2yDjJfRVOWde58K5OQHoKX5C7Z%2FnJp8Ej3m3wu56NGFx4%2BTNUuq6J%2FMDROJYlwJWD%2BbCPhgN0ZX8v1yDe2iqT02AjeEZTJLi3Q0Q6VTHOvQXJCPG5wneGV4xAybzOroZ8Zs%2Ft9xyap4F55NeMKkJtq0XdJW5WqwYNQsN5EIKhrB29QAeK68bLA3SooQHN4hUF65ABl%2BMgXwyorFbYwwQ4TV%2B1SfMQXtTkH5neodD3o4UakhGT3MNa4q78GOqUBoVGTAazj8TJjoC1kGlP7kg%2Bsg23l4SxCxXNEu6tOC9ELrfpRZMIGf8jq%2BsUVrOHLD3gTayXci9kwic6EMaWyLRHQf7svBt%2F%2F4BkyDiQfaFPXi569GJ%2FccEXg%2BKjgAoAxrYg1Hp2M3MkZZep4B4Tq63YUDeuDplDdQrmxAZUfUKn5pE9V9ezU6WBy2oJJJ1QY3ZRGTCO9UbExCCtkfpFWEjiGIln1&X-Amz-Signature=016ac213f7bcba38b8b8556f306c4918420674952bbe3773cac58f9199618349&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVF2JWL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF2qVECgRid9nvYJ4X%2FpJGKtGmX9mqFMdYO1ACTRnBi%2BAiEAsYo2YeQ9pasL7CUIVKO%2BwTk6gJ5pOiDmVhlY4hmRG%2BoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxUkB3ue3HM8TqbSrcA0VU2o4sYqBP8nOl6weVDcDt2oT4aI4wHBu7NEzQb%2FoiTeEC4q47tz1FHmwFzEH3Q6C1NoYFwLzJZRAtMUcWsNtF9Sg4Il%2BFUOsUEsFYnOpgNHhI6cQ5eM83%2F51bd%2FVNynqKJeLF9r2qW%2BzTepw9gCos5FryBB3RtFoUpk6iUxyu%2BDkodZ5hEU2xud5nFi98rhK4KDHgxRlQaRPQ8QoKkZxdYfUIayfDBhQbYJ7h8GnG0e61IFAP2HBUrh4Xft3VYka89Bv3qMsYY1DrjcPo7R3VqtPZMwTSUaGESaXX9muvAK4rkuPFFXSVkQkUhfsAiuyGKni7EO24%2BQPTKGZWys5BYo9vTaA0uCTEkt6ERj%2FwbjKx7BE5OafflzD1CmOi1OVJgfpVak2yDjJfRVOWde58K5OQHoKX5C7Z%2FnJp8Ej3m3wu56NGFx4%2BTNUuq6J%2FMDROJYlwJWD%2BbCPhgN0ZX8v1yDe2iqT02AjeEZTJLi3Q0Q6VTHOvQXJCPG5wneGV4xAybzOroZ8Zs%2Ft9xyap4F55NeMKkJtq0XdJW5WqwYNQsN5EIKhrB29QAeK68bLA3SooQHN4hUF65ABl%2BMgXwyorFbYwwQ4TV%2B1SfMQXtTkH5neodD3o4UakhGT3MNa4q78GOqUBoVGTAazj8TJjoC1kGlP7kg%2Bsg23l4SxCxXNEu6tOC9ELrfpRZMIGf8jq%2BsUVrOHLD3gTayXci9kwic6EMaWyLRHQf7svBt%2F%2F4BkyDiQfaFPXi569GJ%2FccEXg%2BKjgAoAxrYg1Hp2M3MkZZep4B4Tq63YUDeuDplDdQrmxAZUfUKn5pE9V9ezU6WBy2oJJJ1QY3ZRGTCO9UbExCCtkfpFWEjiGIln1&X-Amz-Signature=29b8863d781271fecf7a5be5edcf6d394ae428bff9f1c1a3ba56daee257c2df9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVF2JWL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF2qVECgRid9nvYJ4X%2FpJGKtGmX9mqFMdYO1ACTRnBi%2BAiEAsYo2YeQ9pasL7CUIVKO%2BwTk6gJ5pOiDmVhlY4hmRG%2BoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxUkB3ue3HM8TqbSrcA0VU2o4sYqBP8nOl6weVDcDt2oT4aI4wHBu7NEzQb%2FoiTeEC4q47tz1FHmwFzEH3Q6C1NoYFwLzJZRAtMUcWsNtF9Sg4Il%2BFUOsUEsFYnOpgNHhI6cQ5eM83%2F51bd%2FVNynqKJeLF9r2qW%2BzTepw9gCos5FryBB3RtFoUpk6iUxyu%2BDkodZ5hEU2xud5nFi98rhK4KDHgxRlQaRPQ8QoKkZxdYfUIayfDBhQbYJ7h8GnG0e61IFAP2HBUrh4Xft3VYka89Bv3qMsYY1DrjcPo7R3VqtPZMwTSUaGESaXX9muvAK4rkuPFFXSVkQkUhfsAiuyGKni7EO24%2BQPTKGZWys5BYo9vTaA0uCTEkt6ERj%2FwbjKx7BE5OafflzD1CmOi1OVJgfpVak2yDjJfRVOWde58K5OQHoKX5C7Z%2FnJp8Ej3m3wu56NGFx4%2BTNUuq6J%2FMDROJYlwJWD%2BbCPhgN0ZX8v1yDe2iqT02AjeEZTJLi3Q0Q6VTHOvQXJCPG5wneGV4xAybzOroZ8Zs%2Ft9xyap4F55NeMKkJtq0XdJW5WqwYNQsN5EIKhrB29QAeK68bLA3SooQHN4hUF65ABl%2BMgXwyorFbYwwQ4TV%2B1SfMQXtTkH5neodD3o4UakhGT3MNa4q78GOqUBoVGTAazj8TJjoC1kGlP7kg%2Bsg23l4SxCxXNEu6tOC9ELrfpRZMIGf8jq%2BsUVrOHLD3gTayXci9kwic6EMaWyLRHQf7svBt%2F%2F4BkyDiQfaFPXi569GJ%2FccEXg%2BKjgAoAxrYg1Hp2M3MkZZep4B4Tq63YUDeuDplDdQrmxAZUfUKn5pE9V9ezU6WBy2oJJJ1QY3ZRGTCO9UbExCCtkfpFWEjiGIln1&X-Amz-Signature=d00f100f62734743dd499db5c8f05446c62b9e7bdb3d517993a662ee237ed6b5&X-Amz-SignedHeaders=host&x-id=GetObject)
