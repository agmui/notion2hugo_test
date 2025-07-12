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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4E5ZHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPXtVWIUwGq3OwoHDOZLCxd39Rn80sH0Gwe%2FpRrqfH9AiEAjwW9pN%2FHYw1GDrG%2Fwfwo9qQQ0uu59Yi4e2XLUZqoLg4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiVlyVc3FHxXItmircA5h7vuB7%2FOTEWeWEWc9aImhqOxjyNpTYDANEKSgeBGY7Pl4JB7IlsFDUoNNFrwkLiLWBI4ubWrpYID%2Fj4OXOZbaATzofWO30DpeHLqf%2BjXr5GXN48k19L%2FOL7iOqNWuH7J9zXDbmSmEE94henisBjF8f7ydTNlzZnkjakCmM%2F4k8aOJS4oZWXjhWDYzUWNY%2FLF%2FjMjLkvMxFZMcRGxMs8DcYiTXLxq8nR3CD1qj%2FGINXK1pmkWNY%2BIZ43HQtF3xs%2B0YyJsK62gAzqG%2Bft%2BxItmzI1uCak4E9MgxYIIs9eauReG7VQYL5DkWawDeCHC7kgLx1W7nN9f%2BQzwjfFqj%2BM73sxVL%2FXidp6V2LsH%2B07RmkcJec1W3Dykhw7J392rfniqlqtzGdEDd8rTn9Y6UZX1E%2BfVhmCPzlGKp5wxy1asSCPyK4LWK9OUSAG%2FtXYu9O6WDV5J4BFluOX1d5Ri4i66KFQIxsOdl5AQBfnnsIPEczBc%2FGHhLJJKUls8clRmkbucFUYPlxvOce7b9r1IPQ56A7ZMd84i6f8DSkSZS%2B5WKgpDVn4qeKhcwRn11B%2BQ0ghEIoughvn3CpnMvg8b8IfD0F2JrslUd7raaflVkWQHi3hfibloRGguXyBCivMN2hysMGOqUBOtIlVvtuy2ECfxng1zbslZhlPwR7XzGj0EbRO1lp0TM0uczu%2FrOOAFEChfK1z2HMjyaaiOpmP3ilIihrUOOtpBQjg01tDwm4pqnB9DqNIzGpezddoJiI0%2FK%2F98%2FADCgfw5f%2Fy6Yij3CkyTCvaOeakoA%2BeDvC39dWmSVUg6BNb8fGHwY1dDefSt5Pn17Vfb1LvtS2N5XfPzw%2BEdoo69gTJILvyyG2&X-Amz-Signature=f79e891bfb41578cc262da72bc9b83d7cb81d9914956eb04d504d2981e7219a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4E5ZHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPXtVWIUwGq3OwoHDOZLCxd39Rn80sH0Gwe%2FpRrqfH9AiEAjwW9pN%2FHYw1GDrG%2Fwfwo9qQQ0uu59Yi4e2XLUZqoLg4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiVlyVc3FHxXItmircA5h7vuB7%2FOTEWeWEWc9aImhqOxjyNpTYDANEKSgeBGY7Pl4JB7IlsFDUoNNFrwkLiLWBI4ubWrpYID%2Fj4OXOZbaATzofWO30DpeHLqf%2BjXr5GXN48k19L%2FOL7iOqNWuH7J9zXDbmSmEE94henisBjF8f7ydTNlzZnkjakCmM%2F4k8aOJS4oZWXjhWDYzUWNY%2FLF%2FjMjLkvMxFZMcRGxMs8DcYiTXLxq8nR3CD1qj%2FGINXK1pmkWNY%2BIZ43HQtF3xs%2B0YyJsK62gAzqG%2Bft%2BxItmzI1uCak4E9MgxYIIs9eauReG7VQYL5DkWawDeCHC7kgLx1W7nN9f%2BQzwjfFqj%2BM73sxVL%2FXidp6V2LsH%2B07RmkcJec1W3Dykhw7J392rfniqlqtzGdEDd8rTn9Y6UZX1E%2BfVhmCPzlGKp5wxy1asSCPyK4LWK9OUSAG%2FtXYu9O6WDV5J4BFluOX1d5Ri4i66KFQIxsOdl5AQBfnnsIPEczBc%2FGHhLJJKUls8clRmkbucFUYPlxvOce7b9r1IPQ56A7ZMd84i6f8DSkSZS%2B5WKgpDVn4qeKhcwRn11B%2BQ0ghEIoughvn3CpnMvg8b8IfD0F2JrslUd7raaflVkWQHi3hfibloRGguXyBCivMN2hysMGOqUBOtIlVvtuy2ECfxng1zbslZhlPwR7XzGj0EbRO1lp0TM0uczu%2FrOOAFEChfK1z2HMjyaaiOpmP3ilIihrUOOtpBQjg01tDwm4pqnB9DqNIzGpezddoJiI0%2FK%2F98%2FADCgfw5f%2Fy6Yij3CkyTCvaOeakoA%2BeDvC39dWmSVUg6BNb8fGHwY1dDefSt5Pn17Vfb1LvtS2N5XfPzw%2BEdoo69gTJILvyyG2&X-Amz-Signature=ca47dc8d0e464ee2e646ff4f1903cd932da37809506c87c11f242bc89329dac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4E5ZHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPXtVWIUwGq3OwoHDOZLCxd39Rn80sH0Gwe%2FpRrqfH9AiEAjwW9pN%2FHYw1GDrG%2Fwfwo9qQQ0uu59Yi4e2XLUZqoLg4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiVlyVc3FHxXItmircA5h7vuB7%2FOTEWeWEWc9aImhqOxjyNpTYDANEKSgeBGY7Pl4JB7IlsFDUoNNFrwkLiLWBI4ubWrpYID%2Fj4OXOZbaATzofWO30DpeHLqf%2BjXr5GXN48k19L%2FOL7iOqNWuH7J9zXDbmSmEE94henisBjF8f7ydTNlzZnkjakCmM%2F4k8aOJS4oZWXjhWDYzUWNY%2FLF%2FjMjLkvMxFZMcRGxMs8DcYiTXLxq8nR3CD1qj%2FGINXK1pmkWNY%2BIZ43HQtF3xs%2B0YyJsK62gAzqG%2Bft%2BxItmzI1uCak4E9MgxYIIs9eauReG7VQYL5DkWawDeCHC7kgLx1W7nN9f%2BQzwjfFqj%2BM73sxVL%2FXidp6V2LsH%2B07RmkcJec1W3Dykhw7J392rfniqlqtzGdEDd8rTn9Y6UZX1E%2BfVhmCPzlGKp5wxy1asSCPyK4LWK9OUSAG%2FtXYu9O6WDV5J4BFluOX1d5Ri4i66KFQIxsOdl5AQBfnnsIPEczBc%2FGHhLJJKUls8clRmkbucFUYPlxvOce7b9r1IPQ56A7ZMd84i6f8DSkSZS%2B5WKgpDVn4qeKhcwRn11B%2BQ0ghEIoughvn3CpnMvg8b8IfD0F2JrslUd7raaflVkWQHi3hfibloRGguXyBCivMN2hysMGOqUBOtIlVvtuy2ECfxng1zbslZhlPwR7XzGj0EbRO1lp0TM0uczu%2FrOOAFEChfK1z2HMjyaaiOpmP3ilIihrUOOtpBQjg01tDwm4pqnB9DqNIzGpezddoJiI0%2FK%2F98%2FADCgfw5f%2Fy6Yij3CkyTCvaOeakoA%2BeDvC39dWmSVUg6BNb8fGHwY1dDefSt5Pn17Vfb1LvtS2N5XfPzw%2BEdoo69gTJILvyyG2&X-Amz-Signature=1cb8b42a3f811e526aa2ea9e9e1e324d7d61b8ec3e999e814b46bae6cae93679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4E5ZHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPXtVWIUwGq3OwoHDOZLCxd39Rn80sH0Gwe%2FpRrqfH9AiEAjwW9pN%2FHYw1GDrG%2Fwfwo9qQQ0uu59Yi4e2XLUZqoLg4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiVlyVc3FHxXItmircA5h7vuB7%2FOTEWeWEWc9aImhqOxjyNpTYDANEKSgeBGY7Pl4JB7IlsFDUoNNFrwkLiLWBI4ubWrpYID%2Fj4OXOZbaATzofWO30DpeHLqf%2BjXr5GXN48k19L%2FOL7iOqNWuH7J9zXDbmSmEE94henisBjF8f7ydTNlzZnkjakCmM%2F4k8aOJS4oZWXjhWDYzUWNY%2FLF%2FjMjLkvMxFZMcRGxMs8DcYiTXLxq8nR3CD1qj%2FGINXK1pmkWNY%2BIZ43HQtF3xs%2B0YyJsK62gAzqG%2Bft%2BxItmzI1uCak4E9MgxYIIs9eauReG7VQYL5DkWawDeCHC7kgLx1W7nN9f%2BQzwjfFqj%2BM73sxVL%2FXidp6V2LsH%2B07RmkcJec1W3Dykhw7J392rfniqlqtzGdEDd8rTn9Y6UZX1E%2BfVhmCPzlGKp5wxy1asSCPyK4LWK9OUSAG%2FtXYu9O6WDV5J4BFluOX1d5Ri4i66KFQIxsOdl5AQBfnnsIPEczBc%2FGHhLJJKUls8clRmkbucFUYPlxvOce7b9r1IPQ56A7ZMd84i6f8DSkSZS%2B5WKgpDVn4qeKhcwRn11B%2BQ0ghEIoughvn3CpnMvg8b8IfD0F2JrslUd7raaflVkWQHi3hfibloRGguXyBCivMN2hysMGOqUBOtIlVvtuy2ECfxng1zbslZhlPwR7XzGj0EbRO1lp0TM0uczu%2FrOOAFEChfK1z2HMjyaaiOpmP3ilIihrUOOtpBQjg01tDwm4pqnB9DqNIzGpezddoJiI0%2FK%2F98%2FADCgfw5f%2Fy6Yij3CkyTCvaOeakoA%2BeDvC39dWmSVUg6BNb8fGHwY1dDefSt5Pn17Vfb1LvtS2N5XfPzw%2BEdoo69gTJILvyyG2&X-Amz-Signature=09a25629e6baa2fd1dcbfba184848214ca1912e0c13ce7c970cbba9ee83886e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4E5ZHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPXtVWIUwGq3OwoHDOZLCxd39Rn80sH0Gwe%2FpRrqfH9AiEAjwW9pN%2FHYw1GDrG%2Fwfwo9qQQ0uu59Yi4e2XLUZqoLg4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiVlyVc3FHxXItmircA5h7vuB7%2FOTEWeWEWc9aImhqOxjyNpTYDANEKSgeBGY7Pl4JB7IlsFDUoNNFrwkLiLWBI4ubWrpYID%2Fj4OXOZbaATzofWO30DpeHLqf%2BjXr5GXN48k19L%2FOL7iOqNWuH7J9zXDbmSmEE94henisBjF8f7ydTNlzZnkjakCmM%2F4k8aOJS4oZWXjhWDYzUWNY%2FLF%2FjMjLkvMxFZMcRGxMs8DcYiTXLxq8nR3CD1qj%2FGINXK1pmkWNY%2BIZ43HQtF3xs%2B0YyJsK62gAzqG%2Bft%2BxItmzI1uCak4E9MgxYIIs9eauReG7VQYL5DkWawDeCHC7kgLx1W7nN9f%2BQzwjfFqj%2BM73sxVL%2FXidp6V2LsH%2B07RmkcJec1W3Dykhw7J392rfniqlqtzGdEDd8rTn9Y6UZX1E%2BfVhmCPzlGKp5wxy1asSCPyK4LWK9OUSAG%2FtXYu9O6WDV5J4BFluOX1d5Ri4i66KFQIxsOdl5AQBfnnsIPEczBc%2FGHhLJJKUls8clRmkbucFUYPlxvOce7b9r1IPQ56A7ZMd84i6f8DSkSZS%2B5WKgpDVn4qeKhcwRn11B%2BQ0ghEIoughvn3CpnMvg8b8IfD0F2JrslUd7raaflVkWQHi3hfibloRGguXyBCivMN2hysMGOqUBOtIlVvtuy2ECfxng1zbslZhlPwR7XzGj0EbRO1lp0TM0uczu%2FrOOAFEChfK1z2HMjyaaiOpmP3ilIihrUOOtpBQjg01tDwm4pqnB9DqNIzGpezddoJiI0%2FK%2F98%2FADCgfw5f%2Fy6Yij3CkyTCvaOeakoA%2BeDvC39dWmSVUg6BNb8fGHwY1dDefSt5Pn17Vfb1LvtS2N5XfPzw%2BEdoo69gTJILvyyG2&X-Amz-Signature=d8d616b64366fbb8c9fdda49c6beafb47b0f88cf1b8f722e9742fa1f3e02f85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4E5ZHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPXtVWIUwGq3OwoHDOZLCxd39Rn80sH0Gwe%2FpRrqfH9AiEAjwW9pN%2FHYw1GDrG%2Fwfwo9qQQ0uu59Yi4e2XLUZqoLg4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiVlyVc3FHxXItmircA5h7vuB7%2FOTEWeWEWc9aImhqOxjyNpTYDANEKSgeBGY7Pl4JB7IlsFDUoNNFrwkLiLWBI4ubWrpYID%2Fj4OXOZbaATzofWO30DpeHLqf%2BjXr5GXN48k19L%2FOL7iOqNWuH7J9zXDbmSmEE94henisBjF8f7ydTNlzZnkjakCmM%2F4k8aOJS4oZWXjhWDYzUWNY%2FLF%2FjMjLkvMxFZMcRGxMs8DcYiTXLxq8nR3CD1qj%2FGINXK1pmkWNY%2BIZ43HQtF3xs%2B0YyJsK62gAzqG%2Bft%2BxItmzI1uCak4E9MgxYIIs9eauReG7VQYL5DkWawDeCHC7kgLx1W7nN9f%2BQzwjfFqj%2BM73sxVL%2FXidp6V2LsH%2B07RmkcJec1W3Dykhw7J392rfniqlqtzGdEDd8rTn9Y6UZX1E%2BfVhmCPzlGKp5wxy1asSCPyK4LWK9OUSAG%2FtXYu9O6WDV5J4BFluOX1d5Ri4i66KFQIxsOdl5AQBfnnsIPEczBc%2FGHhLJJKUls8clRmkbucFUYPlxvOce7b9r1IPQ56A7ZMd84i6f8DSkSZS%2B5WKgpDVn4qeKhcwRn11B%2BQ0ghEIoughvn3CpnMvg8b8IfD0F2JrslUd7raaflVkWQHi3hfibloRGguXyBCivMN2hysMGOqUBOtIlVvtuy2ECfxng1zbslZhlPwR7XzGj0EbRO1lp0TM0uczu%2FrOOAFEChfK1z2HMjyaaiOpmP3ilIihrUOOtpBQjg01tDwm4pqnB9DqNIzGpezddoJiI0%2FK%2F98%2FADCgfw5f%2Fy6Yij3CkyTCvaOeakoA%2BeDvC39dWmSVUg6BNb8fGHwY1dDefSt5Pn17Vfb1LvtS2N5XfPzw%2BEdoo69gTJILvyyG2&X-Amz-Signature=2dd67c505c5bae50ea3fc7375334f80f98d9f8b0bcc2013a83766c03acc8ace9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
