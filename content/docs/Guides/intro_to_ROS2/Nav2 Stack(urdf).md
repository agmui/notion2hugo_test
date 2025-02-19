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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNWBJAA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEY%2FGno%2FMypuvkZHW7cMVL47xPXyX3tZE67abwscWfDPAiEAh9V%2Fuz5MCasuJe1FWP86j1hPzu4Ax2msy9M3%2BIfSUAQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2WfRV41kH4M%2FlEircAzDbhtVaU2j2FAvjpc%2BSwyKCrLS3LVNRnEroCf%2BND%2BGKyPsG%2FvWcxe7ugigw%2FsEL%2FaI1e6EqTIXTcGFRA41E%2FokGZnYJ77VSsh0gKvX1UjUJPqGhAJ%2FDF6EHxjR9o%2FjCvhmMwGRm%2FOSPlTvptw3iiGiICoZUK8RKPATf9XKZtri73fPdEzyeGiSo8YZIhI%2BlwD5jZUUr88%2Fa4oc5kEtPnsfcQvLG5sGQQPqi6lPg7BLzdzZ3B%2FB6m%2Fpn6nZw9rjQ9LZlvTEypkXwgi3wq9NuiqKrGZKs8LxcwxXUDEi8F1fQV7Ufsi4cc3%2BSJ%2FMyvLww9NJnOT5ZUUMCXEgzDfh6cWgourU1z8mD%2B3G3cU1k16svDLj33EquXQ9kU%2BOoQXmRmlnFrw7hzj8qbYVifV5tZwJ6Z%2BXjIGHm3%2FntxNoGZ8OEhtHI%2Fnquu4hn9JamPWSlMEyEByvqyatNiLayYpqg3KbSOmXBtmD%2FxnURFAS7v2cxrfGRDJhlkmjd%2BD2ha%2Bwc4f8mpfHpvQ7Z%2FUuHpD6hpvoCo3m06Q55JQRuuuclX0I9kr19IwciEHDU8L%2BQ%2FvqDc4tSnZFdboTvB7NaQGbT%2BzXS3IOZusEnnaNuHegX0lA0Gvi%2Fm8YaFiIkruJzMLbI170GOqUBBWgzl1Cp7G0RXYPDXHoeoepok6LjE8T62hUBYcVTUAlYJLRte8rIg82pavYjOCpQ3UhYm4h%2BdYFQ%2BaxUvM2SLiOOqaoMe2UsT2fbvjgT0M7QV%2Fnh3R8oF82g6Rz0DVYdMazsl9edB7QmxfEBBkGnp7ZSUGayFxY1bJ37CPyCvIuUDqAsSMo031I0WcfBJbhh0W9j6DmEB0%2BKRuTaCQ8m6dZwl%2Fke&X-Amz-Signature=d130b1c4491d435f61645d4cfeb36aaf5b3f001669913ae2cf26a4a88a88d7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNWBJAA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEY%2FGno%2FMypuvkZHW7cMVL47xPXyX3tZE67abwscWfDPAiEAh9V%2Fuz5MCasuJe1FWP86j1hPzu4Ax2msy9M3%2BIfSUAQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2WfRV41kH4M%2FlEircAzDbhtVaU2j2FAvjpc%2BSwyKCrLS3LVNRnEroCf%2BND%2BGKyPsG%2FvWcxe7ugigw%2FsEL%2FaI1e6EqTIXTcGFRA41E%2FokGZnYJ77VSsh0gKvX1UjUJPqGhAJ%2FDF6EHxjR9o%2FjCvhmMwGRm%2FOSPlTvptw3iiGiICoZUK8RKPATf9XKZtri73fPdEzyeGiSo8YZIhI%2BlwD5jZUUr88%2Fa4oc5kEtPnsfcQvLG5sGQQPqi6lPg7BLzdzZ3B%2FB6m%2Fpn6nZw9rjQ9LZlvTEypkXwgi3wq9NuiqKrGZKs8LxcwxXUDEi8F1fQV7Ufsi4cc3%2BSJ%2FMyvLww9NJnOT5ZUUMCXEgzDfh6cWgourU1z8mD%2B3G3cU1k16svDLj33EquXQ9kU%2BOoQXmRmlnFrw7hzj8qbYVifV5tZwJ6Z%2BXjIGHm3%2FntxNoGZ8OEhtHI%2Fnquu4hn9JamPWSlMEyEByvqyatNiLayYpqg3KbSOmXBtmD%2FxnURFAS7v2cxrfGRDJhlkmjd%2BD2ha%2Bwc4f8mpfHpvQ7Z%2FUuHpD6hpvoCo3m06Q55JQRuuuclX0I9kr19IwciEHDU8L%2BQ%2FvqDc4tSnZFdboTvB7NaQGbT%2BzXS3IOZusEnnaNuHegX0lA0Gvi%2Fm8YaFiIkruJzMLbI170GOqUBBWgzl1Cp7G0RXYPDXHoeoepok6LjE8T62hUBYcVTUAlYJLRte8rIg82pavYjOCpQ3UhYm4h%2BdYFQ%2BaxUvM2SLiOOqaoMe2UsT2fbvjgT0M7QV%2Fnh3R8oF82g6Rz0DVYdMazsl9edB7QmxfEBBkGnp7ZSUGayFxY1bJ37CPyCvIuUDqAsSMo031I0WcfBJbhh0W9j6DmEB0%2BKRuTaCQ8m6dZwl%2Fke&X-Amz-Signature=0f5522bd469d1ed716542a5379611132b2d660a77bfe776f1af322bff4ef4c10&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNWBJAA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEY%2FGno%2FMypuvkZHW7cMVL47xPXyX3tZE67abwscWfDPAiEAh9V%2Fuz5MCasuJe1FWP86j1hPzu4Ax2msy9M3%2BIfSUAQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2WfRV41kH4M%2FlEircAzDbhtVaU2j2FAvjpc%2BSwyKCrLS3LVNRnEroCf%2BND%2BGKyPsG%2FvWcxe7ugigw%2FsEL%2FaI1e6EqTIXTcGFRA41E%2FokGZnYJ77VSsh0gKvX1UjUJPqGhAJ%2FDF6EHxjR9o%2FjCvhmMwGRm%2FOSPlTvptw3iiGiICoZUK8RKPATf9XKZtri73fPdEzyeGiSo8YZIhI%2BlwD5jZUUr88%2Fa4oc5kEtPnsfcQvLG5sGQQPqi6lPg7BLzdzZ3B%2FB6m%2Fpn6nZw9rjQ9LZlvTEypkXwgi3wq9NuiqKrGZKs8LxcwxXUDEi8F1fQV7Ufsi4cc3%2BSJ%2FMyvLww9NJnOT5ZUUMCXEgzDfh6cWgourU1z8mD%2B3G3cU1k16svDLj33EquXQ9kU%2BOoQXmRmlnFrw7hzj8qbYVifV5tZwJ6Z%2BXjIGHm3%2FntxNoGZ8OEhtHI%2Fnquu4hn9JamPWSlMEyEByvqyatNiLayYpqg3KbSOmXBtmD%2FxnURFAS7v2cxrfGRDJhlkmjd%2BD2ha%2Bwc4f8mpfHpvQ7Z%2FUuHpD6hpvoCo3m06Q55JQRuuuclX0I9kr19IwciEHDU8L%2BQ%2FvqDc4tSnZFdboTvB7NaQGbT%2BzXS3IOZusEnnaNuHegX0lA0Gvi%2Fm8YaFiIkruJzMLbI170GOqUBBWgzl1Cp7G0RXYPDXHoeoepok6LjE8T62hUBYcVTUAlYJLRte8rIg82pavYjOCpQ3UhYm4h%2BdYFQ%2BaxUvM2SLiOOqaoMe2UsT2fbvjgT0M7QV%2Fnh3R8oF82g6Rz0DVYdMazsl9edB7QmxfEBBkGnp7ZSUGayFxY1bJ37CPyCvIuUDqAsSMo031I0WcfBJbhh0W9j6DmEB0%2BKRuTaCQ8m6dZwl%2Fke&X-Amz-Signature=90a909b90c33e4b475f3d01f16679091984d6059424dc36200e2d9d19f1232b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNWBJAA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEY%2FGno%2FMypuvkZHW7cMVL47xPXyX3tZE67abwscWfDPAiEAh9V%2Fuz5MCasuJe1FWP86j1hPzu4Ax2msy9M3%2BIfSUAQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2WfRV41kH4M%2FlEircAzDbhtVaU2j2FAvjpc%2BSwyKCrLS3LVNRnEroCf%2BND%2BGKyPsG%2FvWcxe7ugigw%2FsEL%2FaI1e6EqTIXTcGFRA41E%2FokGZnYJ77VSsh0gKvX1UjUJPqGhAJ%2FDF6EHxjR9o%2FjCvhmMwGRm%2FOSPlTvptw3iiGiICoZUK8RKPATf9XKZtri73fPdEzyeGiSo8YZIhI%2BlwD5jZUUr88%2Fa4oc5kEtPnsfcQvLG5sGQQPqi6lPg7BLzdzZ3B%2FB6m%2Fpn6nZw9rjQ9LZlvTEypkXwgi3wq9NuiqKrGZKs8LxcwxXUDEi8F1fQV7Ufsi4cc3%2BSJ%2FMyvLww9NJnOT5ZUUMCXEgzDfh6cWgourU1z8mD%2B3G3cU1k16svDLj33EquXQ9kU%2BOoQXmRmlnFrw7hzj8qbYVifV5tZwJ6Z%2BXjIGHm3%2FntxNoGZ8OEhtHI%2Fnquu4hn9JamPWSlMEyEByvqyatNiLayYpqg3KbSOmXBtmD%2FxnURFAS7v2cxrfGRDJhlkmjd%2BD2ha%2Bwc4f8mpfHpvQ7Z%2FUuHpD6hpvoCo3m06Q55JQRuuuclX0I9kr19IwciEHDU8L%2BQ%2FvqDc4tSnZFdboTvB7NaQGbT%2BzXS3IOZusEnnaNuHegX0lA0Gvi%2Fm8YaFiIkruJzMLbI170GOqUBBWgzl1Cp7G0RXYPDXHoeoepok6LjE8T62hUBYcVTUAlYJLRte8rIg82pavYjOCpQ3UhYm4h%2BdYFQ%2BaxUvM2SLiOOqaoMe2UsT2fbvjgT0M7QV%2Fnh3R8oF82g6Rz0DVYdMazsl9edB7QmxfEBBkGnp7ZSUGayFxY1bJ37CPyCvIuUDqAsSMo031I0WcfBJbhh0W9j6DmEB0%2BKRuTaCQ8m6dZwl%2Fke&X-Amz-Signature=8022f00d4519cd8d7149fa82126433f644ffa7e347ca775e0f40b3bce98e5ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNWBJAA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEY%2FGno%2FMypuvkZHW7cMVL47xPXyX3tZE67abwscWfDPAiEAh9V%2Fuz5MCasuJe1FWP86j1hPzu4Ax2msy9M3%2BIfSUAQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2WfRV41kH4M%2FlEircAzDbhtVaU2j2FAvjpc%2BSwyKCrLS3LVNRnEroCf%2BND%2BGKyPsG%2FvWcxe7ugigw%2FsEL%2FaI1e6EqTIXTcGFRA41E%2FokGZnYJ77VSsh0gKvX1UjUJPqGhAJ%2FDF6EHxjR9o%2FjCvhmMwGRm%2FOSPlTvptw3iiGiICoZUK8RKPATf9XKZtri73fPdEzyeGiSo8YZIhI%2BlwD5jZUUr88%2Fa4oc5kEtPnsfcQvLG5sGQQPqi6lPg7BLzdzZ3B%2FB6m%2Fpn6nZw9rjQ9LZlvTEypkXwgi3wq9NuiqKrGZKs8LxcwxXUDEi8F1fQV7Ufsi4cc3%2BSJ%2FMyvLww9NJnOT5ZUUMCXEgzDfh6cWgourU1z8mD%2B3G3cU1k16svDLj33EquXQ9kU%2BOoQXmRmlnFrw7hzj8qbYVifV5tZwJ6Z%2BXjIGHm3%2FntxNoGZ8OEhtHI%2Fnquu4hn9JamPWSlMEyEByvqyatNiLayYpqg3KbSOmXBtmD%2FxnURFAS7v2cxrfGRDJhlkmjd%2BD2ha%2Bwc4f8mpfHpvQ7Z%2FUuHpD6hpvoCo3m06Q55JQRuuuclX0I9kr19IwciEHDU8L%2BQ%2FvqDc4tSnZFdboTvB7NaQGbT%2BzXS3IOZusEnnaNuHegX0lA0Gvi%2Fm8YaFiIkruJzMLbI170GOqUBBWgzl1Cp7G0RXYPDXHoeoepok6LjE8T62hUBYcVTUAlYJLRte8rIg82pavYjOCpQ3UhYm4h%2BdYFQ%2BaxUvM2SLiOOqaoMe2UsT2fbvjgT0M7QV%2Fnh3R8oF82g6Rz0DVYdMazsl9edB7QmxfEBBkGnp7ZSUGayFxY1bJ37CPyCvIuUDqAsSMo031I0WcfBJbhh0W9j6DmEB0%2BKRuTaCQ8m6dZwl%2Fke&X-Amz-Signature=27c8dde6e4aeb1e88881b323242aa34af7163d5f3d319dd3719dbb8ca067ac7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRNWBJAA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEY%2FGno%2FMypuvkZHW7cMVL47xPXyX3tZE67abwscWfDPAiEAh9V%2Fuz5MCasuJe1FWP86j1hPzu4Ax2msy9M3%2BIfSUAQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr2WfRV41kH4M%2FlEircAzDbhtVaU2j2FAvjpc%2BSwyKCrLS3LVNRnEroCf%2BND%2BGKyPsG%2FvWcxe7ugigw%2FsEL%2FaI1e6EqTIXTcGFRA41E%2FokGZnYJ77VSsh0gKvX1UjUJPqGhAJ%2FDF6EHxjR9o%2FjCvhmMwGRm%2FOSPlTvptw3iiGiICoZUK8RKPATf9XKZtri73fPdEzyeGiSo8YZIhI%2BlwD5jZUUr88%2Fa4oc5kEtPnsfcQvLG5sGQQPqi6lPg7BLzdzZ3B%2FB6m%2Fpn6nZw9rjQ9LZlvTEypkXwgi3wq9NuiqKrGZKs8LxcwxXUDEi8F1fQV7Ufsi4cc3%2BSJ%2FMyvLww9NJnOT5ZUUMCXEgzDfh6cWgourU1z8mD%2B3G3cU1k16svDLj33EquXQ9kU%2BOoQXmRmlnFrw7hzj8qbYVifV5tZwJ6Z%2BXjIGHm3%2FntxNoGZ8OEhtHI%2Fnquu4hn9JamPWSlMEyEByvqyatNiLayYpqg3KbSOmXBtmD%2FxnURFAS7v2cxrfGRDJhlkmjd%2BD2ha%2Bwc4f8mpfHpvQ7Z%2FUuHpD6hpvoCo3m06Q55JQRuuuclX0I9kr19IwciEHDU8L%2BQ%2FvqDc4tSnZFdboTvB7NaQGbT%2BzXS3IOZusEnnaNuHegX0lA0Gvi%2Fm8YaFiIkruJzMLbI170GOqUBBWgzl1Cp7G0RXYPDXHoeoepok6LjE8T62hUBYcVTUAlYJLRte8rIg82pavYjOCpQ3UhYm4h%2BdYFQ%2BaxUvM2SLiOOqaoMe2UsT2fbvjgT0M7QV%2Fnh3R8oF82g6Rz0DVYdMazsl9edB7QmxfEBBkGnp7ZSUGayFxY1bJ37CPyCvIuUDqAsSMo031I0WcfBJbhh0W9j6DmEB0%2BKRuTaCQ8m6dZwl%2Fke&X-Amz-Signature=ce7841b7d3d776e61c16ba7238800cd9874ba5fa4005422d0e296503f009099d&X-Amz-SignedHeaders=host&x-id=GetObject)
