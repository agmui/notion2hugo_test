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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z6GEFC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgECptDRZTcr4Oy20VykNgXRxwRjETuLPK%2BY%2BWXnqb2AIhAKVSxON%2Fu18BryirfgmXv5o1GSAVDiDgi7BiPgJpwlZOKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7MXwHQQkD3Kye6Wkq3APMYmLNLaMyMzyOEfu1AKuQlNvcudS3mWOyH9Yp5uVF2dn%2Fp1MwHnV4%2FHrR%2B%2FVGjWr3Bq5ihzkEfmBTrwOhn%2FGzNGkLfz7OsVrWQbgFGvx80XKdsBz4MVvMh9ld1quXmQbi36N8fNubF%2Fn9Q7PsvMKfhcuZ1Ce7J2BX2MyppScL%2FCZAqNBEFUdECrHo8kcFCtIQ%2BOpCB9cE6%2BkByeHe%2BRGQS6JigFBHgjxPpZ00lfreDWgT%2Br0Owa1gRIqNqP5%2Fnxhc%2BKAXerMTwom8C1ekdopQZXxlwU%2B3psDMn4plFU%2Bqwe0DFvOstuRp0lxCHltLsxknrHkQfHsJ5H%2Bd6yThMrYrXrSigRcACmIyyJw6jzns3LY1agKsZWlbSspDFTj1g1fP6VWIHB1x5s2mlBafCghEbC1%2FKeXPThvWwS2DBtTLRcpJmC3qQcLLjuIvMoZSl%2BItrqBDKH1pf%2FUlA8V388eLIwBF8VQBBMA0GSnffki%2BBuVzQEQyWBs8%2F40XajeWnM1R8rmdZJ1IqVmWNp0wVB5JVOBFSJCovP3CGGnNtrbgv9HqpgJtSUCsPO%2FMSBuwmbpBzmIzWTmz1wWudfW8C6tcXo2DaMQQwmm2RMb3J5KgjSjQSGcxQQwzkZalKDDut8rCBjqkATscaU6GaseLy%2Bp9UF5rF8q%2BB%2BFVfFLOL09Wy9FppfM2HCRS8SIqQVxF1h2w1uip8JDoCHIyM7um7is6ij0QAZfN5VjCBKqtynwU2%2BeIg%2FHSS%2BoVk9bCVHeAwfWjpQborWXvPIN%2FIRyPkfMMuNWWaZaklbTI6vMmY%2FiHfagVHr%2B%2Fdh39VdtzcK4nehAmNk%2BMP0oWVApwrJC4SjnOib0AawBfJLAi&X-Amz-Signature=eba56600082ba31b85657f7c70917e1db26d9c6f95a529128f0628d5414a505b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z6GEFC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgECptDRZTcr4Oy20VykNgXRxwRjETuLPK%2BY%2BWXnqb2AIhAKVSxON%2Fu18BryirfgmXv5o1GSAVDiDgi7BiPgJpwlZOKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7MXwHQQkD3Kye6Wkq3APMYmLNLaMyMzyOEfu1AKuQlNvcudS3mWOyH9Yp5uVF2dn%2Fp1MwHnV4%2FHrR%2B%2FVGjWr3Bq5ihzkEfmBTrwOhn%2FGzNGkLfz7OsVrWQbgFGvx80XKdsBz4MVvMh9ld1quXmQbi36N8fNubF%2Fn9Q7PsvMKfhcuZ1Ce7J2BX2MyppScL%2FCZAqNBEFUdECrHo8kcFCtIQ%2BOpCB9cE6%2BkByeHe%2BRGQS6JigFBHgjxPpZ00lfreDWgT%2Br0Owa1gRIqNqP5%2Fnxhc%2BKAXerMTwom8C1ekdopQZXxlwU%2B3psDMn4plFU%2Bqwe0DFvOstuRp0lxCHltLsxknrHkQfHsJ5H%2Bd6yThMrYrXrSigRcACmIyyJw6jzns3LY1agKsZWlbSspDFTj1g1fP6VWIHB1x5s2mlBafCghEbC1%2FKeXPThvWwS2DBtTLRcpJmC3qQcLLjuIvMoZSl%2BItrqBDKH1pf%2FUlA8V388eLIwBF8VQBBMA0GSnffki%2BBuVzQEQyWBs8%2F40XajeWnM1R8rmdZJ1IqVmWNp0wVB5JVOBFSJCovP3CGGnNtrbgv9HqpgJtSUCsPO%2FMSBuwmbpBzmIzWTmz1wWudfW8C6tcXo2DaMQQwmm2RMb3J5KgjSjQSGcxQQwzkZalKDDut8rCBjqkATscaU6GaseLy%2Bp9UF5rF8q%2BB%2BFVfFLOL09Wy9FppfM2HCRS8SIqQVxF1h2w1uip8JDoCHIyM7um7is6ij0QAZfN5VjCBKqtynwU2%2BeIg%2FHSS%2BoVk9bCVHeAwfWjpQborWXvPIN%2FIRyPkfMMuNWWaZaklbTI6vMmY%2FiHfagVHr%2B%2Fdh39VdtzcK4nehAmNk%2BMP0oWVApwrJC4SjnOib0AawBfJLAi&X-Amz-Signature=9f7a3c964e40d3220b0a7cc890a4ba2b72e731893a0ce880e50d9ec2a5468f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z6GEFC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgECptDRZTcr4Oy20VykNgXRxwRjETuLPK%2BY%2BWXnqb2AIhAKVSxON%2Fu18BryirfgmXv5o1GSAVDiDgi7BiPgJpwlZOKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7MXwHQQkD3Kye6Wkq3APMYmLNLaMyMzyOEfu1AKuQlNvcudS3mWOyH9Yp5uVF2dn%2Fp1MwHnV4%2FHrR%2B%2FVGjWr3Bq5ihzkEfmBTrwOhn%2FGzNGkLfz7OsVrWQbgFGvx80XKdsBz4MVvMh9ld1quXmQbi36N8fNubF%2Fn9Q7PsvMKfhcuZ1Ce7J2BX2MyppScL%2FCZAqNBEFUdECrHo8kcFCtIQ%2BOpCB9cE6%2BkByeHe%2BRGQS6JigFBHgjxPpZ00lfreDWgT%2Br0Owa1gRIqNqP5%2Fnxhc%2BKAXerMTwom8C1ekdopQZXxlwU%2B3psDMn4plFU%2Bqwe0DFvOstuRp0lxCHltLsxknrHkQfHsJ5H%2Bd6yThMrYrXrSigRcACmIyyJw6jzns3LY1agKsZWlbSspDFTj1g1fP6VWIHB1x5s2mlBafCghEbC1%2FKeXPThvWwS2DBtTLRcpJmC3qQcLLjuIvMoZSl%2BItrqBDKH1pf%2FUlA8V388eLIwBF8VQBBMA0GSnffki%2BBuVzQEQyWBs8%2F40XajeWnM1R8rmdZJ1IqVmWNp0wVB5JVOBFSJCovP3CGGnNtrbgv9HqpgJtSUCsPO%2FMSBuwmbpBzmIzWTmz1wWudfW8C6tcXo2DaMQQwmm2RMb3J5KgjSjQSGcxQQwzkZalKDDut8rCBjqkATscaU6GaseLy%2Bp9UF5rF8q%2BB%2BFVfFLOL09Wy9FppfM2HCRS8SIqQVxF1h2w1uip8JDoCHIyM7um7is6ij0QAZfN5VjCBKqtynwU2%2BeIg%2FHSS%2BoVk9bCVHeAwfWjpQborWXvPIN%2FIRyPkfMMuNWWaZaklbTI6vMmY%2FiHfagVHr%2B%2Fdh39VdtzcK4nehAmNk%2BMP0oWVApwrJC4SjnOib0AawBfJLAi&X-Amz-Signature=46d6602099c3de78a4132779958146c183936b5a8624b86c1651500bc24fa189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z6GEFC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgECptDRZTcr4Oy20VykNgXRxwRjETuLPK%2BY%2BWXnqb2AIhAKVSxON%2Fu18BryirfgmXv5o1GSAVDiDgi7BiPgJpwlZOKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7MXwHQQkD3Kye6Wkq3APMYmLNLaMyMzyOEfu1AKuQlNvcudS3mWOyH9Yp5uVF2dn%2Fp1MwHnV4%2FHrR%2B%2FVGjWr3Bq5ihzkEfmBTrwOhn%2FGzNGkLfz7OsVrWQbgFGvx80XKdsBz4MVvMh9ld1quXmQbi36N8fNubF%2Fn9Q7PsvMKfhcuZ1Ce7J2BX2MyppScL%2FCZAqNBEFUdECrHo8kcFCtIQ%2BOpCB9cE6%2BkByeHe%2BRGQS6JigFBHgjxPpZ00lfreDWgT%2Br0Owa1gRIqNqP5%2Fnxhc%2BKAXerMTwom8C1ekdopQZXxlwU%2B3psDMn4plFU%2Bqwe0DFvOstuRp0lxCHltLsxknrHkQfHsJ5H%2Bd6yThMrYrXrSigRcACmIyyJw6jzns3LY1agKsZWlbSspDFTj1g1fP6VWIHB1x5s2mlBafCghEbC1%2FKeXPThvWwS2DBtTLRcpJmC3qQcLLjuIvMoZSl%2BItrqBDKH1pf%2FUlA8V388eLIwBF8VQBBMA0GSnffki%2BBuVzQEQyWBs8%2F40XajeWnM1R8rmdZJ1IqVmWNp0wVB5JVOBFSJCovP3CGGnNtrbgv9HqpgJtSUCsPO%2FMSBuwmbpBzmIzWTmz1wWudfW8C6tcXo2DaMQQwmm2RMb3J5KgjSjQSGcxQQwzkZalKDDut8rCBjqkATscaU6GaseLy%2Bp9UF5rF8q%2BB%2BFVfFLOL09Wy9FppfM2HCRS8SIqQVxF1h2w1uip8JDoCHIyM7um7is6ij0QAZfN5VjCBKqtynwU2%2BeIg%2FHSS%2BoVk9bCVHeAwfWjpQborWXvPIN%2FIRyPkfMMuNWWaZaklbTI6vMmY%2FiHfagVHr%2B%2Fdh39VdtzcK4nehAmNk%2BMP0oWVApwrJC4SjnOib0AawBfJLAi&X-Amz-Signature=b362a6a11ec6580e2254b220d50bea66f2ae6b3d1266898e54ced5c1632227e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z6GEFC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgECptDRZTcr4Oy20VykNgXRxwRjETuLPK%2BY%2BWXnqb2AIhAKVSxON%2Fu18BryirfgmXv5o1GSAVDiDgi7BiPgJpwlZOKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7MXwHQQkD3Kye6Wkq3APMYmLNLaMyMzyOEfu1AKuQlNvcudS3mWOyH9Yp5uVF2dn%2Fp1MwHnV4%2FHrR%2B%2FVGjWr3Bq5ihzkEfmBTrwOhn%2FGzNGkLfz7OsVrWQbgFGvx80XKdsBz4MVvMh9ld1quXmQbi36N8fNubF%2Fn9Q7PsvMKfhcuZ1Ce7J2BX2MyppScL%2FCZAqNBEFUdECrHo8kcFCtIQ%2BOpCB9cE6%2BkByeHe%2BRGQS6JigFBHgjxPpZ00lfreDWgT%2Br0Owa1gRIqNqP5%2Fnxhc%2BKAXerMTwom8C1ekdopQZXxlwU%2B3psDMn4plFU%2Bqwe0DFvOstuRp0lxCHltLsxknrHkQfHsJ5H%2Bd6yThMrYrXrSigRcACmIyyJw6jzns3LY1agKsZWlbSspDFTj1g1fP6VWIHB1x5s2mlBafCghEbC1%2FKeXPThvWwS2DBtTLRcpJmC3qQcLLjuIvMoZSl%2BItrqBDKH1pf%2FUlA8V388eLIwBF8VQBBMA0GSnffki%2BBuVzQEQyWBs8%2F40XajeWnM1R8rmdZJ1IqVmWNp0wVB5JVOBFSJCovP3CGGnNtrbgv9HqpgJtSUCsPO%2FMSBuwmbpBzmIzWTmz1wWudfW8C6tcXo2DaMQQwmm2RMb3J5KgjSjQSGcxQQwzkZalKDDut8rCBjqkATscaU6GaseLy%2Bp9UF5rF8q%2BB%2BFVfFLOL09Wy9FppfM2HCRS8SIqQVxF1h2w1uip8JDoCHIyM7um7is6ij0QAZfN5VjCBKqtynwU2%2BeIg%2FHSS%2BoVk9bCVHeAwfWjpQborWXvPIN%2FIRyPkfMMuNWWaZaklbTI6vMmY%2FiHfagVHr%2B%2Fdh39VdtzcK4nehAmNk%2BMP0oWVApwrJC4SjnOib0AawBfJLAi&X-Amz-Signature=20baac8fc351afbed1cf030ad304cc1f8c6ba07da1d8748637a68f1f8fec45d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z6GEFC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgECptDRZTcr4Oy20VykNgXRxwRjETuLPK%2BY%2BWXnqb2AIhAKVSxON%2Fu18BryirfgmXv5o1GSAVDiDgi7BiPgJpwlZOKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7MXwHQQkD3Kye6Wkq3APMYmLNLaMyMzyOEfu1AKuQlNvcudS3mWOyH9Yp5uVF2dn%2Fp1MwHnV4%2FHrR%2B%2FVGjWr3Bq5ihzkEfmBTrwOhn%2FGzNGkLfz7OsVrWQbgFGvx80XKdsBz4MVvMh9ld1quXmQbi36N8fNubF%2Fn9Q7PsvMKfhcuZ1Ce7J2BX2MyppScL%2FCZAqNBEFUdECrHo8kcFCtIQ%2BOpCB9cE6%2BkByeHe%2BRGQS6JigFBHgjxPpZ00lfreDWgT%2Br0Owa1gRIqNqP5%2Fnxhc%2BKAXerMTwom8C1ekdopQZXxlwU%2B3psDMn4plFU%2Bqwe0DFvOstuRp0lxCHltLsxknrHkQfHsJ5H%2Bd6yThMrYrXrSigRcACmIyyJw6jzns3LY1agKsZWlbSspDFTj1g1fP6VWIHB1x5s2mlBafCghEbC1%2FKeXPThvWwS2DBtTLRcpJmC3qQcLLjuIvMoZSl%2BItrqBDKH1pf%2FUlA8V388eLIwBF8VQBBMA0GSnffki%2BBuVzQEQyWBs8%2F40XajeWnM1R8rmdZJ1IqVmWNp0wVB5JVOBFSJCovP3CGGnNtrbgv9HqpgJtSUCsPO%2FMSBuwmbpBzmIzWTmz1wWudfW8C6tcXo2DaMQQwmm2RMb3J5KgjSjQSGcxQQwzkZalKDDut8rCBjqkATscaU6GaseLy%2Bp9UF5rF8q%2BB%2BFVfFLOL09Wy9FppfM2HCRS8SIqQVxF1h2w1uip8JDoCHIyM7um7is6ij0QAZfN5VjCBKqtynwU2%2BeIg%2FHSS%2BoVk9bCVHeAwfWjpQborWXvPIN%2FIRyPkfMMuNWWaZaklbTI6vMmY%2FiHfagVHr%2B%2Fdh39VdtzcK4nehAmNk%2BMP0oWVApwrJC4SjnOib0AawBfJLAi&X-Amz-Signature=d89b09c727631967ec16be73c41094af1131588a5e72b0d74a7a1aabb3037298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
