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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTBPKCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbjGH1hLZXGBgsFJ8Tqz2qVYiGByszj2tqL3SxrHf%2FEAiEA4l9it0YbGW%2BLtHRU%2Fs8Edbmp54fPcbQ3b1sJJrf60nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjliOQUPHzlhWAnpCrcA3GLUgK2FTrdxQQv2%2B4PBVFmBYNL4iWVLRZZ09nNYGb01sDurI%2F4vI%2BVov5xRaa1Ai0%2Bb2v0tzyHxDIzKtuuEO6zKq59Eqsrs9aqPH5KscVmUIdwEMM8anismZ%2Bp2hoGBnTq1N7FSA6tj8HW6fdhc6%2FJw43i6B3DYqyNkhm2BkcYQtFHmxwO%2F%2Bcr5GzjA4yaoOAMEczSOXizcB4XbCyXtkjAsS6%2FvOe1kxn2HZTAl4f2US9PkxAouM0%2B%2BOryVbDGUVOoCyyALJhA6z%2FcJ0P6P9t1zAkY69UOgVb2l8qZB4jmibUJ6co4QGu1j7uTTpsbqtxQe4Xb8uLEmcwyRZIgjU5d%2BVt0TLhN7EuLRrPiQJhEWKpghsYkGJIZvLJ9TcMz1uuY0i9bc%2BjnU2oIj9C%2BLy3ge49SWrHczJV%2FTMm%2BdFWoFABA7hq2GPMvqjQVcqmYyAvmeYC0e8B%2FefKSVwJRK%2F%2BhgXYd3VgHbGjXAPW31cPwmllBbHOqTSzDpnHmaQJT5l%2Bhar%2BFXoyBCQkAqiTBIT6xuXEWXoruH34vE7RT88yqSEIDJARCQoaCyvkz%2FbINWBYKDpJEfQsos970hQviXHX8SIgy0qx%2B5oy62ro8n52pw0ny55rANgarW%2FZZMPOjycIGOqUB2wiqsHaf7ftL%2FnqBSi%2BdhbTCOKzMFwkfw3BhAMrCGqMoezW1osnjrg3Kabv%2BL%2BPkvTfJVyuEFp7gEPu4sUlPtIJ2iE%2BnIlj582ZQ7%2BY%2FKMJRjhGl82zjdJAE8oG%2B9rw9x3yFsRzRpfGBryoJ2fQv8eTgujT3fHYeQ1GqUBrCxamImUv8sJFYYcO6hVxUNpQMjsuKCPsx0A0QRpPwLQIMVfi6MzlZ&X-Amz-Signature=5345c548ac742798f3c9228443804cad554e5fa8a6e6dfa946aada012c36fecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTBPKCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbjGH1hLZXGBgsFJ8Tqz2qVYiGByszj2tqL3SxrHf%2FEAiEA4l9it0YbGW%2BLtHRU%2Fs8Edbmp54fPcbQ3b1sJJrf60nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjliOQUPHzlhWAnpCrcA3GLUgK2FTrdxQQv2%2B4PBVFmBYNL4iWVLRZZ09nNYGb01sDurI%2F4vI%2BVov5xRaa1Ai0%2Bb2v0tzyHxDIzKtuuEO6zKq59Eqsrs9aqPH5KscVmUIdwEMM8anismZ%2Bp2hoGBnTq1N7FSA6tj8HW6fdhc6%2FJw43i6B3DYqyNkhm2BkcYQtFHmxwO%2F%2Bcr5GzjA4yaoOAMEczSOXizcB4XbCyXtkjAsS6%2FvOe1kxn2HZTAl4f2US9PkxAouM0%2B%2BOryVbDGUVOoCyyALJhA6z%2FcJ0P6P9t1zAkY69UOgVb2l8qZB4jmibUJ6co4QGu1j7uTTpsbqtxQe4Xb8uLEmcwyRZIgjU5d%2BVt0TLhN7EuLRrPiQJhEWKpghsYkGJIZvLJ9TcMz1uuY0i9bc%2BjnU2oIj9C%2BLy3ge49SWrHczJV%2FTMm%2BdFWoFABA7hq2GPMvqjQVcqmYyAvmeYC0e8B%2FefKSVwJRK%2F%2BhgXYd3VgHbGjXAPW31cPwmllBbHOqTSzDpnHmaQJT5l%2Bhar%2BFXoyBCQkAqiTBIT6xuXEWXoruH34vE7RT88yqSEIDJARCQoaCyvkz%2FbINWBYKDpJEfQsos970hQviXHX8SIgy0qx%2B5oy62ro8n52pw0ny55rANgarW%2FZZMPOjycIGOqUB2wiqsHaf7ftL%2FnqBSi%2BdhbTCOKzMFwkfw3BhAMrCGqMoezW1osnjrg3Kabv%2BL%2BPkvTfJVyuEFp7gEPu4sUlPtIJ2iE%2BnIlj582ZQ7%2BY%2FKMJRjhGl82zjdJAE8oG%2B9rw9x3yFsRzRpfGBryoJ2fQv8eTgujT3fHYeQ1GqUBrCxamImUv8sJFYYcO6hVxUNpQMjsuKCPsx0A0QRpPwLQIMVfi6MzlZ&X-Amz-Signature=08cd94ce711744b8f3f0415af20f45d93e7184456387b7f2a877fe9132694d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTBPKCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbjGH1hLZXGBgsFJ8Tqz2qVYiGByszj2tqL3SxrHf%2FEAiEA4l9it0YbGW%2BLtHRU%2Fs8Edbmp54fPcbQ3b1sJJrf60nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjliOQUPHzlhWAnpCrcA3GLUgK2FTrdxQQv2%2B4PBVFmBYNL4iWVLRZZ09nNYGb01sDurI%2F4vI%2BVov5xRaa1Ai0%2Bb2v0tzyHxDIzKtuuEO6zKq59Eqsrs9aqPH5KscVmUIdwEMM8anismZ%2Bp2hoGBnTq1N7FSA6tj8HW6fdhc6%2FJw43i6B3DYqyNkhm2BkcYQtFHmxwO%2F%2Bcr5GzjA4yaoOAMEczSOXizcB4XbCyXtkjAsS6%2FvOe1kxn2HZTAl4f2US9PkxAouM0%2B%2BOryVbDGUVOoCyyALJhA6z%2FcJ0P6P9t1zAkY69UOgVb2l8qZB4jmibUJ6co4QGu1j7uTTpsbqtxQe4Xb8uLEmcwyRZIgjU5d%2BVt0TLhN7EuLRrPiQJhEWKpghsYkGJIZvLJ9TcMz1uuY0i9bc%2BjnU2oIj9C%2BLy3ge49SWrHczJV%2FTMm%2BdFWoFABA7hq2GPMvqjQVcqmYyAvmeYC0e8B%2FefKSVwJRK%2F%2BhgXYd3VgHbGjXAPW31cPwmllBbHOqTSzDpnHmaQJT5l%2Bhar%2BFXoyBCQkAqiTBIT6xuXEWXoruH34vE7RT88yqSEIDJARCQoaCyvkz%2FbINWBYKDpJEfQsos970hQviXHX8SIgy0qx%2B5oy62ro8n52pw0ny55rANgarW%2FZZMPOjycIGOqUB2wiqsHaf7ftL%2FnqBSi%2BdhbTCOKzMFwkfw3BhAMrCGqMoezW1osnjrg3Kabv%2BL%2BPkvTfJVyuEFp7gEPu4sUlPtIJ2iE%2BnIlj582ZQ7%2BY%2FKMJRjhGl82zjdJAE8oG%2B9rw9x3yFsRzRpfGBryoJ2fQv8eTgujT3fHYeQ1GqUBrCxamImUv8sJFYYcO6hVxUNpQMjsuKCPsx0A0QRpPwLQIMVfi6MzlZ&X-Amz-Signature=f29a2b08dc9bcce5d5e0a1fcb6e0f8dba4fddd0ebd826f5f009c9e0e8d5c5999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTBPKCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbjGH1hLZXGBgsFJ8Tqz2qVYiGByszj2tqL3SxrHf%2FEAiEA4l9it0YbGW%2BLtHRU%2Fs8Edbmp54fPcbQ3b1sJJrf60nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjliOQUPHzlhWAnpCrcA3GLUgK2FTrdxQQv2%2B4PBVFmBYNL4iWVLRZZ09nNYGb01sDurI%2F4vI%2BVov5xRaa1Ai0%2Bb2v0tzyHxDIzKtuuEO6zKq59Eqsrs9aqPH5KscVmUIdwEMM8anismZ%2Bp2hoGBnTq1N7FSA6tj8HW6fdhc6%2FJw43i6B3DYqyNkhm2BkcYQtFHmxwO%2F%2Bcr5GzjA4yaoOAMEczSOXizcB4XbCyXtkjAsS6%2FvOe1kxn2HZTAl4f2US9PkxAouM0%2B%2BOryVbDGUVOoCyyALJhA6z%2FcJ0P6P9t1zAkY69UOgVb2l8qZB4jmibUJ6co4QGu1j7uTTpsbqtxQe4Xb8uLEmcwyRZIgjU5d%2BVt0TLhN7EuLRrPiQJhEWKpghsYkGJIZvLJ9TcMz1uuY0i9bc%2BjnU2oIj9C%2BLy3ge49SWrHczJV%2FTMm%2BdFWoFABA7hq2GPMvqjQVcqmYyAvmeYC0e8B%2FefKSVwJRK%2F%2BhgXYd3VgHbGjXAPW31cPwmllBbHOqTSzDpnHmaQJT5l%2Bhar%2BFXoyBCQkAqiTBIT6xuXEWXoruH34vE7RT88yqSEIDJARCQoaCyvkz%2FbINWBYKDpJEfQsos970hQviXHX8SIgy0qx%2B5oy62ro8n52pw0ny55rANgarW%2FZZMPOjycIGOqUB2wiqsHaf7ftL%2FnqBSi%2BdhbTCOKzMFwkfw3BhAMrCGqMoezW1osnjrg3Kabv%2BL%2BPkvTfJVyuEFp7gEPu4sUlPtIJ2iE%2BnIlj582ZQ7%2BY%2FKMJRjhGl82zjdJAE8oG%2B9rw9x3yFsRzRpfGBryoJ2fQv8eTgujT3fHYeQ1GqUBrCxamImUv8sJFYYcO6hVxUNpQMjsuKCPsx0A0QRpPwLQIMVfi6MzlZ&X-Amz-Signature=e7fc09a75a5db72b2720d6b233b15ecb1bb306ac48bf0caf2beab9540075fb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTBPKCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbjGH1hLZXGBgsFJ8Tqz2qVYiGByszj2tqL3SxrHf%2FEAiEA4l9it0YbGW%2BLtHRU%2Fs8Edbmp54fPcbQ3b1sJJrf60nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjliOQUPHzlhWAnpCrcA3GLUgK2FTrdxQQv2%2B4PBVFmBYNL4iWVLRZZ09nNYGb01sDurI%2F4vI%2BVov5xRaa1Ai0%2Bb2v0tzyHxDIzKtuuEO6zKq59Eqsrs9aqPH5KscVmUIdwEMM8anismZ%2Bp2hoGBnTq1N7FSA6tj8HW6fdhc6%2FJw43i6B3DYqyNkhm2BkcYQtFHmxwO%2F%2Bcr5GzjA4yaoOAMEczSOXizcB4XbCyXtkjAsS6%2FvOe1kxn2HZTAl4f2US9PkxAouM0%2B%2BOryVbDGUVOoCyyALJhA6z%2FcJ0P6P9t1zAkY69UOgVb2l8qZB4jmibUJ6co4QGu1j7uTTpsbqtxQe4Xb8uLEmcwyRZIgjU5d%2BVt0TLhN7EuLRrPiQJhEWKpghsYkGJIZvLJ9TcMz1uuY0i9bc%2BjnU2oIj9C%2BLy3ge49SWrHczJV%2FTMm%2BdFWoFABA7hq2GPMvqjQVcqmYyAvmeYC0e8B%2FefKSVwJRK%2F%2BhgXYd3VgHbGjXAPW31cPwmllBbHOqTSzDpnHmaQJT5l%2Bhar%2BFXoyBCQkAqiTBIT6xuXEWXoruH34vE7RT88yqSEIDJARCQoaCyvkz%2FbINWBYKDpJEfQsos970hQviXHX8SIgy0qx%2B5oy62ro8n52pw0ny55rANgarW%2FZZMPOjycIGOqUB2wiqsHaf7ftL%2FnqBSi%2BdhbTCOKzMFwkfw3BhAMrCGqMoezW1osnjrg3Kabv%2BL%2BPkvTfJVyuEFp7gEPu4sUlPtIJ2iE%2BnIlj582ZQ7%2BY%2FKMJRjhGl82zjdJAE8oG%2B9rw9x3yFsRzRpfGBryoJ2fQv8eTgujT3fHYeQ1GqUBrCxamImUv8sJFYYcO6hVxUNpQMjsuKCPsx0A0QRpPwLQIMVfi6MzlZ&X-Amz-Signature=21a9289c710ad7b4cc6a7eb579133c604899cfc6347a4dcf30c61a6399b5fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RTBPKCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbjGH1hLZXGBgsFJ8Tqz2qVYiGByszj2tqL3SxrHf%2FEAiEA4l9it0YbGW%2BLtHRU%2Fs8Edbmp54fPcbQ3b1sJJrf60nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjliOQUPHzlhWAnpCrcA3GLUgK2FTrdxQQv2%2B4PBVFmBYNL4iWVLRZZ09nNYGb01sDurI%2F4vI%2BVov5xRaa1Ai0%2Bb2v0tzyHxDIzKtuuEO6zKq59Eqsrs9aqPH5KscVmUIdwEMM8anismZ%2Bp2hoGBnTq1N7FSA6tj8HW6fdhc6%2FJw43i6B3DYqyNkhm2BkcYQtFHmxwO%2F%2Bcr5GzjA4yaoOAMEczSOXizcB4XbCyXtkjAsS6%2FvOe1kxn2HZTAl4f2US9PkxAouM0%2B%2BOryVbDGUVOoCyyALJhA6z%2FcJ0P6P9t1zAkY69UOgVb2l8qZB4jmibUJ6co4QGu1j7uTTpsbqtxQe4Xb8uLEmcwyRZIgjU5d%2BVt0TLhN7EuLRrPiQJhEWKpghsYkGJIZvLJ9TcMz1uuY0i9bc%2BjnU2oIj9C%2BLy3ge49SWrHczJV%2FTMm%2BdFWoFABA7hq2GPMvqjQVcqmYyAvmeYC0e8B%2FefKSVwJRK%2F%2BhgXYd3VgHbGjXAPW31cPwmllBbHOqTSzDpnHmaQJT5l%2Bhar%2BFXoyBCQkAqiTBIT6xuXEWXoruH34vE7RT88yqSEIDJARCQoaCyvkz%2FbINWBYKDpJEfQsos970hQviXHX8SIgy0qx%2B5oy62ro8n52pw0ny55rANgarW%2FZZMPOjycIGOqUB2wiqsHaf7ftL%2FnqBSi%2BdhbTCOKzMFwkfw3BhAMrCGqMoezW1osnjrg3Kabv%2BL%2BPkvTfJVyuEFp7gEPu4sUlPtIJ2iE%2BnIlj582ZQ7%2BY%2FKMJRjhGl82zjdJAE8oG%2B9rw9x3yFsRzRpfGBryoJ2fQv8eTgujT3fHYeQ1GqUBrCxamImUv8sJFYYcO6hVxUNpQMjsuKCPsx0A0QRpPwLQIMVfi6MzlZ&X-Amz-Signature=9d70662e5fcf0f489ae0be9a0258bce22be46965d91b320fc23f801e661591ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
