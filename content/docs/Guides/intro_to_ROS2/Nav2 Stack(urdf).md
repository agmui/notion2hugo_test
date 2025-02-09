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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=249e6880019d5b1acb34d2c66b2d9330abdd36d65c4249f9b1e6fd69140a6684&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=bc6c6332618975679ce953c6bf04343158077822310711ba1d21709ded18fe77&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=3ce24ade4b3fadbe46937f379aa9e414eca0a0fee029bead70e9c4ab6540481e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=1af8a9462503a5a8c68ef8c87e361e02c4edd8a30932fcd8f8655723e414f5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=b6b84a8107d547c4867d7f279a35541f3c5e09cd61473767c3a6b28a80f56d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=0ff7d04fa1f212fc284a6749568307b224a561dcf303c26b23def8449ef930cb&X-Amz-SignedHeaders=host&x-id=GetObject)
