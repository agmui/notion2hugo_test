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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI7LIN5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFvm3Fo2ylbI6mref3my4CYgq0BnaQg51wJQRH5hU0rAiAAgG0nP00PkaTE8MgCKE4VA8xtacf00saVgVkt9OpLcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDOu9jwEBxzA9imuKtwDQcsjrpQEIsyeZNXJoFsH6Z6zBTxNna0iB9wwVYce3hfkW883ZoSJx5tdoBNjwek28%2B8NZdljlgI8mMqmNeSlKIvyBCLDRxf5%2B2%2BoZyQ31pNoAd%2FnFVJONRXZehCMLfXuqDZjTetaowsaO3stHiAMCDvIgdVCL0coip%2F2Q7p4LxH%2BnSXVza4cof8g7lxSukR%2BdBxFo0IHlRPoJ7b20Q99Qfa2IuOsnSlTTrkGfkhU6lCEoKPnb8ex1Ay%2BEwTALGeGSdOeTgr2cetWOt9BTMNDVE2n78aYJ03wTXBEGRG%2FFhjoNHw%2B2616ey8%2FmSj757EqzTjcn668c4idiyOmZ4eLZ55Kf3UyYvsu8zmoGwvO2WppIhxhuz%2BGMD17GcjhohlIsMurt9oCiuvXyrL2SFj1QgewQcVL4UJgFcgW1kh8Nq5v1CcEF03EbxfVdEFLTm4JlFAC7sw%2FsaZ%2FGf4rM7JeKTQo98OaXpoZVFiu8YRzERMCPOhTNh%2BzQYsIluEn2GofKiIZQSedLb6MFNOkxQOdhPvSo89oiwrGTLb1qMKKnErf6cK0bmMdkshYPm8LH3rQOP4uFZdF7ClXjP3tJuQIhoBAwtkkhquswuHNQg%2B5AmAQw0Px7Tinx4elmZww3sqBvwY6pgEjNxf5cyAckjNfYowgxGt0qj7Qdpqu7PJO6QihcHaqyRAWXCebOmCIDo39H9jXedXlHAYN3zqFnP%2F3UyiLtIDS5h6kxgMda2rAdHdU%2B1PuyoJxwgiG1fHIGc20HuU2zyCA3xOKjt1za6ns0a%2B3A9VbdH1sOQ9bJFHALbuJaHgsmhfPfvyjBXTa5ygQVzzjELPeMXZrUkY%2BHseAijk7hXpSfWwRAcv5&X-Amz-Signature=3c3fb31775dfdf94701b55c4413d1f00629c9eb7266f2e65aaa1959c37b3f6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI7LIN5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFvm3Fo2ylbI6mref3my4CYgq0BnaQg51wJQRH5hU0rAiAAgG0nP00PkaTE8MgCKE4VA8xtacf00saVgVkt9OpLcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDOu9jwEBxzA9imuKtwDQcsjrpQEIsyeZNXJoFsH6Z6zBTxNna0iB9wwVYce3hfkW883ZoSJx5tdoBNjwek28%2B8NZdljlgI8mMqmNeSlKIvyBCLDRxf5%2B2%2BoZyQ31pNoAd%2FnFVJONRXZehCMLfXuqDZjTetaowsaO3stHiAMCDvIgdVCL0coip%2F2Q7p4LxH%2BnSXVza4cof8g7lxSukR%2BdBxFo0IHlRPoJ7b20Q99Qfa2IuOsnSlTTrkGfkhU6lCEoKPnb8ex1Ay%2BEwTALGeGSdOeTgr2cetWOt9BTMNDVE2n78aYJ03wTXBEGRG%2FFhjoNHw%2B2616ey8%2FmSj757EqzTjcn668c4idiyOmZ4eLZ55Kf3UyYvsu8zmoGwvO2WppIhxhuz%2BGMD17GcjhohlIsMurt9oCiuvXyrL2SFj1QgewQcVL4UJgFcgW1kh8Nq5v1CcEF03EbxfVdEFLTm4JlFAC7sw%2FsaZ%2FGf4rM7JeKTQo98OaXpoZVFiu8YRzERMCPOhTNh%2BzQYsIluEn2GofKiIZQSedLb6MFNOkxQOdhPvSo89oiwrGTLb1qMKKnErf6cK0bmMdkshYPm8LH3rQOP4uFZdF7ClXjP3tJuQIhoBAwtkkhquswuHNQg%2B5AmAQw0Px7Tinx4elmZww3sqBvwY6pgEjNxf5cyAckjNfYowgxGt0qj7Qdpqu7PJO6QihcHaqyRAWXCebOmCIDo39H9jXedXlHAYN3zqFnP%2F3UyiLtIDS5h6kxgMda2rAdHdU%2B1PuyoJxwgiG1fHIGc20HuU2zyCA3xOKjt1za6ns0a%2B3A9VbdH1sOQ9bJFHALbuJaHgsmhfPfvyjBXTa5ygQVzzjELPeMXZrUkY%2BHseAijk7hXpSfWwRAcv5&X-Amz-Signature=c5a14eff265b8405782ec420d3e0d5f36d704374a16994c93422acafec2af89c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI7LIN5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFvm3Fo2ylbI6mref3my4CYgq0BnaQg51wJQRH5hU0rAiAAgG0nP00PkaTE8MgCKE4VA8xtacf00saVgVkt9OpLcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDOu9jwEBxzA9imuKtwDQcsjrpQEIsyeZNXJoFsH6Z6zBTxNna0iB9wwVYce3hfkW883ZoSJx5tdoBNjwek28%2B8NZdljlgI8mMqmNeSlKIvyBCLDRxf5%2B2%2BoZyQ31pNoAd%2FnFVJONRXZehCMLfXuqDZjTetaowsaO3stHiAMCDvIgdVCL0coip%2F2Q7p4LxH%2BnSXVza4cof8g7lxSukR%2BdBxFo0IHlRPoJ7b20Q99Qfa2IuOsnSlTTrkGfkhU6lCEoKPnb8ex1Ay%2BEwTALGeGSdOeTgr2cetWOt9BTMNDVE2n78aYJ03wTXBEGRG%2FFhjoNHw%2B2616ey8%2FmSj757EqzTjcn668c4idiyOmZ4eLZ55Kf3UyYvsu8zmoGwvO2WppIhxhuz%2BGMD17GcjhohlIsMurt9oCiuvXyrL2SFj1QgewQcVL4UJgFcgW1kh8Nq5v1CcEF03EbxfVdEFLTm4JlFAC7sw%2FsaZ%2FGf4rM7JeKTQo98OaXpoZVFiu8YRzERMCPOhTNh%2BzQYsIluEn2GofKiIZQSedLb6MFNOkxQOdhPvSo89oiwrGTLb1qMKKnErf6cK0bmMdkshYPm8LH3rQOP4uFZdF7ClXjP3tJuQIhoBAwtkkhquswuHNQg%2B5AmAQw0Px7Tinx4elmZww3sqBvwY6pgEjNxf5cyAckjNfYowgxGt0qj7Qdpqu7PJO6QihcHaqyRAWXCebOmCIDo39H9jXedXlHAYN3zqFnP%2F3UyiLtIDS5h6kxgMda2rAdHdU%2B1PuyoJxwgiG1fHIGc20HuU2zyCA3xOKjt1za6ns0a%2B3A9VbdH1sOQ9bJFHALbuJaHgsmhfPfvyjBXTa5ygQVzzjELPeMXZrUkY%2BHseAijk7hXpSfWwRAcv5&X-Amz-Signature=196454b80a689e74238e291abc78101ef41c280ac2aaf8c6779b6b34a7b11439&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI7LIN5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFvm3Fo2ylbI6mref3my4CYgq0BnaQg51wJQRH5hU0rAiAAgG0nP00PkaTE8MgCKE4VA8xtacf00saVgVkt9OpLcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDOu9jwEBxzA9imuKtwDQcsjrpQEIsyeZNXJoFsH6Z6zBTxNna0iB9wwVYce3hfkW883ZoSJx5tdoBNjwek28%2B8NZdljlgI8mMqmNeSlKIvyBCLDRxf5%2B2%2BoZyQ31pNoAd%2FnFVJONRXZehCMLfXuqDZjTetaowsaO3stHiAMCDvIgdVCL0coip%2F2Q7p4LxH%2BnSXVza4cof8g7lxSukR%2BdBxFo0IHlRPoJ7b20Q99Qfa2IuOsnSlTTrkGfkhU6lCEoKPnb8ex1Ay%2BEwTALGeGSdOeTgr2cetWOt9BTMNDVE2n78aYJ03wTXBEGRG%2FFhjoNHw%2B2616ey8%2FmSj757EqzTjcn668c4idiyOmZ4eLZ55Kf3UyYvsu8zmoGwvO2WppIhxhuz%2BGMD17GcjhohlIsMurt9oCiuvXyrL2SFj1QgewQcVL4UJgFcgW1kh8Nq5v1CcEF03EbxfVdEFLTm4JlFAC7sw%2FsaZ%2FGf4rM7JeKTQo98OaXpoZVFiu8YRzERMCPOhTNh%2BzQYsIluEn2GofKiIZQSedLb6MFNOkxQOdhPvSo89oiwrGTLb1qMKKnErf6cK0bmMdkshYPm8LH3rQOP4uFZdF7ClXjP3tJuQIhoBAwtkkhquswuHNQg%2B5AmAQw0Px7Tinx4elmZww3sqBvwY6pgEjNxf5cyAckjNfYowgxGt0qj7Qdpqu7PJO6QihcHaqyRAWXCebOmCIDo39H9jXedXlHAYN3zqFnP%2F3UyiLtIDS5h6kxgMda2rAdHdU%2B1PuyoJxwgiG1fHIGc20HuU2zyCA3xOKjt1za6ns0a%2B3A9VbdH1sOQ9bJFHALbuJaHgsmhfPfvyjBXTa5ygQVzzjELPeMXZrUkY%2BHseAijk7hXpSfWwRAcv5&X-Amz-Signature=37a5361e23e37fdad793cb1be192f7d9c7d92b923d9cd81f75f204bb13d4539f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI7LIN5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFvm3Fo2ylbI6mref3my4CYgq0BnaQg51wJQRH5hU0rAiAAgG0nP00PkaTE8MgCKE4VA8xtacf00saVgVkt9OpLcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDOu9jwEBxzA9imuKtwDQcsjrpQEIsyeZNXJoFsH6Z6zBTxNna0iB9wwVYce3hfkW883ZoSJx5tdoBNjwek28%2B8NZdljlgI8mMqmNeSlKIvyBCLDRxf5%2B2%2BoZyQ31pNoAd%2FnFVJONRXZehCMLfXuqDZjTetaowsaO3stHiAMCDvIgdVCL0coip%2F2Q7p4LxH%2BnSXVza4cof8g7lxSukR%2BdBxFo0IHlRPoJ7b20Q99Qfa2IuOsnSlTTrkGfkhU6lCEoKPnb8ex1Ay%2BEwTALGeGSdOeTgr2cetWOt9BTMNDVE2n78aYJ03wTXBEGRG%2FFhjoNHw%2B2616ey8%2FmSj757EqzTjcn668c4idiyOmZ4eLZ55Kf3UyYvsu8zmoGwvO2WppIhxhuz%2BGMD17GcjhohlIsMurt9oCiuvXyrL2SFj1QgewQcVL4UJgFcgW1kh8Nq5v1CcEF03EbxfVdEFLTm4JlFAC7sw%2FsaZ%2FGf4rM7JeKTQo98OaXpoZVFiu8YRzERMCPOhTNh%2BzQYsIluEn2GofKiIZQSedLb6MFNOkxQOdhPvSo89oiwrGTLb1qMKKnErf6cK0bmMdkshYPm8LH3rQOP4uFZdF7ClXjP3tJuQIhoBAwtkkhquswuHNQg%2B5AmAQw0Px7Tinx4elmZww3sqBvwY6pgEjNxf5cyAckjNfYowgxGt0qj7Qdpqu7PJO6QihcHaqyRAWXCebOmCIDo39H9jXedXlHAYN3zqFnP%2F3UyiLtIDS5h6kxgMda2rAdHdU%2B1PuyoJxwgiG1fHIGc20HuU2zyCA3xOKjt1za6ns0a%2B3A9VbdH1sOQ9bJFHALbuJaHgsmhfPfvyjBXTa5ygQVzzjELPeMXZrUkY%2BHseAijk7hXpSfWwRAcv5&X-Amz-Signature=0b468d68342f33b41b2acd6439ff79b92f7ae4860ac8acd0908b22d39fb08632&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI7LIN5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFvm3Fo2ylbI6mref3my4CYgq0BnaQg51wJQRH5hU0rAiAAgG0nP00PkaTE8MgCKE4VA8xtacf00saVgVkt9OpLcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDOu9jwEBxzA9imuKtwDQcsjrpQEIsyeZNXJoFsH6Z6zBTxNna0iB9wwVYce3hfkW883ZoSJx5tdoBNjwek28%2B8NZdljlgI8mMqmNeSlKIvyBCLDRxf5%2B2%2BoZyQ31pNoAd%2FnFVJONRXZehCMLfXuqDZjTetaowsaO3stHiAMCDvIgdVCL0coip%2F2Q7p4LxH%2BnSXVza4cof8g7lxSukR%2BdBxFo0IHlRPoJ7b20Q99Qfa2IuOsnSlTTrkGfkhU6lCEoKPnb8ex1Ay%2BEwTALGeGSdOeTgr2cetWOt9BTMNDVE2n78aYJ03wTXBEGRG%2FFhjoNHw%2B2616ey8%2FmSj757EqzTjcn668c4idiyOmZ4eLZ55Kf3UyYvsu8zmoGwvO2WppIhxhuz%2BGMD17GcjhohlIsMurt9oCiuvXyrL2SFj1QgewQcVL4UJgFcgW1kh8Nq5v1CcEF03EbxfVdEFLTm4JlFAC7sw%2FsaZ%2FGf4rM7JeKTQo98OaXpoZVFiu8YRzERMCPOhTNh%2BzQYsIluEn2GofKiIZQSedLb6MFNOkxQOdhPvSo89oiwrGTLb1qMKKnErf6cK0bmMdkshYPm8LH3rQOP4uFZdF7ClXjP3tJuQIhoBAwtkkhquswuHNQg%2B5AmAQw0Px7Tinx4elmZww3sqBvwY6pgEjNxf5cyAckjNfYowgxGt0qj7Qdpqu7PJO6QihcHaqyRAWXCebOmCIDo39H9jXedXlHAYN3zqFnP%2F3UyiLtIDS5h6kxgMda2rAdHdU%2B1PuyoJxwgiG1fHIGc20HuU2zyCA3xOKjt1za6ns0a%2B3A9VbdH1sOQ9bJFHALbuJaHgsmhfPfvyjBXTa5ygQVzzjELPeMXZrUkY%2BHseAijk7hXpSfWwRAcv5&X-Amz-Signature=14057ff277fa6ed4e88bf0d731e8dc5e52d6a55326827be89cc8ec435892664a&X-Amz-SignedHeaders=host&x-id=GetObject)
