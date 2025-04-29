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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFGDYVN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqQhZ6GDwaGd7q%2BsycxFnWfpBmo8DmMxo2dlkXRNmVQIhAK3G41vDjvKdPIGXeVf%2FyngTF%2FhUZ%2FergKW5RLVDwQx0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7hPqa0HL5jP9bIEq3AOe1MMWKkDSXzYe07KEow7j4D6xOoWyRm3v7i%2F7hrlmgF6oAbQwILMn4zeWdsOw%2BAT5FjDtj2q%2BMrx76VAk6QprzH93Bpy7aAYWkKvC4Qw1i%2B1%2FsC6E%2Fw3Y78LwyZCea7aKEnDvGjuZllLst%2B1cYpO%2BqQrYWbgRxRNnbyXupus28vGTz25tS13Z87VyAKtc%2FgBE%2Fsz3A%2FXoYvD6pPQVBr9bF2%2FxhSh%2B0U2t2hcRtG14QyrbeNafX2H1LmTLVS2x4O9S6AFW1xvb7AguzeKEEHM8K6OXgQy8%2BPzGWGVJvKvhNdxgmbBR%2BKLgQ2DPpt%2BiWtUPOlBe1mm4hyoMav%2BmiCRtGtxyOeZrh2r2sE6EkL8jXGkezpBOdHHJbiKL%2BDc0YTRh9g4NzaVflHyBjyB7dgN5bMmRwQn18lHTpVpejS2spCuUsCMLu5Khl4gg8sY2KijGjNUGYwtzFn4M6tFSGF9v7RVrw4ziJkbQ4BE8IChiqg%2FKO0KYbTbnTt7L6pBin9zN2kZSv6qmwWdhuqkqLmLS%2B9fXkfCNeNpLREFlc9i7WvpdLQq7yETXcowMEh6Vqkg5Yec2DUMeAwvusuAsQwuUj2B8dXrKKZajQEP6KYtwdE%2F1foYZmDRPFcTBjzCUo8PABjqkAbBB%2FrgPy806vAqAaunPmqd5UXAiJaso7bOStRNoNkUqZWEuT9AF24%2BCaojUmtkmCoQ061cRzQ8XN18iZ3vAixdmMv%2FO7tsJ4YLN4MVljhciLe15pO8yUkCOFq5u7DWn1F12VF8O1qoj8QtwPZc4CD0Df%2F%2BtnPBCqSnQr04meZlwIQ57v6emUOiRYTyUhg9jf0G%2BN3Ac0Ub4XLQMUgDioyM6iEMT&X-Amz-Signature=bba0281bbe9a28445ab8515369323137b69195216c531476fe1849bf7fa0aea9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFGDYVN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqQhZ6GDwaGd7q%2BsycxFnWfpBmo8DmMxo2dlkXRNmVQIhAK3G41vDjvKdPIGXeVf%2FyngTF%2FhUZ%2FergKW5RLVDwQx0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7hPqa0HL5jP9bIEq3AOe1MMWKkDSXzYe07KEow7j4D6xOoWyRm3v7i%2F7hrlmgF6oAbQwILMn4zeWdsOw%2BAT5FjDtj2q%2BMrx76VAk6QprzH93Bpy7aAYWkKvC4Qw1i%2B1%2FsC6E%2Fw3Y78LwyZCea7aKEnDvGjuZllLst%2B1cYpO%2BqQrYWbgRxRNnbyXupus28vGTz25tS13Z87VyAKtc%2FgBE%2Fsz3A%2FXoYvD6pPQVBr9bF2%2FxhSh%2B0U2t2hcRtG14QyrbeNafX2H1LmTLVS2x4O9S6AFW1xvb7AguzeKEEHM8K6OXgQy8%2BPzGWGVJvKvhNdxgmbBR%2BKLgQ2DPpt%2BiWtUPOlBe1mm4hyoMav%2BmiCRtGtxyOeZrh2r2sE6EkL8jXGkezpBOdHHJbiKL%2BDc0YTRh9g4NzaVflHyBjyB7dgN5bMmRwQn18lHTpVpejS2spCuUsCMLu5Khl4gg8sY2KijGjNUGYwtzFn4M6tFSGF9v7RVrw4ziJkbQ4BE8IChiqg%2FKO0KYbTbnTt7L6pBin9zN2kZSv6qmwWdhuqkqLmLS%2B9fXkfCNeNpLREFlc9i7WvpdLQq7yETXcowMEh6Vqkg5Yec2DUMeAwvusuAsQwuUj2B8dXrKKZajQEP6KYtwdE%2F1foYZmDRPFcTBjzCUo8PABjqkAbBB%2FrgPy806vAqAaunPmqd5UXAiJaso7bOStRNoNkUqZWEuT9AF24%2BCaojUmtkmCoQ061cRzQ8XN18iZ3vAixdmMv%2FO7tsJ4YLN4MVljhciLe15pO8yUkCOFq5u7DWn1F12VF8O1qoj8QtwPZc4CD0Df%2F%2BtnPBCqSnQr04meZlwIQ57v6emUOiRYTyUhg9jf0G%2BN3Ac0Ub4XLQMUgDioyM6iEMT&X-Amz-Signature=c35e61b992a32004f3711b7504fbda0ed40175343369d2a2b60bbb803649dfdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFGDYVN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqQhZ6GDwaGd7q%2BsycxFnWfpBmo8DmMxo2dlkXRNmVQIhAK3G41vDjvKdPIGXeVf%2FyngTF%2FhUZ%2FergKW5RLVDwQx0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7hPqa0HL5jP9bIEq3AOe1MMWKkDSXzYe07KEow7j4D6xOoWyRm3v7i%2F7hrlmgF6oAbQwILMn4zeWdsOw%2BAT5FjDtj2q%2BMrx76VAk6QprzH93Bpy7aAYWkKvC4Qw1i%2B1%2FsC6E%2Fw3Y78LwyZCea7aKEnDvGjuZllLst%2B1cYpO%2BqQrYWbgRxRNnbyXupus28vGTz25tS13Z87VyAKtc%2FgBE%2Fsz3A%2FXoYvD6pPQVBr9bF2%2FxhSh%2B0U2t2hcRtG14QyrbeNafX2H1LmTLVS2x4O9S6AFW1xvb7AguzeKEEHM8K6OXgQy8%2BPzGWGVJvKvhNdxgmbBR%2BKLgQ2DPpt%2BiWtUPOlBe1mm4hyoMav%2BmiCRtGtxyOeZrh2r2sE6EkL8jXGkezpBOdHHJbiKL%2BDc0YTRh9g4NzaVflHyBjyB7dgN5bMmRwQn18lHTpVpejS2spCuUsCMLu5Khl4gg8sY2KijGjNUGYwtzFn4M6tFSGF9v7RVrw4ziJkbQ4BE8IChiqg%2FKO0KYbTbnTt7L6pBin9zN2kZSv6qmwWdhuqkqLmLS%2B9fXkfCNeNpLREFlc9i7WvpdLQq7yETXcowMEh6Vqkg5Yec2DUMeAwvusuAsQwuUj2B8dXrKKZajQEP6KYtwdE%2F1foYZmDRPFcTBjzCUo8PABjqkAbBB%2FrgPy806vAqAaunPmqd5UXAiJaso7bOStRNoNkUqZWEuT9AF24%2BCaojUmtkmCoQ061cRzQ8XN18iZ3vAixdmMv%2FO7tsJ4YLN4MVljhciLe15pO8yUkCOFq5u7DWn1F12VF8O1qoj8QtwPZc4CD0Df%2F%2BtnPBCqSnQr04meZlwIQ57v6emUOiRYTyUhg9jf0G%2BN3Ac0Ub4XLQMUgDioyM6iEMT&X-Amz-Signature=ef38f76dfb6b90f1c07eaf10c591f62995fd333955d33c2d59372dc5bb82868e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFGDYVN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqQhZ6GDwaGd7q%2BsycxFnWfpBmo8DmMxo2dlkXRNmVQIhAK3G41vDjvKdPIGXeVf%2FyngTF%2FhUZ%2FergKW5RLVDwQx0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7hPqa0HL5jP9bIEq3AOe1MMWKkDSXzYe07KEow7j4D6xOoWyRm3v7i%2F7hrlmgF6oAbQwILMn4zeWdsOw%2BAT5FjDtj2q%2BMrx76VAk6QprzH93Bpy7aAYWkKvC4Qw1i%2B1%2FsC6E%2Fw3Y78LwyZCea7aKEnDvGjuZllLst%2B1cYpO%2BqQrYWbgRxRNnbyXupus28vGTz25tS13Z87VyAKtc%2FgBE%2Fsz3A%2FXoYvD6pPQVBr9bF2%2FxhSh%2B0U2t2hcRtG14QyrbeNafX2H1LmTLVS2x4O9S6AFW1xvb7AguzeKEEHM8K6OXgQy8%2BPzGWGVJvKvhNdxgmbBR%2BKLgQ2DPpt%2BiWtUPOlBe1mm4hyoMav%2BmiCRtGtxyOeZrh2r2sE6EkL8jXGkezpBOdHHJbiKL%2BDc0YTRh9g4NzaVflHyBjyB7dgN5bMmRwQn18lHTpVpejS2spCuUsCMLu5Khl4gg8sY2KijGjNUGYwtzFn4M6tFSGF9v7RVrw4ziJkbQ4BE8IChiqg%2FKO0KYbTbnTt7L6pBin9zN2kZSv6qmwWdhuqkqLmLS%2B9fXkfCNeNpLREFlc9i7WvpdLQq7yETXcowMEh6Vqkg5Yec2DUMeAwvusuAsQwuUj2B8dXrKKZajQEP6KYtwdE%2F1foYZmDRPFcTBjzCUo8PABjqkAbBB%2FrgPy806vAqAaunPmqd5UXAiJaso7bOStRNoNkUqZWEuT9AF24%2BCaojUmtkmCoQ061cRzQ8XN18iZ3vAixdmMv%2FO7tsJ4YLN4MVljhciLe15pO8yUkCOFq5u7DWn1F12VF8O1qoj8QtwPZc4CD0Df%2F%2BtnPBCqSnQr04meZlwIQ57v6emUOiRYTyUhg9jf0G%2BN3Ac0Ub4XLQMUgDioyM6iEMT&X-Amz-Signature=f0cb2feafd0f36b0cc5188f0b4c3a46231a902b2968ec8926119c3dc63fcd75c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFGDYVN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqQhZ6GDwaGd7q%2BsycxFnWfpBmo8DmMxo2dlkXRNmVQIhAK3G41vDjvKdPIGXeVf%2FyngTF%2FhUZ%2FergKW5RLVDwQx0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7hPqa0HL5jP9bIEq3AOe1MMWKkDSXzYe07KEow7j4D6xOoWyRm3v7i%2F7hrlmgF6oAbQwILMn4zeWdsOw%2BAT5FjDtj2q%2BMrx76VAk6QprzH93Bpy7aAYWkKvC4Qw1i%2B1%2FsC6E%2Fw3Y78LwyZCea7aKEnDvGjuZllLst%2B1cYpO%2BqQrYWbgRxRNnbyXupus28vGTz25tS13Z87VyAKtc%2FgBE%2Fsz3A%2FXoYvD6pPQVBr9bF2%2FxhSh%2B0U2t2hcRtG14QyrbeNafX2H1LmTLVS2x4O9S6AFW1xvb7AguzeKEEHM8K6OXgQy8%2BPzGWGVJvKvhNdxgmbBR%2BKLgQ2DPpt%2BiWtUPOlBe1mm4hyoMav%2BmiCRtGtxyOeZrh2r2sE6EkL8jXGkezpBOdHHJbiKL%2BDc0YTRh9g4NzaVflHyBjyB7dgN5bMmRwQn18lHTpVpejS2spCuUsCMLu5Khl4gg8sY2KijGjNUGYwtzFn4M6tFSGF9v7RVrw4ziJkbQ4BE8IChiqg%2FKO0KYbTbnTt7L6pBin9zN2kZSv6qmwWdhuqkqLmLS%2B9fXkfCNeNpLREFlc9i7WvpdLQq7yETXcowMEh6Vqkg5Yec2DUMeAwvusuAsQwuUj2B8dXrKKZajQEP6KYtwdE%2F1foYZmDRPFcTBjzCUo8PABjqkAbBB%2FrgPy806vAqAaunPmqd5UXAiJaso7bOStRNoNkUqZWEuT9AF24%2BCaojUmtkmCoQ061cRzQ8XN18iZ3vAixdmMv%2FO7tsJ4YLN4MVljhciLe15pO8yUkCOFq5u7DWn1F12VF8O1qoj8QtwPZc4CD0Df%2F%2BtnPBCqSnQr04meZlwIQ57v6emUOiRYTyUhg9jf0G%2BN3Ac0Ub4XLQMUgDioyM6iEMT&X-Amz-Signature=cdea859b08be5574c9701b006c142e196bbd9237a96933b454c08cf215dfee8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFGDYVN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqQhZ6GDwaGd7q%2BsycxFnWfpBmo8DmMxo2dlkXRNmVQIhAK3G41vDjvKdPIGXeVf%2FyngTF%2FhUZ%2FergKW5RLVDwQx0KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7hPqa0HL5jP9bIEq3AOe1MMWKkDSXzYe07KEow7j4D6xOoWyRm3v7i%2F7hrlmgF6oAbQwILMn4zeWdsOw%2BAT5FjDtj2q%2BMrx76VAk6QprzH93Bpy7aAYWkKvC4Qw1i%2B1%2FsC6E%2Fw3Y78LwyZCea7aKEnDvGjuZllLst%2B1cYpO%2BqQrYWbgRxRNnbyXupus28vGTz25tS13Z87VyAKtc%2FgBE%2Fsz3A%2FXoYvD6pPQVBr9bF2%2FxhSh%2B0U2t2hcRtG14QyrbeNafX2H1LmTLVS2x4O9S6AFW1xvb7AguzeKEEHM8K6OXgQy8%2BPzGWGVJvKvhNdxgmbBR%2BKLgQ2DPpt%2BiWtUPOlBe1mm4hyoMav%2BmiCRtGtxyOeZrh2r2sE6EkL8jXGkezpBOdHHJbiKL%2BDc0YTRh9g4NzaVflHyBjyB7dgN5bMmRwQn18lHTpVpejS2spCuUsCMLu5Khl4gg8sY2KijGjNUGYwtzFn4M6tFSGF9v7RVrw4ziJkbQ4BE8IChiqg%2FKO0KYbTbnTt7L6pBin9zN2kZSv6qmwWdhuqkqLmLS%2B9fXkfCNeNpLREFlc9i7WvpdLQq7yETXcowMEh6Vqkg5Yec2DUMeAwvusuAsQwuUj2B8dXrKKZajQEP6KYtwdE%2F1foYZmDRPFcTBjzCUo8PABjqkAbBB%2FrgPy806vAqAaunPmqd5UXAiJaso7bOStRNoNkUqZWEuT9AF24%2BCaojUmtkmCoQ061cRzQ8XN18iZ3vAixdmMv%2FO7tsJ4YLN4MVljhciLe15pO8yUkCOFq5u7DWn1F12VF8O1qoj8QtwPZc4CD0Df%2F%2BtnPBCqSnQr04meZlwIQ57v6emUOiRYTyUhg9jf0G%2BN3Ac0Ub4XLQMUgDioyM6iEMT&X-Amz-Signature=e9fb6f4c3e3e98038149cc6ada3aa52e849b5cee272a2c09349bf2cad2b5e1fb&X-Amz-SignedHeaders=host&x-id=GetObject)
