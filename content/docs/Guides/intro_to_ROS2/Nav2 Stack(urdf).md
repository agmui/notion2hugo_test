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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYCF7AW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHniMawX8YfxrVkzD4xYYBC%2FoHIPaI7lam%2BzPAQ6iuiPAiB2WDZF4JoNjAtfQkI30XQKV7E636YFbVYJ7MVekxEn7yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxg43IitJHhe2RjF1KtwDM1In0g63Z3WTyFwD7sZ0m7vwFhbs8LjqDcqQDjHtpK%2Bq7ZL5iUp8AShyM9Dhif6U0Hx9o1HtCj2qBpmy1%2B0wZPVeReHBIPuWCzWE1hzO5i5VeLQI8F%2B5fXGT1fOkYywJ6GV0fOIp7i7zbKZ6hckaUol51aGLen4%2FEgO2AHXDeqV8jZx3n8OrNtm9txcJaIsTSHdA%2B8WSQ78I%2FF3Syy%2FzuMy013gRFhfSx42QOJYBJQIazlSNLhDz%2BaH8yHFielYBCBKbnimIfpelNdT4oXysItEpQaraYx032V2Ctlw8tzVC8FD0ZLLWHjRHiYVKsPuSWDIXuaJnYSnCOpOx%2BWsUkebpSavoSdqmGVtoODqz7f8BhfTn3QI%2Btc%2ByrziGRijTUNQMZUWs%2Bmy5TfXRZExiXdHvSZwmnpc5yPtVYoB%2F9vZ81Cf%2FSkJoOeDklkabVmIEBYKaFl8Q8P4OcWvsFD6jWwnVJiim%2FojicW6EqPqNXnyUbYfUYUVtABwyLko7xue5%2FrtmRulqGABdq%2BYrXdpq%2F4PP0HGJZCX8w1zaWGXcddmQ%2BWKRhMqX82MvvHb2x%2B0EcvxbOaCFLMhCd4sJxhIZmmDGRe0b5aeP3TTLR9vczatPWzQen0xE6LNj%2BQ0wsIaZwAY6pgGL%2BVyfpWWovGbamjwh9LV6wj0HEXCpEf4FpPzeZT2k5BoJQtYjrFj%2B86k5a2i6ql1rUwR9TCD1SQDZHIBvpBIj6OMGuYz%2F%2Fyc22LorNs94xgk0E2cI6PiNI32iOkrZkPe4qSv0ndkOmBSNne%2Fn2eroCO4hK3DzccIsHUM5dkB%2BffSupJlhtre6W%2FirYNFiL34G2Rznhr9nqFUyxLKz5kYjFNgq551I&X-Amz-Signature=7134ca5034d1a207b0a0cb000d60a576ab667be25f33d92af3e96e1e2e61317c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYCF7AW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHniMawX8YfxrVkzD4xYYBC%2FoHIPaI7lam%2BzPAQ6iuiPAiB2WDZF4JoNjAtfQkI30XQKV7E636YFbVYJ7MVekxEn7yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxg43IitJHhe2RjF1KtwDM1In0g63Z3WTyFwD7sZ0m7vwFhbs8LjqDcqQDjHtpK%2Bq7ZL5iUp8AShyM9Dhif6U0Hx9o1HtCj2qBpmy1%2B0wZPVeReHBIPuWCzWE1hzO5i5VeLQI8F%2B5fXGT1fOkYywJ6GV0fOIp7i7zbKZ6hckaUol51aGLen4%2FEgO2AHXDeqV8jZx3n8OrNtm9txcJaIsTSHdA%2B8WSQ78I%2FF3Syy%2FzuMy013gRFhfSx42QOJYBJQIazlSNLhDz%2BaH8yHFielYBCBKbnimIfpelNdT4oXysItEpQaraYx032V2Ctlw8tzVC8FD0ZLLWHjRHiYVKsPuSWDIXuaJnYSnCOpOx%2BWsUkebpSavoSdqmGVtoODqz7f8BhfTn3QI%2Btc%2ByrziGRijTUNQMZUWs%2Bmy5TfXRZExiXdHvSZwmnpc5yPtVYoB%2F9vZ81Cf%2FSkJoOeDklkabVmIEBYKaFl8Q8P4OcWvsFD6jWwnVJiim%2FojicW6EqPqNXnyUbYfUYUVtABwyLko7xue5%2FrtmRulqGABdq%2BYrXdpq%2F4PP0HGJZCX8w1zaWGXcddmQ%2BWKRhMqX82MvvHb2x%2B0EcvxbOaCFLMhCd4sJxhIZmmDGRe0b5aeP3TTLR9vczatPWzQen0xE6LNj%2BQ0wsIaZwAY6pgGL%2BVyfpWWovGbamjwh9LV6wj0HEXCpEf4FpPzeZT2k5BoJQtYjrFj%2B86k5a2i6ql1rUwR9TCD1SQDZHIBvpBIj6OMGuYz%2F%2Fyc22LorNs94xgk0E2cI6PiNI32iOkrZkPe4qSv0ndkOmBSNne%2Fn2eroCO4hK3DzccIsHUM5dkB%2BffSupJlhtre6W%2FirYNFiL34G2Rznhr9nqFUyxLKz5kYjFNgq551I&X-Amz-Signature=eab56bcb5a89734986f1a8a1531f6b8c3cec2d3debee7bb1e40b58f53eb29488&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYCF7AW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHniMawX8YfxrVkzD4xYYBC%2FoHIPaI7lam%2BzPAQ6iuiPAiB2WDZF4JoNjAtfQkI30XQKV7E636YFbVYJ7MVekxEn7yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxg43IitJHhe2RjF1KtwDM1In0g63Z3WTyFwD7sZ0m7vwFhbs8LjqDcqQDjHtpK%2Bq7ZL5iUp8AShyM9Dhif6U0Hx9o1HtCj2qBpmy1%2B0wZPVeReHBIPuWCzWE1hzO5i5VeLQI8F%2B5fXGT1fOkYywJ6GV0fOIp7i7zbKZ6hckaUol51aGLen4%2FEgO2AHXDeqV8jZx3n8OrNtm9txcJaIsTSHdA%2B8WSQ78I%2FF3Syy%2FzuMy013gRFhfSx42QOJYBJQIazlSNLhDz%2BaH8yHFielYBCBKbnimIfpelNdT4oXysItEpQaraYx032V2Ctlw8tzVC8FD0ZLLWHjRHiYVKsPuSWDIXuaJnYSnCOpOx%2BWsUkebpSavoSdqmGVtoODqz7f8BhfTn3QI%2Btc%2ByrziGRijTUNQMZUWs%2Bmy5TfXRZExiXdHvSZwmnpc5yPtVYoB%2F9vZ81Cf%2FSkJoOeDklkabVmIEBYKaFl8Q8P4OcWvsFD6jWwnVJiim%2FojicW6EqPqNXnyUbYfUYUVtABwyLko7xue5%2FrtmRulqGABdq%2BYrXdpq%2F4PP0HGJZCX8w1zaWGXcddmQ%2BWKRhMqX82MvvHb2x%2B0EcvxbOaCFLMhCd4sJxhIZmmDGRe0b5aeP3TTLR9vczatPWzQen0xE6LNj%2BQ0wsIaZwAY6pgGL%2BVyfpWWovGbamjwh9LV6wj0HEXCpEf4FpPzeZT2k5BoJQtYjrFj%2B86k5a2i6ql1rUwR9TCD1SQDZHIBvpBIj6OMGuYz%2F%2Fyc22LorNs94xgk0E2cI6PiNI32iOkrZkPe4qSv0ndkOmBSNne%2Fn2eroCO4hK3DzccIsHUM5dkB%2BffSupJlhtre6W%2FirYNFiL34G2Rznhr9nqFUyxLKz5kYjFNgq551I&X-Amz-Signature=4b38e0719ce6dca1edaf55c60a1cc94ac8be5a7848502093a1d6ace7ef9a8501&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYCF7AW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHniMawX8YfxrVkzD4xYYBC%2FoHIPaI7lam%2BzPAQ6iuiPAiB2WDZF4JoNjAtfQkI30XQKV7E636YFbVYJ7MVekxEn7yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxg43IitJHhe2RjF1KtwDM1In0g63Z3WTyFwD7sZ0m7vwFhbs8LjqDcqQDjHtpK%2Bq7ZL5iUp8AShyM9Dhif6U0Hx9o1HtCj2qBpmy1%2B0wZPVeReHBIPuWCzWE1hzO5i5VeLQI8F%2B5fXGT1fOkYywJ6GV0fOIp7i7zbKZ6hckaUol51aGLen4%2FEgO2AHXDeqV8jZx3n8OrNtm9txcJaIsTSHdA%2B8WSQ78I%2FF3Syy%2FzuMy013gRFhfSx42QOJYBJQIazlSNLhDz%2BaH8yHFielYBCBKbnimIfpelNdT4oXysItEpQaraYx032V2Ctlw8tzVC8FD0ZLLWHjRHiYVKsPuSWDIXuaJnYSnCOpOx%2BWsUkebpSavoSdqmGVtoODqz7f8BhfTn3QI%2Btc%2ByrziGRijTUNQMZUWs%2Bmy5TfXRZExiXdHvSZwmnpc5yPtVYoB%2F9vZ81Cf%2FSkJoOeDklkabVmIEBYKaFl8Q8P4OcWvsFD6jWwnVJiim%2FojicW6EqPqNXnyUbYfUYUVtABwyLko7xue5%2FrtmRulqGABdq%2BYrXdpq%2F4PP0HGJZCX8w1zaWGXcddmQ%2BWKRhMqX82MvvHb2x%2B0EcvxbOaCFLMhCd4sJxhIZmmDGRe0b5aeP3TTLR9vczatPWzQen0xE6LNj%2BQ0wsIaZwAY6pgGL%2BVyfpWWovGbamjwh9LV6wj0HEXCpEf4FpPzeZT2k5BoJQtYjrFj%2B86k5a2i6ql1rUwR9TCD1SQDZHIBvpBIj6OMGuYz%2F%2Fyc22LorNs94xgk0E2cI6PiNI32iOkrZkPe4qSv0ndkOmBSNne%2Fn2eroCO4hK3DzccIsHUM5dkB%2BffSupJlhtre6W%2FirYNFiL34G2Rznhr9nqFUyxLKz5kYjFNgq551I&X-Amz-Signature=4cdba42b12391ccc114279504b6452ac7ed6ad25a973e428cf2862199eae5b09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYCF7AW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHniMawX8YfxrVkzD4xYYBC%2FoHIPaI7lam%2BzPAQ6iuiPAiB2WDZF4JoNjAtfQkI30XQKV7E636YFbVYJ7MVekxEn7yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxg43IitJHhe2RjF1KtwDM1In0g63Z3WTyFwD7sZ0m7vwFhbs8LjqDcqQDjHtpK%2Bq7ZL5iUp8AShyM9Dhif6U0Hx9o1HtCj2qBpmy1%2B0wZPVeReHBIPuWCzWE1hzO5i5VeLQI8F%2B5fXGT1fOkYywJ6GV0fOIp7i7zbKZ6hckaUol51aGLen4%2FEgO2AHXDeqV8jZx3n8OrNtm9txcJaIsTSHdA%2B8WSQ78I%2FF3Syy%2FzuMy013gRFhfSx42QOJYBJQIazlSNLhDz%2BaH8yHFielYBCBKbnimIfpelNdT4oXysItEpQaraYx032V2Ctlw8tzVC8FD0ZLLWHjRHiYVKsPuSWDIXuaJnYSnCOpOx%2BWsUkebpSavoSdqmGVtoODqz7f8BhfTn3QI%2Btc%2ByrziGRijTUNQMZUWs%2Bmy5TfXRZExiXdHvSZwmnpc5yPtVYoB%2F9vZ81Cf%2FSkJoOeDklkabVmIEBYKaFl8Q8P4OcWvsFD6jWwnVJiim%2FojicW6EqPqNXnyUbYfUYUVtABwyLko7xue5%2FrtmRulqGABdq%2BYrXdpq%2F4PP0HGJZCX8w1zaWGXcddmQ%2BWKRhMqX82MvvHb2x%2B0EcvxbOaCFLMhCd4sJxhIZmmDGRe0b5aeP3TTLR9vczatPWzQen0xE6LNj%2BQ0wsIaZwAY6pgGL%2BVyfpWWovGbamjwh9LV6wj0HEXCpEf4FpPzeZT2k5BoJQtYjrFj%2B86k5a2i6ql1rUwR9TCD1SQDZHIBvpBIj6OMGuYz%2F%2Fyc22LorNs94xgk0E2cI6PiNI32iOkrZkPe4qSv0ndkOmBSNne%2Fn2eroCO4hK3DzccIsHUM5dkB%2BffSupJlhtre6W%2FirYNFiL34G2Rznhr9nqFUyxLKz5kYjFNgq551I&X-Amz-Signature=0f6efe1ee4e959940c1fd85e5fa273fdf2ff3aad15b6ea1d45e0dff6d014edd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYCF7AW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHniMawX8YfxrVkzD4xYYBC%2FoHIPaI7lam%2BzPAQ6iuiPAiB2WDZF4JoNjAtfQkI30XQKV7E636YFbVYJ7MVekxEn7yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxg43IitJHhe2RjF1KtwDM1In0g63Z3WTyFwD7sZ0m7vwFhbs8LjqDcqQDjHtpK%2Bq7ZL5iUp8AShyM9Dhif6U0Hx9o1HtCj2qBpmy1%2B0wZPVeReHBIPuWCzWE1hzO5i5VeLQI8F%2B5fXGT1fOkYywJ6GV0fOIp7i7zbKZ6hckaUol51aGLen4%2FEgO2AHXDeqV8jZx3n8OrNtm9txcJaIsTSHdA%2B8WSQ78I%2FF3Syy%2FzuMy013gRFhfSx42QOJYBJQIazlSNLhDz%2BaH8yHFielYBCBKbnimIfpelNdT4oXysItEpQaraYx032V2Ctlw8tzVC8FD0ZLLWHjRHiYVKsPuSWDIXuaJnYSnCOpOx%2BWsUkebpSavoSdqmGVtoODqz7f8BhfTn3QI%2Btc%2ByrziGRijTUNQMZUWs%2Bmy5TfXRZExiXdHvSZwmnpc5yPtVYoB%2F9vZ81Cf%2FSkJoOeDklkabVmIEBYKaFl8Q8P4OcWvsFD6jWwnVJiim%2FojicW6EqPqNXnyUbYfUYUVtABwyLko7xue5%2FrtmRulqGABdq%2BYrXdpq%2F4PP0HGJZCX8w1zaWGXcddmQ%2BWKRhMqX82MvvHb2x%2B0EcvxbOaCFLMhCd4sJxhIZmmDGRe0b5aeP3TTLR9vczatPWzQen0xE6LNj%2BQ0wsIaZwAY6pgGL%2BVyfpWWovGbamjwh9LV6wj0HEXCpEf4FpPzeZT2k5BoJQtYjrFj%2B86k5a2i6ql1rUwR9TCD1SQDZHIBvpBIj6OMGuYz%2F%2Fyc22LorNs94xgk0E2cI6PiNI32iOkrZkPe4qSv0ndkOmBSNne%2Fn2eroCO4hK3DzccIsHUM5dkB%2BffSupJlhtre6W%2FirYNFiL34G2Rznhr9nqFUyxLKz5kYjFNgq551I&X-Amz-Signature=5406f3dd2270c905612e50f420ae288f11adcf6b00f0c7fb634b124b6788d182&X-Amz-SignedHeaders=host&x-id=GetObject)
