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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XMTJEB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDsJ%2BhVzoE1axetTAMoeHD5Zo2wX5Omhvu66k8J9tNPnQIgaoobvoUHCOGLgluyibOJq%2F5N0AljH2C2z2klbpDTPMgqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABmhH%2Brjc4Sy182CSrcA%2FQHYbQFuxs7MG93Xh4ilgDoqiNHTzqXPSvjTopf4le7%2BI7b39N42XoremjeJEaG63UVGMpcQosiGXgP06kfJUhCTb9FP%2BBeshuiEpCdkb5%2FAMySEyMNfsGqS5girnzYwqBsYb2LZpdDsFTV4QioWn6pc%2BuDoA5RA5gizpikCmTQmYoWbvoQkDYstXGuuzxTVP4aWUh%2BjGlfEDxGqy75Zx%2FgKgSrpTPFngT%2FisDz2MT92lq20%2B%2Fn30FPHjpSk6Phi3JYp86cFMZ947ChoRNWDyRJuogxudxm3VhNJOwzBKADUR1rl%2BhXneYAFKjOeRQaKa2LmFiH3LTWCxgjeyndmEYa%2FCL0NCFOoHFZ7gub8PPNnq4NH5waNlAP4%2F9sC7w%2F9FFldAhXuKZylvGeHoY6rWqPIpqTZfkyMTxaeZhfO6uRjtDLNac9nM7UdSKlMGGYfbT%2B2SWi%2FYfWV6uYfMEJLChQ9QuOh5C6eIoPEpoGcmzO1vtypKZ0Ndedfd6c%2F04aeJxFOYk7qHHUgwLnJIByztsc%2B131OStGU5XUJTKL8Zg%2FLQDY0CnAnMpnaK6dxsRTq3zQYFHxp5JVCkyyS%2BLzay9kjTAX7SmUA435%2BUPWUd8VTif5303UwutSzbQ8MPzRhL4GOqUBRJiw1LJHhXjzACTO7kZszTX%2By9Ock4Y7CENe5fQxnn5ZLinEdOCzpIIlsvv4e1twOoptuza2BgAx2Np8cf5Xo%2B%2BYcfB33yMqFY9Zu6%2BbvgKFAO3Lbm9ptEepdHLVetGaiBTG9AJSz5K29fCJAuXXdYN32AsJJ4LvcZtgAA3drFZG4uj5bByc%2Bw0bdyjuwWxG%2FsIOJ%2BDXna8TaFrqC07c0%2FH2OjLl&X-Amz-Signature=47f74fbbe2b476f894d3a8079ec88b052a1a626caf5e9fb9b1b1c8874ecd84d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XMTJEB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDsJ%2BhVzoE1axetTAMoeHD5Zo2wX5Omhvu66k8J9tNPnQIgaoobvoUHCOGLgluyibOJq%2F5N0AljH2C2z2klbpDTPMgqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABmhH%2Brjc4Sy182CSrcA%2FQHYbQFuxs7MG93Xh4ilgDoqiNHTzqXPSvjTopf4le7%2BI7b39N42XoremjeJEaG63UVGMpcQosiGXgP06kfJUhCTb9FP%2BBeshuiEpCdkb5%2FAMySEyMNfsGqS5girnzYwqBsYb2LZpdDsFTV4QioWn6pc%2BuDoA5RA5gizpikCmTQmYoWbvoQkDYstXGuuzxTVP4aWUh%2BjGlfEDxGqy75Zx%2FgKgSrpTPFngT%2FisDz2MT92lq20%2B%2Fn30FPHjpSk6Phi3JYp86cFMZ947ChoRNWDyRJuogxudxm3VhNJOwzBKADUR1rl%2BhXneYAFKjOeRQaKa2LmFiH3LTWCxgjeyndmEYa%2FCL0NCFOoHFZ7gub8PPNnq4NH5waNlAP4%2F9sC7w%2F9FFldAhXuKZylvGeHoY6rWqPIpqTZfkyMTxaeZhfO6uRjtDLNac9nM7UdSKlMGGYfbT%2B2SWi%2FYfWV6uYfMEJLChQ9QuOh5C6eIoPEpoGcmzO1vtypKZ0Ndedfd6c%2F04aeJxFOYk7qHHUgwLnJIByztsc%2B131OStGU5XUJTKL8Zg%2FLQDY0CnAnMpnaK6dxsRTq3zQYFHxp5JVCkyyS%2BLzay9kjTAX7SmUA435%2BUPWUd8VTif5303UwutSzbQ8MPzRhL4GOqUBRJiw1LJHhXjzACTO7kZszTX%2By9Ock4Y7CENe5fQxnn5ZLinEdOCzpIIlsvv4e1twOoptuza2BgAx2Np8cf5Xo%2B%2BYcfB33yMqFY9Zu6%2BbvgKFAO3Lbm9ptEepdHLVetGaiBTG9AJSz5K29fCJAuXXdYN32AsJJ4LvcZtgAA3drFZG4uj5bByc%2Bw0bdyjuwWxG%2FsIOJ%2BDXna8TaFrqC07c0%2FH2OjLl&X-Amz-Signature=47c356367bca5551acdf3b888e394df4816d630664cfe3f8b485f6050fe97d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XMTJEB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDsJ%2BhVzoE1axetTAMoeHD5Zo2wX5Omhvu66k8J9tNPnQIgaoobvoUHCOGLgluyibOJq%2F5N0AljH2C2z2klbpDTPMgqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABmhH%2Brjc4Sy182CSrcA%2FQHYbQFuxs7MG93Xh4ilgDoqiNHTzqXPSvjTopf4le7%2BI7b39N42XoremjeJEaG63UVGMpcQosiGXgP06kfJUhCTb9FP%2BBeshuiEpCdkb5%2FAMySEyMNfsGqS5girnzYwqBsYb2LZpdDsFTV4QioWn6pc%2BuDoA5RA5gizpikCmTQmYoWbvoQkDYstXGuuzxTVP4aWUh%2BjGlfEDxGqy75Zx%2FgKgSrpTPFngT%2FisDz2MT92lq20%2B%2Fn30FPHjpSk6Phi3JYp86cFMZ947ChoRNWDyRJuogxudxm3VhNJOwzBKADUR1rl%2BhXneYAFKjOeRQaKa2LmFiH3LTWCxgjeyndmEYa%2FCL0NCFOoHFZ7gub8PPNnq4NH5waNlAP4%2F9sC7w%2F9FFldAhXuKZylvGeHoY6rWqPIpqTZfkyMTxaeZhfO6uRjtDLNac9nM7UdSKlMGGYfbT%2B2SWi%2FYfWV6uYfMEJLChQ9QuOh5C6eIoPEpoGcmzO1vtypKZ0Ndedfd6c%2F04aeJxFOYk7qHHUgwLnJIByztsc%2B131OStGU5XUJTKL8Zg%2FLQDY0CnAnMpnaK6dxsRTq3zQYFHxp5JVCkyyS%2BLzay9kjTAX7SmUA435%2BUPWUd8VTif5303UwutSzbQ8MPzRhL4GOqUBRJiw1LJHhXjzACTO7kZszTX%2By9Ock4Y7CENe5fQxnn5ZLinEdOCzpIIlsvv4e1twOoptuza2BgAx2Np8cf5Xo%2B%2BYcfB33yMqFY9Zu6%2BbvgKFAO3Lbm9ptEepdHLVetGaiBTG9AJSz5K29fCJAuXXdYN32AsJJ4LvcZtgAA3drFZG4uj5bByc%2Bw0bdyjuwWxG%2FsIOJ%2BDXna8TaFrqC07c0%2FH2OjLl&X-Amz-Signature=18142e468b5df56eff2badcc79b1646e11de0942cfff5c5b1e4709ecb61aad7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XMTJEB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDsJ%2BhVzoE1axetTAMoeHD5Zo2wX5Omhvu66k8J9tNPnQIgaoobvoUHCOGLgluyibOJq%2F5N0AljH2C2z2klbpDTPMgqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABmhH%2Brjc4Sy182CSrcA%2FQHYbQFuxs7MG93Xh4ilgDoqiNHTzqXPSvjTopf4le7%2BI7b39N42XoremjeJEaG63UVGMpcQosiGXgP06kfJUhCTb9FP%2BBeshuiEpCdkb5%2FAMySEyMNfsGqS5girnzYwqBsYb2LZpdDsFTV4QioWn6pc%2BuDoA5RA5gizpikCmTQmYoWbvoQkDYstXGuuzxTVP4aWUh%2BjGlfEDxGqy75Zx%2FgKgSrpTPFngT%2FisDz2MT92lq20%2B%2Fn30FPHjpSk6Phi3JYp86cFMZ947ChoRNWDyRJuogxudxm3VhNJOwzBKADUR1rl%2BhXneYAFKjOeRQaKa2LmFiH3LTWCxgjeyndmEYa%2FCL0NCFOoHFZ7gub8PPNnq4NH5waNlAP4%2F9sC7w%2F9FFldAhXuKZylvGeHoY6rWqPIpqTZfkyMTxaeZhfO6uRjtDLNac9nM7UdSKlMGGYfbT%2B2SWi%2FYfWV6uYfMEJLChQ9QuOh5C6eIoPEpoGcmzO1vtypKZ0Ndedfd6c%2F04aeJxFOYk7qHHUgwLnJIByztsc%2B131OStGU5XUJTKL8Zg%2FLQDY0CnAnMpnaK6dxsRTq3zQYFHxp5JVCkyyS%2BLzay9kjTAX7SmUA435%2BUPWUd8VTif5303UwutSzbQ8MPzRhL4GOqUBRJiw1LJHhXjzACTO7kZszTX%2By9Ock4Y7CENe5fQxnn5ZLinEdOCzpIIlsvv4e1twOoptuza2BgAx2Np8cf5Xo%2B%2BYcfB33yMqFY9Zu6%2BbvgKFAO3Lbm9ptEepdHLVetGaiBTG9AJSz5K29fCJAuXXdYN32AsJJ4LvcZtgAA3drFZG4uj5bByc%2Bw0bdyjuwWxG%2FsIOJ%2BDXna8TaFrqC07c0%2FH2OjLl&X-Amz-Signature=d3a7743e6b97d0ed03897a1dc3a113428db2ead2755d14b994057400c1a6c416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XMTJEB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDsJ%2BhVzoE1axetTAMoeHD5Zo2wX5Omhvu66k8J9tNPnQIgaoobvoUHCOGLgluyibOJq%2F5N0AljH2C2z2klbpDTPMgqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABmhH%2Brjc4Sy182CSrcA%2FQHYbQFuxs7MG93Xh4ilgDoqiNHTzqXPSvjTopf4le7%2BI7b39N42XoremjeJEaG63UVGMpcQosiGXgP06kfJUhCTb9FP%2BBeshuiEpCdkb5%2FAMySEyMNfsGqS5girnzYwqBsYb2LZpdDsFTV4QioWn6pc%2BuDoA5RA5gizpikCmTQmYoWbvoQkDYstXGuuzxTVP4aWUh%2BjGlfEDxGqy75Zx%2FgKgSrpTPFngT%2FisDz2MT92lq20%2B%2Fn30FPHjpSk6Phi3JYp86cFMZ947ChoRNWDyRJuogxudxm3VhNJOwzBKADUR1rl%2BhXneYAFKjOeRQaKa2LmFiH3LTWCxgjeyndmEYa%2FCL0NCFOoHFZ7gub8PPNnq4NH5waNlAP4%2F9sC7w%2F9FFldAhXuKZylvGeHoY6rWqPIpqTZfkyMTxaeZhfO6uRjtDLNac9nM7UdSKlMGGYfbT%2B2SWi%2FYfWV6uYfMEJLChQ9QuOh5C6eIoPEpoGcmzO1vtypKZ0Ndedfd6c%2F04aeJxFOYk7qHHUgwLnJIByztsc%2B131OStGU5XUJTKL8Zg%2FLQDY0CnAnMpnaK6dxsRTq3zQYFHxp5JVCkyyS%2BLzay9kjTAX7SmUA435%2BUPWUd8VTif5303UwutSzbQ8MPzRhL4GOqUBRJiw1LJHhXjzACTO7kZszTX%2By9Ock4Y7CENe5fQxnn5ZLinEdOCzpIIlsvv4e1twOoptuza2BgAx2Np8cf5Xo%2B%2BYcfB33yMqFY9Zu6%2BbvgKFAO3Lbm9ptEepdHLVetGaiBTG9AJSz5K29fCJAuXXdYN32AsJJ4LvcZtgAA3drFZG4uj5bByc%2Bw0bdyjuwWxG%2FsIOJ%2BDXna8TaFrqC07c0%2FH2OjLl&X-Amz-Signature=f2a06ba38cd9959ee673528c46a2f10a0f59d69e1977f35b12551e4399df25c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XMTJEB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDsJ%2BhVzoE1axetTAMoeHD5Zo2wX5Omhvu66k8J9tNPnQIgaoobvoUHCOGLgluyibOJq%2F5N0AljH2C2z2klbpDTPMgqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABmhH%2Brjc4Sy182CSrcA%2FQHYbQFuxs7MG93Xh4ilgDoqiNHTzqXPSvjTopf4le7%2BI7b39N42XoremjeJEaG63UVGMpcQosiGXgP06kfJUhCTb9FP%2BBeshuiEpCdkb5%2FAMySEyMNfsGqS5girnzYwqBsYb2LZpdDsFTV4QioWn6pc%2BuDoA5RA5gizpikCmTQmYoWbvoQkDYstXGuuzxTVP4aWUh%2BjGlfEDxGqy75Zx%2FgKgSrpTPFngT%2FisDz2MT92lq20%2B%2Fn30FPHjpSk6Phi3JYp86cFMZ947ChoRNWDyRJuogxudxm3VhNJOwzBKADUR1rl%2BhXneYAFKjOeRQaKa2LmFiH3LTWCxgjeyndmEYa%2FCL0NCFOoHFZ7gub8PPNnq4NH5waNlAP4%2F9sC7w%2F9FFldAhXuKZylvGeHoY6rWqPIpqTZfkyMTxaeZhfO6uRjtDLNac9nM7UdSKlMGGYfbT%2B2SWi%2FYfWV6uYfMEJLChQ9QuOh5C6eIoPEpoGcmzO1vtypKZ0Ndedfd6c%2F04aeJxFOYk7qHHUgwLnJIByztsc%2B131OStGU5XUJTKL8Zg%2FLQDY0CnAnMpnaK6dxsRTq3zQYFHxp5JVCkyyS%2BLzay9kjTAX7SmUA435%2BUPWUd8VTif5303UwutSzbQ8MPzRhL4GOqUBRJiw1LJHhXjzACTO7kZszTX%2By9Ock4Y7CENe5fQxnn5ZLinEdOCzpIIlsvv4e1twOoptuza2BgAx2Np8cf5Xo%2B%2BYcfB33yMqFY9Zu6%2BbvgKFAO3Lbm9ptEepdHLVetGaiBTG9AJSz5K29fCJAuXXdYN32AsJJ4LvcZtgAA3drFZG4uj5bByc%2Bw0bdyjuwWxG%2FsIOJ%2BDXna8TaFrqC07c0%2FH2OjLl&X-Amz-Signature=9f77674227a5965ba67d63bad5d1730f32fb5f1593614e91bf1082a6ea5de187&X-Amz-SignedHeaders=host&x-id=GetObject)
