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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YH247Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDkx%2BmZOgLqExZDBQfI%2FoQJTkIeUQh1NdBCGo2HOlxAgIhAPYHoFi2WcjQC6nmFwsAMdOPuH3pHqq%2F0U4Pk565i30vKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qIwdP%2BOU4HQl0jUq3APZibNIz8o%2FyCALig9Ii0zLsTHOzC%2B4Oe4RK6rnnHEMpR5ofFycXnG1P8%2BqZuTuxpmaptEBGeUmSy8EsmCeExBGYi5pSeLKDZ3jMO3WI%2FTiGWGTL2PrSGFgaSRL7m17l4qM%2BDbgNnrOAZfDu0lAU7NoRP1WTYsnNRzQRQIdtXqFujZlWfZ27OQ7VeD2T6hFmmRIyVVV2cfqp8JNpCHLFD6LggWMpw91Ft%2BjjMPcP2vg4uKibj91L%2BieqsdT8DBITR%2B8hIyBejcdp4eaJBWJskUhzR2LcFy8LEPlodo8Lvi51exK2ZHdwq8z79UfrpBkudKbPtFSt0UH9fZYdHclTU%2FuoNUbg%2Bd9SNBn%2BhmGuVs92hM6eI2TTj84R1%2F%2FIlzgr6nUCHiSW3nscKrreeMarwg9sSrvoSHhlWehsX5qpoGpQB70A6jxO5FU%2BhwKiTIVSuwMWuRZMHRTR9%2B%2B9j9nw1ovMQ9lbruhIl7xcWW6I9DwesjQNuquaRvnC2Cpb9DNfl0L70ajhu9KjHHy0wEfRxQEdxGdhXvIDTZzlg8xvWDcqFYmQ57%2Fgj7DjDaumL74FUpBf4a8X4pGjwCSHTlwnHknrX%2BXLJo0zU4R74rN2QIiendobee8t3ZKq%2FKCyTCRo%2B6%2FBjqkAchoxTFZTX%2Fzzsr9I%2BxnatTcC%2BhFv%2BtfMrokUyQ2Su2uUmtyBv2AXoB7tmMMPCY6pnH46295bnJvM48%2FVf6MK3924JNwu9ZPuXMuhXgwLTFXSERq7Eu8KpvYYQTqoA%2FjLYY6j3aE0FegW6EqOuA%2Fv36jCZItbZ2X8luUnzc0iQchch9kZ9gm6ksSAqdyZbzV9GsFy7%2BKThc1SWMawaI%2BoFOR4TUL&X-Amz-Signature=df4e5795cb27ab02186ed26fc5385779ee61da074669cb6a18a4513ad3e9b4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YH247Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDkx%2BmZOgLqExZDBQfI%2FoQJTkIeUQh1NdBCGo2HOlxAgIhAPYHoFi2WcjQC6nmFwsAMdOPuH3pHqq%2F0U4Pk565i30vKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qIwdP%2BOU4HQl0jUq3APZibNIz8o%2FyCALig9Ii0zLsTHOzC%2B4Oe4RK6rnnHEMpR5ofFycXnG1P8%2BqZuTuxpmaptEBGeUmSy8EsmCeExBGYi5pSeLKDZ3jMO3WI%2FTiGWGTL2PrSGFgaSRL7m17l4qM%2BDbgNnrOAZfDu0lAU7NoRP1WTYsnNRzQRQIdtXqFujZlWfZ27OQ7VeD2T6hFmmRIyVVV2cfqp8JNpCHLFD6LggWMpw91Ft%2BjjMPcP2vg4uKibj91L%2BieqsdT8DBITR%2B8hIyBejcdp4eaJBWJskUhzR2LcFy8LEPlodo8Lvi51exK2ZHdwq8z79UfrpBkudKbPtFSt0UH9fZYdHclTU%2FuoNUbg%2Bd9SNBn%2BhmGuVs92hM6eI2TTj84R1%2F%2FIlzgr6nUCHiSW3nscKrreeMarwg9sSrvoSHhlWehsX5qpoGpQB70A6jxO5FU%2BhwKiTIVSuwMWuRZMHRTR9%2B%2B9j9nw1ovMQ9lbruhIl7xcWW6I9DwesjQNuquaRvnC2Cpb9DNfl0L70ajhu9KjHHy0wEfRxQEdxGdhXvIDTZzlg8xvWDcqFYmQ57%2Fgj7DjDaumL74FUpBf4a8X4pGjwCSHTlwnHknrX%2BXLJo0zU4R74rN2QIiendobee8t3ZKq%2FKCyTCRo%2B6%2FBjqkAchoxTFZTX%2Fzzsr9I%2BxnatTcC%2BhFv%2BtfMrokUyQ2Su2uUmtyBv2AXoB7tmMMPCY6pnH46295bnJvM48%2FVf6MK3924JNwu9ZPuXMuhXgwLTFXSERq7Eu8KpvYYQTqoA%2FjLYY6j3aE0FegW6EqOuA%2Fv36jCZItbZ2X8luUnzc0iQchch9kZ9gm6ksSAqdyZbzV9GsFy7%2BKThc1SWMawaI%2BoFOR4TUL&X-Amz-Signature=046965831f3c8a85988f3f0892d2ad12c1e76e1c5068b94b82e414df051fe408&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YH247Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDkx%2BmZOgLqExZDBQfI%2FoQJTkIeUQh1NdBCGo2HOlxAgIhAPYHoFi2WcjQC6nmFwsAMdOPuH3pHqq%2F0U4Pk565i30vKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qIwdP%2BOU4HQl0jUq3APZibNIz8o%2FyCALig9Ii0zLsTHOzC%2B4Oe4RK6rnnHEMpR5ofFycXnG1P8%2BqZuTuxpmaptEBGeUmSy8EsmCeExBGYi5pSeLKDZ3jMO3WI%2FTiGWGTL2PrSGFgaSRL7m17l4qM%2BDbgNnrOAZfDu0lAU7NoRP1WTYsnNRzQRQIdtXqFujZlWfZ27OQ7VeD2T6hFmmRIyVVV2cfqp8JNpCHLFD6LggWMpw91Ft%2BjjMPcP2vg4uKibj91L%2BieqsdT8DBITR%2B8hIyBejcdp4eaJBWJskUhzR2LcFy8LEPlodo8Lvi51exK2ZHdwq8z79UfrpBkudKbPtFSt0UH9fZYdHclTU%2FuoNUbg%2Bd9SNBn%2BhmGuVs92hM6eI2TTj84R1%2F%2FIlzgr6nUCHiSW3nscKrreeMarwg9sSrvoSHhlWehsX5qpoGpQB70A6jxO5FU%2BhwKiTIVSuwMWuRZMHRTR9%2B%2B9j9nw1ovMQ9lbruhIl7xcWW6I9DwesjQNuquaRvnC2Cpb9DNfl0L70ajhu9KjHHy0wEfRxQEdxGdhXvIDTZzlg8xvWDcqFYmQ57%2Fgj7DjDaumL74FUpBf4a8X4pGjwCSHTlwnHknrX%2BXLJo0zU4R74rN2QIiendobee8t3ZKq%2FKCyTCRo%2B6%2FBjqkAchoxTFZTX%2Fzzsr9I%2BxnatTcC%2BhFv%2BtfMrokUyQ2Su2uUmtyBv2AXoB7tmMMPCY6pnH46295bnJvM48%2FVf6MK3924JNwu9ZPuXMuhXgwLTFXSERq7Eu8KpvYYQTqoA%2FjLYY6j3aE0FegW6EqOuA%2Fv36jCZItbZ2X8luUnzc0iQchch9kZ9gm6ksSAqdyZbzV9GsFy7%2BKThc1SWMawaI%2BoFOR4TUL&X-Amz-Signature=ea82326c030e0e00ad5707e1c1c89adc1844983a176a84af03222e6b03e44d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YH247Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDkx%2BmZOgLqExZDBQfI%2FoQJTkIeUQh1NdBCGo2HOlxAgIhAPYHoFi2WcjQC6nmFwsAMdOPuH3pHqq%2F0U4Pk565i30vKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qIwdP%2BOU4HQl0jUq3APZibNIz8o%2FyCALig9Ii0zLsTHOzC%2B4Oe4RK6rnnHEMpR5ofFycXnG1P8%2BqZuTuxpmaptEBGeUmSy8EsmCeExBGYi5pSeLKDZ3jMO3WI%2FTiGWGTL2PrSGFgaSRL7m17l4qM%2BDbgNnrOAZfDu0lAU7NoRP1WTYsnNRzQRQIdtXqFujZlWfZ27OQ7VeD2T6hFmmRIyVVV2cfqp8JNpCHLFD6LggWMpw91Ft%2BjjMPcP2vg4uKibj91L%2BieqsdT8DBITR%2B8hIyBejcdp4eaJBWJskUhzR2LcFy8LEPlodo8Lvi51exK2ZHdwq8z79UfrpBkudKbPtFSt0UH9fZYdHclTU%2FuoNUbg%2Bd9SNBn%2BhmGuVs92hM6eI2TTj84R1%2F%2FIlzgr6nUCHiSW3nscKrreeMarwg9sSrvoSHhlWehsX5qpoGpQB70A6jxO5FU%2BhwKiTIVSuwMWuRZMHRTR9%2B%2B9j9nw1ovMQ9lbruhIl7xcWW6I9DwesjQNuquaRvnC2Cpb9DNfl0L70ajhu9KjHHy0wEfRxQEdxGdhXvIDTZzlg8xvWDcqFYmQ57%2Fgj7DjDaumL74FUpBf4a8X4pGjwCSHTlwnHknrX%2BXLJo0zU4R74rN2QIiendobee8t3ZKq%2FKCyTCRo%2B6%2FBjqkAchoxTFZTX%2Fzzsr9I%2BxnatTcC%2BhFv%2BtfMrokUyQ2Su2uUmtyBv2AXoB7tmMMPCY6pnH46295bnJvM48%2FVf6MK3924JNwu9ZPuXMuhXgwLTFXSERq7Eu8KpvYYQTqoA%2FjLYY6j3aE0FegW6EqOuA%2Fv36jCZItbZ2X8luUnzc0iQchch9kZ9gm6ksSAqdyZbzV9GsFy7%2BKThc1SWMawaI%2BoFOR4TUL&X-Amz-Signature=f54045f47f64eeb78802ccc573316be940c58a999a6381eb27032da62ca1b124&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YH247Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDkx%2BmZOgLqExZDBQfI%2FoQJTkIeUQh1NdBCGo2HOlxAgIhAPYHoFi2WcjQC6nmFwsAMdOPuH3pHqq%2F0U4Pk565i30vKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qIwdP%2BOU4HQl0jUq3APZibNIz8o%2FyCALig9Ii0zLsTHOzC%2B4Oe4RK6rnnHEMpR5ofFycXnG1P8%2BqZuTuxpmaptEBGeUmSy8EsmCeExBGYi5pSeLKDZ3jMO3WI%2FTiGWGTL2PrSGFgaSRL7m17l4qM%2BDbgNnrOAZfDu0lAU7NoRP1WTYsnNRzQRQIdtXqFujZlWfZ27OQ7VeD2T6hFmmRIyVVV2cfqp8JNpCHLFD6LggWMpw91Ft%2BjjMPcP2vg4uKibj91L%2BieqsdT8DBITR%2B8hIyBejcdp4eaJBWJskUhzR2LcFy8LEPlodo8Lvi51exK2ZHdwq8z79UfrpBkudKbPtFSt0UH9fZYdHclTU%2FuoNUbg%2Bd9SNBn%2BhmGuVs92hM6eI2TTj84R1%2F%2FIlzgr6nUCHiSW3nscKrreeMarwg9sSrvoSHhlWehsX5qpoGpQB70A6jxO5FU%2BhwKiTIVSuwMWuRZMHRTR9%2B%2B9j9nw1ovMQ9lbruhIl7xcWW6I9DwesjQNuquaRvnC2Cpb9DNfl0L70ajhu9KjHHy0wEfRxQEdxGdhXvIDTZzlg8xvWDcqFYmQ57%2Fgj7DjDaumL74FUpBf4a8X4pGjwCSHTlwnHknrX%2BXLJo0zU4R74rN2QIiendobee8t3ZKq%2FKCyTCRo%2B6%2FBjqkAchoxTFZTX%2Fzzsr9I%2BxnatTcC%2BhFv%2BtfMrokUyQ2Su2uUmtyBv2AXoB7tmMMPCY6pnH46295bnJvM48%2FVf6MK3924JNwu9ZPuXMuhXgwLTFXSERq7Eu8KpvYYQTqoA%2FjLYY6j3aE0FegW6EqOuA%2Fv36jCZItbZ2X8luUnzc0iQchch9kZ9gm6ksSAqdyZbzV9GsFy7%2BKThc1SWMawaI%2BoFOR4TUL&X-Amz-Signature=8986971939469efd23b93e44fe5291c3597ea86bd1dcad002a65777979736a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YH247Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDDkx%2BmZOgLqExZDBQfI%2FoQJTkIeUQh1NdBCGo2HOlxAgIhAPYHoFi2WcjQC6nmFwsAMdOPuH3pHqq%2F0U4Pk565i30vKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0qIwdP%2BOU4HQl0jUq3APZibNIz8o%2FyCALig9Ii0zLsTHOzC%2B4Oe4RK6rnnHEMpR5ofFycXnG1P8%2BqZuTuxpmaptEBGeUmSy8EsmCeExBGYi5pSeLKDZ3jMO3WI%2FTiGWGTL2PrSGFgaSRL7m17l4qM%2BDbgNnrOAZfDu0lAU7NoRP1WTYsnNRzQRQIdtXqFujZlWfZ27OQ7VeD2T6hFmmRIyVVV2cfqp8JNpCHLFD6LggWMpw91Ft%2BjjMPcP2vg4uKibj91L%2BieqsdT8DBITR%2B8hIyBejcdp4eaJBWJskUhzR2LcFy8LEPlodo8Lvi51exK2ZHdwq8z79UfrpBkudKbPtFSt0UH9fZYdHclTU%2FuoNUbg%2Bd9SNBn%2BhmGuVs92hM6eI2TTj84R1%2F%2FIlzgr6nUCHiSW3nscKrreeMarwg9sSrvoSHhlWehsX5qpoGpQB70A6jxO5FU%2BhwKiTIVSuwMWuRZMHRTR9%2B%2B9j9nw1ovMQ9lbruhIl7xcWW6I9DwesjQNuquaRvnC2Cpb9DNfl0L70ajhu9KjHHy0wEfRxQEdxGdhXvIDTZzlg8xvWDcqFYmQ57%2Fgj7DjDaumL74FUpBf4a8X4pGjwCSHTlwnHknrX%2BXLJo0zU4R74rN2QIiendobee8t3ZKq%2FKCyTCRo%2B6%2FBjqkAchoxTFZTX%2Fzzsr9I%2BxnatTcC%2BhFv%2BtfMrokUyQ2Su2uUmtyBv2AXoB7tmMMPCY6pnH46295bnJvM48%2FVf6MK3924JNwu9ZPuXMuhXgwLTFXSERq7Eu8KpvYYQTqoA%2FjLYY6j3aE0FegW6EqOuA%2Fv36jCZItbZ2X8luUnzc0iQchch9kZ9gm6ksSAqdyZbzV9GsFy7%2BKThc1SWMawaI%2BoFOR4TUL&X-Amz-Signature=515b79eceb3df928dd1bb637e5954affd1a1cbb502d937a65205f56c97c4677f&X-Amz-SignedHeaders=host&x-id=GetObject)
