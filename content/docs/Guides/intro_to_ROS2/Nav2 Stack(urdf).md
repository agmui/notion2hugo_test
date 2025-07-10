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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7S3K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJ6tCdK0L9fOSR9D0iTwy1d%2FMVJR6BpNK%2BSYe9%2BUZqxAiEAvS7I2DzobG26EwxdiobX3h3YxIBXRVJXqWnTOtdvMpIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGgXG3qhaJn8TNIYyrcA51sxMDOMfe%2BhNNl4IgcKQy12uPxq96LTRxIAaRP2fXyC%2B3UB5oDxEBt0ywr1pv%2B90R0sQpk4W02BXpecuIvmLo70MSHIEsg4wpI9k%2B7FnqoWCuWUJLlqjJtr2Zm%2B%2BU65UWIjqYBf%2F%2FiLq20fCyKKialsgDsEQEzHFIyxpWjpVTNsFN5aSUVz98Johpfq9FDNoGDu%2Beu3i4ooSg1Ffo8KyLK0alI9c7ABrFaB%2Bsh4UAYzkVaIv8fxu1ugexz0IEEWbKkQnKUV1yJrzj3I4%2By%2F2h08y6GznfQOJr8fd%2BuWW1n7z7vqZbw%2F%2FRwQtg%2FksYyBkKx9j3ZFBUkOzE%2FenNuA0%2F36QJyIhLzs%2FKZv0O0vdVplpIjBCkIky3K34yweVY%2BXygRCQ6ijHzomn68NYaaGSMtmU0CyGu7dXm42LSO%2BRRvSiCuFLX%2FYhzuQkJxR1GZ4eoQcKXIW6hv7QS%2Bi9fx%2BzoJuU6QWvrW7WgFmvHw3vE4X7ZtFHALQDMc8onrruG%2BcGfb2%2BDTxcd3c4M21IoXIH8gWRsxLIYQGUya8utEvKw0TNikOeW7hTk04Vj4Rd76kvjTnAIYSIYUs86r7kJXcavIyGdF3Zbktc9qCsu52oQyhMNtepfZIr43TQg9MMT4v8MGOqUBlZVsJtD2mqjWCPKEc2NXoBRc066wDnwQ8p0WZN37TIpH6M%2FMX%2FdUcVovNmtcNIebiNqKAL4k%2BuTpF5Sr4x9MOCmihjxQ5z03lh1eikuwCT00KUcUBS2qX1n6x4O%2F%2BDrQsEcXP%2BCpiQRrzf8FekZhByKBCfI%2B7gk2MT26E4MozwrDai4rH4lMhXHJ%2BdtonRGk%2F03MUV%2FG1iS1omlO1zL76fLVl5Ox&X-Amz-Signature=db5fa40af1db10ec77275d8f8f221ffefe4dc33a6a1d8c9c147b2bf8803537f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7S3K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJ6tCdK0L9fOSR9D0iTwy1d%2FMVJR6BpNK%2BSYe9%2BUZqxAiEAvS7I2DzobG26EwxdiobX3h3YxIBXRVJXqWnTOtdvMpIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGgXG3qhaJn8TNIYyrcA51sxMDOMfe%2BhNNl4IgcKQy12uPxq96LTRxIAaRP2fXyC%2B3UB5oDxEBt0ywr1pv%2B90R0sQpk4W02BXpecuIvmLo70MSHIEsg4wpI9k%2B7FnqoWCuWUJLlqjJtr2Zm%2B%2BU65UWIjqYBf%2F%2FiLq20fCyKKialsgDsEQEzHFIyxpWjpVTNsFN5aSUVz98Johpfq9FDNoGDu%2Beu3i4ooSg1Ffo8KyLK0alI9c7ABrFaB%2Bsh4UAYzkVaIv8fxu1ugexz0IEEWbKkQnKUV1yJrzj3I4%2By%2F2h08y6GznfQOJr8fd%2BuWW1n7z7vqZbw%2F%2FRwQtg%2FksYyBkKx9j3ZFBUkOzE%2FenNuA0%2F36QJyIhLzs%2FKZv0O0vdVplpIjBCkIky3K34yweVY%2BXygRCQ6ijHzomn68NYaaGSMtmU0CyGu7dXm42LSO%2BRRvSiCuFLX%2FYhzuQkJxR1GZ4eoQcKXIW6hv7QS%2Bi9fx%2BzoJuU6QWvrW7WgFmvHw3vE4X7ZtFHALQDMc8onrruG%2BcGfb2%2BDTxcd3c4M21IoXIH8gWRsxLIYQGUya8utEvKw0TNikOeW7hTk04Vj4Rd76kvjTnAIYSIYUs86r7kJXcavIyGdF3Zbktc9qCsu52oQyhMNtepfZIr43TQg9MMT4v8MGOqUBlZVsJtD2mqjWCPKEc2NXoBRc066wDnwQ8p0WZN37TIpH6M%2FMX%2FdUcVovNmtcNIebiNqKAL4k%2BuTpF5Sr4x9MOCmihjxQ5z03lh1eikuwCT00KUcUBS2qX1n6x4O%2F%2BDrQsEcXP%2BCpiQRrzf8FekZhByKBCfI%2B7gk2MT26E4MozwrDai4rH4lMhXHJ%2BdtonRGk%2F03MUV%2FG1iS1omlO1zL76fLVl5Ox&X-Amz-Signature=278fa6cb4bf6b161bc5a76c8f1ad4cfd9072593fba725e5c69af5e436a42a338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7S3K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJ6tCdK0L9fOSR9D0iTwy1d%2FMVJR6BpNK%2BSYe9%2BUZqxAiEAvS7I2DzobG26EwxdiobX3h3YxIBXRVJXqWnTOtdvMpIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGgXG3qhaJn8TNIYyrcA51sxMDOMfe%2BhNNl4IgcKQy12uPxq96LTRxIAaRP2fXyC%2B3UB5oDxEBt0ywr1pv%2B90R0sQpk4W02BXpecuIvmLo70MSHIEsg4wpI9k%2B7FnqoWCuWUJLlqjJtr2Zm%2B%2BU65UWIjqYBf%2F%2FiLq20fCyKKialsgDsEQEzHFIyxpWjpVTNsFN5aSUVz98Johpfq9FDNoGDu%2Beu3i4ooSg1Ffo8KyLK0alI9c7ABrFaB%2Bsh4UAYzkVaIv8fxu1ugexz0IEEWbKkQnKUV1yJrzj3I4%2By%2F2h08y6GznfQOJr8fd%2BuWW1n7z7vqZbw%2F%2FRwQtg%2FksYyBkKx9j3ZFBUkOzE%2FenNuA0%2F36QJyIhLzs%2FKZv0O0vdVplpIjBCkIky3K34yweVY%2BXygRCQ6ijHzomn68NYaaGSMtmU0CyGu7dXm42LSO%2BRRvSiCuFLX%2FYhzuQkJxR1GZ4eoQcKXIW6hv7QS%2Bi9fx%2BzoJuU6QWvrW7WgFmvHw3vE4X7ZtFHALQDMc8onrruG%2BcGfb2%2BDTxcd3c4M21IoXIH8gWRsxLIYQGUya8utEvKw0TNikOeW7hTk04Vj4Rd76kvjTnAIYSIYUs86r7kJXcavIyGdF3Zbktc9qCsu52oQyhMNtepfZIr43TQg9MMT4v8MGOqUBlZVsJtD2mqjWCPKEc2NXoBRc066wDnwQ8p0WZN37TIpH6M%2FMX%2FdUcVovNmtcNIebiNqKAL4k%2BuTpF5Sr4x9MOCmihjxQ5z03lh1eikuwCT00KUcUBS2qX1n6x4O%2F%2BDrQsEcXP%2BCpiQRrzf8FekZhByKBCfI%2B7gk2MT26E4MozwrDai4rH4lMhXHJ%2BdtonRGk%2F03MUV%2FG1iS1omlO1zL76fLVl5Ox&X-Amz-Signature=758020ef10a9d0749f7fa9bf7d7215ebb443cf96ffc4da89200212156adb8879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7S3K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJ6tCdK0L9fOSR9D0iTwy1d%2FMVJR6BpNK%2BSYe9%2BUZqxAiEAvS7I2DzobG26EwxdiobX3h3YxIBXRVJXqWnTOtdvMpIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGgXG3qhaJn8TNIYyrcA51sxMDOMfe%2BhNNl4IgcKQy12uPxq96LTRxIAaRP2fXyC%2B3UB5oDxEBt0ywr1pv%2B90R0sQpk4W02BXpecuIvmLo70MSHIEsg4wpI9k%2B7FnqoWCuWUJLlqjJtr2Zm%2B%2BU65UWIjqYBf%2F%2FiLq20fCyKKialsgDsEQEzHFIyxpWjpVTNsFN5aSUVz98Johpfq9FDNoGDu%2Beu3i4ooSg1Ffo8KyLK0alI9c7ABrFaB%2Bsh4UAYzkVaIv8fxu1ugexz0IEEWbKkQnKUV1yJrzj3I4%2By%2F2h08y6GznfQOJr8fd%2BuWW1n7z7vqZbw%2F%2FRwQtg%2FksYyBkKx9j3ZFBUkOzE%2FenNuA0%2F36QJyIhLzs%2FKZv0O0vdVplpIjBCkIky3K34yweVY%2BXygRCQ6ijHzomn68NYaaGSMtmU0CyGu7dXm42LSO%2BRRvSiCuFLX%2FYhzuQkJxR1GZ4eoQcKXIW6hv7QS%2Bi9fx%2BzoJuU6QWvrW7WgFmvHw3vE4X7ZtFHALQDMc8onrruG%2BcGfb2%2BDTxcd3c4M21IoXIH8gWRsxLIYQGUya8utEvKw0TNikOeW7hTk04Vj4Rd76kvjTnAIYSIYUs86r7kJXcavIyGdF3Zbktc9qCsu52oQyhMNtepfZIr43TQg9MMT4v8MGOqUBlZVsJtD2mqjWCPKEc2NXoBRc066wDnwQ8p0WZN37TIpH6M%2FMX%2FdUcVovNmtcNIebiNqKAL4k%2BuTpF5Sr4x9MOCmihjxQ5z03lh1eikuwCT00KUcUBS2qX1n6x4O%2F%2BDrQsEcXP%2BCpiQRrzf8FekZhByKBCfI%2B7gk2MT26E4MozwrDai4rH4lMhXHJ%2BdtonRGk%2F03MUV%2FG1iS1omlO1zL76fLVl5Ox&X-Amz-Signature=7598910b103a4b8557ab03f194102ee2c95a4147ed1dc43b20d78526e586e81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7S3K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJ6tCdK0L9fOSR9D0iTwy1d%2FMVJR6BpNK%2BSYe9%2BUZqxAiEAvS7I2DzobG26EwxdiobX3h3YxIBXRVJXqWnTOtdvMpIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGgXG3qhaJn8TNIYyrcA51sxMDOMfe%2BhNNl4IgcKQy12uPxq96LTRxIAaRP2fXyC%2B3UB5oDxEBt0ywr1pv%2B90R0sQpk4W02BXpecuIvmLo70MSHIEsg4wpI9k%2B7FnqoWCuWUJLlqjJtr2Zm%2B%2BU65UWIjqYBf%2F%2FiLq20fCyKKialsgDsEQEzHFIyxpWjpVTNsFN5aSUVz98Johpfq9FDNoGDu%2Beu3i4ooSg1Ffo8KyLK0alI9c7ABrFaB%2Bsh4UAYzkVaIv8fxu1ugexz0IEEWbKkQnKUV1yJrzj3I4%2By%2F2h08y6GznfQOJr8fd%2BuWW1n7z7vqZbw%2F%2FRwQtg%2FksYyBkKx9j3ZFBUkOzE%2FenNuA0%2F36QJyIhLzs%2FKZv0O0vdVplpIjBCkIky3K34yweVY%2BXygRCQ6ijHzomn68NYaaGSMtmU0CyGu7dXm42LSO%2BRRvSiCuFLX%2FYhzuQkJxR1GZ4eoQcKXIW6hv7QS%2Bi9fx%2BzoJuU6QWvrW7WgFmvHw3vE4X7ZtFHALQDMc8onrruG%2BcGfb2%2BDTxcd3c4M21IoXIH8gWRsxLIYQGUya8utEvKw0TNikOeW7hTk04Vj4Rd76kvjTnAIYSIYUs86r7kJXcavIyGdF3Zbktc9qCsu52oQyhMNtepfZIr43TQg9MMT4v8MGOqUBlZVsJtD2mqjWCPKEc2NXoBRc066wDnwQ8p0WZN37TIpH6M%2FMX%2FdUcVovNmtcNIebiNqKAL4k%2BuTpF5Sr4x9MOCmihjxQ5z03lh1eikuwCT00KUcUBS2qX1n6x4O%2F%2BDrQsEcXP%2BCpiQRrzf8FekZhByKBCfI%2B7gk2MT26E4MozwrDai4rH4lMhXHJ%2BdtonRGk%2F03MUV%2FG1iS1omlO1zL76fLVl5Ox&X-Amz-Signature=c77ae3ab27daba8f334784e86b9685a6eac3891ea2e2b8ed4d42ef5dcc9f24e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDE7S3K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJ6tCdK0L9fOSR9D0iTwy1d%2FMVJR6BpNK%2BSYe9%2BUZqxAiEAvS7I2DzobG26EwxdiobX3h3YxIBXRVJXqWnTOtdvMpIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGgXG3qhaJn8TNIYyrcA51sxMDOMfe%2BhNNl4IgcKQy12uPxq96LTRxIAaRP2fXyC%2B3UB5oDxEBt0ywr1pv%2B90R0sQpk4W02BXpecuIvmLo70MSHIEsg4wpI9k%2B7FnqoWCuWUJLlqjJtr2Zm%2B%2BU65UWIjqYBf%2F%2FiLq20fCyKKialsgDsEQEzHFIyxpWjpVTNsFN5aSUVz98Johpfq9FDNoGDu%2Beu3i4ooSg1Ffo8KyLK0alI9c7ABrFaB%2Bsh4UAYzkVaIv8fxu1ugexz0IEEWbKkQnKUV1yJrzj3I4%2By%2F2h08y6GznfQOJr8fd%2BuWW1n7z7vqZbw%2F%2FRwQtg%2FksYyBkKx9j3ZFBUkOzE%2FenNuA0%2F36QJyIhLzs%2FKZv0O0vdVplpIjBCkIky3K34yweVY%2BXygRCQ6ijHzomn68NYaaGSMtmU0CyGu7dXm42LSO%2BRRvSiCuFLX%2FYhzuQkJxR1GZ4eoQcKXIW6hv7QS%2Bi9fx%2BzoJuU6QWvrW7WgFmvHw3vE4X7ZtFHALQDMc8onrruG%2BcGfb2%2BDTxcd3c4M21IoXIH8gWRsxLIYQGUya8utEvKw0TNikOeW7hTk04Vj4Rd76kvjTnAIYSIYUs86r7kJXcavIyGdF3Zbktc9qCsu52oQyhMNtepfZIr43TQg9MMT4v8MGOqUBlZVsJtD2mqjWCPKEc2NXoBRc066wDnwQ8p0WZN37TIpH6M%2FMX%2FdUcVovNmtcNIebiNqKAL4k%2BuTpF5Sr4x9MOCmihjxQ5z03lh1eikuwCT00KUcUBS2qX1n6x4O%2F%2BDrQsEcXP%2BCpiQRrzf8FekZhByKBCfI%2B7gk2MT26E4MozwrDai4rH4lMhXHJ%2BdtonRGk%2F03MUV%2FG1iS1omlO1zL76fLVl5Ox&X-Amz-Signature=bf5ca9d2e0f789f81bfa2eb298520765b72fa8209277b8dde62f7411f7d2d3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
