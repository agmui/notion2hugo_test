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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPPAQLK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCeL%2Bjolao0XSUf1MP1rzPfwTYsWGaNf4Ipm32c9imHCQIhAKNWtJbSD5JpW1aA8oVfr1K9VmCYyChODcwqd%2BmaMZSGKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH3IKLj1WlB97eoVcq3AMAJQS3Gs%2FPcpYyO4UMszJRwRKcEHroNtHcYigc2C%2BMPJyfLjH9WaQqfAwxztnVLVHKP1J6tjmOJWTZJcrI3Uz1a1ciXnFqmAeXQsE6tN%2Frhsv3l2PbKULOP%2BBJdDFKr%2BEU6aMaNHgv74jUCaVawpxyQr5imVTF4q%2BmeYe9A77pkTugv7b9UE1DOWuGCOP5sj4ia1n61%2F4eg3U8F5p1tShZTdZuvY81PJi3PIPXMlhqr%2BN7M22oQqQXJZFDLnJxL04xX4Ih4EfBnZIBsQJleQwzY8sXQpSpGqJ2G6TxFM14ISXjo7yrn%2BXAsm%2BRPbAsbYNSooKgzOWQeSWjBiPXJCuY%2FcHifQUNm%2BjrN5HG%2Bex73PCU01GoZ0FRvz4lUfdJ41BT4roiLN%2Bnxs3mYKSIL04wLc%2FqUSKO09CIEFslwk5G4B2OR0B%2FAb4Mo1b0LDIa4cz5aSdBFO7aazrg%2FKhpYGEfDNLMlkhYbBM9DhbLUn2H52H3Cq4GXKrQCKa8F60fg0%2F2c0nTr3O%2FvR63k%2BA8mLs%2FAhDUXu%2B0hF4BDW6ruqBeg9UzB2arqZPpn2f4O%2Fw0Q9AZjaJqV13kZ9FXaUmWHk3UHYldkkoAPyUyFpOHdTDLlynjB1V0zUT0eIjg4zDJ347BBjqkAWkW2VyyAdaNS0FIlW1v7jrQE9gq7yem8t3w4Hitpxe4iOHh7%2BfMdThi65%2FOvjlVP6C5W3IvkC%2FixtmWTf87JLVbdQzGokWodthbkccO4%2B8RHjazU0x30LqDzSQvclq9TSg787cbm1hfAIXXVhESdlGb7YTH20RnqIIyjdc2cgA538WK6TGyxbBXBt7KroBBQaOvOZecYFI0ycfW9EgyMqwI3eQX&X-Amz-Signature=3c21114fe0f93c01ba5cfb1305532d9acbcb9bcdd2d29d6a5751977d62f0914d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPPAQLK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCeL%2Bjolao0XSUf1MP1rzPfwTYsWGaNf4Ipm32c9imHCQIhAKNWtJbSD5JpW1aA8oVfr1K9VmCYyChODcwqd%2BmaMZSGKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH3IKLj1WlB97eoVcq3AMAJQS3Gs%2FPcpYyO4UMszJRwRKcEHroNtHcYigc2C%2BMPJyfLjH9WaQqfAwxztnVLVHKP1J6tjmOJWTZJcrI3Uz1a1ciXnFqmAeXQsE6tN%2Frhsv3l2PbKULOP%2BBJdDFKr%2BEU6aMaNHgv74jUCaVawpxyQr5imVTF4q%2BmeYe9A77pkTugv7b9UE1DOWuGCOP5sj4ia1n61%2F4eg3U8F5p1tShZTdZuvY81PJi3PIPXMlhqr%2BN7M22oQqQXJZFDLnJxL04xX4Ih4EfBnZIBsQJleQwzY8sXQpSpGqJ2G6TxFM14ISXjo7yrn%2BXAsm%2BRPbAsbYNSooKgzOWQeSWjBiPXJCuY%2FcHifQUNm%2BjrN5HG%2Bex73PCU01GoZ0FRvz4lUfdJ41BT4roiLN%2Bnxs3mYKSIL04wLc%2FqUSKO09CIEFslwk5G4B2OR0B%2FAb4Mo1b0LDIa4cz5aSdBFO7aazrg%2FKhpYGEfDNLMlkhYbBM9DhbLUn2H52H3Cq4GXKrQCKa8F60fg0%2F2c0nTr3O%2FvR63k%2BA8mLs%2FAhDUXu%2B0hF4BDW6ruqBeg9UzB2arqZPpn2f4O%2Fw0Q9AZjaJqV13kZ9FXaUmWHk3UHYldkkoAPyUyFpOHdTDLlynjB1V0zUT0eIjg4zDJ347BBjqkAWkW2VyyAdaNS0FIlW1v7jrQE9gq7yem8t3w4Hitpxe4iOHh7%2BfMdThi65%2FOvjlVP6C5W3IvkC%2FixtmWTf87JLVbdQzGokWodthbkccO4%2B8RHjazU0x30LqDzSQvclq9TSg787cbm1hfAIXXVhESdlGb7YTH20RnqIIyjdc2cgA538WK6TGyxbBXBt7KroBBQaOvOZecYFI0ycfW9EgyMqwI3eQX&X-Amz-Signature=488e41e10070b55b48f1f2f3fd6a57361346d1cd5c7fe5f98c20e743bc5d040f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPPAQLK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCeL%2Bjolao0XSUf1MP1rzPfwTYsWGaNf4Ipm32c9imHCQIhAKNWtJbSD5JpW1aA8oVfr1K9VmCYyChODcwqd%2BmaMZSGKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH3IKLj1WlB97eoVcq3AMAJQS3Gs%2FPcpYyO4UMszJRwRKcEHroNtHcYigc2C%2BMPJyfLjH9WaQqfAwxztnVLVHKP1J6tjmOJWTZJcrI3Uz1a1ciXnFqmAeXQsE6tN%2Frhsv3l2PbKULOP%2BBJdDFKr%2BEU6aMaNHgv74jUCaVawpxyQr5imVTF4q%2BmeYe9A77pkTugv7b9UE1DOWuGCOP5sj4ia1n61%2F4eg3U8F5p1tShZTdZuvY81PJi3PIPXMlhqr%2BN7M22oQqQXJZFDLnJxL04xX4Ih4EfBnZIBsQJleQwzY8sXQpSpGqJ2G6TxFM14ISXjo7yrn%2BXAsm%2BRPbAsbYNSooKgzOWQeSWjBiPXJCuY%2FcHifQUNm%2BjrN5HG%2Bex73PCU01GoZ0FRvz4lUfdJ41BT4roiLN%2Bnxs3mYKSIL04wLc%2FqUSKO09CIEFslwk5G4B2OR0B%2FAb4Mo1b0LDIa4cz5aSdBFO7aazrg%2FKhpYGEfDNLMlkhYbBM9DhbLUn2H52H3Cq4GXKrQCKa8F60fg0%2F2c0nTr3O%2FvR63k%2BA8mLs%2FAhDUXu%2B0hF4BDW6ruqBeg9UzB2arqZPpn2f4O%2Fw0Q9AZjaJqV13kZ9FXaUmWHk3UHYldkkoAPyUyFpOHdTDLlynjB1V0zUT0eIjg4zDJ347BBjqkAWkW2VyyAdaNS0FIlW1v7jrQE9gq7yem8t3w4Hitpxe4iOHh7%2BfMdThi65%2FOvjlVP6C5W3IvkC%2FixtmWTf87JLVbdQzGokWodthbkccO4%2B8RHjazU0x30LqDzSQvclq9TSg787cbm1hfAIXXVhESdlGb7YTH20RnqIIyjdc2cgA538WK6TGyxbBXBt7KroBBQaOvOZecYFI0ycfW9EgyMqwI3eQX&X-Amz-Signature=4846a9658b09096ca4c085ef6f0647e75ff55a8fefed93ab8d3333b32d905d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPPAQLK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCeL%2Bjolao0XSUf1MP1rzPfwTYsWGaNf4Ipm32c9imHCQIhAKNWtJbSD5JpW1aA8oVfr1K9VmCYyChODcwqd%2BmaMZSGKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH3IKLj1WlB97eoVcq3AMAJQS3Gs%2FPcpYyO4UMszJRwRKcEHroNtHcYigc2C%2BMPJyfLjH9WaQqfAwxztnVLVHKP1J6tjmOJWTZJcrI3Uz1a1ciXnFqmAeXQsE6tN%2Frhsv3l2PbKULOP%2BBJdDFKr%2BEU6aMaNHgv74jUCaVawpxyQr5imVTF4q%2BmeYe9A77pkTugv7b9UE1DOWuGCOP5sj4ia1n61%2F4eg3U8F5p1tShZTdZuvY81PJi3PIPXMlhqr%2BN7M22oQqQXJZFDLnJxL04xX4Ih4EfBnZIBsQJleQwzY8sXQpSpGqJ2G6TxFM14ISXjo7yrn%2BXAsm%2BRPbAsbYNSooKgzOWQeSWjBiPXJCuY%2FcHifQUNm%2BjrN5HG%2Bex73PCU01GoZ0FRvz4lUfdJ41BT4roiLN%2Bnxs3mYKSIL04wLc%2FqUSKO09CIEFslwk5G4B2OR0B%2FAb4Mo1b0LDIa4cz5aSdBFO7aazrg%2FKhpYGEfDNLMlkhYbBM9DhbLUn2H52H3Cq4GXKrQCKa8F60fg0%2F2c0nTr3O%2FvR63k%2BA8mLs%2FAhDUXu%2B0hF4BDW6ruqBeg9UzB2arqZPpn2f4O%2Fw0Q9AZjaJqV13kZ9FXaUmWHk3UHYldkkoAPyUyFpOHdTDLlynjB1V0zUT0eIjg4zDJ347BBjqkAWkW2VyyAdaNS0FIlW1v7jrQE9gq7yem8t3w4Hitpxe4iOHh7%2BfMdThi65%2FOvjlVP6C5W3IvkC%2FixtmWTf87JLVbdQzGokWodthbkccO4%2B8RHjazU0x30LqDzSQvclq9TSg787cbm1hfAIXXVhESdlGb7YTH20RnqIIyjdc2cgA538WK6TGyxbBXBt7KroBBQaOvOZecYFI0ycfW9EgyMqwI3eQX&X-Amz-Signature=1b9eb1256f187f88a653d8651f47ad4032057126851f4f04a6299e6517a80522&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPPAQLK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCeL%2Bjolao0XSUf1MP1rzPfwTYsWGaNf4Ipm32c9imHCQIhAKNWtJbSD5JpW1aA8oVfr1K9VmCYyChODcwqd%2BmaMZSGKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH3IKLj1WlB97eoVcq3AMAJQS3Gs%2FPcpYyO4UMszJRwRKcEHroNtHcYigc2C%2BMPJyfLjH9WaQqfAwxztnVLVHKP1J6tjmOJWTZJcrI3Uz1a1ciXnFqmAeXQsE6tN%2Frhsv3l2PbKULOP%2BBJdDFKr%2BEU6aMaNHgv74jUCaVawpxyQr5imVTF4q%2BmeYe9A77pkTugv7b9UE1DOWuGCOP5sj4ia1n61%2F4eg3U8F5p1tShZTdZuvY81PJi3PIPXMlhqr%2BN7M22oQqQXJZFDLnJxL04xX4Ih4EfBnZIBsQJleQwzY8sXQpSpGqJ2G6TxFM14ISXjo7yrn%2BXAsm%2BRPbAsbYNSooKgzOWQeSWjBiPXJCuY%2FcHifQUNm%2BjrN5HG%2Bex73PCU01GoZ0FRvz4lUfdJ41BT4roiLN%2Bnxs3mYKSIL04wLc%2FqUSKO09CIEFslwk5G4B2OR0B%2FAb4Mo1b0LDIa4cz5aSdBFO7aazrg%2FKhpYGEfDNLMlkhYbBM9DhbLUn2H52H3Cq4GXKrQCKa8F60fg0%2F2c0nTr3O%2FvR63k%2BA8mLs%2FAhDUXu%2B0hF4BDW6ruqBeg9UzB2arqZPpn2f4O%2Fw0Q9AZjaJqV13kZ9FXaUmWHk3UHYldkkoAPyUyFpOHdTDLlynjB1V0zUT0eIjg4zDJ347BBjqkAWkW2VyyAdaNS0FIlW1v7jrQE9gq7yem8t3w4Hitpxe4iOHh7%2BfMdThi65%2FOvjlVP6C5W3IvkC%2FixtmWTf87JLVbdQzGokWodthbkccO4%2B8RHjazU0x30LqDzSQvclq9TSg787cbm1hfAIXXVhESdlGb7YTH20RnqIIyjdc2cgA538WK6TGyxbBXBt7KroBBQaOvOZecYFI0ycfW9EgyMqwI3eQX&X-Amz-Signature=4a523fcc9bf577da77b748c428b10c4bae46da78923195b37e9b2501a3ab3a80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPPAQLK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCeL%2Bjolao0XSUf1MP1rzPfwTYsWGaNf4Ipm32c9imHCQIhAKNWtJbSD5JpW1aA8oVfr1K9VmCYyChODcwqd%2BmaMZSGKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH3IKLj1WlB97eoVcq3AMAJQS3Gs%2FPcpYyO4UMszJRwRKcEHroNtHcYigc2C%2BMPJyfLjH9WaQqfAwxztnVLVHKP1J6tjmOJWTZJcrI3Uz1a1ciXnFqmAeXQsE6tN%2Frhsv3l2PbKULOP%2BBJdDFKr%2BEU6aMaNHgv74jUCaVawpxyQr5imVTF4q%2BmeYe9A77pkTugv7b9UE1DOWuGCOP5sj4ia1n61%2F4eg3U8F5p1tShZTdZuvY81PJi3PIPXMlhqr%2BN7M22oQqQXJZFDLnJxL04xX4Ih4EfBnZIBsQJleQwzY8sXQpSpGqJ2G6TxFM14ISXjo7yrn%2BXAsm%2BRPbAsbYNSooKgzOWQeSWjBiPXJCuY%2FcHifQUNm%2BjrN5HG%2Bex73PCU01GoZ0FRvz4lUfdJ41BT4roiLN%2Bnxs3mYKSIL04wLc%2FqUSKO09CIEFslwk5G4B2OR0B%2FAb4Mo1b0LDIa4cz5aSdBFO7aazrg%2FKhpYGEfDNLMlkhYbBM9DhbLUn2H52H3Cq4GXKrQCKa8F60fg0%2F2c0nTr3O%2FvR63k%2BA8mLs%2FAhDUXu%2B0hF4BDW6ruqBeg9UzB2arqZPpn2f4O%2Fw0Q9AZjaJqV13kZ9FXaUmWHk3UHYldkkoAPyUyFpOHdTDLlynjB1V0zUT0eIjg4zDJ347BBjqkAWkW2VyyAdaNS0FIlW1v7jrQE9gq7yem8t3w4Hitpxe4iOHh7%2BfMdThi65%2FOvjlVP6C5W3IvkC%2FixtmWTf87JLVbdQzGokWodthbkccO4%2B8RHjazU0x30LqDzSQvclq9TSg787cbm1hfAIXXVhESdlGb7YTH20RnqIIyjdc2cgA538WK6TGyxbBXBt7KroBBQaOvOZecYFI0ycfW9EgyMqwI3eQX&X-Amz-Signature=90b4653f2ed1c1821d514f7f23e3d8066509b7e9fca6aaacbc678cc02f3ca1ed&X-Amz-SignedHeaders=host&x-id=GetObject)
