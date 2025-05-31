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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W2OPC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbJVC5Rt2tHbyK0QuZIPNAa0qZulDBV8YMLntGoWhsAiBWN8nrer8u8EdpdP1vQQSVDfSRaZEtVA9i%2BiwQ0ImNCCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEipoUB1b2ysDGyXKtwDj7m50CY1q1RdrRZyr%2Fxz6zyfK7cb%2B2GbHy6tRyBmyzAo03wsO5EuB%2B3zTvMxvdkj9qNDYRkYyXGMuNmKNEFuZu2J0iJvwEB53o4RHGlrMNmcYflj7eTRVLH3jZjVoXtEeAmbDFPeCj38wkdSn6bIzV%2BbIMLdo7NVu%2BKaNymTEIfRCmaNp8M7FVPG%2FQeVBQB0THFhqvaUhQBn9uZqBRVAM%2Fe5gqGNq%2F43TCIUyj%2BKBDqEvO6QuzvCkyQ4fg2HOZx4D6PP5weSgpGlbmyLEqeZT1U8cRbjMoHX32PkPQlVrPq5khJvuhJfskfJPPlx1RZPuHlMVkkVKLxV7CVkLdECo3dGi%2BNyxd%2Brj5uPvZGlaiJ24NIT7eX2PGRA9OWpjTeTjrn%2FJw0EVqx443GqTVZeNjIoahqYc46bPOraiJ41DUmMa8Qo2rUOhpzlnbSA6L01qrTqIyMF%2FObxgz1j361hVzV1YVJ9jfh6OkRYykDUYjraYrePPzen0XFSJzpEPsb53WFtXa85S5%2FXs5e5qe8WlqJppVA%2B%2BuoUPAfqNlx4eI5JRmbeJBOa%2BaKHc3msiIJYQsu9MUCKuv2WSj4npWuscMliR%2BTxJSpL093YoHKNQKMKwx62kcCkTcaKQ4Uw%2BqPtwQY6pgF64TojJbPrxsIO%2FS%2BosGLqtG%2BtEwy6qTc8YAYp9P5uJv5QaFoMG%2BFR7hSmIYeB0NEzC78k%2BLZ6jSE5gMr7U0b2aepuROTcOwK9r6d5AT6iFIZLiTWh6ManLUgJ5DG7EnJ9vAn%2FonELYRX6TWXsh1NTvbIaBzWv9Y4hVLs4Ql9pCtFfSfOU%2FcrFiDReWxmxHPitaPbvdno%2FoGyAZPy3dx727IXmKqf6&X-Amz-Signature=2a31a56c791059171bac2e3e7c17c846f1edc6f4bcdfe5db91156582f7877843&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W2OPC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbJVC5Rt2tHbyK0QuZIPNAa0qZulDBV8YMLntGoWhsAiBWN8nrer8u8EdpdP1vQQSVDfSRaZEtVA9i%2BiwQ0ImNCCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEipoUB1b2ysDGyXKtwDj7m50CY1q1RdrRZyr%2Fxz6zyfK7cb%2B2GbHy6tRyBmyzAo03wsO5EuB%2B3zTvMxvdkj9qNDYRkYyXGMuNmKNEFuZu2J0iJvwEB53o4RHGlrMNmcYflj7eTRVLH3jZjVoXtEeAmbDFPeCj38wkdSn6bIzV%2BbIMLdo7NVu%2BKaNymTEIfRCmaNp8M7FVPG%2FQeVBQB0THFhqvaUhQBn9uZqBRVAM%2Fe5gqGNq%2F43TCIUyj%2BKBDqEvO6QuzvCkyQ4fg2HOZx4D6PP5weSgpGlbmyLEqeZT1U8cRbjMoHX32PkPQlVrPq5khJvuhJfskfJPPlx1RZPuHlMVkkVKLxV7CVkLdECo3dGi%2BNyxd%2Brj5uPvZGlaiJ24NIT7eX2PGRA9OWpjTeTjrn%2FJw0EVqx443GqTVZeNjIoahqYc46bPOraiJ41DUmMa8Qo2rUOhpzlnbSA6L01qrTqIyMF%2FObxgz1j361hVzV1YVJ9jfh6OkRYykDUYjraYrePPzen0XFSJzpEPsb53WFtXa85S5%2FXs5e5qe8WlqJppVA%2B%2BuoUPAfqNlx4eI5JRmbeJBOa%2BaKHc3msiIJYQsu9MUCKuv2WSj4npWuscMliR%2BTxJSpL093YoHKNQKMKwx62kcCkTcaKQ4Uw%2BqPtwQY6pgF64TojJbPrxsIO%2FS%2BosGLqtG%2BtEwy6qTc8YAYp9P5uJv5QaFoMG%2BFR7hSmIYeB0NEzC78k%2BLZ6jSE5gMr7U0b2aepuROTcOwK9r6d5AT6iFIZLiTWh6ManLUgJ5DG7EnJ9vAn%2FonELYRX6TWXsh1NTvbIaBzWv9Y4hVLs4Ql9pCtFfSfOU%2FcrFiDReWxmxHPitaPbvdno%2FoGyAZPy3dx727IXmKqf6&X-Amz-Signature=dc2e973d541bb0394ede1a9021184e3d623fe01666128dc2492a32a211a87117&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W2OPC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbJVC5Rt2tHbyK0QuZIPNAa0qZulDBV8YMLntGoWhsAiBWN8nrer8u8EdpdP1vQQSVDfSRaZEtVA9i%2BiwQ0ImNCCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEipoUB1b2ysDGyXKtwDj7m50CY1q1RdrRZyr%2Fxz6zyfK7cb%2B2GbHy6tRyBmyzAo03wsO5EuB%2B3zTvMxvdkj9qNDYRkYyXGMuNmKNEFuZu2J0iJvwEB53o4RHGlrMNmcYflj7eTRVLH3jZjVoXtEeAmbDFPeCj38wkdSn6bIzV%2BbIMLdo7NVu%2BKaNymTEIfRCmaNp8M7FVPG%2FQeVBQB0THFhqvaUhQBn9uZqBRVAM%2Fe5gqGNq%2F43TCIUyj%2BKBDqEvO6QuzvCkyQ4fg2HOZx4D6PP5weSgpGlbmyLEqeZT1U8cRbjMoHX32PkPQlVrPq5khJvuhJfskfJPPlx1RZPuHlMVkkVKLxV7CVkLdECo3dGi%2BNyxd%2Brj5uPvZGlaiJ24NIT7eX2PGRA9OWpjTeTjrn%2FJw0EVqx443GqTVZeNjIoahqYc46bPOraiJ41DUmMa8Qo2rUOhpzlnbSA6L01qrTqIyMF%2FObxgz1j361hVzV1YVJ9jfh6OkRYykDUYjraYrePPzen0XFSJzpEPsb53WFtXa85S5%2FXs5e5qe8WlqJppVA%2B%2BuoUPAfqNlx4eI5JRmbeJBOa%2BaKHc3msiIJYQsu9MUCKuv2WSj4npWuscMliR%2BTxJSpL093YoHKNQKMKwx62kcCkTcaKQ4Uw%2BqPtwQY6pgF64TojJbPrxsIO%2FS%2BosGLqtG%2BtEwy6qTc8YAYp9P5uJv5QaFoMG%2BFR7hSmIYeB0NEzC78k%2BLZ6jSE5gMr7U0b2aepuROTcOwK9r6d5AT6iFIZLiTWh6ManLUgJ5DG7EnJ9vAn%2FonELYRX6TWXsh1NTvbIaBzWv9Y4hVLs4Ql9pCtFfSfOU%2FcrFiDReWxmxHPitaPbvdno%2FoGyAZPy3dx727IXmKqf6&X-Amz-Signature=d4fa9c6507dfe6cb8dd978c6f990ab1eba6838d0278675556f8980fb3f49f1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W2OPC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbJVC5Rt2tHbyK0QuZIPNAa0qZulDBV8YMLntGoWhsAiBWN8nrer8u8EdpdP1vQQSVDfSRaZEtVA9i%2BiwQ0ImNCCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEipoUB1b2ysDGyXKtwDj7m50CY1q1RdrRZyr%2Fxz6zyfK7cb%2B2GbHy6tRyBmyzAo03wsO5EuB%2B3zTvMxvdkj9qNDYRkYyXGMuNmKNEFuZu2J0iJvwEB53o4RHGlrMNmcYflj7eTRVLH3jZjVoXtEeAmbDFPeCj38wkdSn6bIzV%2BbIMLdo7NVu%2BKaNymTEIfRCmaNp8M7FVPG%2FQeVBQB0THFhqvaUhQBn9uZqBRVAM%2Fe5gqGNq%2F43TCIUyj%2BKBDqEvO6QuzvCkyQ4fg2HOZx4D6PP5weSgpGlbmyLEqeZT1U8cRbjMoHX32PkPQlVrPq5khJvuhJfskfJPPlx1RZPuHlMVkkVKLxV7CVkLdECo3dGi%2BNyxd%2Brj5uPvZGlaiJ24NIT7eX2PGRA9OWpjTeTjrn%2FJw0EVqx443GqTVZeNjIoahqYc46bPOraiJ41DUmMa8Qo2rUOhpzlnbSA6L01qrTqIyMF%2FObxgz1j361hVzV1YVJ9jfh6OkRYykDUYjraYrePPzen0XFSJzpEPsb53WFtXa85S5%2FXs5e5qe8WlqJppVA%2B%2BuoUPAfqNlx4eI5JRmbeJBOa%2BaKHc3msiIJYQsu9MUCKuv2WSj4npWuscMliR%2BTxJSpL093YoHKNQKMKwx62kcCkTcaKQ4Uw%2BqPtwQY6pgF64TojJbPrxsIO%2FS%2BosGLqtG%2BtEwy6qTc8YAYp9P5uJv5QaFoMG%2BFR7hSmIYeB0NEzC78k%2BLZ6jSE5gMr7U0b2aepuROTcOwK9r6d5AT6iFIZLiTWh6ManLUgJ5DG7EnJ9vAn%2FonELYRX6TWXsh1NTvbIaBzWv9Y4hVLs4Ql9pCtFfSfOU%2FcrFiDReWxmxHPitaPbvdno%2FoGyAZPy3dx727IXmKqf6&X-Amz-Signature=f9d45dd989438d215541941468387b3dd98815b09987f3f4a9e6fe8ea3d357f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W2OPC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbJVC5Rt2tHbyK0QuZIPNAa0qZulDBV8YMLntGoWhsAiBWN8nrer8u8EdpdP1vQQSVDfSRaZEtVA9i%2BiwQ0ImNCCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEipoUB1b2ysDGyXKtwDj7m50CY1q1RdrRZyr%2Fxz6zyfK7cb%2B2GbHy6tRyBmyzAo03wsO5EuB%2B3zTvMxvdkj9qNDYRkYyXGMuNmKNEFuZu2J0iJvwEB53o4RHGlrMNmcYflj7eTRVLH3jZjVoXtEeAmbDFPeCj38wkdSn6bIzV%2BbIMLdo7NVu%2BKaNymTEIfRCmaNp8M7FVPG%2FQeVBQB0THFhqvaUhQBn9uZqBRVAM%2Fe5gqGNq%2F43TCIUyj%2BKBDqEvO6QuzvCkyQ4fg2HOZx4D6PP5weSgpGlbmyLEqeZT1U8cRbjMoHX32PkPQlVrPq5khJvuhJfskfJPPlx1RZPuHlMVkkVKLxV7CVkLdECo3dGi%2BNyxd%2Brj5uPvZGlaiJ24NIT7eX2PGRA9OWpjTeTjrn%2FJw0EVqx443GqTVZeNjIoahqYc46bPOraiJ41DUmMa8Qo2rUOhpzlnbSA6L01qrTqIyMF%2FObxgz1j361hVzV1YVJ9jfh6OkRYykDUYjraYrePPzen0XFSJzpEPsb53WFtXa85S5%2FXs5e5qe8WlqJppVA%2B%2BuoUPAfqNlx4eI5JRmbeJBOa%2BaKHc3msiIJYQsu9MUCKuv2WSj4npWuscMliR%2BTxJSpL093YoHKNQKMKwx62kcCkTcaKQ4Uw%2BqPtwQY6pgF64TojJbPrxsIO%2FS%2BosGLqtG%2BtEwy6qTc8YAYp9P5uJv5QaFoMG%2BFR7hSmIYeB0NEzC78k%2BLZ6jSE5gMr7U0b2aepuROTcOwK9r6d5AT6iFIZLiTWh6ManLUgJ5DG7EnJ9vAn%2FonELYRX6TWXsh1NTvbIaBzWv9Y4hVLs4Ql9pCtFfSfOU%2FcrFiDReWxmxHPitaPbvdno%2FoGyAZPy3dx727IXmKqf6&X-Amz-Signature=eb6254197676dc802d00254c3b8164c326d0a03ea097632108686c86827d3a18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W2OPC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdbJVC5Rt2tHbyK0QuZIPNAa0qZulDBV8YMLntGoWhsAiBWN8nrer8u8EdpdP1vQQSVDfSRaZEtVA9i%2BiwQ0ImNCCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEipoUB1b2ysDGyXKtwDj7m50CY1q1RdrRZyr%2Fxz6zyfK7cb%2B2GbHy6tRyBmyzAo03wsO5EuB%2B3zTvMxvdkj9qNDYRkYyXGMuNmKNEFuZu2J0iJvwEB53o4RHGlrMNmcYflj7eTRVLH3jZjVoXtEeAmbDFPeCj38wkdSn6bIzV%2BbIMLdo7NVu%2BKaNymTEIfRCmaNp8M7FVPG%2FQeVBQB0THFhqvaUhQBn9uZqBRVAM%2Fe5gqGNq%2F43TCIUyj%2BKBDqEvO6QuzvCkyQ4fg2HOZx4D6PP5weSgpGlbmyLEqeZT1U8cRbjMoHX32PkPQlVrPq5khJvuhJfskfJPPlx1RZPuHlMVkkVKLxV7CVkLdECo3dGi%2BNyxd%2Brj5uPvZGlaiJ24NIT7eX2PGRA9OWpjTeTjrn%2FJw0EVqx443GqTVZeNjIoahqYc46bPOraiJ41DUmMa8Qo2rUOhpzlnbSA6L01qrTqIyMF%2FObxgz1j361hVzV1YVJ9jfh6OkRYykDUYjraYrePPzen0XFSJzpEPsb53WFtXa85S5%2FXs5e5qe8WlqJppVA%2B%2BuoUPAfqNlx4eI5JRmbeJBOa%2BaKHc3msiIJYQsu9MUCKuv2WSj4npWuscMliR%2BTxJSpL093YoHKNQKMKwx62kcCkTcaKQ4Uw%2BqPtwQY6pgF64TojJbPrxsIO%2FS%2BosGLqtG%2BtEwy6qTc8YAYp9P5uJv5QaFoMG%2BFR7hSmIYeB0NEzC78k%2BLZ6jSE5gMr7U0b2aepuROTcOwK9r6d5AT6iFIZLiTWh6ManLUgJ5DG7EnJ9vAn%2FonELYRX6TWXsh1NTvbIaBzWv9Y4hVLs4Ql9pCtFfSfOU%2FcrFiDReWxmxHPitaPbvdno%2FoGyAZPy3dx727IXmKqf6&X-Amz-Signature=4eb3d3a46e08c025b5afc9e3bb31b9eadc8b3f880b3276578d8eaf2847801733&X-Amz-SignedHeaders=host&x-id=GetObject)
