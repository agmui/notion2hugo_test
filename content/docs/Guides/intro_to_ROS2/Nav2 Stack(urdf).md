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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMTEZC3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfy8WFLyMfLyNoYJrGFiiy0eRvtsi6wQYXLkQXPbpegIhAJrS499of0oSnhhHiUhyTZbH7%2ByBRGZ6FnJg0JKkRHAdKv8DCCcQABoMNjM3NDIzMTgzODA1IgyJfLqnPRxjhUf3daIq3AMHekeDkbFuxidbLjP%2Bx0cKqCNlznjxIPOxMnIEFzX3SP4MYK70bu96Tr%2BXv9flLDXyT1L7F6YfKojJeVGWBBCs5ZfW2YlBiQoRvbr4WxqfOmLQiRaNFqvIOeB4cwv6fqU1m21ofhyoy6ZeViavuFRio9gtWDwE3jy0Eh2og5SM2s7j%2FoeenbR0UkX%2FnfjVqajcoZBk7kx9sOqgQ0KK6R9cVsOS5WeSMxdOr0dOuhvmRWEDh73jHjJXZOM9GTZa1G75znaxOrF8boHiQarSRO%2Fxu8mcQnbpWOXAS%2FX%2BCdXYscp4APPcl9%2FIxUVZTbrBIoVQdc5xMN%2BfKrTbN1gQW1ah6MAn0rKCf5lNK44NOoq8NhO2KzXl9yJdsYXhgHcnx%2F51dlfiXsCy2FoMP%2BUw%2FvVliAjvXLsKP7sflHZS1sT6IiekcsKlETWaBBfqKy3epw3cKrlJys11IGUVmMpSuvAN5nsSsjMZGHpvn20V62uopwtkk04A8xqbn2N9i3rpTh2Y6kjwmvxF1wBENOrlr9e39QelGPrRjRVTGIlG8UyhmtWzL2k9cAoFYd6YoySRfoNYfqFKGtD1qKRFN6QjjkFLy9yI8vzXG40Xm7TJ%2F6TRSRLMmynBJIgkn0NNCzDrqru9BjqkAUJQwOMCwB69neAJ8l4dFJfoIhGEPDpU2ajL5Fr2%2BN4xZK8ewCc8QinpHfk7uDfBhOa1E0E9qcFf5p44PEGDyrtL1GfiAAfP5NihqJokgNLEGW%2BNsCXCH%2F%2BJq0RDFEaQaTQFCC078RWldB9GDX27XY82M3juAMXgqAzwKm51n8oDRC5m2TfrA70IoGeZWlNhxOrdqGYWymaecMWgIully7uCwP%2Fi&X-Amz-Signature=33ef3795bc140f56a5a568c0113ca9c6ad5563cb8695a4d9b33ead03b6ce9f31&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMTEZC3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfy8WFLyMfLyNoYJrGFiiy0eRvtsi6wQYXLkQXPbpegIhAJrS499of0oSnhhHiUhyTZbH7%2ByBRGZ6FnJg0JKkRHAdKv8DCCcQABoMNjM3NDIzMTgzODA1IgyJfLqnPRxjhUf3daIq3AMHekeDkbFuxidbLjP%2Bx0cKqCNlznjxIPOxMnIEFzX3SP4MYK70bu96Tr%2BXv9flLDXyT1L7F6YfKojJeVGWBBCs5ZfW2YlBiQoRvbr4WxqfOmLQiRaNFqvIOeB4cwv6fqU1m21ofhyoy6ZeViavuFRio9gtWDwE3jy0Eh2og5SM2s7j%2FoeenbR0UkX%2FnfjVqajcoZBk7kx9sOqgQ0KK6R9cVsOS5WeSMxdOr0dOuhvmRWEDh73jHjJXZOM9GTZa1G75znaxOrF8boHiQarSRO%2Fxu8mcQnbpWOXAS%2FX%2BCdXYscp4APPcl9%2FIxUVZTbrBIoVQdc5xMN%2BfKrTbN1gQW1ah6MAn0rKCf5lNK44NOoq8NhO2KzXl9yJdsYXhgHcnx%2F51dlfiXsCy2FoMP%2BUw%2FvVliAjvXLsKP7sflHZS1sT6IiekcsKlETWaBBfqKy3epw3cKrlJys11IGUVmMpSuvAN5nsSsjMZGHpvn20V62uopwtkk04A8xqbn2N9i3rpTh2Y6kjwmvxF1wBENOrlr9e39QelGPrRjRVTGIlG8UyhmtWzL2k9cAoFYd6YoySRfoNYfqFKGtD1qKRFN6QjjkFLy9yI8vzXG40Xm7TJ%2F6TRSRLMmynBJIgkn0NNCzDrqru9BjqkAUJQwOMCwB69neAJ8l4dFJfoIhGEPDpU2ajL5Fr2%2BN4xZK8ewCc8QinpHfk7uDfBhOa1E0E9qcFf5p44PEGDyrtL1GfiAAfP5NihqJokgNLEGW%2BNsCXCH%2F%2BJq0RDFEaQaTQFCC078RWldB9GDX27XY82M3juAMXgqAzwKm51n8oDRC5m2TfrA70IoGeZWlNhxOrdqGYWymaecMWgIully7uCwP%2Fi&X-Amz-Signature=625e622add9ea9bc09838ce93313b29139ebaeea020b26089844b9e0d847f8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMTEZC3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfy8WFLyMfLyNoYJrGFiiy0eRvtsi6wQYXLkQXPbpegIhAJrS499of0oSnhhHiUhyTZbH7%2ByBRGZ6FnJg0JKkRHAdKv8DCCcQABoMNjM3NDIzMTgzODA1IgyJfLqnPRxjhUf3daIq3AMHekeDkbFuxidbLjP%2Bx0cKqCNlznjxIPOxMnIEFzX3SP4MYK70bu96Tr%2BXv9flLDXyT1L7F6YfKojJeVGWBBCs5ZfW2YlBiQoRvbr4WxqfOmLQiRaNFqvIOeB4cwv6fqU1m21ofhyoy6ZeViavuFRio9gtWDwE3jy0Eh2og5SM2s7j%2FoeenbR0UkX%2FnfjVqajcoZBk7kx9sOqgQ0KK6R9cVsOS5WeSMxdOr0dOuhvmRWEDh73jHjJXZOM9GTZa1G75znaxOrF8boHiQarSRO%2Fxu8mcQnbpWOXAS%2FX%2BCdXYscp4APPcl9%2FIxUVZTbrBIoVQdc5xMN%2BfKrTbN1gQW1ah6MAn0rKCf5lNK44NOoq8NhO2KzXl9yJdsYXhgHcnx%2F51dlfiXsCy2FoMP%2BUw%2FvVliAjvXLsKP7sflHZS1sT6IiekcsKlETWaBBfqKy3epw3cKrlJys11IGUVmMpSuvAN5nsSsjMZGHpvn20V62uopwtkk04A8xqbn2N9i3rpTh2Y6kjwmvxF1wBENOrlr9e39QelGPrRjRVTGIlG8UyhmtWzL2k9cAoFYd6YoySRfoNYfqFKGtD1qKRFN6QjjkFLy9yI8vzXG40Xm7TJ%2F6TRSRLMmynBJIgkn0NNCzDrqru9BjqkAUJQwOMCwB69neAJ8l4dFJfoIhGEPDpU2ajL5Fr2%2BN4xZK8ewCc8QinpHfk7uDfBhOa1E0E9qcFf5p44PEGDyrtL1GfiAAfP5NihqJokgNLEGW%2BNsCXCH%2F%2BJq0RDFEaQaTQFCC078RWldB9GDX27XY82M3juAMXgqAzwKm51n8oDRC5m2TfrA70IoGeZWlNhxOrdqGYWymaecMWgIully7uCwP%2Fi&X-Amz-Signature=d9c729b2ca488bc5ccaa6ded2c77e70cb5b6f5ea26c8406d3198f45e407e3ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMTEZC3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfy8WFLyMfLyNoYJrGFiiy0eRvtsi6wQYXLkQXPbpegIhAJrS499of0oSnhhHiUhyTZbH7%2ByBRGZ6FnJg0JKkRHAdKv8DCCcQABoMNjM3NDIzMTgzODA1IgyJfLqnPRxjhUf3daIq3AMHekeDkbFuxidbLjP%2Bx0cKqCNlznjxIPOxMnIEFzX3SP4MYK70bu96Tr%2BXv9flLDXyT1L7F6YfKojJeVGWBBCs5ZfW2YlBiQoRvbr4WxqfOmLQiRaNFqvIOeB4cwv6fqU1m21ofhyoy6ZeViavuFRio9gtWDwE3jy0Eh2og5SM2s7j%2FoeenbR0UkX%2FnfjVqajcoZBk7kx9sOqgQ0KK6R9cVsOS5WeSMxdOr0dOuhvmRWEDh73jHjJXZOM9GTZa1G75znaxOrF8boHiQarSRO%2Fxu8mcQnbpWOXAS%2FX%2BCdXYscp4APPcl9%2FIxUVZTbrBIoVQdc5xMN%2BfKrTbN1gQW1ah6MAn0rKCf5lNK44NOoq8NhO2KzXl9yJdsYXhgHcnx%2F51dlfiXsCy2FoMP%2BUw%2FvVliAjvXLsKP7sflHZS1sT6IiekcsKlETWaBBfqKy3epw3cKrlJys11IGUVmMpSuvAN5nsSsjMZGHpvn20V62uopwtkk04A8xqbn2N9i3rpTh2Y6kjwmvxF1wBENOrlr9e39QelGPrRjRVTGIlG8UyhmtWzL2k9cAoFYd6YoySRfoNYfqFKGtD1qKRFN6QjjkFLy9yI8vzXG40Xm7TJ%2F6TRSRLMmynBJIgkn0NNCzDrqru9BjqkAUJQwOMCwB69neAJ8l4dFJfoIhGEPDpU2ajL5Fr2%2BN4xZK8ewCc8QinpHfk7uDfBhOa1E0E9qcFf5p44PEGDyrtL1GfiAAfP5NihqJokgNLEGW%2BNsCXCH%2F%2BJq0RDFEaQaTQFCC078RWldB9GDX27XY82M3juAMXgqAzwKm51n8oDRC5m2TfrA70IoGeZWlNhxOrdqGYWymaecMWgIully7uCwP%2Fi&X-Amz-Signature=c465f9bfea223ec9e5c10b34bf0149065a095a502f711d303af3588d790b9a39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMTEZC3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfy8WFLyMfLyNoYJrGFiiy0eRvtsi6wQYXLkQXPbpegIhAJrS499of0oSnhhHiUhyTZbH7%2ByBRGZ6FnJg0JKkRHAdKv8DCCcQABoMNjM3NDIzMTgzODA1IgyJfLqnPRxjhUf3daIq3AMHekeDkbFuxidbLjP%2Bx0cKqCNlznjxIPOxMnIEFzX3SP4MYK70bu96Tr%2BXv9flLDXyT1L7F6YfKojJeVGWBBCs5ZfW2YlBiQoRvbr4WxqfOmLQiRaNFqvIOeB4cwv6fqU1m21ofhyoy6ZeViavuFRio9gtWDwE3jy0Eh2og5SM2s7j%2FoeenbR0UkX%2FnfjVqajcoZBk7kx9sOqgQ0KK6R9cVsOS5WeSMxdOr0dOuhvmRWEDh73jHjJXZOM9GTZa1G75znaxOrF8boHiQarSRO%2Fxu8mcQnbpWOXAS%2FX%2BCdXYscp4APPcl9%2FIxUVZTbrBIoVQdc5xMN%2BfKrTbN1gQW1ah6MAn0rKCf5lNK44NOoq8NhO2KzXl9yJdsYXhgHcnx%2F51dlfiXsCy2FoMP%2BUw%2FvVliAjvXLsKP7sflHZS1sT6IiekcsKlETWaBBfqKy3epw3cKrlJys11IGUVmMpSuvAN5nsSsjMZGHpvn20V62uopwtkk04A8xqbn2N9i3rpTh2Y6kjwmvxF1wBENOrlr9e39QelGPrRjRVTGIlG8UyhmtWzL2k9cAoFYd6YoySRfoNYfqFKGtD1qKRFN6QjjkFLy9yI8vzXG40Xm7TJ%2F6TRSRLMmynBJIgkn0NNCzDrqru9BjqkAUJQwOMCwB69neAJ8l4dFJfoIhGEPDpU2ajL5Fr2%2BN4xZK8ewCc8QinpHfk7uDfBhOa1E0E9qcFf5p44PEGDyrtL1GfiAAfP5NihqJokgNLEGW%2BNsCXCH%2F%2BJq0RDFEaQaTQFCC078RWldB9GDX27XY82M3juAMXgqAzwKm51n8oDRC5m2TfrA70IoGeZWlNhxOrdqGYWymaecMWgIully7uCwP%2Fi&X-Amz-Signature=761353b0d1ab5fd54cce87c2f220ef3824373c2a6010c597becb2dab66999660&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAMTEZC3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLfy8WFLyMfLyNoYJrGFiiy0eRvtsi6wQYXLkQXPbpegIhAJrS499of0oSnhhHiUhyTZbH7%2ByBRGZ6FnJg0JKkRHAdKv8DCCcQABoMNjM3NDIzMTgzODA1IgyJfLqnPRxjhUf3daIq3AMHekeDkbFuxidbLjP%2Bx0cKqCNlznjxIPOxMnIEFzX3SP4MYK70bu96Tr%2BXv9flLDXyT1L7F6YfKojJeVGWBBCs5ZfW2YlBiQoRvbr4WxqfOmLQiRaNFqvIOeB4cwv6fqU1m21ofhyoy6ZeViavuFRio9gtWDwE3jy0Eh2og5SM2s7j%2FoeenbR0UkX%2FnfjVqajcoZBk7kx9sOqgQ0KK6R9cVsOS5WeSMxdOr0dOuhvmRWEDh73jHjJXZOM9GTZa1G75znaxOrF8boHiQarSRO%2Fxu8mcQnbpWOXAS%2FX%2BCdXYscp4APPcl9%2FIxUVZTbrBIoVQdc5xMN%2BfKrTbN1gQW1ah6MAn0rKCf5lNK44NOoq8NhO2KzXl9yJdsYXhgHcnx%2F51dlfiXsCy2FoMP%2BUw%2FvVliAjvXLsKP7sflHZS1sT6IiekcsKlETWaBBfqKy3epw3cKrlJys11IGUVmMpSuvAN5nsSsjMZGHpvn20V62uopwtkk04A8xqbn2N9i3rpTh2Y6kjwmvxF1wBENOrlr9e39QelGPrRjRVTGIlG8UyhmtWzL2k9cAoFYd6YoySRfoNYfqFKGtD1qKRFN6QjjkFLy9yI8vzXG40Xm7TJ%2F6TRSRLMmynBJIgkn0NNCzDrqru9BjqkAUJQwOMCwB69neAJ8l4dFJfoIhGEPDpU2ajL5Fr2%2BN4xZK8ewCc8QinpHfk7uDfBhOa1E0E9qcFf5p44PEGDyrtL1GfiAAfP5NihqJokgNLEGW%2BNsCXCH%2F%2BJq0RDFEaQaTQFCC078RWldB9GDX27XY82M3juAMXgqAzwKm51n8oDRC5m2TfrA70IoGeZWlNhxOrdqGYWymaecMWgIully7uCwP%2Fi&X-Amz-Signature=423b0c49960ca83784efd435b78e897d25cb8aa61ea1c80cf1fd64d1bedc88ec&X-Amz-SignedHeaders=host&x-id=GetObject)
