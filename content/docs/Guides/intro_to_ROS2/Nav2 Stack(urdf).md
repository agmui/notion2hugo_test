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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CTFVX5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfiKMN%2BPjIng1mF2QmXyGWz3MSaqqZRG6AT4ec76IIEAiEA%2BlDVDyHpaZwds65OFRWa%2Bir7E4cWrFG11edcH0hnHFoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuIWELElaUVNwSJkCrcA2TPQHCLkiaEAPwK%2By7xU%2BjVy0ZCmXjRLz0lmEpJFbv%2Ba%2BhPAs%2BaSUUDGN61H3fu%2Fd5oDyDN6sWa1sCKp2gouIa06J9Ei%2BXPF3wLWH7GKZXfex94g2jvxim%2FD465R2JChqIG8%2FWK7QeWTwg7H%2FAu1IeJ%2FVCvjlfeldL4oC9AmMxaDCTizxnWe8%2B3CL9LaXZN%2Bq8BYlRm0TybmUjR3Cq9FCFiwZGLMNEiVHpPUAVUNJ8KAkQwdYy%2FOSO36Bw6LRJVdZFzbIT6bhZdlbAH%2BSoPKRizu7WV6SocW7j4nsFyljnyj4zOuzia2ottI1TvCmPpjkU%2FVg%2FS1ApZhJ%2B8jqMVvqs6TYJ7ZrRQa3UA6v8lQOsq%2B9pI95Zlnu3uMtdw6srNagk0B15KmQT4A76vrt%2FAo5mH4WosPJczVrlSBxcRbsDyGyJG%2FD%2FdLvx2kscrUbJMDz3OsjAcn%2FT0NxOYmtAhULW4mI04K4BQ4fMiuJAib9dSxm1FMzdTZNp6Ysavz9nmYF5MoFY6PyRrFiv6m%2FSbx1yJXPtUNGf8%2BpAe6oXR5VYBg7VLztPm1%2B3aLKbBwC57cJlxXuUmXiD6nKzyTKIx6zWYrM2oTGSFgR4pRgwxjhRyHquGPHK6wa2DUErGMMvtrL0GOqUBhHu3Bum0%2BSYrdGCMBXrxmCGZtsTUaa%2FNBLiSiwfqp23PlbfhA%2BGQRrorqI0PZUjb3BSl0EQ548Wa9pvsoySm8zdv4BQY9PG7zU3OhfHdE9vAO0pfTjrT6BLmt%2F3qhYaEzXRDatqzxHOy04onBBFcWLKtqkUBiijBPSA02o3lxxsr0A5QDjrWpqGszqQ7m26VAxgJJsrn4ee%2BgAVwCTyEojJKTv4b&X-Amz-Signature=c3af21757b1d550cb7ca87b02c776e5fcb0355e37a66ef1c908aec2e325c5fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CTFVX5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfiKMN%2BPjIng1mF2QmXyGWz3MSaqqZRG6AT4ec76IIEAiEA%2BlDVDyHpaZwds65OFRWa%2Bir7E4cWrFG11edcH0hnHFoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuIWELElaUVNwSJkCrcA2TPQHCLkiaEAPwK%2By7xU%2BjVy0ZCmXjRLz0lmEpJFbv%2Ba%2BhPAs%2BaSUUDGN61H3fu%2Fd5oDyDN6sWa1sCKp2gouIa06J9Ei%2BXPF3wLWH7GKZXfex94g2jvxim%2FD465R2JChqIG8%2FWK7QeWTwg7H%2FAu1IeJ%2FVCvjlfeldL4oC9AmMxaDCTizxnWe8%2B3CL9LaXZN%2Bq8BYlRm0TybmUjR3Cq9FCFiwZGLMNEiVHpPUAVUNJ8KAkQwdYy%2FOSO36Bw6LRJVdZFzbIT6bhZdlbAH%2BSoPKRizu7WV6SocW7j4nsFyljnyj4zOuzia2ottI1TvCmPpjkU%2FVg%2FS1ApZhJ%2B8jqMVvqs6TYJ7ZrRQa3UA6v8lQOsq%2B9pI95Zlnu3uMtdw6srNagk0B15KmQT4A76vrt%2FAo5mH4WosPJczVrlSBxcRbsDyGyJG%2FD%2FdLvx2kscrUbJMDz3OsjAcn%2FT0NxOYmtAhULW4mI04K4BQ4fMiuJAib9dSxm1FMzdTZNp6Ysavz9nmYF5MoFY6PyRrFiv6m%2FSbx1yJXPtUNGf8%2BpAe6oXR5VYBg7VLztPm1%2B3aLKbBwC57cJlxXuUmXiD6nKzyTKIx6zWYrM2oTGSFgR4pRgwxjhRyHquGPHK6wa2DUErGMMvtrL0GOqUBhHu3Bum0%2BSYrdGCMBXrxmCGZtsTUaa%2FNBLiSiwfqp23PlbfhA%2BGQRrorqI0PZUjb3BSl0EQ548Wa9pvsoySm8zdv4BQY9PG7zU3OhfHdE9vAO0pfTjrT6BLmt%2F3qhYaEzXRDatqzxHOy04onBBFcWLKtqkUBiijBPSA02o3lxxsr0A5QDjrWpqGszqQ7m26VAxgJJsrn4ee%2BgAVwCTyEojJKTv4b&X-Amz-Signature=ba6a49effb45db9cbc400ea358e52bdfd177ac531142d517ae3dd80569fa3220&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CTFVX5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfiKMN%2BPjIng1mF2QmXyGWz3MSaqqZRG6AT4ec76IIEAiEA%2BlDVDyHpaZwds65OFRWa%2Bir7E4cWrFG11edcH0hnHFoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuIWELElaUVNwSJkCrcA2TPQHCLkiaEAPwK%2By7xU%2BjVy0ZCmXjRLz0lmEpJFbv%2Ba%2BhPAs%2BaSUUDGN61H3fu%2Fd5oDyDN6sWa1sCKp2gouIa06J9Ei%2BXPF3wLWH7GKZXfex94g2jvxim%2FD465R2JChqIG8%2FWK7QeWTwg7H%2FAu1IeJ%2FVCvjlfeldL4oC9AmMxaDCTizxnWe8%2B3CL9LaXZN%2Bq8BYlRm0TybmUjR3Cq9FCFiwZGLMNEiVHpPUAVUNJ8KAkQwdYy%2FOSO36Bw6LRJVdZFzbIT6bhZdlbAH%2BSoPKRizu7WV6SocW7j4nsFyljnyj4zOuzia2ottI1TvCmPpjkU%2FVg%2FS1ApZhJ%2B8jqMVvqs6TYJ7ZrRQa3UA6v8lQOsq%2B9pI95Zlnu3uMtdw6srNagk0B15KmQT4A76vrt%2FAo5mH4WosPJczVrlSBxcRbsDyGyJG%2FD%2FdLvx2kscrUbJMDz3OsjAcn%2FT0NxOYmtAhULW4mI04K4BQ4fMiuJAib9dSxm1FMzdTZNp6Ysavz9nmYF5MoFY6PyRrFiv6m%2FSbx1yJXPtUNGf8%2BpAe6oXR5VYBg7VLztPm1%2B3aLKbBwC57cJlxXuUmXiD6nKzyTKIx6zWYrM2oTGSFgR4pRgwxjhRyHquGPHK6wa2DUErGMMvtrL0GOqUBhHu3Bum0%2BSYrdGCMBXrxmCGZtsTUaa%2FNBLiSiwfqp23PlbfhA%2BGQRrorqI0PZUjb3BSl0EQ548Wa9pvsoySm8zdv4BQY9PG7zU3OhfHdE9vAO0pfTjrT6BLmt%2F3qhYaEzXRDatqzxHOy04onBBFcWLKtqkUBiijBPSA02o3lxxsr0A5QDjrWpqGszqQ7m26VAxgJJsrn4ee%2BgAVwCTyEojJKTv4b&X-Amz-Signature=ba30674c08b3df2f2ff7e28a5ceaa622ca7ead3c66a50f32e4c39a571d6c5ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CTFVX5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfiKMN%2BPjIng1mF2QmXyGWz3MSaqqZRG6AT4ec76IIEAiEA%2BlDVDyHpaZwds65OFRWa%2Bir7E4cWrFG11edcH0hnHFoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuIWELElaUVNwSJkCrcA2TPQHCLkiaEAPwK%2By7xU%2BjVy0ZCmXjRLz0lmEpJFbv%2Ba%2BhPAs%2BaSUUDGN61H3fu%2Fd5oDyDN6sWa1sCKp2gouIa06J9Ei%2BXPF3wLWH7GKZXfex94g2jvxim%2FD465R2JChqIG8%2FWK7QeWTwg7H%2FAu1IeJ%2FVCvjlfeldL4oC9AmMxaDCTizxnWe8%2B3CL9LaXZN%2Bq8BYlRm0TybmUjR3Cq9FCFiwZGLMNEiVHpPUAVUNJ8KAkQwdYy%2FOSO36Bw6LRJVdZFzbIT6bhZdlbAH%2BSoPKRizu7WV6SocW7j4nsFyljnyj4zOuzia2ottI1TvCmPpjkU%2FVg%2FS1ApZhJ%2B8jqMVvqs6TYJ7ZrRQa3UA6v8lQOsq%2B9pI95Zlnu3uMtdw6srNagk0B15KmQT4A76vrt%2FAo5mH4WosPJczVrlSBxcRbsDyGyJG%2FD%2FdLvx2kscrUbJMDz3OsjAcn%2FT0NxOYmtAhULW4mI04K4BQ4fMiuJAib9dSxm1FMzdTZNp6Ysavz9nmYF5MoFY6PyRrFiv6m%2FSbx1yJXPtUNGf8%2BpAe6oXR5VYBg7VLztPm1%2B3aLKbBwC57cJlxXuUmXiD6nKzyTKIx6zWYrM2oTGSFgR4pRgwxjhRyHquGPHK6wa2DUErGMMvtrL0GOqUBhHu3Bum0%2BSYrdGCMBXrxmCGZtsTUaa%2FNBLiSiwfqp23PlbfhA%2BGQRrorqI0PZUjb3BSl0EQ548Wa9pvsoySm8zdv4BQY9PG7zU3OhfHdE9vAO0pfTjrT6BLmt%2F3qhYaEzXRDatqzxHOy04onBBFcWLKtqkUBiijBPSA02o3lxxsr0A5QDjrWpqGszqQ7m26VAxgJJsrn4ee%2BgAVwCTyEojJKTv4b&X-Amz-Signature=55af44ac9444ca5880c2ce94230938a96d7ab2819202287f3f8f1921d4c22cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CTFVX5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfiKMN%2BPjIng1mF2QmXyGWz3MSaqqZRG6AT4ec76IIEAiEA%2BlDVDyHpaZwds65OFRWa%2Bir7E4cWrFG11edcH0hnHFoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuIWELElaUVNwSJkCrcA2TPQHCLkiaEAPwK%2By7xU%2BjVy0ZCmXjRLz0lmEpJFbv%2Ba%2BhPAs%2BaSUUDGN61H3fu%2Fd5oDyDN6sWa1sCKp2gouIa06J9Ei%2BXPF3wLWH7GKZXfex94g2jvxim%2FD465R2JChqIG8%2FWK7QeWTwg7H%2FAu1IeJ%2FVCvjlfeldL4oC9AmMxaDCTizxnWe8%2B3CL9LaXZN%2Bq8BYlRm0TybmUjR3Cq9FCFiwZGLMNEiVHpPUAVUNJ8KAkQwdYy%2FOSO36Bw6LRJVdZFzbIT6bhZdlbAH%2BSoPKRizu7WV6SocW7j4nsFyljnyj4zOuzia2ottI1TvCmPpjkU%2FVg%2FS1ApZhJ%2B8jqMVvqs6TYJ7ZrRQa3UA6v8lQOsq%2B9pI95Zlnu3uMtdw6srNagk0B15KmQT4A76vrt%2FAo5mH4WosPJczVrlSBxcRbsDyGyJG%2FD%2FdLvx2kscrUbJMDz3OsjAcn%2FT0NxOYmtAhULW4mI04K4BQ4fMiuJAib9dSxm1FMzdTZNp6Ysavz9nmYF5MoFY6PyRrFiv6m%2FSbx1yJXPtUNGf8%2BpAe6oXR5VYBg7VLztPm1%2B3aLKbBwC57cJlxXuUmXiD6nKzyTKIx6zWYrM2oTGSFgR4pRgwxjhRyHquGPHK6wa2DUErGMMvtrL0GOqUBhHu3Bum0%2BSYrdGCMBXrxmCGZtsTUaa%2FNBLiSiwfqp23PlbfhA%2BGQRrorqI0PZUjb3BSl0EQ548Wa9pvsoySm8zdv4BQY9PG7zU3OhfHdE9vAO0pfTjrT6BLmt%2F3qhYaEzXRDatqzxHOy04onBBFcWLKtqkUBiijBPSA02o3lxxsr0A5QDjrWpqGszqQ7m26VAxgJJsrn4ee%2BgAVwCTyEojJKTv4b&X-Amz-Signature=15e70cd6d21e445299e78b42d2bd9a6f016721731c5bfbe4d16554150e7dac1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CTFVX5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfiKMN%2BPjIng1mF2QmXyGWz3MSaqqZRG6AT4ec76IIEAiEA%2BlDVDyHpaZwds65OFRWa%2Bir7E4cWrFG11edcH0hnHFoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuIWELElaUVNwSJkCrcA2TPQHCLkiaEAPwK%2By7xU%2BjVy0ZCmXjRLz0lmEpJFbv%2Ba%2BhPAs%2BaSUUDGN61H3fu%2Fd5oDyDN6sWa1sCKp2gouIa06J9Ei%2BXPF3wLWH7GKZXfex94g2jvxim%2FD465R2JChqIG8%2FWK7QeWTwg7H%2FAu1IeJ%2FVCvjlfeldL4oC9AmMxaDCTizxnWe8%2B3CL9LaXZN%2Bq8BYlRm0TybmUjR3Cq9FCFiwZGLMNEiVHpPUAVUNJ8KAkQwdYy%2FOSO36Bw6LRJVdZFzbIT6bhZdlbAH%2BSoPKRizu7WV6SocW7j4nsFyljnyj4zOuzia2ottI1TvCmPpjkU%2FVg%2FS1ApZhJ%2B8jqMVvqs6TYJ7ZrRQa3UA6v8lQOsq%2B9pI95Zlnu3uMtdw6srNagk0B15KmQT4A76vrt%2FAo5mH4WosPJczVrlSBxcRbsDyGyJG%2FD%2FdLvx2kscrUbJMDz3OsjAcn%2FT0NxOYmtAhULW4mI04K4BQ4fMiuJAib9dSxm1FMzdTZNp6Ysavz9nmYF5MoFY6PyRrFiv6m%2FSbx1yJXPtUNGf8%2BpAe6oXR5VYBg7VLztPm1%2B3aLKbBwC57cJlxXuUmXiD6nKzyTKIx6zWYrM2oTGSFgR4pRgwxjhRyHquGPHK6wa2DUErGMMvtrL0GOqUBhHu3Bum0%2BSYrdGCMBXrxmCGZtsTUaa%2FNBLiSiwfqp23PlbfhA%2BGQRrorqI0PZUjb3BSl0EQ548Wa9pvsoySm8zdv4BQY9PG7zU3OhfHdE9vAO0pfTjrT6BLmt%2F3qhYaEzXRDatqzxHOy04onBBFcWLKtqkUBiijBPSA02o3lxxsr0A5QDjrWpqGszqQ7m26VAxgJJsrn4ee%2BgAVwCTyEojJKTv4b&X-Amz-Signature=6ddd84df9c098f4d118154f3852cab265b94fe51aa52d8d52f8d1a4b7ca6d72b&X-Amz-SignedHeaders=host&x-id=GetObject)
