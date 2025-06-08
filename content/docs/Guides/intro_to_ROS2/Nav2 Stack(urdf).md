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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAJEBZ6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGuGgD8Y9b12UAsLog766zDriPfH1GQPPAtc3AighGHAIgCudVRe9CRMk84KFQ1PmiO2FLkF3jP2zHXXSUrV2eRlcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMub9%2F8KvKwBDf%2Bg5SrcA78iXTfQCWbkOnQF6v5zAlxMW9Kzi2QnI6iV4SXGlwsAdItdyZF8ouo8wqZpMfKD4udBBmABzv4gT2V5oQQkOjCPp3BSlYROcNmqTFt2idutQXPdvpdK%2F3cOxzilvk4TARVrAP3T1o2OG0JXPlWhIUPKY%2FXOH51HrihLSQxmRCJF60k%2FsrytdSJkhzaBL6%2FzKLGqrTT73MmmwJ4QazOZfTLcNAFX9osBCML5FAuHX4IQ2CKLnExzBZ02jlLt9G6TcDS%2FhEX7jzwBAUknAe0L9%2FuTPKxWLPjcADZY8dHfGDrZxMEV6zsdNuGMNJXlalI3Z%2FPRFzizMbEuSAjgLSG8JFt244aGqNA0wa1vV2mE0SNXARwJQCOnsqljBgS3Qi79RizhypzIktUHOf5p5uk0M55HqGIYDX6ukAuHRO0Zg2Mk4xf6vEIRN65GxV%2BmTW6MBCMmvmA219P7m3Gxi066R%2FCDz8I5mfOuTSf5GgNXcdUswZbqMyBSNKhUQTtak%2FZxa5sh%2BwDcY%2FpXrNQ8rzCeSAlG2%2BfGpYkFuYbALm1q2oFNYnBc3jYT%2FKhJw0se3h2VzuVAXSZkJHF9FA5uOm%2FMaMsHTyYwmii1xZlk97PEDF2ITdWnv2AWpvsR6ur1MMizlsIGOqUBKWLzihvnOHd%2BGxNUZpgocFV7utmgT7jI6%2F7pFuy1r3m9soFqQjjpv%2F%2F0YYExsJyebfK9BF8f471sKS2myK82oZ5fUCfNbOHvB4VBBhYc2Mx0o5pXnxzpz%2BDwLHtedCf0t56UEF%2FSTGeuU56En8%2F7sDfuFdyrMPi1L%2FyfyxVZDSSLW7UVivkvqWhjUzxob6yRCwlJlG2%2B%2Bc4kUxxuDt691RjIuOpj&X-Amz-Signature=530736c102c89d6399dd385f7e0d6bf93f83bb13082edefc6ef7dee992d4a544&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAJEBZ6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGuGgD8Y9b12UAsLog766zDriPfH1GQPPAtc3AighGHAIgCudVRe9CRMk84KFQ1PmiO2FLkF3jP2zHXXSUrV2eRlcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMub9%2F8KvKwBDf%2Bg5SrcA78iXTfQCWbkOnQF6v5zAlxMW9Kzi2QnI6iV4SXGlwsAdItdyZF8ouo8wqZpMfKD4udBBmABzv4gT2V5oQQkOjCPp3BSlYROcNmqTFt2idutQXPdvpdK%2F3cOxzilvk4TARVrAP3T1o2OG0JXPlWhIUPKY%2FXOH51HrihLSQxmRCJF60k%2FsrytdSJkhzaBL6%2FzKLGqrTT73MmmwJ4QazOZfTLcNAFX9osBCML5FAuHX4IQ2CKLnExzBZ02jlLt9G6TcDS%2FhEX7jzwBAUknAe0L9%2FuTPKxWLPjcADZY8dHfGDrZxMEV6zsdNuGMNJXlalI3Z%2FPRFzizMbEuSAjgLSG8JFt244aGqNA0wa1vV2mE0SNXARwJQCOnsqljBgS3Qi79RizhypzIktUHOf5p5uk0M55HqGIYDX6ukAuHRO0Zg2Mk4xf6vEIRN65GxV%2BmTW6MBCMmvmA219P7m3Gxi066R%2FCDz8I5mfOuTSf5GgNXcdUswZbqMyBSNKhUQTtak%2FZxa5sh%2BwDcY%2FpXrNQ8rzCeSAlG2%2BfGpYkFuYbALm1q2oFNYnBc3jYT%2FKhJw0se3h2VzuVAXSZkJHF9FA5uOm%2FMaMsHTyYwmii1xZlk97PEDF2ITdWnv2AWpvsR6ur1MMizlsIGOqUBKWLzihvnOHd%2BGxNUZpgocFV7utmgT7jI6%2F7pFuy1r3m9soFqQjjpv%2F%2F0YYExsJyebfK9BF8f471sKS2myK82oZ5fUCfNbOHvB4VBBhYc2Mx0o5pXnxzpz%2BDwLHtedCf0t56UEF%2FSTGeuU56En8%2F7sDfuFdyrMPi1L%2FyfyxVZDSSLW7UVivkvqWhjUzxob6yRCwlJlG2%2B%2Bc4kUxxuDt691RjIuOpj&X-Amz-Signature=e229ae9c0ebc62870bc9ba7d197cfd728ebdb7548a42c00adc31fb2cc41a9e73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAJEBZ6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGuGgD8Y9b12UAsLog766zDriPfH1GQPPAtc3AighGHAIgCudVRe9CRMk84KFQ1PmiO2FLkF3jP2zHXXSUrV2eRlcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMub9%2F8KvKwBDf%2Bg5SrcA78iXTfQCWbkOnQF6v5zAlxMW9Kzi2QnI6iV4SXGlwsAdItdyZF8ouo8wqZpMfKD4udBBmABzv4gT2V5oQQkOjCPp3BSlYROcNmqTFt2idutQXPdvpdK%2F3cOxzilvk4TARVrAP3T1o2OG0JXPlWhIUPKY%2FXOH51HrihLSQxmRCJF60k%2FsrytdSJkhzaBL6%2FzKLGqrTT73MmmwJ4QazOZfTLcNAFX9osBCML5FAuHX4IQ2CKLnExzBZ02jlLt9G6TcDS%2FhEX7jzwBAUknAe0L9%2FuTPKxWLPjcADZY8dHfGDrZxMEV6zsdNuGMNJXlalI3Z%2FPRFzizMbEuSAjgLSG8JFt244aGqNA0wa1vV2mE0SNXARwJQCOnsqljBgS3Qi79RizhypzIktUHOf5p5uk0M55HqGIYDX6ukAuHRO0Zg2Mk4xf6vEIRN65GxV%2BmTW6MBCMmvmA219P7m3Gxi066R%2FCDz8I5mfOuTSf5GgNXcdUswZbqMyBSNKhUQTtak%2FZxa5sh%2BwDcY%2FpXrNQ8rzCeSAlG2%2BfGpYkFuYbALm1q2oFNYnBc3jYT%2FKhJw0se3h2VzuVAXSZkJHF9FA5uOm%2FMaMsHTyYwmii1xZlk97PEDF2ITdWnv2AWpvsR6ur1MMizlsIGOqUBKWLzihvnOHd%2BGxNUZpgocFV7utmgT7jI6%2F7pFuy1r3m9soFqQjjpv%2F%2F0YYExsJyebfK9BF8f471sKS2myK82oZ5fUCfNbOHvB4VBBhYc2Mx0o5pXnxzpz%2BDwLHtedCf0t56UEF%2FSTGeuU56En8%2F7sDfuFdyrMPi1L%2FyfyxVZDSSLW7UVivkvqWhjUzxob6yRCwlJlG2%2B%2Bc4kUxxuDt691RjIuOpj&X-Amz-Signature=f6af70730f251a0a662e3c16f1501c94a2493a3ee486dcd7a3f03426d67d4bda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAJEBZ6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGuGgD8Y9b12UAsLog766zDriPfH1GQPPAtc3AighGHAIgCudVRe9CRMk84KFQ1PmiO2FLkF3jP2zHXXSUrV2eRlcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMub9%2F8KvKwBDf%2Bg5SrcA78iXTfQCWbkOnQF6v5zAlxMW9Kzi2QnI6iV4SXGlwsAdItdyZF8ouo8wqZpMfKD4udBBmABzv4gT2V5oQQkOjCPp3BSlYROcNmqTFt2idutQXPdvpdK%2F3cOxzilvk4TARVrAP3T1o2OG0JXPlWhIUPKY%2FXOH51HrihLSQxmRCJF60k%2FsrytdSJkhzaBL6%2FzKLGqrTT73MmmwJ4QazOZfTLcNAFX9osBCML5FAuHX4IQ2CKLnExzBZ02jlLt9G6TcDS%2FhEX7jzwBAUknAe0L9%2FuTPKxWLPjcADZY8dHfGDrZxMEV6zsdNuGMNJXlalI3Z%2FPRFzizMbEuSAjgLSG8JFt244aGqNA0wa1vV2mE0SNXARwJQCOnsqljBgS3Qi79RizhypzIktUHOf5p5uk0M55HqGIYDX6ukAuHRO0Zg2Mk4xf6vEIRN65GxV%2BmTW6MBCMmvmA219P7m3Gxi066R%2FCDz8I5mfOuTSf5GgNXcdUswZbqMyBSNKhUQTtak%2FZxa5sh%2BwDcY%2FpXrNQ8rzCeSAlG2%2BfGpYkFuYbALm1q2oFNYnBc3jYT%2FKhJw0se3h2VzuVAXSZkJHF9FA5uOm%2FMaMsHTyYwmii1xZlk97PEDF2ITdWnv2AWpvsR6ur1MMizlsIGOqUBKWLzihvnOHd%2BGxNUZpgocFV7utmgT7jI6%2F7pFuy1r3m9soFqQjjpv%2F%2F0YYExsJyebfK9BF8f471sKS2myK82oZ5fUCfNbOHvB4VBBhYc2Mx0o5pXnxzpz%2BDwLHtedCf0t56UEF%2FSTGeuU56En8%2F7sDfuFdyrMPi1L%2FyfyxVZDSSLW7UVivkvqWhjUzxob6yRCwlJlG2%2B%2Bc4kUxxuDt691RjIuOpj&X-Amz-Signature=48829bf4bd5fd7663f44509a45387c81265f75c5fb8706463b8b137da3d6b7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAJEBZ6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGuGgD8Y9b12UAsLog766zDriPfH1GQPPAtc3AighGHAIgCudVRe9CRMk84KFQ1PmiO2FLkF3jP2zHXXSUrV2eRlcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMub9%2F8KvKwBDf%2Bg5SrcA78iXTfQCWbkOnQF6v5zAlxMW9Kzi2QnI6iV4SXGlwsAdItdyZF8ouo8wqZpMfKD4udBBmABzv4gT2V5oQQkOjCPp3BSlYROcNmqTFt2idutQXPdvpdK%2F3cOxzilvk4TARVrAP3T1o2OG0JXPlWhIUPKY%2FXOH51HrihLSQxmRCJF60k%2FsrytdSJkhzaBL6%2FzKLGqrTT73MmmwJ4QazOZfTLcNAFX9osBCML5FAuHX4IQ2CKLnExzBZ02jlLt9G6TcDS%2FhEX7jzwBAUknAe0L9%2FuTPKxWLPjcADZY8dHfGDrZxMEV6zsdNuGMNJXlalI3Z%2FPRFzizMbEuSAjgLSG8JFt244aGqNA0wa1vV2mE0SNXARwJQCOnsqljBgS3Qi79RizhypzIktUHOf5p5uk0M55HqGIYDX6ukAuHRO0Zg2Mk4xf6vEIRN65GxV%2BmTW6MBCMmvmA219P7m3Gxi066R%2FCDz8I5mfOuTSf5GgNXcdUswZbqMyBSNKhUQTtak%2FZxa5sh%2BwDcY%2FpXrNQ8rzCeSAlG2%2BfGpYkFuYbALm1q2oFNYnBc3jYT%2FKhJw0se3h2VzuVAXSZkJHF9FA5uOm%2FMaMsHTyYwmii1xZlk97PEDF2ITdWnv2AWpvsR6ur1MMizlsIGOqUBKWLzihvnOHd%2BGxNUZpgocFV7utmgT7jI6%2F7pFuy1r3m9soFqQjjpv%2F%2F0YYExsJyebfK9BF8f471sKS2myK82oZ5fUCfNbOHvB4VBBhYc2Mx0o5pXnxzpz%2BDwLHtedCf0t56UEF%2FSTGeuU56En8%2F7sDfuFdyrMPi1L%2FyfyxVZDSSLW7UVivkvqWhjUzxob6yRCwlJlG2%2B%2Bc4kUxxuDt691RjIuOpj&X-Amz-Signature=a7c39f5759869a298df0b7805bb95d714074bfdf13f284ef2cab49e672ca9a47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAJEBZ6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGuGgD8Y9b12UAsLog766zDriPfH1GQPPAtc3AighGHAIgCudVRe9CRMk84KFQ1PmiO2FLkF3jP2zHXXSUrV2eRlcqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMub9%2F8KvKwBDf%2Bg5SrcA78iXTfQCWbkOnQF6v5zAlxMW9Kzi2QnI6iV4SXGlwsAdItdyZF8ouo8wqZpMfKD4udBBmABzv4gT2V5oQQkOjCPp3BSlYROcNmqTFt2idutQXPdvpdK%2F3cOxzilvk4TARVrAP3T1o2OG0JXPlWhIUPKY%2FXOH51HrihLSQxmRCJF60k%2FsrytdSJkhzaBL6%2FzKLGqrTT73MmmwJ4QazOZfTLcNAFX9osBCML5FAuHX4IQ2CKLnExzBZ02jlLt9G6TcDS%2FhEX7jzwBAUknAe0L9%2FuTPKxWLPjcADZY8dHfGDrZxMEV6zsdNuGMNJXlalI3Z%2FPRFzizMbEuSAjgLSG8JFt244aGqNA0wa1vV2mE0SNXARwJQCOnsqljBgS3Qi79RizhypzIktUHOf5p5uk0M55HqGIYDX6ukAuHRO0Zg2Mk4xf6vEIRN65GxV%2BmTW6MBCMmvmA219P7m3Gxi066R%2FCDz8I5mfOuTSf5GgNXcdUswZbqMyBSNKhUQTtak%2FZxa5sh%2BwDcY%2FpXrNQ8rzCeSAlG2%2BfGpYkFuYbALm1q2oFNYnBc3jYT%2FKhJw0se3h2VzuVAXSZkJHF9FA5uOm%2FMaMsHTyYwmii1xZlk97PEDF2ITdWnv2AWpvsR6ur1MMizlsIGOqUBKWLzihvnOHd%2BGxNUZpgocFV7utmgT7jI6%2F7pFuy1r3m9soFqQjjpv%2F%2F0YYExsJyebfK9BF8f471sKS2myK82oZ5fUCfNbOHvB4VBBhYc2Mx0o5pXnxzpz%2BDwLHtedCf0t56UEF%2FSTGeuU56En8%2F7sDfuFdyrMPi1L%2FyfyxVZDSSLW7UVivkvqWhjUzxob6yRCwlJlG2%2B%2Bc4kUxxuDt691RjIuOpj&X-Amz-Signature=baf16c4aaab0edaf42ea18348f2df158f3ef09866daa4cec59402e6044526856&X-Amz-SignedHeaders=host&x-id=GetObject)
