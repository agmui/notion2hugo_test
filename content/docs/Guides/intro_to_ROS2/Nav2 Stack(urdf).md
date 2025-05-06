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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLJZBNY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH71Uno6LFyQdOMY562yjVPiPh7Wwu%2F8z2%2FgXKvjJWvDAiEAqOCLz2%2BABKAbFS4Wx0PFZkpSv%2FFoTs6%2F8oI%2FINXeduQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDChbTrT%2BKbXgvrggICrcA%2FWGPz0a%2BQ7PmQCuVZ3abIXpIJQHovOvjiQU24w8zWMC5ldi0q3xspVMqevPkCGnPj0Z0OZjWtwJalfcfj%2B39QxTkL%2BL6GtoCv1hCjuLz0%2FOSihQRpw3HwxZERg0R13%2BZaQ5BjOhg2svgVlxQR6wMDfpTf8Z%2FqGncoHoFjlefDC5wpyaCZLbe854pB2HO0J4O9wffKe8oFdJKtRE0HriHzJr%2BrC8PFZy1ek7o1%2B4w2PeBFIRPv7wQl17DrG0nVBxDyliwI8ikCXJp8FEF55ZvNrDc6G4Ka9VJuBau8GRfyXWP8ZNAyDgJU6OjF86a0aADZCmz%2Fq4OTOYBxmKQHdpoMUOoZQt%2FMJGS271JXWFqwMZYJiVwo7R93TSyWci0hC%2FPwZdziLO1FI0nvfMSrh9i6U2MZ1d2RrfvLU%2F8Yhag%2FcuStMzKyMWkFB33eDN7UaUQU%2FjWFg4GVA01Otmj6bIg9pk4x5mXyPyII2HdXw1DezHlikcBVkcKtD3d3gq5j7hAwCrm2t1qrZ4wWzYVjrxp7Ogao2pvlGJAal8Dh1N6jduUPsbv%2Fi8vQ63f9UwVl9t8t2rPXjNCqjqPxJU0h7zo0NXBPpwIjmo%2FCgCV%2B4KMBTC%2Bn2tX4sxy4NWlmR%2BMOSZ6cAGOqUBeDtaIySO5MUQsRBoYFrisXxWE2kKXRY8At7IUYs6N6IEaU7NQBxtIUhS0eqf0xQLGR6YbbP22qg%2Fq77Dh7qxl502x6Q6j9e3AaF3RcZ3fZk6pf1OXtBvyW20frqnitQePoUPeBzYiD8OWzOt3LXD8BtfJ3%2BbREN3xqKpoFhazkKj%2BASF8KURdwO0h1yAkYU7RREEaVMHJEFkY0%2Bzl7SqdO4b7vrn&X-Amz-Signature=938b8e3d7451e6fd4fef240624ec75bfad66445b25d290d6e41ea5cc27d16a22&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLJZBNY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH71Uno6LFyQdOMY562yjVPiPh7Wwu%2F8z2%2FgXKvjJWvDAiEAqOCLz2%2BABKAbFS4Wx0PFZkpSv%2FFoTs6%2F8oI%2FINXeduQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDChbTrT%2BKbXgvrggICrcA%2FWGPz0a%2BQ7PmQCuVZ3abIXpIJQHovOvjiQU24w8zWMC5ldi0q3xspVMqevPkCGnPj0Z0OZjWtwJalfcfj%2B39QxTkL%2BL6GtoCv1hCjuLz0%2FOSihQRpw3HwxZERg0R13%2BZaQ5BjOhg2svgVlxQR6wMDfpTf8Z%2FqGncoHoFjlefDC5wpyaCZLbe854pB2HO0J4O9wffKe8oFdJKtRE0HriHzJr%2BrC8PFZy1ek7o1%2B4w2PeBFIRPv7wQl17DrG0nVBxDyliwI8ikCXJp8FEF55ZvNrDc6G4Ka9VJuBau8GRfyXWP8ZNAyDgJU6OjF86a0aADZCmz%2Fq4OTOYBxmKQHdpoMUOoZQt%2FMJGS271JXWFqwMZYJiVwo7R93TSyWci0hC%2FPwZdziLO1FI0nvfMSrh9i6U2MZ1d2RrfvLU%2F8Yhag%2FcuStMzKyMWkFB33eDN7UaUQU%2FjWFg4GVA01Otmj6bIg9pk4x5mXyPyII2HdXw1DezHlikcBVkcKtD3d3gq5j7hAwCrm2t1qrZ4wWzYVjrxp7Ogao2pvlGJAal8Dh1N6jduUPsbv%2Fi8vQ63f9UwVl9t8t2rPXjNCqjqPxJU0h7zo0NXBPpwIjmo%2FCgCV%2B4KMBTC%2Bn2tX4sxy4NWlmR%2BMOSZ6cAGOqUBeDtaIySO5MUQsRBoYFrisXxWE2kKXRY8At7IUYs6N6IEaU7NQBxtIUhS0eqf0xQLGR6YbbP22qg%2Fq77Dh7qxl502x6Q6j9e3AaF3RcZ3fZk6pf1OXtBvyW20frqnitQePoUPeBzYiD8OWzOt3LXD8BtfJ3%2BbREN3xqKpoFhazkKj%2BASF8KURdwO0h1yAkYU7RREEaVMHJEFkY0%2Bzl7SqdO4b7vrn&X-Amz-Signature=9b90e427a817640a819f1e42bd1ac43423b97efa6163541c8df6444197cb935e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLJZBNY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH71Uno6LFyQdOMY562yjVPiPh7Wwu%2F8z2%2FgXKvjJWvDAiEAqOCLz2%2BABKAbFS4Wx0PFZkpSv%2FFoTs6%2F8oI%2FINXeduQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDChbTrT%2BKbXgvrggICrcA%2FWGPz0a%2BQ7PmQCuVZ3abIXpIJQHovOvjiQU24w8zWMC5ldi0q3xspVMqevPkCGnPj0Z0OZjWtwJalfcfj%2B39QxTkL%2BL6GtoCv1hCjuLz0%2FOSihQRpw3HwxZERg0R13%2BZaQ5BjOhg2svgVlxQR6wMDfpTf8Z%2FqGncoHoFjlefDC5wpyaCZLbe854pB2HO0J4O9wffKe8oFdJKtRE0HriHzJr%2BrC8PFZy1ek7o1%2B4w2PeBFIRPv7wQl17DrG0nVBxDyliwI8ikCXJp8FEF55ZvNrDc6G4Ka9VJuBau8GRfyXWP8ZNAyDgJU6OjF86a0aADZCmz%2Fq4OTOYBxmKQHdpoMUOoZQt%2FMJGS271JXWFqwMZYJiVwo7R93TSyWci0hC%2FPwZdziLO1FI0nvfMSrh9i6U2MZ1d2RrfvLU%2F8Yhag%2FcuStMzKyMWkFB33eDN7UaUQU%2FjWFg4GVA01Otmj6bIg9pk4x5mXyPyII2HdXw1DezHlikcBVkcKtD3d3gq5j7hAwCrm2t1qrZ4wWzYVjrxp7Ogao2pvlGJAal8Dh1N6jduUPsbv%2Fi8vQ63f9UwVl9t8t2rPXjNCqjqPxJU0h7zo0NXBPpwIjmo%2FCgCV%2B4KMBTC%2Bn2tX4sxy4NWlmR%2BMOSZ6cAGOqUBeDtaIySO5MUQsRBoYFrisXxWE2kKXRY8At7IUYs6N6IEaU7NQBxtIUhS0eqf0xQLGR6YbbP22qg%2Fq77Dh7qxl502x6Q6j9e3AaF3RcZ3fZk6pf1OXtBvyW20frqnitQePoUPeBzYiD8OWzOt3LXD8BtfJ3%2BbREN3xqKpoFhazkKj%2BASF8KURdwO0h1yAkYU7RREEaVMHJEFkY0%2Bzl7SqdO4b7vrn&X-Amz-Signature=ba7151f25eb23a31379d9db602e2b799a6efb5f3e9a9c701067861e634311e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLJZBNY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH71Uno6LFyQdOMY562yjVPiPh7Wwu%2F8z2%2FgXKvjJWvDAiEAqOCLz2%2BABKAbFS4Wx0PFZkpSv%2FFoTs6%2F8oI%2FINXeduQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDChbTrT%2BKbXgvrggICrcA%2FWGPz0a%2BQ7PmQCuVZ3abIXpIJQHovOvjiQU24w8zWMC5ldi0q3xspVMqevPkCGnPj0Z0OZjWtwJalfcfj%2B39QxTkL%2BL6GtoCv1hCjuLz0%2FOSihQRpw3HwxZERg0R13%2BZaQ5BjOhg2svgVlxQR6wMDfpTf8Z%2FqGncoHoFjlefDC5wpyaCZLbe854pB2HO0J4O9wffKe8oFdJKtRE0HriHzJr%2BrC8PFZy1ek7o1%2B4w2PeBFIRPv7wQl17DrG0nVBxDyliwI8ikCXJp8FEF55ZvNrDc6G4Ka9VJuBau8GRfyXWP8ZNAyDgJU6OjF86a0aADZCmz%2Fq4OTOYBxmKQHdpoMUOoZQt%2FMJGS271JXWFqwMZYJiVwo7R93TSyWci0hC%2FPwZdziLO1FI0nvfMSrh9i6U2MZ1d2RrfvLU%2F8Yhag%2FcuStMzKyMWkFB33eDN7UaUQU%2FjWFg4GVA01Otmj6bIg9pk4x5mXyPyII2HdXw1DezHlikcBVkcKtD3d3gq5j7hAwCrm2t1qrZ4wWzYVjrxp7Ogao2pvlGJAal8Dh1N6jduUPsbv%2Fi8vQ63f9UwVl9t8t2rPXjNCqjqPxJU0h7zo0NXBPpwIjmo%2FCgCV%2B4KMBTC%2Bn2tX4sxy4NWlmR%2BMOSZ6cAGOqUBeDtaIySO5MUQsRBoYFrisXxWE2kKXRY8At7IUYs6N6IEaU7NQBxtIUhS0eqf0xQLGR6YbbP22qg%2Fq77Dh7qxl502x6Q6j9e3AaF3RcZ3fZk6pf1OXtBvyW20frqnitQePoUPeBzYiD8OWzOt3LXD8BtfJ3%2BbREN3xqKpoFhazkKj%2BASF8KURdwO0h1yAkYU7RREEaVMHJEFkY0%2Bzl7SqdO4b7vrn&X-Amz-Signature=85957ba380cf79cdf07b69c3b7cd356a84583a5dae710925d9142edc6d03501a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLJZBNY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH71Uno6LFyQdOMY562yjVPiPh7Wwu%2F8z2%2FgXKvjJWvDAiEAqOCLz2%2BABKAbFS4Wx0PFZkpSv%2FFoTs6%2F8oI%2FINXeduQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDChbTrT%2BKbXgvrggICrcA%2FWGPz0a%2BQ7PmQCuVZ3abIXpIJQHovOvjiQU24w8zWMC5ldi0q3xspVMqevPkCGnPj0Z0OZjWtwJalfcfj%2B39QxTkL%2BL6GtoCv1hCjuLz0%2FOSihQRpw3HwxZERg0R13%2BZaQ5BjOhg2svgVlxQR6wMDfpTf8Z%2FqGncoHoFjlefDC5wpyaCZLbe854pB2HO0J4O9wffKe8oFdJKtRE0HriHzJr%2BrC8PFZy1ek7o1%2B4w2PeBFIRPv7wQl17DrG0nVBxDyliwI8ikCXJp8FEF55ZvNrDc6G4Ka9VJuBau8GRfyXWP8ZNAyDgJU6OjF86a0aADZCmz%2Fq4OTOYBxmKQHdpoMUOoZQt%2FMJGS271JXWFqwMZYJiVwo7R93TSyWci0hC%2FPwZdziLO1FI0nvfMSrh9i6U2MZ1d2RrfvLU%2F8Yhag%2FcuStMzKyMWkFB33eDN7UaUQU%2FjWFg4GVA01Otmj6bIg9pk4x5mXyPyII2HdXw1DezHlikcBVkcKtD3d3gq5j7hAwCrm2t1qrZ4wWzYVjrxp7Ogao2pvlGJAal8Dh1N6jduUPsbv%2Fi8vQ63f9UwVl9t8t2rPXjNCqjqPxJU0h7zo0NXBPpwIjmo%2FCgCV%2B4KMBTC%2Bn2tX4sxy4NWlmR%2BMOSZ6cAGOqUBeDtaIySO5MUQsRBoYFrisXxWE2kKXRY8At7IUYs6N6IEaU7NQBxtIUhS0eqf0xQLGR6YbbP22qg%2Fq77Dh7qxl502x6Q6j9e3AaF3RcZ3fZk6pf1OXtBvyW20frqnitQePoUPeBzYiD8OWzOt3LXD8BtfJ3%2BbREN3xqKpoFhazkKj%2BASF8KURdwO0h1yAkYU7RREEaVMHJEFkY0%2Bzl7SqdO4b7vrn&X-Amz-Signature=549ea24366a8d7a7d7031732c27c6d52d9ad6bd1b152a9291fe7777b91150624&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLJZBNY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH71Uno6LFyQdOMY562yjVPiPh7Wwu%2F8z2%2FgXKvjJWvDAiEAqOCLz2%2BABKAbFS4Wx0PFZkpSv%2FFoTs6%2F8oI%2FINXeduQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDChbTrT%2BKbXgvrggICrcA%2FWGPz0a%2BQ7PmQCuVZ3abIXpIJQHovOvjiQU24w8zWMC5ldi0q3xspVMqevPkCGnPj0Z0OZjWtwJalfcfj%2B39QxTkL%2BL6GtoCv1hCjuLz0%2FOSihQRpw3HwxZERg0R13%2BZaQ5BjOhg2svgVlxQR6wMDfpTf8Z%2FqGncoHoFjlefDC5wpyaCZLbe854pB2HO0J4O9wffKe8oFdJKtRE0HriHzJr%2BrC8PFZy1ek7o1%2B4w2PeBFIRPv7wQl17DrG0nVBxDyliwI8ikCXJp8FEF55ZvNrDc6G4Ka9VJuBau8GRfyXWP8ZNAyDgJU6OjF86a0aADZCmz%2Fq4OTOYBxmKQHdpoMUOoZQt%2FMJGS271JXWFqwMZYJiVwo7R93TSyWci0hC%2FPwZdziLO1FI0nvfMSrh9i6U2MZ1d2RrfvLU%2F8Yhag%2FcuStMzKyMWkFB33eDN7UaUQU%2FjWFg4GVA01Otmj6bIg9pk4x5mXyPyII2HdXw1DezHlikcBVkcKtD3d3gq5j7hAwCrm2t1qrZ4wWzYVjrxp7Ogao2pvlGJAal8Dh1N6jduUPsbv%2Fi8vQ63f9UwVl9t8t2rPXjNCqjqPxJU0h7zo0NXBPpwIjmo%2FCgCV%2B4KMBTC%2Bn2tX4sxy4NWlmR%2BMOSZ6cAGOqUBeDtaIySO5MUQsRBoYFrisXxWE2kKXRY8At7IUYs6N6IEaU7NQBxtIUhS0eqf0xQLGR6YbbP22qg%2Fq77Dh7qxl502x6Q6j9e3AaF3RcZ3fZk6pf1OXtBvyW20frqnitQePoUPeBzYiD8OWzOt3LXD8BtfJ3%2BbREN3xqKpoFhazkKj%2BASF8KURdwO0h1yAkYU7RREEaVMHJEFkY0%2Bzl7SqdO4b7vrn&X-Amz-Signature=03247d2a9d5498c3907900125d32b086919250be5ed49c5937f5721c5902470d&X-Amz-SignedHeaders=host&x-id=GetObject)
