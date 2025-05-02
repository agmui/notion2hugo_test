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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=9528fc7e6306f32d417ddb22700e28c7a529daf6c1e26f937c5b923d3c64682f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=c1a36909ae2e66a4a8c9c5672843bd4bc9d68adecc84bdeb4801ba150459a522&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=391d65013106455e293e4c5270bad2ee14c419900b8ec5ad726b3ff55a06dac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=8bf29421ed1af82c609fd27e5395b69dde991c37b92b3965e17feefc8b59b24d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=7ea5b95669bfe68402379b6938d0debc73477c159f0e363f866fb6b21dfee19f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DABKEB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfq46kXngIqQ%2Fh9kMV%2FgVlOmW6xhudWbMlRWBvvkSC4gIhALnulrOtpM8Tt9UQHJUlwAXCvp4QvFgL0jS7Xpt%2B%2Fn7oKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaTOrKQulSUB5YPXYq3AMoshURnXztt3dLDhBaxpJZ%2Fix5S8a555EKXO7sBqpMA6oRx2Huoa5tMrKYQtpoozYFoG5pA7JeNJ5d284h1gHNt%2BZxDD6KLfpLCvqu2Ug9HGEhcy9yKzwm8rXTy3IgbOaz9xWHZIAZo2b7obeMFmk7DrYWlCc1T0WquL7A%2BW46b4KfFDOsvgzUef%2Fn4NNjYkeC%2BYA0OVuib2AiZepKfDTqJUAxTHW6gFjix1Xjw1sTUGVNSO9MxeAOKhrCtWn3cKTDkX99%2FzufrenxSWVW3eDRrzftVm8HnYr1qFK4zk%2F0mkAOtYChXBbuQSM61bAo3f5aRKifCeaeCslQyl%2Fc0WdbKwDW7toBBZuY5sAMUzcLbswGCxbZlikg5kTYRUxJRFVZvTa%2F4NCGrvMblGlOw45xxckvnaHIez3q7z2iiUDisKHhTt9uWB97lTY408FtUEYaTlqbsNySG31otr%2BaUdWVjBXDFCsvntkw26hQxkJYCNC1oaxwRrHvdvnOD%2FzHVtxENo%2BhHhGFluv9Zla52nvJi68YzE1VHlRJaIcUi71u2m8GJ0PZoh9rmiOkR6BL7euNuMt5EThYKn7hmYrHNVVIU8PijwXr4Y5eekF4GAIxCG39%2Fi7aV1Q4v%2FbFazCI5dPABjqkAZexmF5QsVz2ONKP2%2FvqEIlXhyzscuvAbVOUy%2FI0rAM0peRONQTh1VnS4rMRzFrGiFbfU3goW32o5qcsDC9%2BSfVO5XkIGA%2Fj9V%2BXf7s3%2BjnQfll%2B4rIkDRmqu94HDHm%2FCHUeWTy6bwULb250PTQauyHIqL%2BJjdXfsF2tD65WtI%2Bx7ktSYJQE740DKtXp0XeAQYRxUtMJ8yYtCIu0CZkQJztVo0%2F1&X-Amz-Signature=8e86b9b655f9a75cdc66ae3a3bb501c87b3a7595686448f098219c051d778359&X-Amz-SignedHeaders=host&x-id=GetObject)
