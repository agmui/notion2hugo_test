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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTQLWIW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzhmWDfmNnO75kR6OC9SPa%2FUo7Tnn28FbaPK8fpyXAfAiEA2Skoxy9tbBgJXCb0IpPIUxZPW%2BJL%2BynSVbdBiwimFooq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAE%2FsvgodtsQuwz7SCrcA6urj%2F6mskn0t16Agj46vFVfP7RMV%2F6Sh5fkko2AnrA2DcZkYMM3%2F4w5hfJR1TWYIip3oJq5UO2uTYfOxZeL79%2Fw4b5pI7zWln2R2Vj%2BfSEg4VgfYW3ng4JmJNt7TNiT263sJ5vwtxSC3%2BGsiJQYL4jZiy%2FoePiTz8yDl%2BNsle6VjmMLBDMhnSU77lbANEpmvA%2B5mrV08kR5i%2B%2FUh8ulj%2FpycvvLl8yYY9E1PKsn6YXidRT5JxDQ7WFtIeMSuh2oPuq%2Bj%2FBOXz8abUUDYTZFyEeExdZSW%2B0WOiB%2Bd8Y0Jfwa5oXMxg39dk3yGyc3d5hIQomNvJ9uj%2B9bZd2EjAVRfKciunuO0gsr3gbjqoqdb91w%2FbcN3bwC93nATz8nIa%2Fiqrb7mKUOX5VxwZct8fs5BGT%2F4mGWO4zZhBY3Mle8LtQVfMqRMmcFErwUQXDJIiDsDx3jmv5w3LhAIbU0i3%2F%2Fa3nxoc73q2Xqf30fMt%2B3ZUswewvgIv5egKtJRuCTdwotKRNdLk4odma%2FcHlggOZiwT7ebCFfNFss1k0KHBQATGIbKLytx1EzG6u6uQY%2F%2FK4oV0oIe5SeurDgJGSeSdgsiUFsZ0Rd3PZsAOb6%2FaguDf1p4nOxP42A9FRm%2BOWkMMCMuMAGOqUBkTcr3xqnLubxBY1Z%2BoJKcMojwZLSjmF8vYAXNZ3Ym5BFMRuRszMVvoydGdZmY42ddmoD4COxNQRoSzCxqBPMCxwzVDivTDG5j4Znm52GvgP08hmc%2Fnwd88uEQ5aRF%2F%2FJ26zuXUSo3V5wpDJ6GPrFlY%2F7UjeXVn0VG519DbU2Xz4p2m1zDqivY%2BiRIaHUfOZeXJP8HJTrmsY95bJmM0CNNsObcqzw&X-Amz-Signature=55b818c05c6745786bbb5115e89b7602e032d7b3abf03de2f5903013c0d52dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTQLWIW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzhmWDfmNnO75kR6OC9SPa%2FUo7Tnn28FbaPK8fpyXAfAiEA2Skoxy9tbBgJXCb0IpPIUxZPW%2BJL%2BynSVbdBiwimFooq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAE%2FsvgodtsQuwz7SCrcA6urj%2F6mskn0t16Agj46vFVfP7RMV%2F6Sh5fkko2AnrA2DcZkYMM3%2F4w5hfJR1TWYIip3oJq5UO2uTYfOxZeL79%2Fw4b5pI7zWln2R2Vj%2BfSEg4VgfYW3ng4JmJNt7TNiT263sJ5vwtxSC3%2BGsiJQYL4jZiy%2FoePiTz8yDl%2BNsle6VjmMLBDMhnSU77lbANEpmvA%2B5mrV08kR5i%2B%2FUh8ulj%2FpycvvLl8yYY9E1PKsn6YXidRT5JxDQ7WFtIeMSuh2oPuq%2Bj%2FBOXz8abUUDYTZFyEeExdZSW%2B0WOiB%2Bd8Y0Jfwa5oXMxg39dk3yGyc3d5hIQomNvJ9uj%2B9bZd2EjAVRfKciunuO0gsr3gbjqoqdb91w%2FbcN3bwC93nATz8nIa%2Fiqrb7mKUOX5VxwZct8fs5BGT%2F4mGWO4zZhBY3Mle8LtQVfMqRMmcFErwUQXDJIiDsDx3jmv5w3LhAIbU0i3%2F%2Fa3nxoc73q2Xqf30fMt%2B3ZUswewvgIv5egKtJRuCTdwotKRNdLk4odma%2FcHlggOZiwT7ebCFfNFss1k0KHBQATGIbKLytx1EzG6u6uQY%2F%2FK4oV0oIe5SeurDgJGSeSdgsiUFsZ0Rd3PZsAOb6%2FaguDf1p4nOxP42A9FRm%2BOWkMMCMuMAGOqUBkTcr3xqnLubxBY1Z%2BoJKcMojwZLSjmF8vYAXNZ3Ym5BFMRuRszMVvoydGdZmY42ddmoD4COxNQRoSzCxqBPMCxwzVDivTDG5j4Znm52GvgP08hmc%2Fnwd88uEQ5aRF%2F%2FJ26zuXUSo3V5wpDJ6GPrFlY%2F7UjeXVn0VG519DbU2Xz4p2m1zDqivY%2BiRIaHUfOZeXJP8HJTrmsY95bJmM0CNNsObcqzw&X-Amz-Signature=c3883d3a44f746a42222ec32ae93465c2306bd45fc4d5d5f5b47a4d009f0aac2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTQLWIW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzhmWDfmNnO75kR6OC9SPa%2FUo7Tnn28FbaPK8fpyXAfAiEA2Skoxy9tbBgJXCb0IpPIUxZPW%2BJL%2BynSVbdBiwimFooq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAE%2FsvgodtsQuwz7SCrcA6urj%2F6mskn0t16Agj46vFVfP7RMV%2F6Sh5fkko2AnrA2DcZkYMM3%2F4w5hfJR1TWYIip3oJq5UO2uTYfOxZeL79%2Fw4b5pI7zWln2R2Vj%2BfSEg4VgfYW3ng4JmJNt7TNiT263sJ5vwtxSC3%2BGsiJQYL4jZiy%2FoePiTz8yDl%2BNsle6VjmMLBDMhnSU77lbANEpmvA%2B5mrV08kR5i%2B%2FUh8ulj%2FpycvvLl8yYY9E1PKsn6YXidRT5JxDQ7WFtIeMSuh2oPuq%2Bj%2FBOXz8abUUDYTZFyEeExdZSW%2B0WOiB%2Bd8Y0Jfwa5oXMxg39dk3yGyc3d5hIQomNvJ9uj%2B9bZd2EjAVRfKciunuO0gsr3gbjqoqdb91w%2FbcN3bwC93nATz8nIa%2Fiqrb7mKUOX5VxwZct8fs5BGT%2F4mGWO4zZhBY3Mle8LtQVfMqRMmcFErwUQXDJIiDsDx3jmv5w3LhAIbU0i3%2F%2Fa3nxoc73q2Xqf30fMt%2B3ZUswewvgIv5egKtJRuCTdwotKRNdLk4odma%2FcHlggOZiwT7ebCFfNFss1k0KHBQATGIbKLytx1EzG6u6uQY%2F%2FK4oV0oIe5SeurDgJGSeSdgsiUFsZ0Rd3PZsAOb6%2FaguDf1p4nOxP42A9FRm%2BOWkMMCMuMAGOqUBkTcr3xqnLubxBY1Z%2BoJKcMojwZLSjmF8vYAXNZ3Ym5BFMRuRszMVvoydGdZmY42ddmoD4COxNQRoSzCxqBPMCxwzVDivTDG5j4Znm52GvgP08hmc%2Fnwd88uEQ5aRF%2F%2FJ26zuXUSo3V5wpDJ6GPrFlY%2F7UjeXVn0VG519DbU2Xz4p2m1zDqivY%2BiRIaHUfOZeXJP8HJTrmsY95bJmM0CNNsObcqzw&X-Amz-Signature=0a5742022412fb825529f898eeb9475bf5927679bdd6df3616b84eb417f58a03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTQLWIW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzhmWDfmNnO75kR6OC9SPa%2FUo7Tnn28FbaPK8fpyXAfAiEA2Skoxy9tbBgJXCb0IpPIUxZPW%2BJL%2BynSVbdBiwimFooq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAE%2FsvgodtsQuwz7SCrcA6urj%2F6mskn0t16Agj46vFVfP7RMV%2F6Sh5fkko2AnrA2DcZkYMM3%2F4w5hfJR1TWYIip3oJq5UO2uTYfOxZeL79%2Fw4b5pI7zWln2R2Vj%2BfSEg4VgfYW3ng4JmJNt7TNiT263sJ5vwtxSC3%2BGsiJQYL4jZiy%2FoePiTz8yDl%2BNsle6VjmMLBDMhnSU77lbANEpmvA%2B5mrV08kR5i%2B%2FUh8ulj%2FpycvvLl8yYY9E1PKsn6YXidRT5JxDQ7WFtIeMSuh2oPuq%2Bj%2FBOXz8abUUDYTZFyEeExdZSW%2B0WOiB%2Bd8Y0Jfwa5oXMxg39dk3yGyc3d5hIQomNvJ9uj%2B9bZd2EjAVRfKciunuO0gsr3gbjqoqdb91w%2FbcN3bwC93nATz8nIa%2Fiqrb7mKUOX5VxwZct8fs5BGT%2F4mGWO4zZhBY3Mle8LtQVfMqRMmcFErwUQXDJIiDsDx3jmv5w3LhAIbU0i3%2F%2Fa3nxoc73q2Xqf30fMt%2B3ZUswewvgIv5egKtJRuCTdwotKRNdLk4odma%2FcHlggOZiwT7ebCFfNFss1k0KHBQATGIbKLytx1EzG6u6uQY%2F%2FK4oV0oIe5SeurDgJGSeSdgsiUFsZ0Rd3PZsAOb6%2FaguDf1p4nOxP42A9FRm%2BOWkMMCMuMAGOqUBkTcr3xqnLubxBY1Z%2BoJKcMojwZLSjmF8vYAXNZ3Ym5BFMRuRszMVvoydGdZmY42ddmoD4COxNQRoSzCxqBPMCxwzVDivTDG5j4Znm52GvgP08hmc%2Fnwd88uEQ5aRF%2F%2FJ26zuXUSo3V5wpDJ6GPrFlY%2F7UjeXVn0VG519DbU2Xz4p2m1zDqivY%2BiRIaHUfOZeXJP8HJTrmsY95bJmM0CNNsObcqzw&X-Amz-Signature=c2b0fcf74d96107660ba3d99654e5dfdc7f2da8598d331453b9530de7db99e66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTQLWIW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzhmWDfmNnO75kR6OC9SPa%2FUo7Tnn28FbaPK8fpyXAfAiEA2Skoxy9tbBgJXCb0IpPIUxZPW%2BJL%2BynSVbdBiwimFooq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAE%2FsvgodtsQuwz7SCrcA6urj%2F6mskn0t16Agj46vFVfP7RMV%2F6Sh5fkko2AnrA2DcZkYMM3%2F4w5hfJR1TWYIip3oJq5UO2uTYfOxZeL79%2Fw4b5pI7zWln2R2Vj%2BfSEg4VgfYW3ng4JmJNt7TNiT263sJ5vwtxSC3%2BGsiJQYL4jZiy%2FoePiTz8yDl%2BNsle6VjmMLBDMhnSU77lbANEpmvA%2B5mrV08kR5i%2B%2FUh8ulj%2FpycvvLl8yYY9E1PKsn6YXidRT5JxDQ7WFtIeMSuh2oPuq%2Bj%2FBOXz8abUUDYTZFyEeExdZSW%2B0WOiB%2Bd8Y0Jfwa5oXMxg39dk3yGyc3d5hIQomNvJ9uj%2B9bZd2EjAVRfKciunuO0gsr3gbjqoqdb91w%2FbcN3bwC93nATz8nIa%2Fiqrb7mKUOX5VxwZct8fs5BGT%2F4mGWO4zZhBY3Mle8LtQVfMqRMmcFErwUQXDJIiDsDx3jmv5w3LhAIbU0i3%2F%2Fa3nxoc73q2Xqf30fMt%2B3ZUswewvgIv5egKtJRuCTdwotKRNdLk4odma%2FcHlggOZiwT7ebCFfNFss1k0KHBQATGIbKLytx1EzG6u6uQY%2F%2FK4oV0oIe5SeurDgJGSeSdgsiUFsZ0Rd3PZsAOb6%2FaguDf1p4nOxP42A9FRm%2BOWkMMCMuMAGOqUBkTcr3xqnLubxBY1Z%2BoJKcMojwZLSjmF8vYAXNZ3Ym5BFMRuRszMVvoydGdZmY42ddmoD4COxNQRoSzCxqBPMCxwzVDivTDG5j4Znm52GvgP08hmc%2Fnwd88uEQ5aRF%2F%2FJ26zuXUSo3V5wpDJ6GPrFlY%2F7UjeXVn0VG519DbU2Xz4p2m1zDqivY%2BiRIaHUfOZeXJP8HJTrmsY95bJmM0CNNsObcqzw&X-Amz-Signature=a8915691d377496e39e68cc3f9cad1d2c96222ce94f35de9434f79142d603f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTQLWIW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzhmWDfmNnO75kR6OC9SPa%2FUo7Tnn28FbaPK8fpyXAfAiEA2Skoxy9tbBgJXCb0IpPIUxZPW%2BJL%2BynSVbdBiwimFooq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAE%2FsvgodtsQuwz7SCrcA6urj%2F6mskn0t16Agj46vFVfP7RMV%2F6Sh5fkko2AnrA2DcZkYMM3%2F4w5hfJR1TWYIip3oJq5UO2uTYfOxZeL79%2Fw4b5pI7zWln2R2Vj%2BfSEg4VgfYW3ng4JmJNt7TNiT263sJ5vwtxSC3%2BGsiJQYL4jZiy%2FoePiTz8yDl%2BNsle6VjmMLBDMhnSU77lbANEpmvA%2B5mrV08kR5i%2B%2FUh8ulj%2FpycvvLl8yYY9E1PKsn6YXidRT5JxDQ7WFtIeMSuh2oPuq%2Bj%2FBOXz8abUUDYTZFyEeExdZSW%2B0WOiB%2Bd8Y0Jfwa5oXMxg39dk3yGyc3d5hIQomNvJ9uj%2B9bZd2EjAVRfKciunuO0gsr3gbjqoqdb91w%2FbcN3bwC93nATz8nIa%2Fiqrb7mKUOX5VxwZct8fs5BGT%2F4mGWO4zZhBY3Mle8LtQVfMqRMmcFErwUQXDJIiDsDx3jmv5w3LhAIbU0i3%2F%2Fa3nxoc73q2Xqf30fMt%2B3ZUswewvgIv5egKtJRuCTdwotKRNdLk4odma%2FcHlggOZiwT7ebCFfNFss1k0KHBQATGIbKLytx1EzG6u6uQY%2F%2FK4oV0oIe5SeurDgJGSeSdgsiUFsZ0Rd3PZsAOb6%2FaguDf1p4nOxP42A9FRm%2BOWkMMCMuMAGOqUBkTcr3xqnLubxBY1Z%2BoJKcMojwZLSjmF8vYAXNZ3Ym5BFMRuRszMVvoydGdZmY42ddmoD4COxNQRoSzCxqBPMCxwzVDivTDG5j4Znm52GvgP08hmc%2Fnwd88uEQ5aRF%2F%2FJ26zuXUSo3V5wpDJ6GPrFlY%2F7UjeXVn0VG519DbU2Xz4p2m1zDqivY%2BiRIaHUfOZeXJP8HJTrmsY95bJmM0CNNsObcqzw&X-Amz-Signature=7b1b3ad7882a294e6d80c9b67f06c86504352b91850e65cfa72c33c3e4e42c9d&X-Amz-SignedHeaders=host&x-id=GetObject)
