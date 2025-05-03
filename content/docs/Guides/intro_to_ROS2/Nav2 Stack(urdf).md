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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLCT62O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDYAbPhc4XdVHHl7wh7z16d92Do8shyk9gj44znGwUvjAiAQBFTPG98MM2KlQq2r9SqUGmSN83GoOwXG7dXQgKSNMCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0JMJis57FffwPEKtwDKN6FGmJWovf12Kj5JL2hJyO48zGRoTle0P3E%2FZ98L8akOxf6%2Fj9gqUrMUG%2B2a6il8DYcRFR0a4IWfbbYwM6h7LCgele5GJhlA84k7H7OtBRGVw4NxE6bXLcK4giXbZoPTpX8d5AYC0dqhgEmmvqSenohHgUa%2FSJLdDf%2BY6a8ntM7d7DeKDgU2Sq1CgSXw%2Bilc5vg%2BWoJQdi7ViTwcQxt48Ki%2BZz%2FNxgFCZrhbHaEySZ%2Bm%2BYw3kqvSfcIsjnij6zQ%2BQ5Z%2B3fPNZl3RQnvwK%2B8gsZ5AinXGevCu%2BuM5ehsDaqqz2A3G%2BLwbSTWADV3OvkDTEq99jOCBhZH987ZuiooyEE%2F%2BbrVa%2Fl6jq54NhhKspjT9KdZBB7UBsHPpERUYkyQh9oQj0DddAcwCgApi4cR561HtMncS8E7e2GClSOptH7clOrXMVNGBCOU98GM4f62Igt5NrxFaons0TvVvmvlrSNK%2FiOv7EVf%2FZ5V9gG8rxGSoccIIpajRZw%2FPpUUCxHo8Af4XVPVGZoqrUe9FqqvodT92l9ORHrF30LCfDgqCLH%2FpKPeByPYDcIcmZ6c4rLJIC1AIINboXQK3OZjD75uwm2%2BzqBhef3FxKAMSf2wzp3SmHaUoZa5qLUqXXYwpdrZwAY6pgGKTBj4VLeb9TN4iVSfgU9MWY8%2BDnCTyDzEPZ%2F8GuWSUolVuzL1rxAvnYHuYI2nLyWOrZzGPWfxbPXOfZXbS73yWks%2FQLzCKJL379t7rwymSGXmJbAH9yqK9FCMXDNg5ilQ80AJ%2BC1JqOqsS1Kfp7DVqMK%2ByuUCjEr3yKD%2Fzgk%2BEe%2FT6dpTwg7Banl0LyDBo4abJtgh9%2FCJKIbxaxZw1wTaR%2BLTjmjW&X-Amz-Signature=29a74c3ec06ba38c867523376032abfed187e3b20d334c3ffa642ef3b3aa124d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLCT62O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDYAbPhc4XdVHHl7wh7z16d92Do8shyk9gj44znGwUvjAiAQBFTPG98MM2KlQq2r9SqUGmSN83GoOwXG7dXQgKSNMCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0JMJis57FffwPEKtwDKN6FGmJWovf12Kj5JL2hJyO48zGRoTle0P3E%2FZ98L8akOxf6%2Fj9gqUrMUG%2B2a6il8DYcRFR0a4IWfbbYwM6h7LCgele5GJhlA84k7H7OtBRGVw4NxE6bXLcK4giXbZoPTpX8d5AYC0dqhgEmmvqSenohHgUa%2FSJLdDf%2BY6a8ntM7d7DeKDgU2Sq1CgSXw%2Bilc5vg%2BWoJQdi7ViTwcQxt48Ki%2BZz%2FNxgFCZrhbHaEySZ%2Bm%2BYw3kqvSfcIsjnij6zQ%2BQ5Z%2B3fPNZl3RQnvwK%2B8gsZ5AinXGevCu%2BuM5ehsDaqqz2A3G%2BLwbSTWADV3OvkDTEq99jOCBhZH987ZuiooyEE%2F%2BbrVa%2Fl6jq54NhhKspjT9KdZBB7UBsHPpERUYkyQh9oQj0DddAcwCgApi4cR561HtMncS8E7e2GClSOptH7clOrXMVNGBCOU98GM4f62Igt5NrxFaons0TvVvmvlrSNK%2FiOv7EVf%2FZ5V9gG8rxGSoccIIpajRZw%2FPpUUCxHo8Af4XVPVGZoqrUe9FqqvodT92l9ORHrF30LCfDgqCLH%2FpKPeByPYDcIcmZ6c4rLJIC1AIINboXQK3OZjD75uwm2%2BzqBhef3FxKAMSf2wzp3SmHaUoZa5qLUqXXYwpdrZwAY6pgGKTBj4VLeb9TN4iVSfgU9MWY8%2BDnCTyDzEPZ%2F8GuWSUolVuzL1rxAvnYHuYI2nLyWOrZzGPWfxbPXOfZXbS73yWks%2FQLzCKJL379t7rwymSGXmJbAH9yqK9FCMXDNg5ilQ80AJ%2BC1JqOqsS1Kfp7DVqMK%2ByuUCjEr3yKD%2Fzgk%2BEe%2FT6dpTwg7Banl0LyDBo4abJtgh9%2FCJKIbxaxZw1wTaR%2BLTjmjW&X-Amz-Signature=5466b2ef44fcad9223f0242f5102b106dcdec852717c94dd45c2730025050696&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLCT62O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDYAbPhc4XdVHHl7wh7z16d92Do8shyk9gj44znGwUvjAiAQBFTPG98MM2KlQq2r9SqUGmSN83GoOwXG7dXQgKSNMCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0JMJis57FffwPEKtwDKN6FGmJWovf12Kj5JL2hJyO48zGRoTle0P3E%2FZ98L8akOxf6%2Fj9gqUrMUG%2B2a6il8DYcRFR0a4IWfbbYwM6h7LCgele5GJhlA84k7H7OtBRGVw4NxE6bXLcK4giXbZoPTpX8d5AYC0dqhgEmmvqSenohHgUa%2FSJLdDf%2BY6a8ntM7d7DeKDgU2Sq1CgSXw%2Bilc5vg%2BWoJQdi7ViTwcQxt48Ki%2BZz%2FNxgFCZrhbHaEySZ%2Bm%2BYw3kqvSfcIsjnij6zQ%2BQ5Z%2B3fPNZl3RQnvwK%2B8gsZ5AinXGevCu%2BuM5ehsDaqqz2A3G%2BLwbSTWADV3OvkDTEq99jOCBhZH987ZuiooyEE%2F%2BbrVa%2Fl6jq54NhhKspjT9KdZBB7UBsHPpERUYkyQh9oQj0DddAcwCgApi4cR561HtMncS8E7e2GClSOptH7clOrXMVNGBCOU98GM4f62Igt5NrxFaons0TvVvmvlrSNK%2FiOv7EVf%2FZ5V9gG8rxGSoccIIpajRZw%2FPpUUCxHo8Af4XVPVGZoqrUe9FqqvodT92l9ORHrF30LCfDgqCLH%2FpKPeByPYDcIcmZ6c4rLJIC1AIINboXQK3OZjD75uwm2%2BzqBhef3FxKAMSf2wzp3SmHaUoZa5qLUqXXYwpdrZwAY6pgGKTBj4VLeb9TN4iVSfgU9MWY8%2BDnCTyDzEPZ%2F8GuWSUolVuzL1rxAvnYHuYI2nLyWOrZzGPWfxbPXOfZXbS73yWks%2FQLzCKJL379t7rwymSGXmJbAH9yqK9FCMXDNg5ilQ80AJ%2BC1JqOqsS1Kfp7DVqMK%2ByuUCjEr3yKD%2Fzgk%2BEe%2FT6dpTwg7Banl0LyDBo4abJtgh9%2FCJKIbxaxZw1wTaR%2BLTjmjW&X-Amz-Signature=8c7d69fde67fd1b23e66ae035064d209d3abae90cdf0e9520905ebf2a47715b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLCT62O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDYAbPhc4XdVHHl7wh7z16d92Do8shyk9gj44znGwUvjAiAQBFTPG98MM2KlQq2r9SqUGmSN83GoOwXG7dXQgKSNMCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0JMJis57FffwPEKtwDKN6FGmJWovf12Kj5JL2hJyO48zGRoTle0P3E%2FZ98L8akOxf6%2Fj9gqUrMUG%2B2a6il8DYcRFR0a4IWfbbYwM6h7LCgele5GJhlA84k7H7OtBRGVw4NxE6bXLcK4giXbZoPTpX8d5AYC0dqhgEmmvqSenohHgUa%2FSJLdDf%2BY6a8ntM7d7DeKDgU2Sq1CgSXw%2Bilc5vg%2BWoJQdi7ViTwcQxt48Ki%2BZz%2FNxgFCZrhbHaEySZ%2Bm%2BYw3kqvSfcIsjnij6zQ%2BQ5Z%2B3fPNZl3RQnvwK%2B8gsZ5AinXGevCu%2BuM5ehsDaqqz2A3G%2BLwbSTWADV3OvkDTEq99jOCBhZH987ZuiooyEE%2F%2BbrVa%2Fl6jq54NhhKspjT9KdZBB7UBsHPpERUYkyQh9oQj0DddAcwCgApi4cR561HtMncS8E7e2GClSOptH7clOrXMVNGBCOU98GM4f62Igt5NrxFaons0TvVvmvlrSNK%2FiOv7EVf%2FZ5V9gG8rxGSoccIIpajRZw%2FPpUUCxHo8Af4XVPVGZoqrUe9FqqvodT92l9ORHrF30LCfDgqCLH%2FpKPeByPYDcIcmZ6c4rLJIC1AIINboXQK3OZjD75uwm2%2BzqBhef3FxKAMSf2wzp3SmHaUoZa5qLUqXXYwpdrZwAY6pgGKTBj4VLeb9TN4iVSfgU9MWY8%2BDnCTyDzEPZ%2F8GuWSUolVuzL1rxAvnYHuYI2nLyWOrZzGPWfxbPXOfZXbS73yWks%2FQLzCKJL379t7rwymSGXmJbAH9yqK9FCMXDNg5ilQ80AJ%2BC1JqOqsS1Kfp7DVqMK%2ByuUCjEr3yKD%2Fzgk%2BEe%2FT6dpTwg7Banl0LyDBo4abJtgh9%2FCJKIbxaxZw1wTaR%2BLTjmjW&X-Amz-Signature=edcb226a099e280a826c60ef5b884d52889a5e7384e928b3e4bfbf9b24aff73f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLCT62O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDYAbPhc4XdVHHl7wh7z16d92Do8shyk9gj44znGwUvjAiAQBFTPG98MM2KlQq2r9SqUGmSN83GoOwXG7dXQgKSNMCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0JMJis57FffwPEKtwDKN6FGmJWovf12Kj5JL2hJyO48zGRoTle0P3E%2FZ98L8akOxf6%2Fj9gqUrMUG%2B2a6il8DYcRFR0a4IWfbbYwM6h7LCgele5GJhlA84k7H7OtBRGVw4NxE6bXLcK4giXbZoPTpX8d5AYC0dqhgEmmvqSenohHgUa%2FSJLdDf%2BY6a8ntM7d7DeKDgU2Sq1CgSXw%2Bilc5vg%2BWoJQdi7ViTwcQxt48Ki%2BZz%2FNxgFCZrhbHaEySZ%2Bm%2BYw3kqvSfcIsjnij6zQ%2BQ5Z%2B3fPNZl3RQnvwK%2B8gsZ5AinXGevCu%2BuM5ehsDaqqz2A3G%2BLwbSTWADV3OvkDTEq99jOCBhZH987ZuiooyEE%2F%2BbrVa%2Fl6jq54NhhKspjT9KdZBB7UBsHPpERUYkyQh9oQj0DddAcwCgApi4cR561HtMncS8E7e2GClSOptH7clOrXMVNGBCOU98GM4f62Igt5NrxFaons0TvVvmvlrSNK%2FiOv7EVf%2FZ5V9gG8rxGSoccIIpajRZw%2FPpUUCxHo8Af4XVPVGZoqrUe9FqqvodT92l9ORHrF30LCfDgqCLH%2FpKPeByPYDcIcmZ6c4rLJIC1AIINboXQK3OZjD75uwm2%2BzqBhef3FxKAMSf2wzp3SmHaUoZa5qLUqXXYwpdrZwAY6pgGKTBj4VLeb9TN4iVSfgU9MWY8%2BDnCTyDzEPZ%2F8GuWSUolVuzL1rxAvnYHuYI2nLyWOrZzGPWfxbPXOfZXbS73yWks%2FQLzCKJL379t7rwymSGXmJbAH9yqK9FCMXDNg5ilQ80AJ%2BC1JqOqsS1Kfp7DVqMK%2ByuUCjEr3yKD%2Fzgk%2BEe%2FT6dpTwg7Banl0LyDBo4abJtgh9%2FCJKIbxaxZw1wTaR%2BLTjmjW&X-Amz-Signature=2587735030f97991012d4c157b7955b190b9ee2d133b26e24fea256686175d76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLCT62O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDYAbPhc4XdVHHl7wh7z16d92Do8shyk9gj44znGwUvjAiAQBFTPG98MM2KlQq2r9SqUGmSN83GoOwXG7dXQgKSNMCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYY0JMJis57FffwPEKtwDKN6FGmJWovf12Kj5JL2hJyO48zGRoTle0P3E%2FZ98L8akOxf6%2Fj9gqUrMUG%2B2a6il8DYcRFR0a4IWfbbYwM6h7LCgele5GJhlA84k7H7OtBRGVw4NxE6bXLcK4giXbZoPTpX8d5AYC0dqhgEmmvqSenohHgUa%2FSJLdDf%2BY6a8ntM7d7DeKDgU2Sq1CgSXw%2Bilc5vg%2BWoJQdi7ViTwcQxt48Ki%2BZz%2FNxgFCZrhbHaEySZ%2Bm%2BYw3kqvSfcIsjnij6zQ%2BQ5Z%2B3fPNZl3RQnvwK%2B8gsZ5AinXGevCu%2BuM5ehsDaqqz2A3G%2BLwbSTWADV3OvkDTEq99jOCBhZH987ZuiooyEE%2F%2BbrVa%2Fl6jq54NhhKspjT9KdZBB7UBsHPpERUYkyQh9oQj0DddAcwCgApi4cR561HtMncS8E7e2GClSOptH7clOrXMVNGBCOU98GM4f62Igt5NrxFaons0TvVvmvlrSNK%2FiOv7EVf%2FZ5V9gG8rxGSoccIIpajRZw%2FPpUUCxHo8Af4XVPVGZoqrUe9FqqvodT92l9ORHrF30LCfDgqCLH%2FpKPeByPYDcIcmZ6c4rLJIC1AIINboXQK3OZjD75uwm2%2BzqBhef3FxKAMSf2wzp3SmHaUoZa5qLUqXXYwpdrZwAY6pgGKTBj4VLeb9TN4iVSfgU9MWY8%2BDnCTyDzEPZ%2F8GuWSUolVuzL1rxAvnYHuYI2nLyWOrZzGPWfxbPXOfZXbS73yWks%2FQLzCKJL379t7rwymSGXmJbAH9yqK9FCMXDNg5ilQ80AJ%2BC1JqOqsS1Kfp7DVqMK%2ByuUCjEr3yKD%2Fzgk%2BEe%2FT6dpTwg7Banl0LyDBo4abJtgh9%2FCJKIbxaxZw1wTaR%2BLTjmjW&X-Amz-Signature=133298f95f796550947257f0b8b925df2b356b3742c311bf03f629f91669a989&X-Amz-SignedHeaders=host&x-id=GetObject)
