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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTGMSPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAaRom9slwL1vEy2mUcbH9xhweSh2CHkCfKXJPjflAEAiEAve%2Fm3mRY%2BKEq13wJRyFgfcXe9Ts3m4DAvnqouBpyqWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo16e5qpmy8W4I%2FEyrcAx4G9ZNofPyS1JyxQIrlY52xAz5WpM%2FFczl92We3e9JVJ4nFR8mplTMbOa4d%2Bf5HRrPuc6OMu2VOCceUVGbtUHp3wIo%2B6PaReRw45PmJf7IYj%2BvMW36O2awZCXh34%2FARs%2FsyTc9DlHjXIlFL3DRJ0c%2BemCzyxD1fAxtEKnJvubn0%2F5PmuIeXvI%2Fh88Vd4dM1NVgwRKZjSBdWGA7iPFjBLolzKpAy9demje6tS9%2FrGdI9M4kungRo9f9%2BKcukRDI5P2o9aKc%2FIn5p6AM%2BXoQgclcNM4mQGQaFpkkW0OKPKdv2cdr8p%2B2lHQ8KPFE9l%2Flh21RJi9mTfLopZAW5YgavsoRTMLsKgJsITFzDnHiV%2FbTQ5gzDNfJItP7lYte5PD8pUFzFLDXpEraUt52mR2uS3tG8v2Aq4ql9Z6%2Fw3V8NzvmAIUeQHTQDJGG9UeV1shCnoRq6%2BQPgfiQmURpYgmZ2P%2BwMf8s7PobfPxli9%2B%2FOgE4dCARUK2HZszl4hxv%2BgJEM7TdCX0O51rTIctNLb26KJN0tS%2B38YEQFGf%2BKE%2BjWHPHektHFFyYgUbby76B3Hf39CDVc2e7LrFrS5uq4NGcO9DmjbcqrHgd8gaD8bDfYGcxaR%2B3%2F%2Bh3hoz%2BwUopKMMKutcEGOqUB2b%2B9g6VrFxEyneJa319rC0uZxMSTg9mPUZoD0pCVaHwqerQg6Auzaz3s50jUjxm9EYLNWZ4cEWzDiDGXkPR6qXHr6iC4IOj14hqQzGkufQmJ3ZYW2tDaBaKVjUBM0ucHrBpSGgyNfeyzZ0kH4l6vuaW0ZpIwbqGDfYLoY9JswLz9W%2FiLbeX1hkUAHAmn11PRuG6eyrgTtb0KGJd5JY9eTMzI6YHF&X-Amz-Signature=4275a8faee63e06e53188f2f1c00eee7f6cc2bd60bcfb338e22e25ac34705875&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTGMSPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAaRom9slwL1vEy2mUcbH9xhweSh2CHkCfKXJPjflAEAiEAve%2Fm3mRY%2BKEq13wJRyFgfcXe9Ts3m4DAvnqouBpyqWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo16e5qpmy8W4I%2FEyrcAx4G9ZNofPyS1JyxQIrlY52xAz5WpM%2FFczl92We3e9JVJ4nFR8mplTMbOa4d%2Bf5HRrPuc6OMu2VOCceUVGbtUHp3wIo%2B6PaReRw45PmJf7IYj%2BvMW36O2awZCXh34%2FARs%2FsyTc9DlHjXIlFL3DRJ0c%2BemCzyxD1fAxtEKnJvubn0%2F5PmuIeXvI%2Fh88Vd4dM1NVgwRKZjSBdWGA7iPFjBLolzKpAy9demje6tS9%2FrGdI9M4kungRo9f9%2BKcukRDI5P2o9aKc%2FIn5p6AM%2BXoQgclcNM4mQGQaFpkkW0OKPKdv2cdr8p%2B2lHQ8KPFE9l%2Flh21RJi9mTfLopZAW5YgavsoRTMLsKgJsITFzDnHiV%2FbTQ5gzDNfJItP7lYte5PD8pUFzFLDXpEraUt52mR2uS3tG8v2Aq4ql9Z6%2Fw3V8NzvmAIUeQHTQDJGG9UeV1shCnoRq6%2BQPgfiQmURpYgmZ2P%2BwMf8s7PobfPxli9%2B%2FOgE4dCARUK2HZszl4hxv%2BgJEM7TdCX0O51rTIctNLb26KJN0tS%2B38YEQFGf%2BKE%2BjWHPHektHFFyYgUbby76B3Hf39CDVc2e7LrFrS5uq4NGcO9DmjbcqrHgd8gaD8bDfYGcxaR%2B3%2F%2Bh3hoz%2BwUopKMMKutcEGOqUB2b%2B9g6VrFxEyneJa319rC0uZxMSTg9mPUZoD0pCVaHwqerQg6Auzaz3s50jUjxm9EYLNWZ4cEWzDiDGXkPR6qXHr6iC4IOj14hqQzGkufQmJ3ZYW2tDaBaKVjUBM0ucHrBpSGgyNfeyzZ0kH4l6vuaW0ZpIwbqGDfYLoY9JswLz9W%2FiLbeX1hkUAHAmn11PRuG6eyrgTtb0KGJd5JY9eTMzI6YHF&X-Amz-Signature=2613c41ebe2a1c63428a93bb6da9a36a9a87923eb362803751ed1f4f0454d862&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTGMSPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAaRom9slwL1vEy2mUcbH9xhweSh2CHkCfKXJPjflAEAiEAve%2Fm3mRY%2BKEq13wJRyFgfcXe9Ts3m4DAvnqouBpyqWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo16e5qpmy8W4I%2FEyrcAx4G9ZNofPyS1JyxQIrlY52xAz5WpM%2FFczl92We3e9JVJ4nFR8mplTMbOa4d%2Bf5HRrPuc6OMu2VOCceUVGbtUHp3wIo%2B6PaReRw45PmJf7IYj%2BvMW36O2awZCXh34%2FARs%2FsyTc9DlHjXIlFL3DRJ0c%2BemCzyxD1fAxtEKnJvubn0%2F5PmuIeXvI%2Fh88Vd4dM1NVgwRKZjSBdWGA7iPFjBLolzKpAy9demje6tS9%2FrGdI9M4kungRo9f9%2BKcukRDI5P2o9aKc%2FIn5p6AM%2BXoQgclcNM4mQGQaFpkkW0OKPKdv2cdr8p%2B2lHQ8KPFE9l%2Flh21RJi9mTfLopZAW5YgavsoRTMLsKgJsITFzDnHiV%2FbTQ5gzDNfJItP7lYte5PD8pUFzFLDXpEraUt52mR2uS3tG8v2Aq4ql9Z6%2Fw3V8NzvmAIUeQHTQDJGG9UeV1shCnoRq6%2BQPgfiQmURpYgmZ2P%2BwMf8s7PobfPxli9%2B%2FOgE4dCARUK2HZszl4hxv%2BgJEM7TdCX0O51rTIctNLb26KJN0tS%2B38YEQFGf%2BKE%2BjWHPHektHFFyYgUbby76B3Hf39CDVc2e7LrFrS5uq4NGcO9DmjbcqrHgd8gaD8bDfYGcxaR%2B3%2F%2Bh3hoz%2BwUopKMMKutcEGOqUB2b%2B9g6VrFxEyneJa319rC0uZxMSTg9mPUZoD0pCVaHwqerQg6Auzaz3s50jUjxm9EYLNWZ4cEWzDiDGXkPR6qXHr6iC4IOj14hqQzGkufQmJ3ZYW2tDaBaKVjUBM0ucHrBpSGgyNfeyzZ0kH4l6vuaW0ZpIwbqGDfYLoY9JswLz9W%2FiLbeX1hkUAHAmn11PRuG6eyrgTtb0KGJd5JY9eTMzI6YHF&X-Amz-Signature=46611cc51f781bcfe5a4ce51e86d2d587243bfa64456edafcc005569f418accc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTGMSPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAaRom9slwL1vEy2mUcbH9xhweSh2CHkCfKXJPjflAEAiEAve%2Fm3mRY%2BKEq13wJRyFgfcXe9Ts3m4DAvnqouBpyqWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo16e5qpmy8W4I%2FEyrcAx4G9ZNofPyS1JyxQIrlY52xAz5WpM%2FFczl92We3e9JVJ4nFR8mplTMbOa4d%2Bf5HRrPuc6OMu2VOCceUVGbtUHp3wIo%2B6PaReRw45PmJf7IYj%2BvMW36O2awZCXh34%2FARs%2FsyTc9DlHjXIlFL3DRJ0c%2BemCzyxD1fAxtEKnJvubn0%2F5PmuIeXvI%2Fh88Vd4dM1NVgwRKZjSBdWGA7iPFjBLolzKpAy9demje6tS9%2FrGdI9M4kungRo9f9%2BKcukRDI5P2o9aKc%2FIn5p6AM%2BXoQgclcNM4mQGQaFpkkW0OKPKdv2cdr8p%2B2lHQ8KPFE9l%2Flh21RJi9mTfLopZAW5YgavsoRTMLsKgJsITFzDnHiV%2FbTQ5gzDNfJItP7lYte5PD8pUFzFLDXpEraUt52mR2uS3tG8v2Aq4ql9Z6%2Fw3V8NzvmAIUeQHTQDJGG9UeV1shCnoRq6%2BQPgfiQmURpYgmZ2P%2BwMf8s7PobfPxli9%2B%2FOgE4dCARUK2HZszl4hxv%2BgJEM7TdCX0O51rTIctNLb26KJN0tS%2B38YEQFGf%2BKE%2BjWHPHektHFFyYgUbby76B3Hf39CDVc2e7LrFrS5uq4NGcO9DmjbcqrHgd8gaD8bDfYGcxaR%2B3%2F%2Bh3hoz%2BwUopKMMKutcEGOqUB2b%2B9g6VrFxEyneJa319rC0uZxMSTg9mPUZoD0pCVaHwqerQg6Auzaz3s50jUjxm9EYLNWZ4cEWzDiDGXkPR6qXHr6iC4IOj14hqQzGkufQmJ3ZYW2tDaBaKVjUBM0ucHrBpSGgyNfeyzZ0kH4l6vuaW0ZpIwbqGDfYLoY9JswLz9W%2FiLbeX1hkUAHAmn11PRuG6eyrgTtb0KGJd5JY9eTMzI6YHF&X-Amz-Signature=4d6151e22e79cec4fb7d040294c8a236034152db7ee81f451507acd1881d2b88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTGMSPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAaRom9slwL1vEy2mUcbH9xhweSh2CHkCfKXJPjflAEAiEAve%2Fm3mRY%2BKEq13wJRyFgfcXe9Ts3m4DAvnqouBpyqWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo16e5qpmy8W4I%2FEyrcAx4G9ZNofPyS1JyxQIrlY52xAz5WpM%2FFczl92We3e9JVJ4nFR8mplTMbOa4d%2Bf5HRrPuc6OMu2VOCceUVGbtUHp3wIo%2B6PaReRw45PmJf7IYj%2BvMW36O2awZCXh34%2FARs%2FsyTc9DlHjXIlFL3DRJ0c%2BemCzyxD1fAxtEKnJvubn0%2F5PmuIeXvI%2Fh88Vd4dM1NVgwRKZjSBdWGA7iPFjBLolzKpAy9demje6tS9%2FrGdI9M4kungRo9f9%2BKcukRDI5P2o9aKc%2FIn5p6AM%2BXoQgclcNM4mQGQaFpkkW0OKPKdv2cdr8p%2B2lHQ8KPFE9l%2Flh21RJi9mTfLopZAW5YgavsoRTMLsKgJsITFzDnHiV%2FbTQ5gzDNfJItP7lYte5PD8pUFzFLDXpEraUt52mR2uS3tG8v2Aq4ql9Z6%2Fw3V8NzvmAIUeQHTQDJGG9UeV1shCnoRq6%2BQPgfiQmURpYgmZ2P%2BwMf8s7PobfPxli9%2B%2FOgE4dCARUK2HZszl4hxv%2BgJEM7TdCX0O51rTIctNLb26KJN0tS%2B38YEQFGf%2BKE%2BjWHPHektHFFyYgUbby76B3Hf39CDVc2e7LrFrS5uq4NGcO9DmjbcqrHgd8gaD8bDfYGcxaR%2B3%2F%2Bh3hoz%2BwUopKMMKutcEGOqUB2b%2B9g6VrFxEyneJa319rC0uZxMSTg9mPUZoD0pCVaHwqerQg6Auzaz3s50jUjxm9EYLNWZ4cEWzDiDGXkPR6qXHr6iC4IOj14hqQzGkufQmJ3ZYW2tDaBaKVjUBM0ucHrBpSGgyNfeyzZ0kH4l6vuaW0ZpIwbqGDfYLoY9JswLz9W%2FiLbeX1hkUAHAmn11PRuG6eyrgTtb0KGJd5JY9eTMzI6YHF&X-Amz-Signature=9f3960ced92967fdebf92e061c5dc0ede6e425cadaf72f2612d2ee3fa5e3030a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTGMSPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAaRom9slwL1vEy2mUcbH9xhweSh2CHkCfKXJPjflAEAiEAve%2Fm3mRY%2BKEq13wJRyFgfcXe9Ts3m4DAvnqouBpyqWYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo16e5qpmy8W4I%2FEyrcAx4G9ZNofPyS1JyxQIrlY52xAz5WpM%2FFczl92We3e9JVJ4nFR8mplTMbOa4d%2Bf5HRrPuc6OMu2VOCceUVGbtUHp3wIo%2B6PaReRw45PmJf7IYj%2BvMW36O2awZCXh34%2FARs%2FsyTc9DlHjXIlFL3DRJ0c%2BemCzyxD1fAxtEKnJvubn0%2F5PmuIeXvI%2Fh88Vd4dM1NVgwRKZjSBdWGA7iPFjBLolzKpAy9demje6tS9%2FrGdI9M4kungRo9f9%2BKcukRDI5P2o9aKc%2FIn5p6AM%2BXoQgclcNM4mQGQaFpkkW0OKPKdv2cdr8p%2B2lHQ8KPFE9l%2Flh21RJi9mTfLopZAW5YgavsoRTMLsKgJsITFzDnHiV%2FbTQ5gzDNfJItP7lYte5PD8pUFzFLDXpEraUt52mR2uS3tG8v2Aq4ql9Z6%2Fw3V8NzvmAIUeQHTQDJGG9UeV1shCnoRq6%2BQPgfiQmURpYgmZ2P%2BwMf8s7PobfPxli9%2B%2FOgE4dCARUK2HZszl4hxv%2BgJEM7TdCX0O51rTIctNLb26KJN0tS%2B38YEQFGf%2BKE%2BjWHPHektHFFyYgUbby76B3Hf39CDVc2e7LrFrS5uq4NGcO9DmjbcqrHgd8gaD8bDfYGcxaR%2B3%2F%2Bh3hoz%2BwUopKMMKutcEGOqUB2b%2B9g6VrFxEyneJa319rC0uZxMSTg9mPUZoD0pCVaHwqerQg6Auzaz3s50jUjxm9EYLNWZ4cEWzDiDGXkPR6qXHr6iC4IOj14hqQzGkufQmJ3ZYW2tDaBaKVjUBM0ucHrBpSGgyNfeyzZ0kH4l6vuaW0ZpIwbqGDfYLoY9JswLz9W%2FiLbeX1hkUAHAmn11PRuG6eyrgTtb0KGJd5JY9eTMzI6YHF&X-Amz-Signature=39b36c40319fb302e4ec5a20765b4c94b3146aa1a713c98c60547ec842c270ee&X-Amz-SignedHeaders=host&x-id=GetObject)
