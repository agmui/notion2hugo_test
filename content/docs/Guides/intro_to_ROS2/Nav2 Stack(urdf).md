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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV7KDRZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9yazjuIqFJiwJfzEnurRg%2B%2BXnAn4MEb8syn5dknpL7AiEArUjHZoR90p5mBhYd0SpN6r6M2wgKAxg0dr5U%2FeYpBAoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbO%2BKVN4bVHta%2FqGSrcAyKcM%2BZzVRfBTly0DtsRTlZU9yaZDepMr4Ebl4YJaU65p9OcbkD6TjzEcBXpwPf71lRSHZZwaPPsD4i%2BZJoac%2FMIQczjPFZA3FKylLre7nOcoUL6O3YPgBDtbw5FR1XYvwDYcKBGTK5Yv%2FrJbIF9JweDIH4DQOC94oLEe0yXSaZQfdGKtjLzgSzOucRmMfFVyzsaJaVNmQC%2B%2BiE5XI%2FGZV28ysNzBPon8PnAJowqHh%2F7AnUqltf6jHnYW3iKxz1j7T3XYJRZGG8CT%2Bm9oSE33J2NjSKyVYfm5oJpw%2FmIZcJD8RrzYbUUAqdCwubk7iRbCx0s8LX0ljzVg99vvTqQGHTBfjyg6OViiyClIYiPOTKHcrIJ68asDYYoRzfwR9HrcDmuMc13ZwKMmeZw94oTWYOZY2Q83P5CGTG%2FKeK%2FAAMHx7U51GSgs14NOmPlUoEgQGIFW5%2Ba4zD%2BSK0MC3bEvkFW7B7lbzm%2FW3mGGzXYX%2FaPC7FZ%2BZJ2XEeazPe20jAvXwIwOZb88HOaatUoIe6btFkQ00f5a%2F17Hb4TY1MEcik%2BrcgChzjvvPMUY%2FZM8yIExI86IMDyteX4yecnlpAldDBJAqBfsi1wghKWv%2BXm8XGrBwEErKXeB1yNzTOQMJjs0MAGOqUBoQuySb9eVksDRPmAmKo4SXwaktHgxLPUZ%2B%2F6QYyB8Csy7eJn1L33FS0OLFX77siFtUTw6smN9%2BH%2FcCIrTp91%2Bi%2FQ6cwagMPgmMQoqydIvRugxkdeCbvBYBzTYQSpeN4I%2FRGCRrBKuVno15jTJa%2Fff3TIHGmIJfVsQqJMWBAI4cW6sAkYWBwhS9rwQUcLXtzQYQ9tRfjARDuF8HrQucOT901H6NeB&X-Amz-Signature=a173a6ea67c151b3c5bfa6302d2c0367be3c7067372daba47d6adbda1e249003&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV7KDRZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9yazjuIqFJiwJfzEnurRg%2B%2BXnAn4MEb8syn5dknpL7AiEArUjHZoR90p5mBhYd0SpN6r6M2wgKAxg0dr5U%2FeYpBAoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbO%2BKVN4bVHta%2FqGSrcAyKcM%2BZzVRfBTly0DtsRTlZU9yaZDepMr4Ebl4YJaU65p9OcbkD6TjzEcBXpwPf71lRSHZZwaPPsD4i%2BZJoac%2FMIQczjPFZA3FKylLre7nOcoUL6O3YPgBDtbw5FR1XYvwDYcKBGTK5Yv%2FrJbIF9JweDIH4DQOC94oLEe0yXSaZQfdGKtjLzgSzOucRmMfFVyzsaJaVNmQC%2B%2BiE5XI%2FGZV28ysNzBPon8PnAJowqHh%2F7AnUqltf6jHnYW3iKxz1j7T3XYJRZGG8CT%2Bm9oSE33J2NjSKyVYfm5oJpw%2FmIZcJD8RrzYbUUAqdCwubk7iRbCx0s8LX0ljzVg99vvTqQGHTBfjyg6OViiyClIYiPOTKHcrIJ68asDYYoRzfwR9HrcDmuMc13ZwKMmeZw94oTWYOZY2Q83P5CGTG%2FKeK%2FAAMHx7U51GSgs14NOmPlUoEgQGIFW5%2Ba4zD%2BSK0MC3bEvkFW7B7lbzm%2FW3mGGzXYX%2FaPC7FZ%2BZJ2XEeazPe20jAvXwIwOZb88HOaatUoIe6btFkQ00f5a%2F17Hb4TY1MEcik%2BrcgChzjvvPMUY%2FZM8yIExI86IMDyteX4yecnlpAldDBJAqBfsi1wghKWv%2BXm8XGrBwEErKXeB1yNzTOQMJjs0MAGOqUBoQuySb9eVksDRPmAmKo4SXwaktHgxLPUZ%2B%2F6QYyB8Csy7eJn1L33FS0OLFX77siFtUTw6smN9%2BH%2FcCIrTp91%2Bi%2FQ6cwagMPgmMQoqydIvRugxkdeCbvBYBzTYQSpeN4I%2FRGCRrBKuVno15jTJa%2Fff3TIHGmIJfVsQqJMWBAI4cW6sAkYWBwhS9rwQUcLXtzQYQ9tRfjARDuF8HrQucOT901H6NeB&X-Amz-Signature=518cfae0e24dc1b66b4e931bb6ce98062f6456b788563390996c8d8cd689d729&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV7KDRZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9yazjuIqFJiwJfzEnurRg%2B%2BXnAn4MEb8syn5dknpL7AiEArUjHZoR90p5mBhYd0SpN6r6M2wgKAxg0dr5U%2FeYpBAoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbO%2BKVN4bVHta%2FqGSrcAyKcM%2BZzVRfBTly0DtsRTlZU9yaZDepMr4Ebl4YJaU65p9OcbkD6TjzEcBXpwPf71lRSHZZwaPPsD4i%2BZJoac%2FMIQczjPFZA3FKylLre7nOcoUL6O3YPgBDtbw5FR1XYvwDYcKBGTK5Yv%2FrJbIF9JweDIH4DQOC94oLEe0yXSaZQfdGKtjLzgSzOucRmMfFVyzsaJaVNmQC%2B%2BiE5XI%2FGZV28ysNzBPon8PnAJowqHh%2F7AnUqltf6jHnYW3iKxz1j7T3XYJRZGG8CT%2Bm9oSE33J2NjSKyVYfm5oJpw%2FmIZcJD8RrzYbUUAqdCwubk7iRbCx0s8LX0ljzVg99vvTqQGHTBfjyg6OViiyClIYiPOTKHcrIJ68asDYYoRzfwR9HrcDmuMc13ZwKMmeZw94oTWYOZY2Q83P5CGTG%2FKeK%2FAAMHx7U51GSgs14NOmPlUoEgQGIFW5%2Ba4zD%2BSK0MC3bEvkFW7B7lbzm%2FW3mGGzXYX%2FaPC7FZ%2BZJ2XEeazPe20jAvXwIwOZb88HOaatUoIe6btFkQ00f5a%2F17Hb4TY1MEcik%2BrcgChzjvvPMUY%2FZM8yIExI86IMDyteX4yecnlpAldDBJAqBfsi1wghKWv%2BXm8XGrBwEErKXeB1yNzTOQMJjs0MAGOqUBoQuySb9eVksDRPmAmKo4SXwaktHgxLPUZ%2B%2F6QYyB8Csy7eJn1L33FS0OLFX77siFtUTw6smN9%2BH%2FcCIrTp91%2Bi%2FQ6cwagMPgmMQoqydIvRugxkdeCbvBYBzTYQSpeN4I%2FRGCRrBKuVno15jTJa%2Fff3TIHGmIJfVsQqJMWBAI4cW6sAkYWBwhS9rwQUcLXtzQYQ9tRfjARDuF8HrQucOT901H6NeB&X-Amz-Signature=d0a37a7786317bad25a4c3f5e5a6131d8a93742810af4f904d369b7374c04492&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV7KDRZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9yazjuIqFJiwJfzEnurRg%2B%2BXnAn4MEb8syn5dknpL7AiEArUjHZoR90p5mBhYd0SpN6r6M2wgKAxg0dr5U%2FeYpBAoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbO%2BKVN4bVHta%2FqGSrcAyKcM%2BZzVRfBTly0DtsRTlZU9yaZDepMr4Ebl4YJaU65p9OcbkD6TjzEcBXpwPf71lRSHZZwaPPsD4i%2BZJoac%2FMIQczjPFZA3FKylLre7nOcoUL6O3YPgBDtbw5FR1XYvwDYcKBGTK5Yv%2FrJbIF9JweDIH4DQOC94oLEe0yXSaZQfdGKtjLzgSzOucRmMfFVyzsaJaVNmQC%2B%2BiE5XI%2FGZV28ysNzBPon8PnAJowqHh%2F7AnUqltf6jHnYW3iKxz1j7T3XYJRZGG8CT%2Bm9oSE33J2NjSKyVYfm5oJpw%2FmIZcJD8RrzYbUUAqdCwubk7iRbCx0s8LX0ljzVg99vvTqQGHTBfjyg6OViiyClIYiPOTKHcrIJ68asDYYoRzfwR9HrcDmuMc13ZwKMmeZw94oTWYOZY2Q83P5CGTG%2FKeK%2FAAMHx7U51GSgs14NOmPlUoEgQGIFW5%2Ba4zD%2BSK0MC3bEvkFW7B7lbzm%2FW3mGGzXYX%2FaPC7FZ%2BZJ2XEeazPe20jAvXwIwOZb88HOaatUoIe6btFkQ00f5a%2F17Hb4TY1MEcik%2BrcgChzjvvPMUY%2FZM8yIExI86IMDyteX4yecnlpAldDBJAqBfsi1wghKWv%2BXm8XGrBwEErKXeB1yNzTOQMJjs0MAGOqUBoQuySb9eVksDRPmAmKo4SXwaktHgxLPUZ%2B%2F6QYyB8Csy7eJn1L33FS0OLFX77siFtUTw6smN9%2BH%2FcCIrTp91%2Bi%2FQ6cwagMPgmMQoqydIvRugxkdeCbvBYBzTYQSpeN4I%2FRGCRrBKuVno15jTJa%2Fff3TIHGmIJfVsQqJMWBAI4cW6sAkYWBwhS9rwQUcLXtzQYQ9tRfjARDuF8HrQucOT901H6NeB&X-Amz-Signature=1eedfdd7534c729360f64ccef48e2f0f217d4ae690d344221c8e4d1993360307&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV7KDRZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9yazjuIqFJiwJfzEnurRg%2B%2BXnAn4MEb8syn5dknpL7AiEArUjHZoR90p5mBhYd0SpN6r6M2wgKAxg0dr5U%2FeYpBAoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbO%2BKVN4bVHta%2FqGSrcAyKcM%2BZzVRfBTly0DtsRTlZU9yaZDepMr4Ebl4YJaU65p9OcbkD6TjzEcBXpwPf71lRSHZZwaPPsD4i%2BZJoac%2FMIQczjPFZA3FKylLre7nOcoUL6O3YPgBDtbw5FR1XYvwDYcKBGTK5Yv%2FrJbIF9JweDIH4DQOC94oLEe0yXSaZQfdGKtjLzgSzOucRmMfFVyzsaJaVNmQC%2B%2BiE5XI%2FGZV28ysNzBPon8PnAJowqHh%2F7AnUqltf6jHnYW3iKxz1j7T3XYJRZGG8CT%2Bm9oSE33J2NjSKyVYfm5oJpw%2FmIZcJD8RrzYbUUAqdCwubk7iRbCx0s8LX0ljzVg99vvTqQGHTBfjyg6OViiyClIYiPOTKHcrIJ68asDYYoRzfwR9HrcDmuMc13ZwKMmeZw94oTWYOZY2Q83P5CGTG%2FKeK%2FAAMHx7U51GSgs14NOmPlUoEgQGIFW5%2Ba4zD%2BSK0MC3bEvkFW7B7lbzm%2FW3mGGzXYX%2FaPC7FZ%2BZJ2XEeazPe20jAvXwIwOZb88HOaatUoIe6btFkQ00f5a%2F17Hb4TY1MEcik%2BrcgChzjvvPMUY%2FZM8yIExI86IMDyteX4yecnlpAldDBJAqBfsi1wghKWv%2BXm8XGrBwEErKXeB1yNzTOQMJjs0MAGOqUBoQuySb9eVksDRPmAmKo4SXwaktHgxLPUZ%2B%2F6QYyB8Csy7eJn1L33FS0OLFX77siFtUTw6smN9%2BH%2FcCIrTp91%2Bi%2FQ6cwagMPgmMQoqydIvRugxkdeCbvBYBzTYQSpeN4I%2FRGCRrBKuVno15jTJa%2Fff3TIHGmIJfVsQqJMWBAI4cW6sAkYWBwhS9rwQUcLXtzQYQ9tRfjARDuF8HrQucOT901H6NeB&X-Amz-Signature=200c8fd4f4be2c922ef88556889a032b4ae489a9ca13d054cf4badda0d7e33d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWV7KDRZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9yazjuIqFJiwJfzEnurRg%2B%2BXnAn4MEb8syn5dknpL7AiEArUjHZoR90p5mBhYd0SpN6r6M2wgKAxg0dr5U%2FeYpBAoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbO%2BKVN4bVHta%2FqGSrcAyKcM%2BZzVRfBTly0DtsRTlZU9yaZDepMr4Ebl4YJaU65p9OcbkD6TjzEcBXpwPf71lRSHZZwaPPsD4i%2BZJoac%2FMIQczjPFZA3FKylLre7nOcoUL6O3YPgBDtbw5FR1XYvwDYcKBGTK5Yv%2FrJbIF9JweDIH4DQOC94oLEe0yXSaZQfdGKtjLzgSzOucRmMfFVyzsaJaVNmQC%2B%2BiE5XI%2FGZV28ysNzBPon8PnAJowqHh%2F7AnUqltf6jHnYW3iKxz1j7T3XYJRZGG8CT%2Bm9oSE33J2NjSKyVYfm5oJpw%2FmIZcJD8RrzYbUUAqdCwubk7iRbCx0s8LX0ljzVg99vvTqQGHTBfjyg6OViiyClIYiPOTKHcrIJ68asDYYoRzfwR9HrcDmuMc13ZwKMmeZw94oTWYOZY2Q83P5CGTG%2FKeK%2FAAMHx7U51GSgs14NOmPlUoEgQGIFW5%2Ba4zD%2BSK0MC3bEvkFW7B7lbzm%2FW3mGGzXYX%2FaPC7FZ%2BZJ2XEeazPe20jAvXwIwOZb88HOaatUoIe6btFkQ00f5a%2F17Hb4TY1MEcik%2BrcgChzjvvPMUY%2FZM8yIExI86IMDyteX4yecnlpAldDBJAqBfsi1wghKWv%2BXm8XGrBwEErKXeB1yNzTOQMJjs0MAGOqUBoQuySb9eVksDRPmAmKo4SXwaktHgxLPUZ%2B%2F6QYyB8Csy7eJn1L33FS0OLFX77siFtUTw6smN9%2BH%2FcCIrTp91%2Bi%2FQ6cwagMPgmMQoqydIvRugxkdeCbvBYBzTYQSpeN4I%2FRGCRrBKuVno15jTJa%2Fff3TIHGmIJfVsQqJMWBAI4cW6sAkYWBwhS9rwQUcLXtzQYQ9tRfjARDuF8HrQucOT901H6NeB&X-Amz-Signature=1003918793743f127110afdc947eaa91ac8eba7f7230713f5fd74679b82a1690&X-Amz-SignedHeaders=host&x-id=GetObject)
