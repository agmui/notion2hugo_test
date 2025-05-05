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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOR5P4C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuJQSaXbZ16JFz2lKfXs%2F2gqXF8w1AaBRGFnRkWsdKiwIhAIIidjD0WjW0DgI3lHq8Oy0uU70xdfljHcsncica3%2BnhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzbA79cIdjLjD9rJ6cq3ANJluXHDAv1DDgen6kTPQMUpiNES8Tc4AR6C0s%2BB8RXm1ed6ZBfnBdCTDKRhN0RwxFvxuJZbKdJMQ2%2BfD%2B8Jyw2AaDqUvTTnnYH18xGcrMwwrzpcCvrP%2Ft%2BUQ1Qfe%2FrgoBTxlpr4JZ%2BHu2vqhWbAtl0JDhhrwQk%2BpWAsQNGBR32QI8A6TiOJeUBsOkfwF%2FIOsX8JFm%2Fg3ufKTDzHaSlpuj5z92XaHlE2im3wCQN7yfTzxr7%2F2hb%2FKxjpNSG4RU6f3Q6KCU3psaYSkrOrDn88EK9dr79lHAI8825%2BDppE2vOS%2BzWeKRspa%2FlWewLWyZFE7JffhfOaUg1aXRL8o%2BjpAt6KJ3eBlMOrenmOxO%2BWs%2BCmXLlzChNLjEZOeTg7PtnvEcRLxWx4ywzugGZhnSNsHL5a7rb2ZxY6JYUnkbv%2BS46CazjdgUr1D7jO0EaSpI0yxtqsXjRJuVofNZhtNguIrTn1zkqHxj4MtUvdUnEoeehVkJpZrBoCVE5QWErLSy5Fa7VKfinLyG6439Tn%2FkRwdyX3s7VedfwYRSSPlx38YEiPixBjrqxm%2Fr4WJXyTVVwoJeTKrjY1wQjt%2B8EEdqYj%2FN3mcnV%2BVA%2FpjE9ksFVNEwLjliN8coo9qp%2Bt1Ld1TDhrN%2FABjqkAcxAkqQahlAjXUD4hXlvngIsBHyBTUxX6uVgK3fdLjhWxVqRF20806l%2F9FkLxQ62R6GlONB9j%2B9arx8nI8mNLHkHXG%2B1yYzztZjRjcT1DETfr3yrnpLWwilSqnL4ln9H%2F1D7gjwjqtmn80LXjzh5nZwVhBow%2B32i9lgz67QampBBEnd62yoHm6IoBn0zaBrxWv5LcGg8M7kg4Zb5VUtAD7rVY53F&X-Amz-Signature=6bd979b8ea6672c6f1f630812b32edbbe5acfe18e30d57bc24aa0897f8fe6200&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOR5P4C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuJQSaXbZ16JFz2lKfXs%2F2gqXF8w1AaBRGFnRkWsdKiwIhAIIidjD0WjW0DgI3lHq8Oy0uU70xdfljHcsncica3%2BnhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzbA79cIdjLjD9rJ6cq3ANJluXHDAv1DDgen6kTPQMUpiNES8Tc4AR6C0s%2BB8RXm1ed6ZBfnBdCTDKRhN0RwxFvxuJZbKdJMQ2%2BfD%2B8Jyw2AaDqUvTTnnYH18xGcrMwwrzpcCvrP%2Ft%2BUQ1Qfe%2FrgoBTxlpr4JZ%2BHu2vqhWbAtl0JDhhrwQk%2BpWAsQNGBR32QI8A6TiOJeUBsOkfwF%2FIOsX8JFm%2Fg3ufKTDzHaSlpuj5z92XaHlE2im3wCQN7yfTzxr7%2F2hb%2FKxjpNSG4RU6f3Q6KCU3psaYSkrOrDn88EK9dr79lHAI8825%2BDppE2vOS%2BzWeKRspa%2FlWewLWyZFE7JffhfOaUg1aXRL8o%2BjpAt6KJ3eBlMOrenmOxO%2BWs%2BCmXLlzChNLjEZOeTg7PtnvEcRLxWx4ywzugGZhnSNsHL5a7rb2ZxY6JYUnkbv%2BS46CazjdgUr1D7jO0EaSpI0yxtqsXjRJuVofNZhtNguIrTn1zkqHxj4MtUvdUnEoeehVkJpZrBoCVE5QWErLSy5Fa7VKfinLyG6439Tn%2FkRwdyX3s7VedfwYRSSPlx38YEiPixBjrqxm%2Fr4WJXyTVVwoJeTKrjY1wQjt%2B8EEdqYj%2FN3mcnV%2BVA%2FpjE9ksFVNEwLjliN8coo9qp%2Bt1Ld1TDhrN%2FABjqkAcxAkqQahlAjXUD4hXlvngIsBHyBTUxX6uVgK3fdLjhWxVqRF20806l%2F9FkLxQ62R6GlONB9j%2B9arx8nI8mNLHkHXG%2B1yYzztZjRjcT1DETfr3yrnpLWwilSqnL4ln9H%2F1D7gjwjqtmn80LXjzh5nZwVhBow%2B32i9lgz67QampBBEnd62yoHm6IoBn0zaBrxWv5LcGg8M7kg4Zb5VUtAD7rVY53F&X-Amz-Signature=217d777321d7752b8db6522164b4dad2d99ed161cd79ee8325fe78872d767a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOR5P4C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuJQSaXbZ16JFz2lKfXs%2F2gqXF8w1AaBRGFnRkWsdKiwIhAIIidjD0WjW0DgI3lHq8Oy0uU70xdfljHcsncica3%2BnhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzbA79cIdjLjD9rJ6cq3ANJluXHDAv1DDgen6kTPQMUpiNES8Tc4AR6C0s%2BB8RXm1ed6ZBfnBdCTDKRhN0RwxFvxuJZbKdJMQ2%2BfD%2B8Jyw2AaDqUvTTnnYH18xGcrMwwrzpcCvrP%2Ft%2BUQ1Qfe%2FrgoBTxlpr4JZ%2BHu2vqhWbAtl0JDhhrwQk%2BpWAsQNGBR32QI8A6TiOJeUBsOkfwF%2FIOsX8JFm%2Fg3ufKTDzHaSlpuj5z92XaHlE2im3wCQN7yfTzxr7%2F2hb%2FKxjpNSG4RU6f3Q6KCU3psaYSkrOrDn88EK9dr79lHAI8825%2BDppE2vOS%2BzWeKRspa%2FlWewLWyZFE7JffhfOaUg1aXRL8o%2BjpAt6KJ3eBlMOrenmOxO%2BWs%2BCmXLlzChNLjEZOeTg7PtnvEcRLxWx4ywzugGZhnSNsHL5a7rb2ZxY6JYUnkbv%2BS46CazjdgUr1D7jO0EaSpI0yxtqsXjRJuVofNZhtNguIrTn1zkqHxj4MtUvdUnEoeehVkJpZrBoCVE5QWErLSy5Fa7VKfinLyG6439Tn%2FkRwdyX3s7VedfwYRSSPlx38YEiPixBjrqxm%2Fr4WJXyTVVwoJeTKrjY1wQjt%2B8EEdqYj%2FN3mcnV%2BVA%2FpjE9ksFVNEwLjliN8coo9qp%2Bt1Ld1TDhrN%2FABjqkAcxAkqQahlAjXUD4hXlvngIsBHyBTUxX6uVgK3fdLjhWxVqRF20806l%2F9FkLxQ62R6GlONB9j%2B9arx8nI8mNLHkHXG%2B1yYzztZjRjcT1DETfr3yrnpLWwilSqnL4ln9H%2F1D7gjwjqtmn80LXjzh5nZwVhBow%2B32i9lgz67QampBBEnd62yoHm6IoBn0zaBrxWv5LcGg8M7kg4Zb5VUtAD7rVY53F&X-Amz-Signature=a69c69b9aba8762396a43e187af2577340e7dc688e32cb1dcd6e359d448bf8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOR5P4C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuJQSaXbZ16JFz2lKfXs%2F2gqXF8w1AaBRGFnRkWsdKiwIhAIIidjD0WjW0DgI3lHq8Oy0uU70xdfljHcsncica3%2BnhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzbA79cIdjLjD9rJ6cq3ANJluXHDAv1DDgen6kTPQMUpiNES8Tc4AR6C0s%2BB8RXm1ed6ZBfnBdCTDKRhN0RwxFvxuJZbKdJMQ2%2BfD%2B8Jyw2AaDqUvTTnnYH18xGcrMwwrzpcCvrP%2Ft%2BUQ1Qfe%2FrgoBTxlpr4JZ%2BHu2vqhWbAtl0JDhhrwQk%2BpWAsQNGBR32QI8A6TiOJeUBsOkfwF%2FIOsX8JFm%2Fg3ufKTDzHaSlpuj5z92XaHlE2im3wCQN7yfTzxr7%2F2hb%2FKxjpNSG4RU6f3Q6KCU3psaYSkrOrDn88EK9dr79lHAI8825%2BDppE2vOS%2BzWeKRspa%2FlWewLWyZFE7JffhfOaUg1aXRL8o%2BjpAt6KJ3eBlMOrenmOxO%2BWs%2BCmXLlzChNLjEZOeTg7PtnvEcRLxWx4ywzugGZhnSNsHL5a7rb2ZxY6JYUnkbv%2BS46CazjdgUr1D7jO0EaSpI0yxtqsXjRJuVofNZhtNguIrTn1zkqHxj4MtUvdUnEoeehVkJpZrBoCVE5QWErLSy5Fa7VKfinLyG6439Tn%2FkRwdyX3s7VedfwYRSSPlx38YEiPixBjrqxm%2Fr4WJXyTVVwoJeTKrjY1wQjt%2B8EEdqYj%2FN3mcnV%2BVA%2FpjE9ksFVNEwLjliN8coo9qp%2Bt1Ld1TDhrN%2FABjqkAcxAkqQahlAjXUD4hXlvngIsBHyBTUxX6uVgK3fdLjhWxVqRF20806l%2F9FkLxQ62R6GlONB9j%2B9arx8nI8mNLHkHXG%2B1yYzztZjRjcT1DETfr3yrnpLWwilSqnL4ln9H%2F1D7gjwjqtmn80LXjzh5nZwVhBow%2B32i9lgz67QampBBEnd62yoHm6IoBn0zaBrxWv5LcGg8M7kg4Zb5VUtAD7rVY53F&X-Amz-Signature=a22ed5c068bd21ccea334b11fffd2746184046a8868664749a64a4cd121376de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOR5P4C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuJQSaXbZ16JFz2lKfXs%2F2gqXF8w1AaBRGFnRkWsdKiwIhAIIidjD0WjW0DgI3lHq8Oy0uU70xdfljHcsncica3%2BnhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzbA79cIdjLjD9rJ6cq3ANJluXHDAv1DDgen6kTPQMUpiNES8Tc4AR6C0s%2BB8RXm1ed6ZBfnBdCTDKRhN0RwxFvxuJZbKdJMQ2%2BfD%2B8Jyw2AaDqUvTTnnYH18xGcrMwwrzpcCvrP%2Ft%2BUQ1Qfe%2FrgoBTxlpr4JZ%2BHu2vqhWbAtl0JDhhrwQk%2BpWAsQNGBR32QI8A6TiOJeUBsOkfwF%2FIOsX8JFm%2Fg3ufKTDzHaSlpuj5z92XaHlE2im3wCQN7yfTzxr7%2F2hb%2FKxjpNSG4RU6f3Q6KCU3psaYSkrOrDn88EK9dr79lHAI8825%2BDppE2vOS%2BzWeKRspa%2FlWewLWyZFE7JffhfOaUg1aXRL8o%2BjpAt6KJ3eBlMOrenmOxO%2BWs%2BCmXLlzChNLjEZOeTg7PtnvEcRLxWx4ywzugGZhnSNsHL5a7rb2ZxY6JYUnkbv%2BS46CazjdgUr1D7jO0EaSpI0yxtqsXjRJuVofNZhtNguIrTn1zkqHxj4MtUvdUnEoeehVkJpZrBoCVE5QWErLSy5Fa7VKfinLyG6439Tn%2FkRwdyX3s7VedfwYRSSPlx38YEiPixBjrqxm%2Fr4WJXyTVVwoJeTKrjY1wQjt%2B8EEdqYj%2FN3mcnV%2BVA%2FpjE9ksFVNEwLjliN8coo9qp%2Bt1Ld1TDhrN%2FABjqkAcxAkqQahlAjXUD4hXlvngIsBHyBTUxX6uVgK3fdLjhWxVqRF20806l%2F9FkLxQ62R6GlONB9j%2B9arx8nI8mNLHkHXG%2B1yYzztZjRjcT1DETfr3yrnpLWwilSqnL4ln9H%2F1D7gjwjqtmn80LXjzh5nZwVhBow%2B32i9lgz67QampBBEnd62yoHm6IoBn0zaBrxWv5LcGg8M7kg4Zb5VUtAD7rVY53F&X-Amz-Signature=0115e105a7cf96906c02eca8c7c79949ef253592e92ba1fefa6ff2867a2e3675&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOR5P4C%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCuJQSaXbZ16JFz2lKfXs%2F2gqXF8w1AaBRGFnRkWsdKiwIhAIIidjD0WjW0DgI3lHq8Oy0uU70xdfljHcsncica3%2BnhKv8DCB4QABoMNjM3NDIzMTgzODA1IgzbA79cIdjLjD9rJ6cq3ANJluXHDAv1DDgen6kTPQMUpiNES8Tc4AR6C0s%2BB8RXm1ed6ZBfnBdCTDKRhN0RwxFvxuJZbKdJMQ2%2BfD%2B8Jyw2AaDqUvTTnnYH18xGcrMwwrzpcCvrP%2Ft%2BUQ1Qfe%2FrgoBTxlpr4JZ%2BHu2vqhWbAtl0JDhhrwQk%2BpWAsQNGBR32QI8A6TiOJeUBsOkfwF%2FIOsX8JFm%2Fg3ufKTDzHaSlpuj5z92XaHlE2im3wCQN7yfTzxr7%2F2hb%2FKxjpNSG4RU6f3Q6KCU3psaYSkrOrDn88EK9dr79lHAI8825%2BDppE2vOS%2BzWeKRspa%2FlWewLWyZFE7JffhfOaUg1aXRL8o%2BjpAt6KJ3eBlMOrenmOxO%2BWs%2BCmXLlzChNLjEZOeTg7PtnvEcRLxWx4ywzugGZhnSNsHL5a7rb2ZxY6JYUnkbv%2BS46CazjdgUr1D7jO0EaSpI0yxtqsXjRJuVofNZhtNguIrTn1zkqHxj4MtUvdUnEoeehVkJpZrBoCVE5QWErLSy5Fa7VKfinLyG6439Tn%2FkRwdyX3s7VedfwYRSSPlx38YEiPixBjrqxm%2Fr4WJXyTVVwoJeTKrjY1wQjt%2B8EEdqYj%2FN3mcnV%2BVA%2FpjE9ksFVNEwLjliN8coo9qp%2Bt1Ld1TDhrN%2FABjqkAcxAkqQahlAjXUD4hXlvngIsBHyBTUxX6uVgK3fdLjhWxVqRF20806l%2F9FkLxQ62R6GlONB9j%2B9arx8nI8mNLHkHXG%2B1yYzztZjRjcT1DETfr3yrnpLWwilSqnL4ln9H%2F1D7gjwjqtmn80LXjzh5nZwVhBow%2B32i9lgz67QampBBEnd62yoHm6IoBn0zaBrxWv5LcGg8M7kg4Zb5VUtAD7rVY53F&X-Amz-Signature=763fed2d854c83731b9be965a8db6ea8be640f41e1beee27bde11c66a53dab97&X-Amz-SignedHeaders=host&x-id=GetObject)
