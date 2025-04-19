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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XWIRBW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBLLvzZ3cPNyd7mqpoJ2420Ku4OTkds9MlOcbkGJav%2BMAiAtUB6haZR1pGqGj8nUdNd4E9YwofYGlnvvBNUnYjWNtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1r5h%2BBGGrIzak%2BpKtwDjwcaHLOGjm3mH%2FApTuIQZ7ygQN%2F9ZGT1kCtCgFP6oS5zL19EeaMigE0ag%2FVa9HaYOJ9TuSQm6sqOhNcqGQoto%2BY0LclOA6QfvxgIA7dvNh8fwv0GTXpcpLm11V0lMlSjkMitE6KudhUDsj2nXL067z79puCTnay1SeE%2FGuzB4nRnWvT%2BBxoXFYZzJ7nF2%2BIfzSAa8YQhNY33FlO8EnU8C3xHIF%2FaHjqYW1kjYG82c66s5kQDJJGt%2F4k98OK4KREcF29%2BU7%2BhGmpa94lxnkNbklmcNegHl6OpogcrMx%2FsmSuQQwwnVATOvCf1k4GqVxb9IxwiD6lNCxIWqREgTCa6T%2B7qCnkX8FLx98Mu%2F6C7P5daSFq3AsxQyposHkJOGH0Qa5LUXylopiqVafu1wP8NvLR3sFMQSFf0OGyIcXRspajOl0d6Zh0xGlf4uvxYQHt9WRT0gBlSL6z%2F%2Fq4n7mWvsVppL2rmvgpVVqLkTqKq7t3imUsHai0fZAJJSG9SEhE5iNsYc2IJyqjxI0sea3g0l3mj7iXsYDVPKOvFHmUCj0enFVHW%2BZ66LAxyDuqIrQMHnpxxHt%2Fp9bJuB8o0zeXeM%2BYbOHSkPMppAlAYJCX8VZ9Xp%2FxWg9xiPMFSc10wl6CPwAY6pgEAljiORSlIoy7OHgEXhui18cSG6HrWNuQ7nVWBWBrrlhKOMKRi6lhU1VegjOKhvV5wzVQJ8Z0n6j62oJV4Fow7cAxXiZH6Auqw14WrUR63v8MkxdN8Jx7BnmdTuIJCmRnlq3Eo39yo9avtkoMh6RKTNBXB%2BjzDQYRuexQ%2FcCTLElTO4uUhpR2ivqkuAad0MpFk0uYI5qnNFUJldxKgCnueliQmegQk&X-Amz-Signature=345a6ea3576021a32e82b7691eef52030fbac87a91e7be8fee5a0c0c12ab063d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XWIRBW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBLLvzZ3cPNyd7mqpoJ2420Ku4OTkds9MlOcbkGJav%2BMAiAtUB6haZR1pGqGj8nUdNd4E9YwofYGlnvvBNUnYjWNtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1r5h%2BBGGrIzak%2BpKtwDjwcaHLOGjm3mH%2FApTuIQZ7ygQN%2F9ZGT1kCtCgFP6oS5zL19EeaMigE0ag%2FVa9HaYOJ9TuSQm6sqOhNcqGQoto%2BY0LclOA6QfvxgIA7dvNh8fwv0GTXpcpLm11V0lMlSjkMitE6KudhUDsj2nXL067z79puCTnay1SeE%2FGuzB4nRnWvT%2BBxoXFYZzJ7nF2%2BIfzSAa8YQhNY33FlO8EnU8C3xHIF%2FaHjqYW1kjYG82c66s5kQDJJGt%2F4k98OK4KREcF29%2BU7%2BhGmpa94lxnkNbklmcNegHl6OpogcrMx%2FsmSuQQwwnVATOvCf1k4GqVxb9IxwiD6lNCxIWqREgTCa6T%2B7qCnkX8FLx98Mu%2F6C7P5daSFq3AsxQyposHkJOGH0Qa5LUXylopiqVafu1wP8NvLR3sFMQSFf0OGyIcXRspajOl0d6Zh0xGlf4uvxYQHt9WRT0gBlSL6z%2F%2Fq4n7mWvsVppL2rmvgpVVqLkTqKq7t3imUsHai0fZAJJSG9SEhE5iNsYc2IJyqjxI0sea3g0l3mj7iXsYDVPKOvFHmUCj0enFVHW%2BZ66LAxyDuqIrQMHnpxxHt%2Fp9bJuB8o0zeXeM%2BYbOHSkPMppAlAYJCX8VZ9Xp%2FxWg9xiPMFSc10wl6CPwAY6pgEAljiORSlIoy7OHgEXhui18cSG6HrWNuQ7nVWBWBrrlhKOMKRi6lhU1VegjOKhvV5wzVQJ8Z0n6j62oJV4Fow7cAxXiZH6Auqw14WrUR63v8MkxdN8Jx7BnmdTuIJCmRnlq3Eo39yo9avtkoMh6RKTNBXB%2BjzDQYRuexQ%2FcCTLElTO4uUhpR2ivqkuAad0MpFk0uYI5qnNFUJldxKgCnueliQmegQk&X-Amz-Signature=361c7a84c40073cfea62cf86be93b0bb9e60aadcd3ce4b3e4681384bd379cf8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XWIRBW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBLLvzZ3cPNyd7mqpoJ2420Ku4OTkds9MlOcbkGJav%2BMAiAtUB6haZR1pGqGj8nUdNd4E9YwofYGlnvvBNUnYjWNtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1r5h%2BBGGrIzak%2BpKtwDjwcaHLOGjm3mH%2FApTuIQZ7ygQN%2F9ZGT1kCtCgFP6oS5zL19EeaMigE0ag%2FVa9HaYOJ9TuSQm6sqOhNcqGQoto%2BY0LclOA6QfvxgIA7dvNh8fwv0GTXpcpLm11V0lMlSjkMitE6KudhUDsj2nXL067z79puCTnay1SeE%2FGuzB4nRnWvT%2BBxoXFYZzJ7nF2%2BIfzSAa8YQhNY33FlO8EnU8C3xHIF%2FaHjqYW1kjYG82c66s5kQDJJGt%2F4k98OK4KREcF29%2BU7%2BhGmpa94lxnkNbklmcNegHl6OpogcrMx%2FsmSuQQwwnVATOvCf1k4GqVxb9IxwiD6lNCxIWqREgTCa6T%2B7qCnkX8FLx98Mu%2F6C7P5daSFq3AsxQyposHkJOGH0Qa5LUXylopiqVafu1wP8NvLR3sFMQSFf0OGyIcXRspajOl0d6Zh0xGlf4uvxYQHt9WRT0gBlSL6z%2F%2Fq4n7mWvsVppL2rmvgpVVqLkTqKq7t3imUsHai0fZAJJSG9SEhE5iNsYc2IJyqjxI0sea3g0l3mj7iXsYDVPKOvFHmUCj0enFVHW%2BZ66LAxyDuqIrQMHnpxxHt%2Fp9bJuB8o0zeXeM%2BYbOHSkPMppAlAYJCX8VZ9Xp%2FxWg9xiPMFSc10wl6CPwAY6pgEAljiORSlIoy7OHgEXhui18cSG6HrWNuQ7nVWBWBrrlhKOMKRi6lhU1VegjOKhvV5wzVQJ8Z0n6j62oJV4Fow7cAxXiZH6Auqw14WrUR63v8MkxdN8Jx7BnmdTuIJCmRnlq3Eo39yo9avtkoMh6RKTNBXB%2BjzDQYRuexQ%2FcCTLElTO4uUhpR2ivqkuAad0MpFk0uYI5qnNFUJldxKgCnueliQmegQk&X-Amz-Signature=d3dbbf6c02c6d382e6e20a03c30664f9ae771b62f42ce26362006ac7e148be56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XWIRBW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBLLvzZ3cPNyd7mqpoJ2420Ku4OTkds9MlOcbkGJav%2BMAiAtUB6haZR1pGqGj8nUdNd4E9YwofYGlnvvBNUnYjWNtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1r5h%2BBGGrIzak%2BpKtwDjwcaHLOGjm3mH%2FApTuIQZ7ygQN%2F9ZGT1kCtCgFP6oS5zL19EeaMigE0ag%2FVa9HaYOJ9TuSQm6sqOhNcqGQoto%2BY0LclOA6QfvxgIA7dvNh8fwv0GTXpcpLm11V0lMlSjkMitE6KudhUDsj2nXL067z79puCTnay1SeE%2FGuzB4nRnWvT%2BBxoXFYZzJ7nF2%2BIfzSAa8YQhNY33FlO8EnU8C3xHIF%2FaHjqYW1kjYG82c66s5kQDJJGt%2F4k98OK4KREcF29%2BU7%2BhGmpa94lxnkNbklmcNegHl6OpogcrMx%2FsmSuQQwwnVATOvCf1k4GqVxb9IxwiD6lNCxIWqREgTCa6T%2B7qCnkX8FLx98Mu%2F6C7P5daSFq3AsxQyposHkJOGH0Qa5LUXylopiqVafu1wP8NvLR3sFMQSFf0OGyIcXRspajOl0d6Zh0xGlf4uvxYQHt9WRT0gBlSL6z%2F%2Fq4n7mWvsVppL2rmvgpVVqLkTqKq7t3imUsHai0fZAJJSG9SEhE5iNsYc2IJyqjxI0sea3g0l3mj7iXsYDVPKOvFHmUCj0enFVHW%2BZ66LAxyDuqIrQMHnpxxHt%2Fp9bJuB8o0zeXeM%2BYbOHSkPMppAlAYJCX8VZ9Xp%2FxWg9xiPMFSc10wl6CPwAY6pgEAljiORSlIoy7OHgEXhui18cSG6HrWNuQ7nVWBWBrrlhKOMKRi6lhU1VegjOKhvV5wzVQJ8Z0n6j62oJV4Fow7cAxXiZH6Auqw14WrUR63v8MkxdN8Jx7BnmdTuIJCmRnlq3Eo39yo9avtkoMh6RKTNBXB%2BjzDQYRuexQ%2FcCTLElTO4uUhpR2ivqkuAad0MpFk0uYI5qnNFUJldxKgCnueliQmegQk&X-Amz-Signature=ffd475d428e31ee1620425077be19260231eb1e06e00367571f71ab35889c7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XWIRBW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBLLvzZ3cPNyd7mqpoJ2420Ku4OTkds9MlOcbkGJav%2BMAiAtUB6haZR1pGqGj8nUdNd4E9YwofYGlnvvBNUnYjWNtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1r5h%2BBGGrIzak%2BpKtwDjwcaHLOGjm3mH%2FApTuIQZ7ygQN%2F9ZGT1kCtCgFP6oS5zL19EeaMigE0ag%2FVa9HaYOJ9TuSQm6sqOhNcqGQoto%2BY0LclOA6QfvxgIA7dvNh8fwv0GTXpcpLm11V0lMlSjkMitE6KudhUDsj2nXL067z79puCTnay1SeE%2FGuzB4nRnWvT%2BBxoXFYZzJ7nF2%2BIfzSAa8YQhNY33FlO8EnU8C3xHIF%2FaHjqYW1kjYG82c66s5kQDJJGt%2F4k98OK4KREcF29%2BU7%2BhGmpa94lxnkNbklmcNegHl6OpogcrMx%2FsmSuQQwwnVATOvCf1k4GqVxb9IxwiD6lNCxIWqREgTCa6T%2B7qCnkX8FLx98Mu%2F6C7P5daSFq3AsxQyposHkJOGH0Qa5LUXylopiqVafu1wP8NvLR3sFMQSFf0OGyIcXRspajOl0d6Zh0xGlf4uvxYQHt9WRT0gBlSL6z%2F%2Fq4n7mWvsVppL2rmvgpVVqLkTqKq7t3imUsHai0fZAJJSG9SEhE5iNsYc2IJyqjxI0sea3g0l3mj7iXsYDVPKOvFHmUCj0enFVHW%2BZ66LAxyDuqIrQMHnpxxHt%2Fp9bJuB8o0zeXeM%2BYbOHSkPMppAlAYJCX8VZ9Xp%2FxWg9xiPMFSc10wl6CPwAY6pgEAljiORSlIoy7OHgEXhui18cSG6HrWNuQ7nVWBWBrrlhKOMKRi6lhU1VegjOKhvV5wzVQJ8Z0n6j62oJV4Fow7cAxXiZH6Auqw14WrUR63v8MkxdN8Jx7BnmdTuIJCmRnlq3Eo39yo9avtkoMh6RKTNBXB%2BjzDQYRuexQ%2FcCTLElTO4uUhpR2ivqkuAad0MpFk0uYI5qnNFUJldxKgCnueliQmegQk&X-Amz-Signature=7989d32516e8a45687a3c32d8e1c4ca4743ebe67f5dbd5b4f102691d02ac9eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XWIRBW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBLLvzZ3cPNyd7mqpoJ2420Ku4OTkds9MlOcbkGJav%2BMAiAtUB6haZR1pGqGj8nUdNd4E9YwofYGlnvvBNUnYjWNtiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1r5h%2BBGGrIzak%2BpKtwDjwcaHLOGjm3mH%2FApTuIQZ7ygQN%2F9ZGT1kCtCgFP6oS5zL19EeaMigE0ag%2FVa9HaYOJ9TuSQm6sqOhNcqGQoto%2BY0LclOA6QfvxgIA7dvNh8fwv0GTXpcpLm11V0lMlSjkMitE6KudhUDsj2nXL067z79puCTnay1SeE%2FGuzB4nRnWvT%2BBxoXFYZzJ7nF2%2BIfzSAa8YQhNY33FlO8EnU8C3xHIF%2FaHjqYW1kjYG82c66s5kQDJJGt%2F4k98OK4KREcF29%2BU7%2BhGmpa94lxnkNbklmcNegHl6OpogcrMx%2FsmSuQQwwnVATOvCf1k4GqVxb9IxwiD6lNCxIWqREgTCa6T%2B7qCnkX8FLx98Mu%2F6C7P5daSFq3AsxQyposHkJOGH0Qa5LUXylopiqVafu1wP8NvLR3sFMQSFf0OGyIcXRspajOl0d6Zh0xGlf4uvxYQHt9WRT0gBlSL6z%2F%2Fq4n7mWvsVppL2rmvgpVVqLkTqKq7t3imUsHai0fZAJJSG9SEhE5iNsYc2IJyqjxI0sea3g0l3mj7iXsYDVPKOvFHmUCj0enFVHW%2BZ66LAxyDuqIrQMHnpxxHt%2Fp9bJuB8o0zeXeM%2BYbOHSkPMppAlAYJCX8VZ9Xp%2FxWg9xiPMFSc10wl6CPwAY6pgEAljiORSlIoy7OHgEXhui18cSG6HrWNuQ7nVWBWBrrlhKOMKRi6lhU1VegjOKhvV5wzVQJ8Z0n6j62oJV4Fow7cAxXiZH6Auqw14WrUR63v8MkxdN8Jx7BnmdTuIJCmRnlq3Eo39yo9avtkoMh6RKTNBXB%2BjzDQYRuexQ%2FcCTLElTO4uUhpR2ivqkuAad0MpFk0uYI5qnNFUJldxKgCnueliQmegQk&X-Amz-Signature=8c5f5b8d94476fcae427d95bdb2d24bc07fc5d6a36e7090c17496d19c8d4d192&X-Amz-SignedHeaders=host&x-id=GetObject)
