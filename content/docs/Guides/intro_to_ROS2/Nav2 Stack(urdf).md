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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LCAM46%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08qI3ED%2FwBFssuMNGfH77rbAi3mv%2B6dSN2FnBeThp%2FAiAawMm1e4w0QLAjdWj4n60u2UByTHDa%2FfgXwAjCIe43aiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjFpVYEdNtSqOnDpKtwDIFMZrIuFQ6LuW6sUxkLU3TDnE%2BwlxeIallquuVLH%2FZJRzIMMUgk%2FNWPWyL5icU2yJKUDEZbut95ls12wL3yI6mvdfYDTxRp8fh8FuT391Tss50DsqvYWRpC5GMqYY%2BaMcyyyiWKO9naBJEcNChs95ltoDAWCqt7nT%2F2%2BqtlwugTl3pG7CQW73L7xi8c3Fr3jEB5Psk0m9aTE7VnJLV01FWmv7KwxeePQ0755MiPOG1AA2KTlq9KHKv3lGfPE%2FpmIlw53TREbE6vLzOQlbDXrJTh7rx%2BP4yxBvni3S7VFtW9aLWi6H8p6BRUUj1kYq9BzpWhcxDIvCJJiIAkq9tY5yWZO78s2jcsLsg4D%2FIger2j2zpUNYo9t%2Bd9tKynyQ02k6TIyUYrToI4Xq864pOIJSlj9M7SjXgVhLo2vNqe8gkmWspDZrgVhKjpZTTU24fPANsVCE7I%2BTTISP%2FaMNTemz%2BkM4qWD6cFgK8sX3iQO3Te58IlD0nay9YnoSDgzxPTBHImj1agjrm%2BK8vfHSqBSkVb2liehf99ktAnEMfw4yYhomGfrSI9Gr5nRTkRKCG78AMkW%2FuUFegJ0UnHz%2FxysfCKdpC7PRgZvndqW5lxhJ6Q4JMrdO65zxLeMeGowoPr0vAY6pgGbsXpVO3rSUXMJOWUoLn1i1uRVumxZa%2FeyDUcmkWE13uPP69d8qA0lsi4rlWiBVpndk7hYMzQZKhfOAmseezI9h26fvX8pA58GKB7pwQeXcLB1Ku%2FIHzBoCQeocT36eHAou7K9G4qcVu6sFJ%2BkbKer6Ta5k%2BM1ZjGhBsryv9hL4LotWsfAYWnmAQHjrhBdHqEv5bJR8ktSu%2FyYPRD7oOwGKBGKTRRk&X-Amz-Signature=b4f8244adbf36aac232591692e5c98962812a5829b4481fd174f97b6204050a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LCAM46%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08qI3ED%2FwBFssuMNGfH77rbAi3mv%2B6dSN2FnBeThp%2FAiAawMm1e4w0QLAjdWj4n60u2UByTHDa%2FfgXwAjCIe43aiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjFpVYEdNtSqOnDpKtwDIFMZrIuFQ6LuW6sUxkLU3TDnE%2BwlxeIallquuVLH%2FZJRzIMMUgk%2FNWPWyL5icU2yJKUDEZbut95ls12wL3yI6mvdfYDTxRp8fh8FuT391Tss50DsqvYWRpC5GMqYY%2BaMcyyyiWKO9naBJEcNChs95ltoDAWCqt7nT%2F2%2BqtlwugTl3pG7CQW73L7xi8c3Fr3jEB5Psk0m9aTE7VnJLV01FWmv7KwxeePQ0755MiPOG1AA2KTlq9KHKv3lGfPE%2FpmIlw53TREbE6vLzOQlbDXrJTh7rx%2BP4yxBvni3S7VFtW9aLWi6H8p6BRUUj1kYq9BzpWhcxDIvCJJiIAkq9tY5yWZO78s2jcsLsg4D%2FIger2j2zpUNYo9t%2Bd9tKynyQ02k6TIyUYrToI4Xq864pOIJSlj9M7SjXgVhLo2vNqe8gkmWspDZrgVhKjpZTTU24fPANsVCE7I%2BTTISP%2FaMNTemz%2BkM4qWD6cFgK8sX3iQO3Te58IlD0nay9YnoSDgzxPTBHImj1agjrm%2BK8vfHSqBSkVb2liehf99ktAnEMfw4yYhomGfrSI9Gr5nRTkRKCG78AMkW%2FuUFegJ0UnHz%2FxysfCKdpC7PRgZvndqW5lxhJ6Q4JMrdO65zxLeMeGowoPr0vAY6pgGbsXpVO3rSUXMJOWUoLn1i1uRVumxZa%2FeyDUcmkWE13uPP69d8qA0lsi4rlWiBVpndk7hYMzQZKhfOAmseezI9h26fvX8pA58GKB7pwQeXcLB1Ku%2FIHzBoCQeocT36eHAou7K9G4qcVu6sFJ%2BkbKer6Ta5k%2BM1ZjGhBsryv9hL4LotWsfAYWnmAQHjrhBdHqEv5bJR8ktSu%2FyYPRD7oOwGKBGKTRRk&X-Amz-Signature=6f2093f38a46fdf32686b428e1fa49fd2b2e54de8663aae3e9f266d0fd01650b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LCAM46%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08qI3ED%2FwBFssuMNGfH77rbAi3mv%2B6dSN2FnBeThp%2FAiAawMm1e4w0QLAjdWj4n60u2UByTHDa%2FfgXwAjCIe43aiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjFpVYEdNtSqOnDpKtwDIFMZrIuFQ6LuW6sUxkLU3TDnE%2BwlxeIallquuVLH%2FZJRzIMMUgk%2FNWPWyL5icU2yJKUDEZbut95ls12wL3yI6mvdfYDTxRp8fh8FuT391Tss50DsqvYWRpC5GMqYY%2BaMcyyyiWKO9naBJEcNChs95ltoDAWCqt7nT%2F2%2BqtlwugTl3pG7CQW73L7xi8c3Fr3jEB5Psk0m9aTE7VnJLV01FWmv7KwxeePQ0755MiPOG1AA2KTlq9KHKv3lGfPE%2FpmIlw53TREbE6vLzOQlbDXrJTh7rx%2BP4yxBvni3S7VFtW9aLWi6H8p6BRUUj1kYq9BzpWhcxDIvCJJiIAkq9tY5yWZO78s2jcsLsg4D%2FIger2j2zpUNYo9t%2Bd9tKynyQ02k6TIyUYrToI4Xq864pOIJSlj9M7SjXgVhLo2vNqe8gkmWspDZrgVhKjpZTTU24fPANsVCE7I%2BTTISP%2FaMNTemz%2BkM4qWD6cFgK8sX3iQO3Te58IlD0nay9YnoSDgzxPTBHImj1agjrm%2BK8vfHSqBSkVb2liehf99ktAnEMfw4yYhomGfrSI9Gr5nRTkRKCG78AMkW%2FuUFegJ0UnHz%2FxysfCKdpC7PRgZvndqW5lxhJ6Q4JMrdO65zxLeMeGowoPr0vAY6pgGbsXpVO3rSUXMJOWUoLn1i1uRVumxZa%2FeyDUcmkWE13uPP69d8qA0lsi4rlWiBVpndk7hYMzQZKhfOAmseezI9h26fvX8pA58GKB7pwQeXcLB1Ku%2FIHzBoCQeocT36eHAou7K9G4qcVu6sFJ%2BkbKer6Ta5k%2BM1ZjGhBsryv9hL4LotWsfAYWnmAQHjrhBdHqEv5bJR8ktSu%2FyYPRD7oOwGKBGKTRRk&X-Amz-Signature=52b34ab021545d10120ba9af0d1cec0d270d88b979eb2e640a45fdbff1d8d3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LCAM46%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08qI3ED%2FwBFssuMNGfH77rbAi3mv%2B6dSN2FnBeThp%2FAiAawMm1e4w0QLAjdWj4n60u2UByTHDa%2FfgXwAjCIe43aiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjFpVYEdNtSqOnDpKtwDIFMZrIuFQ6LuW6sUxkLU3TDnE%2BwlxeIallquuVLH%2FZJRzIMMUgk%2FNWPWyL5icU2yJKUDEZbut95ls12wL3yI6mvdfYDTxRp8fh8FuT391Tss50DsqvYWRpC5GMqYY%2BaMcyyyiWKO9naBJEcNChs95ltoDAWCqt7nT%2F2%2BqtlwugTl3pG7CQW73L7xi8c3Fr3jEB5Psk0m9aTE7VnJLV01FWmv7KwxeePQ0755MiPOG1AA2KTlq9KHKv3lGfPE%2FpmIlw53TREbE6vLzOQlbDXrJTh7rx%2BP4yxBvni3S7VFtW9aLWi6H8p6BRUUj1kYq9BzpWhcxDIvCJJiIAkq9tY5yWZO78s2jcsLsg4D%2FIger2j2zpUNYo9t%2Bd9tKynyQ02k6TIyUYrToI4Xq864pOIJSlj9M7SjXgVhLo2vNqe8gkmWspDZrgVhKjpZTTU24fPANsVCE7I%2BTTISP%2FaMNTemz%2BkM4qWD6cFgK8sX3iQO3Te58IlD0nay9YnoSDgzxPTBHImj1agjrm%2BK8vfHSqBSkVb2liehf99ktAnEMfw4yYhomGfrSI9Gr5nRTkRKCG78AMkW%2FuUFegJ0UnHz%2FxysfCKdpC7PRgZvndqW5lxhJ6Q4JMrdO65zxLeMeGowoPr0vAY6pgGbsXpVO3rSUXMJOWUoLn1i1uRVumxZa%2FeyDUcmkWE13uPP69d8qA0lsi4rlWiBVpndk7hYMzQZKhfOAmseezI9h26fvX8pA58GKB7pwQeXcLB1Ku%2FIHzBoCQeocT36eHAou7K9G4qcVu6sFJ%2BkbKer6Ta5k%2BM1ZjGhBsryv9hL4LotWsfAYWnmAQHjrhBdHqEv5bJR8ktSu%2FyYPRD7oOwGKBGKTRRk&X-Amz-Signature=053d7e88dcf57053843486a659537106c93a0aeb15a6754231e4a0ba3f322018&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LCAM46%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08qI3ED%2FwBFssuMNGfH77rbAi3mv%2B6dSN2FnBeThp%2FAiAawMm1e4w0QLAjdWj4n60u2UByTHDa%2FfgXwAjCIe43aiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjFpVYEdNtSqOnDpKtwDIFMZrIuFQ6LuW6sUxkLU3TDnE%2BwlxeIallquuVLH%2FZJRzIMMUgk%2FNWPWyL5icU2yJKUDEZbut95ls12wL3yI6mvdfYDTxRp8fh8FuT391Tss50DsqvYWRpC5GMqYY%2BaMcyyyiWKO9naBJEcNChs95ltoDAWCqt7nT%2F2%2BqtlwugTl3pG7CQW73L7xi8c3Fr3jEB5Psk0m9aTE7VnJLV01FWmv7KwxeePQ0755MiPOG1AA2KTlq9KHKv3lGfPE%2FpmIlw53TREbE6vLzOQlbDXrJTh7rx%2BP4yxBvni3S7VFtW9aLWi6H8p6BRUUj1kYq9BzpWhcxDIvCJJiIAkq9tY5yWZO78s2jcsLsg4D%2FIger2j2zpUNYo9t%2Bd9tKynyQ02k6TIyUYrToI4Xq864pOIJSlj9M7SjXgVhLo2vNqe8gkmWspDZrgVhKjpZTTU24fPANsVCE7I%2BTTISP%2FaMNTemz%2BkM4qWD6cFgK8sX3iQO3Te58IlD0nay9YnoSDgzxPTBHImj1agjrm%2BK8vfHSqBSkVb2liehf99ktAnEMfw4yYhomGfrSI9Gr5nRTkRKCG78AMkW%2FuUFegJ0UnHz%2FxysfCKdpC7PRgZvndqW5lxhJ6Q4JMrdO65zxLeMeGowoPr0vAY6pgGbsXpVO3rSUXMJOWUoLn1i1uRVumxZa%2FeyDUcmkWE13uPP69d8qA0lsi4rlWiBVpndk7hYMzQZKhfOAmseezI9h26fvX8pA58GKB7pwQeXcLB1Ku%2FIHzBoCQeocT36eHAou7K9G4qcVu6sFJ%2BkbKer6Ta5k%2BM1ZjGhBsryv9hL4LotWsfAYWnmAQHjrhBdHqEv5bJR8ktSu%2FyYPRD7oOwGKBGKTRRk&X-Amz-Signature=6e788667eb4cc54d29ff55f566cee7eb6d2a60feb3b4001d863e6ffa6df116a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LCAM46%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08qI3ED%2FwBFssuMNGfH77rbAi3mv%2B6dSN2FnBeThp%2FAiAawMm1e4w0QLAjdWj4n60u2UByTHDa%2FfgXwAjCIe43aiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvjFpVYEdNtSqOnDpKtwDIFMZrIuFQ6LuW6sUxkLU3TDnE%2BwlxeIallquuVLH%2FZJRzIMMUgk%2FNWPWyL5icU2yJKUDEZbut95ls12wL3yI6mvdfYDTxRp8fh8FuT391Tss50DsqvYWRpC5GMqYY%2BaMcyyyiWKO9naBJEcNChs95ltoDAWCqt7nT%2F2%2BqtlwugTl3pG7CQW73L7xi8c3Fr3jEB5Psk0m9aTE7VnJLV01FWmv7KwxeePQ0755MiPOG1AA2KTlq9KHKv3lGfPE%2FpmIlw53TREbE6vLzOQlbDXrJTh7rx%2BP4yxBvni3S7VFtW9aLWi6H8p6BRUUj1kYq9BzpWhcxDIvCJJiIAkq9tY5yWZO78s2jcsLsg4D%2FIger2j2zpUNYo9t%2Bd9tKynyQ02k6TIyUYrToI4Xq864pOIJSlj9M7SjXgVhLo2vNqe8gkmWspDZrgVhKjpZTTU24fPANsVCE7I%2BTTISP%2FaMNTemz%2BkM4qWD6cFgK8sX3iQO3Te58IlD0nay9YnoSDgzxPTBHImj1agjrm%2BK8vfHSqBSkVb2liehf99ktAnEMfw4yYhomGfrSI9Gr5nRTkRKCG78AMkW%2FuUFegJ0UnHz%2FxysfCKdpC7PRgZvndqW5lxhJ6Q4JMrdO65zxLeMeGowoPr0vAY6pgGbsXpVO3rSUXMJOWUoLn1i1uRVumxZa%2FeyDUcmkWE13uPP69d8qA0lsi4rlWiBVpndk7hYMzQZKhfOAmseezI9h26fvX8pA58GKB7pwQeXcLB1Ku%2FIHzBoCQeocT36eHAou7K9G4qcVu6sFJ%2BkbKer6Ta5k%2BM1ZjGhBsryv9hL4LotWsfAYWnmAQHjrhBdHqEv5bJR8ktSu%2FyYPRD7oOwGKBGKTRRk&X-Amz-Signature=0e1032ab65d26f3194c03ad9bdd109446262c74b6b571ba4b133fe00ccd4fee4&X-Amz-SignedHeaders=host&x-id=GetObject)
