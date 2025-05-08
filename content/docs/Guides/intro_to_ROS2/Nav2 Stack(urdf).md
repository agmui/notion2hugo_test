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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LIKIB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm0fpYSX12zdnkrXXjZiwRQYW5IZJXKB8m%2FdkFRqPbAIhAMiTyDW9fI4RQyiNN4kTw%2F1bYGhFVsDTPKoHfcmvoq%2FJKv8DCHkQABoMNjM3NDIzMTgzODA1IgwD0fz2bCaePF%2Frpmcq3ANzzrYxhiI3t8MsEPJfPC7JdVgw%2FayV9nHS34txjKDjcGlU%2FwBZ9X8QQvpz4j4FjlezH2KrvcRjHHD3r95YGeXEWYIQvGAsrUsTeH%2BHKeO%2Fwns7fvL5yldBKHmm6dmAccPlEJ4Jdd81jE13n83Qt77W9VCNPvW5wI0SIpnOdF3H7QdxvIvjY4lKTe8KvapUGBj7eyGrQpNK1ZylN6R7x2iNC07FqRcZYQr05XPHepP%2FYEZVSen1pdCr2uo%2FdH7%2BUNbue5lRnANzDKdVArctBFNIFQSFg3sxxhrclXmS2ZRFXt08u4oU8fgaGBxY38%2FIlanjEp93VUBF800KCbBSHFNTZMGJ8MJ8PvaYG4ULv5OPpe1yAo9C0eH5HP%2BrnENeK5Cb4RwaW04fSO2lwz6d9FSgJEWf%2BoxtzMsISJmCAX40BhnUyf2yEGWRtNkKRQ5grR%2Fxr%2FLcM1%2B9vb%2B%2BeW%2FyPHZYEouuBf%2F0lu9j41w%2BstExOXiMsM96sXN4AAlJcG9yeXCIubL1X2DBkc%2FTLU%2Fc1Ny4EjbGBBG1%2BwIA2TZ6i%2BnFi%2Fd%2BjWBOZpTGhcDDaJ%2BFd%2FHHQIYTtG0y6WbNWQQhqX5FF6mgp7cCT1s1X8VrGkN6BDEjUknONOY8YEiuVDDAofPABjqkAZI%2FZY5geDUJqcVD%2Bxe5EqKENoa7yQ0BcNEqmekMtWrQWv8bsAMED3%2Fddu%2FW3czHj5%2FZZAI1M%2FKVQYisT6G%2Bqs12D%2Br1LHPmUUiVHnsY9Dj2jhd%2B6dagxGwxXQ7pP1oHLunsspPRWAPunjfTOSvFc8xPobDPVEH1e6Q4zwpVUVyoWyIPEJ8m7ofTACgD14s9I15dkVPDgSHz1PtN2GzhXoIDVdL5&X-Amz-Signature=3982ad661e37ce5cce30a3c720f8669100c50afdf883fe1e9ec405f3286b5ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LIKIB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm0fpYSX12zdnkrXXjZiwRQYW5IZJXKB8m%2FdkFRqPbAIhAMiTyDW9fI4RQyiNN4kTw%2F1bYGhFVsDTPKoHfcmvoq%2FJKv8DCHkQABoMNjM3NDIzMTgzODA1IgwD0fz2bCaePF%2Frpmcq3ANzzrYxhiI3t8MsEPJfPC7JdVgw%2FayV9nHS34txjKDjcGlU%2FwBZ9X8QQvpz4j4FjlezH2KrvcRjHHD3r95YGeXEWYIQvGAsrUsTeH%2BHKeO%2Fwns7fvL5yldBKHmm6dmAccPlEJ4Jdd81jE13n83Qt77W9VCNPvW5wI0SIpnOdF3H7QdxvIvjY4lKTe8KvapUGBj7eyGrQpNK1ZylN6R7x2iNC07FqRcZYQr05XPHepP%2FYEZVSen1pdCr2uo%2FdH7%2BUNbue5lRnANzDKdVArctBFNIFQSFg3sxxhrclXmS2ZRFXt08u4oU8fgaGBxY38%2FIlanjEp93VUBF800KCbBSHFNTZMGJ8MJ8PvaYG4ULv5OPpe1yAo9C0eH5HP%2BrnENeK5Cb4RwaW04fSO2lwz6d9FSgJEWf%2BoxtzMsISJmCAX40BhnUyf2yEGWRtNkKRQ5grR%2Fxr%2FLcM1%2B9vb%2B%2BeW%2FyPHZYEouuBf%2F0lu9j41w%2BstExOXiMsM96sXN4AAlJcG9yeXCIubL1X2DBkc%2FTLU%2Fc1Ny4EjbGBBG1%2BwIA2TZ6i%2BnFi%2Fd%2BjWBOZpTGhcDDaJ%2BFd%2FHHQIYTtG0y6WbNWQQhqX5FF6mgp7cCT1s1X8VrGkN6BDEjUknONOY8YEiuVDDAofPABjqkAZI%2FZY5geDUJqcVD%2Bxe5EqKENoa7yQ0BcNEqmekMtWrQWv8bsAMED3%2Fddu%2FW3czHj5%2FZZAI1M%2FKVQYisT6G%2Bqs12D%2Br1LHPmUUiVHnsY9Dj2jhd%2B6dagxGwxXQ7pP1oHLunsspPRWAPunjfTOSvFc8xPobDPVEH1e6Q4zwpVUVyoWyIPEJ8m7ofTACgD14s9I15dkVPDgSHz1PtN2GzhXoIDVdL5&X-Amz-Signature=b8df2fde6b4b7d998889175451147bbd77f13b4846175283156f85f86ea3582f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LIKIB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm0fpYSX12zdnkrXXjZiwRQYW5IZJXKB8m%2FdkFRqPbAIhAMiTyDW9fI4RQyiNN4kTw%2F1bYGhFVsDTPKoHfcmvoq%2FJKv8DCHkQABoMNjM3NDIzMTgzODA1IgwD0fz2bCaePF%2Frpmcq3ANzzrYxhiI3t8MsEPJfPC7JdVgw%2FayV9nHS34txjKDjcGlU%2FwBZ9X8QQvpz4j4FjlezH2KrvcRjHHD3r95YGeXEWYIQvGAsrUsTeH%2BHKeO%2Fwns7fvL5yldBKHmm6dmAccPlEJ4Jdd81jE13n83Qt77W9VCNPvW5wI0SIpnOdF3H7QdxvIvjY4lKTe8KvapUGBj7eyGrQpNK1ZylN6R7x2iNC07FqRcZYQr05XPHepP%2FYEZVSen1pdCr2uo%2FdH7%2BUNbue5lRnANzDKdVArctBFNIFQSFg3sxxhrclXmS2ZRFXt08u4oU8fgaGBxY38%2FIlanjEp93VUBF800KCbBSHFNTZMGJ8MJ8PvaYG4ULv5OPpe1yAo9C0eH5HP%2BrnENeK5Cb4RwaW04fSO2lwz6d9FSgJEWf%2BoxtzMsISJmCAX40BhnUyf2yEGWRtNkKRQ5grR%2Fxr%2FLcM1%2B9vb%2B%2BeW%2FyPHZYEouuBf%2F0lu9j41w%2BstExOXiMsM96sXN4AAlJcG9yeXCIubL1X2DBkc%2FTLU%2Fc1Ny4EjbGBBG1%2BwIA2TZ6i%2BnFi%2Fd%2BjWBOZpTGhcDDaJ%2BFd%2FHHQIYTtG0y6WbNWQQhqX5FF6mgp7cCT1s1X8VrGkN6BDEjUknONOY8YEiuVDDAofPABjqkAZI%2FZY5geDUJqcVD%2Bxe5EqKENoa7yQ0BcNEqmekMtWrQWv8bsAMED3%2Fddu%2FW3czHj5%2FZZAI1M%2FKVQYisT6G%2Bqs12D%2Br1LHPmUUiVHnsY9Dj2jhd%2B6dagxGwxXQ7pP1oHLunsspPRWAPunjfTOSvFc8xPobDPVEH1e6Q4zwpVUVyoWyIPEJ8m7ofTACgD14s9I15dkVPDgSHz1PtN2GzhXoIDVdL5&X-Amz-Signature=f0c7b721e5d968efe1ee8777a0587140b53e7ed2a3e92d61dadf653d46b1c101&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LIKIB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm0fpYSX12zdnkrXXjZiwRQYW5IZJXKB8m%2FdkFRqPbAIhAMiTyDW9fI4RQyiNN4kTw%2F1bYGhFVsDTPKoHfcmvoq%2FJKv8DCHkQABoMNjM3NDIzMTgzODA1IgwD0fz2bCaePF%2Frpmcq3ANzzrYxhiI3t8MsEPJfPC7JdVgw%2FayV9nHS34txjKDjcGlU%2FwBZ9X8QQvpz4j4FjlezH2KrvcRjHHD3r95YGeXEWYIQvGAsrUsTeH%2BHKeO%2Fwns7fvL5yldBKHmm6dmAccPlEJ4Jdd81jE13n83Qt77W9VCNPvW5wI0SIpnOdF3H7QdxvIvjY4lKTe8KvapUGBj7eyGrQpNK1ZylN6R7x2iNC07FqRcZYQr05XPHepP%2FYEZVSen1pdCr2uo%2FdH7%2BUNbue5lRnANzDKdVArctBFNIFQSFg3sxxhrclXmS2ZRFXt08u4oU8fgaGBxY38%2FIlanjEp93VUBF800KCbBSHFNTZMGJ8MJ8PvaYG4ULv5OPpe1yAo9C0eH5HP%2BrnENeK5Cb4RwaW04fSO2lwz6d9FSgJEWf%2BoxtzMsISJmCAX40BhnUyf2yEGWRtNkKRQ5grR%2Fxr%2FLcM1%2B9vb%2B%2BeW%2FyPHZYEouuBf%2F0lu9j41w%2BstExOXiMsM96sXN4AAlJcG9yeXCIubL1X2DBkc%2FTLU%2Fc1Ny4EjbGBBG1%2BwIA2TZ6i%2BnFi%2Fd%2BjWBOZpTGhcDDaJ%2BFd%2FHHQIYTtG0y6WbNWQQhqX5FF6mgp7cCT1s1X8VrGkN6BDEjUknONOY8YEiuVDDAofPABjqkAZI%2FZY5geDUJqcVD%2Bxe5EqKENoa7yQ0BcNEqmekMtWrQWv8bsAMED3%2Fddu%2FW3czHj5%2FZZAI1M%2FKVQYisT6G%2Bqs12D%2Br1LHPmUUiVHnsY9Dj2jhd%2B6dagxGwxXQ7pP1oHLunsspPRWAPunjfTOSvFc8xPobDPVEH1e6Q4zwpVUVyoWyIPEJ8m7ofTACgD14s9I15dkVPDgSHz1PtN2GzhXoIDVdL5&X-Amz-Signature=ae2c93120657848d15759cd619cdc3a9e9e88efc008ef6dd3afb7817970750b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LIKIB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm0fpYSX12zdnkrXXjZiwRQYW5IZJXKB8m%2FdkFRqPbAIhAMiTyDW9fI4RQyiNN4kTw%2F1bYGhFVsDTPKoHfcmvoq%2FJKv8DCHkQABoMNjM3NDIzMTgzODA1IgwD0fz2bCaePF%2Frpmcq3ANzzrYxhiI3t8MsEPJfPC7JdVgw%2FayV9nHS34txjKDjcGlU%2FwBZ9X8QQvpz4j4FjlezH2KrvcRjHHD3r95YGeXEWYIQvGAsrUsTeH%2BHKeO%2Fwns7fvL5yldBKHmm6dmAccPlEJ4Jdd81jE13n83Qt77W9VCNPvW5wI0SIpnOdF3H7QdxvIvjY4lKTe8KvapUGBj7eyGrQpNK1ZylN6R7x2iNC07FqRcZYQr05XPHepP%2FYEZVSen1pdCr2uo%2FdH7%2BUNbue5lRnANzDKdVArctBFNIFQSFg3sxxhrclXmS2ZRFXt08u4oU8fgaGBxY38%2FIlanjEp93VUBF800KCbBSHFNTZMGJ8MJ8PvaYG4ULv5OPpe1yAo9C0eH5HP%2BrnENeK5Cb4RwaW04fSO2lwz6d9FSgJEWf%2BoxtzMsISJmCAX40BhnUyf2yEGWRtNkKRQ5grR%2Fxr%2FLcM1%2B9vb%2B%2BeW%2FyPHZYEouuBf%2F0lu9j41w%2BstExOXiMsM96sXN4AAlJcG9yeXCIubL1X2DBkc%2FTLU%2Fc1Ny4EjbGBBG1%2BwIA2TZ6i%2BnFi%2Fd%2BjWBOZpTGhcDDaJ%2BFd%2FHHQIYTtG0y6WbNWQQhqX5FF6mgp7cCT1s1X8VrGkN6BDEjUknONOY8YEiuVDDAofPABjqkAZI%2FZY5geDUJqcVD%2Bxe5EqKENoa7yQ0BcNEqmekMtWrQWv8bsAMED3%2Fddu%2FW3czHj5%2FZZAI1M%2FKVQYisT6G%2Bqs12D%2Br1LHPmUUiVHnsY9Dj2jhd%2B6dagxGwxXQ7pP1oHLunsspPRWAPunjfTOSvFc8xPobDPVEH1e6Q4zwpVUVyoWyIPEJ8m7ofTACgD14s9I15dkVPDgSHz1PtN2GzhXoIDVdL5&X-Amz-Signature=a7acc808d88c6a8e1c2eb45bf408cd53de47b7c599521a92573d4b5d2d368c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7LIKIB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm0fpYSX12zdnkrXXjZiwRQYW5IZJXKB8m%2FdkFRqPbAIhAMiTyDW9fI4RQyiNN4kTw%2F1bYGhFVsDTPKoHfcmvoq%2FJKv8DCHkQABoMNjM3NDIzMTgzODA1IgwD0fz2bCaePF%2Frpmcq3ANzzrYxhiI3t8MsEPJfPC7JdVgw%2FayV9nHS34txjKDjcGlU%2FwBZ9X8QQvpz4j4FjlezH2KrvcRjHHD3r95YGeXEWYIQvGAsrUsTeH%2BHKeO%2Fwns7fvL5yldBKHmm6dmAccPlEJ4Jdd81jE13n83Qt77W9VCNPvW5wI0SIpnOdF3H7QdxvIvjY4lKTe8KvapUGBj7eyGrQpNK1ZylN6R7x2iNC07FqRcZYQr05XPHepP%2FYEZVSen1pdCr2uo%2FdH7%2BUNbue5lRnANzDKdVArctBFNIFQSFg3sxxhrclXmS2ZRFXt08u4oU8fgaGBxY38%2FIlanjEp93VUBF800KCbBSHFNTZMGJ8MJ8PvaYG4ULv5OPpe1yAo9C0eH5HP%2BrnENeK5Cb4RwaW04fSO2lwz6d9FSgJEWf%2BoxtzMsISJmCAX40BhnUyf2yEGWRtNkKRQ5grR%2Fxr%2FLcM1%2B9vb%2B%2BeW%2FyPHZYEouuBf%2F0lu9j41w%2BstExOXiMsM96sXN4AAlJcG9yeXCIubL1X2DBkc%2FTLU%2Fc1Ny4EjbGBBG1%2BwIA2TZ6i%2BnFi%2Fd%2BjWBOZpTGhcDDaJ%2BFd%2FHHQIYTtG0y6WbNWQQhqX5FF6mgp7cCT1s1X8VrGkN6BDEjUknONOY8YEiuVDDAofPABjqkAZI%2FZY5geDUJqcVD%2Bxe5EqKENoa7yQ0BcNEqmekMtWrQWv8bsAMED3%2Fddu%2FW3czHj5%2FZZAI1M%2FKVQYisT6G%2Bqs12D%2Br1LHPmUUiVHnsY9Dj2jhd%2B6dagxGwxXQ7pP1oHLunsspPRWAPunjfTOSvFc8xPobDPVEH1e6Q4zwpVUVyoWyIPEJ8m7ofTACgD14s9I15dkVPDgSHz1PtN2GzhXoIDVdL5&X-Amz-Signature=61c5ef1002d2f76053a1c2783c1b7b7a6b95e2bb3d12a6bbbfe524c19b3bfd9a&X-Amz-SignedHeaders=host&x-id=GetObject)
