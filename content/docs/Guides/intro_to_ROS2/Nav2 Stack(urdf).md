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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHMSOA5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjDiwdMN5alih%2FuorcqcT%2F4VdoPh%2FMN1keXrW%2FcFrimwIhAMJIgdiyzQCA%2FqrkwF%2FRjiqtyr8BdYop6L6OlTJd214FKv8DCBEQABoMNjM3NDIzMTgzODA1IgzupbgkErmNY8sQfuEq3ANNF%2BlVxPgbOv2mKojv9bNtSMlxmqTA2FYTmBVbP%2BaSVJSyKHuUU%2B3n9dyv0%2B2q0sPX2yBYRbcR9rY%2BPC257YBtL6yaQm3kQrUBjBwt92YlatcD5wY9eexBKR2EQlH98t%2B%2BZYRhQGvzouOd8Xw3ECTfuPzrlOlRyCQTBHa6PrIqBhJdgyWtBtg7X2WppYMZ6zQVVUKRktLl17xmReaFxEiO6CdgXW5xHiSjygVyMoMnoWqy7c5bnhI%2Bx01W%2FIObTfRTycWk1XeZXqYJVPmgSiR%2BNXj5nVc7EhIFQlIsRj678ELh5EYno4Yt0Y8ttA5hsZxrlIGifH5vFPvJGN6QG6g5L5sxuyT420C9UdLHGjVeMzqLTLd0cZFjMXJ7vuAW%2BZKYQZeViMLaflATk%2BOcRM3BQDyS6rp8v6JXerlgaNijcoKxckJtZA1E7rZPJMgi4xKCc7i%2BslaKbyH5Osqn9dO%2BmIFdXOq2s8mnnmMVEmWpUqMv3iW9t8y7W8FaegY6UPPxUJyXXrtj%2Bcs%2Fv05uCL5azKx0cVbbDgF2C4vsbpKd%2Fv%2FbvoU%2FvvwEV4mGj7vRxo8Iq5aQjrIWxszSysSW6z8BzpFGhvqTKYAYQXiRFe%2Fj2rTzDdlII%2B5KkAZUNTDKyra9BjqkAYNYT7jmbACvK%2BdnkSkYOYJNiQRGqme%2FO1ES1MbsSZZCaxxvtDL2ZJFWmPrvSdNVScnJGlb1gK6tfEPE40GtoOI6WxVS3se7rFD%2F8ZPb5tuSc8rNhSy0T0Cvs7u0w7mjHrDx1WCzjk0L3rh4dskTiZSWN9iP8OuKPeqRqizIZd8Lw3UQpGSA30qUoGBnHFrpUw9UPYMf6xvBiPCFCNC0rjl87YUw&X-Amz-Signature=01af2543746ff8836601245fd4b2732951499887d5a6980a8cde83f3e4ee0ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHMSOA5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjDiwdMN5alih%2FuorcqcT%2F4VdoPh%2FMN1keXrW%2FcFrimwIhAMJIgdiyzQCA%2FqrkwF%2FRjiqtyr8BdYop6L6OlTJd214FKv8DCBEQABoMNjM3NDIzMTgzODA1IgzupbgkErmNY8sQfuEq3ANNF%2BlVxPgbOv2mKojv9bNtSMlxmqTA2FYTmBVbP%2BaSVJSyKHuUU%2B3n9dyv0%2B2q0sPX2yBYRbcR9rY%2BPC257YBtL6yaQm3kQrUBjBwt92YlatcD5wY9eexBKR2EQlH98t%2B%2BZYRhQGvzouOd8Xw3ECTfuPzrlOlRyCQTBHa6PrIqBhJdgyWtBtg7X2WppYMZ6zQVVUKRktLl17xmReaFxEiO6CdgXW5xHiSjygVyMoMnoWqy7c5bnhI%2Bx01W%2FIObTfRTycWk1XeZXqYJVPmgSiR%2BNXj5nVc7EhIFQlIsRj678ELh5EYno4Yt0Y8ttA5hsZxrlIGifH5vFPvJGN6QG6g5L5sxuyT420C9UdLHGjVeMzqLTLd0cZFjMXJ7vuAW%2BZKYQZeViMLaflATk%2BOcRM3BQDyS6rp8v6JXerlgaNijcoKxckJtZA1E7rZPJMgi4xKCc7i%2BslaKbyH5Osqn9dO%2BmIFdXOq2s8mnnmMVEmWpUqMv3iW9t8y7W8FaegY6UPPxUJyXXrtj%2Bcs%2Fv05uCL5azKx0cVbbDgF2C4vsbpKd%2Fv%2FbvoU%2FvvwEV4mGj7vRxo8Iq5aQjrIWxszSysSW6z8BzpFGhvqTKYAYQXiRFe%2Fj2rTzDdlII%2B5KkAZUNTDKyra9BjqkAYNYT7jmbACvK%2BdnkSkYOYJNiQRGqme%2FO1ES1MbsSZZCaxxvtDL2ZJFWmPrvSdNVScnJGlb1gK6tfEPE40GtoOI6WxVS3se7rFD%2F8ZPb5tuSc8rNhSy0T0Cvs7u0w7mjHrDx1WCzjk0L3rh4dskTiZSWN9iP8OuKPeqRqizIZd8Lw3UQpGSA30qUoGBnHFrpUw9UPYMf6xvBiPCFCNC0rjl87YUw&X-Amz-Signature=541e2d27cd5794ea6fc898734ea60d6bf104ac4396e671692199b7c1e67532e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHMSOA5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjDiwdMN5alih%2FuorcqcT%2F4VdoPh%2FMN1keXrW%2FcFrimwIhAMJIgdiyzQCA%2FqrkwF%2FRjiqtyr8BdYop6L6OlTJd214FKv8DCBEQABoMNjM3NDIzMTgzODA1IgzupbgkErmNY8sQfuEq3ANNF%2BlVxPgbOv2mKojv9bNtSMlxmqTA2FYTmBVbP%2BaSVJSyKHuUU%2B3n9dyv0%2B2q0sPX2yBYRbcR9rY%2BPC257YBtL6yaQm3kQrUBjBwt92YlatcD5wY9eexBKR2EQlH98t%2B%2BZYRhQGvzouOd8Xw3ECTfuPzrlOlRyCQTBHa6PrIqBhJdgyWtBtg7X2WppYMZ6zQVVUKRktLl17xmReaFxEiO6CdgXW5xHiSjygVyMoMnoWqy7c5bnhI%2Bx01W%2FIObTfRTycWk1XeZXqYJVPmgSiR%2BNXj5nVc7EhIFQlIsRj678ELh5EYno4Yt0Y8ttA5hsZxrlIGifH5vFPvJGN6QG6g5L5sxuyT420C9UdLHGjVeMzqLTLd0cZFjMXJ7vuAW%2BZKYQZeViMLaflATk%2BOcRM3BQDyS6rp8v6JXerlgaNijcoKxckJtZA1E7rZPJMgi4xKCc7i%2BslaKbyH5Osqn9dO%2BmIFdXOq2s8mnnmMVEmWpUqMv3iW9t8y7W8FaegY6UPPxUJyXXrtj%2Bcs%2Fv05uCL5azKx0cVbbDgF2C4vsbpKd%2Fv%2FbvoU%2FvvwEV4mGj7vRxo8Iq5aQjrIWxszSysSW6z8BzpFGhvqTKYAYQXiRFe%2Fj2rTzDdlII%2B5KkAZUNTDKyra9BjqkAYNYT7jmbACvK%2BdnkSkYOYJNiQRGqme%2FO1ES1MbsSZZCaxxvtDL2ZJFWmPrvSdNVScnJGlb1gK6tfEPE40GtoOI6WxVS3se7rFD%2F8ZPb5tuSc8rNhSy0T0Cvs7u0w7mjHrDx1WCzjk0L3rh4dskTiZSWN9iP8OuKPeqRqizIZd8Lw3UQpGSA30qUoGBnHFrpUw9UPYMf6xvBiPCFCNC0rjl87YUw&X-Amz-Signature=c5ae488eb783a68aaa341a731b563553985ba8fbda0aed1d0d9bf30ae1516a04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHMSOA5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjDiwdMN5alih%2FuorcqcT%2F4VdoPh%2FMN1keXrW%2FcFrimwIhAMJIgdiyzQCA%2FqrkwF%2FRjiqtyr8BdYop6L6OlTJd214FKv8DCBEQABoMNjM3NDIzMTgzODA1IgzupbgkErmNY8sQfuEq3ANNF%2BlVxPgbOv2mKojv9bNtSMlxmqTA2FYTmBVbP%2BaSVJSyKHuUU%2B3n9dyv0%2B2q0sPX2yBYRbcR9rY%2BPC257YBtL6yaQm3kQrUBjBwt92YlatcD5wY9eexBKR2EQlH98t%2B%2BZYRhQGvzouOd8Xw3ECTfuPzrlOlRyCQTBHa6PrIqBhJdgyWtBtg7X2WppYMZ6zQVVUKRktLl17xmReaFxEiO6CdgXW5xHiSjygVyMoMnoWqy7c5bnhI%2Bx01W%2FIObTfRTycWk1XeZXqYJVPmgSiR%2BNXj5nVc7EhIFQlIsRj678ELh5EYno4Yt0Y8ttA5hsZxrlIGifH5vFPvJGN6QG6g5L5sxuyT420C9UdLHGjVeMzqLTLd0cZFjMXJ7vuAW%2BZKYQZeViMLaflATk%2BOcRM3BQDyS6rp8v6JXerlgaNijcoKxckJtZA1E7rZPJMgi4xKCc7i%2BslaKbyH5Osqn9dO%2BmIFdXOq2s8mnnmMVEmWpUqMv3iW9t8y7W8FaegY6UPPxUJyXXrtj%2Bcs%2Fv05uCL5azKx0cVbbDgF2C4vsbpKd%2Fv%2FbvoU%2FvvwEV4mGj7vRxo8Iq5aQjrIWxszSysSW6z8BzpFGhvqTKYAYQXiRFe%2Fj2rTzDdlII%2B5KkAZUNTDKyra9BjqkAYNYT7jmbACvK%2BdnkSkYOYJNiQRGqme%2FO1ES1MbsSZZCaxxvtDL2ZJFWmPrvSdNVScnJGlb1gK6tfEPE40GtoOI6WxVS3se7rFD%2F8ZPb5tuSc8rNhSy0T0Cvs7u0w7mjHrDx1WCzjk0L3rh4dskTiZSWN9iP8OuKPeqRqizIZd8Lw3UQpGSA30qUoGBnHFrpUw9UPYMf6xvBiPCFCNC0rjl87YUw&X-Amz-Signature=189d5b6c84c12605f0d23126feee29b89f097ebe87e1f87d1340d9a596ec83ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHMSOA5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjDiwdMN5alih%2FuorcqcT%2F4VdoPh%2FMN1keXrW%2FcFrimwIhAMJIgdiyzQCA%2FqrkwF%2FRjiqtyr8BdYop6L6OlTJd214FKv8DCBEQABoMNjM3NDIzMTgzODA1IgzupbgkErmNY8sQfuEq3ANNF%2BlVxPgbOv2mKojv9bNtSMlxmqTA2FYTmBVbP%2BaSVJSyKHuUU%2B3n9dyv0%2B2q0sPX2yBYRbcR9rY%2BPC257YBtL6yaQm3kQrUBjBwt92YlatcD5wY9eexBKR2EQlH98t%2B%2BZYRhQGvzouOd8Xw3ECTfuPzrlOlRyCQTBHa6PrIqBhJdgyWtBtg7X2WppYMZ6zQVVUKRktLl17xmReaFxEiO6CdgXW5xHiSjygVyMoMnoWqy7c5bnhI%2Bx01W%2FIObTfRTycWk1XeZXqYJVPmgSiR%2BNXj5nVc7EhIFQlIsRj678ELh5EYno4Yt0Y8ttA5hsZxrlIGifH5vFPvJGN6QG6g5L5sxuyT420C9UdLHGjVeMzqLTLd0cZFjMXJ7vuAW%2BZKYQZeViMLaflATk%2BOcRM3BQDyS6rp8v6JXerlgaNijcoKxckJtZA1E7rZPJMgi4xKCc7i%2BslaKbyH5Osqn9dO%2BmIFdXOq2s8mnnmMVEmWpUqMv3iW9t8y7W8FaegY6UPPxUJyXXrtj%2Bcs%2Fv05uCL5azKx0cVbbDgF2C4vsbpKd%2Fv%2FbvoU%2FvvwEV4mGj7vRxo8Iq5aQjrIWxszSysSW6z8BzpFGhvqTKYAYQXiRFe%2Fj2rTzDdlII%2B5KkAZUNTDKyra9BjqkAYNYT7jmbACvK%2BdnkSkYOYJNiQRGqme%2FO1ES1MbsSZZCaxxvtDL2ZJFWmPrvSdNVScnJGlb1gK6tfEPE40GtoOI6WxVS3se7rFD%2F8ZPb5tuSc8rNhSy0T0Cvs7u0w7mjHrDx1WCzjk0L3rh4dskTiZSWN9iP8OuKPeqRqizIZd8Lw3UQpGSA30qUoGBnHFrpUw9UPYMf6xvBiPCFCNC0rjl87YUw&X-Amz-Signature=dbe11e2160cc7ed19b6ad7eaf7ff14b597822fd93c214b1ee81769ae9fb8148b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHMSOA5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjDiwdMN5alih%2FuorcqcT%2F4VdoPh%2FMN1keXrW%2FcFrimwIhAMJIgdiyzQCA%2FqrkwF%2FRjiqtyr8BdYop6L6OlTJd214FKv8DCBEQABoMNjM3NDIzMTgzODA1IgzupbgkErmNY8sQfuEq3ANNF%2BlVxPgbOv2mKojv9bNtSMlxmqTA2FYTmBVbP%2BaSVJSyKHuUU%2B3n9dyv0%2B2q0sPX2yBYRbcR9rY%2BPC257YBtL6yaQm3kQrUBjBwt92YlatcD5wY9eexBKR2EQlH98t%2B%2BZYRhQGvzouOd8Xw3ECTfuPzrlOlRyCQTBHa6PrIqBhJdgyWtBtg7X2WppYMZ6zQVVUKRktLl17xmReaFxEiO6CdgXW5xHiSjygVyMoMnoWqy7c5bnhI%2Bx01W%2FIObTfRTycWk1XeZXqYJVPmgSiR%2BNXj5nVc7EhIFQlIsRj678ELh5EYno4Yt0Y8ttA5hsZxrlIGifH5vFPvJGN6QG6g5L5sxuyT420C9UdLHGjVeMzqLTLd0cZFjMXJ7vuAW%2BZKYQZeViMLaflATk%2BOcRM3BQDyS6rp8v6JXerlgaNijcoKxckJtZA1E7rZPJMgi4xKCc7i%2BslaKbyH5Osqn9dO%2BmIFdXOq2s8mnnmMVEmWpUqMv3iW9t8y7W8FaegY6UPPxUJyXXrtj%2Bcs%2Fv05uCL5azKx0cVbbDgF2C4vsbpKd%2Fv%2FbvoU%2FvvwEV4mGj7vRxo8Iq5aQjrIWxszSysSW6z8BzpFGhvqTKYAYQXiRFe%2Fj2rTzDdlII%2B5KkAZUNTDKyra9BjqkAYNYT7jmbACvK%2BdnkSkYOYJNiQRGqme%2FO1ES1MbsSZZCaxxvtDL2ZJFWmPrvSdNVScnJGlb1gK6tfEPE40GtoOI6WxVS3se7rFD%2F8ZPb5tuSc8rNhSy0T0Cvs7u0w7mjHrDx1WCzjk0L3rh4dskTiZSWN9iP8OuKPeqRqizIZd8Lw3UQpGSA30qUoGBnHFrpUw9UPYMf6xvBiPCFCNC0rjl87YUw&X-Amz-Signature=34e2785193fab8ae12168acedf1f5afad1b60359ee264de2414724a4206ac598&X-Amz-SignedHeaders=host&x-id=GetObject)
