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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTKOQ5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGeTQxwsAacHRgPi9va6P5fQQQYAK1yo0l%2BtezrWNyOgAiEAqRtaSjvQcFrpb5vkgjjslX3oz1ZQCYMirfJzNC3dF6wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBJHvcLPlKo5IVGSrcA2Gw6UEm5d3SJkj4vwYhsFiI1Hpw7LqUBHYo4zDS%2FJzyPTwwMtaXKS5rw8xpSd0hQNfIN9BRh595x4OaLlF9ecp3GfrkR5rBmf8lzFJ6txeyrLxb81bgtn14H5bdMY6GuquMzdgSj8pJtiFspHS9%2Br4TjIBbNP4RssCozxIiCoJXTjI3yhAB4ApZYDL%2Bc9%2FOaMw%2BeqpsZNcZb5vjQDWU%2BNWdSLbOklGzAIi6unBDUNCWb5rzk%2FIzqd7coPEyLwRJG4nAaoKCIMjBcjFsKZc3hQEPbXU0e7IHO3uQIPDJRkR2S%2FU5MzhLa%2FRxUYil9MhBWX67s0fvlLqD643UwMBakZnPTja3e6u5V1XrcklKd9aUd%2BLXBilSfHf8s4zEt3IbmEdoFkLyjrCdtn8%2BxP3kYk36O5qohP%2FQ7tJBQaryvUH5KAM%2B2DvYWaob4uIpvOGTngJrEHfysAxVGLLIzGi1CcqEcnaiSmkTr5aKjFDLBwfU8HWP1GKR1vQ9yGBM8eVALablEM0hDwiSOSijq50zRB7tm70aGRBBZACQOM6l8PpiS9Obb99wBW9h%2F2%2FIZc8ecMN8Ppi6%2FD2k%2B5kvVZciKPPoZcfRFjpU8MuW0LwdkPVy4IemHd2CR%2FwM9W5kMJb71r0GOqUBMI9GhGMjFiJcGU8BThtbU1R3fuMlh%2FCHs9iJgMxB%2F2tXYoN15cYcydy4DeutEw30p2VQE6UkExH8p8ACz%2Fb%2BrXwg1Bd9b3%2FBAeIqBJd6AKPfGdnuc7imyMNGJLAm23PDVGsWxtPuZ8g9k6zXMsXS5KHDN0sQPywHz%2FLjgE%2FHB5%2F9TkeV1kYFgUw7o2EsV5wEORlbwm8QStg%2FstyihjlzfCjosraj&X-Amz-Signature=fd149941a8564def3764c22eb5fd9da20d65cf61f3f753b43e6a41dc5fc3f2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTKOQ5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGeTQxwsAacHRgPi9va6P5fQQQYAK1yo0l%2BtezrWNyOgAiEAqRtaSjvQcFrpb5vkgjjslX3oz1ZQCYMirfJzNC3dF6wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBJHvcLPlKo5IVGSrcA2Gw6UEm5d3SJkj4vwYhsFiI1Hpw7LqUBHYo4zDS%2FJzyPTwwMtaXKS5rw8xpSd0hQNfIN9BRh595x4OaLlF9ecp3GfrkR5rBmf8lzFJ6txeyrLxb81bgtn14H5bdMY6GuquMzdgSj8pJtiFspHS9%2Br4TjIBbNP4RssCozxIiCoJXTjI3yhAB4ApZYDL%2Bc9%2FOaMw%2BeqpsZNcZb5vjQDWU%2BNWdSLbOklGzAIi6unBDUNCWb5rzk%2FIzqd7coPEyLwRJG4nAaoKCIMjBcjFsKZc3hQEPbXU0e7IHO3uQIPDJRkR2S%2FU5MzhLa%2FRxUYil9MhBWX67s0fvlLqD643UwMBakZnPTja3e6u5V1XrcklKd9aUd%2BLXBilSfHf8s4zEt3IbmEdoFkLyjrCdtn8%2BxP3kYk36O5qohP%2FQ7tJBQaryvUH5KAM%2B2DvYWaob4uIpvOGTngJrEHfysAxVGLLIzGi1CcqEcnaiSmkTr5aKjFDLBwfU8HWP1GKR1vQ9yGBM8eVALablEM0hDwiSOSijq50zRB7tm70aGRBBZACQOM6l8PpiS9Obb99wBW9h%2F2%2FIZc8ecMN8Ppi6%2FD2k%2B5kvVZciKPPoZcfRFjpU8MuW0LwdkPVy4IemHd2CR%2FwM9W5kMJb71r0GOqUBMI9GhGMjFiJcGU8BThtbU1R3fuMlh%2FCHs9iJgMxB%2F2tXYoN15cYcydy4DeutEw30p2VQE6UkExH8p8ACz%2Fb%2BrXwg1Bd9b3%2FBAeIqBJd6AKPfGdnuc7imyMNGJLAm23PDVGsWxtPuZ8g9k6zXMsXS5KHDN0sQPywHz%2FLjgE%2FHB5%2F9TkeV1kYFgUw7o2EsV5wEORlbwm8QStg%2FstyihjlzfCjosraj&X-Amz-Signature=87d47c3083d793f4c5588d465a0e0c64249b589cf5bb96c8059b8f5694784bce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTKOQ5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGeTQxwsAacHRgPi9va6P5fQQQYAK1yo0l%2BtezrWNyOgAiEAqRtaSjvQcFrpb5vkgjjslX3oz1ZQCYMirfJzNC3dF6wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBJHvcLPlKo5IVGSrcA2Gw6UEm5d3SJkj4vwYhsFiI1Hpw7LqUBHYo4zDS%2FJzyPTwwMtaXKS5rw8xpSd0hQNfIN9BRh595x4OaLlF9ecp3GfrkR5rBmf8lzFJ6txeyrLxb81bgtn14H5bdMY6GuquMzdgSj8pJtiFspHS9%2Br4TjIBbNP4RssCozxIiCoJXTjI3yhAB4ApZYDL%2Bc9%2FOaMw%2BeqpsZNcZb5vjQDWU%2BNWdSLbOklGzAIi6unBDUNCWb5rzk%2FIzqd7coPEyLwRJG4nAaoKCIMjBcjFsKZc3hQEPbXU0e7IHO3uQIPDJRkR2S%2FU5MzhLa%2FRxUYil9MhBWX67s0fvlLqD643UwMBakZnPTja3e6u5V1XrcklKd9aUd%2BLXBilSfHf8s4zEt3IbmEdoFkLyjrCdtn8%2BxP3kYk36O5qohP%2FQ7tJBQaryvUH5KAM%2B2DvYWaob4uIpvOGTngJrEHfysAxVGLLIzGi1CcqEcnaiSmkTr5aKjFDLBwfU8HWP1GKR1vQ9yGBM8eVALablEM0hDwiSOSijq50zRB7tm70aGRBBZACQOM6l8PpiS9Obb99wBW9h%2F2%2FIZc8ecMN8Ppi6%2FD2k%2B5kvVZciKPPoZcfRFjpU8MuW0LwdkPVy4IemHd2CR%2FwM9W5kMJb71r0GOqUBMI9GhGMjFiJcGU8BThtbU1R3fuMlh%2FCHs9iJgMxB%2F2tXYoN15cYcydy4DeutEw30p2VQE6UkExH8p8ACz%2Fb%2BrXwg1Bd9b3%2FBAeIqBJd6AKPfGdnuc7imyMNGJLAm23PDVGsWxtPuZ8g9k6zXMsXS5KHDN0sQPywHz%2FLjgE%2FHB5%2F9TkeV1kYFgUw7o2EsV5wEORlbwm8QStg%2FstyihjlzfCjosraj&X-Amz-Signature=c6d4c1dfa6aeb3532dd336f620c1c74828b2572ad07861f5865955d49ba60a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTKOQ5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGeTQxwsAacHRgPi9va6P5fQQQYAK1yo0l%2BtezrWNyOgAiEAqRtaSjvQcFrpb5vkgjjslX3oz1ZQCYMirfJzNC3dF6wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBJHvcLPlKo5IVGSrcA2Gw6UEm5d3SJkj4vwYhsFiI1Hpw7LqUBHYo4zDS%2FJzyPTwwMtaXKS5rw8xpSd0hQNfIN9BRh595x4OaLlF9ecp3GfrkR5rBmf8lzFJ6txeyrLxb81bgtn14H5bdMY6GuquMzdgSj8pJtiFspHS9%2Br4TjIBbNP4RssCozxIiCoJXTjI3yhAB4ApZYDL%2Bc9%2FOaMw%2BeqpsZNcZb5vjQDWU%2BNWdSLbOklGzAIi6unBDUNCWb5rzk%2FIzqd7coPEyLwRJG4nAaoKCIMjBcjFsKZc3hQEPbXU0e7IHO3uQIPDJRkR2S%2FU5MzhLa%2FRxUYil9MhBWX67s0fvlLqD643UwMBakZnPTja3e6u5V1XrcklKd9aUd%2BLXBilSfHf8s4zEt3IbmEdoFkLyjrCdtn8%2BxP3kYk36O5qohP%2FQ7tJBQaryvUH5KAM%2B2DvYWaob4uIpvOGTngJrEHfysAxVGLLIzGi1CcqEcnaiSmkTr5aKjFDLBwfU8HWP1GKR1vQ9yGBM8eVALablEM0hDwiSOSijq50zRB7tm70aGRBBZACQOM6l8PpiS9Obb99wBW9h%2F2%2FIZc8ecMN8Ppi6%2FD2k%2B5kvVZciKPPoZcfRFjpU8MuW0LwdkPVy4IemHd2CR%2FwM9W5kMJb71r0GOqUBMI9GhGMjFiJcGU8BThtbU1R3fuMlh%2FCHs9iJgMxB%2F2tXYoN15cYcydy4DeutEw30p2VQE6UkExH8p8ACz%2Fb%2BrXwg1Bd9b3%2FBAeIqBJd6AKPfGdnuc7imyMNGJLAm23PDVGsWxtPuZ8g9k6zXMsXS5KHDN0sQPywHz%2FLjgE%2FHB5%2F9TkeV1kYFgUw7o2EsV5wEORlbwm8QStg%2FstyihjlzfCjosraj&X-Amz-Signature=a85963e4fc18e974208b78a97c8d3e75e71be9a05748e7e833df5bba5522f360&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTKOQ5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGeTQxwsAacHRgPi9va6P5fQQQYAK1yo0l%2BtezrWNyOgAiEAqRtaSjvQcFrpb5vkgjjslX3oz1ZQCYMirfJzNC3dF6wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBJHvcLPlKo5IVGSrcA2Gw6UEm5d3SJkj4vwYhsFiI1Hpw7LqUBHYo4zDS%2FJzyPTwwMtaXKS5rw8xpSd0hQNfIN9BRh595x4OaLlF9ecp3GfrkR5rBmf8lzFJ6txeyrLxb81bgtn14H5bdMY6GuquMzdgSj8pJtiFspHS9%2Br4TjIBbNP4RssCozxIiCoJXTjI3yhAB4ApZYDL%2Bc9%2FOaMw%2BeqpsZNcZb5vjQDWU%2BNWdSLbOklGzAIi6unBDUNCWb5rzk%2FIzqd7coPEyLwRJG4nAaoKCIMjBcjFsKZc3hQEPbXU0e7IHO3uQIPDJRkR2S%2FU5MzhLa%2FRxUYil9MhBWX67s0fvlLqD643UwMBakZnPTja3e6u5V1XrcklKd9aUd%2BLXBilSfHf8s4zEt3IbmEdoFkLyjrCdtn8%2BxP3kYk36O5qohP%2FQ7tJBQaryvUH5KAM%2B2DvYWaob4uIpvOGTngJrEHfysAxVGLLIzGi1CcqEcnaiSmkTr5aKjFDLBwfU8HWP1GKR1vQ9yGBM8eVALablEM0hDwiSOSijq50zRB7tm70aGRBBZACQOM6l8PpiS9Obb99wBW9h%2F2%2FIZc8ecMN8Ppi6%2FD2k%2B5kvVZciKPPoZcfRFjpU8MuW0LwdkPVy4IemHd2CR%2FwM9W5kMJb71r0GOqUBMI9GhGMjFiJcGU8BThtbU1R3fuMlh%2FCHs9iJgMxB%2F2tXYoN15cYcydy4DeutEw30p2VQE6UkExH8p8ACz%2Fb%2BrXwg1Bd9b3%2FBAeIqBJd6AKPfGdnuc7imyMNGJLAm23PDVGsWxtPuZ8g9k6zXMsXS5KHDN0sQPywHz%2FLjgE%2FHB5%2F9TkeV1kYFgUw7o2EsV5wEORlbwm8QStg%2FstyihjlzfCjosraj&X-Amz-Signature=dcc626851e08b8123de6816a20780537a198adea5ad515bf6814e80e0c964f87&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTKOQ5H%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGeTQxwsAacHRgPi9va6P5fQQQYAK1yo0l%2BtezrWNyOgAiEAqRtaSjvQcFrpb5vkgjjslX3oz1ZQCYMirfJzNC3dF6wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHBJHvcLPlKo5IVGSrcA2Gw6UEm5d3SJkj4vwYhsFiI1Hpw7LqUBHYo4zDS%2FJzyPTwwMtaXKS5rw8xpSd0hQNfIN9BRh595x4OaLlF9ecp3GfrkR5rBmf8lzFJ6txeyrLxb81bgtn14H5bdMY6GuquMzdgSj8pJtiFspHS9%2Br4TjIBbNP4RssCozxIiCoJXTjI3yhAB4ApZYDL%2Bc9%2FOaMw%2BeqpsZNcZb5vjQDWU%2BNWdSLbOklGzAIi6unBDUNCWb5rzk%2FIzqd7coPEyLwRJG4nAaoKCIMjBcjFsKZc3hQEPbXU0e7IHO3uQIPDJRkR2S%2FU5MzhLa%2FRxUYil9MhBWX67s0fvlLqD643UwMBakZnPTja3e6u5V1XrcklKd9aUd%2BLXBilSfHf8s4zEt3IbmEdoFkLyjrCdtn8%2BxP3kYk36O5qohP%2FQ7tJBQaryvUH5KAM%2B2DvYWaob4uIpvOGTngJrEHfysAxVGLLIzGi1CcqEcnaiSmkTr5aKjFDLBwfU8HWP1GKR1vQ9yGBM8eVALablEM0hDwiSOSijq50zRB7tm70aGRBBZACQOM6l8PpiS9Obb99wBW9h%2F2%2FIZc8ecMN8Ppi6%2FD2k%2B5kvVZciKPPoZcfRFjpU8MuW0LwdkPVy4IemHd2CR%2FwM9W5kMJb71r0GOqUBMI9GhGMjFiJcGU8BThtbU1R3fuMlh%2FCHs9iJgMxB%2F2tXYoN15cYcydy4DeutEw30p2VQE6UkExH8p8ACz%2Fb%2BrXwg1Bd9b3%2FBAeIqBJd6AKPfGdnuc7imyMNGJLAm23PDVGsWxtPuZ8g9k6zXMsXS5KHDN0sQPywHz%2FLjgE%2FHB5%2F9TkeV1kYFgUw7o2EsV5wEORlbwm8QStg%2FstyihjlzfCjosraj&X-Amz-Signature=ccaf8337454a14af4461f310ca351c5a10fee845c2a37667caee0ab797b33d65&X-Amz-SignedHeaders=host&x-id=GetObject)
