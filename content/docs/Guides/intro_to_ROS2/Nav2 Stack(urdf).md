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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUGHQST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSOiLril3PKRPCtvp5vUbyutNPpCkzhE0bpEuDGuTbnAiEAnPWuc0ggndhUXA5K4JESZiLaYBOUI6h7IVv2Ka8sfnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaf9D%2BDcG2Oxs6MLircA4eMWBdZdPMMtVa%2Fh6AaJsyl15buxy3lfZURFV79%2Bc3vmlkQxzATlYSQtOlMES0BH623Ng17D7VGSKHbbk%2B4WAkw4cNG0ZxukI1NMJWa1KtvldET5vws3qYE2WV3xwmkv%2FVLOO9xJONdEdDEqHaeQJOF8eiDWb1rrgyqrzHMn%2BNisnDk%2Ff1DWB%2FQQ3r%2FSP6EF0bkyDWPDCUlYXWEob8XRRTXDkO9ygFvx6WNwZmxyJOJzK9zEOC640kzxO8cjLn%2FNii3Iys0EZvV2hD%2BBpUDLEC19gWoARLapSkjlxNl1BFhndNeNiCESz7tKcvrk12XYMDLkDl1KvIAM%2BXT3HIOOsNNxzyYTxRQryp7qT6yb1GijxEQO%2FH5OK8vdaEgqtnXGOYZjujmUEpupU6Y%2BBPIceYIetx2Dd%2F1%2Fd0kABHWsOr1%2BVkRB%2Fcn8zyrZKMwZFnmGLnJkweQwM0tp0jnJOcMPEd5Bo%2FZGt4FnsWAw9rt4SbWFqNpOWEq4I8OFuLlGmBVkBqRcJarhGQnZKFYt6WfA6qgGtnrs1mGfcIsFUm4%2FUHg8xYLGO9%2BvUt1x8TG4bJpVFUvI7e8GRjIYHO8%2B6b1IvKb3IvRn3k3YQ3w%2FeI%2B8k8y3KT61kCazmKtIc2SMNWzi8AGOqUB5yJCJnbPrum33jnpusnkdasfGz7pnM7l5UcLtnCAIZj46vj8ebvlJ7mE8258DFUzT1LzrXvyhADhhToGEXVnvmd%2BvtsVRkzDf4WorkZ0Vl887%2FbQ0YYQx7%2FFhkkibeq6Mes9JvKKeEUW%2BSY5B96S5oZgrFIanJ95xCYFHGTE6bcGswyprs%2FXcWtL64xA6CDKYJEGki8HpBKw%2BNLJqyYoFWw%2BGvGz&X-Amz-Signature=3638f7e2740b3df4f9658dd291699e5e9762950ba04800f4f2d6394aa15ac88c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUGHQST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSOiLril3PKRPCtvp5vUbyutNPpCkzhE0bpEuDGuTbnAiEAnPWuc0ggndhUXA5K4JESZiLaYBOUI6h7IVv2Ka8sfnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaf9D%2BDcG2Oxs6MLircA4eMWBdZdPMMtVa%2Fh6AaJsyl15buxy3lfZURFV79%2Bc3vmlkQxzATlYSQtOlMES0BH623Ng17D7VGSKHbbk%2B4WAkw4cNG0ZxukI1NMJWa1KtvldET5vws3qYE2WV3xwmkv%2FVLOO9xJONdEdDEqHaeQJOF8eiDWb1rrgyqrzHMn%2BNisnDk%2Ff1DWB%2FQQ3r%2FSP6EF0bkyDWPDCUlYXWEob8XRRTXDkO9ygFvx6WNwZmxyJOJzK9zEOC640kzxO8cjLn%2FNii3Iys0EZvV2hD%2BBpUDLEC19gWoARLapSkjlxNl1BFhndNeNiCESz7tKcvrk12XYMDLkDl1KvIAM%2BXT3HIOOsNNxzyYTxRQryp7qT6yb1GijxEQO%2FH5OK8vdaEgqtnXGOYZjujmUEpupU6Y%2BBPIceYIetx2Dd%2F1%2Fd0kABHWsOr1%2BVkRB%2Fcn8zyrZKMwZFnmGLnJkweQwM0tp0jnJOcMPEd5Bo%2FZGt4FnsWAw9rt4SbWFqNpOWEq4I8OFuLlGmBVkBqRcJarhGQnZKFYt6WfA6qgGtnrs1mGfcIsFUm4%2FUHg8xYLGO9%2BvUt1x8TG4bJpVFUvI7e8GRjIYHO8%2B6b1IvKb3IvRn3k3YQ3w%2FeI%2B8k8y3KT61kCazmKtIc2SMNWzi8AGOqUB5yJCJnbPrum33jnpusnkdasfGz7pnM7l5UcLtnCAIZj46vj8ebvlJ7mE8258DFUzT1LzrXvyhADhhToGEXVnvmd%2BvtsVRkzDf4WorkZ0Vl887%2FbQ0YYQx7%2FFhkkibeq6Mes9JvKKeEUW%2BSY5B96S5oZgrFIanJ95xCYFHGTE6bcGswyprs%2FXcWtL64xA6CDKYJEGki8HpBKw%2BNLJqyYoFWw%2BGvGz&X-Amz-Signature=b45b4fde33a363af07377894e02e95bb6b39e7bce4d62960c793961b7efbb5ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUGHQST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSOiLril3PKRPCtvp5vUbyutNPpCkzhE0bpEuDGuTbnAiEAnPWuc0ggndhUXA5K4JESZiLaYBOUI6h7IVv2Ka8sfnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaf9D%2BDcG2Oxs6MLircA4eMWBdZdPMMtVa%2Fh6AaJsyl15buxy3lfZURFV79%2Bc3vmlkQxzATlYSQtOlMES0BH623Ng17D7VGSKHbbk%2B4WAkw4cNG0ZxukI1NMJWa1KtvldET5vws3qYE2WV3xwmkv%2FVLOO9xJONdEdDEqHaeQJOF8eiDWb1rrgyqrzHMn%2BNisnDk%2Ff1DWB%2FQQ3r%2FSP6EF0bkyDWPDCUlYXWEob8XRRTXDkO9ygFvx6WNwZmxyJOJzK9zEOC640kzxO8cjLn%2FNii3Iys0EZvV2hD%2BBpUDLEC19gWoARLapSkjlxNl1BFhndNeNiCESz7tKcvrk12XYMDLkDl1KvIAM%2BXT3HIOOsNNxzyYTxRQryp7qT6yb1GijxEQO%2FH5OK8vdaEgqtnXGOYZjujmUEpupU6Y%2BBPIceYIetx2Dd%2F1%2Fd0kABHWsOr1%2BVkRB%2Fcn8zyrZKMwZFnmGLnJkweQwM0tp0jnJOcMPEd5Bo%2FZGt4FnsWAw9rt4SbWFqNpOWEq4I8OFuLlGmBVkBqRcJarhGQnZKFYt6WfA6qgGtnrs1mGfcIsFUm4%2FUHg8xYLGO9%2BvUt1x8TG4bJpVFUvI7e8GRjIYHO8%2B6b1IvKb3IvRn3k3YQ3w%2FeI%2B8k8y3KT61kCazmKtIc2SMNWzi8AGOqUB5yJCJnbPrum33jnpusnkdasfGz7pnM7l5UcLtnCAIZj46vj8ebvlJ7mE8258DFUzT1LzrXvyhADhhToGEXVnvmd%2BvtsVRkzDf4WorkZ0Vl887%2FbQ0YYQx7%2FFhkkibeq6Mes9JvKKeEUW%2BSY5B96S5oZgrFIanJ95xCYFHGTE6bcGswyprs%2FXcWtL64xA6CDKYJEGki8HpBKw%2BNLJqyYoFWw%2BGvGz&X-Amz-Signature=d530a3f0802dacaa2f96ffffef3b39481e8e5726833ff39a5b1092aebe57e703&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUGHQST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSOiLril3PKRPCtvp5vUbyutNPpCkzhE0bpEuDGuTbnAiEAnPWuc0ggndhUXA5K4JESZiLaYBOUI6h7IVv2Ka8sfnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaf9D%2BDcG2Oxs6MLircA4eMWBdZdPMMtVa%2Fh6AaJsyl15buxy3lfZURFV79%2Bc3vmlkQxzATlYSQtOlMES0BH623Ng17D7VGSKHbbk%2B4WAkw4cNG0ZxukI1NMJWa1KtvldET5vws3qYE2WV3xwmkv%2FVLOO9xJONdEdDEqHaeQJOF8eiDWb1rrgyqrzHMn%2BNisnDk%2Ff1DWB%2FQQ3r%2FSP6EF0bkyDWPDCUlYXWEob8XRRTXDkO9ygFvx6WNwZmxyJOJzK9zEOC640kzxO8cjLn%2FNii3Iys0EZvV2hD%2BBpUDLEC19gWoARLapSkjlxNl1BFhndNeNiCESz7tKcvrk12XYMDLkDl1KvIAM%2BXT3HIOOsNNxzyYTxRQryp7qT6yb1GijxEQO%2FH5OK8vdaEgqtnXGOYZjujmUEpupU6Y%2BBPIceYIetx2Dd%2F1%2Fd0kABHWsOr1%2BVkRB%2Fcn8zyrZKMwZFnmGLnJkweQwM0tp0jnJOcMPEd5Bo%2FZGt4FnsWAw9rt4SbWFqNpOWEq4I8OFuLlGmBVkBqRcJarhGQnZKFYt6WfA6qgGtnrs1mGfcIsFUm4%2FUHg8xYLGO9%2BvUt1x8TG4bJpVFUvI7e8GRjIYHO8%2B6b1IvKb3IvRn3k3YQ3w%2FeI%2B8k8y3KT61kCazmKtIc2SMNWzi8AGOqUB5yJCJnbPrum33jnpusnkdasfGz7pnM7l5UcLtnCAIZj46vj8ebvlJ7mE8258DFUzT1LzrXvyhADhhToGEXVnvmd%2BvtsVRkzDf4WorkZ0Vl887%2FbQ0YYQx7%2FFhkkibeq6Mes9JvKKeEUW%2BSY5B96S5oZgrFIanJ95xCYFHGTE6bcGswyprs%2FXcWtL64xA6CDKYJEGki8HpBKw%2BNLJqyYoFWw%2BGvGz&X-Amz-Signature=39991971764e2f17cc2bef51999837c63003c15aa6b6e3483cb6d6d4e9e8a6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUGHQST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSOiLril3PKRPCtvp5vUbyutNPpCkzhE0bpEuDGuTbnAiEAnPWuc0ggndhUXA5K4JESZiLaYBOUI6h7IVv2Ka8sfnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaf9D%2BDcG2Oxs6MLircA4eMWBdZdPMMtVa%2Fh6AaJsyl15buxy3lfZURFV79%2Bc3vmlkQxzATlYSQtOlMES0BH623Ng17D7VGSKHbbk%2B4WAkw4cNG0ZxukI1NMJWa1KtvldET5vws3qYE2WV3xwmkv%2FVLOO9xJONdEdDEqHaeQJOF8eiDWb1rrgyqrzHMn%2BNisnDk%2Ff1DWB%2FQQ3r%2FSP6EF0bkyDWPDCUlYXWEob8XRRTXDkO9ygFvx6WNwZmxyJOJzK9zEOC640kzxO8cjLn%2FNii3Iys0EZvV2hD%2BBpUDLEC19gWoARLapSkjlxNl1BFhndNeNiCESz7tKcvrk12XYMDLkDl1KvIAM%2BXT3HIOOsNNxzyYTxRQryp7qT6yb1GijxEQO%2FH5OK8vdaEgqtnXGOYZjujmUEpupU6Y%2BBPIceYIetx2Dd%2F1%2Fd0kABHWsOr1%2BVkRB%2Fcn8zyrZKMwZFnmGLnJkweQwM0tp0jnJOcMPEd5Bo%2FZGt4FnsWAw9rt4SbWFqNpOWEq4I8OFuLlGmBVkBqRcJarhGQnZKFYt6WfA6qgGtnrs1mGfcIsFUm4%2FUHg8xYLGO9%2BvUt1x8TG4bJpVFUvI7e8GRjIYHO8%2B6b1IvKb3IvRn3k3YQ3w%2FeI%2B8k8y3KT61kCazmKtIc2SMNWzi8AGOqUB5yJCJnbPrum33jnpusnkdasfGz7pnM7l5UcLtnCAIZj46vj8ebvlJ7mE8258DFUzT1LzrXvyhADhhToGEXVnvmd%2BvtsVRkzDf4WorkZ0Vl887%2FbQ0YYQx7%2FFhkkibeq6Mes9JvKKeEUW%2BSY5B96S5oZgrFIanJ95xCYFHGTE6bcGswyprs%2FXcWtL64xA6CDKYJEGki8HpBKw%2BNLJqyYoFWw%2BGvGz&X-Amz-Signature=60c67fe7b8263716cf9c6386a1186578f29ca8be4458c55d058aba978b0dbab6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUGHQST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSOiLril3PKRPCtvp5vUbyutNPpCkzhE0bpEuDGuTbnAiEAnPWuc0ggndhUXA5K4JESZiLaYBOUI6h7IVv2Ka8sfnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaf9D%2BDcG2Oxs6MLircA4eMWBdZdPMMtVa%2Fh6AaJsyl15buxy3lfZURFV79%2Bc3vmlkQxzATlYSQtOlMES0BH623Ng17D7VGSKHbbk%2B4WAkw4cNG0ZxukI1NMJWa1KtvldET5vws3qYE2WV3xwmkv%2FVLOO9xJONdEdDEqHaeQJOF8eiDWb1rrgyqrzHMn%2BNisnDk%2Ff1DWB%2FQQ3r%2FSP6EF0bkyDWPDCUlYXWEob8XRRTXDkO9ygFvx6WNwZmxyJOJzK9zEOC640kzxO8cjLn%2FNii3Iys0EZvV2hD%2BBpUDLEC19gWoARLapSkjlxNl1BFhndNeNiCESz7tKcvrk12XYMDLkDl1KvIAM%2BXT3HIOOsNNxzyYTxRQryp7qT6yb1GijxEQO%2FH5OK8vdaEgqtnXGOYZjujmUEpupU6Y%2BBPIceYIetx2Dd%2F1%2Fd0kABHWsOr1%2BVkRB%2Fcn8zyrZKMwZFnmGLnJkweQwM0tp0jnJOcMPEd5Bo%2FZGt4FnsWAw9rt4SbWFqNpOWEq4I8OFuLlGmBVkBqRcJarhGQnZKFYt6WfA6qgGtnrs1mGfcIsFUm4%2FUHg8xYLGO9%2BvUt1x8TG4bJpVFUvI7e8GRjIYHO8%2B6b1IvKb3IvRn3k3YQ3w%2FeI%2B8k8y3KT61kCazmKtIc2SMNWzi8AGOqUB5yJCJnbPrum33jnpusnkdasfGz7pnM7l5UcLtnCAIZj46vj8ebvlJ7mE8258DFUzT1LzrXvyhADhhToGEXVnvmd%2BvtsVRkzDf4WorkZ0Vl887%2FbQ0YYQx7%2FFhkkibeq6Mes9JvKKeEUW%2BSY5B96S5oZgrFIanJ95xCYFHGTE6bcGswyprs%2FXcWtL64xA6CDKYJEGki8HpBKw%2BNLJqyYoFWw%2BGvGz&X-Amz-Signature=0aec6798dfe2d5580a82783891759f1b8077ea25191b11dc15fa53c9c765ed9a&X-Amz-SignedHeaders=host&x-id=GetObject)
