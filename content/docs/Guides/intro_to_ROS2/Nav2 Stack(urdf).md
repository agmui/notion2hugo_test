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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM2ISUF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID17cPKRBuep7AEjRp3OXSBKlgZYBIZiOxWzov3MMzVFAiBpex7%2F2IGIVK2y5%2BnjXsmtacU00RS05INV7a9R8OryZyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM32d6arrhow3I1MmhKtwDDqfhg2b428VReJgg1OYMfJPd%2FfcbGA78PRuOlBMqbd%2Bo2zghGmr4hvLFqzxbNEQ7K1DA0YtQuP3u6qg0THKkPuWA%2Be83WnxU7qJPirgibChzD6uq7xoMuLlY3v1FAYhyLL8QmMottzY09e%2Bu9gq0ZhaeLKQbU9R65b98vRucbQPbZ0wi0k2zQCVn6GAXN6GRk9Lcy9xNylbhvzDMSQyJm2JEZE%2BccauCXsDFhe0NOR224EL9pmnZWCCZR2gPV2U%2B3ybOIQVyivnlAo43LCYcFIvDGpqI92lAyPpp0LrYs1rLlhqPqyBatp4IiTKTy3RpMPg3KfzHxIBPFoExwWvX6WQ%2Bkp593N15DcJI5DQLqzovWLIISrSPZfSysoCv9w3eyg4M5TyEg%2B%2FEswRylg4I5hvM2SoowGVrC%2FZeeS%2BT4OaweUqUMboS4YEtv2cw%2BRYeA63q4Os6Y4ZBY0IxSttMf0FkpYcWmVkhg7cbeuQIXF8l6J%2FFskLha2d36wRrGOJdXZPfAiL4MxrkYNx78WrmE0CXlYiPGbiINUaOtZpAXRwWAX5WSUNsEOQrwV2tqSqnlhQsOR0ed2A9xh%2B%2Fo52pa4dTHp8ac2mkwRx5isU05kj9gtUwJrr2PcJnQZIw3OyBvgY6pgEiKVcMl3%2BogAQHb9dFK95I50ShcCMI6o2C99AO6WklYeDoxTdbEewrtqUbkr4eMRHw5VbbaTULwQoQzSG4pjLau2xvJBXjmUubhCZr8jfKSR%2BoxJs%2FLXyrLLUdkFPYbA0sui2jJcyBwCZVq9vZlFRoltk%2FKESrdWs476%2FL1gWxxSGfUGa2A%2FQE%2F5rOmdKBNf1f4C3CO5rrBX3iTCf%2BVAivtLieAGqK&X-Amz-Signature=4db59f6048f2b52dc2e38803b4223471549876ef5e3beff752ad7a37269a6318&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM2ISUF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID17cPKRBuep7AEjRp3OXSBKlgZYBIZiOxWzov3MMzVFAiBpex7%2F2IGIVK2y5%2BnjXsmtacU00RS05INV7a9R8OryZyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM32d6arrhow3I1MmhKtwDDqfhg2b428VReJgg1OYMfJPd%2FfcbGA78PRuOlBMqbd%2Bo2zghGmr4hvLFqzxbNEQ7K1DA0YtQuP3u6qg0THKkPuWA%2Be83WnxU7qJPirgibChzD6uq7xoMuLlY3v1FAYhyLL8QmMottzY09e%2Bu9gq0ZhaeLKQbU9R65b98vRucbQPbZ0wi0k2zQCVn6GAXN6GRk9Lcy9xNylbhvzDMSQyJm2JEZE%2BccauCXsDFhe0NOR224EL9pmnZWCCZR2gPV2U%2B3ybOIQVyivnlAo43LCYcFIvDGpqI92lAyPpp0LrYs1rLlhqPqyBatp4IiTKTy3RpMPg3KfzHxIBPFoExwWvX6WQ%2Bkp593N15DcJI5DQLqzovWLIISrSPZfSysoCv9w3eyg4M5TyEg%2B%2FEswRylg4I5hvM2SoowGVrC%2FZeeS%2BT4OaweUqUMboS4YEtv2cw%2BRYeA63q4Os6Y4ZBY0IxSttMf0FkpYcWmVkhg7cbeuQIXF8l6J%2FFskLha2d36wRrGOJdXZPfAiL4MxrkYNx78WrmE0CXlYiPGbiINUaOtZpAXRwWAX5WSUNsEOQrwV2tqSqnlhQsOR0ed2A9xh%2B%2Fo52pa4dTHp8ac2mkwRx5isU05kj9gtUwJrr2PcJnQZIw3OyBvgY6pgEiKVcMl3%2BogAQHb9dFK95I50ShcCMI6o2C99AO6WklYeDoxTdbEewrtqUbkr4eMRHw5VbbaTULwQoQzSG4pjLau2xvJBXjmUubhCZr8jfKSR%2BoxJs%2FLXyrLLUdkFPYbA0sui2jJcyBwCZVq9vZlFRoltk%2FKESrdWs476%2FL1gWxxSGfUGa2A%2FQE%2F5rOmdKBNf1f4C3CO5rrBX3iTCf%2BVAivtLieAGqK&X-Amz-Signature=c61335b3269700a8ec7f89412420f287e194abc5cd549c248564a7678e635ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM2ISUF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID17cPKRBuep7AEjRp3OXSBKlgZYBIZiOxWzov3MMzVFAiBpex7%2F2IGIVK2y5%2BnjXsmtacU00RS05INV7a9R8OryZyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM32d6arrhow3I1MmhKtwDDqfhg2b428VReJgg1OYMfJPd%2FfcbGA78PRuOlBMqbd%2Bo2zghGmr4hvLFqzxbNEQ7K1DA0YtQuP3u6qg0THKkPuWA%2Be83WnxU7qJPirgibChzD6uq7xoMuLlY3v1FAYhyLL8QmMottzY09e%2Bu9gq0ZhaeLKQbU9R65b98vRucbQPbZ0wi0k2zQCVn6GAXN6GRk9Lcy9xNylbhvzDMSQyJm2JEZE%2BccauCXsDFhe0NOR224EL9pmnZWCCZR2gPV2U%2B3ybOIQVyivnlAo43LCYcFIvDGpqI92lAyPpp0LrYs1rLlhqPqyBatp4IiTKTy3RpMPg3KfzHxIBPFoExwWvX6WQ%2Bkp593N15DcJI5DQLqzovWLIISrSPZfSysoCv9w3eyg4M5TyEg%2B%2FEswRylg4I5hvM2SoowGVrC%2FZeeS%2BT4OaweUqUMboS4YEtv2cw%2BRYeA63q4Os6Y4ZBY0IxSttMf0FkpYcWmVkhg7cbeuQIXF8l6J%2FFskLha2d36wRrGOJdXZPfAiL4MxrkYNx78WrmE0CXlYiPGbiINUaOtZpAXRwWAX5WSUNsEOQrwV2tqSqnlhQsOR0ed2A9xh%2B%2Fo52pa4dTHp8ac2mkwRx5isU05kj9gtUwJrr2PcJnQZIw3OyBvgY6pgEiKVcMl3%2BogAQHb9dFK95I50ShcCMI6o2C99AO6WklYeDoxTdbEewrtqUbkr4eMRHw5VbbaTULwQoQzSG4pjLau2xvJBXjmUubhCZr8jfKSR%2BoxJs%2FLXyrLLUdkFPYbA0sui2jJcyBwCZVq9vZlFRoltk%2FKESrdWs476%2FL1gWxxSGfUGa2A%2FQE%2F5rOmdKBNf1f4C3CO5rrBX3iTCf%2BVAivtLieAGqK&X-Amz-Signature=e89e92680937ca3b928c5c3a694773eb8a98fbd2a7a305b3b24e563f2f33af00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM2ISUF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID17cPKRBuep7AEjRp3OXSBKlgZYBIZiOxWzov3MMzVFAiBpex7%2F2IGIVK2y5%2BnjXsmtacU00RS05INV7a9R8OryZyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM32d6arrhow3I1MmhKtwDDqfhg2b428VReJgg1OYMfJPd%2FfcbGA78PRuOlBMqbd%2Bo2zghGmr4hvLFqzxbNEQ7K1DA0YtQuP3u6qg0THKkPuWA%2Be83WnxU7qJPirgibChzD6uq7xoMuLlY3v1FAYhyLL8QmMottzY09e%2Bu9gq0ZhaeLKQbU9R65b98vRucbQPbZ0wi0k2zQCVn6GAXN6GRk9Lcy9xNylbhvzDMSQyJm2JEZE%2BccauCXsDFhe0NOR224EL9pmnZWCCZR2gPV2U%2B3ybOIQVyivnlAo43LCYcFIvDGpqI92lAyPpp0LrYs1rLlhqPqyBatp4IiTKTy3RpMPg3KfzHxIBPFoExwWvX6WQ%2Bkp593N15DcJI5DQLqzovWLIISrSPZfSysoCv9w3eyg4M5TyEg%2B%2FEswRylg4I5hvM2SoowGVrC%2FZeeS%2BT4OaweUqUMboS4YEtv2cw%2BRYeA63q4Os6Y4ZBY0IxSttMf0FkpYcWmVkhg7cbeuQIXF8l6J%2FFskLha2d36wRrGOJdXZPfAiL4MxrkYNx78WrmE0CXlYiPGbiINUaOtZpAXRwWAX5WSUNsEOQrwV2tqSqnlhQsOR0ed2A9xh%2B%2Fo52pa4dTHp8ac2mkwRx5isU05kj9gtUwJrr2PcJnQZIw3OyBvgY6pgEiKVcMl3%2BogAQHb9dFK95I50ShcCMI6o2C99AO6WklYeDoxTdbEewrtqUbkr4eMRHw5VbbaTULwQoQzSG4pjLau2xvJBXjmUubhCZr8jfKSR%2BoxJs%2FLXyrLLUdkFPYbA0sui2jJcyBwCZVq9vZlFRoltk%2FKESrdWs476%2FL1gWxxSGfUGa2A%2FQE%2F5rOmdKBNf1f4C3CO5rrBX3iTCf%2BVAivtLieAGqK&X-Amz-Signature=21237c361967feffa95c797b479ccfa21abccd22e8a321412b245f26bb8908d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM2ISUF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID17cPKRBuep7AEjRp3OXSBKlgZYBIZiOxWzov3MMzVFAiBpex7%2F2IGIVK2y5%2BnjXsmtacU00RS05INV7a9R8OryZyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM32d6arrhow3I1MmhKtwDDqfhg2b428VReJgg1OYMfJPd%2FfcbGA78PRuOlBMqbd%2Bo2zghGmr4hvLFqzxbNEQ7K1DA0YtQuP3u6qg0THKkPuWA%2Be83WnxU7qJPirgibChzD6uq7xoMuLlY3v1FAYhyLL8QmMottzY09e%2Bu9gq0ZhaeLKQbU9R65b98vRucbQPbZ0wi0k2zQCVn6GAXN6GRk9Lcy9xNylbhvzDMSQyJm2JEZE%2BccauCXsDFhe0NOR224EL9pmnZWCCZR2gPV2U%2B3ybOIQVyivnlAo43LCYcFIvDGpqI92lAyPpp0LrYs1rLlhqPqyBatp4IiTKTy3RpMPg3KfzHxIBPFoExwWvX6WQ%2Bkp593N15DcJI5DQLqzovWLIISrSPZfSysoCv9w3eyg4M5TyEg%2B%2FEswRylg4I5hvM2SoowGVrC%2FZeeS%2BT4OaweUqUMboS4YEtv2cw%2BRYeA63q4Os6Y4ZBY0IxSttMf0FkpYcWmVkhg7cbeuQIXF8l6J%2FFskLha2d36wRrGOJdXZPfAiL4MxrkYNx78WrmE0CXlYiPGbiINUaOtZpAXRwWAX5WSUNsEOQrwV2tqSqnlhQsOR0ed2A9xh%2B%2Fo52pa4dTHp8ac2mkwRx5isU05kj9gtUwJrr2PcJnQZIw3OyBvgY6pgEiKVcMl3%2BogAQHb9dFK95I50ShcCMI6o2C99AO6WklYeDoxTdbEewrtqUbkr4eMRHw5VbbaTULwQoQzSG4pjLau2xvJBXjmUubhCZr8jfKSR%2BoxJs%2FLXyrLLUdkFPYbA0sui2jJcyBwCZVq9vZlFRoltk%2FKESrdWs476%2FL1gWxxSGfUGa2A%2FQE%2F5rOmdKBNf1f4C3CO5rrBX3iTCf%2BVAivtLieAGqK&X-Amz-Signature=03acad6e08f4af50afab5a3d41416a6581e22b4608a2766055045ff7aa33fe1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BM2ISUF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID17cPKRBuep7AEjRp3OXSBKlgZYBIZiOxWzov3MMzVFAiBpex7%2F2IGIVK2y5%2BnjXsmtacU00RS05INV7a9R8OryZyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM32d6arrhow3I1MmhKtwDDqfhg2b428VReJgg1OYMfJPd%2FfcbGA78PRuOlBMqbd%2Bo2zghGmr4hvLFqzxbNEQ7K1DA0YtQuP3u6qg0THKkPuWA%2Be83WnxU7qJPirgibChzD6uq7xoMuLlY3v1FAYhyLL8QmMottzY09e%2Bu9gq0ZhaeLKQbU9R65b98vRucbQPbZ0wi0k2zQCVn6GAXN6GRk9Lcy9xNylbhvzDMSQyJm2JEZE%2BccauCXsDFhe0NOR224EL9pmnZWCCZR2gPV2U%2B3ybOIQVyivnlAo43LCYcFIvDGpqI92lAyPpp0LrYs1rLlhqPqyBatp4IiTKTy3RpMPg3KfzHxIBPFoExwWvX6WQ%2Bkp593N15DcJI5DQLqzovWLIISrSPZfSysoCv9w3eyg4M5TyEg%2B%2FEswRylg4I5hvM2SoowGVrC%2FZeeS%2BT4OaweUqUMboS4YEtv2cw%2BRYeA63q4Os6Y4ZBY0IxSttMf0FkpYcWmVkhg7cbeuQIXF8l6J%2FFskLha2d36wRrGOJdXZPfAiL4MxrkYNx78WrmE0CXlYiPGbiINUaOtZpAXRwWAX5WSUNsEOQrwV2tqSqnlhQsOR0ed2A9xh%2B%2Fo52pa4dTHp8ac2mkwRx5isU05kj9gtUwJrr2PcJnQZIw3OyBvgY6pgEiKVcMl3%2BogAQHb9dFK95I50ShcCMI6o2C99AO6WklYeDoxTdbEewrtqUbkr4eMRHw5VbbaTULwQoQzSG4pjLau2xvJBXjmUubhCZr8jfKSR%2BoxJs%2FLXyrLLUdkFPYbA0sui2jJcyBwCZVq9vZlFRoltk%2FKESrdWs476%2FL1gWxxSGfUGa2A%2FQE%2F5rOmdKBNf1f4C3CO5rrBX3iTCf%2BVAivtLieAGqK&X-Amz-Signature=2c3009009539f9075c7c7f6783e1188d8e67131287cd943e0751cdba151a7460&X-Amz-SignedHeaders=host&x-id=GetObject)
