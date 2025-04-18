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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55RPD6E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXYDwmqyGrrjjSbp2lGHpiZ1KMt9qKwRo3hV%2BfdMYD1AiBqYyEaHY1VGudWT4p4FlxYtxHffj%2FmmxbgjI%2FcRqEqKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKsEaV%2BTiGWuKzWpxKtwDNNnAisRphdX7tTD5QLjFZMe3%2Bxa4wRIa02rqTRjp0P3UyLmB967XNgxcbB4Q1hfsZ3ur5SP5z8dxgfwy9LiracLNHkLt1iZKomMLkY5Cx1VS4YpDhZpclSpXipNzdQABr7R9voXyoTB6YE3qc5Mzty4tFGfzFHyT8LeWy76jZgiTAwKI63K33zUc6BE7CcplyWBDIJXzAIIcwYUUIT%2FCheBt6B3kLMfLC09KgFUyuKl07ERtCRtDurzaUV3Ge3Rs6c1hnsongYCt67uEKDILobGzMJALf4XVcI9SuRiBKDE6evRT1JZzQb4T%2BzUYQjcQ0Zjm%2BhWZH%2FmEFrGgJ9HB%2FV%2Ba9uKxOdZQEWn3umxoKX6pmY0M3rs5LCvpI7rab717K6YSspJk%2FkPdrsrPHKYz5ZlFTafj95kbqtZyaWPbG8cI8lCgUAeSoGNUmCDvWFzuYmCqtTx9ArCRn3h2Y5F8lUTXwFen1FkqyJm5TcADza1iYHz17vxOkRGZ9R6%2FerHCXJDCda5wA7KS7R0N3Bc2VEVUQuu1q%2BlsErbuAqDPircD7L5icdHd4Xjk1H210z12JCZEenqSJwX0XcW1UbGh2qGV8dARqtorrcTxSpeUoWC6NVtdWebVxcorqwowlrGKwAY6pgHPYQy9%2FDnEe4ngqmi3YVjIwBJeBMMWhP6Tys2uKS%2BsuaAIkezmP7aNnfya5B82RYRDdRxjeZb1SK27SUzYxEGLFeHolvz1bcl%2FX%2BkOOlOUmcbt4v3fVR3YApQRlhWa5dUm%2BDZQ0X5%2Fbun0Se0zTeK%2F%2BvpMvzEYxxW9%2FoH17doXgl6twZFSn8MudsHYuAAAmvDFXjc3MOmQzQVp4R9wPNZTS2WYKnrc&X-Amz-Signature=af3a4cda30d77ce0e89fc09f49f841b51166e024af06bf7eba4fe174f46d7e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55RPD6E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXYDwmqyGrrjjSbp2lGHpiZ1KMt9qKwRo3hV%2BfdMYD1AiBqYyEaHY1VGudWT4p4FlxYtxHffj%2FmmxbgjI%2FcRqEqKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKsEaV%2BTiGWuKzWpxKtwDNNnAisRphdX7tTD5QLjFZMe3%2Bxa4wRIa02rqTRjp0P3UyLmB967XNgxcbB4Q1hfsZ3ur5SP5z8dxgfwy9LiracLNHkLt1iZKomMLkY5Cx1VS4YpDhZpclSpXipNzdQABr7R9voXyoTB6YE3qc5Mzty4tFGfzFHyT8LeWy76jZgiTAwKI63K33zUc6BE7CcplyWBDIJXzAIIcwYUUIT%2FCheBt6B3kLMfLC09KgFUyuKl07ERtCRtDurzaUV3Ge3Rs6c1hnsongYCt67uEKDILobGzMJALf4XVcI9SuRiBKDE6evRT1JZzQb4T%2BzUYQjcQ0Zjm%2BhWZH%2FmEFrGgJ9HB%2FV%2Ba9uKxOdZQEWn3umxoKX6pmY0M3rs5LCvpI7rab717K6YSspJk%2FkPdrsrPHKYz5ZlFTafj95kbqtZyaWPbG8cI8lCgUAeSoGNUmCDvWFzuYmCqtTx9ArCRn3h2Y5F8lUTXwFen1FkqyJm5TcADza1iYHz17vxOkRGZ9R6%2FerHCXJDCda5wA7KS7R0N3Bc2VEVUQuu1q%2BlsErbuAqDPircD7L5icdHd4Xjk1H210z12JCZEenqSJwX0XcW1UbGh2qGV8dARqtorrcTxSpeUoWC6NVtdWebVxcorqwowlrGKwAY6pgHPYQy9%2FDnEe4ngqmi3YVjIwBJeBMMWhP6Tys2uKS%2BsuaAIkezmP7aNnfya5B82RYRDdRxjeZb1SK27SUzYxEGLFeHolvz1bcl%2FX%2BkOOlOUmcbt4v3fVR3YApQRlhWa5dUm%2BDZQ0X5%2Fbun0Se0zTeK%2F%2BvpMvzEYxxW9%2FoH17doXgl6twZFSn8MudsHYuAAAmvDFXjc3MOmQzQVp4R9wPNZTS2WYKnrc&X-Amz-Signature=0dda6162f0e8e9bce12c57121b2023bfd5df0d91f9eacfd03c8c64d9e7890f49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55RPD6E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXYDwmqyGrrjjSbp2lGHpiZ1KMt9qKwRo3hV%2BfdMYD1AiBqYyEaHY1VGudWT4p4FlxYtxHffj%2FmmxbgjI%2FcRqEqKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKsEaV%2BTiGWuKzWpxKtwDNNnAisRphdX7tTD5QLjFZMe3%2Bxa4wRIa02rqTRjp0P3UyLmB967XNgxcbB4Q1hfsZ3ur5SP5z8dxgfwy9LiracLNHkLt1iZKomMLkY5Cx1VS4YpDhZpclSpXipNzdQABr7R9voXyoTB6YE3qc5Mzty4tFGfzFHyT8LeWy76jZgiTAwKI63K33zUc6BE7CcplyWBDIJXzAIIcwYUUIT%2FCheBt6B3kLMfLC09KgFUyuKl07ERtCRtDurzaUV3Ge3Rs6c1hnsongYCt67uEKDILobGzMJALf4XVcI9SuRiBKDE6evRT1JZzQb4T%2BzUYQjcQ0Zjm%2BhWZH%2FmEFrGgJ9HB%2FV%2Ba9uKxOdZQEWn3umxoKX6pmY0M3rs5LCvpI7rab717K6YSspJk%2FkPdrsrPHKYz5ZlFTafj95kbqtZyaWPbG8cI8lCgUAeSoGNUmCDvWFzuYmCqtTx9ArCRn3h2Y5F8lUTXwFen1FkqyJm5TcADza1iYHz17vxOkRGZ9R6%2FerHCXJDCda5wA7KS7R0N3Bc2VEVUQuu1q%2BlsErbuAqDPircD7L5icdHd4Xjk1H210z12JCZEenqSJwX0XcW1UbGh2qGV8dARqtorrcTxSpeUoWC6NVtdWebVxcorqwowlrGKwAY6pgHPYQy9%2FDnEe4ngqmi3YVjIwBJeBMMWhP6Tys2uKS%2BsuaAIkezmP7aNnfya5B82RYRDdRxjeZb1SK27SUzYxEGLFeHolvz1bcl%2FX%2BkOOlOUmcbt4v3fVR3YApQRlhWa5dUm%2BDZQ0X5%2Fbun0Se0zTeK%2F%2BvpMvzEYxxW9%2FoH17doXgl6twZFSn8MudsHYuAAAmvDFXjc3MOmQzQVp4R9wPNZTS2WYKnrc&X-Amz-Signature=ea23182e6ed75b6149ca45cfcea0824d2aeab3b5aef70c25d340e90efcf4d3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55RPD6E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXYDwmqyGrrjjSbp2lGHpiZ1KMt9qKwRo3hV%2BfdMYD1AiBqYyEaHY1VGudWT4p4FlxYtxHffj%2FmmxbgjI%2FcRqEqKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKsEaV%2BTiGWuKzWpxKtwDNNnAisRphdX7tTD5QLjFZMe3%2Bxa4wRIa02rqTRjp0P3UyLmB967XNgxcbB4Q1hfsZ3ur5SP5z8dxgfwy9LiracLNHkLt1iZKomMLkY5Cx1VS4YpDhZpclSpXipNzdQABr7R9voXyoTB6YE3qc5Mzty4tFGfzFHyT8LeWy76jZgiTAwKI63K33zUc6BE7CcplyWBDIJXzAIIcwYUUIT%2FCheBt6B3kLMfLC09KgFUyuKl07ERtCRtDurzaUV3Ge3Rs6c1hnsongYCt67uEKDILobGzMJALf4XVcI9SuRiBKDE6evRT1JZzQb4T%2BzUYQjcQ0Zjm%2BhWZH%2FmEFrGgJ9HB%2FV%2Ba9uKxOdZQEWn3umxoKX6pmY0M3rs5LCvpI7rab717K6YSspJk%2FkPdrsrPHKYz5ZlFTafj95kbqtZyaWPbG8cI8lCgUAeSoGNUmCDvWFzuYmCqtTx9ArCRn3h2Y5F8lUTXwFen1FkqyJm5TcADza1iYHz17vxOkRGZ9R6%2FerHCXJDCda5wA7KS7R0N3Bc2VEVUQuu1q%2BlsErbuAqDPircD7L5icdHd4Xjk1H210z12JCZEenqSJwX0XcW1UbGh2qGV8dARqtorrcTxSpeUoWC6NVtdWebVxcorqwowlrGKwAY6pgHPYQy9%2FDnEe4ngqmi3YVjIwBJeBMMWhP6Tys2uKS%2BsuaAIkezmP7aNnfya5B82RYRDdRxjeZb1SK27SUzYxEGLFeHolvz1bcl%2FX%2BkOOlOUmcbt4v3fVR3YApQRlhWa5dUm%2BDZQ0X5%2Fbun0Se0zTeK%2F%2BvpMvzEYxxW9%2FoH17doXgl6twZFSn8MudsHYuAAAmvDFXjc3MOmQzQVp4R9wPNZTS2WYKnrc&X-Amz-Signature=839e5868c946d92940ac860c2a14d8c184e2f5424ee1f53be93dc570e3edf702&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55RPD6E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXYDwmqyGrrjjSbp2lGHpiZ1KMt9qKwRo3hV%2BfdMYD1AiBqYyEaHY1VGudWT4p4FlxYtxHffj%2FmmxbgjI%2FcRqEqKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKsEaV%2BTiGWuKzWpxKtwDNNnAisRphdX7tTD5QLjFZMe3%2Bxa4wRIa02rqTRjp0P3UyLmB967XNgxcbB4Q1hfsZ3ur5SP5z8dxgfwy9LiracLNHkLt1iZKomMLkY5Cx1VS4YpDhZpclSpXipNzdQABr7R9voXyoTB6YE3qc5Mzty4tFGfzFHyT8LeWy76jZgiTAwKI63K33zUc6BE7CcplyWBDIJXzAIIcwYUUIT%2FCheBt6B3kLMfLC09KgFUyuKl07ERtCRtDurzaUV3Ge3Rs6c1hnsongYCt67uEKDILobGzMJALf4XVcI9SuRiBKDE6evRT1JZzQb4T%2BzUYQjcQ0Zjm%2BhWZH%2FmEFrGgJ9HB%2FV%2Ba9uKxOdZQEWn3umxoKX6pmY0M3rs5LCvpI7rab717K6YSspJk%2FkPdrsrPHKYz5ZlFTafj95kbqtZyaWPbG8cI8lCgUAeSoGNUmCDvWFzuYmCqtTx9ArCRn3h2Y5F8lUTXwFen1FkqyJm5TcADza1iYHz17vxOkRGZ9R6%2FerHCXJDCda5wA7KS7R0N3Bc2VEVUQuu1q%2BlsErbuAqDPircD7L5icdHd4Xjk1H210z12JCZEenqSJwX0XcW1UbGh2qGV8dARqtorrcTxSpeUoWC6NVtdWebVxcorqwowlrGKwAY6pgHPYQy9%2FDnEe4ngqmi3YVjIwBJeBMMWhP6Tys2uKS%2BsuaAIkezmP7aNnfya5B82RYRDdRxjeZb1SK27SUzYxEGLFeHolvz1bcl%2FX%2BkOOlOUmcbt4v3fVR3YApQRlhWa5dUm%2BDZQ0X5%2Fbun0Se0zTeK%2F%2BvpMvzEYxxW9%2FoH17doXgl6twZFSn8MudsHYuAAAmvDFXjc3MOmQzQVp4R9wPNZTS2WYKnrc&X-Amz-Signature=87596fda910e8d7690d3226ee2dce9f5fd0bca3f8b6aa535c9752622e46bd118&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55RPD6E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXYDwmqyGrrjjSbp2lGHpiZ1KMt9qKwRo3hV%2BfdMYD1AiBqYyEaHY1VGudWT4p4FlxYtxHffj%2FmmxbgjI%2FcRqEqKir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKsEaV%2BTiGWuKzWpxKtwDNNnAisRphdX7tTD5QLjFZMe3%2Bxa4wRIa02rqTRjp0P3UyLmB967XNgxcbB4Q1hfsZ3ur5SP5z8dxgfwy9LiracLNHkLt1iZKomMLkY5Cx1VS4YpDhZpclSpXipNzdQABr7R9voXyoTB6YE3qc5Mzty4tFGfzFHyT8LeWy76jZgiTAwKI63K33zUc6BE7CcplyWBDIJXzAIIcwYUUIT%2FCheBt6B3kLMfLC09KgFUyuKl07ERtCRtDurzaUV3Ge3Rs6c1hnsongYCt67uEKDILobGzMJALf4XVcI9SuRiBKDE6evRT1JZzQb4T%2BzUYQjcQ0Zjm%2BhWZH%2FmEFrGgJ9HB%2FV%2Ba9uKxOdZQEWn3umxoKX6pmY0M3rs5LCvpI7rab717K6YSspJk%2FkPdrsrPHKYz5ZlFTafj95kbqtZyaWPbG8cI8lCgUAeSoGNUmCDvWFzuYmCqtTx9ArCRn3h2Y5F8lUTXwFen1FkqyJm5TcADza1iYHz17vxOkRGZ9R6%2FerHCXJDCda5wA7KS7R0N3Bc2VEVUQuu1q%2BlsErbuAqDPircD7L5icdHd4Xjk1H210z12JCZEenqSJwX0XcW1UbGh2qGV8dARqtorrcTxSpeUoWC6NVtdWebVxcorqwowlrGKwAY6pgHPYQy9%2FDnEe4ngqmi3YVjIwBJeBMMWhP6Tys2uKS%2BsuaAIkezmP7aNnfya5B82RYRDdRxjeZb1SK27SUzYxEGLFeHolvz1bcl%2FX%2BkOOlOUmcbt4v3fVR3YApQRlhWa5dUm%2BDZQ0X5%2Fbun0Se0zTeK%2F%2BvpMvzEYxxW9%2FoH17doXgl6twZFSn8MudsHYuAAAmvDFXjc3MOmQzQVp4R9wPNZTS2WYKnrc&X-Amz-Signature=1fcce5fee138b005966a84868decbd7e860b08239fe4c20a9d23b50eaefbbbfd&X-Amz-SignedHeaders=host&x-id=GetObject)
