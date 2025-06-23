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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AB7SFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA4sbkDCTlMj%2BhbrewpthfLSbCftvrT0Ndi1yBP%2FM1WXAiEArCj4BWRwAwXfpAM5imEv20rXMF9ngftkk96CTepI6F8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxArRYVFzd9YsUdhircA2jl%2FOXnZCqEkDZyvgC5Rx0eztsy4nDbK%2BCkFVmZxp1Z2X3tC%2FXlOAkO1%2FJNZjgVtDfVVsJ14hQ%2B4cSq4sm1JX6gjSJt%2BB1s2ZATDGCWL9ii2QKbyr%2B3smM8cRv1HldRUIm6eC2lC8jRlTbf9HU%2BsnA%2BLmUh14ZppwvLBU7P8A1RWJuBzzix9AsOwZcW0M1y6jXhn4OIUoXhl2yMWPu2K9nn6RiJ2jXWirSyVK%2BxkvTNtD2MPHO9gR8%2BNCTbVo0pXRwB86yA7dAnrWWDfshP5mgX%2F3MSBuX9ufRTHa727BvCa2RvMBfjvmHCKZiEtXx5kHGvu3vnwY2i1cuU8Voscj1n2W6fEnL%2FOxO%2BRspViNzZyYHTmrdphztrVWoz7gszHhpUASMVMNkbHGdlInX%2FzTmQOVoIVfhnUI8ckMZJTE7HLyVleBrGd3XqNdempb%2FWKbmA68h1y2jGqu1lKZyGqUOha%2BOISAJlwZZXxQTSMjc%2B5tgPbyDhR38ewpRWJh0t6vYbmpR1v%2FoD3OrD0aYJvpCJLRUMvmYerv9YrL8OeYtAYpVmsGCjOTKPQZbZlnOHBoSJ5HlXExMLKR2xoUlFcbYZtlGghgue%2FatBKtm3ZzeAF9uA%2FrH22ok97q0lMK6w48IGOqUBxls8aEGuEo4%2FvUpqXJ7Ha5uHdy%2Bvl8dvnFKsQ9iCfNQsrrLptaj7%2Bgv5OASjcewZY2ZI4PciXfqeC2Dxg1OJpxI9cWgI0Y1F92UGPVbU3ZgCe5z%2BtRyR4jg0PSg02vC8BJlnYZonq%2BfUa6fosDLwnB3EquFCp6nM4On2%2F%2FclZtZlPv4oFLL0VR7VDOIfV59bvmqvujJN27M5cRWw4F31KchSfeLx&X-Amz-Signature=3902f4ddc267f0c2511a4fa1d50e82280b50ad3475f85e13b13aeb140d5ff57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AB7SFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA4sbkDCTlMj%2BhbrewpthfLSbCftvrT0Ndi1yBP%2FM1WXAiEArCj4BWRwAwXfpAM5imEv20rXMF9ngftkk96CTepI6F8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxArRYVFzd9YsUdhircA2jl%2FOXnZCqEkDZyvgC5Rx0eztsy4nDbK%2BCkFVmZxp1Z2X3tC%2FXlOAkO1%2FJNZjgVtDfVVsJ14hQ%2B4cSq4sm1JX6gjSJt%2BB1s2ZATDGCWL9ii2QKbyr%2B3smM8cRv1HldRUIm6eC2lC8jRlTbf9HU%2BsnA%2BLmUh14ZppwvLBU7P8A1RWJuBzzix9AsOwZcW0M1y6jXhn4OIUoXhl2yMWPu2K9nn6RiJ2jXWirSyVK%2BxkvTNtD2MPHO9gR8%2BNCTbVo0pXRwB86yA7dAnrWWDfshP5mgX%2F3MSBuX9ufRTHa727BvCa2RvMBfjvmHCKZiEtXx5kHGvu3vnwY2i1cuU8Voscj1n2W6fEnL%2FOxO%2BRspViNzZyYHTmrdphztrVWoz7gszHhpUASMVMNkbHGdlInX%2FzTmQOVoIVfhnUI8ckMZJTE7HLyVleBrGd3XqNdempb%2FWKbmA68h1y2jGqu1lKZyGqUOha%2BOISAJlwZZXxQTSMjc%2B5tgPbyDhR38ewpRWJh0t6vYbmpR1v%2FoD3OrD0aYJvpCJLRUMvmYerv9YrL8OeYtAYpVmsGCjOTKPQZbZlnOHBoSJ5HlXExMLKR2xoUlFcbYZtlGghgue%2FatBKtm3ZzeAF9uA%2FrH22ok97q0lMK6w48IGOqUBxls8aEGuEo4%2FvUpqXJ7Ha5uHdy%2Bvl8dvnFKsQ9iCfNQsrrLptaj7%2Bgv5OASjcewZY2ZI4PciXfqeC2Dxg1OJpxI9cWgI0Y1F92UGPVbU3ZgCe5z%2BtRyR4jg0PSg02vC8BJlnYZonq%2BfUa6fosDLwnB3EquFCp6nM4On2%2F%2FclZtZlPv4oFLL0VR7VDOIfV59bvmqvujJN27M5cRWw4F31KchSfeLx&X-Amz-Signature=69c4edceae2bddb9471d27c252aa7456bcbac13a4a568339f6a8ae4d242e382c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AB7SFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA4sbkDCTlMj%2BhbrewpthfLSbCftvrT0Ndi1yBP%2FM1WXAiEArCj4BWRwAwXfpAM5imEv20rXMF9ngftkk96CTepI6F8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxArRYVFzd9YsUdhircA2jl%2FOXnZCqEkDZyvgC5Rx0eztsy4nDbK%2BCkFVmZxp1Z2X3tC%2FXlOAkO1%2FJNZjgVtDfVVsJ14hQ%2B4cSq4sm1JX6gjSJt%2BB1s2ZATDGCWL9ii2QKbyr%2B3smM8cRv1HldRUIm6eC2lC8jRlTbf9HU%2BsnA%2BLmUh14ZppwvLBU7P8A1RWJuBzzix9AsOwZcW0M1y6jXhn4OIUoXhl2yMWPu2K9nn6RiJ2jXWirSyVK%2BxkvTNtD2MPHO9gR8%2BNCTbVo0pXRwB86yA7dAnrWWDfshP5mgX%2F3MSBuX9ufRTHa727BvCa2RvMBfjvmHCKZiEtXx5kHGvu3vnwY2i1cuU8Voscj1n2W6fEnL%2FOxO%2BRspViNzZyYHTmrdphztrVWoz7gszHhpUASMVMNkbHGdlInX%2FzTmQOVoIVfhnUI8ckMZJTE7HLyVleBrGd3XqNdempb%2FWKbmA68h1y2jGqu1lKZyGqUOha%2BOISAJlwZZXxQTSMjc%2B5tgPbyDhR38ewpRWJh0t6vYbmpR1v%2FoD3OrD0aYJvpCJLRUMvmYerv9YrL8OeYtAYpVmsGCjOTKPQZbZlnOHBoSJ5HlXExMLKR2xoUlFcbYZtlGghgue%2FatBKtm3ZzeAF9uA%2FrH22ok97q0lMK6w48IGOqUBxls8aEGuEo4%2FvUpqXJ7Ha5uHdy%2Bvl8dvnFKsQ9iCfNQsrrLptaj7%2Bgv5OASjcewZY2ZI4PciXfqeC2Dxg1OJpxI9cWgI0Y1F92UGPVbU3ZgCe5z%2BtRyR4jg0PSg02vC8BJlnYZonq%2BfUa6fosDLwnB3EquFCp6nM4On2%2F%2FclZtZlPv4oFLL0VR7VDOIfV59bvmqvujJN27M5cRWw4F31KchSfeLx&X-Amz-Signature=0d8c72ec806c6b4886384c4586f8b7cc85b38d0b3b014ddaa6f6a0dcc726ec51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AB7SFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA4sbkDCTlMj%2BhbrewpthfLSbCftvrT0Ndi1yBP%2FM1WXAiEArCj4BWRwAwXfpAM5imEv20rXMF9ngftkk96CTepI6F8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxArRYVFzd9YsUdhircA2jl%2FOXnZCqEkDZyvgC5Rx0eztsy4nDbK%2BCkFVmZxp1Z2X3tC%2FXlOAkO1%2FJNZjgVtDfVVsJ14hQ%2B4cSq4sm1JX6gjSJt%2BB1s2ZATDGCWL9ii2QKbyr%2B3smM8cRv1HldRUIm6eC2lC8jRlTbf9HU%2BsnA%2BLmUh14ZppwvLBU7P8A1RWJuBzzix9AsOwZcW0M1y6jXhn4OIUoXhl2yMWPu2K9nn6RiJ2jXWirSyVK%2BxkvTNtD2MPHO9gR8%2BNCTbVo0pXRwB86yA7dAnrWWDfshP5mgX%2F3MSBuX9ufRTHa727BvCa2RvMBfjvmHCKZiEtXx5kHGvu3vnwY2i1cuU8Voscj1n2W6fEnL%2FOxO%2BRspViNzZyYHTmrdphztrVWoz7gszHhpUASMVMNkbHGdlInX%2FzTmQOVoIVfhnUI8ckMZJTE7HLyVleBrGd3XqNdempb%2FWKbmA68h1y2jGqu1lKZyGqUOha%2BOISAJlwZZXxQTSMjc%2B5tgPbyDhR38ewpRWJh0t6vYbmpR1v%2FoD3OrD0aYJvpCJLRUMvmYerv9YrL8OeYtAYpVmsGCjOTKPQZbZlnOHBoSJ5HlXExMLKR2xoUlFcbYZtlGghgue%2FatBKtm3ZzeAF9uA%2FrH22ok97q0lMK6w48IGOqUBxls8aEGuEo4%2FvUpqXJ7Ha5uHdy%2Bvl8dvnFKsQ9iCfNQsrrLptaj7%2Bgv5OASjcewZY2ZI4PciXfqeC2Dxg1OJpxI9cWgI0Y1F92UGPVbU3ZgCe5z%2BtRyR4jg0PSg02vC8BJlnYZonq%2BfUa6fosDLwnB3EquFCp6nM4On2%2F%2FclZtZlPv4oFLL0VR7VDOIfV59bvmqvujJN27M5cRWw4F31KchSfeLx&X-Amz-Signature=a237205dbdef6a819dd9a28d0b3cdafef34f199d6f2c3732fd929e096a8a2bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AB7SFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA4sbkDCTlMj%2BhbrewpthfLSbCftvrT0Ndi1yBP%2FM1WXAiEArCj4BWRwAwXfpAM5imEv20rXMF9ngftkk96CTepI6F8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxArRYVFzd9YsUdhircA2jl%2FOXnZCqEkDZyvgC5Rx0eztsy4nDbK%2BCkFVmZxp1Z2X3tC%2FXlOAkO1%2FJNZjgVtDfVVsJ14hQ%2B4cSq4sm1JX6gjSJt%2BB1s2ZATDGCWL9ii2QKbyr%2B3smM8cRv1HldRUIm6eC2lC8jRlTbf9HU%2BsnA%2BLmUh14ZppwvLBU7P8A1RWJuBzzix9AsOwZcW0M1y6jXhn4OIUoXhl2yMWPu2K9nn6RiJ2jXWirSyVK%2BxkvTNtD2MPHO9gR8%2BNCTbVo0pXRwB86yA7dAnrWWDfshP5mgX%2F3MSBuX9ufRTHa727BvCa2RvMBfjvmHCKZiEtXx5kHGvu3vnwY2i1cuU8Voscj1n2W6fEnL%2FOxO%2BRspViNzZyYHTmrdphztrVWoz7gszHhpUASMVMNkbHGdlInX%2FzTmQOVoIVfhnUI8ckMZJTE7HLyVleBrGd3XqNdempb%2FWKbmA68h1y2jGqu1lKZyGqUOha%2BOISAJlwZZXxQTSMjc%2B5tgPbyDhR38ewpRWJh0t6vYbmpR1v%2FoD3OrD0aYJvpCJLRUMvmYerv9YrL8OeYtAYpVmsGCjOTKPQZbZlnOHBoSJ5HlXExMLKR2xoUlFcbYZtlGghgue%2FatBKtm3ZzeAF9uA%2FrH22ok97q0lMK6w48IGOqUBxls8aEGuEo4%2FvUpqXJ7Ha5uHdy%2Bvl8dvnFKsQ9iCfNQsrrLptaj7%2Bgv5OASjcewZY2ZI4PciXfqeC2Dxg1OJpxI9cWgI0Y1F92UGPVbU3ZgCe5z%2BtRyR4jg0PSg02vC8BJlnYZonq%2BfUa6fosDLwnB3EquFCp6nM4On2%2F%2FclZtZlPv4oFLL0VR7VDOIfV59bvmqvujJN27M5cRWw4F31KchSfeLx&X-Amz-Signature=c3019b005d51c442451ed9265e37abf6d0f27034b19f0b7954fe2058d14bc19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AB7SFT2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA4sbkDCTlMj%2BhbrewpthfLSbCftvrT0Ndi1yBP%2FM1WXAiEArCj4BWRwAwXfpAM5imEv20rXMF9ngftkk96CTepI6F8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxArRYVFzd9YsUdhircA2jl%2FOXnZCqEkDZyvgC5Rx0eztsy4nDbK%2BCkFVmZxp1Z2X3tC%2FXlOAkO1%2FJNZjgVtDfVVsJ14hQ%2B4cSq4sm1JX6gjSJt%2BB1s2ZATDGCWL9ii2QKbyr%2B3smM8cRv1HldRUIm6eC2lC8jRlTbf9HU%2BsnA%2BLmUh14ZppwvLBU7P8A1RWJuBzzix9AsOwZcW0M1y6jXhn4OIUoXhl2yMWPu2K9nn6RiJ2jXWirSyVK%2BxkvTNtD2MPHO9gR8%2BNCTbVo0pXRwB86yA7dAnrWWDfshP5mgX%2F3MSBuX9ufRTHa727BvCa2RvMBfjvmHCKZiEtXx5kHGvu3vnwY2i1cuU8Voscj1n2W6fEnL%2FOxO%2BRspViNzZyYHTmrdphztrVWoz7gszHhpUASMVMNkbHGdlInX%2FzTmQOVoIVfhnUI8ckMZJTE7HLyVleBrGd3XqNdempb%2FWKbmA68h1y2jGqu1lKZyGqUOha%2BOISAJlwZZXxQTSMjc%2B5tgPbyDhR38ewpRWJh0t6vYbmpR1v%2FoD3OrD0aYJvpCJLRUMvmYerv9YrL8OeYtAYpVmsGCjOTKPQZbZlnOHBoSJ5HlXExMLKR2xoUlFcbYZtlGghgue%2FatBKtm3ZzeAF9uA%2FrH22ok97q0lMK6w48IGOqUBxls8aEGuEo4%2FvUpqXJ7Ha5uHdy%2Bvl8dvnFKsQ9iCfNQsrrLptaj7%2Bgv5OASjcewZY2ZI4PciXfqeC2Dxg1OJpxI9cWgI0Y1F92UGPVbU3ZgCe5z%2BtRyR4jg0PSg02vC8BJlnYZonq%2BfUa6fosDLwnB3EquFCp6nM4On2%2F%2FclZtZlPv4oFLL0VR7VDOIfV59bvmqvujJN27M5cRWw4F31KchSfeLx&X-Amz-Signature=2643231999b3491c2a545ab73463fd445623320f52491c050cb8caae0fa2dd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
