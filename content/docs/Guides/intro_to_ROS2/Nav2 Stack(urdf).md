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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHACCXU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfDWvkt5cqSo8hEVKRGh3Ei%2FDqWA%2FDbw63ez0xQg7hAIhAO9ee43clGbwfZ%2BYwFG18vw4UTvi%2BTy1BQub8VQM3pp3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3S6Qr1iifeDlx2oq3APfyFt9O4CxEMIuovbnF3PSpx4%2F8iQfvdQRdW332%2BZXPZORLm7fnLhsh3EXb75iXxyjFoka%2FiSIt49x2lcn2QQq7p6Ig4tKijTrtM1Zm6eK1QRIZcGDOnOIUY%2BnbgFKyBwl%2BWCTPGGt48f8N9JIN5tNEl%2BjuPFTIcTrKKc2jGdc2z00pwoUbmuHUAnzAMbl3%2FEj1w7fnPH8WqVn9JUycx9KV4VPOw7POmgZyYxcX6XaNa7zzd%2BUE%2BlG709yK%2B2WQDJkzfEZ9rkPR904M0KZjF4e%2BJQtofic26qPhL78qotHSRVsB8oRGhCCA8BVINzM%2B9nT%2B4%2BVxrCWRWVSDATg4QLr%2FFVL4B2oo4j9fhtxE5WevKZE1DCZGHhO%2Fyr1kb%2B6HqMHRPpLyK%2F5U9Tyma5L1Pmb8Cvl14bUCp1EBEe7hjTk%2Fs7vOmeY%2BP%2FeGBaIOlwt7LbFHmgDDL%2Bw%2FlP%2FaDPT0THvklozkOd5m1mUK8BbEprsi2cTF%2FnrjYn%2Fh%2BJegpCZm77pmL3zS4bSOiGTbjERU24H7aVLlk7ddcEzcXz33TBLd2ZHBES5vkD92VpBQyOtE6G5DP0p0O8eD32q4mFrE6j2TD%2F1D5%2F3%2F5i0UC9FozzYRmp2G0Zn9NZ%2FzT6MwjDslpW%2BBjqkAaXhoJaS4YBNRuIKIlbnOlzkO0VjgSerasLAhojbZNaBGH8AGOld5Zt6UWTiOZRrVXir1v7i9lrdB%2B37s5oFm1se7D8F3KDgo%2FwwYuOVcik1PksRxmGGjaQxFaTWnPGNeAH0SQtB152uWmIK%2BpdXeJ6iNwCpXglHW%2F5hjjdM2PFgy85QTquIGHdww4yjxUaF8RItCj4MOyDyrc6ddghXjuXh%2Fqpr&X-Amz-Signature=09ff03717c01a425856647c0b7f791dc327c9d4f3962f52311f1ee78742749eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHACCXU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfDWvkt5cqSo8hEVKRGh3Ei%2FDqWA%2FDbw63ez0xQg7hAIhAO9ee43clGbwfZ%2BYwFG18vw4UTvi%2BTy1BQub8VQM3pp3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3S6Qr1iifeDlx2oq3APfyFt9O4CxEMIuovbnF3PSpx4%2F8iQfvdQRdW332%2BZXPZORLm7fnLhsh3EXb75iXxyjFoka%2FiSIt49x2lcn2QQq7p6Ig4tKijTrtM1Zm6eK1QRIZcGDOnOIUY%2BnbgFKyBwl%2BWCTPGGt48f8N9JIN5tNEl%2BjuPFTIcTrKKc2jGdc2z00pwoUbmuHUAnzAMbl3%2FEj1w7fnPH8WqVn9JUycx9KV4VPOw7POmgZyYxcX6XaNa7zzd%2BUE%2BlG709yK%2B2WQDJkzfEZ9rkPR904M0KZjF4e%2BJQtofic26qPhL78qotHSRVsB8oRGhCCA8BVINzM%2B9nT%2B4%2BVxrCWRWVSDATg4QLr%2FFVL4B2oo4j9fhtxE5WevKZE1DCZGHhO%2Fyr1kb%2B6HqMHRPpLyK%2F5U9Tyma5L1Pmb8Cvl14bUCp1EBEe7hjTk%2Fs7vOmeY%2BP%2FeGBaIOlwt7LbFHmgDDL%2Bw%2FlP%2FaDPT0THvklozkOd5m1mUK8BbEprsi2cTF%2FnrjYn%2Fh%2BJegpCZm77pmL3zS4bSOiGTbjERU24H7aVLlk7ddcEzcXz33TBLd2ZHBES5vkD92VpBQyOtE6G5DP0p0O8eD32q4mFrE6j2TD%2F1D5%2F3%2F5i0UC9FozzYRmp2G0Zn9NZ%2FzT6MwjDslpW%2BBjqkAaXhoJaS4YBNRuIKIlbnOlzkO0VjgSerasLAhojbZNaBGH8AGOld5Zt6UWTiOZRrVXir1v7i9lrdB%2B37s5oFm1se7D8F3KDgo%2FwwYuOVcik1PksRxmGGjaQxFaTWnPGNeAH0SQtB152uWmIK%2BpdXeJ6iNwCpXglHW%2F5hjjdM2PFgy85QTquIGHdww4yjxUaF8RItCj4MOyDyrc6ddghXjuXh%2Fqpr&X-Amz-Signature=980f82b7c5d7f7c9eead1487c42caeaa772113c7bc65d59e56a0f25531bd71c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHACCXU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfDWvkt5cqSo8hEVKRGh3Ei%2FDqWA%2FDbw63ez0xQg7hAIhAO9ee43clGbwfZ%2BYwFG18vw4UTvi%2BTy1BQub8VQM3pp3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3S6Qr1iifeDlx2oq3APfyFt9O4CxEMIuovbnF3PSpx4%2F8iQfvdQRdW332%2BZXPZORLm7fnLhsh3EXb75iXxyjFoka%2FiSIt49x2lcn2QQq7p6Ig4tKijTrtM1Zm6eK1QRIZcGDOnOIUY%2BnbgFKyBwl%2BWCTPGGt48f8N9JIN5tNEl%2BjuPFTIcTrKKc2jGdc2z00pwoUbmuHUAnzAMbl3%2FEj1w7fnPH8WqVn9JUycx9KV4VPOw7POmgZyYxcX6XaNa7zzd%2BUE%2BlG709yK%2B2WQDJkzfEZ9rkPR904M0KZjF4e%2BJQtofic26qPhL78qotHSRVsB8oRGhCCA8BVINzM%2B9nT%2B4%2BVxrCWRWVSDATg4QLr%2FFVL4B2oo4j9fhtxE5WevKZE1DCZGHhO%2Fyr1kb%2B6HqMHRPpLyK%2F5U9Tyma5L1Pmb8Cvl14bUCp1EBEe7hjTk%2Fs7vOmeY%2BP%2FeGBaIOlwt7LbFHmgDDL%2Bw%2FlP%2FaDPT0THvklozkOd5m1mUK8BbEprsi2cTF%2FnrjYn%2Fh%2BJegpCZm77pmL3zS4bSOiGTbjERU24H7aVLlk7ddcEzcXz33TBLd2ZHBES5vkD92VpBQyOtE6G5DP0p0O8eD32q4mFrE6j2TD%2F1D5%2F3%2F5i0UC9FozzYRmp2G0Zn9NZ%2FzT6MwjDslpW%2BBjqkAaXhoJaS4YBNRuIKIlbnOlzkO0VjgSerasLAhojbZNaBGH8AGOld5Zt6UWTiOZRrVXir1v7i9lrdB%2B37s5oFm1se7D8F3KDgo%2FwwYuOVcik1PksRxmGGjaQxFaTWnPGNeAH0SQtB152uWmIK%2BpdXeJ6iNwCpXglHW%2F5hjjdM2PFgy85QTquIGHdww4yjxUaF8RItCj4MOyDyrc6ddghXjuXh%2Fqpr&X-Amz-Signature=cdcd73ff8bcd17d8a8df1136d71e69c17f08c92a75015b7f9d3de54f94659c84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHACCXU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfDWvkt5cqSo8hEVKRGh3Ei%2FDqWA%2FDbw63ez0xQg7hAIhAO9ee43clGbwfZ%2BYwFG18vw4UTvi%2BTy1BQub8VQM3pp3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3S6Qr1iifeDlx2oq3APfyFt9O4CxEMIuovbnF3PSpx4%2F8iQfvdQRdW332%2BZXPZORLm7fnLhsh3EXb75iXxyjFoka%2FiSIt49x2lcn2QQq7p6Ig4tKijTrtM1Zm6eK1QRIZcGDOnOIUY%2BnbgFKyBwl%2BWCTPGGt48f8N9JIN5tNEl%2BjuPFTIcTrKKc2jGdc2z00pwoUbmuHUAnzAMbl3%2FEj1w7fnPH8WqVn9JUycx9KV4VPOw7POmgZyYxcX6XaNa7zzd%2BUE%2BlG709yK%2B2WQDJkzfEZ9rkPR904M0KZjF4e%2BJQtofic26qPhL78qotHSRVsB8oRGhCCA8BVINzM%2B9nT%2B4%2BVxrCWRWVSDATg4QLr%2FFVL4B2oo4j9fhtxE5WevKZE1DCZGHhO%2Fyr1kb%2B6HqMHRPpLyK%2F5U9Tyma5L1Pmb8Cvl14bUCp1EBEe7hjTk%2Fs7vOmeY%2BP%2FeGBaIOlwt7LbFHmgDDL%2Bw%2FlP%2FaDPT0THvklozkOd5m1mUK8BbEprsi2cTF%2FnrjYn%2Fh%2BJegpCZm77pmL3zS4bSOiGTbjERU24H7aVLlk7ddcEzcXz33TBLd2ZHBES5vkD92VpBQyOtE6G5DP0p0O8eD32q4mFrE6j2TD%2F1D5%2F3%2F5i0UC9FozzYRmp2G0Zn9NZ%2FzT6MwjDslpW%2BBjqkAaXhoJaS4YBNRuIKIlbnOlzkO0VjgSerasLAhojbZNaBGH8AGOld5Zt6UWTiOZRrVXir1v7i9lrdB%2B37s5oFm1se7D8F3KDgo%2FwwYuOVcik1PksRxmGGjaQxFaTWnPGNeAH0SQtB152uWmIK%2BpdXeJ6iNwCpXglHW%2F5hjjdM2PFgy85QTquIGHdww4yjxUaF8RItCj4MOyDyrc6ddghXjuXh%2Fqpr&X-Amz-Signature=808e5b995f7669610ebe6d6da8a2f254feee7a5ddd0e4ff5c770b1e1cc06f327&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHACCXU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfDWvkt5cqSo8hEVKRGh3Ei%2FDqWA%2FDbw63ez0xQg7hAIhAO9ee43clGbwfZ%2BYwFG18vw4UTvi%2BTy1BQub8VQM3pp3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3S6Qr1iifeDlx2oq3APfyFt9O4CxEMIuovbnF3PSpx4%2F8iQfvdQRdW332%2BZXPZORLm7fnLhsh3EXb75iXxyjFoka%2FiSIt49x2lcn2QQq7p6Ig4tKijTrtM1Zm6eK1QRIZcGDOnOIUY%2BnbgFKyBwl%2BWCTPGGt48f8N9JIN5tNEl%2BjuPFTIcTrKKc2jGdc2z00pwoUbmuHUAnzAMbl3%2FEj1w7fnPH8WqVn9JUycx9KV4VPOw7POmgZyYxcX6XaNa7zzd%2BUE%2BlG709yK%2B2WQDJkzfEZ9rkPR904M0KZjF4e%2BJQtofic26qPhL78qotHSRVsB8oRGhCCA8BVINzM%2B9nT%2B4%2BVxrCWRWVSDATg4QLr%2FFVL4B2oo4j9fhtxE5WevKZE1DCZGHhO%2Fyr1kb%2B6HqMHRPpLyK%2F5U9Tyma5L1Pmb8Cvl14bUCp1EBEe7hjTk%2Fs7vOmeY%2BP%2FeGBaIOlwt7LbFHmgDDL%2Bw%2FlP%2FaDPT0THvklozkOd5m1mUK8BbEprsi2cTF%2FnrjYn%2Fh%2BJegpCZm77pmL3zS4bSOiGTbjERU24H7aVLlk7ddcEzcXz33TBLd2ZHBES5vkD92VpBQyOtE6G5DP0p0O8eD32q4mFrE6j2TD%2F1D5%2F3%2F5i0UC9FozzYRmp2G0Zn9NZ%2FzT6MwjDslpW%2BBjqkAaXhoJaS4YBNRuIKIlbnOlzkO0VjgSerasLAhojbZNaBGH8AGOld5Zt6UWTiOZRrVXir1v7i9lrdB%2B37s5oFm1se7D8F3KDgo%2FwwYuOVcik1PksRxmGGjaQxFaTWnPGNeAH0SQtB152uWmIK%2BpdXeJ6iNwCpXglHW%2F5hjjdM2PFgy85QTquIGHdww4yjxUaF8RItCj4MOyDyrc6ddghXjuXh%2Fqpr&X-Amz-Signature=958db143cb95eb73c4f170885506b410cf6129d163ee560c9ac98f79cfc0d547&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHACCXU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfDWvkt5cqSo8hEVKRGh3Ei%2FDqWA%2FDbw63ez0xQg7hAIhAO9ee43clGbwfZ%2BYwFG18vw4UTvi%2BTy1BQub8VQM3pp3KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv3S6Qr1iifeDlx2oq3APfyFt9O4CxEMIuovbnF3PSpx4%2F8iQfvdQRdW332%2BZXPZORLm7fnLhsh3EXb75iXxyjFoka%2FiSIt49x2lcn2QQq7p6Ig4tKijTrtM1Zm6eK1QRIZcGDOnOIUY%2BnbgFKyBwl%2BWCTPGGt48f8N9JIN5tNEl%2BjuPFTIcTrKKc2jGdc2z00pwoUbmuHUAnzAMbl3%2FEj1w7fnPH8WqVn9JUycx9KV4VPOw7POmgZyYxcX6XaNa7zzd%2BUE%2BlG709yK%2B2WQDJkzfEZ9rkPR904M0KZjF4e%2BJQtofic26qPhL78qotHSRVsB8oRGhCCA8BVINzM%2B9nT%2B4%2BVxrCWRWVSDATg4QLr%2FFVL4B2oo4j9fhtxE5WevKZE1DCZGHhO%2Fyr1kb%2B6HqMHRPpLyK%2F5U9Tyma5L1Pmb8Cvl14bUCp1EBEe7hjTk%2Fs7vOmeY%2BP%2FeGBaIOlwt7LbFHmgDDL%2Bw%2FlP%2FaDPT0THvklozkOd5m1mUK8BbEprsi2cTF%2FnrjYn%2Fh%2BJegpCZm77pmL3zS4bSOiGTbjERU24H7aVLlk7ddcEzcXz33TBLd2ZHBES5vkD92VpBQyOtE6G5DP0p0O8eD32q4mFrE6j2TD%2F1D5%2F3%2F5i0UC9FozzYRmp2G0Zn9NZ%2FzT6MwjDslpW%2BBjqkAaXhoJaS4YBNRuIKIlbnOlzkO0VjgSerasLAhojbZNaBGH8AGOld5Zt6UWTiOZRrVXir1v7i9lrdB%2B37s5oFm1se7D8F3KDgo%2FwwYuOVcik1PksRxmGGjaQxFaTWnPGNeAH0SQtB152uWmIK%2BpdXeJ6iNwCpXglHW%2F5hjjdM2PFgy85QTquIGHdww4yjxUaF8RItCj4MOyDyrc6ddghXjuXh%2Fqpr&X-Amz-Signature=f03385437c2429972a08e7279bb9299767a384ac8edc4eae08044487ac17542d&X-Amz-SignedHeaders=host&x-id=GetObject)
