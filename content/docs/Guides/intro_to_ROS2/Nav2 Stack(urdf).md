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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YFSDJ5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSbIqfK%2FzlNXLBpy5L1NVzvsa4lPcQ6Qe9ydwWJ3Tj0AiAv1mXWNnAOnEUc6rRIGwKv8CzmaiVZM8857ffhI7wCrCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2B4Kfi1hYYCkShwuKtwDjPw454xyu6ryaD%2F2kRy4A5uPxlr2u4dOiWU8z9JIGLqX7LZKziySSpVE8fE0nM1cgYrH9UDp9rH44eR9N2GUGI5CZVkg67IDQcT7axW77oFAsBvdNyY6dMZkWUW%2B11YZ%2FevxYxyVg19RjLbuXNf9xp2wQ7F8IW3btw%2F7RSk%2B4Z7QIu7s2KoJlYpAxaP8ShBUL4FJgdgfArO5pEvvVm2FdMxaVKWCpkH2RL2G0lRFxoDTN0OuooWvI3Ic4XqXEYAMmJnsjnleuXyqPLXUODGDF0hiLOwBcK%2FnKSpmFry0MW2aMhG4ZHOlKIe%2BQN1wrvN0akQl5%2Fl5CMYp9hfVtd2WG9oC3VAZ8%2FT%2B73Dyv52Zjqx88PeEw3Q62E9Z%2BEFh1%2B7mTC1rA8rhweibBt21CQduuM1bbsAXX3pMtMKY3blUDyEo9rny98VWRwEE3YWK%2BRPuLH9rQzmHk1OsOGY6BUNRi0oqJXfZd3%2BsSHEkD7d0YL45ZWQe1sDXfAfmS8o27PqJNvU6E4uKQazc0%2BALv1jpNAyYAsZwgI%2Bf1V5aQLVS%2BwwPLkGUCv0%2Fh7%2Fx0aQ1l63T3mIvMfxPMc5WucZNnufKf9u7PJjWzYZtZYMoWqWY5iriH6bGvp0PE7xBf%2F4wmevOvgY6pgF%2Bxa1W%2Fsm1acW3qIBb8jsSm9QYRwSgpOVlhWwE19zhiXk1GHRGk2xBVWGa5n4KkJ4Cp0%2F7TdnT5Lx4cIYd3X2pDYC1OCTx8%2BHXpKvC0qzkuJgY8iPrKuSaosMeQH5ARTHxBQ5NrkOZiX0AT5cgr0Ga2Q1N7Qdt9Bg2rUxm3nvhAzsVlbtTAjG9bZAygvOwrDpo%2Fi3GFMZf1%2BrkcFXwZXJbmkrZSEhN&X-Amz-Signature=c9925093105674703ba8c6ab183a5ec9e3a8d04d1cbc27161159c63a05d43b68&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YFSDJ5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSbIqfK%2FzlNXLBpy5L1NVzvsa4lPcQ6Qe9ydwWJ3Tj0AiAv1mXWNnAOnEUc6rRIGwKv8CzmaiVZM8857ffhI7wCrCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2B4Kfi1hYYCkShwuKtwDjPw454xyu6ryaD%2F2kRy4A5uPxlr2u4dOiWU8z9JIGLqX7LZKziySSpVE8fE0nM1cgYrH9UDp9rH44eR9N2GUGI5CZVkg67IDQcT7axW77oFAsBvdNyY6dMZkWUW%2B11YZ%2FevxYxyVg19RjLbuXNf9xp2wQ7F8IW3btw%2F7RSk%2B4Z7QIu7s2KoJlYpAxaP8ShBUL4FJgdgfArO5pEvvVm2FdMxaVKWCpkH2RL2G0lRFxoDTN0OuooWvI3Ic4XqXEYAMmJnsjnleuXyqPLXUODGDF0hiLOwBcK%2FnKSpmFry0MW2aMhG4ZHOlKIe%2BQN1wrvN0akQl5%2Fl5CMYp9hfVtd2WG9oC3VAZ8%2FT%2B73Dyv52Zjqx88PeEw3Q62E9Z%2BEFh1%2B7mTC1rA8rhweibBt21CQduuM1bbsAXX3pMtMKY3blUDyEo9rny98VWRwEE3YWK%2BRPuLH9rQzmHk1OsOGY6BUNRi0oqJXfZd3%2BsSHEkD7d0YL45ZWQe1sDXfAfmS8o27PqJNvU6E4uKQazc0%2BALv1jpNAyYAsZwgI%2Bf1V5aQLVS%2BwwPLkGUCv0%2Fh7%2Fx0aQ1l63T3mIvMfxPMc5WucZNnufKf9u7PJjWzYZtZYMoWqWY5iriH6bGvp0PE7xBf%2F4wmevOvgY6pgF%2Bxa1W%2Fsm1acW3qIBb8jsSm9QYRwSgpOVlhWwE19zhiXk1GHRGk2xBVWGa5n4KkJ4Cp0%2F7TdnT5Lx4cIYd3X2pDYC1OCTx8%2BHXpKvC0qzkuJgY8iPrKuSaosMeQH5ARTHxBQ5NrkOZiX0AT5cgr0Ga2Q1N7Qdt9Bg2rUxm3nvhAzsVlbtTAjG9bZAygvOwrDpo%2Fi3GFMZf1%2BrkcFXwZXJbmkrZSEhN&X-Amz-Signature=52c2b3e0a108a3aa4b317463c068306561049a6c800fcbf9aaf26de42ef06381&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YFSDJ5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSbIqfK%2FzlNXLBpy5L1NVzvsa4lPcQ6Qe9ydwWJ3Tj0AiAv1mXWNnAOnEUc6rRIGwKv8CzmaiVZM8857ffhI7wCrCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2B4Kfi1hYYCkShwuKtwDjPw454xyu6ryaD%2F2kRy4A5uPxlr2u4dOiWU8z9JIGLqX7LZKziySSpVE8fE0nM1cgYrH9UDp9rH44eR9N2GUGI5CZVkg67IDQcT7axW77oFAsBvdNyY6dMZkWUW%2B11YZ%2FevxYxyVg19RjLbuXNf9xp2wQ7F8IW3btw%2F7RSk%2B4Z7QIu7s2KoJlYpAxaP8ShBUL4FJgdgfArO5pEvvVm2FdMxaVKWCpkH2RL2G0lRFxoDTN0OuooWvI3Ic4XqXEYAMmJnsjnleuXyqPLXUODGDF0hiLOwBcK%2FnKSpmFry0MW2aMhG4ZHOlKIe%2BQN1wrvN0akQl5%2Fl5CMYp9hfVtd2WG9oC3VAZ8%2FT%2B73Dyv52Zjqx88PeEw3Q62E9Z%2BEFh1%2B7mTC1rA8rhweibBt21CQduuM1bbsAXX3pMtMKY3blUDyEo9rny98VWRwEE3YWK%2BRPuLH9rQzmHk1OsOGY6BUNRi0oqJXfZd3%2BsSHEkD7d0YL45ZWQe1sDXfAfmS8o27PqJNvU6E4uKQazc0%2BALv1jpNAyYAsZwgI%2Bf1V5aQLVS%2BwwPLkGUCv0%2Fh7%2Fx0aQ1l63T3mIvMfxPMc5WucZNnufKf9u7PJjWzYZtZYMoWqWY5iriH6bGvp0PE7xBf%2F4wmevOvgY6pgF%2Bxa1W%2Fsm1acW3qIBb8jsSm9QYRwSgpOVlhWwE19zhiXk1GHRGk2xBVWGa5n4KkJ4Cp0%2F7TdnT5Lx4cIYd3X2pDYC1OCTx8%2BHXpKvC0qzkuJgY8iPrKuSaosMeQH5ARTHxBQ5NrkOZiX0AT5cgr0Ga2Q1N7Qdt9Bg2rUxm3nvhAzsVlbtTAjG9bZAygvOwrDpo%2Fi3GFMZf1%2BrkcFXwZXJbmkrZSEhN&X-Amz-Signature=43cc02525cb32d863653a6e77daf0166fe3cac94269483636c2169861fe300f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YFSDJ5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSbIqfK%2FzlNXLBpy5L1NVzvsa4lPcQ6Qe9ydwWJ3Tj0AiAv1mXWNnAOnEUc6rRIGwKv8CzmaiVZM8857ffhI7wCrCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2B4Kfi1hYYCkShwuKtwDjPw454xyu6ryaD%2F2kRy4A5uPxlr2u4dOiWU8z9JIGLqX7LZKziySSpVE8fE0nM1cgYrH9UDp9rH44eR9N2GUGI5CZVkg67IDQcT7axW77oFAsBvdNyY6dMZkWUW%2B11YZ%2FevxYxyVg19RjLbuXNf9xp2wQ7F8IW3btw%2F7RSk%2B4Z7QIu7s2KoJlYpAxaP8ShBUL4FJgdgfArO5pEvvVm2FdMxaVKWCpkH2RL2G0lRFxoDTN0OuooWvI3Ic4XqXEYAMmJnsjnleuXyqPLXUODGDF0hiLOwBcK%2FnKSpmFry0MW2aMhG4ZHOlKIe%2BQN1wrvN0akQl5%2Fl5CMYp9hfVtd2WG9oC3VAZ8%2FT%2B73Dyv52Zjqx88PeEw3Q62E9Z%2BEFh1%2B7mTC1rA8rhweibBt21CQduuM1bbsAXX3pMtMKY3blUDyEo9rny98VWRwEE3YWK%2BRPuLH9rQzmHk1OsOGY6BUNRi0oqJXfZd3%2BsSHEkD7d0YL45ZWQe1sDXfAfmS8o27PqJNvU6E4uKQazc0%2BALv1jpNAyYAsZwgI%2Bf1V5aQLVS%2BwwPLkGUCv0%2Fh7%2Fx0aQ1l63T3mIvMfxPMc5WucZNnufKf9u7PJjWzYZtZYMoWqWY5iriH6bGvp0PE7xBf%2F4wmevOvgY6pgF%2Bxa1W%2Fsm1acW3qIBb8jsSm9QYRwSgpOVlhWwE19zhiXk1GHRGk2xBVWGa5n4KkJ4Cp0%2F7TdnT5Lx4cIYd3X2pDYC1OCTx8%2BHXpKvC0qzkuJgY8iPrKuSaosMeQH5ARTHxBQ5NrkOZiX0AT5cgr0Ga2Q1N7Qdt9Bg2rUxm3nvhAzsVlbtTAjG9bZAygvOwrDpo%2Fi3GFMZf1%2BrkcFXwZXJbmkrZSEhN&X-Amz-Signature=9c6767cbb424a885bc29f6467714b01f996d33b721da8f939dc5e86ed4d8d133&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YFSDJ5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSbIqfK%2FzlNXLBpy5L1NVzvsa4lPcQ6Qe9ydwWJ3Tj0AiAv1mXWNnAOnEUc6rRIGwKv8CzmaiVZM8857ffhI7wCrCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2B4Kfi1hYYCkShwuKtwDjPw454xyu6ryaD%2F2kRy4A5uPxlr2u4dOiWU8z9JIGLqX7LZKziySSpVE8fE0nM1cgYrH9UDp9rH44eR9N2GUGI5CZVkg67IDQcT7axW77oFAsBvdNyY6dMZkWUW%2B11YZ%2FevxYxyVg19RjLbuXNf9xp2wQ7F8IW3btw%2F7RSk%2B4Z7QIu7s2KoJlYpAxaP8ShBUL4FJgdgfArO5pEvvVm2FdMxaVKWCpkH2RL2G0lRFxoDTN0OuooWvI3Ic4XqXEYAMmJnsjnleuXyqPLXUODGDF0hiLOwBcK%2FnKSpmFry0MW2aMhG4ZHOlKIe%2BQN1wrvN0akQl5%2Fl5CMYp9hfVtd2WG9oC3VAZ8%2FT%2B73Dyv52Zjqx88PeEw3Q62E9Z%2BEFh1%2B7mTC1rA8rhweibBt21CQduuM1bbsAXX3pMtMKY3blUDyEo9rny98VWRwEE3YWK%2BRPuLH9rQzmHk1OsOGY6BUNRi0oqJXfZd3%2BsSHEkD7d0YL45ZWQe1sDXfAfmS8o27PqJNvU6E4uKQazc0%2BALv1jpNAyYAsZwgI%2Bf1V5aQLVS%2BwwPLkGUCv0%2Fh7%2Fx0aQ1l63T3mIvMfxPMc5WucZNnufKf9u7PJjWzYZtZYMoWqWY5iriH6bGvp0PE7xBf%2F4wmevOvgY6pgF%2Bxa1W%2Fsm1acW3qIBb8jsSm9QYRwSgpOVlhWwE19zhiXk1GHRGk2xBVWGa5n4KkJ4Cp0%2F7TdnT5Lx4cIYd3X2pDYC1OCTx8%2BHXpKvC0qzkuJgY8iPrKuSaosMeQH5ARTHxBQ5NrkOZiX0AT5cgr0Ga2Q1N7Qdt9Bg2rUxm3nvhAzsVlbtTAjG9bZAygvOwrDpo%2Fi3GFMZf1%2BrkcFXwZXJbmkrZSEhN&X-Amz-Signature=a793de37f74fd01cab4f8fbc52d47dc4e67ea6e0211a6a9e6dee2b3c0d7f15aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YFSDJ5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSbIqfK%2FzlNXLBpy5L1NVzvsa4lPcQ6Qe9ydwWJ3Tj0AiAv1mXWNnAOnEUc6rRIGwKv8CzmaiVZM8857ffhI7wCrCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2B4Kfi1hYYCkShwuKtwDjPw454xyu6ryaD%2F2kRy4A5uPxlr2u4dOiWU8z9JIGLqX7LZKziySSpVE8fE0nM1cgYrH9UDp9rH44eR9N2GUGI5CZVkg67IDQcT7axW77oFAsBvdNyY6dMZkWUW%2B11YZ%2FevxYxyVg19RjLbuXNf9xp2wQ7F8IW3btw%2F7RSk%2B4Z7QIu7s2KoJlYpAxaP8ShBUL4FJgdgfArO5pEvvVm2FdMxaVKWCpkH2RL2G0lRFxoDTN0OuooWvI3Ic4XqXEYAMmJnsjnleuXyqPLXUODGDF0hiLOwBcK%2FnKSpmFry0MW2aMhG4ZHOlKIe%2BQN1wrvN0akQl5%2Fl5CMYp9hfVtd2WG9oC3VAZ8%2FT%2B73Dyv52Zjqx88PeEw3Q62E9Z%2BEFh1%2B7mTC1rA8rhweibBt21CQduuM1bbsAXX3pMtMKY3blUDyEo9rny98VWRwEE3YWK%2BRPuLH9rQzmHk1OsOGY6BUNRi0oqJXfZd3%2BsSHEkD7d0YL45ZWQe1sDXfAfmS8o27PqJNvU6E4uKQazc0%2BALv1jpNAyYAsZwgI%2Bf1V5aQLVS%2BwwPLkGUCv0%2Fh7%2Fx0aQ1l63T3mIvMfxPMc5WucZNnufKf9u7PJjWzYZtZYMoWqWY5iriH6bGvp0PE7xBf%2F4wmevOvgY6pgF%2Bxa1W%2Fsm1acW3qIBb8jsSm9QYRwSgpOVlhWwE19zhiXk1GHRGk2xBVWGa5n4KkJ4Cp0%2F7TdnT5Lx4cIYd3X2pDYC1OCTx8%2BHXpKvC0qzkuJgY8iPrKuSaosMeQH5ARTHxBQ5NrkOZiX0AT5cgr0Ga2Q1N7Qdt9Bg2rUxm3nvhAzsVlbtTAjG9bZAygvOwrDpo%2Fi3GFMZf1%2BrkcFXwZXJbmkrZSEhN&X-Amz-Signature=f6e654aeea3483fa9f7c37003007699da4fa8512c0dcdfcc6ac925d0b3cef446&X-Amz-SignedHeaders=host&x-id=GetObject)
