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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOXHCX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDs42v9bpnu7H43Q3w5ejCDOXc9jKpaUtZmQlvBT0xidAIhAN6do6EFrkdir%2FrFkWm%2FMvA74rFuJzfsRwwulYm%2FBJYCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylVwK3Dg9vcpFUT%2Fcq3APi9TBTrk0ftjaBU6qA4SxDa2Sb8pH06EzSpCeJ%2B%2BD4O9xNYJi%2FRrCTkzW9SQ30kw0R3ar5G1RLu%2BlDeqhtJUPDv6HdNu7vTK%2FSnsjJiBmElYEnOhxgwKWQJioulxlh5KP3fdh5SOnnNjf0suQHEWV%2B9e%2Fbl8lL4iEXyppj9f7%2FiFmGYOgD0IK3AVKfIxJhaUrD3xnEmspFunt7OhTwlN9XorEdVM5XoAnBWSHMwVgtCkw21B8HNcivFgzN5jgvIInooNQs26VvtMEmmmxy2xeVURuxdM77ci5KHAR53kvZunZDyGOk9Fak9sU18XiQrB0e15DlMnibYArCVFPNixRxwsx1euvn%2FkXlWJkz%2BDLqucGoOR5QijzAfWXnBQEvk6DvwMGSajdC8wggM9BDQaaj6VdpeCeCZNOAruGMHeF3yvESt8VJCmUCVQmEU1w%2B2McMe6Gr9%2BQcnFgzQjRtL%2FX438BIKuxVIbFpXBs44%2BiPC5RJ3GEqqg64lZo5CGhwp%2FfLe241pQO%2FajppwW%2Faa1Om8ziLmPy5MnDOz%2B4p1pUqDCzE6SBcCXrChqk8kNlVB8zMVrD4VaCWytQntPEZSsuQhSiIHBWmcAexLPneF%2BCHS83K9C%2BVJo01SEUvTDD1vd6%2FBjqkATU1dtFmhCuFTkQ5an1mTQbrbmg9f7MbBNYG3NP9NbBk5f6yqN4BbudxGPI1VIyftD8i4ce4rEGgSpV01SSsAz%2BxQWM2XOJDQ8PGSy%2FANcacHWccTcR8a2FbaA6axFZmI1OLlSh7VcUdCshS3zDJLCYPFja635Uhx2%2BiXAvKrHWxfS1L3gPxjavH3e5vtB8wlwG1P9OzFaZZsmv%2FrqeABYqJ%2B23Y&X-Amz-Signature=f211785fc5a1d40a98abe96ec090c6e8f87c8f6b93a9d7b50d23fa3e120fab6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOXHCX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDs42v9bpnu7H43Q3w5ejCDOXc9jKpaUtZmQlvBT0xidAIhAN6do6EFrkdir%2FrFkWm%2FMvA74rFuJzfsRwwulYm%2FBJYCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylVwK3Dg9vcpFUT%2Fcq3APi9TBTrk0ftjaBU6qA4SxDa2Sb8pH06EzSpCeJ%2B%2BD4O9xNYJi%2FRrCTkzW9SQ30kw0R3ar5G1RLu%2BlDeqhtJUPDv6HdNu7vTK%2FSnsjJiBmElYEnOhxgwKWQJioulxlh5KP3fdh5SOnnNjf0suQHEWV%2B9e%2Fbl8lL4iEXyppj9f7%2FiFmGYOgD0IK3AVKfIxJhaUrD3xnEmspFunt7OhTwlN9XorEdVM5XoAnBWSHMwVgtCkw21B8HNcivFgzN5jgvIInooNQs26VvtMEmmmxy2xeVURuxdM77ci5KHAR53kvZunZDyGOk9Fak9sU18XiQrB0e15DlMnibYArCVFPNixRxwsx1euvn%2FkXlWJkz%2BDLqucGoOR5QijzAfWXnBQEvk6DvwMGSajdC8wggM9BDQaaj6VdpeCeCZNOAruGMHeF3yvESt8VJCmUCVQmEU1w%2B2McMe6Gr9%2BQcnFgzQjRtL%2FX438BIKuxVIbFpXBs44%2BiPC5RJ3GEqqg64lZo5CGhwp%2FfLe241pQO%2FajppwW%2Faa1Om8ziLmPy5MnDOz%2B4p1pUqDCzE6SBcCXrChqk8kNlVB8zMVrD4VaCWytQntPEZSsuQhSiIHBWmcAexLPneF%2BCHS83K9C%2BVJo01SEUvTDD1vd6%2FBjqkATU1dtFmhCuFTkQ5an1mTQbrbmg9f7MbBNYG3NP9NbBk5f6yqN4BbudxGPI1VIyftD8i4ce4rEGgSpV01SSsAz%2BxQWM2XOJDQ8PGSy%2FANcacHWccTcR8a2FbaA6axFZmI1OLlSh7VcUdCshS3zDJLCYPFja635Uhx2%2BiXAvKrHWxfS1L3gPxjavH3e5vtB8wlwG1P9OzFaZZsmv%2FrqeABYqJ%2B23Y&X-Amz-Signature=03a5f3225d3941b4d14d2676d2589f33e6017ed9956e94d9ce3ca4aa2697b880&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOXHCX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDs42v9bpnu7H43Q3w5ejCDOXc9jKpaUtZmQlvBT0xidAIhAN6do6EFrkdir%2FrFkWm%2FMvA74rFuJzfsRwwulYm%2FBJYCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylVwK3Dg9vcpFUT%2Fcq3APi9TBTrk0ftjaBU6qA4SxDa2Sb8pH06EzSpCeJ%2B%2BD4O9xNYJi%2FRrCTkzW9SQ30kw0R3ar5G1RLu%2BlDeqhtJUPDv6HdNu7vTK%2FSnsjJiBmElYEnOhxgwKWQJioulxlh5KP3fdh5SOnnNjf0suQHEWV%2B9e%2Fbl8lL4iEXyppj9f7%2FiFmGYOgD0IK3AVKfIxJhaUrD3xnEmspFunt7OhTwlN9XorEdVM5XoAnBWSHMwVgtCkw21B8HNcivFgzN5jgvIInooNQs26VvtMEmmmxy2xeVURuxdM77ci5KHAR53kvZunZDyGOk9Fak9sU18XiQrB0e15DlMnibYArCVFPNixRxwsx1euvn%2FkXlWJkz%2BDLqucGoOR5QijzAfWXnBQEvk6DvwMGSajdC8wggM9BDQaaj6VdpeCeCZNOAruGMHeF3yvESt8VJCmUCVQmEU1w%2B2McMe6Gr9%2BQcnFgzQjRtL%2FX438BIKuxVIbFpXBs44%2BiPC5RJ3GEqqg64lZo5CGhwp%2FfLe241pQO%2FajppwW%2Faa1Om8ziLmPy5MnDOz%2B4p1pUqDCzE6SBcCXrChqk8kNlVB8zMVrD4VaCWytQntPEZSsuQhSiIHBWmcAexLPneF%2BCHS83K9C%2BVJo01SEUvTDD1vd6%2FBjqkATU1dtFmhCuFTkQ5an1mTQbrbmg9f7MbBNYG3NP9NbBk5f6yqN4BbudxGPI1VIyftD8i4ce4rEGgSpV01SSsAz%2BxQWM2XOJDQ8PGSy%2FANcacHWccTcR8a2FbaA6axFZmI1OLlSh7VcUdCshS3zDJLCYPFja635Uhx2%2BiXAvKrHWxfS1L3gPxjavH3e5vtB8wlwG1P9OzFaZZsmv%2FrqeABYqJ%2B23Y&X-Amz-Signature=44e42ce51856da44b0c79a187ff0934a75d358d03572587682eac00e51ad52ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOXHCX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDs42v9bpnu7H43Q3w5ejCDOXc9jKpaUtZmQlvBT0xidAIhAN6do6EFrkdir%2FrFkWm%2FMvA74rFuJzfsRwwulYm%2FBJYCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylVwK3Dg9vcpFUT%2Fcq3APi9TBTrk0ftjaBU6qA4SxDa2Sb8pH06EzSpCeJ%2B%2BD4O9xNYJi%2FRrCTkzW9SQ30kw0R3ar5G1RLu%2BlDeqhtJUPDv6HdNu7vTK%2FSnsjJiBmElYEnOhxgwKWQJioulxlh5KP3fdh5SOnnNjf0suQHEWV%2B9e%2Fbl8lL4iEXyppj9f7%2FiFmGYOgD0IK3AVKfIxJhaUrD3xnEmspFunt7OhTwlN9XorEdVM5XoAnBWSHMwVgtCkw21B8HNcivFgzN5jgvIInooNQs26VvtMEmmmxy2xeVURuxdM77ci5KHAR53kvZunZDyGOk9Fak9sU18XiQrB0e15DlMnibYArCVFPNixRxwsx1euvn%2FkXlWJkz%2BDLqucGoOR5QijzAfWXnBQEvk6DvwMGSajdC8wggM9BDQaaj6VdpeCeCZNOAruGMHeF3yvESt8VJCmUCVQmEU1w%2B2McMe6Gr9%2BQcnFgzQjRtL%2FX438BIKuxVIbFpXBs44%2BiPC5RJ3GEqqg64lZo5CGhwp%2FfLe241pQO%2FajppwW%2Faa1Om8ziLmPy5MnDOz%2B4p1pUqDCzE6SBcCXrChqk8kNlVB8zMVrD4VaCWytQntPEZSsuQhSiIHBWmcAexLPneF%2BCHS83K9C%2BVJo01SEUvTDD1vd6%2FBjqkATU1dtFmhCuFTkQ5an1mTQbrbmg9f7MbBNYG3NP9NbBk5f6yqN4BbudxGPI1VIyftD8i4ce4rEGgSpV01SSsAz%2BxQWM2XOJDQ8PGSy%2FANcacHWccTcR8a2FbaA6axFZmI1OLlSh7VcUdCshS3zDJLCYPFja635Uhx2%2BiXAvKrHWxfS1L3gPxjavH3e5vtB8wlwG1P9OzFaZZsmv%2FrqeABYqJ%2B23Y&X-Amz-Signature=55540836fe58ed95e403740827e64af297b6a9f184f0d469da07cec7121e874b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOXHCX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDs42v9bpnu7H43Q3w5ejCDOXc9jKpaUtZmQlvBT0xidAIhAN6do6EFrkdir%2FrFkWm%2FMvA74rFuJzfsRwwulYm%2FBJYCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylVwK3Dg9vcpFUT%2Fcq3APi9TBTrk0ftjaBU6qA4SxDa2Sb8pH06EzSpCeJ%2B%2BD4O9xNYJi%2FRrCTkzW9SQ30kw0R3ar5G1RLu%2BlDeqhtJUPDv6HdNu7vTK%2FSnsjJiBmElYEnOhxgwKWQJioulxlh5KP3fdh5SOnnNjf0suQHEWV%2B9e%2Fbl8lL4iEXyppj9f7%2FiFmGYOgD0IK3AVKfIxJhaUrD3xnEmspFunt7OhTwlN9XorEdVM5XoAnBWSHMwVgtCkw21B8HNcivFgzN5jgvIInooNQs26VvtMEmmmxy2xeVURuxdM77ci5KHAR53kvZunZDyGOk9Fak9sU18XiQrB0e15DlMnibYArCVFPNixRxwsx1euvn%2FkXlWJkz%2BDLqucGoOR5QijzAfWXnBQEvk6DvwMGSajdC8wggM9BDQaaj6VdpeCeCZNOAruGMHeF3yvESt8VJCmUCVQmEU1w%2B2McMe6Gr9%2BQcnFgzQjRtL%2FX438BIKuxVIbFpXBs44%2BiPC5RJ3GEqqg64lZo5CGhwp%2FfLe241pQO%2FajppwW%2Faa1Om8ziLmPy5MnDOz%2B4p1pUqDCzE6SBcCXrChqk8kNlVB8zMVrD4VaCWytQntPEZSsuQhSiIHBWmcAexLPneF%2BCHS83K9C%2BVJo01SEUvTDD1vd6%2FBjqkATU1dtFmhCuFTkQ5an1mTQbrbmg9f7MbBNYG3NP9NbBk5f6yqN4BbudxGPI1VIyftD8i4ce4rEGgSpV01SSsAz%2BxQWM2XOJDQ8PGSy%2FANcacHWccTcR8a2FbaA6axFZmI1OLlSh7VcUdCshS3zDJLCYPFja635Uhx2%2BiXAvKrHWxfS1L3gPxjavH3e5vtB8wlwG1P9OzFaZZsmv%2FrqeABYqJ%2B23Y&X-Amz-Signature=19fdc481e349e487ea850481be81185aa0d3c8a5effa5bcca960321a4a2b3307&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOXHCX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDs42v9bpnu7H43Q3w5ejCDOXc9jKpaUtZmQlvBT0xidAIhAN6do6EFrkdir%2FrFkWm%2FMvA74rFuJzfsRwwulYm%2FBJYCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylVwK3Dg9vcpFUT%2Fcq3APi9TBTrk0ftjaBU6qA4SxDa2Sb8pH06EzSpCeJ%2B%2BD4O9xNYJi%2FRrCTkzW9SQ30kw0R3ar5G1RLu%2BlDeqhtJUPDv6HdNu7vTK%2FSnsjJiBmElYEnOhxgwKWQJioulxlh5KP3fdh5SOnnNjf0suQHEWV%2B9e%2Fbl8lL4iEXyppj9f7%2FiFmGYOgD0IK3AVKfIxJhaUrD3xnEmspFunt7OhTwlN9XorEdVM5XoAnBWSHMwVgtCkw21B8HNcivFgzN5jgvIInooNQs26VvtMEmmmxy2xeVURuxdM77ci5KHAR53kvZunZDyGOk9Fak9sU18XiQrB0e15DlMnibYArCVFPNixRxwsx1euvn%2FkXlWJkz%2BDLqucGoOR5QijzAfWXnBQEvk6DvwMGSajdC8wggM9BDQaaj6VdpeCeCZNOAruGMHeF3yvESt8VJCmUCVQmEU1w%2B2McMe6Gr9%2BQcnFgzQjRtL%2FX438BIKuxVIbFpXBs44%2BiPC5RJ3GEqqg64lZo5CGhwp%2FfLe241pQO%2FajppwW%2Faa1Om8ziLmPy5MnDOz%2B4p1pUqDCzE6SBcCXrChqk8kNlVB8zMVrD4VaCWytQntPEZSsuQhSiIHBWmcAexLPneF%2BCHS83K9C%2BVJo01SEUvTDD1vd6%2FBjqkATU1dtFmhCuFTkQ5an1mTQbrbmg9f7MbBNYG3NP9NbBk5f6yqN4BbudxGPI1VIyftD8i4ce4rEGgSpV01SSsAz%2BxQWM2XOJDQ8PGSy%2FANcacHWccTcR8a2FbaA6axFZmI1OLlSh7VcUdCshS3zDJLCYPFja635Uhx2%2BiXAvKrHWxfS1L3gPxjavH3e5vtB8wlwG1P9OzFaZZsmv%2FrqeABYqJ%2B23Y&X-Amz-Signature=7320769089ef635aa8770b2dde0c34b30e474b1abaa9da9b26f6097021eb750c&X-Amz-SignedHeaders=host&x-id=GetObject)
