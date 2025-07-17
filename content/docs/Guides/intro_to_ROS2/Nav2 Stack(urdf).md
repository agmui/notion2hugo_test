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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCJK5T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW0pRhEo8AO6gYBY9RX3FnMDU0%2BGzIypJH2er2swAPZAIhAJVQVWzUthU2GbjOz6fWbNMYkNIsqKBFKa2hp7SWOWbkKv8DCHYQABoMNjM3NDIzMTgzODA1Igy29lPMJz8IS85%2FWvYq3ANoCIvWDNcjBfjRFUY2low0s%2BWSNLKCuCAsgcvKbVml7AuEN5mT5GIyEijXo8CkarNNBPHQqCQgPTlzmR%2FSKBXdV%2BFEG21R2YDquT05IeTcNLLvzCkedeiIAyWQMZn%2FF5jaBLL%2BckndYEWxYZ1KW7aD2xq4Kc8363wgfiYF8mO5G8MMjro5q6JzLJ2AXLdUToZI7v5uGEZw%2BWihwfBUUaVSd3uTHjFWarN8RR4g%2F3z2XaKZA%2F%2BuDKUgEcD5dJh660xIbI7ZUqUoTHNcHmDEtMHHaYyJakonoVjkZ4L0oMbmoZO2NPpmId0lw2Uiz4WULfECCr6G9b6yrPEYLhGe69zV0YlIQ71Jhg5dFwEqLPejVZp9r%2F4KqHUTMGrdPBX7TLw5kejc23Y%2FJy0UYsTSZ8d26ZykPRAkuFHaclAQdrzltKzrhe77x5Iori19lmLr3yWBojhK%2FEkaB1YeiR%2FoEfxzqJYjw9GefL3CysE49NTWq9sUo3z6P1PilwKGZ0PQ73y3KflZWIrRIM77kVHcJFHU8QFh1ebfMT3%2BP9vHrmjLCQH1HLA5dVRodxfLq9KfcYA8v%2FcIieYbbWlJOwV5yLKnJ3We29m4ChCFKAHG%2BF6XezaJ6soU4H8pqTxQrTCE4%2BPDBjqkAYyxFTOLt930w3x9Oe6e63kq9ce9wdtUpsuNh8ORu%2FwRvo8qmp9XUWeXbC0ZaLFIRkXeJO%2FTC%2BgK147oFhQUI8mNdsaTdF7T%2FwfWGFz%2FM2hx5Iq2dIGhw9zOEvpDT13R6aAfi93md4E6ZLt5bqXKi14SVbdydfCMjzH7ELsC2RmzywGuguVjiqH6enhQbzVt34mGBfdCm1SOpKWV4AfYSsqVyk%2BN&X-Amz-Signature=ff0768eebb432d411037a2447c7c4427a78aaa71ab3834dbd4355d0e3654b34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCJK5T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW0pRhEo8AO6gYBY9RX3FnMDU0%2BGzIypJH2er2swAPZAIhAJVQVWzUthU2GbjOz6fWbNMYkNIsqKBFKa2hp7SWOWbkKv8DCHYQABoMNjM3NDIzMTgzODA1Igy29lPMJz8IS85%2FWvYq3ANoCIvWDNcjBfjRFUY2low0s%2BWSNLKCuCAsgcvKbVml7AuEN5mT5GIyEijXo8CkarNNBPHQqCQgPTlzmR%2FSKBXdV%2BFEG21R2YDquT05IeTcNLLvzCkedeiIAyWQMZn%2FF5jaBLL%2BckndYEWxYZ1KW7aD2xq4Kc8363wgfiYF8mO5G8MMjro5q6JzLJ2AXLdUToZI7v5uGEZw%2BWihwfBUUaVSd3uTHjFWarN8RR4g%2F3z2XaKZA%2F%2BuDKUgEcD5dJh660xIbI7ZUqUoTHNcHmDEtMHHaYyJakonoVjkZ4L0oMbmoZO2NPpmId0lw2Uiz4WULfECCr6G9b6yrPEYLhGe69zV0YlIQ71Jhg5dFwEqLPejVZp9r%2F4KqHUTMGrdPBX7TLw5kejc23Y%2FJy0UYsTSZ8d26ZykPRAkuFHaclAQdrzltKzrhe77x5Iori19lmLr3yWBojhK%2FEkaB1YeiR%2FoEfxzqJYjw9GefL3CysE49NTWq9sUo3z6P1PilwKGZ0PQ73y3KflZWIrRIM77kVHcJFHU8QFh1ebfMT3%2BP9vHrmjLCQH1HLA5dVRodxfLq9KfcYA8v%2FcIieYbbWlJOwV5yLKnJ3We29m4ChCFKAHG%2BF6XezaJ6soU4H8pqTxQrTCE4%2BPDBjqkAYyxFTOLt930w3x9Oe6e63kq9ce9wdtUpsuNh8ORu%2FwRvo8qmp9XUWeXbC0ZaLFIRkXeJO%2FTC%2BgK147oFhQUI8mNdsaTdF7T%2FwfWGFz%2FM2hx5Iq2dIGhw9zOEvpDT13R6aAfi93md4E6ZLt5bqXKi14SVbdydfCMjzH7ELsC2RmzywGuguVjiqH6enhQbzVt34mGBfdCm1SOpKWV4AfYSsqVyk%2BN&X-Amz-Signature=20497b5fd220b78c3fa80212cee8ee4fa6dabd67a129402dbf615116d7e3f983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCJK5T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW0pRhEo8AO6gYBY9RX3FnMDU0%2BGzIypJH2er2swAPZAIhAJVQVWzUthU2GbjOz6fWbNMYkNIsqKBFKa2hp7SWOWbkKv8DCHYQABoMNjM3NDIzMTgzODA1Igy29lPMJz8IS85%2FWvYq3ANoCIvWDNcjBfjRFUY2low0s%2BWSNLKCuCAsgcvKbVml7AuEN5mT5GIyEijXo8CkarNNBPHQqCQgPTlzmR%2FSKBXdV%2BFEG21R2YDquT05IeTcNLLvzCkedeiIAyWQMZn%2FF5jaBLL%2BckndYEWxYZ1KW7aD2xq4Kc8363wgfiYF8mO5G8MMjro5q6JzLJ2AXLdUToZI7v5uGEZw%2BWihwfBUUaVSd3uTHjFWarN8RR4g%2F3z2XaKZA%2F%2BuDKUgEcD5dJh660xIbI7ZUqUoTHNcHmDEtMHHaYyJakonoVjkZ4L0oMbmoZO2NPpmId0lw2Uiz4WULfECCr6G9b6yrPEYLhGe69zV0YlIQ71Jhg5dFwEqLPejVZp9r%2F4KqHUTMGrdPBX7TLw5kejc23Y%2FJy0UYsTSZ8d26ZykPRAkuFHaclAQdrzltKzrhe77x5Iori19lmLr3yWBojhK%2FEkaB1YeiR%2FoEfxzqJYjw9GefL3CysE49NTWq9sUo3z6P1PilwKGZ0PQ73y3KflZWIrRIM77kVHcJFHU8QFh1ebfMT3%2BP9vHrmjLCQH1HLA5dVRodxfLq9KfcYA8v%2FcIieYbbWlJOwV5yLKnJ3We29m4ChCFKAHG%2BF6XezaJ6soU4H8pqTxQrTCE4%2BPDBjqkAYyxFTOLt930w3x9Oe6e63kq9ce9wdtUpsuNh8ORu%2FwRvo8qmp9XUWeXbC0ZaLFIRkXeJO%2FTC%2BgK147oFhQUI8mNdsaTdF7T%2FwfWGFz%2FM2hx5Iq2dIGhw9zOEvpDT13R6aAfi93md4E6ZLt5bqXKi14SVbdydfCMjzH7ELsC2RmzywGuguVjiqH6enhQbzVt34mGBfdCm1SOpKWV4AfYSsqVyk%2BN&X-Amz-Signature=86922f2b280214a2654cc31315a959523c58caf2bbaad6d7e4f707bc81cc2fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCJK5T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW0pRhEo8AO6gYBY9RX3FnMDU0%2BGzIypJH2er2swAPZAIhAJVQVWzUthU2GbjOz6fWbNMYkNIsqKBFKa2hp7SWOWbkKv8DCHYQABoMNjM3NDIzMTgzODA1Igy29lPMJz8IS85%2FWvYq3ANoCIvWDNcjBfjRFUY2low0s%2BWSNLKCuCAsgcvKbVml7AuEN5mT5GIyEijXo8CkarNNBPHQqCQgPTlzmR%2FSKBXdV%2BFEG21R2YDquT05IeTcNLLvzCkedeiIAyWQMZn%2FF5jaBLL%2BckndYEWxYZ1KW7aD2xq4Kc8363wgfiYF8mO5G8MMjro5q6JzLJ2AXLdUToZI7v5uGEZw%2BWihwfBUUaVSd3uTHjFWarN8RR4g%2F3z2XaKZA%2F%2BuDKUgEcD5dJh660xIbI7ZUqUoTHNcHmDEtMHHaYyJakonoVjkZ4L0oMbmoZO2NPpmId0lw2Uiz4WULfECCr6G9b6yrPEYLhGe69zV0YlIQ71Jhg5dFwEqLPejVZp9r%2F4KqHUTMGrdPBX7TLw5kejc23Y%2FJy0UYsTSZ8d26ZykPRAkuFHaclAQdrzltKzrhe77x5Iori19lmLr3yWBojhK%2FEkaB1YeiR%2FoEfxzqJYjw9GefL3CysE49NTWq9sUo3z6P1PilwKGZ0PQ73y3KflZWIrRIM77kVHcJFHU8QFh1ebfMT3%2BP9vHrmjLCQH1HLA5dVRodxfLq9KfcYA8v%2FcIieYbbWlJOwV5yLKnJ3We29m4ChCFKAHG%2BF6XezaJ6soU4H8pqTxQrTCE4%2BPDBjqkAYyxFTOLt930w3x9Oe6e63kq9ce9wdtUpsuNh8ORu%2FwRvo8qmp9XUWeXbC0ZaLFIRkXeJO%2FTC%2BgK147oFhQUI8mNdsaTdF7T%2FwfWGFz%2FM2hx5Iq2dIGhw9zOEvpDT13R6aAfi93md4E6ZLt5bqXKi14SVbdydfCMjzH7ELsC2RmzywGuguVjiqH6enhQbzVt34mGBfdCm1SOpKWV4AfYSsqVyk%2BN&X-Amz-Signature=f335702f4fac4dfc46bae72ef1f654da1f96b792bd9485cbd06f9d6dbd34a6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCJK5T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW0pRhEo8AO6gYBY9RX3FnMDU0%2BGzIypJH2er2swAPZAIhAJVQVWzUthU2GbjOz6fWbNMYkNIsqKBFKa2hp7SWOWbkKv8DCHYQABoMNjM3NDIzMTgzODA1Igy29lPMJz8IS85%2FWvYq3ANoCIvWDNcjBfjRFUY2low0s%2BWSNLKCuCAsgcvKbVml7AuEN5mT5GIyEijXo8CkarNNBPHQqCQgPTlzmR%2FSKBXdV%2BFEG21R2YDquT05IeTcNLLvzCkedeiIAyWQMZn%2FF5jaBLL%2BckndYEWxYZ1KW7aD2xq4Kc8363wgfiYF8mO5G8MMjro5q6JzLJ2AXLdUToZI7v5uGEZw%2BWihwfBUUaVSd3uTHjFWarN8RR4g%2F3z2XaKZA%2F%2BuDKUgEcD5dJh660xIbI7ZUqUoTHNcHmDEtMHHaYyJakonoVjkZ4L0oMbmoZO2NPpmId0lw2Uiz4WULfECCr6G9b6yrPEYLhGe69zV0YlIQ71Jhg5dFwEqLPejVZp9r%2F4KqHUTMGrdPBX7TLw5kejc23Y%2FJy0UYsTSZ8d26ZykPRAkuFHaclAQdrzltKzrhe77x5Iori19lmLr3yWBojhK%2FEkaB1YeiR%2FoEfxzqJYjw9GefL3CysE49NTWq9sUo3z6P1PilwKGZ0PQ73y3KflZWIrRIM77kVHcJFHU8QFh1ebfMT3%2BP9vHrmjLCQH1HLA5dVRodxfLq9KfcYA8v%2FcIieYbbWlJOwV5yLKnJ3We29m4ChCFKAHG%2BF6XezaJ6soU4H8pqTxQrTCE4%2BPDBjqkAYyxFTOLt930w3x9Oe6e63kq9ce9wdtUpsuNh8ORu%2FwRvo8qmp9XUWeXbC0ZaLFIRkXeJO%2FTC%2BgK147oFhQUI8mNdsaTdF7T%2FwfWGFz%2FM2hx5Iq2dIGhw9zOEvpDT13R6aAfi93md4E6ZLt5bqXKi14SVbdydfCMjzH7ELsC2RmzywGuguVjiqH6enhQbzVt34mGBfdCm1SOpKWV4AfYSsqVyk%2BN&X-Amz-Signature=c597b07665c7bacd38c62e4c2507a335843bd7f84e77ce895ba373e5720c0322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCJK5T4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCW0pRhEo8AO6gYBY9RX3FnMDU0%2BGzIypJH2er2swAPZAIhAJVQVWzUthU2GbjOz6fWbNMYkNIsqKBFKa2hp7SWOWbkKv8DCHYQABoMNjM3NDIzMTgzODA1Igy29lPMJz8IS85%2FWvYq3ANoCIvWDNcjBfjRFUY2low0s%2BWSNLKCuCAsgcvKbVml7AuEN5mT5GIyEijXo8CkarNNBPHQqCQgPTlzmR%2FSKBXdV%2BFEG21R2YDquT05IeTcNLLvzCkedeiIAyWQMZn%2FF5jaBLL%2BckndYEWxYZ1KW7aD2xq4Kc8363wgfiYF8mO5G8MMjro5q6JzLJ2AXLdUToZI7v5uGEZw%2BWihwfBUUaVSd3uTHjFWarN8RR4g%2F3z2XaKZA%2F%2BuDKUgEcD5dJh660xIbI7ZUqUoTHNcHmDEtMHHaYyJakonoVjkZ4L0oMbmoZO2NPpmId0lw2Uiz4WULfECCr6G9b6yrPEYLhGe69zV0YlIQ71Jhg5dFwEqLPejVZp9r%2F4KqHUTMGrdPBX7TLw5kejc23Y%2FJy0UYsTSZ8d26ZykPRAkuFHaclAQdrzltKzrhe77x5Iori19lmLr3yWBojhK%2FEkaB1YeiR%2FoEfxzqJYjw9GefL3CysE49NTWq9sUo3z6P1PilwKGZ0PQ73y3KflZWIrRIM77kVHcJFHU8QFh1ebfMT3%2BP9vHrmjLCQH1HLA5dVRodxfLq9KfcYA8v%2FcIieYbbWlJOwV5yLKnJ3We29m4ChCFKAHG%2BF6XezaJ6soU4H8pqTxQrTCE4%2BPDBjqkAYyxFTOLt930w3x9Oe6e63kq9ce9wdtUpsuNh8ORu%2FwRvo8qmp9XUWeXbC0ZaLFIRkXeJO%2FTC%2BgK147oFhQUI8mNdsaTdF7T%2FwfWGFz%2FM2hx5Iq2dIGhw9zOEvpDT13R6aAfi93md4E6ZLt5bqXKi14SVbdydfCMjzH7ELsC2RmzywGuguVjiqH6enhQbzVt34mGBfdCm1SOpKWV4AfYSsqVyk%2BN&X-Amz-Signature=ba70ea4f72b9a1879d66cbe049b9df2d854fab1608072032e1f6a6168cd64a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
