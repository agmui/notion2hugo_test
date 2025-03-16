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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXZSFLP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI35PaoiQ%2BrYKARjbLIpJJS5lsxDkefPWk0eBR%2BMcywIgD7aaw9PqWlEyN%2FPYeciiB1ys3IBX0UVIN6GYub%2BsevEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP27yMZa4AHljrXlYyrcA4TJKK%2FVoFAVTqBIRrKE7XfxTFGhh6KkQNoL5AyvI6Khgc%2BmfmgTbHIGr9GYF2PfC34KNnPAERJG%2FJG3uvKxJehNcIBwuNpJvXbfYlS5LEZn4msM8F8hM9Jhcze1gwqJuqmrUBShAgkWzCgGn1PWgMf4y2XkaNz2YAb9c%2FxDyILM%2FzGo%2FacTBLWoDj2IJS%2BUe06DkIOoCF2Rm6aIR4m4ZhA7oheSVxexv8zpeGuZRBtA2SpY1gLSHmYzeWdvD4tFkQv0X6wJZ%2F9Sz4Nh5NOBg9Vzsg9UwyGpC%2BST3vWNY1XRwZbKZJj1uyVmmMeysmJJDcVMatWpIchzs0f2UsjpPimtVy4P9xzthzgkM79aCiwF7A3wTxyqi0KZCqwSctuDFdYph5CQUYsntIB6jTbqQMb5LcCDxcR10l1U3Si1EySNvpMMX6sn%2Bl6NQMeWO2QHISk%2BHgRK5JAFrvy3Pu5Xd8QFX222p32kP1DT48jZM8Bjz75CvAzTPl3UwjTyN9mejbPkgbjFWVO0JWsEP%2FbZg1Ktc%2F49QeZMW6q5dQDf%2FyyIlAK94y6TyPRjPI5HSbi3q%2FXtPy1E4uuBgnYgITLNY0v8BQ2n1sZZDjZpb%2FWbZOwJzSoqyB%2BsZBzYzYWYMLKB2L4GOqUB2I4EBiIx%2BgY7BiVNm2MRtPptpiLCQ2nrqgr%2Bgib3iP5gDuDJnBFMFavFMk4QMgXzQ1FadgfCPtQ5wMN1zk59w11bedJLlHYpLy0dfkoxV3rAlUm4Ltzd5uKFKmIAun7WV4pemDPF9agHMrJMcHFz9VVdNVjrDAQiSsQhrMLJRrPZAQ9y60eKEeXvtMYLTE%2BgWWUoVjdPWApZ9k%2FjuPoRcTUR0wyR&X-Amz-Signature=5f767dcb8295765f0622fd6877a4aacaea23deb02dabbad20ac48f9431578b43&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXZSFLP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI35PaoiQ%2BrYKARjbLIpJJS5lsxDkefPWk0eBR%2BMcywIgD7aaw9PqWlEyN%2FPYeciiB1ys3IBX0UVIN6GYub%2BsevEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP27yMZa4AHljrXlYyrcA4TJKK%2FVoFAVTqBIRrKE7XfxTFGhh6KkQNoL5AyvI6Khgc%2BmfmgTbHIGr9GYF2PfC34KNnPAERJG%2FJG3uvKxJehNcIBwuNpJvXbfYlS5LEZn4msM8F8hM9Jhcze1gwqJuqmrUBShAgkWzCgGn1PWgMf4y2XkaNz2YAb9c%2FxDyILM%2FzGo%2FacTBLWoDj2IJS%2BUe06DkIOoCF2Rm6aIR4m4ZhA7oheSVxexv8zpeGuZRBtA2SpY1gLSHmYzeWdvD4tFkQv0X6wJZ%2F9Sz4Nh5NOBg9Vzsg9UwyGpC%2BST3vWNY1XRwZbKZJj1uyVmmMeysmJJDcVMatWpIchzs0f2UsjpPimtVy4P9xzthzgkM79aCiwF7A3wTxyqi0KZCqwSctuDFdYph5CQUYsntIB6jTbqQMb5LcCDxcR10l1U3Si1EySNvpMMX6sn%2Bl6NQMeWO2QHISk%2BHgRK5JAFrvy3Pu5Xd8QFX222p32kP1DT48jZM8Bjz75CvAzTPl3UwjTyN9mejbPkgbjFWVO0JWsEP%2FbZg1Ktc%2F49QeZMW6q5dQDf%2FyyIlAK94y6TyPRjPI5HSbi3q%2FXtPy1E4uuBgnYgITLNY0v8BQ2n1sZZDjZpb%2FWbZOwJzSoqyB%2BsZBzYzYWYMLKB2L4GOqUB2I4EBiIx%2BgY7BiVNm2MRtPptpiLCQ2nrqgr%2Bgib3iP5gDuDJnBFMFavFMk4QMgXzQ1FadgfCPtQ5wMN1zk59w11bedJLlHYpLy0dfkoxV3rAlUm4Ltzd5uKFKmIAun7WV4pemDPF9agHMrJMcHFz9VVdNVjrDAQiSsQhrMLJRrPZAQ9y60eKEeXvtMYLTE%2BgWWUoVjdPWApZ9k%2FjuPoRcTUR0wyR&X-Amz-Signature=c43bb748b655d54cab78a2a7f3d10d1df0fbb55b93b896f2977a8a70b2a7f040&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXZSFLP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI35PaoiQ%2BrYKARjbLIpJJS5lsxDkefPWk0eBR%2BMcywIgD7aaw9PqWlEyN%2FPYeciiB1ys3IBX0UVIN6GYub%2BsevEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP27yMZa4AHljrXlYyrcA4TJKK%2FVoFAVTqBIRrKE7XfxTFGhh6KkQNoL5AyvI6Khgc%2BmfmgTbHIGr9GYF2PfC34KNnPAERJG%2FJG3uvKxJehNcIBwuNpJvXbfYlS5LEZn4msM8F8hM9Jhcze1gwqJuqmrUBShAgkWzCgGn1PWgMf4y2XkaNz2YAb9c%2FxDyILM%2FzGo%2FacTBLWoDj2IJS%2BUe06DkIOoCF2Rm6aIR4m4ZhA7oheSVxexv8zpeGuZRBtA2SpY1gLSHmYzeWdvD4tFkQv0X6wJZ%2F9Sz4Nh5NOBg9Vzsg9UwyGpC%2BST3vWNY1XRwZbKZJj1uyVmmMeysmJJDcVMatWpIchzs0f2UsjpPimtVy4P9xzthzgkM79aCiwF7A3wTxyqi0KZCqwSctuDFdYph5CQUYsntIB6jTbqQMb5LcCDxcR10l1U3Si1EySNvpMMX6sn%2Bl6NQMeWO2QHISk%2BHgRK5JAFrvy3Pu5Xd8QFX222p32kP1DT48jZM8Bjz75CvAzTPl3UwjTyN9mejbPkgbjFWVO0JWsEP%2FbZg1Ktc%2F49QeZMW6q5dQDf%2FyyIlAK94y6TyPRjPI5HSbi3q%2FXtPy1E4uuBgnYgITLNY0v8BQ2n1sZZDjZpb%2FWbZOwJzSoqyB%2BsZBzYzYWYMLKB2L4GOqUB2I4EBiIx%2BgY7BiVNm2MRtPptpiLCQ2nrqgr%2Bgib3iP5gDuDJnBFMFavFMk4QMgXzQ1FadgfCPtQ5wMN1zk59w11bedJLlHYpLy0dfkoxV3rAlUm4Ltzd5uKFKmIAun7WV4pemDPF9agHMrJMcHFz9VVdNVjrDAQiSsQhrMLJRrPZAQ9y60eKEeXvtMYLTE%2BgWWUoVjdPWApZ9k%2FjuPoRcTUR0wyR&X-Amz-Signature=42594d42cd55b82e21982a952191db994d06f955c422856dd8cb105f874428a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXZSFLP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI35PaoiQ%2BrYKARjbLIpJJS5lsxDkefPWk0eBR%2BMcywIgD7aaw9PqWlEyN%2FPYeciiB1ys3IBX0UVIN6GYub%2BsevEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP27yMZa4AHljrXlYyrcA4TJKK%2FVoFAVTqBIRrKE7XfxTFGhh6KkQNoL5AyvI6Khgc%2BmfmgTbHIGr9GYF2PfC34KNnPAERJG%2FJG3uvKxJehNcIBwuNpJvXbfYlS5LEZn4msM8F8hM9Jhcze1gwqJuqmrUBShAgkWzCgGn1PWgMf4y2XkaNz2YAb9c%2FxDyILM%2FzGo%2FacTBLWoDj2IJS%2BUe06DkIOoCF2Rm6aIR4m4ZhA7oheSVxexv8zpeGuZRBtA2SpY1gLSHmYzeWdvD4tFkQv0X6wJZ%2F9Sz4Nh5NOBg9Vzsg9UwyGpC%2BST3vWNY1XRwZbKZJj1uyVmmMeysmJJDcVMatWpIchzs0f2UsjpPimtVy4P9xzthzgkM79aCiwF7A3wTxyqi0KZCqwSctuDFdYph5CQUYsntIB6jTbqQMb5LcCDxcR10l1U3Si1EySNvpMMX6sn%2Bl6NQMeWO2QHISk%2BHgRK5JAFrvy3Pu5Xd8QFX222p32kP1DT48jZM8Bjz75CvAzTPl3UwjTyN9mejbPkgbjFWVO0JWsEP%2FbZg1Ktc%2F49QeZMW6q5dQDf%2FyyIlAK94y6TyPRjPI5HSbi3q%2FXtPy1E4uuBgnYgITLNY0v8BQ2n1sZZDjZpb%2FWbZOwJzSoqyB%2BsZBzYzYWYMLKB2L4GOqUB2I4EBiIx%2BgY7BiVNm2MRtPptpiLCQ2nrqgr%2Bgib3iP5gDuDJnBFMFavFMk4QMgXzQ1FadgfCPtQ5wMN1zk59w11bedJLlHYpLy0dfkoxV3rAlUm4Ltzd5uKFKmIAun7WV4pemDPF9agHMrJMcHFz9VVdNVjrDAQiSsQhrMLJRrPZAQ9y60eKEeXvtMYLTE%2BgWWUoVjdPWApZ9k%2FjuPoRcTUR0wyR&X-Amz-Signature=47c4f02f6b1b00222deecb03e88bf98efbdd56ae929b60e8924900d05d9634dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXZSFLP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI35PaoiQ%2BrYKARjbLIpJJS5lsxDkefPWk0eBR%2BMcywIgD7aaw9PqWlEyN%2FPYeciiB1ys3IBX0UVIN6GYub%2BsevEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP27yMZa4AHljrXlYyrcA4TJKK%2FVoFAVTqBIRrKE7XfxTFGhh6KkQNoL5AyvI6Khgc%2BmfmgTbHIGr9GYF2PfC34KNnPAERJG%2FJG3uvKxJehNcIBwuNpJvXbfYlS5LEZn4msM8F8hM9Jhcze1gwqJuqmrUBShAgkWzCgGn1PWgMf4y2XkaNz2YAb9c%2FxDyILM%2FzGo%2FacTBLWoDj2IJS%2BUe06DkIOoCF2Rm6aIR4m4ZhA7oheSVxexv8zpeGuZRBtA2SpY1gLSHmYzeWdvD4tFkQv0X6wJZ%2F9Sz4Nh5NOBg9Vzsg9UwyGpC%2BST3vWNY1XRwZbKZJj1uyVmmMeysmJJDcVMatWpIchzs0f2UsjpPimtVy4P9xzthzgkM79aCiwF7A3wTxyqi0KZCqwSctuDFdYph5CQUYsntIB6jTbqQMb5LcCDxcR10l1U3Si1EySNvpMMX6sn%2Bl6NQMeWO2QHISk%2BHgRK5JAFrvy3Pu5Xd8QFX222p32kP1DT48jZM8Bjz75CvAzTPl3UwjTyN9mejbPkgbjFWVO0JWsEP%2FbZg1Ktc%2F49QeZMW6q5dQDf%2FyyIlAK94y6TyPRjPI5HSbi3q%2FXtPy1E4uuBgnYgITLNY0v8BQ2n1sZZDjZpb%2FWbZOwJzSoqyB%2BsZBzYzYWYMLKB2L4GOqUB2I4EBiIx%2BgY7BiVNm2MRtPptpiLCQ2nrqgr%2Bgib3iP5gDuDJnBFMFavFMk4QMgXzQ1FadgfCPtQ5wMN1zk59w11bedJLlHYpLy0dfkoxV3rAlUm4Ltzd5uKFKmIAun7WV4pemDPF9agHMrJMcHFz9VVdNVjrDAQiSsQhrMLJRrPZAQ9y60eKEeXvtMYLTE%2BgWWUoVjdPWApZ9k%2FjuPoRcTUR0wyR&X-Amz-Signature=9993214daca170e71d055056579c645599b9402b2b3a68432ffc3ff5ac934019&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXZSFLP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJI35PaoiQ%2BrYKARjbLIpJJS5lsxDkefPWk0eBR%2BMcywIgD7aaw9PqWlEyN%2FPYeciiB1ys3IBX0UVIN6GYub%2BsevEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDP27yMZa4AHljrXlYyrcA4TJKK%2FVoFAVTqBIRrKE7XfxTFGhh6KkQNoL5AyvI6Khgc%2BmfmgTbHIGr9GYF2PfC34KNnPAERJG%2FJG3uvKxJehNcIBwuNpJvXbfYlS5LEZn4msM8F8hM9Jhcze1gwqJuqmrUBShAgkWzCgGn1PWgMf4y2XkaNz2YAb9c%2FxDyILM%2FzGo%2FacTBLWoDj2IJS%2BUe06DkIOoCF2Rm6aIR4m4ZhA7oheSVxexv8zpeGuZRBtA2SpY1gLSHmYzeWdvD4tFkQv0X6wJZ%2F9Sz4Nh5NOBg9Vzsg9UwyGpC%2BST3vWNY1XRwZbKZJj1uyVmmMeysmJJDcVMatWpIchzs0f2UsjpPimtVy4P9xzthzgkM79aCiwF7A3wTxyqi0KZCqwSctuDFdYph5CQUYsntIB6jTbqQMb5LcCDxcR10l1U3Si1EySNvpMMX6sn%2Bl6NQMeWO2QHISk%2BHgRK5JAFrvy3Pu5Xd8QFX222p32kP1DT48jZM8Bjz75CvAzTPl3UwjTyN9mejbPkgbjFWVO0JWsEP%2FbZg1Ktc%2F49QeZMW6q5dQDf%2FyyIlAK94y6TyPRjPI5HSbi3q%2FXtPy1E4uuBgnYgITLNY0v8BQ2n1sZZDjZpb%2FWbZOwJzSoqyB%2BsZBzYzYWYMLKB2L4GOqUB2I4EBiIx%2BgY7BiVNm2MRtPptpiLCQ2nrqgr%2Bgib3iP5gDuDJnBFMFavFMk4QMgXzQ1FadgfCPtQ5wMN1zk59w11bedJLlHYpLy0dfkoxV3rAlUm4Ltzd5uKFKmIAun7WV4pemDPF9agHMrJMcHFz9VVdNVjrDAQiSsQhrMLJRrPZAQ9y60eKEeXvtMYLTE%2BgWWUoVjdPWApZ9k%2FjuPoRcTUR0wyR&X-Amz-Signature=dda3a5b1b41c929dd47776e6ec5e012e90c2a991a6f09617fec7ecf2daa00966&X-Amz-SignedHeaders=host&x-id=GetObject)
