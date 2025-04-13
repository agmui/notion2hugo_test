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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVBS3MO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE%2FErvJy4KbohWTa9GPvGEPwbeo7TDFHR3EyLg14ZE7OAiBsj3g3GZLBZFf9qMx30Qox3bhYiUvoel%2FA9vNqrJmWZCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGi5%2FdCH77CiKxNOKtwDwQMz7H0WExnh%2BRxRCq6fHBtf6OW2iHUq%2BKZrnq6yl89NapkxourxKRq9UThrJ21ODkLIMUG8v7wy23qLzbL1Z9LZ7haAfRUBHDinXIH7IxlhjuJSnj%2FXGTsqXGq%2BMXiuyWni442%2FNNulfRXxPxA7DzYK4ae2WAX5xFn%2ByHIbx1CZ0ERG6%2BfpLGGNySMEFK4ayIoJ5TeeVRqFkMwGkOWUzCzngcUa30QkbPmk838PPh6Y%2FH8viVh1RztlgWwFaH5SsNtu1QgpfxgsOepNndLfwdtww02Mv9SZT%2FS8Hxb7ItTnZC1BXRgH0D2LQWGKux%2FkLaMteQQpSMADpQIxrPhc3UHRjt4%2Fe10ganA2AAZK4Q%2BHuoOsAGITlms%2B1ddRexwfvpedZycPQEpd5pxrgcRsmdA3L1yd2VWS0Z7oSprxgcIDn9Bm06NDVdyDd42IiiX5n2MAfcMYfUNz9xRJ%2BxR%2BCiLTPtDmMM4YA%2F69utgNr1b45FSehH0Rm4wXT6lVmsJuf%2BexdF4bTQvUs3CfFdIVOR5OePkxCorlFTNXhG8XvMFPoKNbmz4%2ByJ1OwNXnaqOSDLLVly4p0y9tKS8JOZVNRYaOWvGk9n0kyocxIppTqqBLiCGYLVNC5m5m5zwwuoLxvwY6pgGcEsoY8eySQ%2BSBctUAwC2jWRHS2ntK1lmbh2028gYEWVFVx4cYYcwUZhbpchhNEvo7Np8d3aC9uPgPvefhw5ny7ylNiliitU%2F%2BXruprTgFfc%2BFgG76tj4iP5hoW3kTifbt62ufrCF0TB%2FWE1ISaQyLLvspC98zq%2B8KUhF5gOlsilJDQln4RTFLk8hDfST71loxBY74qUIcCTnpxnHesRyompq0M39Y&X-Amz-Signature=414a130afb17a45fa3bf0fc91fe671345438e61a5e996554051abc80127d42a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVBS3MO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE%2FErvJy4KbohWTa9GPvGEPwbeo7TDFHR3EyLg14ZE7OAiBsj3g3GZLBZFf9qMx30Qox3bhYiUvoel%2FA9vNqrJmWZCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGi5%2FdCH77CiKxNOKtwDwQMz7H0WExnh%2BRxRCq6fHBtf6OW2iHUq%2BKZrnq6yl89NapkxourxKRq9UThrJ21ODkLIMUG8v7wy23qLzbL1Z9LZ7haAfRUBHDinXIH7IxlhjuJSnj%2FXGTsqXGq%2BMXiuyWni442%2FNNulfRXxPxA7DzYK4ae2WAX5xFn%2ByHIbx1CZ0ERG6%2BfpLGGNySMEFK4ayIoJ5TeeVRqFkMwGkOWUzCzngcUa30QkbPmk838PPh6Y%2FH8viVh1RztlgWwFaH5SsNtu1QgpfxgsOepNndLfwdtww02Mv9SZT%2FS8Hxb7ItTnZC1BXRgH0D2LQWGKux%2FkLaMteQQpSMADpQIxrPhc3UHRjt4%2Fe10ganA2AAZK4Q%2BHuoOsAGITlms%2B1ddRexwfvpedZycPQEpd5pxrgcRsmdA3L1yd2VWS0Z7oSprxgcIDn9Bm06NDVdyDd42IiiX5n2MAfcMYfUNz9xRJ%2BxR%2BCiLTPtDmMM4YA%2F69utgNr1b45FSehH0Rm4wXT6lVmsJuf%2BexdF4bTQvUs3CfFdIVOR5OePkxCorlFTNXhG8XvMFPoKNbmz4%2ByJ1OwNXnaqOSDLLVly4p0y9tKS8JOZVNRYaOWvGk9n0kyocxIppTqqBLiCGYLVNC5m5m5zwwuoLxvwY6pgGcEsoY8eySQ%2BSBctUAwC2jWRHS2ntK1lmbh2028gYEWVFVx4cYYcwUZhbpchhNEvo7Np8d3aC9uPgPvefhw5ny7ylNiliitU%2F%2BXruprTgFfc%2BFgG76tj4iP5hoW3kTifbt62ufrCF0TB%2FWE1ISaQyLLvspC98zq%2B8KUhF5gOlsilJDQln4RTFLk8hDfST71loxBY74qUIcCTnpxnHesRyompq0M39Y&X-Amz-Signature=4d8c29110d2435f253630343f4c88a27d00d335df96602de3b5098c397d10d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVBS3MO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE%2FErvJy4KbohWTa9GPvGEPwbeo7TDFHR3EyLg14ZE7OAiBsj3g3GZLBZFf9qMx30Qox3bhYiUvoel%2FA9vNqrJmWZCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGi5%2FdCH77CiKxNOKtwDwQMz7H0WExnh%2BRxRCq6fHBtf6OW2iHUq%2BKZrnq6yl89NapkxourxKRq9UThrJ21ODkLIMUG8v7wy23qLzbL1Z9LZ7haAfRUBHDinXIH7IxlhjuJSnj%2FXGTsqXGq%2BMXiuyWni442%2FNNulfRXxPxA7DzYK4ae2WAX5xFn%2ByHIbx1CZ0ERG6%2BfpLGGNySMEFK4ayIoJ5TeeVRqFkMwGkOWUzCzngcUa30QkbPmk838PPh6Y%2FH8viVh1RztlgWwFaH5SsNtu1QgpfxgsOepNndLfwdtww02Mv9SZT%2FS8Hxb7ItTnZC1BXRgH0D2LQWGKux%2FkLaMteQQpSMADpQIxrPhc3UHRjt4%2Fe10ganA2AAZK4Q%2BHuoOsAGITlms%2B1ddRexwfvpedZycPQEpd5pxrgcRsmdA3L1yd2VWS0Z7oSprxgcIDn9Bm06NDVdyDd42IiiX5n2MAfcMYfUNz9xRJ%2BxR%2BCiLTPtDmMM4YA%2F69utgNr1b45FSehH0Rm4wXT6lVmsJuf%2BexdF4bTQvUs3CfFdIVOR5OePkxCorlFTNXhG8XvMFPoKNbmz4%2ByJ1OwNXnaqOSDLLVly4p0y9tKS8JOZVNRYaOWvGk9n0kyocxIppTqqBLiCGYLVNC5m5m5zwwuoLxvwY6pgGcEsoY8eySQ%2BSBctUAwC2jWRHS2ntK1lmbh2028gYEWVFVx4cYYcwUZhbpchhNEvo7Np8d3aC9uPgPvefhw5ny7ylNiliitU%2F%2BXruprTgFfc%2BFgG76tj4iP5hoW3kTifbt62ufrCF0TB%2FWE1ISaQyLLvspC98zq%2B8KUhF5gOlsilJDQln4RTFLk8hDfST71loxBY74qUIcCTnpxnHesRyompq0M39Y&X-Amz-Signature=bff85f203f812a1fa347a7e7fc1939bf5bac1cbc7b73c7b57569de597f757312&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVBS3MO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE%2FErvJy4KbohWTa9GPvGEPwbeo7TDFHR3EyLg14ZE7OAiBsj3g3GZLBZFf9qMx30Qox3bhYiUvoel%2FA9vNqrJmWZCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGi5%2FdCH77CiKxNOKtwDwQMz7H0WExnh%2BRxRCq6fHBtf6OW2iHUq%2BKZrnq6yl89NapkxourxKRq9UThrJ21ODkLIMUG8v7wy23qLzbL1Z9LZ7haAfRUBHDinXIH7IxlhjuJSnj%2FXGTsqXGq%2BMXiuyWni442%2FNNulfRXxPxA7DzYK4ae2WAX5xFn%2ByHIbx1CZ0ERG6%2BfpLGGNySMEFK4ayIoJ5TeeVRqFkMwGkOWUzCzngcUa30QkbPmk838PPh6Y%2FH8viVh1RztlgWwFaH5SsNtu1QgpfxgsOepNndLfwdtww02Mv9SZT%2FS8Hxb7ItTnZC1BXRgH0D2LQWGKux%2FkLaMteQQpSMADpQIxrPhc3UHRjt4%2Fe10ganA2AAZK4Q%2BHuoOsAGITlms%2B1ddRexwfvpedZycPQEpd5pxrgcRsmdA3L1yd2VWS0Z7oSprxgcIDn9Bm06NDVdyDd42IiiX5n2MAfcMYfUNz9xRJ%2BxR%2BCiLTPtDmMM4YA%2F69utgNr1b45FSehH0Rm4wXT6lVmsJuf%2BexdF4bTQvUs3CfFdIVOR5OePkxCorlFTNXhG8XvMFPoKNbmz4%2ByJ1OwNXnaqOSDLLVly4p0y9tKS8JOZVNRYaOWvGk9n0kyocxIppTqqBLiCGYLVNC5m5m5zwwuoLxvwY6pgGcEsoY8eySQ%2BSBctUAwC2jWRHS2ntK1lmbh2028gYEWVFVx4cYYcwUZhbpchhNEvo7Np8d3aC9uPgPvefhw5ny7ylNiliitU%2F%2BXruprTgFfc%2BFgG76tj4iP5hoW3kTifbt62ufrCF0TB%2FWE1ISaQyLLvspC98zq%2B8KUhF5gOlsilJDQln4RTFLk8hDfST71loxBY74qUIcCTnpxnHesRyompq0M39Y&X-Amz-Signature=7b32bfb040b206c5b77fb067a2fcd91a582d4b2c36be56dc906f5b791c23bde0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVBS3MO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE%2FErvJy4KbohWTa9GPvGEPwbeo7TDFHR3EyLg14ZE7OAiBsj3g3GZLBZFf9qMx30Qox3bhYiUvoel%2FA9vNqrJmWZCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGi5%2FdCH77CiKxNOKtwDwQMz7H0WExnh%2BRxRCq6fHBtf6OW2iHUq%2BKZrnq6yl89NapkxourxKRq9UThrJ21ODkLIMUG8v7wy23qLzbL1Z9LZ7haAfRUBHDinXIH7IxlhjuJSnj%2FXGTsqXGq%2BMXiuyWni442%2FNNulfRXxPxA7DzYK4ae2WAX5xFn%2ByHIbx1CZ0ERG6%2BfpLGGNySMEFK4ayIoJ5TeeVRqFkMwGkOWUzCzngcUa30QkbPmk838PPh6Y%2FH8viVh1RztlgWwFaH5SsNtu1QgpfxgsOepNndLfwdtww02Mv9SZT%2FS8Hxb7ItTnZC1BXRgH0D2LQWGKux%2FkLaMteQQpSMADpQIxrPhc3UHRjt4%2Fe10ganA2AAZK4Q%2BHuoOsAGITlms%2B1ddRexwfvpedZycPQEpd5pxrgcRsmdA3L1yd2VWS0Z7oSprxgcIDn9Bm06NDVdyDd42IiiX5n2MAfcMYfUNz9xRJ%2BxR%2BCiLTPtDmMM4YA%2F69utgNr1b45FSehH0Rm4wXT6lVmsJuf%2BexdF4bTQvUs3CfFdIVOR5OePkxCorlFTNXhG8XvMFPoKNbmz4%2ByJ1OwNXnaqOSDLLVly4p0y9tKS8JOZVNRYaOWvGk9n0kyocxIppTqqBLiCGYLVNC5m5m5zwwuoLxvwY6pgGcEsoY8eySQ%2BSBctUAwC2jWRHS2ntK1lmbh2028gYEWVFVx4cYYcwUZhbpchhNEvo7Np8d3aC9uPgPvefhw5ny7ylNiliitU%2F%2BXruprTgFfc%2BFgG76tj4iP5hoW3kTifbt62ufrCF0TB%2FWE1ISaQyLLvspC98zq%2B8KUhF5gOlsilJDQln4RTFLk8hDfST71loxBY74qUIcCTnpxnHesRyompq0M39Y&X-Amz-Signature=853a8992b6816f4e3ce9e3a3df93d1408762e37095454a4cbcb690328e7c9779&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVBS3MO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIE%2FErvJy4KbohWTa9GPvGEPwbeo7TDFHR3EyLg14ZE7OAiBsj3g3GZLBZFf9qMx30Qox3bhYiUvoel%2FA9vNqrJmWZCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGi5%2FdCH77CiKxNOKtwDwQMz7H0WExnh%2BRxRCq6fHBtf6OW2iHUq%2BKZrnq6yl89NapkxourxKRq9UThrJ21ODkLIMUG8v7wy23qLzbL1Z9LZ7haAfRUBHDinXIH7IxlhjuJSnj%2FXGTsqXGq%2BMXiuyWni442%2FNNulfRXxPxA7DzYK4ae2WAX5xFn%2ByHIbx1CZ0ERG6%2BfpLGGNySMEFK4ayIoJ5TeeVRqFkMwGkOWUzCzngcUa30QkbPmk838PPh6Y%2FH8viVh1RztlgWwFaH5SsNtu1QgpfxgsOepNndLfwdtww02Mv9SZT%2FS8Hxb7ItTnZC1BXRgH0D2LQWGKux%2FkLaMteQQpSMADpQIxrPhc3UHRjt4%2Fe10ganA2AAZK4Q%2BHuoOsAGITlms%2B1ddRexwfvpedZycPQEpd5pxrgcRsmdA3L1yd2VWS0Z7oSprxgcIDn9Bm06NDVdyDd42IiiX5n2MAfcMYfUNz9xRJ%2BxR%2BCiLTPtDmMM4YA%2F69utgNr1b45FSehH0Rm4wXT6lVmsJuf%2BexdF4bTQvUs3CfFdIVOR5OePkxCorlFTNXhG8XvMFPoKNbmz4%2ByJ1OwNXnaqOSDLLVly4p0y9tKS8JOZVNRYaOWvGk9n0kyocxIppTqqBLiCGYLVNC5m5m5zwwuoLxvwY6pgGcEsoY8eySQ%2BSBctUAwC2jWRHS2ntK1lmbh2028gYEWVFVx4cYYcwUZhbpchhNEvo7Np8d3aC9uPgPvefhw5ny7ylNiliitU%2F%2BXruprTgFfc%2BFgG76tj4iP5hoW3kTifbt62ufrCF0TB%2FWE1ISaQyLLvspC98zq%2B8KUhF5gOlsilJDQln4RTFLk8hDfST71loxBY74qUIcCTnpxnHesRyompq0M39Y&X-Amz-Signature=f762191b7c1abe6ed0ff28ecc17393aabb32a266f1608d42fbe7144d1aceb07e&X-Amz-SignedHeaders=host&x-id=GetObject)
