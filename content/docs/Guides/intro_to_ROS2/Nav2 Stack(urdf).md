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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIKTUE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH1PqQQ%2BpO%2FDjQWDDn%2FXCa%2BPSGvi%2BLpGRwOg6j%2FbQ01AiBC%2B%2FZqjfRmcDOeY79kvOkFUVgM4mymMaOk2RhvUPvTbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7c6B3bApMCkXjK9UKtwD3pAMy18TfI06EVbmXIhCXPG7M4ixWRGP%2FAsTJbYmfSlw4cikwWOEFqfzwBlTxl3wMxPNIym9oOhhBjp0eC9fYHyX0n7QT12D6iVUJsobk1hUbxK%2BKeapJd2RKpo46kO0bqlZdYLnLQtE45SFJUKHsduz1lVeVxggPsvDmSGmLx8CaetMfCrIoG0nYqNGF1Y87O5dvkrtEE4fdIF1VMbp65Pacc40m5JqfBeYxbV3mg4vcasjKFu62QPteDRewCySpACxyxRU%2FfS8PMsThBRPrBAWwLM9%2BSjg3WaOzugeK6Y6eM5w6EzGtlQs7xpOMDNKCjnakx2CBgbyxDyWW8Bj8X07qcSfd050ZAlrWDHzl0keOcok5Wefkzf%2Bv0nGa12Ea3j88Ku1f4rj%2BXcm4MM3MduBq1KIwyVvYEPqAwvgbuxl2yA8atn561LZ35Bq6FpxwPRGzwn8n6U9l9p3OUHgTAZ1GNTuvJZSoGlcGVIDPVRZ6l1wTxvLS86GKO6wkEtwUwnKobLETB82Xiq3mOasFeOxW9xtXvh%2B6w%2F47yS7LRh77H6YHe9fYiHNmpzbBpP%2BhyP4XTYESG2lKtD62LCJvQeUmsjtY6rjh8ywrsP1PnMyBZ0SlRhecRzvuz8wrbOWwgY6pgETu3SlQ1gBAYGsH130BJSNHT%2BuviSgvkn7E2sSHaDdMDs4WXsed6TXah408IssqLh%2BZI24Taf5SxwR%2FNqA0M7Db01CgQbz4V0dP2042zFw13WmbHjgXJFk%2FzmsS82%2FyIliYZH3XcVs7EI%2F%2F6RItnRGqojAQs9CYpPbpsP%2Btzhqk0kJKSovZpTYoFvY36zenzjortTFgi%2F6lnCw82e%2FJCPdUTCg%2F3Yf&X-Amz-Signature=32041dc0b39334e9d030eb00509b1d3936e4aac00ca4837f2c88b5edcfd1e507&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIKTUE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH1PqQQ%2BpO%2FDjQWDDn%2FXCa%2BPSGvi%2BLpGRwOg6j%2FbQ01AiBC%2B%2FZqjfRmcDOeY79kvOkFUVgM4mymMaOk2RhvUPvTbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7c6B3bApMCkXjK9UKtwD3pAMy18TfI06EVbmXIhCXPG7M4ixWRGP%2FAsTJbYmfSlw4cikwWOEFqfzwBlTxl3wMxPNIym9oOhhBjp0eC9fYHyX0n7QT12D6iVUJsobk1hUbxK%2BKeapJd2RKpo46kO0bqlZdYLnLQtE45SFJUKHsduz1lVeVxggPsvDmSGmLx8CaetMfCrIoG0nYqNGF1Y87O5dvkrtEE4fdIF1VMbp65Pacc40m5JqfBeYxbV3mg4vcasjKFu62QPteDRewCySpACxyxRU%2FfS8PMsThBRPrBAWwLM9%2BSjg3WaOzugeK6Y6eM5w6EzGtlQs7xpOMDNKCjnakx2CBgbyxDyWW8Bj8X07qcSfd050ZAlrWDHzl0keOcok5Wefkzf%2Bv0nGa12Ea3j88Ku1f4rj%2BXcm4MM3MduBq1KIwyVvYEPqAwvgbuxl2yA8atn561LZ35Bq6FpxwPRGzwn8n6U9l9p3OUHgTAZ1GNTuvJZSoGlcGVIDPVRZ6l1wTxvLS86GKO6wkEtwUwnKobLETB82Xiq3mOasFeOxW9xtXvh%2B6w%2F47yS7LRh77H6YHe9fYiHNmpzbBpP%2BhyP4XTYESG2lKtD62LCJvQeUmsjtY6rjh8ywrsP1PnMyBZ0SlRhecRzvuz8wrbOWwgY6pgETu3SlQ1gBAYGsH130BJSNHT%2BuviSgvkn7E2sSHaDdMDs4WXsed6TXah408IssqLh%2BZI24Taf5SxwR%2FNqA0M7Db01CgQbz4V0dP2042zFw13WmbHjgXJFk%2FzmsS82%2FyIliYZH3XcVs7EI%2F%2F6RItnRGqojAQs9CYpPbpsP%2Btzhqk0kJKSovZpTYoFvY36zenzjortTFgi%2F6lnCw82e%2FJCPdUTCg%2F3Yf&X-Amz-Signature=1393b2e5e6523d4cc281c7b9f8e33c07b368eb64e71ee1f24d560af9574b49d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIKTUE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH1PqQQ%2BpO%2FDjQWDDn%2FXCa%2BPSGvi%2BLpGRwOg6j%2FbQ01AiBC%2B%2FZqjfRmcDOeY79kvOkFUVgM4mymMaOk2RhvUPvTbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7c6B3bApMCkXjK9UKtwD3pAMy18TfI06EVbmXIhCXPG7M4ixWRGP%2FAsTJbYmfSlw4cikwWOEFqfzwBlTxl3wMxPNIym9oOhhBjp0eC9fYHyX0n7QT12D6iVUJsobk1hUbxK%2BKeapJd2RKpo46kO0bqlZdYLnLQtE45SFJUKHsduz1lVeVxggPsvDmSGmLx8CaetMfCrIoG0nYqNGF1Y87O5dvkrtEE4fdIF1VMbp65Pacc40m5JqfBeYxbV3mg4vcasjKFu62QPteDRewCySpACxyxRU%2FfS8PMsThBRPrBAWwLM9%2BSjg3WaOzugeK6Y6eM5w6EzGtlQs7xpOMDNKCjnakx2CBgbyxDyWW8Bj8X07qcSfd050ZAlrWDHzl0keOcok5Wefkzf%2Bv0nGa12Ea3j88Ku1f4rj%2BXcm4MM3MduBq1KIwyVvYEPqAwvgbuxl2yA8atn561LZ35Bq6FpxwPRGzwn8n6U9l9p3OUHgTAZ1GNTuvJZSoGlcGVIDPVRZ6l1wTxvLS86GKO6wkEtwUwnKobLETB82Xiq3mOasFeOxW9xtXvh%2B6w%2F47yS7LRh77H6YHe9fYiHNmpzbBpP%2BhyP4XTYESG2lKtD62LCJvQeUmsjtY6rjh8ywrsP1PnMyBZ0SlRhecRzvuz8wrbOWwgY6pgETu3SlQ1gBAYGsH130BJSNHT%2BuviSgvkn7E2sSHaDdMDs4WXsed6TXah408IssqLh%2BZI24Taf5SxwR%2FNqA0M7Db01CgQbz4V0dP2042zFw13WmbHjgXJFk%2FzmsS82%2FyIliYZH3XcVs7EI%2F%2F6RItnRGqojAQs9CYpPbpsP%2Btzhqk0kJKSovZpTYoFvY36zenzjortTFgi%2F6lnCw82e%2FJCPdUTCg%2F3Yf&X-Amz-Signature=7df1ca6f3d9e3ca820da650c48484e4952880320f6efe011d0d996e6b03fe165&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIKTUE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH1PqQQ%2BpO%2FDjQWDDn%2FXCa%2BPSGvi%2BLpGRwOg6j%2FbQ01AiBC%2B%2FZqjfRmcDOeY79kvOkFUVgM4mymMaOk2RhvUPvTbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7c6B3bApMCkXjK9UKtwD3pAMy18TfI06EVbmXIhCXPG7M4ixWRGP%2FAsTJbYmfSlw4cikwWOEFqfzwBlTxl3wMxPNIym9oOhhBjp0eC9fYHyX0n7QT12D6iVUJsobk1hUbxK%2BKeapJd2RKpo46kO0bqlZdYLnLQtE45SFJUKHsduz1lVeVxggPsvDmSGmLx8CaetMfCrIoG0nYqNGF1Y87O5dvkrtEE4fdIF1VMbp65Pacc40m5JqfBeYxbV3mg4vcasjKFu62QPteDRewCySpACxyxRU%2FfS8PMsThBRPrBAWwLM9%2BSjg3WaOzugeK6Y6eM5w6EzGtlQs7xpOMDNKCjnakx2CBgbyxDyWW8Bj8X07qcSfd050ZAlrWDHzl0keOcok5Wefkzf%2Bv0nGa12Ea3j88Ku1f4rj%2BXcm4MM3MduBq1KIwyVvYEPqAwvgbuxl2yA8atn561LZ35Bq6FpxwPRGzwn8n6U9l9p3OUHgTAZ1GNTuvJZSoGlcGVIDPVRZ6l1wTxvLS86GKO6wkEtwUwnKobLETB82Xiq3mOasFeOxW9xtXvh%2B6w%2F47yS7LRh77H6YHe9fYiHNmpzbBpP%2BhyP4XTYESG2lKtD62LCJvQeUmsjtY6rjh8ywrsP1PnMyBZ0SlRhecRzvuz8wrbOWwgY6pgETu3SlQ1gBAYGsH130BJSNHT%2BuviSgvkn7E2sSHaDdMDs4WXsed6TXah408IssqLh%2BZI24Taf5SxwR%2FNqA0M7Db01CgQbz4V0dP2042zFw13WmbHjgXJFk%2FzmsS82%2FyIliYZH3XcVs7EI%2F%2F6RItnRGqojAQs9CYpPbpsP%2Btzhqk0kJKSovZpTYoFvY36zenzjortTFgi%2F6lnCw82e%2FJCPdUTCg%2F3Yf&X-Amz-Signature=e987fad9b07e7f0915a14a8df35f7c1213776eb55423f06620474eed3768ee52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIKTUE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH1PqQQ%2BpO%2FDjQWDDn%2FXCa%2BPSGvi%2BLpGRwOg6j%2FbQ01AiBC%2B%2FZqjfRmcDOeY79kvOkFUVgM4mymMaOk2RhvUPvTbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7c6B3bApMCkXjK9UKtwD3pAMy18TfI06EVbmXIhCXPG7M4ixWRGP%2FAsTJbYmfSlw4cikwWOEFqfzwBlTxl3wMxPNIym9oOhhBjp0eC9fYHyX0n7QT12D6iVUJsobk1hUbxK%2BKeapJd2RKpo46kO0bqlZdYLnLQtE45SFJUKHsduz1lVeVxggPsvDmSGmLx8CaetMfCrIoG0nYqNGF1Y87O5dvkrtEE4fdIF1VMbp65Pacc40m5JqfBeYxbV3mg4vcasjKFu62QPteDRewCySpACxyxRU%2FfS8PMsThBRPrBAWwLM9%2BSjg3WaOzugeK6Y6eM5w6EzGtlQs7xpOMDNKCjnakx2CBgbyxDyWW8Bj8X07qcSfd050ZAlrWDHzl0keOcok5Wefkzf%2Bv0nGa12Ea3j88Ku1f4rj%2BXcm4MM3MduBq1KIwyVvYEPqAwvgbuxl2yA8atn561LZ35Bq6FpxwPRGzwn8n6U9l9p3OUHgTAZ1GNTuvJZSoGlcGVIDPVRZ6l1wTxvLS86GKO6wkEtwUwnKobLETB82Xiq3mOasFeOxW9xtXvh%2B6w%2F47yS7LRh77H6YHe9fYiHNmpzbBpP%2BhyP4XTYESG2lKtD62LCJvQeUmsjtY6rjh8ywrsP1PnMyBZ0SlRhecRzvuz8wrbOWwgY6pgETu3SlQ1gBAYGsH130BJSNHT%2BuviSgvkn7E2sSHaDdMDs4WXsed6TXah408IssqLh%2BZI24Taf5SxwR%2FNqA0M7Db01CgQbz4V0dP2042zFw13WmbHjgXJFk%2FzmsS82%2FyIliYZH3XcVs7EI%2F%2F6RItnRGqojAQs9CYpPbpsP%2Btzhqk0kJKSovZpTYoFvY36zenzjortTFgi%2F6lnCw82e%2FJCPdUTCg%2F3Yf&X-Amz-Signature=ba3dcebcf3d91ba7e3976c884ba75b3de468650ee7b81204341b2e2a37619e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIKTUE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH1PqQQ%2BpO%2FDjQWDDn%2FXCa%2BPSGvi%2BLpGRwOg6j%2FbQ01AiBC%2B%2FZqjfRmcDOeY79kvOkFUVgM4mymMaOk2RhvUPvTbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7c6B3bApMCkXjK9UKtwD3pAMy18TfI06EVbmXIhCXPG7M4ixWRGP%2FAsTJbYmfSlw4cikwWOEFqfzwBlTxl3wMxPNIym9oOhhBjp0eC9fYHyX0n7QT12D6iVUJsobk1hUbxK%2BKeapJd2RKpo46kO0bqlZdYLnLQtE45SFJUKHsduz1lVeVxggPsvDmSGmLx8CaetMfCrIoG0nYqNGF1Y87O5dvkrtEE4fdIF1VMbp65Pacc40m5JqfBeYxbV3mg4vcasjKFu62QPteDRewCySpACxyxRU%2FfS8PMsThBRPrBAWwLM9%2BSjg3WaOzugeK6Y6eM5w6EzGtlQs7xpOMDNKCjnakx2CBgbyxDyWW8Bj8X07qcSfd050ZAlrWDHzl0keOcok5Wefkzf%2Bv0nGa12Ea3j88Ku1f4rj%2BXcm4MM3MduBq1KIwyVvYEPqAwvgbuxl2yA8atn561LZ35Bq6FpxwPRGzwn8n6U9l9p3OUHgTAZ1GNTuvJZSoGlcGVIDPVRZ6l1wTxvLS86GKO6wkEtwUwnKobLETB82Xiq3mOasFeOxW9xtXvh%2B6w%2F47yS7LRh77H6YHe9fYiHNmpzbBpP%2BhyP4XTYESG2lKtD62LCJvQeUmsjtY6rjh8ywrsP1PnMyBZ0SlRhecRzvuz8wrbOWwgY6pgETu3SlQ1gBAYGsH130BJSNHT%2BuviSgvkn7E2sSHaDdMDs4WXsed6TXah408IssqLh%2BZI24Taf5SxwR%2FNqA0M7Db01CgQbz4V0dP2042zFw13WmbHjgXJFk%2FzmsS82%2FyIliYZH3XcVs7EI%2F%2F6RItnRGqojAQs9CYpPbpsP%2Btzhqk0kJKSovZpTYoFvY36zenzjortTFgi%2F6lnCw82e%2FJCPdUTCg%2F3Yf&X-Amz-Signature=08e3e4f0a14b31ad636741db8ed14ccac6f9b27b86c0a858c68d650cb364c5b5&X-Amz-SignedHeaders=host&x-id=GetObject)
