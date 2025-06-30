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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMUUKG6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBn8IRvm7%2FZqpU7%2FmLQTrsRWDJ2Fvx5VRDYxFHv7ktQIgXKBSVWX7UMn7bLcbCokM0s4E9ffMUEssw86OiOUH%2BvEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjb7fmCth8csVDVGircA95UeHBA3maThOwKluM7n8bz%2FTT%2B4Ib1Z1wWfNdBHMpACB26tT%2BxkoSN%2FisKEbbYx4YIjbKNu3860fYlXp%2FbHzNJUqHPh8SZW10dzLNOqQLOUy9Ad%2Fw%2F80%2F4Uhjk5Vt%2B8ub6LVhCaq72ezcwPimyTUnD4XQvtoH%2BmNGvETI5zz4Y%2BuXzkAN66gXkUDJ9aurdYfkGJuhZG%2BckvvE3zqdsGB6I0Cm0IAsIP4k%2F3Rjsbo5RiWRAVnePTnhL6Ay5w2Dq%2FXapwOgD0NBHFI7BtnDF9QkeGPOKvwB%2FqY9y1oWhTl1u%2F%2BZHv1w96yoV0PFkXpYb%2FbKfpHcQZHmOOWr17NeFZdQ618vejM%2F2MSzzqkIp5jUWgKw9z%2FkDSeePq6E5z004rsvnoJ4I89Dl6xA6JJXdY%2Flwm7n66HZdk7jHgz8q6YklGwMdPnEIHFcGdhc2Pc3BUG%2FZowswMhE%2F1wnIgt8xZS%2Bd26utlGHxP1NoOC2KSHSaDuR2wry4XZ3nIXV%2FVsNSG3ZGmnPFzQrj4CFD%2BM6INBMSw6q8HzieFSBVLwsYFBuwsRAS0rfsI1F4qBzHHNF77yJ4v7jSg4orGe6zC2AlTYdai05e5sVkQiOoAIhx6mpb8wpKbqk%2BXi5YxWeiMLzuh8MGOqUBw3xBbLsRoE2R95w%2BRhCx%2BCxLeq0pb8kDVxe1TkwHAjDwLxwUvSdMEfVWW8j%2BGN9LvbB31x1QNw2ohfLev8MIcFkDXiMuD7s3ksoKV4xWhiI4alO74vgr52YbRDBY9vUW3VVOD1z6Q1NBXoHCheyoRXoDCojV2LhBSHAU4VtbN2hQ36aCsnl7rgo0irglS134Yh22rswHiiraics0MSiz8AYKjKHx&X-Amz-Signature=a6acbb1d17bf0ee2c4a160f8dd5079385ef4ecc4654b9d87b8644511f67dcbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMUUKG6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBn8IRvm7%2FZqpU7%2FmLQTrsRWDJ2Fvx5VRDYxFHv7ktQIgXKBSVWX7UMn7bLcbCokM0s4E9ffMUEssw86OiOUH%2BvEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjb7fmCth8csVDVGircA95UeHBA3maThOwKluM7n8bz%2FTT%2B4Ib1Z1wWfNdBHMpACB26tT%2BxkoSN%2FisKEbbYx4YIjbKNu3860fYlXp%2FbHzNJUqHPh8SZW10dzLNOqQLOUy9Ad%2Fw%2F80%2F4Uhjk5Vt%2B8ub6LVhCaq72ezcwPimyTUnD4XQvtoH%2BmNGvETI5zz4Y%2BuXzkAN66gXkUDJ9aurdYfkGJuhZG%2BckvvE3zqdsGB6I0Cm0IAsIP4k%2F3Rjsbo5RiWRAVnePTnhL6Ay5w2Dq%2FXapwOgD0NBHFI7BtnDF9QkeGPOKvwB%2FqY9y1oWhTl1u%2F%2BZHv1w96yoV0PFkXpYb%2FbKfpHcQZHmOOWr17NeFZdQ618vejM%2F2MSzzqkIp5jUWgKw9z%2FkDSeePq6E5z004rsvnoJ4I89Dl6xA6JJXdY%2Flwm7n66HZdk7jHgz8q6YklGwMdPnEIHFcGdhc2Pc3BUG%2FZowswMhE%2F1wnIgt8xZS%2Bd26utlGHxP1NoOC2KSHSaDuR2wry4XZ3nIXV%2FVsNSG3ZGmnPFzQrj4CFD%2BM6INBMSw6q8HzieFSBVLwsYFBuwsRAS0rfsI1F4qBzHHNF77yJ4v7jSg4orGe6zC2AlTYdai05e5sVkQiOoAIhx6mpb8wpKbqk%2BXi5YxWeiMLzuh8MGOqUBw3xBbLsRoE2R95w%2BRhCx%2BCxLeq0pb8kDVxe1TkwHAjDwLxwUvSdMEfVWW8j%2BGN9LvbB31x1QNw2ohfLev8MIcFkDXiMuD7s3ksoKV4xWhiI4alO74vgr52YbRDBY9vUW3VVOD1z6Q1NBXoHCheyoRXoDCojV2LhBSHAU4VtbN2hQ36aCsnl7rgo0irglS134Yh22rswHiiraics0MSiz8AYKjKHx&X-Amz-Signature=1b1514bd930d04cef8636559d7e04ea254ae665aedd6b24ac409a86a1f7b4b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMUUKG6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBn8IRvm7%2FZqpU7%2FmLQTrsRWDJ2Fvx5VRDYxFHv7ktQIgXKBSVWX7UMn7bLcbCokM0s4E9ffMUEssw86OiOUH%2BvEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjb7fmCth8csVDVGircA95UeHBA3maThOwKluM7n8bz%2FTT%2B4Ib1Z1wWfNdBHMpACB26tT%2BxkoSN%2FisKEbbYx4YIjbKNu3860fYlXp%2FbHzNJUqHPh8SZW10dzLNOqQLOUy9Ad%2Fw%2F80%2F4Uhjk5Vt%2B8ub6LVhCaq72ezcwPimyTUnD4XQvtoH%2BmNGvETI5zz4Y%2BuXzkAN66gXkUDJ9aurdYfkGJuhZG%2BckvvE3zqdsGB6I0Cm0IAsIP4k%2F3Rjsbo5RiWRAVnePTnhL6Ay5w2Dq%2FXapwOgD0NBHFI7BtnDF9QkeGPOKvwB%2FqY9y1oWhTl1u%2F%2BZHv1w96yoV0PFkXpYb%2FbKfpHcQZHmOOWr17NeFZdQ618vejM%2F2MSzzqkIp5jUWgKw9z%2FkDSeePq6E5z004rsvnoJ4I89Dl6xA6JJXdY%2Flwm7n66HZdk7jHgz8q6YklGwMdPnEIHFcGdhc2Pc3BUG%2FZowswMhE%2F1wnIgt8xZS%2Bd26utlGHxP1NoOC2KSHSaDuR2wry4XZ3nIXV%2FVsNSG3ZGmnPFzQrj4CFD%2BM6INBMSw6q8HzieFSBVLwsYFBuwsRAS0rfsI1F4qBzHHNF77yJ4v7jSg4orGe6zC2AlTYdai05e5sVkQiOoAIhx6mpb8wpKbqk%2BXi5YxWeiMLzuh8MGOqUBw3xBbLsRoE2R95w%2BRhCx%2BCxLeq0pb8kDVxe1TkwHAjDwLxwUvSdMEfVWW8j%2BGN9LvbB31x1QNw2ohfLev8MIcFkDXiMuD7s3ksoKV4xWhiI4alO74vgr52YbRDBY9vUW3VVOD1z6Q1NBXoHCheyoRXoDCojV2LhBSHAU4VtbN2hQ36aCsnl7rgo0irglS134Yh22rswHiiraics0MSiz8AYKjKHx&X-Amz-Signature=e102062f61870886870b7cfd8c92c25a074d77438c134db815d4d668f83d9348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMUUKG6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBn8IRvm7%2FZqpU7%2FmLQTrsRWDJ2Fvx5VRDYxFHv7ktQIgXKBSVWX7UMn7bLcbCokM0s4E9ffMUEssw86OiOUH%2BvEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjb7fmCth8csVDVGircA95UeHBA3maThOwKluM7n8bz%2FTT%2B4Ib1Z1wWfNdBHMpACB26tT%2BxkoSN%2FisKEbbYx4YIjbKNu3860fYlXp%2FbHzNJUqHPh8SZW10dzLNOqQLOUy9Ad%2Fw%2F80%2F4Uhjk5Vt%2B8ub6LVhCaq72ezcwPimyTUnD4XQvtoH%2BmNGvETI5zz4Y%2BuXzkAN66gXkUDJ9aurdYfkGJuhZG%2BckvvE3zqdsGB6I0Cm0IAsIP4k%2F3Rjsbo5RiWRAVnePTnhL6Ay5w2Dq%2FXapwOgD0NBHFI7BtnDF9QkeGPOKvwB%2FqY9y1oWhTl1u%2F%2BZHv1w96yoV0PFkXpYb%2FbKfpHcQZHmOOWr17NeFZdQ618vejM%2F2MSzzqkIp5jUWgKw9z%2FkDSeePq6E5z004rsvnoJ4I89Dl6xA6JJXdY%2Flwm7n66HZdk7jHgz8q6YklGwMdPnEIHFcGdhc2Pc3BUG%2FZowswMhE%2F1wnIgt8xZS%2Bd26utlGHxP1NoOC2KSHSaDuR2wry4XZ3nIXV%2FVsNSG3ZGmnPFzQrj4CFD%2BM6INBMSw6q8HzieFSBVLwsYFBuwsRAS0rfsI1F4qBzHHNF77yJ4v7jSg4orGe6zC2AlTYdai05e5sVkQiOoAIhx6mpb8wpKbqk%2BXi5YxWeiMLzuh8MGOqUBw3xBbLsRoE2R95w%2BRhCx%2BCxLeq0pb8kDVxe1TkwHAjDwLxwUvSdMEfVWW8j%2BGN9LvbB31x1QNw2ohfLev8MIcFkDXiMuD7s3ksoKV4xWhiI4alO74vgr52YbRDBY9vUW3VVOD1z6Q1NBXoHCheyoRXoDCojV2LhBSHAU4VtbN2hQ36aCsnl7rgo0irglS134Yh22rswHiiraics0MSiz8AYKjKHx&X-Amz-Signature=bbdc0b0216a91074a138e46802b11a064ed84d2eb9ea9693ef1e43fd6db1dd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMUUKG6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBn8IRvm7%2FZqpU7%2FmLQTrsRWDJ2Fvx5VRDYxFHv7ktQIgXKBSVWX7UMn7bLcbCokM0s4E9ffMUEssw86OiOUH%2BvEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjb7fmCth8csVDVGircA95UeHBA3maThOwKluM7n8bz%2FTT%2B4Ib1Z1wWfNdBHMpACB26tT%2BxkoSN%2FisKEbbYx4YIjbKNu3860fYlXp%2FbHzNJUqHPh8SZW10dzLNOqQLOUy9Ad%2Fw%2F80%2F4Uhjk5Vt%2B8ub6LVhCaq72ezcwPimyTUnD4XQvtoH%2BmNGvETI5zz4Y%2BuXzkAN66gXkUDJ9aurdYfkGJuhZG%2BckvvE3zqdsGB6I0Cm0IAsIP4k%2F3Rjsbo5RiWRAVnePTnhL6Ay5w2Dq%2FXapwOgD0NBHFI7BtnDF9QkeGPOKvwB%2FqY9y1oWhTl1u%2F%2BZHv1w96yoV0PFkXpYb%2FbKfpHcQZHmOOWr17NeFZdQ618vejM%2F2MSzzqkIp5jUWgKw9z%2FkDSeePq6E5z004rsvnoJ4I89Dl6xA6JJXdY%2Flwm7n66HZdk7jHgz8q6YklGwMdPnEIHFcGdhc2Pc3BUG%2FZowswMhE%2F1wnIgt8xZS%2Bd26utlGHxP1NoOC2KSHSaDuR2wry4XZ3nIXV%2FVsNSG3ZGmnPFzQrj4CFD%2BM6INBMSw6q8HzieFSBVLwsYFBuwsRAS0rfsI1F4qBzHHNF77yJ4v7jSg4orGe6zC2AlTYdai05e5sVkQiOoAIhx6mpb8wpKbqk%2BXi5YxWeiMLzuh8MGOqUBw3xBbLsRoE2R95w%2BRhCx%2BCxLeq0pb8kDVxe1TkwHAjDwLxwUvSdMEfVWW8j%2BGN9LvbB31x1QNw2ohfLev8MIcFkDXiMuD7s3ksoKV4xWhiI4alO74vgr52YbRDBY9vUW3VVOD1z6Q1NBXoHCheyoRXoDCojV2LhBSHAU4VtbN2hQ36aCsnl7rgo0irglS134Yh22rswHiiraics0MSiz8AYKjKHx&X-Amz-Signature=74ca231acbd1a6dad3f90b7e2b833f6bcab18df7779a5f67b4f53f8bee2180f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMUUKG6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBn8IRvm7%2FZqpU7%2FmLQTrsRWDJ2Fvx5VRDYxFHv7ktQIgXKBSVWX7UMn7bLcbCokM0s4E9ffMUEssw86OiOUH%2BvEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjb7fmCth8csVDVGircA95UeHBA3maThOwKluM7n8bz%2FTT%2B4Ib1Z1wWfNdBHMpACB26tT%2BxkoSN%2FisKEbbYx4YIjbKNu3860fYlXp%2FbHzNJUqHPh8SZW10dzLNOqQLOUy9Ad%2Fw%2F80%2F4Uhjk5Vt%2B8ub6LVhCaq72ezcwPimyTUnD4XQvtoH%2BmNGvETI5zz4Y%2BuXzkAN66gXkUDJ9aurdYfkGJuhZG%2BckvvE3zqdsGB6I0Cm0IAsIP4k%2F3Rjsbo5RiWRAVnePTnhL6Ay5w2Dq%2FXapwOgD0NBHFI7BtnDF9QkeGPOKvwB%2FqY9y1oWhTl1u%2F%2BZHv1w96yoV0PFkXpYb%2FbKfpHcQZHmOOWr17NeFZdQ618vejM%2F2MSzzqkIp5jUWgKw9z%2FkDSeePq6E5z004rsvnoJ4I89Dl6xA6JJXdY%2Flwm7n66HZdk7jHgz8q6YklGwMdPnEIHFcGdhc2Pc3BUG%2FZowswMhE%2F1wnIgt8xZS%2Bd26utlGHxP1NoOC2KSHSaDuR2wry4XZ3nIXV%2FVsNSG3ZGmnPFzQrj4CFD%2BM6INBMSw6q8HzieFSBVLwsYFBuwsRAS0rfsI1F4qBzHHNF77yJ4v7jSg4orGe6zC2AlTYdai05e5sVkQiOoAIhx6mpb8wpKbqk%2BXi5YxWeiMLzuh8MGOqUBw3xBbLsRoE2R95w%2BRhCx%2BCxLeq0pb8kDVxe1TkwHAjDwLxwUvSdMEfVWW8j%2BGN9LvbB31x1QNw2ohfLev8MIcFkDXiMuD7s3ksoKV4xWhiI4alO74vgr52YbRDBY9vUW3VVOD1z6Q1NBXoHCheyoRXoDCojV2LhBSHAU4VtbN2hQ36aCsnl7rgo0irglS134Yh22rswHiiraics0MSiz8AYKjKHx&X-Amz-Signature=4092b1393ebfbdc8f37af080a5ac6f67c565aa7ece45f37afd08e278a651d446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
