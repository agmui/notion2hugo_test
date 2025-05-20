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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEQC7AU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVqcoFGf3969HZ%2FwvV9fcZyquEmUPxrixkTlGGwiy%2FZAiAc7maY4e%2Bv3p0CA7eJKgvnp%2BpC%2Bog8pSgLz6Ef6iUxGiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6qMfLcwJ0koWh5ZKtwDYcolIWZe8fBsi2fYH2p%2BW3F6br9kHRBcRGqyWdpVnEkbViIffdlB6Fg7F3dcO%2FJEezEhDEgVCXIII319HfTiZU2rrKXkPvRuL9hOipylUsqc55dA%2BUd4xiUdYFQ4SbOO1ob2ael1aMC92xM%2BbbeunHl19NPj%2BQx7EpBk3ziDLYdf0oyDJwxTuwLXnqbm9p0unBSk%2Ba%2B8yfjpLpBCVFrMoCp4E4QEwPEp8WVhiLNysu21wEqueMg7KSLgTBeZ8flhSpOfveqSF9W%2Bf3aiqPqGCkRp%2F0%2BAWFm1s8AxAevQs4kZR7lyx6YnqLXRobMb5Wb4D3RTjg2SBHOzjPO9bQ2Wm2aQXuqXsE1Tg3OUCF1eHzWTQDVJBr7zWvVDeefIoKUKQYdp0PBp77f%2B3a1WQV3E6MTLf5kLSCXbBrBe5d0WlrDEW%2BHFjzB7AR9X8Y9Gx%2FqYKjE%2Bf7hMjm%2F711G2tyn85crO6IQF9U2vOQns7KrLj3o27VHHKEkpKo5cCmF6BdOVi7vCGgUZUk0z4J%2BW1w0Msx%2Bjx0%2FAfvoi6dnz9ydJ%2FVCKke4tC5mEk%2FuLBwQidmh99jBZ6zuFKIqub%2Fgvq%2FiXOE0G3PKNuMvZrQstW9OW6F2kLm9b1%2FNhjc5iRycwu%2F6ywQY6pgG8%2F0%2F8QN3A4M4UQFp%2F%2FGUAM2EmRyghwMt1Nlz6XK8WQnUzSIw%2FcNuzqxhsDy0TreFfyyN1vPQ%2BCPAZLTj1XOdh%2BmWDxLa3SXojU9sa0%2FvBlVhKwURtnhr9LqQSm7nCyelSfoPMkFu6bdI7b2EkvMk0fV9uxM127tMXncuqFs5bW7%2FEb6l91Q8NyGdIDzxZId5jr1aONlxsmBZYTTBlQhBKEWJBJnOS&X-Amz-Signature=bdd651eabdd9e50af4a983de670a3c71fca665c6064d22e265e43a905ed5e073&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEQC7AU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVqcoFGf3969HZ%2FwvV9fcZyquEmUPxrixkTlGGwiy%2FZAiAc7maY4e%2Bv3p0CA7eJKgvnp%2BpC%2Bog8pSgLz6Ef6iUxGiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6qMfLcwJ0koWh5ZKtwDYcolIWZe8fBsi2fYH2p%2BW3F6br9kHRBcRGqyWdpVnEkbViIffdlB6Fg7F3dcO%2FJEezEhDEgVCXIII319HfTiZU2rrKXkPvRuL9hOipylUsqc55dA%2BUd4xiUdYFQ4SbOO1ob2ael1aMC92xM%2BbbeunHl19NPj%2BQx7EpBk3ziDLYdf0oyDJwxTuwLXnqbm9p0unBSk%2Ba%2B8yfjpLpBCVFrMoCp4E4QEwPEp8WVhiLNysu21wEqueMg7KSLgTBeZ8flhSpOfveqSF9W%2Bf3aiqPqGCkRp%2F0%2BAWFm1s8AxAevQs4kZR7lyx6YnqLXRobMb5Wb4D3RTjg2SBHOzjPO9bQ2Wm2aQXuqXsE1Tg3OUCF1eHzWTQDVJBr7zWvVDeefIoKUKQYdp0PBp77f%2B3a1WQV3E6MTLf5kLSCXbBrBe5d0WlrDEW%2BHFjzB7AR9X8Y9Gx%2FqYKjE%2Bf7hMjm%2F711G2tyn85crO6IQF9U2vOQns7KrLj3o27VHHKEkpKo5cCmF6BdOVi7vCGgUZUk0z4J%2BW1w0Msx%2Bjx0%2FAfvoi6dnz9ydJ%2FVCKke4tC5mEk%2FuLBwQidmh99jBZ6zuFKIqub%2Fgvq%2FiXOE0G3PKNuMvZrQstW9OW6F2kLm9b1%2FNhjc5iRycwu%2F6ywQY6pgG8%2F0%2F8QN3A4M4UQFp%2F%2FGUAM2EmRyghwMt1Nlz6XK8WQnUzSIw%2FcNuzqxhsDy0TreFfyyN1vPQ%2BCPAZLTj1XOdh%2BmWDxLa3SXojU9sa0%2FvBlVhKwURtnhr9LqQSm7nCyelSfoPMkFu6bdI7b2EkvMk0fV9uxM127tMXncuqFs5bW7%2FEb6l91Q8NyGdIDzxZId5jr1aONlxsmBZYTTBlQhBKEWJBJnOS&X-Amz-Signature=1b2ca7562b35c5c8dce485e59d061397da70d41a28b821348cd84292e28c72e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEQC7AU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVqcoFGf3969HZ%2FwvV9fcZyquEmUPxrixkTlGGwiy%2FZAiAc7maY4e%2Bv3p0CA7eJKgvnp%2BpC%2Bog8pSgLz6Ef6iUxGiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6qMfLcwJ0koWh5ZKtwDYcolIWZe8fBsi2fYH2p%2BW3F6br9kHRBcRGqyWdpVnEkbViIffdlB6Fg7F3dcO%2FJEezEhDEgVCXIII319HfTiZU2rrKXkPvRuL9hOipylUsqc55dA%2BUd4xiUdYFQ4SbOO1ob2ael1aMC92xM%2BbbeunHl19NPj%2BQx7EpBk3ziDLYdf0oyDJwxTuwLXnqbm9p0unBSk%2Ba%2B8yfjpLpBCVFrMoCp4E4QEwPEp8WVhiLNysu21wEqueMg7KSLgTBeZ8flhSpOfveqSF9W%2Bf3aiqPqGCkRp%2F0%2BAWFm1s8AxAevQs4kZR7lyx6YnqLXRobMb5Wb4D3RTjg2SBHOzjPO9bQ2Wm2aQXuqXsE1Tg3OUCF1eHzWTQDVJBr7zWvVDeefIoKUKQYdp0PBp77f%2B3a1WQV3E6MTLf5kLSCXbBrBe5d0WlrDEW%2BHFjzB7AR9X8Y9Gx%2FqYKjE%2Bf7hMjm%2F711G2tyn85crO6IQF9U2vOQns7KrLj3o27VHHKEkpKo5cCmF6BdOVi7vCGgUZUk0z4J%2BW1w0Msx%2Bjx0%2FAfvoi6dnz9ydJ%2FVCKke4tC5mEk%2FuLBwQidmh99jBZ6zuFKIqub%2Fgvq%2FiXOE0G3PKNuMvZrQstW9OW6F2kLm9b1%2FNhjc5iRycwu%2F6ywQY6pgG8%2F0%2F8QN3A4M4UQFp%2F%2FGUAM2EmRyghwMt1Nlz6XK8WQnUzSIw%2FcNuzqxhsDy0TreFfyyN1vPQ%2BCPAZLTj1XOdh%2BmWDxLa3SXojU9sa0%2FvBlVhKwURtnhr9LqQSm7nCyelSfoPMkFu6bdI7b2EkvMk0fV9uxM127tMXncuqFs5bW7%2FEb6l91Q8NyGdIDzxZId5jr1aONlxsmBZYTTBlQhBKEWJBJnOS&X-Amz-Signature=fbf27ee879868c7ec65189cebdc58be8f16c6bbeb48c9ee5a0946c8f8c34b062&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEQC7AU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVqcoFGf3969HZ%2FwvV9fcZyquEmUPxrixkTlGGwiy%2FZAiAc7maY4e%2Bv3p0CA7eJKgvnp%2BpC%2Bog8pSgLz6Ef6iUxGiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6qMfLcwJ0koWh5ZKtwDYcolIWZe8fBsi2fYH2p%2BW3F6br9kHRBcRGqyWdpVnEkbViIffdlB6Fg7F3dcO%2FJEezEhDEgVCXIII319HfTiZU2rrKXkPvRuL9hOipylUsqc55dA%2BUd4xiUdYFQ4SbOO1ob2ael1aMC92xM%2BbbeunHl19NPj%2BQx7EpBk3ziDLYdf0oyDJwxTuwLXnqbm9p0unBSk%2Ba%2B8yfjpLpBCVFrMoCp4E4QEwPEp8WVhiLNysu21wEqueMg7KSLgTBeZ8flhSpOfveqSF9W%2Bf3aiqPqGCkRp%2F0%2BAWFm1s8AxAevQs4kZR7lyx6YnqLXRobMb5Wb4D3RTjg2SBHOzjPO9bQ2Wm2aQXuqXsE1Tg3OUCF1eHzWTQDVJBr7zWvVDeefIoKUKQYdp0PBp77f%2B3a1WQV3E6MTLf5kLSCXbBrBe5d0WlrDEW%2BHFjzB7AR9X8Y9Gx%2FqYKjE%2Bf7hMjm%2F711G2tyn85crO6IQF9U2vOQns7KrLj3o27VHHKEkpKo5cCmF6BdOVi7vCGgUZUk0z4J%2BW1w0Msx%2Bjx0%2FAfvoi6dnz9ydJ%2FVCKke4tC5mEk%2FuLBwQidmh99jBZ6zuFKIqub%2Fgvq%2FiXOE0G3PKNuMvZrQstW9OW6F2kLm9b1%2FNhjc5iRycwu%2F6ywQY6pgG8%2F0%2F8QN3A4M4UQFp%2F%2FGUAM2EmRyghwMt1Nlz6XK8WQnUzSIw%2FcNuzqxhsDy0TreFfyyN1vPQ%2BCPAZLTj1XOdh%2BmWDxLa3SXojU9sa0%2FvBlVhKwURtnhr9LqQSm7nCyelSfoPMkFu6bdI7b2EkvMk0fV9uxM127tMXncuqFs5bW7%2FEb6l91Q8NyGdIDzxZId5jr1aONlxsmBZYTTBlQhBKEWJBJnOS&X-Amz-Signature=3d7fa7e346fad141716156b3d8ddaa8e58db788e6eb25584c7a96a7bb5d6fb9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEQC7AU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVqcoFGf3969HZ%2FwvV9fcZyquEmUPxrixkTlGGwiy%2FZAiAc7maY4e%2Bv3p0CA7eJKgvnp%2BpC%2Bog8pSgLz6Ef6iUxGiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6qMfLcwJ0koWh5ZKtwDYcolIWZe8fBsi2fYH2p%2BW3F6br9kHRBcRGqyWdpVnEkbViIffdlB6Fg7F3dcO%2FJEezEhDEgVCXIII319HfTiZU2rrKXkPvRuL9hOipylUsqc55dA%2BUd4xiUdYFQ4SbOO1ob2ael1aMC92xM%2BbbeunHl19NPj%2BQx7EpBk3ziDLYdf0oyDJwxTuwLXnqbm9p0unBSk%2Ba%2B8yfjpLpBCVFrMoCp4E4QEwPEp8WVhiLNysu21wEqueMg7KSLgTBeZ8flhSpOfveqSF9W%2Bf3aiqPqGCkRp%2F0%2BAWFm1s8AxAevQs4kZR7lyx6YnqLXRobMb5Wb4D3RTjg2SBHOzjPO9bQ2Wm2aQXuqXsE1Tg3OUCF1eHzWTQDVJBr7zWvVDeefIoKUKQYdp0PBp77f%2B3a1WQV3E6MTLf5kLSCXbBrBe5d0WlrDEW%2BHFjzB7AR9X8Y9Gx%2FqYKjE%2Bf7hMjm%2F711G2tyn85crO6IQF9U2vOQns7KrLj3o27VHHKEkpKo5cCmF6BdOVi7vCGgUZUk0z4J%2BW1w0Msx%2Bjx0%2FAfvoi6dnz9ydJ%2FVCKke4tC5mEk%2FuLBwQidmh99jBZ6zuFKIqub%2Fgvq%2FiXOE0G3PKNuMvZrQstW9OW6F2kLm9b1%2FNhjc5iRycwu%2F6ywQY6pgG8%2F0%2F8QN3A4M4UQFp%2F%2FGUAM2EmRyghwMt1Nlz6XK8WQnUzSIw%2FcNuzqxhsDy0TreFfyyN1vPQ%2BCPAZLTj1XOdh%2BmWDxLa3SXojU9sa0%2FvBlVhKwURtnhr9LqQSm7nCyelSfoPMkFu6bdI7b2EkvMk0fV9uxM127tMXncuqFs5bW7%2FEb6l91Q8NyGdIDzxZId5jr1aONlxsmBZYTTBlQhBKEWJBJnOS&X-Amz-Signature=c7bcaf245798d9ef2de0548bd4ae59105db4e8a3eaa9fa2624255082eb851dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEQC7AU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVqcoFGf3969HZ%2FwvV9fcZyquEmUPxrixkTlGGwiy%2FZAiAc7maY4e%2Bv3p0CA7eJKgvnp%2BpC%2Bog8pSgLz6Ef6iUxGiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX6qMfLcwJ0koWh5ZKtwDYcolIWZe8fBsi2fYH2p%2BW3F6br9kHRBcRGqyWdpVnEkbViIffdlB6Fg7F3dcO%2FJEezEhDEgVCXIII319HfTiZU2rrKXkPvRuL9hOipylUsqc55dA%2BUd4xiUdYFQ4SbOO1ob2ael1aMC92xM%2BbbeunHl19NPj%2BQx7EpBk3ziDLYdf0oyDJwxTuwLXnqbm9p0unBSk%2Ba%2B8yfjpLpBCVFrMoCp4E4QEwPEp8WVhiLNysu21wEqueMg7KSLgTBeZ8flhSpOfveqSF9W%2Bf3aiqPqGCkRp%2F0%2BAWFm1s8AxAevQs4kZR7lyx6YnqLXRobMb5Wb4D3RTjg2SBHOzjPO9bQ2Wm2aQXuqXsE1Tg3OUCF1eHzWTQDVJBr7zWvVDeefIoKUKQYdp0PBp77f%2B3a1WQV3E6MTLf5kLSCXbBrBe5d0WlrDEW%2BHFjzB7AR9X8Y9Gx%2FqYKjE%2Bf7hMjm%2F711G2tyn85crO6IQF9U2vOQns7KrLj3o27VHHKEkpKo5cCmF6BdOVi7vCGgUZUk0z4J%2BW1w0Msx%2Bjx0%2FAfvoi6dnz9ydJ%2FVCKke4tC5mEk%2FuLBwQidmh99jBZ6zuFKIqub%2Fgvq%2FiXOE0G3PKNuMvZrQstW9OW6F2kLm9b1%2FNhjc5iRycwu%2F6ywQY6pgG8%2F0%2F8QN3A4M4UQFp%2F%2FGUAM2EmRyghwMt1Nlz6XK8WQnUzSIw%2FcNuzqxhsDy0TreFfyyN1vPQ%2BCPAZLTj1XOdh%2BmWDxLa3SXojU9sa0%2FvBlVhKwURtnhr9LqQSm7nCyelSfoPMkFu6bdI7b2EkvMk0fV9uxM127tMXncuqFs5bW7%2FEb6l91Q8NyGdIDzxZId5jr1aONlxsmBZYTTBlQhBKEWJBJnOS&X-Amz-Signature=d686c258b086bfad2e3476acb092ee46366609afe3febd1a2bd39883194eaf6b&X-Amz-SignedHeaders=host&x-id=GetObject)
