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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK2WV7N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9kfeUe%2FyGV5cucxcfhMGR%2Fq8VSFxvzm6HsIjaPfO08QIhAPwNRDuCj7cWpSy%2B%2BK4ec%2FbTT%2B6gfS4mMtt%2FdLhmVadtKv8DCFIQABoMNjM3NDIzMTgzODA1IgxmDsqPJncRlAxo5Zkq3AMAoCOX%2F0sWULA%2Fvd7uR6YVr87EL%2FIthIVVomb8R1ywRWRjO7isMGTrkEr2gDCDs2xghJoaVvesDrznq8zKrOxAGOZcykM2PG2vVB%2BN1iwsxELOnFPly5wpY3c9vx7iyBSVFV6OkTyoq%2BsxtdJZ6gOlmrJgUa9DjXohbA5fc8xe8cLk16H9Tk31X1AdQT%2Bm6%2FXTB%2B92QgmXmiCvLu6k84wda9wsfrpVHTnQAl6GbEkU%2B3xkKW7oeCz9BkOomKsuYsl6qMncRTF4d%2Fq2lyA4s8l1WdkDET6p%2BZRXY2akQAIqELg9ezQ0vPVrf%2BLE6MLKhIXULULIcDzlZjNgHVczBA4cooiuM1Qb0OJERRSSd1qYzsyS8%2FPQiuhrg1FA1KmrBR7RazDUrBOwafBQAxynYCo57bu02VukJXkp0ffTEtlN9T0M2cf9S%2FwiSiGUMJQzYlB8Eo%2FtAUxmd2YdD9T3u5sHE5uqWWa%2FoPPgwfWAPluIJrbjj3tZXM3274ghIcdcnMd944F9yMV1r9ZV1u%2FyPWMsHr2uJD16mQuWYnRTb4n2dk5isarLfy9qQynSLfJhNCWYEMaF%2FJV9t1wN2WhUPsJdwKZTv%2F4qZ%2B3T6pFTzWXM4ImM0LABY%2F9FTl4RrzCn8ojCBjqkAbJ%2BoVWPcZ2oPAlxwB87ZWYqDrivONpAw4uCkgAEzXRQ3ihMjt3EIXrKiHwLO%2B%2BANkZHveWNZk3B3R%2FD7qGKDkr%2FfBovHpSppyX1bS%2FyxpVP6CgJGL7Yms37IRUHAofZxXbwdaFTZa7mjcPjk%2B10qh4h0gtF4Z4e2dErbd%2BkegK%2BeCFfwd7O1hGc183qPinI%2FgdOe5AfCaQNzkbHsgFszscoNK1A&X-Amz-Signature=a7db8263b095c7801d034039b5f20d1a6efdff9f1ea16b430cc24e88c13ae0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK2WV7N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9kfeUe%2FyGV5cucxcfhMGR%2Fq8VSFxvzm6HsIjaPfO08QIhAPwNRDuCj7cWpSy%2B%2BK4ec%2FbTT%2B6gfS4mMtt%2FdLhmVadtKv8DCFIQABoMNjM3NDIzMTgzODA1IgxmDsqPJncRlAxo5Zkq3AMAoCOX%2F0sWULA%2Fvd7uR6YVr87EL%2FIthIVVomb8R1ywRWRjO7isMGTrkEr2gDCDs2xghJoaVvesDrznq8zKrOxAGOZcykM2PG2vVB%2BN1iwsxELOnFPly5wpY3c9vx7iyBSVFV6OkTyoq%2BsxtdJZ6gOlmrJgUa9DjXohbA5fc8xe8cLk16H9Tk31X1AdQT%2Bm6%2FXTB%2B92QgmXmiCvLu6k84wda9wsfrpVHTnQAl6GbEkU%2B3xkKW7oeCz9BkOomKsuYsl6qMncRTF4d%2Fq2lyA4s8l1WdkDET6p%2BZRXY2akQAIqELg9ezQ0vPVrf%2BLE6MLKhIXULULIcDzlZjNgHVczBA4cooiuM1Qb0OJERRSSd1qYzsyS8%2FPQiuhrg1FA1KmrBR7RazDUrBOwafBQAxynYCo57bu02VukJXkp0ffTEtlN9T0M2cf9S%2FwiSiGUMJQzYlB8Eo%2FtAUxmd2YdD9T3u5sHE5uqWWa%2FoPPgwfWAPluIJrbjj3tZXM3274ghIcdcnMd944F9yMV1r9ZV1u%2FyPWMsHr2uJD16mQuWYnRTb4n2dk5isarLfy9qQynSLfJhNCWYEMaF%2FJV9t1wN2WhUPsJdwKZTv%2F4qZ%2B3T6pFTzWXM4ImM0LABY%2F9FTl4RrzCn8ojCBjqkAbJ%2BoVWPcZ2oPAlxwB87ZWYqDrivONpAw4uCkgAEzXRQ3ihMjt3EIXrKiHwLO%2B%2BANkZHveWNZk3B3R%2FD7qGKDkr%2FfBovHpSppyX1bS%2FyxpVP6CgJGL7Yms37IRUHAofZxXbwdaFTZa7mjcPjk%2B10qh4h0gtF4Z4e2dErbd%2BkegK%2BeCFfwd7O1hGc183qPinI%2FgdOe5AfCaQNzkbHsgFszscoNK1A&X-Amz-Signature=628ef82725a805c1a380bc2e9d79a508b600b09d9af200e6c302fb4ecb449283&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK2WV7N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9kfeUe%2FyGV5cucxcfhMGR%2Fq8VSFxvzm6HsIjaPfO08QIhAPwNRDuCj7cWpSy%2B%2BK4ec%2FbTT%2B6gfS4mMtt%2FdLhmVadtKv8DCFIQABoMNjM3NDIzMTgzODA1IgxmDsqPJncRlAxo5Zkq3AMAoCOX%2F0sWULA%2Fvd7uR6YVr87EL%2FIthIVVomb8R1ywRWRjO7isMGTrkEr2gDCDs2xghJoaVvesDrznq8zKrOxAGOZcykM2PG2vVB%2BN1iwsxELOnFPly5wpY3c9vx7iyBSVFV6OkTyoq%2BsxtdJZ6gOlmrJgUa9DjXohbA5fc8xe8cLk16H9Tk31X1AdQT%2Bm6%2FXTB%2B92QgmXmiCvLu6k84wda9wsfrpVHTnQAl6GbEkU%2B3xkKW7oeCz9BkOomKsuYsl6qMncRTF4d%2Fq2lyA4s8l1WdkDET6p%2BZRXY2akQAIqELg9ezQ0vPVrf%2BLE6MLKhIXULULIcDzlZjNgHVczBA4cooiuM1Qb0OJERRSSd1qYzsyS8%2FPQiuhrg1FA1KmrBR7RazDUrBOwafBQAxynYCo57bu02VukJXkp0ffTEtlN9T0M2cf9S%2FwiSiGUMJQzYlB8Eo%2FtAUxmd2YdD9T3u5sHE5uqWWa%2FoPPgwfWAPluIJrbjj3tZXM3274ghIcdcnMd944F9yMV1r9ZV1u%2FyPWMsHr2uJD16mQuWYnRTb4n2dk5isarLfy9qQynSLfJhNCWYEMaF%2FJV9t1wN2WhUPsJdwKZTv%2F4qZ%2B3T6pFTzWXM4ImM0LABY%2F9FTl4RrzCn8ojCBjqkAbJ%2BoVWPcZ2oPAlxwB87ZWYqDrivONpAw4uCkgAEzXRQ3ihMjt3EIXrKiHwLO%2B%2BANkZHveWNZk3B3R%2FD7qGKDkr%2FfBovHpSppyX1bS%2FyxpVP6CgJGL7Yms37IRUHAofZxXbwdaFTZa7mjcPjk%2B10qh4h0gtF4Z4e2dErbd%2BkegK%2BeCFfwd7O1hGc183qPinI%2FgdOe5AfCaQNzkbHsgFszscoNK1A&X-Amz-Signature=791ffaf4430e03bf1d7c5516ee5714466ed15a917846931a831f2a62d887247d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK2WV7N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9kfeUe%2FyGV5cucxcfhMGR%2Fq8VSFxvzm6HsIjaPfO08QIhAPwNRDuCj7cWpSy%2B%2BK4ec%2FbTT%2B6gfS4mMtt%2FdLhmVadtKv8DCFIQABoMNjM3NDIzMTgzODA1IgxmDsqPJncRlAxo5Zkq3AMAoCOX%2F0sWULA%2Fvd7uR6YVr87EL%2FIthIVVomb8R1ywRWRjO7isMGTrkEr2gDCDs2xghJoaVvesDrznq8zKrOxAGOZcykM2PG2vVB%2BN1iwsxELOnFPly5wpY3c9vx7iyBSVFV6OkTyoq%2BsxtdJZ6gOlmrJgUa9DjXohbA5fc8xe8cLk16H9Tk31X1AdQT%2Bm6%2FXTB%2B92QgmXmiCvLu6k84wda9wsfrpVHTnQAl6GbEkU%2B3xkKW7oeCz9BkOomKsuYsl6qMncRTF4d%2Fq2lyA4s8l1WdkDET6p%2BZRXY2akQAIqELg9ezQ0vPVrf%2BLE6MLKhIXULULIcDzlZjNgHVczBA4cooiuM1Qb0OJERRSSd1qYzsyS8%2FPQiuhrg1FA1KmrBR7RazDUrBOwafBQAxynYCo57bu02VukJXkp0ffTEtlN9T0M2cf9S%2FwiSiGUMJQzYlB8Eo%2FtAUxmd2YdD9T3u5sHE5uqWWa%2FoPPgwfWAPluIJrbjj3tZXM3274ghIcdcnMd944F9yMV1r9ZV1u%2FyPWMsHr2uJD16mQuWYnRTb4n2dk5isarLfy9qQynSLfJhNCWYEMaF%2FJV9t1wN2WhUPsJdwKZTv%2F4qZ%2B3T6pFTzWXM4ImM0LABY%2F9FTl4RrzCn8ojCBjqkAbJ%2BoVWPcZ2oPAlxwB87ZWYqDrivONpAw4uCkgAEzXRQ3ihMjt3EIXrKiHwLO%2B%2BANkZHveWNZk3B3R%2FD7qGKDkr%2FfBovHpSppyX1bS%2FyxpVP6CgJGL7Yms37IRUHAofZxXbwdaFTZa7mjcPjk%2B10qh4h0gtF4Z4e2dErbd%2BkegK%2BeCFfwd7O1hGc183qPinI%2FgdOe5AfCaQNzkbHsgFszscoNK1A&X-Amz-Signature=ba31b693f76785f44fbdd960ffc4e5e9bb60a548991628b82d810f304e6f6aee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK2WV7N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9kfeUe%2FyGV5cucxcfhMGR%2Fq8VSFxvzm6HsIjaPfO08QIhAPwNRDuCj7cWpSy%2B%2BK4ec%2FbTT%2B6gfS4mMtt%2FdLhmVadtKv8DCFIQABoMNjM3NDIzMTgzODA1IgxmDsqPJncRlAxo5Zkq3AMAoCOX%2F0sWULA%2Fvd7uR6YVr87EL%2FIthIVVomb8R1ywRWRjO7isMGTrkEr2gDCDs2xghJoaVvesDrznq8zKrOxAGOZcykM2PG2vVB%2BN1iwsxELOnFPly5wpY3c9vx7iyBSVFV6OkTyoq%2BsxtdJZ6gOlmrJgUa9DjXohbA5fc8xe8cLk16H9Tk31X1AdQT%2Bm6%2FXTB%2B92QgmXmiCvLu6k84wda9wsfrpVHTnQAl6GbEkU%2B3xkKW7oeCz9BkOomKsuYsl6qMncRTF4d%2Fq2lyA4s8l1WdkDET6p%2BZRXY2akQAIqELg9ezQ0vPVrf%2BLE6MLKhIXULULIcDzlZjNgHVczBA4cooiuM1Qb0OJERRSSd1qYzsyS8%2FPQiuhrg1FA1KmrBR7RazDUrBOwafBQAxynYCo57bu02VukJXkp0ffTEtlN9T0M2cf9S%2FwiSiGUMJQzYlB8Eo%2FtAUxmd2YdD9T3u5sHE5uqWWa%2FoPPgwfWAPluIJrbjj3tZXM3274ghIcdcnMd944F9yMV1r9ZV1u%2FyPWMsHr2uJD16mQuWYnRTb4n2dk5isarLfy9qQynSLfJhNCWYEMaF%2FJV9t1wN2WhUPsJdwKZTv%2F4qZ%2B3T6pFTzWXM4ImM0LABY%2F9FTl4RrzCn8ojCBjqkAbJ%2BoVWPcZ2oPAlxwB87ZWYqDrivONpAw4uCkgAEzXRQ3ihMjt3EIXrKiHwLO%2B%2BANkZHveWNZk3B3R%2FD7qGKDkr%2FfBovHpSppyX1bS%2FyxpVP6CgJGL7Yms37IRUHAofZxXbwdaFTZa7mjcPjk%2B10qh4h0gtF4Z4e2dErbd%2BkegK%2BeCFfwd7O1hGc183qPinI%2FgdOe5AfCaQNzkbHsgFszscoNK1A&X-Amz-Signature=066f1cead16d4756882f2e7dd64e4e4a4c92f1ba665811da237a1831fda3eb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AK2WV7N%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD9kfeUe%2FyGV5cucxcfhMGR%2Fq8VSFxvzm6HsIjaPfO08QIhAPwNRDuCj7cWpSy%2B%2BK4ec%2FbTT%2B6gfS4mMtt%2FdLhmVadtKv8DCFIQABoMNjM3NDIzMTgzODA1IgxmDsqPJncRlAxo5Zkq3AMAoCOX%2F0sWULA%2Fvd7uR6YVr87EL%2FIthIVVomb8R1ywRWRjO7isMGTrkEr2gDCDs2xghJoaVvesDrznq8zKrOxAGOZcykM2PG2vVB%2BN1iwsxELOnFPly5wpY3c9vx7iyBSVFV6OkTyoq%2BsxtdJZ6gOlmrJgUa9DjXohbA5fc8xe8cLk16H9Tk31X1AdQT%2Bm6%2FXTB%2B92QgmXmiCvLu6k84wda9wsfrpVHTnQAl6GbEkU%2B3xkKW7oeCz9BkOomKsuYsl6qMncRTF4d%2Fq2lyA4s8l1WdkDET6p%2BZRXY2akQAIqELg9ezQ0vPVrf%2BLE6MLKhIXULULIcDzlZjNgHVczBA4cooiuM1Qb0OJERRSSd1qYzsyS8%2FPQiuhrg1FA1KmrBR7RazDUrBOwafBQAxynYCo57bu02VukJXkp0ffTEtlN9T0M2cf9S%2FwiSiGUMJQzYlB8Eo%2FtAUxmd2YdD9T3u5sHE5uqWWa%2FoPPgwfWAPluIJrbjj3tZXM3274ghIcdcnMd944F9yMV1r9ZV1u%2FyPWMsHr2uJD16mQuWYnRTb4n2dk5isarLfy9qQynSLfJhNCWYEMaF%2FJV9t1wN2WhUPsJdwKZTv%2F4qZ%2B3T6pFTzWXM4ImM0LABY%2F9FTl4RrzCn8ojCBjqkAbJ%2BoVWPcZ2oPAlxwB87ZWYqDrivONpAw4uCkgAEzXRQ3ihMjt3EIXrKiHwLO%2B%2BANkZHveWNZk3B3R%2FD7qGKDkr%2FfBovHpSppyX1bS%2FyxpVP6CgJGL7Yms37IRUHAofZxXbwdaFTZa7mjcPjk%2B10qh4h0gtF4Z4e2dErbd%2BkegK%2BeCFfwd7O1hGc183qPinI%2FgdOe5AfCaQNzkbHsgFszscoNK1A&X-Amz-Signature=4b79dffd903e0e8b8e48da9127a108290a7d1c88902a75500f8ca6f430bb486f&X-Amz-SignedHeaders=host&x-id=GetObject)
