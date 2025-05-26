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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5JP45F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAljNBIBVZW%2BLnGWQPOWpKI%2BuyFrrYcbnPmNL%2F%2FV7F9bAiAytg0bh0aVLEQ8kJE5XzhDOMGnzSW9JKCUVgbOJtaoDCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMimlCrZmY1WFxRobXKtwDAR%2F6DT7DL4IjBfR4OFjqLGvmmbAuvy6Fw%2FAHn3FTPo2g%2FfHbJluOpdH8bCRV%2FmR46xC43R5EXVum%2BAI9XPpNhujCx9BcErDkPT%2FJJhZc6Xzak9Qke5WrKlZYbxgeaZrufqRA2r1w8mbNkkPr0TCsSBS70NHMKyKRw99TMWeqwteRiFj3S73h8i39sRF1ZJQRKDy%2BJIPBw6O%2FmB5Zh7POOkjB5jqj9EeKysuCSq5HdToj8CLemk%2FLsA%2BXeC%2BeU8PhA2vk%2B%2B1WYsE4X%2Bd4DGLJeAxAgcw%2FE1adQTYVz0NPmfGa5Pry1ep4OseHEOVQ0lE0jhuHofUoSiiSksS2qp4d69kUQCiL%2Fazg3MapMm9uAfwtCWN%2B01yKkJVzXgikjD5cpTMaGGr0gsyPSDPsR%2FR2h4kArAlLUx%2Bl0HZ2jV6vOJh3egPE7Ef4oYm3tb6EiPOeQsUkCnpmbsMF8GYf5934nL47AkFp4ZwIN%2Bh5v%2BXjQ1anXESkcABhHTP6c2DIloJMnNbxRPweNnhFTf5wmDY4KO2590%2BR449yySbYmbWDeX%2BiPajwOho%2BczYp3GwjwWh%2BxgP9oJkZRXgpJRys237CR%2BqgP%2BTYjY4slC%2BXIffD9dcHtHCLjm6QnrFxYJ4w29bQwQY6pgHAs6kJovXs%2BIy8Vz526jEwwqw1YvdAhLO3DTXo717k%2FVBwYHuZbirRzutefBgj1WWn1PQ57GFkDQKK7JIUCHLFWLPukkpIIN8QqArAD8KZSaIwSX7GWkmjLcfGCi83l0F%2Flz1FlGCM%2BEIxZ7CZQW%2B%2BLNeWXTz52FyO%2FX8stC701tWvChyUf7rcccAX%2BCMal5vpeFlMpqkdhsr%2Fj8mFSyUdxP6SJCmS&X-Amz-Signature=f8d8fd2d55f2ff554fa66362b87d0da84bff6490ed8d794d6d0b5fc6ab51290c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5JP45F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAljNBIBVZW%2BLnGWQPOWpKI%2BuyFrrYcbnPmNL%2F%2FV7F9bAiAytg0bh0aVLEQ8kJE5XzhDOMGnzSW9JKCUVgbOJtaoDCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMimlCrZmY1WFxRobXKtwDAR%2F6DT7DL4IjBfR4OFjqLGvmmbAuvy6Fw%2FAHn3FTPo2g%2FfHbJluOpdH8bCRV%2FmR46xC43R5EXVum%2BAI9XPpNhujCx9BcErDkPT%2FJJhZc6Xzak9Qke5WrKlZYbxgeaZrufqRA2r1w8mbNkkPr0TCsSBS70NHMKyKRw99TMWeqwteRiFj3S73h8i39sRF1ZJQRKDy%2BJIPBw6O%2FmB5Zh7POOkjB5jqj9EeKysuCSq5HdToj8CLemk%2FLsA%2BXeC%2BeU8PhA2vk%2B%2B1WYsE4X%2Bd4DGLJeAxAgcw%2FE1adQTYVz0NPmfGa5Pry1ep4OseHEOVQ0lE0jhuHofUoSiiSksS2qp4d69kUQCiL%2Fazg3MapMm9uAfwtCWN%2B01yKkJVzXgikjD5cpTMaGGr0gsyPSDPsR%2FR2h4kArAlLUx%2Bl0HZ2jV6vOJh3egPE7Ef4oYm3tb6EiPOeQsUkCnpmbsMF8GYf5934nL47AkFp4ZwIN%2Bh5v%2BXjQ1anXESkcABhHTP6c2DIloJMnNbxRPweNnhFTf5wmDY4KO2590%2BR449yySbYmbWDeX%2BiPajwOho%2BczYp3GwjwWh%2BxgP9oJkZRXgpJRys237CR%2BqgP%2BTYjY4slC%2BXIffD9dcHtHCLjm6QnrFxYJ4w29bQwQY6pgHAs6kJovXs%2BIy8Vz526jEwwqw1YvdAhLO3DTXo717k%2FVBwYHuZbirRzutefBgj1WWn1PQ57GFkDQKK7JIUCHLFWLPukkpIIN8QqArAD8KZSaIwSX7GWkmjLcfGCi83l0F%2Flz1FlGCM%2BEIxZ7CZQW%2B%2BLNeWXTz52FyO%2FX8stC701tWvChyUf7rcccAX%2BCMal5vpeFlMpqkdhsr%2Fj8mFSyUdxP6SJCmS&X-Amz-Signature=99a173005597f5688068b44fc9ae3b8268046067edc8893cd629927077fbca16&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5JP45F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAljNBIBVZW%2BLnGWQPOWpKI%2BuyFrrYcbnPmNL%2F%2FV7F9bAiAytg0bh0aVLEQ8kJE5XzhDOMGnzSW9JKCUVgbOJtaoDCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMimlCrZmY1WFxRobXKtwDAR%2F6DT7DL4IjBfR4OFjqLGvmmbAuvy6Fw%2FAHn3FTPo2g%2FfHbJluOpdH8bCRV%2FmR46xC43R5EXVum%2BAI9XPpNhujCx9BcErDkPT%2FJJhZc6Xzak9Qke5WrKlZYbxgeaZrufqRA2r1w8mbNkkPr0TCsSBS70NHMKyKRw99TMWeqwteRiFj3S73h8i39sRF1ZJQRKDy%2BJIPBw6O%2FmB5Zh7POOkjB5jqj9EeKysuCSq5HdToj8CLemk%2FLsA%2BXeC%2BeU8PhA2vk%2B%2B1WYsE4X%2Bd4DGLJeAxAgcw%2FE1adQTYVz0NPmfGa5Pry1ep4OseHEOVQ0lE0jhuHofUoSiiSksS2qp4d69kUQCiL%2Fazg3MapMm9uAfwtCWN%2B01yKkJVzXgikjD5cpTMaGGr0gsyPSDPsR%2FR2h4kArAlLUx%2Bl0HZ2jV6vOJh3egPE7Ef4oYm3tb6EiPOeQsUkCnpmbsMF8GYf5934nL47AkFp4ZwIN%2Bh5v%2BXjQ1anXESkcABhHTP6c2DIloJMnNbxRPweNnhFTf5wmDY4KO2590%2BR449yySbYmbWDeX%2BiPajwOho%2BczYp3GwjwWh%2BxgP9oJkZRXgpJRys237CR%2BqgP%2BTYjY4slC%2BXIffD9dcHtHCLjm6QnrFxYJ4w29bQwQY6pgHAs6kJovXs%2BIy8Vz526jEwwqw1YvdAhLO3DTXo717k%2FVBwYHuZbirRzutefBgj1WWn1PQ57GFkDQKK7JIUCHLFWLPukkpIIN8QqArAD8KZSaIwSX7GWkmjLcfGCi83l0F%2Flz1FlGCM%2BEIxZ7CZQW%2B%2BLNeWXTz52FyO%2FX8stC701tWvChyUf7rcccAX%2BCMal5vpeFlMpqkdhsr%2Fj8mFSyUdxP6SJCmS&X-Amz-Signature=434ff57af41e10f0c160f987b3f4255e738ca57064f577a03431c04e7376aceb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5JP45F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAljNBIBVZW%2BLnGWQPOWpKI%2BuyFrrYcbnPmNL%2F%2FV7F9bAiAytg0bh0aVLEQ8kJE5XzhDOMGnzSW9JKCUVgbOJtaoDCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMimlCrZmY1WFxRobXKtwDAR%2F6DT7DL4IjBfR4OFjqLGvmmbAuvy6Fw%2FAHn3FTPo2g%2FfHbJluOpdH8bCRV%2FmR46xC43R5EXVum%2BAI9XPpNhujCx9BcErDkPT%2FJJhZc6Xzak9Qke5WrKlZYbxgeaZrufqRA2r1w8mbNkkPr0TCsSBS70NHMKyKRw99TMWeqwteRiFj3S73h8i39sRF1ZJQRKDy%2BJIPBw6O%2FmB5Zh7POOkjB5jqj9EeKysuCSq5HdToj8CLemk%2FLsA%2BXeC%2BeU8PhA2vk%2B%2B1WYsE4X%2Bd4DGLJeAxAgcw%2FE1adQTYVz0NPmfGa5Pry1ep4OseHEOVQ0lE0jhuHofUoSiiSksS2qp4d69kUQCiL%2Fazg3MapMm9uAfwtCWN%2B01yKkJVzXgikjD5cpTMaGGr0gsyPSDPsR%2FR2h4kArAlLUx%2Bl0HZ2jV6vOJh3egPE7Ef4oYm3tb6EiPOeQsUkCnpmbsMF8GYf5934nL47AkFp4ZwIN%2Bh5v%2BXjQ1anXESkcABhHTP6c2DIloJMnNbxRPweNnhFTf5wmDY4KO2590%2BR449yySbYmbWDeX%2BiPajwOho%2BczYp3GwjwWh%2BxgP9oJkZRXgpJRys237CR%2BqgP%2BTYjY4slC%2BXIffD9dcHtHCLjm6QnrFxYJ4w29bQwQY6pgHAs6kJovXs%2BIy8Vz526jEwwqw1YvdAhLO3DTXo717k%2FVBwYHuZbirRzutefBgj1WWn1PQ57GFkDQKK7JIUCHLFWLPukkpIIN8QqArAD8KZSaIwSX7GWkmjLcfGCi83l0F%2Flz1FlGCM%2BEIxZ7CZQW%2B%2BLNeWXTz52FyO%2FX8stC701tWvChyUf7rcccAX%2BCMal5vpeFlMpqkdhsr%2Fj8mFSyUdxP6SJCmS&X-Amz-Signature=3f8c7497aecdb457662716a808424971f8e5c5fc5cd76397c499c5812a8b7afa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5JP45F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAljNBIBVZW%2BLnGWQPOWpKI%2BuyFrrYcbnPmNL%2F%2FV7F9bAiAytg0bh0aVLEQ8kJE5XzhDOMGnzSW9JKCUVgbOJtaoDCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMimlCrZmY1WFxRobXKtwDAR%2F6DT7DL4IjBfR4OFjqLGvmmbAuvy6Fw%2FAHn3FTPo2g%2FfHbJluOpdH8bCRV%2FmR46xC43R5EXVum%2BAI9XPpNhujCx9BcErDkPT%2FJJhZc6Xzak9Qke5WrKlZYbxgeaZrufqRA2r1w8mbNkkPr0TCsSBS70NHMKyKRw99TMWeqwteRiFj3S73h8i39sRF1ZJQRKDy%2BJIPBw6O%2FmB5Zh7POOkjB5jqj9EeKysuCSq5HdToj8CLemk%2FLsA%2BXeC%2BeU8PhA2vk%2B%2B1WYsE4X%2Bd4DGLJeAxAgcw%2FE1adQTYVz0NPmfGa5Pry1ep4OseHEOVQ0lE0jhuHofUoSiiSksS2qp4d69kUQCiL%2Fazg3MapMm9uAfwtCWN%2B01yKkJVzXgikjD5cpTMaGGr0gsyPSDPsR%2FR2h4kArAlLUx%2Bl0HZ2jV6vOJh3egPE7Ef4oYm3tb6EiPOeQsUkCnpmbsMF8GYf5934nL47AkFp4ZwIN%2Bh5v%2BXjQ1anXESkcABhHTP6c2DIloJMnNbxRPweNnhFTf5wmDY4KO2590%2BR449yySbYmbWDeX%2BiPajwOho%2BczYp3GwjwWh%2BxgP9oJkZRXgpJRys237CR%2BqgP%2BTYjY4slC%2BXIffD9dcHtHCLjm6QnrFxYJ4w29bQwQY6pgHAs6kJovXs%2BIy8Vz526jEwwqw1YvdAhLO3DTXo717k%2FVBwYHuZbirRzutefBgj1WWn1PQ57GFkDQKK7JIUCHLFWLPukkpIIN8QqArAD8KZSaIwSX7GWkmjLcfGCi83l0F%2Flz1FlGCM%2BEIxZ7CZQW%2B%2BLNeWXTz52FyO%2FX8stC701tWvChyUf7rcccAX%2BCMal5vpeFlMpqkdhsr%2Fj8mFSyUdxP6SJCmS&X-Amz-Signature=d8480c740b758ff1c9ce8be0fb2ec81cc92ad98c08507bc7b5bca471d6e02972&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C5JP45F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAljNBIBVZW%2BLnGWQPOWpKI%2BuyFrrYcbnPmNL%2F%2FV7F9bAiAytg0bh0aVLEQ8kJE5XzhDOMGnzSW9JKCUVgbOJtaoDCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMimlCrZmY1WFxRobXKtwDAR%2F6DT7DL4IjBfR4OFjqLGvmmbAuvy6Fw%2FAHn3FTPo2g%2FfHbJluOpdH8bCRV%2FmR46xC43R5EXVum%2BAI9XPpNhujCx9BcErDkPT%2FJJhZc6Xzak9Qke5WrKlZYbxgeaZrufqRA2r1w8mbNkkPr0TCsSBS70NHMKyKRw99TMWeqwteRiFj3S73h8i39sRF1ZJQRKDy%2BJIPBw6O%2FmB5Zh7POOkjB5jqj9EeKysuCSq5HdToj8CLemk%2FLsA%2BXeC%2BeU8PhA2vk%2B%2B1WYsE4X%2Bd4DGLJeAxAgcw%2FE1adQTYVz0NPmfGa5Pry1ep4OseHEOVQ0lE0jhuHofUoSiiSksS2qp4d69kUQCiL%2Fazg3MapMm9uAfwtCWN%2B01yKkJVzXgikjD5cpTMaGGr0gsyPSDPsR%2FR2h4kArAlLUx%2Bl0HZ2jV6vOJh3egPE7Ef4oYm3tb6EiPOeQsUkCnpmbsMF8GYf5934nL47AkFp4ZwIN%2Bh5v%2BXjQ1anXESkcABhHTP6c2DIloJMnNbxRPweNnhFTf5wmDY4KO2590%2BR449yySbYmbWDeX%2BiPajwOho%2BczYp3GwjwWh%2BxgP9oJkZRXgpJRys237CR%2BqgP%2BTYjY4slC%2BXIffD9dcHtHCLjm6QnrFxYJ4w29bQwQY6pgHAs6kJovXs%2BIy8Vz526jEwwqw1YvdAhLO3DTXo717k%2FVBwYHuZbirRzutefBgj1WWn1PQ57GFkDQKK7JIUCHLFWLPukkpIIN8QqArAD8KZSaIwSX7GWkmjLcfGCi83l0F%2Flz1FlGCM%2BEIxZ7CZQW%2B%2BLNeWXTz52FyO%2FX8stC701tWvChyUf7rcccAX%2BCMal5vpeFlMpqkdhsr%2Fj8mFSyUdxP6SJCmS&X-Amz-Signature=b2c7e9face4e19a8b7b04e045533408f433e35869033c1c99a6fe7b288ca5f11&X-Amz-SignedHeaders=host&x-id=GetObject)
