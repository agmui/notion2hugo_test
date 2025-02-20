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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTDMTW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Joz1v3xuakR91szYi2VqoQOeohsYVer0FOemQAbgMAiEAhcloqg%2BplhCY5WzwEvr0YgZXAv607sBaDzwGsDlKFFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFzo42KW3lW%2BVhtircAxnn5wsC49uVybQ9ZP8I3lDaQY4osyuF8arM0mwCnrQa6kfpgGV63CYBmnbs87f92BsWPuiRf5%2FqjA0jyZS6d8wE7Kfk7ImbGv%2BgpQdkrRj3UruDPvaYSB1Xbonfoo0y8YQ3jD85dbv8PD2tCx9gjD613Amfv1fX4JxT4UQm7GWQ5HnhANYkC%2BCD9SsGkJR%2Bx%2BxJFsbDsSw0uiG1CXB%2BnW1o%2FxPwGNBua6EM8N0BxExozFc%2B77Rrx6lKnqMHngkBc2pyzkzTRv7r2OmD6o%2B%2FVV0FoQns3xQ6Fm774dyI1xRZfi%2BJKWaJGpr9pMhJGWiIaTnYiwM60cW4FHGI0UbgPgYqYbrmrpdn4u%2B1MraWPfouLOWjVY2u2z0HDHIqCUkJ%2BC5lzmwNzQNYauEOddg%2FMi4gBaPdTQFG55oAeeyMxFdFITtz%2FCd6KqRfyiQ3i5DZzykD4QgE48OifyY9xmgFa1Kwbz%2BuKG3k6w6RBG%2BBsKLxcW4p88ksggAVCx3xwFzv8YWkdFEtjmJj4IrdHdEt5J5SkyN%2F0Mh77kOMCEi0Qlz7JrjYKlV0L919S%2FJKAOwT%2F7vHvI8f%2F5QpG%2F2DfhJdXIWGk2beUTyHUEKk3XsubapUdsrd46e8XNHObSe7MOCN3r0GOqUBZxUbI5Irc9%2F55bnYjYMRLbs%2F1NZ5JJgnBfGBJgB3Gq7XoG2L5%2FmoARvovXCq%2FTgCbhtqtarf9fLqCfA7emiAzkz1qc5090NvPsqiO6cuRwv57gXHWrFzCsf9%2FseoUNCYxPQgN9XOK70m2PzxVemRsz4iffPp9G4yUt0xNuUevaeqrD4uwjztfurc25tiVPpOIytHGNMPkC%2FjHZDA05wiTHUvQJEo&X-Amz-Signature=7c664bdfb3616352127d3d3623f9dcb1867d926ab372cc57202c07c28ffbc206&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTDMTW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Joz1v3xuakR91szYi2VqoQOeohsYVer0FOemQAbgMAiEAhcloqg%2BplhCY5WzwEvr0YgZXAv607sBaDzwGsDlKFFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFzo42KW3lW%2BVhtircAxnn5wsC49uVybQ9ZP8I3lDaQY4osyuF8arM0mwCnrQa6kfpgGV63CYBmnbs87f92BsWPuiRf5%2FqjA0jyZS6d8wE7Kfk7ImbGv%2BgpQdkrRj3UruDPvaYSB1Xbonfoo0y8YQ3jD85dbv8PD2tCx9gjD613Amfv1fX4JxT4UQm7GWQ5HnhANYkC%2BCD9SsGkJR%2Bx%2BxJFsbDsSw0uiG1CXB%2BnW1o%2FxPwGNBua6EM8N0BxExozFc%2B77Rrx6lKnqMHngkBc2pyzkzTRv7r2OmD6o%2B%2FVV0FoQns3xQ6Fm774dyI1xRZfi%2BJKWaJGpr9pMhJGWiIaTnYiwM60cW4FHGI0UbgPgYqYbrmrpdn4u%2B1MraWPfouLOWjVY2u2z0HDHIqCUkJ%2BC5lzmwNzQNYauEOddg%2FMi4gBaPdTQFG55oAeeyMxFdFITtz%2FCd6KqRfyiQ3i5DZzykD4QgE48OifyY9xmgFa1Kwbz%2BuKG3k6w6RBG%2BBsKLxcW4p88ksggAVCx3xwFzv8YWkdFEtjmJj4IrdHdEt5J5SkyN%2F0Mh77kOMCEi0Qlz7JrjYKlV0L919S%2FJKAOwT%2F7vHvI8f%2F5QpG%2F2DfhJdXIWGk2beUTyHUEKk3XsubapUdsrd46e8XNHObSe7MOCN3r0GOqUBZxUbI5Irc9%2F55bnYjYMRLbs%2F1NZ5JJgnBfGBJgB3Gq7XoG2L5%2FmoARvovXCq%2FTgCbhtqtarf9fLqCfA7emiAzkz1qc5090NvPsqiO6cuRwv57gXHWrFzCsf9%2FseoUNCYxPQgN9XOK70m2PzxVemRsz4iffPp9G4yUt0xNuUevaeqrD4uwjztfurc25tiVPpOIytHGNMPkC%2FjHZDA05wiTHUvQJEo&X-Amz-Signature=05d1b0e39bb8bcfa6451e4ab75fda69740cf660cf94651944729977b9f10db1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTDMTW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Joz1v3xuakR91szYi2VqoQOeohsYVer0FOemQAbgMAiEAhcloqg%2BplhCY5WzwEvr0YgZXAv607sBaDzwGsDlKFFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFzo42KW3lW%2BVhtircAxnn5wsC49uVybQ9ZP8I3lDaQY4osyuF8arM0mwCnrQa6kfpgGV63CYBmnbs87f92BsWPuiRf5%2FqjA0jyZS6d8wE7Kfk7ImbGv%2BgpQdkrRj3UruDPvaYSB1Xbonfoo0y8YQ3jD85dbv8PD2tCx9gjD613Amfv1fX4JxT4UQm7GWQ5HnhANYkC%2BCD9SsGkJR%2Bx%2BxJFsbDsSw0uiG1CXB%2BnW1o%2FxPwGNBua6EM8N0BxExozFc%2B77Rrx6lKnqMHngkBc2pyzkzTRv7r2OmD6o%2B%2FVV0FoQns3xQ6Fm774dyI1xRZfi%2BJKWaJGpr9pMhJGWiIaTnYiwM60cW4FHGI0UbgPgYqYbrmrpdn4u%2B1MraWPfouLOWjVY2u2z0HDHIqCUkJ%2BC5lzmwNzQNYauEOddg%2FMi4gBaPdTQFG55oAeeyMxFdFITtz%2FCd6KqRfyiQ3i5DZzykD4QgE48OifyY9xmgFa1Kwbz%2BuKG3k6w6RBG%2BBsKLxcW4p88ksggAVCx3xwFzv8YWkdFEtjmJj4IrdHdEt5J5SkyN%2F0Mh77kOMCEi0Qlz7JrjYKlV0L919S%2FJKAOwT%2F7vHvI8f%2F5QpG%2F2DfhJdXIWGk2beUTyHUEKk3XsubapUdsrd46e8XNHObSe7MOCN3r0GOqUBZxUbI5Irc9%2F55bnYjYMRLbs%2F1NZ5JJgnBfGBJgB3Gq7XoG2L5%2FmoARvovXCq%2FTgCbhtqtarf9fLqCfA7emiAzkz1qc5090NvPsqiO6cuRwv57gXHWrFzCsf9%2FseoUNCYxPQgN9XOK70m2PzxVemRsz4iffPp9G4yUt0xNuUevaeqrD4uwjztfurc25tiVPpOIytHGNMPkC%2FjHZDA05wiTHUvQJEo&X-Amz-Signature=52f00fe171de5294209ed24f206b88aaa47c8c253b2a9597bd9badc761e73500&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTDMTW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Joz1v3xuakR91szYi2VqoQOeohsYVer0FOemQAbgMAiEAhcloqg%2BplhCY5WzwEvr0YgZXAv607sBaDzwGsDlKFFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFzo42KW3lW%2BVhtircAxnn5wsC49uVybQ9ZP8I3lDaQY4osyuF8arM0mwCnrQa6kfpgGV63CYBmnbs87f92BsWPuiRf5%2FqjA0jyZS6d8wE7Kfk7ImbGv%2BgpQdkrRj3UruDPvaYSB1Xbonfoo0y8YQ3jD85dbv8PD2tCx9gjD613Amfv1fX4JxT4UQm7GWQ5HnhANYkC%2BCD9SsGkJR%2Bx%2BxJFsbDsSw0uiG1CXB%2BnW1o%2FxPwGNBua6EM8N0BxExozFc%2B77Rrx6lKnqMHngkBc2pyzkzTRv7r2OmD6o%2B%2FVV0FoQns3xQ6Fm774dyI1xRZfi%2BJKWaJGpr9pMhJGWiIaTnYiwM60cW4FHGI0UbgPgYqYbrmrpdn4u%2B1MraWPfouLOWjVY2u2z0HDHIqCUkJ%2BC5lzmwNzQNYauEOddg%2FMi4gBaPdTQFG55oAeeyMxFdFITtz%2FCd6KqRfyiQ3i5DZzykD4QgE48OifyY9xmgFa1Kwbz%2BuKG3k6w6RBG%2BBsKLxcW4p88ksggAVCx3xwFzv8YWkdFEtjmJj4IrdHdEt5J5SkyN%2F0Mh77kOMCEi0Qlz7JrjYKlV0L919S%2FJKAOwT%2F7vHvI8f%2F5QpG%2F2DfhJdXIWGk2beUTyHUEKk3XsubapUdsrd46e8XNHObSe7MOCN3r0GOqUBZxUbI5Irc9%2F55bnYjYMRLbs%2F1NZ5JJgnBfGBJgB3Gq7XoG2L5%2FmoARvovXCq%2FTgCbhtqtarf9fLqCfA7emiAzkz1qc5090NvPsqiO6cuRwv57gXHWrFzCsf9%2FseoUNCYxPQgN9XOK70m2PzxVemRsz4iffPp9G4yUt0xNuUevaeqrD4uwjztfurc25tiVPpOIytHGNMPkC%2FjHZDA05wiTHUvQJEo&X-Amz-Signature=9ecd0484eef165b7a31eb7ee271844a0eb752770fe8fe955f8b43559f5092a40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTDMTW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Joz1v3xuakR91szYi2VqoQOeohsYVer0FOemQAbgMAiEAhcloqg%2BplhCY5WzwEvr0YgZXAv607sBaDzwGsDlKFFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFzo42KW3lW%2BVhtircAxnn5wsC49uVybQ9ZP8I3lDaQY4osyuF8arM0mwCnrQa6kfpgGV63CYBmnbs87f92BsWPuiRf5%2FqjA0jyZS6d8wE7Kfk7ImbGv%2BgpQdkrRj3UruDPvaYSB1Xbonfoo0y8YQ3jD85dbv8PD2tCx9gjD613Amfv1fX4JxT4UQm7GWQ5HnhANYkC%2BCD9SsGkJR%2Bx%2BxJFsbDsSw0uiG1CXB%2BnW1o%2FxPwGNBua6EM8N0BxExozFc%2B77Rrx6lKnqMHngkBc2pyzkzTRv7r2OmD6o%2B%2FVV0FoQns3xQ6Fm774dyI1xRZfi%2BJKWaJGpr9pMhJGWiIaTnYiwM60cW4FHGI0UbgPgYqYbrmrpdn4u%2B1MraWPfouLOWjVY2u2z0HDHIqCUkJ%2BC5lzmwNzQNYauEOddg%2FMi4gBaPdTQFG55oAeeyMxFdFITtz%2FCd6KqRfyiQ3i5DZzykD4QgE48OifyY9xmgFa1Kwbz%2BuKG3k6w6RBG%2BBsKLxcW4p88ksggAVCx3xwFzv8YWkdFEtjmJj4IrdHdEt5J5SkyN%2F0Mh77kOMCEi0Qlz7JrjYKlV0L919S%2FJKAOwT%2F7vHvI8f%2F5QpG%2F2DfhJdXIWGk2beUTyHUEKk3XsubapUdsrd46e8XNHObSe7MOCN3r0GOqUBZxUbI5Irc9%2F55bnYjYMRLbs%2F1NZ5JJgnBfGBJgB3Gq7XoG2L5%2FmoARvovXCq%2FTgCbhtqtarf9fLqCfA7emiAzkz1qc5090NvPsqiO6cuRwv57gXHWrFzCsf9%2FseoUNCYxPQgN9XOK70m2PzxVemRsz4iffPp9G4yUt0xNuUevaeqrD4uwjztfurc25tiVPpOIytHGNMPkC%2FjHZDA05wiTHUvQJEo&X-Amz-Signature=f6319ff1928ab41230e436037619454c43b18919ef6bcece1b463d9cab1e18e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTDMTW3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9Joz1v3xuakR91szYi2VqoQOeohsYVer0FOemQAbgMAiEAhcloqg%2BplhCY5WzwEvr0YgZXAv607sBaDzwGsDlKFFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrFzo42KW3lW%2BVhtircAxnn5wsC49uVybQ9ZP8I3lDaQY4osyuF8arM0mwCnrQa6kfpgGV63CYBmnbs87f92BsWPuiRf5%2FqjA0jyZS6d8wE7Kfk7ImbGv%2BgpQdkrRj3UruDPvaYSB1Xbonfoo0y8YQ3jD85dbv8PD2tCx9gjD613Amfv1fX4JxT4UQm7GWQ5HnhANYkC%2BCD9SsGkJR%2Bx%2BxJFsbDsSw0uiG1CXB%2BnW1o%2FxPwGNBua6EM8N0BxExozFc%2B77Rrx6lKnqMHngkBc2pyzkzTRv7r2OmD6o%2B%2FVV0FoQns3xQ6Fm774dyI1xRZfi%2BJKWaJGpr9pMhJGWiIaTnYiwM60cW4FHGI0UbgPgYqYbrmrpdn4u%2B1MraWPfouLOWjVY2u2z0HDHIqCUkJ%2BC5lzmwNzQNYauEOddg%2FMi4gBaPdTQFG55oAeeyMxFdFITtz%2FCd6KqRfyiQ3i5DZzykD4QgE48OifyY9xmgFa1Kwbz%2BuKG3k6w6RBG%2BBsKLxcW4p88ksggAVCx3xwFzv8YWkdFEtjmJj4IrdHdEt5J5SkyN%2F0Mh77kOMCEi0Qlz7JrjYKlV0L919S%2FJKAOwT%2F7vHvI8f%2F5QpG%2F2DfhJdXIWGk2beUTyHUEKk3XsubapUdsrd46e8XNHObSe7MOCN3r0GOqUBZxUbI5Irc9%2F55bnYjYMRLbs%2F1NZ5JJgnBfGBJgB3Gq7XoG2L5%2FmoARvovXCq%2FTgCbhtqtarf9fLqCfA7emiAzkz1qc5090NvPsqiO6cuRwv57gXHWrFzCsf9%2FseoUNCYxPQgN9XOK70m2PzxVemRsz4iffPp9G4yUt0xNuUevaeqrD4uwjztfurc25tiVPpOIytHGNMPkC%2FjHZDA05wiTHUvQJEo&X-Amz-Signature=ef4b868e9b41679ef481654ba2da0af8baee65bd360d1c6def7693845ce9d346&X-Amz-SignedHeaders=host&x-id=GetObject)
