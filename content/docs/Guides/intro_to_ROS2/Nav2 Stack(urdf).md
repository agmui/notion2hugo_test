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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHSLMUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FTmw1uZdj%2Bt%2BbnR3pCoiEM85JnD1%2FYhHRG%2Fx6d3X7AiAEmrqsKSnJddNGqanC232ZFFq7X0UNGHF15nhzZS9hWiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYcV6OI6Kwijq%2FoYKtwDg6tIYVgDth4Cg%2FkGFNpKwF8pVIy%2BXCSGmDxVoyNlhD7rDIAtVqEXQys7WKki1vucWSfHVcLOYtSHj1tsRZapx3Vb7E9ASlNfEM4q3kcoez7cCb1MyJswk%2FAupwB%2FXH7R%2FGMyrrdtH%2BiHJgqx4ZSuvUwZkUJEK7NpMn0aJPtN4LUHO0n3ZU16uu6kBAg926LcWQkTidgEqRW0d56IbkYtrTeko5dNTYUS2kyvDSHaoOmzUl4ogUZBwW8icCG7rnOchCvQWIGTL8NJlR48CoKu6740%2B1IKD9LzfapsRaFXpDU41G4VUv6Jox2e4%2BWWGwifkN%2F2LacgEsUvYlOAI9SKKjFSCVs4JrPK%2FAmOCeaBrkUni8p7d0ll65lRGLeZ0rWtTCv4J7902IV%2FV%2Fg5rendy%2FFELeXpNttT3lnHJV2vpJydPqBtLm3M%2B8YEbf%2F7%2BRLJr1TqULOQRh4z%2BCw2iFjnLdKlKN%2Fv8YlZeW5s7BoSxrUk%2FvwaX8E3H4pT7PyQTMDy6gWJjXN%2FTVPoSG36kJJKVlWhlkAOaxPHJyOX9%2FqfokXTZkpeh9Xknm8h5vNTxS8nPMQPX7FDTv8uXTtPn8Kr5IpsyUUu0GQxk1hJ9jODdIslYzd7De%2FBseaOrnUwipi6wwY6pgG8QloYq9Ao5wlD6HsJFn4WSv%2By1ne9yGScgD5vA9swRZORXjc70vHKJ8NmbVwlyrg9wRSpUB2TP3h%2BtLz6ABqMENH%2BRpaP%2BRJ%2FZdNVaPDGsqoqR7Y5llBorIfq2TQBdeYwbhuYauqDjGeTC5ybu6xM7olD3ivhZcEndrICSC0dWhGSbNouPmUYlZrMvzex6SKUN%2FEDLsKCE1bZhNnJqbWXrSi1NaL4&X-Amz-Signature=b4b62acdd270842b5d7133a7e5e51f751c6635b43e29c36cea6a78d5192a47c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHSLMUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FTmw1uZdj%2Bt%2BbnR3pCoiEM85JnD1%2FYhHRG%2Fx6d3X7AiAEmrqsKSnJddNGqanC232ZFFq7X0UNGHF15nhzZS9hWiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYcV6OI6Kwijq%2FoYKtwDg6tIYVgDth4Cg%2FkGFNpKwF8pVIy%2BXCSGmDxVoyNlhD7rDIAtVqEXQys7WKki1vucWSfHVcLOYtSHj1tsRZapx3Vb7E9ASlNfEM4q3kcoez7cCb1MyJswk%2FAupwB%2FXH7R%2FGMyrrdtH%2BiHJgqx4ZSuvUwZkUJEK7NpMn0aJPtN4LUHO0n3ZU16uu6kBAg926LcWQkTidgEqRW0d56IbkYtrTeko5dNTYUS2kyvDSHaoOmzUl4ogUZBwW8icCG7rnOchCvQWIGTL8NJlR48CoKu6740%2B1IKD9LzfapsRaFXpDU41G4VUv6Jox2e4%2BWWGwifkN%2F2LacgEsUvYlOAI9SKKjFSCVs4JrPK%2FAmOCeaBrkUni8p7d0ll65lRGLeZ0rWtTCv4J7902IV%2FV%2Fg5rendy%2FFELeXpNttT3lnHJV2vpJydPqBtLm3M%2B8YEbf%2F7%2BRLJr1TqULOQRh4z%2BCw2iFjnLdKlKN%2Fv8YlZeW5s7BoSxrUk%2FvwaX8E3H4pT7PyQTMDy6gWJjXN%2FTVPoSG36kJJKVlWhlkAOaxPHJyOX9%2FqfokXTZkpeh9Xknm8h5vNTxS8nPMQPX7FDTv8uXTtPn8Kr5IpsyUUu0GQxk1hJ9jODdIslYzd7De%2FBseaOrnUwipi6wwY6pgG8QloYq9Ao5wlD6HsJFn4WSv%2By1ne9yGScgD5vA9swRZORXjc70vHKJ8NmbVwlyrg9wRSpUB2TP3h%2BtLz6ABqMENH%2BRpaP%2BRJ%2FZdNVaPDGsqoqR7Y5llBorIfq2TQBdeYwbhuYauqDjGeTC5ybu6xM7olD3ivhZcEndrICSC0dWhGSbNouPmUYlZrMvzex6SKUN%2FEDLsKCE1bZhNnJqbWXrSi1NaL4&X-Amz-Signature=559afe595951d69c8a863d3bbb0a2af1f6eef4f5642f41595cabfddd09f69958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHSLMUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FTmw1uZdj%2Bt%2BbnR3pCoiEM85JnD1%2FYhHRG%2Fx6d3X7AiAEmrqsKSnJddNGqanC232ZFFq7X0UNGHF15nhzZS9hWiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYcV6OI6Kwijq%2FoYKtwDg6tIYVgDth4Cg%2FkGFNpKwF8pVIy%2BXCSGmDxVoyNlhD7rDIAtVqEXQys7WKki1vucWSfHVcLOYtSHj1tsRZapx3Vb7E9ASlNfEM4q3kcoez7cCb1MyJswk%2FAupwB%2FXH7R%2FGMyrrdtH%2BiHJgqx4ZSuvUwZkUJEK7NpMn0aJPtN4LUHO0n3ZU16uu6kBAg926LcWQkTidgEqRW0d56IbkYtrTeko5dNTYUS2kyvDSHaoOmzUl4ogUZBwW8icCG7rnOchCvQWIGTL8NJlR48CoKu6740%2B1IKD9LzfapsRaFXpDU41G4VUv6Jox2e4%2BWWGwifkN%2F2LacgEsUvYlOAI9SKKjFSCVs4JrPK%2FAmOCeaBrkUni8p7d0ll65lRGLeZ0rWtTCv4J7902IV%2FV%2Fg5rendy%2FFELeXpNttT3lnHJV2vpJydPqBtLm3M%2B8YEbf%2F7%2BRLJr1TqULOQRh4z%2BCw2iFjnLdKlKN%2Fv8YlZeW5s7BoSxrUk%2FvwaX8E3H4pT7PyQTMDy6gWJjXN%2FTVPoSG36kJJKVlWhlkAOaxPHJyOX9%2FqfokXTZkpeh9Xknm8h5vNTxS8nPMQPX7FDTv8uXTtPn8Kr5IpsyUUu0GQxk1hJ9jODdIslYzd7De%2FBseaOrnUwipi6wwY6pgG8QloYq9Ao5wlD6HsJFn4WSv%2By1ne9yGScgD5vA9swRZORXjc70vHKJ8NmbVwlyrg9wRSpUB2TP3h%2BtLz6ABqMENH%2BRpaP%2BRJ%2FZdNVaPDGsqoqR7Y5llBorIfq2TQBdeYwbhuYauqDjGeTC5ybu6xM7olD3ivhZcEndrICSC0dWhGSbNouPmUYlZrMvzex6SKUN%2FEDLsKCE1bZhNnJqbWXrSi1NaL4&X-Amz-Signature=36a778dba3ff480c35d038eae17deb8350feb647fda8aeb8b14a24397203e2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHSLMUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FTmw1uZdj%2Bt%2BbnR3pCoiEM85JnD1%2FYhHRG%2Fx6d3X7AiAEmrqsKSnJddNGqanC232ZFFq7X0UNGHF15nhzZS9hWiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYcV6OI6Kwijq%2FoYKtwDg6tIYVgDth4Cg%2FkGFNpKwF8pVIy%2BXCSGmDxVoyNlhD7rDIAtVqEXQys7WKki1vucWSfHVcLOYtSHj1tsRZapx3Vb7E9ASlNfEM4q3kcoez7cCb1MyJswk%2FAupwB%2FXH7R%2FGMyrrdtH%2BiHJgqx4ZSuvUwZkUJEK7NpMn0aJPtN4LUHO0n3ZU16uu6kBAg926LcWQkTidgEqRW0d56IbkYtrTeko5dNTYUS2kyvDSHaoOmzUl4ogUZBwW8icCG7rnOchCvQWIGTL8NJlR48CoKu6740%2B1IKD9LzfapsRaFXpDU41G4VUv6Jox2e4%2BWWGwifkN%2F2LacgEsUvYlOAI9SKKjFSCVs4JrPK%2FAmOCeaBrkUni8p7d0ll65lRGLeZ0rWtTCv4J7902IV%2FV%2Fg5rendy%2FFELeXpNttT3lnHJV2vpJydPqBtLm3M%2B8YEbf%2F7%2BRLJr1TqULOQRh4z%2BCw2iFjnLdKlKN%2Fv8YlZeW5s7BoSxrUk%2FvwaX8E3H4pT7PyQTMDy6gWJjXN%2FTVPoSG36kJJKVlWhlkAOaxPHJyOX9%2FqfokXTZkpeh9Xknm8h5vNTxS8nPMQPX7FDTv8uXTtPn8Kr5IpsyUUu0GQxk1hJ9jODdIslYzd7De%2FBseaOrnUwipi6wwY6pgG8QloYq9Ao5wlD6HsJFn4WSv%2By1ne9yGScgD5vA9swRZORXjc70vHKJ8NmbVwlyrg9wRSpUB2TP3h%2BtLz6ABqMENH%2BRpaP%2BRJ%2FZdNVaPDGsqoqR7Y5llBorIfq2TQBdeYwbhuYauqDjGeTC5ybu6xM7olD3ivhZcEndrICSC0dWhGSbNouPmUYlZrMvzex6SKUN%2FEDLsKCE1bZhNnJqbWXrSi1NaL4&X-Amz-Signature=50bbc42febfa95a961d6a44f61f7e639a948ed49b7a91d669cda3209f1da6676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHSLMUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FTmw1uZdj%2Bt%2BbnR3pCoiEM85JnD1%2FYhHRG%2Fx6d3X7AiAEmrqsKSnJddNGqanC232ZFFq7X0UNGHF15nhzZS9hWiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYcV6OI6Kwijq%2FoYKtwDg6tIYVgDth4Cg%2FkGFNpKwF8pVIy%2BXCSGmDxVoyNlhD7rDIAtVqEXQys7WKki1vucWSfHVcLOYtSHj1tsRZapx3Vb7E9ASlNfEM4q3kcoez7cCb1MyJswk%2FAupwB%2FXH7R%2FGMyrrdtH%2BiHJgqx4ZSuvUwZkUJEK7NpMn0aJPtN4LUHO0n3ZU16uu6kBAg926LcWQkTidgEqRW0d56IbkYtrTeko5dNTYUS2kyvDSHaoOmzUl4ogUZBwW8icCG7rnOchCvQWIGTL8NJlR48CoKu6740%2B1IKD9LzfapsRaFXpDU41G4VUv6Jox2e4%2BWWGwifkN%2F2LacgEsUvYlOAI9SKKjFSCVs4JrPK%2FAmOCeaBrkUni8p7d0ll65lRGLeZ0rWtTCv4J7902IV%2FV%2Fg5rendy%2FFELeXpNttT3lnHJV2vpJydPqBtLm3M%2B8YEbf%2F7%2BRLJr1TqULOQRh4z%2BCw2iFjnLdKlKN%2Fv8YlZeW5s7BoSxrUk%2FvwaX8E3H4pT7PyQTMDy6gWJjXN%2FTVPoSG36kJJKVlWhlkAOaxPHJyOX9%2FqfokXTZkpeh9Xknm8h5vNTxS8nPMQPX7FDTv8uXTtPn8Kr5IpsyUUu0GQxk1hJ9jODdIslYzd7De%2FBseaOrnUwipi6wwY6pgG8QloYq9Ao5wlD6HsJFn4WSv%2By1ne9yGScgD5vA9swRZORXjc70vHKJ8NmbVwlyrg9wRSpUB2TP3h%2BtLz6ABqMENH%2BRpaP%2BRJ%2FZdNVaPDGsqoqR7Y5llBorIfq2TQBdeYwbhuYauqDjGeTC5ybu6xM7olD3ivhZcEndrICSC0dWhGSbNouPmUYlZrMvzex6SKUN%2FEDLsKCE1bZhNnJqbWXrSi1NaL4&X-Amz-Signature=a385a76c76a3ed2a045ab36d9ad06a6df239d4c87a203478d3bb236624a21749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHSLMUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2%2FTmw1uZdj%2Bt%2BbnR3pCoiEM85JnD1%2FYhHRG%2Fx6d3X7AiAEmrqsKSnJddNGqanC232ZFFq7X0UNGHF15nhzZS9hWiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYcV6OI6Kwijq%2FoYKtwDg6tIYVgDth4Cg%2FkGFNpKwF8pVIy%2BXCSGmDxVoyNlhD7rDIAtVqEXQys7WKki1vucWSfHVcLOYtSHj1tsRZapx3Vb7E9ASlNfEM4q3kcoez7cCb1MyJswk%2FAupwB%2FXH7R%2FGMyrrdtH%2BiHJgqx4ZSuvUwZkUJEK7NpMn0aJPtN4LUHO0n3ZU16uu6kBAg926LcWQkTidgEqRW0d56IbkYtrTeko5dNTYUS2kyvDSHaoOmzUl4ogUZBwW8icCG7rnOchCvQWIGTL8NJlR48CoKu6740%2B1IKD9LzfapsRaFXpDU41G4VUv6Jox2e4%2BWWGwifkN%2F2LacgEsUvYlOAI9SKKjFSCVs4JrPK%2FAmOCeaBrkUni8p7d0ll65lRGLeZ0rWtTCv4J7902IV%2FV%2Fg5rendy%2FFELeXpNttT3lnHJV2vpJydPqBtLm3M%2B8YEbf%2F7%2BRLJr1TqULOQRh4z%2BCw2iFjnLdKlKN%2Fv8YlZeW5s7BoSxrUk%2FvwaX8E3H4pT7PyQTMDy6gWJjXN%2FTVPoSG36kJJKVlWhlkAOaxPHJyOX9%2FqfokXTZkpeh9Xknm8h5vNTxS8nPMQPX7FDTv8uXTtPn8Kr5IpsyUUu0GQxk1hJ9jODdIslYzd7De%2FBseaOrnUwipi6wwY6pgG8QloYq9Ao5wlD6HsJFn4WSv%2By1ne9yGScgD5vA9swRZORXjc70vHKJ8NmbVwlyrg9wRSpUB2TP3h%2BtLz6ABqMENH%2BRpaP%2BRJ%2FZdNVaPDGsqoqR7Y5llBorIfq2TQBdeYwbhuYauqDjGeTC5ybu6xM7olD3ivhZcEndrICSC0dWhGSbNouPmUYlZrMvzex6SKUN%2FEDLsKCE1bZhNnJqbWXrSi1NaL4&X-Amz-Signature=5714ac1f6d310c2e93c3353a3d23c2eb4800f616f12d44b9c87bfd8f51c9f043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
