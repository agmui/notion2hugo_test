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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMY66KS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC2kdRUZbiB%2B2RZSzZfLSCInpxk0%2BXlRDjGszvXVh9VKAIhAKfHsTn6eaLVKG%2F%2Bd6kNTrhm%2BomqTbNktOK8wxU105XCKv8DCD0QABoMNjM3NDIzMTgzODA1Igyv371LLLGnMM9bzR4q3AMyPX69yKurc%2Bfor%2FD8wwavRX7RmzOYutrxaW1lWLO3FSyw9TAovuE%2B7Ep8X7H2IOLQC7NA62loLMrWNFQhO6Q%2F1jwYjyxfUFWcKLR%2FMISs3x7jWbe%2Foj1aiSHRXoGiq0y8Ce94vQafn%2BFkl2BF6ekQQJgljpi7c3JTfFY9JE6HyaoGc1Tyh7L7WssXIT1TdmLY6QF2HLoZXLJ3HpGMEeX4318dn%2FiQQDjwsQfex%2Bz4od01Y%2Fz89Fb6e5pxdzP7hPxKcV5crHTmx1JBzHHLn6caNXvmMA8ge5LFZ%2BKroc14kh9FFQhZUmKrTG20ts4svr7Uq0f7dbaQ6ol8EpCcNJBaKI4xKbcUuAaBuo5TcUtKIBRTLGjKx3mIrUx7h5nb0WnWL0%2FEwiU84JmaQuWyXv2lSq1p5UmsBjnkrYUcbWfdl%2BCMK98wYb%2BLXWlpYhorJJcQ0gECoonrJ%2B1b%2BIRM%2FJEf9JmEtryNpsj2wdmYyznsigb%2BKAxbeBN7Ll75oFBGQqqRTnON9xcohZDwTZXL3NfCV%2F0sA%2BsirXnRQvhQ3ptwxUFvGAIbQN8jJR3YgZYRgsXmmVI7TWEJntvm541lbtAylrI9YIqdM6ScYcwMXD8hS40o35GO4v4Lif6mNDC%2F%2F7jCBjqkAb%2F2exFztrmaZqUkne2JXxEVCPTMyu9W41xCTNt%2Fzb23LNlUuiWf%2Bpu%2Bpk1%2BFGfzl1szdEIhtusj5sKaG0mxCFRy%2Fd9%2FLPtMdfPIu2oRGmDMEqVCIh7xMjAEEVhy6XKFPSFDSJzpfPE3YlQRWv1P7LqBRxD%2BNl1VsLWthufWKR79id6ZkhNei9UWUXza47k0VNnD%2Bl88Ov7cWwyCBGVd4G7NejCv&X-Amz-Signature=2388b420f8d2cbc53588d60d631cc68754667885bf6df9f54e785bd7eeb23a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMY66KS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC2kdRUZbiB%2B2RZSzZfLSCInpxk0%2BXlRDjGszvXVh9VKAIhAKfHsTn6eaLVKG%2F%2Bd6kNTrhm%2BomqTbNktOK8wxU105XCKv8DCD0QABoMNjM3NDIzMTgzODA1Igyv371LLLGnMM9bzR4q3AMyPX69yKurc%2Bfor%2FD8wwavRX7RmzOYutrxaW1lWLO3FSyw9TAovuE%2B7Ep8X7H2IOLQC7NA62loLMrWNFQhO6Q%2F1jwYjyxfUFWcKLR%2FMISs3x7jWbe%2Foj1aiSHRXoGiq0y8Ce94vQafn%2BFkl2BF6ekQQJgljpi7c3JTfFY9JE6HyaoGc1Tyh7L7WssXIT1TdmLY6QF2HLoZXLJ3HpGMEeX4318dn%2FiQQDjwsQfex%2Bz4od01Y%2Fz89Fb6e5pxdzP7hPxKcV5crHTmx1JBzHHLn6caNXvmMA8ge5LFZ%2BKroc14kh9FFQhZUmKrTG20ts4svr7Uq0f7dbaQ6ol8EpCcNJBaKI4xKbcUuAaBuo5TcUtKIBRTLGjKx3mIrUx7h5nb0WnWL0%2FEwiU84JmaQuWyXv2lSq1p5UmsBjnkrYUcbWfdl%2BCMK98wYb%2BLXWlpYhorJJcQ0gECoonrJ%2B1b%2BIRM%2FJEf9JmEtryNpsj2wdmYyznsigb%2BKAxbeBN7Ll75oFBGQqqRTnON9xcohZDwTZXL3NfCV%2F0sA%2BsirXnRQvhQ3ptwxUFvGAIbQN8jJR3YgZYRgsXmmVI7TWEJntvm541lbtAylrI9YIqdM6ScYcwMXD8hS40o35GO4v4Lif6mNDC%2F%2F7jCBjqkAb%2F2exFztrmaZqUkne2JXxEVCPTMyu9W41xCTNt%2Fzb23LNlUuiWf%2Bpu%2Bpk1%2BFGfzl1szdEIhtusj5sKaG0mxCFRy%2Fd9%2FLPtMdfPIu2oRGmDMEqVCIh7xMjAEEVhy6XKFPSFDSJzpfPE3YlQRWv1P7LqBRxD%2BNl1VsLWthufWKR79id6ZkhNei9UWUXza47k0VNnD%2Bl88Ov7cWwyCBGVd4G7NejCv&X-Amz-Signature=bfc70b1e01b644c2629a171354a50b03b2e0ca87ff7cc827b849bfc8b5ce2200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMY66KS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC2kdRUZbiB%2B2RZSzZfLSCInpxk0%2BXlRDjGszvXVh9VKAIhAKfHsTn6eaLVKG%2F%2Bd6kNTrhm%2BomqTbNktOK8wxU105XCKv8DCD0QABoMNjM3NDIzMTgzODA1Igyv371LLLGnMM9bzR4q3AMyPX69yKurc%2Bfor%2FD8wwavRX7RmzOYutrxaW1lWLO3FSyw9TAovuE%2B7Ep8X7H2IOLQC7NA62loLMrWNFQhO6Q%2F1jwYjyxfUFWcKLR%2FMISs3x7jWbe%2Foj1aiSHRXoGiq0y8Ce94vQafn%2BFkl2BF6ekQQJgljpi7c3JTfFY9JE6HyaoGc1Tyh7L7WssXIT1TdmLY6QF2HLoZXLJ3HpGMEeX4318dn%2FiQQDjwsQfex%2Bz4od01Y%2Fz89Fb6e5pxdzP7hPxKcV5crHTmx1JBzHHLn6caNXvmMA8ge5LFZ%2BKroc14kh9FFQhZUmKrTG20ts4svr7Uq0f7dbaQ6ol8EpCcNJBaKI4xKbcUuAaBuo5TcUtKIBRTLGjKx3mIrUx7h5nb0WnWL0%2FEwiU84JmaQuWyXv2lSq1p5UmsBjnkrYUcbWfdl%2BCMK98wYb%2BLXWlpYhorJJcQ0gECoonrJ%2B1b%2BIRM%2FJEf9JmEtryNpsj2wdmYyznsigb%2BKAxbeBN7Ll75oFBGQqqRTnON9xcohZDwTZXL3NfCV%2F0sA%2BsirXnRQvhQ3ptwxUFvGAIbQN8jJR3YgZYRgsXmmVI7TWEJntvm541lbtAylrI9YIqdM6ScYcwMXD8hS40o35GO4v4Lif6mNDC%2F%2F7jCBjqkAb%2F2exFztrmaZqUkne2JXxEVCPTMyu9W41xCTNt%2Fzb23LNlUuiWf%2Bpu%2Bpk1%2BFGfzl1szdEIhtusj5sKaG0mxCFRy%2Fd9%2FLPtMdfPIu2oRGmDMEqVCIh7xMjAEEVhy6XKFPSFDSJzpfPE3YlQRWv1P7LqBRxD%2BNl1VsLWthufWKR79id6ZkhNei9UWUXza47k0VNnD%2Bl88Ov7cWwyCBGVd4G7NejCv&X-Amz-Signature=689b7b183277fb37265627682b6bda8066fe3efb0e0c1676655c08ccc55c580b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMY66KS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC2kdRUZbiB%2B2RZSzZfLSCInpxk0%2BXlRDjGszvXVh9VKAIhAKfHsTn6eaLVKG%2F%2Bd6kNTrhm%2BomqTbNktOK8wxU105XCKv8DCD0QABoMNjM3NDIzMTgzODA1Igyv371LLLGnMM9bzR4q3AMyPX69yKurc%2Bfor%2FD8wwavRX7RmzOYutrxaW1lWLO3FSyw9TAovuE%2B7Ep8X7H2IOLQC7NA62loLMrWNFQhO6Q%2F1jwYjyxfUFWcKLR%2FMISs3x7jWbe%2Foj1aiSHRXoGiq0y8Ce94vQafn%2BFkl2BF6ekQQJgljpi7c3JTfFY9JE6HyaoGc1Tyh7L7WssXIT1TdmLY6QF2HLoZXLJ3HpGMEeX4318dn%2FiQQDjwsQfex%2Bz4od01Y%2Fz89Fb6e5pxdzP7hPxKcV5crHTmx1JBzHHLn6caNXvmMA8ge5LFZ%2BKroc14kh9FFQhZUmKrTG20ts4svr7Uq0f7dbaQ6ol8EpCcNJBaKI4xKbcUuAaBuo5TcUtKIBRTLGjKx3mIrUx7h5nb0WnWL0%2FEwiU84JmaQuWyXv2lSq1p5UmsBjnkrYUcbWfdl%2BCMK98wYb%2BLXWlpYhorJJcQ0gECoonrJ%2B1b%2BIRM%2FJEf9JmEtryNpsj2wdmYyznsigb%2BKAxbeBN7Ll75oFBGQqqRTnON9xcohZDwTZXL3NfCV%2F0sA%2BsirXnRQvhQ3ptwxUFvGAIbQN8jJR3YgZYRgsXmmVI7TWEJntvm541lbtAylrI9YIqdM6ScYcwMXD8hS40o35GO4v4Lif6mNDC%2F%2F7jCBjqkAb%2F2exFztrmaZqUkne2JXxEVCPTMyu9W41xCTNt%2Fzb23LNlUuiWf%2Bpu%2Bpk1%2BFGfzl1szdEIhtusj5sKaG0mxCFRy%2Fd9%2FLPtMdfPIu2oRGmDMEqVCIh7xMjAEEVhy6XKFPSFDSJzpfPE3YlQRWv1P7LqBRxD%2BNl1VsLWthufWKR79id6ZkhNei9UWUXza47k0VNnD%2Bl88Ov7cWwyCBGVd4G7NejCv&X-Amz-Signature=6dc8989f21538dbc2a532fdcaf557c733b01f3e243b22f8aa50b5a4ee1585656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMY66KS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC2kdRUZbiB%2B2RZSzZfLSCInpxk0%2BXlRDjGszvXVh9VKAIhAKfHsTn6eaLVKG%2F%2Bd6kNTrhm%2BomqTbNktOK8wxU105XCKv8DCD0QABoMNjM3NDIzMTgzODA1Igyv371LLLGnMM9bzR4q3AMyPX69yKurc%2Bfor%2FD8wwavRX7RmzOYutrxaW1lWLO3FSyw9TAovuE%2B7Ep8X7H2IOLQC7NA62loLMrWNFQhO6Q%2F1jwYjyxfUFWcKLR%2FMISs3x7jWbe%2Foj1aiSHRXoGiq0y8Ce94vQafn%2BFkl2BF6ekQQJgljpi7c3JTfFY9JE6HyaoGc1Tyh7L7WssXIT1TdmLY6QF2HLoZXLJ3HpGMEeX4318dn%2FiQQDjwsQfex%2Bz4od01Y%2Fz89Fb6e5pxdzP7hPxKcV5crHTmx1JBzHHLn6caNXvmMA8ge5LFZ%2BKroc14kh9FFQhZUmKrTG20ts4svr7Uq0f7dbaQ6ol8EpCcNJBaKI4xKbcUuAaBuo5TcUtKIBRTLGjKx3mIrUx7h5nb0WnWL0%2FEwiU84JmaQuWyXv2lSq1p5UmsBjnkrYUcbWfdl%2BCMK98wYb%2BLXWlpYhorJJcQ0gECoonrJ%2B1b%2BIRM%2FJEf9JmEtryNpsj2wdmYyznsigb%2BKAxbeBN7Ll75oFBGQqqRTnON9xcohZDwTZXL3NfCV%2F0sA%2BsirXnRQvhQ3ptwxUFvGAIbQN8jJR3YgZYRgsXmmVI7TWEJntvm541lbtAylrI9YIqdM6ScYcwMXD8hS40o35GO4v4Lif6mNDC%2F%2F7jCBjqkAb%2F2exFztrmaZqUkne2JXxEVCPTMyu9W41xCTNt%2Fzb23LNlUuiWf%2Bpu%2Bpk1%2BFGfzl1szdEIhtusj5sKaG0mxCFRy%2Fd9%2FLPtMdfPIu2oRGmDMEqVCIh7xMjAEEVhy6XKFPSFDSJzpfPE3YlQRWv1P7LqBRxD%2BNl1VsLWthufWKR79id6ZkhNei9UWUXza47k0VNnD%2Bl88Ov7cWwyCBGVd4G7NejCv&X-Amz-Signature=7efbb0181572e2a3ccb839b5753c0ea5a44cf2e95ab26c97d4fcceee5fc505af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMY66KS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC2kdRUZbiB%2B2RZSzZfLSCInpxk0%2BXlRDjGszvXVh9VKAIhAKfHsTn6eaLVKG%2F%2Bd6kNTrhm%2BomqTbNktOK8wxU105XCKv8DCD0QABoMNjM3NDIzMTgzODA1Igyv371LLLGnMM9bzR4q3AMyPX69yKurc%2Bfor%2FD8wwavRX7RmzOYutrxaW1lWLO3FSyw9TAovuE%2B7Ep8X7H2IOLQC7NA62loLMrWNFQhO6Q%2F1jwYjyxfUFWcKLR%2FMISs3x7jWbe%2Foj1aiSHRXoGiq0y8Ce94vQafn%2BFkl2BF6ekQQJgljpi7c3JTfFY9JE6HyaoGc1Tyh7L7WssXIT1TdmLY6QF2HLoZXLJ3HpGMEeX4318dn%2FiQQDjwsQfex%2Bz4od01Y%2Fz89Fb6e5pxdzP7hPxKcV5crHTmx1JBzHHLn6caNXvmMA8ge5LFZ%2BKroc14kh9FFQhZUmKrTG20ts4svr7Uq0f7dbaQ6ol8EpCcNJBaKI4xKbcUuAaBuo5TcUtKIBRTLGjKx3mIrUx7h5nb0WnWL0%2FEwiU84JmaQuWyXv2lSq1p5UmsBjnkrYUcbWfdl%2BCMK98wYb%2BLXWlpYhorJJcQ0gECoonrJ%2B1b%2BIRM%2FJEf9JmEtryNpsj2wdmYyznsigb%2BKAxbeBN7Ll75oFBGQqqRTnON9xcohZDwTZXL3NfCV%2F0sA%2BsirXnRQvhQ3ptwxUFvGAIbQN8jJR3YgZYRgsXmmVI7TWEJntvm541lbtAylrI9YIqdM6ScYcwMXD8hS40o35GO4v4Lif6mNDC%2F%2F7jCBjqkAb%2F2exFztrmaZqUkne2JXxEVCPTMyu9W41xCTNt%2Fzb23LNlUuiWf%2Bpu%2Bpk1%2BFGfzl1szdEIhtusj5sKaG0mxCFRy%2Fd9%2FLPtMdfPIu2oRGmDMEqVCIh7xMjAEEVhy6XKFPSFDSJzpfPE3YlQRWv1P7LqBRxD%2BNl1VsLWthufWKR79id6ZkhNei9UWUXza47k0VNnD%2Bl88Ov7cWwyCBGVd4G7NejCv&X-Amz-Signature=39f6d02a407a2b39330adf044278b5b50b81d9c86044eff442e14c055a8c23d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
