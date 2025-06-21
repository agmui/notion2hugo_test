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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DBNYGX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBSHuq5nCrnl3NLStJAXD1uA5U1xWCgSva7ppnaepi9AiBx2r%2Fw3mcokzEu96GZlPSHkRQ2J4JPaoJQxGI37uE%2BrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAv%2B4iWN5HZq1mIXKtwDvXPQX%2FYK3rJBerN2iFjX7gtUZCCbJp6G8%2F2FBUC0%2FSqGYQ%2BUTjWsgLG6i2Jk6XjaiBy9pPCFgFe1v9cdKSVjPRFVJiQybuHu0iIQlE46Ff5mI77oMwIWMvryNmSyUOZj6HdSHtTV28tOx7fNSEQIQPoJWl32Dqr6SCqz%2BoPifHLM%2FH5OODR32IqSPbPAU4WRDNBlIgqr3ZKjOD1m%2FVbUNUfhp8DMHSRglGT%2BsGF%2FeWDFYIswErZbbxNdhYapUhYek9VF7m%2BZPoqu8RxSq48467KmH5isSKbs2Y0agUMYPIIFGOz9TMoUB%2BKMfz8kYZjNSy7UrAqf4m0gg1HAKXDPvlOpWWgZoTVYskdQ4oPpsZxFEdv2yOXAg%2B%2FsYN7gomMIcY%2Ft9vhpkmf%2FUmhpGQCXM3gbkGP4Fh1qTY5VcJN8EIBKfCeonTSxN2wjifaytfWi%2BkhcSqDoW9LLphApi%2BJD421SPPT%2B0YYRahV1%2B8TU12vrPxEyGTldiHCmbRJpARVW2fEmiqfJGM8X3fJGFxyhQRJbJC329ouVTsmrGpKvUGSiD9nVD%2BAFrPfnPb4HiSuSpoKiesGXs7SJwsm4zsiNgAMjRKgJ5B4Rfw5Mm%2BwZ8sebJt59%2F%2BfoWOK2ITAwg4%2FbwgY6pgFIm06R5VusgGmY656TSYeS3EBzMZ%2FpsY8fGXmOh%2BXI7NfZHdemBCQCj%2Fi9JupyUYRhgK2ojn7niLECFPHxbVPghm9RloFBxBLd8poiSqfMFDEQkloL0bfICdJxqzf3I5hA1nlZGcYDkAEgXf96lFHz%2BsaJOiDDXXGrr8xmaF%2FvdlOrEJiCqaeAonauXks2Z1bYXeugCmxNzyJAPcboo%2Fq2SUOhoNPh&X-Amz-Signature=96121e65d25e00b8db67bddeb7ab72310932c57bc8816d41e4d7af7f81183faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DBNYGX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBSHuq5nCrnl3NLStJAXD1uA5U1xWCgSva7ppnaepi9AiBx2r%2Fw3mcokzEu96GZlPSHkRQ2J4JPaoJQxGI37uE%2BrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAv%2B4iWN5HZq1mIXKtwDvXPQX%2FYK3rJBerN2iFjX7gtUZCCbJp6G8%2F2FBUC0%2FSqGYQ%2BUTjWsgLG6i2Jk6XjaiBy9pPCFgFe1v9cdKSVjPRFVJiQybuHu0iIQlE46Ff5mI77oMwIWMvryNmSyUOZj6HdSHtTV28tOx7fNSEQIQPoJWl32Dqr6SCqz%2BoPifHLM%2FH5OODR32IqSPbPAU4WRDNBlIgqr3ZKjOD1m%2FVbUNUfhp8DMHSRglGT%2BsGF%2FeWDFYIswErZbbxNdhYapUhYek9VF7m%2BZPoqu8RxSq48467KmH5isSKbs2Y0agUMYPIIFGOz9TMoUB%2BKMfz8kYZjNSy7UrAqf4m0gg1HAKXDPvlOpWWgZoTVYskdQ4oPpsZxFEdv2yOXAg%2B%2FsYN7gomMIcY%2Ft9vhpkmf%2FUmhpGQCXM3gbkGP4Fh1qTY5VcJN8EIBKfCeonTSxN2wjifaytfWi%2BkhcSqDoW9LLphApi%2BJD421SPPT%2B0YYRahV1%2B8TU12vrPxEyGTldiHCmbRJpARVW2fEmiqfJGM8X3fJGFxyhQRJbJC329ouVTsmrGpKvUGSiD9nVD%2BAFrPfnPb4HiSuSpoKiesGXs7SJwsm4zsiNgAMjRKgJ5B4Rfw5Mm%2BwZ8sebJt59%2F%2BfoWOK2ITAwg4%2FbwgY6pgFIm06R5VusgGmY656TSYeS3EBzMZ%2FpsY8fGXmOh%2BXI7NfZHdemBCQCj%2Fi9JupyUYRhgK2ojn7niLECFPHxbVPghm9RloFBxBLd8poiSqfMFDEQkloL0bfICdJxqzf3I5hA1nlZGcYDkAEgXf96lFHz%2BsaJOiDDXXGrr8xmaF%2FvdlOrEJiCqaeAonauXks2Z1bYXeugCmxNzyJAPcboo%2Fq2SUOhoNPh&X-Amz-Signature=3f17a7eb049985a006069dbe6d5b3f16b996e53f321e58ed29b623194004085c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DBNYGX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBSHuq5nCrnl3NLStJAXD1uA5U1xWCgSva7ppnaepi9AiBx2r%2Fw3mcokzEu96GZlPSHkRQ2J4JPaoJQxGI37uE%2BrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAv%2B4iWN5HZq1mIXKtwDvXPQX%2FYK3rJBerN2iFjX7gtUZCCbJp6G8%2F2FBUC0%2FSqGYQ%2BUTjWsgLG6i2Jk6XjaiBy9pPCFgFe1v9cdKSVjPRFVJiQybuHu0iIQlE46Ff5mI77oMwIWMvryNmSyUOZj6HdSHtTV28tOx7fNSEQIQPoJWl32Dqr6SCqz%2BoPifHLM%2FH5OODR32IqSPbPAU4WRDNBlIgqr3ZKjOD1m%2FVbUNUfhp8DMHSRglGT%2BsGF%2FeWDFYIswErZbbxNdhYapUhYek9VF7m%2BZPoqu8RxSq48467KmH5isSKbs2Y0agUMYPIIFGOz9TMoUB%2BKMfz8kYZjNSy7UrAqf4m0gg1HAKXDPvlOpWWgZoTVYskdQ4oPpsZxFEdv2yOXAg%2B%2FsYN7gomMIcY%2Ft9vhpkmf%2FUmhpGQCXM3gbkGP4Fh1qTY5VcJN8EIBKfCeonTSxN2wjifaytfWi%2BkhcSqDoW9LLphApi%2BJD421SPPT%2B0YYRahV1%2B8TU12vrPxEyGTldiHCmbRJpARVW2fEmiqfJGM8X3fJGFxyhQRJbJC329ouVTsmrGpKvUGSiD9nVD%2BAFrPfnPb4HiSuSpoKiesGXs7SJwsm4zsiNgAMjRKgJ5B4Rfw5Mm%2BwZ8sebJt59%2F%2BfoWOK2ITAwg4%2FbwgY6pgFIm06R5VusgGmY656TSYeS3EBzMZ%2FpsY8fGXmOh%2BXI7NfZHdemBCQCj%2Fi9JupyUYRhgK2ojn7niLECFPHxbVPghm9RloFBxBLd8poiSqfMFDEQkloL0bfICdJxqzf3I5hA1nlZGcYDkAEgXf96lFHz%2BsaJOiDDXXGrr8xmaF%2FvdlOrEJiCqaeAonauXks2Z1bYXeugCmxNzyJAPcboo%2Fq2SUOhoNPh&X-Amz-Signature=2864387acdb34745f31f52cb349805d4c7b0e65ead62053a61a45d60a86d2e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DBNYGX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBSHuq5nCrnl3NLStJAXD1uA5U1xWCgSva7ppnaepi9AiBx2r%2Fw3mcokzEu96GZlPSHkRQ2J4JPaoJQxGI37uE%2BrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAv%2B4iWN5HZq1mIXKtwDvXPQX%2FYK3rJBerN2iFjX7gtUZCCbJp6G8%2F2FBUC0%2FSqGYQ%2BUTjWsgLG6i2Jk6XjaiBy9pPCFgFe1v9cdKSVjPRFVJiQybuHu0iIQlE46Ff5mI77oMwIWMvryNmSyUOZj6HdSHtTV28tOx7fNSEQIQPoJWl32Dqr6SCqz%2BoPifHLM%2FH5OODR32IqSPbPAU4WRDNBlIgqr3ZKjOD1m%2FVbUNUfhp8DMHSRglGT%2BsGF%2FeWDFYIswErZbbxNdhYapUhYek9VF7m%2BZPoqu8RxSq48467KmH5isSKbs2Y0agUMYPIIFGOz9TMoUB%2BKMfz8kYZjNSy7UrAqf4m0gg1HAKXDPvlOpWWgZoTVYskdQ4oPpsZxFEdv2yOXAg%2B%2FsYN7gomMIcY%2Ft9vhpkmf%2FUmhpGQCXM3gbkGP4Fh1qTY5VcJN8EIBKfCeonTSxN2wjifaytfWi%2BkhcSqDoW9LLphApi%2BJD421SPPT%2B0YYRahV1%2B8TU12vrPxEyGTldiHCmbRJpARVW2fEmiqfJGM8X3fJGFxyhQRJbJC329ouVTsmrGpKvUGSiD9nVD%2BAFrPfnPb4HiSuSpoKiesGXs7SJwsm4zsiNgAMjRKgJ5B4Rfw5Mm%2BwZ8sebJt59%2F%2BfoWOK2ITAwg4%2FbwgY6pgFIm06R5VusgGmY656TSYeS3EBzMZ%2FpsY8fGXmOh%2BXI7NfZHdemBCQCj%2Fi9JupyUYRhgK2ojn7niLECFPHxbVPghm9RloFBxBLd8poiSqfMFDEQkloL0bfICdJxqzf3I5hA1nlZGcYDkAEgXf96lFHz%2BsaJOiDDXXGrr8xmaF%2FvdlOrEJiCqaeAonauXks2Z1bYXeugCmxNzyJAPcboo%2Fq2SUOhoNPh&X-Amz-Signature=669ce7039eee8ec29e0714a2ac6fd0fcdcbf2c34be31a0dc40f40762157603d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DBNYGX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBSHuq5nCrnl3NLStJAXD1uA5U1xWCgSva7ppnaepi9AiBx2r%2Fw3mcokzEu96GZlPSHkRQ2J4JPaoJQxGI37uE%2BrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAv%2B4iWN5HZq1mIXKtwDvXPQX%2FYK3rJBerN2iFjX7gtUZCCbJp6G8%2F2FBUC0%2FSqGYQ%2BUTjWsgLG6i2Jk6XjaiBy9pPCFgFe1v9cdKSVjPRFVJiQybuHu0iIQlE46Ff5mI77oMwIWMvryNmSyUOZj6HdSHtTV28tOx7fNSEQIQPoJWl32Dqr6SCqz%2BoPifHLM%2FH5OODR32IqSPbPAU4WRDNBlIgqr3ZKjOD1m%2FVbUNUfhp8DMHSRglGT%2BsGF%2FeWDFYIswErZbbxNdhYapUhYek9VF7m%2BZPoqu8RxSq48467KmH5isSKbs2Y0agUMYPIIFGOz9TMoUB%2BKMfz8kYZjNSy7UrAqf4m0gg1HAKXDPvlOpWWgZoTVYskdQ4oPpsZxFEdv2yOXAg%2B%2FsYN7gomMIcY%2Ft9vhpkmf%2FUmhpGQCXM3gbkGP4Fh1qTY5VcJN8EIBKfCeonTSxN2wjifaytfWi%2BkhcSqDoW9LLphApi%2BJD421SPPT%2B0YYRahV1%2B8TU12vrPxEyGTldiHCmbRJpARVW2fEmiqfJGM8X3fJGFxyhQRJbJC329ouVTsmrGpKvUGSiD9nVD%2BAFrPfnPb4HiSuSpoKiesGXs7SJwsm4zsiNgAMjRKgJ5B4Rfw5Mm%2BwZ8sebJt59%2F%2BfoWOK2ITAwg4%2FbwgY6pgFIm06R5VusgGmY656TSYeS3EBzMZ%2FpsY8fGXmOh%2BXI7NfZHdemBCQCj%2Fi9JupyUYRhgK2ojn7niLECFPHxbVPghm9RloFBxBLd8poiSqfMFDEQkloL0bfICdJxqzf3I5hA1nlZGcYDkAEgXf96lFHz%2BsaJOiDDXXGrr8xmaF%2FvdlOrEJiCqaeAonauXks2Z1bYXeugCmxNzyJAPcboo%2Fq2SUOhoNPh&X-Amz-Signature=cbf7d1801068d8e8477d66601d7e45826f3ba7e8aef49d07317a0a40d345a2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7DBNYGX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBSHuq5nCrnl3NLStJAXD1uA5U1xWCgSva7ppnaepi9AiBx2r%2Fw3mcokzEu96GZlPSHkRQ2J4JPaoJQxGI37uE%2BrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAv%2B4iWN5HZq1mIXKtwDvXPQX%2FYK3rJBerN2iFjX7gtUZCCbJp6G8%2F2FBUC0%2FSqGYQ%2BUTjWsgLG6i2Jk6XjaiBy9pPCFgFe1v9cdKSVjPRFVJiQybuHu0iIQlE46Ff5mI77oMwIWMvryNmSyUOZj6HdSHtTV28tOx7fNSEQIQPoJWl32Dqr6SCqz%2BoPifHLM%2FH5OODR32IqSPbPAU4WRDNBlIgqr3ZKjOD1m%2FVbUNUfhp8DMHSRglGT%2BsGF%2FeWDFYIswErZbbxNdhYapUhYek9VF7m%2BZPoqu8RxSq48467KmH5isSKbs2Y0agUMYPIIFGOz9TMoUB%2BKMfz8kYZjNSy7UrAqf4m0gg1HAKXDPvlOpWWgZoTVYskdQ4oPpsZxFEdv2yOXAg%2B%2FsYN7gomMIcY%2Ft9vhpkmf%2FUmhpGQCXM3gbkGP4Fh1qTY5VcJN8EIBKfCeonTSxN2wjifaytfWi%2BkhcSqDoW9LLphApi%2BJD421SPPT%2B0YYRahV1%2B8TU12vrPxEyGTldiHCmbRJpARVW2fEmiqfJGM8X3fJGFxyhQRJbJC329ouVTsmrGpKvUGSiD9nVD%2BAFrPfnPb4HiSuSpoKiesGXs7SJwsm4zsiNgAMjRKgJ5B4Rfw5Mm%2BwZ8sebJt59%2F%2BfoWOK2ITAwg4%2FbwgY6pgFIm06R5VusgGmY656TSYeS3EBzMZ%2FpsY8fGXmOh%2BXI7NfZHdemBCQCj%2Fi9JupyUYRhgK2ojn7niLECFPHxbVPghm9RloFBxBLd8poiSqfMFDEQkloL0bfICdJxqzf3I5hA1nlZGcYDkAEgXf96lFHz%2BsaJOiDDXXGrr8xmaF%2FvdlOrEJiCqaeAonauXks2Z1bYXeugCmxNzyJAPcboo%2Fq2SUOhoNPh&X-Amz-Signature=ab35a1c3112b01e0d2e1eec3ce618452705681976808a0c4638cc3c6bedf25e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
