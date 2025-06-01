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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2TCK5J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDgqzygj1q07lgSybu5nEZu3lB%2B0fjvAR%2FYRLgjVc0JwIgLJdgA7u5%2FSvVYjc3FKoI1iYcrFvec0mhTzVA9ZGltL8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi8WW2%2BzaJTaL0GQircAzzEsRzYDbuvMzT3%2FuvNqpqzzFi6gOpp%2FQ%2F5h%2B9BQV%2FSTYGBUoAaKldV1VGaQ44DRTDAipoOheg6q%2BIosSp%2BmiWiw0%2FJc73vaCNslv7rrwqLExWLyx5Pz8CtKs5sI3yU58NcFfJTkWpbTNcMmb41GjhtFsh5Rm4LwW324qlkSf0ediihjl%2FduFWSjQOyGqJmJ74RGZ54RTwJEbn3EHGIJLhjOUuLEvDDYeQUaivIkyCAVNiF8m0s6qso9JDGs4UWJAgSTO4oB8MjTnSuI4DZ3awl8BWIW5dHk3nsV07XgL0rkIRA7qLIbvU2L3QDFNXepNbvLHwsKOapaPu2v%2FRiCmMiDZ9eInr4nAUxWkTn8Qv0wvoJzMjebcKhVRjfcpUT71IQKDHUX8qFUpvLhdVTuMEKwgfrFpE%2FxPw7DFsPMJ%2FUPLKz%2FVELWaAB8ib6CCTeW0973ELJJAuz168w%2BpIVq%2Fp%2F%2FNQMF04zNgrBbey8GWe1IjVS%2FjjtHQEB2XHkxmqVrkRm%2BLNR%2FP3DohOZQ0%2F8zT6Te%2B3uCASOVIOGC3CUZnOphYNslvWqw7TX%2FnvRDBiicAlC%2FrWGyg7UNJO2q8Wut9rxOpM8EnMKvtecqXOAgdyLjdRAj9h9U2IDgQ3zMKOU8cEGOqUB8P46gdvHMqlyAaItnWmKzaA6y%2FYJMqTIg%2F2pEQaa358Crj5xgYfCqPOz3mqxiFXBFqBfofugu6ouOQC%2BuCOH%2Bfgt7ZgouHMmgasTDqEZ5bxlIWRIPExJvW0Q4LwDAUfAtAvhpfmgavhekLQQkjLTYaq80EDY6G%2BBy4OripSW7QFcRzr5TueMcPUTtpsQK4wLBj80%2FlT%2Fk3jg1YyS04FYEAVEymc2&X-Amz-Signature=122c7f111f9697494c1ef0c12b1ee7b2b9760fddf8565b8fb8d3cbec415553f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2TCK5J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDgqzygj1q07lgSybu5nEZu3lB%2B0fjvAR%2FYRLgjVc0JwIgLJdgA7u5%2FSvVYjc3FKoI1iYcrFvec0mhTzVA9ZGltL8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi8WW2%2BzaJTaL0GQircAzzEsRzYDbuvMzT3%2FuvNqpqzzFi6gOpp%2FQ%2F5h%2B9BQV%2FSTYGBUoAaKldV1VGaQ44DRTDAipoOheg6q%2BIosSp%2BmiWiw0%2FJc73vaCNslv7rrwqLExWLyx5Pz8CtKs5sI3yU58NcFfJTkWpbTNcMmb41GjhtFsh5Rm4LwW324qlkSf0ediihjl%2FduFWSjQOyGqJmJ74RGZ54RTwJEbn3EHGIJLhjOUuLEvDDYeQUaivIkyCAVNiF8m0s6qso9JDGs4UWJAgSTO4oB8MjTnSuI4DZ3awl8BWIW5dHk3nsV07XgL0rkIRA7qLIbvU2L3QDFNXepNbvLHwsKOapaPu2v%2FRiCmMiDZ9eInr4nAUxWkTn8Qv0wvoJzMjebcKhVRjfcpUT71IQKDHUX8qFUpvLhdVTuMEKwgfrFpE%2FxPw7DFsPMJ%2FUPLKz%2FVELWaAB8ib6CCTeW0973ELJJAuz168w%2BpIVq%2Fp%2F%2FNQMF04zNgrBbey8GWe1IjVS%2FjjtHQEB2XHkxmqVrkRm%2BLNR%2FP3DohOZQ0%2F8zT6Te%2B3uCASOVIOGC3CUZnOphYNslvWqw7TX%2FnvRDBiicAlC%2FrWGyg7UNJO2q8Wut9rxOpM8EnMKvtecqXOAgdyLjdRAj9h9U2IDgQ3zMKOU8cEGOqUB8P46gdvHMqlyAaItnWmKzaA6y%2FYJMqTIg%2F2pEQaa358Crj5xgYfCqPOz3mqxiFXBFqBfofugu6ouOQC%2BuCOH%2Bfgt7ZgouHMmgasTDqEZ5bxlIWRIPExJvW0Q4LwDAUfAtAvhpfmgavhekLQQkjLTYaq80EDY6G%2BBy4OripSW7QFcRzr5TueMcPUTtpsQK4wLBj80%2FlT%2Fk3jg1YyS04FYEAVEymc2&X-Amz-Signature=583197cc7a2f64cfde1da154482feb5a65d9676df6c786484e7e29369439d397&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2TCK5J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDgqzygj1q07lgSybu5nEZu3lB%2B0fjvAR%2FYRLgjVc0JwIgLJdgA7u5%2FSvVYjc3FKoI1iYcrFvec0mhTzVA9ZGltL8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi8WW2%2BzaJTaL0GQircAzzEsRzYDbuvMzT3%2FuvNqpqzzFi6gOpp%2FQ%2F5h%2B9BQV%2FSTYGBUoAaKldV1VGaQ44DRTDAipoOheg6q%2BIosSp%2BmiWiw0%2FJc73vaCNslv7rrwqLExWLyx5Pz8CtKs5sI3yU58NcFfJTkWpbTNcMmb41GjhtFsh5Rm4LwW324qlkSf0ediihjl%2FduFWSjQOyGqJmJ74RGZ54RTwJEbn3EHGIJLhjOUuLEvDDYeQUaivIkyCAVNiF8m0s6qso9JDGs4UWJAgSTO4oB8MjTnSuI4DZ3awl8BWIW5dHk3nsV07XgL0rkIRA7qLIbvU2L3QDFNXepNbvLHwsKOapaPu2v%2FRiCmMiDZ9eInr4nAUxWkTn8Qv0wvoJzMjebcKhVRjfcpUT71IQKDHUX8qFUpvLhdVTuMEKwgfrFpE%2FxPw7DFsPMJ%2FUPLKz%2FVELWaAB8ib6CCTeW0973ELJJAuz168w%2BpIVq%2Fp%2F%2FNQMF04zNgrBbey8GWe1IjVS%2FjjtHQEB2XHkxmqVrkRm%2BLNR%2FP3DohOZQ0%2F8zT6Te%2B3uCASOVIOGC3CUZnOphYNslvWqw7TX%2FnvRDBiicAlC%2FrWGyg7UNJO2q8Wut9rxOpM8EnMKvtecqXOAgdyLjdRAj9h9U2IDgQ3zMKOU8cEGOqUB8P46gdvHMqlyAaItnWmKzaA6y%2FYJMqTIg%2F2pEQaa358Crj5xgYfCqPOz3mqxiFXBFqBfofugu6ouOQC%2BuCOH%2Bfgt7ZgouHMmgasTDqEZ5bxlIWRIPExJvW0Q4LwDAUfAtAvhpfmgavhekLQQkjLTYaq80EDY6G%2BBy4OripSW7QFcRzr5TueMcPUTtpsQK4wLBj80%2FlT%2Fk3jg1YyS04FYEAVEymc2&X-Amz-Signature=694f1ab6836b12746b6cec31e1661b786039fdb07f84c52b10734012f7cb8805&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2TCK5J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDgqzygj1q07lgSybu5nEZu3lB%2B0fjvAR%2FYRLgjVc0JwIgLJdgA7u5%2FSvVYjc3FKoI1iYcrFvec0mhTzVA9ZGltL8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi8WW2%2BzaJTaL0GQircAzzEsRzYDbuvMzT3%2FuvNqpqzzFi6gOpp%2FQ%2F5h%2B9BQV%2FSTYGBUoAaKldV1VGaQ44DRTDAipoOheg6q%2BIosSp%2BmiWiw0%2FJc73vaCNslv7rrwqLExWLyx5Pz8CtKs5sI3yU58NcFfJTkWpbTNcMmb41GjhtFsh5Rm4LwW324qlkSf0ediihjl%2FduFWSjQOyGqJmJ74RGZ54RTwJEbn3EHGIJLhjOUuLEvDDYeQUaivIkyCAVNiF8m0s6qso9JDGs4UWJAgSTO4oB8MjTnSuI4DZ3awl8BWIW5dHk3nsV07XgL0rkIRA7qLIbvU2L3QDFNXepNbvLHwsKOapaPu2v%2FRiCmMiDZ9eInr4nAUxWkTn8Qv0wvoJzMjebcKhVRjfcpUT71IQKDHUX8qFUpvLhdVTuMEKwgfrFpE%2FxPw7DFsPMJ%2FUPLKz%2FVELWaAB8ib6CCTeW0973ELJJAuz168w%2BpIVq%2Fp%2F%2FNQMF04zNgrBbey8GWe1IjVS%2FjjtHQEB2XHkxmqVrkRm%2BLNR%2FP3DohOZQ0%2F8zT6Te%2B3uCASOVIOGC3CUZnOphYNslvWqw7TX%2FnvRDBiicAlC%2FrWGyg7UNJO2q8Wut9rxOpM8EnMKvtecqXOAgdyLjdRAj9h9U2IDgQ3zMKOU8cEGOqUB8P46gdvHMqlyAaItnWmKzaA6y%2FYJMqTIg%2F2pEQaa358Crj5xgYfCqPOz3mqxiFXBFqBfofugu6ouOQC%2BuCOH%2Bfgt7ZgouHMmgasTDqEZ5bxlIWRIPExJvW0Q4LwDAUfAtAvhpfmgavhekLQQkjLTYaq80EDY6G%2BBy4OripSW7QFcRzr5TueMcPUTtpsQK4wLBj80%2FlT%2Fk3jg1YyS04FYEAVEymc2&X-Amz-Signature=7343720252b2000231c2b8c42613a356fb1e7c3c7044de948414b8b767ab9fba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2TCK5J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDgqzygj1q07lgSybu5nEZu3lB%2B0fjvAR%2FYRLgjVc0JwIgLJdgA7u5%2FSvVYjc3FKoI1iYcrFvec0mhTzVA9ZGltL8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi8WW2%2BzaJTaL0GQircAzzEsRzYDbuvMzT3%2FuvNqpqzzFi6gOpp%2FQ%2F5h%2B9BQV%2FSTYGBUoAaKldV1VGaQ44DRTDAipoOheg6q%2BIosSp%2BmiWiw0%2FJc73vaCNslv7rrwqLExWLyx5Pz8CtKs5sI3yU58NcFfJTkWpbTNcMmb41GjhtFsh5Rm4LwW324qlkSf0ediihjl%2FduFWSjQOyGqJmJ74RGZ54RTwJEbn3EHGIJLhjOUuLEvDDYeQUaivIkyCAVNiF8m0s6qso9JDGs4UWJAgSTO4oB8MjTnSuI4DZ3awl8BWIW5dHk3nsV07XgL0rkIRA7qLIbvU2L3QDFNXepNbvLHwsKOapaPu2v%2FRiCmMiDZ9eInr4nAUxWkTn8Qv0wvoJzMjebcKhVRjfcpUT71IQKDHUX8qFUpvLhdVTuMEKwgfrFpE%2FxPw7DFsPMJ%2FUPLKz%2FVELWaAB8ib6CCTeW0973ELJJAuz168w%2BpIVq%2Fp%2F%2FNQMF04zNgrBbey8GWe1IjVS%2FjjtHQEB2XHkxmqVrkRm%2BLNR%2FP3DohOZQ0%2F8zT6Te%2B3uCASOVIOGC3CUZnOphYNslvWqw7TX%2FnvRDBiicAlC%2FrWGyg7UNJO2q8Wut9rxOpM8EnMKvtecqXOAgdyLjdRAj9h9U2IDgQ3zMKOU8cEGOqUB8P46gdvHMqlyAaItnWmKzaA6y%2FYJMqTIg%2F2pEQaa358Crj5xgYfCqPOz3mqxiFXBFqBfofugu6ouOQC%2BuCOH%2Bfgt7ZgouHMmgasTDqEZ5bxlIWRIPExJvW0Q4LwDAUfAtAvhpfmgavhekLQQkjLTYaq80EDY6G%2BBy4OripSW7QFcRzr5TueMcPUTtpsQK4wLBj80%2FlT%2Fk3jg1YyS04FYEAVEymc2&X-Amz-Signature=5cf0d2a1ee1b77ede3011305f959c30471108115cf3cb0911348576d96da9798&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2TCK5J%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDgqzygj1q07lgSybu5nEZu3lB%2B0fjvAR%2FYRLgjVc0JwIgLJdgA7u5%2FSvVYjc3FKoI1iYcrFvec0mhTzVA9ZGltL8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi8WW2%2BzaJTaL0GQircAzzEsRzYDbuvMzT3%2FuvNqpqzzFi6gOpp%2FQ%2F5h%2B9BQV%2FSTYGBUoAaKldV1VGaQ44DRTDAipoOheg6q%2BIosSp%2BmiWiw0%2FJc73vaCNslv7rrwqLExWLyx5Pz8CtKs5sI3yU58NcFfJTkWpbTNcMmb41GjhtFsh5Rm4LwW324qlkSf0ediihjl%2FduFWSjQOyGqJmJ74RGZ54RTwJEbn3EHGIJLhjOUuLEvDDYeQUaivIkyCAVNiF8m0s6qso9JDGs4UWJAgSTO4oB8MjTnSuI4DZ3awl8BWIW5dHk3nsV07XgL0rkIRA7qLIbvU2L3QDFNXepNbvLHwsKOapaPu2v%2FRiCmMiDZ9eInr4nAUxWkTn8Qv0wvoJzMjebcKhVRjfcpUT71IQKDHUX8qFUpvLhdVTuMEKwgfrFpE%2FxPw7DFsPMJ%2FUPLKz%2FVELWaAB8ib6CCTeW0973ELJJAuz168w%2BpIVq%2Fp%2F%2FNQMF04zNgrBbey8GWe1IjVS%2FjjtHQEB2XHkxmqVrkRm%2BLNR%2FP3DohOZQ0%2F8zT6Te%2B3uCASOVIOGC3CUZnOphYNslvWqw7TX%2FnvRDBiicAlC%2FrWGyg7UNJO2q8Wut9rxOpM8EnMKvtecqXOAgdyLjdRAj9h9U2IDgQ3zMKOU8cEGOqUB8P46gdvHMqlyAaItnWmKzaA6y%2FYJMqTIg%2F2pEQaa358Crj5xgYfCqPOz3mqxiFXBFqBfofugu6ouOQC%2BuCOH%2Bfgt7ZgouHMmgasTDqEZ5bxlIWRIPExJvW0Q4LwDAUfAtAvhpfmgavhekLQQkjLTYaq80EDY6G%2BBy4OripSW7QFcRzr5TueMcPUTtpsQK4wLBj80%2FlT%2Fk3jg1YyS04FYEAVEymc2&X-Amz-Signature=c60133e22351424ab4325c6417b776eebb2e0c09a68e4d2753067c047119c93f&X-Amz-SignedHeaders=host&x-id=GetObject)
