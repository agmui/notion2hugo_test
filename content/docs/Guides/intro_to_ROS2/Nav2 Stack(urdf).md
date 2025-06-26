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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DHJCKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDoOZ0iivtZmaHHuQ9UWXFvdJ3HkRC3U1%2Bhy3RpSpIBZgIhAIsGh%2BUXtP1NbFXrgOv3btonHycbrG53kKH8xAnt4iS4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzM3oU7swVJriPC33Mq3APyEHVg%2FLOWRzuX8FPXSxn1vFwpzvlygdujzg7ozOLFLCv4TRl%2FCRIH8L0j6rFyfldl2Zae5Yu4p6xowpxmx2BAg6kN75EZGbpD6wHVC9WVSu3xZf8J1wzFnYDf6JLRYaOlGq4OoxCred4ynKSIn27bH%2BOlwOoFIK%2FR8TgFraYFYa84Otq8d1H1VSPt89MMIK%2FU3outH0T2iPusJNam%2Bby4cFXa4C40IpW%2FZoAOePPvf565ikXSRmmQ8z6YSibtUJxIWUrb9%2BgMYrwl8VrIJmKM8pkQHj8QELJfRgvIzfVREfzgZ3eYWAgHXnnt8kztHRCwDPZADawg7Uvel17BBMfv2SzcX17IuAlP6BzayVrz%2BBMj%2FHW%2FSPue3X3mrDbBS4byrelShzemit%2FkQI%2BVZExNMr7yt5kdu6xdusaVq7y9gI%2BbY%2BE7aPWTzaRb3RT4UFPbWx4bPDZGNi0%2Bpf33v%2FGiaUCa4lQYTtFsIBxdLtw4o0iqrwcZPhmIrcyjPna0VKgm0QgqgSHDpxR64kem2U7XwPbB5v%2F4g%2Bvmj8noP9mSBZl5%2BSacgFcnDX0p8HLuG75i%2Fqgg0C0G4RKq46gWIHbgset8fSU6itvKkwTAq8hUVSmLu9v0rSuMmaoQYDDbiPPCBjqkAax2sW90PFg6YzUUhJnDbVbquoZEJCxW10OAKq4aafv9ErGmmD3tgReqqXgITLVlUuXz%2F5xKgwnWtk9dp86nR9jiZF5SooX7WxfNkusXtR%2F2FH4%2FeWyNUc5fiSseIDWl8uousQv0vdwfU11NfRwFCJc2KUsOyj65Pt7tzJki8FEynG1ncetwGeu0xLsYf8VthxHDHxYIx%2Bq8tMlhKdOVhDzujiej&X-Amz-Signature=73004081034cd3294ac05801054635e844790a14794bdc13b98047b376f3f305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DHJCKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDoOZ0iivtZmaHHuQ9UWXFvdJ3HkRC3U1%2Bhy3RpSpIBZgIhAIsGh%2BUXtP1NbFXrgOv3btonHycbrG53kKH8xAnt4iS4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzM3oU7swVJriPC33Mq3APyEHVg%2FLOWRzuX8FPXSxn1vFwpzvlygdujzg7ozOLFLCv4TRl%2FCRIH8L0j6rFyfldl2Zae5Yu4p6xowpxmx2BAg6kN75EZGbpD6wHVC9WVSu3xZf8J1wzFnYDf6JLRYaOlGq4OoxCred4ynKSIn27bH%2BOlwOoFIK%2FR8TgFraYFYa84Otq8d1H1VSPt89MMIK%2FU3outH0T2iPusJNam%2Bby4cFXa4C40IpW%2FZoAOePPvf565ikXSRmmQ8z6YSibtUJxIWUrb9%2BgMYrwl8VrIJmKM8pkQHj8QELJfRgvIzfVREfzgZ3eYWAgHXnnt8kztHRCwDPZADawg7Uvel17BBMfv2SzcX17IuAlP6BzayVrz%2BBMj%2FHW%2FSPue3X3mrDbBS4byrelShzemit%2FkQI%2BVZExNMr7yt5kdu6xdusaVq7y9gI%2BbY%2BE7aPWTzaRb3RT4UFPbWx4bPDZGNi0%2Bpf33v%2FGiaUCa4lQYTtFsIBxdLtw4o0iqrwcZPhmIrcyjPna0VKgm0QgqgSHDpxR64kem2U7XwPbB5v%2F4g%2Bvmj8noP9mSBZl5%2BSacgFcnDX0p8HLuG75i%2Fqgg0C0G4RKq46gWIHbgset8fSU6itvKkwTAq8hUVSmLu9v0rSuMmaoQYDDbiPPCBjqkAax2sW90PFg6YzUUhJnDbVbquoZEJCxW10OAKq4aafv9ErGmmD3tgReqqXgITLVlUuXz%2F5xKgwnWtk9dp86nR9jiZF5SooX7WxfNkusXtR%2F2FH4%2FeWyNUc5fiSseIDWl8uousQv0vdwfU11NfRwFCJc2KUsOyj65Pt7tzJki8FEynG1ncetwGeu0xLsYf8VthxHDHxYIx%2Bq8tMlhKdOVhDzujiej&X-Amz-Signature=fa9d5fc1bd364c5f7c1f07c8733cb0633cde85b73cf1156188c6fd683088ff8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DHJCKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDoOZ0iivtZmaHHuQ9UWXFvdJ3HkRC3U1%2Bhy3RpSpIBZgIhAIsGh%2BUXtP1NbFXrgOv3btonHycbrG53kKH8xAnt4iS4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzM3oU7swVJriPC33Mq3APyEHVg%2FLOWRzuX8FPXSxn1vFwpzvlygdujzg7ozOLFLCv4TRl%2FCRIH8L0j6rFyfldl2Zae5Yu4p6xowpxmx2BAg6kN75EZGbpD6wHVC9WVSu3xZf8J1wzFnYDf6JLRYaOlGq4OoxCred4ynKSIn27bH%2BOlwOoFIK%2FR8TgFraYFYa84Otq8d1H1VSPt89MMIK%2FU3outH0T2iPusJNam%2Bby4cFXa4C40IpW%2FZoAOePPvf565ikXSRmmQ8z6YSibtUJxIWUrb9%2BgMYrwl8VrIJmKM8pkQHj8QELJfRgvIzfVREfzgZ3eYWAgHXnnt8kztHRCwDPZADawg7Uvel17BBMfv2SzcX17IuAlP6BzayVrz%2BBMj%2FHW%2FSPue3X3mrDbBS4byrelShzemit%2FkQI%2BVZExNMr7yt5kdu6xdusaVq7y9gI%2BbY%2BE7aPWTzaRb3RT4UFPbWx4bPDZGNi0%2Bpf33v%2FGiaUCa4lQYTtFsIBxdLtw4o0iqrwcZPhmIrcyjPna0VKgm0QgqgSHDpxR64kem2U7XwPbB5v%2F4g%2Bvmj8noP9mSBZl5%2BSacgFcnDX0p8HLuG75i%2Fqgg0C0G4RKq46gWIHbgset8fSU6itvKkwTAq8hUVSmLu9v0rSuMmaoQYDDbiPPCBjqkAax2sW90PFg6YzUUhJnDbVbquoZEJCxW10OAKq4aafv9ErGmmD3tgReqqXgITLVlUuXz%2F5xKgwnWtk9dp86nR9jiZF5SooX7WxfNkusXtR%2F2FH4%2FeWyNUc5fiSseIDWl8uousQv0vdwfU11NfRwFCJc2KUsOyj65Pt7tzJki8FEynG1ncetwGeu0xLsYf8VthxHDHxYIx%2Bq8tMlhKdOVhDzujiej&X-Amz-Signature=7a179386aa2b43ae44b4cabc04dee3c7bdc264e172b69736a5126f292f49e7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DHJCKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDoOZ0iivtZmaHHuQ9UWXFvdJ3HkRC3U1%2Bhy3RpSpIBZgIhAIsGh%2BUXtP1NbFXrgOv3btonHycbrG53kKH8xAnt4iS4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzM3oU7swVJriPC33Mq3APyEHVg%2FLOWRzuX8FPXSxn1vFwpzvlygdujzg7ozOLFLCv4TRl%2FCRIH8L0j6rFyfldl2Zae5Yu4p6xowpxmx2BAg6kN75EZGbpD6wHVC9WVSu3xZf8J1wzFnYDf6JLRYaOlGq4OoxCred4ynKSIn27bH%2BOlwOoFIK%2FR8TgFraYFYa84Otq8d1H1VSPt89MMIK%2FU3outH0T2iPusJNam%2Bby4cFXa4C40IpW%2FZoAOePPvf565ikXSRmmQ8z6YSibtUJxIWUrb9%2BgMYrwl8VrIJmKM8pkQHj8QELJfRgvIzfVREfzgZ3eYWAgHXnnt8kztHRCwDPZADawg7Uvel17BBMfv2SzcX17IuAlP6BzayVrz%2BBMj%2FHW%2FSPue3X3mrDbBS4byrelShzemit%2FkQI%2BVZExNMr7yt5kdu6xdusaVq7y9gI%2BbY%2BE7aPWTzaRb3RT4UFPbWx4bPDZGNi0%2Bpf33v%2FGiaUCa4lQYTtFsIBxdLtw4o0iqrwcZPhmIrcyjPna0VKgm0QgqgSHDpxR64kem2U7XwPbB5v%2F4g%2Bvmj8noP9mSBZl5%2BSacgFcnDX0p8HLuG75i%2Fqgg0C0G4RKq46gWIHbgset8fSU6itvKkwTAq8hUVSmLu9v0rSuMmaoQYDDbiPPCBjqkAax2sW90PFg6YzUUhJnDbVbquoZEJCxW10OAKq4aafv9ErGmmD3tgReqqXgITLVlUuXz%2F5xKgwnWtk9dp86nR9jiZF5SooX7WxfNkusXtR%2F2FH4%2FeWyNUc5fiSseIDWl8uousQv0vdwfU11NfRwFCJc2KUsOyj65Pt7tzJki8FEynG1ncetwGeu0xLsYf8VthxHDHxYIx%2Bq8tMlhKdOVhDzujiej&X-Amz-Signature=a969140585955a4794a2ff2d6559c5497221cfa5f0b759083d9ef0d3238311c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DHJCKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDoOZ0iivtZmaHHuQ9UWXFvdJ3HkRC3U1%2Bhy3RpSpIBZgIhAIsGh%2BUXtP1NbFXrgOv3btonHycbrG53kKH8xAnt4iS4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzM3oU7swVJriPC33Mq3APyEHVg%2FLOWRzuX8FPXSxn1vFwpzvlygdujzg7ozOLFLCv4TRl%2FCRIH8L0j6rFyfldl2Zae5Yu4p6xowpxmx2BAg6kN75EZGbpD6wHVC9WVSu3xZf8J1wzFnYDf6JLRYaOlGq4OoxCred4ynKSIn27bH%2BOlwOoFIK%2FR8TgFraYFYa84Otq8d1H1VSPt89MMIK%2FU3outH0T2iPusJNam%2Bby4cFXa4C40IpW%2FZoAOePPvf565ikXSRmmQ8z6YSibtUJxIWUrb9%2BgMYrwl8VrIJmKM8pkQHj8QELJfRgvIzfVREfzgZ3eYWAgHXnnt8kztHRCwDPZADawg7Uvel17BBMfv2SzcX17IuAlP6BzayVrz%2BBMj%2FHW%2FSPue3X3mrDbBS4byrelShzemit%2FkQI%2BVZExNMr7yt5kdu6xdusaVq7y9gI%2BbY%2BE7aPWTzaRb3RT4UFPbWx4bPDZGNi0%2Bpf33v%2FGiaUCa4lQYTtFsIBxdLtw4o0iqrwcZPhmIrcyjPna0VKgm0QgqgSHDpxR64kem2U7XwPbB5v%2F4g%2Bvmj8noP9mSBZl5%2BSacgFcnDX0p8HLuG75i%2Fqgg0C0G4RKq46gWIHbgset8fSU6itvKkwTAq8hUVSmLu9v0rSuMmaoQYDDbiPPCBjqkAax2sW90PFg6YzUUhJnDbVbquoZEJCxW10OAKq4aafv9ErGmmD3tgReqqXgITLVlUuXz%2F5xKgwnWtk9dp86nR9jiZF5SooX7WxfNkusXtR%2F2FH4%2FeWyNUc5fiSseIDWl8uousQv0vdwfU11NfRwFCJc2KUsOyj65Pt7tzJki8FEynG1ncetwGeu0xLsYf8VthxHDHxYIx%2Bq8tMlhKdOVhDzujiej&X-Amz-Signature=f9959276e12238043a9f5d9cbacc3aaa689fdbd4ab0d7f5566d3e6db338eb007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DHJCKI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDoOZ0iivtZmaHHuQ9UWXFvdJ3HkRC3U1%2Bhy3RpSpIBZgIhAIsGh%2BUXtP1NbFXrgOv3btonHycbrG53kKH8xAnt4iS4Kv8DCFUQABoMNjM3NDIzMTgzODA1IgzM3oU7swVJriPC33Mq3APyEHVg%2FLOWRzuX8FPXSxn1vFwpzvlygdujzg7ozOLFLCv4TRl%2FCRIH8L0j6rFyfldl2Zae5Yu4p6xowpxmx2BAg6kN75EZGbpD6wHVC9WVSu3xZf8J1wzFnYDf6JLRYaOlGq4OoxCred4ynKSIn27bH%2BOlwOoFIK%2FR8TgFraYFYa84Otq8d1H1VSPt89MMIK%2FU3outH0T2iPusJNam%2Bby4cFXa4C40IpW%2FZoAOePPvf565ikXSRmmQ8z6YSibtUJxIWUrb9%2BgMYrwl8VrIJmKM8pkQHj8QELJfRgvIzfVREfzgZ3eYWAgHXnnt8kztHRCwDPZADawg7Uvel17BBMfv2SzcX17IuAlP6BzayVrz%2BBMj%2FHW%2FSPue3X3mrDbBS4byrelShzemit%2FkQI%2BVZExNMr7yt5kdu6xdusaVq7y9gI%2BbY%2BE7aPWTzaRb3RT4UFPbWx4bPDZGNi0%2Bpf33v%2FGiaUCa4lQYTtFsIBxdLtw4o0iqrwcZPhmIrcyjPna0VKgm0QgqgSHDpxR64kem2U7XwPbB5v%2F4g%2Bvmj8noP9mSBZl5%2BSacgFcnDX0p8HLuG75i%2Fqgg0C0G4RKq46gWIHbgset8fSU6itvKkwTAq8hUVSmLu9v0rSuMmaoQYDDbiPPCBjqkAax2sW90PFg6YzUUhJnDbVbquoZEJCxW10OAKq4aafv9ErGmmD3tgReqqXgITLVlUuXz%2F5xKgwnWtk9dp86nR9jiZF5SooX7WxfNkusXtR%2F2FH4%2FeWyNUc5fiSseIDWl8uousQv0vdwfU11NfRwFCJc2KUsOyj65Pt7tzJki8FEynG1ncetwGeu0xLsYf8VthxHDHxYIx%2Bq8tMlhKdOVhDzujiej&X-Amz-Signature=79fe18e147c9cf375892b53badce622c232f348861e53d1675eb0b4c72fd03fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
