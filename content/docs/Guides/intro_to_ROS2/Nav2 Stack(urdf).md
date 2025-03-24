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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCRZDI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIyExmB7fBfl3aLOalLCH4BHjM%2FcPxthiVD5I9w5x5CAiEAsZuJZmOXmKBRhwuWae3yTmZd%2FX2xNxUz2A1EzQESzGkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjtTl4cCxaUKvpZvircAxz90QFRqWoPzRUtQWex2X8Jhhqyye0ab5z%2FfTCArFLoZn7BA2hXQjyAe5FDwHjX43a5VR4rC8JdiCUjmRC%2F1flkv69S60iUqb5IHpPHUANHlKFlh5vRmJuJfgwJnMJeI6Sko%2FUgmHPoZ3A8iaRQFOcTahgmhKSgNiYmpPbVRVsBTovz3dG3oUtEadbndylZ7yMm0YT49A7UQM8gAQTm%2FweCjQfHts94DMDqpWSa2WjqKzt%2B5CnUPBiCnozm8b4k4ESFC3GdyjJOridgGuRwzOaAa4pA3kAhp7yoRfxnsvDjPUlfDyPN7i%2FP87v9f4qlyZ56fT1RVvhXD0CNTLVqJWse7%2BbyG7Pxc3XhZij4hipCdcwukM1MnSznSh4HGZS7aUWOBkYEtzlN2K7Ujwf6hMsNnbCBEc6ltlk%2Be5CzpTclZfUT6OSU63kOTid9dptyPRpwudT%2B7YEFR5fxf0gvtToCck5nDkl2cSfIq8fcQ64ngZ27mUEmBwdG2JYyOMuKYcsKbgsFvIiTJuNLri6VVAcZsB1DtFThpLBgm9CreDQjCWJz4PQWhrRhM9W58KFrmZ2C6hC5a7rd%2BQ6Vqx1iZMQ5G4qHvl4Isu2S%2BpePAEh2mmli%2Fu2igLzIwSNKMNnig78GOqUB9kD6OPDUO9E9ZcsY2cEXgXt6fCLs1RVNyoJ%2FUJkQG0Q8mTvj7MI%2FDKfoD4fttNg8kadEH%2BVqQPJvqmdv1R%2BlGiQp0ZXcmBuFIiwtKyMqn3FnFCEY9FZWmAYQudgVW%2BmmNvU2M7Msow%2Fd1J8miAESvNhU2FD4JQaqO0tbOXZ6i0E%2Fby2MwYkUvCnq%2BrQI5Y7Jo8%2FEIa9P01v0zrgFTZezK%2FbfAu3u&X-Amz-Signature=41c0ce6070f560040cf76bc520f4f1dc7589be4c38a1331e1839a1b37660df20&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCRZDI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIyExmB7fBfl3aLOalLCH4BHjM%2FcPxthiVD5I9w5x5CAiEAsZuJZmOXmKBRhwuWae3yTmZd%2FX2xNxUz2A1EzQESzGkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjtTl4cCxaUKvpZvircAxz90QFRqWoPzRUtQWex2X8Jhhqyye0ab5z%2FfTCArFLoZn7BA2hXQjyAe5FDwHjX43a5VR4rC8JdiCUjmRC%2F1flkv69S60iUqb5IHpPHUANHlKFlh5vRmJuJfgwJnMJeI6Sko%2FUgmHPoZ3A8iaRQFOcTahgmhKSgNiYmpPbVRVsBTovz3dG3oUtEadbndylZ7yMm0YT49A7UQM8gAQTm%2FweCjQfHts94DMDqpWSa2WjqKzt%2B5CnUPBiCnozm8b4k4ESFC3GdyjJOridgGuRwzOaAa4pA3kAhp7yoRfxnsvDjPUlfDyPN7i%2FP87v9f4qlyZ56fT1RVvhXD0CNTLVqJWse7%2BbyG7Pxc3XhZij4hipCdcwukM1MnSznSh4HGZS7aUWOBkYEtzlN2K7Ujwf6hMsNnbCBEc6ltlk%2Be5CzpTclZfUT6OSU63kOTid9dptyPRpwudT%2B7YEFR5fxf0gvtToCck5nDkl2cSfIq8fcQ64ngZ27mUEmBwdG2JYyOMuKYcsKbgsFvIiTJuNLri6VVAcZsB1DtFThpLBgm9CreDQjCWJz4PQWhrRhM9W58KFrmZ2C6hC5a7rd%2BQ6Vqx1iZMQ5G4qHvl4Isu2S%2BpePAEh2mmli%2Fu2igLzIwSNKMNnig78GOqUB9kD6OPDUO9E9ZcsY2cEXgXt6fCLs1RVNyoJ%2FUJkQG0Q8mTvj7MI%2FDKfoD4fttNg8kadEH%2BVqQPJvqmdv1R%2BlGiQp0ZXcmBuFIiwtKyMqn3FnFCEY9FZWmAYQudgVW%2BmmNvU2M7Msow%2Fd1J8miAESvNhU2FD4JQaqO0tbOXZ6i0E%2Fby2MwYkUvCnq%2BrQI5Y7Jo8%2FEIa9P01v0zrgFTZezK%2FbfAu3u&X-Amz-Signature=ebf6342801ee8162fa7ee90e2811af2cac09878e88cfe17b2fbfe9033ab1d285&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCRZDI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIyExmB7fBfl3aLOalLCH4BHjM%2FcPxthiVD5I9w5x5CAiEAsZuJZmOXmKBRhwuWae3yTmZd%2FX2xNxUz2A1EzQESzGkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjtTl4cCxaUKvpZvircAxz90QFRqWoPzRUtQWex2X8Jhhqyye0ab5z%2FfTCArFLoZn7BA2hXQjyAe5FDwHjX43a5VR4rC8JdiCUjmRC%2F1flkv69S60iUqb5IHpPHUANHlKFlh5vRmJuJfgwJnMJeI6Sko%2FUgmHPoZ3A8iaRQFOcTahgmhKSgNiYmpPbVRVsBTovz3dG3oUtEadbndylZ7yMm0YT49A7UQM8gAQTm%2FweCjQfHts94DMDqpWSa2WjqKzt%2B5CnUPBiCnozm8b4k4ESFC3GdyjJOridgGuRwzOaAa4pA3kAhp7yoRfxnsvDjPUlfDyPN7i%2FP87v9f4qlyZ56fT1RVvhXD0CNTLVqJWse7%2BbyG7Pxc3XhZij4hipCdcwukM1MnSznSh4HGZS7aUWOBkYEtzlN2K7Ujwf6hMsNnbCBEc6ltlk%2Be5CzpTclZfUT6OSU63kOTid9dptyPRpwudT%2B7YEFR5fxf0gvtToCck5nDkl2cSfIq8fcQ64ngZ27mUEmBwdG2JYyOMuKYcsKbgsFvIiTJuNLri6VVAcZsB1DtFThpLBgm9CreDQjCWJz4PQWhrRhM9W58KFrmZ2C6hC5a7rd%2BQ6Vqx1iZMQ5G4qHvl4Isu2S%2BpePAEh2mmli%2Fu2igLzIwSNKMNnig78GOqUB9kD6OPDUO9E9ZcsY2cEXgXt6fCLs1RVNyoJ%2FUJkQG0Q8mTvj7MI%2FDKfoD4fttNg8kadEH%2BVqQPJvqmdv1R%2BlGiQp0ZXcmBuFIiwtKyMqn3FnFCEY9FZWmAYQudgVW%2BmmNvU2M7Msow%2Fd1J8miAESvNhU2FD4JQaqO0tbOXZ6i0E%2Fby2MwYkUvCnq%2BrQI5Y7Jo8%2FEIa9P01v0zrgFTZezK%2FbfAu3u&X-Amz-Signature=56ac0aa9fcc79785b14dc811d1fd7053fe9bba8e6dc5a17ac5d2058602f6bb55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCRZDI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIyExmB7fBfl3aLOalLCH4BHjM%2FcPxthiVD5I9w5x5CAiEAsZuJZmOXmKBRhwuWae3yTmZd%2FX2xNxUz2A1EzQESzGkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjtTl4cCxaUKvpZvircAxz90QFRqWoPzRUtQWex2X8Jhhqyye0ab5z%2FfTCArFLoZn7BA2hXQjyAe5FDwHjX43a5VR4rC8JdiCUjmRC%2F1flkv69S60iUqb5IHpPHUANHlKFlh5vRmJuJfgwJnMJeI6Sko%2FUgmHPoZ3A8iaRQFOcTahgmhKSgNiYmpPbVRVsBTovz3dG3oUtEadbndylZ7yMm0YT49A7UQM8gAQTm%2FweCjQfHts94DMDqpWSa2WjqKzt%2B5CnUPBiCnozm8b4k4ESFC3GdyjJOridgGuRwzOaAa4pA3kAhp7yoRfxnsvDjPUlfDyPN7i%2FP87v9f4qlyZ56fT1RVvhXD0CNTLVqJWse7%2BbyG7Pxc3XhZij4hipCdcwukM1MnSznSh4HGZS7aUWOBkYEtzlN2K7Ujwf6hMsNnbCBEc6ltlk%2Be5CzpTclZfUT6OSU63kOTid9dptyPRpwudT%2B7YEFR5fxf0gvtToCck5nDkl2cSfIq8fcQ64ngZ27mUEmBwdG2JYyOMuKYcsKbgsFvIiTJuNLri6VVAcZsB1DtFThpLBgm9CreDQjCWJz4PQWhrRhM9W58KFrmZ2C6hC5a7rd%2BQ6Vqx1iZMQ5G4qHvl4Isu2S%2BpePAEh2mmli%2Fu2igLzIwSNKMNnig78GOqUB9kD6OPDUO9E9ZcsY2cEXgXt6fCLs1RVNyoJ%2FUJkQG0Q8mTvj7MI%2FDKfoD4fttNg8kadEH%2BVqQPJvqmdv1R%2BlGiQp0ZXcmBuFIiwtKyMqn3FnFCEY9FZWmAYQudgVW%2BmmNvU2M7Msow%2Fd1J8miAESvNhU2FD4JQaqO0tbOXZ6i0E%2Fby2MwYkUvCnq%2BrQI5Y7Jo8%2FEIa9P01v0zrgFTZezK%2FbfAu3u&X-Amz-Signature=4a7e0f685ddc5591cc1b9a2b238ad365fc623940ff7db0e05c1fe022ff5321da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCRZDI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIyExmB7fBfl3aLOalLCH4BHjM%2FcPxthiVD5I9w5x5CAiEAsZuJZmOXmKBRhwuWae3yTmZd%2FX2xNxUz2A1EzQESzGkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjtTl4cCxaUKvpZvircAxz90QFRqWoPzRUtQWex2X8Jhhqyye0ab5z%2FfTCArFLoZn7BA2hXQjyAe5FDwHjX43a5VR4rC8JdiCUjmRC%2F1flkv69S60iUqb5IHpPHUANHlKFlh5vRmJuJfgwJnMJeI6Sko%2FUgmHPoZ3A8iaRQFOcTahgmhKSgNiYmpPbVRVsBTovz3dG3oUtEadbndylZ7yMm0YT49A7UQM8gAQTm%2FweCjQfHts94DMDqpWSa2WjqKzt%2B5CnUPBiCnozm8b4k4ESFC3GdyjJOridgGuRwzOaAa4pA3kAhp7yoRfxnsvDjPUlfDyPN7i%2FP87v9f4qlyZ56fT1RVvhXD0CNTLVqJWse7%2BbyG7Pxc3XhZij4hipCdcwukM1MnSznSh4HGZS7aUWOBkYEtzlN2K7Ujwf6hMsNnbCBEc6ltlk%2Be5CzpTclZfUT6OSU63kOTid9dptyPRpwudT%2B7YEFR5fxf0gvtToCck5nDkl2cSfIq8fcQ64ngZ27mUEmBwdG2JYyOMuKYcsKbgsFvIiTJuNLri6VVAcZsB1DtFThpLBgm9CreDQjCWJz4PQWhrRhM9W58KFrmZ2C6hC5a7rd%2BQ6Vqx1iZMQ5G4qHvl4Isu2S%2BpePAEh2mmli%2Fu2igLzIwSNKMNnig78GOqUB9kD6OPDUO9E9ZcsY2cEXgXt6fCLs1RVNyoJ%2FUJkQG0Q8mTvj7MI%2FDKfoD4fttNg8kadEH%2BVqQPJvqmdv1R%2BlGiQp0ZXcmBuFIiwtKyMqn3FnFCEY9FZWmAYQudgVW%2BmmNvU2M7Msow%2Fd1J8miAESvNhU2FD4JQaqO0tbOXZ6i0E%2Fby2MwYkUvCnq%2BrQI5Y7Jo8%2FEIa9P01v0zrgFTZezK%2FbfAu3u&X-Amz-Signature=73749b1b50754241a2d8a8c96631226973c937e910b341bd97c2a5c788d341b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCRZDI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIyExmB7fBfl3aLOalLCH4BHjM%2FcPxthiVD5I9w5x5CAiEAsZuJZmOXmKBRhwuWae3yTmZd%2FX2xNxUz2A1EzQESzGkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjtTl4cCxaUKvpZvircAxz90QFRqWoPzRUtQWex2X8Jhhqyye0ab5z%2FfTCArFLoZn7BA2hXQjyAe5FDwHjX43a5VR4rC8JdiCUjmRC%2F1flkv69S60iUqb5IHpPHUANHlKFlh5vRmJuJfgwJnMJeI6Sko%2FUgmHPoZ3A8iaRQFOcTahgmhKSgNiYmpPbVRVsBTovz3dG3oUtEadbndylZ7yMm0YT49A7UQM8gAQTm%2FweCjQfHts94DMDqpWSa2WjqKzt%2B5CnUPBiCnozm8b4k4ESFC3GdyjJOridgGuRwzOaAa4pA3kAhp7yoRfxnsvDjPUlfDyPN7i%2FP87v9f4qlyZ56fT1RVvhXD0CNTLVqJWse7%2BbyG7Pxc3XhZij4hipCdcwukM1MnSznSh4HGZS7aUWOBkYEtzlN2K7Ujwf6hMsNnbCBEc6ltlk%2Be5CzpTclZfUT6OSU63kOTid9dptyPRpwudT%2B7YEFR5fxf0gvtToCck5nDkl2cSfIq8fcQ64ngZ27mUEmBwdG2JYyOMuKYcsKbgsFvIiTJuNLri6VVAcZsB1DtFThpLBgm9CreDQjCWJz4PQWhrRhM9W58KFrmZ2C6hC5a7rd%2BQ6Vqx1iZMQ5G4qHvl4Isu2S%2BpePAEh2mmli%2Fu2igLzIwSNKMNnig78GOqUB9kD6OPDUO9E9ZcsY2cEXgXt6fCLs1RVNyoJ%2FUJkQG0Q8mTvj7MI%2FDKfoD4fttNg8kadEH%2BVqQPJvqmdv1R%2BlGiQp0ZXcmBuFIiwtKyMqn3FnFCEY9FZWmAYQudgVW%2BmmNvU2M7Msow%2Fd1J8miAESvNhU2FD4JQaqO0tbOXZ6i0E%2Fby2MwYkUvCnq%2BrQI5Y7Jo8%2FEIa9P01v0zrgFTZezK%2FbfAu3u&X-Amz-Signature=fdbd3f1965ab4754fcd54e5ebd1484f12c9201d4b0de7769e7febb70c25e89ef&X-Amz-SignedHeaders=host&x-id=GetObject)
