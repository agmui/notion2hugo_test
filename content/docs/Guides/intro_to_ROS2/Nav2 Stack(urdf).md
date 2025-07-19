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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL6F42Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BRCGbGYpjaSJoqlbsFgRpkhqNe8OvyDbY8vV3W67pAiEAhafKJuf7X7oI9lLP%2ByLICweZbwb9wWbczk3uEkksUxYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcbQxYS1R1iPPlbPircA1Vyp9002ZFtr7P5CJFbs365epo6HIDdq8c%2BwDOZvbdx%2BF2DQG6B%2BfSA7hfIwqBXAGhCur2d67%2FYmdbfb0LWzyndXEDbBV%2FAgOextEIgdXExM1tHBEoRkAvIoYCFl1wf4cg5vmKyG8BqaAH1qGGMhp%2BQ2G9knhBPKb3PbJsoCKSerYgFzyT6gEdqVqoIV94YnFiIW8WYKA8SIRom3aU7q9uJN4D%2BY5qLB51To5NtaHq%2BBH%2B5UOSqPY9to%2FlDxxxzNjKopKMAoQRysrZNJkW75VshWab0z1Gonu8yere4n3Do15r0iL5lBu82AzsxevruBlUVEFbTtQPTu7oZzm4NhJMaEuEP0Ff4bNIuFIgdBuKO9VFVPSczyOyhJHZQ9enQCsXKGCqpRRb0SOyZI5lnm6ss0HgtJyglkzgFRvegmmTr0mkkVkYQdP8dtrjiosxtctTpx10bhDkBPCMMlor3gK7kWnxxr7Dn1ynKxAFD7debpuJmP%2FdoT9jptQyHaCc2C%2FLH3keJc4LI28Cm%2FZwH178Wg6XcRhWf2G90dLngRCxDGGDDYqch%2FNG0DcgDMh5KdMlI70hFDVJj7YtugdZk0pIucM74RKFIFmVwdoPzh73ztmLNNZFBVVHYVUVZMNC37sMGOqUBIXU82HMUWi2JjILjjRfAWhr2r197NkeVF3C3doFgdMhFO01Sc65ZS3hK5vYtjypn9SPIudWlc8FM00IOhu9H5GRHixmvFmHnfQqCzMF7kKkFTNelmSJSvRUVcimacT5oIJxtAr0XQIGWQdp2Tsyxhz2XB49dBvWvDHPpJca%2Bp7G%2F1tztvw8%2FeINs0ZCNbXrSkX9WfcxHCxtl7A86KJEp3Dp2ZxLZ&X-Amz-Signature=bb218bf4ede3293b91785081fea6321ae39b660b652dc303a57738a21d064ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL6F42Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BRCGbGYpjaSJoqlbsFgRpkhqNe8OvyDbY8vV3W67pAiEAhafKJuf7X7oI9lLP%2ByLICweZbwb9wWbczk3uEkksUxYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcbQxYS1R1iPPlbPircA1Vyp9002ZFtr7P5CJFbs365epo6HIDdq8c%2BwDOZvbdx%2BF2DQG6B%2BfSA7hfIwqBXAGhCur2d67%2FYmdbfb0LWzyndXEDbBV%2FAgOextEIgdXExM1tHBEoRkAvIoYCFl1wf4cg5vmKyG8BqaAH1qGGMhp%2BQ2G9knhBPKb3PbJsoCKSerYgFzyT6gEdqVqoIV94YnFiIW8WYKA8SIRom3aU7q9uJN4D%2BY5qLB51To5NtaHq%2BBH%2B5UOSqPY9to%2FlDxxxzNjKopKMAoQRysrZNJkW75VshWab0z1Gonu8yere4n3Do15r0iL5lBu82AzsxevruBlUVEFbTtQPTu7oZzm4NhJMaEuEP0Ff4bNIuFIgdBuKO9VFVPSczyOyhJHZQ9enQCsXKGCqpRRb0SOyZI5lnm6ss0HgtJyglkzgFRvegmmTr0mkkVkYQdP8dtrjiosxtctTpx10bhDkBPCMMlor3gK7kWnxxr7Dn1ynKxAFD7debpuJmP%2FdoT9jptQyHaCc2C%2FLH3keJc4LI28Cm%2FZwH178Wg6XcRhWf2G90dLngRCxDGGDDYqch%2FNG0DcgDMh5KdMlI70hFDVJj7YtugdZk0pIucM74RKFIFmVwdoPzh73ztmLNNZFBVVHYVUVZMNC37sMGOqUBIXU82HMUWi2JjILjjRfAWhr2r197NkeVF3C3doFgdMhFO01Sc65ZS3hK5vYtjypn9SPIudWlc8FM00IOhu9H5GRHixmvFmHnfQqCzMF7kKkFTNelmSJSvRUVcimacT5oIJxtAr0XQIGWQdp2Tsyxhz2XB49dBvWvDHPpJca%2Bp7G%2F1tztvw8%2FeINs0ZCNbXrSkX9WfcxHCxtl7A86KJEp3Dp2ZxLZ&X-Amz-Signature=48f58f5a4e973a535ee9655a6d71a3aa1ef3150787733ae75e443950637e9e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL6F42Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BRCGbGYpjaSJoqlbsFgRpkhqNe8OvyDbY8vV3W67pAiEAhafKJuf7X7oI9lLP%2ByLICweZbwb9wWbczk3uEkksUxYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcbQxYS1R1iPPlbPircA1Vyp9002ZFtr7P5CJFbs365epo6HIDdq8c%2BwDOZvbdx%2BF2DQG6B%2BfSA7hfIwqBXAGhCur2d67%2FYmdbfb0LWzyndXEDbBV%2FAgOextEIgdXExM1tHBEoRkAvIoYCFl1wf4cg5vmKyG8BqaAH1qGGMhp%2BQ2G9knhBPKb3PbJsoCKSerYgFzyT6gEdqVqoIV94YnFiIW8WYKA8SIRom3aU7q9uJN4D%2BY5qLB51To5NtaHq%2BBH%2B5UOSqPY9to%2FlDxxxzNjKopKMAoQRysrZNJkW75VshWab0z1Gonu8yere4n3Do15r0iL5lBu82AzsxevruBlUVEFbTtQPTu7oZzm4NhJMaEuEP0Ff4bNIuFIgdBuKO9VFVPSczyOyhJHZQ9enQCsXKGCqpRRb0SOyZI5lnm6ss0HgtJyglkzgFRvegmmTr0mkkVkYQdP8dtrjiosxtctTpx10bhDkBPCMMlor3gK7kWnxxr7Dn1ynKxAFD7debpuJmP%2FdoT9jptQyHaCc2C%2FLH3keJc4LI28Cm%2FZwH178Wg6XcRhWf2G90dLngRCxDGGDDYqch%2FNG0DcgDMh5KdMlI70hFDVJj7YtugdZk0pIucM74RKFIFmVwdoPzh73ztmLNNZFBVVHYVUVZMNC37sMGOqUBIXU82HMUWi2JjILjjRfAWhr2r197NkeVF3C3doFgdMhFO01Sc65ZS3hK5vYtjypn9SPIudWlc8FM00IOhu9H5GRHixmvFmHnfQqCzMF7kKkFTNelmSJSvRUVcimacT5oIJxtAr0XQIGWQdp2Tsyxhz2XB49dBvWvDHPpJca%2Bp7G%2F1tztvw8%2FeINs0ZCNbXrSkX9WfcxHCxtl7A86KJEp3Dp2ZxLZ&X-Amz-Signature=e1fef57a5e3d2eab4c68635277d10275f68f6bb9338a945672ecb3507464c329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL6F42Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BRCGbGYpjaSJoqlbsFgRpkhqNe8OvyDbY8vV3W67pAiEAhafKJuf7X7oI9lLP%2ByLICweZbwb9wWbczk3uEkksUxYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcbQxYS1R1iPPlbPircA1Vyp9002ZFtr7P5CJFbs365epo6HIDdq8c%2BwDOZvbdx%2BF2DQG6B%2BfSA7hfIwqBXAGhCur2d67%2FYmdbfb0LWzyndXEDbBV%2FAgOextEIgdXExM1tHBEoRkAvIoYCFl1wf4cg5vmKyG8BqaAH1qGGMhp%2BQ2G9knhBPKb3PbJsoCKSerYgFzyT6gEdqVqoIV94YnFiIW8WYKA8SIRom3aU7q9uJN4D%2BY5qLB51To5NtaHq%2BBH%2B5UOSqPY9to%2FlDxxxzNjKopKMAoQRysrZNJkW75VshWab0z1Gonu8yere4n3Do15r0iL5lBu82AzsxevruBlUVEFbTtQPTu7oZzm4NhJMaEuEP0Ff4bNIuFIgdBuKO9VFVPSczyOyhJHZQ9enQCsXKGCqpRRb0SOyZI5lnm6ss0HgtJyglkzgFRvegmmTr0mkkVkYQdP8dtrjiosxtctTpx10bhDkBPCMMlor3gK7kWnxxr7Dn1ynKxAFD7debpuJmP%2FdoT9jptQyHaCc2C%2FLH3keJc4LI28Cm%2FZwH178Wg6XcRhWf2G90dLngRCxDGGDDYqch%2FNG0DcgDMh5KdMlI70hFDVJj7YtugdZk0pIucM74RKFIFmVwdoPzh73ztmLNNZFBVVHYVUVZMNC37sMGOqUBIXU82HMUWi2JjILjjRfAWhr2r197NkeVF3C3doFgdMhFO01Sc65ZS3hK5vYtjypn9SPIudWlc8FM00IOhu9H5GRHixmvFmHnfQqCzMF7kKkFTNelmSJSvRUVcimacT5oIJxtAr0XQIGWQdp2Tsyxhz2XB49dBvWvDHPpJca%2Bp7G%2F1tztvw8%2FeINs0ZCNbXrSkX9WfcxHCxtl7A86KJEp3Dp2ZxLZ&X-Amz-Signature=5692163ca223c389fcfc2be50f17fa4ef1f3d9cbe9391c7830e0aab696d73c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL6F42Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BRCGbGYpjaSJoqlbsFgRpkhqNe8OvyDbY8vV3W67pAiEAhafKJuf7X7oI9lLP%2ByLICweZbwb9wWbczk3uEkksUxYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcbQxYS1R1iPPlbPircA1Vyp9002ZFtr7P5CJFbs365epo6HIDdq8c%2BwDOZvbdx%2BF2DQG6B%2BfSA7hfIwqBXAGhCur2d67%2FYmdbfb0LWzyndXEDbBV%2FAgOextEIgdXExM1tHBEoRkAvIoYCFl1wf4cg5vmKyG8BqaAH1qGGMhp%2BQ2G9knhBPKb3PbJsoCKSerYgFzyT6gEdqVqoIV94YnFiIW8WYKA8SIRom3aU7q9uJN4D%2BY5qLB51To5NtaHq%2BBH%2B5UOSqPY9to%2FlDxxxzNjKopKMAoQRysrZNJkW75VshWab0z1Gonu8yere4n3Do15r0iL5lBu82AzsxevruBlUVEFbTtQPTu7oZzm4NhJMaEuEP0Ff4bNIuFIgdBuKO9VFVPSczyOyhJHZQ9enQCsXKGCqpRRb0SOyZI5lnm6ss0HgtJyglkzgFRvegmmTr0mkkVkYQdP8dtrjiosxtctTpx10bhDkBPCMMlor3gK7kWnxxr7Dn1ynKxAFD7debpuJmP%2FdoT9jptQyHaCc2C%2FLH3keJc4LI28Cm%2FZwH178Wg6XcRhWf2G90dLngRCxDGGDDYqch%2FNG0DcgDMh5KdMlI70hFDVJj7YtugdZk0pIucM74RKFIFmVwdoPzh73ztmLNNZFBVVHYVUVZMNC37sMGOqUBIXU82HMUWi2JjILjjRfAWhr2r197NkeVF3C3doFgdMhFO01Sc65ZS3hK5vYtjypn9SPIudWlc8FM00IOhu9H5GRHixmvFmHnfQqCzMF7kKkFTNelmSJSvRUVcimacT5oIJxtAr0XQIGWQdp2Tsyxhz2XB49dBvWvDHPpJca%2Bp7G%2F1tztvw8%2FeINs0ZCNbXrSkX9WfcxHCxtl7A86KJEp3Dp2ZxLZ&X-Amz-Signature=7916ff20a984b34647c2d0341794321849370373f0a2617d719d6b803b244145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL6F42Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2BRCGbGYpjaSJoqlbsFgRpkhqNe8OvyDbY8vV3W67pAiEAhafKJuf7X7oI9lLP%2ByLICweZbwb9wWbczk3uEkksUxYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcbQxYS1R1iPPlbPircA1Vyp9002ZFtr7P5CJFbs365epo6HIDdq8c%2BwDOZvbdx%2BF2DQG6B%2BfSA7hfIwqBXAGhCur2d67%2FYmdbfb0LWzyndXEDbBV%2FAgOextEIgdXExM1tHBEoRkAvIoYCFl1wf4cg5vmKyG8BqaAH1qGGMhp%2BQ2G9knhBPKb3PbJsoCKSerYgFzyT6gEdqVqoIV94YnFiIW8WYKA8SIRom3aU7q9uJN4D%2BY5qLB51To5NtaHq%2BBH%2B5UOSqPY9to%2FlDxxxzNjKopKMAoQRysrZNJkW75VshWab0z1Gonu8yere4n3Do15r0iL5lBu82AzsxevruBlUVEFbTtQPTu7oZzm4NhJMaEuEP0Ff4bNIuFIgdBuKO9VFVPSczyOyhJHZQ9enQCsXKGCqpRRb0SOyZI5lnm6ss0HgtJyglkzgFRvegmmTr0mkkVkYQdP8dtrjiosxtctTpx10bhDkBPCMMlor3gK7kWnxxr7Dn1ynKxAFD7debpuJmP%2FdoT9jptQyHaCc2C%2FLH3keJc4LI28Cm%2FZwH178Wg6XcRhWf2G90dLngRCxDGGDDYqch%2FNG0DcgDMh5KdMlI70hFDVJj7YtugdZk0pIucM74RKFIFmVwdoPzh73ztmLNNZFBVVHYVUVZMNC37sMGOqUBIXU82HMUWi2JjILjjRfAWhr2r197NkeVF3C3doFgdMhFO01Sc65ZS3hK5vYtjypn9SPIudWlc8FM00IOhu9H5GRHixmvFmHnfQqCzMF7kKkFTNelmSJSvRUVcimacT5oIJxtAr0XQIGWQdp2Tsyxhz2XB49dBvWvDHPpJca%2Bp7G%2F1tztvw8%2FeINs0ZCNbXrSkX9WfcxHCxtl7A86KJEp3Dp2ZxLZ&X-Amz-Signature=338bd86804cbd719f51cd91f49c0b783d03c34025da3ae6ffc8c695b5af9feb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
