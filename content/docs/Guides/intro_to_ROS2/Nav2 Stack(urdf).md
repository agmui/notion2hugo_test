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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5677QP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC34XhzyWwzrNra4NAb4iqRbytXbpGHe3O%2FIcWGx4N6FAiEA0ZobB7uhwRmKX433lhdwlDhw3YzXnoF8Mte3O3Rz1VIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBOTImaB8CRwRhfEircA4It74VE8pP8CRfS%2F%2FXfsXNi5agG0N4gfVxNelxLFiCibKa2yG73VTZmrGOkJSn1BVLejBwBGtcuq4OSSzo6Z08fxUEocEqLgymWCyrcBIflV%2BX5wLS1qQbUTC%2BM7yicXd9zx%2F7ywhnkBO7jkVdcfiXkAJrm50qZq%2FhB6rYfunIRb6IWeYqCZ7we6yfuqepNz9WcEYFbXnu988Y%2FuGeKrx35tFGnX1GeVOvXzjpM7xBxqZ1Ona2W7soMc%2FB3WITmUriQXWhXXC%2F45r281Hnpd21mMnAGP9f%2BcA8UZRyX0FLx02Fj9J2%2BorGEmnkB6BTRctZKPnO%2FKGMFHRD98UPgNnYdaQF4fW3wCs8Ynb1MZh6EstJRzJ6XEiDdhyRLqWqkO1URqmdt%2FwskpcFn0EX6Ac62DoAHvJPgjhrVpRWChg%2BRczjuykPZ6MRoTDh%2FGm2ImQMyUKuEVezyKchcFJL1pk1z%2Bz6GF0wew0MY1AG2ayKxfwwswMhNfxYCMqPYDMjWpoPUvfPC%2ByedNtLjwndHu2qgcr71l3twmydbceP8lymeKDLOAJTrpESrEQftyRhAKf2iYo49icl8I4NfBHCsHm9KQ8QIx%2F1MprJVIUf04zmtoUDXJD%2FbKq7nPvH8MM365cMGOqUB2P3ozQPUL4IW2%2F1O5NZKcb5fo2y98QTa81g146I5ohwupN0A8ZowCEZnCrBMWkVR65kUGUTALmSGmd7%2FXcXlRMrXd%2BSR%2BhqMSaQDVyJuXwSBBk9IRZ6YFJPQJGDfbBNxpi6Pi9HYmJy6Ns1%2B4Z65Hl7UcZ2z%2F8Yb0FmEtW%2BilHOZdgYU4k1VzVKkm7wToRgIigMo8uFKsYtP1BVnP4NQjO4QMGts&X-Amz-Signature=116c4bad0d6b2205bee25232619d833c3e1d46c07211f26de5c9d66e4917309e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5677QP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC34XhzyWwzrNra4NAb4iqRbytXbpGHe3O%2FIcWGx4N6FAiEA0ZobB7uhwRmKX433lhdwlDhw3YzXnoF8Mte3O3Rz1VIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBOTImaB8CRwRhfEircA4It74VE8pP8CRfS%2F%2FXfsXNi5agG0N4gfVxNelxLFiCibKa2yG73VTZmrGOkJSn1BVLejBwBGtcuq4OSSzo6Z08fxUEocEqLgymWCyrcBIflV%2BX5wLS1qQbUTC%2BM7yicXd9zx%2F7ywhnkBO7jkVdcfiXkAJrm50qZq%2FhB6rYfunIRb6IWeYqCZ7we6yfuqepNz9WcEYFbXnu988Y%2FuGeKrx35tFGnX1GeVOvXzjpM7xBxqZ1Ona2W7soMc%2FB3WITmUriQXWhXXC%2F45r281Hnpd21mMnAGP9f%2BcA8UZRyX0FLx02Fj9J2%2BorGEmnkB6BTRctZKPnO%2FKGMFHRD98UPgNnYdaQF4fW3wCs8Ynb1MZh6EstJRzJ6XEiDdhyRLqWqkO1URqmdt%2FwskpcFn0EX6Ac62DoAHvJPgjhrVpRWChg%2BRczjuykPZ6MRoTDh%2FGm2ImQMyUKuEVezyKchcFJL1pk1z%2Bz6GF0wew0MY1AG2ayKxfwwswMhNfxYCMqPYDMjWpoPUvfPC%2ByedNtLjwndHu2qgcr71l3twmydbceP8lymeKDLOAJTrpESrEQftyRhAKf2iYo49icl8I4NfBHCsHm9KQ8QIx%2F1MprJVIUf04zmtoUDXJD%2FbKq7nPvH8MM365cMGOqUB2P3ozQPUL4IW2%2F1O5NZKcb5fo2y98QTa81g146I5ohwupN0A8ZowCEZnCrBMWkVR65kUGUTALmSGmd7%2FXcXlRMrXd%2BSR%2BhqMSaQDVyJuXwSBBk9IRZ6YFJPQJGDfbBNxpi6Pi9HYmJy6Ns1%2B4Z65Hl7UcZ2z%2F8Yb0FmEtW%2BilHOZdgYU4k1VzVKkm7wToRgIigMo8uFKsYtP1BVnP4NQjO4QMGts&X-Amz-Signature=669bc48251b7581ffb6c9f9a864fccaf872b03a0c2b6cd23f7994c102bf01a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5677QP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC34XhzyWwzrNra4NAb4iqRbytXbpGHe3O%2FIcWGx4N6FAiEA0ZobB7uhwRmKX433lhdwlDhw3YzXnoF8Mte3O3Rz1VIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBOTImaB8CRwRhfEircA4It74VE8pP8CRfS%2F%2FXfsXNi5agG0N4gfVxNelxLFiCibKa2yG73VTZmrGOkJSn1BVLejBwBGtcuq4OSSzo6Z08fxUEocEqLgymWCyrcBIflV%2BX5wLS1qQbUTC%2BM7yicXd9zx%2F7ywhnkBO7jkVdcfiXkAJrm50qZq%2FhB6rYfunIRb6IWeYqCZ7we6yfuqepNz9WcEYFbXnu988Y%2FuGeKrx35tFGnX1GeVOvXzjpM7xBxqZ1Ona2W7soMc%2FB3WITmUriQXWhXXC%2F45r281Hnpd21mMnAGP9f%2BcA8UZRyX0FLx02Fj9J2%2BorGEmnkB6BTRctZKPnO%2FKGMFHRD98UPgNnYdaQF4fW3wCs8Ynb1MZh6EstJRzJ6XEiDdhyRLqWqkO1URqmdt%2FwskpcFn0EX6Ac62DoAHvJPgjhrVpRWChg%2BRczjuykPZ6MRoTDh%2FGm2ImQMyUKuEVezyKchcFJL1pk1z%2Bz6GF0wew0MY1AG2ayKxfwwswMhNfxYCMqPYDMjWpoPUvfPC%2ByedNtLjwndHu2qgcr71l3twmydbceP8lymeKDLOAJTrpESrEQftyRhAKf2iYo49icl8I4NfBHCsHm9KQ8QIx%2F1MprJVIUf04zmtoUDXJD%2FbKq7nPvH8MM365cMGOqUB2P3ozQPUL4IW2%2F1O5NZKcb5fo2y98QTa81g146I5ohwupN0A8ZowCEZnCrBMWkVR65kUGUTALmSGmd7%2FXcXlRMrXd%2BSR%2BhqMSaQDVyJuXwSBBk9IRZ6YFJPQJGDfbBNxpi6Pi9HYmJy6Ns1%2B4Z65Hl7UcZ2z%2F8Yb0FmEtW%2BilHOZdgYU4k1VzVKkm7wToRgIigMo8uFKsYtP1BVnP4NQjO4QMGts&X-Amz-Signature=812318ff0398b5439007575e2c0858adff659d93f3444f56bb0b0a1cae8bbd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5677QP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC34XhzyWwzrNra4NAb4iqRbytXbpGHe3O%2FIcWGx4N6FAiEA0ZobB7uhwRmKX433lhdwlDhw3YzXnoF8Mte3O3Rz1VIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBOTImaB8CRwRhfEircA4It74VE8pP8CRfS%2F%2FXfsXNi5agG0N4gfVxNelxLFiCibKa2yG73VTZmrGOkJSn1BVLejBwBGtcuq4OSSzo6Z08fxUEocEqLgymWCyrcBIflV%2BX5wLS1qQbUTC%2BM7yicXd9zx%2F7ywhnkBO7jkVdcfiXkAJrm50qZq%2FhB6rYfunIRb6IWeYqCZ7we6yfuqepNz9WcEYFbXnu988Y%2FuGeKrx35tFGnX1GeVOvXzjpM7xBxqZ1Ona2W7soMc%2FB3WITmUriQXWhXXC%2F45r281Hnpd21mMnAGP9f%2BcA8UZRyX0FLx02Fj9J2%2BorGEmnkB6BTRctZKPnO%2FKGMFHRD98UPgNnYdaQF4fW3wCs8Ynb1MZh6EstJRzJ6XEiDdhyRLqWqkO1URqmdt%2FwskpcFn0EX6Ac62DoAHvJPgjhrVpRWChg%2BRczjuykPZ6MRoTDh%2FGm2ImQMyUKuEVezyKchcFJL1pk1z%2Bz6GF0wew0MY1AG2ayKxfwwswMhNfxYCMqPYDMjWpoPUvfPC%2ByedNtLjwndHu2qgcr71l3twmydbceP8lymeKDLOAJTrpESrEQftyRhAKf2iYo49icl8I4NfBHCsHm9KQ8QIx%2F1MprJVIUf04zmtoUDXJD%2FbKq7nPvH8MM365cMGOqUB2P3ozQPUL4IW2%2F1O5NZKcb5fo2y98QTa81g146I5ohwupN0A8ZowCEZnCrBMWkVR65kUGUTALmSGmd7%2FXcXlRMrXd%2BSR%2BhqMSaQDVyJuXwSBBk9IRZ6YFJPQJGDfbBNxpi6Pi9HYmJy6Ns1%2B4Z65Hl7UcZ2z%2F8Yb0FmEtW%2BilHOZdgYU4k1VzVKkm7wToRgIigMo8uFKsYtP1BVnP4NQjO4QMGts&X-Amz-Signature=7a4324f5006e19d96670c6e2d9a1d00b65be7897b919f60e86cc6ce077341938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5677QP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC34XhzyWwzrNra4NAb4iqRbytXbpGHe3O%2FIcWGx4N6FAiEA0ZobB7uhwRmKX433lhdwlDhw3YzXnoF8Mte3O3Rz1VIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBOTImaB8CRwRhfEircA4It74VE8pP8CRfS%2F%2FXfsXNi5agG0N4gfVxNelxLFiCibKa2yG73VTZmrGOkJSn1BVLejBwBGtcuq4OSSzo6Z08fxUEocEqLgymWCyrcBIflV%2BX5wLS1qQbUTC%2BM7yicXd9zx%2F7ywhnkBO7jkVdcfiXkAJrm50qZq%2FhB6rYfunIRb6IWeYqCZ7we6yfuqepNz9WcEYFbXnu988Y%2FuGeKrx35tFGnX1GeVOvXzjpM7xBxqZ1Ona2W7soMc%2FB3WITmUriQXWhXXC%2F45r281Hnpd21mMnAGP9f%2BcA8UZRyX0FLx02Fj9J2%2BorGEmnkB6BTRctZKPnO%2FKGMFHRD98UPgNnYdaQF4fW3wCs8Ynb1MZh6EstJRzJ6XEiDdhyRLqWqkO1URqmdt%2FwskpcFn0EX6Ac62DoAHvJPgjhrVpRWChg%2BRczjuykPZ6MRoTDh%2FGm2ImQMyUKuEVezyKchcFJL1pk1z%2Bz6GF0wew0MY1AG2ayKxfwwswMhNfxYCMqPYDMjWpoPUvfPC%2ByedNtLjwndHu2qgcr71l3twmydbceP8lymeKDLOAJTrpESrEQftyRhAKf2iYo49icl8I4NfBHCsHm9KQ8QIx%2F1MprJVIUf04zmtoUDXJD%2FbKq7nPvH8MM365cMGOqUB2P3ozQPUL4IW2%2F1O5NZKcb5fo2y98QTa81g146I5ohwupN0A8ZowCEZnCrBMWkVR65kUGUTALmSGmd7%2FXcXlRMrXd%2BSR%2BhqMSaQDVyJuXwSBBk9IRZ6YFJPQJGDfbBNxpi6Pi9HYmJy6Ns1%2B4Z65Hl7UcZ2z%2F8Yb0FmEtW%2BilHOZdgYU4k1VzVKkm7wToRgIigMo8uFKsYtP1BVnP4NQjO4QMGts&X-Amz-Signature=d97845244adfac6cceb1e57ecfad1989927384bb27aedb1ce12072aad41ba1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5677QP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC34XhzyWwzrNra4NAb4iqRbytXbpGHe3O%2FIcWGx4N6FAiEA0ZobB7uhwRmKX433lhdwlDhw3YzXnoF8Mte3O3Rz1VIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBOTImaB8CRwRhfEircA4It74VE8pP8CRfS%2F%2FXfsXNi5agG0N4gfVxNelxLFiCibKa2yG73VTZmrGOkJSn1BVLejBwBGtcuq4OSSzo6Z08fxUEocEqLgymWCyrcBIflV%2BX5wLS1qQbUTC%2BM7yicXd9zx%2F7ywhnkBO7jkVdcfiXkAJrm50qZq%2FhB6rYfunIRb6IWeYqCZ7we6yfuqepNz9WcEYFbXnu988Y%2FuGeKrx35tFGnX1GeVOvXzjpM7xBxqZ1Ona2W7soMc%2FB3WITmUriQXWhXXC%2F45r281Hnpd21mMnAGP9f%2BcA8UZRyX0FLx02Fj9J2%2BorGEmnkB6BTRctZKPnO%2FKGMFHRD98UPgNnYdaQF4fW3wCs8Ynb1MZh6EstJRzJ6XEiDdhyRLqWqkO1URqmdt%2FwskpcFn0EX6Ac62DoAHvJPgjhrVpRWChg%2BRczjuykPZ6MRoTDh%2FGm2ImQMyUKuEVezyKchcFJL1pk1z%2Bz6GF0wew0MY1AG2ayKxfwwswMhNfxYCMqPYDMjWpoPUvfPC%2ByedNtLjwndHu2qgcr71l3twmydbceP8lymeKDLOAJTrpESrEQftyRhAKf2iYo49icl8I4NfBHCsHm9KQ8QIx%2F1MprJVIUf04zmtoUDXJD%2FbKq7nPvH8MM365cMGOqUB2P3ozQPUL4IW2%2F1O5NZKcb5fo2y98QTa81g146I5ohwupN0A8ZowCEZnCrBMWkVR65kUGUTALmSGmd7%2FXcXlRMrXd%2BSR%2BhqMSaQDVyJuXwSBBk9IRZ6YFJPQJGDfbBNxpi6Pi9HYmJy6Ns1%2B4Z65Hl7UcZ2z%2F8Yb0FmEtW%2BilHOZdgYU4k1VzVKkm7wToRgIigMo8uFKsYtP1BVnP4NQjO4QMGts&X-Amz-Signature=518b430e1821458a1fb1283ac6e7b42321c65c048a3668866ff447b9fff13a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
