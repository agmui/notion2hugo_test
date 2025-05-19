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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXKWV7Z%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraKe0KlXVi%2Bb9Ir1QiPqofBFITDj%2BN97wjs9ZwyALigIhAM0296WV7kCDdBFh5rX1Xf6JPMdc5oQUtdx%2BDQIJuoatKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BhWKkk8CGUSU4VIq3AMTjqDcj%2BMwvYQR%2F33Hua1A5QJoZpaMgQg7b59Wp%2BY26Nemwo3M1nN4EuoOs1U3MNsfY6mdamZyw1ogBL4OAjrrLs2rj%2BcG3tyXAL0eerbfyLSOaQgF1F%2BrcPDl9fb7Og4DyZ9pwaUkH3SWOJ%2BRNpON2ILop7gdoAHqf78Okq7Vk%2FAhBLvpkZUTPLlW1ObQUlj8mCXl%2B7sv7CTXvXpmKSBC0%2B2uBXszXaD1c%2Bql6imtfvYKsxxes3jSy%2BUezumKrP1qS8rLOHbvCu4ko%2FD7osuRIv9XndXdIvr%2FpJKT92vug8POMlB1NxIjnvdIAN8YfP1nHYQtxw1fK7L5b4IbzcP8Gvx8kaRqNKynoINWG7QZMDkmy0nBstLzjVYSYzYcOJ8tlGO7l%2F%2BBPz%2BFeUAGpqvagDhqoSgtUND%2BYJNf%2FKLTi6JlyefjY8ZjYxgPVOIAXkILJICXsBnxW4f4PBoG9pIgYeu6E0J5mvYClQayPW9pvcCWogr5VWMEGb03aB%2B%2Bz6LPj1nc%2Fd8a7u%2Fvoj66kN4khImu9B1A%2FmL%2FQl6wf8rez%2FW5r%2BRWYa4Ty1WYm9HDTA%2F2XKIoh%2FVEZI1cIPagWSrD3kV7Jl2Ss0%2Fx1f39drkb0tWTUhdbnMMn5LBhXTCa5azBBjqkATfiLt9P8658Zb%2BCuQb5tif3Svsg39tZP8mLbyBwgsD%2BIqKUP0Q2GVOgrES7lf0Iuan1Qa3NJ4GYsVjlo4Hl7rY9NM5oduDWnzjdwZDjaYxeKWxMJHjwyHiJHCYirfr01Z0M6TEC5dJX2%2Bzlke4DeUZZ%2FQb0SPTc71609wA2pvUvP0IHTyEm2aXxHGk%2FVtAB3NYXNIj8GV1L3LSpNoX9G4XfGRMa&X-Amz-Signature=918c8378c6d920e559969eb381d253212f62069cd1ef3268c35b8fa87019a666&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXKWV7Z%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraKe0KlXVi%2Bb9Ir1QiPqofBFITDj%2BN97wjs9ZwyALigIhAM0296WV7kCDdBFh5rX1Xf6JPMdc5oQUtdx%2BDQIJuoatKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BhWKkk8CGUSU4VIq3AMTjqDcj%2BMwvYQR%2F33Hua1A5QJoZpaMgQg7b59Wp%2BY26Nemwo3M1nN4EuoOs1U3MNsfY6mdamZyw1ogBL4OAjrrLs2rj%2BcG3tyXAL0eerbfyLSOaQgF1F%2BrcPDl9fb7Og4DyZ9pwaUkH3SWOJ%2BRNpON2ILop7gdoAHqf78Okq7Vk%2FAhBLvpkZUTPLlW1ObQUlj8mCXl%2B7sv7CTXvXpmKSBC0%2B2uBXszXaD1c%2Bql6imtfvYKsxxes3jSy%2BUezumKrP1qS8rLOHbvCu4ko%2FD7osuRIv9XndXdIvr%2FpJKT92vug8POMlB1NxIjnvdIAN8YfP1nHYQtxw1fK7L5b4IbzcP8Gvx8kaRqNKynoINWG7QZMDkmy0nBstLzjVYSYzYcOJ8tlGO7l%2F%2BBPz%2BFeUAGpqvagDhqoSgtUND%2BYJNf%2FKLTi6JlyefjY8ZjYxgPVOIAXkILJICXsBnxW4f4PBoG9pIgYeu6E0J5mvYClQayPW9pvcCWogr5VWMEGb03aB%2B%2Bz6LPj1nc%2Fd8a7u%2Fvoj66kN4khImu9B1A%2FmL%2FQl6wf8rez%2FW5r%2BRWYa4Ty1WYm9HDTA%2F2XKIoh%2FVEZI1cIPagWSrD3kV7Jl2Ss0%2Fx1f39drkb0tWTUhdbnMMn5LBhXTCa5azBBjqkATfiLt9P8658Zb%2BCuQb5tif3Svsg39tZP8mLbyBwgsD%2BIqKUP0Q2GVOgrES7lf0Iuan1Qa3NJ4GYsVjlo4Hl7rY9NM5oduDWnzjdwZDjaYxeKWxMJHjwyHiJHCYirfr01Z0M6TEC5dJX2%2Bzlke4DeUZZ%2FQb0SPTc71609wA2pvUvP0IHTyEm2aXxHGk%2FVtAB3NYXNIj8GV1L3LSpNoX9G4XfGRMa&X-Amz-Signature=dfec782d4aa64ad2d97f7e2183143f54ebe91005ff4ea40a9bf1e488c5652adc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXKWV7Z%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraKe0KlXVi%2Bb9Ir1QiPqofBFITDj%2BN97wjs9ZwyALigIhAM0296WV7kCDdBFh5rX1Xf6JPMdc5oQUtdx%2BDQIJuoatKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BhWKkk8CGUSU4VIq3AMTjqDcj%2BMwvYQR%2F33Hua1A5QJoZpaMgQg7b59Wp%2BY26Nemwo3M1nN4EuoOs1U3MNsfY6mdamZyw1ogBL4OAjrrLs2rj%2BcG3tyXAL0eerbfyLSOaQgF1F%2BrcPDl9fb7Og4DyZ9pwaUkH3SWOJ%2BRNpON2ILop7gdoAHqf78Okq7Vk%2FAhBLvpkZUTPLlW1ObQUlj8mCXl%2B7sv7CTXvXpmKSBC0%2B2uBXszXaD1c%2Bql6imtfvYKsxxes3jSy%2BUezumKrP1qS8rLOHbvCu4ko%2FD7osuRIv9XndXdIvr%2FpJKT92vug8POMlB1NxIjnvdIAN8YfP1nHYQtxw1fK7L5b4IbzcP8Gvx8kaRqNKynoINWG7QZMDkmy0nBstLzjVYSYzYcOJ8tlGO7l%2F%2BBPz%2BFeUAGpqvagDhqoSgtUND%2BYJNf%2FKLTi6JlyefjY8ZjYxgPVOIAXkILJICXsBnxW4f4PBoG9pIgYeu6E0J5mvYClQayPW9pvcCWogr5VWMEGb03aB%2B%2Bz6LPj1nc%2Fd8a7u%2Fvoj66kN4khImu9B1A%2FmL%2FQl6wf8rez%2FW5r%2BRWYa4Ty1WYm9HDTA%2F2XKIoh%2FVEZI1cIPagWSrD3kV7Jl2Ss0%2Fx1f39drkb0tWTUhdbnMMn5LBhXTCa5azBBjqkATfiLt9P8658Zb%2BCuQb5tif3Svsg39tZP8mLbyBwgsD%2BIqKUP0Q2GVOgrES7lf0Iuan1Qa3NJ4GYsVjlo4Hl7rY9NM5oduDWnzjdwZDjaYxeKWxMJHjwyHiJHCYirfr01Z0M6TEC5dJX2%2Bzlke4DeUZZ%2FQb0SPTc71609wA2pvUvP0IHTyEm2aXxHGk%2FVtAB3NYXNIj8GV1L3LSpNoX9G4XfGRMa&X-Amz-Signature=036d64a9a2dbedc04c1c115f19c7606f380f43762e98425d1608a6c0aa3d526a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXKWV7Z%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraKe0KlXVi%2Bb9Ir1QiPqofBFITDj%2BN97wjs9ZwyALigIhAM0296WV7kCDdBFh5rX1Xf6JPMdc5oQUtdx%2BDQIJuoatKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BhWKkk8CGUSU4VIq3AMTjqDcj%2BMwvYQR%2F33Hua1A5QJoZpaMgQg7b59Wp%2BY26Nemwo3M1nN4EuoOs1U3MNsfY6mdamZyw1ogBL4OAjrrLs2rj%2BcG3tyXAL0eerbfyLSOaQgF1F%2BrcPDl9fb7Og4DyZ9pwaUkH3SWOJ%2BRNpON2ILop7gdoAHqf78Okq7Vk%2FAhBLvpkZUTPLlW1ObQUlj8mCXl%2B7sv7CTXvXpmKSBC0%2B2uBXszXaD1c%2Bql6imtfvYKsxxes3jSy%2BUezumKrP1qS8rLOHbvCu4ko%2FD7osuRIv9XndXdIvr%2FpJKT92vug8POMlB1NxIjnvdIAN8YfP1nHYQtxw1fK7L5b4IbzcP8Gvx8kaRqNKynoINWG7QZMDkmy0nBstLzjVYSYzYcOJ8tlGO7l%2F%2BBPz%2BFeUAGpqvagDhqoSgtUND%2BYJNf%2FKLTi6JlyefjY8ZjYxgPVOIAXkILJICXsBnxW4f4PBoG9pIgYeu6E0J5mvYClQayPW9pvcCWogr5VWMEGb03aB%2B%2Bz6LPj1nc%2Fd8a7u%2Fvoj66kN4khImu9B1A%2FmL%2FQl6wf8rez%2FW5r%2BRWYa4Ty1WYm9HDTA%2F2XKIoh%2FVEZI1cIPagWSrD3kV7Jl2Ss0%2Fx1f39drkb0tWTUhdbnMMn5LBhXTCa5azBBjqkATfiLt9P8658Zb%2BCuQb5tif3Svsg39tZP8mLbyBwgsD%2BIqKUP0Q2GVOgrES7lf0Iuan1Qa3NJ4GYsVjlo4Hl7rY9NM5oduDWnzjdwZDjaYxeKWxMJHjwyHiJHCYirfr01Z0M6TEC5dJX2%2Bzlke4DeUZZ%2FQb0SPTc71609wA2pvUvP0IHTyEm2aXxHGk%2FVtAB3NYXNIj8GV1L3LSpNoX9G4XfGRMa&X-Amz-Signature=816629cb9a48932b184fb8ec6ad33a04800e534f8101a204e1e91a0b6262f8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXKWV7Z%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraKe0KlXVi%2Bb9Ir1QiPqofBFITDj%2BN97wjs9ZwyALigIhAM0296WV7kCDdBFh5rX1Xf6JPMdc5oQUtdx%2BDQIJuoatKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BhWKkk8CGUSU4VIq3AMTjqDcj%2BMwvYQR%2F33Hua1A5QJoZpaMgQg7b59Wp%2BY26Nemwo3M1nN4EuoOs1U3MNsfY6mdamZyw1ogBL4OAjrrLs2rj%2BcG3tyXAL0eerbfyLSOaQgF1F%2BrcPDl9fb7Og4DyZ9pwaUkH3SWOJ%2BRNpON2ILop7gdoAHqf78Okq7Vk%2FAhBLvpkZUTPLlW1ObQUlj8mCXl%2B7sv7CTXvXpmKSBC0%2B2uBXszXaD1c%2Bql6imtfvYKsxxes3jSy%2BUezumKrP1qS8rLOHbvCu4ko%2FD7osuRIv9XndXdIvr%2FpJKT92vug8POMlB1NxIjnvdIAN8YfP1nHYQtxw1fK7L5b4IbzcP8Gvx8kaRqNKynoINWG7QZMDkmy0nBstLzjVYSYzYcOJ8tlGO7l%2F%2BBPz%2BFeUAGpqvagDhqoSgtUND%2BYJNf%2FKLTi6JlyefjY8ZjYxgPVOIAXkILJICXsBnxW4f4PBoG9pIgYeu6E0J5mvYClQayPW9pvcCWogr5VWMEGb03aB%2B%2Bz6LPj1nc%2Fd8a7u%2Fvoj66kN4khImu9B1A%2FmL%2FQl6wf8rez%2FW5r%2BRWYa4Ty1WYm9HDTA%2F2XKIoh%2FVEZI1cIPagWSrD3kV7Jl2Ss0%2Fx1f39drkb0tWTUhdbnMMn5LBhXTCa5azBBjqkATfiLt9P8658Zb%2BCuQb5tif3Svsg39tZP8mLbyBwgsD%2BIqKUP0Q2GVOgrES7lf0Iuan1Qa3NJ4GYsVjlo4Hl7rY9NM5oduDWnzjdwZDjaYxeKWxMJHjwyHiJHCYirfr01Z0M6TEC5dJX2%2Bzlke4DeUZZ%2FQb0SPTc71609wA2pvUvP0IHTyEm2aXxHGk%2FVtAB3NYXNIj8GV1L3LSpNoX9G4XfGRMa&X-Amz-Signature=af3a479ba6cd84c44b9f74e37a5408a851ee8fb2edcb4e104d413f0f2cb3de93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXKWV7Z%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraKe0KlXVi%2Bb9Ir1QiPqofBFITDj%2BN97wjs9ZwyALigIhAM0296WV7kCDdBFh5rX1Xf6JPMdc5oQUtdx%2BDQIJuoatKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BhWKkk8CGUSU4VIq3AMTjqDcj%2BMwvYQR%2F33Hua1A5QJoZpaMgQg7b59Wp%2BY26Nemwo3M1nN4EuoOs1U3MNsfY6mdamZyw1ogBL4OAjrrLs2rj%2BcG3tyXAL0eerbfyLSOaQgF1F%2BrcPDl9fb7Og4DyZ9pwaUkH3SWOJ%2BRNpON2ILop7gdoAHqf78Okq7Vk%2FAhBLvpkZUTPLlW1ObQUlj8mCXl%2B7sv7CTXvXpmKSBC0%2B2uBXszXaD1c%2Bql6imtfvYKsxxes3jSy%2BUezumKrP1qS8rLOHbvCu4ko%2FD7osuRIv9XndXdIvr%2FpJKT92vug8POMlB1NxIjnvdIAN8YfP1nHYQtxw1fK7L5b4IbzcP8Gvx8kaRqNKynoINWG7QZMDkmy0nBstLzjVYSYzYcOJ8tlGO7l%2F%2BBPz%2BFeUAGpqvagDhqoSgtUND%2BYJNf%2FKLTi6JlyefjY8ZjYxgPVOIAXkILJICXsBnxW4f4PBoG9pIgYeu6E0J5mvYClQayPW9pvcCWogr5VWMEGb03aB%2B%2Bz6LPj1nc%2Fd8a7u%2Fvoj66kN4khImu9B1A%2FmL%2FQl6wf8rez%2FW5r%2BRWYa4Ty1WYm9HDTA%2F2XKIoh%2FVEZI1cIPagWSrD3kV7Jl2Ss0%2Fx1f39drkb0tWTUhdbnMMn5LBhXTCa5azBBjqkATfiLt9P8658Zb%2BCuQb5tif3Svsg39tZP8mLbyBwgsD%2BIqKUP0Q2GVOgrES7lf0Iuan1Qa3NJ4GYsVjlo4Hl7rY9NM5oduDWnzjdwZDjaYxeKWxMJHjwyHiJHCYirfr01Z0M6TEC5dJX2%2Bzlke4DeUZZ%2FQb0SPTc71609wA2pvUvP0IHTyEm2aXxHGk%2FVtAB3NYXNIj8GV1L3LSpNoX9G4XfGRMa&X-Amz-Signature=9b7574d8e292d1a9074752e167ec50732994da7c31a845e2f2a6b5a584458d5d&X-Amz-SignedHeaders=host&x-id=GetObject)
