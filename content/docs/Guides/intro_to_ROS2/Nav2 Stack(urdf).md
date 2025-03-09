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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4KWLJR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBXh8ysT7ha4J393l6icmqST3i%2B6g%2F2EZuLspJGoo%2BIoAiEAwB26N0rJi%2FBZke30x4FutAMyk6WJ8YOkipJuHRhPuMIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB9nUcTOnc3ZfzZfZCrcAzDLg7gt%2BHDxlLKMZ6xrBy99FBMu6WqAqTp1DDJCm0L5pJdAEoWnG6RTllCgCTTGcQE83rSrAde%2Bd8zui6YjtCZ0XZK%2FfmJn97BiAvsQcobHnfd7tGdwGfNLAR7yvXk%2Fod6U8FmLffllJ6GvAkm9poXFB5yNfMcLXNR3Z7MlXHgIX5sqgetKk3AmEMX91K3sz%2BVIV2wmcw%2BoNx54GtEEm%2FN3E9lKrbi27imyrOQs5KxonI0zUbzrpNaWuj9dRU%2F3OUQVQpRJo2ph6HcuzSwjD%2BSaXgXEoktkqym5Yzp9%2BnSTPlJQD6IBrE9USB90iorjT0Wsux3Af%2F78yeGi9jrPiHQem88kYmEW%2BG59bTo%2BuTc1QCf2TceynyoXmwGHCb7gLlQ8j5R0dw%2FpXuhSGyQh%2FGDXU8wd1%2FjsNiafYk8G3DW%2BB0Piha9rGu%2FMIuAxdXi67Q9dpv1GTwHaW%2BcqBiMkU4P593RBy02ZNhcmHNJijmVe%2FVs03gkNjL1oatWZKuln%2BFfUF2UexbIQgUshpb5GGp4hub%2B4fKf2J3HQYaBiH0uNgXctonihWzgs9zNnn4VPxJRxavj%2Fihb%2FbWLrguBsGS1AjPWQazzdtq7t%2B13rqCTR5YZraC8PSEvIvwyZMIvps74GOqUByKgGH6OL39PQg7wP8lwfJwRniDwnqdkh3s83%2BXsk6lbWrte0X83w6H3S6KcJMEWRqWTiw3Wsj87PK3zBlr0MuYqQ9Joyi4TNRkX%2F%2BDbV7ffMm8wkkxx%2BEFwleoxnkCapzpKO%2B%2Fh3T%2BdgNH5JYBDojOGjzekYJKVA9YPVymfmMyGSf8KbfWP93PsqeeevoPhewJa41H7b4Qg%2FU2FGgAIkAbc7WCZ1&X-Amz-Signature=ede4a1a16670e3bb8373999f5313ba743d1e9ea3b95f5c22bfec5790f62cea02&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4KWLJR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBXh8ysT7ha4J393l6icmqST3i%2B6g%2F2EZuLspJGoo%2BIoAiEAwB26N0rJi%2FBZke30x4FutAMyk6WJ8YOkipJuHRhPuMIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB9nUcTOnc3ZfzZfZCrcAzDLg7gt%2BHDxlLKMZ6xrBy99FBMu6WqAqTp1DDJCm0L5pJdAEoWnG6RTllCgCTTGcQE83rSrAde%2Bd8zui6YjtCZ0XZK%2FfmJn97BiAvsQcobHnfd7tGdwGfNLAR7yvXk%2Fod6U8FmLffllJ6GvAkm9poXFB5yNfMcLXNR3Z7MlXHgIX5sqgetKk3AmEMX91K3sz%2BVIV2wmcw%2BoNx54GtEEm%2FN3E9lKrbi27imyrOQs5KxonI0zUbzrpNaWuj9dRU%2F3OUQVQpRJo2ph6HcuzSwjD%2BSaXgXEoktkqym5Yzp9%2BnSTPlJQD6IBrE9USB90iorjT0Wsux3Af%2F78yeGi9jrPiHQem88kYmEW%2BG59bTo%2BuTc1QCf2TceynyoXmwGHCb7gLlQ8j5R0dw%2FpXuhSGyQh%2FGDXU8wd1%2FjsNiafYk8G3DW%2BB0Piha9rGu%2FMIuAxdXi67Q9dpv1GTwHaW%2BcqBiMkU4P593RBy02ZNhcmHNJijmVe%2FVs03gkNjL1oatWZKuln%2BFfUF2UexbIQgUshpb5GGp4hub%2B4fKf2J3HQYaBiH0uNgXctonihWzgs9zNnn4VPxJRxavj%2Fihb%2FbWLrguBsGS1AjPWQazzdtq7t%2B13rqCTR5YZraC8PSEvIvwyZMIvps74GOqUByKgGH6OL39PQg7wP8lwfJwRniDwnqdkh3s83%2BXsk6lbWrte0X83w6H3S6KcJMEWRqWTiw3Wsj87PK3zBlr0MuYqQ9Joyi4TNRkX%2F%2BDbV7ffMm8wkkxx%2BEFwleoxnkCapzpKO%2B%2Fh3T%2BdgNH5JYBDojOGjzekYJKVA9YPVymfmMyGSf8KbfWP93PsqeeevoPhewJa41H7b4Qg%2FU2FGgAIkAbc7WCZ1&X-Amz-Signature=9aa8dde2eb131e9e526a79915e95b5273c122f3c3a6b251807336e7399c229c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4KWLJR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBXh8ysT7ha4J393l6icmqST3i%2B6g%2F2EZuLspJGoo%2BIoAiEAwB26N0rJi%2FBZke30x4FutAMyk6WJ8YOkipJuHRhPuMIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB9nUcTOnc3ZfzZfZCrcAzDLg7gt%2BHDxlLKMZ6xrBy99FBMu6WqAqTp1DDJCm0L5pJdAEoWnG6RTllCgCTTGcQE83rSrAde%2Bd8zui6YjtCZ0XZK%2FfmJn97BiAvsQcobHnfd7tGdwGfNLAR7yvXk%2Fod6U8FmLffllJ6GvAkm9poXFB5yNfMcLXNR3Z7MlXHgIX5sqgetKk3AmEMX91K3sz%2BVIV2wmcw%2BoNx54GtEEm%2FN3E9lKrbi27imyrOQs5KxonI0zUbzrpNaWuj9dRU%2F3OUQVQpRJo2ph6HcuzSwjD%2BSaXgXEoktkqym5Yzp9%2BnSTPlJQD6IBrE9USB90iorjT0Wsux3Af%2F78yeGi9jrPiHQem88kYmEW%2BG59bTo%2BuTc1QCf2TceynyoXmwGHCb7gLlQ8j5R0dw%2FpXuhSGyQh%2FGDXU8wd1%2FjsNiafYk8G3DW%2BB0Piha9rGu%2FMIuAxdXi67Q9dpv1GTwHaW%2BcqBiMkU4P593RBy02ZNhcmHNJijmVe%2FVs03gkNjL1oatWZKuln%2BFfUF2UexbIQgUshpb5GGp4hub%2B4fKf2J3HQYaBiH0uNgXctonihWzgs9zNnn4VPxJRxavj%2Fihb%2FbWLrguBsGS1AjPWQazzdtq7t%2B13rqCTR5YZraC8PSEvIvwyZMIvps74GOqUByKgGH6OL39PQg7wP8lwfJwRniDwnqdkh3s83%2BXsk6lbWrte0X83w6H3S6KcJMEWRqWTiw3Wsj87PK3zBlr0MuYqQ9Joyi4TNRkX%2F%2BDbV7ffMm8wkkxx%2BEFwleoxnkCapzpKO%2B%2Fh3T%2BdgNH5JYBDojOGjzekYJKVA9YPVymfmMyGSf8KbfWP93PsqeeevoPhewJa41H7b4Qg%2FU2FGgAIkAbc7WCZ1&X-Amz-Signature=08ea682c895c1043149849b91c7f48b60491d25622d4b6a59b54b1b9c087684a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4KWLJR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBXh8ysT7ha4J393l6icmqST3i%2B6g%2F2EZuLspJGoo%2BIoAiEAwB26N0rJi%2FBZke30x4FutAMyk6WJ8YOkipJuHRhPuMIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB9nUcTOnc3ZfzZfZCrcAzDLg7gt%2BHDxlLKMZ6xrBy99FBMu6WqAqTp1DDJCm0L5pJdAEoWnG6RTllCgCTTGcQE83rSrAde%2Bd8zui6YjtCZ0XZK%2FfmJn97BiAvsQcobHnfd7tGdwGfNLAR7yvXk%2Fod6U8FmLffllJ6GvAkm9poXFB5yNfMcLXNR3Z7MlXHgIX5sqgetKk3AmEMX91K3sz%2BVIV2wmcw%2BoNx54GtEEm%2FN3E9lKrbi27imyrOQs5KxonI0zUbzrpNaWuj9dRU%2F3OUQVQpRJo2ph6HcuzSwjD%2BSaXgXEoktkqym5Yzp9%2BnSTPlJQD6IBrE9USB90iorjT0Wsux3Af%2F78yeGi9jrPiHQem88kYmEW%2BG59bTo%2BuTc1QCf2TceynyoXmwGHCb7gLlQ8j5R0dw%2FpXuhSGyQh%2FGDXU8wd1%2FjsNiafYk8G3DW%2BB0Piha9rGu%2FMIuAxdXi67Q9dpv1GTwHaW%2BcqBiMkU4P593RBy02ZNhcmHNJijmVe%2FVs03gkNjL1oatWZKuln%2BFfUF2UexbIQgUshpb5GGp4hub%2B4fKf2J3HQYaBiH0uNgXctonihWzgs9zNnn4VPxJRxavj%2Fihb%2FbWLrguBsGS1AjPWQazzdtq7t%2B13rqCTR5YZraC8PSEvIvwyZMIvps74GOqUByKgGH6OL39PQg7wP8lwfJwRniDwnqdkh3s83%2BXsk6lbWrte0X83w6H3S6KcJMEWRqWTiw3Wsj87PK3zBlr0MuYqQ9Joyi4TNRkX%2F%2BDbV7ffMm8wkkxx%2BEFwleoxnkCapzpKO%2B%2Fh3T%2BdgNH5JYBDojOGjzekYJKVA9YPVymfmMyGSf8KbfWP93PsqeeevoPhewJa41H7b4Qg%2FU2FGgAIkAbc7WCZ1&X-Amz-Signature=0bbf936284adba9bf7b24f00cfafcaaabbddb7d544fde815f9df7dc8fa04642e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4KWLJR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBXh8ysT7ha4J393l6icmqST3i%2B6g%2F2EZuLspJGoo%2BIoAiEAwB26N0rJi%2FBZke30x4FutAMyk6WJ8YOkipJuHRhPuMIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB9nUcTOnc3ZfzZfZCrcAzDLg7gt%2BHDxlLKMZ6xrBy99FBMu6WqAqTp1DDJCm0L5pJdAEoWnG6RTllCgCTTGcQE83rSrAde%2Bd8zui6YjtCZ0XZK%2FfmJn97BiAvsQcobHnfd7tGdwGfNLAR7yvXk%2Fod6U8FmLffllJ6GvAkm9poXFB5yNfMcLXNR3Z7MlXHgIX5sqgetKk3AmEMX91K3sz%2BVIV2wmcw%2BoNx54GtEEm%2FN3E9lKrbi27imyrOQs5KxonI0zUbzrpNaWuj9dRU%2F3OUQVQpRJo2ph6HcuzSwjD%2BSaXgXEoktkqym5Yzp9%2BnSTPlJQD6IBrE9USB90iorjT0Wsux3Af%2F78yeGi9jrPiHQem88kYmEW%2BG59bTo%2BuTc1QCf2TceynyoXmwGHCb7gLlQ8j5R0dw%2FpXuhSGyQh%2FGDXU8wd1%2FjsNiafYk8G3DW%2BB0Piha9rGu%2FMIuAxdXi67Q9dpv1GTwHaW%2BcqBiMkU4P593RBy02ZNhcmHNJijmVe%2FVs03gkNjL1oatWZKuln%2BFfUF2UexbIQgUshpb5GGp4hub%2B4fKf2J3HQYaBiH0uNgXctonihWzgs9zNnn4VPxJRxavj%2Fihb%2FbWLrguBsGS1AjPWQazzdtq7t%2B13rqCTR5YZraC8PSEvIvwyZMIvps74GOqUByKgGH6OL39PQg7wP8lwfJwRniDwnqdkh3s83%2BXsk6lbWrte0X83w6H3S6KcJMEWRqWTiw3Wsj87PK3zBlr0MuYqQ9Joyi4TNRkX%2F%2BDbV7ffMm8wkkxx%2BEFwleoxnkCapzpKO%2B%2Fh3T%2BdgNH5JYBDojOGjzekYJKVA9YPVymfmMyGSf8KbfWP93PsqeeevoPhewJa41H7b4Qg%2FU2FGgAIkAbc7WCZ1&X-Amz-Signature=fb98e47b7c805e617cc1f28405f241cc1991d7270c9cefc332063ff96415c87f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4KWLJR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBXh8ysT7ha4J393l6icmqST3i%2B6g%2F2EZuLspJGoo%2BIoAiEAwB26N0rJi%2FBZke30x4FutAMyk6WJ8YOkipJuHRhPuMIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDB9nUcTOnc3ZfzZfZCrcAzDLg7gt%2BHDxlLKMZ6xrBy99FBMu6WqAqTp1DDJCm0L5pJdAEoWnG6RTllCgCTTGcQE83rSrAde%2Bd8zui6YjtCZ0XZK%2FfmJn97BiAvsQcobHnfd7tGdwGfNLAR7yvXk%2Fod6U8FmLffllJ6GvAkm9poXFB5yNfMcLXNR3Z7MlXHgIX5sqgetKk3AmEMX91K3sz%2BVIV2wmcw%2BoNx54GtEEm%2FN3E9lKrbi27imyrOQs5KxonI0zUbzrpNaWuj9dRU%2F3OUQVQpRJo2ph6HcuzSwjD%2BSaXgXEoktkqym5Yzp9%2BnSTPlJQD6IBrE9USB90iorjT0Wsux3Af%2F78yeGi9jrPiHQem88kYmEW%2BG59bTo%2BuTc1QCf2TceynyoXmwGHCb7gLlQ8j5R0dw%2FpXuhSGyQh%2FGDXU8wd1%2FjsNiafYk8G3DW%2BB0Piha9rGu%2FMIuAxdXi67Q9dpv1GTwHaW%2BcqBiMkU4P593RBy02ZNhcmHNJijmVe%2FVs03gkNjL1oatWZKuln%2BFfUF2UexbIQgUshpb5GGp4hub%2B4fKf2J3HQYaBiH0uNgXctonihWzgs9zNnn4VPxJRxavj%2Fihb%2FbWLrguBsGS1AjPWQazzdtq7t%2B13rqCTR5YZraC8PSEvIvwyZMIvps74GOqUByKgGH6OL39PQg7wP8lwfJwRniDwnqdkh3s83%2BXsk6lbWrte0X83w6H3S6KcJMEWRqWTiw3Wsj87PK3zBlr0MuYqQ9Joyi4TNRkX%2F%2BDbV7ffMm8wkkxx%2BEFwleoxnkCapzpKO%2B%2Fh3T%2BdgNH5JYBDojOGjzekYJKVA9YPVymfmMyGSf8KbfWP93PsqeeevoPhewJa41H7b4Qg%2FU2FGgAIkAbc7WCZ1&X-Amz-Signature=06c27e6d0207a82baa0656f4fb477d15328712450a5dd0cb25e30d03b0141770&X-Amz-SignedHeaders=host&x-id=GetObject)
