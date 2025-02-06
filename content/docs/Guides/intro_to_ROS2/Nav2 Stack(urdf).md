---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGERQ52M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDIte9aub0NAOD%2BtXOxI10VF1t9U%2BCUvEFgkKrjhM6AQIgeFGNt6BTKFKVCcc%2BZxtFTflc6vAMyogVzpo7vGpZey0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAWWdcY887Q7VDmMzCrcAx6GEAr6oTDZle2oUisAdBVVdKomXTodTZq13rwWguQgolOY6sid%2F3efODE1uPcZvOkSHOPjGMSMN5iEmIIslOWDlS8BcEO8LsczGe%2FWOjcjZTw68IbggKqIfZ%2FyybdcFzsxEI9pubx5pmq1E0gv%2Fn8j%2BHL3bOkRfK4T4CKse7x6QJcZN8np8GZdcabu3AEvgxnxOcJiEQg7Y0FQa5bmpIO5J1NHTTEIE%2FJXfHisXBJGyC9A8sUkVMd9onHE3mv8kHEYM0IzwTiGJV0bA1hQD4m4tJlVwLXkmyR0z3hiQdnu%2FLYPOkgC8ftCq0W9PMy3d%2FrboT4vwFc4uHkUBpBVk7nYmHJ5WczsMxY2aXarTu0K4UeqEcBozRfWK2sOCxfXhzbiocnOMs7NQXDYffBJvAemzf18JpBElcuvwz7qBWQe15ew%2BrgITslK9KzRkXVXJ%2FTRXbHXOaEnruHbRUgzlNWbXCcyybVcpn%2BIv5caKxYagPbyXys%2B32%2BeCm6ZcSdyl7qK%2F%2Bq0lOm%2BKaNfsW8PgkJevbM3Lx%2FltcmmobMNKGKvzz5edQDjbw74E%2FEOHrIucM%2BUct7jFc9tO9jWhCA0eZrZ%2B81zZOpGczEh5%2FOc54RA4paeIOZxtQOGaChzMNPSk70GOqUBA%2Bo7qrHm6NsSWpfh4pFTu3j8BR44rgVBtrpMBawZfmp5JM35OBbBYpsCp4Ah5coaBWN0WE3mNQsp%2FpNPmxWquewqmxmjvr%2BNOnAkEWj9%2Fp8BORoiXsIL0n%2Fo0tE6pHpUyV5Ul2EEo%2Bw3HoVEf4lLZDjk8B3z4B6FpnMBeGoeVO13dp1JAr0a5wlDmm4UBtpf8V0E3FO3a8hdBQoeDH0HFzlEkRBS&X-Amz-Signature=0ccada62c5800847c3888d4037e005345e5b0d6edb3f1a5eb78e2f07cf360bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGERQ52M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDIte9aub0NAOD%2BtXOxI10VF1t9U%2BCUvEFgkKrjhM6AQIgeFGNt6BTKFKVCcc%2BZxtFTflc6vAMyogVzpo7vGpZey0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAWWdcY887Q7VDmMzCrcAx6GEAr6oTDZle2oUisAdBVVdKomXTodTZq13rwWguQgolOY6sid%2F3efODE1uPcZvOkSHOPjGMSMN5iEmIIslOWDlS8BcEO8LsczGe%2FWOjcjZTw68IbggKqIfZ%2FyybdcFzsxEI9pubx5pmq1E0gv%2Fn8j%2BHL3bOkRfK4T4CKse7x6QJcZN8np8GZdcabu3AEvgxnxOcJiEQg7Y0FQa5bmpIO5J1NHTTEIE%2FJXfHisXBJGyC9A8sUkVMd9onHE3mv8kHEYM0IzwTiGJV0bA1hQD4m4tJlVwLXkmyR0z3hiQdnu%2FLYPOkgC8ftCq0W9PMy3d%2FrboT4vwFc4uHkUBpBVk7nYmHJ5WczsMxY2aXarTu0K4UeqEcBozRfWK2sOCxfXhzbiocnOMs7NQXDYffBJvAemzf18JpBElcuvwz7qBWQe15ew%2BrgITslK9KzRkXVXJ%2FTRXbHXOaEnruHbRUgzlNWbXCcyybVcpn%2BIv5caKxYagPbyXys%2B32%2BeCm6ZcSdyl7qK%2F%2Bq0lOm%2BKaNfsW8PgkJevbM3Lx%2FltcmmobMNKGKvzz5edQDjbw74E%2FEOHrIucM%2BUct7jFc9tO9jWhCA0eZrZ%2B81zZOpGczEh5%2FOc54RA4paeIOZxtQOGaChzMNPSk70GOqUBA%2Bo7qrHm6NsSWpfh4pFTu3j8BR44rgVBtrpMBawZfmp5JM35OBbBYpsCp4Ah5coaBWN0WE3mNQsp%2FpNPmxWquewqmxmjvr%2BNOnAkEWj9%2Fp8BORoiXsIL0n%2Fo0tE6pHpUyV5Ul2EEo%2Bw3HoVEf4lLZDjk8B3z4B6FpnMBeGoeVO13dp1JAr0a5wlDmm4UBtpf8V0E3FO3a8hdBQoeDH0HFzlEkRBS&X-Amz-Signature=a250cf204b540399ac3c800a0cfba314a04296a4c440272263fc78a1d8ef8431&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGERQ52M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDIte9aub0NAOD%2BtXOxI10VF1t9U%2BCUvEFgkKrjhM6AQIgeFGNt6BTKFKVCcc%2BZxtFTflc6vAMyogVzpo7vGpZey0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAWWdcY887Q7VDmMzCrcAx6GEAr6oTDZle2oUisAdBVVdKomXTodTZq13rwWguQgolOY6sid%2F3efODE1uPcZvOkSHOPjGMSMN5iEmIIslOWDlS8BcEO8LsczGe%2FWOjcjZTw68IbggKqIfZ%2FyybdcFzsxEI9pubx5pmq1E0gv%2Fn8j%2BHL3bOkRfK4T4CKse7x6QJcZN8np8GZdcabu3AEvgxnxOcJiEQg7Y0FQa5bmpIO5J1NHTTEIE%2FJXfHisXBJGyC9A8sUkVMd9onHE3mv8kHEYM0IzwTiGJV0bA1hQD4m4tJlVwLXkmyR0z3hiQdnu%2FLYPOkgC8ftCq0W9PMy3d%2FrboT4vwFc4uHkUBpBVk7nYmHJ5WczsMxY2aXarTu0K4UeqEcBozRfWK2sOCxfXhzbiocnOMs7NQXDYffBJvAemzf18JpBElcuvwz7qBWQe15ew%2BrgITslK9KzRkXVXJ%2FTRXbHXOaEnruHbRUgzlNWbXCcyybVcpn%2BIv5caKxYagPbyXys%2B32%2BeCm6ZcSdyl7qK%2F%2Bq0lOm%2BKaNfsW8PgkJevbM3Lx%2FltcmmobMNKGKvzz5edQDjbw74E%2FEOHrIucM%2BUct7jFc9tO9jWhCA0eZrZ%2B81zZOpGczEh5%2FOc54RA4paeIOZxtQOGaChzMNPSk70GOqUBA%2Bo7qrHm6NsSWpfh4pFTu3j8BR44rgVBtrpMBawZfmp5JM35OBbBYpsCp4Ah5coaBWN0WE3mNQsp%2FpNPmxWquewqmxmjvr%2BNOnAkEWj9%2Fp8BORoiXsIL0n%2Fo0tE6pHpUyV5Ul2EEo%2Bw3HoVEf4lLZDjk8B3z4B6FpnMBeGoeVO13dp1JAr0a5wlDmm4UBtpf8V0E3FO3a8hdBQoeDH0HFzlEkRBS&X-Amz-Signature=c1dd295ebd7a5a7af098f1b3b02bb818c92695c92c7e2a6dd96591ea58c014da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGERQ52M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDIte9aub0NAOD%2BtXOxI10VF1t9U%2BCUvEFgkKrjhM6AQIgeFGNt6BTKFKVCcc%2BZxtFTflc6vAMyogVzpo7vGpZey0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAWWdcY887Q7VDmMzCrcAx6GEAr6oTDZle2oUisAdBVVdKomXTodTZq13rwWguQgolOY6sid%2F3efODE1uPcZvOkSHOPjGMSMN5iEmIIslOWDlS8BcEO8LsczGe%2FWOjcjZTw68IbggKqIfZ%2FyybdcFzsxEI9pubx5pmq1E0gv%2Fn8j%2BHL3bOkRfK4T4CKse7x6QJcZN8np8GZdcabu3AEvgxnxOcJiEQg7Y0FQa5bmpIO5J1NHTTEIE%2FJXfHisXBJGyC9A8sUkVMd9onHE3mv8kHEYM0IzwTiGJV0bA1hQD4m4tJlVwLXkmyR0z3hiQdnu%2FLYPOkgC8ftCq0W9PMy3d%2FrboT4vwFc4uHkUBpBVk7nYmHJ5WczsMxY2aXarTu0K4UeqEcBozRfWK2sOCxfXhzbiocnOMs7NQXDYffBJvAemzf18JpBElcuvwz7qBWQe15ew%2BrgITslK9KzRkXVXJ%2FTRXbHXOaEnruHbRUgzlNWbXCcyybVcpn%2BIv5caKxYagPbyXys%2B32%2BeCm6ZcSdyl7qK%2F%2Bq0lOm%2BKaNfsW8PgkJevbM3Lx%2FltcmmobMNKGKvzz5edQDjbw74E%2FEOHrIucM%2BUct7jFc9tO9jWhCA0eZrZ%2B81zZOpGczEh5%2FOc54RA4paeIOZxtQOGaChzMNPSk70GOqUBA%2Bo7qrHm6NsSWpfh4pFTu3j8BR44rgVBtrpMBawZfmp5JM35OBbBYpsCp4Ah5coaBWN0WE3mNQsp%2FpNPmxWquewqmxmjvr%2BNOnAkEWj9%2Fp8BORoiXsIL0n%2Fo0tE6pHpUyV5Ul2EEo%2Bw3HoVEf4lLZDjk8B3z4B6FpnMBeGoeVO13dp1JAr0a5wlDmm4UBtpf8V0E3FO3a8hdBQoeDH0HFzlEkRBS&X-Amz-Signature=ae1e5eb27c956fba9b6ff980e85719fe2f23cdf3465c9af9dbf2ea0436db10b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGERQ52M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDIte9aub0NAOD%2BtXOxI10VF1t9U%2BCUvEFgkKrjhM6AQIgeFGNt6BTKFKVCcc%2BZxtFTflc6vAMyogVzpo7vGpZey0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAWWdcY887Q7VDmMzCrcAx6GEAr6oTDZle2oUisAdBVVdKomXTodTZq13rwWguQgolOY6sid%2F3efODE1uPcZvOkSHOPjGMSMN5iEmIIslOWDlS8BcEO8LsczGe%2FWOjcjZTw68IbggKqIfZ%2FyybdcFzsxEI9pubx5pmq1E0gv%2Fn8j%2BHL3bOkRfK4T4CKse7x6QJcZN8np8GZdcabu3AEvgxnxOcJiEQg7Y0FQa5bmpIO5J1NHTTEIE%2FJXfHisXBJGyC9A8sUkVMd9onHE3mv8kHEYM0IzwTiGJV0bA1hQD4m4tJlVwLXkmyR0z3hiQdnu%2FLYPOkgC8ftCq0W9PMy3d%2FrboT4vwFc4uHkUBpBVk7nYmHJ5WczsMxY2aXarTu0K4UeqEcBozRfWK2sOCxfXhzbiocnOMs7NQXDYffBJvAemzf18JpBElcuvwz7qBWQe15ew%2BrgITslK9KzRkXVXJ%2FTRXbHXOaEnruHbRUgzlNWbXCcyybVcpn%2BIv5caKxYagPbyXys%2B32%2BeCm6ZcSdyl7qK%2F%2Bq0lOm%2BKaNfsW8PgkJevbM3Lx%2FltcmmobMNKGKvzz5edQDjbw74E%2FEOHrIucM%2BUct7jFc9tO9jWhCA0eZrZ%2B81zZOpGczEh5%2FOc54RA4paeIOZxtQOGaChzMNPSk70GOqUBA%2Bo7qrHm6NsSWpfh4pFTu3j8BR44rgVBtrpMBawZfmp5JM35OBbBYpsCp4Ah5coaBWN0WE3mNQsp%2FpNPmxWquewqmxmjvr%2BNOnAkEWj9%2Fp8BORoiXsIL0n%2Fo0tE6pHpUyV5Ul2EEo%2Bw3HoVEf4lLZDjk8B3z4B6FpnMBeGoeVO13dp1JAr0a5wlDmm4UBtpf8V0E3FO3a8hdBQoeDH0HFzlEkRBS&X-Amz-Signature=08911bd8182a015108061913b0beeeea984bfe8046ae0dc01018d799158af0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGERQ52M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCDIte9aub0NAOD%2BtXOxI10VF1t9U%2BCUvEFgkKrjhM6AQIgeFGNt6BTKFKVCcc%2BZxtFTflc6vAMyogVzpo7vGpZey0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAWWdcY887Q7VDmMzCrcAx6GEAr6oTDZle2oUisAdBVVdKomXTodTZq13rwWguQgolOY6sid%2F3efODE1uPcZvOkSHOPjGMSMN5iEmIIslOWDlS8BcEO8LsczGe%2FWOjcjZTw68IbggKqIfZ%2FyybdcFzsxEI9pubx5pmq1E0gv%2Fn8j%2BHL3bOkRfK4T4CKse7x6QJcZN8np8GZdcabu3AEvgxnxOcJiEQg7Y0FQa5bmpIO5J1NHTTEIE%2FJXfHisXBJGyC9A8sUkVMd9onHE3mv8kHEYM0IzwTiGJV0bA1hQD4m4tJlVwLXkmyR0z3hiQdnu%2FLYPOkgC8ftCq0W9PMy3d%2FrboT4vwFc4uHkUBpBVk7nYmHJ5WczsMxY2aXarTu0K4UeqEcBozRfWK2sOCxfXhzbiocnOMs7NQXDYffBJvAemzf18JpBElcuvwz7qBWQe15ew%2BrgITslK9KzRkXVXJ%2FTRXbHXOaEnruHbRUgzlNWbXCcyybVcpn%2BIv5caKxYagPbyXys%2B32%2BeCm6ZcSdyl7qK%2F%2Bq0lOm%2BKaNfsW8PgkJevbM3Lx%2FltcmmobMNKGKvzz5edQDjbw74E%2FEOHrIucM%2BUct7jFc9tO9jWhCA0eZrZ%2B81zZOpGczEh5%2FOc54RA4paeIOZxtQOGaChzMNPSk70GOqUBA%2Bo7qrHm6NsSWpfh4pFTu3j8BR44rgVBtrpMBawZfmp5JM35OBbBYpsCp4Ah5coaBWN0WE3mNQsp%2FpNPmxWquewqmxmjvr%2BNOnAkEWj9%2Fp8BORoiXsIL0n%2Fo0tE6pHpUyV5Ul2EEo%2Bw3HoVEf4lLZDjk8B3z4B6FpnMBeGoeVO13dp1JAr0a5wlDmm4UBtpf8V0E3FO3a8hdBQoeDH0HFzlEkRBS&X-Amz-Signature=bc1084eb68e2d7bdd5d9a734e4e41d785479f85b0b4600fa98103f63025db0b7&X-Amz-SignedHeaders=host&x-id=GetObject)
