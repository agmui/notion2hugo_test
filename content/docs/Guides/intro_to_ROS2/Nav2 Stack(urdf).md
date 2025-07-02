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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URL3K7FM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXdskW8nYhiigWzuBanjavRIEjXzVwyGg8winpc2Y1eAiEA804yWs%2FqiIGDJB7YLeIoycaBCLwAo1%2FP8ryfVuH5ezEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz2wpG8XiBYQ4vo9ircA3IuuZLi4YBmuVwUFWXimqzeLqoFjXYN5%2Bd0FlfNqSN4Szlpx5uSqHk2uIkAK10l5Lk7lFttzVoLjdcGWQLJri8N44CFs8euSiYDqxio3FDBCHSnxnvt0%2BJn68P1XkFGaDjm53DhS1eE%2BiyedaYUZww4CcjcXtrktLF6DYAMdl%2FIa%2F6zrkESgN53Au3iXwA6l%2BCUK9fon%2BDeNvBGs%2BW4IcktzESYrSB5RNaIfyLNi8iBa%2BOBxSlvPhVMYjAge25J4tKpVVHEufVjXfBv4CmmMFefM8WQuZp%2FYC4wKfi5zwebbscI6OCLlPPKhhuGtWX%2BxEpQaepMCWRvC1lwZWCezrB3N6OjZpsg6CrT%2FgFHiAoOe0ijoh%2Fm0HRfZMafiBQPyCsgFSGILhe9MSoZ4Qg%2BdrhZz59Px1HYkZ2DmV%2B0uGz4OCRQnzO%2BgazzQ%2FTzrPn%2BAxuwR1NLWmGgGnuRaVkSYBaMvroZXxku0Gqv9UEEEnDNNMqOqXanwCXH6R54yxGC9M%2FR9f6TNv7bQ9cZdXQtF8fWLujTNI9Yq0PlJabhFxKkEqobJp4SvifObKAsfH1P%2BG8DP1is0a304fcUvtXlvJsRKQtAVGakXfm6GBwJFlkYpJ66%2F61evYL8A%2F99MJfaksMGOqUBlyYW%2FvZ0JAaQXLFCJp%2F8LqoVo3hoV4vH0fVtt8HGaaAZ%2BUvxw24LqTVDU5LsW%2FwikuzHaz9OMt1Lgecs%2F5TMrACYvukANTg2EQOV4JIOttFMqdiGjd%2BEt%2F0NRdre%2BQCuQhKFgva%2FhDHH6%2FR7rSxAY%2FIhR6V3N7S2prtls924EQ5DfaGTB77438lxBtCNA4m9mq564Kzlj0yUS%2Fk2uQyy79XDvpyU&X-Amz-Signature=8c8ca0257310a64cbf9b972909ea1273d1b97981746f317798104c76995cc7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URL3K7FM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXdskW8nYhiigWzuBanjavRIEjXzVwyGg8winpc2Y1eAiEA804yWs%2FqiIGDJB7YLeIoycaBCLwAo1%2FP8ryfVuH5ezEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz2wpG8XiBYQ4vo9ircA3IuuZLi4YBmuVwUFWXimqzeLqoFjXYN5%2Bd0FlfNqSN4Szlpx5uSqHk2uIkAK10l5Lk7lFttzVoLjdcGWQLJri8N44CFs8euSiYDqxio3FDBCHSnxnvt0%2BJn68P1XkFGaDjm53DhS1eE%2BiyedaYUZww4CcjcXtrktLF6DYAMdl%2FIa%2F6zrkESgN53Au3iXwA6l%2BCUK9fon%2BDeNvBGs%2BW4IcktzESYrSB5RNaIfyLNi8iBa%2BOBxSlvPhVMYjAge25J4tKpVVHEufVjXfBv4CmmMFefM8WQuZp%2FYC4wKfi5zwebbscI6OCLlPPKhhuGtWX%2BxEpQaepMCWRvC1lwZWCezrB3N6OjZpsg6CrT%2FgFHiAoOe0ijoh%2Fm0HRfZMafiBQPyCsgFSGILhe9MSoZ4Qg%2BdrhZz59Px1HYkZ2DmV%2B0uGz4OCRQnzO%2BgazzQ%2FTzrPn%2BAxuwR1NLWmGgGnuRaVkSYBaMvroZXxku0Gqv9UEEEnDNNMqOqXanwCXH6R54yxGC9M%2FR9f6TNv7bQ9cZdXQtF8fWLujTNI9Yq0PlJabhFxKkEqobJp4SvifObKAsfH1P%2BG8DP1is0a304fcUvtXlvJsRKQtAVGakXfm6GBwJFlkYpJ66%2F61evYL8A%2F99MJfaksMGOqUBlyYW%2FvZ0JAaQXLFCJp%2F8LqoVo3hoV4vH0fVtt8HGaaAZ%2BUvxw24LqTVDU5LsW%2FwikuzHaz9OMt1Lgecs%2F5TMrACYvukANTg2EQOV4JIOttFMqdiGjd%2BEt%2F0NRdre%2BQCuQhKFgva%2FhDHH6%2FR7rSxAY%2FIhR6V3N7S2prtls924EQ5DfaGTB77438lxBtCNA4m9mq564Kzlj0yUS%2Fk2uQyy79XDvpyU&X-Amz-Signature=3ae3b7d9bd7b6a7ae830944f15e9644f66167c79c5e3b0a0a3751dcbe294403a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URL3K7FM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXdskW8nYhiigWzuBanjavRIEjXzVwyGg8winpc2Y1eAiEA804yWs%2FqiIGDJB7YLeIoycaBCLwAo1%2FP8ryfVuH5ezEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz2wpG8XiBYQ4vo9ircA3IuuZLi4YBmuVwUFWXimqzeLqoFjXYN5%2Bd0FlfNqSN4Szlpx5uSqHk2uIkAK10l5Lk7lFttzVoLjdcGWQLJri8N44CFs8euSiYDqxio3FDBCHSnxnvt0%2BJn68P1XkFGaDjm53DhS1eE%2BiyedaYUZww4CcjcXtrktLF6DYAMdl%2FIa%2F6zrkESgN53Au3iXwA6l%2BCUK9fon%2BDeNvBGs%2BW4IcktzESYrSB5RNaIfyLNi8iBa%2BOBxSlvPhVMYjAge25J4tKpVVHEufVjXfBv4CmmMFefM8WQuZp%2FYC4wKfi5zwebbscI6OCLlPPKhhuGtWX%2BxEpQaepMCWRvC1lwZWCezrB3N6OjZpsg6CrT%2FgFHiAoOe0ijoh%2Fm0HRfZMafiBQPyCsgFSGILhe9MSoZ4Qg%2BdrhZz59Px1HYkZ2DmV%2B0uGz4OCRQnzO%2BgazzQ%2FTzrPn%2BAxuwR1NLWmGgGnuRaVkSYBaMvroZXxku0Gqv9UEEEnDNNMqOqXanwCXH6R54yxGC9M%2FR9f6TNv7bQ9cZdXQtF8fWLujTNI9Yq0PlJabhFxKkEqobJp4SvifObKAsfH1P%2BG8DP1is0a304fcUvtXlvJsRKQtAVGakXfm6GBwJFlkYpJ66%2F61evYL8A%2F99MJfaksMGOqUBlyYW%2FvZ0JAaQXLFCJp%2F8LqoVo3hoV4vH0fVtt8HGaaAZ%2BUvxw24LqTVDU5LsW%2FwikuzHaz9OMt1Lgecs%2F5TMrACYvukANTg2EQOV4JIOttFMqdiGjd%2BEt%2F0NRdre%2BQCuQhKFgva%2FhDHH6%2FR7rSxAY%2FIhR6V3N7S2prtls924EQ5DfaGTB77438lxBtCNA4m9mq564Kzlj0yUS%2Fk2uQyy79XDvpyU&X-Amz-Signature=82b2192f62d30d8c31a36a58f7eb34725e9df3008e68fd02d5dfe41b21f27648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URL3K7FM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXdskW8nYhiigWzuBanjavRIEjXzVwyGg8winpc2Y1eAiEA804yWs%2FqiIGDJB7YLeIoycaBCLwAo1%2FP8ryfVuH5ezEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz2wpG8XiBYQ4vo9ircA3IuuZLi4YBmuVwUFWXimqzeLqoFjXYN5%2Bd0FlfNqSN4Szlpx5uSqHk2uIkAK10l5Lk7lFttzVoLjdcGWQLJri8N44CFs8euSiYDqxio3FDBCHSnxnvt0%2BJn68P1XkFGaDjm53DhS1eE%2BiyedaYUZww4CcjcXtrktLF6DYAMdl%2FIa%2F6zrkESgN53Au3iXwA6l%2BCUK9fon%2BDeNvBGs%2BW4IcktzESYrSB5RNaIfyLNi8iBa%2BOBxSlvPhVMYjAge25J4tKpVVHEufVjXfBv4CmmMFefM8WQuZp%2FYC4wKfi5zwebbscI6OCLlPPKhhuGtWX%2BxEpQaepMCWRvC1lwZWCezrB3N6OjZpsg6CrT%2FgFHiAoOe0ijoh%2Fm0HRfZMafiBQPyCsgFSGILhe9MSoZ4Qg%2BdrhZz59Px1HYkZ2DmV%2B0uGz4OCRQnzO%2BgazzQ%2FTzrPn%2BAxuwR1NLWmGgGnuRaVkSYBaMvroZXxku0Gqv9UEEEnDNNMqOqXanwCXH6R54yxGC9M%2FR9f6TNv7bQ9cZdXQtF8fWLujTNI9Yq0PlJabhFxKkEqobJp4SvifObKAsfH1P%2BG8DP1is0a304fcUvtXlvJsRKQtAVGakXfm6GBwJFlkYpJ66%2F61evYL8A%2F99MJfaksMGOqUBlyYW%2FvZ0JAaQXLFCJp%2F8LqoVo3hoV4vH0fVtt8HGaaAZ%2BUvxw24LqTVDU5LsW%2FwikuzHaz9OMt1Lgecs%2F5TMrACYvukANTg2EQOV4JIOttFMqdiGjd%2BEt%2F0NRdre%2BQCuQhKFgva%2FhDHH6%2FR7rSxAY%2FIhR6V3N7S2prtls924EQ5DfaGTB77438lxBtCNA4m9mq564Kzlj0yUS%2Fk2uQyy79XDvpyU&X-Amz-Signature=94e32ce449b484ffcc9a1402fbe3f00fb27c81a19a760965b4f13015f6289e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URL3K7FM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXdskW8nYhiigWzuBanjavRIEjXzVwyGg8winpc2Y1eAiEA804yWs%2FqiIGDJB7YLeIoycaBCLwAo1%2FP8ryfVuH5ezEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz2wpG8XiBYQ4vo9ircA3IuuZLi4YBmuVwUFWXimqzeLqoFjXYN5%2Bd0FlfNqSN4Szlpx5uSqHk2uIkAK10l5Lk7lFttzVoLjdcGWQLJri8N44CFs8euSiYDqxio3FDBCHSnxnvt0%2BJn68P1XkFGaDjm53DhS1eE%2BiyedaYUZww4CcjcXtrktLF6DYAMdl%2FIa%2F6zrkESgN53Au3iXwA6l%2BCUK9fon%2BDeNvBGs%2BW4IcktzESYrSB5RNaIfyLNi8iBa%2BOBxSlvPhVMYjAge25J4tKpVVHEufVjXfBv4CmmMFefM8WQuZp%2FYC4wKfi5zwebbscI6OCLlPPKhhuGtWX%2BxEpQaepMCWRvC1lwZWCezrB3N6OjZpsg6CrT%2FgFHiAoOe0ijoh%2Fm0HRfZMafiBQPyCsgFSGILhe9MSoZ4Qg%2BdrhZz59Px1HYkZ2DmV%2B0uGz4OCRQnzO%2BgazzQ%2FTzrPn%2BAxuwR1NLWmGgGnuRaVkSYBaMvroZXxku0Gqv9UEEEnDNNMqOqXanwCXH6R54yxGC9M%2FR9f6TNv7bQ9cZdXQtF8fWLujTNI9Yq0PlJabhFxKkEqobJp4SvifObKAsfH1P%2BG8DP1is0a304fcUvtXlvJsRKQtAVGakXfm6GBwJFlkYpJ66%2F61evYL8A%2F99MJfaksMGOqUBlyYW%2FvZ0JAaQXLFCJp%2F8LqoVo3hoV4vH0fVtt8HGaaAZ%2BUvxw24LqTVDU5LsW%2FwikuzHaz9OMt1Lgecs%2F5TMrACYvukANTg2EQOV4JIOttFMqdiGjd%2BEt%2F0NRdre%2BQCuQhKFgva%2FhDHH6%2FR7rSxAY%2FIhR6V3N7S2prtls924EQ5DfaGTB77438lxBtCNA4m9mq564Kzlj0yUS%2Fk2uQyy79XDvpyU&X-Amz-Signature=e4cadf851616e5abb73ac7791134b5dcedb511ad64a9a490e4768c21a8e0d392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URL3K7FM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXdskW8nYhiigWzuBanjavRIEjXzVwyGg8winpc2Y1eAiEA804yWs%2FqiIGDJB7YLeIoycaBCLwAo1%2FP8ryfVuH5ezEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz2wpG8XiBYQ4vo9ircA3IuuZLi4YBmuVwUFWXimqzeLqoFjXYN5%2Bd0FlfNqSN4Szlpx5uSqHk2uIkAK10l5Lk7lFttzVoLjdcGWQLJri8N44CFs8euSiYDqxio3FDBCHSnxnvt0%2BJn68P1XkFGaDjm53DhS1eE%2BiyedaYUZww4CcjcXtrktLF6DYAMdl%2FIa%2F6zrkESgN53Au3iXwA6l%2BCUK9fon%2BDeNvBGs%2BW4IcktzESYrSB5RNaIfyLNi8iBa%2BOBxSlvPhVMYjAge25J4tKpVVHEufVjXfBv4CmmMFefM8WQuZp%2FYC4wKfi5zwebbscI6OCLlPPKhhuGtWX%2BxEpQaepMCWRvC1lwZWCezrB3N6OjZpsg6CrT%2FgFHiAoOe0ijoh%2Fm0HRfZMafiBQPyCsgFSGILhe9MSoZ4Qg%2BdrhZz59Px1HYkZ2DmV%2B0uGz4OCRQnzO%2BgazzQ%2FTzrPn%2BAxuwR1NLWmGgGnuRaVkSYBaMvroZXxku0Gqv9UEEEnDNNMqOqXanwCXH6R54yxGC9M%2FR9f6TNv7bQ9cZdXQtF8fWLujTNI9Yq0PlJabhFxKkEqobJp4SvifObKAsfH1P%2BG8DP1is0a304fcUvtXlvJsRKQtAVGakXfm6GBwJFlkYpJ66%2F61evYL8A%2F99MJfaksMGOqUBlyYW%2FvZ0JAaQXLFCJp%2F8LqoVo3hoV4vH0fVtt8HGaaAZ%2BUvxw24LqTVDU5LsW%2FwikuzHaz9OMt1Lgecs%2F5TMrACYvukANTg2EQOV4JIOttFMqdiGjd%2BEt%2F0NRdre%2BQCuQhKFgva%2FhDHH6%2FR7rSxAY%2FIhR6V3N7S2prtls924EQ5DfaGTB77438lxBtCNA4m9mq564Kzlj0yUS%2Fk2uQyy79XDvpyU&X-Amz-Signature=ee333f20decddfd1da4becca448db3073ee4fb6597667223db5e5f4a9d41d785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
