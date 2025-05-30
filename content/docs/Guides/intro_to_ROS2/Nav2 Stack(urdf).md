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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRJNIL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdJqsbKmslbWhAEis1uWbYULFHtgGVhOmTySnYWahJwIgGiOFdvmV5%2BFtLQtFW8nvQyDXGWX%2F%2B%2BMG28ErGk7mXY4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuI6j8ZrGfGMal2UyrcA07iHO%2BU9DuWLwAvQJ34sx%2B%2F88dneO60Fa3%2Byzt2A5AR2NxDt%2B1LBtNv30t6dEwZZNN7QS5h9XgKlNdRFc3u2CakkEkW0CE1Z02iV7mHMlHucc2k1BtmDhg2pdgIYfrSCyxdsTWe0Z4vSQRCTuU6%2BvmdYZ2DBFBgr7RwqJfmjAJ%2FwhUDpeoYcYqlg%2FlUnicy%2Bx95JbqSjmy5dMqOh2ZdbtKoqp7mLS2y8tbaFecVVAzmQNP6MXGXMTtBGaOd5Biyc8sVNQzc7cVkFo%2FmLobDCsXNyfQyudaFsCtcVj6sXgm0Fpr4SvlMuHwAo7YzJUFZsNqxoZIEGgufKTy3FhrGgkt%2BRvpewkHFcASVTqcNtSikQib0wjSEwES6rlbK4hZ%2BlNJQh55ZSOAWM8rOGxhhHduArdNKe2QB6MEPCrjJ8XOWGFbfD%2B1MW6yxhdyQSis0uotqD9wI21y%2FAwbOPbQ%2B3%2FwquE7cHnw%2BaUSpqo4saf6t%2FnxzEcXOCzgr72kBgXYfxLl7v0IRvX3OIUQi77d2hCzmadkANhdOTWKW3GVEksV50bMJF1YPnajYZC%2BXjIBiZYmNZVjk0GLjexfPY39po1b%2FTUbEbwTePoXdYxf18L1EC%2FAhv8cs4Er%2FthVIMNTd5MEGOqUBQLgRl7OUHkxzXuVt0sYz0OJr%2F8YttPcwbvSzf7lTR5NmSD2wqkZHf%2FTwkTX%2B9yj%2FBEBibfLYfz%2F0sDBOpTzzxwCWmFSCfGEWJ0gmObCzmvajblSc7ZJxVqt2SUXFdEQdOaM0nO8yv3aivfqK89kb%2BZ5Nf7GgUeSYJPQYCCPTuV0skx%2BnZXkDk2M3UYM2t%2BDmGdn7Slz6ok6N9YYa5ZQqs7ccrajK&X-Amz-Signature=ebce8407a82d64526e396940df6e58056454dbb09ee87b6794e153ff7b3dd407&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRJNIL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdJqsbKmslbWhAEis1uWbYULFHtgGVhOmTySnYWahJwIgGiOFdvmV5%2BFtLQtFW8nvQyDXGWX%2F%2B%2BMG28ErGk7mXY4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuI6j8ZrGfGMal2UyrcA07iHO%2BU9DuWLwAvQJ34sx%2B%2F88dneO60Fa3%2Byzt2A5AR2NxDt%2B1LBtNv30t6dEwZZNN7QS5h9XgKlNdRFc3u2CakkEkW0CE1Z02iV7mHMlHucc2k1BtmDhg2pdgIYfrSCyxdsTWe0Z4vSQRCTuU6%2BvmdYZ2DBFBgr7RwqJfmjAJ%2FwhUDpeoYcYqlg%2FlUnicy%2Bx95JbqSjmy5dMqOh2ZdbtKoqp7mLS2y8tbaFecVVAzmQNP6MXGXMTtBGaOd5Biyc8sVNQzc7cVkFo%2FmLobDCsXNyfQyudaFsCtcVj6sXgm0Fpr4SvlMuHwAo7YzJUFZsNqxoZIEGgufKTy3FhrGgkt%2BRvpewkHFcASVTqcNtSikQib0wjSEwES6rlbK4hZ%2BlNJQh55ZSOAWM8rOGxhhHduArdNKe2QB6MEPCrjJ8XOWGFbfD%2B1MW6yxhdyQSis0uotqD9wI21y%2FAwbOPbQ%2B3%2FwquE7cHnw%2BaUSpqo4saf6t%2FnxzEcXOCzgr72kBgXYfxLl7v0IRvX3OIUQi77d2hCzmadkANhdOTWKW3GVEksV50bMJF1YPnajYZC%2BXjIBiZYmNZVjk0GLjexfPY39po1b%2FTUbEbwTePoXdYxf18L1EC%2FAhv8cs4Er%2FthVIMNTd5MEGOqUBQLgRl7OUHkxzXuVt0sYz0OJr%2F8YttPcwbvSzf7lTR5NmSD2wqkZHf%2FTwkTX%2B9yj%2FBEBibfLYfz%2F0sDBOpTzzxwCWmFSCfGEWJ0gmObCzmvajblSc7ZJxVqt2SUXFdEQdOaM0nO8yv3aivfqK89kb%2BZ5Nf7GgUeSYJPQYCCPTuV0skx%2BnZXkDk2M3UYM2t%2BDmGdn7Slz6ok6N9YYa5ZQqs7ccrajK&X-Amz-Signature=b155137b868d28a6858031cddc2db581584082294c1e0bb76cc85abd162f94c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRJNIL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdJqsbKmslbWhAEis1uWbYULFHtgGVhOmTySnYWahJwIgGiOFdvmV5%2BFtLQtFW8nvQyDXGWX%2F%2B%2BMG28ErGk7mXY4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuI6j8ZrGfGMal2UyrcA07iHO%2BU9DuWLwAvQJ34sx%2B%2F88dneO60Fa3%2Byzt2A5AR2NxDt%2B1LBtNv30t6dEwZZNN7QS5h9XgKlNdRFc3u2CakkEkW0CE1Z02iV7mHMlHucc2k1BtmDhg2pdgIYfrSCyxdsTWe0Z4vSQRCTuU6%2BvmdYZ2DBFBgr7RwqJfmjAJ%2FwhUDpeoYcYqlg%2FlUnicy%2Bx95JbqSjmy5dMqOh2ZdbtKoqp7mLS2y8tbaFecVVAzmQNP6MXGXMTtBGaOd5Biyc8sVNQzc7cVkFo%2FmLobDCsXNyfQyudaFsCtcVj6sXgm0Fpr4SvlMuHwAo7YzJUFZsNqxoZIEGgufKTy3FhrGgkt%2BRvpewkHFcASVTqcNtSikQib0wjSEwES6rlbK4hZ%2BlNJQh55ZSOAWM8rOGxhhHduArdNKe2QB6MEPCrjJ8XOWGFbfD%2B1MW6yxhdyQSis0uotqD9wI21y%2FAwbOPbQ%2B3%2FwquE7cHnw%2BaUSpqo4saf6t%2FnxzEcXOCzgr72kBgXYfxLl7v0IRvX3OIUQi77d2hCzmadkANhdOTWKW3GVEksV50bMJF1YPnajYZC%2BXjIBiZYmNZVjk0GLjexfPY39po1b%2FTUbEbwTePoXdYxf18L1EC%2FAhv8cs4Er%2FthVIMNTd5MEGOqUBQLgRl7OUHkxzXuVt0sYz0OJr%2F8YttPcwbvSzf7lTR5NmSD2wqkZHf%2FTwkTX%2B9yj%2FBEBibfLYfz%2F0sDBOpTzzxwCWmFSCfGEWJ0gmObCzmvajblSc7ZJxVqt2SUXFdEQdOaM0nO8yv3aivfqK89kb%2BZ5Nf7GgUeSYJPQYCCPTuV0skx%2BnZXkDk2M3UYM2t%2BDmGdn7Slz6ok6N9YYa5ZQqs7ccrajK&X-Amz-Signature=0385b1ee76657153541572bca52963289ba9bb4555f643a378dcbc0f6d378e41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRJNIL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdJqsbKmslbWhAEis1uWbYULFHtgGVhOmTySnYWahJwIgGiOFdvmV5%2BFtLQtFW8nvQyDXGWX%2F%2B%2BMG28ErGk7mXY4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuI6j8ZrGfGMal2UyrcA07iHO%2BU9DuWLwAvQJ34sx%2B%2F88dneO60Fa3%2Byzt2A5AR2NxDt%2B1LBtNv30t6dEwZZNN7QS5h9XgKlNdRFc3u2CakkEkW0CE1Z02iV7mHMlHucc2k1BtmDhg2pdgIYfrSCyxdsTWe0Z4vSQRCTuU6%2BvmdYZ2DBFBgr7RwqJfmjAJ%2FwhUDpeoYcYqlg%2FlUnicy%2Bx95JbqSjmy5dMqOh2ZdbtKoqp7mLS2y8tbaFecVVAzmQNP6MXGXMTtBGaOd5Biyc8sVNQzc7cVkFo%2FmLobDCsXNyfQyudaFsCtcVj6sXgm0Fpr4SvlMuHwAo7YzJUFZsNqxoZIEGgufKTy3FhrGgkt%2BRvpewkHFcASVTqcNtSikQib0wjSEwES6rlbK4hZ%2BlNJQh55ZSOAWM8rOGxhhHduArdNKe2QB6MEPCrjJ8XOWGFbfD%2B1MW6yxhdyQSis0uotqD9wI21y%2FAwbOPbQ%2B3%2FwquE7cHnw%2BaUSpqo4saf6t%2FnxzEcXOCzgr72kBgXYfxLl7v0IRvX3OIUQi77d2hCzmadkANhdOTWKW3GVEksV50bMJF1YPnajYZC%2BXjIBiZYmNZVjk0GLjexfPY39po1b%2FTUbEbwTePoXdYxf18L1EC%2FAhv8cs4Er%2FthVIMNTd5MEGOqUBQLgRl7OUHkxzXuVt0sYz0OJr%2F8YttPcwbvSzf7lTR5NmSD2wqkZHf%2FTwkTX%2B9yj%2FBEBibfLYfz%2F0sDBOpTzzxwCWmFSCfGEWJ0gmObCzmvajblSc7ZJxVqt2SUXFdEQdOaM0nO8yv3aivfqK89kb%2BZ5Nf7GgUeSYJPQYCCPTuV0skx%2BnZXkDk2M3UYM2t%2BDmGdn7Slz6ok6N9YYa5ZQqs7ccrajK&X-Amz-Signature=0400bf97826261c25980ee1fb4d971fbf1d25feb4418972d0eecd609ca013b99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRJNIL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdJqsbKmslbWhAEis1uWbYULFHtgGVhOmTySnYWahJwIgGiOFdvmV5%2BFtLQtFW8nvQyDXGWX%2F%2B%2BMG28ErGk7mXY4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuI6j8ZrGfGMal2UyrcA07iHO%2BU9DuWLwAvQJ34sx%2B%2F88dneO60Fa3%2Byzt2A5AR2NxDt%2B1LBtNv30t6dEwZZNN7QS5h9XgKlNdRFc3u2CakkEkW0CE1Z02iV7mHMlHucc2k1BtmDhg2pdgIYfrSCyxdsTWe0Z4vSQRCTuU6%2BvmdYZ2DBFBgr7RwqJfmjAJ%2FwhUDpeoYcYqlg%2FlUnicy%2Bx95JbqSjmy5dMqOh2ZdbtKoqp7mLS2y8tbaFecVVAzmQNP6MXGXMTtBGaOd5Biyc8sVNQzc7cVkFo%2FmLobDCsXNyfQyudaFsCtcVj6sXgm0Fpr4SvlMuHwAo7YzJUFZsNqxoZIEGgufKTy3FhrGgkt%2BRvpewkHFcASVTqcNtSikQib0wjSEwES6rlbK4hZ%2BlNJQh55ZSOAWM8rOGxhhHduArdNKe2QB6MEPCrjJ8XOWGFbfD%2B1MW6yxhdyQSis0uotqD9wI21y%2FAwbOPbQ%2B3%2FwquE7cHnw%2BaUSpqo4saf6t%2FnxzEcXOCzgr72kBgXYfxLl7v0IRvX3OIUQi77d2hCzmadkANhdOTWKW3GVEksV50bMJF1YPnajYZC%2BXjIBiZYmNZVjk0GLjexfPY39po1b%2FTUbEbwTePoXdYxf18L1EC%2FAhv8cs4Er%2FthVIMNTd5MEGOqUBQLgRl7OUHkxzXuVt0sYz0OJr%2F8YttPcwbvSzf7lTR5NmSD2wqkZHf%2FTwkTX%2B9yj%2FBEBibfLYfz%2F0sDBOpTzzxwCWmFSCfGEWJ0gmObCzmvajblSc7ZJxVqt2SUXFdEQdOaM0nO8yv3aivfqK89kb%2BZ5Nf7GgUeSYJPQYCCPTuV0skx%2BnZXkDk2M3UYM2t%2BDmGdn7Slz6ok6N9YYa5ZQqs7ccrajK&X-Amz-Signature=8f4ef21ed9e8bf584c3dea107cc6d859e760fc4e7be2717daac704d07100761f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRJNIL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdJqsbKmslbWhAEis1uWbYULFHtgGVhOmTySnYWahJwIgGiOFdvmV5%2BFtLQtFW8nvQyDXGWX%2F%2B%2BMG28ErGk7mXY4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuI6j8ZrGfGMal2UyrcA07iHO%2BU9DuWLwAvQJ34sx%2B%2F88dneO60Fa3%2Byzt2A5AR2NxDt%2B1LBtNv30t6dEwZZNN7QS5h9XgKlNdRFc3u2CakkEkW0CE1Z02iV7mHMlHucc2k1BtmDhg2pdgIYfrSCyxdsTWe0Z4vSQRCTuU6%2BvmdYZ2DBFBgr7RwqJfmjAJ%2FwhUDpeoYcYqlg%2FlUnicy%2Bx95JbqSjmy5dMqOh2ZdbtKoqp7mLS2y8tbaFecVVAzmQNP6MXGXMTtBGaOd5Biyc8sVNQzc7cVkFo%2FmLobDCsXNyfQyudaFsCtcVj6sXgm0Fpr4SvlMuHwAo7YzJUFZsNqxoZIEGgufKTy3FhrGgkt%2BRvpewkHFcASVTqcNtSikQib0wjSEwES6rlbK4hZ%2BlNJQh55ZSOAWM8rOGxhhHduArdNKe2QB6MEPCrjJ8XOWGFbfD%2B1MW6yxhdyQSis0uotqD9wI21y%2FAwbOPbQ%2B3%2FwquE7cHnw%2BaUSpqo4saf6t%2FnxzEcXOCzgr72kBgXYfxLl7v0IRvX3OIUQi77d2hCzmadkANhdOTWKW3GVEksV50bMJF1YPnajYZC%2BXjIBiZYmNZVjk0GLjexfPY39po1b%2FTUbEbwTePoXdYxf18L1EC%2FAhv8cs4Er%2FthVIMNTd5MEGOqUBQLgRl7OUHkxzXuVt0sYz0OJr%2F8YttPcwbvSzf7lTR5NmSD2wqkZHf%2FTwkTX%2B9yj%2FBEBibfLYfz%2F0sDBOpTzzxwCWmFSCfGEWJ0gmObCzmvajblSc7ZJxVqt2SUXFdEQdOaM0nO8yv3aivfqK89kb%2BZ5Nf7GgUeSYJPQYCCPTuV0skx%2BnZXkDk2M3UYM2t%2BDmGdn7Slz6ok6N9YYa5ZQqs7ccrajK&X-Amz-Signature=16d5fe2212764eb02665c4bf26b6e807bb4aea7f3b4bcc50770e1001975c9b79&X-Amz-SignedHeaders=host&x-id=GetObject)
