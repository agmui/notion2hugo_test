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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQME5ECY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC3UbB69h6px2nzjVxRkSWElf5fEP4gz8HtcdSv6J7fwIhAM6nUk4e2UjG46uvR1Ke5Rgj8uZZV%2BHGbDkG2yjd9U1wKv8DCG4QABoMNjM3NDIzMTgzODA1Igyzd9NXfpG%2F2GZRYksq3APzMyGGILE9tPCAfFpvaOhAZAY8RrDgQ2Yu8qcPYf8x%2BszxCfftxbtfLTDpomYCU0uS0drGopgJJ%2BtgaHtBqpRt8fFv9KUr%2Bka%2F8UTL9GF8I2HQnp9hAaKw9ahhopcjPyQWKiHlC%2BsoiX16qe2e6avqipzBqbuU9SrMh9KF4LIqc%2FWaRdVL49Mxs2ABzxFeypgf5fC3M%2FTulzEFW8eKKfHNbiwvyJCyPtgPETJC9iYnIqm9KxVrto5jMde9hAyE9ydVIzjT4nsUkepGhjizBY3H%2Bi64FPHY%2FAzbXB2Y5emFuKVFn4x0X4TEW8Ek22tv%2BWUPd5HenchW6Oi7NX25isetPAskzOcVpY2OluMr4Uk8sWR0ytSgUn6rtvO8a%2B991moUakYF4WNnj9aJGKIa5rU%2FL9NJZMGSy5LjeUBjnolqqBkn25n5jL5mczorjaFUivmDvRpMmTOqByfQ%2Bg2RqrjnGLpu5HZDgrrmhFzZ9ogem9Hxz20DYrBgtZiBqCQES3llT3sqxL1UJT%2FtdZcoCZNHHCVxJEv5TrPvacgyqICub2dZIEereEqcr9cyzhzDWC7gdR5WGRzJ%2FANTG7XzKIK4PiPTPAtW%2F2c3PKNOa2%2FrUPD5v03cz6BWSYXz7jDd68PCBjqkAZG4YOydeMpL3AO1zt%2FgDBwHttzjnl8YWvtuW1nDSixONQvXZ6%2F%2Fdaeyr%2FNgWPUAXxoJ5I%2B3DxDgAJNXu5FwrZWJdK8BTYf0yyv2UXAe6KAN%2FKsghchlefWWQ7ATNHPtYRM3AapkHbaRKg%2BMaEdNooMqqnvPBIWSpO1%2BR0I90LNwcd6CBy54DasWZ%2FRbsrxSz7ELFIpMHLnV4jgehnDMrLk2A5QR&X-Amz-Signature=e4f801faa56d587e324ac7e9d9bca386ef49d9139ad419c201eda3aff1eae3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQME5ECY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC3UbB69h6px2nzjVxRkSWElf5fEP4gz8HtcdSv6J7fwIhAM6nUk4e2UjG46uvR1Ke5Rgj8uZZV%2BHGbDkG2yjd9U1wKv8DCG4QABoMNjM3NDIzMTgzODA1Igyzd9NXfpG%2F2GZRYksq3APzMyGGILE9tPCAfFpvaOhAZAY8RrDgQ2Yu8qcPYf8x%2BszxCfftxbtfLTDpomYCU0uS0drGopgJJ%2BtgaHtBqpRt8fFv9KUr%2Bka%2F8UTL9GF8I2HQnp9hAaKw9ahhopcjPyQWKiHlC%2BsoiX16qe2e6avqipzBqbuU9SrMh9KF4LIqc%2FWaRdVL49Mxs2ABzxFeypgf5fC3M%2FTulzEFW8eKKfHNbiwvyJCyPtgPETJC9iYnIqm9KxVrto5jMde9hAyE9ydVIzjT4nsUkepGhjizBY3H%2Bi64FPHY%2FAzbXB2Y5emFuKVFn4x0X4TEW8Ek22tv%2BWUPd5HenchW6Oi7NX25isetPAskzOcVpY2OluMr4Uk8sWR0ytSgUn6rtvO8a%2B991moUakYF4WNnj9aJGKIa5rU%2FL9NJZMGSy5LjeUBjnolqqBkn25n5jL5mczorjaFUivmDvRpMmTOqByfQ%2Bg2RqrjnGLpu5HZDgrrmhFzZ9ogem9Hxz20DYrBgtZiBqCQES3llT3sqxL1UJT%2FtdZcoCZNHHCVxJEv5TrPvacgyqICub2dZIEereEqcr9cyzhzDWC7gdR5WGRzJ%2FANTG7XzKIK4PiPTPAtW%2F2c3PKNOa2%2FrUPD5v03cz6BWSYXz7jDd68PCBjqkAZG4YOydeMpL3AO1zt%2FgDBwHttzjnl8YWvtuW1nDSixONQvXZ6%2F%2Fdaeyr%2FNgWPUAXxoJ5I%2B3DxDgAJNXu5FwrZWJdK8BTYf0yyv2UXAe6KAN%2FKsghchlefWWQ7ATNHPtYRM3AapkHbaRKg%2BMaEdNooMqqnvPBIWSpO1%2BR0I90LNwcd6CBy54DasWZ%2FRbsrxSz7ELFIpMHLnV4jgehnDMrLk2A5QR&X-Amz-Signature=8094d079edd809a80b420661ac10b8d85da4ba757b17a4b16bb97b7406b8e6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQME5ECY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC3UbB69h6px2nzjVxRkSWElf5fEP4gz8HtcdSv6J7fwIhAM6nUk4e2UjG46uvR1Ke5Rgj8uZZV%2BHGbDkG2yjd9U1wKv8DCG4QABoMNjM3NDIzMTgzODA1Igyzd9NXfpG%2F2GZRYksq3APzMyGGILE9tPCAfFpvaOhAZAY8RrDgQ2Yu8qcPYf8x%2BszxCfftxbtfLTDpomYCU0uS0drGopgJJ%2BtgaHtBqpRt8fFv9KUr%2Bka%2F8UTL9GF8I2HQnp9hAaKw9ahhopcjPyQWKiHlC%2BsoiX16qe2e6avqipzBqbuU9SrMh9KF4LIqc%2FWaRdVL49Mxs2ABzxFeypgf5fC3M%2FTulzEFW8eKKfHNbiwvyJCyPtgPETJC9iYnIqm9KxVrto5jMde9hAyE9ydVIzjT4nsUkepGhjizBY3H%2Bi64FPHY%2FAzbXB2Y5emFuKVFn4x0X4TEW8Ek22tv%2BWUPd5HenchW6Oi7NX25isetPAskzOcVpY2OluMr4Uk8sWR0ytSgUn6rtvO8a%2B991moUakYF4WNnj9aJGKIa5rU%2FL9NJZMGSy5LjeUBjnolqqBkn25n5jL5mczorjaFUivmDvRpMmTOqByfQ%2Bg2RqrjnGLpu5HZDgrrmhFzZ9ogem9Hxz20DYrBgtZiBqCQES3llT3sqxL1UJT%2FtdZcoCZNHHCVxJEv5TrPvacgyqICub2dZIEereEqcr9cyzhzDWC7gdR5WGRzJ%2FANTG7XzKIK4PiPTPAtW%2F2c3PKNOa2%2FrUPD5v03cz6BWSYXz7jDd68PCBjqkAZG4YOydeMpL3AO1zt%2FgDBwHttzjnl8YWvtuW1nDSixONQvXZ6%2F%2Fdaeyr%2FNgWPUAXxoJ5I%2B3DxDgAJNXu5FwrZWJdK8BTYf0yyv2UXAe6KAN%2FKsghchlefWWQ7ATNHPtYRM3AapkHbaRKg%2BMaEdNooMqqnvPBIWSpO1%2BR0I90LNwcd6CBy54DasWZ%2FRbsrxSz7ELFIpMHLnV4jgehnDMrLk2A5QR&X-Amz-Signature=3910f2c377b8f1bcaed00206a15ae4432aaa2a6d1e0bd25a5d10c6cbd1f25bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQME5ECY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC3UbB69h6px2nzjVxRkSWElf5fEP4gz8HtcdSv6J7fwIhAM6nUk4e2UjG46uvR1Ke5Rgj8uZZV%2BHGbDkG2yjd9U1wKv8DCG4QABoMNjM3NDIzMTgzODA1Igyzd9NXfpG%2F2GZRYksq3APzMyGGILE9tPCAfFpvaOhAZAY8RrDgQ2Yu8qcPYf8x%2BszxCfftxbtfLTDpomYCU0uS0drGopgJJ%2BtgaHtBqpRt8fFv9KUr%2Bka%2F8UTL9GF8I2HQnp9hAaKw9ahhopcjPyQWKiHlC%2BsoiX16qe2e6avqipzBqbuU9SrMh9KF4LIqc%2FWaRdVL49Mxs2ABzxFeypgf5fC3M%2FTulzEFW8eKKfHNbiwvyJCyPtgPETJC9iYnIqm9KxVrto5jMde9hAyE9ydVIzjT4nsUkepGhjizBY3H%2Bi64FPHY%2FAzbXB2Y5emFuKVFn4x0X4TEW8Ek22tv%2BWUPd5HenchW6Oi7NX25isetPAskzOcVpY2OluMr4Uk8sWR0ytSgUn6rtvO8a%2B991moUakYF4WNnj9aJGKIa5rU%2FL9NJZMGSy5LjeUBjnolqqBkn25n5jL5mczorjaFUivmDvRpMmTOqByfQ%2Bg2RqrjnGLpu5HZDgrrmhFzZ9ogem9Hxz20DYrBgtZiBqCQES3llT3sqxL1UJT%2FtdZcoCZNHHCVxJEv5TrPvacgyqICub2dZIEereEqcr9cyzhzDWC7gdR5WGRzJ%2FANTG7XzKIK4PiPTPAtW%2F2c3PKNOa2%2FrUPD5v03cz6BWSYXz7jDd68PCBjqkAZG4YOydeMpL3AO1zt%2FgDBwHttzjnl8YWvtuW1nDSixONQvXZ6%2F%2Fdaeyr%2FNgWPUAXxoJ5I%2B3DxDgAJNXu5FwrZWJdK8BTYf0yyv2UXAe6KAN%2FKsghchlefWWQ7ATNHPtYRM3AapkHbaRKg%2BMaEdNooMqqnvPBIWSpO1%2BR0I90LNwcd6CBy54DasWZ%2FRbsrxSz7ELFIpMHLnV4jgehnDMrLk2A5QR&X-Amz-Signature=515951ac61ffff5239adb77686d0b5b0f6fcd95398ac83f29c931623082781a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQME5ECY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC3UbB69h6px2nzjVxRkSWElf5fEP4gz8HtcdSv6J7fwIhAM6nUk4e2UjG46uvR1Ke5Rgj8uZZV%2BHGbDkG2yjd9U1wKv8DCG4QABoMNjM3NDIzMTgzODA1Igyzd9NXfpG%2F2GZRYksq3APzMyGGILE9tPCAfFpvaOhAZAY8RrDgQ2Yu8qcPYf8x%2BszxCfftxbtfLTDpomYCU0uS0drGopgJJ%2BtgaHtBqpRt8fFv9KUr%2Bka%2F8UTL9GF8I2HQnp9hAaKw9ahhopcjPyQWKiHlC%2BsoiX16qe2e6avqipzBqbuU9SrMh9KF4LIqc%2FWaRdVL49Mxs2ABzxFeypgf5fC3M%2FTulzEFW8eKKfHNbiwvyJCyPtgPETJC9iYnIqm9KxVrto5jMde9hAyE9ydVIzjT4nsUkepGhjizBY3H%2Bi64FPHY%2FAzbXB2Y5emFuKVFn4x0X4TEW8Ek22tv%2BWUPd5HenchW6Oi7NX25isetPAskzOcVpY2OluMr4Uk8sWR0ytSgUn6rtvO8a%2B991moUakYF4WNnj9aJGKIa5rU%2FL9NJZMGSy5LjeUBjnolqqBkn25n5jL5mczorjaFUivmDvRpMmTOqByfQ%2Bg2RqrjnGLpu5HZDgrrmhFzZ9ogem9Hxz20DYrBgtZiBqCQES3llT3sqxL1UJT%2FtdZcoCZNHHCVxJEv5TrPvacgyqICub2dZIEereEqcr9cyzhzDWC7gdR5WGRzJ%2FANTG7XzKIK4PiPTPAtW%2F2c3PKNOa2%2FrUPD5v03cz6BWSYXz7jDd68PCBjqkAZG4YOydeMpL3AO1zt%2FgDBwHttzjnl8YWvtuW1nDSixONQvXZ6%2F%2Fdaeyr%2FNgWPUAXxoJ5I%2B3DxDgAJNXu5FwrZWJdK8BTYf0yyv2UXAe6KAN%2FKsghchlefWWQ7ATNHPtYRM3AapkHbaRKg%2BMaEdNooMqqnvPBIWSpO1%2BR0I90LNwcd6CBy54DasWZ%2FRbsrxSz7ELFIpMHLnV4jgehnDMrLk2A5QR&X-Amz-Signature=a10e722055ea5c133ec7115e192cb2834e9e6bd176c311417898365831c5bb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQME5ECY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC3UbB69h6px2nzjVxRkSWElf5fEP4gz8HtcdSv6J7fwIhAM6nUk4e2UjG46uvR1Ke5Rgj8uZZV%2BHGbDkG2yjd9U1wKv8DCG4QABoMNjM3NDIzMTgzODA1Igyzd9NXfpG%2F2GZRYksq3APzMyGGILE9tPCAfFpvaOhAZAY8RrDgQ2Yu8qcPYf8x%2BszxCfftxbtfLTDpomYCU0uS0drGopgJJ%2BtgaHtBqpRt8fFv9KUr%2Bka%2F8UTL9GF8I2HQnp9hAaKw9ahhopcjPyQWKiHlC%2BsoiX16qe2e6avqipzBqbuU9SrMh9KF4LIqc%2FWaRdVL49Mxs2ABzxFeypgf5fC3M%2FTulzEFW8eKKfHNbiwvyJCyPtgPETJC9iYnIqm9KxVrto5jMde9hAyE9ydVIzjT4nsUkepGhjizBY3H%2Bi64FPHY%2FAzbXB2Y5emFuKVFn4x0X4TEW8Ek22tv%2BWUPd5HenchW6Oi7NX25isetPAskzOcVpY2OluMr4Uk8sWR0ytSgUn6rtvO8a%2B991moUakYF4WNnj9aJGKIa5rU%2FL9NJZMGSy5LjeUBjnolqqBkn25n5jL5mczorjaFUivmDvRpMmTOqByfQ%2Bg2RqrjnGLpu5HZDgrrmhFzZ9ogem9Hxz20DYrBgtZiBqCQES3llT3sqxL1UJT%2FtdZcoCZNHHCVxJEv5TrPvacgyqICub2dZIEereEqcr9cyzhzDWC7gdR5WGRzJ%2FANTG7XzKIK4PiPTPAtW%2F2c3PKNOa2%2FrUPD5v03cz6BWSYXz7jDd68PCBjqkAZG4YOydeMpL3AO1zt%2FgDBwHttzjnl8YWvtuW1nDSixONQvXZ6%2F%2Fdaeyr%2FNgWPUAXxoJ5I%2B3DxDgAJNXu5FwrZWJdK8BTYf0yyv2UXAe6KAN%2FKsghchlefWWQ7ATNHPtYRM3AapkHbaRKg%2BMaEdNooMqqnvPBIWSpO1%2BR0I90LNwcd6CBy54DasWZ%2FRbsrxSz7ELFIpMHLnV4jgehnDMrLk2A5QR&X-Amz-Signature=5a444d5383cabb441639192c62d025ff8e3da2d1e43c8d021505f8cdc7e646b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
