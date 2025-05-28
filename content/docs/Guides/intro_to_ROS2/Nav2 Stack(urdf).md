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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7YDGJ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2FSrMO2UH04KAGnW140SugYTeLDhlsz9AoJ%2B6VjOIFAiEAgiz70AA7vpSeskZySyLZ5tCygQyIKpp69YXmVL0GnpIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOULzWmNp8EGc0AmnyrcAzrOVgBOeazOh2GT4qjVus6fORtFGbiesOe6q76NJl%2B7FEOIgntSRA92SAwULvXIjFAJGx7gVLmbdv50eFfAz3aet%2F1TDXM5LkJFKhbZmvUHjiQvNyz5Xr0JclKFvjSqGbgCEzeXo4ChsqSPMeEETE0yt1ZrmChx%2FAGa%2FLtOyX9H%2FstI2Hmx9%2F53FvjUg1BYlRwniIEx5dErRxhkmw4%2B00isR4T6VE8zI3yp5JhwMXhKYN5EdjfI%2FhZQd5s1JrtZccOVkJoTuey557%2BcFe9sw%2BP2%2Bld50DF7p4JemnQihyhLUbIbMVVeZYOLXl486YaJ4CfVJjB4MQslqvdE7EL6mIGtIQdmM9OaJ%2FYuqBupazqJoEwWrCplpd9xzvORmuPrdFll%2B%2Fob427jVwoclC87f1oMA5AtMizLIPP6KyevdE8W%2B8Kvddzi5rciUVIgeW1TPo6GBQ4OxlIKPnSSZuffi7rvGGohOE98MwhrDqQwIf8FfsfCODvggjN7eY%2Ffq9ulDF%2BTn7XPSVd7s46BGEpbtCLqsUQhBtQcEU4SsYSZvBZkviVTCGiqLmguXyaq%2B6%2F34eF4eUda2cSEz2pLSaMk6Ug2Zxp36YM6MhOgTlyXbPRElrC2asleOyxJNY39MLKQ3sEGOqUB5TGK5hG1IeRnhlkjU%2F3h37kuUtlqBmYLJiStPIneAXqRLszp8KFpXl%2FaF47AP90OSjLvn9eqr%2FLGxdgtsIGZ6oa70xqbdD9vnw8Wn1MbHxao9dEc2K5kxd1Tra%2FKnTKO%2Be35LLdH1NK2jb%2BXYu5zfPheCIJ2pWpvKfwxk4WIT1SWubknDkxRk7dtXamfoEQPd6zQXVMXvG%2FUC7DYtMXQHUmpNS02&X-Amz-Signature=eab36e382981693862d9262e6938228fe69ec968d7c890c9cba997f7c5fd54cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7YDGJ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2FSrMO2UH04KAGnW140SugYTeLDhlsz9AoJ%2B6VjOIFAiEAgiz70AA7vpSeskZySyLZ5tCygQyIKpp69YXmVL0GnpIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOULzWmNp8EGc0AmnyrcAzrOVgBOeazOh2GT4qjVus6fORtFGbiesOe6q76NJl%2B7FEOIgntSRA92SAwULvXIjFAJGx7gVLmbdv50eFfAz3aet%2F1TDXM5LkJFKhbZmvUHjiQvNyz5Xr0JclKFvjSqGbgCEzeXo4ChsqSPMeEETE0yt1ZrmChx%2FAGa%2FLtOyX9H%2FstI2Hmx9%2F53FvjUg1BYlRwniIEx5dErRxhkmw4%2B00isR4T6VE8zI3yp5JhwMXhKYN5EdjfI%2FhZQd5s1JrtZccOVkJoTuey557%2BcFe9sw%2BP2%2Bld50DF7p4JemnQihyhLUbIbMVVeZYOLXl486YaJ4CfVJjB4MQslqvdE7EL6mIGtIQdmM9OaJ%2FYuqBupazqJoEwWrCplpd9xzvORmuPrdFll%2B%2Fob427jVwoclC87f1oMA5AtMizLIPP6KyevdE8W%2B8Kvddzi5rciUVIgeW1TPo6GBQ4OxlIKPnSSZuffi7rvGGohOE98MwhrDqQwIf8FfsfCODvggjN7eY%2Ffq9ulDF%2BTn7XPSVd7s46BGEpbtCLqsUQhBtQcEU4SsYSZvBZkviVTCGiqLmguXyaq%2B6%2F34eF4eUda2cSEz2pLSaMk6Ug2Zxp36YM6MhOgTlyXbPRElrC2asleOyxJNY39MLKQ3sEGOqUB5TGK5hG1IeRnhlkjU%2F3h37kuUtlqBmYLJiStPIneAXqRLszp8KFpXl%2FaF47AP90OSjLvn9eqr%2FLGxdgtsIGZ6oa70xqbdD9vnw8Wn1MbHxao9dEc2K5kxd1Tra%2FKnTKO%2Be35LLdH1NK2jb%2BXYu5zfPheCIJ2pWpvKfwxk4WIT1SWubknDkxRk7dtXamfoEQPd6zQXVMXvG%2FUC7DYtMXQHUmpNS02&X-Amz-Signature=4fa6c71a30aaa18821aacba1c153ec670532aa7376fd45bb9dc77556a7642950&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7YDGJ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2FSrMO2UH04KAGnW140SugYTeLDhlsz9AoJ%2B6VjOIFAiEAgiz70AA7vpSeskZySyLZ5tCygQyIKpp69YXmVL0GnpIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOULzWmNp8EGc0AmnyrcAzrOVgBOeazOh2GT4qjVus6fORtFGbiesOe6q76NJl%2B7FEOIgntSRA92SAwULvXIjFAJGx7gVLmbdv50eFfAz3aet%2F1TDXM5LkJFKhbZmvUHjiQvNyz5Xr0JclKFvjSqGbgCEzeXo4ChsqSPMeEETE0yt1ZrmChx%2FAGa%2FLtOyX9H%2FstI2Hmx9%2F53FvjUg1BYlRwniIEx5dErRxhkmw4%2B00isR4T6VE8zI3yp5JhwMXhKYN5EdjfI%2FhZQd5s1JrtZccOVkJoTuey557%2BcFe9sw%2BP2%2Bld50DF7p4JemnQihyhLUbIbMVVeZYOLXl486YaJ4CfVJjB4MQslqvdE7EL6mIGtIQdmM9OaJ%2FYuqBupazqJoEwWrCplpd9xzvORmuPrdFll%2B%2Fob427jVwoclC87f1oMA5AtMizLIPP6KyevdE8W%2B8Kvddzi5rciUVIgeW1TPo6GBQ4OxlIKPnSSZuffi7rvGGohOE98MwhrDqQwIf8FfsfCODvggjN7eY%2Ffq9ulDF%2BTn7XPSVd7s46BGEpbtCLqsUQhBtQcEU4SsYSZvBZkviVTCGiqLmguXyaq%2B6%2F34eF4eUda2cSEz2pLSaMk6Ug2Zxp36YM6MhOgTlyXbPRElrC2asleOyxJNY39MLKQ3sEGOqUB5TGK5hG1IeRnhlkjU%2F3h37kuUtlqBmYLJiStPIneAXqRLszp8KFpXl%2FaF47AP90OSjLvn9eqr%2FLGxdgtsIGZ6oa70xqbdD9vnw8Wn1MbHxao9dEc2K5kxd1Tra%2FKnTKO%2Be35LLdH1NK2jb%2BXYu5zfPheCIJ2pWpvKfwxk4WIT1SWubknDkxRk7dtXamfoEQPd6zQXVMXvG%2FUC7DYtMXQHUmpNS02&X-Amz-Signature=c03bbf081a15328245fa04e21e84add6f6b80b76dc00c83b85a2ad5640a80e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7YDGJ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2FSrMO2UH04KAGnW140SugYTeLDhlsz9AoJ%2B6VjOIFAiEAgiz70AA7vpSeskZySyLZ5tCygQyIKpp69YXmVL0GnpIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOULzWmNp8EGc0AmnyrcAzrOVgBOeazOh2GT4qjVus6fORtFGbiesOe6q76NJl%2B7FEOIgntSRA92SAwULvXIjFAJGx7gVLmbdv50eFfAz3aet%2F1TDXM5LkJFKhbZmvUHjiQvNyz5Xr0JclKFvjSqGbgCEzeXo4ChsqSPMeEETE0yt1ZrmChx%2FAGa%2FLtOyX9H%2FstI2Hmx9%2F53FvjUg1BYlRwniIEx5dErRxhkmw4%2B00isR4T6VE8zI3yp5JhwMXhKYN5EdjfI%2FhZQd5s1JrtZccOVkJoTuey557%2BcFe9sw%2BP2%2Bld50DF7p4JemnQihyhLUbIbMVVeZYOLXl486YaJ4CfVJjB4MQslqvdE7EL6mIGtIQdmM9OaJ%2FYuqBupazqJoEwWrCplpd9xzvORmuPrdFll%2B%2Fob427jVwoclC87f1oMA5AtMizLIPP6KyevdE8W%2B8Kvddzi5rciUVIgeW1TPo6GBQ4OxlIKPnSSZuffi7rvGGohOE98MwhrDqQwIf8FfsfCODvggjN7eY%2Ffq9ulDF%2BTn7XPSVd7s46BGEpbtCLqsUQhBtQcEU4SsYSZvBZkviVTCGiqLmguXyaq%2B6%2F34eF4eUda2cSEz2pLSaMk6Ug2Zxp36YM6MhOgTlyXbPRElrC2asleOyxJNY39MLKQ3sEGOqUB5TGK5hG1IeRnhlkjU%2F3h37kuUtlqBmYLJiStPIneAXqRLszp8KFpXl%2FaF47AP90OSjLvn9eqr%2FLGxdgtsIGZ6oa70xqbdD9vnw8Wn1MbHxao9dEc2K5kxd1Tra%2FKnTKO%2Be35LLdH1NK2jb%2BXYu5zfPheCIJ2pWpvKfwxk4WIT1SWubknDkxRk7dtXamfoEQPd6zQXVMXvG%2FUC7DYtMXQHUmpNS02&X-Amz-Signature=0b3f02cbd02d0009df3c187cd835dc45a0c3fe0e82b8d14e133dd887b21e8772&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7YDGJ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2FSrMO2UH04KAGnW140SugYTeLDhlsz9AoJ%2B6VjOIFAiEAgiz70AA7vpSeskZySyLZ5tCygQyIKpp69YXmVL0GnpIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOULzWmNp8EGc0AmnyrcAzrOVgBOeazOh2GT4qjVus6fORtFGbiesOe6q76NJl%2B7FEOIgntSRA92SAwULvXIjFAJGx7gVLmbdv50eFfAz3aet%2F1TDXM5LkJFKhbZmvUHjiQvNyz5Xr0JclKFvjSqGbgCEzeXo4ChsqSPMeEETE0yt1ZrmChx%2FAGa%2FLtOyX9H%2FstI2Hmx9%2F53FvjUg1BYlRwniIEx5dErRxhkmw4%2B00isR4T6VE8zI3yp5JhwMXhKYN5EdjfI%2FhZQd5s1JrtZccOVkJoTuey557%2BcFe9sw%2BP2%2Bld50DF7p4JemnQihyhLUbIbMVVeZYOLXl486YaJ4CfVJjB4MQslqvdE7EL6mIGtIQdmM9OaJ%2FYuqBupazqJoEwWrCplpd9xzvORmuPrdFll%2B%2Fob427jVwoclC87f1oMA5AtMizLIPP6KyevdE8W%2B8Kvddzi5rciUVIgeW1TPo6GBQ4OxlIKPnSSZuffi7rvGGohOE98MwhrDqQwIf8FfsfCODvggjN7eY%2Ffq9ulDF%2BTn7XPSVd7s46BGEpbtCLqsUQhBtQcEU4SsYSZvBZkviVTCGiqLmguXyaq%2B6%2F34eF4eUda2cSEz2pLSaMk6Ug2Zxp36YM6MhOgTlyXbPRElrC2asleOyxJNY39MLKQ3sEGOqUB5TGK5hG1IeRnhlkjU%2F3h37kuUtlqBmYLJiStPIneAXqRLszp8KFpXl%2FaF47AP90OSjLvn9eqr%2FLGxdgtsIGZ6oa70xqbdD9vnw8Wn1MbHxao9dEc2K5kxd1Tra%2FKnTKO%2Be35LLdH1NK2jb%2BXYu5zfPheCIJ2pWpvKfwxk4WIT1SWubknDkxRk7dtXamfoEQPd6zQXVMXvG%2FUC7DYtMXQHUmpNS02&X-Amz-Signature=fac3297016e8ef80f4ec897c0b4de469b6e14ea5107ee10f3c81089db92113f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7YDGJ6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2FSrMO2UH04KAGnW140SugYTeLDhlsz9AoJ%2B6VjOIFAiEAgiz70AA7vpSeskZySyLZ5tCygQyIKpp69YXmVL0GnpIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOULzWmNp8EGc0AmnyrcAzrOVgBOeazOh2GT4qjVus6fORtFGbiesOe6q76NJl%2B7FEOIgntSRA92SAwULvXIjFAJGx7gVLmbdv50eFfAz3aet%2F1TDXM5LkJFKhbZmvUHjiQvNyz5Xr0JclKFvjSqGbgCEzeXo4ChsqSPMeEETE0yt1ZrmChx%2FAGa%2FLtOyX9H%2FstI2Hmx9%2F53FvjUg1BYlRwniIEx5dErRxhkmw4%2B00isR4T6VE8zI3yp5JhwMXhKYN5EdjfI%2FhZQd5s1JrtZccOVkJoTuey557%2BcFe9sw%2BP2%2Bld50DF7p4JemnQihyhLUbIbMVVeZYOLXl486YaJ4CfVJjB4MQslqvdE7EL6mIGtIQdmM9OaJ%2FYuqBupazqJoEwWrCplpd9xzvORmuPrdFll%2B%2Fob427jVwoclC87f1oMA5AtMizLIPP6KyevdE8W%2B8Kvddzi5rciUVIgeW1TPo6GBQ4OxlIKPnSSZuffi7rvGGohOE98MwhrDqQwIf8FfsfCODvggjN7eY%2Ffq9ulDF%2BTn7XPSVd7s46BGEpbtCLqsUQhBtQcEU4SsYSZvBZkviVTCGiqLmguXyaq%2B6%2F34eF4eUda2cSEz2pLSaMk6Ug2Zxp36YM6MhOgTlyXbPRElrC2asleOyxJNY39MLKQ3sEGOqUB5TGK5hG1IeRnhlkjU%2F3h37kuUtlqBmYLJiStPIneAXqRLszp8KFpXl%2FaF47AP90OSjLvn9eqr%2FLGxdgtsIGZ6oa70xqbdD9vnw8Wn1MbHxao9dEc2K5kxd1Tra%2FKnTKO%2Be35LLdH1NK2jb%2BXYu5zfPheCIJ2pWpvKfwxk4WIT1SWubknDkxRk7dtXamfoEQPd6zQXVMXvG%2FUC7DYtMXQHUmpNS02&X-Amz-Signature=17d87ed71a564445b19a8e902456eeb2c16c0737dbe5197963daa93e46ca6cac&X-Amz-SignedHeaders=host&x-id=GetObject)
