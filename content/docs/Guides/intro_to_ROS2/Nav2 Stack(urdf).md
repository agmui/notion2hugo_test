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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWVDVVJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew3jK%2B33jHps6%2FKYPdG%2Fwl0SKtBMKquNZl%2BuS2gfAegIhAL9dgdf0qeHJmK8u7lNSr2Lkn8YIpfry44eSMGoM1c2LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVEzB4H1EaN01o5oq3APEzyCxNu8qOkjTVAGRkg%2B3BCc5Rq37KdUVE9%2FMiE%2FdBuMJk%2BVsXJqRQ1a%2BWcNsENpc4EoJpGO2%2BKan%2BYeaXruFF1GPGWEnhMWzQXdRcX6JC5ZNeDYIm%2BNo1h9TNu%2FbM2srd0%2Fd5n%2B4tZpP3EDr3BBWDsaZj4QePXTKxz7dA4UhohOViZs%2FJ9ZsiusezW4J9MCA0WHM3vlllRI8VlqOhM5iEGFyn7Pw1EM4s%2B7CI1xtkd3WyIDleF5fH%2F4WWnjp%2FANmA9SlGDBDAGbKYcuP%2FfW%2ByTmz7hZQ2U5MgsMh4M00muOLr3BdSB6jSbXqs2mepZspoaYsOVRvR%2BSinGqLeLPrYNHCu6gAcETkF7Ps5QyCNKmANjHe2xUHC0GsmXbdvPbRxMEGMaCQ1oUX7GG9uBuYjsXPJohmYebcoJ1EFhfMxc8z7fsjDVSDAZ7oc3f40iP9Mp3BOzivt3kU%2FQYlRNzfn320OixIX4DIQ4UAwFGHfEEvpqm0HyVPJkHK1EcRGDJ1HA9zE%2Bq2VqiowlzqE0jyszpH2vH3FxH5PfZx64pAL1OvonFboNkmrJFfwIK%2FZkE6NR2YldjkeQaPvIIaFg52pw8ZJqokLMFOl9jyoWEO5aCISsJE8hGEZlTcczDR%2FIzABjqkAd4NMUyzSahG1Kke7kPYWTL6GKt8vBWPCZy2f4ivy4fpgPZ4x7EwiZdK63zOxvjsB5ZIjNXmnWCWkAQ84Tg07ITOY6Ux%2FW%2Fd4i%2FRtHD%2BCxmuLptJvnMG2UBZlnw%2BqNq3mz39nX1yKc2jaBUOY%2BNWNgX%2BD%2BjvJVWh1yeYrx%2F8PibdmM48%2B8jVAP1LObIVf1nKXQypu1cX0chNlz9qcsVI79Q3SZSI&X-Amz-Signature=7c406e4a469b175ce36d47f585ab6bba6c9c936528bcb06aa717abf72b6e1a75&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWVDVVJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew3jK%2B33jHps6%2FKYPdG%2Fwl0SKtBMKquNZl%2BuS2gfAegIhAL9dgdf0qeHJmK8u7lNSr2Lkn8YIpfry44eSMGoM1c2LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVEzB4H1EaN01o5oq3APEzyCxNu8qOkjTVAGRkg%2B3BCc5Rq37KdUVE9%2FMiE%2FdBuMJk%2BVsXJqRQ1a%2BWcNsENpc4EoJpGO2%2BKan%2BYeaXruFF1GPGWEnhMWzQXdRcX6JC5ZNeDYIm%2BNo1h9TNu%2FbM2srd0%2Fd5n%2B4tZpP3EDr3BBWDsaZj4QePXTKxz7dA4UhohOViZs%2FJ9ZsiusezW4J9MCA0WHM3vlllRI8VlqOhM5iEGFyn7Pw1EM4s%2B7CI1xtkd3WyIDleF5fH%2F4WWnjp%2FANmA9SlGDBDAGbKYcuP%2FfW%2ByTmz7hZQ2U5MgsMh4M00muOLr3BdSB6jSbXqs2mepZspoaYsOVRvR%2BSinGqLeLPrYNHCu6gAcETkF7Ps5QyCNKmANjHe2xUHC0GsmXbdvPbRxMEGMaCQ1oUX7GG9uBuYjsXPJohmYebcoJ1EFhfMxc8z7fsjDVSDAZ7oc3f40iP9Mp3BOzivt3kU%2FQYlRNzfn320OixIX4DIQ4UAwFGHfEEvpqm0HyVPJkHK1EcRGDJ1HA9zE%2Bq2VqiowlzqE0jyszpH2vH3FxH5PfZx64pAL1OvonFboNkmrJFfwIK%2FZkE6NR2YldjkeQaPvIIaFg52pw8ZJqokLMFOl9jyoWEO5aCISsJE8hGEZlTcczDR%2FIzABjqkAd4NMUyzSahG1Kke7kPYWTL6GKt8vBWPCZy2f4ivy4fpgPZ4x7EwiZdK63zOxvjsB5ZIjNXmnWCWkAQ84Tg07ITOY6Ux%2FW%2Fd4i%2FRtHD%2BCxmuLptJvnMG2UBZlnw%2BqNq3mz39nX1yKc2jaBUOY%2BNWNgX%2BD%2BjvJVWh1yeYrx%2F8PibdmM48%2B8jVAP1LObIVf1nKXQypu1cX0chNlz9qcsVI79Q3SZSI&X-Amz-Signature=502c1ccf96e05c149cc83186f01c38c0bae96608403c6e1963e539aa8b660b40&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWVDVVJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew3jK%2B33jHps6%2FKYPdG%2Fwl0SKtBMKquNZl%2BuS2gfAegIhAL9dgdf0qeHJmK8u7lNSr2Lkn8YIpfry44eSMGoM1c2LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVEzB4H1EaN01o5oq3APEzyCxNu8qOkjTVAGRkg%2B3BCc5Rq37KdUVE9%2FMiE%2FdBuMJk%2BVsXJqRQ1a%2BWcNsENpc4EoJpGO2%2BKan%2BYeaXruFF1GPGWEnhMWzQXdRcX6JC5ZNeDYIm%2BNo1h9TNu%2FbM2srd0%2Fd5n%2B4tZpP3EDr3BBWDsaZj4QePXTKxz7dA4UhohOViZs%2FJ9ZsiusezW4J9MCA0WHM3vlllRI8VlqOhM5iEGFyn7Pw1EM4s%2B7CI1xtkd3WyIDleF5fH%2F4WWnjp%2FANmA9SlGDBDAGbKYcuP%2FfW%2ByTmz7hZQ2U5MgsMh4M00muOLr3BdSB6jSbXqs2mepZspoaYsOVRvR%2BSinGqLeLPrYNHCu6gAcETkF7Ps5QyCNKmANjHe2xUHC0GsmXbdvPbRxMEGMaCQ1oUX7GG9uBuYjsXPJohmYebcoJ1EFhfMxc8z7fsjDVSDAZ7oc3f40iP9Mp3BOzivt3kU%2FQYlRNzfn320OixIX4DIQ4UAwFGHfEEvpqm0HyVPJkHK1EcRGDJ1HA9zE%2Bq2VqiowlzqE0jyszpH2vH3FxH5PfZx64pAL1OvonFboNkmrJFfwIK%2FZkE6NR2YldjkeQaPvIIaFg52pw8ZJqokLMFOl9jyoWEO5aCISsJE8hGEZlTcczDR%2FIzABjqkAd4NMUyzSahG1Kke7kPYWTL6GKt8vBWPCZy2f4ivy4fpgPZ4x7EwiZdK63zOxvjsB5ZIjNXmnWCWkAQ84Tg07ITOY6Ux%2FW%2Fd4i%2FRtHD%2BCxmuLptJvnMG2UBZlnw%2BqNq3mz39nX1yKc2jaBUOY%2BNWNgX%2BD%2BjvJVWh1yeYrx%2F8PibdmM48%2B8jVAP1LObIVf1nKXQypu1cX0chNlz9qcsVI79Q3SZSI&X-Amz-Signature=e06c27c525f936c23762213a9a7032be923c940360c76e9b69297b9f5143a426&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWVDVVJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew3jK%2B33jHps6%2FKYPdG%2Fwl0SKtBMKquNZl%2BuS2gfAegIhAL9dgdf0qeHJmK8u7lNSr2Lkn8YIpfry44eSMGoM1c2LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVEzB4H1EaN01o5oq3APEzyCxNu8qOkjTVAGRkg%2B3BCc5Rq37KdUVE9%2FMiE%2FdBuMJk%2BVsXJqRQ1a%2BWcNsENpc4EoJpGO2%2BKan%2BYeaXruFF1GPGWEnhMWzQXdRcX6JC5ZNeDYIm%2BNo1h9TNu%2FbM2srd0%2Fd5n%2B4tZpP3EDr3BBWDsaZj4QePXTKxz7dA4UhohOViZs%2FJ9ZsiusezW4J9MCA0WHM3vlllRI8VlqOhM5iEGFyn7Pw1EM4s%2B7CI1xtkd3WyIDleF5fH%2F4WWnjp%2FANmA9SlGDBDAGbKYcuP%2FfW%2ByTmz7hZQ2U5MgsMh4M00muOLr3BdSB6jSbXqs2mepZspoaYsOVRvR%2BSinGqLeLPrYNHCu6gAcETkF7Ps5QyCNKmANjHe2xUHC0GsmXbdvPbRxMEGMaCQ1oUX7GG9uBuYjsXPJohmYebcoJ1EFhfMxc8z7fsjDVSDAZ7oc3f40iP9Mp3BOzivt3kU%2FQYlRNzfn320OixIX4DIQ4UAwFGHfEEvpqm0HyVPJkHK1EcRGDJ1HA9zE%2Bq2VqiowlzqE0jyszpH2vH3FxH5PfZx64pAL1OvonFboNkmrJFfwIK%2FZkE6NR2YldjkeQaPvIIaFg52pw8ZJqokLMFOl9jyoWEO5aCISsJE8hGEZlTcczDR%2FIzABjqkAd4NMUyzSahG1Kke7kPYWTL6GKt8vBWPCZy2f4ivy4fpgPZ4x7EwiZdK63zOxvjsB5ZIjNXmnWCWkAQ84Tg07ITOY6Ux%2FW%2Fd4i%2FRtHD%2BCxmuLptJvnMG2UBZlnw%2BqNq3mz39nX1yKc2jaBUOY%2BNWNgX%2BD%2BjvJVWh1yeYrx%2F8PibdmM48%2B8jVAP1LObIVf1nKXQypu1cX0chNlz9qcsVI79Q3SZSI&X-Amz-Signature=7b66ddf008743f4de03b5eabb188b36f770aee4ada66824e8bcaa919c9bfe8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWVDVVJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew3jK%2B33jHps6%2FKYPdG%2Fwl0SKtBMKquNZl%2BuS2gfAegIhAL9dgdf0qeHJmK8u7lNSr2Lkn8YIpfry44eSMGoM1c2LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVEzB4H1EaN01o5oq3APEzyCxNu8qOkjTVAGRkg%2B3BCc5Rq37KdUVE9%2FMiE%2FdBuMJk%2BVsXJqRQ1a%2BWcNsENpc4EoJpGO2%2BKan%2BYeaXruFF1GPGWEnhMWzQXdRcX6JC5ZNeDYIm%2BNo1h9TNu%2FbM2srd0%2Fd5n%2B4tZpP3EDr3BBWDsaZj4QePXTKxz7dA4UhohOViZs%2FJ9ZsiusezW4J9MCA0WHM3vlllRI8VlqOhM5iEGFyn7Pw1EM4s%2B7CI1xtkd3WyIDleF5fH%2F4WWnjp%2FANmA9SlGDBDAGbKYcuP%2FfW%2ByTmz7hZQ2U5MgsMh4M00muOLr3BdSB6jSbXqs2mepZspoaYsOVRvR%2BSinGqLeLPrYNHCu6gAcETkF7Ps5QyCNKmANjHe2xUHC0GsmXbdvPbRxMEGMaCQ1oUX7GG9uBuYjsXPJohmYebcoJ1EFhfMxc8z7fsjDVSDAZ7oc3f40iP9Mp3BOzivt3kU%2FQYlRNzfn320OixIX4DIQ4UAwFGHfEEvpqm0HyVPJkHK1EcRGDJ1HA9zE%2Bq2VqiowlzqE0jyszpH2vH3FxH5PfZx64pAL1OvonFboNkmrJFfwIK%2FZkE6NR2YldjkeQaPvIIaFg52pw8ZJqokLMFOl9jyoWEO5aCISsJE8hGEZlTcczDR%2FIzABjqkAd4NMUyzSahG1Kke7kPYWTL6GKt8vBWPCZy2f4ivy4fpgPZ4x7EwiZdK63zOxvjsB5ZIjNXmnWCWkAQ84Tg07ITOY6Ux%2FW%2Fd4i%2FRtHD%2BCxmuLptJvnMG2UBZlnw%2BqNq3mz39nX1yKc2jaBUOY%2BNWNgX%2BD%2BjvJVWh1yeYrx%2F8PibdmM48%2B8jVAP1LObIVf1nKXQypu1cX0chNlz9qcsVI79Q3SZSI&X-Amz-Signature=f595055fb40635927aa8639cf64951d55563738655033c6f4d5b52769e77a5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWVDVVJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCew3jK%2B33jHps6%2FKYPdG%2Fwl0SKtBMKquNZl%2BuS2gfAegIhAL9dgdf0qeHJmK8u7lNSr2Lkn8YIpfry44eSMGoM1c2LKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVEzB4H1EaN01o5oq3APEzyCxNu8qOkjTVAGRkg%2B3BCc5Rq37KdUVE9%2FMiE%2FdBuMJk%2BVsXJqRQ1a%2BWcNsENpc4EoJpGO2%2BKan%2BYeaXruFF1GPGWEnhMWzQXdRcX6JC5ZNeDYIm%2BNo1h9TNu%2FbM2srd0%2Fd5n%2B4tZpP3EDr3BBWDsaZj4QePXTKxz7dA4UhohOViZs%2FJ9ZsiusezW4J9MCA0WHM3vlllRI8VlqOhM5iEGFyn7Pw1EM4s%2B7CI1xtkd3WyIDleF5fH%2F4WWnjp%2FANmA9SlGDBDAGbKYcuP%2FfW%2ByTmz7hZQ2U5MgsMh4M00muOLr3BdSB6jSbXqs2mepZspoaYsOVRvR%2BSinGqLeLPrYNHCu6gAcETkF7Ps5QyCNKmANjHe2xUHC0GsmXbdvPbRxMEGMaCQ1oUX7GG9uBuYjsXPJohmYebcoJ1EFhfMxc8z7fsjDVSDAZ7oc3f40iP9Mp3BOzivt3kU%2FQYlRNzfn320OixIX4DIQ4UAwFGHfEEvpqm0HyVPJkHK1EcRGDJ1HA9zE%2Bq2VqiowlzqE0jyszpH2vH3FxH5PfZx64pAL1OvonFboNkmrJFfwIK%2FZkE6NR2YldjkeQaPvIIaFg52pw8ZJqokLMFOl9jyoWEO5aCISsJE8hGEZlTcczDR%2FIzABjqkAd4NMUyzSahG1Kke7kPYWTL6GKt8vBWPCZy2f4ivy4fpgPZ4x7EwiZdK63zOxvjsB5ZIjNXmnWCWkAQ84Tg07ITOY6Ux%2FW%2Fd4i%2FRtHD%2BCxmuLptJvnMG2UBZlnw%2BqNq3mz39nX1yKc2jaBUOY%2BNWNgX%2BD%2BjvJVWh1yeYrx%2F8PibdmM48%2B8jVAP1LObIVf1nKXQypu1cX0chNlz9qcsVI79Q3SZSI&X-Amz-Signature=0d006cb613f2cf612ff6db83f0668233489c7d8e99e71599eeaaae284bbbcfd9&X-Amz-SignedHeaders=host&x-id=GetObject)
