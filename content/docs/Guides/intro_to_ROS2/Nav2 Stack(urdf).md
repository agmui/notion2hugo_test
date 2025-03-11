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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5RJFQG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEp2Ot1C4b4dpjhHo7%2FKvANZJ5t%2Fv2OBwOl3kC070GZuAiEAjSdljtLK8c%2F79vvCWbsTbx4rqN7WIaqKhafqhHQ8gvMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKis6NoaGM%2FLeZcFcCrcA4nPObKGE97aIH9Py3si4IORCJcygEmfCspapS1JYjjSG30gUBM%2BsWvvtEZvy9ZWOFxj%2F%2FMZeAtVIG3Psf07pzNiwujN1KsyiQxqbjaSg8k8YgDr3DyFdCHj%2Fm9IXhADrvcF6MXfV1u9nPT1mTZTPbbZWQcXh3Xpa6L4XhRCPPGUG56nL3s%2BnatXpTZBsfkDqnSRq7umr8pAvbsj7ZnigKhzolV2d5u%2FEjK%2B%2Bd4%2BKQ7OMfS95MRk9cT6gC38uzvsOJa3ve2%2BDvjyGJ99WrwjUw9GNUYgqaz1A91CIWrkbQC377sahNcqbbwFbii%2FhEW3Aqd8oMCEYkG5FI8XrGMxZPIQaFUT4UcfcQbFxMpGLz81KfyEtAYRYt5V3%2BOzTWODufEm6OSATsn4GNc%2BUaLqtgBImk00s5M0WzImKsoT6pmW5Lb7A6j%2BuPBLoO5%2B%2F%2Bdfhj5UgJBk6tNc0oXs7BBTaYZd8gfin96r44IKyRMvhMBeMnsOUn9nljSUn6Y4HVfIrL%2Fnct86tblX1hGqRuUIEquhNW5%2FIu%2FJRfdzI1WjNaYjvtYwHzylSLpG%2FGZ1Zn6SeqoqojdEjgLJY3EmxNCFxvvJP57HNHaonOvpSDm57tOZwbgsJp5zha782IdiMLLywr4GOqUB5OnGY%2BhCNx54szkkhXnSu3axXDLxI7X%2BlMYAN0r%2Bo9mU6cs4T3l7Gxj9%2FYa%2Be1ugFyqP3RnmFq8H39YlyKnSOx5DpvzPrfVM279c1B7eTq7LNPYNPHywLfR53yQS1d81j%2FsCegmGqVYTcFHvEoM76lVdNqkWYA7IDAlzp4RAxTLzwmYOI%2B0%2BblZkS%2B%2B5v%2BlD2IPK1%2BeTu%2BVYzMp2EJSJ28qicKtQ&X-Amz-Signature=7a900df737e18026f91f412f560394793ee971f7179b18d3ec43db6f2114a17a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5RJFQG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEp2Ot1C4b4dpjhHo7%2FKvANZJ5t%2Fv2OBwOl3kC070GZuAiEAjSdljtLK8c%2F79vvCWbsTbx4rqN7WIaqKhafqhHQ8gvMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKis6NoaGM%2FLeZcFcCrcA4nPObKGE97aIH9Py3si4IORCJcygEmfCspapS1JYjjSG30gUBM%2BsWvvtEZvy9ZWOFxj%2F%2FMZeAtVIG3Psf07pzNiwujN1KsyiQxqbjaSg8k8YgDr3DyFdCHj%2Fm9IXhADrvcF6MXfV1u9nPT1mTZTPbbZWQcXh3Xpa6L4XhRCPPGUG56nL3s%2BnatXpTZBsfkDqnSRq7umr8pAvbsj7ZnigKhzolV2d5u%2FEjK%2B%2Bd4%2BKQ7OMfS95MRk9cT6gC38uzvsOJa3ve2%2BDvjyGJ99WrwjUw9GNUYgqaz1A91CIWrkbQC377sahNcqbbwFbii%2FhEW3Aqd8oMCEYkG5FI8XrGMxZPIQaFUT4UcfcQbFxMpGLz81KfyEtAYRYt5V3%2BOzTWODufEm6OSATsn4GNc%2BUaLqtgBImk00s5M0WzImKsoT6pmW5Lb7A6j%2BuPBLoO5%2B%2F%2Bdfhj5UgJBk6tNc0oXs7BBTaYZd8gfin96r44IKyRMvhMBeMnsOUn9nljSUn6Y4HVfIrL%2Fnct86tblX1hGqRuUIEquhNW5%2FIu%2FJRfdzI1WjNaYjvtYwHzylSLpG%2FGZ1Zn6SeqoqojdEjgLJY3EmxNCFxvvJP57HNHaonOvpSDm57tOZwbgsJp5zha782IdiMLLywr4GOqUB5OnGY%2BhCNx54szkkhXnSu3axXDLxI7X%2BlMYAN0r%2Bo9mU6cs4T3l7Gxj9%2FYa%2Be1ugFyqP3RnmFq8H39YlyKnSOx5DpvzPrfVM279c1B7eTq7LNPYNPHywLfR53yQS1d81j%2FsCegmGqVYTcFHvEoM76lVdNqkWYA7IDAlzp4RAxTLzwmYOI%2B0%2BblZkS%2B%2B5v%2BlD2IPK1%2BeTu%2BVYzMp2EJSJ28qicKtQ&X-Amz-Signature=94bc15beb1ed580078ef9a156d82a80704c40269516c1d8c28c71274a478b12e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5RJFQG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEp2Ot1C4b4dpjhHo7%2FKvANZJ5t%2Fv2OBwOl3kC070GZuAiEAjSdljtLK8c%2F79vvCWbsTbx4rqN7WIaqKhafqhHQ8gvMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKis6NoaGM%2FLeZcFcCrcA4nPObKGE97aIH9Py3si4IORCJcygEmfCspapS1JYjjSG30gUBM%2BsWvvtEZvy9ZWOFxj%2F%2FMZeAtVIG3Psf07pzNiwujN1KsyiQxqbjaSg8k8YgDr3DyFdCHj%2Fm9IXhADrvcF6MXfV1u9nPT1mTZTPbbZWQcXh3Xpa6L4XhRCPPGUG56nL3s%2BnatXpTZBsfkDqnSRq7umr8pAvbsj7ZnigKhzolV2d5u%2FEjK%2B%2Bd4%2BKQ7OMfS95MRk9cT6gC38uzvsOJa3ve2%2BDvjyGJ99WrwjUw9GNUYgqaz1A91CIWrkbQC377sahNcqbbwFbii%2FhEW3Aqd8oMCEYkG5FI8XrGMxZPIQaFUT4UcfcQbFxMpGLz81KfyEtAYRYt5V3%2BOzTWODufEm6OSATsn4GNc%2BUaLqtgBImk00s5M0WzImKsoT6pmW5Lb7A6j%2BuPBLoO5%2B%2F%2Bdfhj5UgJBk6tNc0oXs7BBTaYZd8gfin96r44IKyRMvhMBeMnsOUn9nljSUn6Y4HVfIrL%2Fnct86tblX1hGqRuUIEquhNW5%2FIu%2FJRfdzI1WjNaYjvtYwHzylSLpG%2FGZ1Zn6SeqoqojdEjgLJY3EmxNCFxvvJP57HNHaonOvpSDm57tOZwbgsJp5zha782IdiMLLywr4GOqUB5OnGY%2BhCNx54szkkhXnSu3axXDLxI7X%2BlMYAN0r%2Bo9mU6cs4T3l7Gxj9%2FYa%2Be1ugFyqP3RnmFq8H39YlyKnSOx5DpvzPrfVM279c1B7eTq7LNPYNPHywLfR53yQS1d81j%2FsCegmGqVYTcFHvEoM76lVdNqkWYA7IDAlzp4RAxTLzwmYOI%2B0%2BblZkS%2B%2B5v%2BlD2IPK1%2BeTu%2BVYzMp2EJSJ28qicKtQ&X-Amz-Signature=3b3d2f461a66c3f2884546906ba2fd88aa4a7b2ff0da8f7ca9a1e9cb5f92f2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5RJFQG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEp2Ot1C4b4dpjhHo7%2FKvANZJ5t%2Fv2OBwOl3kC070GZuAiEAjSdljtLK8c%2F79vvCWbsTbx4rqN7WIaqKhafqhHQ8gvMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKis6NoaGM%2FLeZcFcCrcA4nPObKGE97aIH9Py3si4IORCJcygEmfCspapS1JYjjSG30gUBM%2BsWvvtEZvy9ZWOFxj%2F%2FMZeAtVIG3Psf07pzNiwujN1KsyiQxqbjaSg8k8YgDr3DyFdCHj%2Fm9IXhADrvcF6MXfV1u9nPT1mTZTPbbZWQcXh3Xpa6L4XhRCPPGUG56nL3s%2BnatXpTZBsfkDqnSRq7umr8pAvbsj7ZnigKhzolV2d5u%2FEjK%2B%2Bd4%2BKQ7OMfS95MRk9cT6gC38uzvsOJa3ve2%2BDvjyGJ99WrwjUw9GNUYgqaz1A91CIWrkbQC377sahNcqbbwFbii%2FhEW3Aqd8oMCEYkG5FI8XrGMxZPIQaFUT4UcfcQbFxMpGLz81KfyEtAYRYt5V3%2BOzTWODufEm6OSATsn4GNc%2BUaLqtgBImk00s5M0WzImKsoT6pmW5Lb7A6j%2BuPBLoO5%2B%2F%2Bdfhj5UgJBk6tNc0oXs7BBTaYZd8gfin96r44IKyRMvhMBeMnsOUn9nljSUn6Y4HVfIrL%2Fnct86tblX1hGqRuUIEquhNW5%2FIu%2FJRfdzI1WjNaYjvtYwHzylSLpG%2FGZ1Zn6SeqoqojdEjgLJY3EmxNCFxvvJP57HNHaonOvpSDm57tOZwbgsJp5zha782IdiMLLywr4GOqUB5OnGY%2BhCNx54szkkhXnSu3axXDLxI7X%2BlMYAN0r%2Bo9mU6cs4T3l7Gxj9%2FYa%2Be1ugFyqP3RnmFq8H39YlyKnSOx5DpvzPrfVM279c1B7eTq7LNPYNPHywLfR53yQS1d81j%2FsCegmGqVYTcFHvEoM76lVdNqkWYA7IDAlzp4RAxTLzwmYOI%2B0%2BblZkS%2B%2B5v%2BlD2IPK1%2BeTu%2BVYzMp2EJSJ28qicKtQ&X-Amz-Signature=d1f33df544d8502de2ee852ee498e21cead4ee2f52d6e3c9dc5f1b125b52d6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5RJFQG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEp2Ot1C4b4dpjhHo7%2FKvANZJ5t%2Fv2OBwOl3kC070GZuAiEAjSdljtLK8c%2F79vvCWbsTbx4rqN7WIaqKhafqhHQ8gvMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKis6NoaGM%2FLeZcFcCrcA4nPObKGE97aIH9Py3si4IORCJcygEmfCspapS1JYjjSG30gUBM%2BsWvvtEZvy9ZWOFxj%2F%2FMZeAtVIG3Psf07pzNiwujN1KsyiQxqbjaSg8k8YgDr3DyFdCHj%2Fm9IXhADrvcF6MXfV1u9nPT1mTZTPbbZWQcXh3Xpa6L4XhRCPPGUG56nL3s%2BnatXpTZBsfkDqnSRq7umr8pAvbsj7ZnigKhzolV2d5u%2FEjK%2B%2Bd4%2BKQ7OMfS95MRk9cT6gC38uzvsOJa3ve2%2BDvjyGJ99WrwjUw9GNUYgqaz1A91CIWrkbQC377sahNcqbbwFbii%2FhEW3Aqd8oMCEYkG5FI8XrGMxZPIQaFUT4UcfcQbFxMpGLz81KfyEtAYRYt5V3%2BOzTWODufEm6OSATsn4GNc%2BUaLqtgBImk00s5M0WzImKsoT6pmW5Lb7A6j%2BuPBLoO5%2B%2F%2Bdfhj5UgJBk6tNc0oXs7BBTaYZd8gfin96r44IKyRMvhMBeMnsOUn9nljSUn6Y4HVfIrL%2Fnct86tblX1hGqRuUIEquhNW5%2FIu%2FJRfdzI1WjNaYjvtYwHzylSLpG%2FGZ1Zn6SeqoqojdEjgLJY3EmxNCFxvvJP57HNHaonOvpSDm57tOZwbgsJp5zha782IdiMLLywr4GOqUB5OnGY%2BhCNx54szkkhXnSu3axXDLxI7X%2BlMYAN0r%2Bo9mU6cs4T3l7Gxj9%2FYa%2Be1ugFyqP3RnmFq8H39YlyKnSOx5DpvzPrfVM279c1B7eTq7LNPYNPHywLfR53yQS1d81j%2FsCegmGqVYTcFHvEoM76lVdNqkWYA7IDAlzp4RAxTLzwmYOI%2B0%2BblZkS%2B%2B5v%2BlD2IPK1%2BeTu%2BVYzMp2EJSJ28qicKtQ&X-Amz-Signature=1d8a92a25ab1c984cd5695dee3115a962c97ab7719720ca04db850a962c38d61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5RJFQG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEp2Ot1C4b4dpjhHo7%2FKvANZJ5t%2Fv2OBwOl3kC070GZuAiEAjSdljtLK8c%2F79vvCWbsTbx4rqN7WIaqKhafqhHQ8gvMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKis6NoaGM%2FLeZcFcCrcA4nPObKGE97aIH9Py3si4IORCJcygEmfCspapS1JYjjSG30gUBM%2BsWvvtEZvy9ZWOFxj%2F%2FMZeAtVIG3Psf07pzNiwujN1KsyiQxqbjaSg8k8YgDr3DyFdCHj%2Fm9IXhADrvcF6MXfV1u9nPT1mTZTPbbZWQcXh3Xpa6L4XhRCPPGUG56nL3s%2BnatXpTZBsfkDqnSRq7umr8pAvbsj7ZnigKhzolV2d5u%2FEjK%2B%2Bd4%2BKQ7OMfS95MRk9cT6gC38uzvsOJa3ve2%2BDvjyGJ99WrwjUw9GNUYgqaz1A91CIWrkbQC377sahNcqbbwFbii%2FhEW3Aqd8oMCEYkG5FI8XrGMxZPIQaFUT4UcfcQbFxMpGLz81KfyEtAYRYt5V3%2BOzTWODufEm6OSATsn4GNc%2BUaLqtgBImk00s5M0WzImKsoT6pmW5Lb7A6j%2BuPBLoO5%2B%2F%2Bdfhj5UgJBk6tNc0oXs7BBTaYZd8gfin96r44IKyRMvhMBeMnsOUn9nljSUn6Y4HVfIrL%2Fnct86tblX1hGqRuUIEquhNW5%2FIu%2FJRfdzI1WjNaYjvtYwHzylSLpG%2FGZ1Zn6SeqoqojdEjgLJY3EmxNCFxvvJP57HNHaonOvpSDm57tOZwbgsJp5zha782IdiMLLywr4GOqUB5OnGY%2BhCNx54szkkhXnSu3axXDLxI7X%2BlMYAN0r%2Bo9mU6cs4T3l7Gxj9%2FYa%2Be1ugFyqP3RnmFq8H39YlyKnSOx5DpvzPrfVM279c1B7eTq7LNPYNPHywLfR53yQS1d81j%2FsCegmGqVYTcFHvEoM76lVdNqkWYA7IDAlzp4RAxTLzwmYOI%2B0%2BblZkS%2B%2B5v%2BlD2IPK1%2BeTu%2BVYzMp2EJSJ28qicKtQ&X-Amz-Signature=e03a9827e6a920975310edc408dc904e427e8465d1012fba81d1b2cfed601015&X-Amz-SignedHeaders=host&x-id=GetObject)
