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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T352LJQU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcLUDhD%2ByIiGX3jTwyJoIHVjpxn4E4hMmdM7Ouen48rAiEA3b%2BkzDVVH5Ua5yNePnmD5W6X1k71IuAIMio6ZWbplA4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGXW%2BHshwHeC13q7sircA8dOeKKAHrWl6zXTmt40Z9HiEU0FR1kPo%2BzABgyvMXCMwH6kOIj1tZ8UgHQitgteuXIEGDBK1%2BpD4l6m9NpKX9KGGYzD7s9vtSFjAO7fYkF0ApoRwdWlFE9ZCCsXQwwpcGLH1muwef20cAXyfD5gPQAh8K%2FkZoM5j%2F0gTuI3cQcYUfCfImdSeMNHw7MoCYWeV8Ew54HJIaQEUu7f1ziSuhMBlalJyHA2AE8vpF4hgUmfKV%2BaVDnu%2BMetsYkdz5jBnMyUOWDx1fdbxcrzzKbSptTf6zKRMf7ZXer4XZN2Waj1TvrEDQf1Nzy5Uv4FWu9IUze09pyn5dWsz4Wn9EBuu5nFUENMthWbqgG%2BHwUb979CO0RHNRRsX6tzBTitIfpfYGUVuAgZcljZp%2BAi5tbYeg3Ks9DHcFZx2JNdEGVwSW81HY0%2BjzFtOt%2B1fmIujM9gVQYmROg4qJTkFYBzc8fzDOOxYYUYcWRhGNukw%2BpuLLmMEamTt%2F03jUAH0Hs08XtPLr75KMzhPrRxwRgTKuE2b1rXX4FvqNOZnkh5VnpXNuJ3f3Wkse376mDk%2BLTP8OI8S97z3K%2BMX4lwp%2BBAogDGAzJICFDoq479R2J%2F%2FQLyM%2BZDVQIwtqz6KKNPueeuMP%2BV9MIGOqUB1hFmJtCRLfgLDNCuIDK9Yrl257AIyNdXHmDkbQGKt4dXjPf4BcdwSDG5EwJpO7qktKXLQiyJpbrhYBgxPLjzU%2By8gzAm18ccQ0xgD%2B4CBV2Zu7L1Yi5MWV%2BnPo5dN8H5npA8%2BaDSN%2FQPb4XrhWSyx8g5RjhBh1ztM30dK1HqHpZ7bJaPpcZoeSzlAnX1o2SLFZco25ajmg4DdQ7t3m4BD4hMUYk2&X-Amz-Signature=90705bd47fb2ab075d48f1f3a4e71ac595e8221ce5e66bcbc02eb96d45d3f462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T352LJQU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcLUDhD%2ByIiGX3jTwyJoIHVjpxn4E4hMmdM7Ouen48rAiEA3b%2BkzDVVH5Ua5yNePnmD5W6X1k71IuAIMio6ZWbplA4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGXW%2BHshwHeC13q7sircA8dOeKKAHrWl6zXTmt40Z9HiEU0FR1kPo%2BzABgyvMXCMwH6kOIj1tZ8UgHQitgteuXIEGDBK1%2BpD4l6m9NpKX9KGGYzD7s9vtSFjAO7fYkF0ApoRwdWlFE9ZCCsXQwwpcGLH1muwef20cAXyfD5gPQAh8K%2FkZoM5j%2F0gTuI3cQcYUfCfImdSeMNHw7MoCYWeV8Ew54HJIaQEUu7f1ziSuhMBlalJyHA2AE8vpF4hgUmfKV%2BaVDnu%2BMetsYkdz5jBnMyUOWDx1fdbxcrzzKbSptTf6zKRMf7ZXer4XZN2Waj1TvrEDQf1Nzy5Uv4FWu9IUze09pyn5dWsz4Wn9EBuu5nFUENMthWbqgG%2BHwUb979CO0RHNRRsX6tzBTitIfpfYGUVuAgZcljZp%2BAi5tbYeg3Ks9DHcFZx2JNdEGVwSW81HY0%2BjzFtOt%2B1fmIujM9gVQYmROg4qJTkFYBzc8fzDOOxYYUYcWRhGNukw%2BpuLLmMEamTt%2F03jUAH0Hs08XtPLr75KMzhPrRxwRgTKuE2b1rXX4FvqNOZnkh5VnpXNuJ3f3Wkse376mDk%2BLTP8OI8S97z3K%2BMX4lwp%2BBAogDGAzJICFDoq479R2J%2F%2FQLyM%2BZDVQIwtqz6KKNPueeuMP%2BV9MIGOqUB1hFmJtCRLfgLDNCuIDK9Yrl257AIyNdXHmDkbQGKt4dXjPf4BcdwSDG5EwJpO7qktKXLQiyJpbrhYBgxPLjzU%2By8gzAm18ccQ0xgD%2B4CBV2Zu7L1Yi5MWV%2BnPo5dN8H5npA8%2BaDSN%2FQPb4XrhWSyx8g5RjhBh1ztM30dK1HqHpZ7bJaPpcZoeSzlAnX1o2SLFZco25ajmg4DdQ7t3m4BD4hMUYk2&X-Amz-Signature=709cdbbb350b2a3fcf9da7800d91ae43a8433960c09c14fa45d4867a09f32f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T352LJQU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcLUDhD%2ByIiGX3jTwyJoIHVjpxn4E4hMmdM7Ouen48rAiEA3b%2BkzDVVH5Ua5yNePnmD5W6X1k71IuAIMio6ZWbplA4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGXW%2BHshwHeC13q7sircA8dOeKKAHrWl6zXTmt40Z9HiEU0FR1kPo%2BzABgyvMXCMwH6kOIj1tZ8UgHQitgteuXIEGDBK1%2BpD4l6m9NpKX9KGGYzD7s9vtSFjAO7fYkF0ApoRwdWlFE9ZCCsXQwwpcGLH1muwef20cAXyfD5gPQAh8K%2FkZoM5j%2F0gTuI3cQcYUfCfImdSeMNHw7MoCYWeV8Ew54HJIaQEUu7f1ziSuhMBlalJyHA2AE8vpF4hgUmfKV%2BaVDnu%2BMetsYkdz5jBnMyUOWDx1fdbxcrzzKbSptTf6zKRMf7ZXer4XZN2Waj1TvrEDQf1Nzy5Uv4FWu9IUze09pyn5dWsz4Wn9EBuu5nFUENMthWbqgG%2BHwUb979CO0RHNRRsX6tzBTitIfpfYGUVuAgZcljZp%2BAi5tbYeg3Ks9DHcFZx2JNdEGVwSW81HY0%2BjzFtOt%2B1fmIujM9gVQYmROg4qJTkFYBzc8fzDOOxYYUYcWRhGNukw%2BpuLLmMEamTt%2F03jUAH0Hs08XtPLr75KMzhPrRxwRgTKuE2b1rXX4FvqNOZnkh5VnpXNuJ3f3Wkse376mDk%2BLTP8OI8S97z3K%2BMX4lwp%2BBAogDGAzJICFDoq479R2J%2F%2FQLyM%2BZDVQIwtqz6KKNPueeuMP%2BV9MIGOqUB1hFmJtCRLfgLDNCuIDK9Yrl257AIyNdXHmDkbQGKt4dXjPf4BcdwSDG5EwJpO7qktKXLQiyJpbrhYBgxPLjzU%2By8gzAm18ccQ0xgD%2B4CBV2Zu7L1Yi5MWV%2BnPo5dN8H5npA8%2BaDSN%2FQPb4XrhWSyx8g5RjhBh1ztM30dK1HqHpZ7bJaPpcZoeSzlAnX1o2SLFZco25ajmg4DdQ7t3m4BD4hMUYk2&X-Amz-Signature=40bbd6f4a1341e6310efd867d6a51932e9f6a87114da579fc9098519272daf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T352LJQU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcLUDhD%2ByIiGX3jTwyJoIHVjpxn4E4hMmdM7Ouen48rAiEA3b%2BkzDVVH5Ua5yNePnmD5W6X1k71IuAIMio6ZWbplA4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGXW%2BHshwHeC13q7sircA8dOeKKAHrWl6zXTmt40Z9HiEU0FR1kPo%2BzABgyvMXCMwH6kOIj1tZ8UgHQitgteuXIEGDBK1%2BpD4l6m9NpKX9KGGYzD7s9vtSFjAO7fYkF0ApoRwdWlFE9ZCCsXQwwpcGLH1muwef20cAXyfD5gPQAh8K%2FkZoM5j%2F0gTuI3cQcYUfCfImdSeMNHw7MoCYWeV8Ew54HJIaQEUu7f1ziSuhMBlalJyHA2AE8vpF4hgUmfKV%2BaVDnu%2BMetsYkdz5jBnMyUOWDx1fdbxcrzzKbSptTf6zKRMf7ZXer4XZN2Waj1TvrEDQf1Nzy5Uv4FWu9IUze09pyn5dWsz4Wn9EBuu5nFUENMthWbqgG%2BHwUb979CO0RHNRRsX6tzBTitIfpfYGUVuAgZcljZp%2BAi5tbYeg3Ks9DHcFZx2JNdEGVwSW81HY0%2BjzFtOt%2B1fmIujM9gVQYmROg4qJTkFYBzc8fzDOOxYYUYcWRhGNukw%2BpuLLmMEamTt%2F03jUAH0Hs08XtPLr75KMzhPrRxwRgTKuE2b1rXX4FvqNOZnkh5VnpXNuJ3f3Wkse376mDk%2BLTP8OI8S97z3K%2BMX4lwp%2BBAogDGAzJICFDoq479R2J%2F%2FQLyM%2BZDVQIwtqz6KKNPueeuMP%2BV9MIGOqUB1hFmJtCRLfgLDNCuIDK9Yrl257AIyNdXHmDkbQGKt4dXjPf4BcdwSDG5EwJpO7qktKXLQiyJpbrhYBgxPLjzU%2By8gzAm18ccQ0xgD%2B4CBV2Zu7L1Yi5MWV%2BnPo5dN8H5npA8%2BaDSN%2FQPb4XrhWSyx8g5RjhBh1ztM30dK1HqHpZ7bJaPpcZoeSzlAnX1o2SLFZco25ajmg4DdQ7t3m4BD4hMUYk2&X-Amz-Signature=60458b8556e70ff187a19090ac0cefb97effe3569e465b0ffe080b15d5ecd11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T352LJQU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcLUDhD%2ByIiGX3jTwyJoIHVjpxn4E4hMmdM7Ouen48rAiEA3b%2BkzDVVH5Ua5yNePnmD5W6X1k71IuAIMio6ZWbplA4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGXW%2BHshwHeC13q7sircA8dOeKKAHrWl6zXTmt40Z9HiEU0FR1kPo%2BzABgyvMXCMwH6kOIj1tZ8UgHQitgteuXIEGDBK1%2BpD4l6m9NpKX9KGGYzD7s9vtSFjAO7fYkF0ApoRwdWlFE9ZCCsXQwwpcGLH1muwef20cAXyfD5gPQAh8K%2FkZoM5j%2F0gTuI3cQcYUfCfImdSeMNHw7MoCYWeV8Ew54HJIaQEUu7f1ziSuhMBlalJyHA2AE8vpF4hgUmfKV%2BaVDnu%2BMetsYkdz5jBnMyUOWDx1fdbxcrzzKbSptTf6zKRMf7ZXer4XZN2Waj1TvrEDQf1Nzy5Uv4FWu9IUze09pyn5dWsz4Wn9EBuu5nFUENMthWbqgG%2BHwUb979CO0RHNRRsX6tzBTitIfpfYGUVuAgZcljZp%2BAi5tbYeg3Ks9DHcFZx2JNdEGVwSW81HY0%2BjzFtOt%2B1fmIujM9gVQYmROg4qJTkFYBzc8fzDOOxYYUYcWRhGNukw%2BpuLLmMEamTt%2F03jUAH0Hs08XtPLr75KMzhPrRxwRgTKuE2b1rXX4FvqNOZnkh5VnpXNuJ3f3Wkse376mDk%2BLTP8OI8S97z3K%2BMX4lwp%2BBAogDGAzJICFDoq479R2J%2F%2FQLyM%2BZDVQIwtqz6KKNPueeuMP%2BV9MIGOqUB1hFmJtCRLfgLDNCuIDK9Yrl257AIyNdXHmDkbQGKt4dXjPf4BcdwSDG5EwJpO7qktKXLQiyJpbrhYBgxPLjzU%2By8gzAm18ccQ0xgD%2B4CBV2Zu7L1Yi5MWV%2BnPo5dN8H5npA8%2BaDSN%2FQPb4XrhWSyx8g5RjhBh1ztM30dK1HqHpZ7bJaPpcZoeSzlAnX1o2SLFZco25ajmg4DdQ7t3m4BD4hMUYk2&X-Amz-Signature=10a8fce638a09e1a96cf8e343c5116c6ff57112374fc06c30e45a1ccd7f1b077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T352LJQU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICcLUDhD%2ByIiGX3jTwyJoIHVjpxn4E4hMmdM7Ouen48rAiEA3b%2BkzDVVH5Ua5yNePnmD5W6X1k71IuAIMio6ZWbplA4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGXW%2BHshwHeC13q7sircA8dOeKKAHrWl6zXTmt40Z9HiEU0FR1kPo%2BzABgyvMXCMwH6kOIj1tZ8UgHQitgteuXIEGDBK1%2BpD4l6m9NpKX9KGGYzD7s9vtSFjAO7fYkF0ApoRwdWlFE9ZCCsXQwwpcGLH1muwef20cAXyfD5gPQAh8K%2FkZoM5j%2F0gTuI3cQcYUfCfImdSeMNHw7MoCYWeV8Ew54HJIaQEUu7f1ziSuhMBlalJyHA2AE8vpF4hgUmfKV%2BaVDnu%2BMetsYkdz5jBnMyUOWDx1fdbxcrzzKbSptTf6zKRMf7ZXer4XZN2Waj1TvrEDQf1Nzy5Uv4FWu9IUze09pyn5dWsz4Wn9EBuu5nFUENMthWbqgG%2BHwUb979CO0RHNRRsX6tzBTitIfpfYGUVuAgZcljZp%2BAi5tbYeg3Ks9DHcFZx2JNdEGVwSW81HY0%2BjzFtOt%2B1fmIujM9gVQYmROg4qJTkFYBzc8fzDOOxYYUYcWRhGNukw%2BpuLLmMEamTt%2F03jUAH0Hs08XtPLr75KMzhPrRxwRgTKuE2b1rXX4FvqNOZnkh5VnpXNuJ3f3Wkse376mDk%2BLTP8OI8S97z3K%2BMX4lwp%2BBAogDGAzJICFDoq479R2J%2F%2FQLyM%2BZDVQIwtqz6KKNPueeuMP%2BV9MIGOqUB1hFmJtCRLfgLDNCuIDK9Yrl257AIyNdXHmDkbQGKt4dXjPf4BcdwSDG5EwJpO7qktKXLQiyJpbrhYBgxPLjzU%2By8gzAm18ccQ0xgD%2B4CBV2Zu7L1Yi5MWV%2BnPo5dN8H5npA8%2BaDSN%2FQPb4XrhWSyx8g5RjhBh1ztM30dK1HqHpZ7bJaPpcZoeSzlAnX1o2SLFZco25ajmg4DdQ7t3m4BD4hMUYk2&X-Amz-Signature=22dc32f9153ade98f390b5fac72d1720d7d0e35afe0353777b6a2f17452fe9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
