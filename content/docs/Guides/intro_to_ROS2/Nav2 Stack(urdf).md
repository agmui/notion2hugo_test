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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOM5AID%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPpHYllDkphDdZOebn1%2Ffvcqzx2lJwbrQYlUvMH2o2GAiBYSgmBFJT0lscm6Qasmff0TUruLjyvngSkki6m4Wv7AiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnFVhRXwsfCD0cZHKtwDZ%2BJK7FqdBN5m1HM64QoSNO09IkGe6qFJ97m5ts%2B9q%2BmXD%2FH%2FOzsEzIEx9DfUTEA0w1Hbb2iYoRT7Zu3bHPzuA%2Bdec2wsZYWV7NvB8qEIuJ3C%2Bz1t%2BZFdm8UwkwXI4wJtrENtGQJSeqbMaEz46jB09NKj01KRFPqjF9oacNJMuidvv5Nxv2YWzNqV30PQiA%2BXtk3Jme2%2BuXeJxuNkBQsPdicxhq2RFd%2BZbiL%2FDYJ%2Bo1ZREt3ezvEqHJaIQEgjE55ibS1HdpzizIlY%2F%2FXYzzIp7Z7S%2F5R8XRwoJbZh7O5qrPPBjhwBqxcOVr%2BslvYfPFLnuDDSADWN6ycf7LN3wxEhOo6EkuIzRUsVHHVC6FyIl3bCcXrsqRe32Ou5lsn8slGkB7LV2IIMepfnALbRcCnc3q6xJKqcJgvnFbnwbvERyqqVcfRP183KTrEL%2FhPn7T6dHymw3MTTGjCQzYQZ8P%2BvU%2BbsGTboREZkyG93SL9qcGgXcoz%2FvJyEdNvgFb5TB66sichyzwqDqbfNriD8YnaKj5LbJnBi98n%2Fr7n1Yw9kilhsIX0Xo6JrCo9ekSB8BDbK%2BRGyAu9Bu7o7zkPLbu0SWZspdcLtG2v%2BsTQ02gxTnxNU5fgRIG4MyexLVnEw%2BbXYvQY6pgG7Qxv6GEBv%2Bk%2F3656DhOIRYTZz7mnCuiYUih9LrE0fyYXaaFKMwx%2BIcRAtLvvatoYXHy8u%2BMhC2mkoQBONYO9DCzUI2pIPDW9uYQ%2BW0a82AnWUA%2BjnyImEuXMMdZ4%2BBmT4xNRY%2F9dgR6qUbq27%2FFnVJUyvn3vyb4Liv2mW4SDPcsD%2Fgag3FZSNqe8j1d8336QAK4pWrnQPHV%2Bew2Ofb39lDS8Mta8u&X-Amz-Signature=21401e69b7bc430b23a2d2e3c3dc22beadc4bf5078fc0c53efdb0f5dace3c64d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOM5AID%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPpHYllDkphDdZOebn1%2Ffvcqzx2lJwbrQYlUvMH2o2GAiBYSgmBFJT0lscm6Qasmff0TUruLjyvngSkki6m4Wv7AiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnFVhRXwsfCD0cZHKtwDZ%2BJK7FqdBN5m1HM64QoSNO09IkGe6qFJ97m5ts%2B9q%2BmXD%2FH%2FOzsEzIEx9DfUTEA0w1Hbb2iYoRT7Zu3bHPzuA%2Bdec2wsZYWV7NvB8qEIuJ3C%2Bz1t%2BZFdm8UwkwXI4wJtrENtGQJSeqbMaEz46jB09NKj01KRFPqjF9oacNJMuidvv5Nxv2YWzNqV30PQiA%2BXtk3Jme2%2BuXeJxuNkBQsPdicxhq2RFd%2BZbiL%2FDYJ%2Bo1ZREt3ezvEqHJaIQEgjE55ibS1HdpzizIlY%2F%2FXYzzIp7Z7S%2F5R8XRwoJbZh7O5qrPPBjhwBqxcOVr%2BslvYfPFLnuDDSADWN6ycf7LN3wxEhOo6EkuIzRUsVHHVC6FyIl3bCcXrsqRe32Ou5lsn8slGkB7LV2IIMepfnALbRcCnc3q6xJKqcJgvnFbnwbvERyqqVcfRP183KTrEL%2FhPn7T6dHymw3MTTGjCQzYQZ8P%2BvU%2BbsGTboREZkyG93SL9qcGgXcoz%2FvJyEdNvgFb5TB66sichyzwqDqbfNriD8YnaKj5LbJnBi98n%2Fr7n1Yw9kilhsIX0Xo6JrCo9ekSB8BDbK%2BRGyAu9Bu7o7zkPLbu0SWZspdcLtG2v%2BsTQ02gxTnxNU5fgRIG4MyexLVnEw%2BbXYvQY6pgG7Qxv6GEBv%2Bk%2F3656DhOIRYTZz7mnCuiYUih9LrE0fyYXaaFKMwx%2BIcRAtLvvatoYXHy8u%2BMhC2mkoQBONYO9DCzUI2pIPDW9uYQ%2BW0a82AnWUA%2BjnyImEuXMMdZ4%2BBmT4xNRY%2F9dgR6qUbq27%2FFnVJUyvn3vyb4Liv2mW4SDPcsD%2Fgag3FZSNqe8j1d8336QAK4pWrnQPHV%2Bew2Ofb39lDS8Mta8u&X-Amz-Signature=bd6d405b0dea61b20e054cec55480d606fcb00700f26332b662c3252e8efa8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOM5AID%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPpHYllDkphDdZOebn1%2Ffvcqzx2lJwbrQYlUvMH2o2GAiBYSgmBFJT0lscm6Qasmff0TUruLjyvngSkki6m4Wv7AiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnFVhRXwsfCD0cZHKtwDZ%2BJK7FqdBN5m1HM64QoSNO09IkGe6qFJ97m5ts%2B9q%2BmXD%2FH%2FOzsEzIEx9DfUTEA0w1Hbb2iYoRT7Zu3bHPzuA%2Bdec2wsZYWV7NvB8qEIuJ3C%2Bz1t%2BZFdm8UwkwXI4wJtrENtGQJSeqbMaEz46jB09NKj01KRFPqjF9oacNJMuidvv5Nxv2YWzNqV30PQiA%2BXtk3Jme2%2BuXeJxuNkBQsPdicxhq2RFd%2BZbiL%2FDYJ%2Bo1ZREt3ezvEqHJaIQEgjE55ibS1HdpzizIlY%2F%2FXYzzIp7Z7S%2F5R8XRwoJbZh7O5qrPPBjhwBqxcOVr%2BslvYfPFLnuDDSADWN6ycf7LN3wxEhOo6EkuIzRUsVHHVC6FyIl3bCcXrsqRe32Ou5lsn8slGkB7LV2IIMepfnALbRcCnc3q6xJKqcJgvnFbnwbvERyqqVcfRP183KTrEL%2FhPn7T6dHymw3MTTGjCQzYQZ8P%2BvU%2BbsGTboREZkyG93SL9qcGgXcoz%2FvJyEdNvgFb5TB66sichyzwqDqbfNriD8YnaKj5LbJnBi98n%2Fr7n1Yw9kilhsIX0Xo6JrCo9ekSB8BDbK%2BRGyAu9Bu7o7zkPLbu0SWZspdcLtG2v%2BsTQ02gxTnxNU5fgRIG4MyexLVnEw%2BbXYvQY6pgG7Qxv6GEBv%2Bk%2F3656DhOIRYTZz7mnCuiYUih9LrE0fyYXaaFKMwx%2BIcRAtLvvatoYXHy8u%2BMhC2mkoQBONYO9DCzUI2pIPDW9uYQ%2BW0a82AnWUA%2BjnyImEuXMMdZ4%2BBmT4xNRY%2F9dgR6qUbq27%2FFnVJUyvn3vyb4Liv2mW4SDPcsD%2Fgag3FZSNqe8j1d8336QAK4pWrnQPHV%2Bew2Ofb39lDS8Mta8u&X-Amz-Signature=79706f861179a1b287d8e5078f7065666457e416d5b128e044f2975dddc0bf9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOM5AID%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPpHYllDkphDdZOebn1%2Ffvcqzx2lJwbrQYlUvMH2o2GAiBYSgmBFJT0lscm6Qasmff0TUruLjyvngSkki6m4Wv7AiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnFVhRXwsfCD0cZHKtwDZ%2BJK7FqdBN5m1HM64QoSNO09IkGe6qFJ97m5ts%2B9q%2BmXD%2FH%2FOzsEzIEx9DfUTEA0w1Hbb2iYoRT7Zu3bHPzuA%2Bdec2wsZYWV7NvB8qEIuJ3C%2Bz1t%2BZFdm8UwkwXI4wJtrENtGQJSeqbMaEz46jB09NKj01KRFPqjF9oacNJMuidvv5Nxv2YWzNqV30PQiA%2BXtk3Jme2%2BuXeJxuNkBQsPdicxhq2RFd%2BZbiL%2FDYJ%2Bo1ZREt3ezvEqHJaIQEgjE55ibS1HdpzizIlY%2F%2FXYzzIp7Z7S%2F5R8XRwoJbZh7O5qrPPBjhwBqxcOVr%2BslvYfPFLnuDDSADWN6ycf7LN3wxEhOo6EkuIzRUsVHHVC6FyIl3bCcXrsqRe32Ou5lsn8slGkB7LV2IIMepfnALbRcCnc3q6xJKqcJgvnFbnwbvERyqqVcfRP183KTrEL%2FhPn7T6dHymw3MTTGjCQzYQZ8P%2BvU%2BbsGTboREZkyG93SL9qcGgXcoz%2FvJyEdNvgFb5TB66sichyzwqDqbfNriD8YnaKj5LbJnBi98n%2Fr7n1Yw9kilhsIX0Xo6JrCo9ekSB8BDbK%2BRGyAu9Bu7o7zkPLbu0SWZspdcLtG2v%2BsTQ02gxTnxNU5fgRIG4MyexLVnEw%2BbXYvQY6pgG7Qxv6GEBv%2Bk%2F3656DhOIRYTZz7mnCuiYUih9LrE0fyYXaaFKMwx%2BIcRAtLvvatoYXHy8u%2BMhC2mkoQBONYO9DCzUI2pIPDW9uYQ%2BW0a82AnWUA%2BjnyImEuXMMdZ4%2BBmT4xNRY%2F9dgR6qUbq27%2FFnVJUyvn3vyb4Liv2mW4SDPcsD%2Fgag3FZSNqe8j1d8336QAK4pWrnQPHV%2Bew2Ofb39lDS8Mta8u&X-Amz-Signature=5a206cfc11ac62403fa3265b0a85d69f025c6035e2ceec42be3adf5103f20a77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOM5AID%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPpHYllDkphDdZOebn1%2Ffvcqzx2lJwbrQYlUvMH2o2GAiBYSgmBFJT0lscm6Qasmff0TUruLjyvngSkki6m4Wv7AiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnFVhRXwsfCD0cZHKtwDZ%2BJK7FqdBN5m1HM64QoSNO09IkGe6qFJ97m5ts%2B9q%2BmXD%2FH%2FOzsEzIEx9DfUTEA0w1Hbb2iYoRT7Zu3bHPzuA%2Bdec2wsZYWV7NvB8qEIuJ3C%2Bz1t%2BZFdm8UwkwXI4wJtrENtGQJSeqbMaEz46jB09NKj01KRFPqjF9oacNJMuidvv5Nxv2YWzNqV30PQiA%2BXtk3Jme2%2BuXeJxuNkBQsPdicxhq2RFd%2BZbiL%2FDYJ%2Bo1ZREt3ezvEqHJaIQEgjE55ibS1HdpzizIlY%2F%2FXYzzIp7Z7S%2F5R8XRwoJbZh7O5qrPPBjhwBqxcOVr%2BslvYfPFLnuDDSADWN6ycf7LN3wxEhOo6EkuIzRUsVHHVC6FyIl3bCcXrsqRe32Ou5lsn8slGkB7LV2IIMepfnALbRcCnc3q6xJKqcJgvnFbnwbvERyqqVcfRP183KTrEL%2FhPn7T6dHymw3MTTGjCQzYQZ8P%2BvU%2BbsGTboREZkyG93SL9qcGgXcoz%2FvJyEdNvgFb5TB66sichyzwqDqbfNriD8YnaKj5LbJnBi98n%2Fr7n1Yw9kilhsIX0Xo6JrCo9ekSB8BDbK%2BRGyAu9Bu7o7zkPLbu0SWZspdcLtG2v%2BsTQ02gxTnxNU5fgRIG4MyexLVnEw%2BbXYvQY6pgG7Qxv6GEBv%2Bk%2F3656DhOIRYTZz7mnCuiYUih9LrE0fyYXaaFKMwx%2BIcRAtLvvatoYXHy8u%2BMhC2mkoQBONYO9DCzUI2pIPDW9uYQ%2BW0a82AnWUA%2BjnyImEuXMMdZ4%2BBmT4xNRY%2F9dgR6qUbq27%2FFnVJUyvn3vyb4Liv2mW4SDPcsD%2Fgag3FZSNqe8j1d8336QAK4pWrnQPHV%2Bew2Ofb39lDS8Mta8u&X-Amz-Signature=2e33196bca9b7f77d0b286ff90ed435ac4b092a224032acab7c2b071b65549ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCOM5AID%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPpHYllDkphDdZOebn1%2Ffvcqzx2lJwbrQYlUvMH2o2GAiBYSgmBFJT0lscm6Qasmff0TUruLjyvngSkki6m4Wv7AiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnFVhRXwsfCD0cZHKtwDZ%2BJK7FqdBN5m1HM64QoSNO09IkGe6qFJ97m5ts%2B9q%2BmXD%2FH%2FOzsEzIEx9DfUTEA0w1Hbb2iYoRT7Zu3bHPzuA%2Bdec2wsZYWV7NvB8qEIuJ3C%2Bz1t%2BZFdm8UwkwXI4wJtrENtGQJSeqbMaEz46jB09NKj01KRFPqjF9oacNJMuidvv5Nxv2YWzNqV30PQiA%2BXtk3Jme2%2BuXeJxuNkBQsPdicxhq2RFd%2BZbiL%2FDYJ%2Bo1ZREt3ezvEqHJaIQEgjE55ibS1HdpzizIlY%2F%2FXYzzIp7Z7S%2F5R8XRwoJbZh7O5qrPPBjhwBqxcOVr%2BslvYfPFLnuDDSADWN6ycf7LN3wxEhOo6EkuIzRUsVHHVC6FyIl3bCcXrsqRe32Ou5lsn8slGkB7LV2IIMepfnALbRcCnc3q6xJKqcJgvnFbnwbvERyqqVcfRP183KTrEL%2FhPn7T6dHymw3MTTGjCQzYQZ8P%2BvU%2BbsGTboREZkyG93SL9qcGgXcoz%2FvJyEdNvgFb5TB66sichyzwqDqbfNriD8YnaKj5LbJnBi98n%2Fr7n1Yw9kilhsIX0Xo6JrCo9ekSB8BDbK%2BRGyAu9Bu7o7zkPLbu0SWZspdcLtG2v%2BsTQ02gxTnxNU5fgRIG4MyexLVnEw%2BbXYvQY6pgG7Qxv6GEBv%2Bk%2F3656DhOIRYTZz7mnCuiYUih9LrE0fyYXaaFKMwx%2BIcRAtLvvatoYXHy8u%2BMhC2mkoQBONYO9DCzUI2pIPDW9uYQ%2BW0a82AnWUA%2BjnyImEuXMMdZ4%2BBmT4xNRY%2F9dgR6qUbq27%2FFnVJUyvn3vyb4Liv2mW4SDPcsD%2Fgag3FZSNqe8j1d8336QAK4pWrnQPHV%2Bew2Ofb39lDS8Mta8u&X-Amz-Signature=fa89af607a8bd92817e49e79a7c28a4f7fa71d9a21e983593aa9ddee27223f10&X-Amz-SignedHeaders=host&x-id=GetObject)
