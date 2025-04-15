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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWGZXT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AckW6%2FLX4QAcVGvpf%2BXYPMtd6Y6BnPAJLZ6vIEUqoAiBAcw3FU6O5q7Ouja6C8KodgxB5lKi638cAZgG8QtkCNSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAlPFXIu29nSi%2FRFiKtwDkQaVv7yeHUVLHakXCcFNZfLuTQYmtPYW2lOviGYOTC6wGz0REzrdtW1XgjVJ41JMXE3YXha47YU1Carab98KXAps3FMlj%2BD0S9NXUs%2FTqt02uLhk3CBzqcRQNVWO22n4LbUQEw3vElye9EaJXWa45Zo0358eMzJC1JASCORgiAXshtK2EPNAMv37zdoWgOObSqds5TcPw87I%2B5EVvjEW6%2FFBtD1zaZMquZUNA8WcHrjEo5quETW8PTxSteUyvET%2BdLNgPxju0DUCQrvbc%2BqhrCa1vsskA%2Bh5Tmjs55bFkFSVNGh542IbMP7ud7qUI7mJFntNRmCsj00nvhU5z9GmjnPVjIkFxMDw6C8yP9kR3ORugOt%2BiyCP8je2Kf3xqQAKe7MrzTuL9m104RfAjNNRmxX9nPEhC5Tng3c21PlxqbhwY6B25tkZ3Swf6RkuLjKieKIuwOhtlMjA26WiJHSv5CncAWiempW%2BbFg6ZLc4YR0yI44jtXwVLwBbLm5XzdreCdQguGYozpM5eyFCeYsjn%2FQqWyla7pJo15YQuZBEifaAf8SzVgdJfaDmP1MOgFhizqyqh8r8drXKlgLumD2EBlwlhZNz7JlgasFQgWYZ7ZhVec2YCAExNoBSwlcwjdf6vwY6pgGrMBaTvnKLof%2Ftbkw%2BOSJpm%2BktslqywHN33I2FLaWpT%2FvQJj%2BDR8adWkZwlLFVDG7FRHhamm0vbemK%2B2cKbjFC%2BupUEjnJjvwn8ccPoFgVFG%2Bwb36Wb%2B1LhXU7ivxKBpb97rZKvBEboLnUteBt4yxS%2Bo2tTIATs1yT57IbiRoJluUi7WeUr1NWi0%2BIF%2BK6H%2FBBXSEXhfbWk06FXEpg9snUlCgnsZZl&X-Amz-Signature=477fa09d8a53df0db5048fe96556e3bab1c22e015e14867e49c96c79dba4a4c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWGZXT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AckW6%2FLX4QAcVGvpf%2BXYPMtd6Y6BnPAJLZ6vIEUqoAiBAcw3FU6O5q7Ouja6C8KodgxB5lKi638cAZgG8QtkCNSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAlPFXIu29nSi%2FRFiKtwDkQaVv7yeHUVLHakXCcFNZfLuTQYmtPYW2lOviGYOTC6wGz0REzrdtW1XgjVJ41JMXE3YXha47YU1Carab98KXAps3FMlj%2BD0S9NXUs%2FTqt02uLhk3CBzqcRQNVWO22n4LbUQEw3vElye9EaJXWa45Zo0358eMzJC1JASCORgiAXshtK2EPNAMv37zdoWgOObSqds5TcPw87I%2B5EVvjEW6%2FFBtD1zaZMquZUNA8WcHrjEo5quETW8PTxSteUyvET%2BdLNgPxju0DUCQrvbc%2BqhrCa1vsskA%2Bh5Tmjs55bFkFSVNGh542IbMP7ud7qUI7mJFntNRmCsj00nvhU5z9GmjnPVjIkFxMDw6C8yP9kR3ORugOt%2BiyCP8je2Kf3xqQAKe7MrzTuL9m104RfAjNNRmxX9nPEhC5Tng3c21PlxqbhwY6B25tkZ3Swf6RkuLjKieKIuwOhtlMjA26WiJHSv5CncAWiempW%2BbFg6ZLc4YR0yI44jtXwVLwBbLm5XzdreCdQguGYozpM5eyFCeYsjn%2FQqWyla7pJo15YQuZBEifaAf8SzVgdJfaDmP1MOgFhizqyqh8r8drXKlgLumD2EBlwlhZNz7JlgasFQgWYZ7ZhVec2YCAExNoBSwlcwjdf6vwY6pgGrMBaTvnKLof%2Ftbkw%2BOSJpm%2BktslqywHN33I2FLaWpT%2FvQJj%2BDR8adWkZwlLFVDG7FRHhamm0vbemK%2B2cKbjFC%2BupUEjnJjvwn8ccPoFgVFG%2Bwb36Wb%2B1LhXU7ivxKBpb97rZKvBEboLnUteBt4yxS%2Bo2tTIATs1yT57IbiRoJluUi7WeUr1NWi0%2BIF%2BK6H%2FBBXSEXhfbWk06FXEpg9snUlCgnsZZl&X-Amz-Signature=b9c0428abbac083d543fcc7cfde1a83e3d4550b793f2796b43e8aad2a61ff058&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWGZXT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AckW6%2FLX4QAcVGvpf%2BXYPMtd6Y6BnPAJLZ6vIEUqoAiBAcw3FU6O5q7Ouja6C8KodgxB5lKi638cAZgG8QtkCNSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAlPFXIu29nSi%2FRFiKtwDkQaVv7yeHUVLHakXCcFNZfLuTQYmtPYW2lOviGYOTC6wGz0REzrdtW1XgjVJ41JMXE3YXha47YU1Carab98KXAps3FMlj%2BD0S9NXUs%2FTqt02uLhk3CBzqcRQNVWO22n4LbUQEw3vElye9EaJXWa45Zo0358eMzJC1JASCORgiAXshtK2EPNAMv37zdoWgOObSqds5TcPw87I%2B5EVvjEW6%2FFBtD1zaZMquZUNA8WcHrjEo5quETW8PTxSteUyvET%2BdLNgPxju0DUCQrvbc%2BqhrCa1vsskA%2Bh5Tmjs55bFkFSVNGh542IbMP7ud7qUI7mJFntNRmCsj00nvhU5z9GmjnPVjIkFxMDw6C8yP9kR3ORugOt%2BiyCP8je2Kf3xqQAKe7MrzTuL9m104RfAjNNRmxX9nPEhC5Tng3c21PlxqbhwY6B25tkZ3Swf6RkuLjKieKIuwOhtlMjA26WiJHSv5CncAWiempW%2BbFg6ZLc4YR0yI44jtXwVLwBbLm5XzdreCdQguGYozpM5eyFCeYsjn%2FQqWyla7pJo15YQuZBEifaAf8SzVgdJfaDmP1MOgFhizqyqh8r8drXKlgLumD2EBlwlhZNz7JlgasFQgWYZ7ZhVec2YCAExNoBSwlcwjdf6vwY6pgGrMBaTvnKLof%2Ftbkw%2BOSJpm%2BktslqywHN33I2FLaWpT%2FvQJj%2BDR8adWkZwlLFVDG7FRHhamm0vbemK%2B2cKbjFC%2BupUEjnJjvwn8ccPoFgVFG%2Bwb36Wb%2B1LhXU7ivxKBpb97rZKvBEboLnUteBt4yxS%2Bo2tTIATs1yT57IbiRoJluUi7WeUr1NWi0%2BIF%2BK6H%2FBBXSEXhfbWk06FXEpg9snUlCgnsZZl&X-Amz-Signature=53b2147c66f24eb920ec43b569d39d7b148a05da1904000fc16c7f749a35015d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWGZXT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AckW6%2FLX4QAcVGvpf%2BXYPMtd6Y6BnPAJLZ6vIEUqoAiBAcw3FU6O5q7Ouja6C8KodgxB5lKi638cAZgG8QtkCNSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAlPFXIu29nSi%2FRFiKtwDkQaVv7yeHUVLHakXCcFNZfLuTQYmtPYW2lOviGYOTC6wGz0REzrdtW1XgjVJ41JMXE3YXha47YU1Carab98KXAps3FMlj%2BD0S9NXUs%2FTqt02uLhk3CBzqcRQNVWO22n4LbUQEw3vElye9EaJXWa45Zo0358eMzJC1JASCORgiAXshtK2EPNAMv37zdoWgOObSqds5TcPw87I%2B5EVvjEW6%2FFBtD1zaZMquZUNA8WcHrjEo5quETW8PTxSteUyvET%2BdLNgPxju0DUCQrvbc%2BqhrCa1vsskA%2Bh5Tmjs55bFkFSVNGh542IbMP7ud7qUI7mJFntNRmCsj00nvhU5z9GmjnPVjIkFxMDw6C8yP9kR3ORugOt%2BiyCP8je2Kf3xqQAKe7MrzTuL9m104RfAjNNRmxX9nPEhC5Tng3c21PlxqbhwY6B25tkZ3Swf6RkuLjKieKIuwOhtlMjA26WiJHSv5CncAWiempW%2BbFg6ZLc4YR0yI44jtXwVLwBbLm5XzdreCdQguGYozpM5eyFCeYsjn%2FQqWyla7pJo15YQuZBEifaAf8SzVgdJfaDmP1MOgFhizqyqh8r8drXKlgLumD2EBlwlhZNz7JlgasFQgWYZ7ZhVec2YCAExNoBSwlcwjdf6vwY6pgGrMBaTvnKLof%2Ftbkw%2BOSJpm%2BktslqywHN33I2FLaWpT%2FvQJj%2BDR8adWkZwlLFVDG7FRHhamm0vbemK%2B2cKbjFC%2BupUEjnJjvwn8ccPoFgVFG%2Bwb36Wb%2B1LhXU7ivxKBpb97rZKvBEboLnUteBt4yxS%2Bo2tTIATs1yT57IbiRoJluUi7WeUr1NWi0%2BIF%2BK6H%2FBBXSEXhfbWk06FXEpg9snUlCgnsZZl&X-Amz-Signature=92eb54a06cf6a61897cbce34d7d31cd2f24a7887572e100baf1cadbecb86782d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWGZXT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AckW6%2FLX4QAcVGvpf%2BXYPMtd6Y6BnPAJLZ6vIEUqoAiBAcw3FU6O5q7Ouja6C8KodgxB5lKi638cAZgG8QtkCNSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAlPFXIu29nSi%2FRFiKtwDkQaVv7yeHUVLHakXCcFNZfLuTQYmtPYW2lOviGYOTC6wGz0REzrdtW1XgjVJ41JMXE3YXha47YU1Carab98KXAps3FMlj%2BD0S9NXUs%2FTqt02uLhk3CBzqcRQNVWO22n4LbUQEw3vElye9EaJXWa45Zo0358eMzJC1JASCORgiAXshtK2EPNAMv37zdoWgOObSqds5TcPw87I%2B5EVvjEW6%2FFBtD1zaZMquZUNA8WcHrjEo5quETW8PTxSteUyvET%2BdLNgPxju0DUCQrvbc%2BqhrCa1vsskA%2Bh5Tmjs55bFkFSVNGh542IbMP7ud7qUI7mJFntNRmCsj00nvhU5z9GmjnPVjIkFxMDw6C8yP9kR3ORugOt%2BiyCP8je2Kf3xqQAKe7MrzTuL9m104RfAjNNRmxX9nPEhC5Tng3c21PlxqbhwY6B25tkZ3Swf6RkuLjKieKIuwOhtlMjA26WiJHSv5CncAWiempW%2BbFg6ZLc4YR0yI44jtXwVLwBbLm5XzdreCdQguGYozpM5eyFCeYsjn%2FQqWyla7pJo15YQuZBEifaAf8SzVgdJfaDmP1MOgFhizqyqh8r8drXKlgLumD2EBlwlhZNz7JlgasFQgWYZ7ZhVec2YCAExNoBSwlcwjdf6vwY6pgGrMBaTvnKLof%2Ftbkw%2BOSJpm%2BktslqywHN33I2FLaWpT%2FvQJj%2BDR8adWkZwlLFVDG7FRHhamm0vbemK%2B2cKbjFC%2BupUEjnJjvwn8ccPoFgVFG%2Bwb36Wb%2B1LhXU7ivxKBpb97rZKvBEboLnUteBt4yxS%2Bo2tTIATs1yT57IbiRoJluUi7WeUr1NWi0%2BIF%2BK6H%2FBBXSEXhfbWk06FXEpg9snUlCgnsZZl&X-Amz-Signature=ffa71c05fb448893efc876a8717955ada6aaa654f04b97b45bc229a31dfd6acf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSWGZXT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AckW6%2FLX4QAcVGvpf%2BXYPMtd6Y6BnPAJLZ6vIEUqoAiBAcw3FU6O5q7Ouja6C8KodgxB5lKi638cAZgG8QtkCNSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAlPFXIu29nSi%2FRFiKtwDkQaVv7yeHUVLHakXCcFNZfLuTQYmtPYW2lOviGYOTC6wGz0REzrdtW1XgjVJ41JMXE3YXha47YU1Carab98KXAps3FMlj%2BD0S9NXUs%2FTqt02uLhk3CBzqcRQNVWO22n4LbUQEw3vElye9EaJXWa45Zo0358eMzJC1JASCORgiAXshtK2EPNAMv37zdoWgOObSqds5TcPw87I%2B5EVvjEW6%2FFBtD1zaZMquZUNA8WcHrjEo5quETW8PTxSteUyvET%2BdLNgPxju0DUCQrvbc%2BqhrCa1vsskA%2Bh5Tmjs55bFkFSVNGh542IbMP7ud7qUI7mJFntNRmCsj00nvhU5z9GmjnPVjIkFxMDw6C8yP9kR3ORugOt%2BiyCP8je2Kf3xqQAKe7MrzTuL9m104RfAjNNRmxX9nPEhC5Tng3c21PlxqbhwY6B25tkZ3Swf6RkuLjKieKIuwOhtlMjA26WiJHSv5CncAWiempW%2BbFg6ZLc4YR0yI44jtXwVLwBbLm5XzdreCdQguGYozpM5eyFCeYsjn%2FQqWyla7pJo15YQuZBEifaAf8SzVgdJfaDmP1MOgFhizqyqh8r8drXKlgLumD2EBlwlhZNz7JlgasFQgWYZ7ZhVec2YCAExNoBSwlcwjdf6vwY6pgGrMBaTvnKLof%2Ftbkw%2BOSJpm%2BktslqywHN33I2FLaWpT%2FvQJj%2BDR8adWkZwlLFVDG7FRHhamm0vbemK%2B2cKbjFC%2BupUEjnJjvwn8ccPoFgVFG%2Bwb36Wb%2B1LhXU7ivxKBpb97rZKvBEboLnUteBt4yxS%2Bo2tTIATs1yT57IbiRoJluUi7WeUr1NWi0%2BIF%2BK6H%2FBBXSEXhfbWk06FXEpg9snUlCgnsZZl&X-Amz-Signature=18626cfbc645a345e06c21673f33182c2a8e7d0a4a56645c44a23886b84f8df7&X-Amz-SignedHeaders=host&x-id=GetObject)
