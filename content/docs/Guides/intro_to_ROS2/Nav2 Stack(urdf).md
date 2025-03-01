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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYW5WPPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEUJCtnxc6%2B95IXX%2Fc21yp2aocjcYr7Dw6L4B%2FaiAvWgIhAOn10cekBkoSftvfsGmqBecGVV9juHHLwMj%2F2DDM1x7vKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyASjNXczs2bddYymYq3AME1gBe2uij228VZl90mydFbe%2Bba9kwz3PzRF68o5uxE%2B0ARjoOzYAaDHooaiNSzipeOb52lv%2BiZvdl61PmIf0wZpzXKVzc95%2FYxTE%2BJgU%2BUwWJf9qeQIfGdmtjN48UInADBHLnT%2BDsY%2B1RYRdd6SohR2QyVUhVHu9Ub63FkxCs59%2FofAB2MU2ldY971qcrA9ARyhYSHzR0LwO4IXQAWcecQrTypuAE7voueIYUHHvZNMMw0J04wOe5eYjOnrixHBPKoj0W5Q4unkTS1wy6txxJXrY8viIGINCaNjIN6NPvzzjnj4Txjeoj5mNsVzstxIjwcl53hhEinGWy6JDEMt3Uu8MWTgkP9v2xnmWvSmP83fri2O%2F0clUkacmuw5fXQY5TBc3xvTDFX5RKU9adzQUVIJJANNMY0B0HU6LF6uKcfJpLgYAgXm7lP30yYkCbFi%2BXB66TVH7VPeYQkQcsXE6Ltq6%2FQjdR4JlfQo2DEbTynkTjnT6AAXJOEzrB9OVXx352PgjghnICaVITY3fCh1l7m%2BoxdLQ8AfzguPhnm7kUzHs5HJ1GhkRauhsiPW2sBwklh70wNuLXSuDliiHgRmO%2BsK%2Fyb86%2Bpvr%2BVkwx84Ta%2FLLitDzLJ%2B8z03Qf%2FTC6x42%2BBjqkAewdeSkVEh5Kdx5NjNSmHcrSn%2FH%2FQtcquCVnhzOdin51Xd89mdza5y21IVgrKen%2F%2Fki9PSvqNjMIVUOk%2BSrCq9eL6%2Bd9sGtD9336caIzaew77jxW1xdimOf%2Bp8ioF8%2BUOt46EUDHywPfF9wLOCjsWBODC%2BcqD62ZbB4qgEHDPsqfpdinv%2BDQuUmmX%2ButtU8tvS%2FFX64I8lunQvMzDQUUGr3GS9KD&X-Amz-Signature=45a5bfa95e2d3d63ec7cfc0e6bfa12c7347167f0506aa332f138e6870d52b43f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYW5WPPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEUJCtnxc6%2B95IXX%2Fc21yp2aocjcYr7Dw6L4B%2FaiAvWgIhAOn10cekBkoSftvfsGmqBecGVV9juHHLwMj%2F2DDM1x7vKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyASjNXczs2bddYymYq3AME1gBe2uij228VZl90mydFbe%2Bba9kwz3PzRF68o5uxE%2B0ARjoOzYAaDHooaiNSzipeOb52lv%2BiZvdl61PmIf0wZpzXKVzc95%2FYxTE%2BJgU%2BUwWJf9qeQIfGdmtjN48UInADBHLnT%2BDsY%2B1RYRdd6SohR2QyVUhVHu9Ub63FkxCs59%2FofAB2MU2ldY971qcrA9ARyhYSHzR0LwO4IXQAWcecQrTypuAE7voueIYUHHvZNMMw0J04wOe5eYjOnrixHBPKoj0W5Q4unkTS1wy6txxJXrY8viIGINCaNjIN6NPvzzjnj4Txjeoj5mNsVzstxIjwcl53hhEinGWy6JDEMt3Uu8MWTgkP9v2xnmWvSmP83fri2O%2F0clUkacmuw5fXQY5TBc3xvTDFX5RKU9adzQUVIJJANNMY0B0HU6LF6uKcfJpLgYAgXm7lP30yYkCbFi%2BXB66TVH7VPeYQkQcsXE6Ltq6%2FQjdR4JlfQo2DEbTynkTjnT6AAXJOEzrB9OVXx352PgjghnICaVITY3fCh1l7m%2BoxdLQ8AfzguPhnm7kUzHs5HJ1GhkRauhsiPW2sBwklh70wNuLXSuDliiHgRmO%2BsK%2Fyb86%2Bpvr%2BVkwx84Ta%2FLLitDzLJ%2B8z03Qf%2FTC6x42%2BBjqkAewdeSkVEh5Kdx5NjNSmHcrSn%2FH%2FQtcquCVnhzOdin51Xd89mdza5y21IVgrKen%2F%2Fki9PSvqNjMIVUOk%2BSrCq9eL6%2Bd9sGtD9336caIzaew77jxW1xdimOf%2Bp8ioF8%2BUOt46EUDHywPfF9wLOCjsWBODC%2BcqD62ZbB4qgEHDPsqfpdinv%2BDQuUmmX%2ButtU8tvS%2FFX64I8lunQvMzDQUUGr3GS9KD&X-Amz-Signature=53807581f40107dcb68dc53d87eda832a41774b08735a26b2cd36ea5f450419a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYW5WPPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEUJCtnxc6%2B95IXX%2Fc21yp2aocjcYr7Dw6L4B%2FaiAvWgIhAOn10cekBkoSftvfsGmqBecGVV9juHHLwMj%2F2DDM1x7vKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyASjNXczs2bddYymYq3AME1gBe2uij228VZl90mydFbe%2Bba9kwz3PzRF68o5uxE%2B0ARjoOzYAaDHooaiNSzipeOb52lv%2BiZvdl61PmIf0wZpzXKVzc95%2FYxTE%2BJgU%2BUwWJf9qeQIfGdmtjN48UInADBHLnT%2BDsY%2B1RYRdd6SohR2QyVUhVHu9Ub63FkxCs59%2FofAB2MU2ldY971qcrA9ARyhYSHzR0LwO4IXQAWcecQrTypuAE7voueIYUHHvZNMMw0J04wOe5eYjOnrixHBPKoj0W5Q4unkTS1wy6txxJXrY8viIGINCaNjIN6NPvzzjnj4Txjeoj5mNsVzstxIjwcl53hhEinGWy6JDEMt3Uu8MWTgkP9v2xnmWvSmP83fri2O%2F0clUkacmuw5fXQY5TBc3xvTDFX5RKU9adzQUVIJJANNMY0B0HU6LF6uKcfJpLgYAgXm7lP30yYkCbFi%2BXB66TVH7VPeYQkQcsXE6Ltq6%2FQjdR4JlfQo2DEbTynkTjnT6AAXJOEzrB9OVXx352PgjghnICaVITY3fCh1l7m%2BoxdLQ8AfzguPhnm7kUzHs5HJ1GhkRauhsiPW2sBwklh70wNuLXSuDliiHgRmO%2BsK%2Fyb86%2Bpvr%2BVkwx84Ta%2FLLitDzLJ%2B8z03Qf%2FTC6x42%2BBjqkAewdeSkVEh5Kdx5NjNSmHcrSn%2FH%2FQtcquCVnhzOdin51Xd89mdza5y21IVgrKen%2F%2Fki9PSvqNjMIVUOk%2BSrCq9eL6%2Bd9sGtD9336caIzaew77jxW1xdimOf%2Bp8ioF8%2BUOt46EUDHywPfF9wLOCjsWBODC%2BcqD62ZbB4qgEHDPsqfpdinv%2BDQuUmmX%2ButtU8tvS%2FFX64I8lunQvMzDQUUGr3GS9KD&X-Amz-Signature=39f4fa8e1a302f7f17d0299d4d4a3971d5e1e821fd18c30649a02b83ba445860&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYW5WPPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEUJCtnxc6%2B95IXX%2Fc21yp2aocjcYr7Dw6L4B%2FaiAvWgIhAOn10cekBkoSftvfsGmqBecGVV9juHHLwMj%2F2DDM1x7vKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyASjNXczs2bddYymYq3AME1gBe2uij228VZl90mydFbe%2Bba9kwz3PzRF68o5uxE%2B0ARjoOzYAaDHooaiNSzipeOb52lv%2BiZvdl61PmIf0wZpzXKVzc95%2FYxTE%2BJgU%2BUwWJf9qeQIfGdmtjN48UInADBHLnT%2BDsY%2B1RYRdd6SohR2QyVUhVHu9Ub63FkxCs59%2FofAB2MU2ldY971qcrA9ARyhYSHzR0LwO4IXQAWcecQrTypuAE7voueIYUHHvZNMMw0J04wOe5eYjOnrixHBPKoj0W5Q4unkTS1wy6txxJXrY8viIGINCaNjIN6NPvzzjnj4Txjeoj5mNsVzstxIjwcl53hhEinGWy6JDEMt3Uu8MWTgkP9v2xnmWvSmP83fri2O%2F0clUkacmuw5fXQY5TBc3xvTDFX5RKU9adzQUVIJJANNMY0B0HU6LF6uKcfJpLgYAgXm7lP30yYkCbFi%2BXB66TVH7VPeYQkQcsXE6Ltq6%2FQjdR4JlfQo2DEbTynkTjnT6AAXJOEzrB9OVXx352PgjghnICaVITY3fCh1l7m%2BoxdLQ8AfzguPhnm7kUzHs5HJ1GhkRauhsiPW2sBwklh70wNuLXSuDliiHgRmO%2BsK%2Fyb86%2Bpvr%2BVkwx84Ta%2FLLitDzLJ%2B8z03Qf%2FTC6x42%2BBjqkAewdeSkVEh5Kdx5NjNSmHcrSn%2FH%2FQtcquCVnhzOdin51Xd89mdza5y21IVgrKen%2F%2Fki9PSvqNjMIVUOk%2BSrCq9eL6%2Bd9sGtD9336caIzaew77jxW1xdimOf%2Bp8ioF8%2BUOt46EUDHywPfF9wLOCjsWBODC%2BcqD62ZbB4qgEHDPsqfpdinv%2BDQuUmmX%2ButtU8tvS%2FFX64I8lunQvMzDQUUGr3GS9KD&X-Amz-Signature=dea36ebac3b39c0a5d431c5592ab18a443365e3697c8b5ea28ed3a276d1b6bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYW5WPPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEUJCtnxc6%2B95IXX%2Fc21yp2aocjcYr7Dw6L4B%2FaiAvWgIhAOn10cekBkoSftvfsGmqBecGVV9juHHLwMj%2F2DDM1x7vKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyASjNXczs2bddYymYq3AME1gBe2uij228VZl90mydFbe%2Bba9kwz3PzRF68o5uxE%2B0ARjoOzYAaDHooaiNSzipeOb52lv%2BiZvdl61PmIf0wZpzXKVzc95%2FYxTE%2BJgU%2BUwWJf9qeQIfGdmtjN48UInADBHLnT%2BDsY%2B1RYRdd6SohR2QyVUhVHu9Ub63FkxCs59%2FofAB2MU2ldY971qcrA9ARyhYSHzR0LwO4IXQAWcecQrTypuAE7voueIYUHHvZNMMw0J04wOe5eYjOnrixHBPKoj0W5Q4unkTS1wy6txxJXrY8viIGINCaNjIN6NPvzzjnj4Txjeoj5mNsVzstxIjwcl53hhEinGWy6JDEMt3Uu8MWTgkP9v2xnmWvSmP83fri2O%2F0clUkacmuw5fXQY5TBc3xvTDFX5RKU9adzQUVIJJANNMY0B0HU6LF6uKcfJpLgYAgXm7lP30yYkCbFi%2BXB66TVH7VPeYQkQcsXE6Ltq6%2FQjdR4JlfQo2DEbTynkTjnT6AAXJOEzrB9OVXx352PgjghnICaVITY3fCh1l7m%2BoxdLQ8AfzguPhnm7kUzHs5HJ1GhkRauhsiPW2sBwklh70wNuLXSuDliiHgRmO%2BsK%2Fyb86%2Bpvr%2BVkwx84Ta%2FLLitDzLJ%2B8z03Qf%2FTC6x42%2BBjqkAewdeSkVEh5Kdx5NjNSmHcrSn%2FH%2FQtcquCVnhzOdin51Xd89mdza5y21IVgrKen%2F%2Fki9PSvqNjMIVUOk%2BSrCq9eL6%2Bd9sGtD9336caIzaew77jxW1xdimOf%2Bp8ioF8%2BUOt46EUDHywPfF9wLOCjsWBODC%2BcqD62ZbB4qgEHDPsqfpdinv%2BDQuUmmX%2ButtU8tvS%2FFX64I8lunQvMzDQUUGr3GS9KD&X-Amz-Signature=761ac47597dc9bd75f51ce54e4c29c086e2f312d8bcd37b0bde9b8e3c0b1aa06&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYW5WPPR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEUJCtnxc6%2B95IXX%2Fc21yp2aocjcYr7Dw6L4B%2FaiAvWgIhAOn10cekBkoSftvfsGmqBecGVV9juHHLwMj%2F2DDM1x7vKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyASjNXczs2bddYymYq3AME1gBe2uij228VZl90mydFbe%2Bba9kwz3PzRF68o5uxE%2B0ARjoOzYAaDHooaiNSzipeOb52lv%2BiZvdl61PmIf0wZpzXKVzc95%2FYxTE%2BJgU%2BUwWJf9qeQIfGdmtjN48UInADBHLnT%2BDsY%2B1RYRdd6SohR2QyVUhVHu9Ub63FkxCs59%2FofAB2MU2ldY971qcrA9ARyhYSHzR0LwO4IXQAWcecQrTypuAE7voueIYUHHvZNMMw0J04wOe5eYjOnrixHBPKoj0W5Q4unkTS1wy6txxJXrY8viIGINCaNjIN6NPvzzjnj4Txjeoj5mNsVzstxIjwcl53hhEinGWy6JDEMt3Uu8MWTgkP9v2xnmWvSmP83fri2O%2F0clUkacmuw5fXQY5TBc3xvTDFX5RKU9adzQUVIJJANNMY0B0HU6LF6uKcfJpLgYAgXm7lP30yYkCbFi%2BXB66TVH7VPeYQkQcsXE6Ltq6%2FQjdR4JlfQo2DEbTynkTjnT6AAXJOEzrB9OVXx352PgjghnICaVITY3fCh1l7m%2BoxdLQ8AfzguPhnm7kUzHs5HJ1GhkRauhsiPW2sBwklh70wNuLXSuDliiHgRmO%2BsK%2Fyb86%2Bpvr%2BVkwx84Ta%2FLLitDzLJ%2B8z03Qf%2FTC6x42%2BBjqkAewdeSkVEh5Kdx5NjNSmHcrSn%2FH%2FQtcquCVnhzOdin51Xd89mdza5y21IVgrKen%2F%2Fki9PSvqNjMIVUOk%2BSrCq9eL6%2Bd9sGtD9336caIzaew77jxW1xdimOf%2Bp8ioF8%2BUOt46EUDHywPfF9wLOCjsWBODC%2BcqD62ZbB4qgEHDPsqfpdinv%2BDQuUmmX%2ButtU8tvS%2FFX64I8lunQvMzDQUUGr3GS9KD&X-Amz-Signature=bd445f3439abe4cc801d732a1cc42cdab28d794ba4bb65c0ae0771627db6c15b&X-Amz-SignedHeaders=host&x-id=GetObject)
