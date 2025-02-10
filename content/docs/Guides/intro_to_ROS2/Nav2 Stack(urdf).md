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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6LM3WI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYCxXZN7KkcuY%2F2J5Y%2B2YO64DoEPLjHJa6Ou%2BYWqSv6AIgD8h3LkiPFbtFsCZ4xd%2BPB0BMKvL9LbFcbx2ruM5E8gkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8huL18stwjrvMJircA%2BMkCKmsqORwjq53MoGDsjchO1V8bGSVgjelyPaOjJlJX91oN0taYksbnw%2Ft3%2F61yLbHGJ4qMzzu9GyRxTM6qCtsxZCQfKUdHxlqJsRPhj3%2BBEG93F12E95VQrDE5hSJ6Nvf837GqjsAkzypljxOx5Bp%2BuT%2FWkTXmX2bdHVdHdCwKC56lUmjI1xaQ2S3qSds4eHwuGlxFn3Jq23bsuXIQ%2FHJ2jXOPoMAJ%2BqzVQnVl2pXSFLJTsVnZe0rk0okYxQCihubSVNJC5rzWwh3%2BCjLjlXDKB4Qc7qor4aslAwDp5thE9RkFIfiDEMWizagUAnpySR8NTfKJmdAV2pZqYHJNnCQB4wJF80HNtryuIpgR8O6gmj3AkLLjyYEPKA1U5PRCDdtk%2F%2FVRfdlVhVoOJH5YU15awsVHfgLcjR%2BIR9XKrp8VhPZAXSBu7B7NOgZjoU8wjWVzltQ4E3FBfGFEP%2FEQfgalS3odz8LAtBdo0PMi5%2FSI1K5%2BVRiSgivPdSKiDOJD1BIi4oDfHjFyV%2BwB5XRzyGrDNZOAqFVny%2BKseqWSRO9XhLIuOhOGElNp4ByojROPbTTs8XHGLY9nVLJES2OVk9kZct%2FSDP%2Bz1ICYaU%2BXTIxj5m4l6%2FL72eA9SxPMNT5pb0GOqUBeIZi%2BBPFAIMglZ%2FS3vUuZqWsvwtjVXrQDly9w86YUAMDx7pTCMruXPh0EY6A177hZBXLVwZqGjX%2FeaN3H4yBOJ%2BblTR75gM1iezqo6NPImr2ig%2FUn%2FLniOYdFlQLbEAM5ZRzUPborUrSEId7mI6gqRvwTqmD887Fuor2h9qXcsRaKGtJrSurUUTqQPc5TpC9kzn1XxCyFblruWpHFyxD0jdMxSud&X-Amz-Signature=15832ce8c8c3549e2dbd695e36946ccccd4ea138b72ea5ef2c0fd15ae6a3a1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6LM3WI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYCxXZN7KkcuY%2F2J5Y%2B2YO64DoEPLjHJa6Ou%2BYWqSv6AIgD8h3LkiPFbtFsCZ4xd%2BPB0BMKvL9LbFcbx2ruM5E8gkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8huL18stwjrvMJircA%2BMkCKmsqORwjq53MoGDsjchO1V8bGSVgjelyPaOjJlJX91oN0taYksbnw%2Ft3%2F61yLbHGJ4qMzzu9GyRxTM6qCtsxZCQfKUdHxlqJsRPhj3%2BBEG93F12E95VQrDE5hSJ6Nvf837GqjsAkzypljxOx5Bp%2BuT%2FWkTXmX2bdHVdHdCwKC56lUmjI1xaQ2S3qSds4eHwuGlxFn3Jq23bsuXIQ%2FHJ2jXOPoMAJ%2BqzVQnVl2pXSFLJTsVnZe0rk0okYxQCihubSVNJC5rzWwh3%2BCjLjlXDKB4Qc7qor4aslAwDp5thE9RkFIfiDEMWizagUAnpySR8NTfKJmdAV2pZqYHJNnCQB4wJF80HNtryuIpgR8O6gmj3AkLLjyYEPKA1U5PRCDdtk%2F%2FVRfdlVhVoOJH5YU15awsVHfgLcjR%2BIR9XKrp8VhPZAXSBu7B7NOgZjoU8wjWVzltQ4E3FBfGFEP%2FEQfgalS3odz8LAtBdo0PMi5%2FSI1K5%2BVRiSgivPdSKiDOJD1BIi4oDfHjFyV%2BwB5XRzyGrDNZOAqFVny%2BKseqWSRO9XhLIuOhOGElNp4ByojROPbTTs8XHGLY9nVLJES2OVk9kZct%2FSDP%2Bz1ICYaU%2BXTIxj5m4l6%2FL72eA9SxPMNT5pb0GOqUBeIZi%2BBPFAIMglZ%2FS3vUuZqWsvwtjVXrQDly9w86YUAMDx7pTCMruXPh0EY6A177hZBXLVwZqGjX%2FeaN3H4yBOJ%2BblTR75gM1iezqo6NPImr2ig%2FUn%2FLniOYdFlQLbEAM5ZRzUPborUrSEId7mI6gqRvwTqmD887Fuor2h9qXcsRaKGtJrSurUUTqQPc5TpC9kzn1XxCyFblruWpHFyxD0jdMxSud&X-Amz-Signature=b63488c98ec1d1967e038840ab62fbf80602de82e5d016252e7c203437d4980c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6LM3WI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYCxXZN7KkcuY%2F2J5Y%2B2YO64DoEPLjHJa6Ou%2BYWqSv6AIgD8h3LkiPFbtFsCZ4xd%2BPB0BMKvL9LbFcbx2ruM5E8gkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8huL18stwjrvMJircA%2BMkCKmsqORwjq53MoGDsjchO1V8bGSVgjelyPaOjJlJX91oN0taYksbnw%2Ft3%2F61yLbHGJ4qMzzu9GyRxTM6qCtsxZCQfKUdHxlqJsRPhj3%2BBEG93F12E95VQrDE5hSJ6Nvf837GqjsAkzypljxOx5Bp%2BuT%2FWkTXmX2bdHVdHdCwKC56lUmjI1xaQ2S3qSds4eHwuGlxFn3Jq23bsuXIQ%2FHJ2jXOPoMAJ%2BqzVQnVl2pXSFLJTsVnZe0rk0okYxQCihubSVNJC5rzWwh3%2BCjLjlXDKB4Qc7qor4aslAwDp5thE9RkFIfiDEMWizagUAnpySR8NTfKJmdAV2pZqYHJNnCQB4wJF80HNtryuIpgR8O6gmj3AkLLjyYEPKA1U5PRCDdtk%2F%2FVRfdlVhVoOJH5YU15awsVHfgLcjR%2BIR9XKrp8VhPZAXSBu7B7NOgZjoU8wjWVzltQ4E3FBfGFEP%2FEQfgalS3odz8LAtBdo0PMi5%2FSI1K5%2BVRiSgivPdSKiDOJD1BIi4oDfHjFyV%2BwB5XRzyGrDNZOAqFVny%2BKseqWSRO9XhLIuOhOGElNp4ByojROPbTTs8XHGLY9nVLJES2OVk9kZct%2FSDP%2Bz1ICYaU%2BXTIxj5m4l6%2FL72eA9SxPMNT5pb0GOqUBeIZi%2BBPFAIMglZ%2FS3vUuZqWsvwtjVXrQDly9w86YUAMDx7pTCMruXPh0EY6A177hZBXLVwZqGjX%2FeaN3H4yBOJ%2BblTR75gM1iezqo6NPImr2ig%2FUn%2FLniOYdFlQLbEAM5ZRzUPborUrSEId7mI6gqRvwTqmD887Fuor2h9qXcsRaKGtJrSurUUTqQPc5TpC9kzn1XxCyFblruWpHFyxD0jdMxSud&X-Amz-Signature=f12c32d7bccfc5bcbaf49ccecf4016ccac9a9f46dde3c42814ab2afa29125950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6LM3WI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYCxXZN7KkcuY%2F2J5Y%2B2YO64DoEPLjHJa6Ou%2BYWqSv6AIgD8h3LkiPFbtFsCZ4xd%2BPB0BMKvL9LbFcbx2ruM5E8gkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8huL18stwjrvMJircA%2BMkCKmsqORwjq53MoGDsjchO1V8bGSVgjelyPaOjJlJX91oN0taYksbnw%2Ft3%2F61yLbHGJ4qMzzu9GyRxTM6qCtsxZCQfKUdHxlqJsRPhj3%2BBEG93F12E95VQrDE5hSJ6Nvf837GqjsAkzypljxOx5Bp%2BuT%2FWkTXmX2bdHVdHdCwKC56lUmjI1xaQ2S3qSds4eHwuGlxFn3Jq23bsuXIQ%2FHJ2jXOPoMAJ%2BqzVQnVl2pXSFLJTsVnZe0rk0okYxQCihubSVNJC5rzWwh3%2BCjLjlXDKB4Qc7qor4aslAwDp5thE9RkFIfiDEMWizagUAnpySR8NTfKJmdAV2pZqYHJNnCQB4wJF80HNtryuIpgR8O6gmj3AkLLjyYEPKA1U5PRCDdtk%2F%2FVRfdlVhVoOJH5YU15awsVHfgLcjR%2BIR9XKrp8VhPZAXSBu7B7NOgZjoU8wjWVzltQ4E3FBfGFEP%2FEQfgalS3odz8LAtBdo0PMi5%2FSI1K5%2BVRiSgivPdSKiDOJD1BIi4oDfHjFyV%2BwB5XRzyGrDNZOAqFVny%2BKseqWSRO9XhLIuOhOGElNp4ByojROPbTTs8XHGLY9nVLJES2OVk9kZct%2FSDP%2Bz1ICYaU%2BXTIxj5m4l6%2FL72eA9SxPMNT5pb0GOqUBeIZi%2BBPFAIMglZ%2FS3vUuZqWsvwtjVXrQDly9w86YUAMDx7pTCMruXPh0EY6A177hZBXLVwZqGjX%2FeaN3H4yBOJ%2BblTR75gM1iezqo6NPImr2ig%2FUn%2FLniOYdFlQLbEAM5ZRzUPborUrSEId7mI6gqRvwTqmD887Fuor2h9qXcsRaKGtJrSurUUTqQPc5TpC9kzn1XxCyFblruWpHFyxD0jdMxSud&X-Amz-Signature=f6eee4f64d2eb47c7094d31171851244dbbe1446027a3060db2dfbf76a7b99a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6LM3WI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYCxXZN7KkcuY%2F2J5Y%2B2YO64DoEPLjHJa6Ou%2BYWqSv6AIgD8h3LkiPFbtFsCZ4xd%2BPB0BMKvL9LbFcbx2ruM5E8gkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8huL18stwjrvMJircA%2BMkCKmsqORwjq53MoGDsjchO1V8bGSVgjelyPaOjJlJX91oN0taYksbnw%2Ft3%2F61yLbHGJ4qMzzu9GyRxTM6qCtsxZCQfKUdHxlqJsRPhj3%2BBEG93F12E95VQrDE5hSJ6Nvf837GqjsAkzypljxOx5Bp%2BuT%2FWkTXmX2bdHVdHdCwKC56lUmjI1xaQ2S3qSds4eHwuGlxFn3Jq23bsuXIQ%2FHJ2jXOPoMAJ%2BqzVQnVl2pXSFLJTsVnZe0rk0okYxQCihubSVNJC5rzWwh3%2BCjLjlXDKB4Qc7qor4aslAwDp5thE9RkFIfiDEMWizagUAnpySR8NTfKJmdAV2pZqYHJNnCQB4wJF80HNtryuIpgR8O6gmj3AkLLjyYEPKA1U5PRCDdtk%2F%2FVRfdlVhVoOJH5YU15awsVHfgLcjR%2BIR9XKrp8VhPZAXSBu7B7NOgZjoU8wjWVzltQ4E3FBfGFEP%2FEQfgalS3odz8LAtBdo0PMi5%2FSI1K5%2BVRiSgivPdSKiDOJD1BIi4oDfHjFyV%2BwB5XRzyGrDNZOAqFVny%2BKseqWSRO9XhLIuOhOGElNp4ByojROPbTTs8XHGLY9nVLJES2OVk9kZct%2FSDP%2Bz1ICYaU%2BXTIxj5m4l6%2FL72eA9SxPMNT5pb0GOqUBeIZi%2BBPFAIMglZ%2FS3vUuZqWsvwtjVXrQDly9w86YUAMDx7pTCMruXPh0EY6A177hZBXLVwZqGjX%2FeaN3H4yBOJ%2BblTR75gM1iezqo6NPImr2ig%2FUn%2FLniOYdFlQLbEAM5ZRzUPborUrSEId7mI6gqRvwTqmD887Fuor2h9qXcsRaKGtJrSurUUTqQPc5TpC9kzn1XxCyFblruWpHFyxD0jdMxSud&X-Amz-Signature=0a34e1b8615dd9a6430280a0da9186cb1f63ce250a1474e1e1b31b713d09bf97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6LM3WI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYCxXZN7KkcuY%2F2J5Y%2B2YO64DoEPLjHJa6Ou%2BYWqSv6AIgD8h3LkiPFbtFsCZ4xd%2BPB0BMKvL9LbFcbx2ruM5E8gkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8huL18stwjrvMJircA%2BMkCKmsqORwjq53MoGDsjchO1V8bGSVgjelyPaOjJlJX91oN0taYksbnw%2Ft3%2F61yLbHGJ4qMzzu9GyRxTM6qCtsxZCQfKUdHxlqJsRPhj3%2BBEG93F12E95VQrDE5hSJ6Nvf837GqjsAkzypljxOx5Bp%2BuT%2FWkTXmX2bdHVdHdCwKC56lUmjI1xaQ2S3qSds4eHwuGlxFn3Jq23bsuXIQ%2FHJ2jXOPoMAJ%2BqzVQnVl2pXSFLJTsVnZe0rk0okYxQCihubSVNJC5rzWwh3%2BCjLjlXDKB4Qc7qor4aslAwDp5thE9RkFIfiDEMWizagUAnpySR8NTfKJmdAV2pZqYHJNnCQB4wJF80HNtryuIpgR8O6gmj3AkLLjyYEPKA1U5PRCDdtk%2F%2FVRfdlVhVoOJH5YU15awsVHfgLcjR%2BIR9XKrp8VhPZAXSBu7B7NOgZjoU8wjWVzltQ4E3FBfGFEP%2FEQfgalS3odz8LAtBdo0PMi5%2FSI1K5%2BVRiSgivPdSKiDOJD1BIi4oDfHjFyV%2BwB5XRzyGrDNZOAqFVny%2BKseqWSRO9XhLIuOhOGElNp4ByojROPbTTs8XHGLY9nVLJES2OVk9kZct%2FSDP%2Bz1ICYaU%2BXTIxj5m4l6%2FL72eA9SxPMNT5pb0GOqUBeIZi%2BBPFAIMglZ%2FS3vUuZqWsvwtjVXrQDly9w86YUAMDx7pTCMruXPh0EY6A177hZBXLVwZqGjX%2FeaN3H4yBOJ%2BblTR75gM1iezqo6NPImr2ig%2FUn%2FLniOYdFlQLbEAM5ZRzUPborUrSEId7mI6gqRvwTqmD887Fuor2h9qXcsRaKGtJrSurUUTqQPc5TpC9kzn1XxCyFblruWpHFyxD0jdMxSud&X-Amz-Signature=0a9a0f9c31e21680de1ede55b9a91d24eb40c45d9588b573a702fc41cb03b46b&X-Amz-SignedHeaders=host&x-id=GetObject)
