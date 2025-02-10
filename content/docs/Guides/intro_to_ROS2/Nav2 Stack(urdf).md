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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QO4RE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuKJ%2BiaVDzmLkWh3PxCOGC5KPBkMEIrAVjTwIzrMqngIgQgT1XTEsbDaXvMgrwmsSEreM0742kPsC%2BGsyKqLm7H4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnOazv%2FlUXfKiHmdircA5rEAOvIS4cFAR1sIaHJzVifnxhFvUHlNqP2y6ym2FFRyuUHw9d7liADMWIA9w767FC5uYrs1jFH9UVXLKyGnnnaf2yPu23ZqY8NZsOrg%2FMqQfG0U9eyvJ8KffcW53wfWuLExspjHVhH42pSVC4Ng0vXRnhVzuxX34tSI%2Bgh1411lCH47qvGIZln2cHBp%2FyV91c%2BEa31BmWX8B%2FFpeKBKln4HJxX40t2rNEnrIYDsgT0RZ8Y5gAWmAevJ2kjRRgx24ZVFTbpTkNcel1SLTdbhNYNp0D6L3pBGsXDebnCYHtrPXz3RwSqLf3mawk6P0V%2BH634tueeQRVUSqlAssUBwVQTYvqd%2F5hLUT5Gp3MHFc0sSDWKiQ8r0Qgbd9TNasHA%2FiLX%2F8fQjl%2BG%2FzeHAltIYdyzxAa7PrgpwgTmROkKXJvvE5mA6ask%2FMu%2FEmfFUqo2Z97zrISaAnTbHmq%2Fg0T8%2FmRbfDuLbEFhTly981VfVaWl6d%2BxlzRIImmMSV7OsagghmTjuravoOe3%2BKAY5ulNQCaOf7CDjdj7YOZjVGscCzn6hvh92AqDUcJO33AEWDB13Qr2tHOEri2Ki%2FkUsJYXdSTNviT9SAdOmOdPCwjZgV%2FEmPMewLqZhgnEkZPWMN6bpb0GOqUBtzFq06z4OhuDloFIDDGGvUlJk0Ko5Zi2hKnkcltbT7Lqa3r0G26hQbplTcXfEPqgYBR0ZMsJ0gfbG5D%2FG8mfDn6hLTa6RNhzpBXkw29iMdapjnxFa9lfge8pNpdgkt%2F2OBLr0ca7SwxKgovfcExrE6kA203keupZpoZGjWfuhIGJKNoIdu%2FJwuw5onNP6q1vedxa7vYO%2F2179bGStYt%2BnkKiT%2Fh%2B&X-Amz-Signature=bebfa735c00eee2dd281dc69a22ff2aa738db9d743b6973ea2516a7e3dd4cae2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QO4RE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuKJ%2BiaVDzmLkWh3PxCOGC5KPBkMEIrAVjTwIzrMqngIgQgT1XTEsbDaXvMgrwmsSEreM0742kPsC%2BGsyKqLm7H4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnOazv%2FlUXfKiHmdircA5rEAOvIS4cFAR1sIaHJzVifnxhFvUHlNqP2y6ym2FFRyuUHw9d7liADMWIA9w767FC5uYrs1jFH9UVXLKyGnnnaf2yPu23ZqY8NZsOrg%2FMqQfG0U9eyvJ8KffcW53wfWuLExspjHVhH42pSVC4Ng0vXRnhVzuxX34tSI%2Bgh1411lCH47qvGIZln2cHBp%2FyV91c%2BEa31BmWX8B%2FFpeKBKln4HJxX40t2rNEnrIYDsgT0RZ8Y5gAWmAevJ2kjRRgx24ZVFTbpTkNcel1SLTdbhNYNp0D6L3pBGsXDebnCYHtrPXz3RwSqLf3mawk6P0V%2BH634tueeQRVUSqlAssUBwVQTYvqd%2F5hLUT5Gp3MHFc0sSDWKiQ8r0Qgbd9TNasHA%2FiLX%2F8fQjl%2BG%2FzeHAltIYdyzxAa7PrgpwgTmROkKXJvvE5mA6ask%2FMu%2FEmfFUqo2Z97zrISaAnTbHmq%2Fg0T8%2FmRbfDuLbEFhTly981VfVaWl6d%2BxlzRIImmMSV7OsagghmTjuravoOe3%2BKAY5ulNQCaOf7CDjdj7YOZjVGscCzn6hvh92AqDUcJO33AEWDB13Qr2tHOEri2Ki%2FkUsJYXdSTNviT9SAdOmOdPCwjZgV%2FEmPMewLqZhgnEkZPWMN6bpb0GOqUBtzFq06z4OhuDloFIDDGGvUlJk0Ko5Zi2hKnkcltbT7Lqa3r0G26hQbplTcXfEPqgYBR0ZMsJ0gfbG5D%2FG8mfDn6hLTa6RNhzpBXkw29iMdapjnxFa9lfge8pNpdgkt%2F2OBLr0ca7SwxKgovfcExrE6kA203keupZpoZGjWfuhIGJKNoIdu%2FJwuw5onNP6q1vedxa7vYO%2F2179bGStYt%2BnkKiT%2Fh%2B&X-Amz-Signature=8907a399cc9ce5266a2ab764ee4504aeca56cb79454a7d98563a8432153d1303&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QO4RE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuKJ%2BiaVDzmLkWh3PxCOGC5KPBkMEIrAVjTwIzrMqngIgQgT1XTEsbDaXvMgrwmsSEreM0742kPsC%2BGsyKqLm7H4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnOazv%2FlUXfKiHmdircA5rEAOvIS4cFAR1sIaHJzVifnxhFvUHlNqP2y6ym2FFRyuUHw9d7liADMWIA9w767FC5uYrs1jFH9UVXLKyGnnnaf2yPu23ZqY8NZsOrg%2FMqQfG0U9eyvJ8KffcW53wfWuLExspjHVhH42pSVC4Ng0vXRnhVzuxX34tSI%2Bgh1411lCH47qvGIZln2cHBp%2FyV91c%2BEa31BmWX8B%2FFpeKBKln4HJxX40t2rNEnrIYDsgT0RZ8Y5gAWmAevJ2kjRRgx24ZVFTbpTkNcel1SLTdbhNYNp0D6L3pBGsXDebnCYHtrPXz3RwSqLf3mawk6P0V%2BH634tueeQRVUSqlAssUBwVQTYvqd%2F5hLUT5Gp3MHFc0sSDWKiQ8r0Qgbd9TNasHA%2FiLX%2F8fQjl%2BG%2FzeHAltIYdyzxAa7PrgpwgTmROkKXJvvE5mA6ask%2FMu%2FEmfFUqo2Z97zrISaAnTbHmq%2Fg0T8%2FmRbfDuLbEFhTly981VfVaWl6d%2BxlzRIImmMSV7OsagghmTjuravoOe3%2BKAY5ulNQCaOf7CDjdj7YOZjVGscCzn6hvh92AqDUcJO33AEWDB13Qr2tHOEri2Ki%2FkUsJYXdSTNviT9SAdOmOdPCwjZgV%2FEmPMewLqZhgnEkZPWMN6bpb0GOqUBtzFq06z4OhuDloFIDDGGvUlJk0Ko5Zi2hKnkcltbT7Lqa3r0G26hQbplTcXfEPqgYBR0ZMsJ0gfbG5D%2FG8mfDn6hLTa6RNhzpBXkw29iMdapjnxFa9lfge8pNpdgkt%2F2OBLr0ca7SwxKgovfcExrE6kA203keupZpoZGjWfuhIGJKNoIdu%2FJwuw5onNP6q1vedxa7vYO%2F2179bGStYt%2BnkKiT%2Fh%2B&X-Amz-Signature=c9bd00453c06c386ae8a3f9d9bfdc588a0f0296fc27c6baefcd92187d24502d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QO4RE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuKJ%2BiaVDzmLkWh3PxCOGC5KPBkMEIrAVjTwIzrMqngIgQgT1XTEsbDaXvMgrwmsSEreM0742kPsC%2BGsyKqLm7H4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnOazv%2FlUXfKiHmdircA5rEAOvIS4cFAR1sIaHJzVifnxhFvUHlNqP2y6ym2FFRyuUHw9d7liADMWIA9w767FC5uYrs1jFH9UVXLKyGnnnaf2yPu23ZqY8NZsOrg%2FMqQfG0U9eyvJ8KffcW53wfWuLExspjHVhH42pSVC4Ng0vXRnhVzuxX34tSI%2Bgh1411lCH47qvGIZln2cHBp%2FyV91c%2BEa31BmWX8B%2FFpeKBKln4HJxX40t2rNEnrIYDsgT0RZ8Y5gAWmAevJ2kjRRgx24ZVFTbpTkNcel1SLTdbhNYNp0D6L3pBGsXDebnCYHtrPXz3RwSqLf3mawk6P0V%2BH634tueeQRVUSqlAssUBwVQTYvqd%2F5hLUT5Gp3MHFc0sSDWKiQ8r0Qgbd9TNasHA%2FiLX%2F8fQjl%2BG%2FzeHAltIYdyzxAa7PrgpwgTmROkKXJvvE5mA6ask%2FMu%2FEmfFUqo2Z97zrISaAnTbHmq%2Fg0T8%2FmRbfDuLbEFhTly981VfVaWl6d%2BxlzRIImmMSV7OsagghmTjuravoOe3%2BKAY5ulNQCaOf7CDjdj7YOZjVGscCzn6hvh92AqDUcJO33AEWDB13Qr2tHOEri2Ki%2FkUsJYXdSTNviT9SAdOmOdPCwjZgV%2FEmPMewLqZhgnEkZPWMN6bpb0GOqUBtzFq06z4OhuDloFIDDGGvUlJk0Ko5Zi2hKnkcltbT7Lqa3r0G26hQbplTcXfEPqgYBR0ZMsJ0gfbG5D%2FG8mfDn6hLTa6RNhzpBXkw29iMdapjnxFa9lfge8pNpdgkt%2F2OBLr0ca7SwxKgovfcExrE6kA203keupZpoZGjWfuhIGJKNoIdu%2FJwuw5onNP6q1vedxa7vYO%2F2179bGStYt%2BnkKiT%2Fh%2B&X-Amz-Signature=178ed82eb2d0f4138b3ef353fc3ce71f713197d9867390f4f5c9420b5e55456d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QO4RE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuKJ%2BiaVDzmLkWh3PxCOGC5KPBkMEIrAVjTwIzrMqngIgQgT1XTEsbDaXvMgrwmsSEreM0742kPsC%2BGsyKqLm7H4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnOazv%2FlUXfKiHmdircA5rEAOvIS4cFAR1sIaHJzVifnxhFvUHlNqP2y6ym2FFRyuUHw9d7liADMWIA9w767FC5uYrs1jFH9UVXLKyGnnnaf2yPu23ZqY8NZsOrg%2FMqQfG0U9eyvJ8KffcW53wfWuLExspjHVhH42pSVC4Ng0vXRnhVzuxX34tSI%2Bgh1411lCH47qvGIZln2cHBp%2FyV91c%2BEa31BmWX8B%2FFpeKBKln4HJxX40t2rNEnrIYDsgT0RZ8Y5gAWmAevJ2kjRRgx24ZVFTbpTkNcel1SLTdbhNYNp0D6L3pBGsXDebnCYHtrPXz3RwSqLf3mawk6P0V%2BH634tueeQRVUSqlAssUBwVQTYvqd%2F5hLUT5Gp3MHFc0sSDWKiQ8r0Qgbd9TNasHA%2FiLX%2F8fQjl%2BG%2FzeHAltIYdyzxAa7PrgpwgTmROkKXJvvE5mA6ask%2FMu%2FEmfFUqo2Z97zrISaAnTbHmq%2Fg0T8%2FmRbfDuLbEFhTly981VfVaWl6d%2BxlzRIImmMSV7OsagghmTjuravoOe3%2BKAY5ulNQCaOf7CDjdj7YOZjVGscCzn6hvh92AqDUcJO33AEWDB13Qr2tHOEri2Ki%2FkUsJYXdSTNviT9SAdOmOdPCwjZgV%2FEmPMewLqZhgnEkZPWMN6bpb0GOqUBtzFq06z4OhuDloFIDDGGvUlJk0Ko5Zi2hKnkcltbT7Lqa3r0G26hQbplTcXfEPqgYBR0ZMsJ0gfbG5D%2FG8mfDn6hLTa6RNhzpBXkw29iMdapjnxFa9lfge8pNpdgkt%2F2OBLr0ca7SwxKgovfcExrE6kA203keupZpoZGjWfuhIGJKNoIdu%2FJwuw5onNP6q1vedxa7vYO%2F2179bGStYt%2BnkKiT%2Fh%2B&X-Amz-Signature=eb80602eed33abbe66ffddb1007cfc19eb3a937e97f8727d8e964a27bc505bba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QO4RE%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMuKJ%2BiaVDzmLkWh3PxCOGC5KPBkMEIrAVjTwIzrMqngIgQgT1XTEsbDaXvMgrwmsSEreM0742kPsC%2BGsyKqLm7H4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnOazv%2FlUXfKiHmdircA5rEAOvIS4cFAR1sIaHJzVifnxhFvUHlNqP2y6ym2FFRyuUHw9d7liADMWIA9w767FC5uYrs1jFH9UVXLKyGnnnaf2yPu23ZqY8NZsOrg%2FMqQfG0U9eyvJ8KffcW53wfWuLExspjHVhH42pSVC4Ng0vXRnhVzuxX34tSI%2Bgh1411lCH47qvGIZln2cHBp%2FyV91c%2BEa31BmWX8B%2FFpeKBKln4HJxX40t2rNEnrIYDsgT0RZ8Y5gAWmAevJ2kjRRgx24ZVFTbpTkNcel1SLTdbhNYNp0D6L3pBGsXDebnCYHtrPXz3RwSqLf3mawk6P0V%2BH634tueeQRVUSqlAssUBwVQTYvqd%2F5hLUT5Gp3MHFc0sSDWKiQ8r0Qgbd9TNasHA%2FiLX%2F8fQjl%2BG%2FzeHAltIYdyzxAa7PrgpwgTmROkKXJvvE5mA6ask%2FMu%2FEmfFUqo2Z97zrISaAnTbHmq%2Fg0T8%2FmRbfDuLbEFhTly981VfVaWl6d%2BxlzRIImmMSV7OsagghmTjuravoOe3%2BKAY5ulNQCaOf7CDjdj7YOZjVGscCzn6hvh92AqDUcJO33AEWDB13Qr2tHOEri2Ki%2FkUsJYXdSTNviT9SAdOmOdPCwjZgV%2FEmPMewLqZhgnEkZPWMN6bpb0GOqUBtzFq06z4OhuDloFIDDGGvUlJk0Ko5Zi2hKnkcltbT7Lqa3r0G26hQbplTcXfEPqgYBR0ZMsJ0gfbG5D%2FG8mfDn6hLTa6RNhzpBXkw29iMdapjnxFa9lfge8pNpdgkt%2F2OBLr0ca7SwxKgovfcExrE6kA203keupZpoZGjWfuhIGJKNoIdu%2FJwuw5onNP6q1vedxa7vYO%2F2179bGStYt%2BnkKiT%2Fh%2B&X-Amz-Signature=ef401db315d3ea63f2f6ac7da1e606865d45739d3304e0175e5dd6f67f20f242&X-Amz-SignedHeaders=host&x-id=GetObject)
