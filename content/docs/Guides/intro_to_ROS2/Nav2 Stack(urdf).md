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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWLPQAV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnETrhlvOAVuhUTtXGj7Uu2XozKNu95c8mCms8nIdpiQIgHMb5I4%2B2r%2Fx8trspL7IvuFCb%2BzMuRLa1kTrpmz8enusqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6xjfrpXZ6kiuF2byrcA3OgQJJP%2BK7cSJOlZ8KtD73%2FhOx4IXxtDIZsePIiK967Z0P8BkA3qs%2Bkpg0YenvPpLnO0YduoUUXY54lExZMPjsLsnfpCaiscKCIlXGdonLwk3WAlUefaV6RS9RYLJWukpUJXrb6jgnDyJyfGfsqTzr65D8NrTRNcLgcfb6u9eT97j0RfgzT2XtaCVU8g3lSPk0WKjaSJ4E3oYZquoOoUmVQjxOHLawVLp4pLQwibDLfOQg%2Fkhp9LRNAOBgVPlD05sPNmpG0uDbNHUBR7tzP8avY7z2vf8a2RsoHRY5MTwGxyAQ1ZuEAFzjMpa%2BnDh3m2LN1x7jxFI%2BqI5JGrBZE%2B%2BFgJe9NVdoaZedEnWuQbTnZRzhyRFbt0usTwvm7R%2FCA%2BC43GKm7gilY5cvLjvleFBC338a2tf56l%2B%2BxUIfSd5yvu2LWOmPeANTKisXkRNzs3gDgBIp7do6d4%2BNLYJdmVC%2BqOoau4aWhdxk7i7ku%2BAvoZr8IaUnAcpR6GnIFTCECBKrz10fwze61PEGkkKX5AR8ubxOqR0dcjGHYOegtWdltYtjfEMm5xIdn2U80fDTdRyb1vpMQ0mNm%2FTvnvxlPkH4E44W%2FdE5qVG4DYfKGkjgYqe%2FBfwRXy5wzqDZjMLqKrb0GOqUBk%2FeUdwW3r7HUnI%2FC%2FkUaI1p6qWjHcJ%2FDeroe1I%2BPvwdi25ElTaktNvfph4QonCsSiMyRQaLLNB9nNnviiTn7Gwi%2F5kyw%2B0koDlzLeielT68Pm4%2FQnU5OWx6EHxRBjHyxO8Z5mfy6LEFt64s5oN9A06vadu5e%2BwqWIQduck74zPgHjNMavLiiiFf%2FDeH%2BOCd693SY2uMCoAn8CleRg%2BWvyIVW76HL&X-Amz-Signature=25fd4fdbbdc2a96873eaea27a93e15fde8758b0f3d392a4a10d914106e95e3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWLPQAV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnETrhlvOAVuhUTtXGj7Uu2XozKNu95c8mCms8nIdpiQIgHMb5I4%2B2r%2Fx8trspL7IvuFCb%2BzMuRLa1kTrpmz8enusqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6xjfrpXZ6kiuF2byrcA3OgQJJP%2BK7cSJOlZ8KtD73%2FhOx4IXxtDIZsePIiK967Z0P8BkA3qs%2Bkpg0YenvPpLnO0YduoUUXY54lExZMPjsLsnfpCaiscKCIlXGdonLwk3WAlUefaV6RS9RYLJWukpUJXrb6jgnDyJyfGfsqTzr65D8NrTRNcLgcfb6u9eT97j0RfgzT2XtaCVU8g3lSPk0WKjaSJ4E3oYZquoOoUmVQjxOHLawVLp4pLQwibDLfOQg%2Fkhp9LRNAOBgVPlD05sPNmpG0uDbNHUBR7tzP8avY7z2vf8a2RsoHRY5MTwGxyAQ1ZuEAFzjMpa%2BnDh3m2LN1x7jxFI%2BqI5JGrBZE%2B%2BFgJe9NVdoaZedEnWuQbTnZRzhyRFbt0usTwvm7R%2FCA%2BC43GKm7gilY5cvLjvleFBC338a2tf56l%2B%2BxUIfSd5yvu2LWOmPeANTKisXkRNzs3gDgBIp7do6d4%2BNLYJdmVC%2BqOoau4aWhdxk7i7ku%2BAvoZr8IaUnAcpR6GnIFTCECBKrz10fwze61PEGkkKX5AR8ubxOqR0dcjGHYOegtWdltYtjfEMm5xIdn2U80fDTdRyb1vpMQ0mNm%2FTvnvxlPkH4E44W%2FdE5qVG4DYfKGkjgYqe%2FBfwRXy5wzqDZjMLqKrb0GOqUBk%2FeUdwW3r7HUnI%2FC%2FkUaI1p6qWjHcJ%2FDeroe1I%2BPvwdi25ElTaktNvfph4QonCsSiMyRQaLLNB9nNnviiTn7Gwi%2F5kyw%2B0koDlzLeielT68Pm4%2FQnU5OWx6EHxRBjHyxO8Z5mfy6LEFt64s5oN9A06vadu5e%2BwqWIQduck74zPgHjNMavLiiiFf%2FDeH%2BOCd693SY2uMCoAn8CleRg%2BWvyIVW76HL&X-Amz-Signature=40e5567b3e8a8ca94724dd03c9526310192e35d20105d64e543c93309bdc3672&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWLPQAV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnETrhlvOAVuhUTtXGj7Uu2XozKNu95c8mCms8nIdpiQIgHMb5I4%2B2r%2Fx8trspL7IvuFCb%2BzMuRLa1kTrpmz8enusqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6xjfrpXZ6kiuF2byrcA3OgQJJP%2BK7cSJOlZ8KtD73%2FhOx4IXxtDIZsePIiK967Z0P8BkA3qs%2Bkpg0YenvPpLnO0YduoUUXY54lExZMPjsLsnfpCaiscKCIlXGdonLwk3WAlUefaV6RS9RYLJWukpUJXrb6jgnDyJyfGfsqTzr65D8NrTRNcLgcfb6u9eT97j0RfgzT2XtaCVU8g3lSPk0WKjaSJ4E3oYZquoOoUmVQjxOHLawVLp4pLQwibDLfOQg%2Fkhp9LRNAOBgVPlD05sPNmpG0uDbNHUBR7tzP8avY7z2vf8a2RsoHRY5MTwGxyAQ1ZuEAFzjMpa%2BnDh3m2LN1x7jxFI%2BqI5JGrBZE%2B%2BFgJe9NVdoaZedEnWuQbTnZRzhyRFbt0usTwvm7R%2FCA%2BC43GKm7gilY5cvLjvleFBC338a2tf56l%2B%2BxUIfSd5yvu2LWOmPeANTKisXkRNzs3gDgBIp7do6d4%2BNLYJdmVC%2BqOoau4aWhdxk7i7ku%2BAvoZr8IaUnAcpR6GnIFTCECBKrz10fwze61PEGkkKX5AR8ubxOqR0dcjGHYOegtWdltYtjfEMm5xIdn2U80fDTdRyb1vpMQ0mNm%2FTvnvxlPkH4E44W%2FdE5qVG4DYfKGkjgYqe%2FBfwRXy5wzqDZjMLqKrb0GOqUBk%2FeUdwW3r7HUnI%2FC%2FkUaI1p6qWjHcJ%2FDeroe1I%2BPvwdi25ElTaktNvfph4QonCsSiMyRQaLLNB9nNnviiTn7Gwi%2F5kyw%2B0koDlzLeielT68Pm4%2FQnU5OWx6EHxRBjHyxO8Z5mfy6LEFt64s5oN9A06vadu5e%2BwqWIQduck74zPgHjNMavLiiiFf%2FDeH%2BOCd693SY2uMCoAn8CleRg%2BWvyIVW76HL&X-Amz-Signature=a8e86de76142b8994299898bd0c272c5b64d8ce215c29fc28a5dca893457da44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWLPQAV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnETrhlvOAVuhUTtXGj7Uu2XozKNu95c8mCms8nIdpiQIgHMb5I4%2B2r%2Fx8trspL7IvuFCb%2BzMuRLa1kTrpmz8enusqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6xjfrpXZ6kiuF2byrcA3OgQJJP%2BK7cSJOlZ8KtD73%2FhOx4IXxtDIZsePIiK967Z0P8BkA3qs%2Bkpg0YenvPpLnO0YduoUUXY54lExZMPjsLsnfpCaiscKCIlXGdonLwk3WAlUefaV6RS9RYLJWukpUJXrb6jgnDyJyfGfsqTzr65D8NrTRNcLgcfb6u9eT97j0RfgzT2XtaCVU8g3lSPk0WKjaSJ4E3oYZquoOoUmVQjxOHLawVLp4pLQwibDLfOQg%2Fkhp9LRNAOBgVPlD05sPNmpG0uDbNHUBR7tzP8avY7z2vf8a2RsoHRY5MTwGxyAQ1ZuEAFzjMpa%2BnDh3m2LN1x7jxFI%2BqI5JGrBZE%2B%2BFgJe9NVdoaZedEnWuQbTnZRzhyRFbt0usTwvm7R%2FCA%2BC43GKm7gilY5cvLjvleFBC338a2tf56l%2B%2BxUIfSd5yvu2LWOmPeANTKisXkRNzs3gDgBIp7do6d4%2BNLYJdmVC%2BqOoau4aWhdxk7i7ku%2BAvoZr8IaUnAcpR6GnIFTCECBKrz10fwze61PEGkkKX5AR8ubxOqR0dcjGHYOegtWdltYtjfEMm5xIdn2U80fDTdRyb1vpMQ0mNm%2FTvnvxlPkH4E44W%2FdE5qVG4DYfKGkjgYqe%2FBfwRXy5wzqDZjMLqKrb0GOqUBk%2FeUdwW3r7HUnI%2FC%2FkUaI1p6qWjHcJ%2FDeroe1I%2BPvwdi25ElTaktNvfph4QonCsSiMyRQaLLNB9nNnviiTn7Gwi%2F5kyw%2B0koDlzLeielT68Pm4%2FQnU5OWx6EHxRBjHyxO8Z5mfy6LEFt64s5oN9A06vadu5e%2BwqWIQduck74zPgHjNMavLiiiFf%2FDeH%2BOCd693SY2uMCoAn8CleRg%2BWvyIVW76HL&X-Amz-Signature=5030277d86ff49a6eedf142921bf71d3248fe023f5f14f5704e50c2dd30e217a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWLPQAV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnETrhlvOAVuhUTtXGj7Uu2XozKNu95c8mCms8nIdpiQIgHMb5I4%2B2r%2Fx8trspL7IvuFCb%2BzMuRLa1kTrpmz8enusqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6xjfrpXZ6kiuF2byrcA3OgQJJP%2BK7cSJOlZ8KtD73%2FhOx4IXxtDIZsePIiK967Z0P8BkA3qs%2Bkpg0YenvPpLnO0YduoUUXY54lExZMPjsLsnfpCaiscKCIlXGdonLwk3WAlUefaV6RS9RYLJWukpUJXrb6jgnDyJyfGfsqTzr65D8NrTRNcLgcfb6u9eT97j0RfgzT2XtaCVU8g3lSPk0WKjaSJ4E3oYZquoOoUmVQjxOHLawVLp4pLQwibDLfOQg%2Fkhp9LRNAOBgVPlD05sPNmpG0uDbNHUBR7tzP8avY7z2vf8a2RsoHRY5MTwGxyAQ1ZuEAFzjMpa%2BnDh3m2LN1x7jxFI%2BqI5JGrBZE%2B%2BFgJe9NVdoaZedEnWuQbTnZRzhyRFbt0usTwvm7R%2FCA%2BC43GKm7gilY5cvLjvleFBC338a2tf56l%2B%2BxUIfSd5yvu2LWOmPeANTKisXkRNzs3gDgBIp7do6d4%2BNLYJdmVC%2BqOoau4aWhdxk7i7ku%2BAvoZr8IaUnAcpR6GnIFTCECBKrz10fwze61PEGkkKX5AR8ubxOqR0dcjGHYOegtWdltYtjfEMm5xIdn2U80fDTdRyb1vpMQ0mNm%2FTvnvxlPkH4E44W%2FdE5qVG4DYfKGkjgYqe%2FBfwRXy5wzqDZjMLqKrb0GOqUBk%2FeUdwW3r7HUnI%2FC%2FkUaI1p6qWjHcJ%2FDeroe1I%2BPvwdi25ElTaktNvfph4QonCsSiMyRQaLLNB9nNnviiTn7Gwi%2F5kyw%2B0koDlzLeielT68Pm4%2FQnU5OWx6EHxRBjHyxO8Z5mfy6LEFt64s5oN9A06vadu5e%2BwqWIQduck74zPgHjNMavLiiiFf%2FDeH%2BOCd693SY2uMCoAn8CleRg%2BWvyIVW76HL&X-Amz-Signature=8e550f70c304d4ad17bea1a530f7cb8fa503d5fcddf63baa2e79efeb6c6d56a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWLPQAV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnETrhlvOAVuhUTtXGj7Uu2XozKNu95c8mCms8nIdpiQIgHMb5I4%2B2r%2Fx8trspL7IvuFCb%2BzMuRLa1kTrpmz8enusqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6xjfrpXZ6kiuF2byrcA3OgQJJP%2BK7cSJOlZ8KtD73%2FhOx4IXxtDIZsePIiK967Z0P8BkA3qs%2Bkpg0YenvPpLnO0YduoUUXY54lExZMPjsLsnfpCaiscKCIlXGdonLwk3WAlUefaV6RS9RYLJWukpUJXrb6jgnDyJyfGfsqTzr65D8NrTRNcLgcfb6u9eT97j0RfgzT2XtaCVU8g3lSPk0WKjaSJ4E3oYZquoOoUmVQjxOHLawVLp4pLQwibDLfOQg%2Fkhp9LRNAOBgVPlD05sPNmpG0uDbNHUBR7tzP8avY7z2vf8a2RsoHRY5MTwGxyAQ1ZuEAFzjMpa%2BnDh3m2LN1x7jxFI%2BqI5JGrBZE%2B%2BFgJe9NVdoaZedEnWuQbTnZRzhyRFbt0usTwvm7R%2FCA%2BC43GKm7gilY5cvLjvleFBC338a2tf56l%2B%2BxUIfSd5yvu2LWOmPeANTKisXkRNzs3gDgBIp7do6d4%2BNLYJdmVC%2BqOoau4aWhdxk7i7ku%2BAvoZr8IaUnAcpR6GnIFTCECBKrz10fwze61PEGkkKX5AR8ubxOqR0dcjGHYOegtWdltYtjfEMm5xIdn2U80fDTdRyb1vpMQ0mNm%2FTvnvxlPkH4E44W%2FdE5qVG4DYfKGkjgYqe%2FBfwRXy5wzqDZjMLqKrb0GOqUBk%2FeUdwW3r7HUnI%2FC%2FkUaI1p6qWjHcJ%2FDeroe1I%2BPvwdi25ElTaktNvfph4QonCsSiMyRQaLLNB9nNnviiTn7Gwi%2F5kyw%2B0koDlzLeielT68Pm4%2FQnU5OWx6EHxRBjHyxO8Z5mfy6LEFt64s5oN9A06vadu5e%2BwqWIQduck74zPgHjNMavLiiiFf%2FDeH%2BOCd693SY2uMCoAn8CleRg%2BWvyIVW76HL&X-Amz-Signature=e0238c180bdd72539b67b6e72dd6342858121b7a9923a25f2205fd7eead2a1f8&X-Amz-SignedHeaders=host&x-id=GetObject)
