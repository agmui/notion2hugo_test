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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=0a39887f29cd2c8c1577934c127ada8c1a3279380fe4b260f69ff696cd674010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=284e50d63dd5978434fa363e5e33b4cc7a77033cf4e084b1ce3532ed0f6a6998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=daefc3f8d78ea8f617f79e0752773ad24af5110453a8ce64996fc343827c1f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=eb2cb0047012af7ed6c4b9fb85751186cd8b951f543f4966fd83a3b81f2d57f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=af5c682e71fb320dde27ef17d3338dc1205115a8c1d337b54bb4ccca4f13c35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJ545K6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDFK1c%2FBcsQH7vT%2B%2FxzbQdkiSpjyg5XayA%2FhmTqy0ekMAiBfy58f3qMkOm8yEc248Nb4YutFisoK4pifVbGp8h%2BIzir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFshxRxPtLBskneAIKtwDAWiwyj8WANFV144zEJaEiJCGKFgIuotyTC64hvFCGOX3Yl%2BONKGmXei6QNqE7tCPR9IDHEpE4gx3J7LTY8u0dsbapKd244aqES0IXHXF53RRBBbaqwurvjw%2FNfKJYN0bqib%2FteidEiP6ailY7hoykE3z7SP7iDgI0XLxE66a41zMkMl2cGNbnCxBK2DzdJKTRzDknVMVg%2B5D0mEO0E1RWgSAgDmJFQ6e5EoJ5qv0WO1oUtv%2F3Xci6abfe2KsIMrDREXnohTrWNBpzT6yTLBWXRssQrPNqx65TczBFHtLg%2FWl9NGa4UbIZv7dWvEtQfsCHYKrLvqPs4NxkcxsC0UXR9%2FM4e1W0uDEprLqA5Nsk9krkCNl9n1ciX6022oyYP%2Bus%2F7oxl%2FL16a0vkAqwDgI7gbaY7ISOr2Q6tuRryySvWaGUN01m0vIDtwKaqPzXqcTh48H9bPKuHhOSVettfJK41khVP0TUdzloSjfFhiLF0%2BHF7iiQcO9sM9hpc5aBVyVwke3HDidTnS1sd41Yi3nMXkBJJOjQKbLu%2FchOAcJ%2F4JXmv13PuSgTTcoTdShizpy4y%2Bo5Bm0WkiSGl6GSMTK6xoaS4XK8Owhhl%2F6RySZFjQeXl8qhxSZ77WTS7Ew3KuowwY6pgFhGklY4mnnOpz6CEyiK7f6M%2B7ZfbmdasPdU4kiNdnqTWTLQ8vkd9LmjQcKkfhUu%2B%2B9KJ0hPiWIJ9lVhLxv2FDcWC%2Fb4jGBXc%2BOhZ%2FXFKsCtj5nSWAhfsywVW%2BTiUh%2F8GIA7KcIfWMvp7rdUI%2BjcSjZWMeI83wke3D7cd%2FqdQb9BKmlhJ4i2vI6mtTZPi1HVvzR9%2Fpk82%2B%2BUcTiIck%2FsM1gpoo4MGqN&X-Amz-Signature=62a0173c48aabee146c8b6d3608fdaeb8e21c37a48511b4b72bed1a86531ca98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
