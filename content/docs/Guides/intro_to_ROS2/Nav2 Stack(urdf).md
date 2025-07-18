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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YBW73O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDQxM9EttVky9ZKbMaLccJXvZAyBNNNPy8sVRuGSwvWwIhAKPLS%2BWZMr2N8kxxqxJw4Tx3znLa3URd6CiOpDeaPm37KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSoUPr4nTkhOpL38q3APmjyxzRwDlIQydVKstxjaYcHPcUIJaVDhjwMNyccgwrMqqJVIpNGKNNILhTpXWd%2FXnLpouJl6JAxCEMnSIh1QYMqh7XQvoCv11QeBOKw0s1m171IXaqChEwwPhRVlNiVrI55f6IxUiZrCLxgfNdTQ5NcoCCNyjtDvlPq8QFjXLloxTwyfxdb2WFbBLemVc46tCJsVCiJPa3xYmzwa1WTNrXUqwffRlJz6rJvRoNwJpa%2BFyP8LCeNGsBMTgwBCJIgUSo%2BHi64MgMm9VIeb4DBa2Yvf8N3xE1SIVvjuWExoyYquMjk%2BQ5DESPJO%2B8YwWKnodijZw6p4GfyOcmTt%2BlpN2YZcqU4UwLGXVoQd%2Bz6uwgPfo%2FtbtUq26TNbndfePAprFufHifBVVXK07s84csD%2BODDzX%2FVbTEXQ42XE%2Fn607M7vpWfkSv0KxgXiMYO3MRTF9kQJbpOYzmzhmslljt5it8gCUz80zpM3aMGPFEA0TA%2FSv1Uf1Mwtkb9ZRMno4mxRKVt8zAClhipD7%2Baphtk0VcXMuSQUV%2Bi8ctJulJ%2BD%2FeOlMIzird%2BxV7DYXTBkE9js5JyvOMrSeg241JCOIIYA2h2Hh3nh3E4XXmT8ZLZKAh9QXeqvINMW6YUcPvTDEiuvDBjqkAb1CwhdlqOJutCM5BjOmk35Tx2l7xktgqFJi%2Bz2ond%2BBFj2ShcOxRMgYmy6LwsVgkDK3mQYLf8x2W51%2B5unyjIzbcILoRb928S5xU%2BIEWL20whrhS01FxDDS92fwpNE171UeMfwIJQK7V8tsIZqAErhjgGSX25Qjw5wcNTKd28QYx%2FBIYqYJ6y3xik3O7XnbPsT%2FDAIW982t4st%2BIF82KAk8hqVQ&X-Amz-Signature=3d1664ba496b7b8f31dfe1650756104f5560a839572abc515f22537181b1b4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YBW73O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDQxM9EttVky9ZKbMaLccJXvZAyBNNNPy8sVRuGSwvWwIhAKPLS%2BWZMr2N8kxxqxJw4Tx3znLa3URd6CiOpDeaPm37KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSoUPr4nTkhOpL38q3APmjyxzRwDlIQydVKstxjaYcHPcUIJaVDhjwMNyccgwrMqqJVIpNGKNNILhTpXWd%2FXnLpouJl6JAxCEMnSIh1QYMqh7XQvoCv11QeBOKw0s1m171IXaqChEwwPhRVlNiVrI55f6IxUiZrCLxgfNdTQ5NcoCCNyjtDvlPq8QFjXLloxTwyfxdb2WFbBLemVc46tCJsVCiJPa3xYmzwa1WTNrXUqwffRlJz6rJvRoNwJpa%2BFyP8LCeNGsBMTgwBCJIgUSo%2BHi64MgMm9VIeb4DBa2Yvf8N3xE1SIVvjuWExoyYquMjk%2BQ5DESPJO%2B8YwWKnodijZw6p4GfyOcmTt%2BlpN2YZcqU4UwLGXVoQd%2Bz6uwgPfo%2FtbtUq26TNbndfePAprFufHifBVVXK07s84csD%2BODDzX%2FVbTEXQ42XE%2Fn607M7vpWfkSv0KxgXiMYO3MRTF9kQJbpOYzmzhmslljt5it8gCUz80zpM3aMGPFEA0TA%2FSv1Uf1Mwtkb9ZRMno4mxRKVt8zAClhipD7%2Baphtk0VcXMuSQUV%2Bi8ctJulJ%2BD%2FeOlMIzird%2BxV7DYXTBkE9js5JyvOMrSeg241JCOIIYA2h2Hh3nh3E4XXmT8ZLZKAh9QXeqvINMW6YUcPvTDEiuvDBjqkAb1CwhdlqOJutCM5BjOmk35Tx2l7xktgqFJi%2Bz2ond%2BBFj2ShcOxRMgYmy6LwsVgkDK3mQYLf8x2W51%2B5unyjIzbcILoRb928S5xU%2BIEWL20whrhS01FxDDS92fwpNE171UeMfwIJQK7V8tsIZqAErhjgGSX25Qjw5wcNTKd28QYx%2FBIYqYJ6y3xik3O7XnbPsT%2FDAIW982t4st%2BIF82KAk8hqVQ&X-Amz-Signature=8ac1bc1277d0b59bf303a4fe4a2b27a9975a5cbc42e68fdb9ebd7a885c238c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YBW73O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDQxM9EttVky9ZKbMaLccJXvZAyBNNNPy8sVRuGSwvWwIhAKPLS%2BWZMr2N8kxxqxJw4Tx3znLa3URd6CiOpDeaPm37KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSoUPr4nTkhOpL38q3APmjyxzRwDlIQydVKstxjaYcHPcUIJaVDhjwMNyccgwrMqqJVIpNGKNNILhTpXWd%2FXnLpouJl6JAxCEMnSIh1QYMqh7XQvoCv11QeBOKw0s1m171IXaqChEwwPhRVlNiVrI55f6IxUiZrCLxgfNdTQ5NcoCCNyjtDvlPq8QFjXLloxTwyfxdb2WFbBLemVc46tCJsVCiJPa3xYmzwa1WTNrXUqwffRlJz6rJvRoNwJpa%2BFyP8LCeNGsBMTgwBCJIgUSo%2BHi64MgMm9VIeb4DBa2Yvf8N3xE1SIVvjuWExoyYquMjk%2BQ5DESPJO%2B8YwWKnodijZw6p4GfyOcmTt%2BlpN2YZcqU4UwLGXVoQd%2Bz6uwgPfo%2FtbtUq26TNbndfePAprFufHifBVVXK07s84csD%2BODDzX%2FVbTEXQ42XE%2Fn607M7vpWfkSv0KxgXiMYO3MRTF9kQJbpOYzmzhmslljt5it8gCUz80zpM3aMGPFEA0TA%2FSv1Uf1Mwtkb9ZRMno4mxRKVt8zAClhipD7%2Baphtk0VcXMuSQUV%2Bi8ctJulJ%2BD%2FeOlMIzird%2BxV7DYXTBkE9js5JyvOMrSeg241JCOIIYA2h2Hh3nh3E4XXmT8ZLZKAh9QXeqvINMW6YUcPvTDEiuvDBjqkAb1CwhdlqOJutCM5BjOmk35Tx2l7xktgqFJi%2Bz2ond%2BBFj2ShcOxRMgYmy6LwsVgkDK3mQYLf8x2W51%2B5unyjIzbcILoRb928S5xU%2BIEWL20whrhS01FxDDS92fwpNE171UeMfwIJQK7V8tsIZqAErhjgGSX25Qjw5wcNTKd28QYx%2FBIYqYJ6y3xik3O7XnbPsT%2FDAIW982t4st%2BIF82KAk8hqVQ&X-Amz-Signature=92a800fa69c1cde0958bff222916dc985a83af63a58faaaf3d11471c28a1f26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YBW73O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDQxM9EttVky9ZKbMaLccJXvZAyBNNNPy8sVRuGSwvWwIhAKPLS%2BWZMr2N8kxxqxJw4Tx3znLa3URd6CiOpDeaPm37KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSoUPr4nTkhOpL38q3APmjyxzRwDlIQydVKstxjaYcHPcUIJaVDhjwMNyccgwrMqqJVIpNGKNNILhTpXWd%2FXnLpouJl6JAxCEMnSIh1QYMqh7XQvoCv11QeBOKw0s1m171IXaqChEwwPhRVlNiVrI55f6IxUiZrCLxgfNdTQ5NcoCCNyjtDvlPq8QFjXLloxTwyfxdb2WFbBLemVc46tCJsVCiJPa3xYmzwa1WTNrXUqwffRlJz6rJvRoNwJpa%2BFyP8LCeNGsBMTgwBCJIgUSo%2BHi64MgMm9VIeb4DBa2Yvf8N3xE1SIVvjuWExoyYquMjk%2BQ5DESPJO%2B8YwWKnodijZw6p4GfyOcmTt%2BlpN2YZcqU4UwLGXVoQd%2Bz6uwgPfo%2FtbtUq26TNbndfePAprFufHifBVVXK07s84csD%2BODDzX%2FVbTEXQ42XE%2Fn607M7vpWfkSv0KxgXiMYO3MRTF9kQJbpOYzmzhmslljt5it8gCUz80zpM3aMGPFEA0TA%2FSv1Uf1Mwtkb9ZRMno4mxRKVt8zAClhipD7%2Baphtk0VcXMuSQUV%2Bi8ctJulJ%2BD%2FeOlMIzird%2BxV7DYXTBkE9js5JyvOMrSeg241JCOIIYA2h2Hh3nh3E4XXmT8ZLZKAh9QXeqvINMW6YUcPvTDEiuvDBjqkAb1CwhdlqOJutCM5BjOmk35Tx2l7xktgqFJi%2Bz2ond%2BBFj2ShcOxRMgYmy6LwsVgkDK3mQYLf8x2W51%2B5unyjIzbcILoRb928S5xU%2BIEWL20whrhS01FxDDS92fwpNE171UeMfwIJQK7V8tsIZqAErhjgGSX25Qjw5wcNTKd28QYx%2FBIYqYJ6y3xik3O7XnbPsT%2FDAIW982t4st%2BIF82KAk8hqVQ&X-Amz-Signature=6fc921421d8db0d34b47b7d58802a605bfb9f21723bee4526490f67782e2cbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YBW73O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDQxM9EttVky9ZKbMaLccJXvZAyBNNNPy8sVRuGSwvWwIhAKPLS%2BWZMr2N8kxxqxJw4Tx3znLa3URd6CiOpDeaPm37KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSoUPr4nTkhOpL38q3APmjyxzRwDlIQydVKstxjaYcHPcUIJaVDhjwMNyccgwrMqqJVIpNGKNNILhTpXWd%2FXnLpouJl6JAxCEMnSIh1QYMqh7XQvoCv11QeBOKw0s1m171IXaqChEwwPhRVlNiVrI55f6IxUiZrCLxgfNdTQ5NcoCCNyjtDvlPq8QFjXLloxTwyfxdb2WFbBLemVc46tCJsVCiJPa3xYmzwa1WTNrXUqwffRlJz6rJvRoNwJpa%2BFyP8LCeNGsBMTgwBCJIgUSo%2BHi64MgMm9VIeb4DBa2Yvf8N3xE1SIVvjuWExoyYquMjk%2BQ5DESPJO%2B8YwWKnodijZw6p4GfyOcmTt%2BlpN2YZcqU4UwLGXVoQd%2Bz6uwgPfo%2FtbtUq26TNbndfePAprFufHifBVVXK07s84csD%2BODDzX%2FVbTEXQ42XE%2Fn607M7vpWfkSv0KxgXiMYO3MRTF9kQJbpOYzmzhmslljt5it8gCUz80zpM3aMGPFEA0TA%2FSv1Uf1Mwtkb9ZRMno4mxRKVt8zAClhipD7%2Baphtk0VcXMuSQUV%2Bi8ctJulJ%2BD%2FeOlMIzird%2BxV7DYXTBkE9js5JyvOMrSeg241JCOIIYA2h2Hh3nh3E4XXmT8ZLZKAh9QXeqvINMW6YUcPvTDEiuvDBjqkAb1CwhdlqOJutCM5BjOmk35Tx2l7xktgqFJi%2Bz2ond%2BBFj2ShcOxRMgYmy6LwsVgkDK3mQYLf8x2W51%2B5unyjIzbcILoRb928S5xU%2BIEWL20whrhS01FxDDS92fwpNE171UeMfwIJQK7V8tsIZqAErhjgGSX25Qjw5wcNTKd28QYx%2FBIYqYJ6y3xik3O7XnbPsT%2FDAIW982t4st%2BIF82KAk8hqVQ&X-Amz-Signature=473376617da4915eba455343ecf2c0f0e613fd06da87c191cf6682ac39dee2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6YBW73O%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDQxM9EttVky9ZKbMaLccJXvZAyBNNNPy8sVRuGSwvWwIhAKPLS%2BWZMr2N8kxxqxJw4Tx3znLa3URd6CiOpDeaPm37KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSoUPr4nTkhOpL38q3APmjyxzRwDlIQydVKstxjaYcHPcUIJaVDhjwMNyccgwrMqqJVIpNGKNNILhTpXWd%2FXnLpouJl6JAxCEMnSIh1QYMqh7XQvoCv11QeBOKw0s1m171IXaqChEwwPhRVlNiVrI55f6IxUiZrCLxgfNdTQ5NcoCCNyjtDvlPq8QFjXLloxTwyfxdb2WFbBLemVc46tCJsVCiJPa3xYmzwa1WTNrXUqwffRlJz6rJvRoNwJpa%2BFyP8LCeNGsBMTgwBCJIgUSo%2BHi64MgMm9VIeb4DBa2Yvf8N3xE1SIVvjuWExoyYquMjk%2BQ5DESPJO%2B8YwWKnodijZw6p4GfyOcmTt%2BlpN2YZcqU4UwLGXVoQd%2Bz6uwgPfo%2FtbtUq26TNbndfePAprFufHifBVVXK07s84csD%2BODDzX%2FVbTEXQ42XE%2Fn607M7vpWfkSv0KxgXiMYO3MRTF9kQJbpOYzmzhmslljt5it8gCUz80zpM3aMGPFEA0TA%2FSv1Uf1Mwtkb9ZRMno4mxRKVt8zAClhipD7%2Baphtk0VcXMuSQUV%2Bi8ctJulJ%2BD%2FeOlMIzird%2BxV7DYXTBkE9js5JyvOMrSeg241JCOIIYA2h2Hh3nh3E4XXmT8ZLZKAh9QXeqvINMW6YUcPvTDEiuvDBjqkAb1CwhdlqOJutCM5BjOmk35Tx2l7xktgqFJi%2Bz2ond%2BBFj2ShcOxRMgYmy6LwsVgkDK3mQYLf8x2W51%2B5unyjIzbcILoRb928S5xU%2BIEWL20whrhS01FxDDS92fwpNE171UeMfwIJQK7V8tsIZqAErhjgGSX25Qjw5wcNTKd28QYx%2FBIYqYJ6y3xik3O7XnbPsT%2FDAIW982t4st%2BIF82KAk8hqVQ&X-Amz-Signature=26bbb567eac5b64b4c5c3e4d146f9960f7af5ecf7cad9623b43f5888cefd7231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
