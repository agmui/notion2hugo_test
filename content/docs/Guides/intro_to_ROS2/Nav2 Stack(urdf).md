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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYYBEJF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR4Q02Nm2z%2B9tOXIwyLUmlThZd8Vs70VPpT0ci7crtSAiEAmTCKnmj%2FJdr2tC0nggRyx2HfbJ4SrBSAAwdzDNk7%2Bvwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIkRlODCF3XQc3MbASrcA0o7PrYoyDvi9HhMywNI%2F8qaoP88TCOftczxOPgffFQtFmcnwa6fmwnTxCopWRNoDX4g8pgTOjAjE6r54SLMSSH6yRaVJaqJTNpQ3fmNFvrhisWqs3rgiTUqBLInkHcDMO1Nfht3t%2Bfy5vjpnggCB%2BNNBtGre1NsAKdPpYoxYxhTymEho3VFx7loBpxHY1WkzDimEawjvJHgwvHl33pxgt%2FIEE4ybrSfs0WogBvLac6AeY433wTZOvb8YFBErToKfXAIaeK9hzZOsGUyEhWg5YGWPq7o3tenGtBXHVn5RujVuJ8BAoYiTHCXkZW7OyFH2DFPvLti60SN8iGJLpeiIaDwHslBmIypcKWQHdY3dctEoVpMvj2pPFyUwmC8UedGTel86nD0std1929EdE9v9Cskx3nn0M6Sh79R3GfnoSG9ZijUhCopyb2hQ60QQxsXXyWyiWUiIvRph8HIqCXHkxTIJy6fqSzrRESaEsFQ1pkI7k%2FCRyQfvZoe10D1w%2FsNX9gTAuBflZlGzDUd%2Bb5bW%2BJv%2BSexNkf4w5vIP%2BPQQNNFg7GgR1XwAfh7Yz%2FjJGyHIO97oo46luMLaCB9YBvRKGx%2BSxkRw19Exq9UQG7NQzDt1Yp63QgXXtn%2F%2BT7nMLWitcAGOqUBNbEscmJFbTflE%2Ft2hl0%2FvtmhiJsNSJDFcnqog2Yti1QkCATW814zHbFRmFltek8cNE%2FHMX0YhiX5IXj9ctQNjDqeITEfWXopxO%2BRQfnleemfGPt19cASVZHAh6QHuOWX4RmkfYE29onZuhLaKvbBguNXFIQS3dmxJVAq%2FQHAeLOF%2FB372M%2BPNANmQr4erTMdIuOX47%2FoleKkxUEZMnPyjZE3txFY&X-Amz-Signature=40c8b48c5ffe0cdc005e442939fd77308b94ab2fc2841cd7ceac5dbcd68149ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYYBEJF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR4Q02Nm2z%2B9tOXIwyLUmlThZd8Vs70VPpT0ci7crtSAiEAmTCKnmj%2FJdr2tC0nggRyx2HfbJ4SrBSAAwdzDNk7%2Bvwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIkRlODCF3XQc3MbASrcA0o7PrYoyDvi9HhMywNI%2F8qaoP88TCOftczxOPgffFQtFmcnwa6fmwnTxCopWRNoDX4g8pgTOjAjE6r54SLMSSH6yRaVJaqJTNpQ3fmNFvrhisWqs3rgiTUqBLInkHcDMO1Nfht3t%2Bfy5vjpnggCB%2BNNBtGre1NsAKdPpYoxYxhTymEho3VFx7loBpxHY1WkzDimEawjvJHgwvHl33pxgt%2FIEE4ybrSfs0WogBvLac6AeY433wTZOvb8YFBErToKfXAIaeK9hzZOsGUyEhWg5YGWPq7o3tenGtBXHVn5RujVuJ8BAoYiTHCXkZW7OyFH2DFPvLti60SN8iGJLpeiIaDwHslBmIypcKWQHdY3dctEoVpMvj2pPFyUwmC8UedGTel86nD0std1929EdE9v9Cskx3nn0M6Sh79R3GfnoSG9ZijUhCopyb2hQ60QQxsXXyWyiWUiIvRph8HIqCXHkxTIJy6fqSzrRESaEsFQ1pkI7k%2FCRyQfvZoe10D1w%2FsNX9gTAuBflZlGzDUd%2Bb5bW%2BJv%2BSexNkf4w5vIP%2BPQQNNFg7GgR1XwAfh7Yz%2FjJGyHIO97oo46luMLaCB9YBvRKGx%2BSxkRw19Exq9UQG7NQzDt1Yp63QgXXtn%2F%2BT7nMLWitcAGOqUBNbEscmJFbTflE%2Ft2hl0%2FvtmhiJsNSJDFcnqog2Yti1QkCATW814zHbFRmFltek8cNE%2FHMX0YhiX5IXj9ctQNjDqeITEfWXopxO%2BRQfnleemfGPt19cASVZHAh6QHuOWX4RmkfYE29onZuhLaKvbBguNXFIQS3dmxJVAq%2FQHAeLOF%2FB372M%2BPNANmQr4erTMdIuOX47%2FoleKkxUEZMnPyjZE3txFY&X-Amz-Signature=39cbbc3c72cc379a828b3703c72f3c001be416b105355ba565938cba98735d73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYYBEJF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR4Q02Nm2z%2B9tOXIwyLUmlThZd8Vs70VPpT0ci7crtSAiEAmTCKnmj%2FJdr2tC0nggRyx2HfbJ4SrBSAAwdzDNk7%2Bvwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIkRlODCF3XQc3MbASrcA0o7PrYoyDvi9HhMywNI%2F8qaoP88TCOftczxOPgffFQtFmcnwa6fmwnTxCopWRNoDX4g8pgTOjAjE6r54SLMSSH6yRaVJaqJTNpQ3fmNFvrhisWqs3rgiTUqBLInkHcDMO1Nfht3t%2Bfy5vjpnggCB%2BNNBtGre1NsAKdPpYoxYxhTymEho3VFx7loBpxHY1WkzDimEawjvJHgwvHl33pxgt%2FIEE4ybrSfs0WogBvLac6AeY433wTZOvb8YFBErToKfXAIaeK9hzZOsGUyEhWg5YGWPq7o3tenGtBXHVn5RujVuJ8BAoYiTHCXkZW7OyFH2DFPvLti60SN8iGJLpeiIaDwHslBmIypcKWQHdY3dctEoVpMvj2pPFyUwmC8UedGTel86nD0std1929EdE9v9Cskx3nn0M6Sh79R3GfnoSG9ZijUhCopyb2hQ60QQxsXXyWyiWUiIvRph8HIqCXHkxTIJy6fqSzrRESaEsFQ1pkI7k%2FCRyQfvZoe10D1w%2FsNX9gTAuBflZlGzDUd%2Bb5bW%2BJv%2BSexNkf4w5vIP%2BPQQNNFg7GgR1XwAfh7Yz%2FjJGyHIO97oo46luMLaCB9YBvRKGx%2BSxkRw19Exq9UQG7NQzDt1Yp63QgXXtn%2F%2BT7nMLWitcAGOqUBNbEscmJFbTflE%2Ft2hl0%2FvtmhiJsNSJDFcnqog2Yti1QkCATW814zHbFRmFltek8cNE%2FHMX0YhiX5IXj9ctQNjDqeITEfWXopxO%2BRQfnleemfGPt19cASVZHAh6QHuOWX4RmkfYE29onZuhLaKvbBguNXFIQS3dmxJVAq%2FQHAeLOF%2FB372M%2BPNANmQr4erTMdIuOX47%2FoleKkxUEZMnPyjZE3txFY&X-Amz-Signature=bcf66a1f10524aee0b8abcd27fc83d6ca1866411c5d63189aec21fbf5692a33d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYYBEJF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR4Q02Nm2z%2B9tOXIwyLUmlThZd8Vs70VPpT0ci7crtSAiEAmTCKnmj%2FJdr2tC0nggRyx2HfbJ4SrBSAAwdzDNk7%2Bvwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIkRlODCF3XQc3MbASrcA0o7PrYoyDvi9HhMywNI%2F8qaoP88TCOftczxOPgffFQtFmcnwa6fmwnTxCopWRNoDX4g8pgTOjAjE6r54SLMSSH6yRaVJaqJTNpQ3fmNFvrhisWqs3rgiTUqBLInkHcDMO1Nfht3t%2Bfy5vjpnggCB%2BNNBtGre1NsAKdPpYoxYxhTymEho3VFx7loBpxHY1WkzDimEawjvJHgwvHl33pxgt%2FIEE4ybrSfs0WogBvLac6AeY433wTZOvb8YFBErToKfXAIaeK9hzZOsGUyEhWg5YGWPq7o3tenGtBXHVn5RujVuJ8BAoYiTHCXkZW7OyFH2DFPvLti60SN8iGJLpeiIaDwHslBmIypcKWQHdY3dctEoVpMvj2pPFyUwmC8UedGTel86nD0std1929EdE9v9Cskx3nn0M6Sh79R3GfnoSG9ZijUhCopyb2hQ60QQxsXXyWyiWUiIvRph8HIqCXHkxTIJy6fqSzrRESaEsFQ1pkI7k%2FCRyQfvZoe10D1w%2FsNX9gTAuBflZlGzDUd%2Bb5bW%2BJv%2BSexNkf4w5vIP%2BPQQNNFg7GgR1XwAfh7Yz%2FjJGyHIO97oo46luMLaCB9YBvRKGx%2BSxkRw19Exq9UQG7NQzDt1Yp63QgXXtn%2F%2BT7nMLWitcAGOqUBNbEscmJFbTflE%2Ft2hl0%2FvtmhiJsNSJDFcnqog2Yti1QkCATW814zHbFRmFltek8cNE%2FHMX0YhiX5IXj9ctQNjDqeITEfWXopxO%2BRQfnleemfGPt19cASVZHAh6QHuOWX4RmkfYE29onZuhLaKvbBguNXFIQS3dmxJVAq%2FQHAeLOF%2FB372M%2BPNANmQr4erTMdIuOX47%2FoleKkxUEZMnPyjZE3txFY&X-Amz-Signature=3861753d551c5bc0316f825c6b50981c9b70ace66f6a19a8321fdb90c16e4cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYYBEJF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR4Q02Nm2z%2B9tOXIwyLUmlThZd8Vs70VPpT0ci7crtSAiEAmTCKnmj%2FJdr2tC0nggRyx2HfbJ4SrBSAAwdzDNk7%2Bvwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIkRlODCF3XQc3MbASrcA0o7PrYoyDvi9HhMywNI%2F8qaoP88TCOftczxOPgffFQtFmcnwa6fmwnTxCopWRNoDX4g8pgTOjAjE6r54SLMSSH6yRaVJaqJTNpQ3fmNFvrhisWqs3rgiTUqBLInkHcDMO1Nfht3t%2Bfy5vjpnggCB%2BNNBtGre1NsAKdPpYoxYxhTymEho3VFx7loBpxHY1WkzDimEawjvJHgwvHl33pxgt%2FIEE4ybrSfs0WogBvLac6AeY433wTZOvb8YFBErToKfXAIaeK9hzZOsGUyEhWg5YGWPq7o3tenGtBXHVn5RujVuJ8BAoYiTHCXkZW7OyFH2DFPvLti60SN8iGJLpeiIaDwHslBmIypcKWQHdY3dctEoVpMvj2pPFyUwmC8UedGTel86nD0std1929EdE9v9Cskx3nn0M6Sh79R3GfnoSG9ZijUhCopyb2hQ60QQxsXXyWyiWUiIvRph8HIqCXHkxTIJy6fqSzrRESaEsFQ1pkI7k%2FCRyQfvZoe10D1w%2FsNX9gTAuBflZlGzDUd%2Bb5bW%2BJv%2BSexNkf4w5vIP%2BPQQNNFg7GgR1XwAfh7Yz%2FjJGyHIO97oo46luMLaCB9YBvRKGx%2BSxkRw19Exq9UQG7NQzDt1Yp63QgXXtn%2F%2BT7nMLWitcAGOqUBNbEscmJFbTflE%2Ft2hl0%2FvtmhiJsNSJDFcnqog2Yti1QkCATW814zHbFRmFltek8cNE%2FHMX0YhiX5IXj9ctQNjDqeITEfWXopxO%2BRQfnleemfGPt19cASVZHAh6QHuOWX4RmkfYE29onZuhLaKvbBguNXFIQS3dmxJVAq%2FQHAeLOF%2FB372M%2BPNANmQr4erTMdIuOX47%2FoleKkxUEZMnPyjZE3txFY&X-Amz-Signature=2bde2eaca9deb17d5a4d7c1830b80e52ca7b3e0aefca242cc0500f1cf04c8153&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EYYBEJF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFR4Q02Nm2z%2B9tOXIwyLUmlThZd8Vs70VPpT0ci7crtSAiEAmTCKnmj%2FJdr2tC0nggRyx2HfbJ4SrBSAAwdzDNk7%2Bvwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIkRlODCF3XQc3MbASrcA0o7PrYoyDvi9HhMywNI%2F8qaoP88TCOftczxOPgffFQtFmcnwa6fmwnTxCopWRNoDX4g8pgTOjAjE6r54SLMSSH6yRaVJaqJTNpQ3fmNFvrhisWqs3rgiTUqBLInkHcDMO1Nfht3t%2Bfy5vjpnggCB%2BNNBtGre1NsAKdPpYoxYxhTymEho3VFx7loBpxHY1WkzDimEawjvJHgwvHl33pxgt%2FIEE4ybrSfs0WogBvLac6AeY433wTZOvb8YFBErToKfXAIaeK9hzZOsGUyEhWg5YGWPq7o3tenGtBXHVn5RujVuJ8BAoYiTHCXkZW7OyFH2DFPvLti60SN8iGJLpeiIaDwHslBmIypcKWQHdY3dctEoVpMvj2pPFyUwmC8UedGTel86nD0std1929EdE9v9Cskx3nn0M6Sh79R3GfnoSG9ZijUhCopyb2hQ60QQxsXXyWyiWUiIvRph8HIqCXHkxTIJy6fqSzrRESaEsFQ1pkI7k%2FCRyQfvZoe10D1w%2FsNX9gTAuBflZlGzDUd%2Bb5bW%2BJv%2BSexNkf4w5vIP%2BPQQNNFg7GgR1XwAfh7Yz%2FjJGyHIO97oo46luMLaCB9YBvRKGx%2BSxkRw19Exq9UQG7NQzDt1Yp63QgXXtn%2F%2BT7nMLWitcAGOqUBNbEscmJFbTflE%2Ft2hl0%2FvtmhiJsNSJDFcnqog2Yti1QkCATW814zHbFRmFltek8cNE%2FHMX0YhiX5IXj9ctQNjDqeITEfWXopxO%2BRQfnleemfGPt19cASVZHAh6QHuOWX4RmkfYE29onZuhLaKvbBguNXFIQS3dmxJVAq%2FQHAeLOF%2FB372M%2BPNANmQr4erTMdIuOX47%2FoleKkxUEZMnPyjZE3txFY&X-Amz-Signature=cb254b6c75fcee2800fe76de07f19fd9934d86c9001106e716371e2d9a9268f0&X-Amz-SignedHeaders=host&x-id=GetObject)
