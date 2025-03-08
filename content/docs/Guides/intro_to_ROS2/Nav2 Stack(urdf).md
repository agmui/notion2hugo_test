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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Y45JGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHe3ZDtK6gDEBAZdj3r7UCwkiTBdmhhJA1Of609nwdIdAiAb3p3K6PY5k2tFE83l1cVQdm%2FLfoFzLowWhrxmWrp42yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIWp1f%2Bg%2FD7I1bhZPKtwDOTdDYFDnDJ8rjPNM8TGJGbeKsrOp%2Fy7T3a5z0f3PywLykSMFVAt7FmVM1v9TCv0kQJuGy30NHR9DT28LtBnAVJih0l7TY263Abr%2FbQ1vmiYWeUCIv5nv4pZ4wQd4wGUiVLFUcuezHoyxmtgngjv5SgPifW8eeo3hh8ygmTbIPfP%2FXHANOEIBD%2F9pTxi3UtLhS9Zaxlxot0PqD%2BEKY8zVlEwef%2FKkNDYhdD1kh9WYznhgeDe8Mi1NAzoID06PGdBDs6LOHXsmyL3pvaSQXkqLj39pKZM3D%2FqGXv59VoD%2FYxPR4v8uU9xcqooOAR%2F0MD0U%2F6KESeK834QeLlcyADrmsUClfTaX%2FFVeVoKO1ORVLXmr6Zc0lJcUzW0fumcWY1CeOE1yzl9%2FJY7HO%2F%2Bo%2FsUi2rPRVyMJqmYwPaiZ%2BLPH%2BEkEAd%2F82qCeMKcicGUKUFfrr42NG01%2BXCaSJn7XcpeH8XXBeCmdqAWicK9SUf9PMYRih%2Fjnu%2FAKUFGP1QVZAem84qm35UP94R0n%2BVKzob6Kb6Huk8vjO5hJMG14cjqauDNCnWNSuD1UqqMKF9AWuRrnWsAZAQx5UWQBEmsJttdWSeCF1N0uTsRELaL2naH1%2BunYjjmW1TWPPYQ7NdYwpL2uvgY6pgEi8vNrmezMq5agJTxA2cGSzj5ojEs%2FMV9KFFo9KieICWFthuXYIUnUTGfjMNwTYxUzl40hy0%2FCBis9feR13CjEYs7F2hzj2WfdFiml79hkWH5dypJVWjBDlqhQsHpRtI%2FpFGdflWwezaUKHjDecO%2F7sDCwMup9ZMSff507kKLDl3vpVouU9jKW6pojs%2BbH%2FPFipFHpnRtNmYTUiD8GDYl7g5800DAK&X-Amz-Signature=e14761f7dd830017482e1326210ecabafcf4a40b44970d70889d83f4fd404693&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Y45JGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHe3ZDtK6gDEBAZdj3r7UCwkiTBdmhhJA1Of609nwdIdAiAb3p3K6PY5k2tFE83l1cVQdm%2FLfoFzLowWhrxmWrp42yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIWp1f%2Bg%2FD7I1bhZPKtwDOTdDYFDnDJ8rjPNM8TGJGbeKsrOp%2Fy7T3a5z0f3PywLykSMFVAt7FmVM1v9TCv0kQJuGy30NHR9DT28LtBnAVJih0l7TY263Abr%2FbQ1vmiYWeUCIv5nv4pZ4wQd4wGUiVLFUcuezHoyxmtgngjv5SgPifW8eeo3hh8ygmTbIPfP%2FXHANOEIBD%2F9pTxi3UtLhS9Zaxlxot0PqD%2BEKY8zVlEwef%2FKkNDYhdD1kh9WYznhgeDe8Mi1NAzoID06PGdBDs6LOHXsmyL3pvaSQXkqLj39pKZM3D%2FqGXv59VoD%2FYxPR4v8uU9xcqooOAR%2F0MD0U%2F6KESeK834QeLlcyADrmsUClfTaX%2FFVeVoKO1ORVLXmr6Zc0lJcUzW0fumcWY1CeOE1yzl9%2FJY7HO%2F%2Bo%2FsUi2rPRVyMJqmYwPaiZ%2BLPH%2BEkEAd%2F82qCeMKcicGUKUFfrr42NG01%2BXCaSJn7XcpeH8XXBeCmdqAWicK9SUf9PMYRih%2Fjnu%2FAKUFGP1QVZAem84qm35UP94R0n%2BVKzob6Kb6Huk8vjO5hJMG14cjqauDNCnWNSuD1UqqMKF9AWuRrnWsAZAQx5UWQBEmsJttdWSeCF1N0uTsRELaL2naH1%2BunYjjmW1TWPPYQ7NdYwpL2uvgY6pgEi8vNrmezMq5agJTxA2cGSzj5ojEs%2FMV9KFFo9KieICWFthuXYIUnUTGfjMNwTYxUzl40hy0%2FCBis9feR13CjEYs7F2hzj2WfdFiml79hkWH5dypJVWjBDlqhQsHpRtI%2FpFGdflWwezaUKHjDecO%2F7sDCwMup9ZMSff507kKLDl3vpVouU9jKW6pojs%2BbH%2FPFipFHpnRtNmYTUiD8GDYl7g5800DAK&X-Amz-Signature=84013692064dcc35fdbb4eed8789cd0014ddb313ade6be38976d4d308a5061e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Y45JGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHe3ZDtK6gDEBAZdj3r7UCwkiTBdmhhJA1Of609nwdIdAiAb3p3K6PY5k2tFE83l1cVQdm%2FLfoFzLowWhrxmWrp42yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIWp1f%2Bg%2FD7I1bhZPKtwDOTdDYFDnDJ8rjPNM8TGJGbeKsrOp%2Fy7T3a5z0f3PywLykSMFVAt7FmVM1v9TCv0kQJuGy30NHR9DT28LtBnAVJih0l7TY263Abr%2FbQ1vmiYWeUCIv5nv4pZ4wQd4wGUiVLFUcuezHoyxmtgngjv5SgPifW8eeo3hh8ygmTbIPfP%2FXHANOEIBD%2F9pTxi3UtLhS9Zaxlxot0PqD%2BEKY8zVlEwef%2FKkNDYhdD1kh9WYznhgeDe8Mi1NAzoID06PGdBDs6LOHXsmyL3pvaSQXkqLj39pKZM3D%2FqGXv59VoD%2FYxPR4v8uU9xcqooOAR%2F0MD0U%2F6KESeK834QeLlcyADrmsUClfTaX%2FFVeVoKO1ORVLXmr6Zc0lJcUzW0fumcWY1CeOE1yzl9%2FJY7HO%2F%2Bo%2FsUi2rPRVyMJqmYwPaiZ%2BLPH%2BEkEAd%2F82qCeMKcicGUKUFfrr42NG01%2BXCaSJn7XcpeH8XXBeCmdqAWicK9SUf9PMYRih%2Fjnu%2FAKUFGP1QVZAem84qm35UP94R0n%2BVKzob6Kb6Huk8vjO5hJMG14cjqauDNCnWNSuD1UqqMKF9AWuRrnWsAZAQx5UWQBEmsJttdWSeCF1N0uTsRELaL2naH1%2BunYjjmW1TWPPYQ7NdYwpL2uvgY6pgEi8vNrmezMq5agJTxA2cGSzj5ojEs%2FMV9KFFo9KieICWFthuXYIUnUTGfjMNwTYxUzl40hy0%2FCBis9feR13CjEYs7F2hzj2WfdFiml79hkWH5dypJVWjBDlqhQsHpRtI%2FpFGdflWwezaUKHjDecO%2F7sDCwMup9ZMSff507kKLDl3vpVouU9jKW6pojs%2BbH%2FPFipFHpnRtNmYTUiD8GDYl7g5800DAK&X-Amz-Signature=7ce63f9c24f21173179905263716b4609c65fea0195085d2c3a6d790935a3aed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Y45JGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHe3ZDtK6gDEBAZdj3r7UCwkiTBdmhhJA1Of609nwdIdAiAb3p3K6PY5k2tFE83l1cVQdm%2FLfoFzLowWhrxmWrp42yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIWp1f%2Bg%2FD7I1bhZPKtwDOTdDYFDnDJ8rjPNM8TGJGbeKsrOp%2Fy7T3a5z0f3PywLykSMFVAt7FmVM1v9TCv0kQJuGy30NHR9DT28LtBnAVJih0l7TY263Abr%2FbQ1vmiYWeUCIv5nv4pZ4wQd4wGUiVLFUcuezHoyxmtgngjv5SgPifW8eeo3hh8ygmTbIPfP%2FXHANOEIBD%2F9pTxi3UtLhS9Zaxlxot0PqD%2BEKY8zVlEwef%2FKkNDYhdD1kh9WYznhgeDe8Mi1NAzoID06PGdBDs6LOHXsmyL3pvaSQXkqLj39pKZM3D%2FqGXv59VoD%2FYxPR4v8uU9xcqooOAR%2F0MD0U%2F6KESeK834QeLlcyADrmsUClfTaX%2FFVeVoKO1ORVLXmr6Zc0lJcUzW0fumcWY1CeOE1yzl9%2FJY7HO%2F%2Bo%2FsUi2rPRVyMJqmYwPaiZ%2BLPH%2BEkEAd%2F82qCeMKcicGUKUFfrr42NG01%2BXCaSJn7XcpeH8XXBeCmdqAWicK9SUf9PMYRih%2Fjnu%2FAKUFGP1QVZAem84qm35UP94R0n%2BVKzob6Kb6Huk8vjO5hJMG14cjqauDNCnWNSuD1UqqMKF9AWuRrnWsAZAQx5UWQBEmsJttdWSeCF1N0uTsRELaL2naH1%2BunYjjmW1TWPPYQ7NdYwpL2uvgY6pgEi8vNrmezMq5agJTxA2cGSzj5ojEs%2FMV9KFFo9KieICWFthuXYIUnUTGfjMNwTYxUzl40hy0%2FCBis9feR13CjEYs7F2hzj2WfdFiml79hkWH5dypJVWjBDlqhQsHpRtI%2FpFGdflWwezaUKHjDecO%2F7sDCwMup9ZMSff507kKLDl3vpVouU9jKW6pojs%2BbH%2FPFipFHpnRtNmYTUiD8GDYl7g5800DAK&X-Amz-Signature=aa05253786e74c9f919cc2823997140fdaf4b898ad78e0c1d9fdd388b078e232&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Y45JGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHe3ZDtK6gDEBAZdj3r7UCwkiTBdmhhJA1Of609nwdIdAiAb3p3K6PY5k2tFE83l1cVQdm%2FLfoFzLowWhrxmWrp42yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIWp1f%2Bg%2FD7I1bhZPKtwDOTdDYFDnDJ8rjPNM8TGJGbeKsrOp%2Fy7T3a5z0f3PywLykSMFVAt7FmVM1v9TCv0kQJuGy30NHR9DT28LtBnAVJih0l7TY263Abr%2FbQ1vmiYWeUCIv5nv4pZ4wQd4wGUiVLFUcuezHoyxmtgngjv5SgPifW8eeo3hh8ygmTbIPfP%2FXHANOEIBD%2F9pTxi3UtLhS9Zaxlxot0PqD%2BEKY8zVlEwef%2FKkNDYhdD1kh9WYznhgeDe8Mi1NAzoID06PGdBDs6LOHXsmyL3pvaSQXkqLj39pKZM3D%2FqGXv59VoD%2FYxPR4v8uU9xcqooOAR%2F0MD0U%2F6KESeK834QeLlcyADrmsUClfTaX%2FFVeVoKO1ORVLXmr6Zc0lJcUzW0fumcWY1CeOE1yzl9%2FJY7HO%2F%2Bo%2FsUi2rPRVyMJqmYwPaiZ%2BLPH%2BEkEAd%2F82qCeMKcicGUKUFfrr42NG01%2BXCaSJn7XcpeH8XXBeCmdqAWicK9SUf9PMYRih%2Fjnu%2FAKUFGP1QVZAem84qm35UP94R0n%2BVKzob6Kb6Huk8vjO5hJMG14cjqauDNCnWNSuD1UqqMKF9AWuRrnWsAZAQx5UWQBEmsJttdWSeCF1N0uTsRELaL2naH1%2BunYjjmW1TWPPYQ7NdYwpL2uvgY6pgEi8vNrmezMq5agJTxA2cGSzj5ojEs%2FMV9KFFo9KieICWFthuXYIUnUTGfjMNwTYxUzl40hy0%2FCBis9feR13CjEYs7F2hzj2WfdFiml79hkWH5dypJVWjBDlqhQsHpRtI%2FpFGdflWwezaUKHjDecO%2F7sDCwMup9ZMSff507kKLDl3vpVouU9jKW6pojs%2BbH%2FPFipFHpnRtNmYTUiD8GDYl7g5800DAK&X-Amz-Signature=770e5fb96ba82e182fd83cdbab295367eea5d0549fc71c7d4b49665d905d79d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4Y45JGI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHe3ZDtK6gDEBAZdj3r7UCwkiTBdmhhJA1Of609nwdIdAiAb3p3K6PY5k2tFE83l1cVQdm%2FLfoFzLowWhrxmWrp42yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMIWp1f%2Bg%2FD7I1bhZPKtwDOTdDYFDnDJ8rjPNM8TGJGbeKsrOp%2Fy7T3a5z0f3PywLykSMFVAt7FmVM1v9TCv0kQJuGy30NHR9DT28LtBnAVJih0l7TY263Abr%2FbQ1vmiYWeUCIv5nv4pZ4wQd4wGUiVLFUcuezHoyxmtgngjv5SgPifW8eeo3hh8ygmTbIPfP%2FXHANOEIBD%2F9pTxi3UtLhS9Zaxlxot0PqD%2BEKY8zVlEwef%2FKkNDYhdD1kh9WYznhgeDe8Mi1NAzoID06PGdBDs6LOHXsmyL3pvaSQXkqLj39pKZM3D%2FqGXv59VoD%2FYxPR4v8uU9xcqooOAR%2F0MD0U%2F6KESeK834QeLlcyADrmsUClfTaX%2FFVeVoKO1ORVLXmr6Zc0lJcUzW0fumcWY1CeOE1yzl9%2FJY7HO%2F%2Bo%2FsUi2rPRVyMJqmYwPaiZ%2BLPH%2BEkEAd%2F82qCeMKcicGUKUFfrr42NG01%2BXCaSJn7XcpeH8XXBeCmdqAWicK9SUf9PMYRih%2Fjnu%2FAKUFGP1QVZAem84qm35UP94R0n%2BVKzob6Kb6Huk8vjO5hJMG14cjqauDNCnWNSuD1UqqMKF9AWuRrnWsAZAQx5UWQBEmsJttdWSeCF1N0uTsRELaL2naH1%2BunYjjmW1TWPPYQ7NdYwpL2uvgY6pgEi8vNrmezMq5agJTxA2cGSzj5ojEs%2FMV9KFFo9KieICWFthuXYIUnUTGfjMNwTYxUzl40hy0%2FCBis9feR13CjEYs7F2hzj2WfdFiml79hkWH5dypJVWjBDlqhQsHpRtI%2FpFGdflWwezaUKHjDecO%2F7sDCwMup9ZMSff507kKLDl3vpVouU9jKW6pojs%2BbH%2FPFipFHpnRtNmYTUiD8GDYl7g5800DAK&X-Amz-Signature=503a8b36d44a32c0b115e95c9d74da68374264f83186c2bbc44a41dfb552b724&X-Amz-SignedHeaders=host&x-id=GetObject)
