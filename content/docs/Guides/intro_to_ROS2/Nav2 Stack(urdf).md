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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUDALPM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoie0kcg8UQSD0H5V1VMqmhW1T9QWPOmsuPZqnMpF9YgIhAKtYNPQHWV%2BrEoZ7e4Im2PZvYzpeC1w35ejmCqDC%2FBdUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsy0jYDESauwkSnAq3AMSSR6IE%2FNYjRr%2BKh6G2qeGrSEjMWmswugJeLgn8W7gZfKCiFIB57dzUFc%2B9Sm%2F79EeRIanAKgTk5n9EKKel7aOPindPAxfWg0Nv0JVbzyFpI5oyn%2F3fV0FZ6%2B9XD1Lh8tKUm0PIPYPVVx7aWhw78ChBtt6gcWgbwMgrIYNltLHhwS3MzhzyI%2Fsu%2FXCS3RGGBBIboEPkoxZ57cM0hBD3jaasyWOqv%2FCPHNjAQQK657%2FmAljgmlsYxxZP3cgU2hsp127v%2BimxJ%2B6qG%2BBJZl%2FK5A5Cu4y1OrmcxhZ5i1XgD8n0ijd%2FzSxyNgI6m98A%2B%2BuYA3l68Pzoj8C5deHtVZ68WyJiUF3RBJqFtCBo0ZzpZESfAr02fApQtpqlLGrws3QKOOvZH1b6Qvbqx1I%2FICeF61oLzW62Z2s5o2aNuBHw0iC9ZRjWXg8qK6AXMQKVw3yug731iKZ90uZF6%2FJQnVWyCvW8QX9hwv3YWy8ESnOh%2FEcCgk9EcfzQZrTUxwaXHVKvGQmQ5CNa6wClg6wW3SYmA0POxlevQAn5Rcxm6F4I5uFaZTiML0SRs8ESpFa6g650q1%2Fcdh2JfFcH5SDTwbXz9qVCodplpf9r%2FBt6tQFzMpLBRqULH5ncUxhb3vQYzCtsp%2FCBjqkAR6Xg8QdhsdOLDaxxw1Mxm5HkkKVPJOm2qStLatdPwVuH9eO8TstFpH5VxNoOpAraIuY9893PYvQLfxO3erY7SbEVXRu%2FtPxCZLeVuhPa2AupGxgewzRSfyucK6SBOrjSbK2ZnCTcRZ6Kyc5%2B0d7Qru3jbFZIDtO2cjjlhwHmOMyz3oRwYxqAD8N4j1XWYPMEZc7LFQdmnis4Dntgq8sOTxXuLYO&X-Amz-Signature=cbbdf268b1345d820e90d410bf2a6185fc77099f0584c97f1508cafe82715036&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUDALPM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoie0kcg8UQSD0H5V1VMqmhW1T9QWPOmsuPZqnMpF9YgIhAKtYNPQHWV%2BrEoZ7e4Im2PZvYzpeC1w35ejmCqDC%2FBdUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsy0jYDESauwkSnAq3AMSSR6IE%2FNYjRr%2BKh6G2qeGrSEjMWmswugJeLgn8W7gZfKCiFIB57dzUFc%2B9Sm%2F79EeRIanAKgTk5n9EKKel7aOPindPAxfWg0Nv0JVbzyFpI5oyn%2F3fV0FZ6%2B9XD1Lh8tKUm0PIPYPVVx7aWhw78ChBtt6gcWgbwMgrIYNltLHhwS3MzhzyI%2Fsu%2FXCS3RGGBBIboEPkoxZ57cM0hBD3jaasyWOqv%2FCPHNjAQQK657%2FmAljgmlsYxxZP3cgU2hsp127v%2BimxJ%2B6qG%2BBJZl%2FK5A5Cu4y1OrmcxhZ5i1XgD8n0ijd%2FzSxyNgI6m98A%2B%2BuYA3l68Pzoj8C5deHtVZ68WyJiUF3RBJqFtCBo0ZzpZESfAr02fApQtpqlLGrws3QKOOvZH1b6Qvbqx1I%2FICeF61oLzW62Z2s5o2aNuBHw0iC9ZRjWXg8qK6AXMQKVw3yug731iKZ90uZF6%2FJQnVWyCvW8QX9hwv3YWy8ESnOh%2FEcCgk9EcfzQZrTUxwaXHVKvGQmQ5CNa6wClg6wW3SYmA0POxlevQAn5Rcxm6F4I5uFaZTiML0SRs8ESpFa6g650q1%2Fcdh2JfFcH5SDTwbXz9qVCodplpf9r%2FBt6tQFzMpLBRqULH5ncUxhb3vQYzCtsp%2FCBjqkAR6Xg8QdhsdOLDaxxw1Mxm5HkkKVPJOm2qStLatdPwVuH9eO8TstFpH5VxNoOpAraIuY9893PYvQLfxO3erY7SbEVXRu%2FtPxCZLeVuhPa2AupGxgewzRSfyucK6SBOrjSbK2ZnCTcRZ6Kyc5%2B0d7Qru3jbFZIDtO2cjjlhwHmOMyz3oRwYxqAD8N4j1XWYPMEZc7LFQdmnis4Dntgq8sOTxXuLYO&X-Amz-Signature=ef2cac1708f9b841bf7ced388a3c51929ade2297180c3a850ea2120a74ca6b18&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUDALPM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoie0kcg8UQSD0H5V1VMqmhW1T9QWPOmsuPZqnMpF9YgIhAKtYNPQHWV%2BrEoZ7e4Im2PZvYzpeC1w35ejmCqDC%2FBdUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsy0jYDESauwkSnAq3AMSSR6IE%2FNYjRr%2BKh6G2qeGrSEjMWmswugJeLgn8W7gZfKCiFIB57dzUFc%2B9Sm%2F79EeRIanAKgTk5n9EKKel7aOPindPAxfWg0Nv0JVbzyFpI5oyn%2F3fV0FZ6%2B9XD1Lh8tKUm0PIPYPVVx7aWhw78ChBtt6gcWgbwMgrIYNltLHhwS3MzhzyI%2Fsu%2FXCS3RGGBBIboEPkoxZ57cM0hBD3jaasyWOqv%2FCPHNjAQQK657%2FmAljgmlsYxxZP3cgU2hsp127v%2BimxJ%2B6qG%2BBJZl%2FK5A5Cu4y1OrmcxhZ5i1XgD8n0ijd%2FzSxyNgI6m98A%2B%2BuYA3l68Pzoj8C5deHtVZ68WyJiUF3RBJqFtCBo0ZzpZESfAr02fApQtpqlLGrws3QKOOvZH1b6Qvbqx1I%2FICeF61oLzW62Z2s5o2aNuBHw0iC9ZRjWXg8qK6AXMQKVw3yug731iKZ90uZF6%2FJQnVWyCvW8QX9hwv3YWy8ESnOh%2FEcCgk9EcfzQZrTUxwaXHVKvGQmQ5CNa6wClg6wW3SYmA0POxlevQAn5Rcxm6F4I5uFaZTiML0SRs8ESpFa6g650q1%2Fcdh2JfFcH5SDTwbXz9qVCodplpf9r%2FBt6tQFzMpLBRqULH5ncUxhb3vQYzCtsp%2FCBjqkAR6Xg8QdhsdOLDaxxw1Mxm5HkkKVPJOm2qStLatdPwVuH9eO8TstFpH5VxNoOpAraIuY9893PYvQLfxO3erY7SbEVXRu%2FtPxCZLeVuhPa2AupGxgewzRSfyucK6SBOrjSbK2ZnCTcRZ6Kyc5%2B0d7Qru3jbFZIDtO2cjjlhwHmOMyz3oRwYxqAD8N4j1XWYPMEZc7LFQdmnis4Dntgq8sOTxXuLYO&X-Amz-Signature=e9a05c3181cf2f28cb33ccefac671f1c49d8ddb106f140a73bcf8fc8d60d3e49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUDALPM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoie0kcg8UQSD0H5V1VMqmhW1T9QWPOmsuPZqnMpF9YgIhAKtYNPQHWV%2BrEoZ7e4Im2PZvYzpeC1w35ejmCqDC%2FBdUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsy0jYDESauwkSnAq3AMSSR6IE%2FNYjRr%2BKh6G2qeGrSEjMWmswugJeLgn8W7gZfKCiFIB57dzUFc%2B9Sm%2F79EeRIanAKgTk5n9EKKel7aOPindPAxfWg0Nv0JVbzyFpI5oyn%2F3fV0FZ6%2B9XD1Lh8tKUm0PIPYPVVx7aWhw78ChBtt6gcWgbwMgrIYNltLHhwS3MzhzyI%2Fsu%2FXCS3RGGBBIboEPkoxZ57cM0hBD3jaasyWOqv%2FCPHNjAQQK657%2FmAljgmlsYxxZP3cgU2hsp127v%2BimxJ%2B6qG%2BBJZl%2FK5A5Cu4y1OrmcxhZ5i1XgD8n0ijd%2FzSxyNgI6m98A%2B%2BuYA3l68Pzoj8C5deHtVZ68WyJiUF3RBJqFtCBo0ZzpZESfAr02fApQtpqlLGrws3QKOOvZH1b6Qvbqx1I%2FICeF61oLzW62Z2s5o2aNuBHw0iC9ZRjWXg8qK6AXMQKVw3yug731iKZ90uZF6%2FJQnVWyCvW8QX9hwv3YWy8ESnOh%2FEcCgk9EcfzQZrTUxwaXHVKvGQmQ5CNa6wClg6wW3SYmA0POxlevQAn5Rcxm6F4I5uFaZTiML0SRs8ESpFa6g650q1%2Fcdh2JfFcH5SDTwbXz9qVCodplpf9r%2FBt6tQFzMpLBRqULH5ncUxhb3vQYzCtsp%2FCBjqkAR6Xg8QdhsdOLDaxxw1Mxm5HkkKVPJOm2qStLatdPwVuH9eO8TstFpH5VxNoOpAraIuY9893PYvQLfxO3erY7SbEVXRu%2FtPxCZLeVuhPa2AupGxgewzRSfyucK6SBOrjSbK2ZnCTcRZ6Kyc5%2B0d7Qru3jbFZIDtO2cjjlhwHmOMyz3oRwYxqAD8N4j1XWYPMEZc7LFQdmnis4Dntgq8sOTxXuLYO&X-Amz-Signature=956d9fe7463eaa5df86111387ed02665d32775fb9f5f28cac39cc6926fba5a27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUDALPM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoie0kcg8UQSD0H5V1VMqmhW1T9QWPOmsuPZqnMpF9YgIhAKtYNPQHWV%2BrEoZ7e4Im2PZvYzpeC1w35ejmCqDC%2FBdUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsy0jYDESauwkSnAq3AMSSR6IE%2FNYjRr%2BKh6G2qeGrSEjMWmswugJeLgn8W7gZfKCiFIB57dzUFc%2B9Sm%2F79EeRIanAKgTk5n9EKKel7aOPindPAxfWg0Nv0JVbzyFpI5oyn%2F3fV0FZ6%2B9XD1Lh8tKUm0PIPYPVVx7aWhw78ChBtt6gcWgbwMgrIYNltLHhwS3MzhzyI%2Fsu%2FXCS3RGGBBIboEPkoxZ57cM0hBD3jaasyWOqv%2FCPHNjAQQK657%2FmAljgmlsYxxZP3cgU2hsp127v%2BimxJ%2B6qG%2BBJZl%2FK5A5Cu4y1OrmcxhZ5i1XgD8n0ijd%2FzSxyNgI6m98A%2B%2BuYA3l68Pzoj8C5deHtVZ68WyJiUF3RBJqFtCBo0ZzpZESfAr02fApQtpqlLGrws3QKOOvZH1b6Qvbqx1I%2FICeF61oLzW62Z2s5o2aNuBHw0iC9ZRjWXg8qK6AXMQKVw3yug731iKZ90uZF6%2FJQnVWyCvW8QX9hwv3YWy8ESnOh%2FEcCgk9EcfzQZrTUxwaXHVKvGQmQ5CNa6wClg6wW3SYmA0POxlevQAn5Rcxm6F4I5uFaZTiML0SRs8ESpFa6g650q1%2Fcdh2JfFcH5SDTwbXz9qVCodplpf9r%2FBt6tQFzMpLBRqULH5ncUxhb3vQYzCtsp%2FCBjqkAR6Xg8QdhsdOLDaxxw1Mxm5HkkKVPJOm2qStLatdPwVuH9eO8TstFpH5VxNoOpAraIuY9893PYvQLfxO3erY7SbEVXRu%2FtPxCZLeVuhPa2AupGxgewzRSfyucK6SBOrjSbK2ZnCTcRZ6Kyc5%2B0d7Qru3jbFZIDtO2cjjlhwHmOMyz3oRwYxqAD8N4j1XWYPMEZc7LFQdmnis4Dntgq8sOTxXuLYO&X-Amz-Signature=196c7733d616a1d0a23416d707e5b6eaab789e4efb63ae3fb74c497c365565b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUDALPM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoie0kcg8UQSD0H5V1VMqmhW1T9QWPOmsuPZqnMpF9YgIhAKtYNPQHWV%2BrEoZ7e4Im2PZvYzpeC1w35ejmCqDC%2FBdUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsy0jYDESauwkSnAq3AMSSR6IE%2FNYjRr%2BKh6G2qeGrSEjMWmswugJeLgn8W7gZfKCiFIB57dzUFc%2B9Sm%2F79EeRIanAKgTk5n9EKKel7aOPindPAxfWg0Nv0JVbzyFpI5oyn%2F3fV0FZ6%2B9XD1Lh8tKUm0PIPYPVVx7aWhw78ChBtt6gcWgbwMgrIYNltLHhwS3MzhzyI%2Fsu%2FXCS3RGGBBIboEPkoxZ57cM0hBD3jaasyWOqv%2FCPHNjAQQK657%2FmAljgmlsYxxZP3cgU2hsp127v%2BimxJ%2B6qG%2BBJZl%2FK5A5Cu4y1OrmcxhZ5i1XgD8n0ijd%2FzSxyNgI6m98A%2B%2BuYA3l68Pzoj8C5deHtVZ68WyJiUF3RBJqFtCBo0ZzpZESfAr02fApQtpqlLGrws3QKOOvZH1b6Qvbqx1I%2FICeF61oLzW62Z2s5o2aNuBHw0iC9ZRjWXg8qK6AXMQKVw3yug731iKZ90uZF6%2FJQnVWyCvW8QX9hwv3YWy8ESnOh%2FEcCgk9EcfzQZrTUxwaXHVKvGQmQ5CNa6wClg6wW3SYmA0POxlevQAn5Rcxm6F4I5uFaZTiML0SRs8ESpFa6g650q1%2Fcdh2JfFcH5SDTwbXz9qVCodplpf9r%2FBt6tQFzMpLBRqULH5ncUxhb3vQYzCtsp%2FCBjqkAR6Xg8QdhsdOLDaxxw1Mxm5HkkKVPJOm2qStLatdPwVuH9eO8TstFpH5VxNoOpAraIuY9893PYvQLfxO3erY7SbEVXRu%2FtPxCZLeVuhPa2AupGxgewzRSfyucK6SBOrjSbK2ZnCTcRZ6Kyc5%2B0d7Qru3jbFZIDtO2cjjlhwHmOMyz3oRwYxqAD8N4j1XWYPMEZc7LFQdmnis4Dntgq8sOTxXuLYO&X-Amz-Signature=88a794124b5714be1add420a5b29195dd32f0db29623bcb612f82467d427fa00&X-Amz-SignedHeaders=host&x-id=GetObject)
