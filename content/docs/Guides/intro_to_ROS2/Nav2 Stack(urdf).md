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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU4LVWR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHHyBXIu44OsGSyJd66Jrx%2F7SsFzUkJhSesw3oGmox3kAiAir7BgaCtPkmoo34SkOuTb2ngpt3OqQBYFDMmvJlnvJSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFcqyGDFG0al%2BNlq4KtwDc09aMvcBDjOd9oFDiySzOa7HP6HSxlCUQkewdie1EhmwrspER%2BnPKSXMRp4am0QqXU45t3wbxcGQGtq4hl5o7LCdHt451MBNUQGuQIDurNasRQZnIyZm26%2FPmbDRt0MHjiRnACN18k2mrv9XN04OJEmIeCD8e6yz55SeizikNKCIuehriICAC8S69C8LbkI8UFdMZgZdoJZrbVJzkH%2FKSjgN%2FLrNeqTY3bXj5Gwjr78KPC6BBdZW%2Bzu%2BezY%2BIuGX9fAn%2FOip7BfFapu0EUriDInM3FW%2B5ojdrw4Z9apIkDfd%2BQiyh84hkvN3HqzS4oBANU76fA%2F5xST7dAWpK8Q%2BPbHJ%2FI%2FfPqq2FTIwruLsyx68BURu%2FSeTd%2FtUEAnkhGVRvUCPKXm8fIACjYpi3OoFLvMWl8lpCxInEZ02dfja1OFTjFe%2FuLvLOcIJEgr9XN%2Bd9GWJpxcEc1hOOJ3N5JDD%2BKUkEK7TF9uLB3xustsD6qMvVySVtuDZfhrXq1M05YtB2NqS3jE1p6SISzW%2FdNsFDUU3ObK0jQmuChdNXF0ImRFMenqMC4rlr2IRuDAEzpEPfso0Ifzg3EGFetTL6V4KCsBf6xiCLabAMBsSeQ%2BkaoaZg2uSDlFAXnB2uxwwwOC3vgY6pgEtulCclu9TClfsfNEv39DIfASIRNnrNc1Yijo1b5LfvHqzPa8HtwC8Z8OuJunDY58d7qflIvgrvm9O9InMFZw4kiU%2BrS0UvNEBBAbojyFexWXRpxvjG%2BU1zxqbDTB%2BjhX2bwwu3vi0xqFFZR3MsAbx0OcizP8iByRZreyHX%2FLQjxtV6ljiwh%2BGv%2BuCfFCARp989qPr4qkodV9S7D1pzwnc%2BzmBULS2&X-Amz-Signature=c825c300eb9c0f6423817b279ec6211c341023d42e9efa17a48f2f917923cfc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU4LVWR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHHyBXIu44OsGSyJd66Jrx%2F7SsFzUkJhSesw3oGmox3kAiAir7BgaCtPkmoo34SkOuTb2ngpt3OqQBYFDMmvJlnvJSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFcqyGDFG0al%2BNlq4KtwDc09aMvcBDjOd9oFDiySzOa7HP6HSxlCUQkewdie1EhmwrspER%2BnPKSXMRp4am0QqXU45t3wbxcGQGtq4hl5o7LCdHt451MBNUQGuQIDurNasRQZnIyZm26%2FPmbDRt0MHjiRnACN18k2mrv9XN04OJEmIeCD8e6yz55SeizikNKCIuehriICAC8S69C8LbkI8UFdMZgZdoJZrbVJzkH%2FKSjgN%2FLrNeqTY3bXj5Gwjr78KPC6BBdZW%2Bzu%2BezY%2BIuGX9fAn%2FOip7BfFapu0EUriDInM3FW%2B5ojdrw4Z9apIkDfd%2BQiyh84hkvN3HqzS4oBANU76fA%2F5xST7dAWpK8Q%2BPbHJ%2FI%2FfPqq2FTIwruLsyx68BURu%2FSeTd%2FtUEAnkhGVRvUCPKXm8fIACjYpi3OoFLvMWl8lpCxInEZ02dfja1OFTjFe%2FuLvLOcIJEgr9XN%2Bd9GWJpxcEc1hOOJ3N5JDD%2BKUkEK7TF9uLB3xustsD6qMvVySVtuDZfhrXq1M05YtB2NqS3jE1p6SISzW%2FdNsFDUU3ObK0jQmuChdNXF0ImRFMenqMC4rlr2IRuDAEzpEPfso0Ifzg3EGFetTL6V4KCsBf6xiCLabAMBsSeQ%2BkaoaZg2uSDlFAXnB2uxwwwOC3vgY6pgEtulCclu9TClfsfNEv39DIfASIRNnrNc1Yijo1b5LfvHqzPa8HtwC8Z8OuJunDY58d7qflIvgrvm9O9InMFZw4kiU%2BrS0UvNEBBAbojyFexWXRpxvjG%2BU1zxqbDTB%2BjhX2bwwu3vi0xqFFZR3MsAbx0OcizP8iByRZreyHX%2FLQjxtV6ljiwh%2BGv%2BuCfFCARp989qPr4qkodV9S7D1pzwnc%2BzmBULS2&X-Amz-Signature=da72769c900253af6fb15a0d7870d425468cb2ec43201af1b1fe26cefef1458b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU4LVWR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHHyBXIu44OsGSyJd66Jrx%2F7SsFzUkJhSesw3oGmox3kAiAir7BgaCtPkmoo34SkOuTb2ngpt3OqQBYFDMmvJlnvJSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFcqyGDFG0al%2BNlq4KtwDc09aMvcBDjOd9oFDiySzOa7HP6HSxlCUQkewdie1EhmwrspER%2BnPKSXMRp4am0QqXU45t3wbxcGQGtq4hl5o7LCdHt451MBNUQGuQIDurNasRQZnIyZm26%2FPmbDRt0MHjiRnACN18k2mrv9XN04OJEmIeCD8e6yz55SeizikNKCIuehriICAC8S69C8LbkI8UFdMZgZdoJZrbVJzkH%2FKSjgN%2FLrNeqTY3bXj5Gwjr78KPC6BBdZW%2Bzu%2BezY%2BIuGX9fAn%2FOip7BfFapu0EUriDInM3FW%2B5ojdrw4Z9apIkDfd%2BQiyh84hkvN3HqzS4oBANU76fA%2F5xST7dAWpK8Q%2BPbHJ%2FI%2FfPqq2FTIwruLsyx68BURu%2FSeTd%2FtUEAnkhGVRvUCPKXm8fIACjYpi3OoFLvMWl8lpCxInEZ02dfja1OFTjFe%2FuLvLOcIJEgr9XN%2Bd9GWJpxcEc1hOOJ3N5JDD%2BKUkEK7TF9uLB3xustsD6qMvVySVtuDZfhrXq1M05YtB2NqS3jE1p6SISzW%2FdNsFDUU3ObK0jQmuChdNXF0ImRFMenqMC4rlr2IRuDAEzpEPfso0Ifzg3EGFetTL6V4KCsBf6xiCLabAMBsSeQ%2BkaoaZg2uSDlFAXnB2uxwwwOC3vgY6pgEtulCclu9TClfsfNEv39DIfASIRNnrNc1Yijo1b5LfvHqzPa8HtwC8Z8OuJunDY58d7qflIvgrvm9O9InMFZw4kiU%2BrS0UvNEBBAbojyFexWXRpxvjG%2BU1zxqbDTB%2BjhX2bwwu3vi0xqFFZR3MsAbx0OcizP8iByRZreyHX%2FLQjxtV6ljiwh%2BGv%2BuCfFCARp989qPr4qkodV9S7D1pzwnc%2BzmBULS2&X-Amz-Signature=0f16bc3591dc17ac3f965a659b93a6fd4d8d7149cac88d2ec6990bb8ecf0ff16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU4LVWR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHHyBXIu44OsGSyJd66Jrx%2F7SsFzUkJhSesw3oGmox3kAiAir7BgaCtPkmoo34SkOuTb2ngpt3OqQBYFDMmvJlnvJSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFcqyGDFG0al%2BNlq4KtwDc09aMvcBDjOd9oFDiySzOa7HP6HSxlCUQkewdie1EhmwrspER%2BnPKSXMRp4am0QqXU45t3wbxcGQGtq4hl5o7LCdHt451MBNUQGuQIDurNasRQZnIyZm26%2FPmbDRt0MHjiRnACN18k2mrv9XN04OJEmIeCD8e6yz55SeizikNKCIuehriICAC8S69C8LbkI8UFdMZgZdoJZrbVJzkH%2FKSjgN%2FLrNeqTY3bXj5Gwjr78KPC6BBdZW%2Bzu%2BezY%2BIuGX9fAn%2FOip7BfFapu0EUriDInM3FW%2B5ojdrw4Z9apIkDfd%2BQiyh84hkvN3HqzS4oBANU76fA%2F5xST7dAWpK8Q%2BPbHJ%2FI%2FfPqq2FTIwruLsyx68BURu%2FSeTd%2FtUEAnkhGVRvUCPKXm8fIACjYpi3OoFLvMWl8lpCxInEZ02dfja1OFTjFe%2FuLvLOcIJEgr9XN%2Bd9GWJpxcEc1hOOJ3N5JDD%2BKUkEK7TF9uLB3xustsD6qMvVySVtuDZfhrXq1M05YtB2NqS3jE1p6SISzW%2FdNsFDUU3ObK0jQmuChdNXF0ImRFMenqMC4rlr2IRuDAEzpEPfso0Ifzg3EGFetTL6V4KCsBf6xiCLabAMBsSeQ%2BkaoaZg2uSDlFAXnB2uxwwwOC3vgY6pgEtulCclu9TClfsfNEv39DIfASIRNnrNc1Yijo1b5LfvHqzPa8HtwC8Z8OuJunDY58d7qflIvgrvm9O9InMFZw4kiU%2BrS0UvNEBBAbojyFexWXRpxvjG%2BU1zxqbDTB%2BjhX2bwwu3vi0xqFFZR3MsAbx0OcizP8iByRZreyHX%2FLQjxtV6ljiwh%2BGv%2BuCfFCARp989qPr4qkodV9S7D1pzwnc%2BzmBULS2&X-Amz-Signature=f7b68d6e4e34fabda3d88517b4c90ebef77c79b76a8837617a8b284000645f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU4LVWR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHHyBXIu44OsGSyJd66Jrx%2F7SsFzUkJhSesw3oGmox3kAiAir7BgaCtPkmoo34SkOuTb2ngpt3OqQBYFDMmvJlnvJSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFcqyGDFG0al%2BNlq4KtwDc09aMvcBDjOd9oFDiySzOa7HP6HSxlCUQkewdie1EhmwrspER%2BnPKSXMRp4am0QqXU45t3wbxcGQGtq4hl5o7LCdHt451MBNUQGuQIDurNasRQZnIyZm26%2FPmbDRt0MHjiRnACN18k2mrv9XN04OJEmIeCD8e6yz55SeizikNKCIuehriICAC8S69C8LbkI8UFdMZgZdoJZrbVJzkH%2FKSjgN%2FLrNeqTY3bXj5Gwjr78KPC6BBdZW%2Bzu%2BezY%2BIuGX9fAn%2FOip7BfFapu0EUriDInM3FW%2B5ojdrw4Z9apIkDfd%2BQiyh84hkvN3HqzS4oBANU76fA%2F5xST7dAWpK8Q%2BPbHJ%2FI%2FfPqq2FTIwruLsyx68BURu%2FSeTd%2FtUEAnkhGVRvUCPKXm8fIACjYpi3OoFLvMWl8lpCxInEZ02dfja1OFTjFe%2FuLvLOcIJEgr9XN%2Bd9GWJpxcEc1hOOJ3N5JDD%2BKUkEK7TF9uLB3xustsD6qMvVySVtuDZfhrXq1M05YtB2NqS3jE1p6SISzW%2FdNsFDUU3ObK0jQmuChdNXF0ImRFMenqMC4rlr2IRuDAEzpEPfso0Ifzg3EGFetTL6V4KCsBf6xiCLabAMBsSeQ%2BkaoaZg2uSDlFAXnB2uxwwwOC3vgY6pgEtulCclu9TClfsfNEv39DIfASIRNnrNc1Yijo1b5LfvHqzPa8HtwC8Z8OuJunDY58d7qflIvgrvm9O9InMFZw4kiU%2BrS0UvNEBBAbojyFexWXRpxvjG%2BU1zxqbDTB%2BjhX2bwwu3vi0xqFFZR3MsAbx0OcizP8iByRZreyHX%2FLQjxtV6ljiwh%2BGv%2BuCfFCARp989qPr4qkodV9S7D1pzwnc%2BzmBULS2&X-Amz-Signature=2a59cfd32e6411c4d20cbffd435531715d224a9b5fb41d61fc7b048b2c669dab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU4LVWR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHHyBXIu44OsGSyJd66Jrx%2F7SsFzUkJhSesw3oGmox3kAiAir7BgaCtPkmoo34SkOuTb2ngpt3OqQBYFDMmvJlnvJSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFcqyGDFG0al%2BNlq4KtwDc09aMvcBDjOd9oFDiySzOa7HP6HSxlCUQkewdie1EhmwrspER%2BnPKSXMRp4am0QqXU45t3wbxcGQGtq4hl5o7LCdHt451MBNUQGuQIDurNasRQZnIyZm26%2FPmbDRt0MHjiRnACN18k2mrv9XN04OJEmIeCD8e6yz55SeizikNKCIuehriICAC8S69C8LbkI8UFdMZgZdoJZrbVJzkH%2FKSjgN%2FLrNeqTY3bXj5Gwjr78KPC6BBdZW%2Bzu%2BezY%2BIuGX9fAn%2FOip7BfFapu0EUriDInM3FW%2B5ojdrw4Z9apIkDfd%2BQiyh84hkvN3HqzS4oBANU76fA%2F5xST7dAWpK8Q%2BPbHJ%2FI%2FfPqq2FTIwruLsyx68BURu%2FSeTd%2FtUEAnkhGVRvUCPKXm8fIACjYpi3OoFLvMWl8lpCxInEZ02dfja1OFTjFe%2FuLvLOcIJEgr9XN%2Bd9GWJpxcEc1hOOJ3N5JDD%2BKUkEK7TF9uLB3xustsD6qMvVySVtuDZfhrXq1M05YtB2NqS3jE1p6SISzW%2FdNsFDUU3ObK0jQmuChdNXF0ImRFMenqMC4rlr2IRuDAEzpEPfso0Ifzg3EGFetTL6V4KCsBf6xiCLabAMBsSeQ%2BkaoaZg2uSDlFAXnB2uxwwwOC3vgY6pgEtulCclu9TClfsfNEv39DIfASIRNnrNc1Yijo1b5LfvHqzPa8HtwC8Z8OuJunDY58d7qflIvgrvm9O9InMFZw4kiU%2BrS0UvNEBBAbojyFexWXRpxvjG%2BU1zxqbDTB%2BjhX2bwwu3vi0xqFFZR3MsAbx0OcizP8iByRZreyHX%2FLQjxtV6ljiwh%2BGv%2BuCfFCARp989qPr4qkodV9S7D1pzwnc%2BzmBULS2&X-Amz-Signature=28a1ba1128e40034a59a8be5f63719aa706fdb89439861fc28f42fc6b00fc8c7&X-Amz-SignedHeaders=host&x-id=GetObject)
