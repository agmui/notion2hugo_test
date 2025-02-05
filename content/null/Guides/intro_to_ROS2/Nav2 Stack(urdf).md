---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEE5RIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAzmu7gtBUh7P32NmvZN8a2jWbGNh%2B737Zv%2BgjnNQpajAiEA0qR%2BzTlpbfwB7INpIZN3p7cvTI1yYql3MFtRNpPueH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5pU6QIwVnEfYKZbSrcA2ooCcc3RS8Z5MYt%2FacDgi8kUrtCxQS3iwnKmKoeYayzrNi01aFnCpXf8vEZ6TkxALKqK149uJj6Jo2Hqmk3gXcsJgH8kMQgeVeMLW65G0Bo6OWzMM3XXZwFrRkJ%2FWC%2BkQUTnu4t120SMJ0P%2BawfI7VEcfhAtqfNhQW%2FSkU%2BEONGfDEWiL9QRID9ulvxUiHUno4M5GpQzZP35XPOP3kA%2Fc%2FX1NVK3jpD2oB6B3LWgGLU40YwGegODS%2B%2BCi7ixeKnQLcDtt%2FGSDXnx9luthHRNe3KzpCWahTmR24l74zTSj7FeiXP3Hls%2BJHAiXxZzPf2DDFSvMwgHz88nQg48VGYY24MkJF1oUCT8mwtV6QMF82kqaTPZJWU%2BUh3YfiAlHnl%2BtVV2v%2F27HZl8K3VWS9Calo%2B%2FXwu8vxaahzzLyRWdm2rYm2dR4ZHrjkDxt%2BmL4SXhiNp7YTx2jRTiT%2Bbf34tXtuok%2FsirtRUb9RtQqX9wuzd83V%2FC1bRAAVI2vsNa3ZvTdXU27dafHgAWAic5V%2FJKmKA2h4FAzN16bFxppKIGgJOQdj7bJFxO1kC0xM5e2fGsR9J3QTwKZnUiVlkI45qA6L8mAC%2Brj8nKjT495bGHVYGylBz6jPQO%2Fn7enK3MKzPir0GOqUBU%2F0bAsQpIoVDr8cHv0dXdYi00yRTYzwqkQenSo%2Bhu0Ms2CRITLJikgl1G7VUZvxEOkJP%2FU3NCqixmrhWafAXW48J0wMkZ1Hm0WuFTI7AwASbDj0qhq7INaCWtV0T5B8P71dJzF7iQrmzCQn5muT%2FFsVGIvW6WLOkyXvdpAO%2B77yjk1s7u50CnC4ZmGLcusvTlD4rf73Pi6ONr3PVbAXgrX2eX3Vl&X-Amz-Signature=ccaad6cd14dbcce909865b8e49951878190decf072841dd43784b4080586b933&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEE5RIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAzmu7gtBUh7P32NmvZN8a2jWbGNh%2B737Zv%2BgjnNQpajAiEA0qR%2BzTlpbfwB7INpIZN3p7cvTI1yYql3MFtRNpPueH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5pU6QIwVnEfYKZbSrcA2ooCcc3RS8Z5MYt%2FacDgi8kUrtCxQS3iwnKmKoeYayzrNi01aFnCpXf8vEZ6TkxALKqK149uJj6Jo2Hqmk3gXcsJgH8kMQgeVeMLW65G0Bo6OWzMM3XXZwFrRkJ%2FWC%2BkQUTnu4t120SMJ0P%2BawfI7VEcfhAtqfNhQW%2FSkU%2BEONGfDEWiL9QRID9ulvxUiHUno4M5GpQzZP35XPOP3kA%2Fc%2FX1NVK3jpD2oB6B3LWgGLU40YwGegODS%2B%2BCi7ixeKnQLcDtt%2FGSDXnx9luthHRNe3KzpCWahTmR24l74zTSj7FeiXP3Hls%2BJHAiXxZzPf2DDFSvMwgHz88nQg48VGYY24MkJF1oUCT8mwtV6QMF82kqaTPZJWU%2BUh3YfiAlHnl%2BtVV2v%2F27HZl8K3VWS9Calo%2B%2FXwu8vxaahzzLyRWdm2rYm2dR4ZHrjkDxt%2BmL4SXhiNp7YTx2jRTiT%2Bbf34tXtuok%2FsirtRUb9RtQqX9wuzd83V%2FC1bRAAVI2vsNa3ZvTdXU27dafHgAWAic5V%2FJKmKA2h4FAzN16bFxppKIGgJOQdj7bJFxO1kC0xM5e2fGsR9J3QTwKZnUiVlkI45qA6L8mAC%2Brj8nKjT495bGHVYGylBz6jPQO%2Fn7enK3MKzPir0GOqUBU%2F0bAsQpIoVDr8cHv0dXdYi00yRTYzwqkQenSo%2Bhu0Ms2CRITLJikgl1G7VUZvxEOkJP%2FU3NCqixmrhWafAXW48J0wMkZ1Hm0WuFTI7AwASbDj0qhq7INaCWtV0T5B8P71dJzF7iQrmzCQn5muT%2FFsVGIvW6WLOkyXvdpAO%2B77yjk1s7u50CnC4ZmGLcusvTlD4rf73Pi6ONr3PVbAXgrX2eX3Vl&X-Amz-Signature=092d0fbaba23c72cd01bad486ba1f3982128ce78f69fdc760e5fa88d4d1210d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEE5RIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAzmu7gtBUh7P32NmvZN8a2jWbGNh%2B737Zv%2BgjnNQpajAiEA0qR%2BzTlpbfwB7INpIZN3p7cvTI1yYql3MFtRNpPueH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5pU6QIwVnEfYKZbSrcA2ooCcc3RS8Z5MYt%2FacDgi8kUrtCxQS3iwnKmKoeYayzrNi01aFnCpXf8vEZ6TkxALKqK149uJj6Jo2Hqmk3gXcsJgH8kMQgeVeMLW65G0Bo6OWzMM3XXZwFrRkJ%2FWC%2BkQUTnu4t120SMJ0P%2BawfI7VEcfhAtqfNhQW%2FSkU%2BEONGfDEWiL9QRID9ulvxUiHUno4M5GpQzZP35XPOP3kA%2Fc%2FX1NVK3jpD2oB6B3LWgGLU40YwGegODS%2B%2BCi7ixeKnQLcDtt%2FGSDXnx9luthHRNe3KzpCWahTmR24l74zTSj7FeiXP3Hls%2BJHAiXxZzPf2DDFSvMwgHz88nQg48VGYY24MkJF1oUCT8mwtV6QMF82kqaTPZJWU%2BUh3YfiAlHnl%2BtVV2v%2F27HZl8K3VWS9Calo%2B%2FXwu8vxaahzzLyRWdm2rYm2dR4ZHrjkDxt%2BmL4SXhiNp7YTx2jRTiT%2Bbf34tXtuok%2FsirtRUb9RtQqX9wuzd83V%2FC1bRAAVI2vsNa3ZvTdXU27dafHgAWAic5V%2FJKmKA2h4FAzN16bFxppKIGgJOQdj7bJFxO1kC0xM5e2fGsR9J3QTwKZnUiVlkI45qA6L8mAC%2Brj8nKjT495bGHVYGylBz6jPQO%2Fn7enK3MKzPir0GOqUBU%2F0bAsQpIoVDr8cHv0dXdYi00yRTYzwqkQenSo%2Bhu0Ms2CRITLJikgl1G7VUZvxEOkJP%2FU3NCqixmrhWafAXW48J0wMkZ1Hm0WuFTI7AwASbDj0qhq7INaCWtV0T5B8P71dJzF7iQrmzCQn5muT%2FFsVGIvW6WLOkyXvdpAO%2B77yjk1s7u50CnC4ZmGLcusvTlD4rf73Pi6ONr3PVbAXgrX2eX3Vl&X-Amz-Signature=d20a1c6619767e14877973f67d714893642c1e1a180e5e0da89a2a0761178617&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEE5RIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAzmu7gtBUh7P32NmvZN8a2jWbGNh%2B737Zv%2BgjnNQpajAiEA0qR%2BzTlpbfwB7INpIZN3p7cvTI1yYql3MFtRNpPueH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5pU6QIwVnEfYKZbSrcA2ooCcc3RS8Z5MYt%2FacDgi8kUrtCxQS3iwnKmKoeYayzrNi01aFnCpXf8vEZ6TkxALKqK149uJj6Jo2Hqmk3gXcsJgH8kMQgeVeMLW65G0Bo6OWzMM3XXZwFrRkJ%2FWC%2BkQUTnu4t120SMJ0P%2BawfI7VEcfhAtqfNhQW%2FSkU%2BEONGfDEWiL9QRID9ulvxUiHUno4M5GpQzZP35XPOP3kA%2Fc%2FX1NVK3jpD2oB6B3LWgGLU40YwGegODS%2B%2BCi7ixeKnQLcDtt%2FGSDXnx9luthHRNe3KzpCWahTmR24l74zTSj7FeiXP3Hls%2BJHAiXxZzPf2DDFSvMwgHz88nQg48VGYY24MkJF1oUCT8mwtV6QMF82kqaTPZJWU%2BUh3YfiAlHnl%2BtVV2v%2F27HZl8K3VWS9Calo%2B%2FXwu8vxaahzzLyRWdm2rYm2dR4ZHrjkDxt%2BmL4SXhiNp7YTx2jRTiT%2Bbf34tXtuok%2FsirtRUb9RtQqX9wuzd83V%2FC1bRAAVI2vsNa3ZvTdXU27dafHgAWAic5V%2FJKmKA2h4FAzN16bFxppKIGgJOQdj7bJFxO1kC0xM5e2fGsR9J3QTwKZnUiVlkI45qA6L8mAC%2Brj8nKjT495bGHVYGylBz6jPQO%2Fn7enK3MKzPir0GOqUBU%2F0bAsQpIoVDr8cHv0dXdYi00yRTYzwqkQenSo%2Bhu0Ms2CRITLJikgl1G7VUZvxEOkJP%2FU3NCqixmrhWafAXW48J0wMkZ1Hm0WuFTI7AwASbDj0qhq7INaCWtV0T5B8P71dJzF7iQrmzCQn5muT%2FFsVGIvW6WLOkyXvdpAO%2B77yjk1s7u50CnC4ZmGLcusvTlD4rf73Pi6ONr3PVbAXgrX2eX3Vl&X-Amz-Signature=090280ddb220185a4db941dee45292073bc2f8bbaf10cb42d9c14f4f0663d12d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEE5RIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAzmu7gtBUh7P32NmvZN8a2jWbGNh%2B737Zv%2BgjnNQpajAiEA0qR%2BzTlpbfwB7INpIZN3p7cvTI1yYql3MFtRNpPueH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5pU6QIwVnEfYKZbSrcA2ooCcc3RS8Z5MYt%2FacDgi8kUrtCxQS3iwnKmKoeYayzrNi01aFnCpXf8vEZ6TkxALKqK149uJj6Jo2Hqmk3gXcsJgH8kMQgeVeMLW65G0Bo6OWzMM3XXZwFrRkJ%2FWC%2BkQUTnu4t120SMJ0P%2BawfI7VEcfhAtqfNhQW%2FSkU%2BEONGfDEWiL9QRID9ulvxUiHUno4M5GpQzZP35XPOP3kA%2Fc%2FX1NVK3jpD2oB6B3LWgGLU40YwGegODS%2B%2BCi7ixeKnQLcDtt%2FGSDXnx9luthHRNe3KzpCWahTmR24l74zTSj7FeiXP3Hls%2BJHAiXxZzPf2DDFSvMwgHz88nQg48VGYY24MkJF1oUCT8mwtV6QMF82kqaTPZJWU%2BUh3YfiAlHnl%2BtVV2v%2F27HZl8K3VWS9Calo%2B%2FXwu8vxaahzzLyRWdm2rYm2dR4ZHrjkDxt%2BmL4SXhiNp7YTx2jRTiT%2Bbf34tXtuok%2FsirtRUb9RtQqX9wuzd83V%2FC1bRAAVI2vsNa3ZvTdXU27dafHgAWAic5V%2FJKmKA2h4FAzN16bFxppKIGgJOQdj7bJFxO1kC0xM5e2fGsR9J3QTwKZnUiVlkI45qA6L8mAC%2Brj8nKjT495bGHVYGylBz6jPQO%2Fn7enK3MKzPir0GOqUBU%2F0bAsQpIoVDr8cHv0dXdYi00yRTYzwqkQenSo%2Bhu0Ms2CRITLJikgl1G7VUZvxEOkJP%2FU3NCqixmrhWafAXW48J0wMkZ1Hm0WuFTI7AwASbDj0qhq7INaCWtV0T5B8P71dJzF7iQrmzCQn5muT%2FFsVGIvW6WLOkyXvdpAO%2B77yjk1s7u50CnC4ZmGLcusvTlD4rf73Pi6ONr3PVbAXgrX2eX3Vl&X-Amz-Signature=9e86453383e4113ba06890aedffd4c6ec906e79072e0e0db919f564378f26333&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UEE5RIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAzmu7gtBUh7P32NmvZN8a2jWbGNh%2B737Zv%2BgjnNQpajAiEA0qR%2BzTlpbfwB7INpIZN3p7cvTI1yYql3MFtRNpPueH4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM5pU6QIwVnEfYKZbSrcA2ooCcc3RS8Z5MYt%2FacDgi8kUrtCxQS3iwnKmKoeYayzrNi01aFnCpXf8vEZ6TkxALKqK149uJj6Jo2Hqmk3gXcsJgH8kMQgeVeMLW65G0Bo6OWzMM3XXZwFrRkJ%2FWC%2BkQUTnu4t120SMJ0P%2BawfI7VEcfhAtqfNhQW%2FSkU%2BEONGfDEWiL9QRID9ulvxUiHUno4M5GpQzZP35XPOP3kA%2Fc%2FX1NVK3jpD2oB6B3LWgGLU40YwGegODS%2B%2BCi7ixeKnQLcDtt%2FGSDXnx9luthHRNe3KzpCWahTmR24l74zTSj7FeiXP3Hls%2BJHAiXxZzPf2DDFSvMwgHz88nQg48VGYY24MkJF1oUCT8mwtV6QMF82kqaTPZJWU%2BUh3YfiAlHnl%2BtVV2v%2F27HZl8K3VWS9Calo%2B%2FXwu8vxaahzzLyRWdm2rYm2dR4ZHrjkDxt%2BmL4SXhiNp7YTx2jRTiT%2Bbf34tXtuok%2FsirtRUb9RtQqX9wuzd83V%2FC1bRAAVI2vsNa3ZvTdXU27dafHgAWAic5V%2FJKmKA2h4FAzN16bFxppKIGgJOQdj7bJFxO1kC0xM5e2fGsR9J3QTwKZnUiVlkI45qA6L8mAC%2Brj8nKjT495bGHVYGylBz6jPQO%2Fn7enK3MKzPir0GOqUBU%2F0bAsQpIoVDr8cHv0dXdYi00yRTYzwqkQenSo%2Bhu0Ms2CRITLJikgl1G7VUZvxEOkJP%2FU3NCqixmrhWafAXW48J0wMkZ1Hm0WuFTI7AwASbDj0qhq7INaCWtV0T5B8P71dJzF7iQrmzCQn5muT%2FFsVGIvW6WLOkyXvdpAO%2B77yjk1s7u50CnC4ZmGLcusvTlD4rf73Pi6ONr3PVbAXgrX2eX3Vl&X-Amz-Signature=c5f1556b45a7d6276bda402825039666d761d130cef22379cfc85d616e91bae1&X-Amz-SignedHeaders=host&x-id=GetObject)
