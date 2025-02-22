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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQNM3CH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzl3T3j8G5TIIsWCC22feU7qEonKi0eTwAJ6cK9b9yNAiEAwaAw0ZefsPwsrYX89lkOH9zziRfID%2Fc8sZm%2Fx9%2FbXcUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpMADnbndvuWBPrdircAxgEYQVN0%2BCNXOYsRua%2FPiEDhXTTRHuayHFA3n6wkS7SpAJo4dAOoDjnHagngRdpE5%2Bbx75t8XRO30y3zaC12WRMVDwA8Z%2BQDf4LK9x%2BvModdXB0Gld4C17bAgActRw7wSeMB2zmzbI5jNxAZwkMKamQoAndF%2BOekAz8LMQv4AKpuCieXW%2FHOiC5fCL62nOUVJoiCH2%2F6Muws7wsjeT%2FHvR9r5Gx4RJ859%2Bbk0T7yTtRVH%2Bq3lXZEMVdJKYaW8ZTeWB3c2ABAa%2FBRne2fo0KwXFrKmsRm6uMxwhYDb0iPIPCReFtXVB4x%2BT%2FNyUo4Qsew%2F3YkGR%2FSyWvZTbYSzq1nQ0UrDTmS0CUcu7RCiWTXqu3GG9Ea6I5MVmtlomybtF%2F1TqwZknyJV%2BfJ7diGfiM%2Bvxs52xxp7%2BqhATuG8K8vuIW%2BNbpWlyZWpO6Vu9FrZ5hl4NjM4uVPYf9rjTQ2ejT68HKm8PLXUBDBA3LeqZbOjdLfjGd%2FsYmb2UG5vImUa9ntGhQnYp8x5kfP8jBBViRDJovxIom0opvXNzvyjDKMSAflHBKfDQXYIPTlZi3DsStjruzg%2B67IUA6yXNUzkFwYgtezUGHwByD%2FQgrdSO%2FkqLe2oNQBT%2FdpPqsmRbxMKyD5r0GOqUB6JVB1XM0OzEmqu9f4zhLjrLU%2B2WrFzhuIe239nuwquDYXkdtKZJEp8XVieYEuD7JNZ20h35cL7dn69UprfpxRebDjQ9V2xih3KmsicutDQEG6GM47ChaLDshW2%2B%2B7osR%2Bp0hcj4FElccGDmwgsvSIx%2B%2BthB%2B4xEmbq%2BtXuk5kkSv3yZKYokj4VnNhq9DLszUUw0dBpElRACvOvIFuxzOtaTEkon1&X-Amz-Signature=e1d655607d0389f5660c6db0d106fa58ece00d2a0e032abba9ad64e2ef8438ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQNM3CH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzl3T3j8G5TIIsWCC22feU7qEonKi0eTwAJ6cK9b9yNAiEAwaAw0ZefsPwsrYX89lkOH9zziRfID%2Fc8sZm%2Fx9%2FbXcUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpMADnbndvuWBPrdircAxgEYQVN0%2BCNXOYsRua%2FPiEDhXTTRHuayHFA3n6wkS7SpAJo4dAOoDjnHagngRdpE5%2Bbx75t8XRO30y3zaC12WRMVDwA8Z%2BQDf4LK9x%2BvModdXB0Gld4C17bAgActRw7wSeMB2zmzbI5jNxAZwkMKamQoAndF%2BOekAz8LMQv4AKpuCieXW%2FHOiC5fCL62nOUVJoiCH2%2F6Muws7wsjeT%2FHvR9r5Gx4RJ859%2Bbk0T7yTtRVH%2Bq3lXZEMVdJKYaW8ZTeWB3c2ABAa%2FBRne2fo0KwXFrKmsRm6uMxwhYDb0iPIPCReFtXVB4x%2BT%2FNyUo4Qsew%2F3YkGR%2FSyWvZTbYSzq1nQ0UrDTmS0CUcu7RCiWTXqu3GG9Ea6I5MVmtlomybtF%2F1TqwZknyJV%2BfJ7diGfiM%2Bvxs52xxp7%2BqhATuG8K8vuIW%2BNbpWlyZWpO6Vu9FrZ5hl4NjM4uVPYf9rjTQ2ejT68HKm8PLXUBDBA3LeqZbOjdLfjGd%2FsYmb2UG5vImUa9ntGhQnYp8x5kfP8jBBViRDJovxIom0opvXNzvyjDKMSAflHBKfDQXYIPTlZi3DsStjruzg%2B67IUA6yXNUzkFwYgtezUGHwByD%2FQgrdSO%2FkqLe2oNQBT%2FdpPqsmRbxMKyD5r0GOqUB6JVB1XM0OzEmqu9f4zhLjrLU%2B2WrFzhuIe239nuwquDYXkdtKZJEp8XVieYEuD7JNZ20h35cL7dn69UprfpxRebDjQ9V2xih3KmsicutDQEG6GM47ChaLDshW2%2B%2B7osR%2Bp0hcj4FElccGDmwgsvSIx%2B%2BthB%2B4xEmbq%2BtXuk5kkSv3yZKYokj4VnNhq9DLszUUw0dBpElRACvOvIFuxzOtaTEkon1&X-Amz-Signature=cfcd39e9115f8d94a25971d69157f474c5e8e95ecf0b2af412f4cf21b1a672e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQNM3CH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzl3T3j8G5TIIsWCC22feU7qEonKi0eTwAJ6cK9b9yNAiEAwaAw0ZefsPwsrYX89lkOH9zziRfID%2Fc8sZm%2Fx9%2FbXcUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpMADnbndvuWBPrdircAxgEYQVN0%2BCNXOYsRua%2FPiEDhXTTRHuayHFA3n6wkS7SpAJo4dAOoDjnHagngRdpE5%2Bbx75t8XRO30y3zaC12WRMVDwA8Z%2BQDf4LK9x%2BvModdXB0Gld4C17bAgActRw7wSeMB2zmzbI5jNxAZwkMKamQoAndF%2BOekAz8LMQv4AKpuCieXW%2FHOiC5fCL62nOUVJoiCH2%2F6Muws7wsjeT%2FHvR9r5Gx4RJ859%2Bbk0T7yTtRVH%2Bq3lXZEMVdJKYaW8ZTeWB3c2ABAa%2FBRne2fo0KwXFrKmsRm6uMxwhYDb0iPIPCReFtXVB4x%2BT%2FNyUo4Qsew%2F3YkGR%2FSyWvZTbYSzq1nQ0UrDTmS0CUcu7RCiWTXqu3GG9Ea6I5MVmtlomybtF%2F1TqwZknyJV%2BfJ7diGfiM%2Bvxs52xxp7%2BqhATuG8K8vuIW%2BNbpWlyZWpO6Vu9FrZ5hl4NjM4uVPYf9rjTQ2ejT68HKm8PLXUBDBA3LeqZbOjdLfjGd%2FsYmb2UG5vImUa9ntGhQnYp8x5kfP8jBBViRDJovxIom0opvXNzvyjDKMSAflHBKfDQXYIPTlZi3DsStjruzg%2B67IUA6yXNUzkFwYgtezUGHwByD%2FQgrdSO%2FkqLe2oNQBT%2FdpPqsmRbxMKyD5r0GOqUB6JVB1XM0OzEmqu9f4zhLjrLU%2B2WrFzhuIe239nuwquDYXkdtKZJEp8XVieYEuD7JNZ20h35cL7dn69UprfpxRebDjQ9V2xih3KmsicutDQEG6GM47ChaLDshW2%2B%2B7osR%2Bp0hcj4FElccGDmwgsvSIx%2B%2BthB%2B4xEmbq%2BtXuk5kkSv3yZKYokj4VnNhq9DLszUUw0dBpElRACvOvIFuxzOtaTEkon1&X-Amz-Signature=c6d4dc3b52ffd018aa243666f9d81b048f1d6c07bca992c68a54068d8ef20cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQNM3CH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzl3T3j8G5TIIsWCC22feU7qEonKi0eTwAJ6cK9b9yNAiEAwaAw0ZefsPwsrYX89lkOH9zziRfID%2Fc8sZm%2Fx9%2FbXcUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpMADnbndvuWBPrdircAxgEYQVN0%2BCNXOYsRua%2FPiEDhXTTRHuayHFA3n6wkS7SpAJo4dAOoDjnHagngRdpE5%2Bbx75t8XRO30y3zaC12WRMVDwA8Z%2BQDf4LK9x%2BvModdXB0Gld4C17bAgActRw7wSeMB2zmzbI5jNxAZwkMKamQoAndF%2BOekAz8LMQv4AKpuCieXW%2FHOiC5fCL62nOUVJoiCH2%2F6Muws7wsjeT%2FHvR9r5Gx4RJ859%2Bbk0T7yTtRVH%2Bq3lXZEMVdJKYaW8ZTeWB3c2ABAa%2FBRne2fo0KwXFrKmsRm6uMxwhYDb0iPIPCReFtXVB4x%2BT%2FNyUo4Qsew%2F3YkGR%2FSyWvZTbYSzq1nQ0UrDTmS0CUcu7RCiWTXqu3GG9Ea6I5MVmtlomybtF%2F1TqwZknyJV%2BfJ7diGfiM%2Bvxs52xxp7%2BqhATuG8K8vuIW%2BNbpWlyZWpO6Vu9FrZ5hl4NjM4uVPYf9rjTQ2ejT68HKm8PLXUBDBA3LeqZbOjdLfjGd%2FsYmb2UG5vImUa9ntGhQnYp8x5kfP8jBBViRDJovxIom0opvXNzvyjDKMSAflHBKfDQXYIPTlZi3DsStjruzg%2B67IUA6yXNUzkFwYgtezUGHwByD%2FQgrdSO%2FkqLe2oNQBT%2FdpPqsmRbxMKyD5r0GOqUB6JVB1XM0OzEmqu9f4zhLjrLU%2B2WrFzhuIe239nuwquDYXkdtKZJEp8XVieYEuD7JNZ20h35cL7dn69UprfpxRebDjQ9V2xih3KmsicutDQEG6GM47ChaLDshW2%2B%2B7osR%2Bp0hcj4FElccGDmwgsvSIx%2B%2BthB%2B4xEmbq%2BtXuk5kkSv3yZKYokj4VnNhq9DLszUUw0dBpElRACvOvIFuxzOtaTEkon1&X-Amz-Signature=c3216d432cf4f25b00e949b7446b31778342297b831bffa6892ad349e2bcf939&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQNM3CH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzl3T3j8G5TIIsWCC22feU7qEonKi0eTwAJ6cK9b9yNAiEAwaAw0ZefsPwsrYX89lkOH9zziRfID%2Fc8sZm%2Fx9%2FbXcUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpMADnbndvuWBPrdircAxgEYQVN0%2BCNXOYsRua%2FPiEDhXTTRHuayHFA3n6wkS7SpAJo4dAOoDjnHagngRdpE5%2Bbx75t8XRO30y3zaC12WRMVDwA8Z%2BQDf4LK9x%2BvModdXB0Gld4C17bAgActRw7wSeMB2zmzbI5jNxAZwkMKamQoAndF%2BOekAz8LMQv4AKpuCieXW%2FHOiC5fCL62nOUVJoiCH2%2F6Muws7wsjeT%2FHvR9r5Gx4RJ859%2Bbk0T7yTtRVH%2Bq3lXZEMVdJKYaW8ZTeWB3c2ABAa%2FBRne2fo0KwXFrKmsRm6uMxwhYDb0iPIPCReFtXVB4x%2BT%2FNyUo4Qsew%2F3YkGR%2FSyWvZTbYSzq1nQ0UrDTmS0CUcu7RCiWTXqu3GG9Ea6I5MVmtlomybtF%2F1TqwZknyJV%2BfJ7diGfiM%2Bvxs52xxp7%2BqhATuG8K8vuIW%2BNbpWlyZWpO6Vu9FrZ5hl4NjM4uVPYf9rjTQ2ejT68HKm8PLXUBDBA3LeqZbOjdLfjGd%2FsYmb2UG5vImUa9ntGhQnYp8x5kfP8jBBViRDJovxIom0opvXNzvyjDKMSAflHBKfDQXYIPTlZi3DsStjruzg%2B67IUA6yXNUzkFwYgtezUGHwByD%2FQgrdSO%2FkqLe2oNQBT%2FdpPqsmRbxMKyD5r0GOqUB6JVB1XM0OzEmqu9f4zhLjrLU%2B2WrFzhuIe239nuwquDYXkdtKZJEp8XVieYEuD7JNZ20h35cL7dn69UprfpxRebDjQ9V2xih3KmsicutDQEG6GM47ChaLDshW2%2B%2B7osR%2Bp0hcj4FElccGDmwgsvSIx%2B%2BthB%2B4xEmbq%2BtXuk5kkSv3yZKYokj4VnNhq9DLszUUw0dBpElRACvOvIFuxzOtaTEkon1&X-Amz-Signature=efa70b3b7ce1406ca9532a0ee8c050816e6ce9df4825b63d2809526440f34e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQNM3CH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzl3T3j8G5TIIsWCC22feU7qEonKi0eTwAJ6cK9b9yNAiEAwaAw0ZefsPwsrYX89lkOH9zziRfID%2Fc8sZm%2Fx9%2FbXcUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpMADnbndvuWBPrdircAxgEYQVN0%2BCNXOYsRua%2FPiEDhXTTRHuayHFA3n6wkS7SpAJo4dAOoDjnHagngRdpE5%2Bbx75t8XRO30y3zaC12WRMVDwA8Z%2BQDf4LK9x%2BvModdXB0Gld4C17bAgActRw7wSeMB2zmzbI5jNxAZwkMKamQoAndF%2BOekAz8LMQv4AKpuCieXW%2FHOiC5fCL62nOUVJoiCH2%2F6Muws7wsjeT%2FHvR9r5Gx4RJ859%2Bbk0T7yTtRVH%2Bq3lXZEMVdJKYaW8ZTeWB3c2ABAa%2FBRne2fo0KwXFrKmsRm6uMxwhYDb0iPIPCReFtXVB4x%2BT%2FNyUo4Qsew%2F3YkGR%2FSyWvZTbYSzq1nQ0UrDTmS0CUcu7RCiWTXqu3GG9Ea6I5MVmtlomybtF%2F1TqwZknyJV%2BfJ7diGfiM%2Bvxs52xxp7%2BqhATuG8K8vuIW%2BNbpWlyZWpO6Vu9FrZ5hl4NjM4uVPYf9rjTQ2ejT68HKm8PLXUBDBA3LeqZbOjdLfjGd%2FsYmb2UG5vImUa9ntGhQnYp8x5kfP8jBBViRDJovxIom0opvXNzvyjDKMSAflHBKfDQXYIPTlZi3DsStjruzg%2B67IUA6yXNUzkFwYgtezUGHwByD%2FQgrdSO%2FkqLe2oNQBT%2FdpPqsmRbxMKyD5r0GOqUB6JVB1XM0OzEmqu9f4zhLjrLU%2B2WrFzhuIe239nuwquDYXkdtKZJEp8XVieYEuD7JNZ20h35cL7dn69UprfpxRebDjQ9V2xih3KmsicutDQEG6GM47ChaLDshW2%2B%2B7osR%2Bp0hcj4FElccGDmwgsvSIx%2B%2BthB%2B4xEmbq%2BtXuk5kkSv3yZKYokj4VnNhq9DLszUUw0dBpElRACvOvIFuxzOtaTEkon1&X-Amz-Signature=d7ca6edb0bb67587d559119b30220fb435d0c866a7299d08cd6fc79802b38c3b&X-Amz-SignedHeaders=host&x-id=GetObject)
