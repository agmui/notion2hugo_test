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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4QUGPT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTEH4Pa0VJNkz6qWYO8RtuOIR9Y7dWbJyWjuOCVLdv9QIgDSjBvcbhhF9qZ8kYQYzXrH3qOfy%2F71pTy%2F8expswuXAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDr5rR%2BMARSrJcTpCircAwcEOVF%2F%2FnOzTaKRXJ9mQzntLRtH1%2BJTFOSxqdqGodKHP2M5GrzDRmGsXYYFVoH5ZZcaVfR%2Bc0DtxaKoFuOGJmkM5KkroMaX0BbzAyl4RCYJUolPEBu5%2FkEvGI2veEMu9oRSj%2B825SqEOyMljbedR8t8hVFldC7gqh1nfctNNtWrT%2FZeuZTmHcWFPiMWzya4RpT49C3laoeQuFuBNWSo7vRWlSC79yXjvrWVyffy7szSxQD7WVAvrQ9dN7Me8Ib4QR6wX4SC8Uba2R5F9zyBHXEmbp7mSHseVxWx8ofhDETHeZuVAmiK89HGDm1OmP2c784jjj1jwL8SRdLnInO95gm3c0YhSZbLhuZyyEnlGPmJI1%2BHBNYRDJLBbBNURWGS0yNF6mDia9M5DRV4RObai2itDD5J2IgTQnXUn78J8K5y6NQNRUB1wS3XisBrAcPhf6hUz4X3IXUNQN1vnvK94KFO2%2BXu%2BpL4JrwvcTW5iKogco6nyi8jiHjJshUWAkG4IX8bdwn8IN6UNDeBO0TTK67VC9I3ObZCsXPKaRTsmjGOyVbtp%2FZrgI8rhOXzxlLc5DIUqkqi9%2B17SvHh2wriswLwMbfVGhPHmORx0lrzB0%2FJWaM7JxtiDKM%2BKsiuMJm73sAGOqUBAEeW7tX0ISdJuQkxf4xRfoDyGyruRDINPzS8S5r4iqHUXMeQXHN9tj7zEwZD2bzbH6U2dO9IuMbAfEJUOyJai6vACmKTeu8JqLr6Wg64Kscvd8LRaQ0VWsJS0IiXzHPESNyc0Pl4EuIgw9VcLTdk2NjqqzxM%2FtG97TQq9BYg%2F6ngV43wEDoClXZBVGb8Hfr%2BZGpl%2BI7Hvm7AB9B9ZgpzkPW4utHh&X-Amz-Signature=ecc913191c725aa002bbc34326958682b02cbb993d7d8769731877d80dd86262&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4QUGPT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTEH4Pa0VJNkz6qWYO8RtuOIR9Y7dWbJyWjuOCVLdv9QIgDSjBvcbhhF9qZ8kYQYzXrH3qOfy%2F71pTy%2F8expswuXAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDr5rR%2BMARSrJcTpCircAwcEOVF%2F%2FnOzTaKRXJ9mQzntLRtH1%2BJTFOSxqdqGodKHP2M5GrzDRmGsXYYFVoH5ZZcaVfR%2Bc0DtxaKoFuOGJmkM5KkroMaX0BbzAyl4RCYJUolPEBu5%2FkEvGI2veEMu9oRSj%2B825SqEOyMljbedR8t8hVFldC7gqh1nfctNNtWrT%2FZeuZTmHcWFPiMWzya4RpT49C3laoeQuFuBNWSo7vRWlSC79yXjvrWVyffy7szSxQD7WVAvrQ9dN7Me8Ib4QR6wX4SC8Uba2R5F9zyBHXEmbp7mSHseVxWx8ofhDETHeZuVAmiK89HGDm1OmP2c784jjj1jwL8SRdLnInO95gm3c0YhSZbLhuZyyEnlGPmJI1%2BHBNYRDJLBbBNURWGS0yNF6mDia9M5DRV4RObai2itDD5J2IgTQnXUn78J8K5y6NQNRUB1wS3XisBrAcPhf6hUz4X3IXUNQN1vnvK94KFO2%2BXu%2BpL4JrwvcTW5iKogco6nyi8jiHjJshUWAkG4IX8bdwn8IN6UNDeBO0TTK67VC9I3ObZCsXPKaRTsmjGOyVbtp%2FZrgI8rhOXzxlLc5DIUqkqi9%2B17SvHh2wriswLwMbfVGhPHmORx0lrzB0%2FJWaM7JxtiDKM%2BKsiuMJm73sAGOqUBAEeW7tX0ISdJuQkxf4xRfoDyGyruRDINPzS8S5r4iqHUXMeQXHN9tj7zEwZD2bzbH6U2dO9IuMbAfEJUOyJai6vACmKTeu8JqLr6Wg64Kscvd8LRaQ0VWsJS0IiXzHPESNyc0Pl4EuIgw9VcLTdk2NjqqzxM%2FtG97TQq9BYg%2F6ngV43wEDoClXZBVGb8Hfr%2BZGpl%2BI7Hvm7AB9B9ZgpzkPW4utHh&X-Amz-Signature=3e68881c6f908537c34e3c56da6b19d3e9f99c3ff959a1a2173f5089c28d65ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4QUGPT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTEH4Pa0VJNkz6qWYO8RtuOIR9Y7dWbJyWjuOCVLdv9QIgDSjBvcbhhF9qZ8kYQYzXrH3qOfy%2F71pTy%2F8expswuXAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDr5rR%2BMARSrJcTpCircAwcEOVF%2F%2FnOzTaKRXJ9mQzntLRtH1%2BJTFOSxqdqGodKHP2M5GrzDRmGsXYYFVoH5ZZcaVfR%2Bc0DtxaKoFuOGJmkM5KkroMaX0BbzAyl4RCYJUolPEBu5%2FkEvGI2veEMu9oRSj%2B825SqEOyMljbedR8t8hVFldC7gqh1nfctNNtWrT%2FZeuZTmHcWFPiMWzya4RpT49C3laoeQuFuBNWSo7vRWlSC79yXjvrWVyffy7szSxQD7WVAvrQ9dN7Me8Ib4QR6wX4SC8Uba2R5F9zyBHXEmbp7mSHseVxWx8ofhDETHeZuVAmiK89HGDm1OmP2c784jjj1jwL8SRdLnInO95gm3c0YhSZbLhuZyyEnlGPmJI1%2BHBNYRDJLBbBNURWGS0yNF6mDia9M5DRV4RObai2itDD5J2IgTQnXUn78J8K5y6NQNRUB1wS3XisBrAcPhf6hUz4X3IXUNQN1vnvK94KFO2%2BXu%2BpL4JrwvcTW5iKogco6nyi8jiHjJshUWAkG4IX8bdwn8IN6UNDeBO0TTK67VC9I3ObZCsXPKaRTsmjGOyVbtp%2FZrgI8rhOXzxlLc5DIUqkqi9%2B17SvHh2wriswLwMbfVGhPHmORx0lrzB0%2FJWaM7JxtiDKM%2BKsiuMJm73sAGOqUBAEeW7tX0ISdJuQkxf4xRfoDyGyruRDINPzS8S5r4iqHUXMeQXHN9tj7zEwZD2bzbH6U2dO9IuMbAfEJUOyJai6vACmKTeu8JqLr6Wg64Kscvd8LRaQ0VWsJS0IiXzHPESNyc0Pl4EuIgw9VcLTdk2NjqqzxM%2FtG97TQq9BYg%2F6ngV43wEDoClXZBVGb8Hfr%2BZGpl%2BI7Hvm7AB9B9ZgpzkPW4utHh&X-Amz-Signature=285b654b68b120edf4cade71e92b4fa64e15d3e8c8c71ca92383050b33371032&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4QUGPT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTEH4Pa0VJNkz6qWYO8RtuOIR9Y7dWbJyWjuOCVLdv9QIgDSjBvcbhhF9qZ8kYQYzXrH3qOfy%2F71pTy%2F8expswuXAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDr5rR%2BMARSrJcTpCircAwcEOVF%2F%2FnOzTaKRXJ9mQzntLRtH1%2BJTFOSxqdqGodKHP2M5GrzDRmGsXYYFVoH5ZZcaVfR%2Bc0DtxaKoFuOGJmkM5KkroMaX0BbzAyl4RCYJUolPEBu5%2FkEvGI2veEMu9oRSj%2B825SqEOyMljbedR8t8hVFldC7gqh1nfctNNtWrT%2FZeuZTmHcWFPiMWzya4RpT49C3laoeQuFuBNWSo7vRWlSC79yXjvrWVyffy7szSxQD7WVAvrQ9dN7Me8Ib4QR6wX4SC8Uba2R5F9zyBHXEmbp7mSHseVxWx8ofhDETHeZuVAmiK89HGDm1OmP2c784jjj1jwL8SRdLnInO95gm3c0YhSZbLhuZyyEnlGPmJI1%2BHBNYRDJLBbBNURWGS0yNF6mDia9M5DRV4RObai2itDD5J2IgTQnXUn78J8K5y6NQNRUB1wS3XisBrAcPhf6hUz4X3IXUNQN1vnvK94KFO2%2BXu%2BpL4JrwvcTW5iKogco6nyi8jiHjJshUWAkG4IX8bdwn8IN6UNDeBO0TTK67VC9I3ObZCsXPKaRTsmjGOyVbtp%2FZrgI8rhOXzxlLc5DIUqkqi9%2B17SvHh2wriswLwMbfVGhPHmORx0lrzB0%2FJWaM7JxtiDKM%2BKsiuMJm73sAGOqUBAEeW7tX0ISdJuQkxf4xRfoDyGyruRDINPzS8S5r4iqHUXMeQXHN9tj7zEwZD2bzbH6U2dO9IuMbAfEJUOyJai6vACmKTeu8JqLr6Wg64Kscvd8LRaQ0VWsJS0IiXzHPESNyc0Pl4EuIgw9VcLTdk2NjqqzxM%2FtG97TQq9BYg%2F6ngV43wEDoClXZBVGb8Hfr%2BZGpl%2BI7Hvm7AB9B9ZgpzkPW4utHh&X-Amz-Signature=ec149a296777322c7019ce9834fadae0e1c3b0471392250220a0461f4e08d5ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4QUGPT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTEH4Pa0VJNkz6qWYO8RtuOIR9Y7dWbJyWjuOCVLdv9QIgDSjBvcbhhF9qZ8kYQYzXrH3qOfy%2F71pTy%2F8expswuXAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDr5rR%2BMARSrJcTpCircAwcEOVF%2F%2FnOzTaKRXJ9mQzntLRtH1%2BJTFOSxqdqGodKHP2M5GrzDRmGsXYYFVoH5ZZcaVfR%2Bc0DtxaKoFuOGJmkM5KkroMaX0BbzAyl4RCYJUolPEBu5%2FkEvGI2veEMu9oRSj%2B825SqEOyMljbedR8t8hVFldC7gqh1nfctNNtWrT%2FZeuZTmHcWFPiMWzya4RpT49C3laoeQuFuBNWSo7vRWlSC79yXjvrWVyffy7szSxQD7WVAvrQ9dN7Me8Ib4QR6wX4SC8Uba2R5F9zyBHXEmbp7mSHseVxWx8ofhDETHeZuVAmiK89HGDm1OmP2c784jjj1jwL8SRdLnInO95gm3c0YhSZbLhuZyyEnlGPmJI1%2BHBNYRDJLBbBNURWGS0yNF6mDia9M5DRV4RObai2itDD5J2IgTQnXUn78J8K5y6NQNRUB1wS3XisBrAcPhf6hUz4X3IXUNQN1vnvK94KFO2%2BXu%2BpL4JrwvcTW5iKogco6nyi8jiHjJshUWAkG4IX8bdwn8IN6UNDeBO0TTK67VC9I3ObZCsXPKaRTsmjGOyVbtp%2FZrgI8rhOXzxlLc5DIUqkqi9%2B17SvHh2wriswLwMbfVGhPHmORx0lrzB0%2FJWaM7JxtiDKM%2BKsiuMJm73sAGOqUBAEeW7tX0ISdJuQkxf4xRfoDyGyruRDINPzS8S5r4iqHUXMeQXHN9tj7zEwZD2bzbH6U2dO9IuMbAfEJUOyJai6vACmKTeu8JqLr6Wg64Kscvd8LRaQ0VWsJS0IiXzHPESNyc0Pl4EuIgw9VcLTdk2NjqqzxM%2FtG97TQq9BYg%2F6ngV43wEDoClXZBVGb8Hfr%2BZGpl%2BI7Hvm7AB9B9ZgpzkPW4utHh&X-Amz-Signature=1675d6e027a91ab2fedd14038108ef8a3e96fadf28ca2065728631f01ad62987&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4QUGPT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTEH4Pa0VJNkz6qWYO8RtuOIR9Y7dWbJyWjuOCVLdv9QIgDSjBvcbhhF9qZ8kYQYzXrH3qOfy%2F71pTy%2F8expswuXAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDr5rR%2BMARSrJcTpCircAwcEOVF%2F%2FnOzTaKRXJ9mQzntLRtH1%2BJTFOSxqdqGodKHP2M5GrzDRmGsXYYFVoH5ZZcaVfR%2Bc0DtxaKoFuOGJmkM5KkroMaX0BbzAyl4RCYJUolPEBu5%2FkEvGI2veEMu9oRSj%2B825SqEOyMljbedR8t8hVFldC7gqh1nfctNNtWrT%2FZeuZTmHcWFPiMWzya4RpT49C3laoeQuFuBNWSo7vRWlSC79yXjvrWVyffy7szSxQD7WVAvrQ9dN7Me8Ib4QR6wX4SC8Uba2R5F9zyBHXEmbp7mSHseVxWx8ofhDETHeZuVAmiK89HGDm1OmP2c784jjj1jwL8SRdLnInO95gm3c0YhSZbLhuZyyEnlGPmJI1%2BHBNYRDJLBbBNURWGS0yNF6mDia9M5DRV4RObai2itDD5J2IgTQnXUn78J8K5y6NQNRUB1wS3XisBrAcPhf6hUz4X3IXUNQN1vnvK94KFO2%2BXu%2BpL4JrwvcTW5iKogco6nyi8jiHjJshUWAkG4IX8bdwn8IN6UNDeBO0TTK67VC9I3ObZCsXPKaRTsmjGOyVbtp%2FZrgI8rhOXzxlLc5DIUqkqi9%2B17SvHh2wriswLwMbfVGhPHmORx0lrzB0%2FJWaM7JxtiDKM%2BKsiuMJm73sAGOqUBAEeW7tX0ISdJuQkxf4xRfoDyGyruRDINPzS8S5r4iqHUXMeQXHN9tj7zEwZD2bzbH6U2dO9IuMbAfEJUOyJai6vACmKTeu8JqLr6Wg64Kscvd8LRaQ0VWsJS0IiXzHPESNyc0Pl4EuIgw9VcLTdk2NjqqzxM%2FtG97TQq9BYg%2F6ngV43wEDoClXZBVGb8Hfr%2BZGpl%2BI7Hvm7AB9B9ZgpzkPW4utHh&X-Amz-Signature=909faf194c805cd61ac42df5db0fbae6ba8de34ca0183dbc13a79e31a454425a&X-Amz-SignedHeaders=host&x-id=GetObject)
