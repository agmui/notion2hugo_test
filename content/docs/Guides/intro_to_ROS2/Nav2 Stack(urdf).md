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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUJAA6Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTpG788yBl3zZYRB3Hd8vEc15wxoVK0UsZkWWv9jzmoAiEAgycIS%2Bt%2FegJAZZss0llMvQCT4KwM1ASLOLD1jwMG75wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqdDlEwKjCAjKaqJyrcA5LCKquAXpHKw%2B%2BVY2Hv6kxcDh5AdhmjRTmsmSKAYSHgjXi1zgiaQiMmz4ekLrJbMCMX1VtR5XASsdrx6kZoqxvlH8X10V3UXa%2B8mKjVAhLkFGp7REc7jO9Auw04Hw5eYqhGVsYft4ZiIJgCK1RtygyHBkeDJZAYowD%2BYPJTaIJKil0VLXyFUGQKP1ICeGFlM%2BXlItTv%2FLdjvOFS5UcwsN3zhZKngT7Wa9fnk0wA9vL2pwhZuUiqNkzF8JmqftwuPjj%2F8ATzfkrp7lwOnAksCzMVntLYAp1HIgId3kdsI8PtzQ2y04CRGyGMOgQK0R5JjxqYlC8HV3pkAWtO%2FyfcXfmzhnlwBw5eTnDbvjux3PbwC9ww%2B7%2Bs04fMK5PJYVUnnNrYzrnRwDwkhRnuY0EobPGIzaMU7OrlTEU3npNE7DTYXUc25adVyel0jAYftE6JaHBF5V03DqIJc%2B0aQy9omNEEi1cqj8GvPhYyGgSsdGgj5lhmFKxQT94rALqsJednT1X%2B9ydDwAgPx052C9U4ceeUfgcLRVofI1BCkWE2LH0pW%2FlRWM%2F21Bo880pU443G7R2ZxIRv9fHRYadmDPpTbNtvVCZJ0vrIRZUaOd9Fd%2BVrc0jPC%2BidvaEaBAknMITukr8GOqUBxqgp6pOXT8WUBpC0S%2Bjevx6jEjDsQP3c58%2BdR1LISrNMSiy5bO0rD1NLtFA2%2BtKRGAp5P37is4j5I14iuT7emMg6EP%2Fnu6nlDdBEZi%2FZLtYLz0eU8rFB0TApfAyk2yKkxdG2ukl4pUDPkmDmxtuvwWdp32jbEHly%2BmLdIEDIlmEPF4G8iMUcPo9KkDCNOHXtJ%2FDd%2B94k4tr8YzcGFlyqRAsAJacW&X-Amz-Signature=2798ae2e394cec3bb897537db96cd6480513c24098047c6e939068810df9d0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUJAA6Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTpG788yBl3zZYRB3Hd8vEc15wxoVK0UsZkWWv9jzmoAiEAgycIS%2Bt%2FegJAZZss0llMvQCT4KwM1ASLOLD1jwMG75wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqdDlEwKjCAjKaqJyrcA5LCKquAXpHKw%2B%2BVY2Hv6kxcDh5AdhmjRTmsmSKAYSHgjXi1zgiaQiMmz4ekLrJbMCMX1VtR5XASsdrx6kZoqxvlH8X10V3UXa%2B8mKjVAhLkFGp7REc7jO9Auw04Hw5eYqhGVsYft4ZiIJgCK1RtygyHBkeDJZAYowD%2BYPJTaIJKil0VLXyFUGQKP1ICeGFlM%2BXlItTv%2FLdjvOFS5UcwsN3zhZKngT7Wa9fnk0wA9vL2pwhZuUiqNkzF8JmqftwuPjj%2F8ATzfkrp7lwOnAksCzMVntLYAp1HIgId3kdsI8PtzQ2y04CRGyGMOgQK0R5JjxqYlC8HV3pkAWtO%2FyfcXfmzhnlwBw5eTnDbvjux3PbwC9ww%2B7%2Bs04fMK5PJYVUnnNrYzrnRwDwkhRnuY0EobPGIzaMU7OrlTEU3npNE7DTYXUc25adVyel0jAYftE6JaHBF5V03DqIJc%2B0aQy9omNEEi1cqj8GvPhYyGgSsdGgj5lhmFKxQT94rALqsJednT1X%2B9ydDwAgPx052C9U4ceeUfgcLRVofI1BCkWE2LH0pW%2FlRWM%2F21Bo880pU443G7R2ZxIRv9fHRYadmDPpTbNtvVCZJ0vrIRZUaOd9Fd%2BVrc0jPC%2BidvaEaBAknMITukr8GOqUBxqgp6pOXT8WUBpC0S%2Bjevx6jEjDsQP3c58%2BdR1LISrNMSiy5bO0rD1NLtFA2%2BtKRGAp5P37is4j5I14iuT7emMg6EP%2Fnu6nlDdBEZi%2FZLtYLz0eU8rFB0TApfAyk2yKkxdG2ukl4pUDPkmDmxtuvwWdp32jbEHly%2BmLdIEDIlmEPF4G8iMUcPo9KkDCNOHXtJ%2FDd%2B94k4tr8YzcGFlyqRAsAJacW&X-Amz-Signature=8c8bf5888a820438c4bb22ceb97c55d78f0aeed6b45ecd0069640b0ed04eec52&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUJAA6Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTpG788yBl3zZYRB3Hd8vEc15wxoVK0UsZkWWv9jzmoAiEAgycIS%2Bt%2FegJAZZss0llMvQCT4KwM1ASLOLD1jwMG75wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqdDlEwKjCAjKaqJyrcA5LCKquAXpHKw%2B%2BVY2Hv6kxcDh5AdhmjRTmsmSKAYSHgjXi1zgiaQiMmz4ekLrJbMCMX1VtR5XASsdrx6kZoqxvlH8X10V3UXa%2B8mKjVAhLkFGp7REc7jO9Auw04Hw5eYqhGVsYft4ZiIJgCK1RtygyHBkeDJZAYowD%2BYPJTaIJKil0VLXyFUGQKP1ICeGFlM%2BXlItTv%2FLdjvOFS5UcwsN3zhZKngT7Wa9fnk0wA9vL2pwhZuUiqNkzF8JmqftwuPjj%2F8ATzfkrp7lwOnAksCzMVntLYAp1HIgId3kdsI8PtzQ2y04CRGyGMOgQK0R5JjxqYlC8HV3pkAWtO%2FyfcXfmzhnlwBw5eTnDbvjux3PbwC9ww%2B7%2Bs04fMK5PJYVUnnNrYzrnRwDwkhRnuY0EobPGIzaMU7OrlTEU3npNE7DTYXUc25adVyel0jAYftE6JaHBF5V03DqIJc%2B0aQy9omNEEi1cqj8GvPhYyGgSsdGgj5lhmFKxQT94rALqsJednT1X%2B9ydDwAgPx052C9U4ceeUfgcLRVofI1BCkWE2LH0pW%2FlRWM%2F21Bo880pU443G7R2ZxIRv9fHRYadmDPpTbNtvVCZJ0vrIRZUaOd9Fd%2BVrc0jPC%2BidvaEaBAknMITukr8GOqUBxqgp6pOXT8WUBpC0S%2Bjevx6jEjDsQP3c58%2BdR1LISrNMSiy5bO0rD1NLtFA2%2BtKRGAp5P37is4j5I14iuT7emMg6EP%2Fnu6nlDdBEZi%2FZLtYLz0eU8rFB0TApfAyk2yKkxdG2ukl4pUDPkmDmxtuvwWdp32jbEHly%2BmLdIEDIlmEPF4G8iMUcPo9KkDCNOHXtJ%2FDd%2B94k4tr8YzcGFlyqRAsAJacW&X-Amz-Signature=8e07a7c3456613fabbf0849810c054baa9c803b4f5267cf7bdafdf45c68c065d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUJAA6Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTpG788yBl3zZYRB3Hd8vEc15wxoVK0UsZkWWv9jzmoAiEAgycIS%2Bt%2FegJAZZss0llMvQCT4KwM1ASLOLD1jwMG75wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqdDlEwKjCAjKaqJyrcA5LCKquAXpHKw%2B%2BVY2Hv6kxcDh5AdhmjRTmsmSKAYSHgjXi1zgiaQiMmz4ekLrJbMCMX1VtR5XASsdrx6kZoqxvlH8X10V3UXa%2B8mKjVAhLkFGp7REc7jO9Auw04Hw5eYqhGVsYft4ZiIJgCK1RtygyHBkeDJZAYowD%2BYPJTaIJKil0VLXyFUGQKP1ICeGFlM%2BXlItTv%2FLdjvOFS5UcwsN3zhZKngT7Wa9fnk0wA9vL2pwhZuUiqNkzF8JmqftwuPjj%2F8ATzfkrp7lwOnAksCzMVntLYAp1HIgId3kdsI8PtzQ2y04CRGyGMOgQK0R5JjxqYlC8HV3pkAWtO%2FyfcXfmzhnlwBw5eTnDbvjux3PbwC9ww%2B7%2Bs04fMK5PJYVUnnNrYzrnRwDwkhRnuY0EobPGIzaMU7OrlTEU3npNE7DTYXUc25adVyel0jAYftE6JaHBF5V03DqIJc%2B0aQy9omNEEi1cqj8GvPhYyGgSsdGgj5lhmFKxQT94rALqsJednT1X%2B9ydDwAgPx052C9U4ceeUfgcLRVofI1BCkWE2LH0pW%2FlRWM%2F21Bo880pU443G7R2ZxIRv9fHRYadmDPpTbNtvVCZJ0vrIRZUaOd9Fd%2BVrc0jPC%2BidvaEaBAknMITukr8GOqUBxqgp6pOXT8WUBpC0S%2Bjevx6jEjDsQP3c58%2BdR1LISrNMSiy5bO0rD1NLtFA2%2BtKRGAp5P37is4j5I14iuT7emMg6EP%2Fnu6nlDdBEZi%2FZLtYLz0eU8rFB0TApfAyk2yKkxdG2ukl4pUDPkmDmxtuvwWdp32jbEHly%2BmLdIEDIlmEPF4G8iMUcPo9KkDCNOHXtJ%2FDd%2B94k4tr8YzcGFlyqRAsAJacW&X-Amz-Signature=cf626f16241c6f31751b45b6e4f6534a88508da0873d2b5fe691f6915c1e8111&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUJAA6Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTpG788yBl3zZYRB3Hd8vEc15wxoVK0UsZkWWv9jzmoAiEAgycIS%2Bt%2FegJAZZss0llMvQCT4KwM1ASLOLD1jwMG75wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqdDlEwKjCAjKaqJyrcA5LCKquAXpHKw%2B%2BVY2Hv6kxcDh5AdhmjRTmsmSKAYSHgjXi1zgiaQiMmz4ekLrJbMCMX1VtR5XASsdrx6kZoqxvlH8X10V3UXa%2B8mKjVAhLkFGp7REc7jO9Auw04Hw5eYqhGVsYft4ZiIJgCK1RtygyHBkeDJZAYowD%2BYPJTaIJKil0VLXyFUGQKP1ICeGFlM%2BXlItTv%2FLdjvOFS5UcwsN3zhZKngT7Wa9fnk0wA9vL2pwhZuUiqNkzF8JmqftwuPjj%2F8ATzfkrp7lwOnAksCzMVntLYAp1HIgId3kdsI8PtzQ2y04CRGyGMOgQK0R5JjxqYlC8HV3pkAWtO%2FyfcXfmzhnlwBw5eTnDbvjux3PbwC9ww%2B7%2Bs04fMK5PJYVUnnNrYzrnRwDwkhRnuY0EobPGIzaMU7OrlTEU3npNE7DTYXUc25adVyel0jAYftE6JaHBF5V03DqIJc%2B0aQy9omNEEi1cqj8GvPhYyGgSsdGgj5lhmFKxQT94rALqsJednT1X%2B9ydDwAgPx052C9U4ceeUfgcLRVofI1BCkWE2LH0pW%2FlRWM%2F21Bo880pU443G7R2ZxIRv9fHRYadmDPpTbNtvVCZJ0vrIRZUaOd9Fd%2BVrc0jPC%2BidvaEaBAknMITukr8GOqUBxqgp6pOXT8WUBpC0S%2Bjevx6jEjDsQP3c58%2BdR1LISrNMSiy5bO0rD1NLtFA2%2BtKRGAp5P37is4j5I14iuT7emMg6EP%2Fnu6nlDdBEZi%2FZLtYLz0eU8rFB0TApfAyk2yKkxdG2ukl4pUDPkmDmxtuvwWdp32jbEHly%2BmLdIEDIlmEPF4G8iMUcPo9KkDCNOHXtJ%2FDd%2B94k4tr8YzcGFlyqRAsAJacW&X-Amz-Signature=be707c08100ac02219c7b15c009646129cc395e78234225adcf59d949a4069b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUJAA6Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTpG788yBl3zZYRB3Hd8vEc15wxoVK0UsZkWWv9jzmoAiEAgycIS%2Bt%2FegJAZZss0llMvQCT4KwM1ASLOLD1jwMG75wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKqdDlEwKjCAjKaqJyrcA5LCKquAXpHKw%2B%2BVY2Hv6kxcDh5AdhmjRTmsmSKAYSHgjXi1zgiaQiMmz4ekLrJbMCMX1VtR5XASsdrx6kZoqxvlH8X10V3UXa%2B8mKjVAhLkFGp7REc7jO9Auw04Hw5eYqhGVsYft4ZiIJgCK1RtygyHBkeDJZAYowD%2BYPJTaIJKil0VLXyFUGQKP1ICeGFlM%2BXlItTv%2FLdjvOFS5UcwsN3zhZKngT7Wa9fnk0wA9vL2pwhZuUiqNkzF8JmqftwuPjj%2F8ATzfkrp7lwOnAksCzMVntLYAp1HIgId3kdsI8PtzQ2y04CRGyGMOgQK0R5JjxqYlC8HV3pkAWtO%2FyfcXfmzhnlwBw5eTnDbvjux3PbwC9ww%2B7%2Bs04fMK5PJYVUnnNrYzrnRwDwkhRnuY0EobPGIzaMU7OrlTEU3npNE7DTYXUc25adVyel0jAYftE6JaHBF5V03DqIJc%2B0aQy9omNEEi1cqj8GvPhYyGgSsdGgj5lhmFKxQT94rALqsJednT1X%2B9ydDwAgPx052C9U4ceeUfgcLRVofI1BCkWE2LH0pW%2FlRWM%2F21Bo880pU443G7R2ZxIRv9fHRYadmDPpTbNtvVCZJ0vrIRZUaOd9Fd%2BVrc0jPC%2BidvaEaBAknMITukr8GOqUBxqgp6pOXT8WUBpC0S%2Bjevx6jEjDsQP3c58%2BdR1LISrNMSiy5bO0rD1NLtFA2%2BtKRGAp5P37is4j5I14iuT7emMg6EP%2Fnu6nlDdBEZi%2FZLtYLz0eU8rFB0TApfAyk2yKkxdG2ukl4pUDPkmDmxtuvwWdp32jbEHly%2BmLdIEDIlmEPF4G8iMUcPo9KkDCNOHXtJ%2FDd%2B94k4tr8YzcGFlyqRAsAJacW&X-Amz-Signature=c948c6a18aa9a907067ea45cd9d704188591102efe498032bd5f54dccabde2a2&X-Amz-SignedHeaders=host&x-id=GetObject)
