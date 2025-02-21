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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L3GIOG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc12IcsdhY6aE9%2FWmZlele4RXL9GnXmA7ukP%2FbcvTAjQIhAMdgGvpoW69iyjVY76h77yBv7ysAIWM8gSPyPrlqwNnSKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrpF3b0XCP%2BrKB6gq3AN4tR%2FKKPi1ETw10N4vshWRWzTyTEb3SRqMQKNURVJTyhaauvky1Zs1GpsNy6POvXrqtDxIo7Z18%2BgYYojDc0K2Ef8S26QSZL0u3K3PeOE4nNvvViFzomdSa%2B%2F0RZN%2FadQAGW6HOrxuNR8GhF%2FAyvGU0oCaXj3Q284IhSHc%2F1INIAyjXSOyoOzJjwfgQ44CcQimDM3lJMV3MMzCclyzsNR5hXGGztNTu7JwLA2sVkRKlUljiWItqtPvfpAJ%2F4jXaG3UFtSqel4wdn7qnA2DFs2VupM%2BvKcHthJcbyjgD%2B0ML2EvzrM0kD2C31t1Nd%2BNes416gKHntX7Up7Hu6gxfTrW9KCOHU69nmvI4VmwFX6kx%2F0NlvZPCtQXDQ76Hxso7JiPUIg1RCR6fWkIlcGILEjc%2BFQNeXZf1rYNGIIOokOPNDPjAfeYw9GG2Rp0AbMrJOCuNmGG6wHqjE4eJc7xRTZEhTHQsTv9xk5sI1dHxu46hCp8y1HfFbVbnlUDZInsbE5VGsgP2o%2Fe%2BY1z7e5rDsCLxtQe2x6MSHcPSW%2BWkUY8tMDsgffYnOgYDYaA5D5mKX9EGr44jY2Xbj6PwQ8NFACKV4TxB1AFpLnxrvr4Iq9%2FY85VQLix9%2Bn6kZDEqzDi3eC9BjqkAUaxmgu%2FB2a3WGDktnwMRDJUlW95zFflf03o6ZldDwUnzzKZ1ZKhunW3q2%2FQvzgTo3PA9Rzn4a8JXpSWxu9rc4SEjVJAHisYzT1Uwb1FAswJ9Ayd5ZIR7yk%2BuFgip50zVflEEpfDKRfjmTczEsyOx0e63gObQ0kRhBH%2BcdMngHXrRxvP3LqIOwE2%2F%2BCcVC5FLcSfaAPgdaPiaRoWbvYSpY7hZaJO&X-Amz-Signature=d6e46f48ecddcf91d1aef7c029283063c977c1357f46cef14339ed3138dcf42a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L3GIOG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc12IcsdhY6aE9%2FWmZlele4RXL9GnXmA7ukP%2FbcvTAjQIhAMdgGvpoW69iyjVY76h77yBv7ysAIWM8gSPyPrlqwNnSKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrpF3b0XCP%2BrKB6gq3AN4tR%2FKKPi1ETw10N4vshWRWzTyTEb3SRqMQKNURVJTyhaauvky1Zs1GpsNy6POvXrqtDxIo7Z18%2BgYYojDc0K2Ef8S26QSZL0u3K3PeOE4nNvvViFzomdSa%2B%2F0RZN%2FadQAGW6HOrxuNR8GhF%2FAyvGU0oCaXj3Q284IhSHc%2F1INIAyjXSOyoOzJjwfgQ44CcQimDM3lJMV3MMzCclyzsNR5hXGGztNTu7JwLA2sVkRKlUljiWItqtPvfpAJ%2F4jXaG3UFtSqel4wdn7qnA2DFs2VupM%2BvKcHthJcbyjgD%2B0ML2EvzrM0kD2C31t1Nd%2BNes416gKHntX7Up7Hu6gxfTrW9KCOHU69nmvI4VmwFX6kx%2F0NlvZPCtQXDQ76Hxso7JiPUIg1RCR6fWkIlcGILEjc%2BFQNeXZf1rYNGIIOokOPNDPjAfeYw9GG2Rp0AbMrJOCuNmGG6wHqjE4eJc7xRTZEhTHQsTv9xk5sI1dHxu46hCp8y1HfFbVbnlUDZInsbE5VGsgP2o%2Fe%2BY1z7e5rDsCLxtQe2x6MSHcPSW%2BWkUY8tMDsgffYnOgYDYaA5D5mKX9EGr44jY2Xbj6PwQ8NFACKV4TxB1AFpLnxrvr4Iq9%2FY85VQLix9%2Bn6kZDEqzDi3eC9BjqkAUaxmgu%2FB2a3WGDktnwMRDJUlW95zFflf03o6ZldDwUnzzKZ1ZKhunW3q2%2FQvzgTo3PA9Rzn4a8JXpSWxu9rc4SEjVJAHisYzT1Uwb1FAswJ9Ayd5ZIR7yk%2BuFgip50zVflEEpfDKRfjmTczEsyOx0e63gObQ0kRhBH%2BcdMngHXrRxvP3LqIOwE2%2F%2BCcVC5FLcSfaAPgdaPiaRoWbvYSpY7hZaJO&X-Amz-Signature=3c54088a6c591186c48be73f88c778b2e3a6d171b3bff874fea3e3a0f5807844&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L3GIOG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc12IcsdhY6aE9%2FWmZlele4RXL9GnXmA7ukP%2FbcvTAjQIhAMdgGvpoW69iyjVY76h77yBv7ysAIWM8gSPyPrlqwNnSKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrpF3b0XCP%2BrKB6gq3AN4tR%2FKKPi1ETw10N4vshWRWzTyTEb3SRqMQKNURVJTyhaauvky1Zs1GpsNy6POvXrqtDxIo7Z18%2BgYYojDc0K2Ef8S26QSZL0u3K3PeOE4nNvvViFzomdSa%2B%2F0RZN%2FadQAGW6HOrxuNR8GhF%2FAyvGU0oCaXj3Q284IhSHc%2F1INIAyjXSOyoOzJjwfgQ44CcQimDM3lJMV3MMzCclyzsNR5hXGGztNTu7JwLA2sVkRKlUljiWItqtPvfpAJ%2F4jXaG3UFtSqel4wdn7qnA2DFs2VupM%2BvKcHthJcbyjgD%2B0ML2EvzrM0kD2C31t1Nd%2BNes416gKHntX7Up7Hu6gxfTrW9KCOHU69nmvI4VmwFX6kx%2F0NlvZPCtQXDQ76Hxso7JiPUIg1RCR6fWkIlcGILEjc%2BFQNeXZf1rYNGIIOokOPNDPjAfeYw9GG2Rp0AbMrJOCuNmGG6wHqjE4eJc7xRTZEhTHQsTv9xk5sI1dHxu46hCp8y1HfFbVbnlUDZInsbE5VGsgP2o%2Fe%2BY1z7e5rDsCLxtQe2x6MSHcPSW%2BWkUY8tMDsgffYnOgYDYaA5D5mKX9EGr44jY2Xbj6PwQ8NFACKV4TxB1AFpLnxrvr4Iq9%2FY85VQLix9%2Bn6kZDEqzDi3eC9BjqkAUaxmgu%2FB2a3WGDktnwMRDJUlW95zFflf03o6ZldDwUnzzKZ1ZKhunW3q2%2FQvzgTo3PA9Rzn4a8JXpSWxu9rc4SEjVJAHisYzT1Uwb1FAswJ9Ayd5ZIR7yk%2BuFgip50zVflEEpfDKRfjmTczEsyOx0e63gObQ0kRhBH%2BcdMngHXrRxvP3LqIOwE2%2F%2BCcVC5FLcSfaAPgdaPiaRoWbvYSpY7hZaJO&X-Amz-Signature=6d8811ffd54003daf0292d9de1bddf3ad2fadf83e0d96ab7f7eb34b25e7da549&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L3GIOG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc12IcsdhY6aE9%2FWmZlele4RXL9GnXmA7ukP%2FbcvTAjQIhAMdgGvpoW69iyjVY76h77yBv7ysAIWM8gSPyPrlqwNnSKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrpF3b0XCP%2BrKB6gq3AN4tR%2FKKPi1ETw10N4vshWRWzTyTEb3SRqMQKNURVJTyhaauvky1Zs1GpsNy6POvXrqtDxIo7Z18%2BgYYojDc0K2Ef8S26QSZL0u3K3PeOE4nNvvViFzomdSa%2B%2F0RZN%2FadQAGW6HOrxuNR8GhF%2FAyvGU0oCaXj3Q284IhSHc%2F1INIAyjXSOyoOzJjwfgQ44CcQimDM3lJMV3MMzCclyzsNR5hXGGztNTu7JwLA2sVkRKlUljiWItqtPvfpAJ%2F4jXaG3UFtSqel4wdn7qnA2DFs2VupM%2BvKcHthJcbyjgD%2B0ML2EvzrM0kD2C31t1Nd%2BNes416gKHntX7Up7Hu6gxfTrW9KCOHU69nmvI4VmwFX6kx%2F0NlvZPCtQXDQ76Hxso7JiPUIg1RCR6fWkIlcGILEjc%2BFQNeXZf1rYNGIIOokOPNDPjAfeYw9GG2Rp0AbMrJOCuNmGG6wHqjE4eJc7xRTZEhTHQsTv9xk5sI1dHxu46hCp8y1HfFbVbnlUDZInsbE5VGsgP2o%2Fe%2BY1z7e5rDsCLxtQe2x6MSHcPSW%2BWkUY8tMDsgffYnOgYDYaA5D5mKX9EGr44jY2Xbj6PwQ8NFACKV4TxB1AFpLnxrvr4Iq9%2FY85VQLix9%2Bn6kZDEqzDi3eC9BjqkAUaxmgu%2FB2a3WGDktnwMRDJUlW95zFflf03o6ZldDwUnzzKZ1ZKhunW3q2%2FQvzgTo3PA9Rzn4a8JXpSWxu9rc4SEjVJAHisYzT1Uwb1FAswJ9Ayd5ZIR7yk%2BuFgip50zVflEEpfDKRfjmTczEsyOx0e63gObQ0kRhBH%2BcdMngHXrRxvP3LqIOwE2%2F%2BCcVC5FLcSfaAPgdaPiaRoWbvYSpY7hZaJO&X-Amz-Signature=6d56c829ade21481ae810fda5ed5b2f646dfcb37bac26234d7b20d4dde7cf9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L3GIOG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc12IcsdhY6aE9%2FWmZlele4RXL9GnXmA7ukP%2FbcvTAjQIhAMdgGvpoW69iyjVY76h77yBv7ysAIWM8gSPyPrlqwNnSKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrpF3b0XCP%2BrKB6gq3AN4tR%2FKKPi1ETw10N4vshWRWzTyTEb3SRqMQKNURVJTyhaauvky1Zs1GpsNy6POvXrqtDxIo7Z18%2BgYYojDc0K2Ef8S26QSZL0u3K3PeOE4nNvvViFzomdSa%2B%2F0RZN%2FadQAGW6HOrxuNR8GhF%2FAyvGU0oCaXj3Q284IhSHc%2F1INIAyjXSOyoOzJjwfgQ44CcQimDM3lJMV3MMzCclyzsNR5hXGGztNTu7JwLA2sVkRKlUljiWItqtPvfpAJ%2F4jXaG3UFtSqel4wdn7qnA2DFs2VupM%2BvKcHthJcbyjgD%2B0ML2EvzrM0kD2C31t1Nd%2BNes416gKHntX7Up7Hu6gxfTrW9KCOHU69nmvI4VmwFX6kx%2F0NlvZPCtQXDQ76Hxso7JiPUIg1RCR6fWkIlcGILEjc%2BFQNeXZf1rYNGIIOokOPNDPjAfeYw9GG2Rp0AbMrJOCuNmGG6wHqjE4eJc7xRTZEhTHQsTv9xk5sI1dHxu46hCp8y1HfFbVbnlUDZInsbE5VGsgP2o%2Fe%2BY1z7e5rDsCLxtQe2x6MSHcPSW%2BWkUY8tMDsgffYnOgYDYaA5D5mKX9EGr44jY2Xbj6PwQ8NFACKV4TxB1AFpLnxrvr4Iq9%2FY85VQLix9%2Bn6kZDEqzDi3eC9BjqkAUaxmgu%2FB2a3WGDktnwMRDJUlW95zFflf03o6ZldDwUnzzKZ1ZKhunW3q2%2FQvzgTo3PA9Rzn4a8JXpSWxu9rc4SEjVJAHisYzT1Uwb1FAswJ9Ayd5ZIR7yk%2BuFgip50zVflEEpfDKRfjmTczEsyOx0e63gObQ0kRhBH%2BcdMngHXrRxvP3LqIOwE2%2F%2BCcVC5FLcSfaAPgdaPiaRoWbvYSpY7hZaJO&X-Amz-Signature=10dfc808e24ef9920e0978a0763be85cbb20da1890dfc19e9a48091ccaf58e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L3GIOG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc12IcsdhY6aE9%2FWmZlele4RXL9GnXmA7ukP%2FbcvTAjQIhAMdgGvpoW69iyjVY76h77yBv7ysAIWM8gSPyPrlqwNnSKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBrpF3b0XCP%2BrKB6gq3AN4tR%2FKKPi1ETw10N4vshWRWzTyTEb3SRqMQKNURVJTyhaauvky1Zs1GpsNy6POvXrqtDxIo7Z18%2BgYYojDc0K2Ef8S26QSZL0u3K3PeOE4nNvvViFzomdSa%2B%2F0RZN%2FadQAGW6HOrxuNR8GhF%2FAyvGU0oCaXj3Q284IhSHc%2F1INIAyjXSOyoOzJjwfgQ44CcQimDM3lJMV3MMzCclyzsNR5hXGGztNTu7JwLA2sVkRKlUljiWItqtPvfpAJ%2F4jXaG3UFtSqel4wdn7qnA2DFs2VupM%2BvKcHthJcbyjgD%2B0ML2EvzrM0kD2C31t1Nd%2BNes416gKHntX7Up7Hu6gxfTrW9KCOHU69nmvI4VmwFX6kx%2F0NlvZPCtQXDQ76Hxso7JiPUIg1RCR6fWkIlcGILEjc%2BFQNeXZf1rYNGIIOokOPNDPjAfeYw9GG2Rp0AbMrJOCuNmGG6wHqjE4eJc7xRTZEhTHQsTv9xk5sI1dHxu46hCp8y1HfFbVbnlUDZInsbE5VGsgP2o%2Fe%2BY1z7e5rDsCLxtQe2x6MSHcPSW%2BWkUY8tMDsgffYnOgYDYaA5D5mKX9EGr44jY2Xbj6PwQ8NFACKV4TxB1AFpLnxrvr4Iq9%2FY85VQLix9%2Bn6kZDEqzDi3eC9BjqkAUaxmgu%2FB2a3WGDktnwMRDJUlW95zFflf03o6ZldDwUnzzKZ1ZKhunW3q2%2FQvzgTo3PA9Rzn4a8JXpSWxu9rc4SEjVJAHisYzT1Uwb1FAswJ9Ayd5ZIR7yk%2BuFgip50zVflEEpfDKRfjmTczEsyOx0e63gObQ0kRhBH%2BcdMngHXrRxvP3LqIOwE2%2F%2BCcVC5FLcSfaAPgdaPiaRoWbvYSpY7hZaJO&X-Amz-Signature=0f7632a9939bfea7fdee15f13148e9b93d850442a67e472016eb611de0923536&X-Amz-SignedHeaders=host&x-id=GetObject)
