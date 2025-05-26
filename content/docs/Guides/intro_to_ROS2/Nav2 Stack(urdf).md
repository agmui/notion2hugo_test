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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTMOWBS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMYTMWkGYacF1N5VQNp0w6E%2BR0xlcwXqk2qv8eM60IWAiEA0YdNDvP3EBqADDdkrNn5%2BB1Xyp5FoJPnzwnNKjQwjV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBINt4%2FuLldr1vnM%2FSrcAzUGa947rhjNHxraoma4H13Urrm7lzDo3%2FGwpVsDGAPJhumgPqQv0rdXukvt0DhYZlICVdJue%2B8G7NP8LibGvW38dqNkrqtWtJjGj8mR%2F5SoDNAXACSO%2BpA075MlL4fac3mP923KfAONlOEybOlOabckGu%2B5oOR6iCzU0E0FOat96kkcyERBx%2BiqYddFE0XY2NGEGudAsPby4dAF9V67P%2F3JSnz6SxoBSagnUrJf9DU3vnypxOc08OhVxcApLJt3DV8573buMXAgoaXdi0OpfFYkm4LgS1ALCA4J6nI%2BdNHo6%2BJB9F%2FGXAUZM14XT%2BPlMwc979PVJDHaJTxyH7WtCuBpxQqO%2FZJblYibjRbzOfmcWAN2y7DlhLXSteGZ7YkGlX0YvQ6k8XQlETgtESDvcHN54lU0BByw%2FmTplDXdh3I0k0bZc41lVoTVtoBSBexbAjuFYTaBD4P22fFEMMBNhTEqyyVBkORgJ4aRZiqQ9VGHcr8UbnCaXRaPmZNtLSqIQRnYv%2F7Gk5EnFTvEkhRJ%2FRsTqMlyDPEy3iNZKL4GQPiVccwg02RB339n1M%2FfNzxLQseU48YPI5KFLv%2BWnlmVLY786%2FapLzOqHQVqEf%2F4Os3BISYYeKtAnBehFDUcMInT08EGOqUB7VeM4%2BHAR3NGpFqHa3ghhGDZ7dHA6K9i%2FmAdyoB0EmeufW9UiDqxsj6%2BRLl6AgvGxpjjbl%2Ffc59Lzx16MqHPoWMszKPxFQeHBSqRTjEd1z40jmfrMmP6olkmlMULJ8Z9zADo7kAPSEimnRA3NaIsAiedDNuyvyR%2B1VotsvzKTUKVtbcdGqvVL3UleHTd9aTzIs7VzJwjQwkKwG%2BVxoVOhOGfkWCj&X-Amz-Signature=6936f227e108b50af1f2872001d950ba1180f99aedcfa472c11c2d0b796e5812&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTMOWBS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMYTMWkGYacF1N5VQNp0w6E%2BR0xlcwXqk2qv8eM60IWAiEA0YdNDvP3EBqADDdkrNn5%2BB1Xyp5FoJPnzwnNKjQwjV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBINt4%2FuLldr1vnM%2FSrcAzUGa947rhjNHxraoma4H13Urrm7lzDo3%2FGwpVsDGAPJhumgPqQv0rdXukvt0DhYZlICVdJue%2B8G7NP8LibGvW38dqNkrqtWtJjGj8mR%2F5SoDNAXACSO%2BpA075MlL4fac3mP923KfAONlOEybOlOabckGu%2B5oOR6iCzU0E0FOat96kkcyERBx%2BiqYddFE0XY2NGEGudAsPby4dAF9V67P%2F3JSnz6SxoBSagnUrJf9DU3vnypxOc08OhVxcApLJt3DV8573buMXAgoaXdi0OpfFYkm4LgS1ALCA4J6nI%2BdNHo6%2BJB9F%2FGXAUZM14XT%2BPlMwc979PVJDHaJTxyH7WtCuBpxQqO%2FZJblYibjRbzOfmcWAN2y7DlhLXSteGZ7YkGlX0YvQ6k8XQlETgtESDvcHN54lU0BByw%2FmTplDXdh3I0k0bZc41lVoTVtoBSBexbAjuFYTaBD4P22fFEMMBNhTEqyyVBkORgJ4aRZiqQ9VGHcr8UbnCaXRaPmZNtLSqIQRnYv%2F7Gk5EnFTvEkhRJ%2FRsTqMlyDPEy3iNZKL4GQPiVccwg02RB339n1M%2FfNzxLQseU48YPI5KFLv%2BWnlmVLY786%2FapLzOqHQVqEf%2F4Os3BISYYeKtAnBehFDUcMInT08EGOqUB7VeM4%2BHAR3NGpFqHa3ghhGDZ7dHA6K9i%2FmAdyoB0EmeufW9UiDqxsj6%2BRLl6AgvGxpjjbl%2Ffc59Lzx16MqHPoWMszKPxFQeHBSqRTjEd1z40jmfrMmP6olkmlMULJ8Z9zADo7kAPSEimnRA3NaIsAiedDNuyvyR%2B1VotsvzKTUKVtbcdGqvVL3UleHTd9aTzIs7VzJwjQwkKwG%2BVxoVOhOGfkWCj&X-Amz-Signature=299e38099a37aaf5f6393c05ed44af65762f72bf6b41dcf54019fbc6c34164b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTMOWBS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMYTMWkGYacF1N5VQNp0w6E%2BR0xlcwXqk2qv8eM60IWAiEA0YdNDvP3EBqADDdkrNn5%2BB1Xyp5FoJPnzwnNKjQwjV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBINt4%2FuLldr1vnM%2FSrcAzUGa947rhjNHxraoma4H13Urrm7lzDo3%2FGwpVsDGAPJhumgPqQv0rdXukvt0DhYZlICVdJue%2B8G7NP8LibGvW38dqNkrqtWtJjGj8mR%2F5SoDNAXACSO%2BpA075MlL4fac3mP923KfAONlOEybOlOabckGu%2B5oOR6iCzU0E0FOat96kkcyERBx%2BiqYddFE0XY2NGEGudAsPby4dAF9V67P%2F3JSnz6SxoBSagnUrJf9DU3vnypxOc08OhVxcApLJt3DV8573buMXAgoaXdi0OpfFYkm4LgS1ALCA4J6nI%2BdNHo6%2BJB9F%2FGXAUZM14XT%2BPlMwc979PVJDHaJTxyH7WtCuBpxQqO%2FZJblYibjRbzOfmcWAN2y7DlhLXSteGZ7YkGlX0YvQ6k8XQlETgtESDvcHN54lU0BByw%2FmTplDXdh3I0k0bZc41lVoTVtoBSBexbAjuFYTaBD4P22fFEMMBNhTEqyyVBkORgJ4aRZiqQ9VGHcr8UbnCaXRaPmZNtLSqIQRnYv%2F7Gk5EnFTvEkhRJ%2FRsTqMlyDPEy3iNZKL4GQPiVccwg02RB339n1M%2FfNzxLQseU48YPI5KFLv%2BWnlmVLY786%2FapLzOqHQVqEf%2F4Os3BISYYeKtAnBehFDUcMInT08EGOqUB7VeM4%2BHAR3NGpFqHa3ghhGDZ7dHA6K9i%2FmAdyoB0EmeufW9UiDqxsj6%2BRLl6AgvGxpjjbl%2Ffc59Lzx16MqHPoWMszKPxFQeHBSqRTjEd1z40jmfrMmP6olkmlMULJ8Z9zADo7kAPSEimnRA3NaIsAiedDNuyvyR%2B1VotsvzKTUKVtbcdGqvVL3UleHTd9aTzIs7VzJwjQwkKwG%2BVxoVOhOGfkWCj&X-Amz-Signature=3b79b82dcdcecbd579566503630bd1d6301c3ad587e7d186e6a0a0b4e2fd5f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTMOWBS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMYTMWkGYacF1N5VQNp0w6E%2BR0xlcwXqk2qv8eM60IWAiEA0YdNDvP3EBqADDdkrNn5%2BB1Xyp5FoJPnzwnNKjQwjV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBINt4%2FuLldr1vnM%2FSrcAzUGa947rhjNHxraoma4H13Urrm7lzDo3%2FGwpVsDGAPJhumgPqQv0rdXukvt0DhYZlICVdJue%2B8G7NP8LibGvW38dqNkrqtWtJjGj8mR%2F5SoDNAXACSO%2BpA075MlL4fac3mP923KfAONlOEybOlOabckGu%2B5oOR6iCzU0E0FOat96kkcyERBx%2BiqYddFE0XY2NGEGudAsPby4dAF9V67P%2F3JSnz6SxoBSagnUrJf9DU3vnypxOc08OhVxcApLJt3DV8573buMXAgoaXdi0OpfFYkm4LgS1ALCA4J6nI%2BdNHo6%2BJB9F%2FGXAUZM14XT%2BPlMwc979PVJDHaJTxyH7WtCuBpxQqO%2FZJblYibjRbzOfmcWAN2y7DlhLXSteGZ7YkGlX0YvQ6k8XQlETgtESDvcHN54lU0BByw%2FmTplDXdh3I0k0bZc41lVoTVtoBSBexbAjuFYTaBD4P22fFEMMBNhTEqyyVBkORgJ4aRZiqQ9VGHcr8UbnCaXRaPmZNtLSqIQRnYv%2F7Gk5EnFTvEkhRJ%2FRsTqMlyDPEy3iNZKL4GQPiVccwg02RB339n1M%2FfNzxLQseU48YPI5KFLv%2BWnlmVLY786%2FapLzOqHQVqEf%2F4Os3BISYYeKtAnBehFDUcMInT08EGOqUB7VeM4%2BHAR3NGpFqHa3ghhGDZ7dHA6K9i%2FmAdyoB0EmeufW9UiDqxsj6%2BRLl6AgvGxpjjbl%2Ffc59Lzx16MqHPoWMszKPxFQeHBSqRTjEd1z40jmfrMmP6olkmlMULJ8Z9zADo7kAPSEimnRA3NaIsAiedDNuyvyR%2B1VotsvzKTUKVtbcdGqvVL3UleHTd9aTzIs7VzJwjQwkKwG%2BVxoVOhOGfkWCj&X-Amz-Signature=12c61e1f4dcdf6ff6de27ecd6e73cf730cc7355efe44a45731f280330ae55e81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTMOWBS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMYTMWkGYacF1N5VQNp0w6E%2BR0xlcwXqk2qv8eM60IWAiEA0YdNDvP3EBqADDdkrNn5%2BB1Xyp5FoJPnzwnNKjQwjV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBINt4%2FuLldr1vnM%2FSrcAzUGa947rhjNHxraoma4H13Urrm7lzDo3%2FGwpVsDGAPJhumgPqQv0rdXukvt0DhYZlICVdJue%2B8G7NP8LibGvW38dqNkrqtWtJjGj8mR%2F5SoDNAXACSO%2BpA075MlL4fac3mP923KfAONlOEybOlOabckGu%2B5oOR6iCzU0E0FOat96kkcyERBx%2BiqYddFE0XY2NGEGudAsPby4dAF9V67P%2F3JSnz6SxoBSagnUrJf9DU3vnypxOc08OhVxcApLJt3DV8573buMXAgoaXdi0OpfFYkm4LgS1ALCA4J6nI%2BdNHo6%2BJB9F%2FGXAUZM14XT%2BPlMwc979PVJDHaJTxyH7WtCuBpxQqO%2FZJblYibjRbzOfmcWAN2y7DlhLXSteGZ7YkGlX0YvQ6k8XQlETgtESDvcHN54lU0BByw%2FmTplDXdh3I0k0bZc41lVoTVtoBSBexbAjuFYTaBD4P22fFEMMBNhTEqyyVBkORgJ4aRZiqQ9VGHcr8UbnCaXRaPmZNtLSqIQRnYv%2F7Gk5EnFTvEkhRJ%2FRsTqMlyDPEy3iNZKL4GQPiVccwg02RB339n1M%2FfNzxLQseU48YPI5KFLv%2BWnlmVLY786%2FapLzOqHQVqEf%2F4Os3BISYYeKtAnBehFDUcMInT08EGOqUB7VeM4%2BHAR3NGpFqHa3ghhGDZ7dHA6K9i%2FmAdyoB0EmeufW9UiDqxsj6%2BRLl6AgvGxpjjbl%2Ffc59Lzx16MqHPoWMszKPxFQeHBSqRTjEd1z40jmfrMmP6olkmlMULJ8Z9zADo7kAPSEimnRA3NaIsAiedDNuyvyR%2B1VotsvzKTUKVtbcdGqvVL3UleHTd9aTzIs7VzJwjQwkKwG%2BVxoVOhOGfkWCj&X-Amz-Signature=9823fe6d852d0d77ff9df477581336a85064763dd1d9ca23cafd0b12b0d2be6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTMOWBS%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMYTMWkGYacF1N5VQNp0w6E%2BR0xlcwXqk2qv8eM60IWAiEA0YdNDvP3EBqADDdkrNn5%2BB1Xyp5FoJPnzwnNKjQwjV0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBINt4%2FuLldr1vnM%2FSrcAzUGa947rhjNHxraoma4H13Urrm7lzDo3%2FGwpVsDGAPJhumgPqQv0rdXukvt0DhYZlICVdJue%2B8G7NP8LibGvW38dqNkrqtWtJjGj8mR%2F5SoDNAXACSO%2BpA075MlL4fac3mP923KfAONlOEybOlOabckGu%2B5oOR6iCzU0E0FOat96kkcyERBx%2BiqYddFE0XY2NGEGudAsPby4dAF9V67P%2F3JSnz6SxoBSagnUrJf9DU3vnypxOc08OhVxcApLJt3DV8573buMXAgoaXdi0OpfFYkm4LgS1ALCA4J6nI%2BdNHo6%2BJB9F%2FGXAUZM14XT%2BPlMwc979PVJDHaJTxyH7WtCuBpxQqO%2FZJblYibjRbzOfmcWAN2y7DlhLXSteGZ7YkGlX0YvQ6k8XQlETgtESDvcHN54lU0BByw%2FmTplDXdh3I0k0bZc41lVoTVtoBSBexbAjuFYTaBD4P22fFEMMBNhTEqyyVBkORgJ4aRZiqQ9VGHcr8UbnCaXRaPmZNtLSqIQRnYv%2F7Gk5EnFTvEkhRJ%2FRsTqMlyDPEy3iNZKL4GQPiVccwg02RB339n1M%2FfNzxLQseU48YPI5KFLv%2BWnlmVLY786%2FapLzOqHQVqEf%2F4Os3BISYYeKtAnBehFDUcMInT08EGOqUB7VeM4%2BHAR3NGpFqHa3ghhGDZ7dHA6K9i%2FmAdyoB0EmeufW9UiDqxsj6%2BRLl6AgvGxpjjbl%2Ffc59Lzx16MqHPoWMszKPxFQeHBSqRTjEd1z40jmfrMmP6olkmlMULJ8Z9zADo7kAPSEimnRA3NaIsAiedDNuyvyR%2B1VotsvzKTUKVtbcdGqvVL3UleHTd9aTzIs7VzJwjQwkKwG%2BVxoVOhOGfkWCj&X-Amz-Signature=6c23015f6f31e569ffce16de8bf40ecb049fb373ab919c8e81bf93fce4d2fea6&X-Amz-SignedHeaders=host&x-id=GetObject)
