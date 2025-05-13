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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6ZN5FC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIERlnqIIJQX68Y2jNUv3M4UTN6%2FH9AUpum0U3cQMnGgEAiB0JZTjASQ7k9gzDBiDUH8qYkYRZSsA2tbNW52%2BKfGKFyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvWXhWb28qggFdY%2FKtwDb3R0PWNZ8cyWJR49N0Xg0sr%2BaYs296GMiMDdyyuB8%2F0cacEr3K29uwxGLxLjcCBrPr7DAs3f%2Fb8IPEM0BZ1yCDCZkW0PcJYs7GnFGBo4bgZzsGUaCy87Wx6FINoqps1pYdYLRwY%2BSnrKCCkbEPID0wBprZhnPqAuHymQMCe7lekZn23Dks0tfKrvJfmUxtaGbDozANGvF7FTX205w49Ix1pFsq4ZW4h6F%2BWjAsbZkHMGODc3hwgRnC41i658caXHUUEDKl6HkNBYlrNYWlFbV2URvq2Is05dgTQWSS0inm7kbONRjsYBdkMKtb0zV1CUMtkdIZEPtfkiOiHv1e02fUDWfRikoiHw7EERJRVPKFOe4phHvy%2BHwrQfAhVlPAr87F2Owz5htcq6HrGQ3akSSH8xP0tKhtegWquZ0VhLw%2BaPYRfhjJ6zQNqWeOjnbq0JAOB0%2FJpXjwuiJfSyHtt337PyfkIcQnQ%2FS3KPbWe8DIj9vQZ%2F8IeNQ7sqd%2BqPNsYKlxZ7%2BbkxNWgooBmaoQGgOOObCjh0J4BXVwyLDkKZQORxSOV28wEdWrFVX4RfWqf5Brk9Xghp5EtOUwJPGGg6qlOY5WHnJ17JpKx%2FxKs11HWPcrsI6ykS5oTzIacw05GKwQY6pgGVZA3wEIbHwGkjHap3LreAZXjEfPladB6QFZQr0svXSoSpM4HqVWElhcmXHJeIjB00E0wHUekCfUZiIf5yieE88Q5ApVYc2nvAh1cQhRCLGE%2FfyinJfS%2BrpR3NRD%2FPzR%2FCoklwH16%2F511s%2FCFqxRvF2S0MaT%2FXS5xSVItPk1VaoyHdkDX1EFLrUcxN3GIffrEPJKZJ8xfBhIV%2BhgHseUEmAERm8nWT&X-Amz-Signature=580fe55084e160a2e48d19d2d3820b58b6cfa63215887e1b8d62c1349b3eedaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6ZN5FC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIERlnqIIJQX68Y2jNUv3M4UTN6%2FH9AUpum0U3cQMnGgEAiB0JZTjASQ7k9gzDBiDUH8qYkYRZSsA2tbNW52%2BKfGKFyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvWXhWb28qggFdY%2FKtwDb3R0PWNZ8cyWJR49N0Xg0sr%2BaYs296GMiMDdyyuB8%2F0cacEr3K29uwxGLxLjcCBrPr7DAs3f%2Fb8IPEM0BZ1yCDCZkW0PcJYs7GnFGBo4bgZzsGUaCy87Wx6FINoqps1pYdYLRwY%2BSnrKCCkbEPID0wBprZhnPqAuHymQMCe7lekZn23Dks0tfKrvJfmUxtaGbDozANGvF7FTX205w49Ix1pFsq4ZW4h6F%2BWjAsbZkHMGODc3hwgRnC41i658caXHUUEDKl6HkNBYlrNYWlFbV2URvq2Is05dgTQWSS0inm7kbONRjsYBdkMKtb0zV1CUMtkdIZEPtfkiOiHv1e02fUDWfRikoiHw7EERJRVPKFOe4phHvy%2BHwrQfAhVlPAr87F2Owz5htcq6HrGQ3akSSH8xP0tKhtegWquZ0VhLw%2BaPYRfhjJ6zQNqWeOjnbq0JAOB0%2FJpXjwuiJfSyHtt337PyfkIcQnQ%2FS3KPbWe8DIj9vQZ%2F8IeNQ7sqd%2BqPNsYKlxZ7%2BbkxNWgooBmaoQGgOOObCjh0J4BXVwyLDkKZQORxSOV28wEdWrFVX4RfWqf5Brk9Xghp5EtOUwJPGGg6qlOY5WHnJ17JpKx%2FxKs11HWPcrsI6ykS5oTzIacw05GKwQY6pgGVZA3wEIbHwGkjHap3LreAZXjEfPladB6QFZQr0svXSoSpM4HqVWElhcmXHJeIjB00E0wHUekCfUZiIf5yieE88Q5ApVYc2nvAh1cQhRCLGE%2FfyinJfS%2BrpR3NRD%2FPzR%2FCoklwH16%2F511s%2FCFqxRvF2S0MaT%2FXS5xSVItPk1VaoyHdkDX1EFLrUcxN3GIffrEPJKZJ8xfBhIV%2BhgHseUEmAERm8nWT&X-Amz-Signature=d01d766274776957547e4d3c40a3d20983008ea3e5de97f08a77269483eb58e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6ZN5FC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIERlnqIIJQX68Y2jNUv3M4UTN6%2FH9AUpum0U3cQMnGgEAiB0JZTjASQ7k9gzDBiDUH8qYkYRZSsA2tbNW52%2BKfGKFyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvWXhWb28qggFdY%2FKtwDb3R0PWNZ8cyWJR49N0Xg0sr%2BaYs296GMiMDdyyuB8%2F0cacEr3K29uwxGLxLjcCBrPr7DAs3f%2Fb8IPEM0BZ1yCDCZkW0PcJYs7GnFGBo4bgZzsGUaCy87Wx6FINoqps1pYdYLRwY%2BSnrKCCkbEPID0wBprZhnPqAuHymQMCe7lekZn23Dks0tfKrvJfmUxtaGbDozANGvF7FTX205w49Ix1pFsq4ZW4h6F%2BWjAsbZkHMGODc3hwgRnC41i658caXHUUEDKl6HkNBYlrNYWlFbV2URvq2Is05dgTQWSS0inm7kbONRjsYBdkMKtb0zV1CUMtkdIZEPtfkiOiHv1e02fUDWfRikoiHw7EERJRVPKFOe4phHvy%2BHwrQfAhVlPAr87F2Owz5htcq6HrGQ3akSSH8xP0tKhtegWquZ0VhLw%2BaPYRfhjJ6zQNqWeOjnbq0JAOB0%2FJpXjwuiJfSyHtt337PyfkIcQnQ%2FS3KPbWe8DIj9vQZ%2F8IeNQ7sqd%2BqPNsYKlxZ7%2BbkxNWgooBmaoQGgOOObCjh0J4BXVwyLDkKZQORxSOV28wEdWrFVX4RfWqf5Brk9Xghp5EtOUwJPGGg6qlOY5WHnJ17JpKx%2FxKs11HWPcrsI6ykS5oTzIacw05GKwQY6pgGVZA3wEIbHwGkjHap3LreAZXjEfPladB6QFZQr0svXSoSpM4HqVWElhcmXHJeIjB00E0wHUekCfUZiIf5yieE88Q5ApVYc2nvAh1cQhRCLGE%2FfyinJfS%2BrpR3NRD%2FPzR%2FCoklwH16%2F511s%2FCFqxRvF2S0MaT%2FXS5xSVItPk1VaoyHdkDX1EFLrUcxN3GIffrEPJKZJ8xfBhIV%2BhgHseUEmAERm8nWT&X-Amz-Signature=8beb55c745eebbfcb691d5d591b860f14f0519a40df3bee1c1dc92e2e808e8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6ZN5FC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIERlnqIIJQX68Y2jNUv3M4UTN6%2FH9AUpum0U3cQMnGgEAiB0JZTjASQ7k9gzDBiDUH8qYkYRZSsA2tbNW52%2BKfGKFyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvWXhWb28qggFdY%2FKtwDb3R0PWNZ8cyWJR49N0Xg0sr%2BaYs296GMiMDdyyuB8%2F0cacEr3K29uwxGLxLjcCBrPr7DAs3f%2Fb8IPEM0BZ1yCDCZkW0PcJYs7GnFGBo4bgZzsGUaCy87Wx6FINoqps1pYdYLRwY%2BSnrKCCkbEPID0wBprZhnPqAuHymQMCe7lekZn23Dks0tfKrvJfmUxtaGbDozANGvF7FTX205w49Ix1pFsq4ZW4h6F%2BWjAsbZkHMGODc3hwgRnC41i658caXHUUEDKl6HkNBYlrNYWlFbV2URvq2Is05dgTQWSS0inm7kbONRjsYBdkMKtb0zV1CUMtkdIZEPtfkiOiHv1e02fUDWfRikoiHw7EERJRVPKFOe4phHvy%2BHwrQfAhVlPAr87F2Owz5htcq6HrGQ3akSSH8xP0tKhtegWquZ0VhLw%2BaPYRfhjJ6zQNqWeOjnbq0JAOB0%2FJpXjwuiJfSyHtt337PyfkIcQnQ%2FS3KPbWe8DIj9vQZ%2F8IeNQ7sqd%2BqPNsYKlxZ7%2BbkxNWgooBmaoQGgOOObCjh0J4BXVwyLDkKZQORxSOV28wEdWrFVX4RfWqf5Brk9Xghp5EtOUwJPGGg6qlOY5WHnJ17JpKx%2FxKs11HWPcrsI6ykS5oTzIacw05GKwQY6pgGVZA3wEIbHwGkjHap3LreAZXjEfPladB6QFZQr0svXSoSpM4HqVWElhcmXHJeIjB00E0wHUekCfUZiIf5yieE88Q5ApVYc2nvAh1cQhRCLGE%2FfyinJfS%2BrpR3NRD%2FPzR%2FCoklwH16%2F511s%2FCFqxRvF2S0MaT%2FXS5xSVItPk1VaoyHdkDX1EFLrUcxN3GIffrEPJKZJ8xfBhIV%2BhgHseUEmAERm8nWT&X-Amz-Signature=e1653a8c65c5646058c8ea7de7d0255cf020d4acb53f87d5e9554a5db5697c77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6ZN5FC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIERlnqIIJQX68Y2jNUv3M4UTN6%2FH9AUpum0U3cQMnGgEAiB0JZTjASQ7k9gzDBiDUH8qYkYRZSsA2tbNW52%2BKfGKFyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvWXhWb28qggFdY%2FKtwDb3R0PWNZ8cyWJR49N0Xg0sr%2BaYs296GMiMDdyyuB8%2F0cacEr3K29uwxGLxLjcCBrPr7DAs3f%2Fb8IPEM0BZ1yCDCZkW0PcJYs7GnFGBo4bgZzsGUaCy87Wx6FINoqps1pYdYLRwY%2BSnrKCCkbEPID0wBprZhnPqAuHymQMCe7lekZn23Dks0tfKrvJfmUxtaGbDozANGvF7FTX205w49Ix1pFsq4ZW4h6F%2BWjAsbZkHMGODc3hwgRnC41i658caXHUUEDKl6HkNBYlrNYWlFbV2URvq2Is05dgTQWSS0inm7kbONRjsYBdkMKtb0zV1CUMtkdIZEPtfkiOiHv1e02fUDWfRikoiHw7EERJRVPKFOe4phHvy%2BHwrQfAhVlPAr87F2Owz5htcq6HrGQ3akSSH8xP0tKhtegWquZ0VhLw%2BaPYRfhjJ6zQNqWeOjnbq0JAOB0%2FJpXjwuiJfSyHtt337PyfkIcQnQ%2FS3KPbWe8DIj9vQZ%2F8IeNQ7sqd%2BqPNsYKlxZ7%2BbkxNWgooBmaoQGgOOObCjh0J4BXVwyLDkKZQORxSOV28wEdWrFVX4RfWqf5Brk9Xghp5EtOUwJPGGg6qlOY5WHnJ17JpKx%2FxKs11HWPcrsI6ykS5oTzIacw05GKwQY6pgGVZA3wEIbHwGkjHap3LreAZXjEfPladB6QFZQr0svXSoSpM4HqVWElhcmXHJeIjB00E0wHUekCfUZiIf5yieE88Q5ApVYc2nvAh1cQhRCLGE%2FfyinJfS%2BrpR3NRD%2FPzR%2FCoklwH16%2F511s%2FCFqxRvF2S0MaT%2FXS5xSVItPk1VaoyHdkDX1EFLrUcxN3GIffrEPJKZJ8xfBhIV%2BhgHseUEmAERm8nWT&X-Amz-Signature=8a30c79bfad93ebd0d4947b61e5ffb7862a42f7862eb30b780e32cbb01c1fbe5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6ZN5FC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIERlnqIIJQX68Y2jNUv3M4UTN6%2FH9AUpum0U3cQMnGgEAiB0JZTjASQ7k9gzDBiDUH8qYkYRZSsA2tbNW52%2BKfGKFyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvWXhWb28qggFdY%2FKtwDb3R0PWNZ8cyWJR49N0Xg0sr%2BaYs296GMiMDdyyuB8%2F0cacEr3K29uwxGLxLjcCBrPr7DAs3f%2Fb8IPEM0BZ1yCDCZkW0PcJYs7GnFGBo4bgZzsGUaCy87Wx6FINoqps1pYdYLRwY%2BSnrKCCkbEPID0wBprZhnPqAuHymQMCe7lekZn23Dks0tfKrvJfmUxtaGbDozANGvF7FTX205w49Ix1pFsq4ZW4h6F%2BWjAsbZkHMGODc3hwgRnC41i658caXHUUEDKl6HkNBYlrNYWlFbV2URvq2Is05dgTQWSS0inm7kbONRjsYBdkMKtb0zV1CUMtkdIZEPtfkiOiHv1e02fUDWfRikoiHw7EERJRVPKFOe4phHvy%2BHwrQfAhVlPAr87F2Owz5htcq6HrGQ3akSSH8xP0tKhtegWquZ0VhLw%2BaPYRfhjJ6zQNqWeOjnbq0JAOB0%2FJpXjwuiJfSyHtt337PyfkIcQnQ%2FS3KPbWe8DIj9vQZ%2F8IeNQ7sqd%2BqPNsYKlxZ7%2BbkxNWgooBmaoQGgOOObCjh0J4BXVwyLDkKZQORxSOV28wEdWrFVX4RfWqf5Brk9Xghp5EtOUwJPGGg6qlOY5WHnJ17JpKx%2FxKs11HWPcrsI6ykS5oTzIacw05GKwQY6pgGVZA3wEIbHwGkjHap3LreAZXjEfPladB6QFZQr0svXSoSpM4HqVWElhcmXHJeIjB00E0wHUekCfUZiIf5yieE88Q5ApVYc2nvAh1cQhRCLGE%2FfyinJfS%2BrpR3NRD%2FPzR%2FCoklwH16%2F511s%2FCFqxRvF2S0MaT%2FXS5xSVItPk1VaoyHdkDX1EFLrUcxN3GIffrEPJKZJ8xfBhIV%2BhgHseUEmAERm8nWT&X-Amz-Signature=b63f6b55f0a9c9da6cd372636ceb359acce2864401bc098079bff2af495a1c5f&X-Amz-SignedHeaders=host&x-id=GetObject)
