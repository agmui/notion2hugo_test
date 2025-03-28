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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QCINK7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5rMLMFm%2BcR%2Bpr8jDceAdDgi5axugTvDSLQfbZ6QpQgIgW8Jhk5vqXSYTG5Umf3ID0zC9c9tzwwkD%2FwLfbu9OEy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIV04O5yP%2FztG7sNECrcAy%2BjschUgP0lGNkP9VVzKnp8FZPbs8SkHyOqlN2ilAawLOSB9n8vyU1UsiAShZ2Wphl0KXEy3ezDbHFTIq3dM5sOHknUkL20Xe9u0ksWGdYQlBGZ6fOT0oYtOfLwxMJ17HhsmSGNB1%2F7%2BR3tbInrS8W2GCvjynIgmZDxGP%2FmlLNBNe313A%2BdkwUn3rFmmY7Of5RVP%2FB9jgJ%2F7rpvVYJXnL7mi5GnzU9ziNM6mu%2BqI%2FXZxJ6kMV82NPHb1j67YJhmbS3lHnix%2BqRSRJFFajS2akySSET%2FxI2weHLC4wf%2FbmO80cHlAkRN9zGcTtUf3NJFgUuSDUKLjL7lZ4bKRl1IISjaox8QJ3SRqdLviF%2BRv64w%2B0x%2B1F6v4gmyR3jHsn6%2ByEzi2TD3Pg1Da8TE4PkVphLHdAKHgdyMmotCJzhVwx2R71ckQ2pBCROuoQ%2Bew%2BqQF0Tv8sMfgBo%2BFsSPG07luJXGh743muUUF%2B%2BJm9sawGUMrdt8Ib6s8kG4%2FeJhEKOaRxdz8VqAgAEoaKYz4Ly%2FMs6UXAVtrdaiRtSp3AFg21yM3vdj7vi2qt7bui3yP8GaPtIYm6FPq%2BIbxR2HL0mD%2BMhD6iKb7WBP%2F0ak1hpHomB0j28Lt2Nqorb5yy%2BcMIfEnL8GOqUBJwwHfL9TKLBYGkwCsEGYnJ9Rctt8%2BgDd47qh%2Fd14tYz3MpxjNdzijJolo1%2B5Bf%2FWzhxi4rIiT43vTU8FNpj%2Bu9n%2Fo0c5%2FG4ugWjaF7BOBvVoCTJf2zDF8fC7zmQfVfJSBTQfp1yCTUAagjh2E16nPuFSH3CReuvdofXHLIbkTsTjG7QIhS22U3qdlrSl%2BLSnA0DMR%2FZrqIaZuRfZLJSM9kblD059&X-Amz-Signature=eab6fe3308e193a1c146f64229ab5329d71d32f5891077193dd9b0bbb513711d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QCINK7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5rMLMFm%2BcR%2Bpr8jDceAdDgi5axugTvDSLQfbZ6QpQgIgW8Jhk5vqXSYTG5Umf3ID0zC9c9tzwwkD%2FwLfbu9OEy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIV04O5yP%2FztG7sNECrcAy%2BjschUgP0lGNkP9VVzKnp8FZPbs8SkHyOqlN2ilAawLOSB9n8vyU1UsiAShZ2Wphl0KXEy3ezDbHFTIq3dM5sOHknUkL20Xe9u0ksWGdYQlBGZ6fOT0oYtOfLwxMJ17HhsmSGNB1%2F7%2BR3tbInrS8W2GCvjynIgmZDxGP%2FmlLNBNe313A%2BdkwUn3rFmmY7Of5RVP%2FB9jgJ%2F7rpvVYJXnL7mi5GnzU9ziNM6mu%2BqI%2FXZxJ6kMV82NPHb1j67YJhmbS3lHnix%2BqRSRJFFajS2akySSET%2FxI2weHLC4wf%2FbmO80cHlAkRN9zGcTtUf3NJFgUuSDUKLjL7lZ4bKRl1IISjaox8QJ3SRqdLviF%2BRv64w%2B0x%2B1F6v4gmyR3jHsn6%2ByEzi2TD3Pg1Da8TE4PkVphLHdAKHgdyMmotCJzhVwx2R71ckQ2pBCROuoQ%2Bew%2BqQF0Tv8sMfgBo%2BFsSPG07luJXGh743muUUF%2B%2BJm9sawGUMrdt8Ib6s8kG4%2FeJhEKOaRxdz8VqAgAEoaKYz4Ly%2FMs6UXAVtrdaiRtSp3AFg21yM3vdj7vi2qt7bui3yP8GaPtIYm6FPq%2BIbxR2HL0mD%2BMhD6iKb7WBP%2F0ak1hpHomB0j28Lt2Nqorb5yy%2BcMIfEnL8GOqUBJwwHfL9TKLBYGkwCsEGYnJ9Rctt8%2BgDd47qh%2Fd14tYz3MpxjNdzijJolo1%2B5Bf%2FWzhxi4rIiT43vTU8FNpj%2Bu9n%2Fo0c5%2FG4ugWjaF7BOBvVoCTJf2zDF8fC7zmQfVfJSBTQfp1yCTUAagjh2E16nPuFSH3CReuvdofXHLIbkTsTjG7QIhS22U3qdlrSl%2BLSnA0DMR%2FZrqIaZuRfZLJSM9kblD059&X-Amz-Signature=af01b85bf873d4de58c21a1c5e6d25f1c99ffbbfdce25597d6c05c0539ff7d07&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QCINK7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5rMLMFm%2BcR%2Bpr8jDceAdDgi5axugTvDSLQfbZ6QpQgIgW8Jhk5vqXSYTG5Umf3ID0zC9c9tzwwkD%2FwLfbu9OEy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIV04O5yP%2FztG7sNECrcAy%2BjschUgP0lGNkP9VVzKnp8FZPbs8SkHyOqlN2ilAawLOSB9n8vyU1UsiAShZ2Wphl0KXEy3ezDbHFTIq3dM5sOHknUkL20Xe9u0ksWGdYQlBGZ6fOT0oYtOfLwxMJ17HhsmSGNB1%2F7%2BR3tbInrS8W2GCvjynIgmZDxGP%2FmlLNBNe313A%2BdkwUn3rFmmY7Of5RVP%2FB9jgJ%2F7rpvVYJXnL7mi5GnzU9ziNM6mu%2BqI%2FXZxJ6kMV82NPHb1j67YJhmbS3lHnix%2BqRSRJFFajS2akySSET%2FxI2weHLC4wf%2FbmO80cHlAkRN9zGcTtUf3NJFgUuSDUKLjL7lZ4bKRl1IISjaox8QJ3SRqdLviF%2BRv64w%2B0x%2B1F6v4gmyR3jHsn6%2ByEzi2TD3Pg1Da8TE4PkVphLHdAKHgdyMmotCJzhVwx2R71ckQ2pBCROuoQ%2Bew%2BqQF0Tv8sMfgBo%2BFsSPG07luJXGh743muUUF%2B%2BJm9sawGUMrdt8Ib6s8kG4%2FeJhEKOaRxdz8VqAgAEoaKYz4Ly%2FMs6UXAVtrdaiRtSp3AFg21yM3vdj7vi2qt7bui3yP8GaPtIYm6FPq%2BIbxR2HL0mD%2BMhD6iKb7WBP%2F0ak1hpHomB0j28Lt2Nqorb5yy%2BcMIfEnL8GOqUBJwwHfL9TKLBYGkwCsEGYnJ9Rctt8%2BgDd47qh%2Fd14tYz3MpxjNdzijJolo1%2B5Bf%2FWzhxi4rIiT43vTU8FNpj%2Bu9n%2Fo0c5%2FG4ugWjaF7BOBvVoCTJf2zDF8fC7zmQfVfJSBTQfp1yCTUAagjh2E16nPuFSH3CReuvdofXHLIbkTsTjG7QIhS22U3qdlrSl%2BLSnA0DMR%2FZrqIaZuRfZLJSM9kblD059&X-Amz-Signature=4096952ab736185adb54c59f7e1063631a71d94c36502632271bb756bad3c4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QCINK7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5rMLMFm%2BcR%2Bpr8jDceAdDgi5axugTvDSLQfbZ6QpQgIgW8Jhk5vqXSYTG5Umf3ID0zC9c9tzwwkD%2FwLfbu9OEy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIV04O5yP%2FztG7sNECrcAy%2BjschUgP0lGNkP9VVzKnp8FZPbs8SkHyOqlN2ilAawLOSB9n8vyU1UsiAShZ2Wphl0KXEy3ezDbHFTIq3dM5sOHknUkL20Xe9u0ksWGdYQlBGZ6fOT0oYtOfLwxMJ17HhsmSGNB1%2F7%2BR3tbInrS8W2GCvjynIgmZDxGP%2FmlLNBNe313A%2BdkwUn3rFmmY7Of5RVP%2FB9jgJ%2F7rpvVYJXnL7mi5GnzU9ziNM6mu%2BqI%2FXZxJ6kMV82NPHb1j67YJhmbS3lHnix%2BqRSRJFFajS2akySSET%2FxI2weHLC4wf%2FbmO80cHlAkRN9zGcTtUf3NJFgUuSDUKLjL7lZ4bKRl1IISjaox8QJ3SRqdLviF%2BRv64w%2B0x%2B1F6v4gmyR3jHsn6%2ByEzi2TD3Pg1Da8TE4PkVphLHdAKHgdyMmotCJzhVwx2R71ckQ2pBCROuoQ%2Bew%2BqQF0Tv8sMfgBo%2BFsSPG07luJXGh743muUUF%2B%2BJm9sawGUMrdt8Ib6s8kG4%2FeJhEKOaRxdz8VqAgAEoaKYz4Ly%2FMs6UXAVtrdaiRtSp3AFg21yM3vdj7vi2qt7bui3yP8GaPtIYm6FPq%2BIbxR2HL0mD%2BMhD6iKb7WBP%2F0ak1hpHomB0j28Lt2Nqorb5yy%2BcMIfEnL8GOqUBJwwHfL9TKLBYGkwCsEGYnJ9Rctt8%2BgDd47qh%2Fd14tYz3MpxjNdzijJolo1%2B5Bf%2FWzhxi4rIiT43vTU8FNpj%2Bu9n%2Fo0c5%2FG4ugWjaF7BOBvVoCTJf2zDF8fC7zmQfVfJSBTQfp1yCTUAagjh2E16nPuFSH3CReuvdofXHLIbkTsTjG7QIhS22U3qdlrSl%2BLSnA0DMR%2FZrqIaZuRfZLJSM9kblD059&X-Amz-Signature=b0fc5b4d8ec54fd179fbc120fa55a06f95193564e0e7857baf04f4328d2b6334&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QCINK7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5rMLMFm%2BcR%2Bpr8jDceAdDgi5axugTvDSLQfbZ6QpQgIgW8Jhk5vqXSYTG5Umf3ID0zC9c9tzwwkD%2FwLfbu9OEy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIV04O5yP%2FztG7sNECrcAy%2BjschUgP0lGNkP9VVzKnp8FZPbs8SkHyOqlN2ilAawLOSB9n8vyU1UsiAShZ2Wphl0KXEy3ezDbHFTIq3dM5sOHknUkL20Xe9u0ksWGdYQlBGZ6fOT0oYtOfLwxMJ17HhsmSGNB1%2F7%2BR3tbInrS8W2GCvjynIgmZDxGP%2FmlLNBNe313A%2BdkwUn3rFmmY7Of5RVP%2FB9jgJ%2F7rpvVYJXnL7mi5GnzU9ziNM6mu%2BqI%2FXZxJ6kMV82NPHb1j67YJhmbS3lHnix%2BqRSRJFFajS2akySSET%2FxI2weHLC4wf%2FbmO80cHlAkRN9zGcTtUf3NJFgUuSDUKLjL7lZ4bKRl1IISjaox8QJ3SRqdLviF%2BRv64w%2B0x%2B1F6v4gmyR3jHsn6%2ByEzi2TD3Pg1Da8TE4PkVphLHdAKHgdyMmotCJzhVwx2R71ckQ2pBCROuoQ%2Bew%2BqQF0Tv8sMfgBo%2BFsSPG07luJXGh743muUUF%2B%2BJm9sawGUMrdt8Ib6s8kG4%2FeJhEKOaRxdz8VqAgAEoaKYz4Ly%2FMs6UXAVtrdaiRtSp3AFg21yM3vdj7vi2qt7bui3yP8GaPtIYm6FPq%2BIbxR2HL0mD%2BMhD6iKb7WBP%2F0ak1hpHomB0j28Lt2Nqorb5yy%2BcMIfEnL8GOqUBJwwHfL9TKLBYGkwCsEGYnJ9Rctt8%2BgDd47qh%2Fd14tYz3MpxjNdzijJolo1%2B5Bf%2FWzhxi4rIiT43vTU8FNpj%2Bu9n%2Fo0c5%2FG4ugWjaF7BOBvVoCTJf2zDF8fC7zmQfVfJSBTQfp1yCTUAagjh2E16nPuFSH3CReuvdofXHLIbkTsTjG7QIhS22U3qdlrSl%2BLSnA0DMR%2FZrqIaZuRfZLJSM9kblD059&X-Amz-Signature=32249b7ba285658ce1bf0c9ea6d2a45ad33fc27343b15b67b457199e3d381cca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674QCINK7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5rMLMFm%2BcR%2Bpr8jDceAdDgi5axugTvDSLQfbZ6QpQgIgW8Jhk5vqXSYTG5Umf3ID0zC9c9tzwwkD%2FwLfbu9OEy4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIV04O5yP%2FztG7sNECrcAy%2BjschUgP0lGNkP9VVzKnp8FZPbs8SkHyOqlN2ilAawLOSB9n8vyU1UsiAShZ2Wphl0KXEy3ezDbHFTIq3dM5sOHknUkL20Xe9u0ksWGdYQlBGZ6fOT0oYtOfLwxMJ17HhsmSGNB1%2F7%2BR3tbInrS8W2GCvjynIgmZDxGP%2FmlLNBNe313A%2BdkwUn3rFmmY7Of5RVP%2FB9jgJ%2F7rpvVYJXnL7mi5GnzU9ziNM6mu%2BqI%2FXZxJ6kMV82NPHb1j67YJhmbS3lHnix%2BqRSRJFFajS2akySSET%2FxI2weHLC4wf%2FbmO80cHlAkRN9zGcTtUf3NJFgUuSDUKLjL7lZ4bKRl1IISjaox8QJ3SRqdLviF%2BRv64w%2B0x%2B1F6v4gmyR3jHsn6%2ByEzi2TD3Pg1Da8TE4PkVphLHdAKHgdyMmotCJzhVwx2R71ckQ2pBCROuoQ%2Bew%2BqQF0Tv8sMfgBo%2BFsSPG07luJXGh743muUUF%2B%2BJm9sawGUMrdt8Ib6s8kG4%2FeJhEKOaRxdz8VqAgAEoaKYz4Ly%2FMs6UXAVtrdaiRtSp3AFg21yM3vdj7vi2qt7bui3yP8GaPtIYm6FPq%2BIbxR2HL0mD%2BMhD6iKb7WBP%2F0ak1hpHomB0j28Lt2Nqorb5yy%2BcMIfEnL8GOqUBJwwHfL9TKLBYGkwCsEGYnJ9Rctt8%2BgDd47qh%2Fd14tYz3MpxjNdzijJolo1%2B5Bf%2FWzhxi4rIiT43vTU8FNpj%2Bu9n%2Fo0c5%2FG4ugWjaF7BOBvVoCTJf2zDF8fC7zmQfVfJSBTQfp1yCTUAagjh2E16nPuFSH3CReuvdofXHLIbkTsTjG7QIhS22U3qdlrSl%2BLSnA0DMR%2FZrqIaZuRfZLJSM9kblD059&X-Amz-Signature=71048d9f9db387fba1e6a11b73bb24baa7c89b27cba52bf6546f93147c9578ba&X-Amz-SignedHeaders=host&x-id=GetObject)
