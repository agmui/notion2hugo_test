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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5BQRP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIADV5NG4rc4ZlR8IEER%2FZhQBFl52qopIkF9EZfHMzoUlAiBOylPBUw%2BuYoRKsrNEByMQ%2BaRUllgDlBLVgkDxHwU%2BMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7yYgPRM9%2F7fd%2FD%2BaKtwDwN5uHGZ%2FiogH8jOwi9mH5mu5Gr5%2Fiwdq5lLuxtribchVJP%2BBacpOKZQ4O8jmCCV5e130CeI5BruI8YMfzeEGBv98DvIIrBWPmkSO50n2LImXyCT4uCxjn1ltYqRdQePbL1N%2BcbbTh04jD9mObgSFn6AVtivZyA8v7ikcNXFzA9QjX3NoTYLUf1tDsPPZh8ZOqCzsIPSigBSgdvoyGiucr43iy1yJJlocIP2hFGsiz7nnzVlXbfvlLoRtHpXBzMGjVLyJ7%2FWtc82hKCkq0zgEPxhRcJkRR9odIxPYIkg167pcxkC4ae6XLp234G%2BByNRSHSDCJA%2BbpFUmKljyr6tMOydG0AFXK3r8DIPe90jhnC%2FelekQIkDpu3warAsIN89bQLSMN7NeROwkZzbMgRUnNIrf405gk6CyZYjhKx4OQIHsvsPSF8aIT1pcCrgbag%2FMf0ag8HGXl1OiQ6%2BnvN9LpQ4mdI1g9K8yRSHkT%2FSPKkbK%2Br%2FpEBf2j87aE%2BLFuApcU%2Bp0W4qYbl0GTZrkwPEw9bh8hjq8unM5Cj7i6I7R7NiVcD%2BOydm95XB8vpGJPIsXe25f2S%2BCzW4O5linORjFgtwSIPllFvxadCqphw4I9obOqsjlhcbXMV6ePDEw6ovkwwY6pgFFyUDKYkLHzzuWxadefKWdwdN6H51bPBM5aib5K6xsEVZIQN1FU8jbGCePVcPlfeoCoEVKMJH9KeGs2qdlb9zQpQtlMyURhdJa013b83aBYhShCyHZfjmGMX5YOCQoRUlW0UgdmHZsPEbEyh3H%2F4Jm%2BEc8BVir1JG%2FY468tW%2F6k%2Bsmf9vs22TlO3HtViFZd5mcHJxs0lBHxP6GCdmGpEpfdRfOX7r%2B&X-Amz-Signature=b0142dfdf1f792ab4ac5c6d3d0fb3f989a8752b7223be8a2e3401ed0ac83ce64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5BQRP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIADV5NG4rc4ZlR8IEER%2FZhQBFl52qopIkF9EZfHMzoUlAiBOylPBUw%2BuYoRKsrNEByMQ%2BaRUllgDlBLVgkDxHwU%2BMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7yYgPRM9%2F7fd%2FD%2BaKtwDwN5uHGZ%2FiogH8jOwi9mH5mu5Gr5%2Fiwdq5lLuxtribchVJP%2BBacpOKZQ4O8jmCCV5e130CeI5BruI8YMfzeEGBv98DvIIrBWPmkSO50n2LImXyCT4uCxjn1ltYqRdQePbL1N%2BcbbTh04jD9mObgSFn6AVtivZyA8v7ikcNXFzA9QjX3NoTYLUf1tDsPPZh8ZOqCzsIPSigBSgdvoyGiucr43iy1yJJlocIP2hFGsiz7nnzVlXbfvlLoRtHpXBzMGjVLyJ7%2FWtc82hKCkq0zgEPxhRcJkRR9odIxPYIkg167pcxkC4ae6XLp234G%2BByNRSHSDCJA%2BbpFUmKljyr6tMOydG0AFXK3r8DIPe90jhnC%2FelekQIkDpu3warAsIN89bQLSMN7NeROwkZzbMgRUnNIrf405gk6CyZYjhKx4OQIHsvsPSF8aIT1pcCrgbag%2FMf0ag8HGXl1OiQ6%2BnvN9LpQ4mdI1g9K8yRSHkT%2FSPKkbK%2Br%2FpEBf2j87aE%2BLFuApcU%2Bp0W4qYbl0GTZrkwPEw9bh8hjq8unM5Cj7i6I7R7NiVcD%2BOydm95XB8vpGJPIsXe25f2S%2BCzW4O5linORjFgtwSIPllFvxadCqphw4I9obOqsjlhcbXMV6ePDEw6ovkwwY6pgFFyUDKYkLHzzuWxadefKWdwdN6H51bPBM5aib5K6xsEVZIQN1FU8jbGCePVcPlfeoCoEVKMJH9KeGs2qdlb9zQpQtlMyURhdJa013b83aBYhShCyHZfjmGMX5YOCQoRUlW0UgdmHZsPEbEyh3H%2F4Jm%2BEc8BVir1JG%2FY468tW%2F6k%2Bsmf9vs22TlO3HtViFZd5mcHJxs0lBHxP6GCdmGpEpfdRfOX7r%2B&X-Amz-Signature=4c5ea9fe6a87adaa7a2b6cfc8ed70e8b61d3eb2c27cc5575751adf883a60c2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5BQRP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIADV5NG4rc4ZlR8IEER%2FZhQBFl52qopIkF9EZfHMzoUlAiBOylPBUw%2BuYoRKsrNEByMQ%2BaRUllgDlBLVgkDxHwU%2BMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7yYgPRM9%2F7fd%2FD%2BaKtwDwN5uHGZ%2FiogH8jOwi9mH5mu5Gr5%2Fiwdq5lLuxtribchVJP%2BBacpOKZQ4O8jmCCV5e130CeI5BruI8YMfzeEGBv98DvIIrBWPmkSO50n2LImXyCT4uCxjn1ltYqRdQePbL1N%2BcbbTh04jD9mObgSFn6AVtivZyA8v7ikcNXFzA9QjX3NoTYLUf1tDsPPZh8ZOqCzsIPSigBSgdvoyGiucr43iy1yJJlocIP2hFGsiz7nnzVlXbfvlLoRtHpXBzMGjVLyJ7%2FWtc82hKCkq0zgEPxhRcJkRR9odIxPYIkg167pcxkC4ae6XLp234G%2BByNRSHSDCJA%2BbpFUmKljyr6tMOydG0AFXK3r8DIPe90jhnC%2FelekQIkDpu3warAsIN89bQLSMN7NeROwkZzbMgRUnNIrf405gk6CyZYjhKx4OQIHsvsPSF8aIT1pcCrgbag%2FMf0ag8HGXl1OiQ6%2BnvN9LpQ4mdI1g9K8yRSHkT%2FSPKkbK%2Br%2FpEBf2j87aE%2BLFuApcU%2Bp0W4qYbl0GTZrkwPEw9bh8hjq8unM5Cj7i6I7R7NiVcD%2BOydm95XB8vpGJPIsXe25f2S%2BCzW4O5linORjFgtwSIPllFvxadCqphw4I9obOqsjlhcbXMV6ePDEw6ovkwwY6pgFFyUDKYkLHzzuWxadefKWdwdN6H51bPBM5aib5K6xsEVZIQN1FU8jbGCePVcPlfeoCoEVKMJH9KeGs2qdlb9zQpQtlMyURhdJa013b83aBYhShCyHZfjmGMX5YOCQoRUlW0UgdmHZsPEbEyh3H%2F4Jm%2BEc8BVir1JG%2FY468tW%2F6k%2Bsmf9vs22TlO3HtViFZd5mcHJxs0lBHxP6GCdmGpEpfdRfOX7r%2B&X-Amz-Signature=de8647c6530d12c4aed4c3b6c2a3d78615ea230620455d5875f07afc72a15ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5BQRP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIADV5NG4rc4ZlR8IEER%2FZhQBFl52qopIkF9EZfHMzoUlAiBOylPBUw%2BuYoRKsrNEByMQ%2BaRUllgDlBLVgkDxHwU%2BMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7yYgPRM9%2F7fd%2FD%2BaKtwDwN5uHGZ%2FiogH8jOwi9mH5mu5Gr5%2Fiwdq5lLuxtribchVJP%2BBacpOKZQ4O8jmCCV5e130CeI5BruI8YMfzeEGBv98DvIIrBWPmkSO50n2LImXyCT4uCxjn1ltYqRdQePbL1N%2BcbbTh04jD9mObgSFn6AVtivZyA8v7ikcNXFzA9QjX3NoTYLUf1tDsPPZh8ZOqCzsIPSigBSgdvoyGiucr43iy1yJJlocIP2hFGsiz7nnzVlXbfvlLoRtHpXBzMGjVLyJ7%2FWtc82hKCkq0zgEPxhRcJkRR9odIxPYIkg167pcxkC4ae6XLp234G%2BByNRSHSDCJA%2BbpFUmKljyr6tMOydG0AFXK3r8DIPe90jhnC%2FelekQIkDpu3warAsIN89bQLSMN7NeROwkZzbMgRUnNIrf405gk6CyZYjhKx4OQIHsvsPSF8aIT1pcCrgbag%2FMf0ag8HGXl1OiQ6%2BnvN9LpQ4mdI1g9K8yRSHkT%2FSPKkbK%2Br%2FpEBf2j87aE%2BLFuApcU%2Bp0W4qYbl0GTZrkwPEw9bh8hjq8unM5Cj7i6I7R7NiVcD%2BOydm95XB8vpGJPIsXe25f2S%2BCzW4O5linORjFgtwSIPllFvxadCqphw4I9obOqsjlhcbXMV6ePDEw6ovkwwY6pgFFyUDKYkLHzzuWxadefKWdwdN6H51bPBM5aib5K6xsEVZIQN1FU8jbGCePVcPlfeoCoEVKMJH9KeGs2qdlb9zQpQtlMyURhdJa013b83aBYhShCyHZfjmGMX5YOCQoRUlW0UgdmHZsPEbEyh3H%2F4Jm%2BEc8BVir1JG%2FY468tW%2F6k%2Bsmf9vs22TlO3HtViFZd5mcHJxs0lBHxP6GCdmGpEpfdRfOX7r%2B&X-Amz-Signature=b913bc76a435ceb8927d9140c8de7f9f6ec8db9f4ae1024e29dc8807d8313947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5BQRP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIADV5NG4rc4ZlR8IEER%2FZhQBFl52qopIkF9EZfHMzoUlAiBOylPBUw%2BuYoRKsrNEByMQ%2BaRUllgDlBLVgkDxHwU%2BMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7yYgPRM9%2F7fd%2FD%2BaKtwDwN5uHGZ%2FiogH8jOwi9mH5mu5Gr5%2Fiwdq5lLuxtribchVJP%2BBacpOKZQ4O8jmCCV5e130CeI5BruI8YMfzeEGBv98DvIIrBWPmkSO50n2LImXyCT4uCxjn1ltYqRdQePbL1N%2BcbbTh04jD9mObgSFn6AVtivZyA8v7ikcNXFzA9QjX3NoTYLUf1tDsPPZh8ZOqCzsIPSigBSgdvoyGiucr43iy1yJJlocIP2hFGsiz7nnzVlXbfvlLoRtHpXBzMGjVLyJ7%2FWtc82hKCkq0zgEPxhRcJkRR9odIxPYIkg167pcxkC4ae6XLp234G%2BByNRSHSDCJA%2BbpFUmKljyr6tMOydG0AFXK3r8DIPe90jhnC%2FelekQIkDpu3warAsIN89bQLSMN7NeROwkZzbMgRUnNIrf405gk6CyZYjhKx4OQIHsvsPSF8aIT1pcCrgbag%2FMf0ag8HGXl1OiQ6%2BnvN9LpQ4mdI1g9K8yRSHkT%2FSPKkbK%2Br%2FpEBf2j87aE%2BLFuApcU%2Bp0W4qYbl0GTZrkwPEw9bh8hjq8unM5Cj7i6I7R7NiVcD%2BOydm95XB8vpGJPIsXe25f2S%2BCzW4O5linORjFgtwSIPllFvxadCqphw4I9obOqsjlhcbXMV6ePDEw6ovkwwY6pgFFyUDKYkLHzzuWxadefKWdwdN6H51bPBM5aib5K6xsEVZIQN1FU8jbGCePVcPlfeoCoEVKMJH9KeGs2qdlb9zQpQtlMyURhdJa013b83aBYhShCyHZfjmGMX5YOCQoRUlW0UgdmHZsPEbEyh3H%2F4Jm%2BEc8BVir1JG%2FY468tW%2F6k%2Bsmf9vs22TlO3HtViFZd5mcHJxs0lBHxP6GCdmGpEpfdRfOX7r%2B&X-Amz-Signature=004d5a4e01566979774fbf1dcf321c6cc52c5a487bee60167f3d2318a895c682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ5BQRP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIADV5NG4rc4ZlR8IEER%2FZhQBFl52qopIkF9EZfHMzoUlAiBOylPBUw%2BuYoRKsrNEByMQ%2BaRUllgDlBLVgkDxHwU%2BMSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7yYgPRM9%2F7fd%2FD%2BaKtwDwN5uHGZ%2FiogH8jOwi9mH5mu5Gr5%2Fiwdq5lLuxtribchVJP%2BBacpOKZQ4O8jmCCV5e130CeI5BruI8YMfzeEGBv98DvIIrBWPmkSO50n2LImXyCT4uCxjn1ltYqRdQePbL1N%2BcbbTh04jD9mObgSFn6AVtivZyA8v7ikcNXFzA9QjX3NoTYLUf1tDsPPZh8ZOqCzsIPSigBSgdvoyGiucr43iy1yJJlocIP2hFGsiz7nnzVlXbfvlLoRtHpXBzMGjVLyJ7%2FWtc82hKCkq0zgEPxhRcJkRR9odIxPYIkg167pcxkC4ae6XLp234G%2BByNRSHSDCJA%2BbpFUmKljyr6tMOydG0AFXK3r8DIPe90jhnC%2FelekQIkDpu3warAsIN89bQLSMN7NeROwkZzbMgRUnNIrf405gk6CyZYjhKx4OQIHsvsPSF8aIT1pcCrgbag%2FMf0ag8HGXl1OiQ6%2BnvN9LpQ4mdI1g9K8yRSHkT%2FSPKkbK%2Br%2FpEBf2j87aE%2BLFuApcU%2Bp0W4qYbl0GTZrkwPEw9bh8hjq8unM5Cj7i6I7R7NiVcD%2BOydm95XB8vpGJPIsXe25f2S%2BCzW4O5linORjFgtwSIPllFvxadCqphw4I9obOqsjlhcbXMV6ePDEw6ovkwwY6pgFFyUDKYkLHzzuWxadefKWdwdN6H51bPBM5aib5K6xsEVZIQN1FU8jbGCePVcPlfeoCoEVKMJH9KeGs2qdlb9zQpQtlMyURhdJa013b83aBYhShCyHZfjmGMX5YOCQoRUlW0UgdmHZsPEbEyh3H%2F4Jm%2BEc8BVir1JG%2FY468tW%2F6k%2Bsmf9vs22TlO3HtViFZd5mcHJxs0lBHxP6GCdmGpEpfdRfOX7r%2B&X-Amz-Signature=9331371d6e1f7e7f7ba03f01b30ba40cd7071718f0e52b2fdb2a011a42cae3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
