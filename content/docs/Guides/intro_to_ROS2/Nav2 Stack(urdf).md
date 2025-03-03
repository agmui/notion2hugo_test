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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRAL35%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqqokmmOapHKkhsNltNf8R3WqDzMjXaoES%2BavZgLXc2AiEA5Sfu4Lli0x3mMzAfag6x34o4FV6b9KCONCXCNA5MpMYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvODI%2Fw3P0ELJPcRCrcA93MgRytCWuhAvx5n8asZ6hq7Nq8Hfz%2F6wUq1mjs9oYNn%2BqVe9hU2jb4X5iEfh1dttxKxgz5aJ9nDKI%2FAVYNVdVWRQM1sUA983gVfY9V%2FdRW18QOJM1LVWCKWKz0zT0w2XFPTTMzEaC6e4fegkPSW1FJ01rVJiiUw%2FbuueuoOJH05OayRcf2jPeBigVYBhYCsGc%2FOwP1f1bUKyAREjAgccBvjHOWBPJ77xEFvoMaZi3b341hgX%2BdhH599KgxoxusaqfSjMhk18meZHMKMi%2BnSPGf%2B%2FvBiLgkt2ASzgvi3T1DF1SBni6Zx7pe6LI9CAilzynUl7IOEykB5sl570xHD8BBWe8JJv%2FeenTZuk5yaAYpCp45HprNlUbJwJxeKebhbhbVfST14l45jGdc10aW%2F3OrlUv8LLKPE0BlPj5PDXcW3VhXqoNhBbAub6nLo92cFws8WlKrZ2TnNsI6W8NfMdxzxloiZUqUY58bdnYZi2c9i95CIidb%2B3ftvn8ccnp2BfYIzA9I1sjMkP%2BHM4hGsm9Zl6pEc78UQk4p8u2%2BkgAXIliVN1VDdiC3mZAuIcbpq%2FPEg8gC0%2F6VOLy2XHZyAf22JNxt9LSEjJmkOQ1qZpt4Zkinu0F0x2qOWC2QMPm5mL4GOqUBRRTtAKlUj3Na9rQF%2BUWQPKnJ3%2B593Q3lnC9ZuyfAs3DJK7A5I6FFjEySCVzvDevEkHzvAbatDV9p%2FnVIU4fVzzI%2FiM8oiNS0PN0x5qYOfXIJeM8denuZWVMd0OyNTviiGlKnQJRjXUOrVCkto7hHry8IIc4rijM1TypXp7%2BkL7n5ZuoA1pwDF71V%2FlnKASNFZmtNUnrHyVofyfsm5Jw9GC%2FQE%2BJi&X-Amz-Signature=0fd81574d15694ba7ca6db150ea8400e6abdf9c10d7b33a0e14ffec68fcf57c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRAL35%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqqokmmOapHKkhsNltNf8R3WqDzMjXaoES%2BavZgLXc2AiEA5Sfu4Lli0x3mMzAfag6x34o4FV6b9KCONCXCNA5MpMYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvODI%2Fw3P0ELJPcRCrcA93MgRytCWuhAvx5n8asZ6hq7Nq8Hfz%2F6wUq1mjs9oYNn%2BqVe9hU2jb4X5iEfh1dttxKxgz5aJ9nDKI%2FAVYNVdVWRQM1sUA983gVfY9V%2FdRW18QOJM1LVWCKWKz0zT0w2XFPTTMzEaC6e4fegkPSW1FJ01rVJiiUw%2FbuueuoOJH05OayRcf2jPeBigVYBhYCsGc%2FOwP1f1bUKyAREjAgccBvjHOWBPJ77xEFvoMaZi3b341hgX%2BdhH599KgxoxusaqfSjMhk18meZHMKMi%2BnSPGf%2B%2FvBiLgkt2ASzgvi3T1DF1SBni6Zx7pe6LI9CAilzynUl7IOEykB5sl570xHD8BBWe8JJv%2FeenTZuk5yaAYpCp45HprNlUbJwJxeKebhbhbVfST14l45jGdc10aW%2F3OrlUv8LLKPE0BlPj5PDXcW3VhXqoNhBbAub6nLo92cFws8WlKrZ2TnNsI6W8NfMdxzxloiZUqUY58bdnYZi2c9i95CIidb%2B3ftvn8ccnp2BfYIzA9I1sjMkP%2BHM4hGsm9Zl6pEc78UQk4p8u2%2BkgAXIliVN1VDdiC3mZAuIcbpq%2FPEg8gC0%2F6VOLy2XHZyAf22JNxt9LSEjJmkOQ1qZpt4Zkinu0F0x2qOWC2QMPm5mL4GOqUBRRTtAKlUj3Na9rQF%2BUWQPKnJ3%2B593Q3lnC9ZuyfAs3DJK7A5I6FFjEySCVzvDevEkHzvAbatDV9p%2FnVIU4fVzzI%2FiM8oiNS0PN0x5qYOfXIJeM8denuZWVMd0OyNTviiGlKnQJRjXUOrVCkto7hHry8IIc4rijM1TypXp7%2BkL7n5ZuoA1pwDF71V%2FlnKASNFZmtNUnrHyVofyfsm5Jw9GC%2FQE%2BJi&X-Amz-Signature=4086c2d1299f3b351c2b62c8f8cdf34f426c708f2dbb609250362a4eba109d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRAL35%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqqokmmOapHKkhsNltNf8R3WqDzMjXaoES%2BavZgLXc2AiEA5Sfu4Lli0x3mMzAfag6x34o4FV6b9KCONCXCNA5MpMYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvODI%2Fw3P0ELJPcRCrcA93MgRytCWuhAvx5n8asZ6hq7Nq8Hfz%2F6wUq1mjs9oYNn%2BqVe9hU2jb4X5iEfh1dttxKxgz5aJ9nDKI%2FAVYNVdVWRQM1sUA983gVfY9V%2FdRW18QOJM1LVWCKWKz0zT0w2XFPTTMzEaC6e4fegkPSW1FJ01rVJiiUw%2FbuueuoOJH05OayRcf2jPeBigVYBhYCsGc%2FOwP1f1bUKyAREjAgccBvjHOWBPJ77xEFvoMaZi3b341hgX%2BdhH599KgxoxusaqfSjMhk18meZHMKMi%2BnSPGf%2B%2FvBiLgkt2ASzgvi3T1DF1SBni6Zx7pe6LI9CAilzynUl7IOEykB5sl570xHD8BBWe8JJv%2FeenTZuk5yaAYpCp45HprNlUbJwJxeKebhbhbVfST14l45jGdc10aW%2F3OrlUv8LLKPE0BlPj5PDXcW3VhXqoNhBbAub6nLo92cFws8WlKrZ2TnNsI6W8NfMdxzxloiZUqUY58bdnYZi2c9i95CIidb%2B3ftvn8ccnp2BfYIzA9I1sjMkP%2BHM4hGsm9Zl6pEc78UQk4p8u2%2BkgAXIliVN1VDdiC3mZAuIcbpq%2FPEg8gC0%2F6VOLy2XHZyAf22JNxt9LSEjJmkOQ1qZpt4Zkinu0F0x2qOWC2QMPm5mL4GOqUBRRTtAKlUj3Na9rQF%2BUWQPKnJ3%2B593Q3lnC9ZuyfAs3DJK7A5I6FFjEySCVzvDevEkHzvAbatDV9p%2FnVIU4fVzzI%2FiM8oiNS0PN0x5qYOfXIJeM8denuZWVMd0OyNTviiGlKnQJRjXUOrVCkto7hHry8IIc4rijM1TypXp7%2BkL7n5ZuoA1pwDF71V%2FlnKASNFZmtNUnrHyVofyfsm5Jw9GC%2FQE%2BJi&X-Amz-Signature=a1fc8201a6bb301c43d221e143ec3222c92649a784613e1159e6b538d7b4079d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRAL35%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqqokmmOapHKkhsNltNf8R3WqDzMjXaoES%2BavZgLXc2AiEA5Sfu4Lli0x3mMzAfag6x34o4FV6b9KCONCXCNA5MpMYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvODI%2Fw3P0ELJPcRCrcA93MgRytCWuhAvx5n8asZ6hq7Nq8Hfz%2F6wUq1mjs9oYNn%2BqVe9hU2jb4X5iEfh1dttxKxgz5aJ9nDKI%2FAVYNVdVWRQM1sUA983gVfY9V%2FdRW18QOJM1LVWCKWKz0zT0w2XFPTTMzEaC6e4fegkPSW1FJ01rVJiiUw%2FbuueuoOJH05OayRcf2jPeBigVYBhYCsGc%2FOwP1f1bUKyAREjAgccBvjHOWBPJ77xEFvoMaZi3b341hgX%2BdhH599KgxoxusaqfSjMhk18meZHMKMi%2BnSPGf%2B%2FvBiLgkt2ASzgvi3T1DF1SBni6Zx7pe6LI9CAilzynUl7IOEykB5sl570xHD8BBWe8JJv%2FeenTZuk5yaAYpCp45HprNlUbJwJxeKebhbhbVfST14l45jGdc10aW%2F3OrlUv8LLKPE0BlPj5PDXcW3VhXqoNhBbAub6nLo92cFws8WlKrZ2TnNsI6W8NfMdxzxloiZUqUY58bdnYZi2c9i95CIidb%2B3ftvn8ccnp2BfYIzA9I1sjMkP%2BHM4hGsm9Zl6pEc78UQk4p8u2%2BkgAXIliVN1VDdiC3mZAuIcbpq%2FPEg8gC0%2F6VOLy2XHZyAf22JNxt9LSEjJmkOQ1qZpt4Zkinu0F0x2qOWC2QMPm5mL4GOqUBRRTtAKlUj3Na9rQF%2BUWQPKnJ3%2B593Q3lnC9ZuyfAs3DJK7A5I6FFjEySCVzvDevEkHzvAbatDV9p%2FnVIU4fVzzI%2FiM8oiNS0PN0x5qYOfXIJeM8denuZWVMd0OyNTviiGlKnQJRjXUOrVCkto7hHry8IIc4rijM1TypXp7%2BkL7n5ZuoA1pwDF71V%2FlnKASNFZmtNUnrHyVofyfsm5Jw9GC%2FQE%2BJi&X-Amz-Signature=ce309e48b9baef5bd10defe9794344001fe199ac9eef28c2cb51b74c498c7cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRAL35%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqqokmmOapHKkhsNltNf8R3WqDzMjXaoES%2BavZgLXc2AiEA5Sfu4Lli0x3mMzAfag6x34o4FV6b9KCONCXCNA5MpMYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvODI%2Fw3P0ELJPcRCrcA93MgRytCWuhAvx5n8asZ6hq7Nq8Hfz%2F6wUq1mjs9oYNn%2BqVe9hU2jb4X5iEfh1dttxKxgz5aJ9nDKI%2FAVYNVdVWRQM1sUA983gVfY9V%2FdRW18QOJM1LVWCKWKz0zT0w2XFPTTMzEaC6e4fegkPSW1FJ01rVJiiUw%2FbuueuoOJH05OayRcf2jPeBigVYBhYCsGc%2FOwP1f1bUKyAREjAgccBvjHOWBPJ77xEFvoMaZi3b341hgX%2BdhH599KgxoxusaqfSjMhk18meZHMKMi%2BnSPGf%2B%2FvBiLgkt2ASzgvi3T1DF1SBni6Zx7pe6LI9CAilzynUl7IOEykB5sl570xHD8BBWe8JJv%2FeenTZuk5yaAYpCp45HprNlUbJwJxeKebhbhbVfST14l45jGdc10aW%2F3OrlUv8LLKPE0BlPj5PDXcW3VhXqoNhBbAub6nLo92cFws8WlKrZ2TnNsI6W8NfMdxzxloiZUqUY58bdnYZi2c9i95CIidb%2B3ftvn8ccnp2BfYIzA9I1sjMkP%2BHM4hGsm9Zl6pEc78UQk4p8u2%2BkgAXIliVN1VDdiC3mZAuIcbpq%2FPEg8gC0%2F6VOLy2XHZyAf22JNxt9LSEjJmkOQ1qZpt4Zkinu0F0x2qOWC2QMPm5mL4GOqUBRRTtAKlUj3Na9rQF%2BUWQPKnJ3%2B593Q3lnC9ZuyfAs3DJK7A5I6FFjEySCVzvDevEkHzvAbatDV9p%2FnVIU4fVzzI%2FiM8oiNS0PN0x5qYOfXIJeM8denuZWVMd0OyNTviiGlKnQJRjXUOrVCkto7hHry8IIc4rijM1TypXp7%2BkL7n5ZuoA1pwDF71V%2FlnKASNFZmtNUnrHyVofyfsm5Jw9GC%2FQE%2BJi&X-Amz-Signature=70e4d7b59732d41a52cb17ac4a9cce176edcb84021c1331d26df93fd505b989d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRAL35%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqqokmmOapHKkhsNltNf8R3WqDzMjXaoES%2BavZgLXc2AiEA5Sfu4Lli0x3mMzAfag6x34o4FV6b9KCONCXCNA5MpMYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvODI%2Fw3P0ELJPcRCrcA93MgRytCWuhAvx5n8asZ6hq7Nq8Hfz%2F6wUq1mjs9oYNn%2BqVe9hU2jb4X5iEfh1dttxKxgz5aJ9nDKI%2FAVYNVdVWRQM1sUA983gVfY9V%2FdRW18QOJM1LVWCKWKz0zT0w2XFPTTMzEaC6e4fegkPSW1FJ01rVJiiUw%2FbuueuoOJH05OayRcf2jPeBigVYBhYCsGc%2FOwP1f1bUKyAREjAgccBvjHOWBPJ77xEFvoMaZi3b341hgX%2BdhH599KgxoxusaqfSjMhk18meZHMKMi%2BnSPGf%2B%2FvBiLgkt2ASzgvi3T1DF1SBni6Zx7pe6LI9CAilzynUl7IOEykB5sl570xHD8BBWe8JJv%2FeenTZuk5yaAYpCp45HprNlUbJwJxeKebhbhbVfST14l45jGdc10aW%2F3OrlUv8LLKPE0BlPj5PDXcW3VhXqoNhBbAub6nLo92cFws8WlKrZ2TnNsI6W8NfMdxzxloiZUqUY58bdnYZi2c9i95CIidb%2B3ftvn8ccnp2BfYIzA9I1sjMkP%2BHM4hGsm9Zl6pEc78UQk4p8u2%2BkgAXIliVN1VDdiC3mZAuIcbpq%2FPEg8gC0%2F6VOLy2XHZyAf22JNxt9LSEjJmkOQ1qZpt4Zkinu0F0x2qOWC2QMPm5mL4GOqUBRRTtAKlUj3Na9rQF%2BUWQPKnJ3%2B593Q3lnC9ZuyfAs3DJK7A5I6FFjEySCVzvDevEkHzvAbatDV9p%2FnVIU4fVzzI%2FiM8oiNS0PN0x5qYOfXIJeM8denuZWVMd0OyNTviiGlKnQJRjXUOrVCkto7hHry8IIc4rijM1TypXp7%2BkL7n5ZuoA1pwDF71V%2FlnKASNFZmtNUnrHyVofyfsm5Jw9GC%2FQE%2BJi&X-Amz-Signature=f1946f6b57e61b5a886750b4af7231b02562a0b9d0f335999d375f11d9c55f2d&X-Amz-SignedHeaders=host&x-id=GetObject)
