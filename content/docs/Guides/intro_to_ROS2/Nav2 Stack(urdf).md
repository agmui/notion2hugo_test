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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=327084a236906487b5c44e5542b9adcdc40b70b4f77dbe7911bbbefc51461664&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=8aba9b87fe72818a631ac40e52a2a114dbd46de17a9ac337fa27bec49229fbf3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=3755f6b15760e197f6b2c4a0172bea4541e7da3ba3d100f7459c06a89117bdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=132b08e3c68bf6692c31cbf3fb2a6afa598900ea99b685ec9c867f13be1b5c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=d7b3f6b7358076a10389d9df8cae837e100108b6e5c52ab2d338c72b9d1dc39d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HAGDCV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDpx4MotpzuOV1yqOZj1o8Vi%2BVMWBkvgdETO6F5gTpPKQIgXFSUd9fU1FuEi%2Fy3hM5uRB44HuP%2BzUsXmfDWqEU%2B6%2FoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpFx3PGRn8z7r%2BY5ircA6vwrU9BeaAWPlDEt9oj1Zoz9u%2FV06P5pV3IarwUSjNZyurJZ%2FkkKGWoyN2tRbQhKnm8lrG9ywzBi5NjWm3fbG39i0GuWrFEalB3sONiTIS1PrCE4vuSyTlGqPyGKviZvshjI42T79DEAufTmSt6HqxXWHSoZOGv%2BX1OiwI8aXFmM8lxCZpU%2BAXLGNICCB4RMDpShYW0KsxP7UW%2BtDNAg7GDzftLwUh4%2BH3DLNDt%2B7QHfbFCm5T75eK%2BajQNyCaMScZ%2BUcQNxDTMh9FksXfwhudqwyCVgUTTB9LPus07CghfL2aEplFbQblbNJ8%2FC32KzQGUJ9YoNEofbmTAAdeGNa4mQoj%2FhHMPLmfrxiaGLUQIsPlPFzdt4lkEhcPkgjx1USjA%2FLt36iaTIUqsygfn6kK%2FXmWmND3lbg7yUhi%2FDNU5FEiRDfrQMxWx0t7q2kSjGjUMVs0U9BFwH0VX1tY6HXIzGcxP9DDU7cv8xP2Co3PpIJuGJrdwPuLN8peO%2FRV8wepQYj49wKpGuNhkL7Xf2i98FrT1Rggltvb%2FNUe%2Fqpfd8VeDl3ltS370ZeDePehzBDdeIsuUq427FBfpb%2FWlLpyJrL%2FQF%2BmXdqpbIttoaA%2FiwqIVz0XCZhu1t%2FAbMIb2jr4GOqUBtp9BcU9Oashs8F1uD00DH9GFYAYJmAwrY1eaWd42CZvDOXkJBYxE6J%2Bk5VFogLxn32E5R3d1t4wDbqMrg2yokn2qt1gKDeJ1PDGCs4fTlWUvragK8ItdDuUUjLbzTJyACfIT9cDnMm7I70w1amkA2pDZdaGOxFd8Dr%2BwJDGfxK3agT9iYklzo86%2BEGkHWyGMZYmO8O1e%2F5vnLP4HhyLq2yl0zH%2Ba&X-Amz-Signature=aa414aaa1b4e385ba595d9cb5d93f415a7397154aebc9cde361ffbc59d811dca&X-Amz-SignedHeaders=host&x-id=GetObject)
