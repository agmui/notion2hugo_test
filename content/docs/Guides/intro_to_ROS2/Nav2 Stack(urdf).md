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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273OVGWZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB4tkbiP6i6EFsbWuZ%2FjE25EgnNiDc3gPO2DZXRs6MVtAiEAoGCVLphQF2p51inMo54ZtQPym9URfp%2BT1mMV6hiuKtcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlyULcAqhrZ0HkLqCrcA%2FcSGwz0Fj%2FywMuW%2BG3sLJ68pRWOFDl11grFBxfM6QC6f9rCzmHKuJlE1RvHlbZSdoJNoQm%2B%2BvQTVs12d1flqHgJSKd39eo%2F6hO3CTHz7t3hTcajqS3WXn%2FZvD4a9J3xmCiv0n%2FkXqBa1BCGPw5nks6BGqHuHFIMTJVdDhVDRLPOIUxsNOzqF%2FnBwEKqpp9asd%2Fmfrr6X7YbsR2uL8V94jqxn1wZUtFDWVsb81QXNCfHn8IyeIn6SLnfrZ6Tod3CyBDkbYHTZNaFSwbH8%2BuLpJZ55YVHHqV2srzWHc7wWxRl03S7XrtzgS29I%2F5huRXGvlk2iBlRf8fKGE1Qf7ZrLwR7RXrpdOcHaXUnvAVm%2FUzpqYgNtjxd84ityZMBJJZ%2Fag67RqCf97HYTpMBRUCb15XMnnN8gIwaOS8dFuiqdm56ElCyugFXL3XZtDmqOoKVZPjmUVeS67oXhiSvPzvs%2BXTTOSF%2BcZyo4IaX5HSkL4Bi9EMYlgPRF%2B3JHOZxNlLtLnFf56A3kFdv92sQlBFwVE%2FzKCXKU9OSFKhV7a2Lqzkhe3VWXDZO0Z%2FWwG%2BpoTKcpQS5qbsZS%2BxuyYZLh2suoLtI8FB%2FwxJhPv98KiPKB42s9VEBLo5c%2BJnB%2Fy1SMOTM1L0GOqUBccN4ssG97TFJpF%2BMF3a%2Bu3scpJ%2Bv9YWZjJW8tlKGKwepc4tebW21u%2Bjj6E56pqI7mM6tcEK%2BsFAODw%2BmrgqBRozrmt6M01EStBCzCbqUEV5x8RCGfgMYynnxqhaUW%2Fa2HYPF4INuPdtSOQKqeGrVIXUoT%2Fcg1JrWn0CQl04kIjcZgFRYHMIGODCQMSN9mtn3Tebb0pHnTvTGWus2cVjLGDdUCU4w&X-Amz-Signature=29b873d8daa5a841c686ce84c76fb49302e000b73218bdced1acfaeb42814a14&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273OVGWZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB4tkbiP6i6EFsbWuZ%2FjE25EgnNiDc3gPO2DZXRs6MVtAiEAoGCVLphQF2p51inMo54ZtQPym9URfp%2BT1mMV6hiuKtcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlyULcAqhrZ0HkLqCrcA%2FcSGwz0Fj%2FywMuW%2BG3sLJ68pRWOFDl11grFBxfM6QC6f9rCzmHKuJlE1RvHlbZSdoJNoQm%2B%2BvQTVs12d1flqHgJSKd39eo%2F6hO3CTHz7t3hTcajqS3WXn%2FZvD4a9J3xmCiv0n%2FkXqBa1BCGPw5nks6BGqHuHFIMTJVdDhVDRLPOIUxsNOzqF%2FnBwEKqpp9asd%2Fmfrr6X7YbsR2uL8V94jqxn1wZUtFDWVsb81QXNCfHn8IyeIn6SLnfrZ6Tod3CyBDkbYHTZNaFSwbH8%2BuLpJZ55YVHHqV2srzWHc7wWxRl03S7XrtzgS29I%2F5huRXGvlk2iBlRf8fKGE1Qf7ZrLwR7RXrpdOcHaXUnvAVm%2FUzpqYgNtjxd84ityZMBJJZ%2Fag67RqCf97HYTpMBRUCb15XMnnN8gIwaOS8dFuiqdm56ElCyugFXL3XZtDmqOoKVZPjmUVeS67oXhiSvPzvs%2BXTTOSF%2BcZyo4IaX5HSkL4Bi9EMYlgPRF%2B3JHOZxNlLtLnFf56A3kFdv92sQlBFwVE%2FzKCXKU9OSFKhV7a2Lqzkhe3VWXDZO0Z%2FWwG%2BpoTKcpQS5qbsZS%2BxuyYZLh2suoLtI8FB%2FwxJhPv98KiPKB42s9VEBLo5c%2BJnB%2Fy1SMOTM1L0GOqUBccN4ssG97TFJpF%2BMF3a%2Bu3scpJ%2Bv9YWZjJW8tlKGKwepc4tebW21u%2Bjj6E56pqI7mM6tcEK%2BsFAODw%2BmrgqBRozrmt6M01EStBCzCbqUEV5x8RCGfgMYynnxqhaUW%2Fa2HYPF4INuPdtSOQKqeGrVIXUoT%2Fcg1JrWn0CQl04kIjcZgFRYHMIGODCQMSN9mtn3Tebb0pHnTvTGWus2cVjLGDdUCU4w&X-Amz-Signature=cb354cfdfdbea9db556e60b77ca8dc69d993abb54726a561d52bbcb24d586ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273OVGWZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB4tkbiP6i6EFsbWuZ%2FjE25EgnNiDc3gPO2DZXRs6MVtAiEAoGCVLphQF2p51inMo54ZtQPym9URfp%2BT1mMV6hiuKtcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlyULcAqhrZ0HkLqCrcA%2FcSGwz0Fj%2FywMuW%2BG3sLJ68pRWOFDl11grFBxfM6QC6f9rCzmHKuJlE1RvHlbZSdoJNoQm%2B%2BvQTVs12d1flqHgJSKd39eo%2F6hO3CTHz7t3hTcajqS3WXn%2FZvD4a9J3xmCiv0n%2FkXqBa1BCGPw5nks6BGqHuHFIMTJVdDhVDRLPOIUxsNOzqF%2FnBwEKqpp9asd%2Fmfrr6X7YbsR2uL8V94jqxn1wZUtFDWVsb81QXNCfHn8IyeIn6SLnfrZ6Tod3CyBDkbYHTZNaFSwbH8%2BuLpJZ55YVHHqV2srzWHc7wWxRl03S7XrtzgS29I%2F5huRXGvlk2iBlRf8fKGE1Qf7ZrLwR7RXrpdOcHaXUnvAVm%2FUzpqYgNtjxd84ityZMBJJZ%2Fag67RqCf97HYTpMBRUCb15XMnnN8gIwaOS8dFuiqdm56ElCyugFXL3XZtDmqOoKVZPjmUVeS67oXhiSvPzvs%2BXTTOSF%2BcZyo4IaX5HSkL4Bi9EMYlgPRF%2B3JHOZxNlLtLnFf56A3kFdv92sQlBFwVE%2FzKCXKU9OSFKhV7a2Lqzkhe3VWXDZO0Z%2FWwG%2BpoTKcpQS5qbsZS%2BxuyYZLh2suoLtI8FB%2FwxJhPv98KiPKB42s9VEBLo5c%2BJnB%2Fy1SMOTM1L0GOqUBccN4ssG97TFJpF%2BMF3a%2Bu3scpJ%2Bv9YWZjJW8tlKGKwepc4tebW21u%2Bjj6E56pqI7mM6tcEK%2BsFAODw%2BmrgqBRozrmt6M01EStBCzCbqUEV5x8RCGfgMYynnxqhaUW%2Fa2HYPF4INuPdtSOQKqeGrVIXUoT%2Fcg1JrWn0CQl04kIjcZgFRYHMIGODCQMSN9mtn3Tebb0pHnTvTGWus2cVjLGDdUCU4w&X-Amz-Signature=ac5ccaea520041c93e6959fae4407d396a6784147dada73f85bbf46fb9fe9a32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273OVGWZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB4tkbiP6i6EFsbWuZ%2FjE25EgnNiDc3gPO2DZXRs6MVtAiEAoGCVLphQF2p51inMo54ZtQPym9URfp%2BT1mMV6hiuKtcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlyULcAqhrZ0HkLqCrcA%2FcSGwz0Fj%2FywMuW%2BG3sLJ68pRWOFDl11grFBxfM6QC6f9rCzmHKuJlE1RvHlbZSdoJNoQm%2B%2BvQTVs12d1flqHgJSKd39eo%2F6hO3CTHz7t3hTcajqS3WXn%2FZvD4a9J3xmCiv0n%2FkXqBa1BCGPw5nks6BGqHuHFIMTJVdDhVDRLPOIUxsNOzqF%2FnBwEKqpp9asd%2Fmfrr6X7YbsR2uL8V94jqxn1wZUtFDWVsb81QXNCfHn8IyeIn6SLnfrZ6Tod3CyBDkbYHTZNaFSwbH8%2BuLpJZ55YVHHqV2srzWHc7wWxRl03S7XrtzgS29I%2F5huRXGvlk2iBlRf8fKGE1Qf7ZrLwR7RXrpdOcHaXUnvAVm%2FUzpqYgNtjxd84ityZMBJJZ%2Fag67RqCf97HYTpMBRUCb15XMnnN8gIwaOS8dFuiqdm56ElCyugFXL3XZtDmqOoKVZPjmUVeS67oXhiSvPzvs%2BXTTOSF%2BcZyo4IaX5HSkL4Bi9EMYlgPRF%2B3JHOZxNlLtLnFf56A3kFdv92sQlBFwVE%2FzKCXKU9OSFKhV7a2Lqzkhe3VWXDZO0Z%2FWwG%2BpoTKcpQS5qbsZS%2BxuyYZLh2suoLtI8FB%2FwxJhPv98KiPKB42s9VEBLo5c%2BJnB%2Fy1SMOTM1L0GOqUBccN4ssG97TFJpF%2BMF3a%2Bu3scpJ%2Bv9YWZjJW8tlKGKwepc4tebW21u%2Bjj6E56pqI7mM6tcEK%2BsFAODw%2BmrgqBRozrmt6M01EStBCzCbqUEV5x8RCGfgMYynnxqhaUW%2Fa2HYPF4INuPdtSOQKqeGrVIXUoT%2Fcg1JrWn0CQl04kIjcZgFRYHMIGODCQMSN9mtn3Tebb0pHnTvTGWus2cVjLGDdUCU4w&X-Amz-Signature=1ce38771d8217406fdf9432cf7c4a2e5f4e863f99bf3722eb3774f9a9d4ce168&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273OVGWZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB4tkbiP6i6EFsbWuZ%2FjE25EgnNiDc3gPO2DZXRs6MVtAiEAoGCVLphQF2p51inMo54ZtQPym9URfp%2BT1mMV6hiuKtcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlyULcAqhrZ0HkLqCrcA%2FcSGwz0Fj%2FywMuW%2BG3sLJ68pRWOFDl11grFBxfM6QC6f9rCzmHKuJlE1RvHlbZSdoJNoQm%2B%2BvQTVs12d1flqHgJSKd39eo%2F6hO3CTHz7t3hTcajqS3WXn%2FZvD4a9J3xmCiv0n%2FkXqBa1BCGPw5nks6BGqHuHFIMTJVdDhVDRLPOIUxsNOzqF%2FnBwEKqpp9asd%2Fmfrr6X7YbsR2uL8V94jqxn1wZUtFDWVsb81QXNCfHn8IyeIn6SLnfrZ6Tod3CyBDkbYHTZNaFSwbH8%2BuLpJZ55YVHHqV2srzWHc7wWxRl03S7XrtzgS29I%2F5huRXGvlk2iBlRf8fKGE1Qf7ZrLwR7RXrpdOcHaXUnvAVm%2FUzpqYgNtjxd84ityZMBJJZ%2Fag67RqCf97HYTpMBRUCb15XMnnN8gIwaOS8dFuiqdm56ElCyugFXL3XZtDmqOoKVZPjmUVeS67oXhiSvPzvs%2BXTTOSF%2BcZyo4IaX5HSkL4Bi9EMYlgPRF%2B3JHOZxNlLtLnFf56A3kFdv92sQlBFwVE%2FzKCXKU9OSFKhV7a2Lqzkhe3VWXDZO0Z%2FWwG%2BpoTKcpQS5qbsZS%2BxuyYZLh2suoLtI8FB%2FwxJhPv98KiPKB42s9VEBLo5c%2BJnB%2Fy1SMOTM1L0GOqUBccN4ssG97TFJpF%2BMF3a%2Bu3scpJ%2Bv9YWZjJW8tlKGKwepc4tebW21u%2Bjj6E56pqI7mM6tcEK%2BsFAODw%2BmrgqBRozrmt6M01EStBCzCbqUEV5x8RCGfgMYynnxqhaUW%2Fa2HYPF4INuPdtSOQKqeGrVIXUoT%2Fcg1JrWn0CQl04kIjcZgFRYHMIGODCQMSN9mtn3Tebb0pHnTvTGWus2cVjLGDdUCU4w&X-Amz-Signature=ee4c51e9c4d7e3b90d284e64fecde330c941ad34158bc10b03a628c5ed2a3c15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273OVGWZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB4tkbiP6i6EFsbWuZ%2FjE25EgnNiDc3gPO2DZXRs6MVtAiEAoGCVLphQF2p51inMo54ZtQPym9URfp%2BT1mMV6hiuKtcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlyULcAqhrZ0HkLqCrcA%2FcSGwz0Fj%2FywMuW%2BG3sLJ68pRWOFDl11grFBxfM6QC6f9rCzmHKuJlE1RvHlbZSdoJNoQm%2B%2BvQTVs12d1flqHgJSKd39eo%2F6hO3CTHz7t3hTcajqS3WXn%2FZvD4a9J3xmCiv0n%2FkXqBa1BCGPw5nks6BGqHuHFIMTJVdDhVDRLPOIUxsNOzqF%2FnBwEKqpp9asd%2Fmfrr6X7YbsR2uL8V94jqxn1wZUtFDWVsb81QXNCfHn8IyeIn6SLnfrZ6Tod3CyBDkbYHTZNaFSwbH8%2BuLpJZ55YVHHqV2srzWHc7wWxRl03S7XrtzgS29I%2F5huRXGvlk2iBlRf8fKGE1Qf7ZrLwR7RXrpdOcHaXUnvAVm%2FUzpqYgNtjxd84ityZMBJJZ%2Fag67RqCf97HYTpMBRUCb15XMnnN8gIwaOS8dFuiqdm56ElCyugFXL3XZtDmqOoKVZPjmUVeS67oXhiSvPzvs%2BXTTOSF%2BcZyo4IaX5HSkL4Bi9EMYlgPRF%2B3JHOZxNlLtLnFf56A3kFdv92sQlBFwVE%2FzKCXKU9OSFKhV7a2Lqzkhe3VWXDZO0Z%2FWwG%2BpoTKcpQS5qbsZS%2BxuyYZLh2suoLtI8FB%2FwxJhPv98KiPKB42s9VEBLo5c%2BJnB%2Fy1SMOTM1L0GOqUBccN4ssG97TFJpF%2BMF3a%2Bu3scpJ%2Bv9YWZjJW8tlKGKwepc4tebW21u%2Bjj6E56pqI7mM6tcEK%2BsFAODw%2BmrgqBRozrmt6M01EStBCzCbqUEV5x8RCGfgMYynnxqhaUW%2Fa2HYPF4INuPdtSOQKqeGrVIXUoT%2Fcg1JrWn0CQl04kIjcZgFRYHMIGODCQMSN9mtn3Tebb0pHnTvTGWus2cVjLGDdUCU4w&X-Amz-Signature=d8537059fe9de34a5feb396b39a65f40e01508d52d89c8c8a28617f71536b949&X-Amz-SignedHeaders=host&x-id=GetObject)
