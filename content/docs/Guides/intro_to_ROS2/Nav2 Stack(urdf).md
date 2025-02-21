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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH57K7FO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsAIYtFA1TMyg9sX%2BI1MIrhNJgUBJJPoaybuXKFo3MQIhAKe4463OlgQ6sFPDzdKntN7GP2yK7AFqFAXvejXFa9DCKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxr3Ypm5%2FqlUtk1Yq3APbGK6uhDBq0J13qXLCCpOrbjPx5bnOTHpWEZPUgpHrTnht5jrlnppPJ%2BxfzxGxBgXEpoEpKMwXDBjJ6v6uPr79k2w9et4b%2Fl%2FfPJn531cWdzwLQTL5D2JFRR3vZbpHE%2F8sv0aKWi46q8vBPI%2BqmBDBZERfTFGEASF3IXMxDvTA2NcMuA%2F49ZjMnQErPqXC0DeBHFgBnJvrIW7uZ%2B8TfpLEI%2FzQ7VP%2Bmu4Dvy84q9TPrDGNOuXUENFlMMqrmOO7fMUWOyswiFQj9Ukji%2FhJqaVO3nZue3jpXhsOz3PMlC5%2FHbbI6HcLWdY7jXnbUt9jjZbiSd5031RH1PD4TWnicxh1siq1oQ%2FQU9xm5NXx1a9tUOFek5u0w5paw34hWUjQ5Lp%2FJPlCE0Vg7dRqJFxst%2F55e92GEtX6vGFIteUW3Lnr3ej6pJdwMUa%2BOLnSRti67tZK%2BMOD7Z%2FraMWGPc9q1ODBiztb81l4ygBMkcjl%2FtAypOb6763GdUaHm4WLCiowBBOwGrdVSQFOfc%2BxHUvlQkgM8E%2F5kxswNf1mamGdl5ar%2FTl8Fu30OmibzHJh3se3KCJNB1SdVTQymj3%2FSOp1fIMVyrGmR4iaIdPSk6kbxskEmm2KgY0CTkeMxcKg1TDjmeG9BjqkASYFXLfDKT35nhA9dPGyZhvPBqQZ8xvpoOWZ4ih4v8ptD2Y1M0%2BM6gMBmZwTNdpiFftOqO7a12PAmjvn5KMj0fvQ3F6dbemGcGsj3EmJm%2B7ccG75hJxUfEMVOeoAXBSHQqC41CD4yPCbnnu2GLJ0fkv4hdIDQ7xAXIqkhOpCBfciUjMwBas%2Fh7car4cWE3U4duA6yUYtQK%2FCA%2Bs1bq3Q9a2YTycn&X-Amz-Signature=39dcc1c12de3a191be2bba4b8d5301994c4d96ad9f1e3b8b174bea1f89a4c835&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH57K7FO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsAIYtFA1TMyg9sX%2BI1MIrhNJgUBJJPoaybuXKFo3MQIhAKe4463OlgQ6sFPDzdKntN7GP2yK7AFqFAXvejXFa9DCKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxr3Ypm5%2FqlUtk1Yq3APbGK6uhDBq0J13qXLCCpOrbjPx5bnOTHpWEZPUgpHrTnht5jrlnppPJ%2BxfzxGxBgXEpoEpKMwXDBjJ6v6uPr79k2w9et4b%2Fl%2FfPJn531cWdzwLQTL5D2JFRR3vZbpHE%2F8sv0aKWi46q8vBPI%2BqmBDBZERfTFGEASF3IXMxDvTA2NcMuA%2F49ZjMnQErPqXC0DeBHFgBnJvrIW7uZ%2B8TfpLEI%2FzQ7VP%2Bmu4Dvy84q9TPrDGNOuXUENFlMMqrmOO7fMUWOyswiFQj9Ukji%2FhJqaVO3nZue3jpXhsOz3PMlC5%2FHbbI6HcLWdY7jXnbUt9jjZbiSd5031RH1PD4TWnicxh1siq1oQ%2FQU9xm5NXx1a9tUOFek5u0w5paw34hWUjQ5Lp%2FJPlCE0Vg7dRqJFxst%2F55e92GEtX6vGFIteUW3Lnr3ej6pJdwMUa%2BOLnSRti67tZK%2BMOD7Z%2FraMWGPc9q1ODBiztb81l4ygBMkcjl%2FtAypOb6763GdUaHm4WLCiowBBOwGrdVSQFOfc%2BxHUvlQkgM8E%2F5kxswNf1mamGdl5ar%2FTl8Fu30OmibzHJh3se3KCJNB1SdVTQymj3%2FSOp1fIMVyrGmR4iaIdPSk6kbxskEmm2KgY0CTkeMxcKg1TDjmeG9BjqkASYFXLfDKT35nhA9dPGyZhvPBqQZ8xvpoOWZ4ih4v8ptD2Y1M0%2BM6gMBmZwTNdpiFftOqO7a12PAmjvn5KMj0fvQ3F6dbemGcGsj3EmJm%2B7ccG75hJxUfEMVOeoAXBSHQqC41CD4yPCbnnu2GLJ0fkv4hdIDQ7xAXIqkhOpCBfciUjMwBas%2Fh7car4cWE3U4duA6yUYtQK%2FCA%2Bs1bq3Q9a2YTycn&X-Amz-Signature=8ed8df9f9036853c084a5bdb4235ae9f236b4e2f827bdcf7c363cc4e89fa6873&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH57K7FO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsAIYtFA1TMyg9sX%2BI1MIrhNJgUBJJPoaybuXKFo3MQIhAKe4463OlgQ6sFPDzdKntN7GP2yK7AFqFAXvejXFa9DCKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxr3Ypm5%2FqlUtk1Yq3APbGK6uhDBq0J13qXLCCpOrbjPx5bnOTHpWEZPUgpHrTnht5jrlnppPJ%2BxfzxGxBgXEpoEpKMwXDBjJ6v6uPr79k2w9et4b%2Fl%2FfPJn531cWdzwLQTL5D2JFRR3vZbpHE%2F8sv0aKWi46q8vBPI%2BqmBDBZERfTFGEASF3IXMxDvTA2NcMuA%2F49ZjMnQErPqXC0DeBHFgBnJvrIW7uZ%2B8TfpLEI%2FzQ7VP%2Bmu4Dvy84q9TPrDGNOuXUENFlMMqrmOO7fMUWOyswiFQj9Ukji%2FhJqaVO3nZue3jpXhsOz3PMlC5%2FHbbI6HcLWdY7jXnbUt9jjZbiSd5031RH1PD4TWnicxh1siq1oQ%2FQU9xm5NXx1a9tUOFek5u0w5paw34hWUjQ5Lp%2FJPlCE0Vg7dRqJFxst%2F55e92GEtX6vGFIteUW3Lnr3ej6pJdwMUa%2BOLnSRti67tZK%2BMOD7Z%2FraMWGPc9q1ODBiztb81l4ygBMkcjl%2FtAypOb6763GdUaHm4WLCiowBBOwGrdVSQFOfc%2BxHUvlQkgM8E%2F5kxswNf1mamGdl5ar%2FTl8Fu30OmibzHJh3se3KCJNB1SdVTQymj3%2FSOp1fIMVyrGmR4iaIdPSk6kbxskEmm2KgY0CTkeMxcKg1TDjmeG9BjqkASYFXLfDKT35nhA9dPGyZhvPBqQZ8xvpoOWZ4ih4v8ptD2Y1M0%2BM6gMBmZwTNdpiFftOqO7a12PAmjvn5KMj0fvQ3F6dbemGcGsj3EmJm%2B7ccG75hJxUfEMVOeoAXBSHQqC41CD4yPCbnnu2GLJ0fkv4hdIDQ7xAXIqkhOpCBfciUjMwBas%2Fh7car4cWE3U4duA6yUYtQK%2FCA%2Bs1bq3Q9a2YTycn&X-Amz-Signature=babae508620755c29db3a0fe3e50b9876715b1a86d9feda1a6637086cafffd55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH57K7FO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsAIYtFA1TMyg9sX%2BI1MIrhNJgUBJJPoaybuXKFo3MQIhAKe4463OlgQ6sFPDzdKntN7GP2yK7AFqFAXvejXFa9DCKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxr3Ypm5%2FqlUtk1Yq3APbGK6uhDBq0J13qXLCCpOrbjPx5bnOTHpWEZPUgpHrTnht5jrlnppPJ%2BxfzxGxBgXEpoEpKMwXDBjJ6v6uPr79k2w9et4b%2Fl%2FfPJn531cWdzwLQTL5D2JFRR3vZbpHE%2F8sv0aKWi46q8vBPI%2BqmBDBZERfTFGEASF3IXMxDvTA2NcMuA%2F49ZjMnQErPqXC0DeBHFgBnJvrIW7uZ%2B8TfpLEI%2FzQ7VP%2Bmu4Dvy84q9TPrDGNOuXUENFlMMqrmOO7fMUWOyswiFQj9Ukji%2FhJqaVO3nZue3jpXhsOz3PMlC5%2FHbbI6HcLWdY7jXnbUt9jjZbiSd5031RH1PD4TWnicxh1siq1oQ%2FQU9xm5NXx1a9tUOFek5u0w5paw34hWUjQ5Lp%2FJPlCE0Vg7dRqJFxst%2F55e92GEtX6vGFIteUW3Lnr3ej6pJdwMUa%2BOLnSRti67tZK%2BMOD7Z%2FraMWGPc9q1ODBiztb81l4ygBMkcjl%2FtAypOb6763GdUaHm4WLCiowBBOwGrdVSQFOfc%2BxHUvlQkgM8E%2F5kxswNf1mamGdl5ar%2FTl8Fu30OmibzHJh3se3KCJNB1SdVTQymj3%2FSOp1fIMVyrGmR4iaIdPSk6kbxskEmm2KgY0CTkeMxcKg1TDjmeG9BjqkASYFXLfDKT35nhA9dPGyZhvPBqQZ8xvpoOWZ4ih4v8ptD2Y1M0%2BM6gMBmZwTNdpiFftOqO7a12PAmjvn5KMj0fvQ3F6dbemGcGsj3EmJm%2B7ccG75hJxUfEMVOeoAXBSHQqC41CD4yPCbnnu2GLJ0fkv4hdIDQ7xAXIqkhOpCBfciUjMwBas%2Fh7car4cWE3U4duA6yUYtQK%2FCA%2Bs1bq3Q9a2YTycn&X-Amz-Signature=de7b566fc4ca30bcce0894223a720d1f0fe53cfa4459899b3827a67c1989c9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH57K7FO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsAIYtFA1TMyg9sX%2BI1MIrhNJgUBJJPoaybuXKFo3MQIhAKe4463OlgQ6sFPDzdKntN7GP2yK7AFqFAXvejXFa9DCKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxr3Ypm5%2FqlUtk1Yq3APbGK6uhDBq0J13qXLCCpOrbjPx5bnOTHpWEZPUgpHrTnht5jrlnppPJ%2BxfzxGxBgXEpoEpKMwXDBjJ6v6uPr79k2w9et4b%2Fl%2FfPJn531cWdzwLQTL5D2JFRR3vZbpHE%2F8sv0aKWi46q8vBPI%2BqmBDBZERfTFGEASF3IXMxDvTA2NcMuA%2F49ZjMnQErPqXC0DeBHFgBnJvrIW7uZ%2B8TfpLEI%2FzQ7VP%2Bmu4Dvy84q9TPrDGNOuXUENFlMMqrmOO7fMUWOyswiFQj9Ukji%2FhJqaVO3nZue3jpXhsOz3PMlC5%2FHbbI6HcLWdY7jXnbUt9jjZbiSd5031RH1PD4TWnicxh1siq1oQ%2FQU9xm5NXx1a9tUOFek5u0w5paw34hWUjQ5Lp%2FJPlCE0Vg7dRqJFxst%2F55e92GEtX6vGFIteUW3Lnr3ej6pJdwMUa%2BOLnSRti67tZK%2BMOD7Z%2FraMWGPc9q1ODBiztb81l4ygBMkcjl%2FtAypOb6763GdUaHm4WLCiowBBOwGrdVSQFOfc%2BxHUvlQkgM8E%2F5kxswNf1mamGdl5ar%2FTl8Fu30OmibzHJh3se3KCJNB1SdVTQymj3%2FSOp1fIMVyrGmR4iaIdPSk6kbxskEmm2KgY0CTkeMxcKg1TDjmeG9BjqkASYFXLfDKT35nhA9dPGyZhvPBqQZ8xvpoOWZ4ih4v8ptD2Y1M0%2BM6gMBmZwTNdpiFftOqO7a12PAmjvn5KMj0fvQ3F6dbemGcGsj3EmJm%2B7ccG75hJxUfEMVOeoAXBSHQqC41CD4yPCbnnu2GLJ0fkv4hdIDQ7xAXIqkhOpCBfciUjMwBas%2Fh7car4cWE3U4duA6yUYtQK%2FCA%2Bs1bq3Q9a2YTycn&X-Amz-Signature=d264bc8e69a06653e3f06b5158337d30f16b9d5bb42bffcc4e1ace19f2a13ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH57K7FO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsAIYtFA1TMyg9sX%2BI1MIrhNJgUBJJPoaybuXKFo3MQIhAKe4463OlgQ6sFPDzdKntN7GP2yK7AFqFAXvejXFa9DCKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxr3Ypm5%2FqlUtk1Yq3APbGK6uhDBq0J13qXLCCpOrbjPx5bnOTHpWEZPUgpHrTnht5jrlnppPJ%2BxfzxGxBgXEpoEpKMwXDBjJ6v6uPr79k2w9et4b%2Fl%2FfPJn531cWdzwLQTL5D2JFRR3vZbpHE%2F8sv0aKWi46q8vBPI%2BqmBDBZERfTFGEASF3IXMxDvTA2NcMuA%2F49ZjMnQErPqXC0DeBHFgBnJvrIW7uZ%2B8TfpLEI%2FzQ7VP%2Bmu4Dvy84q9TPrDGNOuXUENFlMMqrmOO7fMUWOyswiFQj9Ukji%2FhJqaVO3nZue3jpXhsOz3PMlC5%2FHbbI6HcLWdY7jXnbUt9jjZbiSd5031RH1PD4TWnicxh1siq1oQ%2FQU9xm5NXx1a9tUOFek5u0w5paw34hWUjQ5Lp%2FJPlCE0Vg7dRqJFxst%2F55e92GEtX6vGFIteUW3Lnr3ej6pJdwMUa%2BOLnSRti67tZK%2BMOD7Z%2FraMWGPc9q1ODBiztb81l4ygBMkcjl%2FtAypOb6763GdUaHm4WLCiowBBOwGrdVSQFOfc%2BxHUvlQkgM8E%2F5kxswNf1mamGdl5ar%2FTl8Fu30OmibzHJh3se3KCJNB1SdVTQymj3%2FSOp1fIMVyrGmR4iaIdPSk6kbxskEmm2KgY0CTkeMxcKg1TDjmeG9BjqkASYFXLfDKT35nhA9dPGyZhvPBqQZ8xvpoOWZ4ih4v8ptD2Y1M0%2BM6gMBmZwTNdpiFftOqO7a12PAmjvn5KMj0fvQ3F6dbemGcGsj3EmJm%2B7ccG75hJxUfEMVOeoAXBSHQqC41CD4yPCbnnu2GLJ0fkv4hdIDQ7xAXIqkhOpCBfciUjMwBas%2Fh7car4cWE3U4duA6yUYtQK%2FCA%2Bs1bq3Q9a2YTycn&X-Amz-Signature=6bcb4bc71659246d99b7bd32c1069af3d9bcca3ee3980376da33297462d0d788&X-Amz-SignedHeaders=host&x-id=GetObject)
