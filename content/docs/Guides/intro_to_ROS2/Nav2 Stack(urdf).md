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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWFARLQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfrTQQZsHuLJOYyxyZPbMNMqkIIp8hMuD%2FEI59AKe8DgIhAIZOBC%2BaG3H1HaTZbWc38%2F4QiiLMoHhRC2LKeK61P%2FT5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN%2BJaDpAKZ%2FnMXC8q3AMHiTxDP0C9OU00XGm6wgKDJICmbukf8fdK2aN%2B5ZGwxuUaS51PrFlmmpgzetWUrZSCEFXahMW%2FMD8tZutddbLVY4scRkNg%2BoqyxoPYEjnwX0mwktZrPbrDT1xrqGU9HfJrtZYsk6kQLpElxu%2BfgRtqXeWWrc83b5Q9RL1fO7MHyvslbbNFzaEt%2F7Hnwf4tQxxhvkCyboGcbU3fCTIP5ZkSruZ3u2ahwbOwsyCzjVWlT7JmVYLbfWEzEUcTNmEB2%2FYjGXC9zyoPWKvqBxBcyIW0qU37dantWwFaaTFMtiVFbNwrwq0rOm1p7A2sDsMzvwXe3F8MYe1ze0QICuLmCAdBouqZbmbAGCRcyA5Frr%2BUV1ZN5qJfVGreyKmZ7cTCcN4HXDcmQdHWPjaJEn8zZ2PX4uxnXjvNxXO09G2oWbnbxro5xRB7eHhy7FAFsYwPcqzMKRne9twSczN1zXki%2BXaqMdyH9SkqY3v6hty2Dn1a2jcK6L%2FfPfimIdfVIcsLNHum%2BSkX3ZvoRSAtWsAwC7BUgCKP7HBwYkSyclS6%2BB5kBTbhf%2B6IiJlk5phHcIdO7%2B4vkgKjTYAqBZTpIRU%2BwCGjqmXBhbvXsyJN5k6X%2FMCAbH9XBMMqXxoIq%2Be9DTDtj9vCBjqkAfVmilFOG2D%2Bp9F%2F6gBjbuO%2F7bbkGrbKrlWRVxJ6zixQ0%2FxJf5f7ouHD0jdQrZGzyt9pE9uodcKRzucs1asSH4xxBbE8%2BEx2SxpRUhCerwDzhrwew%2B6HTf5n4II2cbjZ6afjXikelfPDZca9KwKF70%2B93o4qMvj6C5CLrvwBf75gJYcjj0sO19nliyKQsjoZ2pcAPYfb4wUH4YAOBQNrG4Hg0qSy&X-Amz-Signature=ef5ca992378d7a0cee132e234580331af33ac8a0a59bac8936504903995daac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWFARLQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfrTQQZsHuLJOYyxyZPbMNMqkIIp8hMuD%2FEI59AKe8DgIhAIZOBC%2BaG3H1HaTZbWc38%2F4QiiLMoHhRC2LKeK61P%2FT5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN%2BJaDpAKZ%2FnMXC8q3AMHiTxDP0C9OU00XGm6wgKDJICmbukf8fdK2aN%2B5ZGwxuUaS51PrFlmmpgzetWUrZSCEFXahMW%2FMD8tZutddbLVY4scRkNg%2BoqyxoPYEjnwX0mwktZrPbrDT1xrqGU9HfJrtZYsk6kQLpElxu%2BfgRtqXeWWrc83b5Q9RL1fO7MHyvslbbNFzaEt%2F7Hnwf4tQxxhvkCyboGcbU3fCTIP5ZkSruZ3u2ahwbOwsyCzjVWlT7JmVYLbfWEzEUcTNmEB2%2FYjGXC9zyoPWKvqBxBcyIW0qU37dantWwFaaTFMtiVFbNwrwq0rOm1p7A2sDsMzvwXe3F8MYe1ze0QICuLmCAdBouqZbmbAGCRcyA5Frr%2BUV1ZN5qJfVGreyKmZ7cTCcN4HXDcmQdHWPjaJEn8zZ2PX4uxnXjvNxXO09G2oWbnbxro5xRB7eHhy7FAFsYwPcqzMKRne9twSczN1zXki%2BXaqMdyH9SkqY3v6hty2Dn1a2jcK6L%2FfPfimIdfVIcsLNHum%2BSkX3ZvoRSAtWsAwC7BUgCKP7HBwYkSyclS6%2BB5kBTbhf%2B6IiJlk5phHcIdO7%2B4vkgKjTYAqBZTpIRU%2BwCGjqmXBhbvXsyJN5k6X%2FMCAbH9XBMMqXxoIq%2Be9DTDtj9vCBjqkAfVmilFOG2D%2Bp9F%2F6gBjbuO%2F7bbkGrbKrlWRVxJ6zixQ0%2FxJf5f7ouHD0jdQrZGzyt9pE9uodcKRzucs1asSH4xxBbE8%2BEx2SxpRUhCerwDzhrwew%2B6HTf5n4II2cbjZ6afjXikelfPDZca9KwKF70%2B93o4qMvj6C5CLrvwBf75gJYcjj0sO19nliyKQsjoZ2pcAPYfb4wUH4YAOBQNrG4Hg0qSy&X-Amz-Signature=0ba51ee4353485550cf155dedd6ef0ec77c48aa9b083fb851de474b1ef77a216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWFARLQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfrTQQZsHuLJOYyxyZPbMNMqkIIp8hMuD%2FEI59AKe8DgIhAIZOBC%2BaG3H1HaTZbWc38%2F4QiiLMoHhRC2LKeK61P%2FT5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN%2BJaDpAKZ%2FnMXC8q3AMHiTxDP0C9OU00XGm6wgKDJICmbukf8fdK2aN%2B5ZGwxuUaS51PrFlmmpgzetWUrZSCEFXahMW%2FMD8tZutddbLVY4scRkNg%2BoqyxoPYEjnwX0mwktZrPbrDT1xrqGU9HfJrtZYsk6kQLpElxu%2BfgRtqXeWWrc83b5Q9RL1fO7MHyvslbbNFzaEt%2F7Hnwf4tQxxhvkCyboGcbU3fCTIP5ZkSruZ3u2ahwbOwsyCzjVWlT7JmVYLbfWEzEUcTNmEB2%2FYjGXC9zyoPWKvqBxBcyIW0qU37dantWwFaaTFMtiVFbNwrwq0rOm1p7A2sDsMzvwXe3F8MYe1ze0QICuLmCAdBouqZbmbAGCRcyA5Frr%2BUV1ZN5qJfVGreyKmZ7cTCcN4HXDcmQdHWPjaJEn8zZ2PX4uxnXjvNxXO09G2oWbnbxro5xRB7eHhy7FAFsYwPcqzMKRne9twSczN1zXki%2BXaqMdyH9SkqY3v6hty2Dn1a2jcK6L%2FfPfimIdfVIcsLNHum%2BSkX3ZvoRSAtWsAwC7BUgCKP7HBwYkSyclS6%2BB5kBTbhf%2B6IiJlk5phHcIdO7%2B4vkgKjTYAqBZTpIRU%2BwCGjqmXBhbvXsyJN5k6X%2FMCAbH9XBMMqXxoIq%2Be9DTDtj9vCBjqkAfVmilFOG2D%2Bp9F%2F6gBjbuO%2F7bbkGrbKrlWRVxJ6zixQ0%2FxJf5f7ouHD0jdQrZGzyt9pE9uodcKRzucs1asSH4xxBbE8%2BEx2SxpRUhCerwDzhrwew%2B6HTf5n4II2cbjZ6afjXikelfPDZca9KwKF70%2B93o4qMvj6C5CLrvwBf75gJYcjj0sO19nliyKQsjoZ2pcAPYfb4wUH4YAOBQNrG4Hg0qSy&X-Amz-Signature=bec0ee59e7facfe5cbaa4944d4d2d6db731ab8909fabcce241e3d5b68428cb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWFARLQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfrTQQZsHuLJOYyxyZPbMNMqkIIp8hMuD%2FEI59AKe8DgIhAIZOBC%2BaG3H1HaTZbWc38%2F4QiiLMoHhRC2LKeK61P%2FT5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN%2BJaDpAKZ%2FnMXC8q3AMHiTxDP0C9OU00XGm6wgKDJICmbukf8fdK2aN%2B5ZGwxuUaS51PrFlmmpgzetWUrZSCEFXahMW%2FMD8tZutddbLVY4scRkNg%2BoqyxoPYEjnwX0mwktZrPbrDT1xrqGU9HfJrtZYsk6kQLpElxu%2BfgRtqXeWWrc83b5Q9RL1fO7MHyvslbbNFzaEt%2F7Hnwf4tQxxhvkCyboGcbU3fCTIP5ZkSruZ3u2ahwbOwsyCzjVWlT7JmVYLbfWEzEUcTNmEB2%2FYjGXC9zyoPWKvqBxBcyIW0qU37dantWwFaaTFMtiVFbNwrwq0rOm1p7A2sDsMzvwXe3F8MYe1ze0QICuLmCAdBouqZbmbAGCRcyA5Frr%2BUV1ZN5qJfVGreyKmZ7cTCcN4HXDcmQdHWPjaJEn8zZ2PX4uxnXjvNxXO09G2oWbnbxro5xRB7eHhy7FAFsYwPcqzMKRne9twSczN1zXki%2BXaqMdyH9SkqY3v6hty2Dn1a2jcK6L%2FfPfimIdfVIcsLNHum%2BSkX3ZvoRSAtWsAwC7BUgCKP7HBwYkSyclS6%2BB5kBTbhf%2B6IiJlk5phHcIdO7%2B4vkgKjTYAqBZTpIRU%2BwCGjqmXBhbvXsyJN5k6X%2FMCAbH9XBMMqXxoIq%2Be9DTDtj9vCBjqkAfVmilFOG2D%2Bp9F%2F6gBjbuO%2F7bbkGrbKrlWRVxJ6zixQ0%2FxJf5f7ouHD0jdQrZGzyt9pE9uodcKRzucs1asSH4xxBbE8%2BEx2SxpRUhCerwDzhrwew%2B6HTf5n4II2cbjZ6afjXikelfPDZca9KwKF70%2B93o4qMvj6C5CLrvwBf75gJYcjj0sO19nliyKQsjoZ2pcAPYfb4wUH4YAOBQNrG4Hg0qSy&X-Amz-Signature=1ead60d4d20864d3546f3cde26597ce59f5a41c9ec3ef52ec0506827123a0f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWFARLQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfrTQQZsHuLJOYyxyZPbMNMqkIIp8hMuD%2FEI59AKe8DgIhAIZOBC%2BaG3H1HaTZbWc38%2F4QiiLMoHhRC2LKeK61P%2FT5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN%2BJaDpAKZ%2FnMXC8q3AMHiTxDP0C9OU00XGm6wgKDJICmbukf8fdK2aN%2B5ZGwxuUaS51PrFlmmpgzetWUrZSCEFXahMW%2FMD8tZutddbLVY4scRkNg%2BoqyxoPYEjnwX0mwktZrPbrDT1xrqGU9HfJrtZYsk6kQLpElxu%2BfgRtqXeWWrc83b5Q9RL1fO7MHyvslbbNFzaEt%2F7Hnwf4tQxxhvkCyboGcbU3fCTIP5ZkSruZ3u2ahwbOwsyCzjVWlT7JmVYLbfWEzEUcTNmEB2%2FYjGXC9zyoPWKvqBxBcyIW0qU37dantWwFaaTFMtiVFbNwrwq0rOm1p7A2sDsMzvwXe3F8MYe1ze0QICuLmCAdBouqZbmbAGCRcyA5Frr%2BUV1ZN5qJfVGreyKmZ7cTCcN4HXDcmQdHWPjaJEn8zZ2PX4uxnXjvNxXO09G2oWbnbxro5xRB7eHhy7FAFsYwPcqzMKRne9twSczN1zXki%2BXaqMdyH9SkqY3v6hty2Dn1a2jcK6L%2FfPfimIdfVIcsLNHum%2BSkX3ZvoRSAtWsAwC7BUgCKP7HBwYkSyclS6%2BB5kBTbhf%2B6IiJlk5phHcIdO7%2B4vkgKjTYAqBZTpIRU%2BwCGjqmXBhbvXsyJN5k6X%2FMCAbH9XBMMqXxoIq%2Be9DTDtj9vCBjqkAfVmilFOG2D%2Bp9F%2F6gBjbuO%2F7bbkGrbKrlWRVxJ6zixQ0%2FxJf5f7ouHD0jdQrZGzyt9pE9uodcKRzucs1asSH4xxBbE8%2BEx2SxpRUhCerwDzhrwew%2B6HTf5n4II2cbjZ6afjXikelfPDZca9KwKF70%2B93o4qMvj6C5CLrvwBf75gJYcjj0sO19nliyKQsjoZ2pcAPYfb4wUH4YAOBQNrG4Hg0qSy&X-Amz-Signature=f636042d61280934776d7e1bfe3d6ef4dfe7a682a61b84ae1397ad3f9fb01382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWFARLQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfrTQQZsHuLJOYyxyZPbMNMqkIIp8hMuD%2FEI59AKe8DgIhAIZOBC%2BaG3H1HaTZbWc38%2F4QiiLMoHhRC2LKeK61P%2FT5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN%2BJaDpAKZ%2FnMXC8q3AMHiTxDP0C9OU00XGm6wgKDJICmbukf8fdK2aN%2B5ZGwxuUaS51PrFlmmpgzetWUrZSCEFXahMW%2FMD8tZutddbLVY4scRkNg%2BoqyxoPYEjnwX0mwktZrPbrDT1xrqGU9HfJrtZYsk6kQLpElxu%2BfgRtqXeWWrc83b5Q9RL1fO7MHyvslbbNFzaEt%2F7Hnwf4tQxxhvkCyboGcbU3fCTIP5ZkSruZ3u2ahwbOwsyCzjVWlT7JmVYLbfWEzEUcTNmEB2%2FYjGXC9zyoPWKvqBxBcyIW0qU37dantWwFaaTFMtiVFbNwrwq0rOm1p7A2sDsMzvwXe3F8MYe1ze0QICuLmCAdBouqZbmbAGCRcyA5Frr%2BUV1ZN5qJfVGreyKmZ7cTCcN4HXDcmQdHWPjaJEn8zZ2PX4uxnXjvNxXO09G2oWbnbxro5xRB7eHhy7FAFsYwPcqzMKRne9twSczN1zXki%2BXaqMdyH9SkqY3v6hty2Dn1a2jcK6L%2FfPfimIdfVIcsLNHum%2BSkX3ZvoRSAtWsAwC7BUgCKP7HBwYkSyclS6%2BB5kBTbhf%2B6IiJlk5phHcIdO7%2B4vkgKjTYAqBZTpIRU%2BwCGjqmXBhbvXsyJN5k6X%2FMCAbH9XBMMqXxoIq%2Be9DTDtj9vCBjqkAfVmilFOG2D%2Bp9F%2F6gBjbuO%2F7bbkGrbKrlWRVxJ6zixQ0%2FxJf5f7ouHD0jdQrZGzyt9pE9uodcKRzucs1asSH4xxBbE8%2BEx2SxpRUhCerwDzhrwew%2B6HTf5n4II2cbjZ6afjXikelfPDZca9KwKF70%2B93o4qMvj6C5CLrvwBf75gJYcjj0sO19nliyKQsjoZ2pcAPYfb4wUH4YAOBQNrG4Hg0qSy&X-Amz-Signature=95c3e773b6961dd6144dcc97b7774f9f58c2fd90f91769c70393b5d7025af3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
