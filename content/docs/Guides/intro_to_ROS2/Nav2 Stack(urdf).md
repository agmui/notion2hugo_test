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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323TLGSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbfmNWHB8RXKPwYpoY0BHX%2Ff50Wta8sMr2R3tMW5%2FBZAiEA2a9onMH2MTwAArWHoJ%2FKmWCMljFhXzUsD38x4%2FKDEG8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIKx6gDNXxuboGFHSyrcA%2B5RKsb6CIF5g5h4iV37CCvzmsHcL99rXKJrk%2Bil3iJpUPAB9q9kflnneBsDSCaVhzd%2BenI6qyN3zLmTgU7bGbsSt7CpAytn8MJ54Ous8igjDNstJnZBFrKv%2BWm4Qd1%2FYMM68RWc9P5rXsBeLHSeAhd%2BD4fyj4udq6jjHDi6fYrpPI5LLiQXqRqd5NOw%2FScthmK0dJIllx3pRVH8bwGND33UvG3YoD9keuBJUqrGyBqdCuhXOdWANg11PGPYbtXLau3WiKAxa%2BXyRT7NPkXyWAvUS1aA18rWM%2BJ6g5OPZXUh3rFhxGgqbWjpfgmwXVdBQpyY66KVRKkY3YMs5nW0BHCxw7cmyiD22wQI%2FgJOns0vzJTwNxWXI%2F8bg8aw7vqvSV91Yti%2BgKU%2FZ42QADPGyVxYxhjg9lNgqNV%2BYT53eHh6SyGQnx4qVTNobWSxf8G3mNDOpE90e9VeX0a3M12kFaDK9jjORg%2Fj7VGEDc9PyifwgmIDFWSICZkxU5PSzVKFk0qPU8bvXjOm8tXKSmcu6MRkinca8REcawefk44Kx2C%2FWZOfvQehyKMytGGVtSv4w%2BtLAhZO5zmSrieT1q6ACJ2Zb3%2BKK3rtUYaqTCgPesJwP0YGQTPJhB8lfXIwMILGgcAGOqUBmLxK%2FaL88UDPmHOBPorh7kQeFwINmlB2WhLqbrdHFWTHXUcrMyc02f%2FJ%2BCtSv%2F2S6QP0vCceUxRCn%2B%2FqWXC3hXiK97ra7rA9UNWA0LtdlkT66nKg2%2BWrh2kVLy1MuL4HLRzcGLgIpN5W7YFZEmuvvKFDwGiKFDJ2CtzEf%2FFlqe83h4y9RygD51RXQrwIPG6f66ksX5ENej0j0t1KbLgwtAKdkSpe&X-Amz-Signature=1aac5073cb25bd04588e4614482ef4bd2dc5e1af2f1eb733e2f3b0de7357878b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323TLGSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbfmNWHB8RXKPwYpoY0BHX%2Ff50Wta8sMr2R3tMW5%2FBZAiEA2a9onMH2MTwAArWHoJ%2FKmWCMljFhXzUsD38x4%2FKDEG8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIKx6gDNXxuboGFHSyrcA%2B5RKsb6CIF5g5h4iV37CCvzmsHcL99rXKJrk%2Bil3iJpUPAB9q9kflnneBsDSCaVhzd%2BenI6qyN3zLmTgU7bGbsSt7CpAytn8MJ54Ous8igjDNstJnZBFrKv%2BWm4Qd1%2FYMM68RWc9P5rXsBeLHSeAhd%2BD4fyj4udq6jjHDi6fYrpPI5LLiQXqRqd5NOw%2FScthmK0dJIllx3pRVH8bwGND33UvG3YoD9keuBJUqrGyBqdCuhXOdWANg11PGPYbtXLau3WiKAxa%2BXyRT7NPkXyWAvUS1aA18rWM%2BJ6g5OPZXUh3rFhxGgqbWjpfgmwXVdBQpyY66KVRKkY3YMs5nW0BHCxw7cmyiD22wQI%2FgJOns0vzJTwNxWXI%2F8bg8aw7vqvSV91Yti%2BgKU%2FZ42QADPGyVxYxhjg9lNgqNV%2BYT53eHh6SyGQnx4qVTNobWSxf8G3mNDOpE90e9VeX0a3M12kFaDK9jjORg%2Fj7VGEDc9PyifwgmIDFWSICZkxU5PSzVKFk0qPU8bvXjOm8tXKSmcu6MRkinca8REcawefk44Kx2C%2FWZOfvQehyKMytGGVtSv4w%2BtLAhZO5zmSrieT1q6ACJ2Zb3%2BKK3rtUYaqTCgPesJwP0YGQTPJhB8lfXIwMILGgcAGOqUBmLxK%2FaL88UDPmHOBPorh7kQeFwINmlB2WhLqbrdHFWTHXUcrMyc02f%2FJ%2BCtSv%2F2S6QP0vCceUxRCn%2B%2FqWXC3hXiK97ra7rA9UNWA0LtdlkT66nKg2%2BWrh2kVLy1MuL4HLRzcGLgIpN5W7YFZEmuvvKFDwGiKFDJ2CtzEf%2FFlqe83h4y9RygD51RXQrwIPG6f66ksX5ENej0j0t1KbLgwtAKdkSpe&X-Amz-Signature=e00b09b3425040d5605b78dc388072dd3d006afba4fd04ba639a9d48dbcba539&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323TLGSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbfmNWHB8RXKPwYpoY0BHX%2Ff50Wta8sMr2R3tMW5%2FBZAiEA2a9onMH2MTwAArWHoJ%2FKmWCMljFhXzUsD38x4%2FKDEG8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIKx6gDNXxuboGFHSyrcA%2B5RKsb6CIF5g5h4iV37CCvzmsHcL99rXKJrk%2Bil3iJpUPAB9q9kflnneBsDSCaVhzd%2BenI6qyN3zLmTgU7bGbsSt7CpAytn8MJ54Ous8igjDNstJnZBFrKv%2BWm4Qd1%2FYMM68RWc9P5rXsBeLHSeAhd%2BD4fyj4udq6jjHDi6fYrpPI5LLiQXqRqd5NOw%2FScthmK0dJIllx3pRVH8bwGND33UvG3YoD9keuBJUqrGyBqdCuhXOdWANg11PGPYbtXLau3WiKAxa%2BXyRT7NPkXyWAvUS1aA18rWM%2BJ6g5OPZXUh3rFhxGgqbWjpfgmwXVdBQpyY66KVRKkY3YMs5nW0BHCxw7cmyiD22wQI%2FgJOns0vzJTwNxWXI%2F8bg8aw7vqvSV91Yti%2BgKU%2FZ42QADPGyVxYxhjg9lNgqNV%2BYT53eHh6SyGQnx4qVTNobWSxf8G3mNDOpE90e9VeX0a3M12kFaDK9jjORg%2Fj7VGEDc9PyifwgmIDFWSICZkxU5PSzVKFk0qPU8bvXjOm8tXKSmcu6MRkinca8REcawefk44Kx2C%2FWZOfvQehyKMytGGVtSv4w%2BtLAhZO5zmSrieT1q6ACJ2Zb3%2BKK3rtUYaqTCgPesJwP0YGQTPJhB8lfXIwMILGgcAGOqUBmLxK%2FaL88UDPmHOBPorh7kQeFwINmlB2WhLqbrdHFWTHXUcrMyc02f%2FJ%2BCtSv%2F2S6QP0vCceUxRCn%2B%2FqWXC3hXiK97ra7rA9UNWA0LtdlkT66nKg2%2BWrh2kVLy1MuL4HLRzcGLgIpN5W7YFZEmuvvKFDwGiKFDJ2CtzEf%2FFlqe83h4y9RygD51RXQrwIPG6f66ksX5ENej0j0t1KbLgwtAKdkSpe&X-Amz-Signature=8b32940dde88e07b08b58f97673167fcd36d99dd678919c7e08802aa8c61c89b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323TLGSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbfmNWHB8RXKPwYpoY0BHX%2Ff50Wta8sMr2R3tMW5%2FBZAiEA2a9onMH2MTwAArWHoJ%2FKmWCMljFhXzUsD38x4%2FKDEG8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIKx6gDNXxuboGFHSyrcA%2B5RKsb6CIF5g5h4iV37CCvzmsHcL99rXKJrk%2Bil3iJpUPAB9q9kflnneBsDSCaVhzd%2BenI6qyN3zLmTgU7bGbsSt7CpAytn8MJ54Ous8igjDNstJnZBFrKv%2BWm4Qd1%2FYMM68RWc9P5rXsBeLHSeAhd%2BD4fyj4udq6jjHDi6fYrpPI5LLiQXqRqd5NOw%2FScthmK0dJIllx3pRVH8bwGND33UvG3YoD9keuBJUqrGyBqdCuhXOdWANg11PGPYbtXLau3WiKAxa%2BXyRT7NPkXyWAvUS1aA18rWM%2BJ6g5OPZXUh3rFhxGgqbWjpfgmwXVdBQpyY66KVRKkY3YMs5nW0BHCxw7cmyiD22wQI%2FgJOns0vzJTwNxWXI%2F8bg8aw7vqvSV91Yti%2BgKU%2FZ42QADPGyVxYxhjg9lNgqNV%2BYT53eHh6SyGQnx4qVTNobWSxf8G3mNDOpE90e9VeX0a3M12kFaDK9jjORg%2Fj7VGEDc9PyifwgmIDFWSICZkxU5PSzVKFk0qPU8bvXjOm8tXKSmcu6MRkinca8REcawefk44Kx2C%2FWZOfvQehyKMytGGVtSv4w%2BtLAhZO5zmSrieT1q6ACJ2Zb3%2BKK3rtUYaqTCgPesJwP0YGQTPJhB8lfXIwMILGgcAGOqUBmLxK%2FaL88UDPmHOBPorh7kQeFwINmlB2WhLqbrdHFWTHXUcrMyc02f%2FJ%2BCtSv%2F2S6QP0vCceUxRCn%2B%2FqWXC3hXiK97ra7rA9UNWA0LtdlkT66nKg2%2BWrh2kVLy1MuL4HLRzcGLgIpN5W7YFZEmuvvKFDwGiKFDJ2CtzEf%2FFlqe83h4y9RygD51RXQrwIPG6f66ksX5ENej0j0t1KbLgwtAKdkSpe&X-Amz-Signature=ec2b74050124a1f136b585cf957344c17de8832cab8fc077b85d7b54d1845127&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323TLGSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbfmNWHB8RXKPwYpoY0BHX%2Ff50Wta8sMr2R3tMW5%2FBZAiEA2a9onMH2MTwAArWHoJ%2FKmWCMljFhXzUsD38x4%2FKDEG8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIKx6gDNXxuboGFHSyrcA%2B5RKsb6CIF5g5h4iV37CCvzmsHcL99rXKJrk%2Bil3iJpUPAB9q9kflnneBsDSCaVhzd%2BenI6qyN3zLmTgU7bGbsSt7CpAytn8MJ54Ous8igjDNstJnZBFrKv%2BWm4Qd1%2FYMM68RWc9P5rXsBeLHSeAhd%2BD4fyj4udq6jjHDi6fYrpPI5LLiQXqRqd5NOw%2FScthmK0dJIllx3pRVH8bwGND33UvG3YoD9keuBJUqrGyBqdCuhXOdWANg11PGPYbtXLau3WiKAxa%2BXyRT7NPkXyWAvUS1aA18rWM%2BJ6g5OPZXUh3rFhxGgqbWjpfgmwXVdBQpyY66KVRKkY3YMs5nW0BHCxw7cmyiD22wQI%2FgJOns0vzJTwNxWXI%2F8bg8aw7vqvSV91Yti%2BgKU%2FZ42QADPGyVxYxhjg9lNgqNV%2BYT53eHh6SyGQnx4qVTNobWSxf8G3mNDOpE90e9VeX0a3M12kFaDK9jjORg%2Fj7VGEDc9PyifwgmIDFWSICZkxU5PSzVKFk0qPU8bvXjOm8tXKSmcu6MRkinca8REcawefk44Kx2C%2FWZOfvQehyKMytGGVtSv4w%2BtLAhZO5zmSrieT1q6ACJ2Zb3%2BKK3rtUYaqTCgPesJwP0YGQTPJhB8lfXIwMILGgcAGOqUBmLxK%2FaL88UDPmHOBPorh7kQeFwINmlB2WhLqbrdHFWTHXUcrMyc02f%2FJ%2BCtSv%2F2S6QP0vCceUxRCn%2B%2FqWXC3hXiK97ra7rA9UNWA0LtdlkT66nKg2%2BWrh2kVLy1MuL4HLRzcGLgIpN5W7YFZEmuvvKFDwGiKFDJ2CtzEf%2FFlqe83h4y9RygD51RXQrwIPG6f66ksX5ENej0j0t1KbLgwtAKdkSpe&X-Amz-Signature=4e31cc7755d0f6162fc9a18414c02bee3de0275dd1033bec5d9cb2496397cd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323TLGSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbfmNWHB8RXKPwYpoY0BHX%2Ff50Wta8sMr2R3tMW5%2FBZAiEA2a9onMH2MTwAArWHoJ%2FKmWCMljFhXzUsD38x4%2FKDEG8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIKx6gDNXxuboGFHSyrcA%2B5RKsb6CIF5g5h4iV37CCvzmsHcL99rXKJrk%2Bil3iJpUPAB9q9kflnneBsDSCaVhzd%2BenI6qyN3zLmTgU7bGbsSt7CpAytn8MJ54Ous8igjDNstJnZBFrKv%2BWm4Qd1%2FYMM68RWc9P5rXsBeLHSeAhd%2BD4fyj4udq6jjHDi6fYrpPI5LLiQXqRqd5NOw%2FScthmK0dJIllx3pRVH8bwGND33UvG3YoD9keuBJUqrGyBqdCuhXOdWANg11PGPYbtXLau3WiKAxa%2BXyRT7NPkXyWAvUS1aA18rWM%2BJ6g5OPZXUh3rFhxGgqbWjpfgmwXVdBQpyY66KVRKkY3YMs5nW0BHCxw7cmyiD22wQI%2FgJOns0vzJTwNxWXI%2F8bg8aw7vqvSV91Yti%2BgKU%2FZ42QADPGyVxYxhjg9lNgqNV%2BYT53eHh6SyGQnx4qVTNobWSxf8G3mNDOpE90e9VeX0a3M12kFaDK9jjORg%2Fj7VGEDc9PyifwgmIDFWSICZkxU5PSzVKFk0qPU8bvXjOm8tXKSmcu6MRkinca8REcawefk44Kx2C%2FWZOfvQehyKMytGGVtSv4w%2BtLAhZO5zmSrieT1q6ACJ2Zb3%2BKK3rtUYaqTCgPesJwP0YGQTPJhB8lfXIwMILGgcAGOqUBmLxK%2FaL88UDPmHOBPorh7kQeFwINmlB2WhLqbrdHFWTHXUcrMyc02f%2FJ%2BCtSv%2F2S6QP0vCceUxRCn%2B%2FqWXC3hXiK97ra7rA9UNWA0LtdlkT66nKg2%2BWrh2kVLy1MuL4HLRzcGLgIpN5W7YFZEmuvvKFDwGiKFDJ2CtzEf%2FFlqe83h4y9RygD51RXQrwIPG6f66ksX5ENej0j0t1KbLgwtAKdkSpe&X-Amz-Signature=183d1e06573f7aeb54c8459233e4a299c7cd5c7a544d7126e4b6fecb9e38d7f5&X-Amz-SignedHeaders=host&x-id=GetObject)
