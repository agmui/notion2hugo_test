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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=fccb868d27e7beaef7238456a512a457b8fb47d415c6f01b5cef09710437ebe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=d4a13f49155b3bc1227502b447e3d85f02a2acdac04ffe352c73732e959b6d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=8f1ed8c0acb8d771a02699882787d663ab5460374ab94e49ea0124e6ab25de42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=831f0bec07460215f4928fdaaa4408fcaa0dd92d2ca1480a59064ea48c6a960d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=6709762d38353d85f48dfdc78fa154676588f0af197d9f5ff1f2d964c48e5e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEHMDCD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2crwXV8vElfirZYu0%2B1d7uclbCy4gUnu%2FBQcg%2FQd2AIhAKnjVMdTRmJh5QM740y1B1PzggF2LVJill7XH2EkteE3Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyeMQaDnRM7eMflEEoq3ANxvqyWzJk2az07FejutGzI34A69Hrg8b6jsYL2pYzZiSyXWrR4jp1kofdeODud4Qtt9Yx2UgI6skH%2B%2F1r2qjpINrYsvqiixcHZ59YI4TyW5C0vq9BdX1q%2BK5%2FnT7CLHKWIrCNEug%2BcKJI4OdCwC%2FFvcrNUx2jJdIN2Omtn53cwwrE6MLgPKUTlLLy4kUfwoO4xbrXkYxJAXO%2BUx3eC0fnGeQFNewnoH1FKdwCXVPpQ1IVZLtEG%2FYwdhVQQsLR7c3wC%2BPFacs2rQ7QEPz2ydnzbznZWORpL9wh3xLjnUw5RImCBEEXUZrzxxUoXrT1qj68XmpDl%2BvRLiVTThjr16Sftul6PQiN9aycyvbPk%2FK0j3%2F%2F8wNpoBGNXwcoSK0%2FlBLG90ltQ4jP1dPo440ZZ%2Bb4hnYTp6ZJJtr5lcWORf4Mj9nJL61OmirsJd8eh9rp1RznBSsa22a3zHGgA5kiup7X4ney%2FarNS%2BPAPybCFClYaVfmyA%2BKjlZa6gyhSQ5xbn3HWaDkO2hV%2FTx73zvlhi9%2FnLpaBpKOTu%2FzNJ5%2F4AF4c7yHthBcZjHPoyYZlVAb5GChfTHQxDZ2tTN7as27XpXqul1x9aQKxGCqxqgxwA5v5uZUhp7hf3SZRqwbOyzCkluLABjqkAYAONJavuptTLGzIOE7gSsG%2FIsoDtf744FLBW3lKl7n7q%2BawljY1aTZIraTTqqAV5sSBxiSC%2FPyhX1gSmbCCkOc%2Bt7RrSodNN1X9txjKLWp02AMeqSDjYSoOPkofclF8ozNYS1NUIk9ALXhJAe52nVXpqtoPramS6Ssln15Jv8iO0ZvGEzLLmdK%2BZg4xkF7%2BnR6srfP8ixbapnAZyepHN3hzpJYm&X-Amz-Signature=f69fb9f05307a6e78d725f4cb7daa3b99721d2ad183c86bbda8e5790b8d51b62&X-Amz-SignedHeaders=host&x-id=GetObject)
