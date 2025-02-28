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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BZX7V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFKw68IIrJkfql%2F2fcPtcrV62vcYBu0c52nro3M9jISkAiATloH8Bf%2BOd8YQwS9IxjFrzv%2FZBg7QZFMaU%2F8oo8UVGiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCFfFB9Gj405qRUjKtwDb7AZbLqpwg8p5YidQ775o%2FuwqqB4W2wUJAJFqRiFSHppo1xBPGDscSU6FO%2FuUmojBVsaz0DFQc7YkfwNy2oLeHJ2iSe%2ByjrwKPVcq32NColiEZ8lcfBYcL6nsvxo9%2BS6y3nZoE1NFbB78kFE4unyi4zrj8pCFxl6rrrrHuaxuMvlGrz8OXbT%2FEeN97bRcyPNlHvtu4BlXbgsP98QrNG5pEM0SqMt7daxtBT9JKqBTCZF9Dmr%2BKtwmufwYfm7NLePT%2FjVmdoAPQOW14XHFpjYF%2BKyaCjnmdJ4o2lRxZUZZ7Ji%2BNGqviGzyje4Yl%2BGy5aRZvGc7eiHlflsNk2baPXnEwzggI7BWCFgeIys7Xih2Lf1irgXj7rfnClJZ9ELNrR%2Fzfwo2GB2kxWD%2FnSDr%2FVmdh8LuOyGVD9k3zKu4xP9%2B6rAEbvM24hBVrAmPHXTJ9kyGmmEVySsW8BiBPT3BuheQyRRoJcXz1Nk7YImz5M9zsJgsHxlBgw6hnRzuxUGhz0IGvlUht%2F5W%2B8GQTqUP01wjURoWavTyMRYlDKbyEHKqxEAIV9Fo8CCY4iqfE0NDKH7Z8zM%2B1y98AmTk8MOWo7S6q6oQ2NqEaN5V0zkuhslDKZcyvSaEC9IxxK7ACsw8vOGvgY6pgFuqKJRPSdvE%2FsQn%2F%2Bhk4FRMVbThTIOJN60KUMYBFogm%2FUiznm0Er5GAkYj8j8Nsgg0Ep6G%2FrSSp8RTKsOWQbIdjgo%2FlhVuDhQ%2F%2BqQyvx3s11nL9euQOfxKqk9gUDc4bOb3KcJZzvqvPaHR6V9DInGRSBsDSoX%2BK45Y3a%2FGsyibo2HwiruKSe90p3o8jK1mHY5RCl15k37HzfFqE9Vtgj1UJiI37HDL&X-Amz-Signature=db94cee7cffeb8d0ce5505c8cc7e13c43e57d001368721c637c70f8702a1f11a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BZX7V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFKw68IIrJkfql%2F2fcPtcrV62vcYBu0c52nro3M9jISkAiATloH8Bf%2BOd8YQwS9IxjFrzv%2FZBg7QZFMaU%2F8oo8UVGiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCFfFB9Gj405qRUjKtwDb7AZbLqpwg8p5YidQ775o%2FuwqqB4W2wUJAJFqRiFSHppo1xBPGDscSU6FO%2FuUmojBVsaz0DFQc7YkfwNy2oLeHJ2iSe%2ByjrwKPVcq32NColiEZ8lcfBYcL6nsvxo9%2BS6y3nZoE1NFbB78kFE4unyi4zrj8pCFxl6rrrrHuaxuMvlGrz8OXbT%2FEeN97bRcyPNlHvtu4BlXbgsP98QrNG5pEM0SqMt7daxtBT9JKqBTCZF9Dmr%2BKtwmufwYfm7NLePT%2FjVmdoAPQOW14XHFpjYF%2BKyaCjnmdJ4o2lRxZUZZ7Ji%2BNGqviGzyje4Yl%2BGy5aRZvGc7eiHlflsNk2baPXnEwzggI7BWCFgeIys7Xih2Lf1irgXj7rfnClJZ9ELNrR%2Fzfwo2GB2kxWD%2FnSDr%2FVmdh8LuOyGVD9k3zKu4xP9%2B6rAEbvM24hBVrAmPHXTJ9kyGmmEVySsW8BiBPT3BuheQyRRoJcXz1Nk7YImz5M9zsJgsHxlBgw6hnRzuxUGhz0IGvlUht%2F5W%2B8GQTqUP01wjURoWavTyMRYlDKbyEHKqxEAIV9Fo8CCY4iqfE0NDKH7Z8zM%2B1y98AmTk8MOWo7S6q6oQ2NqEaN5V0zkuhslDKZcyvSaEC9IxxK7ACsw8vOGvgY6pgFuqKJRPSdvE%2FsQn%2F%2Bhk4FRMVbThTIOJN60KUMYBFogm%2FUiznm0Er5GAkYj8j8Nsgg0Ep6G%2FrSSp8RTKsOWQbIdjgo%2FlhVuDhQ%2F%2BqQyvx3s11nL9euQOfxKqk9gUDc4bOb3KcJZzvqvPaHR6V9DInGRSBsDSoX%2BK45Y3a%2FGsyibo2HwiruKSe90p3o8jK1mHY5RCl15k37HzfFqE9Vtgj1UJiI37HDL&X-Amz-Signature=1e2a0324a51fff6e7f1cfec680780e34e314484ad7475f48ace72c18424ca931&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BZX7V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFKw68IIrJkfql%2F2fcPtcrV62vcYBu0c52nro3M9jISkAiATloH8Bf%2BOd8YQwS9IxjFrzv%2FZBg7QZFMaU%2F8oo8UVGiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCFfFB9Gj405qRUjKtwDb7AZbLqpwg8p5YidQ775o%2FuwqqB4W2wUJAJFqRiFSHppo1xBPGDscSU6FO%2FuUmojBVsaz0DFQc7YkfwNy2oLeHJ2iSe%2ByjrwKPVcq32NColiEZ8lcfBYcL6nsvxo9%2BS6y3nZoE1NFbB78kFE4unyi4zrj8pCFxl6rrrrHuaxuMvlGrz8OXbT%2FEeN97bRcyPNlHvtu4BlXbgsP98QrNG5pEM0SqMt7daxtBT9JKqBTCZF9Dmr%2BKtwmufwYfm7NLePT%2FjVmdoAPQOW14XHFpjYF%2BKyaCjnmdJ4o2lRxZUZZ7Ji%2BNGqviGzyje4Yl%2BGy5aRZvGc7eiHlflsNk2baPXnEwzggI7BWCFgeIys7Xih2Lf1irgXj7rfnClJZ9ELNrR%2Fzfwo2GB2kxWD%2FnSDr%2FVmdh8LuOyGVD9k3zKu4xP9%2B6rAEbvM24hBVrAmPHXTJ9kyGmmEVySsW8BiBPT3BuheQyRRoJcXz1Nk7YImz5M9zsJgsHxlBgw6hnRzuxUGhz0IGvlUht%2F5W%2B8GQTqUP01wjURoWavTyMRYlDKbyEHKqxEAIV9Fo8CCY4iqfE0NDKH7Z8zM%2B1y98AmTk8MOWo7S6q6oQ2NqEaN5V0zkuhslDKZcyvSaEC9IxxK7ACsw8vOGvgY6pgFuqKJRPSdvE%2FsQn%2F%2Bhk4FRMVbThTIOJN60KUMYBFogm%2FUiznm0Er5GAkYj8j8Nsgg0Ep6G%2FrSSp8RTKsOWQbIdjgo%2FlhVuDhQ%2F%2BqQyvx3s11nL9euQOfxKqk9gUDc4bOb3KcJZzvqvPaHR6V9DInGRSBsDSoX%2BK45Y3a%2FGsyibo2HwiruKSe90p3o8jK1mHY5RCl15k37HzfFqE9Vtgj1UJiI37HDL&X-Amz-Signature=387730dc0b81cd3491ffa53b2def5937f0de9f75e22e5b372d38611408fb99dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BZX7V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFKw68IIrJkfql%2F2fcPtcrV62vcYBu0c52nro3M9jISkAiATloH8Bf%2BOd8YQwS9IxjFrzv%2FZBg7QZFMaU%2F8oo8UVGiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCFfFB9Gj405qRUjKtwDb7AZbLqpwg8p5YidQ775o%2FuwqqB4W2wUJAJFqRiFSHppo1xBPGDscSU6FO%2FuUmojBVsaz0DFQc7YkfwNy2oLeHJ2iSe%2ByjrwKPVcq32NColiEZ8lcfBYcL6nsvxo9%2BS6y3nZoE1NFbB78kFE4unyi4zrj8pCFxl6rrrrHuaxuMvlGrz8OXbT%2FEeN97bRcyPNlHvtu4BlXbgsP98QrNG5pEM0SqMt7daxtBT9JKqBTCZF9Dmr%2BKtwmufwYfm7NLePT%2FjVmdoAPQOW14XHFpjYF%2BKyaCjnmdJ4o2lRxZUZZ7Ji%2BNGqviGzyje4Yl%2BGy5aRZvGc7eiHlflsNk2baPXnEwzggI7BWCFgeIys7Xih2Lf1irgXj7rfnClJZ9ELNrR%2Fzfwo2GB2kxWD%2FnSDr%2FVmdh8LuOyGVD9k3zKu4xP9%2B6rAEbvM24hBVrAmPHXTJ9kyGmmEVySsW8BiBPT3BuheQyRRoJcXz1Nk7YImz5M9zsJgsHxlBgw6hnRzuxUGhz0IGvlUht%2F5W%2B8GQTqUP01wjURoWavTyMRYlDKbyEHKqxEAIV9Fo8CCY4iqfE0NDKH7Z8zM%2B1y98AmTk8MOWo7S6q6oQ2NqEaN5V0zkuhslDKZcyvSaEC9IxxK7ACsw8vOGvgY6pgFuqKJRPSdvE%2FsQn%2F%2Bhk4FRMVbThTIOJN60KUMYBFogm%2FUiznm0Er5GAkYj8j8Nsgg0Ep6G%2FrSSp8RTKsOWQbIdjgo%2FlhVuDhQ%2F%2BqQyvx3s11nL9euQOfxKqk9gUDc4bOb3KcJZzvqvPaHR6V9DInGRSBsDSoX%2BK45Y3a%2FGsyibo2HwiruKSe90p3o8jK1mHY5RCl15k37HzfFqE9Vtgj1UJiI37HDL&X-Amz-Signature=eaaac5a41d720056fbe044f4cd60308d07257061a2042717f8a3aa4440c86383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BZX7V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFKw68IIrJkfql%2F2fcPtcrV62vcYBu0c52nro3M9jISkAiATloH8Bf%2BOd8YQwS9IxjFrzv%2FZBg7QZFMaU%2F8oo8UVGiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCFfFB9Gj405qRUjKtwDb7AZbLqpwg8p5YidQ775o%2FuwqqB4W2wUJAJFqRiFSHppo1xBPGDscSU6FO%2FuUmojBVsaz0DFQc7YkfwNy2oLeHJ2iSe%2ByjrwKPVcq32NColiEZ8lcfBYcL6nsvxo9%2BS6y3nZoE1NFbB78kFE4unyi4zrj8pCFxl6rrrrHuaxuMvlGrz8OXbT%2FEeN97bRcyPNlHvtu4BlXbgsP98QrNG5pEM0SqMt7daxtBT9JKqBTCZF9Dmr%2BKtwmufwYfm7NLePT%2FjVmdoAPQOW14XHFpjYF%2BKyaCjnmdJ4o2lRxZUZZ7Ji%2BNGqviGzyje4Yl%2BGy5aRZvGc7eiHlflsNk2baPXnEwzggI7BWCFgeIys7Xih2Lf1irgXj7rfnClJZ9ELNrR%2Fzfwo2GB2kxWD%2FnSDr%2FVmdh8LuOyGVD9k3zKu4xP9%2B6rAEbvM24hBVrAmPHXTJ9kyGmmEVySsW8BiBPT3BuheQyRRoJcXz1Nk7YImz5M9zsJgsHxlBgw6hnRzuxUGhz0IGvlUht%2F5W%2B8GQTqUP01wjURoWavTyMRYlDKbyEHKqxEAIV9Fo8CCY4iqfE0NDKH7Z8zM%2B1y98AmTk8MOWo7S6q6oQ2NqEaN5V0zkuhslDKZcyvSaEC9IxxK7ACsw8vOGvgY6pgFuqKJRPSdvE%2FsQn%2F%2Bhk4FRMVbThTIOJN60KUMYBFogm%2FUiznm0Er5GAkYj8j8Nsgg0Ep6G%2FrSSp8RTKsOWQbIdjgo%2FlhVuDhQ%2F%2BqQyvx3s11nL9euQOfxKqk9gUDc4bOb3KcJZzvqvPaHR6V9DInGRSBsDSoX%2BK45Y3a%2FGsyibo2HwiruKSe90p3o8jK1mHY5RCl15k37HzfFqE9Vtgj1UJiI37HDL&X-Amz-Signature=35d6c7c662ae255870c627caac387a550e85b41445ac9a92d8acf8808096855c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BZX7V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFKw68IIrJkfql%2F2fcPtcrV62vcYBu0c52nro3M9jISkAiATloH8Bf%2BOd8YQwS9IxjFrzv%2FZBg7QZFMaU%2F8oo8UVGiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJCFfFB9Gj405qRUjKtwDb7AZbLqpwg8p5YidQ775o%2FuwqqB4W2wUJAJFqRiFSHppo1xBPGDscSU6FO%2FuUmojBVsaz0DFQc7YkfwNy2oLeHJ2iSe%2ByjrwKPVcq32NColiEZ8lcfBYcL6nsvxo9%2BS6y3nZoE1NFbB78kFE4unyi4zrj8pCFxl6rrrrHuaxuMvlGrz8OXbT%2FEeN97bRcyPNlHvtu4BlXbgsP98QrNG5pEM0SqMt7daxtBT9JKqBTCZF9Dmr%2BKtwmufwYfm7NLePT%2FjVmdoAPQOW14XHFpjYF%2BKyaCjnmdJ4o2lRxZUZZ7Ji%2BNGqviGzyje4Yl%2BGy5aRZvGc7eiHlflsNk2baPXnEwzggI7BWCFgeIys7Xih2Lf1irgXj7rfnClJZ9ELNrR%2Fzfwo2GB2kxWD%2FnSDr%2FVmdh8LuOyGVD9k3zKu4xP9%2B6rAEbvM24hBVrAmPHXTJ9kyGmmEVySsW8BiBPT3BuheQyRRoJcXz1Nk7YImz5M9zsJgsHxlBgw6hnRzuxUGhz0IGvlUht%2F5W%2B8GQTqUP01wjURoWavTyMRYlDKbyEHKqxEAIV9Fo8CCY4iqfE0NDKH7Z8zM%2B1y98AmTk8MOWo7S6q6oQ2NqEaN5V0zkuhslDKZcyvSaEC9IxxK7ACsw8vOGvgY6pgFuqKJRPSdvE%2FsQn%2F%2Bhk4FRMVbThTIOJN60KUMYBFogm%2FUiznm0Er5GAkYj8j8Nsgg0Ep6G%2FrSSp8RTKsOWQbIdjgo%2FlhVuDhQ%2F%2BqQyvx3s11nL9euQOfxKqk9gUDc4bOb3KcJZzvqvPaHR6V9DInGRSBsDSoX%2BK45Y3a%2FGsyibo2HwiruKSe90p3o8jK1mHY5RCl15k37HzfFqE9Vtgj1UJiI37HDL&X-Amz-Signature=265fc18e8dbd0678cc2a571abedba8eaba9984d7af31b0d3894f13ce64cd7c88&X-Amz-SignedHeaders=host&x-id=GetObject)
