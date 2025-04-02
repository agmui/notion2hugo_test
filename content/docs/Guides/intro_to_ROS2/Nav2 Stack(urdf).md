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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJTMXHN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyJK0ZPlTrN3aX7gy3V0YwthWRnNdCLlWMeGubAx8CkQIhAJMW1nwcZ2EGHuOVyLoQIdGPR%2Fe09%2BMHmz%2B6Yzm5vQhMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOQBWwHaqcrb7t7gq3APdDb29TTdmvNBPiOHoB5guEra%2B7XZXfwkTcTzHiByK5Zo7HAMm%2BA1SjTvyuAkM5KaCSzBgOyb%2Fx0P%2Fg8JmxwAxCi6hYOTyRKTKtHW14R6Z4PHpQZMkeHNVQ1FaoNah2sCBS76crVds%2Fy3b7sA6OJDHtQcevI3Xf1spmeFOsARV1BJGno1QNVQFcRguuI6ruk3xg6e3KjaWo4h3I05pdt%2BQaAIXOZZI%2BvthfSoKsd6lxJigRDTOdvUqSWQpm1IIVB9trspn7aokmwIsTSYbjJgW6cuLCmZlwvwxUgt03tjB%2BLg3axBwIRVjgTw0FENfPXMoiwQi2DINk8fIfMvS3nIHMiSyXaCwje%2FvM94hQVybdfdgofgQiGcxZX45a7HtxduhU87OyoA8f5eR25zESD3ujFv%2BpSjCXBTytBiCg1OXtu%2FKCY8bxFse%2BCEjj4Gvfy2cDacq7%2B3GcpI12dGsoP%2B0yHBLIQ%2FcwbPkrFGg78FyHrZWXK6x13vUum7xDYQUW5jFW4MnXoUDL7Xf4giZFBvqaBZqOhuKY75Kc6r2zwNdVT9gVBx33To2poPR6AVg%2FzEjRJed6aNS%2B4H8jVFFq1aGjjqZe%2BNuHt6Vqp7UpLulrIpNh9pi%2BEFsq5X5izDfqLG%2FBjqkAcaswEV%2B1VbB0qcdhXEvAIhmS%2B%2B0DCu2%2BrZsWELjO%2F67Z%2BgUxCRNtM6JMg8L6DQptD93jus5uJODYK%2F3nQ0dfHdkXS83SRa%2BtTKLpexjNH1oJgBocX2R%2BFRSfYhfF2zigaCM1pGTaemU8PnKHFaWGkKkd8Pb01EyCvnvJP822G7Cx7WsQ%2BKu93a16ezYkASftkeiydwaTmUF73xMwgrvX8As6bW0&X-Amz-Signature=8ba79f76b6dd37fdf743959a3532bbad37572da86d8cb8e30937e85f9d57dd34&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJTMXHN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyJK0ZPlTrN3aX7gy3V0YwthWRnNdCLlWMeGubAx8CkQIhAJMW1nwcZ2EGHuOVyLoQIdGPR%2Fe09%2BMHmz%2B6Yzm5vQhMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOQBWwHaqcrb7t7gq3APdDb29TTdmvNBPiOHoB5guEra%2B7XZXfwkTcTzHiByK5Zo7HAMm%2BA1SjTvyuAkM5KaCSzBgOyb%2Fx0P%2Fg8JmxwAxCi6hYOTyRKTKtHW14R6Z4PHpQZMkeHNVQ1FaoNah2sCBS76crVds%2Fy3b7sA6OJDHtQcevI3Xf1spmeFOsARV1BJGno1QNVQFcRguuI6ruk3xg6e3KjaWo4h3I05pdt%2BQaAIXOZZI%2BvthfSoKsd6lxJigRDTOdvUqSWQpm1IIVB9trspn7aokmwIsTSYbjJgW6cuLCmZlwvwxUgt03tjB%2BLg3axBwIRVjgTw0FENfPXMoiwQi2DINk8fIfMvS3nIHMiSyXaCwje%2FvM94hQVybdfdgofgQiGcxZX45a7HtxduhU87OyoA8f5eR25zESD3ujFv%2BpSjCXBTytBiCg1OXtu%2FKCY8bxFse%2BCEjj4Gvfy2cDacq7%2B3GcpI12dGsoP%2B0yHBLIQ%2FcwbPkrFGg78FyHrZWXK6x13vUum7xDYQUW5jFW4MnXoUDL7Xf4giZFBvqaBZqOhuKY75Kc6r2zwNdVT9gVBx33To2poPR6AVg%2FzEjRJed6aNS%2B4H8jVFFq1aGjjqZe%2BNuHt6Vqp7UpLulrIpNh9pi%2BEFsq5X5izDfqLG%2FBjqkAcaswEV%2B1VbB0qcdhXEvAIhmS%2B%2B0DCu2%2BrZsWELjO%2F67Z%2BgUxCRNtM6JMg8L6DQptD93jus5uJODYK%2F3nQ0dfHdkXS83SRa%2BtTKLpexjNH1oJgBocX2R%2BFRSfYhfF2zigaCM1pGTaemU8PnKHFaWGkKkd8Pb01EyCvnvJP822G7Cx7WsQ%2BKu93a16ezYkASftkeiydwaTmUF73xMwgrvX8As6bW0&X-Amz-Signature=01074c68f62054276504492fd7299211d1e45fb54579a7029c83676954b4b5db&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJTMXHN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyJK0ZPlTrN3aX7gy3V0YwthWRnNdCLlWMeGubAx8CkQIhAJMW1nwcZ2EGHuOVyLoQIdGPR%2Fe09%2BMHmz%2B6Yzm5vQhMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOQBWwHaqcrb7t7gq3APdDb29TTdmvNBPiOHoB5guEra%2B7XZXfwkTcTzHiByK5Zo7HAMm%2BA1SjTvyuAkM5KaCSzBgOyb%2Fx0P%2Fg8JmxwAxCi6hYOTyRKTKtHW14R6Z4PHpQZMkeHNVQ1FaoNah2sCBS76crVds%2Fy3b7sA6OJDHtQcevI3Xf1spmeFOsARV1BJGno1QNVQFcRguuI6ruk3xg6e3KjaWo4h3I05pdt%2BQaAIXOZZI%2BvthfSoKsd6lxJigRDTOdvUqSWQpm1IIVB9trspn7aokmwIsTSYbjJgW6cuLCmZlwvwxUgt03tjB%2BLg3axBwIRVjgTw0FENfPXMoiwQi2DINk8fIfMvS3nIHMiSyXaCwje%2FvM94hQVybdfdgofgQiGcxZX45a7HtxduhU87OyoA8f5eR25zESD3ujFv%2BpSjCXBTytBiCg1OXtu%2FKCY8bxFse%2BCEjj4Gvfy2cDacq7%2B3GcpI12dGsoP%2B0yHBLIQ%2FcwbPkrFGg78FyHrZWXK6x13vUum7xDYQUW5jFW4MnXoUDL7Xf4giZFBvqaBZqOhuKY75Kc6r2zwNdVT9gVBx33To2poPR6AVg%2FzEjRJed6aNS%2B4H8jVFFq1aGjjqZe%2BNuHt6Vqp7UpLulrIpNh9pi%2BEFsq5X5izDfqLG%2FBjqkAcaswEV%2B1VbB0qcdhXEvAIhmS%2B%2B0DCu2%2BrZsWELjO%2F67Z%2BgUxCRNtM6JMg8L6DQptD93jus5uJODYK%2F3nQ0dfHdkXS83SRa%2BtTKLpexjNH1oJgBocX2R%2BFRSfYhfF2zigaCM1pGTaemU8PnKHFaWGkKkd8Pb01EyCvnvJP822G7Cx7WsQ%2BKu93a16ezYkASftkeiydwaTmUF73xMwgrvX8As6bW0&X-Amz-Signature=98500c0b7eac750356551aa3aa3bb25602d13554af6a2dd5655bf3c97a34a3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJTMXHN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyJK0ZPlTrN3aX7gy3V0YwthWRnNdCLlWMeGubAx8CkQIhAJMW1nwcZ2EGHuOVyLoQIdGPR%2Fe09%2BMHmz%2B6Yzm5vQhMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOQBWwHaqcrb7t7gq3APdDb29TTdmvNBPiOHoB5guEra%2B7XZXfwkTcTzHiByK5Zo7HAMm%2BA1SjTvyuAkM5KaCSzBgOyb%2Fx0P%2Fg8JmxwAxCi6hYOTyRKTKtHW14R6Z4PHpQZMkeHNVQ1FaoNah2sCBS76crVds%2Fy3b7sA6OJDHtQcevI3Xf1spmeFOsARV1BJGno1QNVQFcRguuI6ruk3xg6e3KjaWo4h3I05pdt%2BQaAIXOZZI%2BvthfSoKsd6lxJigRDTOdvUqSWQpm1IIVB9trspn7aokmwIsTSYbjJgW6cuLCmZlwvwxUgt03tjB%2BLg3axBwIRVjgTw0FENfPXMoiwQi2DINk8fIfMvS3nIHMiSyXaCwje%2FvM94hQVybdfdgofgQiGcxZX45a7HtxduhU87OyoA8f5eR25zESD3ujFv%2BpSjCXBTytBiCg1OXtu%2FKCY8bxFse%2BCEjj4Gvfy2cDacq7%2B3GcpI12dGsoP%2B0yHBLIQ%2FcwbPkrFGg78FyHrZWXK6x13vUum7xDYQUW5jFW4MnXoUDL7Xf4giZFBvqaBZqOhuKY75Kc6r2zwNdVT9gVBx33To2poPR6AVg%2FzEjRJed6aNS%2B4H8jVFFq1aGjjqZe%2BNuHt6Vqp7UpLulrIpNh9pi%2BEFsq5X5izDfqLG%2FBjqkAcaswEV%2B1VbB0qcdhXEvAIhmS%2B%2B0DCu2%2BrZsWELjO%2F67Z%2BgUxCRNtM6JMg8L6DQptD93jus5uJODYK%2F3nQ0dfHdkXS83SRa%2BtTKLpexjNH1oJgBocX2R%2BFRSfYhfF2zigaCM1pGTaemU8PnKHFaWGkKkd8Pb01EyCvnvJP822G7Cx7WsQ%2BKu93a16ezYkASftkeiydwaTmUF73xMwgrvX8As6bW0&X-Amz-Signature=5bd2b84e22f7f241c30a97884ceeb3a17ff798483b0a74ddcddf9390d6ff5148&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJTMXHN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyJK0ZPlTrN3aX7gy3V0YwthWRnNdCLlWMeGubAx8CkQIhAJMW1nwcZ2EGHuOVyLoQIdGPR%2Fe09%2BMHmz%2B6Yzm5vQhMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOQBWwHaqcrb7t7gq3APdDb29TTdmvNBPiOHoB5guEra%2B7XZXfwkTcTzHiByK5Zo7HAMm%2BA1SjTvyuAkM5KaCSzBgOyb%2Fx0P%2Fg8JmxwAxCi6hYOTyRKTKtHW14R6Z4PHpQZMkeHNVQ1FaoNah2sCBS76crVds%2Fy3b7sA6OJDHtQcevI3Xf1spmeFOsARV1BJGno1QNVQFcRguuI6ruk3xg6e3KjaWo4h3I05pdt%2BQaAIXOZZI%2BvthfSoKsd6lxJigRDTOdvUqSWQpm1IIVB9trspn7aokmwIsTSYbjJgW6cuLCmZlwvwxUgt03tjB%2BLg3axBwIRVjgTw0FENfPXMoiwQi2DINk8fIfMvS3nIHMiSyXaCwje%2FvM94hQVybdfdgofgQiGcxZX45a7HtxduhU87OyoA8f5eR25zESD3ujFv%2BpSjCXBTytBiCg1OXtu%2FKCY8bxFse%2BCEjj4Gvfy2cDacq7%2B3GcpI12dGsoP%2B0yHBLIQ%2FcwbPkrFGg78FyHrZWXK6x13vUum7xDYQUW5jFW4MnXoUDL7Xf4giZFBvqaBZqOhuKY75Kc6r2zwNdVT9gVBx33To2poPR6AVg%2FzEjRJed6aNS%2B4H8jVFFq1aGjjqZe%2BNuHt6Vqp7UpLulrIpNh9pi%2BEFsq5X5izDfqLG%2FBjqkAcaswEV%2B1VbB0qcdhXEvAIhmS%2B%2B0DCu2%2BrZsWELjO%2F67Z%2BgUxCRNtM6JMg8L6DQptD93jus5uJODYK%2F3nQ0dfHdkXS83SRa%2BtTKLpexjNH1oJgBocX2R%2BFRSfYhfF2zigaCM1pGTaemU8PnKHFaWGkKkd8Pb01EyCvnvJP822G7Cx7WsQ%2BKu93a16ezYkASftkeiydwaTmUF73xMwgrvX8As6bW0&X-Amz-Signature=641ffe756179f873376ac389e4850683f7932050000cfe2122e3a36211a2456c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJTMXHN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCyJK0ZPlTrN3aX7gy3V0YwthWRnNdCLlWMeGubAx8CkQIhAJMW1nwcZ2EGHuOVyLoQIdGPR%2Fe09%2BMHmz%2B6Yzm5vQhMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaOQBWwHaqcrb7t7gq3APdDb29TTdmvNBPiOHoB5guEra%2B7XZXfwkTcTzHiByK5Zo7HAMm%2BA1SjTvyuAkM5KaCSzBgOyb%2Fx0P%2Fg8JmxwAxCi6hYOTyRKTKtHW14R6Z4PHpQZMkeHNVQ1FaoNah2sCBS76crVds%2Fy3b7sA6OJDHtQcevI3Xf1spmeFOsARV1BJGno1QNVQFcRguuI6ruk3xg6e3KjaWo4h3I05pdt%2BQaAIXOZZI%2BvthfSoKsd6lxJigRDTOdvUqSWQpm1IIVB9trspn7aokmwIsTSYbjJgW6cuLCmZlwvwxUgt03tjB%2BLg3axBwIRVjgTw0FENfPXMoiwQi2DINk8fIfMvS3nIHMiSyXaCwje%2FvM94hQVybdfdgofgQiGcxZX45a7HtxduhU87OyoA8f5eR25zESD3ujFv%2BpSjCXBTytBiCg1OXtu%2FKCY8bxFse%2BCEjj4Gvfy2cDacq7%2B3GcpI12dGsoP%2B0yHBLIQ%2FcwbPkrFGg78FyHrZWXK6x13vUum7xDYQUW5jFW4MnXoUDL7Xf4giZFBvqaBZqOhuKY75Kc6r2zwNdVT9gVBx33To2poPR6AVg%2FzEjRJed6aNS%2B4H8jVFFq1aGjjqZe%2BNuHt6Vqp7UpLulrIpNh9pi%2BEFsq5X5izDfqLG%2FBjqkAcaswEV%2B1VbB0qcdhXEvAIhmS%2B%2B0DCu2%2BrZsWELjO%2F67Z%2BgUxCRNtM6JMg8L6DQptD93jus5uJODYK%2F3nQ0dfHdkXS83SRa%2BtTKLpexjNH1oJgBocX2R%2BFRSfYhfF2zigaCM1pGTaemU8PnKHFaWGkKkd8Pb01EyCvnvJP822G7Cx7WsQ%2BKu93a16ezYkASftkeiydwaTmUF73xMwgrvX8As6bW0&X-Amz-Signature=2cbb6919e62d893ff86572b11cc46bdcdb7f973de8396eba753194958d7fa125&X-Amz-SignedHeaders=host&x-id=GetObject)
