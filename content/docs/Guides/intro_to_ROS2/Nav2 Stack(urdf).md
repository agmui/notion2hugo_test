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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ54Q33%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLy1Fme41iYyTpPIY8i21wEKfaRR3NzkxjXq0brm7T7AiEA%2BqedLPuDH5v9lnXT%2Ba1Hr0gi7V0rxMoDB0fwsRCXWhoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDyv5N9QzHeADPtdoCrcA%2Fg0xo5vFWDDrW1znC11z6h1B1GaSew7QmstCnf5q%2FyEGryebu9OYQCpabgvpjvnxt3avJYIekOtPoNG2LIfSv4FUPJp6DxXOuruhmbV363kfZxt%2FWuw0iBTWt6EpkaRqDGWV4WYoAQT8%2BpU23NxO5EKbEpXR5heLg4FWJF0VqtJFrswVUm%2FrXf1Uewuwlcohzy%2Bc5P8ZHquPL8HErAJaIhZMhtMrAoXqyYrwwZncfF1zs4AMgcQkkXjatG4uu8k%2FmEQfwd1cxc8cU09kava5iq2c9NZ%2FJlKD7AuE2ZyWsGGqNOU7lg1EJAsE7%2B0smxEAQXR6eWr9ldlZbnywdiFOmdUCPaSimVeWt4a%2FdAnMfQ20ia06VGFS715JEQvmM9w6LoiP216F1fUyIKWJqmBTSp3I144iDzkm2FegqIcM4OtbeaBGi71auxmge06s9Hlt2m3EojlrWapWmCUETYFe6f8NBsXI4tGhupEdJFLwU2fQkz2poL5sIvpXmNt2apoW3YRyfej6CpShOFhOdkmL8YPuJ%2F4mVdLD4o9A6X1l6errlZpNBqYkp0LchO0sQjJIfrDCLaHsm3xpePm9gFgAIz2ZDwGIlax6uhnOD4xxhiQUfvsyUUB9WMEwlLCMJnv1b4GOqUBVGA8mmSbr04vkvGV%2FZ4Oa%2FhT0dBL6Pb%2FBLNx6iCK3Nv27g8HgRqgYQp37DIim7ZJuQuOimGkc2%2FhmfivxvYlA6IfxZ4ZLEarr%2BUjclHUd7NNdRqmNcyQNQ%2BTDcsnrZNVY6YKxkeFVcIKc%2F4QaenTRpPrV2Nrf2f%2FvYcLh1E87GWS3bxUCJzOECUSwd6YLS7FT6H4Cvb%2BgH1vTHtVaZy55qJT3vC8&X-Amz-Signature=709df829dd8772e40c59c7359360c60543d77a458e9d034cb94017c52d2bbb98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ54Q33%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLy1Fme41iYyTpPIY8i21wEKfaRR3NzkxjXq0brm7T7AiEA%2BqedLPuDH5v9lnXT%2Ba1Hr0gi7V0rxMoDB0fwsRCXWhoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDyv5N9QzHeADPtdoCrcA%2Fg0xo5vFWDDrW1znC11z6h1B1GaSew7QmstCnf5q%2FyEGryebu9OYQCpabgvpjvnxt3avJYIekOtPoNG2LIfSv4FUPJp6DxXOuruhmbV363kfZxt%2FWuw0iBTWt6EpkaRqDGWV4WYoAQT8%2BpU23NxO5EKbEpXR5heLg4FWJF0VqtJFrswVUm%2FrXf1Uewuwlcohzy%2Bc5P8ZHquPL8HErAJaIhZMhtMrAoXqyYrwwZncfF1zs4AMgcQkkXjatG4uu8k%2FmEQfwd1cxc8cU09kava5iq2c9NZ%2FJlKD7AuE2ZyWsGGqNOU7lg1EJAsE7%2B0smxEAQXR6eWr9ldlZbnywdiFOmdUCPaSimVeWt4a%2FdAnMfQ20ia06VGFS715JEQvmM9w6LoiP216F1fUyIKWJqmBTSp3I144iDzkm2FegqIcM4OtbeaBGi71auxmge06s9Hlt2m3EojlrWapWmCUETYFe6f8NBsXI4tGhupEdJFLwU2fQkz2poL5sIvpXmNt2apoW3YRyfej6CpShOFhOdkmL8YPuJ%2F4mVdLD4o9A6X1l6errlZpNBqYkp0LchO0sQjJIfrDCLaHsm3xpePm9gFgAIz2ZDwGIlax6uhnOD4xxhiQUfvsyUUB9WMEwlLCMJnv1b4GOqUBVGA8mmSbr04vkvGV%2FZ4Oa%2FhT0dBL6Pb%2FBLNx6iCK3Nv27g8HgRqgYQp37DIim7ZJuQuOimGkc2%2FhmfivxvYlA6IfxZ4ZLEarr%2BUjclHUd7NNdRqmNcyQNQ%2BTDcsnrZNVY6YKxkeFVcIKc%2F4QaenTRpPrV2Nrf2f%2FvYcLh1E87GWS3bxUCJzOECUSwd6YLS7FT6H4Cvb%2BgH1vTHtVaZy55qJT3vC8&X-Amz-Signature=42fd28f1a103ef9a803de9610daf6ce6ffc0c8cae26df9e61e5585c20abcb509&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ54Q33%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLy1Fme41iYyTpPIY8i21wEKfaRR3NzkxjXq0brm7T7AiEA%2BqedLPuDH5v9lnXT%2Ba1Hr0gi7V0rxMoDB0fwsRCXWhoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDyv5N9QzHeADPtdoCrcA%2Fg0xo5vFWDDrW1znC11z6h1B1GaSew7QmstCnf5q%2FyEGryebu9OYQCpabgvpjvnxt3avJYIekOtPoNG2LIfSv4FUPJp6DxXOuruhmbV363kfZxt%2FWuw0iBTWt6EpkaRqDGWV4WYoAQT8%2BpU23NxO5EKbEpXR5heLg4FWJF0VqtJFrswVUm%2FrXf1Uewuwlcohzy%2Bc5P8ZHquPL8HErAJaIhZMhtMrAoXqyYrwwZncfF1zs4AMgcQkkXjatG4uu8k%2FmEQfwd1cxc8cU09kava5iq2c9NZ%2FJlKD7AuE2ZyWsGGqNOU7lg1EJAsE7%2B0smxEAQXR6eWr9ldlZbnywdiFOmdUCPaSimVeWt4a%2FdAnMfQ20ia06VGFS715JEQvmM9w6LoiP216F1fUyIKWJqmBTSp3I144iDzkm2FegqIcM4OtbeaBGi71auxmge06s9Hlt2m3EojlrWapWmCUETYFe6f8NBsXI4tGhupEdJFLwU2fQkz2poL5sIvpXmNt2apoW3YRyfej6CpShOFhOdkmL8YPuJ%2F4mVdLD4o9A6X1l6errlZpNBqYkp0LchO0sQjJIfrDCLaHsm3xpePm9gFgAIz2ZDwGIlax6uhnOD4xxhiQUfvsyUUB9WMEwlLCMJnv1b4GOqUBVGA8mmSbr04vkvGV%2FZ4Oa%2FhT0dBL6Pb%2FBLNx6iCK3Nv27g8HgRqgYQp37DIim7ZJuQuOimGkc2%2FhmfivxvYlA6IfxZ4ZLEarr%2BUjclHUd7NNdRqmNcyQNQ%2BTDcsnrZNVY6YKxkeFVcIKc%2F4QaenTRpPrV2Nrf2f%2FvYcLh1E87GWS3bxUCJzOECUSwd6YLS7FT6H4Cvb%2BgH1vTHtVaZy55qJT3vC8&X-Amz-Signature=f5fa08898cc51b17d710470588fbf7bab59d00b2a220acd10fae6b5b3e99ab99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ54Q33%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLy1Fme41iYyTpPIY8i21wEKfaRR3NzkxjXq0brm7T7AiEA%2BqedLPuDH5v9lnXT%2Ba1Hr0gi7V0rxMoDB0fwsRCXWhoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDyv5N9QzHeADPtdoCrcA%2Fg0xo5vFWDDrW1znC11z6h1B1GaSew7QmstCnf5q%2FyEGryebu9OYQCpabgvpjvnxt3avJYIekOtPoNG2LIfSv4FUPJp6DxXOuruhmbV363kfZxt%2FWuw0iBTWt6EpkaRqDGWV4WYoAQT8%2BpU23NxO5EKbEpXR5heLg4FWJF0VqtJFrswVUm%2FrXf1Uewuwlcohzy%2Bc5P8ZHquPL8HErAJaIhZMhtMrAoXqyYrwwZncfF1zs4AMgcQkkXjatG4uu8k%2FmEQfwd1cxc8cU09kava5iq2c9NZ%2FJlKD7AuE2ZyWsGGqNOU7lg1EJAsE7%2B0smxEAQXR6eWr9ldlZbnywdiFOmdUCPaSimVeWt4a%2FdAnMfQ20ia06VGFS715JEQvmM9w6LoiP216F1fUyIKWJqmBTSp3I144iDzkm2FegqIcM4OtbeaBGi71auxmge06s9Hlt2m3EojlrWapWmCUETYFe6f8NBsXI4tGhupEdJFLwU2fQkz2poL5sIvpXmNt2apoW3YRyfej6CpShOFhOdkmL8YPuJ%2F4mVdLD4o9A6X1l6errlZpNBqYkp0LchO0sQjJIfrDCLaHsm3xpePm9gFgAIz2ZDwGIlax6uhnOD4xxhiQUfvsyUUB9WMEwlLCMJnv1b4GOqUBVGA8mmSbr04vkvGV%2FZ4Oa%2FhT0dBL6Pb%2FBLNx6iCK3Nv27g8HgRqgYQp37DIim7ZJuQuOimGkc2%2FhmfivxvYlA6IfxZ4ZLEarr%2BUjclHUd7NNdRqmNcyQNQ%2BTDcsnrZNVY6YKxkeFVcIKc%2F4QaenTRpPrV2Nrf2f%2FvYcLh1E87GWS3bxUCJzOECUSwd6YLS7FT6H4Cvb%2BgH1vTHtVaZy55qJT3vC8&X-Amz-Signature=bd0649e6d97275ad212a282bdaaa29135c740a34e870a51a07e9d5643833a020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ54Q33%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLy1Fme41iYyTpPIY8i21wEKfaRR3NzkxjXq0brm7T7AiEA%2BqedLPuDH5v9lnXT%2Ba1Hr0gi7V0rxMoDB0fwsRCXWhoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDyv5N9QzHeADPtdoCrcA%2Fg0xo5vFWDDrW1znC11z6h1B1GaSew7QmstCnf5q%2FyEGryebu9OYQCpabgvpjvnxt3avJYIekOtPoNG2LIfSv4FUPJp6DxXOuruhmbV363kfZxt%2FWuw0iBTWt6EpkaRqDGWV4WYoAQT8%2BpU23NxO5EKbEpXR5heLg4FWJF0VqtJFrswVUm%2FrXf1Uewuwlcohzy%2Bc5P8ZHquPL8HErAJaIhZMhtMrAoXqyYrwwZncfF1zs4AMgcQkkXjatG4uu8k%2FmEQfwd1cxc8cU09kava5iq2c9NZ%2FJlKD7AuE2ZyWsGGqNOU7lg1EJAsE7%2B0smxEAQXR6eWr9ldlZbnywdiFOmdUCPaSimVeWt4a%2FdAnMfQ20ia06VGFS715JEQvmM9w6LoiP216F1fUyIKWJqmBTSp3I144iDzkm2FegqIcM4OtbeaBGi71auxmge06s9Hlt2m3EojlrWapWmCUETYFe6f8NBsXI4tGhupEdJFLwU2fQkz2poL5sIvpXmNt2apoW3YRyfej6CpShOFhOdkmL8YPuJ%2F4mVdLD4o9A6X1l6errlZpNBqYkp0LchO0sQjJIfrDCLaHsm3xpePm9gFgAIz2ZDwGIlax6uhnOD4xxhiQUfvsyUUB9WMEwlLCMJnv1b4GOqUBVGA8mmSbr04vkvGV%2FZ4Oa%2FhT0dBL6Pb%2FBLNx6iCK3Nv27g8HgRqgYQp37DIim7ZJuQuOimGkc2%2FhmfivxvYlA6IfxZ4ZLEarr%2BUjclHUd7NNdRqmNcyQNQ%2BTDcsnrZNVY6YKxkeFVcIKc%2F4QaenTRpPrV2Nrf2f%2FvYcLh1E87GWS3bxUCJzOECUSwd6YLS7FT6H4Cvb%2BgH1vTHtVaZy55qJT3vC8&X-Amz-Signature=bb289b61317511162e178464f87e25be52522d7e476d27eb0cb22d45b8409ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ54Q33%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLy1Fme41iYyTpPIY8i21wEKfaRR3NzkxjXq0brm7T7AiEA%2BqedLPuDH5v9lnXT%2Ba1Hr0gi7V0rxMoDB0fwsRCXWhoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDyv5N9QzHeADPtdoCrcA%2Fg0xo5vFWDDrW1znC11z6h1B1GaSew7QmstCnf5q%2FyEGryebu9OYQCpabgvpjvnxt3avJYIekOtPoNG2LIfSv4FUPJp6DxXOuruhmbV363kfZxt%2FWuw0iBTWt6EpkaRqDGWV4WYoAQT8%2BpU23NxO5EKbEpXR5heLg4FWJF0VqtJFrswVUm%2FrXf1Uewuwlcohzy%2Bc5P8ZHquPL8HErAJaIhZMhtMrAoXqyYrwwZncfF1zs4AMgcQkkXjatG4uu8k%2FmEQfwd1cxc8cU09kava5iq2c9NZ%2FJlKD7AuE2ZyWsGGqNOU7lg1EJAsE7%2B0smxEAQXR6eWr9ldlZbnywdiFOmdUCPaSimVeWt4a%2FdAnMfQ20ia06VGFS715JEQvmM9w6LoiP216F1fUyIKWJqmBTSp3I144iDzkm2FegqIcM4OtbeaBGi71auxmge06s9Hlt2m3EojlrWapWmCUETYFe6f8NBsXI4tGhupEdJFLwU2fQkz2poL5sIvpXmNt2apoW3YRyfej6CpShOFhOdkmL8YPuJ%2F4mVdLD4o9A6X1l6errlZpNBqYkp0LchO0sQjJIfrDCLaHsm3xpePm9gFgAIz2ZDwGIlax6uhnOD4xxhiQUfvsyUUB9WMEwlLCMJnv1b4GOqUBVGA8mmSbr04vkvGV%2FZ4Oa%2FhT0dBL6Pb%2FBLNx6iCK3Nv27g8HgRqgYQp37DIim7ZJuQuOimGkc2%2FhmfivxvYlA6IfxZ4ZLEarr%2BUjclHUd7NNdRqmNcyQNQ%2BTDcsnrZNVY6YKxkeFVcIKc%2F4QaenTRpPrV2Nrf2f%2FvYcLh1E87GWS3bxUCJzOECUSwd6YLS7FT6H4Cvb%2BgH1vTHtVaZy55qJT3vC8&X-Amz-Signature=ac0090dabae65ef7841dbb900fba1de2af731e4ebc28f7b4fd2090ceef31f875&X-Amz-SignedHeaders=host&x-id=GetObject)
