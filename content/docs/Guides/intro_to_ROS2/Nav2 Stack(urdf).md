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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZ5OQWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDMAjleVDIsx1aRysjb5KwapRxtiTOGrVmZn9wijTGahAiBClr3nni3NfxgnPGQdGTT%2BjkPrAzEoGwqMmvf5sn9SXyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpCV4MEJsOkXwfB2KtwDa8yR7JDJYB8LaGKBhSgBGXqrdlxezLMwPncsjXJD9Ih3s4dRj0W42V1VU0%2BcN3iw6uSqOvpjlGP26s7x18hoz3yl0RQE%2BYpTntmauWc0Sia1fYRU4YYUkf55bL57E%2FIHybaE98KOiirPyJk01v2NwDsKHl7xINnq2eRotXcYBMDOP87iP0jxDiWEReaf0m%2BDolevWyzNqsi3J22pJ2q4Lw4eQ8%2BJCCZtwBZyTilLvimKk32pW%2FT%2B%2BYHKjdZnYXROJPY0lHuZPeMPKYSiKvZCx7Kk1Rqa%2BGhpz6TZt6PK7gxWbjTbNKYQmycwAP5PRwfpZmTU5oA1EV%2FD6uP%2F1M9%2BryXxbRm4wtE4IDRyWl3mdSnnJvx8i7i4EDWclBoCdo9CzILPpf4BBWtQPvjqRiNA8ncvATYffs%2FQSYos6Ein4QNDQNwJc9snbaYqh6Xuh1b1SkpIRCUCU7FshiT4Nl%2Bd34uVVZv5CS5hPRnFxhIfBQc4rD%2F3viDdj9pvQm9WwrvuQ3H%2FDAn%2BbcMaAPagGiVrxY963DbFNsQk39qoAMgdnkFEryAsh0uc8VF7nQKs8P4goGmX6BRt3HXBqtt3WKnwziCQcYuoMb8csCqlUN%2FGUJBMU5KS3JcGbMeOi28w3OXZvwY6pgEaNcpvO3KLCabonv9dv3QY6qUoyI100IXIji3UkXq4cY%2FPOCcwsmgAYtAamFICV%2BvfP8GOyurIhULUoDKv%2FQn03470MSXu3jhkcP50ZvmxEvNvVaKESkwlZIqXAR77xzQ93ljnJFMZWSA9KXdeBBmYQUK606zABzaitkl0KuTXAdu1kHmPJ6g%2B3igOuskjW2YEs3kuXxXJp4Jjgff7vHKnqiQkaR61&X-Amz-Signature=67db2f2b13a3e80573f3b4434f566ebdaaadedcb95d1aac717e2476e581f59b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZ5OQWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDMAjleVDIsx1aRysjb5KwapRxtiTOGrVmZn9wijTGahAiBClr3nni3NfxgnPGQdGTT%2BjkPrAzEoGwqMmvf5sn9SXyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpCV4MEJsOkXwfB2KtwDa8yR7JDJYB8LaGKBhSgBGXqrdlxezLMwPncsjXJD9Ih3s4dRj0W42V1VU0%2BcN3iw6uSqOvpjlGP26s7x18hoz3yl0RQE%2BYpTntmauWc0Sia1fYRU4YYUkf55bL57E%2FIHybaE98KOiirPyJk01v2NwDsKHl7xINnq2eRotXcYBMDOP87iP0jxDiWEReaf0m%2BDolevWyzNqsi3J22pJ2q4Lw4eQ8%2BJCCZtwBZyTilLvimKk32pW%2FT%2B%2BYHKjdZnYXROJPY0lHuZPeMPKYSiKvZCx7Kk1Rqa%2BGhpz6TZt6PK7gxWbjTbNKYQmycwAP5PRwfpZmTU5oA1EV%2FD6uP%2F1M9%2BryXxbRm4wtE4IDRyWl3mdSnnJvx8i7i4EDWclBoCdo9CzILPpf4BBWtQPvjqRiNA8ncvATYffs%2FQSYos6Ein4QNDQNwJc9snbaYqh6Xuh1b1SkpIRCUCU7FshiT4Nl%2Bd34uVVZv5CS5hPRnFxhIfBQc4rD%2F3viDdj9pvQm9WwrvuQ3H%2FDAn%2BbcMaAPagGiVrxY963DbFNsQk39qoAMgdnkFEryAsh0uc8VF7nQKs8P4goGmX6BRt3HXBqtt3WKnwziCQcYuoMb8csCqlUN%2FGUJBMU5KS3JcGbMeOi28w3OXZvwY6pgEaNcpvO3KLCabonv9dv3QY6qUoyI100IXIji3UkXq4cY%2FPOCcwsmgAYtAamFICV%2BvfP8GOyurIhULUoDKv%2FQn03470MSXu3jhkcP50ZvmxEvNvVaKESkwlZIqXAR77xzQ93ljnJFMZWSA9KXdeBBmYQUK606zABzaitkl0KuTXAdu1kHmPJ6g%2B3igOuskjW2YEs3kuXxXJp4Jjgff7vHKnqiQkaR61&X-Amz-Signature=1ea646a8d4c0ef28e204d7a5bb742e3b4d2ac856a3d0e46a42cfc37d0900bc67&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZ5OQWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDMAjleVDIsx1aRysjb5KwapRxtiTOGrVmZn9wijTGahAiBClr3nni3NfxgnPGQdGTT%2BjkPrAzEoGwqMmvf5sn9SXyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpCV4MEJsOkXwfB2KtwDa8yR7JDJYB8LaGKBhSgBGXqrdlxezLMwPncsjXJD9Ih3s4dRj0W42V1VU0%2BcN3iw6uSqOvpjlGP26s7x18hoz3yl0RQE%2BYpTntmauWc0Sia1fYRU4YYUkf55bL57E%2FIHybaE98KOiirPyJk01v2NwDsKHl7xINnq2eRotXcYBMDOP87iP0jxDiWEReaf0m%2BDolevWyzNqsi3J22pJ2q4Lw4eQ8%2BJCCZtwBZyTilLvimKk32pW%2FT%2B%2BYHKjdZnYXROJPY0lHuZPeMPKYSiKvZCx7Kk1Rqa%2BGhpz6TZt6PK7gxWbjTbNKYQmycwAP5PRwfpZmTU5oA1EV%2FD6uP%2F1M9%2BryXxbRm4wtE4IDRyWl3mdSnnJvx8i7i4EDWclBoCdo9CzILPpf4BBWtQPvjqRiNA8ncvATYffs%2FQSYos6Ein4QNDQNwJc9snbaYqh6Xuh1b1SkpIRCUCU7FshiT4Nl%2Bd34uVVZv5CS5hPRnFxhIfBQc4rD%2F3viDdj9pvQm9WwrvuQ3H%2FDAn%2BbcMaAPagGiVrxY963DbFNsQk39qoAMgdnkFEryAsh0uc8VF7nQKs8P4goGmX6BRt3HXBqtt3WKnwziCQcYuoMb8csCqlUN%2FGUJBMU5KS3JcGbMeOi28w3OXZvwY6pgEaNcpvO3KLCabonv9dv3QY6qUoyI100IXIji3UkXq4cY%2FPOCcwsmgAYtAamFICV%2BvfP8GOyurIhULUoDKv%2FQn03470MSXu3jhkcP50ZvmxEvNvVaKESkwlZIqXAR77xzQ93ljnJFMZWSA9KXdeBBmYQUK606zABzaitkl0KuTXAdu1kHmPJ6g%2B3igOuskjW2YEs3kuXxXJp4Jjgff7vHKnqiQkaR61&X-Amz-Signature=e2bcd1bfc94b52b201e57daca89093a7b4f1f37dbd6073882dd9fbd56efcabad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZ5OQWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDMAjleVDIsx1aRysjb5KwapRxtiTOGrVmZn9wijTGahAiBClr3nni3NfxgnPGQdGTT%2BjkPrAzEoGwqMmvf5sn9SXyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpCV4MEJsOkXwfB2KtwDa8yR7JDJYB8LaGKBhSgBGXqrdlxezLMwPncsjXJD9Ih3s4dRj0W42V1VU0%2BcN3iw6uSqOvpjlGP26s7x18hoz3yl0RQE%2BYpTntmauWc0Sia1fYRU4YYUkf55bL57E%2FIHybaE98KOiirPyJk01v2NwDsKHl7xINnq2eRotXcYBMDOP87iP0jxDiWEReaf0m%2BDolevWyzNqsi3J22pJ2q4Lw4eQ8%2BJCCZtwBZyTilLvimKk32pW%2FT%2B%2BYHKjdZnYXROJPY0lHuZPeMPKYSiKvZCx7Kk1Rqa%2BGhpz6TZt6PK7gxWbjTbNKYQmycwAP5PRwfpZmTU5oA1EV%2FD6uP%2F1M9%2BryXxbRm4wtE4IDRyWl3mdSnnJvx8i7i4EDWclBoCdo9CzILPpf4BBWtQPvjqRiNA8ncvATYffs%2FQSYos6Ein4QNDQNwJc9snbaYqh6Xuh1b1SkpIRCUCU7FshiT4Nl%2Bd34uVVZv5CS5hPRnFxhIfBQc4rD%2F3viDdj9pvQm9WwrvuQ3H%2FDAn%2BbcMaAPagGiVrxY963DbFNsQk39qoAMgdnkFEryAsh0uc8VF7nQKs8P4goGmX6BRt3HXBqtt3WKnwziCQcYuoMb8csCqlUN%2FGUJBMU5KS3JcGbMeOi28w3OXZvwY6pgEaNcpvO3KLCabonv9dv3QY6qUoyI100IXIji3UkXq4cY%2FPOCcwsmgAYtAamFICV%2BvfP8GOyurIhULUoDKv%2FQn03470MSXu3jhkcP50ZvmxEvNvVaKESkwlZIqXAR77xzQ93ljnJFMZWSA9KXdeBBmYQUK606zABzaitkl0KuTXAdu1kHmPJ6g%2B3igOuskjW2YEs3kuXxXJp4Jjgff7vHKnqiQkaR61&X-Amz-Signature=fefd9100db0d107b94325864382f6e7dadb4b1029c0e12150a3ed94651d08a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZ5OQWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDMAjleVDIsx1aRysjb5KwapRxtiTOGrVmZn9wijTGahAiBClr3nni3NfxgnPGQdGTT%2BjkPrAzEoGwqMmvf5sn9SXyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpCV4MEJsOkXwfB2KtwDa8yR7JDJYB8LaGKBhSgBGXqrdlxezLMwPncsjXJD9Ih3s4dRj0W42V1VU0%2BcN3iw6uSqOvpjlGP26s7x18hoz3yl0RQE%2BYpTntmauWc0Sia1fYRU4YYUkf55bL57E%2FIHybaE98KOiirPyJk01v2NwDsKHl7xINnq2eRotXcYBMDOP87iP0jxDiWEReaf0m%2BDolevWyzNqsi3J22pJ2q4Lw4eQ8%2BJCCZtwBZyTilLvimKk32pW%2FT%2B%2BYHKjdZnYXROJPY0lHuZPeMPKYSiKvZCx7Kk1Rqa%2BGhpz6TZt6PK7gxWbjTbNKYQmycwAP5PRwfpZmTU5oA1EV%2FD6uP%2F1M9%2BryXxbRm4wtE4IDRyWl3mdSnnJvx8i7i4EDWclBoCdo9CzILPpf4BBWtQPvjqRiNA8ncvATYffs%2FQSYos6Ein4QNDQNwJc9snbaYqh6Xuh1b1SkpIRCUCU7FshiT4Nl%2Bd34uVVZv5CS5hPRnFxhIfBQc4rD%2F3viDdj9pvQm9WwrvuQ3H%2FDAn%2BbcMaAPagGiVrxY963DbFNsQk39qoAMgdnkFEryAsh0uc8VF7nQKs8P4goGmX6BRt3HXBqtt3WKnwziCQcYuoMb8csCqlUN%2FGUJBMU5KS3JcGbMeOi28w3OXZvwY6pgEaNcpvO3KLCabonv9dv3QY6qUoyI100IXIji3UkXq4cY%2FPOCcwsmgAYtAamFICV%2BvfP8GOyurIhULUoDKv%2FQn03470MSXu3jhkcP50ZvmxEvNvVaKESkwlZIqXAR77xzQ93ljnJFMZWSA9KXdeBBmYQUK606zABzaitkl0KuTXAdu1kHmPJ6g%2B3igOuskjW2YEs3kuXxXJp4Jjgff7vHKnqiQkaR61&X-Amz-Signature=0ac1de9cd6c210a6e5a4eb51bc8a7786d721cfe7b535f37d69394cb17c47c1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZ5OQWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDMAjleVDIsx1aRysjb5KwapRxtiTOGrVmZn9wijTGahAiBClr3nni3NfxgnPGQdGTT%2BjkPrAzEoGwqMmvf5sn9SXyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfpCV4MEJsOkXwfB2KtwDa8yR7JDJYB8LaGKBhSgBGXqrdlxezLMwPncsjXJD9Ih3s4dRj0W42V1VU0%2BcN3iw6uSqOvpjlGP26s7x18hoz3yl0RQE%2BYpTntmauWc0Sia1fYRU4YYUkf55bL57E%2FIHybaE98KOiirPyJk01v2NwDsKHl7xINnq2eRotXcYBMDOP87iP0jxDiWEReaf0m%2BDolevWyzNqsi3J22pJ2q4Lw4eQ8%2BJCCZtwBZyTilLvimKk32pW%2FT%2B%2BYHKjdZnYXROJPY0lHuZPeMPKYSiKvZCx7Kk1Rqa%2BGhpz6TZt6PK7gxWbjTbNKYQmycwAP5PRwfpZmTU5oA1EV%2FD6uP%2F1M9%2BryXxbRm4wtE4IDRyWl3mdSnnJvx8i7i4EDWclBoCdo9CzILPpf4BBWtQPvjqRiNA8ncvATYffs%2FQSYos6Ein4QNDQNwJc9snbaYqh6Xuh1b1SkpIRCUCU7FshiT4Nl%2Bd34uVVZv5CS5hPRnFxhIfBQc4rD%2F3viDdj9pvQm9WwrvuQ3H%2FDAn%2BbcMaAPagGiVrxY963DbFNsQk39qoAMgdnkFEryAsh0uc8VF7nQKs8P4goGmX6BRt3HXBqtt3WKnwziCQcYuoMb8csCqlUN%2FGUJBMU5KS3JcGbMeOi28w3OXZvwY6pgEaNcpvO3KLCabonv9dv3QY6qUoyI100IXIji3UkXq4cY%2FPOCcwsmgAYtAamFICV%2BvfP8GOyurIhULUoDKv%2FQn03470MSXu3jhkcP50ZvmxEvNvVaKESkwlZIqXAR77xzQ93ljnJFMZWSA9KXdeBBmYQUK606zABzaitkl0KuTXAdu1kHmPJ6g%2B3igOuskjW2YEs3kuXxXJp4Jjgff7vHKnqiQkaR61&X-Amz-Signature=f456e65cc5261c6428e420dac37581362e03f03d2af7a44afb58de5f93e63cd1&X-Amz-SignedHeaders=host&x-id=GetObject)
