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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGQG72J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJE%2BE5xEA2PfXV85I7LmdIHlhiSA8RPe5UMci9HUSO5wIgfetl2G1JLMSmW2nbMwJScIOXcGvZnvxVrdYxUaXwst8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKjf0lCK024%2FrfPPCircA39Cg4Ot0rCKVJf%2Btnt8mKWJibzuqCCWfHqH34xjpXKQIafN8x1HTTzE4Z%2Fvzul6yO2BCf7NM%2BHw9yVrTdEj57cEMyZjToLZ6IhChL4NOzM6O8kGyd9ehQsIOkcu9fbwAGggxBABwq3t0q%2BHF1b1Kb%2BzIwkypj%2BM4gc%2FhhzGUUCBI3HAROlU%2BJCDcq9KgVgYWIvCpSAfaOA7jeAJCOUBpEz0FK%2BQWa4%2FFPJmvZqYg1KjJ97n7eq0P51fzy2LpUE0XCUoHFB9jb7AKhQP3xKqZX4459rVwozDdIsliHg9AxV0oAZrehpZ6nW8x3hRlFHPDBD38PTCrvg%2FZn8TF44JHZV19Je8T4lFGItxRgaUjo01jkdC9eP2YtR1VNntbpUdEOUarZ0Uw5MKlwYP6bgIvaIXaGO%2BKyLwvbviGJsZAhNPEK%2FHVQ6klo8h06bTGM9S72Tp31ruvQzKT6VOjBK5QzcwTQ%2Ft7%2FXnp%2B6tWtF6ARW1sVtV%2FBhteuXLZwfqJFljZAaI55FDt3MIXI40A9284potNdpPFaLvz78oLNqoOa7%2BvXFbvqybvowCMb7Dq8lKvlsZBlT7Ypa3X%2BONqPSPdxkRWz%2FJM%2FHkkfHuUDr9R1FmMME4HdxkyP79q2nqMNCxwL0GOqUByGDuUd%2BO8EPR%2FCkszhxn%2FsNJXrbOnNs01sIjxGQFUtTyTzQX%2FkNYBaudo7D5Os703gwMbXFrA1Kl12taN1ZnsuH7nwqwwNRrnFfCg%2BYQb1ZfUK2GDxYFKKirwWyBcB1q8g0db6dnL9l%2FgVb7PviEIG%2BcdeTjA0t28jwdUY9M%2FzMdckbzE%2FhQRvKTkCsiiwO84%2Fet3F4TMNLBbP4Hqy1P4i2otD81&X-Amz-Signature=6b9a9cbed47ec9e3929a9d7ca5e047c84dfa73d9690dae78376f5de360924e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGQG72J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJE%2BE5xEA2PfXV85I7LmdIHlhiSA8RPe5UMci9HUSO5wIgfetl2G1JLMSmW2nbMwJScIOXcGvZnvxVrdYxUaXwst8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKjf0lCK024%2FrfPPCircA39Cg4Ot0rCKVJf%2Btnt8mKWJibzuqCCWfHqH34xjpXKQIafN8x1HTTzE4Z%2Fvzul6yO2BCf7NM%2BHw9yVrTdEj57cEMyZjToLZ6IhChL4NOzM6O8kGyd9ehQsIOkcu9fbwAGggxBABwq3t0q%2BHF1b1Kb%2BzIwkypj%2BM4gc%2FhhzGUUCBI3HAROlU%2BJCDcq9KgVgYWIvCpSAfaOA7jeAJCOUBpEz0FK%2BQWa4%2FFPJmvZqYg1KjJ97n7eq0P51fzy2LpUE0XCUoHFB9jb7AKhQP3xKqZX4459rVwozDdIsliHg9AxV0oAZrehpZ6nW8x3hRlFHPDBD38PTCrvg%2FZn8TF44JHZV19Je8T4lFGItxRgaUjo01jkdC9eP2YtR1VNntbpUdEOUarZ0Uw5MKlwYP6bgIvaIXaGO%2BKyLwvbviGJsZAhNPEK%2FHVQ6klo8h06bTGM9S72Tp31ruvQzKT6VOjBK5QzcwTQ%2Ft7%2FXnp%2B6tWtF6ARW1sVtV%2FBhteuXLZwfqJFljZAaI55FDt3MIXI40A9284potNdpPFaLvz78oLNqoOa7%2BvXFbvqybvowCMb7Dq8lKvlsZBlT7Ypa3X%2BONqPSPdxkRWz%2FJM%2FHkkfHuUDr9R1FmMME4HdxkyP79q2nqMNCxwL0GOqUByGDuUd%2BO8EPR%2FCkszhxn%2FsNJXrbOnNs01sIjxGQFUtTyTzQX%2FkNYBaudo7D5Os703gwMbXFrA1Kl12taN1ZnsuH7nwqwwNRrnFfCg%2BYQb1ZfUK2GDxYFKKirwWyBcB1q8g0db6dnL9l%2FgVb7PviEIG%2BcdeTjA0t28jwdUY9M%2FzMdckbzE%2FhQRvKTkCsiiwO84%2Fet3F4TMNLBbP4Hqy1P4i2otD81&X-Amz-Signature=40ab8d65330c34a4bcdc50260ff278683ea191b06a383e1fdb69b1171c271c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGQG72J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJE%2BE5xEA2PfXV85I7LmdIHlhiSA8RPe5UMci9HUSO5wIgfetl2G1JLMSmW2nbMwJScIOXcGvZnvxVrdYxUaXwst8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKjf0lCK024%2FrfPPCircA39Cg4Ot0rCKVJf%2Btnt8mKWJibzuqCCWfHqH34xjpXKQIafN8x1HTTzE4Z%2Fvzul6yO2BCf7NM%2BHw9yVrTdEj57cEMyZjToLZ6IhChL4NOzM6O8kGyd9ehQsIOkcu9fbwAGggxBABwq3t0q%2BHF1b1Kb%2BzIwkypj%2BM4gc%2FhhzGUUCBI3HAROlU%2BJCDcq9KgVgYWIvCpSAfaOA7jeAJCOUBpEz0FK%2BQWa4%2FFPJmvZqYg1KjJ97n7eq0P51fzy2LpUE0XCUoHFB9jb7AKhQP3xKqZX4459rVwozDdIsliHg9AxV0oAZrehpZ6nW8x3hRlFHPDBD38PTCrvg%2FZn8TF44JHZV19Je8T4lFGItxRgaUjo01jkdC9eP2YtR1VNntbpUdEOUarZ0Uw5MKlwYP6bgIvaIXaGO%2BKyLwvbviGJsZAhNPEK%2FHVQ6klo8h06bTGM9S72Tp31ruvQzKT6VOjBK5QzcwTQ%2Ft7%2FXnp%2B6tWtF6ARW1sVtV%2FBhteuXLZwfqJFljZAaI55FDt3MIXI40A9284potNdpPFaLvz78oLNqoOa7%2BvXFbvqybvowCMb7Dq8lKvlsZBlT7Ypa3X%2BONqPSPdxkRWz%2FJM%2FHkkfHuUDr9R1FmMME4HdxkyP79q2nqMNCxwL0GOqUByGDuUd%2BO8EPR%2FCkszhxn%2FsNJXrbOnNs01sIjxGQFUtTyTzQX%2FkNYBaudo7D5Os703gwMbXFrA1Kl12taN1ZnsuH7nwqwwNRrnFfCg%2BYQb1ZfUK2GDxYFKKirwWyBcB1q8g0db6dnL9l%2FgVb7PviEIG%2BcdeTjA0t28jwdUY9M%2FzMdckbzE%2FhQRvKTkCsiiwO84%2Fet3F4TMNLBbP4Hqy1P4i2otD81&X-Amz-Signature=8c3e560ba561ebb3c93bcbabc5bb50b3d8098cb2a1e14a37f3afb54257790f19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGQG72J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJE%2BE5xEA2PfXV85I7LmdIHlhiSA8RPe5UMci9HUSO5wIgfetl2G1JLMSmW2nbMwJScIOXcGvZnvxVrdYxUaXwst8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKjf0lCK024%2FrfPPCircA39Cg4Ot0rCKVJf%2Btnt8mKWJibzuqCCWfHqH34xjpXKQIafN8x1HTTzE4Z%2Fvzul6yO2BCf7NM%2BHw9yVrTdEj57cEMyZjToLZ6IhChL4NOzM6O8kGyd9ehQsIOkcu9fbwAGggxBABwq3t0q%2BHF1b1Kb%2BzIwkypj%2BM4gc%2FhhzGUUCBI3HAROlU%2BJCDcq9KgVgYWIvCpSAfaOA7jeAJCOUBpEz0FK%2BQWa4%2FFPJmvZqYg1KjJ97n7eq0P51fzy2LpUE0XCUoHFB9jb7AKhQP3xKqZX4459rVwozDdIsliHg9AxV0oAZrehpZ6nW8x3hRlFHPDBD38PTCrvg%2FZn8TF44JHZV19Je8T4lFGItxRgaUjo01jkdC9eP2YtR1VNntbpUdEOUarZ0Uw5MKlwYP6bgIvaIXaGO%2BKyLwvbviGJsZAhNPEK%2FHVQ6klo8h06bTGM9S72Tp31ruvQzKT6VOjBK5QzcwTQ%2Ft7%2FXnp%2B6tWtF6ARW1sVtV%2FBhteuXLZwfqJFljZAaI55FDt3MIXI40A9284potNdpPFaLvz78oLNqoOa7%2BvXFbvqybvowCMb7Dq8lKvlsZBlT7Ypa3X%2BONqPSPdxkRWz%2FJM%2FHkkfHuUDr9R1FmMME4HdxkyP79q2nqMNCxwL0GOqUByGDuUd%2BO8EPR%2FCkszhxn%2FsNJXrbOnNs01sIjxGQFUtTyTzQX%2FkNYBaudo7D5Os703gwMbXFrA1Kl12taN1ZnsuH7nwqwwNRrnFfCg%2BYQb1ZfUK2GDxYFKKirwWyBcB1q8g0db6dnL9l%2FgVb7PviEIG%2BcdeTjA0t28jwdUY9M%2FzMdckbzE%2FhQRvKTkCsiiwO84%2Fet3F4TMNLBbP4Hqy1P4i2otD81&X-Amz-Signature=39d93fa1a6212d69dfdfb5d58f5ccf1a0fec27a28f25e4fe75f4b7a3bf2e732d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGQG72J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJE%2BE5xEA2PfXV85I7LmdIHlhiSA8RPe5UMci9HUSO5wIgfetl2G1JLMSmW2nbMwJScIOXcGvZnvxVrdYxUaXwst8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKjf0lCK024%2FrfPPCircA39Cg4Ot0rCKVJf%2Btnt8mKWJibzuqCCWfHqH34xjpXKQIafN8x1HTTzE4Z%2Fvzul6yO2BCf7NM%2BHw9yVrTdEj57cEMyZjToLZ6IhChL4NOzM6O8kGyd9ehQsIOkcu9fbwAGggxBABwq3t0q%2BHF1b1Kb%2BzIwkypj%2BM4gc%2FhhzGUUCBI3HAROlU%2BJCDcq9KgVgYWIvCpSAfaOA7jeAJCOUBpEz0FK%2BQWa4%2FFPJmvZqYg1KjJ97n7eq0P51fzy2LpUE0XCUoHFB9jb7AKhQP3xKqZX4459rVwozDdIsliHg9AxV0oAZrehpZ6nW8x3hRlFHPDBD38PTCrvg%2FZn8TF44JHZV19Je8T4lFGItxRgaUjo01jkdC9eP2YtR1VNntbpUdEOUarZ0Uw5MKlwYP6bgIvaIXaGO%2BKyLwvbviGJsZAhNPEK%2FHVQ6klo8h06bTGM9S72Tp31ruvQzKT6VOjBK5QzcwTQ%2Ft7%2FXnp%2B6tWtF6ARW1sVtV%2FBhteuXLZwfqJFljZAaI55FDt3MIXI40A9284potNdpPFaLvz78oLNqoOa7%2BvXFbvqybvowCMb7Dq8lKvlsZBlT7Ypa3X%2BONqPSPdxkRWz%2FJM%2FHkkfHuUDr9R1FmMME4HdxkyP79q2nqMNCxwL0GOqUByGDuUd%2BO8EPR%2FCkszhxn%2FsNJXrbOnNs01sIjxGQFUtTyTzQX%2FkNYBaudo7D5Os703gwMbXFrA1Kl12taN1ZnsuH7nwqwwNRrnFfCg%2BYQb1ZfUK2GDxYFKKirwWyBcB1q8g0db6dnL9l%2FgVb7PviEIG%2BcdeTjA0t28jwdUY9M%2FzMdckbzE%2FhQRvKTkCsiiwO84%2Fet3F4TMNLBbP4Hqy1P4i2otD81&X-Amz-Signature=56ad2d52fcfa1aa0ad7f87f70b5e6e0f49c816c3e19247af9b5244a4019d51eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXGQG72J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJE%2BE5xEA2PfXV85I7LmdIHlhiSA8RPe5UMci9HUSO5wIgfetl2G1JLMSmW2nbMwJScIOXcGvZnvxVrdYxUaXwst8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKjf0lCK024%2FrfPPCircA39Cg4Ot0rCKVJf%2Btnt8mKWJibzuqCCWfHqH34xjpXKQIafN8x1HTTzE4Z%2Fvzul6yO2BCf7NM%2BHw9yVrTdEj57cEMyZjToLZ6IhChL4NOzM6O8kGyd9ehQsIOkcu9fbwAGggxBABwq3t0q%2BHF1b1Kb%2BzIwkypj%2BM4gc%2FhhzGUUCBI3HAROlU%2BJCDcq9KgVgYWIvCpSAfaOA7jeAJCOUBpEz0FK%2BQWa4%2FFPJmvZqYg1KjJ97n7eq0P51fzy2LpUE0XCUoHFB9jb7AKhQP3xKqZX4459rVwozDdIsliHg9AxV0oAZrehpZ6nW8x3hRlFHPDBD38PTCrvg%2FZn8TF44JHZV19Je8T4lFGItxRgaUjo01jkdC9eP2YtR1VNntbpUdEOUarZ0Uw5MKlwYP6bgIvaIXaGO%2BKyLwvbviGJsZAhNPEK%2FHVQ6klo8h06bTGM9S72Tp31ruvQzKT6VOjBK5QzcwTQ%2Ft7%2FXnp%2B6tWtF6ARW1sVtV%2FBhteuXLZwfqJFljZAaI55FDt3MIXI40A9284potNdpPFaLvz78oLNqoOa7%2BvXFbvqybvowCMb7Dq8lKvlsZBlT7Ypa3X%2BONqPSPdxkRWz%2FJM%2FHkkfHuUDr9R1FmMME4HdxkyP79q2nqMNCxwL0GOqUByGDuUd%2BO8EPR%2FCkszhxn%2FsNJXrbOnNs01sIjxGQFUtTyTzQX%2FkNYBaudo7D5Os703gwMbXFrA1Kl12taN1ZnsuH7nwqwwNRrnFfCg%2BYQb1ZfUK2GDxYFKKirwWyBcB1q8g0db6dnL9l%2FgVb7PviEIG%2BcdeTjA0t28jwdUY9M%2FzMdckbzE%2FhQRvKTkCsiiwO84%2Fet3F4TMNLBbP4Hqy1P4i2otD81&X-Amz-Signature=bf3e7c2aa822208987ef7ff259fe314287a16b526272d059365ae9aecd2b0f7d&X-Amz-SignedHeaders=host&x-id=GetObject)
