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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHC4UMA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGEiCGSIQHccKI0qKT7z9qKFpvMZEYU6S%2BNWrfWDWPHRAiA5WXdf7ATVw0XjUoJlM%2BEAbatudpwS2%2F7DfEPp6qeVnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMED6Sd54NBU2R1OYKKtwDr6r%2B2fYclRrPVtteUQmUDSqSB3oGZ97lBhuaDfp3HYIpgb4ZE8LQACNkLOuREo%2BQbonUUe6VNkrOUsjHpMYFUI3HCe1z2U4qKlEUTGx6%2Fe7%2F9TBjaeilcHLjb%2Fw1L%2FtMztPNplg2aFaV0f%2BIN4%2F6Codr8W7jsop5%2F%2BIIcGcMEP1wnB4qOgK9A3cG7wCDP%2FnfuyzzNl2kcfQOGGlTSEzl7Ati3%2Fa8glP7hUK5kd7G9RwBRoCspEGdPZofofi68WDDGYl2mpAVERR9lifAwtTRC7J72p9OsjfLfJExx6I5GuR8LG2rYCRmbGlfdhmxmGoXXG93L1X09S1rwQ3pPh9ltYMx5LPW7WJB8OrHOFBE8l1RldUSu78V4ttqYaFlEWxQrUiAof00NfPvYQHFSN7slsO6JuLOXFX2sUcLRkcUbIeJvJoef7kG8qOLt3HD1mP3l49pvctL8vvRZ5uSrC2oFPGscOLu9PZaOWZ8wPErKNZaTjXnGwBLls3fsO0voh05oJF2vLXOdZiOoirZaKZN10KQ8XzBccfbv8izkc64HKYoaU5I53FRT1rMKqTWAGZM%2BSJgtP%2FWTb6p3W%2Bx9xK0cZJWmWMx%2Bb4dPplIh33sq5CEqX%2Fg9gE35wNN%2BmMwn5HTvQY6pgGaUjm6DGy7YkTLrna%2BEcTGbtIkC1g%2BqgT1OOaMFWb6tck3odtFRh63H07B4aYLsmaI7fwNqpHQFhEpVOZWxTTnmZruq10sJXoBowISSCoWrnceQIH7tJ90BJPIF3DcEZZFwT4%2FSwOyPqPY%2B7hGmIjkeh6S28q0zyIJoXQsJm1rsHUF827EW5QlfSYIbjnAdNu0wg2zCfjEQFmQeltOI8w2Z6UOwmXF&X-Amz-Signature=3f98320632cdeab541b51d5ca1bdddaab777ced4463f9a6cfe32b1bcaa5a6205&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHC4UMA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGEiCGSIQHccKI0qKT7z9qKFpvMZEYU6S%2BNWrfWDWPHRAiA5WXdf7ATVw0XjUoJlM%2BEAbatudpwS2%2F7DfEPp6qeVnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMED6Sd54NBU2R1OYKKtwDr6r%2B2fYclRrPVtteUQmUDSqSB3oGZ97lBhuaDfp3HYIpgb4ZE8LQACNkLOuREo%2BQbonUUe6VNkrOUsjHpMYFUI3HCe1z2U4qKlEUTGx6%2Fe7%2F9TBjaeilcHLjb%2Fw1L%2FtMztPNplg2aFaV0f%2BIN4%2F6Codr8W7jsop5%2F%2BIIcGcMEP1wnB4qOgK9A3cG7wCDP%2FnfuyzzNl2kcfQOGGlTSEzl7Ati3%2Fa8glP7hUK5kd7G9RwBRoCspEGdPZofofi68WDDGYl2mpAVERR9lifAwtTRC7J72p9OsjfLfJExx6I5GuR8LG2rYCRmbGlfdhmxmGoXXG93L1X09S1rwQ3pPh9ltYMx5LPW7WJB8OrHOFBE8l1RldUSu78V4ttqYaFlEWxQrUiAof00NfPvYQHFSN7slsO6JuLOXFX2sUcLRkcUbIeJvJoef7kG8qOLt3HD1mP3l49pvctL8vvRZ5uSrC2oFPGscOLu9PZaOWZ8wPErKNZaTjXnGwBLls3fsO0voh05oJF2vLXOdZiOoirZaKZN10KQ8XzBccfbv8izkc64HKYoaU5I53FRT1rMKqTWAGZM%2BSJgtP%2FWTb6p3W%2Bx9xK0cZJWmWMx%2Bb4dPplIh33sq5CEqX%2Fg9gE35wNN%2BmMwn5HTvQY6pgGaUjm6DGy7YkTLrna%2BEcTGbtIkC1g%2BqgT1OOaMFWb6tck3odtFRh63H07B4aYLsmaI7fwNqpHQFhEpVOZWxTTnmZruq10sJXoBowISSCoWrnceQIH7tJ90BJPIF3DcEZZFwT4%2FSwOyPqPY%2B7hGmIjkeh6S28q0zyIJoXQsJm1rsHUF827EW5QlfSYIbjnAdNu0wg2zCfjEQFmQeltOI8w2Z6UOwmXF&X-Amz-Signature=cb7544e75ba517bcd65b6a065e5e37cb9d5e02cd25f1b6092d996dcb999a09d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHC4UMA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGEiCGSIQHccKI0qKT7z9qKFpvMZEYU6S%2BNWrfWDWPHRAiA5WXdf7ATVw0XjUoJlM%2BEAbatudpwS2%2F7DfEPp6qeVnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMED6Sd54NBU2R1OYKKtwDr6r%2B2fYclRrPVtteUQmUDSqSB3oGZ97lBhuaDfp3HYIpgb4ZE8LQACNkLOuREo%2BQbonUUe6VNkrOUsjHpMYFUI3HCe1z2U4qKlEUTGx6%2Fe7%2F9TBjaeilcHLjb%2Fw1L%2FtMztPNplg2aFaV0f%2BIN4%2F6Codr8W7jsop5%2F%2BIIcGcMEP1wnB4qOgK9A3cG7wCDP%2FnfuyzzNl2kcfQOGGlTSEzl7Ati3%2Fa8glP7hUK5kd7G9RwBRoCspEGdPZofofi68WDDGYl2mpAVERR9lifAwtTRC7J72p9OsjfLfJExx6I5GuR8LG2rYCRmbGlfdhmxmGoXXG93L1X09S1rwQ3pPh9ltYMx5LPW7WJB8OrHOFBE8l1RldUSu78V4ttqYaFlEWxQrUiAof00NfPvYQHFSN7slsO6JuLOXFX2sUcLRkcUbIeJvJoef7kG8qOLt3HD1mP3l49pvctL8vvRZ5uSrC2oFPGscOLu9PZaOWZ8wPErKNZaTjXnGwBLls3fsO0voh05oJF2vLXOdZiOoirZaKZN10KQ8XzBccfbv8izkc64HKYoaU5I53FRT1rMKqTWAGZM%2BSJgtP%2FWTb6p3W%2Bx9xK0cZJWmWMx%2Bb4dPplIh33sq5CEqX%2Fg9gE35wNN%2BmMwn5HTvQY6pgGaUjm6DGy7YkTLrna%2BEcTGbtIkC1g%2BqgT1OOaMFWb6tck3odtFRh63H07B4aYLsmaI7fwNqpHQFhEpVOZWxTTnmZruq10sJXoBowISSCoWrnceQIH7tJ90BJPIF3DcEZZFwT4%2FSwOyPqPY%2B7hGmIjkeh6S28q0zyIJoXQsJm1rsHUF827EW5QlfSYIbjnAdNu0wg2zCfjEQFmQeltOI8w2Z6UOwmXF&X-Amz-Signature=510822831b4a54d774d81a41e5b9357c79fddb85e81e085463fdff025ca14bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHC4UMA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGEiCGSIQHccKI0qKT7z9qKFpvMZEYU6S%2BNWrfWDWPHRAiA5WXdf7ATVw0XjUoJlM%2BEAbatudpwS2%2F7DfEPp6qeVnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMED6Sd54NBU2R1OYKKtwDr6r%2B2fYclRrPVtteUQmUDSqSB3oGZ97lBhuaDfp3HYIpgb4ZE8LQACNkLOuREo%2BQbonUUe6VNkrOUsjHpMYFUI3HCe1z2U4qKlEUTGx6%2Fe7%2F9TBjaeilcHLjb%2Fw1L%2FtMztPNplg2aFaV0f%2BIN4%2F6Codr8W7jsop5%2F%2BIIcGcMEP1wnB4qOgK9A3cG7wCDP%2FnfuyzzNl2kcfQOGGlTSEzl7Ati3%2Fa8glP7hUK5kd7G9RwBRoCspEGdPZofofi68WDDGYl2mpAVERR9lifAwtTRC7J72p9OsjfLfJExx6I5GuR8LG2rYCRmbGlfdhmxmGoXXG93L1X09S1rwQ3pPh9ltYMx5LPW7WJB8OrHOFBE8l1RldUSu78V4ttqYaFlEWxQrUiAof00NfPvYQHFSN7slsO6JuLOXFX2sUcLRkcUbIeJvJoef7kG8qOLt3HD1mP3l49pvctL8vvRZ5uSrC2oFPGscOLu9PZaOWZ8wPErKNZaTjXnGwBLls3fsO0voh05oJF2vLXOdZiOoirZaKZN10KQ8XzBccfbv8izkc64HKYoaU5I53FRT1rMKqTWAGZM%2BSJgtP%2FWTb6p3W%2Bx9xK0cZJWmWMx%2Bb4dPplIh33sq5CEqX%2Fg9gE35wNN%2BmMwn5HTvQY6pgGaUjm6DGy7YkTLrna%2BEcTGbtIkC1g%2BqgT1OOaMFWb6tck3odtFRh63H07B4aYLsmaI7fwNqpHQFhEpVOZWxTTnmZruq10sJXoBowISSCoWrnceQIH7tJ90BJPIF3DcEZZFwT4%2FSwOyPqPY%2B7hGmIjkeh6S28q0zyIJoXQsJm1rsHUF827EW5QlfSYIbjnAdNu0wg2zCfjEQFmQeltOI8w2Z6UOwmXF&X-Amz-Signature=fff1162131919afd0be7f230e2782b45beba1f2c454379104c781f175934bd05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHC4UMA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGEiCGSIQHccKI0qKT7z9qKFpvMZEYU6S%2BNWrfWDWPHRAiA5WXdf7ATVw0XjUoJlM%2BEAbatudpwS2%2F7DfEPp6qeVnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMED6Sd54NBU2R1OYKKtwDr6r%2B2fYclRrPVtteUQmUDSqSB3oGZ97lBhuaDfp3HYIpgb4ZE8LQACNkLOuREo%2BQbonUUe6VNkrOUsjHpMYFUI3HCe1z2U4qKlEUTGx6%2Fe7%2F9TBjaeilcHLjb%2Fw1L%2FtMztPNplg2aFaV0f%2BIN4%2F6Codr8W7jsop5%2F%2BIIcGcMEP1wnB4qOgK9A3cG7wCDP%2FnfuyzzNl2kcfQOGGlTSEzl7Ati3%2Fa8glP7hUK5kd7G9RwBRoCspEGdPZofofi68WDDGYl2mpAVERR9lifAwtTRC7J72p9OsjfLfJExx6I5GuR8LG2rYCRmbGlfdhmxmGoXXG93L1X09S1rwQ3pPh9ltYMx5LPW7WJB8OrHOFBE8l1RldUSu78V4ttqYaFlEWxQrUiAof00NfPvYQHFSN7slsO6JuLOXFX2sUcLRkcUbIeJvJoef7kG8qOLt3HD1mP3l49pvctL8vvRZ5uSrC2oFPGscOLu9PZaOWZ8wPErKNZaTjXnGwBLls3fsO0voh05oJF2vLXOdZiOoirZaKZN10KQ8XzBccfbv8izkc64HKYoaU5I53FRT1rMKqTWAGZM%2BSJgtP%2FWTb6p3W%2Bx9xK0cZJWmWMx%2Bb4dPplIh33sq5CEqX%2Fg9gE35wNN%2BmMwn5HTvQY6pgGaUjm6DGy7YkTLrna%2BEcTGbtIkC1g%2BqgT1OOaMFWb6tck3odtFRh63H07B4aYLsmaI7fwNqpHQFhEpVOZWxTTnmZruq10sJXoBowISSCoWrnceQIH7tJ90BJPIF3DcEZZFwT4%2FSwOyPqPY%2B7hGmIjkeh6S28q0zyIJoXQsJm1rsHUF827EW5QlfSYIbjnAdNu0wg2zCfjEQFmQeltOI8w2Z6UOwmXF&X-Amz-Signature=b31eaaf124a8ee5fcb2b71c162f443aa12a011d600794aab3613bb7aba771210&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHC4UMA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGEiCGSIQHccKI0qKT7z9qKFpvMZEYU6S%2BNWrfWDWPHRAiA5WXdf7ATVw0XjUoJlM%2BEAbatudpwS2%2F7DfEPp6qeVnyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMED6Sd54NBU2R1OYKKtwDr6r%2B2fYclRrPVtteUQmUDSqSB3oGZ97lBhuaDfp3HYIpgb4ZE8LQACNkLOuREo%2BQbonUUe6VNkrOUsjHpMYFUI3HCe1z2U4qKlEUTGx6%2Fe7%2F9TBjaeilcHLjb%2Fw1L%2FtMztPNplg2aFaV0f%2BIN4%2F6Codr8W7jsop5%2F%2BIIcGcMEP1wnB4qOgK9A3cG7wCDP%2FnfuyzzNl2kcfQOGGlTSEzl7Ati3%2Fa8glP7hUK5kd7G9RwBRoCspEGdPZofofi68WDDGYl2mpAVERR9lifAwtTRC7J72p9OsjfLfJExx6I5GuR8LG2rYCRmbGlfdhmxmGoXXG93L1X09S1rwQ3pPh9ltYMx5LPW7WJB8OrHOFBE8l1RldUSu78V4ttqYaFlEWxQrUiAof00NfPvYQHFSN7slsO6JuLOXFX2sUcLRkcUbIeJvJoef7kG8qOLt3HD1mP3l49pvctL8vvRZ5uSrC2oFPGscOLu9PZaOWZ8wPErKNZaTjXnGwBLls3fsO0voh05oJF2vLXOdZiOoirZaKZN10KQ8XzBccfbv8izkc64HKYoaU5I53FRT1rMKqTWAGZM%2BSJgtP%2FWTb6p3W%2Bx9xK0cZJWmWMx%2Bb4dPplIh33sq5CEqX%2Fg9gE35wNN%2BmMwn5HTvQY6pgGaUjm6DGy7YkTLrna%2BEcTGbtIkC1g%2BqgT1OOaMFWb6tck3odtFRh63H07B4aYLsmaI7fwNqpHQFhEpVOZWxTTnmZruq10sJXoBowISSCoWrnceQIH7tJ90BJPIF3DcEZZFwT4%2FSwOyPqPY%2B7hGmIjkeh6S28q0zyIJoXQsJm1rsHUF827EW5QlfSYIbjnAdNu0wg2zCfjEQFmQeltOI8w2Z6UOwmXF&X-Amz-Signature=86ed0bc270b58bac855604d6524204002674c69828070105a74f09f1eb772c16&X-Amz-SignedHeaders=host&x-id=GetObject)
