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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2TNX4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCxUtXRqZKxV6d9NcazUIskXAaxSCzj3xfxCsw88zc%2FvgIgO5194NbO7a1A4t5MHqsh0%2BTiwdP%2BS%2FcmUKZAhK9Y1iwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBKAfzGkcXk%2FrSeJGircA6G0WtBsEBQsl7KxULcO7KOAzetTVzLc6pFpxNoAuIOuZZk9X8jfg1cYAsdnbFl91XucRh0GgmwgXwUUsyANZk8au9YoqbwrK2HcX0DMTa6M7L2bTjnsWuPfSRN4AXMFWg7s9VZmoGwcc6Serog9D0XBGGT8klWeq%2B8%2FLfrxOVeaiDc5lfbSglvIXW21DiBECx2LljpZvH9TR4riwrnzvXu3D2AnmvWX21LumZ5YxAFKWMsneNER88rEgEVS5gfBZDBZLUVYPVJzg2CQKPMQcUItJYCnHTou3spDOw9VnP%2F5M7uYSpdvR%2FpbIxCHakaZkCIxQ4tX1XgfdlzoUH%2Fsa2jc4nqzp1MylUYSSkGRbeB%2BIXSqhHUdEaKH%2Bfn52Lkr14j3y2e6imBPkBLsSO019xrsqPTJsE5nHadqIHPZU%2BPpbxYqqy%2B3Bms%2BwfXMHHsMqoW6UNLxsNgCWYV%2BV6%2F5yIpkMRQJETVZEly7%2FjBv%2BQLDcbIlK7kXGX%2BjHUKc11T4WvNnbRDPSVRYwDxMqhlZKH%2BvFVaQ4Sq5gl6iqpTPlgEfR0INDChZiDzz00XdFMG5BR%2FepeXW5O1gquX8SX39HlFM9%2Bsvz0H1x5HlIk9WgEj2TvhysUcwmFcVBD6IML673sAGOqUBu1RLoZMp17dsLL5T6tjHreLywiMPX1YNF3ls8A45ZOleIGdAFzesa2ETWHhSa1VG7VNrwHm0oNxByf3j7Zc3yBHEtN0lX83SNH2TVAMXcG6oxmZG%2FqmPwXopcMb7w0BjystAiGQ6Ux3%2BDxDjL3tS4YAu1FpuqWkBci8lxdRPfOUD%2FmA7Or46rEdHCFEFIdfj0fhkw%2B4Ld1aj1mgQf%2BP8B%2FfZUbbR&X-Amz-Signature=505433032f722ce21c243ec571280364fe17dcd520542b687c58d397d3e0e0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2TNX4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCxUtXRqZKxV6d9NcazUIskXAaxSCzj3xfxCsw88zc%2FvgIgO5194NbO7a1A4t5MHqsh0%2BTiwdP%2BS%2FcmUKZAhK9Y1iwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBKAfzGkcXk%2FrSeJGircA6G0WtBsEBQsl7KxULcO7KOAzetTVzLc6pFpxNoAuIOuZZk9X8jfg1cYAsdnbFl91XucRh0GgmwgXwUUsyANZk8au9YoqbwrK2HcX0DMTa6M7L2bTjnsWuPfSRN4AXMFWg7s9VZmoGwcc6Serog9D0XBGGT8klWeq%2B8%2FLfrxOVeaiDc5lfbSglvIXW21DiBECx2LljpZvH9TR4riwrnzvXu3D2AnmvWX21LumZ5YxAFKWMsneNER88rEgEVS5gfBZDBZLUVYPVJzg2CQKPMQcUItJYCnHTou3spDOw9VnP%2F5M7uYSpdvR%2FpbIxCHakaZkCIxQ4tX1XgfdlzoUH%2Fsa2jc4nqzp1MylUYSSkGRbeB%2BIXSqhHUdEaKH%2Bfn52Lkr14j3y2e6imBPkBLsSO019xrsqPTJsE5nHadqIHPZU%2BPpbxYqqy%2B3Bms%2BwfXMHHsMqoW6UNLxsNgCWYV%2BV6%2F5yIpkMRQJETVZEly7%2FjBv%2BQLDcbIlK7kXGX%2BjHUKc11T4WvNnbRDPSVRYwDxMqhlZKH%2BvFVaQ4Sq5gl6iqpTPlgEfR0INDChZiDzz00XdFMG5BR%2FepeXW5O1gquX8SX39HlFM9%2Bsvz0H1x5HlIk9WgEj2TvhysUcwmFcVBD6IML673sAGOqUBu1RLoZMp17dsLL5T6tjHreLywiMPX1YNF3ls8A45ZOleIGdAFzesa2ETWHhSa1VG7VNrwHm0oNxByf3j7Zc3yBHEtN0lX83SNH2TVAMXcG6oxmZG%2FqmPwXopcMb7w0BjystAiGQ6Ux3%2BDxDjL3tS4YAu1FpuqWkBci8lxdRPfOUD%2FmA7Or46rEdHCFEFIdfj0fhkw%2B4Ld1aj1mgQf%2BP8B%2FfZUbbR&X-Amz-Signature=6704a9acd9530092e3de987f898a25d68fc46058127ab478cac8aa8018993e79&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2TNX4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCxUtXRqZKxV6d9NcazUIskXAaxSCzj3xfxCsw88zc%2FvgIgO5194NbO7a1A4t5MHqsh0%2BTiwdP%2BS%2FcmUKZAhK9Y1iwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBKAfzGkcXk%2FrSeJGircA6G0WtBsEBQsl7KxULcO7KOAzetTVzLc6pFpxNoAuIOuZZk9X8jfg1cYAsdnbFl91XucRh0GgmwgXwUUsyANZk8au9YoqbwrK2HcX0DMTa6M7L2bTjnsWuPfSRN4AXMFWg7s9VZmoGwcc6Serog9D0XBGGT8klWeq%2B8%2FLfrxOVeaiDc5lfbSglvIXW21DiBECx2LljpZvH9TR4riwrnzvXu3D2AnmvWX21LumZ5YxAFKWMsneNER88rEgEVS5gfBZDBZLUVYPVJzg2CQKPMQcUItJYCnHTou3spDOw9VnP%2F5M7uYSpdvR%2FpbIxCHakaZkCIxQ4tX1XgfdlzoUH%2Fsa2jc4nqzp1MylUYSSkGRbeB%2BIXSqhHUdEaKH%2Bfn52Lkr14j3y2e6imBPkBLsSO019xrsqPTJsE5nHadqIHPZU%2BPpbxYqqy%2B3Bms%2BwfXMHHsMqoW6UNLxsNgCWYV%2BV6%2F5yIpkMRQJETVZEly7%2FjBv%2BQLDcbIlK7kXGX%2BjHUKc11T4WvNnbRDPSVRYwDxMqhlZKH%2BvFVaQ4Sq5gl6iqpTPlgEfR0INDChZiDzz00XdFMG5BR%2FepeXW5O1gquX8SX39HlFM9%2Bsvz0H1x5HlIk9WgEj2TvhysUcwmFcVBD6IML673sAGOqUBu1RLoZMp17dsLL5T6tjHreLywiMPX1YNF3ls8A45ZOleIGdAFzesa2ETWHhSa1VG7VNrwHm0oNxByf3j7Zc3yBHEtN0lX83SNH2TVAMXcG6oxmZG%2FqmPwXopcMb7w0BjystAiGQ6Ux3%2BDxDjL3tS4YAu1FpuqWkBci8lxdRPfOUD%2FmA7Or46rEdHCFEFIdfj0fhkw%2B4Ld1aj1mgQf%2BP8B%2FfZUbbR&X-Amz-Signature=cbe82c362abd8e7be412d402d2cf35c00c395363fefdbafeab114ace085fbeb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2TNX4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCxUtXRqZKxV6d9NcazUIskXAaxSCzj3xfxCsw88zc%2FvgIgO5194NbO7a1A4t5MHqsh0%2BTiwdP%2BS%2FcmUKZAhK9Y1iwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBKAfzGkcXk%2FrSeJGircA6G0WtBsEBQsl7KxULcO7KOAzetTVzLc6pFpxNoAuIOuZZk9X8jfg1cYAsdnbFl91XucRh0GgmwgXwUUsyANZk8au9YoqbwrK2HcX0DMTa6M7L2bTjnsWuPfSRN4AXMFWg7s9VZmoGwcc6Serog9D0XBGGT8klWeq%2B8%2FLfrxOVeaiDc5lfbSglvIXW21DiBECx2LljpZvH9TR4riwrnzvXu3D2AnmvWX21LumZ5YxAFKWMsneNER88rEgEVS5gfBZDBZLUVYPVJzg2CQKPMQcUItJYCnHTou3spDOw9VnP%2F5M7uYSpdvR%2FpbIxCHakaZkCIxQ4tX1XgfdlzoUH%2Fsa2jc4nqzp1MylUYSSkGRbeB%2BIXSqhHUdEaKH%2Bfn52Lkr14j3y2e6imBPkBLsSO019xrsqPTJsE5nHadqIHPZU%2BPpbxYqqy%2B3Bms%2BwfXMHHsMqoW6UNLxsNgCWYV%2BV6%2F5yIpkMRQJETVZEly7%2FjBv%2BQLDcbIlK7kXGX%2BjHUKc11T4WvNnbRDPSVRYwDxMqhlZKH%2BvFVaQ4Sq5gl6iqpTPlgEfR0INDChZiDzz00XdFMG5BR%2FepeXW5O1gquX8SX39HlFM9%2Bsvz0H1x5HlIk9WgEj2TvhysUcwmFcVBD6IML673sAGOqUBu1RLoZMp17dsLL5T6tjHreLywiMPX1YNF3ls8A45ZOleIGdAFzesa2ETWHhSa1VG7VNrwHm0oNxByf3j7Zc3yBHEtN0lX83SNH2TVAMXcG6oxmZG%2FqmPwXopcMb7w0BjystAiGQ6Ux3%2BDxDjL3tS4YAu1FpuqWkBci8lxdRPfOUD%2FmA7Or46rEdHCFEFIdfj0fhkw%2B4Ld1aj1mgQf%2BP8B%2FfZUbbR&X-Amz-Signature=d9479350049c040c5ccfd27d353fe6c92d8d47f4b31ea5958be3efdd4dae65f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2TNX4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCxUtXRqZKxV6d9NcazUIskXAaxSCzj3xfxCsw88zc%2FvgIgO5194NbO7a1A4t5MHqsh0%2BTiwdP%2BS%2FcmUKZAhK9Y1iwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBKAfzGkcXk%2FrSeJGircA6G0WtBsEBQsl7KxULcO7KOAzetTVzLc6pFpxNoAuIOuZZk9X8jfg1cYAsdnbFl91XucRh0GgmwgXwUUsyANZk8au9YoqbwrK2HcX0DMTa6M7L2bTjnsWuPfSRN4AXMFWg7s9VZmoGwcc6Serog9D0XBGGT8klWeq%2B8%2FLfrxOVeaiDc5lfbSglvIXW21DiBECx2LljpZvH9TR4riwrnzvXu3D2AnmvWX21LumZ5YxAFKWMsneNER88rEgEVS5gfBZDBZLUVYPVJzg2CQKPMQcUItJYCnHTou3spDOw9VnP%2F5M7uYSpdvR%2FpbIxCHakaZkCIxQ4tX1XgfdlzoUH%2Fsa2jc4nqzp1MylUYSSkGRbeB%2BIXSqhHUdEaKH%2Bfn52Lkr14j3y2e6imBPkBLsSO019xrsqPTJsE5nHadqIHPZU%2BPpbxYqqy%2B3Bms%2BwfXMHHsMqoW6UNLxsNgCWYV%2BV6%2F5yIpkMRQJETVZEly7%2FjBv%2BQLDcbIlK7kXGX%2BjHUKc11T4WvNnbRDPSVRYwDxMqhlZKH%2BvFVaQ4Sq5gl6iqpTPlgEfR0INDChZiDzz00XdFMG5BR%2FepeXW5O1gquX8SX39HlFM9%2Bsvz0H1x5HlIk9WgEj2TvhysUcwmFcVBD6IML673sAGOqUBu1RLoZMp17dsLL5T6tjHreLywiMPX1YNF3ls8A45ZOleIGdAFzesa2ETWHhSa1VG7VNrwHm0oNxByf3j7Zc3yBHEtN0lX83SNH2TVAMXcG6oxmZG%2FqmPwXopcMb7w0BjystAiGQ6Ux3%2BDxDjL3tS4YAu1FpuqWkBci8lxdRPfOUD%2FmA7Or46rEdHCFEFIdfj0fhkw%2B4Ld1aj1mgQf%2BP8B%2FfZUbbR&X-Amz-Signature=314da3ea1ca7f3d21f862498cffef8302099599a8df1ff85a9af46ab9e628b75&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL2TNX4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCxUtXRqZKxV6d9NcazUIskXAaxSCzj3xfxCsw88zc%2FvgIgO5194NbO7a1A4t5MHqsh0%2BTiwdP%2BS%2FcmUKZAhK9Y1iwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBKAfzGkcXk%2FrSeJGircA6G0WtBsEBQsl7KxULcO7KOAzetTVzLc6pFpxNoAuIOuZZk9X8jfg1cYAsdnbFl91XucRh0GgmwgXwUUsyANZk8au9YoqbwrK2HcX0DMTa6M7L2bTjnsWuPfSRN4AXMFWg7s9VZmoGwcc6Serog9D0XBGGT8klWeq%2B8%2FLfrxOVeaiDc5lfbSglvIXW21DiBECx2LljpZvH9TR4riwrnzvXu3D2AnmvWX21LumZ5YxAFKWMsneNER88rEgEVS5gfBZDBZLUVYPVJzg2CQKPMQcUItJYCnHTou3spDOw9VnP%2F5M7uYSpdvR%2FpbIxCHakaZkCIxQ4tX1XgfdlzoUH%2Fsa2jc4nqzp1MylUYSSkGRbeB%2BIXSqhHUdEaKH%2Bfn52Lkr14j3y2e6imBPkBLsSO019xrsqPTJsE5nHadqIHPZU%2BPpbxYqqy%2B3Bms%2BwfXMHHsMqoW6UNLxsNgCWYV%2BV6%2F5yIpkMRQJETVZEly7%2FjBv%2BQLDcbIlK7kXGX%2BjHUKc11T4WvNnbRDPSVRYwDxMqhlZKH%2BvFVaQ4Sq5gl6iqpTPlgEfR0INDChZiDzz00XdFMG5BR%2FepeXW5O1gquX8SX39HlFM9%2Bsvz0H1x5HlIk9WgEj2TvhysUcwmFcVBD6IML673sAGOqUBu1RLoZMp17dsLL5T6tjHreLywiMPX1YNF3ls8A45ZOleIGdAFzesa2ETWHhSa1VG7VNrwHm0oNxByf3j7Zc3yBHEtN0lX83SNH2TVAMXcG6oxmZG%2FqmPwXopcMb7w0BjystAiGQ6Ux3%2BDxDjL3tS4YAu1FpuqWkBci8lxdRPfOUD%2FmA7Or46rEdHCFEFIdfj0fhkw%2B4Ld1aj1mgQf%2BP8B%2FfZUbbR&X-Amz-Signature=a676e248339144dd85a18e23ef7f2258364e432236aea036442868efecceeac6&X-Amz-SignedHeaders=host&x-id=GetObject)
