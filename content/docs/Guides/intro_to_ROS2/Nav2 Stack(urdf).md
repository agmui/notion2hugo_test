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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ATB2V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSU6%2FqZhtB3RNu7olDlVNkN8eMIHraFtEkcFGj0ngxQIhAKtokwL2Op3ZEarUIgNgeA%2FGov2i0aiKqShzaOj8Eyq3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFzehJFUBS4WS%2Fzdgq3AOJdEtXJgDgWqYUwxJfSBPLX871WfyhbfkXy4ICS1JVDyCGyKk6FcW6Ih2Uga6HVZkdOoov7Z7NVxG49vRUbVDAhJKocs5t7tSGFo94doiMAzzJAYoiyjxAnrvkcYqCCrpUL%2FdmDPzDlyFLERdLaeYB5zbct%2B0gel%2F74lkRjlA3hx5ZldItKZ7rF6ixtz74s%2FGDq7Rhf7Lx1e%2BomacxO%2FBFk1t5NCOMoELhn3lbNd8cBlnyTndZxD3uLjAnd%2Fuo%2BiSR7UzSXINYQnzQyMmuM4wYD2iVuhL0EXB%2BmxIIX2e2vfCF5EhjF4pGv4idyuGN0GmLWXWVt7x6MuAKjNCNa8BM16sw7Uu3qLuIx4J9vd%2BoxoRW1ef%2B56ky%2BehZKsCX75V%2Fp%2FGMV3cXt4GWVEr3cZ7c59Z7gaxeorytJ1mYWR0USxUr3wTxVOFFIFGNjiBl0B5zwcuG7MWYmZ0za1lFaz3xqoJk1eq7NydRMFHefeqHlsW9KEZX06WQOVBcmlm%2B8AL2QcDUmlDJmpzVKXpn5WLSEO%2FVuezOSde%2B6Fh%2Barw6QKOcNZZve4xnur9YJxSx2gp0pxx1bLvuXh6uw78wHpqmIud73K0lUO4zg2RK8hVCwQybvHwGVjvDo0WVBzD0hOvBBjqkAYCynDtM%2BaekpMOHyCKzZ8EaKRz%2F00dYw492CeeBu9AiE9EMYdmfVUNGfPzhrwCTz8DJQVB1SJtUARqlu7mDRJyZHbb%2BaACJCFqiOr1LAxJJwPgyhWRTZ6Bgwm9d1xmy2amFQ8f1Lq84%2F1QyCDgknywr17PzaRV1gKH25pcoDQw7QTA%2F%2BRpmbUIijZXHIeiCMhxQN2uiz%2BSXFXmGil7sX9QLeoM6&X-Amz-Signature=292ed1b3ff27704e4ddf83054607a1453afd00c88f728c626b09f59102c399d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ATB2V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSU6%2FqZhtB3RNu7olDlVNkN8eMIHraFtEkcFGj0ngxQIhAKtokwL2Op3ZEarUIgNgeA%2FGov2i0aiKqShzaOj8Eyq3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFzehJFUBS4WS%2Fzdgq3AOJdEtXJgDgWqYUwxJfSBPLX871WfyhbfkXy4ICS1JVDyCGyKk6FcW6Ih2Uga6HVZkdOoov7Z7NVxG49vRUbVDAhJKocs5t7tSGFo94doiMAzzJAYoiyjxAnrvkcYqCCrpUL%2FdmDPzDlyFLERdLaeYB5zbct%2B0gel%2F74lkRjlA3hx5ZldItKZ7rF6ixtz74s%2FGDq7Rhf7Lx1e%2BomacxO%2FBFk1t5NCOMoELhn3lbNd8cBlnyTndZxD3uLjAnd%2Fuo%2BiSR7UzSXINYQnzQyMmuM4wYD2iVuhL0EXB%2BmxIIX2e2vfCF5EhjF4pGv4idyuGN0GmLWXWVt7x6MuAKjNCNa8BM16sw7Uu3qLuIx4J9vd%2BoxoRW1ef%2B56ky%2BehZKsCX75V%2Fp%2FGMV3cXt4GWVEr3cZ7c59Z7gaxeorytJ1mYWR0USxUr3wTxVOFFIFGNjiBl0B5zwcuG7MWYmZ0za1lFaz3xqoJk1eq7NydRMFHefeqHlsW9KEZX06WQOVBcmlm%2B8AL2QcDUmlDJmpzVKXpn5WLSEO%2FVuezOSde%2B6Fh%2Barw6QKOcNZZve4xnur9YJxSx2gp0pxx1bLvuXh6uw78wHpqmIud73K0lUO4zg2RK8hVCwQybvHwGVjvDo0WVBzD0hOvBBjqkAYCynDtM%2BaekpMOHyCKzZ8EaKRz%2F00dYw492CeeBu9AiE9EMYdmfVUNGfPzhrwCTz8DJQVB1SJtUARqlu7mDRJyZHbb%2BaACJCFqiOr1LAxJJwPgyhWRTZ6Bgwm9d1xmy2amFQ8f1Lq84%2F1QyCDgknywr17PzaRV1gKH25pcoDQw7QTA%2F%2BRpmbUIijZXHIeiCMhxQN2uiz%2BSXFXmGil7sX9QLeoM6&X-Amz-Signature=3341c0a0208afc72219598849d4490c9bb588d8cd523c545d0825d487cbf45fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ATB2V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSU6%2FqZhtB3RNu7olDlVNkN8eMIHraFtEkcFGj0ngxQIhAKtokwL2Op3ZEarUIgNgeA%2FGov2i0aiKqShzaOj8Eyq3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFzehJFUBS4WS%2Fzdgq3AOJdEtXJgDgWqYUwxJfSBPLX871WfyhbfkXy4ICS1JVDyCGyKk6FcW6Ih2Uga6HVZkdOoov7Z7NVxG49vRUbVDAhJKocs5t7tSGFo94doiMAzzJAYoiyjxAnrvkcYqCCrpUL%2FdmDPzDlyFLERdLaeYB5zbct%2B0gel%2F74lkRjlA3hx5ZldItKZ7rF6ixtz74s%2FGDq7Rhf7Lx1e%2BomacxO%2FBFk1t5NCOMoELhn3lbNd8cBlnyTndZxD3uLjAnd%2Fuo%2BiSR7UzSXINYQnzQyMmuM4wYD2iVuhL0EXB%2BmxIIX2e2vfCF5EhjF4pGv4idyuGN0GmLWXWVt7x6MuAKjNCNa8BM16sw7Uu3qLuIx4J9vd%2BoxoRW1ef%2B56ky%2BehZKsCX75V%2Fp%2FGMV3cXt4GWVEr3cZ7c59Z7gaxeorytJ1mYWR0USxUr3wTxVOFFIFGNjiBl0B5zwcuG7MWYmZ0za1lFaz3xqoJk1eq7NydRMFHefeqHlsW9KEZX06WQOVBcmlm%2B8AL2QcDUmlDJmpzVKXpn5WLSEO%2FVuezOSde%2B6Fh%2Barw6QKOcNZZve4xnur9YJxSx2gp0pxx1bLvuXh6uw78wHpqmIud73K0lUO4zg2RK8hVCwQybvHwGVjvDo0WVBzD0hOvBBjqkAYCynDtM%2BaekpMOHyCKzZ8EaKRz%2F00dYw492CeeBu9AiE9EMYdmfVUNGfPzhrwCTz8DJQVB1SJtUARqlu7mDRJyZHbb%2BaACJCFqiOr1LAxJJwPgyhWRTZ6Bgwm9d1xmy2amFQ8f1Lq84%2F1QyCDgknywr17PzaRV1gKH25pcoDQw7QTA%2F%2BRpmbUIijZXHIeiCMhxQN2uiz%2BSXFXmGil7sX9QLeoM6&X-Amz-Signature=2d3e247579d07603039e5f69e8fa60d8a0dfb572c429b0c9e59146b368ccbc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ATB2V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSU6%2FqZhtB3RNu7olDlVNkN8eMIHraFtEkcFGj0ngxQIhAKtokwL2Op3ZEarUIgNgeA%2FGov2i0aiKqShzaOj8Eyq3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFzehJFUBS4WS%2Fzdgq3AOJdEtXJgDgWqYUwxJfSBPLX871WfyhbfkXy4ICS1JVDyCGyKk6FcW6Ih2Uga6HVZkdOoov7Z7NVxG49vRUbVDAhJKocs5t7tSGFo94doiMAzzJAYoiyjxAnrvkcYqCCrpUL%2FdmDPzDlyFLERdLaeYB5zbct%2B0gel%2F74lkRjlA3hx5ZldItKZ7rF6ixtz74s%2FGDq7Rhf7Lx1e%2BomacxO%2FBFk1t5NCOMoELhn3lbNd8cBlnyTndZxD3uLjAnd%2Fuo%2BiSR7UzSXINYQnzQyMmuM4wYD2iVuhL0EXB%2BmxIIX2e2vfCF5EhjF4pGv4idyuGN0GmLWXWVt7x6MuAKjNCNa8BM16sw7Uu3qLuIx4J9vd%2BoxoRW1ef%2B56ky%2BehZKsCX75V%2Fp%2FGMV3cXt4GWVEr3cZ7c59Z7gaxeorytJ1mYWR0USxUr3wTxVOFFIFGNjiBl0B5zwcuG7MWYmZ0za1lFaz3xqoJk1eq7NydRMFHefeqHlsW9KEZX06WQOVBcmlm%2B8AL2QcDUmlDJmpzVKXpn5WLSEO%2FVuezOSde%2B6Fh%2Barw6QKOcNZZve4xnur9YJxSx2gp0pxx1bLvuXh6uw78wHpqmIud73K0lUO4zg2RK8hVCwQybvHwGVjvDo0WVBzD0hOvBBjqkAYCynDtM%2BaekpMOHyCKzZ8EaKRz%2F00dYw492CeeBu9AiE9EMYdmfVUNGfPzhrwCTz8DJQVB1SJtUARqlu7mDRJyZHbb%2BaACJCFqiOr1LAxJJwPgyhWRTZ6Bgwm9d1xmy2amFQ8f1Lq84%2F1QyCDgknywr17PzaRV1gKH25pcoDQw7QTA%2F%2BRpmbUIijZXHIeiCMhxQN2uiz%2BSXFXmGil7sX9QLeoM6&X-Amz-Signature=200471bbbf19e637a724ed5992d13169e4fa7b36c52363692cd743e61a9528e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ATB2V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSU6%2FqZhtB3RNu7olDlVNkN8eMIHraFtEkcFGj0ngxQIhAKtokwL2Op3ZEarUIgNgeA%2FGov2i0aiKqShzaOj8Eyq3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFzehJFUBS4WS%2Fzdgq3AOJdEtXJgDgWqYUwxJfSBPLX871WfyhbfkXy4ICS1JVDyCGyKk6FcW6Ih2Uga6HVZkdOoov7Z7NVxG49vRUbVDAhJKocs5t7tSGFo94doiMAzzJAYoiyjxAnrvkcYqCCrpUL%2FdmDPzDlyFLERdLaeYB5zbct%2B0gel%2F74lkRjlA3hx5ZldItKZ7rF6ixtz74s%2FGDq7Rhf7Lx1e%2BomacxO%2FBFk1t5NCOMoELhn3lbNd8cBlnyTndZxD3uLjAnd%2Fuo%2BiSR7UzSXINYQnzQyMmuM4wYD2iVuhL0EXB%2BmxIIX2e2vfCF5EhjF4pGv4idyuGN0GmLWXWVt7x6MuAKjNCNa8BM16sw7Uu3qLuIx4J9vd%2BoxoRW1ef%2B56ky%2BehZKsCX75V%2Fp%2FGMV3cXt4GWVEr3cZ7c59Z7gaxeorytJ1mYWR0USxUr3wTxVOFFIFGNjiBl0B5zwcuG7MWYmZ0za1lFaz3xqoJk1eq7NydRMFHefeqHlsW9KEZX06WQOVBcmlm%2B8AL2QcDUmlDJmpzVKXpn5WLSEO%2FVuezOSde%2B6Fh%2Barw6QKOcNZZve4xnur9YJxSx2gp0pxx1bLvuXh6uw78wHpqmIud73K0lUO4zg2RK8hVCwQybvHwGVjvDo0WVBzD0hOvBBjqkAYCynDtM%2BaekpMOHyCKzZ8EaKRz%2F00dYw492CeeBu9AiE9EMYdmfVUNGfPzhrwCTz8DJQVB1SJtUARqlu7mDRJyZHbb%2BaACJCFqiOr1LAxJJwPgyhWRTZ6Bgwm9d1xmy2amFQ8f1Lq84%2F1QyCDgknywr17PzaRV1gKH25pcoDQw7QTA%2F%2BRpmbUIijZXHIeiCMhxQN2uiz%2BSXFXmGil7sX9QLeoM6&X-Amz-Signature=b97ee7b643eaa336955232abeb739fb48342a870a849619ec2db4748884accd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ATB2V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSU6%2FqZhtB3RNu7olDlVNkN8eMIHraFtEkcFGj0ngxQIhAKtokwL2Op3ZEarUIgNgeA%2FGov2i0aiKqShzaOj8Eyq3KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFzehJFUBS4WS%2Fzdgq3AOJdEtXJgDgWqYUwxJfSBPLX871WfyhbfkXy4ICS1JVDyCGyKk6FcW6Ih2Uga6HVZkdOoov7Z7NVxG49vRUbVDAhJKocs5t7tSGFo94doiMAzzJAYoiyjxAnrvkcYqCCrpUL%2FdmDPzDlyFLERdLaeYB5zbct%2B0gel%2F74lkRjlA3hx5ZldItKZ7rF6ixtz74s%2FGDq7Rhf7Lx1e%2BomacxO%2FBFk1t5NCOMoELhn3lbNd8cBlnyTndZxD3uLjAnd%2Fuo%2BiSR7UzSXINYQnzQyMmuM4wYD2iVuhL0EXB%2BmxIIX2e2vfCF5EhjF4pGv4idyuGN0GmLWXWVt7x6MuAKjNCNa8BM16sw7Uu3qLuIx4J9vd%2BoxoRW1ef%2B56ky%2BehZKsCX75V%2Fp%2FGMV3cXt4GWVEr3cZ7c59Z7gaxeorytJ1mYWR0USxUr3wTxVOFFIFGNjiBl0B5zwcuG7MWYmZ0za1lFaz3xqoJk1eq7NydRMFHefeqHlsW9KEZX06WQOVBcmlm%2B8AL2QcDUmlDJmpzVKXpn5WLSEO%2FVuezOSde%2B6Fh%2Barw6QKOcNZZve4xnur9YJxSx2gp0pxx1bLvuXh6uw78wHpqmIud73K0lUO4zg2RK8hVCwQybvHwGVjvDo0WVBzD0hOvBBjqkAYCynDtM%2BaekpMOHyCKzZ8EaKRz%2F00dYw492CeeBu9AiE9EMYdmfVUNGfPzhrwCTz8DJQVB1SJtUARqlu7mDRJyZHbb%2BaACJCFqiOr1LAxJJwPgyhWRTZ6Bgwm9d1xmy2amFQ8f1Lq84%2F1QyCDgknywr17PzaRV1gKH25pcoDQw7QTA%2F%2BRpmbUIijZXHIeiCMhxQN2uiz%2BSXFXmGil7sX9QLeoM6&X-Amz-Signature=e3db8038b45b9c928d8f4d299c9938ef5dc5e4a234902a888b02a8b41e89b474&X-Amz-SignedHeaders=host&x-id=GetObject)
