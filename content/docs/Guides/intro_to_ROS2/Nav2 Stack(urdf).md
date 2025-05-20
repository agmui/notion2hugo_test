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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4T2YYG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTD5FtfPwlkGwYqRN2Qc0rOsva2zT0VQ8oZIJ2MF3%2FxAIhAMoUY0MM6HRgIWLy4KVw9y3yxZFFgPLbAx7kmAB%2F2z9JKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwawAeJhrVtcQNKNQAq3AO6USjyqZhsXBWnXfAjKt9olPSrUPTtMflegRkEEEbM4xAXsjFDIo1eS%2BJ%2B7t2z1ON%2BtFb2kvtOz7BND0W0joX193AHj2%2BrHadOk3nx6LbggxhaWTpC4gQh%2BH%2BJ9TEpKgIKo1xO3F9uX%2BEqXykkZb77ld40ObkN2w3TtOjePt7cG8aT%2Fam3If5Ku27ApVt6WhBzfmwF%2BLbb7ZEH7Jh1lXryPCf%2FEwyWkT30D8ImvoLwgLFepLy9UpByyvvF%2FXrqBMGwfX3WVKeCJcdYejnjDRTyyXFH42tDiRDsHdx9y4LD694oe0WMEDyv6D1JpFW%2BqwhNRCAEtKRippavz1jG8%2FYOxP5giIQeX6J13NLIL2R31HJKIjBmH3Q1ZTNn9Ti4zoSuGqioIFpkDbrCJ2BnUVtGT6zHpL4QHQDS%2BF4gKYPQ1iF283G9ZCiphATP0fodw%2FR0nFGNseE87hd3A1iLOUOdJIPYJTPgsA5OBtiqcKpz8k%2FQwJ7HfTH88EzN3ADeyn9Y1qHakfpsMAK35FQf5GO8CjudExHD4%2FEyIu6OSRHXWKOfjxvEHLzlObouh0fhUvdojLOVzpOgzf2f4Wr8w%2Bt9C7X2nmDhKuvayC%2FcWL%2Fb%2B8T2FSl8vi2fhWhK8DDxxrDBBjqkAaP8%2Br3fivHxP6gvbxTVvqX2CndV6%2FHFEpQjkHNOHbsX7TzO9IHeWV%2FNLv4f692n35N5Cq7cAT%2Bz8XGpG9XZwpYAPrmgYmVvWcNnnCrrpvwfypdKDXsuD8Z1wYYdqrf2x6pw%2BuPCqM%2FRdB9rV7QuF24714jgdjcLpcFYoaINnkffxx0cN8RgfJA5wx7JmH7q4kQ5mM9Q4YHy2UXjGhglCYbrjJB9&X-Amz-Signature=975590c055e5191d611e92677e84ba5452de1c1081fed85a49ba8446265519af&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4T2YYG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTD5FtfPwlkGwYqRN2Qc0rOsva2zT0VQ8oZIJ2MF3%2FxAIhAMoUY0MM6HRgIWLy4KVw9y3yxZFFgPLbAx7kmAB%2F2z9JKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwawAeJhrVtcQNKNQAq3AO6USjyqZhsXBWnXfAjKt9olPSrUPTtMflegRkEEEbM4xAXsjFDIo1eS%2BJ%2B7t2z1ON%2BtFb2kvtOz7BND0W0joX193AHj2%2BrHadOk3nx6LbggxhaWTpC4gQh%2BH%2BJ9TEpKgIKo1xO3F9uX%2BEqXykkZb77ld40ObkN2w3TtOjePt7cG8aT%2Fam3If5Ku27ApVt6WhBzfmwF%2BLbb7ZEH7Jh1lXryPCf%2FEwyWkT30D8ImvoLwgLFepLy9UpByyvvF%2FXrqBMGwfX3WVKeCJcdYejnjDRTyyXFH42tDiRDsHdx9y4LD694oe0WMEDyv6D1JpFW%2BqwhNRCAEtKRippavz1jG8%2FYOxP5giIQeX6J13NLIL2R31HJKIjBmH3Q1ZTNn9Ti4zoSuGqioIFpkDbrCJ2BnUVtGT6zHpL4QHQDS%2BF4gKYPQ1iF283G9ZCiphATP0fodw%2FR0nFGNseE87hd3A1iLOUOdJIPYJTPgsA5OBtiqcKpz8k%2FQwJ7HfTH88EzN3ADeyn9Y1qHakfpsMAK35FQf5GO8CjudExHD4%2FEyIu6OSRHXWKOfjxvEHLzlObouh0fhUvdojLOVzpOgzf2f4Wr8w%2Bt9C7X2nmDhKuvayC%2FcWL%2Fb%2B8T2FSl8vi2fhWhK8DDxxrDBBjqkAaP8%2Br3fivHxP6gvbxTVvqX2CndV6%2FHFEpQjkHNOHbsX7TzO9IHeWV%2FNLv4f692n35N5Cq7cAT%2Bz8XGpG9XZwpYAPrmgYmVvWcNnnCrrpvwfypdKDXsuD8Z1wYYdqrf2x6pw%2BuPCqM%2FRdB9rV7QuF24714jgdjcLpcFYoaINnkffxx0cN8RgfJA5wx7JmH7q4kQ5mM9Q4YHy2UXjGhglCYbrjJB9&X-Amz-Signature=770cface2b6857aaa8c6f08923457c6ee28d1d90ddacd6e99e680784898eea62&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4T2YYG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTD5FtfPwlkGwYqRN2Qc0rOsva2zT0VQ8oZIJ2MF3%2FxAIhAMoUY0MM6HRgIWLy4KVw9y3yxZFFgPLbAx7kmAB%2F2z9JKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwawAeJhrVtcQNKNQAq3AO6USjyqZhsXBWnXfAjKt9olPSrUPTtMflegRkEEEbM4xAXsjFDIo1eS%2BJ%2B7t2z1ON%2BtFb2kvtOz7BND0W0joX193AHj2%2BrHadOk3nx6LbggxhaWTpC4gQh%2BH%2BJ9TEpKgIKo1xO3F9uX%2BEqXykkZb77ld40ObkN2w3TtOjePt7cG8aT%2Fam3If5Ku27ApVt6WhBzfmwF%2BLbb7ZEH7Jh1lXryPCf%2FEwyWkT30D8ImvoLwgLFepLy9UpByyvvF%2FXrqBMGwfX3WVKeCJcdYejnjDRTyyXFH42tDiRDsHdx9y4LD694oe0WMEDyv6D1JpFW%2BqwhNRCAEtKRippavz1jG8%2FYOxP5giIQeX6J13NLIL2R31HJKIjBmH3Q1ZTNn9Ti4zoSuGqioIFpkDbrCJ2BnUVtGT6zHpL4QHQDS%2BF4gKYPQ1iF283G9ZCiphATP0fodw%2FR0nFGNseE87hd3A1iLOUOdJIPYJTPgsA5OBtiqcKpz8k%2FQwJ7HfTH88EzN3ADeyn9Y1qHakfpsMAK35FQf5GO8CjudExHD4%2FEyIu6OSRHXWKOfjxvEHLzlObouh0fhUvdojLOVzpOgzf2f4Wr8w%2Bt9C7X2nmDhKuvayC%2FcWL%2Fb%2B8T2FSl8vi2fhWhK8DDxxrDBBjqkAaP8%2Br3fivHxP6gvbxTVvqX2CndV6%2FHFEpQjkHNOHbsX7TzO9IHeWV%2FNLv4f692n35N5Cq7cAT%2Bz8XGpG9XZwpYAPrmgYmVvWcNnnCrrpvwfypdKDXsuD8Z1wYYdqrf2x6pw%2BuPCqM%2FRdB9rV7QuF24714jgdjcLpcFYoaINnkffxx0cN8RgfJA5wx7JmH7q4kQ5mM9Q4YHy2UXjGhglCYbrjJB9&X-Amz-Signature=5285166085a9b8c971dc68f99a28c4040e09b9b7db32cdabac44964a1c17e900&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4T2YYG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTD5FtfPwlkGwYqRN2Qc0rOsva2zT0VQ8oZIJ2MF3%2FxAIhAMoUY0MM6HRgIWLy4KVw9y3yxZFFgPLbAx7kmAB%2F2z9JKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwawAeJhrVtcQNKNQAq3AO6USjyqZhsXBWnXfAjKt9olPSrUPTtMflegRkEEEbM4xAXsjFDIo1eS%2BJ%2B7t2z1ON%2BtFb2kvtOz7BND0W0joX193AHj2%2BrHadOk3nx6LbggxhaWTpC4gQh%2BH%2BJ9TEpKgIKo1xO3F9uX%2BEqXykkZb77ld40ObkN2w3TtOjePt7cG8aT%2Fam3If5Ku27ApVt6WhBzfmwF%2BLbb7ZEH7Jh1lXryPCf%2FEwyWkT30D8ImvoLwgLFepLy9UpByyvvF%2FXrqBMGwfX3WVKeCJcdYejnjDRTyyXFH42tDiRDsHdx9y4LD694oe0WMEDyv6D1JpFW%2BqwhNRCAEtKRippavz1jG8%2FYOxP5giIQeX6J13NLIL2R31HJKIjBmH3Q1ZTNn9Ti4zoSuGqioIFpkDbrCJ2BnUVtGT6zHpL4QHQDS%2BF4gKYPQ1iF283G9ZCiphATP0fodw%2FR0nFGNseE87hd3A1iLOUOdJIPYJTPgsA5OBtiqcKpz8k%2FQwJ7HfTH88EzN3ADeyn9Y1qHakfpsMAK35FQf5GO8CjudExHD4%2FEyIu6OSRHXWKOfjxvEHLzlObouh0fhUvdojLOVzpOgzf2f4Wr8w%2Bt9C7X2nmDhKuvayC%2FcWL%2Fb%2B8T2FSl8vi2fhWhK8DDxxrDBBjqkAaP8%2Br3fivHxP6gvbxTVvqX2CndV6%2FHFEpQjkHNOHbsX7TzO9IHeWV%2FNLv4f692n35N5Cq7cAT%2Bz8XGpG9XZwpYAPrmgYmVvWcNnnCrrpvwfypdKDXsuD8Z1wYYdqrf2x6pw%2BuPCqM%2FRdB9rV7QuF24714jgdjcLpcFYoaINnkffxx0cN8RgfJA5wx7JmH7q4kQ5mM9Q4YHy2UXjGhglCYbrjJB9&X-Amz-Signature=77978100efaadecdcb61a278c8245e13d6b42f0e57a40fffe8d59bcf22cf4fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4T2YYG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTD5FtfPwlkGwYqRN2Qc0rOsva2zT0VQ8oZIJ2MF3%2FxAIhAMoUY0MM6HRgIWLy4KVw9y3yxZFFgPLbAx7kmAB%2F2z9JKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwawAeJhrVtcQNKNQAq3AO6USjyqZhsXBWnXfAjKt9olPSrUPTtMflegRkEEEbM4xAXsjFDIo1eS%2BJ%2B7t2z1ON%2BtFb2kvtOz7BND0W0joX193AHj2%2BrHadOk3nx6LbggxhaWTpC4gQh%2BH%2BJ9TEpKgIKo1xO3F9uX%2BEqXykkZb77ld40ObkN2w3TtOjePt7cG8aT%2Fam3If5Ku27ApVt6WhBzfmwF%2BLbb7ZEH7Jh1lXryPCf%2FEwyWkT30D8ImvoLwgLFepLy9UpByyvvF%2FXrqBMGwfX3WVKeCJcdYejnjDRTyyXFH42tDiRDsHdx9y4LD694oe0WMEDyv6D1JpFW%2BqwhNRCAEtKRippavz1jG8%2FYOxP5giIQeX6J13NLIL2R31HJKIjBmH3Q1ZTNn9Ti4zoSuGqioIFpkDbrCJ2BnUVtGT6zHpL4QHQDS%2BF4gKYPQ1iF283G9ZCiphATP0fodw%2FR0nFGNseE87hd3A1iLOUOdJIPYJTPgsA5OBtiqcKpz8k%2FQwJ7HfTH88EzN3ADeyn9Y1qHakfpsMAK35FQf5GO8CjudExHD4%2FEyIu6OSRHXWKOfjxvEHLzlObouh0fhUvdojLOVzpOgzf2f4Wr8w%2Bt9C7X2nmDhKuvayC%2FcWL%2Fb%2B8T2FSl8vi2fhWhK8DDxxrDBBjqkAaP8%2Br3fivHxP6gvbxTVvqX2CndV6%2FHFEpQjkHNOHbsX7TzO9IHeWV%2FNLv4f692n35N5Cq7cAT%2Bz8XGpG9XZwpYAPrmgYmVvWcNnnCrrpvwfypdKDXsuD8Z1wYYdqrf2x6pw%2BuPCqM%2FRdB9rV7QuF24714jgdjcLpcFYoaINnkffxx0cN8RgfJA5wx7JmH7q4kQ5mM9Q4YHy2UXjGhglCYbrjJB9&X-Amz-Signature=cb26ddb48efee4cee866f88ee069eb45ee3d20945a2d57da051445d27ca7ad89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4T2YYG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTD5FtfPwlkGwYqRN2Qc0rOsva2zT0VQ8oZIJ2MF3%2FxAIhAMoUY0MM6HRgIWLy4KVw9y3yxZFFgPLbAx7kmAB%2F2z9JKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwawAeJhrVtcQNKNQAq3AO6USjyqZhsXBWnXfAjKt9olPSrUPTtMflegRkEEEbM4xAXsjFDIo1eS%2BJ%2B7t2z1ON%2BtFb2kvtOz7BND0W0joX193AHj2%2BrHadOk3nx6LbggxhaWTpC4gQh%2BH%2BJ9TEpKgIKo1xO3F9uX%2BEqXykkZb77ld40ObkN2w3TtOjePt7cG8aT%2Fam3If5Ku27ApVt6WhBzfmwF%2BLbb7ZEH7Jh1lXryPCf%2FEwyWkT30D8ImvoLwgLFepLy9UpByyvvF%2FXrqBMGwfX3WVKeCJcdYejnjDRTyyXFH42tDiRDsHdx9y4LD694oe0WMEDyv6D1JpFW%2BqwhNRCAEtKRippavz1jG8%2FYOxP5giIQeX6J13NLIL2R31HJKIjBmH3Q1ZTNn9Ti4zoSuGqioIFpkDbrCJ2BnUVtGT6zHpL4QHQDS%2BF4gKYPQ1iF283G9ZCiphATP0fodw%2FR0nFGNseE87hd3A1iLOUOdJIPYJTPgsA5OBtiqcKpz8k%2FQwJ7HfTH88EzN3ADeyn9Y1qHakfpsMAK35FQf5GO8CjudExHD4%2FEyIu6OSRHXWKOfjxvEHLzlObouh0fhUvdojLOVzpOgzf2f4Wr8w%2Bt9C7X2nmDhKuvayC%2FcWL%2Fb%2B8T2FSl8vi2fhWhK8DDxxrDBBjqkAaP8%2Br3fivHxP6gvbxTVvqX2CndV6%2FHFEpQjkHNOHbsX7TzO9IHeWV%2FNLv4f692n35N5Cq7cAT%2Bz8XGpG9XZwpYAPrmgYmVvWcNnnCrrpvwfypdKDXsuD8Z1wYYdqrf2x6pw%2BuPCqM%2FRdB9rV7QuF24714jgdjcLpcFYoaINnkffxx0cN8RgfJA5wx7JmH7q4kQ5mM9Q4YHy2UXjGhglCYbrjJB9&X-Amz-Signature=89c23035c6c3a0a558e45ea3f78c14b1e5c936a39619b5d87ac40b574d6e426c&X-Amz-SignedHeaders=host&x-id=GetObject)
