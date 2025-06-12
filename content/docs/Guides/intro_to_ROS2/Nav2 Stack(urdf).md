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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QAMWIL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDriYrk%2FaPcMzrwKaxX%2BnQyMzon45OcKcK7Iokq9eVvQQIhAL83zOUG1fBEGrYDQE9kJh08UdMvAlpT4bXnNVgYP46qKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTRWCmMygZ%2BuXeqY0q3ANbNNIA6KEg24gc%2FuQrMyJClkNztqZ%2BpltPmHvp7ZYcDFvE7K%2Bre%2BgCDQ%2F%2FYxfLjJHpavomTYZ9wnShd9Zu0GU3q5PJPocNbTdBVk40haYzB6eSZTR2KoWSv%2BwaK8AXDrA4Z60O1oVDpDuo0ioHkQ4aw7nUqQy3IdRoI%2BAY1MSc0uCC86Eyt%2F26XOhXnjXu3p5lg9Bz2c11WW%2BjuMqQro0LdrZk56UKklwIH2jlfoWdkgFjtRBgP9%2FPMyenUC40DRr8%2F0FhvBrJrfmJpM%2FfNvW5u0kE%2B3j%2FhH7ulmqAqDx6uEXKT1l88uylygWgNvt%2BS9hby5Uttn43hdaDizbdwRVpDZtu4wMCGBpeJYXyKE%2BijdIdcUyyoT5QCr%2BXKnc7i09gsAyCuPANs1R7Hx2FJRVInMlHjbYg6xCrfdjrUBdocL91Hx0tScnstNfAlvsWNje66XuymqxLGIBjFFCDbm49uC62uxFiEW7i9UboDG5IHBXK2a%2BEG9bOF3Mm4blu%2FjbI7sawme5PZohKWC8vA%2BWpHO2VqwB8ULGYjLuRKcvMhGF%2BKznKQbcj3n0ArayyaHNKyuMG%2FpqZLsbxPhsWNFdHG%2FTZRCUEH1xNqfW6O10V%2FClksOwE9nRHBsKzVzDlkKzCBjqkAfQWjJle%2FBNgYYQyBrvpfz0ndVuVqSwB1eWIj132e3x2nQo7MGYU4KiRYtrNQbqsPoLWHUFZERrwjJiGhIu5yzfnNL18KULw5n%2BpFd%2BxOffeV54k69C6KWWnssmge6y47pNi17O4Cj19BDB5t9x3RyZjx6jcUvvuZft2twSn%2B%2BOgr5j2w0fuWr%2B6OVfzdiGeaUwsqGonf2Ie1bQ2XDxCPV2BxxIt&X-Amz-Signature=7d2650de095423342217f62ae73033926d63b82832eff41ebcef60804e161a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QAMWIL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDriYrk%2FaPcMzrwKaxX%2BnQyMzon45OcKcK7Iokq9eVvQQIhAL83zOUG1fBEGrYDQE9kJh08UdMvAlpT4bXnNVgYP46qKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTRWCmMygZ%2BuXeqY0q3ANbNNIA6KEg24gc%2FuQrMyJClkNztqZ%2BpltPmHvp7ZYcDFvE7K%2Bre%2BgCDQ%2F%2FYxfLjJHpavomTYZ9wnShd9Zu0GU3q5PJPocNbTdBVk40haYzB6eSZTR2KoWSv%2BwaK8AXDrA4Z60O1oVDpDuo0ioHkQ4aw7nUqQy3IdRoI%2BAY1MSc0uCC86Eyt%2F26XOhXnjXu3p5lg9Bz2c11WW%2BjuMqQro0LdrZk56UKklwIH2jlfoWdkgFjtRBgP9%2FPMyenUC40DRr8%2F0FhvBrJrfmJpM%2FfNvW5u0kE%2B3j%2FhH7ulmqAqDx6uEXKT1l88uylygWgNvt%2BS9hby5Uttn43hdaDizbdwRVpDZtu4wMCGBpeJYXyKE%2BijdIdcUyyoT5QCr%2BXKnc7i09gsAyCuPANs1R7Hx2FJRVInMlHjbYg6xCrfdjrUBdocL91Hx0tScnstNfAlvsWNje66XuymqxLGIBjFFCDbm49uC62uxFiEW7i9UboDG5IHBXK2a%2BEG9bOF3Mm4blu%2FjbI7sawme5PZohKWC8vA%2BWpHO2VqwB8ULGYjLuRKcvMhGF%2BKznKQbcj3n0ArayyaHNKyuMG%2FpqZLsbxPhsWNFdHG%2FTZRCUEH1xNqfW6O10V%2FClksOwE9nRHBsKzVzDlkKzCBjqkAfQWjJle%2FBNgYYQyBrvpfz0ndVuVqSwB1eWIj132e3x2nQo7MGYU4KiRYtrNQbqsPoLWHUFZERrwjJiGhIu5yzfnNL18KULw5n%2BpFd%2BxOffeV54k69C6KWWnssmge6y47pNi17O4Cj19BDB5t9x3RyZjx6jcUvvuZft2twSn%2B%2BOgr5j2w0fuWr%2B6OVfzdiGeaUwsqGonf2Ie1bQ2XDxCPV2BxxIt&X-Amz-Signature=e397a039099f5ac27bc394e65320a400b03961ea51081bc7a5a1e6702b9a5200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QAMWIL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDriYrk%2FaPcMzrwKaxX%2BnQyMzon45OcKcK7Iokq9eVvQQIhAL83zOUG1fBEGrYDQE9kJh08UdMvAlpT4bXnNVgYP46qKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTRWCmMygZ%2BuXeqY0q3ANbNNIA6KEg24gc%2FuQrMyJClkNztqZ%2BpltPmHvp7ZYcDFvE7K%2Bre%2BgCDQ%2F%2FYxfLjJHpavomTYZ9wnShd9Zu0GU3q5PJPocNbTdBVk40haYzB6eSZTR2KoWSv%2BwaK8AXDrA4Z60O1oVDpDuo0ioHkQ4aw7nUqQy3IdRoI%2BAY1MSc0uCC86Eyt%2F26XOhXnjXu3p5lg9Bz2c11WW%2BjuMqQro0LdrZk56UKklwIH2jlfoWdkgFjtRBgP9%2FPMyenUC40DRr8%2F0FhvBrJrfmJpM%2FfNvW5u0kE%2B3j%2FhH7ulmqAqDx6uEXKT1l88uylygWgNvt%2BS9hby5Uttn43hdaDizbdwRVpDZtu4wMCGBpeJYXyKE%2BijdIdcUyyoT5QCr%2BXKnc7i09gsAyCuPANs1R7Hx2FJRVInMlHjbYg6xCrfdjrUBdocL91Hx0tScnstNfAlvsWNje66XuymqxLGIBjFFCDbm49uC62uxFiEW7i9UboDG5IHBXK2a%2BEG9bOF3Mm4blu%2FjbI7sawme5PZohKWC8vA%2BWpHO2VqwB8ULGYjLuRKcvMhGF%2BKznKQbcj3n0ArayyaHNKyuMG%2FpqZLsbxPhsWNFdHG%2FTZRCUEH1xNqfW6O10V%2FClksOwE9nRHBsKzVzDlkKzCBjqkAfQWjJle%2FBNgYYQyBrvpfz0ndVuVqSwB1eWIj132e3x2nQo7MGYU4KiRYtrNQbqsPoLWHUFZERrwjJiGhIu5yzfnNL18KULw5n%2BpFd%2BxOffeV54k69C6KWWnssmge6y47pNi17O4Cj19BDB5t9x3RyZjx6jcUvvuZft2twSn%2B%2BOgr5j2w0fuWr%2B6OVfzdiGeaUwsqGonf2Ie1bQ2XDxCPV2BxxIt&X-Amz-Signature=b6ea5bddbcd3bf7fa46b4281b8efda4f2924aa3f16d4b8d35b56b832ffd01af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QAMWIL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDriYrk%2FaPcMzrwKaxX%2BnQyMzon45OcKcK7Iokq9eVvQQIhAL83zOUG1fBEGrYDQE9kJh08UdMvAlpT4bXnNVgYP46qKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTRWCmMygZ%2BuXeqY0q3ANbNNIA6KEg24gc%2FuQrMyJClkNztqZ%2BpltPmHvp7ZYcDFvE7K%2Bre%2BgCDQ%2F%2FYxfLjJHpavomTYZ9wnShd9Zu0GU3q5PJPocNbTdBVk40haYzB6eSZTR2KoWSv%2BwaK8AXDrA4Z60O1oVDpDuo0ioHkQ4aw7nUqQy3IdRoI%2BAY1MSc0uCC86Eyt%2F26XOhXnjXu3p5lg9Bz2c11WW%2BjuMqQro0LdrZk56UKklwIH2jlfoWdkgFjtRBgP9%2FPMyenUC40DRr8%2F0FhvBrJrfmJpM%2FfNvW5u0kE%2B3j%2FhH7ulmqAqDx6uEXKT1l88uylygWgNvt%2BS9hby5Uttn43hdaDizbdwRVpDZtu4wMCGBpeJYXyKE%2BijdIdcUyyoT5QCr%2BXKnc7i09gsAyCuPANs1R7Hx2FJRVInMlHjbYg6xCrfdjrUBdocL91Hx0tScnstNfAlvsWNje66XuymqxLGIBjFFCDbm49uC62uxFiEW7i9UboDG5IHBXK2a%2BEG9bOF3Mm4blu%2FjbI7sawme5PZohKWC8vA%2BWpHO2VqwB8ULGYjLuRKcvMhGF%2BKznKQbcj3n0ArayyaHNKyuMG%2FpqZLsbxPhsWNFdHG%2FTZRCUEH1xNqfW6O10V%2FClksOwE9nRHBsKzVzDlkKzCBjqkAfQWjJle%2FBNgYYQyBrvpfz0ndVuVqSwB1eWIj132e3x2nQo7MGYU4KiRYtrNQbqsPoLWHUFZERrwjJiGhIu5yzfnNL18KULw5n%2BpFd%2BxOffeV54k69C6KWWnssmge6y47pNi17O4Cj19BDB5t9x3RyZjx6jcUvvuZft2twSn%2B%2BOgr5j2w0fuWr%2B6OVfzdiGeaUwsqGonf2Ie1bQ2XDxCPV2BxxIt&X-Amz-Signature=cace528397dab50f6c1812a37d0fa51d7bae125ffc9658dce1cfc42d2d61b810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QAMWIL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDriYrk%2FaPcMzrwKaxX%2BnQyMzon45OcKcK7Iokq9eVvQQIhAL83zOUG1fBEGrYDQE9kJh08UdMvAlpT4bXnNVgYP46qKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTRWCmMygZ%2BuXeqY0q3ANbNNIA6KEg24gc%2FuQrMyJClkNztqZ%2BpltPmHvp7ZYcDFvE7K%2Bre%2BgCDQ%2F%2FYxfLjJHpavomTYZ9wnShd9Zu0GU3q5PJPocNbTdBVk40haYzB6eSZTR2KoWSv%2BwaK8AXDrA4Z60O1oVDpDuo0ioHkQ4aw7nUqQy3IdRoI%2BAY1MSc0uCC86Eyt%2F26XOhXnjXu3p5lg9Bz2c11WW%2BjuMqQro0LdrZk56UKklwIH2jlfoWdkgFjtRBgP9%2FPMyenUC40DRr8%2F0FhvBrJrfmJpM%2FfNvW5u0kE%2B3j%2FhH7ulmqAqDx6uEXKT1l88uylygWgNvt%2BS9hby5Uttn43hdaDizbdwRVpDZtu4wMCGBpeJYXyKE%2BijdIdcUyyoT5QCr%2BXKnc7i09gsAyCuPANs1R7Hx2FJRVInMlHjbYg6xCrfdjrUBdocL91Hx0tScnstNfAlvsWNje66XuymqxLGIBjFFCDbm49uC62uxFiEW7i9UboDG5IHBXK2a%2BEG9bOF3Mm4blu%2FjbI7sawme5PZohKWC8vA%2BWpHO2VqwB8ULGYjLuRKcvMhGF%2BKznKQbcj3n0ArayyaHNKyuMG%2FpqZLsbxPhsWNFdHG%2FTZRCUEH1xNqfW6O10V%2FClksOwE9nRHBsKzVzDlkKzCBjqkAfQWjJle%2FBNgYYQyBrvpfz0ndVuVqSwB1eWIj132e3x2nQo7MGYU4KiRYtrNQbqsPoLWHUFZERrwjJiGhIu5yzfnNL18KULw5n%2BpFd%2BxOffeV54k69C6KWWnssmge6y47pNi17O4Cj19BDB5t9x3RyZjx6jcUvvuZft2twSn%2B%2BOgr5j2w0fuWr%2B6OVfzdiGeaUwsqGonf2Ie1bQ2XDxCPV2BxxIt&X-Amz-Signature=d6d6a572e20a8ab32332a8e92128bd4e64430a3b1317d991037ce8489e2f1f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QAMWIL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDriYrk%2FaPcMzrwKaxX%2BnQyMzon45OcKcK7Iokq9eVvQQIhAL83zOUG1fBEGrYDQE9kJh08UdMvAlpT4bXnNVgYP46qKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTRWCmMygZ%2BuXeqY0q3ANbNNIA6KEg24gc%2FuQrMyJClkNztqZ%2BpltPmHvp7ZYcDFvE7K%2Bre%2BgCDQ%2F%2FYxfLjJHpavomTYZ9wnShd9Zu0GU3q5PJPocNbTdBVk40haYzB6eSZTR2KoWSv%2BwaK8AXDrA4Z60O1oVDpDuo0ioHkQ4aw7nUqQy3IdRoI%2BAY1MSc0uCC86Eyt%2F26XOhXnjXu3p5lg9Bz2c11WW%2BjuMqQro0LdrZk56UKklwIH2jlfoWdkgFjtRBgP9%2FPMyenUC40DRr8%2F0FhvBrJrfmJpM%2FfNvW5u0kE%2B3j%2FhH7ulmqAqDx6uEXKT1l88uylygWgNvt%2BS9hby5Uttn43hdaDizbdwRVpDZtu4wMCGBpeJYXyKE%2BijdIdcUyyoT5QCr%2BXKnc7i09gsAyCuPANs1R7Hx2FJRVInMlHjbYg6xCrfdjrUBdocL91Hx0tScnstNfAlvsWNje66XuymqxLGIBjFFCDbm49uC62uxFiEW7i9UboDG5IHBXK2a%2BEG9bOF3Mm4blu%2FjbI7sawme5PZohKWC8vA%2BWpHO2VqwB8ULGYjLuRKcvMhGF%2BKznKQbcj3n0ArayyaHNKyuMG%2FpqZLsbxPhsWNFdHG%2FTZRCUEH1xNqfW6O10V%2FClksOwE9nRHBsKzVzDlkKzCBjqkAfQWjJle%2FBNgYYQyBrvpfz0ndVuVqSwB1eWIj132e3x2nQo7MGYU4KiRYtrNQbqsPoLWHUFZERrwjJiGhIu5yzfnNL18KULw5n%2BpFd%2BxOffeV54k69C6KWWnssmge6y47pNi17O4Cj19BDB5t9x3RyZjx6jcUvvuZft2twSn%2B%2BOgr5j2w0fuWr%2B6OVfzdiGeaUwsqGonf2Ie1bQ2XDxCPV2BxxIt&X-Amz-Signature=b47f65533d89757b1ef16c39e601f2c3bed5c14ad1206a1b620248fc3cbaaa60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
