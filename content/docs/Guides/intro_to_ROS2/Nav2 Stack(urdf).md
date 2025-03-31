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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJVNKDA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICO0MGsH6DxHoJEoCWev4Orxs81Wnkgs6du49UelFemHAiBu%2B%2FGp2VuiDQ6MpcCHvq3wEN9IlmXZMWF2mJJqrkhcUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8wnWUAvc6MWcIu4KtwDPA8O3bZFDwKPYt24G1FJujDIuaXlHl5bMXuoPL7M2DzYPGRHX6X8ZQopGsSPSm8oYTsjbDKtfY9ZjhV56FKrjVTcvu6SlgQF7Dx%2BOut%2FnRCplRyeO0gxSldFafvCnNpKAujkPZJuu3Dj1WR7FBjrqu3WOGntN%2FGtYNPJAdMV20UeQ0XeOeD764yRc2B12TPTJ3Riq%2FwBgQWdAF5REgCalVJHP1qmCgA8rjmeLtGnkdKI7aaSz4N7Hm1E%2BguRr4GZJa%2BSgQK%2FwEUP%2Fb0Nd9RN8mKS83dULtlauKPnt4mueNKxPGtkrygMqXbC6q5Ng%2FP8Gnxv%2FFKY7N%2Bo2NFzhyf3ZLzhG1GLhogzdGfRd5RuiEeIIw9wwSOaR%2BlEF3x3Qyz1t0z58OxOURAuKGTE8OA6gvmA2NyYx2FhDgqhF%2FEug%2FFWrehWG63H34UV%2FoH4FdVGalhUK0XVJvYLGHtrZUpVH5nucGGObqVj%2FAOOj7JvJ5TiAR3ymlf3dNrtwhTb%2BwS5O94jajZr5NFtylrGOmOThhUdttB6ysBpq5hnDCP2Wj1%2FNsO4A7yvu%2FUu%2BM0bpr1p04dqfTIshMkhYxLtqmZ3D34CVdC1ooYcJ5OeqD0tHqu8wRb0j2YJmNiYrUcw9pSovwY6pgFzxN3Z1JO%2BufWB85VckhF4WthgCS1IIMjkPLBfW8AikZDoHRC6qFm8X8y13ZS%2BnRu3UsfHQjNMO6%2Bi2J50IgP0VJPTHfdXXpD8%2FQNHbTtNcG70PNzacYjar%2Bjs2wTKuGq2s7KNeSM1AB8mmgVcXTD4qmgdzhYKXqiiK82HD5qGlg83Gte9cEtX7Cm81PBdF5OLQSWF6z8LRLLtdsDnm7D6tC37g7yo&X-Amz-Signature=d8315c0d4b874a979648af8a14bc47ceeb7c28878e531bd7af6b65908ed4a953&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJVNKDA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICO0MGsH6DxHoJEoCWev4Orxs81Wnkgs6du49UelFemHAiBu%2B%2FGp2VuiDQ6MpcCHvq3wEN9IlmXZMWF2mJJqrkhcUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8wnWUAvc6MWcIu4KtwDPA8O3bZFDwKPYt24G1FJujDIuaXlHl5bMXuoPL7M2DzYPGRHX6X8ZQopGsSPSm8oYTsjbDKtfY9ZjhV56FKrjVTcvu6SlgQF7Dx%2BOut%2FnRCplRyeO0gxSldFafvCnNpKAujkPZJuu3Dj1WR7FBjrqu3WOGntN%2FGtYNPJAdMV20UeQ0XeOeD764yRc2B12TPTJ3Riq%2FwBgQWdAF5REgCalVJHP1qmCgA8rjmeLtGnkdKI7aaSz4N7Hm1E%2BguRr4GZJa%2BSgQK%2FwEUP%2Fb0Nd9RN8mKS83dULtlauKPnt4mueNKxPGtkrygMqXbC6q5Ng%2FP8Gnxv%2FFKY7N%2Bo2NFzhyf3ZLzhG1GLhogzdGfRd5RuiEeIIw9wwSOaR%2BlEF3x3Qyz1t0z58OxOURAuKGTE8OA6gvmA2NyYx2FhDgqhF%2FEug%2FFWrehWG63H34UV%2FoH4FdVGalhUK0XVJvYLGHtrZUpVH5nucGGObqVj%2FAOOj7JvJ5TiAR3ymlf3dNrtwhTb%2BwS5O94jajZr5NFtylrGOmOThhUdttB6ysBpq5hnDCP2Wj1%2FNsO4A7yvu%2FUu%2BM0bpr1p04dqfTIshMkhYxLtqmZ3D34CVdC1ooYcJ5OeqD0tHqu8wRb0j2YJmNiYrUcw9pSovwY6pgFzxN3Z1JO%2BufWB85VckhF4WthgCS1IIMjkPLBfW8AikZDoHRC6qFm8X8y13ZS%2BnRu3UsfHQjNMO6%2Bi2J50IgP0VJPTHfdXXpD8%2FQNHbTtNcG70PNzacYjar%2Bjs2wTKuGq2s7KNeSM1AB8mmgVcXTD4qmgdzhYKXqiiK82HD5qGlg83Gte9cEtX7Cm81PBdF5OLQSWF6z8LRLLtdsDnm7D6tC37g7yo&X-Amz-Signature=4e7f0c83f1f5eefdddd9806200dc193c0451e5686fb2659abfd925966fa3ce4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJVNKDA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICO0MGsH6DxHoJEoCWev4Orxs81Wnkgs6du49UelFemHAiBu%2B%2FGp2VuiDQ6MpcCHvq3wEN9IlmXZMWF2mJJqrkhcUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8wnWUAvc6MWcIu4KtwDPA8O3bZFDwKPYt24G1FJujDIuaXlHl5bMXuoPL7M2DzYPGRHX6X8ZQopGsSPSm8oYTsjbDKtfY9ZjhV56FKrjVTcvu6SlgQF7Dx%2BOut%2FnRCplRyeO0gxSldFafvCnNpKAujkPZJuu3Dj1WR7FBjrqu3WOGntN%2FGtYNPJAdMV20UeQ0XeOeD764yRc2B12TPTJ3Riq%2FwBgQWdAF5REgCalVJHP1qmCgA8rjmeLtGnkdKI7aaSz4N7Hm1E%2BguRr4GZJa%2BSgQK%2FwEUP%2Fb0Nd9RN8mKS83dULtlauKPnt4mueNKxPGtkrygMqXbC6q5Ng%2FP8Gnxv%2FFKY7N%2Bo2NFzhyf3ZLzhG1GLhogzdGfRd5RuiEeIIw9wwSOaR%2BlEF3x3Qyz1t0z58OxOURAuKGTE8OA6gvmA2NyYx2FhDgqhF%2FEug%2FFWrehWG63H34UV%2FoH4FdVGalhUK0XVJvYLGHtrZUpVH5nucGGObqVj%2FAOOj7JvJ5TiAR3ymlf3dNrtwhTb%2BwS5O94jajZr5NFtylrGOmOThhUdttB6ysBpq5hnDCP2Wj1%2FNsO4A7yvu%2FUu%2BM0bpr1p04dqfTIshMkhYxLtqmZ3D34CVdC1ooYcJ5OeqD0tHqu8wRb0j2YJmNiYrUcw9pSovwY6pgFzxN3Z1JO%2BufWB85VckhF4WthgCS1IIMjkPLBfW8AikZDoHRC6qFm8X8y13ZS%2BnRu3UsfHQjNMO6%2Bi2J50IgP0VJPTHfdXXpD8%2FQNHbTtNcG70PNzacYjar%2Bjs2wTKuGq2s7KNeSM1AB8mmgVcXTD4qmgdzhYKXqiiK82HD5qGlg83Gte9cEtX7Cm81PBdF5OLQSWF6z8LRLLtdsDnm7D6tC37g7yo&X-Amz-Signature=1a62ed4de7484e22fd1739b816f8aa93bb87a784e895cc183355a0de269e88fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJVNKDA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICO0MGsH6DxHoJEoCWev4Orxs81Wnkgs6du49UelFemHAiBu%2B%2FGp2VuiDQ6MpcCHvq3wEN9IlmXZMWF2mJJqrkhcUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8wnWUAvc6MWcIu4KtwDPA8O3bZFDwKPYt24G1FJujDIuaXlHl5bMXuoPL7M2DzYPGRHX6X8ZQopGsSPSm8oYTsjbDKtfY9ZjhV56FKrjVTcvu6SlgQF7Dx%2BOut%2FnRCplRyeO0gxSldFafvCnNpKAujkPZJuu3Dj1WR7FBjrqu3WOGntN%2FGtYNPJAdMV20UeQ0XeOeD764yRc2B12TPTJ3Riq%2FwBgQWdAF5REgCalVJHP1qmCgA8rjmeLtGnkdKI7aaSz4N7Hm1E%2BguRr4GZJa%2BSgQK%2FwEUP%2Fb0Nd9RN8mKS83dULtlauKPnt4mueNKxPGtkrygMqXbC6q5Ng%2FP8Gnxv%2FFKY7N%2Bo2NFzhyf3ZLzhG1GLhogzdGfRd5RuiEeIIw9wwSOaR%2BlEF3x3Qyz1t0z58OxOURAuKGTE8OA6gvmA2NyYx2FhDgqhF%2FEug%2FFWrehWG63H34UV%2FoH4FdVGalhUK0XVJvYLGHtrZUpVH5nucGGObqVj%2FAOOj7JvJ5TiAR3ymlf3dNrtwhTb%2BwS5O94jajZr5NFtylrGOmOThhUdttB6ysBpq5hnDCP2Wj1%2FNsO4A7yvu%2FUu%2BM0bpr1p04dqfTIshMkhYxLtqmZ3D34CVdC1ooYcJ5OeqD0tHqu8wRb0j2YJmNiYrUcw9pSovwY6pgFzxN3Z1JO%2BufWB85VckhF4WthgCS1IIMjkPLBfW8AikZDoHRC6qFm8X8y13ZS%2BnRu3UsfHQjNMO6%2Bi2J50IgP0VJPTHfdXXpD8%2FQNHbTtNcG70PNzacYjar%2Bjs2wTKuGq2s7KNeSM1AB8mmgVcXTD4qmgdzhYKXqiiK82HD5qGlg83Gte9cEtX7Cm81PBdF5OLQSWF6z8LRLLtdsDnm7D6tC37g7yo&X-Amz-Signature=c8595c9aa9a1fc9e7971dcfbf94707ade01fa16544d8ccb89861b5a89fd76bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJVNKDA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICO0MGsH6DxHoJEoCWev4Orxs81Wnkgs6du49UelFemHAiBu%2B%2FGp2VuiDQ6MpcCHvq3wEN9IlmXZMWF2mJJqrkhcUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8wnWUAvc6MWcIu4KtwDPA8O3bZFDwKPYt24G1FJujDIuaXlHl5bMXuoPL7M2DzYPGRHX6X8ZQopGsSPSm8oYTsjbDKtfY9ZjhV56FKrjVTcvu6SlgQF7Dx%2BOut%2FnRCplRyeO0gxSldFafvCnNpKAujkPZJuu3Dj1WR7FBjrqu3WOGntN%2FGtYNPJAdMV20UeQ0XeOeD764yRc2B12TPTJ3Riq%2FwBgQWdAF5REgCalVJHP1qmCgA8rjmeLtGnkdKI7aaSz4N7Hm1E%2BguRr4GZJa%2BSgQK%2FwEUP%2Fb0Nd9RN8mKS83dULtlauKPnt4mueNKxPGtkrygMqXbC6q5Ng%2FP8Gnxv%2FFKY7N%2Bo2NFzhyf3ZLzhG1GLhogzdGfRd5RuiEeIIw9wwSOaR%2BlEF3x3Qyz1t0z58OxOURAuKGTE8OA6gvmA2NyYx2FhDgqhF%2FEug%2FFWrehWG63H34UV%2FoH4FdVGalhUK0XVJvYLGHtrZUpVH5nucGGObqVj%2FAOOj7JvJ5TiAR3ymlf3dNrtwhTb%2BwS5O94jajZr5NFtylrGOmOThhUdttB6ysBpq5hnDCP2Wj1%2FNsO4A7yvu%2FUu%2BM0bpr1p04dqfTIshMkhYxLtqmZ3D34CVdC1ooYcJ5OeqD0tHqu8wRb0j2YJmNiYrUcw9pSovwY6pgFzxN3Z1JO%2BufWB85VckhF4WthgCS1IIMjkPLBfW8AikZDoHRC6qFm8X8y13ZS%2BnRu3UsfHQjNMO6%2Bi2J50IgP0VJPTHfdXXpD8%2FQNHbTtNcG70PNzacYjar%2Bjs2wTKuGq2s7KNeSM1AB8mmgVcXTD4qmgdzhYKXqiiK82HD5qGlg83Gte9cEtX7Cm81PBdF5OLQSWF6z8LRLLtdsDnm7D6tC37g7yo&X-Amz-Signature=1b772e2c2556a00547aa12ba01fbf6442729a7d45a25b3d947217a9a125b726b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJVNKDA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICO0MGsH6DxHoJEoCWev4Orxs81Wnkgs6du49UelFemHAiBu%2B%2FGp2VuiDQ6MpcCHvq3wEN9IlmXZMWF2mJJqrkhcUCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8wnWUAvc6MWcIu4KtwDPA8O3bZFDwKPYt24G1FJujDIuaXlHl5bMXuoPL7M2DzYPGRHX6X8ZQopGsSPSm8oYTsjbDKtfY9ZjhV56FKrjVTcvu6SlgQF7Dx%2BOut%2FnRCplRyeO0gxSldFafvCnNpKAujkPZJuu3Dj1WR7FBjrqu3WOGntN%2FGtYNPJAdMV20UeQ0XeOeD764yRc2B12TPTJ3Riq%2FwBgQWdAF5REgCalVJHP1qmCgA8rjmeLtGnkdKI7aaSz4N7Hm1E%2BguRr4GZJa%2BSgQK%2FwEUP%2Fb0Nd9RN8mKS83dULtlauKPnt4mueNKxPGtkrygMqXbC6q5Ng%2FP8Gnxv%2FFKY7N%2Bo2NFzhyf3ZLzhG1GLhogzdGfRd5RuiEeIIw9wwSOaR%2BlEF3x3Qyz1t0z58OxOURAuKGTE8OA6gvmA2NyYx2FhDgqhF%2FEug%2FFWrehWG63H34UV%2FoH4FdVGalhUK0XVJvYLGHtrZUpVH5nucGGObqVj%2FAOOj7JvJ5TiAR3ymlf3dNrtwhTb%2BwS5O94jajZr5NFtylrGOmOThhUdttB6ysBpq5hnDCP2Wj1%2FNsO4A7yvu%2FUu%2BM0bpr1p04dqfTIshMkhYxLtqmZ3D34CVdC1ooYcJ5OeqD0tHqu8wRb0j2YJmNiYrUcw9pSovwY6pgFzxN3Z1JO%2BufWB85VckhF4WthgCS1IIMjkPLBfW8AikZDoHRC6qFm8X8y13ZS%2BnRu3UsfHQjNMO6%2Bi2J50IgP0VJPTHfdXXpD8%2FQNHbTtNcG70PNzacYjar%2Bjs2wTKuGq2s7KNeSM1AB8mmgVcXTD4qmgdzhYKXqiiK82HD5qGlg83Gte9cEtX7Cm81PBdF5OLQSWF6z8LRLLtdsDnm7D6tC37g7yo&X-Amz-Signature=33a5d0816423346997c8d2df0dbbcc48abf77247629921dab8a6ba9d22a11993&X-Amz-SignedHeaders=host&x-id=GetObject)
