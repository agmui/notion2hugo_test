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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZJ4XZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCRTtoHZgsXbzp5Y%2BBLkxAudPPR%2Ff5v5IwTaZ2kOtbO4QIgTNMBgMTjDZDHRjukaF%2FsI23Zb%2BgjVx4Q5I2ThGJxb0Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbtafae2SXHzZuB%2BircAw6HZY7ncz3XHiR4rJ4GqChgeaCUqZitUkkuAKeDIng3eL405qHmsL1WoxVD4AOSTu2PGflD8eRE1Xl339cnKCFrj3Dtk%2FUCetPbUB7wj4nt4F48gEg4%2F7yOq7Q%2BJiVZ1VcnlwIzNDrMWJubqKhSKWVti4Vp%2B%2BkwIQ7IIDO9i4%2Bo2rKKyKXkxKBaxugHxDCSfvyF8n0IMqEowOzXU6xK98YtMEfGwkFtVghuQ8k1v9XUxNr5%2BO7Q8Mwe5ceeoFvL%2FSqUPwyRPo6ptOyq3PUQl7Q6vLJBdoQ3YtwTw39%2BLE4ptZxTIkd4frXN9IMFyRoLo83WyEG8DkPxvMty419%2FFR%2BMkIsXcAWkmoizMy0EliB7UMjXijrgvvU9hMWFMSqy1Byp2tOQHyZ8lTBxo1y%2FGs2AHouDL22hQq9CD3ntT0SPbSbYKAiuOdW%2FvKxkzs%2F42ig88bXxZFFIWLXeZ627H1w0W%2B8mUhWJ2Rm9YgfyaBYFyhO%2FAFr6%2FZaSYBNoCRX2pD6YL01CBCeMZM2AksmX0%2FF6lB2mhzSDAdi0ZCtl55Cqv%2FXL6SVxM8Zjt4kEgfvXAsYqEz4fg8bZBDir44ton2e5%2B8cgGHEnvEtNwLRptcjwtXUEWGv450w7NdUbMMSpsMIGOqUBpqXEgmS47gWs%2BhCY7cIPuRO9TxrVnRT9iRIoTFzN8jtOl23pfA5utzd5JhX6ZHEbZBtNsKhcABGHf38QA%2FW3Gj8rsqlXbPGxPpaZIJD4LIHdwQFXTascYfDhGfoZp3q7eLzGW0qYxdcOHHi1EmjEwagvrUhVwsQAUbEKHLL%2ByKNVgQ%2BCbgS8kBQavUecNHkEQP7wDOeoZK3OtjWACMTJzgmTbN%2BA&X-Amz-Signature=a2241827c388fc694f2a38bfc98f802ade6bb1efa5cdbab2b18581378d7e4831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZJ4XZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCRTtoHZgsXbzp5Y%2BBLkxAudPPR%2Ff5v5IwTaZ2kOtbO4QIgTNMBgMTjDZDHRjukaF%2FsI23Zb%2BgjVx4Q5I2ThGJxb0Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbtafae2SXHzZuB%2BircAw6HZY7ncz3XHiR4rJ4GqChgeaCUqZitUkkuAKeDIng3eL405qHmsL1WoxVD4AOSTu2PGflD8eRE1Xl339cnKCFrj3Dtk%2FUCetPbUB7wj4nt4F48gEg4%2F7yOq7Q%2BJiVZ1VcnlwIzNDrMWJubqKhSKWVti4Vp%2B%2BkwIQ7IIDO9i4%2Bo2rKKyKXkxKBaxugHxDCSfvyF8n0IMqEowOzXU6xK98YtMEfGwkFtVghuQ8k1v9XUxNr5%2BO7Q8Mwe5ceeoFvL%2FSqUPwyRPo6ptOyq3PUQl7Q6vLJBdoQ3YtwTw39%2BLE4ptZxTIkd4frXN9IMFyRoLo83WyEG8DkPxvMty419%2FFR%2BMkIsXcAWkmoizMy0EliB7UMjXijrgvvU9hMWFMSqy1Byp2tOQHyZ8lTBxo1y%2FGs2AHouDL22hQq9CD3ntT0SPbSbYKAiuOdW%2FvKxkzs%2F42ig88bXxZFFIWLXeZ627H1w0W%2B8mUhWJ2Rm9YgfyaBYFyhO%2FAFr6%2FZaSYBNoCRX2pD6YL01CBCeMZM2AksmX0%2FF6lB2mhzSDAdi0ZCtl55Cqv%2FXL6SVxM8Zjt4kEgfvXAsYqEz4fg8bZBDir44ton2e5%2B8cgGHEnvEtNwLRptcjwtXUEWGv450w7NdUbMMSpsMIGOqUBpqXEgmS47gWs%2BhCY7cIPuRO9TxrVnRT9iRIoTFzN8jtOl23pfA5utzd5JhX6ZHEbZBtNsKhcABGHf38QA%2FW3Gj8rsqlXbPGxPpaZIJD4LIHdwQFXTascYfDhGfoZp3q7eLzGW0qYxdcOHHi1EmjEwagvrUhVwsQAUbEKHLL%2ByKNVgQ%2BCbgS8kBQavUecNHkEQP7wDOeoZK3OtjWACMTJzgmTbN%2BA&X-Amz-Signature=f9ec3a6a548b09b9a4cece23a7dceaf308d5d4122c931963eb4820a52c923804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZJ4XZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCRTtoHZgsXbzp5Y%2BBLkxAudPPR%2Ff5v5IwTaZ2kOtbO4QIgTNMBgMTjDZDHRjukaF%2FsI23Zb%2BgjVx4Q5I2ThGJxb0Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbtafae2SXHzZuB%2BircAw6HZY7ncz3XHiR4rJ4GqChgeaCUqZitUkkuAKeDIng3eL405qHmsL1WoxVD4AOSTu2PGflD8eRE1Xl339cnKCFrj3Dtk%2FUCetPbUB7wj4nt4F48gEg4%2F7yOq7Q%2BJiVZ1VcnlwIzNDrMWJubqKhSKWVti4Vp%2B%2BkwIQ7IIDO9i4%2Bo2rKKyKXkxKBaxugHxDCSfvyF8n0IMqEowOzXU6xK98YtMEfGwkFtVghuQ8k1v9XUxNr5%2BO7Q8Mwe5ceeoFvL%2FSqUPwyRPo6ptOyq3PUQl7Q6vLJBdoQ3YtwTw39%2BLE4ptZxTIkd4frXN9IMFyRoLo83WyEG8DkPxvMty419%2FFR%2BMkIsXcAWkmoizMy0EliB7UMjXijrgvvU9hMWFMSqy1Byp2tOQHyZ8lTBxo1y%2FGs2AHouDL22hQq9CD3ntT0SPbSbYKAiuOdW%2FvKxkzs%2F42ig88bXxZFFIWLXeZ627H1w0W%2B8mUhWJ2Rm9YgfyaBYFyhO%2FAFr6%2FZaSYBNoCRX2pD6YL01CBCeMZM2AksmX0%2FF6lB2mhzSDAdi0ZCtl55Cqv%2FXL6SVxM8Zjt4kEgfvXAsYqEz4fg8bZBDir44ton2e5%2B8cgGHEnvEtNwLRptcjwtXUEWGv450w7NdUbMMSpsMIGOqUBpqXEgmS47gWs%2BhCY7cIPuRO9TxrVnRT9iRIoTFzN8jtOl23pfA5utzd5JhX6ZHEbZBtNsKhcABGHf38QA%2FW3Gj8rsqlXbPGxPpaZIJD4LIHdwQFXTascYfDhGfoZp3q7eLzGW0qYxdcOHHi1EmjEwagvrUhVwsQAUbEKHLL%2ByKNVgQ%2BCbgS8kBQavUecNHkEQP7wDOeoZK3OtjWACMTJzgmTbN%2BA&X-Amz-Signature=1013d3ead55c872dbf1c0c70b5faf85cb9e665a0ed45ef54fdb2069d8684f226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZJ4XZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCRTtoHZgsXbzp5Y%2BBLkxAudPPR%2Ff5v5IwTaZ2kOtbO4QIgTNMBgMTjDZDHRjukaF%2FsI23Zb%2BgjVx4Q5I2ThGJxb0Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbtafae2SXHzZuB%2BircAw6HZY7ncz3XHiR4rJ4GqChgeaCUqZitUkkuAKeDIng3eL405qHmsL1WoxVD4AOSTu2PGflD8eRE1Xl339cnKCFrj3Dtk%2FUCetPbUB7wj4nt4F48gEg4%2F7yOq7Q%2BJiVZ1VcnlwIzNDrMWJubqKhSKWVti4Vp%2B%2BkwIQ7IIDO9i4%2Bo2rKKyKXkxKBaxugHxDCSfvyF8n0IMqEowOzXU6xK98YtMEfGwkFtVghuQ8k1v9XUxNr5%2BO7Q8Mwe5ceeoFvL%2FSqUPwyRPo6ptOyq3PUQl7Q6vLJBdoQ3YtwTw39%2BLE4ptZxTIkd4frXN9IMFyRoLo83WyEG8DkPxvMty419%2FFR%2BMkIsXcAWkmoizMy0EliB7UMjXijrgvvU9hMWFMSqy1Byp2tOQHyZ8lTBxo1y%2FGs2AHouDL22hQq9CD3ntT0SPbSbYKAiuOdW%2FvKxkzs%2F42ig88bXxZFFIWLXeZ627H1w0W%2B8mUhWJ2Rm9YgfyaBYFyhO%2FAFr6%2FZaSYBNoCRX2pD6YL01CBCeMZM2AksmX0%2FF6lB2mhzSDAdi0ZCtl55Cqv%2FXL6SVxM8Zjt4kEgfvXAsYqEz4fg8bZBDir44ton2e5%2B8cgGHEnvEtNwLRptcjwtXUEWGv450w7NdUbMMSpsMIGOqUBpqXEgmS47gWs%2BhCY7cIPuRO9TxrVnRT9iRIoTFzN8jtOl23pfA5utzd5JhX6ZHEbZBtNsKhcABGHf38QA%2FW3Gj8rsqlXbPGxPpaZIJD4LIHdwQFXTascYfDhGfoZp3q7eLzGW0qYxdcOHHi1EmjEwagvrUhVwsQAUbEKHLL%2ByKNVgQ%2BCbgS8kBQavUecNHkEQP7wDOeoZK3OtjWACMTJzgmTbN%2BA&X-Amz-Signature=b931373d87d1ed9b371105d806f6b6a357eb5ab0cdc29c2e3f0bd2000bbb8cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZJ4XZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCRTtoHZgsXbzp5Y%2BBLkxAudPPR%2Ff5v5IwTaZ2kOtbO4QIgTNMBgMTjDZDHRjukaF%2FsI23Zb%2BgjVx4Q5I2ThGJxb0Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbtafae2SXHzZuB%2BircAw6HZY7ncz3XHiR4rJ4GqChgeaCUqZitUkkuAKeDIng3eL405qHmsL1WoxVD4AOSTu2PGflD8eRE1Xl339cnKCFrj3Dtk%2FUCetPbUB7wj4nt4F48gEg4%2F7yOq7Q%2BJiVZ1VcnlwIzNDrMWJubqKhSKWVti4Vp%2B%2BkwIQ7IIDO9i4%2Bo2rKKyKXkxKBaxugHxDCSfvyF8n0IMqEowOzXU6xK98YtMEfGwkFtVghuQ8k1v9XUxNr5%2BO7Q8Mwe5ceeoFvL%2FSqUPwyRPo6ptOyq3PUQl7Q6vLJBdoQ3YtwTw39%2BLE4ptZxTIkd4frXN9IMFyRoLo83WyEG8DkPxvMty419%2FFR%2BMkIsXcAWkmoizMy0EliB7UMjXijrgvvU9hMWFMSqy1Byp2tOQHyZ8lTBxo1y%2FGs2AHouDL22hQq9CD3ntT0SPbSbYKAiuOdW%2FvKxkzs%2F42ig88bXxZFFIWLXeZ627H1w0W%2B8mUhWJ2Rm9YgfyaBYFyhO%2FAFr6%2FZaSYBNoCRX2pD6YL01CBCeMZM2AksmX0%2FF6lB2mhzSDAdi0ZCtl55Cqv%2FXL6SVxM8Zjt4kEgfvXAsYqEz4fg8bZBDir44ton2e5%2B8cgGHEnvEtNwLRptcjwtXUEWGv450w7NdUbMMSpsMIGOqUBpqXEgmS47gWs%2BhCY7cIPuRO9TxrVnRT9iRIoTFzN8jtOl23pfA5utzd5JhX6ZHEbZBtNsKhcABGHf38QA%2FW3Gj8rsqlXbPGxPpaZIJD4LIHdwQFXTascYfDhGfoZp3q7eLzGW0qYxdcOHHi1EmjEwagvrUhVwsQAUbEKHLL%2ByKNVgQ%2BCbgS8kBQavUecNHkEQP7wDOeoZK3OtjWACMTJzgmTbN%2BA&X-Amz-Signature=91e0f55648b789afba3b2ba129ecfde3027cab558d8364b8c69724f2ce5bb78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZJ4XZS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCRTtoHZgsXbzp5Y%2BBLkxAudPPR%2Ff5v5IwTaZ2kOtbO4QIgTNMBgMTjDZDHRjukaF%2FsI23Zb%2BgjVx4Q5I2ThGJxb0Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIbtafae2SXHzZuB%2BircAw6HZY7ncz3XHiR4rJ4GqChgeaCUqZitUkkuAKeDIng3eL405qHmsL1WoxVD4AOSTu2PGflD8eRE1Xl339cnKCFrj3Dtk%2FUCetPbUB7wj4nt4F48gEg4%2F7yOq7Q%2BJiVZ1VcnlwIzNDrMWJubqKhSKWVti4Vp%2B%2BkwIQ7IIDO9i4%2Bo2rKKyKXkxKBaxugHxDCSfvyF8n0IMqEowOzXU6xK98YtMEfGwkFtVghuQ8k1v9XUxNr5%2BO7Q8Mwe5ceeoFvL%2FSqUPwyRPo6ptOyq3PUQl7Q6vLJBdoQ3YtwTw39%2BLE4ptZxTIkd4frXN9IMFyRoLo83WyEG8DkPxvMty419%2FFR%2BMkIsXcAWkmoizMy0EliB7UMjXijrgvvU9hMWFMSqy1Byp2tOQHyZ8lTBxo1y%2FGs2AHouDL22hQq9CD3ntT0SPbSbYKAiuOdW%2FvKxkzs%2F42ig88bXxZFFIWLXeZ627H1w0W%2B8mUhWJ2Rm9YgfyaBYFyhO%2FAFr6%2FZaSYBNoCRX2pD6YL01CBCeMZM2AksmX0%2FF6lB2mhzSDAdi0ZCtl55Cqv%2FXL6SVxM8Zjt4kEgfvXAsYqEz4fg8bZBDir44ton2e5%2B8cgGHEnvEtNwLRptcjwtXUEWGv450w7NdUbMMSpsMIGOqUBpqXEgmS47gWs%2BhCY7cIPuRO9TxrVnRT9iRIoTFzN8jtOl23pfA5utzd5JhX6ZHEbZBtNsKhcABGHf38QA%2FW3Gj8rsqlXbPGxPpaZIJD4LIHdwQFXTascYfDhGfoZp3q7eLzGW0qYxdcOHHi1EmjEwagvrUhVwsQAUbEKHLL%2ByKNVgQ%2BCbgS8kBQavUecNHkEQP7wDOeoZK3OtjWACMTJzgmTbN%2BA&X-Amz-Signature=b66ea5315ab51c3460d765f34aba4e0a6f348afa936fc65e47c99c9c73291add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
