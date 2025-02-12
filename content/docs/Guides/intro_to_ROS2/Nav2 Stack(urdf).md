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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFKEKCY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvFV%2FC9uIRa%2BoI3bqS%2FxMSSK%2BLHMjppG7ty1Czsb7nIAiApKUe%2BNtXW%2BQP9yG%2BuiSiuGYO%2BdxiWmO1%2F6rVEInKtlSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6oEzApnJhNDHn1KtwDO%2FY9Hb0zoE%2FbEKSbr5Leb5FZdI4sTxvwdAL6dphhDZ6vipwZLaih4vphrC4yeXp2B0Dqt0cy1EUsPClV%2BREaHwgeqoFUhiZuVrID8Z36XKW0LOTFFpOsxEFYkRk9QVlLHokWIqAIj1VC%2FnWxAVYrs3O5OsqVUO1KZT7A0GnDBQpMdeBc0BktLFjgKmoss3qvrxTJcBfxFdwCyLYdcUFqDqCEtYlV3eHdQDHuv5G5H48VnGoNxnZt6HOwULqkw3fNodAw82qJemMSA3TpnFjg%2FlIo2XrR6CK7txkLz8Tdkba%2FaEplIItLWBxXC1%2BLFSj4Abb6sb7rU84wqKbVBYmUGwi%2FsGAD9W%2BJ%2FAmLYty%2FKB1wWrhI78NBgwrOnSjUrdrI8YAXLDnJY7hn%2BVeWkn4vlhc%2F7HUZXNAiVNSnBPf6rx%2FIN4a7Ah%2F5wacZls9OkUkGfiazyzuUr0wXv%2FFXMdGgBKmuszpa2ngU%2FliSEwPySwYplGOyfvI1bx%2B25qDJjCeTBCfLng0M3PHQngBxAPYZGW%2BciWTWSZnfHmQ2NteiKQ%2Fvt9fRMF7BkgCjb7QwJfGsgzHT%2FEBaGV8HxXVn7P0zf6BhdH%2BEXn%2F0Y90qD5J05eSxRjG1MzUuDoaCRykw4LOyvQY6pgHRIga4Z7neli5MqPXQAtexFfAmgJ2txcDh13Zqb%2FSK9olnOQyhBz884SDN1KDAJcWGCl%2FzvYYu7wlw%2F3%2B3J0AzcvqIVE2bkonncYMR4beWDVADhoNGpWceMOj20n0psJmkcwHXgfwQT7w%2FWv1GW1ceYnuBlVQd9eMU1MUzZjcQgO8On7Gt5DEkrZvNB1aZ7M8FdddpBjT1KKcWNIOLqB69SVECgTOp&X-Amz-Signature=8c196dffed072689bf200b9e0b7895d8d6bf7cfd0713db554a9ed24dfd46a9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFKEKCY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvFV%2FC9uIRa%2BoI3bqS%2FxMSSK%2BLHMjppG7ty1Czsb7nIAiApKUe%2BNtXW%2BQP9yG%2BuiSiuGYO%2BdxiWmO1%2F6rVEInKtlSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6oEzApnJhNDHn1KtwDO%2FY9Hb0zoE%2FbEKSbr5Leb5FZdI4sTxvwdAL6dphhDZ6vipwZLaih4vphrC4yeXp2B0Dqt0cy1EUsPClV%2BREaHwgeqoFUhiZuVrID8Z36XKW0LOTFFpOsxEFYkRk9QVlLHokWIqAIj1VC%2FnWxAVYrs3O5OsqVUO1KZT7A0GnDBQpMdeBc0BktLFjgKmoss3qvrxTJcBfxFdwCyLYdcUFqDqCEtYlV3eHdQDHuv5G5H48VnGoNxnZt6HOwULqkw3fNodAw82qJemMSA3TpnFjg%2FlIo2XrR6CK7txkLz8Tdkba%2FaEplIItLWBxXC1%2BLFSj4Abb6sb7rU84wqKbVBYmUGwi%2FsGAD9W%2BJ%2FAmLYty%2FKB1wWrhI78NBgwrOnSjUrdrI8YAXLDnJY7hn%2BVeWkn4vlhc%2F7HUZXNAiVNSnBPf6rx%2FIN4a7Ah%2F5wacZls9OkUkGfiazyzuUr0wXv%2FFXMdGgBKmuszpa2ngU%2FliSEwPySwYplGOyfvI1bx%2B25qDJjCeTBCfLng0M3PHQngBxAPYZGW%2BciWTWSZnfHmQ2NteiKQ%2Fvt9fRMF7BkgCjb7QwJfGsgzHT%2FEBaGV8HxXVn7P0zf6BhdH%2BEXn%2F0Y90qD5J05eSxRjG1MzUuDoaCRykw4LOyvQY6pgHRIga4Z7neli5MqPXQAtexFfAmgJ2txcDh13Zqb%2FSK9olnOQyhBz884SDN1KDAJcWGCl%2FzvYYu7wlw%2F3%2B3J0AzcvqIVE2bkonncYMR4beWDVADhoNGpWceMOj20n0psJmkcwHXgfwQT7w%2FWv1GW1ceYnuBlVQd9eMU1MUzZjcQgO8On7Gt5DEkrZvNB1aZ7M8FdddpBjT1KKcWNIOLqB69SVECgTOp&X-Amz-Signature=3e7b81641da8f5b2216d5fae622881f3b60d2c552b0d7eef226435163bf4e075&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFKEKCY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvFV%2FC9uIRa%2BoI3bqS%2FxMSSK%2BLHMjppG7ty1Czsb7nIAiApKUe%2BNtXW%2BQP9yG%2BuiSiuGYO%2BdxiWmO1%2F6rVEInKtlSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6oEzApnJhNDHn1KtwDO%2FY9Hb0zoE%2FbEKSbr5Leb5FZdI4sTxvwdAL6dphhDZ6vipwZLaih4vphrC4yeXp2B0Dqt0cy1EUsPClV%2BREaHwgeqoFUhiZuVrID8Z36XKW0LOTFFpOsxEFYkRk9QVlLHokWIqAIj1VC%2FnWxAVYrs3O5OsqVUO1KZT7A0GnDBQpMdeBc0BktLFjgKmoss3qvrxTJcBfxFdwCyLYdcUFqDqCEtYlV3eHdQDHuv5G5H48VnGoNxnZt6HOwULqkw3fNodAw82qJemMSA3TpnFjg%2FlIo2XrR6CK7txkLz8Tdkba%2FaEplIItLWBxXC1%2BLFSj4Abb6sb7rU84wqKbVBYmUGwi%2FsGAD9W%2BJ%2FAmLYty%2FKB1wWrhI78NBgwrOnSjUrdrI8YAXLDnJY7hn%2BVeWkn4vlhc%2F7HUZXNAiVNSnBPf6rx%2FIN4a7Ah%2F5wacZls9OkUkGfiazyzuUr0wXv%2FFXMdGgBKmuszpa2ngU%2FliSEwPySwYplGOyfvI1bx%2B25qDJjCeTBCfLng0M3PHQngBxAPYZGW%2BciWTWSZnfHmQ2NteiKQ%2Fvt9fRMF7BkgCjb7QwJfGsgzHT%2FEBaGV8HxXVn7P0zf6BhdH%2BEXn%2F0Y90qD5J05eSxRjG1MzUuDoaCRykw4LOyvQY6pgHRIga4Z7neli5MqPXQAtexFfAmgJ2txcDh13Zqb%2FSK9olnOQyhBz884SDN1KDAJcWGCl%2FzvYYu7wlw%2F3%2B3J0AzcvqIVE2bkonncYMR4beWDVADhoNGpWceMOj20n0psJmkcwHXgfwQT7w%2FWv1GW1ceYnuBlVQd9eMU1MUzZjcQgO8On7Gt5DEkrZvNB1aZ7M8FdddpBjT1KKcWNIOLqB69SVECgTOp&X-Amz-Signature=e295db72e516fc830866ad6d839b0701a822b8d8cff72c019137d80d076001e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFKEKCY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvFV%2FC9uIRa%2BoI3bqS%2FxMSSK%2BLHMjppG7ty1Czsb7nIAiApKUe%2BNtXW%2BQP9yG%2BuiSiuGYO%2BdxiWmO1%2F6rVEInKtlSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6oEzApnJhNDHn1KtwDO%2FY9Hb0zoE%2FbEKSbr5Leb5FZdI4sTxvwdAL6dphhDZ6vipwZLaih4vphrC4yeXp2B0Dqt0cy1EUsPClV%2BREaHwgeqoFUhiZuVrID8Z36XKW0LOTFFpOsxEFYkRk9QVlLHokWIqAIj1VC%2FnWxAVYrs3O5OsqVUO1KZT7A0GnDBQpMdeBc0BktLFjgKmoss3qvrxTJcBfxFdwCyLYdcUFqDqCEtYlV3eHdQDHuv5G5H48VnGoNxnZt6HOwULqkw3fNodAw82qJemMSA3TpnFjg%2FlIo2XrR6CK7txkLz8Tdkba%2FaEplIItLWBxXC1%2BLFSj4Abb6sb7rU84wqKbVBYmUGwi%2FsGAD9W%2BJ%2FAmLYty%2FKB1wWrhI78NBgwrOnSjUrdrI8YAXLDnJY7hn%2BVeWkn4vlhc%2F7HUZXNAiVNSnBPf6rx%2FIN4a7Ah%2F5wacZls9OkUkGfiazyzuUr0wXv%2FFXMdGgBKmuszpa2ngU%2FliSEwPySwYplGOyfvI1bx%2B25qDJjCeTBCfLng0M3PHQngBxAPYZGW%2BciWTWSZnfHmQ2NteiKQ%2Fvt9fRMF7BkgCjb7QwJfGsgzHT%2FEBaGV8HxXVn7P0zf6BhdH%2BEXn%2F0Y90qD5J05eSxRjG1MzUuDoaCRykw4LOyvQY6pgHRIga4Z7neli5MqPXQAtexFfAmgJ2txcDh13Zqb%2FSK9olnOQyhBz884SDN1KDAJcWGCl%2FzvYYu7wlw%2F3%2B3J0AzcvqIVE2bkonncYMR4beWDVADhoNGpWceMOj20n0psJmkcwHXgfwQT7w%2FWv1GW1ceYnuBlVQd9eMU1MUzZjcQgO8On7Gt5DEkrZvNB1aZ7M8FdddpBjT1KKcWNIOLqB69SVECgTOp&X-Amz-Signature=c0494a1dc25eed3bdc8fe451ffdd0ce2ad93e9828f5899d37d0fb9abac560f94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFKEKCY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvFV%2FC9uIRa%2BoI3bqS%2FxMSSK%2BLHMjppG7ty1Czsb7nIAiApKUe%2BNtXW%2BQP9yG%2BuiSiuGYO%2BdxiWmO1%2F6rVEInKtlSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6oEzApnJhNDHn1KtwDO%2FY9Hb0zoE%2FbEKSbr5Leb5FZdI4sTxvwdAL6dphhDZ6vipwZLaih4vphrC4yeXp2B0Dqt0cy1EUsPClV%2BREaHwgeqoFUhiZuVrID8Z36XKW0LOTFFpOsxEFYkRk9QVlLHokWIqAIj1VC%2FnWxAVYrs3O5OsqVUO1KZT7A0GnDBQpMdeBc0BktLFjgKmoss3qvrxTJcBfxFdwCyLYdcUFqDqCEtYlV3eHdQDHuv5G5H48VnGoNxnZt6HOwULqkw3fNodAw82qJemMSA3TpnFjg%2FlIo2XrR6CK7txkLz8Tdkba%2FaEplIItLWBxXC1%2BLFSj4Abb6sb7rU84wqKbVBYmUGwi%2FsGAD9W%2BJ%2FAmLYty%2FKB1wWrhI78NBgwrOnSjUrdrI8YAXLDnJY7hn%2BVeWkn4vlhc%2F7HUZXNAiVNSnBPf6rx%2FIN4a7Ah%2F5wacZls9OkUkGfiazyzuUr0wXv%2FFXMdGgBKmuszpa2ngU%2FliSEwPySwYplGOyfvI1bx%2B25qDJjCeTBCfLng0M3PHQngBxAPYZGW%2BciWTWSZnfHmQ2NteiKQ%2Fvt9fRMF7BkgCjb7QwJfGsgzHT%2FEBaGV8HxXVn7P0zf6BhdH%2BEXn%2F0Y90qD5J05eSxRjG1MzUuDoaCRykw4LOyvQY6pgHRIga4Z7neli5MqPXQAtexFfAmgJ2txcDh13Zqb%2FSK9olnOQyhBz884SDN1KDAJcWGCl%2FzvYYu7wlw%2F3%2B3J0AzcvqIVE2bkonncYMR4beWDVADhoNGpWceMOj20n0psJmkcwHXgfwQT7w%2FWv1GW1ceYnuBlVQd9eMU1MUzZjcQgO8On7Gt5DEkrZvNB1aZ7M8FdddpBjT1KKcWNIOLqB69SVECgTOp&X-Amz-Signature=630289e96c8842da684b0a96503656851888775bbd154a5fa35fe76b0d1546c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFKEKCY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvFV%2FC9uIRa%2BoI3bqS%2FxMSSK%2BLHMjppG7ty1Czsb7nIAiApKUe%2BNtXW%2BQP9yG%2BuiSiuGYO%2BdxiWmO1%2F6rVEInKtlSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6oEzApnJhNDHn1KtwDO%2FY9Hb0zoE%2FbEKSbr5Leb5FZdI4sTxvwdAL6dphhDZ6vipwZLaih4vphrC4yeXp2B0Dqt0cy1EUsPClV%2BREaHwgeqoFUhiZuVrID8Z36XKW0LOTFFpOsxEFYkRk9QVlLHokWIqAIj1VC%2FnWxAVYrs3O5OsqVUO1KZT7A0GnDBQpMdeBc0BktLFjgKmoss3qvrxTJcBfxFdwCyLYdcUFqDqCEtYlV3eHdQDHuv5G5H48VnGoNxnZt6HOwULqkw3fNodAw82qJemMSA3TpnFjg%2FlIo2XrR6CK7txkLz8Tdkba%2FaEplIItLWBxXC1%2BLFSj4Abb6sb7rU84wqKbVBYmUGwi%2FsGAD9W%2BJ%2FAmLYty%2FKB1wWrhI78NBgwrOnSjUrdrI8YAXLDnJY7hn%2BVeWkn4vlhc%2F7HUZXNAiVNSnBPf6rx%2FIN4a7Ah%2F5wacZls9OkUkGfiazyzuUr0wXv%2FFXMdGgBKmuszpa2ngU%2FliSEwPySwYplGOyfvI1bx%2B25qDJjCeTBCfLng0M3PHQngBxAPYZGW%2BciWTWSZnfHmQ2NteiKQ%2Fvt9fRMF7BkgCjb7QwJfGsgzHT%2FEBaGV8HxXVn7P0zf6BhdH%2BEXn%2F0Y90qD5J05eSxRjG1MzUuDoaCRykw4LOyvQY6pgHRIga4Z7neli5MqPXQAtexFfAmgJ2txcDh13Zqb%2FSK9olnOQyhBz884SDN1KDAJcWGCl%2FzvYYu7wlw%2F3%2B3J0AzcvqIVE2bkonncYMR4beWDVADhoNGpWceMOj20n0psJmkcwHXgfwQT7w%2FWv1GW1ceYnuBlVQd9eMU1MUzZjcQgO8On7Gt5DEkrZvNB1aZ7M8FdddpBjT1KKcWNIOLqB69SVECgTOp&X-Amz-Signature=5479d7903787767338d01723beb7f3f4ca747f63e30e7b722f0246428ee654bf&X-Amz-SignedHeaders=host&x-id=GetObject)
