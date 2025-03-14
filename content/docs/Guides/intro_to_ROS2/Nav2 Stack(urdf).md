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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=4019a0e9853837f176c52f1840ccb4b69682dc2f55a4f19e3370e8134a74b15e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=0cd47e0760265a6cf66e4257f56142f629d0af21d9b6d79031bbc23c49ea3209&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=d41f1d4457b1e35eaa2a7cec4725d3abc1aeddfc3d20a8b73f1e627db0ef8325&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=8caddc3a4849e23532492bd572441b27a22c82a8f26ebd9b34bd0e130dfc5413&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=9c60583025c1bb1bd6ca4a1dcb2d7e7fea9373f15c5b052b9a2b390fdb2a8273&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6BNGIJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6qhpVinZvwWKJRLfLHh3QuIBEedFbn2t6S13h%2F6YdZAiBVlJT2ip6go0wApdiCadFC%2F7OBQAw%2BpdQeUNwzZDw8ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ToWxA6bIzcwRCBgKtwDuiqe8N4f6gWNqkYpLo9MboQvjRPoeGGlEJHwx5wwFCzaQz%2FeWAL5tY4pXoJMzj6BgNNOVxyeVAOKB89%2BgGT7BbZNppWxk3qreS47xR3Z0XCxMn3pcruHTs7fBWeanZ4QttziMmCNkvo02oPMFDRZU75WL5OlhQr%2B1asoAvqSz8Esihcfo9zaGtZWmEBV8jM7DiKIlz1Kcg2vHOwUAa6XzrVEfvy50OzDwOq1lo4OTRxtxKtiwhiCPGuosI6QEVaEKb%2FzsA87RWrSsF5PcD2%2F0aGr0NV1n1iIVz7SwiY1QMxrtNO56itUyoipPwR4JSKM6DSIfIAQfzeEn1MlFo%2Bd%2BrZ2Mc2iAnFnF3oRH4SUPrAhcRH2NOVEHgbhjtPnPg4VDmBTsK1OjbsXt6Crq56WmKzOd1j%2FQP3SDM8602lwwzDdBD5qZRg3Jt2ZjXXSMvMcn3lt5EFFu%2Bwe21XHYXSDEy3mBGFsKF7redhp3jMFOVDQ2haKzey3VX%2B6p6hfeBBsbP6djowdxB%2FZsZxPGH3YPX5NEMYpEd4gD4NyXTmTTydU322z2H5LtWno2E5C9VfuOtJSMs%2FKFEhCel4loRhixPay7gT%2BQmQNGyYcyNCASkZJLMExTTQ5ff4724cwzovPvgY6pgH16sXD5xMGx1RVZwTGpMXmPROATlZkbWD01P1roU0spmuPDlVu2AmdYCx7JiZIpL8MQ1VuSASAtoNmgBK4HvPnIehGtJp7DBHYeGjf5QHBqv0HYSVntTGZqaknPH91WcTSpt7RjVS6bi1%2By3dOSVPFK47Q7%2BaVBZ35iHhzbq7tcN7a7ofnDZDWQT6mvIj3fqxUgD1oo57%2B2Il8KkycrNt76td4IdIy&X-Amz-Signature=b75d251d55d529777c22527ce052f61b1b81e47a607a7f1d3716f8c7ca252cb0&X-Amz-SignedHeaders=host&x-id=GetObject)
