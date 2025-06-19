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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGUDEBM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGv8RTR28FBYszm2hPfNoof2xE4s4KtAmEo2KD48zFcAIhAOKG8kStK6uKWYDIJETJxgC9C%2FBSO%2Br%2Fubqi9Tu%2BVvPTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83dJwvI%2FNP%2BZ8hn8q3AP30ccxbN613OTNWK1IckP4r1vUiBiBUkGtP6OQIW%2Bvoti1sDUe9nmoaFe6B24UBwXV7sKY%2BAucHqnUsGtxVZSREZXSPuesaSQp9vQ%2BRDmV3fmkGuvPXSoFnVAPGSkuJuzQVKUS6rPS%2FVhEeit4zxFRYco6%2B02P9DxrRKjNHl909ChqzJYnnQzw9HetQ2J6rF1BAqpcRYX7jkTfSPPl6m9Sr%2BFOLDdqSeV1x04I3v0x44BfA53VhhXNTcBzu8wSnNjkW261omE29owwHDoeQE5JZ70sAI%2B%2FkwMZyGMscXJAXRjJYQDH%2F%2Bx%2BAWxgmBuO%2Bu13zBStQnh783uqsldqUF8iXY0AcdXEvfhjx7FmGzRqns%2BKT2OSL6FV6GIdTYIL5fcKv2JVh5RTGzq%2FMEvbcir6LK2FQhqwbE6dzGvo6Fis5MggjbL6iNNp6w4OJiV2uFFuAFjcUt4gk0kTsTLE2%2Bt9m11gmOCooj3Psr8hYAxXjFh82T4xxwv9ZaL4nhKybysHTeIPUvfDusdxAIJUkWKeMOjLD0hdz5%2FQfj6nvZ2Mv3A3kIJPankCPuPbmYAb4Nv5tktIGjVYdAd%2FDj2gJss%2FZmjU%2BWCxUQKQMg0zz6rSmix8Uu5Lsddw9Jh2FjDFtM7CBjqkAa1vNAk1fQAlgKBWhpY%2FJeFqz7Ek7Hiat34C0eyCYPz8GjS510L1auyG%2FKKnL2CTxtsKpu7VbQLEbSLXSbbdfyrv1840UkUzBSX8I1jIKzWL1mMtL7Id0zj%2BzvIMJQXMa4veBSRc%2FME0SKGNj52wwpLifmVPhdIaHrUFE9n2gZqt34zXQOBPQbBolsxhSTvHZAWI8Jd5zUZPklluffnzUf%2BWq5V9&X-Amz-Signature=83f7ff0711f24c16d644e1c929008db44f1ccf01cee4defc741453078e66f116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGUDEBM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGv8RTR28FBYszm2hPfNoof2xE4s4KtAmEo2KD48zFcAIhAOKG8kStK6uKWYDIJETJxgC9C%2FBSO%2Br%2Fubqi9Tu%2BVvPTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83dJwvI%2FNP%2BZ8hn8q3AP30ccxbN613OTNWK1IckP4r1vUiBiBUkGtP6OQIW%2Bvoti1sDUe9nmoaFe6B24UBwXV7sKY%2BAucHqnUsGtxVZSREZXSPuesaSQp9vQ%2BRDmV3fmkGuvPXSoFnVAPGSkuJuzQVKUS6rPS%2FVhEeit4zxFRYco6%2B02P9DxrRKjNHl909ChqzJYnnQzw9HetQ2J6rF1BAqpcRYX7jkTfSPPl6m9Sr%2BFOLDdqSeV1x04I3v0x44BfA53VhhXNTcBzu8wSnNjkW261omE29owwHDoeQE5JZ70sAI%2B%2FkwMZyGMscXJAXRjJYQDH%2F%2Bx%2BAWxgmBuO%2Bu13zBStQnh783uqsldqUF8iXY0AcdXEvfhjx7FmGzRqns%2BKT2OSL6FV6GIdTYIL5fcKv2JVh5RTGzq%2FMEvbcir6LK2FQhqwbE6dzGvo6Fis5MggjbL6iNNp6w4OJiV2uFFuAFjcUt4gk0kTsTLE2%2Bt9m11gmOCooj3Psr8hYAxXjFh82T4xxwv9ZaL4nhKybysHTeIPUvfDusdxAIJUkWKeMOjLD0hdz5%2FQfj6nvZ2Mv3A3kIJPankCPuPbmYAb4Nv5tktIGjVYdAd%2FDj2gJss%2FZmjU%2BWCxUQKQMg0zz6rSmix8Uu5Lsddw9Jh2FjDFtM7CBjqkAa1vNAk1fQAlgKBWhpY%2FJeFqz7Ek7Hiat34C0eyCYPz8GjS510L1auyG%2FKKnL2CTxtsKpu7VbQLEbSLXSbbdfyrv1840UkUzBSX8I1jIKzWL1mMtL7Id0zj%2BzvIMJQXMa4veBSRc%2FME0SKGNj52wwpLifmVPhdIaHrUFE9n2gZqt34zXQOBPQbBolsxhSTvHZAWI8Jd5zUZPklluffnzUf%2BWq5V9&X-Amz-Signature=88c1cff466e68cbf73f5169084e21192ed0565f6c5b41d7911a43de4e27bc427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGUDEBM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGv8RTR28FBYszm2hPfNoof2xE4s4KtAmEo2KD48zFcAIhAOKG8kStK6uKWYDIJETJxgC9C%2FBSO%2Br%2Fubqi9Tu%2BVvPTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83dJwvI%2FNP%2BZ8hn8q3AP30ccxbN613OTNWK1IckP4r1vUiBiBUkGtP6OQIW%2Bvoti1sDUe9nmoaFe6B24UBwXV7sKY%2BAucHqnUsGtxVZSREZXSPuesaSQp9vQ%2BRDmV3fmkGuvPXSoFnVAPGSkuJuzQVKUS6rPS%2FVhEeit4zxFRYco6%2B02P9DxrRKjNHl909ChqzJYnnQzw9HetQ2J6rF1BAqpcRYX7jkTfSPPl6m9Sr%2BFOLDdqSeV1x04I3v0x44BfA53VhhXNTcBzu8wSnNjkW261omE29owwHDoeQE5JZ70sAI%2B%2FkwMZyGMscXJAXRjJYQDH%2F%2Bx%2BAWxgmBuO%2Bu13zBStQnh783uqsldqUF8iXY0AcdXEvfhjx7FmGzRqns%2BKT2OSL6FV6GIdTYIL5fcKv2JVh5RTGzq%2FMEvbcir6LK2FQhqwbE6dzGvo6Fis5MggjbL6iNNp6w4OJiV2uFFuAFjcUt4gk0kTsTLE2%2Bt9m11gmOCooj3Psr8hYAxXjFh82T4xxwv9ZaL4nhKybysHTeIPUvfDusdxAIJUkWKeMOjLD0hdz5%2FQfj6nvZ2Mv3A3kIJPankCPuPbmYAb4Nv5tktIGjVYdAd%2FDj2gJss%2FZmjU%2BWCxUQKQMg0zz6rSmix8Uu5Lsddw9Jh2FjDFtM7CBjqkAa1vNAk1fQAlgKBWhpY%2FJeFqz7Ek7Hiat34C0eyCYPz8GjS510L1auyG%2FKKnL2CTxtsKpu7VbQLEbSLXSbbdfyrv1840UkUzBSX8I1jIKzWL1mMtL7Id0zj%2BzvIMJQXMa4veBSRc%2FME0SKGNj52wwpLifmVPhdIaHrUFE9n2gZqt34zXQOBPQbBolsxhSTvHZAWI8Jd5zUZPklluffnzUf%2BWq5V9&X-Amz-Signature=dc7a4f5cc7143aefefb2642df9801b490b363e338a89edbcc5047c76d9cb2ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGUDEBM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGv8RTR28FBYszm2hPfNoof2xE4s4KtAmEo2KD48zFcAIhAOKG8kStK6uKWYDIJETJxgC9C%2FBSO%2Br%2Fubqi9Tu%2BVvPTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83dJwvI%2FNP%2BZ8hn8q3AP30ccxbN613OTNWK1IckP4r1vUiBiBUkGtP6OQIW%2Bvoti1sDUe9nmoaFe6B24UBwXV7sKY%2BAucHqnUsGtxVZSREZXSPuesaSQp9vQ%2BRDmV3fmkGuvPXSoFnVAPGSkuJuzQVKUS6rPS%2FVhEeit4zxFRYco6%2B02P9DxrRKjNHl909ChqzJYnnQzw9HetQ2J6rF1BAqpcRYX7jkTfSPPl6m9Sr%2BFOLDdqSeV1x04I3v0x44BfA53VhhXNTcBzu8wSnNjkW261omE29owwHDoeQE5JZ70sAI%2B%2FkwMZyGMscXJAXRjJYQDH%2F%2Bx%2BAWxgmBuO%2Bu13zBStQnh783uqsldqUF8iXY0AcdXEvfhjx7FmGzRqns%2BKT2OSL6FV6GIdTYIL5fcKv2JVh5RTGzq%2FMEvbcir6LK2FQhqwbE6dzGvo6Fis5MggjbL6iNNp6w4OJiV2uFFuAFjcUt4gk0kTsTLE2%2Bt9m11gmOCooj3Psr8hYAxXjFh82T4xxwv9ZaL4nhKybysHTeIPUvfDusdxAIJUkWKeMOjLD0hdz5%2FQfj6nvZ2Mv3A3kIJPankCPuPbmYAb4Nv5tktIGjVYdAd%2FDj2gJss%2FZmjU%2BWCxUQKQMg0zz6rSmix8Uu5Lsddw9Jh2FjDFtM7CBjqkAa1vNAk1fQAlgKBWhpY%2FJeFqz7Ek7Hiat34C0eyCYPz8GjS510L1auyG%2FKKnL2CTxtsKpu7VbQLEbSLXSbbdfyrv1840UkUzBSX8I1jIKzWL1mMtL7Id0zj%2BzvIMJQXMa4veBSRc%2FME0SKGNj52wwpLifmVPhdIaHrUFE9n2gZqt34zXQOBPQbBolsxhSTvHZAWI8Jd5zUZPklluffnzUf%2BWq5V9&X-Amz-Signature=39f9bd3ff8cf2e4bc43141f2d271e20e06b6a3dc23c0fdb9ccfc59e824892a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGUDEBM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGv8RTR28FBYszm2hPfNoof2xE4s4KtAmEo2KD48zFcAIhAOKG8kStK6uKWYDIJETJxgC9C%2FBSO%2Br%2Fubqi9Tu%2BVvPTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83dJwvI%2FNP%2BZ8hn8q3AP30ccxbN613OTNWK1IckP4r1vUiBiBUkGtP6OQIW%2Bvoti1sDUe9nmoaFe6B24UBwXV7sKY%2BAucHqnUsGtxVZSREZXSPuesaSQp9vQ%2BRDmV3fmkGuvPXSoFnVAPGSkuJuzQVKUS6rPS%2FVhEeit4zxFRYco6%2B02P9DxrRKjNHl909ChqzJYnnQzw9HetQ2J6rF1BAqpcRYX7jkTfSPPl6m9Sr%2BFOLDdqSeV1x04I3v0x44BfA53VhhXNTcBzu8wSnNjkW261omE29owwHDoeQE5JZ70sAI%2B%2FkwMZyGMscXJAXRjJYQDH%2F%2Bx%2BAWxgmBuO%2Bu13zBStQnh783uqsldqUF8iXY0AcdXEvfhjx7FmGzRqns%2BKT2OSL6FV6GIdTYIL5fcKv2JVh5RTGzq%2FMEvbcir6LK2FQhqwbE6dzGvo6Fis5MggjbL6iNNp6w4OJiV2uFFuAFjcUt4gk0kTsTLE2%2Bt9m11gmOCooj3Psr8hYAxXjFh82T4xxwv9ZaL4nhKybysHTeIPUvfDusdxAIJUkWKeMOjLD0hdz5%2FQfj6nvZ2Mv3A3kIJPankCPuPbmYAb4Nv5tktIGjVYdAd%2FDj2gJss%2FZmjU%2BWCxUQKQMg0zz6rSmix8Uu5Lsddw9Jh2FjDFtM7CBjqkAa1vNAk1fQAlgKBWhpY%2FJeFqz7Ek7Hiat34C0eyCYPz8GjS510L1auyG%2FKKnL2CTxtsKpu7VbQLEbSLXSbbdfyrv1840UkUzBSX8I1jIKzWL1mMtL7Id0zj%2BzvIMJQXMa4veBSRc%2FME0SKGNj52wwpLifmVPhdIaHrUFE9n2gZqt34zXQOBPQbBolsxhSTvHZAWI8Jd5zUZPklluffnzUf%2BWq5V9&X-Amz-Signature=fb158fe227e20889f32438520f0c35ab3d75bfb20da6872b6ca285dcaff19b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGUDEBM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGv8RTR28FBYszm2hPfNoof2xE4s4KtAmEo2KD48zFcAIhAOKG8kStK6uKWYDIJETJxgC9C%2FBSO%2Br%2Fubqi9Tu%2BVvPTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83dJwvI%2FNP%2BZ8hn8q3AP30ccxbN613OTNWK1IckP4r1vUiBiBUkGtP6OQIW%2Bvoti1sDUe9nmoaFe6B24UBwXV7sKY%2BAucHqnUsGtxVZSREZXSPuesaSQp9vQ%2BRDmV3fmkGuvPXSoFnVAPGSkuJuzQVKUS6rPS%2FVhEeit4zxFRYco6%2B02P9DxrRKjNHl909ChqzJYnnQzw9HetQ2J6rF1BAqpcRYX7jkTfSPPl6m9Sr%2BFOLDdqSeV1x04I3v0x44BfA53VhhXNTcBzu8wSnNjkW261omE29owwHDoeQE5JZ70sAI%2B%2FkwMZyGMscXJAXRjJYQDH%2F%2Bx%2BAWxgmBuO%2Bu13zBStQnh783uqsldqUF8iXY0AcdXEvfhjx7FmGzRqns%2BKT2OSL6FV6GIdTYIL5fcKv2JVh5RTGzq%2FMEvbcir6LK2FQhqwbE6dzGvo6Fis5MggjbL6iNNp6w4OJiV2uFFuAFjcUt4gk0kTsTLE2%2Bt9m11gmOCooj3Psr8hYAxXjFh82T4xxwv9ZaL4nhKybysHTeIPUvfDusdxAIJUkWKeMOjLD0hdz5%2FQfj6nvZ2Mv3A3kIJPankCPuPbmYAb4Nv5tktIGjVYdAd%2FDj2gJss%2FZmjU%2BWCxUQKQMg0zz6rSmix8Uu5Lsddw9Jh2FjDFtM7CBjqkAa1vNAk1fQAlgKBWhpY%2FJeFqz7Ek7Hiat34C0eyCYPz8GjS510L1auyG%2FKKnL2CTxtsKpu7VbQLEbSLXSbbdfyrv1840UkUzBSX8I1jIKzWL1mMtL7Id0zj%2BzvIMJQXMa4veBSRc%2FME0SKGNj52wwpLifmVPhdIaHrUFE9n2gZqt34zXQOBPQbBolsxhSTvHZAWI8Jd5zUZPklluffnzUf%2BWq5V9&X-Amz-Signature=3e8753de2e01af8894c6f9d1b089df541a9c6e2ef1fbce2f6a316178fbb1d9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
