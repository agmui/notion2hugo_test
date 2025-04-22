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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYFLKT3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHdbU%2F0WoVwRLKbWAfMZjiCVthSN%2BFgFbhN2DZ3LZrQMAiEA6r%2BwQC6QHfhkn4f9O3bGOvp5hYMHyBWpBT9jR6V2oT4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3DziVwTgoNKQlBVyrcA8cMciKV10ok%2BRZ7s%2BoucNYIK8QXptOoS06%2BodbMzVj%2FKDWc7Xn5UKYsBJli7f3lezstyI6x%2BQ7y%2Bmm3iSGYRxUkX6ceNlwDEJSexlG66PVdHYPQuneaWjmlzCojqfVrE0D6Yu8Cdud6MwElqs2WeNUreUS%2FgK95VQHFBs6edQkxOKqdYqYAID6Tk7Ahf5V7OL1fDCzzmRTY7HDO52bLMOtosQHlLlhqYSn2%2F1QxQN12MSn8OOCm9d%2BKqy911MiJOP8ZZ%2FCCsPZIyfXXRT%2FBs3rQxiA23rHmepTDD7tTpsACcX3wyQY%2FdxxvxEd%2Bc3RYocHnvuveWPYF1l6%2F2Wagpj1Ox1G2vXyF5Qn7JiJcwZoD%2BovC9SXGX2fk5OlSIKcQzPQeez8ifNx08geQQB2rxHLX6Xs4ZGHcboA%2BqeLUClnFAbk32oyxc25WMwEto6nNySAZDkraOazx8fVnT%2BJS2ZMvPm5%2Fs9J9zfyAhq2te1aSKBfdX2EXr0OtHSGcNhfJ6h5sWzfMUP5du%2BDRgt7daDG2SUQ1na5AQdXF%2BQ7KZkqsyDYsPBGLrko76P1nRUZFKFBpjIcuQetCBuUwqwoWhv5De3ZjUNepABAD%2BGarVA%2FTmqS%2BlgXZzab%2FTtz5MOCJnMAGOqUBk5GfHiNTQw7uGOLmWUyfUYeuJ%2FhYMpjAQyqBVqsZT88g1G938jwMZgP7ZdgyrzX3m%2FYKPRsJof%2B%2Blu1FxIn4%2Bhod34WfJc6e2M%2BOSemxZHSOAePlcf848Q7iXq16UZglGkgSD5LIRI6%2BlwRso3056fHWnwHADPjz9Yk3R6n%2F1tEBbc893LPlJr78vCZ2QTKivV%2FqSd8c%2FizMrjpiklZgxSwXkt%2By&X-Amz-Signature=967d437e977e3aa3bbfb1bee8e45e3001a218021dd40ea40624f87f9cbf162a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYFLKT3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHdbU%2F0WoVwRLKbWAfMZjiCVthSN%2BFgFbhN2DZ3LZrQMAiEA6r%2BwQC6QHfhkn4f9O3bGOvp5hYMHyBWpBT9jR6V2oT4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3DziVwTgoNKQlBVyrcA8cMciKV10ok%2BRZ7s%2BoucNYIK8QXptOoS06%2BodbMzVj%2FKDWc7Xn5UKYsBJli7f3lezstyI6x%2BQ7y%2Bmm3iSGYRxUkX6ceNlwDEJSexlG66PVdHYPQuneaWjmlzCojqfVrE0D6Yu8Cdud6MwElqs2WeNUreUS%2FgK95VQHFBs6edQkxOKqdYqYAID6Tk7Ahf5V7OL1fDCzzmRTY7HDO52bLMOtosQHlLlhqYSn2%2F1QxQN12MSn8OOCm9d%2BKqy911MiJOP8ZZ%2FCCsPZIyfXXRT%2FBs3rQxiA23rHmepTDD7tTpsACcX3wyQY%2FdxxvxEd%2Bc3RYocHnvuveWPYF1l6%2F2Wagpj1Ox1G2vXyF5Qn7JiJcwZoD%2BovC9SXGX2fk5OlSIKcQzPQeez8ifNx08geQQB2rxHLX6Xs4ZGHcboA%2BqeLUClnFAbk32oyxc25WMwEto6nNySAZDkraOazx8fVnT%2BJS2ZMvPm5%2Fs9J9zfyAhq2te1aSKBfdX2EXr0OtHSGcNhfJ6h5sWzfMUP5du%2BDRgt7daDG2SUQ1na5AQdXF%2BQ7KZkqsyDYsPBGLrko76P1nRUZFKFBpjIcuQetCBuUwqwoWhv5De3ZjUNepABAD%2BGarVA%2FTmqS%2BlgXZzab%2FTtz5MOCJnMAGOqUBk5GfHiNTQw7uGOLmWUyfUYeuJ%2FhYMpjAQyqBVqsZT88g1G938jwMZgP7ZdgyrzX3m%2FYKPRsJof%2B%2Blu1FxIn4%2Bhod34WfJc6e2M%2BOSemxZHSOAePlcf848Q7iXq16UZglGkgSD5LIRI6%2BlwRso3056fHWnwHADPjz9Yk3R6n%2F1tEBbc893LPlJr78vCZ2QTKivV%2FqSd8c%2FizMrjpiklZgxSwXkt%2By&X-Amz-Signature=c754c672ac0fd946ce64c5f96a50b6d37d1845bee3404fd5a15b07f9b300b304&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYFLKT3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHdbU%2F0WoVwRLKbWAfMZjiCVthSN%2BFgFbhN2DZ3LZrQMAiEA6r%2BwQC6QHfhkn4f9O3bGOvp5hYMHyBWpBT9jR6V2oT4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3DziVwTgoNKQlBVyrcA8cMciKV10ok%2BRZ7s%2BoucNYIK8QXptOoS06%2BodbMzVj%2FKDWc7Xn5UKYsBJli7f3lezstyI6x%2BQ7y%2Bmm3iSGYRxUkX6ceNlwDEJSexlG66PVdHYPQuneaWjmlzCojqfVrE0D6Yu8Cdud6MwElqs2WeNUreUS%2FgK95VQHFBs6edQkxOKqdYqYAID6Tk7Ahf5V7OL1fDCzzmRTY7HDO52bLMOtosQHlLlhqYSn2%2F1QxQN12MSn8OOCm9d%2BKqy911MiJOP8ZZ%2FCCsPZIyfXXRT%2FBs3rQxiA23rHmepTDD7tTpsACcX3wyQY%2FdxxvxEd%2Bc3RYocHnvuveWPYF1l6%2F2Wagpj1Ox1G2vXyF5Qn7JiJcwZoD%2BovC9SXGX2fk5OlSIKcQzPQeez8ifNx08geQQB2rxHLX6Xs4ZGHcboA%2BqeLUClnFAbk32oyxc25WMwEto6nNySAZDkraOazx8fVnT%2BJS2ZMvPm5%2Fs9J9zfyAhq2te1aSKBfdX2EXr0OtHSGcNhfJ6h5sWzfMUP5du%2BDRgt7daDG2SUQ1na5AQdXF%2BQ7KZkqsyDYsPBGLrko76P1nRUZFKFBpjIcuQetCBuUwqwoWhv5De3ZjUNepABAD%2BGarVA%2FTmqS%2BlgXZzab%2FTtz5MOCJnMAGOqUBk5GfHiNTQw7uGOLmWUyfUYeuJ%2FhYMpjAQyqBVqsZT88g1G938jwMZgP7ZdgyrzX3m%2FYKPRsJof%2B%2Blu1FxIn4%2Bhod34WfJc6e2M%2BOSemxZHSOAePlcf848Q7iXq16UZglGkgSD5LIRI6%2BlwRso3056fHWnwHADPjz9Yk3R6n%2F1tEBbc893LPlJr78vCZ2QTKivV%2FqSd8c%2FizMrjpiklZgxSwXkt%2By&X-Amz-Signature=e93982a3a4802f048305f9db76da1a722d086708c5cab40dcd1209459e79c268&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYFLKT3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHdbU%2F0WoVwRLKbWAfMZjiCVthSN%2BFgFbhN2DZ3LZrQMAiEA6r%2BwQC6QHfhkn4f9O3bGOvp5hYMHyBWpBT9jR6V2oT4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3DziVwTgoNKQlBVyrcA8cMciKV10ok%2BRZ7s%2BoucNYIK8QXptOoS06%2BodbMzVj%2FKDWc7Xn5UKYsBJli7f3lezstyI6x%2BQ7y%2Bmm3iSGYRxUkX6ceNlwDEJSexlG66PVdHYPQuneaWjmlzCojqfVrE0D6Yu8Cdud6MwElqs2WeNUreUS%2FgK95VQHFBs6edQkxOKqdYqYAID6Tk7Ahf5V7OL1fDCzzmRTY7HDO52bLMOtosQHlLlhqYSn2%2F1QxQN12MSn8OOCm9d%2BKqy911MiJOP8ZZ%2FCCsPZIyfXXRT%2FBs3rQxiA23rHmepTDD7tTpsACcX3wyQY%2FdxxvxEd%2Bc3RYocHnvuveWPYF1l6%2F2Wagpj1Ox1G2vXyF5Qn7JiJcwZoD%2BovC9SXGX2fk5OlSIKcQzPQeez8ifNx08geQQB2rxHLX6Xs4ZGHcboA%2BqeLUClnFAbk32oyxc25WMwEto6nNySAZDkraOazx8fVnT%2BJS2ZMvPm5%2Fs9J9zfyAhq2te1aSKBfdX2EXr0OtHSGcNhfJ6h5sWzfMUP5du%2BDRgt7daDG2SUQ1na5AQdXF%2BQ7KZkqsyDYsPBGLrko76P1nRUZFKFBpjIcuQetCBuUwqwoWhv5De3ZjUNepABAD%2BGarVA%2FTmqS%2BlgXZzab%2FTtz5MOCJnMAGOqUBk5GfHiNTQw7uGOLmWUyfUYeuJ%2FhYMpjAQyqBVqsZT88g1G938jwMZgP7ZdgyrzX3m%2FYKPRsJof%2B%2Blu1FxIn4%2Bhod34WfJc6e2M%2BOSemxZHSOAePlcf848Q7iXq16UZglGkgSD5LIRI6%2BlwRso3056fHWnwHADPjz9Yk3R6n%2F1tEBbc893LPlJr78vCZ2QTKivV%2FqSd8c%2FizMrjpiklZgxSwXkt%2By&X-Amz-Signature=35ce9468ef8fcd678d7c369b10ec062bcc2b26ee0e87e8c64fdc6212d94c6b92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYFLKT3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHdbU%2F0WoVwRLKbWAfMZjiCVthSN%2BFgFbhN2DZ3LZrQMAiEA6r%2BwQC6QHfhkn4f9O3bGOvp5hYMHyBWpBT9jR6V2oT4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3DziVwTgoNKQlBVyrcA8cMciKV10ok%2BRZ7s%2BoucNYIK8QXptOoS06%2BodbMzVj%2FKDWc7Xn5UKYsBJli7f3lezstyI6x%2BQ7y%2Bmm3iSGYRxUkX6ceNlwDEJSexlG66PVdHYPQuneaWjmlzCojqfVrE0D6Yu8Cdud6MwElqs2WeNUreUS%2FgK95VQHFBs6edQkxOKqdYqYAID6Tk7Ahf5V7OL1fDCzzmRTY7HDO52bLMOtosQHlLlhqYSn2%2F1QxQN12MSn8OOCm9d%2BKqy911MiJOP8ZZ%2FCCsPZIyfXXRT%2FBs3rQxiA23rHmepTDD7tTpsACcX3wyQY%2FdxxvxEd%2Bc3RYocHnvuveWPYF1l6%2F2Wagpj1Ox1G2vXyF5Qn7JiJcwZoD%2BovC9SXGX2fk5OlSIKcQzPQeez8ifNx08geQQB2rxHLX6Xs4ZGHcboA%2BqeLUClnFAbk32oyxc25WMwEto6nNySAZDkraOazx8fVnT%2BJS2ZMvPm5%2Fs9J9zfyAhq2te1aSKBfdX2EXr0OtHSGcNhfJ6h5sWzfMUP5du%2BDRgt7daDG2SUQ1na5AQdXF%2BQ7KZkqsyDYsPBGLrko76P1nRUZFKFBpjIcuQetCBuUwqwoWhv5De3ZjUNepABAD%2BGarVA%2FTmqS%2BlgXZzab%2FTtz5MOCJnMAGOqUBk5GfHiNTQw7uGOLmWUyfUYeuJ%2FhYMpjAQyqBVqsZT88g1G938jwMZgP7ZdgyrzX3m%2FYKPRsJof%2B%2Blu1FxIn4%2Bhod34WfJc6e2M%2BOSemxZHSOAePlcf848Q7iXq16UZglGkgSD5LIRI6%2BlwRso3056fHWnwHADPjz9Yk3R6n%2F1tEBbc893LPlJr78vCZ2QTKivV%2FqSd8c%2FizMrjpiklZgxSwXkt%2By&X-Amz-Signature=a325390527f88d2cd4440c8b2b6cb6baed9c118450cd34bfd6e8d035672f98ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TYFLKT3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHdbU%2F0WoVwRLKbWAfMZjiCVthSN%2BFgFbhN2DZ3LZrQMAiEA6r%2BwQC6QHfhkn4f9O3bGOvp5hYMHyBWpBT9jR6V2oT4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3DziVwTgoNKQlBVyrcA8cMciKV10ok%2BRZ7s%2BoucNYIK8QXptOoS06%2BodbMzVj%2FKDWc7Xn5UKYsBJli7f3lezstyI6x%2BQ7y%2Bmm3iSGYRxUkX6ceNlwDEJSexlG66PVdHYPQuneaWjmlzCojqfVrE0D6Yu8Cdud6MwElqs2WeNUreUS%2FgK95VQHFBs6edQkxOKqdYqYAID6Tk7Ahf5V7OL1fDCzzmRTY7HDO52bLMOtosQHlLlhqYSn2%2F1QxQN12MSn8OOCm9d%2BKqy911MiJOP8ZZ%2FCCsPZIyfXXRT%2FBs3rQxiA23rHmepTDD7tTpsACcX3wyQY%2FdxxvxEd%2Bc3RYocHnvuveWPYF1l6%2F2Wagpj1Ox1G2vXyF5Qn7JiJcwZoD%2BovC9SXGX2fk5OlSIKcQzPQeez8ifNx08geQQB2rxHLX6Xs4ZGHcboA%2BqeLUClnFAbk32oyxc25WMwEto6nNySAZDkraOazx8fVnT%2BJS2ZMvPm5%2Fs9J9zfyAhq2te1aSKBfdX2EXr0OtHSGcNhfJ6h5sWzfMUP5du%2BDRgt7daDG2SUQ1na5AQdXF%2BQ7KZkqsyDYsPBGLrko76P1nRUZFKFBpjIcuQetCBuUwqwoWhv5De3ZjUNepABAD%2BGarVA%2FTmqS%2BlgXZzab%2FTtz5MOCJnMAGOqUBk5GfHiNTQw7uGOLmWUyfUYeuJ%2FhYMpjAQyqBVqsZT88g1G938jwMZgP7ZdgyrzX3m%2FYKPRsJof%2B%2Blu1FxIn4%2Bhod34WfJc6e2M%2BOSemxZHSOAePlcf848Q7iXq16UZglGkgSD5LIRI6%2BlwRso3056fHWnwHADPjz9Yk3R6n%2F1tEBbc893LPlJr78vCZ2QTKivV%2FqSd8c%2FizMrjpiklZgxSwXkt%2By&X-Amz-Signature=f03898417392ea5b6cd92e60ea6feec532f16f8412dac3dedb80de9ae0af6a5d&X-Amz-SignedHeaders=host&x-id=GetObject)
