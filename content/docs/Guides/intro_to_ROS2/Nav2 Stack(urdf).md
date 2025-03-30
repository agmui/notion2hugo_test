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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TARNUS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCQSbjVr1FnlekeCyJS22s39DE2siLXRx7y9Z0yiMNNngIgEXw%2BXhMO7W0HmYeISWHCxIDCxf2%2BZNq2WiO2Ul780b8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnm0srRu8JwbEZfyrcAyeNHSxbbiKjYuHOApEt9k5x4OBkc3c35affhQN1ZmWG8BKQJr1GQ%2BpQ%2B5hzTMKbQmcjqlBOW1x8dzpJliQ2ydlF6TTT%2FpwBxu8RS0Y0oZSgXOG3dTkQMV4A1VD%2FFUhDcSJ4NzjxCH1DDyVhCL%2BvIzHriimsTa1Q2Ibx%2FIgUb%2B6%2FbI1QnxfrRYes4YubhbH%2Bd5p%2BDnWWtVUIuo67XY2OwasjS1QAmby2n8a16nVZuYrtmOvFV4FclqRd4QHI9jwqWQt2h%2B2wOd6FmVB11QBfiypCBA8SWKG9azQkPQA8KmXJCt2qp7m%2F0OXjmZKvBaTVYtG6cEQMS2G5o95D2bZEgohNHopkoJnB%2BulFdiUr6ewlVU4YViW7VMjdj8buHmtlHwvfTibLatd7wRD%2B32jacfx5pqVhvpOc3IXPY6O9yJjFfzlhwMXzwjSKFY5X2a%2FT%2FD4CMtTpD1nEFuYi2ciHo2GTsWLo5o%2FM%2FTd0WlVDuwPIBvIjz6zIajapPnc3sJyqzQ2SNPi0JhSQpkzCucvvptMHdhtJc29yOrcr0%2BPyxqd3BQr4E2O%2BKP2a8kc4Q8%2B1EosSJw5OhMr6C3EuAVa2YwoWGUd1PLjXdWHr7kiA8DOKtG0gkrNzs64On6loMNmKpb8GOqUBl%2FfVDlvQPVpfh70X68p9uZ8lIk%2Ffwp7bFf3zdepEM3BJAWUUoszim80lfS0zlBhfzq8oVJTDQKF8xKGtuMiOB%2FpXsbdkbagtUIXfT1yN5M8bmF2isHegwyNLvSZcYtFUWNFUBtVJmm9moZPUmUHE1vaBZHJTWUqsbSQ%2FNKBt9MCmXhqtx%2ByheruguZqXcPoiZKG2U7EUCmfvVmj4FfYl2P2oVzh9&X-Amz-Signature=1821560c57f4a37fd5876330478a5ff0ddefbeb36e5e31914d57226057071275&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TARNUS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCQSbjVr1FnlekeCyJS22s39DE2siLXRx7y9Z0yiMNNngIgEXw%2BXhMO7W0HmYeISWHCxIDCxf2%2BZNq2WiO2Ul780b8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnm0srRu8JwbEZfyrcAyeNHSxbbiKjYuHOApEt9k5x4OBkc3c35affhQN1ZmWG8BKQJr1GQ%2BpQ%2B5hzTMKbQmcjqlBOW1x8dzpJliQ2ydlF6TTT%2FpwBxu8RS0Y0oZSgXOG3dTkQMV4A1VD%2FFUhDcSJ4NzjxCH1DDyVhCL%2BvIzHriimsTa1Q2Ibx%2FIgUb%2B6%2FbI1QnxfrRYes4YubhbH%2Bd5p%2BDnWWtVUIuo67XY2OwasjS1QAmby2n8a16nVZuYrtmOvFV4FclqRd4QHI9jwqWQt2h%2B2wOd6FmVB11QBfiypCBA8SWKG9azQkPQA8KmXJCt2qp7m%2F0OXjmZKvBaTVYtG6cEQMS2G5o95D2bZEgohNHopkoJnB%2BulFdiUr6ewlVU4YViW7VMjdj8buHmtlHwvfTibLatd7wRD%2B32jacfx5pqVhvpOc3IXPY6O9yJjFfzlhwMXzwjSKFY5X2a%2FT%2FD4CMtTpD1nEFuYi2ciHo2GTsWLo5o%2FM%2FTd0WlVDuwPIBvIjz6zIajapPnc3sJyqzQ2SNPi0JhSQpkzCucvvptMHdhtJc29yOrcr0%2BPyxqd3BQr4E2O%2BKP2a8kc4Q8%2B1EosSJw5OhMr6C3EuAVa2YwoWGUd1PLjXdWHr7kiA8DOKtG0gkrNzs64On6loMNmKpb8GOqUBl%2FfVDlvQPVpfh70X68p9uZ8lIk%2Ffwp7bFf3zdepEM3BJAWUUoszim80lfS0zlBhfzq8oVJTDQKF8xKGtuMiOB%2FpXsbdkbagtUIXfT1yN5M8bmF2isHegwyNLvSZcYtFUWNFUBtVJmm9moZPUmUHE1vaBZHJTWUqsbSQ%2FNKBt9MCmXhqtx%2ByheruguZqXcPoiZKG2U7EUCmfvVmj4FfYl2P2oVzh9&X-Amz-Signature=a62a3c6d50efccf1341e48382354992379ddc9a3806aab9cb89b95f3fd2eaf68&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TARNUS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCQSbjVr1FnlekeCyJS22s39DE2siLXRx7y9Z0yiMNNngIgEXw%2BXhMO7W0HmYeISWHCxIDCxf2%2BZNq2WiO2Ul780b8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnm0srRu8JwbEZfyrcAyeNHSxbbiKjYuHOApEt9k5x4OBkc3c35affhQN1ZmWG8BKQJr1GQ%2BpQ%2B5hzTMKbQmcjqlBOW1x8dzpJliQ2ydlF6TTT%2FpwBxu8RS0Y0oZSgXOG3dTkQMV4A1VD%2FFUhDcSJ4NzjxCH1DDyVhCL%2BvIzHriimsTa1Q2Ibx%2FIgUb%2B6%2FbI1QnxfrRYes4YubhbH%2Bd5p%2BDnWWtVUIuo67XY2OwasjS1QAmby2n8a16nVZuYrtmOvFV4FclqRd4QHI9jwqWQt2h%2B2wOd6FmVB11QBfiypCBA8SWKG9azQkPQA8KmXJCt2qp7m%2F0OXjmZKvBaTVYtG6cEQMS2G5o95D2bZEgohNHopkoJnB%2BulFdiUr6ewlVU4YViW7VMjdj8buHmtlHwvfTibLatd7wRD%2B32jacfx5pqVhvpOc3IXPY6O9yJjFfzlhwMXzwjSKFY5X2a%2FT%2FD4CMtTpD1nEFuYi2ciHo2GTsWLo5o%2FM%2FTd0WlVDuwPIBvIjz6zIajapPnc3sJyqzQ2SNPi0JhSQpkzCucvvptMHdhtJc29yOrcr0%2BPyxqd3BQr4E2O%2BKP2a8kc4Q8%2B1EosSJw5OhMr6C3EuAVa2YwoWGUd1PLjXdWHr7kiA8DOKtG0gkrNzs64On6loMNmKpb8GOqUBl%2FfVDlvQPVpfh70X68p9uZ8lIk%2Ffwp7bFf3zdepEM3BJAWUUoszim80lfS0zlBhfzq8oVJTDQKF8xKGtuMiOB%2FpXsbdkbagtUIXfT1yN5M8bmF2isHegwyNLvSZcYtFUWNFUBtVJmm9moZPUmUHE1vaBZHJTWUqsbSQ%2FNKBt9MCmXhqtx%2ByheruguZqXcPoiZKG2U7EUCmfvVmj4FfYl2P2oVzh9&X-Amz-Signature=fedea263b10ad875cbb74500915bc6ecd4ae80ce6ffc38cb186886b49d77abd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TARNUS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCQSbjVr1FnlekeCyJS22s39DE2siLXRx7y9Z0yiMNNngIgEXw%2BXhMO7W0HmYeISWHCxIDCxf2%2BZNq2WiO2Ul780b8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnm0srRu8JwbEZfyrcAyeNHSxbbiKjYuHOApEt9k5x4OBkc3c35affhQN1ZmWG8BKQJr1GQ%2BpQ%2B5hzTMKbQmcjqlBOW1x8dzpJliQ2ydlF6TTT%2FpwBxu8RS0Y0oZSgXOG3dTkQMV4A1VD%2FFUhDcSJ4NzjxCH1DDyVhCL%2BvIzHriimsTa1Q2Ibx%2FIgUb%2B6%2FbI1QnxfrRYes4YubhbH%2Bd5p%2BDnWWtVUIuo67XY2OwasjS1QAmby2n8a16nVZuYrtmOvFV4FclqRd4QHI9jwqWQt2h%2B2wOd6FmVB11QBfiypCBA8SWKG9azQkPQA8KmXJCt2qp7m%2F0OXjmZKvBaTVYtG6cEQMS2G5o95D2bZEgohNHopkoJnB%2BulFdiUr6ewlVU4YViW7VMjdj8buHmtlHwvfTibLatd7wRD%2B32jacfx5pqVhvpOc3IXPY6O9yJjFfzlhwMXzwjSKFY5X2a%2FT%2FD4CMtTpD1nEFuYi2ciHo2GTsWLo5o%2FM%2FTd0WlVDuwPIBvIjz6zIajapPnc3sJyqzQ2SNPi0JhSQpkzCucvvptMHdhtJc29yOrcr0%2BPyxqd3BQr4E2O%2BKP2a8kc4Q8%2B1EosSJw5OhMr6C3EuAVa2YwoWGUd1PLjXdWHr7kiA8DOKtG0gkrNzs64On6loMNmKpb8GOqUBl%2FfVDlvQPVpfh70X68p9uZ8lIk%2Ffwp7bFf3zdepEM3BJAWUUoszim80lfS0zlBhfzq8oVJTDQKF8xKGtuMiOB%2FpXsbdkbagtUIXfT1yN5M8bmF2isHegwyNLvSZcYtFUWNFUBtVJmm9moZPUmUHE1vaBZHJTWUqsbSQ%2FNKBt9MCmXhqtx%2ByheruguZqXcPoiZKG2U7EUCmfvVmj4FfYl2P2oVzh9&X-Amz-Signature=27a2bc631a4ff9aae10c1a4a86556e2278cac9aa42c33f44c92fd56da9b46343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TARNUS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCQSbjVr1FnlekeCyJS22s39DE2siLXRx7y9Z0yiMNNngIgEXw%2BXhMO7W0HmYeISWHCxIDCxf2%2BZNq2WiO2Ul780b8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnm0srRu8JwbEZfyrcAyeNHSxbbiKjYuHOApEt9k5x4OBkc3c35affhQN1ZmWG8BKQJr1GQ%2BpQ%2B5hzTMKbQmcjqlBOW1x8dzpJliQ2ydlF6TTT%2FpwBxu8RS0Y0oZSgXOG3dTkQMV4A1VD%2FFUhDcSJ4NzjxCH1DDyVhCL%2BvIzHriimsTa1Q2Ibx%2FIgUb%2B6%2FbI1QnxfrRYes4YubhbH%2Bd5p%2BDnWWtVUIuo67XY2OwasjS1QAmby2n8a16nVZuYrtmOvFV4FclqRd4QHI9jwqWQt2h%2B2wOd6FmVB11QBfiypCBA8SWKG9azQkPQA8KmXJCt2qp7m%2F0OXjmZKvBaTVYtG6cEQMS2G5o95D2bZEgohNHopkoJnB%2BulFdiUr6ewlVU4YViW7VMjdj8buHmtlHwvfTibLatd7wRD%2B32jacfx5pqVhvpOc3IXPY6O9yJjFfzlhwMXzwjSKFY5X2a%2FT%2FD4CMtTpD1nEFuYi2ciHo2GTsWLo5o%2FM%2FTd0WlVDuwPIBvIjz6zIajapPnc3sJyqzQ2SNPi0JhSQpkzCucvvptMHdhtJc29yOrcr0%2BPyxqd3BQr4E2O%2BKP2a8kc4Q8%2B1EosSJw5OhMr6C3EuAVa2YwoWGUd1PLjXdWHr7kiA8DOKtG0gkrNzs64On6loMNmKpb8GOqUBl%2FfVDlvQPVpfh70X68p9uZ8lIk%2Ffwp7bFf3zdepEM3BJAWUUoszim80lfS0zlBhfzq8oVJTDQKF8xKGtuMiOB%2FpXsbdkbagtUIXfT1yN5M8bmF2isHegwyNLvSZcYtFUWNFUBtVJmm9moZPUmUHE1vaBZHJTWUqsbSQ%2FNKBt9MCmXhqtx%2ByheruguZqXcPoiZKG2U7EUCmfvVmj4FfYl2P2oVzh9&X-Amz-Signature=b807e8e9e0abdd3bf4747c180ce80866ee5167e27dbf48b85a44681345f43a75&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TARNUS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCQSbjVr1FnlekeCyJS22s39DE2siLXRx7y9Z0yiMNNngIgEXw%2BXhMO7W0HmYeISWHCxIDCxf2%2BZNq2WiO2Ul780b8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnm0srRu8JwbEZfyrcAyeNHSxbbiKjYuHOApEt9k5x4OBkc3c35affhQN1ZmWG8BKQJr1GQ%2BpQ%2B5hzTMKbQmcjqlBOW1x8dzpJliQ2ydlF6TTT%2FpwBxu8RS0Y0oZSgXOG3dTkQMV4A1VD%2FFUhDcSJ4NzjxCH1DDyVhCL%2BvIzHriimsTa1Q2Ibx%2FIgUb%2B6%2FbI1QnxfrRYes4YubhbH%2Bd5p%2BDnWWtVUIuo67XY2OwasjS1QAmby2n8a16nVZuYrtmOvFV4FclqRd4QHI9jwqWQt2h%2B2wOd6FmVB11QBfiypCBA8SWKG9azQkPQA8KmXJCt2qp7m%2F0OXjmZKvBaTVYtG6cEQMS2G5o95D2bZEgohNHopkoJnB%2BulFdiUr6ewlVU4YViW7VMjdj8buHmtlHwvfTibLatd7wRD%2B32jacfx5pqVhvpOc3IXPY6O9yJjFfzlhwMXzwjSKFY5X2a%2FT%2FD4CMtTpD1nEFuYi2ciHo2GTsWLo5o%2FM%2FTd0WlVDuwPIBvIjz6zIajapPnc3sJyqzQ2SNPi0JhSQpkzCucvvptMHdhtJc29yOrcr0%2BPyxqd3BQr4E2O%2BKP2a8kc4Q8%2B1EosSJw5OhMr6C3EuAVa2YwoWGUd1PLjXdWHr7kiA8DOKtG0gkrNzs64On6loMNmKpb8GOqUBl%2FfVDlvQPVpfh70X68p9uZ8lIk%2Ffwp7bFf3zdepEM3BJAWUUoszim80lfS0zlBhfzq8oVJTDQKF8xKGtuMiOB%2FpXsbdkbagtUIXfT1yN5M8bmF2isHegwyNLvSZcYtFUWNFUBtVJmm9moZPUmUHE1vaBZHJTWUqsbSQ%2FNKBt9MCmXhqtx%2ByheruguZqXcPoiZKG2U7EUCmfvVmj4FfYl2P2oVzh9&X-Amz-Signature=863eeb35b345ef9cd6a567c8194d792f8c184c38358cdf34fdddf6ee044774df&X-Amz-SignedHeaders=host&x-id=GetObject)
