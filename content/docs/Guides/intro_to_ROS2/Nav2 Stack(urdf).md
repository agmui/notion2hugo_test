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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRHHE7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCME3n20q5xzghywZYHXuqzJ9EjnBtO9agu36rzvZnRowIgFeMSYPz1NosJMbZ%2FNepCwOolJOOS5FEfGOCbpG%2FqPYsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAnOm8dVEiXAEtPhyrcA6ba5TvsRsXAgz2lMUqA1R2BhRnoFxNtYInIK4%2B7be1HRyhZT%2BmdkSEJC0ApezDk7n3hRzU2rN8LJfsYW7VWvyoTnMID7VFD%2BaaTGZ2IIvOvOie6t0xjzeX4QTC45nXrBsNaUyfju8lnHObTsXd%2FVp80jyeOqbU6oyNbgXNI8F2pYh6pAIJWfYS1QttkYRg48MkT42eUgqdgvEzFOb%2FWqOqcvFy7rYsusJVt5nypCDuEwTF6tQArkJAEThSJsPbCth6fxa3a8la42PrPlcQX0ey7NJhyY6lnCM9PHpHThgtnzSIdzlhZzbItYG4B7qG3m%2FuVtIppxzPS8QEVgG5iKki0lGzG0xNVJGSZUZ7LRXLBx2I6iMqD6zOAwQiHmYrBPBcspgI0oc9hgMrSQC03%2B2idGShipR5Cd3YoDsIO8XzxdMWf0JFtCTb1rP%2FDVHqzwJBllItWdlSEjlL8fot5QZ%2BCTGtJ%2FR7q%2BeQp4U2nuDc%2FxXD1HBFPkuwAWp6T7303ZB4lc6cydSN%2BoGgQEOEjf0VvIhy6WZmOHeb78ANWbfQEpQIUFqGsNUTPvIUdI9hhEqWi7GK7ascFiJvo2nf73rAR7%2BkGILAuwP727Ce78rA971rxanpSWbfShau%2BMPy94r0GOqUB0eBEnhw6XHbtoLMrOrUo2jXRoXsIcJ2zwehOU7Orgpbpg4HqOh82rj%2FHmW56V8K2%2Fb%2BbNL6hCleQWhYu%2FlRlxkxUUJ%2BBytZZOdc%2FvYv%2B70APIrKJQRNlUmo3QpwP5q1cc4XRJghPJ74F71ZUrIk518YV1zrl2peamIIDC4nMkKQYNsOnfFAoaLF4M%2BYZpcEhFTzEThUKftNxfXIIC1AxuJOF3uAO&X-Amz-Signature=52b94f59198737458ac4aff8154db4aca5e611be8ab7e091a465df8d7f404755&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRHHE7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCME3n20q5xzghywZYHXuqzJ9EjnBtO9agu36rzvZnRowIgFeMSYPz1NosJMbZ%2FNepCwOolJOOS5FEfGOCbpG%2FqPYsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAnOm8dVEiXAEtPhyrcA6ba5TvsRsXAgz2lMUqA1R2BhRnoFxNtYInIK4%2B7be1HRyhZT%2BmdkSEJC0ApezDk7n3hRzU2rN8LJfsYW7VWvyoTnMID7VFD%2BaaTGZ2IIvOvOie6t0xjzeX4QTC45nXrBsNaUyfju8lnHObTsXd%2FVp80jyeOqbU6oyNbgXNI8F2pYh6pAIJWfYS1QttkYRg48MkT42eUgqdgvEzFOb%2FWqOqcvFy7rYsusJVt5nypCDuEwTF6tQArkJAEThSJsPbCth6fxa3a8la42PrPlcQX0ey7NJhyY6lnCM9PHpHThgtnzSIdzlhZzbItYG4B7qG3m%2FuVtIppxzPS8QEVgG5iKki0lGzG0xNVJGSZUZ7LRXLBx2I6iMqD6zOAwQiHmYrBPBcspgI0oc9hgMrSQC03%2B2idGShipR5Cd3YoDsIO8XzxdMWf0JFtCTb1rP%2FDVHqzwJBllItWdlSEjlL8fot5QZ%2BCTGtJ%2FR7q%2BeQp4U2nuDc%2FxXD1HBFPkuwAWp6T7303ZB4lc6cydSN%2BoGgQEOEjf0VvIhy6WZmOHeb78ANWbfQEpQIUFqGsNUTPvIUdI9hhEqWi7GK7ascFiJvo2nf73rAR7%2BkGILAuwP727Ce78rA971rxanpSWbfShau%2BMPy94r0GOqUB0eBEnhw6XHbtoLMrOrUo2jXRoXsIcJ2zwehOU7Orgpbpg4HqOh82rj%2FHmW56V8K2%2Fb%2BbNL6hCleQWhYu%2FlRlxkxUUJ%2BBytZZOdc%2FvYv%2B70APIrKJQRNlUmo3QpwP5q1cc4XRJghPJ74F71ZUrIk518YV1zrl2peamIIDC4nMkKQYNsOnfFAoaLF4M%2BYZpcEhFTzEThUKftNxfXIIC1AxuJOF3uAO&X-Amz-Signature=37c6ec2e9f9d5340db3ba7605d96a05069e4488df2ff8717ff833d23e8592eef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRHHE7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCME3n20q5xzghywZYHXuqzJ9EjnBtO9agu36rzvZnRowIgFeMSYPz1NosJMbZ%2FNepCwOolJOOS5FEfGOCbpG%2FqPYsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAnOm8dVEiXAEtPhyrcA6ba5TvsRsXAgz2lMUqA1R2BhRnoFxNtYInIK4%2B7be1HRyhZT%2BmdkSEJC0ApezDk7n3hRzU2rN8LJfsYW7VWvyoTnMID7VFD%2BaaTGZ2IIvOvOie6t0xjzeX4QTC45nXrBsNaUyfju8lnHObTsXd%2FVp80jyeOqbU6oyNbgXNI8F2pYh6pAIJWfYS1QttkYRg48MkT42eUgqdgvEzFOb%2FWqOqcvFy7rYsusJVt5nypCDuEwTF6tQArkJAEThSJsPbCth6fxa3a8la42PrPlcQX0ey7NJhyY6lnCM9PHpHThgtnzSIdzlhZzbItYG4B7qG3m%2FuVtIppxzPS8QEVgG5iKki0lGzG0xNVJGSZUZ7LRXLBx2I6iMqD6zOAwQiHmYrBPBcspgI0oc9hgMrSQC03%2B2idGShipR5Cd3YoDsIO8XzxdMWf0JFtCTb1rP%2FDVHqzwJBllItWdlSEjlL8fot5QZ%2BCTGtJ%2FR7q%2BeQp4U2nuDc%2FxXD1HBFPkuwAWp6T7303ZB4lc6cydSN%2BoGgQEOEjf0VvIhy6WZmOHeb78ANWbfQEpQIUFqGsNUTPvIUdI9hhEqWi7GK7ascFiJvo2nf73rAR7%2BkGILAuwP727Ce78rA971rxanpSWbfShau%2BMPy94r0GOqUB0eBEnhw6XHbtoLMrOrUo2jXRoXsIcJ2zwehOU7Orgpbpg4HqOh82rj%2FHmW56V8K2%2Fb%2BbNL6hCleQWhYu%2FlRlxkxUUJ%2BBytZZOdc%2FvYv%2B70APIrKJQRNlUmo3QpwP5q1cc4XRJghPJ74F71ZUrIk518YV1zrl2peamIIDC4nMkKQYNsOnfFAoaLF4M%2BYZpcEhFTzEThUKftNxfXIIC1AxuJOF3uAO&X-Amz-Signature=ba71e5e54ce5ded3eb50552a1062bd4a578ca3061ae95114d59d16a5b60c645f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRHHE7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCME3n20q5xzghywZYHXuqzJ9EjnBtO9agu36rzvZnRowIgFeMSYPz1NosJMbZ%2FNepCwOolJOOS5FEfGOCbpG%2FqPYsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAnOm8dVEiXAEtPhyrcA6ba5TvsRsXAgz2lMUqA1R2BhRnoFxNtYInIK4%2B7be1HRyhZT%2BmdkSEJC0ApezDk7n3hRzU2rN8LJfsYW7VWvyoTnMID7VFD%2BaaTGZ2IIvOvOie6t0xjzeX4QTC45nXrBsNaUyfju8lnHObTsXd%2FVp80jyeOqbU6oyNbgXNI8F2pYh6pAIJWfYS1QttkYRg48MkT42eUgqdgvEzFOb%2FWqOqcvFy7rYsusJVt5nypCDuEwTF6tQArkJAEThSJsPbCth6fxa3a8la42PrPlcQX0ey7NJhyY6lnCM9PHpHThgtnzSIdzlhZzbItYG4B7qG3m%2FuVtIppxzPS8QEVgG5iKki0lGzG0xNVJGSZUZ7LRXLBx2I6iMqD6zOAwQiHmYrBPBcspgI0oc9hgMrSQC03%2B2idGShipR5Cd3YoDsIO8XzxdMWf0JFtCTb1rP%2FDVHqzwJBllItWdlSEjlL8fot5QZ%2BCTGtJ%2FR7q%2BeQp4U2nuDc%2FxXD1HBFPkuwAWp6T7303ZB4lc6cydSN%2BoGgQEOEjf0VvIhy6WZmOHeb78ANWbfQEpQIUFqGsNUTPvIUdI9hhEqWi7GK7ascFiJvo2nf73rAR7%2BkGILAuwP727Ce78rA971rxanpSWbfShau%2BMPy94r0GOqUB0eBEnhw6XHbtoLMrOrUo2jXRoXsIcJ2zwehOU7Orgpbpg4HqOh82rj%2FHmW56V8K2%2Fb%2BbNL6hCleQWhYu%2FlRlxkxUUJ%2BBytZZOdc%2FvYv%2B70APIrKJQRNlUmo3QpwP5q1cc4XRJghPJ74F71ZUrIk518YV1zrl2peamIIDC4nMkKQYNsOnfFAoaLF4M%2BYZpcEhFTzEThUKftNxfXIIC1AxuJOF3uAO&X-Amz-Signature=11a9202933fbe958e89b3add33a0df07b033de32295502abba9fe6e178efb14a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRHHE7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCME3n20q5xzghywZYHXuqzJ9EjnBtO9agu36rzvZnRowIgFeMSYPz1NosJMbZ%2FNepCwOolJOOS5FEfGOCbpG%2FqPYsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAnOm8dVEiXAEtPhyrcA6ba5TvsRsXAgz2lMUqA1R2BhRnoFxNtYInIK4%2B7be1HRyhZT%2BmdkSEJC0ApezDk7n3hRzU2rN8LJfsYW7VWvyoTnMID7VFD%2BaaTGZ2IIvOvOie6t0xjzeX4QTC45nXrBsNaUyfju8lnHObTsXd%2FVp80jyeOqbU6oyNbgXNI8F2pYh6pAIJWfYS1QttkYRg48MkT42eUgqdgvEzFOb%2FWqOqcvFy7rYsusJVt5nypCDuEwTF6tQArkJAEThSJsPbCth6fxa3a8la42PrPlcQX0ey7NJhyY6lnCM9PHpHThgtnzSIdzlhZzbItYG4B7qG3m%2FuVtIppxzPS8QEVgG5iKki0lGzG0xNVJGSZUZ7LRXLBx2I6iMqD6zOAwQiHmYrBPBcspgI0oc9hgMrSQC03%2B2idGShipR5Cd3YoDsIO8XzxdMWf0JFtCTb1rP%2FDVHqzwJBllItWdlSEjlL8fot5QZ%2BCTGtJ%2FR7q%2BeQp4U2nuDc%2FxXD1HBFPkuwAWp6T7303ZB4lc6cydSN%2BoGgQEOEjf0VvIhy6WZmOHeb78ANWbfQEpQIUFqGsNUTPvIUdI9hhEqWi7GK7ascFiJvo2nf73rAR7%2BkGILAuwP727Ce78rA971rxanpSWbfShau%2BMPy94r0GOqUB0eBEnhw6XHbtoLMrOrUo2jXRoXsIcJ2zwehOU7Orgpbpg4HqOh82rj%2FHmW56V8K2%2Fb%2BbNL6hCleQWhYu%2FlRlxkxUUJ%2BBytZZOdc%2FvYv%2B70APIrKJQRNlUmo3QpwP5q1cc4XRJghPJ74F71ZUrIk518YV1zrl2peamIIDC4nMkKQYNsOnfFAoaLF4M%2BYZpcEhFTzEThUKftNxfXIIC1AxuJOF3uAO&X-Amz-Signature=4b4cd3fb6076e12d93b7e6586f9bbd70a53a10f48e03322f918cdf0010de8963&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRHHE7J%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCME3n20q5xzghywZYHXuqzJ9EjnBtO9agu36rzvZnRowIgFeMSYPz1NosJMbZ%2FNepCwOolJOOS5FEfGOCbpG%2FqPYsqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAnOm8dVEiXAEtPhyrcA6ba5TvsRsXAgz2lMUqA1R2BhRnoFxNtYInIK4%2B7be1HRyhZT%2BmdkSEJC0ApezDk7n3hRzU2rN8LJfsYW7VWvyoTnMID7VFD%2BaaTGZ2IIvOvOie6t0xjzeX4QTC45nXrBsNaUyfju8lnHObTsXd%2FVp80jyeOqbU6oyNbgXNI8F2pYh6pAIJWfYS1QttkYRg48MkT42eUgqdgvEzFOb%2FWqOqcvFy7rYsusJVt5nypCDuEwTF6tQArkJAEThSJsPbCth6fxa3a8la42PrPlcQX0ey7NJhyY6lnCM9PHpHThgtnzSIdzlhZzbItYG4B7qG3m%2FuVtIppxzPS8QEVgG5iKki0lGzG0xNVJGSZUZ7LRXLBx2I6iMqD6zOAwQiHmYrBPBcspgI0oc9hgMrSQC03%2B2idGShipR5Cd3YoDsIO8XzxdMWf0JFtCTb1rP%2FDVHqzwJBllItWdlSEjlL8fot5QZ%2BCTGtJ%2FR7q%2BeQp4U2nuDc%2FxXD1HBFPkuwAWp6T7303ZB4lc6cydSN%2BoGgQEOEjf0VvIhy6WZmOHeb78ANWbfQEpQIUFqGsNUTPvIUdI9hhEqWi7GK7ascFiJvo2nf73rAR7%2BkGILAuwP727Ce78rA971rxanpSWbfShau%2BMPy94r0GOqUB0eBEnhw6XHbtoLMrOrUo2jXRoXsIcJ2zwehOU7Orgpbpg4HqOh82rj%2FHmW56V8K2%2Fb%2BbNL6hCleQWhYu%2FlRlxkxUUJ%2BBytZZOdc%2FvYv%2B70APIrKJQRNlUmo3QpwP5q1cc4XRJghPJ74F71ZUrIk518YV1zrl2peamIIDC4nMkKQYNsOnfFAoaLF4M%2BYZpcEhFTzEThUKftNxfXIIC1AxuJOF3uAO&X-Amz-Signature=66310b7541a8043c1bf66da969820e79b25e68516725d7c3562004b428f691be&X-Amz-SignedHeaders=host&x-id=GetObject)
