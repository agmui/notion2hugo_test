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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXC5G6Z2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQDS1fTXeKRCa%2Bn6EYbSB50PP6HUsDnosswzIjqOS%2FDgIhAPf%2B4dufWrP431M%2FA9CGD39cZoMZ%2BOgBv10DVBHsUBoqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FGwXTU6kG5a6FPUq3APK3bQbwgCZJHDAtK3jZDVLVlKrL%2FTI44OQfMV0aomXPXVkIeESBAoS2KGg0letUAVmrHYFcofKZ6%2BJFy2Q3ZISGWXePoR2N%2FG%2FPB%2BSsR2tulBQK8Ay3BCm7hEgrktNjOY4Um2h5ATu5nd5%2FLwY5llCcBpeBd8asTprycxMcV4JDMkcbJyffTTqVEaG9l8ZvoAhEvc8VSOwogXuFwYKtHPDzG6qvwE19XJdYnuAH7pvKvjqJqfz72aZm3O%2BE3QzlrT8DNiDKd3OEspsOcKHSBCLvyAVfcK%2FnTBfvmG1Sc1RZG0P3o0VG8nvXnEXr3TXWCcvH0r9IsDQC9TgcdnNDyDb0iqGzS7uhXx4YHRzIC2ppebAs4TD87SFNzWb%2FK%2FgCfO%2BGL%2Fx5HCQpYAiIttW6CLLG8gQVVb%2B8xbayftWvOJvlQfv0XbrdyBQj5GU4LBVP4jFCNGeyMVjtI1v3BaEA8IVBOUt%2B3lNmIC5RoPNLtp%2Bbo%2FtrO4WrO7u3zJG%2Fjudwl%2FnN5qBHOclD3zwA3kv8VT%2BfrS9Ytn9uVfhqkTOnxm0k5BaNXrPHqqcVyj%2BvuZakCXZ41K4i9dnl%2FYqBD9sxIq1%2FQbPl9u20yG72ANPP%2BWFiD9Tq7PRe4SBqmIFzjDg%2BZq9BjqkAWVGqXYZEkKdErhygrRVL1itfGe9efEociqylZ4FLKXFgglYz5GLKOeiG2qbUzjNU0skUcKN5OPemjDaOf8AE8A%2BZcC4ntE%2FwNMJCv2BzjsmBp5BXRo3yGTeHy8hxQppDe7r%2FAabH1bPihQ49TLT5n4vHoOPsl5mXN9Ws%2FMXoApJ3OX53FrcJS1ysljR4%2FTU3AE8igqq%2BTpAZRO16KEDbr73eii3&X-Amz-Signature=111c90826963c652d95d43b280c10c7b8bf1f6d655b35fad8a21023823f1e9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXC5G6Z2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQDS1fTXeKRCa%2Bn6EYbSB50PP6HUsDnosswzIjqOS%2FDgIhAPf%2B4dufWrP431M%2FA9CGD39cZoMZ%2BOgBv10DVBHsUBoqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FGwXTU6kG5a6FPUq3APK3bQbwgCZJHDAtK3jZDVLVlKrL%2FTI44OQfMV0aomXPXVkIeESBAoS2KGg0letUAVmrHYFcofKZ6%2BJFy2Q3ZISGWXePoR2N%2FG%2FPB%2BSsR2tulBQK8Ay3BCm7hEgrktNjOY4Um2h5ATu5nd5%2FLwY5llCcBpeBd8asTprycxMcV4JDMkcbJyffTTqVEaG9l8ZvoAhEvc8VSOwogXuFwYKtHPDzG6qvwE19XJdYnuAH7pvKvjqJqfz72aZm3O%2BE3QzlrT8DNiDKd3OEspsOcKHSBCLvyAVfcK%2FnTBfvmG1Sc1RZG0P3o0VG8nvXnEXr3TXWCcvH0r9IsDQC9TgcdnNDyDb0iqGzS7uhXx4YHRzIC2ppebAs4TD87SFNzWb%2FK%2FgCfO%2BGL%2Fx5HCQpYAiIttW6CLLG8gQVVb%2B8xbayftWvOJvlQfv0XbrdyBQj5GU4LBVP4jFCNGeyMVjtI1v3BaEA8IVBOUt%2B3lNmIC5RoPNLtp%2Bbo%2FtrO4WrO7u3zJG%2Fjudwl%2FnN5qBHOclD3zwA3kv8VT%2BfrS9Ytn9uVfhqkTOnxm0k5BaNXrPHqqcVyj%2BvuZakCXZ41K4i9dnl%2FYqBD9sxIq1%2FQbPl9u20yG72ANPP%2BWFiD9Tq7PRe4SBqmIFzjDg%2BZq9BjqkAWVGqXYZEkKdErhygrRVL1itfGe9efEociqylZ4FLKXFgglYz5GLKOeiG2qbUzjNU0skUcKN5OPemjDaOf8AE8A%2BZcC4ntE%2FwNMJCv2BzjsmBp5BXRo3yGTeHy8hxQppDe7r%2FAabH1bPihQ49TLT5n4vHoOPsl5mXN9Ws%2FMXoApJ3OX53FrcJS1ysljR4%2FTU3AE8igqq%2BTpAZRO16KEDbr73eii3&X-Amz-Signature=8dc7bd91adad3b812ff03cd36e6baa24f9bac1966f7d13bf13629676ce9a278a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXC5G6Z2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQDS1fTXeKRCa%2Bn6EYbSB50PP6HUsDnosswzIjqOS%2FDgIhAPf%2B4dufWrP431M%2FA9CGD39cZoMZ%2BOgBv10DVBHsUBoqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FGwXTU6kG5a6FPUq3APK3bQbwgCZJHDAtK3jZDVLVlKrL%2FTI44OQfMV0aomXPXVkIeESBAoS2KGg0letUAVmrHYFcofKZ6%2BJFy2Q3ZISGWXePoR2N%2FG%2FPB%2BSsR2tulBQK8Ay3BCm7hEgrktNjOY4Um2h5ATu5nd5%2FLwY5llCcBpeBd8asTprycxMcV4JDMkcbJyffTTqVEaG9l8ZvoAhEvc8VSOwogXuFwYKtHPDzG6qvwE19XJdYnuAH7pvKvjqJqfz72aZm3O%2BE3QzlrT8DNiDKd3OEspsOcKHSBCLvyAVfcK%2FnTBfvmG1Sc1RZG0P3o0VG8nvXnEXr3TXWCcvH0r9IsDQC9TgcdnNDyDb0iqGzS7uhXx4YHRzIC2ppebAs4TD87SFNzWb%2FK%2FgCfO%2BGL%2Fx5HCQpYAiIttW6CLLG8gQVVb%2B8xbayftWvOJvlQfv0XbrdyBQj5GU4LBVP4jFCNGeyMVjtI1v3BaEA8IVBOUt%2B3lNmIC5RoPNLtp%2Bbo%2FtrO4WrO7u3zJG%2Fjudwl%2FnN5qBHOclD3zwA3kv8VT%2BfrS9Ytn9uVfhqkTOnxm0k5BaNXrPHqqcVyj%2BvuZakCXZ41K4i9dnl%2FYqBD9sxIq1%2FQbPl9u20yG72ANPP%2BWFiD9Tq7PRe4SBqmIFzjDg%2BZq9BjqkAWVGqXYZEkKdErhygrRVL1itfGe9efEociqylZ4FLKXFgglYz5GLKOeiG2qbUzjNU0skUcKN5OPemjDaOf8AE8A%2BZcC4ntE%2FwNMJCv2BzjsmBp5BXRo3yGTeHy8hxQppDe7r%2FAabH1bPihQ49TLT5n4vHoOPsl5mXN9Ws%2FMXoApJ3OX53FrcJS1ysljR4%2FTU3AE8igqq%2BTpAZRO16KEDbr73eii3&X-Amz-Signature=6cf9c6e0cee86d9c27434b83ff125db6c51ad8364aa5ef29950e5a65015de00b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXC5G6Z2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQDS1fTXeKRCa%2Bn6EYbSB50PP6HUsDnosswzIjqOS%2FDgIhAPf%2B4dufWrP431M%2FA9CGD39cZoMZ%2BOgBv10DVBHsUBoqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FGwXTU6kG5a6FPUq3APK3bQbwgCZJHDAtK3jZDVLVlKrL%2FTI44OQfMV0aomXPXVkIeESBAoS2KGg0letUAVmrHYFcofKZ6%2BJFy2Q3ZISGWXePoR2N%2FG%2FPB%2BSsR2tulBQK8Ay3BCm7hEgrktNjOY4Um2h5ATu5nd5%2FLwY5llCcBpeBd8asTprycxMcV4JDMkcbJyffTTqVEaG9l8ZvoAhEvc8VSOwogXuFwYKtHPDzG6qvwE19XJdYnuAH7pvKvjqJqfz72aZm3O%2BE3QzlrT8DNiDKd3OEspsOcKHSBCLvyAVfcK%2FnTBfvmG1Sc1RZG0P3o0VG8nvXnEXr3TXWCcvH0r9IsDQC9TgcdnNDyDb0iqGzS7uhXx4YHRzIC2ppebAs4TD87SFNzWb%2FK%2FgCfO%2BGL%2Fx5HCQpYAiIttW6CLLG8gQVVb%2B8xbayftWvOJvlQfv0XbrdyBQj5GU4LBVP4jFCNGeyMVjtI1v3BaEA8IVBOUt%2B3lNmIC5RoPNLtp%2Bbo%2FtrO4WrO7u3zJG%2Fjudwl%2FnN5qBHOclD3zwA3kv8VT%2BfrS9Ytn9uVfhqkTOnxm0k5BaNXrPHqqcVyj%2BvuZakCXZ41K4i9dnl%2FYqBD9sxIq1%2FQbPl9u20yG72ANPP%2BWFiD9Tq7PRe4SBqmIFzjDg%2BZq9BjqkAWVGqXYZEkKdErhygrRVL1itfGe9efEociqylZ4FLKXFgglYz5GLKOeiG2qbUzjNU0skUcKN5OPemjDaOf8AE8A%2BZcC4ntE%2FwNMJCv2BzjsmBp5BXRo3yGTeHy8hxQppDe7r%2FAabH1bPihQ49TLT5n4vHoOPsl5mXN9Ws%2FMXoApJ3OX53FrcJS1ysljR4%2FTU3AE8igqq%2BTpAZRO16KEDbr73eii3&X-Amz-Signature=64dde910e9d93e6dcf8ff94efddb770ac2c575fd17ea18fa53f622482d184f94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXC5G6Z2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQDS1fTXeKRCa%2Bn6EYbSB50PP6HUsDnosswzIjqOS%2FDgIhAPf%2B4dufWrP431M%2FA9CGD39cZoMZ%2BOgBv10DVBHsUBoqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FGwXTU6kG5a6FPUq3APK3bQbwgCZJHDAtK3jZDVLVlKrL%2FTI44OQfMV0aomXPXVkIeESBAoS2KGg0letUAVmrHYFcofKZ6%2BJFy2Q3ZISGWXePoR2N%2FG%2FPB%2BSsR2tulBQK8Ay3BCm7hEgrktNjOY4Um2h5ATu5nd5%2FLwY5llCcBpeBd8asTprycxMcV4JDMkcbJyffTTqVEaG9l8ZvoAhEvc8VSOwogXuFwYKtHPDzG6qvwE19XJdYnuAH7pvKvjqJqfz72aZm3O%2BE3QzlrT8DNiDKd3OEspsOcKHSBCLvyAVfcK%2FnTBfvmG1Sc1RZG0P3o0VG8nvXnEXr3TXWCcvH0r9IsDQC9TgcdnNDyDb0iqGzS7uhXx4YHRzIC2ppebAs4TD87SFNzWb%2FK%2FgCfO%2BGL%2Fx5HCQpYAiIttW6CLLG8gQVVb%2B8xbayftWvOJvlQfv0XbrdyBQj5GU4LBVP4jFCNGeyMVjtI1v3BaEA8IVBOUt%2B3lNmIC5RoPNLtp%2Bbo%2FtrO4WrO7u3zJG%2Fjudwl%2FnN5qBHOclD3zwA3kv8VT%2BfrS9Ytn9uVfhqkTOnxm0k5BaNXrPHqqcVyj%2BvuZakCXZ41K4i9dnl%2FYqBD9sxIq1%2FQbPl9u20yG72ANPP%2BWFiD9Tq7PRe4SBqmIFzjDg%2BZq9BjqkAWVGqXYZEkKdErhygrRVL1itfGe9efEociqylZ4FLKXFgglYz5GLKOeiG2qbUzjNU0skUcKN5OPemjDaOf8AE8A%2BZcC4ntE%2FwNMJCv2BzjsmBp5BXRo3yGTeHy8hxQppDe7r%2FAabH1bPihQ49TLT5n4vHoOPsl5mXN9Ws%2FMXoApJ3OX53FrcJS1ysljR4%2FTU3AE8igqq%2BTpAZRO16KEDbr73eii3&X-Amz-Signature=88b30f92ef417767af3f2a1d5e39b796f13474f64c834f6ca09738153f0c486b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXC5G6Z2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCQDS1fTXeKRCa%2Bn6EYbSB50PP6HUsDnosswzIjqOS%2FDgIhAPf%2B4dufWrP431M%2FA9CGD39cZoMZ%2BOgBv10DVBHsUBoqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FGwXTU6kG5a6FPUq3APK3bQbwgCZJHDAtK3jZDVLVlKrL%2FTI44OQfMV0aomXPXVkIeESBAoS2KGg0letUAVmrHYFcofKZ6%2BJFy2Q3ZISGWXePoR2N%2FG%2FPB%2BSsR2tulBQK8Ay3BCm7hEgrktNjOY4Um2h5ATu5nd5%2FLwY5llCcBpeBd8asTprycxMcV4JDMkcbJyffTTqVEaG9l8ZvoAhEvc8VSOwogXuFwYKtHPDzG6qvwE19XJdYnuAH7pvKvjqJqfz72aZm3O%2BE3QzlrT8DNiDKd3OEspsOcKHSBCLvyAVfcK%2FnTBfvmG1Sc1RZG0P3o0VG8nvXnEXr3TXWCcvH0r9IsDQC9TgcdnNDyDb0iqGzS7uhXx4YHRzIC2ppebAs4TD87SFNzWb%2FK%2FgCfO%2BGL%2Fx5HCQpYAiIttW6CLLG8gQVVb%2B8xbayftWvOJvlQfv0XbrdyBQj5GU4LBVP4jFCNGeyMVjtI1v3BaEA8IVBOUt%2B3lNmIC5RoPNLtp%2Bbo%2FtrO4WrO7u3zJG%2Fjudwl%2FnN5qBHOclD3zwA3kv8VT%2BfrS9Ytn9uVfhqkTOnxm0k5BaNXrPHqqcVyj%2BvuZakCXZ41K4i9dnl%2FYqBD9sxIq1%2FQbPl9u20yG72ANPP%2BWFiD9Tq7PRe4SBqmIFzjDg%2BZq9BjqkAWVGqXYZEkKdErhygrRVL1itfGe9efEociqylZ4FLKXFgglYz5GLKOeiG2qbUzjNU0skUcKN5OPemjDaOf8AE8A%2BZcC4ntE%2FwNMJCv2BzjsmBp5BXRo3yGTeHy8hxQppDe7r%2FAabH1bPihQ49TLT5n4vHoOPsl5mXN9Ws%2FMXoApJ3OX53FrcJS1ysljR4%2FTU3AE8igqq%2BTpAZRO16KEDbr73eii3&X-Amz-Signature=0b32d420981f2ca4b50e23659c4e73abbf86e65f44be8d21efe7b1d802640895&X-Amz-SignedHeaders=host&x-id=GetObject)
