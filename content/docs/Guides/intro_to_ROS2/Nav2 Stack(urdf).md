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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKEVJR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDR7wczGw5RL7XBLG9eUh1MOdUAxnps618yqumtWelOtAiA4HdyHr%2Bl01FCCHQ8kyGL1IrL%2FWh46hwUI6cL2iOOGPir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTfRvAmb4Uh%2FZcyhRKtwD%2FW8300j4wuJnlH83leWd%2FtE8ytCgrDpLAO3jfZxNKeKHFnmj4OG9%2B2lagJEG%2FG09tkp%2FbiCEjrTt73yqYQIcbkUjPTmdzLzak4%2BYD0114jt4zm4VNitSf%2FCIgKfaLjYbepZG%2BRz%2FAeqoyYjVrHugb%2BTtO%2B4%2FI1Pw9Ay5eRKILsfwVzGl5164RQr%2FvGP8dQwFpPFA1bWDrn%2BKqsafQV2y3S%2BxMDbCD45vXhvxQt1rP5At5GwPZfniVBZ4bf5T593PCgKYVfWkIUNRgktCs2Ma2if2gWvyl%2F0BpzWYbg2ytTeiIK7onh%2FTkyi1%2Ft%2BjWRwqSJmPZq8IvYxigVvFjfuQbBbDT90m2gYgC5ezY1kqp4lBv1iM1x7cAk1atwAtpXfELG%2FGEgTi%2BDEomQZtZvI1mleCKWHv1nn9l5nA5g3dh9u5wnZW5qvusIhOs%2Bco7CVsxTZJNBJa6A7j68jCa1bnLzcfiifE969G2IU4x%2FL6lJf5trypJYL0PNz9WSaBjRaibdgaeTVNDsDgj9Oo1PzZza%2FS4ttHKZw2RSekYaV%2BCC5ydiyaDAslrosDzr5vrZX1LvTD0dyY%2FU%2B0Ah%2Bm%2Bzh%2FZ7n%2BdEqE%2B%2FV0UDrU6GSF%2BmdrZT0z6EI2%2Bg2YtRgwprS%2FvQY6pgHNNgxpaGRqq8JLE%2BYfcV04EiKxDZprVfvS2lXd6jkvTLmE%2FvoGfY77BRME5zQ8Wg%2FMxUg2Re5RRKs%2FRs3920XCu%2BiKjoxRL3uDPyGVa58LnIb45lnhLq5oKvv4X7M47m4UuhtfLZZnbqqlDVKTNW8A3%2Fg4BIH8Lmv30AFjf81BnOZaAtaQOW%2Bx1fPa65dF5x5X4duaqevZGICLNDjAiFsOqxXCD7RE&X-Amz-Signature=7b99821111bc19f8b2c3d3c42ee1806f23fdb9b53a10747d33ac5068b822587f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKEVJR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDR7wczGw5RL7XBLG9eUh1MOdUAxnps618yqumtWelOtAiA4HdyHr%2Bl01FCCHQ8kyGL1IrL%2FWh46hwUI6cL2iOOGPir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTfRvAmb4Uh%2FZcyhRKtwD%2FW8300j4wuJnlH83leWd%2FtE8ytCgrDpLAO3jfZxNKeKHFnmj4OG9%2B2lagJEG%2FG09tkp%2FbiCEjrTt73yqYQIcbkUjPTmdzLzak4%2BYD0114jt4zm4VNitSf%2FCIgKfaLjYbepZG%2BRz%2FAeqoyYjVrHugb%2BTtO%2B4%2FI1Pw9Ay5eRKILsfwVzGl5164RQr%2FvGP8dQwFpPFA1bWDrn%2BKqsafQV2y3S%2BxMDbCD45vXhvxQt1rP5At5GwPZfniVBZ4bf5T593PCgKYVfWkIUNRgktCs2Ma2if2gWvyl%2F0BpzWYbg2ytTeiIK7onh%2FTkyi1%2Ft%2BjWRwqSJmPZq8IvYxigVvFjfuQbBbDT90m2gYgC5ezY1kqp4lBv1iM1x7cAk1atwAtpXfELG%2FGEgTi%2BDEomQZtZvI1mleCKWHv1nn9l5nA5g3dh9u5wnZW5qvusIhOs%2Bco7CVsxTZJNBJa6A7j68jCa1bnLzcfiifE969G2IU4x%2FL6lJf5trypJYL0PNz9WSaBjRaibdgaeTVNDsDgj9Oo1PzZza%2FS4ttHKZw2RSekYaV%2BCC5ydiyaDAslrosDzr5vrZX1LvTD0dyY%2FU%2B0Ah%2Bm%2Bzh%2FZ7n%2BdEqE%2B%2FV0UDrU6GSF%2BmdrZT0z6EI2%2Bg2YtRgwprS%2FvQY6pgHNNgxpaGRqq8JLE%2BYfcV04EiKxDZprVfvS2lXd6jkvTLmE%2FvoGfY77BRME5zQ8Wg%2FMxUg2Re5RRKs%2FRs3920XCu%2BiKjoxRL3uDPyGVa58LnIb45lnhLq5oKvv4X7M47m4UuhtfLZZnbqqlDVKTNW8A3%2Fg4BIH8Lmv30AFjf81BnOZaAtaQOW%2Bx1fPa65dF5x5X4duaqevZGICLNDjAiFsOqxXCD7RE&X-Amz-Signature=481934c6a5ace64ad63da4d486fbbba7125caa911f30fcb29a6c8169cbc98d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKEVJR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDR7wczGw5RL7XBLG9eUh1MOdUAxnps618yqumtWelOtAiA4HdyHr%2Bl01FCCHQ8kyGL1IrL%2FWh46hwUI6cL2iOOGPir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTfRvAmb4Uh%2FZcyhRKtwD%2FW8300j4wuJnlH83leWd%2FtE8ytCgrDpLAO3jfZxNKeKHFnmj4OG9%2B2lagJEG%2FG09tkp%2FbiCEjrTt73yqYQIcbkUjPTmdzLzak4%2BYD0114jt4zm4VNitSf%2FCIgKfaLjYbepZG%2BRz%2FAeqoyYjVrHugb%2BTtO%2B4%2FI1Pw9Ay5eRKILsfwVzGl5164RQr%2FvGP8dQwFpPFA1bWDrn%2BKqsafQV2y3S%2BxMDbCD45vXhvxQt1rP5At5GwPZfniVBZ4bf5T593PCgKYVfWkIUNRgktCs2Ma2if2gWvyl%2F0BpzWYbg2ytTeiIK7onh%2FTkyi1%2Ft%2BjWRwqSJmPZq8IvYxigVvFjfuQbBbDT90m2gYgC5ezY1kqp4lBv1iM1x7cAk1atwAtpXfELG%2FGEgTi%2BDEomQZtZvI1mleCKWHv1nn9l5nA5g3dh9u5wnZW5qvusIhOs%2Bco7CVsxTZJNBJa6A7j68jCa1bnLzcfiifE969G2IU4x%2FL6lJf5trypJYL0PNz9WSaBjRaibdgaeTVNDsDgj9Oo1PzZza%2FS4ttHKZw2RSekYaV%2BCC5ydiyaDAslrosDzr5vrZX1LvTD0dyY%2FU%2B0Ah%2Bm%2Bzh%2FZ7n%2BdEqE%2B%2FV0UDrU6GSF%2BmdrZT0z6EI2%2Bg2YtRgwprS%2FvQY6pgHNNgxpaGRqq8JLE%2BYfcV04EiKxDZprVfvS2lXd6jkvTLmE%2FvoGfY77BRME5zQ8Wg%2FMxUg2Re5RRKs%2FRs3920XCu%2BiKjoxRL3uDPyGVa58LnIb45lnhLq5oKvv4X7M47m4UuhtfLZZnbqqlDVKTNW8A3%2Fg4BIH8Lmv30AFjf81BnOZaAtaQOW%2Bx1fPa65dF5x5X4duaqevZGICLNDjAiFsOqxXCD7RE&X-Amz-Signature=beb5ca3cfaad8139857927b6aca3b60cc1f51479336bda918296098c84b951e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKEVJR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDR7wczGw5RL7XBLG9eUh1MOdUAxnps618yqumtWelOtAiA4HdyHr%2Bl01FCCHQ8kyGL1IrL%2FWh46hwUI6cL2iOOGPir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTfRvAmb4Uh%2FZcyhRKtwD%2FW8300j4wuJnlH83leWd%2FtE8ytCgrDpLAO3jfZxNKeKHFnmj4OG9%2B2lagJEG%2FG09tkp%2FbiCEjrTt73yqYQIcbkUjPTmdzLzak4%2BYD0114jt4zm4VNitSf%2FCIgKfaLjYbepZG%2BRz%2FAeqoyYjVrHugb%2BTtO%2B4%2FI1Pw9Ay5eRKILsfwVzGl5164RQr%2FvGP8dQwFpPFA1bWDrn%2BKqsafQV2y3S%2BxMDbCD45vXhvxQt1rP5At5GwPZfniVBZ4bf5T593PCgKYVfWkIUNRgktCs2Ma2if2gWvyl%2F0BpzWYbg2ytTeiIK7onh%2FTkyi1%2Ft%2BjWRwqSJmPZq8IvYxigVvFjfuQbBbDT90m2gYgC5ezY1kqp4lBv1iM1x7cAk1atwAtpXfELG%2FGEgTi%2BDEomQZtZvI1mleCKWHv1nn9l5nA5g3dh9u5wnZW5qvusIhOs%2Bco7CVsxTZJNBJa6A7j68jCa1bnLzcfiifE969G2IU4x%2FL6lJf5trypJYL0PNz9WSaBjRaibdgaeTVNDsDgj9Oo1PzZza%2FS4ttHKZw2RSekYaV%2BCC5ydiyaDAslrosDzr5vrZX1LvTD0dyY%2FU%2B0Ah%2Bm%2Bzh%2FZ7n%2BdEqE%2B%2FV0UDrU6GSF%2BmdrZT0z6EI2%2Bg2YtRgwprS%2FvQY6pgHNNgxpaGRqq8JLE%2BYfcV04EiKxDZprVfvS2lXd6jkvTLmE%2FvoGfY77BRME5zQ8Wg%2FMxUg2Re5RRKs%2FRs3920XCu%2BiKjoxRL3uDPyGVa58LnIb45lnhLq5oKvv4X7M47m4UuhtfLZZnbqqlDVKTNW8A3%2Fg4BIH8Lmv30AFjf81BnOZaAtaQOW%2Bx1fPa65dF5x5X4duaqevZGICLNDjAiFsOqxXCD7RE&X-Amz-Signature=076b6ce29af4bd6d882dd962ab29983e4823fc9dea096b165e39f6851e57046d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKEVJR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDR7wczGw5RL7XBLG9eUh1MOdUAxnps618yqumtWelOtAiA4HdyHr%2Bl01FCCHQ8kyGL1IrL%2FWh46hwUI6cL2iOOGPir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTfRvAmb4Uh%2FZcyhRKtwD%2FW8300j4wuJnlH83leWd%2FtE8ytCgrDpLAO3jfZxNKeKHFnmj4OG9%2B2lagJEG%2FG09tkp%2FbiCEjrTt73yqYQIcbkUjPTmdzLzak4%2BYD0114jt4zm4VNitSf%2FCIgKfaLjYbepZG%2BRz%2FAeqoyYjVrHugb%2BTtO%2B4%2FI1Pw9Ay5eRKILsfwVzGl5164RQr%2FvGP8dQwFpPFA1bWDrn%2BKqsafQV2y3S%2BxMDbCD45vXhvxQt1rP5At5GwPZfniVBZ4bf5T593PCgKYVfWkIUNRgktCs2Ma2if2gWvyl%2F0BpzWYbg2ytTeiIK7onh%2FTkyi1%2Ft%2BjWRwqSJmPZq8IvYxigVvFjfuQbBbDT90m2gYgC5ezY1kqp4lBv1iM1x7cAk1atwAtpXfELG%2FGEgTi%2BDEomQZtZvI1mleCKWHv1nn9l5nA5g3dh9u5wnZW5qvusIhOs%2Bco7CVsxTZJNBJa6A7j68jCa1bnLzcfiifE969G2IU4x%2FL6lJf5trypJYL0PNz9WSaBjRaibdgaeTVNDsDgj9Oo1PzZza%2FS4ttHKZw2RSekYaV%2BCC5ydiyaDAslrosDzr5vrZX1LvTD0dyY%2FU%2B0Ah%2Bm%2Bzh%2FZ7n%2BdEqE%2B%2FV0UDrU6GSF%2BmdrZT0z6EI2%2Bg2YtRgwprS%2FvQY6pgHNNgxpaGRqq8JLE%2BYfcV04EiKxDZprVfvS2lXd6jkvTLmE%2FvoGfY77BRME5zQ8Wg%2FMxUg2Re5RRKs%2FRs3920XCu%2BiKjoxRL3uDPyGVa58LnIb45lnhLq5oKvv4X7M47m4UuhtfLZZnbqqlDVKTNW8A3%2Fg4BIH8Lmv30AFjf81BnOZaAtaQOW%2Bx1fPa65dF5x5X4duaqevZGICLNDjAiFsOqxXCD7RE&X-Amz-Signature=844f70516c8070cdaf3af1d69d674ac78e901ce0d1f20e460e60e0411b95e381&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKEVJR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDR7wczGw5RL7XBLG9eUh1MOdUAxnps618yqumtWelOtAiA4HdyHr%2Bl01FCCHQ8kyGL1IrL%2FWh46hwUI6cL2iOOGPir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMTfRvAmb4Uh%2FZcyhRKtwD%2FW8300j4wuJnlH83leWd%2FtE8ytCgrDpLAO3jfZxNKeKHFnmj4OG9%2B2lagJEG%2FG09tkp%2FbiCEjrTt73yqYQIcbkUjPTmdzLzak4%2BYD0114jt4zm4VNitSf%2FCIgKfaLjYbepZG%2BRz%2FAeqoyYjVrHugb%2BTtO%2B4%2FI1Pw9Ay5eRKILsfwVzGl5164RQr%2FvGP8dQwFpPFA1bWDrn%2BKqsafQV2y3S%2BxMDbCD45vXhvxQt1rP5At5GwPZfniVBZ4bf5T593PCgKYVfWkIUNRgktCs2Ma2if2gWvyl%2F0BpzWYbg2ytTeiIK7onh%2FTkyi1%2Ft%2BjWRwqSJmPZq8IvYxigVvFjfuQbBbDT90m2gYgC5ezY1kqp4lBv1iM1x7cAk1atwAtpXfELG%2FGEgTi%2BDEomQZtZvI1mleCKWHv1nn9l5nA5g3dh9u5wnZW5qvusIhOs%2Bco7CVsxTZJNBJa6A7j68jCa1bnLzcfiifE969G2IU4x%2FL6lJf5trypJYL0PNz9WSaBjRaibdgaeTVNDsDgj9Oo1PzZza%2FS4ttHKZw2RSekYaV%2BCC5ydiyaDAslrosDzr5vrZX1LvTD0dyY%2FU%2B0Ah%2Bm%2Bzh%2FZ7n%2BdEqE%2B%2FV0UDrU6GSF%2BmdrZT0z6EI2%2Bg2YtRgwprS%2FvQY6pgHNNgxpaGRqq8JLE%2BYfcV04EiKxDZprVfvS2lXd6jkvTLmE%2FvoGfY77BRME5zQ8Wg%2FMxUg2Re5RRKs%2FRs3920XCu%2BiKjoxRL3uDPyGVa58LnIb45lnhLq5oKvv4X7M47m4UuhtfLZZnbqqlDVKTNW8A3%2Fg4BIH8Lmv30AFjf81BnOZaAtaQOW%2Bx1fPa65dF5x5X4duaqevZGICLNDjAiFsOqxXCD7RE&X-Amz-Signature=6fff5622f4e5d178955560fa504d8800b9174581287192e50a27bcbac620aae1&X-Amz-SignedHeaders=host&x-id=GetObject)
