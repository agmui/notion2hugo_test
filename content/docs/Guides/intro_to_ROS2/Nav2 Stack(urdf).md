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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNIWDDD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDX1bzZWpgXLvZKBRDbbtX1F053wZDHhzNFBTwWguBsaQIgRFGYQsYaEQzimbckAFJnjo%2BSwWro4ogXlfat4hQK5A0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPey3ZDVUx9SNUzVryrcA7aN1mi8jYUSRqgnWvZp0srg7CExkBTskfpUex0M%2BZc4QwZlQcyXKV0xedRnS%2FHCEoEtogmPvN%2BPYeZi%2FvYczz%2FLqRuzBxuTt3zsY5hqMgOZxU9pxshPSbN2hHW7IuwT0UMFzxykHJmdcE1%2FVQQakuJj8vWHKFjYLqXFF9GOgFpGR8IrOjI9Av30LRkO77IY9FbBmstxtULz0nv2gjXiWYq5AQuo9IQMgRLU3FTgGmtPM5H3si44M29s9m1DaNkxFrS6xAoo4aJWluhG1gLRwj2RYhYnUcNZtD4Jr1QavIYDH8K2wFWIQTOBuGSaH%2F7KDDNRRGD%2Fj2GVarpAxlH%2Fr5aHj3DAXO6fY8oe%2F3KFabHrzDvIQvOvO9Y3TsRmkycsnGE6MZiVs4VaUAmLEVcWxshTRBG9%2BEj3AkrYrNpvPwKp8S9Eliv0%2BPK3o42z7gRrER0vOGfo9zhOMs36HS1W6%2BBIcYBceUoVnqHmwO02%2BM3AClCtpvmBjBYYQUsLA5UsPecrDYrfCXMn8Vm%2BkZY6KUClgoYTk69NV%2FQXSSbKWRPtMTizwsArJcD363zFeGt7Lqm96Lw9VQisrCyU8eAZq4e1tPN4dMXp%2Fxpjdq6rolDDq5i4jKBvo7YJGua8MMPEn8MGOqUBd7ONJkJ%2Bumo%2FA0tF9ujHbFn4TapmKbVE%2BoqU2ZgMcD5y%2FFz2FgugVg4WAiJo0uD7CDpSF%2Flkt8nv1H18e%2Fqe0Jej2zNSZxSDLB5XvZkcJgmZ%2B8lJ2lt61Jxn428ZaQzfG9r8lvoPZqsJSPhkaFcBEunJ3ccbcnb5rqepyrucpUXNmMoM0olREzY5AGn%2BVi4TcmKb4mUAEXYjUeqrUY%2FR7%2B7ZBXBs&X-Amz-Signature=f35eef9254498979fd69370944b1b8df35de37570edb53b9e0b3c596e2eec137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNIWDDD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDX1bzZWpgXLvZKBRDbbtX1F053wZDHhzNFBTwWguBsaQIgRFGYQsYaEQzimbckAFJnjo%2BSwWro4ogXlfat4hQK5A0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPey3ZDVUx9SNUzVryrcA7aN1mi8jYUSRqgnWvZp0srg7CExkBTskfpUex0M%2BZc4QwZlQcyXKV0xedRnS%2FHCEoEtogmPvN%2BPYeZi%2FvYczz%2FLqRuzBxuTt3zsY5hqMgOZxU9pxshPSbN2hHW7IuwT0UMFzxykHJmdcE1%2FVQQakuJj8vWHKFjYLqXFF9GOgFpGR8IrOjI9Av30LRkO77IY9FbBmstxtULz0nv2gjXiWYq5AQuo9IQMgRLU3FTgGmtPM5H3si44M29s9m1DaNkxFrS6xAoo4aJWluhG1gLRwj2RYhYnUcNZtD4Jr1QavIYDH8K2wFWIQTOBuGSaH%2F7KDDNRRGD%2Fj2GVarpAxlH%2Fr5aHj3DAXO6fY8oe%2F3KFabHrzDvIQvOvO9Y3TsRmkycsnGE6MZiVs4VaUAmLEVcWxshTRBG9%2BEj3AkrYrNpvPwKp8S9Eliv0%2BPK3o42z7gRrER0vOGfo9zhOMs36HS1W6%2BBIcYBceUoVnqHmwO02%2BM3AClCtpvmBjBYYQUsLA5UsPecrDYrfCXMn8Vm%2BkZY6KUClgoYTk69NV%2FQXSSbKWRPtMTizwsArJcD363zFeGt7Lqm96Lw9VQisrCyU8eAZq4e1tPN4dMXp%2Fxpjdq6rolDDq5i4jKBvo7YJGua8MMPEn8MGOqUBd7ONJkJ%2Bumo%2FA0tF9ujHbFn4TapmKbVE%2BoqU2ZgMcD5y%2FFz2FgugVg4WAiJo0uD7CDpSF%2Flkt8nv1H18e%2Fqe0Jej2zNSZxSDLB5XvZkcJgmZ%2B8lJ2lt61Jxn428ZaQzfG9r8lvoPZqsJSPhkaFcBEunJ3ccbcnb5rqepyrucpUXNmMoM0olREzY5AGn%2BVi4TcmKb4mUAEXYjUeqrUY%2FR7%2B7ZBXBs&X-Amz-Signature=418827a59dcea039aa0759f91ff5b017ac896a4b644790ab741dc9e5923084f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNIWDDD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDX1bzZWpgXLvZKBRDbbtX1F053wZDHhzNFBTwWguBsaQIgRFGYQsYaEQzimbckAFJnjo%2BSwWro4ogXlfat4hQK5A0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPey3ZDVUx9SNUzVryrcA7aN1mi8jYUSRqgnWvZp0srg7CExkBTskfpUex0M%2BZc4QwZlQcyXKV0xedRnS%2FHCEoEtogmPvN%2BPYeZi%2FvYczz%2FLqRuzBxuTt3zsY5hqMgOZxU9pxshPSbN2hHW7IuwT0UMFzxykHJmdcE1%2FVQQakuJj8vWHKFjYLqXFF9GOgFpGR8IrOjI9Av30LRkO77IY9FbBmstxtULz0nv2gjXiWYq5AQuo9IQMgRLU3FTgGmtPM5H3si44M29s9m1DaNkxFrS6xAoo4aJWluhG1gLRwj2RYhYnUcNZtD4Jr1QavIYDH8K2wFWIQTOBuGSaH%2F7KDDNRRGD%2Fj2GVarpAxlH%2Fr5aHj3DAXO6fY8oe%2F3KFabHrzDvIQvOvO9Y3TsRmkycsnGE6MZiVs4VaUAmLEVcWxshTRBG9%2BEj3AkrYrNpvPwKp8S9Eliv0%2BPK3o42z7gRrER0vOGfo9zhOMs36HS1W6%2BBIcYBceUoVnqHmwO02%2BM3AClCtpvmBjBYYQUsLA5UsPecrDYrfCXMn8Vm%2BkZY6KUClgoYTk69NV%2FQXSSbKWRPtMTizwsArJcD363zFeGt7Lqm96Lw9VQisrCyU8eAZq4e1tPN4dMXp%2Fxpjdq6rolDDq5i4jKBvo7YJGua8MMPEn8MGOqUBd7ONJkJ%2Bumo%2FA0tF9ujHbFn4TapmKbVE%2BoqU2ZgMcD5y%2FFz2FgugVg4WAiJo0uD7CDpSF%2Flkt8nv1H18e%2Fqe0Jej2zNSZxSDLB5XvZkcJgmZ%2B8lJ2lt61Jxn428ZaQzfG9r8lvoPZqsJSPhkaFcBEunJ3ccbcnb5rqepyrucpUXNmMoM0olREzY5AGn%2BVi4TcmKb4mUAEXYjUeqrUY%2FR7%2B7ZBXBs&X-Amz-Signature=1f63da3a876c529331beb33de8b96344e91313dc4bda346c212ab65f0b87a2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNIWDDD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDX1bzZWpgXLvZKBRDbbtX1F053wZDHhzNFBTwWguBsaQIgRFGYQsYaEQzimbckAFJnjo%2BSwWro4ogXlfat4hQK5A0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPey3ZDVUx9SNUzVryrcA7aN1mi8jYUSRqgnWvZp0srg7CExkBTskfpUex0M%2BZc4QwZlQcyXKV0xedRnS%2FHCEoEtogmPvN%2BPYeZi%2FvYczz%2FLqRuzBxuTt3zsY5hqMgOZxU9pxshPSbN2hHW7IuwT0UMFzxykHJmdcE1%2FVQQakuJj8vWHKFjYLqXFF9GOgFpGR8IrOjI9Av30LRkO77IY9FbBmstxtULz0nv2gjXiWYq5AQuo9IQMgRLU3FTgGmtPM5H3si44M29s9m1DaNkxFrS6xAoo4aJWluhG1gLRwj2RYhYnUcNZtD4Jr1QavIYDH8K2wFWIQTOBuGSaH%2F7KDDNRRGD%2Fj2GVarpAxlH%2Fr5aHj3DAXO6fY8oe%2F3KFabHrzDvIQvOvO9Y3TsRmkycsnGE6MZiVs4VaUAmLEVcWxshTRBG9%2BEj3AkrYrNpvPwKp8S9Eliv0%2BPK3o42z7gRrER0vOGfo9zhOMs36HS1W6%2BBIcYBceUoVnqHmwO02%2BM3AClCtpvmBjBYYQUsLA5UsPecrDYrfCXMn8Vm%2BkZY6KUClgoYTk69NV%2FQXSSbKWRPtMTizwsArJcD363zFeGt7Lqm96Lw9VQisrCyU8eAZq4e1tPN4dMXp%2Fxpjdq6rolDDq5i4jKBvo7YJGua8MMPEn8MGOqUBd7ONJkJ%2Bumo%2FA0tF9ujHbFn4TapmKbVE%2BoqU2ZgMcD5y%2FFz2FgugVg4WAiJo0uD7CDpSF%2Flkt8nv1H18e%2Fqe0Jej2zNSZxSDLB5XvZkcJgmZ%2B8lJ2lt61Jxn428ZaQzfG9r8lvoPZqsJSPhkaFcBEunJ3ccbcnb5rqepyrucpUXNmMoM0olREzY5AGn%2BVi4TcmKb4mUAEXYjUeqrUY%2FR7%2B7ZBXBs&X-Amz-Signature=a484c32c986de568bc7cdf09eba1404defc186c23226808003f3533d514eef5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNIWDDD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDX1bzZWpgXLvZKBRDbbtX1F053wZDHhzNFBTwWguBsaQIgRFGYQsYaEQzimbckAFJnjo%2BSwWro4ogXlfat4hQK5A0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPey3ZDVUx9SNUzVryrcA7aN1mi8jYUSRqgnWvZp0srg7CExkBTskfpUex0M%2BZc4QwZlQcyXKV0xedRnS%2FHCEoEtogmPvN%2BPYeZi%2FvYczz%2FLqRuzBxuTt3zsY5hqMgOZxU9pxshPSbN2hHW7IuwT0UMFzxykHJmdcE1%2FVQQakuJj8vWHKFjYLqXFF9GOgFpGR8IrOjI9Av30LRkO77IY9FbBmstxtULz0nv2gjXiWYq5AQuo9IQMgRLU3FTgGmtPM5H3si44M29s9m1DaNkxFrS6xAoo4aJWluhG1gLRwj2RYhYnUcNZtD4Jr1QavIYDH8K2wFWIQTOBuGSaH%2F7KDDNRRGD%2Fj2GVarpAxlH%2Fr5aHj3DAXO6fY8oe%2F3KFabHrzDvIQvOvO9Y3TsRmkycsnGE6MZiVs4VaUAmLEVcWxshTRBG9%2BEj3AkrYrNpvPwKp8S9Eliv0%2BPK3o42z7gRrER0vOGfo9zhOMs36HS1W6%2BBIcYBceUoVnqHmwO02%2BM3AClCtpvmBjBYYQUsLA5UsPecrDYrfCXMn8Vm%2BkZY6KUClgoYTk69NV%2FQXSSbKWRPtMTizwsArJcD363zFeGt7Lqm96Lw9VQisrCyU8eAZq4e1tPN4dMXp%2Fxpjdq6rolDDq5i4jKBvo7YJGua8MMPEn8MGOqUBd7ONJkJ%2Bumo%2FA0tF9ujHbFn4TapmKbVE%2BoqU2ZgMcD5y%2FFz2FgugVg4WAiJo0uD7CDpSF%2Flkt8nv1H18e%2Fqe0Jej2zNSZxSDLB5XvZkcJgmZ%2B8lJ2lt61Jxn428ZaQzfG9r8lvoPZqsJSPhkaFcBEunJ3ccbcnb5rqepyrucpUXNmMoM0olREzY5AGn%2BVi4TcmKb4mUAEXYjUeqrUY%2FR7%2B7ZBXBs&X-Amz-Signature=d3b336948503f6e575584e7c82fb753ec1dbfce7ddb33bf25b563fa84e8a5885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNIWDDD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDX1bzZWpgXLvZKBRDbbtX1F053wZDHhzNFBTwWguBsaQIgRFGYQsYaEQzimbckAFJnjo%2BSwWro4ogXlfat4hQK5A0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPey3ZDVUx9SNUzVryrcA7aN1mi8jYUSRqgnWvZp0srg7CExkBTskfpUex0M%2BZc4QwZlQcyXKV0xedRnS%2FHCEoEtogmPvN%2BPYeZi%2FvYczz%2FLqRuzBxuTt3zsY5hqMgOZxU9pxshPSbN2hHW7IuwT0UMFzxykHJmdcE1%2FVQQakuJj8vWHKFjYLqXFF9GOgFpGR8IrOjI9Av30LRkO77IY9FbBmstxtULz0nv2gjXiWYq5AQuo9IQMgRLU3FTgGmtPM5H3si44M29s9m1DaNkxFrS6xAoo4aJWluhG1gLRwj2RYhYnUcNZtD4Jr1QavIYDH8K2wFWIQTOBuGSaH%2F7KDDNRRGD%2Fj2GVarpAxlH%2Fr5aHj3DAXO6fY8oe%2F3KFabHrzDvIQvOvO9Y3TsRmkycsnGE6MZiVs4VaUAmLEVcWxshTRBG9%2BEj3AkrYrNpvPwKp8S9Eliv0%2BPK3o42z7gRrER0vOGfo9zhOMs36HS1W6%2BBIcYBceUoVnqHmwO02%2BM3AClCtpvmBjBYYQUsLA5UsPecrDYrfCXMn8Vm%2BkZY6KUClgoYTk69NV%2FQXSSbKWRPtMTizwsArJcD363zFeGt7Lqm96Lw9VQisrCyU8eAZq4e1tPN4dMXp%2Fxpjdq6rolDDq5i4jKBvo7YJGua8MMPEn8MGOqUBd7ONJkJ%2Bumo%2FA0tF9ujHbFn4TapmKbVE%2BoqU2ZgMcD5y%2FFz2FgugVg4WAiJo0uD7CDpSF%2Flkt8nv1H18e%2Fqe0Jej2zNSZxSDLB5XvZkcJgmZ%2B8lJ2lt61Jxn428ZaQzfG9r8lvoPZqsJSPhkaFcBEunJ3ccbcnb5rqepyrucpUXNmMoM0olREzY5AGn%2BVi4TcmKb4mUAEXYjUeqrUY%2FR7%2B7ZBXBs&X-Amz-Signature=05e19fa2a9f1924380158f50f4e9d30408310e8a2c79a825719a0ac0667e589a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
