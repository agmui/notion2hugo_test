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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DLUMZW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTNdeybcI20q2Oa1nKrdWG8UNpQiLcYFnm6Hc2f%2FOEAiAHMHhse%2FdzR0eu6LWAFNa6d0cL%2B27hk3ekkbcQDyD8pSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwPAGxU5ufN2fJWW5KtwDtJ2DS4NLEuJaeI0g8%2B88Q7nOE%2BiUyXMyIbPAyA78UC8zOI50DLvPea%2Fr4yElPNycLjeMANG58KJy145%2FnPtYDcMR87t0AHWhQYSZy6fp16AWaO4%2FHrsPBl2As3QebinAogAZo80HGKVJOIBVgjT42JLIzq1yj0%2FUsoZREoGmUKlIT%2B302p7AGhZD%2FpnJYa%2FG9j4z9AzPcEZPsmR2rNwO3BcBV06UdvfL8AthMdf7YWU0bkRaHUwZ89N5mDMk4tzJdauM2hE8QSen30t7NJkQuDXsKcOCH0MHt%2BcRtVSmueltE9SbHlZjUa1o6vbKJXy%2Fh48gwvRqNNOX2zz9S0LQFneXrKk00ypPegwGNF4vVA%2FW53h5a%2BIPdiFNwbdMSzObajFCw97JWdIkbU%2B8XfS3ixPkg1KZR%2F0zClNsZ8zfpgPiCAUSf3TVIbQUir%2Bclu%2BJ%2FX5sl%2FBvrENWcnnh4tcncVR4m8diD3R2MbI1CBKoeZ1SkPJkb5fCZzUkfMaIXkcJ8WpSChJxDqadCwR1O7CuPFFOxc8keebFvo13zb3eQpJPaLwG83GRIEkxlBuXOVsiJMO9WLz9h024Islq59CQA9YRtEvFvJ27UHNONkz05cxEOdvSzhP2MkafD9Aw1Oa8wAY6pgHv8WdBU0nKyMRwZw0x2lXtQR8Qgsc29ixbYWZ6BkGJlcUfA0gRb6fY9BC4qhyGRx692hyV7FLnbOGlvRbd8kFMO2X1LdlV5gx%2FQAjZ%2FzHTv3kfF%2F%2BBZ2TLtYmR%2Bu7Jj7Syzjn88mVinhT6E6igiSsUvMj83DjKo8CcdJ%2BRGwhk0UwVZ8jDYnqZOGteyW6PWvGyNS0WXL591MjES4uCJ3fmIxpa3VUt&X-Amz-Signature=d058e1a79db8786bbca1628a8cbff37df50b8e42bdf42175aa54d2cdecfec8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DLUMZW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTNdeybcI20q2Oa1nKrdWG8UNpQiLcYFnm6Hc2f%2FOEAiAHMHhse%2FdzR0eu6LWAFNa6d0cL%2B27hk3ekkbcQDyD8pSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwPAGxU5ufN2fJWW5KtwDtJ2DS4NLEuJaeI0g8%2B88Q7nOE%2BiUyXMyIbPAyA78UC8zOI50DLvPea%2Fr4yElPNycLjeMANG58KJy145%2FnPtYDcMR87t0AHWhQYSZy6fp16AWaO4%2FHrsPBl2As3QebinAogAZo80HGKVJOIBVgjT42JLIzq1yj0%2FUsoZREoGmUKlIT%2B302p7AGhZD%2FpnJYa%2FG9j4z9AzPcEZPsmR2rNwO3BcBV06UdvfL8AthMdf7YWU0bkRaHUwZ89N5mDMk4tzJdauM2hE8QSen30t7NJkQuDXsKcOCH0MHt%2BcRtVSmueltE9SbHlZjUa1o6vbKJXy%2Fh48gwvRqNNOX2zz9S0LQFneXrKk00ypPegwGNF4vVA%2FW53h5a%2BIPdiFNwbdMSzObajFCw97JWdIkbU%2B8XfS3ixPkg1KZR%2F0zClNsZ8zfpgPiCAUSf3TVIbQUir%2Bclu%2BJ%2FX5sl%2FBvrENWcnnh4tcncVR4m8diD3R2MbI1CBKoeZ1SkPJkb5fCZzUkfMaIXkcJ8WpSChJxDqadCwR1O7CuPFFOxc8keebFvo13zb3eQpJPaLwG83GRIEkxlBuXOVsiJMO9WLz9h024Islq59CQA9YRtEvFvJ27UHNONkz05cxEOdvSzhP2MkafD9Aw1Oa8wAY6pgHv8WdBU0nKyMRwZw0x2lXtQR8Qgsc29ixbYWZ6BkGJlcUfA0gRb6fY9BC4qhyGRx692hyV7FLnbOGlvRbd8kFMO2X1LdlV5gx%2FQAjZ%2FzHTv3kfF%2F%2BBZ2TLtYmR%2Bu7Jj7Syzjn88mVinhT6E6igiSsUvMj83DjKo8CcdJ%2BRGwhk0UwVZ8jDYnqZOGteyW6PWvGyNS0WXL591MjES4uCJ3fmIxpa3VUt&X-Amz-Signature=dd06ca0a7662e4e88c818cecdd4b09c76325ba0e2a2ccc6d533e66b7cfbde228&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DLUMZW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTNdeybcI20q2Oa1nKrdWG8UNpQiLcYFnm6Hc2f%2FOEAiAHMHhse%2FdzR0eu6LWAFNa6d0cL%2B27hk3ekkbcQDyD8pSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwPAGxU5ufN2fJWW5KtwDtJ2DS4NLEuJaeI0g8%2B88Q7nOE%2BiUyXMyIbPAyA78UC8zOI50DLvPea%2Fr4yElPNycLjeMANG58KJy145%2FnPtYDcMR87t0AHWhQYSZy6fp16AWaO4%2FHrsPBl2As3QebinAogAZo80HGKVJOIBVgjT42JLIzq1yj0%2FUsoZREoGmUKlIT%2B302p7AGhZD%2FpnJYa%2FG9j4z9AzPcEZPsmR2rNwO3BcBV06UdvfL8AthMdf7YWU0bkRaHUwZ89N5mDMk4tzJdauM2hE8QSen30t7NJkQuDXsKcOCH0MHt%2BcRtVSmueltE9SbHlZjUa1o6vbKJXy%2Fh48gwvRqNNOX2zz9S0LQFneXrKk00ypPegwGNF4vVA%2FW53h5a%2BIPdiFNwbdMSzObajFCw97JWdIkbU%2B8XfS3ixPkg1KZR%2F0zClNsZ8zfpgPiCAUSf3TVIbQUir%2Bclu%2BJ%2FX5sl%2FBvrENWcnnh4tcncVR4m8diD3R2MbI1CBKoeZ1SkPJkb5fCZzUkfMaIXkcJ8WpSChJxDqadCwR1O7CuPFFOxc8keebFvo13zb3eQpJPaLwG83GRIEkxlBuXOVsiJMO9WLz9h024Islq59CQA9YRtEvFvJ27UHNONkz05cxEOdvSzhP2MkafD9Aw1Oa8wAY6pgHv8WdBU0nKyMRwZw0x2lXtQR8Qgsc29ixbYWZ6BkGJlcUfA0gRb6fY9BC4qhyGRx692hyV7FLnbOGlvRbd8kFMO2X1LdlV5gx%2FQAjZ%2FzHTv3kfF%2F%2BBZ2TLtYmR%2Bu7Jj7Syzjn88mVinhT6E6igiSsUvMj83DjKo8CcdJ%2BRGwhk0UwVZ8jDYnqZOGteyW6PWvGyNS0WXL591MjES4uCJ3fmIxpa3VUt&X-Amz-Signature=2ebb45a3ac205c6f6d8da1f6bb3199d5a6080daeaaf489018d9ae861624c6f56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DLUMZW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTNdeybcI20q2Oa1nKrdWG8UNpQiLcYFnm6Hc2f%2FOEAiAHMHhse%2FdzR0eu6LWAFNa6d0cL%2B27hk3ekkbcQDyD8pSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwPAGxU5ufN2fJWW5KtwDtJ2DS4NLEuJaeI0g8%2B88Q7nOE%2BiUyXMyIbPAyA78UC8zOI50DLvPea%2Fr4yElPNycLjeMANG58KJy145%2FnPtYDcMR87t0AHWhQYSZy6fp16AWaO4%2FHrsPBl2As3QebinAogAZo80HGKVJOIBVgjT42JLIzq1yj0%2FUsoZREoGmUKlIT%2B302p7AGhZD%2FpnJYa%2FG9j4z9AzPcEZPsmR2rNwO3BcBV06UdvfL8AthMdf7YWU0bkRaHUwZ89N5mDMk4tzJdauM2hE8QSen30t7NJkQuDXsKcOCH0MHt%2BcRtVSmueltE9SbHlZjUa1o6vbKJXy%2Fh48gwvRqNNOX2zz9S0LQFneXrKk00ypPegwGNF4vVA%2FW53h5a%2BIPdiFNwbdMSzObajFCw97JWdIkbU%2B8XfS3ixPkg1KZR%2F0zClNsZ8zfpgPiCAUSf3TVIbQUir%2Bclu%2BJ%2FX5sl%2FBvrENWcnnh4tcncVR4m8diD3R2MbI1CBKoeZ1SkPJkb5fCZzUkfMaIXkcJ8WpSChJxDqadCwR1O7CuPFFOxc8keebFvo13zb3eQpJPaLwG83GRIEkxlBuXOVsiJMO9WLz9h024Islq59CQA9YRtEvFvJ27UHNONkz05cxEOdvSzhP2MkafD9Aw1Oa8wAY6pgHv8WdBU0nKyMRwZw0x2lXtQR8Qgsc29ixbYWZ6BkGJlcUfA0gRb6fY9BC4qhyGRx692hyV7FLnbOGlvRbd8kFMO2X1LdlV5gx%2FQAjZ%2FzHTv3kfF%2F%2BBZ2TLtYmR%2Bu7Jj7Syzjn88mVinhT6E6igiSsUvMj83DjKo8CcdJ%2BRGwhk0UwVZ8jDYnqZOGteyW6PWvGyNS0WXL591MjES4uCJ3fmIxpa3VUt&X-Amz-Signature=83c0add07ca18a1833f4ff664c952263834e49cdc7e883cb18c4cafbfd823a43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DLUMZW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTNdeybcI20q2Oa1nKrdWG8UNpQiLcYFnm6Hc2f%2FOEAiAHMHhse%2FdzR0eu6LWAFNa6d0cL%2B27hk3ekkbcQDyD8pSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwPAGxU5ufN2fJWW5KtwDtJ2DS4NLEuJaeI0g8%2B88Q7nOE%2BiUyXMyIbPAyA78UC8zOI50DLvPea%2Fr4yElPNycLjeMANG58KJy145%2FnPtYDcMR87t0AHWhQYSZy6fp16AWaO4%2FHrsPBl2As3QebinAogAZo80HGKVJOIBVgjT42JLIzq1yj0%2FUsoZREoGmUKlIT%2B302p7AGhZD%2FpnJYa%2FG9j4z9AzPcEZPsmR2rNwO3BcBV06UdvfL8AthMdf7YWU0bkRaHUwZ89N5mDMk4tzJdauM2hE8QSen30t7NJkQuDXsKcOCH0MHt%2BcRtVSmueltE9SbHlZjUa1o6vbKJXy%2Fh48gwvRqNNOX2zz9S0LQFneXrKk00ypPegwGNF4vVA%2FW53h5a%2BIPdiFNwbdMSzObajFCw97JWdIkbU%2B8XfS3ixPkg1KZR%2F0zClNsZ8zfpgPiCAUSf3TVIbQUir%2Bclu%2BJ%2FX5sl%2FBvrENWcnnh4tcncVR4m8diD3R2MbI1CBKoeZ1SkPJkb5fCZzUkfMaIXkcJ8WpSChJxDqadCwR1O7CuPFFOxc8keebFvo13zb3eQpJPaLwG83GRIEkxlBuXOVsiJMO9WLz9h024Islq59CQA9YRtEvFvJ27UHNONkz05cxEOdvSzhP2MkafD9Aw1Oa8wAY6pgHv8WdBU0nKyMRwZw0x2lXtQR8Qgsc29ixbYWZ6BkGJlcUfA0gRb6fY9BC4qhyGRx692hyV7FLnbOGlvRbd8kFMO2X1LdlV5gx%2FQAjZ%2FzHTv3kfF%2F%2BBZ2TLtYmR%2Bu7Jj7Syzjn88mVinhT6E6igiSsUvMj83DjKo8CcdJ%2BRGwhk0UwVZ8jDYnqZOGteyW6PWvGyNS0WXL591MjES4uCJ3fmIxpa3VUt&X-Amz-Signature=4b18cbee36121d08e24c019d59392b6f0781d1055cb05a4d38b3299de47ebbef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DLUMZW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T083002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdTNdeybcI20q2Oa1nKrdWG8UNpQiLcYFnm6Hc2f%2FOEAiAHMHhse%2FdzR0eu6LWAFNa6d0cL%2B27hk3ekkbcQDyD8pSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwPAGxU5ufN2fJWW5KtwDtJ2DS4NLEuJaeI0g8%2B88Q7nOE%2BiUyXMyIbPAyA78UC8zOI50DLvPea%2Fr4yElPNycLjeMANG58KJy145%2FnPtYDcMR87t0AHWhQYSZy6fp16AWaO4%2FHrsPBl2As3QebinAogAZo80HGKVJOIBVgjT42JLIzq1yj0%2FUsoZREoGmUKlIT%2B302p7AGhZD%2FpnJYa%2FG9j4z9AzPcEZPsmR2rNwO3BcBV06UdvfL8AthMdf7YWU0bkRaHUwZ89N5mDMk4tzJdauM2hE8QSen30t7NJkQuDXsKcOCH0MHt%2BcRtVSmueltE9SbHlZjUa1o6vbKJXy%2Fh48gwvRqNNOX2zz9S0LQFneXrKk00ypPegwGNF4vVA%2FW53h5a%2BIPdiFNwbdMSzObajFCw97JWdIkbU%2B8XfS3ixPkg1KZR%2F0zClNsZ8zfpgPiCAUSf3TVIbQUir%2Bclu%2BJ%2FX5sl%2FBvrENWcnnh4tcncVR4m8diD3R2MbI1CBKoeZ1SkPJkb5fCZzUkfMaIXkcJ8WpSChJxDqadCwR1O7CuPFFOxc8keebFvo13zb3eQpJPaLwG83GRIEkxlBuXOVsiJMO9WLz9h024Islq59CQA9YRtEvFvJ27UHNONkz05cxEOdvSzhP2MkafD9Aw1Oa8wAY6pgHv8WdBU0nKyMRwZw0x2lXtQR8Qgsc29ixbYWZ6BkGJlcUfA0gRb6fY9BC4qhyGRx692hyV7FLnbOGlvRbd8kFMO2X1LdlV5gx%2FQAjZ%2FzHTv3kfF%2F%2BBZ2TLtYmR%2Bu7Jj7Syzjn88mVinhT6E6igiSsUvMj83DjKo8CcdJ%2BRGwhk0UwVZ8jDYnqZOGteyW6PWvGyNS0WXL591MjES4uCJ3fmIxpa3VUt&X-Amz-Signature=9f3e35e46208be46f5dc9190f14b1be6094e3bb1e815637dcea0fe4925c0410f&X-Amz-SignedHeaders=host&x-id=GetObject)
