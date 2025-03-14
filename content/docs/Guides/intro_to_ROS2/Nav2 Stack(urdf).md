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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOUS2CZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cNMhe5JKnmj%2BmMXqSTsgvg%2BNccgz9ybHt6yngki54QIhAKuocaTdMLVrtKNKY6vutaA4%2Fdca45jHrXPbnN7UQ20RKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnejh5rA1rXxBCPV0q3APSOdIayMrLNIK2r2Z6g9cPSOxhM93Hz%2FW5E0qwkpdGDiKLBCK%2BREW%2BF%2B2%2FlnDVyOJdWlOjglUfGzvz3x2aBB5o0wHMnbVvXS4DoKMOYInVVYCxSwSgLo%2BvJeGoe5Lx4uaivY07EvUW5qvUWyUKSd3IBayGhmwxdsGucvVzm23nDIcmXPhfzOSiROdLd1AjzVnincpmqwdm8SQecFuTAmvzs2MhUp6RQfyBJIxMRaUp16DeT0%2BZ%2B0v9vWvdpAA1sgyzRrKtEMqlm3W1OQvIXchr8aKxIK00L18lWTxfL6MesRrWCSgaww%2BQ1Sb%2F%2BK0hdwUOo8I0byzUvDb4b9haOAIBEU1aea1ygYfTKgKyfZFaCUkcH%2FnjIv3%2BNo%2BKBp0wyiWeJpNlLhikpl2Ia%2B2S%2F0bfmqGOiUanZc2Z1QDNGehj0FW%2BdIZU6il81fUqmB1n%2BufDv0LiAgqxiJZtYrXXn%2FogZ65vg66sfuZDzUwdzNr8Q1T%2FWm0ij7VGWHmAvF5tXV%2FCv%2Bl%2FRCAxPGzQ31mBiaAF3QCIlbj929YEEy6FIYColmT%2FSswQ%2FOq6p5jwy6FVuEOAKJYS2QH4n4wqWHakUBMtKzy1v6VAhkwOmMzDg6gUFHxRqqX8sRNf8wZYCzCcudC%2BBjqkAfQz35eZRMuE6l9iEJdWJFeYVTHnEo%2Fy0Wfvm%2F0kEjJJzVh5J5jc5Cu6RJI1l13LMkyLe2W6k34FfvB9G4zJqURVrIHXHQwiTXNHEc7zMhAmfdsKEvPQbPCakcJe7i3dVvV798J4UH%2Bcs8dEaj8%2FoZKQvcwxUwaHvgNaPq8jyb%2B5jQf2q4z7xOCUUL52GCTf3F9v8yLt5aIRussoWg6vb%2FQnOYBW&X-Amz-Signature=244ce30e57abf9bae7c40e48b9b7a8dabcbf48951fc94bf60c80d9536713a191&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOUS2CZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cNMhe5JKnmj%2BmMXqSTsgvg%2BNccgz9ybHt6yngki54QIhAKuocaTdMLVrtKNKY6vutaA4%2Fdca45jHrXPbnN7UQ20RKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnejh5rA1rXxBCPV0q3APSOdIayMrLNIK2r2Z6g9cPSOxhM93Hz%2FW5E0qwkpdGDiKLBCK%2BREW%2BF%2B2%2FlnDVyOJdWlOjglUfGzvz3x2aBB5o0wHMnbVvXS4DoKMOYInVVYCxSwSgLo%2BvJeGoe5Lx4uaivY07EvUW5qvUWyUKSd3IBayGhmwxdsGucvVzm23nDIcmXPhfzOSiROdLd1AjzVnincpmqwdm8SQecFuTAmvzs2MhUp6RQfyBJIxMRaUp16DeT0%2BZ%2B0v9vWvdpAA1sgyzRrKtEMqlm3W1OQvIXchr8aKxIK00L18lWTxfL6MesRrWCSgaww%2BQ1Sb%2F%2BK0hdwUOo8I0byzUvDb4b9haOAIBEU1aea1ygYfTKgKyfZFaCUkcH%2FnjIv3%2BNo%2BKBp0wyiWeJpNlLhikpl2Ia%2B2S%2F0bfmqGOiUanZc2Z1QDNGehj0FW%2BdIZU6il81fUqmB1n%2BufDv0LiAgqxiJZtYrXXn%2FogZ65vg66sfuZDzUwdzNr8Q1T%2FWm0ij7VGWHmAvF5tXV%2FCv%2Bl%2FRCAxPGzQ31mBiaAF3QCIlbj929YEEy6FIYColmT%2FSswQ%2FOq6p5jwy6FVuEOAKJYS2QH4n4wqWHakUBMtKzy1v6VAhkwOmMzDg6gUFHxRqqX8sRNf8wZYCzCcudC%2BBjqkAfQz35eZRMuE6l9iEJdWJFeYVTHnEo%2Fy0Wfvm%2F0kEjJJzVh5J5jc5Cu6RJI1l13LMkyLe2W6k34FfvB9G4zJqURVrIHXHQwiTXNHEc7zMhAmfdsKEvPQbPCakcJe7i3dVvV798J4UH%2Bcs8dEaj8%2FoZKQvcwxUwaHvgNaPq8jyb%2B5jQf2q4z7xOCUUL52GCTf3F9v8yLt5aIRussoWg6vb%2FQnOYBW&X-Amz-Signature=379de0f3ad45748ce0ccc355b6b7fdb71f02ac4dec904e287e4400f0610a9cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOUS2CZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cNMhe5JKnmj%2BmMXqSTsgvg%2BNccgz9ybHt6yngki54QIhAKuocaTdMLVrtKNKY6vutaA4%2Fdca45jHrXPbnN7UQ20RKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnejh5rA1rXxBCPV0q3APSOdIayMrLNIK2r2Z6g9cPSOxhM93Hz%2FW5E0qwkpdGDiKLBCK%2BREW%2BF%2B2%2FlnDVyOJdWlOjglUfGzvz3x2aBB5o0wHMnbVvXS4DoKMOYInVVYCxSwSgLo%2BvJeGoe5Lx4uaivY07EvUW5qvUWyUKSd3IBayGhmwxdsGucvVzm23nDIcmXPhfzOSiROdLd1AjzVnincpmqwdm8SQecFuTAmvzs2MhUp6RQfyBJIxMRaUp16DeT0%2BZ%2B0v9vWvdpAA1sgyzRrKtEMqlm3W1OQvIXchr8aKxIK00L18lWTxfL6MesRrWCSgaww%2BQ1Sb%2F%2BK0hdwUOo8I0byzUvDb4b9haOAIBEU1aea1ygYfTKgKyfZFaCUkcH%2FnjIv3%2BNo%2BKBp0wyiWeJpNlLhikpl2Ia%2B2S%2F0bfmqGOiUanZc2Z1QDNGehj0FW%2BdIZU6il81fUqmB1n%2BufDv0LiAgqxiJZtYrXXn%2FogZ65vg66sfuZDzUwdzNr8Q1T%2FWm0ij7VGWHmAvF5tXV%2FCv%2Bl%2FRCAxPGzQ31mBiaAF3QCIlbj929YEEy6FIYColmT%2FSswQ%2FOq6p5jwy6FVuEOAKJYS2QH4n4wqWHakUBMtKzy1v6VAhkwOmMzDg6gUFHxRqqX8sRNf8wZYCzCcudC%2BBjqkAfQz35eZRMuE6l9iEJdWJFeYVTHnEo%2Fy0Wfvm%2F0kEjJJzVh5J5jc5Cu6RJI1l13LMkyLe2W6k34FfvB9G4zJqURVrIHXHQwiTXNHEc7zMhAmfdsKEvPQbPCakcJe7i3dVvV798J4UH%2Bcs8dEaj8%2FoZKQvcwxUwaHvgNaPq8jyb%2B5jQf2q4z7xOCUUL52GCTf3F9v8yLt5aIRussoWg6vb%2FQnOYBW&X-Amz-Signature=0295bf6306032da20d6dd6c9a7b55d20b10832370fefbf5a10fb35a608622a05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOUS2CZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cNMhe5JKnmj%2BmMXqSTsgvg%2BNccgz9ybHt6yngki54QIhAKuocaTdMLVrtKNKY6vutaA4%2Fdca45jHrXPbnN7UQ20RKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnejh5rA1rXxBCPV0q3APSOdIayMrLNIK2r2Z6g9cPSOxhM93Hz%2FW5E0qwkpdGDiKLBCK%2BREW%2BF%2B2%2FlnDVyOJdWlOjglUfGzvz3x2aBB5o0wHMnbVvXS4DoKMOYInVVYCxSwSgLo%2BvJeGoe5Lx4uaivY07EvUW5qvUWyUKSd3IBayGhmwxdsGucvVzm23nDIcmXPhfzOSiROdLd1AjzVnincpmqwdm8SQecFuTAmvzs2MhUp6RQfyBJIxMRaUp16DeT0%2BZ%2B0v9vWvdpAA1sgyzRrKtEMqlm3W1OQvIXchr8aKxIK00L18lWTxfL6MesRrWCSgaww%2BQ1Sb%2F%2BK0hdwUOo8I0byzUvDb4b9haOAIBEU1aea1ygYfTKgKyfZFaCUkcH%2FnjIv3%2BNo%2BKBp0wyiWeJpNlLhikpl2Ia%2B2S%2F0bfmqGOiUanZc2Z1QDNGehj0FW%2BdIZU6il81fUqmB1n%2BufDv0LiAgqxiJZtYrXXn%2FogZ65vg66sfuZDzUwdzNr8Q1T%2FWm0ij7VGWHmAvF5tXV%2FCv%2Bl%2FRCAxPGzQ31mBiaAF3QCIlbj929YEEy6FIYColmT%2FSswQ%2FOq6p5jwy6FVuEOAKJYS2QH4n4wqWHakUBMtKzy1v6VAhkwOmMzDg6gUFHxRqqX8sRNf8wZYCzCcudC%2BBjqkAfQz35eZRMuE6l9iEJdWJFeYVTHnEo%2Fy0Wfvm%2F0kEjJJzVh5J5jc5Cu6RJI1l13LMkyLe2W6k34FfvB9G4zJqURVrIHXHQwiTXNHEc7zMhAmfdsKEvPQbPCakcJe7i3dVvV798J4UH%2Bcs8dEaj8%2FoZKQvcwxUwaHvgNaPq8jyb%2B5jQf2q4z7xOCUUL52GCTf3F9v8yLt5aIRussoWg6vb%2FQnOYBW&X-Amz-Signature=a143a41341fd23830a9e4cab11d2c742ede434c605474dd1936df9619b50e4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOUS2CZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cNMhe5JKnmj%2BmMXqSTsgvg%2BNccgz9ybHt6yngki54QIhAKuocaTdMLVrtKNKY6vutaA4%2Fdca45jHrXPbnN7UQ20RKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnejh5rA1rXxBCPV0q3APSOdIayMrLNIK2r2Z6g9cPSOxhM93Hz%2FW5E0qwkpdGDiKLBCK%2BREW%2BF%2B2%2FlnDVyOJdWlOjglUfGzvz3x2aBB5o0wHMnbVvXS4DoKMOYInVVYCxSwSgLo%2BvJeGoe5Lx4uaivY07EvUW5qvUWyUKSd3IBayGhmwxdsGucvVzm23nDIcmXPhfzOSiROdLd1AjzVnincpmqwdm8SQecFuTAmvzs2MhUp6RQfyBJIxMRaUp16DeT0%2BZ%2B0v9vWvdpAA1sgyzRrKtEMqlm3W1OQvIXchr8aKxIK00L18lWTxfL6MesRrWCSgaww%2BQ1Sb%2F%2BK0hdwUOo8I0byzUvDb4b9haOAIBEU1aea1ygYfTKgKyfZFaCUkcH%2FnjIv3%2BNo%2BKBp0wyiWeJpNlLhikpl2Ia%2B2S%2F0bfmqGOiUanZc2Z1QDNGehj0FW%2BdIZU6il81fUqmB1n%2BufDv0LiAgqxiJZtYrXXn%2FogZ65vg66sfuZDzUwdzNr8Q1T%2FWm0ij7VGWHmAvF5tXV%2FCv%2Bl%2FRCAxPGzQ31mBiaAF3QCIlbj929YEEy6FIYColmT%2FSswQ%2FOq6p5jwy6FVuEOAKJYS2QH4n4wqWHakUBMtKzy1v6VAhkwOmMzDg6gUFHxRqqX8sRNf8wZYCzCcudC%2BBjqkAfQz35eZRMuE6l9iEJdWJFeYVTHnEo%2Fy0Wfvm%2F0kEjJJzVh5J5jc5Cu6RJI1l13LMkyLe2W6k34FfvB9G4zJqURVrIHXHQwiTXNHEc7zMhAmfdsKEvPQbPCakcJe7i3dVvV798J4UH%2Bcs8dEaj8%2FoZKQvcwxUwaHvgNaPq8jyb%2B5jQf2q4z7xOCUUL52GCTf3F9v8yLt5aIRussoWg6vb%2FQnOYBW&X-Amz-Signature=0643d88be7fce8517b6ffc10963e112127000849b59c1970cfa03fee69c88358&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOUS2CZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2cNMhe5JKnmj%2BmMXqSTsgvg%2BNccgz9ybHt6yngki54QIhAKuocaTdMLVrtKNKY6vutaA4%2Fdca45jHrXPbnN7UQ20RKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnejh5rA1rXxBCPV0q3APSOdIayMrLNIK2r2Z6g9cPSOxhM93Hz%2FW5E0qwkpdGDiKLBCK%2BREW%2BF%2B2%2FlnDVyOJdWlOjglUfGzvz3x2aBB5o0wHMnbVvXS4DoKMOYInVVYCxSwSgLo%2BvJeGoe5Lx4uaivY07EvUW5qvUWyUKSd3IBayGhmwxdsGucvVzm23nDIcmXPhfzOSiROdLd1AjzVnincpmqwdm8SQecFuTAmvzs2MhUp6RQfyBJIxMRaUp16DeT0%2BZ%2B0v9vWvdpAA1sgyzRrKtEMqlm3W1OQvIXchr8aKxIK00L18lWTxfL6MesRrWCSgaww%2BQ1Sb%2F%2BK0hdwUOo8I0byzUvDb4b9haOAIBEU1aea1ygYfTKgKyfZFaCUkcH%2FnjIv3%2BNo%2BKBp0wyiWeJpNlLhikpl2Ia%2B2S%2F0bfmqGOiUanZc2Z1QDNGehj0FW%2BdIZU6il81fUqmB1n%2BufDv0LiAgqxiJZtYrXXn%2FogZ65vg66sfuZDzUwdzNr8Q1T%2FWm0ij7VGWHmAvF5tXV%2FCv%2Bl%2FRCAxPGzQ31mBiaAF3QCIlbj929YEEy6FIYColmT%2FSswQ%2FOq6p5jwy6FVuEOAKJYS2QH4n4wqWHakUBMtKzy1v6VAhkwOmMzDg6gUFHxRqqX8sRNf8wZYCzCcudC%2BBjqkAfQz35eZRMuE6l9iEJdWJFeYVTHnEo%2Fy0Wfvm%2F0kEjJJzVh5J5jc5Cu6RJI1l13LMkyLe2W6k34FfvB9G4zJqURVrIHXHQwiTXNHEc7zMhAmfdsKEvPQbPCakcJe7i3dVvV798J4UH%2Bcs8dEaj8%2FoZKQvcwxUwaHvgNaPq8jyb%2B5jQf2q4z7xOCUUL52GCTf3F9v8yLt5aIRussoWg6vb%2FQnOYBW&X-Amz-Signature=d97579d45e38c84bb7db49eccdbbcb9caa51eeb3d89685c1667930732a680869&X-Amz-SignedHeaders=host&x-id=GetObject)
