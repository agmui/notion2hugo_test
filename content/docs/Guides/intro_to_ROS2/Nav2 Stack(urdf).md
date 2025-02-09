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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4KZAXK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL5AUY1CmsoMzE61w075o%2F0ZKPwUjDh%2BbWc0mNQ2rsjAiEA%2BZq4qzd2AKlc8GQRA8KzgEMTIMpZ5hLmB5ppAi8Y5FsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNZr9CMamzyIyXRqCrcAxPvhiAve3o8LO%2B1gxnpaBLTvCK5YE%2FzcHkXGp9kqXSnsfdeus7%2BSYLMLyhJCpGaz6%2B7xbsm68wvIIn2YzF43CGf%2FoHGrwLw%2F7fHnyjsG2eofWV0q1LhNO2DwPv3hD6F7V4sfI2x%2FcS4Cy9oxfbUKKSDdxOIj7ViztAFWo36suPIe%2FA1GS57TvXhgHEab9pcs0bSdg0cHhCTInwlhXBEIb95K76hB9zwWuPE%2BR3IJZ%2FN915MKgtLV%2Beo83KDw1wqR0P0rf5pSNO9o%2BDDSc2K3hp9rpen8tdsLn0D3i9gRuGpXJa3Doup06B37vEOswirsADDL3AL%2Fxr8%2B2eZLWJutpt35hLFxKovTWvtmDMRInYqKdu1%2Fi2BWwalN382ITA2SeQGamyx%2BZxhmXlat2wSW94bk6drkc3Nxnu1Zstu9Olc6EfR1ZiixA%2FbCD9nRfHzfSGyPtKC136qeMFMCNkhaCj3U94Q8i3k0oIqBwwY4CAyf8FmHcgEM80L%2FKeVBs83DPnqWywLoL9cQS357Q7gpS9RD8bu%2BHW8XMPySkiBUEFaw5vIY%2BMNhQCKIoJkWtCTYpDHKTsAnqq82Cudt3RFSwIhuPthX3YCrvYPRtxenwsDlF6K4tHVKqvR8kMfMOHjob0GOqUBKnM7zaeddy%2BnJ906SfoOhEKo4oWI%2F1EhellNrgG9xubA%2BK3loTkAZse4uC8s4Ukh51Idni2skns61D%2FtnUEJyce49wzz4nYY%2F7eHFk%2BMykiRlvxVfkv5msT3QbPyBAhgoXKQ6OkTvUJqDxlQhD4SnEJOPlFFK7LIKH%2FT1oJbj%2BBhn%2B8qQR1noMKYgrfciLPnwyiUv9mxqZkglu4KMDGLHD8jwyfj&X-Amz-Signature=42bf1de46135558c1d449916a6c314e3d49ef7c6cbe86a564c9676f72f3b7ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4KZAXK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL5AUY1CmsoMzE61w075o%2F0ZKPwUjDh%2BbWc0mNQ2rsjAiEA%2BZq4qzd2AKlc8GQRA8KzgEMTIMpZ5hLmB5ppAi8Y5FsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNZr9CMamzyIyXRqCrcAxPvhiAve3o8LO%2B1gxnpaBLTvCK5YE%2FzcHkXGp9kqXSnsfdeus7%2BSYLMLyhJCpGaz6%2B7xbsm68wvIIn2YzF43CGf%2FoHGrwLw%2F7fHnyjsG2eofWV0q1LhNO2DwPv3hD6F7V4sfI2x%2FcS4Cy9oxfbUKKSDdxOIj7ViztAFWo36suPIe%2FA1GS57TvXhgHEab9pcs0bSdg0cHhCTInwlhXBEIb95K76hB9zwWuPE%2BR3IJZ%2FN915MKgtLV%2Beo83KDw1wqR0P0rf5pSNO9o%2BDDSc2K3hp9rpen8tdsLn0D3i9gRuGpXJa3Doup06B37vEOswirsADDL3AL%2Fxr8%2B2eZLWJutpt35hLFxKovTWvtmDMRInYqKdu1%2Fi2BWwalN382ITA2SeQGamyx%2BZxhmXlat2wSW94bk6drkc3Nxnu1Zstu9Olc6EfR1ZiixA%2FbCD9nRfHzfSGyPtKC136qeMFMCNkhaCj3U94Q8i3k0oIqBwwY4CAyf8FmHcgEM80L%2FKeVBs83DPnqWywLoL9cQS357Q7gpS9RD8bu%2BHW8XMPySkiBUEFaw5vIY%2BMNhQCKIoJkWtCTYpDHKTsAnqq82Cudt3RFSwIhuPthX3YCrvYPRtxenwsDlF6K4tHVKqvR8kMfMOHjob0GOqUBKnM7zaeddy%2BnJ906SfoOhEKo4oWI%2F1EhellNrgG9xubA%2BK3loTkAZse4uC8s4Ukh51Idni2skns61D%2FtnUEJyce49wzz4nYY%2F7eHFk%2BMykiRlvxVfkv5msT3QbPyBAhgoXKQ6OkTvUJqDxlQhD4SnEJOPlFFK7LIKH%2FT1oJbj%2BBhn%2B8qQR1noMKYgrfciLPnwyiUv9mxqZkglu4KMDGLHD8jwyfj&X-Amz-Signature=2f6707ae15de961052c8a7c5c4833029408416aae925a90d258a0648585ad5e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4KZAXK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL5AUY1CmsoMzE61w075o%2F0ZKPwUjDh%2BbWc0mNQ2rsjAiEA%2BZq4qzd2AKlc8GQRA8KzgEMTIMpZ5hLmB5ppAi8Y5FsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNZr9CMamzyIyXRqCrcAxPvhiAve3o8LO%2B1gxnpaBLTvCK5YE%2FzcHkXGp9kqXSnsfdeus7%2BSYLMLyhJCpGaz6%2B7xbsm68wvIIn2YzF43CGf%2FoHGrwLw%2F7fHnyjsG2eofWV0q1LhNO2DwPv3hD6F7V4sfI2x%2FcS4Cy9oxfbUKKSDdxOIj7ViztAFWo36suPIe%2FA1GS57TvXhgHEab9pcs0bSdg0cHhCTInwlhXBEIb95K76hB9zwWuPE%2BR3IJZ%2FN915MKgtLV%2Beo83KDw1wqR0P0rf5pSNO9o%2BDDSc2K3hp9rpen8tdsLn0D3i9gRuGpXJa3Doup06B37vEOswirsADDL3AL%2Fxr8%2B2eZLWJutpt35hLFxKovTWvtmDMRInYqKdu1%2Fi2BWwalN382ITA2SeQGamyx%2BZxhmXlat2wSW94bk6drkc3Nxnu1Zstu9Olc6EfR1ZiixA%2FbCD9nRfHzfSGyPtKC136qeMFMCNkhaCj3U94Q8i3k0oIqBwwY4CAyf8FmHcgEM80L%2FKeVBs83DPnqWywLoL9cQS357Q7gpS9RD8bu%2BHW8XMPySkiBUEFaw5vIY%2BMNhQCKIoJkWtCTYpDHKTsAnqq82Cudt3RFSwIhuPthX3YCrvYPRtxenwsDlF6K4tHVKqvR8kMfMOHjob0GOqUBKnM7zaeddy%2BnJ906SfoOhEKo4oWI%2F1EhellNrgG9xubA%2BK3loTkAZse4uC8s4Ukh51Idni2skns61D%2FtnUEJyce49wzz4nYY%2F7eHFk%2BMykiRlvxVfkv5msT3QbPyBAhgoXKQ6OkTvUJqDxlQhD4SnEJOPlFFK7LIKH%2FT1oJbj%2BBhn%2B8qQR1noMKYgrfciLPnwyiUv9mxqZkglu4KMDGLHD8jwyfj&X-Amz-Signature=a6ecfbea2c7e2d846ac6ea054b771dfac5827bcfa34f79fb89bb9ff00285eb68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4KZAXK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL5AUY1CmsoMzE61w075o%2F0ZKPwUjDh%2BbWc0mNQ2rsjAiEA%2BZq4qzd2AKlc8GQRA8KzgEMTIMpZ5hLmB5ppAi8Y5FsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNZr9CMamzyIyXRqCrcAxPvhiAve3o8LO%2B1gxnpaBLTvCK5YE%2FzcHkXGp9kqXSnsfdeus7%2BSYLMLyhJCpGaz6%2B7xbsm68wvIIn2YzF43CGf%2FoHGrwLw%2F7fHnyjsG2eofWV0q1LhNO2DwPv3hD6F7V4sfI2x%2FcS4Cy9oxfbUKKSDdxOIj7ViztAFWo36suPIe%2FA1GS57TvXhgHEab9pcs0bSdg0cHhCTInwlhXBEIb95K76hB9zwWuPE%2BR3IJZ%2FN915MKgtLV%2Beo83KDw1wqR0P0rf5pSNO9o%2BDDSc2K3hp9rpen8tdsLn0D3i9gRuGpXJa3Doup06B37vEOswirsADDL3AL%2Fxr8%2B2eZLWJutpt35hLFxKovTWvtmDMRInYqKdu1%2Fi2BWwalN382ITA2SeQGamyx%2BZxhmXlat2wSW94bk6drkc3Nxnu1Zstu9Olc6EfR1ZiixA%2FbCD9nRfHzfSGyPtKC136qeMFMCNkhaCj3U94Q8i3k0oIqBwwY4CAyf8FmHcgEM80L%2FKeVBs83DPnqWywLoL9cQS357Q7gpS9RD8bu%2BHW8XMPySkiBUEFaw5vIY%2BMNhQCKIoJkWtCTYpDHKTsAnqq82Cudt3RFSwIhuPthX3YCrvYPRtxenwsDlF6K4tHVKqvR8kMfMOHjob0GOqUBKnM7zaeddy%2BnJ906SfoOhEKo4oWI%2F1EhellNrgG9xubA%2BK3loTkAZse4uC8s4Ukh51Idni2skns61D%2FtnUEJyce49wzz4nYY%2F7eHFk%2BMykiRlvxVfkv5msT3QbPyBAhgoXKQ6OkTvUJqDxlQhD4SnEJOPlFFK7LIKH%2FT1oJbj%2BBhn%2B8qQR1noMKYgrfciLPnwyiUv9mxqZkglu4KMDGLHD8jwyfj&X-Amz-Signature=c8a62c959768bfda6224d80c39dbce6026039db9e4c68160e1a7de3c583aa963&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4KZAXK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL5AUY1CmsoMzE61w075o%2F0ZKPwUjDh%2BbWc0mNQ2rsjAiEA%2BZq4qzd2AKlc8GQRA8KzgEMTIMpZ5hLmB5ppAi8Y5FsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNZr9CMamzyIyXRqCrcAxPvhiAve3o8LO%2B1gxnpaBLTvCK5YE%2FzcHkXGp9kqXSnsfdeus7%2BSYLMLyhJCpGaz6%2B7xbsm68wvIIn2YzF43CGf%2FoHGrwLw%2F7fHnyjsG2eofWV0q1LhNO2DwPv3hD6F7V4sfI2x%2FcS4Cy9oxfbUKKSDdxOIj7ViztAFWo36suPIe%2FA1GS57TvXhgHEab9pcs0bSdg0cHhCTInwlhXBEIb95K76hB9zwWuPE%2BR3IJZ%2FN915MKgtLV%2Beo83KDw1wqR0P0rf5pSNO9o%2BDDSc2K3hp9rpen8tdsLn0D3i9gRuGpXJa3Doup06B37vEOswirsADDL3AL%2Fxr8%2B2eZLWJutpt35hLFxKovTWvtmDMRInYqKdu1%2Fi2BWwalN382ITA2SeQGamyx%2BZxhmXlat2wSW94bk6drkc3Nxnu1Zstu9Olc6EfR1ZiixA%2FbCD9nRfHzfSGyPtKC136qeMFMCNkhaCj3U94Q8i3k0oIqBwwY4CAyf8FmHcgEM80L%2FKeVBs83DPnqWywLoL9cQS357Q7gpS9RD8bu%2BHW8XMPySkiBUEFaw5vIY%2BMNhQCKIoJkWtCTYpDHKTsAnqq82Cudt3RFSwIhuPthX3YCrvYPRtxenwsDlF6K4tHVKqvR8kMfMOHjob0GOqUBKnM7zaeddy%2BnJ906SfoOhEKo4oWI%2F1EhellNrgG9xubA%2BK3loTkAZse4uC8s4Ukh51Idni2skns61D%2FtnUEJyce49wzz4nYY%2F7eHFk%2BMykiRlvxVfkv5msT3QbPyBAhgoXKQ6OkTvUJqDxlQhD4SnEJOPlFFK7LIKH%2FT1oJbj%2BBhn%2B8qQR1noMKYgrfciLPnwyiUv9mxqZkglu4KMDGLHD8jwyfj&X-Amz-Signature=a2b7aba3084dd5bec9966cc36e27d4f18fd233d2562fa79a14ed5caadd9566cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4KZAXK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL5AUY1CmsoMzE61w075o%2F0ZKPwUjDh%2BbWc0mNQ2rsjAiEA%2BZq4qzd2AKlc8GQRA8KzgEMTIMpZ5hLmB5ppAi8Y5FsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNZr9CMamzyIyXRqCrcAxPvhiAve3o8LO%2B1gxnpaBLTvCK5YE%2FzcHkXGp9kqXSnsfdeus7%2BSYLMLyhJCpGaz6%2B7xbsm68wvIIn2YzF43CGf%2FoHGrwLw%2F7fHnyjsG2eofWV0q1LhNO2DwPv3hD6F7V4sfI2x%2FcS4Cy9oxfbUKKSDdxOIj7ViztAFWo36suPIe%2FA1GS57TvXhgHEab9pcs0bSdg0cHhCTInwlhXBEIb95K76hB9zwWuPE%2BR3IJZ%2FN915MKgtLV%2Beo83KDw1wqR0P0rf5pSNO9o%2BDDSc2K3hp9rpen8tdsLn0D3i9gRuGpXJa3Doup06B37vEOswirsADDL3AL%2Fxr8%2B2eZLWJutpt35hLFxKovTWvtmDMRInYqKdu1%2Fi2BWwalN382ITA2SeQGamyx%2BZxhmXlat2wSW94bk6drkc3Nxnu1Zstu9Olc6EfR1ZiixA%2FbCD9nRfHzfSGyPtKC136qeMFMCNkhaCj3U94Q8i3k0oIqBwwY4CAyf8FmHcgEM80L%2FKeVBs83DPnqWywLoL9cQS357Q7gpS9RD8bu%2BHW8XMPySkiBUEFaw5vIY%2BMNhQCKIoJkWtCTYpDHKTsAnqq82Cudt3RFSwIhuPthX3YCrvYPRtxenwsDlF6K4tHVKqvR8kMfMOHjob0GOqUBKnM7zaeddy%2BnJ906SfoOhEKo4oWI%2F1EhellNrgG9xubA%2BK3loTkAZse4uC8s4Ukh51Idni2skns61D%2FtnUEJyce49wzz4nYY%2F7eHFk%2BMykiRlvxVfkv5msT3QbPyBAhgoXKQ6OkTvUJqDxlQhD4SnEJOPlFFK7LIKH%2FT1oJbj%2BBhn%2B8qQR1noMKYgrfciLPnwyiUv9mxqZkglu4KMDGLHD8jwyfj&X-Amz-Signature=5bcba65d76b4bf2d48c5ebb8a780c94b3e1a42576b31b73ebdee824fb1c8eda9&X-Amz-SignedHeaders=host&x-id=GetObject)
