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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FLODB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5RhxTLrLmEIcqLpZ%2Fah%2FX9t2%2BwDOSlSaL4fmO87rfVAiAIC4WYY%2BC9zZtqkNUuQ2n51zmImxgQufnIkkesHFO9Eir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B7N5MPOr7T6fpybGKtwDbpJkmzCE0xhdwGSLztyyjGqP6s9nVkUIzNp5Ng79z8Hs7Zme%2F5hT9WnkemM1%2BeV4wdcsJF9hocGZkN7H9m4cTzk86YhbRbl4BWhgwFyAQypRNT92ICGx%2BfdbeGPYeyl2J6BOeBaR6zGtf3olZN6hkAUL3SFRwNJCZY87UL8fi6pGTWyUUQvHx%2BFvrRcH%2B23ECmUDmXSKiWT2AklM0OtlFCaV7xberHzB13CJuNHFmAIuxm4bediCODVqHF3N%2BE7hl7r8DSiPr9vzzKGbqpeRYU8Ef8OoqwGmhNW0rgjJhZjWFmmsR1tpAa99eaH%2B7Uvn5O%2BZnU388mXGzOL4shJOnIO5GTwMDZI%2F1pM72YplXBAwOwT%2FULkVCpt6ufV9F6rW6GHHIGfWABstu9eoNMqRk2NHY6EtJlKo%2BsCFSdS1%2BPadfsVj%2FdFykx5Um%2FYtQgEWyinWcNc1BFEYh0d3U2WkqhKKFgosv008S57qhuTaH6xuEZc0Dk%2BYHzrI7ZJ1QZnynWKCl5hlDvyTTNpMgjYW2wHzD0NH%2F%2BAdSa69gK%2FxwkrjYFApO6mj2qBaWztHRbp6gXzV%2FV2GyG15bj5fwHbmbsa2JfP%2F99S68jmnEJShjmzC9QiNV2hgYgiBUd0w5OXzwAY6pgEDBQYG60zujJTSq7FulE0F%2BQ9OTbcOWjtInql9bH1ECUPVPrfKxjRjZ24D0P10ZmD6EImNAWy7F75xGUXtGAJmBaV6p4Jwo%2BS9TUMPlfHDQg5j4bKwSmSL8FModRX4Qkuk7wFddYP3OMlPxcgMUaYxT9yESY%2FxysSpBCUl9wPM5uzePfBDgtZHHJDwHlH5jDc6KgYR%2BiGYuIzEFqIo1LA1FRYt0jIc&X-Amz-Signature=03b2e64cef471c88f1731355f62b8f91e3e01cc6a44556ef31974689d01d2844&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FLODB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5RhxTLrLmEIcqLpZ%2Fah%2FX9t2%2BwDOSlSaL4fmO87rfVAiAIC4WYY%2BC9zZtqkNUuQ2n51zmImxgQufnIkkesHFO9Eir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B7N5MPOr7T6fpybGKtwDbpJkmzCE0xhdwGSLztyyjGqP6s9nVkUIzNp5Ng79z8Hs7Zme%2F5hT9WnkemM1%2BeV4wdcsJF9hocGZkN7H9m4cTzk86YhbRbl4BWhgwFyAQypRNT92ICGx%2BfdbeGPYeyl2J6BOeBaR6zGtf3olZN6hkAUL3SFRwNJCZY87UL8fi6pGTWyUUQvHx%2BFvrRcH%2B23ECmUDmXSKiWT2AklM0OtlFCaV7xberHzB13CJuNHFmAIuxm4bediCODVqHF3N%2BE7hl7r8DSiPr9vzzKGbqpeRYU8Ef8OoqwGmhNW0rgjJhZjWFmmsR1tpAa99eaH%2B7Uvn5O%2BZnU388mXGzOL4shJOnIO5GTwMDZI%2F1pM72YplXBAwOwT%2FULkVCpt6ufV9F6rW6GHHIGfWABstu9eoNMqRk2NHY6EtJlKo%2BsCFSdS1%2BPadfsVj%2FdFykx5Um%2FYtQgEWyinWcNc1BFEYh0d3U2WkqhKKFgosv008S57qhuTaH6xuEZc0Dk%2BYHzrI7ZJ1QZnynWKCl5hlDvyTTNpMgjYW2wHzD0NH%2F%2BAdSa69gK%2FxwkrjYFApO6mj2qBaWztHRbp6gXzV%2FV2GyG15bj5fwHbmbsa2JfP%2F99S68jmnEJShjmzC9QiNV2hgYgiBUd0w5OXzwAY6pgEDBQYG60zujJTSq7FulE0F%2BQ9OTbcOWjtInql9bH1ECUPVPrfKxjRjZ24D0P10ZmD6EImNAWy7F75xGUXtGAJmBaV6p4Jwo%2BS9TUMPlfHDQg5j4bKwSmSL8FModRX4Qkuk7wFddYP3OMlPxcgMUaYxT9yESY%2FxysSpBCUl9wPM5uzePfBDgtZHHJDwHlH5jDc6KgYR%2BiGYuIzEFqIo1LA1FRYt0jIc&X-Amz-Signature=9749f26b35d112902504ee6efc82f65d89be20b61cdbfeeea3e1fd606ee6afae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FLODB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5RhxTLrLmEIcqLpZ%2Fah%2FX9t2%2BwDOSlSaL4fmO87rfVAiAIC4WYY%2BC9zZtqkNUuQ2n51zmImxgQufnIkkesHFO9Eir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B7N5MPOr7T6fpybGKtwDbpJkmzCE0xhdwGSLztyyjGqP6s9nVkUIzNp5Ng79z8Hs7Zme%2F5hT9WnkemM1%2BeV4wdcsJF9hocGZkN7H9m4cTzk86YhbRbl4BWhgwFyAQypRNT92ICGx%2BfdbeGPYeyl2J6BOeBaR6zGtf3olZN6hkAUL3SFRwNJCZY87UL8fi6pGTWyUUQvHx%2BFvrRcH%2B23ECmUDmXSKiWT2AklM0OtlFCaV7xberHzB13CJuNHFmAIuxm4bediCODVqHF3N%2BE7hl7r8DSiPr9vzzKGbqpeRYU8Ef8OoqwGmhNW0rgjJhZjWFmmsR1tpAa99eaH%2B7Uvn5O%2BZnU388mXGzOL4shJOnIO5GTwMDZI%2F1pM72YplXBAwOwT%2FULkVCpt6ufV9F6rW6GHHIGfWABstu9eoNMqRk2NHY6EtJlKo%2BsCFSdS1%2BPadfsVj%2FdFykx5Um%2FYtQgEWyinWcNc1BFEYh0d3U2WkqhKKFgosv008S57qhuTaH6xuEZc0Dk%2BYHzrI7ZJ1QZnynWKCl5hlDvyTTNpMgjYW2wHzD0NH%2F%2BAdSa69gK%2FxwkrjYFApO6mj2qBaWztHRbp6gXzV%2FV2GyG15bj5fwHbmbsa2JfP%2F99S68jmnEJShjmzC9QiNV2hgYgiBUd0w5OXzwAY6pgEDBQYG60zujJTSq7FulE0F%2BQ9OTbcOWjtInql9bH1ECUPVPrfKxjRjZ24D0P10ZmD6EImNAWy7F75xGUXtGAJmBaV6p4Jwo%2BS9TUMPlfHDQg5j4bKwSmSL8FModRX4Qkuk7wFddYP3OMlPxcgMUaYxT9yESY%2FxysSpBCUl9wPM5uzePfBDgtZHHJDwHlH5jDc6KgYR%2BiGYuIzEFqIo1LA1FRYt0jIc&X-Amz-Signature=7547345d24014b3c2b59b954ef424a0ad5ee264ce45c3a138a3774e5744229a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FLODB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5RhxTLrLmEIcqLpZ%2Fah%2FX9t2%2BwDOSlSaL4fmO87rfVAiAIC4WYY%2BC9zZtqkNUuQ2n51zmImxgQufnIkkesHFO9Eir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B7N5MPOr7T6fpybGKtwDbpJkmzCE0xhdwGSLztyyjGqP6s9nVkUIzNp5Ng79z8Hs7Zme%2F5hT9WnkemM1%2BeV4wdcsJF9hocGZkN7H9m4cTzk86YhbRbl4BWhgwFyAQypRNT92ICGx%2BfdbeGPYeyl2J6BOeBaR6zGtf3olZN6hkAUL3SFRwNJCZY87UL8fi6pGTWyUUQvHx%2BFvrRcH%2B23ECmUDmXSKiWT2AklM0OtlFCaV7xberHzB13CJuNHFmAIuxm4bediCODVqHF3N%2BE7hl7r8DSiPr9vzzKGbqpeRYU8Ef8OoqwGmhNW0rgjJhZjWFmmsR1tpAa99eaH%2B7Uvn5O%2BZnU388mXGzOL4shJOnIO5GTwMDZI%2F1pM72YplXBAwOwT%2FULkVCpt6ufV9F6rW6GHHIGfWABstu9eoNMqRk2NHY6EtJlKo%2BsCFSdS1%2BPadfsVj%2FdFykx5Um%2FYtQgEWyinWcNc1BFEYh0d3U2WkqhKKFgosv008S57qhuTaH6xuEZc0Dk%2BYHzrI7ZJ1QZnynWKCl5hlDvyTTNpMgjYW2wHzD0NH%2F%2BAdSa69gK%2FxwkrjYFApO6mj2qBaWztHRbp6gXzV%2FV2GyG15bj5fwHbmbsa2JfP%2F99S68jmnEJShjmzC9QiNV2hgYgiBUd0w5OXzwAY6pgEDBQYG60zujJTSq7FulE0F%2BQ9OTbcOWjtInql9bH1ECUPVPrfKxjRjZ24D0P10ZmD6EImNAWy7F75xGUXtGAJmBaV6p4Jwo%2BS9TUMPlfHDQg5j4bKwSmSL8FModRX4Qkuk7wFddYP3OMlPxcgMUaYxT9yESY%2FxysSpBCUl9wPM5uzePfBDgtZHHJDwHlH5jDc6KgYR%2BiGYuIzEFqIo1LA1FRYt0jIc&X-Amz-Signature=edab2d8c4da0ccc9a76c89e0e3d7863d58ad18859b918c81a1733eb8da96579c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FLODB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5RhxTLrLmEIcqLpZ%2Fah%2FX9t2%2BwDOSlSaL4fmO87rfVAiAIC4WYY%2BC9zZtqkNUuQ2n51zmImxgQufnIkkesHFO9Eir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B7N5MPOr7T6fpybGKtwDbpJkmzCE0xhdwGSLztyyjGqP6s9nVkUIzNp5Ng79z8Hs7Zme%2F5hT9WnkemM1%2BeV4wdcsJF9hocGZkN7H9m4cTzk86YhbRbl4BWhgwFyAQypRNT92ICGx%2BfdbeGPYeyl2J6BOeBaR6zGtf3olZN6hkAUL3SFRwNJCZY87UL8fi6pGTWyUUQvHx%2BFvrRcH%2B23ECmUDmXSKiWT2AklM0OtlFCaV7xberHzB13CJuNHFmAIuxm4bediCODVqHF3N%2BE7hl7r8DSiPr9vzzKGbqpeRYU8Ef8OoqwGmhNW0rgjJhZjWFmmsR1tpAa99eaH%2B7Uvn5O%2BZnU388mXGzOL4shJOnIO5GTwMDZI%2F1pM72YplXBAwOwT%2FULkVCpt6ufV9F6rW6GHHIGfWABstu9eoNMqRk2NHY6EtJlKo%2BsCFSdS1%2BPadfsVj%2FdFykx5Um%2FYtQgEWyinWcNc1BFEYh0d3U2WkqhKKFgosv008S57qhuTaH6xuEZc0Dk%2BYHzrI7ZJ1QZnynWKCl5hlDvyTTNpMgjYW2wHzD0NH%2F%2BAdSa69gK%2FxwkrjYFApO6mj2qBaWztHRbp6gXzV%2FV2GyG15bj5fwHbmbsa2JfP%2F99S68jmnEJShjmzC9QiNV2hgYgiBUd0w5OXzwAY6pgEDBQYG60zujJTSq7FulE0F%2BQ9OTbcOWjtInql9bH1ECUPVPrfKxjRjZ24D0P10ZmD6EImNAWy7F75xGUXtGAJmBaV6p4Jwo%2BS9TUMPlfHDQg5j4bKwSmSL8FModRX4Qkuk7wFddYP3OMlPxcgMUaYxT9yESY%2FxysSpBCUl9wPM5uzePfBDgtZHHJDwHlH5jDc6KgYR%2BiGYuIzEFqIo1LA1FRYt0jIc&X-Amz-Signature=f5e43cba2b2c17e1b1b50f810c514078fefc96947b0e54b30fda10daf4425e56&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4FLODB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5RhxTLrLmEIcqLpZ%2Fah%2FX9t2%2BwDOSlSaL4fmO87rfVAiAIC4WYY%2BC9zZtqkNUuQ2n51zmImxgQufnIkkesHFO9Eir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2B7N5MPOr7T6fpybGKtwDbpJkmzCE0xhdwGSLztyyjGqP6s9nVkUIzNp5Ng79z8Hs7Zme%2F5hT9WnkemM1%2BeV4wdcsJF9hocGZkN7H9m4cTzk86YhbRbl4BWhgwFyAQypRNT92ICGx%2BfdbeGPYeyl2J6BOeBaR6zGtf3olZN6hkAUL3SFRwNJCZY87UL8fi6pGTWyUUQvHx%2BFvrRcH%2B23ECmUDmXSKiWT2AklM0OtlFCaV7xberHzB13CJuNHFmAIuxm4bediCODVqHF3N%2BE7hl7r8DSiPr9vzzKGbqpeRYU8Ef8OoqwGmhNW0rgjJhZjWFmmsR1tpAa99eaH%2B7Uvn5O%2BZnU388mXGzOL4shJOnIO5GTwMDZI%2F1pM72YplXBAwOwT%2FULkVCpt6ufV9F6rW6GHHIGfWABstu9eoNMqRk2NHY6EtJlKo%2BsCFSdS1%2BPadfsVj%2FdFykx5Um%2FYtQgEWyinWcNc1BFEYh0d3U2WkqhKKFgosv008S57qhuTaH6xuEZc0Dk%2BYHzrI7ZJ1QZnynWKCl5hlDvyTTNpMgjYW2wHzD0NH%2F%2BAdSa69gK%2FxwkrjYFApO6mj2qBaWztHRbp6gXzV%2FV2GyG15bj5fwHbmbsa2JfP%2F99S68jmnEJShjmzC9QiNV2hgYgiBUd0w5OXzwAY6pgEDBQYG60zujJTSq7FulE0F%2BQ9OTbcOWjtInql9bH1ECUPVPrfKxjRjZ24D0P10ZmD6EImNAWy7F75xGUXtGAJmBaV6p4Jwo%2BS9TUMPlfHDQg5j4bKwSmSL8FModRX4Qkuk7wFddYP3OMlPxcgMUaYxT9yESY%2FxysSpBCUl9wPM5uzePfBDgtZHHJDwHlH5jDc6KgYR%2BiGYuIzEFqIo1LA1FRYt0jIc&X-Amz-Signature=aa06fb8fb5069f438ef5c4e064592bf50b61afc82603f4170ca9202292221dfe&X-Amz-SignedHeaders=host&x-id=GetObject)
