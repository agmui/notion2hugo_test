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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=cdeca075adc1981cb2cf99ca916d6ec2885e15d42ed88c0d96073c878173c0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=8a9ee3cacbe63a1e447d42a7cac9e274ee6ef4e8f9ff10f5b1b1e68f55c83abd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=25f872fd4684f6ecad4ec4e1fbaa92048734e65de04a1f5023727ae011e485f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=6940299645dc9184978c6cfddca83475dd75cf455cf4ef4107cef7985e552e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=8ddf3809c700da6595426622f353e5caf17d8593b4af26b23ca94c8dbc8e4196&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZISASAO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVjfQTgLErFU5dpY%2BfzVR3GGL7ak5%2BJTdKn4HZ0rquMAiEAy9o9hlLZ9eBFLASegDkwk64q0uB6ful3WjsFwOQXATkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Brp4X8MiadlxfQkCrcA%2BvUvFtVZzQlZ3taut%2FTTdF%2FMWSEeHUgG7p%2Bq6aO7tt0VBR304vbSf7Us9fK02NcKmurd9%2BawAna2D20aLUXi%2FRhAX%2FsP6aoArkiIvWoR86JbCRYLviKxRqQSHymzevCW7G7rAaJ0OSO3Jatqq5Rc9siosHg7UWfQBWR3nSdG4cTTVUy41DOBSOrq8naYoGGt5zHkRAyNkZtMzsry18NNub5Eb4BnzyJvnsQuXi9mpYMvzdI2i4v6eyI9ANAQgCnpk1UCwlLJ8Uh%2FQdgMh8xxIFnaD2%2BPmTB839E6NSajAk0bYIdXr02ti1O1kXiWMMCH6yueiYISnjKUXRrizXAd3lnt8F%2B5dhGQ%2B5CbSbkIKj8ujm5Qc7XibQ3MAmUAK5BqntrTBaoGLwM6t%2Bn24MuBPjEyf%2Fnu8ixrNM9ODf%2B%2FAy4%2FlFjbM06dTFd9s8ge%2Ba%2Bhy8in8Lk5kpryxvS8obTCox1RTw0%2Bgd73Gf6u%2FSEoalZeBHr4V7zk81xfThkLDrAVJQ9UGG36PuMSjmlEIGPAfOzfVjDxdVikdxTctA7AwSkCtct%2B%2F%2ByhYJDUwwx9CS%2BkvjWhE61kiKIilgZo%2B3Wyv45qdsZ7DeUFSI6%2BQpu25spZtrLPfHMwRqAbOL2MISQsb0GOqUBfMqeMGFQ6twGSTQximUNirElw4rKET3js%2FTxooYCCZzKnh9kuOuVrQtNADjZak6CXDEsYgWReqEIq1xk4AkN898jeygQLUypu%2BQInBppNEpjG2vLpfewOeO3IV6QbUtfvtz1BKcrS35f7DahbkW8RNYFfb2Ry%2BJXKal2H9aD7K7OW%2BrTQWXTX1y7Lv9kf1hrIsbx7JiZHsudAiszNlpamaqJ9u6r&X-Amz-Signature=4da4a4fedb10a9ef20a9723e4f877046acd2857407e2e944cb9bc068f6a34ad7&X-Amz-SignedHeaders=host&x-id=GetObject)
