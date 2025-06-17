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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQESOQUI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtQKBOSxkX0PkUJKqoS0TEAeiMGF1bMxx3XBwq1xd%2FwIhAOp9TqRY2kZdtvKUeFEPRGYuF3u9ENDhaRJ4IwzkMod0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwxWZ71wAAnAVB%2B3Hsq3AMqLkfNFxSKu3XZl0O9Rg30DRX1ybJkIl73hBvOdxSxx6HH3dOiibc0KJV3T1BHN0XVk9v%2FvfrPKdehfKNzMaLnOGdj%2BUrdb3OGygh0hoVdBGJiT2GZa6aPv06Mz7Oonio7RrVTNVk9%2BCJmhfLP0LPmdohBYMpjb%2FEZzT1HnLTPSFiZgklYcwea9TcfQf8GwqbELmGaIlmtdSFkohkgb07ZqJJMLcgzxWUUjhhgT470rXthAKSm0jBWCA%2BcnyWjVKg8Us9lX4oszp6hwkFzFixKTMFl%2FEX5RAFO9P%2F%2FpOC3KJYFfUp%2BXg3ZRPUPj%2BgbOlMcaH60FHm2BprXMkKOPJCyrOVYmbKq3mi2sH4Hw9QfgRkUBycQWE7qYwUCBVRzd8rHMM2J6GlGLjyKK9SqlxooBSSsPNaspNZ4DO63ZnG0nNL5QBQByYlo19NtGHypsySKu3hf%2B%2BeL1CVyjyis2ZuxGc0pdgBI%2FtW37m6nuTEQzZ%2FngKsC7Yu9opGjArqvc47jFQK03TmHrMCHkkdnXaOVddQqT6DDx2Vn6FqMpVKwR%2FwAf7nAOhAbAl8TH51wDR8GWUkogwH6tFBWgJnMclHbrketxDydkc3o%2BdMr8fk4et%2FTAuQBmufwoXwXVTCbicfCBjqkAV3uaBzVGozSHSK4B2HS%2FxW4xYLR1EnEsw5zXKQmQFalBkz4v1kQ15l8gXfKQSt8qcJ%2BiUl47dJNgsDZBGGmUO7yQe2b5s6VNHJV0D5Joa8hgnYlMsyiu2T6sHbNsN8lJ8BfI9XkORAttLEAnMEELLkMpXt9MS3w04xp0oqOh%2FL3vdWpEauVX1KBpkCe%2BIAiCIgk5%2FlNVGAeMKV2ZWtdNTgnGsOo&X-Amz-Signature=35524f725d1ca991dddec11adc3aefe285029ea7a5128bc797cf92aeac146169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQESOQUI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtQKBOSxkX0PkUJKqoS0TEAeiMGF1bMxx3XBwq1xd%2FwIhAOp9TqRY2kZdtvKUeFEPRGYuF3u9ENDhaRJ4IwzkMod0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwxWZ71wAAnAVB%2B3Hsq3AMqLkfNFxSKu3XZl0O9Rg30DRX1ybJkIl73hBvOdxSxx6HH3dOiibc0KJV3T1BHN0XVk9v%2FvfrPKdehfKNzMaLnOGdj%2BUrdb3OGygh0hoVdBGJiT2GZa6aPv06Mz7Oonio7RrVTNVk9%2BCJmhfLP0LPmdohBYMpjb%2FEZzT1HnLTPSFiZgklYcwea9TcfQf8GwqbELmGaIlmtdSFkohkgb07ZqJJMLcgzxWUUjhhgT470rXthAKSm0jBWCA%2BcnyWjVKg8Us9lX4oszp6hwkFzFixKTMFl%2FEX5RAFO9P%2F%2FpOC3KJYFfUp%2BXg3ZRPUPj%2BgbOlMcaH60FHm2BprXMkKOPJCyrOVYmbKq3mi2sH4Hw9QfgRkUBycQWE7qYwUCBVRzd8rHMM2J6GlGLjyKK9SqlxooBSSsPNaspNZ4DO63ZnG0nNL5QBQByYlo19NtGHypsySKu3hf%2B%2BeL1CVyjyis2ZuxGc0pdgBI%2FtW37m6nuTEQzZ%2FngKsC7Yu9opGjArqvc47jFQK03TmHrMCHkkdnXaOVddQqT6DDx2Vn6FqMpVKwR%2FwAf7nAOhAbAl8TH51wDR8GWUkogwH6tFBWgJnMclHbrketxDydkc3o%2BdMr8fk4et%2FTAuQBmufwoXwXVTCbicfCBjqkAV3uaBzVGozSHSK4B2HS%2FxW4xYLR1EnEsw5zXKQmQFalBkz4v1kQ15l8gXfKQSt8qcJ%2BiUl47dJNgsDZBGGmUO7yQe2b5s6VNHJV0D5Joa8hgnYlMsyiu2T6sHbNsN8lJ8BfI9XkORAttLEAnMEELLkMpXt9MS3w04xp0oqOh%2FL3vdWpEauVX1KBpkCe%2BIAiCIgk5%2FlNVGAeMKV2ZWtdNTgnGsOo&X-Amz-Signature=ae2a1b08d1e185afcd2954d79887563db5df6431cfd77ca4a4d4f0818fbd64d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQESOQUI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtQKBOSxkX0PkUJKqoS0TEAeiMGF1bMxx3XBwq1xd%2FwIhAOp9TqRY2kZdtvKUeFEPRGYuF3u9ENDhaRJ4IwzkMod0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwxWZ71wAAnAVB%2B3Hsq3AMqLkfNFxSKu3XZl0O9Rg30DRX1ybJkIl73hBvOdxSxx6HH3dOiibc0KJV3T1BHN0XVk9v%2FvfrPKdehfKNzMaLnOGdj%2BUrdb3OGygh0hoVdBGJiT2GZa6aPv06Mz7Oonio7RrVTNVk9%2BCJmhfLP0LPmdohBYMpjb%2FEZzT1HnLTPSFiZgklYcwea9TcfQf8GwqbELmGaIlmtdSFkohkgb07ZqJJMLcgzxWUUjhhgT470rXthAKSm0jBWCA%2BcnyWjVKg8Us9lX4oszp6hwkFzFixKTMFl%2FEX5RAFO9P%2F%2FpOC3KJYFfUp%2BXg3ZRPUPj%2BgbOlMcaH60FHm2BprXMkKOPJCyrOVYmbKq3mi2sH4Hw9QfgRkUBycQWE7qYwUCBVRzd8rHMM2J6GlGLjyKK9SqlxooBSSsPNaspNZ4DO63ZnG0nNL5QBQByYlo19NtGHypsySKu3hf%2B%2BeL1CVyjyis2ZuxGc0pdgBI%2FtW37m6nuTEQzZ%2FngKsC7Yu9opGjArqvc47jFQK03TmHrMCHkkdnXaOVddQqT6DDx2Vn6FqMpVKwR%2FwAf7nAOhAbAl8TH51wDR8GWUkogwH6tFBWgJnMclHbrketxDydkc3o%2BdMr8fk4et%2FTAuQBmufwoXwXVTCbicfCBjqkAV3uaBzVGozSHSK4B2HS%2FxW4xYLR1EnEsw5zXKQmQFalBkz4v1kQ15l8gXfKQSt8qcJ%2BiUl47dJNgsDZBGGmUO7yQe2b5s6VNHJV0D5Joa8hgnYlMsyiu2T6sHbNsN8lJ8BfI9XkORAttLEAnMEELLkMpXt9MS3w04xp0oqOh%2FL3vdWpEauVX1KBpkCe%2BIAiCIgk5%2FlNVGAeMKV2ZWtdNTgnGsOo&X-Amz-Signature=3ec6362ab4f18bc9f6f535a71b8c500f0ae106f8441ffce832f9e63866275a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQESOQUI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtQKBOSxkX0PkUJKqoS0TEAeiMGF1bMxx3XBwq1xd%2FwIhAOp9TqRY2kZdtvKUeFEPRGYuF3u9ENDhaRJ4IwzkMod0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwxWZ71wAAnAVB%2B3Hsq3AMqLkfNFxSKu3XZl0O9Rg30DRX1ybJkIl73hBvOdxSxx6HH3dOiibc0KJV3T1BHN0XVk9v%2FvfrPKdehfKNzMaLnOGdj%2BUrdb3OGygh0hoVdBGJiT2GZa6aPv06Mz7Oonio7RrVTNVk9%2BCJmhfLP0LPmdohBYMpjb%2FEZzT1HnLTPSFiZgklYcwea9TcfQf8GwqbELmGaIlmtdSFkohkgb07ZqJJMLcgzxWUUjhhgT470rXthAKSm0jBWCA%2BcnyWjVKg8Us9lX4oszp6hwkFzFixKTMFl%2FEX5RAFO9P%2F%2FpOC3KJYFfUp%2BXg3ZRPUPj%2BgbOlMcaH60FHm2BprXMkKOPJCyrOVYmbKq3mi2sH4Hw9QfgRkUBycQWE7qYwUCBVRzd8rHMM2J6GlGLjyKK9SqlxooBSSsPNaspNZ4DO63ZnG0nNL5QBQByYlo19NtGHypsySKu3hf%2B%2BeL1CVyjyis2ZuxGc0pdgBI%2FtW37m6nuTEQzZ%2FngKsC7Yu9opGjArqvc47jFQK03TmHrMCHkkdnXaOVddQqT6DDx2Vn6FqMpVKwR%2FwAf7nAOhAbAl8TH51wDR8GWUkogwH6tFBWgJnMclHbrketxDydkc3o%2BdMr8fk4et%2FTAuQBmufwoXwXVTCbicfCBjqkAV3uaBzVGozSHSK4B2HS%2FxW4xYLR1EnEsw5zXKQmQFalBkz4v1kQ15l8gXfKQSt8qcJ%2BiUl47dJNgsDZBGGmUO7yQe2b5s6VNHJV0D5Joa8hgnYlMsyiu2T6sHbNsN8lJ8BfI9XkORAttLEAnMEELLkMpXt9MS3w04xp0oqOh%2FL3vdWpEauVX1KBpkCe%2BIAiCIgk5%2FlNVGAeMKV2ZWtdNTgnGsOo&X-Amz-Signature=973b2272dfb0eaa284e2d7ffbde6e6412dc89ba6f2b81fa6e088b45adbd455d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQESOQUI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtQKBOSxkX0PkUJKqoS0TEAeiMGF1bMxx3XBwq1xd%2FwIhAOp9TqRY2kZdtvKUeFEPRGYuF3u9ENDhaRJ4IwzkMod0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwxWZ71wAAnAVB%2B3Hsq3AMqLkfNFxSKu3XZl0O9Rg30DRX1ybJkIl73hBvOdxSxx6HH3dOiibc0KJV3T1BHN0XVk9v%2FvfrPKdehfKNzMaLnOGdj%2BUrdb3OGygh0hoVdBGJiT2GZa6aPv06Mz7Oonio7RrVTNVk9%2BCJmhfLP0LPmdohBYMpjb%2FEZzT1HnLTPSFiZgklYcwea9TcfQf8GwqbELmGaIlmtdSFkohkgb07ZqJJMLcgzxWUUjhhgT470rXthAKSm0jBWCA%2BcnyWjVKg8Us9lX4oszp6hwkFzFixKTMFl%2FEX5RAFO9P%2F%2FpOC3KJYFfUp%2BXg3ZRPUPj%2BgbOlMcaH60FHm2BprXMkKOPJCyrOVYmbKq3mi2sH4Hw9QfgRkUBycQWE7qYwUCBVRzd8rHMM2J6GlGLjyKK9SqlxooBSSsPNaspNZ4DO63ZnG0nNL5QBQByYlo19NtGHypsySKu3hf%2B%2BeL1CVyjyis2ZuxGc0pdgBI%2FtW37m6nuTEQzZ%2FngKsC7Yu9opGjArqvc47jFQK03TmHrMCHkkdnXaOVddQqT6DDx2Vn6FqMpVKwR%2FwAf7nAOhAbAl8TH51wDR8GWUkogwH6tFBWgJnMclHbrketxDydkc3o%2BdMr8fk4et%2FTAuQBmufwoXwXVTCbicfCBjqkAV3uaBzVGozSHSK4B2HS%2FxW4xYLR1EnEsw5zXKQmQFalBkz4v1kQ15l8gXfKQSt8qcJ%2BiUl47dJNgsDZBGGmUO7yQe2b5s6VNHJV0D5Joa8hgnYlMsyiu2T6sHbNsN8lJ8BfI9XkORAttLEAnMEELLkMpXt9MS3w04xp0oqOh%2FL3vdWpEauVX1KBpkCe%2BIAiCIgk5%2FlNVGAeMKV2ZWtdNTgnGsOo&X-Amz-Signature=245e60c8e221dab131f73b317d72e480cb5f129fb8b5b5c615530f02ec7c2647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQESOQUI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtQKBOSxkX0PkUJKqoS0TEAeiMGF1bMxx3XBwq1xd%2FwIhAOp9TqRY2kZdtvKUeFEPRGYuF3u9ENDhaRJ4IwzkMod0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwxWZ71wAAnAVB%2B3Hsq3AMqLkfNFxSKu3XZl0O9Rg30DRX1ybJkIl73hBvOdxSxx6HH3dOiibc0KJV3T1BHN0XVk9v%2FvfrPKdehfKNzMaLnOGdj%2BUrdb3OGygh0hoVdBGJiT2GZa6aPv06Mz7Oonio7RrVTNVk9%2BCJmhfLP0LPmdohBYMpjb%2FEZzT1HnLTPSFiZgklYcwea9TcfQf8GwqbELmGaIlmtdSFkohkgb07ZqJJMLcgzxWUUjhhgT470rXthAKSm0jBWCA%2BcnyWjVKg8Us9lX4oszp6hwkFzFixKTMFl%2FEX5RAFO9P%2F%2FpOC3KJYFfUp%2BXg3ZRPUPj%2BgbOlMcaH60FHm2BprXMkKOPJCyrOVYmbKq3mi2sH4Hw9QfgRkUBycQWE7qYwUCBVRzd8rHMM2J6GlGLjyKK9SqlxooBSSsPNaspNZ4DO63ZnG0nNL5QBQByYlo19NtGHypsySKu3hf%2B%2BeL1CVyjyis2ZuxGc0pdgBI%2FtW37m6nuTEQzZ%2FngKsC7Yu9opGjArqvc47jFQK03TmHrMCHkkdnXaOVddQqT6DDx2Vn6FqMpVKwR%2FwAf7nAOhAbAl8TH51wDR8GWUkogwH6tFBWgJnMclHbrketxDydkc3o%2BdMr8fk4et%2FTAuQBmufwoXwXVTCbicfCBjqkAV3uaBzVGozSHSK4B2HS%2FxW4xYLR1EnEsw5zXKQmQFalBkz4v1kQ15l8gXfKQSt8qcJ%2BiUl47dJNgsDZBGGmUO7yQe2b5s6VNHJV0D5Joa8hgnYlMsyiu2T6sHbNsN8lJ8BfI9XkORAttLEAnMEELLkMpXt9MS3w04xp0oqOh%2FL3vdWpEauVX1KBpkCe%2BIAiCIgk5%2FlNVGAeMKV2ZWtdNTgnGsOo&X-Amz-Signature=30924ca47fe9ac08f31f34f08f0da8370aa78fe929366edc7cdafd9ce151191c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
