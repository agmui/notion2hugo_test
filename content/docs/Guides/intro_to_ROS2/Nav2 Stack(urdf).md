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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPX2J4XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAO48R7%2Bl90J44k3ERpFlJiD8wxJbwZ7oiED5zc%2BUiLaAiBvEsbZjBsgNG7T%2BGmUn5UmyGfE%2BQbz00CQ7mGDo4f6HiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpbtw%2BAb4y5YfYobPKtwDGw2YMzHE5PsHPhFyyZtkUPPoL6jyT8mGjGgABu70NIWP%2BfhcHnOh6uhje62oV52ZXkta51UqwsnC%2F0%2Bh8NJbrLgRGd6PeMoK8p8%2BERXVkyzeGUEMOhP6Cy%2FkbMXjJTbxBo3RTzGdZZCuv%2BR7YA87wFJQH9v0Vi%2Bbmmx6w%2FwpqjSVcWxeMjr3qc9fxYc88lMAe3sT2oLJSAU1bXLcXE7BGpOrXiO%2Bv8HT0IlRAGOZy8p24gSm0Y70BIm5jdjGUu4bbRbH71oYVbfKqD5KZK05v5y4tepqP9RzH8C%2F3FBs7orIREgrQHB2P9WgC%2BzSiVxo5JRDsVZlYzPo%2BrFXySWI%2BHcFYTX2ZAFeewYmuYEetpnLY6tZyEzUUHdPGHd0OHNbHxCgvzOxzxSmCrKuzJpv8kk7YFqYB0xZulTyso0vbPeMpz5Qom9elLD3iv%2BU%2FFGsOj9620Lx9W%2BXekNL%2F%2B3DqmGPQz6usw%2FaiePbtVRIpqnLjQuJuON0WlFQYykU7URvrfSEawxOfTLiNcqiuI4%2FgpktHTWZ%2Bh859ZJQg0h81KmS6LsyNHUsVVOucnAS%2FMjm75KJhz2yGZwMAQtXgGsBFuGxHIGT4bbvWoNX5vY8otbPhsdA6bqxYi7b%2Fp8wrsuxwwY6pgFZr6hJ7DYpcD27svchn2UGVOD%2FWi1JJtrTwgHwOguce7aBn8EdpKT86s8PBZPpq4g5ia9az%2Bdwo%2FBGyeRuMAJwWv9bStujimdFI%2FP7tO0WJiyI43d5UN7KHyrYn1CaEQZMf3oE4EYzLXYRN5DxqhpknYQOG%2FMQ4ESNSD2385ZoQG5ztJttx8JIePbD0scQz%2FWJmABHewtfnWwaa83SoBoG%2FSjuWyxe&X-Amz-Signature=eb5844b92e23e44a2857c96f701e1eec8e75757e9efa4f5006011c2b68c43d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPX2J4XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAO48R7%2Bl90J44k3ERpFlJiD8wxJbwZ7oiED5zc%2BUiLaAiBvEsbZjBsgNG7T%2BGmUn5UmyGfE%2BQbz00CQ7mGDo4f6HiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpbtw%2BAb4y5YfYobPKtwDGw2YMzHE5PsHPhFyyZtkUPPoL6jyT8mGjGgABu70NIWP%2BfhcHnOh6uhje62oV52ZXkta51UqwsnC%2F0%2Bh8NJbrLgRGd6PeMoK8p8%2BERXVkyzeGUEMOhP6Cy%2FkbMXjJTbxBo3RTzGdZZCuv%2BR7YA87wFJQH9v0Vi%2Bbmmx6w%2FwpqjSVcWxeMjr3qc9fxYc88lMAe3sT2oLJSAU1bXLcXE7BGpOrXiO%2Bv8HT0IlRAGOZy8p24gSm0Y70BIm5jdjGUu4bbRbH71oYVbfKqD5KZK05v5y4tepqP9RzH8C%2F3FBs7orIREgrQHB2P9WgC%2BzSiVxo5JRDsVZlYzPo%2BrFXySWI%2BHcFYTX2ZAFeewYmuYEetpnLY6tZyEzUUHdPGHd0OHNbHxCgvzOxzxSmCrKuzJpv8kk7YFqYB0xZulTyso0vbPeMpz5Qom9elLD3iv%2BU%2FFGsOj9620Lx9W%2BXekNL%2F%2B3DqmGPQz6usw%2FaiePbtVRIpqnLjQuJuON0WlFQYykU7URvrfSEawxOfTLiNcqiuI4%2FgpktHTWZ%2Bh859ZJQg0h81KmS6LsyNHUsVVOucnAS%2FMjm75KJhz2yGZwMAQtXgGsBFuGxHIGT4bbvWoNX5vY8otbPhsdA6bqxYi7b%2Fp8wrsuxwwY6pgFZr6hJ7DYpcD27svchn2UGVOD%2FWi1JJtrTwgHwOguce7aBn8EdpKT86s8PBZPpq4g5ia9az%2Bdwo%2FBGyeRuMAJwWv9bStujimdFI%2FP7tO0WJiyI43d5UN7KHyrYn1CaEQZMf3oE4EYzLXYRN5DxqhpknYQOG%2FMQ4ESNSD2385ZoQG5ztJttx8JIePbD0scQz%2FWJmABHewtfnWwaa83SoBoG%2FSjuWyxe&X-Amz-Signature=5b5a96a17b9fe73b27ace5799f5a4c7256edb9d20a743c8ddf8244a20da59abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPX2J4XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAO48R7%2Bl90J44k3ERpFlJiD8wxJbwZ7oiED5zc%2BUiLaAiBvEsbZjBsgNG7T%2BGmUn5UmyGfE%2BQbz00CQ7mGDo4f6HiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpbtw%2BAb4y5YfYobPKtwDGw2YMzHE5PsHPhFyyZtkUPPoL6jyT8mGjGgABu70NIWP%2BfhcHnOh6uhje62oV52ZXkta51UqwsnC%2F0%2Bh8NJbrLgRGd6PeMoK8p8%2BERXVkyzeGUEMOhP6Cy%2FkbMXjJTbxBo3RTzGdZZCuv%2BR7YA87wFJQH9v0Vi%2Bbmmx6w%2FwpqjSVcWxeMjr3qc9fxYc88lMAe3sT2oLJSAU1bXLcXE7BGpOrXiO%2Bv8HT0IlRAGOZy8p24gSm0Y70BIm5jdjGUu4bbRbH71oYVbfKqD5KZK05v5y4tepqP9RzH8C%2F3FBs7orIREgrQHB2P9WgC%2BzSiVxo5JRDsVZlYzPo%2BrFXySWI%2BHcFYTX2ZAFeewYmuYEetpnLY6tZyEzUUHdPGHd0OHNbHxCgvzOxzxSmCrKuzJpv8kk7YFqYB0xZulTyso0vbPeMpz5Qom9elLD3iv%2BU%2FFGsOj9620Lx9W%2BXekNL%2F%2B3DqmGPQz6usw%2FaiePbtVRIpqnLjQuJuON0WlFQYykU7URvrfSEawxOfTLiNcqiuI4%2FgpktHTWZ%2Bh859ZJQg0h81KmS6LsyNHUsVVOucnAS%2FMjm75KJhz2yGZwMAQtXgGsBFuGxHIGT4bbvWoNX5vY8otbPhsdA6bqxYi7b%2Fp8wrsuxwwY6pgFZr6hJ7DYpcD27svchn2UGVOD%2FWi1JJtrTwgHwOguce7aBn8EdpKT86s8PBZPpq4g5ia9az%2Bdwo%2FBGyeRuMAJwWv9bStujimdFI%2FP7tO0WJiyI43d5UN7KHyrYn1CaEQZMf3oE4EYzLXYRN5DxqhpknYQOG%2FMQ4ESNSD2385ZoQG5ztJttx8JIePbD0scQz%2FWJmABHewtfnWwaa83SoBoG%2FSjuWyxe&X-Amz-Signature=0105ed31300e3dec5d5b975ef2cb7dfff38be79ec31dadeb43c4d165db100f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPX2J4XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAO48R7%2Bl90J44k3ERpFlJiD8wxJbwZ7oiED5zc%2BUiLaAiBvEsbZjBsgNG7T%2BGmUn5UmyGfE%2BQbz00CQ7mGDo4f6HiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpbtw%2BAb4y5YfYobPKtwDGw2YMzHE5PsHPhFyyZtkUPPoL6jyT8mGjGgABu70NIWP%2BfhcHnOh6uhje62oV52ZXkta51UqwsnC%2F0%2Bh8NJbrLgRGd6PeMoK8p8%2BERXVkyzeGUEMOhP6Cy%2FkbMXjJTbxBo3RTzGdZZCuv%2BR7YA87wFJQH9v0Vi%2Bbmmx6w%2FwpqjSVcWxeMjr3qc9fxYc88lMAe3sT2oLJSAU1bXLcXE7BGpOrXiO%2Bv8HT0IlRAGOZy8p24gSm0Y70BIm5jdjGUu4bbRbH71oYVbfKqD5KZK05v5y4tepqP9RzH8C%2F3FBs7orIREgrQHB2P9WgC%2BzSiVxo5JRDsVZlYzPo%2BrFXySWI%2BHcFYTX2ZAFeewYmuYEetpnLY6tZyEzUUHdPGHd0OHNbHxCgvzOxzxSmCrKuzJpv8kk7YFqYB0xZulTyso0vbPeMpz5Qom9elLD3iv%2BU%2FFGsOj9620Lx9W%2BXekNL%2F%2B3DqmGPQz6usw%2FaiePbtVRIpqnLjQuJuON0WlFQYykU7URvrfSEawxOfTLiNcqiuI4%2FgpktHTWZ%2Bh859ZJQg0h81KmS6LsyNHUsVVOucnAS%2FMjm75KJhz2yGZwMAQtXgGsBFuGxHIGT4bbvWoNX5vY8otbPhsdA6bqxYi7b%2Fp8wrsuxwwY6pgFZr6hJ7DYpcD27svchn2UGVOD%2FWi1JJtrTwgHwOguce7aBn8EdpKT86s8PBZPpq4g5ia9az%2Bdwo%2FBGyeRuMAJwWv9bStujimdFI%2FP7tO0WJiyI43d5UN7KHyrYn1CaEQZMf3oE4EYzLXYRN5DxqhpknYQOG%2FMQ4ESNSD2385ZoQG5ztJttx8JIePbD0scQz%2FWJmABHewtfnWwaa83SoBoG%2FSjuWyxe&X-Amz-Signature=b53c6e8d3a8f000876a1365040372acc3ca480153c12836da38543fc9d884ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPX2J4XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAO48R7%2Bl90J44k3ERpFlJiD8wxJbwZ7oiED5zc%2BUiLaAiBvEsbZjBsgNG7T%2BGmUn5UmyGfE%2BQbz00CQ7mGDo4f6HiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpbtw%2BAb4y5YfYobPKtwDGw2YMzHE5PsHPhFyyZtkUPPoL6jyT8mGjGgABu70NIWP%2BfhcHnOh6uhje62oV52ZXkta51UqwsnC%2F0%2Bh8NJbrLgRGd6PeMoK8p8%2BERXVkyzeGUEMOhP6Cy%2FkbMXjJTbxBo3RTzGdZZCuv%2BR7YA87wFJQH9v0Vi%2Bbmmx6w%2FwpqjSVcWxeMjr3qc9fxYc88lMAe3sT2oLJSAU1bXLcXE7BGpOrXiO%2Bv8HT0IlRAGOZy8p24gSm0Y70BIm5jdjGUu4bbRbH71oYVbfKqD5KZK05v5y4tepqP9RzH8C%2F3FBs7orIREgrQHB2P9WgC%2BzSiVxo5JRDsVZlYzPo%2BrFXySWI%2BHcFYTX2ZAFeewYmuYEetpnLY6tZyEzUUHdPGHd0OHNbHxCgvzOxzxSmCrKuzJpv8kk7YFqYB0xZulTyso0vbPeMpz5Qom9elLD3iv%2BU%2FFGsOj9620Lx9W%2BXekNL%2F%2B3DqmGPQz6usw%2FaiePbtVRIpqnLjQuJuON0WlFQYykU7URvrfSEawxOfTLiNcqiuI4%2FgpktHTWZ%2Bh859ZJQg0h81KmS6LsyNHUsVVOucnAS%2FMjm75KJhz2yGZwMAQtXgGsBFuGxHIGT4bbvWoNX5vY8otbPhsdA6bqxYi7b%2Fp8wrsuxwwY6pgFZr6hJ7DYpcD27svchn2UGVOD%2FWi1JJtrTwgHwOguce7aBn8EdpKT86s8PBZPpq4g5ia9az%2Bdwo%2FBGyeRuMAJwWv9bStujimdFI%2FP7tO0WJiyI43d5UN7KHyrYn1CaEQZMf3oE4EYzLXYRN5DxqhpknYQOG%2FMQ4ESNSD2385ZoQG5ztJttx8JIePbD0scQz%2FWJmABHewtfnWwaa83SoBoG%2FSjuWyxe&X-Amz-Signature=dacbb5146f2de5b5764c87d46a2cd7024ea0880a166910c9e01d1ff9c939bcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPX2J4XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAO48R7%2Bl90J44k3ERpFlJiD8wxJbwZ7oiED5zc%2BUiLaAiBvEsbZjBsgNG7T%2BGmUn5UmyGfE%2BQbz00CQ7mGDo4f6HiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpbtw%2BAb4y5YfYobPKtwDGw2YMzHE5PsHPhFyyZtkUPPoL6jyT8mGjGgABu70NIWP%2BfhcHnOh6uhje62oV52ZXkta51UqwsnC%2F0%2Bh8NJbrLgRGd6PeMoK8p8%2BERXVkyzeGUEMOhP6Cy%2FkbMXjJTbxBo3RTzGdZZCuv%2BR7YA87wFJQH9v0Vi%2Bbmmx6w%2FwpqjSVcWxeMjr3qc9fxYc88lMAe3sT2oLJSAU1bXLcXE7BGpOrXiO%2Bv8HT0IlRAGOZy8p24gSm0Y70BIm5jdjGUu4bbRbH71oYVbfKqD5KZK05v5y4tepqP9RzH8C%2F3FBs7orIREgrQHB2P9WgC%2BzSiVxo5JRDsVZlYzPo%2BrFXySWI%2BHcFYTX2ZAFeewYmuYEetpnLY6tZyEzUUHdPGHd0OHNbHxCgvzOxzxSmCrKuzJpv8kk7YFqYB0xZulTyso0vbPeMpz5Qom9elLD3iv%2BU%2FFGsOj9620Lx9W%2BXekNL%2F%2B3DqmGPQz6usw%2FaiePbtVRIpqnLjQuJuON0WlFQYykU7URvrfSEawxOfTLiNcqiuI4%2FgpktHTWZ%2Bh859ZJQg0h81KmS6LsyNHUsVVOucnAS%2FMjm75KJhz2yGZwMAQtXgGsBFuGxHIGT4bbvWoNX5vY8otbPhsdA6bqxYi7b%2Fp8wrsuxwwY6pgFZr6hJ7DYpcD27svchn2UGVOD%2FWi1JJtrTwgHwOguce7aBn8EdpKT86s8PBZPpq4g5ia9az%2Bdwo%2FBGyeRuMAJwWv9bStujimdFI%2FP7tO0WJiyI43d5UN7KHyrYn1CaEQZMf3oE4EYzLXYRN5DxqhpknYQOG%2FMQ4ESNSD2385ZoQG5ztJttx8JIePbD0scQz%2FWJmABHewtfnWwaa83SoBoG%2FSjuWyxe&X-Amz-Signature=e31021be388b2fe5d13a4aa77d641f29ed105dce47642299fb80bd951526eb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
