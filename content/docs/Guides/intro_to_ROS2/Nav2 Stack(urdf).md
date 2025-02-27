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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3JIROV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9BCyh7IXA59pt0WU33kahSVqrB5oANWmuLHjyKj6flAiASO9mPIVJW3bDBFxgPhhdOG1%2FvYpfLGguFs63NebTybSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMyD8rgy5rurBf8Y0cKtwDtCxdbytvEkqmWBKcRPQybNL%2FuwHEMIlvY%2FPOzzS3p2UZSk9LMytZcYLcEKpDRW8%2FIjkcH2rqvoDMtB2Udj%2F8w6O0EvFyGD%2BkD%2F66HyJ%2BVIg4obD4KjB5f2DpswIIGN0I5q%2BUg34hd1lt%2BpS%2FPqmx1THXWFfIVDZIc98fVRWcjBpiX01lNHhlZR9iMcvpePpaVLw8fSdUgKuNAJ3JTLmvY421Cn3aACGKkmtGCvghBC9NFBAv4%2BVYC2Z%2BsdjAbD6uoscS4r9vimE9aGZwYIOTNH5U7K2IuFk4VOd4af6ycU59iB%2B8CmMRiVACz51EXxC4UEC3aJaQXfy0s%2B93QdNB%2Fs58rmqYFYGpelaFagQvt79oQSBGt0E1dJArB3dPX8s2omRci5xmOOOJnQEfidqrMRUBsFxwN1q6mycXxAma7FjeEqNzyY8%2BmO9P2H49VTEowU2Kqx8OWgnB9lzWI07Z96LDnRR1mzRWjyMEz0FRqZ09m6i2Yldqh%2F6S%2BcqvT0DYkeRjjlbV8MAMRYYhdvyeFRDITyf6tqjOGh0hx1rUD72Mn%2BpdA3MmCZ%2Fa%2BS%2FrWmKUcyIXGwTFr0vKqRkmgfDwzLhT2AB0pDK5MPZM3juZQ2rh7AxgWxvhMXron9Ywr5T%2FvQY6pgHKMEfRFNC0jIArKFK25QvpmHkVWiozAhIxyj5DX4%2FPNVu7hkrq51aalLFtjEPSorl6b4r4jiya%2FpR0uFIBs8%2BH8lFT6eMP6VaS1bGrdz9QmwRvCNLVa%2F0OSmixILGrW%2FNtXPREiTc%2FkQGoUtJS2uYQVb5XQX7ohHEURAd7EhoJsIZOWLh8rhWVe9%2FZzZHvZd065NM55ekcZNkpPziXISAVC7DBGJSY&X-Amz-Signature=d48dfc6ff86e20789166b66f2d27a6fc2a4c01456b36834425579387f8dc86b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3JIROV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9BCyh7IXA59pt0WU33kahSVqrB5oANWmuLHjyKj6flAiASO9mPIVJW3bDBFxgPhhdOG1%2FvYpfLGguFs63NebTybSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMyD8rgy5rurBf8Y0cKtwDtCxdbytvEkqmWBKcRPQybNL%2FuwHEMIlvY%2FPOzzS3p2UZSk9LMytZcYLcEKpDRW8%2FIjkcH2rqvoDMtB2Udj%2F8w6O0EvFyGD%2BkD%2F66HyJ%2BVIg4obD4KjB5f2DpswIIGN0I5q%2BUg34hd1lt%2BpS%2FPqmx1THXWFfIVDZIc98fVRWcjBpiX01lNHhlZR9iMcvpePpaVLw8fSdUgKuNAJ3JTLmvY421Cn3aACGKkmtGCvghBC9NFBAv4%2BVYC2Z%2BsdjAbD6uoscS4r9vimE9aGZwYIOTNH5U7K2IuFk4VOd4af6ycU59iB%2B8CmMRiVACz51EXxC4UEC3aJaQXfy0s%2B93QdNB%2Fs58rmqYFYGpelaFagQvt79oQSBGt0E1dJArB3dPX8s2omRci5xmOOOJnQEfidqrMRUBsFxwN1q6mycXxAma7FjeEqNzyY8%2BmO9P2H49VTEowU2Kqx8OWgnB9lzWI07Z96LDnRR1mzRWjyMEz0FRqZ09m6i2Yldqh%2F6S%2BcqvT0DYkeRjjlbV8MAMRYYhdvyeFRDITyf6tqjOGh0hx1rUD72Mn%2BpdA3MmCZ%2Fa%2BS%2FrWmKUcyIXGwTFr0vKqRkmgfDwzLhT2AB0pDK5MPZM3juZQ2rh7AxgWxvhMXron9Ywr5T%2FvQY6pgHKMEfRFNC0jIArKFK25QvpmHkVWiozAhIxyj5DX4%2FPNVu7hkrq51aalLFtjEPSorl6b4r4jiya%2FpR0uFIBs8%2BH8lFT6eMP6VaS1bGrdz9QmwRvCNLVa%2F0OSmixILGrW%2FNtXPREiTc%2FkQGoUtJS2uYQVb5XQX7ohHEURAd7EhoJsIZOWLh8rhWVe9%2FZzZHvZd065NM55ekcZNkpPziXISAVC7DBGJSY&X-Amz-Signature=7ec1bc2f12eb559d579926f3d49ab0d2e84d3b088dbe0f9064df4329ecd1e7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3JIROV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9BCyh7IXA59pt0WU33kahSVqrB5oANWmuLHjyKj6flAiASO9mPIVJW3bDBFxgPhhdOG1%2FvYpfLGguFs63NebTybSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMyD8rgy5rurBf8Y0cKtwDtCxdbytvEkqmWBKcRPQybNL%2FuwHEMIlvY%2FPOzzS3p2UZSk9LMytZcYLcEKpDRW8%2FIjkcH2rqvoDMtB2Udj%2F8w6O0EvFyGD%2BkD%2F66HyJ%2BVIg4obD4KjB5f2DpswIIGN0I5q%2BUg34hd1lt%2BpS%2FPqmx1THXWFfIVDZIc98fVRWcjBpiX01lNHhlZR9iMcvpePpaVLw8fSdUgKuNAJ3JTLmvY421Cn3aACGKkmtGCvghBC9NFBAv4%2BVYC2Z%2BsdjAbD6uoscS4r9vimE9aGZwYIOTNH5U7K2IuFk4VOd4af6ycU59iB%2B8CmMRiVACz51EXxC4UEC3aJaQXfy0s%2B93QdNB%2Fs58rmqYFYGpelaFagQvt79oQSBGt0E1dJArB3dPX8s2omRci5xmOOOJnQEfidqrMRUBsFxwN1q6mycXxAma7FjeEqNzyY8%2BmO9P2H49VTEowU2Kqx8OWgnB9lzWI07Z96LDnRR1mzRWjyMEz0FRqZ09m6i2Yldqh%2F6S%2BcqvT0DYkeRjjlbV8MAMRYYhdvyeFRDITyf6tqjOGh0hx1rUD72Mn%2BpdA3MmCZ%2Fa%2BS%2FrWmKUcyIXGwTFr0vKqRkmgfDwzLhT2AB0pDK5MPZM3juZQ2rh7AxgWxvhMXron9Ywr5T%2FvQY6pgHKMEfRFNC0jIArKFK25QvpmHkVWiozAhIxyj5DX4%2FPNVu7hkrq51aalLFtjEPSorl6b4r4jiya%2FpR0uFIBs8%2BH8lFT6eMP6VaS1bGrdz9QmwRvCNLVa%2F0OSmixILGrW%2FNtXPREiTc%2FkQGoUtJS2uYQVb5XQX7ohHEURAd7EhoJsIZOWLh8rhWVe9%2FZzZHvZd065NM55ekcZNkpPziXISAVC7DBGJSY&X-Amz-Signature=91892f60aa8293ef1429b36539b6ff805914031caba3346bbf462a7bf2b1a96e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3JIROV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9BCyh7IXA59pt0WU33kahSVqrB5oANWmuLHjyKj6flAiASO9mPIVJW3bDBFxgPhhdOG1%2FvYpfLGguFs63NebTybSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMyD8rgy5rurBf8Y0cKtwDtCxdbytvEkqmWBKcRPQybNL%2FuwHEMIlvY%2FPOzzS3p2UZSk9LMytZcYLcEKpDRW8%2FIjkcH2rqvoDMtB2Udj%2F8w6O0EvFyGD%2BkD%2F66HyJ%2BVIg4obD4KjB5f2DpswIIGN0I5q%2BUg34hd1lt%2BpS%2FPqmx1THXWFfIVDZIc98fVRWcjBpiX01lNHhlZR9iMcvpePpaVLw8fSdUgKuNAJ3JTLmvY421Cn3aACGKkmtGCvghBC9NFBAv4%2BVYC2Z%2BsdjAbD6uoscS4r9vimE9aGZwYIOTNH5U7K2IuFk4VOd4af6ycU59iB%2B8CmMRiVACz51EXxC4UEC3aJaQXfy0s%2B93QdNB%2Fs58rmqYFYGpelaFagQvt79oQSBGt0E1dJArB3dPX8s2omRci5xmOOOJnQEfidqrMRUBsFxwN1q6mycXxAma7FjeEqNzyY8%2BmO9P2H49VTEowU2Kqx8OWgnB9lzWI07Z96LDnRR1mzRWjyMEz0FRqZ09m6i2Yldqh%2F6S%2BcqvT0DYkeRjjlbV8MAMRYYhdvyeFRDITyf6tqjOGh0hx1rUD72Mn%2BpdA3MmCZ%2Fa%2BS%2FrWmKUcyIXGwTFr0vKqRkmgfDwzLhT2AB0pDK5MPZM3juZQ2rh7AxgWxvhMXron9Ywr5T%2FvQY6pgHKMEfRFNC0jIArKFK25QvpmHkVWiozAhIxyj5DX4%2FPNVu7hkrq51aalLFtjEPSorl6b4r4jiya%2FpR0uFIBs8%2BH8lFT6eMP6VaS1bGrdz9QmwRvCNLVa%2F0OSmixILGrW%2FNtXPREiTc%2FkQGoUtJS2uYQVb5XQX7ohHEURAd7EhoJsIZOWLh8rhWVe9%2FZzZHvZd065NM55ekcZNkpPziXISAVC7DBGJSY&X-Amz-Signature=230c4801abf9f594384341543ac8d4e530974b882f7d2f46bc974db8e191ffce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3JIROV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9BCyh7IXA59pt0WU33kahSVqrB5oANWmuLHjyKj6flAiASO9mPIVJW3bDBFxgPhhdOG1%2FvYpfLGguFs63NebTybSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMyD8rgy5rurBf8Y0cKtwDtCxdbytvEkqmWBKcRPQybNL%2FuwHEMIlvY%2FPOzzS3p2UZSk9LMytZcYLcEKpDRW8%2FIjkcH2rqvoDMtB2Udj%2F8w6O0EvFyGD%2BkD%2F66HyJ%2BVIg4obD4KjB5f2DpswIIGN0I5q%2BUg34hd1lt%2BpS%2FPqmx1THXWFfIVDZIc98fVRWcjBpiX01lNHhlZR9iMcvpePpaVLw8fSdUgKuNAJ3JTLmvY421Cn3aACGKkmtGCvghBC9NFBAv4%2BVYC2Z%2BsdjAbD6uoscS4r9vimE9aGZwYIOTNH5U7K2IuFk4VOd4af6ycU59iB%2B8CmMRiVACz51EXxC4UEC3aJaQXfy0s%2B93QdNB%2Fs58rmqYFYGpelaFagQvt79oQSBGt0E1dJArB3dPX8s2omRci5xmOOOJnQEfidqrMRUBsFxwN1q6mycXxAma7FjeEqNzyY8%2BmO9P2H49VTEowU2Kqx8OWgnB9lzWI07Z96LDnRR1mzRWjyMEz0FRqZ09m6i2Yldqh%2F6S%2BcqvT0DYkeRjjlbV8MAMRYYhdvyeFRDITyf6tqjOGh0hx1rUD72Mn%2BpdA3MmCZ%2Fa%2BS%2FrWmKUcyIXGwTFr0vKqRkmgfDwzLhT2AB0pDK5MPZM3juZQ2rh7AxgWxvhMXron9Ywr5T%2FvQY6pgHKMEfRFNC0jIArKFK25QvpmHkVWiozAhIxyj5DX4%2FPNVu7hkrq51aalLFtjEPSorl6b4r4jiya%2FpR0uFIBs8%2BH8lFT6eMP6VaS1bGrdz9QmwRvCNLVa%2F0OSmixILGrW%2FNtXPREiTc%2FkQGoUtJS2uYQVb5XQX7ohHEURAd7EhoJsIZOWLh8rhWVe9%2FZzZHvZd065NM55ekcZNkpPziXISAVC7DBGJSY&X-Amz-Signature=e1170737804dd24d5b6d6caf625426b402b48732c38e4715ea6aa8c07530bc18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3JIROV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9BCyh7IXA59pt0WU33kahSVqrB5oANWmuLHjyKj6flAiASO9mPIVJW3bDBFxgPhhdOG1%2FvYpfLGguFs63NebTybSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMyD8rgy5rurBf8Y0cKtwDtCxdbytvEkqmWBKcRPQybNL%2FuwHEMIlvY%2FPOzzS3p2UZSk9LMytZcYLcEKpDRW8%2FIjkcH2rqvoDMtB2Udj%2F8w6O0EvFyGD%2BkD%2F66HyJ%2BVIg4obD4KjB5f2DpswIIGN0I5q%2BUg34hd1lt%2BpS%2FPqmx1THXWFfIVDZIc98fVRWcjBpiX01lNHhlZR9iMcvpePpaVLw8fSdUgKuNAJ3JTLmvY421Cn3aACGKkmtGCvghBC9NFBAv4%2BVYC2Z%2BsdjAbD6uoscS4r9vimE9aGZwYIOTNH5U7K2IuFk4VOd4af6ycU59iB%2B8CmMRiVACz51EXxC4UEC3aJaQXfy0s%2B93QdNB%2Fs58rmqYFYGpelaFagQvt79oQSBGt0E1dJArB3dPX8s2omRci5xmOOOJnQEfidqrMRUBsFxwN1q6mycXxAma7FjeEqNzyY8%2BmO9P2H49VTEowU2Kqx8OWgnB9lzWI07Z96LDnRR1mzRWjyMEz0FRqZ09m6i2Yldqh%2F6S%2BcqvT0DYkeRjjlbV8MAMRYYhdvyeFRDITyf6tqjOGh0hx1rUD72Mn%2BpdA3MmCZ%2Fa%2BS%2FrWmKUcyIXGwTFr0vKqRkmgfDwzLhT2AB0pDK5MPZM3juZQ2rh7AxgWxvhMXron9Ywr5T%2FvQY6pgHKMEfRFNC0jIArKFK25QvpmHkVWiozAhIxyj5DX4%2FPNVu7hkrq51aalLFtjEPSorl6b4r4jiya%2FpR0uFIBs8%2BH8lFT6eMP6VaS1bGrdz9QmwRvCNLVa%2F0OSmixILGrW%2FNtXPREiTc%2FkQGoUtJS2uYQVb5XQX7ohHEURAd7EhoJsIZOWLh8rhWVe9%2FZzZHvZd065NM55ekcZNkpPziXISAVC7DBGJSY&X-Amz-Signature=cc624d6f96e33c0f96db97f9a35c0cea7a9656204e91c52bc2189a3009d55e98&X-Amz-SignedHeaders=host&x-id=GetObject)
