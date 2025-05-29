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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3FVR25%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqi1u4Xo94vbeB0CWWrg3HTIfgzzAn3THbIhR2Ox4bmAiBAd2OmlGwgoL%2B0kp%2FYMQgQQ9MUhhd008%2BQ1aqo5gQGwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhcYuzqqczRUj3HEKtwDSfBkMFCSA5e9%2B1hoXARzurKWy3LPrDl1YW%2B7jOwEQjlg%2BP1r5MfdcpLr%2F98d2O58cAgna5dxMZgSquoZJ3FA5Tjj1%2B69BdxXImbS3AyJw%2ByIj4TMc3Uy17rlPDMalmMXXr3wLou97ZqsicwztFlhjaWVpWSHImn8pAON2fxW1%2F5xPcXynhXXouDKkAQrfT4o3nBnVkS2AgBwMsLTTEnKz6nwDTI5OZLMDE4qcrGntAXBli0%2FdGl6A%2FRPtGfq3jykiX3jTxRhwSxxPQN3sUN1xHFKX%2B9w8h01QhMGYWAm23K918LXEDlY3nMNFXVvZmnMyuX7DYjryZehscm378xph24RGnAf7kHiq9%2FH0KOC4eflP2Ln46LQZRIcM2GCPi86oNJjBTFUkVaZzz8ZLHFwV0C5a3c0L5xALuKDhUFalLwWOkm8qvHTN6GDwgDw1Q5xYn%2F23%2BZ4w5nxyWRZ5d%2FLIwM3e7byW2BRDtJMbva%2FSGG2tX2uGdEbKMNBboavRwThoFIbPhzXnkWPN6xdnhNPba064dTHxCMQCZDIVYVaRV6RTEGTLc4WBI8eEECHPQ7neZ9nKHygiskIbEqsh7dS%2FR4eaa%2BfSgkVZSPqpdMwKB8zIavhOgl7377fej4w3dvgwQY6pgFGE3SY3bMeOBxHBQU%2FojthI%2F8mqhHz4Wvhg1Zf0WmANIt8nYrYAGYdr3bwx0MuEysVyWm3WbHX0hfVNjsKP0IqgsBikM7eOddfvSR76lfDMHBbS9R7hTu%2FbZ9734jG1HXg6u6ewkZXQ4m0jbS0jo4WxshNbtJnqVvmM9j75DY4n4miCbvMGapRyGR86Zi6xi1gjbAK%2BTnF7FDEcJxXcZHRW9%2FgahmS&X-Amz-Signature=fab3c89fc37cc36d5169a513b95dc18e4c6bf3f2788c658800a355d8ebd2bc49&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3FVR25%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqi1u4Xo94vbeB0CWWrg3HTIfgzzAn3THbIhR2Ox4bmAiBAd2OmlGwgoL%2B0kp%2FYMQgQQ9MUhhd008%2BQ1aqo5gQGwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhcYuzqqczRUj3HEKtwDSfBkMFCSA5e9%2B1hoXARzurKWy3LPrDl1YW%2B7jOwEQjlg%2BP1r5MfdcpLr%2F98d2O58cAgna5dxMZgSquoZJ3FA5Tjj1%2B69BdxXImbS3AyJw%2ByIj4TMc3Uy17rlPDMalmMXXr3wLou97ZqsicwztFlhjaWVpWSHImn8pAON2fxW1%2F5xPcXynhXXouDKkAQrfT4o3nBnVkS2AgBwMsLTTEnKz6nwDTI5OZLMDE4qcrGntAXBli0%2FdGl6A%2FRPtGfq3jykiX3jTxRhwSxxPQN3sUN1xHFKX%2B9w8h01QhMGYWAm23K918LXEDlY3nMNFXVvZmnMyuX7DYjryZehscm378xph24RGnAf7kHiq9%2FH0KOC4eflP2Ln46LQZRIcM2GCPi86oNJjBTFUkVaZzz8ZLHFwV0C5a3c0L5xALuKDhUFalLwWOkm8qvHTN6GDwgDw1Q5xYn%2F23%2BZ4w5nxyWRZ5d%2FLIwM3e7byW2BRDtJMbva%2FSGG2tX2uGdEbKMNBboavRwThoFIbPhzXnkWPN6xdnhNPba064dTHxCMQCZDIVYVaRV6RTEGTLc4WBI8eEECHPQ7neZ9nKHygiskIbEqsh7dS%2FR4eaa%2BfSgkVZSPqpdMwKB8zIavhOgl7377fej4w3dvgwQY6pgFGE3SY3bMeOBxHBQU%2FojthI%2F8mqhHz4Wvhg1Zf0WmANIt8nYrYAGYdr3bwx0MuEysVyWm3WbHX0hfVNjsKP0IqgsBikM7eOddfvSR76lfDMHBbS9R7hTu%2FbZ9734jG1HXg6u6ewkZXQ4m0jbS0jo4WxshNbtJnqVvmM9j75DY4n4miCbvMGapRyGR86Zi6xi1gjbAK%2BTnF7FDEcJxXcZHRW9%2FgahmS&X-Amz-Signature=1ef0f495a4dfd4f9d62e2aef04978774b2065d267f6923eccf6a6827c4f75ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3FVR25%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqi1u4Xo94vbeB0CWWrg3HTIfgzzAn3THbIhR2Ox4bmAiBAd2OmlGwgoL%2B0kp%2FYMQgQQ9MUhhd008%2BQ1aqo5gQGwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhcYuzqqczRUj3HEKtwDSfBkMFCSA5e9%2B1hoXARzurKWy3LPrDl1YW%2B7jOwEQjlg%2BP1r5MfdcpLr%2F98d2O58cAgna5dxMZgSquoZJ3FA5Tjj1%2B69BdxXImbS3AyJw%2ByIj4TMc3Uy17rlPDMalmMXXr3wLou97ZqsicwztFlhjaWVpWSHImn8pAON2fxW1%2F5xPcXynhXXouDKkAQrfT4o3nBnVkS2AgBwMsLTTEnKz6nwDTI5OZLMDE4qcrGntAXBli0%2FdGl6A%2FRPtGfq3jykiX3jTxRhwSxxPQN3sUN1xHFKX%2B9w8h01QhMGYWAm23K918LXEDlY3nMNFXVvZmnMyuX7DYjryZehscm378xph24RGnAf7kHiq9%2FH0KOC4eflP2Ln46LQZRIcM2GCPi86oNJjBTFUkVaZzz8ZLHFwV0C5a3c0L5xALuKDhUFalLwWOkm8qvHTN6GDwgDw1Q5xYn%2F23%2BZ4w5nxyWRZ5d%2FLIwM3e7byW2BRDtJMbva%2FSGG2tX2uGdEbKMNBboavRwThoFIbPhzXnkWPN6xdnhNPba064dTHxCMQCZDIVYVaRV6RTEGTLc4WBI8eEECHPQ7neZ9nKHygiskIbEqsh7dS%2FR4eaa%2BfSgkVZSPqpdMwKB8zIavhOgl7377fej4w3dvgwQY6pgFGE3SY3bMeOBxHBQU%2FojthI%2F8mqhHz4Wvhg1Zf0WmANIt8nYrYAGYdr3bwx0MuEysVyWm3WbHX0hfVNjsKP0IqgsBikM7eOddfvSR76lfDMHBbS9R7hTu%2FbZ9734jG1HXg6u6ewkZXQ4m0jbS0jo4WxshNbtJnqVvmM9j75DY4n4miCbvMGapRyGR86Zi6xi1gjbAK%2BTnF7FDEcJxXcZHRW9%2FgahmS&X-Amz-Signature=7a6e059c17757491e978797e3017d47994efe46df6d5e4a79142e94a3fdc7ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3FVR25%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqi1u4Xo94vbeB0CWWrg3HTIfgzzAn3THbIhR2Ox4bmAiBAd2OmlGwgoL%2B0kp%2FYMQgQQ9MUhhd008%2BQ1aqo5gQGwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhcYuzqqczRUj3HEKtwDSfBkMFCSA5e9%2B1hoXARzurKWy3LPrDl1YW%2B7jOwEQjlg%2BP1r5MfdcpLr%2F98d2O58cAgna5dxMZgSquoZJ3FA5Tjj1%2B69BdxXImbS3AyJw%2ByIj4TMc3Uy17rlPDMalmMXXr3wLou97ZqsicwztFlhjaWVpWSHImn8pAON2fxW1%2F5xPcXynhXXouDKkAQrfT4o3nBnVkS2AgBwMsLTTEnKz6nwDTI5OZLMDE4qcrGntAXBli0%2FdGl6A%2FRPtGfq3jykiX3jTxRhwSxxPQN3sUN1xHFKX%2B9w8h01QhMGYWAm23K918LXEDlY3nMNFXVvZmnMyuX7DYjryZehscm378xph24RGnAf7kHiq9%2FH0KOC4eflP2Ln46LQZRIcM2GCPi86oNJjBTFUkVaZzz8ZLHFwV0C5a3c0L5xALuKDhUFalLwWOkm8qvHTN6GDwgDw1Q5xYn%2F23%2BZ4w5nxyWRZ5d%2FLIwM3e7byW2BRDtJMbva%2FSGG2tX2uGdEbKMNBboavRwThoFIbPhzXnkWPN6xdnhNPba064dTHxCMQCZDIVYVaRV6RTEGTLc4WBI8eEECHPQ7neZ9nKHygiskIbEqsh7dS%2FR4eaa%2BfSgkVZSPqpdMwKB8zIavhOgl7377fej4w3dvgwQY6pgFGE3SY3bMeOBxHBQU%2FojthI%2F8mqhHz4Wvhg1Zf0WmANIt8nYrYAGYdr3bwx0MuEysVyWm3WbHX0hfVNjsKP0IqgsBikM7eOddfvSR76lfDMHBbS9R7hTu%2FbZ9734jG1HXg6u6ewkZXQ4m0jbS0jo4WxshNbtJnqVvmM9j75DY4n4miCbvMGapRyGR86Zi6xi1gjbAK%2BTnF7FDEcJxXcZHRW9%2FgahmS&X-Amz-Signature=6e4f70ed7a4fb92cc2409c214b3c887ff551e6278b0142199c58ccf6bf87df1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3FVR25%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqi1u4Xo94vbeB0CWWrg3HTIfgzzAn3THbIhR2Ox4bmAiBAd2OmlGwgoL%2B0kp%2FYMQgQQ9MUhhd008%2BQ1aqo5gQGwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhcYuzqqczRUj3HEKtwDSfBkMFCSA5e9%2B1hoXARzurKWy3LPrDl1YW%2B7jOwEQjlg%2BP1r5MfdcpLr%2F98d2O58cAgna5dxMZgSquoZJ3FA5Tjj1%2B69BdxXImbS3AyJw%2ByIj4TMc3Uy17rlPDMalmMXXr3wLou97ZqsicwztFlhjaWVpWSHImn8pAON2fxW1%2F5xPcXynhXXouDKkAQrfT4o3nBnVkS2AgBwMsLTTEnKz6nwDTI5OZLMDE4qcrGntAXBli0%2FdGl6A%2FRPtGfq3jykiX3jTxRhwSxxPQN3sUN1xHFKX%2B9w8h01QhMGYWAm23K918LXEDlY3nMNFXVvZmnMyuX7DYjryZehscm378xph24RGnAf7kHiq9%2FH0KOC4eflP2Ln46LQZRIcM2GCPi86oNJjBTFUkVaZzz8ZLHFwV0C5a3c0L5xALuKDhUFalLwWOkm8qvHTN6GDwgDw1Q5xYn%2F23%2BZ4w5nxyWRZ5d%2FLIwM3e7byW2BRDtJMbva%2FSGG2tX2uGdEbKMNBboavRwThoFIbPhzXnkWPN6xdnhNPba064dTHxCMQCZDIVYVaRV6RTEGTLc4WBI8eEECHPQ7neZ9nKHygiskIbEqsh7dS%2FR4eaa%2BfSgkVZSPqpdMwKB8zIavhOgl7377fej4w3dvgwQY6pgFGE3SY3bMeOBxHBQU%2FojthI%2F8mqhHz4Wvhg1Zf0WmANIt8nYrYAGYdr3bwx0MuEysVyWm3WbHX0hfVNjsKP0IqgsBikM7eOddfvSR76lfDMHBbS9R7hTu%2FbZ9734jG1HXg6u6ewkZXQ4m0jbS0jo4WxshNbtJnqVvmM9j75DY4n4miCbvMGapRyGR86Zi6xi1gjbAK%2BTnF7FDEcJxXcZHRW9%2FgahmS&X-Amz-Signature=ea5c8ef12da8fb8be9c1d1c704ef1115187e17cabc488fa04b0c77d808aca09d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ3FVR25%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqi1u4Xo94vbeB0CWWrg3HTIfgzzAn3THbIhR2Ox4bmAiBAd2OmlGwgoL%2B0kp%2FYMQgQQ9MUhhd008%2BQ1aqo5gQGwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhcYuzqqczRUj3HEKtwDSfBkMFCSA5e9%2B1hoXARzurKWy3LPrDl1YW%2B7jOwEQjlg%2BP1r5MfdcpLr%2F98d2O58cAgna5dxMZgSquoZJ3FA5Tjj1%2B69BdxXImbS3AyJw%2ByIj4TMc3Uy17rlPDMalmMXXr3wLou97ZqsicwztFlhjaWVpWSHImn8pAON2fxW1%2F5xPcXynhXXouDKkAQrfT4o3nBnVkS2AgBwMsLTTEnKz6nwDTI5OZLMDE4qcrGntAXBli0%2FdGl6A%2FRPtGfq3jykiX3jTxRhwSxxPQN3sUN1xHFKX%2B9w8h01QhMGYWAm23K918LXEDlY3nMNFXVvZmnMyuX7DYjryZehscm378xph24RGnAf7kHiq9%2FH0KOC4eflP2Ln46LQZRIcM2GCPi86oNJjBTFUkVaZzz8ZLHFwV0C5a3c0L5xALuKDhUFalLwWOkm8qvHTN6GDwgDw1Q5xYn%2F23%2BZ4w5nxyWRZ5d%2FLIwM3e7byW2BRDtJMbva%2FSGG2tX2uGdEbKMNBboavRwThoFIbPhzXnkWPN6xdnhNPba064dTHxCMQCZDIVYVaRV6RTEGTLc4WBI8eEECHPQ7neZ9nKHygiskIbEqsh7dS%2FR4eaa%2BfSgkVZSPqpdMwKB8zIavhOgl7377fej4w3dvgwQY6pgFGE3SY3bMeOBxHBQU%2FojthI%2F8mqhHz4Wvhg1Zf0WmANIt8nYrYAGYdr3bwx0MuEysVyWm3WbHX0hfVNjsKP0IqgsBikM7eOddfvSR76lfDMHBbS9R7hTu%2FbZ9734jG1HXg6u6ewkZXQ4m0jbS0jo4WxshNbtJnqVvmM9j75DY4n4miCbvMGapRyGR86Zi6xi1gjbAK%2BTnF7FDEcJxXcZHRW9%2FgahmS&X-Amz-Signature=e1afa82b7817fb1d9824615fa6534df39385a661401f43029f854e1c76789ab0&X-Amz-SignedHeaders=host&x-id=GetObject)
