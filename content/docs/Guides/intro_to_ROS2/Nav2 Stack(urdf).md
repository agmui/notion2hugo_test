---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKANAEY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02AYadezp2W8yD%2Fw%2FKBGIewGlFM%2BRJUhV1V5w9Fy4xAIhAOb3Qbz3CJIRmPqu%2BfKeqCvz8O4MQD8yJECToW6IiXEPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsqkHxnLAKYPYyoNMq3APryv0NZqsB0Abc%2Fsnip1%2BNQ1CA3F%2FKxVuFT75VpRjb7ocuhIIGqCjipp7JEL1dPryoM9qVYeyg%2BYAD3El6x8mUpqZWvNzxL1L0R2PBm4mWFSF2ANQ7DPYBiGNx5glWcibwtbhzfZNSbsVPrjRUpIZyntqY1D98CYFvIlsMTOXofVQYMfU7er6n%2BL5tLiCvmv0QrUHT%2F3SKYffKBLnpoRf%2F%2BRAei2FDdBpGqNagUJvO85PnEK73CuHqj4Hv0%2Bl%2FaN%2BvJoJGprKDeSSpVvlTtbhlTQ85GrJ5Z%2BhZ8WCsdwCLssenLMNDarLkY8vS613D%2FzjBDKDlnXVG8rVJAW5hEN2hbuaVl6ejvFwdL%2BppHds156H3%2Byc%2F%2F0HzOM9dH1DeWxlSvDGuoUSfwXhj1y8P3muDodTfj4%2B4gZ81Ljg8re4xVNrvI2mk6xeVBta3Q1ISp%2F5bOaqXaQfWQOaBwEovq7zIb6G55oCBXVLawgeGvnQwUMxFZ70UiM31BK3ROGPqqCyE%2FTxE%2F%2BhhuzT2LjYLiFxXWsc8XW2P6r%2Fz4B2iKPb%2FM56qiw01T3wGtJoLWtw1XhaE3jWNDJv7ljHg%2BOmbm2XWJk4Tdu0WsscJi1LG2%2FSjqr3y4HCJOQtxjibMrTC9wIC9BjqkAYAXRXz966BXNnG7xjvcc9dsv2Hhky4%2FdUc6GShGcVELOBrJINR6gSH4FdkAQp%2BlDxm4rmoyFkC18Hm6rQQH6suo8Y7swkELrFXv7Vh8Ea95pbpKsW%2FWljGYnygq0t6FX%2Bds9cH3LmpQUrHm4RpfwZxIFyMamopECTaNP6GQDsBGVQPamy4JeNNIo4DGK3FpPs2jR2yZFcJLWyMtqJas9k%2BE1GKZ&X-Amz-Signature=227084c43dba339d5ab0ab58b610e282e9618e25da96e20aad61418ab390799e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKANAEY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02AYadezp2W8yD%2Fw%2FKBGIewGlFM%2BRJUhV1V5w9Fy4xAIhAOb3Qbz3CJIRmPqu%2BfKeqCvz8O4MQD8yJECToW6IiXEPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsqkHxnLAKYPYyoNMq3APryv0NZqsB0Abc%2Fsnip1%2BNQ1CA3F%2FKxVuFT75VpRjb7ocuhIIGqCjipp7JEL1dPryoM9qVYeyg%2BYAD3El6x8mUpqZWvNzxL1L0R2PBm4mWFSF2ANQ7DPYBiGNx5glWcibwtbhzfZNSbsVPrjRUpIZyntqY1D98CYFvIlsMTOXofVQYMfU7er6n%2BL5tLiCvmv0QrUHT%2F3SKYffKBLnpoRf%2F%2BRAei2FDdBpGqNagUJvO85PnEK73CuHqj4Hv0%2Bl%2FaN%2BvJoJGprKDeSSpVvlTtbhlTQ85GrJ5Z%2BhZ8WCsdwCLssenLMNDarLkY8vS613D%2FzjBDKDlnXVG8rVJAW5hEN2hbuaVl6ejvFwdL%2BppHds156H3%2Byc%2F%2F0HzOM9dH1DeWxlSvDGuoUSfwXhj1y8P3muDodTfj4%2B4gZ81Ljg8re4xVNrvI2mk6xeVBta3Q1ISp%2F5bOaqXaQfWQOaBwEovq7zIb6G55oCBXVLawgeGvnQwUMxFZ70UiM31BK3ROGPqqCyE%2FTxE%2F%2BhhuzT2LjYLiFxXWsc8XW2P6r%2Fz4B2iKPb%2FM56qiw01T3wGtJoLWtw1XhaE3jWNDJv7ljHg%2BOmbm2XWJk4Tdu0WsscJi1LG2%2FSjqr3y4HCJOQtxjibMrTC9wIC9BjqkAYAXRXz966BXNnG7xjvcc9dsv2Hhky4%2FdUc6GShGcVELOBrJINR6gSH4FdkAQp%2BlDxm4rmoyFkC18Hm6rQQH6suo8Y7swkELrFXv7Vh8Ea95pbpKsW%2FWljGYnygq0t6FX%2Bds9cH3LmpQUrHm4RpfwZxIFyMamopECTaNP6GQDsBGVQPamy4JeNNIo4DGK3FpPs2jR2yZFcJLWyMtqJas9k%2BE1GKZ&X-Amz-Signature=35531e034697506350ca9b93f5c9a2f3f01190dd6f817c24ceb8e90712e014fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKANAEY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02AYadezp2W8yD%2Fw%2FKBGIewGlFM%2BRJUhV1V5w9Fy4xAIhAOb3Qbz3CJIRmPqu%2BfKeqCvz8O4MQD8yJECToW6IiXEPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsqkHxnLAKYPYyoNMq3APryv0NZqsB0Abc%2Fsnip1%2BNQ1CA3F%2FKxVuFT75VpRjb7ocuhIIGqCjipp7JEL1dPryoM9qVYeyg%2BYAD3El6x8mUpqZWvNzxL1L0R2PBm4mWFSF2ANQ7DPYBiGNx5glWcibwtbhzfZNSbsVPrjRUpIZyntqY1D98CYFvIlsMTOXofVQYMfU7er6n%2BL5tLiCvmv0QrUHT%2F3SKYffKBLnpoRf%2F%2BRAei2FDdBpGqNagUJvO85PnEK73CuHqj4Hv0%2Bl%2FaN%2BvJoJGprKDeSSpVvlTtbhlTQ85GrJ5Z%2BhZ8WCsdwCLssenLMNDarLkY8vS613D%2FzjBDKDlnXVG8rVJAW5hEN2hbuaVl6ejvFwdL%2BppHds156H3%2Byc%2F%2F0HzOM9dH1DeWxlSvDGuoUSfwXhj1y8P3muDodTfj4%2B4gZ81Ljg8re4xVNrvI2mk6xeVBta3Q1ISp%2F5bOaqXaQfWQOaBwEovq7zIb6G55oCBXVLawgeGvnQwUMxFZ70UiM31BK3ROGPqqCyE%2FTxE%2F%2BhhuzT2LjYLiFxXWsc8XW2P6r%2Fz4B2iKPb%2FM56qiw01T3wGtJoLWtw1XhaE3jWNDJv7ljHg%2BOmbm2XWJk4Tdu0WsscJi1LG2%2FSjqr3y4HCJOQtxjibMrTC9wIC9BjqkAYAXRXz966BXNnG7xjvcc9dsv2Hhky4%2FdUc6GShGcVELOBrJINR6gSH4FdkAQp%2BlDxm4rmoyFkC18Hm6rQQH6suo8Y7swkELrFXv7Vh8Ea95pbpKsW%2FWljGYnygq0t6FX%2Bds9cH3LmpQUrHm4RpfwZxIFyMamopECTaNP6GQDsBGVQPamy4JeNNIo4DGK3FpPs2jR2yZFcJLWyMtqJas9k%2BE1GKZ&X-Amz-Signature=a57633b1f88f06027a1da0fbe5e0212ddae44df408584d11435acc09944227da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKANAEY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02AYadezp2W8yD%2Fw%2FKBGIewGlFM%2BRJUhV1V5w9Fy4xAIhAOb3Qbz3CJIRmPqu%2BfKeqCvz8O4MQD8yJECToW6IiXEPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsqkHxnLAKYPYyoNMq3APryv0NZqsB0Abc%2Fsnip1%2BNQ1CA3F%2FKxVuFT75VpRjb7ocuhIIGqCjipp7JEL1dPryoM9qVYeyg%2BYAD3El6x8mUpqZWvNzxL1L0R2PBm4mWFSF2ANQ7DPYBiGNx5glWcibwtbhzfZNSbsVPrjRUpIZyntqY1D98CYFvIlsMTOXofVQYMfU7er6n%2BL5tLiCvmv0QrUHT%2F3SKYffKBLnpoRf%2F%2BRAei2FDdBpGqNagUJvO85PnEK73CuHqj4Hv0%2Bl%2FaN%2BvJoJGprKDeSSpVvlTtbhlTQ85GrJ5Z%2BhZ8WCsdwCLssenLMNDarLkY8vS613D%2FzjBDKDlnXVG8rVJAW5hEN2hbuaVl6ejvFwdL%2BppHds156H3%2Byc%2F%2F0HzOM9dH1DeWxlSvDGuoUSfwXhj1y8P3muDodTfj4%2B4gZ81Ljg8re4xVNrvI2mk6xeVBta3Q1ISp%2F5bOaqXaQfWQOaBwEovq7zIb6G55oCBXVLawgeGvnQwUMxFZ70UiM31BK3ROGPqqCyE%2FTxE%2F%2BhhuzT2LjYLiFxXWsc8XW2P6r%2Fz4B2iKPb%2FM56qiw01T3wGtJoLWtw1XhaE3jWNDJv7ljHg%2BOmbm2XWJk4Tdu0WsscJi1LG2%2FSjqr3y4HCJOQtxjibMrTC9wIC9BjqkAYAXRXz966BXNnG7xjvcc9dsv2Hhky4%2FdUc6GShGcVELOBrJINR6gSH4FdkAQp%2BlDxm4rmoyFkC18Hm6rQQH6suo8Y7swkELrFXv7Vh8Ea95pbpKsW%2FWljGYnygq0t6FX%2Bds9cH3LmpQUrHm4RpfwZxIFyMamopECTaNP6GQDsBGVQPamy4JeNNIo4DGK3FpPs2jR2yZFcJLWyMtqJas9k%2BE1GKZ&X-Amz-Signature=1e92feb8fad7a2a7d14aa8b82877c68f48ec149e7131dcc20fe9266817516010&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKANAEY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02AYadezp2W8yD%2Fw%2FKBGIewGlFM%2BRJUhV1V5w9Fy4xAIhAOb3Qbz3CJIRmPqu%2BfKeqCvz8O4MQD8yJECToW6IiXEPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsqkHxnLAKYPYyoNMq3APryv0NZqsB0Abc%2Fsnip1%2BNQ1CA3F%2FKxVuFT75VpRjb7ocuhIIGqCjipp7JEL1dPryoM9qVYeyg%2BYAD3El6x8mUpqZWvNzxL1L0R2PBm4mWFSF2ANQ7DPYBiGNx5glWcibwtbhzfZNSbsVPrjRUpIZyntqY1D98CYFvIlsMTOXofVQYMfU7er6n%2BL5tLiCvmv0QrUHT%2F3SKYffKBLnpoRf%2F%2BRAei2FDdBpGqNagUJvO85PnEK73CuHqj4Hv0%2Bl%2FaN%2BvJoJGprKDeSSpVvlTtbhlTQ85GrJ5Z%2BhZ8WCsdwCLssenLMNDarLkY8vS613D%2FzjBDKDlnXVG8rVJAW5hEN2hbuaVl6ejvFwdL%2BppHds156H3%2Byc%2F%2F0HzOM9dH1DeWxlSvDGuoUSfwXhj1y8P3muDodTfj4%2B4gZ81Ljg8re4xVNrvI2mk6xeVBta3Q1ISp%2F5bOaqXaQfWQOaBwEovq7zIb6G55oCBXVLawgeGvnQwUMxFZ70UiM31BK3ROGPqqCyE%2FTxE%2F%2BhhuzT2LjYLiFxXWsc8XW2P6r%2Fz4B2iKPb%2FM56qiw01T3wGtJoLWtw1XhaE3jWNDJv7ljHg%2BOmbm2XWJk4Tdu0WsscJi1LG2%2FSjqr3y4HCJOQtxjibMrTC9wIC9BjqkAYAXRXz966BXNnG7xjvcc9dsv2Hhky4%2FdUc6GShGcVELOBrJINR6gSH4FdkAQp%2BlDxm4rmoyFkC18Hm6rQQH6suo8Y7swkELrFXv7Vh8Ea95pbpKsW%2FWljGYnygq0t6FX%2Bds9cH3LmpQUrHm4RpfwZxIFyMamopECTaNP6GQDsBGVQPamy4JeNNIo4DGK3FpPs2jR2yZFcJLWyMtqJas9k%2BE1GKZ&X-Amz-Signature=09dab0f75db1d93757d8c0c17c3fb87ef991a3f5bd655bcd30c498e0d3855572&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKANAEY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02AYadezp2W8yD%2Fw%2FKBGIewGlFM%2BRJUhV1V5w9Fy4xAIhAOb3Qbz3CJIRmPqu%2BfKeqCvz8O4MQD8yJECToW6IiXEPKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsqkHxnLAKYPYyoNMq3APryv0NZqsB0Abc%2Fsnip1%2BNQ1CA3F%2FKxVuFT75VpRjb7ocuhIIGqCjipp7JEL1dPryoM9qVYeyg%2BYAD3El6x8mUpqZWvNzxL1L0R2PBm4mWFSF2ANQ7DPYBiGNx5glWcibwtbhzfZNSbsVPrjRUpIZyntqY1D98CYFvIlsMTOXofVQYMfU7er6n%2BL5tLiCvmv0QrUHT%2F3SKYffKBLnpoRf%2F%2BRAei2FDdBpGqNagUJvO85PnEK73CuHqj4Hv0%2Bl%2FaN%2BvJoJGprKDeSSpVvlTtbhlTQ85GrJ5Z%2BhZ8WCsdwCLssenLMNDarLkY8vS613D%2FzjBDKDlnXVG8rVJAW5hEN2hbuaVl6ejvFwdL%2BppHds156H3%2Byc%2F%2F0HzOM9dH1DeWxlSvDGuoUSfwXhj1y8P3muDodTfj4%2B4gZ81Ljg8re4xVNrvI2mk6xeVBta3Q1ISp%2F5bOaqXaQfWQOaBwEovq7zIb6G55oCBXVLawgeGvnQwUMxFZ70UiM31BK3ROGPqqCyE%2FTxE%2F%2BhhuzT2LjYLiFxXWsc8XW2P6r%2Fz4B2iKPb%2FM56qiw01T3wGtJoLWtw1XhaE3jWNDJv7ljHg%2BOmbm2XWJk4Tdu0WsscJi1LG2%2FSjqr3y4HCJOQtxjibMrTC9wIC9BjqkAYAXRXz966BXNnG7xjvcc9dsv2Hhky4%2FdUc6GShGcVELOBrJINR6gSH4FdkAQp%2BlDxm4rmoyFkC18Hm6rQQH6suo8Y7swkELrFXv7Vh8Ea95pbpKsW%2FWljGYnygq0t6FX%2Bds9cH3LmpQUrHm4RpfwZxIFyMamopECTaNP6GQDsBGVQPamy4JeNNIo4DGK3FpPs2jR2yZFcJLWyMtqJas9k%2BE1GKZ&X-Amz-Signature=b208acda7143ebb6e18fa870aae169c35b19072c909053c8d6f04161cca910b0&X-Amz-SignedHeaders=host&x-id=GetObject)
