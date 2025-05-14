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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643UUH4YO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE1JlguUGh4Hs2AlmNOZEcdqRaytAQsB2JavoJi55bCgAiB9w0Kh9ILJEWXi03xXe%2BVtmm7MNTa9kSq9DU4NmxkR6ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMQctTwgrGfih%2FgVbXKtwDstk5W2ZAjmjyQopg4gtBeAEf2W%2FeBBVTrERF2haQNL%2F4hqpkCFSmLAD7rN39FQl7e3OykIsdx6ko%2Fjsy%2FgDnNflgYYAJx6rPTQDfs6vtFRJ6Sc6FQ%2FsdmI5V5E8tcugIDFvklB4%2B17eBWss39h3wg1uo4z0FshdBKeA%2Bxy1kRUMUKDw8345Dy9Xj4Zxim%2Fja6TdTQq%2BTxMD4yC1yPhkOz3Dq6KDRNsjdLGvxXzuNFX2g%2F4LFcqAJmGY1dPccer4GpX51NDlH1PA3jUlBFDMS5bBMk3QPhUgv1QnRRToj4PADemuXSDIbJao%2FBTI4y8P9ebFdjvkIuCU5vC5VeskFb4d2%2FqQ6Li1D1wXplGC8W11tt0Vy1iXIbwOHAX%2FKNL46DLViVlNXlPeO7dydQCJwKBVaj6VxFdxIcHydfDqluz8GvjU2IaYBqjEWVSRfOTU4zhTSF3qFYM8TbZbLdTsdy36ALPxd%2BC9KMKgCtBOLf8Lj73ohNRtxp46rJhrqUCdy5d3s2hcP9sJIptWsXFqFbv6P3yrScapTE4LGezJA0Ks2Zc5tRk17KE2RKm6oB0DR9O1rI1EfO1IB%2BHitmEC63cG1ID4V%2BVDmQjFlEG8opo%2By2clV4%2F0UTfzsNk8w2uyRwQY6pgGJWsvxdPiXJqC%2FBf8jiL12gTR3znqURMtZV33vW4%2FHeVj7U%2BCDyqAynQw9aopyO%2F%2ByFZ8W5WbVt%2BtEbCdepm6bCUG0DzRA3lM24Kcb5Lgi6DpbAa368%2F8rPI%2BCDz%2FWjyRPmL0EU0rRZPWEI3zct0gWHi6lVdM7BwJLlhJvC7WoBscMx%2Fjhb%2FRDkWMY9lW6V3cPw5jjoyp8ZsQs703MBJya2AgxU6qO&X-Amz-Signature=1566ce0c3a40c78ce608ab4f728921a6e940042b8b293242c7302c4072db89a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643UUH4YO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE1JlguUGh4Hs2AlmNOZEcdqRaytAQsB2JavoJi55bCgAiB9w0Kh9ILJEWXi03xXe%2BVtmm7MNTa9kSq9DU4NmxkR6ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMQctTwgrGfih%2FgVbXKtwDstk5W2ZAjmjyQopg4gtBeAEf2W%2FeBBVTrERF2haQNL%2F4hqpkCFSmLAD7rN39FQl7e3OykIsdx6ko%2Fjsy%2FgDnNflgYYAJx6rPTQDfs6vtFRJ6Sc6FQ%2FsdmI5V5E8tcugIDFvklB4%2B17eBWss39h3wg1uo4z0FshdBKeA%2Bxy1kRUMUKDw8345Dy9Xj4Zxim%2Fja6TdTQq%2BTxMD4yC1yPhkOz3Dq6KDRNsjdLGvxXzuNFX2g%2F4LFcqAJmGY1dPccer4GpX51NDlH1PA3jUlBFDMS5bBMk3QPhUgv1QnRRToj4PADemuXSDIbJao%2FBTI4y8P9ebFdjvkIuCU5vC5VeskFb4d2%2FqQ6Li1D1wXplGC8W11tt0Vy1iXIbwOHAX%2FKNL46DLViVlNXlPeO7dydQCJwKBVaj6VxFdxIcHydfDqluz8GvjU2IaYBqjEWVSRfOTU4zhTSF3qFYM8TbZbLdTsdy36ALPxd%2BC9KMKgCtBOLf8Lj73ohNRtxp46rJhrqUCdy5d3s2hcP9sJIptWsXFqFbv6P3yrScapTE4LGezJA0Ks2Zc5tRk17KE2RKm6oB0DR9O1rI1EfO1IB%2BHitmEC63cG1ID4V%2BVDmQjFlEG8opo%2By2clV4%2F0UTfzsNk8w2uyRwQY6pgGJWsvxdPiXJqC%2FBf8jiL12gTR3znqURMtZV33vW4%2FHeVj7U%2BCDyqAynQw9aopyO%2F%2ByFZ8W5WbVt%2BtEbCdepm6bCUG0DzRA3lM24Kcb5Lgi6DpbAa368%2F8rPI%2BCDz%2FWjyRPmL0EU0rRZPWEI3zct0gWHi6lVdM7BwJLlhJvC7WoBscMx%2Fjhb%2FRDkWMY9lW6V3cPw5jjoyp8ZsQs703MBJya2AgxU6qO&X-Amz-Signature=15d370404d2a8022037a45c6e4f76a86e647cb2f78da4c7d4763233f0467e214&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643UUH4YO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE1JlguUGh4Hs2AlmNOZEcdqRaytAQsB2JavoJi55bCgAiB9w0Kh9ILJEWXi03xXe%2BVtmm7MNTa9kSq9DU4NmxkR6ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMQctTwgrGfih%2FgVbXKtwDstk5W2ZAjmjyQopg4gtBeAEf2W%2FeBBVTrERF2haQNL%2F4hqpkCFSmLAD7rN39FQl7e3OykIsdx6ko%2Fjsy%2FgDnNflgYYAJx6rPTQDfs6vtFRJ6Sc6FQ%2FsdmI5V5E8tcugIDFvklB4%2B17eBWss39h3wg1uo4z0FshdBKeA%2Bxy1kRUMUKDw8345Dy9Xj4Zxim%2Fja6TdTQq%2BTxMD4yC1yPhkOz3Dq6KDRNsjdLGvxXzuNFX2g%2F4LFcqAJmGY1dPccer4GpX51NDlH1PA3jUlBFDMS5bBMk3QPhUgv1QnRRToj4PADemuXSDIbJao%2FBTI4y8P9ebFdjvkIuCU5vC5VeskFb4d2%2FqQ6Li1D1wXplGC8W11tt0Vy1iXIbwOHAX%2FKNL46DLViVlNXlPeO7dydQCJwKBVaj6VxFdxIcHydfDqluz8GvjU2IaYBqjEWVSRfOTU4zhTSF3qFYM8TbZbLdTsdy36ALPxd%2BC9KMKgCtBOLf8Lj73ohNRtxp46rJhrqUCdy5d3s2hcP9sJIptWsXFqFbv6P3yrScapTE4LGezJA0Ks2Zc5tRk17KE2RKm6oB0DR9O1rI1EfO1IB%2BHitmEC63cG1ID4V%2BVDmQjFlEG8opo%2By2clV4%2F0UTfzsNk8w2uyRwQY6pgGJWsvxdPiXJqC%2FBf8jiL12gTR3znqURMtZV33vW4%2FHeVj7U%2BCDyqAynQw9aopyO%2F%2ByFZ8W5WbVt%2BtEbCdepm6bCUG0DzRA3lM24Kcb5Lgi6DpbAa368%2F8rPI%2BCDz%2FWjyRPmL0EU0rRZPWEI3zct0gWHi6lVdM7BwJLlhJvC7WoBscMx%2Fjhb%2FRDkWMY9lW6V3cPw5jjoyp8ZsQs703MBJya2AgxU6qO&X-Amz-Signature=96ef5798966702a8bc6ccb4b113ecdebf2a395ef2b0bb5194734e2f7fc8fe542&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643UUH4YO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE1JlguUGh4Hs2AlmNOZEcdqRaytAQsB2JavoJi55bCgAiB9w0Kh9ILJEWXi03xXe%2BVtmm7MNTa9kSq9DU4NmxkR6ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMQctTwgrGfih%2FgVbXKtwDstk5W2ZAjmjyQopg4gtBeAEf2W%2FeBBVTrERF2haQNL%2F4hqpkCFSmLAD7rN39FQl7e3OykIsdx6ko%2Fjsy%2FgDnNflgYYAJx6rPTQDfs6vtFRJ6Sc6FQ%2FsdmI5V5E8tcugIDFvklB4%2B17eBWss39h3wg1uo4z0FshdBKeA%2Bxy1kRUMUKDw8345Dy9Xj4Zxim%2Fja6TdTQq%2BTxMD4yC1yPhkOz3Dq6KDRNsjdLGvxXzuNFX2g%2F4LFcqAJmGY1dPccer4GpX51NDlH1PA3jUlBFDMS5bBMk3QPhUgv1QnRRToj4PADemuXSDIbJao%2FBTI4y8P9ebFdjvkIuCU5vC5VeskFb4d2%2FqQ6Li1D1wXplGC8W11tt0Vy1iXIbwOHAX%2FKNL46DLViVlNXlPeO7dydQCJwKBVaj6VxFdxIcHydfDqluz8GvjU2IaYBqjEWVSRfOTU4zhTSF3qFYM8TbZbLdTsdy36ALPxd%2BC9KMKgCtBOLf8Lj73ohNRtxp46rJhrqUCdy5d3s2hcP9sJIptWsXFqFbv6P3yrScapTE4LGezJA0Ks2Zc5tRk17KE2RKm6oB0DR9O1rI1EfO1IB%2BHitmEC63cG1ID4V%2BVDmQjFlEG8opo%2By2clV4%2F0UTfzsNk8w2uyRwQY6pgGJWsvxdPiXJqC%2FBf8jiL12gTR3znqURMtZV33vW4%2FHeVj7U%2BCDyqAynQw9aopyO%2F%2ByFZ8W5WbVt%2BtEbCdepm6bCUG0DzRA3lM24Kcb5Lgi6DpbAa368%2F8rPI%2BCDz%2FWjyRPmL0EU0rRZPWEI3zct0gWHi6lVdM7BwJLlhJvC7WoBscMx%2Fjhb%2FRDkWMY9lW6V3cPw5jjoyp8ZsQs703MBJya2AgxU6qO&X-Amz-Signature=5273f7642a73eb753e0ba9c46de03c1ae89d825f8df44b8d05e202017e1c973b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643UUH4YO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE1JlguUGh4Hs2AlmNOZEcdqRaytAQsB2JavoJi55bCgAiB9w0Kh9ILJEWXi03xXe%2BVtmm7MNTa9kSq9DU4NmxkR6ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMQctTwgrGfih%2FgVbXKtwDstk5W2ZAjmjyQopg4gtBeAEf2W%2FeBBVTrERF2haQNL%2F4hqpkCFSmLAD7rN39FQl7e3OykIsdx6ko%2Fjsy%2FgDnNflgYYAJx6rPTQDfs6vtFRJ6Sc6FQ%2FsdmI5V5E8tcugIDFvklB4%2B17eBWss39h3wg1uo4z0FshdBKeA%2Bxy1kRUMUKDw8345Dy9Xj4Zxim%2Fja6TdTQq%2BTxMD4yC1yPhkOz3Dq6KDRNsjdLGvxXzuNFX2g%2F4LFcqAJmGY1dPccer4GpX51NDlH1PA3jUlBFDMS5bBMk3QPhUgv1QnRRToj4PADemuXSDIbJao%2FBTI4y8P9ebFdjvkIuCU5vC5VeskFb4d2%2FqQ6Li1D1wXplGC8W11tt0Vy1iXIbwOHAX%2FKNL46DLViVlNXlPeO7dydQCJwKBVaj6VxFdxIcHydfDqluz8GvjU2IaYBqjEWVSRfOTU4zhTSF3qFYM8TbZbLdTsdy36ALPxd%2BC9KMKgCtBOLf8Lj73ohNRtxp46rJhrqUCdy5d3s2hcP9sJIptWsXFqFbv6P3yrScapTE4LGezJA0Ks2Zc5tRk17KE2RKm6oB0DR9O1rI1EfO1IB%2BHitmEC63cG1ID4V%2BVDmQjFlEG8opo%2By2clV4%2F0UTfzsNk8w2uyRwQY6pgGJWsvxdPiXJqC%2FBf8jiL12gTR3znqURMtZV33vW4%2FHeVj7U%2BCDyqAynQw9aopyO%2F%2ByFZ8W5WbVt%2BtEbCdepm6bCUG0DzRA3lM24Kcb5Lgi6DpbAa368%2F8rPI%2BCDz%2FWjyRPmL0EU0rRZPWEI3zct0gWHi6lVdM7BwJLlhJvC7WoBscMx%2Fjhb%2FRDkWMY9lW6V3cPw5jjoyp8ZsQs703MBJya2AgxU6qO&X-Amz-Signature=15797bad2c34da23356ff8c89d876060e436e57c1a016dae66fbe1554af74b05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643UUH4YO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE1JlguUGh4Hs2AlmNOZEcdqRaytAQsB2JavoJi55bCgAiB9w0Kh9ILJEWXi03xXe%2BVtmm7MNTa9kSq9DU4NmxkR6ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMQctTwgrGfih%2FgVbXKtwDstk5W2ZAjmjyQopg4gtBeAEf2W%2FeBBVTrERF2haQNL%2F4hqpkCFSmLAD7rN39FQl7e3OykIsdx6ko%2Fjsy%2FgDnNflgYYAJx6rPTQDfs6vtFRJ6Sc6FQ%2FsdmI5V5E8tcugIDFvklB4%2B17eBWss39h3wg1uo4z0FshdBKeA%2Bxy1kRUMUKDw8345Dy9Xj4Zxim%2Fja6TdTQq%2BTxMD4yC1yPhkOz3Dq6KDRNsjdLGvxXzuNFX2g%2F4LFcqAJmGY1dPccer4GpX51NDlH1PA3jUlBFDMS5bBMk3QPhUgv1QnRRToj4PADemuXSDIbJao%2FBTI4y8P9ebFdjvkIuCU5vC5VeskFb4d2%2FqQ6Li1D1wXplGC8W11tt0Vy1iXIbwOHAX%2FKNL46DLViVlNXlPeO7dydQCJwKBVaj6VxFdxIcHydfDqluz8GvjU2IaYBqjEWVSRfOTU4zhTSF3qFYM8TbZbLdTsdy36ALPxd%2BC9KMKgCtBOLf8Lj73ohNRtxp46rJhrqUCdy5d3s2hcP9sJIptWsXFqFbv6P3yrScapTE4LGezJA0Ks2Zc5tRk17KE2RKm6oB0DR9O1rI1EfO1IB%2BHitmEC63cG1ID4V%2BVDmQjFlEG8opo%2By2clV4%2F0UTfzsNk8w2uyRwQY6pgGJWsvxdPiXJqC%2FBf8jiL12gTR3znqURMtZV33vW4%2FHeVj7U%2BCDyqAynQw9aopyO%2F%2ByFZ8W5WbVt%2BtEbCdepm6bCUG0DzRA3lM24Kcb5Lgi6DpbAa368%2F8rPI%2BCDz%2FWjyRPmL0EU0rRZPWEI3zct0gWHi6lVdM7BwJLlhJvC7WoBscMx%2Fjhb%2FRDkWMY9lW6V3cPw5jjoyp8ZsQs703MBJya2AgxU6qO&X-Amz-Signature=610a625d4bade1407fa23da2ce9c606871a087a61b934ed0acb66ffc3a366e42&X-Amz-SignedHeaders=host&x-id=GetObject)
