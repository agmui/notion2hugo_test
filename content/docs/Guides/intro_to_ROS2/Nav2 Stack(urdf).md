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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM6T2PT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlRdi7hEiqJP2dukXQVXryDXpoxk%2BEY4NqX7d5aoxihAiAZ4BiQ1Egh9oQ8MuyUM51qlNxcV1HV5r7I84zaITDlHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDmjojgR5OR5%2Bg%2BKtwDdCiwElveEdvMA5APNTHR5ZTRaE%2FxNtrNX7ZZRUAKHvlwbZoFZ9%2BxsUxJsCR9oPYv10p3dBpSiO%2FcupCMRO7mnE%2FhWr3S9RHDYdc%2Bg5fB1%2F5j2i6d36jfDaFeTsBGJqnkr58WisZBn7l5WZF%2BR8d%2BD1oNaLKQmY%2FKOmKZgQgCoXLlYs%2F6plwJ9aenhCrrku%2BUYIwisEOE1w%2FsWYohF2zMc5BzQL8%2FqwDhhUnvj7rDGHSkyFU6eW%2FL7U0d5GwLSqZbVRc8xNlDmWQbzGSEyZ16ykvOrflHfJ6BTKHPnD%2B0pGu%2BEPlhgfvA4PB0oWMnpp3Wj6OJoWqEXMJcPVtkx%2BargdekXTB87wtz3qHXQJF5jH3Zykszi8DrZs35Ek5lfKxSKB2xy65Ubxst8TtqkySRpmYX2%2FOd7Pd1m02IUuQ0zfdHqenyY14RKxlYp1v%2FhWq3cwzBlwT5tOATrcb2qbCrWRxadFjsTviGmGAZn%2FclH9Jyp5O%2BsWqShuRsewFGiyfLiP1teAb4XpxZgT1NjAXydvLGGJpKdIMF493mOjaH4Ljn6uglH3RBhIVust4PyeZVykkXou5ABgIemWyqQiyA7yBDmNE3OmRJFnEDeBCYLXz4QHWFjCaPY3l%2Fmd4wi5ipvQY6pgHzypF4e3sJ3eekIJE2fq%2BLenCLlCsZ%2B6%2FU7dPMsqGM7eXvHK27nMkkw2ab6Ba3RaHwQEruKTDiWfz%2Fc0yDkoTmKjvo1w8atGaJtMfl4UljVoZzJsNfUPFLLy15rNBc8j73O6BqTHeDDmy2jWCDo2TxOxUSfAcNX00ED0WD58k4ylfh4Pim0qR0RTlOz5VMW2ZkQ0QqvlDiHBSBZ404C1wBZW%2BJdHp9&X-Amz-Signature=6759bd5937774dba7ba57fbc339fd532a772f7174a65010312579eea7814a014&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM6T2PT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlRdi7hEiqJP2dukXQVXryDXpoxk%2BEY4NqX7d5aoxihAiAZ4BiQ1Egh9oQ8MuyUM51qlNxcV1HV5r7I84zaITDlHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDmjojgR5OR5%2Bg%2BKtwDdCiwElveEdvMA5APNTHR5ZTRaE%2FxNtrNX7ZZRUAKHvlwbZoFZ9%2BxsUxJsCR9oPYv10p3dBpSiO%2FcupCMRO7mnE%2FhWr3S9RHDYdc%2Bg5fB1%2F5j2i6d36jfDaFeTsBGJqnkr58WisZBn7l5WZF%2BR8d%2BD1oNaLKQmY%2FKOmKZgQgCoXLlYs%2F6plwJ9aenhCrrku%2BUYIwisEOE1w%2FsWYohF2zMc5BzQL8%2FqwDhhUnvj7rDGHSkyFU6eW%2FL7U0d5GwLSqZbVRc8xNlDmWQbzGSEyZ16ykvOrflHfJ6BTKHPnD%2B0pGu%2BEPlhgfvA4PB0oWMnpp3Wj6OJoWqEXMJcPVtkx%2BargdekXTB87wtz3qHXQJF5jH3Zykszi8DrZs35Ek5lfKxSKB2xy65Ubxst8TtqkySRpmYX2%2FOd7Pd1m02IUuQ0zfdHqenyY14RKxlYp1v%2FhWq3cwzBlwT5tOATrcb2qbCrWRxadFjsTviGmGAZn%2FclH9Jyp5O%2BsWqShuRsewFGiyfLiP1teAb4XpxZgT1NjAXydvLGGJpKdIMF493mOjaH4Ljn6uglH3RBhIVust4PyeZVykkXou5ABgIemWyqQiyA7yBDmNE3OmRJFnEDeBCYLXz4QHWFjCaPY3l%2Fmd4wi5ipvQY6pgHzypF4e3sJ3eekIJE2fq%2BLenCLlCsZ%2B6%2FU7dPMsqGM7eXvHK27nMkkw2ab6Ba3RaHwQEruKTDiWfz%2Fc0yDkoTmKjvo1w8atGaJtMfl4UljVoZzJsNfUPFLLy15rNBc8j73O6BqTHeDDmy2jWCDo2TxOxUSfAcNX00ED0WD58k4ylfh4Pim0qR0RTlOz5VMW2ZkQ0QqvlDiHBSBZ404C1wBZW%2BJdHp9&X-Amz-Signature=8475289da3bfec002c34a696a47e35c066eacccc3a094f50137b1b58e411bf82&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM6T2PT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlRdi7hEiqJP2dukXQVXryDXpoxk%2BEY4NqX7d5aoxihAiAZ4BiQ1Egh9oQ8MuyUM51qlNxcV1HV5r7I84zaITDlHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDmjojgR5OR5%2Bg%2BKtwDdCiwElveEdvMA5APNTHR5ZTRaE%2FxNtrNX7ZZRUAKHvlwbZoFZ9%2BxsUxJsCR9oPYv10p3dBpSiO%2FcupCMRO7mnE%2FhWr3S9RHDYdc%2Bg5fB1%2F5j2i6d36jfDaFeTsBGJqnkr58WisZBn7l5WZF%2BR8d%2BD1oNaLKQmY%2FKOmKZgQgCoXLlYs%2F6plwJ9aenhCrrku%2BUYIwisEOE1w%2FsWYohF2zMc5BzQL8%2FqwDhhUnvj7rDGHSkyFU6eW%2FL7U0d5GwLSqZbVRc8xNlDmWQbzGSEyZ16ykvOrflHfJ6BTKHPnD%2B0pGu%2BEPlhgfvA4PB0oWMnpp3Wj6OJoWqEXMJcPVtkx%2BargdekXTB87wtz3qHXQJF5jH3Zykszi8DrZs35Ek5lfKxSKB2xy65Ubxst8TtqkySRpmYX2%2FOd7Pd1m02IUuQ0zfdHqenyY14RKxlYp1v%2FhWq3cwzBlwT5tOATrcb2qbCrWRxadFjsTviGmGAZn%2FclH9Jyp5O%2BsWqShuRsewFGiyfLiP1teAb4XpxZgT1NjAXydvLGGJpKdIMF493mOjaH4Ljn6uglH3RBhIVust4PyeZVykkXou5ABgIemWyqQiyA7yBDmNE3OmRJFnEDeBCYLXz4QHWFjCaPY3l%2Fmd4wi5ipvQY6pgHzypF4e3sJ3eekIJE2fq%2BLenCLlCsZ%2B6%2FU7dPMsqGM7eXvHK27nMkkw2ab6Ba3RaHwQEruKTDiWfz%2Fc0yDkoTmKjvo1w8atGaJtMfl4UljVoZzJsNfUPFLLy15rNBc8j73O6BqTHeDDmy2jWCDo2TxOxUSfAcNX00ED0WD58k4ylfh4Pim0qR0RTlOz5VMW2ZkQ0QqvlDiHBSBZ404C1wBZW%2BJdHp9&X-Amz-Signature=69d33f50198bda9148571b219ee5c69e9f75eb13d2a606b5485f955220cce6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM6T2PT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlRdi7hEiqJP2dukXQVXryDXpoxk%2BEY4NqX7d5aoxihAiAZ4BiQ1Egh9oQ8MuyUM51qlNxcV1HV5r7I84zaITDlHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDmjojgR5OR5%2Bg%2BKtwDdCiwElveEdvMA5APNTHR5ZTRaE%2FxNtrNX7ZZRUAKHvlwbZoFZ9%2BxsUxJsCR9oPYv10p3dBpSiO%2FcupCMRO7mnE%2FhWr3S9RHDYdc%2Bg5fB1%2F5j2i6d36jfDaFeTsBGJqnkr58WisZBn7l5WZF%2BR8d%2BD1oNaLKQmY%2FKOmKZgQgCoXLlYs%2F6plwJ9aenhCrrku%2BUYIwisEOE1w%2FsWYohF2zMc5BzQL8%2FqwDhhUnvj7rDGHSkyFU6eW%2FL7U0d5GwLSqZbVRc8xNlDmWQbzGSEyZ16ykvOrflHfJ6BTKHPnD%2B0pGu%2BEPlhgfvA4PB0oWMnpp3Wj6OJoWqEXMJcPVtkx%2BargdekXTB87wtz3qHXQJF5jH3Zykszi8DrZs35Ek5lfKxSKB2xy65Ubxst8TtqkySRpmYX2%2FOd7Pd1m02IUuQ0zfdHqenyY14RKxlYp1v%2FhWq3cwzBlwT5tOATrcb2qbCrWRxadFjsTviGmGAZn%2FclH9Jyp5O%2BsWqShuRsewFGiyfLiP1teAb4XpxZgT1NjAXydvLGGJpKdIMF493mOjaH4Ljn6uglH3RBhIVust4PyeZVykkXou5ABgIemWyqQiyA7yBDmNE3OmRJFnEDeBCYLXz4QHWFjCaPY3l%2Fmd4wi5ipvQY6pgHzypF4e3sJ3eekIJE2fq%2BLenCLlCsZ%2B6%2FU7dPMsqGM7eXvHK27nMkkw2ab6Ba3RaHwQEruKTDiWfz%2Fc0yDkoTmKjvo1w8atGaJtMfl4UljVoZzJsNfUPFLLy15rNBc8j73O6BqTHeDDmy2jWCDo2TxOxUSfAcNX00ED0WD58k4ylfh4Pim0qR0RTlOz5VMW2ZkQ0QqvlDiHBSBZ404C1wBZW%2BJdHp9&X-Amz-Signature=06e6f0e2c30ebd4fb87dece7ac5a705485240cf2d536bb784b5b93028ec5f71a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM6T2PT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlRdi7hEiqJP2dukXQVXryDXpoxk%2BEY4NqX7d5aoxihAiAZ4BiQ1Egh9oQ8MuyUM51qlNxcV1HV5r7I84zaITDlHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDmjojgR5OR5%2Bg%2BKtwDdCiwElveEdvMA5APNTHR5ZTRaE%2FxNtrNX7ZZRUAKHvlwbZoFZ9%2BxsUxJsCR9oPYv10p3dBpSiO%2FcupCMRO7mnE%2FhWr3S9RHDYdc%2Bg5fB1%2F5j2i6d36jfDaFeTsBGJqnkr58WisZBn7l5WZF%2BR8d%2BD1oNaLKQmY%2FKOmKZgQgCoXLlYs%2F6plwJ9aenhCrrku%2BUYIwisEOE1w%2FsWYohF2zMc5BzQL8%2FqwDhhUnvj7rDGHSkyFU6eW%2FL7U0d5GwLSqZbVRc8xNlDmWQbzGSEyZ16ykvOrflHfJ6BTKHPnD%2B0pGu%2BEPlhgfvA4PB0oWMnpp3Wj6OJoWqEXMJcPVtkx%2BargdekXTB87wtz3qHXQJF5jH3Zykszi8DrZs35Ek5lfKxSKB2xy65Ubxst8TtqkySRpmYX2%2FOd7Pd1m02IUuQ0zfdHqenyY14RKxlYp1v%2FhWq3cwzBlwT5tOATrcb2qbCrWRxadFjsTviGmGAZn%2FclH9Jyp5O%2BsWqShuRsewFGiyfLiP1teAb4XpxZgT1NjAXydvLGGJpKdIMF493mOjaH4Ljn6uglH3RBhIVust4PyeZVykkXou5ABgIemWyqQiyA7yBDmNE3OmRJFnEDeBCYLXz4QHWFjCaPY3l%2Fmd4wi5ipvQY6pgHzypF4e3sJ3eekIJE2fq%2BLenCLlCsZ%2B6%2FU7dPMsqGM7eXvHK27nMkkw2ab6Ba3RaHwQEruKTDiWfz%2Fc0yDkoTmKjvo1w8atGaJtMfl4UljVoZzJsNfUPFLLy15rNBc8j73O6BqTHeDDmy2jWCDo2TxOxUSfAcNX00ED0WD58k4ylfh4Pim0qR0RTlOz5VMW2ZkQ0QqvlDiHBSBZ404C1wBZW%2BJdHp9&X-Amz-Signature=3cb5fcea1da5aae215e860f2b5da4e1b5a258f1873604b756e39177a207834df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM6T2PT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlRdi7hEiqJP2dukXQVXryDXpoxk%2BEY4NqX7d5aoxihAiAZ4BiQ1Egh9oQ8MuyUM51qlNxcV1HV5r7I84zaITDlHyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgfDmjojgR5OR5%2Bg%2BKtwDdCiwElveEdvMA5APNTHR5ZTRaE%2FxNtrNX7ZZRUAKHvlwbZoFZ9%2BxsUxJsCR9oPYv10p3dBpSiO%2FcupCMRO7mnE%2FhWr3S9RHDYdc%2Bg5fB1%2F5j2i6d36jfDaFeTsBGJqnkr58WisZBn7l5WZF%2BR8d%2BD1oNaLKQmY%2FKOmKZgQgCoXLlYs%2F6plwJ9aenhCrrku%2BUYIwisEOE1w%2FsWYohF2zMc5BzQL8%2FqwDhhUnvj7rDGHSkyFU6eW%2FL7U0d5GwLSqZbVRc8xNlDmWQbzGSEyZ16ykvOrflHfJ6BTKHPnD%2B0pGu%2BEPlhgfvA4PB0oWMnpp3Wj6OJoWqEXMJcPVtkx%2BargdekXTB87wtz3qHXQJF5jH3Zykszi8DrZs35Ek5lfKxSKB2xy65Ubxst8TtqkySRpmYX2%2FOd7Pd1m02IUuQ0zfdHqenyY14RKxlYp1v%2FhWq3cwzBlwT5tOATrcb2qbCrWRxadFjsTviGmGAZn%2FclH9Jyp5O%2BsWqShuRsewFGiyfLiP1teAb4XpxZgT1NjAXydvLGGJpKdIMF493mOjaH4Ljn6uglH3RBhIVust4PyeZVykkXou5ABgIemWyqQiyA7yBDmNE3OmRJFnEDeBCYLXz4QHWFjCaPY3l%2Fmd4wi5ipvQY6pgHzypF4e3sJ3eekIJE2fq%2BLenCLlCsZ%2B6%2FU7dPMsqGM7eXvHK27nMkkw2ab6Ba3RaHwQEruKTDiWfz%2Fc0yDkoTmKjvo1w8atGaJtMfl4UljVoZzJsNfUPFLLy15rNBc8j73O6BqTHeDDmy2jWCDo2TxOxUSfAcNX00ED0WD58k4ylfh4Pim0qR0RTlOz5VMW2ZkQ0QqvlDiHBSBZ404C1wBZW%2BJdHp9&X-Amz-Signature=987bb36a35213cbc87fd6c1e849ac86a07eac08d13924b2ea4194c6923214115&X-Amz-SignedHeaders=host&x-id=GetObject)
