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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=88ea165780b11520f241d68eb3143b3dfbd3a94b10db6e0801d25de19fd420c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=e8481a80f24d79b1b3928144d0e2f455f9d7b009fb8e273b48ad5d466e0e78ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=e4e7346413ef761474c4664ababe4231ff0f039c87b707bbdf3250c8867f0b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=ec107ad07af2747f6cb4d3fb2cfc1a04dd3eced7c2a58e04b9c0f93d63fdd6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=b9a57da0ee0606bbe556d08795b695617b6892d4b4fa76e9f7cad5a05395ca5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=c1946a12553a0f98fd73139c981f9fe9e944d168aa93aeecbbfc5c67ec4d456f&X-Amz-SignedHeaders=host&x-id=GetObject)
