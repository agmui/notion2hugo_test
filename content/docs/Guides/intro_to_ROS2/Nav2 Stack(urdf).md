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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSH7UTV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCM%2BdXuMo1ubpg%2FJFTd0ODhbkjTFOJdQcPh4TDlZnbgGgIhALmTzDYoKtGhxnyE9LjaUnw%2BIWiMJ7%2Fhpzw7vnGTTeeHKv8DCCsQABoMNjM3NDIzMTgzODA1IgwAC%2BFkrv%2BlRSkAASkq3ANN1oPW7spWLuA8xcrKMLy1RAQRW%2BmTsfdD5XRzJ292ju1C91nhlB0qdVAbshKpcKKweMPjFg2TtP6eUc7fCnFExCppN2yprXH5%2Fle6edjUxGZBaSeNLndVTVa0xHYKlxUbyItgIn%2FcnFwPNQoTL3VQUZjqVGTQaUsx%2BSXXhzSMEQif1jbHbjD9YFNkCi73xEWNJeS3H1MuX%2Fp53IGoAad9zMFZ%2FAL5eDII65pqfvxmzMpZBZrfFsaa%2BwsXe9s4EZL97%2Fe6o7RUXxHpgvxu0M%2FxV%2F7PmV2QH1fYKp6Aot39mQqQA3wgEmEpMlQyxUx4ZfeQJzVRBTH7amfbZ72AUQ7uD8OMdhEsTUaxCmZngMPHiLZh4%2FO34pl%2Bfa5DJ9riDU2%2FQVpab8qs67c6Ppb0rKSmjodHZSsY5QrJTAan6cw%2BEFAsoix27WY9G0p1Fz5cSusTVnknTkyzq4G0OT2WTlK58ZrC0p1HJsImife3tDegQQ7Qb%2Fk8kYTOrJIjsPEEyDl671r3950k7CtzxDz0wy1HEsaFHIoz3tk6cluOLdDGI%2BCB%2FGNewyB8nM9NpCAEn%2BUmRZADP2SdezpRH7GEayMtYBgtCHYP9ZxvYg5NZR2RN37pjrFwTU4lXMS4sjDM%2BenCBjqkAVixuW0w8ilKxekZfeY6Guq9jgXRouSv4dpMmXBXUfcQ2TyU5P9PKzqJERQLjZrUKRQH6JMMPRmO6TIzsXXvEqoXkDOfvtBoX5rVMAOY%2BDeV6qLFVCzvXbCet0HNzcfNBHjhBZBUBqUDtqOaj%2Bk8ZXj8eIO7dQhsLdYqqdKZk4Gzo7rWc5Hc261%2FqM5oDYuTYJz6yAAjieLZFofqepG9kYGd3gjX&X-Amz-Signature=913cbc162e6459841be0fc52e117ff2392ff928071ab7a8a5048bb10fcacdbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSH7UTV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCM%2BdXuMo1ubpg%2FJFTd0ODhbkjTFOJdQcPh4TDlZnbgGgIhALmTzDYoKtGhxnyE9LjaUnw%2BIWiMJ7%2Fhpzw7vnGTTeeHKv8DCCsQABoMNjM3NDIzMTgzODA1IgwAC%2BFkrv%2BlRSkAASkq3ANN1oPW7spWLuA8xcrKMLy1RAQRW%2BmTsfdD5XRzJ292ju1C91nhlB0qdVAbshKpcKKweMPjFg2TtP6eUc7fCnFExCppN2yprXH5%2Fle6edjUxGZBaSeNLndVTVa0xHYKlxUbyItgIn%2FcnFwPNQoTL3VQUZjqVGTQaUsx%2BSXXhzSMEQif1jbHbjD9YFNkCi73xEWNJeS3H1MuX%2Fp53IGoAad9zMFZ%2FAL5eDII65pqfvxmzMpZBZrfFsaa%2BwsXe9s4EZL97%2Fe6o7RUXxHpgvxu0M%2FxV%2F7PmV2QH1fYKp6Aot39mQqQA3wgEmEpMlQyxUx4ZfeQJzVRBTH7amfbZ72AUQ7uD8OMdhEsTUaxCmZngMPHiLZh4%2FO34pl%2Bfa5DJ9riDU2%2FQVpab8qs67c6Ppb0rKSmjodHZSsY5QrJTAan6cw%2BEFAsoix27WY9G0p1Fz5cSusTVnknTkyzq4G0OT2WTlK58ZrC0p1HJsImife3tDegQQ7Qb%2Fk8kYTOrJIjsPEEyDl671r3950k7CtzxDz0wy1HEsaFHIoz3tk6cluOLdDGI%2BCB%2FGNewyB8nM9NpCAEn%2BUmRZADP2SdezpRH7GEayMtYBgtCHYP9ZxvYg5NZR2RN37pjrFwTU4lXMS4sjDM%2BenCBjqkAVixuW0w8ilKxekZfeY6Guq9jgXRouSv4dpMmXBXUfcQ2TyU5P9PKzqJERQLjZrUKRQH6JMMPRmO6TIzsXXvEqoXkDOfvtBoX5rVMAOY%2BDeV6qLFVCzvXbCet0HNzcfNBHjhBZBUBqUDtqOaj%2Bk8ZXj8eIO7dQhsLdYqqdKZk4Gzo7rWc5Hc261%2FqM5oDYuTYJz6yAAjieLZFofqepG9kYGd3gjX&X-Amz-Signature=7c7be902dcbeee0d8d5d030f17be59481aa8a89191b51ce7dcfaa8274d37a20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSH7UTV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCM%2BdXuMo1ubpg%2FJFTd0ODhbkjTFOJdQcPh4TDlZnbgGgIhALmTzDYoKtGhxnyE9LjaUnw%2BIWiMJ7%2Fhpzw7vnGTTeeHKv8DCCsQABoMNjM3NDIzMTgzODA1IgwAC%2BFkrv%2BlRSkAASkq3ANN1oPW7spWLuA8xcrKMLy1RAQRW%2BmTsfdD5XRzJ292ju1C91nhlB0qdVAbshKpcKKweMPjFg2TtP6eUc7fCnFExCppN2yprXH5%2Fle6edjUxGZBaSeNLndVTVa0xHYKlxUbyItgIn%2FcnFwPNQoTL3VQUZjqVGTQaUsx%2BSXXhzSMEQif1jbHbjD9YFNkCi73xEWNJeS3H1MuX%2Fp53IGoAad9zMFZ%2FAL5eDII65pqfvxmzMpZBZrfFsaa%2BwsXe9s4EZL97%2Fe6o7RUXxHpgvxu0M%2FxV%2F7PmV2QH1fYKp6Aot39mQqQA3wgEmEpMlQyxUx4ZfeQJzVRBTH7amfbZ72AUQ7uD8OMdhEsTUaxCmZngMPHiLZh4%2FO34pl%2Bfa5DJ9riDU2%2FQVpab8qs67c6Ppb0rKSmjodHZSsY5QrJTAan6cw%2BEFAsoix27WY9G0p1Fz5cSusTVnknTkyzq4G0OT2WTlK58ZrC0p1HJsImife3tDegQQ7Qb%2Fk8kYTOrJIjsPEEyDl671r3950k7CtzxDz0wy1HEsaFHIoz3tk6cluOLdDGI%2BCB%2FGNewyB8nM9NpCAEn%2BUmRZADP2SdezpRH7GEayMtYBgtCHYP9ZxvYg5NZR2RN37pjrFwTU4lXMS4sjDM%2BenCBjqkAVixuW0w8ilKxekZfeY6Guq9jgXRouSv4dpMmXBXUfcQ2TyU5P9PKzqJERQLjZrUKRQH6JMMPRmO6TIzsXXvEqoXkDOfvtBoX5rVMAOY%2BDeV6qLFVCzvXbCet0HNzcfNBHjhBZBUBqUDtqOaj%2Bk8ZXj8eIO7dQhsLdYqqdKZk4Gzo7rWc5Hc261%2FqM5oDYuTYJz6yAAjieLZFofqepG9kYGd3gjX&X-Amz-Signature=b17de369ccc7be8e1249b8622e426fd5cd16312444ddd4a4beffde130f46cc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSH7UTV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCM%2BdXuMo1ubpg%2FJFTd0ODhbkjTFOJdQcPh4TDlZnbgGgIhALmTzDYoKtGhxnyE9LjaUnw%2BIWiMJ7%2Fhpzw7vnGTTeeHKv8DCCsQABoMNjM3NDIzMTgzODA1IgwAC%2BFkrv%2BlRSkAASkq3ANN1oPW7spWLuA8xcrKMLy1RAQRW%2BmTsfdD5XRzJ292ju1C91nhlB0qdVAbshKpcKKweMPjFg2TtP6eUc7fCnFExCppN2yprXH5%2Fle6edjUxGZBaSeNLndVTVa0xHYKlxUbyItgIn%2FcnFwPNQoTL3VQUZjqVGTQaUsx%2BSXXhzSMEQif1jbHbjD9YFNkCi73xEWNJeS3H1MuX%2Fp53IGoAad9zMFZ%2FAL5eDII65pqfvxmzMpZBZrfFsaa%2BwsXe9s4EZL97%2Fe6o7RUXxHpgvxu0M%2FxV%2F7PmV2QH1fYKp6Aot39mQqQA3wgEmEpMlQyxUx4ZfeQJzVRBTH7amfbZ72AUQ7uD8OMdhEsTUaxCmZngMPHiLZh4%2FO34pl%2Bfa5DJ9riDU2%2FQVpab8qs67c6Ppb0rKSmjodHZSsY5QrJTAan6cw%2BEFAsoix27WY9G0p1Fz5cSusTVnknTkyzq4G0OT2WTlK58ZrC0p1HJsImife3tDegQQ7Qb%2Fk8kYTOrJIjsPEEyDl671r3950k7CtzxDz0wy1HEsaFHIoz3tk6cluOLdDGI%2BCB%2FGNewyB8nM9NpCAEn%2BUmRZADP2SdezpRH7GEayMtYBgtCHYP9ZxvYg5NZR2RN37pjrFwTU4lXMS4sjDM%2BenCBjqkAVixuW0w8ilKxekZfeY6Guq9jgXRouSv4dpMmXBXUfcQ2TyU5P9PKzqJERQLjZrUKRQH6JMMPRmO6TIzsXXvEqoXkDOfvtBoX5rVMAOY%2BDeV6qLFVCzvXbCet0HNzcfNBHjhBZBUBqUDtqOaj%2Bk8ZXj8eIO7dQhsLdYqqdKZk4Gzo7rWc5Hc261%2FqM5oDYuTYJz6yAAjieLZFofqepG9kYGd3gjX&X-Amz-Signature=e4be0f3a457a43ea87fdb05a2e9bd4bc6271c1348f22034ef3dd2c6dca4421ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSH7UTV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCM%2BdXuMo1ubpg%2FJFTd0ODhbkjTFOJdQcPh4TDlZnbgGgIhALmTzDYoKtGhxnyE9LjaUnw%2BIWiMJ7%2Fhpzw7vnGTTeeHKv8DCCsQABoMNjM3NDIzMTgzODA1IgwAC%2BFkrv%2BlRSkAASkq3ANN1oPW7spWLuA8xcrKMLy1RAQRW%2BmTsfdD5XRzJ292ju1C91nhlB0qdVAbshKpcKKweMPjFg2TtP6eUc7fCnFExCppN2yprXH5%2Fle6edjUxGZBaSeNLndVTVa0xHYKlxUbyItgIn%2FcnFwPNQoTL3VQUZjqVGTQaUsx%2BSXXhzSMEQif1jbHbjD9YFNkCi73xEWNJeS3H1MuX%2Fp53IGoAad9zMFZ%2FAL5eDII65pqfvxmzMpZBZrfFsaa%2BwsXe9s4EZL97%2Fe6o7RUXxHpgvxu0M%2FxV%2F7PmV2QH1fYKp6Aot39mQqQA3wgEmEpMlQyxUx4ZfeQJzVRBTH7amfbZ72AUQ7uD8OMdhEsTUaxCmZngMPHiLZh4%2FO34pl%2Bfa5DJ9riDU2%2FQVpab8qs67c6Ppb0rKSmjodHZSsY5QrJTAan6cw%2BEFAsoix27WY9G0p1Fz5cSusTVnknTkyzq4G0OT2WTlK58ZrC0p1HJsImife3tDegQQ7Qb%2Fk8kYTOrJIjsPEEyDl671r3950k7CtzxDz0wy1HEsaFHIoz3tk6cluOLdDGI%2BCB%2FGNewyB8nM9NpCAEn%2BUmRZADP2SdezpRH7GEayMtYBgtCHYP9ZxvYg5NZR2RN37pjrFwTU4lXMS4sjDM%2BenCBjqkAVixuW0w8ilKxekZfeY6Guq9jgXRouSv4dpMmXBXUfcQ2TyU5P9PKzqJERQLjZrUKRQH6JMMPRmO6TIzsXXvEqoXkDOfvtBoX5rVMAOY%2BDeV6qLFVCzvXbCet0HNzcfNBHjhBZBUBqUDtqOaj%2Bk8ZXj8eIO7dQhsLdYqqdKZk4Gzo7rWc5Hc261%2FqM5oDYuTYJz6yAAjieLZFofqepG9kYGd3gjX&X-Amz-Signature=6ecde5074abd9f2d17c48b1f2c9be09cb776c8e054ac6f86a04bfebf572bc0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSH7UTV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCM%2BdXuMo1ubpg%2FJFTd0ODhbkjTFOJdQcPh4TDlZnbgGgIhALmTzDYoKtGhxnyE9LjaUnw%2BIWiMJ7%2Fhpzw7vnGTTeeHKv8DCCsQABoMNjM3NDIzMTgzODA1IgwAC%2BFkrv%2BlRSkAASkq3ANN1oPW7spWLuA8xcrKMLy1RAQRW%2BmTsfdD5XRzJ292ju1C91nhlB0qdVAbshKpcKKweMPjFg2TtP6eUc7fCnFExCppN2yprXH5%2Fle6edjUxGZBaSeNLndVTVa0xHYKlxUbyItgIn%2FcnFwPNQoTL3VQUZjqVGTQaUsx%2BSXXhzSMEQif1jbHbjD9YFNkCi73xEWNJeS3H1MuX%2Fp53IGoAad9zMFZ%2FAL5eDII65pqfvxmzMpZBZrfFsaa%2BwsXe9s4EZL97%2Fe6o7RUXxHpgvxu0M%2FxV%2F7PmV2QH1fYKp6Aot39mQqQA3wgEmEpMlQyxUx4ZfeQJzVRBTH7amfbZ72AUQ7uD8OMdhEsTUaxCmZngMPHiLZh4%2FO34pl%2Bfa5DJ9riDU2%2FQVpab8qs67c6Ppb0rKSmjodHZSsY5QrJTAan6cw%2BEFAsoix27WY9G0p1Fz5cSusTVnknTkyzq4G0OT2WTlK58ZrC0p1HJsImife3tDegQQ7Qb%2Fk8kYTOrJIjsPEEyDl671r3950k7CtzxDz0wy1HEsaFHIoz3tk6cluOLdDGI%2BCB%2FGNewyB8nM9NpCAEn%2BUmRZADP2SdezpRH7GEayMtYBgtCHYP9ZxvYg5NZR2RN37pjrFwTU4lXMS4sjDM%2BenCBjqkAVixuW0w8ilKxekZfeY6Guq9jgXRouSv4dpMmXBXUfcQ2TyU5P9PKzqJERQLjZrUKRQH6JMMPRmO6TIzsXXvEqoXkDOfvtBoX5rVMAOY%2BDeV6qLFVCzvXbCet0HNzcfNBHjhBZBUBqUDtqOaj%2Bk8ZXj8eIO7dQhsLdYqqdKZk4Gzo7rWc5Hc261%2FqM5oDYuTYJz6yAAjieLZFofqepG9kYGd3gjX&X-Amz-Signature=0adf4af020515c429e06b551ff1cc77da2841d62ac9a5fdd5095867ca5d4c87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
