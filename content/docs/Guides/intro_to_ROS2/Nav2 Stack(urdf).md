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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAFIR43%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDZF1mrJXtN5Ul2gWUDGg%2BQqppssGPq4dLayPwLsEPReQIgb4vjkuYhRL5Hg5sZyBajGTYrGjJ3Kfqij%2B54%2FOhtdmMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGmdYfBep3ojI%2BvwSrcA1JLcyhKSNfEQxhCuRpaS%2FRzZ%2FTrSGLgACxjwM7Um68FUW5ZjVW4c2Ehc%2BxMp8PaIeSLCAGp9kGX5iqm18nqVRCEsNF6LrIkzgAb39QIiaRsc9M5jyo9vafUuvh5IBJi2KRr8HV2IbM%2F%2FHWIUQs7qnVf4uZmA7dpsqpXMDzJbW3FYeHPvUMrIHUI2nCYhXCNzi9G3K6E7ZEa1Q7ZDDETPNip33PQou4RAVLtooK8mqRM46pN%2BzbL%2Fz0Yfl2T8DhmaubqflWqCS84xoZ%2FbHcSO4SIz9lcaqPaYqW4tFl1fqu5fGpASciO2i2HVkgf3%2FIL6JnQ1I6hi%2BzPDmTMO%2F1UhVoXQdSr6W4mRde3fvQ%2FZceHficKosxIiSnZWFrHk%2BUjY5xWXVwP2aOgx9WPSKDxZlISK8Nzrs9YJWHaNPesBvkUsnjxG12O07UN7xUcjZOeW0Qhw92gkxBp76Gbdt9XqIonPuSm7uurC5MPCRdHsHbt1qRuYPggm4dzwTKL0nDr3ICaPb4xjjoqAxSZwZRHxn2LBJKroiFQZaqQkJ09cmqZHxeee3Iz13U1K5CvH8LYSgNSiQzUhc6yYHCddl75RDBGrXX7wvtGhdl%2FLFe%2BjI9JR8KRbmSPQqht2rkBMMCw58MGOqUBPYQZjAoyfJyOZz1lFQQ43IWiu4aCGwAslo4I8C6tyOjl%2Bl00k0Z3jtMaDJhShEbk9GNZlBsxJUlh3QpKIPQQ3eMNHV560mUAV1jX3z0UsyU6epF7HaoSBD%2BE27%2BZdekptk7ql8GvPKqxp02BlFgV8862DAdKU2RVUD8U4ecU2VhGI%2Ff%2F8QGs5tAf4M8v8kXFApv1%2FjAebNHqeoQWFOYIjcPNq6sM&X-Amz-Signature=8e6d2f449335423bfb64a88eb646831f49e4f4bd531e87bb16af762ad4ac2d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAFIR43%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDZF1mrJXtN5Ul2gWUDGg%2BQqppssGPq4dLayPwLsEPReQIgb4vjkuYhRL5Hg5sZyBajGTYrGjJ3Kfqij%2B54%2FOhtdmMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGmdYfBep3ojI%2BvwSrcA1JLcyhKSNfEQxhCuRpaS%2FRzZ%2FTrSGLgACxjwM7Um68FUW5ZjVW4c2Ehc%2BxMp8PaIeSLCAGp9kGX5iqm18nqVRCEsNF6LrIkzgAb39QIiaRsc9M5jyo9vafUuvh5IBJi2KRr8HV2IbM%2F%2FHWIUQs7qnVf4uZmA7dpsqpXMDzJbW3FYeHPvUMrIHUI2nCYhXCNzi9G3K6E7ZEa1Q7ZDDETPNip33PQou4RAVLtooK8mqRM46pN%2BzbL%2Fz0Yfl2T8DhmaubqflWqCS84xoZ%2FbHcSO4SIz9lcaqPaYqW4tFl1fqu5fGpASciO2i2HVkgf3%2FIL6JnQ1I6hi%2BzPDmTMO%2F1UhVoXQdSr6W4mRde3fvQ%2FZceHficKosxIiSnZWFrHk%2BUjY5xWXVwP2aOgx9WPSKDxZlISK8Nzrs9YJWHaNPesBvkUsnjxG12O07UN7xUcjZOeW0Qhw92gkxBp76Gbdt9XqIonPuSm7uurC5MPCRdHsHbt1qRuYPggm4dzwTKL0nDr3ICaPb4xjjoqAxSZwZRHxn2LBJKroiFQZaqQkJ09cmqZHxeee3Iz13U1K5CvH8LYSgNSiQzUhc6yYHCddl75RDBGrXX7wvtGhdl%2FLFe%2BjI9JR8KRbmSPQqht2rkBMMCw58MGOqUBPYQZjAoyfJyOZz1lFQQ43IWiu4aCGwAslo4I8C6tyOjl%2Bl00k0Z3jtMaDJhShEbk9GNZlBsxJUlh3QpKIPQQ3eMNHV560mUAV1jX3z0UsyU6epF7HaoSBD%2BE27%2BZdekptk7ql8GvPKqxp02BlFgV8862DAdKU2RVUD8U4ecU2VhGI%2Ff%2F8QGs5tAf4M8v8kXFApv1%2FjAebNHqeoQWFOYIjcPNq6sM&X-Amz-Signature=d63bda495e0d0de758a33e016a1088a60b5ff54df5a799caca8bb1c6cfcb0163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAFIR43%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDZF1mrJXtN5Ul2gWUDGg%2BQqppssGPq4dLayPwLsEPReQIgb4vjkuYhRL5Hg5sZyBajGTYrGjJ3Kfqij%2B54%2FOhtdmMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGmdYfBep3ojI%2BvwSrcA1JLcyhKSNfEQxhCuRpaS%2FRzZ%2FTrSGLgACxjwM7Um68FUW5ZjVW4c2Ehc%2BxMp8PaIeSLCAGp9kGX5iqm18nqVRCEsNF6LrIkzgAb39QIiaRsc9M5jyo9vafUuvh5IBJi2KRr8HV2IbM%2F%2FHWIUQs7qnVf4uZmA7dpsqpXMDzJbW3FYeHPvUMrIHUI2nCYhXCNzi9G3K6E7ZEa1Q7ZDDETPNip33PQou4RAVLtooK8mqRM46pN%2BzbL%2Fz0Yfl2T8DhmaubqflWqCS84xoZ%2FbHcSO4SIz9lcaqPaYqW4tFl1fqu5fGpASciO2i2HVkgf3%2FIL6JnQ1I6hi%2BzPDmTMO%2F1UhVoXQdSr6W4mRde3fvQ%2FZceHficKosxIiSnZWFrHk%2BUjY5xWXVwP2aOgx9WPSKDxZlISK8Nzrs9YJWHaNPesBvkUsnjxG12O07UN7xUcjZOeW0Qhw92gkxBp76Gbdt9XqIonPuSm7uurC5MPCRdHsHbt1qRuYPggm4dzwTKL0nDr3ICaPb4xjjoqAxSZwZRHxn2LBJKroiFQZaqQkJ09cmqZHxeee3Iz13U1K5CvH8LYSgNSiQzUhc6yYHCddl75RDBGrXX7wvtGhdl%2FLFe%2BjI9JR8KRbmSPQqht2rkBMMCw58MGOqUBPYQZjAoyfJyOZz1lFQQ43IWiu4aCGwAslo4I8C6tyOjl%2Bl00k0Z3jtMaDJhShEbk9GNZlBsxJUlh3QpKIPQQ3eMNHV560mUAV1jX3z0UsyU6epF7HaoSBD%2BE27%2BZdekptk7ql8GvPKqxp02BlFgV8862DAdKU2RVUD8U4ecU2VhGI%2Ff%2F8QGs5tAf4M8v8kXFApv1%2FjAebNHqeoQWFOYIjcPNq6sM&X-Amz-Signature=3b94d8922ef344e3638d127c1fcad78747f8104a61f1014f56dc80c622aa011f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAFIR43%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDZF1mrJXtN5Ul2gWUDGg%2BQqppssGPq4dLayPwLsEPReQIgb4vjkuYhRL5Hg5sZyBajGTYrGjJ3Kfqij%2B54%2FOhtdmMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGmdYfBep3ojI%2BvwSrcA1JLcyhKSNfEQxhCuRpaS%2FRzZ%2FTrSGLgACxjwM7Um68FUW5ZjVW4c2Ehc%2BxMp8PaIeSLCAGp9kGX5iqm18nqVRCEsNF6LrIkzgAb39QIiaRsc9M5jyo9vafUuvh5IBJi2KRr8HV2IbM%2F%2FHWIUQs7qnVf4uZmA7dpsqpXMDzJbW3FYeHPvUMrIHUI2nCYhXCNzi9G3K6E7ZEa1Q7ZDDETPNip33PQou4RAVLtooK8mqRM46pN%2BzbL%2Fz0Yfl2T8DhmaubqflWqCS84xoZ%2FbHcSO4SIz9lcaqPaYqW4tFl1fqu5fGpASciO2i2HVkgf3%2FIL6JnQ1I6hi%2BzPDmTMO%2F1UhVoXQdSr6W4mRde3fvQ%2FZceHficKosxIiSnZWFrHk%2BUjY5xWXVwP2aOgx9WPSKDxZlISK8Nzrs9YJWHaNPesBvkUsnjxG12O07UN7xUcjZOeW0Qhw92gkxBp76Gbdt9XqIonPuSm7uurC5MPCRdHsHbt1qRuYPggm4dzwTKL0nDr3ICaPb4xjjoqAxSZwZRHxn2LBJKroiFQZaqQkJ09cmqZHxeee3Iz13U1K5CvH8LYSgNSiQzUhc6yYHCddl75RDBGrXX7wvtGhdl%2FLFe%2BjI9JR8KRbmSPQqht2rkBMMCw58MGOqUBPYQZjAoyfJyOZz1lFQQ43IWiu4aCGwAslo4I8C6tyOjl%2Bl00k0Z3jtMaDJhShEbk9GNZlBsxJUlh3QpKIPQQ3eMNHV560mUAV1jX3z0UsyU6epF7HaoSBD%2BE27%2BZdekptk7ql8GvPKqxp02BlFgV8862DAdKU2RVUD8U4ecU2VhGI%2Ff%2F8QGs5tAf4M8v8kXFApv1%2FjAebNHqeoQWFOYIjcPNq6sM&X-Amz-Signature=c27c4240d61190c9939c1a6e041ff2695010dc96c70e806cc9241628f659a69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAFIR43%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDZF1mrJXtN5Ul2gWUDGg%2BQqppssGPq4dLayPwLsEPReQIgb4vjkuYhRL5Hg5sZyBajGTYrGjJ3Kfqij%2B54%2FOhtdmMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGmdYfBep3ojI%2BvwSrcA1JLcyhKSNfEQxhCuRpaS%2FRzZ%2FTrSGLgACxjwM7Um68FUW5ZjVW4c2Ehc%2BxMp8PaIeSLCAGp9kGX5iqm18nqVRCEsNF6LrIkzgAb39QIiaRsc9M5jyo9vafUuvh5IBJi2KRr8HV2IbM%2F%2FHWIUQs7qnVf4uZmA7dpsqpXMDzJbW3FYeHPvUMrIHUI2nCYhXCNzi9G3K6E7ZEa1Q7ZDDETPNip33PQou4RAVLtooK8mqRM46pN%2BzbL%2Fz0Yfl2T8DhmaubqflWqCS84xoZ%2FbHcSO4SIz9lcaqPaYqW4tFl1fqu5fGpASciO2i2HVkgf3%2FIL6JnQ1I6hi%2BzPDmTMO%2F1UhVoXQdSr6W4mRde3fvQ%2FZceHficKosxIiSnZWFrHk%2BUjY5xWXVwP2aOgx9WPSKDxZlISK8Nzrs9YJWHaNPesBvkUsnjxG12O07UN7xUcjZOeW0Qhw92gkxBp76Gbdt9XqIonPuSm7uurC5MPCRdHsHbt1qRuYPggm4dzwTKL0nDr3ICaPb4xjjoqAxSZwZRHxn2LBJKroiFQZaqQkJ09cmqZHxeee3Iz13U1K5CvH8LYSgNSiQzUhc6yYHCddl75RDBGrXX7wvtGhdl%2FLFe%2BjI9JR8KRbmSPQqht2rkBMMCw58MGOqUBPYQZjAoyfJyOZz1lFQQ43IWiu4aCGwAslo4I8C6tyOjl%2Bl00k0Z3jtMaDJhShEbk9GNZlBsxJUlh3QpKIPQQ3eMNHV560mUAV1jX3z0UsyU6epF7HaoSBD%2BE27%2BZdekptk7ql8GvPKqxp02BlFgV8862DAdKU2RVUD8U4ecU2VhGI%2Ff%2F8QGs5tAf4M8v8kXFApv1%2FjAebNHqeoQWFOYIjcPNq6sM&X-Amz-Signature=719c6b27a8de0e4a30fc8e5a3ad8b2688cefa1697d804d8577ddafe672983463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAFIR43%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDZF1mrJXtN5Ul2gWUDGg%2BQqppssGPq4dLayPwLsEPReQIgb4vjkuYhRL5Hg5sZyBajGTYrGjJ3Kfqij%2B54%2FOhtdmMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGmdYfBep3ojI%2BvwSrcA1JLcyhKSNfEQxhCuRpaS%2FRzZ%2FTrSGLgACxjwM7Um68FUW5ZjVW4c2Ehc%2BxMp8PaIeSLCAGp9kGX5iqm18nqVRCEsNF6LrIkzgAb39QIiaRsc9M5jyo9vafUuvh5IBJi2KRr8HV2IbM%2F%2FHWIUQs7qnVf4uZmA7dpsqpXMDzJbW3FYeHPvUMrIHUI2nCYhXCNzi9G3K6E7ZEa1Q7ZDDETPNip33PQou4RAVLtooK8mqRM46pN%2BzbL%2Fz0Yfl2T8DhmaubqflWqCS84xoZ%2FbHcSO4SIz9lcaqPaYqW4tFl1fqu5fGpASciO2i2HVkgf3%2FIL6JnQ1I6hi%2BzPDmTMO%2F1UhVoXQdSr6W4mRde3fvQ%2FZceHficKosxIiSnZWFrHk%2BUjY5xWXVwP2aOgx9WPSKDxZlISK8Nzrs9YJWHaNPesBvkUsnjxG12O07UN7xUcjZOeW0Qhw92gkxBp76Gbdt9XqIonPuSm7uurC5MPCRdHsHbt1qRuYPggm4dzwTKL0nDr3ICaPb4xjjoqAxSZwZRHxn2LBJKroiFQZaqQkJ09cmqZHxeee3Iz13U1K5CvH8LYSgNSiQzUhc6yYHCddl75RDBGrXX7wvtGhdl%2FLFe%2BjI9JR8KRbmSPQqht2rkBMMCw58MGOqUBPYQZjAoyfJyOZz1lFQQ43IWiu4aCGwAslo4I8C6tyOjl%2Bl00k0Z3jtMaDJhShEbk9GNZlBsxJUlh3QpKIPQQ3eMNHV560mUAV1jX3z0UsyU6epF7HaoSBD%2BE27%2BZdekptk7ql8GvPKqxp02BlFgV8862DAdKU2RVUD8U4ecU2VhGI%2Ff%2F8QGs5tAf4M8v8kXFApv1%2FjAebNHqeoQWFOYIjcPNq6sM&X-Amz-Signature=23423133f5c3c26c623ea10ca13eaa5c3c27de32746b992b3b481404cffb31a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
