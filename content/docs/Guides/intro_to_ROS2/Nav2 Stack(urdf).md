---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCPTDQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH3xm3xEyT1%2F4iKEcoEr8d%2FDdCZ0LCoA3g7n9U4q0pupAiEAsHlmsqrjEUk5y7%2BW%2BrN%2BmBeLoFgqrMyVtSNqXGpTy4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGDHCCl8niyRZj%2BpbyrcA2IYI7AeMB0yygPZayh%2FIPUQC3afz8hDuzbw4hh1J%2BeC0L57xJaNxdqrYTzpvjYbFDysMuFRlhGUKXDs2EBipQVV4bRRz4xH19MuErJu46bp5RSS%2FstBaiwI7532fx%2BCVDNW9og8SMlnqlt1KPUrS8z%2FYkFhrmse3r2aTGwLZc7ZHvVkV3mKvj7fN%2FrCidLRhDQiDSb24hobeOea9YZFu%2Bd6I8w07JIA7Dq28Oh4TdlC4lRFYr5mZ5HAhcQVUXuxwLE9gR52C9uCkE%2FSEV2qBLTnA4rlIkM%2Fd%2F9dMprjPhdbiYRKioJgAps1hgbtc8iA9xs1uADNQ%2BC26VWrwzOmC5Vgj8ePVwlnu%2B4cFWUflywTy1kLF6%2F7vH5LUpFdlNOW9KD1BPdPPGWig1zP8i8rUaG5II00xuWB%2FZhNJMEMe1d0no5mltvPVxxxjv60BWrqyTOoe%2FuV%2FuB9svMTYTtG%2BaCU2P8zQrytD7QJcxJcfWpm7nRGgOGtHx4xns2R3QeI3%2BTI5Q4IUFf9fN0BXyCcKipXzbIYDnW2oHn%2BUDuELl90249fbXhztLXYR8KwdswQjGim3%2FqLYFcMiJOkfrARF2uK3dWGAGqMQe0c4r6JIJibpqX%2BNQlvstPm%2F%2FghMJK8jr0GOqUBmK9qBFOtOqpOy3acFUDOWRaqk9gAYlzd43U1ctrgV4Sb%2F6%2BK2jNWhyySJiRGr%2By1EFRpwrTxjPjdX3iU%2BqAzf4Jhl2BP9jFHsjNhXB5gGlxBs%2FIDMFlQquLk6rmnVMQifR9DDcCcO%2BI%2F6T4gL%2BjqlgEqqQCnw86HOg4e%2FPowLRVMrnTitB0ZRz5nKuNGycQzeDGTIKNWJxPp4QGZ5Cq23OJsI9pI&X-Amz-Signature=9a6735a90c7a7fdb7376c6851cda8c209cab82b9a66ffda56ab304a7e5b51643&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCPTDQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH3xm3xEyT1%2F4iKEcoEr8d%2FDdCZ0LCoA3g7n9U4q0pupAiEAsHlmsqrjEUk5y7%2BW%2BrN%2BmBeLoFgqrMyVtSNqXGpTy4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGDHCCl8niyRZj%2BpbyrcA2IYI7AeMB0yygPZayh%2FIPUQC3afz8hDuzbw4hh1J%2BeC0L57xJaNxdqrYTzpvjYbFDysMuFRlhGUKXDs2EBipQVV4bRRz4xH19MuErJu46bp5RSS%2FstBaiwI7532fx%2BCVDNW9og8SMlnqlt1KPUrS8z%2FYkFhrmse3r2aTGwLZc7ZHvVkV3mKvj7fN%2FrCidLRhDQiDSb24hobeOea9YZFu%2Bd6I8w07JIA7Dq28Oh4TdlC4lRFYr5mZ5HAhcQVUXuxwLE9gR52C9uCkE%2FSEV2qBLTnA4rlIkM%2Fd%2F9dMprjPhdbiYRKioJgAps1hgbtc8iA9xs1uADNQ%2BC26VWrwzOmC5Vgj8ePVwlnu%2B4cFWUflywTy1kLF6%2F7vH5LUpFdlNOW9KD1BPdPPGWig1zP8i8rUaG5II00xuWB%2FZhNJMEMe1d0no5mltvPVxxxjv60BWrqyTOoe%2FuV%2FuB9svMTYTtG%2BaCU2P8zQrytD7QJcxJcfWpm7nRGgOGtHx4xns2R3QeI3%2BTI5Q4IUFf9fN0BXyCcKipXzbIYDnW2oHn%2BUDuELl90249fbXhztLXYR8KwdswQjGim3%2FqLYFcMiJOkfrARF2uK3dWGAGqMQe0c4r6JIJibpqX%2BNQlvstPm%2F%2FghMJK8jr0GOqUBmK9qBFOtOqpOy3acFUDOWRaqk9gAYlzd43U1ctrgV4Sb%2F6%2BK2jNWhyySJiRGr%2By1EFRpwrTxjPjdX3iU%2BqAzf4Jhl2BP9jFHsjNhXB5gGlxBs%2FIDMFlQquLk6rmnVMQifR9DDcCcO%2BI%2F6T4gL%2BjqlgEqqQCnw86HOg4e%2FPowLRVMrnTitB0ZRz5nKuNGycQzeDGTIKNWJxPp4QGZ5Cq23OJsI9pI&X-Amz-Signature=d3fda4b5e8589af4f7cc947224a70390dfb3a4d965e02e59b1fe36c8618e1fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCPTDQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH3xm3xEyT1%2F4iKEcoEr8d%2FDdCZ0LCoA3g7n9U4q0pupAiEAsHlmsqrjEUk5y7%2BW%2BrN%2BmBeLoFgqrMyVtSNqXGpTy4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGDHCCl8niyRZj%2BpbyrcA2IYI7AeMB0yygPZayh%2FIPUQC3afz8hDuzbw4hh1J%2BeC0L57xJaNxdqrYTzpvjYbFDysMuFRlhGUKXDs2EBipQVV4bRRz4xH19MuErJu46bp5RSS%2FstBaiwI7532fx%2BCVDNW9og8SMlnqlt1KPUrS8z%2FYkFhrmse3r2aTGwLZc7ZHvVkV3mKvj7fN%2FrCidLRhDQiDSb24hobeOea9YZFu%2Bd6I8w07JIA7Dq28Oh4TdlC4lRFYr5mZ5HAhcQVUXuxwLE9gR52C9uCkE%2FSEV2qBLTnA4rlIkM%2Fd%2F9dMprjPhdbiYRKioJgAps1hgbtc8iA9xs1uADNQ%2BC26VWrwzOmC5Vgj8ePVwlnu%2B4cFWUflywTy1kLF6%2F7vH5LUpFdlNOW9KD1BPdPPGWig1zP8i8rUaG5II00xuWB%2FZhNJMEMe1d0no5mltvPVxxxjv60BWrqyTOoe%2FuV%2FuB9svMTYTtG%2BaCU2P8zQrytD7QJcxJcfWpm7nRGgOGtHx4xns2R3QeI3%2BTI5Q4IUFf9fN0BXyCcKipXzbIYDnW2oHn%2BUDuELl90249fbXhztLXYR8KwdswQjGim3%2FqLYFcMiJOkfrARF2uK3dWGAGqMQe0c4r6JIJibpqX%2BNQlvstPm%2F%2FghMJK8jr0GOqUBmK9qBFOtOqpOy3acFUDOWRaqk9gAYlzd43U1ctrgV4Sb%2F6%2BK2jNWhyySJiRGr%2By1EFRpwrTxjPjdX3iU%2BqAzf4Jhl2BP9jFHsjNhXB5gGlxBs%2FIDMFlQquLk6rmnVMQifR9DDcCcO%2BI%2F6T4gL%2BjqlgEqqQCnw86HOg4e%2FPowLRVMrnTitB0ZRz5nKuNGycQzeDGTIKNWJxPp4QGZ5Cq23OJsI9pI&X-Amz-Signature=ff568044cf0c62b63f8989a802dec1073abe870c60b6e24f0d7e701e8fcc6a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCPTDQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH3xm3xEyT1%2F4iKEcoEr8d%2FDdCZ0LCoA3g7n9U4q0pupAiEAsHlmsqrjEUk5y7%2BW%2BrN%2BmBeLoFgqrMyVtSNqXGpTy4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGDHCCl8niyRZj%2BpbyrcA2IYI7AeMB0yygPZayh%2FIPUQC3afz8hDuzbw4hh1J%2BeC0L57xJaNxdqrYTzpvjYbFDysMuFRlhGUKXDs2EBipQVV4bRRz4xH19MuErJu46bp5RSS%2FstBaiwI7532fx%2BCVDNW9og8SMlnqlt1KPUrS8z%2FYkFhrmse3r2aTGwLZc7ZHvVkV3mKvj7fN%2FrCidLRhDQiDSb24hobeOea9YZFu%2Bd6I8w07JIA7Dq28Oh4TdlC4lRFYr5mZ5HAhcQVUXuxwLE9gR52C9uCkE%2FSEV2qBLTnA4rlIkM%2Fd%2F9dMprjPhdbiYRKioJgAps1hgbtc8iA9xs1uADNQ%2BC26VWrwzOmC5Vgj8ePVwlnu%2B4cFWUflywTy1kLF6%2F7vH5LUpFdlNOW9KD1BPdPPGWig1zP8i8rUaG5II00xuWB%2FZhNJMEMe1d0no5mltvPVxxxjv60BWrqyTOoe%2FuV%2FuB9svMTYTtG%2BaCU2P8zQrytD7QJcxJcfWpm7nRGgOGtHx4xns2R3QeI3%2BTI5Q4IUFf9fN0BXyCcKipXzbIYDnW2oHn%2BUDuELl90249fbXhztLXYR8KwdswQjGim3%2FqLYFcMiJOkfrARF2uK3dWGAGqMQe0c4r6JIJibpqX%2BNQlvstPm%2F%2FghMJK8jr0GOqUBmK9qBFOtOqpOy3acFUDOWRaqk9gAYlzd43U1ctrgV4Sb%2F6%2BK2jNWhyySJiRGr%2By1EFRpwrTxjPjdX3iU%2BqAzf4Jhl2BP9jFHsjNhXB5gGlxBs%2FIDMFlQquLk6rmnVMQifR9DDcCcO%2BI%2F6T4gL%2BjqlgEqqQCnw86HOg4e%2FPowLRVMrnTitB0ZRz5nKuNGycQzeDGTIKNWJxPp4QGZ5Cq23OJsI9pI&X-Amz-Signature=98a5a9eb6970a8ca98b410b75f72fcde951f6ccd2e13ffa0dedd44017cfedf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCPTDQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH3xm3xEyT1%2F4iKEcoEr8d%2FDdCZ0LCoA3g7n9U4q0pupAiEAsHlmsqrjEUk5y7%2BW%2BrN%2BmBeLoFgqrMyVtSNqXGpTy4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGDHCCl8niyRZj%2BpbyrcA2IYI7AeMB0yygPZayh%2FIPUQC3afz8hDuzbw4hh1J%2BeC0L57xJaNxdqrYTzpvjYbFDysMuFRlhGUKXDs2EBipQVV4bRRz4xH19MuErJu46bp5RSS%2FstBaiwI7532fx%2BCVDNW9og8SMlnqlt1KPUrS8z%2FYkFhrmse3r2aTGwLZc7ZHvVkV3mKvj7fN%2FrCidLRhDQiDSb24hobeOea9YZFu%2Bd6I8w07JIA7Dq28Oh4TdlC4lRFYr5mZ5HAhcQVUXuxwLE9gR52C9uCkE%2FSEV2qBLTnA4rlIkM%2Fd%2F9dMprjPhdbiYRKioJgAps1hgbtc8iA9xs1uADNQ%2BC26VWrwzOmC5Vgj8ePVwlnu%2B4cFWUflywTy1kLF6%2F7vH5LUpFdlNOW9KD1BPdPPGWig1zP8i8rUaG5II00xuWB%2FZhNJMEMe1d0no5mltvPVxxxjv60BWrqyTOoe%2FuV%2FuB9svMTYTtG%2BaCU2P8zQrytD7QJcxJcfWpm7nRGgOGtHx4xns2R3QeI3%2BTI5Q4IUFf9fN0BXyCcKipXzbIYDnW2oHn%2BUDuELl90249fbXhztLXYR8KwdswQjGim3%2FqLYFcMiJOkfrARF2uK3dWGAGqMQe0c4r6JIJibpqX%2BNQlvstPm%2F%2FghMJK8jr0GOqUBmK9qBFOtOqpOy3acFUDOWRaqk9gAYlzd43U1ctrgV4Sb%2F6%2BK2jNWhyySJiRGr%2By1EFRpwrTxjPjdX3iU%2BqAzf4Jhl2BP9jFHsjNhXB5gGlxBs%2FIDMFlQquLk6rmnVMQifR9DDcCcO%2BI%2F6T4gL%2BjqlgEqqQCnw86HOg4e%2FPowLRVMrnTitB0ZRz5nKuNGycQzeDGTIKNWJxPp4QGZ5Cq23OJsI9pI&X-Amz-Signature=b1d4bd1fdf55c2039cf025361ca0162b972d29499e46c135ac7dbdae48c65e71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCPTDQQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH3xm3xEyT1%2F4iKEcoEr8d%2FDdCZ0LCoA3g7n9U4q0pupAiEAsHlmsqrjEUk5y7%2BW%2BrN%2BmBeLoFgqrMyVtSNqXGpTy4gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGDHCCl8niyRZj%2BpbyrcA2IYI7AeMB0yygPZayh%2FIPUQC3afz8hDuzbw4hh1J%2BeC0L57xJaNxdqrYTzpvjYbFDysMuFRlhGUKXDs2EBipQVV4bRRz4xH19MuErJu46bp5RSS%2FstBaiwI7532fx%2BCVDNW9og8SMlnqlt1KPUrS8z%2FYkFhrmse3r2aTGwLZc7ZHvVkV3mKvj7fN%2FrCidLRhDQiDSb24hobeOea9YZFu%2Bd6I8w07JIA7Dq28Oh4TdlC4lRFYr5mZ5HAhcQVUXuxwLE9gR52C9uCkE%2FSEV2qBLTnA4rlIkM%2Fd%2F9dMprjPhdbiYRKioJgAps1hgbtc8iA9xs1uADNQ%2BC26VWrwzOmC5Vgj8ePVwlnu%2B4cFWUflywTy1kLF6%2F7vH5LUpFdlNOW9KD1BPdPPGWig1zP8i8rUaG5II00xuWB%2FZhNJMEMe1d0no5mltvPVxxxjv60BWrqyTOoe%2FuV%2FuB9svMTYTtG%2BaCU2P8zQrytD7QJcxJcfWpm7nRGgOGtHx4xns2R3QeI3%2BTI5Q4IUFf9fN0BXyCcKipXzbIYDnW2oHn%2BUDuELl90249fbXhztLXYR8KwdswQjGim3%2FqLYFcMiJOkfrARF2uK3dWGAGqMQe0c4r6JIJibpqX%2BNQlvstPm%2F%2FghMJK8jr0GOqUBmK9qBFOtOqpOy3acFUDOWRaqk9gAYlzd43U1ctrgV4Sb%2F6%2BK2jNWhyySJiRGr%2By1EFRpwrTxjPjdX3iU%2BqAzf4Jhl2BP9jFHsjNhXB5gGlxBs%2FIDMFlQquLk6rmnVMQifR9DDcCcO%2BI%2F6T4gL%2BjqlgEqqQCnw86HOg4e%2FPowLRVMrnTitB0ZRz5nKuNGycQzeDGTIKNWJxPp4QGZ5Cq23OJsI9pI&X-Amz-Signature=8d9d105ebe39fb13430df519523e7b7dd37b7c05d6a7f0ce8b8229f814efdcc9&X-Amz-SignedHeaders=host&x-id=GetObject)
