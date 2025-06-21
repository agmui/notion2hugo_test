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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFZKJYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp5QaM%2FncNom%2BK6I9ukB8Og9OnbTNWSNaF3MMDqwy11wIgZfzK1JUVoXEVr44ZV0CAvmAEvzA15hfbsxkJjtuK5kkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXrjknlk7HpX4GkircAwVS6AlYzGIVZQiMuz4qETVUmlxzeVjRkIr6ScYEtaGW9KsE7S2p8mpIm%2FIdQNymvy9vR%2FSnOT62%2FdaIej4ZmesGH%2B88fsCFWkNzgx%2BnYXgrSuU8Xxab3IXQIu2gctmOAUmbucciJCkk28Xc9IycVPoZ9Ym3ps7iTMX1CvfrXvp05P3FWg42Gzr3xA2ChYPtiNedNNm7E4TJTx55Bx2H0BZ8pOOBBpkPPRTH9ffqg1YAnVLvoGtPyHYWQc6GvoCXQZz%2B1o0%2BTstY%2FUQCA3sXBt9RtBTZH7KoASB%2FFUOFXNnoXOKgMGqSu4WExibWvkJ9L4c1YmqhqiVT2No6B4wMurdggfbsd15CTQWgJQnSfP%2BtFoU%2FdtIPXOhpEydwOniZzxJ2byTw8cGC%2FP9EHdNzFug5eTRxpOXEjo2jKY1iKMqs4zE5ry5xbttbfHGUAVHkAMuYg%2BpNW3oCnSLwGr%2Fu64hAcy7oQPFOiwwHijBognUaCHLeaC25%2BCEa4jmkfXQOkj9TOueThC2kLmOA3qdVw1PCdzV0XPxwWZ785X9LogDeX7c5DDFpixnVhvwj0fBnX7kD%2BpMkjNvV68u1exCgMssgVsTLhGOHnI7h%2FLboV%2BeCBUYl8inBdKlnJfRSMMnd3MIGOqUBeeX3JBNezY9hAKFtUhwMkTd%2B%2FKXyFJcVYpzMzBWiDNsqvCUht%2BSGmpmjsJfF2g%2FDQx6bgi60DgtfF13n08YWfvVyCmrsCzH0Om2GzpYqALkrKldMmeRx%2FdtVGO7GIRgDt%2BR25rILKkh82bt5kSapHQM4Vqmt%2F1ToZHqINaje4%2FCNkvwGXRxvyK9y6mwhvcUFN%2BCTj51xRokxbtufn%2BaI7FC1bdze&X-Amz-Signature=a8b9eede368d145aeaa8e0078bd0801101c0ba836284dac70b139828d22068d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFZKJYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp5QaM%2FncNom%2BK6I9ukB8Og9OnbTNWSNaF3MMDqwy11wIgZfzK1JUVoXEVr44ZV0CAvmAEvzA15hfbsxkJjtuK5kkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXrjknlk7HpX4GkircAwVS6AlYzGIVZQiMuz4qETVUmlxzeVjRkIr6ScYEtaGW9KsE7S2p8mpIm%2FIdQNymvy9vR%2FSnOT62%2FdaIej4ZmesGH%2B88fsCFWkNzgx%2BnYXgrSuU8Xxab3IXQIu2gctmOAUmbucciJCkk28Xc9IycVPoZ9Ym3ps7iTMX1CvfrXvp05P3FWg42Gzr3xA2ChYPtiNedNNm7E4TJTx55Bx2H0BZ8pOOBBpkPPRTH9ffqg1YAnVLvoGtPyHYWQc6GvoCXQZz%2B1o0%2BTstY%2FUQCA3sXBt9RtBTZH7KoASB%2FFUOFXNnoXOKgMGqSu4WExibWvkJ9L4c1YmqhqiVT2No6B4wMurdggfbsd15CTQWgJQnSfP%2BtFoU%2FdtIPXOhpEydwOniZzxJ2byTw8cGC%2FP9EHdNzFug5eTRxpOXEjo2jKY1iKMqs4zE5ry5xbttbfHGUAVHkAMuYg%2BpNW3oCnSLwGr%2Fu64hAcy7oQPFOiwwHijBognUaCHLeaC25%2BCEa4jmkfXQOkj9TOueThC2kLmOA3qdVw1PCdzV0XPxwWZ785X9LogDeX7c5DDFpixnVhvwj0fBnX7kD%2BpMkjNvV68u1exCgMssgVsTLhGOHnI7h%2FLboV%2BeCBUYl8inBdKlnJfRSMMnd3MIGOqUBeeX3JBNezY9hAKFtUhwMkTd%2B%2FKXyFJcVYpzMzBWiDNsqvCUht%2BSGmpmjsJfF2g%2FDQx6bgi60DgtfF13n08YWfvVyCmrsCzH0Om2GzpYqALkrKldMmeRx%2FdtVGO7GIRgDt%2BR25rILKkh82bt5kSapHQM4Vqmt%2F1ToZHqINaje4%2FCNkvwGXRxvyK9y6mwhvcUFN%2BCTj51xRokxbtufn%2BaI7FC1bdze&X-Amz-Signature=a118a89c806cc61329613b09073c82f7c01f6dd6ea6015ed95d11a73b4f39c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFZKJYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp5QaM%2FncNom%2BK6I9ukB8Og9OnbTNWSNaF3MMDqwy11wIgZfzK1JUVoXEVr44ZV0CAvmAEvzA15hfbsxkJjtuK5kkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXrjknlk7HpX4GkircAwVS6AlYzGIVZQiMuz4qETVUmlxzeVjRkIr6ScYEtaGW9KsE7S2p8mpIm%2FIdQNymvy9vR%2FSnOT62%2FdaIej4ZmesGH%2B88fsCFWkNzgx%2BnYXgrSuU8Xxab3IXQIu2gctmOAUmbucciJCkk28Xc9IycVPoZ9Ym3ps7iTMX1CvfrXvp05P3FWg42Gzr3xA2ChYPtiNedNNm7E4TJTx55Bx2H0BZ8pOOBBpkPPRTH9ffqg1YAnVLvoGtPyHYWQc6GvoCXQZz%2B1o0%2BTstY%2FUQCA3sXBt9RtBTZH7KoASB%2FFUOFXNnoXOKgMGqSu4WExibWvkJ9L4c1YmqhqiVT2No6B4wMurdggfbsd15CTQWgJQnSfP%2BtFoU%2FdtIPXOhpEydwOniZzxJ2byTw8cGC%2FP9EHdNzFug5eTRxpOXEjo2jKY1iKMqs4zE5ry5xbttbfHGUAVHkAMuYg%2BpNW3oCnSLwGr%2Fu64hAcy7oQPFOiwwHijBognUaCHLeaC25%2BCEa4jmkfXQOkj9TOueThC2kLmOA3qdVw1PCdzV0XPxwWZ785X9LogDeX7c5DDFpixnVhvwj0fBnX7kD%2BpMkjNvV68u1exCgMssgVsTLhGOHnI7h%2FLboV%2BeCBUYl8inBdKlnJfRSMMnd3MIGOqUBeeX3JBNezY9hAKFtUhwMkTd%2B%2FKXyFJcVYpzMzBWiDNsqvCUht%2BSGmpmjsJfF2g%2FDQx6bgi60DgtfF13n08YWfvVyCmrsCzH0Om2GzpYqALkrKldMmeRx%2FdtVGO7GIRgDt%2BR25rILKkh82bt5kSapHQM4Vqmt%2F1ToZHqINaje4%2FCNkvwGXRxvyK9y6mwhvcUFN%2BCTj51xRokxbtufn%2BaI7FC1bdze&X-Amz-Signature=3f5dce88d5c77d0d73ee257bef5ce81e6865564a3583febe68b721029b051845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFZKJYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp5QaM%2FncNom%2BK6I9ukB8Og9OnbTNWSNaF3MMDqwy11wIgZfzK1JUVoXEVr44ZV0CAvmAEvzA15hfbsxkJjtuK5kkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXrjknlk7HpX4GkircAwVS6AlYzGIVZQiMuz4qETVUmlxzeVjRkIr6ScYEtaGW9KsE7S2p8mpIm%2FIdQNymvy9vR%2FSnOT62%2FdaIej4ZmesGH%2B88fsCFWkNzgx%2BnYXgrSuU8Xxab3IXQIu2gctmOAUmbucciJCkk28Xc9IycVPoZ9Ym3ps7iTMX1CvfrXvp05P3FWg42Gzr3xA2ChYPtiNedNNm7E4TJTx55Bx2H0BZ8pOOBBpkPPRTH9ffqg1YAnVLvoGtPyHYWQc6GvoCXQZz%2B1o0%2BTstY%2FUQCA3sXBt9RtBTZH7KoASB%2FFUOFXNnoXOKgMGqSu4WExibWvkJ9L4c1YmqhqiVT2No6B4wMurdggfbsd15CTQWgJQnSfP%2BtFoU%2FdtIPXOhpEydwOniZzxJ2byTw8cGC%2FP9EHdNzFug5eTRxpOXEjo2jKY1iKMqs4zE5ry5xbttbfHGUAVHkAMuYg%2BpNW3oCnSLwGr%2Fu64hAcy7oQPFOiwwHijBognUaCHLeaC25%2BCEa4jmkfXQOkj9TOueThC2kLmOA3qdVw1PCdzV0XPxwWZ785X9LogDeX7c5DDFpixnVhvwj0fBnX7kD%2BpMkjNvV68u1exCgMssgVsTLhGOHnI7h%2FLboV%2BeCBUYl8inBdKlnJfRSMMnd3MIGOqUBeeX3JBNezY9hAKFtUhwMkTd%2B%2FKXyFJcVYpzMzBWiDNsqvCUht%2BSGmpmjsJfF2g%2FDQx6bgi60DgtfF13n08YWfvVyCmrsCzH0Om2GzpYqALkrKldMmeRx%2FdtVGO7GIRgDt%2BR25rILKkh82bt5kSapHQM4Vqmt%2F1ToZHqINaje4%2FCNkvwGXRxvyK9y6mwhvcUFN%2BCTj51xRokxbtufn%2BaI7FC1bdze&X-Amz-Signature=b8587f59f47e5b7ace726172f6ecbb0666ba69d65838cfa977fc5217aa40fdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFZKJYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp5QaM%2FncNom%2BK6I9ukB8Og9OnbTNWSNaF3MMDqwy11wIgZfzK1JUVoXEVr44ZV0CAvmAEvzA15hfbsxkJjtuK5kkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXrjknlk7HpX4GkircAwVS6AlYzGIVZQiMuz4qETVUmlxzeVjRkIr6ScYEtaGW9KsE7S2p8mpIm%2FIdQNymvy9vR%2FSnOT62%2FdaIej4ZmesGH%2B88fsCFWkNzgx%2BnYXgrSuU8Xxab3IXQIu2gctmOAUmbucciJCkk28Xc9IycVPoZ9Ym3ps7iTMX1CvfrXvp05P3FWg42Gzr3xA2ChYPtiNedNNm7E4TJTx55Bx2H0BZ8pOOBBpkPPRTH9ffqg1YAnVLvoGtPyHYWQc6GvoCXQZz%2B1o0%2BTstY%2FUQCA3sXBt9RtBTZH7KoASB%2FFUOFXNnoXOKgMGqSu4WExibWvkJ9L4c1YmqhqiVT2No6B4wMurdggfbsd15CTQWgJQnSfP%2BtFoU%2FdtIPXOhpEydwOniZzxJ2byTw8cGC%2FP9EHdNzFug5eTRxpOXEjo2jKY1iKMqs4zE5ry5xbttbfHGUAVHkAMuYg%2BpNW3oCnSLwGr%2Fu64hAcy7oQPFOiwwHijBognUaCHLeaC25%2BCEa4jmkfXQOkj9TOueThC2kLmOA3qdVw1PCdzV0XPxwWZ785X9LogDeX7c5DDFpixnVhvwj0fBnX7kD%2BpMkjNvV68u1exCgMssgVsTLhGOHnI7h%2FLboV%2BeCBUYl8inBdKlnJfRSMMnd3MIGOqUBeeX3JBNezY9hAKFtUhwMkTd%2B%2FKXyFJcVYpzMzBWiDNsqvCUht%2BSGmpmjsJfF2g%2FDQx6bgi60DgtfF13n08YWfvVyCmrsCzH0Om2GzpYqALkrKldMmeRx%2FdtVGO7GIRgDt%2BR25rILKkh82bt5kSapHQM4Vqmt%2F1ToZHqINaje4%2FCNkvwGXRxvyK9y6mwhvcUFN%2BCTj51xRokxbtufn%2BaI7FC1bdze&X-Amz-Signature=2b6929c6e3d192daf99b7c10ed0ed9e4810ba5a92795a0e8d05208f6fb951e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFZKJYR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp5QaM%2FncNom%2BK6I9ukB8Og9OnbTNWSNaF3MMDqwy11wIgZfzK1JUVoXEVr44ZV0CAvmAEvzA15hfbsxkJjtuK5kkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEXrjknlk7HpX4GkircAwVS6AlYzGIVZQiMuz4qETVUmlxzeVjRkIr6ScYEtaGW9KsE7S2p8mpIm%2FIdQNymvy9vR%2FSnOT62%2FdaIej4ZmesGH%2B88fsCFWkNzgx%2BnYXgrSuU8Xxab3IXQIu2gctmOAUmbucciJCkk28Xc9IycVPoZ9Ym3ps7iTMX1CvfrXvp05P3FWg42Gzr3xA2ChYPtiNedNNm7E4TJTx55Bx2H0BZ8pOOBBpkPPRTH9ffqg1YAnVLvoGtPyHYWQc6GvoCXQZz%2B1o0%2BTstY%2FUQCA3sXBt9RtBTZH7KoASB%2FFUOFXNnoXOKgMGqSu4WExibWvkJ9L4c1YmqhqiVT2No6B4wMurdggfbsd15CTQWgJQnSfP%2BtFoU%2FdtIPXOhpEydwOniZzxJ2byTw8cGC%2FP9EHdNzFug5eTRxpOXEjo2jKY1iKMqs4zE5ry5xbttbfHGUAVHkAMuYg%2BpNW3oCnSLwGr%2Fu64hAcy7oQPFOiwwHijBognUaCHLeaC25%2BCEa4jmkfXQOkj9TOueThC2kLmOA3qdVw1PCdzV0XPxwWZ785X9LogDeX7c5DDFpixnVhvwj0fBnX7kD%2BpMkjNvV68u1exCgMssgVsTLhGOHnI7h%2FLboV%2BeCBUYl8inBdKlnJfRSMMnd3MIGOqUBeeX3JBNezY9hAKFtUhwMkTd%2B%2FKXyFJcVYpzMzBWiDNsqvCUht%2BSGmpmjsJfF2g%2FDQx6bgi60DgtfF13n08YWfvVyCmrsCzH0Om2GzpYqALkrKldMmeRx%2FdtVGO7GIRgDt%2BR25rILKkh82bt5kSapHQM4Vqmt%2F1ToZHqINaje4%2FCNkvwGXRxvyK9y6mwhvcUFN%2BCTj51xRokxbtufn%2BaI7FC1bdze&X-Amz-Signature=98d22475dbd4dc07c70c9f6ed376de3ed6e014d7c2640f60e05f95647f6f4d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
