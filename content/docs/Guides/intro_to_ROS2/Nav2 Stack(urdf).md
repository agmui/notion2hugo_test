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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57N3P5B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDEpWibJ49i69jW8R1aMAdKseLh8Z2jcOm9bwhc3IdyewIhAJcH5mtwrprkGMECxfOBrA9q3MxcxS3My87ihWLVYYBTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhcMoWEgMs3k35oFIq3AP0VDJOOQPYuAJNdwqIX3%2F%2BVUulXs6WxHlJPkYsWJ6Fz%2BJ1QGQ20NVfYUGpKgXokAuN7fiWgVmX2S3S%2FwGT0O0BvgeVPpK8jvc4zjAWOd67db356fpudEbe9FFCOpXWJKDnwwQyn2kFuS%2BzOZbxQhKfL1i5atgxPnkX3SJvztd7oVRtA5MJKjYerc7lT6KunGcFuRIkujdw7fXWS5KHbyvaN4afvNqCPCgfPdEZCP3n%2FVBhrzuppdSb3YOiDrpJKUwMbM7ys17PYHYoYdWuMvmQrJ1tE%2F%2BtI1%2BA8I%2BHoNPYLO9fSZNnUJXiojHU%2FetTJ%2FLasUscDprsvMgBtgvVsvAFTyeM4WO2GD6QHPHl5nbg1tLyRFV3dCI8i7bQXy93xV0fj%2BAl7mtI8Fvyq0G9zeVQSqs0vqoCvFTDGM8fdMKySRUVk6Anne5xfP91bhJcEyIY36HgLOrSLRCQyudXUSKR8l4jhjZi2OlBBtCOrpJcDhJEf%2FeIdQwlHxeOr1M5LM19twzfiw%2BO81mQ3WdCXScJ64NIq4XFI522tul1Aayk9fNvmL7fWed7ZAelNpVZehGO1Q%2FKheEYHrCPNgwZgI20f5xc4L7m%2FLL2UFKtIjaHBLtL%2Be58SmkeZsbJQTCS5dPABjqkAckTKqHtXsA52Nq8REnJfSsfhGVw6RDPYjB1TOypp7h%2BXMAcydQpH01ao8RSK0gf9JaDnbUz7hjddaAPWO4HqvD8sOKpllhe%2F9zZoSK78%2BXTTMkOmUosQ0821XVg6rtPvIyYSXba6Xyp1smr7ACEbUT%2FnTTsPugYiTvd9Qe5qFvDjcddvESdEQD7HJ%2FBS9Tgb3cAkulXKnf33GTRbHFWhZLz3e9j&X-Amz-Signature=7f46343d2c304287cbdaeb2b8084b723dcfebdcb2d9d6690f42784d601f608fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57N3P5B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDEpWibJ49i69jW8R1aMAdKseLh8Z2jcOm9bwhc3IdyewIhAJcH5mtwrprkGMECxfOBrA9q3MxcxS3My87ihWLVYYBTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhcMoWEgMs3k35oFIq3AP0VDJOOQPYuAJNdwqIX3%2F%2BVUulXs6WxHlJPkYsWJ6Fz%2BJ1QGQ20NVfYUGpKgXokAuN7fiWgVmX2S3S%2FwGT0O0BvgeVPpK8jvc4zjAWOd67db356fpudEbe9FFCOpXWJKDnwwQyn2kFuS%2BzOZbxQhKfL1i5atgxPnkX3SJvztd7oVRtA5MJKjYerc7lT6KunGcFuRIkujdw7fXWS5KHbyvaN4afvNqCPCgfPdEZCP3n%2FVBhrzuppdSb3YOiDrpJKUwMbM7ys17PYHYoYdWuMvmQrJ1tE%2F%2BtI1%2BA8I%2BHoNPYLO9fSZNnUJXiojHU%2FetTJ%2FLasUscDprsvMgBtgvVsvAFTyeM4WO2GD6QHPHl5nbg1tLyRFV3dCI8i7bQXy93xV0fj%2BAl7mtI8Fvyq0G9zeVQSqs0vqoCvFTDGM8fdMKySRUVk6Anne5xfP91bhJcEyIY36HgLOrSLRCQyudXUSKR8l4jhjZi2OlBBtCOrpJcDhJEf%2FeIdQwlHxeOr1M5LM19twzfiw%2BO81mQ3WdCXScJ64NIq4XFI522tul1Aayk9fNvmL7fWed7ZAelNpVZehGO1Q%2FKheEYHrCPNgwZgI20f5xc4L7m%2FLL2UFKtIjaHBLtL%2Be58SmkeZsbJQTCS5dPABjqkAckTKqHtXsA52Nq8REnJfSsfhGVw6RDPYjB1TOypp7h%2BXMAcydQpH01ao8RSK0gf9JaDnbUz7hjddaAPWO4HqvD8sOKpllhe%2F9zZoSK78%2BXTTMkOmUosQ0821XVg6rtPvIyYSXba6Xyp1smr7ACEbUT%2FnTTsPugYiTvd9Qe5qFvDjcddvESdEQD7HJ%2FBS9Tgb3cAkulXKnf33GTRbHFWhZLz3e9j&X-Amz-Signature=196d5976263f5b42fbf403c452939ff55803eda7454fcbee65d656266839c265&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57N3P5B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDEpWibJ49i69jW8R1aMAdKseLh8Z2jcOm9bwhc3IdyewIhAJcH5mtwrprkGMECxfOBrA9q3MxcxS3My87ihWLVYYBTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhcMoWEgMs3k35oFIq3AP0VDJOOQPYuAJNdwqIX3%2F%2BVUulXs6WxHlJPkYsWJ6Fz%2BJ1QGQ20NVfYUGpKgXokAuN7fiWgVmX2S3S%2FwGT0O0BvgeVPpK8jvc4zjAWOd67db356fpudEbe9FFCOpXWJKDnwwQyn2kFuS%2BzOZbxQhKfL1i5atgxPnkX3SJvztd7oVRtA5MJKjYerc7lT6KunGcFuRIkujdw7fXWS5KHbyvaN4afvNqCPCgfPdEZCP3n%2FVBhrzuppdSb3YOiDrpJKUwMbM7ys17PYHYoYdWuMvmQrJ1tE%2F%2BtI1%2BA8I%2BHoNPYLO9fSZNnUJXiojHU%2FetTJ%2FLasUscDprsvMgBtgvVsvAFTyeM4WO2GD6QHPHl5nbg1tLyRFV3dCI8i7bQXy93xV0fj%2BAl7mtI8Fvyq0G9zeVQSqs0vqoCvFTDGM8fdMKySRUVk6Anne5xfP91bhJcEyIY36HgLOrSLRCQyudXUSKR8l4jhjZi2OlBBtCOrpJcDhJEf%2FeIdQwlHxeOr1M5LM19twzfiw%2BO81mQ3WdCXScJ64NIq4XFI522tul1Aayk9fNvmL7fWed7ZAelNpVZehGO1Q%2FKheEYHrCPNgwZgI20f5xc4L7m%2FLL2UFKtIjaHBLtL%2Be58SmkeZsbJQTCS5dPABjqkAckTKqHtXsA52Nq8REnJfSsfhGVw6RDPYjB1TOypp7h%2BXMAcydQpH01ao8RSK0gf9JaDnbUz7hjddaAPWO4HqvD8sOKpllhe%2F9zZoSK78%2BXTTMkOmUosQ0821XVg6rtPvIyYSXba6Xyp1smr7ACEbUT%2FnTTsPugYiTvd9Qe5qFvDjcddvESdEQD7HJ%2FBS9Tgb3cAkulXKnf33GTRbHFWhZLz3e9j&X-Amz-Signature=e80dc3eb3fcd260dc145b7f323b9e22d10dbaeef1295c7ca84541aa2ec733000&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57N3P5B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDEpWibJ49i69jW8R1aMAdKseLh8Z2jcOm9bwhc3IdyewIhAJcH5mtwrprkGMECxfOBrA9q3MxcxS3My87ihWLVYYBTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhcMoWEgMs3k35oFIq3AP0VDJOOQPYuAJNdwqIX3%2F%2BVUulXs6WxHlJPkYsWJ6Fz%2BJ1QGQ20NVfYUGpKgXokAuN7fiWgVmX2S3S%2FwGT0O0BvgeVPpK8jvc4zjAWOd67db356fpudEbe9FFCOpXWJKDnwwQyn2kFuS%2BzOZbxQhKfL1i5atgxPnkX3SJvztd7oVRtA5MJKjYerc7lT6KunGcFuRIkujdw7fXWS5KHbyvaN4afvNqCPCgfPdEZCP3n%2FVBhrzuppdSb3YOiDrpJKUwMbM7ys17PYHYoYdWuMvmQrJ1tE%2F%2BtI1%2BA8I%2BHoNPYLO9fSZNnUJXiojHU%2FetTJ%2FLasUscDprsvMgBtgvVsvAFTyeM4WO2GD6QHPHl5nbg1tLyRFV3dCI8i7bQXy93xV0fj%2BAl7mtI8Fvyq0G9zeVQSqs0vqoCvFTDGM8fdMKySRUVk6Anne5xfP91bhJcEyIY36HgLOrSLRCQyudXUSKR8l4jhjZi2OlBBtCOrpJcDhJEf%2FeIdQwlHxeOr1M5LM19twzfiw%2BO81mQ3WdCXScJ64NIq4XFI522tul1Aayk9fNvmL7fWed7ZAelNpVZehGO1Q%2FKheEYHrCPNgwZgI20f5xc4L7m%2FLL2UFKtIjaHBLtL%2Be58SmkeZsbJQTCS5dPABjqkAckTKqHtXsA52Nq8REnJfSsfhGVw6RDPYjB1TOypp7h%2BXMAcydQpH01ao8RSK0gf9JaDnbUz7hjddaAPWO4HqvD8sOKpllhe%2F9zZoSK78%2BXTTMkOmUosQ0821XVg6rtPvIyYSXba6Xyp1smr7ACEbUT%2FnTTsPugYiTvd9Qe5qFvDjcddvESdEQD7HJ%2FBS9Tgb3cAkulXKnf33GTRbHFWhZLz3e9j&X-Amz-Signature=194588d4d57e46505275567b110300fc8b83d87755f8bc93a3d78efc03498dec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57N3P5B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDEpWibJ49i69jW8R1aMAdKseLh8Z2jcOm9bwhc3IdyewIhAJcH5mtwrprkGMECxfOBrA9q3MxcxS3My87ihWLVYYBTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhcMoWEgMs3k35oFIq3AP0VDJOOQPYuAJNdwqIX3%2F%2BVUulXs6WxHlJPkYsWJ6Fz%2BJ1QGQ20NVfYUGpKgXokAuN7fiWgVmX2S3S%2FwGT0O0BvgeVPpK8jvc4zjAWOd67db356fpudEbe9FFCOpXWJKDnwwQyn2kFuS%2BzOZbxQhKfL1i5atgxPnkX3SJvztd7oVRtA5MJKjYerc7lT6KunGcFuRIkujdw7fXWS5KHbyvaN4afvNqCPCgfPdEZCP3n%2FVBhrzuppdSb3YOiDrpJKUwMbM7ys17PYHYoYdWuMvmQrJ1tE%2F%2BtI1%2BA8I%2BHoNPYLO9fSZNnUJXiojHU%2FetTJ%2FLasUscDprsvMgBtgvVsvAFTyeM4WO2GD6QHPHl5nbg1tLyRFV3dCI8i7bQXy93xV0fj%2BAl7mtI8Fvyq0G9zeVQSqs0vqoCvFTDGM8fdMKySRUVk6Anne5xfP91bhJcEyIY36HgLOrSLRCQyudXUSKR8l4jhjZi2OlBBtCOrpJcDhJEf%2FeIdQwlHxeOr1M5LM19twzfiw%2BO81mQ3WdCXScJ64NIq4XFI522tul1Aayk9fNvmL7fWed7ZAelNpVZehGO1Q%2FKheEYHrCPNgwZgI20f5xc4L7m%2FLL2UFKtIjaHBLtL%2Be58SmkeZsbJQTCS5dPABjqkAckTKqHtXsA52Nq8REnJfSsfhGVw6RDPYjB1TOypp7h%2BXMAcydQpH01ao8RSK0gf9JaDnbUz7hjddaAPWO4HqvD8sOKpllhe%2F9zZoSK78%2BXTTMkOmUosQ0821XVg6rtPvIyYSXba6Xyp1smr7ACEbUT%2FnTTsPugYiTvd9Qe5qFvDjcddvESdEQD7HJ%2FBS9Tgb3cAkulXKnf33GTRbHFWhZLz3e9j&X-Amz-Signature=138661dca67dccf609b38979e1499e703f88486d5c6b0ed816f915dda2524d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57N3P5B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDEpWibJ49i69jW8R1aMAdKseLh8Z2jcOm9bwhc3IdyewIhAJcH5mtwrprkGMECxfOBrA9q3MxcxS3My87ihWLVYYBTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhcMoWEgMs3k35oFIq3AP0VDJOOQPYuAJNdwqIX3%2F%2BVUulXs6WxHlJPkYsWJ6Fz%2BJ1QGQ20NVfYUGpKgXokAuN7fiWgVmX2S3S%2FwGT0O0BvgeVPpK8jvc4zjAWOd67db356fpudEbe9FFCOpXWJKDnwwQyn2kFuS%2BzOZbxQhKfL1i5atgxPnkX3SJvztd7oVRtA5MJKjYerc7lT6KunGcFuRIkujdw7fXWS5KHbyvaN4afvNqCPCgfPdEZCP3n%2FVBhrzuppdSb3YOiDrpJKUwMbM7ys17PYHYoYdWuMvmQrJ1tE%2F%2BtI1%2BA8I%2BHoNPYLO9fSZNnUJXiojHU%2FetTJ%2FLasUscDprsvMgBtgvVsvAFTyeM4WO2GD6QHPHl5nbg1tLyRFV3dCI8i7bQXy93xV0fj%2BAl7mtI8Fvyq0G9zeVQSqs0vqoCvFTDGM8fdMKySRUVk6Anne5xfP91bhJcEyIY36HgLOrSLRCQyudXUSKR8l4jhjZi2OlBBtCOrpJcDhJEf%2FeIdQwlHxeOr1M5LM19twzfiw%2BO81mQ3WdCXScJ64NIq4XFI522tul1Aayk9fNvmL7fWed7ZAelNpVZehGO1Q%2FKheEYHrCPNgwZgI20f5xc4L7m%2FLL2UFKtIjaHBLtL%2Be58SmkeZsbJQTCS5dPABjqkAckTKqHtXsA52Nq8REnJfSsfhGVw6RDPYjB1TOypp7h%2BXMAcydQpH01ao8RSK0gf9JaDnbUz7hjddaAPWO4HqvD8sOKpllhe%2F9zZoSK78%2BXTTMkOmUosQ0821XVg6rtPvIyYSXba6Xyp1smr7ACEbUT%2FnTTsPugYiTvd9Qe5qFvDjcddvESdEQD7HJ%2FBS9Tgb3cAkulXKnf33GTRbHFWhZLz3e9j&X-Amz-Signature=f3d32ed22ceb25eda85b0d812d8979d077bba2d4f59dbaf64669472f35157a37&X-Amz-SignedHeaders=host&x-id=GetObject)
