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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QSRB3Q%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXk00fx6bZtUvDunAXbU5IAv9%2F92h3gJUsnSQUfTjE4QIhAKW2FoT9DUAt6CQMKd3BWI89B85BqfL7Kllhpa%2FnYHUaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwINA8uS%2FmtOxp%2FPwq3AP6SKOTWBRDc53FcD4Wg%2FdEXuQk5C2q5kBl4nicGD30WgWKYN2j7tNwLi%2F9D6qHGZZekJ2uyC9RP4M9e7Q2MFWB3eUdbA%2FWLk2TN%2ByB7mHWKSvMRx13wPxxArHhep4VtLA%2B5VkKTPCI5VTRL5Y%2F6zRmpJoQypmQyRwDbTbYptcJAhXIOeGGth5Y7g%2Bv2FK5MpPlUhSkTwTxG0X8AJhrQZIeGxAnK5PCfXGZPG%2FzPUraDdmVQNHyJoKzkTqr3AaB8riqoH8fD%2Fj7d5ZVsPcT%2F%2FchmnLsZhEYafQWATyxOVYoUw6BrLFrnq4T3RRUT3B9cmSJcZCYbE8CWdKjpdwYbmIvGLocKFY8R%2Bbo8hyA5c42aXu9QmDHZtskH7zxNVa45EmBgvJd7Hroe2WvPz56bFbiZxbRLiyCu%2F8ZSnLSHwChMfeGnVOJ1kZWOy8R5a8Qwp785qSTQYSZOwyUv9aLY0JhnHxjQFV%2BQZJCFfvrhNJrz4BrdLlMixSOj1NWL%2BXOtM0TL4U%2FldoIeIWR3t6igyjshVdPNMQzqjC%2Bx%2BlkRUPUADlb19Rctj8TBWVI41wYHZSOkS5%2F5%2F%2BPIruFXRblNH0rK8yoZ8w%2BFEW6aiM1Pg2ocYKwu6FIRHTsUSm4hzDJsuHBBjqkAX6E1caDzFfqMQbtNgCmIdMz9Zpq2mg88f7QmAdIJlHHoZpn%2FWt4VSNLe9afqgc1pUq3cT%2Bs4v7VCvldkwuz9Re5rBqK2qgXkVXofN%2F8VoG%2Fb51MSLNU4GgbNRIsMQ4kKWpi9h8u%2FfHjAMZIrclKQGCPvFzpbGGIq3lIuxjtgZ9%2Befga1X8VBoq0KHe%2B0I8mKCSrosblFtriC75B%2FyRYMuzFhgp2&X-Amz-Signature=95233cf09a8df3e8ddd668f5f00d69822c85208ec8addf0953177fcbee3099d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QSRB3Q%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXk00fx6bZtUvDunAXbU5IAv9%2F92h3gJUsnSQUfTjE4QIhAKW2FoT9DUAt6CQMKd3BWI89B85BqfL7Kllhpa%2FnYHUaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwINA8uS%2FmtOxp%2FPwq3AP6SKOTWBRDc53FcD4Wg%2FdEXuQk5C2q5kBl4nicGD30WgWKYN2j7tNwLi%2F9D6qHGZZekJ2uyC9RP4M9e7Q2MFWB3eUdbA%2FWLk2TN%2ByB7mHWKSvMRx13wPxxArHhep4VtLA%2B5VkKTPCI5VTRL5Y%2F6zRmpJoQypmQyRwDbTbYptcJAhXIOeGGth5Y7g%2Bv2FK5MpPlUhSkTwTxG0X8AJhrQZIeGxAnK5PCfXGZPG%2FzPUraDdmVQNHyJoKzkTqr3AaB8riqoH8fD%2Fj7d5ZVsPcT%2F%2FchmnLsZhEYafQWATyxOVYoUw6BrLFrnq4T3RRUT3B9cmSJcZCYbE8CWdKjpdwYbmIvGLocKFY8R%2Bbo8hyA5c42aXu9QmDHZtskH7zxNVa45EmBgvJd7Hroe2WvPz56bFbiZxbRLiyCu%2F8ZSnLSHwChMfeGnVOJ1kZWOy8R5a8Qwp785qSTQYSZOwyUv9aLY0JhnHxjQFV%2BQZJCFfvrhNJrz4BrdLlMixSOj1NWL%2BXOtM0TL4U%2FldoIeIWR3t6igyjshVdPNMQzqjC%2Bx%2BlkRUPUADlb19Rctj8TBWVI41wYHZSOkS5%2F5%2F%2BPIruFXRblNH0rK8yoZ8w%2BFEW6aiM1Pg2ocYKwu6FIRHTsUSm4hzDJsuHBBjqkAX6E1caDzFfqMQbtNgCmIdMz9Zpq2mg88f7QmAdIJlHHoZpn%2FWt4VSNLe9afqgc1pUq3cT%2Bs4v7VCvldkwuz9Re5rBqK2qgXkVXofN%2F8VoG%2Fb51MSLNU4GgbNRIsMQ4kKWpi9h8u%2FfHjAMZIrclKQGCPvFzpbGGIq3lIuxjtgZ9%2Befga1X8VBoq0KHe%2B0I8mKCSrosblFtriC75B%2FyRYMuzFhgp2&X-Amz-Signature=17a543eac0520ce05ec18854b04c3c58245c0c55589de9c6049bb36b4dab68b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QSRB3Q%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXk00fx6bZtUvDunAXbU5IAv9%2F92h3gJUsnSQUfTjE4QIhAKW2FoT9DUAt6CQMKd3BWI89B85BqfL7Kllhpa%2FnYHUaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwINA8uS%2FmtOxp%2FPwq3AP6SKOTWBRDc53FcD4Wg%2FdEXuQk5C2q5kBl4nicGD30WgWKYN2j7tNwLi%2F9D6qHGZZekJ2uyC9RP4M9e7Q2MFWB3eUdbA%2FWLk2TN%2ByB7mHWKSvMRx13wPxxArHhep4VtLA%2B5VkKTPCI5VTRL5Y%2F6zRmpJoQypmQyRwDbTbYptcJAhXIOeGGth5Y7g%2Bv2FK5MpPlUhSkTwTxG0X8AJhrQZIeGxAnK5PCfXGZPG%2FzPUraDdmVQNHyJoKzkTqr3AaB8riqoH8fD%2Fj7d5ZVsPcT%2F%2FchmnLsZhEYafQWATyxOVYoUw6BrLFrnq4T3RRUT3B9cmSJcZCYbE8CWdKjpdwYbmIvGLocKFY8R%2Bbo8hyA5c42aXu9QmDHZtskH7zxNVa45EmBgvJd7Hroe2WvPz56bFbiZxbRLiyCu%2F8ZSnLSHwChMfeGnVOJ1kZWOy8R5a8Qwp785qSTQYSZOwyUv9aLY0JhnHxjQFV%2BQZJCFfvrhNJrz4BrdLlMixSOj1NWL%2BXOtM0TL4U%2FldoIeIWR3t6igyjshVdPNMQzqjC%2Bx%2BlkRUPUADlb19Rctj8TBWVI41wYHZSOkS5%2F5%2F%2BPIruFXRblNH0rK8yoZ8w%2BFEW6aiM1Pg2ocYKwu6FIRHTsUSm4hzDJsuHBBjqkAX6E1caDzFfqMQbtNgCmIdMz9Zpq2mg88f7QmAdIJlHHoZpn%2FWt4VSNLe9afqgc1pUq3cT%2Bs4v7VCvldkwuz9Re5rBqK2qgXkVXofN%2F8VoG%2Fb51MSLNU4GgbNRIsMQ4kKWpi9h8u%2FfHjAMZIrclKQGCPvFzpbGGIq3lIuxjtgZ9%2Befga1X8VBoq0KHe%2B0I8mKCSrosblFtriC75B%2FyRYMuzFhgp2&X-Amz-Signature=d343892db8a6962f79227ec0e2e4ec4b10259fbb0cb3c5129fcb0c2296e86217&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QSRB3Q%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXk00fx6bZtUvDunAXbU5IAv9%2F92h3gJUsnSQUfTjE4QIhAKW2FoT9DUAt6CQMKd3BWI89B85BqfL7Kllhpa%2FnYHUaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwINA8uS%2FmtOxp%2FPwq3AP6SKOTWBRDc53FcD4Wg%2FdEXuQk5C2q5kBl4nicGD30WgWKYN2j7tNwLi%2F9D6qHGZZekJ2uyC9RP4M9e7Q2MFWB3eUdbA%2FWLk2TN%2ByB7mHWKSvMRx13wPxxArHhep4VtLA%2B5VkKTPCI5VTRL5Y%2F6zRmpJoQypmQyRwDbTbYptcJAhXIOeGGth5Y7g%2Bv2FK5MpPlUhSkTwTxG0X8AJhrQZIeGxAnK5PCfXGZPG%2FzPUraDdmVQNHyJoKzkTqr3AaB8riqoH8fD%2Fj7d5ZVsPcT%2F%2FchmnLsZhEYafQWATyxOVYoUw6BrLFrnq4T3RRUT3B9cmSJcZCYbE8CWdKjpdwYbmIvGLocKFY8R%2Bbo8hyA5c42aXu9QmDHZtskH7zxNVa45EmBgvJd7Hroe2WvPz56bFbiZxbRLiyCu%2F8ZSnLSHwChMfeGnVOJ1kZWOy8R5a8Qwp785qSTQYSZOwyUv9aLY0JhnHxjQFV%2BQZJCFfvrhNJrz4BrdLlMixSOj1NWL%2BXOtM0TL4U%2FldoIeIWR3t6igyjshVdPNMQzqjC%2Bx%2BlkRUPUADlb19Rctj8TBWVI41wYHZSOkS5%2F5%2F%2BPIruFXRblNH0rK8yoZ8w%2BFEW6aiM1Pg2ocYKwu6FIRHTsUSm4hzDJsuHBBjqkAX6E1caDzFfqMQbtNgCmIdMz9Zpq2mg88f7QmAdIJlHHoZpn%2FWt4VSNLe9afqgc1pUq3cT%2Bs4v7VCvldkwuz9Re5rBqK2qgXkVXofN%2F8VoG%2Fb51MSLNU4GgbNRIsMQ4kKWpi9h8u%2FfHjAMZIrclKQGCPvFzpbGGIq3lIuxjtgZ9%2Befga1X8VBoq0KHe%2B0I8mKCSrosblFtriC75B%2FyRYMuzFhgp2&X-Amz-Signature=e0fdc146ec611d844b547326cc2a0bc9498b4f28521c89c220141b439017b54e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QSRB3Q%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXk00fx6bZtUvDunAXbU5IAv9%2F92h3gJUsnSQUfTjE4QIhAKW2FoT9DUAt6CQMKd3BWI89B85BqfL7Kllhpa%2FnYHUaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwINA8uS%2FmtOxp%2FPwq3AP6SKOTWBRDc53FcD4Wg%2FdEXuQk5C2q5kBl4nicGD30WgWKYN2j7tNwLi%2F9D6qHGZZekJ2uyC9RP4M9e7Q2MFWB3eUdbA%2FWLk2TN%2ByB7mHWKSvMRx13wPxxArHhep4VtLA%2B5VkKTPCI5VTRL5Y%2F6zRmpJoQypmQyRwDbTbYptcJAhXIOeGGth5Y7g%2Bv2FK5MpPlUhSkTwTxG0X8AJhrQZIeGxAnK5PCfXGZPG%2FzPUraDdmVQNHyJoKzkTqr3AaB8riqoH8fD%2Fj7d5ZVsPcT%2F%2FchmnLsZhEYafQWATyxOVYoUw6BrLFrnq4T3RRUT3B9cmSJcZCYbE8CWdKjpdwYbmIvGLocKFY8R%2Bbo8hyA5c42aXu9QmDHZtskH7zxNVa45EmBgvJd7Hroe2WvPz56bFbiZxbRLiyCu%2F8ZSnLSHwChMfeGnVOJ1kZWOy8R5a8Qwp785qSTQYSZOwyUv9aLY0JhnHxjQFV%2BQZJCFfvrhNJrz4BrdLlMixSOj1NWL%2BXOtM0TL4U%2FldoIeIWR3t6igyjshVdPNMQzqjC%2Bx%2BlkRUPUADlb19Rctj8TBWVI41wYHZSOkS5%2F5%2F%2BPIruFXRblNH0rK8yoZ8w%2BFEW6aiM1Pg2ocYKwu6FIRHTsUSm4hzDJsuHBBjqkAX6E1caDzFfqMQbtNgCmIdMz9Zpq2mg88f7QmAdIJlHHoZpn%2FWt4VSNLe9afqgc1pUq3cT%2Bs4v7VCvldkwuz9Re5rBqK2qgXkVXofN%2F8VoG%2Fb51MSLNU4GgbNRIsMQ4kKWpi9h8u%2FfHjAMZIrclKQGCPvFzpbGGIq3lIuxjtgZ9%2Befga1X8VBoq0KHe%2B0I8mKCSrosblFtriC75B%2FyRYMuzFhgp2&X-Amz-Signature=1470fbc2c0bee0e3ffdf33aefca1f6de27adaacec8da3e586b2d2b5c96176960&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QSRB3Q%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXk00fx6bZtUvDunAXbU5IAv9%2F92h3gJUsnSQUfTjE4QIhAKW2FoT9DUAt6CQMKd3BWI89B85BqfL7Kllhpa%2FnYHUaKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwINA8uS%2FmtOxp%2FPwq3AP6SKOTWBRDc53FcD4Wg%2FdEXuQk5C2q5kBl4nicGD30WgWKYN2j7tNwLi%2F9D6qHGZZekJ2uyC9RP4M9e7Q2MFWB3eUdbA%2FWLk2TN%2ByB7mHWKSvMRx13wPxxArHhep4VtLA%2B5VkKTPCI5VTRL5Y%2F6zRmpJoQypmQyRwDbTbYptcJAhXIOeGGth5Y7g%2Bv2FK5MpPlUhSkTwTxG0X8AJhrQZIeGxAnK5PCfXGZPG%2FzPUraDdmVQNHyJoKzkTqr3AaB8riqoH8fD%2Fj7d5ZVsPcT%2F%2FchmnLsZhEYafQWATyxOVYoUw6BrLFrnq4T3RRUT3B9cmSJcZCYbE8CWdKjpdwYbmIvGLocKFY8R%2Bbo8hyA5c42aXu9QmDHZtskH7zxNVa45EmBgvJd7Hroe2WvPz56bFbiZxbRLiyCu%2F8ZSnLSHwChMfeGnVOJ1kZWOy8R5a8Qwp785qSTQYSZOwyUv9aLY0JhnHxjQFV%2BQZJCFfvrhNJrz4BrdLlMixSOj1NWL%2BXOtM0TL4U%2FldoIeIWR3t6igyjshVdPNMQzqjC%2Bx%2BlkRUPUADlb19Rctj8TBWVI41wYHZSOkS5%2F5%2F%2BPIruFXRblNH0rK8yoZ8w%2BFEW6aiM1Pg2ocYKwu6FIRHTsUSm4hzDJsuHBBjqkAX6E1caDzFfqMQbtNgCmIdMz9Zpq2mg88f7QmAdIJlHHoZpn%2FWt4VSNLe9afqgc1pUq3cT%2Bs4v7VCvldkwuz9Re5rBqK2qgXkVXofN%2F8VoG%2Fb51MSLNU4GgbNRIsMQ4kKWpi9h8u%2FfHjAMZIrclKQGCPvFzpbGGIq3lIuxjtgZ9%2Befga1X8VBoq0KHe%2B0I8mKCSrosblFtriC75B%2FyRYMuzFhgp2&X-Amz-Signature=e8dd6483aca5ce3e6d77828bd279b4e314feaea70c1e55c70aa3f17bd7a85d58&X-Amz-SignedHeaders=host&x-id=GetObject)
