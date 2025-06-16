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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJQIIR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9jWtjNX0dOuX3TiHJqSMEPijkynLLLoXZJ1UpBL6HigIgGwUqGVih45hWU8SVRTY5GbcxaBcDAmBo%2FqckBoPFRjUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB4NYZk6xMh8kFYSmyrcA1xXvMxQQHNZfLM%2FMWFEYqeQUKTGUxgMyL7xHcjKhARrSHADK94CLyMlYlKpsFQtU0ZVdzHLMlyTkBNMI6rDLXZuZ%2BkNZBul9Y8ilmgR54iH8RBZ4RLktZaCv%2BfYt%2BREwSHlSTzjZto1kh96J7KOtg3iVJN0EgIdytsElHB44JzfONCegrkFhUKy3kvf3PaPwMFrQRymh5LM7eaALeOiRggm3isLKMuS54kzSuIG1g2ZI9X8KZSh64%2BCORmY0LIigvX9qBfBaPdaqf5QCP8QnDSG8BH6ORc9m8SCbdeDBlBF76gpbsFrbv6UD0iCAmOr41UTehJj3uoDGXHbiBfSvlfJWNVgjLX6%2FxfgMEsVWOfenq3ka3qwBbvVxx28FQfhHA8Uq%2B9vjShdxNjes0NyLY5oQnXA%2BdIR%2Fkbu3oIoUwBUvUxzpRDc%2BMzseGuiMzc8FfSxHhBk0qOYY%2BaRbJBUaylXyRenC9x4oW5Rtr4d6EXftSJbxFsgAgyGR3mVc7SBSav7m8y58LmubSqJvub5%2FM4PC8C0S0ACUy7mKeiwjmq6roAQtCr6MNi8ytXN2gU%2BFuk6%2BQTZZuNcjV2fySH2m%2B9Cv4bMoPFkIVoKnjwDNO9Cm6CsrABZ2lxJzawrML%2Fjv8IGOqUBuXIpeq44d0dmEbEelCGcOW8yz76puIpdAvj9O0P%2BOrGyg1TseC8ydr9OLSeU3nKMg2BXlX%2FeOUyVkHssMkgAY%2FJL%2Bd8800DUl74M1FCU5pXd7Gr%2BrTCpfUHsoUv38bngPPgoCH1zhE%2FyWzNlVWkqPEyA%2FbZE8I46LQEPrrskERuA4HtwA4ZZebHeB2294e7MUtYXOIjNznQtRci9LPDAgBXBYBBJ&X-Amz-Signature=0399afc21eff5f1e08e15c78efed18dd0ecad7d91f00d498a5882e5901f9e099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJQIIR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9jWtjNX0dOuX3TiHJqSMEPijkynLLLoXZJ1UpBL6HigIgGwUqGVih45hWU8SVRTY5GbcxaBcDAmBo%2FqckBoPFRjUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB4NYZk6xMh8kFYSmyrcA1xXvMxQQHNZfLM%2FMWFEYqeQUKTGUxgMyL7xHcjKhARrSHADK94CLyMlYlKpsFQtU0ZVdzHLMlyTkBNMI6rDLXZuZ%2BkNZBul9Y8ilmgR54iH8RBZ4RLktZaCv%2BfYt%2BREwSHlSTzjZto1kh96J7KOtg3iVJN0EgIdytsElHB44JzfONCegrkFhUKy3kvf3PaPwMFrQRymh5LM7eaALeOiRggm3isLKMuS54kzSuIG1g2ZI9X8KZSh64%2BCORmY0LIigvX9qBfBaPdaqf5QCP8QnDSG8BH6ORc9m8SCbdeDBlBF76gpbsFrbv6UD0iCAmOr41UTehJj3uoDGXHbiBfSvlfJWNVgjLX6%2FxfgMEsVWOfenq3ka3qwBbvVxx28FQfhHA8Uq%2B9vjShdxNjes0NyLY5oQnXA%2BdIR%2Fkbu3oIoUwBUvUxzpRDc%2BMzseGuiMzc8FfSxHhBk0qOYY%2BaRbJBUaylXyRenC9x4oW5Rtr4d6EXftSJbxFsgAgyGR3mVc7SBSav7m8y58LmubSqJvub5%2FM4PC8C0S0ACUy7mKeiwjmq6roAQtCr6MNi8ytXN2gU%2BFuk6%2BQTZZuNcjV2fySH2m%2B9Cv4bMoPFkIVoKnjwDNO9Cm6CsrABZ2lxJzawrML%2Fjv8IGOqUBuXIpeq44d0dmEbEelCGcOW8yz76puIpdAvj9O0P%2BOrGyg1TseC8ydr9OLSeU3nKMg2BXlX%2FeOUyVkHssMkgAY%2FJL%2Bd8800DUl74M1FCU5pXd7Gr%2BrTCpfUHsoUv38bngPPgoCH1zhE%2FyWzNlVWkqPEyA%2FbZE8I46LQEPrrskERuA4HtwA4ZZebHeB2294e7MUtYXOIjNznQtRci9LPDAgBXBYBBJ&X-Amz-Signature=31b277f6dd39b2f831c49cece764527d941ccb4ed34d159c4620f3e9ee94a045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJQIIR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9jWtjNX0dOuX3TiHJqSMEPijkynLLLoXZJ1UpBL6HigIgGwUqGVih45hWU8SVRTY5GbcxaBcDAmBo%2FqckBoPFRjUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB4NYZk6xMh8kFYSmyrcA1xXvMxQQHNZfLM%2FMWFEYqeQUKTGUxgMyL7xHcjKhARrSHADK94CLyMlYlKpsFQtU0ZVdzHLMlyTkBNMI6rDLXZuZ%2BkNZBul9Y8ilmgR54iH8RBZ4RLktZaCv%2BfYt%2BREwSHlSTzjZto1kh96J7KOtg3iVJN0EgIdytsElHB44JzfONCegrkFhUKy3kvf3PaPwMFrQRymh5LM7eaALeOiRggm3isLKMuS54kzSuIG1g2ZI9X8KZSh64%2BCORmY0LIigvX9qBfBaPdaqf5QCP8QnDSG8BH6ORc9m8SCbdeDBlBF76gpbsFrbv6UD0iCAmOr41UTehJj3uoDGXHbiBfSvlfJWNVgjLX6%2FxfgMEsVWOfenq3ka3qwBbvVxx28FQfhHA8Uq%2B9vjShdxNjes0NyLY5oQnXA%2BdIR%2Fkbu3oIoUwBUvUxzpRDc%2BMzseGuiMzc8FfSxHhBk0qOYY%2BaRbJBUaylXyRenC9x4oW5Rtr4d6EXftSJbxFsgAgyGR3mVc7SBSav7m8y58LmubSqJvub5%2FM4PC8C0S0ACUy7mKeiwjmq6roAQtCr6MNi8ytXN2gU%2BFuk6%2BQTZZuNcjV2fySH2m%2B9Cv4bMoPFkIVoKnjwDNO9Cm6CsrABZ2lxJzawrML%2Fjv8IGOqUBuXIpeq44d0dmEbEelCGcOW8yz76puIpdAvj9O0P%2BOrGyg1TseC8ydr9OLSeU3nKMg2BXlX%2FeOUyVkHssMkgAY%2FJL%2Bd8800DUl74M1FCU5pXd7Gr%2BrTCpfUHsoUv38bngPPgoCH1zhE%2FyWzNlVWkqPEyA%2FbZE8I46LQEPrrskERuA4HtwA4ZZebHeB2294e7MUtYXOIjNznQtRci9LPDAgBXBYBBJ&X-Amz-Signature=268b1d1b12af55015ddc4ca81b3d791753e9c66818a11ab51967e43dc769db49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJQIIR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9jWtjNX0dOuX3TiHJqSMEPijkynLLLoXZJ1UpBL6HigIgGwUqGVih45hWU8SVRTY5GbcxaBcDAmBo%2FqckBoPFRjUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB4NYZk6xMh8kFYSmyrcA1xXvMxQQHNZfLM%2FMWFEYqeQUKTGUxgMyL7xHcjKhARrSHADK94CLyMlYlKpsFQtU0ZVdzHLMlyTkBNMI6rDLXZuZ%2BkNZBul9Y8ilmgR54iH8RBZ4RLktZaCv%2BfYt%2BREwSHlSTzjZto1kh96J7KOtg3iVJN0EgIdytsElHB44JzfONCegrkFhUKy3kvf3PaPwMFrQRymh5LM7eaALeOiRggm3isLKMuS54kzSuIG1g2ZI9X8KZSh64%2BCORmY0LIigvX9qBfBaPdaqf5QCP8QnDSG8BH6ORc9m8SCbdeDBlBF76gpbsFrbv6UD0iCAmOr41UTehJj3uoDGXHbiBfSvlfJWNVgjLX6%2FxfgMEsVWOfenq3ka3qwBbvVxx28FQfhHA8Uq%2B9vjShdxNjes0NyLY5oQnXA%2BdIR%2Fkbu3oIoUwBUvUxzpRDc%2BMzseGuiMzc8FfSxHhBk0qOYY%2BaRbJBUaylXyRenC9x4oW5Rtr4d6EXftSJbxFsgAgyGR3mVc7SBSav7m8y58LmubSqJvub5%2FM4PC8C0S0ACUy7mKeiwjmq6roAQtCr6MNi8ytXN2gU%2BFuk6%2BQTZZuNcjV2fySH2m%2B9Cv4bMoPFkIVoKnjwDNO9Cm6CsrABZ2lxJzawrML%2Fjv8IGOqUBuXIpeq44d0dmEbEelCGcOW8yz76puIpdAvj9O0P%2BOrGyg1TseC8ydr9OLSeU3nKMg2BXlX%2FeOUyVkHssMkgAY%2FJL%2Bd8800DUl74M1FCU5pXd7Gr%2BrTCpfUHsoUv38bngPPgoCH1zhE%2FyWzNlVWkqPEyA%2FbZE8I46LQEPrrskERuA4HtwA4ZZebHeB2294e7MUtYXOIjNznQtRci9LPDAgBXBYBBJ&X-Amz-Signature=c533d2948bd7ffc9a68d6e2b96bb7ec5f5438c158fb515f433dc41d22f1cf75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJQIIR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9jWtjNX0dOuX3TiHJqSMEPijkynLLLoXZJ1UpBL6HigIgGwUqGVih45hWU8SVRTY5GbcxaBcDAmBo%2FqckBoPFRjUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB4NYZk6xMh8kFYSmyrcA1xXvMxQQHNZfLM%2FMWFEYqeQUKTGUxgMyL7xHcjKhARrSHADK94CLyMlYlKpsFQtU0ZVdzHLMlyTkBNMI6rDLXZuZ%2BkNZBul9Y8ilmgR54iH8RBZ4RLktZaCv%2BfYt%2BREwSHlSTzjZto1kh96J7KOtg3iVJN0EgIdytsElHB44JzfONCegrkFhUKy3kvf3PaPwMFrQRymh5LM7eaALeOiRggm3isLKMuS54kzSuIG1g2ZI9X8KZSh64%2BCORmY0LIigvX9qBfBaPdaqf5QCP8QnDSG8BH6ORc9m8SCbdeDBlBF76gpbsFrbv6UD0iCAmOr41UTehJj3uoDGXHbiBfSvlfJWNVgjLX6%2FxfgMEsVWOfenq3ka3qwBbvVxx28FQfhHA8Uq%2B9vjShdxNjes0NyLY5oQnXA%2BdIR%2Fkbu3oIoUwBUvUxzpRDc%2BMzseGuiMzc8FfSxHhBk0qOYY%2BaRbJBUaylXyRenC9x4oW5Rtr4d6EXftSJbxFsgAgyGR3mVc7SBSav7m8y58LmubSqJvub5%2FM4PC8C0S0ACUy7mKeiwjmq6roAQtCr6MNi8ytXN2gU%2BFuk6%2BQTZZuNcjV2fySH2m%2B9Cv4bMoPFkIVoKnjwDNO9Cm6CsrABZ2lxJzawrML%2Fjv8IGOqUBuXIpeq44d0dmEbEelCGcOW8yz76puIpdAvj9O0P%2BOrGyg1TseC8ydr9OLSeU3nKMg2BXlX%2FeOUyVkHssMkgAY%2FJL%2Bd8800DUl74M1FCU5pXd7Gr%2BrTCpfUHsoUv38bngPPgoCH1zhE%2FyWzNlVWkqPEyA%2FbZE8I46LQEPrrskERuA4HtwA4ZZebHeB2294e7MUtYXOIjNznQtRci9LPDAgBXBYBBJ&X-Amz-Signature=8f32c85df2a18639ad5bf1d37a96f1ed92ef136e7789519efa5d0355ae677da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJQIIR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9jWtjNX0dOuX3TiHJqSMEPijkynLLLoXZJ1UpBL6HigIgGwUqGVih45hWU8SVRTY5GbcxaBcDAmBo%2FqckBoPFRjUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB4NYZk6xMh8kFYSmyrcA1xXvMxQQHNZfLM%2FMWFEYqeQUKTGUxgMyL7xHcjKhARrSHADK94CLyMlYlKpsFQtU0ZVdzHLMlyTkBNMI6rDLXZuZ%2BkNZBul9Y8ilmgR54iH8RBZ4RLktZaCv%2BfYt%2BREwSHlSTzjZto1kh96J7KOtg3iVJN0EgIdytsElHB44JzfONCegrkFhUKy3kvf3PaPwMFrQRymh5LM7eaALeOiRggm3isLKMuS54kzSuIG1g2ZI9X8KZSh64%2BCORmY0LIigvX9qBfBaPdaqf5QCP8QnDSG8BH6ORc9m8SCbdeDBlBF76gpbsFrbv6UD0iCAmOr41UTehJj3uoDGXHbiBfSvlfJWNVgjLX6%2FxfgMEsVWOfenq3ka3qwBbvVxx28FQfhHA8Uq%2B9vjShdxNjes0NyLY5oQnXA%2BdIR%2Fkbu3oIoUwBUvUxzpRDc%2BMzseGuiMzc8FfSxHhBk0qOYY%2BaRbJBUaylXyRenC9x4oW5Rtr4d6EXftSJbxFsgAgyGR3mVc7SBSav7m8y58LmubSqJvub5%2FM4PC8C0S0ACUy7mKeiwjmq6roAQtCr6MNi8ytXN2gU%2BFuk6%2BQTZZuNcjV2fySH2m%2B9Cv4bMoPFkIVoKnjwDNO9Cm6CsrABZ2lxJzawrML%2Fjv8IGOqUBuXIpeq44d0dmEbEelCGcOW8yz76puIpdAvj9O0P%2BOrGyg1TseC8ydr9OLSeU3nKMg2BXlX%2FeOUyVkHssMkgAY%2FJL%2Bd8800DUl74M1FCU5pXd7Gr%2BrTCpfUHsoUv38bngPPgoCH1zhE%2FyWzNlVWkqPEyA%2FbZE8I46LQEPrrskERuA4HtwA4ZZebHeB2294e7MUtYXOIjNznQtRci9LPDAgBXBYBBJ&X-Amz-Signature=6162e400e433b1166eeda8b955933569530968d1c23726a34d7ee05e9cf2c215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
