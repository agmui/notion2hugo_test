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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPV754L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGVrRvEKg3Fw21tWp6tzll%2BDKVjdhAkrEm5kRHg0XSOfAiA9aXlN%2F6AK9d%2FeYewgUI5wUOcn1wMsARN6kKun2xzbGyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMM2SorjLoyC5PzlyoKtwD4H9Kx9x2kOCfvCOnCi0F135YnatdFVkiWQSUuxk9XBsrTyRax7Ch2k%2F%2BBzWKGG2qO5X1Z4r6b4RLB7CYEszmU97JQfHUDETno%2BMKRVTD%2BibLe%2FpMkFYm%2FQ52KmU7v4TTGrkDSNwVUBhN%2FXhecfihJRBnN6ckjAHVMH2RFUlejr10SYzJ19R0CHG6xhxwhQaVys%2BrZeS3%2B3Ss039PUsNBX6pEBWKBlpHC2uGeE3CekQ3cpwnAi1rqmNSQf0CcKuS4jqKPDg29Hd0nygghbglX8HUhATZQczV6qB9lbL3deiQd4D6oKUVaMIONE6xmwuoKAHclTey%2FQk15asAJ6nDAw%2FBdeXSbZMoty%2BnSWBHPLJjpDkYXEyOJF6NF%2B06jNcnsK3zYo2ujaxBFH4WbAoL2h9DLi013ULLlQEVMJjfWpaXKLShr9sQWB6JTh0A%2FP8RNTHfTzu3yKLqNvPjWdmYC51Bm%2BSP%2B4ZSj7c4ULsBi0eWitlR7RX92bRf%2BdGhEDZJQX8%2BVaAnCp5FN1K3MYz1zJqHvQkQGwuALeH5LJxzQgc%2F%2F%2BRuFTIaskC%2FZoz20HQtxCgjVnQChOPfQK08YvH3JUq1ppvE0F%2FfYIyjLDcaG9VbV9CMv%2FlKJ6KCrHUowgNXgwAY6pgEHhb%2F%2Fry30rluD3u1vQc9vuWDccp%2F%2FYti4MPReVDJ%2Bbz5GUroEnx7rjxqL5FU%2BljvXat%2BMqpaQrqWmD8%2Bte%2FvhFtKSSk4qdij5mNHi%2FS%2F023bJUFtdrVJc55xrMgoZXKm%2F%2B5C66zdsNfWjkvWxTbXXkY%2B46N0mYR5vL4Fqx9SdNifWTAtpnXiP6KAIx1XfR7g8HZmiZMHigzKExuRvpyujsSLejwIm&X-Amz-Signature=ef8a10fcf88aa96c1afd4e3f5a33337f46d3159bcca9c8edc9bf3007ca85c130&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPV754L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGVrRvEKg3Fw21tWp6tzll%2BDKVjdhAkrEm5kRHg0XSOfAiA9aXlN%2F6AK9d%2FeYewgUI5wUOcn1wMsARN6kKun2xzbGyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMM2SorjLoyC5PzlyoKtwD4H9Kx9x2kOCfvCOnCi0F135YnatdFVkiWQSUuxk9XBsrTyRax7Ch2k%2F%2BBzWKGG2qO5X1Z4r6b4RLB7CYEszmU97JQfHUDETno%2BMKRVTD%2BibLe%2FpMkFYm%2FQ52KmU7v4TTGrkDSNwVUBhN%2FXhecfihJRBnN6ckjAHVMH2RFUlejr10SYzJ19R0CHG6xhxwhQaVys%2BrZeS3%2B3Ss039PUsNBX6pEBWKBlpHC2uGeE3CekQ3cpwnAi1rqmNSQf0CcKuS4jqKPDg29Hd0nygghbglX8HUhATZQczV6qB9lbL3deiQd4D6oKUVaMIONE6xmwuoKAHclTey%2FQk15asAJ6nDAw%2FBdeXSbZMoty%2BnSWBHPLJjpDkYXEyOJF6NF%2B06jNcnsK3zYo2ujaxBFH4WbAoL2h9DLi013ULLlQEVMJjfWpaXKLShr9sQWB6JTh0A%2FP8RNTHfTzu3yKLqNvPjWdmYC51Bm%2BSP%2B4ZSj7c4ULsBi0eWitlR7RX92bRf%2BdGhEDZJQX8%2BVaAnCp5FN1K3MYz1zJqHvQkQGwuALeH5LJxzQgc%2F%2F%2BRuFTIaskC%2FZoz20HQtxCgjVnQChOPfQK08YvH3JUq1ppvE0F%2FfYIyjLDcaG9VbV9CMv%2FlKJ6KCrHUowgNXgwAY6pgEHhb%2F%2Fry30rluD3u1vQc9vuWDccp%2F%2FYti4MPReVDJ%2Bbz5GUroEnx7rjxqL5FU%2BljvXat%2BMqpaQrqWmD8%2Bte%2FvhFtKSSk4qdij5mNHi%2FS%2F023bJUFtdrVJc55xrMgoZXKm%2F%2B5C66zdsNfWjkvWxTbXXkY%2B46N0mYR5vL4Fqx9SdNifWTAtpnXiP6KAIx1XfR7g8HZmiZMHigzKExuRvpyujsSLejwIm&X-Amz-Signature=0242eba6ba8ae531343f5f6c016e681adefe6e9a8e1153fac539fd3064009c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPV754L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGVrRvEKg3Fw21tWp6tzll%2BDKVjdhAkrEm5kRHg0XSOfAiA9aXlN%2F6AK9d%2FeYewgUI5wUOcn1wMsARN6kKun2xzbGyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMM2SorjLoyC5PzlyoKtwD4H9Kx9x2kOCfvCOnCi0F135YnatdFVkiWQSUuxk9XBsrTyRax7Ch2k%2F%2BBzWKGG2qO5X1Z4r6b4RLB7CYEszmU97JQfHUDETno%2BMKRVTD%2BibLe%2FpMkFYm%2FQ52KmU7v4TTGrkDSNwVUBhN%2FXhecfihJRBnN6ckjAHVMH2RFUlejr10SYzJ19R0CHG6xhxwhQaVys%2BrZeS3%2B3Ss039PUsNBX6pEBWKBlpHC2uGeE3CekQ3cpwnAi1rqmNSQf0CcKuS4jqKPDg29Hd0nygghbglX8HUhATZQczV6qB9lbL3deiQd4D6oKUVaMIONE6xmwuoKAHclTey%2FQk15asAJ6nDAw%2FBdeXSbZMoty%2BnSWBHPLJjpDkYXEyOJF6NF%2B06jNcnsK3zYo2ujaxBFH4WbAoL2h9DLi013ULLlQEVMJjfWpaXKLShr9sQWB6JTh0A%2FP8RNTHfTzu3yKLqNvPjWdmYC51Bm%2BSP%2B4ZSj7c4ULsBi0eWitlR7RX92bRf%2BdGhEDZJQX8%2BVaAnCp5FN1K3MYz1zJqHvQkQGwuALeH5LJxzQgc%2F%2F%2BRuFTIaskC%2FZoz20HQtxCgjVnQChOPfQK08YvH3JUq1ppvE0F%2FfYIyjLDcaG9VbV9CMv%2FlKJ6KCrHUowgNXgwAY6pgEHhb%2F%2Fry30rluD3u1vQc9vuWDccp%2F%2FYti4MPReVDJ%2Bbz5GUroEnx7rjxqL5FU%2BljvXat%2BMqpaQrqWmD8%2Bte%2FvhFtKSSk4qdij5mNHi%2FS%2F023bJUFtdrVJc55xrMgoZXKm%2F%2B5C66zdsNfWjkvWxTbXXkY%2B46N0mYR5vL4Fqx9SdNifWTAtpnXiP6KAIx1XfR7g8HZmiZMHigzKExuRvpyujsSLejwIm&X-Amz-Signature=859354906a89a765e871e76d876eec1b70f39106b58c2a1f1003a9b74f5d9572&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPV754L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGVrRvEKg3Fw21tWp6tzll%2BDKVjdhAkrEm5kRHg0XSOfAiA9aXlN%2F6AK9d%2FeYewgUI5wUOcn1wMsARN6kKun2xzbGyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMM2SorjLoyC5PzlyoKtwD4H9Kx9x2kOCfvCOnCi0F135YnatdFVkiWQSUuxk9XBsrTyRax7Ch2k%2F%2BBzWKGG2qO5X1Z4r6b4RLB7CYEszmU97JQfHUDETno%2BMKRVTD%2BibLe%2FpMkFYm%2FQ52KmU7v4TTGrkDSNwVUBhN%2FXhecfihJRBnN6ckjAHVMH2RFUlejr10SYzJ19R0CHG6xhxwhQaVys%2BrZeS3%2B3Ss039PUsNBX6pEBWKBlpHC2uGeE3CekQ3cpwnAi1rqmNSQf0CcKuS4jqKPDg29Hd0nygghbglX8HUhATZQczV6qB9lbL3deiQd4D6oKUVaMIONE6xmwuoKAHclTey%2FQk15asAJ6nDAw%2FBdeXSbZMoty%2BnSWBHPLJjpDkYXEyOJF6NF%2B06jNcnsK3zYo2ujaxBFH4WbAoL2h9DLi013ULLlQEVMJjfWpaXKLShr9sQWB6JTh0A%2FP8RNTHfTzu3yKLqNvPjWdmYC51Bm%2BSP%2B4ZSj7c4ULsBi0eWitlR7RX92bRf%2BdGhEDZJQX8%2BVaAnCp5FN1K3MYz1zJqHvQkQGwuALeH5LJxzQgc%2F%2F%2BRuFTIaskC%2FZoz20HQtxCgjVnQChOPfQK08YvH3JUq1ppvE0F%2FfYIyjLDcaG9VbV9CMv%2FlKJ6KCrHUowgNXgwAY6pgEHhb%2F%2Fry30rluD3u1vQc9vuWDccp%2F%2FYti4MPReVDJ%2Bbz5GUroEnx7rjxqL5FU%2BljvXat%2BMqpaQrqWmD8%2Bte%2FvhFtKSSk4qdij5mNHi%2FS%2F023bJUFtdrVJc55xrMgoZXKm%2F%2B5C66zdsNfWjkvWxTbXXkY%2B46N0mYR5vL4Fqx9SdNifWTAtpnXiP6KAIx1XfR7g8HZmiZMHigzKExuRvpyujsSLejwIm&X-Amz-Signature=dbdf2ba9bfd11d3ea7f8f807e2ee8475cf73892f3a9e3be57a65f9dd180d0a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPV754L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGVrRvEKg3Fw21tWp6tzll%2BDKVjdhAkrEm5kRHg0XSOfAiA9aXlN%2F6AK9d%2FeYewgUI5wUOcn1wMsARN6kKun2xzbGyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMM2SorjLoyC5PzlyoKtwD4H9Kx9x2kOCfvCOnCi0F135YnatdFVkiWQSUuxk9XBsrTyRax7Ch2k%2F%2BBzWKGG2qO5X1Z4r6b4RLB7CYEszmU97JQfHUDETno%2BMKRVTD%2BibLe%2FpMkFYm%2FQ52KmU7v4TTGrkDSNwVUBhN%2FXhecfihJRBnN6ckjAHVMH2RFUlejr10SYzJ19R0CHG6xhxwhQaVys%2BrZeS3%2B3Ss039PUsNBX6pEBWKBlpHC2uGeE3CekQ3cpwnAi1rqmNSQf0CcKuS4jqKPDg29Hd0nygghbglX8HUhATZQczV6qB9lbL3deiQd4D6oKUVaMIONE6xmwuoKAHclTey%2FQk15asAJ6nDAw%2FBdeXSbZMoty%2BnSWBHPLJjpDkYXEyOJF6NF%2B06jNcnsK3zYo2ujaxBFH4WbAoL2h9DLi013ULLlQEVMJjfWpaXKLShr9sQWB6JTh0A%2FP8RNTHfTzu3yKLqNvPjWdmYC51Bm%2BSP%2B4ZSj7c4ULsBi0eWitlR7RX92bRf%2BdGhEDZJQX8%2BVaAnCp5FN1K3MYz1zJqHvQkQGwuALeH5LJxzQgc%2F%2F%2BRuFTIaskC%2FZoz20HQtxCgjVnQChOPfQK08YvH3JUq1ppvE0F%2FfYIyjLDcaG9VbV9CMv%2FlKJ6KCrHUowgNXgwAY6pgEHhb%2F%2Fry30rluD3u1vQc9vuWDccp%2F%2FYti4MPReVDJ%2Bbz5GUroEnx7rjxqL5FU%2BljvXat%2BMqpaQrqWmD8%2Bte%2FvhFtKSSk4qdij5mNHi%2FS%2F023bJUFtdrVJc55xrMgoZXKm%2F%2B5C66zdsNfWjkvWxTbXXkY%2B46N0mYR5vL4Fqx9SdNifWTAtpnXiP6KAIx1XfR7g8HZmiZMHigzKExuRvpyujsSLejwIm&X-Amz-Signature=d7122f0c3c56d3601821cf96777fc53337d2f34df9529a628904e176d12079b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RPV754L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGVrRvEKg3Fw21tWp6tzll%2BDKVjdhAkrEm5kRHg0XSOfAiA9aXlN%2F6AK9d%2FeYewgUI5wUOcn1wMsARN6kKun2xzbGyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMM2SorjLoyC5PzlyoKtwD4H9Kx9x2kOCfvCOnCi0F135YnatdFVkiWQSUuxk9XBsrTyRax7Ch2k%2F%2BBzWKGG2qO5X1Z4r6b4RLB7CYEszmU97JQfHUDETno%2BMKRVTD%2BibLe%2FpMkFYm%2FQ52KmU7v4TTGrkDSNwVUBhN%2FXhecfihJRBnN6ckjAHVMH2RFUlejr10SYzJ19R0CHG6xhxwhQaVys%2BrZeS3%2B3Ss039PUsNBX6pEBWKBlpHC2uGeE3CekQ3cpwnAi1rqmNSQf0CcKuS4jqKPDg29Hd0nygghbglX8HUhATZQczV6qB9lbL3deiQd4D6oKUVaMIONE6xmwuoKAHclTey%2FQk15asAJ6nDAw%2FBdeXSbZMoty%2BnSWBHPLJjpDkYXEyOJF6NF%2B06jNcnsK3zYo2ujaxBFH4WbAoL2h9DLi013ULLlQEVMJjfWpaXKLShr9sQWB6JTh0A%2FP8RNTHfTzu3yKLqNvPjWdmYC51Bm%2BSP%2B4ZSj7c4ULsBi0eWitlR7RX92bRf%2BdGhEDZJQX8%2BVaAnCp5FN1K3MYz1zJqHvQkQGwuALeH5LJxzQgc%2F%2F%2BRuFTIaskC%2FZoz20HQtxCgjVnQChOPfQK08YvH3JUq1ppvE0F%2FfYIyjLDcaG9VbV9CMv%2FlKJ6KCrHUowgNXgwAY6pgEHhb%2F%2Fry30rluD3u1vQc9vuWDccp%2F%2FYti4MPReVDJ%2Bbz5GUroEnx7rjxqL5FU%2BljvXat%2BMqpaQrqWmD8%2Bte%2FvhFtKSSk4qdij5mNHi%2FS%2F023bJUFtdrVJc55xrMgoZXKm%2F%2B5C66zdsNfWjkvWxTbXXkY%2B46N0mYR5vL4Fqx9SdNifWTAtpnXiP6KAIx1XfR7g8HZmiZMHigzKExuRvpyujsSLejwIm&X-Amz-Signature=2e24b7c034bcbb391597ec89aff2b353e29a4de10c544c4b057ce31b41735849&X-Amz-SignedHeaders=host&x-id=GetObject)
