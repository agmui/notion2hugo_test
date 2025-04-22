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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJI45V6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCljsK9MyrG%2BhP6Q2fL5ox765RcjTnjD3agdgkJVqqNLQIgRsczMzwt1FKwgDelXoJHXA6CRFf90VB3m48CgVi%2BT0wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3F02r9154U9Z%2BwDircA6GPnd%2FL0YRwyiEW4Ya5OQGC0mPlMGq91Q99%2Fc7dceZ1JYHSabwZa%2Fw%2BKQdagJDiOjcwjgWmz70%2Bj8TP6Vv%2FsQtHdT2p0kl4gGRZza%2F4peM8f96f5gmHHj%2BuLJAedGj8U27ielq2%2FKmxnPt0yhmBUvZimfQUra025ZE%2FdjOmg0tOqF8Qb8Ah0a02thuBU91MaXDTfXhEkUdKfizknfVo8JvjQ5zNUKmFe6fprLv5tRSKEbx9KoW7%2B8O1%2BPyrBtjA5al3xSkSOMELvHzVEU0gF5nEpft0IUVcYCqL19eA1tayNr%2FMm%2BcjSe0%2BKMSv%2FvfBogHOgDen8ZkxUXpshh1yFLbxRcdB3HjGOp2xheygQ9OrfNovihmbgG9jd1piOKiaJJNXiEzDGLUGQNssf1nE8SlyYqLrcigh0In8OVFeyFwZEybbhu6W6hqyGQxK0ByupkfSPGMzmMx6vC3%2F4PkuUuU68VnH%2B7aPrPK%2FTXHOupX%2BPfPApfwcUfBETl2C96rKQ4Q4rpcHsuXrKetxotRxV3gSjwRCIJA7kjfwC6HWMhkLsMYlmMtnm3Slq%2BF7Zgbqlvho2LIWn3HqA75ac9XgBtELgX0BNIcyoOdVF6YLKYBFJq4RSFja8dF33itbMJXWnMAGOqUBG8t2RAFdI58mRhKnusg7YcVVM1F52Bj8QSQXjvy4UtCA42QaWyTamyAZ0FNBv6gq8ezWj4uBOQiKgPZ6zoj9Ab1ksQXUyJ0LwuakF2SU13mU8AMITlNTjr9M8%2FgW%2FjYZgZ5UZ%2F4LakC1bMnjsEWCIIj4yt9Hi8vnyovc4aPClnTXOqRxphqCHunvAK%2BUpWEH6ywlBgCsTFFwQ%2FZyqpxBRtZ1iTJn&X-Amz-Signature=0adc7ad387159f8ab220b595a4c7b811e3b3f4d496c91429b98c471b6e6a5c64&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJI45V6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCljsK9MyrG%2BhP6Q2fL5ox765RcjTnjD3agdgkJVqqNLQIgRsczMzwt1FKwgDelXoJHXA6CRFf90VB3m48CgVi%2BT0wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3F02r9154U9Z%2BwDircA6GPnd%2FL0YRwyiEW4Ya5OQGC0mPlMGq91Q99%2Fc7dceZ1JYHSabwZa%2Fw%2BKQdagJDiOjcwjgWmz70%2Bj8TP6Vv%2FsQtHdT2p0kl4gGRZza%2F4peM8f96f5gmHHj%2BuLJAedGj8U27ielq2%2FKmxnPt0yhmBUvZimfQUra025ZE%2FdjOmg0tOqF8Qb8Ah0a02thuBU91MaXDTfXhEkUdKfizknfVo8JvjQ5zNUKmFe6fprLv5tRSKEbx9KoW7%2B8O1%2BPyrBtjA5al3xSkSOMELvHzVEU0gF5nEpft0IUVcYCqL19eA1tayNr%2FMm%2BcjSe0%2BKMSv%2FvfBogHOgDen8ZkxUXpshh1yFLbxRcdB3HjGOp2xheygQ9OrfNovihmbgG9jd1piOKiaJJNXiEzDGLUGQNssf1nE8SlyYqLrcigh0In8OVFeyFwZEybbhu6W6hqyGQxK0ByupkfSPGMzmMx6vC3%2F4PkuUuU68VnH%2B7aPrPK%2FTXHOupX%2BPfPApfwcUfBETl2C96rKQ4Q4rpcHsuXrKetxotRxV3gSjwRCIJA7kjfwC6HWMhkLsMYlmMtnm3Slq%2BF7Zgbqlvho2LIWn3HqA75ac9XgBtELgX0BNIcyoOdVF6YLKYBFJq4RSFja8dF33itbMJXWnMAGOqUBG8t2RAFdI58mRhKnusg7YcVVM1F52Bj8QSQXjvy4UtCA42QaWyTamyAZ0FNBv6gq8ezWj4uBOQiKgPZ6zoj9Ab1ksQXUyJ0LwuakF2SU13mU8AMITlNTjr9M8%2FgW%2FjYZgZ5UZ%2F4LakC1bMnjsEWCIIj4yt9Hi8vnyovc4aPClnTXOqRxphqCHunvAK%2BUpWEH6ywlBgCsTFFwQ%2FZyqpxBRtZ1iTJn&X-Amz-Signature=87b4048075e68b5a55cc036939b2abb5680be57cea370eb9fab62e632f350dae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJI45V6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCljsK9MyrG%2BhP6Q2fL5ox765RcjTnjD3agdgkJVqqNLQIgRsczMzwt1FKwgDelXoJHXA6CRFf90VB3m48CgVi%2BT0wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3F02r9154U9Z%2BwDircA6GPnd%2FL0YRwyiEW4Ya5OQGC0mPlMGq91Q99%2Fc7dceZ1JYHSabwZa%2Fw%2BKQdagJDiOjcwjgWmz70%2Bj8TP6Vv%2FsQtHdT2p0kl4gGRZza%2F4peM8f96f5gmHHj%2BuLJAedGj8U27ielq2%2FKmxnPt0yhmBUvZimfQUra025ZE%2FdjOmg0tOqF8Qb8Ah0a02thuBU91MaXDTfXhEkUdKfizknfVo8JvjQ5zNUKmFe6fprLv5tRSKEbx9KoW7%2B8O1%2BPyrBtjA5al3xSkSOMELvHzVEU0gF5nEpft0IUVcYCqL19eA1tayNr%2FMm%2BcjSe0%2BKMSv%2FvfBogHOgDen8ZkxUXpshh1yFLbxRcdB3HjGOp2xheygQ9OrfNovihmbgG9jd1piOKiaJJNXiEzDGLUGQNssf1nE8SlyYqLrcigh0In8OVFeyFwZEybbhu6W6hqyGQxK0ByupkfSPGMzmMx6vC3%2F4PkuUuU68VnH%2B7aPrPK%2FTXHOupX%2BPfPApfwcUfBETl2C96rKQ4Q4rpcHsuXrKetxotRxV3gSjwRCIJA7kjfwC6HWMhkLsMYlmMtnm3Slq%2BF7Zgbqlvho2LIWn3HqA75ac9XgBtELgX0BNIcyoOdVF6YLKYBFJq4RSFja8dF33itbMJXWnMAGOqUBG8t2RAFdI58mRhKnusg7YcVVM1F52Bj8QSQXjvy4UtCA42QaWyTamyAZ0FNBv6gq8ezWj4uBOQiKgPZ6zoj9Ab1ksQXUyJ0LwuakF2SU13mU8AMITlNTjr9M8%2FgW%2FjYZgZ5UZ%2F4LakC1bMnjsEWCIIj4yt9Hi8vnyovc4aPClnTXOqRxphqCHunvAK%2BUpWEH6ywlBgCsTFFwQ%2FZyqpxBRtZ1iTJn&X-Amz-Signature=4c8243b1344413e1aefc1c96de05bb4177e129501ce6413564b69911478fc700&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJI45V6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCljsK9MyrG%2BhP6Q2fL5ox765RcjTnjD3agdgkJVqqNLQIgRsczMzwt1FKwgDelXoJHXA6CRFf90VB3m48CgVi%2BT0wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3F02r9154U9Z%2BwDircA6GPnd%2FL0YRwyiEW4Ya5OQGC0mPlMGq91Q99%2Fc7dceZ1JYHSabwZa%2Fw%2BKQdagJDiOjcwjgWmz70%2Bj8TP6Vv%2FsQtHdT2p0kl4gGRZza%2F4peM8f96f5gmHHj%2BuLJAedGj8U27ielq2%2FKmxnPt0yhmBUvZimfQUra025ZE%2FdjOmg0tOqF8Qb8Ah0a02thuBU91MaXDTfXhEkUdKfizknfVo8JvjQ5zNUKmFe6fprLv5tRSKEbx9KoW7%2B8O1%2BPyrBtjA5al3xSkSOMELvHzVEU0gF5nEpft0IUVcYCqL19eA1tayNr%2FMm%2BcjSe0%2BKMSv%2FvfBogHOgDen8ZkxUXpshh1yFLbxRcdB3HjGOp2xheygQ9OrfNovihmbgG9jd1piOKiaJJNXiEzDGLUGQNssf1nE8SlyYqLrcigh0In8OVFeyFwZEybbhu6W6hqyGQxK0ByupkfSPGMzmMx6vC3%2F4PkuUuU68VnH%2B7aPrPK%2FTXHOupX%2BPfPApfwcUfBETl2C96rKQ4Q4rpcHsuXrKetxotRxV3gSjwRCIJA7kjfwC6HWMhkLsMYlmMtnm3Slq%2BF7Zgbqlvho2LIWn3HqA75ac9XgBtELgX0BNIcyoOdVF6YLKYBFJq4RSFja8dF33itbMJXWnMAGOqUBG8t2RAFdI58mRhKnusg7YcVVM1F52Bj8QSQXjvy4UtCA42QaWyTamyAZ0FNBv6gq8ezWj4uBOQiKgPZ6zoj9Ab1ksQXUyJ0LwuakF2SU13mU8AMITlNTjr9M8%2FgW%2FjYZgZ5UZ%2F4LakC1bMnjsEWCIIj4yt9Hi8vnyovc4aPClnTXOqRxphqCHunvAK%2BUpWEH6ywlBgCsTFFwQ%2FZyqpxBRtZ1iTJn&X-Amz-Signature=1f3eeaee43ce05b433810cf766633bc570dddf8522e52cf0a96261a9f7334989&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJI45V6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCljsK9MyrG%2BhP6Q2fL5ox765RcjTnjD3agdgkJVqqNLQIgRsczMzwt1FKwgDelXoJHXA6CRFf90VB3m48CgVi%2BT0wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3F02r9154U9Z%2BwDircA6GPnd%2FL0YRwyiEW4Ya5OQGC0mPlMGq91Q99%2Fc7dceZ1JYHSabwZa%2Fw%2BKQdagJDiOjcwjgWmz70%2Bj8TP6Vv%2FsQtHdT2p0kl4gGRZza%2F4peM8f96f5gmHHj%2BuLJAedGj8U27ielq2%2FKmxnPt0yhmBUvZimfQUra025ZE%2FdjOmg0tOqF8Qb8Ah0a02thuBU91MaXDTfXhEkUdKfizknfVo8JvjQ5zNUKmFe6fprLv5tRSKEbx9KoW7%2B8O1%2BPyrBtjA5al3xSkSOMELvHzVEU0gF5nEpft0IUVcYCqL19eA1tayNr%2FMm%2BcjSe0%2BKMSv%2FvfBogHOgDen8ZkxUXpshh1yFLbxRcdB3HjGOp2xheygQ9OrfNovihmbgG9jd1piOKiaJJNXiEzDGLUGQNssf1nE8SlyYqLrcigh0In8OVFeyFwZEybbhu6W6hqyGQxK0ByupkfSPGMzmMx6vC3%2F4PkuUuU68VnH%2B7aPrPK%2FTXHOupX%2BPfPApfwcUfBETl2C96rKQ4Q4rpcHsuXrKetxotRxV3gSjwRCIJA7kjfwC6HWMhkLsMYlmMtnm3Slq%2BF7Zgbqlvho2LIWn3HqA75ac9XgBtELgX0BNIcyoOdVF6YLKYBFJq4RSFja8dF33itbMJXWnMAGOqUBG8t2RAFdI58mRhKnusg7YcVVM1F52Bj8QSQXjvy4UtCA42QaWyTamyAZ0FNBv6gq8ezWj4uBOQiKgPZ6zoj9Ab1ksQXUyJ0LwuakF2SU13mU8AMITlNTjr9M8%2FgW%2FjYZgZ5UZ%2F4LakC1bMnjsEWCIIj4yt9Hi8vnyovc4aPClnTXOqRxphqCHunvAK%2BUpWEH6ywlBgCsTFFwQ%2FZyqpxBRtZ1iTJn&X-Amz-Signature=5823f13ad17b4d37ba31f97d19c0bea2ee8eb0531e41a4c1b87fe7c818d65b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJI45V6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCljsK9MyrG%2BhP6Q2fL5ox765RcjTnjD3agdgkJVqqNLQIgRsczMzwt1FKwgDelXoJHXA6CRFf90VB3m48CgVi%2BT0wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3F02r9154U9Z%2BwDircA6GPnd%2FL0YRwyiEW4Ya5OQGC0mPlMGq91Q99%2Fc7dceZ1JYHSabwZa%2Fw%2BKQdagJDiOjcwjgWmz70%2Bj8TP6Vv%2FsQtHdT2p0kl4gGRZza%2F4peM8f96f5gmHHj%2BuLJAedGj8U27ielq2%2FKmxnPt0yhmBUvZimfQUra025ZE%2FdjOmg0tOqF8Qb8Ah0a02thuBU91MaXDTfXhEkUdKfizknfVo8JvjQ5zNUKmFe6fprLv5tRSKEbx9KoW7%2B8O1%2BPyrBtjA5al3xSkSOMELvHzVEU0gF5nEpft0IUVcYCqL19eA1tayNr%2FMm%2BcjSe0%2BKMSv%2FvfBogHOgDen8ZkxUXpshh1yFLbxRcdB3HjGOp2xheygQ9OrfNovihmbgG9jd1piOKiaJJNXiEzDGLUGQNssf1nE8SlyYqLrcigh0In8OVFeyFwZEybbhu6W6hqyGQxK0ByupkfSPGMzmMx6vC3%2F4PkuUuU68VnH%2B7aPrPK%2FTXHOupX%2BPfPApfwcUfBETl2C96rKQ4Q4rpcHsuXrKetxotRxV3gSjwRCIJA7kjfwC6HWMhkLsMYlmMtnm3Slq%2BF7Zgbqlvho2LIWn3HqA75ac9XgBtELgX0BNIcyoOdVF6YLKYBFJq4RSFja8dF33itbMJXWnMAGOqUBG8t2RAFdI58mRhKnusg7YcVVM1F52Bj8QSQXjvy4UtCA42QaWyTamyAZ0FNBv6gq8ezWj4uBOQiKgPZ6zoj9Ab1ksQXUyJ0LwuakF2SU13mU8AMITlNTjr9M8%2FgW%2FjYZgZ5UZ%2F4LakC1bMnjsEWCIIj4yt9Hi8vnyovc4aPClnTXOqRxphqCHunvAK%2BUpWEH6ywlBgCsTFFwQ%2FZyqpxBRtZ1iTJn&X-Amz-Signature=bf3cdb50bffe5c08e670d4efdeefce5b84048843c6f625115ab979de4f79e2bb&X-Amz-SignedHeaders=host&x-id=GetObject)
