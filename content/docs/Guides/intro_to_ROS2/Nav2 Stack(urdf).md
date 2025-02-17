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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MFYAZL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG9rlBmtin97QsDxBnQZnonGdOvwUmyo3KYKL7pkPajUAiAGzwHSxXYBOoFHqjq15vEYdy7pYmzl6BjSw0tlr8HhEir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ioNGJEUOFHvBmhUKtwDyD8Cy7UQ0XDQYFczuO3RJ9XRSnx0NXB1RN3yQzYNG1HhD4sQzxKbMGO%2BXKjzXwBd1X8ljwm892kcwusc4NZ6lEUSdCLcrV9z0J9Gp4byKuJyzRXvI2cmDgt51g9k8%2BlNTq3InFDlTr0slHtwtDCnWInqqpmd28WegSgZ0RxovdAcEWZ665TbhzRcZbUakZ%2BuhojMPtvuVdrz94FY0V9IveV%2BowOuN%2FLtF6y00%2B5Ucf1jxqYACc1KQkkfGEso7B24aIGp0ko1r80RELNmED%2BY%2BgKE%2FfDCAJygb7zPtS8qbYSaAjn1LBWiGxkohMssfWBVXf5iVqqHT1iKxVqRWaMGITLHi2uxvXHIGz993IbJi%2FItCZQhp61epgMk0FWBu7Vln90%2Bu%2Bsbv8rVXUKCT11p5JWIHiTRxgvHGPDA6WUwvadlXyYTajSVU5m51NfGNpelqFhcWAQvY1k6Xpi7pyyrWJ5yhsf1O54ZXSeAqATSbPS13bAcsbZWkPbQBdAPjRUUpfgkVITng%2FtRgmNl0FC7ql%2FkhcDqRxPxxKEWeJfGYYMNE5NTHqqX2YD%2FF4dHrC0sUYHDZb%2FzoPp7RTRwGoQITpMoNReEdehKooivbJUdlvQmni3q6ksu6XAdwUkwhb%2FMvQY6pgHeJCMebEezaZGKT%2FNp06YcATHW3uUX%2FAXaxI6dBBB3hSFFChn9KQ44Yh0PV85COYBF6IFH5qqEHSOCFKBOGRxf84rJdtFfksReJBYIH5IcAi4FG8s%2F6tSFlRf23NJGve9pO2nAqPfI83SZ%2Bza3dRrF8c0BMo7ZT71F5UaC%2BXi0bt01FIt13cFd7PC1VD%2BW0J9pEnw3PFZSPn02tDikrj5Epi6OH92y&X-Amz-Signature=7227aab82bfeeecc1cef9cc89a03bb192f3f1b6d2a41599c3ffcecae742b6a50&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MFYAZL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG9rlBmtin97QsDxBnQZnonGdOvwUmyo3KYKL7pkPajUAiAGzwHSxXYBOoFHqjq15vEYdy7pYmzl6BjSw0tlr8HhEir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ioNGJEUOFHvBmhUKtwDyD8Cy7UQ0XDQYFczuO3RJ9XRSnx0NXB1RN3yQzYNG1HhD4sQzxKbMGO%2BXKjzXwBd1X8ljwm892kcwusc4NZ6lEUSdCLcrV9z0J9Gp4byKuJyzRXvI2cmDgt51g9k8%2BlNTq3InFDlTr0slHtwtDCnWInqqpmd28WegSgZ0RxovdAcEWZ665TbhzRcZbUakZ%2BuhojMPtvuVdrz94FY0V9IveV%2BowOuN%2FLtF6y00%2B5Ucf1jxqYACc1KQkkfGEso7B24aIGp0ko1r80RELNmED%2BY%2BgKE%2FfDCAJygb7zPtS8qbYSaAjn1LBWiGxkohMssfWBVXf5iVqqHT1iKxVqRWaMGITLHi2uxvXHIGz993IbJi%2FItCZQhp61epgMk0FWBu7Vln90%2Bu%2Bsbv8rVXUKCT11p5JWIHiTRxgvHGPDA6WUwvadlXyYTajSVU5m51NfGNpelqFhcWAQvY1k6Xpi7pyyrWJ5yhsf1O54ZXSeAqATSbPS13bAcsbZWkPbQBdAPjRUUpfgkVITng%2FtRgmNl0FC7ql%2FkhcDqRxPxxKEWeJfGYYMNE5NTHqqX2YD%2FF4dHrC0sUYHDZb%2FzoPp7RTRwGoQITpMoNReEdehKooivbJUdlvQmni3q6ksu6XAdwUkwhb%2FMvQY6pgHeJCMebEezaZGKT%2FNp06YcATHW3uUX%2FAXaxI6dBBB3hSFFChn9KQ44Yh0PV85COYBF6IFH5qqEHSOCFKBOGRxf84rJdtFfksReJBYIH5IcAi4FG8s%2F6tSFlRf23NJGve9pO2nAqPfI83SZ%2Bza3dRrF8c0BMo7ZT71F5UaC%2BXi0bt01FIt13cFd7PC1VD%2BW0J9pEnw3PFZSPn02tDikrj5Epi6OH92y&X-Amz-Signature=2a139ee04f16d941aa02293a29c4aac673e768e0d626cb2a3288c19007b546c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MFYAZL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG9rlBmtin97QsDxBnQZnonGdOvwUmyo3KYKL7pkPajUAiAGzwHSxXYBOoFHqjq15vEYdy7pYmzl6BjSw0tlr8HhEir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ioNGJEUOFHvBmhUKtwDyD8Cy7UQ0XDQYFczuO3RJ9XRSnx0NXB1RN3yQzYNG1HhD4sQzxKbMGO%2BXKjzXwBd1X8ljwm892kcwusc4NZ6lEUSdCLcrV9z0J9Gp4byKuJyzRXvI2cmDgt51g9k8%2BlNTq3InFDlTr0slHtwtDCnWInqqpmd28WegSgZ0RxovdAcEWZ665TbhzRcZbUakZ%2BuhojMPtvuVdrz94FY0V9IveV%2BowOuN%2FLtF6y00%2B5Ucf1jxqYACc1KQkkfGEso7B24aIGp0ko1r80RELNmED%2BY%2BgKE%2FfDCAJygb7zPtS8qbYSaAjn1LBWiGxkohMssfWBVXf5iVqqHT1iKxVqRWaMGITLHi2uxvXHIGz993IbJi%2FItCZQhp61epgMk0FWBu7Vln90%2Bu%2Bsbv8rVXUKCT11p5JWIHiTRxgvHGPDA6WUwvadlXyYTajSVU5m51NfGNpelqFhcWAQvY1k6Xpi7pyyrWJ5yhsf1O54ZXSeAqATSbPS13bAcsbZWkPbQBdAPjRUUpfgkVITng%2FtRgmNl0FC7ql%2FkhcDqRxPxxKEWeJfGYYMNE5NTHqqX2YD%2FF4dHrC0sUYHDZb%2FzoPp7RTRwGoQITpMoNReEdehKooivbJUdlvQmni3q6ksu6XAdwUkwhb%2FMvQY6pgHeJCMebEezaZGKT%2FNp06YcATHW3uUX%2FAXaxI6dBBB3hSFFChn9KQ44Yh0PV85COYBF6IFH5qqEHSOCFKBOGRxf84rJdtFfksReJBYIH5IcAi4FG8s%2F6tSFlRf23NJGve9pO2nAqPfI83SZ%2Bza3dRrF8c0BMo7ZT71F5UaC%2BXi0bt01FIt13cFd7PC1VD%2BW0J9pEnw3PFZSPn02tDikrj5Epi6OH92y&X-Amz-Signature=714ddcc7ce23dc93c4335a028c266916a7fa7c483ae48d7f67577baff439569b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MFYAZL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG9rlBmtin97QsDxBnQZnonGdOvwUmyo3KYKL7pkPajUAiAGzwHSxXYBOoFHqjq15vEYdy7pYmzl6BjSw0tlr8HhEir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ioNGJEUOFHvBmhUKtwDyD8Cy7UQ0XDQYFczuO3RJ9XRSnx0NXB1RN3yQzYNG1HhD4sQzxKbMGO%2BXKjzXwBd1X8ljwm892kcwusc4NZ6lEUSdCLcrV9z0J9Gp4byKuJyzRXvI2cmDgt51g9k8%2BlNTq3InFDlTr0slHtwtDCnWInqqpmd28WegSgZ0RxovdAcEWZ665TbhzRcZbUakZ%2BuhojMPtvuVdrz94FY0V9IveV%2BowOuN%2FLtF6y00%2B5Ucf1jxqYACc1KQkkfGEso7B24aIGp0ko1r80RELNmED%2BY%2BgKE%2FfDCAJygb7zPtS8qbYSaAjn1LBWiGxkohMssfWBVXf5iVqqHT1iKxVqRWaMGITLHi2uxvXHIGz993IbJi%2FItCZQhp61epgMk0FWBu7Vln90%2Bu%2Bsbv8rVXUKCT11p5JWIHiTRxgvHGPDA6WUwvadlXyYTajSVU5m51NfGNpelqFhcWAQvY1k6Xpi7pyyrWJ5yhsf1O54ZXSeAqATSbPS13bAcsbZWkPbQBdAPjRUUpfgkVITng%2FtRgmNl0FC7ql%2FkhcDqRxPxxKEWeJfGYYMNE5NTHqqX2YD%2FF4dHrC0sUYHDZb%2FzoPp7RTRwGoQITpMoNReEdehKooivbJUdlvQmni3q6ksu6XAdwUkwhb%2FMvQY6pgHeJCMebEezaZGKT%2FNp06YcATHW3uUX%2FAXaxI6dBBB3hSFFChn9KQ44Yh0PV85COYBF6IFH5qqEHSOCFKBOGRxf84rJdtFfksReJBYIH5IcAi4FG8s%2F6tSFlRf23NJGve9pO2nAqPfI83SZ%2Bza3dRrF8c0BMo7ZT71F5UaC%2BXi0bt01FIt13cFd7PC1VD%2BW0J9pEnw3PFZSPn02tDikrj5Epi6OH92y&X-Amz-Signature=b5b56e9497b3d10b3b153c1dc9fc16399c6f09081f3791d59d56e31acb1a15e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MFYAZL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG9rlBmtin97QsDxBnQZnonGdOvwUmyo3KYKL7pkPajUAiAGzwHSxXYBOoFHqjq15vEYdy7pYmzl6BjSw0tlr8HhEir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ioNGJEUOFHvBmhUKtwDyD8Cy7UQ0XDQYFczuO3RJ9XRSnx0NXB1RN3yQzYNG1HhD4sQzxKbMGO%2BXKjzXwBd1X8ljwm892kcwusc4NZ6lEUSdCLcrV9z0J9Gp4byKuJyzRXvI2cmDgt51g9k8%2BlNTq3InFDlTr0slHtwtDCnWInqqpmd28WegSgZ0RxovdAcEWZ665TbhzRcZbUakZ%2BuhojMPtvuVdrz94FY0V9IveV%2BowOuN%2FLtF6y00%2B5Ucf1jxqYACc1KQkkfGEso7B24aIGp0ko1r80RELNmED%2BY%2BgKE%2FfDCAJygb7zPtS8qbYSaAjn1LBWiGxkohMssfWBVXf5iVqqHT1iKxVqRWaMGITLHi2uxvXHIGz993IbJi%2FItCZQhp61epgMk0FWBu7Vln90%2Bu%2Bsbv8rVXUKCT11p5JWIHiTRxgvHGPDA6WUwvadlXyYTajSVU5m51NfGNpelqFhcWAQvY1k6Xpi7pyyrWJ5yhsf1O54ZXSeAqATSbPS13bAcsbZWkPbQBdAPjRUUpfgkVITng%2FtRgmNl0FC7ql%2FkhcDqRxPxxKEWeJfGYYMNE5NTHqqX2YD%2FF4dHrC0sUYHDZb%2FzoPp7RTRwGoQITpMoNReEdehKooivbJUdlvQmni3q6ksu6XAdwUkwhb%2FMvQY6pgHeJCMebEezaZGKT%2FNp06YcATHW3uUX%2FAXaxI6dBBB3hSFFChn9KQ44Yh0PV85COYBF6IFH5qqEHSOCFKBOGRxf84rJdtFfksReJBYIH5IcAi4FG8s%2F6tSFlRf23NJGve9pO2nAqPfI83SZ%2Bza3dRrF8c0BMo7ZT71F5UaC%2BXi0bt01FIt13cFd7PC1VD%2BW0J9pEnw3PFZSPn02tDikrj5Epi6OH92y&X-Amz-Signature=84c88bbcc69f814c12bd932f38600d9366c55ceb5fe100105bd343042bc5f910&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MFYAZL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIG9rlBmtin97QsDxBnQZnonGdOvwUmyo3KYKL7pkPajUAiAGzwHSxXYBOoFHqjq15vEYdy7pYmzl6BjSw0tlr8HhEir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0ioNGJEUOFHvBmhUKtwDyD8Cy7UQ0XDQYFczuO3RJ9XRSnx0NXB1RN3yQzYNG1HhD4sQzxKbMGO%2BXKjzXwBd1X8ljwm892kcwusc4NZ6lEUSdCLcrV9z0J9Gp4byKuJyzRXvI2cmDgt51g9k8%2BlNTq3InFDlTr0slHtwtDCnWInqqpmd28WegSgZ0RxovdAcEWZ665TbhzRcZbUakZ%2BuhojMPtvuVdrz94FY0V9IveV%2BowOuN%2FLtF6y00%2B5Ucf1jxqYACc1KQkkfGEso7B24aIGp0ko1r80RELNmED%2BY%2BgKE%2FfDCAJygb7zPtS8qbYSaAjn1LBWiGxkohMssfWBVXf5iVqqHT1iKxVqRWaMGITLHi2uxvXHIGz993IbJi%2FItCZQhp61epgMk0FWBu7Vln90%2Bu%2Bsbv8rVXUKCT11p5JWIHiTRxgvHGPDA6WUwvadlXyYTajSVU5m51NfGNpelqFhcWAQvY1k6Xpi7pyyrWJ5yhsf1O54ZXSeAqATSbPS13bAcsbZWkPbQBdAPjRUUpfgkVITng%2FtRgmNl0FC7ql%2FkhcDqRxPxxKEWeJfGYYMNE5NTHqqX2YD%2FF4dHrC0sUYHDZb%2FzoPp7RTRwGoQITpMoNReEdehKooivbJUdlvQmni3q6ksu6XAdwUkwhb%2FMvQY6pgHeJCMebEezaZGKT%2FNp06YcATHW3uUX%2FAXaxI6dBBB3hSFFChn9KQ44Yh0PV85COYBF6IFH5qqEHSOCFKBOGRxf84rJdtFfksReJBYIH5IcAi4FG8s%2F6tSFlRf23NJGve9pO2nAqPfI83SZ%2Bza3dRrF8c0BMo7ZT71F5UaC%2BXi0bt01FIt13cFd7PC1VD%2BW0J9pEnw3PFZSPn02tDikrj5Epi6OH92y&X-Amz-Signature=94bef79d60185ae6b2c498a2dbac2b78fcd11b86a53e376750532d304ca8d683&X-Amz-SignedHeaders=host&x-id=GetObject)
