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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5OKRFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2G3bXleBGw8siscmTqsWyr7TteeEO2HModR6oFqmZGAiEAuCKXPWMZ7cbFqNQKP3ri3RTg%2F%2FYo2Oh0psqqrgzXl1sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZYCK7byZbznMx2hircA3jFSGVuG2aR37mFP79mnBPEyAyJrbcaO%2FqlgCWXESri8S%2FKF%2Bwm9LVPtF8duhanSn0MTixSCmx8NDwS8y6Gn6vOD0%2FvHjKfKXXXhL0ENrQzx2dmT5qwB8Q%2FiJ0QtRMHIrAoI5AyMKSlWhTrYK7eXfNc0FpTI0mmUcZEGernKY3llqOv%2FgeLPHIKF2gCGquje359EUM%2FfKyUYqeqf0nIEoWRMuKOEq1fyBuGLAX%2BykQtfjbANY%2FyAjr2ZzImn46AZvLYt11ILnMW%2FwJT%2BDG7Au%2B86zmbVYX%2B1L4rewKZb9eNv006VBWgxC2SHBgq2fK4ZX6dLXc4clrplEeZ3zaSt8ERoMdKTBYSk27F2%2BaAzJTegyqFVEu3p3cIer8c1Ru%2FQ49OksS%2Fw9HjocNm%2BHrLNfEgq7aHSXhoqngJM6S%2B9rE4joBFIAgyRq%2BaW0yWSu43qKS9Uf%2BjdKaV20sHrBGUTsV5v%2BU3iK0Jv43YLdtxHsBzrWJU9eCgfgNz2vNDbooBFbKoM6lVyCh1KnKNVd73kL7BfsATFid1Qf1RlkWteU5yGeMLtyOMnVrW0bSIqza%2FLdgRpI8JkCa9QUlMssWeaU263H5YPSXEGTNBAN0LqlD1%2FxUZURiumfWl%2FSNhMIjgzsIGOqUBMy6eWDriL176wCN8nTQZ7JIVk%2F0JbnrEPOD2dMu%2FfWSNEPQ2nNv1mef6Qs%2BxY5QV6Zu3o9VFAG%2Byc9irWIqy9BeewyM6bMJoEDBocmCRi%2BItqeeF%2Bgr18fH4oqRElhiI3bBCyohn0vLg7AwZM6nkT5NZXJ6ZakQ3bUIfnLjfzpUaHlQPTgyvBSCRGOsGTOwKf5ZtkDjMj5JISYgKdq%2FvXSt9RSKr&X-Amz-Signature=4d33d1f2a051c06d2ac20c8c64875d40d418221f21c5b47722f12cecc2473377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5OKRFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2G3bXleBGw8siscmTqsWyr7TteeEO2HModR6oFqmZGAiEAuCKXPWMZ7cbFqNQKP3ri3RTg%2F%2FYo2Oh0psqqrgzXl1sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZYCK7byZbznMx2hircA3jFSGVuG2aR37mFP79mnBPEyAyJrbcaO%2FqlgCWXESri8S%2FKF%2Bwm9LVPtF8duhanSn0MTixSCmx8NDwS8y6Gn6vOD0%2FvHjKfKXXXhL0ENrQzx2dmT5qwB8Q%2FiJ0QtRMHIrAoI5AyMKSlWhTrYK7eXfNc0FpTI0mmUcZEGernKY3llqOv%2FgeLPHIKF2gCGquje359EUM%2FfKyUYqeqf0nIEoWRMuKOEq1fyBuGLAX%2BykQtfjbANY%2FyAjr2ZzImn46AZvLYt11ILnMW%2FwJT%2BDG7Au%2B86zmbVYX%2B1L4rewKZb9eNv006VBWgxC2SHBgq2fK4ZX6dLXc4clrplEeZ3zaSt8ERoMdKTBYSk27F2%2BaAzJTegyqFVEu3p3cIer8c1Ru%2FQ49OksS%2Fw9HjocNm%2BHrLNfEgq7aHSXhoqngJM6S%2B9rE4joBFIAgyRq%2BaW0yWSu43qKS9Uf%2BjdKaV20sHrBGUTsV5v%2BU3iK0Jv43YLdtxHsBzrWJU9eCgfgNz2vNDbooBFbKoM6lVyCh1KnKNVd73kL7BfsATFid1Qf1RlkWteU5yGeMLtyOMnVrW0bSIqza%2FLdgRpI8JkCa9QUlMssWeaU263H5YPSXEGTNBAN0LqlD1%2FxUZURiumfWl%2FSNhMIjgzsIGOqUBMy6eWDriL176wCN8nTQZ7JIVk%2F0JbnrEPOD2dMu%2FfWSNEPQ2nNv1mef6Qs%2BxY5QV6Zu3o9VFAG%2Byc9irWIqy9BeewyM6bMJoEDBocmCRi%2BItqeeF%2Bgr18fH4oqRElhiI3bBCyohn0vLg7AwZM6nkT5NZXJ6ZakQ3bUIfnLjfzpUaHlQPTgyvBSCRGOsGTOwKf5ZtkDjMj5JISYgKdq%2FvXSt9RSKr&X-Amz-Signature=577feb1f64d6dd49dfd4ba0ed1b8900a0be3dff2af139238c19a8438cd491af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5OKRFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2G3bXleBGw8siscmTqsWyr7TteeEO2HModR6oFqmZGAiEAuCKXPWMZ7cbFqNQKP3ri3RTg%2F%2FYo2Oh0psqqrgzXl1sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZYCK7byZbznMx2hircA3jFSGVuG2aR37mFP79mnBPEyAyJrbcaO%2FqlgCWXESri8S%2FKF%2Bwm9LVPtF8duhanSn0MTixSCmx8NDwS8y6Gn6vOD0%2FvHjKfKXXXhL0ENrQzx2dmT5qwB8Q%2FiJ0QtRMHIrAoI5AyMKSlWhTrYK7eXfNc0FpTI0mmUcZEGernKY3llqOv%2FgeLPHIKF2gCGquje359EUM%2FfKyUYqeqf0nIEoWRMuKOEq1fyBuGLAX%2BykQtfjbANY%2FyAjr2ZzImn46AZvLYt11ILnMW%2FwJT%2BDG7Au%2B86zmbVYX%2B1L4rewKZb9eNv006VBWgxC2SHBgq2fK4ZX6dLXc4clrplEeZ3zaSt8ERoMdKTBYSk27F2%2BaAzJTegyqFVEu3p3cIer8c1Ru%2FQ49OksS%2Fw9HjocNm%2BHrLNfEgq7aHSXhoqngJM6S%2B9rE4joBFIAgyRq%2BaW0yWSu43qKS9Uf%2BjdKaV20sHrBGUTsV5v%2BU3iK0Jv43YLdtxHsBzrWJU9eCgfgNz2vNDbooBFbKoM6lVyCh1KnKNVd73kL7BfsATFid1Qf1RlkWteU5yGeMLtyOMnVrW0bSIqza%2FLdgRpI8JkCa9QUlMssWeaU263H5YPSXEGTNBAN0LqlD1%2FxUZURiumfWl%2FSNhMIjgzsIGOqUBMy6eWDriL176wCN8nTQZ7JIVk%2F0JbnrEPOD2dMu%2FfWSNEPQ2nNv1mef6Qs%2BxY5QV6Zu3o9VFAG%2Byc9irWIqy9BeewyM6bMJoEDBocmCRi%2BItqeeF%2Bgr18fH4oqRElhiI3bBCyohn0vLg7AwZM6nkT5NZXJ6ZakQ3bUIfnLjfzpUaHlQPTgyvBSCRGOsGTOwKf5ZtkDjMj5JISYgKdq%2FvXSt9RSKr&X-Amz-Signature=23245542aa07ce16d8c624b002af7bf48d2c6fda866322ba2efd66860345aeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5OKRFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2G3bXleBGw8siscmTqsWyr7TteeEO2HModR6oFqmZGAiEAuCKXPWMZ7cbFqNQKP3ri3RTg%2F%2FYo2Oh0psqqrgzXl1sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZYCK7byZbznMx2hircA3jFSGVuG2aR37mFP79mnBPEyAyJrbcaO%2FqlgCWXESri8S%2FKF%2Bwm9LVPtF8duhanSn0MTixSCmx8NDwS8y6Gn6vOD0%2FvHjKfKXXXhL0ENrQzx2dmT5qwB8Q%2FiJ0QtRMHIrAoI5AyMKSlWhTrYK7eXfNc0FpTI0mmUcZEGernKY3llqOv%2FgeLPHIKF2gCGquje359EUM%2FfKyUYqeqf0nIEoWRMuKOEq1fyBuGLAX%2BykQtfjbANY%2FyAjr2ZzImn46AZvLYt11ILnMW%2FwJT%2BDG7Au%2B86zmbVYX%2B1L4rewKZb9eNv006VBWgxC2SHBgq2fK4ZX6dLXc4clrplEeZ3zaSt8ERoMdKTBYSk27F2%2BaAzJTegyqFVEu3p3cIer8c1Ru%2FQ49OksS%2Fw9HjocNm%2BHrLNfEgq7aHSXhoqngJM6S%2B9rE4joBFIAgyRq%2BaW0yWSu43qKS9Uf%2BjdKaV20sHrBGUTsV5v%2BU3iK0Jv43YLdtxHsBzrWJU9eCgfgNz2vNDbooBFbKoM6lVyCh1KnKNVd73kL7BfsATFid1Qf1RlkWteU5yGeMLtyOMnVrW0bSIqza%2FLdgRpI8JkCa9QUlMssWeaU263H5YPSXEGTNBAN0LqlD1%2FxUZURiumfWl%2FSNhMIjgzsIGOqUBMy6eWDriL176wCN8nTQZ7JIVk%2F0JbnrEPOD2dMu%2FfWSNEPQ2nNv1mef6Qs%2BxY5QV6Zu3o9VFAG%2Byc9irWIqy9BeewyM6bMJoEDBocmCRi%2BItqeeF%2Bgr18fH4oqRElhiI3bBCyohn0vLg7AwZM6nkT5NZXJ6ZakQ3bUIfnLjfzpUaHlQPTgyvBSCRGOsGTOwKf5ZtkDjMj5JISYgKdq%2FvXSt9RSKr&X-Amz-Signature=de74f2577d0471767fb38ce4320ad404b0fe4fda5191b9ac480fee866551779d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5OKRFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2G3bXleBGw8siscmTqsWyr7TteeEO2HModR6oFqmZGAiEAuCKXPWMZ7cbFqNQKP3ri3RTg%2F%2FYo2Oh0psqqrgzXl1sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZYCK7byZbznMx2hircA3jFSGVuG2aR37mFP79mnBPEyAyJrbcaO%2FqlgCWXESri8S%2FKF%2Bwm9LVPtF8duhanSn0MTixSCmx8NDwS8y6Gn6vOD0%2FvHjKfKXXXhL0ENrQzx2dmT5qwB8Q%2FiJ0QtRMHIrAoI5AyMKSlWhTrYK7eXfNc0FpTI0mmUcZEGernKY3llqOv%2FgeLPHIKF2gCGquje359EUM%2FfKyUYqeqf0nIEoWRMuKOEq1fyBuGLAX%2BykQtfjbANY%2FyAjr2ZzImn46AZvLYt11ILnMW%2FwJT%2BDG7Au%2B86zmbVYX%2B1L4rewKZb9eNv006VBWgxC2SHBgq2fK4ZX6dLXc4clrplEeZ3zaSt8ERoMdKTBYSk27F2%2BaAzJTegyqFVEu3p3cIer8c1Ru%2FQ49OksS%2Fw9HjocNm%2BHrLNfEgq7aHSXhoqngJM6S%2B9rE4joBFIAgyRq%2BaW0yWSu43qKS9Uf%2BjdKaV20sHrBGUTsV5v%2BU3iK0Jv43YLdtxHsBzrWJU9eCgfgNz2vNDbooBFbKoM6lVyCh1KnKNVd73kL7BfsATFid1Qf1RlkWteU5yGeMLtyOMnVrW0bSIqza%2FLdgRpI8JkCa9QUlMssWeaU263H5YPSXEGTNBAN0LqlD1%2FxUZURiumfWl%2FSNhMIjgzsIGOqUBMy6eWDriL176wCN8nTQZ7JIVk%2F0JbnrEPOD2dMu%2FfWSNEPQ2nNv1mef6Qs%2BxY5QV6Zu3o9VFAG%2Byc9irWIqy9BeewyM6bMJoEDBocmCRi%2BItqeeF%2Bgr18fH4oqRElhiI3bBCyohn0vLg7AwZM6nkT5NZXJ6ZakQ3bUIfnLjfzpUaHlQPTgyvBSCRGOsGTOwKf5ZtkDjMj5JISYgKdq%2FvXSt9RSKr&X-Amz-Signature=76e3bd6ea0973c910706986d9a8d8be1f648a2c58f9553c3e62d8ad0dcb60661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5OKRFX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2G3bXleBGw8siscmTqsWyr7TteeEO2HModR6oFqmZGAiEAuCKXPWMZ7cbFqNQKP3ri3RTg%2F%2FYo2Oh0psqqrgzXl1sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZYCK7byZbznMx2hircA3jFSGVuG2aR37mFP79mnBPEyAyJrbcaO%2FqlgCWXESri8S%2FKF%2Bwm9LVPtF8duhanSn0MTixSCmx8NDwS8y6Gn6vOD0%2FvHjKfKXXXhL0ENrQzx2dmT5qwB8Q%2FiJ0QtRMHIrAoI5AyMKSlWhTrYK7eXfNc0FpTI0mmUcZEGernKY3llqOv%2FgeLPHIKF2gCGquje359EUM%2FfKyUYqeqf0nIEoWRMuKOEq1fyBuGLAX%2BykQtfjbANY%2FyAjr2ZzImn46AZvLYt11ILnMW%2FwJT%2BDG7Au%2B86zmbVYX%2B1L4rewKZb9eNv006VBWgxC2SHBgq2fK4ZX6dLXc4clrplEeZ3zaSt8ERoMdKTBYSk27F2%2BaAzJTegyqFVEu3p3cIer8c1Ru%2FQ49OksS%2Fw9HjocNm%2BHrLNfEgq7aHSXhoqngJM6S%2B9rE4joBFIAgyRq%2BaW0yWSu43qKS9Uf%2BjdKaV20sHrBGUTsV5v%2BU3iK0Jv43YLdtxHsBzrWJU9eCgfgNz2vNDbooBFbKoM6lVyCh1KnKNVd73kL7BfsATFid1Qf1RlkWteU5yGeMLtyOMnVrW0bSIqza%2FLdgRpI8JkCa9QUlMssWeaU263H5YPSXEGTNBAN0LqlD1%2FxUZURiumfWl%2FSNhMIjgzsIGOqUBMy6eWDriL176wCN8nTQZ7JIVk%2F0JbnrEPOD2dMu%2FfWSNEPQ2nNv1mef6Qs%2BxY5QV6Zu3o9VFAG%2Byc9irWIqy9BeewyM6bMJoEDBocmCRi%2BItqeeF%2Bgr18fH4oqRElhiI3bBCyohn0vLg7AwZM6nkT5NZXJ6ZakQ3bUIfnLjfzpUaHlQPTgyvBSCRGOsGTOwKf5ZtkDjMj5JISYgKdq%2FvXSt9RSKr&X-Amz-Signature=e05b32e63b80edc00dd8ccb725c5adb26ce0f4537b7d9302291acc861f0a14e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
