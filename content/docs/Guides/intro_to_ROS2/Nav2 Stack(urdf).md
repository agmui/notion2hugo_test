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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2J5SKW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR49GDGtNAhED%2F%2FIKE9VjUlmrZxqOmhKER0JQEbsmWhAiEA1%2BAx%2FNX8%2B8hpKixVAnsVjAt5c55dWaR4aDrkC8p6dXAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGmH7RjgL9dyn6XbfircA07EBaQB2%2FeWd5MtIkV9Ufuc185hHP%2BCNTYyaae6YrLNEj4sIqy2IMmfdY53FzB%2FL4kec7rTgPNSZXGETaZ3UtCPdvS48B8S4Ekzd%2FoDrZF0008xigvPWECX2wPshnSudECT4LzR8KyPO8u0sAuwI4qiAHRkI3cO0m%2FbIq6LfYsbkS3f86D7qwicLIqTLkb8VdhJJde0fYwDWtNNhmdG%2FmbH7qiu2TwPIVOQBUGOfuEeMpz88lvKhAUEwfb6eH9gzJgmSNiz2q9pg8Ys68bDK21Hx0LaJ5LqKQLRTSB54oqX4P4dRu%2FF4asIM1EQL6gUUv8CHTlorRBvjS7d%2FBJ3yCzB4JiopQU%2FEJtqd8QzBb%2B8ifm0jRwtkEzexzdvzgag7vPjqfoX2KlD5PeOMKu%2FqRL0siCWVCkQqMMAwNTWV6wwRL7XUl%2FI%2ByvUBqEfjohdiefvsUjLBXc0wzOTVdS5j24EYTrTLt4HWD8L3FfBNOL%2BDbR9JEWDDzXFy3QZo82UNH1F9rCGOFd9oSctsF5u%2BVgCOXs6OlDMVkuPE%2FE%2B1qaDzStJMaRHSxFXZ0yiaimyHpI4oht9WwAhZQtDz4azUeZeLM93gCNDM2ZISwSy%2FDjFPUvv4DjQwJNtc1B6MJWHhsAGOqUBDFwg5ThLWTESSlzM2DVWD4XhPFcTRLXNQwGdzE2RcfcTMZ0nd1ug4cYmcGaWM%2FYK3o3%2B0FSGvtX08yoFUnBzfGn3n0FldyY5OdzDuHqykEgK8DQvFgcqY%2FZvHx3MdJuhy%2BgHSSCcednNuWdBOxgfuHH%2FOioO1iAUDusLSHyeEzYiSCqj3Zb%2Bd70XqPlEJMbYXu%2BqlM6cNFZJ6uDKzpaKhzSAx0lf&X-Amz-Signature=b0bc166a14a40ad5b2b3cd13a6d1d62f652d85cebe0d1eac020f41a573c0e383&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2J5SKW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR49GDGtNAhED%2F%2FIKE9VjUlmrZxqOmhKER0JQEbsmWhAiEA1%2BAx%2FNX8%2B8hpKixVAnsVjAt5c55dWaR4aDrkC8p6dXAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGmH7RjgL9dyn6XbfircA07EBaQB2%2FeWd5MtIkV9Ufuc185hHP%2BCNTYyaae6YrLNEj4sIqy2IMmfdY53FzB%2FL4kec7rTgPNSZXGETaZ3UtCPdvS48B8S4Ekzd%2FoDrZF0008xigvPWECX2wPshnSudECT4LzR8KyPO8u0sAuwI4qiAHRkI3cO0m%2FbIq6LfYsbkS3f86D7qwicLIqTLkb8VdhJJde0fYwDWtNNhmdG%2FmbH7qiu2TwPIVOQBUGOfuEeMpz88lvKhAUEwfb6eH9gzJgmSNiz2q9pg8Ys68bDK21Hx0LaJ5LqKQLRTSB54oqX4P4dRu%2FF4asIM1EQL6gUUv8CHTlorRBvjS7d%2FBJ3yCzB4JiopQU%2FEJtqd8QzBb%2B8ifm0jRwtkEzexzdvzgag7vPjqfoX2KlD5PeOMKu%2FqRL0siCWVCkQqMMAwNTWV6wwRL7XUl%2FI%2ByvUBqEfjohdiefvsUjLBXc0wzOTVdS5j24EYTrTLt4HWD8L3FfBNOL%2BDbR9JEWDDzXFy3QZo82UNH1F9rCGOFd9oSctsF5u%2BVgCOXs6OlDMVkuPE%2FE%2B1qaDzStJMaRHSxFXZ0yiaimyHpI4oht9WwAhZQtDz4azUeZeLM93gCNDM2ZISwSy%2FDjFPUvv4DjQwJNtc1B6MJWHhsAGOqUBDFwg5ThLWTESSlzM2DVWD4XhPFcTRLXNQwGdzE2RcfcTMZ0nd1ug4cYmcGaWM%2FYK3o3%2B0FSGvtX08yoFUnBzfGn3n0FldyY5OdzDuHqykEgK8DQvFgcqY%2FZvHx3MdJuhy%2BgHSSCcednNuWdBOxgfuHH%2FOioO1iAUDusLSHyeEzYiSCqj3Zb%2Bd70XqPlEJMbYXu%2BqlM6cNFZJ6uDKzpaKhzSAx0lf&X-Amz-Signature=76b412ff83d5ae113fca317dd561c8b980db201fdd1ba2be14ffdd109ae61648&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2J5SKW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR49GDGtNAhED%2F%2FIKE9VjUlmrZxqOmhKER0JQEbsmWhAiEA1%2BAx%2FNX8%2B8hpKixVAnsVjAt5c55dWaR4aDrkC8p6dXAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGmH7RjgL9dyn6XbfircA07EBaQB2%2FeWd5MtIkV9Ufuc185hHP%2BCNTYyaae6YrLNEj4sIqy2IMmfdY53FzB%2FL4kec7rTgPNSZXGETaZ3UtCPdvS48B8S4Ekzd%2FoDrZF0008xigvPWECX2wPshnSudECT4LzR8KyPO8u0sAuwI4qiAHRkI3cO0m%2FbIq6LfYsbkS3f86D7qwicLIqTLkb8VdhJJde0fYwDWtNNhmdG%2FmbH7qiu2TwPIVOQBUGOfuEeMpz88lvKhAUEwfb6eH9gzJgmSNiz2q9pg8Ys68bDK21Hx0LaJ5LqKQLRTSB54oqX4P4dRu%2FF4asIM1EQL6gUUv8CHTlorRBvjS7d%2FBJ3yCzB4JiopQU%2FEJtqd8QzBb%2B8ifm0jRwtkEzexzdvzgag7vPjqfoX2KlD5PeOMKu%2FqRL0siCWVCkQqMMAwNTWV6wwRL7XUl%2FI%2ByvUBqEfjohdiefvsUjLBXc0wzOTVdS5j24EYTrTLt4HWD8L3FfBNOL%2BDbR9JEWDDzXFy3QZo82UNH1F9rCGOFd9oSctsF5u%2BVgCOXs6OlDMVkuPE%2FE%2B1qaDzStJMaRHSxFXZ0yiaimyHpI4oht9WwAhZQtDz4azUeZeLM93gCNDM2ZISwSy%2FDjFPUvv4DjQwJNtc1B6MJWHhsAGOqUBDFwg5ThLWTESSlzM2DVWD4XhPFcTRLXNQwGdzE2RcfcTMZ0nd1ug4cYmcGaWM%2FYK3o3%2B0FSGvtX08yoFUnBzfGn3n0FldyY5OdzDuHqykEgK8DQvFgcqY%2FZvHx3MdJuhy%2BgHSSCcednNuWdBOxgfuHH%2FOioO1iAUDusLSHyeEzYiSCqj3Zb%2Bd70XqPlEJMbYXu%2BqlM6cNFZJ6uDKzpaKhzSAx0lf&X-Amz-Signature=cac591928cf3ef1108b7ab6ecfbc8a95541edadd6d2d75f9df105d72f9c08216&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2J5SKW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR49GDGtNAhED%2F%2FIKE9VjUlmrZxqOmhKER0JQEbsmWhAiEA1%2BAx%2FNX8%2B8hpKixVAnsVjAt5c55dWaR4aDrkC8p6dXAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGmH7RjgL9dyn6XbfircA07EBaQB2%2FeWd5MtIkV9Ufuc185hHP%2BCNTYyaae6YrLNEj4sIqy2IMmfdY53FzB%2FL4kec7rTgPNSZXGETaZ3UtCPdvS48B8S4Ekzd%2FoDrZF0008xigvPWECX2wPshnSudECT4LzR8KyPO8u0sAuwI4qiAHRkI3cO0m%2FbIq6LfYsbkS3f86D7qwicLIqTLkb8VdhJJde0fYwDWtNNhmdG%2FmbH7qiu2TwPIVOQBUGOfuEeMpz88lvKhAUEwfb6eH9gzJgmSNiz2q9pg8Ys68bDK21Hx0LaJ5LqKQLRTSB54oqX4P4dRu%2FF4asIM1EQL6gUUv8CHTlorRBvjS7d%2FBJ3yCzB4JiopQU%2FEJtqd8QzBb%2B8ifm0jRwtkEzexzdvzgag7vPjqfoX2KlD5PeOMKu%2FqRL0siCWVCkQqMMAwNTWV6wwRL7XUl%2FI%2ByvUBqEfjohdiefvsUjLBXc0wzOTVdS5j24EYTrTLt4HWD8L3FfBNOL%2BDbR9JEWDDzXFy3QZo82UNH1F9rCGOFd9oSctsF5u%2BVgCOXs6OlDMVkuPE%2FE%2B1qaDzStJMaRHSxFXZ0yiaimyHpI4oht9WwAhZQtDz4azUeZeLM93gCNDM2ZISwSy%2FDjFPUvv4DjQwJNtc1B6MJWHhsAGOqUBDFwg5ThLWTESSlzM2DVWD4XhPFcTRLXNQwGdzE2RcfcTMZ0nd1ug4cYmcGaWM%2FYK3o3%2B0FSGvtX08yoFUnBzfGn3n0FldyY5OdzDuHqykEgK8DQvFgcqY%2FZvHx3MdJuhy%2BgHSSCcednNuWdBOxgfuHH%2FOioO1iAUDusLSHyeEzYiSCqj3Zb%2Bd70XqPlEJMbYXu%2BqlM6cNFZJ6uDKzpaKhzSAx0lf&X-Amz-Signature=1ba7c40e0734530be3fcd672bc7b953af08343b957e79d53d715e730f9713b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2J5SKW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR49GDGtNAhED%2F%2FIKE9VjUlmrZxqOmhKER0JQEbsmWhAiEA1%2BAx%2FNX8%2B8hpKixVAnsVjAt5c55dWaR4aDrkC8p6dXAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGmH7RjgL9dyn6XbfircA07EBaQB2%2FeWd5MtIkV9Ufuc185hHP%2BCNTYyaae6YrLNEj4sIqy2IMmfdY53FzB%2FL4kec7rTgPNSZXGETaZ3UtCPdvS48B8S4Ekzd%2FoDrZF0008xigvPWECX2wPshnSudECT4LzR8KyPO8u0sAuwI4qiAHRkI3cO0m%2FbIq6LfYsbkS3f86D7qwicLIqTLkb8VdhJJde0fYwDWtNNhmdG%2FmbH7qiu2TwPIVOQBUGOfuEeMpz88lvKhAUEwfb6eH9gzJgmSNiz2q9pg8Ys68bDK21Hx0LaJ5LqKQLRTSB54oqX4P4dRu%2FF4asIM1EQL6gUUv8CHTlorRBvjS7d%2FBJ3yCzB4JiopQU%2FEJtqd8QzBb%2B8ifm0jRwtkEzexzdvzgag7vPjqfoX2KlD5PeOMKu%2FqRL0siCWVCkQqMMAwNTWV6wwRL7XUl%2FI%2ByvUBqEfjohdiefvsUjLBXc0wzOTVdS5j24EYTrTLt4HWD8L3FfBNOL%2BDbR9JEWDDzXFy3QZo82UNH1F9rCGOFd9oSctsF5u%2BVgCOXs6OlDMVkuPE%2FE%2B1qaDzStJMaRHSxFXZ0yiaimyHpI4oht9WwAhZQtDz4azUeZeLM93gCNDM2ZISwSy%2FDjFPUvv4DjQwJNtc1B6MJWHhsAGOqUBDFwg5ThLWTESSlzM2DVWD4XhPFcTRLXNQwGdzE2RcfcTMZ0nd1ug4cYmcGaWM%2FYK3o3%2B0FSGvtX08yoFUnBzfGn3n0FldyY5OdzDuHqykEgK8DQvFgcqY%2FZvHx3MdJuhy%2BgHSSCcednNuWdBOxgfuHH%2FOioO1iAUDusLSHyeEzYiSCqj3Zb%2Bd70XqPlEJMbYXu%2BqlM6cNFZJ6uDKzpaKhzSAx0lf&X-Amz-Signature=09da4173a8bdc896a05feea8a715d239768f3339f0519c9aada119ae0d6d44f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2J5SKW7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR49GDGtNAhED%2F%2FIKE9VjUlmrZxqOmhKER0JQEbsmWhAiEA1%2BAx%2FNX8%2B8hpKixVAnsVjAt5c55dWaR4aDrkC8p6dXAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGmH7RjgL9dyn6XbfircA07EBaQB2%2FeWd5MtIkV9Ufuc185hHP%2BCNTYyaae6YrLNEj4sIqy2IMmfdY53FzB%2FL4kec7rTgPNSZXGETaZ3UtCPdvS48B8S4Ekzd%2FoDrZF0008xigvPWECX2wPshnSudECT4LzR8KyPO8u0sAuwI4qiAHRkI3cO0m%2FbIq6LfYsbkS3f86D7qwicLIqTLkb8VdhJJde0fYwDWtNNhmdG%2FmbH7qiu2TwPIVOQBUGOfuEeMpz88lvKhAUEwfb6eH9gzJgmSNiz2q9pg8Ys68bDK21Hx0LaJ5LqKQLRTSB54oqX4P4dRu%2FF4asIM1EQL6gUUv8CHTlorRBvjS7d%2FBJ3yCzB4JiopQU%2FEJtqd8QzBb%2B8ifm0jRwtkEzexzdvzgag7vPjqfoX2KlD5PeOMKu%2FqRL0siCWVCkQqMMAwNTWV6wwRL7XUl%2FI%2ByvUBqEfjohdiefvsUjLBXc0wzOTVdS5j24EYTrTLt4HWD8L3FfBNOL%2BDbR9JEWDDzXFy3QZo82UNH1F9rCGOFd9oSctsF5u%2BVgCOXs6OlDMVkuPE%2FE%2B1qaDzStJMaRHSxFXZ0yiaimyHpI4oht9WwAhZQtDz4azUeZeLM93gCNDM2ZISwSy%2FDjFPUvv4DjQwJNtc1B6MJWHhsAGOqUBDFwg5ThLWTESSlzM2DVWD4XhPFcTRLXNQwGdzE2RcfcTMZ0nd1ug4cYmcGaWM%2FYK3o3%2B0FSGvtX08yoFUnBzfGn3n0FldyY5OdzDuHqykEgK8DQvFgcqY%2FZvHx3MdJuhy%2BgHSSCcednNuWdBOxgfuHH%2FOioO1iAUDusLSHyeEzYiSCqj3Zb%2Bd70XqPlEJMbYXu%2BqlM6cNFZJ6uDKzpaKhzSAx0lf&X-Amz-Signature=82f5ff15cb7728de91e0d7c69ade2d1e1f545af4ab6fb348e418880114e39e94&X-Amz-SignedHeaders=host&x-id=GetObject)
