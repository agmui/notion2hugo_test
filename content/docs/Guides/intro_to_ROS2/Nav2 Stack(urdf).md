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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667747HC7G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo2wxPR%2FziPW8DwKfb%2BmO2btA2SlpvQ3xO7zcM9vYtzAiEAoUjHjne3Br2U39AdniIkrJl4XlFFjGHxwm3Wxn8UX9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz2okBINedJRGVqNyrcA8kNwQKoAIV%2FR8%2F1BHA3LXnWXUI3e5Q4tGZR1742uhdvAs73Meo1BXqfw379C2iqGoDrmZp1Oopp%2FRYKkugro3HVfN%2Fk9A2Jb7yiKWNZGf4ZrBMumGrOAqNTXCj%2B5GJwCy1k%2BJ%2BgD1ZlstyFCQ0a9Atwg1txI4Edq%2Bue9jiDPsA4AS2iW6BDREPSY9YfUgPYWZx5tyTvrGkDIhA4LNJ7oBGOcrF1AVs1dgTyH78MERsDToWMEFQsKG7ABQW1KKVzjgtCps2pGFxibjz7cRK4eF7wWKlqGOwEwjM%2FOR6830wGBQXFI3eYNM74oUyNFJ8Zq%2Bw9wVDLf5PznTvr1hNz0hQdfGDmrgW%2B%2FzGbuIyFagPL%2BSKhNMb5e0jyuAJTjCY28I5yPZ2m9m81oTlu78A93rw8vcujsWWTSxFlMYRGMfrDaeTEP1jKh36t%2Fn%2BJ%2BwTCRX9%2BddVQzfLagC9VJCKqhbu2uNXKGSkSI3a7pCrPSQs9ssaGhp9APvTKwma3%2FbTRE26CljZD7c2Ts9IIgiOKbGGurDzcAOtpmooWcVvImjahWJMdW4dELGmYe2aJLyG8fWzJAvAvBnq3cXT1vUZaSKGbvh%2FRYu6wC8Zq7b2dIpqsGEfJ%2Bz1r1%2FoRVKatMLbc6r0GOqUBGKvrdk3qxXmL%2FT15kaozCYmk0bEOyi%2F4RK1DY7AKQEojs%2BnDFRbLwO8OqvAfECuiObwQxRIrJVn%2BIBoRiFSztibmkhY04U9QWit3hy1lxylApNslg5UqI0yng7xSNweq88TN4verm6aKf8uWgDIHCgBMzvFacfoyxEA9hEgDcdHJ%2BpkhDD6AfzKqAR03dwwb7JI%2BSjbxoHYJd5pw%2FOcQGENULIRJ&X-Amz-Signature=76828c450712c665cac82c379978a823a6671907cb53e7bdbfc8fc7d0d008e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667747HC7G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo2wxPR%2FziPW8DwKfb%2BmO2btA2SlpvQ3xO7zcM9vYtzAiEAoUjHjne3Br2U39AdniIkrJl4XlFFjGHxwm3Wxn8UX9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz2okBINedJRGVqNyrcA8kNwQKoAIV%2FR8%2F1BHA3LXnWXUI3e5Q4tGZR1742uhdvAs73Meo1BXqfw379C2iqGoDrmZp1Oopp%2FRYKkugro3HVfN%2Fk9A2Jb7yiKWNZGf4ZrBMumGrOAqNTXCj%2B5GJwCy1k%2BJ%2BgD1ZlstyFCQ0a9Atwg1txI4Edq%2Bue9jiDPsA4AS2iW6BDREPSY9YfUgPYWZx5tyTvrGkDIhA4LNJ7oBGOcrF1AVs1dgTyH78MERsDToWMEFQsKG7ABQW1KKVzjgtCps2pGFxibjz7cRK4eF7wWKlqGOwEwjM%2FOR6830wGBQXFI3eYNM74oUyNFJ8Zq%2Bw9wVDLf5PznTvr1hNz0hQdfGDmrgW%2B%2FzGbuIyFagPL%2BSKhNMb5e0jyuAJTjCY28I5yPZ2m9m81oTlu78A93rw8vcujsWWTSxFlMYRGMfrDaeTEP1jKh36t%2Fn%2BJ%2BwTCRX9%2BddVQzfLagC9VJCKqhbu2uNXKGSkSI3a7pCrPSQs9ssaGhp9APvTKwma3%2FbTRE26CljZD7c2Ts9IIgiOKbGGurDzcAOtpmooWcVvImjahWJMdW4dELGmYe2aJLyG8fWzJAvAvBnq3cXT1vUZaSKGbvh%2FRYu6wC8Zq7b2dIpqsGEfJ%2Bz1r1%2FoRVKatMLbc6r0GOqUBGKvrdk3qxXmL%2FT15kaozCYmk0bEOyi%2F4RK1DY7AKQEojs%2BnDFRbLwO8OqvAfECuiObwQxRIrJVn%2BIBoRiFSztibmkhY04U9QWit3hy1lxylApNslg5UqI0yng7xSNweq88TN4verm6aKf8uWgDIHCgBMzvFacfoyxEA9hEgDcdHJ%2BpkhDD6AfzKqAR03dwwb7JI%2BSjbxoHYJd5pw%2FOcQGENULIRJ&X-Amz-Signature=11729d944a055f8cd10ac43c26a2f4c672810cc76ef735c7b7fe50adcc81500a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667747HC7G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo2wxPR%2FziPW8DwKfb%2BmO2btA2SlpvQ3xO7zcM9vYtzAiEAoUjHjne3Br2U39AdniIkrJl4XlFFjGHxwm3Wxn8UX9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz2okBINedJRGVqNyrcA8kNwQKoAIV%2FR8%2F1BHA3LXnWXUI3e5Q4tGZR1742uhdvAs73Meo1BXqfw379C2iqGoDrmZp1Oopp%2FRYKkugro3HVfN%2Fk9A2Jb7yiKWNZGf4ZrBMumGrOAqNTXCj%2B5GJwCy1k%2BJ%2BgD1ZlstyFCQ0a9Atwg1txI4Edq%2Bue9jiDPsA4AS2iW6BDREPSY9YfUgPYWZx5tyTvrGkDIhA4LNJ7oBGOcrF1AVs1dgTyH78MERsDToWMEFQsKG7ABQW1KKVzjgtCps2pGFxibjz7cRK4eF7wWKlqGOwEwjM%2FOR6830wGBQXFI3eYNM74oUyNFJ8Zq%2Bw9wVDLf5PznTvr1hNz0hQdfGDmrgW%2B%2FzGbuIyFagPL%2BSKhNMb5e0jyuAJTjCY28I5yPZ2m9m81oTlu78A93rw8vcujsWWTSxFlMYRGMfrDaeTEP1jKh36t%2Fn%2BJ%2BwTCRX9%2BddVQzfLagC9VJCKqhbu2uNXKGSkSI3a7pCrPSQs9ssaGhp9APvTKwma3%2FbTRE26CljZD7c2Ts9IIgiOKbGGurDzcAOtpmooWcVvImjahWJMdW4dELGmYe2aJLyG8fWzJAvAvBnq3cXT1vUZaSKGbvh%2FRYu6wC8Zq7b2dIpqsGEfJ%2Bz1r1%2FoRVKatMLbc6r0GOqUBGKvrdk3qxXmL%2FT15kaozCYmk0bEOyi%2F4RK1DY7AKQEojs%2BnDFRbLwO8OqvAfECuiObwQxRIrJVn%2BIBoRiFSztibmkhY04U9QWit3hy1lxylApNslg5UqI0yng7xSNweq88TN4verm6aKf8uWgDIHCgBMzvFacfoyxEA9hEgDcdHJ%2BpkhDD6AfzKqAR03dwwb7JI%2BSjbxoHYJd5pw%2FOcQGENULIRJ&X-Amz-Signature=ca55202c5eb8b96cea170fb1e043a7d0bfb2676d08e33760ed39012105024de4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667747HC7G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo2wxPR%2FziPW8DwKfb%2BmO2btA2SlpvQ3xO7zcM9vYtzAiEAoUjHjne3Br2U39AdniIkrJl4XlFFjGHxwm3Wxn8UX9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz2okBINedJRGVqNyrcA8kNwQKoAIV%2FR8%2F1BHA3LXnWXUI3e5Q4tGZR1742uhdvAs73Meo1BXqfw379C2iqGoDrmZp1Oopp%2FRYKkugro3HVfN%2Fk9A2Jb7yiKWNZGf4ZrBMumGrOAqNTXCj%2B5GJwCy1k%2BJ%2BgD1ZlstyFCQ0a9Atwg1txI4Edq%2Bue9jiDPsA4AS2iW6BDREPSY9YfUgPYWZx5tyTvrGkDIhA4LNJ7oBGOcrF1AVs1dgTyH78MERsDToWMEFQsKG7ABQW1KKVzjgtCps2pGFxibjz7cRK4eF7wWKlqGOwEwjM%2FOR6830wGBQXFI3eYNM74oUyNFJ8Zq%2Bw9wVDLf5PznTvr1hNz0hQdfGDmrgW%2B%2FzGbuIyFagPL%2BSKhNMb5e0jyuAJTjCY28I5yPZ2m9m81oTlu78A93rw8vcujsWWTSxFlMYRGMfrDaeTEP1jKh36t%2Fn%2BJ%2BwTCRX9%2BddVQzfLagC9VJCKqhbu2uNXKGSkSI3a7pCrPSQs9ssaGhp9APvTKwma3%2FbTRE26CljZD7c2Ts9IIgiOKbGGurDzcAOtpmooWcVvImjahWJMdW4dELGmYe2aJLyG8fWzJAvAvBnq3cXT1vUZaSKGbvh%2FRYu6wC8Zq7b2dIpqsGEfJ%2Bz1r1%2FoRVKatMLbc6r0GOqUBGKvrdk3qxXmL%2FT15kaozCYmk0bEOyi%2F4RK1DY7AKQEojs%2BnDFRbLwO8OqvAfECuiObwQxRIrJVn%2BIBoRiFSztibmkhY04U9QWit3hy1lxylApNslg5UqI0yng7xSNweq88TN4verm6aKf8uWgDIHCgBMzvFacfoyxEA9hEgDcdHJ%2BpkhDD6AfzKqAR03dwwb7JI%2BSjbxoHYJd5pw%2FOcQGENULIRJ&X-Amz-Signature=c714df6555c70acd21f9114a832f65f5e1ddb6b79e55c3f44abed179f9581247&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667747HC7G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo2wxPR%2FziPW8DwKfb%2BmO2btA2SlpvQ3xO7zcM9vYtzAiEAoUjHjne3Br2U39AdniIkrJl4XlFFjGHxwm3Wxn8UX9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz2okBINedJRGVqNyrcA8kNwQKoAIV%2FR8%2F1BHA3LXnWXUI3e5Q4tGZR1742uhdvAs73Meo1BXqfw379C2iqGoDrmZp1Oopp%2FRYKkugro3HVfN%2Fk9A2Jb7yiKWNZGf4ZrBMumGrOAqNTXCj%2B5GJwCy1k%2BJ%2BgD1ZlstyFCQ0a9Atwg1txI4Edq%2Bue9jiDPsA4AS2iW6BDREPSY9YfUgPYWZx5tyTvrGkDIhA4LNJ7oBGOcrF1AVs1dgTyH78MERsDToWMEFQsKG7ABQW1KKVzjgtCps2pGFxibjz7cRK4eF7wWKlqGOwEwjM%2FOR6830wGBQXFI3eYNM74oUyNFJ8Zq%2Bw9wVDLf5PznTvr1hNz0hQdfGDmrgW%2B%2FzGbuIyFagPL%2BSKhNMb5e0jyuAJTjCY28I5yPZ2m9m81oTlu78A93rw8vcujsWWTSxFlMYRGMfrDaeTEP1jKh36t%2Fn%2BJ%2BwTCRX9%2BddVQzfLagC9VJCKqhbu2uNXKGSkSI3a7pCrPSQs9ssaGhp9APvTKwma3%2FbTRE26CljZD7c2Ts9IIgiOKbGGurDzcAOtpmooWcVvImjahWJMdW4dELGmYe2aJLyG8fWzJAvAvBnq3cXT1vUZaSKGbvh%2FRYu6wC8Zq7b2dIpqsGEfJ%2Bz1r1%2FoRVKatMLbc6r0GOqUBGKvrdk3qxXmL%2FT15kaozCYmk0bEOyi%2F4RK1DY7AKQEojs%2BnDFRbLwO8OqvAfECuiObwQxRIrJVn%2BIBoRiFSztibmkhY04U9QWit3hy1lxylApNslg5UqI0yng7xSNweq88TN4verm6aKf8uWgDIHCgBMzvFacfoyxEA9hEgDcdHJ%2BpkhDD6AfzKqAR03dwwb7JI%2BSjbxoHYJd5pw%2FOcQGENULIRJ&X-Amz-Signature=2e07ffb9ddf3db1c648b38ecb4c107ffdffa300d51d6b9ebd32239f34e2d6a27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667747HC7G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo2wxPR%2FziPW8DwKfb%2BmO2btA2SlpvQ3xO7zcM9vYtzAiEAoUjHjne3Br2U39AdniIkrJl4XlFFjGHxwm3Wxn8UX9gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz2okBINedJRGVqNyrcA8kNwQKoAIV%2FR8%2F1BHA3LXnWXUI3e5Q4tGZR1742uhdvAs73Meo1BXqfw379C2iqGoDrmZp1Oopp%2FRYKkugro3HVfN%2Fk9A2Jb7yiKWNZGf4ZrBMumGrOAqNTXCj%2B5GJwCy1k%2BJ%2BgD1ZlstyFCQ0a9Atwg1txI4Edq%2Bue9jiDPsA4AS2iW6BDREPSY9YfUgPYWZx5tyTvrGkDIhA4LNJ7oBGOcrF1AVs1dgTyH78MERsDToWMEFQsKG7ABQW1KKVzjgtCps2pGFxibjz7cRK4eF7wWKlqGOwEwjM%2FOR6830wGBQXFI3eYNM74oUyNFJ8Zq%2Bw9wVDLf5PznTvr1hNz0hQdfGDmrgW%2B%2FzGbuIyFagPL%2BSKhNMb5e0jyuAJTjCY28I5yPZ2m9m81oTlu78A93rw8vcujsWWTSxFlMYRGMfrDaeTEP1jKh36t%2Fn%2BJ%2BwTCRX9%2BddVQzfLagC9VJCKqhbu2uNXKGSkSI3a7pCrPSQs9ssaGhp9APvTKwma3%2FbTRE26CljZD7c2Ts9IIgiOKbGGurDzcAOtpmooWcVvImjahWJMdW4dELGmYe2aJLyG8fWzJAvAvBnq3cXT1vUZaSKGbvh%2FRYu6wC8Zq7b2dIpqsGEfJ%2Bz1r1%2FoRVKatMLbc6r0GOqUBGKvrdk3qxXmL%2FT15kaozCYmk0bEOyi%2F4RK1DY7AKQEojs%2BnDFRbLwO8OqvAfECuiObwQxRIrJVn%2BIBoRiFSztibmkhY04U9QWit3hy1lxylApNslg5UqI0yng7xSNweq88TN4verm6aKf8uWgDIHCgBMzvFacfoyxEA9hEgDcdHJ%2BpkhDD6AfzKqAR03dwwb7JI%2BSjbxoHYJd5pw%2FOcQGENULIRJ&X-Amz-Signature=56d42e1733c85444c5802f69dd6d1f44da622a6031b55f83c44adb44a4128d12&X-Amz-SignedHeaders=host&x-id=GetObject)
