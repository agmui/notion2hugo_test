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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEZ5ORR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA3%2FZ6XaQKXGOjcRBmzkR3cVpD68SDNV4u5A6jtLngNQAiEApl%2B4%2FbJse01hDvtAUc9khLPbGzrsqdgMrvHJWqoJLikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7BSmK9ccnY3BMqASrcA9gJNPFXTljspcxTKxxtNk27Ngcoipe%2BMr3mKlPWS8I0%2FjYV%2Bm37ySEHjJzm6BYeBIU6KcmFLFw8lQGKE43%2F3sgEcE%2BigDxbNlFPhXG0G6z3LcjAm3RRzXZ4SsNKvgI%2BBwmCQK6tsGKiUnxtzhG7HAIhvmdb%2BfmK%2FA2GAQcbSBG2VAhHfDP17oTdaHi1deCu%2FVek2QPq17tEeNnbLwRV0kvDpRxPv63noqqyAcOQ%2BkfxDpTorkJ1eploAoGzsPPwlsc49h3eS%2BHP4cKDfDv4GhkfDryRg6HAPYDd2z0RiwWEpYmNg2ZMa7h7hJrQHqOBHqfTn0PLmRXng%2FtpJBbkXd81nCEwWmdS2ICNWWm71bvAgJJh4%2B%2B8KloqlICBeorIbceNoJmYhP9yCL7FVRTB%2BD485%2FTWBlBHK5IyuGMk5yHTFiAC55HtqkoTTJKhQIO9VO1mEUhVt6MQi%2FZVlz2hk0KgbU%2BJEroAWIk8y%2B%2BzMdb8bj017qtC5OKLfOlKUlqiZwMDjq%2F2tDFlnNdMv2Ou9vbLJhyb4ceZu0oJXKvYI%2Bt65SqU%2BF%2Fm2SyeMIo4zm98T6c7VJx9YrBIoP%2FlV4TlnN1JaZLA7YuSFsR5O9eSrYCw1KdEAMpjnTbofWBBMMmGnb0GOqUBfhEDokG%2BjilbqKRm75LfLoPqCRgReS3XxYtnGjlHHmWYJUbFnuCu4Ti9kKCYHPhA99SEbEqkpb0vZv04aiFR3v5kXrOCzoeWbKl7mZisYjZWb4u1EZjcZREPsyJnoQq6ltdFgrYbTJLa1q6KHt%2BFUmFcTqRjNrp32ohfM3BfpsZ4bdN7jHqiBQIo7wubbqQX7q5JegTH6wzWBaxAPqxmOfDjBTwq&X-Amz-Signature=d61e6ecdd0945edcac7d54b8eb86f9e09b840eece17c2ab6b99f9ac51072a4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEZ5ORR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA3%2FZ6XaQKXGOjcRBmzkR3cVpD68SDNV4u5A6jtLngNQAiEApl%2B4%2FbJse01hDvtAUc9khLPbGzrsqdgMrvHJWqoJLikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7BSmK9ccnY3BMqASrcA9gJNPFXTljspcxTKxxtNk27Ngcoipe%2BMr3mKlPWS8I0%2FjYV%2Bm37ySEHjJzm6BYeBIU6KcmFLFw8lQGKE43%2F3sgEcE%2BigDxbNlFPhXG0G6z3LcjAm3RRzXZ4SsNKvgI%2BBwmCQK6tsGKiUnxtzhG7HAIhvmdb%2BfmK%2FA2GAQcbSBG2VAhHfDP17oTdaHi1deCu%2FVek2QPq17tEeNnbLwRV0kvDpRxPv63noqqyAcOQ%2BkfxDpTorkJ1eploAoGzsPPwlsc49h3eS%2BHP4cKDfDv4GhkfDryRg6HAPYDd2z0RiwWEpYmNg2ZMa7h7hJrQHqOBHqfTn0PLmRXng%2FtpJBbkXd81nCEwWmdS2ICNWWm71bvAgJJh4%2B%2B8KloqlICBeorIbceNoJmYhP9yCL7FVRTB%2BD485%2FTWBlBHK5IyuGMk5yHTFiAC55HtqkoTTJKhQIO9VO1mEUhVt6MQi%2FZVlz2hk0KgbU%2BJEroAWIk8y%2B%2BzMdb8bj017qtC5OKLfOlKUlqiZwMDjq%2F2tDFlnNdMv2Ou9vbLJhyb4ceZu0oJXKvYI%2Bt65SqU%2BF%2Fm2SyeMIo4zm98T6c7VJx9YrBIoP%2FlV4TlnN1JaZLA7YuSFsR5O9eSrYCw1KdEAMpjnTbofWBBMMmGnb0GOqUBfhEDokG%2BjilbqKRm75LfLoPqCRgReS3XxYtnGjlHHmWYJUbFnuCu4Ti9kKCYHPhA99SEbEqkpb0vZv04aiFR3v5kXrOCzoeWbKl7mZisYjZWb4u1EZjcZREPsyJnoQq6ltdFgrYbTJLa1q6KHt%2BFUmFcTqRjNrp32ohfM3BfpsZ4bdN7jHqiBQIo7wubbqQX7q5JegTH6wzWBaxAPqxmOfDjBTwq&X-Amz-Signature=0b1560a122dcf1741fea79b0cb374200dde1c17c4c299709ef877ac6ff406997&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEZ5ORR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA3%2FZ6XaQKXGOjcRBmzkR3cVpD68SDNV4u5A6jtLngNQAiEApl%2B4%2FbJse01hDvtAUc9khLPbGzrsqdgMrvHJWqoJLikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7BSmK9ccnY3BMqASrcA9gJNPFXTljspcxTKxxtNk27Ngcoipe%2BMr3mKlPWS8I0%2FjYV%2Bm37ySEHjJzm6BYeBIU6KcmFLFw8lQGKE43%2F3sgEcE%2BigDxbNlFPhXG0G6z3LcjAm3RRzXZ4SsNKvgI%2BBwmCQK6tsGKiUnxtzhG7HAIhvmdb%2BfmK%2FA2GAQcbSBG2VAhHfDP17oTdaHi1deCu%2FVek2QPq17tEeNnbLwRV0kvDpRxPv63noqqyAcOQ%2BkfxDpTorkJ1eploAoGzsPPwlsc49h3eS%2BHP4cKDfDv4GhkfDryRg6HAPYDd2z0RiwWEpYmNg2ZMa7h7hJrQHqOBHqfTn0PLmRXng%2FtpJBbkXd81nCEwWmdS2ICNWWm71bvAgJJh4%2B%2B8KloqlICBeorIbceNoJmYhP9yCL7FVRTB%2BD485%2FTWBlBHK5IyuGMk5yHTFiAC55HtqkoTTJKhQIO9VO1mEUhVt6MQi%2FZVlz2hk0KgbU%2BJEroAWIk8y%2B%2BzMdb8bj017qtC5OKLfOlKUlqiZwMDjq%2F2tDFlnNdMv2Ou9vbLJhyb4ceZu0oJXKvYI%2Bt65SqU%2BF%2Fm2SyeMIo4zm98T6c7VJx9YrBIoP%2FlV4TlnN1JaZLA7YuSFsR5O9eSrYCw1KdEAMpjnTbofWBBMMmGnb0GOqUBfhEDokG%2BjilbqKRm75LfLoPqCRgReS3XxYtnGjlHHmWYJUbFnuCu4Ti9kKCYHPhA99SEbEqkpb0vZv04aiFR3v5kXrOCzoeWbKl7mZisYjZWb4u1EZjcZREPsyJnoQq6ltdFgrYbTJLa1q6KHt%2BFUmFcTqRjNrp32ohfM3BfpsZ4bdN7jHqiBQIo7wubbqQX7q5JegTH6wzWBaxAPqxmOfDjBTwq&X-Amz-Signature=e2e599c663040b91faf70bd28286d77309f78ab51879f83aaae827b852f550f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEZ5ORR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA3%2FZ6XaQKXGOjcRBmzkR3cVpD68SDNV4u5A6jtLngNQAiEApl%2B4%2FbJse01hDvtAUc9khLPbGzrsqdgMrvHJWqoJLikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7BSmK9ccnY3BMqASrcA9gJNPFXTljspcxTKxxtNk27Ngcoipe%2BMr3mKlPWS8I0%2FjYV%2Bm37ySEHjJzm6BYeBIU6KcmFLFw8lQGKE43%2F3sgEcE%2BigDxbNlFPhXG0G6z3LcjAm3RRzXZ4SsNKvgI%2BBwmCQK6tsGKiUnxtzhG7HAIhvmdb%2BfmK%2FA2GAQcbSBG2VAhHfDP17oTdaHi1deCu%2FVek2QPq17tEeNnbLwRV0kvDpRxPv63noqqyAcOQ%2BkfxDpTorkJ1eploAoGzsPPwlsc49h3eS%2BHP4cKDfDv4GhkfDryRg6HAPYDd2z0RiwWEpYmNg2ZMa7h7hJrQHqOBHqfTn0PLmRXng%2FtpJBbkXd81nCEwWmdS2ICNWWm71bvAgJJh4%2B%2B8KloqlICBeorIbceNoJmYhP9yCL7FVRTB%2BD485%2FTWBlBHK5IyuGMk5yHTFiAC55HtqkoTTJKhQIO9VO1mEUhVt6MQi%2FZVlz2hk0KgbU%2BJEroAWIk8y%2B%2BzMdb8bj017qtC5OKLfOlKUlqiZwMDjq%2F2tDFlnNdMv2Ou9vbLJhyb4ceZu0oJXKvYI%2Bt65SqU%2BF%2Fm2SyeMIo4zm98T6c7VJx9YrBIoP%2FlV4TlnN1JaZLA7YuSFsR5O9eSrYCw1KdEAMpjnTbofWBBMMmGnb0GOqUBfhEDokG%2BjilbqKRm75LfLoPqCRgReS3XxYtnGjlHHmWYJUbFnuCu4Ti9kKCYHPhA99SEbEqkpb0vZv04aiFR3v5kXrOCzoeWbKl7mZisYjZWb4u1EZjcZREPsyJnoQq6ltdFgrYbTJLa1q6KHt%2BFUmFcTqRjNrp32ohfM3BfpsZ4bdN7jHqiBQIo7wubbqQX7q5JegTH6wzWBaxAPqxmOfDjBTwq&X-Amz-Signature=2dd411aec318e1892431ed3e2ad441a5c8e13dec28af0f981579a60544190e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEZ5ORR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA3%2FZ6XaQKXGOjcRBmzkR3cVpD68SDNV4u5A6jtLngNQAiEApl%2B4%2FbJse01hDvtAUc9khLPbGzrsqdgMrvHJWqoJLikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7BSmK9ccnY3BMqASrcA9gJNPFXTljspcxTKxxtNk27Ngcoipe%2BMr3mKlPWS8I0%2FjYV%2Bm37ySEHjJzm6BYeBIU6KcmFLFw8lQGKE43%2F3sgEcE%2BigDxbNlFPhXG0G6z3LcjAm3RRzXZ4SsNKvgI%2BBwmCQK6tsGKiUnxtzhG7HAIhvmdb%2BfmK%2FA2GAQcbSBG2VAhHfDP17oTdaHi1deCu%2FVek2QPq17tEeNnbLwRV0kvDpRxPv63noqqyAcOQ%2BkfxDpTorkJ1eploAoGzsPPwlsc49h3eS%2BHP4cKDfDv4GhkfDryRg6HAPYDd2z0RiwWEpYmNg2ZMa7h7hJrQHqOBHqfTn0PLmRXng%2FtpJBbkXd81nCEwWmdS2ICNWWm71bvAgJJh4%2B%2B8KloqlICBeorIbceNoJmYhP9yCL7FVRTB%2BD485%2FTWBlBHK5IyuGMk5yHTFiAC55HtqkoTTJKhQIO9VO1mEUhVt6MQi%2FZVlz2hk0KgbU%2BJEroAWIk8y%2B%2BzMdb8bj017qtC5OKLfOlKUlqiZwMDjq%2F2tDFlnNdMv2Ou9vbLJhyb4ceZu0oJXKvYI%2Bt65SqU%2BF%2Fm2SyeMIo4zm98T6c7VJx9YrBIoP%2FlV4TlnN1JaZLA7YuSFsR5O9eSrYCw1KdEAMpjnTbofWBBMMmGnb0GOqUBfhEDokG%2BjilbqKRm75LfLoPqCRgReS3XxYtnGjlHHmWYJUbFnuCu4Ti9kKCYHPhA99SEbEqkpb0vZv04aiFR3v5kXrOCzoeWbKl7mZisYjZWb4u1EZjcZREPsyJnoQq6ltdFgrYbTJLa1q6KHt%2BFUmFcTqRjNrp32ohfM3BfpsZ4bdN7jHqiBQIo7wubbqQX7q5JegTH6wzWBaxAPqxmOfDjBTwq&X-Amz-Signature=fed20d645b6a1ee037fb34488426c0509c196007c2115c723de99c45b9da411b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEZ5ORR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIA3%2FZ6XaQKXGOjcRBmzkR3cVpD68SDNV4u5A6jtLngNQAiEApl%2B4%2FbJse01hDvtAUc9khLPbGzrsqdgMrvHJWqoJLikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7BSmK9ccnY3BMqASrcA9gJNPFXTljspcxTKxxtNk27Ngcoipe%2BMr3mKlPWS8I0%2FjYV%2Bm37ySEHjJzm6BYeBIU6KcmFLFw8lQGKE43%2F3sgEcE%2BigDxbNlFPhXG0G6z3LcjAm3RRzXZ4SsNKvgI%2BBwmCQK6tsGKiUnxtzhG7HAIhvmdb%2BfmK%2FA2GAQcbSBG2VAhHfDP17oTdaHi1deCu%2FVek2QPq17tEeNnbLwRV0kvDpRxPv63noqqyAcOQ%2BkfxDpTorkJ1eploAoGzsPPwlsc49h3eS%2BHP4cKDfDv4GhkfDryRg6HAPYDd2z0RiwWEpYmNg2ZMa7h7hJrQHqOBHqfTn0PLmRXng%2FtpJBbkXd81nCEwWmdS2ICNWWm71bvAgJJh4%2B%2B8KloqlICBeorIbceNoJmYhP9yCL7FVRTB%2BD485%2FTWBlBHK5IyuGMk5yHTFiAC55HtqkoTTJKhQIO9VO1mEUhVt6MQi%2FZVlz2hk0KgbU%2BJEroAWIk8y%2B%2BzMdb8bj017qtC5OKLfOlKUlqiZwMDjq%2F2tDFlnNdMv2Ou9vbLJhyb4ceZu0oJXKvYI%2Bt65SqU%2BF%2Fm2SyeMIo4zm98T6c7VJx9YrBIoP%2FlV4TlnN1JaZLA7YuSFsR5O9eSrYCw1KdEAMpjnTbofWBBMMmGnb0GOqUBfhEDokG%2BjilbqKRm75LfLoPqCRgReS3XxYtnGjlHHmWYJUbFnuCu4Ti9kKCYHPhA99SEbEqkpb0vZv04aiFR3v5kXrOCzoeWbKl7mZisYjZWb4u1EZjcZREPsyJnoQq6ltdFgrYbTJLa1q6KHt%2BFUmFcTqRjNrp32ohfM3BfpsZ4bdN7jHqiBQIo7wubbqQX7q5JegTH6wzWBaxAPqxmOfDjBTwq&X-Amz-Signature=647f3c1242654a13f9ae544431b451fd25b6e98758d4f67db6c066a007db83d1&X-Amz-SignedHeaders=host&x-id=GetObject)
