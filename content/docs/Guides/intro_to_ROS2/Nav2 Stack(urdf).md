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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHMJSG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7859dEnEFYL4h2HFqIpIBExhrWp2npN0lNrW9o7smQIgcIO2Q00mf1JuUVUa8EsSN3a8hJCi6F4zfcsl7G1gy38q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNXZMAmRc1DfCIU4DCrcA7r%2FaosFOaZdH%2BQOc43%2BSPzI9EWWvQQBRF0Pqt%2FI3sickgSzeGaSEp4m0IhS%2FhqNmstNAfUL5yOK0o%2BgPJQzYbmGuME4Wd7yo8p%2BijQVw1F9TkYGDL%2F6W1ps7synpHV%2FNzDQhOcX5gQTSsjijbenTYi4DC2RydSGlmbOIq%2BW81aeMrMJUZSgPjLUGyaTAll6GanZVVqRR3l6DPo06BLjZh4TYG9rSslidzaum1476Xor9evpBjlAJJkMLWW9f2ZCsl83rdQv%2BIbAj2wslbOaDLhHAcuQdF9CbXXMyAnCYa7Fos851NmFVOwKfGQfqTtuefcmIOkrCP5DPAQQqv5g7pbhusEDs1FtgjiTsCgRPOWozoSMt0xwygll0lazCm6OxRoptvUPT3ew3KeRO%2FUrimEBrvEKMsAhS8Q%2F%2FGeIhhXIz6khOSE39bWlgkpptL%2Bpw5hZDn2T0ZSo68wUsQvuqnljlheDAUK70xHv21eF5i2lJi3kJhYCnBwakFGvpiqpIztnxZ3vJX5AUTefYMIuLw4CLDWJ7O0fRTNhtjj%2Fy0ODtPXmPZIq%2B4PLnVVIJjr3cVvTo0vwU97iPEgCNwHHW1auAWW%2BGlo6e%2BhKByR3URDWFcVgAxJCAPU%2FlhUkMIbnt8AGOqUBRWwMScQmYpoGxx4JNOLB%2Fb8OZHyoj5911oHeZvsFLlINe5P3p7l6iLEzJp58a2%2FY4UKvVmPoSNGWuCMpG6h51DizH4clTYE%2B6DKgPV26OSE8VXXRMWR2U4Ex74ytWb55t85wTl5XvCR6v%2FKoHFM2LRH51WgF9chv%2BfWEQr4pu465ZV8hkzsEIl4MrWw%2FpB2QdmOC9EbilFTS%2F0GtlnuDGCn%2By5Tu&X-Amz-Signature=2ba6dc2b87f80986975f8f06d1ee27167cc9de5d5e5d947278ccd178b3dc6fc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHMJSG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7859dEnEFYL4h2HFqIpIBExhrWp2npN0lNrW9o7smQIgcIO2Q00mf1JuUVUa8EsSN3a8hJCi6F4zfcsl7G1gy38q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNXZMAmRc1DfCIU4DCrcA7r%2FaosFOaZdH%2BQOc43%2BSPzI9EWWvQQBRF0Pqt%2FI3sickgSzeGaSEp4m0IhS%2FhqNmstNAfUL5yOK0o%2BgPJQzYbmGuME4Wd7yo8p%2BijQVw1F9TkYGDL%2F6W1ps7synpHV%2FNzDQhOcX5gQTSsjijbenTYi4DC2RydSGlmbOIq%2BW81aeMrMJUZSgPjLUGyaTAll6GanZVVqRR3l6DPo06BLjZh4TYG9rSslidzaum1476Xor9evpBjlAJJkMLWW9f2ZCsl83rdQv%2BIbAj2wslbOaDLhHAcuQdF9CbXXMyAnCYa7Fos851NmFVOwKfGQfqTtuefcmIOkrCP5DPAQQqv5g7pbhusEDs1FtgjiTsCgRPOWozoSMt0xwygll0lazCm6OxRoptvUPT3ew3KeRO%2FUrimEBrvEKMsAhS8Q%2F%2FGeIhhXIz6khOSE39bWlgkpptL%2Bpw5hZDn2T0ZSo68wUsQvuqnljlheDAUK70xHv21eF5i2lJi3kJhYCnBwakFGvpiqpIztnxZ3vJX5AUTefYMIuLw4CLDWJ7O0fRTNhtjj%2Fy0ODtPXmPZIq%2B4PLnVVIJjr3cVvTo0vwU97iPEgCNwHHW1auAWW%2BGlo6e%2BhKByR3URDWFcVgAxJCAPU%2FlhUkMIbnt8AGOqUBRWwMScQmYpoGxx4JNOLB%2Fb8OZHyoj5911oHeZvsFLlINe5P3p7l6iLEzJp58a2%2FY4UKvVmPoSNGWuCMpG6h51DizH4clTYE%2B6DKgPV26OSE8VXXRMWR2U4Ex74ytWb55t85wTl5XvCR6v%2FKoHFM2LRH51WgF9chv%2BfWEQr4pu465ZV8hkzsEIl4MrWw%2FpB2QdmOC9EbilFTS%2F0GtlnuDGCn%2By5Tu&X-Amz-Signature=a0abe40404827f9308d03b0ea9ab3007b8a90d7e4108036d6417df898a1c3f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHMJSG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7859dEnEFYL4h2HFqIpIBExhrWp2npN0lNrW9o7smQIgcIO2Q00mf1JuUVUa8EsSN3a8hJCi6F4zfcsl7G1gy38q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNXZMAmRc1DfCIU4DCrcA7r%2FaosFOaZdH%2BQOc43%2BSPzI9EWWvQQBRF0Pqt%2FI3sickgSzeGaSEp4m0IhS%2FhqNmstNAfUL5yOK0o%2BgPJQzYbmGuME4Wd7yo8p%2BijQVw1F9TkYGDL%2F6W1ps7synpHV%2FNzDQhOcX5gQTSsjijbenTYi4DC2RydSGlmbOIq%2BW81aeMrMJUZSgPjLUGyaTAll6GanZVVqRR3l6DPo06BLjZh4TYG9rSslidzaum1476Xor9evpBjlAJJkMLWW9f2ZCsl83rdQv%2BIbAj2wslbOaDLhHAcuQdF9CbXXMyAnCYa7Fos851NmFVOwKfGQfqTtuefcmIOkrCP5DPAQQqv5g7pbhusEDs1FtgjiTsCgRPOWozoSMt0xwygll0lazCm6OxRoptvUPT3ew3KeRO%2FUrimEBrvEKMsAhS8Q%2F%2FGeIhhXIz6khOSE39bWlgkpptL%2Bpw5hZDn2T0ZSo68wUsQvuqnljlheDAUK70xHv21eF5i2lJi3kJhYCnBwakFGvpiqpIztnxZ3vJX5AUTefYMIuLw4CLDWJ7O0fRTNhtjj%2Fy0ODtPXmPZIq%2B4PLnVVIJjr3cVvTo0vwU97iPEgCNwHHW1auAWW%2BGlo6e%2BhKByR3URDWFcVgAxJCAPU%2FlhUkMIbnt8AGOqUBRWwMScQmYpoGxx4JNOLB%2Fb8OZHyoj5911oHeZvsFLlINe5P3p7l6iLEzJp58a2%2FY4UKvVmPoSNGWuCMpG6h51DizH4clTYE%2B6DKgPV26OSE8VXXRMWR2U4Ex74ytWb55t85wTl5XvCR6v%2FKoHFM2LRH51WgF9chv%2BfWEQr4pu465ZV8hkzsEIl4MrWw%2FpB2QdmOC9EbilFTS%2F0GtlnuDGCn%2By5Tu&X-Amz-Signature=01374abffaf814b7958f5e20c0d1dc284158747de167b125db87094aadccf5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHMJSG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7859dEnEFYL4h2HFqIpIBExhrWp2npN0lNrW9o7smQIgcIO2Q00mf1JuUVUa8EsSN3a8hJCi6F4zfcsl7G1gy38q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNXZMAmRc1DfCIU4DCrcA7r%2FaosFOaZdH%2BQOc43%2BSPzI9EWWvQQBRF0Pqt%2FI3sickgSzeGaSEp4m0IhS%2FhqNmstNAfUL5yOK0o%2BgPJQzYbmGuME4Wd7yo8p%2BijQVw1F9TkYGDL%2F6W1ps7synpHV%2FNzDQhOcX5gQTSsjijbenTYi4DC2RydSGlmbOIq%2BW81aeMrMJUZSgPjLUGyaTAll6GanZVVqRR3l6DPo06BLjZh4TYG9rSslidzaum1476Xor9evpBjlAJJkMLWW9f2ZCsl83rdQv%2BIbAj2wslbOaDLhHAcuQdF9CbXXMyAnCYa7Fos851NmFVOwKfGQfqTtuefcmIOkrCP5DPAQQqv5g7pbhusEDs1FtgjiTsCgRPOWozoSMt0xwygll0lazCm6OxRoptvUPT3ew3KeRO%2FUrimEBrvEKMsAhS8Q%2F%2FGeIhhXIz6khOSE39bWlgkpptL%2Bpw5hZDn2T0ZSo68wUsQvuqnljlheDAUK70xHv21eF5i2lJi3kJhYCnBwakFGvpiqpIztnxZ3vJX5AUTefYMIuLw4CLDWJ7O0fRTNhtjj%2Fy0ODtPXmPZIq%2B4PLnVVIJjr3cVvTo0vwU97iPEgCNwHHW1auAWW%2BGlo6e%2BhKByR3URDWFcVgAxJCAPU%2FlhUkMIbnt8AGOqUBRWwMScQmYpoGxx4JNOLB%2Fb8OZHyoj5911oHeZvsFLlINe5P3p7l6iLEzJp58a2%2FY4UKvVmPoSNGWuCMpG6h51DizH4clTYE%2B6DKgPV26OSE8VXXRMWR2U4Ex74ytWb55t85wTl5XvCR6v%2FKoHFM2LRH51WgF9chv%2BfWEQr4pu465ZV8hkzsEIl4MrWw%2FpB2QdmOC9EbilFTS%2F0GtlnuDGCn%2By5Tu&X-Amz-Signature=71911d1c9fd2690e47456c851cbaa1c7568e70acad44fdd9e8a2fc20b1aa3f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHMJSG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7859dEnEFYL4h2HFqIpIBExhrWp2npN0lNrW9o7smQIgcIO2Q00mf1JuUVUa8EsSN3a8hJCi6F4zfcsl7G1gy38q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNXZMAmRc1DfCIU4DCrcA7r%2FaosFOaZdH%2BQOc43%2BSPzI9EWWvQQBRF0Pqt%2FI3sickgSzeGaSEp4m0IhS%2FhqNmstNAfUL5yOK0o%2BgPJQzYbmGuME4Wd7yo8p%2BijQVw1F9TkYGDL%2F6W1ps7synpHV%2FNzDQhOcX5gQTSsjijbenTYi4DC2RydSGlmbOIq%2BW81aeMrMJUZSgPjLUGyaTAll6GanZVVqRR3l6DPo06BLjZh4TYG9rSslidzaum1476Xor9evpBjlAJJkMLWW9f2ZCsl83rdQv%2BIbAj2wslbOaDLhHAcuQdF9CbXXMyAnCYa7Fos851NmFVOwKfGQfqTtuefcmIOkrCP5DPAQQqv5g7pbhusEDs1FtgjiTsCgRPOWozoSMt0xwygll0lazCm6OxRoptvUPT3ew3KeRO%2FUrimEBrvEKMsAhS8Q%2F%2FGeIhhXIz6khOSE39bWlgkpptL%2Bpw5hZDn2T0ZSo68wUsQvuqnljlheDAUK70xHv21eF5i2lJi3kJhYCnBwakFGvpiqpIztnxZ3vJX5AUTefYMIuLw4CLDWJ7O0fRTNhtjj%2Fy0ODtPXmPZIq%2B4PLnVVIJjr3cVvTo0vwU97iPEgCNwHHW1auAWW%2BGlo6e%2BhKByR3URDWFcVgAxJCAPU%2FlhUkMIbnt8AGOqUBRWwMScQmYpoGxx4JNOLB%2Fb8OZHyoj5911oHeZvsFLlINe5P3p7l6iLEzJp58a2%2FY4UKvVmPoSNGWuCMpG6h51DizH4clTYE%2B6DKgPV26OSE8VXXRMWR2U4Ex74ytWb55t85wTl5XvCR6v%2FKoHFM2LRH51WgF9chv%2BfWEQr4pu465ZV8hkzsEIl4MrWw%2FpB2QdmOC9EbilFTS%2F0GtlnuDGCn%2By5Tu&X-Amz-Signature=bbfc0fe6baf6a5b8713b211664dfd41e488f511f90b3594c32495142de92602c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHMJSG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7859dEnEFYL4h2HFqIpIBExhrWp2npN0lNrW9o7smQIgcIO2Q00mf1JuUVUa8EsSN3a8hJCi6F4zfcsl7G1gy38q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNXZMAmRc1DfCIU4DCrcA7r%2FaosFOaZdH%2BQOc43%2BSPzI9EWWvQQBRF0Pqt%2FI3sickgSzeGaSEp4m0IhS%2FhqNmstNAfUL5yOK0o%2BgPJQzYbmGuME4Wd7yo8p%2BijQVw1F9TkYGDL%2F6W1ps7synpHV%2FNzDQhOcX5gQTSsjijbenTYi4DC2RydSGlmbOIq%2BW81aeMrMJUZSgPjLUGyaTAll6GanZVVqRR3l6DPo06BLjZh4TYG9rSslidzaum1476Xor9evpBjlAJJkMLWW9f2ZCsl83rdQv%2BIbAj2wslbOaDLhHAcuQdF9CbXXMyAnCYa7Fos851NmFVOwKfGQfqTtuefcmIOkrCP5DPAQQqv5g7pbhusEDs1FtgjiTsCgRPOWozoSMt0xwygll0lazCm6OxRoptvUPT3ew3KeRO%2FUrimEBrvEKMsAhS8Q%2F%2FGeIhhXIz6khOSE39bWlgkpptL%2Bpw5hZDn2T0ZSo68wUsQvuqnljlheDAUK70xHv21eF5i2lJi3kJhYCnBwakFGvpiqpIztnxZ3vJX5AUTefYMIuLw4CLDWJ7O0fRTNhtjj%2Fy0ODtPXmPZIq%2B4PLnVVIJjr3cVvTo0vwU97iPEgCNwHHW1auAWW%2BGlo6e%2BhKByR3URDWFcVgAxJCAPU%2FlhUkMIbnt8AGOqUBRWwMScQmYpoGxx4JNOLB%2Fb8OZHyoj5911oHeZvsFLlINe5P3p7l6iLEzJp58a2%2FY4UKvVmPoSNGWuCMpG6h51DizH4clTYE%2B6DKgPV26OSE8VXXRMWR2U4Ex74ytWb55t85wTl5XvCR6v%2FKoHFM2LRH51WgF9chv%2BfWEQr4pu465ZV8hkzsEIl4MrWw%2FpB2QdmOC9EbilFTS%2F0GtlnuDGCn%2By5Tu&X-Amz-Signature=6459b5d381ee2433ddcc2df7d2273b5a571c90002374f74efd3cbdbbcea780b6&X-Amz-SignedHeaders=host&x-id=GetObject)
