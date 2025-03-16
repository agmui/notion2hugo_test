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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3LRQ5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7f9SF0JOOXW859Y1KhlCscqZ40OkADw3nFfV56x1Z5AiBEUFykalBqkuok2gzb9iJKZarjk1uHy2p9QpTPCS5GGyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMUOk0%2B8mdPhUk%2FRO5KtwDf9TGwXQm6cvqyklS9Bp1HweafNqFvGeidULGREF%2FnVFRuEa9cuja6wXDAnNAabmcKbaGvwismSo4jqkGRCNObLRSQRa0vKXRwCybUxMiGNs3HZvxGAMZ0n1oS9HAoq4R0phpKuBvIVSbRvdZ89WH3fG2M%2FsZEw%2F%2Fa50p6quWq5E%2Bvg6nYLauu%2FgSxkgUANEuUxC9NqZtdkkPitWLu%2FWq5v8SI1fE0HHoAkCvrvNAHLrfhRVYfZFpBAXgl4PZNq6GJiCTJG54yMZiHV%2FtQHoMCiZKVffGT0i%2F%2FCLgRlZcuXszgZiwgMR5OmOPoRqzDhXL49rMg6mC8RfXUvxWPE05Wb%2B3gp%2BLjN1c%2BcY0V%2FT%2BAeRkb8LVUg8cTtzesIDIel7%2FrcKEgliExXQ3v0fXwTxMxzTVFe8pO%2FSkkfspb3%2B%2BZ9KngW6x9MAl0QmkZcMuag35Ar8yPVn2S7V52z9mA9irvSNw4mMvQHBu8wGIA3SI9UqFyKxarrrlTPSDjZEV084plC8XFEMeyvnzOFGfE%2BWxlDrHb7z57bvXFpvhBnvStJslDbVTHwebEyeqawxAhzlCBiNU4B%2BC4Pt%2BiazLeZXw1Kl9AO1H39gnqb7JNGYjU3eLW7LMyKR3RY6uvuEwi9zcvgY6pgFNG55WXanrrk2e2jVBORnivFko7ir53p6Wf6EaEvE0Zf0XAdRGN1MpeLrONP9ssp5lCuPZbHL0afKnkasl1rDokZ%2B7cboMtWSDBXWWdI6c8yBsLpdd%2BUhpFO%2Fe3YKP0T32VZm6VGfFZy1Y1ZdFUtZoSrsOxLJLvi%2BiCQzYs3RqctFFjASVLHauat6OOIYqOihRXNaCXzP%2Bnbjx60qjqXn68MvP4M3y&X-Amz-Signature=79a1820597e73640aef97564890cdffc75e863d108239ef2430a3c7b03dc2d66&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3LRQ5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7f9SF0JOOXW859Y1KhlCscqZ40OkADw3nFfV56x1Z5AiBEUFykalBqkuok2gzb9iJKZarjk1uHy2p9QpTPCS5GGyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMUOk0%2B8mdPhUk%2FRO5KtwDf9TGwXQm6cvqyklS9Bp1HweafNqFvGeidULGREF%2FnVFRuEa9cuja6wXDAnNAabmcKbaGvwismSo4jqkGRCNObLRSQRa0vKXRwCybUxMiGNs3HZvxGAMZ0n1oS9HAoq4R0phpKuBvIVSbRvdZ89WH3fG2M%2FsZEw%2F%2Fa50p6quWq5E%2Bvg6nYLauu%2FgSxkgUANEuUxC9NqZtdkkPitWLu%2FWq5v8SI1fE0HHoAkCvrvNAHLrfhRVYfZFpBAXgl4PZNq6GJiCTJG54yMZiHV%2FtQHoMCiZKVffGT0i%2F%2FCLgRlZcuXszgZiwgMR5OmOPoRqzDhXL49rMg6mC8RfXUvxWPE05Wb%2B3gp%2BLjN1c%2BcY0V%2FT%2BAeRkb8LVUg8cTtzesIDIel7%2FrcKEgliExXQ3v0fXwTxMxzTVFe8pO%2FSkkfspb3%2B%2BZ9KngW6x9MAl0QmkZcMuag35Ar8yPVn2S7V52z9mA9irvSNw4mMvQHBu8wGIA3SI9UqFyKxarrrlTPSDjZEV084plC8XFEMeyvnzOFGfE%2BWxlDrHb7z57bvXFpvhBnvStJslDbVTHwebEyeqawxAhzlCBiNU4B%2BC4Pt%2BiazLeZXw1Kl9AO1H39gnqb7JNGYjU3eLW7LMyKR3RY6uvuEwi9zcvgY6pgFNG55WXanrrk2e2jVBORnivFko7ir53p6Wf6EaEvE0Zf0XAdRGN1MpeLrONP9ssp5lCuPZbHL0afKnkasl1rDokZ%2B7cboMtWSDBXWWdI6c8yBsLpdd%2BUhpFO%2Fe3YKP0T32VZm6VGfFZy1Y1ZdFUtZoSrsOxLJLvi%2BiCQzYs3RqctFFjASVLHauat6OOIYqOihRXNaCXzP%2Bnbjx60qjqXn68MvP4M3y&X-Amz-Signature=4f109fd7b1eed4c579183de3c9ab9c687abbc0daea84995e91d92590b5282039&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3LRQ5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7f9SF0JOOXW859Y1KhlCscqZ40OkADw3nFfV56x1Z5AiBEUFykalBqkuok2gzb9iJKZarjk1uHy2p9QpTPCS5GGyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMUOk0%2B8mdPhUk%2FRO5KtwDf9TGwXQm6cvqyklS9Bp1HweafNqFvGeidULGREF%2FnVFRuEa9cuja6wXDAnNAabmcKbaGvwismSo4jqkGRCNObLRSQRa0vKXRwCybUxMiGNs3HZvxGAMZ0n1oS9HAoq4R0phpKuBvIVSbRvdZ89WH3fG2M%2FsZEw%2F%2Fa50p6quWq5E%2Bvg6nYLauu%2FgSxkgUANEuUxC9NqZtdkkPitWLu%2FWq5v8SI1fE0HHoAkCvrvNAHLrfhRVYfZFpBAXgl4PZNq6GJiCTJG54yMZiHV%2FtQHoMCiZKVffGT0i%2F%2FCLgRlZcuXszgZiwgMR5OmOPoRqzDhXL49rMg6mC8RfXUvxWPE05Wb%2B3gp%2BLjN1c%2BcY0V%2FT%2BAeRkb8LVUg8cTtzesIDIel7%2FrcKEgliExXQ3v0fXwTxMxzTVFe8pO%2FSkkfspb3%2B%2BZ9KngW6x9MAl0QmkZcMuag35Ar8yPVn2S7V52z9mA9irvSNw4mMvQHBu8wGIA3SI9UqFyKxarrrlTPSDjZEV084plC8XFEMeyvnzOFGfE%2BWxlDrHb7z57bvXFpvhBnvStJslDbVTHwebEyeqawxAhzlCBiNU4B%2BC4Pt%2BiazLeZXw1Kl9AO1H39gnqb7JNGYjU3eLW7LMyKR3RY6uvuEwi9zcvgY6pgFNG55WXanrrk2e2jVBORnivFko7ir53p6Wf6EaEvE0Zf0XAdRGN1MpeLrONP9ssp5lCuPZbHL0afKnkasl1rDokZ%2B7cboMtWSDBXWWdI6c8yBsLpdd%2BUhpFO%2Fe3YKP0T32VZm6VGfFZy1Y1ZdFUtZoSrsOxLJLvi%2BiCQzYs3RqctFFjASVLHauat6OOIYqOihRXNaCXzP%2Bnbjx60qjqXn68MvP4M3y&X-Amz-Signature=3c988afc758db14c044e862a4730454ae3607f6144b11b37273862ea740b19d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3LRQ5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7f9SF0JOOXW859Y1KhlCscqZ40OkADw3nFfV56x1Z5AiBEUFykalBqkuok2gzb9iJKZarjk1uHy2p9QpTPCS5GGyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMUOk0%2B8mdPhUk%2FRO5KtwDf9TGwXQm6cvqyklS9Bp1HweafNqFvGeidULGREF%2FnVFRuEa9cuja6wXDAnNAabmcKbaGvwismSo4jqkGRCNObLRSQRa0vKXRwCybUxMiGNs3HZvxGAMZ0n1oS9HAoq4R0phpKuBvIVSbRvdZ89WH3fG2M%2FsZEw%2F%2Fa50p6quWq5E%2Bvg6nYLauu%2FgSxkgUANEuUxC9NqZtdkkPitWLu%2FWq5v8SI1fE0HHoAkCvrvNAHLrfhRVYfZFpBAXgl4PZNq6GJiCTJG54yMZiHV%2FtQHoMCiZKVffGT0i%2F%2FCLgRlZcuXszgZiwgMR5OmOPoRqzDhXL49rMg6mC8RfXUvxWPE05Wb%2B3gp%2BLjN1c%2BcY0V%2FT%2BAeRkb8LVUg8cTtzesIDIel7%2FrcKEgliExXQ3v0fXwTxMxzTVFe8pO%2FSkkfspb3%2B%2BZ9KngW6x9MAl0QmkZcMuag35Ar8yPVn2S7V52z9mA9irvSNw4mMvQHBu8wGIA3SI9UqFyKxarrrlTPSDjZEV084plC8XFEMeyvnzOFGfE%2BWxlDrHb7z57bvXFpvhBnvStJslDbVTHwebEyeqawxAhzlCBiNU4B%2BC4Pt%2BiazLeZXw1Kl9AO1H39gnqb7JNGYjU3eLW7LMyKR3RY6uvuEwi9zcvgY6pgFNG55WXanrrk2e2jVBORnivFko7ir53p6Wf6EaEvE0Zf0XAdRGN1MpeLrONP9ssp5lCuPZbHL0afKnkasl1rDokZ%2B7cboMtWSDBXWWdI6c8yBsLpdd%2BUhpFO%2Fe3YKP0T32VZm6VGfFZy1Y1ZdFUtZoSrsOxLJLvi%2BiCQzYs3RqctFFjASVLHauat6OOIYqOihRXNaCXzP%2Bnbjx60qjqXn68MvP4M3y&X-Amz-Signature=0e365a578ef150531a0cf1404f6703ae86120d412cd509bb8d5da2e23ab6cb3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3LRQ5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7f9SF0JOOXW859Y1KhlCscqZ40OkADw3nFfV56x1Z5AiBEUFykalBqkuok2gzb9iJKZarjk1uHy2p9QpTPCS5GGyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMUOk0%2B8mdPhUk%2FRO5KtwDf9TGwXQm6cvqyklS9Bp1HweafNqFvGeidULGREF%2FnVFRuEa9cuja6wXDAnNAabmcKbaGvwismSo4jqkGRCNObLRSQRa0vKXRwCybUxMiGNs3HZvxGAMZ0n1oS9HAoq4R0phpKuBvIVSbRvdZ89WH3fG2M%2FsZEw%2F%2Fa50p6quWq5E%2Bvg6nYLauu%2FgSxkgUANEuUxC9NqZtdkkPitWLu%2FWq5v8SI1fE0HHoAkCvrvNAHLrfhRVYfZFpBAXgl4PZNq6GJiCTJG54yMZiHV%2FtQHoMCiZKVffGT0i%2F%2FCLgRlZcuXszgZiwgMR5OmOPoRqzDhXL49rMg6mC8RfXUvxWPE05Wb%2B3gp%2BLjN1c%2BcY0V%2FT%2BAeRkb8LVUg8cTtzesIDIel7%2FrcKEgliExXQ3v0fXwTxMxzTVFe8pO%2FSkkfspb3%2B%2BZ9KngW6x9MAl0QmkZcMuag35Ar8yPVn2S7V52z9mA9irvSNw4mMvQHBu8wGIA3SI9UqFyKxarrrlTPSDjZEV084plC8XFEMeyvnzOFGfE%2BWxlDrHb7z57bvXFpvhBnvStJslDbVTHwebEyeqawxAhzlCBiNU4B%2BC4Pt%2BiazLeZXw1Kl9AO1H39gnqb7JNGYjU3eLW7LMyKR3RY6uvuEwi9zcvgY6pgFNG55WXanrrk2e2jVBORnivFko7ir53p6Wf6EaEvE0Zf0XAdRGN1MpeLrONP9ssp5lCuPZbHL0afKnkasl1rDokZ%2B7cboMtWSDBXWWdI6c8yBsLpdd%2BUhpFO%2Fe3YKP0T32VZm6VGfFZy1Y1ZdFUtZoSrsOxLJLvi%2BiCQzYs3RqctFFjASVLHauat6OOIYqOihRXNaCXzP%2Bnbjx60qjqXn68MvP4M3y&X-Amz-Signature=5e6bf9842ef8458c24cd9af3b61ce7919b0e1039043169a14aadcde44927a50d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M3LRQ5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7f9SF0JOOXW859Y1KhlCscqZ40OkADw3nFfV56x1Z5AiBEUFykalBqkuok2gzb9iJKZarjk1uHy2p9QpTPCS5GGyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMUOk0%2B8mdPhUk%2FRO5KtwDf9TGwXQm6cvqyklS9Bp1HweafNqFvGeidULGREF%2FnVFRuEa9cuja6wXDAnNAabmcKbaGvwismSo4jqkGRCNObLRSQRa0vKXRwCybUxMiGNs3HZvxGAMZ0n1oS9HAoq4R0phpKuBvIVSbRvdZ89WH3fG2M%2FsZEw%2F%2Fa50p6quWq5E%2Bvg6nYLauu%2FgSxkgUANEuUxC9NqZtdkkPitWLu%2FWq5v8SI1fE0HHoAkCvrvNAHLrfhRVYfZFpBAXgl4PZNq6GJiCTJG54yMZiHV%2FtQHoMCiZKVffGT0i%2F%2FCLgRlZcuXszgZiwgMR5OmOPoRqzDhXL49rMg6mC8RfXUvxWPE05Wb%2B3gp%2BLjN1c%2BcY0V%2FT%2BAeRkb8LVUg8cTtzesIDIel7%2FrcKEgliExXQ3v0fXwTxMxzTVFe8pO%2FSkkfspb3%2B%2BZ9KngW6x9MAl0QmkZcMuag35Ar8yPVn2S7V52z9mA9irvSNw4mMvQHBu8wGIA3SI9UqFyKxarrrlTPSDjZEV084plC8XFEMeyvnzOFGfE%2BWxlDrHb7z57bvXFpvhBnvStJslDbVTHwebEyeqawxAhzlCBiNU4B%2BC4Pt%2BiazLeZXw1Kl9AO1H39gnqb7JNGYjU3eLW7LMyKR3RY6uvuEwi9zcvgY6pgFNG55WXanrrk2e2jVBORnivFko7ir53p6Wf6EaEvE0Zf0XAdRGN1MpeLrONP9ssp5lCuPZbHL0afKnkasl1rDokZ%2B7cboMtWSDBXWWdI6c8yBsLpdd%2BUhpFO%2Fe3YKP0T32VZm6VGfFZy1Y1ZdFUtZoSrsOxLJLvi%2BiCQzYs3RqctFFjASVLHauat6OOIYqOihRXNaCXzP%2Bnbjx60qjqXn68MvP4M3y&X-Amz-Signature=b9f70800662758bfba9ecccd391e960c48dbf82cfc03fc8c51057d5ab034bd0c&X-Amz-SignedHeaders=host&x-id=GetObject)
