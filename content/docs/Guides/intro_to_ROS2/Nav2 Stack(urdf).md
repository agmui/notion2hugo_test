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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7PF7SQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCsLgB0Wj7lGnyv%2Fy1RoFDi62AI2ZIDmET8JyZYL1tRZAIhAKyla483KZ%2FgKhhnMAPyitsSmWXbD5ooKGNJQjD%2FNoL0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd4NsGvWXnMFSHDTUq3AOWHO22aWtzUMj8DMghxMzVPYQDXRTjpdDRZDkOu3okNqJOVB8M9ixDUhS8PAMh%2B%2Fe%2B1KSY8BMrFuWdMAT3CnQDo9TnboKEK6xuwqwZ1Mt5zKqpxEIS%2BWMxcIkL38ljRaQeFVxI9b8BPOstBEEFTQua9CNj%2Bjhbl4j4XNqx9tlxILribotj3S%2F7qlV%2F56uk0B7VWMDh4LtoMlvavYvXhBgMCdp4AsHuLsR524R6N1%2BZKiOz8dKX46FZZfYvsoSF30bhnDlp5IDDag5nRhzV6JwOP%2Fjnwl77e%2FFNWrcdKqWPo38Qbig8OiTgVFsbVOFq1KINBHwSp5TVorExdxPAOAruVfjrji0UrgCRsLhRQJBJt26wbE6xvQgUQl405%2FHZ7g47AaGG58DR%2B6P1OHnWartds9CcM8Ur94AbU6M2JrZ9LcYes2xZpzw7bRyMQNvLj9dRdFB1yBxIuEuR9VKMRbw%2FN1QnYg7D5IbljXGpclZv9FayVXaumtELABvHP7q0KQDc%2Fvd1uNb%2F0GolhfpogUf93r8HW9HZNV53Yajwvqt9nm3AGde9lCkN5LXbYUGblJ0avV94ca%2B3Pguhyin1Ri6EZZleg9jfUOQbOqqyrANoM1cDqMcr%2FjYo9alxZTDjpLa%2FBjqkAfXn7q3HWY5HMPTDrrWRvwXV%2FpW5XD50OhtEhG4wsosPV0m9Kwxs%2FxHWxtp%2FZkFnaw1ukZ2OEME%2FjXatisoriYDnmdG94HODII%2BMfW%2FEpt4pqOY9rRIz8X9GUyyWldKRN4OV6a9EZFXwb4Zpe1okvHr%2Bky4YIZ0f%2BJmFuXle92oalB1Ok0WSpCjEXWl6EY6%2BcWDKfFHUv%2BtqvASpw1yDsy8xyo74&X-Amz-Signature=a81c87f1ba14868dacd981f942e2663ebecea59459dc9a85fe8d7bb77d126d62&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7PF7SQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCsLgB0Wj7lGnyv%2Fy1RoFDi62AI2ZIDmET8JyZYL1tRZAIhAKyla483KZ%2FgKhhnMAPyitsSmWXbD5ooKGNJQjD%2FNoL0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd4NsGvWXnMFSHDTUq3AOWHO22aWtzUMj8DMghxMzVPYQDXRTjpdDRZDkOu3okNqJOVB8M9ixDUhS8PAMh%2B%2Fe%2B1KSY8BMrFuWdMAT3CnQDo9TnboKEK6xuwqwZ1Mt5zKqpxEIS%2BWMxcIkL38ljRaQeFVxI9b8BPOstBEEFTQua9CNj%2Bjhbl4j4XNqx9tlxILribotj3S%2F7qlV%2F56uk0B7VWMDh4LtoMlvavYvXhBgMCdp4AsHuLsR524R6N1%2BZKiOz8dKX46FZZfYvsoSF30bhnDlp5IDDag5nRhzV6JwOP%2Fjnwl77e%2FFNWrcdKqWPo38Qbig8OiTgVFsbVOFq1KINBHwSp5TVorExdxPAOAruVfjrji0UrgCRsLhRQJBJt26wbE6xvQgUQl405%2FHZ7g47AaGG58DR%2B6P1OHnWartds9CcM8Ur94AbU6M2JrZ9LcYes2xZpzw7bRyMQNvLj9dRdFB1yBxIuEuR9VKMRbw%2FN1QnYg7D5IbljXGpclZv9FayVXaumtELABvHP7q0KQDc%2Fvd1uNb%2F0GolhfpogUf93r8HW9HZNV53Yajwvqt9nm3AGde9lCkN5LXbYUGblJ0avV94ca%2B3Pguhyin1Ri6EZZleg9jfUOQbOqqyrANoM1cDqMcr%2FjYo9alxZTDjpLa%2FBjqkAfXn7q3HWY5HMPTDrrWRvwXV%2FpW5XD50OhtEhG4wsosPV0m9Kwxs%2FxHWxtp%2FZkFnaw1ukZ2OEME%2FjXatisoriYDnmdG94HODII%2BMfW%2FEpt4pqOY9rRIz8X9GUyyWldKRN4OV6a9EZFXwb4Zpe1okvHr%2Bky4YIZ0f%2BJmFuXle92oalB1Ok0WSpCjEXWl6EY6%2BcWDKfFHUv%2BtqvASpw1yDsy8xyo74&X-Amz-Signature=e803120b76f77360b711f219df6f0dddc92811a6bb7c4a9dfd6c8e4319ecab24&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7PF7SQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCsLgB0Wj7lGnyv%2Fy1RoFDi62AI2ZIDmET8JyZYL1tRZAIhAKyla483KZ%2FgKhhnMAPyitsSmWXbD5ooKGNJQjD%2FNoL0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd4NsGvWXnMFSHDTUq3AOWHO22aWtzUMj8DMghxMzVPYQDXRTjpdDRZDkOu3okNqJOVB8M9ixDUhS8PAMh%2B%2Fe%2B1KSY8BMrFuWdMAT3CnQDo9TnboKEK6xuwqwZ1Mt5zKqpxEIS%2BWMxcIkL38ljRaQeFVxI9b8BPOstBEEFTQua9CNj%2Bjhbl4j4XNqx9tlxILribotj3S%2F7qlV%2F56uk0B7VWMDh4LtoMlvavYvXhBgMCdp4AsHuLsR524R6N1%2BZKiOz8dKX46FZZfYvsoSF30bhnDlp5IDDag5nRhzV6JwOP%2Fjnwl77e%2FFNWrcdKqWPo38Qbig8OiTgVFsbVOFq1KINBHwSp5TVorExdxPAOAruVfjrji0UrgCRsLhRQJBJt26wbE6xvQgUQl405%2FHZ7g47AaGG58DR%2B6P1OHnWartds9CcM8Ur94AbU6M2JrZ9LcYes2xZpzw7bRyMQNvLj9dRdFB1yBxIuEuR9VKMRbw%2FN1QnYg7D5IbljXGpclZv9FayVXaumtELABvHP7q0KQDc%2Fvd1uNb%2F0GolhfpogUf93r8HW9HZNV53Yajwvqt9nm3AGde9lCkN5LXbYUGblJ0avV94ca%2B3Pguhyin1Ri6EZZleg9jfUOQbOqqyrANoM1cDqMcr%2FjYo9alxZTDjpLa%2FBjqkAfXn7q3HWY5HMPTDrrWRvwXV%2FpW5XD50OhtEhG4wsosPV0m9Kwxs%2FxHWxtp%2FZkFnaw1ukZ2OEME%2FjXatisoriYDnmdG94HODII%2BMfW%2FEpt4pqOY9rRIz8X9GUyyWldKRN4OV6a9EZFXwb4Zpe1okvHr%2Bky4YIZ0f%2BJmFuXle92oalB1Ok0WSpCjEXWl6EY6%2BcWDKfFHUv%2BtqvASpw1yDsy8xyo74&X-Amz-Signature=98fb31c47abb32b1a984703a1228e32fe272be41d937b32902df7566448dfb67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7PF7SQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCsLgB0Wj7lGnyv%2Fy1RoFDi62AI2ZIDmET8JyZYL1tRZAIhAKyla483KZ%2FgKhhnMAPyitsSmWXbD5ooKGNJQjD%2FNoL0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd4NsGvWXnMFSHDTUq3AOWHO22aWtzUMj8DMghxMzVPYQDXRTjpdDRZDkOu3okNqJOVB8M9ixDUhS8PAMh%2B%2Fe%2B1KSY8BMrFuWdMAT3CnQDo9TnboKEK6xuwqwZ1Mt5zKqpxEIS%2BWMxcIkL38ljRaQeFVxI9b8BPOstBEEFTQua9CNj%2Bjhbl4j4XNqx9tlxILribotj3S%2F7qlV%2F56uk0B7VWMDh4LtoMlvavYvXhBgMCdp4AsHuLsR524R6N1%2BZKiOz8dKX46FZZfYvsoSF30bhnDlp5IDDag5nRhzV6JwOP%2Fjnwl77e%2FFNWrcdKqWPo38Qbig8OiTgVFsbVOFq1KINBHwSp5TVorExdxPAOAruVfjrji0UrgCRsLhRQJBJt26wbE6xvQgUQl405%2FHZ7g47AaGG58DR%2B6P1OHnWartds9CcM8Ur94AbU6M2JrZ9LcYes2xZpzw7bRyMQNvLj9dRdFB1yBxIuEuR9VKMRbw%2FN1QnYg7D5IbljXGpclZv9FayVXaumtELABvHP7q0KQDc%2Fvd1uNb%2F0GolhfpogUf93r8HW9HZNV53Yajwvqt9nm3AGde9lCkN5LXbYUGblJ0avV94ca%2B3Pguhyin1Ri6EZZleg9jfUOQbOqqyrANoM1cDqMcr%2FjYo9alxZTDjpLa%2FBjqkAfXn7q3HWY5HMPTDrrWRvwXV%2FpW5XD50OhtEhG4wsosPV0m9Kwxs%2FxHWxtp%2FZkFnaw1ukZ2OEME%2FjXatisoriYDnmdG94HODII%2BMfW%2FEpt4pqOY9rRIz8X9GUyyWldKRN4OV6a9EZFXwb4Zpe1okvHr%2Bky4YIZ0f%2BJmFuXle92oalB1Ok0WSpCjEXWl6EY6%2BcWDKfFHUv%2BtqvASpw1yDsy8xyo74&X-Amz-Signature=1018c9947f2c7e382aecb84a25ace45f583b618b5b1a7e8910731ec04ba8fb52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7PF7SQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCsLgB0Wj7lGnyv%2Fy1RoFDi62AI2ZIDmET8JyZYL1tRZAIhAKyla483KZ%2FgKhhnMAPyitsSmWXbD5ooKGNJQjD%2FNoL0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd4NsGvWXnMFSHDTUq3AOWHO22aWtzUMj8DMghxMzVPYQDXRTjpdDRZDkOu3okNqJOVB8M9ixDUhS8PAMh%2B%2Fe%2B1KSY8BMrFuWdMAT3CnQDo9TnboKEK6xuwqwZ1Mt5zKqpxEIS%2BWMxcIkL38ljRaQeFVxI9b8BPOstBEEFTQua9CNj%2Bjhbl4j4XNqx9tlxILribotj3S%2F7qlV%2F56uk0B7VWMDh4LtoMlvavYvXhBgMCdp4AsHuLsR524R6N1%2BZKiOz8dKX46FZZfYvsoSF30bhnDlp5IDDag5nRhzV6JwOP%2Fjnwl77e%2FFNWrcdKqWPo38Qbig8OiTgVFsbVOFq1KINBHwSp5TVorExdxPAOAruVfjrji0UrgCRsLhRQJBJt26wbE6xvQgUQl405%2FHZ7g47AaGG58DR%2B6P1OHnWartds9CcM8Ur94AbU6M2JrZ9LcYes2xZpzw7bRyMQNvLj9dRdFB1yBxIuEuR9VKMRbw%2FN1QnYg7D5IbljXGpclZv9FayVXaumtELABvHP7q0KQDc%2Fvd1uNb%2F0GolhfpogUf93r8HW9HZNV53Yajwvqt9nm3AGde9lCkN5LXbYUGblJ0avV94ca%2B3Pguhyin1Ri6EZZleg9jfUOQbOqqyrANoM1cDqMcr%2FjYo9alxZTDjpLa%2FBjqkAfXn7q3HWY5HMPTDrrWRvwXV%2FpW5XD50OhtEhG4wsosPV0m9Kwxs%2FxHWxtp%2FZkFnaw1ukZ2OEME%2FjXatisoriYDnmdG94HODII%2BMfW%2FEpt4pqOY9rRIz8X9GUyyWldKRN4OV6a9EZFXwb4Zpe1okvHr%2Bky4YIZ0f%2BJmFuXle92oalB1Ok0WSpCjEXWl6EY6%2BcWDKfFHUv%2BtqvASpw1yDsy8xyo74&X-Amz-Signature=f3b403d6499e6f7c89ff28b24ab7d7b6d13b523793eb307e9867dc4125a1ab23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7PF7SQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCsLgB0Wj7lGnyv%2Fy1RoFDi62AI2ZIDmET8JyZYL1tRZAIhAKyla483KZ%2FgKhhnMAPyitsSmWXbD5ooKGNJQjD%2FNoL0KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd4NsGvWXnMFSHDTUq3AOWHO22aWtzUMj8DMghxMzVPYQDXRTjpdDRZDkOu3okNqJOVB8M9ixDUhS8PAMh%2B%2Fe%2B1KSY8BMrFuWdMAT3CnQDo9TnboKEK6xuwqwZ1Mt5zKqpxEIS%2BWMxcIkL38ljRaQeFVxI9b8BPOstBEEFTQua9CNj%2Bjhbl4j4XNqx9tlxILribotj3S%2F7qlV%2F56uk0B7VWMDh4LtoMlvavYvXhBgMCdp4AsHuLsR524R6N1%2BZKiOz8dKX46FZZfYvsoSF30bhnDlp5IDDag5nRhzV6JwOP%2Fjnwl77e%2FFNWrcdKqWPo38Qbig8OiTgVFsbVOFq1KINBHwSp5TVorExdxPAOAruVfjrji0UrgCRsLhRQJBJt26wbE6xvQgUQl405%2FHZ7g47AaGG58DR%2B6P1OHnWartds9CcM8Ur94AbU6M2JrZ9LcYes2xZpzw7bRyMQNvLj9dRdFB1yBxIuEuR9VKMRbw%2FN1QnYg7D5IbljXGpclZv9FayVXaumtELABvHP7q0KQDc%2Fvd1uNb%2F0GolhfpogUf93r8HW9HZNV53Yajwvqt9nm3AGde9lCkN5LXbYUGblJ0avV94ca%2B3Pguhyin1Ri6EZZleg9jfUOQbOqqyrANoM1cDqMcr%2FjYo9alxZTDjpLa%2FBjqkAfXn7q3HWY5HMPTDrrWRvwXV%2FpW5XD50OhtEhG4wsosPV0m9Kwxs%2FxHWxtp%2FZkFnaw1ukZ2OEME%2FjXatisoriYDnmdG94HODII%2BMfW%2FEpt4pqOY9rRIz8X9GUyyWldKRN4OV6a9EZFXwb4Zpe1okvHr%2Bky4YIZ0f%2BJmFuXle92oalB1Ok0WSpCjEXWl6EY6%2BcWDKfFHUv%2BtqvASpw1yDsy8xyo74&X-Amz-Signature=dc5176b0dafc4dab137095c2fe26d1e84883782edff16b55d00dfc43f9d78909&X-Amz-SignedHeaders=host&x-id=GetObject)
