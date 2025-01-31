---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTKUAU7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfD51f9EBi4ClAMOJcQLnZuSd4MeFY2ejx%2B%2BQpxeucgIhAJItTUzqdtCm%2FVYZTwB4j6%2Bgw7zdNJ%2B0VkPMsCAg3wSeKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPuxZjiWIB23ApSQq3ANNCKo%2Bza9ugsqvG3xtvaACOlm8hMaTio4CLNk7V09i7AQPA6FOZw0hyuBIq0yfZu9tOnwn%2FB2Ox8ME25pYFetSAkmeLewFa0Sw2TOec%2F70eBVvyGYGkjTubKNjDhBmmOEfbsPUt%2FFrJ4N5oh5QZxyQI5pQyvj82pcIs%2B5Bz94Jd5BH%2BpnVNF8z%2BN4S4LFg7WrW0kai5a0vRn8KB5%2FvBsy%2BUVymkSsJ7GqaUEIGFvt8O02WqMvTPwN80cg6kVJsqwcvlR915f6hmXiTkAjP8HejQ5PnFjdD0%2BakTHqQdvTDGQxYS3CuSRtLowSO0cKQBWzV4TMgxASeI8WBXh2cp0sZ2fIDuJO1w8G6XnT0pZPM1d8p6bqIcra%2FQSqtZ1eTnuvKNnQ1K8SgKsn5m3WFCTUP8%2Fvbwm466y21275%2FI4tVGIgE7s4AMZsdsI60w0hZonEIPchdrcpcYTl91u4aG1y5987CKutPyVdcWJBmCtGytjwGfJ%2F2SfMV3erTFQcJXhJ45wJ9UE4mSlKJyY9TSTrZpmF%2B6iKhGUtoaiOxP0ouOFTsK63vtkedin4u9ZXvJa3sQQNWDIyoM07j1MZbvBomrukgP1mAuUV4rnxAy9nrusVNsZz2%2BJF%2FAy3lwTCZ9vK8BjqkAd%2BmkrLVkDoJbQY0rVlehIpRXNbW%2BR9dFTHFZWxOa9fcp%2BdT47pFnXJpVXzZWuu9r%2BRq62yV8c76kswhqk3D5nl9XSNJfNVaXbojg7N1aC%2B02QVqMIsVkpcHqvSAqKOaDUjyG8Z8IoPJRc9qwAiZdbE23ffF%2BkZV%2B0PNHa2EOilzug3CRJCSMn%2F6M6ZiaROD3Uinou3Q88oFVr9Ap7VM4HCO2vKt&X-Amz-Signature=dcb4bc6b61ffa7894f03deefbfce7817dc703cb1f0152f3d288102aa448b2774&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTKUAU7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfD51f9EBi4ClAMOJcQLnZuSd4MeFY2ejx%2B%2BQpxeucgIhAJItTUzqdtCm%2FVYZTwB4j6%2Bgw7zdNJ%2B0VkPMsCAg3wSeKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPuxZjiWIB23ApSQq3ANNCKo%2Bza9ugsqvG3xtvaACOlm8hMaTio4CLNk7V09i7AQPA6FOZw0hyuBIq0yfZu9tOnwn%2FB2Ox8ME25pYFetSAkmeLewFa0Sw2TOec%2F70eBVvyGYGkjTubKNjDhBmmOEfbsPUt%2FFrJ4N5oh5QZxyQI5pQyvj82pcIs%2B5Bz94Jd5BH%2BpnVNF8z%2BN4S4LFg7WrW0kai5a0vRn8KB5%2FvBsy%2BUVymkSsJ7GqaUEIGFvt8O02WqMvTPwN80cg6kVJsqwcvlR915f6hmXiTkAjP8HejQ5PnFjdD0%2BakTHqQdvTDGQxYS3CuSRtLowSO0cKQBWzV4TMgxASeI8WBXh2cp0sZ2fIDuJO1w8G6XnT0pZPM1d8p6bqIcra%2FQSqtZ1eTnuvKNnQ1K8SgKsn5m3WFCTUP8%2Fvbwm466y21275%2FI4tVGIgE7s4AMZsdsI60w0hZonEIPchdrcpcYTl91u4aG1y5987CKutPyVdcWJBmCtGytjwGfJ%2F2SfMV3erTFQcJXhJ45wJ9UE4mSlKJyY9TSTrZpmF%2B6iKhGUtoaiOxP0ouOFTsK63vtkedin4u9ZXvJa3sQQNWDIyoM07j1MZbvBomrukgP1mAuUV4rnxAy9nrusVNsZz2%2BJF%2FAy3lwTCZ9vK8BjqkAd%2BmkrLVkDoJbQY0rVlehIpRXNbW%2BR9dFTHFZWxOa9fcp%2BdT47pFnXJpVXzZWuu9r%2BRq62yV8c76kswhqk3D5nl9XSNJfNVaXbojg7N1aC%2B02QVqMIsVkpcHqvSAqKOaDUjyG8Z8IoPJRc9qwAiZdbE23ffF%2BkZV%2B0PNHa2EOilzug3CRJCSMn%2F6M6ZiaROD3Uinou3Q88oFVr9Ap7VM4HCO2vKt&X-Amz-Signature=45a18b19ec9cd886b34f82988be93c0f7ea074b36a33a2a7229bf9cfdcc5a738&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTKUAU7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfD51f9EBi4ClAMOJcQLnZuSd4MeFY2ejx%2B%2BQpxeucgIhAJItTUzqdtCm%2FVYZTwB4j6%2Bgw7zdNJ%2B0VkPMsCAg3wSeKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPuxZjiWIB23ApSQq3ANNCKo%2Bza9ugsqvG3xtvaACOlm8hMaTio4CLNk7V09i7AQPA6FOZw0hyuBIq0yfZu9tOnwn%2FB2Ox8ME25pYFetSAkmeLewFa0Sw2TOec%2F70eBVvyGYGkjTubKNjDhBmmOEfbsPUt%2FFrJ4N5oh5QZxyQI5pQyvj82pcIs%2B5Bz94Jd5BH%2BpnVNF8z%2BN4S4LFg7WrW0kai5a0vRn8KB5%2FvBsy%2BUVymkSsJ7GqaUEIGFvt8O02WqMvTPwN80cg6kVJsqwcvlR915f6hmXiTkAjP8HejQ5PnFjdD0%2BakTHqQdvTDGQxYS3CuSRtLowSO0cKQBWzV4TMgxASeI8WBXh2cp0sZ2fIDuJO1w8G6XnT0pZPM1d8p6bqIcra%2FQSqtZ1eTnuvKNnQ1K8SgKsn5m3WFCTUP8%2Fvbwm466y21275%2FI4tVGIgE7s4AMZsdsI60w0hZonEIPchdrcpcYTl91u4aG1y5987CKutPyVdcWJBmCtGytjwGfJ%2F2SfMV3erTFQcJXhJ45wJ9UE4mSlKJyY9TSTrZpmF%2B6iKhGUtoaiOxP0ouOFTsK63vtkedin4u9ZXvJa3sQQNWDIyoM07j1MZbvBomrukgP1mAuUV4rnxAy9nrusVNsZz2%2BJF%2FAy3lwTCZ9vK8BjqkAd%2BmkrLVkDoJbQY0rVlehIpRXNbW%2BR9dFTHFZWxOa9fcp%2BdT47pFnXJpVXzZWuu9r%2BRq62yV8c76kswhqk3D5nl9XSNJfNVaXbojg7N1aC%2B02QVqMIsVkpcHqvSAqKOaDUjyG8Z8IoPJRc9qwAiZdbE23ffF%2BkZV%2B0PNHa2EOilzug3CRJCSMn%2F6M6ZiaROD3Uinou3Q88oFVr9Ap7VM4HCO2vKt&X-Amz-Signature=f8595d370f122c18650f2d7067b5166f87b476fc6eac71e5bac3eca15d65882e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTKUAU7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfD51f9EBi4ClAMOJcQLnZuSd4MeFY2ejx%2B%2BQpxeucgIhAJItTUzqdtCm%2FVYZTwB4j6%2Bgw7zdNJ%2B0VkPMsCAg3wSeKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPuxZjiWIB23ApSQq3ANNCKo%2Bza9ugsqvG3xtvaACOlm8hMaTio4CLNk7V09i7AQPA6FOZw0hyuBIq0yfZu9tOnwn%2FB2Ox8ME25pYFetSAkmeLewFa0Sw2TOec%2F70eBVvyGYGkjTubKNjDhBmmOEfbsPUt%2FFrJ4N5oh5QZxyQI5pQyvj82pcIs%2B5Bz94Jd5BH%2BpnVNF8z%2BN4S4LFg7WrW0kai5a0vRn8KB5%2FvBsy%2BUVymkSsJ7GqaUEIGFvt8O02WqMvTPwN80cg6kVJsqwcvlR915f6hmXiTkAjP8HejQ5PnFjdD0%2BakTHqQdvTDGQxYS3CuSRtLowSO0cKQBWzV4TMgxASeI8WBXh2cp0sZ2fIDuJO1w8G6XnT0pZPM1d8p6bqIcra%2FQSqtZ1eTnuvKNnQ1K8SgKsn5m3WFCTUP8%2Fvbwm466y21275%2FI4tVGIgE7s4AMZsdsI60w0hZonEIPchdrcpcYTl91u4aG1y5987CKutPyVdcWJBmCtGytjwGfJ%2F2SfMV3erTFQcJXhJ45wJ9UE4mSlKJyY9TSTrZpmF%2B6iKhGUtoaiOxP0ouOFTsK63vtkedin4u9ZXvJa3sQQNWDIyoM07j1MZbvBomrukgP1mAuUV4rnxAy9nrusVNsZz2%2BJF%2FAy3lwTCZ9vK8BjqkAd%2BmkrLVkDoJbQY0rVlehIpRXNbW%2BR9dFTHFZWxOa9fcp%2BdT47pFnXJpVXzZWuu9r%2BRq62yV8c76kswhqk3D5nl9XSNJfNVaXbojg7N1aC%2B02QVqMIsVkpcHqvSAqKOaDUjyG8Z8IoPJRc9qwAiZdbE23ffF%2BkZV%2B0PNHa2EOilzug3CRJCSMn%2F6M6ZiaROD3Uinou3Q88oFVr9Ap7VM4HCO2vKt&X-Amz-Signature=caa4539d8f364fc8698c98b3299aee84c6c0b04913cda65c7718a3d447bd086a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTKUAU7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfD51f9EBi4ClAMOJcQLnZuSd4MeFY2ejx%2B%2BQpxeucgIhAJItTUzqdtCm%2FVYZTwB4j6%2Bgw7zdNJ%2B0VkPMsCAg3wSeKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPuxZjiWIB23ApSQq3ANNCKo%2Bza9ugsqvG3xtvaACOlm8hMaTio4CLNk7V09i7AQPA6FOZw0hyuBIq0yfZu9tOnwn%2FB2Ox8ME25pYFetSAkmeLewFa0Sw2TOec%2F70eBVvyGYGkjTubKNjDhBmmOEfbsPUt%2FFrJ4N5oh5QZxyQI5pQyvj82pcIs%2B5Bz94Jd5BH%2BpnVNF8z%2BN4S4LFg7WrW0kai5a0vRn8KB5%2FvBsy%2BUVymkSsJ7GqaUEIGFvt8O02WqMvTPwN80cg6kVJsqwcvlR915f6hmXiTkAjP8HejQ5PnFjdD0%2BakTHqQdvTDGQxYS3CuSRtLowSO0cKQBWzV4TMgxASeI8WBXh2cp0sZ2fIDuJO1w8G6XnT0pZPM1d8p6bqIcra%2FQSqtZ1eTnuvKNnQ1K8SgKsn5m3WFCTUP8%2Fvbwm466y21275%2FI4tVGIgE7s4AMZsdsI60w0hZonEIPchdrcpcYTl91u4aG1y5987CKutPyVdcWJBmCtGytjwGfJ%2F2SfMV3erTFQcJXhJ45wJ9UE4mSlKJyY9TSTrZpmF%2B6iKhGUtoaiOxP0ouOFTsK63vtkedin4u9ZXvJa3sQQNWDIyoM07j1MZbvBomrukgP1mAuUV4rnxAy9nrusVNsZz2%2BJF%2FAy3lwTCZ9vK8BjqkAd%2BmkrLVkDoJbQY0rVlehIpRXNbW%2BR9dFTHFZWxOa9fcp%2BdT47pFnXJpVXzZWuu9r%2BRq62yV8c76kswhqk3D5nl9XSNJfNVaXbojg7N1aC%2B02QVqMIsVkpcHqvSAqKOaDUjyG8Z8IoPJRc9qwAiZdbE23ffF%2BkZV%2B0PNHa2EOilzug3CRJCSMn%2F6M6ZiaROD3Uinou3Q88oFVr9Ap7VM4HCO2vKt&X-Amz-Signature=6901a32715e417b648403e210b7d28cc3d1cbe3ed614770c457b40a4a87738d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTKUAU7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWfD51f9EBi4ClAMOJcQLnZuSd4MeFY2ejx%2B%2BQpxeucgIhAJItTUzqdtCm%2FVYZTwB4j6%2Bgw7zdNJ%2B0VkPMsCAg3wSeKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPuxZjiWIB23ApSQq3ANNCKo%2Bza9ugsqvG3xtvaACOlm8hMaTio4CLNk7V09i7AQPA6FOZw0hyuBIq0yfZu9tOnwn%2FB2Ox8ME25pYFetSAkmeLewFa0Sw2TOec%2F70eBVvyGYGkjTubKNjDhBmmOEfbsPUt%2FFrJ4N5oh5QZxyQI5pQyvj82pcIs%2B5Bz94Jd5BH%2BpnVNF8z%2BN4S4LFg7WrW0kai5a0vRn8KB5%2FvBsy%2BUVymkSsJ7GqaUEIGFvt8O02WqMvTPwN80cg6kVJsqwcvlR915f6hmXiTkAjP8HejQ5PnFjdD0%2BakTHqQdvTDGQxYS3CuSRtLowSO0cKQBWzV4TMgxASeI8WBXh2cp0sZ2fIDuJO1w8G6XnT0pZPM1d8p6bqIcra%2FQSqtZ1eTnuvKNnQ1K8SgKsn5m3WFCTUP8%2Fvbwm466y21275%2FI4tVGIgE7s4AMZsdsI60w0hZonEIPchdrcpcYTl91u4aG1y5987CKutPyVdcWJBmCtGytjwGfJ%2F2SfMV3erTFQcJXhJ45wJ9UE4mSlKJyY9TSTrZpmF%2B6iKhGUtoaiOxP0ouOFTsK63vtkedin4u9ZXvJa3sQQNWDIyoM07j1MZbvBomrukgP1mAuUV4rnxAy9nrusVNsZz2%2BJF%2FAy3lwTCZ9vK8BjqkAd%2BmkrLVkDoJbQY0rVlehIpRXNbW%2BR9dFTHFZWxOa9fcp%2BdT47pFnXJpVXzZWuu9r%2BRq62yV8c76kswhqk3D5nl9XSNJfNVaXbojg7N1aC%2B02QVqMIsVkpcHqvSAqKOaDUjyG8Z8IoPJRc9qwAiZdbE23ffF%2BkZV%2B0PNHa2EOilzug3CRJCSMn%2F6M6ZiaROD3Uinou3Q88oFVr9Ap7VM4HCO2vKt&X-Amz-Signature=061dd317b31f5249a1a372d9baac5a64f96372ada37df26c7026b9d7fa2d1008&X-Amz-SignedHeaders=host&x-id=GetObject)
