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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO6RE6M%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGe4BuvijpAxRbb85kJIvIGKxNNpYvG8WmQToksbjqphAiAU5O3RVHHP2KGO8BT7wPvRfaq828CveFaHj5gwBhvBRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMbonSBR0z4qo8zG8vKtwDpDYQNC1Pzxy5bxDfAV766ae%2BmzVnZXq6guSHxetm9ykLm2VD2s%2Fg2MFMxrmDNCO%2Bh%2B%2BH7sA7Ke9T4cpEkLJbFwSSX9fzGGDp79KVREKKaEg%2B4fURD4huI1zCveMfMan32c8RELNVjtIYIjRqzYlgQbOCCq%2BFX3QjIsQTzN%2FQfLawFiAiNoKRhrs7l3Wce5js3nj6vt36L2vn%2BSQgpQ83n356fX%2F5WdKGUHurGIpVbRGkZxS5g3UseKE79n2vxfWVS4hC%2BEpVciqhPoz0hRDo%2F13FMjbVH2bU3IImfAbR8iK7HvcSBsMBnBcdT8n85%2Bc6NEAcowq6JPdV5Pbx1YLby60aiYHPny4aOG7g32GUrRGhBZ%2B1gmN9x0yu84JM%2BwHEDBeETFggPebwd1ALVDO6ZY8GiPh0mQwVVQQuCIlVP%2FCShDwH%2Bdea1RgSvCcMPGJzneWSWy0H%2B0sO%2FkxEO6qNeXR6s19Oot6JzbifDljFmnhBNUEm%2FCbaMLls2Je%2BMdxIweckl3dajgvxKoURF7njIOeoPxYvGTR%2BZvHvNC3H3KhV2X4euJVIHN0QgBeWIf3f30R4H3HEaK7dbgVnyLcdMRrn%2BgozEVGmib4QQSC73X9RqWBYQ8EWTYjRlGIwham7wgY6pgFsL4QAdFXxdXOQ8v2jiNxNgYZxSlxLqTCWV9%2BZlPBZ9KemrN5eF1R0qqZbyWSFgHTEepkrj06JvYYadEzZ9xPrakzHBAZE8QkRc6NtypEvySypYDu81UPMtbpGs8tOrDXOi%2BIzcBxeZyuET%2BVDXGHnnTtXMlxc2piAKRIygK71QwmiQb1CL4x0WJvcd7BI0EmW2MHmlb2g%2FLQXf5pK9%2BycOZcnu9eX&X-Amz-Signature=514f5b3d6e001e9a5665de16a657de889bca3e4dfe0d4b42960bd87b103a5070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO6RE6M%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGe4BuvijpAxRbb85kJIvIGKxNNpYvG8WmQToksbjqphAiAU5O3RVHHP2KGO8BT7wPvRfaq828CveFaHj5gwBhvBRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMbonSBR0z4qo8zG8vKtwDpDYQNC1Pzxy5bxDfAV766ae%2BmzVnZXq6guSHxetm9ykLm2VD2s%2Fg2MFMxrmDNCO%2Bh%2B%2BH7sA7Ke9T4cpEkLJbFwSSX9fzGGDp79KVREKKaEg%2B4fURD4huI1zCveMfMan32c8RELNVjtIYIjRqzYlgQbOCCq%2BFX3QjIsQTzN%2FQfLawFiAiNoKRhrs7l3Wce5js3nj6vt36L2vn%2BSQgpQ83n356fX%2F5WdKGUHurGIpVbRGkZxS5g3UseKE79n2vxfWVS4hC%2BEpVciqhPoz0hRDo%2F13FMjbVH2bU3IImfAbR8iK7HvcSBsMBnBcdT8n85%2Bc6NEAcowq6JPdV5Pbx1YLby60aiYHPny4aOG7g32GUrRGhBZ%2B1gmN9x0yu84JM%2BwHEDBeETFggPebwd1ALVDO6ZY8GiPh0mQwVVQQuCIlVP%2FCShDwH%2Bdea1RgSvCcMPGJzneWSWy0H%2B0sO%2FkxEO6qNeXR6s19Oot6JzbifDljFmnhBNUEm%2FCbaMLls2Je%2BMdxIweckl3dajgvxKoURF7njIOeoPxYvGTR%2BZvHvNC3H3KhV2X4euJVIHN0QgBeWIf3f30R4H3HEaK7dbgVnyLcdMRrn%2BgozEVGmib4QQSC73X9RqWBYQ8EWTYjRlGIwham7wgY6pgFsL4QAdFXxdXOQ8v2jiNxNgYZxSlxLqTCWV9%2BZlPBZ9KemrN5eF1R0qqZbyWSFgHTEepkrj06JvYYadEzZ9xPrakzHBAZE8QkRc6NtypEvySypYDu81UPMtbpGs8tOrDXOi%2BIzcBxeZyuET%2BVDXGHnnTtXMlxc2piAKRIygK71QwmiQb1CL4x0WJvcd7BI0EmW2MHmlb2g%2FLQXf5pK9%2BycOZcnu9eX&X-Amz-Signature=d22e8b2e38a9359ee7723209f008c518733f7472f7befd4904f622d1aa4ac527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO6RE6M%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGe4BuvijpAxRbb85kJIvIGKxNNpYvG8WmQToksbjqphAiAU5O3RVHHP2KGO8BT7wPvRfaq828CveFaHj5gwBhvBRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMbonSBR0z4qo8zG8vKtwDpDYQNC1Pzxy5bxDfAV766ae%2BmzVnZXq6guSHxetm9ykLm2VD2s%2Fg2MFMxrmDNCO%2Bh%2B%2BH7sA7Ke9T4cpEkLJbFwSSX9fzGGDp79KVREKKaEg%2B4fURD4huI1zCveMfMan32c8RELNVjtIYIjRqzYlgQbOCCq%2BFX3QjIsQTzN%2FQfLawFiAiNoKRhrs7l3Wce5js3nj6vt36L2vn%2BSQgpQ83n356fX%2F5WdKGUHurGIpVbRGkZxS5g3UseKE79n2vxfWVS4hC%2BEpVciqhPoz0hRDo%2F13FMjbVH2bU3IImfAbR8iK7HvcSBsMBnBcdT8n85%2Bc6NEAcowq6JPdV5Pbx1YLby60aiYHPny4aOG7g32GUrRGhBZ%2B1gmN9x0yu84JM%2BwHEDBeETFggPebwd1ALVDO6ZY8GiPh0mQwVVQQuCIlVP%2FCShDwH%2Bdea1RgSvCcMPGJzneWSWy0H%2B0sO%2FkxEO6qNeXR6s19Oot6JzbifDljFmnhBNUEm%2FCbaMLls2Je%2BMdxIweckl3dajgvxKoURF7njIOeoPxYvGTR%2BZvHvNC3H3KhV2X4euJVIHN0QgBeWIf3f30R4H3HEaK7dbgVnyLcdMRrn%2BgozEVGmib4QQSC73X9RqWBYQ8EWTYjRlGIwham7wgY6pgFsL4QAdFXxdXOQ8v2jiNxNgYZxSlxLqTCWV9%2BZlPBZ9KemrN5eF1R0qqZbyWSFgHTEepkrj06JvYYadEzZ9xPrakzHBAZE8QkRc6NtypEvySypYDu81UPMtbpGs8tOrDXOi%2BIzcBxeZyuET%2BVDXGHnnTtXMlxc2piAKRIygK71QwmiQb1CL4x0WJvcd7BI0EmW2MHmlb2g%2FLQXf5pK9%2BycOZcnu9eX&X-Amz-Signature=80a4ad46c68fd6e83e2a400808270206605dc6af0d8c381c359fa647078be80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO6RE6M%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGe4BuvijpAxRbb85kJIvIGKxNNpYvG8WmQToksbjqphAiAU5O3RVHHP2KGO8BT7wPvRfaq828CveFaHj5gwBhvBRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMbonSBR0z4qo8zG8vKtwDpDYQNC1Pzxy5bxDfAV766ae%2BmzVnZXq6guSHxetm9ykLm2VD2s%2Fg2MFMxrmDNCO%2Bh%2B%2BH7sA7Ke9T4cpEkLJbFwSSX9fzGGDp79KVREKKaEg%2B4fURD4huI1zCveMfMan32c8RELNVjtIYIjRqzYlgQbOCCq%2BFX3QjIsQTzN%2FQfLawFiAiNoKRhrs7l3Wce5js3nj6vt36L2vn%2BSQgpQ83n356fX%2F5WdKGUHurGIpVbRGkZxS5g3UseKE79n2vxfWVS4hC%2BEpVciqhPoz0hRDo%2F13FMjbVH2bU3IImfAbR8iK7HvcSBsMBnBcdT8n85%2Bc6NEAcowq6JPdV5Pbx1YLby60aiYHPny4aOG7g32GUrRGhBZ%2B1gmN9x0yu84JM%2BwHEDBeETFggPebwd1ALVDO6ZY8GiPh0mQwVVQQuCIlVP%2FCShDwH%2Bdea1RgSvCcMPGJzneWSWy0H%2B0sO%2FkxEO6qNeXR6s19Oot6JzbifDljFmnhBNUEm%2FCbaMLls2Je%2BMdxIweckl3dajgvxKoURF7njIOeoPxYvGTR%2BZvHvNC3H3KhV2X4euJVIHN0QgBeWIf3f30R4H3HEaK7dbgVnyLcdMRrn%2BgozEVGmib4QQSC73X9RqWBYQ8EWTYjRlGIwham7wgY6pgFsL4QAdFXxdXOQ8v2jiNxNgYZxSlxLqTCWV9%2BZlPBZ9KemrN5eF1R0qqZbyWSFgHTEepkrj06JvYYadEzZ9xPrakzHBAZE8QkRc6NtypEvySypYDu81UPMtbpGs8tOrDXOi%2BIzcBxeZyuET%2BVDXGHnnTtXMlxc2piAKRIygK71QwmiQb1CL4x0WJvcd7BI0EmW2MHmlb2g%2FLQXf5pK9%2BycOZcnu9eX&X-Amz-Signature=3389c5b4fa68354f0f3026cfd93f310d318180bf9fae84c87679fedb9f8a2c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO6RE6M%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGe4BuvijpAxRbb85kJIvIGKxNNpYvG8WmQToksbjqphAiAU5O3RVHHP2KGO8BT7wPvRfaq828CveFaHj5gwBhvBRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMbonSBR0z4qo8zG8vKtwDpDYQNC1Pzxy5bxDfAV766ae%2BmzVnZXq6guSHxetm9ykLm2VD2s%2Fg2MFMxrmDNCO%2Bh%2B%2BH7sA7Ke9T4cpEkLJbFwSSX9fzGGDp79KVREKKaEg%2B4fURD4huI1zCveMfMan32c8RELNVjtIYIjRqzYlgQbOCCq%2BFX3QjIsQTzN%2FQfLawFiAiNoKRhrs7l3Wce5js3nj6vt36L2vn%2BSQgpQ83n356fX%2F5WdKGUHurGIpVbRGkZxS5g3UseKE79n2vxfWVS4hC%2BEpVciqhPoz0hRDo%2F13FMjbVH2bU3IImfAbR8iK7HvcSBsMBnBcdT8n85%2Bc6NEAcowq6JPdV5Pbx1YLby60aiYHPny4aOG7g32GUrRGhBZ%2B1gmN9x0yu84JM%2BwHEDBeETFggPebwd1ALVDO6ZY8GiPh0mQwVVQQuCIlVP%2FCShDwH%2Bdea1RgSvCcMPGJzneWSWy0H%2B0sO%2FkxEO6qNeXR6s19Oot6JzbifDljFmnhBNUEm%2FCbaMLls2Je%2BMdxIweckl3dajgvxKoURF7njIOeoPxYvGTR%2BZvHvNC3H3KhV2X4euJVIHN0QgBeWIf3f30R4H3HEaK7dbgVnyLcdMRrn%2BgozEVGmib4QQSC73X9RqWBYQ8EWTYjRlGIwham7wgY6pgFsL4QAdFXxdXOQ8v2jiNxNgYZxSlxLqTCWV9%2BZlPBZ9KemrN5eF1R0qqZbyWSFgHTEepkrj06JvYYadEzZ9xPrakzHBAZE8QkRc6NtypEvySypYDu81UPMtbpGs8tOrDXOi%2BIzcBxeZyuET%2BVDXGHnnTtXMlxc2piAKRIygK71QwmiQb1CL4x0WJvcd7BI0EmW2MHmlb2g%2FLQXf5pK9%2BycOZcnu9eX&X-Amz-Signature=d3545d4185001877e8447793fc1b4089c47cbf74d77032ffcf38184478a45a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO6RE6M%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGe4BuvijpAxRbb85kJIvIGKxNNpYvG8WmQToksbjqphAiAU5O3RVHHP2KGO8BT7wPvRfaq828CveFaHj5gwBhvBRyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMbonSBR0z4qo8zG8vKtwDpDYQNC1Pzxy5bxDfAV766ae%2BmzVnZXq6guSHxetm9ykLm2VD2s%2Fg2MFMxrmDNCO%2Bh%2B%2BH7sA7Ke9T4cpEkLJbFwSSX9fzGGDp79KVREKKaEg%2B4fURD4huI1zCveMfMan32c8RELNVjtIYIjRqzYlgQbOCCq%2BFX3QjIsQTzN%2FQfLawFiAiNoKRhrs7l3Wce5js3nj6vt36L2vn%2BSQgpQ83n356fX%2F5WdKGUHurGIpVbRGkZxS5g3UseKE79n2vxfWVS4hC%2BEpVciqhPoz0hRDo%2F13FMjbVH2bU3IImfAbR8iK7HvcSBsMBnBcdT8n85%2Bc6NEAcowq6JPdV5Pbx1YLby60aiYHPny4aOG7g32GUrRGhBZ%2B1gmN9x0yu84JM%2BwHEDBeETFggPebwd1ALVDO6ZY8GiPh0mQwVVQQuCIlVP%2FCShDwH%2Bdea1RgSvCcMPGJzneWSWy0H%2B0sO%2FkxEO6qNeXR6s19Oot6JzbifDljFmnhBNUEm%2FCbaMLls2Je%2BMdxIweckl3dajgvxKoURF7njIOeoPxYvGTR%2BZvHvNC3H3KhV2X4euJVIHN0QgBeWIf3f30R4H3HEaK7dbgVnyLcdMRrn%2BgozEVGmib4QQSC73X9RqWBYQ8EWTYjRlGIwham7wgY6pgFsL4QAdFXxdXOQ8v2jiNxNgYZxSlxLqTCWV9%2BZlPBZ9KemrN5eF1R0qqZbyWSFgHTEepkrj06JvYYadEzZ9xPrakzHBAZE8QkRc6NtypEvySypYDu81UPMtbpGs8tOrDXOi%2BIzcBxeZyuET%2BVDXGHnnTtXMlxc2piAKRIygK71QwmiQb1CL4x0WJvcd7BI0EmW2MHmlb2g%2FLQXf5pK9%2BycOZcnu9eX&X-Amz-Signature=fe2fa4e34e3e02df0ab93b55df18a4dc6b684cc107177f8706faa4f7bd46f2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
