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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUHRYSV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2JrmfNFmqWwDQ%2FTrLuNu95i5BL7gXsjYUJlACZOr9QIgCADKJYdop4lEtnSp204U2V2il3Uoh6Hy5tgHyBd68zcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE0r7eeED%2BLrB2MDsCrcA%2Bx24q3qU9GifT7zeLcXBwC07BkJVnULKg0yWlJZYi%2FPM4Q5XsfLXwlGNU5znRmqHxYVgC5eRXWWfpiq85WvjSph%2BgjhNsUbkFCZ9TnX37EvIsXX5e%2Fo2HN%2FnzwXoK7eYiCB33FGxBTOpQJPFG482j%2BSZZHq5X79TZvZoudF%2FkGY0qEplkuO%2FKBDJMavX5VAEuccr5spo43ZMsC7EhJ1sljZILb2bAGJhRglBGa3o8gP8VjV4H8ZAmwLYY%2FqU7KGD%2FL8%2BY0GyTBt6lOZeabwA9rvkvpe%2FHDg3VWyM%2B6gD5Ibr2VatXawdntYRoXV%2Fxtt6BrY3hDY%2BcnIQKjkXroD2MzunBhN4PhQLsh842XHQXIdWPGil%2B2SAREH2EPxXuvr0U9NWVfTqJpgfVfnxqAS0nmVbtXRyWw24N0MuLFB9k%2FqnaceCLNDBytDwTthRd0RIZWQDpVxYTiGCkTB0O%2FVWXliWt%2BNykstDBvXwK%2BP4KYeXrhtvmhupnvTmDomKSkEau8KUiv8jka0JY%2FN7rkUw4Tf4viiaz%2BkoHm%2F8aS3HY90cMmuWbBe%2B2M7PM2WyBHTlPUi6S4J7nGPep88SCOqEHJOiGaWQLAVYUKdZ20qXsxt90OsPRZqzqiAicpkMMHUzr8GOqUBUbrlfxl6CtuToua1lUSNFjR7rL0iguSTiHMKzzyQKz%2BJACX8uWKTA%2F26%2Byh%2Ffjmhey8ZYBxLeh9DUXpBll3iV%2B9YtEPyrk1gGJFRPQr4FKfsMnsLz2Q7FAPgyKACoISTpj4UsAe9WIdMgl4%2Bl3c8z3DDJ%2BbODP50OIAqAraS1%2BVUL85o9CV8O%2BA0Az94c9khPkbxEHaz8ATU9jEbttu7a6Gbh54I&X-Amz-Signature=a3b3e8c440fd892194b0bd53376c712bc47e2241d58f25db986ad3583a50ec56&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUHRYSV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2JrmfNFmqWwDQ%2FTrLuNu95i5BL7gXsjYUJlACZOr9QIgCADKJYdop4lEtnSp204U2V2il3Uoh6Hy5tgHyBd68zcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE0r7eeED%2BLrB2MDsCrcA%2Bx24q3qU9GifT7zeLcXBwC07BkJVnULKg0yWlJZYi%2FPM4Q5XsfLXwlGNU5znRmqHxYVgC5eRXWWfpiq85WvjSph%2BgjhNsUbkFCZ9TnX37EvIsXX5e%2Fo2HN%2FnzwXoK7eYiCB33FGxBTOpQJPFG482j%2BSZZHq5X79TZvZoudF%2FkGY0qEplkuO%2FKBDJMavX5VAEuccr5spo43ZMsC7EhJ1sljZILb2bAGJhRglBGa3o8gP8VjV4H8ZAmwLYY%2FqU7KGD%2FL8%2BY0GyTBt6lOZeabwA9rvkvpe%2FHDg3VWyM%2B6gD5Ibr2VatXawdntYRoXV%2Fxtt6BrY3hDY%2BcnIQKjkXroD2MzunBhN4PhQLsh842XHQXIdWPGil%2B2SAREH2EPxXuvr0U9NWVfTqJpgfVfnxqAS0nmVbtXRyWw24N0MuLFB9k%2FqnaceCLNDBytDwTthRd0RIZWQDpVxYTiGCkTB0O%2FVWXliWt%2BNykstDBvXwK%2BP4KYeXrhtvmhupnvTmDomKSkEau8KUiv8jka0JY%2FN7rkUw4Tf4viiaz%2BkoHm%2F8aS3HY90cMmuWbBe%2B2M7PM2WyBHTlPUi6S4J7nGPep88SCOqEHJOiGaWQLAVYUKdZ20qXsxt90OsPRZqzqiAicpkMMHUzr8GOqUBUbrlfxl6CtuToua1lUSNFjR7rL0iguSTiHMKzzyQKz%2BJACX8uWKTA%2F26%2Byh%2Ffjmhey8ZYBxLeh9DUXpBll3iV%2B9YtEPyrk1gGJFRPQr4FKfsMnsLz2Q7FAPgyKACoISTpj4UsAe9WIdMgl4%2Bl3c8z3DDJ%2BbODP50OIAqAraS1%2BVUL85o9CV8O%2BA0Az94c9khPkbxEHaz8ATU9jEbttu7a6Gbh54I&X-Amz-Signature=d017568f5401cc18c7ebaad41d87bc4853934ea9bb31f7d07560a338b02a1e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUHRYSV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2JrmfNFmqWwDQ%2FTrLuNu95i5BL7gXsjYUJlACZOr9QIgCADKJYdop4lEtnSp204U2V2il3Uoh6Hy5tgHyBd68zcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE0r7eeED%2BLrB2MDsCrcA%2Bx24q3qU9GifT7zeLcXBwC07BkJVnULKg0yWlJZYi%2FPM4Q5XsfLXwlGNU5znRmqHxYVgC5eRXWWfpiq85WvjSph%2BgjhNsUbkFCZ9TnX37EvIsXX5e%2Fo2HN%2FnzwXoK7eYiCB33FGxBTOpQJPFG482j%2BSZZHq5X79TZvZoudF%2FkGY0qEplkuO%2FKBDJMavX5VAEuccr5spo43ZMsC7EhJ1sljZILb2bAGJhRglBGa3o8gP8VjV4H8ZAmwLYY%2FqU7KGD%2FL8%2BY0GyTBt6lOZeabwA9rvkvpe%2FHDg3VWyM%2B6gD5Ibr2VatXawdntYRoXV%2Fxtt6BrY3hDY%2BcnIQKjkXroD2MzunBhN4PhQLsh842XHQXIdWPGil%2B2SAREH2EPxXuvr0U9NWVfTqJpgfVfnxqAS0nmVbtXRyWw24N0MuLFB9k%2FqnaceCLNDBytDwTthRd0RIZWQDpVxYTiGCkTB0O%2FVWXliWt%2BNykstDBvXwK%2BP4KYeXrhtvmhupnvTmDomKSkEau8KUiv8jka0JY%2FN7rkUw4Tf4viiaz%2BkoHm%2F8aS3HY90cMmuWbBe%2B2M7PM2WyBHTlPUi6S4J7nGPep88SCOqEHJOiGaWQLAVYUKdZ20qXsxt90OsPRZqzqiAicpkMMHUzr8GOqUBUbrlfxl6CtuToua1lUSNFjR7rL0iguSTiHMKzzyQKz%2BJACX8uWKTA%2F26%2Byh%2Ffjmhey8ZYBxLeh9DUXpBll3iV%2B9YtEPyrk1gGJFRPQr4FKfsMnsLz2Q7FAPgyKACoISTpj4UsAe9WIdMgl4%2Bl3c8z3DDJ%2BbODP50OIAqAraS1%2BVUL85o9CV8O%2BA0Az94c9khPkbxEHaz8ATU9jEbttu7a6Gbh54I&X-Amz-Signature=6b4f8cb8057d4f61db80550be9a359223791eb4eeb4e2da8ed44197ef71cc9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUHRYSV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2JrmfNFmqWwDQ%2FTrLuNu95i5BL7gXsjYUJlACZOr9QIgCADKJYdop4lEtnSp204U2V2il3Uoh6Hy5tgHyBd68zcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE0r7eeED%2BLrB2MDsCrcA%2Bx24q3qU9GifT7zeLcXBwC07BkJVnULKg0yWlJZYi%2FPM4Q5XsfLXwlGNU5znRmqHxYVgC5eRXWWfpiq85WvjSph%2BgjhNsUbkFCZ9TnX37EvIsXX5e%2Fo2HN%2FnzwXoK7eYiCB33FGxBTOpQJPFG482j%2BSZZHq5X79TZvZoudF%2FkGY0qEplkuO%2FKBDJMavX5VAEuccr5spo43ZMsC7EhJ1sljZILb2bAGJhRglBGa3o8gP8VjV4H8ZAmwLYY%2FqU7KGD%2FL8%2BY0GyTBt6lOZeabwA9rvkvpe%2FHDg3VWyM%2B6gD5Ibr2VatXawdntYRoXV%2Fxtt6BrY3hDY%2BcnIQKjkXroD2MzunBhN4PhQLsh842XHQXIdWPGil%2B2SAREH2EPxXuvr0U9NWVfTqJpgfVfnxqAS0nmVbtXRyWw24N0MuLFB9k%2FqnaceCLNDBytDwTthRd0RIZWQDpVxYTiGCkTB0O%2FVWXliWt%2BNykstDBvXwK%2BP4KYeXrhtvmhupnvTmDomKSkEau8KUiv8jka0JY%2FN7rkUw4Tf4viiaz%2BkoHm%2F8aS3HY90cMmuWbBe%2B2M7PM2WyBHTlPUi6S4J7nGPep88SCOqEHJOiGaWQLAVYUKdZ20qXsxt90OsPRZqzqiAicpkMMHUzr8GOqUBUbrlfxl6CtuToua1lUSNFjR7rL0iguSTiHMKzzyQKz%2BJACX8uWKTA%2F26%2Byh%2Ffjmhey8ZYBxLeh9DUXpBll3iV%2B9YtEPyrk1gGJFRPQr4FKfsMnsLz2Q7FAPgyKACoISTpj4UsAe9WIdMgl4%2Bl3c8z3DDJ%2BbODP50OIAqAraS1%2BVUL85o9CV8O%2BA0Az94c9khPkbxEHaz8ATU9jEbttu7a6Gbh54I&X-Amz-Signature=9831374d72ead09aed87ec6506b2d638fec8c2dac43172e2094eac5459924bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUHRYSV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2JrmfNFmqWwDQ%2FTrLuNu95i5BL7gXsjYUJlACZOr9QIgCADKJYdop4lEtnSp204U2V2il3Uoh6Hy5tgHyBd68zcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE0r7eeED%2BLrB2MDsCrcA%2Bx24q3qU9GifT7zeLcXBwC07BkJVnULKg0yWlJZYi%2FPM4Q5XsfLXwlGNU5znRmqHxYVgC5eRXWWfpiq85WvjSph%2BgjhNsUbkFCZ9TnX37EvIsXX5e%2Fo2HN%2FnzwXoK7eYiCB33FGxBTOpQJPFG482j%2BSZZHq5X79TZvZoudF%2FkGY0qEplkuO%2FKBDJMavX5VAEuccr5spo43ZMsC7EhJ1sljZILb2bAGJhRglBGa3o8gP8VjV4H8ZAmwLYY%2FqU7KGD%2FL8%2BY0GyTBt6lOZeabwA9rvkvpe%2FHDg3VWyM%2B6gD5Ibr2VatXawdntYRoXV%2Fxtt6BrY3hDY%2BcnIQKjkXroD2MzunBhN4PhQLsh842XHQXIdWPGil%2B2SAREH2EPxXuvr0U9NWVfTqJpgfVfnxqAS0nmVbtXRyWw24N0MuLFB9k%2FqnaceCLNDBytDwTthRd0RIZWQDpVxYTiGCkTB0O%2FVWXliWt%2BNykstDBvXwK%2BP4KYeXrhtvmhupnvTmDomKSkEau8KUiv8jka0JY%2FN7rkUw4Tf4viiaz%2BkoHm%2F8aS3HY90cMmuWbBe%2B2M7PM2WyBHTlPUi6S4J7nGPep88SCOqEHJOiGaWQLAVYUKdZ20qXsxt90OsPRZqzqiAicpkMMHUzr8GOqUBUbrlfxl6CtuToua1lUSNFjR7rL0iguSTiHMKzzyQKz%2BJACX8uWKTA%2F26%2Byh%2Ffjmhey8ZYBxLeh9DUXpBll3iV%2B9YtEPyrk1gGJFRPQr4FKfsMnsLz2Q7FAPgyKACoISTpj4UsAe9WIdMgl4%2Bl3c8z3DDJ%2BbODP50OIAqAraS1%2BVUL85o9CV8O%2BA0Az94c9khPkbxEHaz8ATU9jEbttu7a6Gbh54I&X-Amz-Signature=e4945ac592c6efa344327da7551698898e0e3c94a6f6149b1be18b87904d6ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUHRYSV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe2JrmfNFmqWwDQ%2FTrLuNu95i5BL7gXsjYUJlACZOr9QIgCADKJYdop4lEtnSp204U2V2il3Uoh6Hy5tgHyBd68zcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE0r7eeED%2BLrB2MDsCrcA%2Bx24q3qU9GifT7zeLcXBwC07BkJVnULKg0yWlJZYi%2FPM4Q5XsfLXwlGNU5znRmqHxYVgC5eRXWWfpiq85WvjSph%2BgjhNsUbkFCZ9TnX37EvIsXX5e%2Fo2HN%2FnzwXoK7eYiCB33FGxBTOpQJPFG482j%2BSZZHq5X79TZvZoudF%2FkGY0qEplkuO%2FKBDJMavX5VAEuccr5spo43ZMsC7EhJ1sljZILb2bAGJhRglBGa3o8gP8VjV4H8ZAmwLYY%2FqU7KGD%2FL8%2BY0GyTBt6lOZeabwA9rvkvpe%2FHDg3VWyM%2B6gD5Ibr2VatXawdntYRoXV%2Fxtt6BrY3hDY%2BcnIQKjkXroD2MzunBhN4PhQLsh842XHQXIdWPGil%2B2SAREH2EPxXuvr0U9NWVfTqJpgfVfnxqAS0nmVbtXRyWw24N0MuLFB9k%2FqnaceCLNDBytDwTthRd0RIZWQDpVxYTiGCkTB0O%2FVWXliWt%2BNykstDBvXwK%2BP4KYeXrhtvmhupnvTmDomKSkEau8KUiv8jka0JY%2FN7rkUw4Tf4viiaz%2BkoHm%2F8aS3HY90cMmuWbBe%2B2M7PM2WyBHTlPUi6S4J7nGPep88SCOqEHJOiGaWQLAVYUKdZ20qXsxt90OsPRZqzqiAicpkMMHUzr8GOqUBUbrlfxl6CtuToua1lUSNFjR7rL0iguSTiHMKzzyQKz%2BJACX8uWKTA%2F26%2Byh%2Ffjmhey8ZYBxLeh9DUXpBll3iV%2B9YtEPyrk1gGJFRPQr4FKfsMnsLz2Q7FAPgyKACoISTpj4UsAe9WIdMgl4%2Bl3c8z3DDJ%2BbODP50OIAqAraS1%2BVUL85o9CV8O%2BA0Az94c9khPkbxEHaz8ATU9jEbttu7a6Gbh54I&X-Amz-Signature=e287b06e3a8bbcc7eea211d5ff9c15d10591f64b44ff1c4bdabc51c5e4f5d363&X-Amz-SignedHeaders=host&x-id=GetObject)
