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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZ5SCEB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDYBvwwGdXv51%2Fbn1x6nF0F7d2dGGiRVJbY4VvYlmXN0AIgCnb75oizb4kiSJ4Dpg6R7H05lvVxVjcXKpP4M1zh5MEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNMkKsCCnYrP46TcSrcAxKjH%2B4YvYPIxYNiyaDSdf1LOUapUprv2G8rdaF7HCMEAqN7AsUGb9MopsKo2Ky5Wg19giRAKLkBPXZptMAt0jdEZHx2HZkYjAW%2Fs7L5dLo20J61aQVhwfMgSMsBl42KdcpIBBRlKjejwRqyZ%2BYqqFJD%2Bn36R8KxBxL7%2FekgOxP96J1rgNJTcBwsI67W5mCdtPCXOf2L5VcDNc6VCKVq6Dwp5o13X%2BWXWpi9WfgxMKuqv%2F1J3hfwz8z3qs5%2FJ0i3wXYNOwtWb5V8Qm%2BoCuPfsUu8qNv7bMBL%2B%2Fyv%2Fq1yyuQXVc0kGncuzUKM3f2DsLdpDeRLQT390a1%2BdkQWKcotF9oLr%2Bkzk45XJvVfmOQLWiwDFdQhZc1qNr%2BbTrrFLcXhQT3tgFbJR7%2FoS2RpPRDvpTM56M3VmOgprcrHHJG6FJouPO4kVmR9PEzD7U8EfdFjE5P%2BDv09wywiC2W2iPsw9M18LYRXnTtzFPmCf9q81U%2BaCuihX%2F%2Bh8squKAD%2F1S8WYBC2108co9Wa8GZe8kiLXyRLzOXCNWyXdzhAQ4H2qJUrvKyDvhHaSJB%2BdAc%2BeZPYntmejmhp7bRHdubc5qwUWDXdAWv9PIASUA55R1c7axG5Umlu%2BeycPyvycA2TMMrZwcEGOqUB3KoZXpgeAVXoMDBezUPn30mhxzeGzyMwiMWAVejT1m3tAHMWW%2FuBkMglxk4S%2Fs4oqlZUNoFdR%2FXla5PzCWg4%2FtmbYplpRtXqhsrGhaWBPaL1OGQNVsMjxCuw0B68u6rfmp5QMW%2B1OklIC4LINsWQegT7FZh0rF0%2FnBBLS9esX7VIEU95RCinq330SBW2K7K0MbiRO%2FIE%2FcMOUr9ygsYOxrluPIdW&X-Amz-Signature=4a109b5adb4084693ad1ac11db32d1b288a3cee9095d5b32d27683594ade52dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZ5SCEB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDYBvwwGdXv51%2Fbn1x6nF0F7d2dGGiRVJbY4VvYlmXN0AIgCnb75oizb4kiSJ4Dpg6R7H05lvVxVjcXKpP4M1zh5MEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNMkKsCCnYrP46TcSrcAxKjH%2B4YvYPIxYNiyaDSdf1LOUapUprv2G8rdaF7HCMEAqN7AsUGb9MopsKo2Ky5Wg19giRAKLkBPXZptMAt0jdEZHx2HZkYjAW%2Fs7L5dLo20J61aQVhwfMgSMsBl42KdcpIBBRlKjejwRqyZ%2BYqqFJD%2Bn36R8KxBxL7%2FekgOxP96J1rgNJTcBwsI67W5mCdtPCXOf2L5VcDNc6VCKVq6Dwp5o13X%2BWXWpi9WfgxMKuqv%2F1J3hfwz8z3qs5%2FJ0i3wXYNOwtWb5V8Qm%2BoCuPfsUu8qNv7bMBL%2B%2Fyv%2Fq1yyuQXVc0kGncuzUKM3f2DsLdpDeRLQT390a1%2BdkQWKcotF9oLr%2Bkzk45XJvVfmOQLWiwDFdQhZc1qNr%2BbTrrFLcXhQT3tgFbJR7%2FoS2RpPRDvpTM56M3VmOgprcrHHJG6FJouPO4kVmR9PEzD7U8EfdFjE5P%2BDv09wywiC2W2iPsw9M18LYRXnTtzFPmCf9q81U%2BaCuihX%2F%2Bh8squKAD%2F1S8WYBC2108co9Wa8GZe8kiLXyRLzOXCNWyXdzhAQ4H2qJUrvKyDvhHaSJB%2BdAc%2BeZPYntmejmhp7bRHdubc5qwUWDXdAWv9PIASUA55R1c7axG5Umlu%2BeycPyvycA2TMMrZwcEGOqUB3KoZXpgeAVXoMDBezUPn30mhxzeGzyMwiMWAVejT1m3tAHMWW%2FuBkMglxk4S%2Fs4oqlZUNoFdR%2FXla5PzCWg4%2FtmbYplpRtXqhsrGhaWBPaL1OGQNVsMjxCuw0B68u6rfmp5QMW%2B1OklIC4LINsWQegT7FZh0rF0%2FnBBLS9esX7VIEU95RCinq330SBW2K7K0MbiRO%2FIE%2FcMOUr9ygsYOxrluPIdW&X-Amz-Signature=22b9512a63138f8940632f0193799b675766841209071a97e8d7fe9a197d0dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZ5SCEB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDYBvwwGdXv51%2Fbn1x6nF0F7d2dGGiRVJbY4VvYlmXN0AIgCnb75oizb4kiSJ4Dpg6R7H05lvVxVjcXKpP4M1zh5MEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNMkKsCCnYrP46TcSrcAxKjH%2B4YvYPIxYNiyaDSdf1LOUapUprv2G8rdaF7HCMEAqN7AsUGb9MopsKo2Ky5Wg19giRAKLkBPXZptMAt0jdEZHx2HZkYjAW%2Fs7L5dLo20J61aQVhwfMgSMsBl42KdcpIBBRlKjejwRqyZ%2BYqqFJD%2Bn36R8KxBxL7%2FekgOxP96J1rgNJTcBwsI67W5mCdtPCXOf2L5VcDNc6VCKVq6Dwp5o13X%2BWXWpi9WfgxMKuqv%2F1J3hfwz8z3qs5%2FJ0i3wXYNOwtWb5V8Qm%2BoCuPfsUu8qNv7bMBL%2B%2Fyv%2Fq1yyuQXVc0kGncuzUKM3f2DsLdpDeRLQT390a1%2BdkQWKcotF9oLr%2Bkzk45XJvVfmOQLWiwDFdQhZc1qNr%2BbTrrFLcXhQT3tgFbJR7%2FoS2RpPRDvpTM56M3VmOgprcrHHJG6FJouPO4kVmR9PEzD7U8EfdFjE5P%2BDv09wywiC2W2iPsw9M18LYRXnTtzFPmCf9q81U%2BaCuihX%2F%2Bh8squKAD%2F1S8WYBC2108co9Wa8GZe8kiLXyRLzOXCNWyXdzhAQ4H2qJUrvKyDvhHaSJB%2BdAc%2BeZPYntmejmhp7bRHdubc5qwUWDXdAWv9PIASUA55R1c7axG5Umlu%2BeycPyvycA2TMMrZwcEGOqUB3KoZXpgeAVXoMDBezUPn30mhxzeGzyMwiMWAVejT1m3tAHMWW%2FuBkMglxk4S%2Fs4oqlZUNoFdR%2FXla5PzCWg4%2FtmbYplpRtXqhsrGhaWBPaL1OGQNVsMjxCuw0B68u6rfmp5QMW%2B1OklIC4LINsWQegT7FZh0rF0%2FnBBLS9esX7VIEU95RCinq330SBW2K7K0MbiRO%2FIE%2FcMOUr9ygsYOxrluPIdW&X-Amz-Signature=71ad4715fe32fe77b0b609886ad9f96a455a1e825d59e370940d75e06340e52b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZ5SCEB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDYBvwwGdXv51%2Fbn1x6nF0F7d2dGGiRVJbY4VvYlmXN0AIgCnb75oizb4kiSJ4Dpg6R7H05lvVxVjcXKpP4M1zh5MEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNMkKsCCnYrP46TcSrcAxKjH%2B4YvYPIxYNiyaDSdf1LOUapUprv2G8rdaF7HCMEAqN7AsUGb9MopsKo2Ky5Wg19giRAKLkBPXZptMAt0jdEZHx2HZkYjAW%2Fs7L5dLo20J61aQVhwfMgSMsBl42KdcpIBBRlKjejwRqyZ%2BYqqFJD%2Bn36R8KxBxL7%2FekgOxP96J1rgNJTcBwsI67W5mCdtPCXOf2L5VcDNc6VCKVq6Dwp5o13X%2BWXWpi9WfgxMKuqv%2F1J3hfwz8z3qs5%2FJ0i3wXYNOwtWb5V8Qm%2BoCuPfsUu8qNv7bMBL%2B%2Fyv%2Fq1yyuQXVc0kGncuzUKM3f2DsLdpDeRLQT390a1%2BdkQWKcotF9oLr%2Bkzk45XJvVfmOQLWiwDFdQhZc1qNr%2BbTrrFLcXhQT3tgFbJR7%2FoS2RpPRDvpTM56M3VmOgprcrHHJG6FJouPO4kVmR9PEzD7U8EfdFjE5P%2BDv09wywiC2W2iPsw9M18LYRXnTtzFPmCf9q81U%2BaCuihX%2F%2Bh8squKAD%2F1S8WYBC2108co9Wa8GZe8kiLXyRLzOXCNWyXdzhAQ4H2qJUrvKyDvhHaSJB%2BdAc%2BeZPYntmejmhp7bRHdubc5qwUWDXdAWv9PIASUA55R1c7axG5Umlu%2BeycPyvycA2TMMrZwcEGOqUB3KoZXpgeAVXoMDBezUPn30mhxzeGzyMwiMWAVejT1m3tAHMWW%2FuBkMglxk4S%2Fs4oqlZUNoFdR%2FXla5PzCWg4%2FtmbYplpRtXqhsrGhaWBPaL1OGQNVsMjxCuw0B68u6rfmp5QMW%2B1OklIC4LINsWQegT7FZh0rF0%2FnBBLS9esX7VIEU95RCinq330SBW2K7K0MbiRO%2FIE%2FcMOUr9ygsYOxrluPIdW&X-Amz-Signature=c6ab71db1a2a8a40dca95a4466330134caa52d3ee16f827f6170f57e49faac75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZ5SCEB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDYBvwwGdXv51%2Fbn1x6nF0F7d2dGGiRVJbY4VvYlmXN0AIgCnb75oizb4kiSJ4Dpg6R7H05lvVxVjcXKpP4M1zh5MEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNMkKsCCnYrP46TcSrcAxKjH%2B4YvYPIxYNiyaDSdf1LOUapUprv2G8rdaF7HCMEAqN7AsUGb9MopsKo2Ky5Wg19giRAKLkBPXZptMAt0jdEZHx2HZkYjAW%2Fs7L5dLo20J61aQVhwfMgSMsBl42KdcpIBBRlKjejwRqyZ%2BYqqFJD%2Bn36R8KxBxL7%2FekgOxP96J1rgNJTcBwsI67W5mCdtPCXOf2L5VcDNc6VCKVq6Dwp5o13X%2BWXWpi9WfgxMKuqv%2F1J3hfwz8z3qs5%2FJ0i3wXYNOwtWb5V8Qm%2BoCuPfsUu8qNv7bMBL%2B%2Fyv%2Fq1yyuQXVc0kGncuzUKM3f2DsLdpDeRLQT390a1%2BdkQWKcotF9oLr%2Bkzk45XJvVfmOQLWiwDFdQhZc1qNr%2BbTrrFLcXhQT3tgFbJR7%2FoS2RpPRDvpTM56M3VmOgprcrHHJG6FJouPO4kVmR9PEzD7U8EfdFjE5P%2BDv09wywiC2W2iPsw9M18LYRXnTtzFPmCf9q81U%2BaCuihX%2F%2Bh8squKAD%2F1S8WYBC2108co9Wa8GZe8kiLXyRLzOXCNWyXdzhAQ4H2qJUrvKyDvhHaSJB%2BdAc%2BeZPYntmejmhp7bRHdubc5qwUWDXdAWv9PIASUA55R1c7axG5Umlu%2BeycPyvycA2TMMrZwcEGOqUB3KoZXpgeAVXoMDBezUPn30mhxzeGzyMwiMWAVejT1m3tAHMWW%2FuBkMglxk4S%2Fs4oqlZUNoFdR%2FXla5PzCWg4%2FtmbYplpRtXqhsrGhaWBPaL1OGQNVsMjxCuw0B68u6rfmp5QMW%2B1OklIC4LINsWQegT7FZh0rF0%2FnBBLS9esX7VIEU95RCinq330SBW2K7K0MbiRO%2FIE%2FcMOUr9ygsYOxrluPIdW&X-Amz-Signature=db2ba29f9ab3e6b682fc86b90bfcbf14a12060daa06269aeb0bb0549efff69ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZ5SCEB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDYBvwwGdXv51%2Fbn1x6nF0F7d2dGGiRVJbY4VvYlmXN0AIgCnb75oizb4kiSJ4Dpg6R7H05lvVxVjcXKpP4M1zh5MEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNMkKsCCnYrP46TcSrcAxKjH%2B4YvYPIxYNiyaDSdf1LOUapUprv2G8rdaF7HCMEAqN7AsUGb9MopsKo2Ky5Wg19giRAKLkBPXZptMAt0jdEZHx2HZkYjAW%2Fs7L5dLo20J61aQVhwfMgSMsBl42KdcpIBBRlKjejwRqyZ%2BYqqFJD%2Bn36R8KxBxL7%2FekgOxP96J1rgNJTcBwsI67W5mCdtPCXOf2L5VcDNc6VCKVq6Dwp5o13X%2BWXWpi9WfgxMKuqv%2F1J3hfwz8z3qs5%2FJ0i3wXYNOwtWb5V8Qm%2BoCuPfsUu8qNv7bMBL%2B%2Fyv%2Fq1yyuQXVc0kGncuzUKM3f2DsLdpDeRLQT390a1%2BdkQWKcotF9oLr%2Bkzk45XJvVfmOQLWiwDFdQhZc1qNr%2BbTrrFLcXhQT3tgFbJR7%2FoS2RpPRDvpTM56M3VmOgprcrHHJG6FJouPO4kVmR9PEzD7U8EfdFjE5P%2BDv09wywiC2W2iPsw9M18LYRXnTtzFPmCf9q81U%2BaCuihX%2F%2Bh8squKAD%2F1S8WYBC2108co9Wa8GZe8kiLXyRLzOXCNWyXdzhAQ4H2qJUrvKyDvhHaSJB%2BdAc%2BeZPYntmejmhp7bRHdubc5qwUWDXdAWv9PIASUA55R1c7axG5Umlu%2BeycPyvycA2TMMrZwcEGOqUB3KoZXpgeAVXoMDBezUPn30mhxzeGzyMwiMWAVejT1m3tAHMWW%2FuBkMglxk4S%2Fs4oqlZUNoFdR%2FXla5PzCWg4%2FtmbYplpRtXqhsrGhaWBPaL1OGQNVsMjxCuw0B68u6rfmp5QMW%2B1OklIC4LINsWQegT7FZh0rF0%2FnBBLS9esX7VIEU95RCinq330SBW2K7K0MbiRO%2FIE%2FcMOUr9ygsYOxrluPIdW&X-Amz-Signature=b1698042701e67ace042ac61fda4c0ea58e710766c1f2010745fcbe84d6e6fdc&X-Amz-SignedHeaders=host&x-id=GetObject)
