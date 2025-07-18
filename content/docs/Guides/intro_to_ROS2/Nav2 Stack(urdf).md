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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJD55PA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzwHbUelhwljemjy8SORYdNaOzqe1sr22ly9DW12OaPQIgL4ZBzJ%2F9kImvdZRElsXCYrSydCVGzI2XUIKXG9SPWoQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG6SaYjFcbE41xQ%2FircAxiV3fkvqBKynJG5Q3Hqwq%2Bi1Qz2lc2A3CUTG3yc25Ezs2WuAmQcIS07DFvGd7OVM8t9M7oVgJB%2BXnh0KvZzgqk2WkS02swT1lgv2D5uWzZoJRzKukC%2Bat%2F7%2FqILOdDtguYduKrQqa3nxvJcHLTMjSESc%2FN4E%2F8QgNSxrmquvmgYJGwnj7G7r6jg37%2F1GeiHfBFAT8RTTBDelKnCcIzFzxaUIh%2FpAKHwF%2FDgfHdDunUz8UPI6yWDOks5CLICN%2B5%2BlqF8KbK8%2Bb4gbAmoTaLPtTFR%2FZF%2B8O24TvEwCtZOfA6F0rsjYyM6FiCdlZQrGNgAsmVM21rbqAj8Ph2fyE%2B3bENY%2Bc3KLS8uZLY%2F%2FtNRFk6f3j77lFnz6Xd8Rexx8d3bDPTAQZxE%2FuGMmInwL9TGB8ACPuU%2BOLGnv%2Fn%2FkgaQKeH%2B6z%2BwvyBB%2BKS5gSijGGTkoNQnoDY1%2Bp9WoZYsIIP2uQpXxDLQFydW8eGBy%2FZwqIZmbpbOfKGBKgR5oAl02Fa3fMbYV%2B8RS9g11dG0ivcFR5%2Fo1l8%2BoOZ1sxLxQsLJzxhiKTC0YRcvFrMUmO8QV1hGiLSWATPP%2F85%2FZju0VP2AyhsAkQCNHKJODJhm43FkpWvQ5d3SODH3nbN%2BFVciMJjQ6MMGOqUBiVa5qHiaqAnM7Emb2Iko%2BdtIbfTpRP%2F2j5hQOutZgQwDw4bLLTAPCz%2Br3NDQ3HAtDf%2BPsiPpTXZZp0NPjlCwWjSJi%2Be0B989fS%2F7TK8yLET7%2FE0fsLWlLrc8FQjmN5STeU29nLg7DlcZFLhNPyQS3ZXw6iTmMTx%2B6edJGwlWWOEB21k%2BoZDwtZXvMpojTuTBPcqMF7RPWcMJ0BoliUqdj1xMggXN&X-Amz-Signature=5c10f5916ec81ffa5149e203c94c661b338ca6561a6dbf7f9e45400b1f5b8687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJD55PA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzwHbUelhwljemjy8SORYdNaOzqe1sr22ly9DW12OaPQIgL4ZBzJ%2F9kImvdZRElsXCYrSydCVGzI2XUIKXG9SPWoQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG6SaYjFcbE41xQ%2FircAxiV3fkvqBKynJG5Q3Hqwq%2Bi1Qz2lc2A3CUTG3yc25Ezs2WuAmQcIS07DFvGd7OVM8t9M7oVgJB%2BXnh0KvZzgqk2WkS02swT1lgv2D5uWzZoJRzKukC%2Bat%2F7%2FqILOdDtguYduKrQqa3nxvJcHLTMjSESc%2FN4E%2F8QgNSxrmquvmgYJGwnj7G7r6jg37%2F1GeiHfBFAT8RTTBDelKnCcIzFzxaUIh%2FpAKHwF%2FDgfHdDunUz8UPI6yWDOks5CLICN%2B5%2BlqF8KbK8%2Bb4gbAmoTaLPtTFR%2FZF%2B8O24TvEwCtZOfA6F0rsjYyM6FiCdlZQrGNgAsmVM21rbqAj8Ph2fyE%2B3bENY%2Bc3KLS8uZLY%2F%2FtNRFk6f3j77lFnz6Xd8Rexx8d3bDPTAQZxE%2FuGMmInwL9TGB8ACPuU%2BOLGnv%2Fn%2FkgaQKeH%2B6z%2BwvyBB%2BKS5gSijGGTkoNQnoDY1%2Bp9WoZYsIIP2uQpXxDLQFydW8eGBy%2FZwqIZmbpbOfKGBKgR5oAl02Fa3fMbYV%2B8RS9g11dG0ivcFR5%2Fo1l8%2BoOZ1sxLxQsLJzxhiKTC0YRcvFrMUmO8QV1hGiLSWATPP%2F85%2FZju0VP2AyhsAkQCNHKJODJhm43FkpWvQ5d3SODH3nbN%2BFVciMJjQ6MMGOqUBiVa5qHiaqAnM7Emb2Iko%2BdtIbfTpRP%2F2j5hQOutZgQwDw4bLLTAPCz%2Br3NDQ3HAtDf%2BPsiPpTXZZp0NPjlCwWjSJi%2Be0B989fS%2F7TK8yLET7%2FE0fsLWlLrc8FQjmN5STeU29nLg7DlcZFLhNPyQS3ZXw6iTmMTx%2B6edJGwlWWOEB21k%2BoZDwtZXvMpojTuTBPcqMF7RPWcMJ0BoliUqdj1xMggXN&X-Amz-Signature=f765b1d16bfcfe11502d42f20df7fbbd8ff98fb991364e71321fc1529116f3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJD55PA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzwHbUelhwljemjy8SORYdNaOzqe1sr22ly9DW12OaPQIgL4ZBzJ%2F9kImvdZRElsXCYrSydCVGzI2XUIKXG9SPWoQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG6SaYjFcbE41xQ%2FircAxiV3fkvqBKynJG5Q3Hqwq%2Bi1Qz2lc2A3CUTG3yc25Ezs2WuAmQcIS07DFvGd7OVM8t9M7oVgJB%2BXnh0KvZzgqk2WkS02swT1lgv2D5uWzZoJRzKukC%2Bat%2F7%2FqILOdDtguYduKrQqa3nxvJcHLTMjSESc%2FN4E%2F8QgNSxrmquvmgYJGwnj7G7r6jg37%2F1GeiHfBFAT8RTTBDelKnCcIzFzxaUIh%2FpAKHwF%2FDgfHdDunUz8UPI6yWDOks5CLICN%2B5%2BlqF8KbK8%2Bb4gbAmoTaLPtTFR%2FZF%2B8O24TvEwCtZOfA6F0rsjYyM6FiCdlZQrGNgAsmVM21rbqAj8Ph2fyE%2B3bENY%2Bc3KLS8uZLY%2F%2FtNRFk6f3j77lFnz6Xd8Rexx8d3bDPTAQZxE%2FuGMmInwL9TGB8ACPuU%2BOLGnv%2Fn%2FkgaQKeH%2B6z%2BwvyBB%2BKS5gSijGGTkoNQnoDY1%2Bp9WoZYsIIP2uQpXxDLQFydW8eGBy%2FZwqIZmbpbOfKGBKgR5oAl02Fa3fMbYV%2B8RS9g11dG0ivcFR5%2Fo1l8%2BoOZ1sxLxQsLJzxhiKTC0YRcvFrMUmO8QV1hGiLSWATPP%2F85%2FZju0VP2AyhsAkQCNHKJODJhm43FkpWvQ5d3SODH3nbN%2BFVciMJjQ6MMGOqUBiVa5qHiaqAnM7Emb2Iko%2BdtIbfTpRP%2F2j5hQOutZgQwDw4bLLTAPCz%2Br3NDQ3HAtDf%2BPsiPpTXZZp0NPjlCwWjSJi%2Be0B989fS%2F7TK8yLET7%2FE0fsLWlLrc8FQjmN5STeU29nLg7DlcZFLhNPyQS3ZXw6iTmMTx%2B6edJGwlWWOEB21k%2BoZDwtZXvMpojTuTBPcqMF7RPWcMJ0BoliUqdj1xMggXN&X-Amz-Signature=64f1e08d4a3d5b005d13c9a67909861c42b4ab544a3067938c2d6345e360dd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJD55PA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzwHbUelhwljemjy8SORYdNaOzqe1sr22ly9DW12OaPQIgL4ZBzJ%2F9kImvdZRElsXCYrSydCVGzI2XUIKXG9SPWoQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG6SaYjFcbE41xQ%2FircAxiV3fkvqBKynJG5Q3Hqwq%2Bi1Qz2lc2A3CUTG3yc25Ezs2WuAmQcIS07DFvGd7OVM8t9M7oVgJB%2BXnh0KvZzgqk2WkS02swT1lgv2D5uWzZoJRzKukC%2Bat%2F7%2FqILOdDtguYduKrQqa3nxvJcHLTMjSESc%2FN4E%2F8QgNSxrmquvmgYJGwnj7G7r6jg37%2F1GeiHfBFAT8RTTBDelKnCcIzFzxaUIh%2FpAKHwF%2FDgfHdDunUz8UPI6yWDOks5CLICN%2B5%2BlqF8KbK8%2Bb4gbAmoTaLPtTFR%2FZF%2B8O24TvEwCtZOfA6F0rsjYyM6FiCdlZQrGNgAsmVM21rbqAj8Ph2fyE%2B3bENY%2Bc3KLS8uZLY%2F%2FtNRFk6f3j77lFnz6Xd8Rexx8d3bDPTAQZxE%2FuGMmInwL9TGB8ACPuU%2BOLGnv%2Fn%2FkgaQKeH%2B6z%2BwvyBB%2BKS5gSijGGTkoNQnoDY1%2Bp9WoZYsIIP2uQpXxDLQFydW8eGBy%2FZwqIZmbpbOfKGBKgR5oAl02Fa3fMbYV%2B8RS9g11dG0ivcFR5%2Fo1l8%2BoOZ1sxLxQsLJzxhiKTC0YRcvFrMUmO8QV1hGiLSWATPP%2F85%2FZju0VP2AyhsAkQCNHKJODJhm43FkpWvQ5d3SODH3nbN%2BFVciMJjQ6MMGOqUBiVa5qHiaqAnM7Emb2Iko%2BdtIbfTpRP%2F2j5hQOutZgQwDw4bLLTAPCz%2Br3NDQ3HAtDf%2BPsiPpTXZZp0NPjlCwWjSJi%2Be0B989fS%2F7TK8yLET7%2FE0fsLWlLrc8FQjmN5STeU29nLg7DlcZFLhNPyQS3ZXw6iTmMTx%2B6edJGwlWWOEB21k%2BoZDwtZXvMpojTuTBPcqMF7RPWcMJ0BoliUqdj1xMggXN&X-Amz-Signature=8d72c084cbe26b1d87a109b04bb87c2c962fd2f40db819c0c63bdf91c571955e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJD55PA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzwHbUelhwljemjy8SORYdNaOzqe1sr22ly9DW12OaPQIgL4ZBzJ%2F9kImvdZRElsXCYrSydCVGzI2XUIKXG9SPWoQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG6SaYjFcbE41xQ%2FircAxiV3fkvqBKynJG5Q3Hqwq%2Bi1Qz2lc2A3CUTG3yc25Ezs2WuAmQcIS07DFvGd7OVM8t9M7oVgJB%2BXnh0KvZzgqk2WkS02swT1lgv2D5uWzZoJRzKukC%2Bat%2F7%2FqILOdDtguYduKrQqa3nxvJcHLTMjSESc%2FN4E%2F8QgNSxrmquvmgYJGwnj7G7r6jg37%2F1GeiHfBFAT8RTTBDelKnCcIzFzxaUIh%2FpAKHwF%2FDgfHdDunUz8UPI6yWDOks5CLICN%2B5%2BlqF8KbK8%2Bb4gbAmoTaLPtTFR%2FZF%2B8O24TvEwCtZOfA6F0rsjYyM6FiCdlZQrGNgAsmVM21rbqAj8Ph2fyE%2B3bENY%2Bc3KLS8uZLY%2F%2FtNRFk6f3j77lFnz6Xd8Rexx8d3bDPTAQZxE%2FuGMmInwL9TGB8ACPuU%2BOLGnv%2Fn%2FkgaQKeH%2B6z%2BwvyBB%2BKS5gSijGGTkoNQnoDY1%2Bp9WoZYsIIP2uQpXxDLQFydW8eGBy%2FZwqIZmbpbOfKGBKgR5oAl02Fa3fMbYV%2B8RS9g11dG0ivcFR5%2Fo1l8%2BoOZ1sxLxQsLJzxhiKTC0YRcvFrMUmO8QV1hGiLSWATPP%2F85%2FZju0VP2AyhsAkQCNHKJODJhm43FkpWvQ5d3SODH3nbN%2BFVciMJjQ6MMGOqUBiVa5qHiaqAnM7Emb2Iko%2BdtIbfTpRP%2F2j5hQOutZgQwDw4bLLTAPCz%2Br3NDQ3HAtDf%2BPsiPpTXZZp0NPjlCwWjSJi%2Be0B989fS%2F7TK8yLET7%2FE0fsLWlLrc8FQjmN5STeU29nLg7DlcZFLhNPyQS3ZXw6iTmMTx%2B6edJGwlWWOEB21k%2BoZDwtZXvMpojTuTBPcqMF7RPWcMJ0BoliUqdj1xMggXN&X-Amz-Signature=302ac4c65d119e9969ec88a227e3e4921001cd533fe3434a46bf27cf4470d407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGJD55PA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzwHbUelhwljemjy8SORYdNaOzqe1sr22ly9DW12OaPQIgL4ZBzJ%2F9kImvdZRElsXCYrSydCVGzI2XUIKXG9SPWoQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG6SaYjFcbE41xQ%2FircAxiV3fkvqBKynJG5Q3Hqwq%2Bi1Qz2lc2A3CUTG3yc25Ezs2WuAmQcIS07DFvGd7OVM8t9M7oVgJB%2BXnh0KvZzgqk2WkS02swT1lgv2D5uWzZoJRzKukC%2Bat%2F7%2FqILOdDtguYduKrQqa3nxvJcHLTMjSESc%2FN4E%2F8QgNSxrmquvmgYJGwnj7G7r6jg37%2F1GeiHfBFAT8RTTBDelKnCcIzFzxaUIh%2FpAKHwF%2FDgfHdDunUz8UPI6yWDOks5CLICN%2B5%2BlqF8KbK8%2Bb4gbAmoTaLPtTFR%2FZF%2B8O24TvEwCtZOfA6F0rsjYyM6FiCdlZQrGNgAsmVM21rbqAj8Ph2fyE%2B3bENY%2Bc3KLS8uZLY%2F%2FtNRFk6f3j77lFnz6Xd8Rexx8d3bDPTAQZxE%2FuGMmInwL9TGB8ACPuU%2BOLGnv%2Fn%2FkgaQKeH%2B6z%2BwvyBB%2BKS5gSijGGTkoNQnoDY1%2Bp9WoZYsIIP2uQpXxDLQFydW8eGBy%2FZwqIZmbpbOfKGBKgR5oAl02Fa3fMbYV%2B8RS9g11dG0ivcFR5%2Fo1l8%2BoOZ1sxLxQsLJzxhiKTC0YRcvFrMUmO8QV1hGiLSWATPP%2F85%2FZju0VP2AyhsAkQCNHKJODJhm43FkpWvQ5d3SODH3nbN%2BFVciMJjQ6MMGOqUBiVa5qHiaqAnM7Emb2Iko%2BdtIbfTpRP%2F2j5hQOutZgQwDw4bLLTAPCz%2Br3NDQ3HAtDf%2BPsiPpTXZZp0NPjlCwWjSJi%2Be0B989fS%2F7TK8yLET7%2FE0fsLWlLrc8FQjmN5STeU29nLg7DlcZFLhNPyQS3ZXw6iTmMTx%2B6edJGwlWWOEB21k%2BoZDwtZXvMpojTuTBPcqMF7RPWcMJ0BoliUqdj1xMggXN&X-Amz-Signature=04d8271152be73431a0c49bcc4c8e22e18c085fdff7a94421a2afd990c4415fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
