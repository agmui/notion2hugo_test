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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZPJKM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDqBY%2BI0pP3XajW%2FAYhloLh6dMwfOhZvCByeyltLjjVwwIhAPpMkaGIm4PhQyYS8LlBvqgiIODABFo81Iy6q%2B4SI5xfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZjwVT3lrai%2Fk08q3ANJV1CnM8g0qOPBqe1I1nOhZ3tdP4hwkp1dnsLULqD7TeqzZ6iqpjnRIGNbHVA5NcpC09Of17QIud6i8TrYWe7yi9J3KjZNHC2iRuJbSBvlCLFX6ebjUUSKa7lLA1xsqco5QJdwmiispe%2Fm1MitWJ8pZ76H30UmAjCC6%2FOeSutXU91VUaAIGvntEhzMzSix4r9HlfBG9mMB1pnFwkzlqnGx5zUb3LnHg01rI%2Fk43ADwqRifkasnB7F%2B6UEt%2FJ77AFO4Zqg7G9I%2BRqr2gW1ZTwJIjfmzibq0OTflLfVakVR4IPrZyAuRKrcB0tDpGEQGCGreHniEk53QtZW8MAPGxCXHxEpvA%2FlVZC3qC59rIrCc1KuFnZHkNbZJjy1ApCeoV7R%2BetSPL87Cl0Zxp%2F%2FDeZ9CTsPvSBQCrCg331vAQ5Zl1I1Ik4EQL1xvZeRQQO0iwdWELzGVm%2FHRCum%2FiEa8e61Drd3bCQy3Ctxl%2Bw6Kz1FSxuq9ZDCVa7%2FcgEYUGyfcJmGAtn98ai4IIwcoVqFkrnC09%2FOD9B0c0EBuOgXOTAVCllnYfP93xuIJGeAr3%2B%2BrLRhrziRIiLa6CDRK6GBHgVFseuxqv3VExHwSjcMUJ5SQZ%2B4bHGHDf8PhppsdZjD98L6%2BBjqkASRPQYjYIVEK89rjH3hGDHyTS8lI4svYu9iIpvFxiSz94JAWCKlJa9eJ5tKosvALZN6s6XN9sb38Hge15mULiF1zRSD%2FDKiQHDbJ0Kuphm3z%2F4Qb%2Fr6Be8nq9lQDq7%2FfEhHkEv7JSM%2BU603kFA2jk4ZnywdmCKx63j90bv%2BrW0GlMTE3NHkThCm25BlBjsMIr3174BluZHQf8jVhnjtx1o41TMxt&X-Amz-Signature=5b04227a7f451d6473ab67376be6af05139979b91076620937f379f0e63f9cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZPJKM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDqBY%2BI0pP3XajW%2FAYhloLh6dMwfOhZvCByeyltLjjVwwIhAPpMkaGIm4PhQyYS8LlBvqgiIODABFo81Iy6q%2B4SI5xfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZjwVT3lrai%2Fk08q3ANJV1CnM8g0qOPBqe1I1nOhZ3tdP4hwkp1dnsLULqD7TeqzZ6iqpjnRIGNbHVA5NcpC09Of17QIud6i8TrYWe7yi9J3KjZNHC2iRuJbSBvlCLFX6ebjUUSKa7lLA1xsqco5QJdwmiispe%2Fm1MitWJ8pZ76H30UmAjCC6%2FOeSutXU91VUaAIGvntEhzMzSix4r9HlfBG9mMB1pnFwkzlqnGx5zUb3LnHg01rI%2Fk43ADwqRifkasnB7F%2B6UEt%2FJ77AFO4Zqg7G9I%2BRqr2gW1ZTwJIjfmzibq0OTflLfVakVR4IPrZyAuRKrcB0tDpGEQGCGreHniEk53QtZW8MAPGxCXHxEpvA%2FlVZC3qC59rIrCc1KuFnZHkNbZJjy1ApCeoV7R%2BetSPL87Cl0Zxp%2F%2FDeZ9CTsPvSBQCrCg331vAQ5Zl1I1Ik4EQL1xvZeRQQO0iwdWELzGVm%2FHRCum%2FiEa8e61Drd3bCQy3Ctxl%2Bw6Kz1FSxuq9ZDCVa7%2FcgEYUGyfcJmGAtn98ai4IIwcoVqFkrnC09%2FOD9B0c0EBuOgXOTAVCllnYfP93xuIJGeAr3%2B%2BrLRhrziRIiLa6CDRK6GBHgVFseuxqv3VExHwSjcMUJ5SQZ%2B4bHGHDf8PhppsdZjD98L6%2BBjqkASRPQYjYIVEK89rjH3hGDHyTS8lI4svYu9iIpvFxiSz94JAWCKlJa9eJ5tKosvALZN6s6XN9sb38Hge15mULiF1zRSD%2FDKiQHDbJ0Kuphm3z%2F4Qb%2Fr6Be8nq9lQDq7%2FfEhHkEv7JSM%2BU603kFA2jk4ZnywdmCKx63j90bv%2BrW0GlMTE3NHkThCm25BlBjsMIr3174BluZHQf8jVhnjtx1o41TMxt&X-Amz-Signature=70e7b54001df440a488042d4a09c6ef6b1f77653d76d976f6f72844df14e7c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZPJKM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDqBY%2BI0pP3XajW%2FAYhloLh6dMwfOhZvCByeyltLjjVwwIhAPpMkaGIm4PhQyYS8LlBvqgiIODABFo81Iy6q%2B4SI5xfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZjwVT3lrai%2Fk08q3ANJV1CnM8g0qOPBqe1I1nOhZ3tdP4hwkp1dnsLULqD7TeqzZ6iqpjnRIGNbHVA5NcpC09Of17QIud6i8TrYWe7yi9J3KjZNHC2iRuJbSBvlCLFX6ebjUUSKa7lLA1xsqco5QJdwmiispe%2Fm1MitWJ8pZ76H30UmAjCC6%2FOeSutXU91VUaAIGvntEhzMzSix4r9HlfBG9mMB1pnFwkzlqnGx5zUb3LnHg01rI%2Fk43ADwqRifkasnB7F%2B6UEt%2FJ77AFO4Zqg7G9I%2BRqr2gW1ZTwJIjfmzibq0OTflLfVakVR4IPrZyAuRKrcB0tDpGEQGCGreHniEk53QtZW8MAPGxCXHxEpvA%2FlVZC3qC59rIrCc1KuFnZHkNbZJjy1ApCeoV7R%2BetSPL87Cl0Zxp%2F%2FDeZ9CTsPvSBQCrCg331vAQ5Zl1I1Ik4EQL1xvZeRQQO0iwdWELzGVm%2FHRCum%2FiEa8e61Drd3bCQy3Ctxl%2Bw6Kz1FSxuq9ZDCVa7%2FcgEYUGyfcJmGAtn98ai4IIwcoVqFkrnC09%2FOD9B0c0EBuOgXOTAVCllnYfP93xuIJGeAr3%2B%2BrLRhrziRIiLa6CDRK6GBHgVFseuxqv3VExHwSjcMUJ5SQZ%2B4bHGHDf8PhppsdZjD98L6%2BBjqkASRPQYjYIVEK89rjH3hGDHyTS8lI4svYu9iIpvFxiSz94JAWCKlJa9eJ5tKosvALZN6s6XN9sb38Hge15mULiF1zRSD%2FDKiQHDbJ0Kuphm3z%2F4Qb%2Fr6Be8nq9lQDq7%2FfEhHkEv7JSM%2BU603kFA2jk4ZnywdmCKx63j90bv%2BrW0GlMTE3NHkThCm25BlBjsMIr3174BluZHQf8jVhnjtx1o41TMxt&X-Amz-Signature=6c20c10e30e557a91744f388a22de3aaefdb5c3b371be4f48ff2cde835fa9a94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZPJKM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDqBY%2BI0pP3XajW%2FAYhloLh6dMwfOhZvCByeyltLjjVwwIhAPpMkaGIm4PhQyYS8LlBvqgiIODABFo81Iy6q%2B4SI5xfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZjwVT3lrai%2Fk08q3ANJV1CnM8g0qOPBqe1I1nOhZ3tdP4hwkp1dnsLULqD7TeqzZ6iqpjnRIGNbHVA5NcpC09Of17QIud6i8TrYWe7yi9J3KjZNHC2iRuJbSBvlCLFX6ebjUUSKa7lLA1xsqco5QJdwmiispe%2Fm1MitWJ8pZ76H30UmAjCC6%2FOeSutXU91VUaAIGvntEhzMzSix4r9HlfBG9mMB1pnFwkzlqnGx5zUb3LnHg01rI%2Fk43ADwqRifkasnB7F%2B6UEt%2FJ77AFO4Zqg7G9I%2BRqr2gW1ZTwJIjfmzibq0OTflLfVakVR4IPrZyAuRKrcB0tDpGEQGCGreHniEk53QtZW8MAPGxCXHxEpvA%2FlVZC3qC59rIrCc1KuFnZHkNbZJjy1ApCeoV7R%2BetSPL87Cl0Zxp%2F%2FDeZ9CTsPvSBQCrCg331vAQ5Zl1I1Ik4EQL1xvZeRQQO0iwdWELzGVm%2FHRCum%2FiEa8e61Drd3bCQy3Ctxl%2Bw6Kz1FSxuq9ZDCVa7%2FcgEYUGyfcJmGAtn98ai4IIwcoVqFkrnC09%2FOD9B0c0EBuOgXOTAVCllnYfP93xuIJGeAr3%2B%2BrLRhrziRIiLa6CDRK6GBHgVFseuxqv3VExHwSjcMUJ5SQZ%2B4bHGHDf8PhppsdZjD98L6%2BBjqkASRPQYjYIVEK89rjH3hGDHyTS8lI4svYu9iIpvFxiSz94JAWCKlJa9eJ5tKosvALZN6s6XN9sb38Hge15mULiF1zRSD%2FDKiQHDbJ0Kuphm3z%2F4Qb%2Fr6Be8nq9lQDq7%2FfEhHkEv7JSM%2BU603kFA2jk4ZnywdmCKx63j90bv%2BrW0GlMTE3NHkThCm25BlBjsMIr3174BluZHQf8jVhnjtx1o41TMxt&X-Amz-Signature=ad3ce6cc62391b259c46f3c21ce84bb1cc4270bca6d78a4d5e95eb6b25172d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZPJKM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDqBY%2BI0pP3XajW%2FAYhloLh6dMwfOhZvCByeyltLjjVwwIhAPpMkaGIm4PhQyYS8LlBvqgiIODABFo81Iy6q%2B4SI5xfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZjwVT3lrai%2Fk08q3ANJV1CnM8g0qOPBqe1I1nOhZ3tdP4hwkp1dnsLULqD7TeqzZ6iqpjnRIGNbHVA5NcpC09Of17QIud6i8TrYWe7yi9J3KjZNHC2iRuJbSBvlCLFX6ebjUUSKa7lLA1xsqco5QJdwmiispe%2Fm1MitWJ8pZ76H30UmAjCC6%2FOeSutXU91VUaAIGvntEhzMzSix4r9HlfBG9mMB1pnFwkzlqnGx5zUb3LnHg01rI%2Fk43ADwqRifkasnB7F%2B6UEt%2FJ77AFO4Zqg7G9I%2BRqr2gW1ZTwJIjfmzibq0OTflLfVakVR4IPrZyAuRKrcB0tDpGEQGCGreHniEk53QtZW8MAPGxCXHxEpvA%2FlVZC3qC59rIrCc1KuFnZHkNbZJjy1ApCeoV7R%2BetSPL87Cl0Zxp%2F%2FDeZ9CTsPvSBQCrCg331vAQ5Zl1I1Ik4EQL1xvZeRQQO0iwdWELzGVm%2FHRCum%2FiEa8e61Drd3bCQy3Ctxl%2Bw6Kz1FSxuq9ZDCVa7%2FcgEYUGyfcJmGAtn98ai4IIwcoVqFkrnC09%2FOD9B0c0EBuOgXOTAVCllnYfP93xuIJGeAr3%2B%2BrLRhrziRIiLa6CDRK6GBHgVFseuxqv3VExHwSjcMUJ5SQZ%2B4bHGHDf8PhppsdZjD98L6%2BBjqkASRPQYjYIVEK89rjH3hGDHyTS8lI4svYu9iIpvFxiSz94JAWCKlJa9eJ5tKosvALZN6s6XN9sb38Hge15mULiF1zRSD%2FDKiQHDbJ0Kuphm3z%2F4Qb%2Fr6Be8nq9lQDq7%2FfEhHkEv7JSM%2BU603kFA2jk4ZnywdmCKx63j90bv%2BrW0GlMTE3NHkThCm25BlBjsMIr3174BluZHQf8jVhnjtx1o41TMxt&X-Amz-Signature=07884a9fef2b7fda4955c8aa60ef4e5cffa36d4f0da9c178870d7d1c54df0203&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZPJKM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDqBY%2BI0pP3XajW%2FAYhloLh6dMwfOhZvCByeyltLjjVwwIhAPpMkaGIm4PhQyYS8LlBvqgiIODABFo81Iy6q%2B4SI5xfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZjwVT3lrai%2Fk08q3ANJV1CnM8g0qOPBqe1I1nOhZ3tdP4hwkp1dnsLULqD7TeqzZ6iqpjnRIGNbHVA5NcpC09Of17QIud6i8TrYWe7yi9J3KjZNHC2iRuJbSBvlCLFX6ebjUUSKa7lLA1xsqco5QJdwmiispe%2Fm1MitWJ8pZ76H30UmAjCC6%2FOeSutXU91VUaAIGvntEhzMzSix4r9HlfBG9mMB1pnFwkzlqnGx5zUb3LnHg01rI%2Fk43ADwqRifkasnB7F%2B6UEt%2FJ77AFO4Zqg7G9I%2BRqr2gW1ZTwJIjfmzibq0OTflLfVakVR4IPrZyAuRKrcB0tDpGEQGCGreHniEk53QtZW8MAPGxCXHxEpvA%2FlVZC3qC59rIrCc1KuFnZHkNbZJjy1ApCeoV7R%2BetSPL87Cl0Zxp%2F%2FDeZ9CTsPvSBQCrCg331vAQ5Zl1I1Ik4EQL1xvZeRQQO0iwdWELzGVm%2FHRCum%2FiEa8e61Drd3bCQy3Ctxl%2Bw6Kz1FSxuq9ZDCVa7%2FcgEYUGyfcJmGAtn98ai4IIwcoVqFkrnC09%2FOD9B0c0EBuOgXOTAVCllnYfP93xuIJGeAr3%2B%2BrLRhrziRIiLa6CDRK6GBHgVFseuxqv3VExHwSjcMUJ5SQZ%2B4bHGHDf8PhppsdZjD98L6%2BBjqkASRPQYjYIVEK89rjH3hGDHyTS8lI4svYu9iIpvFxiSz94JAWCKlJa9eJ5tKosvALZN6s6XN9sb38Hge15mULiF1zRSD%2FDKiQHDbJ0Kuphm3z%2F4Qb%2Fr6Be8nq9lQDq7%2FfEhHkEv7JSM%2BU603kFA2jk4ZnywdmCKx63j90bv%2BrW0GlMTE3NHkThCm25BlBjsMIr3174BluZHQf8jVhnjtx1o41TMxt&X-Amz-Signature=a24d4e84dbe4af8085528755624e8d2660893cdf180cf53cb58e78fd2324ff62&X-Amz-SignedHeaders=host&x-id=GetObject)
