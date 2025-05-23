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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5OCHFU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE7I5KC1MYh9XZP62e6L2k3FrQ7PocKRorhtrHykKDkPAiBLw0By1kVG8Fa8arMyuEmLL1xgf%2BnSnW6XUs%2F0FuI%2FrSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg2gakBxI%2BPZL0lpKtwDnitKVYeF0jAeRqbYrEpZLVO89NVH5rn136tnOPldmJ1z3kl9gf1x9YZOSX8nQDD%2ByG55Qw8qD0Uxr9Gh56c6TUDYcclXpr6LftfcKUcjO2HlNzcZ6VNCIUvnD%2FUPC0Uqkx6qcgzDcXDqVUm3Ct%2BQTyApsc4l9mVSPsva%2Bp7DgziujQzpkj%2FSsQeTkemICCONPcPUblL4ClefDVAVdwqsKZz883DyEiVWCXQpeSci4OmQcdIbgQa07w%2FHATIjqTdudwtgLjhC%2Fv35hmQ9ZAlyrdsqv%2B%2Bjw%2FI%2BKJvL1TwXlruVyiUl4ulyAa%2F7S1KYea77J8G8n9y9StUdQu8sL%2B00MSwDmq7x%2FtaP1xDPtDgCnmnfE9BBBR5IZys6Vu75S739P8UYBnX%2FoVIqATlsbkFCzyM0ilJ%2ByruA2qwe9sNz6kTH%2BYZUTBa5jIKN2p3QR6zMnuzRALJRmuAso9Up%2FjD5lttqE%2FDWiEqRkBROMuQuzk975EAbBqGflVxzYXMDnwCOM8TFTkzGopSTHTUca%2BPvri55KJxog0w2MmrWo0wZOoqJ%2FuAf5dyPx08CWtJFhkcY1tR%2BwpXP1wlNYAcbSGuNkKl9DqA%2F2NJORT1xM7nB8xmJgu7dGs4ZBmxxGjcw4YzBwQY6pgH6%2BpSzctsKaRNuOxsEj18FydwALiiKPrpvAXrSsZoJLw4ZcNOoRGKj4io3uCoeMDSDrd9KppXQRq%2B7QKsZNwnQMnm7PWV3bjIfLpNK1hqoG7poehzA3QlKQdQv72nm3Q1FyjpwNVaUh%2FjrRSWe4g5DP%2FD1nGXvoOuywKFMqwZBJlYoHVRs9VHP2%2BngJVZGer93f03MFrz%2By7N7V%2BF2sbwP0WZmO67k&X-Amz-Signature=09c62bb0214107328ee8b8ec56185617ee2faa6bfc8a917284c29c6635c92841&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5OCHFU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE7I5KC1MYh9XZP62e6L2k3FrQ7PocKRorhtrHykKDkPAiBLw0By1kVG8Fa8arMyuEmLL1xgf%2BnSnW6XUs%2F0FuI%2FrSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg2gakBxI%2BPZL0lpKtwDnitKVYeF0jAeRqbYrEpZLVO89NVH5rn136tnOPldmJ1z3kl9gf1x9YZOSX8nQDD%2ByG55Qw8qD0Uxr9Gh56c6TUDYcclXpr6LftfcKUcjO2HlNzcZ6VNCIUvnD%2FUPC0Uqkx6qcgzDcXDqVUm3Ct%2BQTyApsc4l9mVSPsva%2Bp7DgziujQzpkj%2FSsQeTkemICCONPcPUblL4ClefDVAVdwqsKZz883DyEiVWCXQpeSci4OmQcdIbgQa07w%2FHATIjqTdudwtgLjhC%2Fv35hmQ9ZAlyrdsqv%2B%2Bjw%2FI%2BKJvL1TwXlruVyiUl4ulyAa%2F7S1KYea77J8G8n9y9StUdQu8sL%2B00MSwDmq7x%2FtaP1xDPtDgCnmnfE9BBBR5IZys6Vu75S739P8UYBnX%2FoVIqATlsbkFCzyM0ilJ%2ByruA2qwe9sNz6kTH%2BYZUTBa5jIKN2p3QR6zMnuzRALJRmuAso9Up%2FjD5lttqE%2FDWiEqRkBROMuQuzk975EAbBqGflVxzYXMDnwCOM8TFTkzGopSTHTUca%2BPvri55KJxog0w2MmrWo0wZOoqJ%2FuAf5dyPx08CWtJFhkcY1tR%2BwpXP1wlNYAcbSGuNkKl9DqA%2F2NJORT1xM7nB8xmJgu7dGs4ZBmxxGjcw4YzBwQY6pgH6%2BpSzctsKaRNuOxsEj18FydwALiiKPrpvAXrSsZoJLw4ZcNOoRGKj4io3uCoeMDSDrd9KppXQRq%2B7QKsZNwnQMnm7PWV3bjIfLpNK1hqoG7poehzA3QlKQdQv72nm3Q1FyjpwNVaUh%2FjrRSWe4g5DP%2FD1nGXvoOuywKFMqwZBJlYoHVRs9VHP2%2BngJVZGer93f03MFrz%2By7N7V%2BF2sbwP0WZmO67k&X-Amz-Signature=c9e8233907174e55e5e0da38de8bfb5dc0a949ddf8377eb9047eb1131cd91ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5OCHFU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE7I5KC1MYh9XZP62e6L2k3FrQ7PocKRorhtrHykKDkPAiBLw0By1kVG8Fa8arMyuEmLL1xgf%2BnSnW6XUs%2F0FuI%2FrSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg2gakBxI%2BPZL0lpKtwDnitKVYeF0jAeRqbYrEpZLVO89NVH5rn136tnOPldmJ1z3kl9gf1x9YZOSX8nQDD%2ByG55Qw8qD0Uxr9Gh56c6TUDYcclXpr6LftfcKUcjO2HlNzcZ6VNCIUvnD%2FUPC0Uqkx6qcgzDcXDqVUm3Ct%2BQTyApsc4l9mVSPsva%2Bp7DgziujQzpkj%2FSsQeTkemICCONPcPUblL4ClefDVAVdwqsKZz883DyEiVWCXQpeSci4OmQcdIbgQa07w%2FHATIjqTdudwtgLjhC%2Fv35hmQ9ZAlyrdsqv%2B%2Bjw%2FI%2BKJvL1TwXlruVyiUl4ulyAa%2F7S1KYea77J8G8n9y9StUdQu8sL%2B00MSwDmq7x%2FtaP1xDPtDgCnmnfE9BBBR5IZys6Vu75S739P8UYBnX%2FoVIqATlsbkFCzyM0ilJ%2ByruA2qwe9sNz6kTH%2BYZUTBa5jIKN2p3QR6zMnuzRALJRmuAso9Up%2FjD5lttqE%2FDWiEqRkBROMuQuzk975EAbBqGflVxzYXMDnwCOM8TFTkzGopSTHTUca%2BPvri55KJxog0w2MmrWo0wZOoqJ%2FuAf5dyPx08CWtJFhkcY1tR%2BwpXP1wlNYAcbSGuNkKl9DqA%2F2NJORT1xM7nB8xmJgu7dGs4ZBmxxGjcw4YzBwQY6pgH6%2BpSzctsKaRNuOxsEj18FydwALiiKPrpvAXrSsZoJLw4ZcNOoRGKj4io3uCoeMDSDrd9KppXQRq%2B7QKsZNwnQMnm7PWV3bjIfLpNK1hqoG7poehzA3QlKQdQv72nm3Q1FyjpwNVaUh%2FjrRSWe4g5DP%2FD1nGXvoOuywKFMqwZBJlYoHVRs9VHP2%2BngJVZGer93f03MFrz%2By7N7V%2BF2sbwP0WZmO67k&X-Amz-Signature=f638da845f6ec7a278227d4eeea593c5783c6f618afed5c84658023c0b4a554c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5OCHFU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE7I5KC1MYh9XZP62e6L2k3FrQ7PocKRorhtrHykKDkPAiBLw0By1kVG8Fa8arMyuEmLL1xgf%2BnSnW6XUs%2F0FuI%2FrSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg2gakBxI%2BPZL0lpKtwDnitKVYeF0jAeRqbYrEpZLVO89NVH5rn136tnOPldmJ1z3kl9gf1x9YZOSX8nQDD%2ByG55Qw8qD0Uxr9Gh56c6TUDYcclXpr6LftfcKUcjO2HlNzcZ6VNCIUvnD%2FUPC0Uqkx6qcgzDcXDqVUm3Ct%2BQTyApsc4l9mVSPsva%2Bp7DgziujQzpkj%2FSsQeTkemICCONPcPUblL4ClefDVAVdwqsKZz883DyEiVWCXQpeSci4OmQcdIbgQa07w%2FHATIjqTdudwtgLjhC%2Fv35hmQ9ZAlyrdsqv%2B%2Bjw%2FI%2BKJvL1TwXlruVyiUl4ulyAa%2F7S1KYea77J8G8n9y9StUdQu8sL%2B00MSwDmq7x%2FtaP1xDPtDgCnmnfE9BBBR5IZys6Vu75S739P8UYBnX%2FoVIqATlsbkFCzyM0ilJ%2ByruA2qwe9sNz6kTH%2BYZUTBa5jIKN2p3QR6zMnuzRALJRmuAso9Up%2FjD5lttqE%2FDWiEqRkBROMuQuzk975EAbBqGflVxzYXMDnwCOM8TFTkzGopSTHTUca%2BPvri55KJxog0w2MmrWo0wZOoqJ%2FuAf5dyPx08CWtJFhkcY1tR%2BwpXP1wlNYAcbSGuNkKl9DqA%2F2NJORT1xM7nB8xmJgu7dGs4ZBmxxGjcw4YzBwQY6pgH6%2BpSzctsKaRNuOxsEj18FydwALiiKPrpvAXrSsZoJLw4ZcNOoRGKj4io3uCoeMDSDrd9KppXQRq%2B7QKsZNwnQMnm7PWV3bjIfLpNK1hqoG7poehzA3QlKQdQv72nm3Q1FyjpwNVaUh%2FjrRSWe4g5DP%2FD1nGXvoOuywKFMqwZBJlYoHVRs9VHP2%2BngJVZGer93f03MFrz%2By7N7V%2BF2sbwP0WZmO67k&X-Amz-Signature=bb8e912822fab35994560396a70b2c61f2b57732352db01feabc2917765ee9da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5OCHFU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE7I5KC1MYh9XZP62e6L2k3FrQ7PocKRorhtrHykKDkPAiBLw0By1kVG8Fa8arMyuEmLL1xgf%2BnSnW6XUs%2F0FuI%2FrSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg2gakBxI%2BPZL0lpKtwDnitKVYeF0jAeRqbYrEpZLVO89NVH5rn136tnOPldmJ1z3kl9gf1x9YZOSX8nQDD%2ByG55Qw8qD0Uxr9Gh56c6TUDYcclXpr6LftfcKUcjO2HlNzcZ6VNCIUvnD%2FUPC0Uqkx6qcgzDcXDqVUm3Ct%2BQTyApsc4l9mVSPsva%2Bp7DgziujQzpkj%2FSsQeTkemICCONPcPUblL4ClefDVAVdwqsKZz883DyEiVWCXQpeSci4OmQcdIbgQa07w%2FHATIjqTdudwtgLjhC%2Fv35hmQ9ZAlyrdsqv%2B%2Bjw%2FI%2BKJvL1TwXlruVyiUl4ulyAa%2F7S1KYea77J8G8n9y9StUdQu8sL%2B00MSwDmq7x%2FtaP1xDPtDgCnmnfE9BBBR5IZys6Vu75S739P8UYBnX%2FoVIqATlsbkFCzyM0ilJ%2ByruA2qwe9sNz6kTH%2BYZUTBa5jIKN2p3QR6zMnuzRALJRmuAso9Up%2FjD5lttqE%2FDWiEqRkBROMuQuzk975EAbBqGflVxzYXMDnwCOM8TFTkzGopSTHTUca%2BPvri55KJxog0w2MmrWo0wZOoqJ%2FuAf5dyPx08CWtJFhkcY1tR%2BwpXP1wlNYAcbSGuNkKl9DqA%2F2NJORT1xM7nB8xmJgu7dGs4ZBmxxGjcw4YzBwQY6pgH6%2BpSzctsKaRNuOxsEj18FydwALiiKPrpvAXrSsZoJLw4ZcNOoRGKj4io3uCoeMDSDrd9KppXQRq%2B7QKsZNwnQMnm7PWV3bjIfLpNK1hqoG7poehzA3QlKQdQv72nm3Q1FyjpwNVaUh%2FjrRSWe4g5DP%2FD1nGXvoOuywKFMqwZBJlYoHVRs9VHP2%2BngJVZGer93f03MFrz%2By7N7V%2BF2sbwP0WZmO67k&X-Amz-Signature=bdee2f08766ab5b9cae34ec9aedc5f33b8e97cf10f5882044eb1d75ffbda1e30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5OCHFU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE7I5KC1MYh9XZP62e6L2k3FrQ7PocKRorhtrHykKDkPAiBLw0By1kVG8Fa8arMyuEmLL1xgf%2BnSnW6XUs%2F0FuI%2FrSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg2gakBxI%2BPZL0lpKtwDnitKVYeF0jAeRqbYrEpZLVO89NVH5rn136tnOPldmJ1z3kl9gf1x9YZOSX8nQDD%2ByG55Qw8qD0Uxr9Gh56c6TUDYcclXpr6LftfcKUcjO2HlNzcZ6VNCIUvnD%2FUPC0Uqkx6qcgzDcXDqVUm3Ct%2BQTyApsc4l9mVSPsva%2Bp7DgziujQzpkj%2FSsQeTkemICCONPcPUblL4ClefDVAVdwqsKZz883DyEiVWCXQpeSci4OmQcdIbgQa07w%2FHATIjqTdudwtgLjhC%2Fv35hmQ9ZAlyrdsqv%2B%2Bjw%2FI%2BKJvL1TwXlruVyiUl4ulyAa%2F7S1KYea77J8G8n9y9StUdQu8sL%2B00MSwDmq7x%2FtaP1xDPtDgCnmnfE9BBBR5IZys6Vu75S739P8UYBnX%2FoVIqATlsbkFCzyM0ilJ%2ByruA2qwe9sNz6kTH%2BYZUTBa5jIKN2p3QR6zMnuzRALJRmuAso9Up%2FjD5lttqE%2FDWiEqRkBROMuQuzk975EAbBqGflVxzYXMDnwCOM8TFTkzGopSTHTUca%2BPvri55KJxog0w2MmrWo0wZOoqJ%2FuAf5dyPx08CWtJFhkcY1tR%2BwpXP1wlNYAcbSGuNkKl9DqA%2F2NJORT1xM7nB8xmJgu7dGs4ZBmxxGjcw4YzBwQY6pgH6%2BpSzctsKaRNuOxsEj18FydwALiiKPrpvAXrSsZoJLw4ZcNOoRGKj4io3uCoeMDSDrd9KppXQRq%2B7QKsZNwnQMnm7PWV3bjIfLpNK1hqoG7poehzA3QlKQdQv72nm3Q1FyjpwNVaUh%2FjrRSWe4g5DP%2FD1nGXvoOuywKFMqwZBJlYoHVRs9VHP2%2BngJVZGer93f03MFrz%2By7N7V%2BF2sbwP0WZmO67k&X-Amz-Signature=c4d3722088e17eaf1017f2c049cc5cb68ed034afce84bff97a0e03123b92f0d4&X-Amz-SignedHeaders=host&x-id=GetObject)
