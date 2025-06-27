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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NOC7FL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfUcVsyOrf4VDZQf7Yyg8cK5VlQeHaNrR2VgSBuxQMWAiAtJXCEmkiQKv5woi3Xj0Q4x3wxfPKuY5KWZuYqjmEoFSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMc9DlS%2Fv8VVnTDjRAKtwDB2%2BUdHf%2BmFIlqno1Vjxrdeaa8TMv76%2FKsFHPiab8uEq1%2BmRNQHzjFDGkLv%2BlHlkhpfE8ZLXkDpP6j5xCTscWrQ7E7GrNU3MofBFDL1MVho71LBWlBG6IteM0dW2UKagDBSevITrRKKIHm7lYxCJb%2Be87UwtQC7AYxquB9K1NlKDgFNCQS1WbbnCunmlJ5rEtN6d5idU1SKNKxy0Psft7wCJASv%2FhR69ze9G8N9fkcyjHWfKoNzcyiKIHShu4yye%2BrHxI5t%2FiCbms%2FCwkUP%2F4WF7lKVcQKKejDrXlZtVMGqWRVL0%2Fq9FEF7Sk7H7Rm39RhTZqJZufCuuyRS%2BF8o8bm6cCdCOyRBFoUWForbt5mlN%2BFRQMUwZaLPUzYtd0ilFSaj65LWlYR%2FIJ1KMDMyWyZPEATbTUBU48AHlzC5dgGu8FO4DljmwY49Wa%2FiCXtTlYHxBrXjMDzlVIk7gikgz%2BrSIK4n1mlTv%2Bk%2FPzx8YYZVWhCSGpd8WwW6QhTBW1blTXA0fwpvx6LpCrVe1zsJRs96NaNq853oyLRqqLSVEphEQz1VqB3w6MGozlAB3g5a4qSvsK7UE3Y7JbBCQZ7E0SXve7YC7NGfMtX0QsI6sAJ2ys8I2mxBMW3aGcr1Ywpff6wgY6pgFjiewqu8ylCiIQD9mpvEBXOsSAJ3q522elAkOQ0gh7PS2DmvIr2b2%2F1HRDbBMja%2FUx5uCdiK%2BdJr2s5%2FF3H4x5DgU%2FMU1Tt5r7L1CYtN8grqs%2FNWNOqpaVrJfOEpXHQfsDEtJamKHs%2FVh3YRcTDctjYgrJWjk3%2BrZY%2BB7p%2F%2Bw%2BSOR%2BZXjBuv8EjVgLza8lxRU%2B08OKYcdQzMmwm%2F3iB%2B6FavIrfGap&X-Amz-Signature=b3ce7010ab779ac03757b5a384aca96b39339b602dbeb3198d35e28959f0fbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NOC7FL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfUcVsyOrf4VDZQf7Yyg8cK5VlQeHaNrR2VgSBuxQMWAiAtJXCEmkiQKv5woi3Xj0Q4x3wxfPKuY5KWZuYqjmEoFSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMc9DlS%2Fv8VVnTDjRAKtwDB2%2BUdHf%2BmFIlqno1Vjxrdeaa8TMv76%2FKsFHPiab8uEq1%2BmRNQHzjFDGkLv%2BlHlkhpfE8ZLXkDpP6j5xCTscWrQ7E7GrNU3MofBFDL1MVho71LBWlBG6IteM0dW2UKagDBSevITrRKKIHm7lYxCJb%2Be87UwtQC7AYxquB9K1NlKDgFNCQS1WbbnCunmlJ5rEtN6d5idU1SKNKxy0Psft7wCJASv%2FhR69ze9G8N9fkcyjHWfKoNzcyiKIHShu4yye%2BrHxI5t%2FiCbms%2FCwkUP%2F4WF7lKVcQKKejDrXlZtVMGqWRVL0%2Fq9FEF7Sk7H7Rm39RhTZqJZufCuuyRS%2BF8o8bm6cCdCOyRBFoUWForbt5mlN%2BFRQMUwZaLPUzYtd0ilFSaj65LWlYR%2FIJ1KMDMyWyZPEATbTUBU48AHlzC5dgGu8FO4DljmwY49Wa%2FiCXtTlYHxBrXjMDzlVIk7gikgz%2BrSIK4n1mlTv%2Bk%2FPzx8YYZVWhCSGpd8WwW6QhTBW1blTXA0fwpvx6LpCrVe1zsJRs96NaNq853oyLRqqLSVEphEQz1VqB3w6MGozlAB3g5a4qSvsK7UE3Y7JbBCQZ7E0SXve7YC7NGfMtX0QsI6sAJ2ys8I2mxBMW3aGcr1Ywpff6wgY6pgFjiewqu8ylCiIQD9mpvEBXOsSAJ3q522elAkOQ0gh7PS2DmvIr2b2%2F1HRDbBMja%2FUx5uCdiK%2BdJr2s5%2FF3H4x5DgU%2FMU1Tt5r7L1CYtN8grqs%2FNWNOqpaVrJfOEpXHQfsDEtJamKHs%2FVh3YRcTDctjYgrJWjk3%2BrZY%2BB7p%2F%2Bw%2BSOR%2BZXjBuv8EjVgLza8lxRU%2B08OKYcdQzMmwm%2F3iB%2B6FavIrfGap&X-Amz-Signature=850af5c81fb30657afd12ed66dccccb3d7c8f6d99277d1536f9a2dfdadc2a6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NOC7FL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfUcVsyOrf4VDZQf7Yyg8cK5VlQeHaNrR2VgSBuxQMWAiAtJXCEmkiQKv5woi3Xj0Q4x3wxfPKuY5KWZuYqjmEoFSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMc9DlS%2Fv8VVnTDjRAKtwDB2%2BUdHf%2BmFIlqno1Vjxrdeaa8TMv76%2FKsFHPiab8uEq1%2BmRNQHzjFDGkLv%2BlHlkhpfE8ZLXkDpP6j5xCTscWrQ7E7GrNU3MofBFDL1MVho71LBWlBG6IteM0dW2UKagDBSevITrRKKIHm7lYxCJb%2Be87UwtQC7AYxquB9K1NlKDgFNCQS1WbbnCunmlJ5rEtN6d5idU1SKNKxy0Psft7wCJASv%2FhR69ze9G8N9fkcyjHWfKoNzcyiKIHShu4yye%2BrHxI5t%2FiCbms%2FCwkUP%2F4WF7lKVcQKKejDrXlZtVMGqWRVL0%2Fq9FEF7Sk7H7Rm39RhTZqJZufCuuyRS%2BF8o8bm6cCdCOyRBFoUWForbt5mlN%2BFRQMUwZaLPUzYtd0ilFSaj65LWlYR%2FIJ1KMDMyWyZPEATbTUBU48AHlzC5dgGu8FO4DljmwY49Wa%2FiCXtTlYHxBrXjMDzlVIk7gikgz%2BrSIK4n1mlTv%2Bk%2FPzx8YYZVWhCSGpd8WwW6QhTBW1blTXA0fwpvx6LpCrVe1zsJRs96NaNq853oyLRqqLSVEphEQz1VqB3w6MGozlAB3g5a4qSvsK7UE3Y7JbBCQZ7E0SXve7YC7NGfMtX0QsI6sAJ2ys8I2mxBMW3aGcr1Ywpff6wgY6pgFjiewqu8ylCiIQD9mpvEBXOsSAJ3q522elAkOQ0gh7PS2DmvIr2b2%2F1HRDbBMja%2FUx5uCdiK%2BdJr2s5%2FF3H4x5DgU%2FMU1Tt5r7L1CYtN8grqs%2FNWNOqpaVrJfOEpXHQfsDEtJamKHs%2FVh3YRcTDctjYgrJWjk3%2BrZY%2BB7p%2F%2Bw%2BSOR%2BZXjBuv8EjVgLza8lxRU%2B08OKYcdQzMmwm%2F3iB%2B6FavIrfGap&X-Amz-Signature=2d10a7587278a8a77c8f3566458676f6c5271d8cd9f678f697ff70cf40bc1257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NOC7FL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfUcVsyOrf4VDZQf7Yyg8cK5VlQeHaNrR2VgSBuxQMWAiAtJXCEmkiQKv5woi3Xj0Q4x3wxfPKuY5KWZuYqjmEoFSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMc9DlS%2Fv8VVnTDjRAKtwDB2%2BUdHf%2BmFIlqno1Vjxrdeaa8TMv76%2FKsFHPiab8uEq1%2BmRNQHzjFDGkLv%2BlHlkhpfE8ZLXkDpP6j5xCTscWrQ7E7GrNU3MofBFDL1MVho71LBWlBG6IteM0dW2UKagDBSevITrRKKIHm7lYxCJb%2Be87UwtQC7AYxquB9K1NlKDgFNCQS1WbbnCunmlJ5rEtN6d5idU1SKNKxy0Psft7wCJASv%2FhR69ze9G8N9fkcyjHWfKoNzcyiKIHShu4yye%2BrHxI5t%2FiCbms%2FCwkUP%2F4WF7lKVcQKKejDrXlZtVMGqWRVL0%2Fq9FEF7Sk7H7Rm39RhTZqJZufCuuyRS%2BF8o8bm6cCdCOyRBFoUWForbt5mlN%2BFRQMUwZaLPUzYtd0ilFSaj65LWlYR%2FIJ1KMDMyWyZPEATbTUBU48AHlzC5dgGu8FO4DljmwY49Wa%2FiCXtTlYHxBrXjMDzlVIk7gikgz%2BrSIK4n1mlTv%2Bk%2FPzx8YYZVWhCSGpd8WwW6QhTBW1blTXA0fwpvx6LpCrVe1zsJRs96NaNq853oyLRqqLSVEphEQz1VqB3w6MGozlAB3g5a4qSvsK7UE3Y7JbBCQZ7E0SXve7YC7NGfMtX0QsI6sAJ2ys8I2mxBMW3aGcr1Ywpff6wgY6pgFjiewqu8ylCiIQD9mpvEBXOsSAJ3q522elAkOQ0gh7PS2DmvIr2b2%2F1HRDbBMja%2FUx5uCdiK%2BdJr2s5%2FF3H4x5DgU%2FMU1Tt5r7L1CYtN8grqs%2FNWNOqpaVrJfOEpXHQfsDEtJamKHs%2FVh3YRcTDctjYgrJWjk3%2BrZY%2BB7p%2F%2Bw%2BSOR%2BZXjBuv8EjVgLza8lxRU%2B08OKYcdQzMmwm%2F3iB%2B6FavIrfGap&X-Amz-Signature=40fe893b4107f55c496db70183f9a42bb1abb6e3f5c75d0569e8ebaf01949336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NOC7FL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfUcVsyOrf4VDZQf7Yyg8cK5VlQeHaNrR2VgSBuxQMWAiAtJXCEmkiQKv5woi3Xj0Q4x3wxfPKuY5KWZuYqjmEoFSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMc9DlS%2Fv8VVnTDjRAKtwDB2%2BUdHf%2BmFIlqno1Vjxrdeaa8TMv76%2FKsFHPiab8uEq1%2BmRNQHzjFDGkLv%2BlHlkhpfE8ZLXkDpP6j5xCTscWrQ7E7GrNU3MofBFDL1MVho71LBWlBG6IteM0dW2UKagDBSevITrRKKIHm7lYxCJb%2Be87UwtQC7AYxquB9K1NlKDgFNCQS1WbbnCunmlJ5rEtN6d5idU1SKNKxy0Psft7wCJASv%2FhR69ze9G8N9fkcyjHWfKoNzcyiKIHShu4yye%2BrHxI5t%2FiCbms%2FCwkUP%2F4WF7lKVcQKKejDrXlZtVMGqWRVL0%2Fq9FEF7Sk7H7Rm39RhTZqJZufCuuyRS%2BF8o8bm6cCdCOyRBFoUWForbt5mlN%2BFRQMUwZaLPUzYtd0ilFSaj65LWlYR%2FIJ1KMDMyWyZPEATbTUBU48AHlzC5dgGu8FO4DljmwY49Wa%2FiCXtTlYHxBrXjMDzlVIk7gikgz%2BrSIK4n1mlTv%2Bk%2FPzx8YYZVWhCSGpd8WwW6QhTBW1blTXA0fwpvx6LpCrVe1zsJRs96NaNq853oyLRqqLSVEphEQz1VqB3w6MGozlAB3g5a4qSvsK7UE3Y7JbBCQZ7E0SXve7YC7NGfMtX0QsI6sAJ2ys8I2mxBMW3aGcr1Ywpff6wgY6pgFjiewqu8ylCiIQD9mpvEBXOsSAJ3q522elAkOQ0gh7PS2DmvIr2b2%2F1HRDbBMja%2FUx5uCdiK%2BdJr2s5%2FF3H4x5DgU%2FMU1Tt5r7L1CYtN8grqs%2FNWNOqpaVrJfOEpXHQfsDEtJamKHs%2FVh3YRcTDctjYgrJWjk3%2BrZY%2BB7p%2F%2Bw%2BSOR%2BZXjBuv8EjVgLza8lxRU%2B08OKYcdQzMmwm%2F3iB%2B6FavIrfGap&X-Amz-Signature=387a4d75ee2139961388197e22bfc150556a6307bd37ca16d0e4cd7c9176fc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NOC7FL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfUcVsyOrf4VDZQf7Yyg8cK5VlQeHaNrR2VgSBuxQMWAiAtJXCEmkiQKv5woi3Xj0Q4x3wxfPKuY5KWZuYqjmEoFSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMc9DlS%2Fv8VVnTDjRAKtwDB2%2BUdHf%2BmFIlqno1Vjxrdeaa8TMv76%2FKsFHPiab8uEq1%2BmRNQHzjFDGkLv%2BlHlkhpfE8ZLXkDpP6j5xCTscWrQ7E7GrNU3MofBFDL1MVho71LBWlBG6IteM0dW2UKagDBSevITrRKKIHm7lYxCJb%2Be87UwtQC7AYxquB9K1NlKDgFNCQS1WbbnCunmlJ5rEtN6d5idU1SKNKxy0Psft7wCJASv%2FhR69ze9G8N9fkcyjHWfKoNzcyiKIHShu4yye%2BrHxI5t%2FiCbms%2FCwkUP%2F4WF7lKVcQKKejDrXlZtVMGqWRVL0%2Fq9FEF7Sk7H7Rm39RhTZqJZufCuuyRS%2BF8o8bm6cCdCOyRBFoUWForbt5mlN%2BFRQMUwZaLPUzYtd0ilFSaj65LWlYR%2FIJ1KMDMyWyZPEATbTUBU48AHlzC5dgGu8FO4DljmwY49Wa%2FiCXtTlYHxBrXjMDzlVIk7gikgz%2BrSIK4n1mlTv%2Bk%2FPzx8YYZVWhCSGpd8WwW6QhTBW1blTXA0fwpvx6LpCrVe1zsJRs96NaNq853oyLRqqLSVEphEQz1VqB3w6MGozlAB3g5a4qSvsK7UE3Y7JbBCQZ7E0SXve7YC7NGfMtX0QsI6sAJ2ys8I2mxBMW3aGcr1Ywpff6wgY6pgFjiewqu8ylCiIQD9mpvEBXOsSAJ3q522elAkOQ0gh7PS2DmvIr2b2%2F1HRDbBMja%2FUx5uCdiK%2BdJr2s5%2FF3H4x5DgU%2FMU1Tt5r7L1CYtN8grqs%2FNWNOqpaVrJfOEpXHQfsDEtJamKHs%2FVh3YRcTDctjYgrJWjk3%2BrZY%2BB7p%2F%2Bw%2BSOR%2BZXjBuv8EjVgLza8lxRU%2B08OKYcdQzMmwm%2F3iB%2B6FavIrfGap&X-Amz-Signature=7b2cf13b3e8f523f5fb9cf16872a876c25ef8f4536c02c6bd7b41163e6ad4240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
