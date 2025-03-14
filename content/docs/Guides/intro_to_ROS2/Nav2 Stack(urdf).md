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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OMPJO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy3oyrg%2BKCrnSGIMChbH%2BYADb%2BI8HHNZRXozjpHaGJpAiBRI8lBMNxyuIQldfeYRS%2FJ6MBaR3AutXy0wlrq3CxglSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtACREgD9LKvIcpnKtwD4IbO1gBfPdPeh6YCay1vcTUler6T0PEizjIJa1WsWAuLZLDMZh2s5qnA3VZHF4P2Me2ewq0%2BsvY6yWcYnb1d%2BukFymZL%2BA57ZYzBaLebsYEHef6%2Fqsg%2FabSEStq%2BuDMp2KQy%2BUk6JdQYG7p3hu3t2zLpDSWCudumv7zyYh7dI1KN7UrMXXBKKyiBt0ioc5i6VfwccEq%2ByRMUuzrHCZ%2Fmgx%2FcsPq%2BM7338zdrvQV%2Fv1Sm%2BrP9GzJaRTP4M1toh5OhI6ALNafIaDitqTSqpSLcoqyOkiCcEz19YiSVS7B%2FGKayiCubTmlSvWASJ4udE9S2HscqeURY2GfffTVhGAdxNzT0fXbwRvOkmgHj5Q%2FHSt6WawoOplaloGvYxkITa5mwtp%2Bw%2Fw6pTyynei2IR5Xhn9IUvGuaziRei43mZ1XZGEyEmqYuT%2Fs6hk%2F888J2vzpoyWPGjJsNZjfArnyJz42P81XUu2tk%2FyqOmGtsetj7QP9rrpbksE0mH5HyHRBkjTApQBjz4UiRMxyWeOoasksaJ8q%2BnWE%2F54hqNkDRujImOdjnAnE8lQP0jUqWckzmKftMtZwHDhXfolEo%2BYN64QrL4MbUAaVA%2Frp6J8m3wZJNg8NHMhvnwstDUZ5S9QQw0tDSvgY6pgET29a8ysWch37EOGlpt578AVKk2%2FQJl30LnBsx7%2BIYEDzjjZAuvoFAO7C6R3hUQJEwdm4KW4T00GZci4E77rVCTnxdhIc0unLuk0n%2FC8oaKWD2XKU%2BUHNYFskQumLOQ5qjEAiuqmWZ%2Bty4UPha75YXW8lthvsJGOAKO66rAsA6cxSrhG759Xh7r9%2BAD6Q6KHGsaxZzNbN581OulR7Vc8NgbnhilEIS&X-Amz-Signature=881a5f5df506a15c9256bcc04958049ce68406b989cec105efb66abf1c374c96&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OMPJO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy3oyrg%2BKCrnSGIMChbH%2BYADb%2BI8HHNZRXozjpHaGJpAiBRI8lBMNxyuIQldfeYRS%2FJ6MBaR3AutXy0wlrq3CxglSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtACREgD9LKvIcpnKtwD4IbO1gBfPdPeh6YCay1vcTUler6T0PEizjIJa1WsWAuLZLDMZh2s5qnA3VZHF4P2Me2ewq0%2BsvY6yWcYnb1d%2BukFymZL%2BA57ZYzBaLebsYEHef6%2Fqsg%2FabSEStq%2BuDMp2KQy%2BUk6JdQYG7p3hu3t2zLpDSWCudumv7zyYh7dI1KN7UrMXXBKKyiBt0ioc5i6VfwccEq%2ByRMUuzrHCZ%2Fmgx%2FcsPq%2BM7338zdrvQV%2Fv1Sm%2BrP9GzJaRTP4M1toh5OhI6ALNafIaDitqTSqpSLcoqyOkiCcEz19YiSVS7B%2FGKayiCubTmlSvWASJ4udE9S2HscqeURY2GfffTVhGAdxNzT0fXbwRvOkmgHj5Q%2FHSt6WawoOplaloGvYxkITa5mwtp%2Bw%2Fw6pTyynei2IR5Xhn9IUvGuaziRei43mZ1XZGEyEmqYuT%2Fs6hk%2F888J2vzpoyWPGjJsNZjfArnyJz42P81XUu2tk%2FyqOmGtsetj7QP9rrpbksE0mH5HyHRBkjTApQBjz4UiRMxyWeOoasksaJ8q%2BnWE%2F54hqNkDRujImOdjnAnE8lQP0jUqWckzmKftMtZwHDhXfolEo%2BYN64QrL4MbUAaVA%2Frp6J8m3wZJNg8NHMhvnwstDUZ5S9QQw0tDSvgY6pgET29a8ysWch37EOGlpt578AVKk2%2FQJl30LnBsx7%2BIYEDzjjZAuvoFAO7C6R3hUQJEwdm4KW4T00GZci4E77rVCTnxdhIc0unLuk0n%2FC8oaKWD2XKU%2BUHNYFskQumLOQ5qjEAiuqmWZ%2Bty4UPha75YXW8lthvsJGOAKO66rAsA6cxSrhG759Xh7r9%2BAD6Q6KHGsaxZzNbN581OulR7Vc8NgbnhilEIS&X-Amz-Signature=bb6c3d6bf48d264c973c6748d4f7b3d9846534b034b845cf4254eefc23a54798&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OMPJO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy3oyrg%2BKCrnSGIMChbH%2BYADb%2BI8HHNZRXozjpHaGJpAiBRI8lBMNxyuIQldfeYRS%2FJ6MBaR3AutXy0wlrq3CxglSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtACREgD9LKvIcpnKtwD4IbO1gBfPdPeh6YCay1vcTUler6T0PEizjIJa1WsWAuLZLDMZh2s5qnA3VZHF4P2Me2ewq0%2BsvY6yWcYnb1d%2BukFymZL%2BA57ZYzBaLebsYEHef6%2Fqsg%2FabSEStq%2BuDMp2KQy%2BUk6JdQYG7p3hu3t2zLpDSWCudumv7zyYh7dI1KN7UrMXXBKKyiBt0ioc5i6VfwccEq%2ByRMUuzrHCZ%2Fmgx%2FcsPq%2BM7338zdrvQV%2Fv1Sm%2BrP9GzJaRTP4M1toh5OhI6ALNafIaDitqTSqpSLcoqyOkiCcEz19YiSVS7B%2FGKayiCubTmlSvWASJ4udE9S2HscqeURY2GfffTVhGAdxNzT0fXbwRvOkmgHj5Q%2FHSt6WawoOplaloGvYxkITa5mwtp%2Bw%2Fw6pTyynei2IR5Xhn9IUvGuaziRei43mZ1XZGEyEmqYuT%2Fs6hk%2F888J2vzpoyWPGjJsNZjfArnyJz42P81XUu2tk%2FyqOmGtsetj7QP9rrpbksE0mH5HyHRBkjTApQBjz4UiRMxyWeOoasksaJ8q%2BnWE%2F54hqNkDRujImOdjnAnE8lQP0jUqWckzmKftMtZwHDhXfolEo%2BYN64QrL4MbUAaVA%2Frp6J8m3wZJNg8NHMhvnwstDUZ5S9QQw0tDSvgY6pgET29a8ysWch37EOGlpt578AVKk2%2FQJl30LnBsx7%2BIYEDzjjZAuvoFAO7C6R3hUQJEwdm4KW4T00GZci4E77rVCTnxdhIc0unLuk0n%2FC8oaKWD2XKU%2BUHNYFskQumLOQ5qjEAiuqmWZ%2Bty4UPha75YXW8lthvsJGOAKO66rAsA6cxSrhG759Xh7r9%2BAD6Q6KHGsaxZzNbN581OulR7Vc8NgbnhilEIS&X-Amz-Signature=fdf95532739b4548014db0bc769f4bfa0b680fe66f4d58b9b64b209bfd4fd936&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OMPJO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy3oyrg%2BKCrnSGIMChbH%2BYADb%2BI8HHNZRXozjpHaGJpAiBRI8lBMNxyuIQldfeYRS%2FJ6MBaR3AutXy0wlrq3CxglSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtACREgD9LKvIcpnKtwD4IbO1gBfPdPeh6YCay1vcTUler6T0PEizjIJa1WsWAuLZLDMZh2s5qnA3VZHF4P2Me2ewq0%2BsvY6yWcYnb1d%2BukFymZL%2BA57ZYzBaLebsYEHef6%2Fqsg%2FabSEStq%2BuDMp2KQy%2BUk6JdQYG7p3hu3t2zLpDSWCudumv7zyYh7dI1KN7UrMXXBKKyiBt0ioc5i6VfwccEq%2ByRMUuzrHCZ%2Fmgx%2FcsPq%2BM7338zdrvQV%2Fv1Sm%2BrP9GzJaRTP4M1toh5OhI6ALNafIaDitqTSqpSLcoqyOkiCcEz19YiSVS7B%2FGKayiCubTmlSvWASJ4udE9S2HscqeURY2GfffTVhGAdxNzT0fXbwRvOkmgHj5Q%2FHSt6WawoOplaloGvYxkITa5mwtp%2Bw%2Fw6pTyynei2IR5Xhn9IUvGuaziRei43mZ1XZGEyEmqYuT%2Fs6hk%2F888J2vzpoyWPGjJsNZjfArnyJz42P81XUu2tk%2FyqOmGtsetj7QP9rrpbksE0mH5HyHRBkjTApQBjz4UiRMxyWeOoasksaJ8q%2BnWE%2F54hqNkDRujImOdjnAnE8lQP0jUqWckzmKftMtZwHDhXfolEo%2BYN64QrL4MbUAaVA%2Frp6J8m3wZJNg8NHMhvnwstDUZ5S9QQw0tDSvgY6pgET29a8ysWch37EOGlpt578AVKk2%2FQJl30LnBsx7%2BIYEDzjjZAuvoFAO7C6R3hUQJEwdm4KW4T00GZci4E77rVCTnxdhIc0unLuk0n%2FC8oaKWD2XKU%2BUHNYFskQumLOQ5qjEAiuqmWZ%2Bty4UPha75YXW8lthvsJGOAKO66rAsA6cxSrhG759Xh7r9%2BAD6Q6KHGsaxZzNbN581OulR7Vc8NgbnhilEIS&X-Amz-Signature=c8eceabc92f8f97ae7da1f232b8ff25a66cccebb0b22d169c0c50c050667ff85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OMPJO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy3oyrg%2BKCrnSGIMChbH%2BYADb%2BI8HHNZRXozjpHaGJpAiBRI8lBMNxyuIQldfeYRS%2FJ6MBaR3AutXy0wlrq3CxglSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtACREgD9LKvIcpnKtwD4IbO1gBfPdPeh6YCay1vcTUler6T0PEizjIJa1WsWAuLZLDMZh2s5qnA3VZHF4P2Me2ewq0%2BsvY6yWcYnb1d%2BukFymZL%2BA57ZYzBaLebsYEHef6%2Fqsg%2FabSEStq%2BuDMp2KQy%2BUk6JdQYG7p3hu3t2zLpDSWCudumv7zyYh7dI1KN7UrMXXBKKyiBt0ioc5i6VfwccEq%2ByRMUuzrHCZ%2Fmgx%2FcsPq%2BM7338zdrvQV%2Fv1Sm%2BrP9GzJaRTP4M1toh5OhI6ALNafIaDitqTSqpSLcoqyOkiCcEz19YiSVS7B%2FGKayiCubTmlSvWASJ4udE9S2HscqeURY2GfffTVhGAdxNzT0fXbwRvOkmgHj5Q%2FHSt6WawoOplaloGvYxkITa5mwtp%2Bw%2Fw6pTyynei2IR5Xhn9IUvGuaziRei43mZ1XZGEyEmqYuT%2Fs6hk%2F888J2vzpoyWPGjJsNZjfArnyJz42P81XUu2tk%2FyqOmGtsetj7QP9rrpbksE0mH5HyHRBkjTApQBjz4UiRMxyWeOoasksaJ8q%2BnWE%2F54hqNkDRujImOdjnAnE8lQP0jUqWckzmKftMtZwHDhXfolEo%2BYN64QrL4MbUAaVA%2Frp6J8m3wZJNg8NHMhvnwstDUZ5S9QQw0tDSvgY6pgET29a8ysWch37EOGlpt578AVKk2%2FQJl30LnBsx7%2BIYEDzjjZAuvoFAO7C6R3hUQJEwdm4KW4T00GZci4E77rVCTnxdhIc0unLuk0n%2FC8oaKWD2XKU%2BUHNYFskQumLOQ5qjEAiuqmWZ%2Bty4UPha75YXW8lthvsJGOAKO66rAsA6cxSrhG759Xh7r9%2BAD6Q6KHGsaxZzNbN581OulR7Vc8NgbnhilEIS&X-Amz-Signature=27f0eb4a8d273e00c4150aa6fc41206b92bb721f3905f202f801f534cbe27d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OMPJO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy3oyrg%2BKCrnSGIMChbH%2BYADb%2BI8HHNZRXozjpHaGJpAiBRI8lBMNxyuIQldfeYRS%2FJ6MBaR3AutXy0wlrq3CxglSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXtACREgD9LKvIcpnKtwD4IbO1gBfPdPeh6YCay1vcTUler6T0PEizjIJa1WsWAuLZLDMZh2s5qnA3VZHF4P2Me2ewq0%2BsvY6yWcYnb1d%2BukFymZL%2BA57ZYzBaLebsYEHef6%2Fqsg%2FabSEStq%2BuDMp2KQy%2BUk6JdQYG7p3hu3t2zLpDSWCudumv7zyYh7dI1KN7UrMXXBKKyiBt0ioc5i6VfwccEq%2ByRMUuzrHCZ%2Fmgx%2FcsPq%2BM7338zdrvQV%2Fv1Sm%2BrP9GzJaRTP4M1toh5OhI6ALNafIaDitqTSqpSLcoqyOkiCcEz19YiSVS7B%2FGKayiCubTmlSvWASJ4udE9S2HscqeURY2GfffTVhGAdxNzT0fXbwRvOkmgHj5Q%2FHSt6WawoOplaloGvYxkITa5mwtp%2Bw%2Fw6pTyynei2IR5Xhn9IUvGuaziRei43mZ1XZGEyEmqYuT%2Fs6hk%2F888J2vzpoyWPGjJsNZjfArnyJz42P81XUu2tk%2FyqOmGtsetj7QP9rrpbksE0mH5HyHRBkjTApQBjz4UiRMxyWeOoasksaJ8q%2BnWE%2F54hqNkDRujImOdjnAnE8lQP0jUqWckzmKftMtZwHDhXfolEo%2BYN64QrL4MbUAaVA%2Frp6J8m3wZJNg8NHMhvnwstDUZ5S9QQw0tDSvgY6pgET29a8ysWch37EOGlpt578AVKk2%2FQJl30LnBsx7%2BIYEDzjjZAuvoFAO7C6R3hUQJEwdm4KW4T00GZci4E77rVCTnxdhIc0unLuk0n%2FC8oaKWD2XKU%2BUHNYFskQumLOQ5qjEAiuqmWZ%2Bty4UPha75YXW8lthvsJGOAKO66rAsA6cxSrhG759Xh7r9%2BAD6Q6KHGsaxZzNbN581OulR7Vc8NgbnhilEIS&X-Amz-Signature=440fca022ff06115280b4511bb192728dc694e04bbedd2c131dfe1119bed5a1a&X-Amz-SignedHeaders=host&x-id=GetObject)
