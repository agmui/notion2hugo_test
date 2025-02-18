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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24BGLU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCQ27v%2FQneAB1nZI0scNblIdwD%2BPhtuhs2cpUK%2FtuIgLQIhAMQyh8PjeHwqeY7loFmsEfRhmuyE1eIaDWzjZELC5yJCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxmwLMiOy7B8FUy8kq3AN8nofwrPkAYk1yY2EA4%2BOFvozaizXiyMiPyuMQ8YTLbP7%2BjP0cGcEmv%2BOMglaEAdiTeUXF52cCpn%2FNZJWVoQbpChnfr9JkUzqVdtcDKlF6obbjcU7q3YNuP%2FRaqakZAF2BG7DIhqGEGpu%2BuMpakJcnd4ATPuwtplQSA35VznEHV4quM1jK%2BSnXmp3HGtaPD8dkl%2B%2B2cChg2Wy%2FPovL7GCG17nms%2B5ZqbEC0%2FD4o3OwJhG2Fri0CtRtLvXlderRZFFwOvCtjMgR%2BaldFz7i0pKCRxYom5j2%2Fn4E1odefnOy6zLWBSucpmbgRfFSgqo9B%2FInakyd15Dk80Ylt84BRfD2wChKkYyN2OGQL%2Bg5g6Uny6TbCtfRc0mgl8thcW0uRV%2BClqLOta3s%2BUbnz%2BVyuQjXOMsG64wz41D%2FPi9cwbSJZk3zPFuKjW6qf7wsq%2BatP3Kw6BPNJg9R1mASHk0ZRGOihOF2ig%2FvNiecrnMTyvBUFGSejVQeRvEZn%2BE9Lrl9hbFxAwabYOk%2BMXf73SUyGrtJAGcb5FnlNGtnUokWxI8VNQYP%2F72nybr2wcg2%2BmdSbYplfQ%2BqKCJlVuwugUdR9AE1Es0lzKvWWGcEfIKJuTTh%2BFrnxFLr0uGwLRLPiTCmjNC9BjqkAR9mCP518rsI1kfAFKMHT%2FUD3hioxu%2FUKY2%2FKDnGHnPQhkBH0iFSyzrYXS%2BE7TR3O1yD%2FWpRkNUZylYQLURcnw%2FrlX6bCuOzzbJV0c0%2BmStnpE36xYleAkKXmrtE6yJ3KCqeFDtm9O2oZ9XGwJ5JernYv%2F6WWc9ng1Vgj6mAZrYA44alwDUbUs7RDfz3sE8bvQDuZL%2F%2FYVulcsulaBjHikuZE%2Fg4&X-Amz-Signature=4b2c464e9b66ac6fd5f934527c8d237e6cd6b19dfb796ea29236a7e1aa4a3ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24BGLU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCQ27v%2FQneAB1nZI0scNblIdwD%2BPhtuhs2cpUK%2FtuIgLQIhAMQyh8PjeHwqeY7loFmsEfRhmuyE1eIaDWzjZELC5yJCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxmwLMiOy7B8FUy8kq3AN8nofwrPkAYk1yY2EA4%2BOFvozaizXiyMiPyuMQ8YTLbP7%2BjP0cGcEmv%2BOMglaEAdiTeUXF52cCpn%2FNZJWVoQbpChnfr9JkUzqVdtcDKlF6obbjcU7q3YNuP%2FRaqakZAF2BG7DIhqGEGpu%2BuMpakJcnd4ATPuwtplQSA35VznEHV4quM1jK%2BSnXmp3HGtaPD8dkl%2B%2B2cChg2Wy%2FPovL7GCG17nms%2B5ZqbEC0%2FD4o3OwJhG2Fri0CtRtLvXlderRZFFwOvCtjMgR%2BaldFz7i0pKCRxYom5j2%2Fn4E1odefnOy6zLWBSucpmbgRfFSgqo9B%2FInakyd15Dk80Ylt84BRfD2wChKkYyN2OGQL%2Bg5g6Uny6TbCtfRc0mgl8thcW0uRV%2BClqLOta3s%2BUbnz%2BVyuQjXOMsG64wz41D%2FPi9cwbSJZk3zPFuKjW6qf7wsq%2BatP3Kw6BPNJg9R1mASHk0ZRGOihOF2ig%2FvNiecrnMTyvBUFGSejVQeRvEZn%2BE9Lrl9hbFxAwabYOk%2BMXf73SUyGrtJAGcb5FnlNGtnUokWxI8VNQYP%2F72nybr2wcg2%2BmdSbYplfQ%2BqKCJlVuwugUdR9AE1Es0lzKvWWGcEfIKJuTTh%2BFrnxFLr0uGwLRLPiTCmjNC9BjqkAR9mCP518rsI1kfAFKMHT%2FUD3hioxu%2FUKY2%2FKDnGHnPQhkBH0iFSyzrYXS%2BE7TR3O1yD%2FWpRkNUZylYQLURcnw%2FrlX6bCuOzzbJV0c0%2BmStnpE36xYleAkKXmrtE6yJ3KCqeFDtm9O2oZ9XGwJ5JernYv%2F6WWc9ng1Vgj6mAZrYA44alwDUbUs7RDfz3sE8bvQDuZL%2F%2FYVulcsulaBjHikuZE%2Fg4&X-Amz-Signature=501c92be3ff6e28a4053afc689f8506581d63652e1e3d0402cb64e825e262913&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24BGLU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCQ27v%2FQneAB1nZI0scNblIdwD%2BPhtuhs2cpUK%2FtuIgLQIhAMQyh8PjeHwqeY7loFmsEfRhmuyE1eIaDWzjZELC5yJCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxmwLMiOy7B8FUy8kq3AN8nofwrPkAYk1yY2EA4%2BOFvozaizXiyMiPyuMQ8YTLbP7%2BjP0cGcEmv%2BOMglaEAdiTeUXF52cCpn%2FNZJWVoQbpChnfr9JkUzqVdtcDKlF6obbjcU7q3YNuP%2FRaqakZAF2BG7DIhqGEGpu%2BuMpakJcnd4ATPuwtplQSA35VznEHV4quM1jK%2BSnXmp3HGtaPD8dkl%2B%2B2cChg2Wy%2FPovL7GCG17nms%2B5ZqbEC0%2FD4o3OwJhG2Fri0CtRtLvXlderRZFFwOvCtjMgR%2BaldFz7i0pKCRxYom5j2%2Fn4E1odefnOy6zLWBSucpmbgRfFSgqo9B%2FInakyd15Dk80Ylt84BRfD2wChKkYyN2OGQL%2Bg5g6Uny6TbCtfRc0mgl8thcW0uRV%2BClqLOta3s%2BUbnz%2BVyuQjXOMsG64wz41D%2FPi9cwbSJZk3zPFuKjW6qf7wsq%2BatP3Kw6BPNJg9R1mASHk0ZRGOihOF2ig%2FvNiecrnMTyvBUFGSejVQeRvEZn%2BE9Lrl9hbFxAwabYOk%2BMXf73SUyGrtJAGcb5FnlNGtnUokWxI8VNQYP%2F72nybr2wcg2%2BmdSbYplfQ%2BqKCJlVuwugUdR9AE1Es0lzKvWWGcEfIKJuTTh%2BFrnxFLr0uGwLRLPiTCmjNC9BjqkAR9mCP518rsI1kfAFKMHT%2FUD3hioxu%2FUKY2%2FKDnGHnPQhkBH0iFSyzrYXS%2BE7TR3O1yD%2FWpRkNUZylYQLURcnw%2FrlX6bCuOzzbJV0c0%2BmStnpE36xYleAkKXmrtE6yJ3KCqeFDtm9O2oZ9XGwJ5JernYv%2F6WWc9ng1Vgj6mAZrYA44alwDUbUs7RDfz3sE8bvQDuZL%2F%2FYVulcsulaBjHikuZE%2Fg4&X-Amz-Signature=bc26315e99085e0bbdffe09fb29c2232889a6c7a8ff50bdd0d2039699ad3c506&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24BGLU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCQ27v%2FQneAB1nZI0scNblIdwD%2BPhtuhs2cpUK%2FtuIgLQIhAMQyh8PjeHwqeY7loFmsEfRhmuyE1eIaDWzjZELC5yJCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxmwLMiOy7B8FUy8kq3AN8nofwrPkAYk1yY2EA4%2BOFvozaizXiyMiPyuMQ8YTLbP7%2BjP0cGcEmv%2BOMglaEAdiTeUXF52cCpn%2FNZJWVoQbpChnfr9JkUzqVdtcDKlF6obbjcU7q3YNuP%2FRaqakZAF2BG7DIhqGEGpu%2BuMpakJcnd4ATPuwtplQSA35VznEHV4quM1jK%2BSnXmp3HGtaPD8dkl%2B%2B2cChg2Wy%2FPovL7GCG17nms%2B5ZqbEC0%2FD4o3OwJhG2Fri0CtRtLvXlderRZFFwOvCtjMgR%2BaldFz7i0pKCRxYom5j2%2Fn4E1odefnOy6zLWBSucpmbgRfFSgqo9B%2FInakyd15Dk80Ylt84BRfD2wChKkYyN2OGQL%2Bg5g6Uny6TbCtfRc0mgl8thcW0uRV%2BClqLOta3s%2BUbnz%2BVyuQjXOMsG64wz41D%2FPi9cwbSJZk3zPFuKjW6qf7wsq%2BatP3Kw6BPNJg9R1mASHk0ZRGOihOF2ig%2FvNiecrnMTyvBUFGSejVQeRvEZn%2BE9Lrl9hbFxAwabYOk%2BMXf73SUyGrtJAGcb5FnlNGtnUokWxI8VNQYP%2F72nybr2wcg2%2BmdSbYplfQ%2BqKCJlVuwugUdR9AE1Es0lzKvWWGcEfIKJuTTh%2BFrnxFLr0uGwLRLPiTCmjNC9BjqkAR9mCP518rsI1kfAFKMHT%2FUD3hioxu%2FUKY2%2FKDnGHnPQhkBH0iFSyzrYXS%2BE7TR3O1yD%2FWpRkNUZylYQLURcnw%2FrlX6bCuOzzbJV0c0%2BmStnpE36xYleAkKXmrtE6yJ3KCqeFDtm9O2oZ9XGwJ5JernYv%2F6WWc9ng1Vgj6mAZrYA44alwDUbUs7RDfz3sE8bvQDuZL%2F%2FYVulcsulaBjHikuZE%2Fg4&X-Amz-Signature=85edc89bb678f96581eb5920a0f471f693f183ccaace104321f0d207c33b7bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24BGLU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCQ27v%2FQneAB1nZI0scNblIdwD%2BPhtuhs2cpUK%2FtuIgLQIhAMQyh8PjeHwqeY7loFmsEfRhmuyE1eIaDWzjZELC5yJCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxmwLMiOy7B8FUy8kq3AN8nofwrPkAYk1yY2EA4%2BOFvozaizXiyMiPyuMQ8YTLbP7%2BjP0cGcEmv%2BOMglaEAdiTeUXF52cCpn%2FNZJWVoQbpChnfr9JkUzqVdtcDKlF6obbjcU7q3YNuP%2FRaqakZAF2BG7DIhqGEGpu%2BuMpakJcnd4ATPuwtplQSA35VznEHV4quM1jK%2BSnXmp3HGtaPD8dkl%2B%2B2cChg2Wy%2FPovL7GCG17nms%2B5ZqbEC0%2FD4o3OwJhG2Fri0CtRtLvXlderRZFFwOvCtjMgR%2BaldFz7i0pKCRxYom5j2%2Fn4E1odefnOy6zLWBSucpmbgRfFSgqo9B%2FInakyd15Dk80Ylt84BRfD2wChKkYyN2OGQL%2Bg5g6Uny6TbCtfRc0mgl8thcW0uRV%2BClqLOta3s%2BUbnz%2BVyuQjXOMsG64wz41D%2FPi9cwbSJZk3zPFuKjW6qf7wsq%2BatP3Kw6BPNJg9R1mASHk0ZRGOihOF2ig%2FvNiecrnMTyvBUFGSejVQeRvEZn%2BE9Lrl9hbFxAwabYOk%2BMXf73SUyGrtJAGcb5FnlNGtnUokWxI8VNQYP%2F72nybr2wcg2%2BmdSbYplfQ%2BqKCJlVuwugUdR9AE1Es0lzKvWWGcEfIKJuTTh%2BFrnxFLr0uGwLRLPiTCmjNC9BjqkAR9mCP518rsI1kfAFKMHT%2FUD3hioxu%2FUKY2%2FKDnGHnPQhkBH0iFSyzrYXS%2BE7TR3O1yD%2FWpRkNUZylYQLURcnw%2FrlX6bCuOzzbJV0c0%2BmStnpE36xYleAkKXmrtE6yJ3KCqeFDtm9O2oZ9XGwJ5JernYv%2F6WWc9ng1Vgj6mAZrYA44alwDUbUs7RDfz3sE8bvQDuZL%2F%2FYVulcsulaBjHikuZE%2Fg4&X-Amz-Signature=1212d047e14f8045b5246aaa1f1c381899251f189098b60e695c18e58ec80c13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24BGLU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCQ27v%2FQneAB1nZI0scNblIdwD%2BPhtuhs2cpUK%2FtuIgLQIhAMQyh8PjeHwqeY7loFmsEfRhmuyE1eIaDWzjZELC5yJCKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxmwLMiOy7B8FUy8kq3AN8nofwrPkAYk1yY2EA4%2BOFvozaizXiyMiPyuMQ8YTLbP7%2BjP0cGcEmv%2BOMglaEAdiTeUXF52cCpn%2FNZJWVoQbpChnfr9JkUzqVdtcDKlF6obbjcU7q3YNuP%2FRaqakZAF2BG7DIhqGEGpu%2BuMpakJcnd4ATPuwtplQSA35VznEHV4quM1jK%2BSnXmp3HGtaPD8dkl%2B%2B2cChg2Wy%2FPovL7GCG17nms%2B5ZqbEC0%2FD4o3OwJhG2Fri0CtRtLvXlderRZFFwOvCtjMgR%2BaldFz7i0pKCRxYom5j2%2Fn4E1odefnOy6zLWBSucpmbgRfFSgqo9B%2FInakyd15Dk80Ylt84BRfD2wChKkYyN2OGQL%2Bg5g6Uny6TbCtfRc0mgl8thcW0uRV%2BClqLOta3s%2BUbnz%2BVyuQjXOMsG64wz41D%2FPi9cwbSJZk3zPFuKjW6qf7wsq%2BatP3Kw6BPNJg9R1mASHk0ZRGOihOF2ig%2FvNiecrnMTyvBUFGSejVQeRvEZn%2BE9Lrl9hbFxAwabYOk%2BMXf73SUyGrtJAGcb5FnlNGtnUokWxI8VNQYP%2F72nybr2wcg2%2BmdSbYplfQ%2BqKCJlVuwugUdR9AE1Es0lzKvWWGcEfIKJuTTh%2BFrnxFLr0uGwLRLPiTCmjNC9BjqkAR9mCP518rsI1kfAFKMHT%2FUD3hioxu%2FUKY2%2FKDnGHnPQhkBH0iFSyzrYXS%2BE7TR3O1yD%2FWpRkNUZylYQLURcnw%2FrlX6bCuOzzbJV0c0%2BmStnpE36xYleAkKXmrtE6yJ3KCqeFDtm9O2oZ9XGwJ5JernYv%2F6WWc9ng1Vgj6mAZrYA44alwDUbUs7RDfz3sE8bvQDuZL%2F%2FYVulcsulaBjHikuZE%2Fg4&X-Amz-Signature=8102f0651021e7a2bc1df1032ad497ad7444c93115604362a3926c2c3b583eb4&X-Amz-SignedHeaders=host&x-id=GetObject)
