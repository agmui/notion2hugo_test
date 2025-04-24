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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXWV3VB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUymzRIndrP8L5XolQmOWGuwbOc3LcaM4hhDKnTjP5gIgEjcmxz80mXYJbTG%2F6CCaYSEuLlRDG2TWcmS5yh4Csogq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ7s3WbOgqDjE8ThgSrcA98pD5WCe4%2FRhBAiIC3NcGJw1BSVMenEJojscVn7lLfBvAK0X0ROfoiieMK5WyYHWTSop9T9pV3QXY8Pi7NwEFtpy9GcaV0muTr3XT5DW5G4d2GtLknKQBUw0RdZQgefZ08q3Bz7Bo%2F8vifMh73OQ%2BGEvtdH493a5vlGn2X3bEBTsvYVPPT1gc5auCQUYNs8CLHua9jZMPc0d9cuYhwbpUV7zhjctr%2F8N3%2BRi0w5HRRPeMkUYsQn%2FESu%2FlWpkiKUkxfzfKCf7P7waW3f%2BQ9NTMkFZbV2ydtQVpIegNCAPGRQk9D295%2BQRm3SElWHirOnxSBZ01pdxvFcZxpumjV50skpPXrzCSWAtal0r%2FhU2wPrIEVlYd%2FoJNLUw0%2BtCjzDkHte7gY%2BIILf6qWBJ1O%2Fbsm%2FuPdk2aSSIjLt8tsJ3fv7lw6OA%2FbALvRqaeYhI5aPxYX1muWlfdPpbYgc35HhZjM8krKwbLs4OeKI2DXA3UJkFRuipi%2F3JVpsqYgOlXY05%2BPhHpXdP7KGv0g5xXROfY55fmzBJz5%2BHZI2hxrkE7eI8GoHxk5C4RdyF%2Fdb5ApOtONqPMVHVAg7ecOIS%2BxAFmpv%2FVt5kU1JQ281WrvHkWAeauTXDVnjzY4Yah6hMLeJqsAGOqUB7%2BoP1dyEB83PdLYv%2BtoB2Ouz07MT0n7pI%2BmA%2BC6sN9fArjqBF%2BRC8KGZF7OfPzo6pF8kRiq0wNR8lWdQ2HQk8aS7AC2zbwqYqiKye8GyhH%2BWC0f8%2FTF2rbxdzBAO66T1xrbuECQ1XUofI6r23nKzHw%2Fy%2Fkds9DULHOZcEQcEpj5MrnRQprVcgG6zkbXEiN92BjRqs6DRHGtqyRj1B9xFhmOUvEni&X-Amz-Signature=6cf3928026e53443551364a73fe52755f0b56b7357cc4bc6d5e38e1d79d84397&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXWV3VB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUymzRIndrP8L5XolQmOWGuwbOc3LcaM4hhDKnTjP5gIgEjcmxz80mXYJbTG%2F6CCaYSEuLlRDG2TWcmS5yh4Csogq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ7s3WbOgqDjE8ThgSrcA98pD5WCe4%2FRhBAiIC3NcGJw1BSVMenEJojscVn7lLfBvAK0X0ROfoiieMK5WyYHWTSop9T9pV3QXY8Pi7NwEFtpy9GcaV0muTr3XT5DW5G4d2GtLknKQBUw0RdZQgefZ08q3Bz7Bo%2F8vifMh73OQ%2BGEvtdH493a5vlGn2X3bEBTsvYVPPT1gc5auCQUYNs8CLHua9jZMPc0d9cuYhwbpUV7zhjctr%2F8N3%2BRi0w5HRRPeMkUYsQn%2FESu%2FlWpkiKUkxfzfKCf7P7waW3f%2BQ9NTMkFZbV2ydtQVpIegNCAPGRQk9D295%2BQRm3SElWHirOnxSBZ01pdxvFcZxpumjV50skpPXrzCSWAtal0r%2FhU2wPrIEVlYd%2FoJNLUw0%2BtCjzDkHte7gY%2BIILf6qWBJ1O%2Fbsm%2FuPdk2aSSIjLt8tsJ3fv7lw6OA%2FbALvRqaeYhI5aPxYX1muWlfdPpbYgc35HhZjM8krKwbLs4OeKI2DXA3UJkFRuipi%2F3JVpsqYgOlXY05%2BPhHpXdP7KGv0g5xXROfY55fmzBJz5%2BHZI2hxrkE7eI8GoHxk5C4RdyF%2Fdb5ApOtONqPMVHVAg7ecOIS%2BxAFmpv%2FVt5kU1JQ281WrvHkWAeauTXDVnjzY4Yah6hMLeJqsAGOqUB7%2BoP1dyEB83PdLYv%2BtoB2Ouz07MT0n7pI%2BmA%2BC6sN9fArjqBF%2BRC8KGZF7OfPzo6pF8kRiq0wNR8lWdQ2HQk8aS7AC2zbwqYqiKye8GyhH%2BWC0f8%2FTF2rbxdzBAO66T1xrbuECQ1XUofI6r23nKzHw%2Fy%2Fkds9DULHOZcEQcEpj5MrnRQprVcgG6zkbXEiN92BjRqs6DRHGtqyRj1B9xFhmOUvEni&X-Amz-Signature=e5cd48bd9c98d5654f72a8eb4e6c629fe8219ef095baf7bee7382cb6f407b97d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXWV3VB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUymzRIndrP8L5XolQmOWGuwbOc3LcaM4hhDKnTjP5gIgEjcmxz80mXYJbTG%2F6CCaYSEuLlRDG2TWcmS5yh4Csogq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ7s3WbOgqDjE8ThgSrcA98pD5WCe4%2FRhBAiIC3NcGJw1BSVMenEJojscVn7lLfBvAK0X0ROfoiieMK5WyYHWTSop9T9pV3QXY8Pi7NwEFtpy9GcaV0muTr3XT5DW5G4d2GtLknKQBUw0RdZQgefZ08q3Bz7Bo%2F8vifMh73OQ%2BGEvtdH493a5vlGn2X3bEBTsvYVPPT1gc5auCQUYNs8CLHua9jZMPc0d9cuYhwbpUV7zhjctr%2F8N3%2BRi0w5HRRPeMkUYsQn%2FESu%2FlWpkiKUkxfzfKCf7P7waW3f%2BQ9NTMkFZbV2ydtQVpIegNCAPGRQk9D295%2BQRm3SElWHirOnxSBZ01pdxvFcZxpumjV50skpPXrzCSWAtal0r%2FhU2wPrIEVlYd%2FoJNLUw0%2BtCjzDkHte7gY%2BIILf6qWBJ1O%2Fbsm%2FuPdk2aSSIjLt8tsJ3fv7lw6OA%2FbALvRqaeYhI5aPxYX1muWlfdPpbYgc35HhZjM8krKwbLs4OeKI2DXA3UJkFRuipi%2F3JVpsqYgOlXY05%2BPhHpXdP7KGv0g5xXROfY55fmzBJz5%2BHZI2hxrkE7eI8GoHxk5C4RdyF%2Fdb5ApOtONqPMVHVAg7ecOIS%2BxAFmpv%2FVt5kU1JQ281WrvHkWAeauTXDVnjzY4Yah6hMLeJqsAGOqUB7%2BoP1dyEB83PdLYv%2BtoB2Ouz07MT0n7pI%2BmA%2BC6sN9fArjqBF%2BRC8KGZF7OfPzo6pF8kRiq0wNR8lWdQ2HQk8aS7AC2zbwqYqiKye8GyhH%2BWC0f8%2FTF2rbxdzBAO66T1xrbuECQ1XUofI6r23nKzHw%2Fy%2Fkds9DULHOZcEQcEpj5MrnRQprVcgG6zkbXEiN92BjRqs6DRHGtqyRj1B9xFhmOUvEni&X-Amz-Signature=a449d82e8681352e0eb1a075c00975e71fb0400f226aa552a0644c63c38eec2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXWV3VB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUymzRIndrP8L5XolQmOWGuwbOc3LcaM4hhDKnTjP5gIgEjcmxz80mXYJbTG%2F6CCaYSEuLlRDG2TWcmS5yh4Csogq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ7s3WbOgqDjE8ThgSrcA98pD5WCe4%2FRhBAiIC3NcGJw1BSVMenEJojscVn7lLfBvAK0X0ROfoiieMK5WyYHWTSop9T9pV3QXY8Pi7NwEFtpy9GcaV0muTr3XT5DW5G4d2GtLknKQBUw0RdZQgefZ08q3Bz7Bo%2F8vifMh73OQ%2BGEvtdH493a5vlGn2X3bEBTsvYVPPT1gc5auCQUYNs8CLHua9jZMPc0d9cuYhwbpUV7zhjctr%2F8N3%2BRi0w5HRRPeMkUYsQn%2FESu%2FlWpkiKUkxfzfKCf7P7waW3f%2BQ9NTMkFZbV2ydtQVpIegNCAPGRQk9D295%2BQRm3SElWHirOnxSBZ01pdxvFcZxpumjV50skpPXrzCSWAtal0r%2FhU2wPrIEVlYd%2FoJNLUw0%2BtCjzDkHte7gY%2BIILf6qWBJ1O%2Fbsm%2FuPdk2aSSIjLt8tsJ3fv7lw6OA%2FbALvRqaeYhI5aPxYX1muWlfdPpbYgc35HhZjM8krKwbLs4OeKI2DXA3UJkFRuipi%2F3JVpsqYgOlXY05%2BPhHpXdP7KGv0g5xXROfY55fmzBJz5%2BHZI2hxrkE7eI8GoHxk5C4RdyF%2Fdb5ApOtONqPMVHVAg7ecOIS%2BxAFmpv%2FVt5kU1JQ281WrvHkWAeauTXDVnjzY4Yah6hMLeJqsAGOqUB7%2BoP1dyEB83PdLYv%2BtoB2Ouz07MT0n7pI%2BmA%2BC6sN9fArjqBF%2BRC8KGZF7OfPzo6pF8kRiq0wNR8lWdQ2HQk8aS7AC2zbwqYqiKye8GyhH%2BWC0f8%2FTF2rbxdzBAO66T1xrbuECQ1XUofI6r23nKzHw%2Fy%2Fkds9DULHOZcEQcEpj5MrnRQprVcgG6zkbXEiN92BjRqs6DRHGtqyRj1B9xFhmOUvEni&X-Amz-Signature=e5f7308561885657729069b728d57965e18fc8c94e6f72bd2bae442bb7bd2aab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXWV3VB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUymzRIndrP8L5XolQmOWGuwbOc3LcaM4hhDKnTjP5gIgEjcmxz80mXYJbTG%2F6CCaYSEuLlRDG2TWcmS5yh4Csogq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ7s3WbOgqDjE8ThgSrcA98pD5WCe4%2FRhBAiIC3NcGJw1BSVMenEJojscVn7lLfBvAK0X0ROfoiieMK5WyYHWTSop9T9pV3QXY8Pi7NwEFtpy9GcaV0muTr3XT5DW5G4d2GtLknKQBUw0RdZQgefZ08q3Bz7Bo%2F8vifMh73OQ%2BGEvtdH493a5vlGn2X3bEBTsvYVPPT1gc5auCQUYNs8CLHua9jZMPc0d9cuYhwbpUV7zhjctr%2F8N3%2BRi0w5HRRPeMkUYsQn%2FESu%2FlWpkiKUkxfzfKCf7P7waW3f%2BQ9NTMkFZbV2ydtQVpIegNCAPGRQk9D295%2BQRm3SElWHirOnxSBZ01pdxvFcZxpumjV50skpPXrzCSWAtal0r%2FhU2wPrIEVlYd%2FoJNLUw0%2BtCjzDkHte7gY%2BIILf6qWBJ1O%2Fbsm%2FuPdk2aSSIjLt8tsJ3fv7lw6OA%2FbALvRqaeYhI5aPxYX1muWlfdPpbYgc35HhZjM8krKwbLs4OeKI2DXA3UJkFRuipi%2F3JVpsqYgOlXY05%2BPhHpXdP7KGv0g5xXROfY55fmzBJz5%2BHZI2hxrkE7eI8GoHxk5C4RdyF%2Fdb5ApOtONqPMVHVAg7ecOIS%2BxAFmpv%2FVt5kU1JQ281WrvHkWAeauTXDVnjzY4Yah6hMLeJqsAGOqUB7%2BoP1dyEB83PdLYv%2BtoB2Ouz07MT0n7pI%2BmA%2BC6sN9fArjqBF%2BRC8KGZF7OfPzo6pF8kRiq0wNR8lWdQ2HQk8aS7AC2zbwqYqiKye8GyhH%2BWC0f8%2FTF2rbxdzBAO66T1xrbuECQ1XUofI6r23nKzHw%2Fy%2Fkds9DULHOZcEQcEpj5MrnRQprVcgG6zkbXEiN92BjRqs6DRHGtqyRj1B9xFhmOUvEni&X-Amz-Signature=bc0f6422ed896f8c2d92352a5a9609c99471daeea4a7c8d96ccd49bfc0e0d094&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGXWV3VB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUymzRIndrP8L5XolQmOWGuwbOc3LcaM4hhDKnTjP5gIgEjcmxz80mXYJbTG%2F6CCaYSEuLlRDG2TWcmS5yh4Csogq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJ7s3WbOgqDjE8ThgSrcA98pD5WCe4%2FRhBAiIC3NcGJw1BSVMenEJojscVn7lLfBvAK0X0ROfoiieMK5WyYHWTSop9T9pV3QXY8Pi7NwEFtpy9GcaV0muTr3XT5DW5G4d2GtLknKQBUw0RdZQgefZ08q3Bz7Bo%2F8vifMh73OQ%2BGEvtdH493a5vlGn2X3bEBTsvYVPPT1gc5auCQUYNs8CLHua9jZMPc0d9cuYhwbpUV7zhjctr%2F8N3%2BRi0w5HRRPeMkUYsQn%2FESu%2FlWpkiKUkxfzfKCf7P7waW3f%2BQ9NTMkFZbV2ydtQVpIegNCAPGRQk9D295%2BQRm3SElWHirOnxSBZ01pdxvFcZxpumjV50skpPXrzCSWAtal0r%2FhU2wPrIEVlYd%2FoJNLUw0%2BtCjzDkHte7gY%2BIILf6qWBJ1O%2Fbsm%2FuPdk2aSSIjLt8tsJ3fv7lw6OA%2FbALvRqaeYhI5aPxYX1muWlfdPpbYgc35HhZjM8krKwbLs4OeKI2DXA3UJkFRuipi%2F3JVpsqYgOlXY05%2BPhHpXdP7KGv0g5xXROfY55fmzBJz5%2BHZI2hxrkE7eI8GoHxk5C4RdyF%2Fdb5ApOtONqPMVHVAg7ecOIS%2BxAFmpv%2FVt5kU1JQ281WrvHkWAeauTXDVnjzY4Yah6hMLeJqsAGOqUB7%2BoP1dyEB83PdLYv%2BtoB2Ouz07MT0n7pI%2BmA%2BC6sN9fArjqBF%2BRC8KGZF7OfPzo6pF8kRiq0wNR8lWdQ2HQk8aS7AC2zbwqYqiKye8GyhH%2BWC0f8%2FTF2rbxdzBAO66T1xrbuECQ1XUofI6r23nKzHw%2Fy%2Fkds9DULHOZcEQcEpj5MrnRQprVcgG6zkbXEiN92BjRqs6DRHGtqyRj1B9xFhmOUvEni&X-Amz-Signature=4ec564574bd361cae4324474b9869da7059d3e45b7f34ca7bad745155e6b3e0e&X-Amz-SignedHeaders=host&x-id=GetObject)
