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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXSEHXQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCzNAi%2BzSZekonv%2Bxw3cncQCO8rftK3oE1p%2FVnFFTknEgIhALfFU%2B7ShbJ8Zca%2FP3wBcS6IRrxlonvzoR%2BniP%2FUtpUVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHL%2F8gIuX9O33zv5Qq3APaz4XVYFj5X5gGOOPHjlMhdwBARc2FnKEzwYtWS5QLoxHm8tKfdZ8N6De22ESYjh7Jwx9AV6krezs6JMUwISnxjvM5AyAorKcKaO406CbkIrcTWasnFray1%2FRmZHvpsrtcRRRknVxQH7HyNh6bmzesb%2BCZXzVx0fP%2BpvDOqE53vjunHkSEOxbrtQ9JkLwJutkTeEdn1znRTQUCCDe9Inz2MXcvPBiY1XPAzHZLpizXhkGL3z3SYvoyWymwIBNJvDkf0I4BLgwR6Vy6xQ2Pq5%2FE9RRQe5G5PCks1NsVbK9fHmZr9d%2FjmTbM58Lxi04P4yvHvzo5Ad16yKHt0U00CFURq%2BZGPMgPRR%2FV8ihTnwzhAzmqnDEGmtWBCNYJbwJqESYJZaLcq29eUFeoBB3x9MHxHzli2Secpdjdj%2Fj8AE6Agizvz9bOdpt33xLZjVhHkZM1gbfuOOCVWMC7FFQOlOvDL6xBuiEjXvbA4RR86spsk4PS6PI7afhgs%2BRRDsRAGBGr82FCWGD%2F2Xc%2B%2Bc2yBxWhkaRYinY8%2Fc%2B1TE%2BZJuVPLDUql%2Bd%2BH9gU9DNsd1B67d0cSiXFvXBvsj5bQ4BGYrQ9IUxp3e%2F4G90Am%2BjiOKbXmPiMI0WUeg%2FZy1dvMjCUoYPBBjqkAclUX3vl6PGoC0BEPbBV5eMDstqjHItAhY8qNIyZSFLChUmRQ%2BrkAjmCe9rGh8jkBC7Rp3PRtVhdrkaZ1kn9A%2FrO4hNqjkRh13Nze1l0OrMJ0zgFpX8tyt4UzR%2B4VRah%2FboQTS96G8%2Bb4soj4aFfrTpbOB2EkV1m3Jn7qXdNoKoBrP0gcG62%2FQO9knuUuoQ2hxaq8w5%2FsNBGnhPZOMUTkivseslt&X-Amz-Signature=98f5b3502837941e48375406da16938725639785e465370d28dfcc7e00e484de&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXSEHXQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCzNAi%2BzSZekonv%2Bxw3cncQCO8rftK3oE1p%2FVnFFTknEgIhALfFU%2B7ShbJ8Zca%2FP3wBcS6IRrxlonvzoR%2BniP%2FUtpUVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHL%2F8gIuX9O33zv5Qq3APaz4XVYFj5X5gGOOPHjlMhdwBARc2FnKEzwYtWS5QLoxHm8tKfdZ8N6De22ESYjh7Jwx9AV6krezs6JMUwISnxjvM5AyAorKcKaO406CbkIrcTWasnFray1%2FRmZHvpsrtcRRRknVxQH7HyNh6bmzesb%2BCZXzVx0fP%2BpvDOqE53vjunHkSEOxbrtQ9JkLwJutkTeEdn1znRTQUCCDe9Inz2MXcvPBiY1XPAzHZLpizXhkGL3z3SYvoyWymwIBNJvDkf0I4BLgwR6Vy6xQ2Pq5%2FE9RRQe5G5PCks1NsVbK9fHmZr9d%2FjmTbM58Lxi04P4yvHvzo5Ad16yKHt0U00CFURq%2BZGPMgPRR%2FV8ihTnwzhAzmqnDEGmtWBCNYJbwJqESYJZaLcq29eUFeoBB3x9MHxHzli2Secpdjdj%2Fj8AE6Agizvz9bOdpt33xLZjVhHkZM1gbfuOOCVWMC7FFQOlOvDL6xBuiEjXvbA4RR86spsk4PS6PI7afhgs%2BRRDsRAGBGr82FCWGD%2F2Xc%2B%2Bc2yBxWhkaRYinY8%2Fc%2B1TE%2BZJuVPLDUql%2Bd%2BH9gU9DNsd1B67d0cSiXFvXBvsj5bQ4BGYrQ9IUxp3e%2F4G90Am%2BjiOKbXmPiMI0WUeg%2FZy1dvMjCUoYPBBjqkAclUX3vl6PGoC0BEPbBV5eMDstqjHItAhY8qNIyZSFLChUmRQ%2BrkAjmCe9rGh8jkBC7Rp3PRtVhdrkaZ1kn9A%2FrO4hNqjkRh13Nze1l0OrMJ0zgFpX8tyt4UzR%2B4VRah%2FboQTS96G8%2Bb4soj4aFfrTpbOB2EkV1m3Jn7qXdNoKoBrP0gcG62%2FQO9knuUuoQ2hxaq8w5%2FsNBGnhPZOMUTkivseslt&X-Amz-Signature=4523284a83ce51253b0f5b24abdd1c0f010d9618743383b4fe064b44078ab01e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXSEHXQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCzNAi%2BzSZekonv%2Bxw3cncQCO8rftK3oE1p%2FVnFFTknEgIhALfFU%2B7ShbJ8Zca%2FP3wBcS6IRrxlonvzoR%2BniP%2FUtpUVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHL%2F8gIuX9O33zv5Qq3APaz4XVYFj5X5gGOOPHjlMhdwBARc2FnKEzwYtWS5QLoxHm8tKfdZ8N6De22ESYjh7Jwx9AV6krezs6JMUwISnxjvM5AyAorKcKaO406CbkIrcTWasnFray1%2FRmZHvpsrtcRRRknVxQH7HyNh6bmzesb%2BCZXzVx0fP%2BpvDOqE53vjunHkSEOxbrtQ9JkLwJutkTeEdn1znRTQUCCDe9Inz2MXcvPBiY1XPAzHZLpizXhkGL3z3SYvoyWymwIBNJvDkf0I4BLgwR6Vy6xQ2Pq5%2FE9RRQe5G5PCks1NsVbK9fHmZr9d%2FjmTbM58Lxi04P4yvHvzo5Ad16yKHt0U00CFURq%2BZGPMgPRR%2FV8ihTnwzhAzmqnDEGmtWBCNYJbwJqESYJZaLcq29eUFeoBB3x9MHxHzli2Secpdjdj%2Fj8AE6Agizvz9bOdpt33xLZjVhHkZM1gbfuOOCVWMC7FFQOlOvDL6xBuiEjXvbA4RR86spsk4PS6PI7afhgs%2BRRDsRAGBGr82FCWGD%2F2Xc%2B%2Bc2yBxWhkaRYinY8%2Fc%2B1TE%2BZJuVPLDUql%2Bd%2BH9gU9DNsd1B67d0cSiXFvXBvsj5bQ4BGYrQ9IUxp3e%2F4G90Am%2BjiOKbXmPiMI0WUeg%2FZy1dvMjCUoYPBBjqkAclUX3vl6PGoC0BEPbBV5eMDstqjHItAhY8qNIyZSFLChUmRQ%2BrkAjmCe9rGh8jkBC7Rp3PRtVhdrkaZ1kn9A%2FrO4hNqjkRh13Nze1l0OrMJ0zgFpX8tyt4UzR%2B4VRah%2FboQTS96G8%2Bb4soj4aFfrTpbOB2EkV1m3Jn7qXdNoKoBrP0gcG62%2FQO9knuUuoQ2hxaq8w5%2FsNBGnhPZOMUTkivseslt&X-Amz-Signature=eac50d96952050d16642b2b4dc955327d0e14397395a71c7f2154200f01ae636&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXSEHXQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCzNAi%2BzSZekonv%2Bxw3cncQCO8rftK3oE1p%2FVnFFTknEgIhALfFU%2B7ShbJ8Zca%2FP3wBcS6IRrxlonvzoR%2BniP%2FUtpUVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHL%2F8gIuX9O33zv5Qq3APaz4XVYFj5X5gGOOPHjlMhdwBARc2FnKEzwYtWS5QLoxHm8tKfdZ8N6De22ESYjh7Jwx9AV6krezs6JMUwISnxjvM5AyAorKcKaO406CbkIrcTWasnFray1%2FRmZHvpsrtcRRRknVxQH7HyNh6bmzesb%2BCZXzVx0fP%2BpvDOqE53vjunHkSEOxbrtQ9JkLwJutkTeEdn1znRTQUCCDe9Inz2MXcvPBiY1XPAzHZLpizXhkGL3z3SYvoyWymwIBNJvDkf0I4BLgwR6Vy6xQ2Pq5%2FE9RRQe5G5PCks1NsVbK9fHmZr9d%2FjmTbM58Lxi04P4yvHvzo5Ad16yKHt0U00CFURq%2BZGPMgPRR%2FV8ihTnwzhAzmqnDEGmtWBCNYJbwJqESYJZaLcq29eUFeoBB3x9MHxHzli2Secpdjdj%2Fj8AE6Agizvz9bOdpt33xLZjVhHkZM1gbfuOOCVWMC7FFQOlOvDL6xBuiEjXvbA4RR86spsk4PS6PI7afhgs%2BRRDsRAGBGr82FCWGD%2F2Xc%2B%2Bc2yBxWhkaRYinY8%2Fc%2B1TE%2BZJuVPLDUql%2Bd%2BH9gU9DNsd1B67d0cSiXFvXBvsj5bQ4BGYrQ9IUxp3e%2F4G90Am%2BjiOKbXmPiMI0WUeg%2FZy1dvMjCUoYPBBjqkAclUX3vl6PGoC0BEPbBV5eMDstqjHItAhY8qNIyZSFLChUmRQ%2BrkAjmCe9rGh8jkBC7Rp3PRtVhdrkaZ1kn9A%2FrO4hNqjkRh13Nze1l0OrMJ0zgFpX8tyt4UzR%2B4VRah%2FboQTS96G8%2Bb4soj4aFfrTpbOB2EkV1m3Jn7qXdNoKoBrP0gcG62%2FQO9knuUuoQ2hxaq8w5%2FsNBGnhPZOMUTkivseslt&X-Amz-Signature=a70b543ca294767780c6ffeaad8665db0fb198699aa1f02be257ae686fbc9153&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXSEHXQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCzNAi%2BzSZekonv%2Bxw3cncQCO8rftK3oE1p%2FVnFFTknEgIhALfFU%2B7ShbJ8Zca%2FP3wBcS6IRrxlonvzoR%2BniP%2FUtpUVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHL%2F8gIuX9O33zv5Qq3APaz4XVYFj5X5gGOOPHjlMhdwBARc2FnKEzwYtWS5QLoxHm8tKfdZ8N6De22ESYjh7Jwx9AV6krezs6JMUwISnxjvM5AyAorKcKaO406CbkIrcTWasnFray1%2FRmZHvpsrtcRRRknVxQH7HyNh6bmzesb%2BCZXzVx0fP%2BpvDOqE53vjunHkSEOxbrtQ9JkLwJutkTeEdn1znRTQUCCDe9Inz2MXcvPBiY1XPAzHZLpizXhkGL3z3SYvoyWymwIBNJvDkf0I4BLgwR6Vy6xQ2Pq5%2FE9RRQe5G5PCks1NsVbK9fHmZr9d%2FjmTbM58Lxi04P4yvHvzo5Ad16yKHt0U00CFURq%2BZGPMgPRR%2FV8ihTnwzhAzmqnDEGmtWBCNYJbwJqESYJZaLcq29eUFeoBB3x9MHxHzli2Secpdjdj%2Fj8AE6Agizvz9bOdpt33xLZjVhHkZM1gbfuOOCVWMC7FFQOlOvDL6xBuiEjXvbA4RR86spsk4PS6PI7afhgs%2BRRDsRAGBGr82FCWGD%2F2Xc%2B%2Bc2yBxWhkaRYinY8%2Fc%2B1TE%2BZJuVPLDUql%2Bd%2BH9gU9DNsd1B67d0cSiXFvXBvsj5bQ4BGYrQ9IUxp3e%2F4G90Am%2BjiOKbXmPiMI0WUeg%2FZy1dvMjCUoYPBBjqkAclUX3vl6PGoC0BEPbBV5eMDstqjHItAhY8qNIyZSFLChUmRQ%2BrkAjmCe9rGh8jkBC7Rp3PRtVhdrkaZ1kn9A%2FrO4hNqjkRh13Nze1l0OrMJ0zgFpX8tyt4UzR%2B4VRah%2FboQTS96G8%2Bb4soj4aFfrTpbOB2EkV1m3Jn7qXdNoKoBrP0gcG62%2FQO9knuUuoQ2hxaq8w5%2FsNBGnhPZOMUTkivseslt&X-Amz-Signature=d0244fb1da503eaa2590c5d2906aa04e4fb24790ab8e6b531ad189c1222aef12&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXSEHXQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCzNAi%2BzSZekonv%2Bxw3cncQCO8rftK3oE1p%2FVnFFTknEgIhALfFU%2B7ShbJ8Zca%2FP3wBcS6IRrxlonvzoR%2BniP%2FUtpUVKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHL%2F8gIuX9O33zv5Qq3APaz4XVYFj5X5gGOOPHjlMhdwBARc2FnKEzwYtWS5QLoxHm8tKfdZ8N6De22ESYjh7Jwx9AV6krezs6JMUwISnxjvM5AyAorKcKaO406CbkIrcTWasnFray1%2FRmZHvpsrtcRRRknVxQH7HyNh6bmzesb%2BCZXzVx0fP%2BpvDOqE53vjunHkSEOxbrtQ9JkLwJutkTeEdn1znRTQUCCDe9Inz2MXcvPBiY1XPAzHZLpizXhkGL3z3SYvoyWymwIBNJvDkf0I4BLgwR6Vy6xQ2Pq5%2FE9RRQe5G5PCks1NsVbK9fHmZr9d%2FjmTbM58Lxi04P4yvHvzo5Ad16yKHt0U00CFURq%2BZGPMgPRR%2FV8ihTnwzhAzmqnDEGmtWBCNYJbwJqESYJZaLcq29eUFeoBB3x9MHxHzli2Secpdjdj%2Fj8AE6Agizvz9bOdpt33xLZjVhHkZM1gbfuOOCVWMC7FFQOlOvDL6xBuiEjXvbA4RR86spsk4PS6PI7afhgs%2BRRDsRAGBGr82FCWGD%2F2Xc%2B%2Bc2yBxWhkaRYinY8%2Fc%2B1TE%2BZJuVPLDUql%2Bd%2BH9gU9DNsd1B67d0cSiXFvXBvsj5bQ4BGYrQ9IUxp3e%2F4G90Am%2BjiOKbXmPiMI0WUeg%2FZy1dvMjCUoYPBBjqkAclUX3vl6PGoC0BEPbBV5eMDstqjHItAhY8qNIyZSFLChUmRQ%2BrkAjmCe9rGh8jkBC7Rp3PRtVhdrkaZ1kn9A%2FrO4hNqjkRh13Nze1l0OrMJ0zgFpX8tyt4UzR%2B4VRah%2FboQTS96G8%2Bb4soj4aFfrTpbOB2EkV1m3Jn7qXdNoKoBrP0gcG62%2FQO9knuUuoQ2hxaq8w5%2FsNBGnhPZOMUTkivseslt&X-Amz-Signature=d13589f91dbae7c0062a35e6ccd73a9abb655841c38ca9a0662dd5762259d570&X-Amz-SignedHeaders=host&x-id=GetObject)
