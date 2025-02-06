---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4C2OP7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIG569QvGayR8qegNd0JX0ZqlWLHVJE82Yn0XAKe1MPtwAiEAoqiIgDv2iQRqrFTR%2BhE6a39oKguFtv6NrWlUDofxYiQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfXz5e0vXG%2FQX5ZfyrcA%2BQCDMWzjn0k84yyxIei5wtu5BrTCzWzUMDEXpYXZ2w5GoneQaycnSnh7g1TSNonYwsurZw7nWcGWaCJAT6wHfveKWVBTh9iw5F8p%2BK1B0y757YfoxpuodO0W8EvY7WwAtfXWii5lCd74vIcs%2BhyHdveYQBBMrMyAsLURN5%2F7yXNWHBIC0WIcmBxKhpT5CcIbC%2FQrsj5MkPGqcSF2UjsdtpGtLS%2BfOa4rneM99LPEkbU%2BxOKapR%2F%2FZNDr1WkWNFxd8ETF4GBBBun%2Fe3SgtBxwmcncI57yFV7Zd95aXVeKpr4iBZpyQHByOa8f6NoBCzUmoPt1FKGfEpM9e3488MCA6HaJic3KVX9xYEvtJzMsO4XXC34kJ6q2bXzfQ%2FLoZboMFsSsWofpDrUdlhARNZsMSz373zfh1BM%2F%2FR7eXwh6fsbS8ElqE1CqvQR7MlEHsA5LfmLBmQ%2BRCUKF4lf0kQGjc4Gl6ZtwkB85KqheyReq8l8WBR4oou8EaNyqvj%2FFwgiiG0wup8vvRB6EtPuJfQ4wkj%2FsAnNyZ%2BHIaBpMZrK9s76NgheBIEadR4uYnSVvo5moQGUbSi8%2BjbJV11zOHxKTY2CTjensuEnsVEEZp6CXtXClZxUSBosjErQqYNWMNntkb0GOqUBLDQa8ymeZQIyi%2B97%2F1qaMPdAircrcW5%2B%2Bn8bG7pTBW4qIzogVPyCJfXIEhXzFs4s7KX20pbz3P8ElK3o%2BgPoz3Nz8%2Fisr%2FUyeqLJ8YSEYss1N%2BdJpk7YR8TexNAaGMb7uOTxzoIFfXF%2BcyRZxhJGzgTdLK2uK1R77C7RyhtcOIfGuNVt9U6LOeQkFkRfD9xMUrdPT6GNI3k9F9HWaxgh5cM%2BtubG&X-Amz-Signature=53ccd3ef6e6410ad2697beef97b92bf3b83b14371c179967d9dde2a3872f5134&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4C2OP7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIG569QvGayR8qegNd0JX0ZqlWLHVJE82Yn0XAKe1MPtwAiEAoqiIgDv2iQRqrFTR%2BhE6a39oKguFtv6NrWlUDofxYiQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfXz5e0vXG%2FQX5ZfyrcA%2BQCDMWzjn0k84yyxIei5wtu5BrTCzWzUMDEXpYXZ2w5GoneQaycnSnh7g1TSNonYwsurZw7nWcGWaCJAT6wHfveKWVBTh9iw5F8p%2BK1B0y757YfoxpuodO0W8EvY7WwAtfXWii5lCd74vIcs%2BhyHdveYQBBMrMyAsLURN5%2F7yXNWHBIC0WIcmBxKhpT5CcIbC%2FQrsj5MkPGqcSF2UjsdtpGtLS%2BfOa4rneM99LPEkbU%2BxOKapR%2F%2FZNDr1WkWNFxd8ETF4GBBBun%2Fe3SgtBxwmcncI57yFV7Zd95aXVeKpr4iBZpyQHByOa8f6NoBCzUmoPt1FKGfEpM9e3488MCA6HaJic3KVX9xYEvtJzMsO4XXC34kJ6q2bXzfQ%2FLoZboMFsSsWofpDrUdlhARNZsMSz373zfh1BM%2F%2FR7eXwh6fsbS8ElqE1CqvQR7MlEHsA5LfmLBmQ%2BRCUKF4lf0kQGjc4Gl6ZtwkB85KqheyReq8l8WBR4oou8EaNyqvj%2FFwgiiG0wup8vvRB6EtPuJfQ4wkj%2FsAnNyZ%2BHIaBpMZrK9s76NgheBIEadR4uYnSVvo5moQGUbSi8%2BjbJV11zOHxKTY2CTjensuEnsVEEZp6CXtXClZxUSBosjErQqYNWMNntkb0GOqUBLDQa8ymeZQIyi%2B97%2F1qaMPdAircrcW5%2B%2Bn8bG7pTBW4qIzogVPyCJfXIEhXzFs4s7KX20pbz3P8ElK3o%2BgPoz3Nz8%2Fisr%2FUyeqLJ8YSEYss1N%2BdJpk7YR8TexNAaGMb7uOTxzoIFfXF%2BcyRZxhJGzgTdLK2uK1R77C7RyhtcOIfGuNVt9U6LOeQkFkRfD9xMUrdPT6GNI3k9F9HWaxgh5cM%2BtubG&X-Amz-Signature=7192cc0840de9b0f82f91a6889f72e6938cbeab1f5c7b94944e78aa4b23d26c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4C2OP7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIG569QvGayR8qegNd0JX0ZqlWLHVJE82Yn0XAKe1MPtwAiEAoqiIgDv2iQRqrFTR%2BhE6a39oKguFtv6NrWlUDofxYiQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfXz5e0vXG%2FQX5ZfyrcA%2BQCDMWzjn0k84yyxIei5wtu5BrTCzWzUMDEXpYXZ2w5GoneQaycnSnh7g1TSNonYwsurZw7nWcGWaCJAT6wHfveKWVBTh9iw5F8p%2BK1B0y757YfoxpuodO0W8EvY7WwAtfXWii5lCd74vIcs%2BhyHdveYQBBMrMyAsLURN5%2F7yXNWHBIC0WIcmBxKhpT5CcIbC%2FQrsj5MkPGqcSF2UjsdtpGtLS%2BfOa4rneM99LPEkbU%2BxOKapR%2F%2FZNDr1WkWNFxd8ETF4GBBBun%2Fe3SgtBxwmcncI57yFV7Zd95aXVeKpr4iBZpyQHByOa8f6NoBCzUmoPt1FKGfEpM9e3488MCA6HaJic3KVX9xYEvtJzMsO4XXC34kJ6q2bXzfQ%2FLoZboMFsSsWofpDrUdlhARNZsMSz373zfh1BM%2F%2FR7eXwh6fsbS8ElqE1CqvQR7MlEHsA5LfmLBmQ%2BRCUKF4lf0kQGjc4Gl6ZtwkB85KqheyReq8l8WBR4oou8EaNyqvj%2FFwgiiG0wup8vvRB6EtPuJfQ4wkj%2FsAnNyZ%2BHIaBpMZrK9s76NgheBIEadR4uYnSVvo5moQGUbSi8%2BjbJV11zOHxKTY2CTjensuEnsVEEZp6CXtXClZxUSBosjErQqYNWMNntkb0GOqUBLDQa8ymeZQIyi%2B97%2F1qaMPdAircrcW5%2B%2Bn8bG7pTBW4qIzogVPyCJfXIEhXzFs4s7KX20pbz3P8ElK3o%2BgPoz3Nz8%2Fisr%2FUyeqLJ8YSEYss1N%2BdJpk7YR8TexNAaGMb7uOTxzoIFfXF%2BcyRZxhJGzgTdLK2uK1R77C7RyhtcOIfGuNVt9U6LOeQkFkRfD9xMUrdPT6GNI3k9F9HWaxgh5cM%2BtubG&X-Amz-Signature=cff92bee76ae86209a0d3e6a99eea9f473876b8da02ab9331bb52e3992779006&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4C2OP7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIG569QvGayR8qegNd0JX0ZqlWLHVJE82Yn0XAKe1MPtwAiEAoqiIgDv2iQRqrFTR%2BhE6a39oKguFtv6NrWlUDofxYiQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfXz5e0vXG%2FQX5ZfyrcA%2BQCDMWzjn0k84yyxIei5wtu5BrTCzWzUMDEXpYXZ2w5GoneQaycnSnh7g1TSNonYwsurZw7nWcGWaCJAT6wHfveKWVBTh9iw5F8p%2BK1B0y757YfoxpuodO0W8EvY7WwAtfXWii5lCd74vIcs%2BhyHdveYQBBMrMyAsLURN5%2F7yXNWHBIC0WIcmBxKhpT5CcIbC%2FQrsj5MkPGqcSF2UjsdtpGtLS%2BfOa4rneM99LPEkbU%2BxOKapR%2F%2FZNDr1WkWNFxd8ETF4GBBBun%2Fe3SgtBxwmcncI57yFV7Zd95aXVeKpr4iBZpyQHByOa8f6NoBCzUmoPt1FKGfEpM9e3488MCA6HaJic3KVX9xYEvtJzMsO4XXC34kJ6q2bXzfQ%2FLoZboMFsSsWofpDrUdlhARNZsMSz373zfh1BM%2F%2FR7eXwh6fsbS8ElqE1CqvQR7MlEHsA5LfmLBmQ%2BRCUKF4lf0kQGjc4Gl6ZtwkB85KqheyReq8l8WBR4oou8EaNyqvj%2FFwgiiG0wup8vvRB6EtPuJfQ4wkj%2FsAnNyZ%2BHIaBpMZrK9s76NgheBIEadR4uYnSVvo5moQGUbSi8%2BjbJV11zOHxKTY2CTjensuEnsVEEZp6CXtXClZxUSBosjErQqYNWMNntkb0GOqUBLDQa8ymeZQIyi%2B97%2F1qaMPdAircrcW5%2B%2Bn8bG7pTBW4qIzogVPyCJfXIEhXzFs4s7KX20pbz3P8ElK3o%2BgPoz3Nz8%2Fisr%2FUyeqLJ8YSEYss1N%2BdJpk7YR8TexNAaGMb7uOTxzoIFfXF%2BcyRZxhJGzgTdLK2uK1R77C7RyhtcOIfGuNVt9U6LOeQkFkRfD9xMUrdPT6GNI3k9F9HWaxgh5cM%2BtubG&X-Amz-Signature=bee0886048141970a8834a10d410d004b19cb66cc39434f8a44b7c9e5e146cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4C2OP7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIG569QvGayR8qegNd0JX0ZqlWLHVJE82Yn0XAKe1MPtwAiEAoqiIgDv2iQRqrFTR%2BhE6a39oKguFtv6NrWlUDofxYiQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfXz5e0vXG%2FQX5ZfyrcA%2BQCDMWzjn0k84yyxIei5wtu5BrTCzWzUMDEXpYXZ2w5GoneQaycnSnh7g1TSNonYwsurZw7nWcGWaCJAT6wHfveKWVBTh9iw5F8p%2BK1B0y757YfoxpuodO0W8EvY7WwAtfXWii5lCd74vIcs%2BhyHdveYQBBMrMyAsLURN5%2F7yXNWHBIC0WIcmBxKhpT5CcIbC%2FQrsj5MkPGqcSF2UjsdtpGtLS%2BfOa4rneM99LPEkbU%2BxOKapR%2F%2FZNDr1WkWNFxd8ETF4GBBBun%2Fe3SgtBxwmcncI57yFV7Zd95aXVeKpr4iBZpyQHByOa8f6NoBCzUmoPt1FKGfEpM9e3488MCA6HaJic3KVX9xYEvtJzMsO4XXC34kJ6q2bXzfQ%2FLoZboMFsSsWofpDrUdlhARNZsMSz373zfh1BM%2F%2FR7eXwh6fsbS8ElqE1CqvQR7MlEHsA5LfmLBmQ%2BRCUKF4lf0kQGjc4Gl6ZtwkB85KqheyReq8l8WBR4oou8EaNyqvj%2FFwgiiG0wup8vvRB6EtPuJfQ4wkj%2FsAnNyZ%2BHIaBpMZrK9s76NgheBIEadR4uYnSVvo5moQGUbSi8%2BjbJV11zOHxKTY2CTjensuEnsVEEZp6CXtXClZxUSBosjErQqYNWMNntkb0GOqUBLDQa8ymeZQIyi%2B97%2F1qaMPdAircrcW5%2B%2Bn8bG7pTBW4qIzogVPyCJfXIEhXzFs4s7KX20pbz3P8ElK3o%2BgPoz3Nz8%2Fisr%2FUyeqLJ8YSEYss1N%2BdJpk7YR8TexNAaGMb7uOTxzoIFfXF%2BcyRZxhJGzgTdLK2uK1R77C7RyhtcOIfGuNVt9U6LOeQkFkRfD9xMUrdPT6GNI3k9F9HWaxgh5cM%2BtubG&X-Amz-Signature=0dd00d25365748250b5e721209ba3cc5370ea8ef8c067b2c334f9d807dfd95fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4C2OP7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIG569QvGayR8qegNd0JX0ZqlWLHVJE82Yn0XAKe1MPtwAiEAoqiIgDv2iQRqrFTR%2BhE6a39oKguFtv6NrWlUDofxYiQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfXz5e0vXG%2FQX5ZfyrcA%2BQCDMWzjn0k84yyxIei5wtu5BrTCzWzUMDEXpYXZ2w5GoneQaycnSnh7g1TSNonYwsurZw7nWcGWaCJAT6wHfveKWVBTh9iw5F8p%2BK1B0y757YfoxpuodO0W8EvY7WwAtfXWii5lCd74vIcs%2BhyHdveYQBBMrMyAsLURN5%2F7yXNWHBIC0WIcmBxKhpT5CcIbC%2FQrsj5MkPGqcSF2UjsdtpGtLS%2BfOa4rneM99LPEkbU%2BxOKapR%2F%2FZNDr1WkWNFxd8ETF4GBBBun%2Fe3SgtBxwmcncI57yFV7Zd95aXVeKpr4iBZpyQHByOa8f6NoBCzUmoPt1FKGfEpM9e3488MCA6HaJic3KVX9xYEvtJzMsO4XXC34kJ6q2bXzfQ%2FLoZboMFsSsWofpDrUdlhARNZsMSz373zfh1BM%2F%2FR7eXwh6fsbS8ElqE1CqvQR7MlEHsA5LfmLBmQ%2BRCUKF4lf0kQGjc4Gl6ZtwkB85KqheyReq8l8WBR4oou8EaNyqvj%2FFwgiiG0wup8vvRB6EtPuJfQ4wkj%2FsAnNyZ%2BHIaBpMZrK9s76NgheBIEadR4uYnSVvo5moQGUbSi8%2BjbJV11zOHxKTY2CTjensuEnsVEEZp6CXtXClZxUSBosjErQqYNWMNntkb0GOqUBLDQa8ymeZQIyi%2B97%2F1qaMPdAircrcW5%2B%2Bn8bG7pTBW4qIzogVPyCJfXIEhXzFs4s7KX20pbz3P8ElK3o%2BgPoz3Nz8%2Fisr%2FUyeqLJ8YSEYss1N%2BdJpk7YR8TexNAaGMb7uOTxzoIFfXF%2BcyRZxhJGzgTdLK2uK1R77C7RyhtcOIfGuNVt9U6LOeQkFkRfD9xMUrdPT6GNI3k9F9HWaxgh5cM%2BtubG&X-Amz-Signature=59e8fd5f659eca2fbd98252db84fe4be0f579d23ea7f7e119f5a5b07175c062d&X-Amz-SignedHeaders=host&x-id=GetObject)
