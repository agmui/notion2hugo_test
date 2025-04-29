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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3B5ND7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACk77n5JFUOLZANAinQoXonWHZlNL%2F84QYxSIImaVclAiEAi8ebipWBEZFL5KzUzb1lkknyUKECc1eEz6yl9aHkTEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqt5WiskUpKRK3BuyrcA9z35hc6XS%2BEIvd3FWcjhBemP98ZDRK3fa2hMHAePI34qunwEMRB%2BSD5CI4o1Vn9uxoI%2BSwSDqzbjSRGLpCUmfKnmdObIidtaXepo%2BUKd76ITd4d3%2F26n4tT8ceBucg87BFKHy9VEPLqjZa94a108Qepew5b%2FmKQMT32eAafU8%2BQLDggeNACv%2FJ%2FA0HFZGSXxiTD0AMfxiJ5oFjon3edbh6iKoJs7TvGHD1GaI1dtIjPlpiI0hMvOYBlflmAFsD6fIqNL33s5P6EA4DYcHkd2FVpCfQv6ECuJW1rlWsGG%2F99VQIowwvzHy5a2GvpDdAOt3pvgUhCSvYV4UqNKKLAs0bwxcZCl3KC7jUhrus7TlynXIEdT7T4WzZ1lwkPHPgfZHhmDSTv%2BdiF7cmH7Sae3JL96ZM7VMJzM25wiQyjkoi9AyozWW%2BwoyU9Qrzc5j27DawFLHa7RU6h4TiuHGcw0v7ElPcTfqSwex0IJ9owTCpskgBvnNTJse%2BE14dYrAz0kDajDPXKOAt%2FnOw9djJ2izAGIv%2BhBeZYb06%2FEIuYnsbWdCzT3VxblRrdoTHLZs2AbASRgB%2Fj4ilfi7p%2BKbmD50IInOZS5JFcnDNB1yfPf%2FjBVLUI6hg8XsiYj%2FPPMN%2F8wsAGOqUBANpodFetIdrnESs%2FXrqF4XUrF7FGIBJVdOtxNpxU%2BdnXTohCO%2B7omTtvPLqjREbSkKkMtwgt86kGmM4j5Sm9whAWe6oEiR%2Fcp%2B4cMkMV9L28J9wvDD6mE%2FpaRN1DEGMrL2Jufq%2F4DAZqP7rKUnU1SXdY8TuXeGhsd2OR29OjMywOt3Q4dtpvzGfSaNK21qCbG%2Bje46jg3pNIk2WsJfuu9DvppoHQ&X-Amz-Signature=06db4d54cd0097193232fd9b9174a8d9c75d54fad746003089f002f50cff22dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3B5ND7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACk77n5JFUOLZANAinQoXonWHZlNL%2F84QYxSIImaVclAiEAi8ebipWBEZFL5KzUzb1lkknyUKECc1eEz6yl9aHkTEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqt5WiskUpKRK3BuyrcA9z35hc6XS%2BEIvd3FWcjhBemP98ZDRK3fa2hMHAePI34qunwEMRB%2BSD5CI4o1Vn9uxoI%2BSwSDqzbjSRGLpCUmfKnmdObIidtaXepo%2BUKd76ITd4d3%2F26n4tT8ceBucg87BFKHy9VEPLqjZa94a108Qepew5b%2FmKQMT32eAafU8%2BQLDggeNACv%2FJ%2FA0HFZGSXxiTD0AMfxiJ5oFjon3edbh6iKoJs7TvGHD1GaI1dtIjPlpiI0hMvOYBlflmAFsD6fIqNL33s5P6EA4DYcHkd2FVpCfQv6ECuJW1rlWsGG%2F99VQIowwvzHy5a2GvpDdAOt3pvgUhCSvYV4UqNKKLAs0bwxcZCl3KC7jUhrus7TlynXIEdT7T4WzZ1lwkPHPgfZHhmDSTv%2BdiF7cmH7Sae3JL96ZM7VMJzM25wiQyjkoi9AyozWW%2BwoyU9Qrzc5j27DawFLHa7RU6h4TiuHGcw0v7ElPcTfqSwex0IJ9owTCpskgBvnNTJse%2BE14dYrAz0kDajDPXKOAt%2FnOw9djJ2izAGIv%2BhBeZYb06%2FEIuYnsbWdCzT3VxblRrdoTHLZs2AbASRgB%2Fj4ilfi7p%2BKbmD50IInOZS5JFcnDNB1yfPf%2FjBVLUI6hg8XsiYj%2FPPMN%2F8wsAGOqUBANpodFetIdrnESs%2FXrqF4XUrF7FGIBJVdOtxNpxU%2BdnXTohCO%2B7omTtvPLqjREbSkKkMtwgt86kGmM4j5Sm9whAWe6oEiR%2Fcp%2B4cMkMV9L28J9wvDD6mE%2FpaRN1DEGMrL2Jufq%2F4DAZqP7rKUnU1SXdY8TuXeGhsd2OR29OjMywOt3Q4dtpvzGfSaNK21qCbG%2Bje46jg3pNIk2WsJfuu9DvppoHQ&X-Amz-Signature=156f9329248ad4853e3e598465411c6b886b14973d09e1bd45ed83cac4152398&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3B5ND7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACk77n5JFUOLZANAinQoXonWHZlNL%2F84QYxSIImaVclAiEAi8ebipWBEZFL5KzUzb1lkknyUKECc1eEz6yl9aHkTEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqt5WiskUpKRK3BuyrcA9z35hc6XS%2BEIvd3FWcjhBemP98ZDRK3fa2hMHAePI34qunwEMRB%2BSD5CI4o1Vn9uxoI%2BSwSDqzbjSRGLpCUmfKnmdObIidtaXepo%2BUKd76ITd4d3%2F26n4tT8ceBucg87BFKHy9VEPLqjZa94a108Qepew5b%2FmKQMT32eAafU8%2BQLDggeNACv%2FJ%2FA0HFZGSXxiTD0AMfxiJ5oFjon3edbh6iKoJs7TvGHD1GaI1dtIjPlpiI0hMvOYBlflmAFsD6fIqNL33s5P6EA4DYcHkd2FVpCfQv6ECuJW1rlWsGG%2F99VQIowwvzHy5a2GvpDdAOt3pvgUhCSvYV4UqNKKLAs0bwxcZCl3KC7jUhrus7TlynXIEdT7T4WzZ1lwkPHPgfZHhmDSTv%2BdiF7cmH7Sae3JL96ZM7VMJzM25wiQyjkoi9AyozWW%2BwoyU9Qrzc5j27DawFLHa7RU6h4TiuHGcw0v7ElPcTfqSwex0IJ9owTCpskgBvnNTJse%2BE14dYrAz0kDajDPXKOAt%2FnOw9djJ2izAGIv%2BhBeZYb06%2FEIuYnsbWdCzT3VxblRrdoTHLZs2AbASRgB%2Fj4ilfi7p%2BKbmD50IInOZS5JFcnDNB1yfPf%2FjBVLUI6hg8XsiYj%2FPPMN%2F8wsAGOqUBANpodFetIdrnESs%2FXrqF4XUrF7FGIBJVdOtxNpxU%2BdnXTohCO%2B7omTtvPLqjREbSkKkMtwgt86kGmM4j5Sm9whAWe6oEiR%2Fcp%2B4cMkMV9L28J9wvDD6mE%2FpaRN1DEGMrL2Jufq%2F4DAZqP7rKUnU1SXdY8TuXeGhsd2OR29OjMywOt3Q4dtpvzGfSaNK21qCbG%2Bje46jg3pNIk2WsJfuu9DvppoHQ&X-Amz-Signature=d4334b78aeaaaccd127ed53969649e410395f018601ede6bcb5f675349eb0529&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3B5ND7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACk77n5JFUOLZANAinQoXonWHZlNL%2F84QYxSIImaVclAiEAi8ebipWBEZFL5KzUzb1lkknyUKECc1eEz6yl9aHkTEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqt5WiskUpKRK3BuyrcA9z35hc6XS%2BEIvd3FWcjhBemP98ZDRK3fa2hMHAePI34qunwEMRB%2BSD5CI4o1Vn9uxoI%2BSwSDqzbjSRGLpCUmfKnmdObIidtaXepo%2BUKd76ITd4d3%2F26n4tT8ceBucg87BFKHy9VEPLqjZa94a108Qepew5b%2FmKQMT32eAafU8%2BQLDggeNACv%2FJ%2FA0HFZGSXxiTD0AMfxiJ5oFjon3edbh6iKoJs7TvGHD1GaI1dtIjPlpiI0hMvOYBlflmAFsD6fIqNL33s5P6EA4DYcHkd2FVpCfQv6ECuJW1rlWsGG%2F99VQIowwvzHy5a2GvpDdAOt3pvgUhCSvYV4UqNKKLAs0bwxcZCl3KC7jUhrus7TlynXIEdT7T4WzZ1lwkPHPgfZHhmDSTv%2BdiF7cmH7Sae3JL96ZM7VMJzM25wiQyjkoi9AyozWW%2BwoyU9Qrzc5j27DawFLHa7RU6h4TiuHGcw0v7ElPcTfqSwex0IJ9owTCpskgBvnNTJse%2BE14dYrAz0kDajDPXKOAt%2FnOw9djJ2izAGIv%2BhBeZYb06%2FEIuYnsbWdCzT3VxblRrdoTHLZs2AbASRgB%2Fj4ilfi7p%2BKbmD50IInOZS5JFcnDNB1yfPf%2FjBVLUI6hg8XsiYj%2FPPMN%2F8wsAGOqUBANpodFetIdrnESs%2FXrqF4XUrF7FGIBJVdOtxNpxU%2BdnXTohCO%2B7omTtvPLqjREbSkKkMtwgt86kGmM4j5Sm9whAWe6oEiR%2Fcp%2B4cMkMV9L28J9wvDD6mE%2FpaRN1DEGMrL2Jufq%2F4DAZqP7rKUnU1SXdY8TuXeGhsd2OR29OjMywOt3Q4dtpvzGfSaNK21qCbG%2Bje46jg3pNIk2WsJfuu9DvppoHQ&X-Amz-Signature=981d63ac86c9e60616f2db006722c57bbec8db89d95ca8e6da8633777f152e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3B5ND7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACk77n5JFUOLZANAinQoXonWHZlNL%2F84QYxSIImaVclAiEAi8ebipWBEZFL5KzUzb1lkknyUKECc1eEz6yl9aHkTEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqt5WiskUpKRK3BuyrcA9z35hc6XS%2BEIvd3FWcjhBemP98ZDRK3fa2hMHAePI34qunwEMRB%2BSD5CI4o1Vn9uxoI%2BSwSDqzbjSRGLpCUmfKnmdObIidtaXepo%2BUKd76ITd4d3%2F26n4tT8ceBucg87BFKHy9VEPLqjZa94a108Qepew5b%2FmKQMT32eAafU8%2BQLDggeNACv%2FJ%2FA0HFZGSXxiTD0AMfxiJ5oFjon3edbh6iKoJs7TvGHD1GaI1dtIjPlpiI0hMvOYBlflmAFsD6fIqNL33s5P6EA4DYcHkd2FVpCfQv6ECuJW1rlWsGG%2F99VQIowwvzHy5a2GvpDdAOt3pvgUhCSvYV4UqNKKLAs0bwxcZCl3KC7jUhrus7TlynXIEdT7T4WzZ1lwkPHPgfZHhmDSTv%2BdiF7cmH7Sae3JL96ZM7VMJzM25wiQyjkoi9AyozWW%2BwoyU9Qrzc5j27DawFLHa7RU6h4TiuHGcw0v7ElPcTfqSwex0IJ9owTCpskgBvnNTJse%2BE14dYrAz0kDajDPXKOAt%2FnOw9djJ2izAGIv%2BhBeZYb06%2FEIuYnsbWdCzT3VxblRrdoTHLZs2AbASRgB%2Fj4ilfi7p%2BKbmD50IInOZS5JFcnDNB1yfPf%2FjBVLUI6hg8XsiYj%2FPPMN%2F8wsAGOqUBANpodFetIdrnESs%2FXrqF4XUrF7FGIBJVdOtxNpxU%2BdnXTohCO%2B7omTtvPLqjREbSkKkMtwgt86kGmM4j5Sm9whAWe6oEiR%2Fcp%2B4cMkMV9L28J9wvDD6mE%2FpaRN1DEGMrL2Jufq%2F4DAZqP7rKUnU1SXdY8TuXeGhsd2OR29OjMywOt3Q4dtpvzGfSaNK21qCbG%2Bje46jg3pNIk2WsJfuu9DvppoHQ&X-Amz-Signature=bf5805594b32ee6d8efec61cce6428cdc1a1a932c82f968fd66a3b202c2f039e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3B5ND7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACk77n5JFUOLZANAinQoXonWHZlNL%2F84QYxSIImaVclAiEAi8ebipWBEZFL5KzUzb1lkknyUKECc1eEz6yl9aHkTEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqt5WiskUpKRK3BuyrcA9z35hc6XS%2BEIvd3FWcjhBemP98ZDRK3fa2hMHAePI34qunwEMRB%2BSD5CI4o1Vn9uxoI%2BSwSDqzbjSRGLpCUmfKnmdObIidtaXepo%2BUKd76ITd4d3%2F26n4tT8ceBucg87BFKHy9VEPLqjZa94a108Qepew5b%2FmKQMT32eAafU8%2BQLDggeNACv%2FJ%2FA0HFZGSXxiTD0AMfxiJ5oFjon3edbh6iKoJs7TvGHD1GaI1dtIjPlpiI0hMvOYBlflmAFsD6fIqNL33s5P6EA4DYcHkd2FVpCfQv6ECuJW1rlWsGG%2F99VQIowwvzHy5a2GvpDdAOt3pvgUhCSvYV4UqNKKLAs0bwxcZCl3KC7jUhrus7TlynXIEdT7T4WzZ1lwkPHPgfZHhmDSTv%2BdiF7cmH7Sae3JL96ZM7VMJzM25wiQyjkoi9AyozWW%2BwoyU9Qrzc5j27DawFLHa7RU6h4TiuHGcw0v7ElPcTfqSwex0IJ9owTCpskgBvnNTJse%2BE14dYrAz0kDajDPXKOAt%2FnOw9djJ2izAGIv%2BhBeZYb06%2FEIuYnsbWdCzT3VxblRrdoTHLZs2AbASRgB%2Fj4ilfi7p%2BKbmD50IInOZS5JFcnDNB1yfPf%2FjBVLUI6hg8XsiYj%2FPPMN%2F8wsAGOqUBANpodFetIdrnESs%2FXrqF4XUrF7FGIBJVdOtxNpxU%2BdnXTohCO%2B7omTtvPLqjREbSkKkMtwgt86kGmM4j5Sm9whAWe6oEiR%2Fcp%2B4cMkMV9L28J9wvDD6mE%2FpaRN1DEGMrL2Jufq%2F4DAZqP7rKUnU1SXdY8TuXeGhsd2OR29OjMywOt3Q4dtpvzGfSaNK21qCbG%2Bje46jg3pNIk2WsJfuu9DvppoHQ&X-Amz-Signature=896746ce414e3353e2828a078a8fb73fcbedb89f2276eb63f9ef2bfa499f77cc&X-Amz-SignedHeaders=host&x-id=GetObject)
