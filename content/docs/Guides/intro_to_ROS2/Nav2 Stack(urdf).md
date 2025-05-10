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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=32b44a6fcaae539bd245485b96c2f4eb7ef45c992a64003e1bcaaf325b52e2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=76be4ca46d8a532592020799ea5bfadd4dd41edd19f39ba4e0a1b03c59623aef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=609bdd3f589c0e05175c9aded893041dcbd86c1ed69c65cde1e8c26ad898e454&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=da9113383fdff6d48a8e9bfcf456b0c1b48c15e2d93184aee9ff940bbbdf2e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=4581b7b79694a89ed2db533bcfa151d9e120ee7fe7c344563ed72ac3907a2bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBVVAXS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtTGkX6HpSCyAqtXXg1SWLUPkbzByfZVms6cXEIMwHfQIgPAuiMeYeEOrk6Scjy8ajxaz7qB%2FqasHovQyQHgALIRwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUs6RYPtU%2FVSlA5FSrcA7NiYsPfdP0ifDn3ebtjrmiZl7FD3B1ky%2Fh3s%2BAe8FH2kdoOd%2FMBdDjFlbzXFyb%2F%2FcHTq4Cz1klqMfKy%2FRrP3XTDXirun5%2BosVnAW464%2BGSQEIor2GWia8KjLlIC3wZpi0Sx6XvC9eNdo81mHFqJt9TD73FQ84yXYqXD8PDNifEfBB6mqnJjuNdtpJ4LpWfZwos722xKXnR4CiTFcRgHs0DMnvA3p7vkIg1dLAszQSUGJm%2FhXnFSswQHiQxitSWYXTFyne%2Flmqxj5n29p1o6wrMuNUaS5LHujGMpd%2FUNefw0UwCeWwBCXmBraBjWRR0JpjP%2B8pkYEUWY9UYwszTg%2B3%2FVAXkYpTh66V29rUG12FbDzFfL7gMfQGT6sLMd0ihhIDAKlbWB%2Fom4Bmnr3anyXWgsA6B%2FRaIExAXm6OD1nx7YHxtw%2FTfnfkpAQ0iLKl80OWbNFscNKPvBLxLivwG%2B3pGMrjkQBSVaqQs3MtdnJwzgFAIUmmhB4ItlrCSHwgJQkpZEbp7MBESuyL9Wha8iYpr4H9MwwK0PJ3ihRZhap1dZ3bHnfPGfjMqwMMP3VQDecuS3FMrGXEQ7AT%2FyljYs1Lt2ATLrkDrT8co2NKVcN%2BeTDWQbmsqhIXtUUTuZMOaP%2FMAGOqUBufZW4sNbJ1Uf0JeQJiJhJO92ZT%2Fne4SmNMYtrMuOyaN069KCe24V72fMnTzQOiQhWAToclZlFn%2BjILIt4XQmDS3aULPK5aCPKQS2rubLK5aZj1vXQx4AqKNX6WPyS44m3MIAC%2BfEt4dSUBLlhllMaB7MykjNFQPnSngUW5cmUqtAKLVW%2FBGGfA%2BQ4ht42qoQpYOz%2BrOCwv5mHhQ7yZCKQpXMHQmF&X-Amz-Signature=05e314bce4cfc0954dbac67ee26ed9e0a6a60bcf00b537910a7c830c6265b834&X-Amz-SignedHeaders=host&x-id=GetObject)
