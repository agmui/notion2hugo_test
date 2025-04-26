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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ON6AI6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjq7wj3rAIP%2Fn21tC37gMxhs4GphaOYSnSjTzG4iei9AiBp84ZENasWzkNhFjRWex6t1eQNfEzbmObsu7SBSQD59ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMXk%2F%2FBQk4DkkaMChSKtwDFjOL%2B8qtT%2B%2FQ%2FnIhwO5IqDhVuTUbcE1dVHCtHtGYa6ORENHzHK1aAx1f%2BFw%2F6GNyAzfTawmNF7bb4hZN%2BA3awTCVFnWwat8I7lhbKpsipkRHeMVQjEHSnWCKLNGYHINlrCbj%2FZoy9mHJ4IdHxGKCx%2BFcKcXvwKu1Zuoiyw06GJgnvvQsnwD0WjePCKgm%2BujY7FYnTe4D0Y18CkU4JZumpiGv54swb0eSJwrCdt6YOeZ58etJXOLt7NP2WgjuBkiW%2BP8SBGBgKkL7fXPpOojKBaJ%2FY7eDRLOC6wUHnnJy74ssXpnY3UKDbCddov%2FeAd7%2FRMrQlBQcaKACc5lSjkU8BvZVtEwI%2FLqYOPRxLcJ%2BVCx0Bw1%2F1ao4uYXweoRQbWcXacvoYw3kxq6BOPmWdBEsX1dauznYChRn4LFVDbDPmDMAABCe%2Fl4rq33fWmeIvesFMCxcaBatY4WSJmPotRVbrYa9ihopa%2FlyHPZpUVewiCBmzx8usymjpMMbqKQJiUYNcU26poHzzRVcVOk2rt4SnuU%2F2i6r377FWO2S34dlk0P5WomUafL92FTFHFxlZLXR9Xz0RkME89Y2GfvNJ2%2B54OgqNa1uHkRa5ZQt%2BNEw%2FnzsVeYrwubiZPdDpScw1OezwAY6pgEcTUkBmBk6idBqgeQXceUnGXGnB%2FwdjO9kZUiGC2FTnmokGv3Dm3pM7sBRDg7imIZKqONnR5okPT%2F2jua5E2O460e36qWNwEARu3JQI5ERWRDbl9IF8NyJyniO8DGiXMSlpdDdf0cLzrQ8ARxq98tnN5yB%2FhJrg6O0VVRlhWDPa7XE2vToPuj9JcGOQGyaRTvW5Q%2BTv3KLDdP6BzpPiwj%2FbgonqT78&X-Amz-Signature=e16dd544ecbc73d5f90a753592ca5fbc84ebefb209d47db0dca4a828a9f04fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ON6AI6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjq7wj3rAIP%2Fn21tC37gMxhs4GphaOYSnSjTzG4iei9AiBp84ZENasWzkNhFjRWex6t1eQNfEzbmObsu7SBSQD59ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMXk%2F%2FBQk4DkkaMChSKtwDFjOL%2B8qtT%2B%2FQ%2FnIhwO5IqDhVuTUbcE1dVHCtHtGYa6ORENHzHK1aAx1f%2BFw%2F6GNyAzfTawmNF7bb4hZN%2BA3awTCVFnWwat8I7lhbKpsipkRHeMVQjEHSnWCKLNGYHINlrCbj%2FZoy9mHJ4IdHxGKCx%2BFcKcXvwKu1Zuoiyw06GJgnvvQsnwD0WjePCKgm%2BujY7FYnTe4D0Y18CkU4JZumpiGv54swb0eSJwrCdt6YOeZ58etJXOLt7NP2WgjuBkiW%2BP8SBGBgKkL7fXPpOojKBaJ%2FY7eDRLOC6wUHnnJy74ssXpnY3UKDbCddov%2FeAd7%2FRMrQlBQcaKACc5lSjkU8BvZVtEwI%2FLqYOPRxLcJ%2BVCx0Bw1%2F1ao4uYXweoRQbWcXacvoYw3kxq6BOPmWdBEsX1dauznYChRn4LFVDbDPmDMAABCe%2Fl4rq33fWmeIvesFMCxcaBatY4WSJmPotRVbrYa9ihopa%2FlyHPZpUVewiCBmzx8usymjpMMbqKQJiUYNcU26poHzzRVcVOk2rt4SnuU%2F2i6r377FWO2S34dlk0P5WomUafL92FTFHFxlZLXR9Xz0RkME89Y2GfvNJ2%2B54OgqNa1uHkRa5ZQt%2BNEw%2FnzsVeYrwubiZPdDpScw1OezwAY6pgEcTUkBmBk6idBqgeQXceUnGXGnB%2FwdjO9kZUiGC2FTnmokGv3Dm3pM7sBRDg7imIZKqONnR5okPT%2F2jua5E2O460e36qWNwEARu3JQI5ERWRDbl9IF8NyJyniO8DGiXMSlpdDdf0cLzrQ8ARxq98tnN5yB%2FhJrg6O0VVRlhWDPa7XE2vToPuj9JcGOQGyaRTvW5Q%2BTv3KLDdP6BzpPiwj%2FbgonqT78&X-Amz-Signature=38ba68ac25bfe6fd2a0e5fe9337be5a3cbceaaae45ad2e4e41fed8e1e8de8204&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ON6AI6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjq7wj3rAIP%2Fn21tC37gMxhs4GphaOYSnSjTzG4iei9AiBp84ZENasWzkNhFjRWex6t1eQNfEzbmObsu7SBSQD59ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMXk%2F%2FBQk4DkkaMChSKtwDFjOL%2B8qtT%2B%2FQ%2FnIhwO5IqDhVuTUbcE1dVHCtHtGYa6ORENHzHK1aAx1f%2BFw%2F6GNyAzfTawmNF7bb4hZN%2BA3awTCVFnWwat8I7lhbKpsipkRHeMVQjEHSnWCKLNGYHINlrCbj%2FZoy9mHJ4IdHxGKCx%2BFcKcXvwKu1Zuoiyw06GJgnvvQsnwD0WjePCKgm%2BujY7FYnTe4D0Y18CkU4JZumpiGv54swb0eSJwrCdt6YOeZ58etJXOLt7NP2WgjuBkiW%2BP8SBGBgKkL7fXPpOojKBaJ%2FY7eDRLOC6wUHnnJy74ssXpnY3UKDbCddov%2FeAd7%2FRMrQlBQcaKACc5lSjkU8BvZVtEwI%2FLqYOPRxLcJ%2BVCx0Bw1%2F1ao4uYXweoRQbWcXacvoYw3kxq6BOPmWdBEsX1dauznYChRn4LFVDbDPmDMAABCe%2Fl4rq33fWmeIvesFMCxcaBatY4WSJmPotRVbrYa9ihopa%2FlyHPZpUVewiCBmzx8usymjpMMbqKQJiUYNcU26poHzzRVcVOk2rt4SnuU%2F2i6r377FWO2S34dlk0P5WomUafL92FTFHFxlZLXR9Xz0RkME89Y2GfvNJ2%2B54OgqNa1uHkRa5ZQt%2BNEw%2FnzsVeYrwubiZPdDpScw1OezwAY6pgEcTUkBmBk6idBqgeQXceUnGXGnB%2FwdjO9kZUiGC2FTnmokGv3Dm3pM7sBRDg7imIZKqONnR5okPT%2F2jua5E2O460e36qWNwEARu3JQI5ERWRDbl9IF8NyJyniO8DGiXMSlpdDdf0cLzrQ8ARxq98tnN5yB%2FhJrg6O0VVRlhWDPa7XE2vToPuj9JcGOQGyaRTvW5Q%2BTv3KLDdP6BzpPiwj%2FbgonqT78&X-Amz-Signature=5094499d8daee37845c0b814dca9a13bfccdc52706db574bf109e49c0ff4b7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ON6AI6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjq7wj3rAIP%2Fn21tC37gMxhs4GphaOYSnSjTzG4iei9AiBp84ZENasWzkNhFjRWex6t1eQNfEzbmObsu7SBSQD59ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMXk%2F%2FBQk4DkkaMChSKtwDFjOL%2B8qtT%2B%2FQ%2FnIhwO5IqDhVuTUbcE1dVHCtHtGYa6ORENHzHK1aAx1f%2BFw%2F6GNyAzfTawmNF7bb4hZN%2BA3awTCVFnWwat8I7lhbKpsipkRHeMVQjEHSnWCKLNGYHINlrCbj%2FZoy9mHJ4IdHxGKCx%2BFcKcXvwKu1Zuoiyw06GJgnvvQsnwD0WjePCKgm%2BujY7FYnTe4D0Y18CkU4JZumpiGv54swb0eSJwrCdt6YOeZ58etJXOLt7NP2WgjuBkiW%2BP8SBGBgKkL7fXPpOojKBaJ%2FY7eDRLOC6wUHnnJy74ssXpnY3UKDbCddov%2FeAd7%2FRMrQlBQcaKACc5lSjkU8BvZVtEwI%2FLqYOPRxLcJ%2BVCx0Bw1%2F1ao4uYXweoRQbWcXacvoYw3kxq6BOPmWdBEsX1dauznYChRn4LFVDbDPmDMAABCe%2Fl4rq33fWmeIvesFMCxcaBatY4WSJmPotRVbrYa9ihopa%2FlyHPZpUVewiCBmzx8usymjpMMbqKQJiUYNcU26poHzzRVcVOk2rt4SnuU%2F2i6r377FWO2S34dlk0P5WomUafL92FTFHFxlZLXR9Xz0RkME89Y2GfvNJ2%2B54OgqNa1uHkRa5ZQt%2BNEw%2FnzsVeYrwubiZPdDpScw1OezwAY6pgEcTUkBmBk6idBqgeQXceUnGXGnB%2FwdjO9kZUiGC2FTnmokGv3Dm3pM7sBRDg7imIZKqONnR5okPT%2F2jua5E2O460e36qWNwEARu3JQI5ERWRDbl9IF8NyJyniO8DGiXMSlpdDdf0cLzrQ8ARxq98tnN5yB%2FhJrg6O0VVRlhWDPa7XE2vToPuj9JcGOQGyaRTvW5Q%2BTv3KLDdP6BzpPiwj%2FbgonqT78&X-Amz-Signature=8aa04bbd10ea51f65cd45a09c166175ab80de67c4e2a535eeb374728b39a11be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ON6AI6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjq7wj3rAIP%2Fn21tC37gMxhs4GphaOYSnSjTzG4iei9AiBp84ZENasWzkNhFjRWex6t1eQNfEzbmObsu7SBSQD59ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMXk%2F%2FBQk4DkkaMChSKtwDFjOL%2B8qtT%2B%2FQ%2FnIhwO5IqDhVuTUbcE1dVHCtHtGYa6ORENHzHK1aAx1f%2BFw%2F6GNyAzfTawmNF7bb4hZN%2BA3awTCVFnWwat8I7lhbKpsipkRHeMVQjEHSnWCKLNGYHINlrCbj%2FZoy9mHJ4IdHxGKCx%2BFcKcXvwKu1Zuoiyw06GJgnvvQsnwD0WjePCKgm%2BujY7FYnTe4D0Y18CkU4JZumpiGv54swb0eSJwrCdt6YOeZ58etJXOLt7NP2WgjuBkiW%2BP8SBGBgKkL7fXPpOojKBaJ%2FY7eDRLOC6wUHnnJy74ssXpnY3UKDbCddov%2FeAd7%2FRMrQlBQcaKACc5lSjkU8BvZVtEwI%2FLqYOPRxLcJ%2BVCx0Bw1%2F1ao4uYXweoRQbWcXacvoYw3kxq6BOPmWdBEsX1dauznYChRn4LFVDbDPmDMAABCe%2Fl4rq33fWmeIvesFMCxcaBatY4WSJmPotRVbrYa9ihopa%2FlyHPZpUVewiCBmzx8usymjpMMbqKQJiUYNcU26poHzzRVcVOk2rt4SnuU%2F2i6r377FWO2S34dlk0P5WomUafL92FTFHFxlZLXR9Xz0RkME89Y2GfvNJ2%2B54OgqNa1uHkRa5ZQt%2BNEw%2FnzsVeYrwubiZPdDpScw1OezwAY6pgEcTUkBmBk6idBqgeQXceUnGXGnB%2FwdjO9kZUiGC2FTnmokGv3Dm3pM7sBRDg7imIZKqONnR5okPT%2F2jua5E2O460e36qWNwEARu3JQI5ERWRDbl9IF8NyJyniO8DGiXMSlpdDdf0cLzrQ8ARxq98tnN5yB%2FhJrg6O0VVRlhWDPa7XE2vToPuj9JcGOQGyaRTvW5Q%2BTv3KLDdP6BzpPiwj%2FbgonqT78&X-Amz-Signature=39ae814a4b8f524f646ccefad294301ad4f4a8fbe459dee24451736aadd8614f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ON6AI6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjq7wj3rAIP%2Fn21tC37gMxhs4GphaOYSnSjTzG4iei9AiBp84ZENasWzkNhFjRWex6t1eQNfEzbmObsu7SBSQD59ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMXk%2F%2FBQk4DkkaMChSKtwDFjOL%2B8qtT%2B%2FQ%2FnIhwO5IqDhVuTUbcE1dVHCtHtGYa6ORENHzHK1aAx1f%2BFw%2F6GNyAzfTawmNF7bb4hZN%2BA3awTCVFnWwat8I7lhbKpsipkRHeMVQjEHSnWCKLNGYHINlrCbj%2FZoy9mHJ4IdHxGKCx%2BFcKcXvwKu1Zuoiyw06GJgnvvQsnwD0WjePCKgm%2BujY7FYnTe4D0Y18CkU4JZumpiGv54swb0eSJwrCdt6YOeZ58etJXOLt7NP2WgjuBkiW%2BP8SBGBgKkL7fXPpOojKBaJ%2FY7eDRLOC6wUHnnJy74ssXpnY3UKDbCddov%2FeAd7%2FRMrQlBQcaKACc5lSjkU8BvZVtEwI%2FLqYOPRxLcJ%2BVCx0Bw1%2F1ao4uYXweoRQbWcXacvoYw3kxq6BOPmWdBEsX1dauznYChRn4LFVDbDPmDMAABCe%2Fl4rq33fWmeIvesFMCxcaBatY4WSJmPotRVbrYa9ihopa%2FlyHPZpUVewiCBmzx8usymjpMMbqKQJiUYNcU26poHzzRVcVOk2rt4SnuU%2F2i6r377FWO2S34dlk0P5WomUafL92FTFHFxlZLXR9Xz0RkME89Y2GfvNJ2%2B54OgqNa1uHkRa5ZQt%2BNEw%2FnzsVeYrwubiZPdDpScw1OezwAY6pgEcTUkBmBk6idBqgeQXceUnGXGnB%2FwdjO9kZUiGC2FTnmokGv3Dm3pM7sBRDg7imIZKqONnR5okPT%2F2jua5E2O460e36qWNwEARu3JQI5ERWRDbl9IF8NyJyniO8DGiXMSlpdDdf0cLzrQ8ARxq98tnN5yB%2FhJrg6O0VVRlhWDPa7XE2vToPuj9JcGOQGyaRTvW5Q%2BTv3KLDdP6BzpPiwj%2FbgonqT78&X-Amz-Signature=6a299a6548a5f81aa4f5f068a0e03b4d6623579f76ac82e2f939597e7c38f9d7&X-Amz-SignedHeaders=host&x-id=GetObject)
