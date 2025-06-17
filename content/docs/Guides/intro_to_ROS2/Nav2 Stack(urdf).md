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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCODZHT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykJ5dTO87g4k05qvfHBBEBcs4pvRTKN9wwx7Hl5uNNwIgP%2B9K5SH4lcHyEx8FSTRcU4qZ4Iaaxs9CMM4bk1tVqR0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPtYX6ZXpJ%2B9exJq8ircA25yk6nG%2FISYhLfUgkmwwD7uEV3Qo%2B0EeIuNeFbz25i4QN8uhCqf2pNp6zhIJeNngEbH5noaVgZVOlUywVU7LFez6r1VD969anfQF6gZQaZFQGhYLjbiIZuKEGZWXa%2Fnu0i%2FYz%2BtR7xqlwwhmtOUrscbcChxaRFcYJS4Tc7cyHTi5KKoPYWuCWHOZoWW6v3ffbRJUTXj53ecWPKT%2FZPxoPxnYDccJRhdDzWCALwYIWEzj9piVQcbonydIlHliCslOjmrU9NlC9AiGO0QeZdJgPSSfcWhyJ%2BsS6s82uNUlaL8ei58x9elJ9yZrB8%2Be5mkVTKQYe4SZ60yZWGuq8vjWvMY0t0ZvgKl%2B0XgMnfO4Kr2yEvYdSdH%2Fjh1U4XsLf75cGE8r%2BMcCmXdcGQykQw3R995OQCC94PwGBtxKdrHC8NSGpn1jLlCgnwUEUHay5UDSgcTk4G3juq9nihRXhB02dQj2IpxSgjOP1AWUgPVKPxK9rtydBcsmbNFDN%2B6p62MY%2FR2nRD44SWgyoLaC7j8BtdwJoKNNf9v3crC25V%2FYD9emYnEmrpfy66eEQrDHsc9WqVCbwA2hbakhY3J7drXNV8iUaJIrncDuyaLv0lu8BLECxODvwA3LH7jPG2TMIKnxcIGOqUBld7qphdcbZQjOPz0%2B%2F7R%2Ff7Vz773BNBAfmOLdcISzlABGijLcRfok3zUnx6h%2FpPEUVQqh28dKTZ%2BTe4%2FcEPyZ01ABQmSXhrnpoO2qcAXYEemzWl7ZN3xg8Qs3FRO%2BtRILQUDjRkTVJH4izNXhgYmqnwuX%2FttgAMm%2F%2BTKHRjHJjZ2%2BEnmt6CP6w9G%2F6VORe4uLDKZmra8eyQaqcKP1uP%2F8L6jIqyO&X-Amz-Signature=66a412800eedc490a1d52cc5a2292b829f082a62c8e036515008b08ef97eb366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCODZHT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykJ5dTO87g4k05qvfHBBEBcs4pvRTKN9wwx7Hl5uNNwIgP%2B9K5SH4lcHyEx8FSTRcU4qZ4Iaaxs9CMM4bk1tVqR0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPtYX6ZXpJ%2B9exJq8ircA25yk6nG%2FISYhLfUgkmwwD7uEV3Qo%2B0EeIuNeFbz25i4QN8uhCqf2pNp6zhIJeNngEbH5noaVgZVOlUywVU7LFez6r1VD969anfQF6gZQaZFQGhYLjbiIZuKEGZWXa%2Fnu0i%2FYz%2BtR7xqlwwhmtOUrscbcChxaRFcYJS4Tc7cyHTi5KKoPYWuCWHOZoWW6v3ffbRJUTXj53ecWPKT%2FZPxoPxnYDccJRhdDzWCALwYIWEzj9piVQcbonydIlHliCslOjmrU9NlC9AiGO0QeZdJgPSSfcWhyJ%2BsS6s82uNUlaL8ei58x9elJ9yZrB8%2Be5mkVTKQYe4SZ60yZWGuq8vjWvMY0t0ZvgKl%2B0XgMnfO4Kr2yEvYdSdH%2Fjh1U4XsLf75cGE8r%2BMcCmXdcGQykQw3R995OQCC94PwGBtxKdrHC8NSGpn1jLlCgnwUEUHay5UDSgcTk4G3juq9nihRXhB02dQj2IpxSgjOP1AWUgPVKPxK9rtydBcsmbNFDN%2B6p62MY%2FR2nRD44SWgyoLaC7j8BtdwJoKNNf9v3crC25V%2FYD9emYnEmrpfy66eEQrDHsc9WqVCbwA2hbakhY3J7drXNV8iUaJIrncDuyaLv0lu8BLECxODvwA3LH7jPG2TMIKnxcIGOqUBld7qphdcbZQjOPz0%2B%2F7R%2Ff7Vz773BNBAfmOLdcISzlABGijLcRfok3zUnx6h%2FpPEUVQqh28dKTZ%2BTe4%2FcEPyZ01ABQmSXhrnpoO2qcAXYEemzWl7ZN3xg8Qs3FRO%2BtRILQUDjRkTVJH4izNXhgYmqnwuX%2FttgAMm%2F%2BTKHRjHJjZ2%2BEnmt6CP6w9G%2F6VORe4uLDKZmra8eyQaqcKP1uP%2F8L6jIqyO&X-Amz-Signature=b5af90a040a1107f177a52e4be2313c1529cf34bde6ed9b39a22e6cc92173f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCODZHT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykJ5dTO87g4k05qvfHBBEBcs4pvRTKN9wwx7Hl5uNNwIgP%2B9K5SH4lcHyEx8FSTRcU4qZ4Iaaxs9CMM4bk1tVqR0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPtYX6ZXpJ%2B9exJq8ircA25yk6nG%2FISYhLfUgkmwwD7uEV3Qo%2B0EeIuNeFbz25i4QN8uhCqf2pNp6zhIJeNngEbH5noaVgZVOlUywVU7LFez6r1VD969anfQF6gZQaZFQGhYLjbiIZuKEGZWXa%2Fnu0i%2FYz%2BtR7xqlwwhmtOUrscbcChxaRFcYJS4Tc7cyHTi5KKoPYWuCWHOZoWW6v3ffbRJUTXj53ecWPKT%2FZPxoPxnYDccJRhdDzWCALwYIWEzj9piVQcbonydIlHliCslOjmrU9NlC9AiGO0QeZdJgPSSfcWhyJ%2BsS6s82uNUlaL8ei58x9elJ9yZrB8%2Be5mkVTKQYe4SZ60yZWGuq8vjWvMY0t0ZvgKl%2B0XgMnfO4Kr2yEvYdSdH%2Fjh1U4XsLf75cGE8r%2BMcCmXdcGQykQw3R995OQCC94PwGBtxKdrHC8NSGpn1jLlCgnwUEUHay5UDSgcTk4G3juq9nihRXhB02dQj2IpxSgjOP1AWUgPVKPxK9rtydBcsmbNFDN%2B6p62MY%2FR2nRD44SWgyoLaC7j8BtdwJoKNNf9v3crC25V%2FYD9emYnEmrpfy66eEQrDHsc9WqVCbwA2hbakhY3J7drXNV8iUaJIrncDuyaLv0lu8BLECxODvwA3LH7jPG2TMIKnxcIGOqUBld7qphdcbZQjOPz0%2B%2F7R%2Ff7Vz773BNBAfmOLdcISzlABGijLcRfok3zUnx6h%2FpPEUVQqh28dKTZ%2BTe4%2FcEPyZ01ABQmSXhrnpoO2qcAXYEemzWl7ZN3xg8Qs3FRO%2BtRILQUDjRkTVJH4izNXhgYmqnwuX%2FttgAMm%2F%2BTKHRjHJjZ2%2BEnmt6CP6w9G%2F6VORe4uLDKZmra8eyQaqcKP1uP%2F8L6jIqyO&X-Amz-Signature=146876c6ad72849993d4df29a450cc373c4e8de2b5b77faee1f7ca790192fa42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCODZHT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykJ5dTO87g4k05qvfHBBEBcs4pvRTKN9wwx7Hl5uNNwIgP%2B9K5SH4lcHyEx8FSTRcU4qZ4Iaaxs9CMM4bk1tVqR0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPtYX6ZXpJ%2B9exJq8ircA25yk6nG%2FISYhLfUgkmwwD7uEV3Qo%2B0EeIuNeFbz25i4QN8uhCqf2pNp6zhIJeNngEbH5noaVgZVOlUywVU7LFez6r1VD969anfQF6gZQaZFQGhYLjbiIZuKEGZWXa%2Fnu0i%2FYz%2BtR7xqlwwhmtOUrscbcChxaRFcYJS4Tc7cyHTi5KKoPYWuCWHOZoWW6v3ffbRJUTXj53ecWPKT%2FZPxoPxnYDccJRhdDzWCALwYIWEzj9piVQcbonydIlHliCslOjmrU9NlC9AiGO0QeZdJgPSSfcWhyJ%2BsS6s82uNUlaL8ei58x9elJ9yZrB8%2Be5mkVTKQYe4SZ60yZWGuq8vjWvMY0t0ZvgKl%2B0XgMnfO4Kr2yEvYdSdH%2Fjh1U4XsLf75cGE8r%2BMcCmXdcGQykQw3R995OQCC94PwGBtxKdrHC8NSGpn1jLlCgnwUEUHay5UDSgcTk4G3juq9nihRXhB02dQj2IpxSgjOP1AWUgPVKPxK9rtydBcsmbNFDN%2B6p62MY%2FR2nRD44SWgyoLaC7j8BtdwJoKNNf9v3crC25V%2FYD9emYnEmrpfy66eEQrDHsc9WqVCbwA2hbakhY3J7drXNV8iUaJIrncDuyaLv0lu8BLECxODvwA3LH7jPG2TMIKnxcIGOqUBld7qphdcbZQjOPz0%2B%2F7R%2Ff7Vz773BNBAfmOLdcISzlABGijLcRfok3zUnx6h%2FpPEUVQqh28dKTZ%2BTe4%2FcEPyZ01ABQmSXhrnpoO2qcAXYEemzWl7ZN3xg8Qs3FRO%2BtRILQUDjRkTVJH4izNXhgYmqnwuX%2FttgAMm%2F%2BTKHRjHJjZ2%2BEnmt6CP6w9G%2F6VORe4uLDKZmra8eyQaqcKP1uP%2F8L6jIqyO&X-Amz-Signature=761787c07469ae6e21220f095054675545434e740c286f0a6cdc3766b2647e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCODZHT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykJ5dTO87g4k05qvfHBBEBcs4pvRTKN9wwx7Hl5uNNwIgP%2B9K5SH4lcHyEx8FSTRcU4qZ4Iaaxs9CMM4bk1tVqR0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPtYX6ZXpJ%2B9exJq8ircA25yk6nG%2FISYhLfUgkmwwD7uEV3Qo%2B0EeIuNeFbz25i4QN8uhCqf2pNp6zhIJeNngEbH5noaVgZVOlUywVU7LFez6r1VD969anfQF6gZQaZFQGhYLjbiIZuKEGZWXa%2Fnu0i%2FYz%2BtR7xqlwwhmtOUrscbcChxaRFcYJS4Tc7cyHTi5KKoPYWuCWHOZoWW6v3ffbRJUTXj53ecWPKT%2FZPxoPxnYDccJRhdDzWCALwYIWEzj9piVQcbonydIlHliCslOjmrU9NlC9AiGO0QeZdJgPSSfcWhyJ%2BsS6s82uNUlaL8ei58x9elJ9yZrB8%2Be5mkVTKQYe4SZ60yZWGuq8vjWvMY0t0ZvgKl%2B0XgMnfO4Kr2yEvYdSdH%2Fjh1U4XsLf75cGE8r%2BMcCmXdcGQykQw3R995OQCC94PwGBtxKdrHC8NSGpn1jLlCgnwUEUHay5UDSgcTk4G3juq9nihRXhB02dQj2IpxSgjOP1AWUgPVKPxK9rtydBcsmbNFDN%2B6p62MY%2FR2nRD44SWgyoLaC7j8BtdwJoKNNf9v3crC25V%2FYD9emYnEmrpfy66eEQrDHsc9WqVCbwA2hbakhY3J7drXNV8iUaJIrncDuyaLv0lu8BLECxODvwA3LH7jPG2TMIKnxcIGOqUBld7qphdcbZQjOPz0%2B%2F7R%2Ff7Vz773BNBAfmOLdcISzlABGijLcRfok3zUnx6h%2FpPEUVQqh28dKTZ%2BTe4%2FcEPyZ01ABQmSXhrnpoO2qcAXYEemzWl7ZN3xg8Qs3FRO%2BtRILQUDjRkTVJH4izNXhgYmqnwuX%2FttgAMm%2F%2BTKHRjHJjZ2%2BEnmt6CP6w9G%2F6VORe4uLDKZmra8eyQaqcKP1uP%2F8L6jIqyO&X-Amz-Signature=70ed79b5f2a2738648dc18773c82b98f125a1beae148b87a5175612668f13b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCODZHT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCykJ5dTO87g4k05qvfHBBEBcs4pvRTKN9wwx7Hl5uNNwIgP%2B9K5SH4lcHyEx8FSTRcU4qZ4Iaaxs9CMM4bk1tVqR0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPtYX6ZXpJ%2B9exJq8ircA25yk6nG%2FISYhLfUgkmwwD7uEV3Qo%2B0EeIuNeFbz25i4QN8uhCqf2pNp6zhIJeNngEbH5noaVgZVOlUywVU7LFez6r1VD969anfQF6gZQaZFQGhYLjbiIZuKEGZWXa%2Fnu0i%2FYz%2BtR7xqlwwhmtOUrscbcChxaRFcYJS4Tc7cyHTi5KKoPYWuCWHOZoWW6v3ffbRJUTXj53ecWPKT%2FZPxoPxnYDccJRhdDzWCALwYIWEzj9piVQcbonydIlHliCslOjmrU9NlC9AiGO0QeZdJgPSSfcWhyJ%2BsS6s82uNUlaL8ei58x9elJ9yZrB8%2Be5mkVTKQYe4SZ60yZWGuq8vjWvMY0t0ZvgKl%2B0XgMnfO4Kr2yEvYdSdH%2Fjh1U4XsLf75cGE8r%2BMcCmXdcGQykQw3R995OQCC94PwGBtxKdrHC8NSGpn1jLlCgnwUEUHay5UDSgcTk4G3juq9nihRXhB02dQj2IpxSgjOP1AWUgPVKPxK9rtydBcsmbNFDN%2B6p62MY%2FR2nRD44SWgyoLaC7j8BtdwJoKNNf9v3crC25V%2FYD9emYnEmrpfy66eEQrDHsc9WqVCbwA2hbakhY3J7drXNV8iUaJIrncDuyaLv0lu8BLECxODvwA3LH7jPG2TMIKnxcIGOqUBld7qphdcbZQjOPz0%2B%2F7R%2Ff7Vz773BNBAfmOLdcISzlABGijLcRfok3zUnx6h%2FpPEUVQqh28dKTZ%2BTe4%2FcEPyZ01ABQmSXhrnpoO2qcAXYEemzWl7ZN3xg8Qs3FRO%2BtRILQUDjRkTVJH4izNXhgYmqnwuX%2FttgAMm%2F%2BTKHRjHJjZ2%2BEnmt6CP6w9G%2F6VORe4uLDKZmra8eyQaqcKP1uP%2F8L6jIqyO&X-Amz-Signature=94d23a2a37c6cd4282b8e76555bcf906d4f6e169d7a4354164282c130c1611aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
