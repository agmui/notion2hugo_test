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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NLET7W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrZQNAVdryqJ%2B%2FlhTG9CjVJYAUy9AhvlICOy9eXnbYjAiAR%2FWV4moW3YVq69KQd6UI7%2FCgO%2BIpJpCdun2gX7HO5Rir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbu7P8sJ%2B4V8q5GTEKtwDBBZEcPMe3bB6AK61%2FXxqy3CfjyObREm16tS8Xzr4Cq5t9brECFS7LW40lathEhAW0mLklI3XVRbDO5BRqbhh4yhRPXKj21B2DQNZomMq9MBL1aer42mVGkD2a%2F2NuiO%2Bm9qMBet9Yy9Gm5mZ1bMKZb6Tt7MiiL%2FXDrBCwTWhldWEQ43IqQtD7GdU1a88%2BiVlRisWdT9VR5BAfy1SEfMe4gcOKcz%2FW6X0HydGMf8DpkOoHNomoO6JOX2ndhluD994q1Ja0ciLhA0qpL48yIw%2FVX3DF%2F%2BQmTc9BdqiL%2BymL4k8bqCrBHU6VOMFOOiwWJR7PekWCj4EEMPWUIfWkHkYdtXDCUpBbTr0wgurme7IcGjZCtrYyi0ilIGcCcou6rnjoGpDJbX63hLt6MOe%2Ftfp43f6J8S3B9kVK8ZzNk%2B5PQhuwqh%2BBkgjU0cvszGygPspDLX0pydMlVgOhDkRhZ3dOuacdXTvilGfSc1SkJPQ%2FZvPmg%2BxPemNdupsF90Mq3SVbUWqAzzIP5weAAbo6AUcjY4NRAUSFOl4WtGuWu1O0AN32CvLrBdpmvd3w3WT6vCqmB9Obu%2F9r1kEdB71NDFvFIfTjC6MwmpogZiNr9QduN%2B%2F1OejHmxdObKhoOcwgYeqvgY6pgG0ID00A9WvZ4aALS7Ir6mjyU6WoNOrXfaq9mQz9Vt%2BggmxKsholiC9pbDGnuKphi9Kjq7SkyLhCCfi24APApkr8XzWTBenQHIlF32Ny7BPOxKVI1gnTAXI%2FRghm%2FVgTi3faOYR5EwLx6%2FhZKEuRocz3zS6N9l8bUxLg2rW08edSucVsxvkyXzaXT22RhxbA%2B8LLNrnfEYjfcMbcYXpghrVLsTpI9kq&X-Amz-Signature=6170f5a20dff71bdca2b2cbd01bf8c4b9d16088339f21f8d3b3cb66c9afa1618&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NLET7W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrZQNAVdryqJ%2B%2FlhTG9CjVJYAUy9AhvlICOy9eXnbYjAiAR%2FWV4moW3YVq69KQd6UI7%2FCgO%2BIpJpCdun2gX7HO5Rir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbu7P8sJ%2B4V8q5GTEKtwDBBZEcPMe3bB6AK61%2FXxqy3CfjyObREm16tS8Xzr4Cq5t9brECFS7LW40lathEhAW0mLklI3XVRbDO5BRqbhh4yhRPXKj21B2DQNZomMq9MBL1aer42mVGkD2a%2F2NuiO%2Bm9qMBet9Yy9Gm5mZ1bMKZb6Tt7MiiL%2FXDrBCwTWhldWEQ43IqQtD7GdU1a88%2BiVlRisWdT9VR5BAfy1SEfMe4gcOKcz%2FW6X0HydGMf8DpkOoHNomoO6JOX2ndhluD994q1Ja0ciLhA0qpL48yIw%2FVX3DF%2F%2BQmTc9BdqiL%2BymL4k8bqCrBHU6VOMFOOiwWJR7PekWCj4EEMPWUIfWkHkYdtXDCUpBbTr0wgurme7IcGjZCtrYyi0ilIGcCcou6rnjoGpDJbX63hLt6MOe%2Ftfp43f6J8S3B9kVK8ZzNk%2B5PQhuwqh%2BBkgjU0cvszGygPspDLX0pydMlVgOhDkRhZ3dOuacdXTvilGfSc1SkJPQ%2FZvPmg%2BxPemNdupsF90Mq3SVbUWqAzzIP5weAAbo6AUcjY4NRAUSFOl4WtGuWu1O0AN32CvLrBdpmvd3w3WT6vCqmB9Obu%2F9r1kEdB71NDFvFIfTjC6MwmpogZiNr9QduN%2B%2F1OejHmxdObKhoOcwgYeqvgY6pgG0ID00A9WvZ4aALS7Ir6mjyU6WoNOrXfaq9mQz9Vt%2BggmxKsholiC9pbDGnuKphi9Kjq7SkyLhCCfi24APApkr8XzWTBenQHIlF32Ny7BPOxKVI1gnTAXI%2FRghm%2FVgTi3faOYR5EwLx6%2FhZKEuRocz3zS6N9l8bUxLg2rW08edSucVsxvkyXzaXT22RhxbA%2B8LLNrnfEYjfcMbcYXpghrVLsTpI9kq&X-Amz-Signature=3805696c56c1983d604fa61efdbf702f8183e19ac848428a5059575b0485950b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NLET7W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrZQNAVdryqJ%2B%2FlhTG9CjVJYAUy9AhvlICOy9eXnbYjAiAR%2FWV4moW3YVq69KQd6UI7%2FCgO%2BIpJpCdun2gX7HO5Rir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbu7P8sJ%2B4V8q5GTEKtwDBBZEcPMe3bB6AK61%2FXxqy3CfjyObREm16tS8Xzr4Cq5t9brECFS7LW40lathEhAW0mLklI3XVRbDO5BRqbhh4yhRPXKj21B2DQNZomMq9MBL1aer42mVGkD2a%2F2NuiO%2Bm9qMBet9Yy9Gm5mZ1bMKZb6Tt7MiiL%2FXDrBCwTWhldWEQ43IqQtD7GdU1a88%2BiVlRisWdT9VR5BAfy1SEfMe4gcOKcz%2FW6X0HydGMf8DpkOoHNomoO6JOX2ndhluD994q1Ja0ciLhA0qpL48yIw%2FVX3DF%2F%2BQmTc9BdqiL%2BymL4k8bqCrBHU6VOMFOOiwWJR7PekWCj4EEMPWUIfWkHkYdtXDCUpBbTr0wgurme7IcGjZCtrYyi0ilIGcCcou6rnjoGpDJbX63hLt6MOe%2Ftfp43f6J8S3B9kVK8ZzNk%2B5PQhuwqh%2BBkgjU0cvszGygPspDLX0pydMlVgOhDkRhZ3dOuacdXTvilGfSc1SkJPQ%2FZvPmg%2BxPemNdupsF90Mq3SVbUWqAzzIP5weAAbo6AUcjY4NRAUSFOl4WtGuWu1O0AN32CvLrBdpmvd3w3WT6vCqmB9Obu%2F9r1kEdB71NDFvFIfTjC6MwmpogZiNr9QduN%2B%2F1OejHmxdObKhoOcwgYeqvgY6pgG0ID00A9WvZ4aALS7Ir6mjyU6WoNOrXfaq9mQz9Vt%2BggmxKsholiC9pbDGnuKphi9Kjq7SkyLhCCfi24APApkr8XzWTBenQHIlF32Ny7BPOxKVI1gnTAXI%2FRghm%2FVgTi3faOYR5EwLx6%2FhZKEuRocz3zS6N9l8bUxLg2rW08edSucVsxvkyXzaXT22RhxbA%2B8LLNrnfEYjfcMbcYXpghrVLsTpI9kq&X-Amz-Signature=7dcb8a60007228c23baf2fba0825ecdcf895352f472bea5568699611a78eaee4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NLET7W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrZQNAVdryqJ%2B%2FlhTG9CjVJYAUy9AhvlICOy9eXnbYjAiAR%2FWV4moW3YVq69KQd6UI7%2FCgO%2BIpJpCdun2gX7HO5Rir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbu7P8sJ%2B4V8q5GTEKtwDBBZEcPMe3bB6AK61%2FXxqy3CfjyObREm16tS8Xzr4Cq5t9brECFS7LW40lathEhAW0mLklI3XVRbDO5BRqbhh4yhRPXKj21B2DQNZomMq9MBL1aer42mVGkD2a%2F2NuiO%2Bm9qMBet9Yy9Gm5mZ1bMKZb6Tt7MiiL%2FXDrBCwTWhldWEQ43IqQtD7GdU1a88%2BiVlRisWdT9VR5BAfy1SEfMe4gcOKcz%2FW6X0HydGMf8DpkOoHNomoO6JOX2ndhluD994q1Ja0ciLhA0qpL48yIw%2FVX3DF%2F%2BQmTc9BdqiL%2BymL4k8bqCrBHU6VOMFOOiwWJR7PekWCj4EEMPWUIfWkHkYdtXDCUpBbTr0wgurme7IcGjZCtrYyi0ilIGcCcou6rnjoGpDJbX63hLt6MOe%2Ftfp43f6J8S3B9kVK8ZzNk%2B5PQhuwqh%2BBkgjU0cvszGygPspDLX0pydMlVgOhDkRhZ3dOuacdXTvilGfSc1SkJPQ%2FZvPmg%2BxPemNdupsF90Mq3SVbUWqAzzIP5weAAbo6AUcjY4NRAUSFOl4WtGuWu1O0AN32CvLrBdpmvd3w3WT6vCqmB9Obu%2F9r1kEdB71NDFvFIfTjC6MwmpogZiNr9QduN%2B%2F1OejHmxdObKhoOcwgYeqvgY6pgG0ID00A9WvZ4aALS7Ir6mjyU6WoNOrXfaq9mQz9Vt%2BggmxKsholiC9pbDGnuKphi9Kjq7SkyLhCCfi24APApkr8XzWTBenQHIlF32Ny7BPOxKVI1gnTAXI%2FRghm%2FVgTi3faOYR5EwLx6%2FhZKEuRocz3zS6N9l8bUxLg2rW08edSucVsxvkyXzaXT22RhxbA%2B8LLNrnfEYjfcMbcYXpghrVLsTpI9kq&X-Amz-Signature=adf88dbe44f0e51871dce63c329dcbe439649472dbd911c5dae574415c13149b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NLET7W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrZQNAVdryqJ%2B%2FlhTG9CjVJYAUy9AhvlICOy9eXnbYjAiAR%2FWV4moW3YVq69KQd6UI7%2FCgO%2BIpJpCdun2gX7HO5Rir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbu7P8sJ%2B4V8q5GTEKtwDBBZEcPMe3bB6AK61%2FXxqy3CfjyObREm16tS8Xzr4Cq5t9brECFS7LW40lathEhAW0mLklI3XVRbDO5BRqbhh4yhRPXKj21B2DQNZomMq9MBL1aer42mVGkD2a%2F2NuiO%2Bm9qMBet9Yy9Gm5mZ1bMKZb6Tt7MiiL%2FXDrBCwTWhldWEQ43IqQtD7GdU1a88%2BiVlRisWdT9VR5BAfy1SEfMe4gcOKcz%2FW6X0HydGMf8DpkOoHNomoO6JOX2ndhluD994q1Ja0ciLhA0qpL48yIw%2FVX3DF%2F%2BQmTc9BdqiL%2BymL4k8bqCrBHU6VOMFOOiwWJR7PekWCj4EEMPWUIfWkHkYdtXDCUpBbTr0wgurme7IcGjZCtrYyi0ilIGcCcou6rnjoGpDJbX63hLt6MOe%2Ftfp43f6J8S3B9kVK8ZzNk%2B5PQhuwqh%2BBkgjU0cvszGygPspDLX0pydMlVgOhDkRhZ3dOuacdXTvilGfSc1SkJPQ%2FZvPmg%2BxPemNdupsF90Mq3SVbUWqAzzIP5weAAbo6AUcjY4NRAUSFOl4WtGuWu1O0AN32CvLrBdpmvd3w3WT6vCqmB9Obu%2F9r1kEdB71NDFvFIfTjC6MwmpogZiNr9QduN%2B%2F1OejHmxdObKhoOcwgYeqvgY6pgG0ID00A9WvZ4aALS7Ir6mjyU6WoNOrXfaq9mQz9Vt%2BggmxKsholiC9pbDGnuKphi9Kjq7SkyLhCCfi24APApkr8XzWTBenQHIlF32Ny7BPOxKVI1gnTAXI%2FRghm%2FVgTi3faOYR5EwLx6%2FhZKEuRocz3zS6N9l8bUxLg2rW08edSucVsxvkyXzaXT22RhxbA%2B8LLNrnfEYjfcMbcYXpghrVLsTpI9kq&X-Amz-Signature=eb3199601c91b848f899f9265a19464c996e1a20d480b2d239adcbe1604a2dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NLET7W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrZQNAVdryqJ%2B%2FlhTG9CjVJYAUy9AhvlICOy9eXnbYjAiAR%2FWV4moW3YVq69KQd6UI7%2FCgO%2BIpJpCdun2gX7HO5Rir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbu7P8sJ%2B4V8q5GTEKtwDBBZEcPMe3bB6AK61%2FXxqy3CfjyObREm16tS8Xzr4Cq5t9brECFS7LW40lathEhAW0mLklI3XVRbDO5BRqbhh4yhRPXKj21B2DQNZomMq9MBL1aer42mVGkD2a%2F2NuiO%2Bm9qMBet9Yy9Gm5mZ1bMKZb6Tt7MiiL%2FXDrBCwTWhldWEQ43IqQtD7GdU1a88%2BiVlRisWdT9VR5BAfy1SEfMe4gcOKcz%2FW6X0HydGMf8DpkOoHNomoO6JOX2ndhluD994q1Ja0ciLhA0qpL48yIw%2FVX3DF%2F%2BQmTc9BdqiL%2BymL4k8bqCrBHU6VOMFOOiwWJR7PekWCj4EEMPWUIfWkHkYdtXDCUpBbTr0wgurme7IcGjZCtrYyi0ilIGcCcou6rnjoGpDJbX63hLt6MOe%2Ftfp43f6J8S3B9kVK8ZzNk%2B5PQhuwqh%2BBkgjU0cvszGygPspDLX0pydMlVgOhDkRhZ3dOuacdXTvilGfSc1SkJPQ%2FZvPmg%2BxPemNdupsF90Mq3SVbUWqAzzIP5weAAbo6AUcjY4NRAUSFOl4WtGuWu1O0AN32CvLrBdpmvd3w3WT6vCqmB9Obu%2F9r1kEdB71NDFvFIfTjC6MwmpogZiNr9QduN%2B%2F1OejHmxdObKhoOcwgYeqvgY6pgG0ID00A9WvZ4aALS7Ir6mjyU6WoNOrXfaq9mQz9Vt%2BggmxKsholiC9pbDGnuKphi9Kjq7SkyLhCCfi24APApkr8XzWTBenQHIlF32Ny7BPOxKVI1gnTAXI%2FRghm%2FVgTi3faOYR5EwLx6%2FhZKEuRocz3zS6N9l8bUxLg2rW08edSucVsxvkyXzaXT22RhxbA%2B8LLNrnfEYjfcMbcYXpghrVLsTpI9kq&X-Amz-Signature=c9fc07bf27a70c8ec85cbe7babb76de0de359c31fe5570fca92c8951378021b1&X-Amz-SignedHeaders=host&x-id=GetObject)
