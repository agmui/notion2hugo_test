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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RY7D5PX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF4nN5KlvomlTR5N5ccAS8y9EPvNGbfsPEOk89zUdV2AiEAhPQEFkdP2CumriAb12%2BkM3T8sQjwpDUNSQnDOoqJljQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLC%2BlzwZVcArdY5wOSrcAyRaEs%2FLz10GMV0IkrCBqQvbQbZol9ftnRwltNNWq%2BttagdGl%2BApmVyjd116Uakc7NiwcX3jc3c%2FHHE2Mg9tzjan%2BHJIv%2B6pVNsdzqO8jVJaBTSyj6FlORZoPIIZdVkSiO3azU%2BoI4z4Bj8EAT%2Bfp7iz9Dyc%2Fx%2F7yf32p9SgJpM0Lnoha7I9qLhz1NhxYwY7isTDO1N2FdtteyurATmJHq13BWiK16PJ3PL1IGFqPNxEXX89PZ0bKR2Y6EIt67DzAanrfHzpR5Ew7Pmp3yP5O8i3OaQElhwvsLO2E5iv4hXf%2FAS7PoLZyBUDQxIZo6wHkJLtCwM5vz5n8SMipvUTDAo%2BL7bzQZM5zwLB%2B09JyOEW4ErSpkg%2Flm4wtMF0TT7DsyhDb8BoYub2eBuR6r5lxCzVo2Qjb8mZTSbDvryv8bWtOomNPgCCvt97Xw1ZGFVPBeV9UC0ii8t%2BWVxr6%2B2K6jlHex02K7A3dE65PYBuPSEO9pDmNv22B7fcJbMF0RBLqHAfBYtY2p5m7ZAC91gVEb%2Bntc3wuK2QDkfACAUGydniIZUvz3VoqAfW6QkvJqafAFD8k57JNoLlmW1PXQUfNvMsvolFWvf80ZigtZ4kqp0JuIoKeQeERp74pC2KMPaKusAGOqUBd05UewO%2B%2BIKPtmx2bD%2F7bSGKDGf3gs%2BQdaDIfqgrQ5f2xgg%2Bbv933ndCV5qpNw%2F8eMnUy9bFsl6eaC3o6stvae5HLOdk5OBvcYbg0MCW7D2yCwMy8W%2BKsSheDzs7Ryk9WL1Tlcqnfo5W7KF0mSXZTT5PKS6D%2FbRoXlz%2FYmTMjZ6IjC30j0Emv9a5QcSAAVGeH6LWVP%2Fvw4ncLGBUunRuMgQzhRzM&X-Amz-Signature=4f1f9d53649d1d06d07bea947485dcb60cde32c68b134ed934a95721cca003b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RY7D5PX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF4nN5KlvomlTR5N5ccAS8y9EPvNGbfsPEOk89zUdV2AiEAhPQEFkdP2CumriAb12%2BkM3T8sQjwpDUNSQnDOoqJljQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLC%2BlzwZVcArdY5wOSrcAyRaEs%2FLz10GMV0IkrCBqQvbQbZol9ftnRwltNNWq%2BttagdGl%2BApmVyjd116Uakc7NiwcX3jc3c%2FHHE2Mg9tzjan%2BHJIv%2B6pVNsdzqO8jVJaBTSyj6FlORZoPIIZdVkSiO3azU%2BoI4z4Bj8EAT%2Bfp7iz9Dyc%2Fx%2F7yf32p9SgJpM0Lnoha7I9qLhz1NhxYwY7isTDO1N2FdtteyurATmJHq13BWiK16PJ3PL1IGFqPNxEXX89PZ0bKR2Y6EIt67DzAanrfHzpR5Ew7Pmp3yP5O8i3OaQElhwvsLO2E5iv4hXf%2FAS7PoLZyBUDQxIZo6wHkJLtCwM5vz5n8SMipvUTDAo%2BL7bzQZM5zwLB%2B09JyOEW4ErSpkg%2Flm4wtMF0TT7DsyhDb8BoYub2eBuR6r5lxCzVo2Qjb8mZTSbDvryv8bWtOomNPgCCvt97Xw1ZGFVPBeV9UC0ii8t%2BWVxr6%2B2K6jlHex02K7A3dE65PYBuPSEO9pDmNv22B7fcJbMF0RBLqHAfBYtY2p5m7ZAC91gVEb%2Bntc3wuK2QDkfACAUGydniIZUvz3VoqAfW6QkvJqafAFD8k57JNoLlmW1PXQUfNvMsvolFWvf80ZigtZ4kqp0JuIoKeQeERp74pC2KMPaKusAGOqUBd05UewO%2B%2BIKPtmx2bD%2F7bSGKDGf3gs%2BQdaDIfqgrQ5f2xgg%2Bbv933ndCV5qpNw%2F8eMnUy9bFsl6eaC3o6stvae5HLOdk5OBvcYbg0MCW7D2yCwMy8W%2BKsSheDzs7Ryk9WL1Tlcqnfo5W7KF0mSXZTT5PKS6D%2FbRoXlz%2FYmTMjZ6IjC30j0Emv9a5QcSAAVGeH6LWVP%2Fvw4ncLGBUunRuMgQzhRzM&X-Amz-Signature=187cb406a4b2a56b08772078fe1a6ad95a43f1309f2f0942c04c8fc53c2ab9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RY7D5PX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF4nN5KlvomlTR5N5ccAS8y9EPvNGbfsPEOk89zUdV2AiEAhPQEFkdP2CumriAb12%2BkM3T8sQjwpDUNSQnDOoqJljQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLC%2BlzwZVcArdY5wOSrcAyRaEs%2FLz10GMV0IkrCBqQvbQbZol9ftnRwltNNWq%2BttagdGl%2BApmVyjd116Uakc7NiwcX3jc3c%2FHHE2Mg9tzjan%2BHJIv%2B6pVNsdzqO8jVJaBTSyj6FlORZoPIIZdVkSiO3azU%2BoI4z4Bj8EAT%2Bfp7iz9Dyc%2Fx%2F7yf32p9SgJpM0Lnoha7I9qLhz1NhxYwY7isTDO1N2FdtteyurATmJHq13BWiK16PJ3PL1IGFqPNxEXX89PZ0bKR2Y6EIt67DzAanrfHzpR5Ew7Pmp3yP5O8i3OaQElhwvsLO2E5iv4hXf%2FAS7PoLZyBUDQxIZo6wHkJLtCwM5vz5n8SMipvUTDAo%2BL7bzQZM5zwLB%2B09JyOEW4ErSpkg%2Flm4wtMF0TT7DsyhDb8BoYub2eBuR6r5lxCzVo2Qjb8mZTSbDvryv8bWtOomNPgCCvt97Xw1ZGFVPBeV9UC0ii8t%2BWVxr6%2B2K6jlHex02K7A3dE65PYBuPSEO9pDmNv22B7fcJbMF0RBLqHAfBYtY2p5m7ZAC91gVEb%2Bntc3wuK2QDkfACAUGydniIZUvz3VoqAfW6QkvJqafAFD8k57JNoLlmW1PXQUfNvMsvolFWvf80ZigtZ4kqp0JuIoKeQeERp74pC2KMPaKusAGOqUBd05UewO%2B%2BIKPtmx2bD%2F7bSGKDGf3gs%2BQdaDIfqgrQ5f2xgg%2Bbv933ndCV5qpNw%2F8eMnUy9bFsl6eaC3o6stvae5HLOdk5OBvcYbg0MCW7D2yCwMy8W%2BKsSheDzs7Ryk9WL1Tlcqnfo5W7KF0mSXZTT5PKS6D%2FbRoXlz%2FYmTMjZ6IjC30j0Emv9a5QcSAAVGeH6LWVP%2Fvw4ncLGBUunRuMgQzhRzM&X-Amz-Signature=3588e483ae5103f36f1f8685c16c1d6df950d849c7863842abe5e67c9287b83e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RY7D5PX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF4nN5KlvomlTR5N5ccAS8y9EPvNGbfsPEOk89zUdV2AiEAhPQEFkdP2CumriAb12%2BkM3T8sQjwpDUNSQnDOoqJljQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLC%2BlzwZVcArdY5wOSrcAyRaEs%2FLz10GMV0IkrCBqQvbQbZol9ftnRwltNNWq%2BttagdGl%2BApmVyjd116Uakc7NiwcX3jc3c%2FHHE2Mg9tzjan%2BHJIv%2B6pVNsdzqO8jVJaBTSyj6FlORZoPIIZdVkSiO3azU%2BoI4z4Bj8EAT%2Bfp7iz9Dyc%2Fx%2F7yf32p9SgJpM0Lnoha7I9qLhz1NhxYwY7isTDO1N2FdtteyurATmJHq13BWiK16PJ3PL1IGFqPNxEXX89PZ0bKR2Y6EIt67DzAanrfHzpR5Ew7Pmp3yP5O8i3OaQElhwvsLO2E5iv4hXf%2FAS7PoLZyBUDQxIZo6wHkJLtCwM5vz5n8SMipvUTDAo%2BL7bzQZM5zwLB%2B09JyOEW4ErSpkg%2Flm4wtMF0TT7DsyhDb8BoYub2eBuR6r5lxCzVo2Qjb8mZTSbDvryv8bWtOomNPgCCvt97Xw1ZGFVPBeV9UC0ii8t%2BWVxr6%2B2K6jlHex02K7A3dE65PYBuPSEO9pDmNv22B7fcJbMF0RBLqHAfBYtY2p5m7ZAC91gVEb%2Bntc3wuK2QDkfACAUGydniIZUvz3VoqAfW6QkvJqafAFD8k57JNoLlmW1PXQUfNvMsvolFWvf80ZigtZ4kqp0JuIoKeQeERp74pC2KMPaKusAGOqUBd05UewO%2B%2BIKPtmx2bD%2F7bSGKDGf3gs%2BQdaDIfqgrQ5f2xgg%2Bbv933ndCV5qpNw%2F8eMnUy9bFsl6eaC3o6stvae5HLOdk5OBvcYbg0MCW7D2yCwMy8W%2BKsSheDzs7Ryk9WL1Tlcqnfo5W7KF0mSXZTT5PKS6D%2FbRoXlz%2FYmTMjZ6IjC30j0Emv9a5QcSAAVGeH6LWVP%2Fvw4ncLGBUunRuMgQzhRzM&X-Amz-Signature=e6ce813f27a6c3ff6281d72e7c92da2d3a3e05eb90c4f588a315352435c05148&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RY7D5PX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF4nN5KlvomlTR5N5ccAS8y9EPvNGbfsPEOk89zUdV2AiEAhPQEFkdP2CumriAb12%2BkM3T8sQjwpDUNSQnDOoqJljQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLC%2BlzwZVcArdY5wOSrcAyRaEs%2FLz10GMV0IkrCBqQvbQbZol9ftnRwltNNWq%2BttagdGl%2BApmVyjd116Uakc7NiwcX3jc3c%2FHHE2Mg9tzjan%2BHJIv%2B6pVNsdzqO8jVJaBTSyj6FlORZoPIIZdVkSiO3azU%2BoI4z4Bj8EAT%2Bfp7iz9Dyc%2Fx%2F7yf32p9SgJpM0Lnoha7I9qLhz1NhxYwY7isTDO1N2FdtteyurATmJHq13BWiK16PJ3PL1IGFqPNxEXX89PZ0bKR2Y6EIt67DzAanrfHzpR5Ew7Pmp3yP5O8i3OaQElhwvsLO2E5iv4hXf%2FAS7PoLZyBUDQxIZo6wHkJLtCwM5vz5n8SMipvUTDAo%2BL7bzQZM5zwLB%2B09JyOEW4ErSpkg%2Flm4wtMF0TT7DsyhDb8BoYub2eBuR6r5lxCzVo2Qjb8mZTSbDvryv8bWtOomNPgCCvt97Xw1ZGFVPBeV9UC0ii8t%2BWVxr6%2B2K6jlHex02K7A3dE65PYBuPSEO9pDmNv22B7fcJbMF0RBLqHAfBYtY2p5m7ZAC91gVEb%2Bntc3wuK2QDkfACAUGydniIZUvz3VoqAfW6QkvJqafAFD8k57JNoLlmW1PXQUfNvMsvolFWvf80ZigtZ4kqp0JuIoKeQeERp74pC2KMPaKusAGOqUBd05UewO%2B%2BIKPtmx2bD%2F7bSGKDGf3gs%2BQdaDIfqgrQ5f2xgg%2Bbv933ndCV5qpNw%2F8eMnUy9bFsl6eaC3o6stvae5HLOdk5OBvcYbg0MCW7D2yCwMy8W%2BKsSheDzs7Ryk9WL1Tlcqnfo5W7KF0mSXZTT5PKS6D%2FbRoXlz%2FYmTMjZ6IjC30j0Emv9a5QcSAAVGeH6LWVP%2Fvw4ncLGBUunRuMgQzhRzM&X-Amz-Signature=00d9b9ef09d7bfc2528153338aae9e043d5b77bd0a3ea640e4e87303ecc83928&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RY7D5PX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF4nN5KlvomlTR5N5ccAS8y9EPvNGbfsPEOk89zUdV2AiEAhPQEFkdP2CumriAb12%2BkM3T8sQjwpDUNSQnDOoqJljQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLC%2BlzwZVcArdY5wOSrcAyRaEs%2FLz10GMV0IkrCBqQvbQbZol9ftnRwltNNWq%2BttagdGl%2BApmVyjd116Uakc7NiwcX3jc3c%2FHHE2Mg9tzjan%2BHJIv%2B6pVNsdzqO8jVJaBTSyj6FlORZoPIIZdVkSiO3azU%2BoI4z4Bj8EAT%2Bfp7iz9Dyc%2Fx%2F7yf32p9SgJpM0Lnoha7I9qLhz1NhxYwY7isTDO1N2FdtteyurATmJHq13BWiK16PJ3PL1IGFqPNxEXX89PZ0bKR2Y6EIt67DzAanrfHzpR5Ew7Pmp3yP5O8i3OaQElhwvsLO2E5iv4hXf%2FAS7PoLZyBUDQxIZo6wHkJLtCwM5vz5n8SMipvUTDAo%2BL7bzQZM5zwLB%2B09JyOEW4ErSpkg%2Flm4wtMF0TT7DsyhDb8BoYub2eBuR6r5lxCzVo2Qjb8mZTSbDvryv8bWtOomNPgCCvt97Xw1ZGFVPBeV9UC0ii8t%2BWVxr6%2B2K6jlHex02K7A3dE65PYBuPSEO9pDmNv22B7fcJbMF0RBLqHAfBYtY2p5m7ZAC91gVEb%2Bntc3wuK2QDkfACAUGydniIZUvz3VoqAfW6QkvJqafAFD8k57JNoLlmW1PXQUfNvMsvolFWvf80ZigtZ4kqp0JuIoKeQeERp74pC2KMPaKusAGOqUBd05UewO%2B%2BIKPtmx2bD%2F7bSGKDGf3gs%2BQdaDIfqgrQ5f2xgg%2Bbv933ndCV5qpNw%2F8eMnUy9bFsl6eaC3o6stvae5HLOdk5OBvcYbg0MCW7D2yCwMy8W%2BKsSheDzs7Ryk9WL1Tlcqnfo5W7KF0mSXZTT5PKS6D%2FbRoXlz%2FYmTMjZ6IjC30j0Emv9a5QcSAAVGeH6LWVP%2Fvw4ncLGBUunRuMgQzhRzM&X-Amz-Signature=9ad6914446db28d6d4a27d6b3ee9205da3be53071d7fbbc8e93d026658e98896&X-Amz-SignedHeaders=host&x-id=GetObject)
