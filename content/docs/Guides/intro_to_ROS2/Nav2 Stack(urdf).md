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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=732f7d6829b012de60ee0b4141a4cae66617153f03711da4687acc87f2a5987e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=54fdc425b6c84f24657a3ae68884de43a43ac3010a389afe41c7423a670249c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=10b46a1806f7d61cca8680202c8e9c13fba8fa86a15c3b0beb55d2b57a4ea158&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=2d1a9d4e836b38641e2aca31975e19bd3831f4c711f9f4204d3f58774916f450&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=494452d78b28b727768951de618b25156cc17957bc9d485f4fa3f2c1eae6857d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKNVI76%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDI87bHiNG6QQqSLMdxxlrkrY%2BXIDXf0e6zgLK6X8tragIhALvrNVzVpKQWirKLv5DLlPhO3BJWqSTg36VfZTxjbdNjKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzURdHUY8thEb%2Brkbsq3ANzkpGZt0H30JDj%2B0QdNaZvp8i8inVLKhHx6gWVY6bsfQfi4R9beydbcBE3HxxDymS0LqJwz5Zm03CvG8nGhvHfmsz3PStnytT73FtA4VgnFEwR%2BUVyCPInm3tb4RP9uawCkS8lLLvBTIyjaX75nzrCHzR8T26VX9zLfI8ysmO9GnRsl4YbwSG8xz4qt4aJU7GE5k%2FcmB%2FRuZfIsQqx4TOqvevBA7hx6yJjHkBGOUky%2FNpXwQJtA6ACRaC5Yuy3%2ByK%2BB7p1Dk8l3A9KMCcwvkRPxVTtDBCuYMnLqdLNkJK8uFcEwO3mke8u7TEPKCfNBCbLIAi%2BzpaGqyZIp0KhpFenk7Z5WDtYjlymbuQvuk4pHwLdVWAYkBQObx0wYpjnH0ESuPlNABnv%2BOQ2k%2BuTBevOPFLn%2FFwSi%2Fm9EuGekuj5pXUlF3nWB%2BXY3bB0%2FpVOTN7cUXWf2%2FA7QQUgEaKPYaoiXOeXIXAR5ggkNXkpYth1LlebhH542Xry5BBZ%2B9GB3%2BeQoyvdiACCv90hUQC6l4VxyboTziT45KPqi3ByBKdnFfERXS6nTeLGtDJ03mbdir8qdRpg1Wn6y47NsZ1M2mFMK8atcir8OpYVsmCBDP%2B%2FMUJk%2FRAXbIDazhDhXTCNyru%2BBjqkAfge0IqgYsr6qBISZTPw%2FpeoV3DBT8BbH3byepiDBeEfDmlH4laduosp%2BWEqZcF1nnoXqbrvKvykWDnwmfuqY7Tk4Yue5oEpH0B5HA%2Fkd7NxB6JBVs6zwAbWNUC3pFBEA3Nl%2B9ObEj%2F6iG%2Bqz8yX5%2B9iQLmI4%2FBYZLpRkdo5Z214WGJt18TeCgsfPrCtSgGVVach65hcz7rdAEdhRpmeN%2F0iRHVY&X-Amz-Signature=9a199c395b98ae98ccdee37a8632a721c8ddcf43f6a140c88d74be3b42aba101&X-Amz-SignedHeaders=host&x-id=GetObject)
