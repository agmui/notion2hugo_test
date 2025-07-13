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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7L6TZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Em%2Fb1pXx%2BRMMQWf8EmIyy0XKEUNaTR0jy8aXk%2BifDgIgG%2BZ%2FkQS5EpxNaoIdkRyLt50JANO6VXrqMv1RqUjVNWoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVOvR1Gthp9T3JeOircA0Jwz0pFoxoM98GqI9NxJ7SpbuiH8ODNSVf%2FnvZOA70gRPrZ8D0wqo1FUoLCxT%2Bn0gm%2F0OphfqBxuaI%2BvMlYVg7FR7WZ%2BtxnfekWl9q%2BadRtOLZj0KSaEr08h1FRMxgyHRTql54%2FwWZYyzoxrceGV92xIM6j%2BrBNcGHj66lDX2Hh8Q2xn9Zu4d5K0tZKMQSLBQugWZ8lEemc977uXy%2FiFWKr1sYI6xOj3amTwPxqmfTGN0Czj2074p2YFSMypw0IYun%2FjQK517oPrSKOKFOiMjkDBNU9hYw9WCpkjI%2FypBKKza8qYpMx%2F1N6BJxSQ5VJO9RzlmNV6r0ny3icCc3dGtNbRVt%2BIJuyAM4gEZ9qmmgHjZzOuYQDHRIj4yAvBhhoR922EYZXwfIpDSD5SQwn7drIdA1qhkb1A8i7StuSzLn32b73nyLYFbxKJWPhbG9994%2BWQDItw7vWt9QDyh5ObGirhVERNXyJPfIp8YLi3MMUWt0US3P6rYSgj4dGGeEmieBEOTLdRVkZQSP6VyF8yR69Ts8ygk4vdFuwoNoJGGo9uWBiHofPCdW%2BwrygR4vN%2FGOcRAkzJLtEFlFmixhmLydl8CYV%2FVJ4R08084NEkzHaVh7kj%2B2YI1dV6auwMNyWz8MGOqUBn4GL58bldCKEvwsRAyCB38hfpfammJFYmMMwXVA%2FMwOS64YrWleASKI9ArQkw7A1Y5KGV6jwtWseR%2FfTm9%2B2pg9iGjRYSJLED9U3WrEYkPj41RvIFYzxmTgE9HY5XdqZotoQ9fQl4Q8W6kNcK5uBvJhdD01EUQ%2F8jVGl%2BzkG8pmSq%2F0QZnA1KmPJwTyVNBgXk8JV6fC%2BFvBmgHzjE6WQgj3pKVYX&X-Amz-Signature=2d5146c6c5db64b51a80486a9b3dcf7b6f744784ba3e82fe2ff3add1e60c94b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7L6TZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Em%2Fb1pXx%2BRMMQWf8EmIyy0XKEUNaTR0jy8aXk%2BifDgIgG%2BZ%2FkQS5EpxNaoIdkRyLt50JANO6VXrqMv1RqUjVNWoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVOvR1Gthp9T3JeOircA0Jwz0pFoxoM98GqI9NxJ7SpbuiH8ODNSVf%2FnvZOA70gRPrZ8D0wqo1FUoLCxT%2Bn0gm%2F0OphfqBxuaI%2BvMlYVg7FR7WZ%2BtxnfekWl9q%2BadRtOLZj0KSaEr08h1FRMxgyHRTql54%2FwWZYyzoxrceGV92xIM6j%2BrBNcGHj66lDX2Hh8Q2xn9Zu4d5K0tZKMQSLBQugWZ8lEemc977uXy%2FiFWKr1sYI6xOj3amTwPxqmfTGN0Czj2074p2YFSMypw0IYun%2FjQK517oPrSKOKFOiMjkDBNU9hYw9WCpkjI%2FypBKKza8qYpMx%2F1N6BJxSQ5VJO9RzlmNV6r0ny3icCc3dGtNbRVt%2BIJuyAM4gEZ9qmmgHjZzOuYQDHRIj4yAvBhhoR922EYZXwfIpDSD5SQwn7drIdA1qhkb1A8i7StuSzLn32b73nyLYFbxKJWPhbG9994%2BWQDItw7vWt9QDyh5ObGirhVERNXyJPfIp8YLi3MMUWt0US3P6rYSgj4dGGeEmieBEOTLdRVkZQSP6VyF8yR69Ts8ygk4vdFuwoNoJGGo9uWBiHofPCdW%2BwrygR4vN%2FGOcRAkzJLtEFlFmixhmLydl8CYV%2FVJ4R08084NEkzHaVh7kj%2B2YI1dV6auwMNyWz8MGOqUBn4GL58bldCKEvwsRAyCB38hfpfammJFYmMMwXVA%2FMwOS64YrWleASKI9ArQkw7A1Y5KGV6jwtWseR%2FfTm9%2B2pg9iGjRYSJLED9U3WrEYkPj41RvIFYzxmTgE9HY5XdqZotoQ9fQl4Q8W6kNcK5uBvJhdD01EUQ%2F8jVGl%2BzkG8pmSq%2F0QZnA1KmPJwTyVNBgXk8JV6fC%2BFvBmgHzjE6WQgj3pKVYX&X-Amz-Signature=4c94de1a1114fed8db20873f28937860c3439eb6bc6b2070a25ff9a2bf111b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7L6TZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Em%2Fb1pXx%2BRMMQWf8EmIyy0XKEUNaTR0jy8aXk%2BifDgIgG%2BZ%2FkQS5EpxNaoIdkRyLt50JANO6VXrqMv1RqUjVNWoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVOvR1Gthp9T3JeOircA0Jwz0pFoxoM98GqI9NxJ7SpbuiH8ODNSVf%2FnvZOA70gRPrZ8D0wqo1FUoLCxT%2Bn0gm%2F0OphfqBxuaI%2BvMlYVg7FR7WZ%2BtxnfekWl9q%2BadRtOLZj0KSaEr08h1FRMxgyHRTql54%2FwWZYyzoxrceGV92xIM6j%2BrBNcGHj66lDX2Hh8Q2xn9Zu4d5K0tZKMQSLBQugWZ8lEemc977uXy%2FiFWKr1sYI6xOj3amTwPxqmfTGN0Czj2074p2YFSMypw0IYun%2FjQK517oPrSKOKFOiMjkDBNU9hYw9WCpkjI%2FypBKKza8qYpMx%2F1N6BJxSQ5VJO9RzlmNV6r0ny3icCc3dGtNbRVt%2BIJuyAM4gEZ9qmmgHjZzOuYQDHRIj4yAvBhhoR922EYZXwfIpDSD5SQwn7drIdA1qhkb1A8i7StuSzLn32b73nyLYFbxKJWPhbG9994%2BWQDItw7vWt9QDyh5ObGirhVERNXyJPfIp8YLi3MMUWt0US3P6rYSgj4dGGeEmieBEOTLdRVkZQSP6VyF8yR69Ts8ygk4vdFuwoNoJGGo9uWBiHofPCdW%2BwrygR4vN%2FGOcRAkzJLtEFlFmixhmLydl8CYV%2FVJ4R08084NEkzHaVh7kj%2B2YI1dV6auwMNyWz8MGOqUBn4GL58bldCKEvwsRAyCB38hfpfammJFYmMMwXVA%2FMwOS64YrWleASKI9ArQkw7A1Y5KGV6jwtWseR%2FfTm9%2B2pg9iGjRYSJLED9U3WrEYkPj41RvIFYzxmTgE9HY5XdqZotoQ9fQl4Q8W6kNcK5uBvJhdD01EUQ%2F8jVGl%2BzkG8pmSq%2F0QZnA1KmPJwTyVNBgXk8JV6fC%2BFvBmgHzjE6WQgj3pKVYX&X-Amz-Signature=6a0841667b5eaa8f94a9079309edfc4025f23897dd11586cefa273a76e2270bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7L6TZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Em%2Fb1pXx%2BRMMQWf8EmIyy0XKEUNaTR0jy8aXk%2BifDgIgG%2BZ%2FkQS5EpxNaoIdkRyLt50JANO6VXrqMv1RqUjVNWoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVOvR1Gthp9T3JeOircA0Jwz0pFoxoM98GqI9NxJ7SpbuiH8ODNSVf%2FnvZOA70gRPrZ8D0wqo1FUoLCxT%2Bn0gm%2F0OphfqBxuaI%2BvMlYVg7FR7WZ%2BtxnfekWl9q%2BadRtOLZj0KSaEr08h1FRMxgyHRTql54%2FwWZYyzoxrceGV92xIM6j%2BrBNcGHj66lDX2Hh8Q2xn9Zu4d5K0tZKMQSLBQugWZ8lEemc977uXy%2FiFWKr1sYI6xOj3amTwPxqmfTGN0Czj2074p2YFSMypw0IYun%2FjQK517oPrSKOKFOiMjkDBNU9hYw9WCpkjI%2FypBKKza8qYpMx%2F1N6BJxSQ5VJO9RzlmNV6r0ny3icCc3dGtNbRVt%2BIJuyAM4gEZ9qmmgHjZzOuYQDHRIj4yAvBhhoR922EYZXwfIpDSD5SQwn7drIdA1qhkb1A8i7StuSzLn32b73nyLYFbxKJWPhbG9994%2BWQDItw7vWt9QDyh5ObGirhVERNXyJPfIp8YLi3MMUWt0US3P6rYSgj4dGGeEmieBEOTLdRVkZQSP6VyF8yR69Ts8ygk4vdFuwoNoJGGo9uWBiHofPCdW%2BwrygR4vN%2FGOcRAkzJLtEFlFmixhmLydl8CYV%2FVJ4R08084NEkzHaVh7kj%2B2YI1dV6auwMNyWz8MGOqUBn4GL58bldCKEvwsRAyCB38hfpfammJFYmMMwXVA%2FMwOS64YrWleASKI9ArQkw7A1Y5KGV6jwtWseR%2FfTm9%2B2pg9iGjRYSJLED9U3WrEYkPj41RvIFYzxmTgE9HY5XdqZotoQ9fQl4Q8W6kNcK5uBvJhdD01EUQ%2F8jVGl%2BzkG8pmSq%2F0QZnA1KmPJwTyVNBgXk8JV6fC%2BFvBmgHzjE6WQgj3pKVYX&X-Amz-Signature=e36e3a1f798efca2c2286c4d233a86c8d109f71d40f60f232656608afee681f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7L6TZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Em%2Fb1pXx%2BRMMQWf8EmIyy0XKEUNaTR0jy8aXk%2BifDgIgG%2BZ%2FkQS5EpxNaoIdkRyLt50JANO6VXrqMv1RqUjVNWoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVOvR1Gthp9T3JeOircA0Jwz0pFoxoM98GqI9NxJ7SpbuiH8ODNSVf%2FnvZOA70gRPrZ8D0wqo1FUoLCxT%2Bn0gm%2F0OphfqBxuaI%2BvMlYVg7FR7WZ%2BtxnfekWl9q%2BadRtOLZj0KSaEr08h1FRMxgyHRTql54%2FwWZYyzoxrceGV92xIM6j%2BrBNcGHj66lDX2Hh8Q2xn9Zu4d5K0tZKMQSLBQugWZ8lEemc977uXy%2FiFWKr1sYI6xOj3amTwPxqmfTGN0Czj2074p2YFSMypw0IYun%2FjQK517oPrSKOKFOiMjkDBNU9hYw9WCpkjI%2FypBKKza8qYpMx%2F1N6BJxSQ5VJO9RzlmNV6r0ny3icCc3dGtNbRVt%2BIJuyAM4gEZ9qmmgHjZzOuYQDHRIj4yAvBhhoR922EYZXwfIpDSD5SQwn7drIdA1qhkb1A8i7StuSzLn32b73nyLYFbxKJWPhbG9994%2BWQDItw7vWt9QDyh5ObGirhVERNXyJPfIp8YLi3MMUWt0US3P6rYSgj4dGGeEmieBEOTLdRVkZQSP6VyF8yR69Ts8ygk4vdFuwoNoJGGo9uWBiHofPCdW%2BwrygR4vN%2FGOcRAkzJLtEFlFmixhmLydl8CYV%2FVJ4R08084NEkzHaVh7kj%2B2YI1dV6auwMNyWz8MGOqUBn4GL58bldCKEvwsRAyCB38hfpfammJFYmMMwXVA%2FMwOS64YrWleASKI9ArQkw7A1Y5KGV6jwtWseR%2FfTm9%2B2pg9iGjRYSJLED9U3WrEYkPj41RvIFYzxmTgE9HY5XdqZotoQ9fQl4Q8W6kNcK5uBvJhdD01EUQ%2F8jVGl%2BzkG8pmSq%2F0QZnA1KmPJwTyVNBgXk8JV6fC%2BFvBmgHzjE6WQgj3pKVYX&X-Amz-Signature=4e1592c0fc1157fae5c45d84067973db3a74ef5dfb2b60bd1172c0f3f8f04120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7L6TZM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Em%2Fb1pXx%2BRMMQWf8EmIyy0XKEUNaTR0jy8aXk%2BifDgIgG%2BZ%2FkQS5EpxNaoIdkRyLt50JANO6VXrqMv1RqUjVNWoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLVOvR1Gthp9T3JeOircA0Jwz0pFoxoM98GqI9NxJ7SpbuiH8ODNSVf%2FnvZOA70gRPrZ8D0wqo1FUoLCxT%2Bn0gm%2F0OphfqBxuaI%2BvMlYVg7FR7WZ%2BtxnfekWl9q%2BadRtOLZj0KSaEr08h1FRMxgyHRTql54%2FwWZYyzoxrceGV92xIM6j%2BrBNcGHj66lDX2Hh8Q2xn9Zu4d5K0tZKMQSLBQugWZ8lEemc977uXy%2FiFWKr1sYI6xOj3amTwPxqmfTGN0Czj2074p2YFSMypw0IYun%2FjQK517oPrSKOKFOiMjkDBNU9hYw9WCpkjI%2FypBKKza8qYpMx%2F1N6BJxSQ5VJO9RzlmNV6r0ny3icCc3dGtNbRVt%2BIJuyAM4gEZ9qmmgHjZzOuYQDHRIj4yAvBhhoR922EYZXwfIpDSD5SQwn7drIdA1qhkb1A8i7StuSzLn32b73nyLYFbxKJWPhbG9994%2BWQDItw7vWt9QDyh5ObGirhVERNXyJPfIp8YLi3MMUWt0US3P6rYSgj4dGGeEmieBEOTLdRVkZQSP6VyF8yR69Ts8ygk4vdFuwoNoJGGo9uWBiHofPCdW%2BwrygR4vN%2FGOcRAkzJLtEFlFmixhmLydl8CYV%2FVJ4R08084NEkzHaVh7kj%2B2YI1dV6auwMNyWz8MGOqUBn4GL58bldCKEvwsRAyCB38hfpfammJFYmMMwXVA%2FMwOS64YrWleASKI9ArQkw7A1Y5KGV6jwtWseR%2FfTm9%2B2pg9iGjRYSJLED9U3WrEYkPj41RvIFYzxmTgE9HY5XdqZotoQ9fQl4Q8W6kNcK5uBvJhdD01EUQ%2F8jVGl%2BzkG8pmSq%2F0QZnA1KmPJwTyVNBgXk8JV6fC%2BFvBmgHzjE6WQgj3pKVYX&X-Amz-Signature=fefb5f3c08f75fa4a2e9370d3d9fde26e724d2140445f7b19c15035f7868cb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
