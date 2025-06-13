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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=b425100e4e96f468a20ab941890a40289a35d68a4dcbb2336f759abd7fb01b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=d99fea7e2dab82464f3d3cb7989e6d1bb9f10de1d98a7ca6ed8ccb0448de7e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=7ebba5072a8de204bf09448e341a3209c707658fe1b28a78861ecf9b4d1b90ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=fcf99da9986ca36294dafad1377b56e1d9488ac6502eabed687118f2203bb029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=1206fb2e5753b297e1043e365ca7547d0d99731bfd7ced2bceb7be5d15dfa21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=f814845768eaa05c6a50376c53106adb00a9b00ee8bf13d279cb54169fd7c47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
