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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKYWND6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDijtm830gGjkRPzmy8rh9fjRgexiVjWJT13clb34DxAiEA1LiTjNnCwVLSWqmH4w%2B1lsyAuH6lkwcfX7ZX3iDn3Igq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDfk5IdV4xA7QVEtdSrcA%2FekEYaHGJ1XQB3wCtB27BynF9t3o9%2BgzcBgWardJvcsT8d5IDKNgwYTxJQTCfmJahCA%2FhscLqZi1yobH%2BCkk6Eueoe4hdW%2F5vMHJojmGBvHLZdvBRYInk%2Fz%2FIJTgnt3PBpBOzDqlGIBQwhIuiPCyMv26FaU%2BgrGvt2cRzSHpVE5MpCb7%2BB2DzvuvZxQiB0mObQHH2QudvEoujdVQ5OvJkjfgjAwJZlKZF62pRjAjgx3Wcg68tFcjblO%2Fn9BqLW%2BFwxD34LtSaQrjigH0j2U2WbSKx9DcxSdH9SIlAO%2F9tqB6rXYY5LXkEQ4d8CyBgCYY0CtE2Set8qERKjx6GIUA9CuQ%2Bn58vdFtka6xXXCIXVMIB7YDOM%2Bj83vfI28yZi%2BztS53sMkXlhpFLxa1hFZOz7qb0mcmRnbM7D0zqtfbpxyyFu6CgtI2M9%2BJDLOdC9W5EIbDdcTmPu5bhWCEaeMuWgYfI13XIZtnb3HxNB9Up5rk00WGxS7Lm%2F5Zt9WIts%2BhLTxV30yvvVrH6SeRTdF5r0azcLbsXQDsXNvXDA8gIIWtSgXbftBAeQzO67BjkIPSiqffcy3RdbGyHD3nc4y9KCIVYyc%2F7ChyyqK5oMrBcYed4y1BLczkMQgltMpMPafoL8GOqUBalbWKVZDwMSGJliL9M%2FJe7RYs3u4GzdhBzXsb6e1Y%2BrPN1Yqv68xbEtS2o8OOjTHjR0YP%2BmN41NRo1ruhjmWmp2KXsizL%2FWQebi646iOFOVlhwWeYutDBjI4ax6%2Bf7a8Ocf8oy9kanb92qanzq%2FLQH7IuMoIkddx9YgcewldiNLPS0gWJD31qBzB%2FbTJvGnE%2F93T%2FtdHdrYFJEPduv%2BBG3oms%2FSr&X-Amz-Signature=85c6b2cfe48af21a92dcbbc5fb0d70e60753f987a7e35e57444e1a33c14319fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKYWND6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDijtm830gGjkRPzmy8rh9fjRgexiVjWJT13clb34DxAiEA1LiTjNnCwVLSWqmH4w%2B1lsyAuH6lkwcfX7ZX3iDn3Igq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDfk5IdV4xA7QVEtdSrcA%2FekEYaHGJ1XQB3wCtB27BynF9t3o9%2BgzcBgWardJvcsT8d5IDKNgwYTxJQTCfmJahCA%2FhscLqZi1yobH%2BCkk6Eueoe4hdW%2F5vMHJojmGBvHLZdvBRYInk%2Fz%2FIJTgnt3PBpBOzDqlGIBQwhIuiPCyMv26FaU%2BgrGvt2cRzSHpVE5MpCb7%2BB2DzvuvZxQiB0mObQHH2QudvEoujdVQ5OvJkjfgjAwJZlKZF62pRjAjgx3Wcg68tFcjblO%2Fn9BqLW%2BFwxD34LtSaQrjigH0j2U2WbSKx9DcxSdH9SIlAO%2F9tqB6rXYY5LXkEQ4d8CyBgCYY0CtE2Set8qERKjx6GIUA9CuQ%2Bn58vdFtka6xXXCIXVMIB7YDOM%2Bj83vfI28yZi%2BztS53sMkXlhpFLxa1hFZOz7qb0mcmRnbM7D0zqtfbpxyyFu6CgtI2M9%2BJDLOdC9W5EIbDdcTmPu5bhWCEaeMuWgYfI13XIZtnb3HxNB9Up5rk00WGxS7Lm%2F5Zt9WIts%2BhLTxV30yvvVrH6SeRTdF5r0azcLbsXQDsXNvXDA8gIIWtSgXbftBAeQzO67BjkIPSiqffcy3RdbGyHD3nc4y9KCIVYyc%2F7ChyyqK5oMrBcYed4y1BLczkMQgltMpMPafoL8GOqUBalbWKVZDwMSGJliL9M%2FJe7RYs3u4GzdhBzXsb6e1Y%2BrPN1Yqv68xbEtS2o8OOjTHjR0YP%2BmN41NRo1ruhjmWmp2KXsizL%2FWQebi646iOFOVlhwWeYutDBjI4ax6%2Bf7a8Ocf8oy9kanb92qanzq%2FLQH7IuMoIkddx9YgcewldiNLPS0gWJD31qBzB%2FbTJvGnE%2F93T%2FtdHdrYFJEPduv%2BBG3oms%2FSr&X-Amz-Signature=d26c9a999f51b76872a072e2fb0dfbd3fa5195a52349724559f165488bbf67ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKYWND6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDijtm830gGjkRPzmy8rh9fjRgexiVjWJT13clb34DxAiEA1LiTjNnCwVLSWqmH4w%2B1lsyAuH6lkwcfX7ZX3iDn3Igq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDfk5IdV4xA7QVEtdSrcA%2FekEYaHGJ1XQB3wCtB27BynF9t3o9%2BgzcBgWardJvcsT8d5IDKNgwYTxJQTCfmJahCA%2FhscLqZi1yobH%2BCkk6Eueoe4hdW%2F5vMHJojmGBvHLZdvBRYInk%2Fz%2FIJTgnt3PBpBOzDqlGIBQwhIuiPCyMv26FaU%2BgrGvt2cRzSHpVE5MpCb7%2BB2DzvuvZxQiB0mObQHH2QudvEoujdVQ5OvJkjfgjAwJZlKZF62pRjAjgx3Wcg68tFcjblO%2Fn9BqLW%2BFwxD34LtSaQrjigH0j2U2WbSKx9DcxSdH9SIlAO%2F9tqB6rXYY5LXkEQ4d8CyBgCYY0CtE2Set8qERKjx6GIUA9CuQ%2Bn58vdFtka6xXXCIXVMIB7YDOM%2Bj83vfI28yZi%2BztS53sMkXlhpFLxa1hFZOz7qb0mcmRnbM7D0zqtfbpxyyFu6CgtI2M9%2BJDLOdC9W5EIbDdcTmPu5bhWCEaeMuWgYfI13XIZtnb3HxNB9Up5rk00WGxS7Lm%2F5Zt9WIts%2BhLTxV30yvvVrH6SeRTdF5r0azcLbsXQDsXNvXDA8gIIWtSgXbftBAeQzO67BjkIPSiqffcy3RdbGyHD3nc4y9KCIVYyc%2F7ChyyqK5oMrBcYed4y1BLczkMQgltMpMPafoL8GOqUBalbWKVZDwMSGJliL9M%2FJe7RYs3u4GzdhBzXsb6e1Y%2BrPN1Yqv68xbEtS2o8OOjTHjR0YP%2BmN41NRo1ruhjmWmp2KXsizL%2FWQebi646iOFOVlhwWeYutDBjI4ax6%2Bf7a8Ocf8oy9kanb92qanzq%2FLQH7IuMoIkddx9YgcewldiNLPS0gWJD31qBzB%2FbTJvGnE%2F93T%2FtdHdrYFJEPduv%2BBG3oms%2FSr&X-Amz-Signature=a68e5e1b17e650352ce2a2030cc2bfe0c4972872b1c84d8d389484f9629a859e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKYWND6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDijtm830gGjkRPzmy8rh9fjRgexiVjWJT13clb34DxAiEA1LiTjNnCwVLSWqmH4w%2B1lsyAuH6lkwcfX7ZX3iDn3Igq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDfk5IdV4xA7QVEtdSrcA%2FekEYaHGJ1XQB3wCtB27BynF9t3o9%2BgzcBgWardJvcsT8d5IDKNgwYTxJQTCfmJahCA%2FhscLqZi1yobH%2BCkk6Eueoe4hdW%2F5vMHJojmGBvHLZdvBRYInk%2Fz%2FIJTgnt3PBpBOzDqlGIBQwhIuiPCyMv26FaU%2BgrGvt2cRzSHpVE5MpCb7%2BB2DzvuvZxQiB0mObQHH2QudvEoujdVQ5OvJkjfgjAwJZlKZF62pRjAjgx3Wcg68tFcjblO%2Fn9BqLW%2BFwxD34LtSaQrjigH0j2U2WbSKx9DcxSdH9SIlAO%2F9tqB6rXYY5LXkEQ4d8CyBgCYY0CtE2Set8qERKjx6GIUA9CuQ%2Bn58vdFtka6xXXCIXVMIB7YDOM%2Bj83vfI28yZi%2BztS53sMkXlhpFLxa1hFZOz7qb0mcmRnbM7D0zqtfbpxyyFu6CgtI2M9%2BJDLOdC9W5EIbDdcTmPu5bhWCEaeMuWgYfI13XIZtnb3HxNB9Up5rk00WGxS7Lm%2F5Zt9WIts%2BhLTxV30yvvVrH6SeRTdF5r0azcLbsXQDsXNvXDA8gIIWtSgXbftBAeQzO67BjkIPSiqffcy3RdbGyHD3nc4y9KCIVYyc%2F7ChyyqK5oMrBcYed4y1BLczkMQgltMpMPafoL8GOqUBalbWKVZDwMSGJliL9M%2FJe7RYs3u4GzdhBzXsb6e1Y%2BrPN1Yqv68xbEtS2o8OOjTHjR0YP%2BmN41NRo1ruhjmWmp2KXsizL%2FWQebi646iOFOVlhwWeYutDBjI4ax6%2Bf7a8Ocf8oy9kanb92qanzq%2FLQH7IuMoIkddx9YgcewldiNLPS0gWJD31qBzB%2FbTJvGnE%2F93T%2FtdHdrYFJEPduv%2BBG3oms%2FSr&X-Amz-Signature=1a9ff86e0dc9bc3652871e71801e9a89da79e7866219f5e64d9653cdb48fc1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKYWND6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDijtm830gGjkRPzmy8rh9fjRgexiVjWJT13clb34DxAiEA1LiTjNnCwVLSWqmH4w%2B1lsyAuH6lkwcfX7ZX3iDn3Igq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDfk5IdV4xA7QVEtdSrcA%2FekEYaHGJ1XQB3wCtB27BynF9t3o9%2BgzcBgWardJvcsT8d5IDKNgwYTxJQTCfmJahCA%2FhscLqZi1yobH%2BCkk6Eueoe4hdW%2F5vMHJojmGBvHLZdvBRYInk%2Fz%2FIJTgnt3PBpBOzDqlGIBQwhIuiPCyMv26FaU%2BgrGvt2cRzSHpVE5MpCb7%2BB2DzvuvZxQiB0mObQHH2QudvEoujdVQ5OvJkjfgjAwJZlKZF62pRjAjgx3Wcg68tFcjblO%2Fn9BqLW%2BFwxD34LtSaQrjigH0j2U2WbSKx9DcxSdH9SIlAO%2F9tqB6rXYY5LXkEQ4d8CyBgCYY0CtE2Set8qERKjx6GIUA9CuQ%2Bn58vdFtka6xXXCIXVMIB7YDOM%2Bj83vfI28yZi%2BztS53sMkXlhpFLxa1hFZOz7qb0mcmRnbM7D0zqtfbpxyyFu6CgtI2M9%2BJDLOdC9W5EIbDdcTmPu5bhWCEaeMuWgYfI13XIZtnb3HxNB9Up5rk00WGxS7Lm%2F5Zt9WIts%2BhLTxV30yvvVrH6SeRTdF5r0azcLbsXQDsXNvXDA8gIIWtSgXbftBAeQzO67BjkIPSiqffcy3RdbGyHD3nc4y9KCIVYyc%2F7ChyyqK5oMrBcYed4y1BLczkMQgltMpMPafoL8GOqUBalbWKVZDwMSGJliL9M%2FJe7RYs3u4GzdhBzXsb6e1Y%2BrPN1Yqv68xbEtS2o8OOjTHjR0YP%2BmN41NRo1ruhjmWmp2KXsizL%2FWQebi646iOFOVlhwWeYutDBjI4ax6%2Bf7a8Ocf8oy9kanb92qanzq%2FLQH7IuMoIkddx9YgcewldiNLPS0gWJD31qBzB%2FbTJvGnE%2F93T%2FtdHdrYFJEPduv%2BBG3oms%2FSr&X-Amz-Signature=985eda83b1d034e7d61513aab0db6817d1b99c0d595617f1d4bf1c72503f4d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKYWND6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHDijtm830gGjkRPzmy8rh9fjRgexiVjWJT13clb34DxAiEA1LiTjNnCwVLSWqmH4w%2B1lsyAuH6lkwcfX7ZX3iDn3Igq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDfk5IdV4xA7QVEtdSrcA%2FekEYaHGJ1XQB3wCtB27BynF9t3o9%2BgzcBgWardJvcsT8d5IDKNgwYTxJQTCfmJahCA%2FhscLqZi1yobH%2BCkk6Eueoe4hdW%2F5vMHJojmGBvHLZdvBRYInk%2Fz%2FIJTgnt3PBpBOzDqlGIBQwhIuiPCyMv26FaU%2BgrGvt2cRzSHpVE5MpCb7%2BB2DzvuvZxQiB0mObQHH2QudvEoujdVQ5OvJkjfgjAwJZlKZF62pRjAjgx3Wcg68tFcjblO%2Fn9BqLW%2BFwxD34LtSaQrjigH0j2U2WbSKx9DcxSdH9SIlAO%2F9tqB6rXYY5LXkEQ4d8CyBgCYY0CtE2Set8qERKjx6GIUA9CuQ%2Bn58vdFtka6xXXCIXVMIB7YDOM%2Bj83vfI28yZi%2BztS53sMkXlhpFLxa1hFZOz7qb0mcmRnbM7D0zqtfbpxyyFu6CgtI2M9%2BJDLOdC9W5EIbDdcTmPu5bhWCEaeMuWgYfI13XIZtnb3HxNB9Up5rk00WGxS7Lm%2F5Zt9WIts%2BhLTxV30yvvVrH6SeRTdF5r0azcLbsXQDsXNvXDA8gIIWtSgXbftBAeQzO67BjkIPSiqffcy3RdbGyHD3nc4y9KCIVYyc%2F7ChyyqK5oMrBcYed4y1BLczkMQgltMpMPafoL8GOqUBalbWKVZDwMSGJliL9M%2FJe7RYs3u4GzdhBzXsb6e1Y%2BrPN1Yqv68xbEtS2o8OOjTHjR0YP%2BmN41NRo1ruhjmWmp2KXsizL%2FWQebi646iOFOVlhwWeYutDBjI4ax6%2Bf7a8Ocf8oy9kanb92qanzq%2FLQH7IuMoIkddx9YgcewldiNLPS0gWJD31qBzB%2FbTJvGnE%2F93T%2FtdHdrYFJEPduv%2BBG3oms%2FSr&X-Amz-Signature=cb91adcb94c525e0e072e58b431db51883501a7a8c12a4611fc5ee683fb3c9a4&X-Amz-SignedHeaders=host&x-id=GetObject)
