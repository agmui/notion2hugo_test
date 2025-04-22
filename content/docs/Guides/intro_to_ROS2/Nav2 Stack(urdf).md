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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCXMX4D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBTx9U8yYFGEOIX5r0D8dl2iaJg%2BHdUdlrm%2FBv1KxZ8rAiAFKRPFviEug%2FzljyaDyNV2KMKfbqQmfnJTbdyZ%2BlrW%2BiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xkPlG7yGbetyuWaKtwD7S2isKRSH92BW9DFTKb69okeA%2BHoxnNnNC%2FoDTbYr7vuu481yxCbQfnbEnjtzCSqm%2BxATTVhvIWOLExJjl0tQRi8Xgs4Jca6vCghBp3OpX5NzXwqbkK977YCoMKNuHY61pqrXhVvaXnEdg%2B4wYozRxYmviiFeHgekTZdp7UbYAQK68O%2FT9B6VVVPO4wduHdY6Qay%2BA3XnNA85pfuJ6LlJDS6Sjx0fpEPYXqHFsRA1njUBsWDiz5oaQp9AdfKTLCl9sfI0yLmqsvuAP3RimSc2m1GgFz2urbapssSfcJ3DPgHBmNE9SDz6Na0tNOVW%2Fb1zaiaHo3y0qApTrTWX1INxwic9fsUunsBCMcPZSJOAfu%2BO220AnjR31YtvLhfidQRs0PtIFziFxchV2shdeF%2FPUTciP19seElaWA9%2BN1n3BiRtQ17k2I4qxQQZHu1A1MSURim2VNq%2FuNH7oL7IdvrF7uzcdm34%2Bc0XqyiHAOpxaotrm1kYfLOStkDeaMkXY68U84AZFi5nJK4oNQk5%2FkS8h%2Bopq3wQRK3N0KvXMll0Jw5YxXGDZOIvMinnxFU45Gp9IkdLwLfP8eP9Y2JZVRcXAI3n%2FUiw8V06trmyOoZp7DdNh%2F68JBBOJSty1kw7L2gwAY6pgFMLY4SWi2aBO2ICKeRaHAGAXXpBWbBtkD7VACwtpk5LwETrKk5GlSiZno%2BEL%2Fy%2F%2B0BincGiRz1qhJdH2Ln8Coft8o1oUnVCvpcnRTsBXr6lUa4UrGrmEdBxzmls3E17G13kRWzIYEvu9o0KU29Hfn%2Bm3gS%2BBmEtC8w6sgi0E9ol5ROdbcUmzEJuqwQfCfaPjMBf9uOQePQjRtx4iZj2yJoqkQSNors&X-Amz-Signature=32989b34894b4d1f96d471d5fd0ff2c1783c5708337e9e88d029442491f1270b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCXMX4D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBTx9U8yYFGEOIX5r0D8dl2iaJg%2BHdUdlrm%2FBv1KxZ8rAiAFKRPFviEug%2FzljyaDyNV2KMKfbqQmfnJTbdyZ%2BlrW%2BiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xkPlG7yGbetyuWaKtwD7S2isKRSH92BW9DFTKb69okeA%2BHoxnNnNC%2FoDTbYr7vuu481yxCbQfnbEnjtzCSqm%2BxATTVhvIWOLExJjl0tQRi8Xgs4Jca6vCghBp3OpX5NzXwqbkK977YCoMKNuHY61pqrXhVvaXnEdg%2B4wYozRxYmviiFeHgekTZdp7UbYAQK68O%2FT9B6VVVPO4wduHdY6Qay%2BA3XnNA85pfuJ6LlJDS6Sjx0fpEPYXqHFsRA1njUBsWDiz5oaQp9AdfKTLCl9sfI0yLmqsvuAP3RimSc2m1GgFz2urbapssSfcJ3DPgHBmNE9SDz6Na0tNOVW%2Fb1zaiaHo3y0qApTrTWX1INxwic9fsUunsBCMcPZSJOAfu%2BO220AnjR31YtvLhfidQRs0PtIFziFxchV2shdeF%2FPUTciP19seElaWA9%2BN1n3BiRtQ17k2I4qxQQZHu1A1MSURim2VNq%2FuNH7oL7IdvrF7uzcdm34%2Bc0XqyiHAOpxaotrm1kYfLOStkDeaMkXY68U84AZFi5nJK4oNQk5%2FkS8h%2Bopq3wQRK3N0KvXMll0Jw5YxXGDZOIvMinnxFU45Gp9IkdLwLfP8eP9Y2JZVRcXAI3n%2FUiw8V06trmyOoZp7DdNh%2F68JBBOJSty1kw7L2gwAY6pgFMLY4SWi2aBO2ICKeRaHAGAXXpBWbBtkD7VACwtpk5LwETrKk5GlSiZno%2BEL%2Fy%2F%2B0BincGiRz1qhJdH2Ln8Coft8o1oUnVCvpcnRTsBXr6lUa4UrGrmEdBxzmls3E17G13kRWzIYEvu9o0KU29Hfn%2Bm3gS%2BBmEtC8w6sgi0E9ol5ROdbcUmzEJuqwQfCfaPjMBf9uOQePQjRtx4iZj2yJoqkQSNors&X-Amz-Signature=71ff2e85edbcb4704a191940bbef9c35efffbde44a44dbc09958d7284ba42be3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCXMX4D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBTx9U8yYFGEOIX5r0D8dl2iaJg%2BHdUdlrm%2FBv1KxZ8rAiAFKRPFviEug%2FzljyaDyNV2KMKfbqQmfnJTbdyZ%2BlrW%2BiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xkPlG7yGbetyuWaKtwD7S2isKRSH92BW9DFTKb69okeA%2BHoxnNnNC%2FoDTbYr7vuu481yxCbQfnbEnjtzCSqm%2BxATTVhvIWOLExJjl0tQRi8Xgs4Jca6vCghBp3OpX5NzXwqbkK977YCoMKNuHY61pqrXhVvaXnEdg%2B4wYozRxYmviiFeHgekTZdp7UbYAQK68O%2FT9B6VVVPO4wduHdY6Qay%2BA3XnNA85pfuJ6LlJDS6Sjx0fpEPYXqHFsRA1njUBsWDiz5oaQp9AdfKTLCl9sfI0yLmqsvuAP3RimSc2m1GgFz2urbapssSfcJ3DPgHBmNE9SDz6Na0tNOVW%2Fb1zaiaHo3y0qApTrTWX1INxwic9fsUunsBCMcPZSJOAfu%2BO220AnjR31YtvLhfidQRs0PtIFziFxchV2shdeF%2FPUTciP19seElaWA9%2BN1n3BiRtQ17k2I4qxQQZHu1A1MSURim2VNq%2FuNH7oL7IdvrF7uzcdm34%2Bc0XqyiHAOpxaotrm1kYfLOStkDeaMkXY68U84AZFi5nJK4oNQk5%2FkS8h%2Bopq3wQRK3N0KvXMll0Jw5YxXGDZOIvMinnxFU45Gp9IkdLwLfP8eP9Y2JZVRcXAI3n%2FUiw8V06trmyOoZp7DdNh%2F68JBBOJSty1kw7L2gwAY6pgFMLY4SWi2aBO2ICKeRaHAGAXXpBWbBtkD7VACwtpk5LwETrKk5GlSiZno%2BEL%2Fy%2F%2B0BincGiRz1qhJdH2Ln8Coft8o1oUnVCvpcnRTsBXr6lUa4UrGrmEdBxzmls3E17G13kRWzIYEvu9o0KU29Hfn%2Bm3gS%2BBmEtC8w6sgi0E9ol5ROdbcUmzEJuqwQfCfaPjMBf9uOQePQjRtx4iZj2yJoqkQSNors&X-Amz-Signature=69d88525e6f080d4761c8601a27d6cf8fce892fb9df53fb4dcaef727513699b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCXMX4D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBTx9U8yYFGEOIX5r0D8dl2iaJg%2BHdUdlrm%2FBv1KxZ8rAiAFKRPFviEug%2FzljyaDyNV2KMKfbqQmfnJTbdyZ%2BlrW%2BiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xkPlG7yGbetyuWaKtwD7S2isKRSH92BW9DFTKb69okeA%2BHoxnNnNC%2FoDTbYr7vuu481yxCbQfnbEnjtzCSqm%2BxATTVhvIWOLExJjl0tQRi8Xgs4Jca6vCghBp3OpX5NzXwqbkK977YCoMKNuHY61pqrXhVvaXnEdg%2B4wYozRxYmviiFeHgekTZdp7UbYAQK68O%2FT9B6VVVPO4wduHdY6Qay%2BA3XnNA85pfuJ6LlJDS6Sjx0fpEPYXqHFsRA1njUBsWDiz5oaQp9AdfKTLCl9sfI0yLmqsvuAP3RimSc2m1GgFz2urbapssSfcJ3DPgHBmNE9SDz6Na0tNOVW%2Fb1zaiaHo3y0qApTrTWX1INxwic9fsUunsBCMcPZSJOAfu%2BO220AnjR31YtvLhfidQRs0PtIFziFxchV2shdeF%2FPUTciP19seElaWA9%2BN1n3BiRtQ17k2I4qxQQZHu1A1MSURim2VNq%2FuNH7oL7IdvrF7uzcdm34%2Bc0XqyiHAOpxaotrm1kYfLOStkDeaMkXY68U84AZFi5nJK4oNQk5%2FkS8h%2Bopq3wQRK3N0KvXMll0Jw5YxXGDZOIvMinnxFU45Gp9IkdLwLfP8eP9Y2JZVRcXAI3n%2FUiw8V06trmyOoZp7DdNh%2F68JBBOJSty1kw7L2gwAY6pgFMLY4SWi2aBO2ICKeRaHAGAXXpBWbBtkD7VACwtpk5LwETrKk5GlSiZno%2BEL%2Fy%2F%2B0BincGiRz1qhJdH2Ln8Coft8o1oUnVCvpcnRTsBXr6lUa4UrGrmEdBxzmls3E17G13kRWzIYEvu9o0KU29Hfn%2Bm3gS%2BBmEtC8w6sgi0E9ol5ROdbcUmzEJuqwQfCfaPjMBf9uOQePQjRtx4iZj2yJoqkQSNors&X-Amz-Signature=3af3fc8812868bbd8e3ef5dc4c3a0172125184b5d68196cd6917d3680261ef55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCXMX4D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBTx9U8yYFGEOIX5r0D8dl2iaJg%2BHdUdlrm%2FBv1KxZ8rAiAFKRPFviEug%2FzljyaDyNV2KMKfbqQmfnJTbdyZ%2BlrW%2BiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xkPlG7yGbetyuWaKtwD7S2isKRSH92BW9DFTKb69okeA%2BHoxnNnNC%2FoDTbYr7vuu481yxCbQfnbEnjtzCSqm%2BxATTVhvIWOLExJjl0tQRi8Xgs4Jca6vCghBp3OpX5NzXwqbkK977YCoMKNuHY61pqrXhVvaXnEdg%2B4wYozRxYmviiFeHgekTZdp7UbYAQK68O%2FT9B6VVVPO4wduHdY6Qay%2BA3XnNA85pfuJ6LlJDS6Sjx0fpEPYXqHFsRA1njUBsWDiz5oaQp9AdfKTLCl9sfI0yLmqsvuAP3RimSc2m1GgFz2urbapssSfcJ3DPgHBmNE9SDz6Na0tNOVW%2Fb1zaiaHo3y0qApTrTWX1INxwic9fsUunsBCMcPZSJOAfu%2BO220AnjR31YtvLhfidQRs0PtIFziFxchV2shdeF%2FPUTciP19seElaWA9%2BN1n3BiRtQ17k2I4qxQQZHu1A1MSURim2VNq%2FuNH7oL7IdvrF7uzcdm34%2Bc0XqyiHAOpxaotrm1kYfLOStkDeaMkXY68U84AZFi5nJK4oNQk5%2FkS8h%2Bopq3wQRK3N0KvXMll0Jw5YxXGDZOIvMinnxFU45Gp9IkdLwLfP8eP9Y2JZVRcXAI3n%2FUiw8V06trmyOoZp7DdNh%2F68JBBOJSty1kw7L2gwAY6pgFMLY4SWi2aBO2ICKeRaHAGAXXpBWbBtkD7VACwtpk5LwETrKk5GlSiZno%2BEL%2Fy%2F%2B0BincGiRz1qhJdH2Ln8Coft8o1oUnVCvpcnRTsBXr6lUa4UrGrmEdBxzmls3E17G13kRWzIYEvu9o0KU29Hfn%2Bm3gS%2BBmEtC8w6sgi0E9ol5ROdbcUmzEJuqwQfCfaPjMBf9uOQePQjRtx4iZj2yJoqkQSNors&X-Amz-Signature=3a374fc8631dd9331e51f99c0666d6d97dce40bfec3c154a2034751ce7946b98&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCXMX4D%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBTx9U8yYFGEOIX5r0D8dl2iaJg%2BHdUdlrm%2FBv1KxZ8rAiAFKRPFviEug%2FzljyaDyNV2KMKfbqQmfnJTbdyZ%2BlrW%2BiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xkPlG7yGbetyuWaKtwD7S2isKRSH92BW9DFTKb69okeA%2BHoxnNnNC%2FoDTbYr7vuu481yxCbQfnbEnjtzCSqm%2BxATTVhvIWOLExJjl0tQRi8Xgs4Jca6vCghBp3OpX5NzXwqbkK977YCoMKNuHY61pqrXhVvaXnEdg%2B4wYozRxYmviiFeHgekTZdp7UbYAQK68O%2FT9B6VVVPO4wduHdY6Qay%2BA3XnNA85pfuJ6LlJDS6Sjx0fpEPYXqHFsRA1njUBsWDiz5oaQp9AdfKTLCl9sfI0yLmqsvuAP3RimSc2m1GgFz2urbapssSfcJ3DPgHBmNE9SDz6Na0tNOVW%2Fb1zaiaHo3y0qApTrTWX1INxwic9fsUunsBCMcPZSJOAfu%2BO220AnjR31YtvLhfidQRs0PtIFziFxchV2shdeF%2FPUTciP19seElaWA9%2BN1n3BiRtQ17k2I4qxQQZHu1A1MSURim2VNq%2FuNH7oL7IdvrF7uzcdm34%2Bc0XqyiHAOpxaotrm1kYfLOStkDeaMkXY68U84AZFi5nJK4oNQk5%2FkS8h%2Bopq3wQRK3N0KvXMll0Jw5YxXGDZOIvMinnxFU45Gp9IkdLwLfP8eP9Y2JZVRcXAI3n%2FUiw8V06trmyOoZp7DdNh%2F68JBBOJSty1kw7L2gwAY6pgFMLY4SWi2aBO2ICKeRaHAGAXXpBWbBtkD7VACwtpk5LwETrKk5GlSiZno%2BEL%2Fy%2F%2B0BincGiRz1qhJdH2Ln8Coft8o1oUnVCvpcnRTsBXr6lUa4UrGrmEdBxzmls3E17G13kRWzIYEvu9o0KU29Hfn%2Bm3gS%2BBmEtC8w6sgi0E9ol5ROdbcUmzEJuqwQfCfaPjMBf9uOQePQjRtx4iZj2yJoqkQSNors&X-Amz-Signature=eefcee2493d4fa881d7fa647efcfff7d26409595b3e19d4460daaadfcd780c1c&X-Amz-SignedHeaders=host&x-id=GetObject)
