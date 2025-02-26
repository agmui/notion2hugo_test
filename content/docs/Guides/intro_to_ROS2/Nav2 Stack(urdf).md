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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP6QV6N%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCMOm9E10ONCc8iAcBY8EnqZSLjlaKXRqCfYx%2BXCTpWUQIgAaUOaCQbAYbtmnlNoJpbZwn4PQ1zHCErR9FaSjhAu9Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBkOz2Qh0RgIVR4Z%2ByrcA9onKSEPxrFVYWmwmoMTqAg4q4xmlXsVe1uzxtdMkEypY0FpLYoLe6ho3LBZZx%2BM3DZMXfSbDaf8Ge%2F8GE6P0IfK%2FjvC1mOMf6JOpnnj2QrbPHhi%2B25vz80HxQhQoFHXjVn8mdZyid8sq5l%2FOmbwdwBhuOTMFGYS2FRyaxaS11UJwdLYugmYdGNM5atOYUCtAScZ%2FkfAJrsMj%2FULaXIs8c%2BGlrZa1QufRO8eJmLJelZNLQ2txaEor2e73dPplcKjqgKrnWmhNQuhVCJp7uQrNfzN20PDdWNgqmwuvFOJhyuzQahmLv6%2Flb5X5HyiGspfOGt9pAV6aplBTP6Z9atVELwDt1c8LKdYvKDKxg2Ad5HSiVkPRbWeElsvKJJT1Y0ljBP34pEyNuhH84VZNtFRyUdB%2FFAuY6FxOQ46SHCwWo%2FmWpFEcJej8WcI5atBxGOHp7thArnlEq0zgb%2Fwk656yJuIxXdX1m44WJ%2F0Qn%2FwawEq03UKTamXoM3kIVMYvJ0a3NymHlz9aNMvUaOZqVEfNXkA5dUi7CFHq%2FY3TFJ%2FTtmwaaIdE%2BihOhfSJiHWBqXb%2FW0N3GWtuH8tvrKs500YW4STZjhma1NVCTtythaAxAeuNg7GkyLK24KOGncOMN%2Fj%2Fb0GOqUBiqC5EI29vk6UnhoiOP03x8s0%2Fm%2BfIsEGicfWZM%2BbTZ7OgGlq0pnO7Ddrh%2BDEb3vlfwxNBBAEpnGwd9NPnzsjxEMgXWJA9Bv10SOBzUF3NNLhQ%2BwJf6znBkK88jCkjUjrAFgxEMNH3KY3ffOanlq21tpHDZ0tInSiqUjfRLABTTuQorcuyjPp%2FgsWgosAwxcauPx2Axg7YXnWCRaxDkIJpQZJUi3c&X-Amz-Signature=284c370a3660e07c15bd7ca7fe60c3507faac1f920806ac3677df628c9709295&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP6QV6N%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCMOm9E10ONCc8iAcBY8EnqZSLjlaKXRqCfYx%2BXCTpWUQIgAaUOaCQbAYbtmnlNoJpbZwn4PQ1zHCErR9FaSjhAu9Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBkOz2Qh0RgIVR4Z%2ByrcA9onKSEPxrFVYWmwmoMTqAg4q4xmlXsVe1uzxtdMkEypY0FpLYoLe6ho3LBZZx%2BM3DZMXfSbDaf8Ge%2F8GE6P0IfK%2FjvC1mOMf6JOpnnj2QrbPHhi%2B25vz80HxQhQoFHXjVn8mdZyid8sq5l%2FOmbwdwBhuOTMFGYS2FRyaxaS11UJwdLYugmYdGNM5atOYUCtAScZ%2FkfAJrsMj%2FULaXIs8c%2BGlrZa1QufRO8eJmLJelZNLQ2txaEor2e73dPplcKjqgKrnWmhNQuhVCJp7uQrNfzN20PDdWNgqmwuvFOJhyuzQahmLv6%2Flb5X5HyiGspfOGt9pAV6aplBTP6Z9atVELwDt1c8LKdYvKDKxg2Ad5HSiVkPRbWeElsvKJJT1Y0ljBP34pEyNuhH84VZNtFRyUdB%2FFAuY6FxOQ46SHCwWo%2FmWpFEcJej8WcI5atBxGOHp7thArnlEq0zgb%2Fwk656yJuIxXdX1m44WJ%2F0Qn%2FwawEq03UKTamXoM3kIVMYvJ0a3NymHlz9aNMvUaOZqVEfNXkA5dUi7CFHq%2FY3TFJ%2FTtmwaaIdE%2BihOhfSJiHWBqXb%2FW0N3GWtuH8tvrKs500YW4STZjhma1NVCTtythaAxAeuNg7GkyLK24KOGncOMN%2Fj%2Fb0GOqUBiqC5EI29vk6UnhoiOP03x8s0%2Fm%2BfIsEGicfWZM%2BbTZ7OgGlq0pnO7Ddrh%2BDEb3vlfwxNBBAEpnGwd9NPnzsjxEMgXWJA9Bv10SOBzUF3NNLhQ%2BwJf6znBkK88jCkjUjrAFgxEMNH3KY3ffOanlq21tpHDZ0tInSiqUjfRLABTTuQorcuyjPp%2FgsWgosAwxcauPx2Axg7YXnWCRaxDkIJpQZJUi3c&X-Amz-Signature=6b8148ef15f07f05ded0b9445a0ea301bb412d628f68e2d86b87fe1c2626e418&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP6QV6N%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCMOm9E10ONCc8iAcBY8EnqZSLjlaKXRqCfYx%2BXCTpWUQIgAaUOaCQbAYbtmnlNoJpbZwn4PQ1zHCErR9FaSjhAu9Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBkOz2Qh0RgIVR4Z%2ByrcA9onKSEPxrFVYWmwmoMTqAg4q4xmlXsVe1uzxtdMkEypY0FpLYoLe6ho3LBZZx%2BM3DZMXfSbDaf8Ge%2F8GE6P0IfK%2FjvC1mOMf6JOpnnj2QrbPHhi%2B25vz80HxQhQoFHXjVn8mdZyid8sq5l%2FOmbwdwBhuOTMFGYS2FRyaxaS11UJwdLYugmYdGNM5atOYUCtAScZ%2FkfAJrsMj%2FULaXIs8c%2BGlrZa1QufRO8eJmLJelZNLQ2txaEor2e73dPplcKjqgKrnWmhNQuhVCJp7uQrNfzN20PDdWNgqmwuvFOJhyuzQahmLv6%2Flb5X5HyiGspfOGt9pAV6aplBTP6Z9atVELwDt1c8LKdYvKDKxg2Ad5HSiVkPRbWeElsvKJJT1Y0ljBP34pEyNuhH84VZNtFRyUdB%2FFAuY6FxOQ46SHCwWo%2FmWpFEcJej8WcI5atBxGOHp7thArnlEq0zgb%2Fwk656yJuIxXdX1m44WJ%2F0Qn%2FwawEq03UKTamXoM3kIVMYvJ0a3NymHlz9aNMvUaOZqVEfNXkA5dUi7CFHq%2FY3TFJ%2FTtmwaaIdE%2BihOhfSJiHWBqXb%2FW0N3GWtuH8tvrKs500YW4STZjhma1NVCTtythaAxAeuNg7GkyLK24KOGncOMN%2Fj%2Fb0GOqUBiqC5EI29vk6UnhoiOP03x8s0%2Fm%2BfIsEGicfWZM%2BbTZ7OgGlq0pnO7Ddrh%2BDEb3vlfwxNBBAEpnGwd9NPnzsjxEMgXWJA9Bv10SOBzUF3NNLhQ%2BwJf6znBkK88jCkjUjrAFgxEMNH3KY3ffOanlq21tpHDZ0tInSiqUjfRLABTTuQorcuyjPp%2FgsWgosAwxcauPx2Axg7YXnWCRaxDkIJpQZJUi3c&X-Amz-Signature=b5c03ac6ac12fad8f2349386a47bed64ffc8a49b15794631379c73eb3fd98472&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP6QV6N%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCMOm9E10ONCc8iAcBY8EnqZSLjlaKXRqCfYx%2BXCTpWUQIgAaUOaCQbAYbtmnlNoJpbZwn4PQ1zHCErR9FaSjhAu9Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBkOz2Qh0RgIVR4Z%2ByrcA9onKSEPxrFVYWmwmoMTqAg4q4xmlXsVe1uzxtdMkEypY0FpLYoLe6ho3LBZZx%2BM3DZMXfSbDaf8Ge%2F8GE6P0IfK%2FjvC1mOMf6JOpnnj2QrbPHhi%2B25vz80HxQhQoFHXjVn8mdZyid8sq5l%2FOmbwdwBhuOTMFGYS2FRyaxaS11UJwdLYugmYdGNM5atOYUCtAScZ%2FkfAJrsMj%2FULaXIs8c%2BGlrZa1QufRO8eJmLJelZNLQ2txaEor2e73dPplcKjqgKrnWmhNQuhVCJp7uQrNfzN20PDdWNgqmwuvFOJhyuzQahmLv6%2Flb5X5HyiGspfOGt9pAV6aplBTP6Z9atVELwDt1c8LKdYvKDKxg2Ad5HSiVkPRbWeElsvKJJT1Y0ljBP34pEyNuhH84VZNtFRyUdB%2FFAuY6FxOQ46SHCwWo%2FmWpFEcJej8WcI5atBxGOHp7thArnlEq0zgb%2Fwk656yJuIxXdX1m44WJ%2F0Qn%2FwawEq03UKTamXoM3kIVMYvJ0a3NymHlz9aNMvUaOZqVEfNXkA5dUi7CFHq%2FY3TFJ%2FTtmwaaIdE%2BihOhfSJiHWBqXb%2FW0N3GWtuH8tvrKs500YW4STZjhma1NVCTtythaAxAeuNg7GkyLK24KOGncOMN%2Fj%2Fb0GOqUBiqC5EI29vk6UnhoiOP03x8s0%2Fm%2BfIsEGicfWZM%2BbTZ7OgGlq0pnO7Ddrh%2BDEb3vlfwxNBBAEpnGwd9NPnzsjxEMgXWJA9Bv10SOBzUF3NNLhQ%2BwJf6znBkK88jCkjUjrAFgxEMNH3KY3ffOanlq21tpHDZ0tInSiqUjfRLABTTuQorcuyjPp%2FgsWgosAwxcauPx2Axg7YXnWCRaxDkIJpQZJUi3c&X-Amz-Signature=f1287d4fa5a9a52f35a4b4b1fc4a65c42eaf39d642046ead9145669c0450e5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP6QV6N%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCMOm9E10ONCc8iAcBY8EnqZSLjlaKXRqCfYx%2BXCTpWUQIgAaUOaCQbAYbtmnlNoJpbZwn4PQ1zHCErR9FaSjhAu9Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBkOz2Qh0RgIVR4Z%2ByrcA9onKSEPxrFVYWmwmoMTqAg4q4xmlXsVe1uzxtdMkEypY0FpLYoLe6ho3LBZZx%2BM3DZMXfSbDaf8Ge%2F8GE6P0IfK%2FjvC1mOMf6JOpnnj2QrbPHhi%2B25vz80HxQhQoFHXjVn8mdZyid8sq5l%2FOmbwdwBhuOTMFGYS2FRyaxaS11UJwdLYugmYdGNM5atOYUCtAScZ%2FkfAJrsMj%2FULaXIs8c%2BGlrZa1QufRO8eJmLJelZNLQ2txaEor2e73dPplcKjqgKrnWmhNQuhVCJp7uQrNfzN20PDdWNgqmwuvFOJhyuzQahmLv6%2Flb5X5HyiGspfOGt9pAV6aplBTP6Z9atVELwDt1c8LKdYvKDKxg2Ad5HSiVkPRbWeElsvKJJT1Y0ljBP34pEyNuhH84VZNtFRyUdB%2FFAuY6FxOQ46SHCwWo%2FmWpFEcJej8WcI5atBxGOHp7thArnlEq0zgb%2Fwk656yJuIxXdX1m44WJ%2F0Qn%2FwawEq03UKTamXoM3kIVMYvJ0a3NymHlz9aNMvUaOZqVEfNXkA5dUi7CFHq%2FY3TFJ%2FTtmwaaIdE%2BihOhfSJiHWBqXb%2FW0N3GWtuH8tvrKs500YW4STZjhma1NVCTtythaAxAeuNg7GkyLK24KOGncOMN%2Fj%2Fb0GOqUBiqC5EI29vk6UnhoiOP03x8s0%2Fm%2BfIsEGicfWZM%2BbTZ7OgGlq0pnO7Ddrh%2BDEb3vlfwxNBBAEpnGwd9NPnzsjxEMgXWJA9Bv10SOBzUF3NNLhQ%2BwJf6znBkK88jCkjUjrAFgxEMNH3KY3ffOanlq21tpHDZ0tInSiqUjfRLABTTuQorcuyjPp%2FgsWgosAwxcauPx2Axg7YXnWCRaxDkIJpQZJUi3c&X-Amz-Signature=c86b535d0298600d29dee771f5c1288e37fd7d34501b69ce48f4445dfde684a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWP6QV6N%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCMOm9E10ONCc8iAcBY8EnqZSLjlaKXRqCfYx%2BXCTpWUQIgAaUOaCQbAYbtmnlNoJpbZwn4PQ1zHCErR9FaSjhAu9Mq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBkOz2Qh0RgIVR4Z%2ByrcA9onKSEPxrFVYWmwmoMTqAg4q4xmlXsVe1uzxtdMkEypY0FpLYoLe6ho3LBZZx%2BM3DZMXfSbDaf8Ge%2F8GE6P0IfK%2FjvC1mOMf6JOpnnj2QrbPHhi%2B25vz80HxQhQoFHXjVn8mdZyid8sq5l%2FOmbwdwBhuOTMFGYS2FRyaxaS11UJwdLYugmYdGNM5atOYUCtAScZ%2FkfAJrsMj%2FULaXIs8c%2BGlrZa1QufRO8eJmLJelZNLQ2txaEor2e73dPplcKjqgKrnWmhNQuhVCJp7uQrNfzN20PDdWNgqmwuvFOJhyuzQahmLv6%2Flb5X5HyiGspfOGt9pAV6aplBTP6Z9atVELwDt1c8LKdYvKDKxg2Ad5HSiVkPRbWeElsvKJJT1Y0ljBP34pEyNuhH84VZNtFRyUdB%2FFAuY6FxOQ46SHCwWo%2FmWpFEcJej8WcI5atBxGOHp7thArnlEq0zgb%2Fwk656yJuIxXdX1m44WJ%2F0Qn%2FwawEq03UKTamXoM3kIVMYvJ0a3NymHlz9aNMvUaOZqVEfNXkA5dUi7CFHq%2FY3TFJ%2FTtmwaaIdE%2BihOhfSJiHWBqXb%2FW0N3GWtuH8tvrKs500YW4STZjhma1NVCTtythaAxAeuNg7GkyLK24KOGncOMN%2Fj%2Fb0GOqUBiqC5EI29vk6UnhoiOP03x8s0%2Fm%2BfIsEGicfWZM%2BbTZ7OgGlq0pnO7Ddrh%2BDEb3vlfwxNBBAEpnGwd9NPnzsjxEMgXWJA9Bv10SOBzUF3NNLhQ%2BwJf6znBkK88jCkjUjrAFgxEMNH3KY3ffOanlq21tpHDZ0tInSiqUjfRLABTTuQorcuyjPp%2FgsWgosAwxcauPx2Axg7YXnWCRaxDkIJpQZJUi3c&X-Amz-Signature=c83b543f1a7d4e5ebffbdbe01a8fecbd1b903c1f0c31e76776fd3d41fa7e0fde&X-Amz-SignedHeaders=host&x-id=GetObject)
