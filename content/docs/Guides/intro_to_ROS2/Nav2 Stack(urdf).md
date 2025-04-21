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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7O3LFHT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCdk9gA70QuIEy3Av9Nih4SVrDx2pwyb%2FEAue%2Bx9ZkBUQIgIF3LDvTtSkx2IeZ3MufSEx2dqJ%2Bfd1%2BtC0KVUZIQEcgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoNsPh0diDo0h73ircAyf8UgQnRVI%2FKaUtn4bAH2qEeXTm9U5GPytnvTUwFwNs6XS%2FnUTZ%2BsJtPnqqqI5amKER1rHFeC3p6dPBtKl4MbHVGuiGpcTPyVijuefp%2BIRUfMSX5dLYkLQkrke10WrWH9FtZMXsmtQbUvVjnCot0P6UoPtGbqMgLdV5Dj5axyEb8onB5bYTWWUSnqSlfYc8D6WmS5kFlpa%2FKy%2B%2F1B2uSWQjQK41kaIJ5RqhWNJmRWholfKhvTzNDwY4LkwmKz0saaP1aTJ%2FgSnYuKqRQLsteUQtdB9IBUtJqsFM3XMH%2BfXubIuDpzYmf%2BTDkTbpxKXzXIZRfAcLh0Ik7DiWzV9ot0sWTu2pTwAOgujayJnTSVtZ%2BGeJ%2B0kQpCxKKhiFUJZoR2qz8DGTx2uVYyoou3yEyIByJChQ9ZXn5QFXY1qNatP8H0rHmCNltxe5oup33fQhTkrUz1opn62SWGon05i9kIS03fxdcr8WiVeeFk%2Fkpf7c7sFgqYPr4RL5uPMWk0Ivovj%2FxJYWqUHGyi2LdsErTXlIMyRLUvN4jysybeQ0eM8x4ueghxUFkTjlVKjpB9zF7oeUlmYl9SXiTIbGhATyrK4O4UZN49%2BQZXi16XLIFX4uKksW1GASautG6X2uMLrtmsAGOqUBAheroQX%2BEERsS9NptYyr9YRfD4jyYlmq49UShBNp5CUhmsMuGKV4FgGK6hr%2FXoeGfGSa29Ldsb579aIU2OpGNFb9LH6trPD2CZVn99WdYXfBWfHxEQjK5nLBDPmPnJLqkePHXBrhlAzNmR6UDPVmx%2Fm2knFEqCimhDwZmVxoqbryO%2B6DzzpMzhEUwuxmETEvOba5JL85%2BhtcEHcMJOk4ETBKntjc&X-Amz-Signature=4443821fc4c23443a60efb6a0e6f621aea8f4d59e66355f556500bd8e7879fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7O3LFHT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCdk9gA70QuIEy3Av9Nih4SVrDx2pwyb%2FEAue%2Bx9ZkBUQIgIF3LDvTtSkx2IeZ3MufSEx2dqJ%2Bfd1%2BtC0KVUZIQEcgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoNsPh0diDo0h73ircAyf8UgQnRVI%2FKaUtn4bAH2qEeXTm9U5GPytnvTUwFwNs6XS%2FnUTZ%2BsJtPnqqqI5amKER1rHFeC3p6dPBtKl4MbHVGuiGpcTPyVijuefp%2BIRUfMSX5dLYkLQkrke10WrWH9FtZMXsmtQbUvVjnCot0P6UoPtGbqMgLdV5Dj5axyEb8onB5bYTWWUSnqSlfYc8D6WmS5kFlpa%2FKy%2B%2F1B2uSWQjQK41kaIJ5RqhWNJmRWholfKhvTzNDwY4LkwmKz0saaP1aTJ%2FgSnYuKqRQLsteUQtdB9IBUtJqsFM3XMH%2BfXubIuDpzYmf%2BTDkTbpxKXzXIZRfAcLh0Ik7DiWzV9ot0sWTu2pTwAOgujayJnTSVtZ%2BGeJ%2B0kQpCxKKhiFUJZoR2qz8DGTx2uVYyoou3yEyIByJChQ9ZXn5QFXY1qNatP8H0rHmCNltxe5oup33fQhTkrUz1opn62SWGon05i9kIS03fxdcr8WiVeeFk%2Fkpf7c7sFgqYPr4RL5uPMWk0Ivovj%2FxJYWqUHGyi2LdsErTXlIMyRLUvN4jysybeQ0eM8x4ueghxUFkTjlVKjpB9zF7oeUlmYl9SXiTIbGhATyrK4O4UZN49%2BQZXi16XLIFX4uKksW1GASautG6X2uMLrtmsAGOqUBAheroQX%2BEERsS9NptYyr9YRfD4jyYlmq49UShBNp5CUhmsMuGKV4FgGK6hr%2FXoeGfGSa29Ldsb579aIU2OpGNFb9LH6trPD2CZVn99WdYXfBWfHxEQjK5nLBDPmPnJLqkePHXBrhlAzNmR6UDPVmx%2Fm2knFEqCimhDwZmVxoqbryO%2B6DzzpMzhEUwuxmETEvOba5JL85%2BhtcEHcMJOk4ETBKntjc&X-Amz-Signature=f10ab7947b0575c9d1f6816f172252c9dc06a04e5d8e853bf3d0bff146cc29ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7O3LFHT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCdk9gA70QuIEy3Av9Nih4SVrDx2pwyb%2FEAue%2Bx9ZkBUQIgIF3LDvTtSkx2IeZ3MufSEx2dqJ%2Bfd1%2BtC0KVUZIQEcgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoNsPh0diDo0h73ircAyf8UgQnRVI%2FKaUtn4bAH2qEeXTm9U5GPytnvTUwFwNs6XS%2FnUTZ%2BsJtPnqqqI5amKER1rHFeC3p6dPBtKl4MbHVGuiGpcTPyVijuefp%2BIRUfMSX5dLYkLQkrke10WrWH9FtZMXsmtQbUvVjnCot0P6UoPtGbqMgLdV5Dj5axyEb8onB5bYTWWUSnqSlfYc8D6WmS5kFlpa%2FKy%2B%2F1B2uSWQjQK41kaIJ5RqhWNJmRWholfKhvTzNDwY4LkwmKz0saaP1aTJ%2FgSnYuKqRQLsteUQtdB9IBUtJqsFM3XMH%2BfXubIuDpzYmf%2BTDkTbpxKXzXIZRfAcLh0Ik7DiWzV9ot0sWTu2pTwAOgujayJnTSVtZ%2BGeJ%2B0kQpCxKKhiFUJZoR2qz8DGTx2uVYyoou3yEyIByJChQ9ZXn5QFXY1qNatP8H0rHmCNltxe5oup33fQhTkrUz1opn62SWGon05i9kIS03fxdcr8WiVeeFk%2Fkpf7c7sFgqYPr4RL5uPMWk0Ivovj%2FxJYWqUHGyi2LdsErTXlIMyRLUvN4jysybeQ0eM8x4ueghxUFkTjlVKjpB9zF7oeUlmYl9SXiTIbGhATyrK4O4UZN49%2BQZXi16XLIFX4uKksW1GASautG6X2uMLrtmsAGOqUBAheroQX%2BEERsS9NptYyr9YRfD4jyYlmq49UShBNp5CUhmsMuGKV4FgGK6hr%2FXoeGfGSa29Ldsb579aIU2OpGNFb9LH6trPD2CZVn99WdYXfBWfHxEQjK5nLBDPmPnJLqkePHXBrhlAzNmR6UDPVmx%2Fm2knFEqCimhDwZmVxoqbryO%2B6DzzpMzhEUwuxmETEvOba5JL85%2BhtcEHcMJOk4ETBKntjc&X-Amz-Signature=30f67af99b71de53729d4a190cf030f515f22a3f2f8e57ce725837825599534d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7O3LFHT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCdk9gA70QuIEy3Av9Nih4SVrDx2pwyb%2FEAue%2Bx9ZkBUQIgIF3LDvTtSkx2IeZ3MufSEx2dqJ%2Bfd1%2BtC0KVUZIQEcgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoNsPh0diDo0h73ircAyf8UgQnRVI%2FKaUtn4bAH2qEeXTm9U5GPytnvTUwFwNs6XS%2FnUTZ%2BsJtPnqqqI5amKER1rHFeC3p6dPBtKl4MbHVGuiGpcTPyVijuefp%2BIRUfMSX5dLYkLQkrke10WrWH9FtZMXsmtQbUvVjnCot0P6UoPtGbqMgLdV5Dj5axyEb8onB5bYTWWUSnqSlfYc8D6WmS5kFlpa%2FKy%2B%2F1B2uSWQjQK41kaIJ5RqhWNJmRWholfKhvTzNDwY4LkwmKz0saaP1aTJ%2FgSnYuKqRQLsteUQtdB9IBUtJqsFM3XMH%2BfXubIuDpzYmf%2BTDkTbpxKXzXIZRfAcLh0Ik7DiWzV9ot0sWTu2pTwAOgujayJnTSVtZ%2BGeJ%2B0kQpCxKKhiFUJZoR2qz8DGTx2uVYyoou3yEyIByJChQ9ZXn5QFXY1qNatP8H0rHmCNltxe5oup33fQhTkrUz1opn62SWGon05i9kIS03fxdcr8WiVeeFk%2Fkpf7c7sFgqYPr4RL5uPMWk0Ivovj%2FxJYWqUHGyi2LdsErTXlIMyRLUvN4jysybeQ0eM8x4ueghxUFkTjlVKjpB9zF7oeUlmYl9SXiTIbGhATyrK4O4UZN49%2BQZXi16XLIFX4uKksW1GASautG6X2uMLrtmsAGOqUBAheroQX%2BEERsS9NptYyr9YRfD4jyYlmq49UShBNp5CUhmsMuGKV4FgGK6hr%2FXoeGfGSa29Ldsb579aIU2OpGNFb9LH6trPD2CZVn99WdYXfBWfHxEQjK5nLBDPmPnJLqkePHXBrhlAzNmR6UDPVmx%2Fm2knFEqCimhDwZmVxoqbryO%2B6DzzpMzhEUwuxmETEvOba5JL85%2BhtcEHcMJOk4ETBKntjc&X-Amz-Signature=7b119648bad21666a0c8cab85c4aa2f00446922f0f974794439f14b25686c778&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7O3LFHT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCdk9gA70QuIEy3Av9Nih4SVrDx2pwyb%2FEAue%2Bx9ZkBUQIgIF3LDvTtSkx2IeZ3MufSEx2dqJ%2Bfd1%2BtC0KVUZIQEcgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoNsPh0diDo0h73ircAyf8UgQnRVI%2FKaUtn4bAH2qEeXTm9U5GPytnvTUwFwNs6XS%2FnUTZ%2BsJtPnqqqI5amKER1rHFeC3p6dPBtKl4MbHVGuiGpcTPyVijuefp%2BIRUfMSX5dLYkLQkrke10WrWH9FtZMXsmtQbUvVjnCot0P6UoPtGbqMgLdV5Dj5axyEb8onB5bYTWWUSnqSlfYc8D6WmS5kFlpa%2FKy%2B%2F1B2uSWQjQK41kaIJ5RqhWNJmRWholfKhvTzNDwY4LkwmKz0saaP1aTJ%2FgSnYuKqRQLsteUQtdB9IBUtJqsFM3XMH%2BfXubIuDpzYmf%2BTDkTbpxKXzXIZRfAcLh0Ik7DiWzV9ot0sWTu2pTwAOgujayJnTSVtZ%2BGeJ%2B0kQpCxKKhiFUJZoR2qz8DGTx2uVYyoou3yEyIByJChQ9ZXn5QFXY1qNatP8H0rHmCNltxe5oup33fQhTkrUz1opn62SWGon05i9kIS03fxdcr8WiVeeFk%2Fkpf7c7sFgqYPr4RL5uPMWk0Ivovj%2FxJYWqUHGyi2LdsErTXlIMyRLUvN4jysybeQ0eM8x4ueghxUFkTjlVKjpB9zF7oeUlmYl9SXiTIbGhATyrK4O4UZN49%2BQZXi16XLIFX4uKksW1GASautG6X2uMLrtmsAGOqUBAheroQX%2BEERsS9NptYyr9YRfD4jyYlmq49UShBNp5CUhmsMuGKV4FgGK6hr%2FXoeGfGSa29Ldsb579aIU2OpGNFb9LH6trPD2CZVn99WdYXfBWfHxEQjK5nLBDPmPnJLqkePHXBrhlAzNmR6UDPVmx%2Fm2knFEqCimhDwZmVxoqbryO%2B6DzzpMzhEUwuxmETEvOba5JL85%2BhtcEHcMJOk4ETBKntjc&X-Amz-Signature=9ab95912b8b9049ec8f34846fd2936d3cfbf31f4443a41a3f067ae820e3bc560&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7O3LFHT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCdk9gA70QuIEy3Av9Nih4SVrDx2pwyb%2FEAue%2Bx9ZkBUQIgIF3LDvTtSkx2IeZ3MufSEx2dqJ%2Bfd1%2BtC0KVUZIQEcgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnoNsPh0diDo0h73ircAyf8UgQnRVI%2FKaUtn4bAH2qEeXTm9U5GPytnvTUwFwNs6XS%2FnUTZ%2BsJtPnqqqI5amKER1rHFeC3p6dPBtKl4MbHVGuiGpcTPyVijuefp%2BIRUfMSX5dLYkLQkrke10WrWH9FtZMXsmtQbUvVjnCot0P6UoPtGbqMgLdV5Dj5axyEb8onB5bYTWWUSnqSlfYc8D6WmS5kFlpa%2FKy%2B%2F1B2uSWQjQK41kaIJ5RqhWNJmRWholfKhvTzNDwY4LkwmKz0saaP1aTJ%2FgSnYuKqRQLsteUQtdB9IBUtJqsFM3XMH%2BfXubIuDpzYmf%2BTDkTbpxKXzXIZRfAcLh0Ik7DiWzV9ot0sWTu2pTwAOgujayJnTSVtZ%2BGeJ%2B0kQpCxKKhiFUJZoR2qz8DGTx2uVYyoou3yEyIByJChQ9ZXn5QFXY1qNatP8H0rHmCNltxe5oup33fQhTkrUz1opn62SWGon05i9kIS03fxdcr8WiVeeFk%2Fkpf7c7sFgqYPr4RL5uPMWk0Ivovj%2FxJYWqUHGyi2LdsErTXlIMyRLUvN4jysybeQ0eM8x4ueghxUFkTjlVKjpB9zF7oeUlmYl9SXiTIbGhATyrK4O4UZN49%2BQZXi16XLIFX4uKksW1GASautG6X2uMLrtmsAGOqUBAheroQX%2BEERsS9NptYyr9YRfD4jyYlmq49UShBNp5CUhmsMuGKV4FgGK6hr%2FXoeGfGSa29Ldsb579aIU2OpGNFb9LH6trPD2CZVn99WdYXfBWfHxEQjK5nLBDPmPnJLqkePHXBrhlAzNmR6UDPVmx%2Fm2knFEqCimhDwZmVxoqbryO%2B6DzzpMzhEUwuxmETEvOba5JL85%2BhtcEHcMJOk4ETBKntjc&X-Amz-Signature=f41ced135948669ec6b17a1c3cf5530715df81a85190b5d85f9aad2b1e727b61&X-Amz-SignedHeaders=host&x-id=GetObject)
