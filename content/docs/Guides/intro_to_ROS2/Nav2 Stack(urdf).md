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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXPTSUR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjaA14NBl%2FqTi9qCHb3BQRTzflz6lmKYc5TNh%2BfruQoAIgHzInmZ4K2H8%2Fz23BxOPlzi40aPzRsR9afc4IjIlbBmIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIR770h8lK1EbVPEEircA40irPSm4JBlEreD82CLrFvLktRRrs7g6T8j28ilvZUWoc%2FvNniiHBQ%2B%2Ff9K7zLvSlsiqGjoOmymAS1HZwc%2FL8Pq%2FOl5%2BbEOp6LRgMqVwSzuOjMi41U2gTJ8Mr5fb0l3u4XoxWsyA2o56gvzA4gEx1SY0a0OdaQShI8IwmGmb8saCndVGP3X%2F0RaXSYf5C33JG7tTYwyi1EhVFt1yyf8lsdCKHS%2F6M54WzlMcS4P9HjxXgwrXNJ1KjedV6YaWetAzMCMCcjpi7Cbfn4rKT3kMWeikjGDVJ0uSCA%2FAWFYeAuk48ubaMmwyzlwEnbiQBil8IiqozATS85AgE8CNPaIBZsv5qxoxa1IDXbKseMD5QElXIxCCnYskS9vdGWn57%2BsCVswbTD0sdSDTlBeZ3rxlq4tmtkk%2FwM%2BSKtynnNGZ0Zhja1LwwhRa%2F2%2FdY5JbK6%2Bfz0bd4WkrLbVruU%2BKccHcfyjJAcB8FTPgINuiGWKKeWoN3wneVXEG2gfxzXVvAa7IbPupWxdt%2BFpjeoRT6puW%2FSzyv1bvg2qJkgXfP79Nc2cBSvJI1aLtjAr5fQLARtoSzj7Uo2B4vVt7JV88FffHTlxStaRlqL505nSqPB7KgrofbUohrUlGPpmyb7HMJaT3sMGOqUBv75vNetv1oAKG5yz8%2BYP2pOM2ibMoYqgcAWLJ5lh4Dg25EBKyqfSjtu0m8KGrpQRmH3dlF0kajRLqy2t97PqZsYfNe8b6Tnyp0EFxuwDbKJ2OTVvhQ%2FqUpN053zdrT7tq32w9jW1Qhs16LblLYYnq57D1tVxOVVT84h05uhOSOSwt%2BxyTOLSwSVAKnwBAEw6vdrs6qYAvt4OtdvvP96sdE7XKRfF&X-Amz-Signature=b5d5596458c864b962ed1eebd141d81f46fbb8fad84cffa1780f708a17475cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXPTSUR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjaA14NBl%2FqTi9qCHb3BQRTzflz6lmKYc5TNh%2BfruQoAIgHzInmZ4K2H8%2Fz23BxOPlzi40aPzRsR9afc4IjIlbBmIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIR770h8lK1EbVPEEircA40irPSm4JBlEreD82CLrFvLktRRrs7g6T8j28ilvZUWoc%2FvNniiHBQ%2B%2Ff9K7zLvSlsiqGjoOmymAS1HZwc%2FL8Pq%2FOl5%2BbEOp6LRgMqVwSzuOjMi41U2gTJ8Mr5fb0l3u4XoxWsyA2o56gvzA4gEx1SY0a0OdaQShI8IwmGmb8saCndVGP3X%2F0RaXSYf5C33JG7tTYwyi1EhVFt1yyf8lsdCKHS%2F6M54WzlMcS4P9HjxXgwrXNJ1KjedV6YaWetAzMCMCcjpi7Cbfn4rKT3kMWeikjGDVJ0uSCA%2FAWFYeAuk48ubaMmwyzlwEnbiQBil8IiqozATS85AgE8CNPaIBZsv5qxoxa1IDXbKseMD5QElXIxCCnYskS9vdGWn57%2BsCVswbTD0sdSDTlBeZ3rxlq4tmtkk%2FwM%2BSKtynnNGZ0Zhja1LwwhRa%2F2%2FdY5JbK6%2Bfz0bd4WkrLbVruU%2BKccHcfyjJAcB8FTPgINuiGWKKeWoN3wneVXEG2gfxzXVvAa7IbPupWxdt%2BFpjeoRT6puW%2FSzyv1bvg2qJkgXfP79Nc2cBSvJI1aLtjAr5fQLARtoSzj7Uo2B4vVt7JV88FffHTlxStaRlqL505nSqPB7KgrofbUohrUlGPpmyb7HMJaT3sMGOqUBv75vNetv1oAKG5yz8%2BYP2pOM2ibMoYqgcAWLJ5lh4Dg25EBKyqfSjtu0m8KGrpQRmH3dlF0kajRLqy2t97PqZsYfNe8b6Tnyp0EFxuwDbKJ2OTVvhQ%2FqUpN053zdrT7tq32w9jW1Qhs16LblLYYnq57D1tVxOVVT84h05uhOSOSwt%2BxyTOLSwSVAKnwBAEw6vdrs6qYAvt4OtdvvP96sdE7XKRfF&X-Amz-Signature=b054481ae72d002b6e6836ba806cdcc82b1207bd94e04883b964dd0fe3a99e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXPTSUR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjaA14NBl%2FqTi9qCHb3BQRTzflz6lmKYc5TNh%2BfruQoAIgHzInmZ4K2H8%2Fz23BxOPlzi40aPzRsR9afc4IjIlbBmIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIR770h8lK1EbVPEEircA40irPSm4JBlEreD82CLrFvLktRRrs7g6T8j28ilvZUWoc%2FvNniiHBQ%2B%2Ff9K7zLvSlsiqGjoOmymAS1HZwc%2FL8Pq%2FOl5%2BbEOp6LRgMqVwSzuOjMi41U2gTJ8Mr5fb0l3u4XoxWsyA2o56gvzA4gEx1SY0a0OdaQShI8IwmGmb8saCndVGP3X%2F0RaXSYf5C33JG7tTYwyi1EhVFt1yyf8lsdCKHS%2F6M54WzlMcS4P9HjxXgwrXNJ1KjedV6YaWetAzMCMCcjpi7Cbfn4rKT3kMWeikjGDVJ0uSCA%2FAWFYeAuk48ubaMmwyzlwEnbiQBil8IiqozATS85AgE8CNPaIBZsv5qxoxa1IDXbKseMD5QElXIxCCnYskS9vdGWn57%2BsCVswbTD0sdSDTlBeZ3rxlq4tmtkk%2FwM%2BSKtynnNGZ0Zhja1LwwhRa%2F2%2FdY5JbK6%2Bfz0bd4WkrLbVruU%2BKccHcfyjJAcB8FTPgINuiGWKKeWoN3wneVXEG2gfxzXVvAa7IbPupWxdt%2BFpjeoRT6puW%2FSzyv1bvg2qJkgXfP79Nc2cBSvJI1aLtjAr5fQLARtoSzj7Uo2B4vVt7JV88FffHTlxStaRlqL505nSqPB7KgrofbUohrUlGPpmyb7HMJaT3sMGOqUBv75vNetv1oAKG5yz8%2BYP2pOM2ibMoYqgcAWLJ5lh4Dg25EBKyqfSjtu0m8KGrpQRmH3dlF0kajRLqy2t97PqZsYfNe8b6Tnyp0EFxuwDbKJ2OTVvhQ%2FqUpN053zdrT7tq32w9jW1Qhs16LblLYYnq57D1tVxOVVT84h05uhOSOSwt%2BxyTOLSwSVAKnwBAEw6vdrs6qYAvt4OtdvvP96sdE7XKRfF&X-Amz-Signature=b13b6f625b044c3b7dd050105dcfa90c46a4c194e039dce33e593dd99fe0deb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXPTSUR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjaA14NBl%2FqTi9qCHb3BQRTzflz6lmKYc5TNh%2BfruQoAIgHzInmZ4K2H8%2Fz23BxOPlzi40aPzRsR9afc4IjIlbBmIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIR770h8lK1EbVPEEircA40irPSm4JBlEreD82CLrFvLktRRrs7g6T8j28ilvZUWoc%2FvNniiHBQ%2B%2Ff9K7zLvSlsiqGjoOmymAS1HZwc%2FL8Pq%2FOl5%2BbEOp6LRgMqVwSzuOjMi41U2gTJ8Mr5fb0l3u4XoxWsyA2o56gvzA4gEx1SY0a0OdaQShI8IwmGmb8saCndVGP3X%2F0RaXSYf5C33JG7tTYwyi1EhVFt1yyf8lsdCKHS%2F6M54WzlMcS4P9HjxXgwrXNJ1KjedV6YaWetAzMCMCcjpi7Cbfn4rKT3kMWeikjGDVJ0uSCA%2FAWFYeAuk48ubaMmwyzlwEnbiQBil8IiqozATS85AgE8CNPaIBZsv5qxoxa1IDXbKseMD5QElXIxCCnYskS9vdGWn57%2BsCVswbTD0sdSDTlBeZ3rxlq4tmtkk%2FwM%2BSKtynnNGZ0Zhja1LwwhRa%2F2%2FdY5JbK6%2Bfz0bd4WkrLbVruU%2BKccHcfyjJAcB8FTPgINuiGWKKeWoN3wneVXEG2gfxzXVvAa7IbPupWxdt%2BFpjeoRT6puW%2FSzyv1bvg2qJkgXfP79Nc2cBSvJI1aLtjAr5fQLARtoSzj7Uo2B4vVt7JV88FffHTlxStaRlqL505nSqPB7KgrofbUohrUlGPpmyb7HMJaT3sMGOqUBv75vNetv1oAKG5yz8%2BYP2pOM2ibMoYqgcAWLJ5lh4Dg25EBKyqfSjtu0m8KGrpQRmH3dlF0kajRLqy2t97PqZsYfNe8b6Tnyp0EFxuwDbKJ2OTVvhQ%2FqUpN053zdrT7tq32w9jW1Qhs16LblLYYnq57D1tVxOVVT84h05uhOSOSwt%2BxyTOLSwSVAKnwBAEw6vdrs6qYAvt4OtdvvP96sdE7XKRfF&X-Amz-Signature=43840ddc8b90fb50d495eb602433a9345c1d0144ac10647adf826c2efe1bbc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXPTSUR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjaA14NBl%2FqTi9qCHb3BQRTzflz6lmKYc5TNh%2BfruQoAIgHzInmZ4K2H8%2Fz23BxOPlzi40aPzRsR9afc4IjIlbBmIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIR770h8lK1EbVPEEircA40irPSm4JBlEreD82CLrFvLktRRrs7g6T8j28ilvZUWoc%2FvNniiHBQ%2B%2Ff9K7zLvSlsiqGjoOmymAS1HZwc%2FL8Pq%2FOl5%2BbEOp6LRgMqVwSzuOjMi41U2gTJ8Mr5fb0l3u4XoxWsyA2o56gvzA4gEx1SY0a0OdaQShI8IwmGmb8saCndVGP3X%2F0RaXSYf5C33JG7tTYwyi1EhVFt1yyf8lsdCKHS%2F6M54WzlMcS4P9HjxXgwrXNJ1KjedV6YaWetAzMCMCcjpi7Cbfn4rKT3kMWeikjGDVJ0uSCA%2FAWFYeAuk48ubaMmwyzlwEnbiQBil8IiqozATS85AgE8CNPaIBZsv5qxoxa1IDXbKseMD5QElXIxCCnYskS9vdGWn57%2BsCVswbTD0sdSDTlBeZ3rxlq4tmtkk%2FwM%2BSKtynnNGZ0Zhja1LwwhRa%2F2%2FdY5JbK6%2Bfz0bd4WkrLbVruU%2BKccHcfyjJAcB8FTPgINuiGWKKeWoN3wneVXEG2gfxzXVvAa7IbPupWxdt%2BFpjeoRT6puW%2FSzyv1bvg2qJkgXfP79Nc2cBSvJI1aLtjAr5fQLARtoSzj7Uo2B4vVt7JV88FffHTlxStaRlqL505nSqPB7KgrofbUohrUlGPpmyb7HMJaT3sMGOqUBv75vNetv1oAKG5yz8%2BYP2pOM2ibMoYqgcAWLJ5lh4Dg25EBKyqfSjtu0m8KGrpQRmH3dlF0kajRLqy2t97PqZsYfNe8b6Tnyp0EFxuwDbKJ2OTVvhQ%2FqUpN053zdrT7tq32w9jW1Qhs16LblLYYnq57D1tVxOVVT84h05uhOSOSwt%2BxyTOLSwSVAKnwBAEw6vdrs6qYAvt4OtdvvP96sdE7XKRfF&X-Amz-Signature=f2cb92732f05595ca40060e4db803f541da844a29ab70f5e0c05f330e56b6579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXPTSUR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjaA14NBl%2FqTi9qCHb3BQRTzflz6lmKYc5TNh%2BfruQoAIgHzInmZ4K2H8%2Fz23BxOPlzi40aPzRsR9afc4IjIlbBmIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIR770h8lK1EbVPEEircA40irPSm4JBlEreD82CLrFvLktRRrs7g6T8j28ilvZUWoc%2FvNniiHBQ%2B%2Ff9K7zLvSlsiqGjoOmymAS1HZwc%2FL8Pq%2FOl5%2BbEOp6LRgMqVwSzuOjMi41U2gTJ8Mr5fb0l3u4XoxWsyA2o56gvzA4gEx1SY0a0OdaQShI8IwmGmb8saCndVGP3X%2F0RaXSYf5C33JG7tTYwyi1EhVFt1yyf8lsdCKHS%2F6M54WzlMcS4P9HjxXgwrXNJ1KjedV6YaWetAzMCMCcjpi7Cbfn4rKT3kMWeikjGDVJ0uSCA%2FAWFYeAuk48ubaMmwyzlwEnbiQBil8IiqozATS85AgE8CNPaIBZsv5qxoxa1IDXbKseMD5QElXIxCCnYskS9vdGWn57%2BsCVswbTD0sdSDTlBeZ3rxlq4tmtkk%2FwM%2BSKtynnNGZ0Zhja1LwwhRa%2F2%2FdY5JbK6%2Bfz0bd4WkrLbVruU%2BKccHcfyjJAcB8FTPgINuiGWKKeWoN3wneVXEG2gfxzXVvAa7IbPupWxdt%2BFpjeoRT6puW%2FSzyv1bvg2qJkgXfP79Nc2cBSvJI1aLtjAr5fQLARtoSzj7Uo2B4vVt7JV88FffHTlxStaRlqL505nSqPB7KgrofbUohrUlGPpmyb7HMJaT3sMGOqUBv75vNetv1oAKG5yz8%2BYP2pOM2ibMoYqgcAWLJ5lh4Dg25EBKyqfSjtu0m8KGrpQRmH3dlF0kajRLqy2t97PqZsYfNe8b6Tnyp0EFxuwDbKJ2OTVvhQ%2FqUpN053zdrT7tq32w9jW1Qhs16LblLYYnq57D1tVxOVVT84h05uhOSOSwt%2BxyTOLSwSVAKnwBAEw6vdrs6qYAvt4OtdvvP96sdE7XKRfF&X-Amz-Signature=d9f1a36dbe7b1fab1c01e7b80c197c2e637858a8402e7e9c636d292464aeefeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
