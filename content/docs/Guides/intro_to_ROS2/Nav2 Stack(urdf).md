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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFBODD3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFiBHoSzWu2Yi%2Bl5%2FRzxw6779Z%2BtdDw4WK6ifEyImiAiAly4xdRN%2FBunCdlkZE9kKi7%2FQayrWP5zGhdRMftyLkkSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tLWRI42n2YG5VPsKtwDIUcdbi%2BBR8wz2tTOwaDU%2BqTukumAyrz2SQr%2FPhgnP%2FTOU9D8o%2FZcJT9v%2BmT%2BcMD4UX9OePiXfd6k2c70rsUU3MEW2WiyKoNDoN%2Ffc4PYZyqOeNfPoErt4LuLMLsFtXEUp%2BkNaLUrzR3emhjV0SOdeq2jhQ7Hvh7schO6YorEabomAvnFu0Oq1BFD7EkvqInVEzBOzturCq3fxXLUyE738CYMX8GrGagFeJkIqCvK7us5r39V3Y%2FDQqFa5wy1zVoqyzOHaaqvGTc6BBXHEiUZ2JcGycN2eTkUgtGgkwNmtdjDRdrOPJ9CY20BC5Yel0WJd2dynmRPvHb%2BbpXjmNPcIPtblrVMAuHvHpOvp4jJJCW7vUAlOB%2F0s4zNxwsm9Z3afLjKs8wvpvZXj7bDdcRlo95BJaURZE13sT3j0kuavsZ%2Bk3i20Ts1OjxhcB%2B644n4icTN%2Bc3Z%2B4U3%2Fl8UuYZvyCQ1xtSnjmsiYts22%2BPogEErWZzRrclR2P2hYPd8i2l9tUVY3SoUepsXxue5Uz1Y626suE5czXupOaIkkXY%2FKxgs6n%2BJQ5%2BbTuSGKQd5%2BQxjhRNPDfj2ODDORbykbwhCkYl%2F6zs1vvzMkpcszQdZ9Wzp6yTmQhuS0AAq3Jswv7uWvgY6pgF5PyP%2FyHNenzoBPu7pCPZZU7MJlFNdTNdPh8vNZC%2By2sm5aMZ1mdjuARlQVeBmHHh4v4D1QrnbxA877CdzrR0eUZAUdaXS8sw1eBwKFgFnvlQiZqCJlQUbDS4IQ70NobSa9YLk2xrRVtP5lk91rrj%2Fz5wJ9bIiM%2FGRk20uBB0hNByqvFLZpW2XFExVoV4KVuvWnGD8xNjNGb%2F6gJwcxqSiyjW%2FvuTZ&X-Amz-Signature=1ca0b2b2b852d18e7699de8764c2711da85d9eca4a320a99198cdfc7dee2a9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFBODD3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFiBHoSzWu2Yi%2Bl5%2FRzxw6779Z%2BtdDw4WK6ifEyImiAiAly4xdRN%2FBunCdlkZE9kKi7%2FQayrWP5zGhdRMftyLkkSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tLWRI42n2YG5VPsKtwDIUcdbi%2BBR8wz2tTOwaDU%2BqTukumAyrz2SQr%2FPhgnP%2FTOU9D8o%2FZcJT9v%2BmT%2BcMD4UX9OePiXfd6k2c70rsUU3MEW2WiyKoNDoN%2Ffc4PYZyqOeNfPoErt4LuLMLsFtXEUp%2BkNaLUrzR3emhjV0SOdeq2jhQ7Hvh7schO6YorEabomAvnFu0Oq1BFD7EkvqInVEzBOzturCq3fxXLUyE738CYMX8GrGagFeJkIqCvK7us5r39V3Y%2FDQqFa5wy1zVoqyzOHaaqvGTc6BBXHEiUZ2JcGycN2eTkUgtGgkwNmtdjDRdrOPJ9CY20BC5Yel0WJd2dynmRPvHb%2BbpXjmNPcIPtblrVMAuHvHpOvp4jJJCW7vUAlOB%2F0s4zNxwsm9Z3afLjKs8wvpvZXj7bDdcRlo95BJaURZE13sT3j0kuavsZ%2Bk3i20Ts1OjxhcB%2B644n4icTN%2Bc3Z%2B4U3%2Fl8UuYZvyCQ1xtSnjmsiYts22%2BPogEErWZzRrclR2P2hYPd8i2l9tUVY3SoUepsXxue5Uz1Y626suE5czXupOaIkkXY%2FKxgs6n%2BJQ5%2BbTuSGKQd5%2BQxjhRNPDfj2ODDORbykbwhCkYl%2F6zs1vvzMkpcszQdZ9Wzp6yTmQhuS0AAq3Jswv7uWvgY6pgF5PyP%2FyHNenzoBPu7pCPZZU7MJlFNdTNdPh8vNZC%2By2sm5aMZ1mdjuARlQVeBmHHh4v4D1QrnbxA877CdzrR0eUZAUdaXS8sw1eBwKFgFnvlQiZqCJlQUbDS4IQ70NobSa9YLk2xrRVtP5lk91rrj%2Fz5wJ9bIiM%2FGRk20uBB0hNByqvFLZpW2XFExVoV4KVuvWnGD8xNjNGb%2F6gJwcxqSiyjW%2FvuTZ&X-Amz-Signature=d24a35f7dcdedaaa4fd9a4fcdb95f32702cef1904e5d673bfc87532935a605cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFBODD3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFiBHoSzWu2Yi%2Bl5%2FRzxw6779Z%2BtdDw4WK6ifEyImiAiAly4xdRN%2FBunCdlkZE9kKi7%2FQayrWP5zGhdRMftyLkkSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tLWRI42n2YG5VPsKtwDIUcdbi%2BBR8wz2tTOwaDU%2BqTukumAyrz2SQr%2FPhgnP%2FTOU9D8o%2FZcJT9v%2BmT%2BcMD4UX9OePiXfd6k2c70rsUU3MEW2WiyKoNDoN%2Ffc4PYZyqOeNfPoErt4LuLMLsFtXEUp%2BkNaLUrzR3emhjV0SOdeq2jhQ7Hvh7schO6YorEabomAvnFu0Oq1BFD7EkvqInVEzBOzturCq3fxXLUyE738CYMX8GrGagFeJkIqCvK7us5r39V3Y%2FDQqFa5wy1zVoqyzOHaaqvGTc6BBXHEiUZ2JcGycN2eTkUgtGgkwNmtdjDRdrOPJ9CY20BC5Yel0WJd2dynmRPvHb%2BbpXjmNPcIPtblrVMAuHvHpOvp4jJJCW7vUAlOB%2F0s4zNxwsm9Z3afLjKs8wvpvZXj7bDdcRlo95BJaURZE13sT3j0kuavsZ%2Bk3i20Ts1OjxhcB%2B644n4icTN%2Bc3Z%2B4U3%2Fl8UuYZvyCQ1xtSnjmsiYts22%2BPogEErWZzRrclR2P2hYPd8i2l9tUVY3SoUepsXxue5Uz1Y626suE5czXupOaIkkXY%2FKxgs6n%2BJQ5%2BbTuSGKQd5%2BQxjhRNPDfj2ODDORbykbwhCkYl%2F6zs1vvzMkpcszQdZ9Wzp6yTmQhuS0AAq3Jswv7uWvgY6pgF5PyP%2FyHNenzoBPu7pCPZZU7MJlFNdTNdPh8vNZC%2By2sm5aMZ1mdjuARlQVeBmHHh4v4D1QrnbxA877CdzrR0eUZAUdaXS8sw1eBwKFgFnvlQiZqCJlQUbDS4IQ70NobSa9YLk2xrRVtP5lk91rrj%2Fz5wJ9bIiM%2FGRk20uBB0hNByqvFLZpW2XFExVoV4KVuvWnGD8xNjNGb%2F6gJwcxqSiyjW%2FvuTZ&X-Amz-Signature=9586ea119d48cdf11e8330998df650e95173e7958904713db880a98691b4844c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFBODD3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFiBHoSzWu2Yi%2Bl5%2FRzxw6779Z%2BtdDw4WK6ifEyImiAiAly4xdRN%2FBunCdlkZE9kKi7%2FQayrWP5zGhdRMftyLkkSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tLWRI42n2YG5VPsKtwDIUcdbi%2BBR8wz2tTOwaDU%2BqTukumAyrz2SQr%2FPhgnP%2FTOU9D8o%2FZcJT9v%2BmT%2BcMD4UX9OePiXfd6k2c70rsUU3MEW2WiyKoNDoN%2Ffc4PYZyqOeNfPoErt4LuLMLsFtXEUp%2BkNaLUrzR3emhjV0SOdeq2jhQ7Hvh7schO6YorEabomAvnFu0Oq1BFD7EkvqInVEzBOzturCq3fxXLUyE738CYMX8GrGagFeJkIqCvK7us5r39V3Y%2FDQqFa5wy1zVoqyzOHaaqvGTc6BBXHEiUZ2JcGycN2eTkUgtGgkwNmtdjDRdrOPJ9CY20BC5Yel0WJd2dynmRPvHb%2BbpXjmNPcIPtblrVMAuHvHpOvp4jJJCW7vUAlOB%2F0s4zNxwsm9Z3afLjKs8wvpvZXj7bDdcRlo95BJaURZE13sT3j0kuavsZ%2Bk3i20Ts1OjxhcB%2B644n4icTN%2Bc3Z%2B4U3%2Fl8UuYZvyCQ1xtSnjmsiYts22%2BPogEErWZzRrclR2P2hYPd8i2l9tUVY3SoUepsXxue5Uz1Y626suE5czXupOaIkkXY%2FKxgs6n%2BJQ5%2BbTuSGKQd5%2BQxjhRNPDfj2ODDORbykbwhCkYl%2F6zs1vvzMkpcszQdZ9Wzp6yTmQhuS0AAq3Jswv7uWvgY6pgF5PyP%2FyHNenzoBPu7pCPZZU7MJlFNdTNdPh8vNZC%2By2sm5aMZ1mdjuARlQVeBmHHh4v4D1QrnbxA877CdzrR0eUZAUdaXS8sw1eBwKFgFnvlQiZqCJlQUbDS4IQ70NobSa9YLk2xrRVtP5lk91rrj%2Fz5wJ9bIiM%2FGRk20uBB0hNByqvFLZpW2XFExVoV4KVuvWnGD8xNjNGb%2F6gJwcxqSiyjW%2FvuTZ&X-Amz-Signature=1876a321cc713ccd780ebfdf045b41354a1db17bceaa64098dc2ed48bc6ecae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFBODD3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFiBHoSzWu2Yi%2Bl5%2FRzxw6779Z%2BtdDw4WK6ifEyImiAiAly4xdRN%2FBunCdlkZE9kKi7%2FQayrWP5zGhdRMftyLkkSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tLWRI42n2YG5VPsKtwDIUcdbi%2BBR8wz2tTOwaDU%2BqTukumAyrz2SQr%2FPhgnP%2FTOU9D8o%2FZcJT9v%2BmT%2BcMD4UX9OePiXfd6k2c70rsUU3MEW2WiyKoNDoN%2Ffc4PYZyqOeNfPoErt4LuLMLsFtXEUp%2BkNaLUrzR3emhjV0SOdeq2jhQ7Hvh7schO6YorEabomAvnFu0Oq1BFD7EkvqInVEzBOzturCq3fxXLUyE738CYMX8GrGagFeJkIqCvK7us5r39V3Y%2FDQqFa5wy1zVoqyzOHaaqvGTc6BBXHEiUZ2JcGycN2eTkUgtGgkwNmtdjDRdrOPJ9CY20BC5Yel0WJd2dynmRPvHb%2BbpXjmNPcIPtblrVMAuHvHpOvp4jJJCW7vUAlOB%2F0s4zNxwsm9Z3afLjKs8wvpvZXj7bDdcRlo95BJaURZE13sT3j0kuavsZ%2Bk3i20Ts1OjxhcB%2B644n4icTN%2Bc3Z%2B4U3%2Fl8UuYZvyCQ1xtSnjmsiYts22%2BPogEErWZzRrclR2P2hYPd8i2l9tUVY3SoUepsXxue5Uz1Y626suE5czXupOaIkkXY%2FKxgs6n%2BJQ5%2BbTuSGKQd5%2BQxjhRNPDfj2ODDORbykbwhCkYl%2F6zs1vvzMkpcszQdZ9Wzp6yTmQhuS0AAq3Jswv7uWvgY6pgF5PyP%2FyHNenzoBPu7pCPZZU7MJlFNdTNdPh8vNZC%2By2sm5aMZ1mdjuARlQVeBmHHh4v4D1QrnbxA877CdzrR0eUZAUdaXS8sw1eBwKFgFnvlQiZqCJlQUbDS4IQ70NobSa9YLk2xrRVtP5lk91rrj%2Fz5wJ9bIiM%2FGRk20uBB0hNByqvFLZpW2XFExVoV4KVuvWnGD8xNjNGb%2F6gJwcxqSiyjW%2FvuTZ&X-Amz-Signature=87ac0f0a71ab7a0a48536e096109277ac2f10fcf12a5a69fc7bf27b6a7c6dad3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFBODD3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFiBHoSzWu2Yi%2Bl5%2FRzxw6779Z%2BtdDw4WK6ifEyImiAiAly4xdRN%2FBunCdlkZE9kKi7%2FQayrWP5zGhdRMftyLkkSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tLWRI42n2YG5VPsKtwDIUcdbi%2BBR8wz2tTOwaDU%2BqTukumAyrz2SQr%2FPhgnP%2FTOU9D8o%2FZcJT9v%2BmT%2BcMD4UX9OePiXfd6k2c70rsUU3MEW2WiyKoNDoN%2Ffc4PYZyqOeNfPoErt4LuLMLsFtXEUp%2BkNaLUrzR3emhjV0SOdeq2jhQ7Hvh7schO6YorEabomAvnFu0Oq1BFD7EkvqInVEzBOzturCq3fxXLUyE738CYMX8GrGagFeJkIqCvK7us5r39V3Y%2FDQqFa5wy1zVoqyzOHaaqvGTc6BBXHEiUZ2JcGycN2eTkUgtGgkwNmtdjDRdrOPJ9CY20BC5Yel0WJd2dynmRPvHb%2BbpXjmNPcIPtblrVMAuHvHpOvp4jJJCW7vUAlOB%2F0s4zNxwsm9Z3afLjKs8wvpvZXj7bDdcRlo95BJaURZE13sT3j0kuavsZ%2Bk3i20Ts1OjxhcB%2B644n4icTN%2Bc3Z%2B4U3%2Fl8UuYZvyCQ1xtSnjmsiYts22%2BPogEErWZzRrclR2P2hYPd8i2l9tUVY3SoUepsXxue5Uz1Y626suE5czXupOaIkkXY%2FKxgs6n%2BJQ5%2BbTuSGKQd5%2BQxjhRNPDfj2ODDORbykbwhCkYl%2F6zs1vvzMkpcszQdZ9Wzp6yTmQhuS0AAq3Jswv7uWvgY6pgF5PyP%2FyHNenzoBPu7pCPZZU7MJlFNdTNdPh8vNZC%2By2sm5aMZ1mdjuARlQVeBmHHh4v4D1QrnbxA877CdzrR0eUZAUdaXS8sw1eBwKFgFnvlQiZqCJlQUbDS4IQ70NobSa9YLk2xrRVtP5lk91rrj%2Fz5wJ9bIiM%2FGRk20uBB0hNByqvFLZpW2XFExVoV4KVuvWnGD8xNjNGb%2F6gJwcxqSiyjW%2FvuTZ&X-Amz-Signature=bcc05610a74469e423f0fecd19f05dce87a2878952fc57bb3381bdf5bb7eec58&X-Amz-SignedHeaders=host&x-id=GetObject)
