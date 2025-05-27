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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TYSPFG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEgxefwglVkDOCtR2si4TOjJTgUo2WderHLqrsfl5VHwIgSYmFft4Sd76WhZadni46AEiUiIpKX9EBiKt1Ws2qP4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL00gIoU5ddL4HzanyrcA0toF7fmjy7WLokIriY%2FPK2sXOZc8SWlaxZnj%2BA2EQ%2B6AKDhqqnhma8QPuDId4hyDqkpipkjzJFggSvHK1BQiUkSZKzupSpOe44OffcK1Ytsa3HK9rJbVuzWJ8m2d6OQMfvxMi9TiMO%2Fu1hN72ZkIEJIIog9z3i6m0Wz2l5FRBgpJmR3ISofZAG%2FPwlRCLnblDflPtAOj3ggLgBlR2Qcn7gU2s9hig7owsSd%2F7wQcmq7QfxJFH11kRcf1xLhAnLhYpjLBUC23uzVcQWTqeo6Tc%2BVWmJhnySciT5g6YhWmomBAv7266AUvLkivrM8f3DIrDUrr6OfUPclnKULufmnHL5d5qM5F3lO2RXJmMqU%2FJ9MK1jKYJgfrc0I7I5baY0bxDkEXhFiJKl1hlm8e9m3jqIncw47Hq0cEvvkMpKmGi3xoIwY2N6ORSPAMiVX5rfcCyw6iTVKl3AOPjvD3V0VgBdxQllz5mwSOTrix5MQWBhUszPm8iWdigAJ%2BD%2BgTsPp7ZT67oRzvL62oMZxd6Qe2JbkTPwK5p1hDX4Yn47NADTr0z2e%2BFvDJkzR8tLKsDeBfjtQAiidGBldU7DYDFSYLAcJnNWzfmw9rJmWDGSIuiiJIft4oVMg6QKuTaYxMMKr1sEGOqUBzpyk87DICZF%2BB2x3IbGOVcGOvWrdGwSM2SR8gPTFLdUx1kSDQxEZHZXYuT%2FFi3yX9HaKOpldZPJaEfjcKdEV744gFeviPSsoDVjN5TNWYvULR9Mt%2FpNRF70snsthzm4f%2FhoynWGEXXjWTCZu%2FzDnxAmA1eC9UDkeQVr0Y2c%2BC6AJ7Nc3933YJLKxhiLbTMbrDifKM1xbeRrmUBnZZF0L3Mu1vT4O&X-Amz-Signature=8092d5c863e4cb8adcf35cacfa0f166a2bee7257f4f3368d20b46901817163c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TYSPFG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEgxefwglVkDOCtR2si4TOjJTgUo2WderHLqrsfl5VHwIgSYmFft4Sd76WhZadni46AEiUiIpKX9EBiKt1Ws2qP4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL00gIoU5ddL4HzanyrcA0toF7fmjy7WLokIriY%2FPK2sXOZc8SWlaxZnj%2BA2EQ%2B6AKDhqqnhma8QPuDId4hyDqkpipkjzJFggSvHK1BQiUkSZKzupSpOe44OffcK1Ytsa3HK9rJbVuzWJ8m2d6OQMfvxMi9TiMO%2Fu1hN72ZkIEJIIog9z3i6m0Wz2l5FRBgpJmR3ISofZAG%2FPwlRCLnblDflPtAOj3ggLgBlR2Qcn7gU2s9hig7owsSd%2F7wQcmq7QfxJFH11kRcf1xLhAnLhYpjLBUC23uzVcQWTqeo6Tc%2BVWmJhnySciT5g6YhWmomBAv7266AUvLkivrM8f3DIrDUrr6OfUPclnKULufmnHL5d5qM5F3lO2RXJmMqU%2FJ9MK1jKYJgfrc0I7I5baY0bxDkEXhFiJKl1hlm8e9m3jqIncw47Hq0cEvvkMpKmGi3xoIwY2N6ORSPAMiVX5rfcCyw6iTVKl3AOPjvD3V0VgBdxQllz5mwSOTrix5MQWBhUszPm8iWdigAJ%2BD%2BgTsPp7ZT67oRzvL62oMZxd6Qe2JbkTPwK5p1hDX4Yn47NADTr0z2e%2BFvDJkzR8tLKsDeBfjtQAiidGBldU7DYDFSYLAcJnNWzfmw9rJmWDGSIuiiJIft4oVMg6QKuTaYxMMKr1sEGOqUBzpyk87DICZF%2BB2x3IbGOVcGOvWrdGwSM2SR8gPTFLdUx1kSDQxEZHZXYuT%2FFi3yX9HaKOpldZPJaEfjcKdEV744gFeviPSsoDVjN5TNWYvULR9Mt%2FpNRF70snsthzm4f%2FhoynWGEXXjWTCZu%2FzDnxAmA1eC9UDkeQVr0Y2c%2BC6AJ7Nc3933YJLKxhiLbTMbrDifKM1xbeRrmUBnZZF0L3Mu1vT4O&X-Amz-Signature=1a403b79b9c8d8a58af92b1a5f686feb57f6581682c5737581cdbf54c821a3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TYSPFG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEgxefwglVkDOCtR2si4TOjJTgUo2WderHLqrsfl5VHwIgSYmFft4Sd76WhZadni46AEiUiIpKX9EBiKt1Ws2qP4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL00gIoU5ddL4HzanyrcA0toF7fmjy7WLokIriY%2FPK2sXOZc8SWlaxZnj%2BA2EQ%2B6AKDhqqnhma8QPuDId4hyDqkpipkjzJFggSvHK1BQiUkSZKzupSpOe44OffcK1Ytsa3HK9rJbVuzWJ8m2d6OQMfvxMi9TiMO%2Fu1hN72ZkIEJIIog9z3i6m0Wz2l5FRBgpJmR3ISofZAG%2FPwlRCLnblDflPtAOj3ggLgBlR2Qcn7gU2s9hig7owsSd%2F7wQcmq7QfxJFH11kRcf1xLhAnLhYpjLBUC23uzVcQWTqeo6Tc%2BVWmJhnySciT5g6YhWmomBAv7266AUvLkivrM8f3DIrDUrr6OfUPclnKULufmnHL5d5qM5F3lO2RXJmMqU%2FJ9MK1jKYJgfrc0I7I5baY0bxDkEXhFiJKl1hlm8e9m3jqIncw47Hq0cEvvkMpKmGi3xoIwY2N6ORSPAMiVX5rfcCyw6iTVKl3AOPjvD3V0VgBdxQllz5mwSOTrix5MQWBhUszPm8iWdigAJ%2BD%2BgTsPp7ZT67oRzvL62oMZxd6Qe2JbkTPwK5p1hDX4Yn47NADTr0z2e%2BFvDJkzR8tLKsDeBfjtQAiidGBldU7DYDFSYLAcJnNWzfmw9rJmWDGSIuiiJIft4oVMg6QKuTaYxMMKr1sEGOqUBzpyk87DICZF%2BB2x3IbGOVcGOvWrdGwSM2SR8gPTFLdUx1kSDQxEZHZXYuT%2FFi3yX9HaKOpldZPJaEfjcKdEV744gFeviPSsoDVjN5TNWYvULR9Mt%2FpNRF70snsthzm4f%2FhoynWGEXXjWTCZu%2FzDnxAmA1eC9UDkeQVr0Y2c%2BC6AJ7Nc3933YJLKxhiLbTMbrDifKM1xbeRrmUBnZZF0L3Mu1vT4O&X-Amz-Signature=c236cd485621ebe7fc0681741d3c53b86311fde527023be90c1d3ab553e8171e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TYSPFG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEgxefwglVkDOCtR2si4TOjJTgUo2WderHLqrsfl5VHwIgSYmFft4Sd76WhZadni46AEiUiIpKX9EBiKt1Ws2qP4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL00gIoU5ddL4HzanyrcA0toF7fmjy7WLokIriY%2FPK2sXOZc8SWlaxZnj%2BA2EQ%2B6AKDhqqnhma8QPuDId4hyDqkpipkjzJFggSvHK1BQiUkSZKzupSpOe44OffcK1Ytsa3HK9rJbVuzWJ8m2d6OQMfvxMi9TiMO%2Fu1hN72ZkIEJIIog9z3i6m0Wz2l5FRBgpJmR3ISofZAG%2FPwlRCLnblDflPtAOj3ggLgBlR2Qcn7gU2s9hig7owsSd%2F7wQcmq7QfxJFH11kRcf1xLhAnLhYpjLBUC23uzVcQWTqeo6Tc%2BVWmJhnySciT5g6YhWmomBAv7266AUvLkivrM8f3DIrDUrr6OfUPclnKULufmnHL5d5qM5F3lO2RXJmMqU%2FJ9MK1jKYJgfrc0I7I5baY0bxDkEXhFiJKl1hlm8e9m3jqIncw47Hq0cEvvkMpKmGi3xoIwY2N6ORSPAMiVX5rfcCyw6iTVKl3AOPjvD3V0VgBdxQllz5mwSOTrix5MQWBhUszPm8iWdigAJ%2BD%2BgTsPp7ZT67oRzvL62oMZxd6Qe2JbkTPwK5p1hDX4Yn47NADTr0z2e%2BFvDJkzR8tLKsDeBfjtQAiidGBldU7DYDFSYLAcJnNWzfmw9rJmWDGSIuiiJIft4oVMg6QKuTaYxMMKr1sEGOqUBzpyk87DICZF%2BB2x3IbGOVcGOvWrdGwSM2SR8gPTFLdUx1kSDQxEZHZXYuT%2FFi3yX9HaKOpldZPJaEfjcKdEV744gFeviPSsoDVjN5TNWYvULR9Mt%2FpNRF70snsthzm4f%2FhoynWGEXXjWTCZu%2FzDnxAmA1eC9UDkeQVr0Y2c%2BC6AJ7Nc3933YJLKxhiLbTMbrDifKM1xbeRrmUBnZZF0L3Mu1vT4O&X-Amz-Signature=5455f361152e3fca803f9741ffb5f7901d92ef04b975b44b0b2d88f68c5b5c51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TYSPFG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEgxefwglVkDOCtR2si4TOjJTgUo2WderHLqrsfl5VHwIgSYmFft4Sd76WhZadni46AEiUiIpKX9EBiKt1Ws2qP4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL00gIoU5ddL4HzanyrcA0toF7fmjy7WLokIriY%2FPK2sXOZc8SWlaxZnj%2BA2EQ%2B6AKDhqqnhma8QPuDId4hyDqkpipkjzJFggSvHK1BQiUkSZKzupSpOe44OffcK1Ytsa3HK9rJbVuzWJ8m2d6OQMfvxMi9TiMO%2Fu1hN72ZkIEJIIog9z3i6m0Wz2l5FRBgpJmR3ISofZAG%2FPwlRCLnblDflPtAOj3ggLgBlR2Qcn7gU2s9hig7owsSd%2F7wQcmq7QfxJFH11kRcf1xLhAnLhYpjLBUC23uzVcQWTqeo6Tc%2BVWmJhnySciT5g6YhWmomBAv7266AUvLkivrM8f3DIrDUrr6OfUPclnKULufmnHL5d5qM5F3lO2RXJmMqU%2FJ9MK1jKYJgfrc0I7I5baY0bxDkEXhFiJKl1hlm8e9m3jqIncw47Hq0cEvvkMpKmGi3xoIwY2N6ORSPAMiVX5rfcCyw6iTVKl3AOPjvD3V0VgBdxQllz5mwSOTrix5MQWBhUszPm8iWdigAJ%2BD%2BgTsPp7ZT67oRzvL62oMZxd6Qe2JbkTPwK5p1hDX4Yn47NADTr0z2e%2BFvDJkzR8tLKsDeBfjtQAiidGBldU7DYDFSYLAcJnNWzfmw9rJmWDGSIuiiJIft4oVMg6QKuTaYxMMKr1sEGOqUBzpyk87DICZF%2BB2x3IbGOVcGOvWrdGwSM2SR8gPTFLdUx1kSDQxEZHZXYuT%2FFi3yX9HaKOpldZPJaEfjcKdEV744gFeviPSsoDVjN5TNWYvULR9Mt%2FpNRF70snsthzm4f%2FhoynWGEXXjWTCZu%2FzDnxAmA1eC9UDkeQVr0Y2c%2BC6AJ7Nc3933YJLKxhiLbTMbrDifKM1xbeRrmUBnZZF0L3Mu1vT4O&X-Amz-Signature=1100e07fb515d0d1b224e873d72f04203e1512e8babf35129fcf6653313ca06d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4TYSPFG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEgxefwglVkDOCtR2si4TOjJTgUo2WderHLqrsfl5VHwIgSYmFft4Sd76WhZadni46AEiUiIpKX9EBiKt1Ws2qP4Eq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL00gIoU5ddL4HzanyrcA0toF7fmjy7WLokIriY%2FPK2sXOZc8SWlaxZnj%2BA2EQ%2B6AKDhqqnhma8QPuDId4hyDqkpipkjzJFggSvHK1BQiUkSZKzupSpOe44OffcK1Ytsa3HK9rJbVuzWJ8m2d6OQMfvxMi9TiMO%2Fu1hN72ZkIEJIIog9z3i6m0Wz2l5FRBgpJmR3ISofZAG%2FPwlRCLnblDflPtAOj3ggLgBlR2Qcn7gU2s9hig7owsSd%2F7wQcmq7QfxJFH11kRcf1xLhAnLhYpjLBUC23uzVcQWTqeo6Tc%2BVWmJhnySciT5g6YhWmomBAv7266AUvLkivrM8f3DIrDUrr6OfUPclnKULufmnHL5d5qM5F3lO2RXJmMqU%2FJ9MK1jKYJgfrc0I7I5baY0bxDkEXhFiJKl1hlm8e9m3jqIncw47Hq0cEvvkMpKmGi3xoIwY2N6ORSPAMiVX5rfcCyw6iTVKl3AOPjvD3V0VgBdxQllz5mwSOTrix5MQWBhUszPm8iWdigAJ%2BD%2BgTsPp7ZT67oRzvL62oMZxd6Qe2JbkTPwK5p1hDX4Yn47NADTr0z2e%2BFvDJkzR8tLKsDeBfjtQAiidGBldU7DYDFSYLAcJnNWzfmw9rJmWDGSIuiiJIft4oVMg6QKuTaYxMMKr1sEGOqUBzpyk87DICZF%2BB2x3IbGOVcGOvWrdGwSM2SR8gPTFLdUx1kSDQxEZHZXYuT%2FFi3yX9HaKOpldZPJaEfjcKdEV744gFeviPSsoDVjN5TNWYvULR9Mt%2FpNRF70snsthzm4f%2FhoynWGEXXjWTCZu%2FzDnxAmA1eC9UDkeQVr0Y2c%2BC6AJ7Nc3933YJLKxhiLbTMbrDifKM1xbeRrmUBnZZF0L3Mu1vT4O&X-Amz-Signature=e4ea7784ee70b8d32b6fed1c787edc093a50cc856e010632b377fffcd9c13bde&X-Amz-SignedHeaders=host&x-id=GetObject)
