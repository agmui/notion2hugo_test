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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYW4QME%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE631WImnR%2FNIzLu6OSLRnKOqvM89yzo4DNxBE6Q6AwIhAKN3TDj%2BwVDmNJ4D9%2Bck12Qj%2F4VnxIh%2FUeEL%2FaYldY%2BBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2D7iMYSG%2B8CW74cq3AOaakFj3jwdyDLY6CkxkBvX5tSrQuUNj2tq%2FuPymhNKCgG1N%2BGAr%2FUe7bfAAuxT8tY54QHHkHZ%2Bt%2B1ebGUadnJiy%2FrjrF%2FpCaV39e9ge6H4yvmbcDYvDF6pmvjYYBPPlvgyOD5RM%2FC5rpMIwCCTLev%2FpHZb%2F79dCnw1t7Je4Oj%2F2A4k7zMw2wYR6pO6wy713TCAmKgfA1tIPFvY8vR2lSUJZDMrtL09oqdb8m9fvFSo2tujY3XegTYB%2Blg%2FaIrmEZfe51xoa5Wj%2BGfOYuQXCS4Z77aKqJTKmV7lHTsi7Rtu5NqdgMUtg2HuZicSnCZtSbqSVeq7cIDoWj%2BtqB1OIh6tDtW62Zo3XczYZafpCmDxrYjaF44HgY3UW8NnhFVMhLz1I2g%2Ff4tnbDx90uu5%2FhfVlCGKy4pyLFET098LcvOej%2B3FCOHZJ6la414oXmtjHOpRgcw%2BLLXsc1ujYr9qMOZG%2BKgMfXH8jz7jt5bhW%2BapRjVc%2BG1QvPV0q7bNcCS9vgtrnpF5fNZ4CmXwiu6fG%2BA9fXTn6gbM%2BskpHD7ldA5Qzv4aGHRPAy%2FHef7W9nAcmnxyzxkgzB88R1nTLbLUjlimxVjCnDJ1BW3ldZAIcUpx47fWHeUiYj66jVjzLjDat%2B7DBjqkAZFstEvUoQr0hf7bB1jsV4xiORUAFMC9MvkVtOR9G%2FWq%2FTyiZ%2FITYfeVHb%2Ff8%2Bi1eVBxjz7Z%2FZDI40joISHIlmpYv%2BhVSb1GyX2hzsSe3%2Fwte4Uyr5bEiUKXUpY7SFnvBDUMXStvX8BahwRc3QJ4%2FK1SJXA9S7dsy0J9niZ4CDwNIXz1JkFRlwanZwE%2BAAzH2pZpv4qGfl5C68lqMX2SSgmA%2FDya&X-Amz-Signature=324141956d5e9290ae0fa5570b5c963b48bcae18c6ced4dec737c709458e6d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYW4QME%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE631WImnR%2FNIzLu6OSLRnKOqvM89yzo4DNxBE6Q6AwIhAKN3TDj%2BwVDmNJ4D9%2Bck12Qj%2F4VnxIh%2FUeEL%2FaYldY%2BBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2D7iMYSG%2B8CW74cq3AOaakFj3jwdyDLY6CkxkBvX5tSrQuUNj2tq%2FuPymhNKCgG1N%2BGAr%2FUe7bfAAuxT8tY54QHHkHZ%2Bt%2B1ebGUadnJiy%2FrjrF%2FpCaV39e9ge6H4yvmbcDYvDF6pmvjYYBPPlvgyOD5RM%2FC5rpMIwCCTLev%2FpHZb%2F79dCnw1t7Je4Oj%2F2A4k7zMw2wYR6pO6wy713TCAmKgfA1tIPFvY8vR2lSUJZDMrtL09oqdb8m9fvFSo2tujY3XegTYB%2Blg%2FaIrmEZfe51xoa5Wj%2BGfOYuQXCS4Z77aKqJTKmV7lHTsi7Rtu5NqdgMUtg2HuZicSnCZtSbqSVeq7cIDoWj%2BtqB1OIh6tDtW62Zo3XczYZafpCmDxrYjaF44HgY3UW8NnhFVMhLz1I2g%2Ff4tnbDx90uu5%2FhfVlCGKy4pyLFET098LcvOej%2B3FCOHZJ6la414oXmtjHOpRgcw%2BLLXsc1ujYr9qMOZG%2BKgMfXH8jz7jt5bhW%2BapRjVc%2BG1QvPV0q7bNcCS9vgtrnpF5fNZ4CmXwiu6fG%2BA9fXTn6gbM%2BskpHD7ldA5Qzv4aGHRPAy%2FHef7W9nAcmnxyzxkgzB88R1nTLbLUjlimxVjCnDJ1BW3ldZAIcUpx47fWHeUiYj66jVjzLjDat%2B7DBjqkAZFstEvUoQr0hf7bB1jsV4xiORUAFMC9MvkVtOR9G%2FWq%2FTyiZ%2FITYfeVHb%2Ff8%2Bi1eVBxjz7Z%2FZDI40joISHIlmpYv%2BhVSb1GyX2hzsSe3%2Fwte4Uyr5bEiUKXUpY7SFnvBDUMXStvX8BahwRc3QJ4%2FK1SJXA9S7dsy0J9niZ4CDwNIXz1JkFRlwanZwE%2BAAzH2pZpv4qGfl5C68lqMX2SSgmA%2FDya&X-Amz-Signature=99461853a34a27d0c3c3c1c7b50f89dd1eefbe02c80eb509cae7ae805a95ae44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYW4QME%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE631WImnR%2FNIzLu6OSLRnKOqvM89yzo4DNxBE6Q6AwIhAKN3TDj%2BwVDmNJ4D9%2Bck12Qj%2F4VnxIh%2FUeEL%2FaYldY%2BBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2D7iMYSG%2B8CW74cq3AOaakFj3jwdyDLY6CkxkBvX5tSrQuUNj2tq%2FuPymhNKCgG1N%2BGAr%2FUe7bfAAuxT8tY54QHHkHZ%2Bt%2B1ebGUadnJiy%2FrjrF%2FpCaV39e9ge6H4yvmbcDYvDF6pmvjYYBPPlvgyOD5RM%2FC5rpMIwCCTLev%2FpHZb%2F79dCnw1t7Je4Oj%2F2A4k7zMw2wYR6pO6wy713TCAmKgfA1tIPFvY8vR2lSUJZDMrtL09oqdb8m9fvFSo2tujY3XegTYB%2Blg%2FaIrmEZfe51xoa5Wj%2BGfOYuQXCS4Z77aKqJTKmV7lHTsi7Rtu5NqdgMUtg2HuZicSnCZtSbqSVeq7cIDoWj%2BtqB1OIh6tDtW62Zo3XczYZafpCmDxrYjaF44HgY3UW8NnhFVMhLz1I2g%2Ff4tnbDx90uu5%2FhfVlCGKy4pyLFET098LcvOej%2B3FCOHZJ6la414oXmtjHOpRgcw%2BLLXsc1ujYr9qMOZG%2BKgMfXH8jz7jt5bhW%2BapRjVc%2BG1QvPV0q7bNcCS9vgtrnpF5fNZ4CmXwiu6fG%2BA9fXTn6gbM%2BskpHD7ldA5Qzv4aGHRPAy%2FHef7W9nAcmnxyzxkgzB88R1nTLbLUjlimxVjCnDJ1BW3ldZAIcUpx47fWHeUiYj66jVjzLjDat%2B7DBjqkAZFstEvUoQr0hf7bB1jsV4xiORUAFMC9MvkVtOR9G%2FWq%2FTyiZ%2FITYfeVHb%2Ff8%2Bi1eVBxjz7Z%2FZDI40joISHIlmpYv%2BhVSb1GyX2hzsSe3%2Fwte4Uyr5bEiUKXUpY7SFnvBDUMXStvX8BahwRc3QJ4%2FK1SJXA9S7dsy0J9niZ4CDwNIXz1JkFRlwanZwE%2BAAzH2pZpv4qGfl5C68lqMX2SSgmA%2FDya&X-Amz-Signature=484edb91eafb01b60d28d34692b1f9c6817327b5b0d661d6eb9db49a2821dd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYW4QME%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE631WImnR%2FNIzLu6OSLRnKOqvM89yzo4DNxBE6Q6AwIhAKN3TDj%2BwVDmNJ4D9%2Bck12Qj%2F4VnxIh%2FUeEL%2FaYldY%2BBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2D7iMYSG%2B8CW74cq3AOaakFj3jwdyDLY6CkxkBvX5tSrQuUNj2tq%2FuPymhNKCgG1N%2BGAr%2FUe7bfAAuxT8tY54QHHkHZ%2Bt%2B1ebGUadnJiy%2FrjrF%2FpCaV39e9ge6H4yvmbcDYvDF6pmvjYYBPPlvgyOD5RM%2FC5rpMIwCCTLev%2FpHZb%2F79dCnw1t7Je4Oj%2F2A4k7zMw2wYR6pO6wy713TCAmKgfA1tIPFvY8vR2lSUJZDMrtL09oqdb8m9fvFSo2tujY3XegTYB%2Blg%2FaIrmEZfe51xoa5Wj%2BGfOYuQXCS4Z77aKqJTKmV7lHTsi7Rtu5NqdgMUtg2HuZicSnCZtSbqSVeq7cIDoWj%2BtqB1OIh6tDtW62Zo3XczYZafpCmDxrYjaF44HgY3UW8NnhFVMhLz1I2g%2Ff4tnbDx90uu5%2FhfVlCGKy4pyLFET098LcvOej%2B3FCOHZJ6la414oXmtjHOpRgcw%2BLLXsc1ujYr9qMOZG%2BKgMfXH8jz7jt5bhW%2BapRjVc%2BG1QvPV0q7bNcCS9vgtrnpF5fNZ4CmXwiu6fG%2BA9fXTn6gbM%2BskpHD7ldA5Qzv4aGHRPAy%2FHef7W9nAcmnxyzxkgzB88R1nTLbLUjlimxVjCnDJ1BW3ldZAIcUpx47fWHeUiYj66jVjzLjDat%2B7DBjqkAZFstEvUoQr0hf7bB1jsV4xiORUAFMC9MvkVtOR9G%2FWq%2FTyiZ%2FITYfeVHb%2Ff8%2Bi1eVBxjz7Z%2FZDI40joISHIlmpYv%2BhVSb1GyX2hzsSe3%2Fwte4Uyr5bEiUKXUpY7SFnvBDUMXStvX8BahwRc3QJ4%2FK1SJXA9S7dsy0J9niZ4CDwNIXz1JkFRlwanZwE%2BAAzH2pZpv4qGfl5C68lqMX2SSgmA%2FDya&X-Amz-Signature=62b9b6628e6a2dc32f8395fcd43cd631125180b56cc92225ac986d61f7962a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYW4QME%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE631WImnR%2FNIzLu6OSLRnKOqvM89yzo4DNxBE6Q6AwIhAKN3TDj%2BwVDmNJ4D9%2Bck12Qj%2F4VnxIh%2FUeEL%2FaYldY%2BBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2D7iMYSG%2B8CW74cq3AOaakFj3jwdyDLY6CkxkBvX5tSrQuUNj2tq%2FuPymhNKCgG1N%2BGAr%2FUe7bfAAuxT8tY54QHHkHZ%2Bt%2B1ebGUadnJiy%2FrjrF%2FpCaV39e9ge6H4yvmbcDYvDF6pmvjYYBPPlvgyOD5RM%2FC5rpMIwCCTLev%2FpHZb%2F79dCnw1t7Je4Oj%2F2A4k7zMw2wYR6pO6wy713TCAmKgfA1tIPFvY8vR2lSUJZDMrtL09oqdb8m9fvFSo2tujY3XegTYB%2Blg%2FaIrmEZfe51xoa5Wj%2BGfOYuQXCS4Z77aKqJTKmV7lHTsi7Rtu5NqdgMUtg2HuZicSnCZtSbqSVeq7cIDoWj%2BtqB1OIh6tDtW62Zo3XczYZafpCmDxrYjaF44HgY3UW8NnhFVMhLz1I2g%2Ff4tnbDx90uu5%2FhfVlCGKy4pyLFET098LcvOej%2B3FCOHZJ6la414oXmtjHOpRgcw%2BLLXsc1ujYr9qMOZG%2BKgMfXH8jz7jt5bhW%2BapRjVc%2BG1QvPV0q7bNcCS9vgtrnpF5fNZ4CmXwiu6fG%2BA9fXTn6gbM%2BskpHD7ldA5Qzv4aGHRPAy%2FHef7W9nAcmnxyzxkgzB88R1nTLbLUjlimxVjCnDJ1BW3ldZAIcUpx47fWHeUiYj66jVjzLjDat%2B7DBjqkAZFstEvUoQr0hf7bB1jsV4xiORUAFMC9MvkVtOR9G%2FWq%2FTyiZ%2FITYfeVHb%2Ff8%2Bi1eVBxjz7Z%2FZDI40joISHIlmpYv%2BhVSb1GyX2hzsSe3%2Fwte4Uyr5bEiUKXUpY7SFnvBDUMXStvX8BahwRc3QJ4%2FK1SJXA9S7dsy0J9niZ4CDwNIXz1JkFRlwanZwE%2BAAzH2pZpv4qGfl5C68lqMX2SSgmA%2FDya&X-Amz-Signature=e19046838243c138c3e2c79d7db0982183707ae7e5cd459ce1248dbf04c3e0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYW4QME%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGE631WImnR%2FNIzLu6OSLRnKOqvM89yzo4DNxBE6Q6AwIhAKN3TDj%2BwVDmNJ4D9%2Bck12Qj%2F4VnxIh%2FUeEL%2FaYldY%2BBKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR2D7iMYSG%2B8CW74cq3AOaakFj3jwdyDLY6CkxkBvX5tSrQuUNj2tq%2FuPymhNKCgG1N%2BGAr%2FUe7bfAAuxT8tY54QHHkHZ%2Bt%2B1ebGUadnJiy%2FrjrF%2FpCaV39e9ge6H4yvmbcDYvDF6pmvjYYBPPlvgyOD5RM%2FC5rpMIwCCTLev%2FpHZb%2F79dCnw1t7Je4Oj%2F2A4k7zMw2wYR6pO6wy713TCAmKgfA1tIPFvY8vR2lSUJZDMrtL09oqdb8m9fvFSo2tujY3XegTYB%2Blg%2FaIrmEZfe51xoa5Wj%2BGfOYuQXCS4Z77aKqJTKmV7lHTsi7Rtu5NqdgMUtg2HuZicSnCZtSbqSVeq7cIDoWj%2BtqB1OIh6tDtW62Zo3XczYZafpCmDxrYjaF44HgY3UW8NnhFVMhLz1I2g%2Ff4tnbDx90uu5%2FhfVlCGKy4pyLFET098LcvOej%2B3FCOHZJ6la414oXmtjHOpRgcw%2BLLXsc1ujYr9qMOZG%2BKgMfXH8jz7jt5bhW%2BapRjVc%2BG1QvPV0q7bNcCS9vgtrnpF5fNZ4CmXwiu6fG%2BA9fXTn6gbM%2BskpHD7ldA5Qzv4aGHRPAy%2FHef7W9nAcmnxyzxkgzB88R1nTLbLUjlimxVjCnDJ1BW3ldZAIcUpx47fWHeUiYj66jVjzLjDat%2B7DBjqkAZFstEvUoQr0hf7bB1jsV4xiORUAFMC9MvkVtOR9G%2FWq%2FTyiZ%2FITYfeVHb%2Ff8%2Bi1eVBxjz7Z%2FZDI40joISHIlmpYv%2BhVSb1GyX2hzsSe3%2Fwte4Uyr5bEiUKXUpY7SFnvBDUMXStvX8BahwRc3QJ4%2FK1SJXA9S7dsy0J9niZ4CDwNIXz1JkFRlwanZwE%2BAAzH2pZpv4qGfl5C68lqMX2SSgmA%2FDya&X-Amz-Signature=a3419a5d9c9f17e259a8a60ad2923ab3f5fc8fe4d78c418b84844f96f0dc4af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
