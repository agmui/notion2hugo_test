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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHY4W73%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6h4zdtjQyK%2FG65P7VGgxkeyuCdQ9%2F1Fkk8mryUoDLeAiEAiua4%2F2YWN5DcHneziaKfyF8n16VCAxuT3IS02AZ1insq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOhupAasTylkY%2FUtXircA3HZuqb9gDXdSscYCpZRHZY5%2BYxA5lqKcP3ubencVwy0wPQHZ5HcmDkCYzPVYNrhhK4RxMJwsjamIlz0KSZs6mm6NCOGiWSJq13VJVolbawcps7ZAbWMm58JbHYdcKDTVodb0Zigc53uTBl1tqJUvN9VGXaBr%2BcGes2jPxR4Kcl3B1HlN15S%2BjYdM87jjlNw24qhIx8nNaIJWONC%2FUSG2CqY24h5iZvphriABzDuTf55dm5aMzQ08lkhmf1SBQWRGl%2BaJTinn%2Bdu1x15%2FfiNAapuh457I0lKXF8jYteIHl5A0aqrIRIsmOrL32%2F6R4UyL1%2BXzp0WZDDV0Dxz6ebiW4BWnXPpskZ%2BncCxmDQF%2BJYbg0ZMDNFFyuaC2bG1tDWEQhWxhGsTPzH3N1HJlHfVM2EpvKbGyJA0emFulM%2Fhznyx8Bh33iyt5wvgkg9LJfEQZx1hYtHGAIRzlj48dI9FuaywTEpPak9Z1GVrrDVervEURueT0q0Lj25BsUONFEBjCSB8oLiMURyPGTaIgHCms5pzHIfr0BSGdqrdvFa%2Bd6VonViA0CM%2F0OEuMDoCLVGc0PWyzskLvhHEGIIwpjLWzWLJxFO%2BdW9tOLyFScwSL2GUA%2FMBHxQ9bMw%2Borp%2FMIPTwL8GOqUBRdbrXpwmiD8ZFC03IoOMFs74a%2BQzb8b4IFozQQB9NC47tjnD5t1rCIHpXUpfxkj6tfcEfGy7pL3aU2OMgoerBtVwUSdsdPMHwEyjB4PYnqM8VgrteSrnVqr%2F74gVNNzP0RebwKmvhk4aGcgiYElir2L7pmhT%2B3ixSgqvLeqrhJSQIxJa8RvEEGXIfiqa5bNTCFr41ferTJm8DqZMlZf58prLisGg&X-Amz-Signature=0d9197a39ec1a1d8f4b3dfa59924d41ee9bd384fbba1ecbc881924fe02df875d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHY4W73%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6h4zdtjQyK%2FG65P7VGgxkeyuCdQ9%2F1Fkk8mryUoDLeAiEAiua4%2F2YWN5DcHneziaKfyF8n16VCAxuT3IS02AZ1insq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOhupAasTylkY%2FUtXircA3HZuqb9gDXdSscYCpZRHZY5%2BYxA5lqKcP3ubencVwy0wPQHZ5HcmDkCYzPVYNrhhK4RxMJwsjamIlz0KSZs6mm6NCOGiWSJq13VJVolbawcps7ZAbWMm58JbHYdcKDTVodb0Zigc53uTBl1tqJUvN9VGXaBr%2BcGes2jPxR4Kcl3B1HlN15S%2BjYdM87jjlNw24qhIx8nNaIJWONC%2FUSG2CqY24h5iZvphriABzDuTf55dm5aMzQ08lkhmf1SBQWRGl%2BaJTinn%2Bdu1x15%2FfiNAapuh457I0lKXF8jYteIHl5A0aqrIRIsmOrL32%2F6R4UyL1%2BXzp0WZDDV0Dxz6ebiW4BWnXPpskZ%2BncCxmDQF%2BJYbg0ZMDNFFyuaC2bG1tDWEQhWxhGsTPzH3N1HJlHfVM2EpvKbGyJA0emFulM%2Fhznyx8Bh33iyt5wvgkg9LJfEQZx1hYtHGAIRzlj48dI9FuaywTEpPak9Z1GVrrDVervEURueT0q0Lj25BsUONFEBjCSB8oLiMURyPGTaIgHCms5pzHIfr0BSGdqrdvFa%2Bd6VonViA0CM%2F0OEuMDoCLVGc0PWyzskLvhHEGIIwpjLWzWLJxFO%2BdW9tOLyFScwSL2GUA%2FMBHxQ9bMw%2Borp%2FMIPTwL8GOqUBRdbrXpwmiD8ZFC03IoOMFs74a%2BQzb8b4IFozQQB9NC47tjnD5t1rCIHpXUpfxkj6tfcEfGy7pL3aU2OMgoerBtVwUSdsdPMHwEyjB4PYnqM8VgrteSrnVqr%2F74gVNNzP0RebwKmvhk4aGcgiYElir2L7pmhT%2B3ixSgqvLeqrhJSQIxJa8RvEEGXIfiqa5bNTCFr41ferTJm8DqZMlZf58prLisGg&X-Amz-Signature=3bb3b615662cd8dfe5224f53da11772e1a615f9744a3e37f8192b1fc7a0ee000&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHY4W73%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6h4zdtjQyK%2FG65P7VGgxkeyuCdQ9%2F1Fkk8mryUoDLeAiEAiua4%2F2YWN5DcHneziaKfyF8n16VCAxuT3IS02AZ1insq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOhupAasTylkY%2FUtXircA3HZuqb9gDXdSscYCpZRHZY5%2BYxA5lqKcP3ubencVwy0wPQHZ5HcmDkCYzPVYNrhhK4RxMJwsjamIlz0KSZs6mm6NCOGiWSJq13VJVolbawcps7ZAbWMm58JbHYdcKDTVodb0Zigc53uTBl1tqJUvN9VGXaBr%2BcGes2jPxR4Kcl3B1HlN15S%2BjYdM87jjlNw24qhIx8nNaIJWONC%2FUSG2CqY24h5iZvphriABzDuTf55dm5aMzQ08lkhmf1SBQWRGl%2BaJTinn%2Bdu1x15%2FfiNAapuh457I0lKXF8jYteIHl5A0aqrIRIsmOrL32%2F6R4UyL1%2BXzp0WZDDV0Dxz6ebiW4BWnXPpskZ%2BncCxmDQF%2BJYbg0ZMDNFFyuaC2bG1tDWEQhWxhGsTPzH3N1HJlHfVM2EpvKbGyJA0emFulM%2Fhznyx8Bh33iyt5wvgkg9LJfEQZx1hYtHGAIRzlj48dI9FuaywTEpPak9Z1GVrrDVervEURueT0q0Lj25BsUONFEBjCSB8oLiMURyPGTaIgHCms5pzHIfr0BSGdqrdvFa%2Bd6VonViA0CM%2F0OEuMDoCLVGc0PWyzskLvhHEGIIwpjLWzWLJxFO%2BdW9tOLyFScwSL2GUA%2FMBHxQ9bMw%2Borp%2FMIPTwL8GOqUBRdbrXpwmiD8ZFC03IoOMFs74a%2BQzb8b4IFozQQB9NC47tjnD5t1rCIHpXUpfxkj6tfcEfGy7pL3aU2OMgoerBtVwUSdsdPMHwEyjB4PYnqM8VgrteSrnVqr%2F74gVNNzP0RebwKmvhk4aGcgiYElir2L7pmhT%2B3ixSgqvLeqrhJSQIxJa8RvEEGXIfiqa5bNTCFr41ferTJm8DqZMlZf58prLisGg&X-Amz-Signature=0a0e8cecdf7a9e59e888da617b4e8e502603485271f53327ac844b9a76bf23bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHY4W73%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6h4zdtjQyK%2FG65P7VGgxkeyuCdQ9%2F1Fkk8mryUoDLeAiEAiua4%2F2YWN5DcHneziaKfyF8n16VCAxuT3IS02AZ1insq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOhupAasTylkY%2FUtXircA3HZuqb9gDXdSscYCpZRHZY5%2BYxA5lqKcP3ubencVwy0wPQHZ5HcmDkCYzPVYNrhhK4RxMJwsjamIlz0KSZs6mm6NCOGiWSJq13VJVolbawcps7ZAbWMm58JbHYdcKDTVodb0Zigc53uTBl1tqJUvN9VGXaBr%2BcGes2jPxR4Kcl3B1HlN15S%2BjYdM87jjlNw24qhIx8nNaIJWONC%2FUSG2CqY24h5iZvphriABzDuTf55dm5aMzQ08lkhmf1SBQWRGl%2BaJTinn%2Bdu1x15%2FfiNAapuh457I0lKXF8jYteIHl5A0aqrIRIsmOrL32%2F6R4UyL1%2BXzp0WZDDV0Dxz6ebiW4BWnXPpskZ%2BncCxmDQF%2BJYbg0ZMDNFFyuaC2bG1tDWEQhWxhGsTPzH3N1HJlHfVM2EpvKbGyJA0emFulM%2Fhznyx8Bh33iyt5wvgkg9LJfEQZx1hYtHGAIRzlj48dI9FuaywTEpPak9Z1GVrrDVervEURueT0q0Lj25BsUONFEBjCSB8oLiMURyPGTaIgHCms5pzHIfr0BSGdqrdvFa%2Bd6VonViA0CM%2F0OEuMDoCLVGc0PWyzskLvhHEGIIwpjLWzWLJxFO%2BdW9tOLyFScwSL2GUA%2FMBHxQ9bMw%2Borp%2FMIPTwL8GOqUBRdbrXpwmiD8ZFC03IoOMFs74a%2BQzb8b4IFozQQB9NC47tjnD5t1rCIHpXUpfxkj6tfcEfGy7pL3aU2OMgoerBtVwUSdsdPMHwEyjB4PYnqM8VgrteSrnVqr%2F74gVNNzP0RebwKmvhk4aGcgiYElir2L7pmhT%2B3ixSgqvLeqrhJSQIxJa8RvEEGXIfiqa5bNTCFr41ferTJm8DqZMlZf58prLisGg&X-Amz-Signature=766ba310ee4fb3b68c5f66c35d12ac93e0a1caf78cce53ea3de7fd7756c53555&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHY4W73%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6h4zdtjQyK%2FG65P7VGgxkeyuCdQ9%2F1Fkk8mryUoDLeAiEAiua4%2F2YWN5DcHneziaKfyF8n16VCAxuT3IS02AZ1insq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOhupAasTylkY%2FUtXircA3HZuqb9gDXdSscYCpZRHZY5%2BYxA5lqKcP3ubencVwy0wPQHZ5HcmDkCYzPVYNrhhK4RxMJwsjamIlz0KSZs6mm6NCOGiWSJq13VJVolbawcps7ZAbWMm58JbHYdcKDTVodb0Zigc53uTBl1tqJUvN9VGXaBr%2BcGes2jPxR4Kcl3B1HlN15S%2BjYdM87jjlNw24qhIx8nNaIJWONC%2FUSG2CqY24h5iZvphriABzDuTf55dm5aMzQ08lkhmf1SBQWRGl%2BaJTinn%2Bdu1x15%2FfiNAapuh457I0lKXF8jYteIHl5A0aqrIRIsmOrL32%2F6R4UyL1%2BXzp0WZDDV0Dxz6ebiW4BWnXPpskZ%2BncCxmDQF%2BJYbg0ZMDNFFyuaC2bG1tDWEQhWxhGsTPzH3N1HJlHfVM2EpvKbGyJA0emFulM%2Fhznyx8Bh33iyt5wvgkg9LJfEQZx1hYtHGAIRzlj48dI9FuaywTEpPak9Z1GVrrDVervEURueT0q0Lj25BsUONFEBjCSB8oLiMURyPGTaIgHCms5pzHIfr0BSGdqrdvFa%2Bd6VonViA0CM%2F0OEuMDoCLVGc0PWyzskLvhHEGIIwpjLWzWLJxFO%2BdW9tOLyFScwSL2GUA%2FMBHxQ9bMw%2Borp%2FMIPTwL8GOqUBRdbrXpwmiD8ZFC03IoOMFs74a%2BQzb8b4IFozQQB9NC47tjnD5t1rCIHpXUpfxkj6tfcEfGy7pL3aU2OMgoerBtVwUSdsdPMHwEyjB4PYnqM8VgrteSrnVqr%2F74gVNNzP0RebwKmvhk4aGcgiYElir2L7pmhT%2B3ixSgqvLeqrhJSQIxJa8RvEEGXIfiqa5bNTCFr41ferTJm8DqZMlZf58prLisGg&X-Amz-Signature=3a4fa44d13265d4f8ba44563c65ff50f73a351430447ab557d1063d4e3c168fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHY4W73%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6h4zdtjQyK%2FG65P7VGgxkeyuCdQ9%2F1Fkk8mryUoDLeAiEAiua4%2F2YWN5DcHneziaKfyF8n16VCAxuT3IS02AZ1insq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOhupAasTylkY%2FUtXircA3HZuqb9gDXdSscYCpZRHZY5%2BYxA5lqKcP3ubencVwy0wPQHZ5HcmDkCYzPVYNrhhK4RxMJwsjamIlz0KSZs6mm6NCOGiWSJq13VJVolbawcps7ZAbWMm58JbHYdcKDTVodb0Zigc53uTBl1tqJUvN9VGXaBr%2BcGes2jPxR4Kcl3B1HlN15S%2BjYdM87jjlNw24qhIx8nNaIJWONC%2FUSG2CqY24h5iZvphriABzDuTf55dm5aMzQ08lkhmf1SBQWRGl%2BaJTinn%2Bdu1x15%2FfiNAapuh457I0lKXF8jYteIHl5A0aqrIRIsmOrL32%2F6R4UyL1%2BXzp0WZDDV0Dxz6ebiW4BWnXPpskZ%2BncCxmDQF%2BJYbg0ZMDNFFyuaC2bG1tDWEQhWxhGsTPzH3N1HJlHfVM2EpvKbGyJA0emFulM%2Fhznyx8Bh33iyt5wvgkg9LJfEQZx1hYtHGAIRzlj48dI9FuaywTEpPak9Z1GVrrDVervEURueT0q0Lj25BsUONFEBjCSB8oLiMURyPGTaIgHCms5pzHIfr0BSGdqrdvFa%2Bd6VonViA0CM%2F0OEuMDoCLVGc0PWyzskLvhHEGIIwpjLWzWLJxFO%2BdW9tOLyFScwSL2GUA%2FMBHxQ9bMw%2Borp%2FMIPTwL8GOqUBRdbrXpwmiD8ZFC03IoOMFs74a%2BQzb8b4IFozQQB9NC47tjnD5t1rCIHpXUpfxkj6tfcEfGy7pL3aU2OMgoerBtVwUSdsdPMHwEyjB4PYnqM8VgrteSrnVqr%2F74gVNNzP0RebwKmvhk4aGcgiYElir2L7pmhT%2B3ixSgqvLeqrhJSQIxJa8RvEEGXIfiqa5bNTCFr41ferTJm8DqZMlZf58prLisGg&X-Amz-Signature=08f71e1345249a3f88fc094d568e52a35dea63259667e8914d8f256ff4638eb7&X-Amz-SignedHeaders=host&x-id=GetObject)
