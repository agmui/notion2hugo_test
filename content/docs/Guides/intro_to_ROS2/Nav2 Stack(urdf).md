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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUT5KC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pnjhWN9zRD6qdsUKGgFw%2FWGSpP02ViihzTzEMmBSegIgAwCDHLrqeKZjVud4Xg%2BBySKGoTPNwtqxnLl7HH4yObcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIFNpxzEsiqmH45amCrcA49pZ%2BJwJ5wDtmHAtz8rhHxU7d3uCDs1jg%2FXuqE59d5hH7YfnlxJqyQW9sabOjL%2BOiqCz%2B74VzF3zYJejL08Wt%2BH2iqlHyYjv3VftVt006%2Bf%2FEEn0J%2Fr%2FbyaQEHyNOW2GaYx%2FofMlsQ2cqjTT2zV7gxaLTk0AplcPuTggfLX0tpW3vT8TP3sHyDcrUJUTpZ6w%2BG1dE%2BT5NbfoyajKNS4DNlNGlf%2BEDctwC2IrocJX8IY%2FBQMr5mIXUom3FJKvf5tqQ23X26rRxaQd2ADQ6KAxCmP6aUXv4JKzeO%2BXZSFTWuYFVqLKKTAez7Ad0Bgmbt2nIqvywiwEUntE%2FhdYWuWXY2vAIxBRvMwu%2B5TluyyvjYIJF2EjsVdEXUp3JGBZg5Kc1u%2FG9PIVk65MwwiAcQIcZQiM%2BUI%2BpIzCzQpaXl1iYm9aCi4bTu5tTbstqoxjM5FRnxms9Ywxxy59qADJ1rcsGY9WHyLo0MHES%2BGRm2o%2BTX9MG%2FR%2BgLjJzWTj1OCLwrn%2BATXj2%2FIRnZDi4jgVAcR2r1lPoAasLrmDumeb4F8OFpX3vEQypZJC%2FRZsQQjV%2FzvcaO3iuV9plQ8QXpVk0%2BlgYmyC7RRO5pdVlJsj7ACnBYid%2F5tKmGyzrYGP4njMLCjo74GOqUB90dZpVIcZ8Gprm33PDur20iCzkaeQ2TvhkmKDWcpQy%2B8qENUTcTSw%2BaTUMHtGVDDbv4ZTYpJJV64gfY8m6y0r91kjI%2BbzLj%2BkLtYWV0A8vttzcDYTNP5C7iGbV9neB6e7EBIuADeUFwpeMWJUh68owFl%2FVJABalJEgJsYJRss8XH4kJ7n0tNdKzBIJ00pfkKjkljiR7FDDxOiZMennPHoTYpEq46&X-Amz-Signature=56ede7d42f4b604df15dd6f0c9e58124f5aebf3eba697d360820be186c5c113d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUT5KC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pnjhWN9zRD6qdsUKGgFw%2FWGSpP02ViihzTzEMmBSegIgAwCDHLrqeKZjVud4Xg%2BBySKGoTPNwtqxnLl7HH4yObcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIFNpxzEsiqmH45amCrcA49pZ%2BJwJ5wDtmHAtz8rhHxU7d3uCDs1jg%2FXuqE59d5hH7YfnlxJqyQW9sabOjL%2BOiqCz%2B74VzF3zYJejL08Wt%2BH2iqlHyYjv3VftVt006%2Bf%2FEEn0J%2Fr%2FbyaQEHyNOW2GaYx%2FofMlsQ2cqjTT2zV7gxaLTk0AplcPuTggfLX0tpW3vT8TP3sHyDcrUJUTpZ6w%2BG1dE%2BT5NbfoyajKNS4DNlNGlf%2BEDctwC2IrocJX8IY%2FBQMr5mIXUom3FJKvf5tqQ23X26rRxaQd2ADQ6KAxCmP6aUXv4JKzeO%2BXZSFTWuYFVqLKKTAez7Ad0Bgmbt2nIqvywiwEUntE%2FhdYWuWXY2vAIxBRvMwu%2B5TluyyvjYIJF2EjsVdEXUp3JGBZg5Kc1u%2FG9PIVk65MwwiAcQIcZQiM%2BUI%2BpIzCzQpaXl1iYm9aCi4bTu5tTbstqoxjM5FRnxms9Ywxxy59qADJ1rcsGY9WHyLo0MHES%2BGRm2o%2BTX9MG%2FR%2BgLjJzWTj1OCLwrn%2BATXj2%2FIRnZDi4jgVAcR2r1lPoAasLrmDumeb4F8OFpX3vEQypZJC%2FRZsQQjV%2FzvcaO3iuV9plQ8QXpVk0%2BlgYmyC7RRO5pdVlJsj7ACnBYid%2F5tKmGyzrYGP4njMLCjo74GOqUB90dZpVIcZ8Gprm33PDur20iCzkaeQ2TvhkmKDWcpQy%2B8qENUTcTSw%2BaTUMHtGVDDbv4ZTYpJJV64gfY8m6y0r91kjI%2BbzLj%2BkLtYWV0A8vttzcDYTNP5C7iGbV9neB6e7EBIuADeUFwpeMWJUh68owFl%2FVJABalJEgJsYJRss8XH4kJ7n0tNdKzBIJ00pfkKjkljiR7FDDxOiZMennPHoTYpEq46&X-Amz-Signature=c0fe87aba261e096629b0962b4f9cf421c473ff7dbf5c8b96b46c260266843de&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUT5KC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pnjhWN9zRD6qdsUKGgFw%2FWGSpP02ViihzTzEMmBSegIgAwCDHLrqeKZjVud4Xg%2BBySKGoTPNwtqxnLl7HH4yObcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIFNpxzEsiqmH45amCrcA49pZ%2BJwJ5wDtmHAtz8rhHxU7d3uCDs1jg%2FXuqE59d5hH7YfnlxJqyQW9sabOjL%2BOiqCz%2B74VzF3zYJejL08Wt%2BH2iqlHyYjv3VftVt006%2Bf%2FEEn0J%2Fr%2FbyaQEHyNOW2GaYx%2FofMlsQ2cqjTT2zV7gxaLTk0AplcPuTggfLX0tpW3vT8TP3sHyDcrUJUTpZ6w%2BG1dE%2BT5NbfoyajKNS4DNlNGlf%2BEDctwC2IrocJX8IY%2FBQMr5mIXUom3FJKvf5tqQ23X26rRxaQd2ADQ6KAxCmP6aUXv4JKzeO%2BXZSFTWuYFVqLKKTAez7Ad0Bgmbt2nIqvywiwEUntE%2FhdYWuWXY2vAIxBRvMwu%2B5TluyyvjYIJF2EjsVdEXUp3JGBZg5Kc1u%2FG9PIVk65MwwiAcQIcZQiM%2BUI%2BpIzCzQpaXl1iYm9aCi4bTu5tTbstqoxjM5FRnxms9Ywxxy59qADJ1rcsGY9WHyLo0MHES%2BGRm2o%2BTX9MG%2FR%2BgLjJzWTj1OCLwrn%2BATXj2%2FIRnZDi4jgVAcR2r1lPoAasLrmDumeb4F8OFpX3vEQypZJC%2FRZsQQjV%2FzvcaO3iuV9plQ8QXpVk0%2BlgYmyC7RRO5pdVlJsj7ACnBYid%2F5tKmGyzrYGP4njMLCjo74GOqUB90dZpVIcZ8Gprm33PDur20iCzkaeQ2TvhkmKDWcpQy%2B8qENUTcTSw%2BaTUMHtGVDDbv4ZTYpJJV64gfY8m6y0r91kjI%2BbzLj%2BkLtYWV0A8vttzcDYTNP5C7iGbV9neB6e7EBIuADeUFwpeMWJUh68owFl%2FVJABalJEgJsYJRss8XH4kJ7n0tNdKzBIJ00pfkKjkljiR7FDDxOiZMennPHoTYpEq46&X-Amz-Signature=712a943599eccf6cab8093dd2a4651b709f602dae9db355e1e2099c3b4505bda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUT5KC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pnjhWN9zRD6qdsUKGgFw%2FWGSpP02ViihzTzEMmBSegIgAwCDHLrqeKZjVud4Xg%2BBySKGoTPNwtqxnLl7HH4yObcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIFNpxzEsiqmH45amCrcA49pZ%2BJwJ5wDtmHAtz8rhHxU7d3uCDs1jg%2FXuqE59d5hH7YfnlxJqyQW9sabOjL%2BOiqCz%2B74VzF3zYJejL08Wt%2BH2iqlHyYjv3VftVt006%2Bf%2FEEn0J%2Fr%2FbyaQEHyNOW2GaYx%2FofMlsQ2cqjTT2zV7gxaLTk0AplcPuTggfLX0tpW3vT8TP3sHyDcrUJUTpZ6w%2BG1dE%2BT5NbfoyajKNS4DNlNGlf%2BEDctwC2IrocJX8IY%2FBQMr5mIXUom3FJKvf5tqQ23X26rRxaQd2ADQ6KAxCmP6aUXv4JKzeO%2BXZSFTWuYFVqLKKTAez7Ad0Bgmbt2nIqvywiwEUntE%2FhdYWuWXY2vAIxBRvMwu%2B5TluyyvjYIJF2EjsVdEXUp3JGBZg5Kc1u%2FG9PIVk65MwwiAcQIcZQiM%2BUI%2BpIzCzQpaXl1iYm9aCi4bTu5tTbstqoxjM5FRnxms9Ywxxy59qADJ1rcsGY9WHyLo0MHES%2BGRm2o%2BTX9MG%2FR%2BgLjJzWTj1OCLwrn%2BATXj2%2FIRnZDi4jgVAcR2r1lPoAasLrmDumeb4F8OFpX3vEQypZJC%2FRZsQQjV%2FzvcaO3iuV9plQ8QXpVk0%2BlgYmyC7RRO5pdVlJsj7ACnBYid%2F5tKmGyzrYGP4njMLCjo74GOqUB90dZpVIcZ8Gprm33PDur20iCzkaeQ2TvhkmKDWcpQy%2B8qENUTcTSw%2BaTUMHtGVDDbv4ZTYpJJV64gfY8m6y0r91kjI%2BbzLj%2BkLtYWV0A8vttzcDYTNP5C7iGbV9neB6e7EBIuADeUFwpeMWJUh68owFl%2FVJABalJEgJsYJRss8XH4kJ7n0tNdKzBIJ00pfkKjkljiR7FDDxOiZMennPHoTYpEq46&X-Amz-Signature=39eaccbd6d93c607fa8a32f1965b79dcfeb1fb3538a8825d33f73c12040dc641&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUT5KC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pnjhWN9zRD6qdsUKGgFw%2FWGSpP02ViihzTzEMmBSegIgAwCDHLrqeKZjVud4Xg%2BBySKGoTPNwtqxnLl7HH4yObcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIFNpxzEsiqmH45amCrcA49pZ%2BJwJ5wDtmHAtz8rhHxU7d3uCDs1jg%2FXuqE59d5hH7YfnlxJqyQW9sabOjL%2BOiqCz%2B74VzF3zYJejL08Wt%2BH2iqlHyYjv3VftVt006%2Bf%2FEEn0J%2Fr%2FbyaQEHyNOW2GaYx%2FofMlsQ2cqjTT2zV7gxaLTk0AplcPuTggfLX0tpW3vT8TP3sHyDcrUJUTpZ6w%2BG1dE%2BT5NbfoyajKNS4DNlNGlf%2BEDctwC2IrocJX8IY%2FBQMr5mIXUom3FJKvf5tqQ23X26rRxaQd2ADQ6KAxCmP6aUXv4JKzeO%2BXZSFTWuYFVqLKKTAez7Ad0Bgmbt2nIqvywiwEUntE%2FhdYWuWXY2vAIxBRvMwu%2B5TluyyvjYIJF2EjsVdEXUp3JGBZg5Kc1u%2FG9PIVk65MwwiAcQIcZQiM%2BUI%2BpIzCzQpaXl1iYm9aCi4bTu5tTbstqoxjM5FRnxms9Ywxxy59qADJ1rcsGY9WHyLo0MHES%2BGRm2o%2BTX9MG%2FR%2BgLjJzWTj1OCLwrn%2BATXj2%2FIRnZDi4jgVAcR2r1lPoAasLrmDumeb4F8OFpX3vEQypZJC%2FRZsQQjV%2FzvcaO3iuV9plQ8QXpVk0%2BlgYmyC7RRO5pdVlJsj7ACnBYid%2F5tKmGyzrYGP4njMLCjo74GOqUB90dZpVIcZ8Gprm33PDur20iCzkaeQ2TvhkmKDWcpQy%2B8qENUTcTSw%2BaTUMHtGVDDbv4ZTYpJJV64gfY8m6y0r91kjI%2BbzLj%2BkLtYWV0A8vttzcDYTNP5C7iGbV9neB6e7EBIuADeUFwpeMWJUh68owFl%2FVJABalJEgJsYJRss8XH4kJ7n0tNdKzBIJ00pfkKjkljiR7FDDxOiZMennPHoTYpEq46&X-Amz-Signature=2ec40eca774b00e2c98ab21d85e1eb5ab0f010efe65974f6ac014479c487b2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUT5KC6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4pnjhWN9zRD6qdsUKGgFw%2FWGSpP02ViihzTzEMmBSegIgAwCDHLrqeKZjVud4Xg%2BBySKGoTPNwtqxnLl7HH4yObcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIFNpxzEsiqmH45amCrcA49pZ%2BJwJ5wDtmHAtz8rhHxU7d3uCDs1jg%2FXuqE59d5hH7YfnlxJqyQW9sabOjL%2BOiqCz%2B74VzF3zYJejL08Wt%2BH2iqlHyYjv3VftVt006%2Bf%2FEEn0J%2Fr%2FbyaQEHyNOW2GaYx%2FofMlsQ2cqjTT2zV7gxaLTk0AplcPuTggfLX0tpW3vT8TP3sHyDcrUJUTpZ6w%2BG1dE%2BT5NbfoyajKNS4DNlNGlf%2BEDctwC2IrocJX8IY%2FBQMr5mIXUom3FJKvf5tqQ23X26rRxaQd2ADQ6KAxCmP6aUXv4JKzeO%2BXZSFTWuYFVqLKKTAez7Ad0Bgmbt2nIqvywiwEUntE%2FhdYWuWXY2vAIxBRvMwu%2B5TluyyvjYIJF2EjsVdEXUp3JGBZg5Kc1u%2FG9PIVk65MwwiAcQIcZQiM%2BUI%2BpIzCzQpaXl1iYm9aCi4bTu5tTbstqoxjM5FRnxms9Ywxxy59qADJ1rcsGY9WHyLo0MHES%2BGRm2o%2BTX9MG%2FR%2BgLjJzWTj1OCLwrn%2BATXj2%2FIRnZDi4jgVAcR2r1lPoAasLrmDumeb4F8OFpX3vEQypZJC%2FRZsQQjV%2FzvcaO3iuV9plQ8QXpVk0%2BlgYmyC7RRO5pdVlJsj7ACnBYid%2F5tKmGyzrYGP4njMLCjo74GOqUB90dZpVIcZ8Gprm33PDur20iCzkaeQ2TvhkmKDWcpQy%2B8qENUTcTSw%2BaTUMHtGVDDbv4ZTYpJJV64gfY8m6y0r91kjI%2BbzLj%2BkLtYWV0A8vttzcDYTNP5C7iGbV9neB6e7EBIuADeUFwpeMWJUh68owFl%2FVJABalJEgJsYJRss8XH4kJ7n0tNdKzBIJ00pfkKjkljiR7FDDxOiZMennPHoTYpEq46&X-Amz-Signature=d6ed8bb103401c195df99601fd2b23e0d3de55dcdde456b60a4f01d0b7a04cc6&X-Amz-SignedHeaders=host&x-id=GetObject)
