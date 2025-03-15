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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOF45GL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZxD67J1%2FivqJPGc06T3bjdsoHovjndmf1HJqVeTEmQIgb6jBdViA%2Bcq6DqQaZ27UUYsFNjrEcKFbnIqoA9F5ciMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDO37o972jpz7z%2FixvSrcA8Hu1xGun2lUqHom1hRYNFht24XqI%2BePA54nNoq6LwtHCrmXou0p1IpbszJoyZkj4TzRpHXgmhEdDI516NvS57bJ6Js9smsh77EIqOAwXl1rZcdeAUq3e5hNvcTfTF8oP4Vd755Hv5UmZTvrCdBJ2QKlFpCqUdlmdPTci540Q%2FadHmtvINjOFutCpLnKfk9CvRgoshYJ9XjkpNuN6GudbXaiGm3XobB1S12nrf%2FHtH81I7sSHCN6%2FofTgnX7woySyen1R4FI3kmwUN7vCXjuyIPFxjhlmuLIez6xTtUp7g6HAhICPA8MxmJbWmDI7GC5WNDWtMSdhR8gJIakHlXudTaByejl9L5z2e5r5q9AATP7uAy8ZEqx810O4Rnq8zzoZaR82n2ewzRN2z9FB9FbUm4cMK5eJqgrEM8wFrKWZcQwfChYIgm5uW6VaxePM6dEgw%2FR%2BA%2FgmqpGGqsIO6Q0P8fWRhplfvWkHcPrlVPsPAgx2Kmr6%2F85j0AIgy6XtZ73EPNzL%2FDZLJa8UfFOyEIhhYjxIO7om%2F5QeLz3nljN4sa1qYfT4GNXmN94WYTsQmEbeICITrDyHPSf7po4zpccaYJP1ojZOZj0ipXTRViCzMGvhSR9ALWNg%2BJ2txEXMOrh1L4GOqUBscSRqsiInNoM7iK%2FZ88OYiw42kuCwBsu0rYEKLIsu%2FaGxcIGxBgasfHhZN97HqptrREanK%2BmyNMesof33mvSjHTMqB1d4NQWV0wiXFEyxNxxcUFaQTBX0hY0gGNbhCr0mZTc8G1FbdkOY5oqKnzq4FGKc79hUuHHsHdXQTxO5dHwxLpBSmFAupP4QuII7%2BaUXFLIyRp2OdIprqVfLD49afftrp%2BM&X-Amz-Signature=c1f72a3e5d89dee83d3e9fa2cda07e17d33bc8c14f7367c5f45213d8be65b684&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOF45GL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZxD67J1%2FivqJPGc06T3bjdsoHovjndmf1HJqVeTEmQIgb6jBdViA%2Bcq6DqQaZ27UUYsFNjrEcKFbnIqoA9F5ciMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDO37o972jpz7z%2FixvSrcA8Hu1xGun2lUqHom1hRYNFht24XqI%2BePA54nNoq6LwtHCrmXou0p1IpbszJoyZkj4TzRpHXgmhEdDI516NvS57bJ6Js9smsh77EIqOAwXl1rZcdeAUq3e5hNvcTfTF8oP4Vd755Hv5UmZTvrCdBJ2QKlFpCqUdlmdPTci540Q%2FadHmtvINjOFutCpLnKfk9CvRgoshYJ9XjkpNuN6GudbXaiGm3XobB1S12nrf%2FHtH81I7sSHCN6%2FofTgnX7woySyen1R4FI3kmwUN7vCXjuyIPFxjhlmuLIez6xTtUp7g6HAhICPA8MxmJbWmDI7GC5WNDWtMSdhR8gJIakHlXudTaByejl9L5z2e5r5q9AATP7uAy8ZEqx810O4Rnq8zzoZaR82n2ewzRN2z9FB9FbUm4cMK5eJqgrEM8wFrKWZcQwfChYIgm5uW6VaxePM6dEgw%2FR%2BA%2FgmqpGGqsIO6Q0P8fWRhplfvWkHcPrlVPsPAgx2Kmr6%2F85j0AIgy6XtZ73EPNzL%2FDZLJa8UfFOyEIhhYjxIO7om%2F5QeLz3nljN4sa1qYfT4GNXmN94WYTsQmEbeICITrDyHPSf7po4zpccaYJP1ojZOZj0ipXTRViCzMGvhSR9ALWNg%2BJ2txEXMOrh1L4GOqUBscSRqsiInNoM7iK%2FZ88OYiw42kuCwBsu0rYEKLIsu%2FaGxcIGxBgasfHhZN97HqptrREanK%2BmyNMesof33mvSjHTMqB1d4NQWV0wiXFEyxNxxcUFaQTBX0hY0gGNbhCr0mZTc8G1FbdkOY5oqKnzq4FGKc79hUuHHsHdXQTxO5dHwxLpBSmFAupP4QuII7%2BaUXFLIyRp2OdIprqVfLD49afftrp%2BM&X-Amz-Signature=5a0768054cf8f247d63284ad269224aab71e64b4f6416b1dd1208666238d9c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOF45GL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZxD67J1%2FivqJPGc06T3bjdsoHovjndmf1HJqVeTEmQIgb6jBdViA%2Bcq6DqQaZ27UUYsFNjrEcKFbnIqoA9F5ciMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDO37o972jpz7z%2FixvSrcA8Hu1xGun2lUqHom1hRYNFht24XqI%2BePA54nNoq6LwtHCrmXou0p1IpbszJoyZkj4TzRpHXgmhEdDI516NvS57bJ6Js9smsh77EIqOAwXl1rZcdeAUq3e5hNvcTfTF8oP4Vd755Hv5UmZTvrCdBJ2QKlFpCqUdlmdPTci540Q%2FadHmtvINjOFutCpLnKfk9CvRgoshYJ9XjkpNuN6GudbXaiGm3XobB1S12nrf%2FHtH81I7sSHCN6%2FofTgnX7woySyen1R4FI3kmwUN7vCXjuyIPFxjhlmuLIez6xTtUp7g6HAhICPA8MxmJbWmDI7GC5WNDWtMSdhR8gJIakHlXudTaByejl9L5z2e5r5q9AATP7uAy8ZEqx810O4Rnq8zzoZaR82n2ewzRN2z9FB9FbUm4cMK5eJqgrEM8wFrKWZcQwfChYIgm5uW6VaxePM6dEgw%2FR%2BA%2FgmqpGGqsIO6Q0P8fWRhplfvWkHcPrlVPsPAgx2Kmr6%2F85j0AIgy6XtZ73EPNzL%2FDZLJa8UfFOyEIhhYjxIO7om%2F5QeLz3nljN4sa1qYfT4GNXmN94WYTsQmEbeICITrDyHPSf7po4zpccaYJP1ojZOZj0ipXTRViCzMGvhSR9ALWNg%2BJ2txEXMOrh1L4GOqUBscSRqsiInNoM7iK%2FZ88OYiw42kuCwBsu0rYEKLIsu%2FaGxcIGxBgasfHhZN97HqptrREanK%2BmyNMesof33mvSjHTMqB1d4NQWV0wiXFEyxNxxcUFaQTBX0hY0gGNbhCr0mZTc8G1FbdkOY5oqKnzq4FGKc79hUuHHsHdXQTxO5dHwxLpBSmFAupP4QuII7%2BaUXFLIyRp2OdIprqVfLD49afftrp%2BM&X-Amz-Signature=afd7fc26ad2b532957a130edfbdef9bac33063fd109185c33300f0f2017c087c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOF45GL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZxD67J1%2FivqJPGc06T3bjdsoHovjndmf1HJqVeTEmQIgb6jBdViA%2Bcq6DqQaZ27UUYsFNjrEcKFbnIqoA9F5ciMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDO37o972jpz7z%2FixvSrcA8Hu1xGun2lUqHom1hRYNFht24XqI%2BePA54nNoq6LwtHCrmXou0p1IpbszJoyZkj4TzRpHXgmhEdDI516NvS57bJ6Js9smsh77EIqOAwXl1rZcdeAUq3e5hNvcTfTF8oP4Vd755Hv5UmZTvrCdBJ2QKlFpCqUdlmdPTci540Q%2FadHmtvINjOFutCpLnKfk9CvRgoshYJ9XjkpNuN6GudbXaiGm3XobB1S12nrf%2FHtH81I7sSHCN6%2FofTgnX7woySyen1R4FI3kmwUN7vCXjuyIPFxjhlmuLIez6xTtUp7g6HAhICPA8MxmJbWmDI7GC5WNDWtMSdhR8gJIakHlXudTaByejl9L5z2e5r5q9AATP7uAy8ZEqx810O4Rnq8zzoZaR82n2ewzRN2z9FB9FbUm4cMK5eJqgrEM8wFrKWZcQwfChYIgm5uW6VaxePM6dEgw%2FR%2BA%2FgmqpGGqsIO6Q0P8fWRhplfvWkHcPrlVPsPAgx2Kmr6%2F85j0AIgy6XtZ73EPNzL%2FDZLJa8UfFOyEIhhYjxIO7om%2F5QeLz3nljN4sa1qYfT4GNXmN94WYTsQmEbeICITrDyHPSf7po4zpccaYJP1ojZOZj0ipXTRViCzMGvhSR9ALWNg%2BJ2txEXMOrh1L4GOqUBscSRqsiInNoM7iK%2FZ88OYiw42kuCwBsu0rYEKLIsu%2FaGxcIGxBgasfHhZN97HqptrREanK%2BmyNMesof33mvSjHTMqB1d4NQWV0wiXFEyxNxxcUFaQTBX0hY0gGNbhCr0mZTc8G1FbdkOY5oqKnzq4FGKc79hUuHHsHdXQTxO5dHwxLpBSmFAupP4QuII7%2BaUXFLIyRp2OdIprqVfLD49afftrp%2BM&X-Amz-Signature=8b240cf61e95a152ee2a4bd14533b89f95f52a92027f8a21c1eeefc722fc5cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOF45GL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZxD67J1%2FivqJPGc06T3bjdsoHovjndmf1HJqVeTEmQIgb6jBdViA%2Bcq6DqQaZ27UUYsFNjrEcKFbnIqoA9F5ciMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDO37o972jpz7z%2FixvSrcA8Hu1xGun2lUqHom1hRYNFht24XqI%2BePA54nNoq6LwtHCrmXou0p1IpbszJoyZkj4TzRpHXgmhEdDI516NvS57bJ6Js9smsh77EIqOAwXl1rZcdeAUq3e5hNvcTfTF8oP4Vd755Hv5UmZTvrCdBJ2QKlFpCqUdlmdPTci540Q%2FadHmtvINjOFutCpLnKfk9CvRgoshYJ9XjkpNuN6GudbXaiGm3XobB1S12nrf%2FHtH81I7sSHCN6%2FofTgnX7woySyen1R4FI3kmwUN7vCXjuyIPFxjhlmuLIez6xTtUp7g6HAhICPA8MxmJbWmDI7GC5WNDWtMSdhR8gJIakHlXudTaByejl9L5z2e5r5q9AATP7uAy8ZEqx810O4Rnq8zzoZaR82n2ewzRN2z9FB9FbUm4cMK5eJqgrEM8wFrKWZcQwfChYIgm5uW6VaxePM6dEgw%2FR%2BA%2FgmqpGGqsIO6Q0P8fWRhplfvWkHcPrlVPsPAgx2Kmr6%2F85j0AIgy6XtZ73EPNzL%2FDZLJa8UfFOyEIhhYjxIO7om%2F5QeLz3nljN4sa1qYfT4GNXmN94WYTsQmEbeICITrDyHPSf7po4zpccaYJP1ojZOZj0ipXTRViCzMGvhSR9ALWNg%2BJ2txEXMOrh1L4GOqUBscSRqsiInNoM7iK%2FZ88OYiw42kuCwBsu0rYEKLIsu%2FaGxcIGxBgasfHhZN97HqptrREanK%2BmyNMesof33mvSjHTMqB1d4NQWV0wiXFEyxNxxcUFaQTBX0hY0gGNbhCr0mZTc8G1FbdkOY5oqKnzq4FGKc79hUuHHsHdXQTxO5dHwxLpBSmFAupP4QuII7%2BaUXFLIyRp2OdIprqVfLD49afftrp%2BM&X-Amz-Signature=020961ae5178dda0ceceec0cadf8f4b31b54878febe9b39d24ddafed2d8883e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOF45GL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZxD67J1%2FivqJPGc06T3bjdsoHovjndmf1HJqVeTEmQIgb6jBdViA%2Bcq6DqQaZ27UUYsFNjrEcKFbnIqoA9F5ciMq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDO37o972jpz7z%2FixvSrcA8Hu1xGun2lUqHom1hRYNFht24XqI%2BePA54nNoq6LwtHCrmXou0p1IpbszJoyZkj4TzRpHXgmhEdDI516NvS57bJ6Js9smsh77EIqOAwXl1rZcdeAUq3e5hNvcTfTF8oP4Vd755Hv5UmZTvrCdBJ2QKlFpCqUdlmdPTci540Q%2FadHmtvINjOFutCpLnKfk9CvRgoshYJ9XjkpNuN6GudbXaiGm3XobB1S12nrf%2FHtH81I7sSHCN6%2FofTgnX7woySyen1R4FI3kmwUN7vCXjuyIPFxjhlmuLIez6xTtUp7g6HAhICPA8MxmJbWmDI7GC5WNDWtMSdhR8gJIakHlXudTaByejl9L5z2e5r5q9AATP7uAy8ZEqx810O4Rnq8zzoZaR82n2ewzRN2z9FB9FbUm4cMK5eJqgrEM8wFrKWZcQwfChYIgm5uW6VaxePM6dEgw%2FR%2BA%2FgmqpGGqsIO6Q0P8fWRhplfvWkHcPrlVPsPAgx2Kmr6%2F85j0AIgy6XtZ73EPNzL%2FDZLJa8UfFOyEIhhYjxIO7om%2F5QeLz3nljN4sa1qYfT4GNXmN94WYTsQmEbeICITrDyHPSf7po4zpccaYJP1ojZOZj0ipXTRViCzMGvhSR9ALWNg%2BJ2txEXMOrh1L4GOqUBscSRqsiInNoM7iK%2FZ88OYiw42kuCwBsu0rYEKLIsu%2FaGxcIGxBgasfHhZN97HqptrREanK%2BmyNMesof33mvSjHTMqB1d4NQWV0wiXFEyxNxxcUFaQTBX0hY0gGNbhCr0mZTc8G1FbdkOY5oqKnzq4FGKc79hUuHHsHdXQTxO5dHwxLpBSmFAupP4QuII7%2BaUXFLIyRp2OdIprqVfLD49afftrp%2BM&X-Amz-Signature=8597f18018213ccc4c603db2931d3c15fa5e5dcfd5f59b11fbc0a818eedcc613&X-Amz-SignedHeaders=host&x-id=GetObject)
