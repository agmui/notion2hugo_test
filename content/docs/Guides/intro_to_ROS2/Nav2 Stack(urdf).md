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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TSVD5M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC92tgzNcdx7YmxtStbPnjxgMyaWCX6GwDjdfLo3sG2HwIhAOlLv1HgP4z75eKSLz%2F%2FKN7mEIIkhFIc6ZKbr5gxm00PKv8DCDEQABoMNjM3NDIzMTgzODA1Igzn54ThKvBpU4AfdR8q3AMP4c%2BvNQYZ0hdHoZn61fRxjTaV%2BovMSh9UQnFNCxAslHhm1Yn5JM4L7k6zObyiDXk7eszX17rcqATsnjWnkMgQq8HYEJ2ol9LNuoIQZuajjsCcDupFTk2L4IUjCh22Tr5uaXK7HTRf%2B1%2Fr4WKUKu6UaTr9zuin6D%2FrtyZrDviSqv%2FcY5toC8WgntMgKKRedgP4K3gr134iXRQzWINLM%2BxblfzrthwX8wfIMkABt7Ke6%2BWWhp%2FMcMsKJ326DagfrzXoGATeOJgMFJneIxKeuevuUCvnXuaU3L8TNSEXq%2BCffDpZpujhDihuXFuiLHKBao73YfsbVHxiuSgnfteKXKcysBU5xR7exA9onQ692A%2FfIJ0RAjgUi8f1w%2FiK1BpNIvsZh3wOEeZInHVrLUc7lP5nVdoa3l2f0Ke4%2B7DNG5lXakTp1OTp7AkU1uDwZu9CAHUCO9Z8knsIArNWf8MfsKCIJlj7eQ4CRIO%2BF%2Fizm5smKKcLFHsTZByZ3f8DZSR2HrOgCxvKA48A3Ruc%2FYPrlX40GLsRpzkRiN%2BKCfCaM4fIq8BpCY2yDnXTk6cYrn87UKxWck7mb6sF6VInn4RCLvOfmWz23xgkH%2FSCifBC2WHolD3E3kzv1MRQu5KUxTCvu7bCBjqkAQ1XAO224GHr6E6bXKeYo8iUWhvn395mMEXutFXLwcyOcdASW%2FV0q2LzXXz3kEJElD0tZ4auBCtsdQZfSUOHF82m5qd%2F8Fm5NRvB7OE2OJPqhKAgQH8iTMQh78Fh86gCH26Q3o8xYiTKSla%2B3XKgrq9w%2F7xBPcrv80Xyhgj26%2FaWRr0jh8cDjpGxktAdJnRJWdLAMp7KGyZjLHCR%2FWJrwOpHSyZd&X-Amz-Signature=dc31456d4ea80daec456ae5d045277c607841d6f2ee467629cc3fa035af48858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TSVD5M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC92tgzNcdx7YmxtStbPnjxgMyaWCX6GwDjdfLo3sG2HwIhAOlLv1HgP4z75eKSLz%2F%2FKN7mEIIkhFIc6ZKbr5gxm00PKv8DCDEQABoMNjM3NDIzMTgzODA1Igzn54ThKvBpU4AfdR8q3AMP4c%2BvNQYZ0hdHoZn61fRxjTaV%2BovMSh9UQnFNCxAslHhm1Yn5JM4L7k6zObyiDXk7eszX17rcqATsnjWnkMgQq8HYEJ2ol9LNuoIQZuajjsCcDupFTk2L4IUjCh22Tr5uaXK7HTRf%2B1%2Fr4WKUKu6UaTr9zuin6D%2FrtyZrDviSqv%2FcY5toC8WgntMgKKRedgP4K3gr134iXRQzWINLM%2BxblfzrthwX8wfIMkABt7Ke6%2BWWhp%2FMcMsKJ326DagfrzXoGATeOJgMFJneIxKeuevuUCvnXuaU3L8TNSEXq%2BCffDpZpujhDihuXFuiLHKBao73YfsbVHxiuSgnfteKXKcysBU5xR7exA9onQ692A%2FfIJ0RAjgUi8f1w%2FiK1BpNIvsZh3wOEeZInHVrLUc7lP5nVdoa3l2f0Ke4%2B7DNG5lXakTp1OTp7AkU1uDwZu9CAHUCO9Z8knsIArNWf8MfsKCIJlj7eQ4CRIO%2BF%2Fizm5smKKcLFHsTZByZ3f8DZSR2HrOgCxvKA48A3Ruc%2FYPrlX40GLsRpzkRiN%2BKCfCaM4fIq8BpCY2yDnXTk6cYrn87UKxWck7mb6sF6VInn4RCLvOfmWz23xgkH%2FSCifBC2WHolD3E3kzv1MRQu5KUxTCvu7bCBjqkAQ1XAO224GHr6E6bXKeYo8iUWhvn395mMEXutFXLwcyOcdASW%2FV0q2LzXXz3kEJElD0tZ4auBCtsdQZfSUOHF82m5qd%2F8Fm5NRvB7OE2OJPqhKAgQH8iTMQh78Fh86gCH26Q3o8xYiTKSla%2B3XKgrq9w%2F7xBPcrv80Xyhgj26%2FaWRr0jh8cDjpGxktAdJnRJWdLAMp7KGyZjLHCR%2FWJrwOpHSyZd&X-Amz-Signature=bc2cec58d9b918b871baa60201bafbb202257f4ef1513d681eda016bc01a4918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TSVD5M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC92tgzNcdx7YmxtStbPnjxgMyaWCX6GwDjdfLo3sG2HwIhAOlLv1HgP4z75eKSLz%2F%2FKN7mEIIkhFIc6ZKbr5gxm00PKv8DCDEQABoMNjM3NDIzMTgzODA1Igzn54ThKvBpU4AfdR8q3AMP4c%2BvNQYZ0hdHoZn61fRxjTaV%2BovMSh9UQnFNCxAslHhm1Yn5JM4L7k6zObyiDXk7eszX17rcqATsnjWnkMgQq8HYEJ2ol9LNuoIQZuajjsCcDupFTk2L4IUjCh22Tr5uaXK7HTRf%2B1%2Fr4WKUKu6UaTr9zuin6D%2FrtyZrDviSqv%2FcY5toC8WgntMgKKRedgP4K3gr134iXRQzWINLM%2BxblfzrthwX8wfIMkABt7Ke6%2BWWhp%2FMcMsKJ326DagfrzXoGATeOJgMFJneIxKeuevuUCvnXuaU3L8TNSEXq%2BCffDpZpujhDihuXFuiLHKBao73YfsbVHxiuSgnfteKXKcysBU5xR7exA9onQ692A%2FfIJ0RAjgUi8f1w%2FiK1BpNIvsZh3wOEeZInHVrLUc7lP5nVdoa3l2f0Ke4%2B7DNG5lXakTp1OTp7AkU1uDwZu9CAHUCO9Z8knsIArNWf8MfsKCIJlj7eQ4CRIO%2BF%2Fizm5smKKcLFHsTZByZ3f8DZSR2HrOgCxvKA48A3Ruc%2FYPrlX40GLsRpzkRiN%2BKCfCaM4fIq8BpCY2yDnXTk6cYrn87UKxWck7mb6sF6VInn4RCLvOfmWz23xgkH%2FSCifBC2WHolD3E3kzv1MRQu5KUxTCvu7bCBjqkAQ1XAO224GHr6E6bXKeYo8iUWhvn395mMEXutFXLwcyOcdASW%2FV0q2LzXXz3kEJElD0tZ4auBCtsdQZfSUOHF82m5qd%2F8Fm5NRvB7OE2OJPqhKAgQH8iTMQh78Fh86gCH26Q3o8xYiTKSla%2B3XKgrq9w%2F7xBPcrv80Xyhgj26%2FaWRr0jh8cDjpGxktAdJnRJWdLAMp7KGyZjLHCR%2FWJrwOpHSyZd&X-Amz-Signature=c3f9c153bbb8d3781d3276e4c4a56f39aac79b59c7eed0f76ee5ddf49c958720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TSVD5M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC92tgzNcdx7YmxtStbPnjxgMyaWCX6GwDjdfLo3sG2HwIhAOlLv1HgP4z75eKSLz%2F%2FKN7mEIIkhFIc6ZKbr5gxm00PKv8DCDEQABoMNjM3NDIzMTgzODA1Igzn54ThKvBpU4AfdR8q3AMP4c%2BvNQYZ0hdHoZn61fRxjTaV%2BovMSh9UQnFNCxAslHhm1Yn5JM4L7k6zObyiDXk7eszX17rcqATsnjWnkMgQq8HYEJ2ol9LNuoIQZuajjsCcDupFTk2L4IUjCh22Tr5uaXK7HTRf%2B1%2Fr4WKUKu6UaTr9zuin6D%2FrtyZrDviSqv%2FcY5toC8WgntMgKKRedgP4K3gr134iXRQzWINLM%2BxblfzrthwX8wfIMkABt7Ke6%2BWWhp%2FMcMsKJ326DagfrzXoGATeOJgMFJneIxKeuevuUCvnXuaU3L8TNSEXq%2BCffDpZpujhDihuXFuiLHKBao73YfsbVHxiuSgnfteKXKcysBU5xR7exA9onQ692A%2FfIJ0RAjgUi8f1w%2FiK1BpNIvsZh3wOEeZInHVrLUc7lP5nVdoa3l2f0Ke4%2B7DNG5lXakTp1OTp7AkU1uDwZu9CAHUCO9Z8knsIArNWf8MfsKCIJlj7eQ4CRIO%2BF%2Fizm5smKKcLFHsTZByZ3f8DZSR2HrOgCxvKA48A3Ruc%2FYPrlX40GLsRpzkRiN%2BKCfCaM4fIq8BpCY2yDnXTk6cYrn87UKxWck7mb6sF6VInn4RCLvOfmWz23xgkH%2FSCifBC2WHolD3E3kzv1MRQu5KUxTCvu7bCBjqkAQ1XAO224GHr6E6bXKeYo8iUWhvn395mMEXutFXLwcyOcdASW%2FV0q2LzXXz3kEJElD0tZ4auBCtsdQZfSUOHF82m5qd%2F8Fm5NRvB7OE2OJPqhKAgQH8iTMQh78Fh86gCH26Q3o8xYiTKSla%2B3XKgrq9w%2F7xBPcrv80Xyhgj26%2FaWRr0jh8cDjpGxktAdJnRJWdLAMp7KGyZjLHCR%2FWJrwOpHSyZd&X-Amz-Signature=15c399c63c44d78b357791fdc1f82f60ec86e029632f56851dc630cf962a2bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TSVD5M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC92tgzNcdx7YmxtStbPnjxgMyaWCX6GwDjdfLo3sG2HwIhAOlLv1HgP4z75eKSLz%2F%2FKN7mEIIkhFIc6ZKbr5gxm00PKv8DCDEQABoMNjM3NDIzMTgzODA1Igzn54ThKvBpU4AfdR8q3AMP4c%2BvNQYZ0hdHoZn61fRxjTaV%2BovMSh9UQnFNCxAslHhm1Yn5JM4L7k6zObyiDXk7eszX17rcqATsnjWnkMgQq8HYEJ2ol9LNuoIQZuajjsCcDupFTk2L4IUjCh22Tr5uaXK7HTRf%2B1%2Fr4WKUKu6UaTr9zuin6D%2FrtyZrDviSqv%2FcY5toC8WgntMgKKRedgP4K3gr134iXRQzWINLM%2BxblfzrthwX8wfIMkABt7Ke6%2BWWhp%2FMcMsKJ326DagfrzXoGATeOJgMFJneIxKeuevuUCvnXuaU3L8TNSEXq%2BCffDpZpujhDihuXFuiLHKBao73YfsbVHxiuSgnfteKXKcysBU5xR7exA9onQ692A%2FfIJ0RAjgUi8f1w%2FiK1BpNIvsZh3wOEeZInHVrLUc7lP5nVdoa3l2f0Ke4%2B7DNG5lXakTp1OTp7AkU1uDwZu9CAHUCO9Z8knsIArNWf8MfsKCIJlj7eQ4CRIO%2BF%2Fizm5smKKcLFHsTZByZ3f8DZSR2HrOgCxvKA48A3Ruc%2FYPrlX40GLsRpzkRiN%2BKCfCaM4fIq8BpCY2yDnXTk6cYrn87UKxWck7mb6sF6VInn4RCLvOfmWz23xgkH%2FSCifBC2WHolD3E3kzv1MRQu5KUxTCvu7bCBjqkAQ1XAO224GHr6E6bXKeYo8iUWhvn395mMEXutFXLwcyOcdASW%2FV0q2LzXXz3kEJElD0tZ4auBCtsdQZfSUOHF82m5qd%2F8Fm5NRvB7OE2OJPqhKAgQH8iTMQh78Fh86gCH26Q3o8xYiTKSla%2B3XKgrq9w%2F7xBPcrv80Xyhgj26%2FaWRr0jh8cDjpGxktAdJnRJWdLAMp7KGyZjLHCR%2FWJrwOpHSyZd&X-Amz-Signature=d1d2b192e26fd14542721613079cfa8ad4023f306f33d692903f4ee02ea98ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TSVD5M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC92tgzNcdx7YmxtStbPnjxgMyaWCX6GwDjdfLo3sG2HwIhAOlLv1HgP4z75eKSLz%2F%2FKN7mEIIkhFIc6ZKbr5gxm00PKv8DCDEQABoMNjM3NDIzMTgzODA1Igzn54ThKvBpU4AfdR8q3AMP4c%2BvNQYZ0hdHoZn61fRxjTaV%2BovMSh9UQnFNCxAslHhm1Yn5JM4L7k6zObyiDXk7eszX17rcqATsnjWnkMgQq8HYEJ2ol9LNuoIQZuajjsCcDupFTk2L4IUjCh22Tr5uaXK7HTRf%2B1%2Fr4WKUKu6UaTr9zuin6D%2FrtyZrDviSqv%2FcY5toC8WgntMgKKRedgP4K3gr134iXRQzWINLM%2BxblfzrthwX8wfIMkABt7Ke6%2BWWhp%2FMcMsKJ326DagfrzXoGATeOJgMFJneIxKeuevuUCvnXuaU3L8TNSEXq%2BCffDpZpujhDihuXFuiLHKBao73YfsbVHxiuSgnfteKXKcysBU5xR7exA9onQ692A%2FfIJ0RAjgUi8f1w%2FiK1BpNIvsZh3wOEeZInHVrLUc7lP5nVdoa3l2f0Ke4%2B7DNG5lXakTp1OTp7AkU1uDwZu9CAHUCO9Z8knsIArNWf8MfsKCIJlj7eQ4CRIO%2BF%2Fizm5smKKcLFHsTZByZ3f8DZSR2HrOgCxvKA48A3Ruc%2FYPrlX40GLsRpzkRiN%2BKCfCaM4fIq8BpCY2yDnXTk6cYrn87UKxWck7mb6sF6VInn4RCLvOfmWz23xgkH%2FSCifBC2WHolD3E3kzv1MRQu5KUxTCvu7bCBjqkAQ1XAO224GHr6E6bXKeYo8iUWhvn395mMEXutFXLwcyOcdASW%2FV0q2LzXXz3kEJElD0tZ4auBCtsdQZfSUOHF82m5qd%2F8Fm5NRvB7OE2OJPqhKAgQH8iTMQh78Fh86gCH26Q3o8xYiTKSla%2B3XKgrq9w%2F7xBPcrv80Xyhgj26%2FaWRr0jh8cDjpGxktAdJnRJWdLAMp7KGyZjLHCR%2FWJrwOpHSyZd&X-Amz-Signature=8628ba433e8a6a071da01d93599a414e81a03e3e41d603778de75c0091226e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
