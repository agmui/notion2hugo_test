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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4H2BF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDqZutCVHVDUBkvu3FC%2BsY8iJjLmtezyNuCYXInySk%2BRQIhAOySpY3cFDjNP07bKcMXWrZ9IglJQzBGwpTbEZ0WPttkKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FchH2AckFhNJUK%2FEq3AN1C5GYlEvi%2FHHwR238vMyKYADl4D6e%2FGvtaPPju7Jrq1aU9ygBUXrMCft7r9c%2BWbPHCn0wn4ouQHoX34hCkmgMFw5cEpTboLDJA7xGz9P05DmTGhAzwzvzOqJK5e2k6fLSpDp1H0zmdQSIy28auAIeubO1dC6rrqL4SKqqjNydclgX4J056qs7c%2B48zNE%2Bv81UQcZhlRVNLorEl9JRrjLyRirCTvoF1Lteev3nXkcn6Tdcuk6LXkrOdOKdqCoMdNJDGObZ02A%2BaGtAH1ggFvIj0kHtrRXfAPaB1GZj74cEVunwj%2Bx6kVJcQ937RjUdiqKBOXyhqHNMMi322FAbxZ9X4s%2B03YIdyMOQU4JKNg3EAvWlI8VqdNRNbyK0GGoZ29v6lpz36hQUrE2T7DZFatubJpEze0e1BSo14QedBfq15CTqHf3Pe4zW3897%2BSVIwKNmq%2FwoIXkDINVva6z%2B0R6ykyz3%2FkVr4t876Lab8BwpYKi7wIpcH1Dy5rdZHBrtRfvg0KD2vo49dSC0sRWnyFD%2B3orqftkI7tieE%2F89S45lrp4lqiArlumYe5%2BTNXrTPuJX6mZQ1vArq3mvhnd44GtZUjGDlthKa6C3pA1RV45DLr1iH6ovG5NnFu3PuzD4m%2BS%2FBjqkAb%2Fhc6OodIZFsFvVl4ylI6bQt2g4SkRh%2BFubDy7CmBpe3mV7txjxE7Tk8%2BKs00nA0kzB9RsSltLGAsh83rF7ZOPCKIN%2BCbK7X2uOGq8tsEOf9e%2Bv7F%2BKUiy%2BCoXlXS%2FWEznY3pmdG3cKJT30NI0mcr169%2BzDr43zcGUqdi05MNl%2B0OOrdocR0E4qSdB76OTQq4e3aXR5sPMcbpjKy4c24qlklbJe&X-Amz-Signature=d69d8b276f099f6e2f5aff0c9636ecab89c1b3b6218ec6aab70f48024126a797&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4H2BF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDqZutCVHVDUBkvu3FC%2BsY8iJjLmtezyNuCYXInySk%2BRQIhAOySpY3cFDjNP07bKcMXWrZ9IglJQzBGwpTbEZ0WPttkKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FchH2AckFhNJUK%2FEq3AN1C5GYlEvi%2FHHwR238vMyKYADl4D6e%2FGvtaPPju7Jrq1aU9ygBUXrMCft7r9c%2BWbPHCn0wn4ouQHoX34hCkmgMFw5cEpTboLDJA7xGz9P05DmTGhAzwzvzOqJK5e2k6fLSpDp1H0zmdQSIy28auAIeubO1dC6rrqL4SKqqjNydclgX4J056qs7c%2B48zNE%2Bv81UQcZhlRVNLorEl9JRrjLyRirCTvoF1Lteev3nXkcn6Tdcuk6LXkrOdOKdqCoMdNJDGObZ02A%2BaGtAH1ggFvIj0kHtrRXfAPaB1GZj74cEVunwj%2Bx6kVJcQ937RjUdiqKBOXyhqHNMMi322FAbxZ9X4s%2B03YIdyMOQU4JKNg3EAvWlI8VqdNRNbyK0GGoZ29v6lpz36hQUrE2T7DZFatubJpEze0e1BSo14QedBfq15CTqHf3Pe4zW3897%2BSVIwKNmq%2FwoIXkDINVva6z%2B0R6ykyz3%2FkVr4t876Lab8BwpYKi7wIpcH1Dy5rdZHBrtRfvg0KD2vo49dSC0sRWnyFD%2B3orqftkI7tieE%2F89S45lrp4lqiArlumYe5%2BTNXrTPuJX6mZQ1vArq3mvhnd44GtZUjGDlthKa6C3pA1RV45DLr1iH6ovG5NnFu3PuzD4m%2BS%2FBjqkAb%2Fhc6OodIZFsFvVl4ylI6bQt2g4SkRh%2BFubDy7CmBpe3mV7txjxE7Tk8%2BKs00nA0kzB9RsSltLGAsh83rF7ZOPCKIN%2BCbK7X2uOGq8tsEOf9e%2Bv7F%2BKUiy%2BCoXlXS%2FWEznY3pmdG3cKJT30NI0mcr169%2BzDr43zcGUqdi05MNl%2B0OOrdocR0E4qSdB76OTQq4e3aXR5sPMcbpjKy4c24qlklbJe&X-Amz-Signature=e51bc8f266db3358871c441cfa01eacd04b5e0bee35302550db05e99edbe77fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4H2BF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDqZutCVHVDUBkvu3FC%2BsY8iJjLmtezyNuCYXInySk%2BRQIhAOySpY3cFDjNP07bKcMXWrZ9IglJQzBGwpTbEZ0WPttkKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FchH2AckFhNJUK%2FEq3AN1C5GYlEvi%2FHHwR238vMyKYADl4D6e%2FGvtaPPju7Jrq1aU9ygBUXrMCft7r9c%2BWbPHCn0wn4ouQHoX34hCkmgMFw5cEpTboLDJA7xGz9P05DmTGhAzwzvzOqJK5e2k6fLSpDp1H0zmdQSIy28auAIeubO1dC6rrqL4SKqqjNydclgX4J056qs7c%2B48zNE%2Bv81UQcZhlRVNLorEl9JRrjLyRirCTvoF1Lteev3nXkcn6Tdcuk6LXkrOdOKdqCoMdNJDGObZ02A%2BaGtAH1ggFvIj0kHtrRXfAPaB1GZj74cEVunwj%2Bx6kVJcQ937RjUdiqKBOXyhqHNMMi322FAbxZ9X4s%2B03YIdyMOQU4JKNg3EAvWlI8VqdNRNbyK0GGoZ29v6lpz36hQUrE2T7DZFatubJpEze0e1BSo14QedBfq15CTqHf3Pe4zW3897%2BSVIwKNmq%2FwoIXkDINVva6z%2B0R6ykyz3%2FkVr4t876Lab8BwpYKi7wIpcH1Dy5rdZHBrtRfvg0KD2vo49dSC0sRWnyFD%2B3orqftkI7tieE%2F89S45lrp4lqiArlumYe5%2BTNXrTPuJX6mZQ1vArq3mvhnd44GtZUjGDlthKa6C3pA1RV45DLr1iH6ovG5NnFu3PuzD4m%2BS%2FBjqkAb%2Fhc6OodIZFsFvVl4ylI6bQt2g4SkRh%2BFubDy7CmBpe3mV7txjxE7Tk8%2BKs00nA0kzB9RsSltLGAsh83rF7ZOPCKIN%2BCbK7X2uOGq8tsEOf9e%2Bv7F%2BKUiy%2BCoXlXS%2FWEznY3pmdG3cKJT30NI0mcr169%2BzDr43zcGUqdi05MNl%2B0OOrdocR0E4qSdB76OTQq4e3aXR5sPMcbpjKy4c24qlklbJe&X-Amz-Signature=87cd2affa91e26151dce79fc2d802a92cdcc1a880cc061a008f56dbbb80e6454&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4H2BF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDqZutCVHVDUBkvu3FC%2BsY8iJjLmtezyNuCYXInySk%2BRQIhAOySpY3cFDjNP07bKcMXWrZ9IglJQzBGwpTbEZ0WPttkKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FchH2AckFhNJUK%2FEq3AN1C5GYlEvi%2FHHwR238vMyKYADl4D6e%2FGvtaPPju7Jrq1aU9ygBUXrMCft7r9c%2BWbPHCn0wn4ouQHoX34hCkmgMFw5cEpTboLDJA7xGz9P05DmTGhAzwzvzOqJK5e2k6fLSpDp1H0zmdQSIy28auAIeubO1dC6rrqL4SKqqjNydclgX4J056qs7c%2B48zNE%2Bv81UQcZhlRVNLorEl9JRrjLyRirCTvoF1Lteev3nXkcn6Tdcuk6LXkrOdOKdqCoMdNJDGObZ02A%2BaGtAH1ggFvIj0kHtrRXfAPaB1GZj74cEVunwj%2Bx6kVJcQ937RjUdiqKBOXyhqHNMMi322FAbxZ9X4s%2B03YIdyMOQU4JKNg3EAvWlI8VqdNRNbyK0GGoZ29v6lpz36hQUrE2T7DZFatubJpEze0e1BSo14QedBfq15CTqHf3Pe4zW3897%2BSVIwKNmq%2FwoIXkDINVva6z%2B0R6ykyz3%2FkVr4t876Lab8BwpYKi7wIpcH1Dy5rdZHBrtRfvg0KD2vo49dSC0sRWnyFD%2B3orqftkI7tieE%2F89S45lrp4lqiArlumYe5%2BTNXrTPuJX6mZQ1vArq3mvhnd44GtZUjGDlthKa6C3pA1RV45DLr1iH6ovG5NnFu3PuzD4m%2BS%2FBjqkAb%2Fhc6OodIZFsFvVl4ylI6bQt2g4SkRh%2BFubDy7CmBpe3mV7txjxE7Tk8%2BKs00nA0kzB9RsSltLGAsh83rF7ZOPCKIN%2BCbK7X2uOGq8tsEOf9e%2Bv7F%2BKUiy%2BCoXlXS%2FWEznY3pmdG3cKJT30NI0mcr169%2BzDr43zcGUqdi05MNl%2B0OOrdocR0E4qSdB76OTQq4e3aXR5sPMcbpjKy4c24qlklbJe&X-Amz-Signature=793c78edb292522d1ac10823ff58fcbefae78d923031415a89e54d0ef436edbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4H2BF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDqZutCVHVDUBkvu3FC%2BsY8iJjLmtezyNuCYXInySk%2BRQIhAOySpY3cFDjNP07bKcMXWrZ9IglJQzBGwpTbEZ0WPttkKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FchH2AckFhNJUK%2FEq3AN1C5GYlEvi%2FHHwR238vMyKYADl4D6e%2FGvtaPPju7Jrq1aU9ygBUXrMCft7r9c%2BWbPHCn0wn4ouQHoX34hCkmgMFw5cEpTboLDJA7xGz9P05DmTGhAzwzvzOqJK5e2k6fLSpDp1H0zmdQSIy28auAIeubO1dC6rrqL4SKqqjNydclgX4J056qs7c%2B48zNE%2Bv81UQcZhlRVNLorEl9JRrjLyRirCTvoF1Lteev3nXkcn6Tdcuk6LXkrOdOKdqCoMdNJDGObZ02A%2BaGtAH1ggFvIj0kHtrRXfAPaB1GZj74cEVunwj%2Bx6kVJcQ937RjUdiqKBOXyhqHNMMi322FAbxZ9X4s%2B03YIdyMOQU4JKNg3EAvWlI8VqdNRNbyK0GGoZ29v6lpz36hQUrE2T7DZFatubJpEze0e1BSo14QedBfq15CTqHf3Pe4zW3897%2BSVIwKNmq%2FwoIXkDINVva6z%2B0R6ykyz3%2FkVr4t876Lab8BwpYKi7wIpcH1Dy5rdZHBrtRfvg0KD2vo49dSC0sRWnyFD%2B3orqftkI7tieE%2F89S45lrp4lqiArlumYe5%2BTNXrTPuJX6mZQ1vArq3mvhnd44GtZUjGDlthKa6C3pA1RV45DLr1iH6ovG5NnFu3PuzD4m%2BS%2FBjqkAb%2Fhc6OodIZFsFvVl4ylI6bQt2g4SkRh%2BFubDy7CmBpe3mV7txjxE7Tk8%2BKs00nA0kzB9RsSltLGAsh83rF7ZOPCKIN%2BCbK7X2uOGq8tsEOf9e%2Bv7F%2BKUiy%2BCoXlXS%2FWEznY3pmdG3cKJT30NI0mcr169%2BzDr43zcGUqdi05MNl%2B0OOrdocR0E4qSdB76OTQq4e3aXR5sPMcbpjKy4c24qlklbJe&X-Amz-Signature=616f486fff9c0add4636681805b0e2a136851d92cac32eb6ac210d00df00611d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ4H2BF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDqZutCVHVDUBkvu3FC%2BsY8iJjLmtezyNuCYXInySk%2BRQIhAOySpY3cFDjNP07bKcMXWrZ9IglJQzBGwpTbEZ0WPttkKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FchH2AckFhNJUK%2FEq3AN1C5GYlEvi%2FHHwR238vMyKYADl4D6e%2FGvtaPPju7Jrq1aU9ygBUXrMCft7r9c%2BWbPHCn0wn4ouQHoX34hCkmgMFw5cEpTboLDJA7xGz9P05DmTGhAzwzvzOqJK5e2k6fLSpDp1H0zmdQSIy28auAIeubO1dC6rrqL4SKqqjNydclgX4J056qs7c%2B48zNE%2Bv81UQcZhlRVNLorEl9JRrjLyRirCTvoF1Lteev3nXkcn6Tdcuk6LXkrOdOKdqCoMdNJDGObZ02A%2BaGtAH1ggFvIj0kHtrRXfAPaB1GZj74cEVunwj%2Bx6kVJcQ937RjUdiqKBOXyhqHNMMi322FAbxZ9X4s%2B03YIdyMOQU4JKNg3EAvWlI8VqdNRNbyK0GGoZ29v6lpz36hQUrE2T7DZFatubJpEze0e1BSo14QedBfq15CTqHf3Pe4zW3897%2BSVIwKNmq%2FwoIXkDINVva6z%2B0R6ykyz3%2FkVr4t876Lab8BwpYKi7wIpcH1Dy5rdZHBrtRfvg0KD2vo49dSC0sRWnyFD%2B3orqftkI7tieE%2F89S45lrp4lqiArlumYe5%2BTNXrTPuJX6mZQ1vArq3mvhnd44GtZUjGDlthKa6C3pA1RV45DLr1iH6ovG5NnFu3PuzD4m%2BS%2FBjqkAb%2Fhc6OodIZFsFvVl4ylI6bQt2g4SkRh%2BFubDy7CmBpe3mV7txjxE7Tk8%2BKs00nA0kzB9RsSltLGAsh83rF7ZOPCKIN%2BCbK7X2uOGq8tsEOf9e%2Bv7F%2BKUiy%2BCoXlXS%2FWEznY3pmdG3cKJT30NI0mcr169%2BzDr43zcGUqdi05MNl%2B0OOrdocR0E4qSdB76OTQq4e3aXR5sPMcbpjKy4c24qlklbJe&X-Amz-Signature=0c0ba384275df2da3146e282119a4221ac9034d69f13bb9aa8200541459e4369&X-Amz-SignedHeaders=host&x-id=GetObject)
