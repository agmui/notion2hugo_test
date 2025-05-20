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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNECUI2C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNK32Hil6%2F%2F2hVVDrZhPgPMe%2FwXNEpMBS1qfR1mCnlAiEA31Y%2Bnwcs%2FdYw1PX%2FNJvJM1Ut9pZ1kLJiB30ue5XT%2FT8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcx0BYYfbQujIn37CrcA%2BVNV7OO24k%2FylKsCYed%2FTN1r%2FK0ArMLpZVRwgQCa5kMQTK22rm5yOeYr19F%2FYLCyNTNLfsrg8C%2B2n7V9wYXqr1GzNc4OS1mHq8VasxGrbkpZlkw%2BhxT9ZkOjgjNQ3kQ0Qp%2Fq7tc0G3W%2FxjWURqXzMj3TDARms7WMSbfthloqzRhyAQNyqTbjxlwCjXOzCVAeV1IP%2FdOKrT4ATIFRGxyGuZigtA2jBXabL61q5iNKK1hmBJa0xP9nIFp5UO0IyfAorgNmZJIxGbEWKXsMc1jwDivHdcWxTOeFvvcciylxF2ofy%2F6xHjhC%2Fe6kEXDu7jBrXOsLh10ZKgZlKJDevuKdvoh8DWoxxBsR1KiAD5fqLsFjbNRW9LIolQecn4KcnA3xUnE56rVD3XvC079LB4KMvlmE%2BRKyQdQLtUPWEQ2r3R7NHD%2BnJmQnInJWJYPKl11bhv0TjRXgiWaBW%2BfyZg5%2FokXQbRoCpEX0AcznY3%2Fd2sMwnHMalj7sxJ3J%2F3O6U7p5aRlvK7m8S96h%2Fg2pK5vc7B9I01ulRb0XKIDhr4XkS6GpaHEb0IfKx2%2FUrzrTyoglaC69JIT9VwWZJfZiUWaIpKtdZT%2FPWC%2FPRSJZQZyCBmh4ftwnljLBelvP%2B9SMMqtscEGOqUBqBQ5BbdI2d%2BrgTpXlnMWDAh6XrXLjK495eb%2BkOhqtpgpwVBb8Or6%2BOGrKfT5KVUwM9QobzKGSjlQka%2Foh%2Bp8o252dj93tXwCNoXUoI0DDLzVv7xGMpXMG6Ku0%2Bg9uYhR2morQDbxFms%2FZZj5MNs7qrHX7Wl7gHaGDRQpCTCcPNHOAGRa9q05WKdCOXmDeBJdmqvomSo3CQaDzHT4Ob47k0cx%2B5A1&X-Amz-Signature=47f6345c75eb073c168af82d90fdf8bc20434caa6dfb4ab86e14a99d026565a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNECUI2C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNK32Hil6%2F%2F2hVVDrZhPgPMe%2FwXNEpMBS1qfR1mCnlAiEA31Y%2Bnwcs%2FdYw1PX%2FNJvJM1Ut9pZ1kLJiB30ue5XT%2FT8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcx0BYYfbQujIn37CrcA%2BVNV7OO24k%2FylKsCYed%2FTN1r%2FK0ArMLpZVRwgQCa5kMQTK22rm5yOeYr19F%2FYLCyNTNLfsrg8C%2B2n7V9wYXqr1GzNc4OS1mHq8VasxGrbkpZlkw%2BhxT9ZkOjgjNQ3kQ0Qp%2Fq7tc0G3W%2FxjWURqXzMj3TDARms7WMSbfthloqzRhyAQNyqTbjxlwCjXOzCVAeV1IP%2FdOKrT4ATIFRGxyGuZigtA2jBXabL61q5iNKK1hmBJa0xP9nIFp5UO0IyfAorgNmZJIxGbEWKXsMc1jwDivHdcWxTOeFvvcciylxF2ofy%2F6xHjhC%2Fe6kEXDu7jBrXOsLh10ZKgZlKJDevuKdvoh8DWoxxBsR1KiAD5fqLsFjbNRW9LIolQecn4KcnA3xUnE56rVD3XvC079LB4KMvlmE%2BRKyQdQLtUPWEQ2r3R7NHD%2BnJmQnInJWJYPKl11bhv0TjRXgiWaBW%2BfyZg5%2FokXQbRoCpEX0AcznY3%2Fd2sMwnHMalj7sxJ3J%2F3O6U7p5aRlvK7m8S96h%2Fg2pK5vc7B9I01ulRb0XKIDhr4XkS6GpaHEb0IfKx2%2FUrzrTyoglaC69JIT9VwWZJfZiUWaIpKtdZT%2FPWC%2FPRSJZQZyCBmh4ftwnljLBelvP%2B9SMMqtscEGOqUBqBQ5BbdI2d%2BrgTpXlnMWDAh6XrXLjK495eb%2BkOhqtpgpwVBb8Or6%2BOGrKfT5KVUwM9QobzKGSjlQka%2Foh%2Bp8o252dj93tXwCNoXUoI0DDLzVv7xGMpXMG6Ku0%2Bg9uYhR2morQDbxFms%2FZZj5MNs7qrHX7Wl7gHaGDRQpCTCcPNHOAGRa9q05WKdCOXmDeBJdmqvomSo3CQaDzHT4Ob47k0cx%2B5A1&X-Amz-Signature=8c292031bc013e466eb6aa46408065e13484a20554e305cc3d1dda05434eceb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNECUI2C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNK32Hil6%2F%2F2hVVDrZhPgPMe%2FwXNEpMBS1qfR1mCnlAiEA31Y%2Bnwcs%2FdYw1PX%2FNJvJM1Ut9pZ1kLJiB30ue5XT%2FT8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcx0BYYfbQujIn37CrcA%2BVNV7OO24k%2FylKsCYed%2FTN1r%2FK0ArMLpZVRwgQCa5kMQTK22rm5yOeYr19F%2FYLCyNTNLfsrg8C%2B2n7V9wYXqr1GzNc4OS1mHq8VasxGrbkpZlkw%2BhxT9ZkOjgjNQ3kQ0Qp%2Fq7tc0G3W%2FxjWURqXzMj3TDARms7WMSbfthloqzRhyAQNyqTbjxlwCjXOzCVAeV1IP%2FdOKrT4ATIFRGxyGuZigtA2jBXabL61q5iNKK1hmBJa0xP9nIFp5UO0IyfAorgNmZJIxGbEWKXsMc1jwDivHdcWxTOeFvvcciylxF2ofy%2F6xHjhC%2Fe6kEXDu7jBrXOsLh10ZKgZlKJDevuKdvoh8DWoxxBsR1KiAD5fqLsFjbNRW9LIolQecn4KcnA3xUnE56rVD3XvC079LB4KMvlmE%2BRKyQdQLtUPWEQ2r3R7NHD%2BnJmQnInJWJYPKl11bhv0TjRXgiWaBW%2BfyZg5%2FokXQbRoCpEX0AcznY3%2Fd2sMwnHMalj7sxJ3J%2F3O6U7p5aRlvK7m8S96h%2Fg2pK5vc7B9I01ulRb0XKIDhr4XkS6GpaHEb0IfKx2%2FUrzrTyoglaC69JIT9VwWZJfZiUWaIpKtdZT%2FPWC%2FPRSJZQZyCBmh4ftwnljLBelvP%2B9SMMqtscEGOqUBqBQ5BbdI2d%2BrgTpXlnMWDAh6XrXLjK495eb%2BkOhqtpgpwVBb8Or6%2BOGrKfT5KVUwM9QobzKGSjlQka%2Foh%2Bp8o252dj93tXwCNoXUoI0DDLzVv7xGMpXMG6Ku0%2Bg9uYhR2morQDbxFms%2FZZj5MNs7qrHX7Wl7gHaGDRQpCTCcPNHOAGRa9q05WKdCOXmDeBJdmqvomSo3CQaDzHT4Ob47k0cx%2B5A1&X-Amz-Signature=5597f4bf14f8132df869e118528c8a7715ef1ef27ec05364ae0f760858b57472&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNECUI2C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNK32Hil6%2F%2F2hVVDrZhPgPMe%2FwXNEpMBS1qfR1mCnlAiEA31Y%2Bnwcs%2FdYw1PX%2FNJvJM1Ut9pZ1kLJiB30ue5XT%2FT8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcx0BYYfbQujIn37CrcA%2BVNV7OO24k%2FylKsCYed%2FTN1r%2FK0ArMLpZVRwgQCa5kMQTK22rm5yOeYr19F%2FYLCyNTNLfsrg8C%2B2n7V9wYXqr1GzNc4OS1mHq8VasxGrbkpZlkw%2BhxT9ZkOjgjNQ3kQ0Qp%2Fq7tc0G3W%2FxjWURqXzMj3TDARms7WMSbfthloqzRhyAQNyqTbjxlwCjXOzCVAeV1IP%2FdOKrT4ATIFRGxyGuZigtA2jBXabL61q5iNKK1hmBJa0xP9nIFp5UO0IyfAorgNmZJIxGbEWKXsMc1jwDivHdcWxTOeFvvcciylxF2ofy%2F6xHjhC%2Fe6kEXDu7jBrXOsLh10ZKgZlKJDevuKdvoh8DWoxxBsR1KiAD5fqLsFjbNRW9LIolQecn4KcnA3xUnE56rVD3XvC079LB4KMvlmE%2BRKyQdQLtUPWEQ2r3R7NHD%2BnJmQnInJWJYPKl11bhv0TjRXgiWaBW%2BfyZg5%2FokXQbRoCpEX0AcznY3%2Fd2sMwnHMalj7sxJ3J%2F3O6U7p5aRlvK7m8S96h%2Fg2pK5vc7B9I01ulRb0XKIDhr4XkS6GpaHEb0IfKx2%2FUrzrTyoglaC69JIT9VwWZJfZiUWaIpKtdZT%2FPWC%2FPRSJZQZyCBmh4ftwnljLBelvP%2B9SMMqtscEGOqUBqBQ5BbdI2d%2BrgTpXlnMWDAh6XrXLjK495eb%2BkOhqtpgpwVBb8Or6%2BOGrKfT5KVUwM9QobzKGSjlQka%2Foh%2Bp8o252dj93tXwCNoXUoI0DDLzVv7xGMpXMG6Ku0%2Bg9uYhR2morQDbxFms%2FZZj5MNs7qrHX7Wl7gHaGDRQpCTCcPNHOAGRa9q05WKdCOXmDeBJdmqvomSo3CQaDzHT4Ob47k0cx%2B5A1&X-Amz-Signature=df91256f98e4fe0075c0559f6a2a75bfa1f6bc3cd4fbfcc49bd256ec5e0e1e53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNECUI2C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNK32Hil6%2F%2F2hVVDrZhPgPMe%2FwXNEpMBS1qfR1mCnlAiEA31Y%2Bnwcs%2FdYw1PX%2FNJvJM1Ut9pZ1kLJiB30ue5XT%2FT8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcx0BYYfbQujIn37CrcA%2BVNV7OO24k%2FylKsCYed%2FTN1r%2FK0ArMLpZVRwgQCa5kMQTK22rm5yOeYr19F%2FYLCyNTNLfsrg8C%2B2n7V9wYXqr1GzNc4OS1mHq8VasxGrbkpZlkw%2BhxT9ZkOjgjNQ3kQ0Qp%2Fq7tc0G3W%2FxjWURqXzMj3TDARms7WMSbfthloqzRhyAQNyqTbjxlwCjXOzCVAeV1IP%2FdOKrT4ATIFRGxyGuZigtA2jBXabL61q5iNKK1hmBJa0xP9nIFp5UO0IyfAorgNmZJIxGbEWKXsMc1jwDivHdcWxTOeFvvcciylxF2ofy%2F6xHjhC%2Fe6kEXDu7jBrXOsLh10ZKgZlKJDevuKdvoh8DWoxxBsR1KiAD5fqLsFjbNRW9LIolQecn4KcnA3xUnE56rVD3XvC079LB4KMvlmE%2BRKyQdQLtUPWEQ2r3R7NHD%2BnJmQnInJWJYPKl11bhv0TjRXgiWaBW%2BfyZg5%2FokXQbRoCpEX0AcznY3%2Fd2sMwnHMalj7sxJ3J%2F3O6U7p5aRlvK7m8S96h%2Fg2pK5vc7B9I01ulRb0XKIDhr4XkS6GpaHEb0IfKx2%2FUrzrTyoglaC69JIT9VwWZJfZiUWaIpKtdZT%2FPWC%2FPRSJZQZyCBmh4ftwnljLBelvP%2B9SMMqtscEGOqUBqBQ5BbdI2d%2BrgTpXlnMWDAh6XrXLjK495eb%2BkOhqtpgpwVBb8Or6%2BOGrKfT5KVUwM9QobzKGSjlQka%2Foh%2Bp8o252dj93tXwCNoXUoI0DDLzVv7xGMpXMG6Ku0%2Bg9uYhR2morQDbxFms%2FZZj5MNs7qrHX7Wl7gHaGDRQpCTCcPNHOAGRa9q05WKdCOXmDeBJdmqvomSo3CQaDzHT4Ob47k0cx%2B5A1&X-Amz-Signature=42d980c934460d54937688af748cc02c1b4de5d8784fe11c600b642954ab2723&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNECUI2C%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrNK32Hil6%2F%2F2hVVDrZhPgPMe%2FwXNEpMBS1qfR1mCnlAiEA31Y%2Bnwcs%2FdYw1PX%2FNJvJM1Ut9pZ1kLJiB30ue5XT%2FT8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcx0BYYfbQujIn37CrcA%2BVNV7OO24k%2FylKsCYed%2FTN1r%2FK0ArMLpZVRwgQCa5kMQTK22rm5yOeYr19F%2FYLCyNTNLfsrg8C%2B2n7V9wYXqr1GzNc4OS1mHq8VasxGrbkpZlkw%2BhxT9ZkOjgjNQ3kQ0Qp%2Fq7tc0G3W%2FxjWURqXzMj3TDARms7WMSbfthloqzRhyAQNyqTbjxlwCjXOzCVAeV1IP%2FdOKrT4ATIFRGxyGuZigtA2jBXabL61q5iNKK1hmBJa0xP9nIFp5UO0IyfAorgNmZJIxGbEWKXsMc1jwDivHdcWxTOeFvvcciylxF2ofy%2F6xHjhC%2Fe6kEXDu7jBrXOsLh10ZKgZlKJDevuKdvoh8DWoxxBsR1KiAD5fqLsFjbNRW9LIolQecn4KcnA3xUnE56rVD3XvC079LB4KMvlmE%2BRKyQdQLtUPWEQ2r3R7NHD%2BnJmQnInJWJYPKl11bhv0TjRXgiWaBW%2BfyZg5%2FokXQbRoCpEX0AcznY3%2Fd2sMwnHMalj7sxJ3J%2F3O6U7p5aRlvK7m8S96h%2Fg2pK5vc7B9I01ulRb0XKIDhr4XkS6GpaHEb0IfKx2%2FUrzrTyoglaC69JIT9VwWZJfZiUWaIpKtdZT%2FPWC%2FPRSJZQZyCBmh4ftwnljLBelvP%2B9SMMqtscEGOqUBqBQ5BbdI2d%2BrgTpXlnMWDAh6XrXLjK495eb%2BkOhqtpgpwVBb8Or6%2BOGrKfT5KVUwM9QobzKGSjlQka%2Foh%2Bp8o252dj93tXwCNoXUoI0DDLzVv7xGMpXMG6Ku0%2Bg9uYhR2morQDbxFms%2FZZj5MNs7qrHX7Wl7gHaGDRQpCTCcPNHOAGRa9q05WKdCOXmDeBJdmqvomSo3CQaDzHT4Ob47k0cx%2B5A1&X-Amz-Signature=5f0a2a29d1f0efa4c973d5b5af4f952d1b788cba69d19057260ff53e070da019&X-Amz-SignedHeaders=host&x-id=GetObject)
