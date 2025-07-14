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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LH4UKZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F%2BuZUklzXTAGkMfmxLClUdnZIcFc7QtSDMP4byK2hkgIgVeDqhGudOTbrD2v6CAGD1nvLFTXNgqL%2FFwc9%2BikAuU4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDUbtHiKou9Umgf%2FPircA2Il8YSTBUAonZeEp8wjE2U%2FOHDqS1mgxHxTsC1rEnVsR5MnoriJLFyAn3yel%2F7qgaye8e%2FW8WdLb31irWgu9s3RlSz0432sAa5DU3Xm1QbYtZk8ORB8Zcu3p%2BmjsIgBnjrCiKmHlkSgaE87ebVfp9VcK8M9xo%2BNqMuQmm%2FeNkvfJIm%2FMwLQsSEdGfBeYPrAi%2B2N0KMrOQtvf5%2BGbG6ba4jqq1Wg6ie1ywFSYfnI5Cxbxg8e9qKMdnDj%2FvedORZKSSgEVkBdbiiC9QEsZGFDLjToVgierTgd2L1n%2F1trlBsazbT1rBDVT6tLFSnVd3D6HmNF0ByUqA4fNkPtrU44I3XAuVssM0FTKtoXe7cfUIFD3JpRN4MR6liwoBx%2FysolFKOk7mkUzgDLDTPrsDfpojuuXfRUslOt%2BN9ISnqBzqhRbM2sSIrmIXfXFz4eFrbSChERTYr%2FdHllZR7719Mkd%2Fukm1zgfoy4iF7dxeYlbdI0%2Fui6XaX9lrHLplrmqG19DCejk5e9W0nb5qT%2FFCfZzj1ypoE641D79gDt8J8yakXSO1IfbP4120kix2aYInJQQN4bmcOT9saJKrOQhipXZRAp8y10xqo4M8u%2BjzLna5hB1m8mPJzCLzFqmslNMLjM0cMGOqUBDig%2F6JM8EeSH4JOZ9cnm9108J2pNclnwGFbtKDcFdwlPvW%2FFlLJum7aaxLDUO8fB9PZpj1Bwu%2FVCwNiPByXNn9RmDVxSkE6OymTIWUcpJvQJ8vvdY6hbF7g7G6glXRaPUJz4WYwxrvxAhh7ZLppHXKEKZrkpRTf8GU5U7T760Qj9neaANEyhwGNk4QZ9Go2AFz6R7%2B5xYgyTKp2nzxQ4Jk3pmpy9&X-Amz-Signature=15ead4589f94f7018e373552466c4794028702c75e51093b311f9da45b3b8305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LH4UKZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F%2BuZUklzXTAGkMfmxLClUdnZIcFc7QtSDMP4byK2hkgIgVeDqhGudOTbrD2v6CAGD1nvLFTXNgqL%2FFwc9%2BikAuU4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDUbtHiKou9Umgf%2FPircA2Il8YSTBUAonZeEp8wjE2U%2FOHDqS1mgxHxTsC1rEnVsR5MnoriJLFyAn3yel%2F7qgaye8e%2FW8WdLb31irWgu9s3RlSz0432sAa5DU3Xm1QbYtZk8ORB8Zcu3p%2BmjsIgBnjrCiKmHlkSgaE87ebVfp9VcK8M9xo%2BNqMuQmm%2FeNkvfJIm%2FMwLQsSEdGfBeYPrAi%2B2N0KMrOQtvf5%2BGbG6ba4jqq1Wg6ie1ywFSYfnI5Cxbxg8e9qKMdnDj%2FvedORZKSSgEVkBdbiiC9QEsZGFDLjToVgierTgd2L1n%2F1trlBsazbT1rBDVT6tLFSnVd3D6HmNF0ByUqA4fNkPtrU44I3XAuVssM0FTKtoXe7cfUIFD3JpRN4MR6liwoBx%2FysolFKOk7mkUzgDLDTPrsDfpojuuXfRUslOt%2BN9ISnqBzqhRbM2sSIrmIXfXFz4eFrbSChERTYr%2FdHllZR7719Mkd%2Fukm1zgfoy4iF7dxeYlbdI0%2Fui6XaX9lrHLplrmqG19DCejk5e9W0nb5qT%2FFCfZzj1ypoE641D79gDt8J8yakXSO1IfbP4120kix2aYInJQQN4bmcOT9saJKrOQhipXZRAp8y10xqo4M8u%2BjzLna5hB1m8mPJzCLzFqmslNMLjM0cMGOqUBDig%2F6JM8EeSH4JOZ9cnm9108J2pNclnwGFbtKDcFdwlPvW%2FFlLJum7aaxLDUO8fB9PZpj1Bwu%2FVCwNiPByXNn9RmDVxSkE6OymTIWUcpJvQJ8vvdY6hbF7g7G6glXRaPUJz4WYwxrvxAhh7ZLppHXKEKZrkpRTf8GU5U7T760Qj9neaANEyhwGNk4QZ9Go2AFz6R7%2B5xYgyTKp2nzxQ4Jk3pmpy9&X-Amz-Signature=eb0a35344068d406f1eb652d00993c4a09c67183d50ca76d3110d8f7d8b95459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LH4UKZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F%2BuZUklzXTAGkMfmxLClUdnZIcFc7QtSDMP4byK2hkgIgVeDqhGudOTbrD2v6CAGD1nvLFTXNgqL%2FFwc9%2BikAuU4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDUbtHiKou9Umgf%2FPircA2Il8YSTBUAonZeEp8wjE2U%2FOHDqS1mgxHxTsC1rEnVsR5MnoriJLFyAn3yel%2F7qgaye8e%2FW8WdLb31irWgu9s3RlSz0432sAa5DU3Xm1QbYtZk8ORB8Zcu3p%2BmjsIgBnjrCiKmHlkSgaE87ebVfp9VcK8M9xo%2BNqMuQmm%2FeNkvfJIm%2FMwLQsSEdGfBeYPrAi%2B2N0KMrOQtvf5%2BGbG6ba4jqq1Wg6ie1ywFSYfnI5Cxbxg8e9qKMdnDj%2FvedORZKSSgEVkBdbiiC9QEsZGFDLjToVgierTgd2L1n%2F1trlBsazbT1rBDVT6tLFSnVd3D6HmNF0ByUqA4fNkPtrU44I3XAuVssM0FTKtoXe7cfUIFD3JpRN4MR6liwoBx%2FysolFKOk7mkUzgDLDTPrsDfpojuuXfRUslOt%2BN9ISnqBzqhRbM2sSIrmIXfXFz4eFrbSChERTYr%2FdHllZR7719Mkd%2Fukm1zgfoy4iF7dxeYlbdI0%2Fui6XaX9lrHLplrmqG19DCejk5e9W0nb5qT%2FFCfZzj1ypoE641D79gDt8J8yakXSO1IfbP4120kix2aYInJQQN4bmcOT9saJKrOQhipXZRAp8y10xqo4M8u%2BjzLna5hB1m8mPJzCLzFqmslNMLjM0cMGOqUBDig%2F6JM8EeSH4JOZ9cnm9108J2pNclnwGFbtKDcFdwlPvW%2FFlLJum7aaxLDUO8fB9PZpj1Bwu%2FVCwNiPByXNn9RmDVxSkE6OymTIWUcpJvQJ8vvdY6hbF7g7G6glXRaPUJz4WYwxrvxAhh7ZLppHXKEKZrkpRTf8GU5U7T760Qj9neaANEyhwGNk4QZ9Go2AFz6R7%2B5xYgyTKp2nzxQ4Jk3pmpy9&X-Amz-Signature=48be2362cc79b2f0565f1fd13f0d9fbaf28d7c35a4e5eec46aa02620e45b5d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LH4UKZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F%2BuZUklzXTAGkMfmxLClUdnZIcFc7QtSDMP4byK2hkgIgVeDqhGudOTbrD2v6CAGD1nvLFTXNgqL%2FFwc9%2BikAuU4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDUbtHiKou9Umgf%2FPircA2Il8YSTBUAonZeEp8wjE2U%2FOHDqS1mgxHxTsC1rEnVsR5MnoriJLFyAn3yel%2F7qgaye8e%2FW8WdLb31irWgu9s3RlSz0432sAa5DU3Xm1QbYtZk8ORB8Zcu3p%2BmjsIgBnjrCiKmHlkSgaE87ebVfp9VcK8M9xo%2BNqMuQmm%2FeNkvfJIm%2FMwLQsSEdGfBeYPrAi%2B2N0KMrOQtvf5%2BGbG6ba4jqq1Wg6ie1ywFSYfnI5Cxbxg8e9qKMdnDj%2FvedORZKSSgEVkBdbiiC9QEsZGFDLjToVgierTgd2L1n%2F1trlBsazbT1rBDVT6tLFSnVd3D6HmNF0ByUqA4fNkPtrU44I3XAuVssM0FTKtoXe7cfUIFD3JpRN4MR6liwoBx%2FysolFKOk7mkUzgDLDTPrsDfpojuuXfRUslOt%2BN9ISnqBzqhRbM2sSIrmIXfXFz4eFrbSChERTYr%2FdHllZR7719Mkd%2Fukm1zgfoy4iF7dxeYlbdI0%2Fui6XaX9lrHLplrmqG19DCejk5e9W0nb5qT%2FFCfZzj1ypoE641D79gDt8J8yakXSO1IfbP4120kix2aYInJQQN4bmcOT9saJKrOQhipXZRAp8y10xqo4M8u%2BjzLna5hB1m8mPJzCLzFqmslNMLjM0cMGOqUBDig%2F6JM8EeSH4JOZ9cnm9108J2pNclnwGFbtKDcFdwlPvW%2FFlLJum7aaxLDUO8fB9PZpj1Bwu%2FVCwNiPByXNn9RmDVxSkE6OymTIWUcpJvQJ8vvdY6hbF7g7G6glXRaPUJz4WYwxrvxAhh7ZLppHXKEKZrkpRTf8GU5U7T760Qj9neaANEyhwGNk4QZ9Go2AFz6R7%2B5xYgyTKp2nzxQ4Jk3pmpy9&X-Amz-Signature=c8c626d8e48abb366b427f9c0ec7a804714ce4058b8342710bac3f4b56bb5366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LH4UKZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F%2BuZUklzXTAGkMfmxLClUdnZIcFc7QtSDMP4byK2hkgIgVeDqhGudOTbrD2v6CAGD1nvLFTXNgqL%2FFwc9%2BikAuU4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDUbtHiKou9Umgf%2FPircA2Il8YSTBUAonZeEp8wjE2U%2FOHDqS1mgxHxTsC1rEnVsR5MnoriJLFyAn3yel%2F7qgaye8e%2FW8WdLb31irWgu9s3RlSz0432sAa5DU3Xm1QbYtZk8ORB8Zcu3p%2BmjsIgBnjrCiKmHlkSgaE87ebVfp9VcK8M9xo%2BNqMuQmm%2FeNkvfJIm%2FMwLQsSEdGfBeYPrAi%2B2N0KMrOQtvf5%2BGbG6ba4jqq1Wg6ie1ywFSYfnI5Cxbxg8e9qKMdnDj%2FvedORZKSSgEVkBdbiiC9QEsZGFDLjToVgierTgd2L1n%2F1trlBsazbT1rBDVT6tLFSnVd3D6HmNF0ByUqA4fNkPtrU44I3XAuVssM0FTKtoXe7cfUIFD3JpRN4MR6liwoBx%2FysolFKOk7mkUzgDLDTPrsDfpojuuXfRUslOt%2BN9ISnqBzqhRbM2sSIrmIXfXFz4eFrbSChERTYr%2FdHllZR7719Mkd%2Fukm1zgfoy4iF7dxeYlbdI0%2Fui6XaX9lrHLplrmqG19DCejk5e9W0nb5qT%2FFCfZzj1ypoE641D79gDt8J8yakXSO1IfbP4120kix2aYInJQQN4bmcOT9saJKrOQhipXZRAp8y10xqo4M8u%2BjzLna5hB1m8mPJzCLzFqmslNMLjM0cMGOqUBDig%2F6JM8EeSH4JOZ9cnm9108J2pNclnwGFbtKDcFdwlPvW%2FFlLJum7aaxLDUO8fB9PZpj1Bwu%2FVCwNiPByXNn9RmDVxSkE6OymTIWUcpJvQJ8vvdY6hbF7g7G6glXRaPUJz4WYwxrvxAhh7ZLppHXKEKZrkpRTf8GU5U7T760Qj9neaANEyhwGNk4QZ9Go2AFz6R7%2B5xYgyTKp2nzxQ4Jk3pmpy9&X-Amz-Signature=bb3a1604e2eefed6329ff59f1eeeb65fa4144810e39ad91e17564494947faae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656LH4UKZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2F%2BuZUklzXTAGkMfmxLClUdnZIcFc7QtSDMP4byK2hkgIgVeDqhGudOTbrD2v6CAGD1nvLFTXNgqL%2FFwc9%2BikAuU4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDUbtHiKou9Umgf%2FPircA2Il8YSTBUAonZeEp8wjE2U%2FOHDqS1mgxHxTsC1rEnVsR5MnoriJLFyAn3yel%2F7qgaye8e%2FW8WdLb31irWgu9s3RlSz0432sAa5DU3Xm1QbYtZk8ORB8Zcu3p%2BmjsIgBnjrCiKmHlkSgaE87ebVfp9VcK8M9xo%2BNqMuQmm%2FeNkvfJIm%2FMwLQsSEdGfBeYPrAi%2B2N0KMrOQtvf5%2BGbG6ba4jqq1Wg6ie1ywFSYfnI5Cxbxg8e9qKMdnDj%2FvedORZKSSgEVkBdbiiC9QEsZGFDLjToVgierTgd2L1n%2F1trlBsazbT1rBDVT6tLFSnVd3D6HmNF0ByUqA4fNkPtrU44I3XAuVssM0FTKtoXe7cfUIFD3JpRN4MR6liwoBx%2FysolFKOk7mkUzgDLDTPrsDfpojuuXfRUslOt%2BN9ISnqBzqhRbM2sSIrmIXfXFz4eFrbSChERTYr%2FdHllZR7719Mkd%2Fukm1zgfoy4iF7dxeYlbdI0%2Fui6XaX9lrHLplrmqG19DCejk5e9W0nb5qT%2FFCfZzj1ypoE641D79gDt8J8yakXSO1IfbP4120kix2aYInJQQN4bmcOT9saJKrOQhipXZRAp8y10xqo4M8u%2BjzLna5hB1m8mPJzCLzFqmslNMLjM0cMGOqUBDig%2F6JM8EeSH4JOZ9cnm9108J2pNclnwGFbtKDcFdwlPvW%2FFlLJum7aaxLDUO8fB9PZpj1Bwu%2FVCwNiPByXNn9RmDVxSkE6OymTIWUcpJvQJ8vvdY6hbF7g7G6glXRaPUJz4WYwxrvxAhh7ZLppHXKEKZrkpRTf8GU5U7T760Qj9neaANEyhwGNk4QZ9Go2AFz6R7%2B5xYgyTKp2nzxQ4Jk3pmpy9&X-Amz-Signature=a2ad124971cbee13cfbe7ab9d2493aede9868f3f0003115c3c622d447d7a16c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
