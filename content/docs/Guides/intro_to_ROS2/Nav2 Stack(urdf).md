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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KABAK2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCX3nqRXk9%2BFHBK9w2sBU84xn4rFtsIL2GcyK46yjpAiBbaNabshxOQgIfHYc3RpTmXM4n2Qpg2ngNRltZlGixkSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD%2F8seUXQEtYoFkLKtwD%2B000w8K6DtH4GZfG65VSmy8TiJosEec1OM5RHaMJ%2F5GJyYzYs80cMsOnsyyKet1eqt%2B0h0r8Eocefre7c9zxEJDylhxJLuaxkhkYYRwPBtMuDKGDDHBjwEb%2BNQJ6TLCdiKaW35ZSsztb81E8vbyUhKsyg74%2B2gHQpgg0%2BbIfG7ornguVjghk%2FPxBw6XrcTGlLeyJkMzMEBElTF94ic3WZGtdprLDebtFsBeably7oO5T8WUrK8HTDI1kC0mWPTCiWf4EiWTUTDsmMQdifWXPhwbsDSxK%2FqR9PLtP5sDAzoLlRHTQJ6UxprDNGu4E3B85EvjmOoG5XFpSbay11jUENcA8jFA7A6skCAeaqolUVY%2B45GFR6bCr49s9bGv7bfpN7%2FuXbuJjLKzKV%2B6Lu%2BYF4tJA3%2BDktk6HZ96BWP9daUoR0pDEfWCEqZAcygg%2F17DJoO7pxjJtFyODBN95hAJJbOmUvJFjH0xRotlCGm5gG2qfVE8zACh4AiPb%2BHUV4NpnEiij83TpMUVQMvfFYGkaTLm7Y%2FyuAksCiMdi9APWnPZM27F%2B10Gvdhj%2FacTmnqmfn%2FMbXVbkP9k4sEoHWe%2FKL036mwFE64qAGqKD84bl%2BU%2Fvve06vH6Q3O1Ndbkwj5D%2FwgY6pgHkQtNZDERY%2F%2FxGXImzDFhMD0lcQTHC9cJmnsjuUSD5m0eZScXGDc3taVeLUqcgN8970oIgOQJu9ba9tPkTPcmBVG%2F%2F7atxIPGSY1QCxawMp0bFKc%2FgWahon6LfgiCV2fugCHxUHmneeLb8x7y5eG96irl1TsBVn%2Fw6%2BRV%2FeHXb0mJ4VLbiZAfXZ1et06wy2aJiXhaO2LWLOk2obqlLiPnahqdsO%2FRh&X-Amz-Signature=946847652bb9864a8ab75f01c063227aa71d1032201e2a3218c82f7ffe15ead6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KABAK2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCX3nqRXk9%2BFHBK9w2sBU84xn4rFtsIL2GcyK46yjpAiBbaNabshxOQgIfHYc3RpTmXM4n2Qpg2ngNRltZlGixkSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD%2F8seUXQEtYoFkLKtwD%2B000w8K6DtH4GZfG65VSmy8TiJosEec1OM5RHaMJ%2F5GJyYzYs80cMsOnsyyKet1eqt%2B0h0r8Eocefre7c9zxEJDylhxJLuaxkhkYYRwPBtMuDKGDDHBjwEb%2BNQJ6TLCdiKaW35ZSsztb81E8vbyUhKsyg74%2B2gHQpgg0%2BbIfG7ornguVjghk%2FPxBw6XrcTGlLeyJkMzMEBElTF94ic3WZGtdprLDebtFsBeably7oO5T8WUrK8HTDI1kC0mWPTCiWf4EiWTUTDsmMQdifWXPhwbsDSxK%2FqR9PLtP5sDAzoLlRHTQJ6UxprDNGu4E3B85EvjmOoG5XFpSbay11jUENcA8jFA7A6skCAeaqolUVY%2B45GFR6bCr49s9bGv7bfpN7%2FuXbuJjLKzKV%2B6Lu%2BYF4tJA3%2BDktk6HZ96BWP9daUoR0pDEfWCEqZAcygg%2F17DJoO7pxjJtFyODBN95hAJJbOmUvJFjH0xRotlCGm5gG2qfVE8zACh4AiPb%2BHUV4NpnEiij83TpMUVQMvfFYGkaTLm7Y%2FyuAksCiMdi9APWnPZM27F%2B10Gvdhj%2FacTmnqmfn%2FMbXVbkP9k4sEoHWe%2FKL036mwFE64qAGqKD84bl%2BU%2Fvve06vH6Q3O1Ndbkwj5D%2FwgY6pgHkQtNZDERY%2F%2FxGXImzDFhMD0lcQTHC9cJmnsjuUSD5m0eZScXGDc3taVeLUqcgN8970oIgOQJu9ba9tPkTPcmBVG%2F%2F7atxIPGSY1QCxawMp0bFKc%2FgWahon6LfgiCV2fugCHxUHmneeLb8x7y5eG96irl1TsBVn%2Fw6%2BRV%2FeHXb0mJ4VLbiZAfXZ1et06wy2aJiXhaO2LWLOk2obqlLiPnahqdsO%2FRh&X-Amz-Signature=a992c288e824eb70258ce1885d5ea850641c308c404f249c88e9e2922028a108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KABAK2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCX3nqRXk9%2BFHBK9w2sBU84xn4rFtsIL2GcyK46yjpAiBbaNabshxOQgIfHYc3RpTmXM4n2Qpg2ngNRltZlGixkSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD%2F8seUXQEtYoFkLKtwD%2B000w8K6DtH4GZfG65VSmy8TiJosEec1OM5RHaMJ%2F5GJyYzYs80cMsOnsyyKet1eqt%2B0h0r8Eocefre7c9zxEJDylhxJLuaxkhkYYRwPBtMuDKGDDHBjwEb%2BNQJ6TLCdiKaW35ZSsztb81E8vbyUhKsyg74%2B2gHQpgg0%2BbIfG7ornguVjghk%2FPxBw6XrcTGlLeyJkMzMEBElTF94ic3WZGtdprLDebtFsBeably7oO5T8WUrK8HTDI1kC0mWPTCiWf4EiWTUTDsmMQdifWXPhwbsDSxK%2FqR9PLtP5sDAzoLlRHTQJ6UxprDNGu4E3B85EvjmOoG5XFpSbay11jUENcA8jFA7A6skCAeaqolUVY%2B45GFR6bCr49s9bGv7bfpN7%2FuXbuJjLKzKV%2B6Lu%2BYF4tJA3%2BDktk6HZ96BWP9daUoR0pDEfWCEqZAcygg%2F17DJoO7pxjJtFyODBN95hAJJbOmUvJFjH0xRotlCGm5gG2qfVE8zACh4AiPb%2BHUV4NpnEiij83TpMUVQMvfFYGkaTLm7Y%2FyuAksCiMdi9APWnPZM27F%2B10Gvdhj%2FacTmnqmfn%2FMbXVbkP9k4sEoHWe%2FKL036mwFE64qAGqKD84bl%2BU%2Fvve06vH6Q3O1Ndbkwj5D%2FwgY6pgHkQtNZDERY%2F%2FxGXImzDFhMD0lcQTHC9cJmnsjuUSD5m0eZScXGDc3taVeLUqcgN8970oIgOQJu9ba9tPkTPcmBVG%2F%2F7atxIPGSY1QCxawMp0bFKc%2FgWahon6LfgiCV2fugCHxUHmneeLb8x7y5eG96irl1TsBVn%2Fw6%2BRV%2FeHXb0mJ4VLbiZAfXZ1et06wy2aJiXhaO2LWLOk2obqlLiPnahqdsO%2FRh&X-Amz-Signature=bf28ade013a7a40689afed87dae0d39cc1cbb9266b85e2b4e430fbd6b8e49d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KABAK2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCX3nqRXk9%2BFHBK9w2sBU84xn4rFtsIL2GcyK46yjpAiBbaNabshxOQgIfHYc3RpTmXM4n2Qpg2ngNRltZlGixkSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD%2F8seUXQEtYoFkLKtwD%2B000w8K6DtH4GZfG65VSmy8TiJosEec1OM5RHaMJ%2F5GJyYzYs80cMsOnsyyKet1eqt%2B0h0r8Eocefre7c9zxEJDylhxJLuaxkhkYYRwPBtMuDKGDDHBjwEb%2BNQJ6TLCdiKaW35ZSsztb81E8vbyUhKsyg74%2B2gHQpgg0%2BbIfG7ornguVjghk%2FPxBw6XrcTGlLeyJkMzMEBElTF94ic3WZGtdprLDebtFsBeably7oO5T8WUrK8HTDI1kC0mWPTCiWf4EiWTUTDsmMQdifWXPhwbsDSxK%2FqR9PLtP5sDAzoLlRHTQJ6UxprDNGu4E3B85EvjmOoG5XFpSbay11jUENcA8jFA7A6skCAeaqolUVY%2B45GFR6bCr49s9bGv7bfpN7%2FuXbuJjLKzKV%2B6Lu%2BYF4tJA3%2BDktk6HZ96BWP9daUoR0pDEfWCEqZAcygg%2F17DJoO7pxjJtFyODBN95hAJJbOmUvJFjH0xRotlCGm5gG2qfVE8zACh4AiPb%2BHUV4NpnEiij83TpMUVQMvfFYGkaTLm7Y%2FyuAksCiMdi9APWnPZM27F%2B10Gvdhj%2FacTmnqmfn%2FMbXVbkP9k4sEoHWe%2FKL036mwFE64qAGqKD84bl%2BU%2Fvve06vH6Q3O1Ndbkwj5D%2FwgY6pgHkQtNZDERY%2F%2FxGXImzDFhMD0lcQTHC9cJmnsjuUSD5m0eZScXGDc3taVeLUqcgN8970oIgOQJu9ba9tPkTPcmBVG%2F%2F7atxIPGSY1QCxawMp0bFKc%2FgWahon6LfgiCV2fugCHxUHmneeLb8x7y5eG96irl1TsBVn%2Fw6%2BRV%2FeHXb0mJ4VLbiZAfXZ1et06wy2aJiXhaO2LWLOk2obqlLiPnahqdsO%2FRh&X-Amz-Signature=563e6316e956500a7c1e7a4bee50ac642eb3df5d38661eaf5354f8d5315c97d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KABAK2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCX3nqRXk9%2BFHBK9w2sBU84xn4rFtsIL2GcyK46yjpAiBbaNabshxOQgIfHYc3RpTmXM4n2Qpg2ngNRltZlGixkSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD%2F8seUXQEtYoFkLKtwD%2B000w8K6DtH4GZfG65VSmy8TiJosEec1OM5RHaMJ%2F5GJyYzYs80cMsOnsyyKet1eqt%2B0h0r8Eocefre7c9zxEJDylhxJLuaxkhkYYRwPBtMuDKGDDHBjwEb%2BNQJ6TLCdiKaW35ZSsztb81E8vbyUhKsyg74%2B2gHQpgg0%2BbIfG7ornguVjghk%2FPxBw6XrcTGlLeyJkMzMEBElTF94ic3WZGtdprLDebtFsBeably7oO5T8WUrK8HTDI1kC0mWPTCiWf4EiWTUTDsmMQdifWXPhwbsDSxK%2FqR9PLtP5sDAzoLlRHTQJ6UxprDNGu4E3B85EvjmOoG5XFpSbay11jUENcA8jFA7A6skCAeaqolUVY%2B45GFR6bCr49s9bGv7bfpN7%2FuXbuJjLKzKV%2B6Lu%2BYF4tJA3%2BDktk6HZ96BWP9daUoR0pDEfWCEqZAcygg%2F17DJoO7pxjJtFyODBN95hAJJbOmUvJFjH0xRotlCGm5gG2qfVE8zACh4AiPb%2BHUV4NpnEiij83TpMUVQMvfFYGkaTLm7Y%2FyuAksCiMdi9APWnPZM27F%2B10Gvdhj%2FacTmnqmfn%2FMbXVbkP9k4sEoHWe%2FKL036mwFE64qAGqKD84bl%2BU%2Fvve06vH6Q3O1Ndbkwj5D%2FwgY6pgHkQtNZDERY%2F%2FxGXImzDFhMD0lcQTHC9cJmnsjuUSD5m0eZScXGDc3taVeLUqcgN8970oIgOQJu9ba9tPkTPcmBVG%2F%2F7atxIPGSY1QCxawMp0bFKc%2FgWahon6LfgiCV2fugCHxUHmneeLb8x7y5eG96irl1TsBVn%2Fw6%2BRV%2FeHXb0mJ4VLbiZAfXZ1et06wy2aJiXhaO2LWLOk2obqlLiPnahqdsO%2FRh&X-Amz-Signature=df4d93be20512118d01d54301de507b7fe6a666fd387c0e8ff939bb499ad592f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KABAK2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCX3nqRXk9%2BFHBK9w2sBU84xn4rFtsIL2GcyK46yjpAiBbaNabshxOQgIfHYc3RpTmXM4n2Qpg2ngNRltZlGixkSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD%2F8seUXQEtYoFkLKtwD%2B000w8K6DtH4GZfG65VSmy8TiJosEec1OM5RHaMJ%2F5GJyYzYs80cMsOnsyyKet1eqt%2B0h0r8Eocefre7c9zxEJDylhxJLuaxkhkYYRwPBtMuDKGDDHBjwEb%2BNQJ6TLCdiKaW35ZSsztb81E8vbyUhKsyg74%2B2gHQpgg0%2BbIfG7ornguVjghk%2FPxBw6XrcTGlLeyJkMzMEBElTF94ic3WZGtdprLDebtFsBeably7oO5T8WUrK8HTDI1kC0mWPTCiWf4EiWTUTDsmMQdifWXPhwbsDSxK%2FqR9PLtP5sDAzoLlRHTQJ6UxprDNGu4E3B85EvjmOoG5XFpSbay11jUENcA8jFA7A6skCAeaqolUVY%2B45GFR6bCr49s9bGv7bfpN7%2FuXbuJjLKzKV%2B6Lu%2BYF4tJA3%2BDktk6HZ96BWP9daUoR0pDEfWCEqZAcygg%2F17DJoO7pxjJtFyODBN95hAJJbOmUvJFjH0xRotlCGm5gG2qfVE8zACh4AiPb%2BHUV4NpnEiij83TpMUVQMvfFYGkaTLm7Y%2FyuAksCiMdi9APWnPZM27F%2B10Gvdhj%2FacTmnqmfn%2FMbXVbkP9k4sEoHWe%2FKL036mwFE64qAGqKD84bl%2BU%2Fvve06vH6Q3O1Ndbkwj5D%2FwgY6pgHkQtNZDERY%2F%2FxGXImzDFhMD0lcQTHC9cJmnsjuUSD5m0eZScXGDc3taVeLUqcgN8970oIgOQJu9ba9tPkTPcmBVG%2F%2F7atxIPGSY1QCxawMp0bFKc%2FgWahon6LfgiCV2fugCHxUHmneeLb8x7y5eG96irl1TsBVn%2Fw6%2BRV%2FeHXb0mJ4VLbiZAfXZ1et06wy2aJiXhaO2LWLOk2obqlLiPnahqdsO%2FRh&X-Amz-Signature=21955a2833e15e890e39e528963346dec0440a03c4b9ce7b5c73c4816a1e67b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
