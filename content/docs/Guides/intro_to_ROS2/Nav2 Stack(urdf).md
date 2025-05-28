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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMTBPHU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYdPZV8%2F9BBjWUkEi3y1vGcJYlnimmJJQFllezl%2FxxAiEAzUPYA1HeVbCeNJvgNR3hVLHOHmc25fQj0BdiP4ITzRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOj%2F1YW8qRnhyfL4KyrcA0rzoai3QFVDFWbqsezXeRJXVxVER%2Bt%2BRqmVYYJxI3hG%2F5jxlmlTAPZ9Oe7x2mvKN4etC3FLpC7eEQ%2Be0eWKtJ5pKDFdsIdUiRjD3zN2Lre8hk%2FAFh3c6lF23%2B0pw%2B7IZAb4%2FksEwYtjNIW%2B1zUbMm9%2FQGm9ZYncnRSAAN0uZNBBtyrOTaESRUy5k6zQQZhWlzODj8sOAlUDbs49huT0WNtTnCP2vhMf0oqBCetHmBaPuYOlto3Y%2FDeBfCkOonljDWkIhKE7WBQlBh7%2BCBW43xo2Qg%2B9HuEuKl03ekNYBl5Qv4cRVvzApyFkzF31IW11rk3TxBMSOz9uOrLO4s2um68siF37u7dhyY62Qy%2FH54qcUYkt8TtvAIemQN%2Bf%2FG6FvH4Ib4biaSi9tUUfzZb8vV6NGqASTiINAlUheB87LSQUFUQsLYea9Y0qD%2FZ4Dn%2B9T3RM1jaYL%2BTZr6BdamY%2BZWK9OedLUMW4rojqFkRNFVtO%2Fk68H1WH6fPmXTvUPvVhix12PtSDmAkiCgrK%2BHEFdKJ1Yeb9%2F2VOJWrR6zDoXiIz5RkR2Y%2Bq7%2FocmnPpdGH218N%2BWqLJtQwDvsUBQP%2FSIrOr9N4KqWkdROpHfCct5LoMwNMfcXdRm5pKBBFrMPKQ3sEGOqUB2A7T3DJ20M2X2fhj1AMytn4aPgs6NDxf1C2hJyw91tfKHxJXAx4LLMfVUdp%2FTq%2BJrT9UY13zLzZw0XvbSivT2NmRJHRMQon8IL67dNQzyUgff6AmWmA02ZWlWeDkBoSwEydfyW0LxbbzNNA%2FX1Gs%2FgrqNZhFFTma8h9pG6JXjrtqGlFkVru8lZKkZ29kJTKmbUJGiJCdWd55G5kPxLbaslFkcSdO&X-Amz-Signature=9a23dfd3a7ff64d90d529157279bc3d1841ca6c7a47a56f34611147e237a54c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMTBPHU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYdPZV8%2F9BBjWUkEi3y1vGcJYlnimmJJQFllezl%2FxxAiEAzUPYA1HeVbCeNJvgNR3hVLHOHmc25fQj0BdiP4ITzRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOj%2F1YW8qRnhyfL4KyrcA0rzoai3QFVDFWbqsezXeRJXVxVER%2Bt%2BRqmVYYJxI3hG%2F5jxlmlTAPZ9Oe7x2mvKN4etC3FLpC7eEQ%2Be0eWKtJ5pKDFdsIdUiRjD3zN2Lre8hk%2FAFh3c6lF23%2B0pw%2B7IZAb4%2FksEwYtjNIW%2B1zUbMm9%2FQGm9ZYncnRSAAN0uZNBBtyrOTaESRUy5k6zQQZhWlzODj8sOAlUDbs49huT0WNtTnCP2vhMf0oqBCetHmBaPuYOlto3Y%2FDeBfCkOonljDWkIhKE7WBQlBh7%2BCBW43xo2Qg%2B9HuEuKl03ekNYBl5Qv4cRVvzApyFkzF31IW11rk3TxBMSOz9uOrLO4s2um68siF37u7dhyY62Qy%2FH54qcUYkt8TtvAIemQN%2Bf%2FG6FvH4Ib4biaSi9tUUfzZb8vV6NGqASTiINAlUheB87LSQUFUQsLYea9Y0qD%2FZ4Dn%2B9T3RM1jaYL%2BTZr6BdamY%2BZWK9OedLUMW4rojqFkRNFVtO%2Fk68H1WH6fPmXTvUPvVhix12PtSDmAkiCgrK%2BHEFdKJ1Yeb9%2F2VOJWrR6zDoXiIz5RkR2Y%2Bq7%2FocmnPpdGH218N%2BWqLJtQwDvsUBQP%2FSIrOr9N4KqWkdROpHfCct5LoMwNMfcXdRm5pKBBFrMPKQ3sEGOqUB2A7T3DJ20M2X2fhj1AMytn4aPgs6NDxf1C2hJyw91tfKHxJXAx4LLMfVUdp%2FTq%2BJrT9UY13zLzZw0XvbSivT2NmRJHRMQon8IL67dNQzyUgff6AmWmA02ZWlWeDkBoSwEydfyW0LxbbzNNA%2FX1Gs%2FgrqNZhFFTma8h9pG6JXjrtqGlFkVru8lZKkZ29kJTKmbUJGiJCdWd55G5kPxLbaslFkcSdO&X-Amz-Signature=91aa1bc8aa49ed0e1a234a8886c0cd193982435b9f02eb5fac94b8186b9159c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMTBPHU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYdPZV8%2F9BBjWUkEi3y1vGcJYlnimmJJQFllezl%2FxxAiEAzUPYA1HeVbCeNJvgNR3hVLHOHmc25fQj0BdiP4ITzRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOj%2F1YW8qRnhyfL4KyrcA0rzoai3QFVDFWbqsezXeRJXVxVER%2Bt%2BRqmVYYJxI3hG%2F5jxlmlTAPZ9Oe7x2mvKN4etC3FLpC7eEQ%2Be0eWKtJ5pKDFdsIdUiRjD3zN2Lre8hk%2FAFh3c6lF23%2B0pw%2B7IZAb4%2FksEwYtjNIW%2B1zUbMm9%2FQGm9ZYncnRSAAN0uZNBBtyrOTaESRUy5k6zQQZhWlzODj8sOAlUDbs49huT0WNtTnCP2vhMf0oqBCetHmBaPuYOlto3Y%2FDeBfCkOonljDWkIhKE7WBQlBh7%2BCBW43xo2Qg%2B9HuEuKl03ekNYBl5Qv4cRVvzApyFkzF31IW11rk3TxBMSOz9uOrLO4s2um68siF37u7dhyY62Qy%2FH54qcUYkt8TtvAIemQN%2Bf%2FG6FvH4Ib4biaSi9tUUfzZb8vV6NGqASTiINAlUheB87LSQUFUQsLYea9Y0qD%2FZ4Dn%2B9T3RM1jaYL%2BTZr6BdamY%2BZWK9OedLUMW4rojqFkRNFVtO%2Fk68H1WH6fPmXTvUPvVhix12PtSDmAkiCgrK%2BHEFdKJ1Yeb9%2F2VOJWrR6zDoXiIz5RkR2Y%2Bq7%2FocmnPpdGH218N%2BWqLJtQwDvsUBQP%2FSIrOr9N4KqWkdROpHfCct5LoMwNMfcXdRm5pKBBFrMPKQ3sEGOqUB2A7T3DJ20M2X2fhj1AMytn4aPgs6NDxf1C2hJyw91tfKHxJXAx4LLMfVUdp%2FTq%2BJrT9UY13zLzZw0XvbSivT2NmRJHRMQon8IL67dNQzyUgff6AmWmA02ZWlWeDkBoSwEydfyW0LxbbzNNA%2FX1Gs%2FgrqNZhFFTma8h9pG6JXjrtqGlFkVru8lZKkZ29kJTKmbUJGiJCdWd55G5kPxLbaslFkcSdO&X-Amz-Signature=76c2edabb2d9d8e30c043579cd1c8820b98f64e5ce2edffa2086eb473b94b2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMTBPHU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYdPZV8%2F9BBjWUkEi3y1vGcJYlnimmJJQFllezl%2FxxAiEAzUPYA1HeVbCeNJvgNR3hVLHOHmc25fQj0BdiP4ITzRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOj%2F1YW8qRnhyfL4KyrcA0rzoai3QFVDFWbqsezXeRJXVxVER%2Bt%2BRqmVYYJxI3hG%2F5jxlmlTAPZ9Oe7x2mvKN4etC3FLpC7eEQ%2Be0eWKtJ5pKDFdsIdUiRjD3zN2Lre8hk%2FAFh3c6lF23%2B0pw%2B7IZAb4%2FksEwYtjNIW%2B1zUbMm9%2FQGm9ZYncnRSAAN0uZNBBtyrOTaESRUy5k6zQQZhWlzODj8sOAlUDbs49huT0WNtTnCP2vhMf0oqBCetHmBaPuYOlto3Y%2FDeBfCkOonljDWkIhKE7WBQlBh7%2BCBW43xo2Qg%2B9HuEuKl03ekNYBl5Qv4cRVvzApyFkzF31IW11rk3TxBMSOz9uOrLO4s2um68siF37u7dhyY62Qy%2FH54qcUYkt8TtvAIemQN%2Bf%2FG6FvH4Ib4biaSi9tUUfzZb8vV6NGqASTiINAlUheB87LSQUFUQsLYea9Y0qD%2FZ4Dn%2B9T3RM1jaYL%2BTZr6BdamY%2BZWK9OedLUMW4rojqFkRNFVtO%2Fk68H1WH6fPmXTvUPvVhix12PtSDmAkiCgrK%2BHEFdKJ1Yeb9%2F2VOJWrR6zDoXiIz5RkR2Y%2Bq7%2FocmnPpdGH218N%2BWqLJtQwDvsUBQP%2FSIrOr9N4KqWkdROpHfCct5LoMwNMfcXdRm5pKBBFrMPKQ3sEGOqUB2A7T3DJ20M2X2fhj1AMytn4aPgs6NDxf1C2hJyw91tfKHxJXAx4LLMfVUdp%2FTq%2BJrT9UY13zLzZw0XvbSivT2NmRJHRMQon8IL67dNQzyUgff6AmWmA02ZWlWeDkBoSwEydfyW0LxbbzNNA%2FX1Gs%2FgrqNZhFFTma8h9pG6JXjrtqGlFkVru8lZKkZ29kJTKmbUJGiJCdWd55G5kPxLbaslFkcSdO&X-Amz-Signature=41d59ff3172675cd708b2398948b8430f6b865a74ae7d8fd567f67e579fd5a02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMTBPHU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYdPZV8%2F9BBjWUkEi3y1vGcJYlnimmJJQFllezl%2FxxAiEAzUPYA1HeVbCeNJvgNR3hVLHOHmc25fQj0BdiP4ITzRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOj%2F1YW8qRnhyfL4KyrcA0rzoai3QFVDFWbqsezXeRJXVxVER%2Bt%2BRqmVYYJxI3hG%2F5jxlmlTAPZ9Oe7x2mvKN4etC3FLpC7eEQ%2Be0eWKtJ5pKDFdsIdUiRjD3zN2Lre8hk%2FAFh3c6lF23%2B0pw%2B7IZAb4%2FksEwYtjNIW%2B1zUbMm9%2FQGm9ZYncnRSAAN0uZNBBtyrOTaESRUy5k6zQQZhWlzODj8sOAlUDbs49huT0WNtTnCP2vhMf0oqBCetHmBaPuYOlto3Y%2FDeBfCkOonljDWkIhKE7WBQlBh7%2BCBW43xo2Qg%2B9HuEuKl03ekNYBl5Qv4cRVvzApyFkzF31IW11rk3TxBMSOz9uOrLO4s2um68siF37u7dhyY62Qy%2FH54qcUYkt8TtvAIemQN%2Bf%2FG6FvH4Ib4biaSi9tUUfzZb8vV6NGqASTiINAlUheB87LSQUFUQsLYea9Y0qD%2FZ4Dn%2B9T3RM1jaYL%2BTZr6BdamY%2BZWK9OedLUMW4rojqFkRNFVtO%2Fk68H1WH6fPmXTvUPvVhix12PtSDmAkiCgrK%2BHEFdKJ1Yeb9%2F2VOJWrR6zDoXiIz5RkR2Y%2Bq7%2FocmnPpdGH218N%2BWqLJtQwDvsUBQP%2FSIrOr9N4KqWkdROpHfCct5LoMwNMfcXdRm5pKBBFrMPKQ3sEGOqUB2A7T3DJ20M2X2fhj1AMytn4aPgs6NDxf1C2hJyw91tfKHxJXAx4LLMfVUdp%2FTq%2BJrT9UY13zLzZw0XvbSivT2NmRJHRMQon8IL67dNQzyUgff6AmWmA02ZWlWeDkBoSwEydfyW0LxbbzNNA%2FX1Gs%2FgrqNZhFFTma8h9pG6JXjrtqGlFkVru8lZKkZ29kJTKmbUJGiJCdWd55G5kPxLbaslFkcSdO&X-Amz-Signature=cb898bfaccaef698b5f4085e1c146724313fcae96dc3ffea5564baf448bf6e73&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HMTBPHU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYdPZV8%2F9BBjWUkEi3y1vGcJYlnimmJJQFllezl%2FxxAiEAzUPYA1HeVbCeNJvgNR3hVLHOHmc25fQj0BdiP4ITzRgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOj%2F1YW8qRnhyfL4KyrcA0rzoai3QFVDFWbqsezXeRJXVxVER%2Bt%2BRqmVYYJxI3hG%2F5jxlmlTAPZ9Oe7x2mvKN4etC3FLpC7eEQ%2Be0eWKtJ5pKDFdsIdUiRjD3zN2Lre8hk%2FAFh3c6lF23%2B0pw%2B7IZAb4%2FksEwYtjNIW%2B1zUbMm9%2FQGm9ZYncnRSAAN0uZNBBtyrOTaESRUy5k6zQQZhWlzODj8sOAlUDbs49huT0WNtTnCP2vhMf0oqBCetHmBaPuYOlto3Y%2FDeBfCkOonljDWkIhKE7WBQlBh7%2BCBW43xo2Qg%2B9HuEuKl03ekNYBl5Qv4cRVvzApyFkzF31IW11rk3TxBMSOz9uOrLO4s2um68siF37u7dhyY62Qy%2FH54qcUYkt8TtvAIemQN%2Bf%2FG6FvH4Ib4biaSi9tUUfzZb8vV6NGqASTiINAlUheB87LSQUFUQsLYea9Y0qD%2FZ4Dn%2B9T3RM1jaYL%2BTZr6BdamY%2BZWK9OedLUMW4rojqFkRNFVtO%2Fk68H1WH6fPmXTvUPvVhix12PtSDmAkiCgrK%2BHEFdKJ1Yeb9%2F2VOJWrR6zDoXiIz5RkR2Y%2Bq7%2FocmnPpdGH218N%2BWqLJtQwDvsUBQP%2FSIrOr9N4KqWkdROpHfCct5LoMwNMfcXdRm5pKBBFrMPKQ3sEGOqUB2A7T3DJ20M2X2fhj1AMytn4aPgs6NDxf1C2hJyw91tfKHxJXAx4LLMfVUdp%2FTq%2BJrT9UY13zLzZw0XvbSivT2NmRJHRMQon8IL67dNQzyUgff6AmWmA02ZWlWeDkBoSwEydfyW0LxbbzNNA%2FX1Gs%2FgrqNZhFFTma8h9pG6JXjrtqGlFkVru8lZKkZ29kJTKmbUJGiJCdWd55G5kPxLbaslFkcSdO&X-Amz-Signature=c82324594fac1db9c760f61047e69a7c91a864412077b58815d2c2d1acb4a7ef&X-Amz-SignedHeaders=host&x-id=GetObject)
