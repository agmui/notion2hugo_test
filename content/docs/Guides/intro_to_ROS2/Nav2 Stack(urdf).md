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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW27K3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDVf3zFyslAcP1iRpvaYXsYrF%2BtbXsWes39lOOMwndenQIgI9c%2FI4Q9o0UiO%2F%2BJI7yLuUfI%2FoaULbRfmvYaZh5c3DQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcX672DrigDVXkOpCrcA%2BB%2BXczAayzzr4KbGMKBI1LwrFgfzs%2BOQxCd%2FGeanwmqbEe33pvNxKPEDc7%2BHJUTnRhas2SZN8R2uK4%2BOsfDWz4Yen2uujiWhqb%2Fc37oRO%2BZJt2yvw2vFBPjmORWMQcYCD%2F6nflOLatEAyAOoc%2FoqN4IGrEs1jSidSg4qWTUiOzSDGMzBWJRlO%2BmPc%2BNm45Au4Di0L3zvMGNpqqRYk4pM5s7nzX6ZflJCckikxOE%2Fq69wvn%2BhwvNXd6qUKqPOp%2BClhwveK%2FcfJWQUdK%2BVYKFPGIf1sGz7DIsemgUAlrsx0hRJxz0XaqH0fri%2BwtSeG%2BoEZMBU%2FTqaIDNhzymclWtSGhc0arAM5tJTDO%2Fdk5jYQyV7404BGYfRguJOaXnGb91dINotYUA0ebj9A%2B3DVczMoQZjLIdvCRrD57nhsOIv1TdvCgifvMVnLVKJwpvTlYHgPJoTIADwALkyYf316u9N83YAnJqV5OB%2FMCsIQY%2FknigEr8nDJWgGVjdysX0bKzDn8RclNarpMbRYbMwH0d2QK5hUdzcodfcn3k7acuZ1Imv66TGH2P6csjaaQi%2FT4PhAB%2FfRZg7wHCOxGA7myoLyOlykbmlybsuLYaMgJgLyFbwzAyBzVO5GXRL24rkMJWkksAGOqUB9LZOo9VB0Iwdit4UzcEGvEDA94WDo%2BOnuMzVS64Bqz8nzOQ4NFUjJPczglunRiQ3pMx8B47TAA2u%2FZhrqEvnBg9YOqZCvbGlYpG3ufnxULqbB316dDUBkruBwEdKOboyVYhxKPt2ISqvoq2aKAAhm6ZdFst1jckpSvm894qmSumLtDhoLAG2%2F7FK8%2BP2U%2FvnEDu8YNSWZQGkP4quJuV6ItYWgK55&X-Amz-Signature=3660cb9ea28e6f3511b4f7df2ac74c3f97c49c8e1acb14383cb28bc7c431f11e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW27K3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDVf3zFyslAcP1iRpvaYXsYrF%2BtbXsWes39lOOMwndenQIgI9c%2FI4Q9o0UiO%2F%2BJI7yLuUfI%2FoaULbRfmvYaZh5c3DQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcX672DrigDVXkOpCrcA%2BB%2BXczAayzzr4KbGMKBI1LwrFgfzs%2BOQxCd%2FGeanwmqbEe33pvNxKPEDc7%2BHJUTnRhas2SZN8R2uK4%2BOsfDWz4Yen2uujiWhqb%2Fc37oRO%2BZJt2yvw2vFBPjmORWMQcYCD%2F6nflOLatEAyAOoc%2FoqN4IGrEs1jSidSg4qWTUiOzSDGMzBWJRlO%2BmPc%2BNm45Au4Di0L3zvMGNpqqRYk4pM5s7nzX6ZflJCckikxOE%2Fq69wvn%2BhwvNXd6qUKqPOp%2BClhwveK%2FcfJWQUdK%2BVYKFPGIf1sGz7DIsemgUAlrsx0hRJxz0XaqH0fri%2BwtSeG%2BoEZMBU%2FTqaIDNhzymclWtSGhc0arAM5tJTDO%2Fdk5jYQyV7404BGYfRguJOaXnGb91dINotYUA0ebj9A%2B3DVczMoQZjLIdvCRrD57nhsOIv1TdvCgifvMVnLVKJwpvTlYHgPJoTIADwALkyYf316u9N83YAnJqV5OB%2FMCsIQY%2FknigEr8nDJWgGVjdysX0bKzDn8RclNarpMbRYbMwH0d2QK5hUdzcodfcn3k7acuZ1Imv66TGH2P6csjaaQi%2FT4PhAB%2FfRZg7wHCOxGA7myoLyOlykbmlybsuLYaMgJgLyFbwzAyBzVO5GXRL24rkMJWkksAGOqUB9LZOo9VB0Iwdit4UzcEGvEDA94WDo%2BOnuMzVS64Bqz8nzOQ4NFUjJPczglunRiQ3pMx8B47TAA2u%2FZhrqEvnBg9YOqZCvbGlYpG3ufnxULqbB316dDUBkruBwEdKOboyVYhxKPt2ISqvoq2aKAAhm6ZdFst1jckpSvm894qmSumLtDhoLAG2%2F7FK8%2BP2U%2FvnEDu8YNSWZQGkP4quJuV6ItYWgK55&X-Amz-Signature=9fc57f5ea9dc92be57c01d20be26883b48582ebf8f64ae7ca020d3bd0c3f004d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW27K3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDVf3zFyslAcP1iRpvaYXsYrF%2BtbXsWes39lOOMwndenQIgI9c%2FI4Q9o0UiO%2F%2BJI7yLuUfI%2FoaULbRfmvYaZh5c3DQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcX672DrigDVXkOpCrcA%2BB%2BXczAayzzr4KbGMKBI1LwrFgfzs%2BOQxCd%2FGeanwmqbEe33pvNxKPEDc7%2BHJUTnRhas2SZN8R2uK4%2BOsfDWz4Yen2uujiWhqb%2Fc37oRO%2BZJt2yvw2vFBPjmORWMQcYCD%2F6nflOLatEAyAOoc%2FoqN4IGrEs1jSidSg4qWTUiOzSDGMzBWJRlO%2BmPc%2BNm45Au4Di0L3zvMGNpqqRYk4pM5s7nzX6ZflJCckikxOE%2Fq69wvn%2BhwvNXd6qUKqPOp%2BClhwveK%2FcfJWQUdK%2BVYKFPGIf1sGz7DIsemgUAlrsx0hRJxz0XaqH0fri%2BwtSeG%2BoEZMBU%2FTqaIDNhzymclWtSGhc0arAM5tJTDO%2Fdk5jYQyV7404BGYfRguJOaXnGb91dINotYUA0ebj9A%2B3DVczMoQZjLIdvCRrD57nhsOIv1TdvCgifvMVnLVKJwpvTlYHgPJoTIADwALkyYf316u9N83YAnJqV5OB%2FMCsIQY%2FknigEr8nDJWgGVjdysX0bKzDn8RclNarpMbRYbMwH0d2QK5hUdzcodfcn3k7acuZ1Imv66TGH2P6csjaaQi%2FT4PhAB%2FfRZg7wHCOxGA7myoLyOlykbmlybsuLYaMgJgLyFbwzAyBzVO5GXRL24rkMJWkksAGOqUB9LZOo9VB0Iwdit4UzcEGvEDA94WDo%2BOnuMzVS64Bqz8nzOQ4NFUjJPczglunRiQ3pMx8B47TAA2u%2FZhrqEvnBg9YOqZCvbGlYpG3ufnxULqbB316dDUBkruBwEdKOboyVYhxKPt2ISqvoq2aKAAhm6ZdFst1jckpSvm894qmSumLtDhoLAG2%2F7FK8%2BP2U%2FvnEDu8YNSWZQGkP4quJuV6ItYWgK55&X-Amz-Signature=f3a730a4dddf34122e2e630d86b895c9033413c06566aae4f257b01ff68dc0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW27K3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDVf3zFyslAcP1iRpvaYXsYrF%2BtbXsWes39lOOMwndenQIgI9c%2FI4Q9o0UiO%2F%2BJI7yLuUfI%2FoaULbRfmvYaZh5c3DQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcX672DrigDVXkOpCrcA%2BB%2BXczAayzzr4KbGMKBI1LwrFgfzs%2BOQxCd%2FGeanwmqbEe33pvNxKPEDc7%2BHJUTnRhas2SZN8R2uK4%2BOsfDWz4Yen2uujiWhqb%2Fc37oRO%2BZJt2yvw2vFBPjmORWMQcYCD%2F6nflOLatEAyAOoc%2FoqN4IGrEs1jSidSg4qWTUiOzSDGMzBWJRlO%2BmPc%2BNm45Au4Di0L3zvMGNpqqRYk4pM5s7nzX6ZflJCckikxOE%2Fq69wvn%2BhwvNXd6qUKqPOp%2BClhwveK%2FcfJWQUdK%2BVYKFPGIf1sGz7DIsemgUAlrsx0hRJxz0XaqH0fri%2BwtSeG%2BoEZMBU%2FTqaIDNhzymclWtSGhc0arAM5tJTDO%2Fdk5jYQyV7404BGYfRguJOaXnGb91dINotYUA0ebj9A%2B3DVczMoQZjLIdvCRrD57nhsOIv1TdvCgifvMVnLVKJwpvTlYHgPJoTIADwALkyYf316u9N83YAnJqV5OB%2FMCsIQY%2FknigEr8nDJWgGVjdysX0bKzDn8RclNarpMbRYbMwH0d2QK5hUdzcodfcn3k7acuZ1Imv66TGH2P6csjaaQi%2FT4PhAB%2FfRZg7wHCOxGA7myoLyOlykbmlybsuLYaMgJgLyFbwzAyBzVO5GXRL24rkMJWkksAGOqUB9LZOo9VB0Iwdit4UzcEGvEDA94WDo%2BOnuMzVS64Bqz8nzOQ4NFUjJPczglunRiQ3pMx8B47TAA2u%2FZhrqEvnBg9YOqZCvbGlYpG3ufnxULqbB316dDUBkruBwEdKOboyVYhxKPt2ISqvoq2aKAAhm6ZdFst1jckpSvm894qmSumLtDhoLAG2%2F7FK8%2BP2U%2FvnEDu8YNSWZQGkP4quJuV6ItYWgK55&X-Amz-Signature=fed3037ed301f631e434b183370b875520210a89df62faf884b4ba07f62a43dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW27K3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDVf3zFyslAcP1iRpvaYXsYrF%2BtbXsWes39lOOMwndenQIgI9c%2FI4Q9o0UiO%2F%2BJI7yLuUfI%2FoaULbRfmvYaZh5c3DQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcX672DrigDVXkOpCrcA%2BB%2BXczAayzzr4KbGMKBI1LwrFgfzs%2BOQxCd%2FGeanwmqbEe33pvNxKPEDc7%2BHJUTnRhas2SZN8R2uK4%2BOsfDWz4Yen2uujiWhqb%2Fc37oRO%2BZJt2yvw2vFBPjmORWMQcYCD%2F6nflOLatEAyAOoc%2FoqN4IGrEs1jSidSg4qWTUiOzSDGMzBWJRlO%2BmPc%2BNm45Au4Di0L3zvMGNpqqRYk4pM5s7nzX6ZflJCckikxOE%2Fq69wvn%2BhwvNXd6qUKqPOp%2BClhwveK%2FcfJWQUdK%2BVYKFPGIf1sGz7DIsemgUAlrsx0hRJxz0XaqH0fri%2BwtSeG%2BoEZMBU%2FTqaIDNhzymclWtSGhc0arAM5tJTDO%2Fdk5jYQyV7404BGYfRguJOaXnGb91dINotYUA0ebj9A%2B3DVczMoQZjLIdvCRrD57nhsOIv1TdvCgifvMVnLVKJwpvTlYHgPJoTIADwALkyYf316u9N83YAnJqV5OB%2FMCsIQY%2FknigEr8nDJWgGVjdysX0bKzDn8RclNarpMbRYbMwH0d2QK5hUdzcodfcn3k7acuZ1Imv66TGH2P6csjaaQi%2FT4PhAB%2FfRZg7wHCOxGA7myoLyOlykbmlybsuLYaMgJgLyFbwzAyBzVO5GXRL24rkMJWkksAGOqUB9LZOo9VB0Iwdit4UzcEGvEDA94WDo%2BOnuMzVS64Bqz8nzOQ4NFUjJPczglunRiQ3pMx8B47TAA2u%2FZhrqEvnBg9YOqZCvbGlYpG3ufnxULqbB316dDUBkruBwEdKOboyVYhxKPt2ISqvoq2aKAAhm6ZdFst1jckpSvm894qmSumLtDhoLAG2%2F7FK8%2BP2U%2FvnEDu8YNSWZQGkP4quJuV6ItYWgK55&X-Amz-Signature=4dbcfe6dabeec0d0dd2eefaaae10b7378e0a13a0a37c354da7412907454d1291&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW27K3W%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDVf3zFyslAcP1iRpvaYXsYrF%2BtbXsWes39lOOMwndenQIgI9c%2FI4Q9o0UiO%2F%2BJI7yLuUfI%2FoaULbRfmvYaZh5c3DQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcX672DrigDVXkOpCrcA%2BB%2BXczAayzzr4KbGMKBI1LwrFgfzs%2BOQxCd%2FGeanwmqbEe33pvNxKPEDc7%2BHJUTnRhas2SZN8R2uK4%2BOsfDWz4Yen2uujiWhqb%2Fc37oRO%2BZJt2yvw2vFBPjmORWMQcYCD%2F6nflOLatEAyAOoc%2FoqN4IGrEs1jSidSg4qWTUiOzSDGMzBWJRlO%2BmPc%2BNm45Au4Di0L3zvMGNpqqRYk4pM5s7nzX6ZflJCckikxOE%2Fq69wvn%2BhwvNXd6qUKqPOp%2BClhwveK%2FcfJWQUdK%2BVYKFPGIf1sGz7DIsemgUAlrsx0hRJxz0XaqH0fri%2BwtSeG%2BoEZMBU%2FTqaIDNhzymclWtSGhc0arAM5tJTDO%2Fdk5jYQyV7404BGYfRguJOaXnGb91dINotYUA0ebj9A%2B3DVczMoQZjLIdvCRrD57nhsOIv1TdvCgifvMVnLVKJwpvTlYHgPJoTIADwALkyYf316u9N83YAnJqV5OB%2FMCsIQY%2FknigEr8nDJWgGVjdysX0bKzDn8RclNarpMbRYbMwH0d2QK5hUdzcodfcn3k7acuZ1Imv66TGH2P6csjaaQi%2FT4PhAB%2FfRZg7wHCOxGA7myoLyOlykbmlybsuLYaMgJgLyFbwzAyBzVO5GXRL24rkMJWkksAGOqUB9LZOo9VB0Iwdit4UzcEGvEDA94WDo%2BOnuMzVS64Bqz8nzOQ4NFUjJPczglunRiQ3pMx8B47TAA2u%2FZhrqEvnBg9YOqZCvbGlYpG3ufnxULqbB316dDUBkruBwEdKOboyVYhxKPt2ISqvoq2aKAAhm6ZdFst1jckpSvm894qmSumLtDhoLAG2%2F7FK8%2BP2U%2FvnEDu8YNSWZQGkP4quJuV6ItYWgK55&X-Amz-Signature=beb5eb5dfcac2577705dcf8973ad30ddbd07114b67315d08d4479feb4af06f7a&X-Amz-SignedHeaders=host&x-id=GetObject)
