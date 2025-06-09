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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4SUJD5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNUNUpFKHclDZwgQWkecrY9dJ6R%2BRSWixUZ9BSf3D6AiEAy4Y%2BFxkKjze5ZrUCri2x0LKse9iIzxenWpBaGpMc2YUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPEVNewRzMYUiaJCrcA3DOAJeggppeOy5nEHit%2FGDgqTG8jswN9ZY4ziWPbWY09xyk7A0xW4PEFpV93CEaswhn4WAd9E69%2BSZkI%2BwOLZYtMFZ%2FCmVUj8BqcCxLemwd7GUCHezaOThpZgMTFlswyTHi6ePWgbF%2FqgtkSuCTp8WtKOo27SBlDZxfLBuC9hVtv8M0j75bxlPcGqtkg47NE5zNN%2FKGoxs1S4GS6JnpEH9d7RhWD711dtGbYn4l9wpSm7VrJiMMI5kLllOQttfMUQE%2BLFusDEGe6xC1KpYhtwS6069obELfRJt7CdK20PbRZBOXBBCWfJSENAEknATDITz4NV0HLYoropKPGVLrk8KsTfLVmWPGn25%2B2wF8bXa%2FkIvoLrPqlX3ldywcfK278f8XXDICTtVh%2FPbe9H4kKpciNYFHIUbBsnC6yTAGVNyeLq7RkwzN0xyhJgPhuYxcmfw8LJUJ4Z1bI8H6ZBfGqzeH4KdJzb33xL5lkF2gbvdRnYF6x0DtagszbpJHIbS2O7MEiw9Vjy7aPxoHsJUXi65i%2B%2FzXV3XNX99tDG7B2ZDMqVbMDCNKSCZ3El9tD00ipVjmhYbPJ1dwNkSTAsfIa5PlNpFJYFaoehv8Wy%2BZkxnrGBEaoYGO1%2BDZmFwzMM%2Bem8IGOqUBPx0p5ObMiETXMDEzMlAQC%2FUE6s%2FNifj%2BMpfvese0GIyMhdJwD5Wzbh3gPKcTFSfZoaqFtpCcNCGCtUF1qWxBgrAPOpwOMSZvR4qCXq9GKqW%2Bg%2BnuTxYjZC9z2tLAkkJ0SytlIbxWMewEOD2LiZne6%2FNm7s0HwWIwKOjRan7jZ6kgfe%2FZixOMrVp%2FNp9V02z%2Bchzgv%2FBWEKjkp2HroEt1Uxai2eE8&X-Amz-Signature=083fa2039558cf3c4bb5a19b8e7fb9af20e802d5cb3444098acd03f7acfba4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4SUJD5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNUNUpFKHclDZwgQWkecrY9dJ6R%2BRSWixUZ9BSf3D6AiEAy4Y%2BFxkKjze5ZrUCri2x0LKse9iIzxenWpBaGpMc2YUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPEVNewRzMYUiaJCrcA3DOAJeggppeOy5nEHit%2FGDgqTG8jswN9ZY4ziWPbWY09xyk7A0xW4PEFpV93CEaswhn4WAd9E69%2BSZkI%2BwOLZYtMFZ%2FCmVUj8BqcCxLemwd7GUCHezaOThpZgMTFlswyTHi6ePWgbF%2FqgtkSuCTp8WtKOo27SBlDZxfLBuC9hVtv8M0j75bxlPcGqtkg47NE5zNN%2FKGoxs1S4GS6JnpEH9d7RhWD711dtGbYn4l9wpSm7VrJiMMI5kLllOQttfMUQE%2BLFusDEGe6xC1KpYhtwS6069obELfRJt7CdK20PbRZBOXBBCWfJSENAEknATDITz4NV0HLYoropKPGVLrk8KsTfLVmWPGn25%2B2wF8bXa%2FkIvoLrPqlX3ldywcfK278f8XXDICTtVh%2FPbe9H4kKpciNYFHIUbBsnC6yTAGVNyeLq7RkwzN0xyhJgPhuYxcmfw8LJUJ4Z1bI8H6ZBfGqzeH4KdJzb33xL5lkF2gbvdRnYF6x0DtagszbpJHIbS2O7MEiw9Vjy7aPxoHsJUXi65i%2B%2FzXV3XNX99tDG7B2ZDMqVbMDCNKSCZ3El9tD00ipVjmhYbPJ1dwNkSTAsfIa5PlNpFJYFaoehv8Wy%2BZkxnrGBEaoYGO1%2BDZmFwzMM%2Bem8IGOqUBPx0p5ObMiETXMDEzMlAQC%2FUE6s%2FNifj%2BMpfvese0GIyMhdJwD5Wzbh3gPKcTFSfZoaqFtpCcNCGCtUF1qWxBgrAPOpwOMSZvR4qCXq9GKqW%2Bg%2BnuTxYjZC9z2tLAkkJ0SytlIbxWMewEOD2LiZne6%2FNm7s0HwWIwKOjRan7jZ6kgfe%2FZixOMrVp%2FNp9V02z%2Bchzgv%2FBWEKjkp2HroEt1Uxai2eE8&X-Amz-Signature=0255c1e70c1b884a888df06d3f0d7cbd626074493b13b22efae7881009c12d91&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4SUJD5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNUNUpFKHclDZwgQWkecrY9dJ6R%2BRSWixUZ9BSf3D6AiEAy4Y%2BFxkKjze5ZrUCri2x0LKse9iIzxenWpBaGpMc2YUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPEVNewRzMYUiaJCrcA3DOAJeggppeOy5nEHit%2FGDgqTG8jswN9ZY4ziWPbWY09xyk7A0xW4PEFpV93CEaswhn4WAd9E69%2BSZkI%2BwOLZYtMFZ%2FCmVUj8BqcCxLemwd7GUCHezaOThpZgMTFlswyTHi6ePWgbF%2FqgtkSuCTp8WtKOo27SBlDZxfLBuC9hVtv8M0j75bxlPcGqtkg47NE5zNN%2FKGoxs1S4GS6JnpEH9d7RhWD711dtGbYn4l9wpSm7VrJiMMI5kLllOQttfMUQE%2BLFusDEGe6xC1KpYhtwS6069obELfRJt7CdK20PbRZBOXBBCWfJSENAEknATDITz4NV0HLYoropKPGVLrk8KsTfLVmWPGn25%2B2wF8bXa%2FkIvoLrPqlX3ldywcfK278f8XXDICTtVh%2FPbe9H4kKpciNYFHIUbBsnC6yTAGVNyeLq7RkwzN0xyhJgPhuYxcmfw8LJUJ4Z1bI8H6ZBfGqzeH4KdJzb33xL5lkF2gbvdRnYF6x0DtagszbpJHIbS2O7MEiw9Vjy7aPxoHsJUXi65i%2B%2FzXV3XNX99tDG7B2ZDMqVbMDCNKSCZ3El9tD00ipVjmhYbPJ1dwNkSTAsfIa5PlNpFJYFaoehv8Wy%2BZkxnrGBEaoYGO1%2BDZmFwzMM%2Bem8IGOqUBPx0p5ObMiETXMDEzMlAQC%2FUE6s%2FNifj%2BMpfvese0GIyMhdJwD5Wzbh3gPKcTFSfZoaqFtpCcNCGCtUF1qWxBgrAPOpwOMSZvR4qCXq9GKqW%2Bg%2BnuTxYjZC9z2tLAkkJ0SytlIbxWMewEOD2LiZne6%2FNm7s0HwWIwKOjRan7jZ6kgfe%2FZixOMrVp%2FNp9V02z%2Bchzgv%2FBWEKjkp2HroEt1Uxai2eE8&X-Amz-Signature=0310aa63e6c72a74c8b74cf82aea351a277cd231e36ff05ad019d3a43cf89c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4SUJD5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNUNUpFKHclDZwgQWkecrY9dJ6R%2BRSWixUZ9BSf3D6AiEAy4Y%2BFxkKjze5ZrUCri2x0LKse9iIzxenWpBaGpMc2YUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPEVNewRzMYUiaJCrcA3DOAJeggppeOy5nEHit%2FGDgqTG8jswN9ZY4ziWPbWY09xyk7A0xW4PEFpV93CEaswhn4WAd9E69%2BSZkI%2BwOLZYtMFZ%2FCmVUj8BqcCxLemwd7GUCHezaOThpZgMTFlswyTHi6ePWgbF%2FqgtkSuCTp8WtKOo27SBlDZxfLBuC9hVtv8M0j75bxlPcGqtkg47NE5zNN%2FKGoxs1S4GS6JnpEH9d7RhWD711dtGbYn4l9wpSm7VrJiMMI5kLllOQttfMUQE%2BLFusDEGe6xC1KpYhtwS6069obELfRJt7CdK20PbRZBOXBBCWfJSENAEknATDITz4NV0HLYoropKPGVLrk8KsTfLVmWPGn25%2B2wF8bXa%2FkIvoLrPqlX3ldywcfK278f8XXDICTtVh%2FPbe9H4kKpciNYFHIUbBsnC6yTAGVNyeLq7RkwzN0xyhJgPhuYxcmfw8LJUJ4Z1bI8H6ZBfGqzeH4KdJzb33xL5lkF2gbvdRnYF6x0DtagszbpJHIbS2O7MEiw9Vjy7aPxoHsJUXi65i%2B%2FzXV3XNX99tDG7B2ZDMqVbMDCNKSCZ3El9tD00ipVjmhYbPJ1dwNkSTAsfIa5PlNpFJYFaoehv8Wy%2BZkxnrGBEaoYGO1%2BDZmFwzMM%2Bem8IGOqUBPx0p5ObMiETXMDEzMlAQC%2FUE6s%2FNifj%2BMpfvese0GIyMhdJwD5Wzbh3gPKcTFSfZoaqFtpCcNCGCtUF1qWxBgrAPOpwOMSZvR4qCXq9GKqW%2Bg%2BnuTxYjZC9z2tLAkkJ0SytlIbxWMewEOD2LiZne6%2FNm7s0HwWIwKOjRan7jZ6kgfe%2FZixOMrVp%2FNp9V02z%2Bchzgv%2FBWEKjkp2HroEt1Uxai2eE8&X-Amz-Signature=b79d8db5f546eb045e3bacddb4ca04dd52768db2b94d546803f5d7ede08fe2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4SUJD5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNUNUpFKHclDZwgQWkecrY9dJ6R%2BRSWixUZ9BSf3D6AiEAy4Y%2BFxkKjze5ZrUCri2x0LKse9iIzxenWpBaGpMc2YUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPEVNewRzMYUiaJCrcA3DOAJeggppeOy5nEHit%2FGDgqTG8jswN9ZY4ziWPbWY09xyk7A0xW4PEFpV93CEaswhn4WAd9E69%2BSZkI%2BwOLZYtMFZ%2FCmVUj8BqcCxLemwd7GUCHezaOThpZgMTFlswyTHi6ePWgbF%2FqgtkSuCTp8WtKOo27SBlDZxfLBuC9hVtv8M0j75bxlPcGqtkg47NE5zNN%2FKGoxs1S4GS6JnpEH9d7RhWD711dtGbYn4l9wpSm7VrJiMMI5kLllOQttfMUQE%2BLFusDEGe6xC1KpYhtwS6069obELfRJt7CdK20PbRZBOXBBCWfJSENAEknATDITz4NV0HLYoropKPGVLrk8KsTfLVmWPGn25%2B2wF8bXa%2FkIvoLrPqlX3ldywcfK278f8XXDICTtVh%2FPbe9H4kKpciNYFHIUbBsnC6yTAGVNyeLq7RkwzN0xyhJgPhuYxcmfw8LJUJ4Z1bI8H6ZBfGqzeH4KdJzb33xL5lkF2gbvdRnYF6x0DtagszbpJHIbS2O7MEiw9Vjy7aPxoHsJUXi65i%2B%2FzXV3XNX99tDG7B2ZDMqVbMDCNKSCZ3El9tD00ipVjmhYbPJ1dwNkSTAsfIa5PlNpFJYFaoehv8Wy%2BZkxnrGBEaoYGO1%2BDZmFwzMM%2Bem8IGOqUBPx0p5ObMiETXMDEzMlAQC%2FUE6s%2FNifj%2BMpfvese0GIyMhdJwD5Wzbh3gPKcTFSfZoaqFtpCcNCGCtUF1qWxBgrAPOpwOMSZvR4qCXq9GKqW%2Bg%2BnuTxYjZC9z2tLAkkJ0SytlIbxWMewEOD2LiZne6%2FNm7s0HwWIwKOjRan7jZ6kgfe%2FZixOMrVp%2FNp9V02z%2Bchzgv%2FBWEKjkp2HroEt1Uxai2eE8&X-Amz-Signature=f86ccc9140eaaff4e912c12c71beccb5085f285de2a1aef27fd62546898043f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4SUJD5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATNUNUpFKHclDZwgQWkecrY9dJ6R%2BRSWixUZ9BSf3D6AiEAy4Y%2BFxkKjze5ZrUCri2x0LKse9iIzxenWpBaGpMc2YUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPEVNewRzMYUiaJCrcA3DOAJeggppeOy5nEHit%2FGDgqTG8jswN9ZY4ziWPbWY09xyk7A0xW4PEFpV93CEaswhn4WAd9E69%2BSZkI%2BwOLZYtMFZ%2FCmVUj8BqcCxLemwd7GUCHezaOThpZgMTFlswyTHi6ePWgbF%2FqgtkSuCTp8WtKOo27SBlDZxfLBuC9hVtv8M0j75bxlPcGqtkg47NE5zNN%2FKGoxs1S4GS6JnpEH9d7RhWD711dtGbYn4l9wpSm7VrJiMMI5kLllOQttfMUQE%2BLFusDEGe6xC1KpYhtwS6069obELfRJt7CdK20PbRZBOXBBCWfJSENAEknATDITz4NV0HLYoropKPGVLrk8KsTfLVmWPGn25%2B2wF8bXa%2FkIvoLrPqlX3ldywcfK278f8XXDICTtVh%2FPbe9H4kKpciNYFHIUbBsnC6yTAGVNyeLq7RkwzN0xyhJgPhuYxcmfw8LJUJ4Z1bI8H6ZBfGqzeH4KdJzb33xL5lkF2gbvdRnYF6x0DtagszbpJHIbS2O7MEiw9Vjy7aPxoHsJUXi65i%2B%2FzXV3XNX99tDG7B2ZDMqVbMDCNKSCZ3El9tD00ipVjmhYbPJ1dwNkSTAsfIa5PlNpFJYFaoehv8Wy%2BZkxnrGBEaoYGO1%2BDZmFwzMM%2Bem8IGOqUBPx0p5ObMiETXMDEzMlAQC%2FUE6s%2FNifj%2BMpfvese0GIyMhdJwD5Wzbh3gPKcTFSfZoaqFtpCcNCGCtUF1qWxBgrAPOpwOMSZvR4qCXq9GKqW%2Bg%2BnuTxYjZC9z2tLAkkJ0SytlIbxWMewEOD2LiZne6%2FNm7s0HwWIwKOjRan7jZ6kgfe%2FZixOMrVp%2FNp9V02z%2Bchzgv%2FBWEKjkp2HroEt1Uxai2eE8&X-Amz-Signature=7f615bbc163de432d2e834245cc4361163a00510884b41f37675b4d62ac3ee0e&X-Amz-SignedHeaders=host&x-id=GetObject)
