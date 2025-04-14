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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVKD4DB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9qW10Xih1P3O9AJVbA2pAZG0bzvTJ7uJ%2FwDdZoxjfQIgA%2F1D4whqQ%2BBnyKIfIDZ4RjQmITuVgpCbMsjqGi4gh3QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zuA6xMP3vO5BBdyrcA6%2BYbjvFyGCadLR%2BBwJZieatBGje0LQnOC9zBexCWIevBidSVf64x87hoiWko7rWD3577100joomHC5lRciQIBhPDWBwASfddLFCKZQXh8w1%2FlmVkuyUkcJ%2B89f%2FVQ1gpmz2mpBuYnGEK3hRGj%2FS1sZ8tHokgZ8PwgpRv9FI0S1FS4KPx9QLBjCmUbxLEpCkoEXC9dOHJ%2F%2Bf378ulPHz0g8XL8s4r90GeeBDmWGWrmiD8FRrqNqHtb53KxSSg0lbTl4Cu0zsmA6TsiwoE9%2BImh4ziCpre7BodHqReZEjeu%2FpmeYx9ZVAMOL6vtutoBIdYdp6z3VljKIXpwR0mVPNRbqd2fghUM1FxYADT8kLrA31X8OmM6lsqw6woweWfOa%2FCdHRwX5RutTjtOvtPGMcJyJwLtkIfwEr0PIv1ESJwDGvFKyNfBgwd%2BI0IjbDt5nzRmaJ%2BUqaVcX90QueB%2FJPGcQRdZwYmsjCbNJcH964lUZz1uQTNDOw8FyPnBCAt6jhbPkxGr%2B7uNVJNM6Zz87eIVfkBmaqjJKePLTXolVDd0FZ3oQ6hhkXBSKm6SHMzO3QWnc5koWb%2F4LKvPYjOQBSCcnkcZw9x3WP1BCBO9oL8PjDgOhx2oaroryp7iexMNm58b8GOqUBEbSwNieau%2FNUgqQsMhDEt9KgBKeWVGqkVCdWIve4yFSh%2FAPSnwd5gZKT2OLR%2B1FUXyfhRxMRYsG%2B2NsswlnEyU5I9P2moYxJ68q7LrCdaGMy41i5z2gde%2BxqwO%2FZhgXR365QtWJT8XKip1cCJ%2FYWlf6Ew%2FDNk3OacxKn4%2B54x%2Bxaj0DyS%2F46Fxn1%2FX7SdeR8Ips2SRh0Rw6%2BR2ffE4KCu1Ce5%2FaR&X-Amz-Signature=80936f58baa846b9bb2d44989fa1cc66c14e75b0e0aa2b1ca1615798ccec3640&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVKD4DB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9qW10Xih1P3O9AJVbA2pAZG0bzvTJ7uJ%2FwDdZoxjfQIgA%2F1D4whqQ%2BBnyKIfIDZ4RjQmITuVgpCbMsjqGi4gh3QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zuA6xMP3vO5BBdyrcA6%2BYbjvFyGCadLR%2BBwJZieatBGje0LQnOC9zBexCWIevBidSVf64x87hoiWko7rWD3577100joomHC5lRciQIBhPDWBwASfddLFCKZQXh8w1%2FlmVkuyUkcJ%2B89f%2FVQ1gpmz2mpBuYnGEK3hRGj%2FS1sZ8tHokgZ8PwgpRv9FI0S1FS4KPx9QLBjCmUbxLEpCkoEXC9dOHJ%2F%2Bf378ulPHz0g8XL8s4r90GeeBDmWGWrmiD8FRrqNqHtb53KxSSg0lbTl4Cu0zsmA6TsiwoE9%2BImh4ziCpre7BodHqReZEjeu%2FpmeYx9ZVAMOL6vtutoBIdYdp6z3VljKIXpwR0mVPNRbqd2fghUM1FxYADT8kLrA31X8OmM6lsqw6woweWfOa%2FCdHRwX5RutTjtOvtPGMcJyJwLtkIfwEr0PIv1ESJwDGvFKyNfBgwd%2BI0IjbDt5nzRmaJ%2BUqaVcX90QueB%2FJPGcQRdZwYmsjCbNJcH964lUZz1uQTNDOw8FyPnBCAt6jhbPkxGr%2B7uNVJNM6Zz87eIVfkBmaqjJKePLTXolVDd0FZ3oQ6hhkXBSKm6SHMzO3QWnc5koWb%2F4LKvPYjOQBSCcnkcZw9x3WP1BCBO9oL8PjDgOhx2oaroryp7iexMNm58b8GOqUBEbSwNieau%2FNUgqQsMhDEt9KgBKeWVGqkVCdWIve4yFSh%2FAPSnwd5gZKT2OLR%2B1FUXyfhRxMRYsG%2B2NsswlnEyU5I9P2moYxJ68q7LrCdaGMy41i5z2gde%2BxqwO%2FZhgXR365QtWJT8XKip1cCJ%2FYWlf6Ew%2FDNk3OacxKn4%2B54x%2Bxaj0DyS%2F46Fxn1%2FX7SdeR8Ips2SRh0Rw6%2BR2ffE4KCu1Ce5%2FaR&X-Amz-Signature=5575e5b10d8010d3ab6ed311d02304c587251e2f97389b2e7e96a96d8fa30a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVKD4DB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9qW10Xih1P3O9AJVbA2pAZG0bzvTJ7uJ%2FwDdZoxjfQIgA%2F1D4whqQ%2BBnyKIfIDZ4RjQmITuVgpCbMsjqGi4gh3QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zuA6xMP3vO5BBdyrcA6%2BYbjvFyGCadLR%2BBwJZieatBGje0LQnOC9zBexCWIevBidSVf64x87hoiWko7rWD3577100joomHC5lRciQIBhPDWBwASfddLFCKZQXh8w1%2FlmVkuyUkcJ%2B89f%2FVQ1gpmz2mpBuYnGEK3hRGj%2FS1sZ8tHokgZ8PwgpRv9FI0S1FS4KPx9QLBjCmUbxLEpCkoEXC9dOHJ%2F%2Bf378ulPHz0g8XL8s4r90GeeBDmWGWrmiD8FRrqNqHtb53KxSSg0lbTl4Cu0zsmA6TsiwoE9%2BImh4ziCpre7BodHqReZEjeu%2FpmeYx9ZVAMOL6vtutoBIdYdp6z3VljKIXpwR0mVPNRbqd2fghUM1FxYADT8kLrA31X8OmM6lsqw6woweWfOa%2FCdHRwX5RutTjtOvtPGMcJyJwLtkIfwEr0PIv1ESJwDGvFKyNfBgwd%2BI0IjbDt5nzRmaJ%2BUqaVcX90QueB%2FJPGcQRdZwYmsjCbNJcH964lUZz1uQTNDOw8FyPnBCAt6jhbPkxGr%2B7uNVJNM6Zz87eIVfkBmaqjJKePLTXolVDd0FZ3oQ6hhkXBSKm6SHMzO3QWnc5koWb%2F4LKvPYjOQBSCcnkcZw9x3WP1BCBO9oL8PjDgOhx2oaroryp7iexMNm58b8GOqUBEbSwNieau%2FNUgqQsMhDEt9KgBKeWVGqkVCdWIve4yFSh%2FAPSnwd5gZKT2OLR%2B1FUXyfhRxMRYsG%2B2NsswlnEyU5I9P2moYxJ68q7LrCdaGMy41i5z2gde%2BxqwO%2FZhgXR365QtWJT8XKip1cCJ%2FYWlf6Ew%2FDNk3OacxKn4%2B54x%2Bxaj0DyS%2F46Fxn1%2FX7SdeR8Ips2SRh0Rw6%2BR2ffE4KCu1Ce5%2FaR&X-Amz-Signature=427aba6d7c07665517c01a47e4284bbd456842c99f7ceaf6a6c679ff458c628c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVKD4DB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9qW10Xih1P3O9AJVbA2pAZG0bzvTJ7uJ%2FwDdZoxjfQIgA%2F1D4whqQ%2BBnyKIfIDZ4RjQmITuVgpCbMsjqGi4gh3QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zuA6xMP3vO5BBdyrcA6%2BYbjvFyGCadLR%2BBwJZieatBGje0LQnOC9zBexCWIevBidSVf64x87hoiWko7rWD3577100joomHC5lRciQIBhPDWBwASfddLFCKZQXh8w1%2FlmVkuyUkcJ%2B89f%2FVQ1gpmz2mpBuYnGEK3hRGj%2FS1sZ8tHokgZ8PwgpRv9FI0S1FS4KPx9QLBjCmUbxLEpCkoEXC9dOHJ%2F%2Bf378ulPHz0g8XL8s4r90GeeBDmWGWrmiD8FRrqNqHtb53KxSSg0lbTl4Cu0zsmA6TsiwoE9%2BImh4ziCpre7BodHqReZEjeu%2FpmeYx9ZVAMOL6vtutoBIdYdp6z3VljKIXpwR0mVPNRbqd2fghUM1FxYADT8kLrA31X8OmM6lsqw6woweWfOa%2FCdHRwX5RutTjtOvtPGMcJyJwLtkIfwEr0PIv1ESJwDGvFKyNfBgwd%2BI0IjbDt5nzRmaJ%2BUqaVcX90QueB%2FJPGcQRdZwYmsjCbNJcH964lUZz1uQTNDOw8FyPnBCAt6jhbPkxGr%2B7uNVJNM6Zz87eIVfkBmaqjJKePLTXolVDd0FZ3oQ6hhkXBSKm6SHMzO3QWnc5koWb%2F4LKvPYjOQBSCcnkcZw9x3WP1BCBO9oL8PjDgOhx2oaroryp7iexMNm58b8GOqUBEbSwNieau%2FNUgqQsMhDEt9KgBKeWVGqkVCdWIve4yFSh%2FAPSnwd5gZKT2OLR%2B1FUXyfhRxMRYsG%2B2NsswlnEyU5I9P2moYxJ68q7LrCdaGMy41i5z2gde%2BxqwO%2FZhgXR365QtWJT8XKip1cCJ%2FYWlf6Ew%2FDNk3OacxKn4%2B54x%2Bxaj0DyS%2F46Fxn1%2FX7SdeR8Ips2SRh0Rw6%2BR2ffE4KCu1Ce5%2FaR&X-Amz-Signature=c2e81dd25d6f0c65bb33b671081685ec45f6c45e05ec35f29edb4f5b75137f35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVKD4DB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9qW10Xih1P3O9AJVbA2pAZG0bzvTJ7uJ%2FwDdZoxjfQIgA%2F1D4whqQ%2BBnyKIfIDZ4RjQmITuVgpCbMsjqGi4gh3QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zuA6xMP3vO5BBdyrcA6%2BYbjvFyGCadLR%2BBwJZieatBGje0LQnOC9zBexCWIevBidSVf64x87hoiWko7rWD3577100joomHC5lRciQIBhPDWBwASfddLFCKZQXh8w1%2FlmVkuyUkcJ%2B89f%2FVQ1gpmz2mpBuYnGEK3hRGj%2FS1sZ8tHokgZ8PwgpRv9FI0S1FS4KPx9QLBjCmUbxLEpCkoEXC9dOHJ%2F%2Bf378ulPHz0g8XL8s4r90GeeBDmWGWrmiD8FRrqNqHtb53KxSSg0lbTl4Cu0zsmA6TsiwoE9%2BImh4ziCpre7BodHqReZEjeu%2FpmeYx9ZVAMOL6vtutoBIdYdp6z3VljKIXpwR0mVPNRbqd2fghUM1FxYADT8kLrA31X8OmM6lsqw6woweWfOa%2FCdHRwX5RutTjtOvtPGMcJyJwLtkIfwEr0PIv1ESJwDGvFKyNfBgwd%2BI0IjbDt5nzRmaJ%2BUqaVcX90QueB%2FJPGcQRdZwYmsjCbNJcH964lUZz1uQTNDOw8FyPnBCAt6jhbPkxGr%2B7uNVJNM6Zz87eIVfkBmaqjJKePLTXolVDd0FZ3oQ6hhkXBSKm6SHMzO3QWnc5koWb%2F4LKvPYjOQBSCcnkcZw9x3WP1BCBO9oL8PjDgOhx2oaroryp7iexMNm58b8GOqUBEbSwNieau%2FNUgqQsMhDEt9KgBKeWVGqkVCdWIve4yFSh%2FAPSnwd5gZKT2OLR%2B1FUXyfhRxMRYsG%2B2NsswlnEyU5I9P2moYxJ68q7LrCdaGMy41i5z2gde%2BxqwO%2FZhgXR365QtWJT8XKip1cCJ%2FYWlf6Ew%2FDNk3OacxKn4%2B54x%2Bxaj0DyS%2F46Fxn1%2FX7SdeR8Ips2SRh0Rw6%2BR2ffE4KCu1Ce5%2FaR&X-Amz-Signature=7483e38f5415583e91ef752b3396071182faf8ce0e9683ed662eba5be0664e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVKD4DB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9qW10Xih1P3O9AJVbA2pAZG0bzvTJ7uJ%2FwDdZoxjfQIgA%2F1D4whqQ%2BBnyKIfIDZ4RjQmITuVgpCbMsjqGi4gh3QqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6zuA6xMP3vO5BBdyrcA6%2BYbjvFyGCadLR%2BBwJZieatBGje0LQnOC9zBexCWIevBidSVf64x87hoiWko7rWD3577100joomHC5lRciQIBhPDWBwASfddLFCKZQXh8w1%2FlmVkuyUkcJ%2B89f%2FVQ1gpmz2mpBuYnGEK3hRGj%2FS1sZ8tHokgZ8PwgpRv9FI0S1FS4KPx9QLBjCmUbxLEpCkoEXC9dOHJ%2F%2Bf378ulPHz0g8XL8s4r90GeeBDmWGWrmiD8FRrqNqHtb53KxSSg0lbTl4Cu0zsmA6TsiwoE9%2BImh4ziCpre7BodHqReZEjeu%2FpmeYx9ZVAMOL6vtutoBIdYdp6z3VljKIXpwR0mVPNRbqd2fghUM1FxYADT8kLrA31X8OmM6lsqw6woweWfOa%2FCdHRwX5RutTjtOvtPGMcJyJwLtkIfwEr0PIv1ESJwDGvFKyNfBgwd%2BI0IjbDt5nzRmaJ%2BUqaVcX90QueB%2FJPGcQRdZwYmsjCbNJcH964lUZz1uQTNDOw8FyPnBCAt6jhbPkxGr%2B7uNVJNM6Zz87eIVfkBmaqjJKePLTXolVDd0FZ3oQ6hhkXBSKm6SHMzO3QWnc5koWb%2F4LKvPYjOQBSCcnkcZw9x3WP1BCBO9oL8PjDgOhx2oaroryp7iexMNm58b8GOqUBEbSwNieau%2FNUgqQsMhDEt9KgBKeWVGqkVCdWIve4yFSh%2FAPSnwd5gZKT2OLR%2B1FUXyfhRxMRYsG%2B2NsswlnEyU5I9P2moYxJ68q7LrCdaGMy41i5z2gde%2BxqwO%2FZhgXR365QtWJT8XKip1cCJ%2FYWlf6Ew%2FDNk3OacxKn4%2B54x%2Bxaj0DyS%2F46Fxn1%2FX7SdeR8Ips2SRh0Rw6%2BR2ffE4KCu1Ce5%2FaR&X-Amz-Signature=5da5b712d9b16ffe4e1c2163827cff2a737adb79cdd4615d0e0b371145d60451&X-Amz-SignedHeaders=host&x-id=GetObject)
