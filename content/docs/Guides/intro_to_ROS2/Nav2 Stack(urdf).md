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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6OWA6R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzzFomtXe%2BCDOH8%2F7qRRc2fVfLEwVkdIuUiAoHZmu4rAiAorgNRu%2BP9Eic1pSxfHAuV%2BAuzVedTG%2FNzgNZ0ZQNvVyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkoJBg9zqA9fZoY7eKtwDDgk7c1FvrQ42oQasqt4%2FyEY0XDDrOspO1wALcB11XITOgWGATptkQPr%2B0%2B3HkLgPJaQhSZEYvMKK2XaJu8LMhs4EEisqT8dyZyaAopHpRV6ywUu4ZCcF%2Fc6hGyDXwMFRKky0O3lzyCQFGtC8m6Hdbh3wuG%2BjOikcESwecteytg6HXTGdwrmcwtQB3oN0vKpMs6%2BcixXjjH419bCVWf4T9%2BPHleKU7j13Lg0TDHqdxwJmo92AxyQUVI0ox4%2FOuywh4Lr0qDYgf0%2FURcobZ%2FhkFsBnn0tLTfdq6JSDcTI7toNNLyNV7v90EFdAeADD4uiZxGT6rxt%2BQfxUGTijV581SqXbhjS0MahXjj4o62nKZp8vqBxRSxcI3p8CCKhTPlsryT6oYI0DsMOhfXB52FWmAIjCepAcq0DtpRt5h5RROUmEooWRoDQpU5AGP0pcWx1E%2BTvZGpcc5cYvktCEUKVx61%2BMoZQSHnCksZn8IRy0NZxdnO0d0XWD35ipPxR2VxF1uxBxKe9h3h33nnSDkXzO5claduh8R66XvRx4vt3XOOw8amwFWS%2BOrmISWsY5qtGNq6wI7ByTlfSsa%2FPgAIt%2FYjhxhfk%2FrgFESH%2FYDtyHOJfsmeudRFRgv3%2Fuw0Qw2%2FnQvgY6pgHI9To4p49ya%2BPK5d4jm%2BAbix6LU%2BIW95OjwRYzvVQIZdEoGi0oQ2mJZNxy%2Fwnuce0rMN7URNme5nzb9589Mdelr%2FAfu%2BqBvsXs%2BkKtl3dOzOnoI4af3TV%2FdhpVEogIxJlksKGf0gkKKPER6AoIjl4hjy22c%2BMH9Hs%2FIeSGRQFujRtTOwTG2iV6OTQ8gQUyarVGBkXPKzJmz%2FrtB5l7BEbziTtLJErJ&X-Amz-Signature=d03052aa78125e287821afd6085aa100f35490c5e44a4edeca66dbe9a1d1a068&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6OWA6R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzzFomtXe%2BCDOH8%2F7qRRc2fVfLEwVkdIuUiAoHZmu4rAiAorgNRu%2BP9Eic1pSxfHAuV%2BAuzVedTG%2FNzgNZ0ZQNvVyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkoJBg9zqA9fZoY7eKtwDDgk7c1FvrQ42oQasqt4%2FyEY0XDDrOspO1wALcB11XITOgWGATptkQPr%2B0%2B3HkLgPJaQhSZEYvMKK2XaJu8LMhs4EEisqT8dyZyaAopHpRV6ywUu4ZCcF%2Fc6hGyDXwMFRKky0O3lzyCQFGtC8m6Hdbh3wuG%2BjOikcESwecteytg6HXTGdwrmcwtQB3oN0vKpMs6%2BcixXjjH419bCVWf4T9%2BPHleKU7j13Lg0TDHqdxwJmo92AxyQUVI0ox4%2FOuywh4Lr0qDYgf0%2FURcobZ%2FhkFsBnn0tLTfdq6JSDcTI7toNNLyNV7v90EFdAeADD4uiZxGT6rxt%2BQfxUGTijV581SqXbhjS0MahXjj4o62nKZp8vqBxRSxcI3p8CCKhTPlsryT6oYI0DsMOhfXB52FWmAIjCepAcq0DtpRt5h5RROUmEooWRoDQpU5AGP0pcWx1E%2BTvZGpcc5cYvktCEUKVx61%2BMoZQSHnCksZn8IRy0NZxdnO0d0XWD35ipPxR2VxF1uxBxKe9h3h33nnSDkXzO5claduh8R66XvRx4vt3XOOw8amwFWS%2BOrmISWsY5qtGNq6wI7ByTlfSsa%2FPgAIt%2FYjhxhfk%2FrgFESH%2FYDtyHOJfsmeudRFRgv3%2Fuw0Qw2%2FnQvgY6pgHI9To4p49ya%2BPK5d4jm%2BAbix6LU%2BIW95OjwRYzvVQIZdEoGi0oQ2mJZNxy%2Fwnuce0rMN7URNme5nzb9589Mdelr%2FAfu%2BqBvsXs%2BkKtl3dOzOnoI4af3TV%2FdhpVEogIxJlksKGf0gkKKPER6AoIjl4hjy22c%2BMH9Hs%2FIeSGRQFujRtTOwTG2iV6OTQ8gQUyarVGBkXPKzJmz%2FrtB5l7BEbziTtLJErJ&X-Amz-Signature=4f980a2d24cfa6d9daf4beba9df4deb294718064894a45a9d55a0298c76e56a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6OWA6R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzzFomtXe%2BCDOH8%2F7qRRc2fVfLEwVkdIuUiAoHZmu4rAiAorgNRu%2BP9Eic1pSxfHAuV%2BAuzVedTG%2FNzgNZ0ZQNvVyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkoJBg9zqA9fZoY7eKtwDDgk7c1FvrQ42oQasqt4%2FyEY0XDDrOspO1wALcB11XITOgWGATptkQPr%2B0%2B3HkLgPJaQhSZEYvMKK2XaJu8LMhs4EEisqT8dyZyaAopHpRV6ywUu4ZCcF%2Fc6hGyDXwMFRKky0O3lzyCQFGtC8m6Hdbh3wuG%2BjOikcESwecteytg6HXTGdwrmcwtQB3oN0vKpMs6%2BcixXjjH419bCVWf4T9%2BPHleKU7j13Lg0TDHqdxwJmo92AxyQUVI0ox4%2FOuywh4Lr0qDYgf0%2FURcobZ%2FhkFsBnn0tLTfdq6JSDcTI7toNNLyNV7v90EFdAeADD4uiZxGT6rxt%2BQfxUGTijV581SqXbhjS0MahXjj4o62nKZp8vqBxRSxcI3p8CCKhTPlsryT6oYI0DsMOhfXB52FWmAIjCepAcq0DtpRt5h5RROUmEooWRoDQpU5AGP0pcWx1E%2BTvZGpcc5cYvktCEUKVx61%2BMoZQSHnCksZn8IRy0NZxdnO0d0XWD35ipPxR2VxF1uxBxKe9h3h33nnSDkXzO5claduh8R66XvRx4vt3XOOw8amwFWS%2BOrmISWsY5qtGNq6wI7ByTlfSsa%2FPgAIt%2FYjhxhfk%2FrgFESH%2FYDtyHOJfsmeudRFRgv3%2Fuw0Qw2%2FnQvgY6pgHI9To4p49ya%2BPK5d4jm%2BAbix6LU%2BIW95OjwRYzvVQIZdEoGi0oQ2mJZNxy%2Fwnuce0rMN7URNme5nzb9589Mdelr%2FAfu%2BqBvsXs%2BkKtl3dOzOnoI4af3TV%2FdhpVEogIxJlksKGf0gkKKPER6AoIjl4hjy22c%2BMH9Hs%2FIeSGRQFujRtTOwTG2iV6OTQ8gQUyarVGBkXPKzJmz%2FrtB5l7BEbziTtLJErJ&X-Amz-Signature=b5d3653f6cc84cae70c0f13977ee3a19032d640ebef8f76c0603ce68805aab02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6OWA6R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzzFomtXe%2BCDOH8%2F7qRRc2fVfLEwVkdIuUiAoHZmu4rAiAorgNRu%2BP9Eic1pSxfHAuV%2BAuzVedTG%2FNzgNZ0ZQNvVyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkoJBg9zqA9fZoY7eKtwDDgk7c1FvrQ42oQasqt4%2FyEY0XDDrOspO1wALcB11XITOgWGATptkQPr%2B0%2B3HkLgPJaQhSZEYvMKK2XaJu8LMhs4EEisqT8dyZyaAopHpRV6ywUu4ZCcF%2Fc6hGyDXwMFRKky0O3lzyCQFGtC8m6Hdbh3wuG%2BjOikcESwecteytg6HXTGdwrmcwtQB3oN0vKpMs6%2BcixXjjH419bCVWf4T9%2BPHleKU7j13Lg0TDHqdxwJmo92AxyQUVI0ox4%2FOuywh4Lr0qDYgf0%2FURcobZ%2FhkFsBnn0tLTfdq6JSDcTI7toNNLyNV7v90EFdAeADD4uiZxGT6rxt%2BQfxUGTijV581SqXbhjS0MahXjj4o62nKZp8vqBxRSxcI3p8CCKhTPlsryT6oYI0DsMOhfXB52FWmAIjCepAcq0DtpRt5h5RROUmEooWRoDQpU5AGP0pcWx1E%2BTvZGpcc5cYvktCEUKVx61%2BMoZQSHnCksZn8IRy0NZxdnO0d0XWD35ipPxR2VxF1uxBxKe9h3h33nnSDkXzO5claduh8R66XvRx4vt3XOOw8amwFWS%2BOrmISWsY5qtGNq6wI7ByTlfSsa%2FPgAIt%2FYjhxhfk%2FrgFESH%2FYDtyHOJfsmeudRFRgv3%2Fuw0Qw2%2FnQvgY6pgHI9To4p49ya%2BPK5d4jm%2BAbix6LU%2BIW95OjwRYzvVQIZdEoGi0oQ2mJZNxy%2Fwnuce0rMN7URNme5nzb9589Mdelr%2FAfu%2BqBvsXs%2BkKtl3dOzOnoI4af3TV%2FdhpVEogIxJlksKGf0gkKKPER6AoIjl4hjy22c%2BMH9Hs%2FIeSGRQFujRtTOwTG2iV6OTQ8gQUyarVGBkXPKzJmz%2FrtB5l7BEbziTtLJErJ&X-Amz-Signature=eb01500f24d7088e93f6beee9ba49012bb7dc13cd9c7fb7555c40082671e1352&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6OWA6R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzzFomtXe%2BCDOH8%2F7qRRc2fVfLEwVkdIuUiAoHZmu4rAiAorgNRu%2BP9Eic1pSxfHAuV%2BAuzVedTG%2FNzgNZ0ZQNvVyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkoJBg9zqA9fZoY7eKtwDDgk7c1FvrQ42oQasqt4%2FyEY0XDDrOspO1wALcB11XITOgWGATptkQPr%2B0%2B3HkLgPJaQhSZEYvMKK2XaJu8LMhs4EEisqT8dyZyaAopHpRV6ywUu4ZCcF%2Fc6hGyDXwMFRKky0O3lzyCQFGtC8m6Hdbh3wuG%2BjOikcESwecteytg6HXTGdwrmcwtQB3oN0vKpMs6%2BcixXjjH419bCVWf4T9%2BPHleKU7j13Lg0TDHqdxwJmo92AxyQUVI0ox4%2FOuywh4Lr0qDYgf0%2FURcobZ%2FhkFsBnn0tLTfdq6JSDcTI7toNNLyNV7v90EFdAeADD4uiZxGT6rxt%2BQfxUGTijV581SqXbhjS0MahXjj4o62nKZp8vqBxRSxcI3p8CCKhTPlsryT6oYI0DsMOhfXB52FWmAIjCepAcq0DtpRt5h5RROUmEooWRoDQpU5AGP0pcWx1E%2BTvZGpcc5cYvktCEUKVx61%2BMoZQSHnCksZn8IRy0NZxdnO0d0XWD35ipPxR2VxF1uxBxKe9h3h33nnSDkXzO5claduh8R66XvRx4vt3XOOw8amwFWS%2BOrmISWsY5qtGNq6wI7ByTlfSsa%2FPgAIt%2FYjhxhfk%2FrgFESH%2FYDtyHOJfsmeudRFRgv3%2Fuw0Qw2%2FnQvgY6pgHI9To4p49ya%2BPK5d4jm%2BAbix6LU%2BIW95OjwRYzvVQIZdEoGi0oQ2mJZNxy%2Fwnuce0rMN7URNme5nzb9589Mdelr%2FAfu%2BqBvsXs%2BkKtl3dOzOnoI4af3TV%2FdhpVEogIxJlksKGf0gkKKPER6AoIjl4hjy22c%2BMH9Hs%2FIeSGRQFujRtTOwTG2iV6OTQ8gQUyarVGBkXPKzJmz%2FrtB5l7BEbziTtLJErJ&X-Amz-Signature=f13f63753234d376155ec45c163e4c386f1f9cf00daf28fb4c9e63d2230d0944&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6OWA6R%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzzFomtXe%2BCDOH8%2F7qRRc2fVfLEwVkdIuUiAoHZmu4rAiAorgNRu%2BP9Eic1pSxfHAuV%2BAuzVedTG%2FNzgNZ0ZQNvVyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkoJBg9zqA9fZoY7eKtwDDgk7c1FvrQ42oQasqt4%2FyEY0XDDrOspO1wALcB11XITOgWGATptkQPr%2B0%2B3HkLgPJaQhSZEYvMKK2XaJu8LMhs4EEisqT8dyZyaAopHpRV6ywUu4ZCcF%2Fc6hGyDXwMFRKky0O3lzyCQFGtC8m6Hdbh3wuG%2BjOikcESwecteytg6HXTGdwrmcwtQB3oN0vKpMs6%2BcixXjjH419bCVWf4T9%2BPHleKU7j13Lg0TDHqdxwJmo92AxyQUVI0ox4%2FOuywh4Lr0qDYgf0%2FURcobZ%2FhkFsBnn0tLTfdq6JSDcTI7toNNLyNV7v90EFdAeADD4uiZxGT6rxt%2BQfxUGTijV581SqXbhjS0MahXjj4o62nKZp8vqBxRSxcI3p8CCKhTPlsryT6oYI0DsMOhfXB52FWmAIjCepAcq0DtpRt5h5RROUmEooWRoDQpU5AGP0pcWx1E%2BTvZGpcc5cYvktCEUKVx61%2BMoZQSHnCksZn8IRy0NZxdnO0d0XWD35ipPxR2VxF1uxBxKe9h3h33nnSDkXzO5claduh8R66XvRx4vt3XOOw8amwFWS%2BOrmISWsY5qtGNq6wI7ByTlfSsa%2FPgAIt%2FYjhxhfk%2FrgFESH%2FYDtyHOJfsmeudRFRgv3%2Fuw0Qw2%2FnQvgY6pgHI9To4p49ya%2BPK5d4jm%2BAbix6LU%2BIW95OjwRYzvVQIZdEoGi0oQ2mJZNxy%2Fwnuce0rMN7URNme5nzb9589Mdelr%2FAfu%2BqBvsXs%2BkKtl3dOzOnoI4af3TV%2FdhpVEogIxJlksKGf0gkKKPER6AoIjl4hjy22c%2BMH9Hs%2FIeSGRQFujRtTOwTG2iV6OTQ8gQUyarVGBkXPKzJmz%2FrtB5l7BEbziTtLJErJ&X-Amz-Signature=64ffc574c49388d0a430ce50f7356e593a00b0115346a8ca6e9f74808a9a1963&X-Amz-SignedHeaders=host&x-id=GetObject)
