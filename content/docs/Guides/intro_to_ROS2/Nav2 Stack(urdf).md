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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNCYYKA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDYp9%2F66ZSieiVy9GwTpjcGDtQEx4BmjwJz60TC0R%2FtsAIgB%2BT7SLEM8zm6J4zsDZkUIZaEPf1gwut%2B3xVVusbvkK8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSeUyKUVAvxeDOkCrcA3SOlnNpSI2kSvOVar2tdzkKqlzDoD48Oif6kSjCrUkrvvOHhZicl82KG4RKuJjUr9BBpRGZ5DXHWfgtuHzgyz%2FrEL6jXML9T%2BZkLkemzdAsm9dwabp9DCcCQNH4nNNPxqwlWyiPU7dyE%2FORb0yAOKlUGkmHQ8Fam0SDGYzDBiuL%2FhI3UOV8dwfglllLpv%2BS0hEB5dJG4c2kxIvjqS1%2Fxvf4ZSj0ad9RX4VVYDLjo5iDla4WR4Zo4YWL56p8LEwtPc%2BJr3nIgXyMV%2B5t11b7UmjmzaaWUePKnVWA06d%2F202X7Ku7q8nzcwfuaHnaRETdIdyIyInQilyy7JcYnznsscxodE53hh7%2Bp4ZOUB88p1Ej6I%2B9LsiuxXV2iYar2GFyyN7RxeNFKqIxS2Mhuaf9QHDi29wSCAz2bB4xVlv2wxyFf6BfzeBdHKcL9FvVXoN24jLPC8lutat0bjYHKJVnRLv13twERLd9uLC2J3D5Z%2BA9OqIE6GgXIaMUdbVNUCw1GryCuQ6YdYMPvj8ViR5zKvhRiHzz7sQ51eG30mebvFRo5AyhfDuI1DjeSmhRAHFtbwiuc3Hhw5hJ0V2VBrfvf906u9jLganSEgWgDG2CJ3r3%2BiVBAKzK39rDXyv9MLSLncAGOqUB4Jp70IS18wWmOl82jk%2F4R5sL2nZ9pRbnTjEGlAKVFVn3ZgsMatIEGeg3fef2OWqh78WRK3LROo%2FLTRJpIj0%2F3xPWo1mbbLrjJq6l61jszCb5bXWCavZxlsoR1DFqV8kTcCqDQSdEiMgZ3ag%2FXmbepamUVvaO7MWxxaxl4%2BoWdi0AjhJC6nQ%2FKnp50OvQ7ukDBLvVE20d6ceCvCAX8Vq93N1FA3xI&X-Amz-Signature=41483d749b71600f74ddfe7a3384bc06e033938c9c96245ee817f0588a3db32b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNCYYKA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDYp9%2F66ZSieiVy9GwTpjcGDtQEx4BmjwJz60TC0R%2FtsAIgB%2BT7SLEM8zm6J4zsDZkUIZaEPf1gwut%2B3xVVusbvkK8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSeUyKUVAvxeDOkCrcA3SOlnNpSI2kSvOVar2tdzkKqlzDoD48Oif6kSjCrUkrvvOHhZicl82KG4RKuJjUr9BBpRGZ5DXHWfgtuHzgyz%2FrEL6jXML9T%2BZkLkemzdAsm9dwabp9DCcCQNH4nNNPxqwlWyiPU7dyE%2FORb0yAOKlUGkmHQ8Fam0SDGYzDBiuL%2FhI3UOV8dwfglllLpv%2BS0hEB5dJG4c2kxIvjqS1%2Fxvf4ZSj0ad9RX4VVYDLjo5iDla4WR4Zo4YWL56p8LEwtPc%2BJr3nIgXyMV%2B5t11b7UmjmzaaWUePKnVWA06d%2F202X7Ku7q8nzcwfuaHnaRETdIdyIyInQilyy7JcYnznsscxodE53hh7%2Bp4ZOUB88p1Ej6I%2B9LsiuxXV2iYar2GFyyN7RxeNFKqIxS2Mhuaf9QHDi29wSCAz2bB4xVlv2wxyFf6BfzeBdHKcL9FvVXoN24jLPC8lutat0bjYHKJVnRLv13twERLd9uLC2J3D5Z%2BA9OqIE6GgXIaMUdbVNUCw1GryCuQ6YdYMPvj8ViR5zKvhRiHzz7sQ51eG30mebvFRo5AyhfDuI1DjeSmhRAHFtbwiuc3Hhw5hJ0V2VBrfvf906u9jLganSEgWgDG2CJ3r3%2BiVBAKzK39rDXyv9MLSLncAGOqUB4Jp70IS18wWmOl82jk%2F4R5sL2nZ9pRbnTjEGlAKVFVn3ZgsMatIEGeg3fef2OWqh78WRK3LROo%2FLTRJpIj0%2F3xPWo1mbbLrjJq6l61jszCb5bXWCavZxlsoR1DFqV8kTcCqDQSdEiMgZ3ag%2FXmbepamUVvaO7MWxxaxl4%2BoWdi0AjhJC6nQ%2FKnp50OvQ7ukDBLvVE20d6ceCvCAX8Vq93N1FA3xI&X-Amz-Signature=068df263c1c61fb8c7c6b35db9ef0f9a6b21b47b369a7b991fe00f0a37c9be5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNCYYKA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDYp9%2F66ZSieiVy9GwTpjcGDtQEx4BmjwJz60TC0R%2FtsAIgB%2BT7SLEM8zm6J4zsDZkUIZaEPf1gwut%2B3xVVusbvkK8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSeUyKUVAvxeDOkCrcA3SOlnNpSI2kSvOVar2tdzkKqlzDoD48Oif6kSjCrUkrvvOHhZicl82KG4RKuJjUr9BBpRGZ5DXHWfgtuHzgyz%2FrEL6jXML9T%2BZkLkemzdAsm9dwabp9DCcCQNH4nNNPxqwlWyiPU7dyE%2FORb0yAOKlUGkmHQ8Fam0SDGYzDBiuL%2FhI3UOV8dwfglllLpv%2BS0hEB5dJG4c2kxIvjqS1%2Fxvf4ZSj0ad9RX4VVYDLjo5iDla4WR4Zo4YWL56p8LEwtPc%2BJr3nIgXyMV%2B5t11b7UmjmzaaWUePKnVWA06d%2F202X7Ku7q8nzcwfuaHnaRETdIdyIyInQilyy7JcYnznsscxodE53hh7%2Bp4ZOUB88p1Ej6I%2B9LsiuxXV2iYar2GFyyN7RxeNFKqIxS2Mhuaf9QHDi29wSCAz2bB4xVlv2wxyFf6BfzeBdHKcL9FvVXoN24jLPC8lutat0bjYHKJVnRLv13twERLd9uLC2J3D5Z%2BA9OqIE6GgXIaMUdbVNUCw1GryCuQ6YdYMPvj8ViR5zKvhRiHzz7sQ51eG30mebvFRo5AyhfDuI1DjeSmhRAHFtbwiuc3Hhw5hJ0V2VBrfvf906u9jLganSEgWgDG2CJ3r3%2BiVBAKzK39rDXyv9MLSLncAGOqUB4Jp70IS18wWmOl82jk%2F4R5sL2nZ9pRbnTjEGlAKVFVn3ZgsMatIEGeg3fef2OWqh78WRK3LROo%2FLTRJpIj0%2F3xPWo1mbbLrjJq6l61jszCb5bXWCavZxlsoR1DFqV8kTcCqDQSdEiMgZ3ag%2FXmbepamUVvaO7MWxxaxl4%2BoWdi0AjhJC6nQ%2FKnp50OvQ7ukDBLvVE20d6ceCvCAX8Vq93N1FA3xI&X-Amz-Signature=1602cf6ddfed80adfe58efb7293657e1f304956f770b2ce9b3eabd562552b17a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNCYYKA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDYp9%2F66ZSieiVy9GwTpjcGDtQEx4BmjwJz60TC0R%2FtsAIgB%2BT7SLEM8zm6J4zsDZkUIZaEPf1gwut%2B3xVVusbvkK8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSeUyKUVAvxeDOkCrcA3SOlnNpSI2kSvOVar2tdzkKqlzDoD48Oif6kSjCrUkrvvOHhZicl82KG4RKuJjUr9BBpRGZ5DXHWfgtuHzgyz%2FrEL6jXML9T%2BZkLkemzdAsm9dwabp9DCcCQNH4nNNPxqwlWyiPU7dyE%2FORb0yAOKlUGkmHQ8Fam0SDGYzDBiuL%2FhI3UOV8dwfglllLpv%2BS0hEB5dJG4c2kxIvjqS1%2Fxvf4ZSj0ad9RX4VVYDLjo5iDla4WR4Zo4YWL56p8LEwtPc%2BJr3nIgXyMV%2B5t11b7UmjmzaaWUePKnVWA06d%2F202X7Ku7q8nzcwfuaHnaRETdIdyIyInQilyy7JcYnznsscxodE53hh7%2Bp4ZOUB88p1Ej6I%2B9LsiuxXV2iYar2GFyyN7RxeNFKqIxS2Mhuaf9QHDi29wSCAz2bB4xVlv2wxyFf6BfzeBdHKcL9FvVXoN24jLPC8lutat0bjYHKJVnRLv13twERLd9uLC2J3D5Z%2BA9OqIE6GgXIaMUdbVNUCw1GryCuQ6YdYMPvj8ViR5zKvhRiHzz7sQ51eG30mebvFRo5AyhfDuI1DjeSmhRAHFtbwiuc3Hhw5hJ0V2VBrfvf906u9jLganSEgWgDG2CJ3r3%2BiVBAKzK39rDXyv9MLSLncAGOqUB4Jp70IS18wWmOl82jk%2F4R5sL2nZ9pRbnTjEGlAKVFVn3ZgsMatIEGeg3fef2OWqh78WRK3LROo%2FLTRJpIj0%2F3xPWo1mbbLrjJq6l61jszCb5bXWCavZxlsoR1DFqV8kTcCqDQSdEiMgZ3ag%2FXmbepamUVvaO7MWxxaxl4%2BoWdi0AjhJC6nQ%2FKnp50OvQ7ukDBLvVE20d6ceCvCAX8Vq93N1FA3xI&X-Amz-Signature=297a1b46ef89fea287a18606e2e087078f15fa742632b5ea415f73d7cfd65b41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNCYYKA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDYp9%2F66ZSieiVy9GwTpjcGDtQEx4BmjwJz60TC0R%2FtsAIgB%2BT7SLEM8zm6J4zsDZkUIZaEPf1gwut%2B3xVVusbvkK8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSeUyKUVAvxeDOkCrcA3SOlnNpSI2kSvOVar2tdzkKqlzDoD48Oif6kSjCrUkrvvOHhZicl82KG4RKuJjUr9BBpRGZ5DXHWfgtuHzgyz%2FrEL6jXML9T%2BZkLkemzdAsm9dwabp9DCcCQNH4nNNPxqwlWyiPU7dyE%2FORb0yAOKlUGkmHQ8Fam0SDGYzDBiuL%2FhI3UOV8dwfglllLpv%2BS0hEB5dJG4c2kxIvjqS1%2Fxvf4ZSj0ad9RX4VVYDLjo5iDla4WR4Zo4YWL56p8LEwtPc%2BJr3nIgXyMV%2B5t11b7UmjmzaaWUePKnVWA06d%2F202X7Ku7q8nzcwfuaHnaRETdIdyIyInQilyy7JcYnznsscxodE53hh7%2Bp4ZOUB88p1Ej6I%2B9LsiuxXV2iYar2GFyyN7RxeNFKqIxS2Mhuaf9QHDi29wSCAz2bB4xVlv2wxyFf6BfzeBdHKcL9FvVXoN24jLPC8lutat0bjYHKJVnRLv13twERLd9uLC2J3D5Z%2BA9OqIE6GgXIaMUdbVNUCw1GryCuQ6YdYMPvj8ViR5zKvhRiHzz7sQ51eG30mebvFRo5AyhfDuI1DjeSmhRAHFtbwiuc3Hhw5hJ0V2VBrfvf906u9jLganSEgWgDG2CJ3r3%2BiVBAKzK39rDXyv9MLSLncAGOqUB4Jp70IS18wWmOl82jk%2F4R5sL2nZ9pRbnTjEGlAKVFVn3ZgsMatIEGeg3fef2OWqh78WRK3LROo%2FLTRJpIj0%2F3xPWo1mbbLrjJq6l61jszCb5bXWCavZxlsoR1DFqV8kTcCqDQSdEiMgZ3ag%2FXmbepamUVvaO7MWxxaxl4%2BoWdi0AjhJC6nQ%2FKnp50OvQ7ukDBLvVE20d6ceCvCAX8Vq93N1FA3xI&X-Amz-Signature=008d5c8057d0f6cf91179b48d4237e2f38343075b1d27e5ccc4cd66148ace67c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNCYYKA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDYp9%2F66ZSieiVy9GwTpjcGDtQEx4BmjwJz60TC0R%2FtsAIgB%2BT7SLEM8zm6J4zsDZkUIZaEPf1gwut%2B3xVVusbvkK8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSeUyKUVAvxeDOkCrcA3SOlnNpSI2kSvOVar2tdzkKqlzDoD48Oif6kSjCrUkrvvOHhZicl82KG4RKuJjUr9BBpRGZ5DXHWfgtuHzgyz%2FrEL6jXML9T%2BZkLkemzdAsm9dwabp9DCcCQNH4nNNPxqwlWyiPU7dyE%2FORb0yAOKlUGkmHQ8Fam0SDGYzDBiuL%2FhI3UOV8dwfglllLpv%2BS0hEB5dJG4c2kxIvjqS1%2Fxvf4ZSj0ad9RX4VVYDLjo5iDla4WR4Zo4YWL56p8LEwtPc%2BJr3nIgXyMV%2B5t11b7UmjmzaaWUePKnVWA06d%2F202X7Ku7q8nzcwfuaHnaRETdIdyIyInQilyy7JcYnznsscxodE53hh7%2Bp4ZOUB88p1Ej6I%2B9LsiuxXV2iYar2GFyyN7RxeNFKqIxS2Mhuaf9QHDi29wSCAz2bB4xVlv2wxyFf6BfzeBdHKcL9FvVXoN24jLPC8lutat0bjYHKJVnRLv13twERLd9uLC2J3D5Z%2BA9OqIE6GgXIaMUdbVNUCw1GryCuQ6YdYMPvj8ViR5zKvhRiHzz7sQ51eG30mebvFRo5AyhfDuI1DjeSmhRAHFtbwiuc3Hhw5hJ0V2VBrfvf906u9jLganSEgWgDG2CJ3r3%2BiVBAKzK39rDXyv9MLSLncAGOqUB4Jp70IS18wWmOl82jk%2F4R5sL2nZ9pRbnTjEGlAKVFVn3ZgsMatIEGeg3fef2OWqh78WRK3LROo%2FLTRJpIj0%2F3xPWo1mbbLrjJq6l61jszCb5bXWCavZxlsoR1DFqV8kTcCqDQSdEiMgZ3ag%2FXmbepamUVvaO7MWxxaxl4%2BoWdi0AjhJC6nQ%2FKnp50OvQ7ukDBLvVE20d6ceCvCAX8Vq93N1FA3xI&X-Amz-Signature=4f243d4450486a0250891f62531fc16e632d3742781decba529be705c1fa72c2&X-Amz-SignedHeaders=host&x-id=GetObject)
