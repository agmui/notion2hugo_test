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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXMEZCW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoFE9TOgdsANrRJ3xh9nzmQj%2BYfALHECUmhXDvOi7fQIhALDH3pzTOh7C%2F7dzbuxDpzgrLn9jE8fbUc9jCQuYIh6oKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmCw%2FD7njDw3eSQYq3ANN8RnKe4HKucgGSffwn70m2IzfojtKNsPaLQJOKWese1JI2pnKtLSMrX%2Bm9d%2FC6b5%2BvQRcsfSuNDoqAAIKPCC8m8xnKViyqM%2FyMFOzrMyQAUNRLrmr7x25SU1QJa7PLI%2B10bS2ABTPPONAmUaX1mjwV6iKxLwOYvzlgSWMUY2jo0UjSHsEStFM%2BpisdxpLgwBHNO%2BXy%2FMw90vL%2FBeEw9aHqEZkmFaEzssR%2FfL9SmFc5WbjTf6UPzi3mi1UlkP%2FmQYtPpCeJlbt%2FdP2oITS%2Fm0awsUP%2FEc%2FrAR0dYtwFyY8lHVQKWyryXjs3YxPMUmUQRNQWVzVa8ADZ0Z4QcD8lMeuanRBj%2FzNNuG%2BETs4uASLC%2FIkf6pxQFxc%2FT25Knhm9BBBzF3JgmnG0Q92IaZBvgjLKvjFLCCtJOHhcKBiVIl6DKv4v3nbBWpNqhyLp8lgSICVOg604CdhcYSyj2Yti9WIFxAi8RBFHbQK0OpLfDWC8%2FNyGb6kTRJodlkKECEh9Ii3pSEfBF2qqJzdtl4Uu5J0QvTwZ%2FB59%2BgMsNJ%2Fyf0Cia17pl1yhjnDRBoGBGtptJvAuPgNcsi2dgFIMz9Qs%2ByvB%2B%2FEE4N8luhk%2FgPFeGt8Roe6KFnTq5T8SNA%2BuTC3wJq%2BBjqkAQiY4eWKjUQ4GtHlmc%2FYPTi%2BoWaTa2ya9D26O2G1oo0LAMY%2BqaLKbA45%2BSPNHGrhEzg5NclUCtT618jkRhGhLe1ZL45J0RRbpOikEX5oceC%2BlwAsc6hM%2BZ4RJS1rLxZndUExeZ63WUAG0oqC9eB3Y46XoNejwqgqr%2FXPoOGJ%2BvUEJUsO7Yln74wgJ8qi8KSCeC9AfQbv0qmA%2FGj%2BgMMJZGCpxZoC&X-Amz-Signature=0189cd9f31a2f379b6dd27bcfd70962f3648d24d11453cf84090d240e7ef9a94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXMEZCW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoFE9TOgdsANrRJ3xh9nzmQj%2BYfALHECUmhXDvOi7fQIhALDH3pzTOh7C%2F7dzbuxDpzgrLn9jE8fbUc9jCQuYIh6oKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmCw%2FD7njDw3eSQYq3ANN8RnKe4HKucgGSffwn70m2IzfojtKNsPaLQJOKWese1JI2pnKtLSMrX%2Bm9d%2FC6b5%2BvQRcsfSuNDoqAAIKPCC8m8xnKViyqM%2FyMFOzrMyQAUNRLrmr7x25SU1QJa7PLI%2B10bS2ABTPPONAmUaX1mjwV6iKxLwOYvzlgSWMUY2jo0UjSHsEStFM%2BpisdxpLgwBHNO%2BXy%2FMw90vL%2FBeEw9aHqEZkmFaEzssR%2FfL9SmFc5WbjTf6UPzi3mi1UlkP%2FmQYtPpCeJlbt%2FdP2oITS%2Fm0awsUP%2FEc%2FrAR0dYtwFyY8lHVQKWyryXjs3YxPMUmUQRNQWVzVa8ADZ0Z4QcD8lMeuanRBj%2FzNNuG%2BETs4uASLC%2FIkf6pxQFxc%2FT25Knhm9BBBzF3JgmnG0Q92IaZBvgjLKvjFLCCtJOHhcKBiVIl6DKv4v3nbBWpNqhyLp8lgSICVOg604CdhcYSyj2Yti9WIFxAi8RBFHbQK0OpLfDWC8%2FNyGb6kTRJodlkKECEh9Ii3pSEfBF2qqJzdtl4Uu5J0QvTwZ%2FB59%2BgMsNJ%2Fyf0Cia17pl1yhjnDRBoGBGtptJvAuPgNcsi2dgFIMz9Qs%2ByvB%2B%2FEE4N8luhk%2FgPFeGt8Roe6KFnTq5T8SNA%2BuTC3wJq%2BBjqkAQiY4eWKjUQ4GtHlmc%2FYPTi%2BoWaTa2ya9D26O2G1oo0LAMY%2BqaLKbA45%2BSPNHGrhEzg5NclUCtT618jkRhGhLe1ZL45J0RRbpOikEX5oceC%2BlwAsc6hM%2BZ4RJS1rLxZndUExeZ63WUAG0oqC9eB3Y46XoNejwqgqr%2FXPoOGJ%2BvUEJUsO7Yln74wgJ8qi8KSCeC9AfQbv0qmA%2FGj%2BgMMJZGCpxZoC&X-Amz-Signature=79d4fb99525c10cbcb78d251f52699009a3501337123637c4b114b20ad2a64a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXMEZCW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoFE9TOgdsANrRJ3xh9nzmQj%2BYfALHECUmhXDvOi7fQIhALDH3pzTOh7C%2F7dzbuxDpzgrLn9jE8fbUc9jCQuYIh6oKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmCw%2FD7njDw3eSQYq3ANN8RnKe4HKucgGSffwn70m2IzfojtKNsPaLQJOKWese1JI2pnKtLSMrX%2Bm9d%2FC6b5%2BvQRcsfSuNDoqAAIKPCC8m8xnKViyqM%2FyMFOzrMyQAUNRLrmr7x25SU1QJa7PLI%2B10bS2ABTPPONAmUaX1mjwV6iKxLwOYvzlgSWMUY2jo0UjSHsEStFM%2BpisdxpLgwBHNO%2BXy%2FMw90vL%2FBeEw9aHqEZkmFaEzssR%2FfL9SmFc5WbjTf6UPzi3mi1UlkP%2FmQYtPpCeJlbt%2FdP2oITS%2Fm0awsUP%2FEc%2FrAR0dYtwFyY8lHVQKWyryXjs3YxPMUmUQRNQWVzVa8ADZ0Z4QcD8lMeuanRBj%2FzNNuG%2BETs4uASLC%2FIkf6pxQFxc%2FT25Knhm9BBBzF3JgmnG0Q92IaZBvgjLKvjFLCCtJOHhcKBiVIl6DKv4v3nbBWpNqhyLp8lgSICVOg604CdhcYSyj2Yti9WIFxAi8RBFHbQK0OpLfDWC8%2FNyGb6kTRJodlkKECEh9Ii3pSEfBF2qqJzdtl4Uu5J0QvTwZ%2FB59%2BgMsNJ%2Fyf0Cia17pl1yhjnDRBoGBGtptJvAuPgNcsi2dgFIMz9Qs%2ByvB%2B%2FEE4N8luhk%2FgPFeGt8Roe6KFnTq5T8SNA%2BuTC3wJq%2BBjqkAQiY4eWKjUQ4GtHlmc%2FYPTi%2BoWaTa2ya9D26O2G1oo0LAMY%2BqaLKbA45%2BSPNHGrhEzg5NclUCtT618jkRhGhLe1ZL45J0RRbpOikEX5oceC%2BlwAsc6hM%2BZ4RJS1rLxZndUExeZ63WUAG0oqC9eB3Y46XoNejwqgqr%2FXPoOGJ%2BvUEJUsO7Yln74wgJ8qi8KSCeC9AfQbv0qmA%2FGj%2BgMMJZGCpxZoC&X-Amz-Signature=26a87fa9e1c1aebf4939e7d60e2217da482a0d5ab37d19b105f439f50947edc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXMEZCW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoFE9TOgdsANrRJ3xh9nzmQj%2BYfALHECUmhXDvOi7fQIhALDH3pzTOh7C%2F7dzbuxDpzgrLn9jE8fbUc9jCQuYIh6oKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmCw%2FD7njDw3eSQYq3ANN8RnKe4HKucgGSffwn70m2IzfojtKNsPaLQJOKWese1JI2pnKtLSMrX%2Bm9d%2FC6b5%2BvQRcsfSuNDoqAAIKPCC8m8xnKViyqM%2FyMFOzrMyQAUNRLrmr7x25SU1QJa7PLI%2B10bS2ABTPPONAmUaX1mjwV6iKxLwOYvzlgSWMUY2jo0UjSHsEStFM%2BpisdxpLgwBHNO%2BXy%2FMw90vL%2FBeEw9aHqEZkmFaEzssR%2FfL9SmFc5WbjTf6UPzi3mi1UlkP%2FmQYtPpCeJlbt%2FdP2oITS%2Fm0awsUP%2FEc%2FrAR0dYtwFyY8lHVQKWyryXjs3YxPMUmUQRNQWVzVa8ADZ0Z4QcD8lMeuanRBj%2FzNNuG%2BETs4uASLC%2FIkf6pxQFxc%2FT25Knhm9BBBzF3JgmnG0Q92IaZBvgjLKvjFLCCtJOHhcKBiVIl6DKv4v3nbBWpNqhyLp8lgSICVOg604CdhcYSyj2Yti9WIFxAi8RBFHbQK0OpLfDWC8%2FNyGb6kTRJodlkKECEh9Ii3pSEfBF2qqJzdtl4Uu5J0QvTwZ%2FB59%2BgMsNJ%2Fyf0Cia17pl1yhjnDRBoGBGtptJvAuPgNcsi2dgFIMz9Qs%2ByvB%2B%2FEE4N8luhk%2FgPFeGt8Roe6KFnTq5T8SNA%2BuTC3wJq%2BBjqkAQiY4eWKjUQ4GtHlmc%2FYPTi%2BoWaTa2ya9D26O2G1oo0LAMY%2BqaLKbA45%2BSPNHGrhEzg5NclUCtT618jkRhGhLe1ZL45J0RRbpOikEX5oceC%2BlwAsc6hM%2BZ4RJS1rLxZndUExeZ63WUAG0oqC9eB3Y46XoNejwqgqr%2FXPoOGJ%2BvUEJUsO7Yln74wgJ8qi8KSCeC9AfQbv0qmA%2FGj%2BgMMJZGCpxZoC&X-Amz-Signature=371ce6b1ae12962d917abee45a99e4fdc745dd67dad4599182cadc27d5ec9199&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXMEZCW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoFE9TOgdsANrRJ3xh9nzmQj%2BYfALHECUmhXDvOi7fQIhALDH3pzTOh7C%2F7dzbuxDpzgrLn9jE8fbUc9jCQuYIh6oKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmCw%2FD7njDw3eSQYq3ANN8RnKe4HKucgGSffwn70m2IzfojtKNsPaLQJOKWese1JI2pnKtLSMrX%2Bm9d%2FC6b5%2BvQRcsfSuNDoqAAIKPCC8m8xnKViyqM%2FyMFOzrMyQAUNRLrmr7x25SU1QJa7PLI%2B10bS2ABTPPONAmUaX1mjwV6iKxLwOYvzlgSWMUY2jo0UjSHsEStFM%2BpisdxpLgwBHNO%2BXy%2FMw90vL%2FBeEw9aHqEZkmFaEzssR%2FfL9SmFc5WbjTf6UPzi3mi1UlkP%2FmQYtPpCeJlbt%2FdP2oITS%2Fm0awsUP%2FEc%2FrAR0dYtwFyY8lHVQKWyryXjs3YxPMUmUQRNQWVzVa8ADZ0Z4QcD8lMeuanRBj%2FzNNuG%2BETs4uASLC%2FIkf6pxQFxc%2FT25Knhm9BBBzF3JgmnG0Q92IaZBvgjLKvjFLCCtJOHhcKBiVIl6DKv4v3nbBWpNqhyLp8lgSICVOg604CdhcYSyj2Yti9WIFxAi8RBFHbQK0OpLfDWC8%2FNyGb6kTRJodlkKECEh9Ii3pSEfBF2qqJzdtl4Uu5J0QvTwZ%2FB59%2BgMsNJ%2Fyf0Cia17pl1yhjnDRBoGBGtptJvAuPgNcsi2dgFIMz9Qs%2ByvB%2B%2FEE4N8luhk%2FgPFeGt8Roe6KFnTq5T8SNA%2BuTC3wJq%2BBjqkAQiY4eWKjUQ4GtHlmc%2FYPTi%2BoWaTa2ya9D26O2G1oo0LAMY%2BqaLKbA45%2BSPNHGrhEzg5NclUCtT618jkRhGhLe1ZL45J0RRbpOikEX5oceC%2BlwAsc6hM%2BZ4RJS1rLxZndUExeZ63WUAG0oqC9eB3Y46XoNejwqgqr%2FXPoOGJ%2BvUEJUsO7Yln74wgJ8qi8KSCeC9AfQbv0qmA%2FGj%2BgMMJZGCpxZoC&X-Amz-Signature=4fc0d7ddabb615002a6d236283f9be9a46ce47858016e180c574e7085abac49a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZXMEZCW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHoFE9TOgdsANrRJ3xh9nzmQj%2BYfALHECUmhXDvOi7fQIhALDH3pzTOh7C%2F7dzbuxDpzgrLn9jE8fbUc9jCQuYIh6oKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmCw%2FD7njDw3eSQYq3ANN8RnKe4HKucgGSffwn70m2IzfojtKNsPaLQJOKWese1JI2pnKtLSMrX%2Bm9d%2FC6b5%2BvQRcsfSuNDoqAAIKPCC8m8xnKViyqM%2FyMFOzrMyQAUNRLrmr7x25SU1QJa7PLI%2B10bS2ABTPPONAmUaX1mjwV6iKxLwOYvzlgSWMUY2jo0UjSHsEStFM%2BpisdxpLgwBHNO%2BXy%2FMw90vL%2FBeEw9aHqEZkmFaEzssR%2FfL9SmFc5WbjTf6UPzi3mi1UlkP%2FmQYtPpCeJlbt%2FdP2oITS%2Fm0awsUP%2FEc%2FrAR0dYtwFyY8lHVQKWyryXjs3YxPMUmUQRNQWVzVa8ADZ0Z4QcD8lMeuanRBj%2FzNNuG%2BETs4uASLC%2FIkf6pxQFxc%2FT25Knhm9BBBzF3JgmnG0Q92IaZBvgjLKvjFLCCtJOHhcKBiVIl6DKv4v3nbBWpNqhyLp8lgSICVOg604CdhcYSyj2Yti9WIFxAi8RBFHbQK0OpLfDWC8%2FNyGb6kTRJodlkKECEh9Ii3pSEfBF2qqJzdtl4Uu5J0QvTwZ%2FB59%2BgMsNJ%2Fyf0Cia17pl1yhjnDRBoGBGtptJvAuPgNcsi2dgFIMz9Qs%2ByvB%2B%2FEE4N8luhk%2FgPFeGt8Roe6KFnTq5T8SNA%2BuTC3wJq%2BBjqkAQiY4eWKjUQ4GtHlmc%2FYPTi%2BoWaTa2ya9D26O2G1oo0LAMY%2BqaLKbA45%2BSPNHGrhEzg5NclUCtT618jkRhGhLe1ZL45J0RRbpOikEX5oceC%2BlwAsc6hM%2BZ4RJS1rLxZndUExeZ63WUAG0oqC9eB3Y46XoNejwqgqr%2FXPoOGJ%2BvUEJUsO7Yln74wgJ8qi8KSCeC9AfQbv0qmA%2FGj%2BgMMJZGCpxZoC&X-Amz-Signature=b6bd62c7e41c268c94ae0ba04e9e253aa66d1231df216058736c3f32b633ea45&X-Amz-SignedHeaders=host&x-id=GetObject)
