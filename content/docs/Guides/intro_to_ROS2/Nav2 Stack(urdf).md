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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK35WFWE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCajd9CQcWyJKu3iFXl%2Fltw%2B8IpEU8wraSyrjQtlzn9SAIgEFEaL1Jygq8xAEzJFkkYev%2Bl1lG9eNMZFkB%2Frmr9b%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRz2j3BMkZ68Q4AIircAw8nIGRxDr%2Bm5Q6ivz%2B30eurmVVNRo%2BH7MEzPZD2RY1HORLZCyf%2FXwVd860Xfz2%2FUTRRDZm3kA%2BIwT5xyXhkTvYlQ65yh2KVX0yrgDwEuk7ITchM8NynEA373RF3kZkq8aS8aqbVZdtjDyg0QRjO1ypfe9m86LZ0SSFvEyYkIVGVyMk0UT6d0kxraEi0YN24lwNQ8pvSYvrllGT05DkbKtjkrf0VluaNWYJlIbG9uWWk3kzQc397AtjgOEOc8z2%2BsBw7L5S3sZ41OX5K3cdqmaEe3mUz5nwK8aSFOuAJb4rdO6YTSSrp7fH%2B6mEi6EPIiAHgKApV7GZGhAWOjKUObFlanhGEFbk3L1YM5W389skm6JfvtAIvmChhenuDUdR2puo63jqi5iqcek%2BW2pzhYSes2eEAg2eonfPl1fyacvxEtabfNhtjxiGT9ysa0CLqc7hDyaWvVvtqu3KyjUZ%2BBVBGsJOrNKgTwh1oTY1jwpSI83ucn%2By%2FwAtX%2BZaGwaoxRU%2B%2FCIbZpmhZJEuAllhGbOYIjjNPJ8I5ncn1Qc41ElX7JUsuxEjkYzt3CBkNVw8WYg0gYf%2ByWHM8DnrDwCYVtsc%2BWEj1eoRu%2FSJ5te8eqokwp44QDqFSP1yJKxnFMKbo8MEGOqUBcU86SiYUbNJKZEI%2B%2Fm5%2F2SAh0UJED%2F9Ir3Qk2gxfMQ103miE9IkmteZLQTdPJ0rV0Ialf14FbuO0Tp1mPSiu9QG6wPsp5j8f0cU4Y%2BMzdMQGMslXF6h2ZK6GqfVFFLudv7LJLc2wf83mDXHD2nq8jxGsOR0uBl1gvEsiDofW0XslRTnmyASqOhnGcZo9vA7TcDuFtfG7ODWI%2BZOijf1DXEM9HVG3&X-Amz-Signature=966611872f1c08e7cd030342c959e83a1cdbe90abc632ee02c25c451a7dd00cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK35WFWE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCajd9CQcWyJKu3iFXl%2Fltw%2B8IpEU8wraSyrjQtlzn9SAIgEFEaL1Jygq8xAEzJFkkYev%2Bl1lG9eNMZFkB%2Frmr9b%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRz2j3BMkZ68Q4AIircAw8nIGRxDr%2Bm5Q6ivz%2B30eurmVVNRo%2BH7MEzPZD2RY1HORLZCyf%2FXwVd860Xfz2%2FUTRRDZm3kA%2BIwT5xyXhkTvYlQ65yh2KVX0yrgDwEuk7ITchM8NynEA373RF3kZkq8aS8aqbVZdtjDyg0QRjO1ypfe9m86LZ0SSFvEyYkIVGVyMk0UT6d0kxraEi0YN24lwNQ8pvSYvrllGT05DkbKtjkrf0VluaNWYJlIbG9uWWk3kzQc397AtjgOEOc8z2%2BsBw7L5S3sZ41OX5K3cdqmaEe3mUz5nwK8aSFOuAJb4rdO6YTSSrp7fH%2B6mEi6EPIiAHgKApV7GZGhAWOjKUObFlanhGEFbk3L1YM5W389skm6JfvtAIvmChhenuDUdR2puo63jqi5iqcek%2BW2pzhYSes2eEAg2eonfPl1fyacvxEtabfNhtjxiGT9ysa0CLqc7hDyaWvVvtqu3KyjUZ%2BBVBGsJOrNKgTwh1oTY1jwpSI83ucn%2By%2FwAtX%2BZaGwaoxRU%2B%2FCIbZpmhZJEuAllhGbOYIjjNPJ8I5ncn1Qc41ElX7JUsuxEjkYzt3CBkNVw8WYg0gYf%2ByWHM8DnrDwCYVtsc%2BWEj1eoRu%2FSJ5te8eqokwp44QDqFSP1yJKxnFMKbo8MEGOqUBcU86SiYUbNJKZEI%2B%2Fm5%2F2SAh0UJED%2F9Ir3Qk2gxfMQ103miE9IkmteZLQTdPJ0rV0Ialf14FbuO0Tp1mPSiu9QG6wPsp5j8f0cU4Y%2BMzdMQGMslXF6h2ZK6GqfVFFLudv7LJLc2wf83mDXHD2nq8jxGsOR0uBl1gvEsiDofW0XslRTnmyASqOhnGcZo9vA7TcDuFtfG7ODWI%2BZOijf1DXEM9HVG3&X-Amz-Signature=982008bcc79776bdfcdd3dcfd5f7454337d314e74b97b4a9e4d27f1c918c1a39&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK35WFWE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCajd9CQcWyJKu3iFXl%2Fltw%2B8IpEU8wraSyrjQtlzn9SAIgEFEaL1Jygq8xAEzJFkkYev%2Bl1lG9eNMZFkB%2Frmr9b%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRz2j3BMkZ68Q4AIircAw8nIGRxDr%2Bm5Q6ivz%2B30eurmVVNRo%2BH7MEzPZD2RY1HORLZCyf%2FXwVd860Xfz2%2FUTRRDZm3kA%2BIwT5xyXhkTvYlQ65yh2KVX0yrgDwEuk7ITchM8NynEA373RF3kZkq8aS8aqbVZdtjDyg0QRjO1ypfe9m86LZ0SSFvEyYkIVGVyMk0UT6d0kxraEi0YN24lwNQ8pvSYvrllGT05DkbKtjkrf0VluaNWYJlIbG9uWWk3kzQc397AtjgOEOc8z2%2BsBw7L5S3sZ41OX5K3cdqmaEe3mUz5nwK8aSFOuAJb4rdO6YTSSrp7fH%2B6mEi6EPIiAHgKApV7GZGhAWOjKUObFlanhGEFbk3L1YM5W389skm6JfvtAIvmChhenuDUdR2puo63jqi5iqcek%2BW2pzhYSes2eEAg2eonfPl1fyacvxEtabfNhtjxiGT9ysa0CLqc7hDyaWvVvtqu3KyjUZ%2BBVBGsJOrNKgTwh1oTY1jwpSI83ucn%2By%2FwAtX%2BZaGwaoxRU%2B%2FCIbZpmhZJEuAllhGbOYIjjNPJ8I5ncn1Qc41ElX7JUsuxEjkYzt3CBkNVw8WYg0gYf%2ByWHM8DnrDwCYVtsc%2BWEj1eoRu%2FSJ5te8eqokwp44QDqFSP1yJKxnFMKbo8MEGOqUBcU86SiYUbNJKZEI%2B%2Fm5%2F2SAh0UJED%2F9Ir3Qk2gxfMQ103miE9IkmteZLQTdPJ0rV0Ialf14FbuO0Tp1mPSiu9QG6wPsp5j8f0cU4Y%2BMzdMQGMslXF6h2ZK6GqfVFFLudv7LJLc2wf83mDXHD2nq8jxGsOR0uBl1gvEsiDofW0XslRTnmyASqOhnGcZo9vA7TcDuFtfG7ODWI%2BZOijf1DXEM9HVG3&X-Amz-Signature=2e4521b8ad8655b8b64db5a0c255d43e754cbc5098802d2fa40b48103c7841f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK35WFWE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCajd9CQcWyJKu3iFXl%2Fltw%2B8IpEU8wraSyrjQtlzn9SAIgEFEaL1Jygq8xAEzJFkkYev%2Bl1lG9eNMZFkB%2Frmr9b%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRz2j3BMkZ68Q4AIircAw8nIGRxDr%2Bm5Q6ivz%2B30eurmVVNRo%2BH7MEzPZD2RY1HORLZCyf%2FXwVd860Xfz2%2FUTRRDZm3kA%2BIwT5xyXhkTvYlQ65yh2KVX0yrgDwEuk7ITchM8NynEA373RF3kZkq8aS8aqbVZdtjDyg0QRjO1ypfe9m86LZ0SSFvEyYkIVGVyMk0UT6d0kxraEi0YN24lwNQ8pvSYvrllGT05DkbKtjkrf0VluaNWYJlIbG9uWWk3kzQc397AtjgOEOc8z2%2BsBw7L5S3sZ41OX5K3cdqmaEe3mUz5nwK8aSFOuAJb4rdO6YTSSrp7fH%2B6mEi6EPIiAHgKApV7GZGhAWOjKUObFlanhGEFbk3L1YM5W389skm6JfvtAIvmChhenuDUdR2puo63jqi5iqcek%2BW2pzhYSes2eEAg2eonfPl1fyacvxEtabfNhtjxiGT9ysa0CLqc7hDyaWvVvtqu3KyjUZ%2BBVBGsJOrNKgTwh1oTY1jwpSI83ucn%2By%2FwAtX%2BZaGwaoxRU%2B%2FCIbZpmhZJEuAllhGbOYIjjNPJ8I5ncn1Qc41ElX7JUsuxEjkYzt3CBkNVw8WYg0gYf%2ByWHM8DnrDwCYVtsc%2BWEj1eoRu%2FSJ5te8eqokwp44QDqFSP1yJKxnFMKbo8MEGOqUBcU86SiYUbNJKZEI%2B%2Fm5%2F2SAh0UJED%2F9Ir3Qk2gxfMQ103miE9IkmteZLQTdPJ0rV0Ialf14FbuO0Tp1mPSiu9QG6wPsp5j8f0cU4Y%2BMzdMQGMslXF6h2ZK6GqfVFFLudv7LJLc2wf83mDXHD2nq8jxGsOR0uBl1gvEsiDofW0XslRTnmyASqOhnGcZo9vA7TcDuFtfG7ODWI%2BZOijf1DXEM9HVG3&X-Amz-Signature=5e82c3816e2e69aee973789e8ddfead6c613bd00f2cb243faa15e9e77d9323ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK35WFWE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCajd9CQcWyJKu3iFXl%2Fltw%2B8IpEU8wraSyrjQtlzn9SAIgEFEaL1Jygq8xAEzJFkkYev%2Bl1lG9eNMZFkB%2Frmr9b%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRz2j3BMkZ68Q4AIircAw8nIGRxDr%2Bm5Q6ivz%2B30eurmVVNRo%2BH7MEzPZD2RY1HORLZCyf%2FXwVd860Xfz2%2FUTRRDZm3kA%2BIwT5xyXhkTvYlQ65yh2KVX0yrgDwEuk7ITchM8NynEA373RF3kZkq8aS8aqbVZdtjDyg0QRjO1ypfe9m86LZ0SSFvEyYkIVGVyMk0UT6d0kxraEi0YN24lwNQ8pvSYvrllGT05DkbKtjkrf0VluaNWYJlIbG9uWWk3kzQc397AtjgOEOc8z2%2BsBw7L5S3sZ41OX5K3cdqmaEe3mUz5nwK8aSFOuAJb4rdO6YTSSrp7fH%2B6mEi6EPIiAHgKApV7GZGhAWOjKUObFlanhGEFbk3L1YM5W389skm6JfvtAIvmChhenuDUdR2puo63jqi5iqcek%2BW2pzhYSes2eEAg2eonfPl1fyacvxEtabfNhtjxiGT9ysa0CLqc7hDyaWvVvtqu3KyjUZ%2BBVBGsJOrNKgTwh1oTY1jwpSI83ucn%2By%2FwAtX%2BZaGwaoxRU%2B%2FCIbZpmhZJEuAllhGbOYIjjNPJ8I5ncn1Qc41ElX7JUsuxEjkYzt3CBkNVw8WYg0gYf%2ByWHM8DnrDwCYVtsc%2BWEj1eoRu%2FSJ5te8eqokwp44QDqFSP1yJKxnFMKbo8MEGOqUBcU86SiYUbNJKZEI%2B%2Fm5%2F2SAh0UJED%2F9Ir3Qk2gxfMQ103miE9IkmteZLQTdPJ0rV0Ialf14FbuO0Tp1mPSiu9QG6wPsp5j8f0cU4Y%2BMzdMQGMslXF6h2ZK6GqfVFFLudv7LJLc2wf83mDXHD2nq8jxGsOR0uBl1gvEsiDofW0XslRTnmyASqOhnGcZo9vA7TcDuFtfG7ODWI%2BZOijf1DXEM9HVG3&X-Amz-Signature=a01cfc5d832f6f4357f8b5b29184af2c7481f1e94b6cd4f45df117a735b38bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK35WFWE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCajd9CQcWyJKu3iFXl%2Fltw%2B8IpEU8wraSyrjQtlzn9SAIgEFEaL1Jygq8xAEzJFkkYev%2Bl1lG9eNMZFkB%2Frmr9b%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRz2j3BMkZ68Q4AIircAw8nIGRxDr%2Bm5Q6ivz%2B30eurmVVNRo%2BH7MEzPZD2RY1HORLZCyf%2FXwVd860Xfz2%2FUTRRDZm3kA%2BIwT5xyXhkTvYlQ65yh2KVX0yrgDwEuk7ITchM8NynEA373RF3kZkq8aS8aqbVZdtjDyg0QRjO1ypfe9m86LZ0SSFvEyYkIVGVyMk0UT6d0kxraEi0YN24lwNQ8pvSYvrllGT05DkbKtjkrf0VluaNWYJlIbG9uWWk3kzQc397AtjgOEOc8z2%2BsBw7L5S3sZ41OX5K3cdqmaEe3mUz5nwK8aSFOuAJb4rdO6YTSSrp7fH%2B6mEi6EPIiAHgKApV7GZGhAWOjKUObFlanhGEFbk3L1YM5W389skm6JfvtAIvmChhenuDUdR2puo63jqi5iqcek%2BW2pzhYSes2eEAg2eonfPl1fyacvxEtabfNhtjxiGT9ysa0CLqc7hDyaWvVvtqu3KyjUZ%2BBVBGsJOrNKgTwh1oTY1jwpSI83ucn%2By%2FwAtX%2BZaGwaoxRU%2B%2FCIbZpmhZJEuAllhGbOYIjjNPJ8I5ncn1Qc41ElX7JUsuxEjkYzt3CBkNVw8WYg0gYf%2ByWHM8DnrDwCYVtsc%2BWEj1eoRu%2FSJ5te8eqokwp44QDqFSP1yJKxnFMKbo8MEGOqUBcU86SiYUbNJKZEI%2B%2Fm5%2F2SAh0UJED%2F9Ir3Qk2gxfMQ103miE9IkmteZLQTdPJ0rV0Ialf14FbuO0Tp1mPSiu9QG6wPsp5j8f0cU4Y%2BMzdMQGMslXF6h2ZK6GqfVFFLudv7LJLc2wf83mDXHD2nq8jxGsOR0uBl1gvEsiDofW0XslRTnmyASqOhnGcZo9vA7TcDuFtfG7ODWI%2BZOijf1DXEM9HVG3&X-Amz-Signature=0e6f61bb491bdff6287ec8c1ebd951cc9f4808977c4bb154f607a1010d129cd1&X-Amz-SignedHeaders=host&x-id=GetObject)
