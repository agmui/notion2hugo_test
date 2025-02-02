---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=d29a2f63ed5e0b8bcf1f8b6942a5cc868a43bbb7dac70ef3567c5693f554c0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=15d34db3e7761336ba807657780ff5b23f1e630b8744b7bcfaa59945c11f6e58&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=a9cd16ce1add075f861e8ad891ab6fd51f8b6ab6d5df6b6f8d25405004a0c9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=3aed3536128985854da11f395f9aec09b45f3d3b17f52c47ebba44005c635fad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=ab4acf107c615784a35be2a234e5c528cc745e574b98093a1ce5df2f6290911c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=ebe410da73e69499bc21c751bc9ea4f11e772abccc00577d89fda712c37dbc60&X-Amz-SignedHeaders=host&x-id=GetObject)
