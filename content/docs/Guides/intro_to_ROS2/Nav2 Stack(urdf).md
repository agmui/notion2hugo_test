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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUDL3UF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICxg3jDZbv4FZt32ec2FgBbpdlkLvCDMBCUVwHSaJPx%2BAiEA5bNWC%2BwF0SK6hrbsd2O7ODle9eWexTIvxB3KioR6fX0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrvvf%2F0HSb9%2B4kHtSrcA8UQP4rsE9WN7WP%2BjRFYVvSFkfVdwxnGaVW1knW9g7QwfSefol6udE07drv2NBa9a7EHEgQuYHKrmERoKTiqpMzO0senF2kU%2FQmVSPMvhqxkZKSWMjOoqP2btI1t5l5GE9Mldy8M2R8Eu426MUyCri6%2BvxL8uqvCkJdj4r8GfxKiNVWTD1Med5WK5ACj3dHunMmzvp14nllHip2ZzMUYIi4IlUo53nKPGhJIyXR2l%2Bjhoh5CQ1rzuZBlgFTA7LY8uNRiTeD%2BbwGGFFZmKbe6SkxbelUN6ieBzJgCUc5IOZK2XqP7qc%2Bmi94z7AFO77x5unSFeuF4YNxBfChhYFBEycYjfqpJIw5F1xalMJWAnLWOL1AZxli6G54ITU%2FO4QEdgBBS%2Bhqd24NdYgrWVdUkk68ydqvXF75auR2sO49e9wE3pW%2FAi5AHW4JTxT1oTbJIWJL8KxMPCX9P6eFt71gQ61JYdLPaGefAvXTZdzHMKq73rYGxPGPiCW4vCGQxokcaZvm2ojLWZ0n7PPgA7QJQDa%2FEnBUltMpWD01WUDphviSl7C2uRaMAphw8ufExudc1pEnMQYnG0j37F2eOYbPXQw3KNfoho8j6YlhwV0Bq16XziTgOlHlcINTe4V3PMIj2ncAGOqUBZJL19DMXuj10KKg%2BgU%2F3qI7A7e%2BQdtQ8glx%2F6dyRXDwxAD8CwA7ElA%2B4tuh9jq74gOibNpiOSx40bwa5AXXHLofRd0mYq52PPB2KPWimK%2FBLgaix5NrWYfuT%2F6d%2BpDWQYTQF01Z6tP6E426slz8JultOsYGWNYNbyoYnDmkMxIg3jrgJXgnjfwaUA%2BDoZ3iAe%2B%2F3wKx50Sgh0mj2H9EMgmsRLKQu&X-Amz-Signature=f1b26e6a39ffdbadbd5f4c49690d1547d504a590447dbf58b5ac0baf1b8701a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUDL3UF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICxg3jDZbv4FZt32ec2FgBbpdlkLvCDMBCUVwHSaJPx%2BAiEA5bNWC%2BwF0SK6hrbsd2O7ODle9eWexTIvxB3KioR6fX0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrvvf%2F0HSb9%2B4kHtSrcA8UQP4rsE9WN7WP%2BjRFYVvSFkfVdwxnGaVW1knW9g7QwfSefol6udE07drv2NBa9a7EHEgQuYHKrmERoKTiqpMzO0senF2kU%2FQmVSPMvhqxkZKSWMjOoqP2btI1t5l5GE9Mldy8M2R8Eu426MUyCri6%2BvxL8uqvCkJdj4r8GfxKiNVWTD1Med5WK5ACj3dHunMmzvp14nllHip2ZzMUYIi4IlUo53nKPGhJIyXR2l%2Bjhoh5CQ1rzuZBlgFTA7LY8uNRiTeD%2BbwGGFFZmKbe6SkxbelUN6ieBzJgCUc5IOZK2XqP7qc%2Bmi94z7AFO77x5unSFeuF4YNxBfChhYFBEycYjfqpJIw5F1xalMJWAnLWOL1AZxli6G54ITU%2FO4QEdgBBS%2Bhqd24NdYgrWVdUkk68ydqvXF75auR2sO49e9wE3pW%2FAi5AHW4JTxT1oTbJIWJL8KxMPCX9P6eFt71gQ61JYdLPaGefAvXTZdzHMKq73rYGxPGPiCW4vCGQxokcaZvm2ojLWZ0n7PPgA7QJQDa%2FEnBUltMpWD01WUDphviSl7C2uRaMAphw8ufExudc1pEnMQYnG0j37F2eOYbPXQw3KNfoho8j6YlhwV0Bq16XziTgOlHlcINTe4V3PMIj2ncAGOqUBZJL19DMXuj10KKg%2BgU%2F3qI7A7e%2BQdtQ8glx%2F6dyRXDwxAD8CwA7ElA%2B4tuh9jq74gOibNpiOSx40bwa5AXXHLofRd0mYq52PPB2KPWimK%2FBLgaix5NrWYfuT%2F6d%2BpDWQYTQF01Z6tP6E426slz8JultOsYGWNYNbyoYnDmkMxIg3jrgJXgnjfwaUA%2BDoZ3iAe%2B%2F3wKx50Sgh0mj2H9EMgmsRLKQu&X-Amz-Signature=b1ebb444d6adc83a8b8e087c49ceb5bbaf7306cb72ff18ce4cf497178e8f6668&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUDL3UF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICxg3jDZbv4FZt32ec2FgBbpdlkLvCDMBCUVwHSaJPx%2BAiEA5bNWC%2BwF0SK6hrbsd2O7ODle9eWexTIvxB3KioR6fX0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrvvf%2F0HSb9%2B4kHtSrcA8UQP4rsE9WN7WP%2BjRFYVvSFkfVdwxnGaVW1knW9g7QwfSefol6udE07drv2NBa9a7EHEgQuYHKrmERoKTiqpMzO0senF2kU%2FQmVSPMvhqxkZKSWMjOoqP2btI1t5l5GE9Mldy8M2R8Eu426MUyCri6%2BvxL8uqvCkJdj4r8GfxKiNVWTD1Med5WK5ACj3dHunMmzvp14nllHip2ZzMUYIi4IlUo53nKPGhJIyXR2l%2Bjhoh5CQ1rzuZBlgFTA7LY8uNRiTeD%2BbwGGFFZmKbe6SkxbelUN6ieBzJgCUc5IOZK2XqP7qc%2Bmi94z7AFO77x5unSFeuF4YNxBfChhYFBEycYjfqpJIw5F1xalMJWAnLWOL1AZxli6G54ITU%2FO4QEdgBBS%2Bhqd24NdYgrWVdUkk68ydqvXF75auR2sO49e9wE3pW%2FAi5AHW4JTxT1oTbJIWJL8KxMPCX9P6eFt71gQ61JYdLPaGefAvXTZdzHMKq73rYGxPGPiCW4vCGQxokcaZvm2ojLWZ0n7PPgA7QJQDa%2FEnBUltMpWD01WUDphviSl7C2uRaMAphw8ufExudc1pEnMQYnG0j37F2eOYbPXQw3KNfoho8j6YlhwV0Bq16XziTgOlHlcINTe4V3PMIj2ncAGOqUBZJL19DMXuj10KKg%2BgU%2F3qI7A7e%2BQdtQ8glx%2F6dyRXDwxAD8CwA7ElA%2B4tuh9jq74gOibNpiOSx40bwa5AXXHLofRd0mYq52PPB2KPWimK%2FBLgaix5NrWYfuT%2F6d%2BpDWQYTQF01Z6tP6E426slz8JultOsYGWNYNbyoYnDmkMxIg3jrgJXgnjfwaUA%2BDoZ3iAe%2B%2F3wKx50Sgh0mj2H9EMgmsRLKQu&X-Amz-Signature=ae5d5546209cf6378296cc049fef13992df1531c03cb55f18a4cb588e9b92c13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUDL3UF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICxg3jDZbv4FZt32ec2FgBbpdlkLvCDMBCUVwHSaJPx%2BAiEA5bNWC%2BwF0SK6hrbsd2O7ODle9eWexTIvxB3KioR6fX0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrvvf%2F0HSb9%2B4kHtSrcA8UQP4rsE9WN7WP%2BjRFYVvSFkfVdwxnGaVW1knW9g7QwfSefol6udE07drv2NBa9a7EHEgQuYHKrmERoKTiqpMzO0senF2kU%2FQmVSPMvhqxkZKSWMjOoqP2btI1t5l5GE9Mldy8M2R8Eu426MUyCri6%2BvxL8uqvCkJdj4r8GfxKiNVWTD1Med5WK5ACj3dHunMmzvp14nllHip2ZzMUYIi4IlUo53nKPGhJIyXR2l%2Bjhoh5CQ1rzuZBlgFTA7LY8uNRiTeD%2BbwGGFFZmKbe6SkxbelUN6ieBzJgCUc5IOZK2XqP7qc%2Bmi94z7AFO77x5unSFeuF4YNxBfChhYFBEycYjfqpJIw5F1xalMJWAnLWOL1AZxli6G54ITU%2FO4QEdgBBS%2Bhqd24NdYgrWVdUkk68ydqvXF75auR2sO49e9wE3pW%2FAi5AHW4JTxT1oTbJIWJL8KxMPCX9P6eFt71gQ61JYdLPaGefAvXTZdzHMKq73rYGxPGPiCW4vCGQxokcaZvm2ojLWZ0n7PPgA7QJQDa%2FEnBUltMpWD01WUDphviSl7C2uRaMAphw8ufExudc1pEnMQYnG0j37F2eOYbPXQw3KNfoho8j6YlhwV0Bq16XziTgOlHlcINTe4V3PMIj2ncAGOqUBZJL19DMXuj10KKg%2BgU%2F3qI7A7e%2BQdtQ8glx%2F6dyRXDwxAD8CwA7ElA%2B4tuh9jq74gOibNpiOSx40bwa5AXXHLofRd0mYq52PPB2KPWimK%2FBLgaix5NrWYfuT%2F6d%2BpDWQYTQF01Z6tP6E426slz8JultOsYGWNYNbyoYnDmkMxIg3jrgJXgnjfwaUA%2BDoZ3iAe%2B%2F3wKx50Sgh0mj2H9EMgmsRLKQu&X-Amz-Signature=5f67fcc86097881e1303daf52fbaba6e3f3056b686764a7261ae93ec8537401c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUDL3UF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICxg3jDZbv4FZt32ec2FgBbpdlkLvCDMBCUVwHSaJPx%2BAiEA5bNWC%2BwF0SK6hrbsd2O7ODle9eWexTIvxB3KioR6fX0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrvvf%2F0HSb9%2B4kHtSrcA8UQP4rsE9WN7WP%2BjRFYVvSFkfVdwxnGaVW1knW9g7QwfSefol6udE07drv2NBa9a7EHEgQuYHKrmERoKTiqpMzO0senF2kU%2FQmVSPMvhqxkZKSWMjOoqP2btI1t5l5GE9Mldy8M2R8Eu426MUyCri6%2BvxL8uqvCkJdj4r8GfxKiNVWTD1Med5WK5ACj3dHunMmzvp14nllHip2ZzMUYIi4IlUo53nKPGhJIyXR2l%2Bjhoh5CQ1rzuZBlgFTA7LY8uNRiTeD%2BbwGGFFZmKbe6SkxbelUN6ieBzJgCUc5IOZK2XqP7qc%2Bmi94z7AFO77x5unSFeuF4YNxBfChhYFBEycYjfqpJIw5F1xalMJWAnLWOL1AZxli6G54ITU%2FO4QEdgBBS%2Bhqd24NdYgrWVdUkk68ydqvXF75auR2sO49e9wE3pW%2FAi5AHW4JTxT1oTbJIWJL8KxMPCX9P6eFt71gQ61JYdLPaGefAvXTZdzHMKq73rYGxPGPiCW4vCGQxokcaZvm2ojLWZ0n7PPgA7QJQDa%2FEnBUltMpWD01WUDphviSl7C2uRaMAphw8ufExudc1pEnMQYnG0j37F2eOYbPXQw3KNfoho8j6YlhwV0Bq16XziTgOlHlcINTe4V3PMIj2ncAGOqUBZJL19DMXuj10KKg%2BgU%2F3qI7A7e%2BQdtQ8glx%2F6dyRXDwxAD8CwA7ElA%2B4tuh9jq74gOibNpiOSx40bwa5AXXHLofRd0mYq52PPB2KPWimK%2FBLgaix5NrWYfuT%2F6d%2BpDWQYTQF01Z6tP6E426slz8JultOsYGWNYNbyoYnDmkMxIg3jrgJXgnjfwaUA%2BDoZ3iAe%2B%2F3wKx50Sgh0mj2H9EMgmsRLKQu&X-Amz-Signature=cf9938c4024d79dd1d20936b376e600094d214cf3eabb9a3da25b8ee312f630b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUDL3UF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICxg3jDZbv4FZt32ec2FgBbpdlkLvCDMBCUVwHSaJPx%2BAiEA5bNWC%2BwF0SK6hrbsd2O7ODle9eWexTIvxB3KioR6fX0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrvvf%2F0HSb9%2B4kHtSrcA8UQP4rsE9WN7WP%2BjRFYVvSFkfVdwxnGaVW1knW9g7QwfSefol6udE07drv2NBa9a7EHEgQuYHKrmERoKTiqpMzO0senF2kU%2FQmVSPMvhqxkZKSWMjOoqP2btI1t5l5GE9Mldy8M2R8Eu426MUyCri6%2BvxL8uqvCkJdj4r8GfxKiNVWTD1Med5WK5ACj3dHunMmzvp14nllHip2ZzMUYIi4IlUo53nKPGhJIyXR2l%2Bjhoh5CQ1rzuZBlgFTA7LY8uNRiTeD%2BbwGGFFZmKbe6SkxbelUN6ieBzJgCUc5IOZK2XqP7qc%2Bmi94z7AFO77x5unSFeuF4YNxBfChhYFBEycYjfqpJIw5F1xalMJWAnLWOL1AZxli6G54ITU%2FO4QEdgBBS%2Bhqd24NdYgrWVdUkk68ydqvXF75auR2sO49e9wE3pW%2FAi5AHW4JTxT1oTbJIWJL8KxMPCX9P6eFt71gQ61JYdLPaGefAvXTZdzHMKq73rYGxPGPiCW4vCGQxokcaZvm2ojLWZ0n7PPgA7QJQDa%2FEnBUltMpWD01WUDphviSl7C2uRaMAphw8ufExudc1pEnMQYnG0j37F2eOYbPXQw3KNfoho8j6YlhwV0Bq16XziTgOlHlcINTe4V3PMIj2ncAGOqUBZJL19DMXuj10KKg%2BgU%2F3qI7A7e%2BQdtQ8glx%2F6dyRXDwxAD8CwA7ElA%2B4tuh9jq74gOibNpiOSx40bwa5AXXHLofRd0mYq52PPB2KPWimK%2FBLgaix5NrWYfuT%2F6d%2BpDWQYTQF01Z6tP6E426slz8JultOsYGWNYNbyoYnDmkMxIg3jrgJXgnjfwaUA%2BDoZ3iAe%2B%2F3wKx50Sgh0mj2H9EMgmsRLKQu&X-Amz-Signature=617dc65e06edee5fc740561950505a7d86ac166df4f4506c3d2c6f516b025c75&X-Amz-SignedHeaders=host&x-id=GetObject)
