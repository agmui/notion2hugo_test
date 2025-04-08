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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVATCPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7dbK56l9WoFx39Y2jIW21rcmsX8VUrmpNWwfiJGt%2FAiEAgiEUzkzSe5Ie9jCoYOi7pI9xO1FHzpabNrmH67iX0NUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHtz6GyPLeXwDumoNircA4gdLAX88BcYsctoy%2BO2v1hIuQ11JdsqAV%2BKvU%2Byn7jvYH0h7VHhGEsRyhQCPYsC3liF8pBDzGr4q3dwMeHxKwuXNBQIcUlhMgPM9X7pczgFOHL0y%2FtKL7bwvRZBykRmxMnxLMzLTQ06qMHXZeWDXNT41npYczP6hs8APyfkzipfckz8XF6Jr9xeRhltU%2B%2B4LpSiArck7qjPk3pcbHWL9EvhoMxy%2BDA3FrEFn1MiBWjrFDiKK%2FqywYbuG3U4pq9p8WW8ea6qIKaCUbcdqFcHETCQU612UYYFH6mvRsHf9t%2FpFmiWxXrre1BgAwNWyJMUkUx4L5dB4A1WN0Vh9V50izqWBIghv3rBuZCM0Rl9vApMhC2Y%2BKhs7X%2BK3mm1Y9s6MOVYI7x51svETiT6jFOoYjOW0KhG15qb7eYGZTKOY4WS18UA0PKConYPB51%2FjeTX%2FEFw%2BILycIa0N2LdSpXG%2BZvWq2E1Fjxdv8Sykx%2BDv90v79p%2BHwsqZiBgzCm2uurLjWQ7aCGmxs4IX4t3TQzH%2BfevDnBI88W3OU3ipj0qgRYLX%2FzZ6OwmX5UEKUEIqOecU07gmGvqhrop%2BPZFOAiOsmzr3BRMQi55Ka7zfz9i59Qgy70Y6znGZSHBiGCUMP6e0r8GOqUBA5j%2B9hXp6VbJHKmx8PEBptwqqqamb10woAmMeNo%2BVpmyue1Vww0%2B05Zrmd%2Brx%2F%2BCgXrLLwiRHHMWqcKhl6rRhFG%2FsPF6%2FP4ZnxaeFpRwR017l9E5wnfEGLcchukDWDHYVZV%2BsM58tV7f1K2EVllldSfHsbVA%2B0WasbzEpbBmSQmm1DnqXOrFOqrwlgI3oSVqYkRIQk1dyShZZNYpC%2FqnUCyByYrO&X-Amz-Signature=b51f00c2add5aa854d4db9d0d3877367cb40732f78e14e1b33dff21e32457f82&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVATCPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7dbK56l9WoFx39Y2jIW21rcmsX8VUrmpNWwfiJGt%2FAiEAgiEUzkzSe5Ie9jCoYOi7pI9xO1FHzpabNrmH67iX0NUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHtz6GyPLeXwDumoNircA4gdLAX88BcYsctoy%2BO2v1hIuQ11JdsqAV%2BKvU%2Byn7jvYH0h7VHhGEsRyhQCPYsC3liF8pBDzGr4q3dwMeHxKwuXNBQIcUlhMgPM9X7pczgFOHL0y%2FtKL7bwvRZBykRmxMnxLMzLTQ06qMHXZeWDXNT41npYczP6hs8APyfkzipfckz8XF6Jr9xeRhltU%2B%2B4LpSiArck7qjPk3pcbHWL9EvhoMxy%2BDA3FrEFn1MiBWjrFDiKK%2FqywYbuG3U4pq9p8WW8ea6qIKaCUbcdqFcHETCQU612UYYFH6mvRsHf9t%2FpFmiWxXrre1BgAwNWyJMUkUx4L5dB4A1WN0Vh9V50izqWBIghv3rBuZCM0Rl9vApMhC2Y%2BKhs7X%2BK3mm1Y9s6MOVYI7x51svETiT6jFOoYjOW0KhG15qb7eYGZTKOY4WS18UA0PKConYPB51%2FjeTX%2FEFw%2BILycIa0N2LdSpXG%2BZvWq2E1Fjxdv8Sykx%2BDv90v79p%2BHwsqZiBgzCm2uurLjWQ7aCGmxs4IX4t3TQzH%2BfevDnBI88W3OU3ipj0qgRYLX%2FzZ6OwmX5UEKUEIqOecU07gmGvqhrop%2BPZFOAiOsmzr3BRMQi55Ka7zfz9i59Qgy70Y6znGZSHBiGCUMP6e0r8GOqUBA5j%2B9hXp6VbJHKmx8PEBptwqqqamb10woAmMeNo%2BVpmyue1Vww0%2B05Zrmd%2Brx%2F%2BCgXrLLwiRHHMWqcKhl6rRhFG%2FsPF6%2FP4ZnxaeFpRwR017l9E5wnfEGLcchukDWDHYVZV%2BsM58tV7f1K2EVllldSfHsbVA%2B0WasbzEpbBmSQmm1DnqXOrFOqrwlgI3oSVqYkRIQk1dyShZZNYpC%2FqnUCyByYrO&X-Amz-Signature=d9b50b9b43c506d5c41ec7da1e2271cf017b976718be030a60aedd952c1a1417&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVATCPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7dbK56l9WoFx39Y2jIW21rcmsX8VUrmpNWwfiJGt%2FAiEAgiEUzkzSe5Ie9jCoYOi7pI9xO1FHzpabNrmH67iX0NUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHtz6GyPLeXwDumoNircA4gdLAX88BcYsctoy%2BO2v1hIuQ11JdsqAV%2BKvU%2Byn7jvYH0h7VHhGEsRyhQCPYsC3liF8pBDzGr4q3dwMeHxKwuXNBQIcUlhMgPM9X7pczgFOHL0y%2FtKL7bwvRZBykRmxMnxLMzLTQ06qMHXZeWDXNT41npYczP6hs8APyfkzipfckz8XF6Jr9xeRhltU%2B%2B4LpSiArck7qjPk3pcbHWL9EvhoMxy%2BDA3FrEFn1MiBWjrFDiKK%2FqywYbuG3U4pq9p8WW8ea6qIKaCUbcdqFcHETCQU612UYYFH6mvRsHf9t%2FpFmiWxXrre1BgAwNWyJMUkUx4L5dB4A1WN0Vh9V50izqWBIghv3rBuZCM0Rl9vApMhC2Y%2BKhs7X%2BK3mm1Y9s6MOVYI7x51svETiT6jFOoYjOW0KhG15qb7eYGZTKOY4WS18UA0PKConYPB51%2FjeTX%2FEFw%2BILycIa0N2LdSpXG%2BZvWq2E1Fjxdv8Sykx%2BDv90v79p%2BHwsqZiBgzCm2uurLjWQ7aCGmxs4IX4t3TQzH%2BfevDnBI88W3OU3ipj0qgRYLX%2FzZ6OwmX5UEKUEIqOecU07gmGvqhrop%2BPZFOAiOsmzr3BRMQi55Ka7zfz9i59Qgy70Y6znGZSHBiGCUMP6e0r8GOqUBA5j%2B9hXp6VbJHKmx8PEBptwqqqamb10woAmMeNo%2BVpmyue1Vww0%2B05Zrmd%2Brx%2F%2BCgXrLLwiRHHMWqcKhl6rRhFG%2FsPF6%2FP4ZnxaeFpRwR017l9E5wnfEGLcchukDWDHYVZV%2BsM58tV7f1K2EVllldSfHsbVA%2B0WasbzEpbBmSQmm1DnqXOrFOqrwlgI3oSVqYkRIQk1dyShZZNYpC%2FqnUCyByYrO&X-Amz-Signature=9601d7ccee7ce5546301cd86e9baaaf86ae527635b2267017fe8b44824aa58af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVATCPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7dbK56l9WoFx39Y2jIW21rcmsX8VUrmpNWwfiJGt%2FAiEAgiEUzkzSe5Ie9jCoYOi7pI9xO1FHzpabNrmH67iX0NUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHtz6GyPLeXwDumoNircA4gdLAX88BcYsctoy%2BO2v1hIuQ11JdsqAV%2BKvU%2Byn7jvYH0h7VHhGEsRyhQCPYsC3liF8pBDzGr4q3dwMeHxKwuXNBQIcUlhMgPM9X7pczgFOHL0y%2FtKL7bwvRZBykRmxMnxLMzLTQ06qMHXZeWDXNT41npYczP6hs8APyfkzipfckz8XF6Jr9xeRhltU%2B%2B4LpSiArck7qjPk3pcbHWL9EvhoMxy%2BDA3FrEFn1MiBWjrFDiKK%2FqywYbuG3U4pq9p8WW8ea6qIKaCUbcdqFcHETCQU612UYYFH6mvRsHf9t%2FpFmiWxXrre1BgAwNWyJMUkUx4L5dB4A1WN0Vh9V50izqWBIghv3rBuZCM0Rl9vApMhC2Y%2BKhs7X%2BK3mm1Y9s6MOVYI7x51svETiT6jFOoYjOW0KhG15qb7eYGZTKOY4WS18UA0PKConYPB51%2FjeTX%2FEFw%2BILycIa0N2LdSpXG%2BZvWq2E1Fjxdv8Sykx%2BDv90v79p%2BHwsqZiBgzCm2uurLjWQ7aCGmxs4IX4t3TQzH%2BfevDnBI88W3OU3ipj0qgRYLX%2FzZ6OwmX5UEKUEIqOecU07gmGvqhrop%2BPZFOAiOsmzr3BRMQi55Ka7zfz9i59Qgy70Y6znGZSHBiGCUMP6e0r8GOqUBA5j%2B9hXp6VbJHKmx8PEBptwqqqamb10woAmMeNo%2BVpmyue1Vww0%2B05Zrmd%2Brx%2F%2BCgXrLLwiRHHMWqcKhl6rRhFG%2FsPF6%2FP4ZnxaeFpRwR017l9E5wnfEGLcchukDWDHYVZV%2BsM58tV7f1K2EVllldSfHsbVA%2B0WasbzEpbBmSQmm1DnqXOrFOqrwlgI3oSVqYkRIQk1dyShZZNYpC%2FqnUCyByYrO&X-Amz-Signature=1422959b9792ed14556d20145b11daad203362662daa045ecf37f3b21705cbad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVATCPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7dbK56l9WoFx39Y2jIW21rcmsX8VUrmpNWwfiJGt%2FAiEAgiEUzkzSe5Ie9jCoYOi7pI9xO1FHzpabNrmH67iX0NUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHtz6GyPLeXwDumoNircA4gdLAX88BcYsctoy%2BO2v1hIuQ11JdsqAV%2BKvU%2Byn7jvYH0h7VHhGEsRyhQCPYsC3liF8pBDzGr4q3dwMeHxKwuXNBQIcUlhMgPM9X7pczgFOHL0y%2FtKL7bwvRZBykRmxMnxLMzLTQ06qMHXZeWDXNT41npYczP6hs8APyfkzipfckz8XF6Jr9xeRhltU%2B%2B4LpSiArck7qjPk3pcbHWL9EvhoMxy%2BDA3FrEFn1MiBWjrFDiKK%2FqywYbuG3U4pq9p8WW8ea6qIKaCUbcdqFcHETCQU612UYYFH6mvRsHf9t%2FpFmiWxXrre1BgAwNWyJMUkUx4L5dB4A1WN0Vh9V50izqWBIghv3rBuZCM0Rl9vApMhC2Y%2BKhs7X%2BK3mm1Y9s6MOVYI7x51svETiT6jFOoYjOW0KhG15qb7eYGZTKOY4WS18UA0PKConYPB51%2FjeTX%2FEFw%2BILycIa0N2LdSpXG%2BZvWq2E1Fjxdv8Sykx%2BDv90v79p%2BHwsqZiBgzCm2uurLjWQ7aCGmxs4IX4t3TQzH%2BfevDnBI88W3OU3ipj0qgRYLX%2FzZ6OwmX5UEKUEIqOecU07gmGvqhrop%2BPZFOAiOsmzr3BRMQi55Ka7zfz9i59Qgy70Y6znGZSHBiGCUMP6e0r8GOqUBA5j%2B9hXp6VbJHKmx8PEBptwqqqamb10woAmMeNo%2BVpmyue1Vww0%2B05Zrmd%2Brx%2F%2BCgXrLLwiRHHMWqcKhl6rRhFG%2FsPF6%2FP4ZnxaeFpRwR017l9E5wnfEGLcchukDWDHYVZV%2BsM58tV7f1K2EVllldSfHsbVA%2B0WasbzEpbBmSQmm1DnqXOrFOqrwlgI3oSVqYkRIQk1dyShZZNYpC%2FqnUCyByYrO&X-Amz-Signature=c8c192e83923f868ddb28e59a79e560ce325303bfd068dce25c3add564dbb17b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVATCPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7dbK56l9WoFx39Y2jIW21rcmsX8VUrmpNWwfiJGt%2FAiEAgiEUzkzSe5Ie9jCoYOi7pI9xO1FHzpabNrmH67iX0NUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHtz6GyPLeXwDumoNircA4gdLAX88BcYsctoy%2BO2v1hIuQ11JdsqAV%2BKvU%2Byn7jvYH0h7VHhGEsRyhQCPYsC3liF8pBDzGr4q3dwMeHxKwuXNBQIcUlhMgPM9X7pczgFOHL0y%2FtKL7bwvRZBykRmxMnxLMzLTQ06qMHXZeWDXNT41npYczP6hs8APyfkzipfckz8XF6Jr9xeRhltU%2B%2B4LpSiArck7qjPk3pcbHWL9EvhoMxy%2BDA3FrEFn1MiBWjrFDiKK%2FqywYbuG3U4pq9p8WW8ea6qIKaCUbcdqFcHETCQU612UYYFH6mvRsHf9t%2FpFmiWxXrre1BgAwNWyJMUkUx4L5dB4A1WN0Vh9V50izqWBIghv3rBuZCM0Rl9vApMhC2Y%2BKhs7X%2BK3mm1Y9s6MOVYI7x51svETiT6jFOoYjOW0KhG15qb7eYGZTKOY4WS18UA0PKConYPB51%2FjeTX%2FEFw%2BILycIa0N2LdSpXG%2BZvWq2E1Fjxdv8Sykx%2BDv90v79p%2BHwsqZiBgzCm2uurLjWQ7aCGmxs4IX4t3TQzH%2BfevDnBI88W3OU3ipj0qgRYLX%2FzZ6OwmX5UEKUEIqOecU07gmGvqhrop%2BPZFOAiOsmzr3BRMQi55Ka7zfz9i59Qgy70Y6znGZSHBiGCUMP6e0r8GOqUBA5j%2B9hXp6VbJHKmx8PEBptwqqqamb10woAmMeNo%2BVpmyue1Vww0%2B05Zrmd%2Brx%2F%2BCgXrLLwiRHHMWqcKhl6rRhFG%2FsPF6%2FP4ZnxaeFpRwR017l9E5wnfEGLcchukDWDHYVZV%2BsM58tV7f1K2EVllldSfHsbVA%2B0WasbzEpbBmSQmm1DnqXOrFOqrwlgI3oSVqYkRIQk1dyShZZNYpC%2FqnUCyByYrO&X-Amz-Signature=525b5c9d27fce5e298e1efc14b81d0cdc36cb24e1aa6ab46ae565bcf7c1e899c&X-Amz-SignedHeaders=host&x-id=GetObject)
