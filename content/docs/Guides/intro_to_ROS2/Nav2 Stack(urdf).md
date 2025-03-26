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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2GQ3PD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO8gbUNdrh6M2%2BAy7dpP6Ma1w88k29e2lCqxMpwSYXMAiEAhsisQF%2BkNqi%2Bo76pNqB49UacHAA2KdE4J7RfeBMJ5Skq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLWHSUQVOETWPD7wzSrcA0u7Vr4ERZCxFQY9Kp5rJsd4O2wZPdl%2FenyNTAWi%2BIuPrM3Bo3aUOofhEZXIroiNn9bif%2FzrCRvU0rSL5nZp2636sycIaBNAdzH5jmK7IzAnyhyhhfNLRRlmOQKnNcbhWvDiI3Z929mlX7uU4uenHgmUxqkQXFbqHbNfX0sXGCqPfopNjY2CUdAMlrYK4rTH%2FYN6NR98oxP1Mu4Q1meIYmMZu7FpYlurIj7mL%2FkeUFDyzIJmsEGDOXv9xm7jbwsQftXqG5wLKsgugzfTWFc5Bfw6elQZGwHjfcCnHS%2BSKboAN5d%2F6yd10ukNzvOECNy6xsRHxqzlsirdU8%2F4%2FyVlwe%2FNgOJV49tBbE22zMzwaECGAaqYWz4vfcPXD1ft7n1A0XyecYH7Je3U3JjjwfV3qx1Cl5EOQL3TLSnhEcy9MFJEDJB0kfYvPxj8pCSS%2FRxjxFniuwKxpCn1fzwd%2FBAArExnw%2Fb0oO4P2LAx5FNeoVNuRGmVAUwRJ4XLQ2lnPUhf7pdtVCokh0aUd%2B4%2BFSEwtRCLu8dGORb%2FSekfGtfKJxg8pSLkSGhna5eIXdoQyUc8Xv6%2FvVw9GIRLLTEXUP0N7NugFfvbaWegW%2Fo1oRKGWlOHsa5P%2BhvE0L3h7H4VMK7Skb8GOqUBsuloiwD011Bl9%2BBPO6J7ZODET2ESUez390G4s2z6IHUz%2Fe9kR6fi87%2B0bkE0S1o5rhlqy%2FmttURzB%2FWHsNyxzMUOKyskBJhuEJDTo09vZ9pOPXGBRKhdH15XrizhZhVfmFI3I4tK%2FRBxbxSZPMHMd6c5RHE5ZYD%2BIxFgArtlsvx3xEAdji69ivzCN858Jg0z5KO%2Fwabu9RaJpggqb81EWIfIcOqq&X-Amz-Signature=f59c1bc767c57a2a6e0b97b6be739a60201338c8eab3ba115eff9459b9ddafda&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2GQ3PD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO8gbUNdrh6M2%2BAy7dpP6Ma1w88k29e2lCqxMpwSYXMAiEAhsisQF%2BkNqi%2Bo76pNqB49UacHAA2KdE4J7RfeBMJ5Skq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLWHSUQVOETWPD7wzSrcA0u7Vr4ERZCxFQY9Kp5rJsd4O2wZPdl%2FenyNTAWi%2BIuPrM3Bo3aUOofhEZXIroiNn9bif%2FzrCRvU0rSL5nZp2636sycIaBNAdzH5jmK7IzAnyhyhhfNLRRlmOQKnNcbhWvDiI3Z929mlX7uU4uenHgmUxqkQXFbqHbNfX0sXGCqPfopNjY2CUdAMlrYK4rTH%2FYN6NR98oxP1Mu4Q1meIYmMZu7FpYlurIj7mL%2FkeUFDyzIJmsEGDOXv9xm7jbwsQftXqG5wLKsgugzfTWFc5Bfw6elQZGwHjfcCnHS%2BSKboAN5d%2F6yd10ukNzvOECNy6xsRHxqzlsirdU8%2F4%2FyVlwe%2FNgOJV49tBbE22zMzwaECGAaqYWz4vfcPXD1ft7n1A0XyecYH7Je3U3JjjwfV3qx1Cl5EOQL3TLSnhEcy9MFJEDJB0kfYvPxj8pCSS%2FRxjxFniuwKxpCn1fzwd%2FBAArExnw%2Fb0oO4P2LAx5FNeoVNuRGmVAUwRJ4XLQ2lnPUhf7pdtVCokh0aUd%2B4%2BFSEwtRCLu8dGORb%2FSekfGtfKJxg8pSLkSGhna5eIXdoQyUc8Xv6%2FvVw9GIRLLTEXUP0N7NugFfvbaWegW%2Fo1oRKGWlOHsa5P%2BhvE0L3h7H4VMK7Skb8GOqUBsuloiwD011Bl9%2BBPO6J7ZODET2ESUez390G4s2z6IHUz%2Fe9kR6fi87%2B0bkE0S1o5rhlqy%2FmttURzB%2FWHsNyxzMUOKyskBJhuEJDTo09vZ9pOPXGBRKhdH15XrizhZhVfmFI3I4tK%2FRBxbxSZPMHMd6c5RHE5ZYD%2BIxFgArtlsvx3xEAdji69ivzCN858Jg0z5KO%2Fwabu9RaJpggqb81EWIfIcOqq&X-Amz-Signature=15cfd76f153206fe12730e65b78a873b4fa86860cf29cef25f7676204f60a00d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2GQ3PD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO8gbUNdrh6M2%2BAy7dpP6Ma1w88k29e2lCqxMpwSYXMAiEAhsisQF%2BkNqi%2Bo76pNqB49UacHAA2KdE4J7RfeBMJ5Skq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLWHSUQVOETWPD7wzSrcA0u7Vr4ERZCxFQY9Kp5rJsd4O2wZPdl%2FenyNTAWi%2BIuPrM3Bo3aUOofhEZXIroiNn9bif%2FzrCRvU0rSL5nZp2636sycIaBNAdzH5jmK7IzAnyhyhhfNLRRlmOQKnNcbhWvDiI3Z929mlX7uU4uenHgmUxqkQXFbqHbNfX0sXGCqPfopNjY2CUdAMlrYK4rTH%2FYN6NR98oxP1Mu4Q1meIYmMZu7FpYlurIj7mL%2FkeUFDyzIJmsEGDOXv9xm7jbwsQftXqG5wLKsgugzfTWFc5Bfw6elQZGwHjfcCnHS%2BSKboAN5d%2F6yd10ukNzvOECNy6xsRHxqzlsirdU8%2F4%2FyVlwe%2FNgOJV49tBbE22zMzwaECGAaqYWz4vfcPXD1ft7n1A0XyecYH7Je3U3JjjwfV3qx1Cl5EOQL3TLSnhEcy9MFJEDJB0kfYvPxj8pCSS%2FRxjxFniuwKxpCn1fzwd%2FBAArExnw%2Fb0oO4P2LAx5FNeoVNuRGmVAUwRJ4XLQ2lnPUhf7pdtVCokh0aUd%2B4%2BFSEwtRCLu8dGORb%2FSekfGtfKJxg8pSLkSGhna5eIXdoQyUc8Xv6%2FvVw9GIRLLTEXUP0N7NugFfvbaWegW%2Fo1oRKGWlOHsa5P%2BhvE0L3h7H4VMK7Skb8GOqUBsuloiwD011Bl9%2BBPO6J7ZODET2ESUez390G4s2z6IHUz%2Fe9kR6fi87%2B0bkE0S1o5rhlqy%2FmttURzB%2FWHsNyxzMUOKyskBJhuEJDTo09vZ9pOPXGBRKhdH15XrizhZhVfmFI3I4tK%2FRBxbxSZPMHMd6c5RHE5ZYD%2BIxFgArtlsvx3xEAdji69ivzCN858Jg0z5KO%2Fwabu9RaJpggqb81EWIfIcOqq&X-Amz-Signature=90b66615dba3ab327ee5ae0279f941e0f38df790c0ca55199de188dc42ebc00c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2GQ3PD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO8gbUNdrh6M2%2BAy7dpP6Ma1w88k29e2lCqxMpwSYXMAiEAhsisQF%2BkNqi%2Bo76pNqB49UacHAA2KdE4J7RfeBMJ5Skq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLWHSUQVOETWPD7wzSrcA0u7Vr4ERZCxFQY9Kp5rJsd4O2wZPdl%2FenyNTAWi%2BIuPrM3Bo3aUOofhEZXIroiNn9bif%2FzrCRvU0rSL5nZp2636sycIaBNAdzH5jmK7IzAnyhyhhfNLRRlmOQKnNcbhWvDiI3Z929mlX7uU4uenHgmUxqkQXFbqHbNfX0sXGCqPfopNjY2CUdAMlrYK4rTH%2FYN6NR98oxP1Mu4Q1meIYmMZu7FpYlurIj7mL%2FkeUFDyzIJmsEGDOXv9xm7jbwsQftXqG5wLKsgugzfTWFc5Bfw6elQZGwHjfcCnHS%2BSKboAN5d%2F6yd10ukNzvOECNy6xsRHxqzlsirdU8%2F4%2FyVlwe%2FNgOJV49tBbE22zMzwaECGAaqYWz4vfcPXD1ft7n1A0XyecYH7Je3U3JjjwfV3qx1Cl5EOQL3TLSnhEcy9MFJEDJB0kfYvPxj8pCSS%2FRxjxFniuwKxpCn1fzwd%2FBAArExnw%2Fb0oO4P2LAx5FNeoVNuRGmVAUwRJ4XLQ2lnPUhf7pdtVCokh0aUd%2B4%2BFSEwtRCLu8dGORb%2FSekfGtfKJxg8pSLkSGhna5eIXdoQyUc8Xv6%2FvVw9GIRLLTEXUP0N7NugFfvbaWegW%2Fo1oRKGWlOHsa5P%2BhvE0L3h7H4VMK7Skb8GOqUBsuloiwD011Bl9%2BBPO6J7ZODET2ESUez390G4s2z6IHUz%2Fe9kR6fi87%2B0bkE0S1o5rhlqy%2FmttURzB%2FWHsNyxzMUOKyskBJhuEJDTo09vZ9pOPXGBRKhdH15XrizhZhVfmFI3I4tK%2FRBxbxSZPMHMd6c5RHE5ZYD%2BIxFgArtlsvx3xEAdji69ivzCN858Jg0z5KO%2Fwabu9RaJpggqb81EWIfIcOqq&X-Amz-Signature=d961a2eb01fff436837c196251ca45acbbff4c26aa437d44b3e9051b58de49a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2GQ3PD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO8gbUNdrh6M2%2BAy7dpP6Ma1w88k29e2lCqxMpwSYXMAiEAhsisQF%2BkNqi%2Bo76pNqB49UacHAA2KdE4J7RfeBMJ5Skq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLWHSUQVOETWPD7wzSrcA0u7Vr4ERZCxFQY9Kp5rJsd4O2wZPdl%2FenyNTAWi%2BIuPrM3Bo3aUOofhEZXIroiNn9bif%2FzrCRvU0rSL5nZp2636sycIaBNAdzH5jmK7IzAnyhyhhfNLRRlmOQKnNcbhWvDiI3Z929mlX7uU4uenHgmUxqkQXFbqHbNfX0sXGCqPfopNjY2CUdAMlrYK4rTH%2FYN6NR98oxP1Mu4Q1meIYmMZu7FpYlurIj7mL%2FkeUFDyzIJmsEGDOXv9xm7jbwsQftXqG5wLKsgugzfTWFc5Bfw6elQZGwHjfcCnHS%2BSKboAN5d%2F6yd10ukNzvOECNy6xsRHxqzlsirdU8%2F4%2FyVlwe%2FNgOJV49tBbE22zMzwaECGAaqYWz4vfcPXD1ft7n1A0XyecYH7Je3U3JjjwfV3qx1Cl5EOQL3TLSnhEcy9MFJEDJB0kfYvPxj8pCSS%2FRxjxFniuwKxpCn1fzwd%2FBAArExnw%2Fb0oO4P2LAx5FNeoVNuRGmVAUwRJ4XLQ2lnPUhf7pdtVCokh0aUd%2B4%2BFSEwtRCLu8dGORb%2FSekfGtfKJxg8pSLkSGhna5eIXdoQyUc8Xv6%2FvVw9GIRLLTEXUP0N7NugFfvbaWegW%2Fo1oRKGWlOHsa5P%2BhvE0L3h7H4VMK7Skb8GOqUBsuloiwD011Bl9%2BBPO6J7ZODET2ESUez390G4s2z6IHUz%2Fe9kR6fi87%2B0bkE0S1o5rhlqy%2FmttURzB%2FWHsNyxzMUOKyskBJhuEJDTo09vZ9pOPXGBRKhdH15XrizhZhVfmFI3I4tK%2FRBxbxSZPMHMd6c5RHE5ZYD%2BIxFgArtlsvx3xEAdji69ivzCN858Jg0z5KO%2Fwabu9RaJpggqb81EWIfIcOqq&X-Amz-Signature=9b80c7493aabf3fd6bff29eea08ea660c4f16f18b286f8f2f8a5d3673d3e43a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2GQ3PD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO8gbUNdrh6M2%2BAy7dpP6Ma1w88k29e2lCqxMpwSYXMAiEAhsisQF%2BkNqi%2Bo76pNqB49UacHAA2KdE4J7RfeBMJ5Skq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLWHSUQVOETWPD7wzSrcA0u7Vr4ERZCxFQY9Kp5rJsd4O2wZPdl%2FenyNTAWi%2BIuPrM3Bo3aUOofhEZXIroiNn9bif%2FzrCRvU0rSL5nZp2636sycIaBNAdzH5jmK7IzAnyhyhhfNLRRlmOQKnNcbhWvDiI3Z929mlX7uU4uenHgmUxqkQXFbqHbNfX0sXGCqPfopNjY2CUdAMlrYK4rTH%2FYN6NR98oxP1Mu4Q1meIYmMZu7FpYlurIj7mL%2FkeUFDyzIJmsEGDOXv9xm7jbwsQftXqG5wLKsgugzfTWFc5Bfw6elQZGwHjfcCnHS%2BSKboAN5d%2F6yd10ukNzvOECNy6xsRHxqzlsirdU8%2F4%2FyVlwe%2FNgOJV49tBbE22zMzwaECGAaqYWz4vfcPXD1ft7n1A0XyecYH7Je3U3JjjwfV3qx1Cl5EOQL3TLSnhEcy9MFJEDJB0kfYvPxj8pCSS%2FRxjxFniuwKxpCn1fzwd%2FBAArExnw%2Fb0oO4P2LAx5FNeoVNuRGmVAUwRJ4XLQ2lnPUhf7pdtVCokh0aUd%2B4%2BFSEwtRCLu8dGORb%2FSekfGtfKJxg8pSLkSGhna5eIXdoQyUc8Xv6%2FvVw9GIRLLTEXUP0N7NugFfvbaWegW%2Fo1oRKGWlOHsa5P%2BhvE0L3h7H4VMK7Skb8GOqUBsuloiwD011Bl9%2BBPO6J7ZODET2ESUez390G4s2z6IHUz%2Fe9kR6fi87%2B0bkE0S1o5rhlqy%2FmttURzB%2FWHsNyxzMUOKyskBJhuEJDTo09vZ9pOPXGBRKhdH15XrizhZhVfmFI3I4tK%2FRBxbxSZPMHMd6c5RHE5ZYD%2BIxFgArtlsvx3xEAdji69ivzCN858Jg0z5KO%2Fwabu9RaJpggqb81EWIfIcOqq&X-Amz-Signature=1fdc9211780364e70abead4ab47150f2b8c4bc7c81f41c7fa003b14dc233eb7a&X-Amz-SignedHeaders=host&x-id=GetObject)
