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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDYYGD6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCm0fDyDjYVC1zFyeWFNL8aIXdbh307OvloIzcMEUyiggIhAJZ38uw8UpR8vKwiIwGABnONzeBRFBaWQA3KAEHEeui%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEu7OoHjSiZ6B83xEq3APH42hNf4%2FoXyT8xyvkX1Dl5cSSQxpOXv4iSt%2FKzipl0SvqCfT19UyEsRVxa2MFDfD3%2B88pQd4AlpuVytHUWQt7jCW3hOJdlBIAT7VLEDWPGWbRTcMga1hpMpwfMwbdnDQwYNkDzX8C%2BO1t%2BD6f8AsswVEYYigSRrHnbbektmHOxDfSdydKZrydpSPKPSJ7CZDsxhT%2Bbz3O74IuVWWZ0wH4w8OvE3Uv0CH7gBuze%2FByZfqbBp1jZ5r4HiDC6m8vVX4PmrE6%2FCxABiLJU04Ys7f%2BDPIb%2BYnHRZDbHabJGwVelLKduqh7w3P3vaGi6AKtwY%2BsCRo7GJ5oIOGXnLzzi3r4w07cgyRiX6T8IkCS30nQZ4G5ZzHKamKKC8J%2BLqxEtsvZGHmQZwiyiZnpM4GHzsR3B7Y6RFo7oJbDW0FI4cZPveQQKIbWBSLz2TgswdclrzmXmLoP9eV1lFTiQegq908oyXy%2BpSiVzrzcxEOSMom3E8dJzcWc2J1VEHCd9WKXwpSBDpwki%2FYNEPU%2B6CLk30M%2Ff2JNxE9yrAGjmDzHAjFJ4qK%2B13tMBxHYz%2FeovOrzT1ANs8zfL0VVcATOvq6y9cZFhxBNnOt5g%2FZ0%2Fm%2BZsWkLEdmnFV2695wjGxmNxTDGns%2FBBjqkAVTfoZDsp9FzCDK6leBz0n%2BEkLeTZ2JbOB%2Bizbnnfczeh9aXvpbgCPzkz%2FvVz7jEVzrdhhQaaBxXk5Nd1ehLJoYg9hiMBgpUjOLvJvv0HMVZFz84%2F8WZcs2Up7BN8joNgl6UfRvS03qPTYv3jeuLMgALg9DjShGxnqCreaoJbdLjXlu6PCg%2B9UYSPtOo9dEAde79oVwNsR6QhYkN0SHmQ4KgX8UX&X-Amz-Signature=cd57eac3c53bb71805e49bec24ad340f122eef80b64d642fec9c544eeab92556&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDYYGD6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCm0fDyDjYVC1zFyeWFNL8aIXdbh307OvloIzcMEUyiggIhAJZ38uw8UpR8vKwiIwGABnONzeBRFBaWQA3KAEHEeui%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEu7OoHjSiZ6B83xEq3APH42hNf4%2FoXyT8xyvkX1Dl5cSSQxpOXv4iSt%2FKzipl0SvqCfT19UyEsRVxa2MFDfD3%2B88pQd4AlpuVytHUWQt7jCW3hOJdlBIAT7VLEDWPGWbRTcMga1hpMpwfMwbdnDQwYNkDzX8C%2BO1t%2BD6f8AsswVEYYigSRrHnbbektmHOxDfSdydKZrydpSPKPSJ7CZDsxhT%2Bbz3O74IuVWWZ0wH4w8OvE3Uv0CH7gBuze%2FByZfqbBp1jZ5r4HiDC6m8vVX4PmrE6%2FCxABiLJU04Ys7f%2BDPIb%2BYnHRZDbHabJGwVelLKduqh7w3P3vaGi6AKtwY%2BsCRo7GJ5oIOGXnLzzi3r4w07cgyRiX6T8IkCS30nQZ4G5ZzHKamKKC8J%2BLqxEtsvZGHmQZwiyiZnpM4GHzsR3B7Y6RFo7oJbDW0FI4cZPveQQKIbWBSLz2TgswdclrzmXmLoP9eV1lFTiQegq908oyXy%2BpSiVzrzcxEOSMom3E8dJzcWc2J1VEHCd9WKXwpSBDpwki%2FYNEPU%2B6CLk30M%2Ff2JNxE9yrAGjmDzHAjFJ4qK%2B13tMBxHYz%2FeovOrzT1ANs8zfL0VVcATOvq6y9cZFhxBNnOt5g%2FZ0%2Fm%2BZsWkLEdmnFV2695wjGxmNxTDGns%2FBBjqkAVTfoZDsp9FzCDK6leBz0n%2BEkLeTZ2JbOB%2Bizbnnfczeh9aXvpbgCPzkz%2FvVz7jEVzrdhhQaaBxXk5Nd1ehLJoYg9hiMBgpUjOLvJvv0HMVZFz84%2F8WZcs2Up7BN8joNgl6UfRvS03qPTYv3jeuLMgALg9DjShGxnqCreaoJbdLjXlu6PCg%2B9UYSPtOo9dEAde79oVwNsR6QhYkN0SHmQ4KgX8UX&X-Amz-Signature=01bfd9780982342afef3f546c40cc89f77f9b2d54839dba118fa12e5ed0de8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDYYGD6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCm0fDyDjYVC1zFyeWFNL8aIXdbh307OvloIzcMEUyiggIhAJZ38uw8UpR8vKwiIwGABnONzeBRFBaWQA3KAEHEeui%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEu7OoHjSiZ6B83xEq3APH42hNf4%2FoXyT8xyvkX1Dl5cSSQxpOXv4iSt%2FKzipl0SvqCfT19UyEsRVxa2MFDfD3%2B88pQd4AlpuVytHUWQt7jCW3hOJdlBIAT7VLEDWPGWbRTcMga1hpMpwfMwbdnDQwYNkDzX8C%2BO1t%2BD6f8AsswVEYYigSRrHnbbektmHOxDfSdydKZrydpSPKPSJ7CZDsxhT%2Bbz3O74IuVWWZ0wH4w8OvE3Uv0CH7gBuze%2FByZfqbBp1jZ5r4HiDC6m8vVX4PmrE6%2FCxABiLJU04Ys7f%2BDPIb%2BYnHRZDbHabJGwVelLKduqh7w3P3vaGi6AKtwY%2BsCRo7GJ5oIOGXnLzzi3r4w07cgyRiX6T8IkCS30nQZ4G5ZzHKamKKC8J%2BLqxEtsvZGHmQZwiyiZnpM4GHzsR3B7Y6RFo7oJbDW0FI4cZPveQQKIbWBSLz2TgswdclrzmXmLoP9eV1lFTiQegq908oyXy%2BpSiVzrzcxEOSMom3E8dJzcWc2J1VEHCd9WKXwpSBDpwki%2FYNEPU%2B6CLk30M%2Ff2JNxE9yrAGjmDzHAjFJ4qK%2B13tMBxHYz%2FeovOrzT1ANs8zfL0VVcATOvq6y9cZFhxBNnOt5g%2FZ0%2Fm%2BZsWkLEdmnFV2695wjGxmNxTDGns%2FBBjqkAVTfoZDsp9FzCDK6leBz0n%2BEkLeTZ2JbOB%2Bizbnnfczeh9aXvpbgCPzkz%2FvVz7jEVzrdhhQaaBxXk5Nd1ehLJoYg9hiMBgpUjOLvJvv0HMVZFz84%2F8WZcs2Up7BN8joNgl6UfRvS03qPTYv3jeuLMgALg9DjShGxnqCreaoJbdLjXlu6PCg%2B9UYSPtOo9dEAde79oVwNsR6QhYkN0SHmQ4KgX8UX&X-Amz-Signature=0ac6000c6268bb3a97542ea7087bd4e64be6bd2045169506886812de798c79e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDYYGD6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCm0fDyDjYVC1zFyeWFNL8aIXdbh307OvloIzcMEUyiggIhAJZ38uw8UpR8vKwiIwGABnONzeBRFBaWQA3KAEHEeui%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEu7OoHjSiZ6B83xEq3APH42hNf4%2FoXyT8xyvkX1Dl5cSSQxpOXv4iSt%2FKzipl0SvqCfT19UyEsRVxa2MFDfD3%2B88pQd4AlpuVytHUWQt7jCW3hOJdlBIAT7VLEDWPGWbRTcMga1hpMpwfMwbdnDQwYNkDzX8C%2BO1t%2BD6f8AsswVEYYigSRrHnbbektmHOxDfSdydKZrydpSPKPSJ7CZDsxhT%2Bbz3O74IuVWWZ0wH4w8OvE3Uv0CH7gBuze%2FByZfqbBp1jZ5r4HiDC6m8vVX4PmrE6%2FCxABiLJU04Ys7f%2BDPIb%2BYnHRZDbHabJGwVelLKduqh7w3P3vaGi6AKtwY%2BsCRo7GJ5oIOGXnLzzi3r4w07cgyRiX6T8IkCS30nQZ4G5ZzHKamKKC8J%2BLqxEtsvZGHmQZwiyiZnpM4GHzsR3B7Y6RFo7oJbDW0FI4cZPveQQKIbWBSLz2TgswdclrzmXmLoP9eV1lFTiQegq908oyXy%2BpSiVzrzcxEOSMom3E8dJzcWc2J1VEHCd9WKXwpSBDpwki%2FYNEPU%2B6CLk30M%2Ff2JNxE9yrAGjmDzHAjFJ4qK%2B13tMBxHYz%2FeovOrzT1ANs8zfL0VVcATOvq6y9cZFhxBNnOt5g%2FZ0%2Fm%2BZsWkLEdmnFV2695wjGxmNxTDGns%2FBBjqkAVTfoZDsp9FzCDK6leBz0n%2BEkLeTZ2JbOB%2Bizbnnfczeh9aXvpbgCPzkz%2FvVz7jEVzrdhhQaaBxXk5Nd1ehLJoYg9hiMBgpUjOLvJvv0HMVZFz84%2F8WZcs2Up7BN8joNgl6UfRvS03qPTYv3jeuLMgALg9DjShGxnqCreaoJbdLjXlu6PCg%2B9UYSPtOo9dEAde79oVwNsR6QhYkN0SHmQ4KgX8UX&X-Amz-Signature=1914ff1f92af31c40f3d79fb3068de32a8f580be96e6d9cc93b60d4c41e67fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDYYGD6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCm0fDyDjYVC1zFyeWFNL8aIXdbh307OvloIzcMEUyiggIhAJZ38uw8UpR8vKwiIwGABnONzeBRFBaWQA3KAEHEeui%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEu7OoHjSiZ6B83xEq3APH42hNf4%2FoXyT8xyvkX1Dl5cSSQxpOXv4iSt%2FKzipl0SvqCfT19UyEsRVxa2MFDfD3%2B88pQd4AlpuVytHUWQt7jCW3hOJdlBIAT7VLEDWPGWbRTcMga1hpMpwfMwbdnDQwYNkDzX8C%2BO1t%2BD6f8AsswVEYYigSRrHnbbektmHOxDfSdydKZrydpSPKPSJ7CZDsxhT%2Bbz3O74IuVWWZ0wH4w8OvE3Uv0CH7gBuze%2FByZfqbBp1jZ5r4HiDC6m8vVX4PmrE6%2FCxABiLJU04Ys7f%2BDPIb%2BYnHRZDbHabJGwVelLKduqh7w3P3vaGi6AKtwY%2BsCRo7GJ5oIOGXnLzzi3r4w07cgyRiX6T8IkCS30nQZ4G5ZzHKamKKC8J%2BLqxEtsvZGHmQZwiyiZnpM4GHzsR3B7Y6RFo7oJbDW0FI4cZPveQQKIbWBSLz2TgswdclrzmXmLoP9eV1lFTiQegq908oyXy%2BpSiVzrzcxEOSMom3E8dJzcWc2J1VEHCd9WKXwpSBDpwki%2FYNEPU%2B6CLk30M%2Ff2JNxE9yrAGjmDzHAjFJ4qK%2B13tMBxHYz%2FeovOrzT1ANs8zfL0VVcATOvq6y9cZFhxBNnOt5g%2FZ0%2Fm%2BZsWkLEdmnFV2695wjGxmNxTDGns%2FBBjqkAVTfoZDsp9FzCDK6leBz0n%2BEkLeTZ2JbOB%2Bizbnnfczeh9aXvpbgCPzkz%2FvVz7jEVzrdhhQaaBxXk5Nd1ehLJoYg9hiMBgpUjOLvJvv0HMVZFz84%2F8WZcs2Up7BN8joNgl6UfRvS03qPTYv3jeuLMgALg9DjShGxnqCreaoJbdLjXlu6PCg%2B9UYSPtOo9dEAde79oVwNsR6QhYkN0SHmQ4KgX8UX&X-Amz-Signature=4f2d211554ebd8bb920fb3bacf73f934cdf3fd10bba7d634a0eb50ee3eab8ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDYYGD6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCm0fDyDjYVC1zFyeWFNL8aIXdbh307OvloIzcMEUyiggIhAJZ38uw8UpR8vKwiIwGABnONzeBRFBaWQA3KAEHEeui%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgxEu7OoHjSiZ6B83xEq3APH42hNf4%2FoXyT8xyvkX1Dl5cSSQxpOXv4iSt%2FKzipl0SvqCfT19UyEsRVxa2MFDfD3%2B88pQd4AlpuVytHUWQt7jCW3hOJdlBIAT7VLEDWPGWbRTcMga1hpMpwfMwbdnDQwYNkDzX8C%2BO1t%2BD6f8AsswVEYYigSRrHnbbektmHOxDfSdydKZrydpSPKPSJ7CZDsxhT%2Bbz3O74IuVWWZ0wH4w8OvE3Uv0CH7gBuze%2FByZfqbBp1jZ5r4HiDC6m8vVX4PmrE6%2FCxABiLJU04Ys7f%2BDPIb%2BYnHRZDbHabJGwVelLKduqh7w3P3vaGi6AKtwY%2BsCRo7GJ5oIOGXnLzzi3r4w07cgyRiX6T8IkCS30nQZ4G5ZzHKamKKC8J%2BLqxEtsvZGHmQZwiyiZnpM4GHzsR3B7Y6RFo7oJbDW0FI4cZPveQQKIbWBSLz2TgswdclrzmXmLoP9eV1lFTiQegq908oyXy%2BpSiVzrzcxEOSMom3E8dJzcWc2J1VEHCd9WKXwpSBDpwki%2FYNEPU%2B6CLk30M%2Ff2JNxE9yrAGjmDzHAjFJ4qK%2B13tMBxHYz%2FeovOrzT1ANs8zfL0VVcATOvq6y9cZFhxBNnOt5g%2FZ0%2Fm%2BZsWkLEdmnFV2695wjGxmNxTDGns%2FBBjqkAVTfoZDsp9FzCDK6leBz0n%2BEkLeTZ2JbOB%2Bizbnnfczeh9aXvpbgCPzkz%2FvVz7jEVzrdhhQaaBxXk5Nd1ehLJoYg9hiMBgpUjOLvJvv0HMVZFz84%2F8WZcs2Up7BN8joNgl6UfRvS03qPTYv3jeuLMgALg9DjShGxnqCreaoJbdLjXlu6PCg%2B9UYSPtOo9dEAde79oVwNsR6QhYkN0SHmQ4KgX8UX&X-Amz-Signature=6b76869755cadc03b20bdaf7d7f374d55cd4121d75db2e53771b7c36d6076ebb&X-Amz-SignedHeaders=host&x-id=GetObject)
