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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VR2HVAO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2FdQsMvvCF%2FY3QD5kq23H41fiArsTG3lhQgYNfyJvjAiEA9Aln8xIxvvzXEhd%2BdDB%2F87Cq02kZwMblEUO8Vy3Fd1gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9qbkgdjE5O80dOfCrcA5ufJQiMsVD89zXQ0vsgFfz3aOzDkTgXIpSqmF3cWygEK4HbkNNWAXErSIWf4pbodsNXD0nZcjQCupPZztfkdRPHdUyIr9o1o6jcVX2IaZNixGPXGAR6i0%2B%2BJEpLxRBCj34azKYq%2FX2rBShJKRLb06foNZjJ29eXXp1HqPlRH0rnF62dPk3OEzjdhlMKpMtABg3s%2FtroSBuINn%2B1REBwjQRn3lPJ8MYQkrrQ%2F8Z9M6aqjWeacNxdfh%2FTxIVu353WK3NAKU5i3rBnvouBj10gVHxfAXDClIrkzMw2kquZ3IpYY8awFFQr3DAYUd7pF8E3c8UGiMQjlaTajTeiO8%2BMG9MW8jpNnf2u4wCDn6WU5WF%2BqHV4W8eg%2BRbCEDLDWtM6p0qqby7Joy2hZyRH%2BU83IgzmXOfkXU2MqvJkx%2BSt3okZCSQz%2BRg%2FyD94eFea%2FeZmhvx69ERNQP5hOJc%2FVgcHeaHSHenMYefS0Q%2ByRAcAs3qezUwreSMKVOIYTbAoD3%2BNupeh4FmAXxNzqvLg9JiEMgcz3L8%2BlAGMGcXgK6q9HlDedGGXH4Brpyq24qmIjuZ%2BNWrJylbtSVqdN8gPMe8bbzZ9Njw5oHzH7agOPkn%2BEuC1WHa6CWMhqPK1JxHfMOmPpL0GOqUBsKPPgSw4daQXgZZfukBb9aWgNL5rCafx4qGyLLrEE1vtVDNFKtu74exSThWuGQUmI6Yy8b13z%2BxxqVoki%2FpVbav%2FJYb8X2rCWTX3YmLfi%2FuIgelqtm87OrMDihATSXnRNNQ%2BGXj5tl4djmbU1Rkxub7QWQj0XW6TmChnsST84gOQXd8lEv7aNoTXRMf%2BPYjxuKfGWdFRmpyLabO5wHQ0BeRT3ccu&X-Amz-Signature=6b5d4a6a03c8bbcd8a9e656b8401577e88fc8f1ab84f3cba149c3fea412875a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VR2HVAO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2FdQsMvvCF%2FY3QD5kq23H41fiArsTG3lhQgYNfyJvjAiEA9Aln8xIxvvzXEhd%2BdDB%2F87Cq02kZwMblEUO8Vy3Fd1gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9qbkgdjE5O80dOfCrcA5ufJQiMsVD89zXQ0vsgFfz3aOzDkTgXIpSqmF3cWygEK4HbkNNWAXErSIWf4pbodsNXD0nZcjQCupPZztfkdRPHdUyIr9o1o6jcVX2IaZNixGPXGAR6i0%2B%2BJEpLxRBCj34azKYq%2FX2rBShJKRLb06foNZjJ29eXXp1HqPlRH0rnF62dPk3OEzjdhlMKpMtABg3s%2FtroSBuINn%2B1REBwjQRn3lPJ8MYQkrrQ%2F8Z9M6aqjWeacNxdfh%2FTxIVu353WK3NAKU5i3rBnvouBj10gVHxfAXDClIrkzMw2kquZ3IpYY8awFFQr3DAYUd7pF8E3c8UGiMQjlaTajTeiO8%2BMG9MW8jpNnf2u4wCDn6WU5WF%2BqHV4W8eg%2BRbCEDLDWtM6p0qqby7Joy2hZyRH%2BU83IgzmXOfkXU2MqvJkx%2BSt3okZCSQz%2BRg%2FyD94eFea%2FeZmhvx69ERNQP5hOJc%2FVgcHeaHSHenMYefS0Q%2ByRAcAs3qezUwreSMKVOIYTbAoD3%2BNupeh4FmAXxNzqvLg9JiEMgcz3L8%2BlAGMGcXgK6q9HlDedGGXH4Brpyq24qmIjuZ%2BNWrJylbtSVqdN8gPMe8bbzZ9Njw5oHzH7agOPkn%2BEuC1WHa6CWMhqPK1JxHfMOmPpL0GOqUBsKPPgSw4daQXgZZfukBb9aWgNL5rCafx4qGyLLrEE1vtVDNFKtu74exSThWuGQUmI6Yy8b13z%2BxxqVoki%2FpVbav%2FJYb8X2rCWTX3YmLfi%2FuIgelqtm87OrMDihATSXnRNNQ%2BGXj5tl4djmbU1Rkxub7QWQj0XW6TmChnsST84gOQXd8lEv7aNoTXRMf%2BPYjxuKfGWdFRmpyLabO5wHQ0BeRT3ccu&X-Amz-Signature=f8f9ae67e29c74811d454a6ce0d1b8020851f6be8ef1ceb505d9d115452fc6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VR2HVAO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2FdQsMvvCF%2FY3QD5kq23H41fiArsTG3lhQgYNfyJvjAiEA9Aln8xIxvvzXEhd%2BdDB%2F87Cq02kZwMblEUO8Vy3Fd1gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9qbkgdjE5O80dOfCrcA5ufJQiMsVD89zXQ0vsgFfz3aOzDkTgXIpSqmF3cWygEK4HbkNNWAXErSIWf4pbodsNXD0nZcjQCupPZztfkdRPHdUyIr9o1o6jcVX2IaZNixGPXGAR6i0%2B%2BJEpLxRBCj34azKYq%2FX2rBShJKRLb06foNZjJ29eXXp1HqPlRH0rnF62dPk3OEzjdhlMKpMtABg3s%2FtroSBuINn%2B1REBwjQRn3lPJ8MYQkrrQ%2F8Z9M6aqjWeacNxdfh%2FTxIVu353WK3NAKU5i3rBnvouBj10gVHxfAXDClIrkzMw2kquZ3IpYY8awFFQr3DAYUd7pF8E3c8UGiMQjlaTajTeiO8%2BMG9MW8jpNnf2u4wCDn6WU5WF%2BqHV4W8eg%2BRbCEDLDWtM6p0qqby7Joy2hZyRH%2BU83IgzmXOfkXU2MqvJkx%2BSt3okZCSQz%2BRg%2FyD94eFea%2FeZmhvx69ERNQP5hOJc%2FVgcHeaHSHenMYefS0Q%2ByRAcAs3qezUwreSMKVOIYTbAoD3%2BNupeh4FmAXxNzqvLg9JiEMgcz3L8%2BlAGMGcXgK6q9HlDedGGXH4Brpyq24qmIjuZ%2BNWrJylbtSVqdN8gPMe8bbzZ9Njw5oHzH7agOPkn%2BEuC1WHa6CWMhqPK1JxHfMOmPpL0GOqUBsKPPgSw4daQXgZZfukBb9aWgNL5rCafx4qGyLLrEE1vtVDNFKtu74exSThWuGQUmI6Yy8b13z%2BxxqVoki%2FpVbav%2FJYb8X2rCWTX3YmLfi%2FuIgelqtm87OrMDihATSXnRNNQ%2BGXj5tl4djmbU1Rkxub7QWQj0XW6TmChnsST84gOQXd8lEv7aNoTXRMf%2BPYjxuKfGWdFRmpyLabO5wHQ0BeRT3ccu&X-Amz-Signature=0e08ff5431bfbd3b457a5baf937aa5ccce19dbbd8938b4e336393e7782d009fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VR2HVAO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2FdQsMvvCF%2FY3QD5kq23H41fiArsTG3lhQgYNfyJvjAiEA9Aln8xIxvvzXEhd%2BdDB%2F87Cq02kZwMblEUO8Vy3Fd1gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9qbkgdjE5O80dOfCrcA5ufJQiMsVD89zXQ0vsgFfz3aOzDkTgXIpSqmF3cWygEK4HbkNNWAXErSIWf4pbodsNXD0nZcjQCupPZztfkdRPHdUyIr9o1o6jcVX2IaZNixGPXGAR6i0%2B%2BJEpLxRBCj34azKYq%2FX2rBShJKRLb06foNZjJ29eXXp1HqPlRH0rnF62dPk3OEzjdhlMKpMtABg3s%2FtroSBuINn%2B1REBwjQRn3lPJ8MYQkrrQ%2F8Z9M6aqjWeacNxdfh%2FTxIVu353WK3NAKU5i3rBnvouBj10gVHxfAXDClIrkzMw2kquZ3IpYY8awFFQr3DAYUd7pF8E3c8UGiMQjlaTajTeiO8%2BMG9MW8jpNnf2u4wCDn6WU5WF%2BqHV4W8eg%2BRbCEDLDWtM6p0qqby7Joy2hZyRH%2BU83IgzmXOfkXU2MqvJkx%2BSt3okZCSQz%2BRg%2FyD94eFea%2FeZmhvx69ERNQP5hOJc%2FVgcHeaHSHenMYefS0Q%2ByRAcAs3qezUwreSMKVOIYTbAoD3%2BNupeh4FmAXxNzqvLg9JiEMgcz3L8%2BlAGMGcXgK6q9HlDedGGXH4Brpyq24qmIjuZ%2BNWrJylbtSVqdN8gPMe8bbzZ9Njw5oHzH7agOPkn%2BEuC1WHa6CWMhqPK1JxHfMOmPpL0GOqUBsKPPgSw4daQXgZZfukBb9aWgNL5rCafx4qGyLLrEE1vtVDNFKtu74exSThWuGQUmI6Yy8b13z%2BxxqVoki%2FpVbav%2FJYb8X2rCWTX3YmLfi%2FuIgelqtm87OrMDihATSXnRNNQ%2BGXj5tl4djmbU1Rkxub7QWQj0XW6TmChnsST84gOQXd8lEv7aNoTXRMf%2BPYjxuKfGWdFRmpyLabO5wHQ0BeRT3ccu&X-Amz-Signature=007b0385d212d96fd5aba59be644659a49e666215c0f83684fe642223a4229e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VR2HVAO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2FdQsMvvCF%2FY3QD5kq23H41fiArsTG3lhQgYNfyJvjAiEA9Aln8xIxvvzXEhd%2BdDB%2F87Cq02kZwMblEUO8Vy3Fd1gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9qbkgdjE5O80dOfCrcA5ufJQiMsVD89zXQ0vsgFfz3aOzDkTgXIpSqmF3cWygEK4HbkNNWAXErSIWf4pbodsNXD0nZcjQCupPZztfkdRPHdUyIr9o1o6jcVX2IaZNixGPXGAR6i0%2B%2BJEpLxRBCj34azKYq%2FX2rBShJKRLb06foNZjJ29eXXp1HqPlRH0rnF62dPk3OEzjdhlMKpMtABg3s%2FtroSBuINn%2B1REBwjQRn3lPJ8MYQkrrQ%2F8Z9M6aqjWeacNxdfh%2FTxIVu353WK3NAKU5i3rBnvouBj10gVHxfAXDClIrkzMw2kquZ3IpYY8awFFQr3DAYUd7pF8E3c8UGiMQjlaTajTeiO8%2BMG9MW8jpNnf2u4wCDn6WU5WF%2BqHV4W8eg%2BRbCEDLDWtM6p0qqby7Joy2hZyRH%2BU83IgzmXOfkXU2MqvJkx%2BSt3okZCSQz%2BRg%2FyD94eFea%2FeZmhvx69ERNQP5hOJc%2FVgcHeaHSHenMYefS0Q%2ByRAcAs3qezUwreSMKVOIYTbAoD3%2BNupeh4FmAXxNzqvLg9JiEMgcz3L8%2BlAGMGcXgK6q9HlDedGGXH4Brpyq24qmIjuZ%2BNWrJylbtSVqdN8gPMe8bbzZ9Njw5oHzH7agOPkn%2BEuC1WHa6CWMhqPK1JxHfMOmPpL0GOqUBsKPPgSw4daQXgZZfukBb9aWgNL5rCafx4qGyLLrEE1vtVDNFKtu74exSThWuGQUmI6Yy8b13z%2BxxqVoki%2FpVbav%2FJYb8X2rCWTX3YmLfi%2FuIgelqtm87OrMDihATSXnRNNQ%2BGXj5tl4djmbU1Rkxub7QWQj0XW6TmChnsST84gOQXd8lEv7aNoTXRMf%2BPYjxuKfGWdFRmpyLabO5wHQ0BeRT3ccu&X-Amz-Signature=80de490e9ae748c6ca4bfa5a5cf6ce5b966e4d30d712354d111799ae4da84084&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VR2HVAO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2FdQsMvvCF%2FY3QD5kq23H41fiArsTG3lhQgYNfyJvjAiEA9Aln8xIxvvzXEhd%2BdDB%2F87Cq02kZwMblEUO8Vy3Fd1gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9qbkgdjE5O80dOfCrcA5ufJQiMsVD89zXQ0vsgFfz3aOzDkTgXIpSqmF3cWygEK4HbkNNWAXErSIWf4pbodsNXD0nZcjQCupPZztfkdRPHdUyIr9o1o6jcVX2IaZNixGPXGAR6i0%2B%2BJEpLxRBCj34azKYq%2FX2rBShJKRLb06foNZjJ29eXXp1HqPlRH0rnF62dPk3OEzjdhlMKpMtABg3s%2FtroSBuINn%2B1REBwjQRn3lPJ8MYQkrrQ%2F8Z9M6aqjWeacNxdfh%2FTxIVu353WK3NAKU5i3rBnvouBj10gVHxfAXDClIrkzMw2kquZ3IpYY8awFFQr3DAYUd7pF8E3c8UGiMQjlaTajTeiO8%2BMG9MW8jpNnf2u4wCDn6WU5WF%2BqHV4W8eg%2BRbCEDLDWtM6p0qqby7Joy2hZyRH%2BU83IgzmXOfkXU2MqvJkx%2BSt3okZCSQz%2BRg%2FyD94eFea%2FeZmhvx69ERNQP5hOJc%2FVgcHeaHSHenMYefS0Q%2ByRAcAs3qezUwreSMKVOIYTbAoD3%2BNupeh4FmAXxNzqvLg9JiEMgcz3L8%2BlAGMGcXgK6q9HlDedGGXH4Brpyq24qmIjuZ%2BNWrJylbtSVqdN8gPMe8bbzZ9Njw5oHzH7agOPkn%2BEuC1WHa6CWMhqPK1JxHfMOmPpL0GOqUBsKPPgSw4daQXgZZfukBb9aWgNL5rCafx4qGyLLrEE1vtVDNFKtu74exSThWuGQUmI6Yy8b13z%2BxxqVoki%2FpVbav%2FJYb8X2rCWTX3YmLfi%2FuIgelqtm87OrMDihATSXnRNNQ%2BGXj5tl4djmbU1Rkxub7QWQj0XW6TmChnsST84gOQXd8lEv7aNoTXRMf%2BPYjxuKfGWdFRmpyLabO5wHQ0BeRT3ccu&X-Amz-Signature=2b004a0ae7d491cbf7d92cf6b97521cf5f2f6f1d9ab104c71a352dd56975e190&X-Amz-SignedHeaders=host&x-id=GetObject)
