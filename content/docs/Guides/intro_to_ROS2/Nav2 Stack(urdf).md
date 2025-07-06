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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGE3IHT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCvr9e%2F5ymdGxYXOEWkO7zXbfJ8sBZ1IhJ%2FCajAwN05LwIhAN1HiOlpP1zdojEMmWmTJtYTLvo7EoZw3%2BfQKNPF3UzDKv8DCFIQABoMNjM3NDIzMTgzODA1IgzTBUn%2FiMqdhBOyxHIq3APEeF7UFKJk56LGvZpuyqxPIvZE3FNlmzlxdlo9JWiaeHX6hW0erS%2BUxcAa9uIzZmIEN6jhOBiTnNXx8b8wRrL4pSxWX5PdvFo36v7F1ztFLKZ%2FC%2F3JhystFcSfsCMJUHo1gz990MrEQeAymNwsfjxf5lSx8bQhgisApZ9Cl0PCv2rclFPfDJDygm%2F6VVH6B3R7kr62tNDcy4RaL0rSY0HgjyOIQwsuv83PYAePrqtQJnAT7Du614JMj6SVL0ck%2BgPbapBpiGevoXWgcmzDJYIvNty4xXHmqpbDmRpuvneiZmUKXA9riCYnfW%2Bps21WfHmy3%2B2TjRuMG%2FzlE%2FwKDuYW1FbIeL%2BhwnZnkOCJlCAQQMU5QPBYExmHylkxE%2BKGPmBq3EUsw6NPoNVNdgIV%2F8QsCcG9FMfxp6WXoRGZ85L2canANtYn1qrO9JeNKgFXgSvxD4BI3X7o98vQOdpYAozXUuOQY2mx0LkqhVeFnFHsX3%2FN7b%2FbMfdL0i%2F5jZdrjpFLTlIMcfy494rdxx9pS8%2F3e4l2uR6%2FzRHp9G4NVPoeI7DBy05yLFDNC2sEIFUx0AWbVFPK%2BosCgxsm7trBGV1IW8xNmL%2FjL6dNWwZuYTX7OSePDZeUY%2FYGfznAjTDLlKfDBjqkAbYS66CNdr83WYCSugMj28dGo5ucKmNzX8YfdI5GJp7tli8cXXx9s8OYKiwn%2B8uS3EKh3uwvqDYXaxE%2FNolmiEFp%2BK4OTgoLGx33chIimuIQqIfwLAvaqtFSigdU%2BjYXkZ016huW%2FaR7e9W2seKTmTwsA3Ua4o3zvMOB8cKZr8A8MWsM3UKBopM9sILiOBwiGyokcIXLVlQsGLDhjvMiZWX%2BehDg&X-Amz-Signature=68e58a4d61e4d0c1889939cda491f3c53040a9247ec8434794df3ef82cc1a7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGE3IHT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCvr9e%2F5ymdGxYXOEWkO7zXbfJ8sBZ1IhJ%2FCajAwN05LwIhAN1HiOlpP1zdojEMmWmTJtYTLvo7EoZw3%2BfQKNPF3UzDKv8DCFIQABoMNjM3NDIzMTgzODA1IgzTBUn%2FiMqdhBOyxHIq3APEeF7UFKJk56LGvZpuyqxPIvZE3FNlmzlxdlo9JWiaeHX6hW0erS%2BUxcAa9uIzZmIEN6jhOBiTnNXx8b8wRrL4pSxWX5PdvFo36v7F1ztFLKZ%2FC%2F3JhystFcSfsCMJUHo1gz990MrEQeAymNwsfjxf5lSx8bQhgisApZ9Cl0PCv2rclFPfDJDygm%2F6VVH6B3R7kr62tNDcy4RaL0rSY0HgjyOIQwsuv83PYAePrqtQJnAT7Du614JMj6SVL0ck%2BgPbapBpiGevoXWgcmzDJYIvNty4xXHmqpbDmRpuvneiZmUKXA9riCYnfW%2Bps21WfHmy3%2B2TjRuMG%2FzlE%2FwKDuYW1FbIeL%2BhwnZnkOCJlCAQQMU5QPBYExmHylkxE%2BKGPmBq3EUsw6NPoNVNdgIV%2F8QsCcG9FMfxp6WXoRGZ85L2canANtYn1qrO9JeNKgFXgSvxD4BI3X7o98vQOdpYAozXUuOQY2mx0LkqhVeFnFHsX3%2FN7b%2FbMfdL0i%2F5jZdrjpFLTlIMcfy494rdxx9pS8%2F3e4l2uR6%2FzRHp9G4NVPoeI7DBy05yLFDNC2sEIFUx0AWbVFPK%2BosCgxsm7trBGV1IW8xNmL%2FjL6dNWwZuYTX7OSePDZeUY%2FYGfznAjTDLlKfDBjqkAbYS66CNdr83WYCSugMj28dGo5ucKmNzX8YfdI5GJp7tli8cXXx9s8OYKiwn%2B8uS3EKh3uwvqDYXaxE%2FNolmiEFp%2BK4OTgoLGx33chIimuIQqIfwLAvaqtFSigdU%2BjYXkZ016huW%2FaR7e9W2seKTmTwsA3Ua4o3zvMOB8cKZr8A8MWsM3UKBopM9sILiOBwiGyokcIXLVlQsGLDhjvMiZWX%2BehDg&X-Amz-Signature=d9c148c125514fa9f877faf2783545598034e978c47d79d2f9bf694e9973d618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGE3IHT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCvr9e%2F5ymdGxYXOEWkO7zXbfJ8sBZ1IhJ%2FCajAwN05LwIhAN1HiOlpP1zdojEMmWmTJtYTLvo7EoZw3%2BfQKNPF3UzDKv8DCFIQABoMNjM3NDIzMTgzODA1IgzTBUn%2FiMqdhBOyxHIq3APEeF7UFKJk56LGvZpuyqxPIvZE3FNlmzlxdlo9JWiaeHX6hW0erS%2BUxcAa9uIzZmIEN6jhOBiTnNXx8b8wRrL4pSxWX5PdvFo36v7F1ztFLKZ%2FC%2F3JhystFcSfsCMJUHo1gz990MrEQeAymNwsfjxf5lSx8bQhgisApZ9Cl0PCv2rclFPfDJDygm%2F6VVH6B3R7kr62tNDcy4RaL0rSY0HgjyOIQwsuv83PYAePrqtQJnAT7Du614JMj6SVL0ck%2BgPbapBpiGevoXWgcmzDJYIvNty4xXHmqpbDmRpuvneiZmUKXA9riCYnfW%2Bps21WfHmy3%2B2TjRuMG%2FzlE%2FwKDuYW1FbIeL%2BhwnZnkOCJlCAQQMU5QPBYExmHylkxE%2BKGPmBq3EUsw6NPoNVNdgIV%2F8QsCcG9FMfxp6WXoRGZ85L2canANtYn1qrO9JeNKgFXgSvxD4BI3X7o98vQOdpYAozXUuOQY2mx0LkqhVeFnFHsX3%2FN7b%2FbMfdL0i%2F5jZdrjpFLTlIMcfy494rdxx9pS8%2F3e4l2uR6%2FzRHp9G4NVPoeI7DBy05yLFDNC2sEIFUx0AWbVFPK%2BosCgxsm7trBGV1IW8xNmL%2FjL6dNWwZuYTX7OSePDZeUY%2FYGfznAjTDLlKfDBjqkAbYS66CNdr83WYCSugMj28dGo5ucKmNzX8YfdI5GJp7tli8cXXx9s8OYKiwn%2B8uS3EKh3uwvqDYXaxE%2FNolmiEFp%2BK4OTgoLGx33chIimuIQqIfwLAvaqtFSigdU%2BjYXkZ016huW%2FaR7e9W2seKTmTwsA3Ua4o3zvMOB8cKZr8A8MWsM3UKBopM9sILiOBwiGyokcIXLVlQsGLDhjvMiZWX%2BehDg&X-Amz-Signature=7590498184cbcbe447dd716ded26ef464d92caef931cd83f39aabe81a02fbd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGE3IHT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCvr9e%2F5ymdGxYXOEWkO7zXbfJ8sBZ1IhJ%2FCajAwN05LwIhAN1HiOlpP1zdojEMmWmTJtYTLvo7EoZw3%2BfQKNPF3UzDKv8DCFIQABoMNjM3NDIzMTgzODA1IgzTBUn%2FiMqdhBOyxHIq3APEeF7UFKJk56LGvZpuyqxPIvZE3FNlmzlxdlo9JWiaeHX6hW0erS%2BUxcAa9uIzZmIEN6jhOBiTnNXx8b8wRrL4pSxWX5PdvFo36v7F1ztFLKZ%2FC%2F3JhystFcSfsCMJUHo1gz990MrEQeAymNwsfjxf5lSx8bQhgisApZ9Cl0PCv2rclFPfDJDygm%2F6VVH6B3R7kr62tNDcy4RaL0rSY0HgjyOIQwsuv83PYAePrqtQJnAT7Du614JMj6SVL0ck%2BgPbapBpiGevoXWgcmzDJYIvNty4xXHmqpbDmRpuvneiZmUKXA9riCYnfW%2Bps21WfHmy3%2B2TjRuMG%2FzlE%2FwKDuYW1FbIeL%2BhwnZnkOCJlCAQQMU5QPBYExmHylkxE%2BKGPmBq3EUsw6NPoNVNdgIV%2F8QsCcG9FMfxp6WXoRGZ85L2canANtYn1qrO9JeNKgFXgSvxD4BI3X7o98vQOdpYAozXUuOQY2mx0LkqhVeFnFHsX3%2FN7b%2FbMfdL0i%2F5jZdrjpFLTlIMcfy494rdxx9pS8%2F3e4l2uR6%2FzRHp9G4NVPoeI7DBy05yLFDNC2sEIFUx0AWbVFPK%2BosCgxsm7trBGV1IW8xNmL%2FjL6dNWwZuYTX7OSePDZeUY%2FYGfznAjTDLlKfDBjqkAbYS66CNdr83WYCSugMj28dGo5ucKmNzX8YfdI5GJp7tli8cXXx9s8OYKiwn%2B8uS3EKh3uwvqDYXaxE%2FNolmiEFp%2BK4OTgoLGx33chIimuIQqIfwLAvaqtFSigdU%2BjYXkZ016huW%2FaR7e9W2seKTmTwsA3Ua4o3zvMOB8cKZr8A8MWsM3UKBopM9sILiOBwiGyokcIXLVlQsGLDhjvMiZWX%2BehDg&X-Amz-Signature=c121efa14d8d2694742fd0b9d598ed6ea5797e4824f671867f9e76e6b4c22884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGE3IHT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCvr9e%2F5ymdGxYXOEWkO7zXbfJ8sBZ1IhJ%2FCajAwN05LwIhAN1HiOlpP1zdojEMmWmTJtYTLvo7EoZw3%2BfQKNPF3UzDKv8DCFIQABoMNjM3NDIzMTgzODA1IgzTBUn%2FiMqdhBOyxHIq3APEeF7UFKJk56LGvZpuyqxPIvZE3FNlmzlxdlo9JWiaeHX6hW0erS%2BUxcAa9uIzZmIEN6jhOBiTnNXx8b8wRrL4pSxWX5PdvFo36v7F1ztFLKZ%2FC%2F3JhystFcSfsCMJUHo1gz990MrEQeAymNwsfjxf5lSx8bQhgisApZ9Cl0PCv2rclFPfDJDygm%2F6VVH6B3R7kr62tNDcy4RaL0rSY0HgjyOIQwsuv83PYAePrqtQJnAT7Du614JMj6SVL0ck%2BgPbapBpiGevoXWgcmzDJYIvNty4xXHmqpbDmRpuvneiZmUKXA9riCYnfW%2Bps21WfHmy3%2B2TjRuMG%2FzlE%2FwKDuYW1FbIeL%2BhwnZnkOCJlCAQQMU5QPBYExmHylkxE%2BKGPmBq3EUsw6NPoNVNdgIV%2F8QsCcG9FMfxp6WXoRGZ85L2canANtYn1qrO9JeNKgFXgSvxD4BI3X7o98vQOdpYAozXUuOQY2mx0LkqhVeFnFHsX3%2FN7b%2FbMfdL0i%2F5jZdrjpFLTlIMcfy494rdxx9pS8%2F3e4l2uR6%2FzRHp9G4NVPoeI7DBy05yLFDNC2sEIFUx0AWbVFPK%2BosCgxsm7trBGV1IW8xNmL%2FjL6dNWwZuYTX7OSePDZeUY%2FYGfznAjTDLlKfDBjqkAbYS66CNdr83WYCSugMj28dGo5ucKmNzX8YfdI5GJp7tli8cXXx9s8OYKiwn%2B8uS3EKh3uwvqDYXaxE%2FNolmiEFp%2BK4OTgoLGx33chIimuIQqIfwLAvaqtFSigdU%2BjYXkZ016huW%2FaR7e9W2seKTmTwsA3Ua4o3zvMOB8cKZr8A8MWsM3UKBopM9sILiOBwiGyokcIXLVlQsGLDhjvMiZWX%2BehDg&X-Amz-Signature=d7f56a02cf4f32f6edbc1be6b90a8e66d267c8cf8d6d5fb51f04669b6c7ae386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGE3IHT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCvr9e%2F5ymdGxYXOEWkO7zXbfJ8sBZ1IhJ%2FCajAwN05LwIhAN1HiOlpP1zdojEMmWmTJtYTLvo7EoZw3%2BfQKNPF3UzDKv8DCFIQABoMNjM3NDIzMTgzODA1IgzTBUn%2FiMqdhBOyxHIq3APEeF7UFKJk56LGvZpuyqxPIvZE3FNlmzlxdlo9JWiaeHX6hW0erS%2BUxcAa9uIzZmIEN6jhOBiTnNXx8b8wRrL4pSxWX5PdvFo36v7F1ztFLKZ%2FC%2F3JhystFcSfsCMJUHo1gz990MrEQeAymNwsfjxf5lSx8bQhgisApZ9Cl0PCv2rclFPfDJDygm%2F6VVH6B3R7kr62tNDcy4RaL0rSY0HgjyOIQwsuv83PYAePrqtQJnAT7Du614JMj6SVL0ck%2BgPbapBpiGevoXWgcmzDJYIvNty4xXHmqpbDmRpuvneiZmUKXA9riCYnfW%2Bps21WfHmy3%2B2TjRuMG%2FzlE%2FwKDuYW1FbIeL%2BhwnZnkOCJlCAQQMU5QPBYExmHylkxE%2BKGPmBq3EUsw6NPoNVNdgIV%2F8QsCcG9FMfxp6WXoRGZ85L2canANtYn1qrO9JeNKgFXgSvxD4BI3X7o98vQOdpYAozXUuOQY2mx0LkqhVeFnFHsX3%2FN7b%2FbMfdL0i%2F5jZdrjpFLTlIMcfy494rdxx9pS8%2F3e4l2uR6%2FzRHp9G4NVPoeI7DBy05yLFDNC2sEIFUx0AWbVFPK%2BosCgxsm7trBGV1IW8xNmL%2FjL6dNWwZuYTX7OSePDZeUY%2FYGfznAjTDLlKfDBjqkAbYS66CNdr83WYCSugMj28dGo5ucKmNzX8YfdI5GJp7tli8cXXx9s8OYKiwn%2B8uS3EKh3uwvqDYXaxE%2FNolmiEFp%2BK4OTgoLGx33chIimuIQqIfwLAvaqtFSigdU%2BjYXkZ016huW%2FaR7e9W2seKTmTwsA3Ua4o3zvMOB8cKZr8A8MWsM3UKBopM9sILiOBwiGyokcIXLVlQsGLDhjvMiZWX%2BehDg&X-Amz-Signature=10d2908858f1b5657aa3fd1bb3afe56063f0e145f989e5f13e7840be95b0663f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
