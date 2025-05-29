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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43YGAU6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4frgje%2B4zugWwrPPBO7RQDcAnjsKtm2XndBuYg%2F%2BG3AIhAIB6r%2BhlfgBWYXjgPdED8HSqD6xg2PeNhAxsEBCKoqZzKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMcoNd0K2XWHCiwqMq3AMtX5IVT0VKBzlFQ%2Fk8w8Z%2Fdm77UFus7tGKYpPmQ08h5XWKG4KuIOcDfWDJd5TLpGDY3KB40dbUCCPh4AT5hl84cUi4P%2BQz%2FWIOdfS3KedTK9MIxdJdo4s4u4PZHgZXsHDpPHu%2FjaKbrUR1nNFmduioc5pam1R8dJdn3Ct0Pu9apWR0s1EPe%2FlcxJTbaKCURjhWAHVmt7Jga5rGnEzBKwI4vcFmWWhpM9iU1yWAPw8oQMRXCaexeFT%2FE9HJ4Lum2DzQptaH4amW0w8RT%2FUJltFX66rCRgO9tMdylLzHytyn9hFis4CDwDsdd7JRvUkzK2mzuV9%2FELYMNrvujXPCUoJUv61grfo0ai5PFHXnWeAeOmEz2qoNFquJ6%2F0YpABTsEmnQa3pmLqEZ0Q4VSJBfsSwwXdu9EGqtQGSe9ZVVijxu5u3alATij4%2BLFLAq7S8vjsPhFPGTOMTbbGSsRVxEONiIXV7cT6dio2SNm%2FlDccoREgcD6V4GGZ0xPfAZwFfJBBp59O9gz%2FE8BwH3oSacFd8N0tdgH5%2FTyczVBFPZPmYgotOp6xQvEKOj55Sf9s2Ev3oR5Vt1H15k%2B%2BthKD5%2BNTrSpmYaRaAriTCpjoz%2B3HI3b8aVfVHNGivPsasVjDMh9%2FBBjqkAesz0AqemY3LmMeg7bCxdQPqV8j9Svfl8NfiIZfYenII6Gi2nqh36G8c1iAF%2FchlHj8BOtG34uydSTFw8PSKEYDbq46lFb%2BWfrJjWkvRalmhBu0aDpGPmuERbQ3I3GfHrzt3Z28ABn%2FslidfYTBZPfxZjW41e2ub2bKJeHCRNRoNbbm6ylvs%2BL7xGzfN8DOzwk%2FMd9WyQ53xaoDlr5oCIFztwg99&X-Amz-Signature=a845eaa223e04d9dfe2b597cbb5fc32dbe0e4f8754b543c346053d29a642411b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43YGAU6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4frgje%2B4zugWwrPPBO7RQDcAnjsKtm2XndBuYg%2F%2BG3AIhAIB6r%2BhlfgBWYXjgPdED8HSqD6xg2PeNhAxsEBCKoqZzKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMcoNd0K2XWHCiwqMq3AMtX5IVT0VKBzlFQ%2Fk8w8Z%2Fdm77UFus7tGKYpPmQ08h5XWKG4KuIOcDfWDJd5TLpGDY3KB40dbUCCPh4AT5hl84cUi4P%2BQz%2FWIOdfS3KedTK9MIxdJdo4s4u4PZHgZXsHDpPHu%2FjaKbrUR1nNFmduioc5pam1R8dJdn3Ct0Pu9apWR0s1EPe%2FlcxJTbaKCURjhWAHVmt7Jga5rGnEzBKwI4vcFmWWhpM9iU1yWAPw8oQMRXCaexeFT%2FE9HJ4Lum2DzQptaH4amW0w8RT%2FUJltFX66rCRgO9tMdylLzHytyn9hFis4CDwDsdd7JRvUkzK2mzuV9%2FELYMNrvujXPCUoJUv61grfo0ai5PFHXnWeAeOmEz2qoNFquJ6%2F0YpABTsEmnQa3pmLqEZ0Q4VSJBfsSwwXdu9EGqtQGSe9ZVVijxu5u3alATij4%2BLFLAq7S8vjsPhFPGTOMTbbGSsRVxEONiIXV7cT6dio2SNm%2FlDccoREgcD6V4GGZ0xPfAZwFfJBBp59O9gz%2FE8BwH3oSacFd8N0tdgH5%2FTyczVBFPZPmYgotOp6xQvEKOj55Sf9s2Ev3oR5Vt1H15k%2B%2BthKD5%2BNTrSpmYaRaAriTCpjoz%2B3HI3b8aVfVHNGivPsasVjDMh9%2FBBjqkAesz0AqemY3LmMeg7bCxdQPqV8j9Svfl8NfiIZfYenII6Gi2nqh36G8c1iAF%2FchlHj8BOtG34uydSTFw8PSKEYDbq46lFb%2BWfrJjWkvRalmhBu0aDpGPmuERbQ3I3GfHrzt3Z28ABn%2FslidfYTBZPfxZjW41e2ub2bKJeHCRNRoNbbm6ylvs%2BL7xGzfN8DOzwk%2FMd9WyQ53xaoDlr5oCIFztwg99&X-Amz-Signature=5906558db4b6fbb78af9b7cad73f91a2e42415efc18459f8b82aba186dca0b75&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43YGAU6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4frgje%2B4zugWwrPPBO7RQDcAnjsKtm2XndBuYg%2F%2BG3AIhAIB6r%2BhlfgBWYXjgPdED8HSqD6xg2PeNhAxsEBCKoqZzKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMcoNd0K2XWHCiwqMq3AMtX5IVT0VKBzlFQ%2Fk8w8Z%2Fdm77UFus7tGKYpPmQ08h5XWKG4KuIOcDfWDJd5TLpGDY3KB40dbUCCPh4AT5hl84cUi4P%2BQz%2FWIOdfS3KedTK9MIxdJdo4s4u4PZHgZXsHDpPHu%2FjaKbrUR1nNFmduioc5pam1R8dJdn3Ct0Pu9apWR0s1EPe%2FlcxJTbaKCURjhWAHVmt7Jga5rGnEzBKwI4vcFmWWhpM9iU1yWAPw8oQMRXCaexeFT%2FE9HJ4Lum2DzQptaH4amW0w8RT%2FUJltFX66rCRgO9tMdylLzHytyn9hFis4CDwDsdd7JRvUkzK2mzuV9%2FELYMNrvujXPCUoJUv61grfo0ai5PFHXnWeAeOmEz2qoNFquJ6%2F0YpABTsEmnQa3pmLqEZ0Q4VSJBfsSwwXdu9EGqtQGSe9ZVVijxu5u3alATij4%2BLFLAq7S8vjsPhFPGTOMTbbGSsRVxEONiIXV7cT6dio2SNm%2FlDccoREgcD6V4GGZ0xPfAZwFfJBBp59O9gz%2FE8BwH3oSacFd8N0tdgH5%2FTyczVBFPZPmYgotOp6xQvEKOj55Sf9s2Ev3oR5Vt1H15k%2B%2BthKD5%2BNTrSpmYaRaAriTCpjoz%2B3HI3b8aVfVHNGivPsasVjDMh9%2FBBjqkAesz0AqemY3LmMeg7bCxdQPqV8j9Svfl8NfiIZfYenII6Gi2nqh36G8c1iAF%2FchlHj8BOtG34uydSTFw8PSKEYDbq46lFb%2BWfrJjWkvRalmhBu0aDpGPmuERbQ3I3GfHrzt3Z28ABn%2FslidfYTBZPfxZjW41e2ub2bKJeHCRNRoNbbm6ylvs%2BL7xGzfN8DOzwk%2FMd9WyQ53xaoDlr5oCIFztwg99&X-Amz-Signature=4dd4f9149e93efc9aeadba9adf84f6a33d40f1c852f971c07db216af756793a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43YGAU6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4frgje%2B4zugWwrPPBO7RQDcAnjsKtm2XndBuYg%2F%2BG3AIhAIB6r%2BhlfgBWYXjgPdED8HSqD6xg2PeNhAxsEBCKoqZzKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMcoNd0K2XWHCiwqMq3AMtX5IVT0VKBzlFQ%2Fk8w8Z%2Fdm77UFus7tGKYpPmQ08h5XWKG4KuIOcDfWDJd5TLpGDY3KB40dbUCCPh4AT5hl84cUi4P%2BQz%2FWIOdfS3KedTK9MIxdJdo4s4u4PZHgZXsHDpPHu%2FjaKbrUR1nNFmduioc5pam1R8dJdn3Ct0Pu9apWR0s1EPe%2FlcxJTbaKCURjhWAHVmt7Jga5rGnEzBKwI4vcFmWWhpM9iU1yWAPw8oQMRXCaexeFT%2FE9HJ4Lum2DzQptaH4amW0w8RT%2FUJltFX66rCRgO9tMdylLzHytyn9hFis4CDwDsdd7JRvUkzK2mzuV9%2FELYMNrvujXPCUoJUv61grfo0ai5PFHXnWeAeOmEz2qoNFquJ6%2F0YpABTsEmnQa3pmLqEZ0Q4VSJBfsSwwXdu9EGqtQGSe9ZVVijxu5u3alATij4%2BLFLAq7S8vjsPhFPGTOMTbbGSsRVxEONiIXV7cT6dio2SNm%2FlDccoREgcD6V4GGZ0xPfAZwFfJBBp59O9gz%2FE8BwH3oSacFd8N0tdgH5%2FTyczVBFPZPmYgotOp6xQvEKOj55Sf9s2Ev3oR5Vt1H15k%2B%2BthKD5%2BNTrSpmYaRaAriTCpjoz%2B3HI3b8aVfVHNGivPsasVjDMh9%2FBBjqkAesz0AqemY3LmMeg7bCxdQPqV8j9Svfl8NfiIZfYenII6Gi2nqh36G8c1iAF%2FchlHj8BOtG34uydSTFw8PSKEYDbq46lFb%2BWfrJjWkvRalmhBu0aDpGPmuERbQ3I3GfHrzt3Z28ABn%2FslidfYTBZPfxZjW41e2ub2bKJeHCRNRoNbbm6ylvs%2BL7xGzfN8DOzwk%2FMd9WyQ53xaoDlr5oCIFztwg99&X-Amz-Signature=6618ccb7dfe5028dd6c3902a1c284614378f3cdee4bfcf1cb8b6d47686e2c9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43YGAU6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4frgje%2B4zugWwrPPBO7RQDcAnjsKtm2XndBuYg%2F%2BG3AIhAIB6r%2BhlfgBWYXjgPdED8HSqD6xg2PeNhAxsEBCKoqZzKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMcoNd0K2XWHCiwqMq3AMtX5IVT0VKBzlFQ%2Fk8w8Z%2Fdm77UFus7tGKYpPmQ08h5XWKG4KuIOcDfWDJd5TLpGDY3KB40dbUCCPh4AT5hl84cUi4P%2BQz%2FWIOdfS3KedTK9MIxdJdo4s4u4PZHgZXsHDpPHu%2FjaKbrUR1nNFmduioc5pam1R8dJdn3Ct0Pu9apWR0s1EPe%2FlcxJTbaKCURjhWAHVmt7Jga5rGnEzBKwI4vcFmWWhpM9iU1yWAPw8oQMRXCaexeFT%2FE9HJ4Lum2DzQptaH4amW0w8RT%2FUJltFX66rCRgO9tMdylLzHytyn9hFis4CDwDsdd7JRvUkzK2mzuV9%2FELYMNrvujXPCUoJUv61grfo0ai5PFHXnWeAeOmEz2qoNFquJ6%2F0YpABTsEmnQa3pmLqEZ0Q4VSJBfsSwwXdu9EGqtQGSe9ZVVijxu5u3alATij4%2BLFLAq7S8vjsPhFPGTOMTbbGSsRVxEONiIXV7cT6dio2SNm%2FlDccoREgcD6V4GGZ0xPfAZwFfJBBp59O9gz%2FE8BwH3oSacFd8N0tdgH5%2FTyczVBFPZPmYgotOp6xQvEKOj55Sf9s2Ev3oR5Vt1H15k%2B%2BthKD5%2BNTrSpmYaRaAriTCpjoz%2B3HI3b8aVfVHNGivPsasVjDMh9%2FBBjqkAesz0AqemY3LmMeg7bCxdQPqV8j9Svfl8NfiIZfYenII6Gi2nqh36G8c1iAF%2FchlHj8BOtG34uydSTFw8PSKEYDbq46lFb%2BWfrJjWkvRalmhBu0aDpGPmuERbQ3I3GfHrzt3Z28ABn%2FslidfYTBZPfxZjW41e2ub2bKJeHCRNRoNbbm6ylvs%2BL7xGzfN8DOzwk%2FMd9WyQ53xaoDlr5oCIFztwg99&X-Amz-Signature=d79fbb2a27d023f51b7327d574d12c55c43b8bf6c97f9355c67836f96bc796ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43YGAU6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4frgje%2B4zugWwrPPBO7RQDcAnjsKtm2XndBuYg%2F%2BG3AIhAIB6r%2BhlfgBWYXjgPdED8HSqD6xg2PeNhAxsEBCKoqZzKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMcoNd0K2XWHCiwqMq3AMtX5IVT0VKBzlFQ%2Fk8w8Z%2Fdm77UFus7tGKYpPmQ08h5XWKG4KuIOcDfWDJd5TLpGDY3KB40dbUCCPh4AT5hl84cUi4P%2BQz%2FWIOdfS3KedTK9MIxdJdo4s4u4PZHgZXsHDpPHu%2FjaKbrUR1nNFmduioc5pam1R8dJdn3Ct0Pu9apWR0s1EPe%2FlcxJTbaKCURjhWAHVmt7Jga5rGnEzBKwI4vcFmWWhpM9iU1yWAPw8oQMRXCaexeFT%2FE9HJ4Lum2DzQptaH4amW0w8RT%2FUJltFX66rCRgO9tMdylLzHytyn9hFis4CDwDsdd7JRvUkzK2mzuV9%2FELYMNrvujXPCUoJUv61grfo0ai5PFHXnWeAeOmEz2qoNFquJ6%2F0YpABTsEmnQa3pmLqEZ0Q4VSJBfsSwwXdu9EGqtQGSe9ZVVijxu5u3alATij4%2BLFLAq7S8vjsPhFPGTOMTbbGSsRVxEONiIXV7cT6dio2SNm%2FlDccoREgcD6V4GGZ0xPfAZwFfJBBp59O9gz%2FE8BwH3oSacFd8N0tdgH5%2FTyczVBFPZPmYgotOp6xQvEKOj55Sf9s2Ev3oR5Vt1H15k%2B%2BthKD5%2BNTrSpmYaRaAriTCpjoz%2B3HI3b8aVfVHNGivPsasVjDMh9%2FBBjqkAesz0AqemY3LmMeg7bCxdQPqV8j9Svfl8NfiIZfYenII6Gi2nqh36G8c1iAF%2FchlHj8BOtG34uydSTFw8PSKEYDbq46lFb%2BWfrJjWkvRalmhBu0aDpGPmuERbQ3I3GfHrzt3Z28ABn%2FslidfYTBZPfxZjW41e2ub2bKJeHCRNRoNbbm6ylvs%2BL7xGzfN8DOzwk%2FMd9WyQ53xaoDlr5oCIFztwg99&X-Amz-Signature=d045c46d62a9bbfc95680d901fbfa54fd94050aeb60fd20389c6bfa59a412493&X-Amz-SignedHeaders=host&x-id=GetObject)
