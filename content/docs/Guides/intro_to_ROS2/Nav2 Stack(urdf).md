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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSP7A3J%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAw%2F1TfeufjyTnIL8FO%2FHy9lsLGt%2F6T4o9X4MGkvM4StAiANDva1gRcowfwIEoibVA5qy1LjARA3PYDFUihClt5apCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFZTff7%2FsH%2FUScDHdKtwDSOh%2Bm%2FlXrMmjkLxr9mk09RZe%2BYkMCVRZbLLalCGISANXTEqQtcpgxpYaVj9XyKWRcs4WgQp0x5omkkbyyWlxcCt9cYJK87NY47Ft3oZAr1yVWLh4wHxPp4vHhE44X2E6JT11Wo1Iig%2FEA3L5yd5QSZk%2BOzZ6Jzb3tDYqz7XPyo5goQ23bmma1IA1Wml0JOscni0IyQn%2BKa%2B4xueAzNsHcW4hmH16YQ%2BDQTjxT7ck%2BM2dmelgO2AB6ewedYrzN%2BACGIXqNkcR0AMu9ZTSdoBOe7iIaz8s8psiBymmenn7HPyG5OKnwN7YV8r74dykoUG6RfEqU4Mh8zfjzhvge0Zb%2Bj6I6tchv07EIgqjMCkFa6ezCV4lomK6BfoEIVcqAQAg4wkW%2FF2sfogLtaATe68ew%2F96lKw0wFq6BGD17VCdbrdoN9YXGzeYMhQvK2ph8lnf1omx383niVENOB4VwD%2F8QktD4cv05Q7%2Fea3hpNOnuh07yfFbom8B6PAqzTimFPcV1deSyaVVGeYlL4SI0M3U%2FJY%2BDvZlCIyAUSUyq%2FI0KzHqyB03CRyZQnvvT9Q52WPUqP5%2BKnSqHz3Ub4TeZ%2Fq%2FenfqpCk2F1wPqhak6Fg8ey4xKMnrJsuxeDowlk8wm6PRwwY6pgGHOsDskDA2ST%2BpTGRG9SUYkXIFb4a7UvQ6KorN5Sl8txqn47%2FlYQK5Ap%2B9TwOKaDJZrdfIUsasikiNy1BQy%2FzWnLeOLqjgehqUJ8tC5acfQYW0TK50BHskWCapt688Lw%2BNbrlLMq7qL%2B8vJ6ENcLF0JVyeYmmUfM41mm4AMVCtU9jIMaqoTHqBC%2B%2BzS0yRDVbVMMtPXXzxk%2BXsdlTb%2BJBr9FuNU1q5&X-Amz-Signature=c33fd853d1c42bbe61f8377807f9d2e0506904d3fab175234548aabc3fea2588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSP7A3J%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAw%2F1TfeufjyTnIL8FO%2FHy9lsLGt%2F6T4o9X4MGkvM4StAiANDva1gRcowfwIEoibVA5qy1LjARA3PYDFUihClt5apCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFZTff7%2FsH%2FUScDHdKtwDSOh%2Bm%2FlXrMmjkLxr9mk09RZe%2BYkMCVRZbLLalCGISANXTEqQtcpgxpYaVj9XyKWRcs4WgQp0x5omkkbyyWlxcCt9cYJK87NY47Ft3oZAr1yVWLh4wHxPp4vHhE44X2E6JT11Wo1Iig%2FEA3L5yd5QSZk%2BOzZ6Jzb3tDYqz7XPyo5goQ23bmma1IA1Wml0JOscni0IyQn%2BKa%2B4xueAzNsHcW4hmH16YQ%2BDQTjxT7ck%2BM2dmelgO2AB6ewedYrzN%2BACGIXqNkcR0AMu9ZTSdoBOe7iIaz8s8psiBymmenn7HPyG5OKnwN7YV8r74dykoUG6RfEqU4Mh8zfjzhvge0Zb%2Bj6I6tchv07EIgqjMCkFa6ezCV4lomK6BfoEIVcqAQAg4wkW%2FF2sfogLtaATe68ew%2F96lKw0wFq6BGD17VCdbrdoN9YXGzeYMhQvK2ph8lnf1omx383niVENOB4VwD%2F8QktD4cv05Q7%2Fea3hpNOnuh07yfFbom8B6PAqzTimFPcV1deSyaVVGeYlL4SI0M3U%2FJY%2BDvZlCIyAUSUyq%2FI0KzHqyB03CRyZQnvvT9Q52WPUqP5%2BKnSqHz3Ub4TeZ%2Fq%2FenfqpCk2F1wPqhak6Fg8ey4xKMnrJsuxeDowlk8wm6PRwwY6pgGHOsDskDA2ST%2BpTGRG9SUYkXIFb4a7UvQ6KorN5Sl8txqn47%2FlYQK5Ap%2B9TwOKaDJZrdfIUsasikiNy1BQy%2FzWnLeOLqjgehqUJ8tC5acfQYW0TK50BHskWCapt688Lw%2BNbrlLMq7qL%2B8vJ6ENcLF0JVyeYmmUfM41mm4AMVCtU9jIMaqoTHqBC%2B%2BzS0yRDVbVMMtPXXzxk%2BXsdlTb%2BJBr9FuNU1q5&X-Amz-Signature=f366e48d6a5840096b52f23352dbd77d881c31afa770848af8ebdfdd3e22ea10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSP7A3J%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAw%2F1TfeufjyTnIL8FO%2FHy9lsLGt%2F6T4o9X4MGkvM4StAiANDva1gRcowfwIEoibVA5qy1LjARA3PYDFUihClt5apCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFZTff7%2FsH%2FUScDHdKtwDSOh%2Bm%2FlXrMmjkLxr9mk09RZe%2BYkMCVRZbLLalCGISANXTEqQtcpgxpYaVj9XyKWRcs4WgQp0x5omkkbyyWlxcCt9cYJK87NY47Ft3oZAr1yVWLh4wHxPp4vHhE44X2E6JT11Wo1Iig%2FEA3L5yd5QSZk%2BOzZ6Jzb3tDYqz7XPyo5goQ23bmma1IA1Wml0JOscni0IyQn%2BKa%2B4xueAzNsHcW4hmH16YQ%2BDQTjxT7ck%2BM2dmelgO2AB6ewedYrzN%2BACGIXqNkcR0AMu9ZTSdoBOe7iIaz8s8psiBymmenn7HPyG5OKnwN7YV8r74dykoUG6RfEqU4Mh8zfjzhvge0Zb%2Bj6I6tchv07EIgqjMCkFa6ezCV4lomK6BfoEIVcqAQAg4wkW%2FF2sfogLtaATe68ew%2F96lKw0wFq6BGD17VCdbrdoN9YXGzeYMhQvK2ph8lnf1omx383niVENOB4VwD%2F8QktD4cv05Q7%2Fea3hpNOnuh07yfFbom8B6PAqzTimFPcV1deSyaVVGeYlL4SI0M3U%2FJY%2BDvZlCIyAUSUyq%2FI0KzHqyB03CRyZQnvvT9Q52WPUqP5%2BKnSqHz3Ub4TeZ%2Fq%2FenfqpCk2F1wPqhak6Fg8ey4xKMnrJsuxeDowlk8wm6PRwwY6pgGHOsDskDA2ST%2BpTGRG9SUYkXIFb4a7UvQ6KorN5Sl8txqn47%2FlYQK5Ap%2B9TwOKaDJZrdfIUsasikiNy1BQy%2FzWnLeOLqjgehqUJ8tC5acfQYW0TK50BHskWCapt688Lw%2BNbrlLMq7qL%2B8vJ6ENcLF0JVyeYmmUfM41mm4AMVCtU9jIMaqoTHqBC%2B%2BzS0yRDVbVMMtPXXzxk%2BXsdlTb%2BJBr9FuNU1q5&X-Amz-Signature=0792f764e5f879a6ecb81410cff624c1e1fb6023a3f99e068c995c1eec3920f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSP7A3J%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAw%2F1TfeufjyTnIL8FO%2FHy9lsLGt%2F6T4o9X4MGkvM4StAiANDva1gRcowfwIEoibVA5qy1LjARA3PYDFUihClt5apCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFZTff7%2FsH%2FUScDHdKtwDSOh%2Bm%2FlXrMmjkLxr9mk09RZe%2BYkMCVRZbLLalCGISANXTEqQtcpgxpYaVj9XyKWRcs4WgQp0x5omkkbyyWlxcCt9cYJK87NY47Ft3oZAr1yVWLh4wHxPp4vHhE44X2E6JT11Wo1Iig%2FEA3L5yd5QSZk%2BOzZ6Jzb3tDYqz7XPyo5goQ23bmma1IA1Wml0JOscni0IyQn%2BKa%2B4xueAzNsHcW4hmH16YQ%2BDQTjxT7ck%2BM2dmelgO2AB6ewedYrzN%2BACGIXqNkcR0AMu9ZTSdoBOe7iIaz8s8psiBymmenn7HPyG5OKnwN7YV8r74dykoUG6RfEqU4Mh8zfjzhvge0Zb%2Bj6I6tchv07EIgqjMCkFa6ezCV4lomK6BfoEIVcqAQAg4wkW%2FF2sfogLtaATe68ew%2F96lKw0wFq6BGD17VCdbrdoN9YXGzeYMhQvK2ph8lnf1omx383niVENOB4VwD%2F8QktD4cv05Q7%2Fea3hpNOnuh07yfFbom8B6PAqzTimFPcV1deSyaVVGeYlL4SI0M3U%2FJY%2BDvZlCIyAUSUyq%2FI0KzHqyB03CRyZQnvvT9Q52WPUqP5%2BKnSqHz3Ub4TeZ%2Fq%2FenfqpCk2F1wPqhak6Fg8ey4xKMnrJsuxeDowlk8wm6PRwwY6pgGHOsDskDA2ST%2BpTGRG9SUYkXIFb4a7UvQ6KorN5Sl8txqn47%2FlYQK5Ap%2B9TwOKaDJZrdfIUsasikiNy1BQy%2FzWnLeOLqjgehqUJ8tC5acfQYW0TK50BHskWCapt688Lw%2BNbrlLMq7qL%2B8vJ6ENcLF0JVyeYmmUfM41mm4AMVCtU9jIMaqoTHqBC%2B%2BzS0yRDVbVMMtPXXzxk%2BXsdlTb%2BJBr9FuNU1q5&X-Amz-Signature=b93a71d65198552fb182bc544af854fcb025b6a79688f0fdea3cf36275816e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSP7A3J%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAw%2F1TfeufjyTnIL8FO%2FHy9lsLGt%2F6T4o9X4MGkvM4StAiANDva1gRcowfwIEoibVA5qy1LjARA3PYDFUihClt5apCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFZTff7%2FsH%2FUScDHdKtwDSOh%2Bm%2FlXrMmjkLxr9mk09RZe%2BYkMCVRZbLLalCGISANXTEqQtcpgxpYaVj9XyKWRcs4WgQp0x5omkkbyyWlxcCt9cYJK87NY47Ft3oZAr1yVWLh4wHxPp4vHhE44X2E6JT11Wo1Iig%2FEA3L5yd5QSZk%2BOzZ6Jzb3tDYqz7XPyo5goQ23bmma1IA1Wml0JOscni0IyQn%2BKa%2B4xueAzNsHcW4hmH16YQ%2BDQTjxT7ck%2BM2dmelgO2AB6ewedYrzN%2BACGIXqNkcR0AMu9ZTSdoBOe7iIaz8s8psiBymmenn7HPyG5OKnwN7YV8r74dykoUG6RfEqU4Mh8zfjzhvge0Zb%2Bj6I6tchv07EIgqjMCkFa6ezCV4lomK6BfoEIVcqAQAg4wkW%2FF2sfogLtaATe68ew%2F96lKw0wFq6BGD17VCdbrdoN9YXGzeYMhQvK2ph8lnf1omx383niVENOB4VwD%2F8QktD4cv05Q7%2Fea3hpNOnuh07yfFbom8B6PAqzTimFPcV1deSyaVVGeYlL4SI0M3U%2FJY%2BDvZlCIyAUSUyq%2FI0KzHqyB03CRyZQnvvT9Q52WPUqP5%2BKnSqHz3Ub4TeZ%2Fq%2FenfqpCk2F1wPqhak6Fg8ey4xKMnrJsuxeDowlk8wm6PRwwY6pgGHOsDskDA2ST%2BpTGRG9SUYkXIFb4a7UvQ6KorN5Sl8txqn47%2FlYQK5Ap%2B9TwOKaDJZrdfIUsasikiNy1BQy%2FzWnLeOLqjgehqUJ8tC5acfQYW0TK50BHskWCapt688Lw%2BNbrlLMq7qL%2B8vJ6ENcLF0JVyeYmmUfM41mm4AMVCtU9jIMaqoTHqBC%2B%2BzS0yRDVbVMMtPXXzxk%2BXsdlTb%2BJBr9FuNU1q5&X-Amz-Signature=e66da461a279f63a9665c03acf171e5716926d2fa3244c01d3e8afe37dacb987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSP7A3J%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAw%2F1TfeufjyTnIL8FO%2FHy9lsLGt%2F6T4o9X4MGkvM4StAiANDva1gRcowfwIEoibVA5qy1LjARA3PYDFUihClt5apCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFZTff7%2FsH%2FUScDHdKtwDSOh%2Bm%2FlXrMmjkLxr9mk09RZe%2BYkMCVRZbLLalCGISANXTEqQtcpgxpYaVj9XyKWRcs4WgQp0x5omkkbyyWlxcCt9cYJK87NY47Ft3oZAr1yVWLh4wHxPp4vHhE44X2E6JT11Wo1Iig%2FEA3L5yd5QSZk%2BOzZ6Jzb3tDYqz7XPyo5goQ23bmma1IA1Wml0JOscni0IyQn%2BKa%2B4xueAzNsHcW4hmH16YQ%2BDQTjxT7ck%2BM2dmelgO2AB6ewedYrzN%2BACGIXqNkcR0AMu9ZTSdoBOe7iIaz8s8psiBymmenn7HPyG5OKnwN7YV8r74dykoUG6RfEqU4Mh8zfjzhvge0Zb%2Bj6I6tchv07EIgqjMCkFa6ezCV4lomK6BfoEIVcqAQAg4wkW%2FF2sfogLtaATe68ew%2F96lKw0wFq6BGD17VCdbrdoN9YXGzeYMhQvK2ph8lnf1omx383niVENOB4VwD%2F8QktD4cv05Q7%2Fea3hpNOnuh07yfFbom8B6PAqzTimFPcV1deSyaVVGeYlL4SI0M3U%2FJY%2BDvZlCIyAUSUyq%2FI0KzHqyB03CRyZQnvvT9Q52WPUqP5%2BKnSqHz3Ub4TeZ%2Fq%2FenfqpCk2F1wPqhak6Fg8ey4xKMnrJsuxeDowlk8wm6PRwwY6pgGHOsDskDA2ST%2BpTGRG9SUYkXIFb4a7UvQ6KorN5Sl8txqn47%2FlYQK5Ap%2B9TwOKaDJZrdfIUsasikiNy1BQy%2FzWnLeOLqjgehqUJ8tC5acfQYW0TK50BHskWCapt688Lw%2BNbrlLMq7qL%2B8vJ6ENcLF0JVyeYmmUfM41mm4AMVCtU9jIMaqoTHqBC%2B%2BzS0yRDVbVMMtPXXzxk%2BXsdlTb%2BJBr9FuNU1q5&X-Amz-Signature=5048afafc182da0c466195801e14ca1e4cfe1d2a466d46f452c23012c045c523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
