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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZZMN4B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwJTdXE%2BCG5Qe%2BFV6o%2FpIryDEOQpJk8lSrqQaMGXMF4AIhAJTucI5MnTMKSd8OAS6vBKGJh36jaImOWiDFBp8N4eI7Kv8DCBgQABoMNjM3NDIzMTgzODA1Igz3EfwhCddSgi%2BKG3Aq3ANdHg%2Bh0%2FWJjPiZVHNt%2Fq8YqyQLHhE%2B%2BbawVTSir3G0HKFYwoVW61ZUAyl8j0xQ3ZMF5DGEp9W%2FldTdaQpdChj6ti4AEZ0aiswLoDZiOOhD0pBgTq9yOXSFVCzoh4sKrIXj8su5R6pKcDOVTx1umQoZ69%2FMTpoy7%2FfBuU7g9klJIIp%2BnvsmcDprKACvG%2B%2B4xXm%2BSJV2eDwO5FbPUNeF%2BaPD97WC3tn5HdnB%2F74EV%2F1gJ47d6rxy8CVzaJaDxeqoxeYFzMHhRhGcgecn3Cji4tCnZTZJlbMcGKzv2gwW%2F7m%2BSejgzs8iGft%2Bjwc6t8Tb7pgv41SeyCGKYm17xzMqw%2BXRwFFVRH17R0sBSxwGAwENuMwNPwkXPMc7yGR2JbU7zaqSftXN%2FkgdzspgMaw1UzP4Z6wYura1fcFY4YZm4niiyHYDD5GFQOcMu5V3LStyaOPuE2xjpDP5YL8HelmVRPvsGTTvLycv53YMYQrjhSrSwiAkeIGYTIwgRQDC5LsKinmiiub0nk0ec6zyncMLQpU96nOaFbfHhLMNuxXbKOkXwL7aGLDQBX1u49tKE5sUbC3xvFrNH5hCceC8ucz3oIt%2FJe5K1C%2Bq%2FZhzesq0ZSZRavFWvmtMQNVe%2FWUHWTCkoPzBBjqkAQ3QYG91CkStrOFkw10hwt6sEHtmQX4QtjCpGTcNUOBrE%2FyXVCQpLJx4Gi05GqxSPOVE2%2FkNrU8Uj7TqT5vy%2F2CCHw9i5LdrIyxU4R7AaitJvwYOpEBgJeffo9ykmLd%2By6NbTqkjAISANthskRXD8tYuTtFg7dLIuS9nR9sMtwVPiaMF9atMBjfUzJcTgmENLb9jBa09kWDHz57iVaBjO9fhap1W&X-Amz-Signature=cc82a497d34d9cde8cd6d771051bc79be5bc1c4a1068544bfb5c2707c4b9236b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZZMN4B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwJTdXE%2BCG5Qe%2BFV6o%2FpIryDEOQpJk8lSrqQaMGXMF4AIhAJTucI5MnTMKSd8OAS6vBKGJh36jaImOWiDFBp8N4eI7Kv8DCBgQABoMNjM3NDIzMTgzODA1Igz3EfwhCddSgi%2BKG3Aq3ANdHg%2Bh0%2FWJjPiZVHNt%2Fq8YqyQLHhE%2B%2BbawVTSir3G0HKFYwoVW61ZUAyl8j0xQ3ZMF5DGEp9W%2FldTdaQpdChj6ti4AEZ0aiswLoDZiOOhD0pBgTq9yOXSFVCzoh4sKrIXj8su5R6pKcDOVTx1umQoZ69%2FMTpoy7%2FfBuU7g9klJIIp%2BnvsmcDprKACvG%2B%2B4xXm%2BSJV2eDwO5FbPUNeF%2BaPD97WC3tn5HdnB%2F74EV%2F1gJ47d6rxy8CVzaJaDxeqoxeYFzMHhRhGcgecn3Cji4tCnZTZJlbMcGKzv2gwW%2F7m%2BSejgzs8iGft%2Bjwc6t8Tb7pgv41SeyCGKYm17xzMqw%2BXRwFFVRH17R0sBSxwGAwENuMwNPwkXPMc7yGR2JbU7zaqSftXN%2FkgdzspgMaw1UzP4Z6wYura1fcFY4YZm4niiyHYDD5GFQOcMu5V3LStyaOPuE2xjpDP5YL8HelmVRPvsGTTvLycv53YMYQrjhSrSwiAkeIGYTIwgRQDC5LsKinmiiub0nk0ec6zyncMLQpU96nOaFbfHhLMNuxXbKOkXwL7aGLDQBX1u49tKE5sUbC3xvFrNH5hCceC8ucz3oIt%2FJe5K1C%2Bq%2FZhzesq0ZSZRavFWvmtMQNVe%2FWUHWTCkoPzBBjqkAQ3QYG91CkStrOFkw10hwt6sEHtmQX4QtjCpGTcNUOBrE%2FyXVCQpLJx4Gi05GqxSPOVE2%2FkNrU8Uj7TqT5vy%2F2CCHw9i5LdrIyxU4R7AaitJvwYOpEBgJeffo9ykmLd%2By6NbTqkjAISANthskRXD8tYuTtFg7dLIuS9nR9sMtwVPiaMF9atMBjfUzJcTgmENLb9jBa09kWDHz57iVaBjO9fhap1W&X-Amz-Signature=83104a4329486121fa726f30e51f3dac88b7cf2d1af00d95a6fb1a31e26b74d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZZMN4B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwJTdXE%2BCG5Qe%2BFV6o%2FpIryDEOQpJk8lSrqQaMGXMF4AIhAJTucI5MnTMKSd8OAS6vBKGJh36jaImOWiDFBp8N4eI7Kv8DCBgQABoMNjM3NDIzMTgzODA1Igz3EfwhCddSgi%2BKG3Aq3ANdHg%2Bh0%2FWJjPiZVHNt%2Fq8YqyQLHhE%2B%2BbawVTSir3G0HKFYwoVW61ZUAyl8j0xQ3ZMF5DGEp9W%2FldTdaQpdChj6ti4AEZ0aiswLoDZiOOhD0pBgTq9yOXSFVCzoh4sKrIXj8su5R6pKcDOVTx1umQoZ69%2FMTpoy7%2FfBuU7g9klJIIp%2BnvsmcDprKACvG%2B%2B4xXm%2BSJV2eDwO5FbPUNeF%2BaPD97WC3tn5HdnB%2F74EV%2F1gJ47d6rxy8CVzaJaDxeqoxeYFzMHhRhGcgecn3Cji4tCnZTZJlbMcGKzv2gwW%2F7m%2BSejgzs8iGft%2Bjwc6t8Tb7pgv41SeyCGKYm17xzMqw%2BXRwFFVRH17R0sBSxwGAwENuMwNPwkXPMc7yGR2JbU7zaqSftXN%2FkgdzspgMaw1UzP4Z6wYura1fcFY4YZm4niiyHYDD5GFQOcMu5V3LStyaOPuE2xjpDP5YL8HelmVRPvsGTTvLycv53YMYQrjhSrSwiAkeIGYTIwgRQDC5LsKinmiiub0nk0ec6zyncMLQpU96nOaFbfHhLMNuxXbKOkXwL7aGLDQBX1u49tKE5sUbC3xvFrNH5hCceC8ucz3oIt%2FJe5K1C%2Bq%2FZhzesq0ZSZRavFWvmtMQNVe%2FWUHWTCkoPzBBjqkAQ3QYG91CkStrOFkw10hwt6sEHtmQX4QtjCpGTcNUOBrE%2FyXVCQpLJx4Gi05GqxSPOVE2%2FkNrU8Uj7TqT5vy%2F2CCHw9i5LdrIyxU4R7AaitJvwYOpEBgJeffo9ykmLd%2By6NbTqkjAISANthskRXD8tYuTtFg7dLIuS9nR9sMtwVPiaMF9atMBjfUzJcTgmENLb9jBa09kWDHz57iVaBjO9fhap1W&X-Amz-Signature=829b38db07072a5d7f077d666eeffacf11c30fff21f31baf1ef8aaf53d256962&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZZMN4B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwJTdXE%2BCG5Qe%2BFV6o%2FpIryDEOQpJk8lSrqQaMGXMF4AIhAJTucI5MnTMKSd8OAS6vBKGJh36jaImOWiDFBp8N4eI7Kv8DCBgQABoMNjM3NDIzMTgzODA1Igz3EfwhCddSgi%2BKG3Aq3ANdHg%2Bh0%2FWJjPiZVHNt%2Fq8YqyQLHhE%2B%2BbawVTSir3G0HKFYwoVW61ZUAyl8j0xQ3ZMF5DGEp9W%2FldTdaQpdChj6ti4AEZ0aiswLoDZiOOhD0pBgTq9yOXSFVCzoh4sKrIXj8su5R6pKcDOVTx1umQoZ69%2FMTpoy7%2FfBuU7g9klJIIp%2BnvsmcDprKACvG%2B%2B4xXm%2BSJV2eDwO5FbPUNeF%2BaPD97WC3tn5HdnB%2F74EV%2F1gJ47d6rxy8CVzaJaDxeqoxeYFzMHhRhGcgecn3Cji4tCnZTZJlbMcGKzv2gwW%2F7m%2BSejgzs8iGft%2Bjwc6t8Tb7pgv41SeyCGKYm17xzMqw%2BXRwFFVRH17R0sBSxwGAwENuMwNPwkXPMc7yGR2JbU7zaqSftXN%2FkgdzspgMaw1UzP4Z6wYura1fcFY4YZm4niiyHYDD5GFQOcMu5V3LStyaOPuE2xjpDP5YL8HelmVRPvsGTTvLycv53YMYQrjhSrSwiAkeIGYTIwgRQDC5LsKinmiiub0nk0ec6zyncMLQpU96nOaFbfHhLMNuxXbKOkXwL7aGLDQBX1u49tKE5sUbC3xvFrNH5hCceC8ucz3oIt%2FJe5K1C%2Bq%2FZhzesq0ZSZRavFWvmtMQNVe%2FWUHWTCkoPzBBjqkAQ3QYG91CkStrOFkw10hwt6sEHtmQX4QtjCpGTcNUOBrE%2FyXVCQpLJx4Gi05GqxSPOVE2%2FkNrU8Uj7TqT5vy%2F2CCHw9i5LdrIyxU4R7AaitJvwYOpEBgJeffo9ykmLd%2By6NbTqkjAISANthskRXD8tYuTtFg7dLIuS9nR9sMtwVPiaMF9atMBjfUzJcTgmENLb9jBa09kWDHz57iVaBjO9fhap1W&X-Amz-Signature=f6ef47dc0bcb58e9cea3a26cde6e69f476f0cbd6b23b35061ba82e9d09a4c1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZZMN4B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwJTdXE%2BCG5Qe%2BFV6o%2FpIryDEOQpJk8lSrqQaMGXMF4AIhAJTucI5MnTMKSd8OAS6vBKGJh36jaImOWiDFBp8N4eI7Kv8DCBgQABoMNjM3NDIzMTgzODA1Igz3EfwhCddSgi%2BKG3Aq3ANdHg%2Bh0%2FWJjPiZVHNt%2Fq8YqyQLHhE%2B%2BbawVTSir3G0HKFYwoVW61ZUAyl8j0xQ3ZMF5DGEp9W%2FldTdaQpdChj6ti4AEZ0aiswLoDZiOOhD0pBgTq9yOXSFVCzoh4sKrIXj8su5R6pKcDOVTx1umQoZ69%2FMTpoy7%2FfBuU7g9klJIIp%2BnvsmcDprKACvG%2B%2B4xXm%2BSJV2eDwO5FbPUNeF%2BaPD97WC3tn5HdnB%2F74EV%2F1gJ47d6rxy8CVzaJaDxeqoxeYFzMHhRhGcgecn3Cji4tCnZTZJlbMcGKzv2gwW%2F7m%2BSejgzs8iGft%2Bjwc6t8Tb7pgv41SeyCGKYm17xzMqw%2BXRwFFVRH17R0sBSxwGAwENuMwNPwkXPMc7yGR2JbU7zaqSftXN%2FkgdzspgMaw1UzP4Z6wYura1fcFY4YZm4niiyHYDD5GFQOcMu5V3LStyaOPuE2xjpDP5YL8HelmVRPvsGTTvLycv53YMYQrjhSrSwiAkeIGYTIwgRQDC5LsKinmiiub0nk0ec6zyncMLQpU96nOaFbfHhLMNuxXbKOkXwL7aGLDQBX1u49tKE5sUbC3xvFrNH5hCceC8ucz3oIt%2FJe5K1C%2Bq%2FZhzesq0ZSZRavFWvmtMQNVe%2FWUHWTCkoPzBBjqkAQ3QYG91CkStrOFkw10hwt6sEHtmQX4QtjCpGTcNUOBrE%2FyXVCQpLJx4Gi05GqxSPOVE2%2FkNrU8Uj7TqT5vy%2F2CCHw9i5LdrIyxU4R7AaitJvwYOpEBgJeffo9ykmLd%2By6NbTqkjAISANthskRXD8tYuTtFg7dLIuS9nR9sMtwVPiaMF9atMBjfUzJcTgmENLb9jBa09kWDHz57iVaBjO9fhap1W&X-Amz-Signature=d5a20524a3a80a8bb559b713e0c667e29a592049ff15fac83fe10cb7dbd0a1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZZMN4B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDwJTdXE%2BCG5Qe%2BFV6o%2FpIryDEOQpJk8lSrqQaMGXMF4AIhAJTucI5MnTMKSd8OAS6vBKGJh36jaImOWiDFBp8N4eI7Kv8DCBgQABoMNjM3NDIzMTgzODA1Igz3EfwhCddSgi%2BKG3Aq3ANdHg%2Bh0%2FWJjPiZVHNt%2Fq8YqyQLHhE%2B%2BbawVTSir3G0HKFYwoVW61ZUAyl8j0xQ3ZMF5DGEp9W%2FldTdaQpdChj6ti4AEZ0aiswLoDZiOOhD0pBgTq9yOXSFVCzoh4sKrIXj8su5R6pKcDOVTx1umQoZ69%2FMTpoy7%2FfBuU7g9klJIIp%2BnvsmcDprKACvG%2B%2B4xXm%2BSJV2eDwO5FbPUNeF%2BaPD97WC3tn5HdnB%2F74EV%2F1gJ47d6rxy8CVzaJaDxeqoxeYFzMHhRhGcgecn3Cji4tCnZTZJlbMcGKzv2gwW%2F7m%2BSejgzs8iGft%2Bjwc6t8Tb7pgv41SeyCGKYm17xzMqw%2BXRwFFVRH17R0sBSxwGAwENuMwNPwkXPMc7yGR2JbU7zaqSftXN%2FkgdzspgMaw1UzP4Z6wYura1fcFY4YZm4niiyHYDD5GFQOcMu5V3LStyaOPuE2xjpDP5YL8HelmVRPvsGTTvLycv53YMYQrjhSrSwiAkeIGYTIwgRQDC5LsKinmiiub0nk0ec6zyncMLQpU96nOaFbfHhLMNuxXbKOkXwL7aGLDQBX1u49tKE5sUbC3xvFrNH5hCceC8ucz3oIt%2FJe5K1C%2Bq%2FZhzesq0ZSZRavFWvmtMQNVe%2FWUHWTCkoPzBBjqkAQ3QYG91CkStrOFkw10hwt6sEHtmQX4QtjCpGTcNUOBrE%2FyXVCQpLJx4Gi05GqxSPOVE2%2FkNrU8Uj7TqT5vy%2F2CCHw9i5LdrIyxU4R7AaitJvwYOpEBgJeffo9ykmLd%2By6NbTqkjAISANthskRXD8tYuTtFg7dLIuS9nR9sMtwVPiaMF9atMBjfUzJcTgmENLb9jBa09kWDHz57iVaBjO9fhap1W&X-Amz-Signature=524d9a3a6b7aa4b7e224090d73193c502b3472eb1e03969f05689c27223b2167&X-Amz-SignedHeaders=host&x-id=GetObject)
