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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB4H433%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ8iKuuZjb2NJCJx27yqRPowEcmQJOxn%2FDou71AHqM8AiEA1CoAHJUtgrDprAHhNPeQ%2BdRGHoEmZzcJ%2Bm92SYavEfMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHEccKjZhbb3bqNdyrcAweqBCFBIzrVUg5mx4lniOADEwd2uDI9X1EqkhnQEd%2FmVezyaIx01%2FXgTd5iiBpx3soZFt6FVdKKZqKS2aR78ZJzdYyyhAw6sXMUmDAbG2uZJKo3CT2ZIE%2BbXj0IIP716PIANE%2BwxYeCZjIuE7tnGt%2Bxb%2FxFgVx4L%2BNa%2FXZGZTgQc27YCXgIAbbAPYU%2BfHlho9NR%2BirDCkOLYad4fyPephqPBdnlRlKupVgbUTvXDhnjFOlQYbi7dHDdxrWRIgCpaXEy%2BnnMJAn39sKpPbp5k96eYUTBvjmRDfFycl1H9lUewEg0fk1TCYW4J4632EKlSBduEGO1ts9M%2BJxEogM4HbqkO1g%2FXyfpAnFmVM8Nnm90VqQtkwKv%2BhblGY1d%2BMMm2kd53ZDGM%2B030R5A4Rx4p5%2FuOZs55iq64CcjuML69xjFVneULu11yP92Q1eJ5cqPnGFHl6iR7fosoMFhGBj2Qqujan5FbkxjVNH9n%2FtjAwRmnZtMt4SqD8Bk7W%2Bz7RPE2wQNgwMshCQOAPN1kv3FTxJJARD9I3G0UumuKmhHyniGx%2BzoxDos9AEHFoBmKju6R%2BLhD%2Fr%2BvgCIX2JY0vFhLq7oHsv9OyLxjtcLcDnkfMOS1aV2VuzQPBQstRKKMO23pcIGOqUBl8FKM8tLJT%2F2Udab8uQWana4qx7V44psTujBDrEc6M912exHkWCzcPoPzJW0vdXXqz7gz6O%2BPgYIomDQKO%2BKYJAFKvWC44rGZHcH%2BUsRCdcR7QZ7%2Ftywh7lsKf%2BNwGSAeo9Izmbr9OS%2FLvJndnoSCX4Qh022MacF%2FscCqpRszLZu0Wg%2BQvN8Kj7uAn7f8YvI2AjRgH9FRyqnACzbcKS%2FuqYHvT1i&X-Amz-Signature=662b96f7d54130f030ee818fd1e4b587f28d77db3d8a7935540e182a54bc6be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB4H433%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ8iKuuZjb2NJCJx27yqRPowEcmQJOxn%2FDou71AHqM8AiEA1CoAHJUtgrDprAHhNPeQ%2BdRGHoEmZzcJ%2Bm92SYavEfMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHEccKjZhbb3bqNdyrcAweqBCFBIzrVUg5mx4lniOADEwd2uDI9X1EqkhnQEd%2FmVezyaIx01%2FXgTd5iiBpx3soZFt6FVdKKZqKS2aR78ZJzdYyyhAw6sXMUmDAbG2uZJKo3CT2ZIE%2BbXj0IIP716PIANE%2BwxYeCZjIuE7tnGt%2Bxb%2FxFgVx4L%2BNa%2FXZGZTgQc27YCXgIAbbAPYU%2BfHlho9NR%2BirDCkOLYad4fyPephqPBdnlRlKupVgbUTvXDhnjFOlQYbi7dHDdxrWRIgCpaXEy%2BnnMJAn39sKpPbp5k96eYUTBvjmRDfFycl1H9lUewEg0fk1TCYW4J4632EKlSBduEGO1ts9M%2BJxEogM4HbqkO1g%2FXyfpAnFmVM8Nnm90VqQtkwKv%2BhblGY1d%2BMMm2kd53ZDGM%2B030R5A4Rx4p5%2FuOZs55iq64CcjuML69xjFVneULu11yP92Q1eJ5cqPnGFHl6iR7fosoMFhGBj2Qqujan5FbkxjVNH9n%2FtjAwRmnZtMt4SqD8Bk7W%2Bz7RPE2wQNgwMshCQOAPN1kv3FTxJJARD9I3G0UumuKmhHyniGx%2BzoxDos9AEHFoBmKju6R%2BLhD%2Fr%2BvgCIX2JY0vFhLq7oHsv9OyLxjtcLcDnkfMOS1aV2VuzQPBQstRKKMO23pcIGOqUBl8FKM8tLJT%2F2Udab8uQWana4qx7V44psTujBDrEc6M912exHkWCzcPoPzJW0vdXXqz7gz6O%2BPgYIomDQKO%2BKYJAFKvWC44rGZHcH%2BUsRCdcR7QZ7%2Ftywh7lsKf%2BNwGSAeo9Izmbr9OS%2FLvJndnoSCX4Qh022MacF%2FscCqpRszLZu0Wg%2BQvN8Kj7uAn7f8YvI2AjRgH9FRyqnACzbcKS%2FuqYHvT1i&X-Amz-Signature=8f05972cbcdfe7116b7614b3e44c0e3013a912412960b12a25faaaf220fecdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB4H433%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ8iKuuZjb2NJCJx27yqRPowEcmQJOxn%2FDou71AHqM8AiEA1CoAHJUtgrDprAHhNPeQ%2BdRGHoEmZzcJ%2Bm92SYavEfMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHEccKjZhbb3bqNdyrcAweqBCFBIzrVUg5mx4lniOADEwd2uDI9X1EqkhnQEd%2FmVezyaIx01%2FXgTd5iiBpx3soZFt6FVdKKZqKS2aR78ZJzdYyyhAw6sXMUmDAbG2uZJKo3CT2ZIE%2BbXj0IIP716PIANE%2BwxYeCZjIuE7tnGt%2Bxb%2FxFgVx4L%2BNa%2FXZGZTgQc27YCXgIAbbAPYU%2BfHlho9NR%2BirDCkOLYad4fyPephqPBdnlRlKupVgbUTvXDhnjFOlQYbi7dHDdxrWRIgCpaXEy%2BnnMJAn39sKpPbp5k96eYUTBvjmRDfFycl1H9lUewEg0fk1TCYW4J4632EKlSBduEGO1ts9M%2BJxEogM4HbqkO1g%2FXyfpAnFmVM8Nnm90VqQtkwKv%2BhblGY1d%2BMMm2kd53ZDGM%2B030R5A4Rx4p5%2FuOZs55iq64CcjuML69xjFVneULu11yP92Q1eJ5cqPnGFHl6iR7fosoMFhGBj2Qqujan5FbkxjVNH9n%2FtjAwRmnZtMt4SqD8Bk7W%2Bz7RPE2wQNgwMshCQOAPN1kv3FTxJJARD9I3G0UumuKmhHyniGx%2BzoxDos9AEHFoBmKju6R%2BLhD%2Fr%2BvgCIX2JY0vFhLq7oHsv9OyLxjtcLcDnkfMOS1aV2VuzQPBQstRKKMO23pcIGOqUBl8FKM8tLJT%2F2Udab8uQWana4qx7V44psTujBDrEc6M912exHkWCzcPoPzJW0vdXXqz7gz6O%2BPgYIomDQKO%2BKYJAFKvWC44rGZHcH%2BUsRCdcR7QZ7%2Ftywh7lsKf%2BNwGSAeo9Izmbr9OS%2FLvJndnoSCX4Qh022MacF%2FscCqpRszLZu0Wg%2BQvN8Kj7uAn7f8YvI2AjRgH9FRyqnACzbcKS%2FuqYHvT1i&X-Amz-Signature=412f632d91ae567f3f3d15f2f7c0bbbb54573db16c47bac140ff179b79bc0f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB4H433%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ8iKuuZjb2NJCJx27yqRPowEcmQJOxn%2FDou71AHqM8AiEA1CoAHJUtgrDprAHhNPeQ%2BdRGHoEmZzcJ%2Bm92SYavEfMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHEccKjZhbb3bqNdyrcAweqBCFBIzrVUg5mx4lniOADEwd2uDI9X1EqkhnQEd%2FmVezyaIx01%2FXgTd5iiBpx3soZFt6FVdKKZqKS2aR78ZJzdYyyhAw6sXMUmDAbG2uZJKo3CT2ZIE%2BbXj0IIP716PIANE%2BwxYeCZjIuE7tnGt%2Bxb%2FxFgVx4L%2BNa%2FXZGZTgQc27YCXgIAbbAPYU%2BfHlho9NR%2BirDCkOLYad4fyPephqPBdnlRlKupVgbUTvXDhnjFOlQYbi7dHDdxrWRIgCpaXEy%2BnnMJAn39sKpPbp5k96eYUTBvjmRDfFycl1H9lUewEg0fk1TCYW4J4632EKlSBduEGO1ts9M%2BJxEogM4HbqkO1g%2FXyfpAnFmVM8Nnm90VqQtkwKv%2BhblGY1d%2BMMm2kd53ZDGM%2B030R5A4Rx4p5%2FuOZs55iq64CcjuML69xjFVneULu11yP92Q1eJ5cqPnGFHl6iR7fosoMFhGBj2Qqujan5FbkxjVNH9n%2FtjAwRmnZtMt4SqD8Bk7W%2Bz7RPE2wQNgwMshCQOAPN1kv3FTxJJARD9I3G0UumuKmhHyniGx%2BzoxDos9AEHFoBmKju6R%2BLhD%2Fr%2BvgCIX2JY0vFhLq7oHsv9OyLxjtcLcDnkfMOS1aV2VuzQPBQstRKKMO23pcIGOqUBl8FKM8tLJT%2F2Udab8uQWana4qx7V44psTujBDrEc6M912exHkWCzcPoPzJW0vdXXqz7gz6O%2BPgYIomDQKO%2BKYJAFKvWC44rGZHcH%2BUsRCdcR7QZ7%2Ftywh7lsKf%2BNwGSAeo9Izmbr9OS%2FLvJndnoSCX4Qh022MacF%2FscCqpRszLZu0Wg%2BQvN8Kj7uAn7f8YvI2AjRgH9FRyqnACzbcKS%2FuqYHvT1i&X-Amz-Signature=1f3589507fe4bd4a7b82177b4c77ed6f53b1fd2fc92d11597d7cb3810528a4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB4H433%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ8iKuuZjb2NJCJx27yqRPowEcmQJOxn%2FDou71AHqM8AiEA1CoAHJUtgrDprAHhNPeQ%2BdRGHoEmZzcJ%2Bm92SYavEfMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHEccKjZhbb3bqNdyrcAweqBCFBIzrVUg5mx4lniOADEwd2uDI9X1EqkhnQEd%2FmVezyaIx01%2FXgTd5iiBpx3soZFt6FVdKKZqKS2aR78ZJzdYyyhAw6sXMUmDAbG2uZJKo3CT2ZIE%2BbXj0IIP716PIANE%2BwxYeCZjIuE7tnGt%2Bxb%2FxFgVx4L%2BNa%2FXZGZTgQc27YCXgIAbbAPYU%2BfHlho9NR%2BirDCkOLYad4fyPephqPBdnlRlKupVgbUTvXDhnjFOlQYbi7dHDdxrWRIgCpaXEy%2BnnMJAn39sKpPbp5k96eYUTBvjmRDfFycl1H9lUewEg0fk1TCYW4J4632EKlSBduEGO1ts9M%2BJxEogM4HbqkO1g%2FXyfpAnFmVM8Nnm90VqQtkwKv%2BhblGY1d%2BMMm2kd53ZDGM%2B030R5A4Rx4p5%2FuOZs55iq64CcjuML69xjFVneULu11yP92Q1eJ5cqPnGFHl6iR7fosoMFhGBj2Qqujan5FbkxjVNH9n%2FtjAwRmnZtMt4SqD8Bk7W%2Bz7RPE2wQNgwMshCQOAPN1kv3FTxJJARD9I3G0UumuKmhHyniGx%2BzoxDos9AEHFoBmKju6R%2BLhD%2Fr%2BvgCIX2JY0vFhLq7oHsv9OyLxjtcLcDnkfMOS1aV2VuzQPBQstRKKMO23pcIGOqUBl8FKM8tLJT%2F2Udab8uQWana4qx7V44psTujBDrEc6M912exHkWCzcPoPzJW0vdXXqz7gz6O%2BPgYIomDQKO%2BKYJAFKvWC44rGZHcH%2BUsRCdcR7QZ7%2Ftywh7lsKf%2BNwGSAeo9Izmbr9OS%2FLvJndnoSCX4Qh022MacF%2FscCqpRszLZu0Wg%2BQvN8Kj7uAn7f8YvI2AjRgH9FRyqnACzbcKS%2FuqYHvT1i&X-Amz-Signature=ca3e7b8e6a322de524162f9cbb418e937d5f11f9cdf7ba026b93b10b7e666621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IB4H433%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ8iKuuZjb2NJCJx27yqRPowEcmQJOxn%2FDou71AHqM8AiEA1CoAHJUtgrDprAHhNPeQ%2BdRGHoEmZzcJ%2Bm92SYavEfMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHEccKjZhbb3bqNdyrcAweqBCFBIzrVUg5mx4lniOADEwd2uDI9X1EqkhnQEd%2FmVezyaIx01%2FXgTd5iiBpx3soZFt6FVdKKZqKS2aR78ZJzdYyyhAw6sXMUmDAbG2uZJKo3CT2ZIE%2BbXj0IIP716PIANE%2BwxYeCZjIuE7tnGt%2Bxb%2FxFgVx4L%2BNa%2FXZGZTgQc27YCXgIAbbAPYU%2BfHlho9NR%2BirDCkOLYad4fyPephqPBdnlRlKupVgbUTvXDhnjFOlQYbi7dHDdxrWRIgCpaXEy%2BnnMJAn39sKpPbp5k96eYUTBvjmRDfFycl1H9lUewEg0fk1TCYW4J4632EKlSBduEGO1ts9M%2BJxEogM4HbqkO1g%2FXyfpAnFmVM8Nnm90VqQtkwKv%2BhblGY1d%2BMMm2kd53ZDGM%2B030R5A4Rx4p5%2FuOZs55iq64CcjuML69xjFVneULu11yP92Q1eJ5cqPnGFHl6iR7fosoMFhGBj2Qqujan5FbkxjVNH9n%2FtjAwRmnZtMt4SqD8Bk7W%2Bz7RPE2wQNgwMshCQOAPN1kv3FTxJJARD9I3G0UumuKmhHyniGx%2BzoxDos9AEHFoBmKju6R%2BLhD%2Fr%2BvgCIX2JY0vFhLq7oHsv9OyLxjtcLcDnkfMOS1aV2VuzQPBQstRKKMO23pcIGOqUBl8FKM8tLJT%2F2Udab8uQWana4qx7V44psTujBDrEc6M912exHkWCzcPoPzJW0vdXXqz7gz6O%2BPgYIomDQKO%2BKYJAFKvWC44rGZHcH%2BUsRCdcR7QZ7%2Ftywh7lsKf%2BNwGSAeo9Izmbr9OS%2FLvJndnoSCX4Qh022MacF%2FscCqpRszLZu0Wg%2BQvN8Kj7uAn7f8YvI2AjRgH9FRyqnACzbcKS%2FuqYHvT1i&X-Amz-Signature=49ab36a034f32f9bec59b640c15e6c84b4d602d9842a16e652b3368c5ad605e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
