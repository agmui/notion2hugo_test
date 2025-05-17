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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PZ45M6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67XRxObVbJs2EgoJqejp9AntjqOKhkCTLXeQQPTgqKAIhAKyWunBuL0OqabW0orC0n%2FlvMKpYyke%2Fidmp5x6Nv0EgKv8DCFsQABoMNjM3NDIzMTgzODA1Igz5WGOFhWWtX2ajVE4q3ANJEt%2BfHzsKozZoB4M7ASp6OTtrZNb3%2FF8WYLNTBHKbkpc0%2Fop0GrFjU4qLsd9VbOHtDhOmcann2R2ItfXHJNKnhyEJlbaj8QXAWH8a7pqrIeGdSNndykleyxEcHPcx98Pyc3M30hknlNcYX2LygtJpvPUyDESJL4%2F8kI9%2FiP5B4FI2A0LOBjbXMyv0uam5YeExMuFnbPfeU6YUS6mAAbGWM9JcdZEtjp432Vt6fAkwfUa9e2WNmOAd0ov1pWOlpkffgd9RGOMx54kICvLfJmFD7nxQRmySIBeHOvOQ6JmYxLMFeMgb7QsSD5wvjoMJM8dDDgh7uZzJuwISgR83WJf7jw2BmfwsHC7VcgpGTdFhtHO3U3n9hc%2BdiXvsBr23cN4X9UCBl0wk2TymtmCFKpl7hrw73deSUZ3x5xhy0W5WL9IGuGAaTizANNGz4rBz8ZwBFAQPimuGveBRBprMVsW3psmgr8Ss0lLnxPcaZC7YKRxXQARvzM5xUzdbQd1nRSlEWAXCiAZlxb8u4ySi2TPvTfdf57wRKGQ46JmLNcy7NgndCgsGE57VQwyupHOPN85RdDSh39mfRFjkBWNuOthqdGpLVw5vBA%2FMl5Qsn%2FQNgRby2kfRbX5W46cnLzC%2FvKHBBjqkAQWk1dZ7Z3Gi8spT3bYZBdFRaTRP7ykl9IxQvp8pVBk%2F%2FW7ON4UEOxaJf6cVqzD7d5Tlxd7QeKZUfozWzFxfHP0UFAwcFq9DMyiS80p5dDdptyDiZKrvOCiRNoH2k9%2BstMIjvLrK2ivXrSPGTRAYlBBF9w9Igp8wJAaiSFRrRtVgeY7qPB0IpR5gjxVAodrZgw3H%2FWS34hDXv1RrWktPYQzxkqD1&X-Amz-Signature=18e87e4bc1b00d3d89828d5d490c28f085f60a9f352800b83d93c816d1a779c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PZ45M6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67XRxObVbJs2EgoJqejp9AntjqOKhkCTLXeQQPTgqKAIhAKyWunBuL0OqabW0orC0n%2FlvMKpYyke%2Fidmp5x6Nv0EgKv8DCFsQABoMNjM3NDIzMTgzODA1Igz5WGOFhWWtX2ajVE4q3ANJEt%2BfHzsKozZoB4M7ASp6OTtrZNb3%2FF8WYLNTBHKbkpc0%2Fop0GrFjU4qLsd9VbOHtDhOmcann2R2ItfXHJNKnhyEJlbaj8QXAWH8a7pqrIeGdSNndykleyxEcHPcx98Pyc3M30hknlNcYX2LygtJpvPUyDESJL4%2F8kI9%2FiP5B4FI2A0LOBjbXMyv0uam5YeExMuFnbPfeU6YUS6mAAbGWM9JcdZEtjp432Vt6fAkwfUa9e2WNmOAd0ov1pWOlpkffgd9RGOMx54kICvLfJmFD7nxQRmySIBeHOvOQ6JmYxLMFeMgb7QsSD5wvjoMJM8dDDgh7uZzJuwISgR83WJf7jw2BmfwsHC7VcgpGTdFhtHO3U3n9hc%2BdiXvsBr23cN4X9UCBl0wk2TymtmCFKpl7hrw73deSUZ3x5xhy0W5WL9IGuGAaTizANNGz4rBz8ZwBFAQPimuGveBRBprMVsW3psmgr8Ss0lLnxPcaZC7YKRxXQARvzM5xUzdbQd1nRSlEWAXCiAZlxb8u4ySi2TPvTfdf57wRKGQ46JmLNcy7NgndCgsGE57VQwyupHOPN85RdDSh39mfRFjkBWNuOthqdGpLVw5vBA%2FMl5Qsn%2FQNgRby2kfRbX5W46cnLzC%2FvKHBBjqkAQWk1dZ7Z3Gi8spT3bYZBdFRaTRP7ykl9IxQvp8pVBk%2F%2FW7ON4UEOxaJf6cVqzD7d5Tlxd7QeKZUfozWzFxfHP0UFAwcFq9DMyiS80p5dDdptyDiZKrvOCiRNoH2k9%2BstMIjvLrK2ivXrSPGTRAYlBBF9w9Igp8wJAaiSFRrRtVgeY7qPB0IpR5gjxVAodrZgw3H%2FWS34hDXv1RrWktPYQzxkqD1&X-Amz-Signature=76074113f9c17c12473b4462df256c1df2fd8cd5742c1c8297f94a0ae908b2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PZ45M6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67XRxObVbJs2EgoJqejp9AntjqOKhkCTLXeQQPTgqKAIhAKyWunBuL0OqabW0orC0n%2FlvMKpYyke%2Fidmp5x6Nv0EgKv8DCFsQABoMNjM3NDIzMTgzODA1Igz5WGOFhWWtX2ajVE4q3ANJEt%2BfHzsKozZoB4M7ASp6OTtrZNb3%2FF8WYLNTBHKbkpc0%2Fop0GrFjU4qLsd9VbOHtDhOmcann2R2ItfXHJNKnhyEJlbaj8QXAWH8a7pqrIeGdSNndykleyxEcHPcx98Pyc3M30hknlNcYX2LygtJpvPUyDESJL4%2F8kI9%2FiP5B4FI2A0LOBjbXMyv0uam5YeExMuFnbPfeU6YUS6mAAbGWM9JcdZEtjp432Vt6fAkwfUa9e2WNmOAd0ov1pWOlpkffgd9RGOMx54kICvLfJmFD7nxQRmySIBeHOvOQ6JmYxLMFeMgb7QsSD5wvjoMJM8dDDgh7uZzJuwISgR83WJf7jw2BmfwsHC7VcgpGTdFhtHO3U3n9hc%2BdiXvsBr23cN4X9UCBl0wk2TymtmCFKpl7hrw73deSUZ3x5xhy0W5WL9IGuGAaTizANNGz4rBz8ZwBFAQPimuGveBRBprMVsW3psmgr8Ss0lLnxPcaZC7YKRxXQARvzM5xUzdbQd1nRSlEWAXCiAZlxb8u4ySi2TPvTfdf57wRKGQ46JmLNcy7NgndCgsGE57VQwyupHOPN85RdDSh39mfRFjkBWNuOthqdGpLVw5vBA%2FMl5Qsn%2FQNgRby2kfRbX5W46cnLzC%2FvKHBBjqkAQWk1dZ7Z3Gi8spT3bYZBdFRaTRP7ykl9IxQvp8pVBk%2F%2FW7ON4UEOxaJf6cVqzD7d5Tlxd7QeKZUfozWzFxfHP0UFAwcFq9DMyiS80p5dDdptyDiZKrvOCiRNoH2k9%2BstMIjvLrK2ivXrSPGTRAYlBBF9w9Igp8wJAaiSFRrRtVgeY7qPB0IpR5gjxVAodrZgw3H%2FWS34hDXv1RrWktPYQzxkqD1&X-Amz-Signature=22bbcbb8e0603038cad3e25d11b7b65d7a18ef378227e43e74c47265ebc00710&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PZ45M6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67XRxObVbJs2EgoJqejp9AntjqOKhkCTLXeQQPTgqKAIhAKyWunBuL0OqabW0orC0n%2FlvMKpYyke%2Fidmp5x6Nv0EgKv8DCFsQABoMNjM3NDIzMTgzODA1Igz5WGOFhWWtX2ajVE4q3ANJEt%2BfHzsKozZoB4M7ASp6OTtrZNb3%2FF8WYLNTBHKbkpc0%2Fop0GrFjU4qLsd9VbOHtDhOmcann2R2ItfXHJNKnhyEJlbaj8QXAWH8a7pqrIeGdSNndykleyxEcHPcx98Pyc3M30hknlNcYX2LygtJpvPUyDESJL4%2F8kI9%2FiP5B4FI2A0LOBjbXMyv0uam5YeExMuFnbPfeU6YUS6mAAbGWM9JcdZEtjp432Vt6fAkwfUa9e2WNmOAd0ov1pWOlpkffgd9RGOMx54kICvLfJmFD7nxQRmySIBeHOvOQ6JmYxLMFeMgb7QsSD5wvjoMJM8dDDgh7uZzJuwISgR83WJf7jw2BmfwsHC7VcgpGTdFhtHO3U3n9hc%2BdiXvsBr23cN4X9UCBl0wk2TymtmCFKpl7hrw73deSUZ3x5xhy0W5WL9IGuGAaTizANNGz4rBz8ZwBFAQPimuGveBRBprMVsW3psmgr8Ss0lLnxPcaZC7YKRxXQARvzM5xUzdbQd1nRSlEWAXCiAZlxb8u4ySi2TPvTfdf57wRKGQ46JmLNcy7NgndCgsGE57VQwyupHOPN85RdDSh39mfRFjkBWNuOthqdGpLVw5vBA%2FMl5Qsn%2FQNgRby2kfRbX5W46cnLzC%2FvKHBBjqkAQWk1dZ7Z3Gi8spT3bYZBdFRaTRP7ykl9IxQvp8pVBk%2F%2FW7ON4UEOxaJf6cVqzD7d5Tlxd7QeKZUfozWzFxfHP0UFAwcFq9DMyiS80p5dDdptyDiZKrvOCiRNoH2k9%2BstMIjvLrK2ivXrSPGTRAYlBBF9w9Igp8wJAaiSFRrRtVgeY7qPB0IpR5gjxVAodrZgw3H%2FWS34hDXv1RrWktPYQzxkqD1&X-Amz-Signature=322b5ec270cdd3d3fafe58ed4ac1f8da29b28ef44ee5611e4a7c186b08471a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PZ45M6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67XRxObVbJs2EgoJqejp9AntjqOKhkCTLXeQQPTgqKAIhAKyWunBuL0OqabW0orC0n%2FlvMKpYyke%2Fidmp5x6Nv0EgKv8DCFsQABoMNjM3NDIzMTgzODA1Igz5WGOFhWWtX2ajVE4q3ANJEt%2BfHzsKozZoB4M7ASp6OTtrZNb3%2FF8WYLNTBHKbkpc0%2Fop0GrFjU4qLsd9VbOHtDhOmcann2R2ItfXHJNKnhyEJlbaj8QXAWH8a7pqrIeGdSNndykleyxEcHPcx98Pyc3M30hknlNcYX2LygtJpvPUyDESJL4%2F8kI9%2FiP5B4FI2A0LOBjbXMyv0uam5YeExMuFnbPfeU6YUS6mAAbGWM9JcdZEtjp432Vt6fAkwfUa9e2WNmOAd0ov1pWOlpkffgd9RGOMx54kICvLfJmFD7nxQRmySIBeHOvOQ6JmYxLMFeMgb7QsSD5wvjoMJM8dDDgh7uZzJuwISgR83WJf7jw2BmfwsHC7VcgpGTdFhtHO3U3n9hc%2BdiXvsBr23cN4X9UCBl0wk2TymtmCFKpl7hrw73deSUZ3x5xhy0W5WL9IGuGAaTizANNGz4rBz8ZwBFAQPimuGveBRBprMVsW3psmgr8Ss0lLnxPcaZC7YKRxXQARvzM5xUzdbQd1nRSlEWAXCiAZlxb8u4ySi2TPvTfdf57wRKGQ46JmLNcy7NgndCgsGE57VQwyupHOPN85RdDSh39mfRFjkBWNuOthqdGpLVw5vBA%2FMl5Qsn%2FQNgRby2kfRbX5W46cnLzC%2FvKHBBjqkAQWk1dZ7Z3Gi8spT3bYZBdFRaTRP7ykl9IxQvp8pVBk%2F%2FW7ON4UEOxaJf6cVqzD7d5Tlxd7QeKZUfozWzFxfHP0UFAwcFq9DMyiS80p5dDdptyDiZKrvOCiRNoH2k9%2BstMIjvLrK2ivXrSPGTRAYlBBF9w9Igp8wJAaiSFRrRtVgeY7qPB0IpR5gjxVAodrZgw3H%2FWS34hDXv1RrWktPYQzxkqD1&X-Amz-Signature=1bb8944f2c75ee7157cbd135aad3f07c5d163b1d33a364daa4cef6a6f74c50a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PZ45M6%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC67XRxObVbJs2EgoJqejp9AntjqOKhkCTLXeQQPTgqKAIhAKyWunBuL0OqabW0orC0n%2FlvMKpYyke%2Fidmp5x6Nv0EgKv8DCFsQABoMNjM3NDIzMTgzODA1Igz5WGOFhWWtX2ajVE4q3ANJEt%2BfHzsKozZoB4M7ASp6OTtrZNb3%2FF8WYLNTBHKbkpc0%2Fop0GrFjU4qLsd9VbOHtDhOmcann2R2ItfXHJNKnhyEJlbaj8QXAWH8a7pqrIeGdSNndykleyxEcHPcx98Pyc3M30hknlNcYX2LygtJpvPUyDESJL4%2F8kI9%2FiP5B4FI2A0LOBjbXMyv0uam5YeExMuFnbPfeU6YUS6mAAbGWM9JcdZEtjp432Vt6fAkwfUa9e2WNmOAd0ov1pWOlpkffgd9RGOMx54kICvLfJmFD7nxQRmySIBeHOvOQ6JmYxLMFeMgb7QsSD5wvjoMJM8dDDgh7uZzJuwISgR83WJf7jw2BmfwsHC7VcgpGTdFhtHO3U3n9hc%2BdiXvsBr23cN4X9UCBl0wk2TymtmCFKpl7hrw73deSUZ3x5xhy0W5WL9IGuGAaTizANNGz4rBz8ZwBFAQPimuGveBRBprMVsW3psmgr8Ss0lLnxPcaZC7YKRxXQARvzM5xUzdbQd1nRSlEWAXCiAZlxb8u4ySi2TPvTfdf57wRKGQ46JmLNcy7NgndCgsGE57VQwyupHOPN85RdDSh39mfRFjkBWNuOthqdGpLVw5vBA%2FMl5Qsn%2FQNgRby2kfRbX5W46cnLzC%2FvKHBBjqkAQWk1dZ7Z3Gi8spT3bYZBdFRaTRP7ykl9IxQvp8pVBk%2F%2FW7ON4UEOxaJf6cVqzD7d5Tlxd7QeKZUfozWzFxfHP0UFAwcFq9DMyiS80p5dDdptyDiZKrvOCiRNoH2k9%2BstMIjvLrK2ivXrSPGTRAYlBBF9w9Igp8wJAaiSFRrRtVgeY7qPB0IpR5gjxVAodrZgw3H%2FWS34hDXv1RrWktPYQzxkqD1&X-Amz-Signature=f47dc3fc82aa34b0e2627707bfcf7ecc9794b9febb8f877543932bbc65598186&X-Amz-SignedHeaders=host&x-id=GetObject)
