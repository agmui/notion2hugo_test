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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665552RCHJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDBBcVUjeTKthcmPg%2BAr5GCQZNWl6uceuqsQCRipRKDpAiA%2FHkGB5WRlFEXJ9a2ZTn1ibQu%2F6nypvH%2Fh3fAWOtnNeSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPwbkdsUynvgSW7uKtwDx7I39n0Jb%2B6N5TTTlpdMIt40Rx3YSlkjiBmPVL81br%2BlZ0TJr777%2FFCi5ZLVhooTHT3o2EU%2BHsyIlrVsUoTlhPyZEFzDYV7ZoJLjH5rKFX9MpMchGen3th5fRfrmjKlw7CahxRCyTjtkBO9EGb%2BVIH6jXMzoEv6hUX2G9wF4f7XTusbG6K4okyvGj%2FrSPoqxjZkP3kQA9G%2F%2FgONxrU%2FG7CpGrJt05IcuQuqNsbgWBCkZKITGgtC6%2FX3G5za%2Fp31rC6mlT0mTOIQ%2F60Q1X36bgrhHwANqYdzL7a7Itjb%2BDsHTHuN7S4dw95HRdJVXy%2BEttWg8rY6Obi4ySoVZLNdrrW1rYnRvJ%2FWD6ahAFYpzKFKt3nuaA9ggtQOYh46qg7Nt9yLbESXegggew8frumnNvU%2FOTw9AdKupwsZMee%2B%2Fu9RvfPi2zcwe5A8Q7j1WK9iC6CRMVecrkP%2FfTlElkxtLGkE1vJOfEGHT%2F0jlCCFPK6gf9taciOHJRSAgGuHjSkf%2BKlBU%2BFWmaKbRpHbpx7HOqrkvd89xuORuO0nSKd%2FTFQNmJLYqs8OsIkUZwmv%2Fyu038950s%2FMZmXn9gVhj0u1wwRgHxDVPMUtrLtq52oi6E5nqj8Zs5kaGhD7oVqMwyPCjvwY6pgFK0GP5wJ4V4pw5lqmQochwWK%2Fqd1W4CKF9LnX8WzMpfWIrRYCiUXr15SyMB2va1TtJBKk9%2BZJz61vTGv%2F9J6PkNu2tRTfZP2rZcgsf%2FsTqz6cEyeLxxu7buw2YXUmYZM1Q5lWvor7pRDXJomR68ncSLYL1l5quv5fHYxwzvqW9MDs1otQDJZxkwyMUoJAVlTxcCMVBvd90hPRZkWkN5TCd5yTyvXp7&X-Amz-Signature=aad0ef8c355404d3c94b486688e08b17a3392908cdd8e905412610e86c8ea7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665552RCHJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDBBcVUjeTKthcmPg%2BAr5GCQZNWl6uceuqsQCRipRKDpAiA%2FHkGB5WRlFEXJ9a2ZTn1ibQu%2F6nypvH%2Fh3fAWOtnNeSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPwbkdsUynvgSW7uKtwDx7I39n0Jb%2B6N5TTTlpdMIt40Rx3YSlkjiBmPVL81br%2BlZ0TJr777%2FFCi5ZLVhooTHT3o2EU%2BHsyIlrVsUoTlhPyZEFzDYV7ZoJLjH5rKFX9MpMchGen3th5fRfrmjKlw7CahxRCyTjtkBO9EGb%2BVIH6jXMzoEv6hUX2G9wF4f7XTusbG6K4okyvGj%2FrSPoqxjZkP3kQA9G%2F%2FgONxrU%2FG7CpGrJt05IcuQuqNsbgWBCkZKITGgtC6%2FX3G5za%2Fp31rC6mlT0mTOIQ%2F60Q1X36bgrhHwANqYdzL7a7Itjb%2BDsHTHuN7S4dw95HRdJVXy%2BEttWg8rY6Obi4ySoVZLNdrrW1rYnRvJ%2FWD6ahAFYpzKFKt3nuaA9ggtQOYh46qg7Nt9yLbESXegggew8frumnNvU%2FOTw9AdKupwsZMee%2B%2Fu9RvfPi2zcwe5A8Q7j1WK9iC6CRMVecrkP%2FfTlElkxtLGkE1vJOfEGHT%2F0jlCCFPK6gf9taciOHJRSAgGuHjSkf%2BKlBU%2BFWmaKbRpHbpx7HOqrkvd89xuORuO0nSKd%2FTFQNmJLYqs8OsIkUZwmv%2Fyu038950s%2FMZmXn9gVhj0u1wwRgHxDVPMUtrLtq52oi6E5nqj8Zs5kaGhD7oVqMwyPCjvwY6pgFK0GP5wJ4V4pw5lqmQochwWK%2Fqd1W4CKF9LnX8WzMpfWIrRYCiUXr15SyMB2va1TtJBKk9%2BZJz61vTGv%2F9J6PkNu2tRTfZP2rZcgsf%2FsTqz6cEyeLxxu7buw2YXUmYZM1Q5lWvor7pRDXJomR68ncSLYL1l5quv5fHYxwzvqW9MDs1otQDJZxkwyMUoJAVlTxcCMVBvd90hPRZkWkN5TCd5yTyvXp7&X-Amz-Signature=aac53281d97187fef70f6c723b0543d648028461997ecb8327e16dfea11dbdd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665552RCHJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDBBcVUjeTKthcmPg%2BAr5GCQZNWl6uceuqsQCRipRKDpAiA%2FHkGB5WRlFEXJ9a2ZTn1ibQu%2F6nypvH%2Fh3fAWOtnNeSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPwbkdsUynvgSW7uKtwDx7I39n0Jb%2B6N5TTTlpdMIt40Rx3YSlkjiBmPVL81br%2BlZ0TJr777%2FFCi5ZLVhooTHT3o2EU%2BHsyIlrVsUoTlhPyZEFzDYV7ZoJLjH5rKFX9MpMchGen3th5fRfrmjKlw7CahxRCyTjtkBO9EGb%2BVIH6jXMzoEv6hUX2G9wF4f7XTusbG6K4okyvGj%2FrSPoqxjZkP3kQA9G%2F%2FgONxrU%2FG7CpGrJt05IcuQuqNsbgWBCkZKITGgtC6%2FX3G5za%2Fp31rC6mlT0mTOIQ%2F60Q1X36bgrhHwANqYdzL7a7Itjb%2BDsHTHuN7S4dw95HRdJVXy%2BEttWg8rY6Obi4ySoVZLNdrrW1rYnRvJ%2FWD6ahAFYpzKFKt3nuaA9ggtQOYh46qg7Nt9yLbESXegggew8frumnNvU%2FOTw9AdKupwsZMee%2B%2Fu9RvfPi2zcwe5A8Q7j1WK9iC6CRMVecrkP%2FfTlElkxtLGkE1vJOfEGHT%2F0jlCCFPK6gf9taciOHJRSAgGuHjSkf%2BKlBU%2BFWmaKbRpHbpx7HOqrkvd89xuORuO0nSKd%2FTFQNmJLYqs8OsIkUZwmv%2Fyu038950s%2FMZmXn9gVhj0u1wwRgHxDVPMUtrLtq52oi6E5nqj8Zs5kaGhD7oVqMwyPCjvwY6pgFK0GP5wJ4V4pw5lqmQochwWK%2Fqd1W4CKF9LnX8WzMpfWIrRYCiUXr15SyMB2va1TtJBKk9%2BZJz61vTGv%2F9J6PkNu2tRTfZP2rZcgsf%2FsTqz6cEyeLxxu7buw2YXUmYZM1Q5lWvor7pRDXJomR68ncSLYL1l5quv5fHYxwzvqW9MDs1otQDJZxkwyMUoJAVlTxcCMVBvd90hPRZkWkN5TCd5yTyvXp7&X-Amz-Signature=a963c96e8195bd285537563f1729b3fc99a02d1713877fd98787432c36ff22b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665552RCHJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDBBcVUjeTKthcmPg%2BAr5GCQZNWl6uceuqsQCRipRKDpAiA%2FHkGB5WRlFEXJ9a2ZTn1ibQu%2F6nypvH%2Fh3fAWOtnNeSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPwbkdsUynvgSW7uKtwDx7I39n0Jb%2B6N5TTTlpdMIt40Rx3YSlkjiBmPVL81br%2BlZ0TJr777%2FFCi5ZLVhooTHT3o2EU%2BHsyIlrVsUoTlhPyZEFzDYV7ZoJLjH5rKFX9MpMchGen3th5fRfrmjKlw7CahxRCyTjtkBO9EGb%2BVIH6jXMzoEv6hUX2G9wF4f7XTusbG6K4okyvGj%2FrSPoqxjZkP3kQA9G%2F%2FgONxrU%2FG7CpGrJt05IcuQuqNsbgWBCkZKITGgtC6%2FX3G5za%2Fp31rC6mlT0mTOIQ%2F60Q1X36bgrhHwANqYdzL7a7Itjb%2BDsHTHuN7S4dw95HRdJVXy%2BEttWg8rY6Obi4ySoVZLNdrrW1rYnRvJ%2FWD6ahAFYpzKFKt3nuaA9ggtQOYh46qg7Nt9yLbESXegggew8frumnNvU%2FOTw9AdKupwsZMee%2B%2Fu9RvfPi2zcwe5A8Q7j1WK9iC6CRMVecrkP%2FfTlElkxtLGkE1vJOfEGHT%2F0jlCCFPK6gf9taciOHJRSAgGuHjSkf%2BKlBU%2BFWmaKbRpHbpx7HOqrkvd89xuORuO0nSKd%2FTFQNmJLYqs8OsIkUZwmv%2Fyu038950s%2FMZmXn9gVhj0u1wwRgHxDVPMUtrLtq52oi6E5nqj8Zs5kaGhD7oVqMwyPCjvwY6pgFK0GP5wJ4V4pw5lqmQochwWK%2Fqd1W4CKF9LnX8WzMpfWIrRYCiUXr15SyMB2va1TtJBKk9%2BZJz61vTGv%2F9J6PkNu2tRTfZP2rZcgsf%2FsTqz6cEyeLxxu7buw2YXUmYZM1Q5lWvor7pRDXJomR68ncSLYL1l5quv5fHYxwzvqW9MDs1otQDJZxkwyMUoJAVlTxcCMVBvd90hPRZkWkN5TCd5yTyvXp7&X-Amz-Signature=e4b6903cc67398f0c15f5b1b8a30141c09c9ecc0b7d2008329460c0f11256169&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665552RCHJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDBBcVUjeTKthcmPg%2BAr5GCQZNWl6uceuqsQCRipRKDpAiA%2FHkGB5WRlFEXJ9a2ZTn1ibQu%2F6nypvH%2Fh3fAWOtnNeSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPwbkdsUynvgSW7uKtwDx7I39n0Jb%2B6N5TTTlpdMIt40Rx3YSlkjiBmPVL81br%2BlZ0TJr777%2FFCi5ZLVhooTHT3o2EU%2BHsyIlrVsUoTlhPyZEFzDYV7ZoJLjH5rKFX9MpMchGen3th5fRfrmjKlw7CahxRCyTjtkBO9EGb%2BVIH6jXMzoEv6hUX2G9wF4f7XTusbG6K4okyvGj%2FrSPoqxjZkP3kQA9G%2F%2FgONxrU%2FG7CpGrJt05IcuQuqNsbgWBCkZKITGgtC6%2FX3G5za%2Fp31rC6mlT0mTOIQ%2F60Q1X36bgrhHwANqYdzL7a7Itjb%2BDsHTHuN7S4dw95HRdJVXy%2BEttWg8rY6Obi4ySoVZLNdrrW1rYnRvJ%2FWD6ahAFYpzKFKt3nuaA9ggtQOYh46qg7Nt9yLbESXegggew8frumnNvU%2FOTw9AdKupwsZMee%2B%2Fu9RvfPi2zcwe5A8Q7j1WK9iC6CRMVecrkP%2FfTlElkxtLGkE1vJOfEGHT%2F0jlCCFPK6gf9taciOHJRSAgGuHjSkf%2BKlBU%2BFWmaKbRpHbpx7HOqrkvd89xuORuO0nSKd%2FTFQNmJLYqs8OsIkUZwmv%2Fyu038950s%2FMZmXn9gVhj0u1wwRgHxDVPMUtrLtq52oi6E5nqj8Zs5kaGhD7oVqMwyPCjvwY6pgFK0GP5wJ4V4pw5lqmQochwWK%2Fqd1W4CKF9LnX8WzMpfWIrRYCiUXr15SyMB2va1TtJBKk9%2BZJz61vTGv%2F9J6PkNu2tRTfZP2rZcgsf%2FsTqz6cEyeLxxu7buw2YXUmYZM1Q5lWvor7pRDXJomR68ncSLYL1l5quv5fHYxwzvqW9MDs1otQDJZxkwyMUoJAVlTxcCMVBvd90hPRZkWkN5TCd5yTyvXp7&X-Amz-Signature=b5bfe447d346c5a025f040b79046b5060e00c9adecffd055251ecc4f9d8a1430&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665552RCHJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDBBcVUjeTKthcmPg%2BAr5GCQZNWl6uceuqsQCRipRKDpAiA%2FHkGB5WRlFEXJ9a2ZTn1ibQu%2F6nypvH%2Fh3fAWOtnNeSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPPwbkdsUynvgSW7uKtwDx7I39n0Jb%2B6N5TTTlpdMIt40Rx3YSlkjiBmPVL81br%2BlZ0TJr777%2FFCi5ZLVhooTHT3o2EU%2BHsyIlrVsUoTlhPyZEFzDYV7ZoJLjH5rKFX9MpMchGen3th5fRfrmjKlw7CahxRCyTjtkBO9EGb%2BVIH6jXMzoEv6hUX2G9wF4f7XTusbG6K4okyvGj%2FrSPoqxjZkP3kQA9G%2F%2FgONxrU%2FG7CpGrJt05IcuQuqNsbgWBCkZKITGgtC6%2FX3G5za%2Fp31rC6mlT0mTOIQ%2F60Q1X36bgrhHwANqYdzL7a7Itjb%2BDsHTHuN7S4dw95HRdJVXy%2BEttWg8rY6Obi4ySoVZLNdrrW1rYnRvJ%2FWD6ahAFYpzKFKt3nuaA9ggtQOYh46qg7Nt9yLbESXegggew8frumnNvU%2FOTw9AdKupwsZMee%2B%2Fu9RvfPi2zcwe5A8Q7j1WK9iC6CRMVecrkP%2FfTlElkxtLGkE1vJOfEGHT%2F0jlCCFPK6gf9taciOHJRSAgGuHjSkf%2BKlBU%2BFWmaKbRpHbpx7HOqrkvd89xuORuO0nSKd%2FTFQNmJLYqs8OsIkUZwmv%2Fyu038950s%2FMZmXn9gVhj0u1wwRgHxDVPMUtrLtq52oi6E5nqj8Zs5kaGhD7oVqMwyPCjvwY6pgFK0GP5wJ4V4pw5lqmQochwWK%2Fqd1W4CKF9LnX8WzMpfWIrRYCiUXr15SyMB2va1TtJBKk9%2BZJz61vTGv%2F9J6PkNu2tRTfZP2rZcgsf%2FsTqz6cEyeLxxu7buw2YXUmYZM1Q5lWvor7pRDXJomR68ncSLYL1l5quv5fHYxwzvqW9MDs1otQDJZxkwyMUoJAVlTxcCMVBvd90hPRZkWkN5TCd5yTyvXp7&X-Amz-Signature=a82a0336089a1484888d94c1cd1bdfb1189ce504c6df58f5a14d2196269aac1c&X-Amz-SignedHeaders=host&x-id=GetObject)
