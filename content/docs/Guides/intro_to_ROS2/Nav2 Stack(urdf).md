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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKDLTHS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTw0DMHMzHMww2w0U5A7MTJ24ryEJ6FDPZxxAWy67ntAiEAt6Ugwcj4AxmjwUi9MFWfskT0Mz6gNCgsTe0E8BqQQkoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDzMrbKj4QH6LWayEircA2WF2%2FguPUHf0sfTZIzVqiWpR5LLV94vg1Pbf7wnwA9fhblBwnsQaAng8TgYJndDmXZjUyc%2FJzsJHTBHPSrfy%2FvG4Cf4FE7AC4qCdcVTPPc5wXrEkjDsUbPoH1JQHFgq%2F4PPHaTC4MHG3swJjwnogbJ64orFSguxsDWOzVd8lCCh91VQInIqKUu50%2BEaWRlqkyWI6TsKi4tNBTbU%2FV7O5Tt4znqTVtF8TruDh63pXHYcfK2SDUH8GR9cmsVkyzde0iYUYS%2BBu%2FZzR6mEvSlP3jbJiBCGkdz8QEOoziFOstr2rKpARmtj09J46p3rzB5rSdCXtoRnhsicEwhahlowqy0ddK%2FUD%2F%2F%2FJiOVyTcsuexWKHfQHvejfijK4nb0jZNbxO9ZBGXAwi4o3LlwZEpg2VlZeXF8Qki4%2FZbQIKG2KGWwYNEKBNfFzsvhzGQOYMOTY%2FUOEO0jSCzRmH5V3f3h2geErZEvtB6TtRbfEkz9sYZk9JhRpXbnZqUuRvjP8Ashr8Q0Fwz9fl03kG3fpqBCBo4tOad%2Fxgw9r3SYge0%2BhsW3CSywk94YZIxSDRDy1eTdWZGqgChaDGJ1Ya%2B6n%2Byqqyqxtfj55KRypV39VZQKpdzNABXvr%2FKFVhjC5pF4MOqx1b4GOqUBkLW0LJpkBhreG48CVKdjcNnyYtDJlyGfoqv%2Bexd%2BvoxGgPwofkXILgkhFxWvoXCveaI%2BWIVT%2BvFCHjCj0lEgc0zJRsq9yLOwXNQL59hcKc9wjoB5fKGyPt6EyW1d16qsznM77micajG5tGulzCwpoQ3piz5Rhbe1cXOFn1NY86GEGio1CbHYcj8zuujPRt9uU0OlHPNHnEVJobgwghfBvc2QA1HH&X-Amz-Signature=b5c0ebb4e2ae6716fea2f03a663fe2e00afe03db906bc38c65900801a1d74e78&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKDLTHS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTw0DMHMzHMww2w0U5A7MTJ24ryEJ6FDPZxxAWy67ntAiEAt6Ugwcj4AxmjwUi9MFWfskT0Mz6gNCgsTe0E8BqQQkoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDzMrbKj4QH6LWayEircA2WF2%2FguPUHf0sfTZIzVqiWpR5LLV94vg1Pbf7wnwA9fhblBwnsQaAng8TgYJndDmXZjUyc%2FJzsJHTBHPSrfy%2FvG4Cf4FE7AC4qCdcVTPPc5wXrEkjDsUbPoH1JQHFgq%2F4PPHaTC4MHG3swJjwnogbJ64orFSguxsDWOzVd8lCCh91VQInIqKUu50%2BEaWRlqkyWI6TsKi4tNBTbU%2FV7O5Tt4znqTVtF8TruDh63pXHYcfK2SDUH8GR9cmsVkyzde0iYUYS%2BBu%2FZzR6mEvSlP3jbJiBCGkdz8QEOoziFOstr2rKpARmtj09J46p3rzB5rSdCXtoRnhsicEwhahlowqy0ddK%2FUD%2F%2F%2FJiOVyTcsuexWKHfQHvejfijK4nb0jZNbxO9ZBGXAwi4o3LlwZEpg2VlZeXF8Qki4%2FZbQIKG2KGWwYNEKBNfFzsvhzGQOYMOTY%2FUOEO0jSCzRmH5V3f3h2geErZEvtB6TtRbfEkz9sYZk9JhRpXbnZqUuRvjP8Ashr8Q0Fwz9fl03kG3fpqBCBo4tOad%2Fxgw9r3SYge0%2BhsW3CSywk94YZIxSDRDy1eTdWZGqgChaDGJ1Ya%2B6n%2Byqqyqxtfj55KRypV39VZQKpdzNABXvr%2FKFVhjC5pF4MOqx1b4GOqUBkLW0LJpkBhreG48CVKdjcNnyYtDJlyGfoqv%2Bexd%2BvoxGgPwofkXILgkhFxWvoXCveaI%2BWIVT%2BvFCHjCj0lEgc0zJRsq9yLOwXNQL59hcKc9wjoB5fKGyPt6EyW1d16qsznM77micajG5tGulzCwpoQ3piz5Rhbe1cXOFn1NY86GEGio1CbHYcj8zuujPRt9uU0OlHPNHnEVJobgwghfBvc2QA1HH&X-Amz-Signature=0fbcc0d36966f457d19cdfa5e72b8b8fc8ee5df07f001c6d5f9218afa966719d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKDLTHS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTw0DMHMzHMww2w0U5A7MTJ24ryEJ6FDPZxxAWy67ntAiEAt6Ugwcj4AxmjwUi9MFWfskT0Mz6gNCgsTe0E8BqQQkoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDzMrbKj4QH6LWayEircA2WF2%2FguPUHf0sfTZIzVqiWpR5LLV94vg1Pbf7wnwA9fhblBwnsQaAng8TgYJndDmXZjUyc%2FJzsJHTBHPSrfy%2FvG4Cf4FE7AC4qCdcVTPPc5wXrEkjDsUbPoH1JQHFgq%2F4PPHaTC4MHG3swJjwnogbJ64orFSguxsDWOzVd8lCCh91VQInIqKUu50%2BEaWRlqkyWI6TsKi4tNBTbU%2FV7O5Tt4znqTVtF8TruDh63pXHYcfK2SDUH8GR9cmsVkyzde0iYUYS%2BBu%2FZzR6mEvSlP3jbJiBCGkdz8QEOoziFOstr2rKpARmtj09J46p3rzB5rSdCXtoRnhsicEwhahlowqy0ddK%2FUD%2F%2F%2FJiOVyTcsuexWKHfQHvejfijK4nb0jZNbxO9ZBGXAwi4o3LlwZEpg2VlZeXF8Qki4%2FZbQIKG2KGWwYNEKBNfFzsvhzGQOYMOTY%2FUOEO0jSCzRmH5V3f3h2geErZEvtB6TtRbfEkz9sYZk9JhRpXbnZqUuRvjP8Ashr8Q0Fwz9fl03kG3fpqBCBo4tOad%2Fxgw9r3SYge0%2BhsW3CSywk94YZIxSDRDy1eTdWZGqgChaDGJ1Ya%2B6n%2Byqqyqxtfj55KRypV39VZQKpdzNABXvr%2FKFVhjC5pF4MOqx1b4GOqUBkLW0LJpkBhreG48CVKdjcNnyYtDJlyGfoqv%2Bexd%2BvoxGgPwofkXILgkhFxWvoXCveaI%2BWIVT%2BvFCHjCj0lEgc0zJRsq9yLOwXNQL59hcKc9wjoB5fKGyPt6EyW1d16qsznM77micajG5tGulzCwpoQ3piz5Rhbe1cXOFn1NY86GEGio1CbHYcj8zuujPRt9uU0OlHPNHnEVJobgwghfBvc2QA1HH&X-Amz-Signature=4ec0a1bdea02059dc29bedb45b72af8c51abe068ccf807446eb2121e538a464c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKDLTHS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTw0DMHMzHMww2w0U5A7MTJ24ryEJ6FDPZxxAWy67ntAiEAt6Ugwcj4AxmjwUi9MFWfskT0Mz6gNCgsTe0E8BqQQkoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDzMrbKj4QH6LWayEircA2WF2%2FguPUHf0sfTZIzVqiWpR5LLV94vg1Pbf7wnwA9fhblBwnsQaAng8TgYJndDmXZjUyc%2FJzsJHTBHPSrfy%2FvG4Cf4FE7AC4qCdcVTPPc5wXrEkjDsUbPoH1JQHFgq%2F4PPHaTC4MHG3swJjwnogbJ64orFSguxsDWOzVd8lCCh91VQInIqKUu50%2BEaWRlqkyWI6TsKi4tNBTbU%2FV7O5Tt4znqTVtF8TruDh63pXHYcfK2SDUH8GR9cmsVkyzde0iYUYS%2BBu%2FZzR6mEvSlP3jbJiBCGkdz8QEOoziFOstr2rKpARmtj09J46p3rzB5rSdCXtoRnhsicEwhahlowqy0ddK%2FUD%2F%2F%2FJiOVyTcsuexWKHfQHvejfijK4nb0jZNbxO9ZBGXAwi4o3LlwZEpg2VlZeXF8Qki4%2FZbQIKG2KGWwYNEKBNfFzsvhzGQOYMOTY%2FUOEO0jSCzRmH5V3f3h2geErZEvtB6TtRbfEkz9sYZk9JhRpXbnZqUuRvjP8Ashr8Q0Fwz9fl03kG3fpqBCBo4tOad%2Fxgw9r3SYge0%2BhsW3CSywk94YZIxSDRDy1eTdWZGqgChaDGJ1Ya%2B6n%2Byqqyqxtfj55KRypV39VZQKpdzNABXvr%2FKFVhjC5pF4MOqx1b4GOqUBkLW0LJpkBhreG48CVKdjcNnyYtDJlyGfoqv%2Bexd%2BvoxGgPwofkXILgkhFxWvoXCveaI%2BWIVT%2BvFCHjCj0lEgc0zJRsq9yLOwXNQL59hcKc9wjoB5fKGyPt6EyW1d16qsznM77micajG5tGulzCwpoQ3piz5Rhbe1cXOFn1NY86GEGio1CbHYcj8zuujPRt9uU0OlHPNHnEVJobgwghfBvc2QA1HH&X-Amz-Signature=61048f2a8c5ff5cc69ad7f3bb6def3b7a07d6f18f5168dbabe8c5d8ce7397f03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKDLTHS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTw0DMHMzHMww2w0U5A7MTJ24ryEJ6FDPZxxAWy67ntAiEAt6Ugwcj4AxmjwUi9MFWfskT0Mz6gNCgsTe0E8BqQQkoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDzMrbKj4QH6LWayEircA2WF2%2FguPUHf0sfTZIzVqiWpR5LLV94vg1Pbf7wnwA9fhblBwnsQaAng8TgYJndDmXZjUyc%2FJzsJHTBHPSrfy%2FvG4Cf4FE7AC4qCdcVTPPc5wXrEkjDsUbPoH1JQHFgq%2F4PPHaTC4MHG3swJjwnogbJ64orFSguxsDWOzVd8lCCh91VQInIqKUu50%2BEaWRlqkyWI6TsKi4tNBTbU%2FV7O5Tt4znqTVtF8TruDh63pXHYcfK2SDUH8GR9cmsVkyzde0iYUYS%2BBu%2FZzR6mEvSlP3jbJiBCGkdz8QEOoziFOstr2rKpARmtj09J46p3rzB5rSdCXtoRnhsicEwhahlowqy0ddK%2FUD%2F%2F%2FJiOVyTcsuexWKHfQHvejfijK4nb0jZNbxO9ZBGXAwi4o3LlwZEpg2VlZeXF8Qki4%2FZbQIKG2KGWwYNEKBNfFzsvhzGQOYMOTY%2FUOEO0jSCzRmH5V3f3h2geErZEvtB6TtRbfEkz9sYZk9JhRpXbnZqUuRvjP8Ashr8Q0Fwz9fl03kG3fpqBCBo4tOad%2Fxgw9r3SYge0%2BhsW3CSywk94YZIxSDRDy1eTdWZGqgChaDGJ1Ya%2B6n%2Byqqyqxtfj55KRypV39VZQKpdzNABXvr%2FKFVhjC5pF4MOqx1b4GOqUBkLW0LJpkBhreG48CVKdjcNnyYtDJlyGfoqv%2Bexd%2BvoxGgPwofkXILgkhFxWvoXCveaI%2BWIVT%2BvFCHjCj0lEgc0zJRsq9yLOwXNQL59hcKc9wjoB5fKGyPt6EyW1d16qsznM77micajG5tGulzCwpoQ3piz5Rhbe1cXOFn1NY86GEGio1CbHYcj8zuujPRt9uU0OlHPNHnEVJobgwghfBvc2QA1HH&X-Amz-Signature=69b34381885a533b8d1fa440b570d94a095d252d52fa6a540a9898490af1ba9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKDLTHS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTw0DMHMzHMww2w0U5A7MTJ24ryEJ6FDPZxxAWy67ntAiEAt6Ugwcj4AxmjwUi9MFWfskT0Mz6gNCgsTe0E8BqQQkoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDzMrbKj4QH6LWayEircA2WF2%2FguPUHf0sfTZIzVqiWpR5LLV94vg1Pbf7wnwA9fhblBwnsQaAng8TgYJndDmXZjUyc%2FJzsJHTBHPSrfy%2FvG4Cf4FE7AC4qCdcVTPPc5wXrEkjDsUbPoH1JQHFgq%2F4PPHaTC4MHG3swJjwnogbJ64orFSguxsDWOzVd8lCCh91VQInIqKUu50%2BEaWRlqkyWI6TsKi4tNBTbU%2FV7O5Tt4znqTVtF8TruDh63pXHYcfK2SDUH8GR9cmsVkyzde0iYUYS%2BBu%2FZzR6mEvSlP3jbJiBCGkdz8QEOoziFOstr2rKpARmtj09J46p3rzB5rSdCXtoRnhsicEwhahlowqy0ddK%2FUD%2F%2F%2FJiOVyTcsuexWKHfQHvejfijK4nb0jZNbxO9ZBGXAwi4o3LlwZEpg2VlZeXF8Qki4%2FZbQIKG2KGWwYNEKBNfFzsvhzGQOYMOTY%2FUOEO0jSCzRmH5V3f3h2geErZEvtB6TtRbfEkz9sYZk9JhRpXbnZqUuRvjP8Ashr8Q0Fwz9fl03kG3fpqBCBo4tOad%2Fxgw9r3SYge0%2BhsW3CSywk94YZIxSDRDy1eTdWZGqgChaDGJ1Ya%2B6n%2Byqqyqxtfj55KRypV39VZQKpdzNABXvr%2FKFVhjC5pF4MOqx1b4GOqUBkLW0LJpkBhreG48CVKdjcNnyYtDJlyGfoqv%2Bexd%2BvoxGgPwofkXILgkhFxWvoXCveaI%2BWIVT%2BvFCHjCj0lEgc0zJRsq9yLOwXNQL59hcKc9wjoB5fKGyPt6EyW1d16qsznM77micajG5tGulzCwpoQ3piz5Rhbe1cXOFn1NY86GEGio1CbHYcj8zuujPRt9uU0OlHPNHnEVJobgwghfBvc2QA1HH&X-Amz-Signature=533a46be8fccf0e34161ac5a569f8d2255b72edb0d880a608fa12568061a3e8e&X-Amz-SignedHeaders=host&x-id=GetObject)
