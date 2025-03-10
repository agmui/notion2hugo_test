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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBTTV73%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGECeROLZJBKja4O76I%2Fjrdn2MpnDq4rcIsPFJ8RzEjsAiAoVGRQQpEPmYxLWZp0jzQsWPeuoMK0SPPyYyQ1%2BH%2FXMiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuuYyjMNesRvDEqyKtwDnuPa3v7rucVglLkCFdRGrJdRLdbJSD4FNLP9VtlEiwVsnwjV1ZaWmt1vkgV7xkrBUWqBDuJk1zYB22W%2FzZhxLh2pK0Hc7XqbMleP2IMcJY4P%2ByRvJXlhopjp4fa51V3RHKKr3w9GAoeLH03%2FSZMuFRm%2FCaRhiFILeW9o3rRe1ASGRoi%2B9GxyXgqCZLB%2BHw65qMWz7OPadvdJQMTaUE3cIjixZb8x7JHphxiJd7h0GGW4duv4n2z%2FfP9HJp65V9vcE8vUVLVMWfLbr8p5g661qR3gCQMRPULcnz0%2BRe4lI%2FDxUDj9Z7gCvA57FCjWVT3P2KRGmRiRN2qNBrzFHq1rpxFEH92NvJaG0s5F4MijH8y8%2FJMMGwi9O5GaaCj1f1h7RNnddOJCQkTTT6VxvcZOjeYN1vXkbKClqrhYwRzSBLUMTDt9w9Nk%2FDCzf8Gg023%2BaJ4%2Fcx0eOAxatoXUyPz3aHdl%2Fe8K%2B688yPJXyFyoKVxxYsQLL7kWByYYAbqtz9tcwjQmiJYrFL%2FUkDAWgn87pg8U7rIM2jq%2B6gTEGR7O7js44QTfqDdeaLQiViCmUrrPF4optz%2Fz%2Ftvc22zaFuH1JQg7tu%2BdFCIOGfwC0671711yOiUtC8DJzDj5qHgwqui6vgY6pgHTMTLt42h5FOy7jUumCAxTo%2FDQp6YG%2BNM4dh5qj59KziCLWbOTpLff7VrgepIAd1phg80DSaoo%2Bx1R9xY7Cb0BSNdb3nLgIPpUGiSD1gy9UQ6XhW%2F1Chlj%2BPScw441BTJV1v4%2Fzx94rl00uQ4OVPR0wAE1l7hcf3lYZN4QIdXPi4riYBPksHOIaqHzxp%2FUZwAt2TlokQ8t%2FQBKtCfdExvlaqggS4rr&X-Amz-Signature=fddb2314527553ba8b1fd3c94d9d730bac4c13eaf832d99d837a460ae74ae437&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBTTV73%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGECeROLZJBKja4O76I%2Fjrdn2MpnDq4rcIsPFJ8RzEjsAiAoVGRQQpEPmYxLWZp0jzQsWPeuoMK0SPPyYyQ1%2BH%2FXMiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuuYyjMNesRvDEqyKtwDnuPa3v7rucVglLkCFdRGrJdRLdbJSD4FNLP9VtlEiwVsnwjV1ZaWmt1vkgV7xkrBUWqBDuJk1zYB22W%2FzZhxLh2pK0Hc7XqbMleP2IMcJY4P%2ByRvJXlhopjp4fa51V3RHKKr3w9GAoeLH03%2FSZMuFRm%2FCaRhiFILeW9o3rRe1ASGRoi%2B9GxyXgqCZLB%2BHw65qMWz7OPadvdJQMTaUE3cIjixZb8x7JHphxiJd7h0GGW4duv4n2z%2FfP9HJp65V9vcE8vUVLVMWfLbr8p5g661qR3gCQMRPULcnz0%2BRe4lI%2FDxUDj9Z7gCvA57FCjWVT3P2KRGmRiRN2qNBrzFHq1rpxFEH92NvJaG0s5F4MijH8y8%2FJMMGwi9O5GaaCj1f1h7RNnddOJCQkTTT6VxvcZOjeYN1vXkbKClqrhYwRzSBLUMTDt9w9Nk%2FDCzf8Gg023%2BaJ4%2Fcx0eOAxatoXUyPz3aHdl%2Fe8K%2B688yPJXyFyoKVxxYsQLL7kWByYYAbqtz9tcwjQmiJYrFL%2FUkDAWgn87pg8U7rIM2jq%2B6gTEGR7O7js44QTfqDdeaLQiViCmUrrPF4optz%2Fz%2Ftvc22zaFuH1JQg7tu%2BdFCIOGfwC0671711yOiUtC8DJzDj5qHgwqui6vgY6pgHTMTLt42h5FOy7jUumCAxTo%2FDQp6YG%2BNM4dh5qj59KziCLWbOTpLff7VrgepIAd1phg80DSaoo%2Bx1R9xY7Cb0BSNdb3nLgIPpUGiSD1gy9UQ6XhW%2F1Chlj%2BPScw441BTJV1v4%2Fzx94rl00uQ4OVPR0wAE1l7hcf3lYZN4QIdXPi4riYBPksHOIaqHzxp%2FUZwAt2TlokQ8t%2FQBKtCfdExvlaqggS4rr&X-Amz-Signature=c2d9932d2b3a442746040c8ea337c8bfefb3569899ae9d5ab15a1c952a830f42&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBTTV73%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGECeROLZJBKja4O76I%2Fjrdn2MpnDq4rcIsPFJ8RzEjsAiAoVGRQQpEPmYxLWZp0jzQsWPeuoMK0SPPyYyQ1%2BH%2FXMiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuuYyjMNesRvDEqyKtwDnuPa3v7rucVglLkCFdRGrJdRLdbJSD4FNLP9VtlEiwVsnwjV1ZaWmt1vkgV7xkrBUWqBDuJk1zYB22W%2FzZhxLh2pK0Hc7XqbMleP2IMcJY4P%2ByRvJXlhopjp4fa51V3RHKKr3w9GAoeLH03%2FSZMuFRm%2FCaRhiFILeW9o3rRe1ASGRoi%2B9GxyXgqCZLB%2BHw65qMWz7OPadvdJQMTaUE3cIjixZb8x7JHphxiJd7h0GGW4duv4n2z%2FfP9HJp65V9vcE8vUVLVMWfLbr8p5g661qR3gCQMRPULcnz0%2BRe4lI%2FDxUDj9Z7gCvA57FCjWVT3P2KRGmRiRN2qNBrzFHq1rpxFEH92NvJaG0s5F4MijH8y8%2FJMMGwi9O5GaaCj1f1h7RNnddOJCQkTTT6VxvcZOjeYN1vXkbKClqrhYwRzSBLUMTDt9w9Nk%2FDCzf8Gg023%2BaJ4%2Fcx0eOAxatoXUyPz3aHdl%2Fe8K%2B688yPJXyFyoKVxxYsQLL7kWByYYAbqtz9tcwjQmiJYrFL%2FUkDAWgn87pg8U7rIM2jq%2B6gTEGR7O7js44QTfqDdeaLQiViCmUrrPF4optz%2Fz%2Ftvc22zaFuH1JQg7tu%2BdFCIOGfwC0671711yOiUtC8DJzDj5qHgwqui6vgY6pgHTMTLt42h5FOy7jUumCAxTo%2FDQp6YG%2BNM4dh5qj59KziCLWbOTpLff7VrgepIAd1phg80DSaoo%2Bx1R9xY7Cb0BSNdb3nLgIPpUGiSD1gy9UQ6XhW%2F1Chlj%2BPScw441BTJV1v4%2Fzx94rl00uQ4OVPR0wAE1l7hcf3lYZN4QIdXPi4riYBPksHOIaqHzxp%2FUZwAt2TlokQ8t%2FQBKtCfdExvlaqggS4rr&X-Amz-Signature=199a98b1827d9b60d72f2931fa76afb888b0c2d6b770658d5b9fe7562813d86a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBTTV73%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGECeROLZJBKja4O76I%2Fjrdn2MpnDq4rcIsPFJ8RzEjsAiAoVGRQQpEPmYxLWZp0jzQsWPeuoMK0SPPyYyQ1%2BH%2FXMiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuuYyjMNesRvDEqyKtwDnuPa3v7rucVglLkCFdRGrJdRLdbJSD4FNLP9VtlEiwVsnwjV1ZaWmt1vkgV7xkrBUWqBDuJk1zYB22W%2FzZhxLh2pK0Hc7XqbMleP2IMcJY4P%2ByRvJXlhopjp4fa51V3RHKKr3w9GAoeLH03%2FSZMuFRm%2FCaRhiFILeW9o3rRe1ASGRoi%2B9GxyXgqCZLB%2BHw65qMWz7OPadvdJQMTaUE3cIjixZb8x7JHphxiJd7h0GGW4duv4n2z%2FfP9HJp65V9vcE8vUVLVMWfLbr8p5g661qR3gCQMRPULcnz0%2BRe4lI%2FDxUDj9Z7gCvA57FCjWVT3P2KRGmRiRN2qNBrzFHq1rpxFEH92NvJaG0s5F4MijH8y8%2FJMMGwi9O5GaaCj1f1h7RNnddOJCQkTTT6VxvcZOjeYN1vXkbKClqrhYwRzSBLUMTDt9w9Nk%2FDCzf8Gg023%2BaJ4%2Fcx0eOAxatoXUyPz3aHdl%2Fe8K%2B688yPJXyFyoKVxxYsQLL7kWByYYAbqtz9tcwjQmiJYrFL%2FUkDAWgn87pg8U7rIM2jq%2B6gTEGR7O7js44QTfqDdeaLQiViCmUrrPF4optz%2Fz%2Ftvc22zaFuH1JQg7tu%2BdFCIOGfwC0671711yOiUtC8DJzDj5qHgwqui6vgY6pgHTMTLt42h5FOy7jUumCAxTo%2FDQp6YG%2BNM4dh5qj59KziCLWbOTpLff7VrgepIAd1phg80DSaoo%2Bx1R9xY7Cb0BSNdb3nLgIPpUGiSD1gy9UQ6XhW%2F1Chlj%2BPScw441BTJV1v4%2Fzx94rl00uQ4OVPR0wAE1l7hcf3lYZN4QIdXPi4riYBPksHOIaqHzxp%2FUZwAt2TlokQ8t%2FQBKtCfdExvlaqggS4rr&X-Amz-Signature=abb5329522f53898f5f8c891cf65ddf5e16571bb46f2ad46c96ffc26d7385659&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBTTV73%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGECeROLZJBKja4O76I%2Fjrdn2MpnDq4rcIsPFJ8RzEjsAiAoVGRQQpEPmYxLWZp0jzQsWPeuoMK0SPPyYyQ1%2BH%2FXMiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuuYyjMNesRvDEqyKtwDnuPa3v7rucVglLkCFdRGrJdRLdbJSD4FNLP9VtlEiwVsnwjV1ZaWmt1vkgV7xkrBUWqBDuJk1zYB22W%2FzZhxLh2pK0Hc7XqbMleP2IMcJY4P%2ByRvJXlhopjp4fa51V3RHKKr3w9GAoeLH03%2FSZMuFRm%2FCaRhiFILeW9o3rRe1ASGRoi%2B9GxyXgqCZLB%2BHw65qMWz7OPadvdJQMTaUE3cIjixZb8x7JHphxiJd7h0GGW4duv4n2z%2FfP9HJp65V9vcE8vUVLVMWfLbr8p5g661qR3gCQMRPULcnz0%2BRe4lI%2FDxUDj9Z7gCvA57FCjWVT3P2KRGmRiRN2qNBrzFHq1rpxFEH92NvJaG0s5F4MijH8y8%2FJMMGwi9O5GaaCj1f1h7RNnddOJCQkTTT6VxvcZOjeYN1vXkbKClqrhYwRzSBLUMTDt9w9Nk%2FDCzf8Gg023%2BaJ4%2Fcx0eOAxatoXUyPz3aHdl%2Fe8K%2B688yPJXyFyoKVxxYsQLL7kWByYYAbqtz9tcwjQmiJYrFL%2FUkDAWgn87pg8U7rIM2jq%2B6gTEGR7O7js44QTfqDdeaLQiViCmUrrPF4optz%2Fz%2Ftvc22zaFuH1JQg7tu%2BdFCIOGfwC0671711yOiUtC8DJzDj5qHgwqui6vgY6pgHTMTLt42h5FOy7jUumCAxTo%2FDQp6YG%2BNM4dh5qj59KziCLWbOTpLff7VrgepIAd1phg80DSaoo%2Bx1R9xY7Cb0BSNdb3nLgIPpUGiSD1gy9UQ6XhW%2F1Chlj%2BPScw441BTJV1v4%2Fzx94rl00uQ4OVPR0wAE1l7hcf3lYZN4QIdXPi4riYBPksHOIaqHzxp%2FUZwAt2TlokQ8t%2FQBKtCfdExvlaqggS4rr&X-Amz-Signature=468d24f9b7c30ab96036063c32cb7f0917b13eadb868d00f972e165f5609e2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBTTV73%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGECeROLZJBKja4O76I%2Fjrdn2MpnDq4rcIsPFJ8RzEjsAiAoVGRQQpEPmYxLWZp0jzQsWPeuoMK0SPPyYyQ1%2BH%2FXMiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZuuYyjMNesRvDEqyKtwDnuPa3v7rucVglLkCFdRGrJdRLdbJSD4FNLP9VtlEiwVsnwjV1ZaWmt1vkgV7xkrBUWqBDuJk1zYB22W%2FzZhxLh2pK0Hc7XqbMleP2IMcJY4P%2ByRvJXlhopjp4fa51V3RHKKr3w9GAoeLH03%2FSZMuFRm%2FCaRhiFILeW9o3rRe1ASGRoi%2B9GxyXgqCZLB%2BHw65qMWz7OPadvdJQMTaUE3cIjixZb8x7JHphxiJd7h0GGW4duv4n2z%2FfP9HJp65V9vcE8vUVLVMWfLbr8p5g661qR3gCQMRPULcnz0%2BRe4lI%2FDxUDj9Z7gCvA57FCjWVT3P2KRGmRiRN2qNBrzFHq1rpxFEH92NvJaG0s5F4MijH8y8%2FJMMGwi9O5GaaCj1f1h7RNnddOJCQkTTT6VxvcZOjeYN1vXkbKClqrhYwRzSBLUMTDt9w9Nk%2FDCzf8Gg023%2BaJ4%2Fcx0eOAxatoXUyPz3aHdl%2Fe8K%2B688yPJXyFyoKVxxYsQLL7kWByYYAbqtz9tcwjQmiJYrFL%2FUkDAWgn87pg8U7rIM2jq%2B6gTEGR7O7js44QTfqDdeaLQiViCmUrrPF4optz%2Fz%2Ftvc22zaFuH1JQg7tu%2BdFCIOGfwC0671711yOiUtC8DJzDj5qHgwqui6vgY6pgHTMTLt42h5FOy7jUumCAxTo%2FDQp6YG%2BNM4dh5qj59KziCLWbOTpLff7VrgepIAd1phg80DSaoo%2Bx1R9xY7Cb0BSNdb3nLgIPpUGiSD1gy9UQ6XhW%2F1Chlj%2BPScw441BTJV1v4%2Fzx94rl00uQ4OVPR0wAE1l7hcf3lYZN4QIdXPi4riYBPksHOIaqHzxp%2FUZwAt2TlokQ8t%2FQBKtCfdExvlaqggS4rr&X-Amz-Signature=ce48e66d0f2239206f388d5fb8eb1202ed34f94fadedd0c3262df0fae0b71376&X-Amz-SignedHeaders=host&x-id=GetObject)
