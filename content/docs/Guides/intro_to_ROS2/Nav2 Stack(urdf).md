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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=34bc985e8c563f1c5b93dfd5a0120c2de334eb1ce61fe1391be00e7ae47fd268&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=52868ea92de7b7996a55fc865740069505e2dee2f6c77bcd75771048cdce1d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=383ca18394acbf2ccee91f87a1b08a775680d3113ba69951f6ee012c2127527a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=d8cdb64351e7edf5a3ff2ab02bdca4427476a81ae011bb4778b7f9b8e77b6737&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=f408ca765bd2de59bd0be2d8b97d64146e91c4e9be133caf931dc2234dc7cf52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH6NN5E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB200JfB3f%2BHB%2FSLkCetxXoVviAYQ6c4dOz2IFRmww82AiAkd1WCJNe%2BkeMAmGHCYvNhBjblH6AQOBolomWnc52lESr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM0yR8k5p276KzhjiYKtwDcC3%2FRzxTY79itTrN3Fnqt%2FoJYD5O60eRKwlxpMi%2Bef09AfgMHFQS%2BsUS2WcCMF8LThgU1m9POkoAUGbS2r0PmafWZNsJeydGXWhOurna8L%2FEii7IjGmA29SezAq6yQ2xgUNjMZgRumo4mJaDKQHD0ibU91l7opyrI1zLoPyx9w7SmVsqkU%2FFt9SJwNNvYie78yvMVcEw1lD7KQ7bzNLSHEMbK8Yv%2FbWEXDRLnFjLARvOtY3utA74kn773Kb1JiOEZ%2FYyoDHjgysCwKPO0AwG5Wa7IbBhWbyDyuUfhl2PlZrLRiPf3E1z1kof15FsUug9rPQQEnCKbPDLDdv3u4oREv8SHhpC%2BmV0wCmqAH%2FHFahx8Z%2F3fyYvEA0WcBCLr2HHafyUZDUOlz9CXvo3Dgo6lmfO2K1YSrWrDarX3oal5FxDlYE4Ba3SmwTkvhl8hoU4ujk%2FKs2%2FC4WgmVDghh5T0KrmUoNw6Tf79eIWgIthSuel5FOJ0hMbI4nWkNXXcFduKwXQTdo11VanAlkxYk5C1bAEtcWmJpQKayQ5SSykXwHH9viVpHAwdjXSgZhg8sc8eFcaWVJfqpSyuo92qz1l%2F2kwZ48BW%2B0J0kdMzaheifLam7ITDUkFph%2B7nNcwtrfPvwY6pgH%2FDwhd3KgKHHh1B%2FGfXhMZCKT2C2Dep41S%2FJ%2B66HqYkWyvj%2BReyJ2K5qvbnP%2Fz7%2F3BD8u%2BIZAJ09gf8dWp2XUdKSppZNSYj0XAGgCpbtDPV80N6%2BbEjJQkHFCQIRwLpEGh3UeeL0vIVikbCPKktb%2Ft6bOGWVECIE6Gm1AHqZW5iwH81xFR1DHhhoWn1zjfKG8QB2jCU84JByijKa7YwQTho2ZudZmA&X-Amz-Signature=c89b742531a029af02db0dd33375bc0de2f2992f0da08fb5e840c99e0f0d9925&X-Amz-SignedHeaders=host&x-id=GetObject)
