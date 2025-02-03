---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR46Y26%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCU1TPSwju7uNqrNbknjr7Dty%2FPSkj8Rhfq9en0hFYSAiAR7zf0Hc1LB6FWkJKgaevlk79FNk%2F4TKZkPVueTzCZGSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgX%2Fz9td1wrFiaAz4KtwDb57BUtW862vsLjY2881RInU0lop1%2BpEX9GHx0k2pKOZP3nIActHhqh1Ac5A9Pkff3ItNBtCHcEghpEhR0Lc8cpfmnfKY9dXtL2TTtkPUUww4K9EmUHW%2Fj8Dz7teVS60pNfyLFMO34YdAblT1b9Y7YJfqemWLhvAHC%2FzRKt%2B033w63R9qNHTkpBC7d2OuqtimqDFBvow%2B9JrIo4EA09ZgcLxnCoVPac8wTDkYtYVHH75Z4ut2k%2FL7oFMtIeSKwMBHqDlycvdwqaiQ%2BBgHPFOhTlgZ3LLUX9uWx2CjekrSJH1x%2B4rAiZ15gU2LapbpbV9Ux1PyxUf8DabUlXmjszpWXjpWKInA6AbqdXRVENyleDhCciVz68iwxQQpWkL%2F1ii2aYABwB0u2qULUXu8gxQYl5WjrgKzq1wvvmJHuOJhzbqnrgnRaR7KGeDp6apiyrcUmW9QlZeEIXb0dor1lpc5Eo7dWVh09fbS6i6wHLEKOqMUGCOVRyB4War7UimmNtcKuOCZD9ZDMECJKVVABC%2BqTYbLPjyzd%2FS1FVcfxMM6KPZtGFYa2YnAxdiWQ2tmmd%2FHKB18Sp5rYIdxo%2BwwfJyIv71LOtyRXc%2Fy8gI%2Fs5qhWgX%2F97RXFUijwztC33kwmMGAvQY6pgFjUoJgLoJoD36AdCGL72tdw9%2BDmsiHhdXQIg95%2B1IuYYkGS9Bxl43yqBXu%2BdTmOJSs4vX8uuewnLoZi2KBvNfGtafMgqIghhUKkq1lMb44feqbswWrVRm1F6vSEUUK9Ww%2BoOMM%2BWgohoF8joDWnjCjJq7y5bfZxW7bs%2BYNiZAJ5dq3ydagfwAY0vQJ3CIHIOw5NXn8q8wlMsZGl76i2cOnVLzBv4SI&X-Amz-Signature=f7ac1e3ffc18e239868bed4fc4ee070e5e433f852fa012e7f28c02276f237081&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR46Y26%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCU1TPSwju7uNqrNbknjr7Dty%2FPSkj8Rhfq9en0hFYSAiAR7zf0Hc1LB6FWkJKgaevlk79FNk%2F4TKZkPVueTzCZGSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgX%2Fz9td1wrFiaAz4KtwDb57BUtW862vsLjY2881RInU0lop1%2BpEX9GHx0k2pKOZP3nIActHhqh1Ac5A9Pkff3ItNBtCHcEghpEhR0Lc8cpfmnfKY9dXtL2TTtkPUUww4K9EmUHW%2Fj8Dz7teVS60pNfyLFMO34YdAblT1b9Y7YJfqemWLhvAHC%2FzRKt%2B033w63R9qNHTkpBC7d2OuqtimqDFBvow%2B9JrIo4EA09ZgcLxnCoVPac8wTDkYtYVHH75Z4ut2k%2FL7oFMtIeSKwMBHqDlycvdwqaiQ%2BBgHPFOhTlgZ3LLUX9uWx2CjekrSJH1x%2B4rAiZ15gU2LapbpbV9Ux1PyxUf8DabUlXmjszpWXjpWKInA6AbqdXRVENyleDhCciVz68iwxQQpWkL%2F1ii2aYABwB0u2qULUXu8gxQYl5WjrgKzq1wvvmJHuOJhzbqnrgnRaR7KGeDp6apiyrcUmW9QlZeEIXb0dor1lpc5Eo7dWVh09fbS6i6wHLEKOqMUGCOVRyB4War7UimmNtcKuOCZD9ZDMECJKVVABC%2BqTYbLPjyzd%2FS1FVcfxMM6KPZtGFYa2YnAxdiWQ2tmmd%2FHKB18Sp5rYIdxo%2BwwfJyIv71LOtyRXc%2Fy8gI%2Fs5qhWgX%2F97RXFUijwztC33kwmMGAvQY6pgFjUoJgLoJoD36AdCGL72tdw9%2BDmsiHhdXQIg95%2B1IuYYkGS9Bxl43yqBXu%2BdTmOJSs4vX8uuewnLoZi2KBvNfGtafMgqIghhUKkq1lMb44feqbswWrVRm1F6vSEUUK9Ww%2BoOMM%2BWgohoF8joDWnjCjJq7y5bfZxW7bs%2BYNiZAJ5dq3ydagfwAY0vQJ3CIHIOw5NXn8q8wlMsZGl76i2cOnVLzBv4SI&X-Amz-Signature=bb94de0d208e52f9b3f4b72d850316fd33054c648f7ce38a024ce44011417430&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR46Y26%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCU1TPSwju7uNqrNbknjr7Dty%2FPSkj8Rhfq9en0hFYSAiAR7zf0Hc1LB6FWkJKgaevlk79FNk%2F4TKZkPVueTzCZGSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgX%2Fz9td1wrFiaAz4KtwDb57BUtW862vsLjY2881RInU0lop1%2BpEX9GHx0k2pKOZP3nIActHhqh1Ac5A9Pkff3ItNBtCHcEghpEhR0Lc8cpfmnfKY9dXtL2TTtkPUUww4K9EmUHW%2Fj8Dz7teVS60pNfyLFMO34YdAblT1b9Y7YJfqemWLhvAHC%2FzRKt%2B033w63R9qNHTkpBC7d2OuqtimqDFBvow%2B9JrIo4EA09ZgcLxnCoVPac8wTDkYtYVHH75Z4ut2k%2FL7oFMtIeSKwMBHqDlycvdwqaiQ%2BBgHPFOhTlgZ3LLUX9uWx2CjekrSJH1x%2B4rAiZ15gU2LapbpbV9Ux1PyxUf8DabUlXmjszpWXjpWKInA6AbqdXRVENyleDhCciVz68iwxQQpWkL%2F1ii2aYABwB0u2qULUXu8gxQYl5WjrgKzq1wvvmJHuOJhzbqnrgnRaR7KGeDp6apiyrcUmW9QlZeEIXb0dor1lpc5Eo7dWVh09fbS6i6wHLEKOqMUGCOVRyB4War7UimmNtcKuOCZD9ZDMECJKVVABC%2BqTYbLPjyzd%2FS1FVcfxMM6KPZtGFYa2YnAxdiWQ2tmmd%2FHKB18Sp5rYIdxo%2BwwfJyIv71LOtyRXc%2Fy8gI%2Fs5qhWgX%2F97RXFUijwztC33kwmMGAvQY6pgFjUoJgLoJoD36AdCGL72tdw9%2BDmsiHhdXQIg95%2B1IuYYkGS9Bxl43yqBXu%2BdTmOJSs4vX8uuewnLoZi2KBvNfGtafMgqIghhUKkq1lMb44feqbswWrVRm1F6vSEUUK9Ww%2BoOMM%2BWgohoF8joDWnjCjJq7y5bfZxW7bs%2BYNiZAJ5dq3ydagfwAY0vQJ3CIHIOw5NXn8q8wlMsZGl76i2cOnVLzBv4SI&X-Amz-Signature=e9450ac07f45729056caa5eaf0b604c58871333ef2179a62679ece6c6cbe7012&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR46Y26%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCU1TPSwju7uNqrNbknjr7Dty%2FPSkj8Rhfq9en0hFYSAiAR7zf0Hc1LB6FWkJKgaevlk79FNk%2F4TKZkPVueTzCZGSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgX%2Fz9td1wrFiaAz4KtwDb57BUtW862vsLjY2881RInU0lop1%2BpEX9GHx0k2pKOZP3nIActHhqh1Ac5A9Pkff3ItNBtCHcEghpEhR0Lc8cpfmnfKY9dXtL2TTtkPUUww4K9EmUHW%2Fj8Dz7teVS60pNfyLFMO34YdAblT1b9Y7YJfqemWLhvAHC%2FzRKt%2B033w63R9qNHTkpBC7d2OuqtimqDFBvow%2B9JrIo4EA09ZgcLxnCoVPac8wTDkYtYVHH75Z4ut2k%2FL7oFMtIeSKwMBHqDlycvdwqaiQ%2BBgHPFOhTlgZ3LLUX9uWx2CjekrSJH1x%2B4rAiZ15gU2LapbpbV9Ux1PyxUf8DabUlXmjszpWXjpWKInA6AbqdXRVENyleDhCciVz68iwxQQpWkL%2F1ii2aYABwB0u2qULUXu8gxQYl5WjrgKzq1wvvmJHuOJhzbqnrgnRaR7KGeDp6apiyrcUmW9QlZeEIXb0dor1lpc5Eo7dWVh09fbS6i6wHLEKOqMUGCOVRyB4War7UimmNtcKuOCZD9ZDMECJKVVABC%2BqTYbLPjyzd%2FS1FVcfxMM6KPZtGFYa2YnAxdiWQ2tmmd%2FHKB18Sp5rYIdxo%2BwwfJyIv71LOtyRXc%2Fy8gI%2Fs5qhWgX%2F97RXFUijwztC33kwmMGAvQY6pgFjUoJgLoJoD36AdCGL72tdw9%2BDmsiHhdXQIg95%2B1IuYYkGS9Bxl43yqBXu%2BdTmOJSs4vX8uuewnLoZi2KBvNfGtafMgqIghhUKkq1lMb44feqbswWrVRm1F6vSEUUK9Ww%2BoOMM%2BWgohoF8joDWnjCjJq7y5bfZxW7bs%2BYNiZAJ5dq3ydagfwAY0vQJ3CIHIOw5NXn8q8wlMsZGl76i2cOnVLzBv4SI&X-Amz-Signature=967c43e261f86d67a1639c5b68348c02563cdef883a478735a8247a3c2c9a65d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR46Y26%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCU1TPSwju7uNqrNbknjr7Dty%2FPSkj8Rhfq9en0hFYSAiAR7zf0Hc1LB6FWkJKgaevlk79FNk%2F4TKZkPVueTzCZGSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgX%2Fz9td1wrFiaAz4KtwDb57BUtW862vsLjY2881RInU0lop1%2BpEX9GHx0k2pKOZP3nIActHhqh1Ac5A9Pkff3ItNBtCHcEghpEhR0Lc8cpfmnfKY9dXtL2TTtkPUUww4K9EmUHW%2Fj8Dz7teVS60pNfyLFMO34YdAblT1b9Y7YJfqemWLhvAHC%2FzRKt%2B033w63R9qNHTkpBC7d2OuqtimqDFBvow%2B9JrIo4EA09ZgcLxnCoVPac8wTDkYtYVHH75Z4ut2k%2FL7oFMtIeSKwMBHqDlycvdwqaiQ%2BBgHPFOhTlgZ3LLUX9uWx2CjekrSJH1x%2B4rAiZ15gU2LapbpbV9Ux1PyxUf8DabUlXmjszpWXjpWKInA6AbqdXRVENyleDhCciVz68iwxQQpWkL%2F1ii2aYABwB0u2qULUXu8gxQYl5WjrgKzq1wvvmJHuOJhzbqnrgnRaR7KGeDp6apiyrcUmW9QlZeEIXb0dor1lpc5Eo7dWVh09fbS6i6wHLEKOqMUGCOVRyB4War7UimmNtcKuOCZD9ZDMECJKVVABC%2BqTYbLPjyzd%2FS1FVcfxMM6KPZtGFYa2YnAxdiWQ2tmmd%2FHKB18Sp5rYIdxo%2BwwfJyIv71LOtyRXc%2Fy8gI%2Fs5qhWgX%2F97RXFUijwztC33kwmMGAvQY6pgFjUoJgLoJoD36AdCGL72tdw9%2BDmsiHhdXQIg95%2B1IuYYkGS9Bxl43yqBXu%2BdTmOJSs4vX8uuewnLoZi2KBvNfGtafMgqIghhUKkq1lMb44feqbswWrVRm1F6vSEUUK9Ww%2BoOMM%2BWgohoF8joDWnjCjJq7y5bfZxW7bs%2BYNiZAJ5dq3ydagfwAY0vQJ3CIHIOw5NXn8q8wlMsZGl76i2cOnVLzBv4SI&X-Amz-Signature=e22c4d3c9d4f98f586b87e2c833923ed5a1c9e0d25131fed1dee534a1ed0ab00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR46Y26%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCU1TPSwju7uNqrNbknjr7Dty%2FPSkj8Rhfq9en0hFYSAiAR7zf0Hc1LB6FWkJKgaevlk79FNk%2F4TKZkPVueTzCZGSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgX%2Fz9td1wrFiaAz4KtwDb57BUtW862vsLjY2881RInU0lop1%2BpEX9GHx0k2pKOZP3nIActHhqh1Ac5A9Pkff3ItNBtCHcEghpEhR0Lc8cpfmnfKY9dXtL2TTtkPUUww4K9EmUHW%2Fj8Dz7teVS60pNfyLFMO34YdAblT1b9Y7YJfqemWLhvAHC%2FzRKt%2B033w63R9qNHTkpBC7d2OuqtimqDFBvow%2B9JrIo4EA09ZgcLxnCoVPac8wTDkYtYVHH75Z4ut2k%2FL7oFMtIeSKwMBHqDlycvdwqaiQ%2BBgHPFOhTlgZ3LLUX9uWx2CjekrSJH1x%2B4rAiZ15gU2LapbpbV9Ux1PyxUf8DabUlXmjszpWXjpWKInA6AbqdXRVENyleDhCciVz68iwxQQpWkL%2F1ii2aYABwB0u2qULUXu8gxQYl5WjrgKzq1wvvmJHuOJhzbqnrgnRaR7KGeDp6apiyrcUmW9QlZeEIXb0dor1lpc5Eo7dWVh09fbS6i6wHLEKOqMUGCOVRyB4War7UimmNtcKuOCZD9ZDMECJKVVABC%2BqTYbLPjyzd%2FS1FVcfxMM6KPZtGFYa2YnAxdiWQ2tmmd%2FHKB18Sp5rYIdxo%2BwwfJyIv71LOtyRXc%2Fy8gI%2Fs5qhWgX%2F97RXFUijwztC33kwmMGAvQY6pgFjUoJgLoJoD36AdCGL72tdw9%2BDmsiHhdXQIg95%2B1IuYYkGS9Bxl43yqBXu%2BdTmOJSs4vX8uuewnLoZi2KBvNfGtafMgqIghhUKkq1lMb44feqbswWrVRm1F6vSEUUK9Ww%2BoOMM%2BWgohoF8joDWnjCjJq7y5bfZxW7bs%2BYNiZAJ5dq3ydagfwAY0vQJ3CIHIOw5NXn8q8wlMsZGl76i2cOnVLzBv4SI&X-Amz-Signature=9567e452712e4494147daaa7f3e80ffdb04ef92e1b5f40ce1a5ddb05b4b5da92&X-Amz-SignedHeaders=host&x-id=GetObject)
