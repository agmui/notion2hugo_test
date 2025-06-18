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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PK2J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVAKQxNZivuWzVKESfdcY42miW1Xy5H2MJVEdII5jpwIgYrEuNaCAXNNhh%2Fw1LY65R6LB69G2C0kCAKRnyTxieiUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uBGapwAiv8VHGPircAz2riyZe4Ys6UTRYtIQaXAz9hlAhdYP7IF86jViScb9NVGN34nw%2Bw%2FYA5irqbleenjrWeJXk5jbJZcw74abZF%2BwkMlO2yD7aVNIw2qImem1ac99HAxszYu3qwUT%2B99tD3EyF4WZCd6r9sBZxpie6HdEVm6cdnQniPIci4r0To5MlTMS7Li6KJAKFubIp9G2MoGnOSXIaQlyGmVJ3vYGrn%2F%2BMzrbupV81IZfv1PZxfEGnkyZ2vUXiip4tCJWD46fLl2FHyyBrfV3lAEnRo0fT7GYYeVM2wc7mX3Tpq3rQhC0HcyiA3ISjychBDwra1f6PIHGP2j7TrHBtL9uWxJqxDAlK3UwKMRBq%2BYDcXG710VsNt%2B33lNdeepIFa%2BBzEhnI0NjhtAbsqYQkjtFWR5eFiF1DUkZByIAX8dG187c3UB0wSR1jjH1%2FUaubG9agsgC%2F6fR8G8MAueKvUSnI1kCrUxpBU7vlL759dtxW%2Bqe%2F3B7OAifpf2sKyV8cW%2Ff4evLdAA6MNixIOlnp3wEUsB5SjDmbRenaqhj4OVMrVbgjhLWY5wY%2BQjOkdBPYC8U6nJu5FXNQjDiCkCPEX00%2BGjmcmy99jFSG1veJHC6NbELJd6F2pNX6lSmY%2FD1kTge2MKX0ysIGOqUBBNCne%2FwjrxQU%2FVh%2BRWOyDZGkV2LvcevciB58O8DMstut%2BiiMGQzPd4lXNylyXm4LrPdpU89qziKHU8J26gFwMO0SqcJo%2FlDi77jULzkXzzswtqmWYpvSmURKc23iebFlZHmE6Cs3u4mS5b%2FfJw49ZfSw5sg5L1hMxy4uucKnytr4G4MU%2BMaSMqF75JRNf63%2BnEW5vNf09GU0ldy51TGAOnDa217S&X-Amz-Signature=bfcec15505144d8d9945984908649af351e78791290486472da488e565a3e0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PK2J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVAKQxNZivuWzVKESfdcY42miW1Xy5H2MJVEdII5jpwIgYrEuNaCAXNNhh%2Fw1LY65R6LB69G2C0kCAKRnyTxieiUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uBGapwAiv8VHGPircAz2riyZe4Ys6UTRYtIQaXAz9hlAhdYP7IF86jViScb9NVGN34nw%2Bw%2FYA5irqbleenjrWeJXk5jbJZcw74abZF%2BwkMlO2yD7aVNIw2qImem1ac99HAxszYu3qwUT%2B99tD3EyF4WZCd6r9sBZxpie6HdEVm6cdnQniPIci4r0To5MlTMS7Li6KJAKFubIp9G2MoGnOSXIaQlyGmVJ3vYGrn%2F%2BMzrbupV81IZfv1PZxfEGnkyZ2vUXiip4tCJWD46fLl2FHyyBrfV3lAEnRo0fT7GYYeVM2wc7mX3Tpq3rQhC0HcyiA3ISjychBDwra1f6PIHGP2j7TrHBtL9uWxJqxDAlK3UwKMRBq%2BYDcXG710VsNt%2B33lNdeepIFa%2BBzEhnI0NjhtAbsqYQkjtFWR5eFiF1DUkZByIAX8dG187c3UB0wSR1jjH1%2FUaubG9agsgC%2F6fR8G8MAueKvUSnI1kCrUxpBU7vlL759dtxW%2Bqe%2F3B7OAifpf2sKyV8cW%2Ff4evLdAA6MNixIOlnp3wEUsB5SjDmbRenaqhj4OVMrVbgjhLWY5wY%2BQjOkdBPYC8U6nJu5FXNQjDiCkCPEX00%2BGjmcmy99jFSG1veJHC6NbELJd6F2pNX6lSmY%2FD1kTge2MKX0ysIGOqUBBNCne%2FwjrxQU%2FVh%2BRWOyDZGkV2LvcevciB58O8DMstut%2BiiMGQzPd4lXNylyXm4LrPdpU89qziKHU8J26gFwMO0SqcJo%2FlDi77jULzkXzzswtqmWYpvSmURKc23iebFlZHmE6Cs3u4mS5b%2FfJw49ZfSw5sg5L1hMxy4uucKnytr4G4MU%2BMaSMqF75JRNf63%2BnEW5vNf09GU0ldy51TGAOnDa217S&X-Amz-Signature=8973a5dbd95434bbae6a891875aa24d7a52081e327e860d6985e91f39e5b7b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PK2J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVAKQxNZivuWzVKESfdcY42miW1Xy5H2MJVEdII5jpwIgYrEuNaCAXNNhh%2Fw1LY65R6LB69G2C0kCAKRnyTxieiUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uBGapwAiv8VHGPircAz2riyZe4Ys6UTRYtIQaXAz9hlAhdYP7IF86jViScb9NVGN34nw%2Bw%2FYA5irqbleenjrWeJXk5jbJZcw74abZF%2BwkMlO2yD7aVNIw2qImem1ac99HAxszYu3qwUT%2B99tD3EyF4WZCd6r9sBZxpie6HdEVm6cdnQniPIci4r0To5MlTMS7Li6KJAKFubIp9G2MoGnOSXIaQlyGmVJ3vYGrn%2F%2BMzrbupV81IZfv1PZxfEGnkyZ2vUXiip4tCJWD46fLl2FHyyBrfV3lAEnRo0fT7GYYeVM2wc7mX3Tpq3rQhC0HcyiA3ISjychBDwra1f6PIHGP2j7TrHBtL9uWxJqxDAlK3UwKMRBq%2BYDcXG710VsNt%2B33lNdeepIFa%2BBzEhnI0NjhtAbsqYQkjtFWR5eFiF1DUkZByIAX8dG187c3UB0wSR1jjH1%2FUaubG9agsgC%2F6fR8G8MAueKvUSnI1kCrUxpBU7vlL759dtxW%2Bqe%2F3B7OAifpf2sKyV8cW%2Ff4evLdAA6MNixIOlnp3wEUsB5SjDmbRenaqhj4OVMrVbgjhLWY5wY%2BQjOkdBPYC8U6nJu5FXNQjDiCkCPEX00%2BGjmcmy99jFSG1veJHC6NbELJd6F2pNX6lSmY%2FD1kTge2MKX0ysIGOqUBBNCne%2FwjrxQU%2FVh%2BRWOyDZGkV2LvcevciB58O8DMstut%2BiiMGQzPd4lXNylyXm4LrPdpU89qziKHU8J26gFwMO0SqcJo%2FlDi77jULzkXzzswtqmWYpvSmURKc23iebFlZHmE6Cs3u4mS5b%2FfJw49ZfSw5sg5L1hMxy4uucKnytr4G4MU%2BMaSMqF75JRNf63%2BnEW5vNf09GU0ldy51TGAOnDa217S&X-Amz-Signature=fa45b70c0940a41a26dcb63981ec08587626f3c3f8b6610b3a2967ac4c520a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PK2J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVAKQxNZivuWzVKESfdcY42miW1Xy5H2MJVEdII5jpwIgYrEuNaCAXNNhh%2Fw1LY65R6LB69G2C0kCAKRnyTxieiUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uBGapwAiv8VHGPircAz2riyZe4Ys6UTRYtIQaXAz9hlAhdYP7IF86jViScb9NVGN34nw%2Bw%2FYA5irqbleenjrWeJXk5jbJZcw74abZF%2BwkMlO2yD7aVNIw2qImem1ac99HAxszYu3qwUT%2B99tD3EyF4WZCd6r9sBZxpie6HdEVm6cdnQniPIci4r0To5MlTMS7Li6KJAKFubIp9G2MoGnOSXIaQlyGmVJ3vYGrn%2F%2BMzrbupV81IZfv1PZxfEGnkyZ2vUXiip4tCJWD46fLl2FHyyBrfV3lAEnRo0fT7GYYeVM2wc7mX3Tpq3rQhC0HcyiA3ISjychBDwra1f6PIHGP2j7TrHBtL9uWxJqxDAlK3UwKMRBq%2BYDcXG710VsNt%2B33lNdeepIFa%2BBzEhnI0NjhtAbsqYQkjtFWR5eFiF1DUkZByIAX8dG187c3UB0wSR1jjH1%2FUaubG9agsgC%2F6fR8G8MAueKvUSnI1kCrUxpBU7vlL759dtxW%2Bqe%2F3B7OAifpf2sKyV8cW%2Ff4evLdAA6MNixIOlnp3wEUsB5SjDmbRenaqhj4OVMrVbgjhLWY5wY%2BQjOkdBPYC8U6nJu5FXNQjDiCkCPEX00%2BGjmcmy99jFSG1veJHC6NbELJd6F2pNX6lSmY%2FD1kTge2MKX0ysIGOqUBBNCne%2FwjrxQU%2FVh%2BRWOyDZGkV2LvcevciB58O8DMstut%2BiiMGQzPd4lXNylyXm4LrPdpU89qziKHU8J26gFwMO0SqcJo%2FlDi77jULzkXzzswtqmWYpvSmURKc23iebFlZHmE6Cs3u4mS5b%2FfJw49ZfSw5sg5L1hMxy4uucKnytr4G4MU%2BMaSMqF75JRNf63%2BnEW5vNf09GU0ldy51TGAOnDa217S&X-Amz-Signature=833b51d2870dd6c4abcc83c7ee65a33285e864c9a8e0c29f4b20efbcf8f63326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PK2J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVAKQxNZivuWzVKESfdcY42miW1Xy5H2MJVEdII5jpwIgYrEuNaCAXNNhh%2Fw1LY65R6LB69G2C0kCAKRnyTxieiUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uBGapwAiv8VHGPircAz2riyZe4Ys6UTRYtIQaXAz9hlAhdYP7IF86jViScb9NVGN34nw%2Bw%2FYA5irqbleenjrWeJXk5jbJZcw74abZF%2BwkMlO2yD7aVNIw2qImem1ac99HAxszYu3qwUT%2B99tD3EyF4WZCd6r9sBZxpie6HdEVm6cdnQniPIci4r0To5MlTMS7Li6KJAKFubIp9G2MoGnOSXIaQlyGmVJ3vYGrn%2F%2BMzrbupV81IZfv1PZxfEGnkyZ2vUXiip4tCJWD46fLl2FHyyBrfV3lAEnRo0fT7GYYeVM2wc7mX3Tpq3rQhC0HcyiA3ISjychBDwra1f6PIHGP2j7TrHBtL9uWxJqxDAlK3UwKMRBq%2BYDcXG710VsNt%2B33lNdeepIFa%2BBzEhnI0NjhtAbsqYQkjtFWR5eFiF1DUkZByIAX8dG187c3UB0wSR1jjH1%2FUaubG9agsgC%2F6fR8G8MAueKvUSnI1kCrUxpBU7vlL759dtxW%2Bqe%2F3B7OAifpf2sKyV8cW%2Ff4evLdAA6MNixIOlnp3wEUsB5SjDmbRenaqhj4OVMrVbgjhLWY5wY%2BQjOkdBPYC8U6nJu5FXNQjDiCkCPEX00%2BGjmcmy99jFSG1veJHC6NbELJd6F2pNX6lSmY%2FD1kTge2MKX0ysIGOqUBBNCne%2FwjrxQU%2FVh%2BRWOyDZGkV2LvcevciB58O8DMstut%2BiiMGQzPd4lXNylyXm4LrPdpU89qziKHU8J26gFwMO0SqcJo%2FlDi77jULzkXzzswtqmWYpvSmURKc23iebFlZHmE6Cs3u4mS5b%2FfJw49ZfSw5sg5L1hMxy4uucKnytr4G4MU%2BMaSMqF75JRNf63%2BnEW5vNf09GU0ldy51TGAOnDa217S&X-Amz-Signature=e61079fa3f18e5c49e2ea58d463bb47236513ff489165563bb6f7511e838bab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PK2J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVAKQxNZivuWzVKESfdcY42miW1Xy5H2MJVEdII5jpwIgYrEuNaCAXNNhh%2Fw1LY65R6LB69G2C0kCAKRnyTxieiUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uBGapwAiv8VHGPircAz2riyZe4Ys6UTRYtIQaXAz9hlAhdYP7IF86jViScb9NVGN34nw%2Bw%2FYA5irqbleenjrWeJXk5jbJZcw74abZF%2BwkMlO2yD7aVNIw2qImem1ac99HAxszYu3qwUT%2B99tD3EyF4WZCd6r9sBZxpie6HdEVm6cdnQniPIci4r0To5MlTMS7Li6KJAKFubIp9G2MoGnOSXIaQlyGmVJ3vYGrn%2F%2BMzrbupV81IZfv1PZxfEGnkyZ2vUXiip4tCJWD46fLl2FHyyBrfV3lAEnRo0fT7GYYeVM2wc7mX3Tpq3rQhC0HcyiA3ISjychBDwra1f6PIHGP2j7TrHBtL9uWxJqxDAlK3UwKMRBq%2BYDcXG710VsNt%2B33lNdeepIFa%2BBzEhnI0NjhtAbsqYQkjtFWR5eFiF1DUkZByIAX8dG187c3UB0wSR1jjH1%2FUaubG9agsgC%2F6fR8G8MAueKvUSnI1kCrUxpBU7vlL759dtxW%2Bqe%2F3B7OAifpf2sKyV8cW%2Ff4evLdAA6MNixIOlnp3wEUsB5SjDmbRenaqhj4OVMrVbgjhLWY5wY%2BQjOkdBPYC8U6nJu5FXNQjDiCkCPEX00%2BGjmcmy99jFSG1veJHC6NbELJd6F2pNX6lSmY%2FD1kTge2MKX0ysIGOqUBBNCne%2FwjrxQU%2FVh%2BRWOyDZGkV2LvcevciB58O8DMstut%2BiiMGQzPd4lXNylyXm4LrPdpU89qziKHU8J26gFwMO0SqcJo%2FlDi77jULzkXzzswtqmWYpvSmURKc23iebFlZHmE6Cs3u4mS5b%2FfJw49ZfSw5sg5L1hMxy4uucKnytr4G4MU%2BMaSMqF75JRNf63%2BnEW5vNf09GU0ldy51TGAOnDa217S&X-Amz-Signature=7a24f671f407d1be9f5aa805eb5b8c7ef901eeb447e54bd370488fb0525366c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
