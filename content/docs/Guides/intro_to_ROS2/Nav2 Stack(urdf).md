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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG2V3QO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIG6xP4coh3l9HlhxGmWg8C14OX28ZacQG1waj24LQbzrAiEAppfVukiixFTOJIIjx%2Fh6R4DOYU3Hk0S8HFZ28p72DcQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIrayfwTZiaBN%2FmzCCrcA6foZLJylxmd9mPAi0T0xHXP9SVAhd0jikdtsUwRgywtSjVusu6r9gvXn%2BbasXnRdgFz6coeS9lusrm7qe97qd2rIE9KvMlDLHLT37BcLbtj5K%2FCZJj3K6S6V%2FLHPlaxF8wXJZA99W3QXPeU1xX6wzivMHo2FIFCxS9n%2B3fyE4X59OZ4TkjC2bFVBTGb2fsPLmoIxfgtXWc4t%2B7HFoQ32tnwkqbngbdF4OLA3X%2BCSmz0BJMTr%2BsT1tnD%2BolS%2BPDLhTyURchrzUgOWhiZkAZ%2Bv%2Fy944td%2F1hXCp4SFasCicO1LioUPzc%2Bw21%2F5UsSh5IPJVj3DZMxjK3D8jmlWBc7lGXbNXAkrDXiy6ICkkSfNUWFpMcJICGd3SchVSH5%2BmzpW6iktNz%2BWQOOsH%2FbPvxxK2Pot6KlLeO5nIhdZcWAE7jq7DSTQQet5Cic5e%2BU8RHUyxp%2FvCgQzig8f6LtXTC%2FAb4K7wzvdz9xcc921QhYpAdXoGN1EOM78dlMBek3l78xG0WOesnkwk3BQ1oEZXL6tAKWMq0P%2FDnYKY42DjH154qMCBkI8Mu0PE5sYp39CMvjzwiU3tAhXfQB5AlgvaWK51NRvGjOK%2F7Dw7HP1FQ%2FBaurmFqsf8WapjDj%2Bif0MKyuxL0GOqUBlbZS2Ad7rUmQg%2FZUIrRutzzzD5HAukNDtLyzCV2d8%2FJ67hpaGYes5TWT9NriMi48Oabb%2B34GKYjbLRt5hW8RxP6db0d1owyhhf3MT2iWw49NI2mDAv1HrfvQDjfW4DduML%2BuJ1YQBvATyPCYFqSkszwTexkuyYyuKdjUbmUmnXWQQ7W3iDLB20KfWPmfrWTzkh7Y2ZeACc4A%2BBQcCgLuwQD3Gr5f&X-Amz-Signature=8e16fce05af725cabb6afcc8aca7be97142a712988d6dadeb1c8b0119bd38b15&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG2V3QO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIG6xP4coh3l9HlhxGmWg8C14OX28ZacQG1waj24LQbzrAiEAppfVukiixFTOJIIjx%2Fh6R4DOYU3Hk0S8HFZ28p72DcQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIrayfwTZiaBN%2FmzCCrcA6foZLJylxmd9mPAi0T0xHXP9SVAhd0jikdtsUwRgywtSjVusu6r9gvXn%2BbasXnRdgFz6coeS9lusrm7qe97qd2rIE9KvMlDLHLT37BcLbtj5K%2FCZJj3K6S6V%2FLHPlaxF8wXJZA99W3QXPeU1xX6wzivMHo2FIFCxS9n%2B3fyE4X59OZ4TkjC2bFVBTGb2fsPLmoIxfgtXWc4t%2B7HFoQ32tnwkqbngbdF4OLA3X%2BCSmz0BJMTr%2BsT1tnD%2BolS%2BPDLhTyURchrzUgOWhiZkAZ%2Bv%2Fy944td%2F1hXCp4SFasCicO1LioUPzc%2Bw21%2F5UsSh5IPJVj3DZMxjK3D8jmlWBc7lGXbNXAkrDXiy6ICkkSfNUWFpMcJICGd3SchVSH5%2BmzpW6iktNz%2BWQOOsH%2FbPvxxK2Pot6KlLeO5nIhdZcWAE7jq7DSTQQet5Cic5e%2BU8RHUyxp%2FvCgQzig8f6LtXTC%2FAb4K7wzvdz9xcc921QhYpAdXoGN1EOM78dlMBek3l78xG0WOesnkwk3BQ1oEZXL6tAKWMq0P%2FDnYKY42DjH154qMCBkI8Mu0PE5sYp39CMvjzwiU3tAhXfQB5AlgvaWK51NRvGjOK%2F7Dw7HP1FQ%2FBaurmFqsf8WapjDj%2Bif0MKyuxL0GOqUBlbZS2Ad7rUmQg%2FZUIrRutzzzD5HAukNDtLyzCV2d8%2FJ67hpaGYes5TWT9NriMi48Oabb%2B34GKYjbLRt5hW8RxP6db0d1owyhhf3MT2iWw49NI2mDAv1HrfvQDjfW4DduML%2BuJ1YQBvATyPCYFqSkszwTexkuyYyuKdjUbmUmnXWQQ7W3iDLB20KfWPmfrWTzkh7Y2ZeACc4A%2BBQcCgLuwQD3Gr5f&X-Amz-Signature=95329b3b2f1dea2513edf21ec1eb73f9ac59dae63d1465a239ea83098437240e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG2V3QO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIG6xP4coh3l9HlhxGmWg8C14OX28ZacQG1waj24LQbzrAiEAppfVukiixFTOJIIjx%2Fh6R4DOYU3Hk0S8HFZ28p72DcQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIrayfwTZiaBN%2FmzCCrcA6foZLJylxmd9mPAi0T0xHXP9SVAhd0jikdtsUwRgywtSjVusu6r9gvXn%2BbasXnRdgFz6coeS9lusrm7qe97qd2rIE9KvMlDLHLT37BcLbtj5K%2FCZJj3K6S6V%2FLHPlaxF8wXJZA99W3QXPeU1xX6wzivMHo2FIFCxS9n%2B3fyE4X59OZ4TkjC2bFVBTGb2fsPLmoIxfgtXWc4t%2B7HFoQ32tnwkqbngbdF4OLA3X%2BCSmz0BJMTr%2BsT1tnD%2BolS%2BPDLhTyURchrzUgOWhiZkAZ%2Bv%2Fy944td%2F1hXCp4SFasCicO1LioUPzc%2Bw21%2F5UsSh5IPJVj3DZMxjK3D8jmlWBc7lGXbNXAkrDXiy6ICkkSfNUWFpMcJICGd3SchVSH5%2BmzpW6iktNz%2BWQOOsH%2FbPvxxK2Pot6KlLeO5nIhdZcWAE7jq7DSTQQet5Cic5e%2BU8RHUyxp%2FvCgQzig8f6LtXTC%2FAb4K7wzvdz9xcc921QhYpAdXoGN1EOM78dlMBek3l78xG0WOesnkwk3BQ1oEZXL6tAKWMq0P%2FDnYKY42DjH154qMCBkI8Mu0PE5sYp39CMvjzwiU3tAhXfQB5AlgvaWK51NRvGjOK%2F7Dw7HP1FQ%2FBaurmFqsf8WapjDj%2Bif0MKyuxL0GOqUBlbZS2Ad7rUmQg%2FZUIrRutzzzD5HAukNDtLyzCV2d8%2FJ67hpaGYes5TWT9NriMi48Oabb%2B34GKYjbLRt5hW8RxP6db0d1owyhhf3MT2iWw49NI2mDAv1HrfvQDjfW4DduML%2BuJ1YQBvATyPCYFqSkszwTexkuyYyuKdjUbmUmnXWQQ7W3iDLB20KfWPmfrWTzkh7Y2ZeACc4A%2BBQcCgLuwQD3Gr5f&X-Amz-Signature=51d1c47f9df63ea310f4f0c61e59b3f536621e3ef3cd2c02b08b8e2d1f956030&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG2V3QO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIG6xP4coh3l9HlhxGmWg8C14OX28ZacQG1waj24LQbzrAiEAppfVukiixFTOJIIjx%2Fh6R4DOYU3Hk0S8HFZ28p72DcQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIrayfwTZiaBN%2FmzCCrcA6foZLJylxmd9mPAi0T0xHXP9SVAhd0jikdtsUwRgywtSjVusu6r9gvXn%2BbasXnRdgFz6coeS9lusrm7qe97qd2rIE9KvMlDLHLT37BcLbtj5K%2FCZJj3K6S6V%2FLHPlaxF8wXJZA99W3QXPeU1xX6wzivMHo2FIFCxS9n%2B3fyE4X59OZ4TkjC2bFVBTGb2fsPLmoIxfgtXWc4t%2B7HFoQ32tnwkqbngbdF4OLA3X%2BCSmz0BJMTr%2BsT1tnD%2BolS%2BPDLhTyURchrzUgOWhiZkAZ%2Bv%2Fy944td%2F1hXCp4SFasCicO1LioUPzc%2Bw21%2F5UsSh5IPJVj3DZMxjK3D8jmlWBc7lGXbNXAkrDXiy6ICkkSfNUWFpMcJICGd3SchVSH5%2BmzpW6iktNz%2BWQOOsH%2FbPvxxK2Pot6KlLeO5nIhdZcWAE7jq7DSTQQet5Cic5e%2BU8RHUyxp%2FvCgQzig8f6LtXTC%2FAb4K7wzvdz9xcc921QhYpAdXoGN1EOM78dlMBek3l78xG0WOesnkwk3BQ1oEZXL6tAKWMq0P%2FDnYKY42DjH154qMCBkI8Mu0PE5sYp39CMvjzwiU3tAhXfQB5AlgvaWK51NRvGjOK%2F7Dw7HP1FQ%2FBaurmFqsf8WapjDj%2Bif0MKyuxL0GOqUBlbZS2Ad7rUmQg%2FZUIrRutzzzD5HAukNDtLyzCV2d8%2FJ67hpaGYes5TWT9NriMi48Oabb%2B34GKYjbLRt5hW8RxP6db0d1owyhhf3MT2iWw49NI2mDAv1HrfvQDjfW4DduML%2BuJ1YQBvATyPCYFqSkszwTexkuyYyuKdjUbmUmnXWQQ7W3iDLB20KfWPmfrWTzkh7Y2ZeACc4A%2BBQcCgLuwQD3Gr5f&X-Amz-Signature=1838e6214276eae9dcca4c4ecd693ec1c0489817b87e99abe13043b28c5e4131&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG2V3QO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIG6xP4coh3l9HlhxGmWg8C14OX28ZacQG1waj24LQbzrAiEAppfVukiixFTOJIIjx%2Fh6R4DOYU3Hk0S8HFZ28p72DcQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIrayfwTZiaBN%2FmzCCrcA6foZLJylxmd9mPAi0T0xHXP9SVAhd0jikdtsUwRgywtSjVusu6r9gvXn%2BbasXnRdgFz6coeS9lusrm7qe97qd2rIE9KvMlDLHLT37BcLbtj5K%2FCZJj3K6S6V%2FLHPlaxF8wXJZA99W3QXPeU1xX6wzivMHo2FIFCxS9n%2B3fyE4X59OZ4TkjC2bFVBTGb2fsPLmoIxfgtXWc4t%2B7HFoQ32tnwkqbngbdF4OLA3X%2BCSmz0BJMTr%2BsT1tnD%2BolS%2BPDLhTyURchrzUgOWhiZkAZ%2Bv%2Fy944td%2F1hXCp4SFasCicO1LioUPzc%2Bw21%2F5UsSh5IPJVj3DZMxjK3D8jmlWBc7lGXbNXAkrDXiy6ICkkSfNUWFpMcJICGd3SchVSH5%2BmzpW6iktNz%2BWQOOsH%2FbPvxxK2Pot6KlLeO5nIhdZcWAE7jq7DSTQQet5Cic5e%2BU8RHUyxp%2FvCgQzig8f6LtXTC%2FAb4K7wzvdz9xcc921QhYpAdXoGN1EOM78dlMBek3l78xG0WOesnkwk3BQ1oEZXL6tAKWMq0P%2FDnYKY42DjH154qMCBkI8Mu0PE5sYp39CMvjzwiU3tAhXfQB5AlgvaWK51NRvGjOK%2F7Dw7HP1FQ%2FBaurmFqsf8WapjDj%2Bif0MKyuxL0GOqUBlbZS2Ad7rUmQg%2FZUIrRutzzzD5HAukNDtLyzCV2d8%2FJ67hpaGYes5TWT9NriMi48Oabb%2B34GKYjbLRt5hW8RxP6db0d1owyhhf3MT2iWw49NI2mDAv1HrfvQDjfW4DduML%2BuJ1YQBvATyPCYFqSkszwTexkuyYyuKdjUbmUmnXWQQ7W3iDLB20KfWPmfrWTzkh7Y2ZeACc4A%2BBQcCgLuwQD3Gr5f&X-Amz-Signature=dfe4162e4ce15813a8387b8cd26786556252e87bbbb955898ae50f91e1bedde6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VG2V3QO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIG6xP4coh3l9HlhxGmWg8C14OX28ZacQG1waj24LQbzrAiEAppfVukiixFTOJIIjx%2Fh6R4DOYU3Hk0S8HFZ28p72DcQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIrayfwTZiaBN%2FmzCCrcA6foZLJylxmd9mPAi0T0xHXP9SVAhd0jikdtsUwRgywtSjVusu6r9gvXn%2BbasXnRdgFz6coeS9lusrm7qe97qd2rIE9KvMlDLHLT37BcLbtj5K%2FCZJj3K6S6V%2FLHPlaxF8wXJZA99W3QXPeU1xX6wzivMHo2FIFCxS9n%2B3fyE4X59OZ4TkjC2bFVBTGb2fsPLmoIxfgtXWc4t%2B7HFoQ32tnwkqbngbdF4OLA3X%2BCSmz0BJMTr%2BsT1tnD%2BolS%2BPDLhTyURchrzUgOWhiZkAZ%2Bv%2Fy944td%2F1hXCp4SFasCicO1LioUPzc%2Bw21%2F5UsSh5IPJVj3DZMxjK3D8jmlWBc7lGXbNXAkrDXiy6ICkkSfNUWFpMcJICGd3SchVSH5%2BmzpW6iktNz%2BWQOOsH%2FbPvxxK2Pot6KlLeO5nIhdZcWAE7jq7DSTQQet5Cic5e%2BU8RHUyxp%2FvCgQzig8f6LtXTC%2FAb4K7wzvdz9xcc921QhYpAdXoGN1EOM78dlMBek3l78xG0WOesnkwk3BQ1oEZXL6tAKWMq0P%2FDnYKY42DjH154qMCBkI8Mu0PE5sYp39CMvjzwiU3tAhXfQB5AlgvaWK51NRvGjOK%2F7Dw7HP1FQ%2FBaurmFqsf8WapjDj%2Bif0MKyuxL0GOqUBlbZS2Ad7rUmQg%2FZUIrRutzzzD5HAukNDtLyzCV2d8%2FJ67hpaGYes5TWT9NriMi48Oabb%2B34GKYjbLRt5hW8RxP6db0d1owyhhf3MT2iWw49NI2mDAv1HrfvQDjfW4DduML%2BuJ1YQBvATyPCYFqSkszwTexkuyYyuKdjUbmUmnXWQQ7W3iDLB20KfWPmfrWTzkh7Y2ZeACc4A%2BBQcCgLuwQD3Gr5f&X-Amz-Signature=32a4aeaac8fa1ce5cbc3a6418ef05c88a723f2f916ba453c539994b9198bfd4b&X-Amz-SignedHeaders=host&x-id=GetObject)
