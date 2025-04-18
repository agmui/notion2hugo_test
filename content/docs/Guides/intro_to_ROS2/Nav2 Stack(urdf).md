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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2PGPI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BW2RgR%2FQ6bsmQ%2Fl76k%2FBSUbmlEykSOi9MPWGP4TXNbQIgEY9eExSgQ72pgnGB25wDn91%2FVhUGnFJqLIPdgGLKxWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUMxs13WEdoEPVCeircA%2BnIEuP7WBfN7Ss9jquJK%2BNg%2Fda%2BN1QzGwUIyG0wf1sQdGDo5k8wz7xWn4MlMZ1Iulrz7ulc4tWGoehBLgVugPOPwYBzu0%2F5I10iKL%2BHSmSdl5okNNWAkv6Sjvi4dB9p2CNzFGDAWtHjcoffWhJWK%2B3Nwlfec1CJSZq8I%2B5rSGmuGfPERTHcC6HEOc816ZcRzemqnrCX%2FG9nlUacFM9Og5Ejm46%2BDwGJJGzZGLZaFdoZdy1g%2FCAaJiVzkekpybkbWDZ1oJqxWBshQFai5Ndm%2BfRmH7dwIfciCb6u41vRX8cHmq45eZOrJE9ARq8keW5ZeNLO%2BeV3uHiGs1yEwmBqJm9GgkAxLykXsDRScSlg4eHKs81fWEtPJGBj4lOTvmNkRdzenNDtaQwHNGzG8L7vR2ww3uc0djCwKZJC%2BOj3HH9KmtxfVl4XNkDS14OjmkUwXfot7LnPftHvcpEMXBiCJMF152Z0LqwqNWUst21knnyleW%2FpNc%2B35ci3iNeaHiP%2Bd6g%2B%2BSHRr%2FF1q%2Fx2wSy2RUhTPBSomyl7kw9eXHsd%2B5Xj3mpsNzB0gwqTlhcuEKE9OFz8GMKLqVd01Wm767kv6dOun0n4MpjyE13CwSrnCWFm1BvaH%2FSVmzqMlFuhMOysiMAGOqUB3zbSaB8FmlEzJFhAdtf9TrfZxRG%2BBLuKT2hmsLLZ9lV1uy05SLsFm%2Fvj1wuH7SSZh%2B5U3v%2BcCTjwKdtzsuL7QC2DFwy9VgI6IGIDIvJEgijracKnK9tEDsCUSf8V%2BASSzGcqVQHbkg%2BrMrOyPlBV%2FoRnfwyB%2B55LyCm9W4BpF1a6n8wLxUnJQZjGa6cFYqSXzGX9LLwGX%2BPzwbs9XkS5T%2F%2FakeAK&X-Amz-Signature=a762ac67387864fc73e7ebda50d63eb1ad86af2ce0f4d7a40354670a95c77c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2PGPI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BW2RgR%2FQ6bsmQ%2Fl76k%2FBSUbmlEykSOi9MPWGP4TXNbQIgEY9eExSgQ72pgnGB25wDn91%2FVhUGnFJqLIPdgGLKxWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUMxs13WEdoEPVCeircA%2BnIEuP7WBfN7Ss9jquJK%2BNg%2Fda%2BN1QzGwUIyG0wf1sQdGDo5k8wz7xWn4MlMZ1Iulrz7ulc4tWGoehBLgVugPOPwYBzu0%2F5I10iKL%2BHSmSdl5okNNWAkv6Sjvi4dB9p2CNzFGDAWtHjcoffWhJWK%2B3Nwlfec1CJSZq8I%2B5rSGmuGfPERTHcC6HEOc816ZcRzemqnrCX%2FG9nlUacFM9Og5Ejm46%2BDwGJJGzZGLZaFdoZdy1g%2FCAaJiVzkekpybkbWDZ1oJqxWBshQFai5Ndm%2BfRmH7dwIfciCb6u41vRX8cHmq45eZOrJE9ARq8keW5ZeNLO%2BeV3uHiGs1yEwmBqJm9GgkAxLykXsDRScSlg4eHKs81fWEtPJGBj4lOTvmNkRdzenNDtaQwHNGzG8L7vR2ww3uc0djCwKZJC%2BOj3HH9KmtxfVl4XNkDS14OjmkUwXfot7LnPftHvcpEMXBiCJMF152Z0LqwqNWUst21knnyleW%2FpNc%2B35ci3iNeaHiP%2Bd6g%2B%2BSHRr%2FF1q%2Fx2wSy2RUhTPBSomyl7kw9eXHsd%2B5Xj3mpsNzB0gwqTlhcuEKE9OFz8GMKLqVd01Wm767kv6dOun0n4MpjyE13CwSrnCWFm1BvaH%2FSVmzqMlFuhMOysiMAGOqUB3zbSaB8FmlEzJFhAdtf9TrfZxRG%2BBLuKT2hmsLLZ9lV1uy05SLsFm%2Fvj1wuH7SSZh%2B5U3v%2BcCTjwKdtzsuL7QC2DFwy9VgI6IGIDIvJEgijracKnK9tEDsCUSf8V%2BASSzGcqVQHbkg%2BrMrOyPlBV%2FoRnfwyB%2B55LyCm9W4BpF1a6n8wLxUnJQZjGa6cFYqSXzGX9LLwGX%2BPzwbs9XkS5T%2F%2FakeAK&X-Amz-Signature=44b4144d81f6108f4e2d92ec631a5be59975eb5dc1f426c1a6c983dcb9eb8968&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2PGPI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BW2RgR%2FQ6bsmQ%2Fl76k%2FBSUbmlEykSOi9MPWGP4TXNbQIgEY9eExSgQ72pgnGB25wDn91%2FVhUGnFJqLIPdgGLKxWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUMxs13WEdoEPVCeircA%2BnIEuP7WBfN7Ss9jquJK%2BNg%2Fda%2BN1QzGwUIyG0wf1sQdGDo5k8wz7xWn4MlMZ1Iulrz7ulc4tWGoehBLgVugPOPwYBzu0%2F5I10iKL%2BHSmSdl5okNNWAkv6Sjvi4dB9p2CNzFGDAWtHjcoffWhJWK%2B3Nwlfec1CJSZq8I%2B5rSGmuGfPERTHcC6HEOc816ZcRzemqnrCX%2FG9nlUacFM9Og5Ejm46%2BDwGJJGzZGLZaFdoZdy1g%2FCAaJiVzkekpybkbWDZ1oJqxWBshQFai5Ndm%2BfRmH7dwIfciCb6u41vRX8cHmq45eZOrJE9ARq8keW5ZeNLO%2BeV3uHiGs1yEwmBqJm9GgkAxLykXsDRScSlg4eHKs81fWEtPJGBj4lOTvmNkRdzenNDtaQwHNGzG8L7vR2ww3uc0djCwKZJC%2BOj3HH9KmtxfVl4XNkDS14OjmkUwXfot7LnPftHvcpEMXBiCJMF152Z0LqwqNWUst21knnyleW%2FpNc%2B35ci3iNeaHiP%2Bd6g%2B%2BSHRr%2FF1q%2Fx2wSy2RUhTPBSomyl7kw9eXHsd%2B5Xj3mpsNzB0gwqTlhcuEKE9OFz8GMKLqVd01Wm767kv6dOun0n4MpjyE13CwSrnCWFm1BvaH%2FSVmzqMlFuhMOysiMAGOqUB3zbSaB8FmlEzJFhAdtf9TrfZxRG%2BBLuKT2hmsLLZ9lV1uy05SLsFm%2Fvj1wuH7SSZh%2B5U3v%2BcCTjwKdtzsuL7QC2DFwy9VgI6IGIDIvJEgijracKnK9tEDsCUSf8V%2BASSzGcqVQHbkg%2BrMrOyPlBV%2FoRnfwyB%2B55LyCm9W4BpF1a6n8wLxUnJQZjGa6cFYqSXzGX9LLwGX%2BPzwbs9XkS5T%2F%2FakeAK&X-Amz-Signature=c1fe049768ac302bd30f3b5f3292310ad5502eb578a601903e8d994761b36725&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2PGPI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BW2RgR%2FQ6bsmQ%2Fl76k%2FBSUbmlEykSOi9MPWGP4TXNbQIgEY9eExSgQ72pgnGB25wDn91%2FVhUGnFJqLIPdgGLKxWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUMxs13WEdoEPVCeircA%2BnIEuP7WBfN7Ss9jquJK%2BNg%2Fda%2BN1QzGwUIyG0wf1sQdGDo5k8wz7xWn4MlMZ1Iulrz7ulc4tWGoehBLgVugPOPwYBzu0%2F5I10iKL%2BHSmSdl5okNNWAkv6Sjvi4dB9p2CNzFGDAWtHjcoffWhJWK%2B3Nwlfec1CJSZq8I%2B5rSGmuGfPERTHcC6HEOc816ZcRzemqnrCX%2FG9nlUacFM9Og5Ejm46%2BDwGJJGzZGLZaFdoZdy1g%2FCAaJiVzkekpybkbWDZ1oJqxWBshQFai5Ndm%2BfRmH7dwIfciCb6u41vRX8cHmq45eZOrJE9ARq8keW5ZeNLO%2BeV3uHiGs1yEwmBqJm9GgkAxLykXsDRScSlg4eHKs81fWEtPJGBj4lOTvmNkRdzenNDtaQwHNGzG8L7vR2ww3uc0djCwKZJC%2BOj3HH9KmtxfVl4XNkDS14OjmkUwXfot7LnPftHvcpEMXBiCJMF152Z0LqwqNWUst21knnyleW%2FpNc%2B35ci3iNeaHiP%2Bd6g%2B%2BSHRr%2FF1q%2Fx2wSy2RUhTPBSomyl7kw9eXHsd%2B5Xj3mpsNzB0gwqTlhcuEKE9OFz8GMKLqVd01Wm767kv6dOun0n4MpjyE13CwSrnCWFm1BvaH%2FSVmzqMlFuhMOysiMAGOqUB3zbSaB8FmlEzJFhAdtf9TrfZxRG%2BBLuKT2hmsLLZ9lV1uy05SLsFm%2Fvj1wuH7SSZh%2B5U3v%2BcCTjwKdtzsuL7QC2DFwy9VgI6IGIDIvJEgijracKnK9tEDsCUSf8V%2BASSzGcqVQHbkg%2BrMrOyPlBV%2FoRnfwyB%2B55LyCm9W4BpF1a6n8wLxUnJQZjGa6cFYqSXzGX9LLwGX%2BPzwbs9XkS5T%2F%2FakeAK&X-Amz-Signature=824aa7d84e47a7ba836a58c6eaaba80cdb66f3c43bc0628edf6cc58f127e54a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2PGPI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BW2RgR%2FQ6bsmQ%2Fl76k%2FBSUbmlEykSOi9MPWGP4TXNbQIgEY9eExSgQ72pgnGB25wDn91%2FVhUGnFJqLIPdgGLKxWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUMxs13WEdoEPVCeircA%2BnIEuP7WBfN7Ss9jquJK%2BNg%2Fda%2BN1QzGwUIyG0wf1sQdGDo5k8wz7xWn4MlMZ1Iulrz7ulc4tWGoehBLgVugPOPwYBzu0%2F5I10iKL%2BHSmSdl5okNNWAkv6Sjvi4dB9p2CNzFGDAWtHjcoffWhJWK%2B3Nwlfec1CJSZq8I%2B5rSGmuGfPERTHcC6HEOc816ZcRzemqnrCX%2FG9nlUacFM9Og5Ejm46%2BDwGJJGzZGLZaFdoZdy1g%2FCAaJiVzkekpybkbWDZ1oJqxWBshQFai5Ndm%2BfRmH7dwIfciCb6u41vRX8cHmq45eZOrJE9ARq8keW5ZeNLO%2BeV3uHiGs1yEwmBqJm9GgkAxLykXsDRScSlg4eHKs81fWEtPJGBj4lOTvmNkRdzenNDtaQwHNGzG8L7vR2ww3uc0djCwKZJC%2BOj3HH9KmtxfVl4XNkDS14OjmkUwXfot7LnPftHvcpEMXBiCJMF152Z0LqwqNWUst21knnyleW%2FpNc%2B35ci3iNeaHiP%2Bd6g%2B%2BSHRr%2FF1q%2Fx2wSy2RUhTPBSomyl7kw9eXHsd%2B5Xj3mpsNzB0gwqTlhcuEKE9OFz8GMKLqVd01Wm767kv6dOun0n4MpjyE13CwSrnCWFm1BvaH%2FSVmzqMlFuhMOysiMAGOqUB3zbSaB8FmlEzJFhAdtf9TrfZxRG%2BBLuKT2hmsLLZ9lV1uy05SLsFm%2Fvj1wuH7SSZh%2B5U3v%2BcCTjwKdtzsuL7QC2DFwy9VgI6IGIDIvJEgijracKnK9tEDsCUSf8V%2BASSzGcqVQHbkg%2BrMrOyPlBV%2FoRnfwyB%2B55LyCm9W4BpF1a6n8wLxUnJQZjGa6cFYqSXzGX9LLwGX%2BPzwbs9XkS5T%2F%2FakeAK&X-Amz-Signature=65500072c0af5575ffddcc4c3fbc808b9a56b57ce3ccd4d2eb7cd58cf76b8dae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR2PGPI5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BW2RgR%2FQ6bsmQ%2Fl76k%2FBSUbmlEykSOi9MPWGP4TXNbQIgEY9eExSgQ72pgnGB25wDn91%2FVhUGnFJqLIPdgGLKxWgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJUMxs13WEdoEPVCeircA%2BnIEuP7WBfN7Ss9jquJK%2BNg%2Fda%2BN1QzGwUIyG0wf1sQdGDo5k8wz7xWn4MlMZ1Iulrz7ulc4tWGoehBLgVugPOPwYBzu0%2F5I10iKL%2BHSmSdl5okNNWAkv6Sjvi4dB9p2CNzFGDAWtHjcoffWhJWK%2B3Nwlfec1CJSZq8I%2B5rSGmuGfPERTHcC6HEOc816ZcRzemqnrCX%2FG9nlUacFM9Og5Ejm46%2BDwGJJGzZGLZaFdoZdy1g%2FCAaJiVzkekpybkbWDZ1oJqxWBshQFai5Ndm%2BfRmH7dwIfciCb6u41vRX8cHmq45eZOrJE9ARq8keW5ZeNLO%2BeV3uHiGs1yEwmBqJm9GgkAxLykXsDRScSlg4eHKs81fWEtPJGBj4lOTvmNkRdzenNDtaQwHNGzG8L7vR2ww3uc0djCwKZJC%2BOj3HH9KmtxfVl4XNkDS14OjmkUwXfot7LnPftHvcpEMXBiCJMF152Z0LqwqNWUst21knnyleW%2FpNc%2B35ci3iNeaHiP%2Bd6g%2B%2BSHRr%2FF1q%2Fx2wSy2RUhTPBSomyl7kw9eXHsd%2B5Xj3mpsNzB0gwqTlhcuEKE9OFz8GMKLqVd01Wm767kv6dOun0n4MpjyE13CwSrnCWFm1BvaH%2FSVmzqMlFuhMOysiMAGOqUB3zbSaB8FmlEzJFhAdtf9TrfZxRG%2BBLuKT2hmsLLZ9lV1uy05SLsFm%2Fvj1wuH7SSZh%2B5U3v%2BcCTjwKdtzsuL7QC2DFwy9VgI6IGIDIvJEgijracKnK9tEDsCUSf8V%2BASSzGcqVQHbkg%2BrMrOyPlBV%2FoRnfwyB%2B55LyCm9W4BpF1a6n8wLxUnJQZjGa6cFYqSXzGX9LLwGX%2BPzwbs9XkS5T%2F%2FakeAK&X-Amz-Signature=7791899c72f1e13c2059d764ab7f7dcb0bc0954b127d2abe5457776dc74c8350&X-Amz-SignedHeaders=host&x-id=GetObject)
