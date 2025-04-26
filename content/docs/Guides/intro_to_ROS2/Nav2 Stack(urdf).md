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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBHLNA7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5X8TvgzoOK%2FIaapuYFN2%2B3fxqbZ%2FWprYoW0HwCEUegIhAJ6EpNLdSiwrDN6N1qvnQUyBUuoHAvqXqAlKcUDKZU5YKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJ59E2Jp7gNbYhqsEq3AMK9xt2DFU91IISueWRBOxB%2BwLyALjyonOy0bnDVNfy%2Fx%2F7b8vBQXU0rhQ0XwLjVEuqu0ozZk1J2JN4xf9svdDNOU331H%2B%2BVjs5K7w7uIeTA89%2FSzYie%2BKldO7cgvRsg0dzlmRb2jc%2Fj8fVxYkZW81L6VK5Ws%2B8CCOspZhtOfr1dIiOLv1Va%2BYS%2F6bp58iRHn1roKreAcnSdzSdWOcRb8%2FTTUMSMw7wwBf3AHXhKYspIUQX4A15Hw3DaZjnHhhLfWhkok6ByveKM60fI6Q%2F5QmKBPWyvzTbazv9rxZsmRE0ddK15u2KLfqPSov57%2FgkewDa31jU0XQOArbp7jWORioAW6TaSXLSbHei50WYyAa4FSzckmR6fGfKVR2OjVY2sWHfpytBlXFEUaQ9MD%2F90m7%2Fwg3lYr9aw4BexBAL4ctMd95eYxp0NpfdG5T34cocLbf6ycpzz0ym8tzyvTcfzg2yryEMOYct5M6gSGpK66CATLzWjNtxk4aENh62NgaB3Y03a8MxhyIs8A3pCzCHTCoIR4%2BWz%2F5IIEtMSM1aGR%2FQGO4QG%2BBxq7kzxtlgIr70B3mfB6fHyv1fENvT%2BR662b5HsMUl6NsF4iaWfQJD43RjJgK%2FNZsPpqBNK4dT7zD13bTABjqkATKwSOCCMFsxHOhNBun1ZhyAQi2WRBD6xGmgWWdGlec0UVBuswWf5mXWj%2Fk%2BS2hlr3bJHr%2F1DrlxUoZPSyLmh87QsI5b%2FelVn8j%2BoKTBtJL8s%2BWJeUKq%2FtZXeAJD3KuGB43kHt5%2Bdoe8ebCSJxRWqf3HuM2%2F%2Bgkq9ucwlnSSpfPyBse3kREoFtWcdajDLnWfr02PBgYimbVBL7fAjcdzfK%2BEKVVj&X-Amz-Signature=006e3475e32d342323422a110f13a87dc20d992992fa12daa2547ffa621a8865&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBHLNA7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5X8TvgzoOK%2FIaapuYFN2%2B3fxqbZ%2FWprYoW0HwCEUegIhAJ6EpNLdSiwrDN6N1qvnQUyBUuoHAvqXqAlKcUDKZU5YKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJ59E2Jp7gNbYhqsEq3AMK9xt2DFU91IISueWRBOxB%2BwLyALjyonOy0bnDVNfy%2Fx%2F7b8vBQXU0rhQ0XwLjVEuqu0ozZk1J2JN4xf9svdDNOU331H%2B%2BVjs5K7w7uIeTA89%2FSzYie%2BKldO7cgvRsg0dzlmRb2jc%2Fj8fVxYkZW81L6VK5Ws%2B8CCOspZhtOfr1dIiOLv1Va%2BYS%2F6bp58iRHn1roKreAcnSdzSdWOcRb8%2FTTUMSMw7wwBf3AHXhKYspIUQX4A15Hw3DaZjnHhhLfWhkok6ByveKM60fI6Q%2F5QmKBPWyvzTbazv9rxZsmRE0ddK15u2KLfqPSov57%2FgkewDa31jU0XQOArbp7jWORioAW6TaSXLSbHei50WYyAa4FSzckmR6fGfKVR2OjVY2sWHfpytBlXFEUaQ9MD%2F90m7%2Fwg3lYr9aw4BexBAL4ctMd95eYxp0NpfdG5T34cocLbf6ycpzz0ym8tzyvTcfzg2yryEMOYct5M6gSGpK66CATLzWjNtxk4aENh62NgaB3Y03a8MxhyIs8A3pCzCHTCoIR4%2BWz%2F5IIEtMSM1aGR%2FQGO4QG%2BBxq7kzxtlgIr70B3mfB6fHyv1fENvT%2BR662b5HsMUl6NsF4iaWfQJD43RjJgK%2FNZsPpqBNK4dT7zD13bTABjqkATKwSOCCMFsxHOhNBun1ZhyAQi2WRBD6xGmgWWdGlec0UVBuswWf5mXWj%2Fk%2BS2hlr3bJHr%2F1DrlxUoZPSyLmh87QsI5b%2FelVn8j%2BoKTBtJL8s%2BWJeUKq%2FtZXeAJD3KuGB43kHt5%2Bdoe8ebCSJxRWqf3HuM2%2F%2Bgkq9ucwlnSSpfPyBse3kREoFtWcdajDLnWfr02PBgYimbVBL7fAjcdzfK%2BEKVVj&X-Amz-Signature=a6b8b6ec38913400f03e8041efb801f9fa05f58df662bdda8c843beba4a7cfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBHLNA7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5X8TvgzoOK%2FIaapuYFN2%2B3fxqbZ%2FWprYoW0HwCEUegIhAJ6EpNLdSiwrDN6N1qvnQUyBUuoHAvqXqAlKcUDKZU5YKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJ59E2Jp7gNbYhqsEq3AMK9xt2DFU91IISueWRBOxB%2BwLyALjyonOy0bnDVNfy%2Fx%2F7b8vBQXU0rhQ0XwLjVEuqu0ozZk1J2JN4xf9svdDNOU331H%2B%2BVjs5K7w7uIeTA89%2FSzYie%2BKldO7cgvRsg0dzlmRb2jc%2Fj8fVxYkZW81L6VK5Ws%2B8CCOspZhtOfr1dIiOLv1Va%2BYS%2F6bp58iRHn1roKreAcnSdzSdWOcRb8%2FTTUMSMw7wwBf3AHXhKYspIUQX4A15Hw3DaZjnHhhLfWhkok6ByveKM60fI6Q%2F5QmKBPWyvzTbazv9rxZsmRE0ddK15u2KLfqPSov57%2FgkewDa31jU0XQOArbp7jWORioAW6TaSXLSbHei50WYyAa4FSzckmR6fGfKVR2OjVY2sWHfpytBlXFEUaQ9MD%2F90m7%2Fwg3lYr9aw4BexBAL4ctMd95eYxp0NpfdG5T34cocLbf6ycpzz0ym8tzyvTcfzg2yryEMOYct5M6gSGpK66CATLzWjNtxk4aENh62NgaB3Y03a8MxhyIs8A3pCzCHTCoIR4%2BWz%2F5IIEtMSM1aGR%2FQGO4QG%2BBxq7kzxtlgIr70B3mfB6fHyv1fENvT%2BR662b5HsMUl6NsF4iaWfQJD43RjJgK%2FNZsPpqBNK4dT7zD13bTABjqkATKwSOCCMFsxHOhNBun1ZhyAQi2WRBD6xGmgWWdGlec0UVBuswWf5mXWj%2Fk%2BS2hlr3bJHr%2F1DrlxUoZPSyLmh87QsI5b%2FelVn8j%2BoKTBtJL8s%2BWJeUKq%2FtZXeAJD3KuGB43kHt5%2Bdoe8ebCSJxRWqf3HuM2%2F%2Bgkq9ucwlnSSpfPyBse3kREoFtWcdajDLnWfr02PBgYimbVBL7fAjcdzfK%2BEKVVj&X-Amz-Signature=bcb69f0caab8e1a97979232f89a565abb2ef0f2a831d8d3d0e92ea0c0c2881d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBHLNA7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5X8TvgzoOK%2FIaapuYFN2%2B3fxqbZ%2FWprYoW0HwCEUegIhAJ6EpNLdSiwrDN6N1qvnQUyBUuoHAvqXqAlKcUDKZU5YKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJ59E2Jp7gNbYhqsEq3AMK9xt2DFU91IISueWRBOxB%2BwLyALjyonOy0bnDVNfy%2Fx%2F7b8vBQXU0rhQ0XwLjVEuqu0ozZk1J2JN4xf9svdDNOU331H%2B%2BVjs5K7w7uIeTA89%2FSzYie%2BKldO7cgvRsg0dzlmRb2jc%2Fj8fVxYkZW81L6VK5Ws%2B8CCOspZhtOfr1dIiOLv1Va%2BYS%2F6bp58iRHn1roKreAcnSdzSdWOcRb8%2FTTUMSMw7wwBf3AHXhKYspIUQX4A15Hw3DaZjnHhhLfWhkok6ByveKM60fI6Q%2F5QmKBPWyvzTbazv9rxZsmRE0ddK15u2KLfqPSov57%2FgkewDa31jU0XQOArbp7jWORioAW6TaSXLSbHei50WYyAa4FSzckmR6fGfKVR2OjVY2sWHfpytBlXFEUaQ9MD%2F90m7%2Fwg3lYr9aw4BexBAL4ctMd95eYxp0NpfdG5T34cocLbf6ycpzz0ym8tzyvTcfzg2yryEMOYct5M6gSGpK66CATLzWjNtxk4aENh62NgaB3Y03a8MxhyIs8A3pCzCHTCoIR4%2BWz%2F5IIEtMSM1aGR%2FQGO4QG%2BBxq7kzxtlgIr70B3mfB6fHyv1fENvT%2BR662b5HsMUl6NsF4iaWfQJD43RjJgK%2FNZsPpqBNK4dT7zD13bTABjqkATKwSOCCMFsxHOhNBun1ZhyAQi2WRBD6xGmgWWdGlec0UVBuswWf5mXWj%2Fk%2BS2hlr3bJHr%2F1DrlxUoZPSyLmh87QsI5b%2FelVn8j%2BoKTBtJL8s%2BWJeUKq%2FtZXeAJD3KuGB43kHt5%2Bdoe8ebCSJxRWqf3HuM2%2F%2Bgkq9ucwlnSSpfPyBse3kREoFtWcdajDLnWfr02PBgYimbVBL7fAjcdzfK%2BEKVVj&X-Amz-Signature=157d4325061fd186d26b3aa5bcd31fdf18be3b2788efa6ba4435a912d68c8840&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBHLNA7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5X8TvgzoOK%2FIaapuYFN2%2B3fxqbZ%2FWprYoW0HwCEUegIhAJ6EpNLdSiwrDN6N1qvnQUyBUuoHAvqXqAlKcUDKZU5YKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJ59E2Jp7gNbYhqsEq3AMK9xt2DFU91IISueWRBOxB%2BwLyALjyonOy0bnDVNfy%2Fx%2F7b8vBQXU0rhQ0XwLjVEuqu0ozZk1J2JN4xf9svdDNOU331H%2B%2BVjs5K7w7uIeTA89%2FSzYie%2BKldO7cgvRsg0dzlmRb2jc%2Fj8fVxYkZW81L6VK5Ws%2B8CCOspZhtOfr1dIiOLv1Va%2BYS%2F6bp58iRHn1roKreAcnSdzSdWOcRb8%2FTTUMSMw7wwBf3AHXhKYspIUQX4A15Hw3DaZjnHhhLfWhkok6ByveKM60fI6Q%2F5QmKBPWyvzTbazv9rxZsmRE0ddK15u2KLfqPSov57%2FgkewDa31jU0XQOArbp7jWORioAW6TaSXLSbHei50WYyAa4FSzckmR6fGfKVR2OjVY2sWHfpytBlXFEUaQ9MD%2F90m7%2Fwg3lYr9aw4BexBAL4ctMd95eYxp0NpfdG5T34cocLbf6ycpzz0ym8tzyvTcfzg2yryEMOYct5M6gSGpK66CATLzWjNtxk4aENh62NgaB3Y03a8MxhyIs8A3pCzCHTCoIR4%2BWz%2F5IIEtMSM1aGR%2FQGO4QG%2BBxq7kzxtlgIr70B3mfB6fHyv1fENvT%2BR662b5HsMUl6NsF4iaWfQJD43RjJgK%2FNZsPpqBNK4dT7zD13bTABjqkATKwSOCCMFsxHOhNBun1ZhyAQi2WRBD6xGmgWWdGlec0UVBuswWf5mXWj%2Fk%2BS2hlr3bJHr%2F1DrlxUoZPSyLmh87QsI5b%2FelVn8j%2BoKTBtJL8s%2BWJeUKq%2FtZXeAJD3KuGB43kHt5%2Bdoe8ebCSJxRWqf3HuM2%2F%2Bgkq9ucwlnSSpfPyBse3kREoFtWcdajDLnWfr02PBgYimbVBL7fAjcdzfK%2BEKVVj&X-Amz-Signature=2125c6c1c78ec52c83378ccbf7b7f5ca4a2947f7a941dc659b8c3e743a7f8c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBHLNA7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5X8TvgzoOK%2FIaapuYFN2%2B3fxqbZ%2FWprYoW0HwCEUegIhAJ6EpNLdSiwrDN6N1qvnQUyBUuoHAvqXqAlKcUDKZU5YKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJ59E2Jp7gNbYhqsEq3AMK9xt2DFU91IISueWRBOxB%2BwLyALjyonOy0bnDVNfy%2Fx%2F7b8vBQXU0rhQ0XwLjVEuqu0ozZk1J2JN4xf9svdDNOU331H%2B%2BVjs5K7w7uIeTA89%2FSzYie%2BKldO7cgvRsg0dzlmRb2jc%2Fj8fVxYkZW81L6VK5Ws%2B8CCOspZhtOfr1dIiOLv1Va%2BYS%2F6bp58iRHn1roKreAcnSdzSdWOcRb8%2FTTUMSMw7wwBf3AHXhKYspIUQX4A15Hw3DaZjnHhhLfWhkok6ByveKM60fI6Q%2F5QmKBPWyvzTbazv9rxZsmRE0ddK15u2KLfqPSov57%2FgkewDa31jU0XQOArbp7jWORioAW6TaSXLSbHei50WYyAa4FSzckmR6fGfKVR2OjVY2sWHfpytBlXFEUaQ9MD%2F90m7%2Fwg3lYr9aw4BexBAL4ctMd95eYxp0NpfdG5T34cocLbf6ycpzz0ym8tzyvTcfzg2yryEMOYct5M6gSGpK66CATLzWjNtxk4aENh62NgaB3Y03a8MxhyIs8A3pCzCHTCoIR4%2BWz%2F5IIEtMSM1aGR%2FQGO4QG%2BBxq7kzxtlgIr70B3mfB6fHyv1fENvT%2BR662b5HsMUl6NsF4iaWfQJD43RjJgK%2FNZsPpqBNK4dT7zD13bTABjqkATKwSOCCMFsxHOhNBun1ZhyAQi2WRBD6xGmgWWdGlec0UVBuswWf5mXWj%2Fk%2BS2hlr3bJHr%2F1DrlxUoZPSyLmh87QsI5b%2FelVn8j%2BoKTBtJL8s%2BWJeUKq%2FtZXeAJD3KuGB43kHt5%2Bdoe8ebCSJxRWqf3HuM2%2F%2Bgkq9ucwlnSSpfPyBse3kREoFtWcdajDLnWfr02PBgYimbVBL7fAjcdzfK%2BEKVVj&X-Amz-Signature=0173549f97b0c2c564ed802f92f8099dbb8330b98827333610359b5c92828b92&X-Amz-SignedHeaders=host&x-id=GetObject)
