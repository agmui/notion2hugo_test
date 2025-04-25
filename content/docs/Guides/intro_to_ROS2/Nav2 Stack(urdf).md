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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YMUD2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLUC3eP3zeijFGF1CSDFdUB58DilhlvVVbMBFJxgZPQIhAM6VnEXJ0TohYCa5dKQA0e%2FGAl6HwzaUbljdQdW2E6DlKv8DCCkQABoMNjM3NDIzMTgzODA1IgzxpE45TgoS5Fnwi6cq3AMVssV%2Fs9ubw%2BFkqHxe4j4MAPOkJndFn%2BPQ2i4L8gxmH501%2BbkJ0RriPUQV7nqSFO6tKFfwTk0ik8vcCLFWvVVCl8Pg9U0zKRC%2Bk5r28gT9qxLz%2BtFgrrQBdqNXiThRCaeJJxlbhMOtOo8GsFZMrSTOK0c0s2eFE%2FoG8GMGTapXo2jG96M5PXC7yOtMwppJwfyst9udHVeEx9%2BjHpxBQbkg8vRleGHzs08iuKeFr6alOqN6lLt793IvUD7YQkYVa8wic94I0scgypVp4oWSZ1XMPhDKXWZeY2bc8XI4Y6Spg8W4GWTNSHfWZQ9DArPfZg1giL3FM4VfCQyb%2BT3UETfzMI47VuEXgbH5od4hPRT0WYJvqfPQkrs6YmI%2FvOZlqEtdezD5pZHMSa1vlnYx099RX5i%2BldC7ULpVkmWddH8Qp%2FGAoj4J%2F%2BoBerkc23rsJJCyjqizkriVjUPJ3%2BT4TrhdGl2UKsBoVTlk3UQVI%2FlmAFYKQ9fWvryLpWSh8xoa7z7mqfjlBYdgEmwH%2BJuaylRJdIw5kNq3jhm4uw26dDZpA1IQQWSwai0VvL5985kHXAG7qC4GfC7tclhl3X%2FH85eqsLSok%2F9znXEF%2FpONWc1y4l1OsxEDcEoHb5upKDCcgq3ABjqkAd8%2ByxoquXUrQcssFQlhmYE48uc2IxHT8el9mxok6enVwcQzhyIiZPYiSBf6jMcEGRKXZLMpvYgL8hzwcHtzFOEV9L1te8R7fy2pPb8e%2F0gRx6aEe4pTdSKpLiZepY9Vh2G1RlKRkgDhXt%2BGqPJqCJQw5KgNJM1lkAqJUg712bLjxnJWloAVHEi2fnb1A7mFGpp5tTf3VXo7SgtdP65qo%2FsEYO97&X-Amz-Signature=15b3af17ff4823891daa7e84208914f2293e4643a5a8ad0255bcebd2e56ab719&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YMUD2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLUC3eP3zeijFGF1CSDFdUB58DilhlvVVbMBFJxgZPQIhAM6VnEXJ0TohYCa5dKQA0e%2FGAl6HwzaUbljdQdW2E6DlKv8DCCkQABoMNjM3NDIzMTgzODA1IgzxpE45TgoS5Fnwi6cq3AMVssV%2Fs9ubw%2BFkqHxe4j4MAPOkJndFn%2BPQ2i4L8gxmH501%2BbkJ0RriPUQV7nqSFO6tKFfwTk0ik8vcCLFWvVVCl8Pg9U0zKRC%2Bk5r28gT9qxLz%2BtFgrrQBdqNXiThRCaeJJxlbhMOtOo8GsFZMrSTOK0c0s2eFE%2FoG8GMGTapXo2jG96M5PXC7yOtMwppJwfyst9udHVeEx9%2BjHpxBQbkg8vRleGHzs08iuKeFr6alOqN6lLt793IvUD7YQkYVa8wic94I0scgypVp4oWSZ1XMPhDKXWZeY2bc8XI4Y6Spg8W4GWTNSHfWZQ9DArPfZg1giL3FM4VfCQyb%2BT3UETfzMI47VuEXgbH5od4hPRT0WYJvqfPQkrs6YmI%2FvOZlqEtdezD5pZHMSa1vlnYx099RX5i%2BldC7ULpVkmWddH8Qp%2FGAoj4J%2F%2BoBerkc23rsJJCyjqizkriVjUPJ3%2BT4TrhdGl2UKsBoVTlk3UQVI%2FlmAFYKQ9fWvryLpWSh8xoa7z7mqfjlBYdgEmwH%2BJuaylRJdIw5kNq3jhm4uw26dDZpA1IQQWSwai0VvL5985kHXAG7qC4GfC7tclhl3X%2FH85eqsLSok%2F9znXEF%2FpONWc1y4l1OsxEDcEoHb5upKDCcgq3ABjqkAd8%2ByxoquXUrQcssFQlhmYE48uc2IxHT8el9mxok6enVwcQzhyIiZPYiSBf6jMcEGRKXZLMpvYgL8hzwcHtzFOEV9L1te8R7fy2pPb8e%2F0gRx6aEe4pTdSKpLiZepY9Vh2G1RlKRkgDhXt%2BGqPJqCJQw5KgNJM1lkAqJUg712bLjxnJWloAVHEi2fnb1A7mFGpp5tTf3VXo7SgtdP65qo%2FsEYO97&X-Amz-Signature=9392d1d71aa6b103bc1e8b3cb8f9a449a7f08b30b5ce6bad792bbeabe38d5ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YMUD2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLUC3eP3zeijFGF1CSDFdUB58DilhlvVVbMBFJxgZPQIhAM6VnEXJ0TohYCa5dKQA0e%2FGAl6HwzaUbljdQdW2E6DlKv8DCCkQABoMNjM3NDIzMTgzODA1IgzxpE45TgoS5Fnwi6cq3AMVssV%2Fs9ubw%2BFkqHxe4j4MAPOkJndFn%2BPQ2i4L8gxmH501%2BbkJ0RriPUQV7nqSFO6tKFfwTk0ik8vcCLFWvVVCl8Pg9U0zKRC%2Bk5r28gT9qxLz%2BtFgrrQBdqNXiThRCaeJJxlbhMOtOo8GsFZMrSTOK0c0s2eFE%2FoG8GMGTapXo2jG96M5PXC7yOtMwppJwfyst9udHVeEx9%2BjHpxBQbkg8vRleGHzs08iuKeFr6alOqN6lLt793IvUD7YQkYVa8wic94I0scgypVp4oWSZ1XMPhDKXWZeY2bc8XI4Y6Spg8W4GWTNSHfWZQ9DArPfZg1giL3FM4VfCQyb%2BT3UETfzMI47VuEXgbH5od4hPRT0WYJvqfPQkrs6YmI%2FvOZlqEtdezD5pZHMSa1vlnYx099RX5i%2BldC7ULpVkmWddH8Qp%2FGAoj4J%2F%2BoBerkc23rsJJCyjqizkriVjUPJ3%2BT4TrhdGl2UKsBoVTlk3UQVI%2FlmAFYKQ9fWvryLpWSh8xoa7z7mqfjlBYdgEmwH%2BJuaylRJdIw5kNq3jhm4uw26dDZpA1IQQWSwai0VvL5985kHXAG7qC4GfC7tclhl3X%2FH85eqsLSok%2F9znXEF%2FpONWc1y4l1OsxEDcEoHb5upKDCcgq3ABjqkAd8%2ByxoquXUrQcssFQlhmYE48uc2IxHT8el9mxok6enVwcQzhyIiZPYiSBf6jMcEGRKXZLMpvYgL8hzwcHtzFOEV9L1te8R7fy2pPb8e%2F0gRx6aEe4pTdSKpLiZepY9Vh2G1RlKRkgDhXt%2BGqPJqCJQw5KgNJM1lkAqJUg712bLjxnJWloAVHEi2fnb1A7mFGpp5tTf3VXo7SgtdP65qo%2FsEYO97&X-Amz-Signature=bdb98621dcc7ecb629005de67f1d365f7b3cf672a162a073f41185f8428e5f27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YMUD2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLUC3eP3zeijFGF1CSDFdUB58DilhlvVVbMBFJxgZPQIhAM6VnEXJ0TohYCa5dKQA0e%2FGAl6HwzaUbljdQdW2E6DlKv8DCCkQABoMNjM3NDIzMTgzODA1IgzxpE45TgoS5Fnwi6cq3AMVssV%2Fs9ubw%2BFkqHxe4j4MAPOkJndFn%2BPQ2i4L8gxmH501%2BbkJ0RriPUQV7nqSFO6tKFfwTk0ik8vcCLFWvVVCl8Pg9U0zKRC%2Bk5r28gT9qxLz%2BtFgrrQBdqNXiThRCaeJJxlbhMOtOo8GsFZMrSTOK0c0s2eFE%2FoG8GMGTapXo2jG96M5PXC7yOtMwppJwfyst9udHVeEx9%2BjHpxBQbkg8vRleGHzs08iuKeFr6alOqN6lLt793IvUD7YQkYVa8wic94I0scgypVp4oWSZ1XMPhDKXWZeY2bc8XI4Y6Spg8W4GWTNSHfWZQ9DArPfZg1giL3FM4VfCQyb%2BT3UETfzMI47VuEXgbH5od4hPRT0WYJvqfPQkrs6YmI%2FvOZlqEtdezD5pZHMSa1vlnYx099RX5i%2BldC7ULpVkmWddH8Qp%2FGAoj4J%2F%2BoBerkc23rsJJCyjqizkriVjUPJ3%2BT4TrhdGl2UKsBoVTlk3UQVI%2FlmAFYKQ9fWvryLpWSh8xoa7z7mqfjlBYdgEmwH%2BJuaylRJdIw5kNq3jhm4uw26dDZpA1IQQWSwai0VvL5985kHXAG7qC4GfC7tclhl3X%2FH85eqsLSok%2F9znXEF%2FpONWc1y4l1OsxEDcEoHb5upKDCcgq3ABjqkAd8%2ByxoquXUrQcssFQlhmYE48uc2IxHT8el9mxok6enVwcQzhyIiZPYiSBf6jMcEGRKXZLMpvYgL8hzwcHtzFOEV9L1te8R7fy2pPb8e%2F0gRx6aEe4pTdSKpLiZepY9Vh2G1RlKRkgDhXt%2BGqPJqCJQw5KgNJM1lkAqJUg712bLjxnJWloAVHEi2fnb1A7mFGpp5tTf3VXo7SgtdP65qo%2FsEYO97&X-Amz-Signature=5181d4e9644fac09eb0f0bd71d8bdbf2c3707a9570255fabdb1f823efadc1076&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YMUD2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLUC3eP3zeijFGF1CSDFdUB58DilhlvVVbMBFJxgZPQIhAM6VnEXJ0TohYCa5dKQA0e%2FGAl6HwzaUbljdQdW2E6DlKv8DCCkQABoMNjM3NDIzMTgzODA1IgzxpE45TgoS5Fnwi6cq3AMVssV%2Fs9ubw%2BFkqHxe4j4MAPOkJndFn%2BPQ2i4L8gxmH501%2BbkJ0RriPUQV7nqSFO6tKFfwTk0ik8vcCLFWvVVCl8Pg9U0zKRC%2Bk5r28gT9qxLz%2BtFgrrQBdqNXiThRCaeJJxlbhMOtOo8GsFZMrSTOK0c0s2eFE%2FoG8GMGTapXo2jG96M5PXC7yOtMwppJwfyst9udHVeEx9%2BjHpxBQbkg8vRleGHzs08iuKeFr6alOqN6lLt793IvUD7YQkYVa8wic94I0scgypVp4oWSZ1XMPhDKXWZeY2bc8XI4Y6Spg8W4GWTNSHfWZQ9DArPfZg1giL3FM4VfCQyb%2BT3UETfzMI47VuEXgbH5od4hPRT0WYJvqfPQkrs6YmI%2FvOZlqEtdezD5pZHMSa1vlnYx099RX5i%2BldC7ULpVkmWddH8Qp%2FGAoj4J%2F%2BoBerkc23rsJJCyjqizkriVjUPJ3%2BT4TrhdGl2UKsBoVTlk3UQVI%2FlmAFYKQ9fWvryLpWSh8xoa7z7mqfjlBYdgEmwH%2BJuaylRJdIw5kNq3jhm4uw26dDZpA1IQQWSwai0VvL5985kHXAG7qC4GfC7tclhl3X%2FH85eqsLSok%2F9znXEF%2FpONWc1y4l1OsxEDcEoHb5upKDCcgq3ABjqkAd8%2ByxoquXUrQcssFQlhmYE48uc2IxHT8el9mxok6enVwcQzhyIiZPYiSBf6jMcEGRKXZLMpvYgL8hzwcHtzFOEV9L1te8R7fy2pPb8e%2F0gRx6aEe4pTdSKpLiZepY9Vh2G1RlKRkgDhXt%2BGqPJqCJQw5KgNJM1lkAqJUg712bLjxnJWloAVHEi2fnb1A7mFGpp5tTf3VXo7SgtdP65qo%2FsEYO97&X-Amz-Signature=0b95d612b7f0b192f068541b019a0d99275bf673c8b776f944ed7cdf2b9ed140&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YMUD2J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLUC3eP3zeijFGF1CSDFdUB58DilhlvVVbMBFJxgZPQIhAM6VnEXJ0TohYCa5dKQA0e%2FGAl6HwzaUbljdQdW2E6DlKv8DCCkQABoMNjM3NDIzMTgzODA1IgzxpE45TgoS5Fnwi6cq3AMVssV%2Fs9ubw%2BFkqHxe4j4MAPOkJndFn%2BPQ2i4L8gxmH501%2BbkJ0RriPUQV7nqSFO6tKFfwTk0ik8vcCLFWvVVCl8Pg9U0zKRC%2Bk5r28gT9qxLz%2BtFgrrQBdqNXiThRCaeJJxlbhMOtOo8GsFZMrSTOK0c0s2eFE%2FoG8GMGTapXo2jG96M5PXC7yOtMwppJwfyst9udHVeEx9%2BjHpxBQbkg8vRleGHzs08iuKeFr6alOqN6lLt793IvUD7YQkYVa8wic94I0scgypVp4oWSZ1XMPhDKXWZeY2bc8XI4Y6Spg8W4GWTNSHfWZQ9DArPfZg1giL3FM4VfCQyb%2BT3UETfzMI47VuEXgbH5od4hPRT0WYJvqfPQkrs6YmI%2FvOZlqEtdezD5pZHMSa1vlnYx099RX5i%2BldC7ULpVkmWddH8Qp%2FGAoj4J%2F%2BoBerkc23rsJJCyjqizkriVjUPJ3%2BT4TrhdGl2UKsBoVTlk3UQVI%2FlmAFYKQ9fWvryLpWSh8xoa7z7mqfjlBYdgEmwH%2BJuaylRJdIw5kNq3jhm4uw26dDZpA1IQQWSwai0VvL5985kHXAG7qC4GfC7tclhl3X%2FH85eqsLSok%2F9znXEF%2FpONWc1y4l1OsxEDcEoHb5upKDCcgq3ABjqkAd8%2ByxoquXUrQcssFQlhmYE48uc2IxHT8el9mxok6enVwcQzhyIiZPYiSBf6jMcEGRKXZLMpvYgL8hzwcHtzFOEV9L1te8R7fy2pPb8e%2F0gRx6aEe4pTdSKpLiZepY9Vh2G1RlKRkgDhXt%2BGqPJqCJQw5KgNJM1lkAqJUg712bLjxnJWloAVHEi2fnb1A7mFGpp5tTf3VXo7SgtdP65qo%2FsEYO97&X-Amz-Signature=417ae70575d392a8e2f96919fe9bfd90b8e9d7be2e8a625c8e3876e30ee79b28&X-Amz-SignedHeaders=host&x-id=GetObject)
