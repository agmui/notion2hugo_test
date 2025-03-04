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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45WOJT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThk8a61qI2tni5BAQiOIYCbt6iD2YSPWm7Wi4rkC3mAIgCoFwapfgR31R32PCB2LQqLMBgxktFTxy3Ri8qHB7lZ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY7W2ln7d2hFto2YyrcAwd%2BXDLUIZ7C%2FkF9xLHe1LoFV6%2FSE3Pj9AbdG%2F%2BSrKfRneaK3iQff%2BVRFyjA9DPuESMMfS5uSoZQuwQHp9vvA5gIaI26Wo8UXWe3xWmzJXpqKDiKgQpVxU67GSumB84fiw3t8o%2BUXEq98ZhAhvWl2svmgXsVHOg7X4hzuVCf3hFXgUPSrcX9Fj981vVxxrAHFwNN4gNFCd6AyFFElL76zKpsGbSHqleQ54IWqtDE6RLZRbnarS5a0fVGzbeTCaGqLzagRMEPL%2FPeCktamxZbWIfxSqRWZvbAv7DJLCa%2Bwgn%2F0Cp9UAB2%2BBMzcLxH1nCt1VGFRA8UOrYthwZLb0A5OZ%2BE3w1A13T02hLFEIoJN2RTAzk3kF7YdIVG1pWHAa9NY8meBrRU3PVqU8mIddczX4I%2FMs5X36S35y%2Fa30SIaNhAbSDOm0LUrFyRz3I1rYh1tcmU6l6gl0p2M3C8%2FOJ0Ii6OZDonhdpqcKLNbZf98iEPrrRlyL2nM5jhK1zTt4PHNfi3Fi44E2lBqX2%2Bk0oD1LhoOWblltfDJAIc2izmX7XrHKobFvmbTkV55WFKcvAMKmVJE7%2BgyjyJBv8lLbN%2B%2BojtdY2n6rOhEPrVTMBVa6Uz7EbpcLNTuYIt10ldMLKemr4GOqUBwiB13iP%2FwiosmNNBxFc%2BevHfIEae3U7kjTu0VHqAELzixe33OjzqEmIYjIHBkDRIIiUJkYyTs7i4oCwH2XgxxFDktG8o2OwGcHDNHSRT0jwRk43LL%2FGkIExO5yh8ua6MrYu7M2lQ1w6ZQonfH%2FCp5PxI9%2FmPwBkLxe%2BsWCm4PSesX8Y00lA%2FW16X%2BPpCjw6PkcUxcT0zZjMxQ4PjUXcQ1Vh4rvHl&X-Amz-Signature=2ffec09026d1a05995a88073d682ad11baeb564e01a12916aab132c5a1eaa8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45WOJT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThk8a61qI2tni5BAQiOIYCbt6iD2YSPWm7Wi4rkC3mAIgCoFwapfgR31R32PCB2LQqLMBgxktFTxy3Ri8qHB7lZ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY7W2ln7d2hFto2YyrcAwd%2BXDLUIZ7C%2FkF9xLHe1LoFV6%2FSE3Pj9AbdG%2F%2BSrKfRneaK3iQff%2BVRFyjA9DPuESMMfS5uSoZQuwQHp9vvA5gIaI26Wo8UXWe3xWmzJXpqKDiKgQpVxU67GSumB84fiw3t8o%2BUXEq98ZhAhvWl2svmgXsVHOg7X4hzuVCf3hFXgUPSrcX9Fj981vVxxrAHFwNN4gNFCd6AyFFElL76zKpsGbSHqleQ54IWqtDE6RLZRbnarS5a0fVGzbeTCaGqLzagRMEPL%2FPeCktamxZbWIfxSqRWZvbAv7DJLCa%2Bwgn%2F0Cp9UAB2%2BBMzcLxH1nCt1VGFRA8UOrYthwZLb0A5OZ%2BE3w1A13T02hLFEIoJN2RTAzk3kF7YdIVG1pWHAa9NY8meBrRU3PVqU8mIddczX4I%2FMs5X36S35y%2Fa30SIaNhAbSDOm0LUrFyRz3I1rYh1tcmU6l6gl0p2M3C8%2FOJ0Ii6OZDonhdpqcKLNbZf98iEPrrRlyL2nM5jhK1zTt4PHNfi3Fi44E2lBqX2%2Bk0oD1LhoOWblltfDJAIc2izmX7XrHKobFvmbTkV55WFKcvAMKmVJE7%2BgyjyJBv8lLbN%2B%2BojtdY2n6rOhEPrVTMBVa6Uz7EbpcLNTuYIt10ldMLKemr4GOqUBwiB13iP%2FwiosmNNBxFc%2BevHfIEae3U7kjTu0VHqAELzixe33OjzqEmIYjIHBkDRIIiUJkYyTs7i4oCwH2XgxxFDktG8o2OwGcHDNHSRT0jwRk43LL%2FGkIExO5yh8ua6MrYu7M2lQ1w6ZQonfH%2FCp5PxI9%2FmPwBkLxe%2BsWCm4PSesX8Y00lA%2FW16X%2BPpCjw6PkcUxcT0zZjMxQ4PjUXcQ1Vh4rvHl&X-Amz-Signature=6547c62a18510ed9625aa8540bbacfbcd2589d3ab82104949734b4d1bcbeeaec&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45WOJT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThk8a61qI2tni5BAQiOIYCbt6iD2YSPWm7Wi4rkC3mAIgCoFwapfgR31R32PCB2LQqLMBgxktFTxy3Ri8qHB7lZ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY7W2ln7d2hFto2YyrcAwd%2BXDLUIZ7C%2FkF9xLHe1LoFV6%2FSE3Pj9AbdG%2F%2BSrKfRneaK3iQff%2BVRFyjA9DPuESMMfS5uSoZQuwQHp9vvA5gIaI26Wo8UXWe3xWmzJXpqKDiKgQpVxU67GSumB84fiw3t8o%2BUXEq98ZhAhvWl2svmgXsVHOg7X4hzuVCf3hFXgUPSrcX9Fj981vVxxrAHFwNN4gNFCd6AyFFElL76zKpsGbSHqleQ54IWqtDE6RLZRbnarS5a0fVGzbeTCaGqLzagRMEPL%2FPeCktamxZbWIfxSqRWZvbAv7DJLCa%2Bwgn%2F0Cp9UAB2%2BBMzcLxH1nCt1VGFRA8UOrYthwZLb0A5OZ%2BE3w1A13T02hLFEIoJN2RTAzk3kF7YdIVG1pWHAa9NY8meBrRU3PVqU8mIddczX4I%2FMs5X36S35y%2Fa30SIaNhAbSDOm0LUrFyRz3I1rYh1tcmU6l6gl0p2M3C8%2FOJ0Ii6OZDonhdpqcKLNbZf98iEPrrRlyL2nM5jhK1zTt4PHNfi3Fi44E2lBqX2%2Bk0oD1LhoOWblltfDJAIc2izmX7XrHKobFvmbTkV55WFKcvAMKmVJE7%2BgyjyJBv8lLbN%2B%2BojtdY2n6rOhEPrVTMBVa6Uz7EbpcLNTuYIt10ldMLKemr4GOqUBwiB13iP%2FwiosmNNBxFc%2BevHfIEae3U7kjTu0VHqAELzixe33OjzqEmIYjIHBkDRIIiUJkYyTs7i4oCwH2XgxxFDktG8o2OwGcHDNHSRT0jwRk43LL%2FGkIExO5yh8ua6MrYu7M2lQ1w6ZQonfH%2FCp5PxI9%2FmPwBkLxe%2BsWCm4PSesX8Y00lA%2FW16X%2BPpCjw6PkcUxcT0zZjMxQ4PjUXcQ1Vh4rvHl&X-Amz-Signature=f4da30c326d6506b5bf3b1f1f5239a9f3b9cd94e0451b3aa7d6e5e119d7faa5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45WOJT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThk8a61qI2tni5BAQiOIYCbt6iD2YSPWm7Wi4rkC3mAIgCoFwapfgR31R32PCB2LQqLMBgxktFTxy3Ri8qHB7lZ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY7W2ln7d2hFto2YyrcAwd%2BXDLUIZ7C%2FkF9xLHe1LoFV6%2FSE3Pj9AbdG%2F%2BSrKfRneaK3iQff%2BVRFyjA9DPuESMMfS5uSoZQuwQHp9vvA5gIaI26Wo8UXWe3xWmzJXpqKDiKgQpVxU67GSumB84fiw3t8o%2BUXEq98ZhAhvWl2svmgXsVHOg7X4hzuVCf3hFXgUPSrcX9Fj981vVxxrAHFwNN4gNFCd6AyFFElL76zKpsGbSHqleQ54IWqtDE6RLZRbnarS5a0fVGzbeTCaGqLzagRMEPL%2FPeCktamxZbWIfxSqRWZvbAv7DJLCa%2Bwgn%2F0Cp9UAB2%2BBMzcLxH1nCt1VGFRA8UOrYthwZLb0A5OZ%2BE3w1A13T02hLFEIoJN2RTAzk3kF7YdIVG1pWHAa9NY8meBrRU3PVqU8mIddczX4I%2FMs5X36S35y%2Fa30SIaNhAbSDOm0LUrFyRz3I1rYh1tcmU6l6gl0p2M3C8%2FOJ0Ii6OZDonhdpqcKLNbZf98iEPrrRlyL2nM5jhK1zTt4PHNfi3Fi44E2lBqX2%2Bk0oD1LhoOWblltfDJAIc2izmX7XrHKobFvmbTkV55WFKcvAMKmVJE7%2BgyjyJBv8lLbN%2B%2BojtdY2n6rOhEPrVTMBVa6Uz7EbpcLNTuYIt10ldMLKemr4GOqUBwiB13iP%2FwiosmNNBxFc%2BevHfIEae3U7kjTu0VHqAELzixe33OjzqEmIYjIHBkDRIIiUJkYyTs7i4oCwH2XgxxFDktG8o2OwGcHDNHSRT0jwRk43LL%2FGkIExO5yh8ua6MrYu7M2lQ1w6ZQonfH%2FCp5PxI9%2FmPwBkLxe%2BsWCm4PSesX8Y00lA%2FW16X%2BPpCjw6PkcUxcT0zZjMxQ4PjUXcQ1Vh4rvHl&X-Amz-Signature=67c25324edfbaea63863a5c2253252e8861d01a9b8fb07287fe19e58721ed6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45WOJT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThk8a61qI2tni5BAQiOIYCbt6iD2YSPWm7Wi4rkC3mAIgCoFwapfgR31R32PCB2LQqLMBgxktFTxy3Ri8qHB7lZ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY7W2ln7d2hFto2YyrcAwd%2BXDLUIZ7C%2FkF9xLHe1LoFV6%2FSE3Pj9AbdG%2F%2BSrKfRneaK3iQff%2BVRFyjA9DPuESMMfS5uSoZQuwQHp9vvA5gIaI26Wo8UXWe3xWmzJXpqKDiKgQpVxU67GSumB84fiw3t8o%2BUXEq98ZhAhvWl2svmgXsVHOg7X4hzuVCf3hFXgUPSrcX9Fj981vVxxrAHFwNN4gNFCd6AyFFElL76zKpsGbSHqleQ54IWqtDE6RLZRbnarS5a0fVGzbeTCaGqLzagRMEPL%2FPeCktamxZbWIfxSqRWZvbAv7DJLCa%2Bwgn%2F0Cp9UAB2%2BBMzcLxH1nCt1VGFRA8UOrYthwZLb0A5OZ%2BE3w1A13T02hLFEIoJN2RTAzk3kF7YdIVG1pWHAa9NY8meBrRU3PVqU8mIddczX4I%2FMs5X36S35y%2Fa30SIaNhAbSDOm0LUrFyRz3I1rYh1tcmU6l6gl0p2M3C8%2FOJ0Ii6OZDonhdpqcKLNbZf98iEPrrRlyL2nM5jhK1zTt4PHNfi3Fi44E2lBqX2%2Bk0oD1LhoOWblltfDJAIc2izmX7XrHKobFvmbTkV55WFKcvAMKmVJE7%2BgyjyJBv8lLbN%2B%2BojtdY2n6rOhEPrVTMBVa6Uz7EbpcLNTuYIt10ldMLKemr4GOqUBwiB13iP%2FwiosmNNBxFc%2BevHfIEae3U7kjTu0VHqAELzixe33OjzqEmIYjIHBkDRIIiUJkYyTs7i4oCwH2XgxxFDktG8o2OwGcHDNHSRT0jwRk43LL%2FGkIExO5yh8ua6MrYu7M2lQ1w6ZQonfH%2FCp5PxI9%2FmPwBkLxe%2BsWCm4PSesX8Y00lA%2FW16X%2BPpCjw6PkcUxcT0zZjMxQ4PjUXcQ1Vh4rvHl&X-Amz-Signature=2cbc16300cf941461b4ff8edee3a4ffa5337b7eaafa65547175b35e6f7fd8e59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH45WOJT%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDThk8a61qI2tni5BAQiOIYCbt6iD2YSPWm7Wi4rkC3mAIgCoFwapfgR31R32PCB2LQqLMBgxktFTxy3Ri8qHB7lZ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDY7W2ln7d2hFto2YyrcAwd%2BXDLUIZ7C%2FkF9xLHe1LoFV6%2FSE3Pj9AbdG%2F%2BSrKfRneaK3iQff%2BVRFyjA9DPuESMMfS5uSoZQuwQHp9vvA5gIaI26Wo8UXWe3xWmzJXpqKDiKgQpVxU67GSumB84fiw3t8o%2BUXEq98ZhAhvWl2svmgXsVHOg7X4hzuVCf3hFXgUPSrcX9Fj981vVxxrAHFwNN4gNFCd6AyFFElL76zKpsGbSHqleQ54IWqtDE6RLZRbnarS5a0fVGzbeTCaGqLzagRMEPL%2FPeCktamxZbWIfxSqRWZvbAv7DJLCa%2Bwgn%2F0Cp9UAB2%2BBMzcLxH1nCt1VGFRA8UOrYthwZLb0A5OZ%2BE3w1A13T02hLFEIoJN2RTAzk3kF7YdIVG1pWHAa9NY8meBrRU3PVqU8mIddczX4I%2FMs5X36S35y%2Fa30SIaNhAbSDOm0LUrFyRz3I1rYh1tcmU6l6gl0p2M3C8%2FOJ0Ii6OZDonhdpqcKLNbZf98iEPrrRlyL2nM5jhK1zTt4PHNfi3Fi44E2lBqX2%2Bk0oD1LhoOWblltfDJAIc2izmX7XrHKobFvmbTkV55WFKcvAMKmVJE7%2BgyjyJBv8lLbN%2B%2BojtdY2n6rOhEPrVTMBVa6Uz7EbpcLNTuYIt10ldMLKemr4GOqUBwiB13iP%2FwiosmNNBxFc%2BevHfIEae3U7kjTu0VHqAELzixe33OjzqEmIYjIHBkDRIIiUJkYyTs7i4oCwH2XgxxFDktG8o2OwGcHDNHSRT0jwRk43LL%2FGkIExO5yh8ua6MrYu7M2lQ1w6ZQonfH%2FCp5PxI9%2FmPwBkLxe%2BsWCm4PSesX8Y00lA%2FW16X%2BPpCjw6PkcUxcT0zZjMxQ4PjUXcQ1Vh4rvHl&X-Amz-Signature=99a6fa24836765ca2b55a04c2bf210fb4188762b3915ad7d195767d762b78834&X-Amz-SignedHeaders=host&x-id=GetObject)
