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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M73B346%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCowpa8J9mBN2vAqzQLBplDgzliXzlABqXfifJQ7l29YwIhAJIFDaMZMebBJ2P85EWsNFEDRqsQStpuzVNEcj485whjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1MtyqgManeb2rGIq3AMEtFIUE2C0023w8xtAwlJU3OiInsAlEpeFK7ymMgybKWB%2Fx9ZZp7iNkLUwLJWNmXJOABjeSZhWSf%2Fr35Qg55%2FcdrbMcWtyYbnAYRb4nJBxqsDTVcgJSr%2BnOpuY2LvZnuil8zxWBitRNqwZuf7g9SaH2m6NpSx%2FZED3CGQ1%2FYdCaEUctIk6rqUthGW2h8NBIW7RaN8ReFHq5DoEtdwHHXolj6Lw3mtC1aKn2yjh%2FaxNBBx4IL9r4Y8769aYFDXSlVgmrcT%2BvFZ45BnYQZy7dE1IoVM9y%2Fl7TC4zm2U60%2BeQW3IdpM3oIAsVRjdX1kRm2n9cKdatrk5uAr1Cb8kGEAUKtUvRrV1u4b8spHYRk1sYuBlpzOwsnAXgjKRKmLi0mWebXkYto5jos7QOzvjVBbyvbWwovaEix%2Fwaj1u5qt72IfY%2Bx%2BmlVbWayeBvWz5LXFUmQ60JEd0CU4gGmqhvnlvfs7PasXxAkZ1uZ8QEzvoO2sNUnmz4RRrPOsfr0QjYUCko6SBrjl8ATf3RgJkueBpobJ1DBfKPMD1gIsrlkcuPcFPejJ5KDJK7FK3z%2BgoSqeWsFFS5s92JsYb3wKYBHwghCFQYAvRH1NGUJwmsgPmLEkMk7kIhNEa%2BRPFv5DC8oYPBBjqkAdvfsG00sA%2FO9w8i7foUSpAOhGbYib3SJO7zjxXGsmmT3%2BV1ffFoNbBdvr5bm0imVeK%2F0yC5ascTeSNJrSHpyHja6x2WFHXdgsIh5q7Hyl3qO0CI3ZXKD1XPqJI41yxT0sgODcZhWmatKnIBDcjCrsQpTmATFapuy4pHk99eWMWMKp7x5I8L5MbIksDUkdDrr6ikNsmC7buo3XdWFCWuKy3XXnV9&X-Amz-Signature=62ab1bb281813850b2e0da2ad43b63e0363bb91cc20a057ad23d334857a3c758&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M73B346%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCowpa8J9mBN2vAqzQLBplDgzliXzlABqXfifJQ7l29YwIhAJIFDaMZMebBJ2P85EWsNFEDRqsQStpuzVNEcj485whjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1MtyqgManeb2rGIq3AMEtFIUE2C0023w8xtAwlJU3OiInsAlEpeFK7ymMgybKWB%2Fx9ZZp7iNkLUwLJWNmXJOABjeSZhWSf%2Fr35Qg55%2FcdrbMcWtyYbnAYRb4nJBxqsDTVcgJSr%2BnOpuY2LvZnuil8zxWBitRNqwZuf7g9SaH2m6NpSx%2FZED3CGQ1%2FYdCaEUctIk6rqUthGW2h8NBIW7RaN8ReFHq5DoEtdwHHXolj6Lw3mtC1aKn2yjh%2FaxNBBx4IL9r4Y8769aYFDXSlVgmrcT%2BvFZ45BnYQZy7dE1IoVM9y%2Fl7TC4zm2U60%2BeQW3IdpM3oIAsVRjdX1kRm2n9cKdatrk5uAr1Cb8kGEAUKtUvRrV1u4b8spHYRk1sYuBlpzOwsnAXgjKRKmLi0mWebXkYto5jos7QOzvjVBbyvbWwovaEix%2Fwaj1u5qt72IfY%2Bx%2BmlVbWayeBvWz5LXFUmQ60JEd0CU4gGmqhvnlvfs7PasXxAkZ1uZ8QEzvoO2sNUnmz4RRrPOsfr0QjYUCko6SBrjl8ATf3RgJkueBpobJ1DBfKPMD1gIsrlkcuPcFPejJ5KDJK7FK3z%2BgoSqeWsFFS5s92JsYb3wKYBHwghCFQYAvRH1NGUJwmsgPmLEkMk7kIhNEa%2BRPFv5DC8oYPBBjqkAdvfsG00sA%2FO9w8i7foUSpAOhGbYib3SJO7zjxXGsmmT3%2BV1ffFoNbBdvr5bm0imVeK%2F0yC5ascTeSNJrSHpyHja6x2WFHXdgsIh5q7Hyl3qO0CI3ZXKD1XPqJI41yxT0sgODcZhWmatKnIBDcjCrsQpTmATFapuy4pHk99eWMWMKp7x5I8L5MbIksDUkdDrr6ikNsmC7buo3XdWFCWuKy3XXnV9&X-Amz-Signature=4eede512b48584a9ee2df28773e9511735cd65c6026ada7bb32ec75eb265656d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M73B346%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCowpa8J9mBN2vAqzQLBplDgzliXzlABqXfifJQ7l29YwIhAJIFDaMZMebBJ2P85EWsNFEDRqsQStpuzVNEcj485whjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1MtyqgManeb2rGIq3AMEtFIUE2C0023w8xtAwlJU3OiInsAlEpeFK7ymMgybKWB%2Fx9ZZp7iNkLUwLJWNmXJOABjeSZhWSf%2Fr35Qg55%2FcdrbMcWtyYbnAYRb4nJBxqsDTVcgJSr%2BnOpuY2LvZnuil8zxWBitRNqwZuf7g9SaH2m6NpSx%2FZED3CGQ1%2FYdCaEUctIk6rqUthGW2h8NBIW7RaN8ReFHq5DoEtdwHHXolj6Lw3mtC1aKn2yjh%2FaxNBBx4IL9r4Y8769aYFDXSlVgmrcT%2BvFZ45BnYQZy7dE1IoVM9y%2Fl7TC4zm2U60%2BeQW3IdpM3oIAsVRjdX1kRm2n9cKdatrk5uAr1Cb8kGEAUKtUvRrV1u4b8spHYRk1sYuBlpzOwsnAXgjKRKmLi0mWebXkYto5jos7QOzvjVBbyvbWwovaEix%2Fwaj1u5qt72IfY%2Bx%2BmlVbWayeBvWz5LXFUmQ60JEd0CU4gGmqhvnlvfs7PasXxAkZ1uZ8QEzvoO2sNUnmz4RRrPOsfr0QjYUCko6SBrjl8ATf3RgJkueBpobJ1DBfKPMD1gIsrlkcuPcFPejJ5KDJK7FK3z%2BgoSqeWsFFS5s92JsYb3wKYBHwghCFQYAvRH1NGUJwmsgPmLEkMk7kIhNEa%2BRPFv5DC8oYPBBjqkAdvfsG00sA%2FO9w8i7foUSpAOhGbYib3SJO7zjxXGsmmT3%2BV1ffFoNbBdvr5bm0imVeK%2F0yC5ascTeSNJrSHpyHja6x2WFHXdgsIh5q7Hyl3qO0CI3ZXKD1XPqJI41yxT0sgODcZhWmatKnIBDcjCrsQpTmATFapuy4pHk99eWMWMKp7x5I8L5MbIksDUkdDrr6ikNsmC7buo3XdWFCWuKy3XXnV9&X-Amz-Signature=a7fba977d6373f17c59135eaab892c557ff26f55203109d3f3e7713336a61075&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M73B346%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCowpa8J9mBN2vAqzQLBplDgzliXzlABqXfifJQ7l29YwIhAJIFDaMZMebBJ2P85EWsNFEDRqsQStpuzVNEcj485whjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1MtyqgManeb2rGIq3AMEtFIUE2C0023w8xtAwlJU3OiInsAlEpeFK7ymMgybKWB%2Fx9ZZp7iNkLUwLJWNmXJOABjeSZhWSf%2Fr35Qg55%2FcdrbMcWtyYbnAYRb4nJBxqsDTVcgJSr%2BnOpuY2LvZnuil8zxWBitRNqwZuf7g9SaH2m6NpSx%2FZED3CGQ1%2FYdCaEUctIk6rqUthGW2h8NBIW7RaN8ReFHq5DoEtdwHHXolj6Lw3mtC1aKn2yjh%2FaxNBBx4IL9r4Y8769aYFDXSlVgmrcT%2BvFZ45BnYQZy7dE1IoVM9y%2Fl7TC4zm2U60%2BeQW3IdpM3oIAsVRjdX1kRm2n9cKdatrk5uAr1Cb8kGEAUKtUvRrV1u4b8spHYRk1sYuBlpzOwsnAXgjKRKmLi0mWebXkYto5jos7QOzvjVBbyvbWwovaEix%2Fwaj1u5qt72IfY%2Bx%2BmlVbWayeBvWz5LXFUmQ60JEd0CU4gGmqhvnlvfs7PasXxAkZ1uZ8QEzvoO2sNUnmz4RRrPOsfr0QjYUCko6SBrjl8ATf3RgJkueBpobJ1DBfKPMD1gIsrlkcuPcFPejJ5KDJK7FK3z%2BgoSqeWsFFS5s92JsYb3wKYBHwghCFQYAvRH1NGUJwmsgPmLEkMk7kIhNEa%2BRPFv5DC8oYPBBjqkAdvfsG00sA%2FO9w8i7foUSpAOhGbYib3SJO7zjxXGsmmT3%2BV1ffFoNbBdvr5bm0imVeK%2F0yC5ascTeSNJrSHpyHja6x2WFHXdgsIh5q7Hyl3qO0CI3ZXKD1XPqJI41yxT0sgODcZhWmatKnIBDcjCrsQpTmATFapuy4pHk99eWMWMKp7x5I8L5MbIksDUkdDrr6ikNsmC7buo3XdWFCWuKy3XXnV9&X-Amz-Signature=b44d1efd983cfbab9bc942e3e9cbbd90f8647695637e80e1568a7be6a7a9901a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M73B346%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCowpa8J9mBN2vAqzQLBplDgzliXzlABqXfifJQ7l29YwIhAJIFDaMZMebBJ2P85EWsNFEDRqsQStpuzVNEcj485whjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1MtyqgManeb2rGIq3AMEtFIUE2C0023w8xtAwlJU3OiInsAlEpeFK7ymMgybKWB%2Fx9ZZp7iNkLUwLJWNmXJOABjeSZhWSf%2Fr35Qg55%2FcdrbMcWtyYbnAYRb4nJBxqsDTVcgJSr%2BnOpuY2LvZnuil8zxWBitRNqwZuf7g9SaH2m6NpSx%2FZED3CGQ1%2FYdCaEUctIk6rqUthGW2h8NBIW7RaN8ReFHq5DoEtdwHHXolj6Lw3mtC1aKn2yjh%2FaxNBBx4IL9r4Y8769aYFDXSlVgmrcT%2BvFZ45BnYQZy7dE1IoVM9y%2Fl7TC4zm2U60%2BeQW3IdpM3oIAsVRjdX1kRm2n9cKdatrk5uAr1Cb8kGEAUKtUvRrV1u4b8spHYRk1sYuBlpzOwsnAXgjKRKmLi0mWebXkYto5jos7QOzvjVBbyvbWwovaEix%2Fwaj1u5qt72IfY%2Bx%2BmlVbWayeBvWz5LXFUmQ60JEd0CU4gGmqhvnlvfs7PasXxAkZ1uZ8QEzvoO2sNUnmz4RRrPOsfr0QjYUCko6SBrjl8ATf3RgJkueBpobJ1DBfKPMD1gIsrlkcuPcFPejJ5KDJK7FK3z%2BgoSqeWsFFS5s92JsYb3wKYBHwghCFQYAvRH1NGUJwmsgPmLEkMk7kIhNEa%2BRPFv5DC8oYPBBjqkAdvfsG00sA%2FO9w8i7foUSpAOhGbYib3SJO7zjxXGsmmT3%2BV1ffFoNbBdvr5bm0imVeK%2F0yC5ascTeSNJrSHpyHja6x2WFHXdgsIh5q7Hyl3qO0CI3ZXKD1XPqJI41yxT0sgODcZhWmatKnIBDcjCrsQpTmATFapuy4pHk99eWMWMKp7x5I8L5MbIksDUkdDrr6ikNsmC7buo3XdWFCWuKy3XXnV9&X-Amz-Signature=376ad81c28f6b8b1dd6da5c6925b4b67eb8b06a76c6bf77ed9ea2d66daae2604&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M73B346%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCowpa8J9mBN2vAqzQLBplDgzliXzlABqXfifJQ7l29YwIhAJIFDaMZMebBJ2P85EWsNFEDRqsQStpuzVNEcj485whjKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1MtyqgManeb2rGIq3AMEtFIUE2C0023w8xtAwlJU3OiInsAlEpeFK7ymMgybKWB%2Fx9ZZp7iNkLUwLJWNmXJOABjeSZhWSf%2Fr35Qg55%2FcdrbMcWtyYbnAYRb4nJBxqsDTVcgJSr%2BnOpuY2LvZnuil8zxWBitRNqwZuf7g9SaH2m6NpSx%2FZED3CGQ1%2FYdCaEUctIk6rqUthGW2h8NBIW7RaN8ReFHq5DoEtdwHHXolj6Lw3mtC1aKn2yjh%2FaxNBBx4IL9r4Y8769aYFDXSlVgmrcT%2BvFZ45BnYQZy7dE1IoVM9y%2Fl7TC4zm2U60%2BeQW3IdpM3oIAsVRjdX1kRm2n9cKdatrk5uAr1Cb8kGEAUKtUvRrV1u4b8spHYRk1sYuBlpzOwsnAXgjKRKmLi0mWebXkYto5jos7QOzvjVBbyvbWwovaEix%2Fwaj1u5qt72IfY%2Bx%2BmlVbWayeBvWz5LXFUmQ60JEd0CU4gGmqhvnlvfs7PasXxAkZ1uZ8QEzvoO2sNUnmz4RRrPOsfr0QjYUCko6SBrjl8ATf3RgJkueBpobJ1DBfKPMD1gIsrlkcuPcFPejJ5KDJK7FK3z%2BgoSqeWsFFS5s92JsYb3wKYBHwghCFQYAvRH1NGUJwmsgPmLEkMk7kIhNEa%2BRPFv5DC8oYPBBjqkAdvfsG00sA%2FO9w8i7foUSpAOhGbYib3SJO7zjxXGsmmT3%2BV1ffFoNbBdvr5bm0imVeK%2F0yC5ascTeSNJrSHpyHja6x2WFHXdgsIh5q7Hyl3qO0CI3ZXKD1XPqJI41yxT0sgODcZhWmatKnIBDcjCrsQpTmATFapuy4pHk99eWMWMKp7x5I8L5MbIksDUkdDrr6ikNsmC7buo3XdWFCWuKy3XXnV9&X-Amz-Signature=bb9faf943834b052cd4821ead79434557ab14d3d69553962d559ed03fa8f4e36&X-Amz-SignedHeaders=host&x-id=GetObject)
