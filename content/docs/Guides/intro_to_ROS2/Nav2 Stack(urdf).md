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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQT64VU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCI07f5o6ogFuXgKWLr2jW9nLpxwuSKGAXtiPeAmFPQqwIhAPQ%2FMSriUklaTnF29eemGJqfR7yak4ctj5XxIiHBFPtCKv8DCFUQABoMNjM3NDIzMTgzODA1IgzXaG%2FDr1TSm6jLZM0q3APnlIcsS%2BiwQJXsQ7Zg5bdgC%2FDNBoXVkTpmA6l%2BtTv%2FKzGHx8YmaJamhU3%2FF6iBFIBN8spvjTAlBvIRwAdJ8PTuQpz2ZMV4E%2BM46IHIXgQ107stFOSxNLKM2e13shBzbcKkW57HBf4Q2FO5npr2DODJooRj1pGAYunBb37V%2F5T6ldzvBfdzBpJQfUR5JXYzuFAhbl6OsA3RQKd1aU3jA8vqy6qqi4t7JW%2FbXkdgeJTyx0htCVN2WK8MqbQCQIr12flROoC5nV%2BfC%2B0nrJOr9Y9OwTKtfk7DGZh%2F6oxESZs5LbOT3q1hbqQRR3%2B79pGMmftR9cblYH%2BPMdzJ0AhSqZC2XoRv2Am5Af41mgsBTz%2FoIyuwYwYJJDXNA3Xu5Mv1QRNxpOJLRMzyMb5ytzm%2BRj2XqF%2BfhvjpN4myEqX6tJHyHoy8KcUjRWrgPSQ9aoH7lBDCMGFbzNo29DZwewBlfDQfUFkeeFoa8ptniQ%2BzSO4%2FjHrBHHhegyPFhpa99ggJsAZKtKRjtkD3ALK1kaxiABQzW%2F7%2BEktVLncHmETBf%2BsvzQ%2BFFFq5z6I6ENNczgGQfr4Bqq9UfigouuHg%2Be9jQdQTiz3gaMaNsJxnWVLgXYCFNcCCSvwdSqIomB1SUjCf%2B66%2BBjqkAQaDeoa2PpGD2%2FH7%2B3p3GZchHtjNbbZI0yEArFouip7vJOGu0rVR%2FtSBMBhggeAHgxZekxU2CB0U0%2BdSovvgH91gKh1AzQpCmm2KnRoIUNZzQOE8QnR0d71WU1TMB2rcfq3%2Fyx41J4%2B9S9u5qiK%2Bi%2BZQe%2FiDX63QGISEobekgs7xnGf8cth34jIYpdF4d2ay71Lt4sylDtvABrzZIZkEPI5cuxsY&X-Amz-Signature=8c7a1964e27054733d3bcbe838e8773b658c1f7a23eb0cfa5d7380a8b1b006c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQT64VU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCI07f5o6ogFuXgKWLr2jW9nLpxwuSKGAXtiPeAmFPQqwIhAPQ%2FMSriUklaTnF29eemGJqfR7yak4ctj5XxIiHBFPtCKv8DCFUQABoMNjM3NDIzMTgzODA1IgzXaG%2FDr1TSm6jLZM0q3APnlIcsS%2BiwQJXsQ7Zg5bdgC%2FDNBoXVkTpmA6l%2BtTv%2FKzGHx8YmaJamhU3%2FF6iBFIBN8spvjTAlBvIRwAdJ8PTuQpz2ZMV4E%2BM46IHIXgQ107stFOSxNLKM2e13shBzbcKkW57HBf4Q2FO5npr2DODJooRj1pGAYunBb37V%2F5T6ldzvBfdzBpJQfUR5JXYzuFAhbl6OsA3RQKd1aU3jA8vqy6qqi4t7JW%2FbXkdgeJTyx0htCVN2WK8MqbQCQIr12flROoC5nV%2BfC%2B0nrJOr9Y9OwTKtfk7DGZh%2F6oxESZs5LbOT3q1hbqQRR3%2B79pGMmftR9cblYH%2BPMdzJ0AhSqZC2XoRv2Am5Af41mgsBTz%2FoIyuwYwYJJDXNA3Xu5Mv1QRNxpOJLRMzyMb5ytzm%2BRj2XqF%2BfhvjpN4myEqX6tJHyHoy8KcUjRWrgPSQ9aoH7lBDCMGFbzNo29DZwewBlfDQfUFkeeFoa8ptniQ%2BzSO4%2FjHrBHHhegyPFhpa99ggJsAZKtKRjtkD3ALK1kaxiABQzW%2F7%2BEktVLncHmETBf%2BsvzQ%2BFFFq5z6I6ENNczgGQfr4Bqq9UfigouuHg%2Be9jQdQTiz3gaMaNsJxnWVLgXYCFNcCCSvwdSqIomB1SUjCf%2B66%2BBjqkAQaDeoa2PpGD2%2FH7%2B3p3GZchHtjNbbZI0yEArFouip7vJOGu0rVR%2FtSBMBhggeAHgxZekxU2CB0U0%2BdSovvgH91gKh1AzQpCmm2KnRoIUNZzQOE8QnR0d71WU1TMB2rcfq3%2Fyx41J4%2B9S9u5qiK%2Bi%2BZQe%2FiDX63QGISEobekgs7xnGf8cth34jIYpdF4d2ay71Lt4sylDtvABrzZIZkEPI5cuxsY&X-Amz-Signature=d2d646b707487d7f5d409e4f6ba4f4fdd2614fded5e4162af51cdc0a78981642&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQT64VU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCI07f5o6ogFuXgKWLr2jW9nLpxwuSKGAXtiPeAmFPQqwIhAPQ%2FMSriUklaTnF29eemGJqfR7yak4ctj5XxIiHBFPtCKv8DCFUQABoMNjM3NDIzMTgzODA1IgzXaG%2FDr1TSm6jLZM0q3APnlIcsS%2BiwQJXsQ7Zg5bdgC%2FDNBoXVkTpmA6l%2BtTv%2FKzGHx8YmaJamhU3%2FF6iBFIBN8spvjTAlBvIRwAdJ8PTuQpz2ZMV4E%2BM46IHIXgQ107stFOSxNLKM2e13shBzbcKkW57HBf4Q2FO5npr2DODJooRj1pGAYunBb37V%2F5T6ldzvBfdzBpJQfUR5JXYzuFAhbl6OsA3RQKd1aU3jA8vqy6qqi4t7JW%2FbXkdgeJTyx0htCVN2WK8MqbQCQIr12flROoC5nV%2BfC%2B0nrJOr9Y9OwTKtfk7DGZh%2F6oxESZs5LbOT3q1hbqQRR3%2B79pGMmftR9cblYH%2BPMdzJ0AhSqZC2XoRv2Am5Af41mgsBTz%2FoIyuwYwYJJDXNA3Xu5Mv1QRNxpOJLRMzyMb5ytzm%2BRj2XqF%2BfhvjpN4myEqX6tJHyHoy8KcUjRWrgPSQ9aoH7lBDCMGFbzNo29DZwewBlfDQfUFkeeFoa8ptniQ%2BzSO4%2FjHrBHHhegyPFhpa99ggJsAZKtKRjtkD3ALK1kaxiABQzW%2F7%2BEktVLncHmETBf%2BsvzQ%2BFFFq5z6I6ENNczgGQfr4Bqq9UfigouuHg%2Be9jQdQTiz3gaMaNsJxnWVLgXYCFNcCCSvwdSqIomB1SUjCf%2B66%2BBjqkAQaDeoa2PpGD2%2FH7%2B3p3GZchHtjNbbZI0yEArFouip7vJOGu0rVR%2FtSBMBhggeAHgxZekxU2CB0U0%2BdSovvgH91gKh1AzQpCmm2KnRoIUNZzQOE8QnR0d71WU1TMB2rcfq3%2Fyx41J4%2B9S9u5qiK%2Bi%2BZQe%2FiDX63QGISEobekgs7xnGf8cth34jIYpdF4d2ay71Lt4sylDtvABrzZIZkEPI5cuxsY&X-Amz-Signature=344b2b39769e5284728b3be07aa49cced553f824ac6e10d8e143b8d11bcd6f40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQT64VU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCI07f5o6ogFuXgKWLr2jW9nLpxwuSKGAXtiPeAmFPQqwIhAPQ%2FMSriUklaTnF29eemGJqfR7yak4ctj5XxIiHBFPtCKv8DCFUQABoMNjM3NDIzMTgzODA1IgzXaG%2FDr1TSm6jLZM0q3APnlIcsS%2BiwQJXsQ7Zg5bdgC%2FDNBoXVkTpmA6l%2BtTv%2FKzGHx8YmaJamhU3%2FF6iBFIBN8spvjTAlBvIRwAdJ8PTuQpz2ZMV4E%2BM46IHIXgQ107stFOSxNLKM2e13shBzbcKkW57HBf4Q2FO5npr2DODJooRj1pGAYunBb37V%2F5T6ldzvBfdzBpJQfUR5JXYzuFAhbl6OsA3RQKd1aU3jA8vqy6qqi4t7JW%2FbXkdgeJTyx0htCVN2WK8MqbQCQIr12flROoC5nV%2BfC%2B0nrJOr9Y9OwTKtfk7DGZh%2F6oxESZs5LbOT3q1hbqQRR3%2B79pGMmftR9cblYH%2BPMdzJ0AhSqZC2XoRv2Am5Af41mgsBTz%2FoIyuwYwYJJDXNA3Xu5Mv1QRNxpOJLRMzyMb5ytzm%2BRj2XqF%2BfhvjpN4myEqX6tJHyHoy8KcUjRWrgPSQ9aoH7lBDCMGFbzNo29DZwewBlfDQfUFkeeFoa8ptniQ%2BzSO4%2FjHrBHHhegyPFhpa99ggJsAZKtKRjtkD3ALK1kaxiABQzW%2F7%2BEktVLncHmETBf%2BsvzQ%2BFFFq5z6I6ENNczgGQfr4Bqq9UfigouuHg%2Be9jQdQTiz3gaMaNsJxnWVLgXYCFNcCCSvwdSqIomB1SUjCf%2B66%2BBjqkAQaDeoa2PpGD2%2FH7%2B3p3GZchHtjNbbZI0yEArFouip7vJOGu0rVR%2FtSBMBhggeAHgxZekxU2CB0U0%2BdSovvgH91gKh1AzQpCmm2KnRoIUNZzQOE8QnR0d71WU1TMB2rcfq3%2Fyx41J4%2B9S9u5qiK%2Bi%2BZQe%2FiDX63QGISEobekgs7xnGf8cth34jIYpdF4d2ay71Lt4sylDtvABrzZIZkEPI5cuxsY&X-Amz-Signature=bd107a9e80ec93cd6e7c2cf365da799d66aed96993d3b4ee13baa16ae0481bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQT64VU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCI07f5o6ogFuXgKWLr2jW9nLpxwuSKGAXtiPeAmFPQqwIhAPQ%2FMSriUklaTnF29eemGJqfR7yak4ctj5XxIiHBFPtCKv8DCFUQABoMNjM3NDIzMTgzODA1IgzXaG%2FDr1TSm6jLZM0q3APnlIcsS%2BiwQJXsQ7Zg5bdgC%2FDNBoXVkTpmA6l%2BtTv%2FKzGHx8YmaJamhU3%2FF6iBFIBN8spvjTAlBvIRwAdJ8PTuQpz2ZMV4E%2BM46IHIXgQ107stFOSxNLKM2e13shBzbcKkW57HBf4Q2FO5npr2DODJooRj1pGAYunBb37V%2F5T6ldzvBfdzBpJQfUR5JXYzuFAhbl6OsA3RQKd1aU3jA8vqy6qqi4t7JW%2FbXkdgeJTyx0htCVN2WK8MqbQCQIr12flROoC5nV%2BfC%2B0nrJOr9Y9OwTKtfk7DGZh%2F6oxESZs5LbOT3q1hbqQRR3%2B79pGMmftR9cblYH%2BPMdzJ0AhSqZC2XoRv2Am5Af41mgsBTz%2FoIyuwYwYJJDXNA3Xu5Mv1QRNxpOJLRMzyMb5ytzm%2BRj2XqF%2BfhvjpN4myEqX6tJHyHoy8KcUjRWrgPSQ9aoH7lBDCMGFbzNo29DZwewBlfDQfUFkeeFoa8ptniQ%2BzSO4%2FjHrBHHhegyPFhpa99ggJsAZKtKRjtkD3ALK1kaxiABQzW%2F7%2BEktVLncHmETBf%2BsvzQ%2BFFFq5z6I6ENNczgGQfr4Bqq9UfigouuHg%2Be9jQdQTiz3gaMaNsJxnWVLgXYCFNcCCSvwdSqIomB1SUjCf%2B66%2BBjqkAQaDeoa2PpGD2%2FH7%2B3p3GZchHtjNbbZI0yEArFouip7vJOGu0rVR%2FtSBMBhggeAHgxZekxU2CB0U0%2BdSovvgH91gKh1AzQpCmm2KnRoIUNZzQOE8QnR0d71WU1TMB2rcfq3%2Fyx41J4%2B9S9u5qiK%2Bi%2BZQe%2FiDX63QGISEobekgs7xnGf8cth34jIYpdF4d2ay71Lt4sylDtvABrzZIZkEPI5cuxsY&X-Amz-Signature=3b8c27b5b49bb50a725d90aee4a8ab74cc13b87caa4e9a2176ccf064c4112337&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQT64VU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCI07f5o6ogFuXgKWLr2jW9nLpxwuSKGAXtiPeAmFPQqwIhAPQ%2FMSriUklaTnF29eemGJqfR7yak4ctj5XxIiHBFPtCKv8DCFUQABoMNjM3NDIzMTgzODA1IgzXaG%2FDr1TSm6jLZM0q3APnlIcsS%2BiwQJXsQ7Zg5bdgC%2FDNBoXVkTpmA6l%2BtTv%2FKzGHx8YmaJamhU3%2FF6iBFIBN8spvjTAlBvIRwAdJ8PTuQpz2ZMV4E%2BM46IHIXgQ107stFOSxNLKM2e13shBzbcKkW57HBf4Q2FO5npr2DODJooRj1pGAYunBb37V%2F5T6ldzvBfdzBpJQfUR5JXYzuFAhbl6OsA3RQKd1aU3jA8vqy6qqi4t7JW%2FbXkdgeJTyx0htCVN2WK8MqbQCQIr12flROoC5nV%2BfC%2B0nrJOr9Y9OwTKtfk7DGZh%2F6oxESZs5LbOT3q1hbqQRR3%2B79pGMmftR9cblYH%2BPMdzJ0AhSqZC2XoRv2Am5Af41mgsBTz%2FoIyuwYwYJJDXNA3Xu5Mv1QRNxpOJLRMzyMb5ytzm%2BRj2XqF%2BfhvjpN4myEqX6tJHyHoy8KcUjRWrgPSQ9aoH7lBDCMGFbzNo29DZwewBlfDQfUFkeeFoa8ptniQ%2BzSO4%2FjHrBHHhegyPFhpa99ggJsAZKtKRjtkD3ALK1kaxiABQzW%2F7%2BEktVLncHmETBf%2BsvzQ%2BFFFq5z6I6ENNczgGQfr4Bqq9UfigouuHg%2Be9jQdQTiz3gaMaNsJxnWVLgXYCFNcCCSvwdSqIomB1SUjCf%2B66%2BBjqkAQaDeoa2PpGD2%2FH7%2B3p3GZchHtjNbbZI0yEArFouip7vJOGu0rVR%2FtSBMBhggeAHgxZekxU2CB0U0%2BdSovvgH91gKh1AzQpCmm2KnRoIUNZzQOE8QnR0d71WU1TMB2rcfq3%2Fyx41J4%2B9S9u5qiK%2Bi%2BZQe%2FiDX63QGISEobekgs7xnGf8cth34jIYpdF4d2ay71Lt4sylDtvABrzZIZkEPI5cuxsY&X-Amz-Signature=e94f76b9a40624edb39cc301c9466a9ee72811459bbee02e5821b0e0695e6894&X-Amz-SignedHeaders=host&x-id=GetObject)
