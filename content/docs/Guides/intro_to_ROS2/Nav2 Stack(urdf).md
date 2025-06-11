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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOE4TMN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZn8q2cfWqR5wiCDy%2FJwcuIykDJSH4rwgnjOyvrZY%2FVAiA2tmgTLmxv%2B3ARB49a9rUwlggrOgtNsPA2Jnc7sMqK%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo5099WQ4fKbEKq3KtwDV%2FbnwaW0gFVkF34gFio%2Fj%2B8ROKVt%2BvOXgtCnSVSBBn%2Fe0ZrN8bgE3Av9D4AM2OYmmqg3fVeklSNgBrnfJTU1irBBkoWDNCtY6y69dVucHM7pUevENnCt2VNN5LWj5Q4Q0owqdKfvYPlrJ2OxFFpaFiWR6oxGl0w6fP35ODitUlgvBdw0MQkL%2BRuYukLNnE3YV5SeJ8dzyC0iKYkgSekXmVgAwug7J4S%2BH86RL1GuktimbWn3S6gI%2F0ht%2F6XBRluhbk3lCwZ1fztynB7eLJM4C8utBb47QPlmY0lTqpATYpsdBJWgoZGNuzOXGN1F8EcAmKmQIpZDveeokKdY9O2ATsO1n2zFaXjTecCcflF3B8C%2FWBiaFoOLg1cv8cYOFx6tcco4QcnZWXnrvJSbvn1ovQTIBiZv1VPDS86OzT8bUk1rou6u7dl06KEv0lbKbN4djGf4T6TlM91uLB06e%2FsSEaseAvHZ7KmkTY6QZpzisoYIiMb4cCH4NIoN0MTmC2FCc9I%2BDwK80fy%2F9Y9KZ8Z%2FMGsXqfNAqtMv8Jw%2B6QNzvoH%2FJJZkFnYjSt5YTjC%2B7kLLDd%2Bn3SkkPeh3S1%2BCgWpWDquI%2BimiFo%2F3ZhXOSR%2FE7sTzm6wh5FJ7TIpUTMMw8belwgY6pgF9%2F0ifkNN%2FfZWnZBXck3ZQpP8QQ30Tzbot2ndMnfD6D5AKe3mtdczyt7khgG1IV0XoP1YhnmCWgxpTuEWCqxfYh0XXouURKulp1jrpaU%2FvLA2ziH9LfCCUJPqNe4Ydqtuwbfc%2F6PSLT%2FCYYfr9yk0%2BMNdZzkEHd%2BPJSlhmhO1vnkd2CZZfHDK823w16jC%2F9FLkDsZrotxnnWTEOtjIu7wQ7CCSFGId&X-Amz-Signature=41464c1fd752e42fd0751a92ce0fc2e7d18034995d62dfec2225f117740a03e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOE4TMN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZn8q2cfWqR5wiCDy%2FJwcuIykDJSH4rwgnjOyvrZY%2FVAiA2tmgTLmxv%2B3ARB49a9rUwlggrOgtNsPA2Jnc7sMqK%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo5099WQ4fKbEKq3KtwDV%2FbnwaW0gFVkF34gFio%2Fj%2B8ROKVt%2BvOXgtCnSVSBBn%2Fe0ZrN8bgE3Av9D4AM2OYmmqg3fVeklSNgBrnfJTU1irBBkoWDNCtY6y69dVucHM7pUevENnCt2VNN5LWj5Q4Q0owqdKfvYPlrJ2OxFFpaFiWR6oxGl0w6fP35ODitUlgvBdw0MQkL%2BRuYukLNnE3YV5SeJ8dzyC0iKYkgSekXmVgAwug7J4S%2BH86RL1GuktimbWn3S6gI%2F0ht%2F6XBRluhbk3lCwZ1fztynB7eLJM4C8utBb47QPlmY0lTqpATYpsdBJWgoZGNuzOXGN1F8EcAmKmQIpZDveeokKdY9O2ATsO1n2zFaXjTecCcflF3B8C%2FWBiaFoOLg1cv8cYOFx6tcco4QcnZWXnrvJSbvn1ovQTIBiZv1VPDS86OzT8bUk1rou6u7dl06KEv0lbKbN4djGf4T6TlM91uLB06e%2FsSEaseAvHZ7KmkTY6QZpzisoYIiMb4cCH4NIoN0MTmC2FCc9I%2BDwK80fy%2F9Y9KZ8Z%2FMGsXqfNAqtMv8Jw%2B6QNzvoH%2FJJZkFnYjSt5YTjC%2B7kLLDd%2Bn3SkkPeh3S1%2BCgWpWDquI%2BimiFo%2F3ZhXOSR%2FE7sTzm6wh5FJ7TIpUTMMw8belwgY6pgF9%2F0ifkNN%2FfZWnZBXck3ZQpP8QQ30Tzbot2ndMnfD6D5AKe3mtdczyt7khgG1IV0XoP1YhnmCWgxpTuEWCqxfYh0XXouURKulp1jrpaU%2FvLA2ziH9LfCCUJPqNe4Ydqtuwbfc%2F6PSLT%2FCYYfr9yk0%2BMNdZzkEHd%2BPJSlhmhO1vnkd2CZZfHDK823w16jC%2F9FLkDsZrotxnnWTEOtjIu7wQ7CCSFGId&X-Amz-Signature=0318a233b1cb3cf3028d4c2490dbdeae32259764d77e02f27f2d36fce40563bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOE4TMN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZn8q2cfWqR5wiCDy%2FJwcuIykDJSH4rwgnjOyvrZY%2FVAiA2tmgTLmxv%2B3ARB49a9rUwlggrOgtNsPA2Jnc7sMqK%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo5099WQ4fKbEKq3KtwDV%2FbnwaW0gFVkF34gFio%2Fj%2B8ROKVt%2BvOXgtCnSVSBBn%2Fe0ZrN8bgE3Av9D4AM2OYmmqg3fVeklSNgBrnfJTU1irBBkoWDNCtY6y69dVucHM7pUevENnCt2VNN5LWj5Q4Q0owqdKfvYPlrJ2OxFFpaFiWR6oxGl0w6fP35ODitUlgvBdw0MQkL%2BRuYukLNnE3YV5SeJ8dzyC0iKYkgSekXmVgAwug7J4S%2BH86RL1GuktimbWn3S6gI%2F0ht%2F6XBRluhbk3lCwZ1fztynB7eLJM4C8utBb47QPlmY0lTqpATYpsdBJWgoZGNuzOXGN1F8EcAmKmQIpZDveeokKdY9O2ATsO1n2zFaXjTecCcflF3B8C%2FWBiaFoOLg1cv8cYOFx6tcco4QcnZWXnrvJSbvn1ovQTIBiZv1VPDS86OzT8bUk1rou6u7dl06KEv0lbKbN4djGf4T6TlM91uLB06e%2FsSEaseAvHZ7KmkTY6QZpzisoYIiMb4cCH4NIoN0MTmC2FCc9I%2BDwK80fy%2F9Y9KZ8Z%2FMGsXqfNAqtMv8Jw%2B6QNzvoH%2FJJZkFnYjSt5YTjC%2B7kLLDd%2Bn3SkkPeh3S1%2BCgWpWDquI%2BimiFo%2F3ZhXOSR%2FE7sTzm6wh5FJ7TIpUTMMw8belwgY6pgF9%2F0ifkNN%2FfZWnZBXck3ZQpP8QQ30Tzbot2ndMnfD6D5AKe3mtdczyt7khgG1IV0XoP1YhnmCWgxpTuEWCqxfYh0XXouURKulp1jrpaU%2FvLA2ziH9LfCCUJPqNe4Ydqtuwbfc%2F6PSLT%2FCYYfr9yk0%2BMNdZzkEHd%2BPJSlhmhO1vnkd2CZZfHDK823w16jC%2F9FLkDsZrotxnnWTEOtjIu7wQ7CCSFGId&X-Amz-Signature=f226248fa58c5bc70387aacd88f1db36bc38fb3323a4fdf4c094d6ec08168e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOE4TMN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZn8q2cfWqR5wiCDy%2FJwcuIykDJSH4rwgnjOyvrZY%2FVAiA2tmgTLmxv%2B3ARB49a9rUwlggrOgtNsPA2Jnc7sMqK%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo5099WQ4fKbEKq3KtwDV%2FbnwaW0gFVkF34gFio%2Fj%2B8ROKVt%2BvOXgtCnSVSBBn%2Fe0ZrN8bgE3Av9D4AM2OYmmqg3fVeklSNgBrnfJTU1irBBkoWDNCtY6y69dVucHM7pUevENnCt2VNN5LWj5Q4Q0owqdKfvYPlrJ2OxFFpaFiWR6oxGl0w6fP35ODitUlgvBdw0MQkL%2BRuYukLNnE3YV5SeJ8dzyC0iKYkgSekXmVgAwug7J4S%2BH86RL1GuktimbWn3S6gI%2F0ht%2F6XBRluhbk3lCwZ1fztynB7eLJM4C8utBb47QPlmY0lTqpATYpsdBJWgoZGNuzOXGN1F8EcAmKmQIpZDveeokKdY9O2ATsO1n2zFaXjTecCcflF3B8C%2FWBiaFoOLg1cv8cYOFx6tcco4QcnZWXnrvJSbvn1ovQTIBiZv1VPDS86OzT8bUk1rou6u7dl06KEv0lbKbN4djGf4T6TlM91uLB06e%2FsSEaseAvHZ7KmkTY6QZpzisoYIiMb4cCH4NIoN0MTmC2FCc9I%2BDwK80fy%2F9Y9KZ8Z%2FMGsXqfNAqtMv8Jw%2B6QNzvoH%2FJJZkFnYjSt5YTjC%2B7kLLDd%2Bn3SkkPeh3S1%2BCgWpWDquI%2BimiFo%2F3ZhXOSR%2FE7sTzm6wh5FJ7TIpUTMMw8belwgY6pgF9%2F0ifkNN%2FfZWnZBXck3ZQpP8QQ30Tzbot2ndMnfD6D5AKe3mtdczyt7khgG1IV0XoP1YhnmCWgxpTuEWCqxfYh0XXouURKulp1jrpaU%2FvLA2ziH9LfCCUJPqNe4Ydqtuwbfc%2F6PSLT%2FCYYfr9yk0%2BMNdZzkEHd%2BPJSlhmhO1vnkd2CZZfHDK823w16jC%2F9FLkDsZrotxnnWTEOtjIu7wQ7CCSFGId&X-Amz-Signature=2d33a1d752accaa25775151bed2e91782d68dc2c56895eb9a04042ed50be4057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOE4TMN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZn8q2cfWqR5wiCDy%2FJwcuIykDJSH4rwgnjOyvrZY%2FVAiA2tmgTLmxv%2B3ARB49a9rUwlggrOgtNsPA2Jnc7sMqK%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo5099WQ4fKbEKq3KtwDV%2FbnwaW0gFVkF34gFio%2Fj%2B8ROKVt%2BvOXgtCnSVSBBn%2Fe0ZrN8bgE3Av9D4AM2OYmmqg3fVeklSNgBrnfJTU1irBBkoWDNCtY6y69dVucHM7pUevENnCt2VNN5LWj5Q4Q0owqdKfvYPlrJ2OxFFpaFiWR6oxGl0w6fP35ODitUlgvBdw0MQkL%2BRuYukLNnE3YV5SeJ8dzyC0iKYkgSekXmVgAwug7J4S%2BH86RL1GuktimbWn3S6gI%2F0ht%2F6XBRluhbk3lCwZ1fztynB7eLJM4C8utBb47QPlmY0lTqpATYpsdBJWgoZGNuzOXGN1F8EcAmKmQIpZDveeokKdY9O2ATsO1n2zFaXjTecCcflF3B8C%2FWBiaFoOLg1cv8cYOFx6tcco4QcnZWXnrvJSbvn1ovQTIBiZv1VPDS86OzT8bUk1rou6u7dl06KEv0lbKbN4djGf4T6TlM91uLB06e%2FsSEaseAvHZ7KmkTY6QZpzisoYIiMb4cCH4NIoN0MTmC2FCc9I%2BDwK80fy%2F9Y9KZ8Z%2FMGsXqfNAqtMv8Jw%2B6QNzvoH%2FJJZkFnYjSt5YTjC%2B7kLLDd%2Bn3SkkPeh3S1%2BCgWpWDquI%2BimiFo%2F3ZhXOSR%2FE7sTzm6wh5FJ7TIpUTMMw8belwgY6pgF9%2F0ifkNN%2FfZWnZBXck3ZQpP8QQ30Tzbot2ndMnfD6D5AKe3mtdczyt7khgG1IV0XoP1YhnmCWgxpTuEWCqxfYh0XXouURKulp1jrpaU%2FvLA2ziH9LfCCUJPqNe4Ydqtuwbfc%2F6PSLT%2FCYYfr9yk0%2BMNdZzkEHd%2BPJSlhmhO1vnkd2CZZfHDK823w16jC%2F9FLkDsZrotxnnWTEOtjIu7wQ7CCSFGId&X-Amz-Signature=bd6610183696c6ccd604dc7812e4f7b2c0f2bc56377fb47d9df0a39f429d5960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOE4TMN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZn8q2cfWqR5wiCDy%2FJwcuIykDJSH4rwgnjOyvrZY%2FVAiA2tmgTLmxv%2B3ARB49a9rUwlggrOgtNsPA2Jnc7sMqK%2FiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIo5099WQ4fKbEKq3KtwDV%2FbnwaW0gFVkF34gFio%2Fj%2B8ROKVt%2BvOXgtCnSVSBBn%2Fe0ZrN8bgE3Av9D4AM2OYmmqg3fVeklSNgBrnfJTU1irBBkoWDNCtY6y69dVucHM7pUevENnCt2VNN5LWj5Q4Q0owqdKfvYPlrJ2OxFFpaFiWR6oxGl0w6fP35ODitUlgvBdw0MQkL%2BRuYukLNnE3YV5SeJ8dzyC0iKYkgSekXmVgAwug7J4S%2BH86RL1GuktimbWn3S6gI%2F0ht%2F6XBRluhbk3lCwZ1fztynB7eLJM4C8utBb47QPlmY0lTqpATYpsdBJWgoZGNuzOXGN1F8EcAmKmQIpZDveeokKdY9O2ATsO1n2zFaXjTecCcflF3B8C%2FWBiaFoOLg1cv8cYOFx6tcco4QcnZWXnrvJSbvn1ovQTIBiZv1VPDS86OzT8bUk1rou6u7dl06KEv0lbKbN4djGf4T6TlM91uLB06e%2FsSEaseAvHZ7KmkTY6QZpzisoYIiMb4cCH4NIoN0MTmC2FCc9I%2BDwK80fy%2F9Y9KZ8Z%2FMGsXqfNAqtMv8Jw%2B6QNzvoH%2FJJZkFnYjSt5YTjC%2B7kLLDd%2Bn3SkkPeh3S1%2BCgWpWDquI%2BimiFo%2F3ZhXOSR%2FE7sTzm6wh5FJ7TIpUTMMw8belwgY6pgF9%2F0ifkNN%2FfZWnZBXck3ZQpP8QQ30Tzbot2ndMnfD6D5AKe3mtdczyt7khgG1IV0XoP1YhnmCWgxpTuEWCqxfYh0XXouURKulp1jrpaU%2FvLA2ziH9LfCCUJPqNe4Ydqtuwbfc%2F6PSLT%2FCYYfr9yk0%2BMNdZzkEHd%2BPJSlhmhO1vnkd2CZZfHDK823w16jC%2F9FLkDsZrotxnnWTEOtjIu7wQ7CCSFGId&X-Amz-Signature=16697b80dea05806742c64f65d0a9f4220bddb425ed39afebb3a328ba44fbe87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
