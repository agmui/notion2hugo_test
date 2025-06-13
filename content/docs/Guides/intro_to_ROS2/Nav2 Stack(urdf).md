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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHWEDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAj2C3SRytuzw5BMOkzOK%2B9gPseJS6GJ5JS3V4uBJVZKAiB%2FkUcVeq1hootXtkW8AO1HF%2BpQgv5FABp5XhZbFF%2BRCyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMt7%2F23KzWlK%2F9Vy9%2BKtwDFT53YZewKUQ2ypvRYY9sFe8c93oKAKTqhJwHfW2%2B6GW1fc2BhKuWrEZsJR4Qp5oxkviMtKxbDeesakmiW571W6oYVvxXcgl62byNMsCuODinNcl95fPm%2F8UZ6%2BRZHdblWB1AiE3fXyor6%2F304nsS43TJTWbeXSpvzuFZQmwa%2FL18RHQ7EpayP06krzgSdQ%2BSE4Zm5HjvkddzhXjEm%2BS%2FmebF8Vzll%2FksI2heTpz%2F48zrSlis0LxPvNiuAGPUMHgH0eLCd7%2F5Mbenryd7W2eOrkPX7Lc%2BavagxDwM4Uj0nqoGs2kJbqW4MAhg5%2BO9MVK4Kw71pY%2BgU0NeoPCNbeqgs1n5s2hXpOcmeRdWHw4oPtPqAMYaKywPrZrDUbKFECutRFdqw5VKxzgVehJg%2BS6p51Hcu%2BxIOpFXiJmNuHgPjOzKER9GXpetenP%2BRUnVBb%2FPWDVpKeKFv%2BrSwTjfPq3AeKzSevBFut3WA6m6Q%2BZmWRA0d%2BkChvvzU6TNGT2Ns9gyRWqSL6dlloC92bbmgMSAukCJsqLOKOG6qbaOXnz1p1XTtmDtKWkvF%2BIchS6T%2FaAdSVnRXj%2B0p0oyzorGZ2Wl62QTtE6tB29KkX5Zm348URFpU%2BmRECKwifODHx8w4ZaxwgY6pgHalx4MRfbuJ8Z3fygFaBNVU3jTh%2Fj7eciR41TrkIdjw9QaRQYngTl63brB11xKZ%2BVGWUC9BVt0ziueOB9Q4hYPmPXx1ADYEQ8BlUzE4eW242IU4S56I%2B0fLXsmAaA%2BndgPXWnSygSAVmLGTwj%2BJUrH6%2FGtXHhdmRpg235TcA36NEbOyTuDlU26Dz1%2FAi9MLIZHQG6gsa7%2BriNT7hk5y87Rc4MbeXyQ&X-Amz-Signature=aaf66a4a914b89b79041ae2f2f66568f0c116f2fa3868d885de5fdd39307c3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHWEDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAj2C3SRytuzw5BMOkzOK%2B9gPseJS6GJ5JS3V4uBJVZKAiB%2FkUcVeq1hootXtkW8AO1HF%2BpQgv5FABp5XhZbFF%2BRCyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMt7%2F23KzWlK%2F9Vy9%2BKtwDFT53YZewKUQ2ypvRYY9sFe8c93oKAKTqhJwHfW2%2B6GW1fc2BhKuWrEZsJR4Qp5oxkviMtKxbDeesakmiW571W6oYVvxXcgl62byNMsCuODinNcl95fPm%2F8UZ6%2BRZHdblWB1AiE3fXyor6%2F304nsS43TJTWbeXSpvzuFZQmwa%2FL18RHQ7EpayP06krzgSdQ%2BSE4Zm5HjvkddzhXjEm%2BS%2FmebF8Vzll%2FksI2heTpz%2F48zrSlis0LxPvNiuAGPUMHgH0eLCd7%2F5Mbenryd7W2eOrkPX7Lc%2BavagxDwM4Uj0nqoGs2kJbqW4MAhg5%2BO9MVK4Kw71pY%2BgU0NeoPCNbeqgs1n5s2hXpOcmeRdWHw4oPtPqAMYaKywPrZrDUbKFECutRFdqw5VKxzgVehJg%2BS6p51Hcu%2BxIOpFXiJmNuHgPjOzKER9GXpetenP%2BRUnVBb%2FPWDVpKeKFv%2BrSwTjfPq3AeKzSevBFut3WA6m6Q%2BZmWRA0d%2BkChvvzU6TNGT2Ns9gyRWqSL6dlloC92bbmgMSAukCJsqLOKOG6qbaOXnz1p1XTtmDtKWkvF%2BIchS6T%2FaAdSVnRXj%2B0p0oyzorGZ2Wl62QTtE6tB29KkX5Zm348URFpU%2BmRECKwifODHx8w4ZaxwgY6pgHalx4MRfbuJ8Z3fygFaBNVU3jTh%2Fj7eciR41TrkIdjw9QaRQYngTl63brB11xKZ%2BVGWUC9BVt0ziueOB9Q4hYPmPXx1ADYEQ8BlUzE4eW242IU4S56I%2B0fLXsmAaA%2BndgPXWnSygSAVmLGTwj%2BJUrH6%2FGtXHhdmRpg235TcA36NEbOyTuDlU26Dz1%2FAi9MLIZHQG6gsa7%2BriNT7hk5y87Rc4MbeXyQ&X-Amz-Signature=85f3f1f4cb2749608e0693ec3873bb92330de150d50d335e2f7cdef1174419de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHWEDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAj2C3SRytuzw5BMOkzOK%2B9gPseJS6GJ5JS3V4uBJVZKAiB%2FkUcVeq1hootXtkW8AO1HF%2BpQgv5FABp5XhZbFF%2BRCyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMt7%2F23KzWlK%2F9Vy9%2BKtwDFT53YZewKUQ2ypvRYY9sFe8c93oKAKTqhJwHfW2%2B6GW1fc2BhKuWrEZsJR4Qp5oxkviMtKxbDeesakmiW571W6oYVvxXcgl62byNMsCuODinNcl95fPm%2F8UZ6%2BRZHdblWB1AiE3fXyor6%2F304nsS43TJTWbeXSpvzuFZQmwa%2FL18RHQ7EpayP06krzgSdQ%2BSE4Zm5HjvkddzhXjEm%2BS%2FmebF8Vzll%2FksI2heTpz%2F48zrSlis0LxPvNiuAGPUMHgH0eLCd7%2F5Mbenryd7W2eOrkPX7Lc%2BavagxDwM4Uj0nqoGs2kJbqW4MAhg5%2BO9MVK4Kw71pY%2BgU0NeoPCNbeqgs1n5s2hXpOcmeRdWHw4oPtPqAMYaKywPrZrDUbKFECutRFdqw5VKxzgVehJg%2BS6p51Hcu%2BxIOpFXiJmNuHgPjOzKER9GXpetenP%2BRUnVBb%2FPWDVpKeKFv%2BrSwTjfPq3AeKzSevBFut3WA6m6Q%2BZmWRA0d%2BkChvvzU6TNGT2Ns9gyRWqSL6dlloC92bbmgMSAukCJsqLOKOG6qbaOXnz1p1XTtmDtKWkvF%2BIchS6T%2FaAdSVnRXj%2B0p0oyzorGZ2Wl62QTtE6tB29KkX5Zm348URFpU%2BmRECKwifODHx8w4ZaxwgY6pgHalx4MRfbuJ8Z3fygFaBNVU3jTh%2Fj7eciR41TrkIdjw9QaRQYngTl63brB11xKZ%2BVGWUC9BVt0ziueOB9Q4hYPmPXx1ADYEQ8BlUzE4eW242IU4S56I%2B0fLXsmAaA%2BndgPXWnSygSAVmLGTwj%2BJUrH6%2FGtXHhdmRpg235TcA36NEbOyTuDlU26Dz1%2FAi9MLIZHQG6gsa7%2BriNT7hk5y87Rc4MbeXyQ&X-Amz-Signature=ed0476da81a847d15c2a4815d56f383cbed84420a6cf8a475cbf15478da631d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHWEDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAj2C3SRytuzw5BMOkzOK%2B9gPseJS6GJ5JS3V4uBJVZKAiB%2FkUcVeq1hootXtkW8AO1HF%2BpQgv5FABp5XhZbFF%2BRCyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMt7%2F23KzWlK%2F9Vy9%2BKtwDFT53YZewKUQ2ypvRYY9sFe8c93oKAKTqhJwHfW2%2B6GW1fc2BhKuWrEZsJR4Qp5oxkviMtKxbDeesakmiW571W6oYVvxXcgl62byNMsCuODinNcl95fPm%2F8UZ6%2BRZHdblWB1AiE3fXyor6%2F304nsS43TJTWbeXSpvzuFZQmwa%2FL18RHQ7EpayP06krzgSdQ%2BSE4Zm5HjvkddzhXjEm%2BS%2FmebF8Vzll%2FksI2heTpz%2F48zrSlis0LxPvNiuAGPUMHgH0eLCd7%2F5Mbenryd7W2eOrkPX7Lc%2BavagxDwM4Uj0nqoGs2kJbqW4MAhg5%2BO9MVK4Kw71pY%2BgU0NeoPCNbeqgs1n5s2hXpOcmeRdWHw4oPtPqAMYaKywPrZrDUbKFECutRFdqw5VKxzgVehJg%2BS6p51Hcu%2BxIOpFXiJmNuHgPjOzKER9GXpetenP%2BRUnVBb%2FPWDVpKeKFv%2BrSwTjfPq3AeKzSevBFut3WA6m6Q%2BZmWRA0d%2BkChvvzU6TNGT2Ns9gyRWqSL6dlloC92bbmgMSAukCJsqLOKOG6qbaOXnz1p1XTtmDtKWkvF%2BIchS6T%2FaAdSVnRXj%2B0p0oyzorGZ2Wl62QTtE6tB29KkX5Zm348URFpU%2BmRECKwifODHx8w4ZaxwgY6pgHalx4MRfbuJ8Z3fygFaBNVU3jTh%2Fj7eciR41TrkIdjw9QaRQYngTl63brB11xKZ%2BVGWUC9BVt0ziueOB9Q4hYPmPXx1ADYEQ8BlUzE4eW242IU4S56I%2B0fLXsmAaA%2BndgPXWnSygSAVmLGTwj%2BJUrH6%2FGtXHhdmRpg235TcA36NEbOyTuDlU26Dz1%2FAi9MLIZHQG6gsa7%2BriNT7hk5y87Rc4MbeXyQ&X-Amz-Signature=50e692ca37e42fb38354676e91ebaf67bb9f0bc5ee534f6a06f5166fc45cb633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHWEDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAj2C3SRytuzw5BMOkzOK%2B9gPseJS6GJ5JS3V4uBJVZKAiB%2FkUcVeq1hootXtkW8AO1HF%2BpQgv5FABp5XhZbFF%2BRCyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMt7%2F23KzWlK%2F9Vy9%2BKtwDFT53YZewKUQ2ypvRYY9sFe8c93oKAKTqhJwHfW2%2B6GW1fc2BhKuWrEZsJR4Qp5oxkviMtKxbDeesakmiW571W6oYVvxXcgl62byNMsCuODinNcl95fPm%2F8UZ6%2BRZHdblWB1AiE3fXyor6%2F304nsS43TJTWbeXSpvzuFZQmwa%2FL18RHQ7EpayP06krzgSdQ%2BSE4Zm5HjvkddzhXjEm%2BS%2FmebF8Vzll%2FksI2heTpz%2F48zrSlis0LxPvNiuAGPUMHgH0eLCd7%2F5Mbenryd7W2eOrkPX7Lc%2BavagxDwM4Uj0nqoGs2kJbqW4MAhg5%2BO9MVK4Kw71pY%2BgU0NeoPCNbeqgs1n5s2hXpOcmeRdWHw4oPtPqAMYaKywPrZrDUbKFECutRFdqw5VKxzgVehJg%2BS6p51Hcu%2BxIOpFXiJmNuHgPjOzKER9GXpetenP%2BRUnVBb%2FPWDVpKeKFv%2BrSwTjfPq3AeKzSevBFut3WA6m6Q%2BZmWRA0d%2BkChvvzU6TNGT2Ns9gyRWqSL6dlloC92bbmgMSAukCJsqLOKOG6qbaOXnz1p1XTtmDtKWkvF%2BIchS6T%2FaAdSVnRXj%2B0p0oyzorGZ2Wl62QTtE6tB29KkX5Zm348URFpU%2BmRECKwifODHx8w4ZaxwgY6pgHalx4MRfbuJ8Z3fygFaBNVU3jTh%2Fj7eciR41TrkIdjw9QaRQYngTl63brB11xKZ%2BVGWUC9BVt0ziueOB9Q4hYPmPXx1ADYEQ8BlUzE4eW242IU4S56I%2B0fLXsmAaA%2BndgPXWnSygSAVmLGTwj%2BJUrH6%2FGtXHhdmRpg235TcA36NEbOyTuDlU26Dz1%2FAi9MLIZHQG6gsa7%2BriNT7hk5y87Rc4MbeXyQ&X-Amz-Signature=00de7136fb7912aa631c9b34f03ac4b837cc17cf6d4b6f54a7dc8c7a0aa5a336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTHWEDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIAj2C3SRytuzw5BMOkzOK%2B9gPseJS6GJ5JS3V4uBJVZKAiB%2FkUcVeq1hootXtkW8AO1HF%2BpQgv5FABp5XhZbFF%2BRCyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMt7%2F23KzWlK%2F9Vy9%2BKtwDFT53YZewKUQ2ypvRYY9sFe8c93oKAKTqhJwHfW2%2B6GW1fc2BhKuWrEZsJR4Qp5oxkviMtKxbDeesakmiW571W6oYVvxXcgl62byNMsCuODinNcl95fPm%2F8UZ6%2BRZHdblWB1AiE3fXyor6%2F304nsS43TJTWbeXSpvzuFZQmwa%2FL18RHQ7EpayP06krzgSdQ%2BSE4Zm5HjvkddzhXjEm%2BS%2FmebF8Vzll%2FksI2heTpz%2F48zrSlis0LxPvNiuAGPUMHgH0eLCd7%2F5Mbenryd7W2eOrkPX7Lc%2BavagxDwM4Uj0nqoGs2kJbqW4MAhg5%2BO9MVK4Kw71pY%2BgU0NeoPCNbeqgs1n5s2hXpOcmeRdWHw4oPtPqAMYaKywPrZrDUbKFECutRFdqw5VKxzgVehJg%2BS6p51Hcu%2BxIOpFXiJmNuHgPjOzKER9GXpetenP%2BRUnVBb%2FPWDVpKeKFv%2BrSwTjfPq3AeKzSevBFut3WA6m6Q%2BZmWRA0d%2BkChvvzU6TNGT2Ns9gyRWqSL6dlloC92bbmgMSAukCJsqLOKOG6qbaOXnz1p1XTtmDtKWkvF%2BIchS6T%2FaAdSVnRXj%2B0p0oyzorGZ2Wl62QTtE6tB29KkX5Zm348URFpU%2BmRECKwifODHx8w4ZaxwgY6pgHalx4MRfbuJ8Z3fygFaBNVU3jTh%2Fj7eciR41TrkIdjw9QaRQYngTl63brB11xKZ%2BVGWUC9BVt0ziueOB9Q4hYPmPXx1ADYEQ8BlUzE4eW242IU4S56I%2B0fLXsmAaA%2BndgPXWnSygSAVmLGTwj%2BJUrH6%2FGtXHhdmRpg235TcA36NEbOyTuDlU26Dz1%2FAi9MLIZHQG6gsa7%2BriNT7hk5y87Rc4MbeXyQ&X-Amz-Signature=7c2b5efbed4c72f87181cfe2c73bf855dac87baea9b7f293590660266c428bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
