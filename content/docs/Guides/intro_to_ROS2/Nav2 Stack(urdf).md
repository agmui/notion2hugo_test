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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NIVG3G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBzSLBiJBdC%2FZU8%2FMOpnKtc5e3nfV9Itd6enoB52HUdYAiB%2F%2BepzXeilZrRW9jogonedhr3%2FNcignx3QAEJ42Vy0eir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFOVzKKyKcD4jaA5wKtwDTzjZ1csMQN74gOabZfPiGGhgFrN5LWSr7OZk6sGU%2BhjjN%2B5inn5QFXIil1L2cS5Esbb8CWqJKYfDhDsF7sfHSuQyhRZgQeWhdCpIYFxIum%2FW0hA39AI1yXhal6vH1gKv47beWAo0HAbPOp4HUfIXnr5Mf%2BA3vpKPkr2swOnbt23hTMGrUPPoJyIkBhP%2FMBSAkq1dE4hjoYm6TANjdGIpwLFtatdN%2BqANnA342%2BAmXwlQIn0rliqwOADMhcQds5dM9ZF%2Fcj4dGGKPlrI%2F4epExJA7JhlEEqbrkeIHDfy7RoxXHWT9MlqlJSnZWYo%2BcKScWJiohDRlA5wB54t5b0nAZEEac9S578G%2F0omDYt5ajs%2Fym3RUsDf%2Bm7i0eu5uW75%2FzqKS99Sz8EKCxxrCcvNwaizzOvdVSWfaunesV1eALUHZQnV5j1HHw2Ed8UM2%2B8qj7hvOu%2B%2FXreUN04pEHEzd2EGrt0HIF%2BKzmRYf3IUJlyQ1gHFrSBbCeGEXFhSMeTOnpKcphkfWOd0%2BHam14U0d3VO%2B0dgLKRh75S07nXJPeoXEFqCvFbjU7XpygL%2FUXff3%2BH6wBxcT9lnszv1zZ%2BAh7NByA5zpXkqcppuL7NjjciLMoyjzaE513mZQRiwwpu7hwwY6pgEIMRCdlNxxhQSa%2B0rf4jO5pUKxSUvbKPu%2FwNyqatOSxqVQdYS69tot3RrpGa6O6WWvlyClnDQxjTdcyuIUSEMlY2hahqMV1NIllexFkjLvR0K%2BEhhNwEyg2380BPE5ZuL5hSGGSqpL9UXl2AOGdQMRgYl0OPtY3yZBrtLdzkrIkexEfGbNfAHeLkXJOLQ7Wejs%2B9Q1BpB36u6eSJgp69MXERfydTih&X-Amz-Signature=6c5bf3698f75810c4c5e80aedc8fb3343a5ec1c9f3ae64ac4c9721d16e25fac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NIVG3G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBzSLBiJBdC%2FZU8%2FMOpnKtc5e3nfV9Itd6enoB52HUdYAiB%2F%2BepzXeilZrRW9jogonedhr3%2FNcignx3QAEJ42Vy0eir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFOVzKKyKcD4jaA5wKtwDTzjZ1csMQN74gOabZfPiGGhgFrN5LWSr7OZk6sGU%2BhjjN%2B5inn5QFXIil1L2cS5Esbb8CWqJKYfDhDsF7sfHSuQyhRZgQeWhdCpIYFxIum%2FW0hA39AI1yXhal6vH1gKv47beWAo0HAbPOp4HUfIXnr5Mf%2BA3vpKPkr2swOnbt23hTMGrUPPoJyIkBhP%2FMBSAkq1dE4hjoYm6TANjdGIpwLFtatdN%2BqANnA342%2BAmXwlQIn0rliqwOADMhcQds5dM9ZF%2Fcj4dGGKPlrI%2F4epExJA7JhlEEqbrkeIHDfy7RoxXHWT9MlqlJSnZWYo%2BcKScWJiohDRlA5wB54t5b0nAZEEac9S578G%2F0omDYt5ajs%2Fym3RUsDf%2Bm7i0eu5uW75%2FzqKS99Sz8EKCxxrCcvNwaizzOvdVSWfaunesV1eALUHZQnV5j1HHw2Ed8UM2%2B8qj7hvOu%2B%2FXreUN04pEHEzd2EGrt0HIF%2BKzmRYf3IUJlyQ1gHFrSBbCeGEXFhSMeTOnpKcphkfWOd0%2BHam14U0d3VO%2B0dgLKRh75S07nXJPeoXEFqCvFbjU7XpygL%2FUXff3%2BH6wBxcT9lnszv1zZ%2BAh7NByA5zpXkqcppuL7NjjciLMoyjzaE513mZQRiwwpu7hwwY6pgEIMRCdlNxxhQSa%2B0rf4jO5pUKxSUvbKPu%2FwNyqatOSxqVQdYS69tot3RrpGa6O6WWvlyClnDQxjTdcyuIUSEMlY2hahqMV1NIllexFkjLvR0K%2BEhhNwEyg2380BPE5ZuL5hSGGSqpL9UXl2AOGdQMRgYl0OPtY3yZBrtLdzkrIkexEfGbNfAHeLkXJOLQ7Wejs%2B9Q1BpB36u6eSJgp69MXERfydTih&X-Amz-Signature=16d44aad082016e9a083b8846756bdbdc1e77e17a137f75eef13449a77cceff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NIVG3G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBzSLBiJBdC%2FZU8%2FMOpnKtc5e3nfV9Itd6enoB52HUdYAiB%2F%2BepzXeilZrRW9jogonedhr3%2FNcignx3QAEJ42Vy0eir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFOVzKKyKcD4jaA5wKtwDTzjZ1csMQN74gOabZfPiGGhgFrN5LWSr7OZk6sGU%2BhjjN%2B5inn5QFXIil1L2cS5Esbb8CWqJKYfDhDsF7sfHSuQyhRZgQeWhdCpIYFxIum%2FW0hA39AI1yXhal6vH1gKv47beWAo0HAbPOp4HUfIXnr5Mf%2BA3vpKPkr2swOnbt23hTMGrUPPoJyIkBhP%2FMBSAkq1dE4hjoYm6TANjdGIpwLFtatdN%2BqANnA342%2BAmXwlQIn0rliqwOADMhcQds5dM9ZF%2Fcj4dGGKPlrI%2F4epExJA7JhlEEqbrkeIHDfy7RoxXHWT9MlqlJSnZWYo%2BcKScWJiohDRlA5wB54t5b0nAZEEac9S578G%2F0omDYt5ajs%2Fym3RUsDf%2Bm7i0eu5uW75%2FzqKS99Sz8EKCxxrCcvNwaizzOvdVSWfaunesV1eALUHZQnV5j1HHw2Ed8UM2%2B8qj7hvOu%2B%2FXreUN04pEHEzd2EGrt0HIF%2BKzmRYf3IUJlyQ1gHFrSBbCeGEXFhSMeTOnpKcphkfWOd0%2BHam14U0d3VO%2B0dgLKRh75S07nXJPeoXEFqCvFbjU7XpygL%2FUXff3%2BH6wBxcT9lnszv1zZ%2BAh7NByA5zpXkqcppuL7NjjciLMoyjzaE513mZQRiwwpu7hwwY6pgEIMRCdlNxxhQSa%2B0rf4jO5pUKxSUvbKPu%2FwNyqatOSxqVQdYS69tot3RrpGa6O6WWvlyClnDQxjTdcyuIUSEMlY2hahqMV1NIllexFkjLvR0K%2BEhhNwEyg2380BPE5ZuL5hSGGSqpL9UXl2AOGdQMRgYl0OPtY3yZBrtLdzkrIkexEfGbNfAHeLkXJOLQ7Wejs%2B9Q1BpB36u6eSJgp69MXERfydTih&X-Amz-Signature=a3169c57473765f7cb2096fa7e1cff60d561da98c21f3967d1f6a4830aa3257c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NIVG3G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBzSLBiJBdC%2FZU8%2FMOpnKtc5e3nfV9Itd6enoB52HUdYAiB%2F%2BepzXeilZrRW9jogonedhr3%2FNcignx3QAEJ42Vy0eir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFOVzKKyKcD4jaA5wKtwDTzjZ1csMQN74gOabZfPiGGhgFrN5LWSr7OZk6sGU%2BhjjN%2B5inn5QFXIil1L2cS5Esbb8CWqJKYfDhDsF7sfHSuQyhRZgQeWhdCpIYFxIum%2FW0hA39AI1yXhal6vH1gKv47beWAo0HAbPOp4HUfIXnr5Mf%2BA3vpKPkr2swOnbt23hTMGrUPPoJyIkBhP%2FMBSAkq1dE4hjoYm6TANjdGIpwLFtatdN%2BqANnA342%2BAmXwlQIn0rliqwOADMhcQds5dM9ZF%2Fcj4dGGKPlrI%2F4epExJA7JhlEEqbrkeIHDfy7RoxXHWT9MlqlJSnZWYo%2BcKScWJiohDRlA5wB54t5b0nAZEEac9S578G%2F0omDYt5ajs%2Fym3RUsDf%2Bm7i0eu5uW75%2FzqKS99Sz8EKCxxrCcvNwaizzOvdVSWfaunesV1eALUHZQnV5j1HHw2Ed8UM2%2B8qj7hvOu%2B%2FXreUN04pEHEzd2EGrt0HIF%2BKzmRYf3IUJlyQ1gHFrSBbCeGEXFhSMeTOnpKcphkfWOd0%2BHam14U0d3VO%2B0dgLKRh75S07nXJPeoXEFqCvFbjU7XpygL%2FUXff3%2BH6wBxcT9lnszv1zZ%2BAh7NByA5zpXkqcppuL7NjjciLMoyjzaE513mZQRiwwpu7hwwY6pgEIMRCdlNxxhQSa%2B0rf4jO5pUKxSUvbKPu%2FwNyqatOSxqVQdYS69tot3RrpGa6O6WWvlyClnDQxjTdcyuIUSEMlY2hahqMV1NIllexFkjLvR0K%2BEhhNwEyg2380BPE5ZuL5hSGGSqpL9UXl2AOGdQMRgYl0OPtY3yZBrtLdzkrIkexEfGbNfAHeLkXJOLQ7Wejs%2B9Q1BpB36u6eSJgp69MXERfydTih&X-Amz-Signature=4293da05d236ca871f481b2aea1f00d51249fed9708ba4b3c7adcc1ddc5619be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NIVG3G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBzSLBiJBdC%2FZU8%2FMOpnKtc5e3nfV9Itd6enoB52HUdYAiB%2F%2BepzXeilZrRW9jogonedhr3%2FNcignx3QAEJ42Vy0eir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFOVzKKyKcD4jaA5wKtwDTzjZ1csMQN74gOabZfPiGGhgFrN5LWSr7OZk6sGU%2BhjjN%2B5inn5QFXIil1L2cS5Esbb8CWqJKYfDhDsF7sfHSuQyhRZgQeWhdCpIYFxIum%2FW0hA39AI1yXhal6vH1gKv47beWAo0HAbPOp4HUfIXnr5Mf%2BA3vpKPkr2swOnbt23hTMGrUPPoJyIkBhP%2FMBSAkq1dE4hjoYm6TANjdGIpwLFtatdN%2BqANnA342%2BAmXwlQIn0rliqwOADMhcQds5dM9ZF%2Fcj4dGGKPlrI%2F4epExJA7JhlEEqbrkeIHDfy7RoxXHWT9MlqlJSnZWYo%2BcKScWJiohDRlA5wB54t5b0nAZEEac9S578G%2F0omDYt5ajs%2Fym3RUsDf%2Bm7i0eu5uW75%2FzqKS99Sz8EKCxxrCcvNwaizzOvdVSWfaunesV1eALUHZQnV5j1HHw2Ed8UM2%2B8qj7hvOu%2B%2FXreUN04pEHEzd2EGrt0HIF%2BKzmRYf3IUJlyQ1gHFrSBbCeGEXFhSMeTOnpKcphkfWOd0%2BHam14U0d3VO%2B0dgLKRh75S07nXJPeoXEFqCvFbjU7XpygL%2FUXff3%2BH6wBxcT9lnszv1zZ%2BAh7NByA5zpXkqcppuL7NjjciLMoyjzaE513mZQRiwwpu7hwwY6pgEIMRCdlNxxhQSa%2B0rf4jO5pUKxSUvbKPu%2FwNyqatOSxqVQdYS69tot3RrpGa6O6WWvlyClnDQxjTdcyuIUSEMlY2hahqMV1NIllexFkjLvR0K%2BEhhNwEyg2380BPE5ZuL5hSGGSqpL9UXl2AOGdQMRgYl0OPtY3yZBrtLdzkrIkexEfGbNfAHeLkXJOLQ7Wejs%2B9Q1BpB36u6eSJgp69MXERfydTih&X-Amz-Signature=c3b3a711abd640ae3a011177feadc38212bd98624726bc7d74fdbd13788c4c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NIVG3G%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBzSLBiJBdC%2FZU8%2FMOpnKtc5e3nfV9Itd6enoB52HUdYAiB%2F%2BepzXeilZrRW9jogonedhr3%2FNcignx3QAEJ42Vy0eir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFOVzKKyKcD4jaA5wKtwDTzjZ1csMQN74gOabZfPiGGhgFrN5LWSr7OZk6sGU%2BhjjN%2B5inn5QFXIil1L2cS5Esbb8CWqJKYfDhDsF7sfHSuQyhRZgQeWhdCpIYFxIum%2FW0hA39AI1yXhal6vH1gKv47beWAo0HAbPOp4HUfIXnr5Mf%2BA3vpKPkr2swOnbt23hTMGrUPPoJyIkBhP%2FMBSAkq1dE4hjoYm6TANjdGIpwLFtatdN%2BqANnA342%2BAmXwlQIn0rliqwOADMhcQds5dM9ZF%2Fcj4dGGKPlrI%2F4epExJA7JhlEEqbrkeIHDfy7RoxXHWT9MlqlJSnZWYo%2BcKScWJiohDRlA5wB54t5b0nAZEEac9S578G%2F0omDYt5ajs%2Fym3RUsDf%2Bm7i0eu5uW75%2FzqKS99Sz8EKCxxrCcvNwaizzOvdVSWfaunesV1eALUHZQnV5j1HHw2Ed8UM2%2B8qj7hvOu%2B%2FXreUN04pEHEzd2EGrt0HIF%2BKzmRYf3IUJlyQ1gHFrSBbCeGEXFhSMeTOnpKcphkfWOd0%2BHam14U0d3VO%2B0dgLKRh75S07nXJPeoXEFqCvFbjU7XpygL%2FUXff3%2BH6wBxcT9lnszv1zZ%2BAh7NByA5zpXkqcppuL7NjjciLMoyjzaE513mZQRiwwpu7hwwY6pgEIMRCdlNxxhQSa%2B0rf4jO5pUKxSUvbKPu%2FwNyqatOSxqVQdYS69tot3RrpGa6O6WWvlyClnDQxjTdcyuIUSEMlY2hahqMV1NIllexFkjLvR0K%2BEhhNwEyg2380BPE5ZuL5hSGGSqpL9UXl2AOGdQMRgYl0OPtY3yZBrtLdzkrIkexEfGbNfAHeLkXJOLQ7Wejs%2B9Q1BpB36u6eSJgp69MXERfydTih&X-Amz-Signature=449c5935d170a04d9cf1bca0351ce4dad05c493cfff4f1108899dba8eff1dbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
