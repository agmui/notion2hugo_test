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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZQIRVV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2u3Cl3zF7osB%2BrOKqHshwLJp5YeOs6pkMOXxOZTAsAIhAPLW7fFfvXq27sy0OSHeFOv5Wm4ER56dhVrGznXhR%2ByvKv8DCHIQABoMNjM3NDIzMTgzODA1Igze3YVejDOthDJFyB4q3APvWbYob1mg4KCqtDPUcZzriKYwXVdLyFPln%2BQizZ33Q9%2BwRZc7%2Fln63TD4Hy1NFSpM6Lr0zHR35VdfaxIuJfcD2fedQ4Ga2XyaK7EJaBuRnIiqPTj2mxHlCqkVaNhp6BbokDDBHH17zTTXW%2BRY%2BuTcuD%2BDpkURjq2HhrAq8xdj3l8Cz0MoOYNcAO4GC2YCnhx10WVd%2FwX%2Fn8gzA%2FSOukdSTd4my4Omeyzme8wP4WoWtaLZOkIioeavaFX82fVvLRFcbT4Tj%2BllscWoKF71OEykRpiA%2B%2FTnY0hL%2F11x98wxYOFExZpar2hhYXwY5QNWbcalvDn0IaPUkWqVeHAzg8pIFNiDbHyPg4k5p5FLdr081QjsZBi7anUZdgkGwSS4LTJToFAGZ8K7%2FA%2Bjyb%2FuQ9MA1NXlDWwWrzvJjnxSSi7nvLPdrtE8pF3R6W1BEzaDMPysqV3xC7Gj%2F5bEa3uzjPFBrf1CKVsXHv%2FOjGVa2NLzR7%2FhkqsLHwmyMjwyaOynLXnndejUP1TRsEJwQDzyFHPeq%2FMEZAfcA2DVMgMRk5o9NQAqll3MLLKPi2pd8IzQtT2GcISUMCX6KAfPXtLTrZL84N1DSJZZhH9w29swVzbMDH7B0A35729D3vHsJjD3w9O%2FBjqkAVD9EsGiBavR6ei48c2A1tReMPrhuLLGcVlQrRgmfstiwK8BWUBMIit5u0BiWICUTdUOvB9sijgoAHJaJWwwXEvhPD4mXwFHtv42Y3drouDmUXO4IxWBmfr6RJT0V7pvP4JyXxeLL0gU3vb2Ed9QnMvDJ%2BEE12ocwohLKLE7lssTVYespnRkEld1J5rqLBVKb0sKZoFRuJYwLCMR0InQIrRlvVI0&X-Amz-Signature=9cba640f535c8d647b764a5b4ef305982cd5767fc40028d020b59c73d08ce573&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZQIRVV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2u3Cl3zF7osB%2BrOKqHshwLJp5YeOs6pkMOXxOZTAsAIhAPLW7fFfvXq27sy0OSHeFOv5Wm4ER56dhVrGznXhR%2ByvKv8DCHIQABoMNjM3NDIzMTgzODA1Igze3YVejDOthDJFyB4q3APvWbYob1mg4KCqtDPUcZzriKYwXVdLyFPln%2BQizZ33Q9%2BwRZc7%2Fln63TD4Hy1NFSpM6Lr0zHR35VdfaxIuJfcD2fedQ4Ga2XyaK7EJaBuRnIiqPTj2mxHlCqkVaNhp6BbokDDBHH17zTTXW%2BRY%2BuTcuD%2BDpkURjq2HhrAq8xdj3l8Cz0MoOYNcAO4GC2YCnhx10WVd%2FwX%2Fn8gzA%2FSOukdSTd4my4Omeyzme8wP4WoWtaLZOkIioeavaFX82fVvLRFcbT4Tj%2BllscWoKF71OEykRpiA%2B%2FTnY0hL%2F11x98wxYOFExZpar2hhYXwY5QNWbcalvDn0IaPUkWqVeHAzg8pIFNiDbHyPg4k5p5FLdr081QjsZBi7anUZdgkGwSS4LTJToFAGZ8K7%2FA%2Bjyb%2FuQ9MA1NXlDWwWrzvJjnxSSi7nvLPdrtE8pF3R6W1BEzaDMPysqV3xC7Gj%2F5bEa3uzjPFBrf1CKVsXHv%2FOjGVa2NLzR7%2FhkqsLHwmyMjwyaOynLXnndejUP1TRsEJwQDzyFHPeq%2FMEZAfcA2DVMgMRk5o9NQAqll3MLLKPi2pd8IzQtT2GcISUMCX6KAfPXtLTrZL84N1DSJZZhH9w29swVzbMDH7B0A35729D3vHsJjD3w9O%2FBjqkAVD9EsGiBavR6ei48c2A1tReMPrhuLLGcVlQrRgmfstiwK8BWUBMIit5u0BiWICUTdUOvB9sijgoAHJaJWwwXEvhPD4mXwFHtv42Y3drouDmUXO4IxWBmfr6RJT0V7pvP4JyXxeLL0gU3vb2Ed9QnMvDJ%2BEE12ocwohLKLE7lssTVYespnRkEld1J5rqLBVKb0sKZoFRuJYwLCMR0InQIrRlvVI0&X-Amz-Signature=7f00553e6b62a31d9cdff6bf5a8df41877cc595ccda2ff1e7df9499842aae094&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZQIRVV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2u3Cl3zF7osB%2BrOKqHshwLJp5YeOs6pkMOXxOZTAsAIhAPLW7fFfvXq27sy0OSHeFOv5Wm4ER56dhVrGznXhR%2ByvKv8DCHIQABoMNjM3NDIzMTgzODA1Igze3YVejDOthDJFyB4q3APvWbYob1mg4KCqtDPUcZzriKYwXVdLyFPln%2BQizZ33Q9%2BwRZc7%2Fln63TD4Hy1NFSpM6Lr0zHR35VdfaxIuJfcD2fedQ4Ga2XyaK7EJaBuRnIiqPTj2mxHlCqkVaNhp6BbokDDBHH17zTTXW%2BRY%2BuTcuD%2BDpkURjq2HhrAq8xdj3l8Cz0MoOYNcAO4GC2YCnhx10WVd%2FwX%2Fn8gzA%2FSOukdSTd4my4Omeyzme8wP4WoWtaLZOkIioeavaFX82fVvLRFcbT4Tj%2BllscWoKF71OEykRpiA%2B%2FTnY0hL%2F11x98wxYOFExZpar2hhYXwY5QNWbcalvDn0IaPUkWqVeHAzg8pIFNiDbHyPg4k5p5FLdr081QjsZBi7anUZdgkGwSS4LTJToFAGZ8K7%2FA%2Bjyb%2FuQ9MA1NXlDWwWrzvJjnxSSi7nvLPdrtE8pF3R6W1BEzaDMPysqV3xC7Gj%2F5bEa3uzjPFBrf1CKVsXHv%2FOjGVa2NLzR7%2FhkqsLHwmyMjwyaOynLXnndejUP1TRsEJwQDzyFHPeq%2FMEZAfcA2DVMgMRk5o9NQAqll3MLLKPi2pd8IzQtT2GcISUMCX6KAfPXtLTrZL84N1DSJZZhH9w29swVzbMDH7B0A35729D3vHsJjD3w9O%2FBjqkAVD9EsGiBavR6ei48c2A1tReMPrhuLLGcVlQrRgmfstiwK8BWUBMIit5u0BiWICUTdUOvB9sijgoAHJaJWwwXEvhPD4mXwFHtv42Y3drouDmUXO4IxWBmfr6RJT0V7pvP4JyXxeLL0gU3vb2Ed9QnMvDJ%2BEE12ocwohLKLE7lssTVYespnRkEld1J5rqLBVKb0sKZoFRuJYwLCMR0InQIrRlvVI0&X-Amz-Signature=014b0d882c81f007238daa24f1a2dd0868005cbf4cac2dc639b23359a502621a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZQIRVV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2u3Cl3zF7osB%2BrOKqHshwLJp5YeOs6pkMOXxOZTAsAIhAPLW7fFfvXq27sy0OSHeFOv5Wm4ER56dhVrGznXhR%2ByvKv8DCHIQABoMNjM3NDIzMTgzODA1Igze3YVejDOthDJFyB4q3APvWbYob1mg4KCqtDPUcZzriKYwXVdLyFPln%2BQizZ33Q9%2BwRZc7%2Fln63TD4Hy1NFSpM6Lr0zHR35VdfaxIuJfcD2fedQ4Ga2XyaK7EJaBuRnIiqPTj2mxHlCqkVaNhp6BbokDDBHH17zTTXW%2BRY%2BuTcuD%2BDpkURjq2HhrAq8xdj3l8Cz0MoOYNcAO4GC2YCnhx10WVd%2FwX%2Fn8gzA%2FSOukdSTd4my4Omeyzme8wP4WoWtaLZOkIioeavaFX82fVvLRFcbT4Tj%2BllscWoKF71OEykRpiA%2B%2FTnY0hL%2F11x98wxYOFExZpar2hhYXwY5QNWbcalvDn0IaPUkWqVeHAzg8pIFNiDbHyPg4k5p5FLdr081QjsZBi7anUZdgkGwSS4LTJToFAGZ8K7%2FA%2Bjyb%2FuQ9MA1NXlDWwWrzvJjnxSSi7nvLPdrtE8pF3R6W1BEzaDMPysqV3xC7Gj%2F5bEa3uzjPFBrf1CKVsXHv%2FOjGVa2NLzR7%2FhkqsLHwmyMjwyaOynLXnndejUP1TRsEJwQDzyFHPeq%2FMEZAfcA2DVMgMRk5o9NQAqll3MLLKPi2pd8IzQtT2GcISUMCX6KAfPXtLTrZL84N1DSJZZhH9w29swVzbMDH7B0A35729D3vHsJjD3w9O%2FBjqkAVD9EsGiBavR6ei48c2A1tReMPrhuLLGcVlQrRgmfstiwK8BWUBMIit5u0BiWICUTdUOvB9sijgoAHJaJWwwXEvhPD4mXwFHtv42Y3drouDmUXO4IxWBmfr6RJT0V7pvP4JyXxeLL0gU3vb2Ed9QnMvDJ%2BEE12ocwohLKLE7lssTVYespnRkEld1J5rqLBVKb0sKZoFRuJYwLCMR0InQIrRlvVI0&X-Amz-Signature=900279f66b2b36c61042000a2670999c54a49ecc907e540ae687b54e7863a90e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZQIRVV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2u3Cl3zF7osB%2BrOKqHshwLJp5YeOs6pkMOXxOZTAsAIhAPLW7fFfvXq27sy0OSHeFOv5Wm4ER56dhVrGznXhR%2ByvKv8DCHIQABoMNjM3NDIzMTgzODA1Igze3YVejDOthDJFyB4q3APvWbYob1mg4KCqtDPUcZzriKYwXVdLyFPln%2BQizZ33Q9%2BwRZc7%2Fln63TD4Hy1NFSpM6Lr0zHR35VdfaxIuJfcD2fedQ4Ga2XyaK7EJaBuRnIiqPTj2mxHlCqkVaNhp6BbokDDBHH17zTTXW%2BRY%2BuTcuD%2BDpkURjq2HhrAq8xdj3l8Cz0MoOYNcAO4GC2YCnhx10WVd%2FwX%2Fn8gzA%2FSOukdSTd4my4Omeyzme8wP4WoWtaLZOkIioeavaFX82fVvLRFcbT4Tj%2BllscWoKF71OEykRpiA%2B%2FTnY0hL%2F11x98wxYOFExZpar2hhYXwY5QNWbcalvDn0IaPUkWqVeHAzg8pIFNiDbHyPg4k5p5FLdr081QjsZBi7anUZdgkGwSS4LTJToFAGZ8K7%2FA%2Bjyb%2FuQ9MA1NXlDWwWrzvJjnxSSi7nvLPdrtE8pF3R6W1BEzaDMPysqV3xC7Gj%2F5bEa3uzjPFBrf1CKVsXHv%2FOjGVa2NLzR7%2FhkqsLHwmyMjwyaOynLXnndejUP1TRsEJwQDzyFHPeq%2FMEZAfcA2DVMgMRk5o9NQAqll3MLLKPi2pd8IzQtT2GcISUMCX6KAfPXtLTrZL84N1DSJZZhH9w29swVzbMDH7B0A35729D3vHsJjD3w9O%2FBjqkAVD9EsGiBavR6ei48c2A1tReMPrhuLLGcVlQrRgmfstiwK8BWUBMIit5u0BiWICUTdUOvB9sijgoAHJaJWwwXEvhPD4mXwFHtv42Y3drouDmUXO4IxWBmfr6RJT0V7pvP4JyXxeLL0gU3vb2Ed9QnMvDJ%2BEE12ocwohLKLE7lssTVYespnRkEld1J5rqLBVKb0sKZoFRuJYwLCMR0InQIrRlvVI0&X-Amz-Signature=8db4ef587ac8cc2a6ed40f9d5e5e9fbab0225a73c5daf8c3a794a24cbfc82880&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LZQIRVV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq2u3Cl3zF7osB%2BrOKqHshwLJp5YeOs6pkMOXxOZTAsAIhAPLW7fFfvXq27sy0OSHeFOv5Wm4ER56dhVrGznXhR%2ByvKv8DCHIQABoMNjM3NDIzMTgzODA1Igze3YVejDOthDJFyB4q3APvWbYob1mg4KCqtDPUcZzriKYwXVdLyFPln%2BQizZ33Q9%2BwRZc7%2Fln63TD4Hy1NFSpM6Lr0zHR35VdfaxIuJfcD2fedQ4Ga2XyaK7EJaBuRnIiqPTj2mxHlCqkVaNhp6BbokDDBHH17zTTXW%2BRY%2BuTcuD%2BDpkURjq2HhrAq8xdj3l8Cz0MoOYNcAO4GC2YCnhx10WVd%2FwX%2Fn8gzA%2FSOukdSTd4my4Omeyzme8wP4WoWtaLZOkIioeavaFX82fVvLRFcbT4Tj%2BllscWoKF71OEykRpiA%2B%2FTnY0hL%2F11x98wxYOFExZpar2hhYXwY5QNWbcalvDn0IaPUkWqVeHAzg8pIFNiDbHyPg4k5p5FLdr081QjsZBi7anUZdgkGwSS4LTJToFAGZ8K7%2FA%2Bjyb%2FuQ9MA1NXlDWwWrzvJjnxSSi7nvLPdrtE8pF3R6W1BEzaDMPysqV3xC7Gj%2F5bEa3uzjPFBrf1CKVsXHv%2FOjGVa2NLzR7%2FhkqsLHwmyMjwyaOynLXnndejUP1TRsEJwQDzyFHPeq%2FMEZAfcA2DVMgMRk5o9NQAqll3MLLKPi2pd8IzQtT2GcISUMCX6KAfPXtLTrZL84N1DSJZZhH9w29swVzbMDH7B0A35729D3vHsJjD3w9O%2FBjqkAVD9EsGiBavR6ei48c2A1tReMPrhuLLGcVlQrRgmfstiwK8BWUBMIit5u0BiWICUTdUOvB9sijgoAHJaJWwwXEvhPD4mXwFHtv42Y3drouDmUXO4IxWBmfr6RJT0V7pvP4JyXxeLL0gU3vb2Ed9QnMvDJ%2BEE12ocwohLKLE7lssTVYespnRkEld1J5rqLBVKb0sKZoFRuJYwLCMR0InQIrRlvVI0&X-Amz-Signature=1f65186304e50205351147a065daf71fe7bbc1388e60af2c0728bc8dcd3439c3&X-Amz-SignedHeaders=host&x-id=GetObject)
