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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIEBCLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKj80YLq0YovH0b7KP%2FoEgtO7J2ai4QuGInSpsG4wKWAiBj%2B9VXlv29ytz%2FTzP%2FffHopCa5BCV%2FTc9tIXC%2BboQ8Wir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90I0Ns0%2FBamAO0f1KtwD%2BpzTQAYXF%2FgrNrMl37xyU93%2BBtwPN790xced4u5oqzXhI5LC7dkO7QJMRB%2F%2FApELJNZgtBy2U9BlDYQgrjFhQwwNObi7aO9w6EszrzWBN2opNsU%2BiaUs65%2FpuwP%2FkrlTloiuLGHjca7WiYEd%2Bwe41mEIwnB7Z2uMc0HTX7%2FYDnyOHXqdWHh%2BEEJ%2BYuf7wwArxx3dabBar8PGKm5VfcuIcdb9VfqrNJ%2BRVUXJwGldrcjigDH4%2BUqJydwQ7t6va2Mckcz%2FUdAb1umwIwdN5iR7NtXV20uzFHCVgTNXZ%2BFR8JRSfLJUsASxRqyfms%2BDjd3SdcF9bWL2xjyRzUDOQRPt0d50TkSBNVEkEL4onNFRSFyVRfnN4rSNknpKPCIMmEIKwiUMuHeKTtU4ONl8kotOcsy%2F%2Bsp7LQO6XGuSFVvGZE%2F5g%2B%2F18DlDpRGVOAV99p8Qq060lp11IeH8wZeWHmFeNH2lslYPahzhYlc4CQpX8zDiBMyLIKmXgHYSdtyiD1uy91mTydJm0DmCXRj6vCsY7a8jF3AJG9gFd2F6mpn4adJHE%2B5Z%2B0hrmoQOcGs1%2Bi%2BI9UqpiecQN7WSVnloR0sldftJzwPJcFqIiDFnLgPkBUFbhFQLAbvwwwHeclYw%2FsetwAY6pgFsRJEyjJlyxpBqlY7e5gT0X7dRb2xPfXV7Q4ctbHB2XbtBXIyXgwX5lM3P9ptihKIrzFtxyKsTRcnGAFUOMPIFxN2TtHKm%2FLK0192yrnaPh9mYD%2BIo4YoodEl98brELIjTm5lrHRbHr%2FaXfOZhbfE%2FJSzlZl2oSdz7JFvr2p8WAdE2PuLRLlQ%2BGKPwfnEl1gj3ffcyi3d%2FiG2TMJHcjKr9l4QNMh60&X-Amz-Signature=0abd25c0ee6a1c7da3116a65fb9348fd0da1cd008203b264da91af27033cb2e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIEBCLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKj80YLq0YovH0b7KP%2FoEgtO7J2ai4QuGInSpsG4wKWAiBj%2B9VXlv29ytz%2FTzP%2FffHopCa5BCV%2FTc9tIXC%2BboQ8Wir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90I0Ns0%2FBamAO0f1KtwD%2BpzTQAYXF%2FgrNrMl37xyU93%2BBtwPN790xced4u5oqzXhI5LC7dkO7QJMRB%2F%2FApELJNZgtBy2U9BlDYQgrjFhQwwNObi7aO9w6EszrzWBN2opNsU%2BiaUs65%2FpuwP%2FkrlTloiuLGHjca7WiYEd%2Bwe41mEIwnB7Z2uMc0HTX7%2FYDnyOHXqdWHh%2BEEJ%2BYuf7wwArxx3dabBar8PGKm5VfcuIcdb9VfqrNJ%2BRVUXJwGldrcjigDH4%2BUqJydwQ7t6va2Mckcz%2FUdAb1umwIwdN5iR7NtXV20uzFHCVgTNXZ%2BFR8JRSfLJUsASxRqyfms%2BDjd3SdcF9bWL2xjyRzUDOQRPt0d50TkSBNVEkEL4onNFRSFyVRfnN4rSNknpKPCIMmEIKwiUMuHeKTtU4ONl8kotOcsy%2F%2Bsp7LQO6XGuSFVvGZE%2F5g%2B%2F18DlDpRGVOAV99p8Qq060lp11IeH8wZeWHmFeNH2lslYPahzhYlc4CQpX8zDiBMyLIKmXgHYSdtyiD1uy91mTydJm0DmCXRj6vCsY7a8jF3AJG9gFd2F6mpn4adJHE%2B5Z%2B0hrmoQOcGs1%2Bi%2BI9UqpiecQN7WSVnloR0sldftJzwPJcFqIiDFnLgPkBUFbhFQLAbvwwwHeclYw%2FsetwAY6pgFsRJEyjJlyxpBqlY7e5gT0X7dRb2xPfXV7Q4ctbHB2XbtBXIyXgwX5lM3P9ptihKIrzFtxyKsTRcnGAFUOMPIFxN2TtHKm%2FLK0192yrnaPh9mYD%2BIo4YoodEl98brELIjTm5lrHRbHr%2FaXfOZhbfE%2FJSzlZl2oSdz7JFvr2p8WAdE2PuLRLlQ%2BGKPwfnEl1gj3ffcyi3d%2FiG2TMJHcjKr9l4QNMh60&X-Amz-Signature=37bc420d2ae0549fbdac6ebb47e2acb2a41a681b4348fe8f0d36045984552c49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIEBCLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKj80YLq0YovH0b7KP%2FoEgtO7J2ai4QuGInSpsG4wKWAiBj%2B9VXlv29ytz%2FTzP%2FffHopCa5BCV%2FTc9tIXC%2BboQ8Wir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90I0Ns0%2FBamAO0f1KtwD%2BpzTQAYXF%2FgrNrMl37xyU93%2BBtwPN790xced4u5oqzXhI5LC7dkO7QJMRB%2F%2FApELJNZgtBy2U9BlDYQgrjFhQwwNObi7aO9w6EszrzWBN2opNsU%2BiaUs65%2FpuwP%2FkrlTloiuLGHjca7WiYEd%2Bwe41mEIwnB7Z2uMc0HTX7%2FYDnyOHXqdWHh%2BEEJ%2BYuf7wwArxx3dabBar8PGKm5VfcuIcdb9VfqrNJ%2BRVUXJwGldrcjigDH4%2BUqJydwQ7t6va2Mckcz%2FUdAb1umwIwdN5iR7NtXV20uzFHCVgTNXZ%2BFR8JRSfLJUsASxRqyfms%2BDjd3SdcF9bWL2xjyRzUDOQRPt0d50TkSBNVEkEL4onNFRSFyVRfnN4rSNknpKPCIMmEIKwiUMuHeKTtU4ONl8kotOcsy%2F%2Bsp7LQO6XGuSFVvGZE%2F5g%2B%2F18DlDpRGVOAV99p8Qq060lp11IeH8wZeWHmFeNH2lslYPahzhYlc4CQpX8zDiBMyLIKmXgHYSdtyiD1uy91mTydJm0DmCXRj6vCsY7a8jF3AJG9gFd2F6mpn4adJHE%2B5Z%2B0hrmoQOcGs1%2Bi%2BI9UqpiecQN7WSVnloR0sldftJzwPJcFqIiDFnLgPkBUFbhFQLAbvwwwHeclYw%2FsetwAY6pgFsRJEyjJlyxpBqlY7e5gT0X7dRb2xPfXV7Q4ctbHB2XbtBXIyXgwX5lM3P9ptihKIrzFtxyKsTRcnGAFUOMPIFxN2TtHKm%2FLK0192yrnaPh9mYD%2BIo4YoodEl98brELIjTm5lrHRbHr%2FaXfOZhbfE%2FJSzlZl2oSdz7JFvr2p8WAdE2PuLRLlQ%2BGKPwfnEl1gj3ffcyi3d%2FiG2TMJHcjKr9l4QNMh60&X-Amz-Signature=7557f83d1b17dd647cdf463c5cde8181fc05f2ea21f8a73cf210f99542bafb65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIEBCLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKj80YLq0YovH0b7KP%2FoEgtO7J2ai4QuGInSpsG4wKWAiBj%2B9VXlv29ytz%2FTzP%2FffHopCa5BCV%2FTc9tIXC%2BboQ8Wir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90I0Ns0%2FBamAO0f1KtwD%2BpzTQAYXF%2FgrNrMl37xyU93%2BBtwPN790xced4u5oqzXhI5LC7dkO7QJMRB%2F%2FApELJNZgtBy2U9BlDYQgrjFhQwwNObi7aO9w6EszrzWBN2opNsU%2BiaUs65%2FpuwP%2FkrlTloiuLGHjca7WiYEd%2Bwe41mEIwnB7Z2uMc0HTX7%2FYDnyOHXqdWHh%2BEEJ%2BYuf7wwArxx3dabBar8PGKm5VfcuIcdb9VfqrNJ%2BRVUXJwGldrcjigDH4%2BUqJydwQ7t6va2Mckcz%2FUdAb1umwIwdN5iR7NtXV20uzFHCVgTNXZ%2BFR8JRSfLJUsASxRqyfms%2BDjd3SdcF9bWL2xjyRzUDOQRPt0d50TkSBNVEkEL4onNFRSFyVRfnN4rSNknpKPCIMmEIKwiUMuHeKTtU4ONl8kotOcsy%2F%2Bsp7LQO6XGuSFVvGZE%2F5g%2B%2F18DlDpRGVOAV99p8Qq060lp11IeH8wZeWHmFeNH2lslYPahzhYlc4CQpX8zDiBMyLIKmXgHYSdtyiD1uy91mTydJm0DmCXRj6vCsY7a8jF3AJG9gFd2F6mpn4adJHE%2B5Z%2B0hrmoQOcGs1%2Bi%2BI9UqpiecQN7WSVnloR0sldftJzwPJcFqIiDFnLgPkBUFbhFQLAbvwwwHeclYw%2FsetwAY6pgFsRJEyjJlyxpBqlY7e5gT0X7dRb2xPfXV7Q4ctbHB2XbtBXIyXgwX5lM3P9ptihKIrzFtxyKsTRcnGAFUOMPIFxN2TtHKm%2FLK0192yrnaPh9mYD%2BIo4YoodEl98brELIjTm5lrHRbHr%2FaXfOZhbfE%2FJSzlZl2oSdz7JFvr2p8WAdE2PuLRLlQ%2BGKPwfnEl1gj3ffcyi3d%2FiG2TMJHcjKr9l4QNMh60&X-Amz-Signature=c85d0d1d34f77ecb56dc920c7c0dce9184657be3415bdebb58d009b6762dc5af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIEBCLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKj80YLq0YovH0b7KP%2FoEgtO7J2ai4QuGInSpsG4wKWAiBj%2B9VXlv29ytz%2FTzP%2FffHopCa5BCV%2FTc9tIXC%2BboQ8Wir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90I0Ns0%2FBamAO0f1KtwD%2BpzTQAYXF%2FgrNrMl37xyU93%2BBtwPN790xced4u5oqzXhI5LC7dkO7QJMRB%2F%2FApELJNZgtBy2U9BlDYQgrjFhQwwNObi7aO9w6EszrzWBN2opNsU%2BiaUs65%2FpuwP%2FkrlTloiuLGHjca7WiYEd%2Bwe41mEIwnB7Z2uMc0HTX7%2FYDnyOHXqdWHh%2BEEJ%2BYuf7wwArxx3dabBar8PGKm5VfcuIcdb9VfqrNJ%2BRVUXJwGldrcjigDH4%2BUqJydwQ7t6va2Mckcz%2FUdAb1umwIwdN5iR7NtXV20uzFHCVgTNXZ%2BFR8JRSfLJUsASxRqyfms%2BDjd3SdcF9bWL2xjyRzUDOQRPt0d50TkSBNVEkEL4onNFRSFyVRfnN4rSNknpKPCIMmEIKwiUMuHeKTtU4ONl8kotOcsy%2F%2Bsp7LQO6XGuSFVvGZE%2F5g%2B%2F18DlDpRGVOAV99p8Qq060lp11IeH8wZeWHmFeNH2lslYPahzhYlc4CQpX8zDiBMyLIKmXgHYSdtyiD1uy91mTydJm0DmCXRj6vCsY7a8jF3AJG9gFd2F6mpn4adJHE%2B5Z%2B0hrmoQOcGs1%2Bi%2BI9UqpiecQN7WSVnloR0sldftJzwPJcFqIiDFnLgPkBUFbhFQLAbvwwwHeclYw%2FsetwAY6pgFsRJEyjJlyxpBqlY7e5gT0X7dRb2xPfXV7Q4ctbHB2XbtBXIyXgwX5lM3P9ptihKIrzFtxyKsTRcnGAFUOMPIFxN2TtHKm%2FLK0192yrnaPh9mYD%2BIo4YoodEl98brELIjTm5lrHRbHr%2FaXfOZhbfE%2FJSzlZl2oSdz7JFvr2p8WAdE2PuLRLlQ%2BGKPwfnEl1gj3ffcyi3d%2FiG2TMJHcjKr9l4QNMh60&X-Amz-Signature=4fe0c4227a2383d90c13cfaa2b6b3fb8585464a0c0557d99a139b335943ba480&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIEBCLI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKj80YLq0YovH0b7KP%2FoEgtO7J2ai4QuGInSpsG4wKWAiBj%2B9VXlv29ytz%2FTzP%2FffHopCa5BCV%2FTc9tIXC%2BboQ8Wir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM90I0Ns0%2FBamAO0f1KtwD%2BpzTQAYXF%2FgrNrMl37xyU93%2BBtwPN790xced4u5oqzXhI5LC7dkO7QJMRB%2F%2FApELJNZgtBy2U9BlDYQgrjFhQwwNObi7aO9w6EszrzWBN2opNsU%2BiaUs65%2FpuwP%2FkrlTloiuLGHjca7WiYEd%2Bwe41mEIwnB7Z2uMc0HTX7%2FYDnyOHXqdWHh%2BEEJ%2BYuf7wwArxx3dabBar8PGKm5VfcuIcdb9VfqrNJ%2BRVUXJwGldrcjigDH4%2BUqJydwQ7t6va2Mckcz%2FUdAb1umwIwdN5iR7NtXV20uzFHCVgTNXZ%2BFR8JRSfLJUsASxRqyfms%2BDjd3SdcF9bWL2xjyRzUDOQRPt0d50TkSBNVEkEL4onNFRSFyVRfnN4rSNknpKPCIMmEIKwiUMuHeKTtU4ONl8kotOcsy%2F%2Bsp7LQO6XGuSFVvGZE%2F5g%2B%2F18DlDpRGVOAV99p8Qq060lp11IeH8wZeWHmFeNH2lslYPahzhYlc4CQpX8zDiBMyLIKmXgHYSdtyiD1uy91mTydJm0DmCXRj6vCsY7a8jF3AJG9gFd2F6mpn4adJHE%2B5Z%2B0hrmoQOcGs1%2Bi%2BI9UqpiecQN7WSVnloR0sldftJzwPJcFqIiDFnLgPkBUFbhFQLAbvwwwHeclYw%2FsetwAY6pgFsRJEyjJlyxpBqlY7e5gT0X7dRb2xPfXV7Q4ctbHB2XbtBXIyXgwX5lM3P9ptihKIrzFtxyKsTRcnGAFUOMPIFxN2TtHKm%2FLK0192yrnaPh9mYD%2BIo4YoodEl98brELIjTm5lrHRbHr%2FaXfOZhbfE%2FJSzlZl2oSdz7JFvr2p8WAdE2PuLRLlQ%2BGKPwfnEl1gj3ffcyi3d%2FiG2TMJHcjKr9l4QNMh60&X-Amz-Signature=66283d03f1a6b98a386ee2c02f216c9ea73a90dc5ec2f1c3958f1cb7063dfb08&X-Amz-SignedHeaders=host&x-id=GetObject)
