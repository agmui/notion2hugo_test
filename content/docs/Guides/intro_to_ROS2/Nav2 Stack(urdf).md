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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOEGHTX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDzw1iZsxiNVrwFpd6Ol8nCv4khQ5U8L%2BHNh3SYYvXMqAiBKGXoZPkCPXaovorr86UbJ3AEu8vgf6%2BDpwnNtGLR2OyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncK%2BJSTs%2Bd9saXaEKtwD4kywmnw8iIr5dcjCDRFZSn1LZhCJj1s4UP4QQeKPjBlpvjDmn0TgOUinVu9vdls4Xo64yRPZR9e5rRB7hO3v5K%2FUGfBqq89nhCyQIlVK%2BzmAiyUnhOFJBeRL2JaO%2FrgtkSiDgNl5a1R2wNuNGlt47sWGRukCDR6P8h4JLmtlby4OE0oE5ncMJ7R7uCSBf8HokToMulfbcoHbNAl9UwAfL7BBAFOZ%2BJD5%2Bp4ZS67XAjxDbXkaVaj0EB59gTwPrn9imbOJ3KRb0e4cnvDNXvTL5SeYHwEt%2BOjBqgSKM3tyZVcSyDAbo%2FjrVHvQ3%2BN5%2FaSJxuKLsYEjZDa6NeqnicVq%2F9gY6Uz2Udq3AECAN5qkcFP58Z061%2FUdCzV8GS3%2B5rlDYh0n%2F7S5lD8cdaNUSFptZMdHsV2JAyurttaf90bmyTB7pN1NajcI5dZl%2BA7ReB83WPN4Ah%2FxwaEhyZnyKM6oAwGe4nsod%2FrDaMwPPyPogS8rs53GiirfkMCJjEBfzzcrXBBsQNLw4UlTCVUb%2BRD%2Fb0aJWtl%2BCK5mpM8LongXdaQHst1zFmV%2FOTtNjiTgGFLAlTThoaXdEGU3avQ2YNz%2FLdji2uIj%2F0kBvNS4mhgupVeTCIkEIgeRGpZIRPcwqvC4wQY6pgEMqFtRrzxxRBvSJNJBqTpttwZrIDauqTqltsgg6BV0mDZseBoWb2%2BH9btxOpJzCHTq%2FaNMZsZFk%2BMA4%2F5y3ytMxljsGUTuwK1ldSnWcJLvhasOPAMSvmk%2FfR8BTU7RRyMsz8%2F28Fn1Y1luImhbMeElEjVVQs09fdoFvjReWLzSDEvwCtebxJciyRTjq7hI3IZ887ovApqrCNCYtvmCS6dxjE3%2BCZE6&X-Amz-Signature=430a2271a5d4483adc8ec8d50c7721aa399e448ca8662e9a0de23b94dbe4b0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOEGHTX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDzw1iZsxiNVrwFpd6Ol8nCv4khQ5U8L%2BHNh3SYYvXMqAiBKGXoZPkCPXaovorr86UbJ3AEu8vgf6%2BDpwnNtGLR2OyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncK%2BJSTs%2Bd9saXaEKtwD4kywmnw8iIr5dcjCDRFZSn1LZhCJj1s4UP4QQeKPjBlpvjDmn0TgOUinVu9vdls4Xo64yRPZR9e5rRB7hO3v5K%2FUGfBqq89nhCyQIlVK%2BzmAiyUnhOFJBeRL2JaO%2FrgtkSiDgNl5a1R2wNuNGlt47sWGRukCDR6P8h4JLmtlby4OE0oE5ncMJ7R7uCSBf8HokToMulfbcoHbNAl9UwAfL7BBAFOZ%2BJD5%2Bp4ZS67XAjxDbXkaVaj0EB59gTwPrn9imbOJ3KRb0e4cnvDNXvTL5SeYHwEt%2BOjBqgSKM3tyZVcSyDAbo%2FjrVHvQ3%2BN5%2FaSJxuKLsYEjZDa6NeqnicVq%2F9gY6Uz2Udq3AECAN5qkcFP58Z061%2FUdCzV8GS3%2B5rlDYh0n%2F7S5lD8cdaNUSFptZMdHsV2JAyurttaf90bmyTB7pN1NajcI5dZl%2BA7ReB83WPN4Ah%2FxwaEhyZnyKM6oAwGe4nsod%2FrDaMwPPyPogS8rs53GiirfkMCJjEBfzzcrXBBsQNLw4UlTCVUb%2BRD%2Fb0aJWtl%2BCK5mpM8LongXdaQHst1zFmV%2FOTtNjiTgGFLAlTThoaXdEGU3avQ2YNz%2FLdji2uIj%2F0kBvNS4mhgupVeTCIkEIgeRGpZIRPcwqvC4wQY6pgEMqFtRrzxxRBvSJNJBqTpttwZrIDauqTqltsgg6BV0mDZseBoWb2%2BH9btxOpJzCHTq%2FaNMZsZFk%2BMA4%2F5y3ytMxljsGUTuwK1ldSnWcJLvhasOPAMSvmk%2FfR8BTU7RRyMsz8%2F28Fn1Y1luImhbMeElEjVVQs09fdoFvjReWLzSDEvwCtebxJciyRTjq7hI3IZ887ovApqrCNCYtvmCS6dxjE3%2BCZE6&X-Amz-Signature=77aceb8c9c4467619514102ad28ace40879f74c243c31471ce35fa5fabd66616&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOEGHTX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDzw1iZsxiNVrwFpd6Ol8nCv4khQ5U8L%2BHNh3SYYvXMqAiBKGXoZPkCPXaovorr86UbJ3AEu8vgf6%2BDpwnNtGLR2OyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncK%2BJSTs%2Bd9saXaEKtwD4kywmnw8iIr5dcjCDRFZSn1LZhCJj1s4UP4QQeKPjBlpvjDmn0TgOUinVu9vdls4Xo64yRPZR9e5rRB7hO3v5K%2FUGfBqq89nhCyQIlVK%2BzmAiyUnhOFJBeRL2JaO%2FrgtkSiDgNl5a1R2wNuNGlt47sWGRukCDR6P8h4JLmtlby4OE0oE5ncMJ7R7uCSBf8HokToMulfbcoHbNAl9UwAfL7BBAFOZ%2BJD5%2Bp4ZS67XAjxDbXkaVaj0EB59gTwPrn9imbOJ3KRb0e4cnvDNXvTL5SeYHwEt%2BOjBqgSKM3tyZVcSyDAbo%2FjrVHvQ3%2BN5%2FaSJxuKLsYEjZDa6NeqnicVq%2F9gY6Uz2Udq3AECAN5qkcFP58Z061%2FUdCzV8GS3%2B5rlDYh0n%2F7S5lD8cdaNUSFptZMdHsV2JAyurttaf90bmyTB7pN1NajcI5dZl%2BA7ReB83WPN4Ah%2FxwaEhyZnyKM6oAwGe4nsod%2FrDaMwPPyPogS8rs53GiirfkMCJjEBfzzcrXBBsQNLw4UlTCVUb%2BRD%2Fb0aJWtl%2BCK5mpM8LongXdaQHst1zFmV%2FOTtNjiTgGFLAlTThoaXdEGU3avQ2YNz%2FLdji2uIj%2F0kBvNS4mhgupVeTCIkEIgeRGpZIRPcwqvC4wQY6pgEMqFtRrzxxRBvSJNJBqTpttwZrIDauqTqltsgg6BV0mDZseBoWb2%2BH9btxOpJzCHTq%2FaNMZsZFk%2BMA4%2F5y3ytMxljsGUTuwK1ldSnWcJLvhasOPAMSvmk%2FfR8BTU7RRyMsz8%2F28Fn1Y1luImhbMeElEjVVQs09fdoFvjReWLzSDEvwCtebxJciyRTjq7hI3IZ887ovApqrCNCYtvmCS6dxjE3%2BCZE6&X-Amz-Signature=40ddf148c402fbd54e28ef6f2404b1631b4b12d53dec9032eca0dd9b3c6f4064&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOEGHTX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDzw1iZsxiNVrwFpd6Ol8nCv4khQ5U8L%2BHNh3SYYvXMqAiBKGXoZPkCPXaovorr86UbJ3AEu8vgf6%2BDpwnNtGLR2OyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncK%2BJSTs%2Bd9saXaEKtwD4kywmnw8iIr5dcjCDRFZSn1LZhCJj1s4UP4QQeKPjBlpvjDmn0TgOUinVu9vdls4Xo64yRPZR9e5rRB7hO3v5K%2FUGfBqq89nhCyQIlVK%2BzmAiyUnhOFJBeRL2JaO%2FrgtkSiDgNl5a1R2wNuNGlt47sWGRukCDR6P8h4JLmtlby4OE0oE5ncMJ7R7uCSBf8HokToMulfbcoHbNAl9UwAfL7BBAFOZ%2BJD5%2Bp4ZS67XAjxDbXkaVaj0EB59gTwPrn9imbOJ3KRb0e4cnvDNXvTL5SeYHwEt%2BOjBqgSKM3tyZVcSyDAbo%2FjrVHvQ3%2BN5%2FaSJxuKLsYEjZDa6NeqnicVq%2F9gY6Uz2Udq3AECAN5qkcFP58Z061%2FUdCzV8GS3%2B5rlDYh0n%2F7S5lD8cdaNUSFptZMdHsV2JAyurttaf90bmyTB7pN1NajcI5dZl%2BA7ReB83WPN4Ah%2FxwaEhyZnyKM6oAwGe4nsod%2FrDaMwPPyPogS8rs53GiirfkMCJjEBfzzcrXBBsQNLw4UlTCVUb%2BRD%2Fb0aJWtl%2BCK5mpM8LongXdaQHst1zFmV%2FOTtNjiTgGFLAlTThoaXdEGU3avQ2YNz%2FLdji2uIj%2F0kBvNS4mhgupVeTCIkEIgeRGpZIRPcwqvC4wQY6pgEMqFtRrzxxRBvSJNJBqTpttwZrIDauqTqltsgg6BV0mDZseBoWb2%2BH9btxOpJzCHTq%2FaNMZsZFk%2BMA4%2F5y3ytMxljsGUTuwK1ldSnWcJLvhasOPAMSvmk%2FfR8BTU7RRyMsz8%2F28Fn1Y1luImhbMeElEjVVQs09fdoFvjReWLzSDEvwCtebxJciyRTjq7hI3IZ887ovApqrCNCYtvmCS6dxjE3%2BCZE6&X-Amz-Signature=f7bc02f89b658bb57b47f0e7c58e0e628410224cde0e5ee9c287829161c7b434&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOEGHTX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDzw1iZsxiNVrwFpd6Ol8nCv4khQ5U8L%2BHNh3SYYvXMqAiBKGXoZPkCPXaovorr86UbJ3AEu8vgf6%2BDpwnNtGLR2OyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncK%2BJSTs%2Bd9saXaEKtwD4kywmnw8iIr5dcjCDRFZSn1LZhCJj1s4UP4QQeKPjBlpvjDmn0TgOUinVu9vdls4Xo64yRPZR9e5rRB7hO3v5K%2FUGfBqq89nhCyQIlVK%2BzmAiyUnhOFJBeRL2JaO%2FrgtkSiDgNl5a1R2wNuNGlt47sWGRukCDR6P8h4JLmtlby4OE0oE5ncMJ7R7uCSBf8HokToMulfbcoHbNAl9UwAfL7BBAFOZ%2BJD5%2Bp4ZS67XAjxDbXkaVaj0EB59gTwPrn9imbOJ3KRb0e4cnvDNXvTL5SeYHwEt%2BOjBqgSKM3tyZVcSyDAbo%2FjrVHvQ3%2BN5%2FaSJxuKLsYEjZDa6NeqnicVq%2F9gY6Uz2Udq3AECAN5qkcFP58Z061%2FUdCzV8GS3%2B5rlDYh0n%2F7S5lD8cdaNUSFptZMdHsV2JAyurttaf90bmyTB7pN1NajcI5dZl%2BA7ReB83WPN4Ah%2FxwaEhyZnyKM6oAwGe4nsod%2FrDaMwPPyPogS8rs53GiirfkMCJjEBfzzcrXBBsQNLw4UlTCVUb%2BRD%2Fb0aJWtl%2BCK5mpM8LongXdaQHst1zFmV%2FOTtNjiTgGFLAlTThoaXdEGU3avQ2YNz%2FLdji2uIj%2F0kBvNS4mhgupVeTCIkEIgeRGpZIRPcwqvC4wQY6pgEMqFtRrzxxRBvSJNJBqTpttwZrIDauqTqltsgg6BV0mDZseBoWb2%2BH9btxOpJzCHTq%2FaNMZsZFk%2BMA4%2F5y3ytMxljsGUTuwK1ldSnWcJLvhasOPAMSvmk%2FfR8BTU7RRyMsz8%2F28Fn1Y1luImhbMeElEjVVQs09fdoFvjReWLzSDEvwCtebxJciyRTjq7hI3IZ887ovApqrCNCYtvmCS6dxjE3%2BCZE6&X-Amz-Signature=b253b8603c390b9f70cf30fceeee6b6a6d6e242c54556c02dc659133534344de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOEGHTX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDzw1iZsxiNVrwFpd6Ol8nCv4khQ5U8L%2BHNh3SYYvXMqAiBKGXoZPkCPXaovorr86UbJ3AEu8vgf6%2BDpwnNtGLR2OyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMncK%2BJSTs%2Bd9saXaEKtwD4kywmnw8iIr5dcjCDRFZSn1LZhCJj1s4UP4QQeKPjBlpvjDmn0TgOUinVu9vdls4Xo64yRPZR9e5rRB7hO3v5K%2FUGfBqq89nhCyQIlVK%2BzmAiyUnhOFJBeRL2JaO%2FrgtkSiDgNl5a1R2wNuNGlt47sWGRukCDR6P8h4JLmtlby4OE0oE5ncMJ7R7uCSBf8HokToMulfbcoHbNAl9UwAfL7BBAFOZ%2BJD5%2Bp4ZS67XAjxDbXkaVaj0EB59gTwPrn9imbOJ3KRb0e4cnvDNXvTL5SeYHwEt%2BOjBqgSKM3tyZVcSyDAbo%2FjrVHvQ3%2BN5%2FaSJxuKLsYEjZDa6NeqnicVq%2F9gY6Uz2Udq3AECAN5qkcFP58Z061%2FUdCzV8GS3%2B5rlDYh0n%2F7S5lD8cdaNUSFptZMdHsV2JAyurttaf90bmyTB7pN1NajcI5dZl%2BA7ReB83WPN4Ah%2FxwaEhyZnyKM6oAwGe4nsod%2FrDaMwPPyPogS8rs53GiirfkMCJjEBfzzcrXBBsQNLw4UlTCVUb%2BRD%2Fb0aJWtl%2BCK5mpM8LongXdaQHst1zFmV%2FOTtNjiTgGFLAlTThoaXdEGU3avQ2YNz%2FLdji2uIj%2F0kBvNS4mhgupVeTCIkEIgeRGpZIRPcwqvC4wQY6pgEMqFtRrzxxRBvSJNJBqTpttwZrIDauqTqltsgg6BV0mDZseBoWb2%2BH9btxOpJzCHTq%2FaNMZsZFk%2BMA4%2F5y3ytMxljsGUTuwK1ldSnWcJLvhasOPAMSvmk%2FfR8BTU7RRyMsz8%2F28Fn1Y1luImhbMeElEjVVQs09fdoFvjReWLzSDEvwCtebxJciyRTjq7hI3IZ887ovApqrCNCYtvmCS6dxjE3%2BCZE6&X-Amz-Signature=b8674480c4d01b41b4411038ae66f13678f8afd271fff66069c047dada448463&X-Amz-SignedHeaders=host&x-id=GetObject)
