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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAO7FQV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvNXi0cV8GrZZw%2FAkJsXgD74gccH5JT1xkWDQU1EnTAiAbeUIgfUexynn473DC7boKEisxqqFHok04X9M%2BniYDESqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRoiXOT8hL6IkjWdKtwDgpXW61dVWNq%2F7slrJmWf8rgdFOYV9xDKRNUHuByVyLW2pxvqOZShPAa%2FcAisvWRWViaDZTIAwzLCzklXFjHnep0LLADYV9Jha1n%2Fyt%2FjxskYlGE4hpy4t4iPq25kdE7RjDpocAQjpj0wVZjZr0GZLEGjQIJ6Dei0Z%2BTc1N%2BPzVso5h8eKl1qwCVxobN86QTFOc4HtbZ2XupS42EWl7hpGHoVL0JiilQOtMp2JLWTpKdsFrYa9RReMwVeRUiMiacidez3hzQW9zKruYbHYx1uWG9IDinwPqO3ZOofAqtMdL28i19I48uCLKyl2K3xLpda04QZJfqqUXLhC%2BNyWRNUwUGYLnvseUZ0qE6BZFmCM1mm1bk1ItGPE6Yw5vP970Rs48DE3EQerUp6SG7ZwBc3qnOVOyPdRtLqlgLCcXyw00FJcPCfLFqQwWY7BXBJY%2Fh02fm5%2BLeMbjMLD1dOxn6kL9XWZis71Pmf5IKI80%2BUb71PasSeJFfoO6XomEHjoZi%2F%2FBFDLV8byqAcMln0%2BjqBs9rVVEWmqvukm4Ge%2BFNHxnD0PPIVXJzJPqjM3aMQC1S2cuyY1wsVDZcCDX1xVbiQb%2FeIiPlASrIgOyknCx055d8QXfRgR1NbsUWHdrgwrNmmvQY6pgE6MWK%2BPH3D%2FrkMypFcayeFodP9Em6wJIcycIHE9TEhvqIhmFY2HgYMNbinNwqz8sXaLkI%2BYpx7O5gVJERiWGfx3cZwHz8A5W4bFBdun0dXusZNXfZ9f46etLjV6Y8%2F4cvOTd7lhuF3ZmHI1uT7WDU46BCHV0kj%2FH0Vhr%2FWryYzqzqfZPP5cHVvKtnnoJeaB5rcvGRQbgEjzPe%2B5IcBZJysVYUCf%2Fdk&X-Amz-Signature=3f853c5af032770cee1dc0678d912b8eba112998c35067d00dcc42b1a4847c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAO7FQV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvNXi0cV8GrZZw%2FAkJsXgD74gccH5JT1xkWDQU1EnTAiAbeUIgfUexynn473DC7boKEisxqqFHok04X9M%2BniYDESqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRoiXOT8hL6IkjWdKtwDgpXW61dVWNq%2F7slrJmWf8rgdFOYV9xDKRNUHuByVyLW2pxvqOZShPAa%2FcAisvWRWViaDZTIAwzLCzklXFjHnep0LLADYV9Jha1n%2Fyt%2FjxskYlGE4hpy4t4iPq25kdE7RjDpocAQjpj0wVZjZr0GZLEGjQIJ6Dei0Z%2BTc1N%2BPzVso5h8eKl1qwCVxobN86QTFOc4HtbZ2XupS42EWl7hpGHoVL0JiilQOtMp2JLWTpKdsFrYa9RReMwVeRUiMiacidez3hzQW9zKruYbHYx1uWG9IDinwPqO3ZOofAqtMdL28i19I48uCLKyl2K3xLpda04QZJfqqUXLhC%2BNyWRNUwUGYLnvseUZ0qE6BZFmCM1mm1bk1ItGPE6Yw5vP970Rs48DE3EQerUp6SG7ZwBc3qnOVOyPdRtLqlgLCcXyw00FJcPCfLFqQwWY7BXBJY%2Fh02fm5%2BLeMbjMLD1dOxn6kL9XWZis71Pmf5IKI80%2BUb71PasSeJFfoO6XomEHjoZi%2F%2FBFDLV8byqAcMln0%2BjqBs9rVVEWmqvukm4Ge%2BFNHxnD0PPIVXJzJPqjM3aMQC1S2cuyY1wsVDZcCDX1xVbiQb%2FeIiPlASrIgOyknCx055d8QXfRgR1NbsUWHdrgwrNmmvQY6pgE6MWK%2BPH3D%2FrkMypFcayeFodP9Em6wJIcycIHE9TEhvqIhmFY2HgYMNbinNwqz8sXaLkI%2BYpx7O5gVJERiWGfx3cZwHz8A5W4bFBdun0dXusZNXfZ9f46etLjV6Y8%2F4cvOTd7lhuF3ZmHI1uT7WDU46BCHV0kj%2FH0Vhr%2FWryYzqzqfZPP5cHVvKtnnoJeaB5rcvGRQbgEjzPe%2B5IcBZJysVYUCf%2Fdk&X-Amz-Signature=77525d463b3cc511ca3eb38e2930c8e9fe9c92b66fe020e1f87ac9c359037445&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAO7FQV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvNXi0cV8GrZZw%2FAkJsXgD74gccH5JT1xkWDQU1EnTAiAbeUIgfUexynn473DC7boKEisxqqFHok04X9M%2BniYDESqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRoiXOT8hL6IkjWdKtwDgpXW61dVWNq%2F7slrJmWf8rgdFOYV9xDKRNUHuByVyLW2pxvqOZShPAa%2FcAisvWRWViaDZTIAwzLCzklXFjHnep0LLADYV9Jha1n%2Fyt%2FjxskYlGE4hpy4t4iPq25kdE7RjDpocAQjpj0wVZjZr0GZLEGjQIJ6Dei0Z%2BTc1N%2BPzVso5h8eKl1qwCVxobN86QTFOc4HtbZ2XupS42EWl7hpGHoVL0JiilQOtMp2JLWTpKdsFrYa9RReMwVeRUiMiacidez3hzQW9zKruYbHYx1uWG9IDinwPqO3ZOofAqtMdL28i19I48uCLKyl2K3xLpda04QZJfqqUXLhC%2BNyWRNUwUGYLnvseUZ0qE6BZFmCM1mm1bk1ItGPE6Yw5vP970Rs48DE3EQerUp6SG7ZwBc3qnOVOyPdRtLqlgLCcXyw00FJcPCfLFqQwWY7BXBJY%2Fh02fm5%2BLeMbjMLD1dOxn6kL9XWZis71Pmf5IKI80%2BUb71PasSeJFfoO6XomEHjoZi%2F%2FBFDLV8byqAcMln0%2BjqBs9rVVEWmqvukm4Ge%2BFNHxnD0PPIVXJzJPqjM3aMQC1S2cuyY1wsVDZcCDX1xVbiQb%2FeIiPlASrIgOyknCx055d8QXfRgR1NbsUWHdrgwrNmmvQY6pgE6MWK%2BPH3D%2FrkMypFcayeFodP9Em6wJIcycIHE9TEhvqIhmFY2HgYMNbinNwqz8sXaLkI%2BYpx7O5gVJERiWGfx3cZwHz8A5W4bFBdun0dXusZNXfZ9f46etLjV6Y8%2F4cvOTd7lhuF3ZmHI1uT7WDU46BCHV0kj%2FH0Vhr%2FWryYzqzqfZPP5cHVvKtnnoJeaB5rcvGRQbgEjzPe%2B5IcBZJysVYUCf%2Fdk&X-Amz-Signature=9adf0b365f90a74fe1834da8706b40033c8f8a0b03a079dc752cd5bcfcdcb729&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAO7FQV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvNXi0cV8GrZZw%2FAkJsXgD74gccH5JT1xkWDQU1EnTAiAbeUIgfUexynn473DC7boKEisxqqFHok04X9M%2BniYDESqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRoiXOT8hL6IkjWdKtwDgpXW61dVWNq%2F7slrJmWf8rgdFOYV9xDKRNUHuByVyLW2pxvqOZShPAa%2FcAisvWRWViaDZTIAwzLCzklXFjHnep0LLADYV9Jha1n%2Fyt%2FjxskYlGE4hpy4t4iPq25kdE7RjDpocAQjpj0wVZjZr0GZLEGjQIJ6Dei0Z%2BTc1N%2BPzVso5h8eKl1qwCVxobN86QTFOc4HtbZ2XupS42EWl7hpGHoVL0JiilQOtMp2JLWTpKdsFrYa9RReMwVeRUiMiacidez3hzQW9zKruYbHYx1uWG9IDinwPqO3ZOofAqtMdL28i19I48uCLKyl2K3xLpda04QZJfqqUXLhC%2BNyWRNUwUGYLnvseUZ0qE6BZFmCM1mm1bk1ItGPE6Yw5vP970Rs48DE3EQerUp6SG7ZwBc3qnOVOyPdRtLqlgLCcXyw00FJcPCfLFqQwWY7BXBJY%2Fh02fm5%2BLeMbjMLD1dOxn6kL9XWZis71Pmf5IKI80%2BUb71PasSeJFfoO6XomEHjoZi%2F%2FBFDLV8byqAcMln0%2BjqBs9rVVEWmqvukm4Ge%2BFNHxnD0PPIVXJzJPqjM3aMQC1S2cuyY1wsVDZcCDX1xVbiQb%2FeIiPlASrIgOyknCx055d8QXfRgR1NbsUWHdrgwrNmmvQY6pgE6MWK%2BPH3D%2FrkMypFcayeFodP9Em6wJIcycIHE9TEhvqIhmFY2HgYMNbinNwqz8sXaLkI%2BYpx7O5gVJERiWGfx3cZwHz8A5W4bFBdun0dXusZNXfZ9f46etLjV6Y8%2F4cvOTd7lhuF3ZmHI1uT7WDU46BCHV0kj%2FH0Vhr%2FWryYzqzqfZPP5cHVvKtnnoJeaB5rcvGRQbgEjzPe%2B5IcBZJysVYUCf%2Fdk&X-Amz-Signature=222715f6310761fb23357384f2cc20b73bee4390d59b0141d1f2742eb2f8bd12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAO7FQV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvNXi0cV8GrZZw%2FAkJsXgD74gccH5JT1xkWDQU1EnTAiAbeUIgfUexynn473DC7boKEisxqqFHok04X9M%2BniYDESqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRoiXOT8hL6IkjWdKtwDgpXW61dVWNq%2F7slrJmWf8rgdFOYV9xDKRNUHuByVyLW2pxvqOZShPAa%2FcAisvWRWViaDZTIAwzLCzklXFjHnep0LLADYV9Jha1n%2Fyt%2FjxskYlGE4hpy4t4iPq25kdE7RjDpocAQjpj0wVZjZr0GZLEGjQIJ6Dei0Z%2BTc1N%2BPzVso5h8eKl1qwCVxobN86QTFOc4HtbZ2XupS42EWl7hpGHoVL0JiilQOtMp2JLWTpKdsFrYa9RReMwVeRUiMiacidez3hzQW9zKruYbHYx1uWG9IDinwPqO3ZOofAqtMdL28i19I48uCLKyl2K3xLpda04QZJfqqUXLhC%2BNyWRNUwUGYLnvseUZ0qE6BZFmCM1mm1bk1ItGPE6Yw5vP970Rs48DE3EQerUp6SG7ZwBc3qnOVOyPdRtLqlgLCcXyw00FJcPCfLFqQwWY7BXBJY%2Fh02fm5%2BLeMbjMLD1dOxn6kL9XWZis71Pmf5IKI80%2BUb71PasSeJFfoO6XomEHjoZi%2F%2FBFDLV8byqAcMln0%2BjqBs9rVVEWmqvukm4Ge%2BFNHxnD0PPIVXJzJPqjM3aMQC1S2cuyY1wsVDZcCDX1xVbiQb%2FeIiPlASrIgOyknCx055d8QXfRgR1NbsUWHdrgwrNmmvQY6pgE6MWK%2BPH3D%2FrkMypFcayeFodP9Em6wJIcycIHE9TEhvqIhmFY2HgYMNbinNwqz8sXaLkI%2BYpx7O5gVJERiWGfx3cZwHz8A5W4bFBdun0dXusZNXfZ9f46etLjV6Y8%2F4cvOTd7lhuF3ZmHI1uT7WDU46BCHV0kj%2FH0Vhr%2FWryYzqzqfZPP5cHVvKtnnoJeaB5rcvGRQbgEjzPe%2B5IcBZJysVYUCf%2Fdk&X-Amz-Signature=c5944cf0a2a2ac5e821dc15eef3edc54438320a0a46a23ab21e0b2c6a1ed98a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAO7FQV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbvNXi0cV8GrZZw%2FAkJsXgD74gccH5JT1xkWDQU1EnTAiAbeUIgfUexynn473DC7boKEisxqqFHok04X9M%2BniYDESqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRoiXOT8hL6IkjWdKtwDgpXW61dVWNq%2F7slrJmWf8rgdFOYV9xDKRNUHuByVyLW2pxvqOZShPAa%2FcAisvWRWViaDZTIAwzLCzklXFjHnep0LLADYV9Jha1n%2Fyt%2FjxskYlGE4hpy4t4iPq25kdE7RjDpocAQjpj0wVZjZr0GZLEGjQIJ6Dei0Z%2BTc1N%2BPzVso5h8eKl1qwCVxobN86QTFOc4HtbZ2XupS42EWl7hpGHoVL0JiilQOtMp2JLWTpKdsFrYa9RReMwVeRUiMiacidez3hzQW9zKruYbHYx1uWG9IDinwPqO3ZOofAqtMdL28i19I48uCLKyl2K3xLpda04QZJfqqUXLhC%2BNyWRNUwUGYLnvseUZ0qE6BZFmCM1mm1bk1ItGPE6Yw5vP970Rs48DE3EQerUp6SG7ZwBc3qnOVOyPdRtLqlgLCcXyw00FJcPCfLFqQwWY7BXBJY%2Fh02fm5%2BLeMbjMLD1dOxn6kL9XWZis71Pmf5IKI80%2BUb71PasSeJFfoO6XomEHjoZi%2F%2FBFDLV8byqAcMln0%2BjqBs9rVVEWmqvukm4Ge%2BFNHxnD0PPIVXJzJPqjM3aMQC1S2cuyY1wsVDZcCDX1xVbiQb%2FeIiPlASrIgOyknCx055d8QXfRgR1NbsUWHdrgwrNmmvQY6pgE6MWK%2BPH3D%2FrkMypFcayeFodP9Em6wJIcycIHE9TEhvqIhmFY2HgYMNbinNwqz8sXaLkI%2BYpx7O5gVJERiWGfx3cZwHz8A5W4bFBdun0dXusZNXfZ9f46etLjV6Y8%2F4cvOTd7lhuF3ZmHI1uT7WDU46BCHV0kj%2FH0Vhr%2FWryYzqzqfZPP5cHVvKtnnoJeaB5rcvGRQbgEjzPe%2B5IcBZJysVYUCf%2Fdk&X-Amz-Signature=1f3560ccb0b2c36e1d7327840e0dca1c5237e8951fec7c32df45d246b635074f&X-Amz-SignedHeaders=host&x-id=GetObject)
