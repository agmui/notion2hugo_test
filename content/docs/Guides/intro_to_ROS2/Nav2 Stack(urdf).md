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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JJNQ5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC%2BskBdUrLKZ6e8nCn9IWr1%2B15e7dF2hV65pXlKUmxzxQIhAOohuKrZWFrKH9Koi408TWY9JOSZRD1bcpK0zrQRk8frKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhYyx59EMjjbIz5fcq3APMhV7prprEA6CAJVCayX9bctJf%2B9wcmiRlhGK1rUaCuJhGZwX5E5t27yzn37LRanx%2B%2FF5juunKXiej4t7pxNf1rpes84Vbu5qWncKtWIuxVIBMmL%2Bw68QjJm5pnDPQ5Dmq3fyhk5fi%2BRDHx3XseQ36U6a8vek61sidRQGWoq2nADScyG2Kej9L6DmsgVRLC6L%2BjjFxE%2BRMByDYOOJQrZh8T%2F1rRXvKDZmSLHgf1gDYIjR0f4v60m6FTyT39j3XYGs5Mlsc6XWB9sYmkrDTmS6Gf6hIbW53XFrJUpGvJwY93QNliDbLtttuGUBQ4dlGrjkTKJiLqzoU95G56eWciEjwdsWxHpx%2BKLvvJefJHWqN6fNBzKiuOTW%2Bx7%2BY0KW15bthnuUmmhccFPjFi5bsBrIjWjna7qzSogoNxkDh%2BIhCzN4pqM33TtZYtwv5kqQRdKs8VkxFHJNvgJ5bLlOYAKjjZeGY6vcYr60%2FTLcBmfqYM4k1fUeyeNtl3NrUBSdknET4eUCJGEzl%2FJEINJ5TyyOS4MIy1Emnw6qTW0%2BanWb0qqvF4KPOXh6R67ncP6syNUF%2BHGx0YlWosymNCTaEOnIScrgG%2Fu3gbLBMMwjP%2F03mwcICWLpJnk%2BwZ%2B3BsjDqqtHBBjqkAUzjuAOAxPKvHQUpFmLSBmibKmJMKH3Ibj6gH1ZIMbcB0aysSXauFCg2GXAo93dbCRJNDZfFY8UlTFxDNFP36FA6HCmfjoAPteZxKB7mMLnvu9slU1YleApk%2F7jDE1Fq1uQ8OLHhfweZTvSvVFESGBPMpFnWk652QPn%2BipaVY9H9i6%2FbsqSRtWdk8NpzWHDpkv9IpPX5enUFVpGKRZhd%2Buf3krHc&X-Amz-Signature=453bdf7b384ac0ca5e93efc3b613cfb73452665980d65a8e6e567d64f8bf038c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JJNQ5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC%2BskBdUrLKZ6e8nCn9IWr1%2B15e7dF2hV65pXlKUmxzxQIhAOohuKrZWFrKH9Koi408TWY9JOSZRD1bcpK0zrQRk8frKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhYyx59EMjjbIz5fcq3APMhV7prprEA6CAJVCayX9bctJf%2B9wcmiRlhGK1rUaCuJhGZwX5E5t27yzn37LRanx%2B%2FF5juunKXiej4t7pxNf1rpes84Vbu5qWncKtWIuxVIBMmL%2Bw68QjJm5pnDPQ5Dmq3fyhk5fi%2BRDHx3XseQ36U6a8vek61sidRQGWoq2nADScyG2Kej9L6DmsgVRLC6L%2BjjFxE%2BRMByDYOOJQrZh8T%2F1rRXvKDZmSLHgf1gDYIjR0f4v60m6FTyT39j3XYGs5Mlsc6XWB9sYmkrDTmS6Gf6hIbW53XFrJUpGvJwY93QNliDbLtttuGUBQ4dlGrjkTKJiLqzoU95G56eWciEjwdsWxHpx%2BKLvvJefJHWqN6fNBzKiuOTW%2Bx7%2BY0KW15bthnuUmmhccFPjFi5bsBrIjWjna7qzSogoNxkDh%2BIhCzN4pqM33TtZYtwv5kqQRdKs8VkxFHJNvgJ5bLlOYAKjjZeGY6vcYr60%2FTLcBmfqYM4k1fUeyeNtl3NrUBSdknET4eUCJGEzl%2FJEINJ5TyyOS4MIy1Emnw6qTW0%2BanWb0qqvF4KPOXh6R67ncP6syNUF%2BHGx0YlWosymNCTaEOnIScrgG%2Fu3gbLBMMwjP%2F03mwcICWLpJnk%2BwZ%2B3BsjDqqtHBBjqkAUzjuAOAxPKvHQUpFmLSBmibKmJMKH3Ibj6gH1ZIMbcB0aysSXauFCg2GXAo93dbCRJNDZfFY8UlTFxDNFP36FA6HCmfjoAPteZxKB7mMLnvu9slU1YleApk%2F7jDE1Fq1uQ8OLHhfweZTvSvVFESGBPMpFnWk652QPn%2BipaVY9H9i6%2FbsqSRtWdk8NpzWHDpkv9IpPX5enUFVpGKRZhd%2Buf3krHc&X-Amz-Signature=a6d7ef2b6ec4d53ced44b5eefd8bbbaee37863baa0484cb95038c05b1a5dca49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JJNQ5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC%2BskBdUrLKZ6e8nCn9IWr1%2B15e7dF2hV65pXlKUmxzxQIhAOohuKrZWFrKH9Koi408TWY9JOSZRD1bcpK0zrQRk8frKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhYyx59EMjjbIz5fcq3APMhV7prprEA6CAJVCayX9bctJf%2B9wcmiRlhGK1rUaCuJhGZwX5E5t27yzn37LRanx%2B%2FF5juunKXiej4t7pxNf1rpes84Vbu5qWncKtWIuxVIBMmL%2Bw68QjJm5pnDPQ5Dmq3fyhk5fi%2BRDHx3XseQ36U6a8vek61sidRQGWoq2nADScyG2Kej9L6DmsgVRLC6L%2BjjFxE%2BRMByDYOOJQrZh8T%2F1rRXvKDZmSLHgf1gDYIjR0f4v60m6FTyT39j3XYGs5Mlsc6XWB9sYmkrDTmS6Gf6hIbW53XFrJUpGvJwY93QNliDbLtttuGUBQ4dlGrjkTKJiLqzoU95G56eWciEjwdsWxHpx%2BKLvvJefJHWqN6fNBzKiuOTW%2Bx7%2BY0KW15bthnuUmmhccFPjFi5bsBrIjWjna7qzSogoNxkDh%2BIhCzN4pqM33TtZYtwv5kqQRdKs8VkxFHJNvgJ5bLlOYAKjjZeGY6vcYr60%2FTLcBmfqYM4k1fUeyeNtl3NrUBSdknET4eUCJGEzl%2FJEINJ5TyyOS4MIy1Emnw6qTW0%2BanWb0qqvF4KPOXh6R67ncP6syNUF%2BHGx0YlWosymNCTaEOnIScrgG%2Fu3gbLBMMwjP%2F03mwcICWLpJnk%2BwZ%2B3BsjDqqtHBBjqkAUzjuAOAxPKvHQUpFmLSBmibKmJMKH3Ibj6gH1ZIMbcB0aysSXauFCg2GXAo93dbCRJNDZfFY8UlTFxDNFP36FA6HCmfjoAPteZxKB7mMLnvu9slU1YleApk%2F7jDE1Fq1uQ8OLHhfweZTvSvVFESGBPMpFnWk652QPn%2BipaVY9H9i6%2FbsqSRtWdk8NpzWHDpkv9IpPX5enUFVpGKRZhd%2Buf3krHc&X-Amz-Signature=cf0de9760c83c82f9e11c9d18bbc55874f710ae74f593cd6535c2e82845a73c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JJNQ5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC%2BskBdUrLKZ6e8nCn9IWr1%2B15e7dF2hV65pXlKUmxzxQIhAOohuKrZWFrKH9Koi408TWY9JOSZRD1bcpK0zrQRk8frKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhYyx59EMjjbIz5fcq3APMhV7prprEA6CAJVCayX9bctJf%2B9wcmiRlhGK1rUaCuJhGZwX5E5t27yzn37LRanx%2B%2FF5juunKXiej4t7pxNf1rpes84Vbu5qWncKtWIuxVIBMmL%2Bw68QjJm5pnDPQ5Dmq3fyhk5fi%2BRDHx3XseQ36U6a8vek61sidRQGWoq2nADScyG2Kej9L6DmsgVRLC6L%2BjjFxE%2BRMByDYOOJQrZh8T%2F1rRXvKDZmSLHgf1gDYIjR0f4v60m6FTyT39j3XYGs5Mlsc6XWB9sYmkrDTmS6Gf6hIbW53XFrJUpGvJwY93QNliDbLtttuGUBQ4dlGrjkTKJiLqzoU95G56eWciEjwdsWxHpx%2BKLvvJefJHWqN6fNBzKiuOTW%2Bx7%2BY0KW15bthnuUmmhccFPjFi5bsBrIjWjna7qzSogoNxkDh%2BIhCzN4pqM33TtZYtwv5kqQRdKs8VkxFHJNvgJ5bLlOYAKjjZeGY6vcYr60%2FTLcBmfqYM4k1fUeyeNtl3NrUBSdknET4eUCJGEzl%2FJEINJ5TyyOS4MIy1Emnw6qTW0%2BanWb0qqvF4KPOXh6R67ncP6syNUF%2BHGx0YlWosymNCTaEOnIScrgG%2Fu3gbLBMMwjP%2F03mwcICWLpJnk%2BwZ%2B3BsjDqqtHBBjqkAUzjuAOAxPKvHQUpFmLSBmibKmJMKH3Ibj6gH1ZIMbcB0aysSXauFCg2GXAo93dbCRJNDZfFY8UlTFxDNFP36FA6HCmfjoAPteZxKB7mMLnvu9slU1YleApk%2F7jDE1Fq1uQ8OLHhfweZTvSvVFESGBPMpFnWk652QPn%2BipaVY9H9i6%2FbsqSRtWdk8NpzWHDpkv9IpPX5enUFVpGKRZhd%2Buf3krHc&X-Amz-Signature=d271468995a8b0826af811860a9239dc3d6afec774b06868eac6f981127d3b63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JJNQ5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC%2BskBdUrLKZ6e8nCn9IWr1%2B15e7dF2hV65pXlKUmxzxQIhAOohuKrZWFrKH9Koi408TWY9JOSZRD1bcpK0zrQRk8frKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhYyx59EMjjbIz5fcq3APMhV7prprEA6CAJVCayX9bctJf%2B9wcmiRlhGK1rUaCuJhGZwX5E5t27yzn37LRanx%2B%2FF5juunKXiej4t7pxNf1rpes84Vbu5qWncKtWIuxVIBMmL%2Bw68QjJm5pnDPQ5Dmq3fyhk5fi%2BRDHx3XseQ36U6a8vek61sidRQGWoq2nADScyG2Kej9L6DmsgVRLC6L%2BjjFxE%2BRMByDYOOJQrZh8T%2F1rRXvKDZmSLHgf1gDYIjR0f4v60m6FTyT39j3XYGs5Mlsc6XWB9sYmkrDTmS6Gf6hIbW53XFrJUpGvJwY93QNliDbLtttuGUBQ4dlGrjkTKJiLqzoU95G56eWciEjwdsWxHpx%2BKLvvJefJHWqN6fNBzKiuOTW%2Bx7%2BY0KW15bthnuUmmhccFPjFi5bsBrIjWjna7qzSogoNxkDh%2BIhCzN4pqM33TtZYtwv5kqQRdKs8VkxFHJNvgJ5bLlOYAKjjZeGY6vcYr60%2FTLcBmfqYM4k1fUeyeNtl3NrUBSdknET4eUCJGEzl%2FJEINJ5TyyOS4MIy1Emnw6qTW0%2BanWb0qqvF4KPOXh6R67ncP6syNUF%2BHGx0YlWosymNCTaEOnIScrgG%2Fu3gbLBMMwjP%2F03mwcICWLpJnk%2BwZ%2B3BsjDqqtHBBjqkAUzjuAOAxPKvHQUpFmLSBmibKmJMKH3Ibj6gH1ZIMbcB0aysSXauFCg2GXAo93dbCRJNDZfFY8UlTFxDNFP36FA6HCmfjoAPteZxKB7mMLnvu9slU1YleApk%2F7jDE1Fq1uQ8OLHhfweZTvSvVFESGBPMpFnWk652QPn%2BipaVY9H9i6%2FbsqSRtWdk8NpzWHDpkv9IpPX5enUFVpGKRZhd%2Buf3krHc&X-Amz-Signature=51848b9e0a23f0941d3061b4b056f1e74a629323b83ac64eacca89e2c904fd91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4JJNQ5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC%2BskBdUrLKZ6e8nCn9IWr1%2B15e7dF2hV65pXlKUmxzxQIhAOohuKrZWFrKH9Koi408TWY9JOSZRD1bcpK0zrQRk8frKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhYyx59EMjjbIz5fcq3APMhV7prprEA6CAJVCayX9bctJf%2B9wcmiRlhGK1rUaCuJhGZwX5E5t27yzn37LRanx%2B%2FF5juunKXiej4t7pxNf1rpes84Vbu5qWncKtWIuxVIBMmL%2Bw68QjJm5pnDPQ5Dmq3fyhk5fi%2BRDHx3XseQ36U6a8vek61sidRQGWoq2nADScyG2Kej9L6DmsgVRLC6L%2BjjFxE%2BRMByDYOOJQrZh8T%2F1rRXvKDZmSLHgf1gDYIjR0f4v60m6FTyT39j3XYGs5Mlsc6XWB9sYmkrDTmS6Gf6hIbW53XFrJUpGvJwY93QNliDbLtttuGUBQ4dlGrjkTKJiLqzoU95G56eWciEjwdsWxHpx%2BKLvvJefJHWqN6fNBzKiuOTW%2Bx7%2BY0KW15bthnuUmmhccFPjFi5bsBrIjWjna7qzSogoNxkDh%2BIhCzN4pqM33TtZYtwv5kqQRdKs8VkxFHJNvgJ5bLlOYAKjjZeGY6vcYr60%2FTLcBmfqYM4k1fUeyeNtl3NrUBSdknET4eUCJGEzl%2FJEINJ5TyyOS4MIy1Emnw6qTW0%2BanWb0qqvF4KPOXh6R67ncP6syNUF%2BHGx0YlWosymNCTaEOnIScrgG%2Fu3gbLBMMwjP%2F03mwcICWLpJnk%2BwZ%2B3BsjDqqtHBBjqkAUzjuAOAxPKvHQUpFmLSBmibKmJMKH3Ibj6gH1ZIMbcB0aysSXauFCg2GXAo93dbCRJNDZfFY8UlTFxDNFP36FA6HCmfjoAPteZxKB7mMLnvu9slU1YleApk%2F7jDE1Fq1uQ8OLHhfweZTvSvVFESGBPMpFnWk652QPn%2BipaVY9H9i6%2FbsqSRtWdk8NpzWHDpkv9IpPX5enUFVpGKRZhd%2Buf3krHc&X-Amz-Signature=4647cbee09b1c1f8db0cd9d55541495d886e03091cebee21bd288ebb20cc2fa0&X-Amz-SignedHeaders=host&x-id=GetObject)
