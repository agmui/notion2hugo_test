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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WZZ7B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6etto7wmrYyOylm0EJMguhvqG%2FKgNgyBrkHcy7j5AWAIgMxWCGFM8mkquWXnCLvnTTmtFMxePmSNYed33XJu1hsgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGF8c7MVWnnhWsxLVyrcA%2B2krc9B7Gc5gM7sVeqID%2F%2FSsFzhItM7ARxVrrhVFd9kPU4PVCniAZuaKe46T6f9HtoEGXNZE2pzmylhjdwEc1oGn7%2BhfBX7%2Bl%2B382zkRvgQe7xScfjw33iJAA%2BzxOUUbsQYsGJwhKxXPiWPN3x1Z77mHMrDNqwS0KU9xOE1Bb1UReddJIc%2BI7XIeMFAQmI%2FcIIb9D%2BrBV5MH8f8FOAhNJE9oNVq%2Fx%2B0Bt4g7RSdxhjHeejC96sTicG97Pc8wDprSnY1o%2FBmeWvDpTu0KT%2BKh9zDU2tbOZcve2Q0ssqPh6sgyJLTP7Au890c%2FZmEDxv6RtWjw9E8VhCOPMz9Zv4ucQHlkn%2F042kKkHJMZWzqOMORCcSWvR3qKk5RX3f%2FIQ%2FC8pNS1pAiNq45S9F2Wv4FcVxFloeNFGNCskayEotpQg%2BXlF2asHVSQ65hojioE5orVxPUY9mWRFC77MBuOVhhunrwXftqhwdvuiJaCHG%2FXxhKVgqJ5lQiSrbDZB3sWOMHkuy1MKvCstKE2U%2BoJfdzOyClUS2Gb9E0gjyYio%2BwNLV8sxElalXDOgrSs8U6jGVp5YU4WH7Y0%2BjHEwVJKbJOZ2yDQAIWPRtUl8oPou5IXEaFKlSnDyiBL1sgA7lvMJaf%2Fr0GOqUBT%2FXcNRxZvyOcNTji6JqUF8zcG2S5NBtDY2IU5lrHUwWTMq96oTC%2FIY5PS4coH2JMQSqMucXd%2FQqQY5c9UoosqYSttQtgCAp8QUjxFZhlzdssnvRpfrUUNQzsfpmFI6W6cx5vfjTnXWdcwKHtpqENFxpuGQ9FjjxOpe1Jv1Kov%2FwU4jCYpXf3GykwHc5x3aZ1KhFbyeUEcBPEGk%2B0J4Spi3lScSaR&X-Amz-Signature=3bb5f1abe3295823bdbf33f80a583a11c6e429ad174ec64c45a01880f8de603c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WZZ7B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6etto7wmrYyOylm0EJMguhvqG%2FKgNgyBrkHcy7j5AWAIgMxWCGFM8mkquWXnCLvnTTmtFMxePmSNYed33XJu1hsgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGF8c7MVWnnhWsxLVyrcA%2B2krc9B7Gc5gM7sVeqID%2F%2FSsFzhItM7ARxVrrhVFd9kPU4PVCniAZuaKe46T6f9HtoEGXNZE2pzmylhjdwEc1oGn7%2BhfBX7%2Bl%2B382zkRvgQe7xScfjw33iJAA%2BzxOUUbsQYsGJwhKxXPiWPN3x1Z77mHMrDNqwS0KU9xOE1Bb1UReddJIc%2BI7XIeMFAQmI%2FcIIb9D%2BrBV5MH8f8FOAhNJE9oNVq%2Fx%2B0Bt4g7RSdxhjHeejC96sTicG97Pc8wDprSnY1o%2FBmeWvDpTu0KT%2BKh9zDU2tbOZcve2Q0ssqPh6sgyJLTP7Au890c%2FZmEDxv6RtWjw9E8VhCOPMz9Zv4ucQHlkn%2F042kKkHJMZWzqOMORCcSWvR3qKk5RX3f%2FIQ%2FC8pNS1pAiNq45S9F2Wv4FcVxFloeNFGNCskayEotpQg%2BXlF2asHVSQ65hojioE5orVxPUY9mWRFC77MBuOVhhunrwXftqhwdvuiJaCHG%2FXxhKVgqJ5lQiSrbDZB3sWOMHkuy1MKvCstKE2U%2BoJfdzOyClUS2Gb9E0gjyYio%2BwNLV8sxElalXDOgrSs8U6jGVp5YU4WH7Y0%2BjHEwVJKbJOZ2yDQAIWPRtUl8oPou5IXEaFKlSnDyiBL1sgA7lvMJaf%2Fr0GOqUBT%2FXcNRxZvyOcNTji6JqUF8zcG2S5NBtDY2IU5lrHUwWTMq96oTC%2FIY5PS4coH2JMQSqMucXd%2FQqQY5c9UoosqYSttQtgCAp8QUjxFZhlzdssnvRpfrUUNQzsfpmFI6W6cx5vfjTnXWdcwKHtpqENFxpuGQ9FjjxOpe1Jv1Kov%2FwU4jCYpXf3GykwHc5x3aZ1KhFbyeUEcBPEGk%2B0J4Spi3lScSaR&X-Amz-Signature=7dfca6ea0940de569ac0f2fad6b07e97989c956a10c1f836e6c6aadd0505be37&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WZZ7B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6etto7wmrYyOylm0EJMguhvqG%2FKgNgyBrkHcy7j5AWAIgMxWCGFM8mkquWXnCLvnTTmtFMxePmSNYed33XJu1hsgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGF8c7MVWnnhWsxLVyrcA%2B2krc9B7Gc5gM7sVeqID%2F%2FSsFzhItM7ARxVrrhVFd9kPU4PVCniAZuaKe46T6f9HtoEGXNZE2pzmylhjdwEc1oGn7%2BhfBX7%2Bl%2B382zkRvgQe7xScfjw33iJAA%2BzxOUUbsQYsGJwhKxXPiWPN3x1Z77mHMrDNqwS0KU9xOE1Bb1UReddJIc%2BI7XIeMFAQmI%2FcIIb9D%2BrBV5MH8f8FOAhNJE9oNVq%2Fx%2B0Bt4g7RSdxhjHeejC96sTicG97Pc8wDprSnY1o%2FBmeWvDpTu0KT%2BKh9zDU2tbOZcve2Q0ssqPh6sgyJLTP7Au890c%2FZmEDxv6RtWjw9E8VhCOPMz9Zv4ucQHlkn%2F042kKkHJMZWzqOMORCcSWvR3qKk5RX3f%2FIQ%2FC8pNS1pAiNq45S9F2Wv4FcVxFloeNFGNCskayEotpQg%2BXlF2asHVSQ65hojioE5orVxPUY9mWRFC77MBuOVhhunrwXftqhwdvuiJaCHG%2FXxhKVgqJ5lQiSrbDZB3sWOMHkuy1MKvCstKE2U%2BoJfdzOyClUS2Gb9E0gjyYio%2BwNLV8sxElalXDOgrSs8U6jGVp5YU4WH7Y0%2BjHEwVJKbJOZ2yDQAIWPRtUl8oPou5IXEaFKlSnDyiBL1sgA7lvMJaf%2Fr0GOqUBT%2FXcNRxZvyOcNTji6JqUF8zcG2S5NBtDY2IU5lrHUwWTMq96oTC%2FIY5PS4coH2JMQSqMucXd%2FQqQY5c9UoosqYSttQtgCAp8QUjxFZhlzdssnvRpfrUUNQzsfpmFI6W6cx5vfjTnXWdcwKHtpqENFxpuGQ9FjjxOpe1Jv1Kov%2FwU4jCYpXf3GykwHc5x3aZ1KhFbyeUEcBPEGk%2B0J4Spi3lScSaR&X-Amz-Signature=0ca7bfa9e60574f08cdc015fd1f8bf20fef6e5c9573450428b84b579b7513445&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WZZ7B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6etto7wmrYyOylm0EJMguhvqG%2FKgNgyBrkHcy7j5AWAIgMxWCGFM8mkquWXnCLvnTTmtFMxePmSNYed33XJu1hsgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGF8c7MVWnnhWsxLVyrcA%2B2krc9B7Gc5gM7sVeqID%2F%2FSsFzhItM7ARxVrrhVFd9kPU4PVCniAZuaKe46T6f9HtoEGXNZE2pzmylhjdwEc1oGn7%2BhfBX7%2Bl%2B382zkRvgQe7xScfjw33iJAA%2BzxOUUbsQYsGJwhKxXPiWPN3x1Z77mHMrDNqwS0KU9xOE1Bb1UReddJIc%2BI7XIeMFAQmI%2FcIIb9D%2BrBV5MH8f8FOAhNJE9oNVq%2Fx%2B0Bt4g7RSdxhjHeejC96sTicG97Pc8wDprSnY1o%2FBmeWvDpTu0KT%2BKh9zDU2tbOZcve2Q0ssqPh6sgyJLTP7Au890c%2FZmEDxv6RtWjw9E8VhCOPMz9Zv4ucQHlkn%2F042kKkHJMZWzqOMORCcSWvR3qKk5RX3f%2FIQ%2FC8pNS1pAiNq45S9F2Wv4FcVxFloeNFGNCskayEotpQg%2BXlF2asHVSQ65hojioE5orVxPUY9mWRFC77MBuOVhhunrwXftqhwdvuiJaCHG%2FXxhKVgqJ5lQiSrbDZB3sWOMHkuy1MKvCstKE2U%2BoJfdzOyClUS2Gb9E0gjyYio%2BwNLV8sxElalXDOgrSs8U6jGVp5YU4WH7Y0%2BjHEwVJKbJOZ2yDQAIWPRtUl8oPou5IXEaFKlSnDyiBL1sgA7lvMJaf%2Fr0GOqUBT%2FXcNRxZvyOcNTji6JqUF8zcG2S5NBtDY2IU5lrHUwWTMq96oTC%2FIY5PS4coH2JMQSqMucXd%2FQqQY5c9UoosqYSttQtgCAp8QUjxFZhlzdssnvRpfrUUNQzsfpmFI6W6cx5vfjTnXWdcwKHtpqENFxpuGQ9FjjxOpe1Jv1Kov%2FwU4jCYpXf3GykwHc5x3aZ1KhFbyeUEcBPEGk%2B0J4Spi3lScSaR&X-Amz-Signature=090bc1ae684c54eee701ea85eafa853bbf3e46ae82725401ddc4fe6d15f32eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WZZ7B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6etto7wmrYyOylm0EJMguhvqG%2FKgNgyBrkHcy7j5AWAIgMxWCGFM8mkquWXnCLvnTTmtFMxePmSNYed33XJu1hsgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGF8c7MVWnnhWsxLVyrcA%2B2krc9B7Gc5gM7sVeqID%2F%2FSsFzhItM7ARxVrrhVFd9kPU4PVCniAZuaKe46T6f9HtoEGXNZE2pzmylhjdwEc1oGn7%2BhfBX7%2Bl%2B382zkRvgQe7xScfjw33iJAA%2BzxOUUbsQYsGJwhKxXPiWPN3x1Z77mHMrDNqwS0KU9xOE1Bb1UReddJIc%2BI7XIeMFAQmI%2FcIIb9D%2BrBV5MH8f8FOAhNJE9oNVq%2Fx%2B0Bt4g7RSdxhjHeejC96sTicG97Pc8wDprSnY1o%2FBmeWvDpTu0KT%2BKh9zDU2tbOZcve2Q0ssqPh6sgyJLTP7Au890c%2FZmEDxv6RtWjw9E8VhCOPMz9Zv4ucQHlkn%2F042kKkHJMZWzqOMORCcSWvR3qKk5RX3f%2FIQ%2FC8pNS1pAiNq45S9F2Wv4FcVxFloeNFGNCskayEotpQg%2BXlF2asHVSQ65hojioE5orVxPUY9mWRFC77MBuOVhhunrwXftqhwdvuiJaCHG%2FXxhKVgqJ5lQiSrbDZB3sWOMHkuy1MKvCstKE2U%2BoJfdzOyClUS2Gb9E0gjyYio%2BwNLV8sxElalXDOgrSs8U6jGVp5YU4WH7Y0%2BjHEwVJKbJOZ2yDQAIWPRtUl8oPou5IXEaFKlSnDyiBL1sgA7lvMJaf%2Fr0GOqUBT%2FXcNRxZvyOcNTji6JqUF8zcG2S5NBtDY2IU5lrHUwWTMq96oTC%2FIY5PS4coH2JMQSqMucXd%2FQqQY5c9UoosqYSttQtgCAp8QUjxFZhlzdssnvRpfrUUNQzsfpmFI6W6cx5vfjTnXWdcwKHtpqENFxpuGQ9FjjxOpe1Jv1Kov%2FwU4jCYpXf3GykwHc5x3aZ1KhFbyeUEcBPEGk%2B0J4Spi3lScSaR&X-Amz-Signature=15fab18f43776f529f2d3520e344ac220d2737b15daff9c8fc4628f0a75c98af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6WZZ7B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD6etto7wmrYyOylm0EJMguhvqG%2FKgNgyBrkHcy7j5AWAIgMxWCGFM8mkquWXnCLvnTTmtFMxePmSNYed33XJu1hsgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGF8c7MVWnnhWsxLVyrcA%2B2krc9B7Gc5gM7sVeqID%2F%2FSsFzhItM7ARxVrrhVFd9kPU4PVCniAZuaKe46T6f9HtoEGXNZE2pzmylhjdwEc1oGn7%2BhfBX7%2Bl%2B382zkRvgQe7xScfjw33iJAA%2BzxOUUbsQYsGJwhKxXPiWPN3x1Z77mHMrDNqwS0KU9xOE1Bb1UReddJIc%2BI7XIeMFAQmI%2FcIIb9D%2BrBV5MH8f8FOAhNJE9oNVq%2Fx%2B0Bt4g7RSdxhjHeejC96sTicG97Pc8wDprSnY1o%2FBmeWvDpTu0KT%2BKh9zDU2tbOZcve2Q0ssqPh6sgyJLTP7Au890c%2FZmEDxv6RtWjw9E8VhCOPMz9Zv4ucQHlkn%2F042kKkHJMZWzqOMORCcSWvR3qKk5RX3f%2FIQ%2FC8pNS1pAiNq45S9F2Wv4FcVxFloeNFGNCskayEotpQg%2BXlF2asHVSQ65hojioE5orVxPUY9mWRFC77MBuOVhhunrwXftqhwdvuiJaCHG%2FXxhKVgqJ5lQiSrbDZB3sWOMHkuy1MKvCstKE2U%2BoJfdzOyClUS2Gb9E0gjyYio%2BwNLV8sxElalXDOgrSs8U6jGVp5YU4WH7Y0%2BjHEwVJKbJOZ2yDQAIWPRtUl8oPou5IXEaFKlSnDyiBL1sgA7lvMJaf%2Fr0GOqUBT%2FXcNRxZvyOcNTji6JqUF8zcG2S5NBtDY2IU5lrHUwWTMq96oTC%2FIY5PS4coH2JMQSqMucXd%2FQqQY5c9UoosqYSttQtgCAp8QUjxFZhlzdssnvRpfrUUNQzsfpmFI6W6cx5vfjTnXWdcwKHtpqENFxpuGQ9FjjxOpe1Jv1Kov%2FwU4jCYpXf3GykwHc5x3aZ1KhFbyeUEcBPEGk%2B0J4Spi3lScSaR&X-Amz-Signature=9a95128342d5da3a12324e272040b3441ab16cf3607ad7d5e719888a87f4c2c2&X-Amz-SignedHeaders=host&x-id=GetObject)
