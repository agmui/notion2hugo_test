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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYC57Z5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLU%2BdOBv5yW%2BSocFmnzvhwDAc4YYq%2BkyYut7V9oDdfrAIhANAaAq5lgS2DiLAg2ipclD3zqA02uPm6w97Jsj9coOQFKv8DCCoQABoMNjM3NDIzMTgzODA1IgxZHtq4i5MgfkqAPSkq3AOpt%2BRY4FdAm8Ka8qXhBH%2BaVQxh8LFR6Z5AH3dexHgIwKx9Nuc4PQzbwtKxu62bpGjqFOF1O3ZMzH72VuEuDDYUXgQixPYZNyA45lwybpZko3WPvUXmV8Y6yJqPWkla81JTuvDGjR4ND4tbiMZU4voKyJdFsj5yCpf3NymMCFC9q2kyjxHXaVMnjmqOPPaZKWZzG7s1poQI8m7cxC%2BSv4g1IDIumZoHJZj6VKzZyZY4NZWk4BwtVpWDK4KpjKWuoj2GQqq%2FMeJ7p5V2X561cXWlDGKuOG%2F5Oi294sskGJU%2F1jT7APl8%2Bh8u%2BcAM%2FRvXLBKOdFUC6PB%2FVhGLvjzE5J%2FN%2BEZYK556lnBkR%2F0%2Bp5ugn7Ir6VFigbu5xcrYsRCxukMEhEicAJdwu7iYj6xlTbnR2xHgF%2FJYyoAdNGm13jWtOFGA2kGoQfaIRKG8SvKnsujD1fsTIWjQp3KuU%2B3zib0E72Kc%2FqfT0fL1s0v5ZK%2BMW3XkpsJ4x%2BjXmGiXgRotg0AxMw3ChqEMdAl0TmGOr2E7d47o1gGxmOD5dWeknFg4KGFU4YbCOZqJDhrrM19KGo2%2BSI%2F5Bfl6t73GlHyTo0TWZcomOEZZu2sEBK2ws2OkUI8APpY1ezN9PGxhCzCn06W%2BBjqkAY4D%2FLFjK1DYKKtqTtG4QQaIbo%2FBaRZFeGSMLkvH%2Ftb6njIHLYbO84TkCrkVy8eM24BNSdHJmDE3s8BQ%2FQvHueuSGe0Xck2mGabLCc6rBB3sUEs3Cr7F74zqrpKwUidV0kBaG30025dE0IIhtfL0FQkepI5QYr1%2BLoQijgWC055VHIG4pl%2B490z1t2b9RThgzhfVtFxYPB29jyBVTt1qJrlaB0y2&X-Amz-Signature=59ea794512021192663cd1f55d25d7073a2d8a3f9011f381144b45e841b48e13&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYC57Z5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLU%2BdOBv5yW%2BSocFmnzvhwDAc4YYq%2BkyYut7V9oDdfrAIhANAaAq5lgS2DiLAg2ipclD3zqA02uPm6w97Jsj9coOQFKv8DCCoQABoMNjM3NDIzMTgzODA1IgxZHtq4i5MgfkqAPSkq3AOpt%2BRY4FdAm8Ka8qXhBH%2BaVQxh8LFR6Z5AH3dexHgIwKx9Nuc4PQzbwtKxu62bpGjqFOF1O3ZMzH72VuEuDDYUXgQixPYZNyA45lwybpZko3WPvUXmV8Y6yJqPWkla81JTuvDGjR4ND4tbiMZU4voKyJdFsj5yCpf3NymMCFC9q2kyjxHXaVMnjmqOPPaZKWZzG7s1poQI8m7cxC%2BSv4g1IDIumZoHJZj6VKzZyZY4NZWk4BwtVpWDK4KpjKWuoj2GQqq%2FMeJ7p5V2X561cXWlDGKuOG%2F5Oi294sskGJU%2F1jT7APl8%2Bh8u%2BcAM%2FRvXLBKOdFUC6PB%2FVhGLvjzE5J%2FN%2BEZYK556lnBkR%2F0%2Bp5ugn7Ir6VFigbu5xcrYsRCxukMEhEicAJdwu7iYj6xlTbnR2xHgF%2FJYyoAdNGm13jWtOFGA2kGoQfaIRKG8SvKnsujD1fsTIWjQp3KuU%2B3zib0E72Kc%2FqfT0fL1s0v5ZK%2BMW3XkpsJ4x%2BjXmGiXgRotg0AxMw3ChqEMdAl0TmGOr2E7d47o1gGxmOD5dWeknFg4KGFU4YbCOZqJDhrrM19KGo2%2BSI%2F5Bfl6t73GlHyTo0TWZcomOEZZu2sEBK2ws2OkUI8APpY1ezN9PGxhCzCn06W%2BBjqkAY4D%2FLFjK1DYKKtqTtG4QQaIbo%2FBaRZFeGSMLkvH%2Ftb6njIHLYbO84TkCrkVy8eM24BNSdHJmDE3s8BQ%2FQvHueuSGe0Xck2mGabLCc6rBB3sUEs3Cr7F74zqrpKwUidV0kBaG30025dE0IIhtfL0FQkepI5QYr1%2BLoQijgWC055VHIG4pl%2B490z1t2b9RThgzhfVtFxYPB29jyBVTt1qJrlaB0y2&X-Amz-Signature=541cfb40af132b33f0d09d91db567c4cf8fc6ba4697ba29b66000d4f2feb593a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYC57Z5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLU%2BdOBv5yW%2BSocFmnzvhwDAc4YYq%2BkyYut7V9oDdfrAIhANAaAq5lgS2DiLAg2ipclD3zqA02uPm6w97Jsj9coOQFKv8DCCoQABoMNjM3NDIzMTgzODA1IgxZHtq4i5MgfkqAPSkq3AOpt%2BRY4FdAm8Ka8qXhBH%2BaVQxh8LFR6Z5AH3dexHgIwKx9Nuc4PQzbwtKxu62bpGjqFOF1O3ZMzH72VuEuDDYUXgQixPYZNyA45lwybpZko3WPvUXmV8Y6yJqPWkla81JTuvDGjR4ND4tbiMZU4voKyJdFsj5yCpf3NymMCFC9q2kyjxHXaVMnjmqOPPaZKWZzG7s1poQI8m7cxC%2BSv4g1IDIumZoHJZj6VKzZyZY4NZWk4BwtVpWDK4KpjKWuoj2GQqq%2FMeJ7p5V2X561cXWlDGKuOG%2F5Oi294sskGJU%2F1jT7APl8%2Bh8u%2BcAM%2FRvXLBKOdFUC6PB%2FVhGLvjzE5J%2FN%2BEZYK556lnBkR%2F0%2Bp5ugn7Ir6VFigbu5xcrYsRCxukMEhEicAJdwu7iYj6xlTbnR2xHgF%2FJYyoAdNGm13jWtOFGA2kGoQfaIRKG8SvKnsujD1fsTIWjQp3KuU%2B3zib0E72Kc%2FqfT0fL1s0v5ZK%2BMW3XkpsJ4x%2BjXmGiXgRotg0AxMw3ChqEMdAl0TmGOr2E7d47o1gGxmOD5dWeknFg4KGFU4YbCOZqJDhrrM19KGo2%2BSI%2F5Bfl6t73GlHyTo0TWZcomOEZZu2sEBK2ws2OkUI8APpY1ezN9PGxhCzCn06W%2BBjqkAY4D%2FLFjK1DYKKtqTtG4QQaIbo%2FBaRZFeGSMLkvH%2Ftb6njIHLYbO84TkCrkVy8eM24BNSdHJmDE3s8BQ%2FQvHueuSGe0Xck2mGabLCc6rBB3sUEs3Cr7F74zqrpKwUidV0kBaG30025dE0IIhtfL0FQkepI5QYr1%2BLoQijgWC055VHIG4pl%2B490z1t2b9RThgzhfVtFxYPB29jyBVTt1qJrlaB0y2&X-Amz-Signature=fc7e25442211328d0b9a77e004bc2b43463ac999685814b72a731ccb1baf55a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYC57Z5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLU%2BdOBv5yW%2BSocFmnzvhwDAc4YYq%2BkyYut7V9oDdfrAIhANAaAq5lgS2DiLAg2ipclD3zqA02uPm6w97Jsj9coOQFKv8DCCoQABoMNjM3NDIzMTgzODA1IgxZHtq4i5MgfkqAPSkq3AOpt%2BRY4FdAm8Ka8qXhBH%2BaVQxh8LFR6Z5AH3dexHgIwKx9Nuc4PQzbwtKxu62bpGjqFOF1O3ZMzH72VuEuDDYUXgQixPYZNyA45lwybpZko3WPvUXmV8Y6yJqPWkla81JTuvDGjR4ND4tbiMZU4voKyJdFsj5yCpf3NymMCFC9q2kyjxHXaVMnjmqOPPaZKWZzG7s1poQI8m7cxC%2BSv4g1IDIumZoHJZj6VKzZyZY4NZWk4BwtVpWDK4KpjKWuoj2GQqq%2FMeJ7p5V2X561cXWlDGKuOG%2F5Oi294sskGJU%2F1jT7APl8%2Bh8u%2BcAM%2FRvXLBKOdFUC6PB%2FVhGLvjzE5J%2FN%2BEZYK556lnBkR%2F0%2Bp5ugn7Ir6VFigbu5xcrYsRCxukMEhEicAJdwu7iYj6xlTbnR2xHgF%2FJYyoAdNGm13jWtOFGA2kGoQfaIRKG8SvKnsujD1fsTIWjQp3KuU%2B3zib0E72Kc%2FqfT0fL1s0v5ZK%2BMW3XkpsJ4x%2BjXmGiXgRotg0AxMw3ChqEMdAl0TmGOr2E7d47o1gGxmOD5dWeknFg4KGFU4YbCOZqJDhrrM19KGo2%2BSI%2F5Bfl6t73GlHyTo0TWZcomOEZZu2sEBK2ws2OkUI8APpY1ezN9PGxhCzCn06W%2BBjqkAY4D%2FLFjK1DYKKtqTtG4QQaIbo%2FBaRZFeGSMLkvH%2Ftb6njIHLYbO84TkCrkVy8eM24BNSdHJmDE3s8BQ%2FQvHueuSGe0Xck2mGabLCc6rBB3sUEs3Cr7F74zqrpKwUidV0kBaG30025dE0IIhtfL0FQkepI5QYr1%2BLoQijgWC055VHIG4pl%2B490z1t2b9RThgzhfVtFxYPB29jyBVTt1qJrlaB0y2&X-Amz-Signature=d2fd0c962781b816293b61eb7abb47148fe02da3046b01b7a4eafdcbb5a4de66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYC57Z5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLU%2BdOBv5yW%2BSocFmnzvhwDAc4YYq%2BkyYut7V9oDdfrAIhANAaAq5lgS2DiLAg2ipclD3zqA02uPm6w97Jsj9coOQFKv8DCCoQABoMNjM3NDIzMTgzODA1IgxZHtq4i5MgfkqAPSkq3AOpt%2BRY4FdAm8Ka8qXhBH%2BaVQxh8LFR6Z5AH3dexHgIwKx9Nuc4PQzbwtKxu62bpGjqFOF1O3ZMzH72VuEuDDYUXgQixPYZNyA45lwybpZko3WPvUXmV8Y6yJqPWkla81JTuvDGjR4ND4tbiMZU4voKyJdFsj5yCpf3NymMCFC9q2kyjxHXaVMnjmqOPPaZKWZzG7s1poQI8m7cxC%2BSv4g1IDIumZoHJZj6VKzZyZY4NZWk4BwtVpWDK4KpjKWuoj2GQqq%2FMeJ7p5V2X561cXWlDGKuOG%2F5Oi294sskGJU%2F1jT7APl8%2Bh8u%2BcAM%2FRvXLBKOdFUC6PB%2FVhGLvjzE5J%2FN%2BEZYK556lnBkR%2F0%2Bp5ugn7Ir6VFigbu5xcrYsRCxukMEhEicAJdwu7iYj6xlTbnR2xHgF%2FJYyoAdNGm13jWtOFGA2kGoQfaIRKG8SvKnsujD1fsTIWjQp3KuU%2B3zib0E72Kc%2FqfT0fL1s0v5ZK%2BMW3XkpsJ4x%2BjXmGiXgRotg0AxMw3ChqEMdAl0TmGOr2E7d47o1gGxmOD5dWeknFg4KGFU4YbCOZqJDhrrM19KGo2%2BSI%2F5Bfl6t73GlHyTo0TWZcomOEZZu2sEBK2ws2OkUI8APpY1ezN9PGxhCzCn06W%2BBjqkAY4D%2FLFjK1DYKKtqTtG4QQaIbo%2FBaRZFeGSMLkvH%2Ftb6njIHLYbO84TkCrkVy8eM24BNSdHJmDE3s8BQ%2FQvHueuSGe0Xck2mGabLCc6rBB3sUEs3Cr7F74zqrpKwUidV0kBaG30025dE0IIhtfL0FQkepI5QYr1%2BLoQijgWC055VHIG4pl%2B490z1t2b9RThgzhfVtFxYPB29jyBVTt1qJrlaB0y2&X-Amz-Signature=14ff1af79b922d8fb91036c5a10e9181d2d385c4a6cef63f736f7090fef0e1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYC57Z5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLU%2BdOBv5yW%2BSocFmnzvhwDAc4YYq%2BkyYut7V9oDdfrAIhANAaAq5lgS2DiLAg2ipclD3zqA02uPm6w97Jsj9coOQFKv8DCCoQABoMNjM3NDIzMTgzODA1IgxZHtq4i5MgfkqAPSkq3AOpt%2BRY4FdAm8Ka8qXhBH%2BaVQxh8LFR6Z5AH3dexHgIwKx9Nuc4PQzbwtKxu62bpGjqFOF1O3ZMzH72VuEuDDYUXgQixPYZNyA45lwybpZko3WPvUXmV8Y6yJqPWkla81JTuvDGjR4ND4tbiMZU4voKyJdFsj5yCpf3NymMCFC9q2kyjxHXaVMnjmqOPPaZKWZzG7s1poQI8m7cxC%2BSv4g1IDIumZoHJZj6VKzZyZY4NZWk4BwtVpWDK4KpjKWuoj2GQqq%2FMeJ7p5V2X561cXWlDGKuOG%2F5Oi294sskGJU%2F1jT7APl8%2Bh8u%2BcAM%2FRvXLBKOdFUC6PB%2FVhGLvjzE5J%2FN%2BEZYK556lnBkR%2F0%2Bp5ugn7Ir6VFigbu5xcrYsRCxukMEhEicAJdwu7iYj6xlTbnR2xHgF%2FJYyoAdNGm13jWtOFGA2kGoQfaIRKG8SvKnsujD1fsTIWjQp3KuU%2B3zib0E72Kc%2FqfT0fL1s0v5ZK%2BMW3XkpsJ4x%2BjXmGiXgRotg0AxMw3ChqEMdAl0TmGOr2E7d47o1gGxmOD5dWeknFg4KGFU4YbCOZqJDhrrM19KGo2%2BSI%2F5Bfl6t73GlHyTo0TWZcomOEZZu2sEBK2ws2OkUI8APpY1ezN9PGxhCzCn06W%2BBjqkAY4D%2FLFjK1DYKKtqTtG4QQaIbo%2FBaRZFeGSMLkvH%2Ftb6njIHLYbO84TkCrkVy8eM24BNSdHJmDE3s8BQ%2FQvHueuSGe0Xck2mGabLCc6rBB3sUEs3Cr7F74zqrpKwUidV0kBaG30025dE0IIhtfL0FQkepI5QYr1%2BLoQijgWC055VHIG4pl%2B490z1t2b9RThgzhfVtFxYPB29jyBVTt1qJrlaB0y2&X-Amz-Signature=8c704dbee586d5f93b2b893fca078930794ac6cf4a5171ed240a373bf61bf3c4&X-Amz-SignedHeaders=host&x-id=GetObject)
