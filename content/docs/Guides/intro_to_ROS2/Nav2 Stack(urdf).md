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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLRBVG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD5Txa2WNRlT1YG2SbXFRxLFfQnvOin%2F1cMlMpjiRkAiEAiO44rwIFRm0Roi7A3fUBLXhBFA%2FspRdFq7nzJ4uHGUUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAKw5ZV4KU%2FMjQNAISrcA6RhG4msaNcJvG2ptu%2F5uJZHY2VsNZpqaOgiSMOanWAOo2duox8N0IPHfLDpQbqqiUSNPqEALaTo7WWiX3jh1D%2BU03hqq9zK%2BbepK5Y3KGMCek3NgG8QVYC5dBsIBWum5ZO6ofyRotThr8OPU%2B3ipHvtA2chzgtRwRFp7riRch%2BV0hcZgOsIxwz9JlQ8FRyL04sBf%2BBQRKMDT7q0gGc69GScKkPKDMCIWKdrpOaH5kqbxxf8L7%2F3K4%2B6J%2BORlQS2x6xWuJ79UC2CRdjXQs%2BGzhO%2FEPxeUdBSxndYs3s3lJgi%2Ff%2BqeAc2EP9Id55CjnzVg4fmDnDsHS%2FDta4jLveE7LCfRhdxV4d8n51dNTEDK6Hq%2FADuuH41UmG7vkLRalsitICcO4cxDzAR907DIRQGQyGGSr9OjrEh4mltaCcCVtVa00u8gc%2B6v1OMt8yVyJOc%2B9D5WI49VR6gim4z6kqVONjJaNhQS%2FHd%2BqZmnf7IW9w90uMbJb3%2BB7dLKyGipqtwjhPexDodFRG2V5dI5O39TtfPOKayRwJomm9gRlZHoGx5c99IFyYi7S9ttoieVhP%2BiFU52oRzDF7B3p7gJpzUjDjfjVgWEHbHs2K%2Bsp%2BrZlKUh3I%2BpSgST0fNLddnMIuki78GOqUBr8h0s40DiU%2BXb4%2FfsjiOxolqaKg5NAkBIXCNMHlCrSSmDo1xgASFoqVOL6Yd39T2%2B%2BeWJfEr0Cx5qRxtU8sqXrgow8XNCxJEfyhbtRXmbcDrO7YJSbyTxln6fq8jbNCuxZT6oRqz8iyTGOEs%2BDrAtdf4IXdpZnibXDOHH7Wobr9DKyDEd386BlvJSRpZf0U4pL45RcDbsZ7bk25uIzcC7wApc1d2&X-Amz-Signature=df2f29577f8165778dedf2e04ffc304c63ac9e433377e8ef13b54d42dd9756ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLRBVG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD5Txa2WNRlT1YG2SbXFRxLFfQnvOin%2F1cMlMpjiRkAiEAiO44rwIFRm0Roi7A3fUBLXhBFA%2FspRdFq7nzJ4uHGUUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAKw5ZV4KU%2FMjQNAISrcA6RhG4msaNcJvG2ptu%2F5uJZHY2VsNZpqaOgiSMOanWAOo2duox8N0IPHfLDpQbqqiUSNPqEALaTo7WWiX3jh1D%2BU03hqq9zK%2BbepK5Y3KGMCek3NgG8QVYC5dBsIBWum5ZO6ofyRotThr8OPU%2B3ipHvtA2chzgtRwRFp7riRch%2BV0hcZgOsIxwz9JlQ8FRyL04sBf%2BBQRKMDT7q0gGc69GScKkPKDMCIWKdrpOaH5kqbxxf8L7%2F3K4%2B6J%2BORlQS2x6xWuJ79UC2CRdjXQs%2BGzhO%2FEPxeUdBSxndYs3s3lJgi%2Ff%2BqeAc2EP9Id55CjnzVg4fmDnDsHS%2FDta4jLveE7LCfRhdxV4d8n51dNTEDK6Hq%2FADuuH41UmG7vkLRalsitICcO4cxDzAR907DIRQGQyGGSr9OjrEh4mltaCcCVtVa00u8gc%2B6v1OMt8yVyJOc%2B9D5WI49VR6gim4z6kqVONjJaNhQS%2FHd%2BqZmnf7IW9w90uMbJb3%2BB7dLKyGipqtwjhPexDodFRG2V5dI5O39TtfPOKayRwJomm9gRlZHoGx5c99IFyYi7S9ttoieVhP%2BiFU52oRzDF7B3p7gJpzUjDjfjVgWEHbHs2K%2Bsp%2BrZlKUh3I%2BpSgST0fNLddnMIuki78GOqUBr8h0s40DiU%2BXb4%2FfsjiOxolqaKg5NAkBIXCNMHlCrSSmDo1xgASFoqVOL6Yd39T2%2B%2BeWJfEr0Cx5qRxtU8sqXrgow8XNCxJEfyhbtRXmbcDrO7YJSbyTxln6fq8jbNCuxZT6oRqz8iyTGOEs%2BDrAtdf4IXdpZnibXDOHH7Wobr9DKyDEd386BlvJSRpZf0U4pL45RcDbsZ7bk25uIzcC7wApc1d2&X-Amz-Signature=b6c8f7733febf97f1cabcc4ff155fec90b8849a4ce40cae7515f922135c89821&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLRBVG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD5Txa2WNRlT1YG2SbXFRxLFfQnvOin%2F1cMlMpjiRkAiEAiO44rwIFRm0Roi7A3fUBLXhBFA%2FspRdFq7nzJ4uHGUUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAKw5ZV4KU%2FMjQNAISrcA6RhG4msaNcJvG2ptu%2F5uJZHY2VsNZpqaOgiSMOanWAOo2duox8N0IPHfLDpQbqqiUSNPqEALaTo7WWiX3jh1D%2BU03hqq9zK%2BbepK5Y3KGMCek3NgG8QVYC5dBsIBWum5ZO6ofyRotThr8OPU%2B3ipHvtA2chzgtRwRFp7riRch%2BV0hcZgOsIxwz9JlQ8FRyL04sBf%2BBQRKMDT7q0gGc69GScKkPKDMCIWKdrpOaH5kqbxxf8L7%2F3K4%2B6J%2BORlQS2x6xWuJ79UC2CRdjXQs%2BGzhO%2FEPxeUdBSxndYs3s3lJgi%2Ff%2BqeAc2EP9Id55CjnzVg4fmDnDsHS%2FDta4jLveE7LCfRhdxV4d8n51dNTEDK6Hq%2FADuuH41UmG7vkLRalsitICcO4cxDzAR907DIRQGQyGGSr9OjrEh4mltaCcCVtVa00u8gc%2B6v1OMt8yVyJOc%2B9D5WI49VR6gim4z6kqVONjJaNhQS%2FHd%2BqZmnf7IW9w90uMbJb3%2BB7dLKyGipqtwjhPexDodFRG2V5dI5O39TtfPOKayRwJomm9gRlZHoGx5c99IFyYi7S9ttoieVhP%2BiFU52oRzDF7B3p7gJpzUjDjfjVgWEHbHs2K%2Bsp%2BrZlKUh3I%2BpSgST0fNLddnMIuki78GOqUBr8h0s40DiU%2BXb4%2FfsjiOxolqaKg5NAkBIXCNMHlCrSSmDo1xgASFoqVOL6Yd39T2%2B%2BeWJfEr0Cx5qRxtU8sqXrgow8XNCxJEfyhbtRXmbcDrO7YJSbyTxln6fq8jbNCuxZT6oRqz8iyTGOEs%2BDrAtdf4IXdpZnibXDOHH7Wobr9DKyDEd386BlvJSRpZf0U4pL45RcDbsZ7bk25uIzcC7wApc1d2&X-Amz-Signature=16433a6b42ec24e81b0189c5fa747cff3a3540c337cd38b923622dad81bcb538&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLRBVG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD5Txa2WNRlT1YG2SbXFRxLFfQnvOin%2F1cMlMpjiRkAiEAiO44rwIFRm0Roi7A3fUBLXhBFA%2FspRdFq7nzJ4uHGUUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAKw5ZV4KU%2FMjQNAISrcA6RhG4msaNcJvG2ptu%2F5uJZHY2VsNZpqaOgiSMOanWAOo2duox8N0IPHfLDpQbqqiUSNPqEALaTo7WWiX3jh1D%2BU03hqq9zK%2BbepK5Y3KGMCek3NgG8QVYC5dBsIBWum5ZO6ofyRotThr8OPU%2B3ipHvtA2chzgtRwRFp7riRch%2BV0hcZgOsIxwz9JlQ8FRyL04sBf%2BBQRKMDT7q0gGc69GScKkPKDMCIWKdrpOaH5kqbxxf8L7%2F3K4%2B6J%2BORlQS2x6xWuJ79UC2CRdjXQs%2BGzhO%2FEPxeUdBSxndYs3s3lJgi%2Ff%2BqeAc2EP9Id55CjnzVg4fmDnDsHS%2FDta4jLveE7LCfRhdxV4d8n51dNTEDK6Hq%2FADuuH41UmG7vkLRalsitICcO4cxDzAR907DIRQGQyGGSr9OjrEh4mltaCcCVtVa00u8gc%2B6v1OMt8yVyJOc%2B9D5WI49VR6gim4z6kqVONjJaNhQS%2FHd%2BqZmnf7IW9w90uMbJb3%2BB7dLKyGipqtwjhPexDodFRG2V5dI5O39TtfPOKayRwJomm9gRlZHoGx5c99IFyYi7S9ttoieVhP%2BiFU52oRzDF7B3p7gJpzUjDjfjVgWEHbHs2K%2Bsp%2BrZlKUh3I%2BpSgST0fNLddnMIuki78GOqUBr8h0s40DiU%2BXb4%2FfsjiOxolqaKg5NAkBIXCNMHlCrSSmDo1xgASFoqVOL6Yd39T2%2B%2BeWJfEr0Cx5qRxtU8sqXrgow8XNCxJEfyhbtRXmbcDrO7YJSbyTxln6fq8jbNCuxZT6oRqz8iyTGOEs%2BDrAtdf4IXdpZnibXDOHH7Wobr9DKyDEd386BlvJSRpZf0U4pL45RcDbsZ7bk25uIzcC7wApc1d2&X-Amz-Signature=1f17c2c44485f66bdd33c4aea7c348f8769ad74a5548ca8fc32e0f8b50e102df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLRBVG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD5Txa2WNRlT1YG2SbXFRxLFfQnvOin%2F1cMlMpjiRkAiEAiO44rwIFRm0Roi7A3fUBLXhBFA%2FspRdFq7nzJ4uHGUUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAKw5ZV4KU%2FMjQNAISrcA6RhG4msaNcJvG2ptu%2F5uJZHY2VsNZpqaOgiSMOanWAOo2duox8N0IPHfLDpQbqqiUSNPqEALaTo7WWiX3jh1D%2BU03hqq9zK%2BbepK5Y3KGMCek3NgG8QVYC5dBsIBWum5ZO6ofyRotThr8OPU%2B3ipHvtA2chzgtRwRFp7riRch%2BV0hcZgOsIxwz9JlQ8FRyL04sBf%2BBQRKMDT7q0gGc69GScKkPKDMCIWKdrpOaH5kqbxxf8L7%2F3K4%2B6J%2BORlQS2x6xWuJ79UC2CRdjXQs%2BGzhO%2FEPxeUdBSxndYs3s3lJgi%2Ff%2BqeAc2EP9Id55CjnzVg4fmDnDsHS%2FDta4jLveE7LCfRhdxV4d8n51dNTEDK6Hq%2FADuuH41UmG7vkLRalsitICcO4cxDzAR907DIRQGQyGGSr9OjrEh4mltaCcCVtVa00u8gc%2B6v1OMt8yVyJOc%2B9D5WI49VR6gim4z6kqVONjJaNhQS%2FHd%2BqZmnf7IW9w90uMbJb3%2BB7dLKyGipqtwjhPexDodFRG2V5dI5O39TtfPOKayRwJomm9gRlZHoGx5c99IFyYi7S9ttoieVhP%2BiFU52oRzDF7B3p7gJpzUjDjfjVgWEHbHs2K%2Bsp%2BrZlKUh3I%2BpSgST0fNLddnMIuki78GOqUBr8h0s40DiU%2BXb4%2FfsjiOxolqaKg5NAkBIXCNMHlCrSSmDo1xgASFoqVOL6Yd39T2%2B%2BeWJfEr0Cx5qRxtU8sqXrgow8XNCxJEfyhbtRXmbcDrO7YJSbyTxln6fq8jbNCuxZT6oRqz8iyTGOEs%2BDrAtdf4IXdpZnibXDOHH7Wobr9DKyDEd386BlvJSRpZf0U4pL45RcDbsZ7bk25uIzcC7wApc1d2&X-Amz-Signature=66de7d58b87fd6489a84284a1f8786198e0198410600509a910febdecd740cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLRBVG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD5Txa2WNRlT1YG2SbXFRxLFfQnvOin%2F1cMlMpjiRkAiEAiO44rwIFRm0Roi7A3fUBLXhBFA%2FspRdFq7nzJ4uHGUUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAKw5ZV4KU%2FMjQNAISrcA6RhG4msaNcJvG2ptu%2F5uJZHY2VsNZpqaOgiSMOanWAOo2duox8N0IPHfLDpQbqqiUSNPqEALaTo7WWiX3jh1D%2BU03hqq9zK%2BbepK5Y3KGMCek3NgG8QVYC5dBsIBWum5ZO6ofyRotThr8OPU%2B3ipHvtA2chzgtRwRFp7riRch%2BV0hcZgOsIxwz9JlQ8FRyL04sBf%2BBQRKMDT7q0gGc69GScKkPKDMCIWKdrpOaH5kqbxxf8L7%2F3K4%2B6J%2BORlQS2x6xWuJ79UC2CRdjXQs%2BGzhO%2FEPxeUdBSxndYs3s3lJgi%2Ff%2BqeAc2EP9Id55CjnzVg4fmDnDsHS%2FDta4jLveE7LCfRhdxV4d8n51dNTEDK6Hq%2FADuuH41UmG7vkLRalsitICcO4cxDzAR907DIRQGQyGGSr9OjrEh4mltaCcCVtVa00u8gc%2B6v1OMt8yVyJOc%2B9D5WI49VR6gim4z6kqVONjJaNhQS%2FHd%2BqZmnf7IW9w90uMbJb3%2BB7dLKyGipqtwjhPexDodFRG2V5dI5O39TtfPOKayRwJomm9gRlZHoGx5c99IFyYi7S9ttoieVhP%2BiFU52oRzDF7B3p7gJpzUjDjfjVgWEHbHs2K%2Bsp%2BrZlKUh3I%2BpSgST0fNLddnMIuki78GOqUBr8h0s40DiU%2BXb4%2FfsjiOxolqaKg5NAkBIXCNMHlCrSSmDo1xgASFoqVOL6Yd39T2%2B%2BeWJfEr0Cx5qRxtU8sqXrgow8XNCxJEfyhbtRXmbcDrO7YJSbyTxln6fq8jbNCuxZT6oRqz8iyTGOEs%2BDrAtdf4IXdpZnibXDOHH7Wobr9DKyDEd386BlvJSRpZf0U4pL45RcDbsZ7bk25uIzcC7wApc1d2&X-Amz-Signature=f2dcb894c77837186184c486ad4e11a31a95e7ccec9a638588cc313d9c560650&X-Amz-SignedHeaders=host&x-id=GetObject)
