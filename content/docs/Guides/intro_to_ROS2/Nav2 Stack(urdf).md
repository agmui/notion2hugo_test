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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3SILRL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIBSg0%2FzPfSjWHcIPkW9aucEB3sV0u1UioKtu34YopdQIgVgn8M3jF%2Fcq0M9ezqb2Iau1S5QZ6WNxmmNeTbSGJZ9kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeVIsdPobUfah%2BbqircA8LzLIqoKDlrcOzmNgsTOS5cGgRqjE5qu2AfVWYLEeuMWBery2nDcGH7h%2Ba5ZDbTvjfyhsP12P9T5IFSJQ4rp8Hb9dtFPzgSBlP5wgXSpDrdCGWnfwvSSziOmDYlfooQePObH2Wissjk4TP5dZIIdXOzKwwpXoqnbNJTVIU4e2hogvsuHPvAiDsE7t%2Bco7YoUnP%2Fq9PmyaQeumm63h%2BPA49UTOSNy8h3x7DSZCgqkGebc2lyETroRtgVWLRsVmoxoOr1GPG5lAjZLA5Slmd7rix0Fzoe%2BrNdrtpIij9LrbFOXSSGL2CcD1if%2BJzZcMVJ72yKu6w2zJwJxgjYljV8%2F%2F6ITNR3xzHQZ9ieYSXuUnXwaHzZakWD5gfS9eyYScvWQdXinyuwkeNyTaOM%2Bbhc6kefxfECCIr4t5r5D6nf3GZGEh5ndVZLYkvGspWyMtmVZ9l1O9z4Pc3JJFJ%2F08wk7HQQN8Y6jMQcWS%2BcHuAHFk3qwE%2BEeYi2kCLb%2FJFJQE50xLxT46u4bcnqG8lSb%2F4bR5nNTaVRf1G6JxiVxppQKy9P9V064hooeN0vP4LqKMzAb9grs0OmBuap%2FMq9q0wbedCexstBd%2FkDyRvzlzoM1EqlvCaKMVrCxaEFA4UDMPH0%2Fb8GOqUB0cSKRWWalKxK7DgrkwYMCVns%2BDbad5e7foehwWXJhQoETATtUtlnmuX0zofUN6%2BQN0hFO5cJTQFFBw%2Fpr6rWejBgHR96iFI%2FX6bsO00BO6%2FW3e03idlY7NMqjKEGC1Q0pUAu4a0%2FAHvULvSUja%2Bvjh8WQz%2Bc6yluP3uWSnbIrScb1V%2F4phgHoB0iQcjqon9ZL7l10ZDAd3Br1BI7ZVxeDcuPvWc7&X-Amz-Signature=d642d87296999224ed68325295293aeb9299648caf791a5e118525ae5de33120&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3SILRL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIBSg0%2FzPfSjWHcIPkW9aucEB3sV0u1UioKtu34YopdQIgVgn8M3jF%2Fcq0M9ezqb2Iau1S5QZ6WNxmmNeTbSGJZ9kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeVIsdPobUfah%2BbqircA8LzLIqoKDlrcOzmNgsTOS5cGgRqjE5qu2AfVWYLEeuMWBery2nDcGH7h%2Ba5ZDbTvjfyhsP12P9T5IFSJQ4rp8Hb9dtFPzgSBlP5wgXSpDrdCGWnfwvSSziOmDYlfooQePObH2Wissjk4TP5dZIIdXOzKwwpXoqnbNJTVIU4e2hogvsuHPvAiDsE7t%2Bco7YoUnP%2Fq9PmyaQeumm63h%2BPA49UTOSNy8h3x7DSZCgqkGebc2lyETroRtgVWLRsVmoxoOr1GPG5lAjZLA5Slmd7rix0Fzoe%2BrNdrtpIij9LrbFOXSSGL2CcD1if%2BJzZcMVJ72yKu6w2zJwJxgjYljV8%2F%2F6ITNR3xzHQZ9ieYSXuUnXwaHzZakWD5gfS9eyYScvWQdXinyuwkeNyTaOM%2Bbhc6kefxfECCIr4t5r5D6nf3GZGEh5ndVZLYkvGspWyMtmVZ9l1O9z4Pc3JJFJ%2F08wk7HQQN8Y6jMQcWS%2BcHuAHFk3qwE%2BEeYi2kCLb%2FJFJQE50xLxT46u4bcnqG8lSb%2F4bR5nNTaVRf1G6JxiVxppQKy9P9V064hooeN0vP4LqKMzAb9grs0OmBuap%2FMq9q0wbedCexstBd%2FkDyRvzlzoM1EqlvCaKMVrCxaEFA4UDMPH0%2Fb8GOqUB0cSKRWWalKxK7DgrkwYMCVns%2BDbad5e7foehwWXJhQoETATtUtlnmuX0zofUN6%2BQN0hFO5cJTQFFBw%2Fpr6rWejBgHR96iFI%2FX6bsO00BO6%2FW3e03idlY7NMqjKEGC1Q0pUAu4a0%2FAHvULvSUja%2Bvjh8WQz%2Bc6yluP3uWSnbIrScb1V%2F4phgHoB0iQcjqon9ZL7l10ZDAd3Br1BI7ZVxeDcuPvWc7&X-Amz-Signature=07830950732da1425b805baf5be42d5b747370ded9cc93a2954152950ef55d60&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3SILRL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIBSg0%2FzPfSjWHcIPkW9aucEB3sV0u1UioKtu34YopdQIgVgn8M3jF%2Fcq0M9ezqb2Iau1S5QZ6WNxmmNeTbSGJZ9kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeVIsdPobUfah%2BbqircA8LzLIqoKDlrcOzmNgsTOS5cGgRqjE5qu2AfVWYLEeuMWBery2nDcGH7h%2Ba5ZDbTvjfyhsP12P9T5IFSJQ4rp8Hb9dtFPzgSBlP5wgXSpDrdCGWnfwvSSziOmDYlfooQePObH2Wissjk4TP5dZIIdXOzKwwpXoqnbNJTVIU4e2hogvsuHPvAiDsE7t%2Bco7YoUnP%2Fq9PmyaQeumm63h%2BPA49UTOSNy8h3x7DSZCgqkGebc2lyETroRtgVWLRsVmoxoOr1GPG5lAjZLA5Slmd7rix0Fzoe%2BrNdrtpIij9LrbFOXSSGL2CcD1if%2BJzZcMVJ72yKu6w2zJwJxgjYljV8%2F%2F6ITNR3xzHQZ9ieYSXuUnXwaHzZakWD5gfS9eyYScvWQdXinyuwkeNyTaOM%2Bbhc6kefxfECCIr4t5r5D6nf3GZGEh5ndVZLYkvGspWyMtmVZ9l1O9z4Pc3JJFJ%2F08wk7HQQN8Y6jMQcWS%2BcHuAHFk3qwE%2BEeYi2kCLb%2FJFJQE50xLxT46u4bcnqG8lSb%2F4bR5nNTaVRf1G6JxiVxppQKy9P9V064hooeN0vP4LqKMzAb9grs0OmBuap%2FMq9q0wbedCexstBd%2FkDyRvzlzoM1EqlvCaKMVrCxaEFA4UDMPH0%2Fb8GOqUB0cSKRWWalKxK7DgrkwYMCVns%2BDbad5e7foehwWXJhQoETATtUtlnmuX0zofUN6%2BQN0hFO5cJTQFFBw%2Fpr6rWejBgHR96iFI%2FX6bsO00BO6%2FW3e03idlY7NMqjKEGC1Q0pUAu4a0%2FAHvULvSUja%2Bvjh8WQz%2Bc6yluP3uWSnbIrScb1V%2F4phgHoB0iQcjqon9ZL7l10ZDAd3Br1BI7ZVxeDcuPvWc7&X-Amz-Signature=48e6370219138b6aec52455f5751ddac5265a430fba68aa58a7645da950553c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3SILRL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIBSg0%2FzPfSjWHcIPkW9aucEB3sV0u1UioKtu34YopdQIgVgn8M3jF%2Fcq0M9ezqb2Iau1S5QZ6WNxmmNeTbSGJZ9kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeVIsdPobUfah%2BbqircA8LzLIqoKDlrcOzmNgsTOS5cGgRqjE5qu2AfVWYLEeuMWBery2nDcGH7h%2Ba5ZDbTvjfyhsP12P9T5IFSJQ4rp8Hb9dtFPzgSBlP5wgXSpDrdCGWnfwvSSziOmDYlfooQePObH2Wissjk4TP5dZIIdXOzKwwpXoqnbNJTVIU4e2hogvsuHPvAiDsE7t%2Bco7YoUnP%2Fq9PmyaQeumm63h%2BPA49UTOSNy8h3x7DSZCgqkGebc2lyETroRtgVWLRsVmoxoOr1GPG5lAjZLA5Slmd7rix0Fzoe%2BrNdrtpIij9LrbFOXSSGL2CcD1if%2BJzZcMVJ72yKu6w2zJwJxgjYljV8%2F%2F6ITNR3xzHQZ9ieYSXuUnXwaHzZakWD5gfS9eyYScvWQdXinyuwkeNyTaOM%2Bbhc6kefxfECCIr4t5r5D6nf3GZGEh5ndVZLYkvGspWyMtmVZ9l1O9z4Pc3JJFJ%2F08wk7HQQN8Y6jMQcWS%2BcHuAHFk3qwE%2BEeYi2kCLb%2FJFJQE50xLxT46u4bcnqG8lSb%2F4bR5nNTaVRf1G6JxiVxppQKy9P9V064hooeN0vP4LqKMzAb9grs0OmBuap%2FMq9q0wbedCexstBd%2FkDyRvzlzoM1EqlvCaKMVrCxaEFA4UDMPH0%2Fb8GOqUB0cSKRWWalKxK7DgrkwYMCVns%2BDbad5e7foehwWXJhQoETATtUtlnmuX0zofUN6%2BQN0hFO5cJTQFFBw%2Fpr6rWejBgHR96iFI%2FX6bsO00BO6%2FW3e03idlY7NMqjKEGC1Q0pUAu4a0%2FAHvULvSUja%2Bvjh8WQz%2Bc6yluP3uWSnbIrScb1V%2F4phgHoB0iQcjqon9ZL7l10ZDAd3Br1BI7ZVxeDcuPvWc7&X-Amz-Signature=6a641580cfbfe0e2584b5cd8f67b67216768765a8854fb51f404d357503f84ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3SILRL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIBSg0%2FzPfSjWHcIPkW9aucEB3sV0u1UioKtu34YopdQIgVgn8M3jF%2Fcq0M9ezqb2Iau1S5QZ6WNxmmNeTbSGJZ9kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeVIsdPobUfah%2BbqircA8LzLIqoKDlrcOzmNgsTOS5cGgRqjE5qu2AfVWYLEeuMWBery2nDcGH7h%2Ba5ZDbTvjfyhsP12P9T5IFSJQ4rp8Hb9dtFPzgSBlP5wgXSpDrdCGWnfwvSSziOmDYlfooQePObH2Wissjk4TP5dZIIdXOzKwwpXoqnbNJTVIU4e2hogvsuHPvAiDsE7t%2Bco7YoUnP%2Fq9PmyaQeumm63h%2BPA49UTOSNy8h3x7DSZCgqkGebc2lyETroRtgVWLRsVmoxoOr1GPG5lAjZLA5Slmd7rix0Fzoe%2BrNdrtpIij9LrbFOXSSGL2CcD1if%2BJzZcMVJ72yKu6w2zJwJxgjYljV8%2F%2F6ITNR3xzHQZ9ieYSXuUnXwaHzZakWD5gfS9eyYScvWQdXinyuwkeNyTaOM%2Bbhc6kefxfECCIr4t5r5D6nf3GZGEh5ndVZLYkvGspWyMtmVZ9l1O9z4Pc3JJFJ%2F08wk7HQQN8Y6jMQcWS%2BcHuAHFk3qwE%2BEeYi2kCLb%2FJFJQE50xLxT46u4bcnqG8lSb%2F4bR5nNTaVRf1G6JxiVxppQKy9P9V064hooeN0vP4LqKMzAb9grs0OmBuap%2FMq9q0wbedCexstBd%2FkDyRvzlzoM1EqlvCaKMVrCxaEFA4UDMPH0%2Fb8GOqUB0cSKRWWalKxK7DgrkwYMCVns%2BDbad5e7foehwWXJhQoETATtUtlnmuX0zofUN6%2BQN0hFO5cJTQFFBw%2Fpr6rWejBgHR96iFI%2FX6bsO00BO6%2FW3e03idlY7NMqjKEGC1Q0pUAu4a0%2FAHvULvSUja%2Bvjh8WQz%2Bc6yluP3uWSnbIrScb1V%2F4phgHoB0iQcjqon9ZL7l10ZDAd3Br1BI7ZVxeDcuPvWc7&X-Amz-Signature=fa5f24a6cc12a64ba8b06bf19f0e36ee1017fb99342a685e9b56e9c7617f160d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE3SILRL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIBSg0%2FzPfSjWHcIPkW9aucEB3sV0u1UioKtu34YopdQIgVgn8M3jF%2Fcq0M9ezqb2Iau1S5QZ6WNxmmNeTbSGJZ9kq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeVIsdPobUfah%2BbqircA8LzLIqoKDlrcOzmNgsTOS5cGgRqjE5qu2AfVWYLEeuMWBery2nDcGH7h%2Ba5ZDbTvjfyhsP12P9T5IFSJQ4rp8Hb9dtFPzgSBlP5wgXSpDrdCGWnfwvSSziOmDYlfooQePObH2Wissjk4TP5dZIIdXOzKwwpXoqnbNJTVIU4e2hogvsuHPvAiDsE7t%2Bco7YoUnP%2Fq9PmyaQeumm63h%2BPA49UTOSNy8h3x7DSZCgqkGebc2lyETroRtgVWLRsVmoxoOr1GPG5lAjZLA5Slmd7rix0Fzoe%2BrNdrtpIij9LrbFOXSSGL2CcD1if%2BJzZcMVJ72yKu6w2zJwJxgjYljV8%2F%2F6ITNR3xzHQZ9ieYSXuUnXwaHzZakWD5gfS9eyYScvWQdXinyuwkeNyTaOM%2Bbhc6kefxfECCIr4t5r5D6nf3GZGEh5ndVZLYkvGspWyMtmVZ9l1O9z4Pc3JJFJ%2F08wk7HQQN8Y6jMQcWS%2BcHuAHFk3qwE%2BEeYi2kCLb%2FJFJQE50xLxT46u4bcnqG8lSb%2F4bR5nNTaVRf1G6JxiVxppQKy9P9V064hooeN0vP4LqKMzAb9grs0OmBuap%2FMq9q0wbedCexstBd%2FkDyRvzlzoM1EqlvCaKMVrCxaEFA4UDMPH0%2Fb8GOqUB0cSKRWWalKxK7DgrkwYMCVns%2BDbad5e7foehwWXJhQoETATtUtlnmuX0zofUN6%2BQN0hFO5cJTQFFBw%2Fpr6rWejBgHR96iFI%2FX6bsO00BO6%2FW3e03idlY7NMqjKEGC1Q0pUAu4a0%2FAHvULvSUja%2Bvjh8WQz%2Bc6yluP3uWSnbIrScb1V%2F4phgHoB0iQcjqon9ZL7l10ZDAd3Br1BI7ZVxeDcuPvWc7&X-Amz-Signature=0b0993af5434fe110c14c7ef469faf77e5f7bc6f42f3074db7800d9b861e7282&X-Amz-SignedHeaders=host&x-id=GetObject)
