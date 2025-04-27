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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM24O3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB4Iy2jM7ibS9T4TtWNTm0QbOX46t7F5WJyEyhusxTfAiEA%2FlRcUOLBpYPd%2BYkjfAa%2Bge4lglnfotOOFSVq0T8zuZgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDOE3rVNauGXiYT5dSrcA8k6s9TRRKHTAwwrOlqLuxqND3EUqYTc4NAr0r773E2FaI4mwQD9E%2FjxTbEIWE2%2BKCXXNGc6V8ou3Rt8B4kG8QRGElOTt%2BoWkKFBU2Wv46Vd4VNBJ8LhJFpE%2BpUdr92%2Bgsnr9rbebWU6jcpIy8zYlLWTDKP5uWVotSf4%2BG0KVky7eJ%2FvroIoNrKyxv6cTx%2BoGGb%2FPrvbnGnUfsDzOMokSYQuq5y%2BUpAENxvmiux222v5PALfg041b5qbztjwaSziFkjvPrbBmO77LdH7bqbrYUrszLzAl0rdTYK6gJfuvclfpF57gJdccBHPSJRVyRlkoFwSRp%2Fh8QqqSaeHMPcUDDa8fQg0o%2FC6qDZ6eb3883cAlsgUvedwWkGWbxH7OHnA%2FRyoSRnsGGn7xOTjhxS28Ru7cLxosQmvR%2B%2FBcWoQ%2BU8ijzpryWDGLt66zNfJUweHVWcyL7e%2BxeIavNy4JX%2FzpW0XjAF8rVUlt9djJDpAw9beg0qq3VRbNDJ62OXp%2Bm7zi3xnv5RWJKwgmDav3H%2F19%2Bprjbr9naek3D0nuh1jugkL3KWbBv8W2Na5JrJdx4iJ3j18TTLLMtcAEDMEDJvH05SwRtSF8f4tUHsZXE1uoUhxTlRmnBWy1PEvRPYXMIiMuMAGOqUBlAZ3%2BCDU3rnVnKcmZvaW1HSeMp9SI1rX%2BlZwT6Q%2FJEjwSc%2F4pH0%2BpA16MFGjpYfoSLgY7E%2FcE7h9d1ZJIx5wq5uJA28%2B4QR1r6V0v55rwpH1xKymizNIzV5AmHWrOT1r9e3M8BwpQVTcpwnob9A0KaVaEJBUyflRmNBFHJyT492purNbWKGvCGiehngx8ie6tTcOTb%2Bcp6kLPUz5qwjL2GG2TRm7&X-Amz-Signature=8aa87af5401b2e183cfbe6de432368e0861c4774b0b9732c13aa575a11aa0da2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM24O3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB4Iy2jM7ibS9T4TtWNTm0QbOX46t7F5WJyEyhusxTfAiEA%2FlRcUOLBpYPd%2BYkjfAa%2Bge4lglnfotOOFSVq0T8zuZgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDOE3rVNauGXiYT5dSrcA8k6s9TRRKHTAwwrOlqLuxqND3EUqYTc4NAr0r773E2FaI4mwQD9E%2FjxTbEIWE2%2BKCXXNGc6V8ou3Rt8B4kG8QRGElOTt%2BoWkKFBU2Wv46Vd4VNBJ8LhJFpE%2BpUdr92%2Bgsnr9rbebWU6jcpIy8zYlLWTDKP5uWVotSf4%2BG0KVky7eJ%2FvroIoNrKyxv6cTx%2BoGGb%2FPrvbnGnUfsDzOMokSYQuq5y%2BUpAENxvmiux222v5PALfg041b5qbztjwaSziFkjvPrbBmO77LdH7bqbrYUrszLzAl0rdTYK6gJfuvclfpF57gJdccBHPSJRVyRlkoFwSRp%2Fh8QqqSaeHMPcUDDa8fQg0o%2FC6qDZ6eb3883cAlsgUvedwWkGWbxH7OHnA%2FRyoSRnsGGn7xOTjhxS28Ru7cLxosQmvR%2B%2FBcWoQ%2BU8ijzpryWDGLt66zNfJUweHVWcyL7e%2BxeIavNy4JX%2FzpW0XjAF8rVUlt9djJDpAw9beg0qq3VRbNDJ62OXp%2Bm7zi3xnv5RWJKwgmDav3H%2F19%2Bprjbr9naek3D0nuh1jugkL3KWbBv8W2Na5JrJdx4iJ3j18TTLLMtcAEDMEDJvH05SwRtSF8f4tUHsZXE1uoUhxTlRmnBWy1PEvRPYXMIiMuMAGOqUBlAZ3%2BCDU3rnVnKcmZvaW1HSeMp9SI1rX%2BlZwT6Q%2FJEjwSc%2F4pH0%2BpA16MFGjpYfoSLgY7E%2FcE7h9d1ZJIx5wq5uJA28%2B4QR1r6V0v55rwpH1xKymizNIzV5AmHWrOT1r9e3M8BwpQVTcpwnob9A0KaVaEJBUyflRmNBFHJyT492purNbWKGvCGiehngx8ie6tTcOTb%2Bcp6kLPUz5qwjL2GG2TRm7&X-Amz-Signature=9847ccb0100d709127ab4786d94d5a6e4f9587e7a0a7901e433ea400189f6c94&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM24O3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB4Iy2jM7ibS9T4TtWNTm0QbOX46t7F5WJyEyhusxTfAiEA%2FlRcUOLBpYPd%2BYkjfAa%2Bge4lglnfotOOFSVq0T8zuZgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDOE3rVNauGXiYT5dSrcA8k6s9TRRKHTAwwrOlqLuxqND3EUqYTc4NAr0r773E2FaI4mwQD9E%2FjxTbEIWE2%2BKCXXNGc6V8ou3Rt8B4kG8QRGElOTt%2BoWkKFBU2Wv46Vd4VNBJ8LhJFpE%2BpUdr92%2Bgsnr9rbebWU6jcpIy8zYlLWTDKP5uWVotSf4%2BG0KVky7eJ%2FvroIoNrKyxv6cTx%2BoGGb%2FPrvbnGnUfsDzOMokSYQuq5y%2BUpAENxvmiux222v5PALfg041b5qbztjwaSziFkjvPrbBmO77LdH7bqbrYUrszLzAl0rdTYK6gJfuvclfpF57gJdccBHPSJRVyRlkoFwSRp%2Fh8QqqSaeHMPcUDDa8fQg0o%2FC6qDZ6eb3883cAlsgUvedwWkGWbxH7OHnA%2FRyoSRnsGGn7xOTjhxS28Ru7cLxosQmvR%2B%2FBcWoQ%2BU8ijzpryWDGLt66zNfJUweHVWcyL7e%2BxeIavNy4JX%2FzpW0XjAF8rVUlt9djJDpAw9beg0qq3VRbNDJ62OXp%2Bm7zi3xnv5RWJKwgmDav3H%2F19%2Bprjbr9naek3D0nuh1jugkL3KWbBv8W2Na5JrJdx4iJ3j18TTLLMtcAEDMEDJvH05SwRtSF8f4tUHsZXE1uoUhxTlRmnBWy1PEvRPYXMIiMuMAGOqUBlAZ3%2BCDU3rnVnKcmZvaW1HSeMp9SI1rX%2BlZwT6Q%2FJEjwSc%2F4pH0%2BpA16MFGjpYfoSLgY7E%2FcE7h9d1ZJIx5wq5uJA28%2B4QR1r6V0v55rwpH1xKymizNIzV5AmHWrOT1r9e3M8BwpQVTcpwnob9A0KaVaEJBUyflRmNBFHJyT492purNbWKGvCGiehngx8ie6tTcOTb%2Bcp6kLPUz5qwjL2GG2TRm7&X-Amz-Signature=c6b5e1cc75588e12f72b7aa88b2370529cd7145ab924910b60135abcb0175bab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM24O3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB4Iy2jM7ibS9T4TtWNTm0QbOX46t7F5WJyEyhusxTfAiEA%2FlRcUOLBpYPd%2BYkjfAa%2Bge4lglnfotOOFSVq0T8zuZgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDOE3rVNauGXiYT5dSrcA8k6s9TRRKHTAwwrOlqLuxqND3EUqYTc4NAr0r773E2FaI4mwQD9E%2FjxTbEIWE2%2BKCXXNGc6V8ou3Rt8B4kG8QRGElOTt%2BoWkKFBU2Wv46Vd4VNBJ8LhJFpE%2BpUdr92%2Bgsnr9rbebWU6jcpIy8zYlLWTDKP5uWVotSf4%2BG0KVky7eJ%2FvroIoNrKyxv6cTx%2BoGGb%2FPrvbnGnUfsDzOMokSYQuq5y%2BUpAENxvmiux222v5PALfg041b5qbztjwaSziFkjvPrbBmO77LdH7bqbrYUrszLzAl0rdTYK6gJfuvclfpF57gJdccBHPSJRVyRlkoFwSRp%2Fh8QqqSaeHMPcUDDa8fQg0o%2FC6qDZ6eb3883cAlsgUvedwWkGWbxH7OHnA%2FRyoSRnsGGn7xOTjhxS28Ru7cLxosQmvR%2B%2FBcWoQ%2BU8ijzpryWDGLt66zNfJUweHVWcyL7e%2BxeIavNy4JX%2FzpW0XjAF8rVUlt9djJDpAw9beg0qq3VRbNDJ62OXp%2Bm7zi3xnv5RWJKwgmDav3H%2F19%2Bprjbr9naek3D0nuh1jugkL3KWbBv8W2Na5JrJdx4iJ3j18TTLLMtcAEDMEDJvH05SwRtSF8f4tUHsZXE1uoUhxTlRmnBWy1PEvRPYXMIiMuMAGOqUBlAZ3%2BCDU3rnVnKcmZvaW1HSeMp9SI1rX%2BlZwT6Q%2FJEjwSc%2F4pH0%2BpA16MFGjpYfoSLgY7E%2FcE7h9d1ZJIx5wq5uJA28%2B4QR1r6V0v55rwpH1xKymizNIzV5AmHWrOT1r9e3M8BwpQVTcpwnob9A0KaVaEJBUyflRmNBFHJyT492purNbWKGvCGiehngx8ie6tTcOTb%2Bcp6kLPUz5qwjL2GG2TRm7&X-Amz-Signature=cdf0f461e1ef70d2f384b7bc2d33fb0064ebbd5252129136c809b4b020d331b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM24O3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB4Iy2jM7ibS9T4TtWNTm0QbOX46t7F5WJyEyhusxTfAiEA%2FlRcUOLBpYPd%2BYkjfAa%2Bge4lglnfotOOFSVq0T8zuZgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDOE3rVNauGXiYT5dSrcA8k6s9TRRKHTAwwrOlqLuxqND3EUqYTc4NAr0r773E2FaI4mwQD9E%2FjxTbEIWE2%2BKCXXNGc6V8ou3Rt8B4kG8QRGElOTt%2BoWkKFBU2Wv46Vd4VNBJ8LhJFpE%2BpUdr92%2Bgsnr9rbebWU6jcpIy8zYlLWTDKP5uWVotSf4%2BG0KVky7eJ%2FvroIoNrKyxv6cTx%2BoGGb%2FPrvbnGnUfsDzOMokSYQuq5y%2BUpAENxvmiux222v5PALfg041b5qbztjwaSziFkjvPrbBmO77LdH7bqbrYUrszLzAl0rdTYK6gJfuvclfpF57gJdccBHPSJRVyRlkoFwSRp%2Fh8QqqSaeHMPcUDDa8fQg0o%2FC6qDZ6eb3883cAlsgUvedwWkGWbxH7OHnA%2FRyoSRnsGGn7xOTjhxS28Ru7cLxosQmvR%2B%2FBcWoQ%2BU8ijzpryWDGLt66zNfJUweHVWcyL7e%2BxeIavNy4JX%2FzpW0XjAF8rVUlt9djJDpAw9beg0qq3VRbNDJ62OXp%2Bm7zi3xnv5RWJKwgmDav3H%2F19%2Bprjbr9naek3D0nuh1jugkL3KWbBv8W2Na5JrJdx4iJ3j18TTLLMtcAEDMEDJvH05SwRtSF8f4tUHsZXE1uoUhxTlRmnBWy1PEvRPYXMIiMuMAGOqUBlAZ3%2BCDU3rnVnKcmZvaW1HSeMp9SI1rX%2BlZwT6Q%2FJEjwSc%2F4pH0%2BpA16MFGjpYfoSLgY7E%2FcE7h9d1ZJIx5wq5uJA28%2B4QR1r6V0v55rwpH1xKymizNIzV5AmHWrOT1r9e3M8BwpQVTcpwnob9A0KaVaEJBUyflRmNBFHJyT492purNbWKGvCGiehngx8ie6tTcOTb%2Bcp6kLPUz5qwjL2GG2TRm7&X-Amz-Signature=4364e33335dc521ca89c2a77da3eea55367787da47760311845b3bc209bd303c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM24O3E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB4Iy2jM7ibS9T4TtWNTm0QbOX46t7F5WJyEyhusxTfAiEA%2FlRcUOLBpYPd%2BYkjfAa%2Bge4lglnfotOOFSVq0T8zuZgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDOE3rVNauGXiYT5dSrcA8k6s9TRRKHTAwwrOlqLuxqND3EUqYTc4NAr0r773E2FaI4mwQD9E%2FjxTbEIWE2%2BKCXXNGc6V8ou3Rt8B4kG8QRGElOTt%2BoWkKFBU2Wv46Vd4VNBJ8LhJFpE%2BpUdr92%2Bgsnr9rbebWU6jcpIy8zYlLWTDKP5uWVotSf4%2BG0KVky7eJ%2FvroIoNrKyxv6cTx%2BoGGb%2FPrvbnGnUfsDzOMokSYQuq5y%2BUpAENxvmiux222v5PALfg041b5qbztjwaSziFkjvPrbBmO77LdH7bqbrYUrszLzAl0rdTYK6gJfuvclfpF57gJdccBHPSJRVyRlkoFwSRp%2Fh8QqqSaeHMPcUDDa8fQg0o%2FC6qDZ6eb3883cAlsgUvedwWkGWbxH7OHnA%2FRyoSRnsGGn7xOTjhxS28Ru7cLxosQmvR%2B%2FBcWoQ%2BU8ijzpryWDGLt66zNfJUweHVWcyL7e%2BxeIavNy4JX%2FzpW0XjAF8rVUlt9djJDpAw9beg0qq3VRbNDJ62OXp%2Bm7zi3xnv5RWJKwgmDav3H%2F19%2Bprjbr9naek3D0nuh1jugkL3KWbBv8W2Na5JrJdx4iJ3j18TTLLMtcAEDMEDJvH05SwRtSF8f4tUHsZXE1uoUhxTlRmnBWy1PEvRPYXMIiMuMAGOqUBlAZ3%2BCDU3rnVnKcmZvaW1HSeMp9SI1rX%2BlZwT6Q%2FJEjwSc%2F4pH0%2BpA16MFGjpYfoSLgY7E%2FcE7h9d1ZJIx5wq5uJA28%2B4QR1r6V0v55rwpH1xKymizNIzV5AmHWrOT1r9e3M8BwpQVTcpwnob9A0KaVaEJBUyflRmNBFHJyT492purNbWKGvCGiehngx8ie6tTcOTb%2Bcp6kLPUz5qwjL2GG2TRm7&X-Amz-Signature=06834509f4897d38bea5ad7e3865c8fb6d29051899088363f8fad136f3b72a4a&X-Amz-SignedHeaders=host&x-id=GetObject)
