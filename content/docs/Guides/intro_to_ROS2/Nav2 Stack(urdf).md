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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3VBQ7N%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAVFP1dmu3u55hX9lTwDjO1lRue5cLfmlYc%2FiF4Cy2pEAiEAl%2BQos2hglI2YC6arU4hID3XTSop2tGhbFYR0%2Bha4XRcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP0cLXR%2FwKS9F0G2VCrcA5Ij%2BW4oNMcsb%2Bc%2B0l0EfnQ4MflgFjKe16LFDDXVNiuCjZAXrD%2B6Ql5LYJsDO%2BuesGA553YcYD0kj%2Bo7vg5%2BBquxaaqZxM4RLzBCLK7YdLS%2Bg%2BiguoKze61rQrZwsGGl1mLyelfOPUiMRx%2F9Dv%2BrUXHN4GAGa6fyjw29mjivkOVtgtldVrtdeUPWUIIFVdzyL5Y35lgAqAVKYeuzjG9b3F6BVkK8Cnpgqqfz%2BFm4u82PBRiBBj8kE%2FDAqQ0h7gBrPYq%2FMDI8FEwRPW7srx8%2FXV6g7Dn6LB5Vpem8OLEUWqpjJwwGuxT7JvHWQhhsT2e%2B%2BscWxSIFiWZ%2BTadujh%2B3l109H%2BWqFRBrX0eNY%2FoVTlG2HnbWkGJIVUeenEMAwDrv6aZeAolbtiCGNJmqYUrhXpKOr77LS3tblzQ6pozcHlVHe9GhzAxaZ4iAaurzoGk8HLGyRQGCjohWowg9kB2pS9Ml2FN9HRihwwCLrNea4tTfu6sCQSDB7WcIcjmgBn08sdrOSWqNhedTgUPQ6yEk5eh12CzOjRXM%2Fuavzwrr9gNQgsHDv0yU%2BN9n%2F78M8uXCItfeSVVnBDXJVFQiMAc2gxScTZ2gRDKhB0HvAPXM2%2FUwBzqdaQtz4vQAjqkUMJGyrcMGOqUBSfpBy88SenmEJEqldvoWjr9%2BLQ8YTerBjT1IT%2BE1%2Bb0QAtwUeXqpAp73sEUyCHmAQ%2B4CseTZBZujL4XTy3kgBzXx4yYvL%2FqlXPez9%2FJPj7WMLQWBXCx5n91Dd2YBpvwdu0dVjb%2Bc7Wj3j%2Btf%2FNRPhI92rXfF1rgDiF6TaeXKfRh0AC1NE1inxx2dTaN13qJYG7eN5WCbNFY3mM6Sbw3DvnlVDeRU&X-Amz-Signature=b57c1a6b11e24cd0032d9432322fb83ffd3d286ad896334a227ec1eb031e3a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3VBQ7N%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAVFP1dmu3u55hX9lTwDjO1lRue5cLfmlYc%2FiF4Cy2pEAiEAl%2BQos2hglI2YC6arU4hID3XTSop2tGhbFYR0%2Bha4XRcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP0cLXR%2FwKS9F0G2VCrcA5Ij%2BW4oNMcsb%2Bc%2B0l0EfnQ4MflgFjKe16LFDDXVNiuCjZAXrD%2B6Ql5LYJsDO%2BuesGA553YcYD0kj%2Bo7vg5%2BBquxaaqZxM4RLzBCLK7YdLS%2Bg%2BiguoKze61rQrZwsGGl1mLyelfOPUiMRx%2F9Dv%2BrUXHN4GAGa6fyjw29mjivkOVtgtldVrtdeUPWUIIFVdzyL5Y35lgAqAVKYeuzjG9b3F6BVkK8Cnpgqqfz%2BFm4u82PBRiBBj8kE%2FDAqQ0h7gBrPYq%2FMDI8FEwRPW7srx8%2FXV6g7Dn6LB5Vpem8OLEUWqpjJwwGuxT7JvHWQhhsT2e%2B%2BscWxSIFiWZ%2BTadujh%2B3l109H%2BWqFRBrX0eNY%2FoVTlG2HnbWkGJIVUeenEMAwDrv6aZeAolbtiCGNJmqYUrhXpKOr77LS3tblzQ6pozcHlVHe9GhzAxaZ4iAaurzoGk8HLGyRQGCjohWowg9kB2pS9Ml2FN9HRihwwCLrNea4tTfu6sCQSDB7WcIcjmgBn08sdrOSWqNhedTgUPQ6yEk5eh12CzOjRXM%2Fuavzwrr9gNQgsHDv0yU%2BN9n%2F78M8uXCItfeSVVnBDXJVFQiMAc2gxScTZ2gRDKhB0HvAPXM2%2FUwBzqdaQtz4vQAjqkUMJGyrcMGOqUBSfpBy88SenmEJEqldvoWjr9%2BLQ8YTerBjT1IT%2BE1%2Bb0QAtwUeXqpAp73sEUyCHmAQ%2B4CseTZBZujL4XTy3kgBzXx4yYvL%2FqlXPez9%2FJPj7WMLQWBXCx5n91Dd2YBpvwdu0dVjb%2Bc7Wj3j%2Btf%2FNRPhI92rXfF1rgDiF6TaeXKfRh0AC1NE1inxx2dTaN13qJYG7eN5WCbNFY3mM6Sbw3DvnlVDeRU&X-Amz-Signature=d6b50c5c09ff72e229fedc850fc5c29a3489c71a3aefdab6bf9adb2321554e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3VBQ7N%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAVFP1dmu3u55hX9lTwDjO1lRue5cLfmlYc%2FiF4Cy2pEAiEAl%2BQos2hglI2YC6arU4hID3XTSop2tGhbFYR0%2Bha4XRcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP0cLXR%2FwKS9F0G2VCrcA5Ij%2BW4oNMcsb%2Bc%2B0l0EfnQ4MflgFjKe16LFDDXVNiuCjZAXrD%2B6Ql5LYJsDO%2BuesGA553YcYD0kj%2Bo7vg5%2BBquxaaqZxM4RLzBCLK7YdLS%2Bg%2BiguoKze61rQrZwsGGl1mLyelfOPUiMRx%2F9Dv%2BrUXHN4GAGa6fyjw29mjivkOVtgtldVrtdeUPWUIIFVdzyL5Y35lgAqAVKYeuzjG9b3F6BVkK8Cnpgqqfz%2BFm4u82PBRiBBj8kE%2FDAqQ0h7gBrPYq%2FMDI8FEwRPW7srx8%2FXV6g7Dn6LB5Vpem8OLEUWqpjJwwGuxT7JvHWQhhsT2e%2B%2BscWxSIFiWZ%2BTadujh%2B3l109H%2BWqFRBrX0eNY%2FoVTlG2HnbWkGJIVUeenEMAwDrv6aZeAolbtiCGNJmqYUrhXpKOr77LS3tblzQ6pozcHlVHe9GhzAxaZ4iAaurzoGk8HLGyRQGCjohWowg9kB2pS9Ml2FN9HRihwwCLrNea4tTfu6sCQSDB7WcIcjmgBn08sdrOSWqNhedTgUPQ6yEk5eh12CzOjRXM%2Fuavzwrr9gNQgsHDv0yU%2BN9n%2F78M8uXCItfeSVVnBDXJVFQiMAc2gxScTZ2gRDKhB0HvAPXM2%2FUwBzqdaQtz4vQAjqkUMJGyrcMGOqUBSfpBy88SenmEJEqldvoWjr9%2BLQ8YTerBjT1IT%2BE1%2Bb0QAtwUeXqpAp73sEUyCHmAQ%2B4CseTZBZujL4XTy3kgBzXx4yYvL%2FqlXPez9%2FJPj7WMLQWBXCx5n91Dd2YBpvwdu0dVjb%2Bc7Wj3j%2Btf%2FNRPhI92rXfF1rgDiF6TaeXKfRh0AC1NE1inxx2dTaN13qJYG7eN5WCbNFY3mM6Sbw3DvnlVDeRU&X-Amz-Signature=713a7d15c5aa1d5e6dd9bc9ca07739938ef74089861f4bcdc2d26c0c83cc188f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3VBQ7N%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAVFP1dmu3u55hX9lTwDjO1lRue5cLfmlYc%2FiF4Cy2pEAiEAl%2BQos2hglI2YC6arU4hID3XTSop2tGhbFYR0%2Bha4XRcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP0cLXR%2FwKS9F0G2VCrcA5Ij%2BW4oNMcsb%2Bc%2B0l0EfnQ4MflgFjKe16LFDDXVNiuCjZAXrD%2B6Ql5LYJsDO%2BuesGA553YcYD0kj%2Bo7vg5%2BBquxaaqZxM4RLzBCLK7YdLS%2Bg%2BiguoKze61rQrZwsGGl1mLyelfOPUiMRx%2F9Dv%2BrUXHN4GAGa6fyjw29mjivkOVtgtldVrtdeUPWUIIFVdzyL5Y35lgAqAVKYeuzjG9b3F6BVkK8Cnpgqqfz%2BFm4u82PBRiBBj8kE%2FDAqQ0h7gBrPYq%2FMDI8FEwRPW7srx8%2FXV6g7Dn6LB5Vpem8OLEUWqpjJwwGuxT7JvHWQhhsT2e%2B%2BscWxSIFiWZ%2BTadujh%2B3l109H%2BWqFRBrX0eNY%2FoVTlG2HnbWkGJIVUeenEMAwDrv6aZeAolbtiCGNJmqYUrhXpKOr77LS3tblzQ6pozcHlVHe9GhzAxaZ4iAaurzoGk8HLGyRQGCjohWowg9kB2pS9Ml2FN9HRihwwCLrNea4tTfu6sCQSDB7WcIcjmgBn08sdrOSWqNhedTgUPQ6yEk5eh12CzOjRXM%2Fuavzwrr9gNQgsHDv0yU%2BN9n%2F78M8uXCItfeSVVnBDXJVFQiMAc2gxScTZ2gRDKhB0HvAPXM2%2FUwBzqdaQtz4vQAjqkUMJGyrcMGOqUBSfpBy88SenmEJEqldvoWjr9%2BLQ8YTerBjT1IT%2BE1%2Bb0QAtwUeXqpAp73sEUyCHmAQ%2B4CseTZBZujL4XTy3kgBzXx4yYvL%2FqlXPez9%2FJPj7WMLQWBXCx5n91Dd2YBpvwdu0dVjb%2Bc7Wj3j%2Btf%2FNRPhI92rXfF1rgDiF6TaeXKfRh0AC1NE1inxx2dTaN13qJYG7eN5WCbNFY3mM6Sbw3DvnlVDeRU&X-Amz-Signature=e2ed0cd2c2d2bca74d95dbc896f7aa1263857ff755ab14cca6b08ffab7bed106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3VBQ7N%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAVFP1dmu3u55hX9lTwDjO1lRue5cLfmlYc%2FiF4Cy2pEAiEAl%2BQos2hglI2YC6arU4hID3XTSop2tGhbFYR0%2Bha4XRcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP0cLXR%2FwKS9F0G2VCrcA5Ij%2BW4oNMcsb%2Bc%2B0l0EfnQ4MflgFjKe16LFDDXVNiuCjZAXrD%2B6Ql5LYJsDO%2BuesGA553YcYD0kj%2Bo7vg5%2BBquxaaqZxM4RLzBCLK7YdLS%2Bg%2BiguoKze61rQrZwsGGl1mLyelfOPUiMRx%2F9Dv%2BrUXHN4GAGa6fyjw29mjivkOVtgtldVrtdeUPWUIIFVdzyL5Y35lgAqAVKYeuzjG9b3F6BVkK8Cnpgqqfz%2BFm4u82PBRiBBj8kE%2FDAqQ0h7gBrPYq%2FMDI8FEwRPW7srx8%2FXV6g7Dn6LB5Vpem8OLEUWqpjJwwGuxT7JvHWQhhsT2e%2B%2BscWxSIFiWZ%2BTadujh%2B3l109H%2BWqFRBrX0eNY%2FoVTlG2HnbWkGJIVUeenEMAwDrv6aZeAolbtiCGNJmqYUrhXpKOr77LS3tblzQ6pozcHlVHe9GhzAxaZ4iAaurzoGk8HLGyRQGCjohWowg9kB2pS9Ml2FN9HRihwwCLrNea4tTfu6sCQSDB7WcIcjmgBn08sdrOSWqNhedTgUPQ6yEk5eh12CzOjRXM%2Fuavzwrr9gNQgsHDv0yU%2BN9n%2F78M8uXCItfeSVVnBDXJVFQiMAc2gxScTZ2gRDKhB0HvAPXM2%2FUwBzqdaQtz4vQAjqkUMJGyrcMGOqUBSfpBy88SenmEJEqldvoWjr9%2BLQ8YTerBjT1IT%2BE1%2Bb0QAtwUeXqpAp73sEUyCHmAQ%2B4CseTZBZujL4XTy3kgBzXx4yYvL%2FqlXPez9%2FJPj7WMLQWBXCx5n91Dd2YBpvwdu0dVjb%2Bc7Wj3j%2Btf%2FNRPhI92rXfF1rgDiF6TaeXKfRh0AC1NE1inxx2dTaN13qJYG7eN5WCbNFY3mM6Sbw3DvnlVDeRU&X-Amz-Signature=f8369dd511d9bd4d0503df10f54ebada590174654369eb2c33c501647481d04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3VBQ7N%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAVFP1dmu3u55hX9lTwDjO1lRue5cLfmlYc%2FiF4Cy2pEAiEAl%2BQos2hglI2YC6arU4hID3XTSop2tGhbFYR0%2Bha4XRcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP0cLXR%2FwKS9F0G2VCrcA5Ij%2BW4oNMcsb%2Bc%2B0l0EfnQ4MflgFjKe16LFDDXVNiuCjZAXrD%2B6Ql5LYJsDO%2BuesGA553YcYD0kj%2Bo7vg5%2BBquxaaqZxM4RLzBCLK7YdLS%2Bg%2BiguoKze61rQrZwsGGl1mLyelfOPUiMRx%2F9Dv%2BrUXHN4GAGa6fyjw29mjivkOVtgtldVrtdeUPWUIIFVdzyL5Y35lgAqAVKYeuzjG9b3F6BVkK8Cnpgqqfz%2BFm4u82PBRiBBj8kE%2FDAqQ0h7gBrPYq%2FMDI8FEwRPW7srx8%2FXV6g7Dn6LB5Vpem8OLEUWqpjJwwGuxT7JvHWQhhsT2e%2B%2BscWxSIFiWZ%2BTadujh%2B3l109H%2BWqFRBrX0eNY%2FoVTlG2HnbWkGJIVUeenEMAwDrv6aZeAolbtiCGNJmqYUrhXpKOr77LS3tblzQ6pozcHlVHe9GhzAxaZ4iAaurzoGk8HLGyRQGCjohWowg9kB2pS9Ml2FN9HRihwwCLrNea4tTfu6sCQSDB7WcIcjmgBn08sdrOSWqNhedTgUPQ6yEk5eh12CzOjRXM%2Fuavzwrr9gNQgsHDv0yU%2BN9n%2F78M8uXCItfeSVVnBDXJVFQiMAc2gxScTZ2gRDKhB0HvAPXM2%2FUwBzqdaQtz4vQAjqkUMJGyrcMGOqUBSfpBy88SenmEJEqldvoWjr9%2BLQ8YTerBjT1IT%2BE1%2Bb0QAtwUeXqpAp73sEUyCHmAQ%2B4CseTZBZujL4XTy3kgBzXx4yYvL%2FqlXPez9%2FJPj7WMLQWBXCx5n91Dd2YBpvwdu0dVjb%2Bc7Wj3j%2Btf%2FNRPhI92rXfF1rgDiF6TaeXKfRh0AC1NE1inxx2dTaN13qJYG7eN5WCbNFY3mM6Sbw3DvnlVDeRU&X-Amz-Signature=4a8e385734aacab95cc54ba036b1866eb8dbf74b2d080a8adb19e811faec7227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
