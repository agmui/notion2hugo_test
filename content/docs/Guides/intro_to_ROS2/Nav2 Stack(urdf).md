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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNFFQWO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCID3d5xTmehshJ8ajkWnVNlmOZwiOzAZOuqoLvqV4UL3mAiEAhpItcYw7bPm5uN8SRYa1WyPO9XHziXCG1B3fkwS2Ek0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58NdJJDKWmWpkv1ircAwTRIq%2FkGxaIFa09MHIjUgnUzeSSuCjPctqyo9o2eAKOYCa4XVpid4AtaWSYZQZTDQ5VoFIwWT2vVS8AYpgsPcTJve2N8HpPVTLCk7EBMXG%2Bb9smuxkWgyJagVgXtFHHoR973eWH%2FjxvFwu5Q1qG%2BSszGurGkDNZ4PPro2DAKVEUZWrcbG7jmPA8akSKzyqwf3vQcLvy8Ax2CcSVkaKK5sfPLPwDL38vggnBvSEoBttlcWVYNM48t09FScaRF%2FPuSZ%2Fv0NUqWRpENNgFd%2BjCpcVcv%2BabNvDJKf5792a415qdWw1%2BpXCJ8L92vY%2BKT3y6KR1q3NL%2FekXkIA4xNyNoDVoE9eXf9jeeJQBTuohyt0glXAP%2F4B1JvG0GNKxbZ5AUhdp1TJU43ZaGnc11lCwBCKiBK5arMjgZyiHt3t4AfIqV55vVXZ8vKvOUhl%2Bhc3TnFlYllfTADXDaAFkWjUoCb2Yk9CGDMs5WsDN%2FLoai8uWZzkuONIt5lOCMTAepiSFe1P20qT1AxK3F8k%2FWzTxLCymSi2guDeQm8d5rIME1BdIwdESDBxmANCv7bAUd9VqbL0YK5%2F0fbDeGjQT%2FQ%2F89epy4M%2F4%2FHJKFosFqxCJ5%2BA0jgJLbJtJ5mVOaAyYIMKzX9MEGOqUBC4l82bYbensj1CCSXpB4bIb3zCA1OY%2Bk14OxTB93vwuQoTxMzpi49IM%2FJ%2BbgaXIgOpGTRJw8vr5Av4omYw2zmd1v2tVedJNnIar3KVhVA6hXGr2fJr0dx2MWbhSuuwXbsqPxnIWeoAnG2z089jBJzei6z5qDU56%2FOOFIiXS8b03tUW23GRU73vrqgUaH3aE2oo3WA3u2GpIVWDjEkMm6bj31VexS&X-Amz-Signature=34c7c7f56e68ba2f50994c617f7dd21ec04cf66cf28db8c69d23302346051b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNFFQWO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCID3d5xTmehshJ8ajkWnVNlmOZwiOzAZOuqoLvqV4UL3mAiEAhpItcYw7bPm5uN8SRYa1WyPO9XHziXCG1B3fkwS2Ek0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58NdJJDKWmWpkv1ircAwTRIq%2FkGxaIFa09MHIjUgnUzeSSuCjPctqyo9o2eAKOYCa4XVpid4AtaWSYZQZTDQ5VoFIwWT2vVS8AYpgsPcTJve2N8HpPVTLCk7EBMXG%2Bb9smuxkWgyJagVgXtFHHoR973eWH%2FjxvFwu5Q1qG%2BSszGurGkDNZ4PPro2DAKVEUZWrcbG7jmPA8akSKzyqwf3vQcLvy8Ax2CcSVkaKK5sfPLPwDL38vggnBvSEoBttlcWVYNM48t09FScaRF%2FPuSZ%2Fv0NUqWRpENNgFd%2BjCpcVcv%2BabNvDJKf5792a415qdWw1%2BpXCJ8L92vY%2BKT3y6KR1q3NL%2FekXkIA4xNyNoDVoE9eXf9jeeJQBTuohyt0glXAP%2F4B1JvG0GNKxbZ5AUhdp1TJU43ZaGnc11lCwBCKiBK5arMjgZyiHt3t4AfIqV55vVXZ8vKvOUhl%2Bhc3TnFlYllfTADXDaAFkWjUoCb2Yk9CGDMs5WsDN%2FLoai8uWZzkuONIt5lOCMTAepiSFe1P20qT1AxK3F8k%2FWzTxLCymSi2guDeQm8d5rIME1BdIwdESDBxmANCv7bAUd9VqbL0YK5%2F0fbDeGjQT%2FQ%2F89epy4M%2F4%2FHJKFosFqxCJ5%2BA0jgJLbJtJ5mVOaAyYIMKzX9MEGOqUBC4l82bYbensj1CCSXpB4bIb3zCA1OY%2Bk14OxTB93vwuQoTxMzpi49IM%2FJ%2BbgaXIgOpGTRJw8vr5Av4omYw2zmd1v2tVedJNnIar3KVhVA6hXGr2fJr0dx2MWbhSuuwXbsqPxnIWeoAnG2z089jBJzei6z5qDU56%2FOOFIiXS8b03tUW23GRU73vrqgUaH3aE2oo3WA3u2GpIVWDjEkMm6bj31VexS&X-Amz-Signature=a84e8a256970d11d6cd543b1ca9b51706c4d0c7c4db2ff914d0ed60b8669fe88&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNFFQWO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCID3d5xTmehshJ8ajkWnVNlmOZwiOzAZOuqoLvqV4UL3mAiEAhpItcYw7bPm5uN8SRYa1WyPO9XHziXCG1B3fkwS2Ek0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58NdJJDKWmWpkv1ircAwTRIq%2FkGxaIFa09MHIjUgnUzeSSuCjPctqyo9o2eAKOYCa4XVpid4AtaWSYZQZTDQ5VoFIwWT2vVS8AYpgsPcTJve2N8HpPVTLCk7EBMXG%2Bb9smuxkWgyJagVgXtFHHoR973eWH%2FjxvFwu5Q1qG%2BSszGurGkDNZ4PPro2DAKVEUZWrcbG7jmPA8akSKzyqwf3vQcLvy8Ax2CcSVkaKK5sfPLPwDL38vggnBvSEoBttlcWVYNM48t09FScaRF%2FPuSZ%2Fv0NUqWRpENNgFd%2BjCpcVcv%2BabNvDJKf5792a415qdWw1%2BpXCJ8L92vY%2BKT3y6KR1q3NL%2FekXkIA4xNyNoDVoE9eXf9jeeJQBTuohyt0glXAP%2F4B1JvG0GNKxbZ5AUhdp1TJU43ZaGnc11lCwBCKiBK5arMjgZyiHt3t4AfIqV55vVXZ8vKvOUhl%2Bhc3TnFlYllfTADXDaAFkWjUoCb2Yk9CGDMs5WsDN%2FLoai8uWZzkuONIt5lOCMTAepiSFe1P20qT1AxK3F8k%2FWzTxLCymSi2guDeQm8d5rIME1BdIwdESDBxmANCv7bAUd9VqbL0YK5%2F0fbDeGjQT%2FQ%2F89epy4M%2F4%2FHJKFosFqxCJ5%2BA0jgJLbJtJ5mVOaAyYIMKzX9MEGOqUBC4l82bYbensj1CCSXpB4bIb3zCA1OY%2Bk14OxTB93vwuQoTxMzpi49IM%2FJ%2BbgaXIgOpGTRJw8vr5Av4omYw2zmd1v2tVedJNnIar3KVhVA6hXGr2fJr0dx2MWbhSuuwXbsqPxnIWeoAnG2z089jBJzei6z5qDU56%2FOOFIiXS8b03tUW23GRU73vrqgUaH3aE2oo3WA3u2GpIVWDjEkMm6bj31VexS&X-Amz-Signature=95a97df5f1e2428e0ee07e4b0cfaf22b76cbf126a3dbba4efd0818b08997a72b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNFFQWO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCID3d5xTmehshJ8ajkWnVNlmOZwiOzAZOuqoLvqV4UL3mAiEAhpItcYw7bPm5uN8SRYa1WyPO9XHziXCG1B3fkwS2Ek0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58NdJJDKWmWpkv1ircAwTRIq%2FkGxaIFa09MHIjUgnUzeSSuCjPctqyo9o2eAKOYCa4XVpid4AtaWSYZQZTDQ5VoFIwWT2vVS8AYpgsPcTJve2N8HpPVTLCk7EBMXG%2Bb9smuxkWgyJagVgXtFHHoR973eWH%2FjxvFwu5Q1qG%2BSszGurGkDNZ4PPro2DAKVEUZWrcbG7jmPA8akSKzyqwf3vQcLvy8Ax2CcSVkaKK5sfPLPwDL38vggnBvSEoBttlcWVYNM48t09FScaRF%2FPuSZ%2Fv0NUqWRpENNgFd%2BjCpcVcv%2BabNvDJKf5792a415qdWw1%2BpXCJ8L92vY%2BKT3y6KR1q3NL%2FekXkIA4xNyNoDVoE9eXf9jeeJQBTuohyt0glXAP%2F4B1JvG0GNKxbZ5AUhdp1TJU43ZaGnc11lCwBCKiBK5arMjgZyiHt3t4AfIqV55vVXZ8vKvOUhl%2Bhc3TnFlYllfTADXDaAFkWjUoCb2Yk9CGDMs5WsDN%2FLoai8uWZzkuONIt5lOCMTAepiSFe1P20qT1AxK3F8k%2FWzTxLCymSi2guDeQm8d5rIME1BdIwdESDBxmANCv7bAUd9VqbL0YK5%2F0fbDeGjQT%2FQ%2F89epy4M%2F4%2FHJKFosFqxCJ5%2BA0jgJLbJtJ5mVOaAyYIMKzX9MEGOqUBC4l82bYbensj1CCSXpB4bIb3zCA1OY%2Bk14OxTB93vwuQoTxMzpi49IM%2FJ%2BbgaXIgOpGTRJw8vr5Av4omYw2zmd1v2tVedJNnIar3KVhVA6hXGr2fJr0dx2MWbhSuuwXbsqPxnIWeoAnG2z089jBJzei6z5qDU56%2FOOFIiXS8b03tUW23GRU73vrqgUaH3aE2oo3WA3u2GpIVWDjEkMm6bj31VexS&X-Amz-Signature=4c1f9fd42eba1d7969066e4bbc74f6c84a7c80d7e47d00b089d38f75579e3f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNFFQWO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCID3d5xTmehshJ8ajkWnVNlmOZwiOzAZOuqoLvqV4UL3mAiEAhpItcYw7bPm5uN8SRYa1WyPO9XHziXCG1B3fkwS2Ek0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58NdJJDKWmWpkv1ircAwTRIq%2FkGxaIFa09MHIjUgnUzeSSuCjPctqyo9o2eAKOYCa4XVpid4AtaWSYZQZTDQ5VoFIwWT2vVS8AYpgsPcTJve2N8HpPVTLCk7EBMXG%2Bb9smuxkWgyJagVgXtFHHoR973eWH%2FjxvFwu5Q1qG%2BSszGurGkDNZ4PPro2DAKVEUZWrcbG7jmPA8akSKzyqwf3vQcLvy8Ax2CcSVkaKK5sfPLPwDL38vggnBvSEoBttlcWVYNM48t09FScaRF%2FPuSZ%2Fv0NUqWRpENNgFd%2BjCpcVcv%2BabNvDJKf5792a415qdWw1%2BpXCJ8L92vY%2BKT3y6KR1q3NL%2FekXkIA4xNyNoDVoE9eXf9jeeJQBTuohyt0glXAP%2F4B1JvG0GNKxbZ5AUhdp1TJU43ZaGnc11lCwBCKiBK5arMjgZyiHt3t4AfIqV55vVXZ8vKvOUhl%2Bhc3TnFlYllfTADXDaAFkWjUoCb2Yk9CGDMs5WsDN%2FLoai8uWZzkuONIt5lOCMTAepiSFe1P20qT1AxK3F8k%2FWzTxLCymSi2guDeQm8d5rIME1BdIwdESDBxmANCv7bAUd9VqbL0YK5%2F0fbDeGjQT%2FQ%2F89epy4M%2F4%2FHJKFosFqxCJ5%2BA0jgJLbJtJ5mVOaAyYIMKzX9MEGOqUBC4l82bYbensj1CCSXpB4bIb3zCA1OY%2Bk14OxTB93vwuQoTxMzpi49IM%2FJ%2BbgaXIgOpGTRJw8vr5Av4omYw2zmd1v2tVedJNnIar3KVhVA6hXGr2fJr0dx2MWbhSuuwXbsqPxnIWeoAnG2z089jBJzei6z5qDU56%2FOOFIiXS8b03tUW23GRU73vrqgUaH3aE2oo3WA3u2GpIVWDjEkMm6bj31VexS&X-Amz-Signature=053672dbf40d7d4db0330f579935612a5d5a73f1bce400c6e3da541c9fd35956&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNFFQWO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCID3d5xTmehshJ8ajkWnVNlmOZwiOzAZOuqoLvqV4UL3mAiEAhpItcYw7bPm5uN8SRYa1WyPO9XHziXCG1B3fkwS2Ek0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP58NdJJDKWmWpkv1ircAwTRIq%2FkGxaIFa09MHIjUgnUzeSSuCjPctqyo9o2eAKOYCa4XVpid4AtaWSYZQZTDQ5VoFIwWT2vVS8AYpgsPcTJve2N8HpPVTLCk7EBMXG%2Bb9smuxkWgyJagVgXtFHHoR973eWH%2FjxvFwu5Q1qG%2BSszGurGkDNZ4PPro2DAKVEUZWrcbG7jmPA8akSKzyqwf3vQcLvy8Ax2CcSVkaKK5sfPLPwDL38vggnBvSEoBttlcWVYNM48t09FScaRF%2FPuSZ%2Fv0NUqWRpENNgFd%2BjCpcVcv%2BabNvDJKf5792a415qdWw1%2BpXCJ8L92vY%2BKT3y6KR1q3NL%2FekXkIA4xNyNoDVoE9eXf9jeeJQBTuohyt0glXAP%2F4B1JvG0GNKxbZ5AUhdp1TJU43ZaGnc11lCwBCKiBK5arMjgZyiHt3t4AfIqV55vVXZ8vKvOUhl%2Bhc3TnFlYllfTADXDaAFkWjUoCb2Yk9CGDMs5WsDN%2FLoai8uWZzkuONIt5lOCMTAepiSFe1P20qT1AxK3F8k%2FWzTxLCymSi2guDeQm8d5rIME1BdIwdESDBxmANCv7bAUd9VqbL0YK5%2F0fbDeGjQT%2FQ%2F89epy4M%2F4%2FHJKFosFqxCJ5%2BA0jgJLbJtJ5mVOaAyYIMKzX9MEGOqUBC4l82bYbensj1CCSXpB4bIb3zCA1OY%2Bk14OxTB93vwuQoTxMzpi49IM%2FJ%2BbgaXIgOpGTRJw8vr5Av4omYw2zmd1v2tVedJNnIar3KVhVA6hXGr2fJr0dx2MWbhSuuwXbsqPxnIWeoAnG2z089jBJzei6z5qDU56%2FOOFIiXS8b03tUW23GRU73vrqgUaH3aE2oo3WA3u2GpIVWDjEkMm6bj31VexS&X-Amz-Signature=fb60cb0509255619e424be0edbd5a95a9947a2a92189a3aeb6bf0f9b9eeb3b0b&X-Amz-SignedHeaders=host&x-id=GetObject)
