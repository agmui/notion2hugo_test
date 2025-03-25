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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOORTH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VJ4wIuyQH5Kqlz3DdKbbTPCtZXnB2HKlHPJ%2BrHkHJQIhAIG8ybgbGlAS24th%2FNRfUrBJnqO8ZsEAyEZJByKYGA8UKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqWQYGvO10RpYLTx0q3AMH8%2BzPkdB6Kza2j8gyRpQFZhUgBfdmbw5gFED8Hv9kVgw21h4P0CvIFKRVcSOlxdHcRgX6QAEIspMnc6YR4HIWkOicMhztFjm2pvYgpVSFFQ4BmHpGPP%2FJmPbvu7ZeXoxV6KICV1mlif1p1kHo8IpciKl4ijEXYNBYHXhET%2BTg%2FkStpX7V5En8JD0HEukvqmxNZqXO62dgNSlFxZNQySbrbGTmJ1YBXdUMX35kfSgLTFf6M8gF1dC1XUL4ltkxZltWaVRp3wf%2Ft0ByMVzZboaPdkV%2FWpZq18hVr3vVOckMCXDe2yS1KvvqN3MqxavgT3pAEYe55yTu3UtU3%2F6Vf5dVHrjw%2BQVE7TmdH9nEExRh9Wt1gPO00zqgiuABnPL%2F77Y8RaH8vSQ%2FuhbWRbs%2BMwe%2FJ0%2FF4mW0iumy%2BVgg9mPH5XU043x2tzZfyTl13%2F0auorqG%2FnyPBIXpGNIX0vQhJoeg2KT9O4JX9LawA4j%2FK0PwlgakH8c6dY5m3nPQBFYczgE6b5Kh%2FB9u0ackLQft%2F4melO%2FP9zhC2BxKL0iVuftb1MMt%2Fd0F0Dgb5a6CCpWUah6WUHNoSP39XVEJgzgVZCGqY27%2BgCMUOlEGPA20kgKivxsifH1EqAQlRvYdTCApIu%2FBjqkAe3rMjoEWjPYtRzT9Pmer%2BkzsgUIDSaQWn7xZjQ%2FxdPuJHUvxTUplTtKZN0xbzdUZya%2Fx5DevtRwC4mCKwetIML%2Fq2CpNaklfDIMd1ynuoIgPYVnsZslp6A7w2hNkVrWtuCoK7RS%2BpyO4TdIcluv3hssYU65m2fgMSOG5r0Wtg7OmTdtlZfsZ%2B4jykJ5mfS3ccRXu7sGtvLgVoNG4lJuBQATrTg2&X-Amz-Signature=add13607c3d610a747be88e519accb499abe2e070ef56620a4fd71433c00e28c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOORTH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VJ4wIuyQH5Kqlz3DdKbbTPCtZXnB2HKlHPJ%2BrHkHJQIhAIG8ybgbGlAS24th%2FNRfUrBJnqO8ZsEAyEZJByKYGA8UKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqWQYGvO10RpYLTx0q3AMH8%2BzPkdB6Kza2j8gyRpQFZhUgBfdmbw5gFED8Hv9kVgw21h4P0CvIFKRVcSOlxdHcRgX6QAEIspMnc6YR4HIWkOicMhztFjm2pvYgpVSFFQ4BmHpGPP%2FJmPbvu7ZeXoxV6KICV1mlif1p1kHo8IpciKl4ijEXYNBYHXhET%2BTg%2FkStpX7V5En8JD0HEukvqmxNZqXO62dgNSlFxZNQySbrbGTmJ1YBXdUMX35kfSgLTFf6M8gF1dC1XUL4ltkxZltWaVRp3wf%2Ft0ByMVzZboaPdkV%2FWpZq18hVr3vVOckMCXDe2yS1KvvqN3MqxavgT3pAEYe55yTu3UtU3%2F6Vf5dVHrjw%2BQVE7TmdH9nEExRh9Wt1gPO00zqgiuABnPL%2F77Y8RaH8vSQ%2FuhbWRbs%2BMwe%2FJ0%2FF4mW0iumy%2BVgg9mPH5XU043x2tzZfyTl13%2F0auorqG%2FnyPBIXpGNIX0vQhJoeg2KT9O4JX9LawA4j%2FK0PwlgakH8c6dY5m3nPQBFYczgE6b5Kh%2FB9u0ackLQft%2F4melO%2FP9zhC2BxKL0iVuftb1MMt%2Fd0F0Dgb5a6CCpWUah6WUHNoSP39XVEJgzgVZCGqY27%2BgCMUOlEGPA20kgKivxsifH1EqAQlRvYdTCApIu%2FBjqkAe3rMjoEWjPYtRzT9Pmer%2BkzsgUIDSaQWn7xZjQ%2FxdPuJHUvxTUplTtKZN0xbzdUZya%2Fx5DevtRwC4mCKwetIML%2Fq2CpNaklfDIMd1ynuoIgPYVnsZslp6A7w2hNkVrWtuCoK7RS%2BpyO4TdIcluv3hssYU65m2fgMSOG5r0Wtg7OmTdtlZfsZ%2B4jykJ5mfS3ccRXu7sGtvLgVoNG4lJuBQATrTg2&X-Amz-Signature=45e099e49df363a027f2eb8fbcdd255c699d676207626d1957ed31854ae15806&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOORTH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VJ4wIuyQH5Kqlz3DdKbbTPCtZXnB2HKlHPJ%2BrHkHJQIhAIG8ybgbGlAS24th%2FNRfUrBJnqO8ZsEAyEZJByKYGA8UKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqWQYGvO10RpYLTx0q3AMH8%2BzPkdB6Kza2j8gyRpQFZhUgBfdmbw5gFED8Hv9kVgw21h4P0CvIFKRVcSOlxdHcRgX6QAEIspMnc6YR4HIWkOicMhztFjm2pvYgpVSFFQ4BmHpGPP%2FJmPbvu7ZeXoxV6KICV1mlif1p1kHo8IpciKl4ijEXYNBYHXhET%2BTg%2FkStpX7V5En8JD0HEukvqmxNZqXO62dgNSlFxZNQySbrbGTmJ1YBXdUMX35kfSgLTFf6M8gF1dC1XUL4ltkxZltWaVRp3wf%2Ft0ByMVzZboaPdkV%2FWpZq18hVr3vVOckMCXDe2yS1KvvqN3MqxavgT3pAEYe55yTu3UtU3%2F6Vf5dVHrjw%2BQVE7TmdH9nEExRh9Wt1gPO00zqgiuABnPL%2F77Y8RaH8vSQ%2FuhbWRbs%2BMwe%2FJ0%2FF4mW0iumy%2BVgg9mPH5XU043x2tzZfyTl13%2F0auorqG%2FnyPBIXpGNIX0vQhJoeg2KT9O4JX9LawA4j%2FK0PwlgakH8c6dY5m3nPQBFYczgE6b5Kh%2FB9u0ackLQft%2F4melO%2FP9zhC2BxKL0iVuftb1MMt%2Fd0F0Dgb5a6CCpWUah6WUHNoSP39XVEJgzgVZCGqY27%2BgCMUOlEGPA20kgKivxsifH1EqAQlRvYdTCApIu%2FBjqkAe3rMjoEWjPYtRzT9Pmer%2BkzsgUIDSaQWn7xZjQ%2FxdPuJHUvxTUplTtKZN0xbzdUZya%2Fx5DevtRwC4mCKwetIML%2Fq2CpNaklfDIMd1ynuoIgPYVnsZslp6A7w2hNkVrWtuCoK7RS%2BpyO4TdIcluv3hssYU65m2fgMSOG5r0Wtg7OmTdtlZfsZ%2B4jykJ5mfS3ccRXu7sGtvLgVoNG4lJuBQATrTg2&X-Amz-Signature=d1743111ad5e83ddd1f48ea800952b06a03fce43dd8c2de6198047fa56e0f26c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOORTH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VJ4wIuyQH5Kqlz3DdKbbTPCtZXnB2HKlHPJ%2BrHkHJQIhAIG8ybgbGlAS24th%2FNRfUrBJnqO8ZsEAyEZJByKYGA8UKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqWQYGvO10RpYLTx0q3AMH8%2BzPkdB6Kza2j8gyRpQFZhUgBfdmbw5gFED8Hv9kVgw21h4P0CvIFKRVcSOlxdHcRgX6QAEIspMnc6YR4HIWkOicMhztFjm2pvYgpVSFFQ4BmHpGPP%2FJmPbvu7ZeXoxV6KICV1mlif1p1kHo8IpciKl4ijEXYNBYHXhET%2BTg%2FkStpX7V5En8JD0HEukvqmxNZqXO62dgNSlFxZNQySbrbGTmJ1YBXdUMX35kfSgLTFf6M8gF1dC1XUL4ltkxZltWaVRp3wf%2Ft0ByMVzZboaPdkV%2FWpZq18hVr3vVOckMCXDe2yS1KvvqN3MqxavgT3pAEYe55yTu3UtU3%2F6Vf5dVHrjw%2BQVE7TmdH9nEExRh9Wt1gPO00zqgiuABnPL%2F77Y8RaH8vSQ%2FuhbWRbs%2BMwe%2FJ0%2FF4mW0iumy%2BVgg9mPH5XU043x2tzZfyTl13%2F0auorqG%2FnyPBIXpGNIX0vQhJoeg2KT9O4JX9LawA4j%2FK0PwlgakH8c6dY5m3nPQBFYczgE6b5Kh%2FB9u0ackLQft%2F4melO%2FP9zhC2BxKL0iVuftb1MMt%2Fd0F0Dgb5a6CCpWUah6WUHNoSP39XVEJgzgVZCGqY27%2BgCMUOlEGPA20kgKivxsifH1EqAQlRvYdTCApIu%2FBjqkAe3rMjoEWjPYtRzT9Pmer%2BkzsgUIDSaQWn7xZjQ%2FxdPuJHUvxTUplTtKZN0xbzdUZya%2Fx5DevtRwC4mCKwetIML%2Fq2CpNaklfDIMd1ynuoIgPYVnsZslp6A7w2hNkVrWtuCoK7RS%2BpyO4TdIcluv3hssYU65m2fgMSOG5r0Wtg7OmTdtlZfsZ%2B4jykJ5mfS3ccRXu7sGtvLgVoNG4lJuBQATrTg2&X-Amz-Signature=0fe2f691c51a04a4e07c24212fcab5a94903848be3f242bdd4a0be68169995b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOORTH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VJ4wIuyQH5Kqlz3DdKbbTPCtZXnB2HKlHPJ%2BrHkHJQIhAIG8ybgbGlAS24th%2FNRfUrBJnqO8ZsEAyEZJByKYGA8UKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqWQYGvO10RpYLTx0q3AMH8%2BzPkdB6Kza2j8gyRpQFZhUgBfdmbw5gFED8Hv9kVgw21h4P0CvIFKRVcSOlxdHcRgX6QAEIspMnc6YR4HIWkOicMhztFjm2pvYgpVSFFQ4BmHpGPP%2FJmPbvu7ZeXoxV6KICV1mlif1p1kHo8IpciKl4ijEXYNBYHXhET%2BTg%2FkStpX7V5En8JD0HEukvqmxNZqXO62dgNSlFxZNQySbrbGTmJ1YBXdUMX35kfSgLTFf6M8gF1dC1XUL4ltkxZltWaVRp3wf%2Ft0ByMVzZboaPdkV%2FWpZq18hVr3vVOckMCXDe2yS1KvvqN3MqxavgT3pAEYe55yTu3UtU3%2F6Vf5dVHrjw%2BQVE7TmdH9nEExRh9Wt1gPO00zqgiuABnPL%2F77Y8RaH8vSQ%2FuhbWRbs%2BMwe%2FJ0%2FF4mW0iumy%2BVgg9mPH5XU043x2tzZfyTl13%2F0auorqG%2FnyPBIXpGNIX0vQhJoeg2KT9O4JX9LawA4j%2FK0PwlgakH8c6dY5m3nPQBFYczgE6b5Kh%2FB9u0ackLQft%2F4melO%2FP9zhC2BxKL0iVuftb1MMt%2Fd0F0Dgb5a6CCpWUah6WUHNoSP39XVEJgzgVZCGqY27%2BgCMUOlEGPA20kgKivxsifH1EqAQlRvYdTCApIu%2FBjqkAe3rMjoEWjPYtRzT9Pmer%2BkzsgUIDSaQWn7xZjQ%2FxdPuJHUvxTUplTtKZN0xbzdUZya%2Fx5DevtRwC4mCKwetIML%2Fq2CpNaklfDIMd1ynuoIgPYVnsZslp6A7w2hNkVrWtuCoK7RS%2BpyO4TdIcluv3hssYU65m2fgMSOG5r0Wtg7OmTdtlZfsZ%2B4jykJ5mfS3ccRXu7sGtvLgVoNG4lJuBQATrTg2&X-Amz-Signature=68c85ef5e19878a42ebccc70b021e0543bd221e0c3a5ffaf7a224e49baea4674&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOORTH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1VJ4wIuyQH5Kqlz3DdKbbTPCtZXnB2HKlHPJ%2BrHkHJQIhAIG8ybgbGlAS24th%2FNRfUrBJnqO8ZsEAyEZJByKYGA8UKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqWQYGvO10RpYLTx0q3AMH8%2BzPkdB6Kza2j8gyRpQFZhUgBfdmbw5gFED8Hv9kVgw21h4P0CvIFKRVcSOlxdHcRgX6QAEIspMnc6YR4HIWkOicMhztFjm2pvYgpVSFFQ4BmHpGPP%2FJmPbvu7ZeXoxV6KICV1mlif1p1kHo8IpciKl4ijEXYNBYHXhET%2BTg%2FkStpX7V5En8JD0HEukvqmxNZqXO62dgNSlFxZNQySbrbGTmJ1YBXdUMX35kfSgLTFf6M8gF1dC1XUL4ltkxZltWaVRp3wf%2Ft0ByMVzZboaPdkV%2FWpZq18hVr3vVOckMCXDe2yS1KvvqN3MqxavgT3pAEYe55yTu3UtU3%2F6Vf5dVHrjw%2BQVE7TmdH9nEExRh9Wt1gPO00zqgiuABnPL%2F77Y8RaH8vSQ%2FuhbWRbs%2BMwe%2FJ0%2FF4mW0iumy%2BVgg9mPH5XU043x2tzZfyTl13%2F0auorqG%2FnyPBIXpGNIX0vQhJoeg2KT9O4JX9LawA4j%2FK0PwlgakH8c6dY5m3nPQBFYczgE6b5Kh%2FB9u0ackLQft%2F4melO%2FP9zhC2BxKL0iVuftb1MMt%2Fd0F0Dgb5a6CCpWUah6WUHNoSP39XVEJgzgVZCGqY27%2BgCMUOlEGPA20kgKivxsifH1EqAQlRvYdTCApIu%2FBjqkAe3rMjoEWjPYtRzT9Pmer%2BkzsgUIDSaQWn7xZjQ%2FxdPuJHUvxTUplTtKZN0xbzdUZya%2Fx5DevtRwC4mCKwetIML%2Fq2CpNaklfDIMd1ynuoIgPYVnsZslp6A7w2hNkVrWtuCoK7RS%2BpyO4TdIcluv3hssYU65m2fgMSOG5r0Wtg7OmTdtlZfsZ%2B4jykJ5mfS3ccRXu7sGtvLgVoNG4lJuBQATrTg2&X-Amz-Signature=acf4514becf3c562cca7aa2aa6e39fca53b532da86edf60c9a8eb1acbdc88a2a&X-Amz-SignedHeaders=host&x-id=GetObject)
