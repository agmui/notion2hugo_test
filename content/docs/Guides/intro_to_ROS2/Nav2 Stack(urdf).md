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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN76V7Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFmiiMUGOGx9fXh5cVYCb42pHwpcUK%2FrGXQx3ws2R2bIAiEAkGFOyMWbOrlzy0Go2rmsEqjDLwBWoY6jgdSk3oojx1Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiNFw1X4jt2sF4iuyrcA4Ili0ko8xgJIeqHZDqWcVp0euZwwHIirGcEOUI6cwrB0X2cKYOj4TWuVnIQ8KBqos%2FmkIAGDazCFx%2F249mTqmLV1tN3A4sbJqCr5zUOp0r9OCPxAvqGOfzaDqqywEnH207FZ8qH1R0e9zWADsO4lMeuVcskxsXGMu%2BOnHRxAwKD5kUs3J9hNYzb0GBayeExQnUnA%2B3%2FeJWLcokdWLacGIKSdzmfSBlVVIdpVnyWvc8wdUj6gd8hAK1XXE9mlB7zmjxkD9rXtlsOsB%2FHwvFI4fn2g8AMAP8yYdh%2F9Ar6g4WkAbl5B2nYuzWJpns5%2FZ1Q7dZ6nczXwiefJIV6fbJwc2itOIJWYsaZQuuaCkVDnwBSLHW5HHoH%2Fai9IvaKvmMHBu7kpbo53lsD3BmutmY2HlcG9R4RR20niTQbdCkM322S8lXoQVnwI6aW1GX0Z7Adpr%2BNlqMZocxDWANkNluYZVzpW3VgE2Eq%2BZwtNe4y6ZMC%2BAy0zFcEJay0LvHSYpdcBVmmzJVreKs8N7HFjeERiocTtXDG4onMdPa%2F1dLZatMAaW1noHSFHkJ3sbhuKpY382Jcb6WbDHwz4qAMUpHjrEtNrZ2Hiqo7BVTz9awtfIldRQgmtyzsMt1BLT17MODa3MAGOqUB3YdRTZRHduqBNIoa7uFma9lM74YiJySbx1dTpy3f6Sulu30CdnZWvbximmiXtE1WyNMJ1w0SX878E9Vh23zixSG%2B9irtfZYyNDrm3UUSgTBF2loFWOU6lyejhkGjQlVODBuJAH4mxx4I%2F3YvUgwveIjehfu4K3rgKxzVIyzEA26sm7ntLBIzxWKdeYNPBUaGlAzTBUKUUYEdig1yS9yaEwCq3607&X-Amz-Signature=3e12be219392af6056a3056ad56b4b5b68962d60d15be3814262ce223698791c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN76V7Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFmiiMUGOGx9fXh5cVYCb42pHwpcUK%2FrGXQx3ws2R2bIAiEAkGFOyMWbOrlzy0Go2rmsEqjDLwBWoY6jgdSk3oojx1Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiNFw1X4jt2sF4iuyrcA4Ili0ko8xgJIeqHZDqWcVp0euZwwHIirGcEOUI6cwrB0X2cKYOj4TWuVnIQ8KBqos%2FmkIAGDazCFx%2F249mTqmLV1tN3A4sbJqCr5zUOp0r9OCPxAvqGOfzaDqqywEnH207FZ8qH1R0e9zWADsO4lMeuVcskxsXGMu%2BOnHRxAwKD5kUs3J9hNYzb0GBayeExQnUnA%2B3%2FeJWLcokdWLacGIKSdzmfSBlVVIdpVnyWvc8wdUj6gd8hAK1XXE9mlB7zmjxkD9rXtlsOsB%2FHwvFI4fn2g8AMAP8yYdh%2F9Ar6g4WkAbl5B2nYuzWJpns5%2FZ1Q7dZ6nczXwiefJIV6fbJwc2itOIJWYsaZQuuaCkVDnwBSLHW5HHoH%2Fai9IvaKvmMHBu7kpbo53lsD3BmutmY2HlcG9R4RR20niTQbdCkM322S8lXoQVnwI6aW1GX0Z7Adpr%2BNlqMZocxDWANkNluYZVzpW3VgE2Eq%2BZwtNe4y6ZMC%2BAy0zFcEJay0LvHSYpdcBVmmzJVreKs8N7HFjeERiocTtXDG4onMdPa%2F1dLZatMAaW1noHSFHkJ3sbhuKpY382Jcb6WbDHwz4qAMUpHjrEtNrZ2Hiqo7BVTz9awtfIldRQgmtyzsMt1BLT17MODa3MAGOqUB3YdRTZRHduqBNIoa7uFma9lM74YiJySbx1dTpy3f6Sulu30CdnZWvbximmiXtE1WyNMJ1w0SX878E9Vh23zixSG%2B9irtfZYyNDrm3UUSgTBF2loFWOU6lyejhkGjQlVODBuJAH4mxx4I%2F3YvUgwveIjehfu4K3rgKxzVIyzEA26sm7ntLBIzxWKdeYNPBUaGlAzTBUKUUYEdig1yS9yaEwCq3607&X-Amz-Signature=2da89d59272496b7ba91fb3ecd3c45f474a9180c4d70e19cafcd206e05ce070c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN76V7Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFmiiMUGOGx9fXh5cVYCb42pHwpcUK%2FrGXQx3ws2R2bIAiEAkGFOyMWbOrlzy0Go2rmsEqjDLwBWoY6jgdSk3oojx1Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiNFw1X4jt2sF4iuyrcA4Ili0ko8xgJIeqHZDqWcVp0euZwwHIirGcEOUI6cwrB0X2cKYOj4TWuVnIQ8KBqos%2FmkIAGDazCFx%2F249mTqmLV1tN3A4sbJqCr5zUOp0r9OCPxAvqGOfzaDqqywEnH207FZ8qH1R0e9zWADsO4lMeuVcskxsXGMu%2BOnHRxAwKD5kUs3J9hNYzb0GBayeExQnUnA%2B3%2FeJWLcokdWLacGIKSdzmfSBlVVIdpVnyWvc8wdUj6gd8hAK1XXE9mlB7zmjxkD9rXtlsOsB%2FHwvFI4fn2g8AMAP8yYdh%2F9Ar6g4WkAbl5B2nYuzWJpns5%2FZ1Q7dZ6nczXwiefJIV6fbJwc2itOIJWYsaZQuuaCkVDnwBSLHW5HHoH%2Fai9IvaKvmMHBu7kpbo53lsD3BmutmY2HlcG9R4RR20niTQbdCkM322S8lXoQVnwI6aW1GX0Z7Adpr%2BNlqMZocxDWANkNluYZVzpW3VgE2Eq%2BZwtNe4y6ZMC%2BAy0zFcEJay0LvHSYpdcBVmmzJVreKs8N7HFjeERiocTtXDG4onMdPa%2F1dLZatMAaW1noHSFHkJ3sbhuKpY382Jcb6WbDHwz4qAMUpHjrEtNrZ2Hiqo7BVTz9awtfIldRQgmtyzsMt1BLT17MODa3MAGOqUB3YdRTZRHduqBNIoa7uFma9lM74YiJySbx1dTpy3f6Sulu30CdnZWvbximmiXtE1WyNMJ1w0SX878E9Vh23zixSG%2B9irtfZYyNDrm3UUSgTBF2loFWOU6lyejhkGjQlVODBuJAH4mxx4I%2F3YvUgwveIjehfu4K3rgKxzVIyzEA26sm7ntLBIzxWKdeYNPBUaGlAzTBUKUUYEdig1yS9yaEwCq3607&X-Amz-Signature=1fe30dc21edca2b175e36b9e4d45823c3b9909028126f95ae63eef407c5df7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN76V7Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFmiiMUGOGx9fXh5cVYCb42pHwpcUK%2FrGXQx3ws2R2bIAiEAkGFOyMWbOrlzy0Go2rmsEqjDLwBWoY6jgdSk3oojx1Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiNFw1X4jt2sF4iuyrcA4Ili0ko8xgJIeqHZDqWcVp0euZwwHIirGcEOUI6cwrB0X2cKYOj4TWuVnIQ8KBqos%2FmkIAGDazCFx%2F249mTqmLV1tN3A4sbJqCr5zUOp0r9OCPxAvqGOfzaDqqywEnH207FZ8qH1R0e9zWADsO4lMeuVcskxsXGMu%2BOnHRxAwKD5kUs3J9hNYzb0GBayeExQnUnA%2B3%2FeJWLcokdWLacGIKSdzmfSBlVVIdpVnyWvc8wdUj6gd8hAK1XXE9mlB7zmjxkD9rXtlsOsB%2FHwvFI4fn2g8AMAP8yYdh%2F9Ar6g4WkAbl5B2nYuzWJpns5%2FZ1Q7dZ6nczXwiefJIV6fbJwc2itOIJWYsaZQuuaCkVDnwBSLHW5HHoH%2Fai9IvaKvmMHBu7kpbo53lsD3BmutmY2HlcG9R4RR20niTQbdCkM322S8lXoQVnwI6aW1GX0Z7Adpr%2BNlqMZocxDWANkNluYZVzpW3VgE2Eq%2BZwtNe4y6ZMC%2BAy0zFcEJay0LvHSYpdcBVmmzJVreKs8N7HFjeERiocTtXDG4onMdPa%2F1dLZatMAaW1noHSFHkJ3sbhuKpY382Jcb6WbDHwz4qAMUpHjrEtNrZ2Hiqo7BVTz9awtfIldRQgmtyzsMt1BLT17MODa3MAGOqUB3YdRTZRHduqBNIoa7uFma9lM74YiJySbx1dTpy3f6Sulu30CdnZWvbximmiXtE1WyNMJ1w0SX878E9Vh23zixSG%2B9irtfZYyNDrm3UUSgTBF2loFWOU6lyejhkGjQlVODBuJAH4mxx4I%2F3YvUgwveIjehfu4K3rgKxzVIyzEA26sm7ntLBIzxWKdeYNPBUaGlAzTBUKUUYEdig1yS9yaEwCq3607&X-Amz-Signature=196169af4d19f98d691bf09eb2e266d7465875d0427297a514e3b543974d5c19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN76V7Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFmiiMUGOGx9fXh5cVYCb42pHwpcUK%2FrGXQx3ws2R2bIAiEAkGFOyMWbOrlzy0Go2rmsEqjDLwBWoY6jgdSk3oojx1Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiNFw1X4jt2sF4iuyrcA4Ili0ko8xgJIeqHZDqWcVp0euZwwHIirGcEOUI6cwrB0X2cKYOj4TWuVnIQ8KBqos%2FmkIAGDazCFx%2F249mTqmLV1tN3A4sbJqCr5zUOp0r9OCPxAvqGOfzaDqqywEnH207FZ8qH1R0e9zWADsO4lMeuVcskxsXGMu%2BOnHRxAwKD5kUs3J9hNYzb0GBayeExQnUnA%2B3%2FeJWLcokdWLacGIKSdzmfSBlVVIdpVnyWvc8wdUj6gd8hAK1XXE9mlB7zmjxkD9rXtlsOsB%2FHwvFI4fn2g8AMAP8yYdh%2F9Ar6g4WkAbl5B2nYuzWJpns5%2FZ1Q7dZ6nczXwiefJIV6fbJwc2itOIJWYsaZQuuaCkVDnwBSLHW5HHoH%2Fai9IvaKvmMHBu7kpbo53lsD3BmutmY2HlcG9R4RR20niTQbdCkM322S8lXoQVnwI6aW1GX0Z7Adpr%2BNlqMZocxDWANkNluYZVzpW3VgE2Eq%2BZwtNe4y6ZMC%2BAy0zFcEJay0LvHSYpdcBVmmzJVreKs8N7HFjeERiocTtXDG4onMdPa%2F1dLZatMAaW1noHSFHkJ3sbhuKpY382Jcb6WbDHwz4qAMUpHjrEtNrZ2Hiqo7BVTz9awtfIldRQgmtyzsMt1BLT17MODa3MAGOqUB3YdRTZRHduqBNIoa7uFma9lM74YiJySbx1dTpy3f6Sulu30CdnZWvbximmiXtE1WyNMJ1w0SX878E9Vh23zixSG%2B9irtfZYyNDrm3UUSgTBF2loFWOU6lyejhkGjQlVODBuJAH4mxx4I%2F3YvUgwveIjehfu4K3rgKxzVIyzEA26sm7ntLBIzxWKdeYNPBUaGlAzTBUKUUYEdig1yS9yaEwCq3607&X-Amz-Signature=b1b4626973584649e0754b6b34bb1fbe8668375040ab13e612492122b14f0b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NN76V7Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFmiiMUGOGx9fXh5cVYCb42pHwpcUK%2FrGXQx3ws2R2bIAiEAkGFOyMWbOrlzy0Go2rmsEqjDLwBWoY6jgdSk3oojx1Uq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMiNFw1X4jt2sF4iuyrcA4Ili0ko8xgJIeqHZDqWcVp0euZwwHIirGcEOUI6cwrB0X2cKYOj4TWuVnIQ8KBqos%2FmkIAGDazCFx%2F249mTqmLV1tN3A4sbJqCr5zUOp0r9OCPxAvqGOfzaDqqywEnH207FZ8qH1R0e9zWADsO4lMeuVcskxsXGMu%2BOnHRxAwKD5kUs3J9hNYzb0GBayeExQnUnA%2B3%2FeJWLcokdWLacGIKSdzmfSBlVVIdpVnyWvc8wdUj6gd8hAK1XXE9mlB7zmjxkD9rXtlsOsB%2FHwvFI4fn2g8AMAP8yYdh%2F9Ar6g4WkAbl5B2nYuzWJpns5%2FZ1Q7dZ6nczXwiefJIV6fbJwc2itOIJWYsaZQuuaCkVDnwBSLHW5HHoH%2Fai9IvaKvmMHBu7kpbo53lsD3BmutmY2HlcG9R4RR20niTQbdCkM322S8lXoQVnwI6aW1GX0Z7Adpr%2BNlqMZocxDWANkNluYZVzpW3VgE2Eq%2BZwtNe4y6ZMC%2BAy0zFcEJay0LvHSYpdcBVmmzJVreKs8N7HFjeERiocTtXDG4onMdPa%2F1dLZatMAaW1noHSFHkJ3sbhuKpY382Jcb6WbDHwz4qAMUpHjrEtNrZ2Hiqo7BVTz9awtfIldRQgmtyzsMt1BLT17MODa3MAGOqUB3YdRTZRHduqBNIoa7uFma9lM74YiJySbx1dTpy3f6Sulu30CdnZWvbximmiXtE1WyNMJ1w0SX878E9Vh23zixSG%2B9irtfZYyNDrm3UUSgTBF2loFWOU6lyejhkGjQlVODBuJAH4mxx4I%2F3YvUgwveIjehfu4K3rgKxzVIyzEA26sm7ntLBIzxWKdeYNPBUaGlAzTBUKUUYEdig1yS9yaEwCq3607&X-Amz-Signature=5f9a1b79e822793f5a72b212271898119ce3770050d48a1fcee4872ba7aa1b4b&X-Amz-SignedHeaders=host&x-id=GetObject)
