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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY4D66N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCck6296x0kQxUSqnUIlNcylkcV30EzQkPzJFDIQ6tpwQIhAJddy1LkZcJFW000Pr%2BQJNQbqNPBO%2FdaHeeB0nhpjAtcKv8DCG0QABoMNjM3NDIzMTgzODA1Igyd0wV9Wbrla0iD%2B2Qq3AP2LN6smXnxMQ%2BXDtrbbfk2IaOk365DyhZWCBumfcyXkSncgxH7Zt382ATuP4OCcKDHhmBa43lUGUIx8ujbMwDMK5UMVpqD6dDTZJFtj4LyTxuvNbHBOf2i9k6EtR8TDYcRdA3Xa8lyX91cHPy69GWuq3gld2SojFtwPIPeowvGcr0UlIMyAVtL%2BWgn0LnHcZeRE8J332ZA3mDGdPlvZ43jCiqUhsgBLkCVvb7Hi9gMGhBGfoJ1jtzGIkUAgvSPvOfHeSuqgEfLPVgK5uO%2FLZYf%2FZfisCTFF%2By6qEfdbxlIfaSasl%2FCh37lBy1JYO2y1YeHIAgw5gZJ2yw4FWEJeNj0Tb0EJqGnsZcZJ6SQLP6negsG3jVcEErqZd2qBkWVEeYy2wbEbOdjtv%2FkXuoh6w%2B3aHWVIwZVSENpV8lzzOGO3KC91cZTw5a%2BnHBySYHbRY%2FBCBKYk87xruBGayFwjRrml9hR1e80%2FlDqHUDlPj7Wq5QcOjPSj6UYT4bCAz%2FWKiE854XYWDmZpLeUlOUyWCAzehtcwtF7o0FPYVC2H2hMescdGqvAXHbJC%2FZDwiVIr%2F0z7ls9tSmuTaWJJOvyMQVaTRRBZBre4XKMn8Y2MMkg92XcpsfMs2ds5jJaNTCGmNrBBjqkATbmBOEoKFNge7lH%2F2wMO18rZcYZx906P%2BJrbsZ6hkm%2FiVrHlwxQcl%2FtfsxNZwSMNM0j4Vuz7rzwcsCPt6Parap6J%2FhoT87C5MOpnJXF20eY4MptngcMDJqNxhPYq8yT%2FOpu3bRmgg8%2B78BRUg73Bdyg0%2F4OkLOPmGs%2F%2FHCleGzRf81wBD8RPgRR9yCKd8nGKHKSOHaksFxbwVNQjsIFBDnwRCL%2F&X-Amz-Signature=5566039a068911bdfa3839da484668f1a02f79b6d2b53021876ec9ae4f964beb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY4D66N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCck6296x0kQxUSqnUIlNcylkcV30EzQkPzJFDIQ6tpwQIhAJddy1LkZcJFW000Pr%2BQJNQbqNPBO%2FdaHeeB0nhpjAtcKv8DCG0QABoMNjM3NDIzMTgzODA1Igyd0wV9Wbrla0iD%2B2Qq3AP2LN6smXnxMQ%2BXDtrbbfk2IaOk365DyhZWCBumfcyXkSncgxH7Zt382ATuP4OCcKDHhmBa43lUGUIx8ujbMwDMK5UMVpqD6dDTZJFtj4LyTxuvNbHBOf2i9k6EtR8TDYcRdA3Xa8lyX91cHPy69GWuq3gld2SojFtwPIPeowvGcr0UlIMyAVtL%2BWgn0LnHcZeRE8J332ZA3mDGdPlvZ43jCiqUhsgBLkCVvb7Hi9gMGhBGfoJ1jtzGIkUAgvSPvOfHeSuqgEfLPVgK5uO%2FLZYf%2FZfisCTFF%2By6qEfdbxlIfaSasl%2FCh37lBy1JYO2y1YeHIAgw5gZJ2yw4FWEJeNj0Tb0EJqGnsZcZJ6SQLP6negsG3jVcEErqZd2qBkWVEeYy2wbEbOdjtv%2FkXuoh6w%2B3aHWVIwZVSENpV8lzzOGO3KC91cZTw5a%2BnHBySYHbRY%2FBCBKYk87xruBGayFwjRrml9hR1e80%2FlDqHUDlPj7Wq5QcOjPSj6UYT4bCAz%2FWKiE854XYWDmZpLeUlOUyWCAzehtcwtF7o0FPYVC2H2hMescdGqvAXHbJC%2FZDwiVIr%2F0z7ls9tSmuTaWJJOvyMQVaTRRBZBre4XKMn8Y2MMkg92XcpsfMs2ds5jJaNTCGmNrBBjqkATbmBOEoKFNge7lH%2F2wMO18rZcYZx906P%2BJrbsZ6hkm%2FiVrHlwxQcl%2FtfsxNZwSMNM0j4Vuz7rzwcsCPt6Parap6J%2FhoT87C5MOpnJXF20eY4MptngcMDJqNxhPYq8yT%2FOpu3bRmgg8%2B78BRUg73Bdyg0%2F4OkLOPmGs%2F%2FHCleGzRf81wBD8RPgRR9yCKd8nGKHKSOHaksFxbwVNQjsIFBDnwRCL%2F&X-Amz-Signature=b34e7123b46689741219772028210ecb783df675cb0b74a88504fb8cd33dbcc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY4D66N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCck6296x0kQxUSqnUIlNcylkcV30EzQkPzJFDIQ6tpwQIhAJddy1LkZcJFW000Pr%2BQJNQbqNPBO%2FdaHeeB0nhpjAtcKv8DCG0QABoMNjM3NDIzMTgzODA1Igyd0wV9Wbrla0iD%2B2Qq3AP2LN6smXnxMQ%2BXDtrbbfk2IaOk365DyhZWCBumfcyXkSncgxH7Zt382ATuP4OCcKDHhmBa43lUGUIx8ujbMwDMK5UMVpqD6dDTZJFtj4LyTxuvNbHBOf2i9k6EtR8TDYcRdA3Xa8lyX91cHPy69GWuq3gld2SojFtwPIPeowvGcr0UlIMyAVtL%2BWgn0LnHcZeRE8J332ZA3mDGdPlvZ43jCiqUhsgBLkCVvb7Hi9gMGhBGfoJ1jtzGIkUAgvSPvOfHeSuqgEfLPVgK5uO%2FLZYf%2FZfisCTFF%2By6qEfdbxlIfaSasl%2FCh37lBy1JYO2y1YeHIAgw5gZJ2yw4FWEJeNj0Tb0EJqGnsZcZJ6SQLP6negsG3jVcEErqZd2qBkWVEeYy2wbEbOdjtv%2FkXuoh6w%2B3aHWVIwZVSENpV8lzzOGO3KC91cZTw5a%2BnHBySYHbRY%2FBCBKYk87xruBGayFwjRrml9hR1e80%2FlDqHUDlPj7Wq5QcOjPSj6UYT4bCAz%2FWKiE854XYWDmZpLeUlOUyWCAzehtcwtF7o0FPYVC2H2hMescdGqvAXHbJC%2FZDwiVIr%2F0z7ls9tSmuTaWJJOvyMQVaTRRBZBre4XKMn8Y2MMkg92XcpsfMs2ds5jJaNTCGmNrBBjqkATbmBOEoKFNge7lH%2F2wMO18rZcYZx906P%2BJrbsZ6hkm%2FiVrHlwxQcl%2FtfsxNZwSMNM0j4Vuz7rzwcsCPt6Parap6J%2FhoT87C5MOpnJXF20eY4MptngcMDJqNxhPYq8yT%2FOpu3bRmgg8%2B78BRUg73Bdyg0%2F4OkLOPmGs%2F%2FHCleGzRf81wBD8RPgRR9yCKd8nGKHKSOHaksFxbwVNQjsIFBDnwRCL%2F&X-Amz-Signature=7ab4107eba9e6b8c588497f820b7935c4b945ff9f505455533bf045b27159c80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY4D66N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCck6296x0kQxUSqnUIlNcylkcV30EzQkPzJFDIQ6tpwQIhAJddy1LkZcJFW000Pr%2BQJNQbqNPBO%2FdaHeeB0nhpjAtcKv8DCG0QABoMNjM3NDIzMTgzODA1Igyd0wV9Wbrla0iD%2B2Qq3AP2LN6smXnxMQ%2BXDtrbbfk2IaOk365DyhZWCBumfcyXkSncgxH7Zt382ATuP4OCcKDHhmBa43lUGUIx8ujbMwDMK5UMVpqD6dDTZJFtj4LyTxuvNbHBOf2i9k6EtR8TDYcRdA3Xa8lyX91cHPy69GWuq3gld2SojFtwPIPeowvGcr0UlIMyAVtL%2BWgn0LnHcZeRE8J332ZA3mDGdPlvZ43jCiqUhsgBLkCVvb7Hi9gMGhBGfoJ1jtzGIkUAgvSPvOfHeSuqgEfLPVgK5uO%2FLZYf%2FZfisCTFF%2By6qEfdbxlIfaSasl%2FCh37lBy1JYO2y1YeHIAgw5gZJ2yw4FWEJeNj0Tb0EJqGnsZcZJ6SQLP6negsG3jVcEErqZd2qBkWVEeYy2wbEbOdjtv%2FkXuoh6w%2B3aHWVIwZVSENpV8lzzOGO3KC91cZTw5a%2BnHBySYHbRY%2FBCBKYk87xruBGayFwjRrml9hR1e80%2FlDqHUDlPj7Wq5QcOjPSj6UYT4bCAz%2FWKiE854XYWDmZpLeUlOUyWCAzehtcwtF7o0FPYVC2H2hMescdGqvAXHbJC%2FZDwiVIr%2F0z7ls9tSmuTaWJJOvyMQVaTRRBZBre4XKMn8Y2MMkg92XcpsfMs2ds5jJaNTCGmNrBBjqkATbmBOEoKFNge7lH%2F2wMO18rZcYZx906P%2BJrbsZ6hkm%2FiVrHlwxQcl%2FtfsxNZwSMNM0j4Vuz7rzwcsCPt6Parap6J%2FhoT87C5MOpnJXF20eY4MptngcMDJqNxhPYq8yT%2FOpu3bRmgg8%2B78BRUg73Bdyg0%2F4OkLOPmGs%2F%2FHCleGzRf81wBD8RPgRR9yCKd8nGKHKSOHaksFxbwVNQjsIFBDnwRCL%2F&X-Amz-Signature=79f16714545f8873dabbe54ad14e0afca4f247770a83120d03d443d5c6b4a23b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY4D66N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCck6296x0kQxUSqnUIlNcylkcV30EzQkPzJFDIQ6tpwQIhAJddy1LkZcJFW000Pr%2BQJNQbqNPBO%2FdaHeeB0nhpjAtcKv8DCG0QABoMNjM3NDIzMTgzODA1Igyd0wV9Wbrla0iD%2B2Qq3AP2LN6smXnxMQ%2BXDtrbbfk2IaOk365DyhZWCBumfcyXkSncgxH7Zt382ATuP4OCcKDHhmBa43lUGUIx8ujbMwDMK5UMVpqD6dDTZJFtj4LyTxuvNbHBOf2i9k6EtR8TDYcRdA3Xa8lyX91cHPy69GWuq3gld2SojFtwPIPeowvGcr0UlIMyAVtL%2BWgn0LnHcZeRE8J332ZA3mDGdPlvZ43jCiqUhsgBLkCVvb7Hi9gMGhBGfoJ1jtzGIkUAgvSPvOfHeSuqgEfLPVgK5uO%2FLZYf%2FZfisCTFF%2By6qEfdbxlIfaSasl%2FCh37lBy1JYO2y1YeHIAgw5gZJ2yw4FWEJeNj0Tb0EJqGnsZcZJ6SQLP6negsG3jVcEErqZd2qBkWVEeYy2wbEbOdjtv%2FkXuoh6w%2B3aHWVIwZVSENpV8lzzOGO3KC91cZTw5a%2BnHBySYHbRY%2FBCBKYk87xruBGayFwjRrml9hR1e80%2FlDqHUDlPj7Wq5QcOjPSj6UYT4bCAz%2FWKiE854XYWDmZpLeUlOUyWCAzehtcwtF7o0FPYVC2H2hMescdGqvAXHbJC%2FZDwiVIr%2F0z7ls9tSmuTaWJJOvyMQVaTRRBZBre4XKMn8Y2MMkg92XcpsfMs2ds5jJaNTCGmNrBBjqkATbmBOEoKFNge7lH%2F2wMO18rZcYZx906P%2BJrbsZ6hkm%2FiVrHlwxQcl%2FtfsxNZwSMNM0j4Vuz7rzwcsCPt6Parap6J%2FhoT87C5MOpnJXF20eY4MptngcMDJqNxhPYq8yT%2FOpu3bRmgg8%2B78BRUg73Bdyg0%2F4OkLOPmGs%2F%2FHCleGzRf81wBD8RPgRR9yCKd8nGKHKSOHaksFxbwVNQjsIFBDnwRCL%2F&X-Amz-Signature=87722e0b484ebf176a347cc5a1002dfdf3b60e2c32e7db99ff2a20645ccd80d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY4D66N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCck6296x0kQxUSqnUIlNcylkcV30EzQkPzJFDIQ6tpwQIhAJddy1LkZcJFW000Pr%2BQJNQbqNPBO%2FdaHeeB0nhpjAtcKv8DCG0QABoMNjM3NDIzMTgzODA1Igyd0wV9Wbrla0iD%2B2Qq3AP2LN6smXnxMQ%2BXDtrbbfk2IaOk365DyhZWCBumfcyXkSncgxH7Zt382ATuP4OCcKDHhmBa43lUGUIx8ujbMwDMK5UMVpqD6dDTZJFtj4LyTxuvNbHBOf2i9k6EtR8TDYcRdA3Xa8lyX91cHPy69GWuq3gld2SojFtwPIPeowvGcr0UlIMyAVtL%2BWgn0LnHcZeRE8J332ZA3mDGdPlvZ43jCiqUhsgBLkCVvb7Hi9gMGhBGfoJ1jtzGIkUAgvSPvOfHeSuqgEfLPVgK5uO%2FLZYf%2FZfisCTFF%2By6qEfdbxlIfaSasl%2FCh37lBy1JYO2y1YeHIAgw5gZJ2yw4FWEJeNj0Tb0EJqGnsZcZJ6SQLP6negsG3jVcEErqZd2qBkWVEeYy2wbEbOdjtv%2FkXuoh6w%2B3aHWVIwZVSENpV8lzzOGO3KC91cZTw5a%2BnHBySYHbRY%2FBCBKYk87xruBGayFwjRrml9hR1e80%2FlDqHUDlPj7Wq5QcOjPSj6UYT4bCAz%2FWKiE854XYWDmZpLeUlOUyWCAzehtcwtF7o0FPYVC2H2hMescdGqvAXHbJC%2FZDwiVIr%2F0z7ls9tSmuTaWJJOvyMQVaTRRBZBre4XKMn8Y2MMkg92XcpsfMs2ds5jJaNTCGmNrBBjqkATbmBOEoKFNge7lH%2F2wMO18rZcYZx906P%2BJrbsZ6hkm%2FiVrHlwxQcl%2FtfsxNZwSMNM0j4Vuz7rzwcsCPt6Parap6J%2FhoT87C5MOpnJXF20eY4MptngcMDJqNxhPYq8yT%2FOpu3bRmgg8%2B78BRUg73Bdyg0%2F4OkLOPmGs%2F%2FHCleGzRf81wBD8RPgRR9yCKd8nGKHKSOHaksFxbwVNQjsIFBDnwRCL%2F&X-Amz-Signature=4dd927f4d02bbcb777c601dc65564a9283ef814dcf8064adac289946c2fa7f3a&X-Amz-SignedHeaders=host&x-id=GetObject)
