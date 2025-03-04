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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36ALOR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2f5gYjTuYmFSuF6Et3R3ZysnM21AVIlI0uKl46SqbfAiEA34zQEGGJEshKy0%2Ff3aaq3asmu4YndteoQKHQQmWNoD8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtbdUYYRsARQ%2BZxSCrcA%2FNFENfNIHNgFy6ngy%2BeSNB%2BGZn2V0%2F%2BN9o%2FvKklh5bGTHYjSTPAOGQnMiy2c52xLevqNMug%2B8nG7%2BCKcLvdzplFHbN%2BDjB%2FZAwiaJutQl4JCSAxbJKqfkTtrqure%2FsLC0QG8Dvo5GZYGjrK%2FeL5eeI8X2fIdjcpqnNnlhjbCbkKqNGn%2FfiPj8eM7ojdLMlt%2FE6HyRaNe8PBAOKMgxmbynKZ%2Bw7LI2h9MkRBKZW7YVexXz9a49Heq1M5gE4sr4r1Ph3iXCWXOUXh239SQu7ZEKl8cuJDd%2BGFL9LP%2FHM9%2Fzod4KwRZKZwSDQvGcKbUccmIExtnaag5Llxzb%2BLwN%2FRSoiWu9qVlslo8LVWVRbC1NaZWp7B%2Bppjk0yyjEDCkcdfSxOMATdKBEqkDDCSXOdnOu2aN4GeIB188H%2BzzPVg0qA14rTS2KVxtwpUWx1Z0prZOnbTzzkpl%2BS2FpaiuBGdLuVlJ6Dek4nduHBYbe5%2BivfOjddthWqmqQ8CgkOPvK8TyBT0uto73orpKY00bHzVcoAFTs%2B9fMmNAHuuXvLG%2B%2FhkVESMgzz%2Bz0UockdCHdoO6OX%2B7Mzfn5R%2FrxcwuH7PkvazHkYPXk67OKJXy8cQaAkFAFU72OcYnG4oIYk0MKyEm74GOqUB%2FbvlE12124kV6CZN9i2v3vkDa%2FrIFTYaGepMFIiB%2BKCN55Om3hkoJaNWa9O6NrTi9oCBYUjFhMeax5z2wSwY9OD7ACDjaFD%2F1shX0LgXetzpo%2FpHn1SHMwoEevaJBXw6MCYTNV3lKT7KuBb4Gp4Q3LrQbVHmhI6FVOcj1odmWoKlorXcvHH7ya%2FxMQ%2BsvECwrNTOj3m2Z3WNh0SEasp0QEGCMOcI&X-Amz-Signature=a0d98e80ec70bb6d6ee60933e5f04dc07b48072bf78e75675af6bbb9fabb0dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36ALOR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2f5gYjTuYmFSuF6Et3R3ZysnM21AVIlI0uKl46SqbfAiEA34zQEGGJEshKy0%2Ff3aaq3asmu4YndteoQKHQQmWNoD8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtbdUYYRsARQ%2BZxSCrcA%2FNFENfNIHNgFy6ngy%2BeSNB%2BGZn2V0%2F%2BN9o%2FvKklh5bGTHYjSTPAOGQnMiy2c52xLevqNMug%2B8nG7%2BCKcLvdzplFHbN%2BDjB%2FZAwiaJutQl4JCSAxbJKqfkTtrqure%2FsLC0QG8Dvo5GZYGjrK%2FeL5eeI8X2fIdjcpqnNnlhjbCbkKqNGn%2FfiPj8eM7ojdLMlt%2FE6HyRaNe8PBAOKMgxmbynKZ%2Bw7LI2h9MkRBKZW7YVexXz9a49Heq1M5gE4sr4r1Ph3iXCWXOUXh239SQu7ZEKl8cuJDd%2BGFL9LP%2FHM9%2Fzod4KwRZKZwSDQvGcKbUccmIExtnaag5Llxzb%2BLwN%2FRSoiWu9qVlslo8LVWVRbC1NaZWp7B%2Bppjk0yyjEDCkcdfSxOMATdKBEqkDDCSXOdnOu2aN4GeIB188H%2BzzPVg0qA14rTS2KVxtwpUWx1Z0prZOnbTzzkpl%2BS2FpaiuBGdLuVlJ6Dek4nduHBYbe5%2BivfOjddthWqmqQ8CgkOPvK8TyBT0uto73orpKY00bHzVcoAFTs%2B9fMmNAHuuXvLG%2B%2FhkVESMgzz%2Bz0UockdCHdoO6OX%2B7Mzfn5R%2FrxcwuH7PkvazHkYPXk67OKJXy8cQaAkFAFU72OcYnG4oIYk0MKyEm74GOqUB%2FbvlE12124kV6CZN9i2v3vkDa%2FrIFTYaGepMFIiB%2BKCN55Om3hkoJaNWa9O6NrTi9oCBYUjFhMeax5z2wSwY9OD7ACDjaFD%2F1shX0LgXetzpo%2FpHn1SHMwoEevaJBXw6MCYTNV3lKT7KuBb4Gp4Q3LrQbVHmhI6FVOcj1odmWoKlorXcvHH7ya%2FxMQ%2BsvECwrNTOj3m2Z3WNh0SEasp0QEGCMOcI&X-Amz-Signature=cbe2c7481760d1b9ca6fb03381f60f36e791f390853052eb562ae7c24d3c4d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36ALOR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2f5gYjTuYmFSuF6Et3R3ZysnM21AVIlI0uKl46SqbfAiEA34zQEGGJEshKy0%2Ff3aaq3asmu4YndteoQKHQQmWNoD8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtbdUYYRsARQ%2BZxSCrcA%2FNFENfNIHNgFy6ngy%2BeSNB%2BGZn2V0%2F%2BN9o%2FvKklh5bGTHYjSTPAOGQnMiy2c52xLevqNMug%2B8nG7%2BCKcLvdzplFHbN%2BDjB%2FZAwiaJutQl4JCSAxbJKqfkTtrqure%2FsLC0QG8Dvo5GZYGjrK%2FeL5eeI8X2fIdjcpqnNnlhjbCbkKqNGn%2FfiPj8eM7ojdLMlt%2FE6HyRaNe8PBAOKMgxmbynKZ%2Bw7LI2h9MkRBKZW7YVexXz9a49Heq1M5gE4sr4r1Ph3iXCWXOUXh239SQu7ZEKl8cuJDd%2BGFL9LP%2FHM9%2Fzod4KwRZKZwSDQvGcKbUccmIExtnaag5Llxzb%2BLwN%2FRSoiWu9qVlslo8LVWVRbC1NaZWp7B%2Bppjk0yyjEDCkcdfSxOMATdKBEqkDDCSXOdnOu2aN4GeIB188H%2BzzPVg0qA14rTS2KVxtwpUWx1Z0prZOnbTzzkpl%2BS2FpaiuBGdLuVlJ6Dek4nduHBYbe5%2BivfOjddthWqmqQ8CgkOPvK8TyBT0uto73orpKY00bHzVcoAFTs%2B9fMmNAHuuXvLG%2B%2FhkVESMgzz%2Bz0UockdCHdoO6OX%2B7Mzfn5R%2FrxcwuH7PkvazHkYPXk67OKJXy8cQaAkFAFU72OcYnG4oIYk0MKyEm74GOqUB%2FbvlE12124kV6CZN9i2v3vkDa%2FrIFTYaGepMFIiB%2BKCN55Om3hkoJaNWa9O6NrTi9oCBYUjFhMeax5z2wSwY9OD7ACDjaFD%2F1shX0LgXetzpo%2FpHn1SHMwoEevaJBXw6MCYTNV3lKT7KuBb4Gp4Q3LrQbVHmhI6FVOcj1odmWoKlorXcvHH7ya%2FxMQ%2BsvECwrNTOj3m2Z3WNh0SEasp0QEGCMOcI&X-Amz-Signature=0c4c41539448c6819cc3e7c15019b6395e564d6bec7b2f65bc90564305a232b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36ALOR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2f5gYjTuYmFSuF6Et3R3ZysnM21AVIlI0uKl46SqbfAiEA34zQEGGJEshKy0%2Ff3aaq3asmu4YndteoQKHQQmWNoD8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtbdUYYRsARQ%2BZxSCrcA%2FNFENfNIHNgFy6ngy%2BeSNB%2BGZn2V0%2F%2BN9o%2FvKklh5bGTHYjSTPAOGQnMiy2c52xLevqNMug%2B8nG7%2BCKcLvdzplFHbN%2BDjB%2FZAwiaJutQl4JCSAxbJKqfkTtrqure%2FsLC0QG8Dvo5GZYGjrK%2FeL5eeI8X2fIdjcpqnNnlhjbCbkKqNGn%2FfiPj8eM7ojdLMlt%2FE6HyRaNe8PBAOKMgxmbynKZ%2Bw7LI2h9MkRBKZW7YVexXz9a49Heq1M5gE4sr4r1Ph3iXCWXOUXh239SQu7ZEKl8cuJDd%2BGFL9LP%2FHM9%2Fzod4KwRZKZwSDQvGcKbUccmIExtnaag5Llxzb%2BLwN%2FRSoiWu9qVlslo8LVWVRbC1NaZWp7B%2Bppjk0yyjEDCkcdfSxOMATdKBEqkDDCSXOdnOu2aN4GeIB188H%2BzzPVg0qA14rTS2KVxtwpUWx1Z0prZOnbTzzkpl%2BS2FpaiuBGdLuVlJ6Dek4nduHBYbe5%2BivfOjddthWqmqQ8CgkOPvK8TyBT0uto73orpKY00bHzVcoAFTs%2B9fMmNAHuuXvLG%2B%2FhkVESMgzz%2Bz0UockdCHdoO6OX%2B7Mzfn5R%2FrxcwuH7PkvazHkYPXk67OKJXy8cQaAkFAFU72OcYnG4oIYk0MKyEm74GOqUB%2FbvlE12124kV6CZN9i2v3vkDa%2FrIFTYaGepMFIiB%2BKCN55Om3hkoJaNWa9O6NrTi9oCBYUjFhMeax5z2wSwY9OD7ACDjaFD%2F1shX0LgXetzpo%2FpHn1SHMwoEevaJBXw6MCYTNV3lKT7KuBb4Gp4Q3LrQbVHmhI6FVOcj1odmWoKlorXcvHH7ya%2FxMQ%2BsvECwrNTOj3m2Z3WNh0SEasp0QEGCMOcI&X-Amz-Signature=f95877efef554365af40b8a99a6428eb66b178aa3c650ab09fcf6fab961b5818&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36ALOR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2f5gYjTuYmFSuF6Et3R3ZysnM21AVIlI0uKl46SqbfAiEA34zQEGGJEshKy0%2Ff3aaq3asmu4YndteoQKHQQmWNoD8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtbdUYYRsARQ%2BZxSCrcA%2FNFENfNIHNgFy6ngy%2BeSNB%2BGZn2V0%2F%2BN9o%2FvKklh5bGTHYjSTPAOGQnMiy2c52xLevqNMug%2B8nG7%2BCKcLvdzplFHbN%2BDjB%2FZAwiaJutQl4JCSAxbJKqfkTtrqure%2FsLC0QG8Dvo5GZYGjrK%2FeL5eeI8X2fIdjcpqnNnlhjbCbkKqNGn%2FfiPj8eM7ojdLMlt%2FE6HyRaNe8PBAOKMgxmbynKZ%2Bw7LI2h9MkRBKZW7YVexXz9a49Heq1M5gE4sr4r1Ph3iXCWXOUXh239SQu7ZEKl8cuJDd%2BGFL9LP%2FHM9%2Fzod4KwRZKZwSDQvGcKbUccmIExtnaag5Llxzb%2BLwN%2FRSoiWu9qVlslo8LVWVRbC1NaZWp7B%2Bppjk0yyjEDCkcdfSxOMATdKBEqkDDCSXOdnOu2aN4GeIB188H%2BzzPVg0qA14rTS2KVxtwpUWx1Z0prZOnbTzzkpl%2BS2FpaiuBGdLuVlJ6Dek4nduHBYbe5%2BivfOjddthWqmqQ8CgkOPvK8TyBT0uto73orpKY00bHzVcoAFTs%2B9fMmNAHuuXvLG%2B%2FhkVESMgzz%2Bz0UockdCHdoO6OX%2B7Mzfn5R%2FrxcwuH7PkvazHkYPXk67OKJXy8cQaAkFAFU72OcYnG4oIYk0MKyEm74GOqUB%2FbvlE12124kV6CZN9i2v3vkDa%2FrIFTYaGepMFIiB%2BKCN55Om3hkoJaNWa9O6NrTi9oCBYUjFhMeax5z2wSwY9OD7ACDjaFD%2F1shX0LgXetzpo%2FpHn1SHMwoEevaJBXw6MCYTNV3lKT7KuBb4Gp4Q3LrQbVHmhI6FVOcj1odmWoKlorXcvHH7ya%2FxMQ%2BsvECwrNTOj3m2Z3WNh0SEasp0QEGCMOcI&X-Amz-Signature=0e99cbec09aea8c55986dd059ccf45b221da8b2dde246477d5e6d69f4841a50a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36ALOR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2f5gYjTuYmFSuF6Et3R3ZysnM21AVIlI0uKl46SqbfAiEA34zQEGGJEshKy0%2Ff3aaq3asmu4YndteoQKHQQmWNoD8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtbdUYYRsARQ%2BZxSCrcA%2FNFENfNIHNgFy6ngy%2BeSNB%2BGZn2V0%2F%2BN9o%2FvKklh5bGTHYjSTPAOGQnMiy2c52xLevqNMug%2B8nG7%2BCKcLvdzplFHbN%2BDjB%2FZAwiaJutQl4JCSAxbJKqfkTtrqure%2FsLC0QG8Dvo5GZYGjrK%2FeL5eeI8X2fIdjcpqnNnlhjbCbkKqNGn%2FfiPj8eM7ojdLMlt%2FE6HyRaNe8PBAOKMgxmbynKZ%2Bw7LI2h9MkRBKZW7YVexXz9a49Heq1M5gE4sr4r1Ph3iXCWXOUXh239SQu7ZEKl8cuJDd%2BGFL9LP%2FHM9%2Fzod4KwRZKZwSDQvGcKbUccmIExtnaag5Llxzb%2BLwN%2FRSoiWu9qVlslo8LVWVRbC1NaZWp7B%2Bppjk0yyjEDCkcdfSxOMATdKBEqkDDCSXOdnOu2aN4GeIB188H%2BzzPVg0qA14rTS2KVxtwpUWx1Z0prZOnbTzzkpl%2BS2FpaiuBGdLuVlJ6Dek4nduHBYbe5%2BivfOjddthWqmqQ8CgkOPvK8TyBT0uto73orpKY00bHzVcoAFTs%2B9fMmNAHuuXvLG%2B%2FhkVESMgzz%2Bz0UockdCHdoO6OX%2B7Mzfn5R%2FrxcwuH7PkvazHkYPXk67OKJXy8cQaAkFAFU72OcYnG4oIYk0MKyEm74GOqUB%2FbvlE12124kV6CZN9i2v3vkDa%2FrIFTYaGepMFIiB%2BKCN55Om3hkoJaNWa9O6NrTi9oCBYUjFhMeax5z2wSwY9OD7ACDjaFD%2F1shX0LgXetzpo%2FpHn1SHMwoEevaJBXw6MCYTNV3lKT7KuBb4Gp4Q3LrQbVHmhI6FVOcj1odmWoKlorXcvHH7ya%2FxMQ%2BsvECwrNTOj3m2Z3WNh0SEasp0QEGCMOcI&X-Amz-Signature=ff238144d581a4c13c1e5f7ccb551f69a93247413a94aa3c3620b419629fee08&X-Amz-SignedHeaders=host&x-id=GetObject)
