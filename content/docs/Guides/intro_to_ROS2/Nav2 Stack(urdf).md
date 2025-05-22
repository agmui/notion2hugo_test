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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHY4O3D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDY9buhr73iu1Uy8GZabyEDDOTvM4qTkPXzL862BiUAiAbnYDeerTvlrYja%2FcnsQrPccGzBYRDJanMhyJO1SuBJiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYFRPSl%2B3LfDl%2ByLKtwDrvablGFfsUN345oAGVBTAYajwUZs%2FuJVQRZt4y%2F42vQh3vixpcsjdeJPGqTB%2Bp6mMqwInfwbyrQKM6tg%2BOChOqrjzsrzHerVlhn%2FLx%2B5IKUNHkkz%2BggJzzMzvD7HQEyLKyrRn8svbAjVh5UVs%2BzvpD4TYg75iHUEpfhHsYAb5UTCCacMpIt996HXSn2a2Rqb90b3CWnnGgcLhs9Qmts6zc9nbhwHBB25xCQnYrK7ameZmW1QCbOjR1fnJI4w8LW7HYaTky%2BT58Dp%2B1mfzz9LmlsYOhLIQf5TjaqQgy5RLQMixLmsZNoYR6cYTfkYu6QTI9leywDX2H%2B8YvgwZy0v%2FfHg6YQZcTElaM%2F2AYBSscEdNedKGnhRQhC6ZFcI1A6Zwf2aS5f8Fjvs7p86T3Ei0QdhzfCVudCdlKUgnjXylEUttdDIOL7gZ%2FlMDMFkhwsMl9O2VAT%2BQ1%2BIcpi4ZWOw1p1tKiag8gPXL8GTJ%2BgVDR1eP04M8DBLljewRkst5XaYf4VpqEdV9zRdXkjBpu0b7meu2tiA2dgXFEVaTHNUBcTkftr2eT4cq0e8SqbVBcZKDncaQh6a6Z%2BA8DH6PysK7IkTx7l%2BNcvghdlltPY%2FlAQJWt0ZHQfbxfCzs%2FAwzOK8wQY6pgF2xv%2F89FSA7hw1W%2F5mtKQTSPy6FCOFVmGly8VIQzhjf1NNA4Q7qBWgvEZoI64e%2FI1l%2BaDEV4okNY5pBfk3tjoIuJ77hyW7Y5G0JtwfzqDGEctu9IT4lxx2hOoDzNQk8T0NJSH8KE4iQ5MbAnWQYTL6HKOywTO4RqWu8nxGszsEbkhn50aH8FzxlZAHBdr5CpvCm9MrYiivtu1L9mGdsc2msZGx2JkK&X-Amz-Signature=b2ce744ec71e1e76add28e19a0543c1658c3fd5fd627e091182eebd6ecf13386&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHY4O3D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDY9buhr73iu1Uy8GZabyEDDOTvM4qTkPXzL862BiUAiAbnYDeerTvlrYja%2FcnsQrPccGzBYRDJanMhyJO1SuBJiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYFRPSl%2B3LfDl%2ByLKtwDrvablGFfsUN345oAGVBTAYajwUZs%2FuJVQRZt4y%2F42vQh3vixpcsjdeJPGqTB%2Bp6mMqwInfwbyrQKM6tg%2BOChOqrjzsrzHerVlhn%2FLx%2B5IKUNHkkz%2BggJzzMzvD7HQEyLKyrRn8svbAjVh5UVs%2BzvpD4TYg75iHUEpfhHsYAb5UTCCacMpIt996HXSn2a2Rqb90b3CWnnGgcLhs9Qmts6zc9nbhwHBB25xCQnYrK7ameZmW1QCbOjR1fnJI4w8LW7HYaTky%2BT58Dp%2B1mfzz9LmlsYOhLIQf5TjaqQgy5RLQMixLmsZNoYR6cYTfkYu6QTI9leywDX2H%2B8YvgwZy0v%2FfHg6YQZcTElaM%2F2AYBSscEdNedKGnhRQhC6ZFcI1A6Zwf2aS5f8Fjvs7p86T3Ei0QdhzfCVudCdlKUgnjXylEUttdDIOL7gZ%2FlMDMFkhwsMl9O2VAT%2BQ1%2BIcpi4ZWOw1p1tKiag8gPXL8GTJ%2BgVDR1eP04M8DBLljewRkst5XaYf4VpqEdV9zRdXkjBpu0b7meu2tiA2dgXFEVaTHNUBcTkftr2eT4cq0e8SqbVBcZKDncaQh6a6Z%2BA8DH6PysK7IkTx7l%2BNcvghdlltPY%2FlAQJWt0ZHQfbxfCzs%2FAwzOK8wQY6pgF2xv%2F89FSA7hw1W%2F5mtKQTSPy6FCOFVmGly8VIQzhjf1NNA4Q7qBWgvEZoI64e%2FI1l%2BaDEV4okNY5pBfk3tjoIuJ77hyW7Y5G0JtwfzqDGEctu9IT4lxx2hOoDzNQk8T0NJSH8KE4iQ5MbAnWQYTL6HKOywTO4RqWu8nxGszsEbkhn50aH8FzxlZAHBdr5CpvCm9MrYiivtu1L9mGdsc2msZGx2JkK&X-Amz-Signature=0d246cf5d288e053402c853053c4047c9c241a2cd88d3cf66ffc1a9f96ab6d86&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHY4O3D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDY9buhr73iu1Uy8GZabyEDDOTvM4qTkPXzL862BiUAiAbnYDeerTvlrYja%2FcnsQrPccGzBYRDJanMhyJO1SuBJiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYFRPSl%2B3LfDl%2ByLKtwDrvablGFfsUN345oAGVBTAYajwUZs%2FuJVQRZt4y%2F42vQh3vixpcsjdeJPGqTB%2Bp6mMqwInfwbyrQKM6tg%2BOChOqrjzsrzHerVlhn%2FLx%2B5IKUNHkkz%2BggJzzMzvD7HQEyLKyrRn8svbAjVh5UVs%2BzvpD4TYg75iHUEpfhHsYAb5UTCCacMpIt996HXSn2a2Rqb90b3CWnnGgcLhs9Qmts6zc9nbhwHBB25xCQnYrK7ameZmW1QCbOjR1fnJI4w8LW7HYaTky%2BT58Dp%2B1mfzz9LmlsYOhLIQf5TjaqQgy5RLQMixLmsZNoYR6cYTfkYu6QTI9leywDX2H%2B8YvgwZy0v%2FfHg6YQZcTElaM%2F2AYBSscEdNedKGnhRQhC6ZFcI1A6Zwf2aS5f8Fjvs7p86T3Ei0QdhzfCVudCdlKUgnjXylEUttdDIOL7gZ%2FlMDMFkhwsMl9O2VAT%2BQ1%2BIcpi4ZWOw1p1tKiag8gPXL8GTJ%2BgVDR1eP04M8DBLljewRkst5XaYf4VpqEdV9zRdXkjBpu0b7meu2tiA2dgXFEVaTHNUBcTkftr2eT4cq0e8SqbVBcZKDncaQh6a6Z%2BA8DH6PysK7IkTx7l%2BNcvghdlltPY%2FlAQJWt0ZHQfbxfCzs%2FAwzOK8wQY6pgF2xv%2F89FSA7hw1W%2F5mtKQTSPy6FCOFVmGly8VIQzhjf1NNA4Q7qBWgvEZoI64e%2FI1l%2BaDEV4okNY5pBfk3tjoIuJ77hyW7Y5G0JtwfzqDGEctu9IT4lxx2hOoDzNQk8T0NJSH8KE4iQ5MbAnWQYTL6HKOywTO4RqWu8nxGszsEbkhn50aH8FzxlZAHBdr5CpvCm9MrYiivtu1L9mGdsc2msZGx2JkK&X-Amz-Signature=04868603c9cb1beb0ee8febbd9020b15055c06125fa75e6b2c38b6948680b394&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHY4O3D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDY9buhr73iu1Uy8GZabyEDDOTvM4qTkPXzL862BiUAiAbnYDeerTvlrYja%2FcnsQrPccGzBYRDJanMhyJO1SuBJiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYFRPSl%2B3LfDl%2ByLKtwDrvablGFfsUN345oAGVBTAYajwUZs%2FuJVQRZt4y%2F42vQh3vixpcsjdeJPGqTB%2Bp6mMqwInfwbyrQKM6tg%2BOChOqrjzsrzHerVlhn%2FLx%2B5IKUNHkkz%2BggJzzMzvD7HQEyLKyrRn8svbAjVh5UVs%2BzvpD4TYg75iHUEpfhHsYAb5UTCCacMpIt996HXSn2a2Rqb90b3CWnnGgcLhs9Qmts6zc9nbhwHBB25xCQnYrK7ameZmW1QCbOjR1fnJI4w8LW7HYaTky%2BT58Dp%2B1mfzz9LmlsYOhLIQf5TjaqQgy5RLQMixLmsZNoYR6cYTfkYu6QTI9leywDX2H%2B8YvgwZy0v%2FfHg6YQZcTElaM%2F2AYBSscEdNedKGnhRQhC6ZFcI1A6Zwf2aS5f8Fjvs7p86T3Ei0QdhzfCVudCdlKUgnjXylEUttdDIOL7gZ%2FlMDMFkhwsMl9O2VAT%2BQ1%2BIcpi4ZWOw1p1tKiag8gPXL8GTJ%2BgVDR1eP04M8DBLljewRkst5XaYf4VpqEdV9zRdXkjBpu0b7meu2tiA2dgXFEVaTHNUBcTkftr2eT4cq0e8SqbVBcZKDncaQh6a6Z%2BA8DH6PysK7IkTx7l%2BNcvghdlltPY%2FlAQJWt0ZHQfbxfCzs%2FAwzOK8wQY6pgF2xv%2F89FSA7hw1W%2F5mtKQTSPy6FCOFVmGly8VIQzhjf1NNA4Q7qBWgvEZoI64e%2FI1l%2BaDEV4okNY5pBfk3tjoIuJ77hyW7Y5G0JtwfzqDGEctu9IT4lxx2hOoDzNQk8T0NJSH8KE4iQ5MbAnWQYTL6HKOywTO4RqWu8nxGszsEbkhn50aH8FzxlZAHBdr5CpvCm9MrYiivtu1L9mGdsc2msZGx2JkK&X-Amz-Signature=ebea86d572fb89e684fe62816afa4233cf60f294974f75339747fd2918e4bdd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHY4O3D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDY9buhr73iu1Uy8GZabyEDDOTvM4qTkPXzL862BiUAiAbnYDeerTvlrYja%2FcnsQrPccGzBYRDJanMhyJO1SuBJiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYFRPSl%2B3LfDl%2ByLKtwDrvablGFfsUN345oAGVBTAYajwUZs%2FuJVQRZt4y%2F42vQh3vixpcsjdeJPGqTB%2Bp6mMqwInfwbyrQKM6tg%2BOChOqrjzsrzHerVlhn%2FLx%2B5IKUNHkkz%2BggJzzMzvD7HQEyLKyrRn8svbAjVh5UVs%2BzvpD4TYg75iHUEpfhHsYAb5UTCCacMpIt996HXSn2a2Rqb90b3CWnnGgcLhs9Qmts6zc9nbhwHBB25xCQnYrK7ameZmW1QCbOjR1fnJI4w8LW7HYaTky%2BT58Dp%2B1mfzz9LmlsYOhLIQf5TjaqQgy5RLQMixLmsZNoYR6cYTfkYu6QTI9leywDX2H%2B8YvgwZy0v%2FfHg6YQZcTElaM%2F2AYBSscEdNedKGnhRQhC6ZFcI1A6Zwf2aS5f8Fjvs7p86T3Ei0QdhzfCVudCdlKUgnjXylEUttdDIOL7gZ%2FlMDMFkhwsMl9O2VAT%2BQ1%2BIcpi4ZWOw1p1tKiag8gPXL8GTJ%2BgVDR1eP04M8DBLljewRkst5XaYf4VpqEdV9zRdXkjBpu0b7meu2tiA2dgXFEVaTHNUBcTkftr2eT4cq0e8SqbVBcZKDncaQh6a6Z%2BA8DH6PysK7IkTx7l%2BNcvghdlltPY%2FlAQJWt0ZHQfbxfCzs%2FAwzOK8wQY6pgF2xv%2F89FSA7hw1W%2F5mtKQTSPy6FCOFVmGly8VIQzhjf1NNA4Q7qBWgvEZoI64e%2FI1l%2BaDEV4okNY5pBfk3tjoIuJ77hyW7Y5G0JtwfzqDGEctu9IT4lxx2hOoDzNQk8T0NJSH8KE4iQ5MbAnWQYTL6HKOywTO4RqWu8nxGszsEbkhn50aH8FzxlZAHBdr5CpvCm9MrYiivtu1L9mGdsc2msZGx2JkK&X-Amz-Signature=b0b1137e2703d6a6c1ebff0ce2c5c2e929f6569d8cdb694943e47c21317beceb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHY4O3D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEfDY9buhr73iu1Uy8GZabyEDDOTvM4qTkPXzL862BiUAiAbnYDeerTvlrYja%2FcnsQrPccGzBYRDJanMhyJO1SuBJiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYFRPSl%2B3LfDl%2ByLKtwDrvablGFfsUN345oAGVBTAYajwUZs%2FuJVQRZt4y%2F42vQh3vixpcsjdeJPGqTB%2Bp6mMqwInfwbyrQKM6tg%2BOChOqrjzsrzHerVlhn%2FLx%2B5IKUNHkkz%2BggJzzMzvD7HQEyLKyrRn8svbAjVh5UVs%2BzvpD4TYg75iHUEpfhHsYAb5UTCCacMpIt996HXSn2a2Rqb90b3CWnnGgcLhs9Qmts6zc9nbhwHBB25xCQnYrK7ameZmW1QCbOjR1fnJI4w8LW7HYaTky%2BT58Dp%2B1mfzz9LmlsYOhLIQf5TjaqQgy5RLQMixLmsZNoYR6cYTfkYu6QTI9leywDX2H%2B8YvgwZy0v%2FfHg6YQZcTElaM%2F2AYBSscEdNedKGnhRQhC6ZFcI1A6Zwf2aS5f8Fjvs7p86T3Ei0QdhzfCVudCdlKUgnjXylEUttdDIOL7gZ%2FlMDMFkhwsMl9O2VAT%2BQ1%2BIcpi4ZWOw1p1tKiag8gPXL8GTJ%2BgVDR1eP04M8DBLljewRkst5XaYf4VpqEdV9zRdXkjBpu0b7meu2tiA2dgXFEVaTHNUBcTkftr2eT4cq0e8SqbVBcZKDncaQh6a6Z%2BA8DH6PysK7IkTx7l%2BNcvghdlltPY%2FlAQJWt0ZHQfbxfCzs%2FAwzOK8wQY6pgF2xv%2F89FSA7hw1W%2F5mtKQTSPy6FCOFVmGly8VIQzhjf1NNA4Q7qBWgvEZoI64e%2FI1l%2BaDEV4okNY5pBfk3tjoIuJ77hyW7Y5G0JtwfzqDGEctu9IT4lxx2hOoDzNQk8T0NJSH8KE4iQ5MbAnWQYTL6HKOywTO4RqWu8nxGszsEbkhn50aH8FzxlZAHBdr5CpvCm9MrYiivtu1L9mGdsc2msZGx2JkK&X-Amz-Signature=973f9d119241d0135814ba3dd4e1d6eeb766d161224fb933a08a6c6ea54e024a&X-Amz-SignedHeaders=host&x-id=GetObject)
