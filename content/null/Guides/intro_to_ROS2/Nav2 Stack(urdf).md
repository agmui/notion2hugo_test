---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTASUFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDMEiOiub%2FdSacnVvGkeNA3FDogDz6WyRgsRbdPPgxXEgIgCe%2FaQZIJ9EIXhzsXj%2B%2BA05WWipa1M36HHE2EXrUro4wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBMAw0wKDNcojfSl3ircA7GTR2gSWaAqdBXjL5ZAiSLRiClFSoWdtU288UpE1eTxnkq3kvAQ7Csqkxbmu98H%2BwmmvcyYfN8u6rGlhA%2Fjggo%2F25UEpb3WjJts2o%2FVksEFwYY3z0gtyRW5tNhvtw60TXcuqkTgIEQxlE9TXk0a5cDPK8up8pwxeVW%2FrbgyDhhCQtQrGn9EHgMSHpS6z5a3cOhzhQpAfZzuAifz4uTHFpPmjjkNB9%2F6eo7UFGKryBpT7%2FezQSXO3qxEKxcfGQ4QNFhNnHJzfwLXZkySvN65RwDnrQyBRfoEQE3Izf2IidbETn3YwvVxFKGckxYIjoF%2BVb1rYaoioPHrH5%2BMTciJXjztb48wXmFe%2FHdM1rFrjU84kRe%2FNR1FiDy%2BWX6qWqxsX1Y9%2Br0vfEOvPaCAEn7Ll%2Bed67g8CvJnAdwx4s19ZEPZaptiCI4Vrz%2F0mWXDBZ%2FnIHCcSjH9efzEN6t%2B9m0aYayb0zruQIeaNPxNJfzkumfzd5rS%2FPDPLh5gfpthWh7AVa0l0osrOCuyS4cA3ocxU7XXjzh3zzdERC3tmHpkPl8%2B4hlGW9WyIXWGKVMBiWxpc3A4wVx64NPBNp4O5lmYS%2BmN2eRD5VyAzv6DwUNmJOj9V%2FsKw5k8POp%2Fv4zRMOvPir0GOqUB18ANZZZWocoJ2z04gUvaVoyElegv9zzYezkLSKhFMDevx95jiYgqdPOMHLhqVf2349An7GmPP0LMv%2BFECPXamnoWPdKBOtGux3BBvx4ao64Qc8FXPMuV%2BBbBfHJhl6XfKXKeGBg3%2Fit68VIYQOtrx2tmaSpxZEN7519g7jZr%2FFlZjb5V544kVrXl4PvABpOhvJjIdGslWgaJ8azeKP10saN6slUY&X-Amz-Signature=cd971fc4381d6bcd827ccabd454ad44606a32d756197f83e09da808a29e916fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTASUFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDMEiOiub%2FdSacnVvGkeNA3FDogDz6WyRgsRbdPPgxXEgIgCe%2FaQZIJ9EIXhzsXj%2B%2BA05WWipa1M36HHE2EXrUro4wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBMAw0wKDNcojfSl3ircA7GTR2gSWaAqdBXjL5ZAiSLRiClFSoWdtU288UpE1eTxnkq3kvAQ7Csqkxbmu98H%2BwmmvcyYfN8u6rGlhA%2Fjggo%2F25UEpb3WjJts2o%2FVksEFwYY3z0gtyRW5tNhvtw60TXcuqkTgIEQxlE9TXk0a5cDPK8up8pwxeVW%2FrbgyDhhCQtQrGn9EHgMSHpS6z5a3cOhzhQpAfZzuAifz4uTHFpPmjjkNB9%2F6eo7UFGKryBpT7%2FezQSXO3qxEKxcfGQ4QNFhNnHJzfwLXZkySvN65RwDnrQyBRfoEQE3Izf2IidbETn3YwvVxFKGckxYIjoF%2BVb1rYaoioPHrH5%2BMTciJXjztb48wXmFe%2FHdM1rFrjU84kRe%2FNR1FiDy%2BWX6qWqxsX1Y9%2Br0vfEOvPaCAEn7Ll%2Bed67g8CvJnAdwx4s19ZEPZaptiCI4Vrz%2F0mWXDBZ%2FnIHCcSjH9efzEN6t%2B9m0aYayb0zruQIeaNPxNJfzkumfzd5rS%2FPDPLh5gfpthWh7AVa0l0osrOCuyS4cA3ocxU7XXjzh3zzdERC3tmHpkPl8%2B4hlGW9WyIXWGKVMBiWxpc3A4wVx64NPBNp4O5lmYS%2BmN2eRD5VyAzv6DwUNmJOj9V%2FsKw5k8POp%2Fv4zRMOvPir0GOqUB18ANZZZWocoJ2z04gUvaVoyElegv9zzYezkLSKhFMDevx95jiYgqdPOMHLhqVf2349An7GmPP0LMv%2BFECPXamnoWPdKBOtGux3BBvx4ao64Qc8FXPMuV%2BBbBfHJhl6XfKXKeGBg3%2Fit68VIYQOtrx2tmaSpxZEN7519g7jZr%2FFlZjb5V544kVrXl4PvABpOhvJjIdGslWgaJ8azeKP10saN6slUY&X-Amz-Signature=b7544a4fee1a2c465b05ce11b1cd6548332dc946c44ae724c6a75a4fe009f9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTASUFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDMEiOiub%2FdSacnVvGkeNA3FDogDz6WyRgsRbdPPgxXEgIgCe%2FaQZIJ9EIXhzsXj%2B%2BA05WWipa1M36HHE2EXrUro4wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBMAw0wKDNcojfSl3ircA7GTR2gSWaAqdBXjL5ZAiSLRiClFSoWdtU288UpE1eTxnkq3kvAQ7Csqkxbmu98H%2BwmmvcyYfN8u6rGlhA%2Fjggo%2F25UEpb3WjJts2o%2FVksEFwYY3z0gtyRW5tNhvtw60TXcuqkTgIEQxlE9TXk0a5cDPK8up8pwxeVW%2FrbgyDhhCQtQrGn9EHgMSHpS6z5a3cOhzhQpAfZzuAifz4uTHFpPmjjkNB9%2F6eo7UFGKryBpT7%2FezQSXO3qxEKxcfGQ4QNFhNnHJzfwLXZkySvN65RwDnrQyBRfoEQE3Izf2IidbETn3YwvVxFKGckxYIjoF%2BVb1rYaoioPHrH5%2BMTciJXjztb48wXmFe%2FHdM1rFrjU84kRe%2FNR1FiDy%2BWX6qWqxsX1Y9%2Br0vfEOvPaCAEn7Ll%2Bed67g8CvJnAdwx4s19ZEPZaptiCI4Vrz%2F0mWXDBZ%2FnIHCcSjH9efzEN6t%2B9m0aYayb0zruQIeaNPxNJfzkumfzd5rS%2FPDPLh5gfpthWh7AVa0l0osrOCuyS4cA3ocxU7XXjzh3zzdERC3tmHpkPl8%2B4hlGW9WyIXWGKVMBiWxpc3A4wVx64NPBNp4O5lmYS%2BmN2eRD5VyAzv6DwUNmJOj9V%2FsKw5k8POp%2Fv4zRMOvPir0GOqUB18ANZZZWocoJ2z04gUvaVoyElegv9zzYezkLSKhFMDevx95jiYgqdPOMHLhqVf2349An7GmPP0LMv%2BFECPXamnoWPdKBOtGux3BBvx4ao64Qc8FXPMuV%2BBbBfHJhl6XfKXKeGBg3%2Fit68VIYQOtrx2tmaSpxZEN7519g7jZr%2FFlZjb5V544kVrXl4PvABpOhvJjIdGslWgaJ8azeKP10saN6slUY&X-Amz-Signature=dc1ebda1a5c943f7ff5a934a6f77e7d782e62092ee614695988feaed775efa24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTASUFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDMEiOiub%2FdSacnVvGkeNA3FDogDz6WyRgsRbdPPgxXEgIgCe%2FaQZIJ9EIXhzsXj%2B%2BA05WWipa1M36HHE2EXrUro4wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBMAw0wKDNcojfSl3ircA7GTR2gSWaAqdBXjL5ZAiSLRiClFSoWdtU288UpE1eTxnkq3kvAQ7Csqkxbmu98H%2BwmmvcyYfN8u6rGlhA%2Fjggo%2F25UEpb3WjJts2o%2FVksEFwYY3z0gtyRW5tNhvtw60TXcuqkTgIEQxlE9TXk0a5cDPK8up8pwxeVW%2FrbgyDhhCQtQrGn9EHgMSHpS6z5a3cOhzhQpAfZzuAifz4uTHFpPmjjkNB9%2F6eo7UFGKryBpT7%2FezQSXO3qxEKxcfGQ4QNFhNnHJzfwLXZkySvN65RwDnrQyBRfoEQE3Izf2IidbETn3YwvVxFKGckxYIjoF%2BVb1rYaoioPHrH5%2BMTciJXjztb48wXmFe%2FHdM1rFrjU84kRe%2FNR1FiDy%2BWX6qWqxsX1Y9%2Br0vfEOvPaCAEn7Ll%2Bed67g8CvJnAdwx4s19ZEPZaptiCI4Vrz%2F0mWXDBZ%2FnIHCcSjH9efzEN6t%2B9m0aYayb0zruQIeaNPxNJfzkumfzd5rS%2FPDPLh5gfpthWh7AVa0l0osrOCuyS4cA3ocxU7XXjzh3zzdERC3tmHpkPl8%2B4hlGW9WyIXWGKVMBiWxpc3A4wVx64NPBNp4O5lmYS%2BmN2eRD5VyAzv6DwUNmJOj9V%2FsKw5k8POp%2Fv4zRMOvPir0GOqUB18ANZZZWocoJ2z04gUvaVoyElegv9zzYezkLSKhFMDevx95jiYgqdPOMHLhqVf2349An7GmPP0LMv%2BFECPXamnoWPdKBOtGux3BBvx4ao64Qc8FXPMuV%2BBbBfHJhl6XfKXKeGBg3%2Fit68VIYQOtrx2tmaSpxZEN7519g7jZr%2FFlZjb5V544kVrXl4PvABpOhvJjIdGslWgaJ8azeKP10saN6slUY&X-Amz-Signature=be362eb48e03a476e5be746132bd80c004b4fe68d6ceee825447ace5b33f3296&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTASUFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDMEiOiub%2FdSacnVvGkeNA3FDogDz6WyRgsRbdPPgxXEgIgCe%2FaQZIJ9EIXhzsXj%2B%2BA05WWipa1M36HHE2EXrUro4wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBMAw0wKDNcojfSl3ircA7GTR2gSWaAqdBXjL5ZAiSLRiClFSoWdtU288UpE1eTxnkq3kvAQ7Csqkxbmu98H%2BwmmvcyYfN8u6rGlhA%2Fjggo%2F25UEpb3WjJts2o%2FVksEFwYY3z0gtyRW5tNhvtw60TXcuqkTgIEQxlE9TXk0a5cDPK8up8pwxeVW%2FrbgyDhhCQtQrGn9EHgMSHpS6z5a3cOhzhQpAfZzuAifz4uTHFpPmjjkNB9%2F6eo7UFGKryBpT7%2FezQSXO3qxEKxcfGQ4QNFhNnHJzfwLXZkySvN65RwDnrQyBRfoEQE3Izf2IidbETn3YwvVxFKGckxYIjoF%2BVb1rYaoioPHrH5%2BMTciJXjztb48wXmFe%2FHdM1rFrjU84kRe%2FNR1FiDy%2BWX6qWqxsX1Y9%2Br0vfEOvPaCAEn7Ll%2Bed67g8CvJnAdwx4s19ZEPZaptiCI4Vrz%2F0mWXDBZ%2FnIHCcSjH9efzEN6t%2B9m0aYayb0zruQIeaNPxNJfzkumfzd5rS%2FPDPLh5gfpthWh7AVa0l0osrOCuyS4cA3ocxU7XXjzh3zzdERC3tmHpkPl8%2B4hlGW9WyIXWGKVMBiWxpc3A4wVx64NPBNp4O5lmYS%2BmN2eRD5VyAzv6DwUNmJOj9V%2FsKw5k8POp%2Fv4zRMOvPir0GOqUB18ANZZZWocoJ2z04gUvaVoyElegv9zzYezkLSKhFMDevx95jiYgqdPOMHLhqVf2349An7GmPP0LMv%2BFECPXamnoWPdKBOtGux3BBvx4ao64Qc8FXPMuV%2BBbBfHJhl6XfKXKeGBg3%2Fit68VIYQOtrx2tmaSpxZEN7519g7jZr%2FFlZjb5V544kVrXl4PvABpOhvJjIdGslWgaJ8azeKP10saN6slUY&X-Amz-Signature=6ad8da601f30f9f60966d8deb47c6803eb978c9e4b6a8fcf5b0440a0398ae995&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTASUFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDMEiOiub%2FdSacnVvGkeNA3FDogDz6WyRgsRbdPPgxXEgIgCe%2FaQZIJ9EIXhzsXj%2B%2BA05WWipa1M36HHE2EXrUro4wq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBMAw0wKDNcojfSl3ircA7GTR2gSWaAqdBXjL5ZAiSLRiClFSoWdtU288UpE1eTxnkq3kvAQ7Csqkxbmu98H%2BwmmvcyYfN8u6rGlhA%2Fjggo%2F25UEpb3WjJts2o%2FVksEFwYY3z0gtyRW5tNhvtw60TXcuqkTgIEQxlE9TXk0a5cDPK8up8pwxeVW%2FrbgyDhhCQtQrGn9EHgMSHpS6z5a3cOhzhQpAfZzuAifz4uTHFpPmjjkNB9%2F6eo7UFGKryBpT7%2FezQSXO3qxEKxcfGQ4QNFhNnHJzfwLXZkySvN65RwDnrQyBRfoEQE3Izf2IidbETn3YwvVxFKGckxYIjoF%2BVb1rYaoioPHrH5%2BMTciJXjztb48wXmFe%2FHdM1rFrjU84kRe%2FNR1FiDy%2BWX6qWqxsX1Y9%2Br0vfEOvPaCAEn7Ll%2Bed67g8CvJnAdwx4s19ZEPZaptiCI4Vrz%2F0mWXDBZ%2FnIHCcSjH9efzEN6t%2B9m0aYayb0zruQIeaNPxNJfzkumfzd5rS%2FPDPLh5gfpthWh7AVa0l0osrOCuyS4cA3ocxU7XXjzh3zzdERC3tmHpkPl8%2B4hlGW9WyIXWGKVMBiWxpc3A4wVx64NPBNp4O5lmYS%2BmN2eRD5VyAzv6DwUNmJOj9V%2FsKw5k8POp%2Fv4zRMOvPir0GOqUB18ANZZZWocoJ2z04gUvaVoyElegv9zzYezkLSKhFMDevx95jiYgqdPOMHLhqVf2349An7GmPP0LMv%2BFECPXamnoWPdKBOtGux3BBvx4ao64Qc8FXPMuV%2BBbBfHJhl6XfKXKeGBg3%2Fit68VIYQOtrx2tmaSpxZEN7519g7jZr%2FFlZjb5V544kVrXl4PvABpOhvJjIdGslWgaJ8azeKP10saN6slUY&X-Amz-Signature=e4a4a30e53d52a059eb41276270ca66a9301eb992cc5fa2765915102f2dc29a7&X-Amz-SignedHeaders=host&x-id=GetObject)
