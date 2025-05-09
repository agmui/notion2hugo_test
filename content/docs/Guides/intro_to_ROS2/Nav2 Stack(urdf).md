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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGHQCIK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BoysVeRsp%2FT1SLdhYrsqSrOlPYNi7gUCEvheakUWNoAiEAiNJ0TsOpyXyHzLgqtQnxUWPimsmpwOiLOW%2BAZlK0XDoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhtp28BSILJZe%2F%2ByrcA9ACoyfuHmscEgQePl6c9bgV4xX%2F2PyrX7xZ0s4%2FkxSgcS8IrnDZ5sASJb1%2Bp5%2BEJHXqUkjSRlrLd37gBafHe3Yl3nfXI1ANgrgVTRWcKJGotuqSDIi8ypwNtGmjVfUiD4fzV6ZcdDfVmwr60WFqlvdEKXeKBHmwgZtZniN%2BeuW9Z4ZTIkA0PQe4UNBQPfhMIe6HA3U3RIAJkTLeQ1NkebrFoRWhH%2BtDqfp5vERL%2BVH3bH2jLx6qh%2FuLzrRHPZxvvZAkRLJe12Ke%2FzwiyOPFdpjYWOpfHvv48QfDHi5jcdFLOVmtdIneqcecPuE3LwtSq2dqC8Vu2CbG9HPFqCYeR112mlNQ5EYYUa0vUvg5%2FVucteNj9cBkFecLqN1wft4xHLQlKu1Ou1UIq2irCLQbcTGHgEyCB%2FYDTh8Ub0oCe4THtgEh%2FZF%2B0Bof%2BbNX%2FWnbazI7dTvrfzismfeqGyubmCU5xjIlgJamjKuHTzSyBjWREcusem4Fkl3RjnP0e3XfWKKwr049GlniVo3XjbTucNpfAl%2Bhbjs7Vw4sTGVNEujndkXqnyNxjx6CX6kzVTZcIEriaq28CnrGVEFFkZSHUcGumooutVz0gz8f6C4Xg1BOKogEoWgTyIUCmnemMLTk9cAGOqUB4WFlA8S1MXFzMd41HaPpkPOhmL%2FwmDcPhB6PWi7XgPpJt9ZMjMxONuLiLA06lHZVkG3EvxO4pBHSjMc9Uzm13cjn7Cv7eWvCP6TtwisTTc0%2BefixAPzwFpkGXqfeSL9LqNmTUPnv2ZT8NwS4pmxyENliFZi99uloQkjzyF6sILQSwHAVht9vVPfu5%2BAaySRlGc7QODlotSbzwaaDzHxXIB6Gdphs&X-Amz-Signature=244defa39d4ca538a563ccf6df316a1ae9f6d66a02662766df545f47b16c7bac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGHQCIK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BoysVeRsp%2FT1SLdhYrsqSrOlPYNi7gUCEvheakUWNoAiEAiNJ0TsOpyXyHzLgqtQnxUWPimsmpwOiLOW%2BAZlK0XDoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhtp28BSILJZe%2F%2ByrcA9ACoyfuHmscEgQePl6c9bgV4xX%2F2PyrX7xZ0s4%2FkxSgcS8IrnDZ5sASJb1%2Bp5%2BEJHXqUkjSRlrLd37gBafHe3Yl3nfXI1ANgrgVTRWcKJGotuqSDIi8ypwNtGmjVfUiD4fzV6ZcdDfVmwr60WFqlvdEKXeKBHmwgZtZniN%2BeuW9Z4ZTIkA0PQe4UNBQPfhMIe6HA3U3RIAJkTLeQ1NkebrFoRWhH%2BtDqfp5vERL%2BVH3bH2jLx6qh%2FuLzrRHPZxvvZAkRLJe12Ke%2FzwiyOPFdpjYWOpfHvv48QfDHi5jcdFLOVmtdIneqcecPuE3LwtSq2dqC8Vu2CbG9HPFqCYeR112mlNQ5EYYUa0vUvg5%2FVucteNj9cBkFecLqN1wft4xHLQlKu1Ou1UIq2irCLQbcTGHgEyCB%2FYDTh8Ub0oCe4THtgEh%2FZF%2B0Bof%2BbNX%2FWnbazI7dTvrfzismfeqGyubmCU5xjIlgJamjKuHTzSyBjWREcusem4Fkl3RjnP0e3XfWKKwr049GlniVo3XjbTucNpfAl%2Bhbjs7Vw4sTGVNEujndkXqnyNxjx6CX6kzVTZcIEriaq28CnrGVEFFkZSHUcGumooutVz0gz8f6C4Xg1BOKogEoWgTyIUCmnemMLTk9cAGOqUB4WFlA8S1MXFzMd41HaPpkPOhmL%2FwmDcPhB6PWi7XgPpJt9ZMjMxONuLiLA06lHZVkG3EvxO4pBHSjMc9Uzm13cjn7Cv7eWvCP6TtwisTTc0%2BefixAPzwFpkGXqfeSL9LqNmTUPnv2ZT8NwS4pmxyENliFZi99uloQkjzyF6sILQSwHAVht9vVPfu5%2BAaySRlGc7QODlotSbzwaaDzHxXIB6Gdphs&X-Amz-Signature=0de080d6372ff9e1e998d9515bee61379cff21dada7af1db257b3f3b8bb44490&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGHQCIK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BoysVeRsp%2FT1SLdhYrsqSrOlPYNi7gUCEvheakUWNoAiEAiNJ0TsOpyXyHzLgqtQnxUWPimsmpwOiLOW%2BAZlK0XDoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhtp28BSILJZe%2F%2ByrcA9ACoyfuHmscEgQePl6c9bgV4xX%2F2PyrX7xZ0s4%2FkxSgcS8IrnDZ5sASJb1%2Bp5%2BEJHXqUkjSRlrLd37gBafHe3Yl3nfXI1ANgrgVTRWcKJGotuqSDIi8ypwNtGmjVfUiD4fzV6ZcdDfVmwr60WFqlvdEKXeKBHmwgZtZniN%2BeuW9Z4ZTIkA0PQe4UNBQPfhMIe6HA3U3RIAJkTLeQ1NkebrFoRWhH%2BtDqfp5vERL%2BVH3bH2jLx6qh%2FuLzrRHPZxvvZAkRLJe12Ke%2FzwiyOPFdpjYWOpfHvv48QfDHi5jcdFLOVmtdIneqcecPuE3LwtSq2dqC8Vu2CbG9HPFqCYeR112mlNQ5EYYUa0vUvg5%2FVucteNj9cBkFecLqN1wft4xHLQlKu1Ou1UIq2irCLQbcTGHgEyCB%2FYDTh8Ub0oCe4THtgEh%2FZF%2B0Bof%2BbNX%2FWnbazI7dTvrfzismfeqGyubmCU5xjIlgJamjKuHTzSyBjWREcusem4Fkl3RjnP0e3XfWKKwr049GlniVo3XjbTucNpfAl%2Bhbjs7Vw4sTGVNEujndkXqnyNxjx6CX6kzVTZcIEriaq28CnrGVEFFkZSHUcGumooutVz0gz8f6C4Xg1BOKogEoWgTyIUCmnemMLTk9cAGOqUB4WFlA8S1MXFzMd41HaPpkPOhmL%2FwmDcPhB6PWi7XgPpJt9ZMjMxONuLiLA06lHZVkG3EvxO4pBHSjMc9Uzm13cjn7Cv7eWvCP6TtwisTTc0%2BefixAPzwFpkGXqfeSL9LqNmTUPnv2ZT8NwS4pmxyENliFZi99uloQkjzyF6sILQSwHAVht9vVPfu5%2BAaySRlGc7QODlotSbzwaaDzHxXIB6Gdphs&X-Amz-Signature=83569c419f6f3e8cc68e9421943ce62bd2593603c138026c6ea7afbea28cef7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGHQCIK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BoysVeRsp%2FT1SLdhYrsqSrOlPYNi7gUCEvheakUWNoAiEAiNJ0TsOpyXyHzLgqtQnxUWPimsmpwOiLOW%2BAZlK0XDoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhtp28BSILJZe%2F%2ByrcA9ACoyfuHmscEgQePl6c9bgV4xX%2F2PyrX7xZ0s4%2FkxSgcS8IrnDZ5sASJb1%2Bp5%2BEJHXqUkjSRlrLd37gBafHe3Yl3nfXI1ANgrgVTRWcKJGotuqSDIi8ypwNtGmjVfUiD4fzV6ZcdDfVmwr60WFqlvdEKXeKBHmwgZtZniN%2BeuW9Z4ZTIkA0PQe4UNBQPfhMIe6HA3U3RIAJkTLeQ1NkebrFoRWhH%2BtDqfp5vERL%2BVH3bH2jLx6qh%2FuLzrRHPZxvvZAkRLJe12Ke%2FzwiyOPFdpjYWOpfHvv48QfDHi5jcdFLOVmtdIneqcecPuE3LwtSq2dqC8Vu2CbG9HPFqCYeR112mlNQ5EYYUa0vUvg5%2FVucteNj9cBkFecLqN1wft4xHLQlKu1Ou1UIq2irCLQbcTGHgEyCB%2FYDTh8Ub0oCe4THtgEh%2FZF%2B0Bof%2BbNX%2FWnbazI7dTvrfzismfeqGyubmCU5xjIlgJamjKuHTzSyBjWREcusem4Fkl3RjnP0e3XfWKKwr049GlniVo3XjbTucNpfAl%2Bhbjs7Vw4sTGVNEujndkXqnyNxjx6CX6kzVTZcIEriaq28CnrGVEFFkZSHUcGumooutVz0gz8f6C4Xg1BOKogEoWgTyIUCmnemMLTk9cAGOqUB4WFlA8S1MXFzMd41HaPpkPOhmL%2FwmDcPhB6PWi7XgPpJt9ZMjMxONuLiLA06lHZVkG3EvxO4pBHSjMc9Uzm13cjn7Cv7eWvCP6TtwisTTc0%2BefixAPzwFpkGXqfeSL9LqNmTUPnv2ZT8NwS4pmxyENliFZi99uloQkjzyF6sILQSwHAVht9vVPfu5%2BAaySRlGc7QODlotSbzwaaDzHxXIB6Gdphs&X-Amz-Signature=517e486fc5ceabf73ab5939d9758f4395ee3429969b87fd4242e91520c59c9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGHQCIK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BoysVeRsp%2FT1SLdhYrsqSrOlPYNi7gUCEvheakUWNoAiEAiNJ0TsOpyXyHzLgqtQnxUWPimsmpwOiLOW%2BAZlK0XDoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhtp28BSILJZe%2F%2ByrcA9ACoyfuHmscEgQePl6c9bgV4xX%2F2PyrX7xZ0s4%2FkxSgcS8IrnDZ5sASJb1%2Bp5%2BEJHXqUkjSRlrLd37gBafHe3Yl3nfXI1ANgrgVTRWcKJGotuqSDIi8ypwNtGmjVfUiD4fzV6ZcdDfVmwr60WFqlvdEKXeKBHmwgZtZniN%2BeuW9Z4ZTIkA0PQe4UNBQPfhMIe6HA3U3RIAJkTLeQ1NkebrFoRWhH%2BtDqfp5vERL%2BVH3bH2jLx6qh%2FuLzrRHPZxvvZAkRLJe12Ke%2FzwiyOPFdpjYWOpfHvv48QfDHi5jcdFLOVmtdIneqcecPuE3LwtSq2dqC8Vu2CbG9HPFqCYeR112mlNQ5EYYUa0vUvg5%2FVucteNj9cBkFecLqN1wft4xHLQlKu1Ou1UIq2irCLQbcTGHgEyCB%2FYDTh8Ub0oCe4THtgEh%2FZF%2B0Bof%2BbNX%2FWnbazI7dTvrfzismfeqGyubmCU5xjIlgJamjKuHTzSyBjWREcusem4Fkl3RjnP0e3XfWKKwr049GlniVo3XjbTucNpfAl%2Bhbjs7Vw4sTGVNEujndkXqnyNxjx6CX6kzVTZcIEriaq28CnrGVEFFkZSHUcGumooutVz0gz8f6C4Xg1BOKogEoWgTyIUCmnemMLTk9cAGOqUB4WFlA8S1MXFzMd41HaPpkPOhmL%2FwmDcPhB6PWi7XgPpJt9ZMjMxONuLiLA06lHZVkG3EvxO4pBHSjMc9Uzm13cjn7Cv7eWvCP6TtwisTTc0%2BefixAPzwFpkGXqfeSL9LqNmTUPnv2ZT8NwS4pmxyENliFZi99uloQkjzyF6sILQSwHAVht9vVPfu5%2BAaySRlGc7QODlotSbzwaaDzHxXIB6Gdphs&X-Amz-Signature=b232df9f37237e637666e49d1dfbdadcad2d83c27c7cad455a2efa3d7d1279e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGHQCIK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BoysVeRsp%2FT1SLdhYrsqSrOlPYNi7gUCEvheakUWNoAiEAiNJ0TsOpyXyHzLgqtQnxUWPimsmpwOiLOW%2BAZlK0XDoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwhtp28BSILJZe%2F%2ByrcA9ACoyfuHmscEgQePl6c9bgV4xX%2F2PyrX7xZ0s4%2FkxSgcS8IrnDZ5sASJb1%2Bp5%2BEJHXqUkjSRlrLd37gBafHe3Yl3nfXI1ANgrgVTRWcKJGotuqSDIi8ypwNtGmjVfUiD4fzV6ZcdDfVmwr60WFqlvdEKXeKBHmwgZtZniN%2BeuW9Z4ZTIkA0PQe4UNBQPfhMIe6HA3U3RIAJkTLeQ1NkebrFoRWhH%2BtDqfp5vERL%2BVH3bH2jLx6qh%2FuLzrRHPZxvvZAkRLJe12Ke%2FzwiyOPFdpjYWOpfHvv48QfDHi5jcdFLOVmtdIneqcecPuE3LwtSq2dqC8Vu2CbG9HPFqCYeR112mlNQ5EYYUa0vUvg5%2FVucteNj9cBkFecLqN1wft4xHLQlKu1Ou1UIq2irCLQbcTGHgEyCB%2FYDTh8Ub0oCe4THtgEh%2FZF%2B0Bof%2BbNX%2FWnbazI7dTvrfzismfeqGyubmCU5xjIlgJamjKuHTzSyBjWREcusem4Fkl3RjnP0e3XfWKKwr049GlniVo3XjbTucNpfAl%2Bhbjs7Vw4sTGVNEujndkXqnyNxjx6CX6kzVTZcIEriaq28CnrGVEFFkZSHUcGumooutVz0gz8f6C4Xg1BOKogEoWgTyIUCmnemMLTk9cAGOqUB4WFlA8S1MXFzMd41HaPpkPOhmL%2FwmDcPhB6PWi7XgPpJt9ZMjMxONuLiLA06lHZVkG3EvxO4pBHSjMc9Uzm13cjn7Cv7eWvCP6TtwisTTc0%2BefixAPzwFpkGXqfeSL9LqNmTUPnv2ZT8NwS4pmxyENliFZi99uloQkjzyF6sILQSwHAVht9vVPfu5%2BAaySRlGc7QODlotSbzwaaDzHxXIB6Gdphs&X-Amz-Signature=e932d68468960b5f9d32496768b86a9348f980b71f2c16901349a8ce42def86f&X-Amz-SignedHeaders=host&x-id=GetObject)
