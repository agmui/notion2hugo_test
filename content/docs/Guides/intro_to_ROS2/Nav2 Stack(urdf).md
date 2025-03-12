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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUVHVW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAMiS1fRL8066CTLmYgosZiIjn7pSAX%2FnI41Xghq3LFgAiBujnpD8sSVLwYIau8KIHmoVgMRpbN4kQAm%2FZ4LuAOxuSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJd2zV5FlPfIuGQeKtwDBj76l2uzFnUdhH2J1HsioX2LOPFtRh6LBNGZJ9w9UUGyExRt%2FM9D1WvrXtjoA5hhH9ONldPxXUjSOJu05bxrsSSp1YV7LiX12wS2lZDRqwEFMXvj3ousVusVfA6cvWQBVPs5OU%2Bekqjx51fr2%2BrjJVdybLvW3BJDy0LB3etjLDbETqybzYyRJUrNNSRAFUqgiZhNacII5gOcPQNZdl2wmkhwEkpTHn3aKxCtz%2Fg478tZguFPs0XGsUGTFXoG4KsB5N1fsp5GOoZn1qz5BG%2B6r%2B1F34PSjAR5xues5XAbCoMoWdbupej6bk%2FQgXMnGRLCyHtjq8%2B7h9RMowJFqffEV6fG8bQqm9YOQee8AMf8TGCa4V8zCIL2cPh0MZdx6jrqeHxnbxWBZNMGehNbsFBUu9Zn83jbaEaByFw2ktHo0yS3U8HKltZ2X7gvI1BM6ugMT4CfsVNj3IK3am6OeGrMVJjIcry%2Fs8tWc2CwcVeWsecQJrO6Jz2R6i8HYnTdTclFJ%2BvwYE8yVo9aictmJQLdY8jUEii57wIlRkV%2FlzGkfNEktIPPf%2BfXmfZUaSzcpxdAaZBMODUMls3FrvubJWPYKPADYCanYI8mSb42cDPtUT6hHdX5OUf%2F7Ak9%2Fjsw%2BvvEvgY6pgEANh1vjBW10%2BOLsshm7MgzUb61A3CVTaDAzCXYvMMFNRPssn%2FJZNMK3XYdFfNwSdKMtVocco4aDtOYENNlZJFneuGdCVslEyDR2jX0l3rCVV%2Fm%2FG%2B9k4r%2Bk6hYxpYpF8Kc8yD7INZle0Uq06z00gGBEnQSlzgXN8TtyTIxHKzytMNux5nAb54RQs%2FGntt74QOuwPNcFc27BXB4YqtK%2BZ1lFrbi%2B%2BXv&X-Amz-Signature=01bb5dd5510509d063d99af8c31a99d52d13b154cff3d73c3a967c21196e8202&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUVHVW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAMiS1fRL8066CTLmYgosZiIjn7pSAX%2FnI41Xghq3LFgAiBujnpD8sSVLwYIau8KIHmoVgMRpbN4kQAm%2FZ4LuAOxuSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJd2zV5FlPfIuGQeKtwDBj76l2uzFnUdhH2J1HsioX2LOPFtRh6LBNGZJ9w9UUGyExRt%2FM9D1WvrXtjoA5hhH9ONldPxXUjSOJu05bxrsSSp1YV7LiX12wS2lZDRqwEFMXvj3ousVusVfA6cvWQBVPs5OU%2Bekqjx51fr2%2BrjJVdybLvW3BJDy0LB3etjLDbETqybzYyRJUrNNSRAFUqgiZhNacII5gOcPQNZdl2wmkhwEkpTHn3aKxCtz%2Fg478tZguFPs0XGsUGTFXoG4KsB5N1fsp5GOoZn1qz5BG%2B6r%2B1F34PSjAR5xues5XAbCoMoWdbupej6bk%2FQgXMnGRLCyHtjq8%2B7h9RMowJFqffEV6fG8bQqm9YOQee8AMf8TGCa4V8zCIL2cPh0MZdx6jrqeHxnbxWBZNMGehNbsFBUu9Zn83jbaEaByFw2ktHo0yS3U8HKltZ2X7gvI1BM6ugMT4CfsVNj3IK3am6OeGrMVJjIcry%2Fs8tWc2CwcVeWsecQJrO6Jz2R6i8HYnTdTclFJ%2BvwYE8yVo9aictmJQLdY8jUEii57wIlRkV%2FlzGkfNEktIPPf%2BfXmfZUaSzcpxdAaZBMODUMls3FrvubJWPYKPADYCanYI8mSb42cDPtUT6hHdX5OUf%2F7Ak9%2Fjsw%2BvvEvgY6pgEANh1vjBW10%2BOLsshm7MgzUb61A3CVTaDAzCXYvMMFNRPssn%2FJZNMK3XYdFfNwSdKMtVocco4aDtOYENNlZJFneuGdCVslEyDR2jX0l3rCVV%2Fm%2FG%2B9k4r%2Bk6hYxpYpF8Kc8yD7INZle0Uq06z00gGBEnQSlzgXN8TtyTIxHKzytMNux5nAb54RQs%2FGntt74QOuwPNcFc27BXB4YqtK%2BZ1lFrbi%2B%2BXv&X-Amz-Signature=ea891f1cf3b34e13fde7720a1c51e4974c819cc2d53db65e23d8efb0c8b57335&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUVHVW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAMiS1fRL8066CTLmYgosZiIjn7pSAX%2FnI41Xghq3LFgAiBujnpD8sSVLwYIau8KIHmoVgMRpbN4kQAm%2FZ4LuAOxuSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJd2zV5FlPfIuGQeKtwDBj76l2uzFnUdhH2J1HsioX2LOPFtRh6LBNGZJ9w9UUGyExRt%2FM9D1WvrXtjoA5hhH9ONldPxXUjSOJu05bxrsSSp1YV7LiX12wS2lZDRqwEFMXvj3ousVusVfA6cvWQBVPs5OU%2Bekqjx51fr2%2BrjJVdybLvW3BJDy0LB3etjLDbETqybzYyRJUrNNSRAFUqgiZhNacII5gOcPQNZdl2wmkhwEkpTHn3aKxCtz%2Fg478tZguFPs0XGsUGTFXoG4KsB5N1fsp5GOoZn1qz5BG%2B6r%2B1F34PSjAR5xues5XAbCoMoWdbupej6bk%2FQgXMnGRLCyHtjq8%2B7h9RMowJFqffEV6fG8bQqm9YOQee8AMf8TGCa4V8zCIL2cPh0MZdx6jrqeHxnbxWBZNMGehNbsFBUu9Zn83jbaEaByFw2ktHo0yS3U8HKltZ2X7gvI1BM6ugMT4CfsVNj3IK3am6OeGrMVJjIcry%2Fs8tWc2CwcVeWsecQJrO6Jz2R6i8HYnTdTclFJ%2BvwYE8yVo9aictmJQLdY8jUEii57wIlRkV%2FlzGkfNEktIPPf%2BfXmfZUaSzcpxdAaZBMODUMls3FrvubJWPYKPADYCanYI8mSb42cDPtUT6hHdX5OUf%2F7Ak9%2Fjsw%2BvvEvgY6pgEANh1vjBW10%2BOLsshm7MgzUb61A3CVTaDAzCXYvMMFNRPssn%2FJZNMK3XYdFfNwSdKMtVocco4aDtOYENNlZJFneuGdCVslEyDR2jX0l3rCVV%2Fm%2FG%2B9k4r%2Bk6hYxpYpF8Kc8yD7INZle0Uq06z00gGBEnQSlzgXN8TtyTIxHKzytMNux5nAb54RQs%2FGntt74QOuwPNcFc27BXB4YqtK%2BZ1lFrbi%2B%2BXv&X-Amz-Signature=264b2c7a7dd22bf2498e5ed068ee3e23aaa98d5ee98df3dc200c0bb1a1047c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUVHVW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAMiS1fRL8066CTLmYgosZiIjn7pSAX%2FnI41Xghq3LFgAiBujnpD8sSVLwYIau8KIHmoVgMRpbN4kQAm%2FZ4LuAOxuSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJd2zV5FlPfIuGQeKtwDBj76l2uzFnUdhH2J1HsioX2LOPFtRh6LBNGZJ9w9UUGyExRt%2FM9D1WvrXtjoA5hhH9ONldPxXUjSOJu05bxrsSSp1YV7LiX12wS2lZDRqwEFMXvj3ousVusVfA6cvWQBVPs5OU%2Bekqjx51fr2%2BrjJVdybLvW3BJDy0LB3etjLDbETqybzYyRJUrNNSRAFUqgiZhNacII5gOcPQNZdl2wmkhwEkpTHn3aKxCtz%2Fg478tZguFPs0XGsUGTFXoG4KsB5N1fsp5GOoZn1qz5BG%2B6r%2B1F34PSjAR5xues5XAbCoMoWdbupej6bk%2FQgXMnGRLCyHtjq8%2B7h9RMowJFqffEV6fG8bQqm9YOQee8AMf8TGCa4V8zCIL2cPh0MZdx6jrqeHxnbxWBZNMGehNbsFBUu9Zn83jbaEaByFw2ktHo0yS3U8HKltZ2X7gvI1BM6ugMT4CfsVNj3IK3am6OeGrMVJjIcry%2Fs8tWc2CwcVeWsecQJrO6Jz2R6i8HYnTdTclFJ%2BvwYE8yVo9aictmJQLdY8jUEii57wIlRkV%2FlzGkfNEktIPPf%2BfXmfZUaSzcpxdAaZBMODUMls3FrvubJWPYKPADYCanYI8mSb42cDPtUT6hHdX5OUf%2F7Ak9%2Fjsw%2BvvEvgY6pgEANh1vjBW10%2BOLsshm7MgzUb61A3CVTaDAzCXYvMMFNRPssn%2FJZNMK3XYdFfNwSdKMtVocco4aDtOYENNlZJFneuGdCVslEyDR2jX0l3rCVV%2Fm%2FG%2B9k4r%2Bk6hYxpYpF8Kc8yD7INZle0Uq06z00gGBEnQSlzgXN8TtyTIxHKzytMNux5nAb54RQs%2FGntt74QOuwPNcFc27BXB4YqtK%2BZ1lFrbi%2B%2BXv&X-Amz-Signature=74dd63b4bcb7743d3ecc541af0770177c5e1d37959e98a2f20cada349503dd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUVHVW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAMiS1fRL8066CTLmYgosZiIjn7pSAX%2FnI41Xghq3LFgAiBujnpD8sSVLwYIau8KIHmoVgMRpbN4kQAm%2FZ4LuAOxuSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJd2zV5FlPfIuGQeKtwDBj76l2uzFnUdhH2J1HsioX2LOPFtRh6LBNGZJ9w9UUGyExRt%2FM9D1WvrXtjoA5hhH9ONldPxXUjSOJu05bxrsSSp1YV7LiX12wS2lZDRqwEFMXvj3ousVusVfA6cvWQBVPs5OU%2Bekqjx51fr2%2BrjJVdybLvW3BJDy0LB3etjLDbETqybzYyRJUrNNSRAFUqgiZhNacII5gOcPQNZdl2wmkhwEkpTHn3aKxCtz%2Fg478tZguFPs0XGsUGTFXoG4KsB5N1fsp5GOoZn1qz5BG%2B6r%2B1F34PSjAR5xues5XAbCoMoWdbupej6bk%2FQgXMnGRLCyHtjq8%2B7h9RMowJFqffEV6fG8bQqm9YOQee8AMf8TGCa4V8zCIL2cPh0MZdx6jrqeHxnbxWBZNMGehNbsFBUu9Zn83jbaEaByFw2ktHo0yS3U8HKltZ2X7gvI1BM6ugMT4CfsVNj3IK3am6OeGrMVJjIcry%2Fs8tWc2CwcVeWsecQJrO6Jz2R6i8HYnTdTclFJ%2BvwYE8yVo9aictmJQLdY8jUEii57wIlRkV%2FlzGkfNEktIPPf%2BfXmfZUaSzcpxdAaZBMODUMls3FrvubJWPYKPADYCanYI8mSb42cDPtUT6hHdX5OUf%2F7Ak9%2Fjsw%2BvvEvgY6pgEANh1vjBW10%2BOLsshm7MgzUb61A3CVTaDAzCXYvMMFNRPssn%2FJZNMK3XYdFfNwSdKMtVocco4aDtOYENNlZJFneuGdCVslEyDR2jX0l3rCVV%2Fm%2FG%2B9k4r%2Bk6hYxpYpF8Kc8yD7INZle0Uq06z00gGBEnQSlzgXN8TtyTIxHKzytMNux5nAb54RQs%2FGntt74QOuwPNcFc27BXB4YqtK%2BZ1lFrbi%2B%2BXv&X-Amz-Signature=f63eec1f651e8fd2e3af781faa62906f14bba28ed1bbe12f492445830b8815f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUUVHVW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAMiS1fRL8066CTLmYgosZiIjn7pSAX%2FnI41Xghq3LFgAiBujnpD8sSVLwYIau8KIHmoVgMRpbN4kQAm%2FZ4LuAOxuSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiJd2zV5FlPfIuGQeKtwDBj76l2uzFnUdhH2J1HsioX2LOPFtRh6LBNGZJ9w9UUGyExRt%2FM9D1WvrXtjoA5hhH9ONldPxXUjSOJu05bxrsSSp1YV7LiX12wS2lZDRqwEFMXvj3ousVusVfA6cvWQBVPs5OU%2Bekqjx51fr2%2BrjJVdybLvW3BJDy0LB3etjLDbETqybzYyRJUrNNSRAFUqgiZhNacII5gOcPQNZdl2wmkhwEkpTHn3aKxCtz%2Fg478tZguFPs0XGsUGTFXoG4KsB5N1fsp5GOoZn1qz5BG%2B6r%2B1F34PSjAR5xues5XAbCoMoWdbupej6bk%2FQgXMnGRLCyHtjq8%2B7h9RMowJFqffEV6fG8bQqm9YOQee8AMf8TGCa4V8zCIL2cPh0MZdx6jrqeHxnbxWBZNMGehNbsFBUu9Zn83jbaEaByFw2ktHo0yS3U8HKltZ2X7gvI1BM6ugMT4CfsVNj3IK3am6OeGrMVJjIcry%2Fs8tWc2CwcVeWsecQJrO6Jz2R6i8HYnTdTclFJ%2BvwYE8yVo9aictmJQLdY8jUEii57wIlRkV%2FlzGkfNEktIPPf%2BfXmfZUaSzcpxdAaZBMODUMls3FrvubJWPYKPADYCanYI8mSb42cDPtUT6hHdX5OUf%2F7Ak9%2Fjsw%2BvvEvgY6pgEANh1vjBW10%2BOLsshm7MgzUb61A3CVTaDAzCXYvMMFNRPssn%2FJZNMK3XYdFfNwSdKMtVocco4aDtOYENNlZJFneuGdCVslEyDR2jX0l3rCVV%2Fm%2FG%2B9k4r%2Bk6hYxpYpF8Kc8yD7INZle0Uq06z00gGBEnQSlzgXN8TtyTIxHKzytMNux5nAb54RQs%2FGntt74QOuwPNcFc27BXB4YqtK%2BZ1lFrbi%2B%2BXv&X-Amz-Signature=94ac434ede16f9895ddcf61d1e6ef3fde4285bd9b7d0542c3961182b791b80ed&X-Amz-SignedHeaders=host&x-id=GetObject)
