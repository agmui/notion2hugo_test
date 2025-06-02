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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP7MDOZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBY5I0nAFJMEMYUfE7qzFJikg0V55UItlFl5zE35nbIeAiAEyGJ5eRawYcd9KhajOZro1XO6bFhru03P9s71EESZHyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzUdqg7yK1MBph8mKtwDk26kUp5mIMeGn0bzFPW2dVxShknpMewK1Mkgbsq%2BrIqBBacEO0LCvtG%2BS0cm0h0iW0oVa0pN%2BGR2No%2BHyuDBZFXfrh75MZb3SocbNAithnUbWqkpNRq7hgjucCHa6nfewwmyjg8VSricOQXFfDXdb6Rc4SVJeqZ0aBtK7H7dlZ97byDp62TZ7UXmX4VVHiwFWaTG9Vcs7BydEJg5R7MZ2ujwr%2FMmceU553LsjUIjT1%2BeaJqnvVhfEb6TQBHi5UsEkzT8N7y7kamQC5eicSdFGgxL9cdlMzodIIrwfnRCxIzSqfyeAIQyFmvYfQ5qWqq5b1yBrueT16hqHqsr0xuq8MTD5YE9YNPy%2BcaPfjya8Az7Kuq0rIDI4qq8nv89S9fTUPzGxNHJeMybTgfuuGldM8Eno46UZxpK8zpWDJ6rIBmP8a4u50oQTvlXUwmvFhGNaKjLc8JkSXA9jqqnUQsvPSuJClTynSB1lts64MdOT%2FETmNAU%2Fbv1MAiV21A%2FCG0JpB9Bbcnya5hFucdQ2oVO1I21F8EEv4hGREIOIbQk%2FMC6w2TdFBnMc6uS4MbH9ACzdw8iSPcpZw8vraUoZX%2FaG0N8IYMnYfnvfvQsEGA9UIzWHnDX1CDYgENGleMwyvv0wQY6pgEWMEc2nZseUbTDJ5i5eJTSgdd4WHoiSuep5bgjzsdqBvDQpGiCv4syECUsweyGzkqydtuwjx0ai0LSQvgZWZWclU4SYKCcWmsZjn30wo4sStclsmkeDagJ1fJ83oWvsyjtUD0zLJM9tJzcbePn5XFV8IU%2BLY7Pk9K5lZRjzONgYgmYk1iRHDRTHXSnxYIYeaZF%2Bl2kK8HErNY3%2FRTUO7M0RX84cj%2B1&X-Amz-Signature=5c61166a644af5488461ccae044475c046d5d91ce1256585bd7cb9a5bc7c1a58&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP7MDOZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBY5I0nAFJMEMYUfE7qzFJikg0V55UItlFl5zE35nbIeAiAEyGJ5eRawYcd9KhajOZro1XO6bFhru03P9s71EESZHyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzUdqg7yK1MBph8mKtwDk26kUp5mIMeGn0bzFPW2dVxShknpMewK1Mkgbsq%2BrIqBBacEO0LCvtG%2BS0cm0h0iW0oVa0pN%2BGR2No%2BHyuDBZFXfrh75MZb3SocbNAithnUbWqkpNRq7hgjucCHa6nfewwmyjg8VSricOQXFfDXdb6Rc4SVJeqZ0aBtK7H7dlZ97byDp62TZ7UXmX4VVHiwFWaTG9Vcs7BydEJg5R7MZ2ujwr%2FMmceU553LsjUIjT1%2BeaJqnvVhfEb6TQBHi5UsEkzT8N7y7kamQC5eicSdFGgxL9cdlMzodIIrwfnRCxIzSqfyeAIQyFmvYfQ5qWqq5b1yBrueT16hqHqsr0xuq8MTD5YE9YNPy%2BcaPfjya8Az7Kuq0rIDI4qq8nv89S9fTUPzGxNHJeMybTgfuuGldM8Eno46UZxpK8zpWDJ6rIBmP8a4u50oQTvlXUwmvFhGNaKjLc8JkSXA9jqqnUQsvPSuJClTynSB1lts64MdOT%2FETmNAU%2Fbv1MAiV21A%2FCG0JpB9Bbcnya5hFucdQ2oVO1I21F8EEv4hGREIOIbQk%2FMC6w2TdFBnMc6uS4MbH9ACzdw8iSPcpZw8vraUoZX%2FaG0N8IYMnYfnvfvQsEGA9UIzWHnDX1CDYgENGleMwyvv0wQY6pgEWMEc2nZseUbTDJ5i5eJTSgdd4WHoiSuep5bgjzsdqBvDQpGiCv4syECUsweyGzkqydtuwjx0ai0LSQvgZWZWclU4SYKCcWmsZjn30wo4sStclsmkeDagJ1fJ83oWvsyjtUD0zLJM9tJzcbePn5XFV8IU%2BLY7Pk9K5lZRjzONgYgmYk1iRHDRTHXSnxYIYeaZF%2Bl2kK8HErNY3%2FRTUO7M0RX84cj%2B1&X-Amz-Signature=90731ccf0fc54e98739e68c86257097551ecc0f36eb5a484e74e1144a8dc815d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP7MDOZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBY5I0nAFJMEMYUfE7qzFJikg0V55UItlFl5zE35nbIeAiAEyGJ5eRawYcd9KhajOZro1XO6bFhru03P9s71EESZHyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzUdqg7yK1MBph8mKtwDk26kUp5mIMeGn0bzFPW2dVxShknpMewK1Mkgbsq%2BrIqBBacEO0LCvtG%2BS0cm0h0iW0oVa0pN%2BGR2No%2BHyuDBZFXfrh75MZb3SocbNAithnUbWqkpNRq7hgjucCHa6nfewwmyjg8VSricOQXFfDXdb6Rc4SVJeqZ0aBtK7H7dlZ97byDp62TZ7UXmX4VVHiwFWaTG9Vcs7BydEJg5R7MZ2ujwr%2FMmceU553LsjUIjT1%2BeaJqnvVhfEb6TQBHi5UsEkzT8N7y7kamQC5eicSdFGgxL9cdlMzodIIrwfnRCxIzSqfyeAIQyFmvYfQ5qWqq5b1yBrueT16hqHqsr0xuq8MTD5YE9YNPy%2BcaPfjya8Az7Kuq0rIDI4qq8nv89S9fTUPzGxNHJeMybTgfuuGldM8Eno46UZxpK8zpWDJ6rIBmP8a4u50oQTvlXUwmvFhGNaKjLc8JkSXA9jqqnUQsvPSuJClTynSB1lts64MdOT%2FETmNAU%2Fbv1MAiV21A%2FCG0JpB9Bbcnya5hFucdQ2oVO1I21F8EEv4hGREIOIbQk%2FMC6w2TdFBnMc6uS4MbH9ACzdw8iSPcpZw8vraUoZX%2FaG0N8IYMnYfnvfvQsEGA9UIzWHnDX1CDYgENGleMwyvv0wQY6pgEWMEc2nZseUbTDJ5i5eJTSgdd4WHoiSuep5bgjzsdqBvDQpGiCv4syECUsweyGzkqydtuwjx0ai0LSQvgZWZWclU4SYKCcWmsZjn30wo4sStclsmkeDagJ1fJ83oWvsyjtUD0zLJM9tJzcbePn5XFV8IU%2BLY7Pk9K5lZRjzONgYgmYk1iRHDRTHXSnxYIYeaZF%2Bl2kK8HErNY3%2FRTUO7M0RX84cj%2B1&X-Amz-Signature=2d9289c7614aefb40f5b769c8e35dd584785ff3f8ea9cf848d6eaa1edf23e0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP7MDOZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBY5I0nAFJMEMYUfE7qzFJikg0V55UItlFl5zE35nbIeAiAEyGJ5eRawYcd9KhajOZro1XO6bFhru03P9s71EESZHyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzUdqg7yK1MBph8mKtwDk26kUp5mIMeGn0bzFPW2dVxShknpMewK1Mkgbsq%2BrIqBBacEO0LCvtG%2BS0cm0h0iW0oVa0pN%2BGR2No%2BHyuDBZFXfrh75MZb3SocbNAithnUbWqkpNRq7hgjucCHa6nfewwmyjg8VSricOQXFfDXdb6Rc4SVJeqZ0aBtK7H7dlZ97byDp62TZ7UXmX4VVHiwFWaTG9Vcs7BydEJg5R7MZ2ujwr%2FMmceU553LsjUIjT1%2BeaJqnvVhfEb6TQBHi5UsEkzT8N7y7kamQC5eicSdFGgxL9cdlMzodIIrwfnRCxIzSqfyeAIQyFmvYfQ5qWqq5b1yBrueT16hqHqsr0xuq8MTD5YE9YNPy%2BcaPfjya8Az7Kuq0rIDI4qq8nv89S9fTUPzGxNHJeMybTgfuuGldM8Eno46UZxpK8zpWDJ6rIBmP8a4u50oQTvlXUwmvFhGNaKjLc8JkSXA9jqqnUQsvPSuJClTynSB1lts64MdOT%2FETmNAU%2Fbv1MAiV21A%2FCG0JpB9Bbcnya5hFucdQ2oVO1I21F8EEv4hGREIOIbQk%2FMC6w2TdFBnMc6uS4MbH9ACzdw8iSPcpZw8vraUoZX%2FaG0N8IYMnYfnvfvQsEGA9UIzWHnDX1CDYgENGleMwyvv0wQY6pgEWMEc2nZseUbTDJ5i5eJTSgdd4WHoiSuep5bgjzsdqBvDQpGiCv4syECUsweyGzkqydtuwjx0ai0LSQvgZWZWclU4SYKCcWmsZjn30wo4sStclsmkeDagJ1fJ83oWvsyjtUD0zLJM9tJzcbePn5XFV8IU%2BLY7Pk9K5lZRjzONgYgmYk1iRHDRTHXSnxYIYeaZF%2Bl2kK8HErNY3%2FRTUO7M0RX84cj%2B1&X-Amz-Signature=937b64d9da5a6bd62d1636b8de650774d838c336050f08c82db934360983d881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP7MDOZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBY5I0nAFJMEMYUfE7qzFJikg0V55UItlFl5zE35nbIeAiAEyGJ5eRawYcd9KhajOZro1XO6bFhru03P9s71EESZHyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzUdqg7yK1MBph8mKtwDk26kUp5mIMeGn0bzFPW2dVxShknpMewK1Mkgbsq%2BrIqBBacEO0LCvtG%2BS0cm0h0iW0oVa0pN%2BGR2No%2BHyuDBZFXfrh75MZb3SocbNAithnUbWqkpNRq7hgjucCHa6nfewwmyjg8VSricOQXFfDXdb6Rc4SVJeqZ0aBtK7H7dlZ97byDp62TZ7UXmX4VVHiwFWaTG9Vcs7BydEJg5R7MZ2ujwr%2FMmceU553LsjUIjT1%2BeaJqnvVhfEb6TQBHi5UsEkzT8N7y7kamQC5eicSdFGgxL9cdlMzodIIrwfnRCxIzSqfyeAIQyFmvYfQ5qWqq5b1yBrueT16hqHqsr0xuq8MTD5YE9YNPy%2BcaPfjya8Az7Kuq0rIDI4qq8nv89S9fTUPzGxNHJeMybTgfuuGldM8Eno46UZxpK8zpWDJ6rIBmP8a4u50oQTvlXUwmvFhGNaKjLc8JkSXA9jqqnUQsvPSuJClTynSB1lts64MdOT%2FETmNAU%2Fbv1MAiV21A%2FCG0JpB9Bbcnya5hFucdQ2oVO1I21F8EEv4hGREIOIbQk%2FMC6w2TdFBnMc6uS4MbH9ACzdw8iSPcpZw8vraUoZX%2FaG0N8IYMnYfnvfvQsEGA9UIzWHnDX1CDYgENGleMwyvv0wQY6pgEWMEc2nZseUbTDJ5i5eJTSgdd4WHoiSuep5bgjzsdqBvDQpGiCv4syECUsweyGzkqydtuwjx0ai0LSQvgZWZWclU4SYKCcWmsZjn30wo4sStclsmkeDagJ1fJ83oWvsyjtUD0zLJM9tJzcbePn5XFV8IU%2BLY7Pk9K5lZRjzONgYgmYk1iRHDRTHXSnxYIYeaZF%2Bl2kK8HErNY3%2FRTUO7M0RX84cj%2B1&X-Amz-Signature=6a88780e7a885bace0d6656b0db09d9079a0fbf88654f06e0c4753da677126ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UP7MDOZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBY5I0nAFJMEMYUfE7qzFJikg0V55UItlFl5zE35nbIeAiAEyGJ5eRawYcd9KhajOZro1XO6bFhru03P9s71EESZHyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzUdqg7yK1MBph8mKtwDk26kUp5mIMeGn0bzFPW2dVxShknpMewK1Mkgbsq%2BrIqBBacEO0LCvtG%2BS0cm0h0iW0oVa0pN%2BGR2No%2BHyuDBZFXfrh75MZb3SocbNAithnUbWqkpNRq7hgjucCHa6nfewwmyjg8VSricOQXFfDXdb6Rc4SVJeqZ0aBtK7H7dlZ97byDp62TZ7UXmX4VVHiwFWaTG9Vcs7BydEJg5R7MZ2ujwr%2FMmceU553LsjUIjT1%2BeaJqnvVhfEb6TQBHi5UsEkzT8N7y7kamQC5eicSdFGgxL9cdlMzodIIrwfnRCxIzSqfyeAIQyFmvYfQ5qWqq5b1yBrueT16hqHqsr0xuq8MTD5YE9YNPy%2BcaPfjya8Az7Kuq0rIDI4qq8nv89S9fTUPzGxNHJeMybTgfuuGldM8Eno46UZxpK8zpWDJ6rIBmP8a4u50oQTvlXUwmvFhGNaKjLc8JkSXA9jqqnUQsvPSuJClTynSB1lts64MdOT%2FETmNAU%2Fbv1MAiV21A%2FCG0JpB9Bbcnya5hFucdQ2oVO1I21F8EEv4hGREIOIbQk%2FMC6w2TdFBnMc6uS4MbH9ACzdw8iSPcpZw8vraUoZX%2FaG0N8IYMnYfnvfvQsEGA9UIzWHnDX1CDYgENGleMwyvv0wQY6pgEWMEc2nZseUbTDJ5i5eJTSgdd4WHoiSuep5bgjzsdqBvDQpGiCv4syECUsweyGzkqydtuwjx0ai0LSQvgZWZWclU4SYKCcWmsZjn30wo4sStclsmkeDagJ1fJ83oWvsyjtUD0zLJM9tJzcbePn5XFV8IU%2BLY7Pk9K5lZRjzONgYgmYk1iRHDRTHXSnxYIYeaZF%2Bl2kK8HErNY3%2FRTUO7M0RX84cj%2B1&X-Amz-Signature=653450c314f20bad9a7438241fcf4ed94be30e8d7611185608df15a86600d0aa&X-Amz-SignedHeaders=host&x-id=GetObject)
