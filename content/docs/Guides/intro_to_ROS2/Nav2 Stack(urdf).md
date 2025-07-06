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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO463RM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLl8yRnGcCSwYXSSOo8%2BtcQUXlkDBsleSJiRWAJ2XLkAIges332ufsOIamEff5wvyHVLOGwnj4FfgmO2Uyl5nr1Cwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICSc9C69FUJT41K6SrcA4vve0Lrxk%2BsB18FGAx34Ki94CZv2nhoutF%2B9jFenDv50tjEdoQ%2BIUKYDogG%2Bf3llyripEs%2By92C7zIeZVqirbS9ErbE6zkfYNvLN%2Buupln5Zr0Q2h0j9DON8kByEwjBntdzk19WMj2JZST0WMkBsQT8hlU2pORkV8s%2FGNIZmfNVSbTHCP3pMB1XhH%2BXYaF3youXDfQwYR9tMcAJh%2FEecDm0I9rAh4SHwey7B8C%2FThKt5GxnykD0JmpR3LsiPckqZrCkUC4cZaekDEnWTFJxpVcCju014x3CIbyYX%2BHoCDrUUB9XYyhOkPExaO%2BWnXV8H1qyum24r8AuYU8L04ScYao7oLZLnh6YvM9PC2XzWiiz6Zz9wLYRvWASY8jss9jQi%2FwIGwPpg4cdUGZSJ9BYSh0BUHJaD%2BTjGKFXvrZWGCR7sDA%2F8lCmE7lp434i8w3rNrUhrv6%2BpUgx%2Fs56ZmZMsEu1KGdUURJ7enTlETv3WgFcd%2Bg16nq1oRPML1XoicJxIsBw9lgoGmvkCYqTBIwUOR8zE6D3%2FfMfEGApr0c4Ficv22OGUUCqqrYOaMgaEenU1AY4hRu3nxEKLC1yJCheW207%2FI5Ga6CBOyABoaLm69HjuJrLFw6J5mJ2qAKPMMvKqcMGOqUBxrRzU3VMN%2B5Q3hrQNK7AP09PdP473Z47gFVXk4Cv%2FllgogUdPBB8OsOHORHMS0QLkOz%2FjKlvhqV2lkA8wfBPEitw8VEH4MElw7qSvP2kc9qQmEYikVL1%2FBXD0LGT1IOAw6evLx3B10z4cSaGi%2FDH1HHJCTKgk6fqJQlraZVdIq5Hkc07a8TFO1pHO8bEwPKt8QDv09%2BCnPJpngXdK%2FTVq87RXDtM&X-Amz-Signature=67e5732c138a64e16c8b559691f7f64a4c10d0ea9286762c65190cee8dcab8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO463RM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLl8yRnGcCSwYXSSOo8%2BtcQUXlkDBsleSJiRWAJ2XLkAIges332ufsOIamEff5wvyHVLOGwnj4FfgmO2Uyl5nr1Cwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICSc9C69FUJT41K6SrcA4vve0Lrxk%2BsB18FGAx34Ki94CZv2nhoutF%2B9jFenDv50tjEdoQ%2BIUKYDogG%2Bf3llyripEs%2By92C7zIeZVqirbS9ErbE6zkfYNvLN%2Buupln5Zr0Q2h0j9DON8kByEwjBntdzk19WMj2JZST0WMkBsQT8hlU2pORkV8s%2FGNIZmfNVSbTHCP3pMB1XhH%2BXYaF3youXDfQwYR9tMcAJh%2FEecDm0I9rAh4SHwey7B8C%2FThKt5GxnykD0JmpR3LsiPckqZrCkUC4cZaekDEnWTFJxpVcCju014x3CIbyYX%2BHoCDrUUB9XYyhOkPExaO%2BWnXV8H1qyum24r8AuYU8L04ScYao7oLZLnh6YvM9PC2XzWiiz6Zz9wLYRvWASY8jss9jQi%2FwIGwPpg4cdUGZSJ9BYSh0BUHJaD%2BTjGKFXvrZWGCR7sDA%2F8lCmE7lp434i8w3rNrUhrv6%2BpUgx%2Fs56ZmZMsEu1KGdUURJ7enTlETv3WgFcd%2Bg16nq1oRPML1XoicJxIsBw9lgoGmvkCYqTBIwUOR8zE6D3%2FfMfEGApr0c4Ficv22OGUUCqqrYOaMgaEenU1AY4hRu3nxEKLC1yJCheW207%2FI5Ga6CBOyABoaLm69HjuJrLFw6J5mJ2qAKPMMvKqcMGOqUBxrRzU3VMN%2B5Q3hrQNK7AP09PdP473Z47gFVXk4Cv%2FllgogUdPBB8OsOHORHMS0QLkOz%2FjKlvhqV2lkA8wfBPEitw8VEH4MElw7qSvP2kc9qQmEYikVL1%2FBXD0LGT1IOAw6evLx3B10z4cSaGi%2FDH1HHJCTKgk6fqJQlraZVdIq5Hkc07a8TFO1pHO8bEwPKt8QDv09%2BCnPJpngXdK%2FTVq87RXDtM&X-Amz-Signature=c9034be5b8efee87dbcd162bbf59cb3aa49c89291d047d0d2da8f93879b1ddad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO463RM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLl8yRnGcCSwYXSSOo8%2BtcQUXlkDBsleSJiRWAJ2XLkAIges332ufsOIamEff5wvyHVLOGwnj4FfgmO2Uyl5nr1Cwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICSc9C69FUJT41K6SrcA4vve0Lrxk%2BsB18FGAx34Ki94CZv2nhoutF%2B9jFenDv50tjEdoQ%2BIUKYDogG%2Bf3llyripEs%2By92C7zIeZVqirbS9ErbE6zkfYNvLN%2Buupln5Zr0Q2h0j9DON8kByEwjBntdzk19WMj2JZST0WMkBsQT8hlU2pORkV8s%2FGNIZmfNVSbTHCP3pMB1XhH%2BXYaF3youXDfQwYR9tMcAJh%2FEecDm0I9rAh4SHwey7B8C%2FThKt5GxnykD0JmpR3LsiPckqZrCkUC4cZaekDEnWTFJxpVcCju014x3CIbyYX%2BHoCDrUUB9XYyhOkPExaO%2BWnXV8H1qyum24r8AuYU8L04ScYao7oLZLnh6YvM9PC2XzWiiz6Zz9wLYRvWASY8jss9jQi%2FwIGwPpg4cdUGZSJ9BYSh0BUHJaD%2BTjGKFXvrZWGCR7sDA%2F8lCmE7lp434i8w3rNrUhrv6%2BpUgx%2Fs56ZmZMsEu1KGdUURJ7enTlETv3WgFcd%2Bg16nq1oRPML1XoicJxIsBw9lgoGmvkCYqTBIwUOR8zE6D3%2FfMfEGApr0c4Ficv22OGUUCqqrYOaMgaEenU1AY4hRu3nxEKLC1yJCheW207%2FI5Ga6CBOyABoaLm69HjuJrLFw6J5mJ2qAKPMMvKqcMGOqUBxrRzU3VMN%2B5Q3hrQNK7AP09PdP473Z47gFVXk4Cv%2FllgogUdPBB8OsOHORHMS0QLkOz%2FjKlvhqV2lkA8wfBPEitw8VEH4MElw7qSvP2kc9qQmEYikVL1%2FBXD0LGT1IOAw6evLx3B10z4cSaGi%2FDH1HHJCTKgk6fqJQlraZVdIq5Hkc07a8TFO1pHO8bEwPKt8QDv09%2BCnPJpngXdK%2FTVq87RXDtM&X-Amz-Signature=4bb5ebb490a6837cb8e61e8811f77f55a474177733af71ee77bfd2e83e15f060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO463RM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLl8yRnGcCSwYXSSOo8%2BtcQUXlkDBsleSJiRWAJ2XLkAIges332ufsOIamEff5wvyHVLOGwnj4FfgmO2Uyl5nr1Cwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICSc9C69FUJT41K6SrcA4vve0Lrxk%2BsB18FGAx34Ki94CZv2nhoutF%2B9jFenDv50tjEdoQ%2BIUKYDogG%2Bf3llyripEs%2By92C7zIeZVqirbS9ErbE6zkfYNvLN%2Buupln5Zr0Q2h0j9DON8kByEwjBntdzk19WMj2JZST0WMkBsQT8hlU2pORkV8s%2FGNIZmfNVSbTHCP3pMB1XhH%2BXYaF3youXDfQwYR9tMcAJh%2FEecDm0I9rAh4SHwey7B8C%2FThKt5GxnykD0JmpR3LsiPckqZrCkUC4cZaekDEnWTFJxpVcCju014x3CIbyYX%2BHoCDrUUB9XYyhOkPExaO%2BWnXV8H1qyum24r8AuYU8L04ScYao7oLZLnh6YvM9PC2XzWiiz6Zz9wLYRvWASY8jss9jQi%2FwIGwPpg4cdUGZSJ9BYSh0BUHJaD%2BTjGKFXvrZWGCR7sDA%2F8lCmE7lp434i8w3rNrUhrv6%2BpUgx%2Fs56ZmZMsEu1KGdUURJ7enTlETv3WgFcd%2Bg16nq1oRPML1XoicJxIsBw9lgoGmvkCYqTBIwUOR8zE6D3%2FfMfEGApr0c4Ficv22OGUUCqqrYOaMgaEenU1AY4hRu3nxEKLC1yJCheW207%2FI5Ga6CBOyABoaLm69HjuJrLFw6J5mJ2qAKPMMvKqcMGOqUBxrRzU3VMN%2B5Q3hrQNK7AP09PdP473Z47gFVXk4Cv%2FllgogUdPBB8OsOHORHMS0QLkOz%2FjKlvhqV2lkA8wfBPEitw8VEH4MElw7qSvP2kc9qQmEYikVL1%2FBXD0LGT1IOAw6evLx3B10z4cSaGi%2FDH1HHJCTKgk6fqJQlraZVdIq5Hkc07a8TFO1pHO8bEwPKt8QDv09%2BCnPJpngXdK%2FTVq87RXDtM&X-Amz-Signature=080748056668aff57cd1ab2053a455dd7b23a3c20e0eb88e30e1e8f41667d794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO463RM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLl8yRnGcCSwYXSSOo8%2BtcQUXlkDBsleSJiRWAJ2XLkAIges332ufsOIamEff5wvyHVLOGwnj4FfgmO2Uyl5nr1Cwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICSc9C69FUJT41K6SrcA4vve0Lrxk%2BsB18FGAx34Ki94CZv2nhoutF%2B9jFenDv50tjEdoQ%2BIUKYDogG%2Bf3llyripEs%2By92C7zIeZVqirbS9ErbE6zkfYNvLN%2Buupln5Zr0Q2h0j9DON8kByEwjBntdzk19WMj2JZST0WMkBsQT8hlU2pORkV8s%2FGNIZmfNVSbTHCP3pMB1XhH%2BXYaF3youXDfQwYR9tMcAJh%2FEecDm0I9rAh4SHwey7B8C%2FThKt5GxnykD0JmpR3LsiPckqZrCkUC4cZaekDEnWTFJxpVcCju014x3CIbyYX%2BHoCDrUUB9XYyhOkPExaO%2BWnXV8H1qyum24r8AuYU8L04ScYao7oLZLnh6YvM9PC2XzWiiz6Zz9wLYRvWASY8jss9jQi%2FwIGwPpg4cdUGZSJ9BYSh0BUHJaD%2BTjGKFXvrZWGCR7sDA%2F8lCmE7lp434i8w3rNrUhrv6%2BpUgx%2Fs56ZmZMsEu1KGdUURJ7enTlETv3WgFcd%2Bg16nq1oRPML1XoicJxIsBw9lgoGmvkCYqTBIwUOR8zE6D3%2FfMfEGApr0c4Ficv22OGUUCqqrYOaMgaEenU1AY4hRu3nxEKLC1yJCheW207%2FI5Ga6CBOyABoaLm69HjuJrLFw6J5mJ2qAKPMMvKqcMGOqUBxrRzU3VMN%2B5Q3hrQNK7AP09PdP473Z47gFVXk4Cv%2FllgogUdPBB8OsOHORHMS0QLkOz%2FjKlvhqV2lkA8wfBPEitw8VEH4MElw7qSvP2kc9qQmEYikVL1%2FBXD0LGT1IOAw6evLx3B10z4cSaGi%2FDH1HHJCTKgk6fqJQlraZVdIq5Hkc07a8TFO1pHO8bEwPKt8QDv09%2BCnPJpngXdK%2FTVq87RXDtM&X-Amz-Signature=fb1ba1fad28e43f5a73485128cbc1d172cc31f07e135e1f5f9baae23e5493ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FO463RM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCLl8yRnGcCSwYXSSOo8%2BtcQUXlkDBsleSJiRWAJ2XLkAIges332ufsOIamEff5wvyHVLOGwnj4FfgmO2Uyl5nr1Cwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDICSc9C69FUJT41K6SrcA4vve0Lrxk%2BsB18FGAx34Ki94CZv2nhoutF%2B9jFenDv50tjEdoQ%2BIUKYDogG%2Bf3llyripEs%2By92C7zIeZVqirbS9ErbE6zkfYNvLN%2Buupln5Zr0Q2h0j9DON8kByEwjBntdzk19WMj2JZST0WMkBsQT8hlU2pORkV8s%2FGNIZmfNVSbTHCP3pMB1XhH%2BXYaF3youXDfQwYR9tMcAJh%2FEecDm0I9rAh4SHwey7B8C%2FThKt5GxnykD0JmpR3LsiPckqZrCkUC4cZaekDEnWTFJxpVcCju014x3CIbyYX%2BHoCDrUUB9XYyhOkPExaO%2BWnXV8H1qyum24r8AuYU8L04ScYao7oLZLnh6YvM9PC2XzWiiz6Zz9wLYRvWASY8jss9jQi%2FwIGwPpg4cdUGZSJ9BYSh0BUHJaD%2BTjGKFXvrZWGCR7sDA%2F8lCmE7lp434i8w3rNrUhrv6%2BpUgx%2Fs56ZmZMsEu1KGdUURJ7enTlETv3WgFcd%2Bg16nq1oRPML1XoicJxIsBw9lgoGmvkCYqTBIwUOR8zE6D3%2FfMfEGApr0c4Ficv22OGUUCqqrYOaMgaEenU1AY4hRu3nxEKLC1yJCheW207%2FI5Ga6CBOyABoaLm69HjuJrLFw6J5mJ2qAKPMMvKqcMGOqUBxrRzU3VMN%2B5Q3hrQNK7AP09PdP473Z47gFVXk4Cv%2FllgogUdPBB8OsOHORHMS0QLkOz%2FjKlvhqV2lkA8wfBPEitw8VEH4MElw7qSvP2kc9qQmEYikVL1%2FBXD0LGT1IOAw6evLx3B10z4cSaGi%2FDH1HHJCTKgk6fqJQlraZVdIq5Hkc07a8TFO1pHO8bEwPKt8QDv09%2BCnPJpngXdK%2FTVq87RXDtM&X-Amz-Signature=fa5121f8c26dde6d7860545a44e7349c35ed9e92b2b4eaab004dec5fa5b4ae4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
