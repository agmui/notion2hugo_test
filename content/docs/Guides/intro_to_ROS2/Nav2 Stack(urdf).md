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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFD6OWM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy%2BwjLCNlfNHhPMWx5%2BrUfSC3Zgh9BV0eiMAlUJs%2B4HwIhAL6NnesK5MLTYHKRWf03QLnc73qoBS4H%2FR%2B3cIgQLu6%2BKv8DCE0QABoMNjM3NDIzMTgzODA1IgxxW6E2Vi3Yzs5oJ1wq3AOZD7CyGtGL2sWkaGAeyY1DDHshPhhAP1ydyS0A94bmwJUWqAUmgrmD2MdiEi6Ibs5kGKD7aeI6pDcYiCkR56mPX%2BbV5u50qPzQY8zavggO3pthuut24S%2FrKZnFEtNuGuc58Qlo8F34xdTHF6jeyGp1NhQu72D5%2FptFTw0Z9LPt8bFRq89njylyqqmRC0qZIuIroa3YwaUeQka3ufGPygHCuFbMj7CtJD%2BttaBcSfpE3v2ntPrmXEkpA8sEvDBdyu7VBWzBeBe%2BWnmTZDt6txk%2F5L0sjkpikLOlV5Zef0mPyomAPE27hnVeN863d%2BbwC5wyrtBY%2BZWKoYzLEfHuE00INvZhKCsEmBvJGZqHTSTCegL7Sweerl3hAdOWTzwbpAwjC5hMMOy%2FwZiFDVx3fs%2FNuEBQf22OqXIX6rvrrC9IiOSL%2BG1Ezci2Q2km0oimprLjD7G8M35zxe5EclZYTocJWQ%2FDnVtUO3MdGrTxR5Tx8f3Yr6e0DkrjTvddrhZDpw0xD0z%2F9mgbyRoHNwA22Q194G919OM2M1NxWM7%2Be3LDIXFmVWZu5joUG91s4nlQhXxKkVgNh2WYBxac1rYsHSSVUZxMOz0Id40JJ8noROj3Oh%2BVvykqcThu4qYeJTCrx%2Fi9BjqkAZnhXcZmDCH7OoxrxIad0SD0r%2FqnELa0FPtpqQqtBeEP0hZ0o3CaxgBQtghnNlgh%2BrI6lJo%2FTCe6C8VWlCDFU9rwlPMAqAsnAwgegNPfsl6DSI8UIIHpplFiB4AZA%2BZxJr0KPgPxO68Srvjvnt5V%2Ft%2BSV16l2ilYCko%2FdQZbDkXGi5lNVdOyXPhEZPG0T0rg%2Ba3V4K5I96Fwf6AmjYfTBYYsnie9&X-Amz-Signature=b5af3a503ae81d79880ac41d1024bb4095a328c0f16819f0f97f2a3d0d0d2639&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFD6OWM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy%2BwjLCNlfNHhPMWx5%2BrUfSC3Zgh9BV0eiMAlUJs%2B4HwIhAL6NnesK5MLTYHKRWf03QLnc73qoBS4H%2FR%2B3cIgQLu6%2BKv8DCE0QABoMNjM3NDIzMTgzODA1IgxxW6E2Vi3Yzs5oJ1wq3AOZD7CyGtGL2sWkaGAeyY1DDHshPhhAP1ydyS0A94bmwJUWqAUmgrmD2MdiEi6Ibs5kGKD7aeI6pDcYiCkR56mPX%2BbV5u50qPzQY8zavggO3pthuut24S%2FrKZnFEtNuGuc58Qlo8F34xdTHF6jeyGp1NhQu72D5%2FptFTw0Z9LPt8bFRq89njylyqqmRC0qZIuIroa3YwaUeQka3ufGPygHCuFbMj7CtJD%2BttaBcSfpE3v2ntPrmXEkpA8sEvDBdyu7VBWzBeBe%2BWnmTZDt6txk%2F5L0sjkpikLOlV5Zef0mPyomAPE27hnVeN863d%2BbwC5wyrtBY%2BZWKoYzLEfHuE00INvZhKCsEmBvJGZqHTSTCegL7Sweerl3hAdOWTzwbpAwjC5hMMOy%2FwZiFDVx3fs%2FNuEBQf22OqXIX6rvrrC9IiOSL%2BG1Ezci2Q2km0oimprLjD7G8M35zxe5EclZYTocJWQ%2FDnVtUO3MdGrTxR5Tx8f3Yr6e0DkrjTvddrhZDpw0xD0z%2F9mgbyRoHNwA22Q194G919OM2M1NxWM7%2Be3LDIXFmVWZu5joUG91s4nlQhXxKkVgNh2WYBxac1rYsHSSVUZxMOz0Id40JJ8noROj3Oh%2BVvykqcThu4qYeJTCrx%2Fi9BjqkAZnhXcZmDCH7OoxrxIad0SD0r%2FqnELa0FPtpqQqtBeEP0hZ0o3CaxgBQtghnNlgh%2BrI6lJo%2FTCe6C8VWlCDFU9rwlPMAqAsnAwgegNPfsl6DSI8UIIHpplFiB4AZA%2BZxJr0KPgPxO68Srvjvnt5V%2Ft%2BSV16l2ilYCko%2FdQZbDkXGi5lNVdOyXPhEZPG0T0rg%2Ba3V4K5I96Fwf6AmjYfTBYYsnie9&X-Amz-Signature=5b8dc63ca38b208da65f69c7e1f1a1948c7f3bd0d286b0e34cfe54f223d201ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFD6OWM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy%2BwjLCNlfNHhPMWx5%2BrUfSC3Zgh9BV0eiMAlUJs%2B4HwIhAL6NnesK5MLTYHKRWf03QLnc73qoBS4H%2FR%2B3cIgQLu6%2BKv8DCE0QABoMNjM3NDIzMTgzODA1IgxxW6E2Vi3Yzs5oJ1wq3AOZD7CyGtGL2sWkaGAeyY1DDHshPhhAP1ydyS0A94bmwJUWqAUmgrmD2MdiEi6Ibs5kGKD7aeI6pDcYiCkR56mPX%2BbV5u50qPzQY8zavggO3pthuut24S%2FrKZnFEtNuGuc58Qlo8F34xdTHF6jeyGp1NhQu72D5%2FptFTw0Z9LPt8bFRq89njylyqqmRC0qZIuIroa3YwaUeQka3ufGPygHCuFbMj7CtJD%2BttaBcSfpE3v2ntPrmXEkpA8sEvDBdyu7VBWzBeBe%2BWnmTZDt6txk%2F5L0sjkpikLOlV5Zef0mPyomAPE27hnVeN863d%2BbwC5wyrtBY%2BZWKoYzLEfHuE00INvZhKCsEmBvJGZqHTSTCegL7Sweerl3hAdOWTzwbpAwjC5hMMOy%2FwZiFDVx3fs%2FNuEBQf22OqXIX6rvrrC9IiOSL%2BG1Ezci2Q2km0oimprLjD7G8M35zxe5EclZYTocJWQ%2FDnVtUO3MdGrTxR5Tx8f3Yr6e0DkrjTvddrhZDpw0xD0z%2F9mgbyRoHNwA22Q194G919OM2M1NxWM7%2Be3LDIXFmVWZu5joUG91s4nlQhXxKkVgNh2WYBxac1rYsHSSVUZxMOz0Id40JJ8noROj3Oh%2BVvykqcThu4qYeJTCrx%2Fi9BjqkAZnhXcZmDCH7OoxrxIad0SD0r%2FqnELa0FPtpqQqtBeEP0hZ0o3CaxgBQtghnNlgh%2BrI6lJo%2FTCe6C8VWlCDFU9rwlPMAqAsnAwgegNPfsl6DSI8UIIHpplFiB4AZA%2BZxJr0KPgPxO68Srvjvnt5V%2Ft%2BSV16l2ilYCko%2FdQZbDkXGi5lNVdOyXPhEZPG0T0rg%2Ba3V4K5I96Fwf6AmjYfTBYYsnie9&X-Amz-Signature=60459e46d48b92c3b90b4485ef58f4c5d795378641d9adce19342ea8491b0835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFD6OWM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy%2BwjLCNlfNHhPMWx5%2BrUfSC3Zgh9BV0eiMAlUJs%2B4HwIhAL6NnesK5MLTYHKRWf03QLnc73qoBS4H%2FR%2B3cIgQLu6%2BKv8DCE0QABoMNjM3NDIzMTgzODA1IgxxW6E2Vi3Yzs5oJ1wq3AOZD7CyGtGL2sWkaGAeyY1DDHshPhhAP1ydyS0A94bmwJUWqAUmgrmD2MdiEi6Ibs5kGKD7aeI6pDcYiCkR56mPX%2BbV5u50qPzQY8zavggO3pthuut24S%2FrKZnFEtNuGuc58Qlo8F34xdTHF6jeyGp1NhQu72D5%2FptFTw0Z9LPt8bFRq89njylyqqmRC0qZIuIroa3YwaUeQka3ufGPygHCuFbMj7CtJD%2BttaBcSfpE3v2ntPrmXEkpA8sEvDBdyu7VBWzBeBe%2BWnmTZDt6txk%2F5L0sjkpikLOlV5Zef0mPyomAPE27hnVeN863d%2BbwC5wyrtBY%2BZWKoYzLEfHuE00INvZhKCsEmBvJGZqHTSTCegL7Sweerl3hAdOWTzwbpAwjC5hMMOy%2FwZiFDVx3fs%2FNuEBQf22OqXIX6rvrrC9IiOSL%2BG1Ezci2Q2km0oimprLjD7G8M35zxe5EclZYTocJWQ%2FDnVtUO3MdGrTxR5Tx8f3Yr6e0DkrjTvddrhZDpw0xD0z%2F9mgbyRoHNwA22Q194G919OM2M1NxWM7%2Be3LDIXFmVWZu5joUG91s4nlQhXxKkVgNh2WYBxac1rYsHSSVUZxMOz0Id40JJ8noROj3Oh%2BVvykqcThu4qYeJTCrx%2Fi9BjqkAZnhXcZmDCH7OoxrxIad0SD0r%2FqnELa0FPtpqQqtBeEP0hZ0o3CaxgBQtghnNlgh%2BrI6lJo%2FTCe6C8VWlCDFU9rwlPMAqAsnAwgegNPfsl6DSI8UIIHpplFiB4AZA%2BZxJr0KPgPxO68Srvjvnt5V%2Ft%2BSV16l2ilYCko%2FdQZbDkXGi5lNVdOyXPhEZPG0T0rg%2Ba3V4K5I96Fwf6AmjYfTBYYsnie9&X-Amz-Signature=cf6f56b53646356a6c89c2ff3ddcf8cd21b978d836198e50655a5ef219621e46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFD6OWM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy%2BwjLCNlfNHhPMWx5%2BrUfSC3Zgh9BV0eiMAlUJs%2B4HwIhAL6NnesK5MLTYHKRWf03QLnc73qoBS4H%2FR%2B3cIgQLu6%2BKv8DCE0QABoMNjM3NDIzMTgzODA1IgxxW6E2Vi3Yzs5oJ1wq3AOZD7CyGtGL2sWkaGAeyY1DDHshPhhAP1ydyS0A94bmwJUWqAUmgrmD2MdiEi6Ibs5kGKD7aeI6pDcYiCkR56mPX%2BbV5u50qPzQY8zavggO3pthuut24S%2FrKZnFEtNuGuc58Qlo8F34xdTHF6jeyGp1NhQu72D5%2FptFTw0Z9LPt8bFRq89njylyqqmRC0qZIuIroa3YwaUeQka3ufGPygHCuFbMj7CtJD%2BttaBcSfpE3v2ntPrmXEkpA8sEvDBdyu7VBWzBeBe%2BWnmTZDt6txk%2F5L0sjkpikLOlV5Zef0mPyomAPE27hnVeN863d%2BbwC5wyrtBY%2BZWKoYzLEfHuE00INvZhKCsEmBvJGZqHTSTCegL7Sweerl3hAdOWTzwbpAwjC5hMMOy%2FwZiFDVx3fs%2FNuEBQf22OqXIX6rvrrC9IiOSL%2BG1Ezci2Q2km0oimprLjD7G8M35zxe5EclZYTocJWQ%2FDnVtUO3MdGrTxR5Tx8f3Yr6e0DkrjTvddrhZDpw0xD0z%2F9mgbyRoHNwA22Q194G919OM2M1NxWM7%2Be3LDIXFmVWZu5joUG91s4nlQhXxKkVgNh2WYBxac1rYsHSSVUZxMOz0Id40JJ8noROj3Oh%2BVvykqcThu4qYeJTCrx%2Fi9BjqkAZnhXcZmDCH7OoxrxIad0SD0r%2FqnELa0FPtpqQqtBeEP0hZ0o3CaxgBQtghnNlgh%2BrI6lJo%2FTCe6C8VWlCDFU9rwlPMAqAsnAwgegNPfsl6DSI8UIIHpplFiB4AZA%2BZxJr0KPgPxO68Srvjvnt5V%2Ft%2BSV16l2ilYCko%2FdQZbDkXGi5lNVdOyXPhEZPG0T0rg%2Ba3V4K5I96Fwf6AmjYfTBYYsnie9&X-Amz-Signature=762b6924900a2e216d8e441a2082d545f1a48be2463c35ebee32c8c60db91613&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFD6OWM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCy%2BwjLCNlfNHhPMWx5%2BrUfSC3Zgh9BV0eiMAlUJs%2B4HwIhAL6NnesK5MLTYHKRWf03QLnc73qoBS4H%2FR%2B3cIgQLu6%2BKv8DCE0QABoMNjM3NDIzMTgzODA1IgxxW6E2Vi3Yzs5oJ1wq3AOZD7CyGtGL2sWkaGAeyY1DDHshPhhAP1ydyS0A94bmwJUWqAUmgrmD2MdiEi6Ibs5kGKD7aeI6pDcYiCkR56mPX%2BbV5u50qPzQY8zavggO3pthuut24S%2FrKZnFEtNuGuc58Qlo8F34xdTHF6jeyGp1NhQu72D5%2FptFTw0Z9LPt8bFRq89njylyqqmRC0qZIuIroa3YwaUeQka3ufGPygHCuFbMj7CtJD%2BttaBcSfpE3v2ntPrmXEkpA8sEvDBdyu7VBWzBeBe%2BWnmTZDt6txk%2F5L0sjkpikLOlV5Zef0mPyomAPE27hnVeN863d%2BbwC5wyrtBY%2BZWKoYzLEfHuE00INvZhKCsEmBvJGZqHTSTCegL7Sweerl3hAdOWTzwbpAwjC5hMMOy%2FwZiFDVx3fs%2FNuEBQf22OqXIX6rvrrC9IiOSL%2BG1Ezci2Q2km0oimprLjD7G8M35zxe5EclZYTocJWQ%2FDnVtUO3MdGrTxR5Tx8f3Yr6e0DkrjTvddrhZDpw0xD0z%2F9mgbyRoHNwA22Q194G919OM2M1NxWM7%2Be3LDIXFmVWZu5joUG91s4nlQhXxKkVgNh2WYBxac1rYsHSSVUZxMOz0Id40JJ8noROj3Oh%2BVvykqcThu4qYeJTCrx%2Fi9BjqkAZnhXcZmDCH7OoxrxIad0SD0r%2FqnELa0FPtpqQqtBeEP0hZ0o3CaxgBQtghnNlgh%2BrI6lJo%2FTCe6C8VWlCDFU9rwlPMAqAsnAwgegNPfsl6DSI8UIIHpplFiB4AZA%2BZxJr0KPgPxO68Srvjvnt5V%2Ft%2BSV16l2ilYCko%2FdQZbDkXGi5lNVdOyXPhEZPG0T0rg%2Ba3V4K5I96Fwf6AmjYfTBYYsnie9&X-Amz-Signature=aab89f9a85eb9e29bbb43652f768c5dd80c39e16a01becf19246474f835c3b69&X-Amz-SignedHeaders=host&x-id=GetObject)
