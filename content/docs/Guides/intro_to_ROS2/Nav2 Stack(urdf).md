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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWQFB2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGy%2F0KmYVwedceuz0ZvrHOQzqhGhaK2ON29px%2FoL8PgXAiEAhtGrio%2BQl7OtAIt3PUw9cj0ANnXujgawFy6643ZlLK0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGI3TpE61OTio5m0SrcA6yzXyd5wDQX2iGUX4yLVIGFZVhSSfrfBB5qZ27%2F2kbCh2Kc34rgwJzi7LoxjsFF43f%2BCmO%2BGG%2F1wtXoQ%2BO9uuuRrHqPKDkvKJmwcvKxIu%2FqX47gZZPsRzpSBs4BNgwdL%2FgN0Uaxv1LJhi4vSFwRDFbZVUmvZpZSFJSZZMNmVy76gsDxMNmDXAuKWuVICbIpIm%2FZpawBytzmB40U4FOpsBWJoB7fnWRBsj%2FChqoSqGF6biBu2GxjO8rUr1jY0YJuk802PFqQ66kOvx32ALyeBC67D5Erv8Tcs94CPtMuUYtSPGRZJZED18NKCH3m3xCOh9WiOBq8%2FSHTyEwTHpz7j7qXmx%2FJfVfK70OjoIiwp%2FYT3BMHVRxEklHTHCXoKEwGeJg%2BgBthS17T6GeMtpuvDLs0k4OCRR7RgjTHj6y8fj5FNCjeSU5EF8P47R07p18LNfQzLhTFWfO%2FyfT1ed9rCXxVZH%2Fyg%2FpkBa7hSdXt3NaJTFfe7a7UYpi%2FYb9BW1XuEW%2FUbxuWh45wM47KhKux2GKHycwUBEVNqCArqBUAiqqfK39v%2BctjLz%2F%2BnG%2BNsTm2Wsiq79tKh%2Bi6BwZczV4nnZaPYIgtZ5Pt9oXfE5Xakmfem8BDyZH8wIuwx6rOMLW5mcAGOqUBL5bEtHrxxP%2FXgLX2SH9kqPxQRsLRs5dFQfQXBTGIK33lYZOIIau3R0zUGj18RQiizd2iIBHYndb67b2S7v%2F6F1H9OM98ZRyRpdTsKWlpW6%2F2g%2BLoQC7CmmcnFXXcSAdyTAc3uFdCKj%2BlatrYyzeuB6t7y1wtrj6dnNVhJdwTUqVmgiFowOiD5JbHICnYaAFKMqQvI3MpZPp8QdFYR%2FgQup%2FYgox4&X-Amz-Signature=0b2d78c4695ae3ff0ca1ab7b6e75f76cef4da214e97312433d1ae5a222b56a47&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWQFB2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGy%2F0KmYVwedceuz0ZvrHOQzqhGhaK2ON29px%2FoL8PgXAiEAhtGrio%2BQl7OtAIt3PUw9cj0ANnXujgawFy6643ZlLK0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGI3TpE61OTio5m0SrcA6yzXyd5wDQX2iGUX4yLVIGFZVhSSfrfBB5qZ27%2F2kbCh2Kc34rgwJzi7LoxjsFF43f%2BCmO%2BGG%2F1wtXoQ%2BO9uuuRrHqPKDkvKJmwcvKxIu%2FqX47gZZPsRzpSBs4BNgwdL%2FgN0Uaxv1LJhi4vSFwRDFbZVUmvZpZSFJSZZMNmVy76gsDxMNmDXAuKWuVICbIpIm%2FZpawBytzmB40U4FOpsBWJoB7fnWRBsj%2FChqoSqGF6biBu2GxjO8rUr1jY0YJuk802PFqQ66kOvx32ALyeBC67D5Erv8Tcs94CPtMuUYtSPGRZJZED18NKCH3m3xCOh9WiOBq8%2FSHTyEwTHpz7j7qXmx%2FJfVfK70OjoIiwp%2FYT3BMHVRxEklHTHCXoKEwGeJg%2BgBthS17T6GeMtpuvDLs0k4OCRR7RgjTHj6y8fj5FNCjeSU5EF8P47R07p18LNfQzLhTFWfO%2FyfT1ed9rCXxVZH%2Fyg%2FpkBa7hSdXt3NaJTFfe7a7UYpi%2FYb9BW1XuEW%2FUbxuWh45wM47KhKux2GKHycwUBEVNqCArqBUAiqqfK39v%2BctjLz%2F%2BnG%2BNsTm2Wsiq79tKh%2Bi6BwZczV4nnZaPYIgtZ5Pt9oXfE5Xakmfem8BDyZH8wIuwx6rOMLW5mcAGOqUBL5bEtHrxxP%2FXgLX2SH9kqPxQRsLRs5dFQfQXBTGIK33lYZOIIau3R0zUGj18RQiizd2iIBHYndb67b2S7v%2F6F1H9OM98ZRyRpdTsKWlpW6%2F2g%2BLoQC7CmmcnFXXcSAdyTAc3uFdCKj%2BlatrYyzeuB6t7y1wtrj6dnNVhJdwTUqVmgiFowOiD5JbHICnYaAFKMqQvI3MpZPp8QdFYR%2FgQup%2FYgox4&X-Amz-Signature=21461f64034223d17757246e0562beada5f29052166b7805e859756e299eb61e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWQFB2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGy%2F0KmYVwedceuz0ZvrHOQzqhGhaK2ON29px%2FoL8PgXAiEAhtGrio%2BQl7OtAIt3PUw9cj0ANnXujgawFy6643ZlLK0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGI3TpE61OTio5m0SrcA6yzXyd5wDQX2iGUX4yLVIGFZVhSSfrfBB5qZ27%2F2kbCh2Kc34rgwJzi7LoxjsFF43f%2BCmO%2BGG%2F1wtXoQ%2BO9uuuRrHqPKDkvKJmwcvKxIu%2FqX47gZZPsRzpSBs4BNgwdL%2FgN0Uaxv1LJhi4vSFwRDFbZVUmvZpZSFJSZZMNmVy76gsDxMNmDXAuKWuVICbIpIm%2FZpawBytzmB40U4FOpsBWJoB7fnWRBsj%2FChqoSqGF6biBu2GxjO8rUr1jY0YJuk802PFqQ66kOvx32ALyeBC67D5Erv8Tcs94CPtMuUYtSPGRZJZED18NKCH3m3xCOh9WiOBq8%2FSHTyEwTHpz7j7qXmx%2FJfVfK70OjoIiwp%2FYT3BMHVRxEklHTHCXoKEwGeJg%2BgBthS17T6GeMtpuvDLs0k4OCRR7RgjTHj6y8fj5FNCjeSU5EF8P47R07p18LNfQzLhTFWfO%2FyfT1ed9rCXxVZH%2Fyg%2FpkBa7hSdXt3NaJTFfe7a7UYpi%2FYb9BW1XuEW%2FUbxuWh45wM47KhKux2GKHycwUBEVNqCArqBUAiqqfK39v%2BctjLz%2F%2BnG%2BNsTm2Wsiq79tKh%2Bi6BwZczV4nnZaPYIgtZ5Pt9oXfE5Xakmfem8BDyZH8wIuwx6rOMLW5mcAGOqUBL5bEtHrxxP%2FXgLX2SH9kqPxQRsLRs5dFQfQXBTGIK33lYZOIIau3R0zUGj18RQiizd2iIBHYndb67b2S7v%2F6F1H9OM98ZRyRpdTsKWlpW6%2F2g%2BLoQC7CmmcnFXXcSAdyTAc3uFdCKj%2BlatrYyzeuB6t7y1wtrj6dnNVhJdwTUqVmgiFowOiD5JbHICnYaAFKMqQvI3MpZPp8QdFYR%2FgQup%2FYgox4&X-Amz-Signature=5494052e6a62ad9e89a4843fb0790d730f95eb1e0ca625e56ba3c4b2d52129e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWQFB2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGy%2F0KmYVwedceuz0ZvrHOQzqhGhaK2ON29px%2FoL8PgXAiEAhtGrio%2BQl7OtAIt3PUw9cj0ANnXujgawFy6643ZlLK0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGI3TpE61OTio5m0SrcA6yzXyd5wDQX2iGUX4yLVIGFZVhSSfrfBB5qZ27%2F2kbCh2Kc34rgwJzi7LoxjsFF43f%2BCmO%2BGG%2F1wtXoQ%2BO9uuuRrHqPKDkvKJmwcvKxIu%2FqX47gZZPsRzpSBs4BNgwdL%2FgN0Uaxv1LJhi4vSFwRDFbZVUmvZpZSFJSZZMNmVy76gsDxMNmDXAuKWuVICbIpIm%2FZpawBytzmB40U4FOpsBWJoB7fnWRBsj%2FChqoSqGF6biBu2GxjO8rUr1jY0YJuk802PFqQ66kOvx32ALyeBC67D5Erv8Tcs94CPtMuUYtSPGRZJZED18NKCH3m3xCOh9WiOBq8%2FSHTyEwTHpz7j7qXmx%2FJfVfK70OjoIiwp%2FYT3BMHVRxEklHTHCXoKEwGeJg%2BgBthS17T6GeMtpuvDLs0k4OCRR7RgjTHj6y8fj5FNCjeSU5EF8P47R07p18LNfQzLhTFWfO%2FyfT1ed9rCXxVZH%2Fyg%2FpkBa7hSdXt3NaJTFfe7a7UYpi%2FYb9BW1XuEW%2FUbxuWh45wM47KhKux2GKHycwUBEVNqCArqBUAiqqfK39v%2BctjLz%2F%2BnG%2BNsTm2Wsiq79tKh%2Bi6BwZczV4nnZaPYIgtZ5Pt9oXfE5Xakmfem8BDyZH8wIuwx6rOMLW5mcAGOqUBL5bEtHrxxP%2FXgLX2SH9kqPxQRsLRs5dFQfQXBTGIK33lYZOIIau3R0zUGj18RQiizd2iIBHYndb67b2S7v%2F6F1H9OM98ZRyRpdTsKWlpW6%2F2g%2BLoQC7CmmcnFXXcSAdyTAc3uFdCKj%2BlatrYyzeuB6t7y1wtrj6dnNVhJdwTUqVmgiFowOiD5JbHICnYaAFKMqQvI3MpZPp8QdFYR%2FgQup%2FYgox4&X-Amz-Signature=f0534fd119cb6f54a43547a1f61e6baab6bdd94d39cb67d93aeb3cefb60c1b04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWQFB2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGy%2F0KmYVwedceuz0ZvrHOQzqhGhaK2ON29px%2FoL8PgXAiEAhtGrio%2BQl7OtAIt3PUw9cj0ANnXujgawFy6643ZlLK0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGI3TpE61OTio5m0SrcA6yzXyd5wDQX2iGUX4yLVIGFZVhSSfrfBB5qZ27%2F2kbCh2Kc34rgwJzi7LoxjsFF43f%2BCmO%2BGG%2F1wtXoQ%2BO9uuuRrHqPKDkvKJmwcvKxIu%2FqX47gZZPsRzpSBs4BNgwdL%2FgN0Uaxv1LJhi4vSFwRDFbZVUmvZpZSFJSZZMNmVy76gsDxMNmDXAuKWuVICbIpIm%2FZpawBytzmB40U4FOpsBWJoB7fnWRBsj%2FChqoSqGF6biBu2GxjO8rUr1jY0YJuk802PFqQ66kOvx32ALyeBC67D5Erv8Tcs94CPtMuUYtSPGRZJZED18NKCH3m3xCOh9WiOBq8%2FSHTyEwTHpz7j7qXmx%2FJfVfK70OjoIiwp%2FYT3BMHVRxEklHTHCXoKEwGeJg%2BgBthS17T6GeMtpuvDLs0k4OCRR7RgjTHj6y8fj5FNCjeSU5EF8P47R07p18LNfQzLhTFWfO%2FyfT1ed9rCXxVZH%2Fyg%2FpkBa7hSdXt3NaJTFfe7a7UYpi%2FYb9BW1XuEW%2FUbxuWh45wM47KhKux2GKHycwUBEVNqCArqBUAiqqfK39v%2BctjLz%2F%2BnG%2BNsTm2Wsiq79tKh%2Bi6BwZczV4nnZaPYIgtZ5Pt9oXfE5Xakmfem8BDyZH8wIuwx6rOMLW5mcAGOqUBL5bEtHrxxP%2FXgLX2SH9kqPxQRsLRs5dFQfQXBTGIK33lYZOIIau3R0zUGj18RQiizd2iIBHYndb67b2S7v%2F6F1H9OM98ZRyRpdTsKWlpW6%2F2g%2BLoQC7CmmcnFXXcSAdyTAc3uFdCKj%2BlatrYyzeuB6t7y1wtrj6dnNVhJdwTUqVmgiFowOiD5JbHICnYaAFKMqQvI3MpZPp8QdFYR%2FgQup%2FYgox4&X-Amz-Signature=ebca7940a006deea346df1d5144f0dce371bfc0235dc371a4029aa27665282f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWQFB2B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGy%2F0KmYVwedceuz0ZvrHOQzqhGhaK2ON29px%2FoL8PgXAiEAhtGrio%2BQl7OtAIt3PUw9cj0ANnXujgawFy6643ZlLK0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGI3TpE61OTio5m0SrcA6yzXyd5wDQX2iGUX4yLVIGFZVhSSfrfBB5qZ27%2F2kbCh2Kc34rgwJzi7LoxjsFF43f%2BCmO%2BGG%2F1wtXoQ%2BO9uuuRrHqPKDkvKJmwcvKxIu%2FqX47gZZPsRzpSBs4BNgwdL%2FgN0Uaxv1LJhi4vSFwRDFbZVUmvZpZSFJSZZMNmVy76gsDxMNmDXAuKWuVICbIpIm%2FZpawBytzmB40U4FOpsBWJoB7fnWRBsj%2FChqoSqGF6biBu2GxjO8rUr1jY0YJuk802PFqQ66kOvx32ALyeBC67D5Erv8Tcs94CPtMuUYtSPGRZJZED18NKCH3m3xCOh9WiOBq8%2FSHTyEwTHpz7j7qXmx%2FJfVfK70OjoIiwp%2FYT3BMHVRxEklHTHCXoKEwGeJg%2BgBthS17T6GeMtpuvDLs0k4OCRR7RgjTHj6y8fj5FNCjeSU5EF8P47R07p18LNfQzLhTFWfO%2FyfT1ed9rCXxVZH%2Fyg%2FpkBa7hSdXt3NaJTFfe7a7UYpi%2FYb9BW1XuEW%2FUbxuWh45wM47KhKux2GKHycwUBEVNqCArqBUAiqqfK39v%2BctjLz%2F%2BnG%2BNsTm2Wsiq79tKh%2Bi6BwZczV4nnZaPYIgtZ5Pt9oXfE5Xakmfem8BDyZH8wIuwx6rOMLW5mcAGOqUBL5bEtHrxxP%2FXgLX2SH9kqPxQRsLRs5dFQfQXBTGIK33lYZOIIau3R0zUGj18RQiizd2iIBHYndb67b2S7v%2F6F1H9OM98ZRyRpdTsKWlpW6%2F2g%2BLoQC7CmmcnFXXcSAdyTAc3uFdCKj%2BlatrYyzeuB6t7y1wtrj6dnNVhJdwTUqVmgiFowOiD5JbHICnYaAFKMqQvI3MpZPp8QdFYR%2FgQup%2FYgox4&X-Amz-Signature=ac90efdf4c1d141051da555b5fd832b5f77d1c3362824f418245ec5b2717747e&X-Amz-SignedHeaders=host&x-id=GetObject)
