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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7MBPCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAJc%2BrK1eBIsBxlXGyzGB%2BhYYiViiqSZSFBcS68zY9YZAiAMm2W5ggZpFD6OjZmZMhQvrHH65DVuhzqHfI7xLfQzsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEYEFUJl9VIbV2M8KtwDMGr%2FH4A64z37YXPBNjh6EFTz8kmGuJBI%2BpbuZvzvXGQujRczHIHvHJzIEJRUoAcZ4b8YUbe5KXVnLqWwmHN574%2Fu7eZrU39oLgLcAgkTmMMxHlPDlOF4zoTPietypS3wQR109PHh4yB9y10qxKrjcJNAha0ny9yGj1auA4PcHeCrmpllfksFvcm2C551icojGLnlMWSuv5vAAyuLcmKb74XWUBcXwiFNkbJXyl8nkyXIoyhLsPkR9n0mCOmwFAcIj7LYqi%2BoEBhMxV2BJPKeGtEJoNTxC1rjmlN6Qmy7Yf5bE%2FuFcB%2B2g1bh9N8G%2FjY6HtbrC%2Bq88YPBDGnBj7%2Fs%2FdQ%2F9dLJ0jz%2BA0ZrMyVOw%2BfG%2B%2FCIYMd0QSX2FpV%2BEcNm%2BrQe0lZhr7DvaFFheywWblBp38xBum6bfuOOeyU75gDhtsISC%2BGB3m8XJwhSqV2X%2FslqlHXzgx9DKdk%2BtA2BP2sugU2jYF7g8U%2B4HFdCAoBLX9RN%2BZHtIhUjV56yn12VPQPmBLri1htd%2FsCNg%2BqxM8XIPTds2hzvMKEISs8khzjxJAuUP8DJruml3NjHG8Qk%2BKho3sWQ3aq6tln9dzNyAf3hF2E9mK347VaTLLMWlNVe5oST6dDgkOPZeBAwl9mIwQY6pgGGQ1Iep7myHM7%2B%2BGx803r9nBJgnY20hijxJzUHp6%2FDEG7%2BsrO3HpNcQt%2F2xYZeNfziYd5ljX5P8Tsa%2BwKQBvSnHh7B6WQuXFR2vBoOxy62PXg0gA3sO7w%2FvDxBReC8%2B8qI8KfRC8yOjKGMAOgDNfx7HTRTKx%2FGL5qXLpYVD2Wq%2F64WJdVzFLtdCSctvDS6gc42c0uN7hTPi8ejb3r39R0hLVvc7A%2Bc&X-Amz-Signature=5e672d756fa6b290104098b68c54524905b0c7d7629a90a88a45be28e10fdad5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7MBPCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAJc%2BrK1eBIsBxlXGyzGB%2BhYYiViiqSZSFBcS68zY9YZAiAMm2W5ggZpFD6OjZmZMhQvrHH65DVuhzqHfI7xLfQzsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEYEFUJl9VIbV2M8KtwDMGr%2FH4A64z37YXPBNjh6EFTz8kmGuJBI%2BpbuZvzvXGQujRczHIHvHJzIEJRUoAcZ4b8YUbe5KXVnLqWwmHN574%2Fu7eZrU39oLgLcAgkTmMMxHlPDlOF4zoTPietypS3wQR109PHh4yB9y10qxKrjcJNAha0ny9yGj1auA4PcHeCrmpllfksFvcm2C551icojGLnlMWSuv5vAAyuLcmKb74XWUBcXwiFNkbJXyl8nkyXIoyhLsPkR9n0mCOmwFAcIj7LYqi%2BoEBhMxV2BJPKeGtEJoNTxC1rjmlN6Qmy7Yf5bE%2FuFcB%2B2g1bh9N8G%2FjY6HtbrC%2Bq88YPBDGnBj7%2Fs%2FdQ%2F9dLJ0jz%2BA0ZrMyVOw%2BfG%2B%2FCIYMd0QSX2FpV%2BEcNm%2BrQe0lZhr7DvaFFheywWblBp38xBum6bfuOOeyU75gDhtsISC%2BGB3m8XJwhSqV2X%2FslqlHXzgx9DKdk%2BtA2BP2sugU2jYF7g8U%2B4HFdCAoBLX9RN%2BZHtIhUjV56yn12VPQPmBLri1htd%2FsCNg%2BqxM8XIPTds2hzvMKEISs8khzjxJAuUP8DJruml3NjHG8Qk%2BKho3sWQ3aq6tln9dzNyAf3hF2E9mK347VaTLLMWlNVe5oST6dDgkOPZeBAwl9mIwQY6pgGGQ1Iep7myHM7%2B%2BGx803r9nBJgnY20hijxJzUHp6%2FDEG7%2BsrO3HpNcQt%2F2xYZeNfziYd5ljX5P8Tsa%2BwKQBvSnHh7B6WQuXFR2vBoOxy62PXg0gA3sO7w%2FvDxBReC8%2B8qI8KfRC8yOjKGMAOgDNfx7HTRTKx%2FGL5qXLpYVD2Wq%2F64WJdVzFLtdCSctvDS6gc42c0uN7hTPi8ejb3r39R0hLVvc7A%2Bc&X-Amz-Signature=ba54d6b3d008e17445b9a7684dd14cc035ea383db7caf6f329033b7219a8c984&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7MBPCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAJc%2BrK1eBIsBxlXGyzGB%2BhYYiViiqSZSFBcS68zY9YZAiAMm2W5ggZpFD6OjZmZMhQvrHH65DVuhzqHfI7xLfQzsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEYEFUJl9VIbV2M8KtwDMGr%2FH4A64z37YXPBNjh6EFTz8kmGuJBI%2BpbuZvzvXGQujRczHIHvHJzIEJRUoAcZ4b8YUbe5KXVnLqWwmHN574%2Fu7eZrU39oLgLcAgkTmMMxHlPDlOF4zoTPietypS3wQR109PHh4yB9y10qxKrjcJNAha0ny9yGj1auA4PcHeCrmpllfksFvcm2C551icojGLnlMWSuv5vAAyuLcmKb74XWUBcXwiFNkbJXyl8nkyXIoyhLsPkR9n0mCOmwFAcIj7LYqi%2BoEBhMxV2BJPKeGtEJoNTxC1rjmlN6Qmy7Yf5bE%2FuFcB%2B2g1bh9N8G%2FjY6HtbrC%2Bq88YPBDGnBj7%2Fs%2FdQ%2F9dLJ0jz%2BA0ZrMyVOw%2BfG%2B%2FCIYMd0QSX2FpV%2BEcNm%2BrQe0lZhr7DvaFFheywWblBp38xBum6bfuOOeyU75gDhtsISC%2BGB3m8XJwhSqV2X%2FslqlHXzgx9DKdk%2BtA2BP2sugU2jYF7g8U%2B4HFdCAoBLX9RN%2BZHtIhUjV56yn12VPQPmBLri1htd%2FsCNg%2BqxM8XIPTds2hzvMKEISs8khzjxJAuUP8DJruml3NjHG8Qk%2BKho3sWQ3aq6tln9dzNyAf3hF2E9mK347VaTLLMWlNVe5oST6dDgkOPZeBAwl9mIwQY6pgGGQ1Iep7myHM7%2B%2BGx803r9nBJgnY20hijxJzUHp6%2FDEG7%2BsrO3HpNcQt%2F2xYZeNfziYd5ljX5P8Tsa%2BwKQBvSnHh7B6WQuXFR2vBoOxy62PXg0gA3sO7w%2FvDxBReC8%2B8qI8KfRC8yOjKGMAOgDNfx7HTRTKx%2FGL5qXLpYVD2Wq%2F64WJdVzFLtdCSctvDS6gc42c0uN7hTPi8ejb3r39R0hLVvc7A%2Bc&X-Amz-Signature=a8824faf666ed94744eb8c0a494628c049e4248ecd18a017e1e14cb347a6f70b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7MBPCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAJc%2BrK1eBIsBxlXGyzGB%2BhYYiViiqSZSFBcS68zY9YZAiAMm2W5ggZpFD6OjZmZMhQvrHH65DVuhzqHfI7xLfQzsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEYEFUJl9VIbV2M8KtwDMGr%2FH4A64z37YXPBNjh6EFTz8kmGuJBI%2BpbuZvzvXGQujRczHIHvHJzIEJRUoAcZ4b8YUbe5KXVnLqWwmHN574%2Fu7eZrU39oLgLcAgkTmMMxHlPDlOF4zoTPietypS3wQR109PHh4yB9y10qxKrjcJNAha0ny9yGj1auA4PcHeCrmpllfksFvcm2C551icojGLnlMWSuv5vAAyuLcmKb74XWUBcXwiFNkbJXyl8nkyXIoyhLsPkR9n0mCOmwFAcIj7LYqi%2BoEBhMxV2BJPKeGtEJoNTxC1rjmlN6Qmy7Yf5bE%2FuFcB%2B2g1bh9N8G%2FjY6HtbrC%2Bq88YPBDGnBj7%2Fs%2FdQ%2F9dLJ0jz%2BA0ZrMyVOw%2BfG%2B%2FCIYMd0QSX2FpV%2BEcNm%2BrQe0lZhr7DvaFFheywWblBp38xBum6bfuOOeyU75gDhtsISC%2BGB3m8XJwhSqV2X%2FslqlHXzgx9DKdk%2BtA2BP2sugU2jYF7g8U%2B4HFdCAoBLX9RN%2BZHtIhUjV56yn12VPQPmBLri1htd%2FsCNg%2BqxM8XIPTds2hzvMKEISs8khzjxJAuUP8DJruml3NjHG8Qk%2BKho3sWQ3aq6tln9dzNyAf3hF2E9mK347VaTLLMWlNVe5oST6dDgkOPZeBAwl9mIwQY6pgGGQ1Iep7myHM7%2B%2BGx803r9nBJgnY20hijxJzUHp6%2FDEG7%2BsrO3HpNcQt%2F2xYZeNfziYd5ljX5P8Tsa%2BwKQBvSnHh7B6WQuXFR2vBoOxy62PXg0gA3sO7w%2FvDxBReC8%2B8qI8KfRC8yOjKGMAOgDNfx7HTRTKx%2FGL5qXLpYVD2Wq%2F64WJdVzFLtdCSctvDS6gc42c0uN7hTPi8ejb3r39R0hLVvc7A%2Bc&X-Amz-Signature=05c41e22372dd9219a6aff5c106ac81d6d589612f1ca56a8bd7b4735281b2b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7MBPCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAJc%2BrK1eBIsBxlXGyzGB%2BhYYiViiqSZSFBcS68zY9YZAiAMm2W5ggZpFD6OjZmZMhQvrHH65DVuhzqHfI7xLfQzsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEYEFUJl9VIbV2M8KtwDMGr%2FH4A64z37YXPBNjh6EFTz8kmGuJBI%2BpbuZvzvXGQujRczHIHvHJzIEJRUoAcZ4b8YUbe5KXVnLqWwmHN574%2Fu7eZrU39oLgLcAgkTmMMxHlPDlOF4zoTPietypS3wQR109PHh4yB9y10qxKrjcJNAha0ny9yGj1auA4PcHeCrmpllfksFvcm2C551icojGLnlMWSuv5vAAyuLcmKb74XWUBcXwiFNkbJXyl8nkyXIoyhLsPkR9n0mCOmwFAcIj7LYqi%2BoEBhMxV2BJPKeGtEJoNTxC1rjmlN6Qmy7Yf5bE%2FuFcB%2B2g1bh9N8G%2FjY6HtbrC%2Bq88YPBDGnBj7%2Fs%2FdQ%2F9dLJ0jz%2BA0ZrMyVOw%2BfG%2B%2FCIYMd0QSX2FpV%2BEcNm%2BrQe0lZhr7DvaFFheywWblBp38xBum6bfuOOeyU75gDhtsISC%2BGB3m8XJwhSqV2X%2FslqlHXzgx9DKdk%2BtA2BP2sugU2jYF7g8U%2B4HFdCAoBLX9RN%2BZHtIhUjV56yn12VPQPmBLri1htd%2FsCNg%2BqxM8XIPTds2hzvMKEISs8khzjxJAuUP8DJruml3NjHG8Qk%2BKho3sWQ3aq6tln9dzNyAf3hF2E9mK347VaTLLMWlNVe5oST6dDgkOPZeBAwl9mIwQY6pgGGQ1Iep7myHM7%2B%2BGx803r9nBJgnY20hijxJzUHp6%2FDEG7%2BsrO3HpNcQt%2F2xYZeNfziYd5ljX5P8Tsa%2BwKQBvSnHh7B6WQuXFR2vBoOxy62PXg0gA3sO7w%2FvDxBReC8%2B8qI8KfRC8yOjKGMAOgDNfx7HTRTKx%2FGL5qXLpYVD2Wq%2F64WJdVzFLtdCSctvDS6gc42c0uN7hTPi8ejb3r39R0hLVvc7A%2Bc&X-Amz-Signature=1fbd98036834911432e773c86b8cb51a81aedd3d47e0039d3b5c7d85cf031aad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7MBPCD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAJc%2BrK1eBIsBxlXGyzGB%2BhYYiViiqSZSFBcS68zY9YZAiAMm2W5ggZpFD6OjZmZMhQvrHH65DVuhzqHfI7xLfQzsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BEYEFUJl9VIbV2M8KtwDMGr%2FH4A64z37YXPBNjh6EFTz8kmGuJBI%2BpbuZvzvXGQujRczHIHvHJzIEJRUoAcZ4b8YUbe5KXVnLqWwmHN574%2Fu7eZrU39oLgLcAgkTmMMxHlPDlOF4zoTPietypS3wQR109PHh4yB9y10qxKrjcJNAha0ny9yGj1auA4PcHeCrmpllfksFvcm2C551icojGLnlMWSuv5vAAyuLcmKb74XWUBcXwiFNkbJXyl8nkyXIoyhLsPkR9n0mCOmwFAcIj7LYqi%2BoEBhMxV2BJPKeGtEJoNTxC1rjmlN6Qmy7Yf5bE%2FuFcB%2B2g1bh9N8G%2FjY6HtbrC%2Bq88YPBDGnBj7%2Fs%2FdQ%2F9dLJ0jz%2BA0ZrMyVOw%2BfG%2B%2FCIYMd0QSX2FpV%2BEcNm%2BrQe0lZhr7DvaFFheywWblBp38xBum6bfuOOeyU75gDhtsISC%2BGB3m8XJwhSqV2X%2FslqlHXzgx9DKdk%2BtA2BP2sugU2jYF7g8U%2B4HFdCAoBLX9RN%2BZHtIhUjV56yn12VPQPmBLri1htd%2FsCNg%2BqxM8XIPTds2hzvMKEISs8khzjxJAuUP8DJruml3NjHG8Qk%2BKho3sWQ3aq6tln9dzNyAf3hF2E9mK347VaTLLMWlNVe5oST6dDgkOPZeBAwl9mIwQY6pgGGQ1Iep7myHM7%2B%2BGx803r9nBJgnY20hijxJzUHp6%2FDEG7%2BsrO3HpNcQt%2F2xYZeNfziYd5ljX5P8Tsa%2BwKQBvSnHh7B6WQuXFR2vBoOxy62PXg0gA3sO7w%2FvDxBReC8%2B8qI8KfRC8yOjKGMAOgDNfx7HTRTKx%2FGL5qXLpYVD2Wq%2F64WJdVzFLtdCSctvDS6gc42c0uN7hTPi8ejb3r39R0hLVvc7A%2Bc&X-Amz-Signature=e902f68c9754a9589d1953a3b6bb3a7a3d3cc4fa232cba741ac4a346f27590af&X-Amz-SignedHeaders=host&x-id=GetObject)
