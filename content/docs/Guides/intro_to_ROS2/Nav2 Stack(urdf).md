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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQEI733%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqe0BCXf7VEzLNyQt3gfaWnSme1q80XCHJPeOVTn4xAIga4I2FH%2FQuW2JfvZI25xdyWGVTy4YKzqqqpCp55lrvv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAkvwexk4KYJDqkAICrcA%2F4jXkI%2F%2BpVw5n%2FhbrVJ1IFosF3dDe5H3LzazA3rrCrWqtMwPblkIQkbEB7ZKduWf6mtyFjR5LZQxq20F0DIMHUbLsrGreOd2JkcRcRzxudqbjQeMjeO95VCU1M1Q46QqLKzMbmV34n0UXGin%2BwRjUUGvpzDfljpi1egKnnXAK0Nd6RyY64nc2DGH%2F05Mbkyu6sofYaHELKsx7%2FdbQ6j8EcFsnkYBRhvD%2FWfOaxmhYqEEC1opkfkropFpGqAxaSZWSjH9hiww4XbZZ8kbelOqsooaCYTN5wNf2%2F3KjTCCdJBQpoANhuoy4rPY8T3AG8HUQwxxp97OfCG9QavxenzUSn6pIDb%2FbhUipqHhSGEHTZWp46m7cNJxU1Ql%2Fqt9c%2B4zqDyAIY%2FL2olrylhCjTX6Wo1WpTfX97MDrjtKdXnUpXRQWKlScN%2FyPAauKfS5j0zAA9tgPK05q8byExkevOtMXnBLOUhHK1gzCsEL8HkAaDpbK4xIfTrFr9miL9RUW7H6xX0fKL6jtRXexOnL5xppH5jXnWhPo3SvSeF3jiHgUuPPdwisRyIn4ljbhFeRQqXTLzxFmqeJjEFf%2Fi6uTdUMaZoEjXZZ6%2FbR4V4nSTpanXNQcksIFnPkEzilMR7MPb4%2Fr8GOqUBr1OgkrTHnsQjoNzHAUedaTYD7STbFyM7AaBxlj8TOQp0zQEV97Ok8R%2FqTH0RVY3DPj0xEV4KOH6Af0%2FHVY1FD7kcVTmnWejfDNNsmE%2FAZULmIJeNGS9CpaSCnPdGLwPET70ZJXKMJIGUEFjWdSkIAm24jHnHh1lr8X7XSAkCH4earj2tG0IpYSFBFp8rfR%2BPZFGIHALLySFGWtL2NoD0J9Wzi0%2Fm&X-Amz-Signature=f75a368e9209cd7a6e3a069687d60fe5bd638bb830184d16ed7fdab86e64fd98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQEI733%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqe0BCXf7VEzLNyQt3gfaWnSme1q80XCHJPeOVTn4xAIga4I2FH%2FQuW2JfvZI25xdyWGVTy4YKzqqqpCp55lrvv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAkvwexk4KYJDqkAICrcA%2F4jXkI%2F%2BpVw5n%2FhbrVJ1IFosF3dDe5H3LzazA3rrCrWqtMwPblkIQkbEB7ZKduWf6mtyFjR5LZQxq20F0DIMHUbLsrGreOd2JkcRcRzxudqbjQeMjeO95VCU1M1Q46QqLKzMbmV34n0UXGin%2BwRjUUGvpzDfljpi1egKnnXAK0Nd6RyY64nc2DGH%2F05Mbkyu6sofYaHELKsx7%2FdbQ6j8EcFsnkYBRhvD%2FWfOaxmhYqEEC1opkfkropFpGqAxaSZWSjH9hiww4XbZZ8kbelOqsooaCYTN5wNf2%2F3KjTCCdJBQpoANhuoy4rPY8T3AG8HUQwxxp97OfCG9QavxenzUSn6pIDb%2FbhUipqHhSGEHTZWp46m7cNJxU1Ql%2Fqt9c%2B4zqDyAIY%2FL2olrylhCjTX6Wo1WpTfX97MDrjtKdXnUpXRQWKlScN%2FyPAauKfS5j0zAA9tgPK05q8byExkevOtMXnBLOUhHK1gzCsEL8HkAaDpbK4xIfTrFr9miL9RUW7H6xX0fKL6jtRXexOnL5xppH5jXnWhPo3SvSeF3jiHgUuPPdwisRyIn4ljbhFeRQqXTLzxFmqeJjEFf%2Fi6uTdUMaZoEjXZZ6%2FbR4V4nSTpanXNQcksIFnPkEzilMR7MPb4%2Fr8GOqUBr1OgkrTHnsQjoNzHAUedaTYD7STbFyM7AaBxlj8TOQp0zQEV97Ok8R%2FqTH0RVY3DPj0xEV4KOH6Af0%2FHVY1FD7kcVTmnWejfDNNsmE%2FAZULmIJeNGS9CpaSCnPdGLwPET70ZJXKMJIGUEFjWdSkIAm24jHnHh1lr8X7XSAkCH4earj2tG0IpYSFBFp8rfR%2BPZFGIHALLySFGWtL2NoD0J9Wzi0%2Fm&X-Amz-Signature=39f9a1ea203020e33e339da75d2266c136b9c9034065c3ec3ad2690b6a817891&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQEI733%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqe0BCXf7VEzLNyQt3gfaWnSme1q80XCHJPeOVTn4xAIga4I2FH%2FQuW2JfvZI25xdyWGVTy4YKzqqqpCp55lrvv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAkvwexk4KYJDqkAICrcA%2F4jXkI%2F%2BpVw5n%2FhbrVJ1IFosF3dDe5H3LzazA3rrCrWqtMwPblkIQkbEB7ZKduWf6mtyFjR5LZQxq20F0DIMHUbLsrGreOd2JkcRcRzxudqbjQeMjeO95VCU1M1Q46QqLKzMbmV34n0UXGin%2BwRjUUGvpzDfljpi1egKnnXAK0Nd6RyY64nc2DGH%2F05Mbkyu6sofYaHELKsx7%2FdbQ6j8EcFsnkYBRhvD%2FWfOaxmhYqEEC1opkfkropFpGqAxaSZWSjH9hiww4XbZZ8kbelOqsooaCYTN5wNf2%2F3KjTCCdJBQpoANhuoy4rPY8T3AG8HUQwxxp97OfCG9QavxenzUSn6pIDb%2FbhUipqHhSGEHTZWp46m7cNJxU1Ql%2Fqt9c%2B4zqDyAIY%2FL2olrylhCjTX6Wo1WpTfX97MDrjtKdXnUpXRQWKlScN%2FyPAauKfS5j0zAA9tgPK05q8byExkevOtMXnBLOUhHK1gzCsEL8HkAaDpbK4xIfTrFr9miL9RUW7H6xX0fKL6jtRXexOnL5xppH5jXnWhPo3SvSeF3jiHgUuPPdwisRyIn4ljbhFeRQqXTLzxFmqeJjEFf%2Fi6uTdUMaZoEjXZZ6%2FbR4V4nSTpanXNQcksIFnPkEzilMR7MPb4%2Fr8GOqUBr1OgkrTHnsQjoNzHAUedaTYD7STbFyM7AaBxlj8TOQp0zQEV97Ok8R%2FqTH0RVY3DPj0xEV4KOH6Af0%2FHVY1FD7kcVTmnWejfDNNsmE%2FAZULmIJeNGS9CpaSCnPdGLwPET70ZJXKMJIGUEFjWdSkIAm24jHnHh1lr8X7XSAkCH4earj2tG0IpYSFBFp8rfR%2BPZFGIHALLySFGWtL2NoD0J9Wzi0%2Fm&X-Amz-Signature=9bd1437d325c3fbaae7ee89248a16ffcdf8880db0c1e7d4c89ab81879d2f4e84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQEI733%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqe0BCXf7VEzLNyQt3gfaWnSme1q80XCHJPeOVTn4xAIga4I2FH%2FQuW2JfvZI25xdyWGVTy4YKzqqqpCp55lrvv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAkvwexk4KYJDqkAICrcA%2F4jXkI%2F%2BpVw5n%2FhbrVJ1IFosF3dDe5H3LzazA3rrCrWqtMwPblkIQkbEB7ZKduWf6mtyFjR5LZQxq20F0DIMHUbLsrGreOd2JkcRcRzxudqbjQeMjeO95VCU1M1Q46QqLKzMbmV34n0UXGin%2BwRjUUGvpzDfljpi1egKnnXAK0Nd6RyY64nc2DGH%2F05Mbkyu6sofYaHELKsx7%2FdbQ6j8EcFsnkYBRhvD%2FWfOaxmhYqEEC1opkfkropFpGqAxaSZWSjH9hiww4XbZZ8kbelOqsooaCYTN5wNf2%2F3KjTCCdJBQpoANhuoy4rPY8T3AG8HUQwxxp97OfCG9QavxenzUSn6pIDb%2FbhUipqHhSGEHTZWp46m7cNJxU1Ql%2Fqt9c%2B4zqDyAIY%2FL2olrylhCjTX6Wo1WpTfX97MDrjtKdXnUpXRQWKlScN%2FyPAauKfS5j0zAA9tgPK05q8byExkevOtMXnBLOUhHK1gzCsEL8HkAaDpbK4xIfTrFr9miL9RUW7H6xX0fKL6jtRXexOnL5xppH5jXnWhPo3SvSeF3jiHgUuPPdwisRyIn4ljbhFeRQqXTLzxFmqeJjEFf%2Fi6uTdUMaZoEjXZZ6%2FbR4V4nSTpanXNQcksIFnPkEzilMR7MPb4%2Fr8GOqUBr1OgkrTHnsQjoNzHAUedaTYD7STbFyM7AaBxlj8TOQp0zQEV97Ok8R%2FqTH0RVY3DPj0xEV4KOH6Af0%2FHVY1FD7kcVTmnWejfDNNsmE%2FAZULmIJeNGS9CpaSCnPdGLwPET70ZJXKMJIGUEFjWdSkIAm24jHnHh1lr8X7XSAkCH4earj2tG0IpYSFBFp8rfR%2BPZFGIHALLySFGWtL2NoD0J9Wzi0%2Fm&X-Amz-Signature=b41b9e09325042677d4af59e88a4a716515318f252c7db31d89e36cd9fdf2a90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQEI733%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqe0BCXf7VEzLNyQt3gfaWnSme1q80XCHJPeOVTn4xAIga4I2FH%2FQuW2JfvZI25xdyWGVTy4YKzqqqpCp55lrvv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAkvwexk4KYJDqkAICrcA%2F4jXkI%2F%2BpVw5n%2FhbrVJ1IFosF3dDe5H3LzazA3rrCrWqtMwPblkIQkbEB7ZKduWf6mtyFjR5LZQxq20F0DIMHUbLsrGreOd2JkcRcRzxudqbjQeMjeO95VCU1M1Q46QqLKzMbmV34n0UXGin%2BwRjUUGvpzDfljpi1egKnnXAK0Nd6RyY64nc2DGH%2F05Mbkyu6sofYaHELKsx7%2FdbQ6j8EcFsnkYBRhvD%2FWfOaxmhYqEEC1opkfkropFpGqAxaSZWSjH9hiww4XbZZ8kbelOqsooaCYTN5wNf2%2F3KjTCCdJBQpoANhuoy4rPY8T3AG8HUQwxxp97OfCG9QavxenzUSn6pIDb%2FbhUipqHhSGEHTZWp46m7cNJxU1Ql%2Fqt9c%2B4zqDyAIY%2FL2olrylhCjTX6Wo1WpTfX97MDrjtKdXnUpXRQWKlScN%2FyPAauKfS5j0zAA9tgPK05q8byExkevOtMXnBLOUhHK1gzCsEL8HkAaDpbK4xIfTrFr9miL9RUW7H6xX0fKL6jtRXexOnL5xppH5jXnWhPo3SvSeF3jiHgUuPPdwisRyIn4ljbhFeRQqXTLzxFmqeJjEFf%2Fi6uTdUMaZoEjXZZ6%2FbR4V4nSTpanXNQcksIFnPkEzilMR7MPb4%2Fr8GOqUBr1OgkrTHnsQjoNzHAUedaTYD7STbFyM7AaBxlj8TOQp0zQEV97Ok8R%2FqTH0RVY3DPj0xEV4KOH6Af0%2FHVY1FD7kcVTmnWejfDNNsmE%2FAZULmIJeNGS9CpaSCnPdGLwPET70ZJXKMJIGUEFjWdSkIAm24jHnHh1lr8X7XSAkCH4earj2tG0IpYSFBFp8rfR%2BPZFGIHALLySFGWtL2NoD0J9Wzi0%2Fm&X-Amz-Signature=47489e45790dd1cbef4e25d8867c9086e34be6f2e98b9ad68cb7cb0fff53461c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQEI733%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqe0BCXf7VEzLNyQt3gfaWnSme1q80XCHJPeOVTn4xAIga4I2FH%2FQuW2JfvZI25xdyWGVTy4YKzqqqpCp55lrvv0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAkvwexk4KYJDqkAICrcA%2F4jXkI%2F%2BpVw5n%2FhbrVJ1IFosF3dDe5H3LzazA3rrCrWqtMwPblkIQkbEB7ZKduWf6mtyFjR5LZQxq20F0DIMHUbLsrGreOd2JkcRcRzxudqbjQeMjeO95VCU1M1Q46QqLKzMbmV34n0UXGin%2BwRjUUGvpzDfljpi1egKnnXAK0Nd6RyY64nc2DGH%2F05Mbkyu6sofYaHELKsx7%2FdbQ6j8EcFsnkYBRhvD%2FWfOaxmhYqEEC1opkfkropFpGqAxaSZWSjH9hiww4XbZZ8kbelOqsooaCYTN5wNf2%2F3KjTCCdJBQpoANhuoy4rPY8T3AG8HUQwxxp97OfCG9QavxenzUSn6pIDb%2FbhUipqHhSGEHTZWp46m7cNJxU1Ql%2Fqt9c%2B4zqDyAIY%2FL2olrylhCjTX6Wo1WpTfX97MDrjtKdXnUpXRQWKlScN%2FyPAauKfS5j0zAA9tgPK05q8byExkevOtMXnBLOUhHK1gzCsEL8HkAaDpbK4xIfTrFr9miL9RUW7H6xX0fKL6jtRXexOnL5xppH5jXnWhPo3SvSeF3jiHgUuPPdwisRyIn4ljbhFeRQqXTLzxFmqeJjEFf%2Fi6uTdUMaZoEjXZZ6%2FbR4V4nSTpanXNQcksIFnPkEzilMR7MPb4%2Fr8GOqUBr1OgkrTHnsQjoNzHAUedaTYD7STbFyM7AaBxlj8TOQp0zQEV97Ok8R%2FqTH0RVY3DPj0xEV4KOH6Af0%2FHVY1FD7kcVTmnWejfDNNsmE%2FAZULmIJeNGS9CpaSCnPdGLwPET70ZJXKMJIGUEFjWdSkIAm24jHnHh1lr8X7XSAkCH4earj2tG0IpYSFBFp8rfR%2BPZFGIHALLySFGWtL2NoD0J9Wzi0%2Fm&X-Amz-Signature=e98c5affb567b2be378bab0205ea2706b6261d684907a8ec4ebf18789c4cc691&X-Amz-SignedHeaders=host&x-id=GetObject)
