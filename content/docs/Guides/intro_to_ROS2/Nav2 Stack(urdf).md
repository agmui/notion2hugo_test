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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QLVDBU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCO3IfX98gT8cr7dCa3KvDueIIITzJhjn8YMGDEFvbAPQIhALdq4Zg%2FbbYvSWjFz4hC8G2DicPu%2BjvNEFu1QxSUF9DgKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWC28UhvTGKaIBegq3APR03wngxwKnDXwDBnVx6X%2Bpg1OY0ap2zVj%2FhwgOANKZr8opLNVReFerCWG5MORQRFws2j0KLmHuObosjY7nA5y3Ost1yM1SLbYaQBM7N9JhxK%2FssuL99uka5G%2FSDtjKqiXe4PmT6wckV%2FhE2RXjn9J9ekhhY6YyCCde9baPdX1PFGjiOPtpDYvclh0E%2FIIb%2Fv%2Bp2RCXCmPB1yV%2F4NhtXAtMMrs0JwH4uP2tP3BnEeuxbASnsdmk3tpr1uCWY9xgazmFA9%2FDN0D82a2x9vsju97T4CyrFAQoA2n1UowSk6Fo4EmobKIQzt6DQTsyq5RxHw5xiFVYd%2F745EM8NoZsOryKW05FwiPRXFlMB7JN858rJMFyY4mXSATjOB8gspHvUU6KDCR828L1pNvdpuR9mfC7ZLql%2BWQGsT%2BVZY5DzUk6zoF%2FMi4gtHKLUa8rvh9QyVVihiRCzntgIMKk5n1lCf7TjcRWXK82jaqielrFJJnHA66pbuSIa3ti6kh0kDbpmJcOThQRjFkVrXeO3nmVbi0TWpidTrpfyqRTwcdps%2F9j7qsgMZGafz84UtSJ4G5fgdCS2zsKYEqMiSFXesJ6DXg75wg4XCsXqOt%2FJ79yZ%2Fb5c09DXQ7z%2F7UGKenCDCNxLzBBjqkAauD4DbEyVNYm4vLG3pEsy%2Fe84h3w9XSQTQ420l72bnu4TtVWkh039ErogBQSp0nEpMT%2F0%2FSZli35IZa4wjRdC%2FZnUKrtZMiiPCxX8bXrgEmEkEZHtvjCjo6cLBhV8ty5iK%2F7Rab3FzOEd1hv7KqYExx7QT5dmRxTefKaMzrk42KJqqWCJml5BHc1wuStXb9c3f6lX0bccaIT%2B7ZGQnL3a1YdYef&X-Amz-Signature=e04c01ab744de3f5f0769bbbae40add6e20f0c967434bb38416c94deb1404df0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QLVDBU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCO3IfX98gT8cr7dCa3KvDueIIITzJhjn8YMGDEFvbAPQIhALdq4Zg%2FbbYvSWjFz4hC8G2DicPu%2BjvNEFu1QxSUF9DgKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWC28UhvTGKaIBegq3APR03wngxwKnDXwDBnVx6X%2Bpg1OY0ap2zVj%2FhwgOANKZr8opLNVReFerCWG5MORQRFws2j0KLmHuObosjY7nA5y3Ost1yM1SLbYaQBM7N9JhxK%2FssuL99uka5G%2FSDtjKqiXe4PmT6wckV%2FhE2RXjn9J9ekhhY6YyCCde9baPdX1PFGjiOPtpDYvclh0E%2FIIb%2Fv%2Bp2RCXCmPB1yV%2F4NhtXAtMMrs0JwH4uP2tP3BnEeuxbASnsdmk3tpr1uCWY9xgazmFA9%2FDN0D82a2x9vsju97T4CyrFAQoA2n1UowSk6Fo4EmobKIQzt6DQTsyq5RxHw5xiFVYd%2F745EM8NoZsOryKW05FwiPRXFlMB7JN858rJMFyY4mXSATjOB8gspHvUU6KDCR828L1pNvdpuR9mfC7ZLql%2BWQGsT%2BVZY5DzUk6zoF%2FMi4gtHKLUa8rvh9QyVVihiRCzntgIMKk5n1lCf7TjcRWXK82jaqielrFJJnHA66pbuSIa3ti6kh0kDbpmJcOThQRjFkVrXeO3nmVbi0TWpidTrpfyqRTwcdps%2F9j7qsgMZGafz84UtSJ4G5fgdCS2zsKYEqMiSFXesJ6DXg75wg4XCsXqOt%2FJ79yZ%2Fb5c09DXQ7z%2F7UGKenCDCNxLzBBjqkAauD4DbEyVNYm4vLG3pEsy%2Fe84h3w9XSQTQ420l72bnu4TtVWkh039ErogBQSp0nEpMT%2F0%2FSZli35IZa4wjRdC%2FZnUKrtZMiiPCxX8bXrgEmEkEZHtvjCjo6cLBhV8ty5iK%2F7Rab3FzOEd1hv7KqYExx7QT5dmRxTefKaMzrk42KJqqWCJml5BHc1wuStXb9c3f6lX0bccaIT%2B7ZGQnL3a1YdYef&X-Amz-Signature=4886e838416fdf7f492ebce98e8c64a2af3ce784674c19dece07927dcf644ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QLVDBU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCO3IfX98gT8cr7dCa3KvDueIIITzJhjn8YMGDEFvbAPQIhALdq4Zg%2FbbYvSWjFz4hC8G2DicPu%2BjvNEFu1QxSUF9DgKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWC28UhvTGKaIBegq3APR03wngxwKnDXwDBnVx6X%2Bpg1OY0ap2zVj%2FhwgOANKZr8opLNVReFerCWG5MORQRFws2j0KLmHuObosjY7nA5y3Ost1yM1SLbYaQBM7N9JhxK%2FssuL99uka5G%2FSDtjKqiXe4PmT6wckV%2FhE2RXjn9J9ekhhY6YyCCde9baPdX1PFGjiOPtpDYvclh0E%2FIIb%2Fv%2Bp2RCXCmPB1yV%2F4NhtXAtMMrs0JwH4uP2tP3BnEeuxbASnsdmk3tpr1uCWY9xgazmFA9%2FDN0D82a2x9vsju97T4CyrFAQoA2n1UowSk6Fo4EmobKIQzt6DQTsyq5RxHw5xiFVYd%2F745EM8NoZsOryKW05FwiPRXFlMB7JN858rJMFyY4mXSATjOB8gspHvUU6KDCR828L1pNvdpuR9mfC7ZLql%2BWQGsT%2BVZY5DzUk6zoF%2FMi4gtHKLUa8rvh9QyVVihiRCzntgIMKk5n1lCf7TjcRWXK82jaqielrFJJnHA66pbuSIa3ti6kh0kDbpmJcOThQRjFkVrXeO3nmVbi0TWpidTrpfyqRTwcdps%2F9j7qsgMZGafz84UtSJ4G5fgdCS2zsKYEqMiSFXesJ6DXg75wg4XCsXqOt%2FJ79yZ%2Fb5c09DXQ7z%2F7UGKenCDCNxLzBBjqkAauD4DbEyVNYm4vLG3pEsy%2Fe84h3w9XSQTQ420l72bnu4TtVWkh039ErogBQSp0nEpMT%2F0%2FSZli35IZa4wjRdC%2FZnUKrtZMiiPCxX8bXrgEmEkEZHtvjCjo6cLBhV8ty5iK%2F7Rab3FzOEd1hv7KqYExx7QT5dmRxTefKaMzrk42KJqqWCJml5BHc1wuStXb9c3f6lX0bccaIT%2B7ZGQnL3a1YdYef&X-Amz-Signature=62b6b9cc091bd0cf534909626da0ece6aece759d36e9d111e754d56cbdd7983b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QLVDBU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCO3IfX98gT8cr7dCa3KvDueIIITzJhjn8YMGDEFvbAPQIhALdq4Zg%2FbbYvSWjFz4hC8G2DicPu%2BjvNEFu1QxSUF9DgKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWC28UhvTGKaIBegq3APR03wngxwKnDXwDBnVx6X%2Bpg1OY0ap2zVj%2FhwgOANKZr8opLNVReFerCWG5MORQRFws2j0KLmHuObosjY7nA5y3Ost1yM1SLbYaQBM7N9JhxK%2FssuL99uka5G%2FSDtjKqiXe4PmT6wckV%2FhE2RXjn9J9ekhhY6YyCCde9baPdX1PFGjiOPtpDYvclh0E%2FIIb%2Fv%2Bp2RCXCmPB1yV%2F4NhtXAtMMrs0JwH4uP2tP3BnEeuxbASnsdmk3tpr1uCWY9xgazmFA9%2FDN0D82a2x9vsju97T4CyrFAQoA2n1UowSk6Fo4EmobKIQzt6DQTsyq5RxHw5xiFVYd%2F745EM8NoZsOryKW05FwiPRXFlMB7JN858rJMFyY4mXSATjOB8gspHvUU6KDCR828L1pNvdpuR9mfC7ZLql%2BWQGsT%2BVZY5DzUk6zoF%2FMi4gtHKLUa8rvh9QyVVihiRCzntgIMKk5n1lCf7TjcRWXK82jaqielrFJJnHA66pbuSIa3ti6kh0kDbpmJcOThQRjFkVrXeO3nmVbi0TWpidTrpfyqRTwcdps%2F9j7qsgMZGafz84UtSJ4G5fgdCS2zsKYEqMiSFXesJ6DXg75wg4XCsXqOt%2FJ79yZ%2Fb5c09DXQ7z%2F7UGKenCDCNxLzBBjqkAauD4DbEyVNYm4vLG3pEsy%2Fe84h3w9XSQTQ420l72bnu4TtVWkh039ErogBQSp0nEpMT%2F0%2FSZli35IZa4wjRdC%2FZnUKrtZMiiPCxX8bXrgEmEkEZHtvjCjo6cLBhV8ty5iK%2F7Rab3FzOEd1hv7KqYExx7QT5dmRxTefKaMzrk42KJqqWCJml5BHc1wuStXb9c3f6lX0bccaIT%2B7ZGQnL3a1YdYef&X-Amz-Signature=426758dfee8c4c1a85f800796109b4d17d00e76d5e17050bba3ee2d8d5022351&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QLVDBU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCO3IfX98gT8cr7dCa3KvDueIIITzJhjn8YMGDEFvbAPQIhALdq4Zg%2FbbYvSWjFz4hC8G2DicPu%2BjvNEFu1QxSUF9DgKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWC28UhvTGKaIBegq3APR03wngxwKnDXwDBnVx6X%2Bpg1OY0ap2zVj%2FhwgOANKZr8opLNVReFerCWG5MORQRFws2j0KLmHuObosjY7nA5y3Ost1yM1SLbYaQBM7N9JhxK%2FssuL99uka5G%2FSDtjKqiXe4PmT6wckV%2FhE2RXjn9J9ekhhY6YyCCde9baPdX1PFGjiOPtpDYvclh0E%2FIIb%2Fv%2Bp2RCXCmPB1yV%2F4NhtXAtMMrs0JwH4uP2tP3BnEeuxbASnsdmk3tpr1uCWY9xgazmFA9%2FDN0D82a2x9vsju97T4CyrFAQoA2n1UowSk6Fo4EmobKIQzt6DQTsyq5RxHw5xiFVYd%2F745EM8NoZsOryKW05FwiPRXFlMB7JN858rJMFyY4mXSATjOB8gspHvUU6KDCR828L1pNvdpuR9mfC7ZLql%2BWQGsT%2BVZY5DzUk6zoF%2FMi4gtHKLUa8rvh9QyVVihiRCzntgIMKk5n1lCf7TjcRWXK82jaqielrFJJnHA66pbuSIa3ti6kh0kDbpmJcOThQRjFkVrXeO3nmVbi0TWpidTrpfyqRTwcdps%2F9j7qsgMZGafz84UtSJ4G5fgdCS2zsKYEqMiSFXesJ6DXg75wg4XCsXqOt%2FJ79yZ%2Fb5c09DXQ7z%2F7UGKenCDCNxLzBBjqkAauD4DbEyVNYm4vLG3pEsy%2Fe84h3w9XSQTQ420l72bnu4TtVWkh039ErogBQSp0nEpMT%2F0%2FSZli35IZa4wjRdC%2FZnUKrtZMiiPCxX8bXrgEmEkEZHtvjCjo6cLBhV8ty5iK%2F7Rab3FzOEd1hv7KqYExx7QT5dmRxTefKaMzrk42KJqqWCJml5BHc1wuStXb9c3f6lX0bccaIT%2B7ZGQnL3a1YdYef&X-Amz-Signature=439e91525255aff43922bac629a2cefa8761882fabafdb22a8b65bd4dd949f69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4QLVDBU%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCO3IfX98gT8cr7dCa3KvDueIIITzJhjn8YMGDEFvbAPQIhALdq4Zg%2FbbYvSWjFz4hC8G2DicPu%2BjvNEFu1QxSUF9DgKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvWC28UhvTGKaIBegq3APR03wngxwKnDXwDBnVx6X%2Bpg1OY0ap2zVj%2FhwgOANKZr8opLNVReFerCWG5MORQRFws2j0KLmHuObosjY7nA5y3Ost1yM1SLbYaQBM7N9JhxK%2FssuL99uka5G%2FSDtjKqiXe4PmT6wckV%2FhE2RXjn9J9ekhhY6YyCCde9baPdX1PFGjiOPtpDYvclh0E%2FIIb%2Fv%2Bp2RCXCmPB1yV%2F4NhtXAtMMrs0JwH4uP2tP3BnEeuxbASnsdmk3tpr1uCWY9xgazmFA9%2FDN0D82a2x9vsju97T4CyrFAQoA2n1UowSk6Fo4EmobKIQzt6DQTsyq5RxHw5xiFVYd%2F745EM8NoZsOryKW05FwiPRXFlMB7JN858rJMFyY4mXSATjOB8gspHvUU6KDCR828L1pNvdpuR9mfC7ZLql%2BWQGsT%2BVZY5DzUk6zoF%2FMi4gtHKLUa8rvh9QyVVihiRCzntgIMKk5n1lCf7TjcRWXK82jaqielrFJJnHA66pbuSIa3ti6kh0kDbpmJcOThQRjFkVrXeO3nmVbi0TWpidTrpfyqRTwcdps%2F9j7qsgMZGafz84UtSJ4G5fgdCS2zsKYEqMiSFXesJ6DXg75wg4XCsXqOt%2FJ79yZ%2Fb5c09DXQ7z%2F7UGKenCDCNxLzBBjqkAauD4DbEyVNYm4vLG3pEsy%2Fe84h3w9XSQTQ420l72bnu4TtVWkh039ErogBQSp0nEpMT%2F0%2FSZli35IZa4wjRdC%2FZnUKrtZMiiPCxX8bXrgEmEkEZHtvjCjo6cLBhV8ty5iK%2F7Rab3FzOEd1hv7KqYExx7QT5dmRxTefKaMzrk42KJqqWCJml5BHc1wuStXb9c3f6lX0bccaIT%2B7ZGQnL3a1YdYef&X-Amz-Signature=a0f6efe25317b4374d77efe5889c8c6e7208580f8681226981bacb795cb46d90&X-Amz-SignedHeaders=host&x-id=GetObject)
