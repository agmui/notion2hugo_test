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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GDRHJ3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrajJHslCyDyhVlzVmtcxyrILhAKfBS2e8gzN8ZXZwAiBjIv7I1y0ziruOqYeuCGl3aLdoInRz3sxVggRGaVzgCiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSI7VDXM9uHeczEEKtwD2l9w9Vqqgsge%2FOgpV%2FUxke7Pwhn6fHC8m9QWR6AqBwioMh3jmeTjisrHllFlKR3OPzD4We8nH2iSdo%2Fp0fagi1h4nzhUvtKS2JH%2F%2FpLcGbCrqA5%2F6%2Ble3I3vWx31Cvtx4DaemYIQ7OmdoHHOxCjxYDxraORuV1xgiSGp8HAOSUZqqkOR8yR5eP3UV10WSSzld89NVeTnh5qCAET5qZBXXupljDCeNoLWtR%2BfcEHmOnugH%2F0yhQcHpxFsxctEegFi%2BPR7mjDj%2FBy6c%2FQyHDKQbJwz1umlhurB13a2q%2FtjuZTWF1FAlZqtEaPtY3s54wW92%2F6GyD09P2eMtCp0kVo6gbwxjTD%2Fn9PFVZDf4kfE2L2SUy7%2Fp6MPHGxiyirOPhY%2Fop6OP8fu6mJv9V%2FogfEr%2BrYfh1AnU1Xt0EKAeqV2eCoeQryE5z1fZv1WPhTOweTxPOzYm1KPXfGbiumm6VYd%2B22QEHBvn4XPBG0YPZ0dhp%2FQQfdqHGopdN6CMx8%2BVhsXsKm7cceY%2FvfapjA%2BMNMFBcqJUGiQjMv3M%2BxGmmnIm0bYnDmudgq6VFTQcQLndlADqCEldXAHFWYTkMUTmbXm04mgfCHW%2FSzs1JlePd2rO88PQ9hbzNc6VAg8tWEwzYGEwwY6pgF%2BS1sUeB%2Bg65XLqfA5BJwzgMDk%2B7Jte3NOl%2Frpkb10NIncaJGuM9J%2BdvtrX5ZP0CZ%2B%2Bv70pOAYI2G3SgDZDB1c8QODAwhH72kCJrPzmJerTDwtss0j7tJmgStWb3oOocuoLTcwfnxgUdF9JyaEnKpjVVLieNKbafroQZWyzpFqxNVMIGmDI%2BeOFuRTAPkEQCaUDYV3lCmNqo3cVFyE44d2gsdD%2BVUt&X-Amz-Signature=aff72257507fb77f1fb4af0cd5ed1bf0bf260e441398b3711d3f8da80036a64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GDRHJ3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrajJHslCyDyhVlzVmtcxyrILhAKfBS2e8gzN8ZXZwAiBjIv7I1y0ziruOqYeuCGl3aLdoInRz3sxVggRGaVzgCiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSI7VDXM9uHeczEEKtwD2l9w9Vqqgsge%2FOgpV%2FUxke7Pwhn6fHC8m9QWR6AqBwioMh3jmeTjisrHllFlKR3OPzD4We8nH2iSdo%2Fp0fagi1h4nzhUvtKS2JH%2F%2FpLcGbCrqA5%2F6%2Ble3I3vWx31Cvtx4DaemYIQ7OmdoHHOxCjxYDxraORuV1xgiSGp8HAOSUZqqkOR8yR5eP3UV10WSSzld89NVeTnh5qCAET5qZBXXupljDCeNoLWtR%2BfcEHmOnugH%2F0yhQcHpxFsxctEegFi%2BPR7mjDj%2FBy6c%2FQyHDKQbJwz1umlhurB13a2q%2FtjuZTWF1FAlZqtEaPtY3s54wW92%2F6GyD09P2eMtCp0kVo6gbwxjTD%2Fn9PFVZDf4kfE2L2SUy7%2Fp6MPHGxiyirOPhY%2Fop6OP8fu6mJv9V%2FogfEr%2BrYfh1AnU1Xt0EKAeqV2eCoeQryE5z1fZv1WPhTOweTxPOzYm1KPXfGbiumm6VYd%2B22QEHBvn4XPBG0YPZ0dhp%2FQQfdqHGopdN6CMx8%2BVhsXsKm7cceY%2FvfapjA%2BMNMFBcqJUGiQjMv3M%2BxGmmnIm0bYnDmudgq6VFTQcQLndlADqCEldXAHFWYTkMUTmbXm04mgfCHW%2FSzs1JlePd2rO88PQ9hbzNc6VAg8tWEwzYGEwwY6pgF%2BS1sUeB%2Bg65XLqfA5BJwzgMDk%2B7Jte3NOl%2Frpkb10NIncaJGuM9J%2BdvtrX5ZP0CZ%2B%2Bv70pOAYI2G3SgDZDB1c8QODAwhH72kCJrPzmJerTDwtss0j7tJmgStWb3oOocuoLTcwfnxgUdF9JyaEnKpjVVLieNKbafroQZWyzpFqxNVMIGmDI%2BeOFuRTAPkEQCaUDYV3lCmNqo3cVFyE44d2gsdD%2BVUt&X-Amz-Signature=18d8138ef7477c52aab6fcbbaca35192e061245e705728c3e0c14ec869005588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GDRHJ3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrajJHslCyDyhVlzVmtcxyrILhAKfBS2e8gzN8ZXZwAiBjIv7I1y0ziruOqYeuCGl3aLdoInRz3sxVggRGaVzgCiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSI7VDXM9uHeczEEKtwD2l9w9Vqqgsge%2FOgpV%2FUxke7Pwhn6fHC8m9QWR6AqBwioMh3jmeTjisrHllFlKR3OPzD4We8nH2iSdo%2Fp0fagi1h4nzhUvtKS2JH%2F%2FpLcGbCrqA5%2F6%2Ble3I3vWx31Cvtx4DaemYIQ7OmdoHHOxCjxYDxraORuV1xgiSGp8HAOSUZqqkOR8yR5eP3UV10WSSzld89NVeTnh5qCAET5qZBXXupljDCeNoLWtR%2BfcEHmOnugH%2F0yhQcHpxFsxctEegFi%2BPR7mjDj%2FBy6c%2FQyHDKQbJwz1umlhurB13a2q%2FtjuZTWF1FAlZqtEaPtY3s54wW92%2F6GyD09P2eMtCp0kVo6gbwxjTD%2Fn9PFVZDf4kfE2L2SUy7%2Fp6MPHGxiyirOPhY%2Fop6OP8fu6mJv9V%2FogfEr%2BrYfh1AnU1Xt0EKAeqV2eCoeQryE5z1fZv1WPhTOweTxPOzYm1KPXfGbiumm6VYd%2B22QEHBvn4XPBG0YPZ0dhp%2FQQfdqHGopdN6CMx8%2BVhsXsKm7cceY%2FvfapjA%2BMNMFBcqJUGiQjMv3M%2BxGmmnIm0bYnDmudgq6VFTQcQLndlADqCEldXAHFWYTkMUTmbXm04mgfCHW%2FSzs1JlePd2rO88PQ9hbzNc6VAg8tWEwzYGEwwY6pgF%2BS1sUeB%2Bg65XLqfA5BJwzgMDk%2B7Jte3NOl%2Frpkb10NIncaJGuM9J%2BdvtrX5ZP0CZ%2B%2Bv70pOAYI2G3SgDZDB1c8QODAwhH72kCJrPzmJerTDwtss0j7tJmgStWb3oOocuoLTcwfnxgUdF9JyaEnKpjVVLieNKbafroQZWyzpFqxNVMIGmDI%2BeOFuRTAPkEQCaUDYV3lCmNqo3cVFyE44d2gsdD%2BVUt&X-Amz-Signature=869f3756dbb93478dec2789064f1e9ee36dbcb2871aed166b4dc4e0e18595dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GDRHJ3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrajJHslCyDyhVlzVmtcxyrILhAKfBS2e8gzN8ZXZwAiBjIv7I1y0ziruOqYeuCGl3aLdoInRz3sxVggRGaVzgCiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSI7VDXM9uHeczEEKtwD2l9w9Vqqgsge%2FOgpV%2FUxke7Pwhn6fHC8m9QWR6AqBwioMh3jmeTjisrHllFlKR3OPzD4We8nH2iSdo%2Fp0fagi1h4nzhUvtKS2JH%2F%2FpLcGbCrqA5%2F6%2Ble3I3vWx31Cvtx4DaemYIQ7OmdoHHOxCjxYDxraORuV1xgiSGp8HAOSUZqqkOR8yR5eP3UV10WSSzld89NVeTnh5qCAET5qZBXXupljDCeNoLWtR%2BfcEHmOnugH%2F0yhQcHpxFsxctEegFi%2BPR7mjDj%2FBy6c%2FQyHDKQbJwz1umlhurB13a2q%2FtjuZTWF1FAlZqtEaPtY3s54wW92%2F6GyD09P2eMtCp0kVo6gbwxjTD%2Fn9PFVZDf4kfE2L2SUy7%2Fp6MPHGxiyirOPhY%2Fop6OP8fu6mJv9V%2FogfEr%2BrYfh1AnU1Xt0EKAeqV2eCoeQryE5z1fZv1WPhTOweTxPOzYm1KPXfGbiumm6VYd%2B22QEHBvn4XPBG0YPZ0dhp%2FQQfdqHGopdN6CMx8%2BVhsXsKm7cceY%2FvfapjA%2BMNMFBcqJUGiQjMv3M%2BxGmmnIm0bYnDmudgq6VFTQcQLndlADqCEldXAHFWYTkMUTmbXm04mgfCHW%2FSzs1JlePd2rO88PQ9hbzNc6VAg8tWEwzYGEwwY6pgF%2BS1sUeB%2Bg65XLqfA5BJwzgMDk%2B7Jte3NOl%2Frpkb10NIncaJGuM9J%2BdvtrX5ZP0CZ%2B%2Bv70pOAYI2G3SgDZDB1c8QODAwhH72kCJrPzmJerTDwtss0j7tJmgStWb3oOocuoLTcwfnxgUdF9JyaEnKpjVVLieNKbafroQZWyzpFqxNVMIGmDI%2BeOFuRTAPkEQCaUDYV3lCmNqo3cVFyE44d2gsdD%2BVUt&X-Amz-Signature=096ec18ec58c55625b79b7672c5e56122b959c721f6665257ab2249d70e775c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GDRHJ3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrajJHslCyDyhVlzVmtcxyrILhAKfBS2e8gzN8ZXZwAiBjIv7I1y0ziruOqYeuCGl3aLdoInRz3sxVggRGaVzgCiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSI7VDXM9uHeczEEKtwD2l9w9Vqqgsge%2FOgpV%2FUxke7Pwhn6fHC8m9QWR6AqBwioMh3jmeTjisrHllFlKR3OPzD4We8nH2iSdo%2Fp0fagi1h4nzhUvtKS2JH%2F%2FpLcGbCrqA5%2F6%2Ble3I3vWx31Cvtx4DaemYIQ7OmdoHHOxCjxYDxraORuV1xgiSGp8HAOSUZqqkOR8yR5eP3UV10WSSzld89NVeTnh5qCAET5qZBXXupljDCeNoLWtR%2BfcEHmOnugH%2F0yhQcHpxFsxctEegFi%2BPR7mjDj%2FBy6c%2FQyHDKQbJwz1umlhurB13a2q%2FtjuZTWF1FAlZqtEaPtY3s54wW92%2F6GyD09P2eMtCp0kVo6gbwxjTD%2Fn9PFVZDf4kfE2L2SUy7%2Fp6MPHGxiyirOPhY%2Fop6OP8fu6mJv9V%2FogfEr%2BrYfh1AnU1Xt0EKAeqV2eCoeQryE5z1fZv1WPhTOweTxPOzYm1KPXfGbiumm6VYd%2B22QEHBvn4XPBG0YPZ0dhp%2FQQfdqHGopdN6CMx8%2BVhsXsKm7cceY%2FvfapjA%2BMNMFBcqJUGiQjMv3M%2BxGmmnIm0bYnDmudgq6VFTQcQLndlADqCEldXAHFWYTkMUTmbXm04mgfCHW%2FSzs1JlePd2rO88PQ9hbzNc6VAg8tWEwzYGEwwY6pgF%2BS1sUeB%2Bg65XLqfA5BJwzgMDk%2B7Jte3NOl%2Frpkb10NIncaJGuM9J%2BdvtrX5ZP0CZ%2B%2Bv70pOAYI2G3SgDZDB1c8QODAwhH72kCJrPzmJerTDwtss0j7tJmgStWb3oOocuoLTcwfnxgUdF9JyaEnKpjVVLieNKbafroQZWyzpFqxNVMIGmDI%2BeOFuRTAPkEQCaUDYV3lCmNqo3cVFyE44d2gsdD%2BVUt&X-Amz-Signature=e6a0b0f08d6dc982e1de6c797aaf7d3a1205cd1e68316e646d60b5366bdb182b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GDRHJ3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcrajJHslCyDyhVlzVmtcxyrILhAKfBS2e8gzN8ZXZwAiBjIv7I1y0ziruOqYeuCGl3aLdoInRz3sxVggRGaVzgCiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSI7VDXM9uHeczEEKtwD2l9w9Vqqgsge%2FOgpV%2FUxke7Pwhn6fHC8m9QWR6AqBwioMh3jmeTjisrHllFlKR3OPzD4We8nH2iSdo%2Fp0fagi1h4nzhUvtKS2JH%2F%2FpLcGbCrqA5%2F6%2Ble3I3vWx31Cvtx4DaemYIQ7OmdoHHOxCjxYDxraORuV1xgiSGp8HAOSUZqqkOR8yR5eP3UV10WSSzld89NVeTnh5qCAET5qZBXXupljDCeNoLWtR%2BfcEHmOnugH%2F0yhQcHpxFsxctEegFi%2BPR7mjDj%2FBy6c%2FQyHDKQbJwz1umlhurB13a2q%2FtjuZTWF1FAlZqtEaPtY3s54wW92%2F6GyD09P2eMtCp0kVo6gbwxjTD%2Fn9PFVZDf4kfE2L2SUy7%2Fp6MPHGxiyirOPhY%2Fop6OP8fu6mJv9V%2FogfEr%2BrYfh1AnU1Xt0EKAeqV2eCoeQryE5z1fZv1WPhTOweTxPOzYm1KPXfGbiumm6VYd%2B22QEHBvn4XPBG0YPZ0dhp%2FQQfdqHGopdN6CMx8%2BVhsXsKm7cceY%2FvfapjA%2BMNMFBcqJUGiQjMv3M%2BxGmmnIm0bYnDmudgq6VFTQcQLndlADqCEldXAHFWYTkMUTmbXm04mgfCHW%2FSzs1JlePd2rO88PQ9hbzNc6VAg8tWEwzYGEwwY6pgF%2BS1sUeB%2Bg65XLqfA5BJwzgMDk%2B7Jte3NOl%2Frpkb10NIncaJGuM9J%2BdvtrX5ZP0CZ%2B%2Bv70pOAYI2G3SgDZDB1c8QODAwhH72kCJrPzmJerTDwtss0j7tJmgStWb3oOocuoLTcwfnxgUdF9JyaEnKpjVVLieNKbafroQZWyzpFqxNVMIGmDI%2BeOFuRTAPkEQCaUDYV3lCmNqo3cVFyE44d2gsdD%2BVUt&X-Amz-Signature=8b5d9c7da6cfe8cd5d1a33e3ddca7de4f0ff4d0b52696f10fa18d157eb7ac98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
