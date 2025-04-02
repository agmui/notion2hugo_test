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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3MEU5K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDE4WZyRX42ElFh76ZKdT2kSGDcZ0SXtlwCOi%2BuVThIjgIgXwrlmzM5pUiPHkkSRmA9ryPWmMCqQEe9KKxIwtPBrbsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx%2FGB8TtZLGRutNBircA6r9xHyopGj%2BSPZEqxpq8geKGXyXl3DT%2Fmgl41dvDUdlXVoKzf8LKMBhfZh9hY57g1VKoB75MkXWmoq3xilrJH8Nc%2Fi2kXwyMCIe65c4%2FfWxrHSaiAWUEVN4W1UCX%2BVYxTvTHxH%2BDT1h0AmBgWwWEiAfSPxO9edBVT2oxaTy7cY%2F7Tv0p%2F1vRWZIB%2BPwqPJL4%2FifkuARecPrxVyTYOZjznxcAb4hC20NVv8izuXMltauVCsNPmE9cB3q8cFV7qEZAF2NJMgSc9eK5EwSUi5pSqfeZxNLDHEykotF8LReZT3U3LucapXLz8h%2BJeKRr5ghVce%2BzLWJi1AD0oGKIa6EbdjAZxO1Myf8XSwpbetZArKPvRNY9h4lraBaViwd7x3qlwFyNeuRVKadksJzKNdsH4xMKS7%2BuAg7guiu4lL1K7Jz3C%2FnOfQ%2BSsaGLfOrihf5h%2FZnuxYrbLJ6LgXwqFqVc8%2BvLi%2FD6oLuq%2B2Jes16pqRUDKzozqJyHscET7kqquUaon8m05l8du%2Bde%2BtNWCad%2FVOFkKe9fX9MMTpoNJdePCBdE3r3JQ6eviqFhUdqzBF64iTin6Y1FiSHh9UT5sGVGWKdoMM6l3dncLo8xq3qoJgkm9hfS%2F5xDMA0Ao9OMMbPsr8GOqUBsFDu3cK%2FImCYs2o4tFS7iwfsl%2BIvT7C8PuJbmWeBgJvmbfPLavIWZszNm5MVhuIsrBcG0oQqsPRBtWHIRRHs9LG8wV9tTzqMHfUohe3N7Kbj8xgUp1oesEqS9ixOYtmi7d4LwbwTOICqjQ5zndh1yV%2B7evtwnUrhQEYs9acl5njCnRfktJr5rZEVK8WhRLq38Q3UjEArFWV2sfwlDIOl2xdtteVK&X-Amz-Signature=daab9830ca16c36bcd72f9397baacb987b06f356437d64c7911b96ce67cf0cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3MEU5K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDE4WZyRX42ElFh76ZKdT2kSGDcZ0SXtlwCOi%2BuVThIjgIgXwrlmzM5pUiPHkkSRmA9ryPWmMCqQEe9KKxIwtPBrbsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx%2FGB8TtZLGRutNBircA6r9xHyopGj%2BSPZEqxpq8geKGXyXl3DT%2Fmgl41dvDUdlXVoKzf8LKMBhfZh9hY57g1VKoB75MkXWmoq3xilrJH8Nc%2Fi2kXwyMCIe65c4%2FfWxrHSaiAWUEVN4W1UCX%2BVYxTvTHxH%2BDT1h0AmBgWwWEiAfSPxO9edBVT2oxaTy7cY%2F7Tv0p%2F1vRWZIB%2BPwqPJL4%2FifkuARecPrxVyTYOZjznxcAb4hC20NVv8izuXMltauVCsNPmE9cB3q8cFV7qEZAF2NJMgSc9eK5EwSUi5pSqfeZxNLDHEykotF8LReZT3U3LucapXLz8h%2BJeKRr5ghVce%2BzLWJi1AD0oGKIa6EbdjAZxO1Myf8XSwpbetZArKPvRNY9h4lraBaViwd7x3qlwFyNeuRVKadksJzKNdsH4xMKS7%2BuAg7guiu4lL1K7Jz3C%2FnOfQ%2BSsaGLfOrihf5h%2FZnuxYrbLJ6LgXwqFqVc8%2BvLi%2FD6oLuq%2B2Jes16pqRUDKzozqJyHscET7kqquUaon8m05l8du%2Bde%2BtNWCad%2FVOFkKe9fX9MMTpoNJdePCBdE3r3JQ6eviqFhUdqzBF64iTin6Y1FiSHh9UT5sGVGWKdoMM6l3dncLo8xq3qoJgkm9hfS%2F5xDMA0Ao9OMMbPsr8GOqUBsFDu3cK%2FImCYs2o4tFS7iwfsl%2BIvT7C8PuJbmWeBgJvmbfPLavIWZszNm5MVhuIsrBcG0oQqsPRBtWHIRRHs9LG8wV9tTzqMHfUohe3N7Kbj8xgUp1oesEqS9ixOYtmi7d4LwbwTOICqjQ5zndh1yV%2B7evtwnUrhQEYs9acl5njCnRfktJr5rZEVK8WhRLq38Q3UjEArFWV2sfwlDIOl2xdtteVK&X-Amz-Signature=da6bbaa2bc1aadb4e43564b2d63a62304c6d049a67143105f53754e0740b5ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3MEU5K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDE4WZyRX42ElFh76ZKdT2kSGDcZ0SXtlwCOi%2BuVThIjgIgXwrlmzM5pUiPHkkSRmA9ryPWmMCqQEe9KKxIwtPBrbsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx%2FGB8TtZLGRutNBircA6r9xHyopGj%2BSPZEqxpq8geKGXyXl3DT%2Fmgl41dvDUdlXVoKzf8LKMBhfZh9hY57g1VKoB75MkXWmoq3xilrJH8Nc%2Fi2kXwyMCIe65c4%2FfWxrHSaiAWUEVN4W1UCX%2BVYxTvTHxH%2BDT1h0AmBgWwWEiAfSPxO9edBVT2oxaTy7cY%2F7Tv0p%2F1vRWZIB%2BPwqPJL4%2FifkuARecPrxVyTYOZjznxcAb4hC20NVv8izuXMltauVCsNPmE9cB3q8cFV7qEZAF2NJMgSc9eK5EwSUi5pSqfeZxNLDHEykotF8LReZT3U3LucapXLz8h%2BJeKRr5ghVce%2BzLWJi1AD0oGKIa6EbdjAZxO1Myf8XSwpbetZArKPvRNY9h4lraBaViwd7x3qlwFyNeuRVKadksJzKNdsH4xMKS7%2BuAg7guiu4lL1K7Jz3C%2FnOfQ%2BSsaGLfOrihf5h%2FZnuxYrbLJ6LgXwqFqVc8%2BvLi%2FD6oLuq%2B2Jes16pqRUDKzozqJyHscET7kqquUaon8m05l8du%2Bde%2BtNWCad%2FVOFkKe9fX9MMTpoNJdePCBdE3r3JQ6eviqFhUdqzBF64iTin6Y1FiSHh9UT5sGVGWKdoMM6l3dncLo8xq3qoJgkm9hfS%2F5xDMA0Ao9OMMbPsr8GOqUBsFDu3cK%2FImCYs2o4tFS7iwfsl%2BIvT7C8PuJbmWeBgJvmbfPLavIWZszNm5MVhuIsrBcG0oQqsPRBtWHIRRHs9LG8wV9tTzqMHfUohe3N7Kbj8xgUp1oesEqS9ixOYtmi7d4LwbwTOICqjQ5zndh1yV%2B7evtwnUrhQEYs9acl5njCnRfktJr5rZEVK8WhRLq38Q3UjEArFWV2sfwlDIOl2xdtteVK&X-Amz-Signature=577f8a6ad596d6c6169e3150ca20dd6e9890cd356202b27c2343019d3211466b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3MEU5K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDE4WZyRX42ElFh76ZKdT2kSGDcZ0SXtlwCOi%2BuVThIjgIgXwrlmzM5pUiPHkkSRmA9ryPWmMCqQEe9KKxIwtPBrbsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx%2FGB8TtZLGRutNBircA6r9xHyopGj%2BSPZEqxpq8geKGXyXl3DT%2Fmgl41dvDUdlXVoKzf8LKMBhfZh9hY57g1VKoB75MkXWmoq3xilrJH8Nc%2Fi2kXwyMCIe65c4%2FfWxrHSaiAWUEVN4W1UCX%2BVYxTvTHxH%2BDT1h0AmBgWwWEiAfSPxO9edBVT2oxaTy7cY%2F7Tv0p%2F1vRWZIB%2BPwqPJL4%2FifkuARecPrxVyTYOZjznxcAb4hC20NVv8izuXMltauVCsNPmE9cB3q8cFV7qEZAF2NJMgSc9eK5EwSUi5pSqfeZxNLDHEykotF8LReZT3U3LucapXLz8h%2BJeKRr5ghVce%2BzLWJi1AD0oGKIa6EbdjAZxO1Myf8XSwpbetZArKPvRNY9h4lraBaViwd7x3qlwFyNeuRVKadksJzKNdsH4xMKS7%2BuAg7guiu4lL1K7Jz3C%2FnOfQ%2BSsaGLfOrihf5h%2FZnuxYrbLJ6LgXwqFqVc8%2BvLi%2FD6oLuq%2B2Jes16pqRUDKzozqJyHscET7kqquUaon8m05l8du%2Bde%2BtNWCad%2FVOFkKe9fX9MMTpoNJdePCBdE3r3JQ6eviqFhUdqzBF64iTin6Y1FiSHh9UT5sGVGWKdoMM6l3dncLo8xq3qoJgkm9hfS%2F5xDMA0Ao9OMMbPsr8GOqUBsFDu3cK%2FImCYs2o4tFS7iwfsl%2BIvT7C8PuJbmWeBgJvmbfPLavIWZszNm5MVhuIsrBcG0oQqsPRBtWHIRRHs9LG8wV9tTzqMHfUohe3N7Kbj8xgUp1oesEqS9ixOYtmi7d4LwbwTOICqjQ5zndh1yV%2B7evtwnUrhQEYs9acl5njCnRfktJr5rZEVK8WhRLq38Q3UjEArFWV2sfwlDIOl2xdtteVK&X-Amz-Signature=2bdb6f939b8dda8fa2c24013b16f70fcbf5cf72d8cc956d3ff860fdfe4d6e6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3MEU5K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDE4WZyRX42ElFh76ZKdT2kSGDcZ0SXtlwCOi%2BuVThIjgIgXwrlmzM5pUiPHkkSRmA9ryPWmMCqQEe9KKxIwtPBrbsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx%2FGB8TtZLGRutNBircA6r9xHyopGj%2BSPZEqxpq8geKGXyXl3DT%2Fmgl41dvDUdlXVoKzf8LKMBhfZh9hY57g1VKoB75MkXWmoq3xilrJH8Nc%2Fi2kXwyMCIe65c4%2FfWxrHSaiAWUEVN4W1UCX%2BVYxTvTHxH%2BDT1h0AmBgWwWEiAfSPxO9edBVT2oxaTy7cY%2F7Tv0p%2F1vRWZIB%2BPwqPJL4%2FifkuARecPrxVyTYOZjznxcAb4hC20NVv8izuXMltauVCsNPmE9cB3q8cFV7qEZAF2NJMgSc9eK5EwSUi5pSqfeZxNLDHEykotF8LReZT3U3LucapXLz8h%2BJeKRr5ghVce%2BzLWJi1AD0oGKIa6EbdjAZxO1Myf8XSwpbetZArKPvRNY9h4lraBaViwd7x3qlwFyNeuRVKadksJzKNdsH4xMKS7%2BuAg7guiu4lL1K7Jz3C%2FnOfQ%2BSsaGLfOrihf5h%2FZnuxYrbLJ6LgXwqFqVc8%2BvLi%2FD6oLuq%2B2Jes16pqRUDKzozqJyHscET7kqquUaon8m05l8du%2Bde%2BtNWCad%2FVOFkKe9fX9MMTpoNJdePCBdE3r3JQ6eviqFhUdqzBF64iTin6Y1FiSHh9UT5sGVGWKdoMM6l3dncLo8xq3qoJgkm9hfS%2F5xDMA0Ao9OMMbPsr8GOqUBsFDu3cK%2FImCYs2o4tFS7iwfsl%2BIvT7C8PuJbmWeBgJvmbfPLavIWZszNm5MVhuIsrBcG0oQqsPRBtWHIRRHs9LG8wV9tTzqMHfUohe3N7Kbj8xgUp1oesEqS9ixOYtmi7d4LwbwTOICqjQ5zndh1yV%2B7evtwnUrhQEYs9acl5njCnRfktJr5rZEVK8WhRLq38Q3UjEArFWV2sfwlDIOl2xdtteVK&X-Amz-Signature=76bbd2fb04c433c6ef6bfb7c16edf3cf5e6fe0549fc0e30da91d29c2bca186c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3MEU5K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDE4WZyRX42ElFh76ZKdT2kSGDcZ0SXtlwCOi%2BuVThIjgIgXwrlmzM5pUiPHkkSRmA9ryPWmMCqQEe9KKxIwtPBrbsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFx%2FGB8TtZLGRutNBircA6r9xHyopGj%2BSPZEqxpq8geKGXyXl3DT%2Fmgl41dvDUdlXVoKzf8LKMBhfZh9hY57g1VKoB75MkXWmoq3xilrJH8Nc%2Fi2kXwyMCIe65c4%2FfWxrHSaiAWUEVN4W1UCX%2BVYxTvTHxH%2BDT1h0AmBgWwWEiAfSPxO9edBVT2oxaTy7cY%2F7Tv0p%2F1vRWZIB%2BPwqPJL4%2FifkuARecPrxVyTYOZjznxcAb4hC20NVv8izuXMltauVCsNPmE9cB3q8cFV7qEZAF2NJMgSc9eK5EwSUi5pSqfeZxNLDHEykotF8LReZT3U3LucapXLz8h%2BJeKRr5ghVce%2BzLWJi1AD0oGKIa6EbdjAZxO1Myf8XSwpbetZArKPvRNY9h4lraBaViwd7x3qlwFyNeuRVKadksJzKNdsH4xMKS7%2BuAg7guiu4lL1K7Jz3C%2FnOfQ%2BSsaGLfOrihf5h%2FZnuxYrbLJ6LgXwqFqVc8%2BvLi%2FD6oLuq%2B2Jes16pqRUDKzozqJyHscET7kqquUaon8m05l8du%2Bde%2BtNWCad%2FVOFkKe9fX9MMTpoNJdePCBdE3r3JQ6eviqFhUdqzBF64iTin6Y1FiSHh9UT5sGVGWKdoMM6l3dncLo8xq3qoJgkm9hfS%2F5xDMA0Ao9OMMbPsr8GOqUBsFDu3cK%2FImCYs2o4tFS7iwfsl%2BIvT7C8PuJbmWeBgJvmbfPLavIWZszNm5MVhuIsrBcG0oQqsPRBtWHIRRHs9LG8wV9tTzqMHfUohe3N7Kbj8xgUp1oesEqS9ixOYtmi7d4LwbwTOICqjQ5zndh1yV%2B7evtwnUrhQEYs9acl5njCnRfktJr5rZEVK8WhRLq38Q3UjEArFWV2sfwlDIOl2xdtteVK&X-Amz-Signature=16ad4fa26845109f68b93c214c67f388071dfbeedbe30f9d188e363afc0e7fe7&X-Amz-SignedHeaders=host&x-id=GetObject)
