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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN2KNMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDDLMKRwoOe7e4Yac1zzfhmXWw123SKaNl%2FVnm%2BFXh5ZwIhAJIgK%2F14thldt5EqRDwo6HVSUMhmm5vmKyjSi%2FDy44cpKv8DCBsQABoMNjM3NDIzMTgzODA1IgyPSmdDeNT4M%2FrSplsq3AN%2F0H4KTEJabtIByxFE93sqSUhfCEakdXGiX%2FLBSt2FQWsJGNwTBcWMI2%2F9%2BjaV6XED4umGNsRPmtb239EHmg%2Fw0sFAe99wOJQ%2BRGqT5eozi5XAZQ1r3TpSjSU1DAuHHrfOQByapkxEUniS4hhEmB2Dwl4Mp3OObBwF7x5H0cPHQO5JTjTbIpZkYdZHHLnDkTZRstW8pwI9HBJUBSt05HIXKSg1OGD2d0O106qOQvoPH7GIIdBxQ55WQr%2Fyo4HRKjbp6JEEz5FR1nTgAgc5XFTxUD5O9oQD9hPSq9fqHJy5sCJLRO6YfkHdBqOWn1aQlOLauSGOFsjAfZWHbY9p7R9FTz99eHnytSYWl2NlP1TzhIqrJesNxLeYoaG4suMqjcaLaBUMXkNV4FuRK5nNOK%2BpxNuO2i7Nvl54AMoXIiUNOLp5L4U7PgswfZtaaumpJSbTIGKL%2FkjNxIfe8ovsomWdNgzUQcfKmz%2BkMUpm2zzBodCPfXFXcUUJCuvI1DnvQQ%2FGBTZUXenXmGOXJSfnmClK4nNBzjKa4%2FnfKxoj5R4%2Bv217zKxSRIRkbB5GiU14xHE5Ojffl0uepfGluAGUlNDF2ZNDKDsiZbUj2RRN6UXizTqyOqKT%2FL9wefKujDDt5s%2FDBjqkAWefhqQoBktFuLm3vwYEw7DuQ4otweyUAMKpkqe4GUq4Yk3yNGAqp6oqQM0lzUgk9RfOTkMN8cfmUSb5TFaXWqjWOpKvJ7IsbfxzHWvtTU1CBBVj1uTDsmm0IzuZAYQ5IcRX4%2BP7tvNwzafUPrTUqs5zDCW3m5G%2Bqbs0FGJ04fIqodbtPePnV6l%2BRr9Amq7u3%2F6FFPOZjuzVCpHUX9YWC3Hz0Tce&X-Amz-Signature=6079a7051264eadf23739d832bf9529aa2b1cb4db6b4882591f126222f889fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN2KNMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDDLMKRwoOe7e4Yac1zzfhmXWw123SKaNl%2FVnm%2BFXh5ZwIhAJIgK%2F14thldt5EqRDwo6HVSUMhmm5vmKyjSi%2FDy44cpKv8DCBsQABoMNjM3NDIzMTgzODA1IgyPSmdDeNT4M%2FrSplsq3AN%2F0H4KTEJabtIByxFE93sqSUhfCEakdXGiX%2FLBSt2FQWsJGNwTBcWMI2%2F9%2BjaV6XED4umGNsRPmtb239EHmg%2Fw0sFAe99wOJQ%2BRGqT5eozi5XAZQ1r3TpSjSU1DAuHHrfOQByapkxEUniS4hhEmB2Dwl4Mp3OObBwF7x5H0cPHQO5JTjTbIpZkYdZHHLnDkTZRstW8pwI9HBJUBSt05HIXKSg1OGD2d0O106qOQvoPH7GIIdBxQ55WQr%2Fyo4HRKjbp6JEEz5FR1nTgAgc5XFTxUD5O9oQD9hPSq9fqHJy5sCJLRO6YfkHdBqOWn1aQlOLauSGOFsjAfZWHbY9p7R9FTz99eHnytSYWl2NlP1TzhIqrJesNxLeYoaG4suMqjcaLaBUMXkNV4FuRK5nNOK%2BpxNuO2i7Nvl54AMoXIiUNOLp5L4U7PgswfZtaaumpJSbTIGKL%2FkjNxIfe8ovsomWdNgzUQcfKmz%2BkMUpm2zzBodCPfXFXcUUJCuvI1DnvQQ%2FGBTZUXenXmGOXJSfnmClK4nNBzjKa4%2FnfKxoj5R4%2Bv217zKxSRIRkbB5GiU14xHE5Ojffl0uepfGluAGUlNDF2ZNDKDsiZbUj2RRN6UXizTqyOqKT%2FL9wefKujDDt5s%2FDBjqkAWefhqQoBktFuLm3vwYEw7DuQ4otweyUAMKpkqe4GUq4Yk3yNGAqp6oqQM0lzUgk9RfOTkMN8cfmUSb5TFaXWqjWOpKvJ7IsbfxzHWvtTU1CBBVj1uTDsmm0IzuZAYQ5IcRX4%2BP7tvNwzafUPrTUqs5zDCW3m5G%2Bqbs0FGJ04fIqodbtPePnV6l%2BRr9Amq7u3%2F6FFPOZjuzVCpHUX9YWC3Hz0Tce&X-Amz-Signature=c8f8851e870726530a3a7b7bc1bf71fa5bc95abdfbded3d57ca361261f1c6e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN2KNMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDDLMKRwoOe7e4Yac1zzfhmXWw123SKaNl%2FVnm%2BFXh5ZwIhAJIgK%2F14thldt5EqRDwo6HVSUMhmm5vmKyjSi%2FDy44cpKv8DCBsQABoMNjM3NDIzMTgzODA1IgyPSmdDeNT4M%2FrSplsq3AN%2F0H4KTEJabtIByxFE93sqSUhfCEakdXGiX%2FLBSt2FQWsJGNwTBcWMI2%2F9%2BjaV6XED4umGNsRPmtb239EHmg%2Fw0sFAe99wOJQ%2BRGqT5eozi5XAZQ1r3TpSjSU1DAuHHrfOQByapkxEUniS4hhEmB2Dwl4Mp3OObBwF7x5H0cPHQO5JTjTbIpZkYdZHHLnDkTZRstW8pwI9HBJUBSt05HIXKSg1OGD2d0O106qOQvoPH7GIIdBxQ55WQr%2Fyo4HRKjbp6JEEz5FR1nTgAgc5XFTxUD5O9oQD9hPSq9fqHJy5sCJLRO6YfkHdBqOWn1aQlOLauSGOFsjAfZWHbY9p7R9FTz99eHnytSYWl2NlP1TzhIqrJesNxLeYoaG4suMqjcaLaBUMXkNV4FuRK5nNOK%2BpxNuO2i7Nvl54AMoXIiUNOLp5L4U7PgswfZtaaumpJSbTIGKL%2FkjNxIfe8ovsomWdNgzUQcfKmz%2BkMUpm2zzBodCPfXFXcUUJCuvI1DnvQQ%2FGBTZUXenXmGOXJSfnmClK4nNBzjKa4%2FnfKxoj5R4%2Bv217zKxSRIRkbB5GiU14xHE5Ojffl0uepfGluAGUlNDF2ZNDKDsiZbUj2RRN6UXizTqyOqKT%2FL9wefKujDDt5s%2FDBjqkAWefhqQoBktFuLm3vwYEw7DuQ4otweyUAMKpkqe4GUq4Yk3yNGAqp6oqQM0lzUgk9RfOTkMN8cfmUSb5TFaXWqjWOpKvJ7IsbfxzHWvtTU1CBBVj1uTDsmm0IzuZAYQ5IcRX4%2BP7tvNwzafUPrTUqs5zDCW3m5G%2Bqbs0FGJ04fIqodbtPePnV6l%2BRr9Amq7u3%2F6FFPOZjuzVCpHUX9YWC3Hz0Tce&X-Amz-Signature=2284ad671f596a7ed2fa70695a4d46b3daa5ee0ebf162962270609e0b544b430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN2KNMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDDLMKRwoOe7e4Yac1zzfhmXWw123SKaNl%2FVnm%2BFXh5ZwIhAJIgK%2F14thldt5EqRDwo6HVSUMhmm5vmKyjSi%2FDy44cpKv8DCBsQABoMNjM3NDIzMTgzODA1IgyPSmdDeNT4M%2FrSplsq3AN%2F0H4KTEJabtIByxFE93sqSUhfCEakdXGiX%2FLBSt2FQWsJGNwTBcWMI2%2F9%2BjaV6XED4umGNsRPmtb239EHmg%2Fw0sFAe99wOJQ%2BRGqT5eozi5XAZQ1r3TpSjSU1DAuHHrfOQByapkxEUniS4hhEmB2Dwl4Mp3OObBwF7x5H0cPHQO5JTjTbIpZkYdZHHLnDkTZRstW8pwI9HBJUBSt05HIXKSg1OGD2d0O106qOQvoPH7GIIdBxQ55WQr%2Fyo4HRKjbp6JEEz5FR1nTgAgc5XFTxUD5O9oQD9hPSq9fqHJy5sCJLRO6YfkHdBqOWn1aQlOLauSGOFsjAfZWHbY9p7R9FTz99eHnytSYWl2NlP1TzhIqrJesNxLeYoaG4suMqjcaLaBUMXkNV4FuRK5nNOK%2BpxNuO2i7Nvl54AMoXIiUNOLp5L4U7PgswfZtaaumpJSbTIGKL%2FkjNxIfe8ovsomWdNgzUQcfKmz%2BkMUpm2zzBodCPfXFXcUUJCuvI1DnvQQ%2FGBTZUXenXmGOXJSfnmClK4nNBzjKa4%2FnfKxoj5R4%2Bv217zKxSRIRkbB5GiU14xHE5Ojffl0uepfGluAGUlNDF2ZNDKDsiZbUj2RRN6UXizTqyOqKT%2FL9wefKujDDt5s%2FDBjqkAWefhqQoBktFuLm3vwYEw7DuQ4otweyUAMKpkqe4GUq4Yk3yNGAqp6oqQM0lzUgk9RfOTkMN8cfmUSb5TFaXWqjWOpKvJ7IsbfxzHWvtTU1CBBVj1uTDsmm0IzuZAYQ5IcRX4%2BP7tvNwzafUPrTUqs5zDCW3m5G%2Bqbs0FGJ04fIqodbtPePnV6l%2BRr9Amq7u3%2F6FFPOZjuzVCpHUX9YWC3Hz0Tce&X-Amz-Signature=45ae56cc28a1a75f8faea0c06b4859be5f391be370c3fe8d7b46d9fef6500bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN2KNMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDDLMKRwoOe7e4Yac1zzfhmXWw123SKaNl%2FVnm%2BFXh5ZwIhAJIgK%2F14thldt5EqRDwo6HVSUMhmm5vmKyjSi%2FDy44cpKv8DCBsQABoMNjM3NDIzMTgzODA1IgyPSmdDeNT4M%2FrSplsq3AN%2F0H4KTEJabtIByxFE93sqSUhfCEakdXGiX%2FLBSt2FQWsJGNwTBcWMI2%2F9%2BjaV6XED4umGNsRPmtb239EHmg%2Fw0sFAe99wOJQ%2BRGqT5eozi5XAZQ1r3TpSjSU1DAuHHrfOQByapkxEUniS4hhEmB2Dwl4Mp3OObBwF7x5H0cPHQO5JTjTbIpZkYdZHHLnDkTZRstW8pwI9HBJUBSt05HIXKSg1OGD2d0O106qOQvoPH7GIIdBxQ55WQr%2Fyo4HRKjbp6JEEz5FR1nTgAgc5XFTxUD5O9oQD9hPSq9fqHJy5sCJLRO6YfkHdBqOWn1aQlOLauSGOFsjAfZWHbY9p7R9FTz99eHnytSYWl2NlP1TzhIqrJesNxLeYoaG4suMqjcaLaBUMXkNV4FuRK5nNOK%2BpxNuO2i7Nvl54AMoXIiUNOLp5L4U7PgswfZtaaumpJSbTIGKL%2FkjNxIfe8ovsomWdNgzUQcfKmz%2BkMUpm2zzBodCPfXFXcUUJCuvI1DnvQQ%2FGBTZUXenXmGOXJSfnmClK4nNBzjKa4%2FnfKxoj5R4%2Bv217zKxSRIRkbB5GiU14xHE5Ojffl0uepfGluAGUlNDF2ZNDKDsiZbUj2RRN6UXizTqyOqKT%2FL9wefKujDDt5s%2FDBjqkAWefhqQoBktFuLm3vwYEw7DuQ4otweyUAMKpkqe4GUq4Yk3yNGAqp6oqQM0lzUgk9RfOTkMN8cfmUSb5TFaXWqjWOpKvJ7IsbfxzHWvtTU1CBBVj1uTDsmm0IzuZAYQ5IcRX4%2BP7tvNwzafUPrTUqs5zDCW3m5G%2Bqbs0FGJ04fIqodbtPePnV6l%2BRr9Amq7u3%2F6FFPOZjuzVCpHUX9YWC3Hz0Tce&X-Amz-Signature=46604b77b6d8cc9198bf967fae700aae521817c8bd075e13059cbbb5c605a54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN2KNMB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDDLMKRwoOe7e4Yac1zzfhmXWw123SKaNl%2FVnm%2BFXh5ZwIhAJIgK%2F14thldt5EqRDwo6HVSUMhmm5vmKyjSi%2FDy44cpKv8DCBsQABoMNjM3NDIzMTgzODA1IgyPSmdDeNT4M%2FrSplsq3AN%2F0H4KTEJabtIByxFE93sqSUhfCEakdXGiX%2FLBSt2FQWsJGNwTBcWMI2%2F9%2BjaV6XED4umGNsRPmtb239EHmg%2Fw0sFAe99wOJQ%2BRGqT5eozi5XAZQ1r3TpSjSU1DAuHHrfOQByapkxEUniS4hhEmB2Dwl4Mp3OObBwF7x5H0cPHQO5JTjTbIpZkYdZHHLnDkTZRstW8pwI9HBJUBSt05HIXKSg1OGD2d0O106qOQvoPH7GIIdBxQ55WQr%2Fyo4HRKjbp6JEEz5FR1nTgAgc5XFTxUD5O9oQD9hPSq9fqHJy5sCJLRO6YfkHdBqOWn1aQlOLauSGOFsjAfZWHbY9p7R9FTz99eHnytSYWl2NlP1TzhIqrJesNxLeYoaG4suMqjcaLaBUMXkNV4FuRK5nNOK%2BpxNuO2i7Nvl54AMoXIiUNOLp5L4U7PgswfZtaaumpJSbTIGKL%2FkjNxIfe8ovsomWdNgzUQcfKmz%2BkMUpm2zzBodCPfXFXcUUJCuvI1DnvQQ%2FGBTZUXenXmGOXJSfnmClK4nNBzjKa4%2FnfKxoj5R4%2Bv217zKxSRIRkbB5GiU14xHE5Ojffl0uepfGluAGUlNDF2ZNDKDsiZbUj2RRN6UXizTqyOqKT%2FL9wefKujDDt5s%2FDBjqkAWefhqQoBktFuLm3vwYEw7DuQ4otweyUAMKpkqe4GUq4Yk3yNGAqp6oqQM0lzUgk9RfOTkMN8cfmUSb5TFaXWqjWOpKvJ7IsbfxzHWvtTU1CBBVj1uTDsmm0IzuZAYQ5IcRX4%2BP7tvNwzafUPrTUqs5zDCW3m5G%2Bqbs0FGJ04fIqodbtPePnV6l%2BRr9Amq7u3%2F6FFPOZjuzVCpHUX9YWC3Hz0Tce&X-Amz-Signature=65708384b50d911552eaac49eae0c1b9db3505eb504b3e7a62c45b0a82e92507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
