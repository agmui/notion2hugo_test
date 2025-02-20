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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WHEBRW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7uhdqyCS3YBhgYLT2GltjdZGsTfCB81O4ONZeZAbe%2BAiAB1wrCZWC5cfL%2Fa5bu5N4%2B7Ndf33AMu%2Bt95T1MtbDhHCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bdo5WqDd0T2Xuhr9KtwDB3%2FUKBn9CkEPznuZXpapG8K74K1sKhAJa7UbVWkxGXWr3U5LRKZf5RHms3oFaB%2BMhWPTufvQUR%2FZ99%2F4YYzqBu7MwNLgjs%2FvfRPARoX%2BDEoZFb%2BExJawcLiYr6l4%2BEI0Miz5mF7L0lyIcCSeffnK15ofAT%2B7hSLnlE6%2FDOw35Vf4zTjtk4Yqvj0jTMBfCqutrssyXQ5oJr15VTPxXj1chSG76gcDLKubV1Ay3H%2BIq55nwntJIMba1kT%2FPtX023CM9kP6JsBZjHF5EbYDbMDWPBEsHHDkaokOLWUoKTyppHl%2B%2BGZfx26KR6i%2BWoOPEwIc7Lwy9%2BE%2FJB8qN6e3ZLrw5YZx%2F8pt7BR%2FmuptQeqWulPUM%2F4Lt8sZSFaSLRfo8QKtybDiyMcLtoMw%2BesmUUytjn2M%2B3G%2FixFV86uri4hY7zRV1ne8bLM1LLgHkWtCvTt42fb1jtTwLrsp0lMS2FgwFksBJFz3WH0I9PXQF4zzDVrHRX8gpoxi9sotBGu0bWKxJBDIShqIdLsslOH3qvOlhIaLhjZJVU6aL%2FDRa8s1w5gu11N3Sr%2FN%2BJBzaBOWJJhOCrSdxWs6M%2BErSbNCIIs1kKzdb%2FuoouFVUNL8VQVgBqYbqp2HfhXgFivqaNgw4J3bvQY6pgEtN57RsMtM5ADHfVTurI6aAsLWSDcYtsykYyoF5J5Tp92XWvYdlkVQcJjUHt2sDAkTIEJeXGm7%2Fugvkdq40wH%2Bhq%2FIyhDb5vzLfUA50%2F4YI1GnhTjZnLoBpBm2NhwQqeNa%2F9qLfE061TCEx3J%2FRvMsnV%2FHmarEO836MrUZ%2FMyv9Y9%2FLMAMn7LDOxufv0TrIAkHQSngNEzkRzJZUqceaxBKk5kHpYdA&X-Amz-Signature=1aa0ec7fbdeed317e3944f65dfb9e7d2e78317e438c0efe82aa2b981b6be9bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WHEBRW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7uhdqyCS3YBhgYLT2GltjdZGsTfCB81O4ONZeZAbe%2BAiAB1wrCZWC5cfL%2Fa5bu5N4%2B7Ndf33AMu%2Bt95T1MtbDhHCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bdo5WqDd0T2Xuhr9KtwDB3%2FUKBn9CkEPznuZXpapG8K74K1sKhAJa7UbVWkxGXWr3U5LRKZf5RHms3oFaB%2BMhWPTufvQUR%2FZ99%2F4YYzqBu7MwNLgjs%2FvfRPARoX%2BDEoZFb%2BExJawcLiYr6l4%2BEI0Miz5mF7L0lyIcCSeffnK15ofAT%2B7hSLnlE6%2FDOw35Vf4zTjtk4Yqvj0jTMBfCqutrssyXQ5oJr15VTPxXj1chSG76gcDLKubV1Ay3H%2BIq55nwntJIMba1kT%2FPtX023CM9kP6JsBZjHF5EbYDbMDWPBEsHHDkaokOLWUoKTyppHl%2B%2BGZfx26KR6i%2BWoOPEwIc7Lwy9%2BE%2FJB8qN6e3ZLrw5YZx%2F8pt7BR%2FmuptQeqWulPUM%2F4Lt8sZSFaSLRfo8QKtybDiyMcLtoMw%2BesmUUytjn2M%2B3G%2FixFV86uri4hY7zRV1ne8bLM1LLgHkWtCvTt42fb1jtTwLrsp0lMS2FgwFksBJFz3WH0I9PXQF4zzDVrHRX8gpoxi9sotBGu0bWKxJBDIShqIdLsslOH3qvOlhIaLhjZJVU6aL%2FDRa8s1w5gu11N3Sr%2FN%2BJBzaBOWJJhOCrSdxWs6M%2BErSbNCIIs1kKzdb%2FuoouFVUNL8VQVgBqYbqp2HfhXgFivqaNgw4J3bvQY6pgEtN57RsMtM5ADHfVTurI6aAsLWSDcYtsykYyoF5J5Tp92XWvYdlkVQcJjUHt2sDAkTIEJeXGm7%2Fugvkdq40wH%2Bhq%2FIyhDb5vzLfUA50%2F4YI1GnhTjZnLoBpBm2NhwQqeNa%2F9qLfE061TCEx3J%2FRvMsnV%2FHmarEO836MrUZ%2FMyv9Y9%2FLMAMn7LDOxufv0TrIAkHQSngNEzkRzJZUqceaxBKk5kHpYdA&X-Amz-Signature=149f0d6436ffa27f9a825588a74935172f08c9bbb0c13ceb53f0f94750fe62e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WHEBRW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7uhdqyCS3YBhgYLT2GltjdZGsTfCB81O4ONZeZAbe%2BAiAB1wrCZWC5cfL%2Fa5bu5N4%2B7Ndf33AMu%2Bt95T1MtbDhHCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bdo5WqDd0T2Xuhr9KtwDB3%2FUKBn9CkEPznuZXpapG8K74K1sKhAJa7UbVWkxGXWr3U5LRKZf5RHms3oFaB%2BMhWPTufvQUR%2FZ99%2F4YYzqBu7MwNLgjs%2FvfRPARoX%2BDEoZFb%2BExJawcLiYr6l4%2BEI0Miz5mF7L0lyIcCSeffnK15ofAT%2B7hSLnlE6%2FDOw35Vf4zTjtk4Yqvj0jTMBfCqutrssyXQ5oJr15VTPxXj1chSG76gcDLKubV1Ay3H%2BIq55nwntJIMba1kT%2FPtX023CM9kP6JsBZjHF5EbYDbMDWPBEsHHDkaokOLWUoKTyppHl%2B%2BGZfx26KR6i%2BWoOPEwIc7Lwy9%2BE%2FJB8qN6e3ZLrw5YZx%2F8pt7BR%2FmuptQeqWulPUM%2F4Lt8sZSFaSLRfo8QKtybDiyMcLtoMw%2BesmUUytjn2M%2B3G%2FixFV86uri4hY7zRV1ne8bLM1LLgHkWtCvTt42fb1jtTwLrsp0lMS2FgwFksBJFz3WH0I9PXQF4zzDVrHRX8gpoxi9sotBGu0bWKxJBDIShqIdLsslOH3qvOlhIaLhjZJVU6aL%2FDRa8s1w5gu11N3Sr%2FN%2BJBzaBOWJJhOCrSdxWs6M%2BErSbNCIIs1kKzdb%2FuoouFVUNL8VQVgBqYbqp2HfhXgFivqaNgw4J3bvQY6pgEtN57RsMtM5ADHfVTurI6aAsLWSDcYtsykYyoF5J5Tp92XWvYdlkVQcJjUHt2sDAkTIEJeXGm7%2Fugvkdq40wH%2Bhq%2FIyhDb5vzLfUA50%2F4YI1GnhTjZnLoBpBm2NhwQqeNa%2F9qLfE061TCEx3J%2FRvMsnV%2FHmarEO836MrUZ%2FMyv9Y9%2FLMAMn7LDOxufv0TrIAkHQSngNEzkRzJZUqceaxBKk5kHpYdA&X-Amz-Signature=c5ddd85a2e1e830375ba96c7e4288fac5c26166f4f6d7844916f188bf98ed096&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WHEBRW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7uhdqyCS3YBhgYLT2GltjdZGsTfCB81O4ONZeZAbe%2BAiAB1wrCZWC5cfL%2Fa5bu5N4%2B7Ndf33AMu%2Bt95T1MtbDhHCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bdo5WqDd0T2Xuhr9KtwDB3%2FUKBn9CkEPznuZXpapG8K74K1sKhAJa7UbVWkxGXWr3U5LRKZf5RHms3oFaB%2BMhWPTufvQUR%2FZ99%2F4YYzqBu7MwNLgjs%2FvfRPARoX%2BDEoZFb%2BExJawcLiYr6l4%2BEI0Miz5mF7L0lyIcCSeffnK15ofAT%2B7hSLnlE6%2FDOw35Vf4zTjtk4Yqvj0jTMBfCqutrssyXQ5oJr15VTPxXj1chSG76gcDLKubV1Ay3H%2BIq55nwntJIMba1kT%2FPtX023CM9kP6JsBZjHF5EbYDbMDWPBEsHHDkaokOLWUoKTyppHl%2B%2BGZfx26KR6i%2BWoOPEwIc7Lwy9%2BE%2FJB8qN6e3ZLrw5YZx%2F8pt7BR%2FmuptQeqWulPUM%2F4Lt8sZSFaSLRfo8QKtybDiyMcLtoMw%2BesmUUytjn2M%2B3G%2FixFV86uri4hY7zRV1ne8bLM1LLgHkWtCvTt42fb1jtTwLrsp0lMS2FgwFksBJFz3WH0I9PXQF4zzDVrHRX8gpoxi9sotBGu0bWKxJBDIShqIdLsslOH3qvOlhIaLhjZJVU6aL%2FDRa8s1w5gu11N3Sr%2FN%2BJBzaBOWJJhOCrSdxWs6M%2BErSbNCIIs1kKzdb%2FuoouFVUNL8VQVgBqYbqp2HfhXgFivqaNgw4J3bvQY6pgEtN57RsMtM5ADHfVTurI6aAsLWSDcYtsykYyoF5J5Tp92XWvYdlkVQcJjUHt2sDAkTIEJeXGm7%2Fugvkdq40wH%2Bhq%2FIyhDb5vzLfUA50%2F4YI1GnhTjZnLoBpBm2NhwQqeNa%2F9qLfE061TCEx3J%2FRvMsnV%2FHmarEO836MrUZ%2FMyv9Y9%2FLMAMn7LDOxufv0TrIAkHQSngNEzkRzJZUqceaxBKk5kHpYdA&X-Amz-Signature=773868437d8bffd907da3cf89dbc4df8c7a418328cfb056e73c6081739a66c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WHEBRW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7uhdqyCS3YBhgYLT2GltjdZGsTfCB81O4ONZeZAbe%2BAiAB1wrCZWC5cfL%2Fa5bu5N4%2B7Ndf33AMu%2Bt95T1MtbDhHCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bdo5WqDd0T2Xuhr9KtwDB3%2FUKBn9CkEPznuZXpapG8K74K1sKhAJa7UbVWkxGXWr3U5LRKZf5RHms3oFaB%2BMhWPTufvQUR%2FZ99%2F4YYzqBu7MwNLgjs%2FvfRPARoX%2BDEoZFb%2BExJawcLiYr6l4%2BEI0Miz5mF7L0lyIcCSeffnK15ofAT%2B7hSLnlE6%2FDOw35Vf4zTjtk4Yqvj0jTMBfCqutrssyXQ5oJr15VTPxXj1chSG76gcDLKubV1Ay3H%2BIq55nwntJIMba1kT%2FPtX023CM9kP6JsBZjHF5EbYDbMDWPBEsHHDkaokOLWUoKTyppHl%2B%2BGZfx26KR6i%2BWoOPEwIc7Lwy9%2BE%2FJB8qN6e3ZLrw5YZx%2F8pt7BR%2FmuptQeqWulPUM%2F4Lt8sZSFaSLRfo8QKtybDiyMcLtoMw%2BesmUUytjn2M%2B3G%2FixFV86uri4hY7zRV1ne8bLM1LLgHkWtCvTt42fb1jtTwLrsp0lMS2FgwFksBJFz3WH0I9PXQF4zzDVrHRX8gpoxi9sotBGu0bWKxJBDIShqIdLsslOH3qvOlhIaLhjZJVU6aL%2FDRa8s1w5gu11N3Sr%2FN%2BJBzaBOWJJhOCrSdxWs6M%2BErSbNCIIs1kKzdb%2FuoouFVUNL8VQVgBqYbqp2HfhXgFivqaNgw4J3bvQY6pgEtN57RsMtM5ADHfVTurI6aAsLWSDcYtsykYyoF5J5Tp92XWvYdlkVQcJjUHt2sDAkTIEJeXGm7%2Fugvkdq40wH%2Bhq%2FIyhDb5vzLfUA50%2F4YI1GnhTjZnLoBpBm2NhwQqeNa%2F9qLfE061TCEx3J%2FRvMsnV%2FHmarEO836MrUZ%2FMyv9Y9%2FLMAMn7LDOxufv0TrIAkHQSngNEzkRzJZUqceaxBKk5kHpYdA&X-Amz-Signature=2cef6c45d542458f2fd40f649da1c3c7bdee7365d806ed3c98f1750c4d627817&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6WHEBRW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7uhdqyCS3YBhgYLT2GltjdZGsTfCB81O4ONZeZAbe%2BAiAB1wrCZWC5cfL%2Fa5bu5N4%2B7Ndf33AMu%2Bt95T1MtbDhHCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bdo5WqDd0T2Xuhr9KtwDB3%2FUKBn9CkEPznuZXpapG8K74K1sKhAJa7UbVWkxGXWr3U5LRKZf5RHms3oFaB%2BMhWPTufvQUR%2FZ99%2F4YYzqBu7MwNLgjs%2FvfRPARoX%2BDEoZFb%2BExJawcLiYr6l4%2BEI0Miz5mF7L0lyIcCSeffnK15ofAT%2B7hSLnlE6%2FDOw35Vf4zTjtk4Yqvj0jTMBfCqutrssyXQ5oJr15VTPxXj1chSG76gcDLKubV1Ay3H%2BIq55nwntJIMba1kT%2FPtX023CM9kP6JsBZjHF5EbYDbMDWPBEsHHDkaokOLWUoKTyppHl%2B%2BGZfx26KR6i%2BWoOPEwIc7Lwy9%2BE%2FJB8qN6e3ZLrw5YZx%2F8pt7BR%2FmuptQeqWulPUM%2F4Lt8sZSFaSLRfo8QKtybDiyMcLtoMw%2BesmUUytjn2M%2B3G%2FixFV86uri4hY7zRV1ne8bLM1LLgHkWtCvTt42fb1jtTwLrsp0lMS2FgwFksBJFz3WH0I9PXQF4zzDVrHRX8gpoxi9sotBGu0bWKxJBDIShqIdLsslOH3qvOlhIaLhjZJVU6aL%2FDRa8s1w5gu11N3Sr%2FN%2BJBzaBOWJJhOCrSdxWs6M%2BErSbNCIIs1kKzdb%2FuoouFVUNL8VQVgBqYbqp2HfhXgFivqaNgw4J3bvQY6pgEtN57RsMtM5ADHfVTurI6aAsLWSDcYtsykYyoF5J5Tp92XWvYdlkVQcJjUHt2sDAkTIEJeXGm7%2Fugvkdq40wH%2Bhq%2FIyhDb5vzLfUA50%2F4YI1GnhTjZnLoBpBm2NhwQqeNa%2F9qLfE061TCEx3J%2FRvMsnV%2FHmarEO836MrUZ%2FMyv9Y9%2FLMAMn7LDOxufv0TrIAkHQSngNEzkRzJZUqceaxBKk5kHpYdA&X-Amz-Signature=6b065a62abd6b13b2e27b9429e80921796f5ad9dccee664950dd813d4abb59f6&X-Amz-SignedHeaders=host&x-id=GetObject)
