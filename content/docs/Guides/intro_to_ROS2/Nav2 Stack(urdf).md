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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67DJDCX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHOl0pyvzG0203bndlYwvF28gK9yosiBCAwvL6EZAiyQAiBVEpNKN8jMHiVCxreoBjXe0ywCCAvcNToekhTu%2BUEBqCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeT5C1A0qbOQ5%2FWpKtwDpe32kTPrC0vJToOhs61i8ufqeQAkL%2Bm7Fionupyy%2B%2B4lPBsr5nmbMNhQ2xtf5rF4g2MioTB3%2F1ui4CHhJ1efJKlrLzPR7TadYjNtpLx%2F4MWNdXH3ta1jLqXOLz5xb9U45RwieMabJAKIilnmcGzoxpsKJKrN3SKn2cN6mSWHUHSgSgVZDdUB24Q1aSCgCDeAwT%2BHij%2Fioh68LcEUgaa6YjIZGhhgU3WcZGHsWmFEdCp95Hs9S4%2FyxfwbYk0NY6Zkyxb%2FsJob1DlXJ1cpvQXV2R5Jv0JciDdKuYOflZVvqXC3uEDImEuALFkhRt%2F7Nf70BOm4mqjRoJOP%2BF1pS8C4w9ZfwfZ0oULiUX5HAaghhe8WJaLXNX%2BdcvqtUvFcrR6S0OEf3JEpayQH%2BoTEheyNz0olwszLWokLBgQLavp9g%2BonmEZWmm1oKkJ%2FJdy0EFizCASuso2NNlktMD0TlofIWmNbY4qBXOo15AKjI6d7DPEvsGNUM73j1wZRBUgixXkjnN1DdSuBuQn%2BX031XVTLq8drSGIjR7iUGc8gW1%2BiBjFU2uGJXK9h3TIBCXbE8vLMilDfnFg2U0HRzl8QGQuXCV8fBiCuz7vo8v5wbg%2Bzo7ew%2F9eT3zv2wg8OuJEwr%2FCdwAY6pgEbAl2N12m20IV5Mhrj4NLwlnfWuMQ4WSBbQ7KlzuC%2F9z%2F5JcqynVVndQRjjLEXcSkVnNi%2Bzufjv5YaGdzwwvkNDgsi3G4K2gR8wEK8%2F0yhTKR9PFEXhTiHCwu4Y6gU5LJarZruRoRzCyAUidUtpxt5Cp9n0TyH4e68CHE6yhIVD%2BVdtdPhXGmdlQUAp%2BIM337NjXkCZgviBtBr4B84JAgrA%2BKyq7kB&X-Amz-Signature=60f186e3dea498c856e44ba75870e01fe69f2fea3223f7bba503910ba04c1d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67DJDCX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHOl0pyvzG0203bndlYwvF28gK9yosiBCAwvL6EZAiyQAiBVEpNKN8jMHiVCxreoBjXe0ywCCAvcNToekhTu%2BUEBqCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeT5C1A0qbOQ5%2FWpKtwDpe32kTPrC0vJToOhs61i8ufqeQAkL%2Bm7Fionupyy%2B%2B4lPBsr5nmbMNhQ2xtf5rF4g2MioTB3%2F1ui4CHhJ1efJKlrLzPR7TadYjNtpLx%2F4MWNdXH3ta1jLqXOLz5xb9U45RwieMabJAKIilnmcGzoxpsKJKrN3SKn2cN6mSWHUHSgSgVZDdUB24Q1aSCgCDeAwT%2BHij%2Fioh68LcEUgaa6YjIZGhhgU3WcZGHsWmFEdCp95Hs9S4%2FyxfwbYk0NY6Zkyxb%2FsJob1DlXJ1cpvQXV2R5Jv0JciDdKuYOflZVvqXC3uEDImEuALFkhRt%2F7Nf70BOm4mqjRoJOP%2BF1pS8C4w9ZfwfZ0oULiUX5HAaghhe8WJaLXNX%2BdcvqtUvFcrR6S0OEf3JEpayQH%2BoTEheyNz0olwszLWokLBgQLavp9g%2BonmEZWmm1oKkJ%2FJdy0EFizCASuso2NNlktMD0TlofIWmNbY4qBXOo15AKjI6d7DPEvsGNUM73j1wZRBUgixXkjnN1DdSuBuQn%2BX031XVTLq8drSGIjR7iUGc8gW1%2BiBjFU2uGJXK9h3TIBCXbE8vLMilDfnFg2U0HRzl8QGQuXCV8fBiCuz7vo8v5wbg%2Bzo7ew%2F9eT3zv2wg8OuJEwr%2FCdwAY6pgEbAl2N12m20IV5Mhrj4NLwlnfWuMQ4WSBbQ7KlzuC%2F9z%2F5JcqynVVndQRjjLEXcSkVnNi%2Bzufjv5YaGdzwwvkNDgsi3G4K2gR8wEK8%2F0yhTKR9PFEXhTiHCwu4Y6gU5LJarZruRoRzCyAUidUtpxt5Cp9n0TyH4e68CHE6yhIVD%2BVdtdPhXGmdlQUAp%2BIM337NjXkCZgviBtBr4B84JAgrA%2BKyq7kB&X-Amz-Signature=a1ece705c0e3c2bd5a59ab18dabf8da89955f8cc2bee119d0df8bb222aa01b84&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67DJDCX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHOl0pyvzG0203bndlYwvF28gK9yosiBCAwvL6EZAiyQAiBVEpNKN8jMHiVCxreoBjXe0ywCCAvcNToekhTu%2BUEBqCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeT5C1A0qbOQ5%2FWpKtwDpe32kTPrC0vJToOhs61i8ufqeQAkL%2Bm7Fionupyy%2B%2B4lPBsr5nmbMNhQ2xtf5rF4g2MioTB3%2F1ui4CHhJ1efJKlrLzPR7TadYjNtpLx%2F4MWNdXH3ta1jLqXOLz5xb9U45RwieMabJAKIilnmcGzoxpsKJKrN3SKn2cN6mSWHUHSgSgVZDdUB24Q1aSCgCDeAwT%2BHij%2Fioh68LcEUgaa6YjIZGhhgU3WcZGHsWmFEdCp95Hs9S4%2FyxfwbYk0NY6Zkyxb%2FsJob1DlXJ1cpvQXV2R5Jv0JciDdKuYOflZVvqXC3uEDImEuALFkhRt%2F7Nf70BOm4mqjRoJOP%2BF1pS8C4w9ZfwfZ0oULiUX5HAaghhe8WJaLXNX%2BdcvqtUvFcrR6S0OEf3JEpayQH%2BoTEheyNz0olwszLWokLBgQLavp9g%2BonmEZWmm1oKkJ%2FJdy0EFizCASuso2NNlktMD0TlofIWmNbY4qBXOo15AKjI6d7DPEvsGNUM73j1wZRBUgixXkjnN1DdSuBuQn%2BX031XVTLq8drSGIjR7iUGc8gW1%2BiBjFU2uGJXK9h3TIBCXbE8vLMilDfnFg2U0HRzl8QGQuXCV8fBiCuz7vo8v5wbg%2Bzo7ew%2F9eT3zv2wg8OuJEwr%2FCdwAY6pgEbAl2N12m20IV5Mhrj4NLwlnfWuMQ4WSBbQ7KlzuC%2F9z%2F5JcqynVVndQRjjLEXcSkVnNi%2Bzufjv5YaGdzwwvkNDgsi3G4K2gR8wEK8%2F0yhTKR9PFEXhTiHCwu4Y6gU5LJarZruRoRzCyAUidUtpxt5Cp9n0TyH4e68CHE6yhIVD%2BVdtdPhXGmdlQUAp%2BIM337NjXkCZgviBtBr4B84JAgrA%2BKyq7kB&X-Amz-Signature=809697c3109ec9d81a0ee62cb537ad2dae2febcd7db351f2dd476914bad6baf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67DJDCX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHOl0pyvzG0203bndlYwvF28gK9yosiBCAwvL6EZAiyQAiBVEpNKN8jMHiVCxreoBjXe0ywCCAvcNToekhTu%2BUEBqCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeT5C1A0qbOQ5%2FWpKtwDpe32kTPrC0vJToOhs61i8ufqeQAkL%2Bm7Fionupyy%2B%2B4lPBsr5nmbMNhQ2xtf5rF4g2MioTB3%2F1ui4CHhJ1efJKlrLzPR7TadYjNtpLx%2F4MWNdXH3ta1jLqXOLz5xb9U45RwieMabJAKIilnmcGzoxpsKJKrN3SKn2cN6mSWHUHSgSgVZDdUB24Q1aSCgCDeAwT%2BHij%2Fioh68LcEUgaa6YjIZGhhgU3WcZGHsWmFEdCp95Hs9S4%2FyxfwbYk0NY6Zkyxb%2FsJob1DlXJ1cpvQXV2R5Jv0JciDdKuYOflZVvqXC3uEDImEuALFkhRt%2F7Nf70BOm4mqjRoJOP%2BF1pS8C4w9ZfwfZ0oULiUX5HAaghhe8WJaLXNX%2BdcvqtUvFcrR6S0OEf3JEpayQH%2BoTEheyNz0olwszLWokLBgQLavp9g%2BonmEZWmm1oKkJ%2FJdy0EFizCASuso2NNlktMD0TlofIWmNbY4qBXOo15AKjI6d7DPEvsGNUM73j1wZRBUgixXkjnN1DdSuBuQn%2BX031XVTLq8drSGIjR7iUGc8gW1%2BiBjFU2uGJXK9h3TIBCXbE8vLMilDfnFg2U0HRzl8QGQuXCV8fBiCuz7vo8v5wbg%2Bzo7ew%2F9eT3zv2wg8OuJEwr%2FCdwAY6pgEbAl2N12m20IV5Mhrj4NLwlnfWuMQ4WSBbQ7KlzuC%2F9z%2F5JcqynVVndQRjjLEXcSkVnNi%2Bzufjv5YaGdzwwvkNDgsi3G4K2gR8wEK8%2F0yhTKR9PFEXhTiHCwu4Y6gU5LJarZruRoRzCyAUidUtpxt5Cp9n0TyH4e68CHE6yhIVD%2BVdtdPhXGmdlQUAp%2BIM337NjXkCZgviBtBr4B84JAgrA%2BKyq7kB&X-Amz-Signature=1efb73e9f417653adf96aeea64f8841d1cc5117ba3b92194fd9d98ba13dcb9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67DJDCX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHOl0pyvzG0203bndlYwvF28gK9yosiBCAwvL6EZAiyQAiBVEpNKN8jMHiVCxreoBjXe0ywCCAvcNToekhTu%2BUEBqCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeT5C1A0qbOQ5%2FWpKtwDpe32kTPrC0vJToOhs61i8ufqeQAkL%2Bm7Fionupyy%2B%2B4lPBsr5nmbMNhQ2xtf5rF4g2MioTB3%2F1ui4CHhJ1efJKlrLzPR7TadYjNtpLx%2F4MWNdXH3ta1jLqXOLz5xb9U45RwieMabJAKIilnmcGzoxpsKJKrN3SKn2cN6mSWHUHSgSgVZDdUB24Q1aSCgCDeAwT%2BHij%2Fioh68LcEUgaa6YjIZGhhgU3WcZGHsWmFEdCp95Hs9S4%2FyxfwbYk0NY6Zkyxb%2FsJob1DlXJ1cpvQXV2R5Jv0JciDdKuYOflZVvqXC3uEDImEuALFkhRt%2F7Nf70BOm4mqjRoJOP%2BF1pS8C4w9ZfwfZ0oULiUX5HAaghhe8WJaLXNX%2BdcvqtUvFcrR6S0OEf3JEpayQH%2BoTEheyNz0olwszLWokLBgQLavp9g%2BonmEZWmm1oKkJ%2FJdy0EFizCASuso2NNlktMD0TlofIWmNbY4qBXOo15AKjI6d7DPEvsGNUM73j1wZRBUgixXkjnN1DdSuBuQn%2BX031XVTLq8drSGIjR7iUGc8gW1%2BiBjFU2uGJXK9h3TIBCXbE8vLMilDfnFg2U0HRzl8QGQuXCV8fBiCuz7vo8v5wbg%2Bzo7ew%2F9eT3zv2wg8OuJEwr%2FCdwAY6pgEbAl2N12m20IV5Mhrj4NLwlnfWuMQ4WSBbQ7KlzuC%2F9z%2F5JcqynVVndQRjjLEXcSkVnNi%2Bzufjv5YaGdzwwvkNDgsi3G4K2gR8wEK8%2F0yhTKR9PFEXhTiHCwu4Y6gU5LJarZruRoRzCyAUidUtpxt5Cp9n0TyH4e68CHE6yhIVD%2BVdtdPhXGmdlQUAp%2BIM337NjXkCZgviBtBr4B84JAgrA%2BKyq7kB&X-Amz-Signature=a92b35ca005c16677bbfa8744235b17ca9e7500c836ab8b3069902bb7c95c64e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67DJDCX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHOl0pyvzG0203bndlYwvF28gK9yosiBCAwvL6EZAiyQAiBVEpNKN8jMHiVCxreoBjXe0ywCCAvcNToekhTu%2BUEBqCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFeT5C1A0qbOQ5%2FWpKtwDpe32kTPrC0vJToOhs61i8ufqeQAkL%2Bm7Fionupyy%2B%2B4lPBsr5nmbMNhQ2xtf5rF4g2MioTB3%2F1ui4CHhJ1efJKlrLzPR7TadYjNtpLx%2F4MWNdXH3ta1jLqXOLz5xb9U45RwieMabJAKIilnmcGzoxpsKJKrN3SKn2cN6mSWHUHSgSgVZDdUB24Q1aSCgCDeAwT%2BHij%2Fioh68LcEUgaa6YjIZGhhgU3WcZGHsWmFEdCp95Hs9S4%2FyxfwbYk0NY6Zkyxb%2FsJob1DlXJ1cpvQXV2R5Jv0JciDdKuYOflZVvqXC3uEDImEuALFkhRt%2F7Nf70BOm4mqjRoJOP%2BF1pS8C4w9ZfwfZ0oULiUX5HAaghhe8WJaLXNX%2BdcvqtUvFcrR6S0OEf3JEpayQH%2BoTEheyNz0olwszLWokLBgQLavp9g%2BonmEZWmm1oKkJ%2FJdy0EFizCASuso2NNlktMD0TlofIWmNbY4qBXOo15AKjI6d7DPEvsGNUM73j1wZRBUgixXkjnN1DdSuBuQn%2BX031XVTLq8drSGIjR7iUGc8gW1%2BiBjFU2uGJXK9h3TIBCXbE8vLMilDfnFg2U0HRzl8QGQuXCV8fBiCuz7vo8v5wbg%2Bzo7ew%2F9eT3zv2wg8OuJEwr%2FCdwAY6pgEbAl2N12m20IV5Mhrj4NLwlnfWuMQ4WSBbQ7KlzuC%2F9z%2F5JcqynVVndQRjjLEXcSkVnNi%2Bzufjv5YaGdzwwvkNDgsi3G4K2gR8wEK8%2F0yhTKR9PFEXhTiHCwu4Y6gU5LJarZruRoRzCyAUidUtpxt5Cp9n0TyH4e68CHE6yhIVD%2BVdtdPhXGmdlQUAp%2BIM337NjXkCZgviBtBr4B84JAgrA%2BKyq7kB&X-Amz-Signature=c6b1a6e8a259cd5459d708f46b7c6e1743bfddc8162ee3f7542cbd630f496ba9&X-Amz-SignedHeaders=host&x-id=GetObject)
