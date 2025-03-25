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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLHKYWR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYr2BqoQ6PO%2BWzQKtxPgvZpeRS%2Bznmwi7JGdjyBSYLcAiAKvSMDZBwpDCUihSeSq0WGOsdZRwmG2i0TOZdRBlHytir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMz5qAjpq3omN5%2BiHRKtwDR38PR8Y67tderQQB7X3KwRG3iWA9WZW2G9L5FIgoF%2BtuLRFbE93LVKtvZoXC%2BMMnAoQFhxPXB3gFZ3twZmCnW%2BIPj7suuS2kbgDeRYYD5C%2BW2CsqibCKK74M1U831H1V7IGRzjQlnlYMO0Y8872jdALLneYjM2OTfFqUC35MWGV3lfLMw3BvLd00UlAW%2BMCZQ%2B1%2FJJ9%2FLyrRGX72J3FZ7qjQfSSru4ay%2FGyy%2FIILqhsY85jD9vrBJO29N3o9ILA0EJwekV5vsH69LutIwBqSzsnY6y%2B31fmIFOwjK8wt6S2zt2pnPhxFRcqO9GWgjzO9d8lixKq1EPAZqURegs%2Bga7s14nd0VxLLkQjVcYjnJdDKbLlRwZGOh3P804T2n5dSuHtTqMkmsZeIa%2FYnUz1L%2BLvsvwTmv0KG9FCWynMBZRirf6e70KLzTsx2CVE%2FfBZGtxM14sBzbPsKg1ikH1AwQEfAPC0ixQAMqafijRmigPyeFsqqJzWU%2FlqroIyvNa57teIaKUQ3W8mWfQlbSXbL5OCuAiDUARiaH%2BlnNNDoZJbkid8wgnF6Eh2o96m%2Ffmvmh5pHmkLUqCH1sj%2F9xXIcDd4Z9cXHAROGMAlkO8J4Plh%2FmcBvJ0mFG9jtqukw6peMvwY6pgGG87q9J2BddtvHVc3AbnYKVydZaa8Ig%2FNKkDM7d8Yih7Zfjf55bow%2BqHLWURFoft5CkfrXGTZBgcNEZpJMYnMkIRj6w619qS5Rl9kofzJUIY3VeutRu9Bt630zTuIdMMJWtQGUkDZ2w3Y4%2BYzxFDWlXm6MIDQeU52E7I7P3Dhgy73Xt7AtyShmgxWY1R6Yv59VyomsUh3fIRYPCXrpc4H9GOGndRX%2F&X-Amz-Signature=877b76438083c74b14663491b07b30cf4de940d3d14cde6abb2296d009b0c824&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLHKYWR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYr2BqoQ6PO%2BWzQKtxPgvZpeRS%2Bznmwi7JGdjyBSYLcAiAKvSMDZBwpDCUihSeSq0WGOsdZRwmG2i0TOZdRBlHytir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMz5qAjpq3omN5%2BiHRKtwDR38PR8Y67tderQQB7X3KwRG3iWA9WZW2G9L5FIgoF%2BtuLRFbE93LVKtvZoXC%2BMMnAoQFhxPXB3gFZ3twZmCnW%2BIPj7suuS2kbgDeRYYD5C%2BW2CsqibCKK74M1U831H1V7IGRzjQlnlYMO0Y8872jdALLneYjM2OTfFqUC35MWGV3lfLMw3BvLd00UlAW%2BMCZQ%2B1%2FJJ9%2FLyrRGX72J3FZ7qjQfSSru4ay%2FGyy%2FIILqhsY85jD9vrBJO29N3o9ILA0EJwekV5vsH69LutIwBqSzsnY6y%2B31fmIFOwjK8wt6S2zt2pnPhxFRcqO9GWgjzO9d8lixKq1EPAZqURegs%2Bga7s14nd0VxLLkQjVcYjnJdDKbLlRwZGOh3P804T2n5dSuHtTqMkmsZeIa%2FYnUz1L%2BLvsvwTmv0KG9FCWynMBZRirf6e70KLzTsx2CVE%2FfBZGtxM14sBzbPsKg1ikH1AwQEfAPC0ixQAMqafijRmigPyeFsqqJzWU%2FlqroIyvNa57teIaKUQ3W8mWfQlbSXbL5OCuAiDUARiaH%2BlnNNDoZJbkid8wgnF6Eh2o96m%2Ffmvmh5pHmkLUqCH1sj%2F9xXIcDd4Z9cXHAROGMAlkO8J4Plh%2FmcBvJ0mFG9jtqukw6peMvwY6pgGG87q9J2BddtvHVc3AbnYKVydZaa8Ig%2FNKkDM7d8Yih7Zfjf55bow%2BqHLWURFoft5CkfrXGTZBgcNEZpJMYnMkIRj6w619qS5Rl9kofzJUIY3VeutRu9Bt630zTuIdMMJWtQGUkDZ2w3Y4%2BYzxFDWlXm6MIDQeU52E7I7P3Dhgy73Xt7AtyShmgxWY1R6Yv59VyomsUh3fIRYPCXrpc4H9GOGndRX%2F&X-Amz-Signature=7824656fd3e158e096d9357fab658ec4578ddf4074ffdaad9445fefa2b912a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLHKYWR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYr2BqoQ6PO%2BWzQKtxPgvZpeRS%2Bznmwi7JGdjyBSYLcAiAKvSMDZBwpDCUihSeSq0WGOsdZRwmG2i0TOZdRBlHytir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMz5qAjpq3omN5%2BiHRKtwDR38PR8Y67tderQQB7X3KwRG3iWA9WZW2G9L5FIgoF%2BtuLRFbE93LVKtvZoXC%2BMMnAoQFhxPXB3gFZ3twZmCnW%2BIPj7suuS2kbgDeRYYD5C%2BW2CsqibCKK74M1U831H1V7IGRzjQlnlYMO0Y8872jdALLneYjM2OTfFqUC35MWGV3lfLMw3BvLd00UlAW%2BMCZQ%2B1%2FJJ9%2FLyrRGX72J3FZ7qjQfSSru4ay%2FGyy%2FIILqhsY85jD9vrBJO29N3o9ILA0EJwekV5vsH69LutIwBqSzsnY6y%2B31fmIFOwjK8wt6S2zt2pnPhxFRcqO9GWgjzO9d8lixKq1EPAZqURegs%2Bga7s14nd0VxLLkQjVcYjnJdDKbLlRwZGOh3P804T2n5dSuHtTqMkmsZeIa%2FYnUz1L%2BLvsvwTmv0KG9FCWynMBZRirf6e70KLzTsx2CVE%2FfBZGtxM14sBzbPsKg1ikH1AwQEfAPC0ixQAMqafijRmigPyeFsqqJzWU%2FlqroIyvNa57teIaKUQ3W8mWfQlbSXbL5OCuAiDUARiaH%2BlnNNDoZJbkid8wgnF6Eh2o96m%2Ffmvmh5pHmkLUqCH1sj%2F9xXIcDd4Z9cXHAROGMAlkO8J4Plh%2FmcBvJ0mFG9jtqukw6peMvwY6pgGG87q9J2BddtvHVc3AbnYKVydZaa8Ig%2FNKkDM7d8Yih7Zfjf55bow%2BqHLWURFoft5CkfrXGTZBgcNEZpJMYnMkIRj6w619qS5Rl9kofzJUIY3VeutRu9Bt630zTuIdMMJWtQGUkDZ2w3Y4%2BYzxFDWlXm6MIDQeU52E7I7P3Dhgy73Xt7AtyShmgxWY1R6Yv59VyomsUh3fIRYPCXrpc4H9GOGndRX%2F&X-Amz-Signature=48ac103702f8b701b844fe813c5109668f341f5703c45843050a357d27d9e61c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLHKYWR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYr2BqoQ6PO%2BWzQKtxPgvZpeRS%2Bznmwi7JGdjyBSYLcAiAKvSMDZBwpDCUihSeSq0WGOsdZRwmG2i0TOZdRBlHytir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMz5qAjpq3omN5%2BiHRKtwDR38PR8Y67tderQQB7X3KwRG3iWA9WZW2G9L5FIgoF%2BtuLRFbE93LVKtvZoXC%2BMMnAoQFhxPXB3gFZ3twZmCnW%2BIPj7suuS2kbgDeRYYD5C%2BW2CsqibCKK74M1U831H1V7IGRzjQlnlYMO0Y8872jdALLneYjM2OTfFqUC35MWGV3lfLMw3BvLd00UlAW%2BMCZQ%2B1%2FJJ9%2FLyrRGX72J3FZ7qjQfSSru4ay%2FGyy%2FIILqhsY85jD9vrBJO29N3o9ILA0EJwekV5vsH69LutIwBqSzsnY6y%2B31fmIFOwjK8wt6S2zt2pnPhxFRcqO9GWgjzO9d8lixKq1EPAZqURegs%2Bga7s14nd0VxLLkQjVcYjnJdDKbLlRwZGOh3P804T2n5dSuHtTqMkmsZeIa%2FYnUz1L%2BLvsvwTmv0KG9FCWynMBZRirf6e70KLzTsx2CVE%2FfBZGtxM14sBzbPsKg1ikH1AwQEfAPC0ixQAMqafijRmigPyeFsqqJzWU%2FlqroIyvNa57teIaKUQ3W8mWfQlbSXbL5OCuAiDUARiaH%2BlnNNDoZJbkid8wgnF6Eh2o96m%2Ffmvmh5pHmkLUqCH1sj%2F9xXIcDd4Z9cXHAROGMAlkO8J4Plh%2FmcBvJ0mFG9jtqukw6peMvwY6pgGG87q9J2BddtvHVc3AbnYKVydZaa8Ig%2FNKkDM7d8Yih7Zfjf55bow%2BqHLWURFoft5CkfrXGTZBgcNEZpJMYnMkIRj6w619qS5Rl9kofzJUIY3VeutRu9Bt630zTuIdMMJWtQGUkDZ2w3Y4%2BYzxFDWlXm6MIDQeU52E7I7P3Dhgy73Xt7AtyShmgxWY1R6Yv59VyomsUh3fIRYPCXrpc4H9GOGndRX%2F&X-Amz-Signature=44a11b1a876f4c699154e7d8acb0aeb80ba2a3589358984c1eefda19ec5120e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLHKYWR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYr2BqoQ6PO%2BWzQKtxPgvZpeRS%2Bznmwi7JGdjyBSYLcAiAKvSMDZBwpDCUihSeSq0WGOsdZRwmG2i0TOZdRBlHytir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMz5qAjpq3omN5%2BiHRKtwDR38PR8Y67tderQQB7X3KwRG3iWA9WZW2G9L5FIgoF%2BtuLRFbE93LVKtvZoXC%2BMMnAoQFhxPXB3gFZ3twZmCnW%2BIPj7suuS2kbgDeRYYD5C%2BW2CsqibCKK74M1U831H1V7IGRzjQlnlYMO0Y8872jdALLneYjM2OTfFqUC35MWGV3lfLMw3BvLd00UlAW%2BMCZQ%2B1%2FJJ9%2FLyrRGX72J3FZ7qjQfSSru4ay%2FGyy%2FIILqhsY85jD9vrBJO29N3o9ILA0EJwekV5vsH69LutIwBqSzsnY6y%2B31fmIFOwjK8wt6S2zt2pnPhxFRcqO9GWgjzO9d8lixKq1EPAZqURegs%2Bga7s14nd0VxLLkQjVcYjnJdDKbLlRwZGOh3P804T2n5dSuHtTqMkmsZeIa%2FYnUz1L%2BLvsvwTmv0KG9FCWynMBZRirf6e70KLzTsx2CVE%2FfBZGtxM14sBzbPsKg1ikH1AwQEfAPC0ixQAMqafijRmigPyeFsqqJzWU%2FlqroIyvNa57teIaKUQ3W8mWfQlbSXbL5OCuAiDUARiaH%2BlnNNDoZJbkid8wgnF6Eh2o96m%2Ffmvmh5pHmkLUqCH1sj%2F9xXIcDd4Z9cXHAROGMAlkO8J4Plh%2FmcBvJ0mFG9jtqukw6peMvwY6pgGG87q9J2BddtvHVc3AbnYKVydZaa8Ig%2FNKkDM7d8Yih7Zfjf55bow%2BqHLWURFoft5CkfrXGTZBgcNEZpJMYnMkIRj6w619qS5Rl9kofzJUIY3VeutRu9Bt630zTuIdMMJWtQGUkDZ2w3Y4%2BYzxFDWlXm6MIDQeU52E7I7P3Dhgy73Xt7AtyShmgxWY1R6Yv59VyomsUh3fIRYPCXrpc4H9GOGndRX%2F&X-Amz-Signature=c2fd951a3f44177c09298f335d55fd5ce6ce95f1e5b0b61cff962f6e3d26089d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLHKYWR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYr2BqoQ6PO%2BWzQKtxPgvZpeRS%2Bznmwi7JGdjyBSYLcAiAKvSMDZBwpDCUihSeSq0WGOsdZRwmG2i0TOZdRBlHytir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMz5qAjpq3omN5%2BiHRKtwDR38PR8Y67tderQQB7X3KwRG3iWA9WZW2G9L5FIgoF%2BtuLRFbE93LVKtvZoXC%2BMMnAoQFhxPXB3gFZ3twZmCnW%2BIPj7suuS2kbgDeRYYD5C%2BW2CsqibCKK74M1U831H1V7IGRzjQlnlYMO0Y8872jdALLneYjM2OTfFqUC35MWGV3lfLMw3BvLd00UlAW%2BMCZQ%2B1%2FJJ9%2FLyrRGX72J3FZ7qjQfSSru4ay%2FGyy%2FIILqhsY85jD9vrBJO29N3o9ILA0EJwekV5vsH69LutIwBqSzsnY6y%2B31fmIFOwjK8wt6S2zt2pnPhxFRcqO9GWgjzO9d8lixKq1EPAZqURegs%2Bga7s14nd0VxLLkQjVcYjnJdDKbLlRwZGOh3P804T2n5dSuHtTqMkmsZeIa%2FYnUz1L%2BLvsvwTmv0KG9FCWynMBZRirf6e70KLzTsx2CVE%2FfBZGtxM14sBzbPsKg1ikH1AwQEfAPC0ixQAMqafijRmigPyeFsqqJzWU%2FlqroIyvNa57teIaKUQ3W8mWfQlbSXbL5OCuAiDUARiaH%2BlnNNDoZJbkid8wgnF6Eh2o96m%2Ffmvmh5pHmkLUqCH1sj%2F9xXIcDd4Z9cXHAROGMAlkO8J4Plh%2FmcBvJ0mFG9jtqukw6peMvwY6pgGG87q9J2BddtvHVc3AbnYKVydZaa8Ig%2FNKkDM7d8Yih7Zfjf55bow%2BqHLWURFoft5CkfrXGTZBgcNEZpJMYnMkIRj6w619qS5Rl9kofzJUIY3VeutRu9Bt630zTuIdMMJWtQGUkDZ2w3Y4%2BYzxFDWlXm6MIDQeU52E7I7P3Dhgy73Xt7AtyShmgxWY1R6Yv59VyomsUh3fIRYPCXrpc4H9GOGndRX%2F&X-Amz-Signature=7f324d10d93106f0a0b9e3a5dcd1b8189468b529315b62219289db6e52f9630d&X-Amz-SignedHeaders=host&x-id=GetObject)
