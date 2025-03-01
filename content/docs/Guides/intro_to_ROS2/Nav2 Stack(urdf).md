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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKCBTJ7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBK4adsNp%2FqA%2BHEeJKRlokaKSGISTyvJGre2fDF%2F93bsAiBFUpF4ccKiONJ%2BLPsBM8L26zQN57pr0kCf6eat1l1IeiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMegIAZSdj5nb6oSLMKtwDBxlVmJwyOEYeacw8HCuh56YhNiDBYduyri2qvvuYwbuUF8Dx2Dqm0SHKvB%2B7Egq6ttjM44hHAyu0C1cAAiqd1dpRZso9OoRqFgpP3fQwswUcA1VkAGB82gsuZDQHw6kmeiKu%2FKwrD%2Bk%2ByqA5JyiqoOvA5Ij66ZHXBCVuPIfAkYc%2B12nXoxOmWQBvSqHh2rY2Q4oB4Zg8faeGGZoMRuFch0dQPHpoXvfb%2FPSjeSQgwvEaw%2F6ZOQIxrPqqDDLyrGn2KsmQzWFbH3u%2B6IVCqskf9tTwh5zDLl%2BI1wuXDJLjBrupP0axwNJR6kCy6jJNwGVNvp02aKgViW7CXvopyHImL%2FOPRQvmtWdThkbW%2FXgfHxSiQDtpCqrehUJKxc%2F1Vvrg6yPPa8%2BJSOTACLqjP5Z48Qc6HXKXlHHeSgzad9NKXPhBZ9gs51%2Bf5AtYytQdN2CxvbccB%2BRFOsMDoWw%2FeB4Mc26%2BO1pNgcXOtlh4Sj6QqL30CSNNGKfdubyBFa%2BL9cMZWeotptJG%2FM1AoxBTYcBxHQbVaGPoL9UBsybYOymabQ3huf%2FmXIVjyGbXRGKxLBcgXwCWCZRxoyvC1ZYAqy8Z3vpzGslx5cy81e%2BKIGyAc3lyBEB%2F0f2CjHqIuTUwurqLvgY6pgHGqKnCK22mA1zRAFzhR%2FubNyuJb%2FDkONQeEZpzt43F%2BqpUDgQS1SOSeTDcLHsLJj2Al%2FQeANLDlYSu2WNp59JE4lbkvwUfdJqt%2BW7ai6nojiaKL6opBolAT8rtpwRoxzehqjNFwKNlgfeGyXTDSc9zxHIBkMLO9Yb0HFSGo%2FnMVWuVV3o0u1B6ygkcrtlM7c63PKDeyuVbrTtHYmClZTxtZYRtaMUB&X-Amz-Signature=06e28bc734cdef2b97b354b805aa35dfe8ab6e2a99767a2a18b4ac841cc4d8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKCBTJ7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBK4adsNp%2FqA%2BHEeJKRlokaKSGISTyvJGre2fDF%2F93bsAiBFUpF4ccKiONJ%2BLPsBM8L26zQN57pr0kCf6eat1l1IeiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMegIAZSdj5nb6oSLMKtwDBxlVmJwyOEYeacw8HCuh56YhNiDBYduyri2qvvuYwbuUF8Dx2Dqm0SHKvB%2B7Egq6ttjM44hHAyu0C1cAAiqd1dpRZso9OoRqFgpP3fQwswUcA1VkAGB82gsuZDQHw6kmeiKu%2FKwrD%2Bk%2ByqA5JyiqoOvA5Ij66ZHXBCVuPIfAkYc%2B12nXoxOmWQBvSqHh2rY2Q4oB4Zg8faeGGZoMRuFch0dQPHpoXvfb%2FPSjeSQgwvEaw%2F6ZOQIxrPqqDDLyrGn2KsmQzWFbH3u%2B6IVCqskf9tTwh5zDLl%2BI1wuXDJLjBrupP0axwNJR6kCy6jJNwGVNvp02aKgViW7CXvopyHImL%2FOPRQvmtWdThkbW%2FXgfHxSiQDtpCqrehUJKxc%2F1Vvrg6yPPa8%2BJSOTACLqjP5Z48Qc6HXKXlHHeSgzad9NKXPhBZ9gs51%2Bf5AtYytQdN2CxvbccB%2BRFOsMDoWw%2FeB4Mc26%2BO1pNgcXOtlh4Sj6QqL30CSNNGKfdubyBFa%2BL9cMZWeotptJG%2FM1AoxBTYcBxHQbVaGPoL9UBsybYOymabQ3huf%2FmXIVjyGbXRGKxLBcgXwCWCZRxoyvC1ZYAqy8Z3vpzGslx5cy81e%2BKIGyAc3lyBEB%2F0f2CjHqIuTUwurqLvgY6pgHGqKnCK22mA1zRAFzhR%2FubNyuJb%2FDkONQeEZpzt43F%2BqpUDgQS1SOSeTDcLHsLJj2Al%2FQeANLDlYSu2WNp59JE4lbkvwUfdJqt%2BW7ai6nojiaKL6opBolAT8rtpwRoxzehqjNFwKNlgfeGyXTDSc9zxHIBkMLO9Yb0HFSGo%2FnMVWuVV3o0u1B6ygkcrtlM7c63PKDeyuVbrTtHYmClZTxtZYRtaMUB&X-Amz-Signature=c52decb8d751ef2bc027bbee5608e27b379ed0bfd459b61e748cdf8dcd01db28&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKCBTJ7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBK4adsNp%2FqA%2BHEeJKRlokaKSGISTyvJGre2fDF%2F93bsAiBFUpF4ccKiONJ%2BLPsBM8L26zQN57pr0kCf6eat1l1IeiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMegIAZSdj5nb6oSLMKtwDBxlVmJwyOEYeacw8HCuh56YhNiDBYduyri2qvvuYwbuUF8Dx2Dqm0SHKvB%2B7Egq6ttjM44hHAyu0C1cAAiqd1dpRZso9OoRqFgpP3fQwswUcA1VkAGB82gsuZDQHw6kmeiKu%2FKwrD%2Bk%2ByqA5JyiqoOvA5Ij66ZHXBCVuPIfAkYc%2B12nXoxOmWQBvSqHh2rY2Q4oB4Zg8faeGGZoMRuFch0dQPHpoXvfb%2FPSjeSQgwvEaw%2F6ZOQIxrPqqDDLyrGn2KsmQzWFbH3u%2B6IVCqskf9tTwh5zDLl%2BI1wuXDJLjBrupP0axwNJR6kCy6jJNwGVNvp02aKgViW7CXvopyHImL%2FOPRQvmtWdThkbW%2FXgfHxSiQDtpCqrehUJKxc%2F1Vvrg6yPPa8%2BJSOTACLqjP5Z48Qc6HXKXlHHeSgzad9NKXPhBZ9gs51%2Bf5AtYytQdN2CxvbccB%2BRFOsMDoWw%2FeB4Mc26%2BO1pNgcXOtlh4Sj6QqL30CSNNGKfdubyBFa%2BL9cMZWeotptJG%2FM1AoxBTYcBxHQbVaGPoL9UBsybYOymabQ3huf%2FmXIVjyGbXRGKxLBcgXwCWCZRxoyvC1ZYAqy8Z3vpzGslx5cy81e%2BKIGyAc3lyBEB%2F0f2CjHqIuTUwurqLvgY6pgHGqKnCK22mA1zRAFzhR%2FubNyuJb%2FDkONQeEZpzt43F%2BqpUDgQS1SOSeTDcLHsLJj2Al%2FQeANLDlYSu2WNp59JE4lbkvwUfdJqt%2BW7ai6nojiaKL6opBolAT8rtpwRoxzehqjNFwKNlgfeGyXTDSc9zxHIBkMLO9Yb0HFSGo%2FnMVWuVV3o0u1B6ygkcrtlM7c63PKDeyuVbrTtHYmClZTxtZYRtaMUB&X-Amz-Signature=3c2059c0a540379d373b7c74c965dd5c918d7bb353f44436cbd481fa33c09d67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKCBTJ7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBK4adsNp%2FqA%2BHEeJKRlokaKSGISTyvJGre2fDF%2F93bsAiBFUpF4ccKiONJ%2BLPsBM8L26zQN57pr0kCf6eat1l1IeiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMegIAZSdj5nb6oSLMKtwDBxlVmJwyOEYeacw8HCuh56YhNiDBYduyri2qvvuYwbuUF8Dx2Dqm0SHKvB%2B7Egq6ttjM44hHAyu0C1cAAiqd1dpRZso9OoRqFgpP3fQwswUcA1VkAGB82gsuZDQHw6kmeiKu%2FKwrD%2Bk%2ByqA5JyiqoOvA5Ij66ZHXBCVuPIfAkYc%2B12nXoxOmWQBvSqHh2rY2Q4oB4Zg8faeGGZoMRuFch0dQPHpoXvfb%2FPSjeSQgwvEaw%2F6ZOQIxrPqqDDLyrGn2KsmQzWFbH3u%2B6IVCqskf9tTwh5zDLl%2BI1wuXDJLjBrupP0axwNJR6kCy6jJNwGVNvp02aKgViW7CXvopyHImL%2FOPRQvmtWdThkbW%2FXgfHxSiQDtpCqrehUJKxc%2F1Vvrg6yPPa8%2BJSOTACLqjP5Z48Qc6HXKXlHHeSgzad9NKXPhBZ9gs51%2Bf5AtYytQdN2CxvbccB%2BRFOsMDoWw%2FeB4Mc26%2BO1pNgcXOtlh4Sj6QqL30CSNNGKfdubyBFa%2BL9cMZWeotptJG%2FM1AoxBTYcBxHQbVaGPoL9UBsybYOymabQ3huf%2FmXIVjyGbXRGKxLBcgXwCWCZRxoyvC1ZYAqy8Z3vpzGslx5cy81e%2BKIGyAc3lyBEB%2F0f2CjHqIuTUwurqLvgY6pgHGqKnCK22mA1zRAFzhR%2FubNyuJb%2FDkONQeEZpzt43F%2BqpUDgQS1SOSeTDcLHsLJj2Al%2FQeANLDlYSu2WNp59JE4lbkvwUfdJqt%2BW7ai6nojiaKL6opBolAT8rtpwRoxzehqjNFwKNlgfeGyXTDSc9zxHIBkMLO9Yb0HFSGo%2FnMVWuVV3o0u1B6ygkcrtlM7c63PKDeyuVbrTtHYmClZTxtZYRtaMUB&X-Amz-Signature=2831d94f66a5111bbb9b5741cf6b2d5ea381c4f19f319fdc5c42e351f42c61c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKCBTJ7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBK4adsNp%2FqA%2BHEeJKRlokaKSGISTyvJGre2fDF%2F93bsAiBFUpF4ccKiONJ%2BLPsBM8L26zQN57pr0kCf6eat1l1IeiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMegIAZSdj5nb6oSLMKtwDBxlVmJwyOEYeacw8HCuh56YhNiDBYduyri2qvvuYwbuUF8Dx2Dqm0SHKvB%2B7Egq6ttjM44hHAyu0C1cAAiqd1dpRZso9OoRqFgpP3fQwswUcA1VkAGB82gsuZDQHw6kmeiKu%2FKwrD%2Bk%2ByqA5JyiqoOvA5Ij66ZHXBCVuPIfAkYc%2B12nXoxOmWQBvSqHh2rY2Q4oB4Zg8faeGGZoMRuFch0dQPHpoXvfb%2FPSjeSQgwvEaw%2F6ZOQIxrPqqDDLyrGn2KsmQzWFbH3u%2B6IVCqskf9tTwh5zDLl%2BI1wuXDJLjBrupP0axwNJR6kCy6jJNwGVNvp02aKgViW7CXvopyHImL%2FOPRQvmtWdThkbW%2FXgfHxSiQDtpCqrehUJKxc%2F1Vvrg6yPPa8%2BJSOTACLqjP5Z48Qc6HXKXlHHeSgzad9NKXPhBZ9gs51%2Bf5AtYytQdN2CxvbccB%2BRFOsMDoWw%2FeB4Mc26%2BO1pNgcXOtlh4Sj6QqL30CSNNGKfdubyBFa%2BL9cMZWeotptJG%2FM1AoxBTYcBxHQbVaGPoL9UBsybYOymabQ3huf%2FmXIVjyGbXRGKxLBcgXwCWCZRxoyvC1ZYAqy8Z3vpzGslx5cy81e%2BKIGyAc3lyBEB%2F0f2CjHqIuTUwurqLvgY6pgHGqKnCK22mA1zRAFzhR%2FubNyuJb%2FDkONQeEZpzt43F%2BqpUDgQS1SOSeTDcLHsLJj2Al%2FQeANLDlYSu2WNp59JE4lbkvwUfdJqt%2BW7ai6nojiaKL6opBolAT8rtpwRoxzehqjNFwKNlgfeGyXTDSc9zxHIBkMLO9Yb0HFSGo%2FnMVWuVV3o0u1B6ygkcrtlM7c63PKDeyuVbrTtHYmClZTxtZYRtaMUB&X-Amz-Signature=fc86a5d31b028cae14e055bc8201df0ed1fc6fbdd65ae260efcb2b6b17cf8101&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKCBTJ7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBK4adsNp%2FqA%2BHEeJKRlokaKSGISTyvJGre2fDF%2F93bsAiBFUpF4ccKiONJ%2BLPsBM8L26zQN57pr0kCf6eat1l1IeiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMegIAZSdj5nb6oSLMKtwDBxlVmJwyOEYeacw8HCuh56YhNiDBYduyri2qvvuYwbuUF8Dx2Dqm0SHKvB%2B7Egq6ttjM44hHAyu0C1cAAiqd1dpRZso9OoRqFgpP3fQwswUcA1VkAGB82gsuZDQHw6kmeiKu%2FKwrD%2Bk%2ByqA5JyiqoOvA5Ij66ZHXBCVuPIfAkYc%2B12nXoxOmWQBvSqHh2rY2Q4oB4Zg8faeGGZoMRuFch0dQPHpoXvfb%2FPSjeSQgwvEaw%2F6ZOQIxrPqqDDLyrGn2KsmQzWFbH3u%2B6IVCqskf9tTwh5zDLl%2BI1wuXDJLjBrupP0axwNJR6kCy6jJNwGVNvp02aKgViW7CXvopyHImL%2FOPRQvmtWdThkbW%2FXgfHxSiQDtpCqrehUJKxc%2F1Vvrg6yPPa8%2BJSOTACLqjP5Z48Qc6HXKXlHHeSgzad9NKXPhBZ9gs51%2Bf5AtYytQdN2CxvbccB%2BRFOsMDoWw%2FeB4Mc26%2BO1pNgcXOtlh4Sj6QqL30CSNNGKfdubyBFa%2BL9cMZWeotptJG%2FM1AoxBTYcBxHQbVaGPoL9UBsybYOymabQ3huf%2FmXIVjyGbXRGKxLBcgXwCWCZRxoyvC1ZYAqy8Z3vpzGslx5cy81e%2BKIGyAc3lyBEB%2F0f2CjHqIuTUwurqLvgY6pgHGqKnCK22mA1zRAFzhR%2FubNyuJb%2FDkONQeEZpzt43F%2BqpUDgQS1SOSeTDcLHsLJj2Al%2FQeANLDlYSu2WNp59JE4lbkvwUfdJqt%2BW7ai6nojiaKL6opBolAT8rtpwRoxzehqjNFwKNlgfeGyXTDSc9zxHIBkMLO9Yb0HFSGo%2FnMVWuVV3o0u1B6ygkcrtlM7c63PKDeyuVbrTtHYmClZTxtZYRtaMUB&X-Amz-Signature=3dd7bcd89af39ba9b695a08fb1d2986fccf62ea1dc97ae7a623feb230c1005ed&X-Amz-SignedHeaders=host&x-id=GetObject)
