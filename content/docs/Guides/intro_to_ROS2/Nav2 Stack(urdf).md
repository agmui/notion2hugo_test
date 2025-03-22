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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFY773ZF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGSX%2Bc%2FtrZs%2B%2Fr9b1iWifhf2U%2BhRgMjuVxxTsHJwh4dtAiBL%2Bg7Zn6BCblW9RFotMUR%2BNDAHvSkc7YpH2vsqTTr0UyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDjIh0jUGJ5zSQEcKtwDRnn4FXIoq5lrE5Go65nSSc%2F5rPsDNE4X2TMVY3wrlmAaNrxFEaek7Yc7Fj220ptAh5kJkNYIM1mcyx%2BiO6LkHA8q3Y8c7lLjQ6Av7wHMNhUlqScKqzRccP7o0oFztSLyEZuEY5YGf%2FHx3B%2FNoFMzPfV1esTfYBAxhOSZY%2BqtxCfzUTKNfqyEdql%2Bo6Yhkd2KaQMLLuRhmkGlrz1oiXdKPGYBUCSlaLACLsAsm5MRkWPM%2F71JPHt1jXa3N0xmSiJ958eoIQ8tDLPX2F%2FZTiqXRmkYhw3t6%2Fx394imTUK9gbxMcurpf1gj41gffn%2FKENYl8yZPqaU4zhM6lNVVPGPYpNIJJiqNkjMcx%2BiUx%2FLl4wWp%2BDtFSfqAGFPDIf1ha2amSo951WoX03YUWmj85BKG7GDkH2XE%2F6BlwPSHwsOuEhUP8hjQ9PZMHZEWCtvOAjKrC2QlQaWvOfM4NokgDrrnEni6JPeFERWmcLXfyVSxgn32%2Fq56L5%2B8gZqcJyck5EvUV4k7ePwUxAw3nk9w9SzKeVWcTvVpOsmcrvp5PfwAF2sxT4VDvh9bLPfwFEQFHcPDLwZzj6mQr3%2BGYQ5%2BW90udRVNRhX9YORcY%2BowG%2B%2BbGfZQs2MvOeTplYS%2BfqQw2Kr5vgY6pgGqt3x8TIkU7M9Eo8F1oH3PtOtC8e71wgICIEqqqCaoikE0ckKoklOwBeY8Xb%2BnoxXXO5Sg5EBgAlEUck%2Foi3GDdmmHbBhWiNc2aVFmd4MNJ7ZaMjkocOV650AzQzJ8FmJZ3z1ObGvLtQVODU3aTAtEvz23BEeLjj%2F8giBm6n7dUmnnq8qetcgY%2Bek%2Bi%2B64kzN8Iqy2b%2Bk0tLGzI4kGkp%2F8axt8zGL1&X-Amz-Signature=b5a233f52c0b6b1d12516fa39810ae4317f3215fbd47861470c45d06454436f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFY773ZF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGSX%2Bc%2FtrZs%2B%2Fr9b1iWifhf2U%2BhRgMjuVxxTsHJwh4dtAiBL%2Bg7Zn6BCblW9RFotMUR%2BNDAHvSkc7YpH2vsqTTr0UyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDjIh0jUGJ5zSQEcKtwDRnn4FXIoq5lrE5Go65nSSc%2F5rPsDNE4X2TMVY3wrlmAaNrxFEaek7Yc7Fj220ptAh5kJkNYIM1mcyx%2BiO6LkHA8q3Y8c7lLjQ6Av7wHMNhUlqScKqzRccP7o0oFztSLyEZuEY5YGf%2FHx3B%2FNoFMzPfV1esTfYBAxhOSZY%2BqtxCfzUTKNfqyEdql%2Bo6Yhkd2KaQMLLuRhmkGlrz1oiXdKPGYBUCSlaLACLsAsm5MRkWPM%2F71JPHt1jXa3N0xmSiJ958eoIQ8tDLPX2F%2FZTiqXRmkYhw3t6%2Fx394imTUK9gbxMcurpf1gj41gffn%2FKENYl8yZPqaU4zhM6lNVVPGPYpNIJJiqNkjMcx%2BiUx%2FLl4wWp%2BDtFSfqAGFPDIf1ha2amSo951WoX03YUWmj85BKG7GDkH2XE%2F6BlwPSHwsOuEhUP8hjQ9PZMHZEWCtvOAjKrC2QlQaWvOfM4NokgDrrnEni6JPeFERWmcLXfyVSxgn32%2Fq56L5%2B8gZqcJyck5EvUV4k7ePwUxAw3nk9w9SzKeVWcTvVpOsmcrvp5PfwAF2sxT4VDvh9bLPfwFEQFHcPDLwZzj6mQr3%2BGYQ5%2BW90udRVNRhX9YORcY%2BowG%2B%2BbGfZQs2MvOeTplYS%2BfqQw2Kr5vgY6pgGqt3x8TIkU7M9Eo8F1oH3PtOtC8e71wgICIEqqqCaoikE0ckKoklOwBeY8Xb%2BnoxXXO5Sg5EBgAlEUck%2Foi3GDdmmHbBhWiNc2aVFmd4MNJ7ZaMjkocOV650AzQzJ8FmJZ3z1ObGvLtQVODU3aTAtEvz23BEeLjj%2F8giBm6n7dUmnnq8qetcgY%2Bek%2Bi%2B64kzN8Iqy2b%2Bk0tLGzI4kGkp%2F8axt8zGL1&X-Amz-Signature=3077acc4be124e0c8cc6660160c646de40e3ae3f0ea7059a2a702f1ea1bd41f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFY773ZF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGSX%2Bc%2FtrZs%2B%2Fr9b1iWifhf2U%2BhRgMjuVxxTsHJwh4dtAiBL%2Bg7Zn6BCblW9RFotMUR%2BNDAHvSkc7YpH2vsqTTr0UyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDjIh0jUGJ5zSQEcKtwDRnn4FXIoq5lrE5Go65nSSc%2F5rPsDNE4X2TMVY3wrlmAaNrxFEaek7Yc7Fj220ptAh5kJkNYIM1mcyx%2BiO6LkHA8q3Y8c7lLjQ6Av7wHMNhUlqScKqzRccP7o0oFztSLyEZuEY5YGf%2FHx3B%2FNoFMzPfV1esTfYBAxhOSZY%2BqtxCfzUTKNfqyEdql%2Bo6Yhkd2KaQMLLuRhmkGlrz1oiXdKPGYBUCSlaLACLsAsm5MRkWPM%2F71JPHt1jXa3N0xmSiJ958eoIQ8tDLPX2F%2FZTiqXRmkYhw3t6%2Fx394imTUK9gbxMcurpf1gj41gffn%2FKENYl8yZPqaU4zhM6lNVVPGPYpNIJJiqNkjMcx%2BiUx%2FLl4wWp%2BDtFSfqAGFPDIf1ha2amSo951WoX03YUWmj85BKG7GDkH2XE%2F6BlwPSHwsOuEhUP8hjQ9PZMHZEWCtvOAjKrC2QlQaWvOfM4NokgDrrnEni6JPeFERWmcLXfyVSxgn32%2Fq56L5%2B8gZqcJyck5EvUV4k7ePwUxAw3nk9w9SzKeVWcTvVpOsmcrvp5PfwAF2sxT4VDvh9bLPfwFEQFHcPDLwZzj6mQr3%2BGYQ5%2BW90udRVNRhX9YORcY%2BowG%2B%2BbGfZQs2MvOeTplYS%2BfqQw2Kr5vgY6pgGqt3x8TIkU7M9Eo8F1oH3PtOtC8e71wgICIEqqqCaoikE0ckKoklOwBeY8Xb%2BnoxXXO5Sg5EBgAlEUck%2Foi3GDdmmHbBhWiNc2aVFmd4MNJ7ZaMjkocOV650AzQzJ8FmJZ3z1ObGvLtQVODU3aTAtEvz23BEeLjj%2F8giBm6n7dUmnnq8qetcgY%2Bek%2Bi%2B64kzN8Iqy2b%2Bk0tLGzI4kGkp%2F8axt8zGL1&X-Amz-Signature=d066778d1dda8f1195091adae88cc9fca52cc2af0903d6620c2183a187c88c69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFY773ZF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGSX%2Bc%2FtrZs%2B%2Fr9b1iWifhf2U%2BhRgMjuVxxTsHJwh4dtAiBL%2Bg7Zn6BCblW9RFotMUR%2BNDAHvSkc7YpH2vsqTTr0UyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDjIh0jUGJ5zSQEcKtwDRnn4FXIoq5lrE5Go65nSSc%2F5rPsDNE4X2TMVY3wrlmAaNrxFEaek7Yc7Fj220ptAh5kJkNYIM1mcyx%2BiO6LkHA8q3Y8c7lLjQ6Av7wHMNhUlqScKqzRccP7o0oFztSLyEZuEY5YGf%2FHx3B%2FNoFMzPfV1esTfYBAxhOSZY%2BqtxCfzUTKNfqyEdql%2Bo6Yhkd2KaQMLLuRhmkGlrz1oiXdKPGYBUCSlaLACLsAsm5MRkWPM%2F71JPHt1jXa3N0xmSiJ958eoIQ8tDLPX2F%2FZTiqXRmkYhw3t6%2Fx394imTUK9gbxMcurpf1gj41gffn%2FKENYl8yZPqaU4zhM6lNVVPGPYpNIJJiqNkjMcx%2BiUx%2FLl4wWp%2BDtFSfqAGFPDIf1ha2amSo951WoX03YUWmj85BKG7GDkH2XE%2F6BlwPSHwsOuEhUP8hjQ9PZMHZEWCtvOAjKrC2QlQaWvOfM4NokgDrrnEni6JPeFERWmcLXfyVSxgn32%2Fq56L5%2B8gZqcJyck5EvUV4k7ePwUxAw3nk9w9SzKeVWcTvVpOsmcrvp5PfwAF2sxT4VDvh9bLPfwFEQFHcPDLwZzj6mQr3%2BGYQ5%2BW90udRVNRhX9YORcY%2BowG%2B%2BbGfZQs2MvOeTplYS%2BfqQw2Kr5vgY6pgGqt3x8TIkU7M9Eo8F1oH3PtOtC8e71wgICIEqqqCaoikE0ckKoklOwBeY8Xb%2BnoxXXO5Sg5EBgAlEUck%2Foi3GDdmmHbBhWiNc2aVFmd4MNJ7ZaMjkocOV650AzQzJ8FmJZ3z1ObGvLtQVODU3aTAtEvz23BEeLjj%2F8giBm6n7dUmnnq8qetcgY%2Bek%2Bi%2B64kzN8Iqy2b%2Bk0tLGzI4kGkp%2F8axt8zGL1&X-Amz-Signature=66c57a23998bf465c042e451d5085c392063a1a5e664a3e13248875f8c184558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFY773ZF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGSX%2Bc%2FtrZs%2B%2Fr9b1iWifhf2U%2BhRgMjuVxxTsHJwh4dtAiBL%2Bg7Zn6BCblW9RFotMUR%2BNDAHvSkc7YpH2vsqTTr0UyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDjIh0jUGJ5zSQEcKtwDRnn4FXIoq5lrE5Go65nSSc%2F5rPsDNE4X2TMVY3wrlmAaNrxFEaek7Yc7Fj220ptAh5kJkNYIM1mcyx%2BiO6LkHA8q3Y8c7lLjQ6Av7wHMNhUlqScKqzRccP7o0oFztSLyEZuEY5YGf%2FHx3B%2FNoFMzPfV1esTfYBAxhOSZY%2BqtxCfzUTKNfqyEdql%2Bo6Yhkd2KaQMLLuRhmkGlrz1oiXdKPGYBUCSlaLACLsAsm5MRkWPM%2F71JPHt1jXa3N0xmSiJ958eoIQ8tDLPX2F%2FZTiqXRmkYhw3t6%2Fx394imTUK9gbxMcurpf1gj41gffn%2FKENYl8yZPqaU4zhM6lNVVPGPYpNIJJiqNkjMcx%2BiUx%2FLl4wWp%2BDtFSfqAGFPDIf1ha2amSo951WoX03YUWmj85BKG7GDkH2XE%2F6BlwPSHwsOuEhUP8hjQ9PZMHZEWCtvOAjKrC2QlQaWvOfM4NokgDrrnEni6JPeFERWmcLXfyVSxgn32%2Fq56L5%2B8gZqcJyck5EvUV4k7ePwUxAw3nk9w9SzKeVWcTvVpOsmcrvp5PfwAF2sxT4VDvh9bLPfwFEQFHcPDLwZzj6mQr3%2BGYQ5%2BW90udRVNRhX9YORcY%2BowG%2B%2BbGfZQs2MvOeTplYS%2BfqQw2Kr5vgY6pgGqt3x8TIkU7M9Eo8F1oH3PtOtC8e71wgICIEqqqCaoikE0ckKoklOwBeY8Xb%2BnoxXXO5Sg5EBgAlEUck%2Foi3GDdmmHbBhWiNc2aVFmd4MNJ7ZaMjkocOV650AzQzJ8FmJZ3z1ObGvLtQVODU3aTAtEvz23BEeLjj%2F8giBm6n7dUmnnq8qetcgY%2Bek%2Bi%2B64kzN8Iqy2b%2Bk0tLGzI4kGkp%2F8axt8zGL1&X-Amz-Signature=ef0687d1afad7d8cd9d4b32082805ca1794a15abfad22082b7865a7ecee6d382&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFY773ZF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGSX%2Bc%2FtrZs%2B%2Fr9b1iWifhf2U%2BhRgMjuVxxTsHJwh4dtAiBL%2Bg7Zn6BCblW9RFotMUR%2BNDAHvSkc7YpH2vsqTTr0UyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDjIh0jUGJ5zSQEcKtwDRnn4FXIoq5lrE5Go65nSSc%2F5rPsDNE4X2TMVY3wrlmAaNrxFEaek7Yc7Fj220ptAh5kJkNYIM1mcyx%2BiO6LkHA8q3Y8c7lLjQ6Av7wHMNhUlqScKqzRccP7o0oFztSLyEZuEY5YGf%2FHx3B%2FNoFMzPfV1esTfYBAxhOSZY%2BqtxCfzUTKNfqyEdql%2Bo6Yhkd2KaQMLLuRhmkGlrz1oiXdKPGYBUCSlaLACLsAsm5MRkWPM%2F71JPHt1jXa3N0xmSiJ958eoIQ8tDLPX2F%2FZTiqXRmkYhw3t6%2Fx394imTUK9gbxMcurpf1gj41gffn%2FKENYl8yZPqaU4zhM6lNVVPGPYpNIJJiqNkjMcx%2BiUx%2FLl4wWp%2BDtFSfqAGFPDIf1ha2amSo951WoX03YUWmj85BKG7GDkH2XE%2F6BlwPSHwsOuEhUP8hjQ9PZMHZEWCtvOAjKrC2QlQaWvOfM4NokgDrrnEni6JPeFERWmcLXfyVSxgn32%2Fq56L5%2B8gZqcJyck5EvUV4k7ePwUxAw3nk9w9SzKeVWcTvVpOsmcrvp5PfwAF2sxT4VDvh9bLPfwFEQFHcPDLwZzj6mQr3%2BGYQ5%2BW90udRVNRhX9YORcY%2BowG%2B%2BbGfZQs2MvOeTplYS%2BfqQw2Kr5vgY6pgGqt3x8TIkU7M9Eo8F1oH3PtOtC8e71wgICIEqqqCaoikE0ckKoklOwBeY8Xb%2BnoxXXO5Sg5EBgAlEUck%2Foi3GDdmmHbBhWiNc2aVFmd4MNJ7ZaMjkocOV650AzQzJ8FmJZ3z1ObGvLtQVODU3aTAtEvz23BEeLjj%2F8giBm6n7dUmnnq8qetcgY%2Bek%2Bi%2B64kzN8Iqy2b%2Bk0tLGzI4kGkp%2F8axt8zGL1&X-Amz-Signature=58c9d6ea3fba47e8e5074b2a919137b05617cbc4a274dc239ec5a80ba3f21a68&X-Amz-SignedHeaders=host&x-id=GetObject)
