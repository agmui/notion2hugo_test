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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXOVRWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4VzngouJ7l1MNC8IWdNF1MiEV1TfrT%2FRDSqPAofzzAiBOwcCxaxyTXjzUT99Redttd3VfIhrVqKS0dW1rLC2QqCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqtWj5yOVLIWZYKVKtwDXCZ%2BoPhNivxkIaiHshP9SEQOuVAGL%2B%2BMzCGivRQKgQ6zcGt1BPh5ePEiUQPyuCQgRdR4nxQsUSnblB4CvbeDGuDPFYqJG%2Ff%2FdTDBAu0rbRBiFT7OXrZUctqXWoFon%2B3FiMTWs3KmCo2HZmrgCKb8bLIDma9JbDz2DxcmdPwxxLcEKVfUi7cGTwsuGnV5xcpqtbSQQD19K00QUieRdBcKn5rjRDp0LkcqnKmXANvpXG4dhGe8z8WAERBtxeEr89nNl%2B4Hx3tyEcdpYKsx4MrJwZcuMr41Z78G0BKOZuIvHr6MoB39KTifQ6hNUvuSnyIjob2TJmerL3SF7zLzRP2kJfXgyYtbNvqYPC5ZKFuEu8aGGh2yJTEdxSRT%2B3OClVGxtcS%2B5ir34Zl1iZzOrV47PmPMWfD%2Bs%2Bi1kIhyCSlynoz4HFq97ZJZQ%2BHsfSW%2BMfDG6ZWvQR%2F0OJ%2FQmVLlM0vFaXM%2BY7Ig0iTyjDPxhQkEBd9rgGADIPJtkh6QM3p%2FBv5uKJXpPOuzLOcKF%2BUl3tUMVKeO6dBLYBQSCy3ntakaUozH0kdM9l05uEk%2FEzmwS33LjwdhtWWpN00X%2B83AHivZ%2BZrVFWTL2rvj61zkT5MJxyQeZITyrKUwAJn%2Fcucw%2FofdwgY6pgHljswqjYKaD%2FGNBWphT5DGti8YjYAthyFRltFPM9LNnombafa5ny%2Fi6ZqEDDr0CLRQyCG7SKHJorWiNRXgcOAUNjf5X9S5k2VGYb8LZYq1L%2BmNva1L4wHPmilB7QozJvjm2ueaCY4c3xZSbu%2BUmERCLPS4lARnmxixMSPV9M2tRZ58MXakQdambOlKm3%2FrQdCCUPcsDagK6qFzDEC%2Bcf7hZ%2FVJbM4R&X-Amz-Signature=28ab9537fd1363ad99b5ebee543a47d79a7decf95ad47af731ad3fe842b11b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXOVRWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4VzngouJ7l1MNC8IWdNF1MiEV1TfrT%2FRDSqPAofzzAiBOwcCxaxyTXjzUT99Redttd3VfIhrVqKS0dW1rLC2QqCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqtWj5yOVLIWZYKVKtwDXCZ%2BoPhNivxkIaiHshP9SEQOuVAGL%2B%2BMzCGivRQKgQ6zcGt1BPh5ePEiUQPyuCQgRdR4nxQsUSnblB4CvbeDGuDPFYqJG%2Ff%2FdTDBAu0rbRBiFT7OXrZUctqXWoFon%2B3FiMTWs3KmCo2HZmrgCKb8bLIDma9JbDz2DxcmdPwxxLcEKVfUi7cGTwsuGnV5xcpqtbSQQD19K00QUieRdBcKn5rjRDp0LkcqnKmXANvpXG4dhGe8z8WAERBtxeEr89nNl%2B4Hx3tyEcdpYKsx4MrJwZcuMr41Z78G0BKOZuIvHr6MoB39KTifQ6hNUvuSnyIjob2TJmerL3SF7zLzRP2kJfXgyYtbNvqYPC5ZKFuEu8aGGh2yJTEdxSRT%2B3OClVGxtcS%2B5ir34Zl1iZzOrV47PmPMWfD%2Bs%2Bi1kIhyCSlynoz4HFq97ZJZQ%2BHsfSW%2BMfDG6ZWvQR%2F0OJ%2FQmVLlM0vFaXM%2BY7Ig0iTyjDPxhQkEBd9rgGADIPJtkh6QM3p%2FBv5uKJXpPOuzLOcKF%2BUl3tUMVKeO6dBLYBQSCy3ntakaUozH0kdM9l05uEk%2FEzmwS33LjwdhtWWpN00X%2B83AHivZ%2BZrVFWTL2rvj61zkT5MJxyQeZITyrKUwAJn%2Fcucw%2FofdwgY6pgHljswqjYKaD%2FGNBWphT5DGti8YjYAthyFRltFPM9LNnombafa5ny%2Fi6ZqEDDr0CLRQyCG7SKHJorWiNRXgcOAUNjf5X9S5k2VGYb8LZYq1L%2BmNva1L4wHPmilB7QozJvjm2ueaCY4c3xZSbu%2BUmERCLPS4lARnmxixMSPV9M2tRZ58MXakQdambOlKm3%2FrQdCCUPcsDagK6qFzDEC%2Bcf7hZ%2FVJbM4R&X-Amz-Signature=aec311c07015391cb302c087adf6c29dc5e8cd6461ef150e9fd37aca0898f258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXOVRWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4VzngouJ7l1MNC8IWdNF1MiEV1TfrT%2FRDSqPAofzzAiBOwcCxaxyTXjzUT99Redttd3VfIhrVqKS0dW1rLC2QqCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqtWj5yOVLIWZYKVKtwDXCZ%2BoPhNivxkIaiHshP9SEQOuVAGL%2B%2BMzCGivRQKgQ6zcGt1BPh5ePEiUQPyuCQgRdR4nxQsUSnblB4CvbeDGuDPFYqJG%2Ff%2FdTDBAu0rbRBiFT7OXrZUctqXWoFon%2B3FiMTWs3KmCo2HZmrgCKb8bLIDma9JbDz2DxcmdPwxxLcEKVfUi7cGTwsuGnV5xcpqtbSQQD19K00QUieRdBcKn5rjRDp0LkcqnKmXANvpXG4dhGe8z8WAERBtxeEr89nNl%2B4Hx3tyEcdpYKsx4MrJwZcuMr41Z78G0BKOZuIvHr6MoB39KTifQ6hNUvuSnyIjob2TJmerL3SF7zLzRP2kJfXgyYtbNvqYPC5ZKFuEu8aGGh2yJTEdxSRT%2B3OClVGxtcS%2B5ir34Zl1iZzOrV47PmPMWfD%2Bs%2Bi1kIhyCSlynoz4HFq97ZJZQ%2BHsfSW%2BMfDG6ZWvQR%2F0OJ%2FQmVLlM0vFaXM%2BY7Ig0iTyjDPxhQkEBd9rgGADIPJtkh6QM3p%2FBv5uKJXpPOuzLOcKF%2BUl3tUMVKeO6dBLYBQSCy3ntakaUozH0kdM9l05uEk%2FEzmwS33LjwdhtWWpN00X%2B83AHivZ%2BZrVFWTL2rvj61zkT5MJxyQeZITyrKUwAJn%2Fcucw%2FofdwgY6pgHljswqjYKaD%2FGNBWphT5DGti8YjYAthyFRltFPM9LNnombafa5ny%2Fi6ZqEDDr0CLRQyCG7SKHJorWiNRXgcOAUNjf5X9S5k2VGYb8LZYq1L%2BmNva1L4wHPmilB7QozJvjm2ueaCY4c3xZSbu%2BUmERCLPS4lARnmxixMSPV9M2tRZ58MXakQdambOlKm3%2FrQdCCUPcsDagK6qFzDEC%2Bcf7hZ%2FVJbM4R&X-Amz-Signature=1bc9f59fc34b5585646be81306ebaba408b4433848119500307a5db280a6d072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXOVRWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4VzngouJ7l1MNC8IWdNF1MiEV1TfrT%2FRDSqPAofzzAiBOwcCxaxyTXjzUT99Redttd3VfIhrVqKS0dW1rLC2QqCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqtWj5yOVLIWZYKVKtwDXCZ%2BoPhNivxkIaiHshP9SEQOuVAGL%2B%2BMzCGivRQKgQ6zcGt1BPh5ePEiUQPyuCQgRdR4nxQsUSnblB4CvbeDGuDPFYqJG%2Ff%2FdTDBAu0rbRBiFT7OXrZUctqXWoFon%2B3FiMTWs3KmCo2HZmrgCKb8bLIDma9JbDz2DxcmdPwxxLcEKVfUi7cGTwsuGnV5xcpqtbSQQD19K00QUieRdBcKn5rjRDp0LkcqnKmXANvpXG4dhGe8z8WAERBtxeEr89nNl%2B4Hx3tyEcdpYKsx4MrJwZcuMr41Z78G0BKOZuIvHr6MoB39KTifQ6hNUvuSnyIjob2TJmerL3SF7zLzRP2kJfXgyYtbNvqYPC5ZKFuEu8aGGh2yJTEdxSRT%2B3OClVGxtcS%2B5ir34Zl1iZzOrV47PmPMWfD%2Bs%2Bi1kIhyCSlynoz4HFq97ZJZQ%2BHsfSW%2BMfDG6ZWvQR%2F0OJ%2FQmVLlM0vFaXM%2BY7Ig0iTyjDPxhQkEBd9rgGADIPJtkh6QM3p%2FBv5uKJXpPOuzLOcKF%2BUl3tUMVKeO6dBLYBQSCy3ntakaUozH0kdM9l05uEk%2FEzmwS33LjwdhtWWpN00X%2B83AHivZ%2BZrVFWTL2rvj61zkT5MJxyQeZITyrKUwAJn%2Fcucw%2FofdwgY6pgHljswqjYKaD%2FGNBWphT5DGti8YjYAthyFRltFPM9LNnombafa5ny%2Fi6ZqEDDr0CLRQyCG7SKHJorWiNRXgcOAUNjf5X9S5k2VGYb8LZYq1L%2BmNva1L4wHPmilB7QozJvjm2ueaCY4c3xZSbu%2BUmERCLPS4lARnmxixMSPV9M2tRZ58MXakQdambOlKm3%2FrQdCCUPcsDagK6qFzDEC%2Bcf7hZ%2FVJbM4R&X-Amz-Signature=57d8e61ce9214909d0ae50724f3e8b878f19d8b260e7f03829d8d23d842006a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXOVRWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4VzngouJ7l1MNC8IWdNF1MiEV1TfrT%2FRDSqPAofzzAiBOwcCxaxyTXjzUT99Redttd3VfIhrVqKS0dW1rLC2QqCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqtWj5yOVLIWZYKVKtwDXCZ%2BoPhNivxkIaiHshP9SEQOuVAGL%2B%2BMzCGivRQKgQ6zcGt1BPh5ePEiUQPyuCQgRdR4nxQsUSnblB4CvbeDGuDPFYqJG%2Ff%2FdTDBAu0rbRBiFT7OXrZUctqXWoFon%2B3FiMTWs3KmCo2HZmrgCKb8bLIDma9JbDz2DxcmdPwxxLcEKVfUi7cGTwsuGnV5xcpqtbSQQD19K00QUieRdBcKn5rjRDp0LkcqnKmXANvpXG4dhGe8z8WAERBtxeEr89nNl%2B4Hx3tyEcdpYKsx4MrJwZcuMr41Z78G0BKOZuIvHr6MoB39KTifQ6hNUvuSnyIjob2TJmerL3SF7zLzRP2kJfXgyYtbNvqYPC5ZKFuEu8aGGh2yJTEdxSRT%2B3OClVGxtcS%2B5ir34Zl1iZzOrV47PmPMWfD%2Bs%2Bi1kIhyCSlynoz4HFq97ZJZQ%2BHsfSW%2BMfDG6ZWvQR%2F0OJ%2FQmVLlM0vFaXM%2BY7Ig0iTyjDPxhQkEBd9rgGADIPJtkh6QM3p%2FBv5uKJXpPOuzLOcKF%2BUl3tUMVKeO6dBLYBQSCy3ntakaUozH0kdM9l05uEk%2FEzmwS33LjwdhtWWpN00X%2B83AHivZ%2BZrVFWTL2rvj61zkT5MJxyQeZITyrKUwAJn%2Fcucw%2FofdwgY6pgHljswqjYKaD%2FGNBWphT5DGti8YjYAthyFRltFPM9LNnombafa5ny%2Fi6ZqEDDr0CLRQyCG7SKHJorWiNRXgcOAUNjf5X9S5k2VGYb8LZYq1L%2BmNva1L4wHPmilB7QozJvjm2ueaCY4c3xZSbu%2BUmERCLPS4lARnmxixMSPV9M2tRZ58MXakQdambOlKm3%2FrQdCCUPcsDagK6qFzDEC%2Bcf7hZ%2FVJbM4R&X-Amz-Signature=a9f3655d5cc69faabe824f0b0c08febe33b705f244e5f75b0afbe8579ac10e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXOVRWV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp4VzngouJ7l1MNC8IWdNF1MiEV1TfrT%2FRDSqPAofzzAiBOwcCxaxyTXjzUT99Redttd3VfIhrVqKS0dW1rLC2QqCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqtWj5yOVLIWZYKVKtwDXCZ%2BoPhNivxkIaiHshP9SEQOuVAGL%2B%2BMzCGivRQKgQ6zcGt1BPh5ePEiUQPyuCQgRdR4nxQsUSnblB4CvbeDGuDPFYqJG%2Ff%2FdTDBAu0rbRBiFT7OXrZUctqXWoFon%2B3FiMTWs3KmCo2HZmrgCKb8bLIDma9JbDz2DxcmdPwxxLcEKVfUi7cGTwsuGnV5xcpqtbSQQD19K00QUieRdBcKn5rjRDp0LkcqnKmXANvpXG4dhGe8z8WAERBtxeEr89nNl%2B4Hx3tyEcdpYKsx4MrJwZcuMr41Z78G0BKOZuIvHr6MoB39KTifQ6hNUvuSnyIjob2TJmerL3SF7zLzRP2kJfXgyYtbNvqYPC5ZKFuEu8aGGh2yJTEdxSRT%2B3OClVGxtcS%2B5ir34Zl1iZzOrV47PmPMWfD%2Bs%2Bi1kIhyCSlynoz4HFq97ZJZQ%2BHsfSW%2BMfDG6ZWvQR%2F0OJ%2FQmVLlM0vFaXM%2BY7Ig0iTyjDPxhQkEBd9rgGADIPJtkh6QM3p%2FBv5uKJXpPOuzLOcKF%2BUl3tUMVKeO6dBLYBQSCy3ntakaUozH0kdM9l05uEk%2FEzmwS33LjwdhtWWpN00X%2B83AHivZ%2BZrVFWTL2rvj61zkT5MJxyQeZITyrKUwAJn%2Fcucw%2FofdwgY6pgHljswqjYKaD%2FGNBWphT5DGti8YjYAthyFRltFPM9LNnombafa5ny%2Fi6ZqEDDr0CLRQyCG7SKHJorWiNRXgcOAUNjf5X9S5k2VGYb8LZYq1L%2BmNva1L4wHPmilB7QozJvjm2ueaCY4c3xZSbu%2BUmERCLPS4lARnmxixMSPV9M2tRZ58MXakQdambOlKm3%2FrQdCCUPcsDagK6qFzDEC%2Bcf7hZ%2FVJbM4R&X-Amz-Signature=5ce6730fe5abca370b63d2dae1e8481900add0ebaec2426b3f1bef863a0b4aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
