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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZJRPIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BX3fCF%2BnxMj%2FQoeaeSz60x%2BY846MnljVow817BXWTaAiB40QuTwYgm0rRnvX6hFbLIwVecgbpp54JGhh0KlQa2qyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY0OXyFMmAu%2FTeEU%2FKtwDDjI4HLwNbee87%2BQFJweGEbe6O5qaEUjFo%2BzvGBSPP0wsp8oZ43tl%2FurSA04drCw9YiZxYmsL7jINwknDGSlX%2F0Z8%2FXEr3a33TzzFOMQJS6m3mfB2f1fSMaXJsMbAAs0kspCiFR1xj6vWVYfBoOTTPIkrpUzS6aYXL764ZeaR0lULa6PHGdY1Z2tSfGHUmgcWEhI0QieJHVQG5hANC96UygYkP1JJjehMNKWxW2JWatJWtex3susfQCBTcvuudfDEEAn8Azx1R4xKZOGvyAsz8h90pUII%2BKuPiOuV8M2l0O8Ax%2ByYUeCKqyEVDyGpc10Deav92IIPyTPkUIwQRVwasan5g5Ze%2FrRbJcOvze3Pjhj5x1uoKi243XhbvQt1GvgJi94LNLapjiYqb76d8Lpcbn1Ce3K5tKC%2FBBz9yMltQne7TZKvweGJK1Ni9sViRFwGuFV0yzl4dmlBp0Dj8NBl2RCnXD9eK4l9GMMTX3EZZrqV6FYxox4sGWeGgdeTtuzlJUIKGlbXU7X6Rk%2F48trivXvIZz1VrCzIke2kDl9WJ4W95cALArPW66WwTU14nx5wPmRKbI0oA0%2FZU%2FlBlENHUVTzAEt6kXBlhxhfd7mEGf%2B5UAWE1wXViO7oLmUwlrLswAY6pgHPX%2B1lS%2BwrVU%2BTlyB1V4%2FI87td0UOBp7GNV45e%2B46Iskm6WK%2FGJGeb5tdk11nmaQl5XRbNoPCe0r87Yb1DoUuBNk31xJ2FKZC9%2BZ4YW%2FXr70Bvfs9NOMsCL9Tak%2Bb9nvZicSphWHuWu9JNlQ695uJywaOrR74Kdxt2Is4aobnPWgkNMif5p%2Fhurfb%2Fq15QI8CapqusbPyPSQSjYdZSlmJ6MyGpUkwA&X-Amz-Signature=8ee639df26e65b98f6fce3f5b1868bf9eeca45a28c722378978df4dd1ee4708b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZJRPIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BX3fCF%2BnxMj%2FQoeaeSz60x%2BY846MnljVow817BXWTaAiB40QuTwYgm0rRnvX6hFbLIwVecgbpp54JGhh0KlQa2qyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY0OXyFMmAu%2FTeEU%2FKtwDDjI4HLwNbee87%2BQFJweGEbe6O5qaEUjFo%2BzvGBSPP0wsp8oZ43tl%2FurSA04drCw9YiZxYmsL7jINwknDGSlX%2F0Z8%2FXEr3a33TzzFOMQJS6m3mfB2f1fSMaXJsMbAAs0kspCiFR1xj6vWVYfBoOTTPIkrpUzS6aYXL764ZeaR0lULa6PHGdY1Z2tSfGHUmgcWEhI0QieJHVQG5hANC96UygYkP1JJjehMNKWxW2JWatJWtex3susfQCBTcvuudfDEEAn8Azx1R4xKZOGvyAsz8h90pUII%2BKuPiOuV8M2l0O8Ax%2ByYUeCKqyEVDyGpc10Deav92IIPyTPkUIwQRVwasan5g5Ze%2FrRbJcOvze3Pjhj5x1uoKi243XhbvQt1GvgJi94LNLapjiYqb76d8Lpcbn1Ce3K5tKC%2FBBz9yMltQne7TZKvweGJK1Ni9sViRFwGuFV0yzl4dmlBp0Dj8NBl2RCnXD9eK4l9GMMTX3EZZrqV6FYxox4sGWeGgdeTtuzlJUIKGlbXU7X6Rk%2F48trivXvIZz1VrCzIke2kDl9WJ4W95cALArPW66WwTU14nx5wPmRKbI0oA0%2FZU%2FlBlENHUVTzAEt6kXBlhxhfd7mEGf%2B5UAWE1wXViO7oLmUwlrLswAY6pgHPX%2B1lS%2BwrVU%2BTlyB1V4%2FI87td0UOBp7GNV45e%2B46Iskm6WK%2FGJGeb5tdk11nmaQl5XRbNoPCe0r87Yb1DoUuBNk31xJ2FKZC9%2BZ4YW%2FXr70Bvfs9NOMsCL9Tak%2Bb9nvZicSphWHuWu9JNlQ695uJywaOrR74Kdxt2Is4aobnPWgkNMif5p%2Fhurfb%2Fq15QI8CapqusbPyPSQSjYdZSlmJ6MyGpUkwA&X-Amz-Signature=5ada7b079f31795856cf94b6f5ace913580d4e887695d3801e57e285f394d4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZJRPIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BX3fCF%2BnxMj%2FQoeaeSz60x%2BY846MnljVow817BXWTaAiB40QuTwYgm0rRnvX6hFbLIwVecgbpp54JGhh0KlQa2qyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY0OXyFMmAu%2FTeEU%2FKtwDDjI4HLwNbee87%2BQFJweGEbe6O5qaEUjFo%2BzvGBSPP0wsp8oZ43tl%2FurSA04drCw9YiZxYmsL7jINwknDGSlX%2F0Z8%2FXEr3a33TzzFOMQJS6m3mfB2f1fSMaXJsMbAAs0kspCiFR1xj6vWVYfBoOTTPIkrpUzS6aYXL764ZeaR0lULa6PHGdY1Z2tSfGHUmgcWEhI0QieJHVQG5hANC96UygYkP1JJjehMNKWxW2JWatJWtex3susfQCBTcvuudfDEEAn8Azx1R4xKZOGvyAsz8h90pUII%2BKuPiOuV8M2l0O8Ax%2ByYUeCKqyEVDyGpc10Deav92IIPyTPkUIwQRVwasan5g5Ze%2FrRbJcOvze3Pjhj5x1uoKi243XhbvQt1GvgJi94LNLapjiYqb76d8Lpcbn1Ce3K5tKC%2FBBz9yMltQne7TZKvweGJK1Ni9sViRFwGuFV0yzl4dmlBp0Dj8NBl2RCnXD9eK4l9GMMTX3EZZrqV6FYxox4sGWeGgdeTtuzlJUIKGlbXU7X6Rk%2F48trivXvIZz1VrCzIke2kDl9WJ4W95cALArPW66WwTU14nx5wPmRKbI0oA0%2FZU%2FlBlENHUVTzAEt6kXBlhxhfd7mEGf%2B5UAWE1wXViO7oLmUwlrLswAY6pgHPX%2B1lS%2BwrVU%2BTlyB1V4%2FI87td0UOBp7GNV45e%2B46Iskm6WK%2FGJGeb5tdk11nmaQl5XRbNoPCe0r87Yb1DoUuBNk31xJ2FKZC9%2BZ4YW%2FXr70Bvfs9NOMsCL9Tak%2Bb9nvZicSphWHuWu9JNlQ695uJywaOrR74Kdxt2Is4aobnPWgkNMif5p%2Fhurfb%2Fq15QI8CapqusbPyPSQSjYdZSlmJ6MyGpUkwA&X-Amz-Signature=c857ef51cb1b0382a60543861d109e3599af867b74480b4012b9da3010d53c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZJRPIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BX3fCF%2BnxMj%2FQoeaeSz60x%2BY846MnljVow817BXWTaAiB40QuTwYgm0rRnvX6hFbLIwVecgbpp54JGhh0KlQa2qyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY0OXyFMmAu%2FTeEU%2FKtwDDjI4HLwNbee87%2BQFJweGEbe6O5qaEUjFo%2BzvGBSPP0wsp8oZ43tl%2FurSA04drCw9YiZxYmsL7jINwknDGSlX%2F0Z8%2FXEr3a33TzzFOMQJS6m3mfB2f1fSMaXJsMbAAs0kspCiFR1xj6vWVYfBoOTTPIkrpUzS6aYXL764ZeaR0lULa6PHGdY1Z2tSfGHUmgcWEhI0QieJHVQG5hANC96UygYkP1JJjehMNKWxW2JWatJWtex3susfQCBTcvuudfDEEAn8Azx1R4xKZOGvyAsz8h90pUII%2BKuPiOuV8M2l0O8Ax%2ByYUeCKqyEVDyGpc10Deav92IIPyTPkUIwQRVwasan5g5Ze%2FrRbJcOvze3Pjhj5x1uoKi243XhbvQt1GvgJi94LNLapjiYqb76d8Lpcbn1Ce3K5tKC%2FBBz9yMltQne7TZKvweGJK1Ni9sViRFwGuFV0yzl4dmlBp0Dj8NBl2RCnXD9eK4l9GMMTX3EZZrqV6FYxox4sGWeGgdeTtuzlJUIKGlbXU7X6Rk%2F48trivXvIZz1VrCzIke2kDl9WJ4W95cALArPW66WwTU14nx5wPmRKbI0oA0%2FZU%2FlBlENHUVTzAEt6kXBlhxhfd7mEGf%2B5UAWE1wXViO7oLmUwlrLswAY6pgHPX%2B1lS%2BwrVU%2BTlyB1V4%2FI87td0UOBp7GNV45e%2B46Iskm6WK%2FGJGeb5tdk11nmaQl5XRbNoPCe0r87Yb1DoUuBNk31xJ2FKZC9%2BZ4YW%2FXr70Bvfs9NOMsCL9Tak%2Bb9nvZicSphWHuWu9JNlQ695uJywaOrR74Kdxt2Is4aobnPWgkNMif5p%2Fhurfb%2Fq15QI8CapqusbPyPSQSjYdZSlmJ6MyGpUkwA&X-Amz-Signature=c9ab01e5954723a6bff0d19794fa854b793f3fb0aa6a3d944e8318c2e03fdd93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZJRPIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BX3fCF%2BnxMj%2FQoeaeSz60x%2BY846MnljVow817BXWTaAiB40QuTwYgm0rRnvX6hFbLIwVecgbpp54JGhh0KlQa2qyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY0OXyFMmAu%2FTeEU%2FKtwDDjI4HLwNbee87%2BQFJweGEbe6O5qaEUjFo%2BzvGBSPP0wsp8oZ43tl%2FurSA04drCw9YiZxYmsL7jINwknDGSlX%2F0Z8%2FXEr3a33TzzFOMQJS6m3mfB2f1fSMaXJsMbAAs0kspCiFR1xj6vWVYfBoOTTPIkrpUzS6aYXL764ZeaR0lULa6PHGdY1Z2tSfGHUmgcWEhI0QieJHVQG5hANC96UygYkP1JJjehMNKWxW2JWatJWtex3susfQCBTcvuudfDEEAn8Azx1R4xKZOGvyAsz8h90pUII%2BKuPiOuV8M2l0O8Ax%2ByYUeCKqyEVDyGpc10Deav92IIPyTPkUIwQRVwasan5g5Ze%2FrRbJcOvze3Pjhj5x1uoKi243XhbvQt1GvgJi94LNLapjiYqb76d8Lpcbn1Ce3K5tKC%2FBBz9yMltQne7TZKvweGJK1Ni9sViRFwGuFV0yzl4dmlBp0Dj8NBl2RCnXD9eK4l9GMMTX3EZZrqV6FYxox4sGWeGgdeTtuzlJUIKGlbXU7X6Rk%2F48trivXvIZz1VrCzIke2kDl9WJ4W95cALArPW66WwTU14nx5wPmRKbI0oA0%2FZU%2FlBlENHUVTzAEt6kXBlhxhfd7mEGf%2B5UAWE1wXViO7oLmUwlrLswAY6pgHPX%2B1lS%2BwrVU%2BTlyB1V4%2FI87td0UOBp7GNV45e%2B46Iskm6WK%2FGJGeb5tdk11nmaQl5XRbNoPCe0r87Yb1DoUuBNk31xJ2FKZC9%2BZ4YW%2FXr70Bvfs9NOMsCL9Tak%2Bb9nvZicSphWHuWu9JNlQ695uJywaOrR74Kdxt2Is4aobnPWgkNMif5p%2Fhurfb%2Fq15QI8CapqusbPyPSQSjYdZSlmJ6MyGpUkwA&X-Amz-Signature=1844639b106f09b67fec492c45460f56fc8599bd2874722f522dfdaa200193b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZJRPIS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BX3fCF%2BnxMj%2FQoeaeSz60x%2BY846MnljVow817BXWTaAiB40QuTwYgm0rRnvX6hFbLIwVecgbpp54JGhh0KlQa2qyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMY0OXyFMmAu%2FTeEU%2FKtwDDjI4HLwNbee87%2BQFJweGEbe6O5qaEUjFo%2BzvGBSPP0wsp8oZ43tl%2FurSA04drCw9YiZxYmsL7jINwknDGSlX%2F0Z8%2FXEr3a33TzzFOMQJS6m3mfB2f1fSMaXJsMbAAs0kspCiFR1xj6vWVYfBoOTTPIkrpUzS6aYXL764ZeaR0lULa6PHGdY1Z2tSfGHUmgcWEhI0QieJHVQG5hANC96UygYkP1JJjehMNKWxW2JWatJWtex3susfQCBTcvuudfDEEAn8Azx1R4xKZOGvyAsz8h90pUII%2BKuPiOuV8M2l0O8Ax%2ByYUeCKqyEVDyGpc10Deav92IIPyTPkUIwQRVwasan5g5Ze%2FrRbJcOvze3Pjhj5x1uoKi243XhbvQt1GvgJi94LNLapjiYqb76d8Lpcbn1Ce3K5tKC%2FBBz9yMltQne7TZKvweGJK1Ni9sViRFwGuFV0yzl4dmlBp0Dj8NBl2RCnXD9eK4l9GMMTX3EZZrqV6FYxox4sGWeGgdeTtuzlJUIKGlbXU7X6Rk%2F48trivXvIZz1VrCzIke2kDl9WJ4W95cALArPW66WwTU14nx5wPmRKbI0oA0%2FZU%2FlBlENHUVTzAEt6kXBlhxhfd7mEGf%2B5UAWE1wXViO7oLmUwlrLswAY6pgHPX%2B1lS%2BwrVU%2BTlyB1V4%2FI87td0UOBp7GNV45e%2B46Iskm6WK%2FGJGeb5tdk11nmaQl5XRbNoPCe0r87Yb1DoUuBNk31xJ2FKZC9%2BZ4YW%2FXr70Bvfs9NOMsCL9Tak%2Bb9nvZicSphWHuWu9JNlQ695uJywaOrR74Kdxt2Is4aobnPWgkNMif5p%2Fhurfb%2Fq15QI8CapqusbPyPSQSjYdZSlmJ6MyGpUkwA&X-Amz-Signature=05cca5df66c3af72cb591c4e47495667ba0ecee24f65dc478a3d5c6db58392cf&X-Amz-SignedHeaders=host&x-id=GetObject)
