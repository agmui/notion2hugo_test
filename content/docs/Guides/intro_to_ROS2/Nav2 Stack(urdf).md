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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CMOZ66%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9CvRWJNLkJ2lAUaAJ7m%2B9R38ll8AfYSwK%2BYsUeYgYuAiAtvz6e6gZG0n7n62WpZZasZ0Dd3%2Br9WwI9zbPPAKimmyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMsa%2FgnGRL3xtxaOR6KtwDoMvXJQSR0ALbJdm7XF9hI6tMIQoFWMko6JbGLIw8eR0REDKZ4xlkOAqCWfAoZvUc6JZYZo8487Enxl0MECZpv94rk1KhyqgOiCHBnorEceRNSsMOW6P0UBKQxyIeB2EOx0AyuGi0h3nrQFxu9zECpAhPpTwuuYQaY946pDK3TSPxaG8fhrJC4OILKbGkC7pch%2BhMxDzvEgAyHn1QzFGZZCkrkbAKSBw6qjTUgWFhpT5noTRw8ZNa87eOB2Tr6pedlETDCvamfHA0HTyTHH8YoAgN9G6QKDUrE9l877W9yUkNLr2MlCYr2QfO8EiGq3lvpa51K55jo2hUsr1r2yxhHJoPF2o0K5DnTdUYtHor3R12m5%2FPol65KEke%2FF7LL9gF6hgiWpyNjflEODdadUWdYRYhIHqZxhyc7wKqnPyC34doitDuIzCdn7RLG55A7xL2QPDxoYkhhQu6aZt8rAAeP4eIukrKvwapK6sjqnEztRIJCjCouEDSUIBfAY90KLnauTj4c8YSGpkpVoTh%2BduSIvVgeTRqS6x9J23xoqHEw3j4vAddLToMPJL1Pk8ll9Uo2jM0EeGPAhy0vRDkj8hjreenMlIISq4ekIltKpHuaxOvo3CwIEm4JR75KwAwqtqbvwY6pgFn5FLzJOVMt3wl7ERhoQiMtE2tWxBmNLgi5xlBHjgynLvmaBYQR1lhbX6Zfr%2Bd5D0p3mg85wxA86sW8oePE%2FFKnbkuEZufOtlV32zo8UQ2ZvnYHMpi%2Boeag1itlLCKF6NBgbjaDtDBOTiDRBDxgKDUaf9qyjnA%2FErb%2F5%2FPMR3fNv1hIS43dNiztbX4iUfvfK%2BGUO14AFtsaHSLsjU7YbFf9CMwyecE&X-Amz-Signature=d98610af39860f1f4b64b0b77dc453d871457b18cf791a1a18104e44885a0959&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CMOZ66%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9CvRWJNLkJ2lAUaAJ7m%2B9R38ll8AfYSwK%2BYsUeYgYuAiAtvz6e6gZG0n7n62WpZZasZ0Dd3%2Br9WwI9zbPPAKimmyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMsa%2FgnGRL3xtxaOR6KtwDoMvXJQSR0ALbJdm7XF9hI6tMIQoFWMko6JbGLIw8eR0REDKZ4xlkOAqCWfAoZvUc6JZYZo8487Enxl0MECZpv94rk1KhyqgOiCHBnorEceRNSsMOW6P0UBKQxyIeB2EOx0AyuGi0h3nrQFxu9zECpAhPpTwuuYQaY946pDK3TSPxaG8fhrJC4OILKbGkC7pch%2BhMxDzvEgAyHn1QzFGZZCkrkbAKSBw6qjTUgWFhpT5noTRw8ZNa87eOB2Tr6pedlETDCvamfHA0HTyTHH8YoAgN9G6QKDUrE9l877W9yUkNLr2MlCYr2QfO8EiGq3lvpa51K55jo2hUsr1r2yxhHJoPF2o0K5DnTdUYtHor3R12m5%2FPol65KEke%2FF7LL9gF6hgiWpyNjflEODdadUWdYRYhIHqZxhyc7wKqnPyC34doitDuIzCdn7RLG55A7xL2QPDxoYkhhQu6aZt8rAAeP4eIukrKvwapK6sjqnEztRIJCjCouEDSUIBfAY90KLnauTj4c8YSGpkpVoTh%2BduSIvVgeTRqS6x9J23xoqHEw3j4vAddLToMPJL1Pk8ll9Uo2jM0EeGPAhy0vRDkj8hjreenMlIISq4ekIltKpHuaxOvo3CwIEm4JR75KwAwqtqbvwY6pgFn5FLzJOVMt3wl7ERhoQiMtE2tWxBmNLgi5xlBHjgynLvmaBYQR1lhbX6Zfr%2Bd5D0p3mg85wxA86sW8oePE%2FFKnbkuEZufOtlV32zo8UQ2ZvnYHMpi%2Boeag1itlLCKF6NBgbjaDtDBOTiDRBDxgKDUaf9qyjnA%2FErb%2F5%2FPMR3fNv1hIS43dNiztbX4iUfvfK%2BGUO14AFtsaHSLsjU7YbFf9CMwyecE&X-Amz-Signature=13888f568e8aa83139d35a83c2e046a00a34dca9ad6c7522385957bf0b4b7128&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CMOZ66%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9CvRWJNLkJ2lAUaAJ7m%2B9R38ll8AfYSwK%2BYsUeYgYuAiAtvz6e6gZG0n7n62WpZZasZ0Dd3%2Br9WwI9zbPPAKimmyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMsa%2FgnGRL3xtxaOR6KtwDoMvXJQSR0ALbJdm7XF9hI6tMIQoFWMko6JbGLIw8eR0REDKZ4xlkOAqCWfAoZvUc6JZYZo8487Enxl0MECZpv94rk1KhyqgOiCHBnorEceRNSsMOW6P0UBKQxyIeB2EOx0AyuGi0h3nrQFxu9zECpAhPpTwuuYQaY946pDK3TSPxaG8fhrJC4OILKbGkC7pch%2BhMxDzvEgAyHn1QzFGZZCkrkbAKSBw6qjTUgWFhpT5noTRw8ZNa87eOB2Tr6pedlETDCvamfHA0HTyTHH8YoAgN9G6QKDUrE9l877W9yUkNLr2MlCYr2QfO8EiGq3lvpa51K55jo2hUsr1r2yxhHJoPF2o0K5DnTdUYtHor3R12m5%2FPol65KEke%2FF7LL9gF6hgiWpyNjflEODdadUWdYRYhIHqZxhyc7wKqnPyC34doitDuIzCdn7RLG55A7xL2QPDxoYkhhQu6aZt8rAAeP4eIukrKvwapK6sjqnEztRIJCjCouEDSUIBfAY90KLnauTj4c8YSGpkpVoTh%2BduSIvVgeTRqS6x9J23xoqHEw3j4vAddLToMPJL1Pk8ll9Uo2jM0EeGPAhy0vRDkj8hjreenMlIISq4ekIltKpHuaxOvo3CwIEm4JR75KwAwqtqbvwY6pgFn5FLzJOVMt3wl7ERhoQiMtE2tWxBmNLgi5xlBHjgynLvmaBYQR1lhbX6Zfr%2Bd5D0p3mg85wxA86sW8oePE%2FFKnbkuEZufOtlV32zo8UQ2ZvnYHMpi%2Boeag1itlLCKF6NBgbjaDtDBOTiDRBDxgKDUaf9qyjnA%2FErb%2F5%2FPMR3fNv1hIS43dNiztbX4iUfvfK%2BGUO14AFtsaHSLsjU7YbFf9CMwyecE&X-Amz-Signature=c01e9f4630c1845abd00a3f4f61c4a91d273a0696288d0195c42b3dd06956393&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CMOZ66%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9CvRWJNLkJ2lAUaAJ7m%2B9R38ll8AfYSwK%2BYsUeYgYuAiAtvz6e6gZG0n7n62WpZZasZ0Dd3%2Br9WwI9zbPPAKimmyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMsa%2FgnGRL3xtxaOR6KtwDoMvXJQSR0ALbJdm7XF9hI6tMIQoFWMko6JbGLIw8eR0REDKZ4xlkOAqCWfAoZvUc6JZYZo8487Enxl0MECZpv94rk1KhyqgOiCHBnorEceRNSsMOW6P0UBKQxyIeB2EOx0AyuGi0h3nrQFxu9zECpAhPpTwuuYQaY946pDK3TSPxaG8fhrJC4OILKbGkC7pch%2BhMxDzvEgAyHn1QzFGZZCkrkbAKSBw6qjTUgWFhpT5noTRw8ZNa87eOB2Tr6pedlETDCvamfHA0HTyTHH8YoAgN9G6QKDUrE9l877W9yUkNLr2MlCYr2QfO8EiGq3lvpa51K55jo2hUsr1r2yxhHJoPF2o0K5DnTdUYtHor3R12m5%2FPol65KEke%2FF7LL9gF6hgiWpyNjflEODdadUWdYRYhIHqZxhyc7wKqnPyC34doitDuIzCdn7RLG55A7xL2QPDxoYkhhQu6aZt8rAAeP4eIukrKvwapK6sjqnEztRIJCjCouEDSUIBfAY90KLnauTj4c8YSGpkpVoTh%2BduSIvVgeTRqS6x9J23xoqHEw3j4vAddLToMPJL1Pk8ll9Uo2jM0EeGPAhy0vRDkj8hjreenMlIISq4ekIltKpHuaxOvo3CwIEm4JR75KwAwqtqbvwY6pgFn5FLzJOVMt3wl7ERhoQiMtE2tWxBmNLgi5xlBHjgynLvmaBYQR1lhbX6Zfr%2Bd5D0p3mg85wxA86sW8oePE%2FFKnbkuEZufOtlV32zo8UQ2ZvnYHMpi%2Boeag1itlLCKF6NBgbjaDtDBOTiDRBDxgKDUaf9qyjnA%2FErb%2F5%2FPMR3fNv1hIS43dNiztbX4iUfvfK%2BGUO14AFtsaHSLsjU7YbFf9CMwyecE&X-Amz-Signature=3f4981d064eda5210104a29176fdb28635c0b1539626b755a0eba19d09fd8927&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CMOZ66%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9CvRWJNLkJ2lAUaAJ7m%2B9R38ll8AfYSwK%2BYsUeYgYuAiAtvz6e6gZG0n7n62WpZZasZ0Dd3%2Br9WwI9zbPPAKimmyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMsa%2FgnGRL3xtxaOR6KtwDoMvXJQSR0ALbJdm7XF9hI6tMIQoFWMko6JbGLIw8eR0REDKZ4xlkOAqCWfAoZvUc6JZYZo8487Enxl0MECZpv94rk1KhyqgOiCHBnorEceRNSsMOW6P0UBKQxyIeB2EOx0AyuGi0h3nrQFxu9zECpAhPpTwuuYQaY946pDK3TSPxaG8fhrJC4OILKbGkC7pch%2BhMxDzvEgAyHn1QzFGZZCkrkbAKSBw6qjTUgWFhpT5noTRw8ZNa87eOB2Tr6pedlETDCvamfHA0HTyTHH8YoAgN9G6QKDUrE9l877W9yUkNLr2MlCYr2QfO8EiGq3lvpa51K55jo2hUsr1r2yxhHJoPF2o0K5DnTdUYtHor3R12m5%2FPol65KEke%2FF7LL9gF6hgiWpyNjflEODdadUWdYRYhIHqZxhyc7wKqnPyC34doitDuIzCdn7RLG55A7xL2QPDxoYkhhQu6aZt8rAAeP4eIukrKvwapK6sjqnEztRIJCjCouEDSUIBfAY90KLnauTj4c8YSGpkpVoTh%2BduSIvVgeTRqS6x9J23xoqHEw3j4vAddLToMPJL1Pk8ll9Uo2jM0EeGPAhy0vRDkj8hjreenMlIISq4ekIltKpHuaxOvo3CwIEm4JR75KwAwqtqbvwY6pgFn5FLzJOVMt3wl7ERhoQiMtE2tWxBmNLgi5xlBHjgynLvmaBYQR1lhbX6Zfr%2Bd5D0p3mg85wxA86sW8oePE%2FFKnbkuEZufOtlV32zo8UQ2ZvnYHMpi%2Boeag1itlLCKF6NBgbjaDtDBOTiDRBDxgKDUaf9qyjnA%2FErb%2F5%2FPMR3fNv1hIS43dNiztbX4iUfvfK%2BGUO14AFtsaHSLsjU7YbFf9CMwyecE&X-Amz-Signature=c4acd34c3086eacaa08f08f7077fcb0c9a05d4562a77630d884e7914e23f250e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2CMOZ66%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9CvRWJNLkJ2lAUaAJ7m%2B9R38ll8AfYSwK%2BYsUeYgYuAiAtvz6e6gZG0n7n62WpZZasZ0Dd3%2Br9WwI9zbPPAKimmyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMsa%2FgnGRL3xtxaOR6KtwDoMvXJQSR0ALbJdm7XF9hI6tMIQoFWMko6JbGLIw8eR0REDKZ4xlkOAqCWfAoZvUc6JZYZo8487Enxl0MECZpv94rk1KhyqgOiCHBnorEceRNSsMOW6P0UBKQxyIeB2EOx0AyuGi0h3nrQFxu9zECpAhPpTwuuYQaY946pDK3TSPxaG8fhrJC4OILKbGkC7pch%2BhMxDzvEgAyHn1QzFGZZCkrkbAKSBw6qjTUgWFhpT5noTRw8ZNa87eOB2Tr6pedlETDCvamfHA0HTyTHH8YoAgN9G6QKDUrE9l877W9yUkNLr2MlCYr2QfO8EiGq3lvpa51K55jo2hUsr1r2yxhHJoPF2o0K5DnTdUYtHor3R12m5%2FPol65KEke%2FF7LL9gF6hgiWpyNjflEODdadUWdYRYhIHqZxhyc7wKqnPyC34doitDuIzCdn7RLG55A7xL2QPDxoYkhhQu6aZt8rAAeP4eIukrKvwapK6sjqnEztRIJCjCouEDSUIBfAY90KLnauTj4c8YSGpkpVoTh%2BduSIvVgeTRqS6x9J23xoqHEw3j4vAddLToMPJL1Pk8ll9Uo2jM0EeGPAhy0vRDkj8hjreenMlIISq4ekIltKpHuaxOvo3CwIEm4JR75KwAwqtqbvwY6pgFn5FLzJOVMt3wl7ERhoQiMtE2tWxBmNLgi5xlBHjgynLvmaBYQR1lhbX6Zfr%2Bd5D0p3mg85wxA86sW8oePE%2FFKnbkuEZufOtlV32zo8UQ2ZvnYHMpi%2Boeag1itlLCKF6NBgbjaDtDBOTiDRBDxgKDUaf9qyjnA%2FErb%2F5%2FPMR3fNv1hIS43dNiztbX4iUfvfK%2BGUO14AFtsaHSLsjU7YbFf9CMwyecE&X-Amz-Signature=99efd38e5261b282f65757b0bd368cd43d75a60a1c94ec96e5cc9f91fbd1990c&X-Amz-SignedHeaders=host&x-id=GetObject)
