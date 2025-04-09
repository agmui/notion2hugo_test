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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TABPTJG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzw6uTBy%2FKZO4qxSyS6gQkKHsCssAB5zRqKamgwzFTlAiBRRxQFoigclOCWVMvJuHR4wxwpZnX9bHt99ZpfbMiO5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWu%2B3r1DCQ4VIaQRKtwDFrqU98Kfcq7JSAcyEEIPq4A0SZ8e6sSuRL5qq8z62hAAHZUNmQcR5DrcdU%2FYuxjLIFMVSzLb7Eq5HgFgqS39vrKa5Ow8YMKtCDWuNcwc0WwKpLIO4Bgx88Qso1dXNGu8IgCBAVNEnmtsD8O1wAAr4YkcT%2BvzTFfy4UK6rSWnTn8ockrUqY5NWEhIUSz4gwJUq%2FDwNu6ixO10BueM%2F1mQyqI4dRnyhMJlAFdXxf3xERqFCjvMP4UD4EZ89OWUjJuhLH3YXWf16%2Fb8WAEsEK%2F9AlPdzMPVfoBAfuRfySIieQltwr9F%2FLydKVXN3yVQTAqAreMgZ1eE9Frq7Foddm2RxWSAjsOasJDz4yczk1KAUhXzNBPr%2BWpAnGIKovAXPQgNj2GFX6WCLkpVkYr0Ueay%2FrlbPDcEUiJziBooOXIujbBoDQoHvoH%2F37%2FEVbpSXud2jSiY%2FXq%2BdN%2Fsz8TAt5AdzMSzB28F6Wot%2BeIQYZ%2FsWivZ6CblAMs5ABtuIpcqIHmNcLAwriCDZvzCZnoO%2BKwjC%2BGAFL%2Bv61Ish%2FqeMjZfYFnHuWy5Roevo6z%2BuweegbOyVjQuPLW4PwuplKDEibe0AKr6E8IaPeBgBPEEX3ySVCNZOk2Prhh4%2BGVAzOAwzpTbvwY6pgGV2vvgoD18t%2FsS6zreoheCRgKc70AXlgo%2F38nB%2BG97JaOjLR0xnsHu6gQGPP8LbQNOj%2F9ULvgwW4Bq72UAklIRbFogTycdcxjnRBjxcVhP4n0Ux%2FyStAa%2BgF59Omde1Man6CbKc21DSRJmqb0wVJ%2F8fP9LbZpWgPHY0XHpp2K%2Fi1rzM%2FpnQpKG23e0DZEilKuJzN%2BSmbMgo212nxZH7tlvlQRdzsfs&X-Amz-Signature=d7fb2e0fa1791e85687f275bde8cba556a4d3c0d019358df11e0e0fc8b394c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TABPTJG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzw6uTBy%2FKZO4qxSyS6gQkKHsCssAB5zRqKamgwzFTlAiBRRxQFoigclOCWVMvJuHR4wxwpZnX9bHt99ZpfbMiO5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWu%2B3r1DCQ4VIaQRKtwDFrqU98Kfcq7JSAcyEEIPq4A0SZ8e6sSuRL5qq8z62hAAHZUNmQcR5DrcdU%2FYuxjLIFMVSzLb7Eq5HgFgqS39vrKa5Ow8YMKtCDWuNcwc0WwKpLIO4Bgx88Qso1dXNGu8IgCBAVNEnmtsD8O1wAAr4YkcT%2BvzTFfy4UK6rSWnTn8ockrUqY5NWEhIUSz4gwJUq%2FDwNu6ixO10BueM%2F1mQyqI4dRnyhMJlAFdXxf3xERqFCjvMP4UD4EZ89OWUjJuhLH3YXWf16%2Fb8WAEsEK%2F9AlPdzMPVfoBAfuRfySIieQltwr9F%2FLydKVXN3yVQTAqAreMgZ1eE9Frq7Foddm2RxWSAjsOasJDz4yczk1KAUhXzNBPr%2BWpAnGIKovAXPQgNj2GFX6WCLkpVkYr0Ueay%2FrlbPDcEUiJziBooOXIujbBoDQoHvoH%2F37%2FEVbpSXud2jSiY%2FXq%2BdN%2Fsz8TAt5AdzMSzB28F6Wot%2BeIQYZ%2FsWivZ6CblAMs5ABtuIpcqIHmNcLAwriCDZvzCZnoO%2BKwjC%2BGAFL%2Bv61Ish%2FqeMjZfYFnHuWy5Roevo6z%2BuweegbOyVjQuPLW4PwuplKDEibe0AKr6E8IaPeBgBPEEX3ySVCNZOk2Prhh4%2BGVAzOAwzpTbvwY6pgGV2vvgoD18t%2FsS6zreoheCRgKc70AXlgo%2F38nB%2BG97JaOjLR0xnsHu6gQGPP8LbQNOj%2F9ULvgwW4Bq72UAklIRbFogTycdcxjnRBjxcVhP4n0Ux%2FyStAa%2BgF59Omde1Man6CbKc21DSRJmqb0wVJ%2F8fP9LbZpWgPHY0XHpp2K%2Fi1rzM%2FpnQpKG23e0DZEilKuJzN%2BSmbMgo212nxZH7tlvlQRdzsfs&X-Amz-Signature=4f8c30c74fb2a9ab4268047f98e24e820f3b7ce5b6bb21d8295e33f4020e64e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TABPTJG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzw6uTBy%2FKZO4qxSyS6gQkKHsCssAB5zRqKamgwzFTlAiBRRxQFoigclOCWVMvJuHR4wxwpZnX9bHt99ZpfbMiO5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWu%2B3r1DCQ4VIaQRKtwDFrqU98Kfcq7JSAcyEEIPq4A0SZ8e6sSuRL5qq8z62hAAHZUNmQcR5DrcdU%2FYuxjLIFMVSzLb7Eq5HgFgqS39vrKa5Ow8YMKtCDWuNcwc0WwKpLIO4Bgx88Qso1dXNGu8IgCBAVNEnmtsD8O1wAAr4YkcT%2BvzTFfy4UK6rSWnTn8ockrUqY5NWEhIUSz4gwJUq%2FDwNu6ixO10BueM%2F1mQyqI4dRnyhMJlAFdXxf3xERqFCjvMP4UD4EZ89OWUjJuhLH3YXWf16%2Fb8WAEsEK%2F9AlPdzMPVfoBAfuRfySIieQltwr9F%2FLydKVXN3yVQTAqAreMgZ1eE9Frq7Foddm2RxWSAjsOasJDz4yczk1KAUhXzNBPr%2BWpAnGIKovAXPQgNj2GFX6WCLkpVkYr0Ueay%2FrlbPDcEUiJziBooOXIujbBoDQoHvoH%2F37%2FEVbpSXud2jSiY%2FXq%2BdN%2Fsz8TAt5AdzMSzB28F6Wot%2BeIQYZ%2FsWivZ6CblAMs5ABtuIpcqIHmNcLAwriCDZvzCZnoO%2BKwjC%2BGAFL%2Bv61Ish%2FqeMjZfYFnHuWy5Roevo6z%2BuweegbOyVjQuPLW4PwuplKDEibe0AKr6E8IaPeBgBPEEX3ySVCNZOk2Prhh4%2BGVAzOAwzpTbvwY6pgGV2vvgoD18t%2FsS6zreoheCRgKc70AXlgo%2F38nB%2BG97JaOjLR0xnsHu6gQGPP8LbQNOj%2F9ULvgwW4Bq72UAklIRbFogTycdcxjnRBjxcVhP4n0Ux%2FyStAa%2BgF59Omde1Man6CbKc21DSRJmqb0wVJ%2F8fP9LbZpWgPHY0XHpp2K%2Fi1rzM%2FpnQpKG23e0DZEilKuJzN%2BSmbMgo212nxZH7tlvlQRdzsfs&X-Amz-Signature=d357e55491dad26d936c2d6df90e5eb0a41e49aab4a7c3e3d629f1a162b3e294&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TABPTJG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzw6uTBy%2FKZO4qxSyS6gQkKHsCssAB5zRqKamgwzFTlAiBRRxQFoigclOCWVMvJuHR4wxwpZnX9bHt99ZpfbMiO5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWu%2B3r1DCQ4VIaQRKtwDFrqU98Kfcq7JSAcyEEIPq4A0SZ8e6sSuRL5qq8z62hAAHZUNmQcR5DrcdU%2FYuxjLIFMVSzLb7Eq5HgFgqS39vrKa5Ow8YMKtCDWuNcwc0WwKpLIO4Bgx88Qso1dXNGu8IgCBAVNEnmtsD8O1wAAr4YkcT%2BvzTFfy4UK6rSWnTn8ockrUqY5NWEhIUSz4gwJUq%2FDwNu6ixO10BueM%2F1mQyqI4dRnyhMJlAFdXxf3xERqFCjvMP4UD4EZ89OWUjJuhLH3YXWf16%2Fb8WAEsEK%2F9AlPdzMPVfoBAfuRfySIieQltwr9F%2FLydKVXN3yVQTAqAreMgZ1eE9Frq7Foddm2RxWSAjsOasJDz4yczk1KAUhXzNBPr%2BWpAnGIKovAXPQgNj2GFX6WCLkpVkYr0Ueay%2FrlbPDcEUiJziBooOXIujbBoDQoHvoH%2F37%2FEVbpSXud2jSiY%2FXq%2BdN%2Fsz8TAt5AdzMSzB28F6Wot%2BeIQYZ%2FsWivZ6CblAMs5ABtuIpcqIHmNcLAwriCDZvzCZnoO%2BKwjC%2BGAFL%2Bv61Ish%2FqeMjZfYFnHuWy5Roevo6z%2BuweegbOyVjQuPLW4PwuplKDEibe0AKr6E8IaPeBgBPEEX3ySVCNZOk2Prhh4%2BGVAzOAwzpTbvwY6pgGV2vvgoD18t%2FsS6zreoheCRgKc70AXlgo%2F38nB%2BG97JaOjLR0xnsHu6gQGPP8LbQNOj%2F9ULvgwW4Bq72UAklIRbFogTycdcxjnRBjxcVhP4n0Ux%2FyStAa%2BgF59Omde1Man6CbKc21DSRJmqb0wVJ%2F8fP9LbZpWgPHY0XHpp2K%2Fi1rzM%2FpnQpKG23e0DZEilKuJzN%2BSmbMgo212nxZH7tlvlQRdzsfs&X-Amz-Signature=eee1f6bd667410fc08f526bbaac5d0953c1a7e62b85eb62a0ffd52ebaa6fec2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TABPTJG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzw6uTBy%2FKZO4qxSyS6gQkKHsCssAB5zRqKamgwzFTlAiBRRxQFoigclOCWVMvJuHR4wxwpZnX9bHt99ZpfbMiO5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWu%2B3r1DCQ4VIaQRKtwDFrqU98Kfcq7JSAcyEEIPq4A0SZ8e6sSuRL5qq8z62hAAHZUNmQcR5DrcdU%2FYuxjLIFMVSzLb7Eq5HgFgqS39vrKa5Ow8YMKtCDWuNcwc0WwKpLIO4Bgx88Qso1dXNGu8IgCBAVNEnmtsD8O1wAAr4YkcT%2BvzTFfy4UK6rSWnTn8ockrUqY5NWEhIUSz4gwJUq%2FDwNu6ixO10BueM%2F1mQyqI4dRnyhMJlAFdXxf3xERqFCjvMP4UD4EZ89OWUjJuhLH3YXWf16%2Fb8WAEsEK%2F9AlPdzMPVfoBAfuRfySIieQltwr9F%2FLydKVXN3yVQTAqAreMgZ1eE9Frq7Foddm2RxWSAjsOasJDz4yczk1KAUhXzNBPr%2BWpAnGIKovAXPQgNj2GFX6WCLkpVkYr0Ueay%2FrlbPDcEUiJziBooOXIujbBoDQoHvoH%2F37%2FEVbpSXud2jSiY%2FXq%2BdN%2Fsz8TAt5AdzMSzB28F6Wot%2BeIQYZ%2FsWivZ6CblAMs5ABtuIpcqIHmNcLAwriCDZvzCZnoO%2BKwjC%2BGAFL%2Bv61Ish%2FqeMjZfYFnHuWy5Roevo6z%2BuweegbOyVjQuPLW4PwuplKDEibe0AKr6E8IaPeBgBPEEX3ySVCNZOk2Prhh4%2BGVAzOAwzpTbvwY6pgGV2vvgoD18t%2FsS6zreoheCRgKc70AXlgo%2F38nB%2BG97JaOjLR0xnsHu6gQGPP8LbQNOj%2F9ULvgwW4Bq72UAklIRbFogTycdcxjnRBjxcVhP4n0Ux%2FyStAa%2BgF59Omde1Man6CbKc21DSRJmqb0wVJ%2F8fP9LbZpWgPHY0XHpp2K%2Fi1rzM%2FpnQpKG23e0DZEilKuJzN%2BSmbMgo212nxZH7tlvlQRdzsfs&X-Amz-Signature=5c29fbd0daa2e92d94995d2787f5d8c645baaca9f326ede1fb729cc4b6915abf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TABPTJG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzw6uTBy%2FKZO4qxSyS6gQkKHsCssAB5zRqKamgwzFTlAiBRRxQFoigclOCWVMvJuHR4wxwpZnX9bHt99ZpfbMiO5SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWu%2B3r1DCQ4VIaQRKtwDFrqU98Kfcq7JSAcyEEIPq4A0SZ8e6sSuRL5qq8z62hAAHZUNmQcR5DrcdU%2FYuxjLIFMVSzLb7Eq5HgFgqS39vrKa5Ow8YMKtCDWuNcwc0WwKpLIO4Bgx88Qso1dXNGu8IgCBAVNEnmtsD8O1wAAr4YkcT%2BvzTFfy4UK6rSWnTn8ockrUqY5NWEhIUSz4gwJUq%2FDwNu6ixO10BueM%2F1mQyqI4dRnyhMJlAFdXxf3xERqFCjvMP4UD4EZ89OWUjJuhLH3YXWf16%2Fb8WAEsEK%2F9AlPdzMPVfoBAfuRfySIieQltwr9F%2FLydKVXN3yVQTAqAreMgZ1eE9Frq7Foddm2RxWSAjsOasJDz4yczk1KAUhXzNBPr%2BWpAnGIKovAXPQgNj2GFX6WCLkpVkYr0Ueay%2FrlbPDcEUiJziBooOXIujbBoDQoHvoH%2F37%2FEVbpSXud2jSiY%2FXq%2BdN%2Fsz8TAt5AdzMSzB28F6Wot%2BeIQYZ%2FsWivZ6CblAMs5ABtuIpcqIHmNcLAwriCDZvzCZnoO%2BKwjC%2BGAFL%2Bv61Ish%2FqeMjZfYFnHuWy5Roevo6z%2BuweegbOyVjQuPLW4PwuplKDEibe0AKr6E8IaPeBgBPEEX3ySVCNZOk2Prhh4%2BGVAzOAwzpTbvwY6pgGV2vvgoD18t%2FsS6zreoheCRgKc70AXlgo%2F38nB%2BG97JaOjLR0xnsHu6gQGPP8LbQNOj%2F9ULvgwW4Bq72UAklIRbFogTycdcxjnRBjxcVhP4n0Ux%2FyStAa%2BgF59Omde1Man6CbKc21DSRJmqb0wVJ%2F8fP9LbZpWgPHY0XHpp2K%2Fi1rzM%2FpnQpKG23e0DZEilKuJzN%2BSmbMgo212nxZH7tlvlQRdzsfs&X-Amz-Signature=722ec1ae766f0e1cea527c0ecd41f8df628a7ca493e88c188f133b63890bc587&X-Amz-SignedHeaders=host&x-id=GetObject)
