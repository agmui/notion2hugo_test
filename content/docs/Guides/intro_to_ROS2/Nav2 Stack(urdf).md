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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPHCEHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTdApAck5ky2jqanVa6by0oQ%2B5grxAPE44Fe7qB7GNIwIgBI2JxEOv2exreeYADXbMlVsBbcwztAOF%2Bs4aeJ9QZIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF%2FadjOSSfeye9hY1ircA0VS3IteaXGT4W%2BT%2Fq5Lx3Eo2YYE8ByFH9h%2B%2FljM87nDnUVwORDd371uzmVcl4Yg68wl%2BgYB1nE33Ypdgy4D3Q3cCTTXMRaGzpVRNHyTKdbIjsohR1EN%2FHgacPoLojVGfd%2Fff6AxuCR1ikjjBo%2B8L%2BovW9xeFd1tIY7Gl4CxCYZVtrAgL9coe4NOInR6jHMsOBNqMKdqGCijNn0qQhGdddwYIKtA8lb%2Fsj5RB90Usx7SK0QyqsYh0dJvb73oC6MMw12aXiAwsnaUFbHuLdsAN%2FDzXlwEF5aE6Fn6jWT9KsftQzovzqy3JNgsNZzj1TSAMCjpl4yWQCuEM5pGbDY6OE3BRihnF6UzkMrCbDGnpLp9xzwZeZbLvNJIRq4P4jSx96JkQro0%2BeuJPIL%2FkMTvvQDZVJAi2v7IQSJjzBs9%2BeTKE8GAp0MLtlhP%2FtS8L2v5bRhrjKdboYdWOl7sSCXdYAwTXRPjGtaibjDGuoDYXPyeGT%2BcD2mLURPXh3LDtM2qBA%2FvR3idmIz6NNoZTge%2Fnb58QH4MtQOCgJZjLemT9xogr3jUQLy4tdiICvQjQbDJEmE5IOc0Ot6FAmK%2FCQqbggbxboPgNeTSloOmIlgANi8umJUYPxceeUFFLCMUMNXJqcMGOqUBFV2Geh%2FJDWGxIGNaJUyl%2BTfecEHu9JGiy1irDRBAKUIGVpJU0ng3YaJ8ZEoudnOzmMuH0kkmeubf2V4myxS5jjaSz0D%2FFcVgEETzFU0kho3sNcIcuytNcCLHxdeLeIUWf%2BHIVi4%2BjaWS7lUmST9V504emcIVTPWcH3HZiAOUY%2FGYGXYJvpReEO0Df24%2BDsCA5iUQU9SGBtliq%2B8nha4AKU%2FH8Eth&X-Amz-Signature=48725d52b92c9cb5dce128d45013b91458b95b4afd393471e0a79fdd8dcce977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPHCEHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTdApAck5ky2jqanVa6by0oQ%2B5grxAPE44Fe7qB7GNIwIgBI2JxEOv2exreeYADXbMlVsBbcwztAOF%2Bs4aeJ9QZIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF%2FadjOSSfeye9hY1ircA0VS3IteaXGT4W%2BT%2Fq5Lx3Eo2YYE8ByFH9h%2B%2FljM87nDnUVwORDd371uzmVcl4Yg68wl%2BgYB1nE33Ypdgy4D3Q3cCTTXMRaGzpVRNHyTKdbIjsohR1EN%2FHgacPoLojVGfd%2Fff6AxuCR1ikjjBo%2B8L%2BovW9xeFd1tIY7Gl4CxCYZVtrAgL9coe4NOInR6jHMsOBNqMKdqGCijNn0qQhGdddwYIKtA8lb%2Fsj5RB90Usx7SK0QyqsYh0dJvb73oC6MMw12aXiAwsnaUFbHuLdsAN%2FDzXlwEF5aE6Fn6jWT9KsftQzovzqy3JNgsNZzj1TSAMCjpl4yWQCuEM5pGbDY6OE3BRihnF6UzkMrCbDGnpLp9xzwZeZbLvNJIRq4P4jSx96JkQro0%2BeuJPIL%2FkMTvvQDZVJAi2v7IQSJjzBs9%2BeTKE8GAp0MLtlhP%2FtS8L2v5bRhrjKdboYdWOl7sSCXdYAwTXRPjGtaibjDGuoDYXPyeGT%2BcD2mLURPXh3LDtM2qBA%2FvR3idmIz6NNoZTge%2Fnb58QH4MtQOCgJZjLemT9xogr3jUQLy4tdiICvQjQbDJEmE5IOc0Ot6FAmK%2FCQqbggbxboPgNeTSloOmIlgANi8umJUYPxceeUFFLCMUMNXJqcMGOqUBFV2Geh%2FJDWGxIGNaJUyl%2BTfecEHu9JGiy1irDRBAKUIGVpJU0ng3YaJ8ZEoudnOzmMuH0kkmeubf2V4myxS5jjaSz0D%2FFcVgEETzFU0kho3sNcIcuytNcCLHxdeLeIUWf%2BHIVi4%2BjaWS7lUmST9V504emcIVTPWcH3HZiAOUY%2FGYGXYJvpReEO0Df24%2BDsCA5iUQU9SGBtliq%2B8nha4AKU%2FH8Eth&X-Amz-Signature=b3fbf951c38205b809717e0bf623d593637baa39e500049f1f137f7c9355b298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPHCEHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTdApAck5ky2jqanVa6by0oQ%2B5grxAPE44Fe7qB7GNIwIgBI2JxEOv2exreeYADXbMlVsBbcwztAOF%2Bs4aeJ9QZIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF%2FadjOSSfeye9hY1ircA0VS3IteaXGT4W%2BT%2Fq5Lx3Eo2YYE8ByFH9h%2B%2FljM87nDnUVwORDd371uzmVcl4Yg68wl%2BgYB1nE33Ypdgy4D3Q3cCTTXMRaGzpVRNHyTKdbIjsohR1EN%2FHgacPoLojVGfd%2Fff6AxuCR1ikjjBo%2B8L%2BovW9xeFd1tIY7Gl4CxCYZVtrAgL9coe4NOInR6jHMsOBNqMKdqGCijNn0qQhGdddwYIKtA8lb%2Fsj5RB90Usx7SK0QyqsYh0dJvb73oC6MMw12aXiAwsnaUFbHuLdsAN%2FDzXlwEF5aE6Fn6jWT9KsftQzovzqy3JNgsNZzj1TSAMCjpl4yWQCuEM5pGbDY6OE3BRihnF6UzkMrCbDGnpLp9xzwZeZbLvNJIRq4P4jSx96JkQro0%2BeuJPIL%2FkMTvvQDZVJAi2v7IQSJjzBs9%2BeTKE8GAp0MLtlhP%2FtS8L2v5bRhrjKdboYdWOl7sSCXdYAwTXRPjGtaibjDGuoDYXPyeGT%2BcD2mLURPXh3LDtM2qBA%2FvR3idmIz6NNoZTge%2Fnb58QH4MtQOCgJZjLemT9xogr3jUQLy4tdiICvQjQbDJEmE5IOc0Ot6FAmK%2FCQqbggbxboPgNeTSloOmIlgANi8umJUYPxceeUFFLCMUMNXJqcMGOqUBFV2Geh%2FJDWGxIGNaJUyl%2BTfecEHu9JGiy1irDRBAKUIGVpJU0ng3YaJ8ZEoudnOzmMuH0kkmeubf2V4myxS5jjaSz0D%2FFcVgEETzFU0kho3sNcIcuytNcCLHxdeLeIUWf%2BHIVi4%2BjaWS7lUmST9V504emcIVTPWcH3HZiAOUY%2FGYGXYJvpReEO0Df24%2BDsCA5iUQU9SGBtliq%2B8nha4AKU%2FH8Eth&X-Amz-Signature=5155bd052618ce11380352f01879d124b6f14a52d65289e9bb06f73011991c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPHCEHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTdApAck5ky2jqanVa6by0oQ%2B5grxAPE44Fe7qB7GNIwIgBI2JxEOv2exreeYADXbMlVsBbcwztAOF%2Bs4aeJ9QZIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF%2FadjOSSfeye9hY1ircA0VS3IteaXGT4W%2BT%2Fq5Lx3Eo2YYE8ByFH9h%2B%2FljM87nDnUVwORDd371uzmVcl4Yg68wl%2BgYB1nE33Ypdgy4D3Q3cCTTXMRaGzpVRNHyTKdbIjsohR1EN%2FHgacPoLojVGfd%2Fff6AxuCR1ikjjBo%2B8L%2BovW9xeFd1tIY7Gl4CxCYZVtrAgL9coe4NOInR6jHMsOBNqMKdqGCijNn0qQhGdddwYIKtA8lb%2Fsj5RB90Usx7SK0QyqsYh0dJvb73oC6MMw12aXiAwsnaUFbHuLdsAN%2FDzXlwEF5aE6Fn6jWT9KsftQzovzqy3JNgsNZzj1TSAMCjpl4yWQCuEM5pGbDY6OE3BRihnF6UzkMrCbDGnpLp9xzwZeZbLvNJIRq4P4jSx96JkQro0%2BeuJPIL%2FkMTvvQDZVJAi2v7IQSJjzBs9%2BeTKE8GAp0MLtlhP%2FtS8L2v5bRhrjKdboYdWOl7sSCXdYAwTXRPjGtaibjDGuoDYXPyeGT%2BcD2mLURPXh3LDtM2qBA%2FvR3idmIz6NNoZTge%2Fnb58QH4MtQOCgJZjLemT9xogr3jUQLy4tdiICvQjQbDJEmE5IOc0Ot6FAmK%2FCQqbggbxboPgNeTSloOmIlgANi8umJUYPxceeUFFLCMUMNXJqcMGOqUBFV2Geh%2FJDWGxIGNaJUyl%2BTfecEHu9JGiy1irDRBAKUIGVpJU0ng3YaJ8ZEoudnOzmMuH0kkmeubf2V4myxS5jjaSz0D%2FFcVgEETzFU0kho3sNcIcuytNcCLHxdeLeIUWf%2BHIVi4%2BjaWS7lUmST9V504emcIVTPWcH3HZiAOUY%2FGYGXYJvpReEO0Df24%2BDsCA5iUQU9SGBtliq%2B8nha4AKU%2FH8Eth&X-Amz-Signature=418859108a7145345d7bff0865a9ab66a975dae7f607041606e5743bb291b678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPHCEHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTdApAck5ky2jqanVa6by0oQ%2B5grxAPE44Fe7qB7GNIwIgBI2JxEOv2exreeYADXbMlVsBbcwztAOF%2Bs4aeJ9QZIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF%2FadjOSSfeye9hY1ircA0VS3IteaXGT4W%2BT%2Fq5Lx3Eo2YYE8ByFH9h%2B%2FljM87nDnUVwORDd371uzmVcl4Yg68wl%2BgYB1nE33Ypdgy4D3Q3cCTTXMRaGzpVRNHyTKdbIjsohR1EN%2FHgacPoLojVGfd%2Fff6AxuCR1ikjjBo%2B8L%2BovW9xeFd1tIY7Gl4CxCYZVtrAgL9coe4NOInR6jHMsOBNqMKdqGCijNn0qQhGdddwYIKtA8lb%2Fsj5RB90Usx7SK0QyqsYh0dJvb73oC6MMw12aXiAwsnaUFbHuLdsAN%2FDzXlwEF5aE6Fn6jWT9KsftQzovzqy3JNgsNZzj1TSAMCjpl4yWQCuEM5pGbDY6OE3BRihnF6UzkMrCbDGnpLp9xzwZeZbLvNJIRq4P4jSx96JkQro0%2BeuJPIL%2FkMTvvQDZVJAi2v7IQSJjzBs9%2BeTKE8GAp0MLtlhP%2FtS8L2v5bRhrjKdboYdWOl7sSCXdYAwTXRPjGtaibjDGuoDYXPyeGT%2BcD2mLURPXh3LDtM2qBA%2FvR3idmIz6NNoZTge%2Fnb58QH4MtQOCgJZjLemT9xogr3jUQLy4tdiICvQjQbDJEmE5IOc0Ot6FAmK%2FCQqbggbxboPgNeTSloOmIlgANi8umJUYPxceeUFFLCMUMNXJqcMGOqUBFV2Geh%2FJDWGxIGNaJUyl%2BTfecEHu9JGiy1irDRBAKUIGVpJU0ng3YaJ8ZEoudnOzmMuH0kkmeubf2V4myxS5jjaSz0D%2FFcVgEETzFU0kho3sNcIcuytNcCLHxdeLeIUWf%2BHIVi4%2BjaWS7lUmST9V504emcIVTPWcH3HZiAOUY%2FGYGXYJvpReEO0Df24%2BDsCA5iUQU9SGBtliq%2B8nha4AKU%2FH8Eth&X-Amz-Signature=c5357095b9d3b00877a33e0593deb0887ebc612bd5071b3a510be29d98a08d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPHCEHE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTdApAck5ky2jqanVa6by0oQ%2B5grxAPE44Fe7qB7GNIwIgBI2JxEOv2exreeYADXbMlVsBbcwztAOF%2Bs4aeJ9QZIYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDF%2FadjOSSfeye9hY1ircA0VS3IteaXGT4W%2BT%2Fq5Lx3Eo2YYE8ByFH9h%2B%2FljM87nDnUVwORDd371uzmVcl4Yg68wl%2BgYB1nE33Ypdgy4D3Q3cCTTXMRaGzpVRNHyTKdbIjsohR1EN%2FHgacPoLojVGfd%2Fff6AxuCR1ikjjBo%2B8L%2BovW9xeFd1tIY7Gl4CxCYZVtrAgL9coe4NOInR6jHMsOBNqMKdqGCijNn0qQhGdddwYIKtA8lb%2Fsj5RB90Usx7SK0QyqsYh0dJvb73oC6MMw12aXiAwsnaUFbHuLdsAN%2FDzXlwEF5aE6Fn6jWT9KsftQzovzqy3JNgsNZzj1TSAMCjpl4yWQCuEM5pGbDY6OE3BRihnF6UzkMrCbDGnpLp9xzwZeZbLvNJIRq4P4jSx96JkQro0%2BeuJPIL%2FkMTvvQDZVJAi2v7IQSJjzBs9%2BeTKE8GAp0MLtlhP%2FtS8L2v5bRhrjKdboYdWOl7sSCXdYAwTXRPjGtaibjDGuoDYXPyeGT%2BcD2mLURPXh3LDtM2qBA%2FvR3idmIz6NNoZTge%2Fnb58QH4MtQOCgJZjLemT9xogr3jUQLy4tdiICvQjQbDJEmE5IOc0Ot6FAmK%2FCQqbggbxboPgNeTSloOmIlgANi8umJUYPxceeUFFLCMUMNXJqcMGOqUBFV2Geh%2FJDWGxIGNaJUyl%2BTfecEHu9JGiy1irDRBAKUIGVpJU0ng3YaJ8ZEoudnOzmMuH0kkmeubf2V4myxS5jjaSz0D%2FFcVgEETzFU0kho3sNcIcuytNcCLHxdeLeIUWf%2BHIVi4%2BjaWS7lUmST9V504emcIVTPWcH3HZiAOUY%2FGYGXYJvpReEO0Df24%2BDsCA5iUQU9SGBtliq%2B8nha4AKU%2FH8Eth&X-Amz-Signature=94fde7973e3a01e2b364db42619a436e383ce1d51908dba400779dcf3d242aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
