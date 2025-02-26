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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU2K4WW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF1wQXZYs%2FZBWSA02%2Fbdf9EpbV87ZVGMou59UWcv4qD7AiAwANFCNhGzO4OY7T4rwAArHRNCf0EeGT%2FkFAGhcodt8ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXsFkEqHfpdAufosTKtwDOlkPfWjSeXeFTH%2FexVBkoQp%2Be7wVQF6ZBFzyOiiCnZTeO67V5X95LxmdgWRx6S2d4Ld%2FXbqS8l%2B%2BSRlywWC2ZQGKi98T0tV7OnDrCRzq44r%2BY8VK%2BTIB7xsOqys97gSl%2FvWPe2AKFoN7vJaxZpOARYBGdE7luB%2FbnmmqmapjSFDmbQSXQRmtPk4AGrh9Q3%2Bhi2EtdTPrZirTWRYzyti%2FLx%2Be6GO45IZ%2Bae5hZFWVi1RVapBd3RyVA%2BK4HhbavDuEiOpMbAlpCbr3mMtDqm%2FngW40eCi8NUa6KN3YkETNa%2BMgyGiXDMG8Kldynw24Jsw8lbESrqnvMJ8hKA5jvQ50rSp8yocXc5Sh276f%2BM72fqNhQ%2B6A%2FiXNuIc5tTS0ZsB%2B0FE4ICqlkqLf3HPrhxK6wI3EUJl%2FTFPuHRIB1%2B8Jis3AAqY50%2FpyFh5bef3JMn%2BJ5djDIcuPMZ4RsOrKTa72zvYhwPsFyO%2FlnHurytKmgjPRMjIZSjM%2BmEE3vpqfn0Ja1xVCrDBB9xCD2grbSUORu%2FOEJfqDG9WxoUijElUvtqrsxJnxIjd9ANkQ3Ep6o1vI%2FSKNh3%2BG31G0f7kopbLOzntS53zEBYvMjoMAfjgFfjw84tk4YOquAiIrARowtrv%2BvQY6pgF2DZTr53pbEuu5n1eEtPk8Bc3ckZjhnGhHPTXH8XCZJUBC1GMK39E67td14CPAcZxrq3kqJm50F1q9MnoL%2BDsZ6LUKU6yPoz%2FB9QRaEdk2vrPt8iSo6JKX1vybZXQ7Lsp3fJQ9tFXOG6XcDproBj38Hy03yBj%2FMdlFR1t6DFUuoPzu8ETmPOWvZrzurKBfO9QBBEEtGCxaGqToDhE4UPbq5Fws1K29&X-Amz-Signature=9aa7eae346d7659538ad92974f11627140f259e1e1447cf98934faec98d783ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU2K4WW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF1wQXZYs%2FZBWSA02%2Fbdf9EpbV87ZVGMou59UWcv4qD7AiAwANFCNhGzO4OY7T4rwAArHRNCf0EeGT%2FkFAGhcodt8ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXsFkEqHfpdAufosTKtwDOlkPfWjSeXeFTH%2FexVBkoQp%2Be7wVQF6ZBFzyOiiCnZTeO67V5X95LxmdgWRx6S2d4Ld%2FXbqS8l%2B%2BSRlywWC2ZQGKi98T0tV7OnDrCRzq44r%2BY8VK%2BTIB7xsOqys97gSl%2FvWPe2AKFoN7vJaxZpOARYBGdE7luB%2FbnmmqmapjSFDmbQSXQRmtPk4AGrh9Q3%2Bhi2EtdTPrZirTWRYzyti%2FLx%2Be6GO45IZ%2Bae5hZFWVi1RVapBd3RyVA%2BK4HhbavDuEiOpMbAlpCbr3mMtDqm%2FngW40eCi8NUa6KN3YkETNa%2BMgyGiXDMG8Kldynw24Jsw8lbESrqnvMJ8hKA5jvQ50rSp8yocXc5Sh276f%2BM72fqNhQ%2B6A%2FiXNuIc5tTS0ZsB%2B0FE4ICqlkqLf3HPrhxK6wI3EUJl%2FTFPuHRIB1%2B8Jis3AAqY50%2FpyFh5bef3JMn%2BJ5djDIcuPMZ4RsOrKTa72zvYhwPsFyO%2FlnHurytKmgjPRMjIZSjM%2BmEE3vpqfn0Ja1xVCrDBB9xCD2grbSUORu%2FOEJfqDG9WxoUijElUvtqrsxJnxIjd9ANkQ3Ep6o1vI%2FSKNh3%2BG31G0f7kopbLOzntS53zEBYvMjoMAfjgFfjw84tk4YOquAiIrARowtrv%2BvQY6pgF2DZTr53pbEuu5n1eEtPk8Bc3ckZjhnGhHPTXH8XCZJUBC1GMK39E67td14CPAcZxrq3kqJm50F1q9MnoL%2BDsZ6LUKU6yPoz%2FB9QRaEdk2vrPt8iSo6JKX1vybZXQ7Lsp3fJQ9tFXOG6XcDproBj38Hy03yBj%2FMdlFR1t6DFUuoPzu8ETmPOWvZrzurKBfO9QBBEEtGCxaGqToDhE4UPbq5Fws1K29&X-Amz-Signature=d1e45a3dcd0d3d95c1c97d2eb37c8dac0809055d88038364352452382a432335&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU2K4WW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF1wQXZYs%2FZBWSA02%2Fbdf9EpbV87ZVGMou59UWcv4qD7AiAwANFCNhGzO4OY7T4rwAArHRNCf0EeGT%2FkFAGhcodt8ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXsFkEqHfpdAufosTKtwDOlkPfWjSeXeFTH%2FexVBkoQp%2Be7wVQF6ZBFzyOiiCnZTeO67V5X95LxmdgWRx6S2d4Ld%2FXbqS8l%2B%2BSRlywWC2ZQGKi98T0tV7OnDrCRzq44r%2BY8VK%2BTIB7xsOqys97gSl%2FvWPe2AKFoN7vJaxZpOARYBGdE7luB%2FbnmmqmapjSFDmbQSXQRmtPk4AGrh9Q3%2Bhi2EtdTPrZirTWRYzyti%2FLx%2Be6GO45IZ%2Bae5hZFWVi1RVapBd3RyVA%2BK4HhbavDuEiOpMbAlpCbr3mMtDqm%2FngW40eCi8NUa6KN3YkETNa%2BMgyGiXDMG8Kldynw24Jsw8lbESrqnvMJ8hKA5jvQ50rSp8yocXc5Sh276f%2BM72fqNhQ%2B6A%2FiXNuIc5tTS0ZsB%2B0FE4ICqlkqLf3HPrhxK6wI3EUJl%2FTFPuHRIB1%2B8Jis3AAqY50%2FpyFh5bef3JMn%2BJ5djDIcuPMZ4RsOrKTa72zvYhwPsFyO%2FlnHurytKmgjPRMjIZSjM%2BmEE3vpqfn0Ja1xVCrDBB9xCD2grbSUORu%2FOEJfqDG9WxoUijElUvtqrsxJnxIjd9ANkQ3Ep6o1vI%2FSKNh3%2BG31G0f7kopbLOzntS53zEBYvMjoMAfjgFfjw84tk4YOquAiIrARowtrv%2BvQY6pgF2DZTr53pbEuu5n1eEtPk8Bc3ckZjhnGhHPTXH8XCZJUBC1GMK39E67td14CPAcZxrq3kqJm50F1q9MnoL%2BDsZ6LUKU6yPoz%2FB9QRaEdk2vrPt8iSo6JKX1vybZXQ7Lsp3fJQ9tFXOG6XcDproBj38Hy03yBj%2FMdlFR1t6DFUuoPzu8ETmPOWvZrzurKBfO9QBBEEtGCxaGqToDhE4UPbq5Fws1K29&X-Amz-Signature=6cf34c25a81ca258b408d1c5962e891e1c98960d8f2eaa77a30f2947885f132d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU2K4WW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF1wQXZYs%2FZBWSA02%2Fbdf9EpbV87ZVGMou59UWcv4qD7AiAwANFCNhGzO4OY7T4rwAArHRNCf0EeGT%2FkFAGhcodt8ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXsFkEqHfpdAufosTKtwDOlkPfWjSeXeFTH%2FexVBkoQp%2Be7wVQF6ZBFzyOiiCnZTeO67V5X95LxmdgWRx6S2d4Ld%2FXbqS8l%2B%2BSRlywWC2ZQGKi98T0tV7OnDrCRzq44r%2BY8VK%2BTIB7xsOqys97gSl%2FvWPe2AKFoN7vJaxZpOARYBGdE7luB%2FbnmmqmapjSFDmbQSXQRmtPk4AGrh9Q3%2Bhi2EtdTPrZirTWRYzyti%2FLx%2Be6GO45IZ%2Bae5hZFWVi1RVapBd3RyVA%2BK4HhbavDuEiOpMbAlpCbr3mMtDqm%2FngW40eCi8NUa6KN3YkETNa%2BMgyGiXDMG8Kldynw24Jsw8lbESrqnvMJ8hKA5jvQ50rSp8yocXc5Sh276f%2BM72fqNhQ%2B6A%2FiXNuIc5tTS0ZsB%2B0FE4ICqlkqLf3HPrhxK6wI3EUJl%2FTFPuHRIB1%2B8Jis3AAqY50%2FpyFh5bef3JMn%2BJ5djDIcuPMZ4RsOrKTa72zvYhwPsFyO%2FlnHurytKmgjPRMjIZSjM%2BmEE3vpqfn0Ja1xVCrDBB9xCD2grbSUORu%2FOEJfqDG9WxoUijElUvtqrsxJnxIjd9ANkQ3Ep6o1vI%2FSKNh3%2BG31G0f7kopbLOzntS53zEBYvMjoMAfjgFfjw84tk4YOquAiIrARowtrv%2BvQY6pgF2DZTr53pbEuu5n1eEtPk8Bc3ckZjhnGhHPTXH8XCZJUBC1GMK39E67td14CPAcZxrq3kqJm50F1q9MnoL%2BDsZ6LUKU6yPoz%2FB9QRaEdk2vrPt8iSo6JKX1vybZXQ7Lsp3fJQ9tFXOG6XcDproBj38Hy03yBj%2FMdlFR1t6DFUuoPzu8ETmPOWvZrzurKBfO9QBBEEtGCxaGqToDhE4UPbq5Fws1K29&X-Amz-Signature=5305950f6446cf7b6e2d674d904fb4a492b22a25cbaca4d1d71375dfbe6cf2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU2K4WW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF1wQXZYs%2FZBWSA02%2Fbdf9EpbV87ZVGMou59UWcv4qD7AiAwANFCNhGzO4OY7T4rwAArHRNCf0EeGT%2FkFAGhcodt8ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXsFkEqHfpdAufosTKtwDOlkPfWjSeXeFTH%2FexVBkoQp%2Be7wVQF6ZBFzyOiiCnZTeO67V5X95LxmdgWRx6S2d4Ld%2FXbqS8l%2B%2BSRlywWC2ZQGKi98T0tV7OnDrCRzq44r%2BY8VK%2BTIB7xsOqys97gSl%2FvWPe2AKFoN7vJaxZpOARYBGdE7luB%2FbnmmqmapjSFDmbQSXQRmtPk4AGrh9Q3%2Bhi2EtdTPrZirTWRYzyti%2FLx%2Be6GO45IZ%2Bae5hZFWVi1RVapBd3RyVA%2BK4HhbavDuEiOpMbAlpCbr3mMtDqm%2FngW40eCi8NUa6KN3YkETNa%2BMgyGiXDMG8Kldynw24Jsw8lbESrqnvMJ8hKA5jvQ50rSp8yocXc5Sh276f%2BM72fqNhQ%2B6A%2FiXNuIc5tTS0ZsB%2B0FE4ICqlkqLf3HPrhxK6wI3EUJl%2FTFPuHRIB1%2B8Jis3AAqY50%2FpyFh5bef3JMn%2BJ5djDIcuPMZ4RsOrKTa72zvYhwPsFyO%2FlnHurytKmgjPRMjIZSjM%2BmEE3vpqfn0Ja1xVCrDBB9xCD2grbSUORu%2FOEJfqDG9WxoUijElUvtqrsxJnxIjd9ANkQ3Ep6o1vI%2FSKNh3%2BG31G0f7kopbLOzntS53zEBYvMjoMAfjgFfjw84tk4YOquAiIrARowtrv%2BvQY6pgF2DZTr53pbEuu5n1eEtPk8Bc3ckZjhnGhHPTXH8XCZJUBC1GMK39E67td14CPAcZxrq3kqJm50F1q9MnoL%2BDsZ6LUKU6yPoz%2FB9QRaEdk2vrPt8iSo6JKX1vybZXQ7Lsp3fJQ9tFXOG6XcDproBj38Hy03yBj%2FMdlFR1t6DFUuoPzu8ETmPOWvZrzurKBfO9QBBEEtGCxaGqToDhE4UPbq5Fws1K29&X-Amz-Signature=2f9eee246451688ae86a7c54e09efaaa8fcfe50069c077f08c1ed48cb66b0c68&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU2K4WW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF1wQXZYs%2FZBWSA02%2Fbdf9EpbV87ZVGMou59UWcv4qD7AiAwANFCNhGzO4OY7T4rwAArHRNCf0EeGT%2FkFAGhcodt8ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXsFkEqHfpdAufosTKtwDOlkPfWjSeXeFTH%2FexVBkoQp%2Be7wVQF6ZBFzyOiiCnZTeO67V5X95LxmdgWRx6S2d4Ld%2FXbqS8l%2B%2BSRlywWC2ZQGKi98T0tV7OnDrCRzq44r%2BY8VK%2BTIB7xsOqys97gSl%2FvWPe2AKFoN7vJaxZpOARYBGdE7luB%2FbnmmqmapjSFDmbQSXQRmtPk4AGrh9Q3%2Bhi2EtdTPrZirTWRYzyti%2FLx%2Be6GO45IZ%2Bae5hZFWVi1RVapBd3RyVA%2BK4HhbavDuEiOpMbAlpCbr3mMtDqm%2FngW40eCi8NUa6KN3YkETNa%2BMgyGiXDMG8Kldynw24Jsw8lbESrqnvMJ8hKA5jvQ50rSp8yocXc5Sh276f%2BM72fqNhQ%2B6A%2FiXNuIc5tTS0ZsB%2B0FE4ICqlkqLf3HPrhxK6wI3EUJl%2FTFPuHRIB1%2B8Jis3AAqY50%2FpyFh5bef3JMn%2BJ5djDIcuPMZ4RsOrKTa72zvYhwPsFyO%2FlnHurytKmgjPRMjIZSjM%2BmEE3vpqfn0Ja1xVCrDBB9xCD2grbSUORu%2FOEJfqDG9WxoUijElUvtqrsxJnxIjd9ANkQ3Ep6o1vI%2FSKNh3%2BG31G0f7kopbLOzntS53zEBYvMjoMAfjgFfjw84tk4YOquAiIrARowtrv%2BvQY6pgF2DZTr53pbEuu5n1eEtPk8Bc3ckZjhnGhHPTXH8XCZJUBC1GMK39E67td14CPAcZxrq3kqJm50F1q9MnoL%2BDsZ6LUKU6yPoz%2FB9QRaEdk2vrPt8iSo6JKX1vybZXQ7Lsp3fJQ9tFXOG6XcDproBj38Hy03yBj%2FMdlFR1t6DFUuoPzu8ETmPOWvZrzurKBfO9QBBEEtGCxaGqToDhE4UPbq5Fws1K29&X-Amz-Signature=7d3cd658efe36689f116af51f90dd2c0560ca97a7e661ee8002d848fb470e8d5&X-Amz-SignedHeaders=host&x-id=GetObject)
