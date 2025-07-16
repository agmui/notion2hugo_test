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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRR4VE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDghpxDTrahK7xHjTj6Fxkg0pWvFN2ylSnXkKACoAjBbAIgYx26CSoTrM0EiTRxL10qDB%2Frl7VJkeAsNmmP2ltw%2FkMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNVlZPwMpgS3RX2KoyrcA8%2FqDz%2FuimK73BHmtcILJOAd59IxgtBxMDOzRWbe7EmUBmu4YCgdSZrxdsPIXgi53EliQELaPsLSP6mHMlm4bRmb8IvNpyI%2FUV5TJOaXxGtuBKPkCTwhDpdwriAl2Vd8mVsRgC6VpceTHcStzywDrgjRBM6%2BCupoqXrsKilR6voSgUlx0KUPSCpTQ2vpU%2F8I7bMh7tLaS%2BE4BSzK4oHj831DV7pSAOkJ3q0i200yNNi9PWCbCH3SPW%2BE1mfWXdj1fTBJR4oJjRsR2fdciTWYwTW7OT4CDOSqZKHnFdEOxyp%2BfLrQGHeZEz8QQwd56X7lGLlBiuZkJEkeji2DwhYFxQi%2FRplStYK6raw%2FvRVyAJKHAO8pdQeBXKxDCjY%2BEu5KHqqvcMOAc2NE4bZi4yR7vv%2Byeu601lu%2BvStsOxcYEOEIE95YpPkedfc5LE09OnHFMftGpHpzk9zC4R4yFLu8k%2B3N1bApXx8xiWES8ztb7T9j6tYN6tO2D3W0%2FRHQlh%2F920mA2HEx1u2Nnl%2FNLuGFUP9t%2B8TNwVhVf7Y4CbcnnQYxC5mS1ZWH%2BMi5dlfVvD7z%2BrmZG9PT4A2W8zmcBofr%2FHSN3dkKPTV8IqpXvZQv0MSNteeA3xqYcXwTMmexMI3h38MGOqUBGHYZQKcOjhYOplnphUkJD%2BdZ3r%2FjPBo8fnzWIjFgK1XTvmBbERpLeFukRMBq9x2odZZB5moPWrGeSlzKSRXvuFKnficXWrMrstV9xair7aT%2Fn2PXd05xsiDrAMo0PP%2FZ0cscLl6qdjuhritfIaDmnWhH3ZTedH%2FMILNVfpjgltZ3v5W%2BvO4BrDhQOj5jL2Zt8Rj4snofFUqMtexxD%2Fbd31l5ui1N&X-Amz-Signature=4f451b7f00d3d9fbf32f668c7c84b2561304492213e27470a04fe5f6d52ef4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRR4VE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDghpxDTrahK7xHjTj6Fxkg0pWvFN2ylSnXkKACoAjBbAIgYx26CSoTrM0EiTRxL10qDB%2Frl7VJkeAsNmmP2ltw%2FkMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNVlZPwMpgS3RX2KoyrcA8%2FqDz%2FuimK73BHmtcILJOAd59IxgtBxMDOzRWbe7EmUBmu4YCgdSZrxdsPIXgi53EliQELaPsLSP6mHMlm4bRmb8IvNpyI%2FUV5TJOaXxGtuBKPkCTwhDpdwriAl2Vd8mVsRgC6VpceTHcStzywDrgjRBM6%2BCupoqXrsKilR6voSgUlx0KUPSCpTQ2vpU%2F8I7bMh7tLaS%2BE4BSzK4oHj831DV7pSAOkJ3q0i200yNNi9PWCbCH3SPW%2BE1mfWXdj1fTBJR4oJjRsR2fdciTWYwTW7OT4CDOSqZKHnFdEOxyp%2BfLrQGHeZEz8QQwd56X7lGLlBiuZkJEkeji2DwhYFxQi%2FRplStYK6raw%2FvRVyAJKHAO8pdQeBXKxDCjY%2BEu5KHqqvcMOAc2NE4bZi4yR7vv%2Byeu601lu%2BvStsOxcYEOEIE95YpPkedfc5LE09OnHFMftGpHpzk9zC4R4yFLu8k%2B3N1bApXx8xiWES8ztb7T9j6tYN6tO2D3W0%2FRHQlh%2F920mA2HEx1u2Nnl%2FNLuGFUP9t%2B8TNwVhVf7Y4CbcnnQYxC5mS1ZWH%2BMi5dlfVvD7z%2BrmZG9PT4A2W8zmcBofr%2FHSN3dkKPTV8IqpXvZQv0MSNteeA3xqYcXwTMmexMI3h38MGOqUBGHYZQKcOjhYOplnphUkJD%2BdZ3r%2FjPBo8fnzWIjFgK1XTvmBbERpLeFukRMBq9x2odZZB5moPWrGeSlzKSRXvuFKnficXWrMrstV9xair7aT%2Fn2PXd05xsiDrAMo0PP%2FZ0cscLl6qdjuhritfIaDmnWhH3ZTedH%2FMILNVfpjgltZ3v5W%2BvO4BrDhQOj5jL2Zt8Rj4snofFUqMtexxD%2Fbd31l5ui1N&X-Amz-Signature=993cc1b19e51d6ba4de8edef30230eee41a039696732da1f9c55b40df526ee84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRR4VE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDghpxDTrahK7xHjTj6Fxkg0pWvFN2ylSnXkKACoAjBbAIgYx26CSoTrM0EiTRxL10qDB%2Frl7VJkeAsNmmP2ltw%2FkMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNVlZPwMpgS3RX2KoyrcA8%2FqDz%2FuimK73BHmtcILJOAd59IxgtBxMDOzRWbe7EmUBmu4YCgdSZrxdsPIXgi53EliQELaPsLSP6mHMlm4bRmb8IvNpyI%2FUV5TJOaXxGtuBKPkCTwhDpdwriAl2Vd8mVsRgC6VpceTHcStzywDrgjRBM6%2BCupoqXrsKilR6voSgUlx0KUPSCpTQ2vpU%2F8I7bMh7tLaS%2BE4BSzK4oHj831DV7pSAOkJ3q0i200yNNi9PWCbCH3SPW%2BE1mfWXdj1fTBJR4oJjRsR2fdciTWYwTW7OT4CDOSqZKHnFdEOxyp%2BfLrQGHeZEz8QQwd56X7lGLlBiuZkJEkeji2DwhYFxQi%2FRplStYK6raw%2FvRVyAJKHAO8pdQeBXKxDCjY%2BEu5KHqqvcMOAc2NE4bZi4yR7vv%2Byeu601lu%2BvStsOxcYEOEIE95YpPkedfc5LE09OnHFMftGpHpzk9zC4R4yFLu8k%2B3N1bApXx8xiWES8ztb7T9j6tYN6tO2D3W0%2FRHQlh%2F920mA2HEx1u2Nnl%2FNLuGFUP9t%2B8TNwVhVf7Y4CbcnnQYxC5mS1ZWH%2BMi5dlfVvD7z%2BrmZG9PT4A2W8zmcBofr%2FHSN3dkKPTV8IqpXvZQv0MSNteeA3xqYcXwTMmexMI3h38MGOqUBGHYZQKcOjhYOplnphUkJD%2BdZ3r%2FjPBo8fnzWIjFgK1XTvmBbERpLeFukRMBq9x2odZZB5moPWrGeSlzKSRXvuFKnficXWrMrstV9xair7aT%2Fn2PXd05xsiDrAMo0PP%2FZ0cscLl6qdjuhritfIaDmnWhH3ZTedH%2FMILNVfpjgltZ3v5W%2BvO4BrDhQOj5jL2Zt8Rj4snofFUqMtexxD%2Fbd31l5ui1N&X-Amz-Signature=73cb4fbe6b24f9a407c1d2e2582a9cd5d1ddacbf01afd0854ea427115fb54f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRR4VE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDghpxDTrahK7xHjTj6Fxkg0pWvFN2ylSnXkKACoAjBbAIgYx26CSoTrM0EiTRxL10qDB%2Frl7VJkeAsNmmP2ltw%2FkMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNVlZPwMpgS3RX2KoyrcA8%2FqDz%2FuimK73BHmtcILJOAd59IxgtBxMDOzRWbe7EmUBmu4YCgdSZrxdsPIXgi53EliQELaPsLSP6mHMlm4bRmb8IvNpyI%2FUV5TJOaXxGtuBKPkCTwhDpdwriAl2Vd8mVsRgC6VpceTHcStzywDrgjRBM6%2BCupoqXrsKilR6voSgUlx0KUPSCpTQ2vpU%2F8I7bMh7tLaS%2BE4BSzK4oHj831DV7pSAOkJ3q0i200yNNi9PWCbCH3SPW%2BE1mfWXdj1fTBJR4oJjRsR2fdciTWYwTW7OT4CDOSqZKHnFdEOxyp%2BfLrQGHeZEz8QQwd56X7lGLlBiuZkJEkeji2DwhYFxQi%2FRplStYK6raw%2FvRVyAJKHAO8pdQeBXKxDCjY%2BEu5KHqqvcMOAc2NE4bZi4yR7vv%2Byeu601lu%2BvStsOxcYEOEIE95YpPkedfc5LE09OnHFMftGpHpzk9zC4R4yFLu8k%2B3N1bApXx8xiWES8ztb7T9j6tYN6tO2D3W0%2FRHQlh%2F920mA2HEx1u2Nnl%2FNLuGFUP9t%2B8TNwVhVf7Y4CbcnnQYxC5mS1ZWH%2BMi5dlfVvD7z%2BrmZG9PT4A2W8zmcBofr%2FHSN3dkKPTV8IqpXvZQv0MSNteeA3xqYcXwTMmexMI3h38MGOqUBGHYZQKcOjhYOplnphUkJD%2BdZ3r%2FjPBo8fnzWIjFgK1XTvmBbERpLeFukRMBq9x2odZZB5moPWrGeSlzKSRXvuFKnficXWrMrstV9xair7aT%2Fn2PXd05xsiDrAMo0PP%2FZ0cscLl6qdjuhritfIaDmnWhH3ZTedH%2FMILNVfpjgltZ3v5W%2BvO4BrDhQOj5jL2Zt8Rj4snofFUqMtexxD%2Fbd31l5ui1N&X-Amz-Signature=bc2390f81823277af8af5de64294c35dcc4a6352c53b6ed570c4d2c0d1f2700e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRR4VE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDghpxDTrahK7xHjTj6Fxkg0pWvFN2ylSnXkKACoAjBbAIgYx26CSoTrM0EiTRxL10qDB%2Frl7VJkeAsNmmP2ltw%2FkMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNVlZPwMpgS3RX2KoyrcA8%2FqDz%2FuimK73BHmtcILJOAd59IxgtBxMDOzRWbe7EmUBmu4YCgdSZrxdsPIXgi53EliQELaPsLSP6mHMlm4bRmb8IvNpyI%2FUV5TJOaXxGtuBKPkCTwhDpdwriAl2Vd8mVsRgC6VpceTHcStzywDrgjRBM6%2BCupoqXrsKilR6voSgUlx0KUPSCpTQ2vpU%2F8I7bMh7tLaS%2BE4BSzK4oHj831DV7pSAOkJ3q0i200yNNi9PWCbCH3SPW%2BE1mfWXdj1fTBJR4oJjRsR2fdciTWYwTW7OT4CDOSqZKHnFdEOxyp%2BfLrQGHeZEz8QQwd56X7lGLlBiuZkJEkeji2DwhYFxQi%2FRplStYK6raw%2FvRVyAJKHAO8pdQeBXKxDCjY%2BEu5KHqqvcMOAc2NE4bZi4yR7vv%2Byeu601lu%2BvStsOxcYEOEIE95YpPkedfc5LE09OnHFMftGpHpzk9zC4R4yFLu8k%2B3N1bApXx8xiWES8ztb7T9j6tYN6tO2D3W0%2FRHQlh%2F920mA2HEx1u2Nnl%2FNLuGFUP9t%2B8TNwVhVf7Y4CbcnnQYxC5mS1ZWH%2BMi5dlfVvD7z%2BrmZG9PT4A2W8zmcBofr%2FHSN3dkKPTV8IqpXvZQv0MSNteeA3xqYcXwTMmexMI3h38MGOqUBGHYZQKcOjhYOplnphUkJD%2BdZ3r%2FjPBo8fnzWIjFgK1XTvmBbERpLeFukRMBq9x2odZZB5moPWrGeSlzKSRXvuFKnficXWrMrstV9xair7aT%2Fn2PXd05xsiDrAMo0PP%2FZ0cscLl6qdjuhritfIaDmnWhH3ZTedH%2FMILNVfpjgltZ3v5W%2BvO4BrDhQOj5jL2Zt8Rj4snofFUqMtexxD%2Fbd31l5ui1N&X-Amz-Signature=3dee34c5ae1467ff52aa992fb50ad45160cbcac19b764220a2c0f6767f44ee45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFRR4VE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDghpxDTrahK7xHjTj6Fxkg0pWvFN2ylSnXkKACoAjBbAIgYx26CSoTrM0EiTRxL10qDB%2Frl7VJkeAsNmmP2ltw%2FkMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNVlZPwMpgS3RX2KoyrcA8%2FqDz%2FuimK73BHmtcILJOAd59IxgtBxMDOzRWbe7EmUBmu4YCgdSZrxdsPIXgi53EliQELaPsLSP6mHMlm4bRmb8IvNpyI%2FUV5TJOaXxGtuBKPkCTwhDpdwriAl2Vd8mVsRgC6VpceTHcStzywDrgjRBM6%2BCupoqXrsKilR6voSgUlx0KUPSCpTQ2vpU%2F8I7bMh7tLaS%2BE4BSzK4oHj831DV7pSAOkJ3q0i200yNNi9PWCbCH3SPW%2BE1mfWXdj1fTBJR4oJjRsR2fdciTWYwTW7OT4CDOSqZKHnFdEOxyp%2BfLrQGHeZEz8QQwd56X7lGLlBiuZkJEkeji2DwhYFxQi%2FRplStYK6raw%2FvRVyAJKHAO8pdQeBXKxDCjY%2BEu5KHqqvcMOAc2NE4bZi4yR7vv%2Byeu601lu%2BvStsOxcYEOEIE95YpPkedfc5LE09OnHFMftGpHpzk9zC4R4yFLu8k%2B3N1bApXx8xiWES8ztb7T9j6tYN6tO2D3W0%2FRHQlh%2F920mA2HEx1u2Nnl%2FNLuGFUP9t%2B8TNwVhVf7Y4CbcnnQYxC5mS1ZWH%2BMi5dlfVvD7z%2BrmZG9PT4A2W8zmcBofr%2FHSN3dkKPTV8IqpXvZQv0MSNteeA3xqYcXwTMmexMI3h38MGOqUBGHYZQKcOjhYOplnphUkJD%2BdZ3r%2FjPBo8fnzWIjFgK1XTvmBbERpLeFukRMBq9x2odZZB5moPWrGeSlzKSRXvuFKnficXWrMrstV9xair7aT%2Fn2PXd05xsiDrAMo0PP%2FZ0cscLl6qdjuhritfIaDmnWhH3ZTedH%2FMILNVfpjgltZ3v5W%2BvO4BrDhQOj5jL2Zt8Rj4snofFUqMtexxD%2Fbd31l5ui1N&X-Amz-Signature=76aa02d87ae8e4943237f371d9468d11db4a46e69689858795274eafe00395a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
