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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPZYDLW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9ZHUYqnQqyFV02KGHbLIsAIhqfKmqX5%2BU07VX4EE%2FeAIgWTVagDJ6TI%2Bgz4%2BB9BhMkQctbw3BjsRHPgE5yQB1tPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEa2GnnHfaXptOm1bSrcA5J86kvrICdFv00qGYLtChl%2B7%2BCNU%2BpPBb1GdGdP%2FbM7yAtbX1Piq%2BybPlgJowDgGzMzsOrSuWLUSe%2F1WHV6Ly2RgZIlqRqAtLxPGxzZ2jSaosAEOUk9grx%2FwTte1JEe5gOBe8SUYxuH2glEQD5ZzrB2h2nh6SFjR1naZwS2do2qEHo%2BG7bo9AyhjgMLGE39d%2FCz4jnNodB4m%2B2Vb818uZ%2B0th7K6zhyCX0PdciA3UCdDzTLStnWJaQmFn8mSo0Me%2Bv%2BbtRp%2BWqrqs%2B0TpAtcktTA5TMzyvHaagOLgDYABsrjWjgrmBEeDuulq%2B7ewonwbxujzLtBqsBQlVUhYmV3gcmRds3dAmXQQbmqhceePE2uRBQ%2FYYfGg3ceg8zMug1gvyzGh2GPu51FEeSrjHxPsVKeeyOLBxWPJFiRWm5MAbQ%2FneBdsX%2BeruNa%2BpjsbPYGjQVky8ZJV5CLF0pS4N%2Fj52l%2F3jTkpGHuBZwCSa6iZyyLiDRO8xi5orKh49Q1duP7Hh4FeRepc7OT3mQfVBLlz7R4gF1pk8b5rB2UpY0%2BbkX%2FauFHszWDCjmu3KuAjf1AB2%2FR4so5vhXuTb1Eze10J76pRl8Dd0Lh9%2Bx0fCc2vkBw7r%2F2sD70%2Fno52lgMNahksEGOqUBsk%2FXeKlr7N%2FtWSMql16cj3SpGW1BYGPr%2B5SQSR0FXq10NdCsKQVC6Fvpi%2FqNax4QCAKaKMPhO6YEGNkjPeYZ2l%2Be41bUi0i2UpSvHeoAfzRVv7iZ3hqAa8QeXolGOZIdTd5thyCeom2EYiA8FAWgPJg8SDYP17clnutPK4efbJ14pxyLw65gzdoIfDjkSSUm9DhqOQc2NDGmu59nT0S0BxcfWvEu&X-Amz-Signature=54a3fe3a40fe8954e99ad74783b939523faff61a747d6def7d4ef8d0ffa15568&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPZYDLW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9ZHUYqnQqyFV02KGHbLIsAIhqfKmqX5%2BU07VX4EE%2FeAIgWTVagDJ6TI%2Bgz4%2BB9BhMkQctbw3BjsRHPgE5yQB1tPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEa2GnnHfaXptOm1bSrcA5J86kvrICdFv00qGYLtChl%2B7%2BCNU%2BpPBb1GdGdP%2FbM7yAtbX1Piq%2BybPlgJowDgGzMzsOrSuWLUSe%2F1WHV6Ly2RgZIlqRqAtLxPGxzZ2jSaosAEOUk9grx%2FwTte1JEe5gOBe8SUYxuH2glEQD5ZzrB2h2nh6SFjR1naZwS2do2qEHo%2BG7bo9AyhjgMLGE39d%2FCz4jnNodB4m%2B2Vb818uZ%2B0th7K6zhyCX0PdciA3UCdDzTLStnWJaQmFn8mSo0Me%2Bv%2BbtRp%2BWqrqs%2B0TpAtcktTA5TMzyvHaagOLgDYABsrjWjgrmBEeDuulq%2B7ewonwbxujzLtBqsBQlVUhYmV3gcmRds3dAmXQQbmqhceePE2uRBQ%2FYYfGg3ceg8zMug1gvyzGh2GPu51FEeSrjHxPsVKeeyOLBxWPJFiRWm5MAbQ%2FneBdsX%2BeruNa%2BpjsbPYGjQVky8ZJV5CLF0pS4N%2Fj52l%2F3jTkpGHuBZwCSa6iZyyLiDRO8xi5orKh49Q1duP7Hh4FeRepc7OT3mQfVBLlz7R4gF1pk8b5rB2UpY0%2BbkX%2FauFHszWDCjmu3KuAjf1AB2%2FR4so5vhXuTb1Eze10J76pRl8Dd0Lh9%2Bx0fCc2vkBw7r%2F2sD70%2Fno52lgMNahksEGOqUBsk%2FXeKlr7N%2FtWSMql16cj3SpGW1BYGPr%2B5SQSR0FXq10NdCsKQVC6Fvpi%2FqNax4QCAKaKMPhO6YEGNkjPeYZ2l%2Be41bUi0i2UpSvHeoAfzRVv7iZ3hqAa8QeXolGOZIdTd5thyCeom2EYiA8FAWgPJg8SDYP17clnutPK4efbJ14pxyLw65gzdoIfDjkSSUm9DhqOQc2NDGmu59nT0S0BxcfWvEu&X-Amz-Signature=a02aea687602a58c1759a8f699accdae4fdad5206dd86107b7f4ac231f1011ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPZYDLW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9ZHUYqnQqyFV02KGHbLIsAIhqfKmqX5%2BU07VX4EE%2FeAIgWTVagDJ6TI%2Bgz4%2BB9BhMkQctbw3BjsRHPgE5yQB1tPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEa2GnnHfaXptOm1bSrcA5J86kvrICdFv00qGYLtChl%2B7%2BCNU%2BpPBb1GdGdP%2FbM7yAtbX1Piq%2BybPlgJowDgGzMzsOrSuWLUSe%2F1WHV6Ly2RgZIlqRqAtLxPGxzZ2jSaosAEOUk9grx%2FwTte1JEe5gOBe8SUYxuH2glEQD5ZzrB2h2nh6SFjR1naZwS2do2qEHo%2BG7bo9AyhjgMLGE39d%2FCz4jnNodB4m%2B2Vb818uZ%2B0th7K6zhyCX0PdciA3UCdDzTLStnWJaQmFn8mSo0Me%2Bv%2BbtRp%2BWqrqs%2B0TpAtcktTA5TMzyvHaagOLgDYABsrjWjgrmBEeDuulq%2B7ewonwbxujzLtBqsBQlVUhYmV3gcmRds3dAmXQQbmqhceePE2uRBQ%2FYYfGg3ceg8zMug1gvyzGh2GPu51FEeSrjHxPsVKeeyOLBxWPJFiRWm5MAbQ%2FneBdsX%2BeruNa%2BpjsbPYGjQVky8ZJV5CLF0pS4N%2Fj52l%2F3jTkpGHuBZwCSa6iZyyLiDRO8xi5orKh49Q1duP7Hh4FeRepc7OT3mQfVBLlz7R4gF1pk8b5rB2UpY0%2BbkX%2FauFHszWDCjmu3KuAjf1AB2%2FR4so5vhXuTb1Eze10J76pRl8Dd0Lh9%2Bx0fCc2vkBw7r%2F2sD70%2Fno52lgMNahksEGOqUBsk%2FXeKlr7N%2FtWSMql16cj3SpGW1BYGPr%2B5SQSR0FXq10NdCsKQVC6Fvpi%2FqNax4QCAKaKMPhO6YEGNkjPeYZ2l%2Be41bUi0i2UpSvHeoAfzRVv7iZ3hqAa8QeXolGOZIdTd5thyCeom2EYiA8FAWgPJg8SDYP17clnutPK4efbJ14pxyLw65gzdoIfDjkSSUm9DhqOQc2NDGmu59nT0S0BxcfWvEu&X-Amz-Signature=b46c1e16cfb24722a93e7180311f598066a2e631ef73393ff0cc3ad03f54c34d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPZYDLW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9ZHUYqnQqyFV02KGHbLIsAIhqfKmqX5%2BU07VX4EE%2FeAIgWTVagDJ6TI%2Bgz4%2BB9BhMkQctbw3BjsRHPgE5yQB1tPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEa2GnnHfaXptOm1bSrcA5J86kvrICdFv00qGYLtChl%2B7%2BCNU%2BpPBb1GdGdP%2FbM7yAtbX1Piq%2BybPlgJowDgGzMzsOrSuWLUSe%2F1WHV6Ly2RgZIlqRqAtLxPGxzZ2jSaosAEOUk9grx%2FwTte1JEe5gOBe8SUYxuH2glEQD5ZzrB2h2nh6SFjR1naZwS2do2qEHo%2BG7bo9AyhjgMLGE39d%2FCz4jnNodB4m%2B2Vb818uZ%2B0th7K6zhyCX0PdciA3UCdDzTLStnWJaQmFn8mSo0Me%2Bv%2BbtRp%2BWqrqs%2B0TpAtcktTA5TMzyvHaagOLgDYABsrjWjgrmBEeDuulq%2B7ewonwbxujzLtBqsBQlVUhYmV3gcmRds3dAmXQQbmqhceePE2uRBQ%2FYYfGg3ceg8zMug1gvyzGh2GPu51FEeSrjHxPsVKeeyOLBxWPJFiRWm5MAbQ%2FneBdsX%2BeruNa%2BpjsbPYGjQVky8ZJV5CLF0pS4N%2Fj52l%2F3jTkpGHuBZwCSa6iZyyLiDRO8xi5orKh49Q1duP7Hh4FeRepc7OT3mQfVBLlz7R4gF1pk8b5rB2UpY0%2BbkX%2FauFHszWDCjmu3KuAjf1AB2%2FR4so5vhXuTb1Eze10J76pRl8Dd0Lh9%2Bx0fCc2vkBw7r%2F2sD70%2Fno52lgMNahksEGOqUBsk%2FXeKlr7N%2FtWSMql16cj3SpGW1BYGPr%2B5SQSR0FXq10NdCsKQVC6Fvpi%2FqNax4QCAKaKMPhO6YEGNkjPeYZ2l%2Be41bUi0i2UpSvHeoAfzRVv7iZ3hqAa8QeXolGOZIdTd5thyCeom2EYiA8FAWgPJg8SDYP17clnutPK4efbJ14pxyLw65gzdoIfDjkSSUm9DhqOQc2NDGmu59nT0S0BxcfWvEu&X-Amz-Signature=829c15877513c3f6b4ddddef21455b85c3d99611d9c6a35360825312a80f4d57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPZYDLW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9ZHUYqnQqyFV02KGHbLIsAIhqfKmqX5%2BU07VX4EE%2FeAIgWTVagDJ6TI%2Bgz4%2BB9BhMkQctbw3BjsRHPgE5yQB1tPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEa2GnnHfaXptOm1bSrcA5J86kvrICdFv00qGYLtChl%2B7%2BCNU%2BpPBb1GdGdP%2FbM7yAtbX1Piq%2BybPlgJowDgGzMzsOrSuWLUSe%2F1WHV6Ly2RgZIlqRqAtLxPGxzZ2jSaosAEOUk9grx%2FwTte1JEe5gOBe8SUYxuH2glEQD5ZzrB2h2nh6SFjR1naZwS2do2qEHo%2BG7bo9AyhjgMLGE39d%2FCz4jnNodB4m%2B2Vb818uZ%2B0th7K6zhyCX0PdciA3UCdDzTLStnWJaQmFn8mSo0Me%2Bv%2BbtRp%2BWqrqs%2B0TpAtcktTA5TMzyvHaagOLgDYABsrjWjgrmBEeDuulq%2B7ewonwbxujzLtBqsBQlVUhYmV3gcmRds3dAmXQQbmqhceePE2uRBQ%2FYYfGg3ceg8zMug1gvyzGh2GPu51FEeSrjHxPsVKeeyOLBxWPJFiRWm5MAbQ%2FneBdsX%2BeruNa%2BpjsbPYGjQVky8ZJV5CLF0pS4N%2Fj52l%2F3jTkpGHuBZwCSa6iZyyLiDRO8xi5orKh49Q1duP7Hh4FeRepc7OT3mQfVBLlz7R4gF1pk8b5rB2UpY0%2BbkX%2FauFHszWDCjmu3KuAjf1AB2%2FR4so5vhXuTb1Eze10J76pRl8Dd0Lh9%2Bx0fCc2vkBw7r%2F2sD70%2Fno52lgMNahksEGOqUBsk%2FXeKlr7N%2FtWSMql16cj3SpGW1BYGPr%2B5SQSR0FXq10NdCsKQVC6Fvpi%2FqNax4QCAKaKMPhO6YEGNkjPeYZ2l%2Be41bUi0i2UpSvHeoAfzRVv7iZ3hqAa8QeXolGOZIdTd5thyCeom2EYiA8FAWgPJg8SDYP17clnutPK4efbJ14pxyLw65gzdoIfDjkSSUm9DhqOQc2NDGmu59nT0S0BxcfWvEu&X-Amz-Signature=c5c465799e5a91307c7e6b769b0928576af11c4ef657a4b787c327df9b041d60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPZYDLW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC9ZHUYqnQqyFV02KGHbLIsAIhqfKmqX5%2BU07VX4EE%2FeAIgWTVagDJ6TI%2Bgz4%2BB9BhMkQctbw3BjsRHPgE5yQB1tPkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEa2GnnHfaXptOm1bSrcA5J86kvrICdFv00qGYLtChl%2B7%2BCNU%2BpPBb1GdGdP%2FbM7yAtbX1Piq%2BybPlgJowDgGzMzsOrSuWLUSe%2F1WHV6Ly2RgZIlqRqAtLxPGxzZ2jSaosAEOUk9grx%2FwTte1JEe5gOBe8SUYxuH2glEQD5ZzrB2h2nh6SFjR1naZwS2do2qEHo%2BG7bo9AyhjgMLGE39d%2FCz4jnNodB4m%2B2Vb818uZ%2B0th7K6zhyCX0PdciA3UCdDzTLStnWJaQmFn8mSo0Me%2Bv%2BbtRp%2BWqrqs%2B0TpAtcktTA5TMzyvHaagOLgDYABsrjWjgrmBEeDuulq%2B7ewonwbxujzLtBqsBQlVUhYmV3gcmRds3dAmXQQbmqhceePE2uRBQ%2FYYfGg3ceg8zMug1gvyzGh2GPu51FEeSrjHxPsVKeeyOLBxWPJFiRWm5MAbQ%2FneBdsX%2BeruNa%2BpjsbPYGjQVky8ZJV5CLF0pS4N%2Fj52l%2F3jTkpGHuBZwCSa6iZyyLiDRO8xi5orKh49Q1duP7Hh4FeRepc7OT3mQfVBLlz7R4gF1pk8b5rB2UpY0%2BbkX%2FauFHszWDCjmu3KuAjf1AB2%2FR4so5vhXuTb1Eze10J76pRl8Dd0Lh9%2Bx0fCc2vkBw7r%2F2sD70%2Fno52lgMNahksEGOqUBsk%2FXeKlr7N%2FtWSMql16cj3SpGW1BYGPr%2B5SQSR0FXq10NdCsKQVC6Fvpi%2FqNax4QCAKaKMPhO6YEGNkjPeYZ2l%2Be41bUi0i2UpSvHeoAfzRVv7iZ3hqAa8QeXolGOZIdTd5thyCeom2EYiA8FAWgPJg8SDYP17clnutPK4efbJ14pxyLw65gzdoIfDjkSSUm9DhqOQc2NDGmu59nT0S0BxcfWvEu&X-Amz-Signature=5ad1834d6890b2f6e146502c1f8a8764f5cf5e0c26dd0ca2acf6e901302e46ae&X-Amz-SignedHeaders=host&x-id=GetObject)
