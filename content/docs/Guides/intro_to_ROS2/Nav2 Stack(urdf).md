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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=3a212200417bafb8b37dc377e667b8753ae3bcd9949134cd596f924490ce901b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=1eee6ab2cf3fcb0cd05eeb820dced07f4e21cbc79743d6b925bb4cdaaebbc65c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=cae5be4a76af3b4826b4121aca3363965725b46ecc69cb8134692e59e9723282&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=16db7205f8809b4e7f52c8d06f1309654eaf025cd2296a4fa7e0c076e8bf7eba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=58cd9043701d042149ccde6d50058a84a6bafc0e58e1bfa8cf3790d001313626&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKX52OY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuiHYWDQemj2uLBnLlJCHvAUPsF%2FsWNgHuFw5QzA5pYAiABevLHe6W752JN%2B%2F3yT9VIEkguS119T8WV8qsWdfwZyCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FwAf0693XZaFLq1KtwDPJw9b9RCXX3X%2Fzt4i4F4ZjFYlqGK5fkoDLA1kz8sRGo6QlIyF6wswL5r77%2FN3BjMvYXOxxhE6n%2FJAR7RvEz9IVBaO7lLKppTSXGLhIRtdBF2%2BP5%2F72KucpxO1NTGYZJ9Qcq7esuHG9z%2FBHaR6WMnmtOfsUHq4zUb%2F5A%2B0kMyObzP69xM5VYd2ZYqjwqJMfizWEm21Pis2AYCVtvarowOshWiIxv71Bf0l3Of22K%2BxbuS9FnG%2FcbhXfjF5sRwpZoUAGGUggDK4O%2Fq%2F1Z8MHc%2BB9mjzxcvfnUcseSMTJQC0WWbVPSECgE9Mw1tlCA2csk8GMJX9jybzPbY%2F1Xhl8g5%2B1Fk%2FBY59CfPAcwolxCvBqQ4DbhwjYv5v0Eko5u3kL%2FPje%2BjarAUhG1rpkZh%2FuGSt7E1dFFtDc3XTS8t1O1NAu0Su4PO%2BPCxSQrMKXsHp8ueZSeSm6XmwhThq1QUMx5zcVQjN%2FCNW74kPUqJRyT0%2BP%2FL0lE2vA%2FheXrpy%2FY%2BD0y3VHThvgKV3LJq5x2idCvIXfp2QnOepMOdTMlE8ycCYGB%2FiOtFab2m79Sal19Pcg4qaaJfBsH4qvZPH4BVstEliHyg%2BElzqjkbDlosHfU7rQiq2ddbljFjnlMPhr8wjObhvQY6pgHlKH30IV9pXO%2BEoj2%2BUw2q3QeNzW5lxXMNfAYFMvBJ7tftl56jb1KfkzYcZZAIJVGd%2FktIJZ54f5nqWqXnSdjc7eG3vcxQLf4pyu4eT55UCW5mN%2F%2BMzSN%2Bmer%2BeaQA70Wwif9tZvh47gd4WkDnzwjOlvK1ANPRtaRGXbfU1IlEmkHytpSGC3Npnb%2FlO2Ls%2BZJP8jaZnCbgPYwHeTO8Y3raCHxkYhzl&X-Amz-Signature=aef34498c5887b78e39e08eae339bac7577d58ea757582af50a92a55f388258e&X-Amz-SignedHeaders=host&x-id=GetObject)
