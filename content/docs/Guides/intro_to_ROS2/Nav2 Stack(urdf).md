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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT224ZQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEhDnAn2unIymnth5XKpYHOaMr5zLgKZH6IY3OX7u1zKAiB9IzFa7HlI4kIwAWgnSMejM7K1ua9Ib2lMxr7UiTpKSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMg%2BTB0gnhkxwQSu4hKtwDO7CfctTik7lS6OUEw4bZpLB6VspkOJRab8XWenJt7vU3ZqjjonmvpYu8EGywb9NyJ2dXWzA1K2gStL9bcw0br8GS9u5TPJISJpKNdccw7q6smvDBZOAUMpeXpFbDPHE26Temw4BBEcwCNV%2ByJNHis4KVqPtHRPPIDeEdUlzHLQPReGOyv67KJ6aBJl8NZL7v9du48G3MKP9OFBcXA%2FZr0kuEjlOqBlRrJifM8bU2DCp7Ww1P4NNjbmCfQNwb2GaNHFAmq86Ngo%2BwI%2FNpIK67GkgLo7Nhd7VdMaaTl9L0voElnOIT%2FzBkHLEfIBUvyw%2BVHUBCIe3klbufOlszPyG%2B61RXHb%2FdnjHIePk0Xh6r5NXN%2FlO98VQHqRwUlow8DrgAW4iXQk6AeTfuBSzmyTj7z2bFKVsFnL0jeF00%2FfDvBYum1Xm8ICJcMM1UE96niJTkwd7x94TGjTaSfvj0QRHhlDFx8qVPwalnaic3AGlq7ZnsHgDgUUiOHDW7tDqhpmOB3xcV9I9xTi8FaTmWxPliybeyUwcsUehmhMVBE3t4Z9EllpZPm0PznqFS0JixrZVylsxXVH%2Fa5JXIbiJ1E%2BIuRmQZoaYOsklOyaGnIqFJeRYV7naGNOZss%2Fq5e20w3%2Bb7wQY6pgHETCdZjlEw69cUMGHGdnOKNmm4KybF5gPSiffCmyJ4XxgfQCKb9BjmpU8Gu8TSYQSjgp740TS4cji3rAMnqp84VAZK7ElFuElECksckNKKFEhaZzr3IvLukBlZKJGls0dOyohQNNRB1T%2BLonWXNitekzVmqap01ifi0MNcl6D278otY9Iz0cFLtWBzlXa3IQvOubjT3L0GU8og6VsGFp%2F3wfbzLEVY&X-Amz-Signature=e00108b5919d3e3f29f83bef45a99e46affe112137cde176f2c0f43f576e6ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT224ZQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEhDnAn2unIymnth5XKpYHOaMr5zLgKZH6IY3OX7u1zKAiB9IzFa7HlI4kIwAWgnSMejM7K1ua9Ib2lMxr7UiTpKSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMg%2BTB0gnhkxwQSu4hKtwDO7CfctTik7lS6OUEw4bZpLB6VspkOJRab8XWenJt7vU3ZqjjonmvpYu8EGywb9NyJ2dXWzA1K2gStL9bcw0br8GS9u5TPJISJpKNdccw7q6smvDBZOAUMpeXpFbDPHE26Temw4BBEcwCNV%2ByJNHis4KVqPtHRPPIDeEdUlzHLQPReGOyv67KJ6aBJl8NZL7v9du48G3MKP9OFBcXA%2FZr0kuEjlOqBlRrJifM8bU2DCp7Ww1P4NNjbmCfQNwb2GaNHFAmq86Ngo%2BwI%2FNpIK67GkgLo7Nhd7VdMaaTl9L0voElnOIT%2FzBkHLEfIBUvyw%2BVHUBCIe3klbufOlszPyG%2B61RXHb%2FdnjHIePk0Xh6r5NXN%2FlO98VQHqRwUlow8DrgAW4iXQk6AeTfuBSzmyTj7z2bFKVsFnL0jeF00%2FfDvBYum1Xm8ICJcMM1UE96niJTkwd7x94TGjTaSfvj0QRHhlDFx8qVPwalnaic3AGlq7ZnsHgDgUUiOHDW7tDqhpmOB3xcV9I9xTi8FaTmWxPliybeyUwcsUehmhMVBE3t4Z9EllpZPm0PznqFS0JixrZVylsxXVH%2Fa5JXIbiJ1E%2BIuRmQZoaYOsklOyaGnIqFJeRYV7naGNOZss%2Fq5e20w3%2Bb7wQY6pgHETCdZjlEw69cUMGHGdnOKNmm4KybF5gPSiffCmyJ4XxgfQCKb9BjmpU8Gu8TSYQSjgp740TS4cji3rAMnqp84VAZK7ElFuElECksckNKKFEhaZzr3IvLukBlZKJGls0dOyohQNNRB1T%2BLonWXNitekzVmqap01ifi0MNcl6D278otY9Iz0cFLtWBzlXa3IQvOubjT3L0GU8og6VsGFp%2F3wfbzLEVY&X-Amz-Signature=3ae29d9d093286c47ad08f553d82e992c099e37b7c4044de3124d6ea6c981ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT224ZQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEhDnAn2unIymnth5XKpYHOaMr5zLgKZH6IY3OX7u1zKAiB9IzFa7HlI4kIwAWgnSMejM7K1ua9Ib2lMxr7UiTpKSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMg%2BTB0gnhkxwQSu4hKtwDO7CfctTik7lS6OUEw4bZpLB6VspkOJRab8XWenJt7vU3ZqjjonmvpYu8EGywb9NyJ2dXWzA1K2gStL9bcw0br8GS9u5TPJISJpKNdccw7q6smvDBZOAUMpeXpFbDPHE26Temw4BBEcwCNV%2ByJNHis4KVqPtHRPPIDeEdUlzHLQPReGOyv67KJ6aBJl8NZL7v9du48G3MKP9OFBcXA%2FZr0kuEjlOqBlRrJifM8bU2DCp7Ww1P4NNjbmCfQNwb2GaNHFAmq86Ngo%2BwI%2FNpIK67GkgLo7Nhd7VdMaaTl9L0voElnOIT%2FzBkHLEfIBUvyw%2BVHUBCIe3klbufOlszPyG%2B61RXHb%2FdnjHIePk0Xh6r5NXN%2FlO98VQHqRwUlow8DrgAW4iXQk6AeTfuBSzmyTj7z2bFKVsFnL0jeF00%2FfDvBYum1Xm8ICJcMM1UE96niJTkwd7x94TGjTaSfvj0QRHhlDFx8qVPwalnaic3AGlq7ZnsHgDgUUiOHDW7tDqhpmOB3xcV9I9xTi8FaTmWxPliybeyUwcsUehmhMVBE3t4Z9EllpZPm0PznqFS0JixrZVylsxXVH%2Fa5JXIbiJ1E%2BIuRmQZoaYOsklOyaGnIqFJeRYV7naGNOZss%2Fq5e20w3%2Bb7wQY6pgHETCdZjlEw69cUMGHGdnOKNmm4KybF5gPSiffCmyJ4XxgfQCKb9BjmpU8Gu8TSYQSjgp740TS4cji3rAMnqp84VAZK7ElFuElECksckNKKFEhaZzr3IvLukBlZKJGls0dOyohQNNRB1T%2BLonWXNitekzVmqap01ifi0MNcl6D278otY9Iz0cFLtWBzlXa3IQvOubjT3L0GU8og6VsGFp%2F3wfbzLEVY&X-Amz-Signature=1b70623aaa11da903e480cf183ce4fe73c716cfa772440d38646cbd0cc96e8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT224ZQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEhDnAn2unIymnth5XKpYHOaMr5zLgKZH6IY3OX7u1zKAiB9IzFa7HlI4kIwAWgnSMejM7K1ua9Ib2lMxr7UiTpKSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMg%2BTB0gnhkxwQSu4hKtwDO7CfctTik7lS6OUEw4bZpLB6VspkOJRab8XWenJt7vU3ZqjjonmvpYu8EGywb9NyJ2dXWzA1K2gStL9bcw0br8GS9u5TPJISJpKNdccw7q6smvDBZOAUMpeXpFbDPHE26Temw4BBEcwCNV%2ByJNHis4KVqPtHRPPIDeEdUlzHLQPReGOyv67KJ6aBJl8NZL7v9du48G3MKP9OFBcXA%2FZr0kuEjlOqBlRrJifM8bU2DCp7Ww1P4NNjbmCfQNwb2GaNHFAmq86Ngo%2BwI%2FNpIK67GkgLo7Nhd7VdMaaTl9L0voElnOIT%2FzBkHLEfIBUvyw%2BVHUBCIe3klbufOlszPyG%2B61RXHb%2FdnjHIePk0Xh6r5NXN%2FlO98VQHqRwUlow8DrgAW4iXQk6AeTfuBSzmyTj7z2bFKVsFnL0jeF00%2FfDvBYum1Xm8ICJcMM1UE96niJTkwd7x94TGjTaSfvj0QRHhlDFx8qVPwalnaic3AGlq7ZnsHgDgUUiOHDW7tDqhpmOB3xcV9I9xTi8FaTmWxPliybeyUwcsUehmhMVBE3t4Z9EllpZPm0PznqFS0JixrZVylsxXVH%2Fa5JXIbiJ1E%2BIuRmQZoaYOsklOyaGnIqFJeRYV7naGNOZss%2Fq5e20w3%2Bb7wQY6pgHETCdZjlEw69cUMGHGdnOKNmm4KybF5gPSiffCmyJ4XxgfQCKb9BjmpU8Gu8TSYQSjgp740TS4cji3rAMnqp84VAZK7ElFuElECksckNKKFEhaZzr3IvLukBlZKJGls0dOyohQNNRB1T%2BLonWXNitekzVmqap01ifi0MNcl6D278otY9Iz0cFLtWBzlXa3IQvOubjT3L0GU8og6VsGFp%2F3wfbzLEVY&X-Amz-Signature=62be53821c3d6c80f811c16f5a0b86f20d4b3f46965c40768414aee50688bea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT224ZQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEhDnAn2unIymnth5XKpYHOaMr5zLgKZH6IY3OX7u1zKAiB9IzFa7HlI4kIwAWgnSMejM7K1ua9Ib2lMxr7UiTpKSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMg%2BTB0gnhkxwQSu4hKtwDO7CfctTik7lS6OUEw4bZpLB6VspkOJRab8XWenJt7vU3ZqjjonmvpYu8EGywb9NyJ2dXWzA1K2gStL9bcw0br8GS9u5TPJISJpKNdccw7q6smvDBZOAUMpeXpFbDPHE26Temw4BBEcwCNV%2ByJNHis4KVqPtHRPPIDeEdUlzHLQPReGOyv67KJ6aBJl8NZL7v9du48G3MKP9OFBcXA%2FZr0kuEjlOqBlRrJifM8bU2DCp7Ww1P4NNjbmCfQNwb2GaNHFAmq86Ngo%2BwI%2FNpIK67GkgLo7Nhd7VdMaaTl9L0voElnOIT%2FzBkHLEfIBUvyw%2BVHUBCIe3klbufOlszPyG%2B61RXHb%2FdnjHIePk0Xh6r5NXN%2FlO98VQHqRwUlow8DrgAW4iXQk6AeTfuBSzmyTj7z2bFKVsFnL0jeF00%2FfDvBYum1Xm8ICJcMM1UE96niJTkwd7x94TGjTaSfvj0QRHhlDFx8qVPwalnaic3AGlq7ZnsHgDgUUiOHDW7tDqhpmOB3xcV9I9xTi8FaTmWxPliybeyUwcsUehmhMVBE3t4Z9EllpZPm0PznqFS0JixrZVylsxXVH%2Fa5JXIbiJ1E%2BIuRmQZoaYOsklOyaGnIqFJeRYV7naGNOZss%2Fq5e20w3%2Bb7wQY6pgHETCdZjlEw69cUMGHGdnOKNmm4KybF5gPSiffCmyJ4XxgfQCKb9BjmpU8Gu8TSYQSjgp740TS4cji3rAMnqp84VAZK7ElFuElECksckNKKFEhaZzr3IvLukBlZKJGls0dOyohQNNRB1T%2BLonWXNitekzVmqap01ifi0MNcl6D278otY9Iz0cFLtWBzlXa3IQvOubjT3L0GU8og6VsGFp%2F3wfbzLEVY&X-Amz-Signature=2f9084013a2cba2026ac9b7323d36f3b888533d0ce93f8da6717c5f96bb7c7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT224ZQH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEhDnAn2unIymnth5XKpYHOaMr5zLgKZH6IY3OX7u1zKAiB9IzFa7HlI4kIwAWgnSMejM7K1ua9Ib2lMxr7UiTpKSSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMg%2BTB0gnhkxwQSu4hKtwDO7CfctTik7lS6OUEw4bZpLB6VspkOJRab8XWenJt7vU3ZqjjonmvpYu8EGywb9NyJ2dXWzA1K2gStL9bcw0br8GS9u5TPJISJpKNdccw7q6smvDBZOAUMpeXpFbDPHE26Temw4BBEcwCNV%2ByJNHis4KVqPtHRPPIDeEdUlzHLQPReGOyv67KJ6aBJl8NZL7v9du48G3MKP9OFBcXA%2FZr0kuEjlOqBlRrJifM8bU2DCp7Ww1P4NNjbmCfQNwb2GaNHFAmq86Ngo%2BwI%2FNpIK67GkgLo7Nhd7VdMaaTl9L0voElnOIT%2FzBkHLEfIBUvyw%2BVHUBCIe3klbufOlszPyG%2B61RXHb%2FdnjHIePk0Xh6r5NXN%2FlO98VQHqRwUlow8DrgAW4iXQk6AeTfuBSzmyTj7z2bFKVsFnL0jeF00%2FfDvBYum1Xm8ICJcMM1UE96niJTkwd7x94TGjTaSfvj0QRHhlDFx8qVPwalnaic3AGlq7ZnsHgDgUUiOHDW7tDqhpmOB3xcV9I9xTi8FaTmWxPliybeyUwcsUehmhMVBE3t4Z9EllpZPm0PznqFS0JixrZVylsxXVH%2Fa5JXIbiJ1E%2BIuRmQZoaYOsklOyaGnIqFJeRYV7naGNOZss%2Fq5e20w3%2Bb7wQY6pgHETCdZjlEw69cUMGHGdnOKNmm4KybF5gPSiffCmyJ4XxgfQCKb9BjmpU8Gu8TSYQSjgp740TS4cji3rAMnqp84VAZK7ElFuElECksckNKKFEhaZzr3IvLukBlZKJGls0dOyohQNNRB1T%2BLonWXNitekzVmqap01ifi0MNcl6D278otY9Iz0cFLtWBzlXa3IQvOubjT3L0GU8og6VsGFp%2F3wfbzLEVY&X-Amz-Signature=ea331dcd0ce4c5087d6818e2dc4f09db4ad8f589410aaa6a8b4fb710722ee5fb&X-Amz-SignedHeaders=host&x-id=GetObject)
