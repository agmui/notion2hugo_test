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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B76U2N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCa4c7RehavSNfWN107FHZ4KeMaHqf6gx4Gw%2BF%2FfrMKGgIgQSSXTpaPkHPYok2UZNOrQ1IJ%2F1feOvLXLx4cAHNVZ84q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJLKSCCr6LOZJ0wFPyrcA82%2By0X3AF%2F4SiXJQhZ1NmzRa1fvTDRCZDfRZoLY2jUJEXkPAxQEq52TZLonbSL8MxxFWkKT4gwyfbOt%2BycQ5TNYao5BRCdj4PrE5ZOiv%2BoLOSSKnE0zBvodGrzqWl3zKX6Y0Mied51YwNBoTIa7hJjBaBUIY9ZATHAk9Vmeks1Sx9f%2BF8PbtXiU1RKz8kdmIYGNHGucHD2x6QaB1vYcL9kt8tdVXKiiNCdxf3Rj9A%2BqIVib6WvhyhPgbHxWreB48tzmaYnj8SV%2BnjKNpsszKwi1kEJ%2B5tz2wQF6KokbGQadNO2nE8dFRsND7Zg97E%2BI0fox6MyzD1R6cvJ2UhbYKjduJvnrsf12BzUDGJAF58qf8wNNpj%2FlOfphnVK0O%2FH%2BIcSGagLk0LxAdYWOaIPH6iah9vfh6Nh4LcKSNVSMQMiebn2NMor1y7T0csm2Jpiy7%2BTz3%2F2EUXo4fwOdCknCqxs7Wvf5AXcK5e6UjuauDfq2p%2FjN1ORlcVk%2Bk7K2Yn1ir1mEMwerNR8GV%2FElCrtGVOL1EpeLC1Lz5MQ2bh9PcrsKJYiYzbo7%2BuGd7m96oCBUlxIWUkvAI2EAQUmI0gs7X%2FSH7gKZWzLO6PVagkWYE5qmAlV581UOHQtkrDnZMLDSlcEGOqUBfJvvnStZC3oU7zqP52gi3%2FCZeEA9osKv6oc8BNBFZvjYm5ZFIoBPsjbZyfo%2BQ2E6C%2FY7p6smz95C60urCnlaJTz64WCbopDV2ECjEWoMwI5ozO504pYVXXDrDzbp5rq8D18qwgfHHaVA9ZHw0%2Fw4F2tUaDujARZsAA6e0VYlWnOFmzjRIfHTt%2B4o2AqeKgH7mz%2BrfQY6F1CJjy90q2PA83c4wZRP&X-Amz-Signature=95ffabb6a0265ce6c4c9c75e657c6c499c5204af27a363ddb3c63ba8caaec214&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B76U2N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCa4c7RehavSNfWN107FHZ4KeMaHqf6gx4Gw%2BF%2FfrMKGgIgQSSXTpaPkHPYok2UZNOrQ1IJ%2F1feOvLXLx4cAHNVZ84q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJLKSCCr6LOZJ0wFPyrcA82%2By0X3AF%2F4SiXJQhZ1NmzRa1fvTDRCZDfRZoLY2jUJEXkPAxQEq52TZLonbSL8MxxFWkKT4gwyfbOt%2BycQ5TNYao5BRCdj4PrE5ZOiv%2BoLOSSKnE0zBvodGrzqWl3zKX6Y0Mied51YwNBoTIa7hJjBaBUIY9ZATHAk9Vmeks1Sx9f%2BF8PbtXiU1RKz8kdmIYGNHGucHD2x6QaB1vYcL9kt8tdVXKiiNCdxf3Rj9A%2BqIVib6WvhyhPgbHxWreB48tzmaYnj8SV%2BnjKNpsszKwi1kEJ%2B5tz2wQF6KokbGQadNO2nE8dFRsND7Zg97E%2BI0fox6MyzD1R6cvJ2UhbYKjduJvnrsf12BzUDGJAF58qf8wNNpj%2FlOfphnVK0O%2FH%2BIcSGagLk0LxAdYWOaIPH6iah9vfh6Nh4LcKSNVSMQMiebn2NMor1y7T0csm2Jpiy7%2BTz3%2F2EUXo4fwOdCknCqxs7Wvf5AXcK5e6UjuauDfq2p%2FjN1ORlcVk%2Bk7K2Yn1ir1mEMwerNR8GV%2FElCrtGVOL1EpeLC1Lz5MQ2bh9PcrsKJYiYzbo7%2BuGd7m96oCBUlxIWUkvAI2EAQUmI0gs7X%2FSH7gKZWzLO6PVagkWYE5qmAlV581UOHQtkrDnZMLDSlcEGOqUBfJvvnStZC3oU7zqP52gi3%2FCZeEA9osKv6oc8BNBFZvjYm5ZFIoBPsjbZyfo%2BQ2E6C%2FY7p6smz95C60urCnlaJTz64WCbopDV2ECjEWoMwI5ozO504pYVXXDrDzbp5rq8D18qwgfHHaVA9ZHw0%2Fw4F2tUaDujARZsAA6e0VYlWnOFmzjRIfHTt%2B4o2AqeKgH7mz%2BrfQY6F1CJjy90q2PA83c4wZRP&X-Amz-Signature=1afec1bc8b0655f43f1ed32948c476cfae4c1788e9e4836e51641174fa82c78c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B76U2N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCa4c7RehavSNfWN107FHZ4KeMaHqf6gx4Gw%2BF%2FfrMKGgIgQSSXTpaPkHPYok2UZNOrQ1IJ%2F1feOvLXLx4cAHNVZ84q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJLKSCCr6LOZJ0wFPyrcA82%2By0X3AF%2F4SiXJQhZ1NmzRa1fvTDRCZDfRZoLY2jUJEXkPAxQEq52TZLonbSL8MxxFWkKT4gwyfbOt%2BycQ5TNYao5BRCdj4PrE5ZOiv%2BoLOSSKnE0zBvodGrzqWl3zKX6Y0Mied51YwNBoTIa7hJjBaBUIY9ZATHAk9Vmeks1Sx9f%2BF8PbtXiU1RKz8kdmIYGNHGucHD2x6QaB1vYcL9kt8tdVXKiiNCdxf3Rj9A%2BqIVib6WvhyhPgbHxWreB48tzmaYnj8SV%2BnjKNpsszKwi1kEJ%2B5tz2wQF6KokbGQadNO2nE8dFRsND7Zg97E%2BI0fox6MyzD1R6cvJ2UhbYKjduJvnrsf12BzUDGJAF58qf8wNNpj%2FlOfphnVK0O%2FH%2BIcSGagLk0LxAdYWOaIPH6iah9vfh6Nh4LcKSNVSMQMiebn2NMor1y7T0csm2Jpiy7%2BTz3%2F2EUXo4fwOdCknCqxs7Wvf5AXcK5e6UjuauDfq2p%2FjN1ORlcVk%2Bk7K2Yn1ir1mEMwerNR8GV%2FElCrtGVOL1EpeLC1Lz5MQ2bh9PcrsKJYiYzbo7%2BuGd7m96oCBUlxIWUkvAI2EAQUmI0gs7X%2FSH7gKZWzLO6PVagkWYE5qmAlV581UOHQtkrDnZMLDSlcEGOqUBfJvvnStZC3oU7zqP52gi3%2FCZeEA9osKv6oc8BNBFZvjYm5ZFIoBPsjbZyfo%2BQ2E6C%2FY7p6smz95C60urCnlaJTz64WCbopDV2ECjEWoMwI5ozO504pYVXXDrDzbp5rq8D18qwgfHHaVA9ZHw0%2Fw4F2tUaDujARZsAA6e0VYlWnOFmzjRIfHTt%2B4o2AqeKgH7mz%2BrfQY6F1CJjy90q2PA83c4wZRP&X-Amz-Signature=ef3499d250288500d25bcb954e11bc79efaf9a618667d3782bd6f68914248694&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B76U2N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCa4c7RehavSNfWN107FHZ4KeMaHqf6gx4Gw%2BF%2FfrMKGgIgQSSXTpaPkHPYok2UZNOrQ1IJ%2F1feOvLXLx4cAHNVZ84q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJLKSCCr6LOZJ0wFPyrcA82%2By0X3AF%2F4SiXJQhZ1NmzRa1fvTDRCZDfRZoLY2jUJEXkPAxQEq52TZLonbSL8MxxFWkKT4gwyfbOt%2BycQ5TNYao5BRCdj4PrE5ZOiv%2BoLOSSKnE0zBvodGrzqWl3zKX6Y0Mied51YwNBoTIa7hJjBaBUIY9ZATHAk9Vmeks1Sx9f%2BF8PbtXiU1RKz8kdmIYGNHGucHD2x6QaB1vYcL9kt8tdVXKiiNCdxf3Rj9A%2BqIVib6WvhyhPgbHxWreB48tzmaYnj8SV%2BnjKNpsszKwi1kEJ%2B5tz2wQF6KokbGQadNO2nE8dFRsND7Zg97E%2BI0fox6MyzD1R6cvJ2UhbYKjduJvnrsf12BzUDGJAF58qf8wNNpj%2FlOfphnVK0O%2FH%2BIcSGagLk0LxAdYWOaIPH6iah9vfh6Nh4LcKSNVSMQMiebn2NMor1y7T0csm2Jpiy7%2BTz3%2F2EUXo4fwOdCknCqxs7Wvf5AXcK5e6UjuauDfq2p%2FjN1ORlcVk%2Bk7K2Yn1ir1mEMwerNR8GV%2FElCrtGVOL1EpeLC1Lz5MQ2bh9PcrsKJYiYzbo7%2BuGd7m96oCBUlxIWUkvAI2EAQUmI0gs7X%2FSH7gKZWzLO6PVagkWYE5qmAlV581UOHQtkrDnZMLDSlcEGOqUBfJvvnStZC3oU7zqP52gi3%2FCZeEA9osKv6oc8BNBFZvjYm5ZFIoBPsjbZyfo%2BQ2E6C%2FY7p6smz95C60urCnlaJTz64WCbopDV2ECjEWoMwI5ozO504pYVXXDrDzbp5rq8D18qwgfHHaVA9ZHw0%2Fw4F2tUaDujARZsAA6e0VYlWnOFmzjRIfHTt%2B4o2AqeKgH7mz%2BrfQY6F1CJjy90q2PA83c4wZRP&X-Amz-Signature=601e6c4669b3f8d35f392a6c8be7a0d9d0b87d7f09a6b12968d039559da97a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B76U2N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCa4c7RehavSNfWN107FHZ4KeMaHqf6gx4Gw%2BF%2FfrMKGgIgQSSXTpaPkHPYok2UZNOrQ1IJ%2F1feOvLXLx4cAHNVZ84q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJLKSCCr6LOZJ0wFPyrcA82%2By0X3AF%2F4SiXJQhZ1NmzRa1fvTDRCZDfRZoLY2jUJEXkPAxQEq52TZLonbSL8MxxFWkKT4gwyfbOt%2BycQ5TNYao5BRCdj4PrE5ZOiv%2BoLOSSKnE0zBvodGrzqWl3zKX6Y0Mied51YwNBoTIa7hJjBaBUIY9ZATHAk9Vmeks1Sx9f%2BF8PbtXiU1RKz8kdmIYGNHGucHD2x6QaB1vYcL9kt8tdVXKiiNCdxf3Rj9A%2BqIVib6WvhyhPgbHxWreB48tzmaYnj8SV%2BnjKNpsszKwi1kEJ%2B5tz2wQF6KokbGQadNO2nE8dFRsND7Zg97E%2BI0fox6MyzD1R6cvJ2UhbYKjduJvnrsf12BzUDGJAF58qf8wNNpj%2FlOfphnVK0O%2FH%2BIcSGagLk0LxAdYWOaIPH6iah9vfh6Nh4LcKSNVSMQMiebn2NMor1y7T0csm2Jpiy7%2BTz3%2F2EUXo4fwOdCknCqxs7Wvf5AXcK5e6UjuauDfq2p%2FjN1ORlcVk%2Bk7K2Yn1ir1mEMwerNR8GV%2FElCrtGVOL1EpeLC1Lz5MQ2bh9PcrsKJYiYzbo7%2BuGd7m96oCBUlxIWUkvAI2EAQUmI0gs7X%2FSH7gKZWzLO6PVagkWYE5qmAlV581UOHQtkrDnZMLDSlcEGOqUBfJvvnStZC3oU7zqP52gi3%2FCZeEA9osKv6oc8BNBFZvjYm5ZFIoBPsjbZyfo%2BQ2E6C%2FY7p6smz95C60urCnlaJTz64WCbopDV2ECjEWoMwI5ozO504pYVXXDrDzbp5rq8D18qwgfHHaVA9ZHw0%2Fw4F2tUaDujARZsAA6e0VYlWnOFmzjRIfHTt%2B4o2AqeKgH7mz%2BrfQY6F1CJjy90q2PA83c4wZRP&X-Amz-Signature=84755c01757ffdbf65374d325c6062fb9e4804158cb00f1adc42d1b65ea4b39c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4B76U2N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCa4c7RehavSNfWN107FHZ4KeMaHqf6gx4Gw%2BF%2FfrMKGgIgQSSXTpaPkHPYok2UZNOrQ1IJ%2F1feOvLXLx4cAHNVZ84q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJLKSCCr6LOZJ0wFPyrcA82%2By0X3AF%2F4SiXJQhZ1NmzRa1fvTDRCZDfRZoLY2jUJEXkPAxQEq52TZLonbSL8MxxFWkKT4gwyfbOt%2BycQ5TNYao5BRCdj4PrE5ZOiv%2BoLOSSKnE0zBvodGrzqWl3zKX6Y0Mied51YwNBoTIa7hJjBaBUIY9ZATHAk9Vmeks1Sx9f%2BF8PbtXiU1RKz8kdmIYGNHGucHD2x6QaB1vYcL9kt8tdVXKiiNCdxf3Rj9A%2BqIVib6WvhyhPgbHxWreB48tzmaYnj8SV%2BnjKNpsszKwi1kEJ%2B5tz2wQF6KokbGQadNO2nE8dFRsND7Zg97E%2BI0fox6MyzD1R6cvJ2UhbYKjduJvnrsf12BzUDGJAF58qf8wNNpj%2FlOfphnVK0O%2FH%2BIcSGagLk0LxAdYWOaIPH6iah9vfh6Nh4LcKSNVSMQMiebn2NMor1y7T0csm2Jpiy7%2BTz3%2F2EUXo4fwOdCknCqxs7Wvf5AXcK5e6UjuauDfq2p%2FjN1ORlcVk%2Bk7K2Yn1ir1mEMwerNR8GV%2FElCrtGVOL1EpeLC1Lz5MQ2bh9PcrsKJYiYzbo7%2BuGd7m96oCBUlxIWUkvAI2EAQUmI0gs7X%2FSH7gKZWzLO6PVagkWYE5qmAlV581UOHQtkrDnZMLDSlcEGOqUBfJvvnStZC3oU7zqP52gi3%2FCZeEA9osKv6oc8BNBFZvjYm5ZFIoBPsjbZyfo%2BQ2E6C%2FY7p6smz95C60urCnlaJTz64WCbopDV2ECjEWoMwI5ozO504pYVXXDrDzbp5rq8D18qwgfHHaVA9ZHw0%2Fw4F2tUaDujARZsAA6e0VYlWnOFmzjRIfHTt%2B4o2AqeKgH7mz%2BrfQY6F1CJjy90q2PA83c4wZRP&X-Amz-Signature=ed57ece9987e4bbac912329a856005fafe456ef43235b3e995ac14cb2d95d371&X-Amz-SignedHeaders=host&x-id=GetObject)
