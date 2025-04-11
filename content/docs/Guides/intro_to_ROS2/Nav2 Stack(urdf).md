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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETNTIAP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEloQd848Arl%2FSiFWOgfQmuESHUvqk2AWqpswB6zVZ02AiEAxTDAs1jM5PgR%2BDoQrlvtBX84wZ1NEnI%2BcDbvznUKljYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzBUKf9ZLw%2BUj80FCrcA7T5nTLkOFpHZb2NTHD2DQ%2BWxKxDJSE%2Baxl751698aJPZ4FkbgxUcxMMbuGID5ymNjhiE0WLTQUlW8Fu0J%2FuMOpTo6TqXnzxbTDyZuAiYcpEAvMnK9GLET2uxRD3G1tWJ%2BhcNzKNhSE9nyRFRhY4foiPQ92x4JRL1OmnV6NksEsgAS4ucPTq6j9ta5f%2Bdw4DK3XR3tfdzVsFIPpXLYVTXcFHuIUZ0bYWLlHFCljB06E6mQfbal4WWgGoSMIHQB9X35r4x6vmu0%2FxEyPqDv%2BO%2BDvKXFUPM8PRU2sKWgGCSPNuOIBZjuKyhER1vtZ0fz88PY%2BkaDH%2BA39VK6eVQopFRcBAa71cM4D0r3RpoT%2B9mDwCMiMHz2Ex0X%2Bsfijevx8lBAMiUfOoM1TTEwtH0FWmfOSK83dZhLDX59BC4QDP3Ve8MeJaDn5RjHdKyt9TGfKaos23KEcbWSdpOyMXCTrAb%2BGy%2FuVp9FzRLJofjIK5VpFKF%2BaOg8uqLdYRGNo1sow8y6EUNi3Pg4da%2FQGbr8zQ%2FWimXi5xqhMATRKwVZWrOyGkNqvHk7DuRHznt8m5MBbesFeFl9EiPHQNuRe9xnsqyilxDDT3HgNFj%2F1OhQ%2BNHWCVEDdw%2FzwMtaOsWdX6MOPC4b8GOqUBikcnRGL%2BEg%2BEVoyjgzGUdxo%2FOmwCnKjM%2BnYx%2FZcEaeliWh3ljI5IAsN1vyk2zBHQHdk3mFuXb3B2gPDpKuBeEu3Oe77xzxyoNF67iJ5eZoPt0463rpG8ogJYk0nHHyUdqWa%2B0PgmoqZrr1Bn4tnoFey%2F8FoaXjk1ukskcKIM2%2BFxrPTjf2%2B%2F4mA38l0KH3hZT6wTllvR5tKHgKn5vTeu9oNzXdxh&X-Amz-Signature=be9f1b9dcb8f1e65bc40ab3e6ed08778397a68a818ae4545f9f5b14b76f7f236&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETNTIAP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEloQd848Arl%2FSiFWOgfQmuESHUvqk2AWqpswB6zVZ02AiEAxTDAs1jM5PgR%2BDoQrlvtBX84wZ1NEnI%2BcDbvznUKljYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzBUKf9ZLw%2BUj80FCrcA7T5nTLkOFpHZb2NTHD2DQ%2BWxKxDJSE%2Baxl751698aJPZ4FkbgxUcxMMbuGID5ymNjhiE0WLTQUlW8Fu0J%2FuMOpTo6TqXnzxbTDyZuAiYcpEAvMnK9GLET2uxRD3G1tWJ%2BhcNzKNhSE9nyRFRhY4foiPQ92x4JRL1OmnV6NksEsgAS4ucPTq6j9ta5f%2Bdw4DK3XR3tfdzVsFIPpXLYVTXcFHuIUZ0bYWLlHFCljB06E6mQfbal4WWgGoSMIHQB9X35r4x6vmu0%2FxEyPqDv%2BO%2BDvKXFUPM8PRU2sKWgGCSPNuOIBZjuKyhER1vtZ0fz88PY%2BkaDH%2BA39VK6eVQopFRcBAa71cM4D0r3RpoT%2B9mDwCMiMHz2Ex0X%2Bsfijevx8lBAMiUfOoM1TTEwtH0FWmfOSK83dZhLDX59BC4QDP3Ve8MeJaDn5RjHdKyt9TGfKaos23KEcbWSdpOyMXCTrAb%2BGy%2FuVp9FzRLJofjIK5VpFKF%2BaOg8uqLdYRGNo1sow8y6EUNi3Pg4da%2FQGbr8zQ%2FWimXi5xqhMATRKwVZWrOyGkNqvHk7DuRHznt8m5MBbesFeFl9EiPHQNuRe9xnsqyilxDDT3HgNFj%2F1OhQ%2BNHWCVEDdw%2FzwMtaOsWdX6MOPC4b8GOqUBikcnRGL%2BEg%2BEVoyjgzGUdxo%2FOmwCnKjM%2BnYx%2FZcEaeliWh3ljI5IAsN1vyk2zBHQHdk3mFuXb3B2gPDpKuBeEu3Oe77xzxyoNF67iJ5eZoPt0463rpG8ogJYk0nHHyUdqWa%2B0PgmoqZrr1Bn4tnoFey%2F8FoaXjk1ukskcKIM2%2BFxrPTjf2%2B%2F4mA38l0KH3hZT6wTllvR5tKHgKn5vTeu9oNzXdxh&X-Amz-Signature=439061ef36b0b79e07932e6e462aa87045f50bac082c2842731ffae7aab53117&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETNTIAP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEloQd848Arl%2FSiFWOgfQmuESHUvqk2AWqpswB6zVZ02AiEAxTDAs1jM5PgR%2BDoQrlvtBX84wZ1NEnI%2BcDbvznUKljYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzBUKf9ZLw%2BUj80FCrcA7T5nTLkOFpHZb2NTHD2DQ%2BWxKxDJSE%2Baxl751698aJPZ4FkbgxUcxMMbuGID5ymNjhiE0WLTQUlW8Fu0J%2FuMOpTo6TqXnzxbTDyZuAiYcpEAvMnK9GLET2uxRD3G1tWJ%2BhcNzKNhSE9nyRFRhY4foiPQ92x4JRL1OmnV6NksEsgAS4ucPTq6j9ta5f%2Bdw4DK3XR3tfdzVsFIPpXLYVTXcFHuIUZ0bYWLlHFCljB06E6mQfbal4WWgGoSMIHQB9X35r4x6vmu0%2FxEyPqDv%2BO%2BDvKXFUPM8PRU2sKWgGCSPNuOIBZjuKyhER1vtZ0fz88PY%2BkaDH%2BA39VK6eVQopFRcBAa71cM4D0r3RpoT%2B9mDwCMiMHz2Ex0X%2Bsfijevx8lBAMiUfOoM1TTEwtH0FWmfOSK83dZhLDX59BC4QDP3Ve8MeJaDn5RjHdKyt9TGfKaos23KEcbWSdpOyMXCTrAb%2BGy%2FuVp9FzRLJofjIK5VpFKF%2BaOg8uqLdYRGNo1sow8y6EUNi3Pg4da%2FQGbr8zQ%2FWimXi5xqhMATRKwVZWrOyGkNqvHk7DuRHznt8m5MBbesFeFl9EiPHQNuRe9xnsqyilxDDT3HgNFj%2F1OhQ%2BNHWCVEDdw%2FzwMtaOsWdX6MOPC4b8GOqUBikcnRGL%2BEg%2BEVoyjgzGUdxo%2FOmwCnKjM%2BnYx%2FZcEaeliWh3ljI5IAsN1vyk2zBHQHdk3mFuXb3B2gPDpKuBeEu3Oe77xzxyoNF67iJ5eZoPt0463rpG8ogJYk0nHHyUdqWa%2B0PgmoqZrr1Bn4tnoFey%2F8FoaXjk1ukskcKIM2%2BFxrPTjf2%2B%2F4mA38l0KH3hZT6wTllvR5tKHgKn5vTeu9oNzXdxh&X-Amz-Signature=9bb857f4792007663d815b95cb36a5a2096a9089c8c13daaa9a307026ebc6980&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETNTIAP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEloQd848Arl%2FSiFWOgfQmuESHUvqk2AWqpswB6zVZ02AiEAxTDAs1jM5PgR%2BDoQrlvtBX84wZ1NEnI%2BcDbvznUKljYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzBUKf9ZLw%2BUj80FCrcA7T5nTLkOFpHZb2NTHD2DQ%2BWxKxDJSE%2Baxl751698aJPZ4FkbgxUcxMMbuGID5ymNjhiE0WLTQUlW8Fu0J%2FuMOpTo6TqXnzxbTDyZuAiYcpEAvMnK9GLET2uxRD3G1tWJ%2BhcNzKNhSE9nyRFRhY4foiPQ92x4JRL1OmnV6NksEsgAS4ucPTq6j9ta5f%2Bdw4DK3XR3tfdzVsFIPpXLYVTXcFHuIUZ0bYWLlHFCljB06E6mQfbal4WWgGoSMIHQB9X35r4x6vmu0%2FxEyPqDv%2BO%2BDvKXFUPM8PRU2sKWgGCSPNuOIBZjuKyhER1vtZ0fz88PY%2BkaDH%2BA39VK6eVQopFRcBAa71cM4D0r3RpoT%2B9mDwCMiMHz2Ex0X%2Bsfijevx8lBAMiUfOoM1TTEwtH0FWmfOSK83dZhLDX59BC4QDP3Ve8MeJaDn5RjHdKyt9TGfKaos23KEcbWSdpOyMXCTrAb%2BGy%2FuVp9FzRLJofjIK5VpFKF%2BaOg8uqLdYRGNo1sow8y6EUNi3Pg4da%2FQGbr8zQ%2FWimXi5xqhMATRKwVZWrOyGkNqvHk7DuRHznt8m5MBbesFeFl9EiPHQNuRe9xnsqyilxDDT3HgNFj%2F1OhQ%2BNHWCVEDdw%2FzwMtaOsWdX6MOPC4b8GOqUBikcnRGL%2BEg%2BEVoyjgzGUdxo%2FOmwCnKjM%2BnYx%2FZcEaeliWh3ljI5IAsN1vyk2zBHQHdk3mFuXb3B2gPDpKuBeEu3Oe77xzxyoNF67iJ5eZoPt0463rpG8ogJYk0nHHyUdqWa%2B0PgmoqZrr1Bn4tnoFey%2F8FoaXjk1ukskcKIM2%2BFxrPTjf2%2B%2F4mA38l0KH3hZT6wTllvR5tKHgKn5vTeu9oNzXdxh&X-Amz-Signature=8b9a9b1c9f727382a524732b4a169f6209d993853729fdbee2e3e75c658d8842&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETNTIAP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEloQd848Arl%2FSiFWOgfQmuESHUvqk2AWqpswB6zVZ02AiEAxTDAs1jM5PgR%2BDoQrlvtBX84wZ1NEnI%2BcDbvznUKljYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzBUKf9ZLw%2BUj80FCrcA7T5nTLkOFpHZb2NTHD2DQ%2BWxKxDJSE%2Baxl751698aJPZ4FkbgxUcxMMbuGID5ymNjhiE0WLTQUlW8Fu0J%2FuMOpTo6TqXnzxbTDyZuAiYcpEAvMnK9GLET2uxRD3G1tWJ%2BhcNzKNhSE9nyRFRhY4foiPQ92x4JRL1OmnV6NksEsgAS4ucPTq6j9ta5f%2Bdw4DK3XR3tfdzVsFIPpXLYVTXcFHuIUZ0bYWLlHFCljB06E6mQfbal4WWgGoSMIHQB9X35r4x6vmu0%2FxEyPqDv%2BO%2BDvKXFUPM8PRU2sKWgGCSPNuOIBZjuKyhER1vtZ0fz88PY%2BkaDH%2BA39VK6eVQopFRcBAa71cM4D0r3RpoT%2B9mDwCMiMHz2Ex0X%2Bsfijevx8lBAMiUfOoM1TTEwtH0FWmfOSK83dZhLDX59BC4QDP3Ve8MeJaDn5RjHdKyt9TGfKaos23KEcbWSdpOyMXCTrAb%2BGy%2FuVp9FzRLJofjIK5VpFKF%2BaOg8uqLdYRGNo1sow8y6EUNi3Pg4da%2FQGbr8zQ%2FWimXi5xqhMATRKwVZWrOyGkNqvHk7DuRHznt8m5MBbesFeFl9EiPHQNuRe9xnsqyilxDDT3HgNFj%2F1OhQ%2BNHWCVEDdw%2FzwMtaOsWdX6MOPC4b8GOqUBikcnRGL%2BEg%2BEVoyjgzGUdxo%2FOmwCnKjM%2BnYx%2FZcEaeliWh3ljI5IAsN1vyk2zBHQHdk3mFuXb3B2gPDpKuBeEu3Oe77xzxyoNF67iJ5eZoPt0463rpG8ogJYk0nHHyUdqWa%2B0PgmoqZrr1Bn4tnoFey%2F8FoaXjk1ukskcKIM2%2BFxrPTjf2%2B%2F4mA38l0KH3hZT6wTllvR5tKHgKn5vTeu9oNzXdxh&X-Amz-Signature=83290a250a1dd52c33d1f46daacb9112dd8b6ceb80984051d3a5f5c20b3747d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETNTIAP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEloQd848Arl%2FSiFWOgfQmuESHUvqk2AWqpswB6zVZ02AiEAxTDAs1jM5PgR%2BDoQrlvtBX84wZ1NEnI%2BcDbvznUKljYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzBUKf9ZLw%2BUj80FCrcA7T5nTLkOFpHZb2NTHD2DQ%2BWxKxDJSE%2Baxl751698aJPZ4FkbgxUcxMMbuGID5ymNjhiE0WLTQUlW8Fu0J%2FuMOpTo6TqXnzxbTDyZuAiYcpEAvMnK9GLET2uxRD3G1tWJ%2BhcNzKNhSE9nyRFRhY4foiPQ92x4JRL1OmnV6NksEsgAS4ucPTq6j9ta5f%2Bdw4DK3XR3tfdzVsFIPpXLYVTXcFHuIUZ0bYWLlHFCljB06E6mQfbal4WWgGoSMIHQB9X35r4x6vmu0%2FxEyPqDv%2BO%2BDvKXFUPM8PRU2sKWgGCSPNuOIBZjuKyhER1vtZ0fz88PY%2BkaDH%2BA39VK6eVQopFRcBAa71cM4D0r3RpoT%2B9mDwCMiMHz2Ex0X%2Bsfijevx8lBAMiUfOoM1TTEwtH0FWmfOSK83dZhLDX59BC4QDP3Ve8MeJaDn5RjHdKyt9TGfKaos23KEcbWSdpOyMXCTrAb%2BGy%2FuVp9FzRLJofjIK5VpFKF%2BaOg8uqLdYRGNo1sow8y6EUNi3Pg4da%2FQGbr8zQ%2FWimXi5xqhMATRKwVZWrOyGkNqvHk7DuRHznt8m5MBbesFeFl9EiPHQNuRe9xnsqyilxDDT3HgNFj%2F1OhQ%2BNHWCVEDdw%2FzwMtaOsWdX6MOPC4b8GOqUBikcnRGL%2BEg%2BEVoyjgzGUdxo%2FOmwCnKjM%2BnYx%2FZcEaeliWh3ljI5IAsN1vyk2zBHQHdk3mFuXb3B2gPDpKuBeEu3Oe77xzxyoNF67iJ5eZoPt0463rpG8ogJYk0nHHyUdqWa%2B0PgmoqZrr1Bn4tnoFey%2F8FoaXjk1ukskcKIM2%2BFxrPTjf2%2B%2F4mA38l0KH3hZT6wTllvR5tKHgKn5vTeu9oNzXdxh&X-Amz-Signature=3e67e9d29a4d7eeb0ce83a27e331f48eedf0c0a71410a4c1bfe81b5ef384f31a&X-Amz-SignedHeaders=host&x-id=GetObject)
